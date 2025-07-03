var a7P, vo, lv, aHP, aHQ, aHR, aHS, aHT, aHU, aHV, aHW, aHX, aHY, aHZ, aHa, aHb, bn, a3r, iB, iC, dX, bq, g6, iD, iE, iL, i6, i7, aPM, c3, c2, bu, d, c1, bz, bw, bj, bT, c0, bv, by, c4, bW, e, m, gW, hy, iG, hr, bp, fz, aPj, hs, fW, aBJ, i8, qF, i3,
	hz, yD, pU, be, aKO, c6, bx, i, f, g1, hm, g, iJ, aCi, aDU, iH, iI, aOO, df, gl, iA, ar, ao, bt, dU, dm, dn, h0, gv, aIa, n8, gZ, z, i2, bo, j9, bm, sL, hl, bh, aKR, aM, iW, i4, yt, a6I, fU, aEC, a1P, i1, ab, hw, c5, k, hv, bs, bE, jg, aP, ct,
	mi, s7, aQ9, qd, t0, xu, iU, bg, lg, lh, yo, ah, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "auto", "center", "<br>", "0.75em", "   ", "span", "hidden", "flex", "1em", "Data", "0.8em", " / ",
		"territorial.io", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em",
		"' target='_blank'>", "undefined", "pre", "</a>", "scroll", "pointer", "password", "middle", "function", "break-word", "bold", "Value", "Escape", "Enter", "1.5em", "0.6em", "0.4em", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap",
		"mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "50%", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🚩 Report", "🔄 Reload", "wheel",
		"underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "long", "logo", "loading",
		"keydown", "italic ", "file", "error", "en-US", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "Bot ", "Battle Royale", "Back",
		"Arial Black, Trebuchet MS", "@room", "1v1", "1.4em", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0.02em brown", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
	];

function a() {
	this.b = 0, this.c = function() {
		d.c(), e.c(), f.c(), g.h.c(), i.j(), k.l && (k.l = !1, m.n())
	}
}

function o() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.p = 13, this.q = this.emojis.length, this.r = 676, this.s = 1024, this.t = this.emojis.indexOf("💀"), this.u = this.t + 1, this.v = this.emojis.indexOf("🥇"), this.w = this.emojis.indexOf("😊"), this.x = function(y) {
		return y < this.r ? String.fromCharCode(55356, 56806 + z.a0(y, 26), 55356, 56806 + y % 26) : this.emojis[Math.min(y - this.r, this.q - 1)]
	}, this.a1 = function(a2) {
		for (var a3 = a2.length - 2, a4 = [], a5 = 0; a5 < a3; a5++) {
			var a6 = a2.charCodeAt(a5) - 56806,
				a7 = a2.charCodeAt(a5 + 2) - 56806;
			0 <= a6 && a6 < 26 && 0 <= a7 && a7 < 26 && (a4.push(26 * a6 + a7), a5 += 3)
		}
		return a4
	}, this.a8 = function(y) {
		return y < this.r
	}, this.a9 = function(y) {
		return y >= 1024 - this.p
	}, this.aA = function(y) {
		return y >= this.r && y < this.r + this.u
	}
}

function aB() {
	var aC, aD, aE, aF, aG, aH, colors = [0, 0, 0],
		aI = -1;

	function ak(a5) {
		var av = aD.aZ + a5 * (ab.gap + aH);
		ah.fillStyle = "rgb(" + (0 === a5 ? 150 : 2 === a5 ? 30 : 0) + "," + (1 === a5 ? 130 : 2 === a5 ? 30 : 0) + "," + (2 === a5 ? 220 : 0) + ")", ah.fillRect(aF, av, colors[a5] * aG, aH), ah.strokeStyle = ao.ap, ah.strokeRect(aF, av, aG, aH), ah
			.fillStyle = ao.ap, ah.font = ar.at.au(0, .32 * aH), ar.at.textBaseline(ah, 1), ar.at.textAlign(ah, 0), ah.fillText(L(0 === a5 ? 3 : 1 === a5 ? 4 : 5) + aU(a5), aF + ab.gap, av + .53 * aH)
	}

	function aU(a5, aw) {
		return aw = aw || 256, z.ax(Math.floor(aw * colors[a5]), 0, aw - 1)
	}

	function b1(az, b0) {
		return !(az < aF || b0 < aD.aZ || az > aD.ag + aD.af || b0 > aD.aZ + aD.ae)
	}
	this.show = function() {
		var y = aP.aQ.data[121].value;
		colors[0] = (y >> 12) / 63, colors[1] = (y >> 6 & 63) / 63, colors[2] = (63 & y) / 63, aC.show(), this.resize()
	}, this.aR = function() {
		aP.aS.aT(121, (aU(0, 64) << 12) + (aU(1, 64) << 6) + aU(2, 64)), aC.aR()
	}, this.resize = function() {
		aC.resize(), aD.resize();
		var aV = f.aW,
			aX = aC.aY(),
			ac = (aD.aZ = Math.max(aD.aZ, aV * aX.aa + ab.gap), aV * aX.ad - 2 * ab.gap);
		aD.ae = Math.min(aD.ae, ac), aD.af = 2 * aD.ae, aD.aZ = aV * aX.aa + .5 * (aV * aX.ad - aD.ae), aD.ag = .5 * (f.af - aD.af), aE = .25 * aD.af, aF = aD.ag + aE + ab.gap, aG = aD.af - aE - ab.gap, aH = (aD.ae - 2 * ab.gap) / 3
	}, this.n = function() {
		var al, am, an;
		aC.n(), ah.lineWidth = ab.ai, al = aU(0), am = aU(1), an = aU(2), ah.fillStyle = "rgb(" + al + "," + am + "," + an + ")", ah.fillRect(aD.ag, aD.aZ, aE, aD.ae), ah.strokeStyle = ao.ap, ah.strokeRect(aD.ag, aD.aZ, aE, aD.ae), ah.fillStyle =
			al + am + an < 306 && am < 150 ? ao.ap : ao.aq, ar.at.textBaseline(ah, 1), ar.at.textAlign(ah, 1), ah.font = ar.at.au(0, .1 * aD.ae), ah.rotate(-Math.PI / 2), ah.fillText(L(2), -aD.aZ - .5 * aD.ae, aD.ag + .5 * aE), ah.setTransform(1,
				0, 0, 1, 0, 0), ak(0), ak(1), ak(2)
	}, this.ay = function(az, b0) {
		b1(az, b0) && (aI = z.ax(Math.floor((b0 - aD.aZ) / (aH + .75 * ab.gap)), 0, 2), colors[aI] = z.ax((az - aF) / aG, 0, 1), k.l = !0)
	}, this.b2 = function(az) {
		-1 !== aI && (colors[aI] = z.ax((az - aF) / aG, 0, 1), k.l = !0)
	}, this.b3 = function(az, b0, deltaY) {
		b1(az, b0) && (az = z.ax(Math.floor((b0 - aD.aZ) / (aH + .75 * ab.gap)), 0, 2), colors[az] = z.ax(colors[az] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), k.l = !0)
	}, this.b5 = function() {
		0 <= aI && (aI = -1, k.l = !0)
	}, this.b6 = function(aV) {
		2 === aV && aC.b7[0].b8()
	}, aC = new aK(L(0), [new aL("⬅️ " + L(1), function() {
		aM.h.aN()
	})], !1), aD = new aO([.5, .25], [.5, .5], 1)
}

function b9() {
	var bA, bB, bC;

	function bO(a5) {
		var button = bW.bD[a5],
			ag = button.ag,
			aZ = button.aZ,
			af = button.af,
			ae = button.ae;
		ah.fillStyle = button.bL, ah.fillRect(ag, aZ, af, ae), a5 === bA && (ah.fillStyle = bC, ah.fillRect(ag, aZ, af, ae)), ah.lineWidth = ab.ai, ah.strokeStyle = bB, ah.strokeRect(ag, aZ, af, ae),
			function(button) {
				var ag = button.ag,
					aZ = button.aZ,
					af = button.af,
					ae = button.ae;
				ar.at.textAlign(ah, 1), ar.at.textBaseline(ah, 1), ah.font = button.font, ah.fillStyle = bB, ah.fillText(button.bK, Math.floor(ag + af / 2), Math.floor(aZ + ae / 2 + .1 * button.fontSize))
			}(button)
	}
	this.af = 0, this.ae = 0, this.aZ = 0, this.gap = 0, this.aJ = function() {
		bA = -1, bB = ao.ap, bC = "rgba(255,255,255,0.16)", this.bD = new Array(7), this.ae = Math.floor((bE.bF.bG() ? .123 : .093) * f.bH), this.af = Math.floor((bE.bF.bG() ? 3.96 : 4.2) * this.ae), this.gap = Math.floor(.025 * this.af);
		var bI = Math.floor(.26 * this.ae),
			bJ = ar.at.au(1, bI);
		this.bD[0] = {
			ag: 0,
			aZ: 0,
			af: Math.floor(.6 * this.af - this.gap / 2),
			ae: this.ae,
			bK: "Multiplayer",
			font: bJ,
			bL: "rgba(22,88,22,0.8)",
			fontSize: bI
		}, bI = Math.floor(.18 * this.ae), bJ = ar.at.au(1, bI), this.bD[1] = {
			ag: 0,
			aZ: 0,
			af: this.af - this.bD[0].af - this.gap,
			ae: this.ae,
			bK: "Single Player",
			font: bJ,
			bL: "rgba(22,88,88,0.8)",
			fontSize: bI
		}, this.bD[2] = {
			ag: 0,
			aZ: 0,
			af: this.af,
			ae: Math.floor(.3 * this.ae),
			bK: "",
			font: this.bD[1].font,
			bL: "rgba(100,0,0,0.8)",
			fontSize: this.bD[1].fontSize
		}, this.bD[3] = {
			ag: 0,
			aZ: 0,
			af: this.af,
			ae: this.ae,
			bK: "Back",
			font: this.bD[0].font,
			bL: "rgba(0,0,0,0.8)",
			fontSize: this.bD[0].fontSize
		}, this.bD[4] = {
			ag: 0,
			aZ: 0,
			af: this.af,
			ae: Math.floor(.3 * this.ae),
			bK: "The game was updated!",
			font: this.bD[1].font,
			bL: "rgba(100,0,0,0.8)",
			fontSize: this.bD[1].fontSize
		}, this.bD[5] = {
			ag: 0,
			aZ: 0,
			af: this.bD[0].af,
			ae: Math.floor(.8 * this.ae),
			bK: "Reload",
			font: this.bD[0].font,
			bL: "rgba(0,100,0,0.8)",
			fontSize: this.bD[0].fontSize
		}, this.bD[6] = {
			ag: 0,
			aZ: 0,
			af: this.bD[1].af,
			ae: this.bD[5].ae,
			bK: "Back",
			font: this.bD[0].font,
			bL: "rgba(0,0,0,0.8)",
			fontSize: this.bD[0].fontSize
		}, this.bM()
	}, this.bM = function() {
		this.aZ = Math.floor(.54 * f.ae), this.bD[0].ag = Math.floor(.5 * f.af - .5 * this.af), this.bD[1].ag = this.bD[0].ag + this.bD[0].af + this.gap, this.bD[2].ag = this.bD[3].ag = this.bD[0].ag, this.bD[4].ag = this.bD[5].ag = this.bD[0]
			.ag, this.bD[6].ag = this.bD[1].ag, this.bD[0].aZ = Math.floor(.54 * f.ae), this.bD[1].aZ = this.bD[0].aZ, this.bD[2].aZ = Math.floor((f.ae - this.bD[2].ae - this.bD[3].ae - this.gap) / 2), this.bD[3].aZ = this.bD[2].aZ + this.bD[2]
			.ae + this.gap, this.bD[4].aZ = Math.floor((f.ae - this.bD[4].ae - this.bD[5].ae - this.gap) / 2), this.bD[5].aZ = this.bD[6].aZ = this.bD[4].aZ + this.bD[4].ae + this.gap
	}, this.bN = function() {
		bO(0), bO(1)
	}, this.bP = function() {
		bO(2), bO(3)
	}, this.bQ = function() {
		bO(4), bO(5), bO(6)
	}, this.b2 = function(ag, aZ, bR) {
		var a5 = -1;
		return 0 === m.bS() ? a5 = this.b1(ag, aZ, 0, 2) : 3 === m.bS() ? a5 = this.b1(ag, aZ, 3, 1) : 5 === m.bS() && (a5 = this.b1(ag, aZ, 5, 2)), bA !== a5 && (bA = a5, bR) && (k.l = !0), -1 !== a5 && (bT.bU(), !0)
	}, this.b1 = function(ag, aZ, bV, size) {
		for (var a5 = bV; a5 < bV + size; a5++)
			if (ag >= this.bD[a5].ag && aZ >= this.bD[a5].aZ && ag <= this.bD[a5].ag + this.bD[a5].af && aZ <= this.bD[a5].aZ + this.bD[a5].ae) return a5;
		return -1
	}
}

function bY() {
	this.h = new bZ, this.ba = new bb, this.aJ = function() {
		this.h.aJ()
	}, this.c = function() {
		0 !== this.h.bc && this.h.bc--
	}
}

function bd() {
	be.bf(), ah.setTransform(bg, 0, 0, bg, 0, 0), ah.imageSmoothingEnabled = bg < 3, ah.drawImage(bh.bi, bj.bk(), bj.bl()), bm.ba.n(), ah.drawImage(bn, bj.bk(), bj.bl()), be.n(), bo.n(), bp.n(), (bq.br ? (bs.n(), bt) : (bu.n(), bv.n(), bw.n(), bt
	.n(), bx.n(), by.n(), bj.n(), bz.n(), bs.n(), c0.n(), c1.n(), c2.n(), c3.n(), c4.n(), c5.n(), c6)).n(), aM.n()
}

function c7(c8, af, ae) {
	c8.clearRect(0, 0, af, ae), c8.fillStyle = ao.c9, c8.fillRect(0, 0, af, ae)
}

function cA(c8, af, ae, cB) {
	c8.fillStyle = ao.ap, c8.fillRect(0, 0, af, cB), c8.fillRect(0, 0, cB, ae), c8.fillRect(af - cB, 0, cB, ae), c8.fillRect(0, ae - cB, af, cB)
}

function cC(c8, ag, aZ, cD, cB, cE, cF) {
	c8.fillStyle = ao.ap;
	var cE = Math.floor(cD * cE),
		cH = (cE += (cE - cB) % 2, Math.floor((cE - cB) / 2)),
		cD = Math.floor((cD - cE) / 2);
	c8.fillRect(ag + cD, aZ + cD + cH, cE, cB), cF && c8.fillRect(ag + cD + cH, aZ + cD, cB, cE)
}

function aK(title, cJ, cK) {
	var cL = document.createElement("div"),
		cM = document.createElement("div"),
		cN = document.createElement("div"),
		cO = document.createElement("div"),
		cP = document.createElement("div");
	this.cQ = cN, this.b7 = cJ, this.show = function() {
			!1 !== cK ? document.body.appendChild(cL) : (document.body.appendChild(cM), document.body.appendChild(cO))
		}, this.aR = function() {
			!1 !== cK ? document.body.removeChild(cL) : (document.body.removeChild(cM), document.body.removeChild(cO))
		}, this.aY = function() {
			var aa = ar.at.cX(.1),
				cY = ar.at.cX(.08 + .04 * (f.cZ < 1));
			return {
				aa: aa,
				cY: cY,
				ad: f.ae / f.aW - aa - cY
			}
		}, this.resize = function(ca) {
			var a3 = cJ.length,
				aX = this.aY(),
				aa = aX.aa,
				cY = aX.cY;
			for (cM.style.height = ar.at.cc(aa), ar.at.cd(cM, 2), cO.style.top = ar.at.cc(f.ae / f.aW - cY), cO.style.height = ar.at.cc(cY), ar.at.cd(cO, 8), cN.style.top = ar.at.cc(aa), cN.style.height = cN.style.maxHeight = ar.at.cc(aX.ad), cM
				.style.font = ar.at.au(0, ar.at.cX(.02, .3)), cO.style.font = ar.at.au(0, ar.at.cX(.02, .7)), cN.style.font = ar.at.au(0, ar.at.cX(.02, .7)), a5 = 1; a5 < a3; a5++) ar.at.cd(cJ[a5].button, 4);
			for (var ce = 0, a5 = 0; a5 < a3; a5++) ce += cJ[a5].button.offsetWidth;
			if (ca && ce < cO.offsetWidth)
				for (a5 = 0; a5 < a3; a5++) cJ[a5].button.style.width = (100 * cJ[a5].button.offsetWidth / ce).toFixed(2) + "%";
			else
				for (a5 = 0; a5 < a3; a5++) cJ[a5].button.style.width = "auto";
			cO.cf && (cO.scrollLeft = cO.cf), ca || this.resize(!0)
		}, this.n = function() {
			var aX = this.aY(),
				aV = f.aW;
			ah.fillStyle = ao.cR, ah.fillRect(0, aV * aX.aa, f.af, aV * aX.ad)
		}, cL.style.position = "absolute", cL.style.top = "0", cL.style.left = "0", cL.style.width = "100%", cL.style.height = "100%", cM.style.position = "absolute", cM.style.top = "0", cM.style.left = "0", cM.style.width = "100%", cM.style
		.display = "flex", cM.style.backgroundColor = ao.cR, cO.style.position = "absolute", cO.style.left = "0", cO.style.width = "100%", ar.at.cS(cO), cP.style.height = cP.style.maxHeight = "100%", cN.style.position = "absolute", cN.style.width =
		"100%", cN.style.backgroundColor = ao.cR,
		function() {
			for (var a5 = 0; a5 < cJ.length; a5++) cJ[a5].button.style.height = "100%", cJ[a5].button.style.padding = "0.0em 0.9em"
		}();
	for (var a5 = 0; a5 < cJ.length; a5++) cP.appendChild(cJ[a5].button);
	cM.appendChild(function() {
		var cW = document.createElement("h1");
		return cW.textContent = title, cW.style.margin = "auto", cW.style.fontSize = 20 < title.length && f.ae > f.af ? "1.8em" : "2.3em", cW.style.webkitTextStroke = "0.02em brown", cW.style.fontFamily = "Arial Black, Trebuchet MS", cW
	}()), cO.appendChild(cP), !1 !== cK && (cL.appendChild(cN), cL.appendChild(cM), cL.appendChild(cO))
}

function cg() {
	var af, ag, ch, canvas, c8, ci, cj, ck, cl, cm, cn = 11 / 12;

	function cs() {
		var cx = Math.floor(cj * (af - 2 * ch)),
			cy = 1 + Math.floor(.0625 * bw.ae),
			cz = 1 + Math.floor(.3 * bw.ae),
			d0 = Math.floor(.55 * bw.ae);
		c8.clearRect(0, 0, af, bw.ae), c8.fillStyle = ao.cR, c8.fillRect(0, 0, ch, bw.ae), c8.fillRect(ch + cx, 0, af - ch - cx, bw.ae), c8.fillStyle = cj < 1 / 3 ? "rgba(" + Math.floor(3 * cj * 130) + ",130,0,0.85)" : cj < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (cj - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (cj - 2 / 3) * 130) + ",0.85)", c8.fillRect(ch, 0, cx, bw.ae), c8.fillStyle = ao.ap, c8.fillRect(0, 0, af, 1), c8.fillRect(0, bw.ae - 1, af, 1),
			c8.fillRect(0, 0, 1, bw.ae), c8.fillRect(ch, 0, 1, bw.ae), c8.fillRect(ch + cx, 0, 1, bw.ae), c8.fillRect(af - ch, 0, 1, bw.ae), c8.fillRect(af - 1, 0, 1, bw.ae), c8.fillRect(Math.floor(.25 * bw.ae) + cz, Math.floor((bw.ae - cy) / 2), bw
				.ae - 2 * cz, cy), c8.fillRect(Math.floor(af - 1.25 * bw.ae) + cz, Math.floor((bw.ae - cy) / 2), bw.ae - 2 * cz - cz % 2, cy), c8.fillRect(Math.floor(af - 1.25 * bw.ae) + Math.floor((bw.ae - cy) / 2), cz, cy, bw.ae - 2 * cz - cz % 2),
			ck = ar.d1.d2(bq.d3, bw.d4()), c8.fillText(ar.d5.d6(ck) + " (" + ar.d5.d7(100 * cj, +(cj < .1)) + ")", Math.floor(.5 * af), d0)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		cj = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => bw.dK(arg1);

	function dI(dN) {
		return !(1 < dN && 1 === cj || (1 < dN && dN * cj - cj < 1 / 1024 ? dN = (cj + 1 / 1024) / cj : dN < 1 && cj - dN * cj < 1 / 1024 && (dN = (cj - 1 / 1024) / cj), cj = z.ax(cj * dN, 1 / 1024, 1), cs(), 0))
	}

	function dJ(az) {
		return cj !== (cj = z.ax((az - ag - ch) / (af - 2 * ch), 1 / 1024, 1)) && (cs(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		cs(), k.l = !0
	}, this.aZ = 0, this.co = !1, this.aJ = function() {
		ci = !bq.cp && !bq.cq, cm = !1, cj = .5, ck = 0, this.co = !1, this.resize()
	}, this.resize = function() {
		bE.bF.bG() && f.af < .8 * f.ae ? (this.ae = Math.floor(.066 * f.bH), af = f.af - 4 * ab.gap - this.ae) : (af = Math.floor((bE.bF.bG() ? .65 : .389) * f.bH), af += 12 - af % 12, this.ae = Math.floor(af / 12)), ch = Math.floor(3 * this.ae /
			2), cl = ar.at.au(1, Math.floor(.5 * this.ae)), (canvas = document.createElement("canvas")).width = af, __fx.mobileKeybinds.setSize(af, this.ae, ah), canvas.height = this.ae, (c8 = canvas.getContext("2d", {
			alpha: !0
		})).font = cl, ar.at.textBaseline(c8, 1), ar.at.textAlign(c8, 1), this.cr(), cs()
	}, this.cr = function() {
		ag = bE.bF.bG() && f.af < .8 * f.ae ? this.ae + 3 * ab.gap : Math.floor((f.af - af) / 2), this.aZ = f.ae - this.ae - ct.cu() * ab.gap
	}, this.bR = function() {
		cm && (cm = !1, cs())
	}, this.ci = function() {
		return !(!ci || c2.d8 && ag < Math.floor(ab.gap + 5.5 * this.ae))
	}, this.d9 = function(dA) {
		return !!this.ci() && ag + af > f.af - dA - ab.gap
	}, this.dB = function() {
		ci = !bq.cq
	}, this.dC = function() {
		ci = !1
	}, this.d4 = function() {
		return z.ax(Math.floor(1024 * cj + .5) - 1, 0, 1023)
	}, this.b1 = function(az, b0) {
		return this.ci() && ag < az && az < ag + af && b0 > this.aZ
	}, this.ay = function(az, b0) {
		if (!this.ci()) return !1;
		if (!(__fx.settings.keybindButtons && b0 > this.aZ - Math.floor(ab.gap / 4) - this.ae && b0 < this.aZ - Math.floor(ab.gap / 4) && __fx.mobileKeybinds.click(az - ag))) {
			if (!bw.b1(az, b0)) return !1;
			bj.dF = !1, ! function(dH, az, b0) {
				if (function(az, b0) {
						return ag < az && az < ag + ch && b0 > bw.aZ
					}(az, b0)) return dI(cn);
				if (function(az, b0) {
						return ag + af - ch < az && az < ag + af && b0 > bw.aZ
					}(az, b0)) return dI(1 / cn);
				return dH.co = !0, dJ(az)
			}(this, az, b0) || (k.l = !0)
		}
		return !0
	}, this.dK = function(dL) {
		0 !== bq.dM && this.ci() && dI(dL) && (k.l = !0)
	}, this.b3 = function(deltaY) {
		var dL;
		return !(0 === deltaY || !this.ci()) && dI(dL = 0 < deltaY ? (dL = 400 / (400 + deltaY)) < cn ? cn : dL : 1 / cn < (dL = (400 - deltaY) / 400) ? 1 / cn : dL)
	}, this.b2 = function(az) {
		return !!this.co && dJ(az)
	}, this.dP = function() {
		this.co = !1
	}, this.c = function() {
		this.ci() && ck !== ar.d1.d2(bq.d3, this.d4()) && (cm = !0)
	}, this.n = function() {
		this.ci() && (ah.drawImage(canvas, ag, this.aZ), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(ah, ag, this.aZ)
	}
}

function dQ() {
	this.L84 = ["Choose Your Nation's Color!", "Back", "National Color", "Red: ", "Green: ", "Blue: ", "second played", "seconds played", "Next Contest: ", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains",
		"Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "🧈 Gold Transfer", "Source Account", "Target Account", "Amount",
		"Confirm", "Cancel", "Send", "Send gold only to trusted accounts!", "You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.",
		"Top 100 players receive a daily gold payout.", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "Territorial Income", "Options", "Default", "Uniform", "Customized", "Replay Error",
		"Warning", "Loading...", "Ship launched!", "Ship selected!", "Ship on the way!", "Spawning", "Random", "Clustered", "Selectable Spawn", "Activated", "📜 Game Log", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible",
		"Hint: The top 9 emojis are ordered by usage.", "Hint: Select a boat to send it to a new location.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.",
		"Hint: Hover with the mouse over a player and press {0} to attack them.", "No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY",
		"THE GAME HAS BEEN WON BY", "MAP:", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "🏆 Leaderboards", "🛠️ List Options", "Start Index", "End Index", "Load Data",
		"Clan Name Search", "Username Search", "Quantity", "Account Name Search", "An enemy ship belonging to {0} is heading towards your shore.", "Previous 10", "Next 10", "🛠️ Options", "1v1 Player Ranking", "Clan Ranking",
		"Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Audit Log", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index",
		"Seconds Ago", "Accuser", "Accused", "Percentage", "Voter", "Votes", "Sender", "Receiver", "Number", "Gold", "Admin", "Affected Account", "Type", "Elo Deducted", "Bio Removed", "Login", "➡️ Login", "Account Name", "Password", "Show",
		"Hide", "Adjust", "Colors", "Selectable Color", "Player Count", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "This is a contest!", "Accept",
		"You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!",
		"You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}",
		"Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.",
		"The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You have signed a non-aggression pact with {0}.",
		"You have asked {0} to sign a non-aggression pact.", "{0} has accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.", "You have asked {0} to attack {1}.",
		"{0} suggests you attack {1}.", "You have exported 1 resource to {0}.", "You have exported {10} resources to {1}.", "A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.",
		"A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.", "Map: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.",
		"{10} players have left the game.", "{10} players have surrendered.", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Lobby", "Player Names", "Kingdom Names", "Simple Names", "Selectable Name",
		"Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Type your message here...", "LEADERBOARD", "⏳ Connecting...", "Find Server...", "New Connection...",
		"Territory", "Income", "Growth", "Numbers", "Statistics", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "Refresh", "Public Profile", "🧈 Gold", "Monopolist",
		"Banker", "Miner", "Saver", "Starter", "Account Balance: ", "Rank: ", "Status: ",
		"Play multiplayer games to earn gold. Accounts without gold will be deleted! Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Copy",
		"Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist", "Soldier", "Recruit", "Rating: ",
		"Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "Username", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.",
		"Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}",
		"Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats",
		"Once the monthly points of the secondary clan surpass the monthly points of the primary clan, the secondary clan will become the new primary clan.", "In this scenario, your clan leader statistics will be reset.",
		"Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Every week, you can vote for one clan member to increase their clan leader points.",
		"You and this clan member must have the same primary clan, which can be checked in the Primary Clan Stats.", "A clan leader gains gold whenever a member earns gold in a game.", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active",
		"Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Extra Gold Income", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can share their membership with you.", "Additional Income", "Quit Game", "More", "You have earned a participation reward of {10} gold.", "The prize money has been distributed as follows:", "and {10} more",
		"You have earned {10} gold.", "You have earned {10} battle royale points!", "Clan {0} has won {11} points.", "You have earned {10} clan points!", "You have earned an additional {10} gold because you played for {1}.",
		"Check clan results at this page: ", "Map", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Select File", "Preview", "Map Name", "Loading", "{0} has called the peace vote.",
		"{0} has voted for peace.", "{0} has rejected peace.", "Custom Scenario", "⚔️ Play", "Settings", "Game Mode", "Mixed", "Team dependent", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...",
		"Save As File...", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs",
		"Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "🔑 My Account", "📜 Logs", "📈 Clan Charts", "⚙️ Settings", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data",
		"Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.",
		"Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Timeframe", "More Options", "Y-Axis Compression", "🔑 Show Account", "🚨 Moderation Actions",
		"🚩 Report User", "💬 Mention", "🔄 Reset", "Reload Required", "A game reload is required to apply the new configuration.", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Reset", "Language", "Humans", "Players", "Bots",
		"Spectators", "Threshold", "Time", "1v1", "Zombie", "Chat", "Close", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Clan Chart", "{0} has defeated {1}!", "Team {0}", "Team {0} has won the game!"
	]
}

function dR() {
	this.dS = function(dT) {
		var username = aP.aQ.data[122].value.slice(0, 20),
			username = (dU.dV(24 + 16 * username.length + 18 + 18), dU.dW(1, 0), dU.dW(6, 1), dU.dW(10, dX.dY), dU.dW(2, aP.aQ.data[158].value), g.dZ.da(username), ar.color.dc(aP.h.dd())),
			username = (dU.dW(6, username[0]), dU.dW(6, username[1]), dU.dW(6, username[2]), df.dg());
		dU.dW(9, username[0]), dU.dW(9, username[1]), g.h.dh = dT, g.h.send(dT, dU.di)
	}, this.dj = function(dk, dl) {
		dm.aJ(), dm.dW(1, 0), dm.dW(6, 2), dm.dW(3, dk), 2 === dk ? dm.dW(2, dl) : 3 === dk ? dn.dp.dq(dl, 7, dm) : 5 === dk && (dm.dW(3, dl.id), dm.dW(3, dl.value), dm.dW(30, dl.dr)), g.h.send(g.h.dh, dm.ds())
	}
}

function dt(du, dv, dw) {
	this.dx = document.createElement("div"), this.bD = du;
	var dy = 0;
	this.resize = function(e1, ca) {
		var a3 = du.length;
		if (!dw)
			for (var a5 = 1; a5 < a3; a5++) ar.at.cd(du[a5].button, 4);
		for (var ce = 0, a5 = 0; a5 < a3; a5++) ce += du[a5].button.offsetWidth;
		if (e1 && (dy = e1.offsetWidth), ca && ce < dy)
			for (a5 = 0; a5 < a3; a5++) du[a5].button.style.width = (100 * du[a5].button.offsetWidth / ce).toFixed(2) + "%";
		else
			for (a5 = 0; a5 < a3; a5++) du[a5].button.style.width = "auto";
		ca || this.resize(e1, 1)
	};
	var dH = this;
	dH.dx.style.height = dH.dx.style.maxHeight = "100%";
	for (var a5 = 0; a5 < du.length; a5++) du[a5].e0(dv), du[a5].button.style.height = "100%", du[a5].button.style.padding = "0.0em 0.9em", dH.dx.appendChild(du[a5].button)
}

function e2() {
	this.e3 = [], this.e4 = [], this.aJ = function() {
		this.e3 = [], this.e4 = []
	}, this.c = function() {
		0 <= this.e3.length && this.e5(this.e3), 0 <= this.e4.length && this.e5(this.e4)
	}, this.e5 = function(a4) {
		for (var an = -1, a5 = a4.length - 1; 0 <= a5; a5--)
			if (a4[a5].e6--, a4[a5].e6 <= 0) {
				an = a5;
				break
			} for (a5 = an; 0 <= a5; a5--) a4.shift()
	}, this.e7 = function(id, e8, e9) {
		return this.eA(this.e3, id, e8, e9)
	}, this.eB = function(id, e8, e9) {
		return this.eA(this.e4, id, e8, e9)
	}, this.eA = function(a4, id, e8, e9) {
		return ! function(a4, id, e8) {
			var a5, eE;
			for (a5 = e8.length - 1; 0 <= a5; a5--)
				for (eE = a4.length - 1; 0 <= eE; eE--)
					if (a4[eE].player === e8[a5] && id === a4[eE].id) return 1;
			return
		}(a4, id, e8) && (e9 && function(a4, id, e8) {
			var a5;
			for (a5 = e8.length - 1; 0 <= a5; a5--) a4.push({
				player: e8[a5],
				id: id,
				e6: 384
			})
		}(a4, id, e8), !0)
	}
}

function eF() {
	this.eG = new eH, this.eI = new eJ
}

function eK() {
	var a4, eL, eM, eN, gap, eO, eP, eQ, eR, eS, cl, eT, eU, eV, cx, eW, eX;

	function eb() {
		eN = Math.floor(.2 * (bE.bF.bG() ? .07 : .035) * f.bH), eN = ee(bE.bF.bG() ? 3 : 1, eN);
		var ef = f.af / (a4.length + gap);
		eN = eN < ef ? ef : eN, cx = Math.floor((1 - gap) * eN), eL = 0, eg()
	}

	function eg() {
		eL = (eL = eL < -20 ? -20 : eL) > (a4.length - 15) * eN ? (a4.length - 15) * eN : eL, eP = Math.floor(eL / eN), eQ = (eQ = eP + Math.floor(f.af / eN)) > a4.length - 1 ? a4.length - 1 : eQ, eP = (eP = eQ < eP ? eQ : eP) < 0 ? 0 : eP;
		var ei = eQ;
		eO = eM / a4[ei];
		for (var a5 = eQ - 1; eP <= a5; a5--) a4[a5] > a4[ei] && (ei = a5, eO = eM / Math.pow(a4[a5], eV))
	}

	function ej(ag) {
		ag = Math.floor((eL + f.af - ag - gap * eN) / eN);
		return (ag = ag < -1 ? -1 : -1 === ag ? 0 : ag > a4.length - 1 ? -1 : ag) !== eR && (eR = ag, -1 === eW && 0 === eR && bT.eY && (eW = setInterval(ek, 100)), 1)
	}

	function en(a5) {
		var er = Math.floor(eO * Math.pow(a4[a5], eV));
		ah.fillRect(eL + f.af - (a5 + 1) * eN, f.ae - er, cx, er)
	}

	function ek() {
		var cE;
		0 !== (eR = 8 === m.bS() ? -1 : eR) ? (eX = (new Date).getTime(), clearInterval(eW), eW = -1) : (cE = a4[1] / 864e3, -1 !== eX && (cE += ((new Date).getTime() - eX) * a4[1] / 864e5, eX = -1), 0 < cE && (a4[0] += Math.floor(cE), k.l = !0))
	}
	this.eY = !1, this.aJ = function() {
		eX = eW = -1, eR = -(eV = 1), this.eZ = !1, eU = 0, eT = new Date, eL = 0, gap = .3, a4 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		eM = Math.floor(.15 * f.ae), eS = (eS = Math.floor((bE.bF.bG() ? .018 : .0137) * f.bH)) < 2 ? 2 : eS, cl = ar.at.au(1, eS), eb()
	}, this.ec = function(ed) {
		var a5;
		for (this.eY = !0, a5 = 0; a5 < ed.length; a5++) a4.unshift(ed[a5]);
		eb(), k.l = !0
	}, this.bM = function() {
		eg()
	}, this.b2 = function(ag, aZ) {
		aZ > f.ae - .6 * eM ? this.eZ ? ag !== eU && (eL += ag - eU, eU = ag, eg(), ej(ag), this.eZ = -1 !== eR, k.l = !0) : ej(ag) && (k.l = !0) : this.bU()
	}, this.bU = function() {
		-1 !== eR && (this.eZ = !1, eR = -1, k.l = !0)
	}, this.b3 = function(ag, deltaY) {
		-1 !== eR && (eL += Math.floor(deltaY), eg(), ej(ag), k.l = !0)
	}, this.ay = function(ag, aZ) {
		this.b2(ag, aZ), -1 !== eR && (eU = ag, this.eZ = !0)
	}, this.el = function() {
		-1 !== eR && (this.eZ = !1)
	}, this.n = function() {
		ah.fillStyle = ao.em;
		for (var es, month, dO, cH, ev, ew, ex, ey, ez, a5 = eQ; eP <= a5; a5--) en(a5);
		this.eY && 0 === eP && (ah.fillStyle = ao.eo, en(0)), -1 !== eR && (ah.fillStyle = ao.ep, en(eR)), -1 !== eR && (ah.font = cl, ar.at.textBaseline(ah, 2), (dO = new Date).setTime(eT.getTime() - 1e3 * eR * 60 * 60 * 24), month = "month",
			es = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dO), es = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dO)), es = es + ", " + dO.getUTCDate() + " " + month + " " + dO.getFullYear(), month = 1 === a4[eR] ? L(6) : L(7), month = ar.d5.d6(a4[eR]) + " " + month, dO = Math.floor(ah.measureText(es).width), cH = Math.floor(ah
				.measureText(month).width), ev = Math.floor(.5 * (dO + eS)), ew = (ew = eL + f.af - (eR + 1) * eN) < ev ? ev : ew > f.af - ev ? f.af - ev : ew, ex = f.ae - Math.floor(eO * Math.pow(a4[eR], eV)), ey = Math.floor(1.1 * eS), ez =
			ex > f.ae - ey ? f.ae - ey : ex, ah.fillStyle = ao.c9, ah.fillRect(f.af - cH - eS, ez - ey, cH + eS, ey), ah.fillRect(ew - ev, f.ae - ey, dO + eS, ey), ah.fillStyle = ao.ap, ar.at.textAlign(ah, 2), ah.fillText(month, Math.floor(f
				.af - .5 * eS), ez), ar.at.textAlign(ah, 1), ah.fillText(es, ew, f.ae), ah.strokeStyle = ao.f0, ah.lineWidth = 1, ah.beginPath(), ah.moveTo(0, ex), ah.lineTo(f.af, ex), ah.closePath(), ah.stroke())
	}
}

function f1() {
	var f2, canvas, f3, f4;

	function fC(b4, name, fD, a2) {
		f3[b4] = name, canvas[b4] = new Image, canvas[b4].onload = function() {
			! function(b4, fD) {
				var fG, dl = null;
				7 === fD ? fG = ar.fH.fI : 8 === fD ? (fG = ar.fH.fJ, dl = .1) : 3 === fD ? (fG = ar.fH.fK, dl = .06) : 5 === fD ? fG = ar.fH.fL : 6 === fD ? fG = ar.fH.fM : 4 === fD && (fG = ar.fH.fN);
				canvas[b4] = ar.fH.fO(canvas[b4], fG, dl)
			}(b4, fD), fF()
		}, canvas[b4].onerror = function(cb) {
			console.error("Error loading image at index", b4, "Error:", cb), fF()
		}, canvas[b4].src = "data:image/png;base64," + a2
	}

	function fF() {
		f2--, f9()
	}

	function f9() {
		0 === f2 && (f2 = -1, fB(), k.l = !0, canvas[7] = f4, canvas[8] = f4, canvas[9] = f4, canvas[10] = f4, 5 === aM.fQ) && aM.fR().fS.resize()
	}

	function fB() {
		c3.fT(), fU.fV([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== bE.id, 1 !== bE.id, !0, !0, !0]), fW.fX = new fY, fW.fX.aJ(), bx.fZ()
	}
	this.aJ = function() {
		if (void 0 === canvas) {
			f2 = 23, canvas = new Array(f2), f3 = new Array(f2), (f4 = document.createElement("canvas")).width = 1;
			for (var a5 = f2 - (f4.height = 1); 0 <= a5; a5--) canvas[a5] = f4;
			fB(), fC(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), fC(1, "victory", 6,
				"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), fC(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), fC(3, "orders", 6,
					"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"
					), fC(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), fC(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="), fC(
					6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAptRLHQAAAAAAAAAAAAAAAAAA5K4OHTpE165dY++9947dd989SktLo3nz5tGoUaNo2LBhlJSUxA477BCFhYX/8X2ffvppfPbZZ/Hxxx/HunXr4sMPP4z3338/3nnnnVi1alW88sorsWjRoli7dm2iRwYAAAAAAAAAAAAAQJYZ7gEAAAAAAAAAAAAAAAAAIiKie/fucfTRR0eXLl2ibdu2seeee0aTJk1q7f4qKyvjrbfeipUrV8ayZcvimWeeiTlz5sTbb79da/cJAAAAAAAAAAAAAAAREQURsTF1BAAAAAAAAAAAAAAAAACw/bVp0yYGDBgQvXr1iq5du0azZs1SJ0VlZWUsX748nn322ViwYEHcfvvtUVFRkToLAAAAAAAAAAAAAIA6xnAPAAAAAAAAAAAAAAAAAGRIq1atYtiwYXHEEUdEly5dol69eqmTNmvNmjWxePHiuP/+++Pmm2+OysrK1EkAAAAAAAAAAAAAANQBhnsAAAAAAAAAAAAAAAAAIANOOeWUOOOMM6Jnz55RXFycOqdG3nnnnZg3b15cd911sXTp0tQ5AAAAAAAAAAAAAADkMcM9AAAAAAAAAAAAAAAAAFBHFRYWxqhRo+KMM86Idu3apc7ZZj7//PN4+umn48c//nE89NBDqXMAAAAAAAAAAAAAAMhDhnsAAAAAAAAAAAAAAAAAoA668MILY+jQodG6devUKbVm48aNsXDhwpg8eXLMnTs3dQ4AAAAAAAAAAAAAAHnEcA8AAAAAAAAAAAAAAAAA1CEnnXRSjB8/Pjp27Jg6ZbuprKyMefPmRVlZWbz00kupcwAAAAAAAAAAAAAAyAOGewAAAAAAAAAAAAAAAID/csUVV0T79u1TZ2TO9OnTY8GCBakzyFOtWrWK6dOnx7HHHhsFBQWpc5JYt25dzJgxI8rLy6OysjJ1DgAAAAAAAAAAAAAAOcxwDwAAAAAAAAAAAAAAAPBfFi9eHN/4xjdSZ2TO0KFDY9asWakzyENnnXVWTJ48OZo1a5Y6JSe88MILcc4558SSJUtSpwAAAAAAAAAAAAAAkKMKUwcAAAAAAAAAAAAAAAAAADVTv379uOOOO2LWrFlGe/5Nly5d4rHHHosRI0akTgEAAAAAAAAAAAAAIEcZ7gEAAAAAAAAAAAAAAACAPNSuXbtYvHhxnHLKKVFQUJA6J+c0btw4rr766rj99tujsNDHKQEAAAAAAAAAAAAA+E+uNAcAAAAAAAAAAAAAAACAPHPIIYfE448/HgcccEDqlJx36qmnxtNPPx1NmzZNnQIAAAAAAAAAAAAAQA4x3AMAAAAAAAAAAAAAAAAAeaR///7xwAMPRMuWLVOn5I2DDz44fv/730ebNm1SpwAAAAAAAAAAAAAAkCMM9wAAAAAAAAAAAAAAAABAnujfv3/Mnj07mjZtmjol73To0CHmzZtnvAcAAAAAAAAAAAAAgIgw3AMAAAAAAAAAAAAAAAAAeaFPnz4xe/bs2HHHHVOn5K22bdvGI488Ei1atEidAgAAAAAAAAAAAABAYoZ7AAAAAAAAAAAAAAAAACDHde/e3WjPNtKuXbt46KGHoqSkJHUKAAAAAAAAAAAAAAAJGe4BAAAAAAAAAAAAAAAAgBxWWload9xxRzRr1ix1Sp3RtWvXuPvuu1NnAAAAAAAAAAAAAACQkOEeAAAAAAAAAAAAAAAAAMhh9957b+y1116pM+qcY489NiZPnpw6AwAAAAAAAAAAAACARAz3AAAAAAAAAAAAAAAAAECOuvzyy+PQQw9NnVFnDR8+PPr27Zs6AwAAAAAAAAAAAACABAz3AAAAAAAAAAAAAAAAAEAOOuyww+L8889PnVGnNWjQIKZNmxaNGjVKnQIAAAAAAAAAAAAAwHZmuAcAAAAAAAAAAAAAAAAAckxhYWFMnTo1SkpKUqfUea1bt44ZM2akzgAAAAAAAAAAAAAAYDsz3AMAAAAAAAAAAAAAAAAAOWbixImx7777ps7IjFNOOSWOOeaY1BkAAAAAAAAAAAAAAGxH9VIHAAAAAAAAAAAAAABAXVFaWhr77LNPtGjRInbZZZfYeeedo2nTptGkSZNo0qRJ1KtXL3bYYYcoKSmJevXqRaNGjaKgoOBf319YWBgNGzaMDRs2xKeffvqv2ysqKuKTTz6JTz/9NDZs2BAfffRRfPzxx7F27dr48MMP48MPP4z33nsv/va3v8Vrr70Wb7/9doqHDwBsI61atYpzzz03dUam1KtXLyZOnBjz589PnQIAAAAAAAAAAAAAwHZiuAcAAAAAAAAAAAAAALagsLAwDjzwwGjfvn20bt06WrZsGbvttls0a9YsSktLo0mTJtG0adMoKSlJnRoREZ999lmsWbMmPvjgg3jvvffi7bffjrfffjtWrVoVy5Yti8WLF8e7776bOhMA2IQpU6ZE06ZNU2dkTrdu3WLYsGExY8aM1CkAAAAAAAAAAAAAAGwHhnsAAAAAAAAAAAAAAOCfOnToED179ox99tnnXwM9LVu2jBYtWkT9+vVT51VZgwYNYtddd41dd911k1/zj3/8I956661YtWpV/OUvf4lly5bFkiVL4plnntmOpQDAF7Vt2zb69++fOiOzfvjDHxruAQAAAAAAAAAAAADICMM9AAAAAAAAAAAAAABkTv369aN3795x0EEHRadOnaJ169axxx57RNOmTVOnbTc777xz7LzzztGxY8f/uH3dunXx17/+NZYvXx5//vOfY+HChTF//vyorKxMVAoA2TJhwoRo2LBh6ozM2nvvveO8886LadOmpU4BAAAAAAAAAAAAAKCWFUTExtQRAAAAAAAAAAAAAABQmw477LA49NBDo2vXrtGuXbto3bp11K9fP3VW3vjkk0/i9ddfjz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), fC(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), fC(8,
					"googleplay", 3,
					"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"
					), fC(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), fC(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), fC(11, "emojis", 4,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), fC(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), fC(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), fC(14, "bestPlayer", 5,
					"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"
					), fC(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), fC(16, "apple", 3,
					"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"
					), fC(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), fC(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), fC(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), fC(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), fC(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), fC(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(b4) {
		return canvas[b4]
	}, this.f6 = function(name) {
		for (var a5 = f3.length - 1; 0 <= a5; a5--)
			if (f3[a5] === name) return canvas[a5];
		return f4
	}, this.f7 = function() {
		return f2 <= 0
	}, this.f8 = function() {
		f2 = 0, f9()
	}
}

function fa() {
	var bK, bc, fb, af, ae, font, a2;

	function fh(fi) {
		return fi < 10 ? "0" + fi : String(fi)
	}
	this.aJ = function() {
		a2 = L(8)
	}, this.resize = function() {
		af = Math.floor((bE.bF.bG() ? .53 : .36) * f.bH), ae = Math.floor(.065 * af), font = ar.at.au(1, Math.floor(.9 * ae)), fb--, this.setTime()
	}, this.c = function() {
		this.setTime() && (k.l = !0)
	}, this.setTime = function() {
		for (var dO = new Date, fd = dO.getUTCMinutes(), fe = dO.getUTCSeconds(), ff = [0, 10, 20, 25, 30, 35, 40, 45, 50], fg = (bc = 3600 - 60 * fd - fe, bc %= 300, 300), a5 = 0; a5 < ff.length; a5++)
			if ((60 * fd + fe + bc) % 3600 == 60 * ff[a5]) {
				fg = 0;
				break
			} return bc += fg, bK = a2 + fh(Math.floor(bc / 60)) + ":" + fh(bc % 60), fb !== (fb = 60 * fd + fe) && (af = bz.measureText(bK, font), af += Math.floor(.4 * ae), !0)
	}, this.n = function() {
		ah.lineWidth = 1 + Math.floor(ae / 15), ah.translate(f.af - ae, Math.floor(.5 * (f.ae + af))), ah.rotate(-Math.PI / 2), ah.fillStyle = ao.ap, ah.fillRect(0, 0, af, ae), ah.strokeStyle = ao.aq, ah.strokeRect(0, 0, af, ae + 10), ah
			.fillStyle = ao.aq, ah.font = font, ar.at.textBaseline(ah, 1), ar.at.textAlign(ah, 1), ah.fillText(bK, Math.floor(af / 2), Math.floor(.59 * ae)), ah.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function fj() {
	var fk, fl, fm;
	this.aJ = function() {
		fk = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), fl =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Zombie Overlord"
			.split(";"), fm = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Final Stronghold;Guarded Sector"
			.split(";");
		for (var fn = ["K ", " Y", "E ", " Z", " z", " s", "S "], fo = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a5 = fk.length - 1; 0 <= a5; a5--)
			for (var fp = fn.length - 1; 0 <= fp; fp--) fk[a5] = fk[a5].replace(fn[fp], fo[fp]);
		if (__fx.settings.realisticNames) fk = realisticNames;
	}, this.fq = function() {
		var a3 = bq.fx,
			fy = fz.fy,
			g0 = fz.g0,
			playerNamesData = bq.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < a3)
			for (var a5 = 0; a5 < a3; a5++) fy[a5] = g0[a5] = "Player " + g1.g2(1e3);
		else
			for (a5 = 0; a5 < a3; a5++) fy[a5] = g0[a5] = playerNamesData[a5]
	}, this.dV = function() {
		if (9 === bq.fs) {
			for (var al = g1.random(), g3 = fm, g4 = fl, g5 = g6.g5, a3 = g3.length, ei = bq.data.teamPlayerCount[7], fy = fz.fy, g0 = fz.g0, a5 = ei - 1; a5 >= bq.fx; a5--) fy[a5] = g0[a5] = g3[(a5 + al) % a3];
			for (a3 = g4.length - 1, a5 = ei; a5 < bq.g7; a5++) fy[a5] = g0[a5] = g4[g5[a5] ? a3 : a5 % a3]
		} else(2 === bq.data.playerNamesType ? function() {
			for (var a3 = bq.g7, fy = fz.fy, g0 = fz.g0, playerNamesData = bq.data.playerNamesData, a5 = bq.fx; a5 < a3; a5++) fy[a5] = g0[a5] = playerNamesData[a5]
		} : 1 === bq.data.playerNamesType ? function() {
			for (var fy = fz.fy, g0 = fz.g0, a5 = bq.fx; a5 < bq.g7; a5++) fy[a5] = g0[a5] = "Bot " + g1.g2(1e3)
		} : function() {
			for (var g8 = fk, a3 = g8.length, al = g1.random(), fy = fz.fy, g0 = fz.g0, a5 = bq.fx; a5 < bq.g7; a5++) fy[a5] = g0[a5] = g8[(a5 + al) % a3]
		})()
	}
}

function g9() {
	this.dq = function(a2, gA, gB) {
		for (var gC = [], a3 = a2.length, max = 0, a5 = 0; a5 < a3; a5++) {
			var y = a2.charCodeAt(a5);
			gC.push(y), max = Math.max(max, y)
		}
		var gD = max < 128 ? 7 : 16;
		for (gB.dW(gA, a3), gB.dW(1, +(16 == gD)), a5 = 0; a5 < a3; a5++) gB.dW(gD, gC[a5])
	}
}

function fY() {
	this.ci = !1;
	this.gI = [], this.gJ = 100;
	var gE, ex, gap, cD, gF, gH, gK = 0,
		gL = new Array(9),
		gM = [],
		gN = [],
		gO = 0,
		gP = 0,
		gQ = 0,
		gR = 0;

	function gf() {
		gL.sort(function(fp, an) {
			return an.gc - fp.gc
		});
		for (var a2 = "" + gL[0].gb, a5 = 1; a5 < 9; a5++) a2 += "," + gL[a5].gb;
		for (a5 = 0; a5 < 9; a5++) a2 += "," + gL[a5].gc;
		aP.aQ.gg(120, a2)
	}
	this.aJ = function() {
		for (var gS = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a5 = 0; a5 < gS.length; a5++) {
			var color = 6 === gS[a5] ? ao.gT : ao.gU;
			this.gI.push(ar.canvas.gV(gW.get(3), gS[a5], color))
		}
		for (a5 = 0; a5 < fW.gX.p; a5++) gN.push(fW.gX.s - fW.gX.p + a5);
		for (a5 = 0; a5 < fW.gX.q; a5++) gN.push(fW.gX.r + a5);
		var gY = fW.gX.a1(gZ.gY);
		for (a5 = 0; a5 < gY.length; a5++) gN.push(gY[a5]);
		! function() {
			var a5, a4 = aP.aQ.data[120].value.split(",");
			if (18 !== a4.length)
				for (a5 = 0; a5 < 9; a5++) gL[a5] = {
					gb: 1015 + a5,
					gc: 0
				};
			else
				for (a5 = 0; a5 < 9; a5++) {
					var y = parseInt(a4[a5]),
						aV = (y = 0 <= y && y < fW.gX.s ? y : 0, parseInt(a4[a5 + 9]));
					aV = 0 <= aV && aV < 1e3 ? aV : 0, gL[a5] = {
						gb: y,
						gc: aV
					}
				}
		}()
	}, this.show = function(az, b0, gh) {
		var a5;
		if (gO = az, gP = b0, gK = gh || 0, this.ci = !0, gM = [], 0 === gK)
			for (a5 = 0; a5 < 9; a5++) gM.push(gL[a5].gb);
		else {
			var an = 49 * gK,
				gh = an - 49;
			for (gh >= gN.length && (gK = 1, gh = 0, an = 49), a5 = gh = (an = Math.min(an, gN.length)) - 49; a5 < an; a5++) gM.push(gN[a5])
		}
		gM.push(1024);
		gh = gM.length, cD = Math.floor((bE.bF.bG() ? .075 : .0468) * f.bH), gap = Math.floor(cD / 3), (gQ = 10 * (gF = cD + gap)) > f.af && (gQ = f.af, gap = (gF = gQ / 10) - (cD = 3 * gF / 4)), gH = z.a0(gh, 10) + !!(gh % 10), (gR = gH * gF) >
			f.ae && (gR = f.ae, gap = (gF = gR / gH) - (cD = 3 * gF / 4)), gh = .5 * gap;
		gE = Math.min(Math.max(az - .5 * gQ + gh, gh), f.af - gQ + gh), ex = Math.min(Math.max(b0 - .5 * gR + gh, gh), f.ae - gR + gh)
	}, this.ay = function(az, b0, player) {
		if (!this.ci) return !1;
		if (this.gk(az, b0)) {
			az = z.ax(z.a0(az - gE + .5 * gap, gF), 0, 9);
			if ((az += 10 * z.ax(z.a0(b0 - ex + .5 * gap, gF), 0, 9)) >= gM.length) return c3.aR(), !0;
			b0 = gM[az];
			if (1024 === b0) return this.show(gO, gP, gK + 1), !0;
			! function(gb) {
				for (var a5 = 0; a5 < 9; a5++) gL[a5].gc = Math.floor(.99 * gL[a5].gc);
				for (a5 = 0; a5 < 9; a5++)
					if (gb === gL[a5].gb) return gL[a5].gc = Math.min(gL[a5].gc + 30, 999), gf();
				gL.splice(5, 0, {
					gb: gb,
					gc: Math.max(gL[4].gc, 30)
				}), gL.pop(), gf()
			}(b0), player === bq.d3 ? gl.gm.gn(b0) : gl.d1.go(b0, player)
		}
		return c3.aR(), !0
	}, this.gk = function(az, b0) {
		return !(az < gE - .5 * gap || b0 < ex - .5 * gap || gE + gQ - .5 * gap <= az || ex + gR - .5 * gap <= b0)
	}, this.n = function() {
		ah.fillStyle = ao.c9, ah.fillRect(gE - .5 * gap, ex - .5 * gap, gQ, gR);
		for (var eE = .5 * ab.ai, a3 = (ah.lineWidth = ab.ai, ah.strokeStyle = ah.fillStyle = ao.ap, ah.strokeRect(gE - .5 * gap + eE, ex - .5 * gap + eE, gQ - 2 * eE, gR - 2 * eE), ah.imageSmoothingEnabled = !0, gM.length), a5 = 0; a5 <
			a3; a5++) this.gp(gM[a5], ah, gE + a5 % 10 * gF, ex + z.a0(a5, 10) * gF, cD);
		ah.imageSmoothingEnabled = !1
	}, this.gp = function(gb, gq, ag, aZ, cD) {
		var gr;
		gb >= 1024 - fW.gX.p ? (gr = cD / this.gJ, gq.setTransform(gr, 0, 0, gr, ag, aZ), gq.drawImage(this.gI[gb - 1024 + fW.gX.p], 0, 0), gq.setTransform(1, 0, 0, 1, 0, 0)) : (ar.at.textAlign(gq, 1), ar.at.textBaseline(gq, 1), gq.font = ar.at
			.au(0, .89 * cD), gq.fillText(fW.gX.x(gb), ag + .5 * cD, aZ + (.35 - ar.at.gs + .56) * cD))
	}
}

function gt() {
	this.gu = function() {
		var a5;
		if (gv.size < dU.gw(23)) g.h.gx(0, 3259);
		else {
			var gy = gv.gz(6),
				a3 = gv.gz(10),
				data = [];
			if (9 === gy || 10 === gy || 11 === gy) {
				for (a5 = 0; a5 < a3; a5++) data.push([gv.gz(30), h0.dp.h1(5), gv.h2(32), 0, gv.gz(30)]);
				8 === aM.fQ && aM.fR().h3(21, !0, {
					gy: gy,
					data: data
				})
			} else if (12 === gy) {
				for (a5 = 0; a5 < a3; a5++) data.push([gv.gz(20), gv.gz(30), gv.gz(30), gv.h2(32), gv.gz(30), h0.dp.h1(5), h0.dp.h1(5)]);
				8 === aM.fQ && aM.fR().h3(21, !0, {
					gy: gy,
					data: data
				})
			} else {
				var h4 = gv.gz(16);
				if (gv.h5(39 + 16 * h4 + a3 * (0 === gy ? 111 : 1 === gy ? 101 : 2 === gy || 3 === gy ? 127 : 212))) {
					if (0 === gy)
						for (a5 = 0; a5 < a3; a5++) data.push([gv.gz(30), h0.h6.h7(gv.gz(5)), gv.gz(16), gv.gz(30), gv.gz(30)]);
					else if (1 === gy)
						for (a5 = 0; a5 < a3; a5++) data.push([gv.gz(16), h0.h6.h7(gv.gz(3)), gv.gz(16), h0.h6.h7(gv.gz(5)), gv.gz(31), gv.gz(30)]);
					else if (2 === gy || 3 === gy)
						for (a5 = 0; a5 < a3; a5++) data.push([gv.gz(30), h0.h6.h7(gv.gz(5)), gv.h2(32), gv.gz(30), gv.gz(30)]);
					else
						for (a5 = 0; a5 < a3; a5++) data.push([gv.gz(20), gv.gz(30), gv.gz(30), gv.gz(30), gv.gz(30), gv.h2(32), gv.gz(30), h0.h6.h7(gv.gz(5)), h0.h6.h7(gv.gz(5))]);
					8 === aM.fQ && aM.fR().h3(21, !0, {
						gy: gy,
						data: data
					})
				} else g.h.gx(0, 3260)
			}
		}
	}, this.h8 = function() {
		if (gv.size < dU.gw(29)) g.h.gx(0, 3265);
		else {
			var h9 = gv.gz(4),
				hA = gv.gz(7),
				hB = gv.gz(11);
			if (gv.h5(29 + 16 * hA + 16 * hB + 11 * h9)) {
				for (var data = [], a5 = 0; a5 < h9; a5++) {
					for (var hC = h0.h6.h7(gv.gz(3)), hD = gv.gz(8), hE = [], fp = 0; fp < hD; fp++) hE.push(gv.gz(16));
					data.push({
						name: "[" + hC + "]",
						hE: hE
					})
				}
				8 === aM.fQ && aM.fR().h3(23, !0, data)
			} else g.h.gx(0, 3266)
		}
	}
}

function hF() {
	this.g7 = 512, this.hG = 15e8, this.hH = 1e9, this.hI = 5e4, this.hJ = 512, this.hK = 2, this.d3 = 0, this.fx = 0, this.hL = 0, this.hM = 0, this.hN = 0, this.hO = 512, this.hP = 512, this.hQ = 150, this.hR = !0, this.cq = 0, this.dM = 0, this
		.hS = 0, this.br = !1, this.cp = 0, this.hT = 0, this.hU = !1, this.hV = 0, this.hW = 0, this.fs = 0, this.hX = 0, this.hY = null, this.hZ = new ha, this.hb = 30, this.hc = 0, this.hd = 0, this.he = 0, this.hf = 0, this.data = new hg, this
		.hh = new hi, this.hj = 0, this.hk = function() {
			hl.aJ(), this.hL = this.fx = this.data.humanCount, this.hR = 1 === this.hL, this.br = !1, this.cq = this.data.isReplay, this.fs = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data
				.numberTeams - 2, this.hX = this.data.isContest, this.hU = this.fs < 7 || 9 === this.fs, this.fs = 10 === this.fs && this.hR ? 7 : this.fs, this.fs = 8 === this.fs && 2 !== this.fx ? 7 : this.fs, hm.aJ(), this.hV = this.data
				.numberTeams, this.data.teamPlayerCount ? this.hW = +(0 < this.data.teamPlayerCount[0]) : (this.hW = 0, this.hU && this.hR && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.hV + 1), bq.hh
					.hn())), this.hb = this.fx <= 2 ? 30 : this.fx <= 50 ? 40 : 50, this.hT = this.cp = this.data.selectableSpawn, this.hY = this.cp ? new ho : null, 1 === dX.hp ? this.hO = this.fx : this.hO = this.data.playerCount, this.hP = this
				.hO, this.hM = this.hO - this.fx, this.hN = 0, this.d3 = this.data.selectedPlayer, this.hc = 0, this.hd = 0, this.he = 0, this.hf = 0, g1.hq(this.data.spawningSeed), hr.aJ(), fz.aJ(), hs.fq(), gl.ht.hu = [], hv.aJ(), this.dM = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), hw.aJ(), hx(), hy.fZ(), hz.i0(), i1.aJ(), hy.aJ(), be.aJ(), i2.aJ(), bo.aJ(), i3.aJ(), i4.i5(), g6.aJ(), hs
				.dV(), i6.aJ(), i7.aJ(), i8.i9(), iA.aJ(), bs.aJ(), bm.aJ(), c5.aJ(), iB.putImageData(iC, 0, 0), bv.aJ(), bj.aJ(), bw.aJ(), bt.aJ(), bx.aJ(), c0.aJ(), by.aJ(), c2.aJ(), bz.aJ(), bu.aJ(), c1.aJ(), c3.aJ(), c4.aJ(), iD.aJ(), iE.aJ(),
				iF(), iG.aJ(), bp.aJ(), iH.aJ(), iI.aJ(), iJ.aJ(), this.hZ.aJ(), k.i5(), iL.iM(), 0 === fz.iN[bq.d3] && c4.show(!1, !0), bp.bR(!0), c6.aJ(), k.l = !0, this.cq || this.hR && this.cp || bE.bF.setState(1), this.hj = 0
		}, this.iO = function(iP) {
			bq.cq || iA.iQ.iR.length || (iA.iQ.iR = iA.iS.dq()), g.h.iT(), iU.clear(), this.dM = 0, k.iV(), bE.bF.setState(0), m.setState(0), iP || iW.iX.show(), 2 === this.hj ? aM.h.iY() : 1 === this.hj ? aM.iZ(19) : aM.iZ(5, 5)
		}, this.ia = function() {
			return this.cq ? c2.d8 || !bt.ib : this.hR && (c2.d8 || this.cp)
		}, this.ic = function() {
			return 1 === this.dM && !this.cp
		}
}

function ie() {
	var a2;
	10 === bh.ig ? a2 =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bh.ig ? a2 =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bh.ig ? a2 =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bh.ig ? a2 =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bh.ig ? a2 =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bh.ig ? a2 =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bh.ig ? a2 =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bh.ig ? a2 =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bh.ig ? a2 =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bh.ig && (a2 =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new ih).h1(a2)
}

function ii() {
	function io(player) {
		for (var ik = fz.ik[player], a3 = ik.length, j2 = Math.max(z.a0(a3, 12), 1), ix = hy.ix, al = g1.g2(a3), a5 = 0; a5 < a3; a5 += j2)
			for (var j3 = ik[(a5 + al) % a3], iy = 3; 0 <= iy; iy--) {
				var j4 = j3 + ix[iy];
				if (hy.iz(j4)) return {
					gr: j4,
					id: hy.j0(j4),
					cE: player
				}
			}
		return null
	}

	function it(player, jC) {
		var g5 = ar.d1.jD(player, g6.jE[g6.g5[player]]);
		fz.jF[player].push(jC.gr), iG.jG(player, g5, jC.cE), iD.jH(player, !0)
	}
	this.c = function(player) {
		return !!bh.ij(bh.ig) && !!bq.data.passableMountains && 0 !== fz.ik[player].length && function(player) {
			var im = io(player);
			if (null === im) return !1;
			! function(player) {
				for (var j5 = i8.j5, j6 = i8.j6, a3 = Math.min(j6, 12), j7 = g1.g2(j6), j8 = j9.j8, ik = fz.ik, gi = 0, a5 = 0; a5 < a3; a5++) {
					var cE = j5[(a5 + j7) % j6];
					cE !== player && ik[cE].length && jA(player, cE) && (j8[gi++] = cE)
				}
				j9.jB[0] = gi
			}(player);
			var iq = function(iu) {
				for (var a3 = j9.jB[0], j8 = j9.j8, a5 = 0; a5 < a3; a5++) {
					var jC = io(j8[a5]);
					if (null !== jC && jC.id === iu) return jC
				}
				return null
			}(im.id);
			return null !== iq ? (it(player, iq), !0) : function(player, iu) {
				var a3 = i3.iv.iw;
				if (0 !== a3)
					for (var gr = i3.iv.aQ[g1.g2(a3)] << 2, ix = hy.ix, iy = g1.g2(4);;) {
						if (gr += ix[iy], hy.iz(gr)) {
							if (hy.j0(gr) === iu) return it(player, {
								gr: gr,
								cE: bq.g7
							}), !0;
							break
						}
						if (!hy.j1(gr)) break
					}
				return !1
			}(player, im.id)
		}(player)
	}
}

function jI() {
	this.jJ = 0, this.ig = 0, this.mapSeed = 0, this.jK = 0, this.jL = 0, this.jM = 0, this.jN = 0, this.jO = 0, this.spawningSeed = 0, this.jP = 0, this.jQ = 0, this.jR = [], this.jS = 1048575, this.jT = 0, this.jU = [{
		ig: 0,
		mapSeed: 0,
		jK: 0,
		e6: 100,
		jN: 0
	}, {
		ig: 1,
		mapSeed: 0,
		jK: 1,
		e6: 200,
		jN: 0
	}, {
		ig: 2,
		mapSeed: 0,
		jK: 2,
		e6: 300,
		jN: 0
	}, {
		ig: 3,
		mapSeed: 0,
		jK: 3,
		e6: 400,
		jN: 0
	}, {
		ig: 0,
		mapSeed: 0,
		jK: 9,
		e6: 500,
		jN: 0
	}, {
		ig: 1,
		mapSeed: 0,
		jK: 10,
		e6: 600,
		jN: 0
	}, {
		ig: 2,
		mapSeed: 0,
		jK: 8,
		e6: 700,
		jN: 0
	}, {
		ig: 3,
		mapSeed: 0,
		jK: 3,
		e6: 800,
		jN: 0
	}]
}

function jV() {
	this.aJ = function() {
		this.jW = 0, this.jX = [], this.jY = 0, this.jZ = 0
	}, this.ja = function() {
		var dH;
		bq.hR || (dH = this, 2 === bq.hc ? dH.jX = hl.jc.jd() : bq.hU ? dH.jX = hl.jc.je() : dH.jX = hl.jc.jf(), dH.jW = jg.eI.jh(), dH.jY = Math.max(1, hl.jc.ji(dH.jX)), gl.d1.jj(), 8 === bq.fs ? hl.result.jZ = 0 : dH.jZ = 100 * hl.result.jW * (
			1 + bq.hX))
	}
}

function jl() {
	this.jm = function(dT, jn) {
		dU.dV(8), dU.dW(1, 0), dU.dW(6, 4), dU.dW(1, jn ? 1 : 0), g.h.send(dT, dU.di)
	}, this.jo = function() {
		dU.dV(58), dU.dW(1, 0), dU.dW(6, 5), dU.dW(8, g.h.dh), dU.dW(10, i.jQ), dU.dW(9, i.jp), dU.dW(10, dX.dY), dU.dW(14, dX.jq), g.h.send(g.h.jP, dU.di)
	}, this.jr = function(js) {
		dU.dV(27), dU.dW(1, 1), dU.dW(4, 0), dU.dW(22, js), g.h.send(g.h.jP, dU.di)
	}, this.jt = function(cj, ju) {
		dU.dV(25), dU.dW(1, 1), dU.dW(4, 1), dU.dW(10, cj), dU.dW(10, ju), g.h.send(g.h.jP, dU.di)
	}, this.jv = function(cj, jw) {
		dU.dV(24), dU.dW(1, 1), dU.dW(4, 2), dU.dW(10, cj), dU.dW(9, jw), g.h.send(g.h.jP, dU.di)
	}, this.jx = function(cj, js) {
		dU.dV(37), dU.dW(1, 1), dU.dW(4, 3), dU.dW(10, cj), dU.dW(22, js), g.h.send(g.h.jP, dU.di)
	}, this.jy = function(jz, js) {
		dU.dV(37), dU.dW(1, 1), dU.dW(4, 4), dU.dW(10, jz), dU.dW(22, js), g.h.send(g.h.jP, dU.di)
	}, this.k0 = function(ju) {
		dU.dV(15), dU.dW(1, 1), dU.dW(4, 5), dU.dW(10, ju), g.h.send(g.h.jP, dU.di)
	}, this.k1 = function(b4) {
		dU.dV(15), dU.dW(1, 1), dU.dW(4, 6), dU.dW(10, b4), g.h.send(g.h.jP, dU.di)
	}, this.k2 = function(k3) {
		dU.dV(6), dU.dW(1, 1), dU.dW(4, 7), dU.dW(1, k3), g.h.send(g.h.jP, dU.di)
	}, this.k4 = function() {
		dU.dV(5), dU.dW(1, 1), dU.dW(4, 8), g.h.send(g.h.jP, dU.di)
	}, this.k5 = function(cj, js, ju) {
		dU.dV(47), dU.dW(1, 1), dU.dW(4, 10), dU.dW(10, cj), dU.dW(10, ju), dU.dW(22, js), g.h.send(g.h.jP, dU.di)
	}, this.k6 = function(k7, k8) {
		dU.dV(24), dU.dW(1, 1), dU.dW(4, 15), dU.dW(9, k8), dU.dW(10, k7), g.h.send(g.h.jP, dU.di)
	}, this.k9 = function(kA) {
		dU.dV(14), dU.dW(1, 1), dU.dW(4, 14), dU.dW(9, kA), g.h.send(g.h.jP, dU.di)
	}, this.kB = function(kC, target) {
		var a5, a3 = kC.length;
		for (dU.dV(14 + 9 * a3), dU.dW(1, 1), dU.dW(4, 13), dU.dW(9, target), a5 = 0; a5 < a3; a5++) dU.dW(9, kC[a5]);
		g.h.send(g.h.jP, dU.di)
	}
}

function kD(e1, data) {
	var a3 = data.kE.length,
		kF = document.createElement("div"),
		kG = document.createElement("div"),
		cN = document.createElement("div"),
		kH = new Array(a3),
		kI = new Array(a3),
		kJ = new Array(data.kK.length),
		kL = ar.color.kM(70, 70, 0, .35);

	function kS() {
		this.style.backgroundColor = ar.color.kS(kL, 160)
	}

	function kT() {
		this.style.backgroundColor = kL
	}

	function kc() {
		var fp;
		for (e1.style.font = ar.at.au(0, ar.at.kd(.026, .5, .03)), a5 = 1; a5 < kJ.length; a5++) ar.at.cd(kJ[a5], 4);
		if (ar.at.cd(kF, 2), a3) {
			for (var ke, cG = kF.offsetWidth, cH = cN.offsetWidth, a5 = 0; a5 < kJ.length; a5++) ke = .01 * data.kQ[a5] * cH, kJ[a5].style.width = (100 * ke / cG).toFixed(2) + "%";
			var ei = data.kE[0].length;
			for (a5 = 0; a5 < a3; a5++)
				for (ar.at.cd(kH[a5], 2), fp = 1; fp < ei; fp++) ar.at.cd(kI[a5][fp], 4);
			kG.kN && (kG.scrollTop = kG.kN)
		}
	}
	this.resize = function() {
			kc(), kc()
		}, e1.style.display = "flex", e1.style.flexDirection = "column", kG.style.overflowX = "hidden", kG.style.overflowY = "auto", kG.addEventListener("scroll", function() {
			this.kN = this.scrollTop
		}),
		function() {
			var iy, a5, kE = data.kE,
				ei = a3 ? kE[0].length : 0;
			for (a5 = 0; a5 < a3; a5++) {
				kH[a5] = document.createElement("div"), kH[a5].style.backgroundColor = function(a5) {
					return a5 % 2 == 1 ? ar.color.kM(130, 130, 130, .35) : ao.kb
				}(a5), kH[a5].style.width = "100%", kH[a5].style.display = "flex", kI[a5] = new Array(ei);
				for (var fp = 0; fp < ei; fp++) kI[a5][fp] = iy = document.createElement("div"), iy.style.display = "flex", iy.style.justifyContent = "center", iy.style.wordBreak = "break-all", iy.style.padding = "0.4em 0em", iy.style.width = data
					.kQ[fp] + "%", iy.innerHTML = kE[a5][fp].y, 1 === kE[a5][fp].dO && (iy.name = "" + a5, iy.style.color = ao.kR, iy.style.backgroundColor = kL, iy.addEventListener("mouseover", kS), iy.addEventListener("mouseout", kT), function(iy,
						dr, kV) {
						2147483647 !== kV && iy.addEventListener("click", function() {
							dU.dV(30), dU.dW(30, dr), gv.aJ(dU.di), this.style.backgroundColor = kL, aM.iZ(8, aM.fQ, new kW(25, {
								kX: 0,
								dr: dn.kY.kZ(dn.kY.ka(5)),
								kV: kV
							}))
						})
					}(iy, kE[a5][fp].dr, kE[a5][fp].kV)), kH[a5].appendChild(iy)
			}
			for (kF.style.display = "flex", kF.style.backgroundColor = ar.color.kM(0, 120, 0, .35), a5 = 0; a5 < kJ.length; a5++) kJ[a5] = iy = document.createElement("div"), iy.style.display = "flex", iy.style.justifyContent = "center", iy.style
				.wordBreak = "break-all", iy.style.padding = "0.4em 0em", iy.style.width = data.kQ[a5] + "%", iy.innerHTML = data.kK[a5], kF.appendChild(iy)
		}();
	for (var a5 = 0; a5 < a3; a5++) cN.appendChild(kH[a5]);
	kG.appendChild(cN), e1.appendChild(kF), e1.appendChild(kG)
}

function kf() {
	var kg, kh, ki, kj, kk, kl, km, kn, ko, kp, kq, kr, ks, kt, ku, kv, kw, kx, kz, l0, l1, l2, l3, lA, lB, ky = null,
		l5 = 0,
		l6 = !1,
		l7 = new Float32Array(4),
		l8 = 0,
		l9 = !0,
		lC = 400,
		lD = 0;

	function kc() {
		ko = Math.floor(+f.bH), kp = Math.floor(.5 * ko)
	}

	function lE() {
		var a5, lN;
		for (ah.font = ar.at.au(1, 100 * kq), lN = 80 / Math.floor(ah.measureText(ar.d5.d6(bq.hG)).width), ah.font = ar.at.au(1, 100), a5 = bq.g7 - 1; 0 <= a5; a5--) kn[a5] = 100 / Math.floor(ah.measureText(fz.fy[a5]).width), km[a5] = Math.min(lN,
			kn[a5])
	}

	function lO(a5) {
		return !lD || (a5 = fz.lQ[a5]) < 1e6 ? 1 : a5 < 1e7 ? l7[0] : l7[Math.min(Math.floor(Math.log10(a5)) - 6, 3)]
	}

	function lM(gq) {
		kx = !1, kw = 1, ku = kv = 0, l9 && (ar.at.textAlign(gq, 1), ar.at.textBaseline(gq, 1));
		for (var lk, ll, a5, lm, fontSize, ln, gE = lg / bg, ex = lh / bg, li = (f.af + lg) / bg, lj = (f.ae + lh) / bg, lo = 0 !== fz.iN[bq.d3] && !ar.d1.lp(bq.d3), fp = i8.j6 - 1; 0 <= fp; fp--) a5 = i8.j5[fp], (fontSize = Math.floor(kt * bg * lO(
			a5) * km[a5] * kk[a5])) < ks || ko <= fontSize || ki[a5] + kk[a5] > gE && ki[a5] < li && kj[a5] + kl[a5] > ex && kj[a5] < lj && (lk = Math.floor(f.af * (ki[a5] + kk[a5] / 2 - gE) / (li - gE)), ll = Math.floor(f.ae * (kj[a5] + kl[a5] /
				2 - ex) / (lj - ex) - .1 * fontSize), lm = hy.cw[a5], gq.font = ar.at.au(1 === fz.lq[a5] ? 4 : 1, fontSize), gq.fillStyle = lr(fontSize, lm % 2), lD ? ls(gq, a5, fontSize, lk, ll, lm) : lt(a5, fontSize, lk, ll, gq), kx = !0, 0 <
			l1[a5] ? function(lk, ll, fontSize, a5, gq) {
				0 === lv[a5] ? fW.gX.a8(l0[a5]) ? (function(lk, ll, fontSize, player, gb, gq) {
					for (var m4 = ll, mC = (gq.globalAlpha = m5(fontSize), lO(player) * (lD ? l8 : kn[player])), m3 = lk - .5 * fontSize / mC - .9 * fontSize, an = 0; an < 2; an++) gq.fillText(fW.gX.x(gb), m3, m4), m3 = lk + .5 *
						fontSize / mC + .9 * fontSize;
					gq.globalAlpha = 1
				}(lk, ll, fontSize, a5, l0[a5], gq), lw(lk, ll, fontSize, 0, 0, gq)) : fW.gX.aA(l0[a5]) ? (m8(lk, ll, fontSize, l0[a5], 0, gq), lw(lk, ll, fontSize, 0, 1, gq)) : (m8(lk, ll, fontSize, l0[a5], 1, gq), lw(lk, ll, fontSize, 1, 0,
					gq)) : m8(lk, ll, fontSize, l0[a5], 0, gq)
			}(lk, ll, fontSize, a5, gq) : 0 === lv[a5] && lw(lk, ll, fontSize, 0, 0, gq), lo && (0 < l1[a5 + bq.g7] || 0 < l1[a5 + 2 * bq.g7] || 0 < l1[a5 + 3 * bq.g7] || 0 < l1[a5 + 4 * bq.g7]) && function(lk, ll, fontSize, a5, gq) {
				var aV, gi = -1;
				for (aV = 4; 1 <= aV; aV--) 0 < l1[a5 + aV * bq.g7] && gi++;
				for (aV = 1; aV < 5; aV++) 0 < l1[a5 + aV * bq.g7] && (! function(lk, ll, fontSize, aV, a5, m0, dO, gq) {
					var m9;
					if (1 === aV) {
						a5 = l0[a5 + bq.g7];
						if (!fW.gX.a9(a5)) return function(lk, ll, fontSize, gb, m0, gq) {
							gq.globalAlpha = m5(fontSize);
							lk -= .534 * m0 * fontSize, m0 = ll + 1.59 * fontSize;
							gq.font = ar.at.au(0, .785 * fontSize), gq.fillText(fW.gX.x(gb), lk, m0), gq.globalAlpha = 1
						}(lk, ll, fontSize, a5, m0, gq);
						m9 = fW.fX.gI[a5 - 1024 + fW.gX.p]
					} else m9 = 2 === aV ? c3.mB()[4].canvas[+(dO < 255)] : (3 === aV ? c3.mB()[5] : c3.mB()[6]).canvas[0];
					a5 = fW.fX.gJ, dO = .8 * fontSize / a5, aV = lk - .5 * dO * a5 - .534 * m0 * fontSize, lk = ll + 1.4 * dO * a5;
					gq.setTransform(dO, 0, 0, dO, aV, lk), gq.globalAlpha = m5(fontSize), gq.drawImage(m9, 0, 0), gq.globalAlpha = 1, gq.setTransform(1, 0, 0, 1, 0, 0)
				}(lk, ll, fontSize, aV, a5, gi, l1[a5 + aV * bq.g7], gq), gi -= 2)
			}(lk, ll, fontSize, a5, gq), (ln = kq * fontSize) < ks || (gq.font = ar.at.au(1, ln), ll += Math.floor(.78 * fontSize), lD ? lt(a5, ln, lk, ll, gq) : ls(gq, a5, ln, lk, ll, lm)))
	}

	function lt(a5, fontSize, ag, aZ, gq) {
		var ___id = a5;
		var showName = a5 < bq.fx || !__fx.settings.hideBotNames;
		if (showName) gq.fillText(fz.fy[a5], ag, aZ), a5 < bq.fx && 2 !== fz.lq[a5] || (a5 = fontSize / kn[a5], gq.fillRect(ag - .5 * a5, aZ + ar.at.gs * fontSize, a5, Math.max(1, .1 * fontSize)));
		lD && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (gq.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			gq.fillText(__fx.utils.getDensity(___id), ag, showName ? aZ + fontSize : aZ)
		);
	}

	function ls(gq, a5, fontSize, lk, ll, lm) {
		var ___id = a5;
		a5 = ar.d5.d6(fz.lQ[a5]);
		lm >> 1 & 1 ? (gq.lineWidth = .05 * fontSize, gq.strokeStyle = lr(fontSize, lm % 2), gq.strokeText(a5, lk, ll)) : (1 < lm && (gq.lineWidth = .12 * fontSize, gq.strokeStyle = lr(fontSize, lm), gq.strokeText(a5, lk, ll)), gq.fillText(a5, lk,
			ll));
		lD || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (gq.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), gq.fillText(__fx.utils.getDensity(___id), lk, ll + fontSize))
	}

	function lw(lk, ll, fontSize, m0, m1, gq) {
		var m2 = .95 * fontSize / l3,
			lk = lk - .5 * m2 * l2 + .8 * m0 * fontSize,
			m0 = ll - 1.76 * m2 * l3 - (.35 - ar.at.gs + .7) * m1 * fontSize;
		gq.setTransform(m2, 0, 0, m2, lk, m0), gq.globalAlpha = m5(fontSize), gq.drawImage(gW.get(4), 0, 0), gq.globalAlpha = 1, gq.setTransform(1, 0, 0, 1, 0, 0)
	}

	function m8(lk, ll, fontSize, gb, m0, gq) {
		var cD, m3, m2;
		gq.globalAlpha = m5(fontSize), fW.gX.a9(gb) ? (cD = fW.fX.gJ, gq.setTransform(m2 = 1.1 * fontSize / cD, 0, 0, m2, m3 = lk - .5 * m2 * cD - .8 * m0 * fontSize, m2 = ll - 1.55 * m2 * cD), gq.drawImage(fW.fX.gI[gb - 1024 + fW.gX.p], 0, 0), gq
			.setTransform(1, 0, 0, 1, 0, 0)) : (m3 = lk - .8 * m0 * fontSize, m2 = ll - (.35 - ar.at.gs + 1) * fontSize, gq.fillText(fW.gX.x(gb), m3, m2)), gq.globalAlpha = 1
	}

	function lr(fontSize, lm) {
		return kp <= fontSize && fontSize < ko ? hv.mD[lm] + m5(fontSize).toFixed(3) + ")" : hv.mE[lm]
	}

	function m5(fontSize) {
		return kp <= fontSize && fontSize < ko ? 1 - (fontSize - kp) / (ko - kp) : 1
	}

	function mS(mC, af) {
		return 1 + Math.floor(kr * mC * af)
	}

	function mP(a5) {
		for (var left = ki[a5], fp = ki[a5] - fz.lR[a5] - 1; 0 <= fp; fp--)
			if (!mX(a5, --left, kj[a5], kl[a5])) {
				left++;
				break
			} var right = ki[a5];
		for (fp = fz.lU[a5] - ki[a5] - kk[a5]; 0 <= fp; fp--)
			if (!mX(a5, ++right + kk[a5] - 1, kj[a5], kl[a5])) {
				right--;
				break
			} var ag = Math.floor((left + right) / 2),
			top = kj[a5];
		for (fp = kj[a5] - fz.lS[a5] - 1; 0 <= fp; fp--)
			if (!mY(a5, ag, --top, kk[a5])) {
				top++;
				break
			} var bottom = kj[a5];
		for (fp = fz.lV[a5] - kj[a5] - kl[a5]; 0 <= fp; fp--)
			if (!mY(a5, ag, ++bottom + kl[a5] - 1, kk[a5])) {
				bottom--;
				break
			} var aZ = Math.floor((top + bottom) / 2);
		mM(a5, ag, aZ, kk[a5], kl[a5]) && (ki[a5] = ag, kj[a5] = aZ)
	}

	function mM(player, ag, aZ, af, ae) {
		iy = Math.floor(.2 * af);
		for (var iy, aV = ag + af - 1; ag <= aV; aV--)
			if (!mX(player, aV, aZ, ae)) return;
		for (aV = aZ + ae - 1 - (iy = (iy = Math.floor(.25 * ae)) < 1 ? 1 : iy); aZ + iy <= aV; aV--)
			if (!mY(player, ag, aV, af)) return;
		return 1
	}

	function mX(player, ag, aZ, ae) {
		return hy.mZ(player, 4 * (aZ * bh.ma + ag)) && hy.mZ(player, 4 * ((aZ + ae - 1) * bh.ma + ag))
	}

	function mY(player, ag, aZ, af) {
		return hy.mZ(player, 4 * (aZ * bh.ma + ag)) && hy.mZ(player, 4 * (aZ * bh.ma + ag + af - 1))
	}
	this.aJ = function() {
		if (lD = aP.aQ.data[7].value || 8 === bq.fs, lC = 0 === (lC = aP.aQ.data[11].value) ? 280 : 1 === lC ? 187 : 112, kx = !1, kt = .88, kq = .5, kr = 1.8, ks = 12 - 3 * aP.aQ.data[9].value, kh = kg = 0, ki = new Uint16Array(bq.g7), kj =
			new Uint16Array(bq.g7), kk = new Uint16Array(bq.g7), kl = new Uint16Array(bq.g7), km = new Float32Array(bq.g7), kn = new Float32Array(bq.g7), l0 = new Uint16Array(2 * bq.g7), l1 = new Uint8Array(5 * bq.g7), lA = new Uint8Array(bq.g7),
			lB = new Uint8Array(bq.g7), l9 || (ky = ky || document.createElement("canvas")), kc(), kv = ku = 0, kw = 1, lD) {
			var a5, lN;
			for (lE(), ah.font = ar.at.au(1, 100), lN = 100 / Math.floor(ah.measureText("900 000").width), a5 = bq.g7 - 1; 0 <= a5; a5--) km[a5] = Math.min(lN, 2 * kn[a5]);
			l8 = lN, l7[0] = 100 / (lN * Math.floor(ah.measureText("5 000 000").width)), l7[1] = 100 / (lN * Math.floor(ah.measureText("50 000 000").width)), l7[2] = 100 / (lN * Math.floor(ah.measureText("500 000 000").width)), l7[3] = 100 / (
				lN * Math.floor(ah.measureText("1 000 000 000").width))
		} else lE();
		! function() {
			var a5;
			for (a5 = bq.g7 - 1; 0 <= a5; a5--) fz.lJ[a5] < 12 ? (ki[a5] = fz.lR[a5] + 1, kj[a5] = fz.lS[a5] + 1, kk[a5] = 1, kl[a5] = 1) : (ki[a5] = fz.lR[a5], kj[a5] = fz.lS[a5] + 1, kk[a5] = 4, kl[a5] = 2);
			if (bq.cp)
				for (a5 = 0; a5 < bq.fx; a5++) kk[a5] = 0;
			l2 = gW.get(4).width, l3 = gW.get(4).height
		}()
	}, this.lH = function(cE, lI) {
		lI > 18 * fz.lJ[cE] ? (lB[cE] = 6, hy.cw[cE] = 2 + hy.cw[cE] % 2) : (lA[cE] = 4, (hy.cw[cE] < 2 || 3 < hy.cw[cE]) && (hy.cw[cE] = 6 + hy.cw[cE] % 2))
	}, this.lK = function(cE, lI) {
		lI > 6 * fz.lJ[cE] ? (lB[cE] = 6, hy.cw[cE] = 4 + hy.cw[cE] % 2) : (lA[cE] = 4, (hy.cw[cE] < 4 || 5 < hy.cw[cE]) && (hy.cw[cE] = 8 + hy.cw[cE] % 2))
	}, this.resize = function() {
		kc(), l9 || lM(kz)
	}, this.lT = function() {
		for (var a5 = 0; a5 < bq.fx; a5++) fz.lU[a5] - fz.lR[a5] != 3 || fz.lV[a5] - fz.lS[a5] != 3 ? (ki[a5] = fz.lR[a5] + (fz.lU[a5] !== fz.lR[a5] ? 1 : 0), kj[a5] = fz.lS[a5], kk[a5] = 1, kl[a5] = 1) : (ki[a5] = fz.lR[a5], kj[a5] = fz.lS[a5] +
			1, kk[a5] = 4, kl[a5] = 2)
	}, this.lW = function(player, b4, lX) {
		! function(player, b4, lX) {
			player += b4 * bq.g7;
			0 === b4 ? l0[player] === lX && 0 < l1[player] ? l1[player] = 0 : (l0[player] = lX, l1[player] = fW.gX.a8(lX) ? 255 : 64) : 1 === b4 ? (l1[player] = 64, l0[player] = lX) : l1[player] = lX
		}(player, b4, lX), 2 === bq.dM && this.bR(!0)
	}, this.n = function() {
		l9 ? lM(ah) : kx && (1 !== kw ? (ah.imageSmoothingEnabled = !0, ah.setTransform(kw, 0, 0, kw, 0, 0), ah.drawImage(ky, -ku / kw, -kv / kw), ah.setTransform(1, 0, 0, 1, 0, 0), ah.imageSmoothingEnabled = !1) : ah.drawImage(ky, -ku, -kv))
	}, this.lZ = function(la, lb) {
		ku += la, kv += lb
	}, this.b2 = function(la, lb) {
		bp.lZ(la, lb)
	}, this.zoom = function(dN, az, b0) {
		kw *= dN, ku = (ku + az) * dN - az, kv = (kv + b0) * dN - b0
	}, this.bR = function(ld) {
		return !l9 && !(!l6 && !ld && k.e6 < l5 + (1 === kw && 0 === ku && 0 === kv && (bq.ia() || bq.cp || 2 === bq.dM) ? 1e3 : lC) || (l6 = !1, l5 = k.e6, lM(kz), 0))
	}, this.le = function(a5) {
		return lO(a5) * km[a5]
	}, this.lf = function(player) {
		return km[player]
	}, this.c = function() {
		k.mF() % 10 == 9 && (l6 = bq.ic() && !bq.ia()), !bq.ia() && 4 <= ++kh && function() {
			var a5, fp, an;
			for (kh = 0, an = 4; 1 <= an; an--)
				for (fp = i8.j6 - 1; 0 <= fp; fp--) a5 = i8.j5[fp] + an * bq.g7, 0 < l1[a5] && l1[a5] < 255 && l1[a5]--;
			if (2 !== bq.dM)
				for (fp = i8.j6 - 1; 0 <= fp; fp--) a5 = i8.j5[fp], 0 < l1[a5] && l1[a5] < 255 && l1[a5]--
		}();
		var a5, fp, a3 = Math.floor(.1 * i8.j6);
		for (a3 = (a3 = a3 < 8 ? 8 : a3) > i8.j6 ? i8.j6 : a3, a5 = kg + a3 - 1; kg <= a5; a5--) fp = a5 % i8.j6, ! function(a5) {
			var mC = lO(a5) * km[a5];
			0 < kk[a5] && mM(a5, ki[a5], kj[a5], kk[a5], kl[a5]) ? ! function(a5) {
				for (var ag, aZ, af, ae, gr = !1, an = 0; an < 8; an++) {
					if (af = kk[a5] + 2, ae = kl[a5] + 2, af > fz.lU[a5] - fz.lR[a5] + 1 || ae > fz.lV[a5] - fz.lS[a5] + 1) return gr;
					if (ag = ki[a5] - 1, aZ = kj[a5] - 1, !mM(a5, ag, aZ, af, ae)) return gr;
					ki[a5] = ag, kj[a5] = aZ, kk[a5] = af, kl[a5] = ae, gr = !0
				}
				return gr
			}(a5) && function(a5, mC) {
				for (var ag, aZ, af, ae, gr = !1, mT = kk[a5], dL = 1 + Math.floor(.02 * mT), an = 1; an < 5; an++) {
					if ((af = mT + an * dL) > fz.lU[a5] - fz.lR[a5] + 1) return gr;
					if ((ae = mS(mC, af)) > fz.lV[a5] - fz.lS[a5] + 1) return gr;
					ag = fz.lR[a5] + Math.floor(Math.random() * (fz.lU[a5] - fz.lR[a5] + 2 - af)), aZ = fz.lS[a5] + Math.floor(Math.random() * (fz.lV[a5] - fz.lS[a5] + 2 - ae)), mM(a5, ag, aZ, af, ae) && (ki[a5] = ag, kj[a5] = aZ, kk[
						a5] = af, kl[a5] = ae, gr = !0)
				}
				return gr
			}(a5, mC) && mP(a5) : ! function(a5, mC) {
				var ae, ag = ki[a5] + 1,
					aZ = kj[a5] + 1,
					af = kk[a5] - 2;
				for (;;) {
					if (af < 1) {
						kk[a5] = 0;
						break
					}
					if (ae = mS(mC, af), mM(a5, ag, aZ, af, ae)) return ki[a5] = ag, kj[a5] = aZ, kk[a5] = af, kl[a5] = ae, 1;
					ag++, aZ++, af -= 2
				}
				return
			}(a5, mC) ? function(a5, mC) {
				var ag, aZ, af, ae, an, mU, mV = fz.lU[a5] - fz.lR[a5] + 1,
					mW = Math.floor(.02 * mV);
				for (mU = -6 * (mW = mW < 1 ? 1 : mW), an = mV; mU <= an; an -= mW)
					if (ae = mS(mC, af = 0 < an ? an : 1), ag = fz.lR[a5] + Math.floor(Math.random() * (fz.lU[a5] - fz.lR[a5] + 2 - af)), aZ = fz.lS[a5] + Math.floor(Math.random() * (fz.lV[a5] - fz.lS[a5] + 2 - ae)), mM(a5, ag, aZ, af,
							ae)) return ki[a5] = ag, kj[a5] = aZ, kk[a5] = af, kl[a5] = ae
			}(a5, mC) : mP(a5)
		}(i8.j5[fp]);
		kg = (kg += a3) % i8.j6
	}, this.mI = function() {
		var a5, cE, a6, a7;
		if (k.mF() % 4 == 1)
			for (a5 = i8.j6 - 1; 0 <= a5; a5--) cE = i8.j5[a5], hy.cw[cE] < 2 || ((a6 = Math.max(lA[cE] - 1, 0)) === (a7 = Math.max(lB[cE] - 1, 0)) ? 0 === a6 && (hy.cw[cE] %= 2) : 0 === a7 && hy.cw[cE] < 6 && (hy.cw[cE] += 4), lA[cE] = a6, lB[
				cE] = a7)
	}, this.mJ = function(player) {
		var a5 = player + 2 * bq.g7,
			dO = l1[a5];
		return 0 < dO && (bu.mK(50, player), l1[a5] = 0, 255 === dO)
	}, this.mL = function(player) {
		return 255 === l1[player + 2 * bq.g7]
	}
}

function mb() {
	var mc, md;

	function mk() {
		(mc = new WebSocket("wss://territorial.io/s52/")).onopen = mr, mc.onclose = function() {
			ms()
		}
	}

	function mr() {
		if (mc && mc.readyState === mc.OPEN) {
			var af = new mu;
			af.dV(1608), af.dW(1, 0), af.dW(6, 7), af.dW(2, bE ? bE.id : 3), af.dW(1, dX.mv ? 1 : 0), af.dW(1, dX.mw ? 1 : 0), af.dW(1, dX ? dX.mg : 0);
			for (var a5 = 0; a5 < md.length && a5 < 228; a5++) af.dW(7, md.charCodeAt(a5) % 128);
			mc.send(af.di), ms()
		}
	}

	function ms() {
		mc && (mc.onclose = null, mc.onopen = null, mc = null)
	}
	window.addEventListener("error", function me(cb) {
		window.removeEventListener("error", me);
		return alert("Error:\n" + cb.filename + " " + cb.lineno + " " + cb.colno + " " + cb.message);
		md = "";
		try {
			var a4;
			if (window.removeEventListener("error", me), md = cb.lineno + " " + cb.colno + "|" + function(cb) {
					if (!cb.error) return "NoStack";
					var stack = cb.error.stack;
					if (!stack || !stack.length) return "NoStack";
					for (var match, mt = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = mt.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
					return result.length ? result.join(" ") : "NoStack"
				}(cb), performance.memory && ((a4 = []).push(Math.floor(performance.memory.jsHeapSizeLimit / 1e5)), a4.push(Math.floor(performance.memory.totalJSHeapSize / 1e5)), a4.push(Math.floor(performance.memory.usedJSHeapSize / 1e5)),
					md = md + "|" + a4.join(" ")), md = (md = f ? md + "|R" + f.af + "," + f.ae + "," + f.aW.toFixed(2) : md) + "|" + cb.message, dX && 1 === dX.mg) {
				if (md = dX.mh + "|" + mi.mj.join(",") + "|" + md, cb.lineno < 43) return void mk();
				var ml = "What happened? Please send us a detailed email to davidtschacher@gmail.com so we can fix this error!";
				ml += "<br>Error Message: " + md, mi.mm(), aM.iZ(4, 5, new mn("🤖 Beep Boop! An error occurred.", ml, !0, [new aL("Close", function() {
					aM.mo(), aM.h.mp()
				}), new aL("Reload", function() {
					bE.bF.mq()
				})]))
			}
		} catch (cb) {
			md = "SE|" + md + "|" + cb, console.log(md), alert(md)
		}
		mk()
	})
}

function mx() {
	this.id = 0, this.my = 0, this.mz = null, this.n0 = null, this.n1 = null, this.n2 = null, this.bF = new n3, this.aJ = function() {
		var self, my;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (my = Android.getVersion()) < 12 || (self.my = my, self.id = 1, self.n0 = Android),
			function(self) {
				var my;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.n1 = mwIOSdataX, self.n2 = window.webkit.messageHandlers.iosCommandA, my = self
					.n1.version, self.my = my ? Number(my) : 0)
			}(this),
			function(self) {
				var mz;
				if (0 === self.id) {
					try {
						if (!(mz = window.localStorage)) return;
						mz.setItem("tls7", "1"), mz.removeItem("tls7")
					} catch (error) {
						return
					}
					self.mz = mz
				}
			}(this)
	}
}

function nA() {
	var canvas, c8, nB, font, nC = 0,
		nD = !1,
		nE = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		nF = 5;

	function nT() {
		if (nD) {
			var a5, a3 = nE.length,
				d0 = Math.floor(.5 * nB.ae),
				ae = a3 * d0,
				ag = Math.floor(Math.floor(nB.ag) + .3 * nB.af - .5),
				aZ = Math.floor(Math.floor(nB.aZ) - ae),
				af = Math.floor(.4 * nB.af + 2.5);
			for (ah.fillStyle = ao.cR, ah.fillRect(ag, aZ, af, ae), ah.fillStyle = ao.nb, ah.fillRect(ag, aZ + nF * d0, af, d0), ah.fillStyle = ao.ap, ah.fillRect(ag, aZ, 2, ae), ah.fillRect(ag, aZ, af, 2), ah.fillRect(ag + af - 2, aZ, 2, ae), a5 =
				1; a5 < a3; a5++) ah.fillRect(ag, aZ + a5 * d0, af, 2);
			for (ah.fillStyle = ao.ap, ar.at.textAlign(ah, 1), ar.at.textBaseline(ah, 1), ah.font = ar.at.au(0, .6 * d0), ag += .5 * af, a5 = 0; a5 < a3; a5++) ah.fillText(nc(a5), ag, aZ + (a5 + .6) * d0)
		}
		ah.drawImage(canvas, Math.floor(nB.ag), Math.floor(nB.aZ))
	}

	function nH(dH) {
		var ag, gE, ex, d0;
		c8.clearRect(0, 0, Math.floor(nB.af), Math.floor(nB.ae)), c8.fillStyle = ao.cR, c8.fillRect(0, 0, Math.floor(nB.af), Math.floor(nB.ae)), bq.br && (c8.fillStyle = ao.nb, c8.fillRect(0, 0, Math.floor(.3 * nB.af), Math.floor(nB.ae))), c8
			.fillStyle = ao.ap, c8.fillText("Hide UI", .15 * nB.af, .5 * nB.ae), c8.fillRect(Math.floor(.3 * nB.af - .5), 0, 2, Math.floor(nB.ae)), ag = .5 * nB.af, c8.fillText("Replay Speed", ag, .31 * nB.ae), c8.fillText(nc(nF), ag, .69 * nB.ae),
			c8.fillRect(Math.floor(.7 * nB.af - .5), 0, 2, Math.floor(nB.ae)), dH.ib ? (ag = Math.floor(.02 * nB.af), dH = Math.floor(.025 * nB.af), gE = Math.floor(.85 * nB.af - ag - .5 * dH), ex = Math.floor(.25 * nB.ae), d0 = Math.floor(nB.ae) -
				2 * ex, c8.fillRect(gE, ex, ag, d0), c8.fillRect(gE + ag + dH, ex, ag, d0)) : function() {
				var af = Math.floor(.46 * nB.ae),
					ae = Math.floor(.23 * nB.ae),
					ag = Math.floor(.85 * nB.af - .5 * af + af / 12),
					aZ = Math.floor(.5 * nB.ae - ae);
				c8.beginPath(), c8.moveTo(ag, aZ), c8.lineTo(ag + af, aZ + ae), c8.lineTo(ag, aZ + (ae << 1)), c8.fill()
			}(), c8.fillRect(0, 0, Math.floor(nB.af), 2), c8.fillRect(0, 0, 2, Math.floor(nB.ae)), c8.fillRect(0, Math.floor(nB.ae) - 2, Math.floor(nB.af), 2), c8.fillRect(Math.floor(nB.af - 2), 0, 2, Math.floor(nB.ae))
	}

	function nc(a5) {
		return 5 === a5 ? "Normal" : "" + nE[a5]
	}
	this.ib = !1, this.aJ = function() {
		bq.cq && (nF = 5, this.ib = !1, nD = !1, nB = new aO([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.nG = function() {
		return nE[nF]
	}, this.bl = function() {
		return nB.aZ
	}, this.d9 = function(dA) {
		return !!bq.cq && nB.ag + nB.af > f.af - dA - ab.gap
	}, this.resize = function() {
		bq.cq && (nB.resize(), nB.aZ -= (ct.cu() - 1) * ab.gap, font = ar.at.au(0, .3 * nB.ae), (canvas = document.createElement("canvas")).width = Math.floor(nB.af), canvas.height = Math.floor(nB.ae), (c8 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, ar.at.textAlign(c8, 1), ar.at.textBaseline(c8, 1), nH(this))
	}, this.nI = function(nJ) {
		0 === bq.dM || aM.ci() || nJ !== bq.br && (bq.br = nJ, bs.resize(), k.l = !0, bq.cq) && (nC = k.e6 + 2e3, nH(this))
	}, this.ay = function(ag, aZ) {
		if (!bq.cq) return !1;
		if (ag < nB.ag || aZ < nB.aZ || ag > nB.ag + nB.af) return nD && function(dH, ag, aZ) {
			var a3 = nE.length,
				d0 = Math.floor(.5 * nB.ae),
				ae = a3 * d0,
				gE = Math.floor(Math.floor(nB.ag) + .3 * nB.af - .5),
				ae = Math.floor(Math.floor(nB.aZ) - ae),
				af = Math.floor(.4 * nB.af + 2.5);
			return nD = !1, k.l = !0, ag < gE || gE + af < ag || aZ < ae || (nF = nS(0, Math.floor((aZ - ae) / d0), a3 - 1), nH(dH)), !0
		}(this, ag, aZ);
		if ((ag -= nB.ag) < .3 * nB.af) nD = !1, this.nI(!bq.br);
		else {
			if (ag < .7 * nB.af) return nD = !nD, k.l = !0;
			this.nL(!1)
		}
		return !0
	}, this.nL = function(nM) {
		2 === bq.dM ? (this.nI(!1), aM.iZ(3)) : (nD = !1, this.ib = !this.ib, this.ib ? (c2.d8 && c2.nN(), bE.bF.setState(1)) : nM || c2.nO(), k.l = !0, nH(this))
	}, this.nP = function() {
		this.ib = !1, c2.nO(), k.l = !0, nH(this)
	}, this.nQ = function(ag, aZ) {
		return !!bq.br && (0 <= c2.ay(ag, aZ) || (bq.cq ? ((k.e6 > nC || !this.ay(ag, aZ)) && bj.ay(ag, aZ), k.l = !0, nC = k.e6 + 2e3) : bj.ay(ag, aZ)), !0)
	}, this.c = function() {
		bq.cq && bq.br && k.e6 > nC - 1e3 && k.e6 < nC && (k.l = !0)
	}, this.nR = function() {
		bq.cq && (this.ib = !1, k.l = !0, nH(this))
	}, this.n = function() {
		if (bq.cq) {
			if (bq.br) {
				if (k.e6 > nC) return;
				if (nC - 1e3 < k.e6) return ah.globalAlpha = nS(0, (1e3 - (k.e6 - (nC - 1e3))) / 1e3, 1), nT(), void(ah.globalAlpha = 1)
			}
			nT()
		}
	}
}

function nd() {
	this.kY = new ne, this.h6 = new nf, this.dp = new g9, this.aJ = function() {
		this.kY.aJ()
	}
}

function ng() {
	var gap, ni, ag = [0, 0, 0, 0, 0],
		aZ = [0, 0, 0, 0, 0],
		dL = [1, 1, 1, 1, 1],
		y = [!0, !0, !0, !1, !1],
		aV = (this.nh = [!0, !0, !0, !1, !1], null);
	this.fV = function(m9, nj) {
		aV = m9, y = nj, ni = [gZ.nk, gZ.nl, gZ.nm, gZ.nm, gZ.nn], this.aJ()
	}, this.aJ = function() {
		if (gW.f7()) {
			var a5, cG = Math.floor((bE.bF.bG() ? .261 : .195) * f.bH),
				cH = Math.floor(.9 * cG),
				d0 = Math.floor(.17 * cH);
			if (gap = bE.bF.bG() ? 2 * ab.gap : ab.gap, dL[0] = cG / aV[0].width, dL[1] = cH / aV[1].width, dL[2] = d0 / aV[2].height, dL[3] = d0 / aV[3].height, dL[4] = d0 / aV[4].height, dL[2] *= 1.7, dL[3] *= 1.07, ag[0] = gap, ag[1] = gap,
				ag[2] = gap, ag[3] = gap, ag[4] = Math.floor(2 * gap + dL[3] * aV[3].width), aZ[0] = gap, aZ[1] = aZ[0] + gap + dL[0] * aV[0].height, aZ[2] = aZ[1] + gap + dL[1] * aV[1].height, aZ[3] = aZ[2] + gap + dL[2] * aV[2].height, aZ[4] =
				aZ[3], !y[0])
				for (a5 = 0; a5 < 5; a5++) aZ[a5] -= dL[0] * aV[0].height + gap;
			if (!y[1])
				for (a5 = 2; a5 < 5; a5++) aZ[a5] -= dL[1] * aV[1].height + gap
		}
	}, this.ci = function() {
		return !(7 === m.bS() && bE.bF.bG())
	}, this.ay = function(no, np) {
		if (aV && this.ci())
			for (var a5 = y.length - 1; 0 <= a5; a5--)
				if (y[a5] && this.nh[a5] && ag[a5] < no && aZ[a5] < np && no < ag[a5] + dL[a5] * aV[a5].width && np < aZ[a5] + dL[a5] * aV[a5].height) return aM.iZ(9, aM.fQ, new nq("You are leaving Territorial.io.", ar.at.nr(ni[a5]))), !0;
		return !1
	}, this.n = function() {
		if (aV && this.ci()) {
			var a5;
			for (ah.imageSmoothingEnabled = !0, a5 = 0; a5 < 5; a5++) y[a5] && this.nh[a5] && (ah.setTransform(dL[a5], 0, 0, dL[a5], ag[a5], aZ[a5]), ah.drawImage(aV[a5], 0, 0));
			ah.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function ns() {
	this.nt = null, this.aJ = function() {
		10 !== bq.fs ? this.nt = null : this.nt = new Uint32Array(bq.g7)
	}, this.c = function() {
		10 === bq.fs && this.nu()
	}, this.nu = function() {
		for (var cE, target, nv, nt = this.nt, e8 = i8.j5, nw = fz.lQ, a5 = i8.j6 - 1; 0 <= a5; a5--)(cE = e8[a5]) >= bq.fx || (target = Math.max(z.a0(nw[cE], 4), 2048), nv = Math.max(hr.nx(cE), 100), nt[cE] += z.a0(nv * target, 1e4), nt[cE] >
			target && (nt[cE] = target))
	}, this.ny = function(player, g5) {
		return g5 > this.nt[player] ? (g5 = this.nt[player], this.nt[player] = 0) : this.nt[player] -= g5, g5
	}
}

function nz() {
	this.o0 = new Int16Array(4), this.o1 = new Int16Array(4), this.aJ = function() {
		var a5;
		for (this.o0[0] = -bh.ma, this.o0[1] = 1, this.o0[2] = bh.ma, this.o0[3] = -1, a5 = 0; a5 < 4; a5++) this.o1[a5] = 4 * this.o0[a5]
	}, this.o2 = function(o3, o4) {
		var o5 = this.o6(o4) - this.o6(o3),
			o4 = this.o8(o4) - this.o8(o3),
			o3 = o5 >>> 31 << 1;
		return 5 + o3 + (1 - o3) * (1 - (o4 >>> 31 << 1)) * (Math.abs(o5) - Math.abs(o4) >>> 31) & 3
	}, this.oA = function(o3, o4, oB) {
		return oB % 2 == 0 ? oB + (1 - oB) * (1 - (this.o6(o4) - this.o6(o3) >>> 31 << 1)) + 4 & 3 : oB + (2 - oB) * (1 - (this.o8(o4) - this.o8(o3) >>> 31 << 1)) + 4 & 3
	}, this.oD = function(cE, js) {
		for (var o4, oE, oG = fz.oH[cE], a3 = oG.length, af = bh.ma, oI = this.o6(js), oJ = this.o8(js), oK = oG[0] >> 2, min = this.oL(oI, oJ, oK), a5 = 1; a5 < a3; a5++)(oE = (oE = oI - (o4 = oG[a5] >> 2) % af) * oE + (oE = oJ - ~~((.5 + o4) /
			af)) * oE) < min && (min = oE, oK = o4);
		return oK
	}, this.oM = function(player, gr) {
		return !hy.j1(gr) && player === hy.oN(gr)
	}, this.oL = function(oO, oP, js) {
		return (oO -= this.o6(js)) * oO + (oP -= this.o8(js)) * oP
	}, this.oQ = function(no, np, oR) {
		no = this.oS(no) - this.oT(oR), np = this.oU(np) - this.oV(oR);
		return Math.sqrt(no * no + np * np)
	}, this.oW = function(o3, o4) {
		var la = this.o6(o3) - this.o6(o4),
			o3 = this.o8(o3) - this.o8(o4);
		return Math.sqrt(la * la + o3 * o3)
	}, this.oX = function(o3, o4) {
		var la = this.o6(o3) - this.o6(o4),
			o3 = this.o8(o3) - this.o8(o4);
		return la * la + o3 * o3
	}, this.oY = function(oZ, oa, ob, oc) {
		return (oZ -= ob) * oZ + (oa -= oc) * oa
	}, this.d2 = function(cE, cj) {
		return z.a0(cj * fz.lQ[cE], 1e3)
	}, this.oS = function(no) {
		return 16 * (no + lg) / bg
	}, this.oU = function(np) {
		return 16 * (np + lh) / bg
	}, this.od = function(iy) {
		return 16 * iy / bg
	}, this.oe = function(no) {
		return Math.floor((no + lg) / bg)
	}, this.og = function(np) {
		return Math.floor((np + lh) / bg)
	}, this.oh = function(oO, oP) {
		return 1 <= oO && 1 <= oP && oO < bh.ma - 1 && oP < bh.oi - 1
	}, this.o6 = function(js) {
		return js % bh.ma
	}, this.o8 = function(js) {
		return z.a0(js, bh.ma)
	}, this.oj = function(oO, oP) {
		return oP * bh.ma + oO
	}, this.ok = function(js) {
		return this.ol(this.o6(js), this.o8(js))
	}, this.ol = function(oO, oP) {
		return 0 < oO && oO < bh.ma - 1 && 0 < oP && oP < bh.oi - 1
	}, this.om = function(js) {
		return js << 2
	}, this.on = function(gr) {
		return gr >> 2
	}, this.oo = function(js) {
		return bh.ma * this.o8(js) * 256 + (this.o6(js) << 4)
	}, this.op = function(js) {
		return this.oo(js) + 8 + (bh.ma << 7)
	}, this.oq = function(oR) {
		return bh.ma * (this.oV(oR) >> 4) + (this.oT(oR) >> 4)
	}, this.or = function(oR) {
		oR = this.oq(oR);
		return (this.o6(oR) >> 5) + bo.os.ot * (this.o8(oR) >> 5)
	}, this.oT = function(oR) {
		return oR % (bh.ma << 4)
	}, this.oV = function(oR) {
		return z.a0(oR, bh.ma << 4)
	}, this.ou = function(js, oB) {
		return js + this.o0[oB]
	}, this.ov = function(gr, oB) {
		return gr + this.o1[oB]
	}, this.ow = function(player) {
		return this.oj(fz.lR[player] + fz.lU[player] >> 1, fz.lS[player] + fz.lV[player] >> 1)
	}, this.ox = function(player) {
		return this.oj(g1.oy(fz.lR[player], fz.lU[player]), g1.oy(fz.lS[player], fz.lV[player]))
	}
}

function oz() {
	this.p0 = null, this.p1 = null, this.p2 = null, this.aJ = function() {
		var p3 = [120, 105, 92],
			cos = [12, 12, 60],
			p4 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			p5 = [140, 130, 120],
			p6 = [12, 12, 76],
			p7 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			p8 = [130, 117, 106],
			p9 = [12, 12, 68],
			pA = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.p0 = new Array(bh.pB + 1), this.p0[0] = {
			name: L(9),
			af: 230,
			ae: 230,
			pC: 1e3,
			pD: 2e3,
			pE: 173
		}, this.p0[1] = {
			name: L(10),
			af: 800,
			ae: 800,
			pC: 100,
			pD: 50,
			pE: 43
		}, this.p0[2] = {
			name: L(11),
			af: 512,
			ae: 512,
			pC: 128,
			pD: 32,
			pE: 0
		}, this.p0[3] = {
			name: L(12) + " 1",
			af: 960,
			ae: 960,
			pC: 60,
			pD: 8,
			pE: 0
		}, this.p0[4] = {
			name: L(13),
			af: 900,
			ae: 900,
			pC: 100,
			pD: 5,
			pE: 0
		}, this.p0[5] = {
			name: L(14),
			af: 1e3,
			ae: 1e3,
			pC: 100,
			pD: 40,
			pE: 0
		}, this.p0[6] = {
			name: L(15),
			af: 1e3,
			ae: 1e3,
			pC: 100,
			pD: 20,
			pE: 0
		}, this.p0[7] = {
			name: L(16),
			af: 1024,
			ae: 1024,
			pC: 128,
			pD: 32,
			pE: 0
		}, this.p0[8] = {
			name: L(17),
			af: 820,
			ae: 820,
			pC: 200,
			pD: 100,
			pE: 0
		}, this.p0[9] = {
			name: L(18),
			af: 1024,
			ae: 1024,
			pC: 128,
			pD: 32,
			pE: 0
		}, this.p0[10] = {
			name: L(19),
			pF: p5,
			pG: p6,
			pH: p7
		}, this.p0[11] = {
			name: L(20),
			pF: p8,
			pG: p9,
			pH: pA
		}, this.p0[12] = {
			name: L(21),
			pF: p8,
			pG: p9,
			pH: pA
		}, this.p0[13] = {
			name: L(22),
			pF: p3,
			pG: cos,
			pH: p4
		}, this.p0[14] = {
			name: L(23),
			pF: p3,
			pG: cos,
			pH: p4
		}, this.p0[15] = {
			name: L(24),
			pF: p5,
			pG: p6,
			pH: p7
		}, this.p0[16] = {
			name: L(25),
			pF: p5,
			pG: p6,
			pH: p7
		}, this.p0[17] = {
			name: L(26),
			pF: p3,
			pG: cos,
			pH: p4
		}, this.p0[18] = {
			name: L(27),
			pF: p8,
			pG: p9,
			pH: pA
		}, this.p0[19] = {
			name: L(28),
			pF: p3,
			pG: cos,
			pH: p4
		}, this.p0[20] = {
			name: L(29),
			af: 1024,
			ae: 1024,
			pC: 128,
			pD: 32,
			pE: 0
		}, this.p0[21] = {
			name: L(12) + " 2",
			af: 940,
			ae: 940,
			pC: 80,
			pD: 8,
			pE: 0
		}, this.p0[bh.pB] = {
			name: ""
		}, this.p1 = new Uint8Array(12);
		for (var a5 = 0; a5 < 10; a5++) this.p1[a5] = a5;
		for (this.p1[10] = 20, this.p1[11] = 21, this.p2 = new Uint8Array(10), a5 = 0; a5 < 10; a5++) this.p2[a5] = 10 + a5
	}
}

function pI() {
	var eW, pK, pL, pM, pJ = !1;

	function pN() {
		pJ = !0, eW = -1, pK = new Array(4);
		for (var a5 = 3; 0 <= a5; a5--) pK[a5] = !1;
		var pO = Math.floor(1 + .02 * f.min);
		pL = new Array(4), (pM = new Array(4))[1] = pM[3] = pL[0] = pL[2] = 0, pM[0] = pL[3] = -pO, pL[1] = pM[2] = pO
	}

	function pQ() {
		if (-1 !== eW)
			if (0 !== bq.dM && iL.mU()) {
				for (var pS = !1, a5 = 3; 0 <= a5; a5--) pK[a5] && (pS = !0, lg += pL[a5], lh += pM[a5], bp.b2(pL[a5], pM[a5]), bj.pV());
				pS ? k.l = !0 : pU.pT()
			} else pU.pT()
	}
	this.pP = function(b4) {
		0 !== bq.dM && iL.mU() && (pJ || pN(), pK[b4] = !0, -1 === eW) && (eW = setInterval(pQ, 20), pQ())
	}, this.pR = function(b4) {
		if (0 !== bq.dM && (pJ || pN(), pK[b4] = !1, -1 !== eW)) {
			for (var pS = !1, a5 = 3; 0 <= a5; a5--) pS = pS || pK[a5];
			pS || this.pT()
		}
	}, this.pT = function() {
		if (pJ && -1 !== eW) {
			for (var a5 = 3; 0 <= a5; a5--) pK[a5] = !1;
			clearInterval(eW), eW = -1
		}
	}
}

function pW() {
	var bD, ag, aZ, pX, pY, pZ, e6, player, pa, gap, zoom, pb, pc;

	function ps(player) {
		for (var a5 = pb.length - 1; 0 <= a5; a5--)
			if (pb[a5] === player) return 1
	}

	function pq(pn) {
		var a5, a3;
		if (-1 !== pn)
			for (a3 = bD.length, a5 = 0; a5 < a3; a5++)
				if (bD[a5].ci && bD[a5].ag + 1 === pn % 4 && bD[a5].aZ + 1 === pn >> 2) return a5;
		return -1
	}

	function po(az, b0) {
		var am = gap / 2;
		return az < ag - pX - 3 * am || ag + 3 * pX + 5 * am < az || b0 < aZ - pX - 3 * am || aZ + 2 * pX + 3 * am < b0 ? -1 : 4 * (b0 < aZ - am ? 0 : b0 < aZ + pX + am ? 1 : 2) + (az < ag - am ? 0 : az < ag + pX + am ? 1 : az < ag + 2 * pX + 3 *
			am ? 2 : 3)
	}
	this.fT = function() {
		var a5, an, pe = [ao.gT, ao.pf, ao.gU, ao.pg, ao.ph];
		for (bD = new Array(9), a5 = 0; a5 < 9; a5++) bD[a5] = {
			id: a5,
			ci: !1,
			pi: 0,
			canvas: [],
			ag: 0,
			aZ: 0
		};
		for (bD[0].colors = [0, 1, 2, 3], bD[0].ag = 0, bD[0].aZ = 0, bD[1].colors = [0, 1, 4], bD[1].ag = 1, bD[1].aZ = 0, bD[2].colors = [0, 2], bD[2].ag = -1, bD[2].aZ = 0, bD[3].colors = [0], bD[3].ag = 0, bD[3].aZ = 0, bD[4].colors = [0, 2],
			bD[4].ag = 1, bD[4].aZ = 1, bD[5].colors = [3], bD[5].ag = 0, bD[5].aZ = -1, bD[6].id = 20, bD[6].colors = [0], bD[6].ag = 1, bD[6].aZ = -1, bD[7].id = 21, bD[7].colors = [0], bD[7].ag = 0, bD[7].aZ = 1, bD[8].id = 16, bD[8]
			.colors = [0], bD[8].ag = 0, bD[8].aZ = 0, a5 = 0; a5 < 9; a5++)
			for (an = 0; an < bD[a5].colors.length; an++) bD[a5].canvas.push(function(id, pk) {
				if (id < 20) return ar.canvas.gV(gW.get(3), id, pk);
				var pk = gW.get(3).height,
					m9 = ar.at.pj(pk, pk),
					gq = ar.at.getContext(m9);
				20 === id ? gq.drawImage(gW.get(18), 0, 0) : 21 === id && fW.fX.gp(fW.gX.r + fW.gX.w, gq, 0, 0, pk);
				return m9
			}(bD[a5].id, pe[bD[a5].colors[an]]))
	}, this.mB = function() {
		return bD
	}, this.aJ = function() {
		pb = [], ag = aZ = e6 = 0, pY = pZ = -1e3, this.resize()
	}, this.resize = function() {
		pX = Math.floor((bE.bF.bG() ? .075 : .0468) * f.bH), zoom = pX / gW.get(3).height, gap = Math.floor(pX / 3)
	}, this.pl = function(az, b0) {
		return !!this.ci() && (k.l = !0, !!fW.fX.ay(az, b0, player) || (az = function(az, b0) {
			pZ = pY = -1e3;
			var pp = pq(po(az, b0));
			if (-1 === pp) return 0;
			if (1 !== bD[pp].colors[bD[pp].pi])
				if (5 === pp) {
					if (! function() {
							var dO = performance.now();
							pc + 4e3 < dO && (pb = []);
							pc = dO
						}(), ps(player)) return 1;
					pb.push(player), 16 < pb.length && pb.shift()
				} else if (6 === pp) {
				for (var a5 = pb.length - 1; 0 <= a5; a5--) 0 === fz.iN[pb[a5]] && pb.splice(a5, 1);
				0 < pb.length && (iI.e7(1, pb, !0) && gl.d1.pt(pb, player), pb = [])
			} else if (2 === pp) gl.gm.pu(bw.d4(), player);
			else if (3 === pp) bq.cp && gl.gm.pv(pa);
			else if (0 === pp)
				if (0 === bD[0].pi) {
					if (bq.hT && by.pw() < 350) return 1;
					i4.px(4), gl.gm.py(bw.d4(), player)
				} else iJ.pz(player, bw.d4());
			else if (1 === pp) i4.px(1), gl.gm.q0(bw.d4(), pa);
			else {
				if (7 === pp) return i4.px(0), fW.fX.show(az, b0), 2;
				if (4 === pp) iI.e7(0, [player], !0) && gl.d1.q1(player);
				else {
					if (8 !== pp) return 0;
					gl.gm.q2(bw.d4(), pa, player)
				}
			}
			return 1
		}(az, b0), this.aR(), 2 === az && (fW.fX.ci = !0), 0 < az))
	}, this.pm = function(az, b0) {
		this.ci() || (pY = az, pZ = b0, e6 = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = i2.oe(mouseX),
			coordY = i2.og(mouseY),
			coord = i2.oj(coordX, coordY),
			point = i2.om(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(az, b0, gr) {
			hy.q7(gr) || -1 === (az = bo.jc.qT(az, b0)) ? bu.qS(gr) : bu.qU(az)
		}(mouseX, mouseY, point))
	}
	this.click = function(az, b0, q3) {
		var oO = i2.oe(az),
			oP = i2.og(b0),
			js = i2.oj(oO, oP),
			gr = i2.om(js);
		if (!i2.oh(oO, oP)) return !1;
		oO = (bE.bF.bG() ? .025 : .0144) * f.bH, oP = performance.now();
		if (Math.abs(az - pY) > oO || Math.abs(b0 - pZ) > oO || e6 + 500 < oP) return !1;
		if (e6 = oP, q3 && ! function(az, b0, gr) {
				hy.q7(gr) || -1 === (az = bo.jc.qT(az, b0)) ? bu.qS(gr) : bu.qU(az)
			}(az, b0, gr), c2.d8 || this.ci() || !ar.d1.q6(bq.d3) || bq.cq) return this.aR(), !1;
		if (bq.cp) {
			if (!q3) {
				if (!hy.q7(gr)) return !1;
				pa = js, bD[3].ci = !0
			}
		} else if (bo.jc.q9(js)) q3 ? bu.qC(55, 0) : bo.qA.qB = -1;
		else {
			if (q3) return !1;
			bo.jc.qD(az, b0) || (2 === bq.dM ? hy.qE(gr) && (player = hy.oN(gr), ar.d1.lp(player) || (bD[0].ci = !0, bD[0].pi = 1, bD[7].ci = !0)) : hy.iz(gr) ? (pa = qF.qG.qH(gr)) && (oO = i2.om(pa), bD[8].ci = !0, player = hy.j1(oO) ? bq.g7 :
				hy.oN(oO)) : (pa = js, bo.jc.qI(bq.d3, js) && (bD[0].ci = !0, bD[0].pi = 1, bD[1].ci = !0, bD[1].pi = j9.qJ[2] ? 0 : 2), hy.qK(gr) || (hy.j1(gr) ? (player = bq.g7, qL(bq.d3) ? (bD[0].ci = !0, bD[0].pi = 0) : qM(bq.d3,
				player) && (bD[0].ci = !0, bD[0].pi = 3)) : (player = hy.oN(gr)) === bq.d3 ? (bD[0].ci = !0, bD[0].pi = 1, bD[7].ci = !0) : (bD[0].pi = 1, bD[5].ci = function(player) {
				return !ar.d1.lp(player) && !ps(player) && iI.e7(1, [player], !1)
			}(player), bD[7].ci = !ar.d1.lp(player), jA(player, bq.d3) ? (bD[4].ci = !ar.d1.lp(player) && !bp.mL(player) && iI.e7(0, [player], !1), bD[6].ci = function(player) {
				if (0 === pb.length) return !1;
				if (performance.now() > pc + 4e3) return !(pb = []);
				return !ps(player) && ! function(player) {
					var a5;
					if (bq.hU)
						for (a5 = pb.length - 1; 0 <= a5; a5--)
							if (!jA(player, pb[a5])) return 1;
					return
				}(player)
			}(player), qP(bq.d3, player) ? (bD[0].pi = 0, bD[0].ci = !0) : qM(bq.d3, player) && (bD[0].pi = 3, bD[0].ci = !0), bD[0].ci = this.qQ()) : (bD[2].ci = !0, bD[0].ci = !0)))))
		}
		return this.q8(az, b0)
	}, this.q8 = function(az, b0) {
		return ag = az - Math.floor(pX / 2), aZ = b0 - Math.floor(pX / 2), !!this.ci()
	}, this.b2 = function(az, b0) {
		return !!this.ci() && (fW.fX.ci ? !fW.fX.gk(az, b0) && (fW.fX.ci = !1, k.l = !0) : function(dH, az, b0) {
			az = po(az, b0);
			if (0 <= pq(az)) return !1;
			if ((1 === az || 6 === az) && 0 <= pq(2)) return !1;
			if ((6 === az || 9 === az) && 0 <= pq(10)) return !1;
			return dH.aR(), k.l = !0
		}(this, az, b0))
	}, this.aR = function() {
		for (var a5 = bD.length - 1; 0 <= a5; a5--) bD[a5].ci = !1, bD[a5].pi = 0;
		fW.fX.ci = !1
	}, this.ci = function() {
		return this.qQ() || fW.fX.ci
	}, this.qQ = function() {
		for (var a3 = bD.length, a5 = 0; a5 < a3; a5++)
			if (bD[a5].ci) return !0;
		return !1
	}, this.n = function() {
		if (this.ci())
			if (fW.fX.ci) fW.fX.n();
			else {
				var a5, gq = ah,
					an = bD,
					a3 = an.length,
					qY = (pX + gap) / zoom;
				for (gq.imageSmoothingEnabled = !0, gq.setTransform(zoom, 0, 0, zoom, ag, aZ), a5 = 0; a5 < a3; a5++) an[a5].ci && ah.drawImage(an[a5].canvas[an[a5].pi], an[a5].ag * qY, an[a5].aZ * qY);
				gq.imageSmoothingEnabled = !1, gq.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function qZ(qa) {
	var qb = document.createElement("div"),
		qc = document.createElement("div");
	this.nH = function() {
			qc.textContent = "", qd.qe.aR(1);
			for (var qf = document.createDocumentFragment(), qg = qd.h.qh[0], qi = qd.qi.qj[qg], qk = qd.qi.qk[qg], a5 = 0; a5 < qi.length; a5++) ! function(qf, qm, qn, qg) {
				var qo = document.createElement("span");
				qo.textContent = (qn ? "🟢 " : "⚪ ") + qd.nu.qp(qm, qg), qo.style.color = qd.nu.qq(qm.qr), qo.style.cursor = "pointer", qo.style.margin = "0.2em 0.2em 0.2em 0.2em", qo.style.width = qo.style.maxWidth = 2 === qg ? "10em" : "9em",
					qo.style.height = qo.style.maxHeight = "1.4em", qo.style.whiteSpace = "nowrap", qo.style.overflow = "hidden", qo.style.textOverflow = "ellipsis", qo.style.font = "inherit", qo.style.display = "inline-block", qd.nu.qs(qm) && (
						qo.style.textDecoration = "underline"), qo.onclick = function(cb) {
						qa(cb, qm)
					}, n8.qt() || (qo.onmouseover = function(cb) {
						qd.qe.qu(cb, qm, 1)
					}), qf.appendChild(qo)
			}(qf, qi[a5], a5 < qk, qg);
			qc.appendChild(qf)
		}, this.show = function(e1) {
			e1.appendChild(qb)
		}, this.aR = function(e1) {
			e1.removeChild(qb)
		}, this.resize = function() {
			qc.style.fontSize = ar.at.cc(ar.at.cX(.02, .3))
		}, qb.style.top = "0", qb.style.left = "0", qb.style.width = qb.style.height = "100%", qb.style.overflowX = "hidden", qb.style.overflowY = "auto", qb.style.font = "inherit", qc.style.font = "inherit", qc.style.margin = "0.4em", qb
		.appendChild(qc)
}

function qv() {
	var eU = 0,
		qw = 0;
	this.qx = function(ag, aZ) {
		eU = ag, qw = aZ
	}, this.qy = function(qz) {
		bq.cq || c2.d8 || (ar.d1.r0(0) || ar.d1.r0(1)) && ar.d1.q6(bq.d3) && (bw.ay(eU, qw) ? bw.co = !1 : c1.ay(eU, qw) || function(qz) {
			var oO = i2.oe(eU),
				oP = i2.og(qw),
				js = i2.oj(oO, oP),
				gr = i2.om(js);
			i2.oh(oO, oP) && (bq.cp ? hy.q7(gr) && gl.gm.pv(js) : hy.iz(gr) ? qz || (oO = qF.qG.qH(gr)) && (oP = i2.om(oO), oP = hy.j1(oP) ? bq.g7 : hy.oN(oP), gl.gm.q2(bw.d4(), oO, oP)) : hy.qK(gr) || qz ? bo.jc.qI(bq.d3, js) && gl.gm
				.q0(bw.d4(), js) : hy.j1(gr) ? qL(bq.d3) ? gl.gm.py(bw.d4(), bq.g7) : qM(bq.d3, bq.g7) ? iJ.pz(bq.g7, bw.d4()) : bo.jc.qI(bq.d3, js) && gl.gm.q0(bw.d4(), js) : (oO = hy.oN(gr)) !== bq.d3 && (jA(oO, bq.d3) ? qP(bq.d3,
					oO) ? gl.gm.py(bw.d4(), oO) : qM(bq.d3, oO) ? iJ.pz(oO, bw.d4()) : bo.jc.qI(bq.d3, js) && gl.gm.q0(bw.d4(), js) : bo.jc.qI(bq.d3, js) && gl.gm.q0(bw.d4(), js)))
		}(qz))
	}, this.r2 = function() {
		if (!bq.cq && !c2.d8 && ar.d1.r0(1)) {
			var cE = bq.d3;
			if (ar.d1.q6(cE)) {
				var a3 = iG.r3(cE);
				if (a3 < 1) ! function() {
					var cE = bq.d3;
					if (qL(cE)) gl.gm.py(bw.d4(), bq.g7);
					else
						for (var ix = hy.ix, rD = fz.rD, a3 = rD[cE].length, rE = Math.floor(Math.random() * a3), a5 = 0; a5 < a3; a5++)
							for (var oB = 3; 0 <= oB; oB--) {
								var eE = rD[cE][(a5 + rE) % a3] + ix[oB];
								if (hy.qE(eE)) {
									eE = hy.oN(eE);
									if (eE !== cE && (!bq.hU || jA(cE, eE))) return gl.gm.py(bw.d4(), eE)
								}
							}
				}();
				else {
					for (var r5 = 0, g5 = iG.r6(cE, 0), a5 = 1; a5 < a3; a5++) {
						var r7 = iG.r6(cE, a5);
						r7 < g5 && (g5 = r7, r5 = a5)
					}
					gl.gm.py(bw.d4(), iG.r8(cE, r5))
				}
			}
		}
	}, this.r9 = function() {
		if (!bq.cq && !c2.d8 && ar.d1.q6(bq.d3) && ar.d1.r0(1)) return bx.ci ? bx.rA(bq.d3) ? void gl.gm.rB(1) : void 0 : void(bx.rC(bq.d3) && gl.gm.r9())
	}
}

function rG() {
	var aC, rH, kI;
	this.show = function() {
		aC.show(), this.resize()
	}, this.aR = function() {
		aC.aR()
	}, this.resize = function() {
		aC.resize(), rH.resize()
	}, this.b6 = function(aV) {
		2 === aV && aC.b7[0].b8()
	}, aC = new aK(L(30), [new aL("⬅️ " + L(1), function() {
		aM.rI()
	})]), rH = new rJ(aC.cQ, ((kI = []).push(function() {
		function rV() {
			rW.button.textContent = L(34), rS.cb.readOnly = !1, rU.cb.readOnly = !1, rX.e0(1), rX.button.style.color = ao.ap
		}
		var rM = new rN,
			rP = (rM.rO(L(31)), new rQ({
				value: aP.aQ.data[105].value,
				b4: -1
			})),
			rS = (rP.cb.readOnly = !0, rM.rR(rP), rM.rO(L(32), "0.8em"), new rQ(aP.aQ.data[148])),
			rS = new rQ(aP.aQ.data[148], 0, void 0, function(cb) {
				rT(aP.aQ.data[149].value, cb.target.value)
			}),
			rU = (rM.rR(rS), rM.rO(L(33), "0.8em"), new rQ(aP.aQ.data[149], 1, void 0, function(cb) {
				rT(cb.target.value, aP.aQ.data[148].value)
			})),
			rW = (rM.rR(rU), new aL(L(34), function(cb) {
				return cb.textContent === L(34) ? (cb.textContent = L(35), rS.cb.readOnly = !0, rU.cb.readOnly = !0, rX.e0(0), rX.button.style.color = ao.kR, aP.aS.aT(149, rU.cb.value), rT(aP.aQ.data[149].value, aP.aQ.data[
					148].value)) : rV(), !0
			})),
			rX = (rM.rR(new rY([rW.button])), new aL(L(36), function(cb) {
				return rS.cb.readOnly && g.h.rZ(0) && (ar.at.ra(cb), rV(), g.rb.rc({
					kX: 0,
					dr: aP.aQ.data[148].value,
					value: parseInt(aP.aQ.data[149].value, 10)
				})), !0
			}, 1)),
			rd = rM.re(),
			rT = (rM.re(L(37)).style.fontWeight = "bold", function(y, a2) {
				y = ar.d1.rf(y, 2, 1e6);
				var rg = Math.max(1, 1 + Math.floor(.01 * (y - 100)));
				rd.textContent = L(38, [y, aP.aQ.data[105].value, rg, a2, y - rg])
			});
		return rM.rR(new rY([rX.button])), rT(aP.aQ.data[149].value, aP.aQ.data[148].value), rM
	}()), kI))
}

function rh() {
	this.gX = new o, this.fX = new fY
}

function ri() {
	this.pv = function(player, js) {
		ar.d1.r0(0) && ar.d1.q6(player) && i2.ok(js) && (iA.iQ.rj(0, player, js), bq.hY.jG(player, js))
	}, this.py = function(player, cj, ju) {
		ar.d1.r0(1) && ar.d1.q6(player) && ar.d1.rk(player, ju) && ar.d1.rl(player, cj, 12, 0) && ar.d1.rm(player, ju) && ((ju = iG.ro(player, j9.rp[0])) || iG.rq(player)) && (fz.rr[player]++, iA.iQ.rj(1, player, cj, j9.rp[0]), i3.rs.rt(player,
			ju)) && (ar.d1.ru(player), hw.rv(player, cj), i3.rs.rw(player))
	}, this.rx = function(player, cj, jw) {
		ar.d1.r0(1) && ar.d1.q6(player) && bq.hU && ar.d1.rk(player, jw) && ar.d1.ry(player, jw) && ar.d1.rz(player, ar.d1.d2(player, cj), jw) && (iA.iQ.rj(2, player, cj, jw), hr.pu(player, jw))
	}, this.q0 = function(player, cj, js) {
		ar.d1.r0(1) && ar.d1.q6(player) && (0 === js && 1 === cj ? this.r9(player) : i2.ok(js) && bo.h.s0 !== bo.h.s1 && bo.h.s2[player] !== bo.h.s3 && 0 !== fz.oH[player].length && ar.d1.rl(player, cj, 32, 0) && bo.s4.s5(player, js) && (hw.s6(
			player), iA.iQ.rj(3, player, cj, js), ar.d1.ru(player), s7.s8.q0(player), bo.h.s9(player)))
	}, this.q9 = function(player, jz, js) {
		ar.d1.r0(1) && ar.d1.q6(player) && i2.ok(js) && bo.jc.sA(player, jz) && bo.s4.sB(js) && (iA.iQ.rj(4, player, jz, js), ar.d1.sC(player, 8), hw.sD(player, j9.sE[1], 12), s7.s8.q9(player), bo.h.q9())
	}, this.sF = function(player, ju) {
		ar.d1.r0(1) && ar.d1.q6(player) && (ju = Math.min(ju, bq.g7), iG.ro(player, ju)) && (iA.iQ.rj(5, player, ju), iG.sG(player, ju))
	}, this.sH = function(player, gb) {
		(ar.d1.r0(1) || ar.d1.r0(2)) && ar.d1.q6(player) && (gb = z.ax(gb, 0, 1023), iA.iQ.rj(6, player, gb), bp.lW(player, 0, gb))
	}, this.rB = function(player, k3) {
		bx.rA(player) && (iA.iQ.rj(7, player, k3), bx.sI(player, k3))
	}, this.sJ = function(player) {
		(ar.d1.r0(0) || ar.d1.r0(1)) && ar.d1.q6(player) && c2.sK(player) && (iA.iQ.rj(8, player), sL.sJ(player))
	}, this.sM = function(player) {
		iA.iQ.rj(9, player), sL.sM(player)
	}, this.r9 = function(player) {
		bx.rC(player) && (iA.iQ.rj(3, player, 1, 0), bx.r9(player))
	}, this.q2 = function(player, cj, js, ju) {
		ar.d1.r0(1) && ar.d1.q6(player) && ar.d1.rk(player, ju) && ar.d1.rm(player, ju) && i2.ok(js) && qF.qG.sN(player, js) && (iG.ro(player, j9.rp[0]) || iG.rq(player)) && (iA.iQ.rj(10, player, (cj << 10) + j9.rp[0], js), ju = ar.d1.jD(player,
			cj), fz.jF[player].push(j9.sO[0]), iG.jG(player, ju, j9.rp[0]), iD.jH(player, !0), hw.sP(player))
	}
}

function sQ() {
	this.sR = function(player) {
		for (var sS = bo.h.sS, sT = player << 3, a5 = sT + bo.h.s2[player] - 1; sT <= a5; a5--) this.sV(sS[a5])
	}, this.sV = function(sW) {
		var h = bo.h,
			sX = h.s0 - 1,
			sY = h.sZ[sW],
			sa = h.sb[sW],
			sc = h.sd[sW];
		h.s0 = sX, h.sZ[sW] = h.sZ[sX], h.se[sW] = h.se[sX], h.sf[sW] = h.sf[sX], h.sd[sW] = h.sd[sX], h.sg[sW] = h.sg[sX], h.sh[sW] = h.sh[sX], h.sb[sW] = h.sb[sX], h.si[sW] = h.si[sX], h.sj[sW] = h.sj[sX], h.sk[sW] = h.sk[sX], h.sS[h.sZ[sW]] =
			sW,
			function(sn) {
				var player = sn >> 3,
					h = bo.h,
					a3 = h.s2[player] - 1,
					so = (player << 3) + a3;
				h.s2[player] = a3, so !== sn && (h.sS[sn] = h.sS[so], h.sZ[h.sS[sn]] = sn)
			}(sY), bo.os.os[i2.or(h.sd[sW])][h.sb[sW]] = sW, sX = i2.or(sc), sY = sa, sX = bo.os.os[sX], h = sX.pop(), sY !== sX.length && (sX[sY] = h, bo.h.sb[h] = sY)
	}
}

function sq() {
	this.data = new sr;
	var ss = (new dQ).L84,
		su = (this.st = ss, !1);
	this.aJ = function() {
		var a3, a4;
		su = !1, "en" !== aP.aQ.data[12].value.split("-")[0].toLowerCase() ? aP.aQ.data[12].value === aP.aQ.data[145].value && 0 < aP.aQ.data[146].value && (a3 = aP.aQ.data[146].value, (a4 = aP.b8.t3(a3, !1)).length === a3) && !!ar.t4.t5(a4) &&
			function(a4) {
				for (var a3 = a4.length, ae = 0; ae < a3; ae++) a4[ae] = a4[ae].replace("&#39;", "'");
				var t7 = aP.b8.t3(a3, !0);
				if (a3 !== t7.length) return !1;
				if (!ar.t4.t5(t7)) return !1;
				for (var ei = ss.length, ed = new Array(ei), t8 = ei === a3, gi = Math.min(a3, ei), a5 = 0; a5 < ei; a5++)
					if (ed[a5] = ss[a5], a5 < a3 && t7[a5] === ed[a5]) ed[a5] = a4[a5];
					else {
						t8 = !1;
						for (var an = 0; an < gi; an++)
							if (t7[an] === ed[a5]) {
								ed[a5] = a4[an];
								break
							}
					} return df.st = ed, t8
			}(a4) || (su = !0) : df.st = ss
	}, this.sz = function() {
		hv.fZ(), g6.fZ(), c5.fZ(), hw.fZ(), d.aJ(), t0 = new t1
	}, this.t2 = function() {
		return this.st === ss || !ss.length
	}, this.t9 = function() {
		var tA;
		su && (su = !1, 0 !== ss.length) && (tA = aP.aQ.data[12].value, g.dZ.tB(0, tA.slice(0, 20)))
	}, this.tC = function(a4) {
		a4.length === ss.length && (this.st = a4, aP.aS.aT(145, aP.aQ.data[12].value), aP.aS.aT(146, a4.length), aP.b8.tD(a4, !1), aP.b8.tD(ss, !0), 0 === m.bS()) && 5 === aM.fQ && aM.h.aN()
	}, this.dg = function() {
		var tE, a4 = navigator.languages;
		return a4 && a4.length ? (tE = Math.max(df.data.tF(a4[0]), 0), 1 === a4.length ? [tE, tE] : [tE, Math.max(df.data.tF(a4[1]), 0)]) : [0, 0]
	}
}

function tG() {
	this.tH = function() {
		dU.dV(39), dU.dW(1, 0), dU.dW(6, 16), g.dZ.tI(), g.h.send(0, dU.di)
	}, this.tJ = function(dT) {
		dU.dV(115), dU.dW(1, 0), dU.dW(6, 17), h0.kY.tP(aP.aQ.data[105].value, 5), h0.kY.tP(aP.aQ.data[106].value, 8), dU.dW(30, aP.aQ.data[109].value), g.h.send(dT, dU.di)
	}, this.tL = function() {
		dU.dV(55), dU.dW(1, 0), dU.dW(6, 18), h0.kY.tM(aP.aQ.data[110].value), g.h.send(0, dU.di)
	}, this.tN = function(dl) {
		var a3 = dl.a2.length;
		dU.dV(21 + 16 * a3), dU.dW(1, 0), dU.dW(6, 29), dU.dW(6, dl.kX), dU.dW(8, a3), dn.h6.tM(dl.a2), g.h.send(0, dU.di)
	}, this.tO = function(data) {
		dU.dV(43), dU.dW(1, 0), dU.dW(6, 25), dU.dW(6, data.kX), h0.kY.tP(data.dr, 5), g.h.send(0, dU.di)
	}, this.rc = function(data) {
		dU.dV(75), dU.dW(1, 0), dU.dW(6, 27), dU.dW(6, data.kX), h0.kY.tP(data.dr, 5), dU.tQ(32, data.value), g.h.send(0, dU.di)
	}
}

function tR() {
	var tS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.tT = function(e6) {
		var tV, a2 = new Date(e6.getTime() - 6e4 * e6.getTimezoneOffset()).toUTCString();
		return a2.length < 12 || (a2 = a2.substring(5, a2.length), 0 === (e6 = e6.getTimezoneOffset())) ? a2 : (tV = (e6 < 0 ? "+" : "-") + z.a0(Math.abs(e6), 60), 0 == (e6 = Math.abs(e6) % 60) ? a2 + tV : a2 + tV + ":" + (e6 < 10 ? "0" : "") +
			e6)
	}, this.tW = function(e6) {
		var a2 = e6.toUTCString();
		return a2.length < 12 ? a2 : function(e6) {
			return tS[e6.getUTCDay()]
		}(e6) + ", " + a2.substring(5, a2.length - 4)
	}
}

function tY() {
	var m9;
	this.aJ = function() {
		m9 = m9 || bm.h.tZ(20, hv.ta[7])
	}, this.n = function() {
		var tb = bg;
		if (!(5 <= tb)) {
			var tc = f.af,
				td = f.ae,
				gE = lg / tb,
				ex = lh / tb,
				li = (tc + lg) / tb,
				lj = (td + lh) / tb,
				j7 = -20 * tb,
				te = .5 * j7,
				tf = bh.ma << 4,
				a3 = bo.h.s0,
				sd = bo.h.sd,
				tg = m9,
				gq = ah;
			3 < tb && (gq.globalAlpha = .5 * (5 - tb));
			for (var a5 = 0; a5 < a3; a5++) {
				var oR = sd[a5],
					ag = tc * (oR % tf / 16 - gE) / (li - gE) + te,
					oR = td * (Math.floor(oR / tf) / 16 - ex) / (lj - ex) + te;
				tc < ag || td < oR || ag < j7 || oR < j7 || (gq.setTransform(tb, 0, 0, tb, ag, oR), gq.drawImage(tg, 0, 0))
			}
			gq.globalAlpha = 1, gq.setTransform(tb, 0, 0, tb, 0, 0)
		}
	}
}

function tj() {
	var tk, tl, cl, ae, er;

	function to(a5) {
		var tp = !0,
			a6 = ao.ap,
			af = (tk[a5].ju === bq.g7 ? tk[a5].c8.fillStyle = ao.tq : (hy.tr(tk[a5].ju), tk[a5].c8.fillStyle = ar.color.kM(j9.ts[0], j9.ts[1], j9.ts[2], .87), 400 < ar.t4.tt(j9.ts, 0, 2) && (tp = !1, a6 = ao.aq)), tk[a5].canvas.width),
			cG = (tk[a5].c8.clearRect(0, 0, af, ae), tk[a5].c8.fillRect(0, 0, af, ae), tk[a5].c8.fillStyle = a6, ! function(c8, af, ae) {
				c8.fillRect(0, 0, af, 1), c8.fillRect(0, ae - 1, af, 1), c8.fillRect(0, 0, 1, ae), c8.fillRect(af - 1, 0, 1, ae)
			}(tk[a5].c8, af, ae), tl + 2 * ae < af && (tk[a5].c8.fillRect(af - tl - ae, 0, 1, ae), tk[a5].c8.fillText(fz.fy[tk[a5].ju], Math.floor((af - tl) / 2), Math.floor(.57 * ae))), 0 !== tk[a5].id ? 0 : ae);
		tk[a5].c8.fillText(ar.d5.d6(tk[a5].g5), Math.floor(af - tl / 2 - cG), Math.floor(.57 * ae)),
			function(a5, af, cG, tp) {
				tk[a5].c8.fillStyle = tp ? ao.ep : ao.gU;
				tp = Math.floor(tl * tk[a5].g5 / tk[a5].ty);
				tk[a5].c8.fillRect(Math.floor(af - tl - cG), ae - er, tp, er)
			}(a5, af, cG, tp), 0 === tk[a5].id ? (tw(a5, af, tp, a6), function(a5, af, tp) {
				tk[a5].c8.strokeStyle = tp ? ao.u3 : ao.u4, tk[a5].c8.fillRect(ae, 0, 1, ae);
				tp = af - ae;
				tk[a5].c8.beginPath(), tk[a5].c8.moveTo(Math.floor(.3 * ae + tp), Math.floor(ae / 2)), tk[a5].c8.lineTo(Math.floor(ae - .3 * ae + 0 + tp), Math.floor(ae / 2)), tk[a5].c8.stroke(), tk[a5].c8.beginPath(), tk[a5].c8.moveTo(Math
					.floor(ae / 2 + tp), Math.floor(.3 * ae)), tk[a5].c8.lineTo(Math.floor(ae / 2 + tp), Math.floor(ae - .3 * ae + 0)), tk[a5].c8.stroke()
			}(a5, af, tp)) : tw(a5, 2 * ae, tp, a6)
	}

	function tw(a5, af, tp, a6) {
		tk[a5].c8.strokeStyle = tk[a5].tz ? ao.u0 : tp ? ao.u1 : ao.u2, tk[a5].c8.fillStyle = a6, tk[a5].c8.fillRect(af - ae, 0, 1, ae), tk[a5].c8.lineWidth = Math.max(Math.floor(ae / 12), 3), tk[a5].c8.lineCap = "round";
		tp = .35;
		af = ae + 1, tk[a5].c8.beginPath(), tk[a5].c8.moveTo(Math.floor(af - tp * ae + 0), Math.floor(tp * ae)), tk[a5].c8.lineTo(Math.floor(af - ae + tp * ae), Math.floor(ae - tp * ae + 0)), tk[a5].c8.stroke(), tk[a5].c8.beginPath(), tk[a5].c8
			.moveTo(Math.floor(af - ae + tp * ae), Math.floor(tp * ae)), tk[a5].c8.lineTo(Math.floor(af - tp * ae + 0), Math.floor(ae - tp * ae + 0)), tk[a5].c8.stroke()
	}

	function uF(a3) {
		for (var g5, a5 = a3 - 1; 0 <= a5; a5--) g5 = iG.r6(bq.d3, a5), tk[a5].g5 !== g5 && (tk[a5].g5 = g5, tk[a5].ty = g5 > tk[a5].ty ? g5 : tk[a5].ty, tk[a5].cm = !0)
	}

	function tn(uI) {
		uI.canvas = document.createElement("canvas"), bh.tm.font = cl;
		var af = tl;
		uI.ju < bq.g7 && 0 === uI.id && (af += Math.floor(bh.tm.measureText(fz.fy[uI.ju] + "000").width)), af += ae, 0 === uI.id && (af += ae), uI.canvas.width = af, uI.canvas.height = ae, uI.c8 = uI.canvas.getContext("2d", {
			alpha: !0
		}), uI.c8.font = cl, ar.at.textBaseline(uI.c8, 1), ar.at.textAlign(uI.c8, 1)
	}

	function uB(a5) {
		return c0.uL() ? f.af - tk[a5].canvas.width - ab.gap : c0.ag
	}

	function uC(a5) {
		return Math.floor(2 * ab.gap + (c0.uL() ? by.ae + ab.gap : 0) + c0.ae + a5 * (1.3 * ae))
	}
	this.aJ = function() {
		tk = [], this.resize()
	}, this.resize = function() {
		cl = bu.cl, ae = bu.fontSize + 5, ae = Math.floor(1.25 * ae), bE.bF.bG() && (ae = Math.floor(1.25 * ae)), er = Math.floor(.15 * ae), bh.tm.font = cl, tl = Math.floor(bh.tm.measureText("02 000 000 0000").width);
		for (var a5 = tk.length - 1; 0 <= a5; a5--) tn(tk[a5]), to(a5)
	}, this.bR = function() {
		for (var a5 = tk.length - 1; 0 <= a5; a5--) tk[a5].cm && (tk[a5].cm = !1, to(a5))
	}, this.ay = function(az, b0) {
		if (2 !== bq.dM && 0 !== fz.iN[bq.d3] && !bq.cq && !ar.d1.lp(bq.d3))
			for (var u6, u7, u8, u9 = bE.bF.bG() ? ae : 0, uA = bE.bF.bG() ? Math.floor(.15 * ae) : 0, a5 = tk.length - 1; 0 <= a5; a5--)
				if (u6 = uB(a5), u7 = uC(a5), u8 = tk[a5].canvas.width, u7 - uA <= b0 && b0 <= u7 + ae + uA) {
					if (u6 - u9 <= az && az <= u6 + ae + u9) return tk[a5].tz || (tk[a5].cm = !0, tk[a5].tz = !0, 0 === tk[a5].id && gl.gm.sF(tk[a5].ju)), !0;
					if (0 === tk[a5].id && u6 + u8 - ae - u9 <= az && az <= u6 + u8 + u9) return i4.px(3), gl.gm.py(bw.d4(), tk[a5].ju), !0
				} return !1
	}, this.c = function() {
		var a3;
		0 === fz.iN[bq.d3] || ar.d1.lp(bq.d3) && !bq.cq || (function(a3) {
			if (tk.length !== a3) return 1;
			for (var a5 = a3 - 1; 0 <= a5; a5--)
				if (tk[a5].id !== iG.uH(bq.d3, a5) || tk[a5].ju !== iG.r8(bq.d3, a5)) return 1;
			return
		}(a3 = iG.r3(bq.d3)) && function(a3) {
			var a5, id, ju, an, g5, uJ = [];
			loop: for (a5 = 0; a5 < a3; a5++) {
				for (id = iG.uH(bq.d3, a5), ju = iG.r8(bq.d3, a5), an = 0; an < tk.length; an++)
					if (tk[an].id === id && tk[an].ju === ju) {
						uJ.push(tk.splice(an, 1)[0]);
						continue loop
					} g5 = iG.r6(bq.d3, a5), tn(g5 = {
					ju: ju,
					g5: g5,
					ty: g5,
					id: id,
					cm: !0,
					tz: !1,
					canvas: null,
					c8: null
				}), uJ.push(g5)
			}
			tk = uJ
		}(a3), uF(a3))
	}, this.uK = function(cE) {
		for (var a3 = Math.min(tk.length, iG.r3(bq.d3)), a5 = 0; a5 < a3; a5++)
			if (tk[a5].ju === cE) return void(tk = [])
	}, this.n = function() {
		if (0 !== fz.iN[bq.d3] && (!ar.d1.lp(bq.d3) || bq.cq))
			for (var a5 = tk.length - 1; 0 <= a5; a5--) ah.drawImage(tk[a5].canvas, uB(a5), uC(a5))
	}
}

function uM() {
	this.at = new uN, this.t4 = new uO, this.d1 = new uP, this.d5 = new uQ, this.c8 = new uR, this.fH = new uS, this.canvas = new uT, this.color = new uU, this.uV = new tR, this.aJ = function() {
		this.at.uW()
	}
}

function uX() {
	function v2(v5) {
		var iy = bq.data,
			v5 = (iy.selectedPlayer = gv.gz(v5), iy.spawningSeed = gv.gz(14), gv.gz(4)),
			v5 = (v5 < 7 ? (iy.gameMode = 1, iy.numberTeams = v5 + 2) : 9 === v5 ? (iy.gameMode = iy.isZombieMode = 1, iy.numberTeams = 2) : (iy.gameMode = 0, iy.battleRoyaleMode = 7 === v5 ? 0 : 10 === v5 ? 1 : 2), iy.isContest = gv.gz(1), gv.gz(
			6));
		return iy.mapType = bh.v6(v5) ? 0 : 1, bh.v7(iy, v5), iy.mapSeed = gv.gz(14), v5
	}
	this.uY = function(dT, di) {
		gv.aJ(di), 0 === gv.size ? g.h.gx(dT, 3205) : __fx.customLobby.isCustomMessage(di) || ((0 === gv.gz(1) ? function(dT) {
			var uc = gv.gz(6);
			0 === uc ? function(dT) {
					if (0 === dT && 8 !== m.bS()) {
						aM.h.ur();
						for (var us = gv.gz(12), ut = gv.gz(6), a4 = new Array(us), a5 = 0; a5 < us; a5++) a4[a5] = gv.gz(ut);
						bT.ec(a4)
					}
				}(dT) : 2 === uc ? g.ue.uf(dT) : 3 === uc || 4 === uc ? i.aJ() : 9 === uc ? g.ug.uh(dT) : 10 === uc ? g.ui.uj() : 11 === uc ? g.ug.uk(dT) : 12 === uc ? g.ui.ul() : 13 === uc ? g.um.gu() : 14 === uc ? g.um.h8() : 15 ===
				uc ? g.ug.un() : 16 === uc ? g.ue.uo(dT) : 17 === uc ? g.ue.up(dT) : 19 === uc && g.ue.uq(dT)
		} : function(dT) {
			if (8 !== m.bS() && !i.v9()) return;
			if (dT !== g.h.jP) g.h.gx(dT, 3244);
			else if (0 === gv.gz(1)) k.vA.vB(gv.di);
			else {
				var a5, dT = gv.gz(2);
				if (0 === dT) {
					var gb, v0 = gv.gz(9);
					0 !== fz.iN[v0] && 0 !== fz.iN[bq.d3] && (gb = gv.gz(10), bu.gn(v0, bq.d3, gb), bp.lW(v0, 1, gb))
				} else if (1 === dT) ! function() {
					var v0 = gv.gz(9);
					0 !== fz.iN[v0] && 0 !== fz.iN[bq.d3] && iI.eB(0, [v0], !0) && bu.vH(v0, 1)
				}();
				else if (2 === dT) ! function() {
					var v0 = gv.gz(9),
						target = gv.gz(9);
					0 !== fz.iN[v0] && 0 !== fz.iN[target] && 0 !== fz.iN[bq.d3] && iI.eB(1, [v0], !0) && (bp.lW(v0, 3, 96), bp.lW(target, 4, 96), bu.vI(v0, target))
				}();
				else if (dX.mv && !dX.mw) {
					var a3 = 540;
					for (dU.dV(17287), dU.dW(1, 0), dU.dW(6, 10), a3 = Math.min(gl.ht.hu.length, 540), a5 = 0; a5 < a3; a5++) dU.tQ(32, gl.ht.hu[a5]);
					g.h.send(g.h.jP, dU.di)
				}
			}
		})(dT), k.ub())
	}, this.uu = function(di) {
		if (gv.aJ(di), gv.b4 = 1, 3 === gv.gz(6)) {
			gv.b4 += 20;
			var iy = bq.data = new hg,
				di = v2(9),
				v3 = iy.humanCount = gv.gz(9) + 1;
			iy.selectableSpawn = 1 === iy.gameMode || v3 < 100, iy.colorsData = new Uint32Array(v3), iy.playerNamesData = new Array(v3);
			for (var a5 = 0; a5 < v3; a5++) gv.b4++, iy.colorsData[a5] = gv.gz(18), iy.playerNamesData[a5] = h0.h6.h7(gv.gz(5));
			m.v4(), bh.dV(di, iy.mapSeed), bq.hk()
		} else ! function() {
			gv.b4 += 20;
			var iy = bq.data = new hg,
				v1 = v2(1);
			iy.humanCount = 2;
			iy.selectableSpawn = 1, iy.elo = new Uint16Array(2), iy.colorsData = new Uint32Array(2), iy.playerNamesData = new Array(2);
			for (var a5 = 0; a5 < 2; a5++) gv.b4++, iy.colorsData[a5] = gv.gz(18), iy.elo[a5] = gv.gz(14), iy.playerNamesData[a5] = h0.h6.h7(gv.gz(5));
			m.v4(), bh.dV(v1, iy.mapSeed), bq.hk()
		}()
	}, this.ux = function() {
		gv.b4 = 1;
		var uc = gv.gz(6),
			uy = gv.gz(10);
		return g.h.dh === uy ? (g.h.jP = uy, !1) : (g.h.close(g.h.dh, 3247), g.h.jP = uy, i.jQ = gv.gz(10), i.jp = gv.gz(3 === uc ? 9 : 1), g.h.uz(uy, 5) && g.v0.jo(), !0)
	}
}

function bZ() {
	this.vJ = 28, this.bc = 0, this.vK = null;
	var vM = this.vL = null;

	function vQ(cD, vS) {
		var ag, aZ, js, la, m9 = ar.at.pj(cD, cD),
			gq = ar.at.getContext(m9, !0),
			vU = ar.at.getImageData(gq, cD, cD),
			fX = vU.data,
			ei = (cD >> 1) - .5,
			vV = .5 + ei;
		for (vV *= vV, aZ = 0; aZ < cD; aZ++)
			for (ag = 0; ag < cD; ag++) la = (la = ag - ei) * la + (la = aZ - ei) * la, fX[js = 4 * (aZ * cD + ag)] = vS[0], fX[1 + js] = vS[1], fX[2 + js] = vS[2], fX[3 + js] = (vV - la) * vS[3] / vV;
		return gq.putImageData(vU, 0, 0), m9
	}

	function vZ(a5, gq, m9, cD) {
		var highlight, ag, aZ;
		0 !== fz.iN[a5] && 0 !== fz.lJ[a5] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a5]) && (cD *= 2), ag = fz.lR[a5] + fz.lU[a5] + 1 - cD - 2 >> 1, aZ = fz.lS[a5] + fz.lV[a5] + 1 - cD - 2 >> 1, highlight ? gq
			.drawImage(m9[bq.hU ? 9 === bq.fs && 5 === g6.g5[a5] ? 3 : hv.va[a5] : a5 < bq.fx ? 1 : 0], ag, aZ, cD, cD) : gq.drawImage(m9[bq.hU ? 9 === bq.fs && 5 === g6.g5[a5] ? 3 : hv.va[a5] : a5 < bq.fx ? 1 : 0], ag, aZ))
	}
	this.aJ = function() {
		var dH;
		this.bc = 700,
			function(dH) {
				var cD = dH.vJ;
				if (dH.vL = [], vM = [], bq.hU) {
					for (var a5 = 0; a5 <= bq.hV; a5++) dH.vL.push(vQ(cD, hv.ta[hv.vR[a5]])), vM.push(vQ(cD >> 1, hv.ta[hv.vR[a5]]));
					9 === bq.fs && vM.push(vQ(cD, hv.ta[1]))
				} else dH.vL.push(vQ(cD, hv.ta[7])), dH.vL.push(vQ(cD, hv.ta[4])), vM.push(vQ(cD >> 1, hv.ta[7]))
			}(this),
			function(dH, vW) {
				var a5, vK = dH.vK,
					gq = ar.at.getContext(vK, !0),
					a3 = bq.g7,
					cD = dH.vJ >> 1;
				gq.imageSmoothingEnabled = !1, gq.setTransform(1, 0, 0, 1, 0, 0), vW && gq.clearRect(0, 0, vK.width, vK.height);
				if (9 === bq.fs) {
					cD <<= 1;
					dH = hm.vY[5];
					for (a5 = a3 - dH; a5 < a3; a5++) vZ(a5, gq, vM, cD);
					a3 -= dH, cD >>= 1
				}
				for (a5 = bq.fx; a5 < a3; a5++) vZ(a5, gq, vM, cD)
			}(this, null !== (dH = this).vK && dH.vK.width === bh.ma - 2 && dH.vK.height === bh.oi - 2 || (dH.vK = ar.at.pj(bh.ma - 2, bh.oi - 2), !1)), bq.cp || this.vP()
	}, this.tZ = vQ, this.vP = function() {
		for (var a3 = bq.fx, cD = this.vJ, vL = this.vL, gq = ar.at.getContext(this.vK, !0), a5 = 0; a5 < a3; a5++) vZ(a5, gq, vL, cD)
	}
}

function vb() {
	this.vc = 0, this.vd = 0, this.ve = 0, this.vf = 0, this.vg = 0, this.vh = 0, this.vi = [0, 0, 0, 0], this.vj = function() {
		this.vc = bj.bk(), this.vd = bj.bl(), this.ve = -this.vc, this.vf = -this.vd, this.vg = f.af / bg, this.vh = f.ae / bg, this.vi[0] = Math.floor(this.ve), this.vi[1] = Math.floor(this.vf), this.vi[2] = Math.floor(this.vi[0] + this.vg + 1),
			this.vi[3] = Math.floor(this.vi[1] + this.vh + 1), i1.vk = !0
	}
}

function uP() {
	this.r0 = function(vl) {
		return 0 === vl ? 1 === bq.dM && bq.cp : 1 === vl ? 1 === bq.dM && !bq.cp : 2 === bq.dM
	}, this.q6 = function(player) {
		return 0 !== fz.iN[player] && 2 !== fz.lq[player]
	}, this.vm = function(player) {
		return player === bq.d3 && 2 !== fz.lq[player]
	}, this.vn = function() {
		return i8.j6 < 2 ? 0 : bq.hU ? 1 < bs.vp() : fz.lJ[vo[1]]
	}, this.vq = function() {
		var j6 = i8.j6;
		if (0 !== j6) {
			if (!bq.hU) return !this.lp(vo[0]);
			for (var va = hv.va, vr = bs.vs(), j5 = i8.j5, a5 = j6 - 1; 0 <= a5; a5--) {
				var cE = j5[a5];
				if (va[cE] === vr && !this.lp(cE)) return 1
			}
		}
		return 0
	}, this.vt = function(player) {
		return player === bq.d3
	}, this.lp = function(player) {
		return player >= bq.fx || 2 === fz.lq[player]
	}, this.vu = function(player) {
		return 0 !== fz.iN[player]
	}, this.vv = function(player) {
		return player < bq.fx
	}, this.rk = function(vw, vx) {
		return vw !== vx
	}, this.vy = function(player, y) {
		var min;
		return y = this.vz(player, y), fz.lQ[player] += y, fz.w0[player] && (min = Math.min(fz.w0[player], fz.lQ[player]), fz.w0[player] -= min, fz.lQ[player] -= min), y
	}, this.vz = function(player, y) {
		var nw = fz.lQ[player];
		return y = Math.min(y, fz.lJ[player] * bq.hQ - nw), y = Math.min(y, bq.hG - nw), Math.max(y, 0)
	}, this.rl = function(player, cj, w1, w2) {
		var nw = fz.lQ[player],
			cj = z.a0(nw * (cj + 1), 1024),
			w1 = z.a0(w1 * nw, 1024),
			cj = Math.min(cj, nw - w1);
		return 10 === bq.fs && (cj = iH.ny(player, cj)), j9.sE[0] = cj, j9.sE[1] = w1, w2 <= cj
	}, this.rz = function(player, rx, jw) {
		var player = fz.lQ[player],
			w3 = z.a0(64 * player, 1024),
			player = (rx = Math.min(rx, player - w3), this.w5(rx));
		return w3 += player, rx = this.vz(jw, rx -= player), j9.sE[0] = rx, j9.sE[1] = w3, 1 <= rx
	}, this.w6 = function(rx, jw) {
		var w4 = this.w5(rx);
		return rx = this.vz(jw, rx -= w4), j9.sE[0] = rx, j9.sE[1] = w4, 1 <= rx
	}, this.d2 = function(player, w7) {
		return z.a0(fz.lQ[player] * (w7 + 1), 1024)
	}, this.w5 = function(w8) {
		return z.a0(Math.max(2142 - k.mF(), 0) * w8, 2142)
	}, this.sC = function(player, w1) {
		w1 = z.a0(w1 * fz.lQ[player], 1024);
		j9.sE[1] = w1, fz.lQ[player] -= w1
	}, this.w9 = function(player, wA) {
		var wC, nh, an = fz.lQ[player];
		return wA <= an ? fz.lQ[player] -= wA : (fz.lQ[player] = 0, nh = fz.w0[player] + (wC = 5 * ((an = wA - an) >> 2)), hw.sD(player, wC - an, 12), nh <= bq.hI ? fz.w0[player] = nh : (fz.w0[player] = bq.hI, hw.sD(player, nh - bq.hI, 18))), wA
	}, this.jD = function(player, cj) {
		var lQ = fz.lQ,
			nw = lQ[player],
			cj = z.a0(nw * (cj + 1), 1024),
			w3 = Math.max(z.a0(nw, 10), 1e3);
		return (cj = Math.min(cj, nw - w3)) < 0 ? (lQ[player] = 0, w3 = Math.min(1e3, nw + bq.hI - fz.w0[player]), j9.sE[1] = w3, fz.w0[player] += w3 - nw, 0) : (j9.sE[1] = w3, 10 === bq.fs && (cj = iH.ny(player, cj)), lQ[player] -= w3 + cj, cj)
	}, this.ru = function(player) {
		fz.lQ[player] -= j9.sE[0] + j9.sE[1]
	}, this.rm = function(player, ju) {
		return (ju = Math.min(ju, bq.g7)) < bq.g7 && 0 === fz.iN[ju] && (ju = bq.g7), (j9.rp[0] = ju) === bq.g7 || jA(player, ju)
	}, this.ry = function(player, jw) {
		return 0 !== fz.iN[jw] && !jA(player, jw)
	}, this.wD = function(player, wE) {
		for (var cE, a3 = i8.j6, wF = 0, wG = vo, a5 = 0; a5 < a3; a5++)
			if (cE = wG[a5], !this.lp(cE)) {
				if (player === cE) return !0;
				if (++wF > wE) return !1
			} return !1
	}, this.wH = function(cE) {
		var wI = bq.hU ? bs.wJ() : fz.lJ[vo[0]];
		return wI >= z.a0(cE * bq.hS, 100)
	}, this.rf = function(y, min, max) {
		return Math.floor(z.ax(isNaN(y) ? 0 : Number(y), min, max))
	}
}

function wK() {
	this.h = new wL, this.fQ = 0;
	var wM = new Array(31);

	function wQ() {
		for (var a3 = wM.length, a5 = 0; a5 < a3; a5++) wM[a5] = null
	}
	this.aJ = function() {
		for (var wN, wO = document.body.firstChild; wO;) {
			if (wN = wO.nextSibling, document.body.contains(wO) && ("DIV" === wO.tagName || "INPUT" === wO.tagName || "BUTTON" === wO.tagName)) try {
				document.body.removeChild(wO)
			} catch (cb) {
				console.log("error 2623: " + cb)
			}
			wO = wN
		}
	}, this.iZ = function(b4, wP, dl) {
		void 0 === wP && (wP = this.fQ), k.l = !0, 0 === b4 && (0 === m.bS() ? b4 = 5 : bE.bF.setState(13)), this.aR(), this.fQ === b4 && (wP = wM[b4].wP, wM[b4] = null), this.fQ = b4;
		var ei = wM[b4];
		if (!ei || 4 === b4 || 7 === b4 || 8 === b4 || 9 === b4 || 10 === b4 || 11 === b4 || 13 === b4 || 15 === b4 || 18 === b4 || 20 <= b4 && b4 <= 28 || 32 === b4 || 33 === b4) {
			if (0 === b4) return void wQ();
			1 === b4 ? ei = new wR : 2 === b4 ? ei = new wS : 3 === b4 ? ei = new wT : 4 === b4 || 9 === b4 || 10 === b4 || 11 === b4 || 13 === b4 || 33 === b4 ? ei = dl : 5 === b4 ? ei = new wU : 6 === b4 ? ei = new wV : 7 === b4 ? ei = new wW(
					aM.h.wX) : 8 === b4 ? ei = dl : 12 === b4 ? ei = new aB : 14 === b4 ? ei = new wY : 15 === b4 ? ei = new wW(aM.h.wZ) : 16 === b4 ? ei = new wa : 17 === b4 ? ei = new wb : 18 === b4 ? ei = new rG : 19 === b4 ? ei = new wc :
				20 === b4 ? ei = new wd : 21 === b4 ? ei = new we : 22 === b4 ? ei = new wf : 23 === b4 ? ei = new wg : 24 === b4 ? ei = new wh : 25 === b4 ? ei = new wi : 26 === b4 ? ei = new wj : 27 === b4 ? ei = new wk : 28 === b4 ? ei =
				new wl : 29 === b4 ? ei = new wm : 30 === b4 && (ei = new wn), ei.wP = wP, wM[b4] = ei
		}
		ei.show(dl)
	}, this.rI = function() {
		this.ci() && this.wo(this.fR().wP)
	}, this.wo = function(b4) {
		this.ci() && (wM[b4] ? (this.aR(), k.l = !0, this.fQ = b4, wM[b4].show()) : this.iZ(b4))
	}, this.aR = function() {
		this.ci() && wM[this.fQ].aR()
	}, this.mo = function() {
		this.ci() && (wM[this.fQ].aR(), wQ(), this.fQ = 0, bE.bF.setState(13))
	}, this.n = function() {
		var ei;
		this.ci() && (ei = wM[this.fQ]).n && ei.n()
	}, this.resize = function() {
		if (!this.ci()) return !1;
		wM[this.fQ].resize()
	}, this.ay = function(ag, aZ) {
		var ei;
		this.ci() && (ei = wM[this.fQ]).ay && ei.ay(ag, aZ)
	}, this.b2 = function(ag, aZ) {
		var ei;
		this.ci() && (ei = wM[this.fQ]).b2 && ei.b2(ag, aZ)
	}, this.b5 = function() {
		var ei;
		this.ci() && (ei = wM[this.fQ]).b5 && ei.b5()
	}, this.b3 = function(az, b0, deltaY) {
		var ei;
		this.ci() && (ei = wM[this.fQ]).b3 && ei.b3(az, b0, deltaY)
	}, this.b6 = function(code) {
		var ei;
		return !!this.ci() && ((ei = wM[this.fQ]).b6 && ei.b6(code), !0)
	}, this.c = function() {
		var ei;
		this.ci() && (ei = wM[this.fQ]) && ei.c && ei.c()
	}, this.ci = function() {
		return 0 < this.fQ
	}, this.fR = function() {
		return wM[this.fQ]
	}, this.wp = function(b4) {
		return wM[b4]
	}, this.wq = function() {
		return wM
	}
}

function ha() {
	this.aJ = function() {
		8 === bq.fs && bu.wr()
	}, this.ws = function(wt) {
		var elo = bq.data.elo,
			oC = (elo[wt] - elo[1 - wt]) / 10,
			oC = 8 / (1 + Math.pow(2, oC / 32)),
			oC = Math.floor(10 * oC + .5),
			wv = elo[wt] + oC,
			wv = this.wx(wv),
			elo = this.wx(elo[1 - wt] - oC);
		0 === wt ? bu.wz(wv, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : bu.wz(elo, wv, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), fz.x0[wt] < 100 || bu.x1(220, L(39), 40, 0, ao.ap, ao.c9, -1, !1)
	}, this.wx = function(elo) {
		return 16e3 === (elo = z.ax(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function x2() {
	this.x3 = !1, this.c = function() {
		k.mF() % 250 != 249 || bq.cq || (g.dZ.x4(+(this.x3 && fz.iN[bq.d3]), i8.j6 + bo.h.s0), this.x3 = !1)
	}
}

function ne() {
	var x6 = new Uint8Array(64);
	this.aJ = function() {
		var a5;
		for (x6[0] = 45, x6[37] = 95, a5 = 0; a5 < 10; a5++) x6[a5 + 1] = 48 + a5;
		for (a5 = 0; a5 < 26; a5++) x6[a5 + 11] = 65 + a5, x6[a5 + 38] = 97 + a5
	}, this.ka = function(x7) {
		for (var x8 = gv, x9 = new Uint8Array(x7), a5 = 0; a5 < x7; a5++) x9[a5] = x8.gz(6);
		return x9
	}, this.kZ = function(x9) {
		for (var a3 = x9.length, xA = x6, a4 = [], a5 = 0; a5 < a3; a5++) a4.push(String.fromCharCode(xA[x9[a5]]));
		return a4.join("")
	}, this.d6 = function(value, xB) {
		for (var xA = x6, a4 = [], a5 = 0; a5 < xB; a5++) a4.push(String.fromCharCode(xA[value >> 6 * (xB - 1 - a5) & 63]));
		return a4.join("")
	}
}

function xC() {
	var xD, gJ = 8,
		xE = new Array(2);

	function xF(b4) {
		var cD = gJ + 4,
			m9 = ar.at.pj(cD, cD),
			gq = ar.at.getContext(m9, !0),
			vU = ar.at.getImageData(gq, cD, cD),
			fX = vU.data;
		return xG(fX, cD + 1, b4), xG(fX, cD + 2, b4), xG(fX, 2 * cD + 1, b4), xG(fX, 2 * cD - 3, b4), xG(fX, 2 * cD - 2, b4), xG(fX, 3 * cD - 2, b4), xG(fX, cD * (cD - 3) + 1, b4), xG(fX, cD * (cD - 2) + 1, b4), xG(fX, cD * (cD - 2) + 2, b4), xG(fX,
			cD * (cD - 2) - 2, b4), xG(fX, cD * (cD - 1) - 3, b4), xG(fX, cD * (cD - 1) - 2, b4), gq.putImageData(vU, 0, 0), m9
	}

	function xG(fX, js, b4) {
		js *= 4;
		fX[js] = 255, fX[1 + js] = 255, fX[2 + js] = b4, fX[3 + js] = 255
	}

	function pj(player) {
		var m9 = ar.at.pj(gJ, gJ);
		return function(gq, player) {
			var ag, aZ, la, js, xI, xJ, cD = gJ,
				vU = ar.at.getImageData(gq, cD, cD),
				fX = vU.data,
				ei = (cD >> 1) - .5,
				xL = hy.tr(player),
				xM = ar.t4.xN(xL, .5);
			ar.t4.xO(xL, xM, 300) || ar.t4.xP(xL, 100);
			for (aZ = 0; aZ < cD; aZ++)
				for (ag = 0; ag < cD; ag++) xJ = (cD - 1.5) * (cD - 1.5) / 4, xI = (la = (la = ag - ei) * la + (la = aZ - ei) * la) <= (cD - 4.5) * (cD - 4.5) / 4 ? xM : xL, fX[js = 4 * (aZ * cD + ag)] = xI[0], fX[1 + js] = xI[1], fX[2 + js] =
					xI[2], fX[3 + js] = xJ < la ? 0 : 255;
			gq.putImageData(vU, 0, 0)
		}(ar.at.getContext(m9, !0), player), m9
	}
	this.aJ = function() {
		xD = new Array(bq.g7), xE[0] = xF(255), xE[1] = xF(0)
	}, this.n = function() {
		var a5, player, xQ, xR, g5, oR, xU, xW, xX, sd = bo.h.sd,
			sZ = bo.h.sZ,
			sh = bo.h.sh,
			sk = bo.h.sk,
			xY = xD,
			xZ = bq.d3,
			xa = -1,
			a3 = bo.h.s0,
			tc = f.af,
			td = f.ae,
			tf = bh.ma << 4,
			j3 = bg,
			gr = j3 / gJ,
			gE = lg / j3,
			ex = lh / j3,
			la = (tc + lg) / j3 - gE,
			lb = (td + lh) / j3 - ex,
			gq = ah;
		for (bo.jc.sA(bq.d3, bo.qA.qB) && (xa = j9.qJ[3]), gq.imageSmoothingEnabled = j3 < 9, ar.at.textAlign(gq, 1), ar.at.textBaseline(gq, 1), a5 = 0; a5 < a3; a5++) player = sZ[a5] >> 3, g5 = sh[a5], xQ = .9 + .1 * Math.log10(g5), xR = (oR =
				sd[a5]) % tf / 16 - xQ, oR = td * (Math.floor(oR / tf) / 16 - xQ - ex) / lb, xU = -2 * (xX = j3 * xQ) * (1 + (xW = +(player === xZ)) / 8), xW = xW * xX / 4, (xX = tc * (xR - gE) / la) < xU || oR < xU || tc + xW < xX || td + xW <
			oR || (xR = 2 * xQ * gr, xU = xQ * j3, void 0 === (xW = xY[player]) && (xY[player] = xW = pj(player)), player === xZ && (gq.setTransform(xR, 0, 0, xR, xX - 2 * xR, oR - 2 * xR), gq.drawImage(xE[+(a5 === xa)], 0, 0)), gq.setTransform(
				xR, 0, 0, xR, xX, oR), gq.drawImage(xW, 0, 0), (xQ = Math.floor(function(g5) {
				if (g5 < 1e3) return .42;
				if (g5 < 1e4) return .34;
				if (g5 < 1e6) return .26;
				if (g5 < 1e8) return .19;
				return .15
			}(g5) * xU)) < 6) || (gq.setTransform(1, 0, 0, 1, 0, 0), gq.fillStyle = sk[a5] ? ao.u1 : ao.ap, gq.font = ar.at.au(1, xQ), gq.fillText(ar.d5.d6(g5), xX + xU, oR + xU + .1 * xQ));
		gq.imageSmoothingEnabled = !1, gq.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function xd() {
	this.xe = 0, this.xf = null, this.qi = null, this.nu = null, this.h = null, this.xg = null, this.qe = null, this.message = null, this.xh = null, this.gX = null, this.xi = new xj, this.xk = 0, this.eT = 0, this.aJ = function() {
		this.eT = k.e6, this.xe = h0.kY.xl(aP.aQ.data[105].value), this.qi = new xm, this.nu = new xn, this.h = new xo, this.xg = new xp, this.qe = new xq, this.message = new xr, this.xh = new xs, this.gX = new xt, this.h.aJ(), xu.aJ(), this.xk =
			1, bE.bF.setState(1), m.setState(0)
	}, this.xv = function() {
		this.gX && this.gX.xv(), this.xf = null, this.qi = null, this.nu = null, this.h = null, this.xg = null, this.qe = null, this.message = null, this.xh = null, this.gX = null, this.xk = 0, xu.xv(), bE.bF.setState(0)
	}
}

function nf() {
	this.tM = function(a2) {
		for (var a3 = a2.length, af = dU, a5 = 0; a5 < a3; a5++) af.dW(16, a2.charCodeAt(a5))
	}
}

function xw() {
	var xx = xy(bh.ig);
	xx && xz(xx[0], xx[1], xx[2], xx[3], xx[4])
}

function xy(ig) {
	return 2 === ig ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === ig ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === ig ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === ig ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === ig ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function xz(y0, y1, y2, y3, y4) {
	for (var ag, aZ, y6, y7, dN, y9, oR = y0.length - 1, y5 = bh.ma + bh.oi, a3 = (y5 *= y5, y2.length), y8 = Array(a3), a5 = a3 - 1; 0 <= a5; a5--) y8[a5] = y2[a5] * y2[a5];
	var yA = new Array(a3),
		yB = new Array(a3),
		yC = new Array(a3),
		y = yD.yE();
	if (void 0 === y4)
		for (y4 = new Array(a3), a5 = a3 - 1; 0 <= a5; a5--) y4[a5] = 0;
	for (a5 = 1; a5 < a3; a5++) yA[a5] = y8[a5] - y8[a5 - 1], yB[a5] = y3[a5] - y3[a5 - 1], yC[a5] = y4[a5] - y4[a5 - 1];
	for (ag = bh.ma - 1; 0 <= ag; ag--)
		for (aZ = bh.oi - 1; 0 <= aZ; aZ--) {
			for (y6 = y5, a5 = oR; 0 <= a5; a5--) y6 = (y7 = (ag - y0[a5]) * (ag - y0[a5]) + (aZ - y1[a5]) * (aZ - y1[a5])) < y6 ? y7 : y6;
			for (dN = y3[a3 - 1], y9 = y4[a3 - 1], a5 = 1; a5 < a3; a5++)
				if (y6 < y8[a5]) {
					dN = y3[a5 - 1] + yF((y6 - y8[a5 - 1]) * yB[a5], yA[a5]), y9 = y4[a5 - 1] + yF((y6 - y8[a5 - 1]) * yC[a5], yA[a5]);
					break
				} yG(bh.ma * aZ + ag, dN, y9, y)
		}
}

function yG(b4, dN, y9, y) {
	dN < 500 ? y[b4] = z.a0(y[b4] * dN * 2, 1e3) : 500 < dN && (y[b4] += z.a0(2 * (1e4 - y[b4]) * (dN - 500), 1e3)), y[b4] += z.a0(y9 * (10 * dN - y[b4]), 1e3)
}

function mn(title, yH, yI, yJ) {
	var aC, yK;
	this.show = function() {
		aC.show(), this.resize()
	}, this.aR = function() {
		aC.aR()
	}, this.resize = function() {
		aC.resize(), yK.resize()
	}, this.b6 = function(aV) {
		2 === aV && aC.b7[0].b8()
	}, yJ = yJ || [new aL("⬅️ " + L(1), function() {
		aM.rI()
	})], aC = new aK(title, yJ), yK = new yL(aC.cQ, yH), yI && ar.at.textAlign(aC.cQ.style, 1)
}

function wT() {
	var yM, yN;

	function yQ() {
		aM.mo();
		var a2 = iA.yW(yN.yX());
		(bq.dM && 0 < a2.length && a2 === iA.iQ.iR || iA.yZ.h1(a2)) && iA.yY()
	}
	this.show = function(yS) {
		this.yT(yS), yM.show(), this.resize()
	}, this.yT = function(yS) {
		0 === bq.dM ? yS ? yN.yU(yS) : iA.iQ.iR.length && yN.yU(iA.iQ.iR) : (bq.cq || (iA.iQ.iR = iA.iS.dq()), yN.yU(iA.yV(iA.iQ.iR)))
	}, this.aR = function() {
		yM.aR()
	}, this.resize = function() {
		yM.resize(), yN.resize()
	}, this.b6 = function(aV) {
		2 === aV ? yM.b7[0].b8() : yQ()
	}, yM = new aK(L(40), [new aL("⬅️ " + L(1), function() {
		aM.wo(1)
	}), new aL(L(41), function() {
		yN.yO()
	}), new aL(L(42), function() {
		yN.yP()
	}), new aL(L(43), function() {
		yN.clear()
	}), new aL(L(44), function() {
		yQ()
	})]), yN = new yR(L(45)), yM.cQ.appendChild(yN.cb)
}

function yL(e1, yH) {
	var dx = document.createElement("div");
	this.ya = dx, this.resize = function() {
		dx.style.padding = ar.at.cc(ab.yb), dx.style.lineHeight = ar.at.cc(ar.at.cX(.035))
	}, e1.style.overflowX = "hidden", e1.style.overflowY = "auto", dx.innerHTML = yH, e1.appendChild(dx)
}

function yc() {
	this.resize = function() {
		var a5, yd = document.head.querySelector("style#ss");
		if (yd)
			for (a5 = yd.sheet.cssRules.length - 1; 0 <= a5; a5--) yd.sheet.deleteRule(0);
		else(yd = document.createElement("style")).id = "ss", document.head.appendChild(yd);
		var nC = "::-webkit-scrollbar",
			ye = ar.at.cc(ab.yf),
			cD = ar.at.cc(Math.max(ar.at.cX(.012), 8));
		try {
			yd.sheet.insertRule(nC + "{width:" + cD + ";height:" + cD + ";}", yd.sheet.cssRules.length), yd.sheet.insertRule(nC + "-thumb{background-color:white;}", yd.sheet.cssRules.length), yd.sheet.insertRule(nC + "-track{background:" + ao
				.cR + ";}", yd.sheet.cssRules.length), yd.sheet.insertRule(nC + "-track:horizontal{border-top:" + ye + " solid white;}", yd.sheet.cssRules.length), yd.sheet.insertRule(nC + "-track:vertical{border-left:" + ye +
				" solid white;}", yd.sheet.cssRules.length), yd.sheet.insertRule(nC + "-button{display:none;}", yd.sheet.cssRules.length)
		} catch (cb) {
			for (console.log("error 3425: " + cb), a5 = yd.sheet.cssRules.length - 1; 0 <= a5; a5--) yd.sheet.deleteRule(0)
		}
	}
}

function yg() {
	var aV, ld = !1,
		yh = !1,
		yi = -1e4,
		yj = -1,
		yk = 0;

	function resize(ys) {
		aV = 0, gW.f7() && (yn(ys) || ld) && (ld = !1, ab.resize(), yt.yu.resize(), bW.aJ(), fU.aJ(), e.resize(), bT.resize(), d.resize(), aM.resize(), 1 <= bq.dM ? (bv.resize(!1), c0.resize(), by.resize(), bj.resize(), bw.resize(), bu.resize(), c2
			.resize(), bt.resize(), bx.resize(), c1.resize(), bz.resize(), c3.resize(), c5.resize(), bp.resize(), c4.resize(), bs.resize(), bj.pV()) : (m.yv(), m.yw()), k.l = !0)
	}

	function ym(y) {
		return y && 128 < y ? Math.floor(y) : 128
	}

	function yn(ys) {
		var af, ae, yy, cG, d0;
		if (!(0 < f.yl)) return cG = ym(document.documentElement.clientWidth), d0 = ym(window.visualViewport && 2 !== bE.id ? window.visualViewport.height : document.documentElement.clientHeight), af = cG, ae = d0, yy = 0 !== bE.id || af < ae ? 700 :
			1200, yy = Math.min(yy / ((af + ae) / 2), 1), yy = 0 === aP.aQ.data[1].value ? 2 * yy / 3 : Math.min(yy + (aP.aQ.data[1].value - 1) * (1 - yy) / 2, 1), f.aW = (window.devicePixelRatio || 1) * yy, __fx.hoveringTooltip
			.canvasPixelScale = f.aW, ys && !yh ? (yh = !0, document.body.removeChild(yo)) : yh && (yh = !1, document.body.appendChild(yo)), af = Math.floor(.5 + cG * f.aW), ae = Math.floor(.5 + d0 * f.aW), af !== f.af || ae !== f.ae ? (f.af =
				af, f.ae = ae, f.min = z1(af, ae), f.max = ee(af, ae), f.bH = z.a0(af + ae, 2), f.cZ = af / ae, yo.width = af, yo.height = ae, yo.style.width = cG + "px", yo.style.height = d0 + "px", yj = k.e6 + 1e3, 1) : void 0
	}
	this.af = 0, this.ae = 0, this.min = 0, this.max = 0, this.bH = 0, this.cZ = 1, this.aW = 1, this.yl = 0, this.fZ = function() {
		this.af = ym(document.documentElement.clientWidth) + 2, this.ae = ym(document.documentElement.clientHeight) + 2
	}, this.aJ = function() {
		aV = 1, yo = document.getElementById("canvasA"), (ah = yo.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, yn(0)
	}, this.c = function() {
		50 <= ++aV && resize(0), -1 === yj || k.e6 < yj || (yk++, yj = -1, k.e6 + 8e3 <= 2e3 * yk ? console.log("error 3748") : bE.bF.setState(15))
	}, this.yq = function(oC) {
		ld = !0, resize(oC)
	}, this.yr = function() {
		yi + 1e3 > k.e6 || (yi = k.e6, resize(0))
	}
}

function wj() {
	var yM, z2, z3, kI;

	function z4() {
		z6(), 2 !== bq.data.tIncomeType && (bq.data.tIncomeData = null), aM.wq()[19] = null, aM.rI()
	}

	function z6() {
		2 === bq.data.tIncomeType && ar.t4.z7(z3.yX(), bq.data.tIncomeData, 255)
	}
	this.show = function() {
		yM.show(), this.resize()
	}, this.aR = function() {
		yM.aR()
	}, this.resize = function() {
		yM.resize(), z2.resize()
	}, this.b6 = function(aV) {
		2 === aV && yM.b7[0].b8()
	}, yM = new aK(L(46), [new aL("⬅️ " + L(1), z4)]), z2 = new rJ(yM.cQ, (function(kI) {
		var rM = new rN;
		rM.rO(L(47)), rM.zB(new zC({
			xx: [L(48), L(49), L(50)],
			value: bq.data.tIncomeType
		}, function(b4) {
			z6(), 2 !== b4 || bq.data.tIncomeData || (bq.data.tIncomeData = new Uint8Array(bq.g7), bq.data.tIncomeData.fill(32)), bq.data.tIncomeType = b4, aM.iZ(26)
		})), kI.push(rM)
	}(kI = []), function(kI) {
		var rM;
		1 === bq.data.tIncomeType && ((rM = new rN).rO("Value"), rM.rR(new rQ({
			b4: -1,
			value: bq.data.tIncomeValue
		}, 1, 0, function(cb) {
			var value = z.ax(Math.floor(cb.target.value), 0, 255);
			cb.target.value = bq.data.tIncomeValue = value
		})), kI.push(rM))
	}(kI), function(kI) {
		var rM;
		2 === bq.data.tIncomeType && ((rM = new rN).rO("Data"), (z3 = new yR(0, 1, 0, 1)).yU(ar.d5.zD(bq.data.tIncomeData, 4)), rM.rR(z3), kI.push(rM))
	}(kI), kI))
}

function zE() {
	this.zF = null, this.s1 = 512, this.s3 = 8, this.s0 = 0, this.zG = 0, this.sZ = new Uint16Array(this.s1), this.se = new Uint32Array(this.s1), this.sf = new Uint32Array(this.s1), this.sd = new Uint32Array(this.s1), this.sg = new Uint16Array(this
			.s1), this.sh = new Uint32Array(this.s1), this.sb = new Uint16Array(this.s1), this.si = new Uint16Array(this.s1), this.sj = new Uint8Array(this.s1), this.sk = new Uint8Array(this.s1), this.s2 = new Uint8Array(bq.g7), this.sS =
		new Uint16Array(this.s3 * bq.g7), this.aJ = function() {
			this.zG = 0, this.s0 = 0, this.zF = new Uint8Array(bh.ma + bh.oi), this.s2.fill(0)
		}, this.s9 = function(player) {
			var a3 = this.s0,
				zH = i2.op(j9.qJ[0]),
				zI = this.s2[player],
				zJ = (player << 3) + zI,
				g5 = (this.sZ[a3] = zJ, this.se[a3] = zH, this.sd[a3] = zH, this.sf[a3] = i2.op(j9.qJ[1]), this.sg[a3] = 0, j9.sE[0]);
			g5 < 60 ? (ar.d1.w9(player, 60 - g5), this.sh[a3] = 60) : this.sh[a3] = g5, this.sb[a3] = bo.os.s9(a3, i2.or(zH)), this.si[a3] = this.zG, this.sj[a3] = j9.qJ[2], this.sk[a3] = 0, this.zG = this.zG + 1 & 1023, this.sS[zJ] = a3, this.s2[
				player] = zI + 1, this.s0++, bo.zK.zL(player, j9.qJ[1], j9.qJ[2], this.si[a3])
		}, this.q9 = function() {
			var zM = j9.qJ[3];
			this.se[zM] = this.sd[zM], this.sf[zM] = i2.op(j9.qJ[1]), this.sg[zM] = 0, this.sj[zM] = j9.qJ[2], bo.zK.zL(this.sZ[zM] >> 3, j9.qJ[1], j9.qJ[2], this.si[zM])
		}, this.c = function() {
			bo.zK.c();
			var a5, cE = bq.d3,
				dO = bo.jc.zN(cE),
				dH = (! function(dH) {
					var a5, zT, zU, zV, zW, zH, za, zb, iy, j7, se = dH.se,
						sf = dH.sf,
						sd = dH.sd,
						sh = dH.sh,
						sk = dH.sk,
						sg = dH.sg,
						sb = dH.sb,
						dH = dH.s0,
						tf = bh.ma << 4;
					for (a5 = dH - 1; 0 <= a5; a5--) zU = sd[a5], zT = sf[a5], zU !== zT && (zH = se[a5], za = zT % tf - (zW = zH % tf), zb = ~~((zT + .5) / tf) - (zH = ~~((zH + .5) / tf)), iy = ~~Math.sqrt(za * za + zb * zb + .5), j7 = 2e5 +
						Math.min(20 * sh[a5], 4e5), sk[a5] && (j7 = z.a0(j7, 5)), 65535 <= (j7 = sg[a5] + Math.max(~~((j7 + .5) / iy), 1)) ? sd[a5] = zV = zT : (sg[a5] = j7, sd[a5] = zV = zW + z.a0(j7 * za, 65536) + tf * (zH + z.a0(j7 * zb,
							65536))), sb[a5] = bo.os.zd(sb[a5], zU, zV))
				}(this), ! function(dH) {
					if (k.mF() % 2 == 1) {
						var a5, eE, ei, an, aV, ze, gh, zf, ke, gE, ex, zH, zh, o5, zj, zg, a3 = dH.s0,
							sd = dH.sd,
							sZ = dH.sZ,
							sh = dH.sh,
							sk = dH.sk,
							os = bo.os.os,
							zl = os.length,
							zm = bo.os.zm,
							tf = bh.ma << 4,
							zn = bq.hU,
							zo = hv.va,
							j7 = (a3 - 1) * (z.a0(k.mF(), 2) % 2);
						for (a5 = 0; a5 < a3; a5++)
							for (eE = Math.abs(a5 - j7), zH = sd[eE], ei = i2.or(zH), ke = sZ[eE] >> 3, gE = zH % tf, ex = ~~((zH + .5) / tf), zj = sh[eE], an = 0; an < 9; an++)
								if (!((ze = ei + zm[an]) < 0 || zl <= ze))
									for (zf = os[ze], gh = zf.length, aV = 0; aV < gh; aV++) zh = zf[aV], zg = sZ[zh] >> 3, ke == zg || zn && zo[ke] === zo[zg] && zo[ke] || (zg = sd[zh], (o5 = gE - zg % tf) * o5 + (o5 = ex - ~~((zg + .5) / tf)) *
										o5 < 14400 && (zg = sh[zh], o5 = zg <= zj ? Math.max(1, z.a0(zg + z.a0(zj - zg, 10), 10)) : Math.max(1, z.a0(zj, 10)), sh[zh] = Math.max(zg - o5, 0), sk[zh] = 4))
					}
				}(this), ! function(dH) {
					if (k.mF() % 5 == 3) {
						var a5, g5, sh = dH.sh,
							a3 = dH.s0;
						for (a5 = 0; a5 < a3; a5++) g5 = sh[a5], sh[a5] = Math.max(g5 - Math.max(1, g5 >> 7), 0)
					}
				}(this), this),
				sh = dH.sh,
				sk = dH.sk;
			for (a5 = dH.s0 - 1; 0 <= a5; a5--) sk[a5] = sk[a5] >> 1, 0 === sh[a5] && bo.zS.sV(a5);
			hw.sD(cE, dO - bo.jc.zN(cE), 15)
		}
}

function zq() {
	var zr = 0;

	function a00(a2, id) {
		zr || (id ? 1 === id ? bu.zw = L(52) + ": " + a2 : aM.iZ(4, 3, new mn(L(53), a2, 1)) : aM.iZ(4, 3, new mn("⚠️ " + L(51), a2, 1)))
	}
	this.h1 = function(a2, zs) {
		var qm;
		return zr = zs, h0.kY.zt(h0.kY.zu(h0.kY.zv(a2))), bu.zw = "", !(! function() {
			if (gv.size < 10) a00("File Too Small");
			else {
				var a04 = gv.gz(12),
					a05 = (a04 !== dX.rVersion && a00("Incompatible Version   Required: " + dX.rVersion + ("   Found: " + a04) + ("   Compatible at territorial.io/" + a04), 1), gv.gz(12)),
					a06 = gv.gz(31);
				if (a06 !== gv.size) a00("Size Error: " + a06 + " " + gv.size);
				else if (function(ae, a04) {
						for (var cE = gv.di, a3 = gv.size, a05 = a04, a5 = 3; a5 < a3; a5++) a05 = a05 + cE[a5] & 4095;
						return a05 === ae || (a00("Hash Error: " + a05 + " " + ae + " " + a3), !1)
					}(a05, a04)) return 1
			}
			return
		}() || (zs = gv, (qm = bq.data = new hg).mapType = zs.gz(2), qm.mapProceduralIndex = zs.gz(8), qm.mapRealisticIndex = zs.gz(8), qm.mapSeed = zs.gz(14), qm.mapName = zs.a08(5), 2 === qm.mapType && zs.a09(), qm.passableWater = zs
			.gz(1), qm.passableMountains = zs.gz(1), qm.playerCount = zs.gz(10), qm.humanCount = zs.gz(10), qm.selectedPlayer = zs.gz(9), qm.gameMode = zs.gz(1), qm.playerMode = zs.gz(2), qm.battleRoyaleMode = zs.gz(2), qm.numberTeams =
			zs.gz(4), qm.isZombieMode = zs.gz(1), qm.isContest = zs.gz(1), qm.isReplay = zs.gz(1), qm.elo = zs.a0A(2, 14, 2), qm.colorsType = zs.gz(1), qm.colorsPersonalized = zs.gz(1), qm.colorsData = zs.a0A(10, 18, 512), qm
			.selectableColor = zs.gz(1), qm.teamPlayerCount = zs.a0A(4, 10, 9), qm.neutralBots = zs.gz(1), qm.botDifficultyType = zs.gz(2), qm.botDifficultyValue = zs.gz(4), qm.botDifficultyTeam = zs.a0A(4, 4, 9), qm.botDifficultyData =
			zs.a0A(10, 4, 512), qm.spawningType = zs.gz(2), qm.spawningSeed = zs.gz(14), qm.spawningData = zs.a0A(11, 12, 1024), qm.selectableSpawn = zs.gz(1), qm.playerNamesType = zs.gz(2), qm.playerNamesData = zs.a0B(10, 5, 512), qm
			.selectableName = zs.gz(1), qm.aIncomeType = zs.gz(2), qm.aIncomeValue = zs.gz(8), qm.aIncomeData = zs.a0A(10, 8, 512), qm.tIncomeType = zs.gz(2), qm.tIncomeValue = zs.gz(8), qm.tIncomeData = zs.a0A(10, 8, 512), qm
			.iIncomeType = zs.gz(2), qm.iIncomeValue = zs.gz(8), qm.iIncomeData = zs.a0A(10, 8, 512), qm.sResourcesType = zs.gz(2), qm.sResourcesValue = zs.gz(11), qm.sResourcesData = zs.a0A(10, 11, 512), ! function() {
				var oR = gv,
					lP = oR.gz(5),
					a0C = oR.gz(30),
					a0D = oR.gz(30);
				if (a0C + a0D > 8 * oR.size) return void a00("Corrupted File");
				return function(a3) {
						var a0G = new Uint8Array(a3),
							a0H = new Uint16Array(a3),
							a0I = new Uint32Array(a3),
							a0J = new Uint32Array(a3);
						iA.iQ.a0K = a0G, iA.iQ.a0L = a0H, iA.iQ.a0M = a0I, iA.iQ.a0N = a0J;
						for (var a5 = 0; a5 < a3; a5++) {
							var id = gv.gz(4);
							a0G[a5] = id, a0H[a5] = gv.gz(9), 0 === id ? a0I[a5] = gv.gz(22) : 1 === id ? (a0I[a5] = gv.gz(10), a0J[a5] = gv.gz(10)) : 2 === id ? (a0I[a5] = gv.gz(10), a0J[a5] = gv.gz(9)) : 3 === id || 4 === id ? (a0I[
								a5] = gv.gz(10), a0J[a5] = gv.gz(22)) : 5 === id || 6 === id ? a0I[a5] = gv.gz(10) : 7 === id ? a0I[a5] = gv.gz(1) : 10 === id && (a0I[a5] = gv.gz(20), a0J[a5] = gv.gz(22))
						}
					}(a0C),
					function(a3, lP) {
						var a0O = new Uint8Array(a3),
							a0P = new Array(a3);
						a0P.fill(0), iA.iQ.a0O = a0O, iA.iQ.a0P = a0P;
						for (var a5 = 0; a5 < a3; a5++) a0O[a5] = gv.gz(1), a0P[a5] = gv.gz(lP)
					}(a0D, lP), 1
			}()) || (gv.b4 < 8 * gv.size - 13 || gv.b4 > 8 * gv.size ? (a00("Out Of Bounds Error: " + gv.b4 + " " + 8 * gv.size), 1) : (iA.iQ.iR = a2, 2 === bq.data.mapType && (a00("Load base64 image...", 2), 1))))
	}, this.a01 = function(a02, a03) {
		var m9 = document.createElement("canvas"),
			gq = m9.getContext("2d");
		if (m9.width = a02.width, m9.height = a02.height, gq.drawImage(a02, 0, 0), zr || a03) return bq.dM ? void 0 : (bq.data.canvas = m9, bq.data.mapType = 2, aM.mo(), void aM.iZ(19));
		iA.yY()
	}
}

function a0Q() {
	this.c = function(di) {
		var id, wB, mU;
		for (gv.aJ(di), gv.b4 += 2, mU = 8 * gv.size; gv.b4 + 8 <= mU;) id = gv.gz(4), wB = gv.gz(9), 0 === id ? this.a0R(id, wB, gv.gz(22)) : 1 === id ? this.a0R(id, wB, gv.gz(10), gv.gz(10)) : 2 === id ? this.a0R(id, wB, gv.gz(10), gv.gz(9)) :
			3 === id || 4 === id ? this.a0R(id, wB, gv.gz(10), gv.gz(22)) : 5 === id || 6 === id ? this.a0R(id, wB, gv.gz(10)) : 7 === id ? this.a0R(id, wB, gv.gz(1)) : 10 === id ? this.a0R(id, wB, gv.gz(20), gv.gz(22)) : this.a0R(id, wB)
	}, this.hu = [], this.a0S = function() {
		for (var a0U = 0, a0V = 0, a0W = 0, a0X = 0, a0Y = 0, a0Z = 0, a5 = 0; a5 < 512; a5++) a0U += fz.iN[a5], a0V += fz.lJ[a5], a0W += fz.lQ[a5], a0X += bo.h.s2[a5];
		a0Y += bo.h.s0, a0Z += i8.j6, this.hu.push(a0W % 1073741824 * 4 + (a0U + a0V + a0X + a0Y + a0Z) % 4)
	}, this.a0R = function(id, wB, wC, nh) {
		0 === id ? gl.a0a.pv(wB, wC) : 1 === id ? gl.a0a.py(wB, wC, nh) : 2 === id ? gl.a0a.rx(wB, wC, nh) : 3 === id ? gl.a0a.q0(wB, wC, nh) : 4 === id ? gl.a0a.q9(wB, wC, nh) : 5 === id ? gl.a0a.sF(wB, wC) : 6 === id ? gl.a0a.sH(wB, wC) : 7 ===
			id ? gl.a0a.rB(wB, wC) : 8 === id ? gl.a0a.sJ(wB) : 9 === id ? gl.a0a.sM(wB) : 10 === id && gl.a0a.q2(wB, wC >> 10, nh, wC % 1024)
	}
}

function zC(a0b, a0c) {
	this.a0d = [];
	var a0e = this.a0d;

	function click() {
		for (var a5 = 0; a5 < a0e.length; a5++) a0e[a5].textContent = a0e[a5].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var b4 = parseInt(this.name);
		void 0 !== a0b.b4 && aP.aS.aT(a0b.b4, b4), a0c && a0c(b4)
	}
	for (var a0f, a3 = a0b.xx.length, a5 = 0; a5 < a3; a5++)(a0f = document.createElement("p")).textContent = "⚪ " + a0b.xx[a5], a0f.style.margin = "0", a0f.name = "" + a5, a0f.style.cursor = "pointer", a0f.style.fontSize = "1em", a0f
		.addEventListener("click", click), a0e.push(a0f);
	a0e[a0b.value].textContent = a0e[a0b.value].textContent.replace("⚪", "🟢")
}

function a0g() {
	var a0h;
	this.vY = null, this.a0i = 0, this.aJ = function() {
		a0h = [], 9 === bq.fs && this.a0j()
	}, this.a0j = function() {
		var a0k = [60, 80, 105, 150, 190, 333];
		this.vY = [0, 0, 0, 0, 0, 0], this.a0i = 0, bq.fx < 9 ? (this.a0i = 256 - z.a0(275 * bq.fx, 100), this.vY[0] = bq.g7 - bq.fx - this.a0i) : bq.fx < 13 ? (this.a0i = 234 - 7 * (bq.fx - 8), this.vY[0] = bq.g7 - bq.fx - this.a0i) : bq.fx <=
			a0k[0] ? (this.a0i = 256 - z.a0(256 * bq.fx, a0k[0]), bq.fx <= 23 ? this.vY[5] = z.a0(Math.max(bq.fx - 7, 0), 6) : this.vY[5] = 3 + z.a0(37 * (bq.fx - 23), 100), this.vY[0] = bq.g7 - bq.fx - this.a0i - this.vY[5]) : (this.vY[5] = Math
				.min(16 + z.a0(61 * (bq.fx - 60), 100), 179), this.vY[0] = 512 - bq.fx - this.vY[5]), bq.hM = bq.g7 - bq.fx, bq.data.numberTeams = (0 < bq.fx) + (0 < bq.hM), bq.data.playerCount = bq.hO = bq.fx + bq.hM, bq.data.teamPlayerCount =
			new Uint16Array([0, 0, 0, 0, 0, 0, 0, bq.fx + this.a0i, bq.hM - this.a0i]), bq.hh.hn()
	}, this.a0l = function(player) {
		a0h.push({
			player: player,
			gi: 14 + g1.g2(20)
		})
	}, this.c = function() {
		if (9 === bq.fs)
			for (var a5 = a0h.length - 1; 0 <= a5; a5--) --a0h[a5].gi <= 0 && (bp.lW(a0h[a5].player, 0, fW.gX.r + fW.gX.t), a0h.splice(a5))
	}
}

function a0n() {
	this.a0o = function(player, jw, g5) {
		ar.d1.rz(player, g5, jw) && (hr.pu(player, jw), jw < bq.fx) && g1.random() < g1.value(10) && (i3.a0p.a0q[jw] = 0)
	}, this.a0r = function(player, jw, g5) {
		ar.d1.w6(g5, jw) ? (ar.d1.vy(jw, j9.sE[0]), hw.a0s(player, jw), bp.lK(jw, j9.sE[0])) : hw.sD(player, g5, 12)
	}
}

function a0t() {
	var pD, a0u, a0v, pC, a0w, a0x, a0y, a0z, a10, a11, a12, a13, a14, a15 = !1,
		a16 = !1;

	function a17(a18) {
		a13 = k.e6, a0v = pC = a0u = 0, a0w = (a14 = 33) / a18, pD = 1 / (a18 / a14 / 4), a0x = (f.af / 2 + lg) / bg, a0y = (f.ae / 2 + lh) / bg, a0z = bg
	}

	function a1D(a5) {
		var gE; - 1 !== a5 && (a5 = i2.oq(bo.h.sd[a5]), gE = i2.o6(a5) - 10, a5 = i2.o8(a5) - 10, iL.a1A(gE, a5, 19 + gE, 19 + a5))
	}

	function a1L(a1M) {
		Math.abs(Math.log(a12 / a0z)) < .125 && (a12 = a1M * a0z)
	}

	function a1K(gE, ex, li, lj) {
		a10 = (gE + li + 1) / 2, a11 = (ex + lj + 1) / 2;
		li = f.af / (li - gE + 1), gE = f.ae / (lj - ex + 1);
		a12 = .9 * (li < gE ? li : gE)
	}
	this.a19 = function() {
		return a15
	}, this.iM = function() {
		a17(1), this.a1A(0, 0, bh.ma - 1, bh.oi - 1), bq.cp || bq.cq || this.a1B(bq.d3, 3e3, !0, .3)
	}, this.a1C = function(player, jz) {
		a1D(bo.jc.a1E(player, jz))
	}, this.a1B = function(player, a18, a1F, zoom) {
		bq.br || a15 && !a1F && a16 || (0 === fz.lJ[player] ? a1D(bo.jc.a1G(player)) : (bj.dF = !1, a16 = a1F, a17(a18), function(player) {
			a10 = (fz.lR[player] + fz.lU[player] + 1) / 2, a11 = (fz.lS[player] + fz.lV[player] + 1) / 2
		}(player), function(zoom, player) {
			var la = fz.lU[player] - fz.lR[player] + 1,
				player = fz.lV[player] - fz.lS[player] + 1,
				fp = f.af / la,
				an = f.ae / player,
				fp = (a12 = fp < an ? fp : an, 0 !== zoom ? zoom : la < 20 && player < 20 ? .5 : .9);
			a12 *= fp, a1L(7 / 8)
		}(zoom, player), a15 = !0, pU.pT()))
	}, this.a1J = function(a18) {
		bq.cq || bq.br || (bj.dF = !1, a16 = !1, a17(a18), a1K(0, 0, bh.ma - 1, bh.oi - 1), a1L(7 / 8), a15 = !0, pU.pT())
	}, this.a1A = function(gE, ex, li, lj) {
		a1K(gE, ex, li, lj), bg = a12, bj.a1N(a10, f.af / 2), bj.a1O(a11, f.ae / 2), a1P.vj(), k.l = !0
	}, this.mU = function() {
		return !(a15 && a16 || (a15 = !1))
	}, this.c = function() {
		var a1R, a1S, iy, a1V;
		a15 && (a0u < .5 ? pC < a0w && (pC += a0w * pD, a0v = a0u) : 1 - a0v < a0u && (pC = (pC -= a0w * pD) < a0w * pD ? a0w * pD : pC), a13 = a13 >= k.e6 ? k.e6 - 1 : a13, a0u = 1e3 < (iy = k.e6 - a13) || 1 < (a0u += pC * iy / a14) ? 1 : a0u,
			a13 = k.e6, iy = bg, a1R = lg, a1S = lh, iy = (bg = a0z * Math.pow(a12 / a0z, a0u)) / iy, a1V = 1 - (a0z * Math.pow(a12 / a0z, 1 - a0u) - a0z) / (a12 - a0z), bj.a1N(a0x + a1V * (a10 - a0x), f.af / 2), bj.a1O(a0y + a1V * (a11 -
				a0y), f.ae / 2), bp.zoom(iy, (a1R * iy - lg) / (1 - iy), (a1S * iy - lh) / (1 - iy)), a1P.vj(), 1 <= a0u && (a15 = !1, i1.a1W = !0), k.l = !0)
	}
}

function a1X() {
	this.q0 = function(player) {
		ar.d1.vm(player) && bu.x1(80, L(54), 637, 0, ao.a1Y, ao.c9, -1, !1)
	}, this.qD = function() {
		bu.x1(80, L(55), 637, 0, ao.a1Y, ao.c9, -1, !1)
	}, this.q9 = function(player) {
		ar.d1.vm(player) && bu.x1(80, L(56), 637, 0, ao.a1Y, ao.c9, -1, !1)
	}
}

function a1Z() {
	var a1a, a1b, a1c;
	a1a = [32, 65, 191, 913, 931], a1b = [64, 127, 688, 930, 1155], a1c = new Array(a1a.length + 1);
	for (var a5 = 0; a5 < a1c.length; a5++) {
		a1c[a5] = 0;
		for (var fp = a5 - 1; 0 <= fp; fp--) a1c[a5] += a1b[fp] - a1a[fp]
	}

	function a1j(aV) {
		for (var a5 = a1a.length - 1; 0 <= a5; a5--)
			if (aV >= a1a[a5] && aV < a1b[a5]) return a5;
		return -1
	}
	this.a1e = function(a2) {
		return 0 !== (a2 = a2.trim()).indexOf("Bot ") && 0 !== a2.indexOf("[Bot] ") && function(a2, a1g, a1h) {
			var a3 = (a2 = a2.trim()).length;
			if (a3 < a1g || a1h < a3) return !1;
			for (var aV, a1i = 0, a5 = 0; a5 < a3; a5++)
				if (aV = a2.charCodeAt(a5), a1i += 65 <= aV && aV <= 90 || 1040 <= aV && aV <= 1071 ? 1 : 0, -1 === a1j(aV)) return !1;
			if (3 < a1i && a1i > Math.floor(a3 / 2)) return !1;
			return !0
		}(a2, 3, 20)
	}, this.dq = function(a2) {
		for (var a3 = (a2 = a2.trim()).length, a4 = [], a5 = 0; a5 < a3; a5++) {
			var aV, cE = a1j(aV = a2.charCodeAt(a5));
			a4.push(a1c[cE] + aV - a1a[cE])
		}
		return a4
	}, this.h1 = function(a4) {
		for (var aV, an, a2 = "", a3 = a4.length, a5 = 0; a5 < a3; a5++)
			for (an = 1; an < a1c.length; an++)
				if (a4[a5] < a1c[an]) {
					aV = a1a[an - 1] + a4[a5] - a1c[an - 1], a2 += String.fromCharCode(aV);
					break
				} return a2
	}, this.a1k = function(a2) {
		for (var a4 = this.dq(a2), result = "", a5 = 0; a5 < a4.length; a5++) result = (result += a4[a5] < 10 ? "00" : a4[a5] < 100 ? "0" : "") + a4[a5].toString(10);
		return result
	}, this.a1l = function(a2) {
		for (var a4 = new Array(Math.floor(a2.length / 3)), a5 = 0; a5 < a2.length; a5 += 3) a4[Math.floor(a5 / 3)] = parseInt(a2.substring(a5, a5 + 3));
		return this.h1(a4)
	}, this.a1m = function(a2) {
		for (var y, a4 = [a2.length], a5 = 0; a5 < a2.length; a5++) a4[a5] = a2.charCodeAt(a5) - 48;
		var result = "";
		for (a5 = 0; a5 < a2.length; a5++) a5 === a2.length - 1 || 51 < 10 * a4[a5] + a4[a5 + 1] ? result += a4[a5].toString() : (y = 10 * a4[a5] + a4[a5 + 1], result += String.fromCharCode(y + (y < 26 ? 65 : 71)), a5++);
		return result
	}, this.a1n = function(a2) {
		for (var aV, result = "", a5 = 0; a5 < a2.length; a5++) 48 <= (aV = a2.charCodeAt(a5)) && aV < 58 ? result += String.fromCharCode(aV) : 65 <= aV && aV < 75 ? result += "0" + (aV - 65).toString() : 75 <= aV && aV < 91 ? result += (aV - 65)
			.toString() : 97 <= aV && aV < 123 && (result += (aV - 71).toString());
		return result
	}, this.a1o = function(a2) {
		for (var a3 = a2.length, a4 = [], a5 = 0; a5 < a3; a5++)(aV = a2.charCodeAt(a5)) < 58 ? a4.push(a2[a5]) : (aV -= aV < 91 ? 65 : 71, a4.push(String(z.a0(aV, 10))), a4.push(String(aV - 10 * z.a0(aV, 10))));
		var a3 = a4.length - 2,
			aV = 0,
			x9 = [];
		for (a5 = 0; a5 < a3; a5 += 3) x9[aV++] = parseInt(a4[a5] + a4[a5 + 1] + a4[a5 + 2]);
		return x9
	}, this.a1p = function() {
		for (var al, a1q = "", a5 = 0; a5 < 6; a5++) al = 48 + g1.random() % 36, al += 58 <= al ? 39 : 0, a1q += String.fromCharCode(al);
		return a1q
	}
}

function a1r() {
	var a1s, a1t, size, ju, g5, id, a1u;

	function a1v(player) {
		return player < bq.fx ? a1s * player : a1s * bq.fx + a1t * (player - bq.fx)
	}
	this.aJ = function() {
		a1s = bq.fx < 16 ? 12 : 8, a1t = 4;
		var a3 = a1v(bq.g7);
		size = new Uint8Array(bq.g7), ju = new Uint16Array(a3), g5 = new Uint32Array(a3), id = new Uint16Array(a3), a1u = new Uint8Array(a3)
	}, this.sG = function(a1w, a1x) {
		var a1y = this.a1z(a1w, a1x),
			a1x = (this.a20(a1w, a1x, 0), ar.d1.vy(a1w, a1y));
		hw.sD(a1w, a1y - a1x, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.a22 = function(player, a1x) {
		var a24, a1x = function(player, a1x) {
			var a5, ei = a1v(player);
			for (a5 = size[player] - 1; 0 <= a5; a5--)
				if (0 === id[ei + a5] && ju[ei + a5] === a1x) return a5;
			return size[player]
		}(player, a1x);
		a1x !== size[player] && (a24 = g5[a1v(player) + a1x], this.a25(player, a1x), this.jG(player, a24, bq.g7))
	}, this.ro = function(player, a1x) {
		for (var ei = a1v(player), a5 = size[player] - 1; 0 <= a5; a5--)
			if (0 === id[ei + a5] && ju[ei + a5] === a1x) return !0;
		return !1
	}, this.rq = function(player) {
		return player < bq.fx ? size[player] < a1s : size[player] < a1t
	}, this.r3 = function(player) {
		return size[player]
	}, this.r8 = function(player, a5) {
		return ju[a1v(player) + a5]
	}, this.uH = function(player, a5) {
		return id[a1v(player) + a5]
	}, this.a26 = function(player, a27) {
		for (var ei = a1v(player), a5 = size[player] - 1; 0 <= a5; a5--)
			if (id[ei + a5] === a27) return a5;
		return -1
	}, this.r6 = function(player, a5) {
		return g5[a1v(player) + a5]
	}, this.a1z = function(player, a1x) {
		for (var ei = a1v(player), a5 = size[player] - 1; 0 <= a5; a5--)
			if (0 === id[ei + a5] && ju[ei + a5] === a1x) return g5[ei + a5];
		return 0
	}, this.zN = function(player) {
		for (var ei = a1v(player), y = 0, a5 = size[player] - 1; 0 <= a5; a5--) y += g5[ei + a5];
		return y
	}, this.a28 = function(player) {
		for (var ei = a1v(player), y = 0, a5 = size[player] - 1; 0 <= a5; a5--) 0 === id[ei + a5] && (y += g5[ei + a5]);
		return y
	}, this.a29 = function(player) {
		for (var ei = a1v(player), gi = 0, a5 = size[player] - 1; 0 <= a5; a5--) 0 < id[ei + a5] && gi++;
		return gi
	}, this.a20 = function(player, a1x, a24) {
		for (var ei = a1v(player), a5 = size[player] - 1; 0 <= a5; a5--) 0 === id[ei + a5] && ju[ei + a5] === a1x && (g5[ei + a5] = a24)
	}, this.a2A = function(player, a5, a24) {
		g5[a1v(player) + a5] = Math.max(a24, 0)
	}, this.a2B = function(player, a5) {
		a1u[a1v(player) + a5] = 0
	}, this.a2C = function(player, a5) {
		return a1u[a1v(player) + a5]
	}, this.jG = function(player, a24, a1x) {
		ar.d1.vt(a1x) && hw.a2D[6 - ar.d1.lp(player)]++;
		for (var ei = a1v(player), a5 = size[player] - 1; 0 <= a5; a5--)
			if (0 === id[ei + a5] && ju[ei + a5] === a1x) return g5[ei + a5] += a24, void(g5[ei + a5] = g5[ei + a5] > bq.hG ? bq.hG : g5[ei + a5]);
		ju[ei + size[player]] = a1x, g5[ei + size[player]] = a24, id[ei + size[player]] = 0, a1u[ei + size[player]] = 1, size[player]++, player < bq.fx && (a1x === bq.d3 ? bu.a2E(player, 5) : player === bq.d3 && bp.mJ(a1x))
	}, this.a2F = function(player, a24, a27) {
		var ei = a1v(player);
		ju[ei + size[player]] = 0, g5[ei + size[player]] = a24, id[ei + size[player]] = a27, a1u[ei + size[player]] = 0, size[player]++
	}, this.a25 = function(player, b4) {
		var fp, ei;
		if (0 !== size[player])
			for (ei = a1v(player), size[player]--, fp = b4; fp < size[player]; fp++) ju[ei + fp] = ju[ei + fp + 1], g5[ei + fp] = g5[ei + fp + 1], id[ei + fp] = id[ei + fp + 1], a1u[ei + fp] = a1u[ei + fp + 1]
	}, this.a2G = function(player) {
		for (var fp, ei, a2H = [], a5 = i8.j6 - 1; 0 <= a5; a5--)
			for (ei = a1v(i8.j5[a5]), fp = size[i8.j5[a5]] - 1; 0 <= fp; fp--)
				if (0 === id[ei + fp] && ju[ei + fp] === player) {
					a2H.push(i8.j5[a5]);
					break
				} return a2H
	}
}

function a2I() {
	var a2J, a4;
	this.aJ = function() {
		for (var a5 = (a4 = new Uint16Array(101)).length - 1; 0 <= a5; a5--) a4[a5] = z.a0(32768 * a5, 100);
		this.hq(0)
	}, this.value = function(cE) {
		return a4[cE]
	}, this.a2K = function() {
		return z.a0(a2J - 1, 2)
	}, this.hq = function(pE) {
		a2J = 2 * pE % 32768 + 1
	}, this.random = function() {
		return a2J = 167 * a2J % 32768
	}, this.g2 = function(a2L) {
		return z.a0(a2L * this.random(), 32768)
	}, this.a2M = function(cE) {
		return 0 !== cE && this.random() < this.value(cE)
	}, this.oy = function(fp, an) {
		return fp + this.g2(an - fp)
	}
}

function wh() {
	var yM, z2, z3, kI;

	function z4() {
		z6(), 2 !== bq.data.spawningType || ar.t4.tt(bq.data.spawningData) || (bq.data.spawningType = 0), 2 !== bq.data.spawningType && (bq.data.spawningData = null), aM.wq()[19] = null, aM.rI()
	}

	function z6() {
		2 === bq.data.spawningType && ar.t4.z7(z3.yX(), bq.data.spawningData, bh.a2N - 1)
	}
	this.show = function() {
		yM.show(), this.resize()
	}, this.aR = function() {
		yM.aR()
	}, this.resize = function() {
		yM.resize(), z2.resize()
	}, this.b6 = function(aV) {
		2 === aV && yM.b7[0].b8()
	}, yM = new aK(L(57), [new aL("⬅️ " + L(1), z4)]), z2 = new rJ(yM.cQ, (function(kI) {
		var rM = new rN,
			xx = (rM.rO(L(47)), [L(58), L(59), L(50)]),
			value = bq.data.spawningType;
		0 === bq.data.gameMode && (xx.splice(1, 1), 0 < value) && (value = 1);
		rM.zB(new zC({
			xx: xx,
			value: value
		}, function(b4) {
			z6(), bq.data.spawningType = b4, 0 === bq.data.gameMode && 1 === b4 && (bq.data.spawningType = 2), 2 !== bq.data.spawningType || bq.data.spawningData || (bq.data.spawningData = new Uint16Array(2 * bq.g7)), aM.iZ(
				24)
		})), rM.rR(new a2O), rM.rR(new a2P({
			value: bq.data.selectableSpawn
		}, L(60), function(value) {
			bq.data.selectableSpawn = value
		})), kI.push(rM)
	}(kI = []), function(kI) {
		var rM = new rN;
		rM.rO("Seed"), rM.rR(new rQ({
			b4: -1,
			value: bq.data.spawningSeed
		}, 1, 0, function(cb) {
			var value = Math.abs(Math.floor(cb.target.value)) % 16384;
			cb.target.value = bq.data.spawningSeed = value
		})), kI.push(rM)
	}(kI), function(kI) {
		var rM;
		2 === bq.data.spawningType && ((rM = new rN).rO("Data"), (z3 = new yR(0, 1, 0, 1)).yU(ar.d5.zD(bq.data.spawningData, 2)), rM.rR(z3), kI.push(rM))
	}(kI), kI))
}

function a2P(a2Q, a2R, a2S) {
	function click() {
		var value = 1 - a2Q.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + a2R, void 0 !== a2Q.b4 ? aP.aS.aT(a2Q.b4, value) : a2Q.value = value, a2S && a2S(value)
	}
	var cb;
	a2R = a2R || L(61), this.cb = document.createElement("p"), (cb = this.cb).textContent = (a2Q.value ? "🟩 " : "⬜ ") + a2R, cb.style.margin = "0", cb.style.marginBottom = "0.5em", cb.style.cursor = "pointer", cb.addEventListener("click", click)
}

function wn() {
	var yM, a2T = !0;

	function a2X(qf, uI) {
		var dx = document.createElement("div"),
			a2Y = document.createElement("span"),
			a2Z = document.createElement("span");
		a2Y.textContent = by.a2a(uI.e6) + ":", a2Y.style.color = ao.a2b, a2Y.style.paddingRight = "0.4em", a2Y.style.display = "table-cell", a2Y.style.width = "6ch", a2Y.style.textAlign = "end", dx.appendChild(a2Y), a2Z.textContent = uI.a2, dx
			.appendChild(a2Z), dx.style.display = "table", uI.gb && function(dx, gb) {
				{
					var a02;
					gb >= 1024 - fW.gX.p ? ((a02 = document.createElement("img")).src = fW.fX.gI[gb - 1024 + fW.gX.p].toDataURL(), a02.style.width = "1.5em", a02.style.height = "1.5em", a02.style.verticalAlign = "middle", dx.appendChild(a02)) : ((
						a02 = document.createElement("span")).textContent = fW.gX.x(gb), a02.style.display = "inline-block", a02.style.fontSize = "1.5em", a02.style.lineHeight = "1em", a02.style.verticalAlign = "middle", dx.appendChild(a02))
				}
			}(dx, uI.gb), qf.appendChild(dx)
	}

	function a2V() {
		a2T && (yM.cQ.scrollTop = yM.cQ.scrollHeight)
	}
	this.clear = function() {
		yM.cQ.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var tk = iU.a2W(), a3 = tk.length, qf = document.createDocumentFragment(), a5 = 0; a5 < a3; a5++) a2X(qf, tk[a5]);
		yM.cQ.appendChild(qf), a2V(), yM.show(), this.resize(), a2T = !0, a2V()
	}, this.aR = function() {
		yM.aR()
	}, this.resize = function() {
		yM.resize(), yM.cQ.style.padding = "0.4em " + ar.at.cc(ab.yb)
	}, this.b6 = function(aV) {
		2 === aV && yM.b7[0].b8()
	}, this.x1 = function(uI) {
		var qf = document.createDocumentFragment();
		a2X(qf, uI), yM.cQ.appendChild(qf), a2V()
	}, (yM = new aK(L(62), [new aL("⬅️ " + L(1), function() {
		aM.wo(1)
	})])).cQ.style.overflowY = "auto", yM.cQ.addEventListener("scroll", function() {
		a2T = yM.cQ.scrollTop >= yM.cQ.scrollHeight - yM.cQ.clientHeight - 2
	})
}

function hi() {
	this.hn = function() {
		var a2d = bq.data;
		ar.t4.a2e(a2d.teamPlayerCount, a2d.playerCount), a2d.numberTeams = ar.t4.a2f(a2d.teamPlayerCount, 0), a2d.teamPlayerCount[0] && a2d.teamPlayerCount[7] && (a2d.teamPlayerCount[7] = 0, this.hn())
	}, this.a2g = function() {
		var a2d = bq.data;
		a2d.mapType < 2 ? bh.dV(bh.a2h(a2d), a2d.mapSeed) : bh.a2i(a2d.canvas)
	}, this.a2j = function() {
		var a2d = bq.data;
		a2d.colorsData || (a2d.colorsData = new Uint32Array(1)), a2d.selectableColor && (a2d.colorsData[0] = aP.h.dd()), a2d.selectableName && (a2d.playerNamesData || (a2d.playerNamesData = new Array(1)), a2d.playerNamesData[0] = aP.aQ.data[122]
			.value)
	}, this.a2k = function() {
		bq.data = new hg, bq.data.aIncomeType = 2, bq.data.aIncomeData = new Uint8Array(bq.g7), bq.data.aIncomeData[0] = 64
	}
}

function a2l() {
	this.yu = new yc, this.aJ = function() {
		this.yu.resize()
	}
}

function a2m() {
	function a2q(a4) {
		if (0 === a4.length) aP.aS.aT(116, "");
		else {
			for (var a2t = a4[0], a5 = 1; a5 < a4.length; a5++) a2t += ";" + a4[a5];
			aP.aS.aT(116, a2t)
		}
	}
	this.a2n = function() {
		aP.aQ.data[110].value.length && (aP.aQ.data[106].value = aP.aQ.data[110], aP.aS.aT(110, ""), this.a2o())
	}, this.a2o = function() {
		var a4 = aP.aQ.data[116].value.split(";");
		for (a4.length % 2 == 1 && a4.pop(), a4.unshift(aP.aQ.data[106].value), a4.unshift(aP.aQ.data[105].value), a5 = 2; a5 < a4.length; a5 += 2)
			if (a4[a5] === a4[0]) {
				a4.splice(a5, 2);
				break
			} for (var a2p = [], a5 = 0; a5 < a4.length; a5 += 2) a2p.push(a4[a5]);
		a2q(a4), aP.aQ.data[117].value = 0, aP.aQ.data[117].xx = a2p
	}, this.a2r = function(b4) {
		aP.aQ.data[117].xx.splice(b4, 1), aP.aQ.data[117].value = Math.min(b4, aP.aQ.data[117].xx.length - 1);
		var a4 = aP.aQ.data[116].value.split(";");
		a4.splice(2 * b4, 2), a2q(a4)
	}, this.a2s = function(b4) {
		var a4 = aP.aQ.data[116].value.split(";");
		return {
			dr: a4[2 * b4],
			password: a4[2 * b4 + 1]
		}
	}, this.dd = function() {
		var y = z.ax(aP.aQ.data[121].value, -1, 262143);
		return y = -1 === y ? ~~(262144 * Math.random()) : y
	}
}

function a2u() {
	function a2v(a5, type, a31, my) {
		aP.aQ.data.push({
			b4: a5,
			type: type || 0,
			value: a31 || 0,
			a31: a31 || 0,
			my: my || 0
		})
	}

	function a2w(a5, type, a31, my) {
		aP.aQ.data.push({
			b4: a5,
			type: type,
			value: a31 || "",
			a31: a31 || "",
			my: my || 0
		})
	}

	function a2x(mU) {
		for (var a5 = aP.aQ.data.length; a5 < mU; a5++) aP.aQ.data.push(null)
	}
	this.data = [], this.aJ = function() {
		a2v(0, 1, 0, 5), a2v(1, 1, 1), a2v(2, 0), a2w(3, 2), a2v(4, 1), a2w(5, 2, "Trebuchet MS", 1), a2v(6, 0), a2v(7, 0, 0), a2v(8, 0), a2v(9, 1, 1), a2v(10, 1), a2v(11, 1, 1), a2w(12, 2, navigator.language), a2v(13), a2v(14), a2x(100), a2w(
				100, 2), a2w(101, 2), a2w(102, 2), a2w(103, 2), a2w(104, 2), a2w(105, 2), a2w(106, 2), a2v(107), a2v(108), a2v(109), a2w(110, 2), a2v(111), a2v(112), a2v(113), a2w(114, 2), a2v(115), a2w(116, 2), a2v(117, 1), a2w(118, 2, "", 2),
			a2v(119, 1, 0, 1), a2w(120, 2), a2v(121, 1, ~~(262144 * Math.random())), a2w(122, 2, "Player " + Math.floor(1e3 * Math.random())), a2v(123), a2w(124), a2v(125, 1), a2w(126, 2), a2v(127, 0, 1), a2v(128), a2v(129), a2v(130), a2v(131),
			a2v(132), a2w(133, 2), a2v(134, 0, 5), a2w(135, 2), a2w(136, 2), a2v(137), a2v(138), a2v(139), a2v(140), a2v(141), a2v(142), a2v(143), a2v(144), a2w(145, 2), a2v(146), a2v(147), a2w(148, 2), a2v(149), a2v(150, 0, 1), a2w(151, 2), a2v(
				152, 0, 5), a2v(153, 1), a2v(154, 1), a2w(155, 2), a2w(156, 2), a2v(157), a2v(158), a2v(159), a2v(160), a2x(180), a2v(180, 0), a2v(181, 0)
	}, this.aT = function(b4, value) {
		this.data[b4].value = value
	}, this.gg = function(b4, value) {
		this.aT(b4, value), aP.b8.save(b4, String(value)), aP.b8.save(b4, String(this.data[b4].my), !0)
	}, this.a2y = function() {
		for (var a5 = 0; a5 < this.data.length; a5++) this.data[a5] && (aP.b8.save(a5, String(this.data[a5].value)), aP.b8.save(a5, String(this.data[a5].my), !0))
	}, this.a2z = function(b4) {
		return Number(this.data[b4].value)
	}, this.a30 = function(b4) {
		return String(this.data[b4].value)
	}
}

function a32() {
	var dT, wP, a33, a34 = ["wss://", "/s50/", "/s51/", "/s52/"],
		a35 = 0;

	function a3I() {
		g.h.a3I(dT, wP)
	}

	function a3J(cb) {
		g.kA.uY(dT, new Uint8Array(cb.data))
	}

	function a3L() {}

	function a3K(cb) {
		g.h.a3K(dT, cb)
	}
	this.aJ = function(b4, a36) {
		dT = b4, wP = a36, b4 = dX.a3G ? "ws://localhost:" + (7130 + dT) + "/" : a34[0] + g.h.a3H[dT] + a34[1 + dX.hp], (a33 = new WebSocket(__fx.customLobby.isActive() && 1 === dT ? __fx.customLobby.getSocketURL() : b4)).binaryType =
			"arraybuffer", a33.onopen = a3I, a33.onmessage = a3J, a33.onclose = a3K, a33.onerror = a3L
	}, this.a38 = function() {
		return a33.readyState === a33.CONNECTING
	}, this.rZ = function() {
		return a33.readyState === a33.OPEN
	}, this.a39 = function() {
		return a35
	}, this.a3A = function() {
		a35 = 1
	}, this.a3B = function() {
		return this.a38() || this.rZ()
	}, this.a3C = function(a36) {
		wP = a36
	}, this.a3D = function() {
		return wP
	}, this.send = function(di) {
		this.rZ() && a33.send(di)
	}, this.close = function(a3E) {
		this.a3B() && (a33.close(a3E), this.aR())
	}, this.aR = function() {
		a33.onopen = null, a33.onmessage = null, a33.onclose = null, a33.onerror = null
	}
}

function a3M() {
	var a3P, a3Q, a3R, a3S, a3T, a3U, a3V, a3W, a3X, a3Y, a3N = [
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
		a3O = [
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

	function a3e(mV, mU) {
		for (var a5 = mV; a5 < mU; a5++) a3P[a5] = 4 * z.a0(64 * g1.random(), g1.value(100)), a3Q[a5] = 4 * z.a0(64 * g1.random(), g1.value(100)), a3R[a5] = 4 * z.a0(64 * g1.random(), g1.value(100))
	}

	function a3d(mV, mU) {
		for (var colorsData = bq.data.colorsData, a5 = mV; a5 < mU; a5++) {
			var y = colorsData[a5];
			a3P[a5] = 4 * (y >> 12), a3Q[a5] = 4 * (y >> 6 & 63), a3R[a5] = 4 * (63 & y)
		}
	}

	function a3y(gr, a40) {
		a3r[gr] = 0, a3r[gr + 1] = 0, a3r[gr + 2] = a40, a3r[gr + 3] = 0, a41(gr)
	}

	function a41(gr) {
		var ag;
		i1.a1W || (ag = hy.bk(gr), gr = hy.bl(gr), i1.a1W = ag >= a1P.vi[0] && ag <= a1P.vi[2] && gr >= a1P.vi[1] && gr <= a1P.vi[3])
	}
	this.ix = new Int32Array(4), this.fZ = function() {
		var ix = this.ix;
		ix[0] = -4 * bh.ma, ix[1] = 4, ix[2] = -ix[0], ix[3] = -ix[1]
	}, this.aJ = function() {
		if (a3P = new Uint8Array(bq.g7), a3Q = new Uint8Array(bq.g7), a3R = new Uint8Array(bq.g7), a3S = new Uint8Array(bq.g7), a3T = new Uint8Array(bq.g7), a3U = new Uint8Array(bq.g7), a3V = new Uint8Array(bq.g7), a3W = new Uint8Array(bq.g7),
			a3X = new Uint8Array(bq.g7), a3Y = new Uint8Array(bq.g7), this.cw = new Uint8Array(bq.g7), bq.hU)
			for (var a3k = hv.a3k, a5 = bq.g7 - 1; 0 <= a5; a5--) {
				var aV = a3k[a5],
					ei = z.a0((a3O[aV][3] + 1) * g1.random(), g1.value(100));
				a3P[a5] = a3N[aV][0] + ei * a3O[aV][0], a3Q[a5] = a3N[aV][1] + ei * a3O[aV][1], a3R[a5] = a3N[aV][2] + ei * a3O[aV][2]
			} else 0 === bq.data.colorsType ? bq.data.selectableColor ? (a3d(0, bq.fx), a3e(bq.fx, bq.g7)) : a3e(0, bq.g7) : a3d(0, bq.g7);
		! function() {
			var a5, iy;
			for (a5 = bq.g7 - 1; 0 <= a5; a5--) iy = z.a0(a3P[a5] + a3Q[a5] + a3R[a5], 3), a3P[a5] += yF(iy - a3P[a5], 2), a3Q[a5] += yF(iy - a3Q[a5], 2), a3R[a5] += yF(iy - a3R[a5], 2), a3P[a5] -= a3P[a5] % 4, a3Q[a5] -= a3Q[a5] % 4, a3R[a5] -=
				a3R[a5] % 4
		}(),
		function() {
			for (var a5 = bq.g7 - 1; 0 <= a5; a5--) a3P[a5] += z.a0(a5, 128), a3Q[a5] += z.a0(a5 % 128, 32), a3R[a5] += z.a0(a5 % 32, 8), a3S[a5] = a5 % 8
		}(), this.a3h(),
			function() {
				for (var a5 = bq.g7 - 1; 0 <= a5; a5--) a3T[a5] = a3P[a5] < 32 ? a3P[a5] + 32 : a3P[a5] - 32, a3U[a5] = a3Q[a5] < 32 ? a3Q[a5] + 32 : a3Q[a5] - 32, a3V[a5] = a3R[a5] < 32 ? a3R[a5] + 32 : a3R[a5] - 32
			}(),
			function() {
				for (var a5 = bq.g7 - 1; 0 <= a5; a5--) a3W[a5] = 235 < a3P[a5] ? a3P[a5] - 20 : a3P[a5] + 20, a3X[a5] = 235 < a3Q[a5] ? a3Q[a5] - 20 : a3Q[a5] + 20, a3Y[a5] = 235 < a3R[a5] ? a3R[a5] - 20 : a3R[a5] + 20
			}()
	}, this.tr = function(player) {
		var a4 = j9.ts;
		return a4[0] = a3P[player], a4[1] = a3Q[player], a4[2] = a3R[player], a4
	}, this.a3h = function() {
		for (var a5 = bq.g7 - 1; 0 <= a5; a5--) this.cw[a5] = a3P[a5] + a3Q[a5] + a3R[a5] < 280 ? 0 : 1
	}, this.bk = function(gr) {
		return z.a0(gr, 4) % bh.ma
	}, this.bl = function(gr) {
		return z.a0(gr, 4 * bh.ma)
	}, this.a3l = function(ag, aZ) {
		return Math.floor(4 * (aZ * bh.ma + ag))
	}, this.a3m = function(gr) {
		var ix = this.ix;
		return this.a3n(gr + ix[0]) || this.a3n(gr + ix[1]) || this.a3n(gr + ix[2]) || this.a3n(gr + ix[3])
	}, this.a3o = function(gr) {
		var ix = this.ix;
		return this.iz(gr + ix[0]) || this.iz(gr + ix[1]) || this.iz(gr + ix[2]) || this.iz(gr + ix[3])
	}, this.a3p = function(gr, player) {
		var ix = this.ix;
		return this.a3q(gr + ix[0], player) || this.a3q(gr + ix[1], player) || this.a3q(gr + ix[2], player) || this.a3q(gr + ix[3], player)
	}, this.qE = function(gr) {
		return 208 <= a3r[gr + 3]
	}, this.mZ = function(player, gr) {
		return this.qE(gr) && this.a3s(player, gr)
	}, this.a3s = function(player, gr) {
		return player === this.oN(gr)
	}, this.a3t = function(gr) {
		return 208 <= a3r[gr + 3] && a3r[gr + 3] < 224
	}, this.a3u = function(gr) {
		return 224 <= a3r[gr + 3] && a3r[gr + 3] < 248
	}, this.a3v = function(gr) {
		for (var ix = this.ix, a5 = 3; 0 <= a5; a5--)
			if (this.qK(gr + ix[a5])) return !0;
		return !1
	}, this.q7 = function(gr) {
		return this.qE(gr) || this.j1(gr)
	}, this.qK = function(gr) {
		return 0 === a3r[gr + 3] && 2 === a3r[gr + 2]
	}, this.j1 = function(gr) {
		return 0 === a3r[gr + 3] && 1 === a3r[gr + 2]
	}, this.a3w = function(gr) {
		return 0 === a3r[gr + 3] && 3 === a3r[gr + 2]
	}, this.iz = function(gr) {
		return 0 === a3r[gr + 3] && 5 === a3r[gr + 2]
	}, this.a3n = function(gr) {
		return 0 === a3r[gr + 3] && 3 <= a3r[gr + 2]
	}, this.j0 = function(gr) {
		return (a3r[gr] << 8) + a3r[gr + 1]
	}, this.a3q = function(gr, player) {
		return this.j1(gr) || this.qE(gr) && player !== this.oN(gr)
	}, this.oN = function(gr) {
		return a3r[gr] % 4 * 128 + a3r[gr + 1] % 4 * 32 + a3r[gr + 2] % 4 * 8 + a3r[gr + 3] % 8
	}, this.a3x = function(gr) {
		a3y(gr, 1)
	}, this.a3z = function(gr) {
		a3y(gr, 2)
	}, this.a42 = function(gr, player) {
		a3r[gr] = a3P[player], a3r[gr + 1] = a3Q[player], a3r[gr + 2] = a3R[player], a3r[gr + 3] = 208 + a3S[player], a41(gr)
	}, this.a43 = function(gr, player) {
		a3r[gr] = a3T[player], a3r[gr + 1] = a3U[player], a3r[gr + 2] = a3V[player], a3r[gr + 3] = 224 + a3S[player], a41(gr)
	}, this.a44 = function(gr, player) {
		a3r[gr] = a3W[player], a3r[gr + 1] = a3X[player], a3r[gr + 2] = a3Y[player], a3r[gr + 3] = 248 + a3S[player], a41(gr)
	}
}

function a45() {
	var gc = new Uint8Array(bq.g7),
		a46 = new Uint16Array(bq.g7),
		a47 = new Uint16Array(bq.g7),
		a48 = new Uint8Array(bq.g7),
		a49 = (this.g5 = new Uint8Array(bq.g7), new Uint16Array(bq.g7)),
		a4A = new Uint16Array(bq.g7);

	function a4K(a5) {
		gc[a5] = 1 + z.a0(a49[a5] * g1.random(), 10 * g1.value(100))
	}
	this.a4B = null, this.a4C = [97, 94, 70, 40, 20, 0, 100], this.a4D = [500, 450, 400, 300, 80, 50, 100], this.a4E = [0, 0, 5, 25, 50, 100, 0], this.a4F = [60, 74, 112, 200, 256, 512, 512], this.s1 = [1, 2, 3, 4, 6, 8, 1], this.jE = [500, 450, 400,
		300, 80, 50, 100
	], this.fZ = function() {
		this.a4B = [L(63), L(64), L(65), L(66), L(67), L(68), "H Bot"]
	}, this.aJ = function() {
		gc.fill(0), a46.fill(0), a47.fill(0), a48.fill(0), this.g5.fill(0), a49.fill(0), a4A.fill(0);
		var a4G = bq.fx;
		if (9 === bq.fs) this.a4H();
		else if (bq.hR)
			if (3 === bq.data.botDifficultyType)
				for (a5 = bq.hM - 1; 0 <= a5; a5--) {
					var eE = a5 + a4G;
					this.g5[eE] = bq.data.botDifficultyData[eE]
				} else if (2 === bq.data.botDifficultyType)
					for (a5 = bq.hM - 1; 0 <= a5; a5--) this.g5[eE = a5 + a4G] = bq.data.botDifficultyTeam[hv.vR[hv.va[eE]]];
				else if (1 === bq.data.botDifficultyType) {
			var a4J = this.a4B.length;
			for (a5 = bq.hM - 1; 0 <= a5; a5--) this.g5[a5 + a4G] = a5 % a4J
		} else
			for (a4J = bq.data.botDifficultyValue, a5 = bq.hM - 1; 0 <= a5; a5--) this.g5[a5 + a4G] = a4J;
		else
			for (var a4I = 8 === bq.fs ? 1 : 0, a5 = bq.hM - 1; 0 <= a5; a5--) this.g5[a5 + a4G] = a4I;
		for (a5 = 0; a5 < a4G; a5++) this.g5[a5] = 6;
		var a3 = bq.g7;
		for (a5 = 0; a5 < a3; a5++) this.g5[a5] <= 2 ? (a48[a5] = 5, a49[a5] = a4A[a5] = 1040, 0 === this.g5[a5] ? (a46[a5] = 980, a47[a5] = 980) : 1 === this.g5[a5] ? (a46[a5] = 980, a47[a5] = 920, a49[a5] = a4A[a5] = 1100) : (a46[a5] = 825,
				a47[a5] = 750)) : this.g5[a5] <= 4 ? (a48[a5] = 1 + g1.g2(20), 3 === this.g5[a5] ? (a46[a5] = a47[a5] = 500, a49[a5] = a4A[a5] = 1e3) : (a4A[a5] = 250 + g1.g2(1501), a49[a5] = 500 + g1.g2(501), a46[a5] = 300 + g1.g2(201), a47[
				a5] = 100 + g1.g2(201))) : this.g5[a5] <= 5 ? (a49[a5] = 1e3, a4A[a5] = 1e3, a48[a5] = 35 + g1.g2(16), a46[a5] = 300 + g1.g2(201), a47[a5] = 50 + g1.g2(101)) : (a49[a5] = a4A[a5] = 800, a48[a5] = 5, a46[a5] = 10, a47[a5] = 250),
			a4K(a5)
	}, this.a4H = function() {
		for (var gr = hm.a0i, a4G = bq.fx, a5 = gr - 1; 0 <= a5; a5--) this.g5[a5 + a4G] = 0;
		for (var an = 0; an < 6; an++) {
			for (a5 = gr + hm.vY[an] - 1; gr <= a5; a5--) this.g5[a5 + a4G] = an;
			gr += hm.vY[an]
		}
	}, this.a4L = function(cE, value) {
		gc[cE] = Math.min(value, gc[cE])
	}, this.c = function(cE) {
		0 == --gc[cE] && ! function(cE) {
			(function(cE) {
				a49[cE] !== a4A[cE] && (a49[cE] += a49[cE] < a4A[cE] ? 3 : -3);
				a46[cE] !== a47[cE] && (a46[cE] += a46[cE] < a47[cE] ? a48[cE] : -a48[cE], a46[cE] = (Math.abs(a46[cE] - a47[cE]) <= a48[cE] ? a47 : a46)[cE]);
				gc[cE] = z.a0(a49[cE], 10)
			})(cE), i3.a0p.a4O(cE, z.a0(a46[cE] * fz.lQ[cE], 1e3))
		}(cE)
	}, this.a4P = function(cE, gi) {
		a49[cE] = a4A[cE] = gi
	}
}

function a4Q() {
	var aV = ar.color;
	this.aq = aV.a4R(0, 0, 0), this.a4S = aV.kM(0, 0, 0, .7), this.a4T = aV.kM(0, 0, 0, .5), this.cR = aV.kM(0, 0, 0, .85), this.c9 = aV.kM(0, 0, 0, .75), this.gU = aV.kM(0, 0, 0, .6), this.kb = aV.kM(0, 0, 0, .35), this.ap = aV.a4R(255, 255, 255),
		this.a4U = aV.kM(255, 255, 255, .3), this.ep = aV.kM(255, 255, 255, .6), this.em = aV.kM(255, 255, 255, .4), this.f0 = aV.kM(255, 255, 255, .25), this.a4V = aV.kM(255, 255, 255, .85), this.a4W = aV.kM(255, 255, 255, .75), this.a4X = aV.kM(
			255, 255, 255, .15), this.a4Y = aV.kM(255, 255, 255, .11), this.u0 = aV.a4R(128, 128, 128), this.a4Z = aV.kM(64, 64, 64, .75), this.tq = aV.kM(88, 88, 88, .83), this.a4a = aV.kM(60, 60, 60, .85), this.a4b = aV.kM(80, 60, 60, .85), this
		.a4c = aV.a4R(170, 170, 170), this.a2b = aV.a4R(200, 235, 245), this.a4d = aV.a4R(30, 255, 30), this.a4e = aV.a4R(0, 200, 0), this.u3 = aV.a4R(128, 255, 128), this.a4f = aV.kM(10, 65, 10, .75), this.a4g = aV.kM(0, 255, 0, .6), this.a4h = aV
		.kM(0, 255, 0, .5), this.a4i = aV.kM(0, 200, 0, .5), this.a4j = aV.kM(0, 100, 0, .75), this.a4k = aV.kM(0, 60, 0, .8), this.nb = aV.kM(0, 255, 0, .3), this.gT = aV.kM(0, 180, 0, .6), this.a4l = aV.kM(0, 120, 0, .85), this.u4 = aV.a4R(0, 120,
			0), this.a4m = aV.kM(0, 70, 0, .85), this.a4n = aV.a4R(190, 230, 190), this.a4o = aV.a4R(0, 255, 0), this.a4p = aV.a4R(255, 120, 120), this.a4q = aV.a4R(255, 160, 160), this.u1 = aV.a4R(255, 70, 70), this.u2 = aV.a4R(230, 0, 0), this.eo =
		aV.kM(220, 0, 0, .6), this.a4r = aV.kM(255, 100, 100, .8), this.a4s = aV.kM(100, 0, 0, .85), this.a4t = aV.kM(60, 0, 0, .85), this.pf = aV.kM(200, 0, 0, .6), this.a4u = aV.kM(120, 0, 0, .85), this.a4v = aV.a4R(255, 70, 10), this.a4w = aV.a4R(
			230, 190, 190), this.a4x = aV.a4R(255, 0, 0), this.a4y = aV.a4R(255, 0, 255), this.a4z = aV.kM(60, 0, 60, .85), this.a50 = aV.kM(0, 60, 60, .85), this.a51 = aV.kM(10, 60, 60, .9), this.a52 = aV.kM(0, 96, 96, .75), this.a53 = aV.a4R(0,
			255, 255), this.a1Y = aV.a4R(160, 160, 255), this.a54 = aV.kM(0, 40, 90, .75), this.ph = aV.kM(0, 0, 255, .6), this.a55 = aV.a4R(200, 200, 255), this.a56 = aV.a4R(255, 120, 100), this.a57 = aV.kM(255, 255, 0, .5), this.a58 = aV.kM(255,
			255, 150, .2), this.kR = aV.a4R(255, 255, 0), this.a59 = aV.a4R(255, 255, 200), this.pg = aV.kM(200, 200, 0, .6), this.a5A = aV.kM(140, 120, 0, .75), this.a5B = aV.kM(180, 160, 40, .75), this.a5C = aV.kM(70, 50, 20, .85), this.a5D = aV
		.kM(30, 30, 0, .85), this.a5E = aV.kM(60, 60, 0, .85), this.a5F = aV.kM(255, 140, 0, .75), this.a5G = aV.kM(70, 40, 0, .85), this.a5H = aV.a4R(220, 120, 0), this.a5I = aV.kM(255, 200, 80, .85), this.a5J = aV.a4R(255, 150, 120), this.a5K = aV
		.kM(0, 0, 0, 0), this.a5L = aV.kM(255, 255, 255, 0), this.a5M = aV.kM(254, 254, 254, 0)
}

function a5N() {
	var a5R, a5S, a5O = document.createElement("div"),
		a5P = 0,
		a5Q = 0;
	this.show = function(ag, aZ, a2, a5T, a5U) {
		if (a5P) {
			if (!a5T) return;
			this.aR()
		}
		ag === aZ && -1 === ag ? (ag = a5R, aZ = a5S) : (a5R = ag, a5S = aZ), a5U || (a5Q = a5T), a5P = 1;
		a5U = f.af / f.aW, a5O.style.whiteSpace = "pre", a5O.textContent = a2, ar.at.cd(a5O, 5), a5O.style.font = ar.at.au(0, ar.at.cX(.015)), a5O.style.padding = "0.3em 0.6em", a5O.style.left = ag + "px", a5O.style.top = "0px", document.body
			.appendChild(a5O), a5T = ag + a5O.offsetWidth - a5U;
		0 < a5T && (a5O.style.left = (a2 = ag - a5T) + "px", a2 < 5) && (a5O.style.whiteSpace = "pre-wrap"), a5O.style.top = aZ - a5O.offsetHeight + a5Q * ab.yf + "px"
	}, this.aR = function(a5X) {
		if (a5P) {
			if (a5X && a5Q) return 0;
			a5P = 0, document.body.removeChild(a5O)
		}
		return 1
	}, a5O.style.position = "absolute", a5O.style.backgroundColor = ao.cR, a5O.style.color = ao.ap, a5O.style.pointerEvents = "none", a5O.style.zIndex = "5", a5O.style.maxWidth = "100%"
}

function a5Y() {
	var a5Z, a5a, a5b, a5c, a5d, b4 = 0,
		e6 = k.e6;

	function a5j() {
		! function() {
			if (!bq.cp) return;
			if (bq.hR) return;
			if (2 !== bq.dM)
				if (a5d % 7 != 0) a5d++;
				else if (a5c === bq.hb) {
				if (!a5n()) return;
				by.a5p(a5c), bq.hY.c()
			} else {
				if (!a5n()) return;
				a5d++, a5c++, bp.lT(), bp.bR(!0)
			}
			return 1
		}() && a5n() && a5o()
	}

	function a5l() {
		b4 = 0, (bq.cp ? (k.l = by.a5p(a5c - (a5d % 7 == 0 ? 0 : 1) + a5d % 7 / 7) || k.l, a5q) : c2.d8 || !bt.ib ? a5q : (k.l = !0, a5r))()
	}

	function a5n() {
		var a5, a3, a5s = iA.iQ.a0K,
			wB = iA.iQ.a0L,
			wC = iA.iQ.a0M,
			nh = iA.iQ.a0N,
			a5t = iA.iQ.a0O,
			a5u = iA.iQ.a0P;
		if (!(a5Z >= a5u.length)) {
			if (a5u = a5u[a5Z], a5t[a5Z]) {
				for (a3 = a5a + a5u, a5 = a5a; a5 < a3; a5++) gl.ht.a0R(a5s[a5], wB[a5], wC[a5], nh[a5]);
				a5a += a5u, a5Z++
			} else ++a5b >= a5u && (a5Z++, a5b = 0);
			return 1
		}
		bu.a5v("Replay file smaller than expected."), bt.nL(!1), bq.dM = 2
	}
	this.b = 0, this.aJ = function() {
		a5d = a5c = a5b = a5a = a5Z = 0
	}, this.c = function() {
		var zl;
		f.c(), bt.nG() < 1.7 ? 0 === b4 ? k.e6 >= e6 && (zl = k.a5h / bt.nG(), e6 += zl * Math.floor(1 + (k.e6 - e6) / zl), 2 === bq.dM || c2.d8 || !bt.ib ? a5i() : (a5j(), i1.a5k()), b4++) : a5l() : function() {
			var zl;
			if (k.e6 >= e6)
				if (2 === bq.dM || c2.d8 || !bt.ib) a5i(), e6 = k.e6;
				else {
					for (zl = k.a5h / bt.nG(), 16 < (k.e6 - e6) / zl && (e6 = k.e6 - 16 * zl); k.e6 >= e6 && 2 !== bq.dM;) e6 += zl, a5j();
					i1.a5k()
				} a5l()
		}(), a5g(), k.l && (k.l = !1, bd())
	}, this.a5w = function() {
		iA.iQ.a0P.length - a5Z <= 2 || bu.a5v("Replay file larger than expected.")
	}
}

function a5x() {
	var a5y, a5z, qK, xL;
	this.aJ = function() {
		var a5, ag, aZ, db, a60, af, ae, c8, vU, fX, y, cE, vT, fp, qA;
		if (function() {
				if (qK = !0, xL = "rgb(" + bh.a63[0] + "," + bh.a63[1] + "," + bh.a63[2] + ")", bh.a64(bh.ig)) return 1;
				return qK = !1, 0
			}()) a5z = null;
		else {
			for (a5y = z.a0(96, 4), a60 = 1 === bh.ig ? (db = 0, 160) : (db = 128, 32), xL = "rgb(" + db + "," + db + "," + db + ")", a5z = new Array(4), a5 = 3; 0 <= a5; a5--) {
				if (a5z[a5] = document.createElement("canvas"), af = a5 % 2 == 0 ? bh.ma : a5y, ae = a5 % 2 == 0 ? a5y : bh.oi + 2 * a5y, a5z[a5].width = af, a5z[a5].height = ae, fX = (vU = (c8 = a5z[a5].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, af, ae)).data, a5 % 2 == 0)
					for (aZ = a5y - 1; 0 <= aZ; aZ--)
						for (y = a60 + Math.floor((aZ + 1) * (db - a60) / (a5y + 1)), ag = af - 1; 0 <= ag; ag--) fX[cE = 4 * ((0 === a5 ? a5y - aZ - 1 : aZ) * af + ag)] = y, fX[cE + 1] = y, fX[cE + 2] = y, fX[cE + 3] = 255;
				else {
					for (ag = a5y - 1; 0 <= ag; ag--)
						for (y = a60 + Math.floor((ag + 1) * (db - a60) / (a5y + 1)), aZ = ae - 1 - a5y; a5y <= aZ; aZ--) fX[cE = 4 * (aZ * af + (3 === a5 ? a5y - ag - 1 : ag))] = y, fX[cE + 1] = y, fX[cE + 2] = y, fX[cE + 3] = 255;
					for (fp = 1; 0 <= fp; fp--)
						for (ag = a5y - 1; 0 <= ag; ag--)
							for (aZ = a5y - 1; 0 <= aZ; aZ--) vT = (Math.pow(ag * ag + aZ * aZ, .5) + 1) / (a5y + 1), y = a60 + Math.floor((1 < vT ? 1 : vT) * (db - a60)), fX[cE = 4 * ((0 === fp ? a5y - aZ - 1 : aZ + fp * (ae - a5y)) * af + (
								1 === a5 ? ag : a5y - ag - 1))] = y, fX[cE + 1] = y, fX[cE + 2] = y, fX[cE + 3] = 255
				}
				c8.putImageData(vU, 0, 0)
			}
			qA = a60, bh.tm.fillStyle = "rgb(" + qA + "," + qA + "," + qA + ")", bh.tm.fillRect(0, 0, bh.ma, 1), bh.tm.fillRect(0, bh.oi - 1, bh.ma, 1), bh.tm.fillRect(0, 0, 1, bh.oi), bh.tm.fillRect(bh.ma - 1, 0, 1, bh.oi)
		}
	}, this.bf = function() {
		var fp = qK ? 0 : -a5y;
		a65(fp, fp, bh.ma - 2 * fp, bh.oi - 2 * fp, a1P.ve, a1P.vf, a1P.vg, a1P.vh) || (ah.fillStyle = xL, ah.fillRect(0, 0, f.af, f.ae))
	}, this.n = function() {
		qK || (a66(0, -a5y, bh.ma, a5y, a1P.ve, a1P.vf, a1P.vg, a1P.vh) && ah.drawImage(a5z[0], a1P.vc, a1P.vd - a5y), a66(bh.ma, -a5y, a5y, bh.oi + 2 * a5y, a1P.ve, a1P.vf, a1P.vg, a1P.vh) && ah.drawImage(a5z[1], a1P.vc + bh.ma, a1P.vd - a5y),
			a66(0, bh.oi, bh.ma, a5y, a1P.ve, a1P.vf, a1P.vg, a1P.vh) && ah.drawImage(a5z[2], a1P.vc, a1P.vd + bh.oi), a66(-a5y, -a5y, a5y, bh.oi + 2 * a5y, a1P.ve, a1P.vf, a1P.vg, a1P.vh) && ah.drawImage(a5z[3], a1P.vc - a5y, a1P.vd - a5y))
	}
}

function aO(a67, a68, a69) {
	this.ag = 0, this.aZ = 0, this.af = 0, this.ae = 0, this.resize = function() {
		this.ae = Math.min(ar.at.a6A(a69 || .5) * a67[1] * f.bH, f.ae - 2 * ab.gap), this.af = Math.min(this.ae * (a67[0] / a67[1]), f.af - 2 * ab.gap), this.ae = a67[1] * this.af / a67[0], this.ag = ab.gap + a68[0] * (f.af - this.af - 2 * ab
			.gap), this.aZ = ab.gap + a68[1] * (f.ae - this.ae - 2 * ab.gap)
	}, this.a6B = function() {
		return this.ag + .5 * this.af
	}
}

function a6C() {
	var a6D, a6E = new Uint8Array(5),
		a6F = new Uint8Array(5);
	this.a6G = new a6H, this.aJ = function() {
		for (var y = aP.aQ.data[119].value, a5 = 0; a5 < a6E.length; a5++) a6E[a5] = (y >> 2 * a5) % 4
	}, this.i5 = function() {
		a6D = [L(69), L(70), L(71, [a6I.a6J[28]]), L(72, [a6I.a6J[26]]), L(73, [a6I.a6J[0]])], this.a6G.aJ()
	}, this.c = function() {
		this.a6G.c()
	}, this.px = function(id) {
		1 < id && n8.qt() || ! function(b4) {
			if (3 === a6E[b4] || 1 === a6F[b4]) return;
			if (a6F[b4] = 1, !(Math.random() < .6)) {
				a6E[b4]++;
				for (var y = 0, a5 = 0; a5 < a6E.length; a5++) y += a6E[a5] << 2 * a5;
				aP.aS.aT(119, y)
			}
			return 1
		}(id) || bu.a6L(a6D[id])
	}
}

function t1() {
	var a6M = [L(74), L(75), L(76), L(77), L(78), L(79), L(80)],
		a6N = [100, 60, 30, 15, 6, 1],
		a6O = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		a6P = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		a6Q = ["👢 Kick", "🔇 Mute", "✂️ Username Redaction", "Elo Deduction", "Gold Seizure", "🚩 Report"],
		a6R = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.a6S = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.a6T = function(id, al, b4) {
		al = this.a6U(al);
		return +(a6O[al][id] > b4)
	}, this.a6U = function(al) {
		for (var a5 = 0; a5 < a6N.length; a5++)
			if (a6N[a5] <= al) return a5;
		return a6N.length
	}, this.a6V = function(al) {
		return a6M[this.a6U(al)]
	}, this.a6W = function(id, a1M) {
		return a6P[id].replace(new RegExp("x", "g"), a1M)
	}, this.a6X = function(id, a1M) {
		return a6R[id].replace(new RegExp("x", "g"), a1M)
	}, this.a6Y = function(id, a18) {
		return a6Q[id] + (this.a6S[id][a18].length ? " (" + this.a6S[id][a18] + ")" : "")
	}
}

function a6Z() {
	this.uj = function() {
		aP.h.a2n(), aP.aS.aT(105, dn.kY.kZ(dn.kY.ka(5))), aP.aS.aT(106, dn.kY.kZ(dn.kY.ka(8))), aP.aS.aT(109, gv.gz(30)), aP.aS.aT(108, aP.aQ.data[109].value), aP.aS.aT(111, aP.aQ.data[109].value + 1), aP.aS.aT(107, 0), aP.aS.aT(110, "")
	}, this.ul = function() {
		var data;
		gv.size < dU.gw(29) ? g.h.gx(0, 3254) : ((data = {
			kV: gv.gz(30),
			a6a: gv.gz(16),
			a6b: gv.gz(30),
			a6c: gv.gz(30),
			a6d: gv.gz(30),
			a6e: gv.h2(32),
			username: h0.dp.h1(5),
			a6f: h0.dp.h1(3),
			a6g: h0.dp.h1(3),
			a6h: gv.h2(32),
			a6i: gv.h2(32),
			a6j: gv.gz(30),
			a6k: gv.h2(32),
			a6l: gv.h2(32),
			a6m: gv.h2(32),
			a6n: gv.h2(32),
			a6o: gv.h2(32),
			a6p: gv.h2(30),
			a6q: gv.h2(32),
			a6r: h0.dp.h1(3),
			a6s: gv.h2(2),
			a6t: gv.h2(10),
			a6u: h0.dp.h1(8),
			a6v: gv.h2(5),
			a6w: gv.gz(30),
			a6x: gv.gz(30),
			a6y: gv.h2(32),
			a6z: gv.gz(1),
			a70: gv.gz(1)
		}).a6z && (data.a71 = gv.h2(32), data.a72 = gv.gz(30), data.a73 = gv.gz(30), data.a74 = gv.gz(1)), 8 === aM.fQ && (25 === aM.fR().a75 ? (data.a76 = !0, aM.h.wZ = data, aM.fR().h3(25, !1)) : (data.a76 = !1, aP.aS.aT(160, +(data
			.a6z && data.a74)), data.dr = aP.aQ.data[105].value, aM.h.wX = data, aP.aS.a77(data), aM.fR().h3(16, !0))))
	}
}

function a78() {
	var tk, gc, a79, a7A, ae, cl, fontSize, a7B, a7C, a7D, a7E, canvas, c8, a13, a7F;

	function yX(a5) {
		return L(0 === a5 ? 81 : 1 === a5 ? 82 : 2 === a5 ? 83 : 84)
	}

	function a7N() {
		ah.drawImage(canvas, ab.gap + (bq.hU ? ab.gap + bs.a7O() : 0), a7P + 2 * ab.gap)
	}

	function a7G() {
		canvas.width = tk[0].width + a7D, canvas.height = ae + a7D, (c8 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, tk[0].width + a7D, ae + a7D), c8.translate(Math.floor(a7D / 2), Math.floor(a7D / 2)), c8.lineWidth = a7D, c8.fillStyle = 1 === tk[0].a7M ? ao.a4V : ao.c9, a7Q(), c8.fill(), c8.strokeStyle = 1 === tk[0].a7M ? ao.aq : ao
			.ap, a7Q(), c8.stroke(), ar.at.textAlign(c8, 1), ar.at.textBaseline(c8, 1), c8.fillStyle = 1 === tk[0].a7M ? ao.aq : ao.ap, c8.font = cl[0], c8.fillText(yX(tk[0].a7L), Math.floor(tk[0].width / 2), Math.floor(.72 * a7B[0] * ae)), c8.font =
			cl[1], c8.fillText(tk[0].a2, Math.floor(tk[0].width / 2), Math.floor((a7B[0] + .48 * a7B[1]) * ae))
	}

	function a7Q() {
		c8.beginPath(), c8.moveTo(a7E, 0), c8.lineTo(tk[0].width - a7E, 0), c8.lineTo(tk[0].width, a7E), c8.lineTo(tk[0].width, ae - a7E), c8.lineTo(tk[0].width - a7E, ae), c8.lineTo(a7E, ae), c8.lineTo(0, ae - a7E), c8.lineTo(0, a7E), c8.closePath()
	}
	this.aJ = function() {
		gc = 4, a79 = a7A = a13 = 0, tk = [], cl = new Array(2), fontSize = new Array(2), (a7B = new Array(2))[0] = .3, a7B[1] = .7, a7C = new Array(4), canvas = document.createElement("canvas"), a7F = k.e6 + 2e3, this.resize()
	}, this.resize = function() {
		var a5, af;
		for (ae = Math.floor((bE.bF.bG() ? .0725 : .058) * f.bH), fontSize[0] = Math.floor(.85 * a7B[0] * ae), fontSize[1] = Math.floor(.85 * a7B[1] * ae), cl[0] = ar.at.au(1, fontSize[0]), cl[1] = ar.at.au(1, fontSize[1]), a5 = a7C.length -
			1; 0 <= a5; a5--) a7C[a5] = this.measureText(yX(a5) + "000", cl[0]);
		if (a7D = Math.floor(1 + .05 * ae), a7E = Math.floor(.2 * ae), 0 < tk.length) {
			for (a5 = tk.length - 1; 0 <= a5; a5--) af = this.measureText(tk[a5].a2 + "00", cl[1]), tk[a5].width = af < a7C[a5] ? a7C[a5] : af;
			a7G()
		}
	}, this.c = function() {
		0 !== gc && (4 === gc ? k.e6 > a7F && (gc = 0, 1 === bq.dM) && bz.a7I(bh.a7J.p0[bh.ig].name, 3, 1, 9) : (1 === gc ? (0 === a79 && (a7G(), a79 = 1e-4), 1 <= (a79 += .002 * (k.e6 - a13)) && (a7A = 0, gc = 2, a79 = 1), k.l = !0) : 2 === gc ?
			((a7A += (k.e6 - a13) / 1e3) > tk[0].a18 || 1 < a7A && 1 < tk.length) && (gc = 3) : 3 === gc && ((a79 -= .002 * (k.e6 - a13)) <= 0 && (a79 = 0, tk.shift(), gc = 0 < tk.length ? 1 : 0), k.l = !0), a13 = k.e6))
	}, this.measureText = function(a2, cl) {
		return ah.font = cl, Math.floor(ah.measureText(a2).width)
	}, this.jG = function(a1w, a5) {
		this.a7I(fz.fy[a1w], a5, 1, 0 === a5 ? 3 : 7)
	}, this.a7I = function(a2, a7L, a7M, a18) {
		var af;
		a2.length && (af = (af = this.measureText(a2 + "00", cl[1])) < a7C[a7L] ? a7C[a7L] : af, tk.push({
			a2: a2,
			width: af,
			a7L: a7L,
			a7M: a7M,
			a18: a18
		}), 0 === gc) && (a79 = 0, gc = 1, a13 = k.e6)
	}, this.n = function() {
		0 !== gc && 0 !== a79 && (a79 < 1 ? (ah.globalAlpha = a79, a7N(), ah.globalAlpha = 1) : a7N())
	}
}

function wa() {
	var aC, a7R, a7S, cJ;

	function a7T(a5) {
		aM.iZ(8, aM.fQ, new kW(21, {
			gy: a5,
			sT: 0,
			sU: 10
		}))
	}
	this.show = function() {
		aC.show(), this.resize()
	}, this.aR = function() {
		aC.aR()
	}, this.resize = function() {
		aC.resize(), a7R.resize()
	}, this.b6 = function(aV) {
		2 === aV && aC.b7[0].b8()
	}, a7S = [new aL(L(85), function() {
		a7T(1)
	}, 0, 0, 1), new aL(L(86), function() {
		a7T(2)
	}, 0, 0, 1), new aL(L(87), function() {
		a7T(3)
	}, 0, 0, 1), new aL(L(88), function() {
		a7T(0)
	}, 0, 0, 1), new aL(L(89), function() {
		a7T(9)
	}, 0, 0, 1), new aL(L(90), function() {
		a7T(10)
	}, 0, 0, 1), new aL(L(91), function() {
		a7T(11)
	}, 0, 0, 1)], cJ = [new aL("⬅️ " + L(1), function() {
		aM.rI()
	})], aC = new aK(L(92), cJ), a7R = new a7U(a7S, aC.cQ)
}

function a7V(dl) {
	var aC, rH, kI;
	this.show = function() {
		aC.show(), this.resize()
	}, this.aR = function() {
		aC.aR()
	}, this.resize = function() {
		aC.resize(), rH.resize()
	}, this.b6 = function(aV) {
		2 === aV && aC.b7[0].b8()
	}, aC = new aK(L(93), [new aL("⬅️ " + L(1), function() {
		aM.wo(10)
	})]), rH = new rJ(aC.cQ, ((kI = []).push(function() {
		var a7Z, rM = new rN,
			a7a = new rQ(aP.aQ.data[132], 1, function() {
				a7Z.button.click()
			}),
			a7b = new rQ(aP.aQ.data[131], 1, function() {
				a7a.cb.focus()
			});
		rM.rO(L(94)), rM.rR(a7b), a7b.cb.style.marginBottom = "0.8em", rM.rO(L(95)), rM.rR(a7a);
		return a7Z = new aL(L(96), function() {
			sT = Math.floor(a7b.cb.value), sU = Math.floor(a7a.cb.value);
			var sU, sT = {
				a7d: Math.min(sT, sU),
				a7e: Math.max(sT, sU)
			};
			aM.iZ(8, aM.wp(10).wP, new kW(21, {
				gy: dl.gy,
				sT: sT.a7d,
				sU: sT.a7e
			}))
		}, 0, 0, 1), rM.rR(new rY([a7Z.button])), rM
	}()), kI.push(function() {
		var a7Z, rM = new rN,
			a7a = new rQ(aP.aQ.data[134], 1, function() {
				a7Z.button.click()
			}),
			a7b = new rQ(aP.aQ.data[133], 0, function() {
				a7a.cb.focus()
			});
		return rM.rO(1 === dl.gy ? L(97) : L(98)), rM.rR(a7b), a7b.cb.style.marginBottom = "0.8em", rM.rO(L(99)), rM.rR(a7a), a7Z = new aL(L(96), function() {
			var a7f = a7b.cb.value.slice(0, 20),
				a7g = Math.abs(Math.floor(a7a.cb.value));
			aM.iZ(8, aM.wp(10).wP, new kW(22, {
				gy: dl.gy,
				a7f: a7f,
				a7g: a7g
			}))
		}, 0, 0, 1), rM.rR(new rY([a7Z.button])), rM
	}()), kI.push(function() {
		var a7Z, rM = new rN,
			a7a = new rQ(aP.aQ.data[152], 1, function() {
				a7Z.button.click()
			}),
			a7b = new rQ(aP.aQ.data[151], 0, function() {
				a7a.cb.focus()
			});
		return rM.rO(L(100)), rM.rR(a7b), a7b.cb.style.marginBottom = "0.8em", rM.rO(L(99)), rM.rR(a7a), a7Z = new aL(L(96), function() {
			var a7f = a7b.cb.value.slice(0, 5),
				a7g = Math.abs(Math.floor(a7a.cb.value));
			aM.iZ(8, aM.wp(10).wP, new kW(28, {
				gy: dl.gy,
				a7f: a7f,
				a7g: a7g
			}))
		}, 0, 0, 1), rM.rR(new rY([a7Z.button])), rM
	}()), kI))
}

function uQ() {
	var a7h = {
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
		a7i = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.a7j = function(a7k) {
		return a7k.replace(a7i, function(match) {
			return a7h[match] || match
		})
	}, this.d6 = function(y) {
		var a5, a7l, a7m, a7n, a7o;
		if (y < 0) return "-" + this.d6(Math.abs(y));
		if (y < 1e3) return y.toString();
		for (a7l = Math.floor(Math.log(y + .5) / Math.log(10)) + 1, a7m = Math.floor((a7l - 1) / 3), a7o = (a7n = y.toString()).substring(a7l - 3, a7l), a5 = 1; a5 < a7m; a5++) a7o = a7n.substring(a7l - 3 * (a5 + 1), a7l - 3 * a5) + " " + a7o;
		return a7n.substring(0, a7l - 3 * a7m) + " " + a7o
	}, this.d7 = function(cE, a7l) {
		return cE.toFixed(a7l) + "%"
	}, this.a7p = function(y, a7q) {
		return y.toFixed(z.ax(Math.floor((void 0 === a7q ? 3 : a7q) - Math.log10(Math.max(y, 1))), 0, 8))
	}, this.a7r = function(y, dL, a7l) {
		return (y * dL).toFixed(a7l)
	}, this.a7s = function(username) {
		var j4, j3 = username.indexOf("[");
		return !(j3 < 0) && 1 < (j4 = username.indexOf("]")) - j3 && j4 - j3 <= 8 ? username.substring(j3 + 1, j4).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a7s;
	this.a7t = function(a2) {
		for (var fp = Math.floor(.5 * a2.length + .5), mU = Math.floor(.5 * (fp - 1)), a5 = 0; a5 < mU; a5++)
			for (var an = -1; an < 2; an += 2) {
				var aV = fp + an * a5;
				if (" " === a2[aV]) return [this.a7u(a2.substring(0, aV)), this.a7v(a2.substring(aV))]
			}
		return [a2.substring(0, fp), a2.substring(fp)]
	}, this.a7v = function(a2) {
		for (var a3 = a2.length, a5 = 0; a5 < a3; a5++)
			if (" " !== a2[a5]) return a2.substring(a5);
		return a2
	}, this.a7u = function(a2) {
		for (var a5 = a2.length - 1; 0 <= a5; a5--)
			if (" " !== a2[a5]) return a2.substring(0, a5 + 1);
		return a2
	}, this.a7w = function(a2, ck) {
		return a2.split("(")[0] + "(🧈 " + ck.toFixed(2) + ")"
	}, this.startsWith = function(a2, a7x) {
		return a2.substring(0, a7x.length) === a7x
	}, this.a7y = function(a2, a7x) {
		var a3 = a2.length;
		return a2.substring(a3 - a7x.length, a3) === a7x
	}, this.zD = function(a4, a7z, a80) {
		var a2 = "",
			a3 = a4.length - 1;
		a80 = a80 || "";
		for (var a5 = 0; a5 < a3; a5++) a2 += a80 + a4[a5] + a80 + ",", (a5 + 1) % a7z == 0 && (a2 += "\n");
		return a2 += a80 + a4[a3] + a80
	}, this.a81 = function(a2, a6, a7) {
		return a2.replace(new RegExp(a6, "g"), a7)
	}
}

function a82() {
	this.a83 = 0, this.aJ = function() {
		this.a83 = 0
	}, this.c = function() {
		if (!this.a83 && k.mF() % 30 == 7 && ar.d1.wH(80) && (i3.performance.a83 = 1)) {
			if (bq.hU) {
				var vr = bs.vs();
				if (hv.vR[vr]) {
					bs.a88(vr);
					var a4 = j9.a89,
						a3 = j9.jB[0];
					if (0 !== a3)
						for (var a8A = Math.min(100 + 10 * (a3 - 1), 400), a5 = 0; a5 < a3; a5++) g6.a4P(a4[a5], a8A)
				}
			}
			g6.a4P(vo[0], 100)
		}
	}
}

function a8B() {
	this.c = function() {
		for (var a8C, zK, sj = bo.h.sj, sd = bo.h.sd, sf = bo.h.sf, a5 = bo.h.s0 - 1; 0 <= a5; a5--) a8C = sd[a5], 0 !== (zK = sj[a5]) && a8C === sf[a5] && (! function(a5, a8E, oB) {
			var ju, player = bo.h.sZ[a5] >> 3,
				oB = a8E + i2.o0[oB] << 2,
				a5 = bo.h.sh[a5];
			if (hw.a8G(player), hy.j1(oB)) ju = bq.g7;
			else {
				if ((ju = hy.oN(oB)) === player) return oB = ar.d1.vy(player, a5), hw.sD(player, a5 - oB, 12);
				if (!jA(player, ju)) return gl.a8H.a0r(player, ju, a5)
			}
			iG.ro(player, ju) || iG.rq(player) ? (fz.jF[player].push(a8E << 2), iG.jG(player, a5, ju), iD.jH(player, !0)) : hw.sD(player, a5, 12)
		}(a5, i2.oq(a8C), zK - 1), bo.zS.sV(a5))
	}, this.zL = function(player, js, oB, jz) {
		if (0 !== oB) {
			var xZ = bq.d3;
			if (ar.d1.q6(xZ) && jA(player, xZ) && player !== xZ && 0 !== fz.oH[xZ].length) {
				var a8F = js + i2.o0[--oB] << 2;
				if (hy.j1(a8F) || jA(player, hy.oN(a8F))) {
					for (var a8I = !1, a5 = 0; a5 < 4; a5++)
						if (a8F = js + i2.o0[a5] << 2, hy.q7(a8F) && !hy.j1(a8F) && hy.oN(a8F) === xZ) {
							a8I = !0;
							break
						} a8I && (bu.qC(719, 0), bu.x1(180, L(101, [fz.fy[player]]), 719, player, ao.a4q, ao.c9, -1, !0, void 0, {
						an: 1,
						jz: jz
					}))
				}
			}
		}
	}
}

function a8J() {
	var a8K, a8L, a8M;

	function a8P(a2L) {
		for (var a5 = a8K - 1; 0 <= a5; a5--) 0 === a8M[a8L[a5]] && fz.lJ[a8L[a5]] >= a2L && a8O(a8L[a5])
	}

	function a8N(player) {
		var dO;
		64 === a8M[player] ? a8M[player] = 6 : (dO = fz.lJ[player], a8M[player] = dO < 1e3 ? 3 : dO < 1e4 ? 2 : dO < 6e4 ? 1 : 0)
	}
	this.aJ = function() {
		a8K = 0, a8L = new Uint16Array(bq.g7), a8M = new Uint8Array(bq.g7)
	}, this.c = function() {
		for (var a5 = a8K - 1; 0 <= a5; a5--) 64 === a8M[a8L[a5]] ? a8N(a8L[a5]) : 0 == a8M[a8L[a5]]-- && (a8N(a8L[a5]), a8O(a8L[a5]));
		16e4 <= fz.lJ[vo[0]] && (a8P(16e4), 3e5 <= fz.lJ[vo[0]]) && a8P(3e5), ar.d1.vu(bq.d3) && (hw.a2D[7] = Math.max(fz.lJ[bq.d3], hw.a2D[7]))
	}, this.a8R = function(player) {
		for (var fp, a5 = a8K - 1; 0 <= a5; a5--)
			if (player === a8L[a5]) {
				for (a8K--, fp = a5; fp < a8K; fp++) a8L[fp] = a8L[fp + 1];
				return
			}
	}, this.jH = function(player, a8S) {
		for (var a5 = a8K - 1; 0 <= a5; a5--)
			if (player === a8L[a5]) return;
		a8L[a8K++] = player, a8M[player] = a8S ? 2 : 64
	}
}

function a8T(data) {
	var aC, a8U, aV, kK;

	function a8V(oC) {
		var a3 = data.data.length;
		if (a3) {
			for (var sT, max = min = parseInt(data.data[0][0]), a5 = 1; a5 < a3; a5++) var a8d = parseInt(data.data[a5][0]),
				min = Math.min(a8d, min),
				max = Math.max(a8d, max);
			sT = oC < 0 ? min + oC : max + 1, aM.iZ(8, aM.fR().wP, new kW(21, {
				gy: data.gy,
				sT: sT,
				sU: sT + Math.abs(oC)
			}))
		}
	}
	this.show = function() {
			aC.show(), this.resize()
		}, this.aR = function() {
			aC.aR()
		}, this.resize = function() {
			aC.resize(), a8U.resize()
		}, this.b6 = function(aV) {
			2 === aV && aC.b7[0].b8()
		}, aV = data.data.length ? 0 : 1, aV = [new aL("⬅️ " + L(1), function() {
			aM.rI()
		}), new aL(L(102), function() {
			a8V(-10)
		}, aV, 0, 1), new aL(L(103), function() {
			a8V(10)
		}, aV, 0, 1), new aL(L(104), function() {
			aM.iZ(11, 10, new a7V({
				gy: data.gy
			}))
		})], kK = [L(105), L(106), L(107), L(108), L(109), L(110), L(111), L(112), L(113), L(114), L(90), L(91), L(115)], aC = new aK(kK[data.gy], aV),
		function() {
			var a5, iy = {
					kE: []
				},
				kE = iy.kE,
				a8X = data.data,
				a3 = a8X.length;
			a3 && 0 === a8X[0][0] && 0 <= (b4 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.gy]) && (aM.h.a8Y[b4] = a8X[0][1]);
			var dL = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.gy],
				a7l = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.gy],
				b4 = [
					[L(116), L(117) + " ↗", L(118)],
					[L(116), L(119), L(120), L(121) + " ↗"],
					[L(116), L(117) + " ↗", L(120)],
					[L(116), L(117) + " ↗", L(120)],
					[L(122), L(123), L(124) + " ↗", L(125) + " ↗", L(126)],
					[L(122), L(123), L(127) + " ↗", L(32) + " ↗", L(128)],
					[L(122), L(123), L(129) + " ↗", L(130) + " ↗", L(33)],
					[L(122), L(123), L(127) + " ↗", L(32) + " ↗", L(131)],
					[L(122), L(123), L(124) + " ↗", L(125) + " ↗", L(126)],
					[L(116), L(117) + " ↗", L(120)],
					[L(116), L(117) + " ↗", L(132)],
					[L(116), L(117) + " ↗", L(120)],
					[L(122), L(123), L(133) + " ↗", L(134) + " ↗", L(135)]
				];
			if (iy.kK = b4[data.gy], iy.kQ = [
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
				][data.gy], 0 === data.gy || 2 === data.gy || 3 === data.gy || 9 === data.gy || 10 === data.gy || 11 === data.gy)
				for (a5 = 0; a5 < a3; a5++) kE.push([{
					y: a8X[a5][0] + 1 + ".",
					dO: 0
				}, {
					y: a8X[a5][1],
					dO: 1,
					dr: a8X[a5][4],
					kV: a8X[a5][3]
				}, {
					y: (dL * a8X[a5][2]).toFixed(a7l),
					dO: 0
				}]);
			else if (12 === data.gy)
				for (a5 = 0; a5 < a3; a5++) {
					var a8b = a8X[a5][3];
					kE.push([{
						y: "" + a8X[a5][0],
						dO: 0
					}, {
						y: "" + a8X[a5][4],
						dO: 0
					}, {
						y: a8X[a5][5],
						dO: 1,
						dr: a8X[a5][1],
						kV: 0
					}, {
						y: a8X[a5][6],
						dO: 1,
						dr: a8X[a5][2],
						kV: 0
					}, {
						y: t0.a6Y(a8b % 16, a8b >> 4),
						dO: 0
					}])
				} else if (1 === data.gy)
					for (a5 = 0; a5 < a3; a5++) kE.push([{
						y: a8X[a5][0] + 1 + ".",
						dO: 0
					}, {
						y: a8X[a5][1],
						dO: 0
					}, {
						y: (dL * a8X[a5][2]).toFixed(a7l),
						dO: 0
					}, {
						y: a8X[a5][3],
						dO: 1,
						dr: a8X[a5][5],
						kV: a8X[a5][4]
					}]);
				else if (4 === data.gy || 5 === data.gy || 6 === data.gy || 7 === data.gy || 8 === data.gy)
				for (a5 = 0; a5 < a3; a5++) {
					var a8c = a8X[a5][5];
					4 === data.gy || 8 === data.gy ? "100%" === (a8c = (a8c % 64 * 100 / (a8c >> 6)).toFixed(0) + "%") && (4 === data.gy ? a8c += " (" + L(136) + ")" : a8c += " (" + L(137) + ")") : 5 === data.gy ? 32768 <= a8c && (a8c = -(a8c -
						32768)) : a8c = (dL * a8c).toFixed(a7l), kE.push([{
						y: "" + a8X[a5][0],
						dO: 0
					}, {
						y: "" + a8X[a5][6],
						dO: 0
					}, {
						y: a8X[a5][7],
						dO: 1,
						dr: a8X[a5][1],
						kV: a8X[a5][2]
					}, {
						y: a8X[a5][8],
						dO: 1,
						dr: a8X[a5][3],
						kV: a8X[a5][4]
					}, {
						y: "" + a8c,
						dO: 0
					}])
				}
			a8U = new kD(aC.cQ, iy)
		}()
}

function a8e(a8f) {
	var qb = document.createElement("div"),
		a8g = document.createElement("div"),
		a8h = [];

	function a8j() {
		n8.qt() || (this.style.backgroundColor = ar.color.kS(ao.cR, 50))
	}

	function a8k() {
		this.style.backgroundColor = ao.cR
	}
	this.aT = function(a8l, a8m) {
			a8h[2].textContent = a8l + 1 + " / " + a8m
		}, this.show = function(qm) {
			a8g.appendChild(qd.gX.transform(qd.nu.a8n(qm, qd.nu.a8o(qm)))), document.body.appendChild(qb)
		}, this.resize = function() {
			var ae = ar.at.cX(.03, .5);
			qb.style.width = 10 * ae + "px", qb.style.font = ar.at.au(1, .75 * ae), ar.at.cd(qb, 4), a8g.style.top = ae + "px", a8g.style.font = ar.at.au(0, .55 * ae), ar.at.cd(a8g, 2), qb.style.height = ae + a8g.offsetHeight + "px";
			for (var a5 = 0; a5 < 3; a5++) ar.at.cd(a8h[a5], 6), a8h[[0, 1, 3][a5]].style.width = 2 * ae + "px";
			for (a5 = 0; a5 < 4; a5++) a8h[a5].style.height = ae + "px", ar.at.cd(a8h[a5], 2);
			a8h[2].style.width = 4 * ae + "px", a8h[1].style.left = 2 * ae + "px", a8h[2].style.left = 4 * ae + "px", a8h[3].style.left = 8 * ae + "px"
		}, this.xv = function() {
			for (var a5 = 0; a5 < 4; a5++) a8h[a5].onclick = null, a8h[a5].onmouseover = null, a8h[a5].onmouseout = null;
			document.body.removeChild(qb), qb = a8g = a8h = null
		}, qb.style.position = "absolute", qb.style.color = ao.ap, qb.style.zIndex = "3", qb.style.right = "0", qb.style.top = "0", a8g.style.position = "absolute", a8g.style.height = "auto", a8g.style.color = ao.ap, a8g.style.backgroundColor = ao
		.cR, a8g.style.left = "0", a8g.style.width = "100%", a8g.style.overflowWrap = "break-word", qb.appendChild(a8g);
	for (var a5 = 0; a5 < 4; a5++) a8h[a5] = document.createElement("div"), a8h[a5].style.position = "absolute", a8h[a5].style.backgroundColor = ao.cR, a8h[a5].style.color = ao.ap, a8h[a5].style.top = "0", a8h[a5].style.display = "flex", a8h[a5]
		.style.justifyContent = "center", a8h[a5].style.alignItems = "center", a8h[a5].style.userSelect = "none", a8h[a5].style.outline = "none", a8h[a5].style.font = "inherit", 2 !== (a8h[a5].a8i = a5) && (a8h[a5].onclick = a8f, a8h[a5]
			.onmouseover = a8j, a8h[a5].onmouseout = a8k), qb.appendChild(a8h[a5]);
	a8h[0].textContent = "◀", a8h[1].textContent = "▶", a8h[3].textContent = "✖"
}

function xt() {
	var a8p = [],
		a8q = [],
		a8r = [];

	function a8t(qm) {
		for (var ml = qm.ml, a8s = [];;) {
			var aV = function a8y(ml, position) {
				position = ml.indexOf("@", position);
				if (position < 0) return -1;
				var a2 = ml.substring(position + 1, position + 6);
				if (5 !== a2.length) return a8y(ml, position + 1);
				if (ar.d5.startsWith(a2, "room")) return a8y(ml, position + 1);
				var a9F = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!a9F.test(a2)) return a8y(ml, position + 1);
				a9F = ml.substring(position + 6, position + 7);
				if (1 !== a9F.length) return position;
				a2 = new RegExp("^[ :!.]+$");
				if (!a2.test(a9F)) return a8y(ml, position + 1);
				return position
			}(ml, 0);
			if (-1 === aV) {
				a8s.push(a8z(ml, qm));
				break
			}
			0 === aV ? a8s.push(a90(ml.substring(1, 6), qm, aV)) : (a8s.push(a8z(ml.substring(0, aV), qm)), a8s.push(a90(ml.substring(aV + 1, aV + 6), qm, aV))), ml = ml.substring(aV + 6)
		}
		return a8s
	}

	function a90(a2, qm, aV) {
		var a91 = function(a2) {
				var dr = h0.kY.xl(a2),
					a91 = qd.qi.a9C(dr);
				if (a91) {
					for (a8p.push(a91); 75 < a8p.length;) a8p.shift();
					return a91
				}
				for (var a9D = qd.qi.a9D, a5 = a9D.length - 1; 0 <= a5; a5--)
					if (a91 = a9D[a5], dr === a91.dr) return a8p.push(a91), a91;
				for (a5 = a8p.length - 1; 0 <= a5; a5--)
					if (a91 = a8p[a5], dr === a91.dr) return a8p.push(a91), a91;
				return qd.qi.a9E(dr, a2, 1, 999999, 999999, 0, 0, 0, 0)
			}(a2),
			a2 = (0 === aV && 0 === qm.a8u.id && qm.a8v && (qm.fontSize = qd.nu.a93(a91.qr, a91.wF), qm.a8x = qd.nu.a94(a91.wF)), document.createElement("span"));
		return a2.textContent = function(a91, qm, aV) {
			if (a91.a97) return a91.a97--, aV = 2 === qm.a8u.id || (3 === qm.a8u.id || 4 === qm.a8u.id) && 0 !== aV, a91.username + (aV ? " (" + a91.a99 + ")" : "");
			if (qm.a8u.a9A) return "Redacted " + dn.kY.d6(a91.dr, 2);
			return a91.username
		}(a91, qm, aV), a2.style.display = "inline-block", a2.style.color = qd.nu.qq(a91.qr), a2.style.cursor = "pointer", a2.style.margin = "0", a2.style.font = "inherit", a2.style.minWidth = a2.style.minHeight = "1em", qd.nu.qs(a91) && (a2
			.style.textDecoration = "underline"), qd.nu.a94(a91.wF) && (a2.style.fontWeight = "bold"), a2.onclick = function(cb) {
			qd.xg.a96(cb, a91)
		}, n8.qt() || (a2.onmouseover = function(cb) {
			qd.qe.qu(cb, a91)
		}), a8q.push(a2), a2
	}

	function a8z(ml, qm) {
		var qo = document.createElement("span");
		return qo.textContent = ml, qo.style.color = qm.a9B, qo.style.margin = "0", qo.style.font = "inherit", qo
	}

	function a9M(a91, a9L, dr) {
		dr !== a91.dr || a91.a99 || (a91.a99 = a91.username, a91.a97 = 3, a91.username = a9L)
	}
	this.xv = function() {
		for (var a5 = 0; a5 < a8q.length; a5++) a8q[a5].onclick = a8q[a5].onmouseover = null;
		a8r = a8q = null
	}, this.transform = function(qm) {
		for (var dx = document.createElement("div"), a8s = a8t(qm), a5 = 0; a5 < a8s.length; a5++) dx.appendChild(a8s[a5]);
		0 === qm.a8u.id && (dx.vx143 = qm.a8u, a8r.push(dx)), dx.style.margin = "0.6em 0.6em", qm.a8v && (dx.style.marginLeft = dx.style.marginRight = "inherit"), dx.style.font = "inherit";
		var a8w = 0 < qm.a8u.id;
		return qm.a8x && (dx.style.fontWeight = "bold"), a8w && (dx.style.paddingLeft = "0.7em"), a8w && (dx.style.fontStyle = "italic"), dx.style.fontSize = qm.fontSize.toFixed(2) + "em", dx
	}, this.a9I = function(a9J) {
		if (a9J && (2 === a9J.id && 1 === a9J.a9K || 3 === a9J.id && 2 === a9J.a9K)) {
			var dr = 3 === a9J.id ? a9J.target : a9J.dr;
			if (!qd.qi.a9C(dr)) {
				for (var a9L = "Redacted " + dn.kY.d6(dr, 2), a9D = qd.qi.a9D, a5 = a9D.length - 1; 0 <= a5; a5--) a9M(a9D[a5], a9L, dr);
				for (a5 = a8p.length - 1; 0 <= a5; a5--) a9M(a8p[a5], a9L, dr)
			}
		}
	}, this.a9N = function(dr) {
		for (var a9O = a8r, a5 = a9O.length - 1; 0 <= a5; a5--) {
			var iy = a9O[a5];
			if (iy.vx143.dr === dr) {
				for (; iy.firstChild;) iy.removeChild(iy.firstChild);
				iy.vx143.ml = "[Redacted Message]";
				for (var a8s = a8t(qd.nu.a8n(iy.vx143, qd.nu.a8o(iy.vx143))), fp = 0; fp < a8s.length; fp++) iy.appendChild(a8s[fp]);
				a9O.splice(a5, 1)
			}
		}
	}
}

function uT() {
	this.gV = function(a9P, b4, pk) {
		var cD = a9P.height,
			m9 = ar.at.pj(cD, cD),
			gq = ar.at.getContext(m9);
		return function(af, gq, pk) {
			gq.fillStyle = pk, gq.beginPath(), gq.arc(af / 2, af / 2, .47 * af, 0, 2 * Math.PI), gq.fill()
		}(cD, gq, pk), gq.drawImage(a9P, -b4 * cD, 0), m9
	}, this.a9R = function(a9S) {
		var gq, vU, cD = a9S.height;
		return a9S.width === cD && (vU = (gq = ar.at.getContext(a9S, !0)).getImageData(0, 0, cD, cD), ar.fH.a9T(vU.data, cD, cD, .9), gq.putImageData(vU, 0, 0)), a9S
	}
}

function a9U() {
	this.ai = 0, this.gap = 0, this.yf = 0, this.yb = 0, this.aJ = function() {
		this.resize()
	}, this.resize = function() {
		this.ai = .0022 * ar.at.a6A(.5) * f.bH, this.yf = this.ai / f.aW, this.gap = Math.max(Math.floor((bE.bF.bG() ? .0114 : .01296) * f.bH), 2), this.yb = this.gap / f.aW
	}
}

function wV() {
	var aC, rH, kI;
	this.show = function() {
		aC.show(), this.resize()
	}, this.aR = function() {
		aC.aR()
	}, this.resize = function() {
		aC.resize(), rH.resize()
	}, this.b6 = function(aV) {
		2 === aV && aC.b7[0].b8()
	}, aC = new aK(L(138), [new aL("⬅️ " + L(1), function() {
		aM.iZ(7, aM.wp(7).wP)
	}), new aL(L(139), function() {
		aP.aS.aT(105, h0.kY.a9W(rH.a9X[0].a9Y[0].cb.value, 5)), aP.aS.aT(106, h0.kY.a9W(rH.a9X[1].a9Y[0].cb.value, 8)), aM.iZ(8, aM.wp(7).wP, new kW(18))
	})]), rH = new rJ(aC.cQ, ((kI = []).push(function() {
		var rM = new rN;
		return rM.rO(L(140)), rM.rR(new rQ({
			value: "",
			b4: -1
		})), rM
	}()), kI.push(function() {
		var rM = new rN,
			a9b = (rM.rO(L(141)), new rQ({
				value: "",
				b4: -1
			}));
		return a9b.cb.type = "password", rM.rR(a9b), rM.rR(new rY([new aL(L(142), function(cb) {
			return cb.textContent === L(142) ? (cb.textContent = L(143), a9b.cb.type = "text") : (cb.textContent = L(142), a9b.cb.type = "password"), !0
		}).button])), rM
	}()), kI))
}

function a9c() {
	this.g0 = new Array(bq.g7), this.fy = new Array(bq.g7), this.lq = new Uint8Array(bq.g7), this.iN = new Uint8Array(bq.g7), this.lR = new Uint16Array(bq.g7), this.lS = new Uint16Array(bq.g7), this.lU = new Uint16Array(bq.g7), this.lV =
		new Uint16Array(bq.g7), this.lJ = new Uint32Array(bq.g7), this.a9d = new Uint32Array(bq.g7), this.lQ = new Uint32Array(bq.g7), this.jF = null, this.rD = null, this.oH = null, this.ik = null, this.rr = new Uint16Array(bq.g7), this.a9e =
		new Uint16Array(bq.g7), this.a9f = new Uint16Array(bq.g7), this.x0 = new Uint16Array(bq.g7), this.a9g = new Uint8Array(bq.g7), this.w0 = new Uint16Array(bq.g7), this.aJ = function() {
			this.g0.fill(""), this.fy.fill(""), this.lq.fill(0), this.iN.fill(0), this.lR.fill(0), this.lS.fill(0), this.lU.fill(0), this.lV.fill(0), this.lJ.fill(0), this.a9d.fill(0), this.lQ.fill(0), this.jF = new Array(bq.g7), this.rD = new Array(
				bq.g7), this.oH = new Array(bq.g7), this.ik = new Array(bq.g7), this.rr.fill(0), this.a9e.fill(0), this.a9f.fill(0), this.x0.fill(0), this.a9g.fill(0), this.w0.fill(0)
		}
}

function we() {
	var yM, z2, z3, bD;

	function z4() {
		z6(), 1 !== bq.data.colorsType && (bq.data.colorsData = null), aM.wq()[19] = null, aM.rI()
	}

	function a9h() {
		z6(), aM.iZ(21)
	}

	function z6() {
		1 === bq.data.gameMode ? bq.hh.hn() : 0 === bq.data.gameMode && 1 === bq.data.colorsType && ar.t4.z7(z3.yX(), bq.data.colorsData, 262143)
	}
	this.show = function() {
		yM.show(), this.resize()
	}, this.aR = function() {
		yM.aR()
	}, this.resize = function() {
		yM.resize(), z2.resize()
	}, this.b6 = function(aV) {
		2 === aV && yM.b7[0].b8()
	}, bD = [new aL("⬅️ " + L(1), z4)], 1 === bq.data.gameMode && bD.push(new aL(L(144), a9h, 1, 1)), yM = new aK(L(145), bD), z2 = new rJ(yM.cQ, (function(kI) {
		var rM = new rN;
		rM.rO(L(47)), 0 === bq.data.gameMode && (rM.zB(new zC({
			xx: [L(58), L(50)],
			value: bq.data.colorsType
		}, function(b4) {
			z6(), bq.data.colorsType = b4, 1 !== bq.data.colorsType || bq.data.colorsData && bq.data.colorsData.length === bq.g7 || (bq.data.colorsData = new Uint32Array(bq.g7)), aM.iZ(21)
		})), rM.rR(new a2O));
		rM.rR(new a2P({
			value: bq.data.selectableColor
		}, L(146), function(value) {
			bq.data.selectableColor = value
		})), kI.push(rM)
	}(bD = []), 0 === bq.data.gameMode ? 1 === bq.data.colorsType && function(kI) {
		var rM = new rN;
		rM.rO("Data"), (z3 = new yR(0, 1, 0, 1)).yU(ar.d5.zD(bq.data.colorsData, 1)), rM.rR(z3), kI.push(rM)
	}(bD) : (bq.hh.hn(), bD.push(function() {
		var rM = new rN;
		rM.rO(L(147));
		for (var a5 = 0; a5 < hv.f3.length; a5++) {
			var eE = (a5 + 1) % hv.f3.length,
				cb = rM.a9j((0 == eE ? "" : "Team ") + hv.f3[eE]);
			a5 && (cb.style.marginTop = "0.5em"), rM.rR(new rQ({
				b4: -1,
				value: bq.data.teamPlayerCount[eE]
			}, 1, 0, function(cb) {
				yM.b7[1].e0(0);
				var playerCount = z.ax(Math.floor(cb.target.value), 0, 512);
				cb.target.value = playerCount, bq.data.teamPlayerCount[cb.target.a9k] = playerCount
			})).cb.a9k = eE
		}
		return rM
	}())), bD))
}

function a9l() {
	this.iX = new a9m, this.aJ = function() {
		bE.bF.a9n()
	}, this.a9o = function() {
		return aP.aQ.data[160].value
	}
}

function a9p() {
	var b4 = 0,
		a9q = new Uint16Array(32);

	function remove(pn) {
		var a5;
		for (b4 -= 2, a5 = pn; a5 < b4; a5 += 2) a9q[a5] = a9q[a5 + 2], a9q[a5 + 1] = a9q[a5 + 3]
	}
	this.aJ = function() {
		b4 = 0
	}, this.c = function() {
		var a5, ju, cj;
		if (0 !== b4)
			if (0 === fz.iN[bq.d3] || iG.a29(bq.d3) === iG.r3(bq.d3)) b4 = 0;
			else
				for (a5 = b4 - 2; 0 <= a5; a5 -= 2)(ju = a9q[a5]) < bq.g7 && 0 === fz.iN[ju] ? remove(a5) : (cj = a9q[a5 + 1], (bq.g7 <= ju && a9r(bq.d3) || ju < bq.g7 && a9s(bq.d3, ju)) && (gl.gm.py(cj, ju), remove(a5)))
	}, this.pz = function(ju, cj) {
		! function(ju, cj) {
			var a5;
			for (a5 = 0; a5 < b4; a5 += 2)
				if (a9q[a5] === ju) return a9q[a5 + 1] = Math.min(a9q[a5 + 1] + cj, 1023), 1;
			return
		}(ju, cj) && 32 !== b4 && (a9q[b4] = ju, a9q[b4 + 1] = cj, b4 += 2)
	}
}

function a9u() {
	this.a9v = [L(148), L(149), L(150), L(151), L(152), L(153), L(154), L(155), L(156), L(157), L(158), L(159), L(160), L(161), L(162)];
	var a9w = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", ""];
	this.a6J = new Array(a9w.length), this.aJ = function() {
		var a4 = aP.aQ.data[155].value.split(";"),
			ei = a4.length;
		if (function() {
				for (var a3 = a9w.length, a5 = 0; a5 < a3; a5++) a6I.a6J[a5] = a9w[a5]
			}(), !(ei > a9w.length))
			for (var a5 = 0; a5 < ei; a5++) a4[a5].length && (this.a6J[a5] = a4[a5])
	}, this.a9y = function(b4, code) {
		for (var a6J = this.a6J, a9z = a9w, a2 = (a6J[b4] = code, ""), a3 = a6J.length, aA0 = [], a5 = 0; a5 < a3; a5++) aA0.push(a6J[a5] === a9z[a5] ? "" : a6J[a5]);
		a3--;
		for (a5 = 0; a5 < a3; a5++) a2 += aA0[a5] + ";";
		aP.aS.aT(155, a2 += aA0[a3])
	}, this.aA1 = function() {
		aP.aS.aT(155, ""), this.aJ()
	}, this.aV = function(code, b4) {
		return code === this.a6J[b4] || code === this.a6J[b4 + 1]
	}
}

function xo() {
	function aA6(aA9) {
		qd.h.aA3 && 1 === qd.h.qh[2] && aM.wp(29).aAA(), qd.h.aA3 = 0, aM.wp(29).aAB(), 0 !== qd.h.aA2[qd.h.qh[0]].jJ && !aA9 || aM.wp(29).aAC(), qd.qe.aAD()
	}
	this.aA2 = new Array(4), this.qh = [0, 0, 1, 0], this.aA3 = 0, this.aA4 = [0, 0], this.aJ = function() {
		for (var a5 = 0; a5 < this.aA2.length; a5++) this.aA2[a5] = new jI;
		this.qh[0] = aP.aQ.data[158].value
	}, this.aA5 = function() {
		aA6(!0)
	}, this.aA7 = function() {
		for (var a5 = 0; a5 < qd.h.aA2.length; a5++) {
			var aAE = qd.h.aA2[a5];
			0 === aAE.jJ ? aAE.jT = 0 : (aAE.jO = Math.max(aAE.jO - aAE.jT % 2, 0), aAE.jT++)
		}
		aA6(!1)
	}, this.aAF = function(aAG) {
		this.qh[0] !== aAG || this.qh[2] || aM.wp(29).aAH()
	}
}

function aAI() {
	function aAK(zT, aAJ) {
		if (! function(zT, aAP) {
				var o4 = i2.oq(zT),
					aAQ = Math.abs(i2.o6(aAP) - i2.o6(o4)),
					o4 = Math.abs(i2.o8(aAP) - i2.o8(o4));
				return 0 !== Math.max(aAQ, o4) && (function(zH, zT, aAQ, aAR) {
					var aAT = i2.oT(zH),
						zH = i2.oV(zH),
						aAV = i2.oT(zT),
						zT = i2.oV(zT),
						aAV = aAV - aAT,
						zT = zT - zH,
						aAZ = Math.abs(aAV),
						aAa = Math.abs(zT),
						aAV = 0 < aAV ? 1 : 3,
						zT = 0 < zT ? 2 : 0;
					aAa < aAZ ? aAd(aAT, zH, aAT + aAZ, zH + aAa, aAV, zT, aAQ) : aAd(zH, aAT, zH + aAa, aAT + aAZ, zT, aAV, aAR)
				}(zT, i2.op(aAP), aAQ, o4), !0)
			}(zT, aAJ)) return !1;
		if (0 === j9.aAM[0]) return !!hy.qK(aAJ << 2);
		if (! function(aAP) {
				if (hy.qK(aAP << 2)) return 1;
				return function(aAP) {
					var a5, oB, zF = bo.h.zF,
						aAi = i2,
						a3 = j9.aAM[0],
						aAj = 4 * aAP;
					for (a5 = a3 - 1; 0 <= a5; a5--) {
						oB = zF[a5];
						var aAk = aAj;
						if (aAj = aAi.ov(aAj, oB + 2 & 3), hy.qK(aAj)) return j9.aAM[0] = a5, j9.qJ[1] = aAj >> 2, j9.qJ[2] = 1 + oB, j9.qJ[4] = aAk, 1
					}
					return
				}(aAP)
			}(aAJ)) return !1;
		if (j9.qJ[2] && hy.iz(j9.qJ[4])) return !1;
		var a5, aAJ = i2.oq(zT),
			fX = a3r,
			zF = bo.h.zF,
			a3 = j9.aAM[0] - 1,
			aAj = 4 * aAJ,
			o1 = i2.o1;
		for (a5 = 0; a5 < a3; a5++)
			if (aAj += o1[zF[a5]], 0 !== fX[aAj + 3] || 2 !== fX[aAj + 2]) return !!void 0;
		return !!1
	}

	function aAd(aAT, aAU, aAV, aAW, aAb, aAc, aAQ) {
		for (var aZ, zF = bo.h.zF, j7 = 0, aAe = 0, ae = aAW - aAU, af = aAV - aAT, aAf = aAT % 16, a5 = 1; a5 <= aAQ; a5++) zF[j7++] = aAb, zF[j7] = aAc, j7 += (aZ = (ae * (aAf + (a5 << 4)) + .5) / af >> 4) - aAe, aAe = aZ;
		j9.aAg(j9.aAM, j7)
	}
	this.s5 = function(player, aAJ) {
		var oB, o4, o3 = i2.oD(player, aAJ);
		return o3 !== aAJ && (oB = i2.o2(o3, aAJ), o4 = i2.ou(o3, oB), !(!hy.qK(o4 << 2) && (oB = i2.oA(o3, aAJ, oB), o4 = i2.ou(o3, oB), !hy.qK(o4 << 2)) || (j9.qJ[0] = o4, j9.qJ[1] = aAJ, j9.qJ[2] = 0, o4 !== aAJ && (!aAK(i2.op(o4), aAJ) ||
			0 !== j9.qJ[2] && i2.oM(player, j9.qJ[1] + i2.o0[j9.qJ[2] - 1] << 2)))))
	}, this.sB = function(aAJ) {
		var zH = bo.h.sd[j9.qJ[3]];
		return j9.qJ[1] = aAJ, j9.qJ[2] = 0, aAK(zH, aAJ)
	}
}

function a9m() {
	var aAm = 2e4;
	this.show = function() {
		if (k.e6 < aAm) return !1;
		aAm = k.e6 + 135e4, 2 === dX.hp && bE.bF.aAn(Math.floor(135e4))
	}
}

function hg() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function uU() {
	this.dc = function(y) {
		return [y >> 12 & 63, y >> 6 & 63, 63 & y]
	}, this.aAo = function(y) {
		for (var a4 = this.dc(y), a5 = 0; a5 < 3; a5++) a4[a5] = ~~(4.05 * a4[a5]);
		return a4
	}, this.aAp = function(y) {
		y = this.aAo(y);
		return ar.color.a4R(y[0], y[1], y[2])
	}, this.aAq = function(a4) {
		for (var a5 = 0; a5 < 3; a5++) a4[a5] = ~~(a4[a5] / 4.04);
		return (a4[0] << 12) + (a4[1] << 6) + a4[2]
	}, this.a4R = function(al, am, an) {
		return "rgb(" + al + "," + am + "," + an + ")"
	}, this.kM = function(al, am, an, fp) {
		return "rgba(" + al + "," + am + "," + an + "," + fp.toFixed(3) + ")"
	}, this.aAr = function(aV) {
		for (var a4 = aV.split("(")[1].split(","), ts = j9.ts, a5 = 0; a5 < 3; a5++) ts[a5] = parseInt(a4[a5]);
		return 4 === a4.length ? ts[3] = 255 * parseFloat(a4[3].slice(0, -1)) : ts[3] = 255, ts
	}, this.kS = function(aAs, iy) {
		for (var a4 = aAs.slice(aAs.indexOf("(") + 1, aAs.indexOf(")")).split(","), ts = j9.ts, a5 = 0; a5 < 3; a5++) ts[a5] = z.ax(parseInt(a4[a5].trim(), 10) + iy, 0, 255);
		return 3 === a4.length ? this.a4R(ts[0], ts[1], ts[2]) : (aAs = parseFloat(a4[3].trim()), this.kM(ts[0], ts[1], ts[2], aAs = 0 === aAs ? .3 : aAs))
	}, this.aAt = function(a4) {
		for (var a2 = "#", a5 = 0; a5 < 3; a5++) {
			var al = a4[a5].toString(16);
			a2 += 1 === al.length ? "0" + al : al
		}
		return a2
	}, this.aAu = function(a2) {
		var al, am;
		return a2.length < 7 ? ao.aq : (al = parseInt(a2.slice(1, 3), 16), am = parseInt(a2.slice(3, 5), 16), a2 = parseInt(a2.slice(5, 7), 16), this.a4R(al, am, a2))
	}
}

function wL() {
	this.aQ = {}, this.a8Y = new Array(7), this.wZ = null, this.wX = null, this.aAv = 0, this.aAw = [0, 0], this.mp = function() {
		aM.iZ(5, 5)
	}, this.iY = function() {
		aM.mo(), e.aJ()
	}, __fx.customLobby.setJoinFunction(() => {
		aM.mo(), e.aJ()
	}), this.aN = function() {
		aM.iZ(0 === m.bS() ? 5 : 0)
	}, this.aAx = function() {
		if (1 === aP.aQ.data[130].value) aM.iZ(8, aM.fR().wP, new kW(24, {
			aAy: aP.aQ.data[125].value,
			sT: aP.aQ.data[128].value,
			sU: aP.aQ.data[129].value
		}));
		else {
			for (var a4 = (a4 = aP.aQ.data[126].value.split(",")).slice(0, 10), a5 = 0; a5 < a4.length; a5++) a4[a5] = a4[a5].trim().slice(0, 7).toUpperCase();
			1 === a4.length && 0 === a4[0].length && (a4 = []), aM.iZ(8, aM.fR().wP, new kW(23, {
				aAy: aP.aQ.data[125].value,
				aAz: a4
			}))
		}
	}, this.aB0 = function(wP, target) {
		aM.iZ(4, wP, new mn("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + gZ.aB1 +
			"' target='_blank'>" + gZ.aB1 + "</a>", !1, [new aL("⬅️ " + L(1), function() {
				aM.iZ(wP)
			}), new aL("✅ Accept", function() {
				aP.aS.aT(140, 1), 0 === target ? aM.iZ(2, wP) : aM.iZ(8, wP, new kW(target))
			})]))
	}, this.ur = function() {
		for (var a5 = 0; a5 < 7; a5++) this.a8Y[a5] = h0.h6.h7(gv.gz(5));
		this.a8Y[1] = "[" + this.a8Y[1] + "]", 5 === aM.fQ && (aM.fR().fS.aT(this.a8Y), aM.fR().resize())
	}
}

function aB2() {
	function aB4() {
		if (2 === bq.dM) return 1;
		bx.aB7(), bq.dM = 2, bq.hN = bq.hL
	}

	function aB5() {
		hl.aB8.ja(), c4.show(1 === bq.hd, !1, 2 === bq.hd), hl.result.ja(), hl.aB9.c(), hl.aBA.c(), bu.aBB(!0), bu.mK(247), bu.mK(956), bu.mK(957), bv.bR(!0), by.bR(!0), bx.bR(), bt.nR(), bq.cq && k.vA.a5w(), k.l = !0, i1.aBC(), bE.bF.setState(0)
	}
	this.aB3 = function() {
		aB4() || (bq.hc = 2, aB5())
	}, this.aB6 = function() {
		aB4() || (bq.hc = 1, aB5())
	}
}

function aBD() {
	this.j5 = null, this.j6 = 0, this.i9 = function() {
		for (this.j6 = 0, a5 = bq.g7 - 1; 0 <= a5; a5--) 0 !== fz.iN[a5] && this.j6++;
		this.j5 = new Uint16Array(this.j6);
		for (var a3 = 0, a5 = 0; a5 < bq.g7; a5++) 0 !== fz.iN[a5] && (this.j5[a3++] = a5)
	}, this.aBE = function() {
		for (var lJ = fz.lJ, a9d = fz.a9d, a9g = fz.a9g, j5 = i8.j5, a5 = i8.j6 - 1; 0 <= a5; a5--) {
			var dO, cE = j5[a5];
			lJ[cE] <= z.a0(a9d[cE], 4) ? aBJ.aBK(cE) : lJ[cE] >= a9d[cE] ? (dO = lJ[cE], 250 <= (a9d[cE] = dO) && (a9g[cE] = 1)) : a9d[cE] -= Math.max(1, z.a0(a9d[cE] - lJ[cE], 1e3))
		}
		this.aBG()
	}, this.aBG = function() {
		for (var iN = fz.iN, aBH = this.j5, aBI = this.j6, a5 = aBI - 1; 0 <= a5; a5--) 0 === iN[aBH[a5]] && (aBH[a5] = aBH[--aBI]);
		this.j6 = aBI
	}
}

function aBL() {
	var gJ = 32,
		gI = new Array(2);

	function pj(aV) {
		var ag, aZ, js, lb, la, cD = gJ,
			m9 = ar.at.pj(cD, cD),
			gq = ar.at.getContext(m9, !0),
			vU = ar.at.getImageData(gq, cD, cD),
			fX = vU.data,
			ei = (cD >> 1) - .5,
			aBM = Math.sqrt(ei * ei);
		for (fX.fill(255), aZ = 0; aZ < cD; aZ++)
			for (ag = 0; ag < cD; ag++) la = ag - ei, lb = aZ - ei, js = 4 * (aZ * cD + ag), la = 714 * (aBM - Math.sqrt(la * la + lb * lb)) / aBM, fX[2 + js] = aV, fX[3 + js] = 255 < la ? 0 : la;
		return gq.putImageData(vU, 0, 0), m9
	}
	this.qB = -1, this.aJ = function() {
		this.qB = -1, gI[0] || (gI[0] = pj(255), gI[1] = pj(0))
	}, this.vZ = function(gq, gr, ag, aZ, al, a5) {
		ar.d1.q6(bq.d3) && (gq.setTransform(gr *= 4 / 3 * .625, 0, 0, gr, ag - (al *= 4 / 3), aZ - al), gq.drawImage(gI[+(bo.h.si[a5] === this.qB)], 0, 0))
	}
}

function aBN(du) {
	var qb = document.createElement("div"),
		aBO = document.createElement("div"),
		a5P = (this.ag = 0, this.aZ = 0);

	function aBR() {
		qd.xg.aR()
	}
	this.bD = du, this.show = function(ag, aZ, aBT) {
		if (a5P) return [0, 0];
		a5P = 1, this.ag = ag, this.aZ = aZ,
			function(self, aBT) {
				var af = ar.at.cX(.16, .7),
					ae = du.length * af / 3,
					aBV = f.af / f.aW,
					aBW = f.ae / f.aW,
					dL = Math.min(1, Math.min(aBV / af, aBW / ae));
				af *= dL, ae *= dL, aBT && (self.ag += ar.at.cX(.03, .5)), self.ag = z.ax(self.ag, 0, aBV - af), self.aZ = z.ax(self.aZ, 0, aBW - ae), aBO.style.left = self.ag + "px", aBO.style.top = self.aZ + "px", aBO.style.width = af + "px",
					aBO.style.height = ae + "px", aBO.style.font = ar.at.au(0, .34 * ae / du.length), ar.at.cd(aBO, 5);
				for (var a5 = 1; a5 < du.length; a5++) ar.at.cd(du[a5].button, 8)
			}(this, aBT), document.body.appendChild(qb)
	}, this.aR = function() {
		a5P && (a5P = 0, qb.removeEventListener("click", aBR), document.body.removeChild(qb))
	};
	for (var a5 = 0; a5 < du.length; a5++) new aBP("" + (1 + a5), du[a5].button, 0, 1);
	qb.style.position = "fixed", qb.style.top = "0", qb.style.left = "0", qb.style.width = "100%", qb.style.height = "100%", qb.style.zIndex = "5", aBO.style.position = "absolute",
		function() {
			for (var aBS = (100 / du.length).toFixed(2) + "%", a5 = 0; a5 < du.length; a5++) du[a5].button.style.width = "100%", du[a5].button.style.height = du[a5].button.style.maxHeight = aBS, du[a5].button.style.padding = "0.0em 0.9em", aBO
				.appendChild(du[a5].button)
		}(), qb.appendChild(aBO), qb.addEventListener("click", aBR)
}

function aBX() {
	var aBY = !1,
		bc = 0,
		af = 0,
		cG = 0,
		gap = 0,
		canvas = null,
		c8 = null,
		aBZ = null;

	function aBb() {
		for (var aBh, aBf = 0, a3 = 0, aV = Math.floor(af / 2), al = Math.floor(cG / 2), aBg = 1.5 * Math.PI, a5 = bq.hV; 0 <= a5; a5--) a3 += aBZ[a5], 0 === aBZ[a5] && aBf++;
		if (aBY = !1, c8.clearRect(0, 0, af, af), c8.fillStyle = ao.c9, c8.fillRect(0, 0, af, af), c8.fillStyle = ao.ap, c8.fillRect(0, 0, af, gap), c8.fillRect(0, 0, gap, af), c8.fillRect(af - gap, 0, gap, af), c8.fillRect(0, af - gap, af, gap), 0 <
			a3)
			if (aBf === bq.hV) {
				for (a5 = bq.hV; 0 <= a5; a5--)
					if (0 < aBZ[a5]) {
						! function(a5, aV, al) {
							c8.fillStyle = hv.aBo[hv.vR[a5]], c8.beginPath(), c8.arc(aV, aV, al, 0, 2 * Math.PI), c8.fill()
						}(a5, aV, al);
						break
					}!
				function(aV) {
					var fontSize = aV / 3;
					c8.font = ar.at.au(1, fontSize), c8.fillStyle = ao.ap, c8.fillText("100%", aV, aV + .1 * fontSize)
				}(aV)
			} else {
				for (a5 = 0; a5 <= bq.hV; a5++) 0 < aBZ[a5] && (! function(a5, aV, al, aBg, aBh) {
					c8.fillStyle = hv.aBo[hv.vR[a5]], c8.beginPath(), c8.arc(aV, aV, al, aBg, aBh), c8.lineTo(aV, aV), c8.fill()
				}(a5, aV, al, aBg, aBh = aBg + 2 * Math.PI * aBZ[a5] / a3), function(aV, al, aBg, aBh) {
					var y = (aBh - aBg) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * al * Math.min(y, .37);
					fontSize < 8 || (aBg = (aBg + aBh) / 2, aBh = (__fx.settings.detailedTeamPercentage ? (100 * y).toFixed(2) : Math.floor(100 * y + .5)) + "%", al *= .525 - Math.max(.6 * (y - .7), 0), c8.font = ar.at.au(1, fontSize), c8
						.fillStyle = ao.ap, c8.fillText(aBh, aV + Math.cos(aBg) * al, aV + Math.cos(aBg + 1.5 * Math.PI) * al))
				}(aV, al, aBg, aBh), 0 !== a5 && aBm(aV, al, aBg), aBg = aBh);
				aBm(aV, al, 1.5 * Math.PI)
			}!
		function(aV, al) {
			c8.beginPath(), c8.arc(aV, aV, al, 0, 2 * Math.PI), c8.stroke()
		}(aV, al)
	}

	function aBm(aV, al, sn) {
		c8.beginPath(), c8.moveTo(aV, aV), c8.lineTo(aV + Math.cos(sn) * al, aV + Math.cos(sn + 1.5 * Math.PI) * al), c8.stroke()
	}
	this.aJ = function() {
		if (bq.hU) {
			bc = 0, aBZ = new Uint32Array(bq.hV + 1);
			for (var a5 = bq.hV; 0 <= a5; a5--) aBZ[a5] = 0;
			for (a5 = i8.j6 - 1; 0 <= a5; a5--) aBZ[hv.va[i8.j5[a5]]] += 1;
			this.resize()
		} else aBZ = c8 = canvas = null
	}, this.a7O = function() {
		return af
	}, this.resize = function() {
		bq.hU && (af = Math.floor(bE.bF.bG() && !bq.br ? .18 * f.min : .13 * f.bH), af = (af *= 1 + (.5 + .2 * bE.bF.bG()) * bq.br) + af % 2, cG = Math.floor(7 * af / 8), (canvas = canvas || document.createElement("canvas")).width = af, canvas
			.height = af, c8 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * af), c8.lineWidth = gap, c8.strokeStyle = ao.ap, ar.at.textAlign(c8, 1), ar.at.textBaseline(c8, 1), aBb())
	}, this.wJ = function() {
		var dO, vr = this.vs();
		return hv.vR[vr] || (vr = function() {
			for (var vr = -1, a5 = bq.hV; 1 <= a5; a5--)(-1 === vr || aBZ[a5] > aBZ[vr]) && (vr = a5);
			return vr
		}(), dO = fz.lJ[vo[0]], -1 !== vr && aBZ[vr] > dO) ? aBZ[vr] : dO
	}, this.aBd = function() {
		return bc = 31, this.c(), this.vs()
	}, this.vs = function() {
		for (var vr = 0, a5 = bq.hV; 0 < a5; a5--) aBZ[a5] > aBZ[vr] && (vr = a5);
		return vr
	}, this.a88 = function(zo) {
		for (var gi = 0, j5 = i8.j5, va = hv.va, a3 = i8.j6, a89 = j9.a89, a5 = 0; a5 < a3; a5++) {
			var cE = j5[a5];
			va[cE] === zo && (a89[gi++] = cE)
		}
		j9.jB[0] = gi
	}, this.vp = function() {
		for (var gi = 0, a5 = bq.hV; 0 <= a5; a5--) gi += 0 < aBZ[a5];
		return gi
	}, this.c = function() {
		if (bq.hU && 32 <= ++bc) {
			bc = 0;
			for (var a5 = bq.hV; 0 <= a5; a5--) aBZ[a5] = 0;
			for (a5 = i8.j6 - 1; 0 <= a5; a5--) aBZ[hv.va[i8.j5[a5]]] += fz.lJ[i8.j5[a5]];
			aBY = !0
		}
	}, this.nH = function() {
		bq.hU && aBY && aBb()
	}, this.n = function() {
		bq.hU && (bq.br ? ah.drawImage(canvas, ab.gap, ab.gap) : ah.drawImage(canvas, ab.gap, a7P + 2 * ab.gap))
	}
}

function aBp() {
	var tk, ae, aBq, aBr, aBs, aBt, aBu, aBv, aBw;

	function bl() {
		return bw.d9(bu.aC8()) ? bx.ci ? __fx.settings.keybindButtons ? bw.aZ - 2 * bw.ae - 3 * aBq : bw.aZ - bw.ae - 2 * aBq : __fx.settings.keybindButtons ? bw.aZ - bw.ae - 2 * aBq : bw.aZ - aBq : bt.d9(bu.aCA()) ? bx.ci ? bt.bl() - bw.ae - 2 *
			aBq : bt.bl() - aBq : bx.ci ? f.ae - bw.ae - (ct.cu() + 1) * aBq : f.ae - ct.cu() * ab.gap
	}

	function aC0(dO, a2, id, cE, aC2, aC3, zg, aC4, aC5, aC6, aCE) {
		var a5, c8, m9, qm, aCF = void 0 !== aC5,
			af = Math.floor(bz.measureText(a2, bu.cl) + 1.5 * aBr + (aCF ? ae : 1.5 * aBr));
		if (k.l = !0, aCE || iU.x1(a2, aC5), af + 2 * aBq + bw.ae > f.af && !aCF && 50 !== id && 20 < a2.length) aC0(dO, (aCE = ar.d5.a7t(a2))[0], id, cE, aC2, aC3, zg, aC4, aC5, aC6, !0), aC0(dO, aCE[1], id, cE, aC2, aC3, zg, aC4, aC5, aC6, !0);
		else if (aCE = af + (50 === id ? aBs : 0), (m9 = document.createElement("canvas")).width = af, m9.height = ae, (c8 = m9.getContext("2d", {
				alpha: !0
			})).font = bu.cl, ar.at.textBaseline(c8, 1), ar.at.textAlign(c8, 0), c8.clearRect(0, 0, af, ae), c8.fillStyle = aC3, c8.fillRect(0, 0, af, ae), c8.fillStyle = aC2, c8.fillText(a2, Math.floor(1.5 * aBr), Math.floor(ae / 2)), aCF && (c8
				.imageSmoothingEnabled = !0, fW.fX.gp(aC5, c8, af - ae, 0, ae)), 0 === (qm = {
				e6: dO,
				a2: a2,
				id: id,
				player: cE,
				canvas: m9,
				aC2: aC2,
				aC3: aC3,
				af: af,
				aC9: aCE,
				zg: zg,
				aC4: aC4,
				aC5: aC5,
				aC6: aC6
			}).e6 || 0 < tk.length && 0 < tk[0].e6) tk.unshift(qm);
		else {
			for (a5 = 1; a5 < tk.length; a5++)
				if (0 < tk[a5].e6) return void tk.splice(a5, 0, qm);
			tk.push(qm)
		}
	}

	function aC1(al, am, an) {
		return "rgb(" + al + "," + am + "," + an + ")"
	}

	function aCH(id, gi) {
		for (var a3 = tk.length, a5 = 0; a5 < a3; a5++) tk[a5].id === id && gi-- <= 0 && (tk.splice(a5, 1), a5--, a3--)
	}

	function aCI(id, player) {
		for (var a8I = !1, a5 = tk.length - 1; 0 <= a5; a5--) tk[a5].id !== id || player !== bq.g7 && tk[a5].player !== player || (tk.splice(a5, 1), a8I = !0);
		return a8I
	}

	function aCc(a2) {
		aC0(340, a2, 6, 0, aC1(215, 245, 255), ao.c9, -1, !1)
	}
	this.zw = "", this.aJ = function() {
		var self;
		aBv = 0, aBu = bE.bF.bG() ? 7 : 12, aBt = {
			e8: [0, 0, 0],
			aBx: [0, 0, 0],
			a18: [220, 180, 180],
			aX: [0, 0, 0],
			aV: [0, 0, 0]
		}, tk = [], this.resize(), bq.cp && this.a2E(0, 18), bh.a7J.p0[bh.ig].name.length && aCc(L(209, [bh.a7J.p0[bh.ig].name])), aCc(L(210, [bh.ma - 2 + "x" + (bh.oi - 2)])), aCc(L(211, [ar.d5.d6(hz.aCd)])), hz.aCd !== hz.aCe && aCc(L(212,
			[ar.d5.d6(hz.aCe) + " (" + ar.d5.d7(100 * hz.aCe / hz.aCd, 1) + ")"])), 0 < hz.aCf && aCc(L(185, [ar.d5.d6(hz.aCf) + " (" + ar.d5.d7(100 * hz.aCf / hz.aCd, 1) + ")"])), 0 < hz.aCg && aCc(L(213, [ar.d5.d6(hz.aCg) + " (" + ar.d5.d7(
			100 * hz.aCg / hz.aCd, 1) + ")"])), 10 === bq.fs && aC0(120, L(214), 6, 0, aC1(235, 255, 120), ao.c9, -1, !1), 0 !== (self = this).zw.length && (aC0(200, self.zw, 0, 0, ao.ap, ao.c9, -1, !1), self.zw = ""), bq.hX && aC0(340, L(
			163), 6, 0, aC1(255, 200, 0), ao.c9, -1, !1)
	}, this.resize = function() {
		var uJ, a5;
		if (ae = (ae = Math.floor((bE.bF.bG() ? .031 : .0249) * f.bH)) < 10 ? 10 : ae, this.fontSize = Math.floor(2 * ae / 3), this.cl = ar.at.au(1, this.fontSize), aBq = ab.gap, aBr = Math.floor(ae / 5), 0 < tk.length)
			for (uJ = tk, tk = [], a5 = uJ.length - 1; 0 <= a5; a5--) aC0(uJ[a5].e6, uJ[a5].a2, uJ[a5].id, uJ[a5].player, uJ[a5].aC2, uJ[a5].aC3, uJ[a5].zg, uJ[a5].aC4, uJ[a5].aC5, uJ[a5].aC6, !0);
		this.aC7()
	}, this.aC7 = function() {
		aBw = document.createElement("canvas");
		var a2 = L(164),
			c8 = (aBs = bz.measureText(a2, this.cl) + 5 * aBr, aBw.height = ae, aBw.width = aBs, aBw.getContext("2d", {
				alpha: !0
			}));
		c8.font = this.cl, ar.at.textBaseline(c8, 1), ar.at.textAlign(c8, 1), c8.clearRect(0, 0, aBs, ae), c8.fillStyle = ao.a4j, c8.fillRect(0, 0, aBs, ae), c8.fillStyle = ao.ap, c8.fillText(a2, Math.floor(aBs / 2), Math.floor(ae / 2))
	}, this.aC8 = function() {
		var a3;
		return bx.ci ? bx.af : 0 === (a3 = tk.length) ? 0 : 1 === a3 ? tk[0].aC9 : ee(tk[0].aC9, tk[1].aC9)
	}, this.aCA = function() {
		var a3 = tk.length;
		return bx.ci ? a3 ? ee(bx.af, tk[0].aC9) : bx.af : 0 === a3 ? 0 : 1 === a3 ? tk[0].aC9 : 2 === a3 ? ee(tk[0].aC9, tk[1].aC9) : ee(ee(tk[0].aC9, tk[1].aC9), tk[2].aC9)
	}, this.ay = function(ag, aZ) {
		for (var gE, aCB, aCC = bl(), a5 = tk.length - 1; 0 <= a5; a5--)
			if ((aCB = aCC - (a5 + 1) * ae) <= aZ && aZ < aCB + ae) return 50 === tk[a5].id ? ag >= f.af - aBs - aBq - tk[a5].af && (ag >= f.af - aBs - aBq ? gl.d1.q1(tk[a5].player) : iL.a1B(tk[a5].player, 800, !1, 0), !0) : ag >= f.af - tk[a5]
				.af - aBq && (736 === tk[a5].id ? (aCB = tk[a5].a2.split(" "), window.open(aCB[aCB.length - 1], "_blank")) : tk[a5].aC4 && (tk[a5].aC6 && tk[a5].aC6.fp ? (aCB = tk[a5].aC6.js, gE = i2.o6(aCB) - 10, aCB = i2.o8(aCB) - 10, iL
					.a1A(gE, aCB, 19 + gE, 19 + aCB)) : tk[a5].aC6 && tk[a5].aC6.an ? iL.a1C(tk[a5].player, tk[a5].aC6.jz) : (iL.a1B(tk[a5].player, 800, !1, 0), 0 <= tk[a5].zg && (gE = tk[a5].zg, tk[a5].zg = tk[a5].player, tk[a5]
					.player = gE))), !0);
		return !1
	}, this.x1 = function(dO, a2, id, cE, aC2, aC3, zg, aC4, aC5, aC6) {
		aC0(dO, a2, id, cE, aC2, aC3, zg, aC4, aC5, aC6)
	}, this.a6L = function(ml) {
		aC0(300, ml, 252, 0, ao.ap, ao.c9, -1, !1)
	}, this.aCG = function(id) {
		for (var a5 = tk.length - 1; 0 <= a5; a5--) tk[a5].id === id && (tk[a5].e6 = 1)
	}, this.a2E = function(player, id) {
		0 === id ? (bz.jG(player, 0), aCH(423, 0), aC0(160, L(165, [fz.fy[player]]), 423, player, "rgb(10,220,10)", ao.c9, -1, !1)) : 1 === id ? (aCI(50, bq.g7), bz.jG(player, 1), aC0(360, L(166, [fz.fy[player]]), 0, player, ao.a4v, ao.c9, -1, !
			0), iL.a1B(player, 2700, !1, 0)) : 2 === id ? (bz.jG(player, 2), aC0(0, L(167), 0, player, "rgb(10,255,255)", ao.c9, -1, !0), iL.a1B(player, 2700, !1, 0)) : 3 === id ? (bz.jG(player, 2), aC0(0, L(168, [fz.fy[player]]), 0, player,
			ao.ap, ao.c9, -1, !0), iL.a1B(player, 2700, !1, 0)) : 4 === id ? this.aCJ(1, player, player) : 5 === id ? 2 === fz.lq[player] || ar.d1.lp(bq.d3) || (function(id, a2L) {
			var a5, aCS = 0,
				a3 = tk.length;
			for (a5 = 0; a5 < a3; a5++)
				if (tk[a5].id === id && a2L <= ++aCS) return tk.splice(a5, 1)
		}(1, 5), bp.mJ(player) ? aC0(180, L(169, [fz.fy[player]]), 1, player, aC1(255, 200, 180), ao.c9, -1, !0) : (aCH(573, 0), aC0(180, L(170, [fz.fy[player]]), 573, player, ao.a4v, ao.c9, -1, !0))) : 18 === id ? aC0(255, L(171), 18, 0, ao
			.ap, ao.c9, -1, !1) : 21 === id ? aC0(220, L(172), id, 0, ao.ap, ao.c9, -1, !1) : 22 === id ? this.aCJ(2, player, player) : 59 === id && aC0(0, L(173), id, 0, ao.a59, ao.c9, 0, !1)
	}, this.a5v = function(ml) {
		aC0(200, L(174, [ml]), 94, 0, ao.ap, ao.a4s, -1, !1)
	}, this.aCL = function(aCM) {
		if (bq.d3 === aCM && !bq.hR)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aC0(0, "Your Win Count is now " + __fx.wins.count, 3, aCM, ao.ap, ao.c9, -1, !0);
		fz.lJ[aCM] && (bz.jG(aCM, 2), bq.fx < 100 ? aC0(0, L(168, [fz.fy[aCM]]), 3, aCM, ao.ap, ao.c9, -1, !0) : aC0(0, L(175, [fz.fy[aCM]]), 3, aCM, ao.ap, ao.c9, -1, !0))
	}, this.qS = function(gr) {
		var aCP, a2, aCN = "(" + i2.o6(gr >> 2) + ", " + i2.o8(gr >> 2) + ")",
			aC4 = !1,
			player = 0;
		hy.q7(gr) ? hy.j1(gr) ? aCN = L(176, [aCN]) : (player = hy.oN(gr), a2 = L(177, [ar.c8.aCO(fz.g0[player], ar.at.au(0, 10), 150)]) + "   ", a2 = (a2 += L(178, [ar.d5.d6(fz.lQ[player])]) + "   ") + L(179, [ar.d5.d6(fz.lJ[player])]) + "   ",
				bq.hU && (aCP = hv.f3[hv.vR[hv.va[player]]], a2 += L(180) + ": " + aCP + "   "), ar.d1.lp(player) && (a2 += L(181) + ": " + g6.a4B[g6.g5[player]] + "   "), aCN = a2 = (a2 += L(182, [player]) + "   ") + L(183, [aCN]), aC4 = !0) :
			aCN = hy.iz(gr) ? L(184, [aCN]) + "   #" + hy.j0(gr) : L(185, [aCN]), k.l = !0, aCH(55, 0), aC0(220, aCN, 55, player, ao.ap, ao.c9, -1, aC4, void 0, void 0, !0)
	}, this.qU = function(aCQ) {
		var ei = bo.h,
			player = ei.sZ[aCQ] >> 3,
			a2 = (k.l = !0, aCH(55, 0), L(186, [fz.fy[player]]) + "   ");
		aC0(220, a2 += L(178, [ei.sh[aCQ]]), 55, player, ao.ap, ao.c9, -1, !0)
	}, this.gn = function(v0, kA, gb) {
		v0 === bq.d3 ? aC0(175, " " + L(187, [fz.fy[kA]]) + ": ", 1001, kA, aC1(200, 255, 210), ao.c9, -1, !0, gb) : this.aCR(v0, gb)
	}, this.aCR = function(v0, gb) {
		aCH(1e3, 0), aC0(175, fz.fy[v0] + ": ", 1e3, v0, ao.ap, "rgba(5,60,25,0.9)", -1, !0, gb)
	}, this.aCT = function() {
		var ml;
		bq.hd ? (ml = L(188), bz.a7I(L(189), 2, 1, 12), aC0(0, ml, 40, 0, "rgb(10,220,10)", ao.c9, -1, !1)) : (ml = L(190), bz.a7I(L(191), 2, 0, 16), aC0(0, ml, 41, 0, ao.ap, ao.c9, -1, !1))
	}, this.wr = function() {
		var gi = fz.fy,
			iy = bq.data;
		aC0(300, gi[0] + " [" + bq.hZ.wx(iy.elo[0]) + "] vs " + gi[1] + " [" + bq.hZ.wx(iy.elo[1]) + "]", 65, 0, ao.aq, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aCU = function(ml) {
		aC0(350, ml, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aCV = function(aCW) {
		aC0(0, L(aCW ? 192 : 193), 247, 0, ao.kR, ao.c9, -1, !1)
	}, this.wz = function(ww, wy, aCX) {
		var iy = bq.data,
			gi = fz.fy;
		aC0(0, gi[0] + ": " + bq.hZ.wx(iy.elo[0]) + " -> " + ww, 66, 0, ao.ap, aCX[0], -1, !1), aC0(0, gi[1] + ": " + bq.hZ.wx(iy.elo[1]) + " -> " + wy, 66, 1, ao.ap, aCX[1], -1, !1)
	}, this.vH = function(player, id) {
		0 === id ? aCI(50, player) ? (aC0(128, L(194, [fz.fy[player]]), 52, player, aC1(180, 255, 180), ao.c9, -1, !0), bp.lW(player, 2, 255)) : aC0(384, L(195, [fz.fy[player]]), 51, player, aC1(210, 210, 255), ao.c9, -1, !0) : aCI(51, player) ?
			(aC0(128, L(196, [fz.fy[player]]), 52, player, ao.ap, "rgba(60,120,10,0.9)", -1, !0), bp.lW(player, 2, 255)) : (aC0(384, L(197, [fz.fy[player]]), 50, player, ao.ap, "rgba(90,90,90,0.9)", -1, !0), bp.lW(player, 2, 96))
	}, this.aCY = function(e8, target) {
		var color = aC1(210, 255, 210);
		1 < e8.length ? aC0(230, L(198, [e8.length, fz.fy[target]]), 66, target, color, ao.c9, -1, !0) : aC0(230, L(199, [fz.fy[e8[0]], fz.fy[target]]), 66, e8[0], color, ao.c9, target, !0)
	}, this.vI = function(player, target) {
		aC0(230, L(200, [fz.fy[player], fz.fy[target]]), 66, player, ao.ap, "rgba(75,65,5,0.9)", target, !0)
	}, this.qC = function(id, gi) {
		aCH(id, gi)
	}, this.mK = function(id, player) {
		aCI(id, void 0 === player ? bq.g7 : player)
	}, this.aCZ = function(id) {
		for (var a5 = tk.length - 1; 0 <= a5; a5--)
			if (tk[a5].id === id) return tk[a5];
		return null
	}, this.a0s = function(lI, aCa, player) {
		2 !== fz.lq[bq.d3] && (aC0(200, lI = 1 === lI ? L(201, [fz.fy[player]]) : L(202, [ar.d5.d6(lI), fz.fy[player]]), 30, player, "rgb(190,255,190)", ao.c9, -1, !0), aCa) && (lI = 1 === aCa ? L(203) : L(204, [ar.d5.d6(aCa)]), iU.x1(lI))
	}, this.aCb = function(lI, player) {
		2 !== fz.lq[bq.d3] && (aCH(31, 0), 2 === fz.lq[player] || player >= bq.fx ? aC0(150, 1 === lI ? L(205, [fz.fy[player]]) : L(206, [fz.fy[player], ar.d5.d6(lI)]), 31, player, ao.aq, "rgba(205,205,205,0.9)", -1, !0) : aC0(150, 1 === lI ? L(
			207, [fz.fy[player]]) : L(208, [fz.fy[player], ar.d5.d6(lI)]), 31, player, ao.aq, "rgba(205,255,205,0.9)", -1, !0))
	}, this.aBB = function(ld) {
		for (var aV = k.mF(), a5 = 2; 0 <= a5; a5--) 0 < aBt.aX[a5] && (ld || aBt.aV[a5] < aV - 220) && this.aCh(a5)
	}, this.aCh = function(id) {
		var a2, a3 = aBt.aX[id],
			player = aBt.e8[id];
		aBt.aX[id] = 0, 1 === a3 ? (0 === id ? a2 = L(215, [fz.fy[player], fz.fy[aBt.aBx[0]]]) : 1 === id ? a2 = L(216, [fz.fy[player]]) : 2 === id ? a2 = L(217, [fz.fy[player]]) : 3 === id && (a2 = L(218, [fz.fy[player]])), aCH(7, 0), aC0(aBt
			.a18[id], a2, 7, aBt.aBx[id], ao.ap, ao.c9, -1, !0)) : (a2 = L(0 === id ? 219 : 1 === id ? 220 : 221, [a3]), aCH(7, 0), aC0(aBt.a18[id], a2, 7, player, ao.ap, ao.c9, -1, !1))
	}, this.aCJ = function(id, ke, zg) {
		var aV = k.mF(),
			a3 = aBt.aX[id] + 1;
		aBt.aX[id]++, aBt.e8[id] = ke, aBt.aBx[id] = zg, 1 === a3 && (aBt.aV[id] = aV), (1 === a3 && (bq.hL < 32 || 2 === bq.dM) || 1 < a3 && (aBt.aV[id] < aV - 140 || 2 === bq.dM)) && this.aCh(id)
	}, this.c = function() {
		aCi.c();
		for (var oC = (oC = tk.length - aBu) <= 1 ? 1 : oC * oC, a5 = tk.length - 1; 0 <= a5; a5--) 0 < tk[a5].e6 && (tk[a5].e6 -= oC, tk[a5].e6 <= 0) && (k.l = !0, tk.splice(a5, 1));
		! function() {
			var gi, a5;
			if (128 !== aBv && !(++aBv < 128))
				for (gi = 5, a5 = i8.j6 - 1; 0 <= a5; a5--) 1 === fz.lq[i8.j5[a5]] && 0 < gi-- && aC0(240, L(218, [fz.fy[i8.j5[a5]]]), 1, i8.j5[a5], ao.aq, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.aBB(!1)
	}, this.n = function() {
		for (var m4, aZ = bl(), a5 = tk.length - 1; 0 <= a5; a5--) m4 = aZ - (a5 + 1) * ae, 50 === tk[a5].id ? (ah.drawImage(tk[a5].canvas, f.af - tk[a5].af - aBs - aBq, m4), ah.drawImage(aBw, f.af - aBs - aBq, m4)) : ah.drawImage(tk[a5].canvas,
			f.af - tk[a5].af - aBq, m4)
	}
}

function aCk() {
	this.gm = new aCl, this.d1 = new aCm, this.a0a = new ri, this.ht = new a0Q, this.a8H = new a0n
}

function aCn() {
	this.size = 0, this.b4 = 0, this.di = null, this.aJ = function(di) {
		this.b4 = 0, this.di = di, this.size = di.length
	}, this.xv = function() {
		this.di = null
	}, this.gz = function(size) {
		for (var y = 0, di = this.di, mU = this.b4 + size - 1, a5 = this.b4; a5 <= mU; a5++) y |= (di[a5 >> 3] >> 7 - (7 & a5) & 1) << mU - a5;
		return this.b4 += size, this.b4 > 8 * this.size && console.error("Unwrapper Overflow"), y
	}, this.h2 = function(size) {
		var an = size >> 1;
		return (1 << an) * this.gz(size - an) + this.gz(an)
	}, this.h5 = function(aCo) {
		return this.size === dU.gw(aCo)
	}, this.a0A = function(gA, aCp, aCq) {
		var gi = this.gz(gA);
		if (!gi) return null;
		for (var gA = Math.max(gi, aCq), a4 = new(aCp <= 8 ? Uint8Array : aCp <= 16 ? Uint16Array : Uint32Array)(gA), a5 = 0; a5 < gi; a5++) a4[a5] = this.gz(aCp);
		aCq = a4[gi - 1];
		return aCq && a4.fill(aCq, gi), a4
	}, this.a0B = function(gA, aCr, aCq) {
		var gi = this.gz(gA);
		if (!gi) return null;
		for (var gA = Math.max(gi, aCq), a4 = new Array(gA), a5 = 0; a5 < gi; a5++) a4[a5] = this.a08(aCr);
		return a4.fill(a4[gi - 1], gi), a4
	}, this.a08 = function(gA) {
		return h0.h6.h7(this.gz(gA))
	}, this.a09 = function() {
		var a2 = dn.kY.kZ(dn.kY.ka(this.gz(30))),
			a2 = ar.d5.a81(a2, "_", "/");
		a2 = ar.d5.a81(a2, "-", "+");
		for (var aCs = "";
			(a2.length + aCs.length) % 4;) aCs += "=";
		a2 = "data:image/png;base64," + a2 + aCs;
		var a02 = new Image;
		a02.onload = function() {
			iA.yZ.a01(a02), a02.onload = null, a02 = null
		}, a02.src = a2
	}
}

function aCt() {
	this.aBo = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aCu = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", ao.ap, "rgb(170,170,170)"
	], this.aCv = [ao.ap, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", ao.ap, ao.aq], this.aCw = [ao.aq, ao.ap, ao.ap, ao.ap, ao.aq, ao.aq, ao.aq, ao.aq, ao.ap];
	var aCx = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aCy = (this.mD = ["rgba(" + aCx[0] + ",", "rgba(" + aCx[1] + ",", "rgba(" + aCx[2] + ",", "rgba(" + aCx[3] + ",", "rgba(" + aCx[4] + ",", "rgba(" + aCx[5] + ",", "rgba(" + aCx[6] + ",", "rgba(" + aCx[7] + ",", "rgba(" + aCx[8] + ",",
			"rgba(" + aCx[9] + ","
		], this.mE = ["rgb(" + aCx[0] + ")", "rgb(" + aCx[1] + ")", "rgb(" + aCx[2] + ")", "rgb(" + aCx[3] + ")", "rgb(" + aCx[4] + ")", "rgb(" + aCx[5] + ")", "rgb(" + aCx[6] + ")", "rgb(" + aCx[7] + ")", "rgb(" + aCx[8] + ")", "rgb(" + aCx[9] +
			")"
		], this.f3 = null, this.ta = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		]);
	this.vR = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.va = new Uint8Array(bq.g7), this.a3k = new Uint8Array(bq.g7), this.aCz = new Uint16Array(bq.g7), this.aD0 = new Uint16Array(this.vR.length + 1), this.aD1 = new Uint16Array(this.vR.length), this.fZ =
		function() {
			this.f3 = [L(222), L(223), L(224), L(225), L(226), L(227), L(228), L(229), L(230)]
		}, this.aJ = function() {
			if (this.va.fill(0), this.aD2(), bq.hU) {
				if (9 === bq.fs) {
					for (var va = hv.va, a5 = bq.data.teamPlayerCount[7] - 1; 0 <= a5; a5--) va[a5] = 1;
					var a3 = bq.g7;
					for (a5 = bq.data.teamPlayerCount[7]; a5 < a3; a5++) va[a5] = 2;
					hv.vR[1] = 7, hv.vR[2] = 8
				} else bq.hR ? function() {
					var colorsData = bq.data.colorsData;
					if (!bq.data.selectableColor)
						for (var a5 = bq.fx - 1; 0 <= a5; a5--) colorsData[a5] = g1.g2(262144);
					var aDD = 0,
						vT = 768,
						db = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = bq.data.teamPlayerCount;
					for (a5 = 0; a5 < 9; a5++)
						if (teamPlayerCount[a5]) {
							for (var iy = 0, an = 0; an < 3; an++) iy += Math.abs(aCy[a5][an] - db[an]);
							iy < vT && (aDD = a5, vT = iy)
						} var aDE = new Uint16Array(9);
					for (a5 = 0; a5 < 9; a5++) aDE[a5] = teamPlayerCount[a5];
					var vR = hv.vR,
						aDF = new Uint8Array(9),
						gi = (vR[0] = 0, 1);
					for (a5 = 1; a5 < 9; a5++) aDE[a5] && (aDF[a5] = gi, vR[gi++] = a5);
					var mV = bq.fx,
						va = hv.va;
					aDE[aDD] ? (aDE[aDD]--, va[0] = aDF[aDD]) : mV = 0;
					var aV = 0;
					for (a5 = mV; a5 < bq.hO; a5++) {
						var eE = vR[aV];
						if (aDE[eE]) aDE[eE]--, va[a5] = aDF[eE];
						else if (a5--, 9 <= ++aV) return console.log("error 325")
					}
				}() : this.c();
				! function() {
					for (var a3 = bq.g7, aCz = hv.aCz, aD0 = hv.aD0, aD1 = hv.aD1, va = hv.va, vR = hv.vR, aDO = vR.length, aQ = new Array(aDO), a5 = 0; a5 < aDO; a5++) aQ[a5] = [];
					for (a5 = 0; a5 < a3; a5++) aQ[vR[va[a5]]].push(a5);
					for (a5 = 1; a5 <= aDO; a5++) aD0[a5] = aD0[a5 - 1] + aQ[a5 - 1].length;
					for (a5 = 0; a5 < aDO; a5++)
						for (var gi = aQ[a5].length, ei = aD0[a5], eE = 0; eE < gi; eE++) aCz[eE + ei] = aQ[a5][eE];
					var fx = bq.fx;
					for (a5 = 0; a5 < aDO; a5++)
						for (gi = aQ[a5].length, ei = aD0[a5], eE = 0; eE < gi; eE++)
							if (aCz[eE + ei] >= fx) {
								aD1[a5] = eE;
								break
							}
				}(), ! function() {
					for (var a3 = bq.g7, va = hv.va, a3k = hv.a3k, vR = hv.vR, a5 = 0; a5 < a3; a5++) a3k[a5] = vR[va[a5]];
					9 === bq.fs && a3k.fill(1, a3 - hm.vY[5])
				}()
			}
		}, this.aD2 = function() {
			for (var a5 = this.vR.length - 1; 0 <= a5; a5--) this.vR[a5] = a5
		}, this.c = function() {
			var a6 = new Uint8Array(bq.fx),
				a7 = new Uint8Array(bq.fx),
				aD7 = new Uint16Array(8),
				aD8 = new Uint16Array(this.vR.length);
			this.aD9(a6, a7, aD7, 1), this.a3c(aD7), this.aDA(aD8, a6, a7), this.aDB(a6, a7, aD8), this.aDC()
		}, this.aD9 = function(a6, a7, aDE, aDG) {
			for (var an, cb, aDH, a3 = this.vR.length - aDG, a4 = new Uint16Array(a3), colorsData = bq.data.colorsData, a5 = bq.fx - 1; 0 <= a5; a5--) {
				for (an = a3; aDG <= an; an--) a4[an - 1] = Math.abs(4 * (colorsData[a5] >> 12) - aCy[an][0]) + Math.abs(4 * (colorsData[a5] >> 6 & 63) - aCy[an][1]) + Math.abs(4 * (63 & colorsData[a5]) - aCy[an][2]);
				for (aDH = 768, an = a3 - 1; 0 <= an; an--) a4[cb = (an + a5) % a3] < aDH && (aDH = a4[cb], a6[a5] = cb);
				for (aDE[a6[a5]] += 4, aDH = 768, an = a3 - 1; 0 <= an; an--) a4[cb = (an + a5) % a3] < aDH && cb !== a6[a5] && (aDH = a4[cb], a7[a5] = cb);
				aDE[a7[a5]]++
			}
		}, this.a3c = function(aDE) {
			for (var an, pi, a3 = this.vR.length - 1, a5 = a3; 0 <= a5; a5--) this.vR[a5] = a5;
			for (a5 = a3 - 1; 0 <= a5; a5--) aDE[a5]++;
			for (a5 = 1; a5 <= a3; a5++) {
				for (pi = 0, an = 1; an < a3; an++) aDE[an] > aDE[pi] && (pi = an);
				aDE[pi] = 0, this.vR[a5] = pi + 1
			}
		}, this.aDA = function(aD8, a6, a7) {
			var an, hC, aV, iy, cb, dL, am, aDI = this.vR.length - 1,
				aDJ = new Uint16Array(aDI),
				aDK = [],
				aDL = 0,
				aAz = [],
				aDM = [];
			loop: for (var a5 = 0; a5 < bq.fx; a5++)
				if (null !== (hC = ar.d5.a7s(fz.g0[a5]))) {
					for (an = aAz.length - 1; 0 <= an; an--)
						if (hC === aAz[an]) {
							aDM[an].push(a5), aDL = Math.max(aDL, aDM[an].length);
							continue loop
						} aAz.push(hC), aDK.push(!1), aDM.push([a5]), aDL = Math.max(aDL, 1)
				}
			for (; 2 < bq.hV && aDL > z.a0(bq.fx, bq.hV);) bq.hV--, bq.fs--;
			for (an = aAz.length - 1; 0 <= an; an--) {
				for (iy = -1, aV = aAz.length - 1; 0 <= aV; aV--) !aDK[aV] && (-1 === iy || aDM[aV].length > aDM[iy].length) && (iy = aV);
				for (aV = aDI - 1; 0 <= aV; aV--) aDJ[aV] = 1;
				for (aV = aDM[iy].length - 1; 0 <= aV; aV--) aDJ[a6[aDM[iy][aV]]] += 3, aDJ[a7[aDM[iy][aV]]]++;
				for (a5 = aDI - 1; 0 <= a5; a5--) {
					for (cb = iy % aDI, aV = aDI - 1; 0 <= aV; aV--) aDJ[aV] > aDJ[cb] && (cb = aV);
					for (dL = -1, aV = bq.hV; 0 < aV; aV--)
						if (this.vR[aV] === cb + 1) {
							dL = aV;
							break
						} if (aDJ[cb] = 0, -1 !== dL) {
						for (am = 0, aV = bq.hV; 0 < aV; aV--) aD8[dL] > aD8[aV] && am++;
						if (am !== bq.hV - 1) {
							for (aV = aDM[iy].length - 1; 0 <= aV; aV--) aD8[dL]++, this.va[aDM[iy][aV]] = dL;
							break
						}
					}
				}
				aDK[iy] = !0
			}
		}, this.aDB = function(a6, a7, aD8) {
			for (var a5, oR, a3 = this.vR.length - 1, border = z.a0(bq.fx, bq.hV), aDN = (0 < bq.fx % bq.hV && border++, new Uint8Array(1 + a3)), an = a3; 1 <= an; an--) aDN[this.vR[an]] = an;
			for (a5 = 0; a5 < bq.fx; a5++) oR = aDN[a6[a5] + 1], 0 === this.va[a5] && oR <= bq.hV && aD8[oR] < border && (aD8[oR]++, this.va[a5] = oR);
			for (a5 = 0; a5 < bq.fx; a5++) oR = aDN[a7[a5] + 1], 0 === this.va[a5] && oR <= bq.hV && aD8[oR] < border && (aD8[oR]++, this.va[a5] = oR);
			for (an = bq.hV; 1 <= an; an--)
				for (a5 = bq.fx - 1; 0 <= a5 && !(aD8[an] >= border); a5--) 0 === this.va[a5] && (aD8[an]++, this.va[a5] = an)
		}, this.aDC = function() {
			for (var a5 = bq.fx; a5 < bq.g7; a5++) this.va[a5] = 1 + a5 % bq.hV
		}
}

function aDP() {
	function aDR() {
		8 === bq.fs && 1 === bq.dM && hl.aDS.aB6()
	}

	function aDQ(player) {
		bq.cp ? (aBJ.aDT(player), i8.aBG(), bq.hR && bq.hY.c()) : aDU.aDV(player)
	}
	this.sJ = function(player) {
		bu.a2E(player, player === bq.d3 ? 21 : 22), aDQ(player), aDR()
	}, this.sM = function(player) {
		1 === bq.dM && 0 !== fz.iN[player] && 2 !== fz.lq[player] && aDQ(player), bq.hL--, bq.hN--, bu.a2E(player, 4), ar.d1.r0(2) && by.bR(!0), aDR()
	}
}

function aDW() {
	function aDh() {
		bh.aDi.c()
	}

	function aDo(cE, aDn) {
		0 < aDn && (bh.a63[cE] += aDn, bh.a63[cE + 1] += aDn, bh.a63[cE + 2] += aDn)
	}

	function qK(cE) {
		return bh.a63[cE + 2] > bh.a63[cE] && bh.a63[cE + 2] > bh.a63[cE + 1]
	}
	this.eW = -1, this.vl = 0, this.aDX = 0, this.aDY = 8, this.aDZ = 32, this.aDa = 8, this.aDb = 32, this.aDc = [0, 0], this.cw = [0, 0, 0, 0], this.os = null, this.aDd = !0, this.aDe = !1, this.aDf = function() {
		-1 !== this.eW && clearTimeout(this.eW), this.eW = -1, this.os = null, yD.aDg()
	}, this.aJ = function() {
		7 === m.bS() || this.aDe || (this.aDd = !0, this.vl = 0, this.aDX = 1, this.aDc = [bh.a7J.p0[bh.ig].pF[0], bh.a7J.p0[bh.ig].pG[0]], this.cw = [bh.a7J.p0[bh.ig].pH[3], bh.a7J.p0[bh.ig].pH[4], bh.a7J.p0[bh.ig].pH[5], bh.a7J.p0[bh.ig].pH[
			6]], this.aDY = bh.a7J.p0[bh.ig].pH[7], this.aDZ = bh.a7J.p0[bh.ig].pH[8], this.aDa = bh.a7J.p0[bh.ig].pH[9], this.aDb = bh.a7J.p0[bh.ig].pH[10], this.aDd ? this.eW = setTimeout(aDh, 16) : this.c())
	}, this.c = function() {
		if (8 === m.bS() && iL.a19()) this.eW = setTimeout(aDh, 16);
		else {
			if (0 === this.vl) {
				var pE = g1.a2K();
				if (g1.hq(bh.a7J.p0[bh.ig].pH[2]), yD.dV([bh.ma, bh.oi, bh.a7J.p0[bh.ig].pH[0], bh.a7J.p0[bh.ig].pH[1]]), g1.hq(pE), this.os = yD.yE(), this.vl++, this.aDd) return void(this.eW = setTimeout(aDh, 16))
			}
			for (var cE, js, pE = this.aDd ? 10 : 1e6, pE = bh.oi - this.aDX - 1 < pE ? bh.oi - this.aDX - 1 : pE, aDj = this.aDX + pE, aZ = this.aDX; aZ < aDj; aZ++)
				for (var ag = 1; ag < bh.ma - 1; ag++) qK(cE = 4 * (js = ag + aZ * bh.ma)) ? this.aDk(cE, js, 1) : (this.aDk(cE, js, 0), function(ag, aZ, cE) {
					return 1 < ag && qK(cE - 4) || ag < bh.ma - 2 && qK(cE + 4) || 1 < aZ && qK(cE - 4 * bh.ma) || aZ < bh.oi - 2 && qK(cE + 4 * bh.ma)
				}(ag, aZ, cE) && this.aDl(ag, aZ));
			this.aDX = aDj, this.aDX >= bh.oi - 1 ? (bh.tm.putImageData(bh.aDm, 0, 0, 1, 1, bh.ma - 2, bh.oi - 2), k.l = !0, this.aDf()) : this.aDd && (this.eW = setTimeout(aDh, 16))
		}
	}, this.aDk = function(cE, js, b4) {
		aDo(cE, Math.floor(this.aDc[b4] + this.cw[b4] * this.os[js] / 1e4) - bh.a63[cE])
	}, this.aDp = function(cE, al, aDq, b4, cw) {
		aDo(cE, Math.floor(this.aDc[b4] + (1 - al / aDq) * cw) - bh.a63[cE])
	}, this.aDl = function(az, b0) {
		for (var cE, al, aDq, eL = az - this.aDZ, aDr = b0 - this.aDZ, aDs = az + this.aDZ, aDj = b0 + this.aDZ, eL = eL < 1 ? 1 : eL, aDs = aDs > bh.ma - 2 ? bh.ma - 2 : aDs, aDj = bh.oi - 2 < aDj ? bh.oi - 2 : aDj, aZ = aDr < 1 ? 1 : aDr; aZ <=
			aDj; aZ++)
			for (var ag = eL; ag <= aDs; ag++) qK(cE = 4 * (ag + aZ * bh.ma)) ? (aDq = this.aDY + (this.aDZ - this.aDY) * this.os[ag + bh.ma * aZ] / 1e4, Math.abs(az - ag) > aDq || Math.abs(b0 - aZ) > aDq || aDq <= (al = Math.sqrt((az - ag) * (
				az - ag) + (b0 - aZ) * (b0 - aZ))) || this.aDp(cE, al, aDq, 1, this.cw[3])) : (aDq = this.aDa + (this.aDb - this.aDa) * this.os[ag + bh.ma * aZ] / 1e4, Math.abs(az - ag) > aDq || Math.abs(b0 - aZ) > aDq || aDq <= (al = Math
				.sqrt((az - ag) * (az - ag) + (b0 - aZ) * (b0 - aZ))) || this.aDp(cE, al, aDq, 0, this.cw[2]))
	}
}

function aDt() {
	this.jQ = 0;
	var aDu, aDv, aDw, aDx, aDy, aDz = this.jp = 0;

	function aE3() {
		aDx = aDy = null, aDz = 0
	}
	this.aJ = function(aAE, aE0, aE1) {
		aM.mo(), qd.xv(), m.setState(10), aDx = aAE, aDy = aE0, aDz = aE1, this.jQ = aAE.jQ, this.jp = aE1, aDu = 0, aDv = k.e6 + 4500, g.h.jP = aAE.jP, g.h.dh === aAE.jP ? (console.log("direct pass"), aDw = 0) : (console.log("delayed pass"), g.h
			.close(g.h.dh, 3247), aDw = 2, g.h.uz(aAE.jP, 5) && g.v0.jo()), ah.imageSmoothingEnabled = !0, m.bf();
		aE0 = gW.f6("loading"), aE1 = (bE.bF.bG() ? .396 : .25) * f.bH / aE0.width;
		ah.setTransform(aE1, 0, 0, aE1, Math.floor((f.af - aE1 * aE0.width) / 2), Math.floor((f.ae - aE1 * aE0.height) / 2)), ah.imageSmoothingEnabled = !1, ah.drawImage(aE0, 0, 0), ah.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aE4 = function() {
		0 < aDw && k.e6 > aDv && (aDw--, aDv += 4500, 0 === k.a5c) && 0 === k.mF() && g.h.uz(g.h.jP, 5)
	}, this.v9 = function() {
		return 10 === m.bS() && (qd.xi.aE6(aDx, aDy, aDz), aE3(), !0)
	}, this.j = function() {
		10 === m.bS() && 2 <= ++aDu && (qd.xi.aE6(aDx, aDy, aDz), aE3())
	}
}

function aE8() {
	var vl = 0;
	this.aJ = function() {
		bW.aJ(), vl = 0
	}, this.setState = function(aE9) {
		vl = aE9
	}, this.bS = function() {
		return vl
	}, this.v4 = function() {
		this.setState(8), aM.mo()
	}, this.b6 = function(cb) {
		if (!bh.aEA) return !1;
		if (!(k.e6 < 400)) {
			if ("Enter" === cb.key || "Escape" === cb.key) {
				if (this.aEB()) return !0;
				if ("Enter" === cb.key) {
					if (0 === vl) return !0;
					if (7 === vl) return !0
				}
			}
			return !1
		}
	}, this.yv = function() {
		aEC.resize()
	}, this.aEB = function() {
		return !!aEC.aR()
	}, this.ay = function(ag, aZ) {
		!bh.aEA || aEC.ay(ag, aZ) || 6 === vl && e.ay(ag, aZ) || fU.ay(ag, aZ) || bT.ay(ag, aZ)
	}, this.b2 = function(ag, aZ) {
		!bT.eZ && bW.b2(ag, aZ, !0) || bT.b2(ag, aZ)
	}, this.click = function(ag, aZ) {
		bT.el()
	}, this.b3 = function(ag, aZ, deltaY) {}, this.yw = function() {
		bW.bM(), k.l = !0
	}, this.n = function() {
		8 !== vl && 10 !== vl && (ah.imageSmoothingEnabled = !0, this.bf(), 0 !== vl && (bT.n(), d.n(), this.aED(), fU.n()), 0 !== vl && 6 === vl && e.n(), aEC.n(), aM.n())
	}, this.bf = function() {
		var aEF, aEE;
		if (__fx.makeMainMenuTransparent) ah.clearRect(0, 0, f.af, f.ae);
		else bh.aEA ? (aEE = f.af / bh.ma, aEF = f.ae / bh.oi, ah.setTransform(aEE = aEF < aEE ? aEE : aEF, 0, 0, aEE, Math.floor((f.af - aEE * bh.ma) / 2), Math.floor((f.ae - aEE * bh.oi) / 2)), ah.drawImage(bh.bi, 0, 0), ah.setTransform(1, 0,
			0, 1, 0, 0), ah.fillStyle = ao.a4T) : ah.fillStyle = ao.aq, ah.fillRect(0, 0, f.af, f.ae)
	}, this.aED = function() {
		var aZ = Math.floor(.3 * f.ae),
			canvas = gW.f6("territorial.io"),
			mC = (mC = 1.75 * f.ae / canvas.width) * canvas.width < .98 * f.af ? .98 * f.af / canvas.width : mC,
			ag = (ah.globalAlpha = .15, ah.imageSmoothingEnabled = !1, Math.floor(.5 * (f.af - mC * canvas.width))),
			ag = Math.floor(ag / mC),
			aZ = Math.floor(aZ - .5 * canvas.height * mC),
			aZ = Math.floor(aZ / mC);
		ah.setTransform(mC, 0, 0, mC, ag, aZ), ah.drawImage(canvas, ag, aZ), ah.setTransform(1, 0, 0, 1, 0, 0), ah.globalAlpha = 1, ah.imageSmoothingEnabled = !0
	}
}

function aEG(aEH, aEI, aEJ, aEK, aEL, qa) {
	var qb = document.createElement("div"),
		aEM = document.createElement("div"),
		aEN = document.createElement("div"),
		aEO = document.createElement("div"),
		aEP = document.createElement("div"),
		qc = document.createElement("div"),
		aEQ = document.createElement("div"),
		aER = document.createElement("div"),
		aES = document.createElement("span"),
		aET = document.createElement("div");
	this.aEU = new aEV(aEL, qa), this.aEW = new qZ(qa), this.aEX = [aEH, aEI, aEJ, aEK], this.aEa = function(jJ) {
		jJ = (jJ / 10).toFixed(1) + "%";
		aER.style.width = jJ, aES.innerHTML = jJ
	}, this.aEb = function() {
		this.aEW.aR(qc), this.aEU.show(qc)
	}, this.aEc = function() {
		this.aEU.aR(qc), this.aEW.show(qc)
	}, this.aEd = function() {
		return aEM
	}, this.show = function() {
		document.body.appendChild(qb)
	}, this.aR = function() {
		document.body.removeChild(qb)
	}, this.resize = function(aEe) {
		var aEf = 1 - .4 * bE.bF.bG() * (f.af > 1.6 * f.ae),
			aEg = ar.at.cX(.05 * aEf),
			aEh = f.ae > f.af,
			aEi = ar.at.cX(.07 * aEf + .03 * aEh),
			aEj = ar.at.cX(.04 + .02 * aEh),
			aEh = ar.at.cX(.02 * aEf + .01 * aEh),
			aEl = ar.at.cX(.025);
		qb.style.font = ar.at.au(0, aEl), aEf < 1 && (aEl = ar.at.au(0, aEf * aEl), aEN.style.font = aEl, aEP.style.font = aEl, aET.style.font = aEl, aEQ.style.font = aEl, aEO.style.font = aEl), aEM.style.height = ar.at.cc(aEg), aEM.style.font =
			ar.at.au(0, .72 * aEg), ar.at.cd(aEM, 2), aEN.style.top = ar.at.cc(aEg), aEN.style.height = ar.at.cc(aEi), ar.at.cd(aEN, 2), aEO.style.font = ar.at.au(0, aEf * ar.at.cX(.02)), aEO.style.top = ar.at.cc(aEg + aEi), aEO.style.height = ar
			.at.cc(aEj), ar.at.cd(aEO, 2), aEP.style.top = ar.at.cc(aEg + aEi + aEj), aEP.style.height = ar.at.cc(aEi), ar.at.cd(aEP, 2), qc.style.top = ar.at.cc(aEg + aEi + aEj + aEi), qc.style.height = ar.at.cc(f.ae / f.aW - aEg - 3 * aEi -
				aEj - aEh), aEQ.style.top = ar.at.cc(f.ae / f.aW - aEi - aEh), aEQ.style.height = ar.at.cc(aEh), ar.at.cd(aEQ, 8), aES.style.font = ar.at.au(0, .8 * aEh), aET.style.top = ar.at.cc(f.ae / f.aW - aEi), aET.style.height = ar.at.cc(
				aEi), ar.at.cd(aET, 8), aEH.resize(aEN), aEI.resize(aEN), aEJ.resize(aEN), aEK.resize(aEN), aEe ? this.aEU.resize(qc) : this.aEW.resize()
	};
	aEL = this;
	qb.style.position = "absolute", qb.style.top = "0", qb.style.left = "0", qb.style.width = "100%", qb.style.height = "100%", qb.style.backgroundColor = ao.kb, n8.qt() || (qb.style.backdropFilter = "blur(4px)", qb.style.webkitBackdropFilter =
		"blur(4px)"), aEM.style.position = "absolute", aEM.style.top = "0", aEM.style.left = "0", aEM.style.width = "100%", aEM.style.display = "flex", aEM.style.alignItems = "center";
	for (var a4 = [aEN, aEO, aEP, aET], a5 = 0; a5 < a4.length; a5++) a4[a5].style.position = "absolute", a4[a5].style.left = "0", a4[a5].style.width = "100%", ar.at.cS(a4[a5]);
	qc.style.position = "absolute", qc.style.left = "0", qc.style.width = "100%", qc.style.font = "inherit", aEQ.style.position = "absolute", aEQ.style.left = "0", aEQ.style.width = "100%", aER.style.position = "absolute", aER.style.top = "0", aER
		.style.left = "0", aER.style.height = "100%", aER.style.width = "50%", aER.style.backgroundColor = ao.a4i, aES.innerHTML = "", aES.style.position = "absolute", aES.style.top = "50%", aES.style.left = "50%", aES.style.transform =
		"translate(-50%, -50%)", aEM.appendChild(function() {
			var z0 = document.createElement("h1");
			return z0.textContent = L(231), z0.style.margin = "0 auto 0.15em auto", z0.style.webkitTextStroke = "0.02em brown", z0.style.fontFamily = "Arial Black, Trebuchet MS", z0.style.fontSize = "inherit", z0.style.fontWeight = "inherit", z0
		}()), aEN.appendChild(aEH.dx), aEO.appendChild(aEI.dx), aEP.appendChild(aEJ.dx), aEQ.appendChild(aER), aEQ.appendChild(aES), aET.appendChild(aEK.dx), qb.appendChild(aEM), qb.appendChild(aEN), qb.appendChild(aEO), qb.appendChild(aEP), qb
		.appendChild(qc), qb.appendChild(aEQ), qb.appendChild(aET), aEL.aEW.show(qc)
}

function aEn() {
	this.b8 = new aEo, this.aQ = new a2u, this.aS = new aEp, this.h = new a2m, this.aJ = function() {
		this.aQ.aJ(), (new aEq).aJ()
	}
}

function wg() {
	var yM, z2, z3, kI;

	function z4() {
		z6(), 2 === bq.data.playerNamesType && 1 === ar.t4.tt(bq.data.playerNamesData).length && (bq.data.playerNamesType = 0), 2 !== bq.data.playerNamesType && (bq.data.playerNamesData = null), aM.wq()[19] = null, aM.rI()
	}

	function z6() {
		2 === bq.data.playerNamesType && ar.t4.aEr(z3.yX(), bq.data.playerNamesData, 20)
	}
	this.show = function() {
		yM.show(), this.resize()
	}, this.aR = function() {
		yM.aR()
	}, this.resize = function() {
		yM.resize(), z2.resize()
	}, this.b6 = function(aV) {
		2 === aV && yM.b7[0].b8()
	}, yM = new aK(L(232), [new aL("⬅️ " + L(1), z4)]), z2 = new rJ(yM.cQ, (function(kI) {
		var rM = new rN;
		rM.rO(L(47)), rM.zB(new zC({
			xx: [L(233), L(234), L(50)],
			value: bq.data.playerNamesType
		}, function(b4) {
			z6(), bq.data.playerNamesType = b4, aM.iZ(23)
		})), rM.rR(new a2O), rM.rR(new a2P({
			value: bq.data.selectableName
		}, L(235), function(value) {
			bq.data.selectableName = value
		})), kI.push(rM)
	}(kI = []), function(kI) {
		var rM;
		2 === bq.data.playerNamesType && ((rM = new rN).rO("Data"), z3 = new yR(0, 1, 0, 1), bq.data.playerNamesData && bq.data.playerNamesData.length === bq.g7 || (bq.data.playerNamesData = new Array(bq.g7), bq.data.playerNamesData.fill(
			"")), z3.yU(ar.d5.zD(bq.data.playerNamesData, 1, '"')), rM.rR(z3), kI.push(rM))
	}(kI), kI))
}

function a2O() {
	var cb;
	this.cb = document.createElement("hr"), this.resize = function() {
		ar.at.cd(this.cb, 8, ao.u0)
	}, (cb = this.cb).style.marginBottom = cb.style.marginTop = "0.65em", cb.style.marginLeft = cb.style.marginRight = "-4%", cb.style.border = "none"
}

function aEs() {
	var a8q, aEv, cL = document.createElement("div"),
		aEt = document.createElement("div"),
		aEu = document.createElement("div"),
		cN = document.createElement("div"),
		bD = [],
		a6Q = [L(236), L(237), L(238), L(239), L(240), L(241), L(242)],
		aEw = [1, 2, 3, 0, 9, 10, 11];

	function aEx(a5) {
		aM.iZ(8, 0, new kW(21, {
			gy: aEw[a5],
			sT: 0,
			sU: 10
		}))
	}
	this.show = function() {
			this.aT(aM.h.a8Y), document.body.appendChild(cL)
		}, this.aR = function() {
			document.body.removeChild(cL)
		}, this.aT = function(a8Y) {
			for (var aEz = [3, 0, 1, 2, 4, 5, 6], a5 = 0; a5 < bD.length; a5++) {
				var af = a8Y[a5];
				a8q[aEz[a5]][1].qo.textContent = af || ""
			}
		}, this.resize = function() {
			var a5, am = ab.gap,
				ae = ar.at.aF0(.085),
				af = Math.min(4 * ae, f.af - 2 * am),
				a3 = bD.length;
			for (ar.at.aF1(cL, am, f.ae - am - ae, af, ae), ar.at.cd(cL), ar.at.cd(aEt, 6), a5 = 0; a5 < a3 - 1; a5++) ar.at.cd(bD[a5].button, 6);
			for (a5 = 0; a5 < a3; a5++) a8q[a5][0].resize(), a8q[a5][1].resize();
			for (bD[0].ag = 0, bD[0].button.style.left = ar.at.cc(bD[0].ag), bD[0].button.style.width = ar.at.aF2(1.7 * ae), a5 = 1; a5 < a3; a5++) bD[a5].ag = bD[a5 - 1].ag + bD[a5 - 1].button.offsetWidth, bD[a5].button.style.left = ar.at.cc(bD[a5]
				.ag);
			if (!aEv) {
				if (!gW.f7()) return;
				(aEv = gW.get(14)).style.width = "24%", aEv.style.position = "absolute", aEt.appendChild(aEv)
			}
			aEv.style.left = ar.at.cc(0), aEv.style.top = "7%", aEu.cf && (aEu.scrollLeft = aEu.cf)
		}, cL.style.position = "absolute", aEt.style.width = "25%", aEt.style.height = "100%", aEt.style.backgroundColor = ao.cR, aEu.style.position = "absolute", aEu.style.width = "75%", aEu.style.height = "100%", aEu.style.backgroundColor = ao.cR,
		aEu.style.top = aEu.style.right = ar.at.cc(0), ar.at.cS(aEu), cN.style.height = cN.style.maxHeight = "100%", bD.push(new aL("", function() {
			aEx(0)
		}, ao.a4z)), bD.push(new aL("", function() {
			aEx(1)
		}, ao.a50)), bD.push(new aL("", function() {
			aEx(2)
		}, ao.a4t)), bD.push(new aL("", function() {
			aEx(3)
		}, ao.a4k)), bD.push(new aL("", function() {
			aEx(4)
		}, ao.a5G)), bD.push(new aL("", function() {
			aEx(5)
		}, ao.a5E)), bD.push(new aL("", function() {
			aEx(6)
		}, ao.a5G)), a8q = new Array(bD.length);
	for (var a5 = 0; a5 < bD.length; a5++) bD[a5].button.style.position = "absolute", a8q[a5] = [new aEy(a6Q[a5], bD[a5].button, .25, .45), new aEy("", bD[a5].button, .53, .84, 1)], bD[a5].button.style.height = bD[a5].button.style.maxHeight = "100%",
		bD[a5].button.top = ar.at.cc(0), cN.appendChild(bD[a5].button);
	aEu.appendChild(cN), cL.appendChild(aEt), cL.appendChild(aEu)
}

function aEV(aEL, qa) {
	var aF9, self, aF3 = document.createElement("div"),
		aF4 = document.createElement("div"),
		a8g = document.createElement("div"),
		aF5 = null,
		aFA = (this.aF6 = new rQ({
			value: "",
			b4: -1
		}, 0, aF7, function(cb) {
			cb.target.value = ar.d5.a7j(cb.target.value), aF5.qo.textContent = 127 - cb.target.value.length
		}), 0),
		a2T = 1,
		aFB = 0,
		aFC = 1048575;

	function aF7() {
		aEL(), aF5.qo.textContent = 127
	}

	function a2X(qf, qm) {
		qm && (qm.a8v = 1, qf.appendChild(qd.gX.transform(qm)))
	}

	function a2V(ld) {
		a2T ? aF3.scrollTop = aF3.scrollHeight : ld && (aF3.scrollTop = aFB)
	}
	this.bU = function(aFE) {
			aFC = 1048575, aF4.textContent = "", aFE || this.nH()
		}, this.nH = function() {
			var aAG = qd.h.qh[0],
				aAG = qd.h.aA2[aAG],
				jR = aAG.jR,
				a3 = jR.length,
				mV = 1048575 === aFC ? 0 : a3 - (aAG.jS - aFC + 1048575) % 1048575;
			if (aFC = aAG.jS, !(a3 <= (mV = Math.max(mV, 0)))) {
				for (var qf = document.createDocumentFragment(), a5 = mV; a5 < a3; a5++) a2X(qf, qd.nu.a8n(jR[a5], qd.nu.a8o(jR[a5])));
				aF4.appendChild(qf), a2V()
			}
		}, this.aFF = function(ml) {
			var qf = document.createDocumentFragment();
			a2X(qf, ml), aF4.appendChild(qf), a2V()
		}, this.show = function(e1) {
			e1.appendChild(aF3), e1.appendChild(a8g), this.resize(e1)
		}, this.aR = function(e1) {
			e1.removeChild(aF3), e1.removeChild(a8g)
		}, this.resize = function(e1) {
			aFA = e1 ? e1.offsetHeight : aFA;
			var e1 = ar.at.cX(.04, .75),
				aa = Math.max(e1, aFA - e1),
				aFG = f.af / f.aW,
				aFH = .7 * aFG,
				aa = (a8g.style.top = ar.at.cc(aFA - e1), a8g.style.height = ar.at.cc(e1), aF3.style.top = ar.at.cc(aFA - e1 - aa), aF3.style.height = ar.at.cc(aa), ar.at.cd(aF3, 2), this.aF6.cb.style.width = ar.at.cc(aFH), this.aF6.cb.style
					.fontSize = aF9.button.style.fontSize = ar.at.cc(.5 * e1), ar.at.cd(this.aF6.cb, 6), aF9.button.style.left = ar.at.cc(aFH), aF9.button.style.width = ar.at.cc(aFG - aFH), .385 * e1);
			bE.bF.bG() && (aa *= .8 - .12 * (f.af > f.ae)), aF4.style.marginLeft = aF4.style.marginRight = ar.at.cc(.5 * aa), aF4.style.fontSize = ar.at.cc(aa), a2V(1)
		}, (self = this).aF6.cb.aFD = 127, aF3.style.position = "absolute", aF3.style.top = "0", aF3.style.left = "0", aF3.style.width = "100%", aF3.style.overflowX = "hidden", aF3.style.overflowY = "auto", aF3.style.font = "inherit", aF3.style
		.backgroundColor = ao.gU, aF3.addEventListener("scroll", function() {
			aFB = aF3.scrollTop, a2T = aFB < aF3.scrollHeight - aF3.clientHeight - 2 ? 0 : 1
		}), aF4.style.font = "inherit", a8g.style.position = "absolute", a8g.style.left = "0", a8g.style.width = "100%", self.aF6.cb.setAttribute("placeholder", L(243)), self.aF6.cb.style.position = "absolute", self.aF6.cb.style.top = "0", self.aF6
		.cb.style.left = "0", self.aF6.cb.style.height = "100%", self.aF6.cb.style.backgroundColor = ao.a4T, self.aF6.cb.style.textAlign = "center", (aF9 = new aL(L(36), aF7)).button.top = "0", aF9.button.style.position = "absolute", aF9.button.style
		.height = "100%", aF9.e0(ao.a5L), aF5 = new aBP("127", aF9.button, 1, 1), aF3.appendChild(aF4), a8g.appendChild(self.aF6.cb), a8g.appendChild(aF9.button)
}

function aFJ() {
	this.aAM = new Uint16Array(2), this.jB = new Uint16Array(2), this.aFK = new Int32Array(2), this.sE = new Uint32Array(2), this.aFL = new Uint32Array(2), this.ts = new Uint8Array(4), this.aFM = new Uint8Array(4), this.sO = new Uint32Array(4), this
		.qJ = new Uint32Array(5), this.rp = new Uint32Array(8), this.j8 = new Uint16Array(16), this.a89 = new Uint16Array(512), this.aFN = new Uint16Array(512), this.aFO = new Uint16Array(512), this.aAg = function(a4, wB) {
			return a4[0] = wB, a4
		}, this.aFP = function(a4, wB, wC) {
			return a4[0] = wB, a4[1] = wC, a4
		}, this.aFQ = function(a4, wB, wC, nh) {
			return a4[0] = wB, a4[1] = wC, a4[2] = nh, a4
		}, this.aFR = function(a4, wB, wC, nh, aFS) {
			return a4[0] = wB, a4[1] = wC, a4[2] = nh, a4[3] = aFS, a4
		}
}

function aFT() {
	this.aFU = function() {
		for (var cE, ag, wB, aFV = a3r, aFW = bh.a63, af = bh.ma, aFX = af - 1, rE = bh.oi - 1, gi = 0, aZ = 1; aZ < rE; aZ++)
			for (wB = aZ * af, ag = 1; ag < aFX; ag++) aFW[cE = wB + ag << 2] === aFW[1 + cE] && aFW[cE] === aFW[2 + cE] && (gi++, aFV[2 + cE] = 4);
		hz.aCg = gi
	}, this.aFY = function(aFZ, aFa) {
		for (var aFV = a3r, af = bh.ma, aFX = af - 1, rE = bh.oi - 1, id = 0, aZ = 1; aZ < rE; aZ++)
			for (var wB = aZ * af, ag = 1; ag < aFX; ag++) {
				var gr = 2 + (wB + ag << 2);
				aFV[gr] === aFZ && (! function(gr, id, aFZ, aFa) {
					var a3 = 1,
						aFV = a3r,
						ix = hy.ix,
						aFc = [gr],
						aFd = id >> 8,
						aFe = 255 & id;
					aFV[gr - 2] = aFd, aFV[gr - 1] = aFe, aFV[gr] = 5;
					for (; a3;) {
						for (var aFf = [], a5 = 0; a5 < a3; a5++)
							for (var j3 = aFc[a5], iy = 3; 0 <= iy; iy--) {
								var j4 = j3 + ix[iy];
								aFV[j4] === aFZ && (aFV[j4 - 2] = aFd, aFV[j4 - 1] = aFe, aFV[j4] = aFa, aFf.push(j4))
							}
						a3 = (aFc = aFf).length
					}
				}(gr, id, aFZ, aFa), id = (id + 1) % 65536)
			}
	}
}

function eH() {
	function aFj(a4, y, eE) {
		for (var a5 = 0; a5 < 256; a5++) a4[a5] = (a4[a5] + (y >> (a5 + eE) % 30 & 1)) % 256
	}
	this.c = function(aFg, aFh) {
		var a4 = new Uint8Array(256);
		return function(a4, aFg, aFh) {
				var a5, aFl = 3 + (4 + aFg) % 32768,
					aFm = 12 + aFh % 32768,
					aFn = 17 + ((aFg & aFh) + (aFg | aFh) + aFg) % 32768;
				for (a5 = 0; a5 < 256; a5++) aFl = 1 + aFl * aFm % aFn, a4[a5] = aFl % 256
			}(a4, aFg, aFh), aFj(a4, aFg, 2), aFj(a4, aFh, 7),
			function(a4) {
				var a5, y, b4 = 0;
				for (a5 = 0; a5 < 3e4; a5++) y = a4[b4], a4[b4] = (y + a5 + a4[(b4 + a5) % 256]) % 256, b4 = (y + a5 + b4 + (y & b4)) % 256
			}(a4),
			function(a4) {
				var a5, d0 = 1,
					z0 = 1;
				for (a5 = 0; a5 < 256; a5 += 2) d0 = (1 + d0) * (a4[a5] + 1) % 1073741824, z0 = (1 + z0) * (a4[a5 + 1] + 1) % 1073741824;
				return [d0, z0]
			}(a4)
	}
}

function yR(aFo, aFp, aFq, aFr) {
	var yN = document.createElement("textarea"),
		aFs = (this.cb = yN, !0);

	function aFt() {
		yN.select(), document.execCommand("copy")
	}
	this.resize = function() {
			aFp && ar.at.cd(yN, 5)
		}, this.yU = function(a7k) {
			yN.value = a7k
		}, this.yX = function() {
			return yN.value
		}, this.yO = function() {
			yN.select()
		}, this.clear = function() {
			yN.value = ""
		}, this.yP = function() {
			aFs && navigator.clipboard ? (yN.select(), navigator.clipboard.writeText(yN.value).catch(function() {
				aFs = !1, aFt()
			})) : aFt()
		}, yN.setAttribute("id", "textArea" + aM.h.aAv++), yN.setAttribute("autocomplete", "off"), aFo && yN.setAttribute("placeholder", aFo), yN.style.top = "0", yN.style.left = "0", yN.style.width = "100%", yN.style.height = "100%", yN.style
		.userSelect = "none", yN.style.outline = "none", yN.style.resize = "none", yN.style.border = "none", yN.style.color = ao.ap, yN.style.backgroundColor = ao.a4S, aFr ? (yN.style.fontSize = "1em", yN.rows = 6, yN.style.padding = "0.25em") : (yN
			.style.padding = "0.45em", yN.style.fontSize = "1.2em"), aFq && yN.addEventListener("input", function(cb) {
			aFq(cb)
		}), yN.addEventListener("focus", function() {
			f.yl++
		}), yN.addEventListener("blur", function() {
			f.yl--
		})
}

function aFu() {
	function aFz(a5, az, b0) {
		var aG0, a8C;
		if (!(a5 < 0)) return a8C = bo.h.sd[a5], aG0 = i2.oT(a8C), a8C = i2.oV(a8C), a5 = 20 * (.9 + .1 * Math.log10(bo.h.sh[a5])), a5 = Math.max(a5, i2.od(ar.at.aF0(.02, 1.7))), z.aG3(i2.oS(az), i2.oU(b0), aG0, a8C, a5)
	}

	function aFv(aAP) {
		var aG4 = 4 + .03 * (1 + 1.5 * bE.bF.bG()) * f.bH / bg;
		return i2.oW(aAP, j9.qJ[1]) < aG4
	}
	this.qI = function(player, aAP) {
		return !!(bq.data.passableWater && i2.ok(aAP) && bo.h.s0 !== bo.h.s1 && bo.h.s2[player] !== bo.h.s3 && 0 !== fz.oH[player].length && bo.s4.s5(player, aAP) && aFv(aAP))
	}, this.aFw = function(player, jz, aAP) {
		return !!(i2.ok(aAP) && this.sA(player, jz) && bo.s4.sB(aAP) && aFv(aAP))
	}, this.sA = function(player, id) {
		for (var zM, sT = player << 3, sU = sT + bo.h.s2[player], sS = bo.h.sS, si = bo.h.si, a5 = sT; a5 < sU; a5++)
			if (id === si[zM = sS[a5]]) return j9.qJ[3] = zM, !0;
		return !1
	}, this.q9 = function(js) {
		var qB = bo.qA.qB;
		return !!this.sA(bq.d3, qB) && (gl.gm.q9(qB, js), !0)
	}, this.qD = function(az, b0) {
		var player = bq.d3,
			a3 = bo.h.s2[player];
		if (0 === a3) return !1;
		for (var sS = bo.h.sS, sd = bo.h.sd, sT = player << 3, zp = 80, aFx = -1, a5 = sT + a3 - 1; sT <= a5; a5--) {
			var aFy = sS[a5],
				vT = i2.oQ(az, b0, sd[aFy]);
			vT < zp && (zp = vT, aFx = aFy)
		}
		return !!aFz(aFx, az, b0) && (bo.qA.qB = bo.h.si[aFx], s7.s8.qD(), !0)
	}, this.qT = function(az, b0) {
		var a3 = bo.h.s0;
		if (a3 < 1) return -1;
		for (var sd = bo.h.sd, zp = 80, aFx = -1, a5 = 0; a5 < a3; a5++) {
			var vT = i2.oQ(az, b0, sd[a5]);
			vT < zp && (zp = vT, aFx = a5)
		}
		return aFz(aFx, az, b0) ? aFx : -1
	}, this.a1E = function(player, id) {
		for (var sT = player << 3, sU = sT + bo.h.s2[player], si = bo.h.si, sS = bo.h.sS, a5 = sT; a5 < sU; a5++) {
			var aFy = sS[a5];
			if (si[aFy] === id) return aFy
		}
		return -1
	}, this.zN = function(player) {
		for (var sT = player << 3, sU = sT + bo.h.s2[player], sS = bo.h.sS, sh = bo.h.sh, g5 = 0, a5 = sT; a5 < sU; a5++) g5 += sh[sS[a5]];
		return g5
	}, this.a1G = function(player) {
		return 0 === bo.h.s2[player] ? -1 : bo.h.sS[player << 3]
	}
}

function xj() {
	this.aBK = function(b4) {
		if ((qk = qd.qi.qk[b4]) < 2) return !1;
		var aAE = qd.h.aA2[b4],
			aG5 = 9 === aAE.jK ? 333 : 512,
			qk = Math.min(qk, aG5);
		8 === aAE.jK && (qk -= qk % 2);
		aG5 = qd.qi.qj[b4].splice(0, qk), qd.qi.qk[b4] -= qk, qk = function(aE0) {
			if (qd.xf) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var a3 = aE0.length, dr = qd.xf.dr, a5 = 0; a5 < a3; a5++)
					if (aE0[a5].dr === dr) return a5
			}
			return -1
		}(aG5);
		return -1 === qk ? (qd.qi.a9D = qd.qi.a9D.concat(aG5), 1e3 < qd.qi.a9D.length && qd.qi.a9D.splice(0, qd.qi.a9D.length - 1e3), qd.h.aA3 += 29 === aM.fQ && qd.h.qh[0] === b4 && 1 === qd.h.qh[2], !1) : (8 === aAE.jK && (aAE.jQ = (aAE.jQ + (
			qk >> 1)) % 1024, b4 = qk - qk % 2, qk %= 2, aG5 = aG5.slice(b4, 2 + b4)), i.aJ(aAE, aG5, qk), !0)
	}, this.aE6 = function(aAE, aE0, aE1) {
		var iy = bq.data = new hg,
			v3 = (iy.spawningSeed = aAE.spawningSeed, aAE.jK < 7 ? (iy.gameMode = 1, iy.numberTeams = aAE.jK + 2) : 9 === aAE.jK ? (iy.gameMode = iy.isZombieMode = 1, iy.numberTeams = 2) : (iy.gameMode = 0, iy.battleRoyaleMode = 7 === aAE.jK ?
				0 : 10 === aAE.jK ? 1 : 2), iy.selectedPlayer = aE1, iy.isContest = aAE.jN, iy.mapType = bh.v6(aAE.ig) ? 0 : 1, bh.v7(iy, aAE.ig), iy.mapSeed = aAE.mapSeed, iy.humanCount = aE0.length);
		iy.selectableSpawn = 1 === iy.gameMode || v3 < 100, iy.colorsData = new Uint32Array(v3), iy.playerNamesData = new Array(v3);
		for (var a5 = 0; a5 < v3; a5++) iy.colorsData[a5] = aE0[a5].color, iy.playerNamesData[a5] = aE0[a5].username;
		if (2 === iy.battleRoyaleMode)
			for (iy.elo = new Uint16Array(v3), a5 = 0; a5 < v3; a5++) iy.elo[a5] = aE0[a5].elo;
		m.setState(8), bh.dV(aAE.ig, iy.mapSeed), bq.hk(), bq.hj = 2
	}
}

function aG7() {
	var aG8, aG9, aGA, aGB, aGC, aGD, aGE, aGF, aGG, aGH, aGI, aGJ, aGK, aGL, aGM, aGN, aGO, aGP, aGQ, aGR, aGS, aGT, position, aGU, aGV, aGW, aGX, aGY = 1,
		lC = 1,
		aGZ = "";
	var leaderboardHasChanged = true;
	this.playerPos = bq.d3;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => lv[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(lv[bq.d3]);
	}

	function aGb() {
		aGE.clearRect(0, 0, aG8, a7P),
			aGE.fillStyle = ao.a54,
			aGE.fillRect(0, 0, aG8, aGJ),
			aGE.fillStyle = ao.cR,
			aGE.fillRect(0, aGJ, aG8, a7P - aGJ);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			lv[bq.d3]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aGT = -1;
		if (__fx.leaderboardFilter.enabled && aGT >= __fx.leaderboardFilter.filteredLeaderboard.length) aGT = -1;
		playerPos >= position && aGe(playerPos - position, ao.nb),
			0 !== lv[bq.d3] && 0 === position && aGe(0, ao.a58),
			-1 !== aGT && aGe(aGT, ao.a4U),
			aGE.fillStyle = ao.cR,
			//console.log("drawing", aGT),
			aGE.clearRect(0, a7P - __fx.leaderboardFilter.tabBarOffset, aG8, __fx.leaderboardFilter.tabBarOffset);
		aGE.fillRect(0, a7P - __fx.leaderboardFilter.tabBarOffset, aG8, __fx.leaderboardFilter.tabBarOffset);
		aGE.fillStyle = ao.ap,
			aGE.fillRect(0, aGJ, aG8, 1),
			aGE.fillRect(0, a7P - __fx.leaderboardFilter.tabBarOffset, aG8, 1),
			__fx.leaderboardFilter.drawTabs(aGE, aG8, a7P - __fx.leaderboardFilter.tabBarOffset, ao.nb),
			aGE.fillRect(0, 0, aG8, ab.ai),
			aGE.fillRect(0, 0, ab.ai, a7P),
			aGE.fillRect(aG8 - ab.ai, 0, ab.ai, a7P),
			aGE.fillRect(0, a7P - ab.ai, aG8, ab.ai), aGE.font = aG9, ar.at.textBaseline(aGE, 1), ar.at.textAlign(aGE, 1), aGE.fillText(aGZ, Math.floor((aG8 + aGJ - 22) / 2), Math.floor(aGH + aGA / 2));
		__fx.playerList.drawButton(aGE, 12, 12, aGJ - 22);
		var fp, j7 = playerPos < position + aGC - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aGC)
				position = (result.length > aGC ? result.length : aGC) - aGC;
			//if (position >= result.length) position = result.length - 1;
			for (aGE.font = aGB, ar.at.textAlign(aGE, 0), fp = aGC - j7; 0 <= fp; fp--) {
				const pos = result[fp + position];
				if (pos !== undefined)
					aGf(vo[pos]), aGg(fp, pos, vo[pos]);
			}
			for (ar.at.textAlign(aGE, 2), fp = aGC - j7; 0 <= fp; fp--) {
				const pos = result[fp + position];
				if (pos !== undefined)
					aGf(vo[pos]), aGh(fp, vo[pos]);
			}
		} else {
			for (aGE.font = aGB, ar.at.textAlign(aGE, 0), fp = aGC - j7; 0 <= fp; fp--)
				aGf(vo[fp + position]), aGg(fp, fp + position, vo[fp + position]);
			for (ar.at.textAlign(aGE, 2), fp = aGC - j7; 0 <= fp; fp--)
				aGf(vo[fp + position]), aGh(fp, vo[fp + position]);
		}
		2 == j7 && (aGf(bq.d3), ar.at.textAlign(aGE, 0), aGg(aGC - 1, lv[bq.d3], bq.d3), ar.at.textAlign(aGE, 2), aGh(aGC - 1, bq.d3)), 0 === position && (j7 = .7 * aGK / gW.get(4).height, aGE.setTransform(j7, 0, 0, j7, Math.floor(aGL + .58 * aGK +
			.5 * j7 * gW.get(4).width), Math.floor(aGH + aGA + .4 * aGK)), aGE.imageSmoothingEnabled = !0, aGE.drawImage(gW.get(4), -Math.floor(gW.get(4).width / 2), -Math.floor(gW.get(4).height / 2)), aGE.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aGf(player) {
		bq.hU && (aGE.fillStyle = hv.aCu[hv.a3k[player]])
	}

	function aGe(a5, aGj) {
		aGE.fillStyle = aGj, a5 = aGC - 1 < a5 ? aGC - 1 : a5;
		aGj = Math.floor((a5 === aGC - 1 ? 2 : 0 === a5 ? 1.15 : 1) * aGK), aGj = a5 === aGC - 2 ? Math.floor(aGJ + 9.15 * aGK) - Math.floor(aGJ + 8.15 * aGK) : aGj;
		aGE.fillRect(0, Math.floor(aGJ + (a5 + (0 === a5 ? 0 : .15)) * aGK), aG8, aGj)
	}

	function aGg(aGl, wF, a5) {
		aGE.fillText(aGP[wF], aGL, Math.floor(aGH + aGA + (aGl + .5) * aGK)), 1 === fz.lq[a5] && (aGE.font = "italic " + aGB);
		wF = Math.floor(aGH + aGA + (aGl + .5) * aGK);
		aGE.fillText(fz.fy[a5], aGM, wF), 0 !== fz.lq[a5] && (aGE.font = aGB), a5 < bq.fx && 2 !== fz.lq[a5] || aGE.fillRect(aGM, wF + .35 * aGY, aGO[a5], Math.max(1, .1 * aGY))
	}

	function aGh(aGl, a5) {
		aGE.fillText(fz.lJ[a5], aGN, Math.floor(aGH + aGA + (aGl + .5) * aGK))
	}

	function aGu(aZ) {
		return (aZ -= ab.gap + aGJ) < 0 ? Math.floor(aZ / aGK) - 1 : aZ < (aGC - 1) * aGK ? Math.floor(aZ / aGK) : aZ < a7P - aGJ ? aGC - 1 : (aZ -= a7P - aGJ, aGC + Math.floor(aZ / aGK))
	}

	function gk(ag, aZ) {
		return ag >= ab.gap && ag < ab.gap + aG8 && aZ >= ab.gap && aZ < ab.gap + a7P
	}
	this.aJ = function() {
			var a5;
			for (aGV = !1, aGX = aGW = aGU = 0, aGT = -1, aGC = bE.bF.bG() ? 6 : 10, lC = (position = 0) === (lC = aP.aQ.data[11].value) ? 10 : 1 === lC ? 5 : 1, aGS = !1, aGQ = new Uint16Array(aGC + 1), aGR = new Uint32Array(aGC + 1), aGG = bq.g7,
				vo = new Uint16Array(aGG), lv = new Uint16Array(aGG), a5 = aGG - 1; 0 <= a5; a5--) vo[a5] = a5, lv[a5] = a5;
			this.resize(!0), aGO = new Uint16Array(bq.g7);
			var aGa = Math.floor(aG8 - aGM - aGL - aGF);
			for (aGP = new Array(bq.g7), aGE.font = aGB, a5 = bq.g7 - 1; 0 <= a5; a5--) aGP[a5] = a5 + 1 + ".", fz.fy[a5] = ar.c8.aCO(fz.g0[a5], aGB, aGa), aGO[a5] = Math.floor(aGE.measureText(fz.fy[a5]).width);
			aGb()
		}, this.resize = function(aJ) {
			if (a7P = bE.bF.bG() ? (aG8 = Math.floor(.335 * f.bH), Math.floor(aGC * aG8 / 8)) : (aG8 = Math.floor(.27 * f.bH), Math.floor(aGC * aG8 / 10)), aG8 = Math.floor(.97 * aG8), (aGD = document.createElement("canvas")).width = aG8, aGD
				.height = a7P, aGE = aGD.getContext("2d", {
					alpha: !0
				}), aGH = .025 * aG8, aGA = .16 * aG8, aGI = 0 * aG8, aGJ = Math.floor(.45 * aGH + aGA), aGK = (a7P - aGA - 2 * aGH - aGI) / aGC,
				aGD.height = a7P += aGK, __fx.leaderboardFilter.tabBarOffset = Math.floor(aGK * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a7P - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aG8,
				aG9 = ar.at.au(1, Math.floor(.55 * aGA)), aGY = Math.floor((bE.bF.bG() ? .67 : .72) * aGK), aGB = ar.at.au(0, aGY), aGE.font = aGB, aGL = Math.floor(.04 * aG8), aGM = Math.floor((bE.bF.bG() ? .195 : .18) * aG8), aGF = Math.floor(aGE
					.measureText("00920600").width), aGE.font = aG9, aGN = aG8 - aGL, !aJ) {
				aGE.font = aGB;
				for (var a5 = bq.g7 - 1; 0 <= a5; a5--) aGO[a5] = Math.floor(aGE.measureText(fz.fy[a5]).width);
				aGb()
			}
			aGZ = ar.c8.aCO(L(244), aG9, .96 * aG8)
		}, this.aGc = function() {
			return aG8
		}, this.bR = function(ld, aGd) {
			(aGd || aGS && (ld || k.mF() % lC == 0)) && (aGS = !1, aGb())
		}, this.c = function() {
			! function() {
				for (var fp = aGG - 1; 0 <= fp; fp--) 0 === fz.iN[vo[fp]] && ! function(fp) {
					var aGs = vo[fp];
					aGG--;
					for (var a5 = fp; a5 < aGG; a5++) vo[a5] = vo[a5 + 1], lv[vo[a5]] = a5;
					vo[aGG] = aGs, lv[vo[aGG]] = aGG
				}(fp)
			}();
			for (var aGq, mU = aGG - 1, fp = 0; fp < mU; fp++) fz.lJ[vo[fp]] < fz.lJ[vo[fp + 1]] && (aGq = vo[fp], vo[fp] = vo[fp + 1], vo[fp + 1] = aGq, lv[vo[fp]] = fp, lv[vo[fp + 1]] = fp + 1);
			! function() {
				for (var dO = aGS, j7 = (aGS = !0, lv[bq.d3] >= aGC - 1 ? aGC - 2 : aGC - 1), a5 = j7; 0 <= a5; a5--)
					if (aGQ[a5] !== vo[a5] || aGR[a5] !== fz.lJ[vo[a5]]) return;
				(j7 != aGC - 2 || aGQ[aGC] === lv[bq.d3] && aGR[aGC] === fz.lJ[bq.d3]) && (aGS = dO)
			}();
			for (var a5 = aGC - 1; 0 <= a5; a5--) aGQ[a5] = vo[a5], aGR[a5] = fz.lJ[vo[a5]];
			aGQ[aGC] = lv[bq.d3], aGR[aGC] = fz.lJ[bq.d3];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.ay = function(ag, aZ) {
			return !!gk(ag, aZ) && ((__fx.utils.isPointInRectangle(ag, aZ, ab.gap + 12, ab.gap + 12, aGJ - 22, aGJ - 22) && __fx.playerList.display(fz.g0), true) &&
				!(aZ - ab.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ag - ab.gap)) && (aGU = k.e6, aGV = !0, aGW = aGX = aGu(aZ), n8.aGv() && (ag = nS(-1, aGX, aGC), aGT !== (ag = ag === aGC ? -
					1 : ag)) && (aGT = ag, aGb(), k.l = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aGb(), k.l = !0;
		},
		this.b2 = function(ag, aZ) {
			if (__fx.utils.isPointInRectangle(ag, aZ, ab.gap + 12, ab.gap + 12, aGJ - 22, aGJ - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aGb(), k.l = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aGb(), k.l = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ag, aZ, ab.gap, ab.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ag - ab.gap
				)) return;
			var dO, aGt = aGu(aZ);
			return aGV ? (dO = position, (position = nS(0, position += aGW - aGt, bq.g7 - aGC)) !== dO && (aGt = (aGt = nS(-1, aGW = aGt, aGC)) !== aGC && gk(ag, aZ) ? aGt : -1, aGT = aGt, aGb(), k.l = !0), !0) : (aGt = (aGt = nS(-1, aGt, aGC)) ===
				aGC || !gk(ag, aZ) || n8.aGv() ? -1 : aGt, aGT !== aGt && (aGT = aGt, aGb(), k.l = !0))
		}, this.el = function(ag, aZ) {
			if (!aGV) return !1;
			aGV = !1;
			var aGt = aGu(aZ);
			var isEmptySpace = false;
			return n8.aGv() && -1 !== aGT && (aGT = -1, aGb(), k.l = !0), k.e6 - aGU < 350 && aGX === aGt && -1 !== (aGt = (aGt = nS(-1, aGt, aGC)) !== aGC && gk(ag, aZ) ? aGt : -1) && (ag = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(), vo[
					__fx.leaderboardFilter.filteredLeaderboard[aGt + position] ?? (isEmptySpace = true, lv[bq.d3])]) : vo[aGt + position]), aGt === aGC - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : lv[bq.d3]) >=
				position + aGC - 1 && (ag = bq.d3), !isEmptySpace && bq.hU && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(ag, fz.g0, bq.hR), 0 !== fz.iN[ag] && !isEmptySpace) && iL.a1B(ag, 800, !1, 0), !0
		}, this.b3 = function(ag, aZ, deltaY) {
			var aGw;
			return !(aGV || bq.br || (aGw = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !gk(ag, aZ)) || (ag = (ag = nS(-1, aGu(aZ), aGC)) === aGC || n8.aGv() ? -1 : ag, 0 < deltaY ? position < bq.g7 - aGC && (position += Math.min(bq.g7 - aGC -
				position, aGw), aGT = ag, aGb(), k.l = !0) : 0 < position && (position -= Math.min(position, aGw), aGT = ag, aGb(), k.l = !0), 0))
		}, this.n = function() {
			ah.drawImage(aGD, ab.gap, ab.gap)
		}
}

function aCl() {
	this.pv = function(js) {
		bq.hR ? gl.a0a.pv(bq.d3, js) : g.v0.jr(js)
	}, this.py = function(cj, ju) {
		bq.hR ? gl.a0a.py(bq.d3, cj, ju) : g.v0.jt(cj, ju)
	}, this.pu = function(cj, jw) {
		bq.hR ? gl.a0a.rx(bq.d3, cj, jw) : g.v0.jv(cj, jw)
	}, this.q0 = function(cj, js) {
		bq.hR ? gl.a0a.q0(bq.d3, cj, js) : bo.jc.qI(bq.d3, js) && g.v0.jx(cj, js)
	}, this.q9 = function(jz, js) {
		bq.hR ? gl.a0a.q9(bq.d3, jz, js) : bo.jc.aFw(bq.d3, jz, js) && g.v0.jy(jz, js)
	}, this.sF = function(ju) {
		bq.hR ? gl.a0a.sF(bq.d3, ju) : g.v0.k0(ju)
	}, this.gn = function(gb) {
		bq.hR ? gl.a0a.sH(bq.d3, gb) : g.v0.k1(gb)
	}, this.rB = function(k3) {
		bq.hR ? gl.a0a.rB(bq.d3, k3) : g.v0.k2(k3)
	}, this.sJ = function() {
		bq.hR ? gl.a0a.sJ(bq.d3) : g.v0.k4()
	}, this.r9 = function() {
		bq.hR ? gl.a0a.r9(bq.d3) : g.v0.jx(1, 0)
	}, this.q2 = function(cj, js, ju) {
		bq.hR ? gl.a0a.q2(bq.d3, cj, js, ju) : g.v0.k5(cj, js, ju)
	}
}

function aGx(cD, size, h4, aGy, font) {
	var a5, mC = .2,
		canvas = document.createElement("canvas"),
		gq = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = cD, canvas.height = cD, gq.font = size + font, gq.textAlign = "center", gq.textBaseline = "middle", gq.fillStyle = "red", a5 = 0; a5 < h4.length; a5++) gq.fillText(h4[a5], .5 * cD, .5 * cD);
	return -1 < (canvas = function(vU) {
		var a5, al, iy = vU.data;
		for (a5 = iy.length - 4; 0 <= a5; a5 -= 4)
			if (al = iy[a5], aGy <= al) return Math.floor(a5 / (4 * cD));
		return -1
	}(gq.getImageData(0, 0, cD, cD))) && (mC = (canvas - .5 * cD + .1 * size) / size), Math.max(mC, 0)
}

function rN() {
	var dx;
	this.a9Y = [], this.dx = document.createElement("div"), this.rO = function(a2, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = a2, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.dx.appendChild(
			title), title
	}, this.re = function(a2, marginBottom) {
		var rd = document.createElement("p");
		return rd.textContent = a2, rd.style.fontSize = "0.75em", rd.style.lineHeight = "1.2em", rd.style.marginBottom = marginBottom || "0", this.dx.appendChild(rd), rd
	}, this.aH1 = function(a2) {
		var aH2 = document.createElement("p");
		return aH2.textContent = a2, aH2.style.fontSize = "1em", aH2.style.marginBottom = "0", aH2.style.whiteSpace = "pre-wrap", aH2.style.overflowWrap = "break-word", this.dx.appendChild(aH2), aH2
	}, this.a9j = function(yH, fontSize) {
		var dx = document.createElement("div");
		return dx.innerHTML = yH, dx.style.fontSize = fontSize || "1em", dx.style.lineHeight = "1.2em", this.dx.appendChild(dx), dx
	}, this.zB = function(aH3) {
		for (var a0d = aH3.a0d, a3 = a0d.length, a5 = 0; a5 < a3; a5++) this.dx.appendChild(a0d[a5])
	}, this.rR = function(qm) {
		return this.a9Y.push(qm), this.dx.appendChild(qm.cb), qm
	}, this.resize = function() {
		for (var a3 = this.a9Y.length, a5 = 0; a5 < a3; a5++) this.a9Y[a5].resize && this.a9Y[a5].resize()
	}, (dx = this.dx).style.position = "absolute", dx.style.height = "auto", dx.style.padding = "0.5em"
}

function xm() {
	function aHH(a4, sT, sU) {
		var aHI = a4[sT];
		a4[sT] = a4[sU], a4[sU] = aHI
	}
	this.qj = [
		[],
		[],
		[],
		[]
	], this.qk = [0, 0, 0, 0], this.a9D = [], this.aDV = function(aH4, dr, username, qr, wF, aH5, elo, color, a6e, aH6) {
		this.qj[aH4].push(this.a9E(dr, username, qr, wF, aH5, elo, color, a6e, aH6)), qd.xe === dr && (qd.xf = this.qj[aH4][this.qj[aH4].length - 1]), qd.h.aA3 += 29 === aM.fQ && qd.h.qh[0] === aH4 && 1 === qd.h.qh[2]
	}, this.a9E = function(dr, username, qr, wF, aH5, elo, color, a6e, aH6) {
		return {
			dr: dr,
			username: username,
			qr: qr,
			wF: wF,
			aH5: aH5,
			elo: elo,
			color: color,
			a6e: a6e,
			aH6: aH6
		}
	}, this.aH7 = function(b4, aH4, qr, wF, aH5, elo, a6e) {
		b4 = this.qj[aH4][b4];
		b4.qr = qr, b4.wF = wF, b4.aH5 = aH5, b4.elo = elo, b4.a6e = a6e, qd.h.aA3 += 29 === aM.fQ && qd.h.qh[0] === aH4 && 1 === qd.h.qh[2]
	}, this.aH8 = function(b4, aH4, aH9) {
		var b4 = this.qj[aH4][b4],
			aHA = b4.username,
			a9L = "Redacted " + dn.kY.d6(b4.dr, 2);
		b4.username = aH9 ? "[" + ar.d5.a7s(aHA) + "] " + a9L : a9L, aHA.indexOf("Redacted") < 0 && (b4.a99 = aHA, b4.a97 = 3), qd.h.aA3 += 29 === aM.fQ && qd.h.qh[0] === aH4 && 1 === qd.h.qh[2]
	}, this.aHB = function(b4, aHC, aHD) {
		var player = this.qj[aHC][b4];
		this.aHE(b4, aHC), this.qj[aHD].push(player), qd.h.aA3 += 29 === aM.fQ && qd.h.qh[0] === aHD && 1 === qd.h.qh[2]
	}, this.aHE = function(b4, aHC) {
		var qi = this.qj[aHC];
		this.a9D.push(qi[b4]), 1e3 < this.a9D.length && this.a9D.shift(), b4 >= this.qk[aHC] ? qi[b4] = qi[qi.length - 1] : (this.qk[aHC]--, 2 === aHC ? (qi.splice(this.qk[aHC] + 1, 0, qi[qi.length - 1]), qi.splice(b4, 1)) : (qi[b4] = qi[this.qk[
			aHC]], qi[this.qk[aHC]] = qi[qi.length - 1])), qi.pop(), qd.h.aA3 += 29 === aM.fQ && qd.h.qh[0] === aHC && 1 === qd.h.qh[2]
	}, this.aHF = function(b4, aAG) {
		qd.h.aA3 += 29 === aM.fQ && qd.h.qh[0] === aAG && 1 === qd.h.qh[2];
		var qi = this.qj[aAG],
			qm = qi[b4];
		if (2 === aAG)
			if (b4 >= this.qk[aAG]) {
				for (var aHG = this.qk[aAG], elo = qm.elo; aHG && elo > qi[aHG - 1].elo;) aHG--;
				qi[b4] = qi[this.qk[aAG]], qi.splice(this.qk[aAG]++, 1), qi.splice(aHG, 0, qm)
			} else qi.splice(this.qk[aAG]--, 0, qm), qi.splice(b4, 1);
		else b4 >= this.qk[aAG] ? aHH(qi, this.qk[aAG]++, b4) : aHH(qi, --this.qk[aAG], b4)
	}, this.a9C = function(dr) {
		for (var qj = this.qj, a3 = qj.length, a5 = 0; a5 < a3; a5++)
			for (var qi = qj[a5], ei = qi.length, fp = 0; fp < ei; fp++)
				if (dr === qi[fp].dr) return qi[fp];
		return null
	}
}

function aHJ() {
	this.vA = null, this.l = !1, this.e6 = 0, this.a5h = 56;
	var aHK = 0;

	function aHL() {
		k.e6 = aHK = performance.now(), k.vA.c(), window.requestAnimationFrame(aHL)
	}
	this.aJ = function() {
		this.iV(), window.requestAnimationFrame(aHL), this.e6 = performance.now()
	}, this.i5 = function() {
		bq.cq ? (this.vA = new a5Y, this.vA.aJ()) : bq.hR ? this.vA = new aHM : (this.vA = new aHN, this.vA.aJ())
	}, this.iV = function() {
		this.vA = new a, this.l = !0
	}, this.c = function() {
		this.vA.b++
	}, this.mF = function() {
		return this.vA.b
	}, this.ub = function() {
		var dO = performance.now();
		dO < aHK + 1e3 || (this.e6 = dO, this.vA.c())
	}
}

function aHO() {
	this.h1 = function(gA) {
		for (var x8 = gv, size = x8.gz(gA), gD = 7 + 9 * x8.gz(1), a4 = [], a5 = 0; a5 < size; a5++) a4.push(String.fromCharCode(x8.gz(gD)));
		return a4.join("")
	}
}

function iF() {
	aHV = 0, aHW = 2048, aHX = new Uint32Array(4 * aHW), aHY = 0, aHZ = new Uint32Array(aHW), aHa = new Uint8Array(bh.ma * bh.oi)
}

function a8O(player) {
	aHQ = player, aHb = !1, aHc(), aHd();
	for (var a5 = iG.r3(aHQ) - 1; 0 <= a5; a5--) 0 === iG.uH(aHQ, a5) && (aHP = a5, aHe());
	aHb && aHf()
}

function aHf() {
	aHg(), aHh()
}

function aHe() {
	aHU = iG.r8(aHQ, aHP), aHR = iG.r6(aHQ, aHP), aHS = iG.a2C(aHQ, aHP), aHi(), (0 !== aHV && (aHk(), aHl()) ? aHm : aHj)()
}

function aHl() {
	if (!((aHT = z.a0(aHR, aHV)) > bq.hK)) {
		if (!aHS) return !1;
		var aHn = aHV * (1 + bq.hK);
		aHR += ar.d1.w9(aHQ, aHn - aHR), aHT = z.a0(aHR, aHV)
	}
	return !0
}

function aHk() {
	for (var a5 = aHV - 1; 0 <= a5; a5--) aHa[z.a0(aHX[a5], 4)] = 0
}

function aHj() {
	1 === iG.r3(aHQ) && iD.a8R(aHQ);
	var dO = ar.d1.vy(aHQ, aHR);
	hw.sD(aHQ, aHR - dO, 12), iG.a25(aHQ, aHP)
}

function aHc() {
	for (var player = aHQ, jF = fz.jF, a3 = Math.min(jF[player].length, aHW), gi = 0, aHo = aHZ, a5 = a3 - 1; 0 <= a5; a5--) aHo[gi++] = jF[player][a5];
	aHY = gi
}

function aHd() {
	for (var a5 = fz.jF[aHQ].length - 1; 0 <= a5; a5--) hy.q7(fz.jF[aHQ][a5]) && hy.a43(fz.jF[aHQ][a5], aHQ);
	fz.jF[aHQ] = []
}

function aHi() {
	aHV = 0, (aHU === bq.g7 ? aHp : aHq)()
}

function aHq() {
	for (var cE, j7, a5, ix = hy.ix, iy = 3; 0 <= iy; iy--)
		for (a5 = aHY - 1; 0 <= a5; a5--) cE = aHZ[a5] + ix[iy], j7 = z.a0(cE, 4), 0 === aHa[j7] && hy.qE(cE) && hy.oN(cE) === aHU && (aHa[j7] = 1, aHX[aHV++] = cE)
}

function aHp() {
	for (var cE, j7, a5, ix = hy.ix, iy = 3; 0 <= iy; iy--)
		for (a5 = aHY - 1; 0 <= a5; a5--) cE = aHZ[a5] + ix[iy], j7 = z.a0(cE, 4), 0 === aHa[j7] && hy.j1(cE) && (aHa[j7] = 1, aHX[aHV++] = cE)
}

function mu() {
	this.size = 0, this.b4 = 0, this.di = null, this.aJ = function(di) {
		this.b4 = 0, this.di = di, this.size = di.length
	}, this.dV = function(aCo) {
		return this.aJ(new Uint8Array(this.gw(aCo))), this.di
	}, this.xv = function() {
		this.di = null
	}, this.dW = function(size, fi) {
		for (var di = this.di, mU = this.b4 + size - 1, a5 = this.b4; a5 <= mU; a5++) di[a5 >> 3] |= (fi >> mU - a5 & 1) << 7 - (7 & a5);
		this.b4 += size, this.b4 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.tQ = function(size, fi) {
		var an = size >> 1,
			iy = 1 << an;
		this.dW(size - an, z.a0(fi, iy)), this.dW(an, fi % iy)
	}, this.aHr = function(size) {
		for (var di = this.di, mU = this.b4 + size, a5 = this.b4; a5 < mU; a5++) di[a5 >> 3] &= 255 ^ 128 >>> (7 & a5)
	}, this.gw = function(aCo) {
		return aCo + 7 >> 3
	}, this.aHs = function(a4, mV, mU, aHt) {
		for (var a5 = mV; a5 < mU; a5++) this.dW(aHt, a4[a5])
	}
}

function aHu() {
	this.h = new aHv, this.aHw = new x2, this.v0 = new jl, this.aHx = new dR, this.dZ = new aHy, this.rb = new tG, this.aHz = new aI0, this.aI1 = new aI2, this.kA = new uX, this.ue = new aI3, this.ug = new aI4, this.ui = new a6Z, this.um = new gt,
		this.aJ = function() {
			this.h.aJ()
		}
}

function kW(id, dl, aI5) {
	var aC, yK;

	function aI9() {
		yK.ya.innerHTML += "<br>" + L(247)
	}

	function aI8() {
		dU.dV(48), dU.dW(24, Math.floor(z.pow(24) * Math.random())), dU.dW(24, Math.floor(z.pow(24) * Math.random())), gv.aJ(dU.di), aP.aS.aT(110, dn.kY.kZ(dn.kY.ka(8))), g.rb.tL()
	}
	this.aI6 = !0, this.a75 = id, this.show = function() {
		aC.show(), this.resize(), 15 === id ? (g.h.aI7(id) ? aI8 : aI9)() : 16 === id ? g.h.aI7(id) ? g.dZ.aIA(2) : aI9() : 17 === id ? g.h.aI7(id) ? g.dZ.aIA(3) : aI9() : 18 === id ? (g.h.close(0, 3253), g.h.uz(0, id), aI9()) : 21 === id ? g.h
			.aI7(id) ? g.aI1.aIB(dl.gy, dl.sT, dl.sU) : aI9() : 22 === id ? g.h.aI7(id) ? g.aI1.aIC(dl.gy, dl.a7f, dl.a7g) : aI9() : 23 === id ? g.h.aI7(id) ? g.aI1.aID(dl.aAy, dl.aAz) : aI9() : 24 === id ? g.h.aI7(id) ? g.aI1.aIE(dl.aAy, dl.sT,
				dl.sU) : aI9() : 25 === id ? g.h.aI7(id) ? g.rb.tO(dl) : aI9() : 28 === id ? g.h.aI7(id) ? g.aI1.aIF(dl.gy, dl.a7f, dl.a7g) : aI9() : 29 === id && (g.h.aI7(id) ? g.rb.tN(dl) : aI9())
	}, this.aIG = function() {
		15 === id ? aI8() : 16 === id ? g.dZ.aIA(2) : 17 === id ? g.dZ.aIA(3) : 18 === id ? aM.iZ(8, this.wP, new kW(16)) : 21 === id ? g.aI1.aIB(dl.gy, dl.sT, dl.sU) : 22 === id ? g.aI1.aIC(dl.gy, dl.a7f, dl.a7g) : 23 === id ? g.aI1.aID(dl.aAy,
			dl.aAz) : 24 === id ? g.aI1.aIE(dl.aAy, dl.sT, dl.sU) : 25 === id ? g.rb.tO(dl) : 28 === id ? g.aI1.aIF(dl.gy, dl.a7f, dl.a7g) : 29 === id ? g.rb.tN(dl) : 1e3 === id && (this.a75 = id = 25, g.rb.tO(dl))
	}, this.h3 = function(code, ld, data) {
		!ld && code !== id || (15 === code || 16 === code ? aM.iZ(7, this.wP) : 17 === code ? (g.h.close(0, 3252), aP.h.a2r(0), aP.aQ.data[117].xx && 0 < aP.aQ.data[117].xx.length ? (ld = aP.h.a2s(0), aP.aS.aT(105, ld.dr), aP.aS.aT(106, ld
			.password), aM.iZ(8, this.wP, new kW(16))) : (aP.aS.aT(105, ""), aM.h.aN())) : 21 === code ? aM.iZ(10, this.wP, new a8T(data)) : 23 === code ? aM.iZ(13, this.wP, new aIH({
			data: data,
			aAy: dl.aAy
		})) : 25 === code && (aM.h.wZ.dr = dl.dr, aM.iZ(15, this.wP)))
	}, this.aR = function() {
		aC.aR()
	}, this.resize = function() {
		aC.resize(), yK.resize()
	}, this.b6 = function(aV) {
		2 === aV && aC.b7[0].b8()
	}, aC = new aK(L(245), [new aL("⬅️ " + L(1), function() {
		aI5 ? aM.iZ(29) : aM.h.aN()
	})]), yK = new yL(aC.cQ, L(246))
}

function aII() {
	var aIJ = new Uint8Array(78);
	this.aJ = function() {
		var a5;
		for (aIJ[50] = 37, a5 = 0; a5 < 10; a5++) aIJ[a5 + 3] = a5 + 1;
		for (a5 = 0; a5 < 26; a5++) aIJ[a5 + 20] = a5 + 11, aIJ[a5 + 52] = a5 + 38
	}, this.zv = function(a2) {
		return a2.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a9W = function(a2, size) {
		if ((a2 = this.zv(a2)).length > size) return a2.substring(0, size);
		for (; a2.length < size;) a2 = "-" + a2;
		return a2
	}, this.zu = function(a2) {
		for (var aIK = aIJ, a3 = a2.length, a4 = new Uint8Array(a3), a5 = 0; a5 < a3; a5++) a4[a5] = aIK[a2.charCodeAt(a5) - 45];
		return a4
	}, this.zt = function(x9) {
		dU.dV(6 * x9.length), this.aIL(x9), gv.aJ(dU.di)
	}, this.aIL = function(x9) {
		for (var a3 = x9.length, af = dU, a5 = 0; a5 < a3; a5++) af.dW(6, x9[a5])
	}, this.tM = function(a2) {
		this.aIL(this.zu(a2))
	}, this.tP = function(a2, size) {
		this.aIL(this.zu(this.a9W(a2, size)))
	}, this.xl = function(a2, size) {
		for (var a4 = this.zu(this.a9W(a2, size)), y = 0, dL = 1, a5 = a4.length - 1; 0 <= a5; a5--) y += dL * a4[a5], dL *= 64;
		return y
	}
}

function aEo() {
	this.aIM = function(b4, my) {
		return Number(this.aIN(b4, my))
	}, this.aIN = function(b4, my) {
		var y = null;
		return 0 === bE.id ? bE.mz && (y = bE.mz.getItem((my ? "v" : "d") + b4)) : 1 === bE.id ? y = bE.n0.loadString((my ? 1e3 : 2e3) + b4) : 2 === bE.id && (y = bE.n1[(my ? "v" : "d") + b4]), y && 0 !== y.length ? y : null
	}, this.t3 = function(a3, aIO) {
		var a4 = [],
			aIP = aIO ? "e" : "l";
		if (0 === bE.id) {
			if (bE.mz)
				for (a5 = 0; a5 < a3; a5++) a4.push(bE.mz.getItem(aIP + a5))
		} else if (1 === bE.id)
			for (var aIQ = aIO ? 5e3 : 3e3, a5 = 0; a5 < a3; a5++) a4.push(bE.n0.loadString(aIQ + a5));
		else if (2 === bE.id)
			for (a5 = 0; a5 < a3; a5++) a4.push(bE.n1[aIP + a5]);
		return a4
	}, this.save = function(b4, value, my) {
		var aIR = (my ? "v" : "d") + b4;
		if (0 === bE.id) {
			if (bE.mz && aP.aQ.data[140].value) try {
				bE.mz.setItem(aIR, value)
			} catch (cb) {
				console.log(cb)
			}
		} else 1 === bE.id ? bE.n0.saveString((my ? 1e3 : 2e3) + b4, value) : 2 === bE.id && (bE.n1[aIR] = value, bE.n2.postMessage(aIR + " " + value))
	}, this.tD = function(a4, aIO) {
		var a3 = a4.length,
			aIP = aIO ? "e" : "l";
		if (0 === bE.id) {
			if (bE.mz && aP.aQ.data[140].value) try {
				for (a5 = 0; a5 < a3; a5++) bE.mz.setItem(aIP + a5, a4[a5])
			} catch (cb) {
				console.log(cb)
			}
		} else if (1 === bE.id)
			for (var aIQ = aIO ? 5e3 : 3e3, a5 = 0; a5 < a3; a5++) bE.n0.saveString(aIQ + a5, a4[a5]);
		else if (2 === bE.id)
			for (a5 = 0; a5 < a3; a5++) bE.n1[aIP + a5] = a4[a5], bE.n2.postMessage(aIP + a5 + " " + a4[a5])
	}
}

function aIS() {
	var size, aIT;
	this.aJ = function() {
		size = bq.hM, aIT = new Uint16Array(bq.g7);
		for (var fx = bq.fx, a5 = bq.hM - 1; 0 <= a5; a5--) aIT[a5] = fx + a5
	}, this.c = function() {
		for (var a5 = size - 1; 0 <= a5; a5--)
			if (0 === fz.iN[aIT[a5]]) {
				fp = void 0;
				var fp = a5;
				size--, aIT[fp] = aIT[size]
			} else g6.c(aIT[a5])
	}, this.aIV = function(cE) {
		aIT[size++] = cE
	}
}

function aIX() {
	function aIZ(key) {
		var yS;
		return "undefined" == typeof URLSearchParams || (yS = window.location.search, "string" != typeof(yS = new URLSearchParams(yS).get(key))) || yS.length < 1 ? null : yS
	}
	this.aBK = function() {
		if (0 !== bE.id) return !1;
		if (! function() {
				var value = aIZ("account");
				if (!value && !(value = aIZ("a"))) return void aIa.clear();
				return aIa.clear(), aM.iZ(8, aM.fQ, new kW(1e3, {
					kX: 0,
					dr: value,
					kV: 0
				})), 1
			}()) {
			var value = aIZ("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			aM.iZ(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var aIb = new URL(window.location.href);
		aIb.search = "";
		try {
			return history.replaceState(null, "", aIb.toString()), !0
		} catch (cb) {
			console.log("error 352: " + cb)
		}
		return !1
	}, this.aId = function(key, value) {
		if (0 === bE.id) try {
			var aIb = new URL(window.location.href),
				cE = aIb.searchParams;
			cE.set(key, value), aIb.search = cE.toString(), history.replaceState(null, "", aIb.toString())
		} catch (cb) {
			console.log("error 358: " + cb)
		}
	}
}

function xn() {
	var a6M = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aIe = [ao.a4c, ao.a4c, ao.a2b, ao.a4x, ao.a4y, ao.a4o, ao.a53, ao.a2b, ao.a5H, ao.kR, ao.a5J],
		aIf = [
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
		aIg = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aIm(jR, dr, aIo) {
		for (var an = jR.length - 1; 0 <= an; an--) {
			var qm = jR[an];
			0 === qm.id && qm.dr === dr && (qm.ml = "[Redacted Message]", aIo) && (qm.a9A = 1)
		}
	}
	this.a8o = function(a8u) {
		var aIh, fc;
		return a8u.id < 5 && (aIh = "@" + dn.kY.d6(a8u.dr, 5)), 0 === a8u.id ? aIh + ": " + a8u.ml : 1 === a8u.id ? (fc = "@" + dn.kY.d6(a8u.target, 5), 0 === a8u.a9K ? 32768 <= a8u.value ? aIh + " voted with " + (a8u.value - 32768 + 1) +
				" gold against " + fc + " to weaken the latter's admin position. 📉" : aIh + " voted with " + (a8u.value + 1) + " gold for " + fc + " to strengthen the latter's admin position. 💪" : 1 === a8u.a9K ? aIh + " sent " + Math.floor(a8u
					.value / 100) + " 🧈 gold to " + fc + "." : aIh + " voted with " + (a8u.value / 10).toFixed(1) + " points for " + fc + " to acknowledge the latter as clan leader. ✅") : 2 === a8u.id ? 0 === a8u.a9K ? aIh +
			" was 🔇 muted for 1 Hour." : 1 === a8u.a9K ? "The username of " + aIh + " was ✂️ redacted. Duration: 1 Day" : aIh + " 👢 was kicked." : 3 === a8u.id ? aIh + t0.a6W(a8u.a9K, t0.a6S[a8u.a9K][a8u.value]) + "@" + dn.kY.d6(a8u.target,
			5) + t0.a6X(a8u.a9K, t0.a6S[a8u.a9K][a8u.value]) : 4 === a8u.id ? 3 === a8u.a9K && 0 === a8u.dr ? "@" + dn.kY.d6(a8u.target, 5) + " was 🕵️‍♂️ stealth-reported." : aIh + t0.a6W(5, t0.a6S[5][a8u.a9K]) + "@" + dn.kY.d6(a8u.target, 5) +
			t0.a6X(5, t0.a6S[5][a8u.a9K]) : 5 === a8u.id ? aIg[a8u.a9K] : 6 === a8u.id ? "You are about to mention " + a8u.value + " player" + (1 === a8u.value ? "" : "s") + ". This action will cost " + (Math.max(10 * a8u.value, 10) / 100)
			.toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.a8n = function(a8u, bK) {
		return {
			a8u: a8u,
			ml: bK,
			a8x: 0,
			fontSize: 1,
			a8v: 0,
			a9B: a8u.id ? ao.a4w : ao.ap
		}
	}, this.qp = function(player, aAG) {
		return (2 === aAG ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.qq = function(qr) {
		return aIe[qr]
	}, this.a93 = function(qr, wF) {
		return qr < 3 || 7 === qr ? aIf[qr][0] : 4 === qr ? aIf[qr][wF < 1 ? 0 : wF < 10 ? 1 : 2] : aIf[qr][wF < 10 ? 0 : 1]
	}, this.a94 = function(wF) {
		return 0 === wF
	}, this.a9C = function(aAG, dr) {
		for (var qj = qd.qi.qj, qi = qj[aAG], a3 = qi.length, a5 = 0; a5 < a3; a5++)
			if (dr === qi[a5].dr) return qi[a5];
		for (var an = 0; an < qj.length; an++)
			if (aAG !== an)
				for (a3 = (qi = qj[an]).length, a5 = 0; a5 < a3; a5++)
					if (dr === qi[a5].dr) return qi[a5];
		return null
	}, this.qs = function(qm) {
		return !!qd.xf && qm.dr === qd.xf.dr
	}, this.aIi = function(qi, aIj, aIk) {
		var aAz = [];
		loop: for (var a5 = aIj; a5 < aIk; a5++) {
			var hC = ar.d5.a7s(qi[a5].username);
			if (hC) {
				for (var an = aAz.length - 1; 0 <= an; an--)
					if (hC === aAz[an].name) {
						aAz[an].gi++;
						continue loop
					} aAz.push({
					name: hC,
					gi: 1
				})
			}
		}
		if (aAz.sort(function(fp, an) {
				return an.gi - fp.gi
			}), 0 === aAz.length) return "";
		for (var a2 = aAz[0].name + ": " + aAz[0].gi, a5 = 1; a5 < aAz.length; a5++) a2 += "   " + aAz[a5].name + ": " + aAz[a5].gi;
		return a2
	}, this.aIl = function(qr, wF, aH5) {
		return 0 === a6M[qr].length ? "Rank: " + (wF + 1) : a6M[qr] + " Rank: " + (wF + 1) + (3 !== qr && aH5 < 100 ? "   " + a6M[3] + " Rank: " + (aH5 + 1) : "")
	}, this.a9N = function(dr) {
		for (var aA2 = qd.h.aA2, a5 = 0; a5 < aA2.length; a5++) aIm(aA2[a5].jR, dr);
		aIm(qd.message.aIn(), dr, 1), qd.gX.a9N(dr)
	}
}

function aIp() {
	var aIq = new Uint16Array(bq.g7);

	function aIv(player, aIt) {
		for (var a3 = j9.jB[0], j8 = j9.j8, aBM = -1, pi = bq.g7, a5 = 0; a5 < a3; a5++) {
			var vT, cE = j8[a5];
			jA(player, cE) && (vT = i2.oX(aIt, i2.ow(cE)), -1 === aBM || vT < aBM) && (aBM = vT, pi = cE)
		}
		return pi
	}

	function aIx(aIu, aIt) {
		if (aIu === bq.g7) return 0;
		for (var oH = fz.oH[aIu], ei = oH.length, a3 = Math.min(ei, 10), pi = 0, aBM = i2.oX(oH[pi] >> 2, aIt), a5 = 0; a5 < a3; a5++) {
			var eE = g1.g2(ei),
				vT = i2.oX(oH[eE] >> 2, aIt);
			vT < aBM && (aBM = vT, pi = eE)
		}
		return oH[pi] >> 2
	}

	function aIy(player, aIt, ju, aJ2) {
		var aJ3;
		(aJ2 === bq.g7 || (aJ3 = i2.ow(ju), aJ2 = i2.ow(aJ2), i2.oX(aIt, aJ3) < i2.oX(aIt, aJ2))) && (aIq[player] = ju)
	}
	this.aJ = function() {
		aIq.fill(bq.g7)
	}, this.c = function(player) {
		var aIt, aIw, aIu, ju = function(player) {
			var ju = aIq[player];
			if (ju !== bq.g7) {
				if (ar.d1.vu(ju)) return ju;
				aIq[player] = bq.g7
			}
			return bq.g7
		}(player);
		return function(player) {
			for (var aBH = i8.j5, ei = i8.j6, a3 = Math.min(ei, ei < 17 && 5 === g1.g2(20) ? 1 : 16), j7 = g1.g2(ei), j8 = j9.j8, oH = fz.oH, gi = 0, a5 = 0; a5 < a3; a5++) {
				var cE = aBH[(a5 + j7) % ei];
				cE !== player && oH[cE].length && (j8[gi++] = cE)
			}
			j9.jB[0] = gi
		}(player), 0 !== j9.jB[0] && (0 < (aIw = aIx(aIu = aIv(player, aIt = i2.ox(player)), aIt)) && bo.s4.s5(player, aIw) ? (aIy(player, aIt, aIu, ju), !0) : 0 < (aIu = function(player, aIt) {
			for (var a3 = j9.jB[0], j8 = j9.j8, aJ1 = aIq, j7 = 0, a5 = 0; a5 < a3; a5++) {
				var cE = j8[a5],
					cE = aJ1[cE];
				cE !== bq.g7 && ar.d1.vu(cE) && player !== cE && jA(player, cE) && (j8[j7++] = cE)
			}
			return 0 !== (j9.jB[0] = j7) ? aIx(aIv(player, aIt), aIt) : 0
		}(player, aIt)) && bo.s4.s5(player, aIu) ? (aIy(player, aIt, hy.oN(aIu << 2), ju), !0) : !!(0 < (aIw = aIx(ju, aIt)) && bo.s4.s5(player, aIw)))
	}
}

function aJ5() {
	this.af = 0, this.ae = 0, this.cG = 0, this.cH = 0, this.aJ6 = 0, this.aJ7 = 0, this.d0 = 0, this.z0 = 0;
	var aJ9 = this.aJ8 = 0;
	this.aJA = 0, this.aJB = 0, this.aJC = 0, this.a7D = 0, this.b4 = 0, this.ni = null, this.ci = !1, this.aJD = -1, this.aJE = !1, this.aJF = [0, 0], this.fZ = function() {
		this.ni = [L(248), L(249, 0, "Balance"), L(250, 0, "Interest"), L(251)]
	}, this.aJ = function() {
		this.ci = !1, this.aJD = -1, this.aJE = !1, this.resize()
	}, this.resize = function() {
		this.af = f.af < 1.369 * f.ae ? f.af : 1.369 * f.ae;
		var iy = bE.bF.bG() && f.af < f.ae ? 1 : bE.bF.bG() ? .8 : f.af < f.ae ? .65 : .59;
		this.af = Math.floor(iy * this.af), this.af -= bE.bF.bG() && f.af < f.ae ? 2 * ab.gap + 2 : 0, this.ae = Math.floor(this.af / 1.369), this.a7D = Math.floor(this.ae / 150), this.a7D = Math.max(this.a7D, 1.5), this.cG = Math.floor(1 + .02 *
			this.af), this.cH = Math.floor(1 + .04 * this.af), this.d0 = this.cH, aJ9 = Math.floor(.75 * this.d0), this.z0 = Math.floor(1 + .075 * this.af), this.aJA = Math.floor(1 + .1125 * this.af), this.aJB = Math.floor(this.af * (bE.bF
			.bG() ? .03 : .029)), this.aJB = Math.max(this.aJB, 4), this.aJC = Math.floor(.035 * this.af), this.aJC = Math.max(this.aJC, 4), this.aJ8 = this.ae - 2 * this.d0 - this.z0 - this.aJA, this.ci && this.aJG()
	}, this.ay = function(az, b0) {
		var m4, m3;
		return !!this.ci && (m3 = az, m4 = b0, az -= z.a0(f.af - this.af, 2), b0 -= z.a0(f.ae - this.ae, 2), az < 0 || b0 < 0 || az >= this.af || b0 >= this.ae || az >= this.af - this.aJA && b0 < this.aJA ? -1 !== c2.ay(m3, m4) || bt.ay(m3,
			m4) || this.aR() : b0 < this.aJA || (b0 < this.ae - this.z0 ? (this.aJE = !0, this.aJD = (az - 2 * this.cG - this.aJ6) / this.aJ7, 3 !== this.b4 && (k.l = !0)) : (m3 = (m3 = Math.floor(az / (this.af / this.ni.length))) < 0 ? 0 :
				m3 >= this.ni.length ? this.ni.length - 1 : m3) !== this.b4 && (this.b4 = m3, this.aJG(), k.l = !0)), !0)
	}, this.b2 = function(az, b0) {
		return this.aJF[0] = az, this.aJF[1] = b0, !(!this.ci || !this.aJE || (az -= z.a0(f.af - this.af, 2), b0 = this.aJD, this.aJD = (az - 2 * this.cG - this.aJ6) / this.aJ7, (0 <= this.aJD && this.aJD <= 1 || 0 <= b0 && b0 <= 1) && (k.l = !
			0), 0))
	}, this.el = function() {
		this.aJE && (this.aJE = !1)
	}, this.nN = function() {
		this.ci ? this.aR() : this.show()
	}, this.show = function() {
		hw.aJH < 2 || (this.ci = !0, this.aJG())
	}, this.aR = function() {
		this.ci = !1, this.aJD = -1, k.l = !0
	}, this.aJG = function() {
		this.b4 < 2 ? this.aJ6 = bz.measureText(ar.d5.d6(hw.max[this.b4]), ar.at.au(0, this.aJB)) : 2 === this.b4 && (this.aJ6 = bz.measureText(ar.d5.d7(6, 2), ar.at.au(0, this.aJB))), this.aJ7 = this.af - 2 * this.cG - this.aJ6 - this.cH
	}, this.nH = function() {
		this.ci && this.aJG()
	}, this.n = function() {
		this.ci && this.nT()
	}, this.nT = function() {
		var ag = z.a0(f.af - this.af, 2),
			aZ = z.a0(f.ae - this.ae, 2);
		ah.setTransform(1, 0, 0, 1, ag, aZ), ah.fillStyle = ao.c9, ah.fillRect(0, this.aJA, this.af, this.ae - this.aJA), this.aJI(), this.aJJ(), ah.strokeRect(0, 0, this.af, this.ae), ar.at.textAlign(ah, 2), ah.font = ar.at.au(0, this.aJB),
			0 === this.b4 ? this.aJK(hw.aJL, ag, aZ) : 1 === this.b4 ? this.aJK(hw.nw, ag, aZ) : 2 === this.b4 ? this.aJM(ag, aZ) : 3 === this.b4 && (this.aJN(ag, aZ), this.aJO(ag, aZ)), c2.aJP(Math.floor(ag + this.af - .725 * this.aJA), Math
				.floor(aZ + .275 * this.aJA), Math.floor(.45 * this.aJA)), ah.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aJI = function() {
		var a5, dO;
		for (ah.lineWidth = this.a7D, ar.at.textBaseline(ah, 1), ar.at.textAlign(ah, 1), ah.strokeStyle = ao.ap, ah.font = ar.at.au(1, this.aJC), dO = this.af / this.ni.length, ah.fillStyle = ao.a4i, ah.fillRect(this.b4 * dO, this.ae - this.z0,
				dO, this.z0), ah.fillStyle = ao.ap, ah.fillRect(0, this.ae - this.z0 - .5 * this.a7D, this.af, this.a7D), a5 = 1; a5 <= 3; a5++) ah.fillRect(a5 * dO, this.ae - this.z0, this.a7D, this.z0);
		for (a5 = this.ni.length - 1; 0 <= a5; a5--) ah.fillText(ar.c8.aCO(this.ni[a5], 0, .9 * dO), (a5 + .5) * dO, this.ae - .46 * this.z0)
	}, this.aJJ = function() {
		ah.fillStyle = ao.a51, ah.fillRect(0, 0, this.af, this.aJA), ah.fillStyle = ao.ap, ah.fillRect(0, this.aJA - .5 * this.a7D, this.af, this.a7D), ah.font = ar.at.au(1, .39 * this.aJA), ah.fillText(ar.c8.aCO(L(252), 0, .8 * this.af), Math
			.floor(this.af / 2), Math.floor(.55 * this.aJA))
	}, this.aJK = function(a4, ag, aZ) {
		var ei = hw.max[this.b4],
			dN = (ah.setTransform(1, 0, 0, 1, ag + 2 * this.cG + this.aJ6, aZ + this.d0 + this.aJA), ah.lineWidth = 2, this.aJ8 / Math.sqrt(ei));
		ah.beginPath(), ah.moveTo(this.aJ7, this.aJ8 - dN * Math.sqrt(a4[hw.aJH - 1]));
		for (var a5 = hw.aJH - 2; 0 <= a5; a5--) ah.lineTo(a5 * this.aJ7 / (hw.aJH - 1), this.aJ8 - dN * Math.sqrt(a4[a5]));
		ah.stroke();
		ag = this.aJP(a4, dN, .5);
		ag < .95 && ah.fillText(ar.d5.d6(ei), -this.cG, 0), .05 < Math.abs(ag - .5) && ah.fillText(ar.d5.d6(Math.floor(ei / 4)), -this.cG, Math.floor(this.aJ8 / 2)), .05 < ag && ah.fillText("0", -this.cG, this.aJ8)
	}, this.aJM = function(ag, aZ) {
		ah.setTransform(1, 0, 0, 1, ag + 2 * this.cG + this.aJ6, aZ + this.d0 + this.aJA), ah.lineWidth = 2;
		var dN = this.aJ8 / Math.max(hw.max[this.b4], 1);
		ah.beginPath(), ah.moveTo(this.aJ7, this.aJ8 - dN * hw.nv[hw.aJH - 1]);
		for (var a5 = hw.aJH - 2; 0 <= a5; a5--) ah.lineTo(a5 * this.aJ7 / (hw.aJH - 1), this.aJ8 - dN * hw.nv[a5]);
		ah.stroke();
		ag = this.aJP(hw.nv, dN, 1), aZ = hw.max[this.b4] / 100;
		ag < .95 && ah.fillText(ar.d5.d7(aZ, 2), -this.cG, 0), .05 < Math.abs(ag - .5) && ah.fillText(ar.d5.d7(aZ / 2, 2), -this.cG, Math.floor(this.aJ8 / 2)), .05 < ag && ah.fillText(ar.d5.d7(0, 2), -this.cG, this.aJ8)
	}, this.aJN = function(ag, aZ) {
		ah.setTransform(1, 0, 0, 1, ag + .34 * this.af, aZ + 2 * aJ9 + this.aJA), ar.at.textAlign(ah, 2);
		for (var aGk = this.ae - 4 * aJ9 - this.z0 - this.aJA, a4 = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a5 = 9; 0 <= a5; a5--) ah.fillText(ar.c8.aCO(hw.aJQ[a4[a5]], 0, .31 * this.af), 0, a5 * aGk / 9);
		var y = hw.a2D;
		for (ah.setTransform(1, 0, 0, 1, ag + .39 * this.af, aZ + 2 * aJ9 + this.aJA), ar.at.textAlign(ah, 0), ah.fillText(ar.d5.d7(100 * y[0] / (1024 * Math.max(y[1], 1)), 1), 0, 0), a5 = 8; 1 <= a5; a5--) ah.fillText(y[a4[a5]].toString(), 0,
			a5 * aGk / 9);
		ah.fillText(ar.d5.d7(100 * (1 - fz.lJ[bq.d3] / y[7]), 0), 0, aGk)
	}, this.aJO = function(ag, aZ) {
		ah.setTransform(1, 0, 0, 1, ag + .79 * this.af, aZ + 2 * aJ9 + this.aJA), ar.at.textAlign(ah, 2);
		var a5, aGk = this.ae - 4 * aJ9 - this.z0 - this.aJA;
		for (ah.fillStyle = ao.a4e, a5 = 2; 0 <= a5; a5--) ah.fillText(ar.c8.aCO(hw.aJQ[a5 + 8], 0, .31 * this.af), 0, a5 * aGk / 9);
		ah.fillText(ar.c8.aCO(hw.aJQ[18], 0, .31 * this.af), 0, 3 * aGk / 9), ah.fillStyle = ao.a4d, ah.fillText(ar.c8.aCO(hw.aJQ[11], 0, .31 * this.af), 0, 4 * aGk / 9), ah.fillStyle = ao.u2, ah.fillText(ar.c8.aCO(hw.aJQ[13], 0, .31 * this.af),
				0, 5 * aGk / 9), ah.fillText(ar.c8.aCO(hw.aJQ[15], 0, .31 * this.af), 0, 6 * aGk / 9), ah.fillText(ar.c8.aCO(hw.aJQ[16], 0, .31 * this.af), 0, 7 * aGk / 9), ah.fillText(ar.c8.aCO(hw.aJQ[12], 0, .31 * this.af), 0, 8 * aGk / 9), ah
			.fillStyle = ao.u1, ah.fillText(ar.c8.aCO(hw.aJQ[17], 0, .31 * this.af), 0, aGk), ah.fillStyle = ao.a4e;
		var y = hw.a2D,
			a8d = y[8] + y[9] + y[10] + y[18],
			a8d = ar.d5.d6(a8d),
			aJR = ah.measureText(a8d).width,
			ag = (ah.setTransform(1, 0, 0, 1, ag + .83 * this.af + aJR, aZ + 2 * aJ9 + this.aJA), ah.fillText(ar.d5.d6(y[8]), 0, 0), ah.fillText(ar.d5.d6(y[9]), 0, aGk / 9), ah.fillText(ar.d5.d6(y[10]), 0, 2 * aGk / 9), ah.fillText(ar.d5.d6(y[
				18]), 0, 3 * aGk / 9), ah.fillStyle = ao.a4d, ah.fillText(a8d, 0, 4 * aGk / 9), ah.fillStyle = ao.u2, ah.fillText(ar.d5.d6(y[13]), 0, 5 * aGk / 9), ah.fillText(ar.d5.d6(y[15]), 0, 6 * aGk / 9), ah.fillText(ar.d5.d6(y[16]), 0,
				7 * aGk / 9), ah.fillText(ar.d5.d6(y[12]), 0, 8 * aGk / 9), y[12] + y[13] + y[15] + y[16]);
		ah.fillStyle = ao.u1, ah.fillText(ar.d5.d6(ag), 0, aGk), ah.fillStyle = ao.ap
	}, this.aJP = function(a4, dN, eV) {
		var a5, cb, wB;
		return this.aJD < 0 || 1 < this.aJD ? .25 : (a5 = this.aJD * (hw.aJH - 1), wB = a4[cb = Math.floor(a5)], wB += (a5 - cb) * (a4[cb < hw.aJH - 1 ? cb + 1 : cb] - wB), ah.strokeStyle = ao.em, .04 < this.aJD && this.aJT(0, this.aJ8 - dN *
				Math.pow(wB, eV), a5 * this.aJ7 / (hw.aJH - 1), this.aJ8 - dN * Math.pow(wB, eV)), .04 < wB / hw.max[this.b4] && this.aJT(a5 * this.aJ7 / (hw.aJH - 1), this.aJ8, a5 * this.aJ7 / (hw.aJH - 1), this.aJ8 - dN * Math.pow(wB, eV)),
			ah.fillStyle = ao.a4r, ah.beginPath(), ah.arc(a5 * this.aJ7 / (hw.aJH - 1), this.aJ8 - dN * Math.pow(wB, eV), Math.max(2, .014 * this.ae), 0, 2 * Math.PI), ah.fill(), a4 = this.aJD * k.a5h, a4 = 0 === fz.iN[bq.d3] ? Math.floor(
				a4 * hw.aJU) : Math.floor(a4 * k.mF()), ah.fillStyle = ao.ap, ah.fillText(1 === eV ? ar.d5.d7(wB / 100, 2) : ar.d5.d6(Math.floor(wB)), -this.cG, this.aJ8 - dN * Math.pow(wB, eV)), ar.at.textAlign(ah, 1), ah.fillText(by.a2a(
				a4), a5 * this.aJ7 / (hw.aJH - 1), this.aJ8 + this.aJB - (bE.bF.bG() ? 2 : 0) - this.a7D), ar.at.textAlign(ah, 2), dN * Math.pow(wB, eV) / this.aJ8)
	}, this.aJT = function(gE, ex, li, lj) {
		ah.beginPath(), ah.moveTo(gE, ex), ah.lineTo(li, lj), ah.stroke()
	}
}

function aJV() {
	function aJi(player, ju, aJY) {
		3 <= aJY && 2142 < k.mF() && (ju === bq.g7 || fz.lQ[ju] < z.a0(fz.lQ[player], 20)) && g6.a4L(player, 20)
	}

	function aJk(player, g5, ju, aJY) {
		3 <= aJY && aJY < 6 && z.a0(fz.lQ[player], 8) > fz.lQ[ju] && (g5 = Math.max(z.a0(11 * fz.lQ[ju], 5), z.a0(fz.lQ[player], 10)));
		aJY = fz.jF[player].length;
		i3.rs.aJu(player, ju), i3.rs.aJv(player, ju, aJY, g5)
	}

	function aJh(player, g5) {
		var ju = bq.g7,
			a3 = fz.jF[player].length;
		i3.rs.aJw(player), fz.jF[player].length !== a3 && i3.rs.aJv(player, ju, a3, g5)
	}
	this.a0q = new Uint8Array(bq.g7), this.aJ = function() {
		this.a0q.fill(0)
	}, this.a4O = function(player, g5) {
		var aJW, aJY, aJZ, aJa;
		iG.rq(player) && (aJW = hr.aJX(player), 3 <= (aJY = g6.g5[player]) && aJY < 6 && (g5 = Math.max(fz.lQ[player] - aJW, g5)), aJZ = fz.oH[player].length, aJa = fz.rD[player].length, 30 * fz.lJ[player] > bq.hS && lv[player] < 10 && 100 *
			aJa <= aJZ && g6.a4L(player, 10), bq.hU ? function(player, g5, aJY, aJW) {
				var ju;
				if (i3.a0p.a0q[player] = 1, i3.rs.aJd(player, !1) || i3.rs.aJe(player, !1)) {
					if (!i3.rs.aJf(player))
						if (i3.rs.aJg()) aJh(player, g5), aJi(player, bq.g7, aJY);
						else {
							if (g1.a2M(g6.a4E[aJY])) ju = i3.rs.aJj(player);
							else {
								if (i3.rs.aJl() && g1.a2M(g6.a4C[aJY]) && i3.rs.aJm(), 6 === aJY) return aJk(player, g5, i3.rs.aJn(), aJY);
								ju = i3.rs.aJo(player)
							}
							aJk(player, g5, ju, aJY), aJi(player, ju, aJY)
						}
				} else bo.aIT.c(player) || i3.aJp.c(player) || (i3.a0p.a0q[player] = 0, function(player, g5, aJY, aJW) {
					var a5, an, aV, va = hv.va,
						aJr = va[player];
					if (0 !== aJr) {
						var aJs = fz.lQ[player],
							lJ = fz.lJ;
						if (player < bq.fx && (g5 = aJs), !(aJs < lJ[player] || 5 === aJY && aJs < aJW || 4 === aJY && aJs < z.a0(aJW, 2))) {
							var a3 = i8.j6,
								j5 = i8.j5,
								a0q = (a5 = g1.g2(a3), i3.a0p.a0q);
							for (an = 0; an < a3; an++)
								if (aV = j5[(an + a5) % a3], 1 === a0q[aV] && va[aV] === aJr) return gl.a8H.a0o(player, aV, g5)
						}
					}
				}(player, g5, aJY, aJW))
			}(player, g5, aJY, aJW) : (!aJa || aJZ && (aJZ < aJa && !g1.g2(10) || 100 * aJa <= aJZ && g1.g2(3) || !g1.g2(8))) && bo.aIT.c(player) || function(player, g5, aJY) {
				i3.rs.aJd(player, !0) || i3.rs.aJe(player, !0) ? i3.rs.aJf(player) || (i3.rs.aJg() ? aJh(player, g5) : g1.a2M(g6.a4E[aJY]) ? aJk(player, g5, i3.rs.aJj(player), aJY) : 5 === aJY ? aJk(player, g5, i3.rs.aJt(), aJY) : (i3.rs
				.aJl() && g1.a2M(g6.a4C[aJY]) && i3.rs.aJm(), aJk(player, g5, 6 === aJY ? i3.rs.aJn() : i3.rs.aJo(player), aJY))) : i3.aJp.c(player)
			}(player, g5, aJY))
	}
}

function aJx() {
	this.qG = new aJy
}

function nq(title, yH, yJ) {
	var aC, yK;
	this.show = function() {
		aC.show(), this.resize()
	}, this.aR = function() {
		aC.aR()
	}, this.resize = function() {
		aC.resize(), yK.resize()
	}, this.b6 = function(aV) {
		2 === aV && aC.b7[0].b8()
	}, yJ = yJ || [new aL("⬅️ " + L(1), function() {
		aM.rI()
	}, ao.a4u)], aC = new aK(title, yJ), yK = new yL(aC.cQ, yH), ar.at.textAlign(aC.cQ.style, 1)
}

function aJz() {
	var aK0, aK1, aK2 = -15e3,
		aK3 = !1;

	function ay(cb) {
		aKK() || (aK3 = !0, aKL(cb, 1), g.h.aKM(g.h.jP), aKN(Math.floor(f.aW * cb.clientX), Math.floor(f.aW * cb.clientY)))
	}

	function aK9(cb) {
		aK2 = k.e6, aKL(cb, 1), g.h.aKM(g.h.jP), 0 < cb.touches.length && (aK0 = Math.floor(f.aW * cb.touches[0].clientX), aK1 = Math.floor(f.aW * cb.touches[0].clientY), aKO.aK9(cb) || aKN(aK0, aK1))
	}

	function aKN(ag, aZ) {
		aM.ay(ag, aZ), 0 === bq.dM ? m.ay(ag, aZ) : bt.nQ(ag, aZ) || c5.ay(ag, aZ) || c4.ay(ag, aZ) || c3.pl(ag, aZ) || c1.ay(ag, aZ) || 0 <= c2.ay(ag, aZ) || bx.ay(ag, aZ) || n8.aKP(ag, aZ) || c3.pm(ag, aZ)
	}

	function b2(cb) {
		aKK() || (aK3 = !0, aKL(cb, 1), aKQ(Math.floor(f.aW * cb.clientX), Math.floor(f.aW * cb.clientY)))
	}

	function aKA(cb) {
		aK2 = k.e6, aKL(cb, 1), 0 < cb.touches.length && (aK0 = Math.floor(f.aW * cb.touches[0].clientX), aK1 = Math.floor(f.aW * cb.touches[0].clientY), aKO.aKA(cb) || aKQ(aK0, aK1))
	}

	function aKQ(ag, aZ) {
		aM.b2(ag, aZ), 0 === bq.dM ? m.b2(ag, aZ) : (aKR.qx(ag, aZ), c5.b2(ag, aZ) || (c2.b2(ag, aZ), c3.ci() ? c3.b2(ag, aZ) : bw.co ? bw.b2(ag) && (k.l = !0) : (bv.b2(ag, aZ), bj.dF && bj.b2(ag, aZ) && (k.l = !0))))
	}

	function aK8(cb) {
		aKK() || (aKL(cb, 1), b5(), 0 === bq.dM ? (m.click(-1024, -1024), bT.bU()) : (bv.el(-1024, -1024), c2.b2(-1024, -1024), bw.dP(), bj.dF = !1))
	}

	function aK7(cb) {
		aKK() || (aKL(cb, 1), aKS(Math.floor(f.aW * cb.clientX), Math.floor(f.aW * cb.clientY), 2 === cb.button), n8.aK6 && (n8.aK6 = !1, cb.preventDefault()))
	}

	function click(cb) {
		aKK() || aKL(cb, 1)
	}

	function aKB(cb) {
		aK2 = k.e6, aKL(cb, 1), cb && cb.touches && 0 < cb.touches.length && 0 !== bq.dM ? bj.dF = !1 : aKO.aKT() || (aKS(aK0, aK1, !1), n8.aK6 && (n8.aK6 = !1, cb.preventDefault()))
	}

	function aKC(cb) {
		aK2 = k.e6, aKL(cb, 1), aKS(aK0, aK1, !1), n8.aK6 && (n8.aK6 = !1, cb.preventDefault())
	}

	function aKD(cb) {}

	function aKE(cb) {}

	function aKF(cb) {
		aKK() || aKL(cb, 0)
	}

	function aKS(ag, aZ, q3) {
		b5(), 0 === bq.dM ? m.click(ag, aZ) : (bv.el(ag, aZ), c5.el(), bw.dP(), bj.dF = !1, c3.click(ag, aZ, q3) ? k.l = !0 : c2.aK7(ag, aZ))
	}

	function b5() {
		aM.b5()
	}

	function b3(cb) {
		var ag, aZ, deltaY;
		aKK() || (aKL(cb, 1), g.h.aKM(g.h.jP), ag = Math.floor(f.aW * cb.clientX), aZ = Math.floor(f.aW * cb.clientY), deltaY = cb.deltaY, 1 === cb.deltaMode && (deltaY *= 16), aM.b3(ag, aZ, deltaY), 0 === bq.dM ? m.b3(ag, aZ, deltaY) : bv.b3(ag, aZ,
			deltaY) || (bw.b1(ag, aZ) ? bw.b3(deltaY) && (k.l = !0) : bj.b3(ag, aZ, deltaY)))
	}

	function aKG(cb) {
		aKL(cb, 0)
	}

	function aKL(cb, id) {
		0 === id && aM.ci() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== m.bS() && cb.preventDefault()
	}

	function aKH(cb) {
		if (__fx.keybindHandler(cb.key)) return;
		aKK() || 0 < f.yl || (cb = cb.code) && cb.length && (a6I.aV(cb, 18) ? pU.pP(3) : a6I.aV(cb, 22) ? pU.pP(0) : a6I.aV(cb, 20) ? pU.pP(1) : a6I.aV(cb, 24) ? pU.pP(2) : a6I.aV(cb, 10) ? bw.dK(31 / 32) : a6I.aV(cb, 8) ? bw.dK(32 / 31) : a6I.aV(cb,
				6) ? bw.dK(7 / 8) : a6I.aV(cb, 4) ? bw.dK(8 / 7) : a6I.aV(cb, 14) ? 0 !== bq.dM && bj.b3(Math.floor(f.af / 2), Math.floor(f.ae / 2), -200) : a6I.aV(cb, 16) ? 0 !== bq.dM && bj.b3(Math.floor(f.af / 2), Math.floor(f.ae / 2), 200) :
			a6I.aV(cb, 0) ? bq.dM && aKR.qy(!1) : a6I.aV(cb, 2) ? bq.dM && aKR.qy(!0) : a6I.aV(cb, 26) ? bq.dM && aKR.r2() : a6I.aV(cb, 28) && bq.dM && aKR.r9())
	}

	function aKI(cb) {
		if (!aKK() && !(0 < f.yl || k.e6 < 400)) {
			var code = cb.code;
			if (code && code.length && !("Enter" === code && aM.b6(1) || "Space" === code && aM.b6(0))) return qd.xk ? qd.xg.b6(code) ? void 0 : void("Escape" === code && n8.n9()) : void(8 !== m.bS() && m.b6(cb) ? k.l = !0 : "Escape" === code ? n8
				.n9() : a6I.aV(code, 18) ? pU.pR(3) : a6I.aV(code, 22) ? pU.pR(0) : a6I.aV(code, 20) ? pU.pR(1) : a6I.aV(code, 24) ? pU.pR(2) : a6I.aV(code, 12) ? bt.nI(!bq.br) : "Space" === code && bq.dM && (c2.d8 && c2.nN(), bq.cq) && bt
				.nL(!1))
		}
	}

	function aKJ() {
		"hidden" === document.visibilityState ? 1 === bq.dM && (bq.cq ? bt.nP() : !bq.hR || c2.d8 || bq.cp || c2.nN()) : k.l = !0
	}

	function aKK() {
		return aK2 + 15e3 > k.e6
	}

	function resize() {
		f.yr()
	}
	this.aK4 = 0, this.aK5 = "", this.aK6 = !1, this.aJ = function() {
		yo.addEventListener("mousedown", ay, {
			passive: !1
		}), yo.addEventListener("mousemove", b2, {
			passive: !1
		}), yo.addEventListener("mouseup", aK7, {
			passive: !1
		}), yo.addEventListener("click", click, {
			passive: !1
		}), yo.addEventListener("mouseleave", aK8, {
			passive: !1
		}), yo.addEventListener("wheel", b3, {
			passive: !1
		}), yo.addEventListener("touchstart", aK9, {
			passive: !1
		}), yo.addEventListener("touchmove", aKA, {
			passive: !1
		}), yo.addEventListener("touchend", aKB, {
			passive: !1
		}), yo.addEventListener("touchcancel", aKC, {
			passive: !1
		}), yo.addEventListener("dragover", aKD), yo.addEventListener("drop", aKE), yo.addEventListener("dblclick", aKF), document.addEventListener("contextmenu", aKG), document.addEventListener("keydown", aKH), document.addEventListener(
			"keyup", aKI), document.addEventListener("visibilitychange", aKJ), window.addEventListener("resize", resize)
	}, this.aKP = function(ag, aZ) {
		return !!bt.ay(ag, aZ) || !!(bv.ay(ag, aZ) || bj.ay(ag, aZ) || bw.ay(ag, aZ) || bu.ay(ag, aZ))
	}, this.aGv = aKK, this.qt = function() {
		return !aK3 || 0 < aK2
	}, this.n9 = function() {
		if (!aM.ci()) return 8 === m.bS() ? bq.br ? void bt.nI(!1) : c5.ci ? void c5.nN() : void c2.nN() : void(7 !== m.bS() && 6 === m.bS() && e.aKV());
		aM.b6(2)
	}
}

function aKW() {
	this.h7 = function(size) {
		for (var x8 = gv, a4 = [], a5 = 0; a5 < size; a5++) a4.push(String.fromCharCode(x8.gz(16)));
		return a4.join("")
	}, this.a1e = function(a2) {
		return 20 < (a2 = a2.trim()).length ? a2.substring(0, 20) : a2
	}
}

function aHm() {
	aKX() ? (aKY(), aHU !== bq.g7 && aKZ()) : aHj()
}

function aKZ() {
	aKa(), aKb(fz.rD[aHU]), aKb(fz.oH[aHU]), bh.ij(bh.ig) && aKb(fz.ik[aHU]), aKc(fz.jF[aHU]), aKd(fz.oH[aHU]), aKd(fz.ik[aHU]), aKe(), aKf()
}

function aKY() {
	aHb = !0, iG.a2A(aHQ, aHP, aHR), iG.a2B(aHQ, aHP), fz.lJ[aHQ] += aHV, aKg(), aKh()
}

function aKX() {
	return (aHU === bq.g7 ? aKi : aKj)()
}

function aKj() {
	var aKk = aHV * bq.hK,
		aKl = aKm(),
		aKn = aKo(),
		aKl = aKk + 2 * aKl + aKn,
		aKq = aHT * aHV;
	return aKl < aKq ? (aHR -= aKl, hw.sD(aHQ, aKl, 13), aKr(aKl - aKk, aKn), !0) : aHS && 0 === aKn ? (aHR -= aKq, aKq += ar.d1.w9(aHQ, aKl - aKq + 1), hw.sD(aHQ, aKq, 13), aKr(aKq - aKk, 0), !0) : (aHR -= aKq, hw.sD(aHQ, aKq, 13), aKr(aKq - aKk,
		aKn), !1)
}

function aKr(aKq, aKn) {
	if (0 < aKn) {
		if (aKq <= aKn) return hw.sD(aHU, aKq, 13), void iG.a20(aHU, aHQ, aKn - aKq);
		iG.a20(aHU, aHQ, 0), aKq -= aKn
	}
	aKq = z.a0(aKq, 2), aKq = Math.min(fz.lQ[aHU], aKq), hw.sD(aHU, aKq, 13), fz.lQ[aHU] -= aKq
}

function aKo() {
	return iG.a1z(aHU, aHQ)
}

function aKm() {
	return z.a0(aHV * fz.lQ[aHU], 1 + z.a0(10 * fz.lJ[aHU], 16))
}

function aKi() {
	var aKs = aHV * bq.hK;
	return aHR -= aKs, hw.sD(aHQ, aKs, 13), !0
}

function aKh() {
	for (var a5 = aHV - 1; 0 <= a5; a5--) fz.jF[aHQ].push(aHX[a5]), fz.rD[aHQ].push(aHX[a5]), hy.a43(aHX[a5], aHQ)
}

function aKt() {
	var aKu = 0,
		aKv = !0;

	function aKw(id) {
		id = [L(253), L(254), L(255), L(256)][id];
		bu.aCU(id)
	}
	this.c = function() {
		var dO, fe;
		k.e6 < aKu || (aKu = k.e6 + 5e3, bq.cq) || bq.hR || ar.d1.q6(bq.d3) || (dO = new Date, fe = dO.getUTCSeconds(), aKv ? fe < 50 && (aKv = !1) : fe < 50 || (aKv = !0, (fe = (dO.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == fe || 20 == fe ||
			40 == fe ? bq.fs < 7 && aKw(0) : 10 == fe || 30 == fe || 50 == fe ? 7 !== bq.fs && 10 !== bq.fs || aKw(1) : 5 == fe || 25 == fe || 45 == fe ? 8 === bq.fs && aKw(2) : 35 == fe && 9 === bq.fs && aKw(3))))
	}
}

function wW(data) {
	var aC, rH;
	this.show = function() {
		data.a76 && aIa.aId("account", data.dr), aC.show(), this.resize()
	}, this.aR = function() {
		aC.aR()
	}, this.resize = function() {
		aC.resize(), rH.resize()
	}, this.b6 = function(aV) {
		2 === aV && aC.b7[0].b8()
	}, aC = new aK(data.username, [new aL("⬅️ " + L(1), function() {
		aIa.clear(), aM.rI()
	}), new aL(data.a76 ? "🔄 " + L(257) : L(258), function() {
		aM.iZ(8, aM.fR().wP, new kW(25, {
			kX: 0,
			dr: data.dr,
			kV: data.kV
		}))
	}, 0, 0, 1)]), rH = new rJ(aC.cQ, function() {
		var kI = [];
		kI.push(function() {
				var rM = new rN,
					aF6 = (rM.rO(L(299)), new rQ({
						value: data.username,
						b4: -1
					}));
				aF6.cb.readOnly = !0, rM.rR(aF6), rM.rR(new rY([new aL(L(272), function(cb) {
					return ar.at.aLB(aF6.cb), ar.at.ra(cb), !0
				}).button])), data.a76 || rM.re(L(300));
				return rM
			}()),
			function(kI) {
				var rM, rd, t8, aLF, a7Z;
				data.a76 || ((rM = new rN).rO(L(301)), (rd = rM.re(data.a6u.length + " / 160")).style.textAlign = "center", t8 = !0, (aLF = new yR(0, 1, function(cb) {
					cb = cb.target.value.length;
					rd.textContent = cb + " / 160", 160 < cb ? t8 && (t8 = !1, a7Z.e0(1), a7Z.button.style.color = ao.ap) : t8 || (t8 = !0, a7Z.e0(0), a7Z.button.style.color = ao.kR)
				})).cb.rows = 6, aLF.cb.style.fontSize = "1em", aLF.yU(data.a6u), rM.rR(aLF), a7Z = new aL(L(302), function() {
					if (!t8) return !0;
					aM.iZ(8, aM.fR().wP, new kW(29, {
						kX: 1,
						a2: aLF.yX().substring(0, 160)
					}))
				}, 0, 0, 1), rM.rR(new rY([a7Z.button])), 0 !== data.a6s && (rM.rR(new rY([new aL(L(1 === data.a6s ? 304 : 305), function() {
					aM.iZ(8, aM.fR().wP, new kW(29, {
						kX: 0,
						a2: ""
					}))
				}, 0, 0, 1).button])), rM.re(1 === data.a6s ? L(306, [data.a6v - 1]) : L(307, [data.a6v - 1]))), rM.re(L(303, [data.a6t])), kI.push(rM))
			}(kI),
			function(kI) {
				var rM;
				data.a76 && 0 !== data.a6s && ((rM = new rN).rO(L(308)), rM.aH1(data.a6u), rM.rR(new rY([new aL(L(309, 0, "Report"), function(cb) {
					return g.h.rZ(0) && (ar.at.ra(cb), g.rb.tO({
						kX: 5,
						dr: data.dr
					})), !0
				}, 0, 0, 1).button])), kI.push(rM))
			}(kI), kI.push(function() {
				var rM = new rN,
					aLA = (rM.rO(L(259)), [L(260), L(261), L(262), L(263), L(264)]),
					al = data.a6w;
				rM.a9j(L(265) + ar.d5.a7r(data.a6e, .01, 2) + "<br>" + L(266) + (al + 1) + " / " + data.a6d + "<br>" + L(267) + aLA[al < 10 ? 0 : al < 50 ? 1 : al < 200 ? 2 : al < 1e3 ? 3 : 4]), data.a76 || (rM.re(L(268)), rM.re(L(269)),
					rM.re(L(270)));
				return rM
			}()), data.a76 && kI.push(function() {
				var rM = new rN,
					aF6 = (rM.rO(L(271)), new rQ({
						value: aP.aQ.data[147].value,
						b4: -1
					}, 1, void 0, function(cb) {
						aP.aS.aT(147, rT(cb.target.value))
					})),
					rX = (rM.rR(aF6), new aL(L(36), function(cb) {
						return aF6.cb.readOnly && g.h.rZ(0) && (ar.at.ra(cb), rV(), g.rb.rc({
							kX: 0,
							dr: data.dr,
							value: parseInt(aP.aQ.data[147].value, 10)
						})), !0
					}, 1)),
					a7Z = new aL(L(34), function(cb) {
						return cb.textContent === L(34) ? (cb.textContent = L(35), aF6.cb.readOnly = !0, rX.e0(0), rX.button.style.color = ao.kR, aP.aS.aT(147, aF6.cb.value), rT(aP.aQ.data[147].value)) : rV(), !0
					}),
					rd = (rM.rR(new rY([a7Z.button])), rM.re()),
					rT = function(y) {
						y = ar.d1.rf(y, 2, 1e6);
						var rg = Math.max(1, 1 + Math.floor(.01 * (y - 100)));
						rd.textContent = L(38, [y, aP.aQ.data[105].value, rg, data.dr, y - rg])
					},
					rV = function() {
						a7Z.button.textContent = L(34), aF6.cb.readOnly = !1, rX.e0(1), rX.button.style.color = ao.ap
					};
				return rT(aP.aQ.data[147].value), rM.rR(new rY([rX.button])), rM
			}());
		kI.push(function() {
			var rM = new rN,
				aF6 = (rM.rO(L(140)), new rQ({
					value: data.dr,
					b4: -1
				}));
			return aF6.cb.readOnly = !0, rM.rR(aF6), rM.rR(new rY([new aL(L(272), function(cb) {
				return ar.at.aLB(aF6.cb), ar.at.ra(cb), !0
			}).button])), rM
		}()), data.a76 || (kI.push(function() {
			var rM = new rN,
				a9b = (rM.rO(L(141)), new rQ(aP.aQ.data[106]));
			return a9b.cb.readOnly = !0, a9b.cb.type = "password", rM.rR(a9b), rM.rR(new rY([new aL(L(142), function(cb) {
				return cb.textContent === L(142) ? (cb.textContent = L(143), a9b.cb.type = "text") : (cb.textContent = L(142), a9b.cb.type = "password"), !0
			}).button, new aL(L(272), function(cb) {
				return ar.at.aLB(a9b.cb), ar.at.ra(cb), !0
			}).button])), rM.rR(new rY([new aL(L(273), function() {
				aM.iZ(8, aM.fR().wP, new kW(15))
			}).button])), rM.rO(L(274), "0.8em"), rM.re(L(275)), rM.re(L(276)), rM.re(L(277)), rM
		}()), kI.push(function() {
			var rM = new rN;
			return rM.rO(L(278)), rM.rR(new rY([new aL(L(279), function() {
				aM.iZ(6, aM.fR().wP)
			}).button])), rM.rR(new rY([new aL(L(280), function() {
				aP.aS.aT(105, ""), aM.iZ(8, aM.fR().wP, new kW(18))
			}).button])), rM.rR(new rY([new aL(L(281) + aP.aQ.data[105].value, function() {
				aM.iZ(4, 0, new mn(L(282), L(283), !0, [new aL("⬅️ " + L(1), function() {
					aM.iZ(7, aM.wp(7).wP)
				})]))
			}, ao.a4u).button])), rM
		}()), kI.push(function() {
			function aLD(b4) {
				for (var a5 = 0; a5 < 2; a5++) aLC[a5].e0(0 === b4 ? ao.a4a : 0 === a5 ? ao.a4u : ao.a4j)
			}
			var aH3, aLC, rM = new rN;
			rM.rO(L(284)), rM.re(L(285)), aP.h.a2o();
			return aLC = [new aL(L(286), function() {
				var b4 = Math.min(aP.aQ.data[117].value, aH3.a0d.length - 1);
				if (!(b4 < 1)) {
					aH3.a0d[b4].remove(), aH3.a0d.splice(b4, 1);
					for (var a5 = b4; a5 < aH3.a0d.length; a5++) aH3.a0d[a5].name = "" + a5;
					aP.h.a2r(b4), b4 = aP.aQ.data[117].value, aH3.a0d[b4].textContent = aH3.a0d[b4].textContent.replace("⚪", "🟢"), aLD(b4)
				}
			}, ao.a4a), new aL(L(139), function() {
				var b4 = Math.min(aP.aQ.data[117].value, aH3.a0d.length - 1);
				b4 < 1 || (b4 = aP.h.a2s(b4), aP.aS.aT(105, b4.dr), aP.aS.aT(106, b4.password), aM.iZ(8, aM.fR().wP, new kW(18)))
			}, ao.a4a)], (aH3 = new zC(aP.aQ.data[117], aLD)).a0d[0].style.marginTop = "0.5em", rM.zB(aH3), rM.rR(new rY([aLC[1].button])), rM.rR(new rY([aLC[0].button])), rM
		}()));
		return kI.push(function() {
				var rM = new rN,
					aLA = (rM.rO(L(290)), [L(291), L(292), L(293), L(294)]),
					al = data.a6x;
				return rM.a9j(L(295) + (data.a6y / 100).toFixed(2) + "<br>" + L(266) + (al + 1) + " / " + data.a6d + "<br>" + L(267) + aLA[al < 10 ? 0 : al < 50 ? 1 : al < 200 ? 2 : 3]), rM
			}()), kI.push(function() {
				var rM = new rN;
				return rM.rO(L(287)), rM.a9j(L(288) + ar.d5.a7r(data.a6a, .1, 1) + "<br>" + L(266) + (data.a6b + 1) + " / " + data.a6d + "<br>" + L(289) + data.a6c), rM
			}()),
			function(kI) {
				var rM = new rN,
					aLG = data.a6h,
					aLH = (rM.rO(L(310)), rM.a9j(L(311, [data.a6f.length ? "[" + data.a6f + "]" : "-"])), rM.a9j(L(312, [ar.d5.a7r(aLG, .01, 2)])), rM.a9j(L(313, [data.a6j + 1 + " / " + data.a6d])), data.a6k),
					aLI = (rM.a9j(L(314, [ar.d5.a7r(aLH, .1, 1)])), data.a6m);
				rM.a9j(L(315, [aLI])), rM.a9j(L(316, [ar.d5.a7r(aLH / Math.max(aLI, 1), .1, 2)])), aLG = data.a6i, rM.rO(L(317), "0.8em"), rM.a9j(L(311, [data.a6g.length ? "[" + data.a6g + "]" : "-"])), rM.a9j(L(312, [ar.d5.a7r(aLG, .01,
					2)])), aLH = data.a6l, rM.a9j(L(314, [ar.d5.a7r(aLH, .1, 1)])), aLI = data.a6n, rM.a9j(L(315, [aLI])), rM.a9j(L(316, [ar.d5.a7r(aLH / Math.max(aLI, 1), .1, 2)])), data.a76 || (rM.re(L(318)), rM.re(L(319)));
				kI.push(rM)
			}(kI),
			function(kI) {
				var rM = new rN;
				rM.rO(L(320)), rM.a9j(L(295) + (data.a6q / 10).toFixed(1) + "<br>" + L(267) + (data.a6r.length ? L(321, [data.a6r]) : L(322))), data.a76 ? (rM.rR(new rY([new aL(L(323), function(cb) {
					return g.h.rZ(0) && (ar.at.ra(cb), g.rb.tO({
						kX: 4,
						dr: data.dr
					})), !0
				}, 0, 0, 1).button])), rM.re(L(324)), rM.re(L(325))) : rM.re(L(326));
				kI.push(rM)
			}(kI), kI.push(function() {
				var rM = new rN;
				if (rM.rO(L(296)), rM.a9j(L(297) + data.a6o + "<br>" + L(266) + (data.a6p + 1) + " / " + data.a6d + "<br>" + L(267) + t0.a6V(data.a6p)), data.a76) {
					var aF6 = new rQ({
							value: aP.aQ.data[157].value,
							b4: -1
						}, 1, void 0, function(cb) {
							aP.aS.aT(157, rT(cb.target.value))
						}),
						a7Z = (aF6.cb.style.marginTop = "0.6em", rM.rR(aF6), new aL(L(34), function(cb) {
							return cb.textContent === L(34) ? (cb.textContent = L(35), aF6.cb.readOnly = !0, aLE[0].e0(0), aLE[1].e0(0), aLE[0].button.style.color = ao.kR, aLE[1].button.style.color = ao.kR, rT(aP.aQ.data[157]
								.value)) : rV(), !0
						})),
						aLE = (rM.rR(new rY([a7Z.button])), [new aL("−", function(cb) {
							return aF6.cb.readOnly && g.h.rZ(0) && (ar.at.ra(cb), rV(), g.rb.rc({
								kX: 2,
								dr: data.dr,
								value: z.ax(parseInt(aP.aQ.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new aL("+", function(cb) {
							return aF6.cb.readOnly && g.h.rZ(0) && (ar.at.ra(cb), rV(), g.rb.rc({
								kX: 1,
								dr: data.dr,
								value: z.ax(parseInt(aP.aQ.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						rd = rM.re(),
						rT = function(y) {
							return y = ar.d1.rf(y, 3, 32767), rd.textContent = L(298, [y - 1, y, aP.aQ.data[105].value]), y
						};
					rM.rR(new rY([aLE[0].button, aLE[1].button]));
					for (var a5 = 0; a5 < 2; a5++) aLE[a5].button.style.fontSize = "1.6em";
					var rV = function() {
						a7Z.button.textContent = L(34), aF6.cb.readOnly = !1, aLE[0].e0(1), aLE[1].e0(1), aLE[0].button.style.color = ao.ap, aLE[1].button.style.color = ao.ap
					};
					rT(aP.aQ.data[157].value)
				}
				return rM
			}()),
			function(kI) {
				var rM, aLK;
				data.a76 && !data.a6z || (0 === bE.id || data.a76 || data.a6z) && ((rM = new rN).rO("Patreon"), !data.a76 && data.a70 ? rM.rR(new rY([new aL(L(142), function() {
					g.rb.tO({
						kX: 7,
						dr: data.dr
					}), data.a70 = 0, aM.iZ(7)
				}).button])) : data.a6z ? (rM.a9j(L(327, [(data.a71 / 100).toFixed(2)]) + "<br>" + L(328, [1 + data.a72 + " / " + data.a73]) + "<br>" + L(329, [data.a74 ? L(330) : L(331)])), data.a76 || rM.rR(new rY([new aL(L(332),
					function() {
						g.rb.tO({
							kX: 8,
							dr: data.dr
						}), data.a6z = 0, aP.aS.aT(160, 0), aM.iZ(7)
					}).button]))) : (rM.a9j(L(333), "0.75em").style.marginBottom = "0.3em", rM.a9j("  • " + L(334), "0.75em").style.whiteSpace = "pre", rM.a9j("  • " + L(335), "0.75em").style.whiteSpace = "pre", rM.a9j("  • " + L(
						336), "0.75em").style.whiteSpace = "pre", rM.a9j(L(337), "0.75em").style.marginTop = "1.0em", rM.a9j(L(338), "0.75em").style.marginTop = "1.0em", rM.a9j("<a href='" + gZ.aLJ +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", aLK = "https://www.patreon.com/oauth2/authorize?state=" + data.dr +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", rM.a9j(L(339), "0.75em").style.marginTop = "1.0em", rM.a9j("<a href='" + aLK +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.a76 || (rM.rR(new a2O), rM.rR(new rY([new aL(L(143), function() {
						g.rb.tO({
							kX: 6,
							dr: data.dr
						}), data.a70 = 1, aM.iZ(7)
					}).button])), rM.a9j(L(340), "0.75em").style.marginTop = "0.75em")), kI.push(rM))
			}(kI), kI
	}())
}

function aLL() {
	this.aJ = function() {
		if (0 === bq.data.sResourcesType) {
			for (var zI = bq.fx, lQ = fz.lQ, a5 = 0; a5 < zI; a5++) lQ[a5] = 512;
			var zJ = bq.hO,
				a4F = g6.a4F,
				g5 = g6.g5;
			for (a5 = zI; a5 < zJ; a5++) lQ[a5] = a4F[g5[a5]]
		} else(1 === bq.data.sResourcesType ? function() {
			for (var a3 = bq.hO, lQ = fz.lQ, sResourcesValue = bq.data.sResourcesValue, a5 = 0; a5 < a3; a5++) lQ[a5] = sResourcesValue
		} : function() {
			for (var a3 = bq.hO, lQ = fz.lQ, sResourcesData = bq.data.sResourcesData, a5 = 0; a5 < a3; a5++) lQ[a5] = sResourcesData[a5]
		})();
		hw.a2D[8] = fz.lQ[bq.d3]
	}
}

function wf() {
	var yM, z2, z3, kI;

	function z4() {
		z6(), 2 !== bq.data.aIncomeType && (bq.data.aIncomeData = null), aM.wq()[19] = null, aM.rI()
	}

	function z6() {
		2 === bq.data.aIncomeType ? (ar.t4.z7(z3.yX(), bq.data.aIncomeData, 255), ar.t4.max(bq.data.aIncomeData) || (bq.data.aIncomeType = 0)) : 1 !== bq.data.aIncomeType || bq.data.aIncomeValue || (bq.data.aIncomeType = 0)
	}
	this.show = function() {
		yM.show(), this.resize()
	}, this.aR = function() {
		yM.aR()
	}, this.resize = function() {
		yM.resize(), z2.resize()
	}, this.b6 = function(aV) {
		2 === aV && yM.b7[0].b8()
	}, yM = new aK(L(341), [new aL("⬅️ " + L(1), z4)]), z2 = new rJ(yM.cQ, (function(kI) {
		var rM = new rN;
		rM.rO(L(47)), rM.zB(new zC({
			xx: [L(48), L(49), L(50)],
			value: bq.data.aIncomeType
		}, function(b4) {
			z6(), 2 !== b4 || bq.data.aIncomeData || (bq.data.aIncomeData = new Uint8Array(bq.g7)), bq.data.aIncomeType = b4, aM.iZ(22)
		})), kI.push(rM)
	}(kI = []), function(kI) {
		var rM;
		1 === bq.data.aIncomeType && ((rM = new rN).rO("Value"), rM.rR(new rQ({
			b4: -1,
			value: bq.data.aIncomeValue
		}, 1, 0, function(cb) {
			var value = z.ax(Math.floor(cb.target.value), 0, 255);
			cb.target.value = bq.data.aIncomeValue = value
		})), kI.push(rM))
	}(kI), function(kI) {
		var rM;
		2 === bq.data.aIncomeType && ((rM = new rN).rO("Data"), (z3 = new yR(0, 1, 0, 1)).yU(ar.d5.zD(bq.data.aIncomeData, 4)), rM.rR(z3), kI.push(rM))
	}(kI), kI))
}

function bb() {
	this.n = function() {
		if (0 !== bm.h.bc && (ah.globalAlpha = Math.min(bm.h.bc / 580, 1), ah.drawImage(bm.h.vK, 1 + bj.bk(), 1 + bj.bl()), ah.globalAlpha = 1, bq.cp)) {
			for (var gE = lg / bg, ex = lh / bg, li = (f.af + lg) / bg, lj = (f.ae + lh) / bg, j7 = bm.h.vJ * bg, vL = bm.h.vL, a5 = bq.fx - 1; 0 <= a5; a5--) ! function(a5, j7, gE, ex, li, lj, vL) {
				var highlight;
				0 === fz.iN[a5] || 0 === fz.lJ[a5] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a5]) && (j7 *= 2), li = f.af * ((fz.lR[a5] + fz.lU[a5] + 1) / 2 - gE) / (li - gE) - .5 * j7, gE = f.ae * ((fz
					.lS[a5] + fz.lV[a5] + 1) / 2 - ex) / (lj - ex) - .5 * j7, f.af < li) || gE > f.ae || li < -j7 || gE < -j7 || (highlight ? ah.setTransform(2 * bg, 0, 0, 2 * bg, li, gE) : ah.setTransform(bg, 0, 0, bg, li, gE), ah
					.drawImage(vL[bq.hU ? hv.va[a5] : 1], 0, 0))
			}(a5, j7, gE, ex, li, lj, vL);
			ah.setTransform(bg, 0, 0, bg, 0, 0)
		}
	}
}

function rJ(e1, kI) {
	var dx = document.createElement("div");

	function kc() {
		var a5, v8, ae, j7, iy, aLT = f.aW * dx.offsetWidth,
			aLV = new Float64Array(function(aLT) {
				var af = .25 * ar.at.a6A(.6) * f.bH;
				return Math.max(Math.floor(aLT / af), 1)
			}(aLT)),
			yb = ab.yb,
			aLW = (aLT - (aLV.length + 1) * ab.gap) / (aLV.length * f.aW);
		for (aLV.fill(yb), a5 = 0; a5 < kI.length; a5++) v8 = (iy = kI[a5].dx).style, ae = ar.t4.min(aLV), j7 = aLV.indexOf(ae), v8.top = ar.at.cc(ae), v8.left = ar.at.cc(yb + j7 * (aLW + yb)), v8.width = ar.at.cc(aLW), ar.at.cd(iy, 5), aLV[j7] += iy
			.offsetHeight + 3 * yb;
		dx.style.height = ar.at.cc(ar.t4.max(aLV) - 2 * yb)
	}
	this.ya = dx, this.a9X = kI, this.resize = function() {
		var a5;
		for (a5 = 0; a5 < kI.length; a5++) kI[a5].resize();
		kc(), kc()
	}, dx.style.width = "100%", dx.style.maxWidth = "100%", e1.style.lineHeight = "1.5em", e1.style.overflowX = "hidden", e1.style.overflowY = "auto";
	for (var a5 = 0; a5 < kI.length; a5++) dx.appendChild(kI[a5].dx);
	e1.appendChild(dx)
}

function uO() {
	this.aLX = function(a4) {
		a4.fill(0)
	}, this.aLY = function(a4) {
		for (var a3 = a4.length, a5 = 0; a5 < a3; a5++) a4[a5] = []
	}, this.xN = function(a6, dN) {
		for (var a7 = j9.aFM, a5 = 0; a5 < 3; a5++) a7[a5] = dN * a6[a5];
		return a7
	}, this.xO = function(a6, a7, aLZ) {
		for (var oC = 0, a5 = 0; a5 < 3; a5++) oC += Math.abs(a6[a5] - a7[a5]);
		return aLZ <= oC
	}, this.xP = function(a6, aLa) {
		for (var a5 = 0; a5 < 3; a5++) a6[a5] = z.ax(a6[a5] + aLa, 0, 255);
		return a6
	}, this.tt = function(a4, sT, sU) {
		sU = sU || a4.length - 1;
		for (var aBZ = 0, a5 = sT = sT || 0; a5 <= sU; a5++) aBZ += a4[a5];
		return aBZ
	}, this.aLb = function(a4, aLc) {
		for (var a5, a7d, a3 = a4.length, aLd = [], fp = a3 - 1; 0 <= fp; fp--) {
			for (a5 = a7d = 0; a5 < a3; a5++) aLc(a4[a5]) < aLc(a4[a7d]) && (a7d = a5);
			a3--, aLd.push(a4[a7d]), a4[a7d] = a4[a3], a4.pop()
		}
		return aLd
	}, this.min = function(a4) {
		var a5, y, a3 = a4.length;
		if (0 === a3) return 0;
		for (y = a4[0], a5 = 1; a5 < a3; a5++) y = Math.min(y, a4[a5]);
		return y
	}, this.max = function(a4) {
		var a3 = a4.length;
		if (0 === a3) return 0;
		for (var y = a4[0], a5 = 1; a5 < a3; a5++) y = Math.max(y, a4[a5]);
		return y
	}, this.a2f = function(a4, y) {
		for (var a3 = a4.length, gi = 0, a5 = 0; a5 < a3; a5++) gi += a4[a5] > y;
		return gi
	}, this.aLe = function(aFc, aFf, min) {
		for (var a3 = aFf[0], a5 = a3 - 1; 0 <= a5; a5--) aFc[a5] < min && (aFc[a5] = aFc[--a3]);
		aFf[0] = a3
	}, this.aLf = function(a4, a3, value) {
		for (var a5 = 0; a5 < a3; a5++) a4[a5] -= value
	}, this.t5 = function(a4) {
		for (var a3 = a4.length, a5 = 0; a5 < a3; a5++)
			if ("string" != typeof a4[a5]) return !1;
		return !0
	}, this.z7 = function(a2, a4, aLg) {
		a4.fill(0);
		for (var am = a2.split(","), a3 = Math.min(am.length, a4.length), a5 = 0; a5 < a3; a5++) a4[a5] = Math.min(parseInt(am[a5]), aLg)
	}, this.aEr = function(a2, a4, aFD) {
		a4.fill("");
		for (var am = a2.split('"'), a3 = Math.min(am.length, 2 * a4.length), eE = 0, a5 = 1; a5 < a3; a5 += 2) a4[eE++] = am[a5].slice(0, aFD)
	}, this.a2e = function(a4, gi) {
		if (0 === gi) a4.fill(0);
		else {
			var aBZ = this.tt(a4),
				a3 = a4.length;
			if (0 === aBZ) a4.fill(z.a0(gi, a3));
			else
				for (var a5 = 0; a5 < a3; a5++) a4[a5] = z.a0(gi * a4[a5], aBZ);
			if (0 === (aBZ = this.tt(a4))) a4[1] = gi;
			else
				for (var eE = 0; aBZ++ < gi;) a4[eE = (eE + 1) % a3] && a4[eE]++
		}
	}, this.aLh = function(a4) {
		if (!a4) return 0;
		var a3 = a4.length;
		if (0 === a3) return 0;
		for (var y = a4[a3 - 1], a5 = a3 - 2; 0 <= a5; a5--)
			if (a4[a5] !== y) return a5 + 2;
		return 1
	}, this.aLi = function(a4) {
		for (var aBZ = 0, a5 = 0; a5 < a4.length; a5++) aBZ += a4[a5].length;
		return aBZ
	}, this.aLj = function(aLk) {
		for (var a4 = [], a5 = 0; a5 < aLk.length; a5++) a4 = a4.concat(aLk[a5]);
		return a4
	}
}

function aLl() {
	var ae, canvas, cl, aLm, aLn, aLo = -1;

	function aLp() {
		var m2, c8 = canvas.getContext("2d", {
			alpha: !0
		});
		c8.clearRect(0, 0, ae, ae), c8.fillStyle = ao.cR, c8.fillRect(0, 0, ae, ae), 0 === aLm && (c8.fillStyle = ao.a4U, c8.fillRect(0, 0, ae, ae)), c8.fillStyle = ao.ap, c8.fillRect(0, 0, ae, 1), c8.fillRect(0, 0, 1, ae), c8.fillRect(0, ae - 1, ae,
			1), c8.fillRect(ae - 1, 0, 1, ae), m2 = .9 * ae / gW.get(0).width, c8.imageSmoothingEnabled = !0, c8.setTransform(m2, 0, 0, m2, Math.floor((ae - m2 * gW.get(0).width) / 2), Math.floor((ae - m2 * gW.get(0).height) / 2)), c8.drawImage(
			gW.get(0), 0, 0), c8.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aLq(az, b0) {
		if (!c2.d8) return az <= ae + ab.gap && b0 >= bw.aZ ? 9 : -1;
		if (az <= 4 * ae + ab.gap) {
			if (b0 >= bw.aZ) return 0;
			if (b0 >= bw.aZ - ae - aLn * ab.gap) return 2
		} else if (az <= 7 * ae + ab.gap && b0 >= bw.aZ - ae - aLn * ab.gap) return 1;
		return -1
	}
	this.d8 = !1, this.aJ = function() {
		aLm = -1, this.d8 = !1, aLn = bE.bF.bG() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		ae = bw.ae, (canvas = document.createElement("canvas")).width = ae, canvas.height = ae, cl = ar.at.au(1, (bE.bF.bG() ? .5 : .45) * ae), aLp()
	}, this.nN = function() {
		this.d8 = !this.d8, this.d8 ? (bt.nI(!1), bq.cq && bt.ib && bt.nL(!0), this.nO()) : (aLm = -1, aLp(), !bq.hR || 1 !== bq.dM || bq.cp || bq.cq || bE.bF.setState(1)), k.l = !0
	}, this.nO = function() {
		(bq.hR || bq.cq) && 1 === bq.dM && (bv.bR(!0), bq.cp || setTimeout(function() {
			i1.aBC()
		}, 0), bE.bF.setState(0))
	}, this.ay = function(az, b0) {
		return 0 <= (aLo = aLq(az, b0)) || !c2.d8 || bq.hR || bq.cq || c5.ci || c2.nN(), aLo
	}, this.b2 = function(az, b0) {
		az = aLq(az, b0);
		az !== aLm && (aLm = az, this.d8 || aLp(), k.l = !0)
	}, this.aK7 = function(az, b0) {
		az = aLq(az, b0);
		return -1 !== az && aLo === az && (this.d8 ? bq.br ? (0 <= az && bt.nI(!1), !bq.cq) : (0 === az ? bq.iO() : 1 === az ? this.nN() : 2 === az && aM.iZ(1, 0), !0) : 9 === az && (this.nN(), !0))
	}, this.n = function() {
		var af;
		this.d8 ? (af = Math.floor(5.5 * ae), ah.setTransform(1, 0, 0, 1, ab.gap, bw.aZ), ah.fillStyle = ao.cR, ah.fillRect(0, 0, af, ae), 0 === aLm ? (ah.fillStyle = ao.a4U, ah.fillRect(0, 0, 4 * ae, ae)) : 1 === aLm && (ah.fillStyle = ao.a4U,
				ah.fillRect(4 * ae, 0, Math.floor(1.5 * ae), ae)), ah.fillStyle = ao.ap, ah.fillRect(0, 0, af, 1), ah.fillRect(0, 0, 1, ae), ah.fillRect(4 * ae, 0, 1, ae), ah.fillRect(0, ae - 1, af, 1), ah.fillRect(af - 1, 0, 1, ae), ah
			.font = cl, ar.at.textBaseline(ah, 1), ar.at.textAlign(ah, 1), ah.fillText(L(342), 2 * ae, .54 * ae), af = .4 * ae, c2.aJP(ab.gap + 4 * ae + (1.5 * ae - af) / 2, bw.aZ + .3 * ae, af), af = 1, ah.setTransform(1, 0, 0, 1, ab.gap, bw
				.aZ - af * aLn * ab.gap - af * ae), ah.fillStyle = ao.cR, ah.fillRect(0, 0, 4 * ae, ae), aLm === af + 1 && (ah.fillStyle = ao.a4U, ah.fillRect(0, 0, 4 * ae, ae)), ah.fillStyle = ao.ap, ah.fillRect(0, 0, 4 * ae, 1), ah
			.fillRect(0, 0, 1, ae), ah.fillRect(4 * ae, 0, 1, ae), ah.fillRect(0, ae - 1, 4 * ae, 1), ah.fillText(L(0 === af ? 342 : 343), 2 * ae, .54 * ae), ah.setTransform(1, 0, 0, 1, 0, 0)) : ah.drawImage(canvas, ab.gap, bw.aZ)
	}, this.sK = function(player) {
		return 0 !== fz.iN[player] && 2 !== bq.dM && !ar.d1.lp(player)
	}, this.aJP = function(ag, aZ, a3) {
		ah.setTransform(1, 0, 0, 1, ag, aZ), ah.lineWidth = ab.ai, ah.strokeStyle = ao.ap, ah.beginPath(), ah.moveTo(0, 0), ah.lineTo(a3, a3), ah.moveTo(0, a3), ah.lineTo(a3, 0), ah.stroke()
	}
}

function aEy(aLv, aLw, aLx, aLy, aLz) {
	var self;
	this.qo = document.createElement("span"), this.resize = function() {
			this.qo.style.fontSize = ((aLy - aLx) * aLw.offsetHeight).toFixed(1) + "px"
		}, (self = this).qo.textContent = aLv, self.qo.style.color = ao.ap, self.qo.style.font = "inherit", self.qo.style.margin = "0.1em 0.6em", self.qo.style.pointerEvents = "none", aLz && (self.qo.style.fontWeight = "bold"), self.qo.style
		.whiteSpace = "nowrap", self.qo.style.display = "block", aLw.appendChild(self.qo)
}

function aL(a2R, aM0, dv, aM1, aM2) {
	var self, aM3 = document.createElement("button");

	function a8j() {
		var aDJ;
		n8.qt() || (aDJ = ar.color.aAr(dv), !1 !== aM1 && 0 < aDJ[0] && aDJ[0] < 255 && aDJ[0] === aDJ[1] && aDJ[0] === aDJ[2]) || (aM3.style.backgroundColor = ar.color.kS(dv, aDJ[3] && aDJ[3] < 120 ? 150 : 50))
	}

	function aM6() {
		if (aM1) {
			var aDJ = ar.color.aAr(dv);
			if (aDJ[0] === aDJ[1] && aDJ[0] === aDJ[2]) return
		}
		aM0 && ((aDJ = aM0(this)) ? 2 === aDJ && a8j() : aMB(this))
	}

	function aM7() {
		this.style.backgroundColor = dv
	}

	function a8k() {
		aMB(this)
	}

	function aMB(iy) {
		iy.style.backgroundColor = dv, iy.blur()
	}
	this.button = aM3, this.b8 = aM0, this.aM4 = dv, this.aM5 = function(aM8) {
			aM8 = 1.1 - Math.min(.01 * a2R.length, .6) + .2 * aM8;
			aM3.style.fontSize = aM8.toFixed(1) + "em"
		}, this.e0 = function(aV) {
			aV ? 1 === aV ? aV = ao.a4a : 2 === aV && (aM1 = 1, aV = ao.a4a) : (aM1 = 0, aV = ao.cR), this.aM4 = dv = aV, aM3.style.backgroundColor = aV
		}, self = this, aM3.innerHTML = a2R, aM3.style.color = aM2 ? ao.kR : ao.ap, aM3.style.userSelect = "none", aM3.style.outline = "none", aM3.style.overflowWrap = "break-word", self.e0(dv), aM3.style.border = "none", aM3.style.font = "inherit",
		self.aM5(0), aM3.style.padding = "0em 0.3em", aM3.onclick = aM6, aM3.addEventListener("mouseover", a8j), aM3.addEventListener("mouseout", a8k), aM3.addEventListener("focus", a8j), aM3.addEventListener("blur", aM7)
}

function aMC() {
	this.aDV = function(player) {
		iE.aIV(player), bq.hN++, fz.lq[player] = 2, fz.x0[player] = jg.eI.aMD(), player === bq.d3 && (c4.show(!1, !1), by.aME(), hl.aB9.aMF()), bp.mJ(player)
	}
}

function xr() {
	var aMG, aMH = [],
		aMI = -1,
		aMJ = 0,
		aMK = 0;

	function aMP() {
		aMJ = k.e6, (3 === this.a8i ? (aMK = 1, aMO) : (aMI = (aMH.length + aMI + 2 * this.a8i - 1) % aMH.length, aMN))()
	}

	function aMN() {
		0 !== aMH.length && (aMK = 0, aMG && aMG.xv(), (aMG = new a8e(aMP)).aT(aMI, aMH.length), aMG.show(aMH[aMI]), qd.message.resize())
	}

	function aMO() {
		aMG && aMG.xv(), (aMG = new aMQ(aMN)).aT(aMH.length), aMG.show(), qd.message.resize()
	}
	this.aML = function(a8u) {
		var qm;
		2 === a8u.id && 3 === a8u.a9K ? qd.nu.a9N(a8u.dr) : (qm = qd.nu.a8n(a8u, qd.nu.a8o(a8u)), (5 !== a8u.id && 6 !== a8u.id || (aM.wp(29).aMM().aFF(qm), 5 === a8u.id)) && (qm = k.e6 < aMJ + 2e4, aMI !== aMH.length - 1 && qm || (aMI = aMH
			.length), aMH.push(a8u), aP.aQ.data[14].value || xu.play(), aMG) && (aP.aQ.data[13].value || aMK && qm ? aMG.aT(aMH.length) : aMN()))
	}, this.show = function() {
		aMO()
	}, this.aR = function() {
		aMI = aMH.length - 1, aMG && aMG.xv(), aMG = null
	}, this.resize = function() {
		aMG && aMG.resize()
	}, this.aIn = function() {
		return aMH
	}
}

function uS() {
	this.fO = function(canvas, fG, dl) {
		var af = canvas.width,
			ae = canvas.height,
			aV = ar.at.pj(af, ae),
			gq = ar.at.getContext(aV, !0),
			canvas = (gq.drawImage(canvas, 0, 0), gq.getImageData(0, 0, af, ae));
		return fG(canvas.data, af, ae, dl), gq.putImageData(canvas, 0, 0), aV
	}, this.fM = function(fX, af, ae) {
		for (var ag = af - 1; 0 <= ag; ag--)
			for (var aZ = ae - 1; 0 <= aZ; aZ--) {
				var a5 = 4 * (ag + aZ * af);
				fX[3 + a5] = fX[a5], fX[a5] = fX[1 + a5] = fX[2 + a5] = 255
			}
	}, this.fI = function(fX, af, ae) {
		for (var ag = af - 1; 0 <= ag; ag--)
			for (var aZ = ae - 1; 0 <= aZ; aZ--) {
				var a5 = 4 * (ag + aZ * af);
				fX[1 + a5] > fX[2 + a5] + 10 && (fX[3 + a5] = fX[a5], fX[1 + a5] = fX[2 + a5])
			}
	}, this.fK = function(fX, af, ae, dl) {
		for (var gap = Math.floor(Math.min(af, ae) * dl), ag = 0; ag < af; ag++)
			for (var a5, aZ = 0; aZ < ae; aZ++)(ag < gap || aZ < gap || af - gap <= ag || ae - gap <= aZ) && (fX[3 + (a5 = 4 * (ag + aZ * af))] = 255 - 255 * (fX[1 + a5] - fX[a5]) / (255 - fX[a5]))
	}, this.aMR = function(fX, af, ae, dl) {
		for (var ag = af - 1; 0 <= ag; ag--)
			for (var aZ = ae - 1; 0 <= aZ; aZ--) {
				var a5 = 4 * (ag + aZ * af);
				fX[a5] = dl[0], fX[1 + a5] = dl[1], fX[2 + a5] = dl[2]
			}
	}, this.fJ = function(fX, af, ae, dl) {
		for (var gap = Math.floor(af * dl), ag = 0; ag < af; ag++)
			for (var a5, aZ = 0; aZ < ae; aZ++)(ag < gap || aZ < gap || af - gap <= ag || ae - gap <= aZ) && (fX[a5 = 4 * (ag + aZ * af)] = fX[1 + a5] = fX[2 + a5] = 0)
	}, this.fL = function(fX, af, ae) {
		for (var aZ, a5, ag = af - 1; 0 <= ag; ag--)
			for (aZ = ae - 1; 0 <= aZ; aZ--) 200 < fX[1 + (a5 = 4 * (ag + aZ * af))] && fX[1 + a5] - 20 > fX[a5] && fX[1 + a5] - 20 > fX[2 + a5] ? fX[a5] + fX[2 + a5] < 40 ? fX[3 + a5] = 0 : (fX[3 + a5] = fX[a5], fX[a5] = 255, fX[1 + a5] = 255,
				fX[2 + a5] = 255) : fX[a5] < 50 && fX[1 + a5] < 50 && fX[2 + a5] < 50 && (fX[a5] + fX[1 + a5] + fX[2 + a5] < 50 ? fX[3 + a5] = 180 : fX[3 + a5] = 180 + Math.floor(75 * (fX[a5] + fX[1 + a5] + fX[2 + a5] - 50) / 100))
	}, this.fN = function(fX, af, ae) {
		for (var aZ, a5, ag = af - 1; 0 <= ag; ag--)
			for (aZ = ae - 1; 0 <= aZ; aZ--) fX[1 + (a5 = 4 * (ag + aZ * af))] > fX[a5] + 20 && fX[1 + a5] > fX[2 + a5] + 20 && fX[a5] + fX[2] < 40 && (fX[3 + a5] = 255 - fX[1 + a5], fX[a5] = fX[1 + a5] = fX[2 + a5] = fX[a5])
	}, this.a9T = function(fX, af, ae, dl) {
		for (var al = af >> 1, ag = 0; ag < af; ag++)
			for (var aZ = 0; aZ < ae; aZ++) Math.sqrt((ag - al) * (ag - al) + (aZ - al) * (aZ - al)) > dl * al && (fX[4 * (ag + aZ * af) + 3] = 0)
	}
}

function ih() {
	var af, ae, aMS;

	function aMf(ke, iy, aMd, aMV, fX) {
		iy = aMe(ke, iy + 1 + 2 * aMV & 3);
		! function(ke, zg) {
			return 1 < Math.abs(ke % af - zg % af) || 1 < Math.abs(aMh(ke) - aMh(zg))
		}(ke, iy) && 0 === fX[iy << 2] && (fX[iy << 2] = aMd)
	}

	function aMh(cE) {
		return Math.floor((cE + .5) / af) % ae
	}

	function aMe(cE, iy) {
		return cE + aMS[iy]
	}
	this.h1 = function(a2) {
		var a5, lP, a3, aMT, x8 = gv;
		for (h0.kY.zt(h0.kY.zu(a2)), bh.a7J.p0[bh.ig].af = bh.ma = af = x8.gz(12), bh.a7J.p0[bh.ig].ae = bh.oi = ae = x8.gz(12), aMS = [-af, -1, af, 1], bh.bi = document.createElement("canvas"), bh.bi.width = bh.ma, bh.bi.height = bh.oi, bh.tm =
			bh.bi.getContext("2d", {
				alpha: !1
			}), bh.aDm = bh.a63 = null, bh.aDm = bh.tm.getImageData(0, 0, bh.ma, bh.oi), bh.a63 = bh.aDm.data, ar.t4.aLX(bh.a63), a3 = x8.gz(12), lP = x8.gz(5), aMT = aMW(af * ae - 1), a5 = 0; a5 < a3; a5++) ! function(ei, cE, aMU, aMV) {
			var a5, iy, x8 = gv,
				fX = bh.a63,
				aMZ = cE,
				aMa = cE,
				aMb = 0,
				aMc = 1 + aMU,
				aMd = 2 - aMU;
			for (fX[cE << 2] = aMc, a5 = 0; a5 < ei; a5++) iy = x8.gz(2), cE = aMe(cE, iy), fX[cE << 2] === aMc ? aMb % 2 == 1 && aMf(aMa, aMb + 2 * aMV + 3, aMd, aMV, fX) : fX[cE << 2] = aMc, aMf(cE, iy, aMd, aMV, fX), aMf(aMa, iy, aMd, aMV,
				fX), aMa = cE, aMb = iy;
			aMe(cE, 0) === aMZ ? (aMf(cE, 0, aMd, aMV, fX), aMf(aMZ, 0, aMd, aMV, fX)) : aMe(cE, 1) === aMZ && (aMf(cE, 0, aMd, aMV, fX), aMf(aMZ, 2, aMd, aMV, fX));
			0 === ei && (aMf(aMZ, 0, aMd, aMV, fX), aMf(aMZ, 2, aMd, aMV, fX))
		}(x8.gz(lP), x8.gz(aMT), 1 === x8.gz(1), 1 === x8.gz(1));
		var ag, aZ, eE, aMi, aMj, aMk, fX = bh.a63,
			aMl = !0,
			pF = bh.a7J.p0[bh.ig].pF,
			pG = bh.a7J.p0[bh.ig].pG;
		for (aZ = 0; aZ < ae; aZ++)
			for (aMi = !0, aMj = aMl, ag = aMk = 0; ag < af; ag++) eE = 4 * aZ * af + 4 * ag, aMk <= ag && 0 < fX[eE] && (aMj = 2 === fX[eE], aMi) && (aMi = !1, aMj !== aMl) ? (aMl = aMj, aMk = ag + 1, ag = -1) : (aMj ? (fX[eE] = pG[0], fX[1 +
				eE] = pG[1], fX[2 + eE] = pG[2]) : (fX[eE] = pF[0], fX[1 + eE] = pF[1], fX[2 + eE] = pF[2]), fX[3 + eE] = 255);
		bh.tm.putImageData(bh.aDm, 0, 0), bh.aEA = !0, bh.aDi.aJ(), k.l = !0
	}
}

function aMm() {
	var ag, aZ, ae, aEg, aMn, aMo, aMp, aMq, aMr, af, aLK, aMs;
	this.ci = !1, this.aJ = function(a2, aMt) {
		if (1 === bE.id && 13 <= bE.my && bE.my < 18) return aMt ? void(aLK = a2) : aLK !== a2 ? void 0 : void bE.n0.saveString(200, a2);
		aMt && (aLK = a2, (aMs = document.createElement("a")).appendChild(document.createTextNode(aLK)), this.ci = !0, aMs.title = aLK, aMs.target = "_blank", aMs.href = aLK, aMs.style.textAlign = "center", aMs.style.color = ao.ap, aMs.style
			.position = "absolute", aMs.style.padding = "0px", aMs.style.margin = "0px", this.resize(), document.body.appendChild(aMs), k.l = !0)
	}, this.aR = function() {
		return !(!this.ci || (document.body.removeChild(aMs), this.ci = !1))
	}, this.ay = function(no, np) {
		return !!this.ci && ((no < ag || np < aZ || ag + af < no || aZ + ae < np || ag + af - aEg < no && np < aZ + aEg) && (k.l = !0, this.ci = !1, document.body.removeChild(aMs)), !0)
	}, this.resize = function() {
		var cl, mT;
		this.ci && (aMq = Math.floor(.8 * (bE.bF.bG() ? f.af > f.ae ? .6 : .55 : .4) * f.bH), aEg = Math.floor(.15 * aMq), aMn = Math.floor(.35 * aEg), aMo = Math.floor(.5 * aEg), aMp = Math.floor(2.5 * aMo), ae = aEg + aMn + 3 * aMo, cl = ar.at
			.au(1, aMn / f.aW), aMr = Math.floor(f.aW * bz.measureText(aLK, cl)), mT = af = (aMq < aMr ? aMr : aMq) + 2 * aMp, af = Math.min(af, f.af - 2 * (bE.bF.bG() ? 2 : 1) * ab.gap), cl = ar.at.au(1, af / mT * aMn / f.aW), aMr = Math
			.floor(f.aW * bz.measureText(aLK, cl)), ag = Math.floor((f.af - af) / 2), aZ = Math.floor((f.ae - ae) / 2), aMs.style.font = cl, aMs.style.top = Math.floor((aZ + 1.4 * aMo + aEg) / f.aW) + "px", aMs.style.left = Math.floor((ag + (
				af - aMr) / 2) / f.aW) + "px")
	}, this.n = function() {
		this.ci && (ah.fillStyle = ao.c9, ah.fillRect(ag, aZ + aEg, af, ae - aEg), ah.fillStyle = ao.a5F, ah.fillRect(ag, aZ, af, aEg), ah.fillStyle = ao.ap, ah.lineWidth = ab.ai, ah.strokeStyle = ao.ap, ah.strokeRect(ag, aZ, af, ae), ah
			.fillRect(ag, aZ + aEg, af, ab.ai), ah.font = ar.at.au(1, .48 * aEg), ar.at.textAlign(ah, 1), ar.at.textBaseline(ah, 1), ah.fillText("You are leaving Territorial.io!", Math.floor(ag + (af - .5 * aEg) / 2), Math.floor(aZ + .55 *
				aEg)), c2.aJP(Math.floor(ag + af - .8 * aEg), Math.floor(aZ + .25 * aEg), Math.floor(.5 * aEg)), ah.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function aHN() {
	this.e6 = k.e6, this.b4 = 0, this.b = 0, this.a5c = 0, this.aMu = null, this.aMv = 7, this.fb = 0, this.aJ = function() {
		this.a5c = 0, this.aMu = [], this.b4 = 0, this.b = 0
	}, this.vB = function(di) {
		if (bq.cp) this.a5p(di);
		else if (this.aMu.push(di), 2 === bq.dM) {
			for (var a5 = 0; a5 < this.aMu.length; a5++) gl.ht.c(this.aMu[a5]);
			this.aMu = []
		}
	}, this.a5p = function(di) {
		2 !== bq.dM && (gl.ht.c(di), iA.c(), by.a5p(this.a5c), this.a5c === bq.hb ? (bq.hY.c(), this.a5c = 0, this.b4 = 0, this.b = 0, this.e6 = k.e6) : (this.a5c++, bp.lT(), bp.bR(!0), i1.a5k()))
	}, this.c = function() {
		f.c(), bq.cp ? (k.l = by.a5p(-1) || k.l, a5q()) : (0 !== this.b4 || k.e6 >= this.e6 && (this.e6 += k.a5h * Math.floor(1 + (k.e6 - this.e6) / k.a5h), 2 === bq.dM ? a5i() : this.aMw(), this.b4++, 27 < k.e6 - this.fb)) && this.aMx(), a5g(),
			k.l && (k.l = !1, bd()), this.fb = k.e6
	}, this.aMx = function() {
		k.l = !0, a5r(), this.b4 = 0
	}, this.aMw = function() {
		var aIR, a5;
		if (this.b !== 7 * this.a5c) a5o(), i1.a5k();
		else {
			aIR = !1;
			loop: for (; this.aMy() && (aIR = !0, a5o(), 2 !== bq.dM) && 0 < this.aMu.length;)
				for (a5 = this.aMv - 2; 0 <= a5; a5--)
					if (a5o(), 2 === bq.dM) break loop;
			aIR ? i1.a5k() : (a5i(), i1.aMz())
		}
	}, this.aMy = function() {
		return 0 < this.aMu.length && (this.a5c++, gl.ht.c(this.aMu[0]), this.aMu.shift(), !0)
	}
}

function aN0() {
	var aN1;

	function aND(m9, mC, ag, aZ, globalAlpha) {
		bh.tm.save(), bh.tm.globalAlpha = globalAlpha, bh.tm.imageSmoothingEnabled = !1, bh.tm.scale(mC, mC), bh.tm.drawImage(m9, Math.floor(ag * (bh.ma / mC - m9.width)), Math.floor(aZ * (bh.oi / mC - m9.height))), bh.tm.restore()
	}
	this.aCd = 0, this.aCe = 0, this.aCf = 0, this.aCg = 0, this.aJ = function() {
		(aN1 = new Array(bh.pB))[0] = {
			af: [0, 5e3, 8e3, 1e4],
			al: [220, 250, 255, 220],
			am: [190, 220, 0, 0],
			an: [170, 200, 0, 0]
		}, aN1[1] = {
			af: [0, 4e3, 5e3, 6e3, 1e4],
			al: [25, 0, 100, 0, 25],
			am: [25, 0, 0, 0, 25],
			an: [25, 0, 0, 0, 25]
		}, aN1[2] = {
			af: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			al: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			am: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			an: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aN1[3] = {
			af: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			al: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			am: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			an: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aN1[4] = {
			af: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			al: [10, 10, 20, 10, 10, 170, 212],
			am: [20, 20, 60, 100, 100, 110, 170],
			an: [70, 70, 160, 30, 30, 60, 120]
		}, aN1[5] = {
			af: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			al: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			am: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			an: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aN1[6] = {
			af: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			al: [10, 10, 60, 255, 255, 200, 200],
			am: [10, 10, 60, 255, 255, 200, 200],
			an: [80, 80, 255, 255, 255, 200, 200]
		}, aN1[7] = {
			af: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			al: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			am: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			an: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aN1[8] = {
			af: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			al: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			am: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			an: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aN1[9] = {
			af: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			al: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			am: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			an: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aN1[20] = {
			af: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			al: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			am: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			an: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aN1[21] = {
			af: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			al: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			am: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			an: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aN2 = function() {
		var aNC, a5, fp, wB, vU = function() {
				var vU;
				return bh.bi = document.createElement("canvas"), bh.bi.width = bh.ma, bh.bi.height = bh.oi, bh.tm = bh.bi.getContext("2d", {
					alpha: !1
				}), vU = bh.tm.getImageData(0, 0, bh.ma, bh.oi), bh.a63 = vU.data, vU
			}(),
			af = aN1[bh.ig].af,
			al = aN1[bh.ig].al,
			am = aN1[bh.ig].am,
			an = aN1[bh.ig].an,
			y = yD.yE(),
			a3 = af.length - 2,
			aN7 = new Array(1 + a3),
			aN8 = new Array(1 + a3),
			aN9 = new Array(1 + a3),
			aNA = new Array(1 + a3);
		for (fp = a3; 0 <= fp; fp--) aN7[fp] = af[fp + 1] - af[fp], aN8[fp] = al[fp + 1] - al[fp], aN9[fp] = am[fp + 1] - am[fp], aNA[fp] = an[fp + 1] - an[fp];
		for (a5 = bh.ma * bh.oi - 1; 0 <= a5; a5--)
			for (fp = a3; 0 <= fp; fp--)
				if (y[a5] >= af[fp]) {
					wB = y[a5] - af[fp], bh.a63[4 * a5] = al[fp] + yF(aN8[fp] * wB, aN7[fp]), bh.a63[4 * a5 + 1] = am[fp] + yF(aN9[fp] * wB, aN7[fp]), bh.a63[4 * a5 + 2] = an[fp] + yF(aNA[fp] * wB, aN7[fp]), bh.a63[4 * a5 + 3] = 255;
					break
				} bh.tm.putImageData(vU, 0, 0), bh.aN5(bh.ig) && gW.f7() && bh.aN5(bh.ig) && (vU = gW.f6("arena"), aNC = gW.f6("territorial.io"), aND(vU, 5, .5, .5, .1), aND(aNC, 2, .5, .45, .1)), bh.aEA = !0, k.l = !0
	}, this.i0 = function() {
		for (var cE, ag, aZ, aFX, rE, wC, aCe = 0, af = bh.ma, ae = bh.oi, wB = af * ae * 4, aFV = a3r, aFW = bh.a63, a5 = af - 1; 0 <= a5; a5--) aFV[(cE = a5 << 2) + 2] = aFV[wB - cE - 2] = 3;
		for (wB = 4 * af, a5 = ae - 1; 0 <= a5; a5--) aFV[(cE = a5 * wB) + 2] = aFV[cE + wB - 2] = 3;
		for (aFX = af - 1, rE = ae - 1, aZ = 1; aZ < rE; aZ++)
			for (wB = aZ * af, ag = 1; ag < aFX; ag++) wC = 1 - (aFW[(cE = wB + ag << 2) + 2] > aFW[cE + 1] && aFW[cE + 2] > aFW[cE]), aFV[cE + 2] = 6 - 5 * wC, aCe += wC;
		this.aCd = (af - 2) * (ae - 2), this.aCg = 0, bh.ij(bh.ig) && (bh.aCg.aFU(), bh.aCg.aFY(4, 5)), this.aCe = bq.hS = aCe - this.aCg, this.aCf = this.aCd - this.aCe - this.aCg, this.aCf && bh.aCg.aFY(6, 2)
	}
}

function L(value, aNE, a31) {
	var a2 = "number" == typeof value ? df.st[value] : value;
	if (a31 && df.t2() && (a2 = a31), aNE)
		for (var a3 = aNE.length, a5 = 0; a5 < a3; a5++)
			for (var fp = 0; fp < 3; fp++) a2 = a2.replace("{" + (10 * fp + a5) + "}", aNE[a5]);
	return a2
}

function aNF() {
	var a5R, a5S, aNG, aNH, aNI, aNJ, aNK, aNL, aNM, aNN;

	function aNP() {
		var hO = bq.hO;
		for (aNM = hO; aNM < bq.g7; aNM++) aNO();
		for (aNM = bq.cp ? bq.fx : 0; aNM < hO; aNM++) {
			if (!aNS()) {
				for (var an = bq.hP = aNM; an < hO; an++) aNM = an, aNO();
				return
			}
			aNT(aNJ + a5R * aNI + z.a0(aNI, 2), aNK + a5S * aNI + z.a0(aNI, 2))
		}
	}

	function aNm(player) {
		for (var lR = fz.lR, lS = fz.lS, lU = fz.lU, lV = fz.lV, aZ = lS[player]; aZ <= lV[player]; aZ++)
			for (var ag = lR[player]; ag <= lU[player]; ag++) {
				var gr = hy.a3l(ag, aZ);
				hy.qE(gr) && (hy.a3u(gr) ? hy.a43(gr, player) : hy.a42(gr, player))
			}
	}

	function aNl(a4, sT, sU) {
		var dO = a4[sT];
		a4[sT] = a4[sU], a4[sU] = dO
	}

	function aNS() {
		return function() {
			var a5;
			for (a5 = 0; a5 < 8; a5++)
				if (a5R = z.a0(aNG * g1.random(), g1.value(100)), a5S = z.a0(aNH * g1.random(), g1.value(100)), aNr()) return 1;
			return
		}() || function() {
			var la, lb, fp, m4, an, m3;
			for (la = z.a0(aNG * g1.random(), g1.value(100)), lb = z.a0(aNH * g1.random(), g1.value(100)), fp = 40; 1 <= fp; fp--)
				for (m4 = aNH - fp; 0 <= m4; m4 -= 40)
					for (a5S = (m4 + lb) % aNH, an = 40; 1 <= an; an--)
						for (m3 = aNG - an; 0 <= m3; m3 -= 40)
							if (a5R = (m3 + la) % aNG, aNr()) return 1;
			return
		}()
	}

	function aNr() {
		for (var cE, aNt, gap = z.a0(aNI - aNL, 2), aDj = aNK + a5S * aNI + gap, aDs = aNJ + a5R * aNI + gap, aNs = aDj + aNL - 1; aDj <= aNs; aNs--)
			for (aNt = aDs + aNL - 1; aDs <= aNt; aNt--)
				if (cE = hy.a3l(aNt, aNs), !hy.q7(cE) || hy.a3u(cE)) return;
		return 1
	}

	function aNT(m3, m4) {
		aNO(), aNu(m3 - 2, m4 - 2)
	}

	function aNO() {
		fz.iN[aNM] = 0, fz.lJ[aNM] = fz.a9d[aNM] = 0, fz.jF[aNM] = [], fz.rD[aNM] = [], fz.oH[aNM] = [], fz.ik[aNM] = [], fz.lR[aNM] = fz.lS[aNM] = fz.lU[aNM] = fz.lV[aNM] = 0
	}

	function aNu(m3, m4) {
		var cE, a5, aNv, aNw;
		for (fz.iN[aNM] = 1, fz.lR[aNM] = m3 + 10, fz.lS[aNM] = m4 + 10, fz.lV[aNM] = fz.lU[aNM] = 0, aNv = m3; aNv < m3 + 4; aNv++)
			for (aNw = m4; aNw < m4 + 4; aNw++)(m3 < aNv && aNv < m3 + 3 || m4 < aNw && aNw < m4 + 3) && (cE = hy.a3l(aNv, aNw), hy.q7(cE)) && (fz.lR[aNM] = Math.min(aNv, fz.lR[aNM]), fz.lU[aNM] = Math.max(aNv, fz.lU[aNM]), fz.lS[aNM] = Math.min(aNw,
				fz.lS[aNM]), fz.lV[aNM] = Math.max(aNw, fz.lV[aNM]), aNN[fz.lJ[aNM]] = cE, fz.lJ[aNM]++, hy.a42(cE, aNM));
		for (fz.a9d[aNM] = fz.lJ[aNM], a5 = fz.lJ[aNM] - 1; 0 <= a5; a5--) hy.a3p(aNN[a5], aNM) ? (hy.a43(aNN[a5], aNM), fz.rD[aNM].push(aNN[a5])) : hy.a3v(aNN[a5]) ? (hy.a43(aNN[a5], aNM), fz.oH[aNM].push(aNN[a5])) : hy.a3m(aNN[a5]) && (hy.a43(aNN[
			a5], aNM), fz.ik[aNM].push(aNN[a5]))
	}

	function aNq(m3, m4) {
		for (var cE, aNt, aNs = m4; m4 - 6 < aNs; aNs--)
			for (aNt = m3; m3 - 6 < aNt; aNt--)
				if (cE = hy.a3l(aNt, aNs), hy.a3u(cE)) return;
		return 1
	}
	this.aJ = function() {
		if (aNN = new Array(12), aNL = 6, aNI = 10, aNG = z.a0(bh.ma, aNI), aNH = z.a0(bh.oi, aNI), aNJ = z.a0(bh.ma - aNI * aNG, 2), aNK = z.a0(bh.oi - aNI * aNH, 2), bq.cp)
			for (var a5 = 0; a5 < bq.fx; a5++) aNM = a5, aNO(), fz.iN[aNM] = 1;
		(0 === bq.data.spawningType ? aNP : 1 === bq.data.spawningType ? (aNP(), function() {
			var aDO = bq.hV;
			bq.hW || aDO++;
			if (!(aDO < 3)) {
				for (var data = bq.data, mV = (bq.cp ? bq.fx : 0) + data.teamPlayerCount[0], mU = bq.hP, aNU = new Uint32Array(aDO), aNV = new Uint32Array(aDO), aNW = new Uint16Array(aDO), aNX = new Uint16Array(aDO), va = hv.va, lR = fz
						.lR, lS = fz.lS, lU = fz.lU, lV = fz.lV, aFN = j9.aFN, aFO = j9.aFO, a5 = mV; a5 < mU; a5++) aFN[a5] = lR[a5] + lU[a5] >> 1, aFO[a5] = lS[a5] + lV[a5] >> 1;
				for (a5 = mV; a5 < mU; a5++) {
					var id = va[a5];
					aNU[id] += aFN[a5], aNV[id] += aFO[a5]
				}
				var vR = hv.vR;
				for (a5 = 1; a5 < aDO; a5++) {
					var gi = Math.max(data.teamPlayerCount[vR[a5]], 1);
					aNW[a5] = z.a0(aNU[a5], gi), aNX[a5] = z.a0(aNV[a5], gi)
				}
				var aCz = hv.aCz,
					aD0 = hv.aD0,
					aD1 = hv.aD1,
					a89 = j9.a89;
				for (a5 = 0; a5 < 512; a5++) a89[a5] = a5;
				for (var al = 0; al < 2 + (4 <= aDO); al++)
					for (a5 = mV; a5 < mU; a5++) {
						for (var ke = a5, aNY = a89[ke], aNZ = 1, vT = z.pO(aFN[aNY] - aNW[1], aFO[aNY] - aNX[1]), fp = 2; fp < aDO; fp++) {
							var u5 = z.pO(aFN[aNY] - aNW[fp], aFO[aNY] - aNX[fp]);
							u5 < vT && (vT = u5, aNZ = fp)
						}
						var aNa = va[ke];
						if (aNZ !== aNa) {
							if (2 === al && 4 <= aDO) {
								var aNb = Math.max((aNZ + 1) % aDO, 1),
									aNc = z.pO(aFN[aNY] - aNW[aNb], aFO[aNY] - aNX[aNb]);
								for (fp = 1; fp < aDO; fp++) u5 = z.pO(aFN[aNY] - aNW[fp], aFO[aNY] - aNX[fp]), vT < u5 && u5 < aNc && (aNc = u5, aNb = fp);
								aNb !== aNa && z.pO(aNW[aNa] - aNW[aNb], aNX[aNa] - aNX[aNb]) < z.pO(aNW[aNa] - aNW[aNZ], aNX[aNa] - aNX[aNZ]) && (aNZ = aNb)
							}
							var aNd = vR[aNZ],
								aNe = aD0[aNd] + (bq.cp ? 0 : aD1[aNd]),
								zg = aCz[aNe],
								aNf = a89[zg],
								aNg = aD0[aNd + 1];
							vT = z.pO(aFN[aNf] - aNW[aNa], aFO[aNf] - aNX[aNa]);
							for (var aV = aNe + 1; aV < aNg; aV++) {
								var aNh = aCz[aV],
									aNi = a89[aNh];
								(u5 = z.pO(aFN[aNi] - aNW[aNa], aFO[aNi] - aNX[aNa])) < vT && (vT = u5, zg = aNh)
							}
							zg < mV || mU <= zg || (aNf = a89[zg], aNU[aNa] += aFN[aNf] - aFN[aNY], aNV[aNa] += aFO[aNf] - aFO[aNY], aNU[aNZ] += aFN[aNY] - aFN[aNf], aNV[aNZ] += aFO[aNY] - aFO[aNf], gi = data.teamPlayerCount[vR[aNa]],
								aNW[aNa] = z.a0(aNU[aNa], gi), aNX[aNa] = z.a0(aNV[aNa], gi), gi = data.teamPlayerCount[aNd], aNW[aNZ] = z.a0(aNU[aNZ], gi), aNX[aNZ] = z.a0(aNV[aNZ], gi), a89[ke] = aNf, a89[zg] = aNY)
						}
					}! function() {
						for (var a89 = j9.a89, lR = fz.lR, lS = fz.lS, lU = fz.lU, lV = fz.lV, lJ = fz.lJ, a9d = fz.a9d, rD = fz.rD, oH = fz.oH, ik = fz.ik, a5 = 0; a5 < 512; a5++) {
							var aNk = a89[a5];
							if (aNk !== a5) {
								aNl(lR, a5, aNk), aNl(lS, a5, aNk), aNl(lU, a5, aNk), aNl(lV, a5, aNk), aNl(lJ, a5, aNk), aNl(a9d, a5, aNk), aNl(rD, a5, aNk), aNl(oH, a5, aNk), aNl(ik, a5, aNk), aNm(a5), aNm(aNk), a89[a5] = a5;
								for (var ae = aNk, j7 = a89[ae]; j7 !== a5;) j7 = a89[ae = j7];
								a89[ae] = aNk
							}
						}
					}()
			}
		}) : function() {
			var hO = bq.hO;
			for (aNM = hO; aNM < bq.g7; aNM++) aNO();
			for (aNM = bq.cp ? bq.fx : 0; aNM < hO; aNM++)
				if (! function() {
						var spawningData = bq.data.spawningData,
							m3 = spawningData[2 * aNM] + 1,
							spawningData = spawningData[2 * aNM + 1] + 1;
						if (3 < m3 && m3 < bh.ma - 5 && 3 < spawningData && spawningData < bh.oi - 5 && hy.q7(hy.a3l(m3, spawningData)) && aNq(m3 + 3, spawningData + 3)) return aNT(m3 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aNS()) {
						for (var an = bq.hP = aNM; an < hO; an++) aNM = an, aNO();
						return
					}
					var m3 = aNJ + a5R * aNI + z.a0(aNI, 2),
						m4 = aNK + a5S * aNI + z.a0(aNI, 2);
					aNT(m3, m4)
				}
		})(), hw.a2D[7] = fz.lJ[bq.d3]
	}, this.aNx = function(ju, aNy, aNz) {
		var a5, m3, m4, cE, a5R, a5S;
		for (aNM = ju, a5 = 0; a5 < 20; a5++)
			for (m3 = aNy + a5; aNy - a5 <= m3; m3--)
				for (m4 = aNz + a5; aNz - a5 <= m4; m4--)
					if ((m3 === aNy + a5 || m3 === aNy - a5 || m4 === aNz + a5 || m4 === aNz - a5) && 3 < m3 && m3 < bh.ma - 5 && 3 < m4 && m4 < bh.oi - 5 && hy.q7(hy.a3l(m3, m4)) && aNq(m3 + 3, m4 + 3)) {
						if (0 < fz.lJ[aNM]) {
							for (a5S = a5R = cE = void 0, a5R = fz.lU[aNM]; a5R >= fz.lR[aNM]; a5R--)
								for (a5S = fz.lV[aNM]; a5S >= fz.lS[aNM]; a5S--) cE = 4 * (a5S * bh.ma + a5R), hy.mZ(aNM, cE) && (hy.a3x(cE), fz.lJ[aNM]--);
							aNO()
						}
						return aNu(m3 - 1, m4 - 1), !0
					} return !1
	}, this.aO1 = function(ju) {
		aNM = ju, aNS() ? aNT(aNJ + a5R * aNI + z.a0(aNI, 2), aNK + a5S * aNI + z.a0(aNI, 2)) : aNO()
	}
}

function aO2() {
	function aO8() {
		var am;
		return 8 === bq.fs ? 0 : (am = Math.floor(fz.x0[bq.d3] / 50), (am = Math.min(am, 400)) / 100)
	}

	function aO3() {
		var am = aO8();
		0 !== am && bu.x1(440, L(344, [am.toFixed(2)]), 40, 0, ao.u3, ao.c9, -1, !1)
	}
	this.c = function() {
		var a6y;
		0 === hl.result.jZ || 0 === hl.result.jX.length || 8 === bq.fs ? ar.d1.q6(bq.d3) && aO3() : (function(a6y) {
			7 !== bq.fs && 10 !== bq.fs || 0 !== bq.hd && bu.x1(600, L(348, [a6y.toFixed(2)]), 40, 0, ao.ap, ao.c9, -1, !1)
		}(a6y = function() {
			bu.x1(520, L(345), 40, 0, ao.ap, ao.c9, -1, !1);
			for (var jX = hl.result.jX, a3 = jX.length, lJ = fz.lJ, a4 = [], a5 = 0; a5 < a3; a5++) {
				var cE = jX[a5];
				a4.push({
					cE: cE,
					dO: lJ[cE]
				})
			}
			a4.sort((fp, an) => an.dO - fp.dO);
			var f3 = fz.fy,
				dO = hl.result.jY,
				am = hl.result.jZ,
				a2 = "",
				a6y = 0;
			for (a5 = 0; a5 < a3; a5++) {
				var r7 = a4[a5].dO * am / (100 * dO),
					aOA = f3[a4[a5].cE] + ": " + r7.toFixed(2) + "   ";
				a4[a5].cE === bq.d3 && (a6y = r7), 2 < a5 && 4 !== a3 ? 3 === a5 && (a2 += "(" + L(346, [a3 - 3]) + ")") : a2 += aOA
			}
			bu.x1(560, ar.d5.a7u(a2), 40, 0, ao.u3, ao.c9, -1, !1), a6y ? bu.x1(580, L(347, [a6y.toFixed(2) + " + " + aO8().toFixed(2)]), 40, 0, ao.u3, ao.c9, -1, !1) : ar.d1.q6(bq.d3) && aO3();
			return a6y
		}()), 2 === bq.hc || 7 <= bq.fs || function(a6y) {
			var jX = hl.result.jX,
				a3 = jX.length,
				g0 = fz.g0,
				lJ = fz.lJ,
				aAz = [];
			loop: for (var a5 = 0; a5 < a3; a5++) {
				var cE = jX[a5],
					hC = ar.d5.a7s(g0[cE]);
				if (null !== hC) {
					for (var fc = lJ[cE], an = aAz.length - 1; 0 <= an; an--)
						if (hC === aAz[an].name) {
							aAz[an].dO += fc, aAz[an].a4.push({
								cE: cE,
								dO: fc
							});
							continue loop
						} aAz.push({
						name: hC,
						dO: fc,
						a4: [{
							cE: cE,
							dO: fc
						}]
					})
				}
			}
			if (0 !== aAz.length) {
				aAz.sort((fp, an) => an.dO - fp.dO);
				var a4 = aAz[0].a4,
					aOB = (a4.sort((fp, an) => an.dO - fp.dO), "[" + aAz[0].name + "]"),
					aOC = 512 * hl.result.jZ / 26214400,
					ei = (bu.x1(0, L(349, [aOB, aOC.toFixed(4)]), 40, 0, ao.ap, ao.c9, -1, !1), a4.length),
					aIK = aAz[0].dO,
					aOD = 1e4 * aOC;
				for (a5 = 0; a5 < ei; a5++)
					if (a4[a5].cE === bq.d3) {
						bu.x1(600, L(350, [(aOD * a4[a5].dO / (10 * aIK)).toFixed(2)]), 40, 0, ao.ap, ao.c9, -1, !1), bu.x1(640, L(351, [(.2 * a6y).toFixed(2), aOB]), 40, 0, ao.ap, ao.c9, -1, !1);
						break
					} bq.cq || bu.x1(720, L(352) + gZ.aOE, 736, 0, ao.ap, ao.a4k, -1, !1)
			}
		}(a6y))
	}, this.aMF = function() {
		var aO7, aMZ;
		bq.hR || (aO7 = fz, aMZ = bq.d3, 0 === aO7.a9g[aMZ]) || aO7.a9f[aMZ] < 1 || 2 * aO7.rr[aMZ] > 3 * (aO7.a9e[aMZ] + aO7.a9f[aMZ]) || aO3()
	}
}

function n3() {
	this.aOF = function() {
		aP.aS.aOG(), aP.aS.aOH(), g.h.close(0, 3255), 0 === bE.id ? bE.mz && bE.mz.clear() : 1 === bE.id ? bE.n0.saveString(199, "") : 2 === bE.id && bE.n2.postMessage("clear")
	}, this.aOI = function() {
		2 === bE.id ? bE.n2.postMessage("showConsentForm") : 1 === bE.id && bE.n0.setState(7)
	}, this.aOJ = function() {
		this.setState(14)
	}, this.bG = function() {
		return 1 === aP.aQ.a2z(2)
	}, this.aOK = function() {
		aP.aQ.gg(102, "")
	}, this.setState = function(vl) {
		1 === bE.id && 5 <= bE.my && bE.n0.setState(vl)
	}, this.mq = function() {
		var aIb;
		1 === bE.id && 7 <= bE.my ? bE.n0.setState(5) : ((aIb = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = aIb.toString())
	}, this.aOL = function() {
		1 !== bE.id || bE.my < 17 || bE.n0.saveString(23, document.documentElement.outerHTML)
	}, this.a9n = function() {
		0 !== bE.id && (1 === bE.id ? bE.n0.prepareAd("1688441405") : 2 === bE.id && (0 === bE.my ? bE.n2.postMessage("prepare ad 1770251391") : bE.n2.postMessage("loadAds 1770251391")))
	}, this.aAn = function(dO) {
		return 0 !== bE.id && 1 !== bE.id && 2 === bE.id && (0 === bE.my ? bE.n2.postMessage("show ad " + dO) : bE.n2.postMessage("showAd"), !0)
	}, this.aOM = function() {
		2 === bE.id && bE.my < 23 && aM.iZ(4, 1, new mn("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + gZ.nl + "' target='_blank'>" +
			gZ.nl + "</a>", !0, [new aL("⬅️ " + L(1), function() {
				aM.iZ(0)
			}, ao.a4u)]))
	}
}

function wd() {
	var yM, z2, aON, kI;

	function z4() {
		aOO.xv(), aM.wq()[19] = null, aM.rI()
	}

	function aOV() {
		aOZ(), aOX()
	}

	function aOZ() {
		aON.dx.lastChild && aON.dx.removeChild(aON.dx.lastChild)
	}

	function aOX() {
		var aOa = bh.a2h(bq.data);
		bq.data.canvas = bh.aOb(aOa, bq.data.mapSeed).bi, aOY()
	}

	function aOY() {
		var m9 = bq.data.canvas;
		m9.style.width = "100%", aON.dx.appendChild(m9)
	}
	this.aOc = function(m9) {
		bq.data.canvas && aOZ(), bq.data.canvas = m9, aOY()
	}, this.show = function() {
		yM.show(), this.resize()
	}, this.aR = function() {
		yM.aR()
	}, this.resize = function() {
		yM.resize(), z2.resize()
	}, this.b6 = function(aV) {
		2 === aV && yM.b7[0].b8()
	}, yM = new aK(L(353), [new aL("⬅️ " + L(1), z4)]), 2 === bq.data.mapType && aOO.aJ(), z2 = new rJ(yM.cQ, (function(kI) {
		var rM = new rN;
		rM.rO(L(47)), rM.zB(new zC({
			xx: [L(354), L(355), L(356)],
			value: bq.data.mapType
		}, function(b4) {
			2 === (bq.data.mapType = b4) ? (aOO.aJ(), bq.data.canvas = null) : (bq.data.passableWater = bq.data.passableMountains = 1, aOO.xv()), aM.iZ(20)
		})), 2 <= bq.data.mapType && (rM.rR(new a2O), rM.rR(new a2P({
			value: bq.data.passableWater
		}, L(357), function(value) {
			bq.data.passableWater = value
		})), rM.rR(new a2P({
			value: bq.data.passableMountains
		}, L(358), function(value) {
			bq.data.passableMountains = value
		})));
		kI.push(rM)
	}(kI = []), function(kI) {
		if (0 === bq.data.mapType) {
			for (var rM = new rN, xx = (rM.rO(L(353)), []), a5 = 0; a5 < bh.a7J.p1.length; a5++) xx.push(bh.a7J.p0[bh.a7J.p1[a5]].name);
			rM.zB(new zC({
				xx: xx,
				value: bq.data.mapProceduralIndex
			}, function(b4) {
				bq.data.mapProceduralIndex = b4, aOV()
			})), kI.push(rM)
		}
	}(kI), function(kI) {
		if (1 === bq.data.mapType) {
			for (var rM = new rN, xx = (rM.rO(L(353)), []), a5 = 0; a5 < bh.a7J.p2.length; a5++) xx.push(bh.a7J.p0[bh.a7J.p2[a5]].name);
			rM.zB(new zC({
				xx: xx,
				value: bq.data.mapRealisticIndex
			}, function(b4) {
				bq.data.mapRealisticIndex = b4, aOV()
			})), kI.push(rM)
		}
	}(kI), function(kI) {
		var rM;
		2 === bq.data.mapType && ((rM = new rN).rO(L(353)), rM.rR(new rY([new aL(L(359), function() {
			return aOO.aOW(), !0
		}).button])), kI.push(rM))
	}(kI), function(kI) {
		(aON = new rN).rO(L(360)), 2 !== bq.data.mapType ? aOX() : bq.data.canvas && aOY();
		kI.push(aON)
	}(kI), function(kI) {
		var rM, aF6, a7Z;
		0 === bq.data.mapType && ((rM = new rN).rO("Seed"), aF6 = new rQ({
			b4: -1,
			value: bq.data.mapSeed
		}, 1, 0, function(cb) {
			cb = Math.abs(Math.floor(cb.target.value)) % 16384;
			bq.data.mapSeed !== cb && (bq.data.mapSeed = cb, aOV())
		}), a7Z = new aL(L(58), function(cb) {
			var pE = Math.floor(16384 * Math.random());
			if (bq.data.mapSeed !== pE) return aF6.cb.value = bq.data.mapSeed = pE, aOV(), !0
		}), rM.rR(aF6), rM.rR(new rY([a7Z.button])), kI.push(rM))
	}(kI), function(kI) {
		var rM, aF6;
		2 === bq.data.mapType && ((rM = new rN).rO(L(361)), aF6 = new rQ({
			b4: -1,
			value: bq.data.mapName
		}, 0, 0, function(cb) {
			bq.data.mapName = cb.target.value = cb.target.value.slice(0, 20)
		}), rM.rR(aF6), kI.push(rM))
	}(kI), kI))
}

function aOd() {
	this.kY = new aII, this.h6 = new aKW, this.dp = new aHO, this.aJ = function() {
		this.kY.aJ()
	}
}

function aOe() {
	var aOf, aOg, aOh, aOi, aOj, aOk, aOl, aOm, aOn, aOo, aOp, aKu, aOq, aOr = 1;

	function aOt(aOu) {
		!aOu && 1 === aOq && aOr ? (aOr = 0, g.h.close(aOq, 3280)) : aOq = (aOq + 1) % g.h.aOv, aKu = k.e6, g.h.uz(aOq, 4) && g.aHx.dS(aOq)
	}

	function aOx() {
		if (0 !== aOq) return 1 === aOq && __fx.customLobby.isActive() ? (mi.aOz(3249), __fx.customLobby.setActive(!1)) : void aOt();
		mi.aOz(3249)
	}

	function aP4(aZ, eN, jJ) {
		var gE = Math.floor((f.af - aOi) / 2) + aOl,
			li = gE + Math.floor(jJ * (aOi - 2 * aOl));
		ah.lineWidth = eN, ah.beginPath(), ah.moveTo(gE, aZ), ah.lineTo(li, aZ), ah.lineTo(Math.floor(gE - aOl + jJ * aOi), aZ + aOh), ah.lineTo(gE - aOl, aZ + aOh), ah.closePath()
	}
	this.aOs = 1, this.aJ = function() {
		m.setState(6), aOf = 0, aOg = 1, aOm = "rgba(0,220,120,0.4)", aOn = "rgba(0,0,0,0.8)", this.resize(), k.l = !0, aOr = 1, aOq = this.aOs - 1, aOt(1)
	}, this.resize = function() {
		aOi = Math.floor((bE.bF.bG() ? .5 : .25) * f.bH), aOj = aOi + 12, aOh = Math.floor(.125 * aOi), aOl = 3 * aOh, aOk = Math.floor(.225 * aOi), aOp = Math.floor(.3 * aOh), aOo = ar.at.au(0, aOp)
	}, this.aOw = function(dT) {
		dT === aOq && aOx()
	}, this.ay = function(ag, aZ) {
		var gE = Math.floor((f.af - aOj) / 2),
			ex = Math.floor(.5 * (f.ae - ab.gap - aOh - aOk)) + aOh + ab.gap;
		return gE < ag && ag < gE + aOj && ex < aZ && aZ < ex + aOk && (this.aKV(), bW.b2(ag, aZ, !1), !0)
	}, this.aKV = function() {
		g.h.aP0(3260), __fx.customLobby.setActive(false), aM.h.mp()
	}, this.c = function() {
		6 === m.bS() && (k.e6 > aKu + 12e3 && aOx(), 100 < (aOf += .07 * aOg * (aOf < 16 ? 5 + aOf : 84 < aOf ? 105 - aOf : 17)) ? (aOf = 100, aOg = -1) : aOf < 0 && (aOf = 0, aOg = 1), aOm = "rgba(0," + Math.floor(190 - 1.9 * aOf) + "," + Math
			.floor(120 - 1.2 * aOf) + "," + (.4 + .004 * aOf) + ")", aOn = "rgba(0," + Math.floor(1.9 * aOf) + "," + Math.floor(1.2 * aOf) + "," + (.8 - .004 * aOf) + ")", k.l = !0)
	}, this.n = function() {
		var ag = Math.floor((f.af - aOj) / 2),
			aZ = Math.floor(.5 * (f.ae - ab.gap - aOh - aOk));
		! function(title, aZ, eN, jJ) {
			ah.fillStyle = aOn, aP4(aZ, eN, 1), ah.fill(), ah.fillStyle = aOm, aP4(aZ, eN, jJ), ah.fill(), ah.strokeStyle = ao.ap, aP4(aZ, eN, 1), ah.stroke(),
				function(aP6, aZ) {
					ar.at.textAlign(ah, 1), ar.at.textBaseline(ah, 1), ah.font = aOo, ah.fillStyle = ao.ap, ah.fillText(aP6, Math.floor(.5 * f.af), Math.floor(aZ + .58 * aOh))
				}(title, aZ)
		}(L(362), aZ, 3, aOf / 100),
		function(ag, aZ, af, ae, bK) {
			ah.fillStyle = ao.a4T, ah.fillRect(ag, aZ, af, ae), ah.lineWidth = 3, ah.strokeStyle = ao.ap, ah.strokeRect(ag, aZ, af, ae);
			var a3 = Math.floor(.3 * ae);
			ar.at.textAlign(ah, 1), ar.at.textBaseline(ah, 1), ah.font = ar.at.au(0, a3), ah.fillStyle = ao.ap, ah.fillText(bK, Math.floor(ag + af / 2), Math.floor(aZ + ae / 2 + .1 * a3))
		}(ag, aZ + aOh + ab.gap, aOj, aOk, L(1))
	}
}

function aP7() {
	this.vk = !1, this.a1W = !1, this.aP8 = !1, this.aP9 = [0, 0, 0, 0], this.a5k = function() {
		var gE, ex, li, lj;
		this.aP8 = this.aP8 || this.a1W, (this.a1W || this.vk && this.aP8) && (gE = a1P.vi[0], ex = a1P.vi[1], li = a1P.vi[2], lj = a1P.vi[3], gE = gE < this.aP9[0] ? this.aP9[0] : gE, ex = ex < this.aP9[1] ? this.aP9[1] : ex, li = li > this.aP9[
				2] ? this.aP9[2] : li, lj = lj > this.aP9[3] ? this.aP9[3] : lj, this.a1W = !1, this.vk = !1, gE === this.aP9[0] && ex === this.aP9[1] && li === this.aP9[2] && lj === this.aP9[3] ? this.aMz() : gE <= li && ex <= lj && iB
			.putImageData(iC, 0, 0, gE, ex, li - gE + 1, lj - ex + 1))
	}, this.aMz = function() {
		this.aP8 && this.aP9[2] >= this.aP9[0] && this.aP9[3] >= this.aP9[1] && iB.putImageData(iC, 0, 0, this.aP9[0], this.aP9[1], this.aP9[2] - this.aP9[0] + 1, this.aP9[3] - this.aP9[1] + 1), this.aP8 = !1
	}, this.aBC = function() {
		this.aP9[2] >= this.aP9[0] && this.aP9[3] >= this.aP9[1] && iB.putImageData(iC, 0, 0, this.aP9[0], this.aP9[1], this.aP9[2] - this.aP9[0] + 1, this.aP9[3] - this.aP9[1] + 1), this.aP8 = !1
	}, this.aJ = function() {
		var ag, aZ;
		this.vk = !1, this.a1W = !1, this.aP8 = !1, this.aP9[0] = bh.ma, this.aP9[1] = bh.oi, this.aP9[2] = this.aP9[3] = 0;
		loop: for (ag = 1; ag < bh.ma - 1; ag++)
			for (aZ = bh.oi - 2; 1 < aZ; aZ--)
				if (1 === a3r[hy.a3l(ag, aZ) + 2]) {
					this.aP9[0] = ag;
					break loop
				} loop: for (aZ = 1; aZ < bh.oi - 1; aZ++)
			for (ag = bh.ma - 2; 1 < ag; ag--)
				if (1 === a3r[hy.a3l(ag, aZ) + 2]) {
					this.aP9[1] = aZ;
					break loop
				} loop: for (ag = bh.ma - 2; 0 < ag; ag--)
			for (aZ = bh.oi - 2; 1 < aZ; aZ--)
				if (1 === a3r[hy.a3l(ag, aZ) + 2]) {
					this.aP9[2] = ag;
					break loop
				} loop: for (aZ = bh.oi - 2; 0 < aZ; aZ--)
			for (ag = bh.ma - 2; 1 < ag; ag--)
				if (1 === a3r[hy.a3l(ag, aZ) + 2]) {
					this.aP9[3] = aZ;
					break loop
				}
	}
}

function aPA() {
	var input;

	function aPB(cb) {
		(cb = cb.target.files) && 0 < cb.length && aOO.aPD(cb[0])
	}

	function aPH(cb) {
		var aV = new Image;
		aV.onload = aOc, aV.src = cb.target.result
	}

	function aOc(cb) {
		var cb = cb.target,
			canvas = document.createElement("canvas");
		canvas.width = cb.width, canvas.height = cb.height;
		canvas.getContext("2d").drawImage(cb, 0, 0);
		var cb = canvas.width,
			ae = canvas.height;
		cb > bh.a2N || ae > bh.a2N || cb < 10 || ae < 10 ? (cb = "Image dimensions must be between 10 and " + bh.a2N + ".", bE.n0 ? bE.n0.showToast(cb) : alert(cb)) : 20 === aM.fQ && aM.fR().aOc(canvas)
	}
	this.aJ = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aPB
	}, this.xv = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aOW = function() {
		input.click()
	}, this.aPD = function(aPE) {
		var a4 = aPE.name.split("."),
			a4 = a4[a4.length - 1].toLowerCase();
		"gif" !== a4 && "jpg" !== a4 && "jpeg" !== a4 && "png" !== a4 || ((a4 = new FileReader).onload = aPH, a4.readAsDataURL(aPE))
	}
}

function aHv() {
	var aPJ, aPK;
	this.aOv = 5, this.a3H = null;

	function a3B(a5) {
		return aPK[a5].pJ && aPJ[a5].a3B()
	}

	function aPP(dT) {
		aPK[dT].e6 = k.e6, aPK[dT].jn = !1
	}
	this.jP = 0, this.dh = 0, this.aJ = function() {
		this.a3H = new Array(this.aOv);
		this.a3H[0] = "territorial.io";
		var pE = g1.a2K(0);
		g1.hq(0);
		for (var a5 = 1; a5 < this.aOv; a5++) this.a3H[a5] = aPM.a1p() + ".territorial.io";
		for (g1.hq(pE), aPJ = new Array(this.aOv), aPK = new Array(this.aOv), a5 = this.aOv - 1; 0 <= a5; a5--) aPK[a5] = {
			pJ: !1,
			e6: 0,
			jn: !1
		};
		this.uz(0, 0)
	}, this.aPN = function(a5) {
		return aPJ[a5]
	}, this.c = function() {
		for (var a5 = this.aOv - 1; 0 <= a5; a5--) this.rZ(a5) && k.e6 > aPK[a5].e6 + 15e3 && g.v0.jm(a5, aPK[a5].jn);
		!this.rZ(0) && k.e6 > aPK[0].e6 + 8e3 && (aPK[0].e6 = k.e6, this.uz(0, 0))
	}, this.aI7 = function(id) {
		return this.uz(0, id) && this.a39(0)
	}, this.uz = function(dT, wP) {
		if (aPK[dT].pJ) {
			if (aPJ[dT].a3B()) return aPJ[dT].a3C(wP), aPJ[dT].rZ();
			aPJ[dT].aR()
		}
		return this.aPO(dT, wP), !1
	}, this.aPO = function(dT, wP) {
		aPK[dT].pJ = !0, aPP(dT), aPJ[dT] = new a32, aPJ[dT].aJ(dT, wP)
	}, this.a3C = function(dT, wP) {
		a3B(dT) && aPJ[dT].a3C(wP)
	}, this.a3I = function(dT, wP) {
		g.dZ.aPQ(dT)
	}, this.a39 = function(a5) {
		return this.rZ(a5) && aPJ[a5].a39()
	}, this.a3A = function(a5) {
		aPJ[a5].a3A()
	}, this.rZ = function(a5) {
		return aPK[a5].pJ && aPJ[a5].rZ()
	}, this.send = function(dT, di) {
		aPP(dT), aPJ[dT].send(di)
	}, __fx.customLobby.setSendFunction(this.send), this.aKM = function(dT) {
		8 === m.bS() && (aPK[dT].jn = !0, g.aHw.x3 = !0)
	}, this.close = function(dT, a3E) {
		a3B(dT) && aPJ[dT].close(a3E)
	}, this.gx = function(dT, a3E) {
		mi.aOz(a3E), a3B(dT) && aPJ[dT].close(a3E)
	}, this.aP0 = function(a3E) {
		for (var a5 = this.aOv - 1; 0 <= a5; a5--) this.close(a5, a3E)
	}, this.aPR = function(dT, a3E) {
		for (var a5 = this.aOv - 1; 0 <= a5; a5--) a5 !== dT && this.close(a5, a3E)
	}, this.iT = function() {
		this.close(this.jP, 3246)
	}, this.a3K = function(dT, cb) {
		aPJ[dT].aR(), mi.aPS(dT, cb.code)
	}
}

function rQ(a0b, type, aPT, aPU) {
	var cb;
	this.cb = document.createElement("input"), (cb = this.cb).type = type ? "number" : "text", cb.id = "input" + aM.h.aAv++, cb.value = a0b.value, cb.style.width = "100%", cb.style.userSelect = "none", cb.style.outline = "none", cb.style.resize =
		"none", cb.style.border = "inherit", cb.style.font = "inherit", cb.style.color = ao.ap, cb.style.backgroundColor = ao.a4S, cb.style.fontSize = "1em", cb.style.padding = "0.1em 0.2em", cb.addEventListener("focus", function() {
			f.yl++
		}), cb.addEventListener("blur", function() {
			f.yl--, -1 !== a0b.b4 && aP.aS.aT(a0b.b4, cb.value)
		}), cb.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== a0b.b4 && aP.aS.aT(a0b.b4, cb.value), aPT ? aPT() : cb.blur())
		}), aPU && cb.addEventListener("input", function(qm) {
			aPU(qm)
		})
}

function aPV() {
	var ae, canvas, c8, aPW, aPX, aPY, aPZ, cm, aPa, aPb, aPc, aPd, aCW = !1,
		m9 = (this.ci = !1, this.af = 0, new Array(2)),
		aPe = 0;

	function nH() {
		var af = bx.af,
			ei = (cm = !1, c7(c8, af, ae), Math.floor(af / 2));
		1 === aPW ? (c8.fillStyle = ao.a4g, c8.fillRect(ei, 0, ei, ae)) : -1 === aPW && (c8.fillStyle = ao.eo, c8.fillRect(0, 0, ei, ae)), cA(c8, af, ae, 2);
		var ei = (ei = Math.floor(.25 * ae)) < 2 ? 2 : ei,
			aCd = (c8.fillStyle = ao.a4W, Math.floor((ae - 4) * aPX[1] / aPY[1]));
		0 < aCd && c8.fillRect(2, ae - 2 - aCd, ei, aCd), 0 < (aCd = Math.floor((ae - 4) * aPX[0] / aPY[0])) && c8.fillRect(af - 2 - ei, ae - 2 - aCd, ei, aCd);
		ei = (ei = Math.floor(ae / 8)) < 2 ? 2 : ei, cC(c8, Math.floor(.4 * ae), 0, ae, ei, .5, !1), cC(c8, Math.floor(af - 1.4 * ae), 0, ae, ei, .5, !0), aCd = 1.1 * ae / m9[0].width;
		c8.imageSmoothingEnabled = !0, c8.setTransform(aCd, 0, 0, aCd, (af - aCd * m9[0].width) / 2, -.05 * ae), c8.drawImage(m9[+aCW], 0, 0), c8.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aPi() {
		aPd = -1, aCW = aPj.aPk(), bu.aCG(257), bu.aCV(aCW), bx.ci = !0, cm = !0, aPa = 360;
		for (var y, dO = 0, a5 = i8.j6 - 1; 0 <= a5; a5--) ar.d1.lp(i8.j5[a5]) || (dO += fz.lJ[i8.j5[a5]]);
		aCW ? aPY[0] = Math.max(z.a0(3 * dO, 4), 1) : bq.hU ? 9 === bq.fs && 8 === hv.vR[bs.vs()] ? aPY[0] = Math.max(dO, 1) : (y = z.a0(100 * bs.wJ(), bq.hS), y = z.ax(200 - 2 * y, 40, 100), y = z.a0(y * dO, 100), aPY[0] = Math.max(y, 1)) : aPY[0] =
			Math.max(z.a0(3 * dO, 5), 1), aPY[1] = Math.max(dO - aPY[0], 1)
	}

	function dC() {
		aPc = k.mF(), cm = !0, aPa = aPW = 0, aPZ = [], bx.ci = !1, bu.mK(247), aPX[0] = aPX[1] = 0, bu.aCG(673)
	}

	function bl() {
		return bw.d9(bu.aC8()) ? __fx.settings.keybindButtons ? bw.aZ - 2 * (ae + ab.gap) : bw.aZ - ae - ab.gap : bt.d9(bu.aCA()) ? bt.bl() - ae - ab.gap : f.ae - ae - ct.cu() * ab.gap
	}
	this.fZ = function() {
		for (var a5 = 0; a5 < 2; a5++) m9[a5] = ar.canvas.gV(gW.get(3), 8 - a5, ao.a5K), m9[a5] = ar.canvas.a9R(m9[a5])
	}, this.aJ = function() {
		aPc = -1e4, aPb = aPe = 0, aPd = -1, this.ci = !1, cm = aCW = !1, aPX = [aPW = aPa = 0, 0], aPY = [1, 1], aPZ = [], this.resize()
	}, this.resize = function() {
		ae = bw.ae, this.af = 4 * ae, (canvas = document.createElement("canvas")).width = this.af, canvas.height = ae, c8 = canvas.getContext("2d", {
			alpha: !0
		}), nH()
	}, this.bR = function() {
		cm && nH()
	}, this.ay = function(ag, aZ) {
		return !!this.ci && !(ag < f.af - this.af - ab.gap || aZ < bl() || (bq.cq || this.rA(bq.d3) && (c2.d8 && c2.nN(), gl.gm.rB(ag > f.af - ab.gap - this.af / 2 ? 1 : 0)), 0))
	}, this.c = function() {
		0 < aPb ? 0 === --aPb && dC() : this.ci ? 180 == --aPa && 3 * aPX[0] < aPY[0] ? dC() : aPX[0] >= aPY[0] ? aCW ? hl.aDS.aB3() : hl.aDS.aB6() : aPX[1] >= aPY[1] ? aPb = 4 : aPa <= 0 && dC() : ! function() {
			var aPm = k.mF();
			if (aPm % 40 == 14) {
				if (aPe) return !(aPm < aPe) && !(aPm < aPc + 535) && (aPe = aPm + 1071, ar.d1.vq()) ? (aPi(), 1) : 0;
				(1 === i8.j6 || (bq.hU ? bs.wJ() : fz.lJ[vo[0]]) >= z.a0(96 * bq.hS, 100)) && (aPe = aPm + 535)
			}
			return
		}() && 0 <= aPd && (bu.x1(250, L(363, [fz.fy[aPd]]), 673, aPd, ao.ap, ao.c9, -1, !0), aPi())
	}, this.aB7 = function() {
		this.ci && aPX[0] < aPY[0] && dC()
	}, this.sI = function(player, aPn) {
		var aPo = L(aPn ? 364 : 365, [fz.fy[player]]),
			aPo = (bu.x1(450, aPo, 257, player, aPn ? ao.u3 : ao.a4q, ao.c9, -1, !0), aPZ.push(player), cm = !0, bq.hR ? Math.max(aPY[0], aPY[1]) : fz.lJ[player]),
			aPo = Math.max(aPo, 1);
		aPn ? aPX[0] += aPo : aPX[1] += aPo, player === bq.d3 && (aPW = aPn ? 1 : -1)
	}, this.n = function() {
		var aZ;
		this.ci && (aZ = bl(), ah.drawImage(canvas, f.af - this.af - ab.gap, aZ))
	}, this.rC = function(player) {
		return !(!bq.hR && k.mF() < aPc + 140 || 0 !== aPa || !ar.d1.r0(1) || !ar.d1.q6(player) || 10 <= lv[player] && !ar.d1.wD(player, 9))
	}, this.rA = function(cE) {
		if (!ar.d1.r0(1)) return !1;
		if (!ar.d1.q6(cE)) return !1;
		if (!this.ci) return !1;
		for (var a5 = aPZ.length - 1; 0 <= a5; a5--)
			if (aPZ[a5] === cE) return !1;
		return !0
	}, this.r9 = function(player) {
		aPd = player
	}
}

function wc() {
	var yM, z2, kI;

	function aPr() {
		var gi;
		1 === bq.data.gameMode ? (bq.data.teamPlayerCount || (bq.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), bq.hh.hn()), gi = ar.t4.a2f(bq.data.teamPlayerCount, 0), bq.data.numberTeams = gi) : (2 === bq.data
			.botDifficultyType && (bq.data.botDifficultyType = 0), 1 === bq.data.spawningType && (bq.data.spawningType = 0))
	}

	function z4() {
		1 !== bq.data.gameMode && (bq.data.teamPlayerCount = null), aPt(), bq.data.canvas = null, aM.iZ(5, 5)
	}

	function aPt() {
		iA.iQ.aJ(), aP.aS.aT(156, iA.iS.dq())
	}

	function aPp() {
		bq.data.isReplay = 0, aPt(), bq.hh.a2j(), m.v4(), bq.hh.a2g(), bq.data.canvas = 2 === bq.data.mapType ? bh.bi : null, bq.hk(), bq.hj = 1
	}

	function aQ7() {
		aPr();
		for (var a4 = [aPw(), aPx(), aPy()], a5 = 3; a5 < 6; a5++) z2.ya.removeChild(z2.a9X[a5].dx), z2.a9X[a5] = a4[a5 - 3], z2.ya.appendChild(z2.a9X[a5].dx);
		z2.resize()
	}

	function aPw() {
		var aQ8, rM = new rN;
		return rM.rO(L(145)), aQ8 = 0 === bq.data.gameMode ? [L(58), L(50)][bq.data.colorsType] : bq.data.numberTeams + " Team" + (1 === bq.data.numberTeams ? "" : "s"), rM.a9j(aQ8), rM.rR(new rY([new aL(L(368), function() {
			aM.iZ(21)
		}).button])), rM
	}

	function aPx() {
		var rM = new rN,
			a4 = (rM.rO(L(181)), [L(49) + ": " + g6.a4B[bq.data.botDifficultyValue], L(370), L(371), L(50)]);
		return rM.a9j(a4[bq.data.botDifficultyType]), rM.rR(new rY([new aL(L(368), function() {
			aM.iZ(25)
		}).button])), rM
	}

	function aPy() {
		var rM = new rN,
			a4 = (rM.rO("Spawning"), [L(58), L(59), L(50)]);
		return rM.a9j(a4[bq.data.spawningType]), rM.rR(new rY([new aL(L(368), function() {
			aM.iZ(24)
		}).button])), rM
	}
	this.show = function() {
		yM.show(), this.resize(), yM.cQ.scrollTop = aM.h.aAw[0]
	}, this.aR = function() {
		aM.h.aAw[0] = yM.cQ.scrollTop, yM.aR()
	}, this.resize = function() {
		yM.resize(), z2.resize()
	}, this.b6 = function(aV) {
		2 === aV && yM.b7[0].b8()
	}, yM = new aK("🔧 " + L(366), [new aL("⬅️ " + L(1), z4), new aL(L(367), aPp)]), aPr(), bq.data.canvas || (2 === bq.data.mapType ? bq.data.canvas = bh.bi : 1 === bq.data.mapType ? bq.data.canvas = bh.aOb(bh.a2h(bq.data), 0).bi : (bq.data
		.mapType = 0, bq.data.passableWater = bq.data.passableMountains = 1, bq.data.canvas = bh.aOb(bh.a2h(bq.data), bq.data.mapSeed).bi)), z2 = new rJ(yM.cQ, (function(kI) {
		var rM = new rN,
			m9 = (rM.rO(L(353)), bq.data.canvas);
		m9.style.width = "100%", rM.rR({
			cb: m9
		}), rM.rR(new rY([new aL(L(368), function() {
			aM.iZ(20)
		}).button])), kI.push(rM)
	}(kI = []), function(kI) {
		var rM = new rN;
		rM.rO(L(147)), rM.rR(new rQ({
			b4: -1,
			value: bq.data.playerCount
		}, 1, 0, function(cb) {
			var playerCount = z.ax(Math.floor(cb.target.value), 1, 512);
			cb.target.value = bq.data.playerCount = playerCount, 1 === bq.data.gameMode && (cb = ar.t4.a2f(bq.data.teamPlayerCount, 0), bq.hh.hn(), ar.t4.a2f(bq.data.teamPlayerCount, 0) !== cb) && aQ7()
		})), kI.push(rM)
	}(kI), function(kI) {
		var rM = new rN;
		rM.rO(L(369)), rM.zB(new zC({
			xx: ["Battle Royale", "Teams"],
			value: bq.data.gameMode
		}, function(b4) {
			bq.data.gameMode !== b4 && (bq.data.gameMode = b4, aQ7())
		})), kI.push(rM)
	}(kI), kI.push(aPw()), kI.push(aPx()), kI.push(aPy()), function(kI) {
		var rM = new rN,
			a4 = (rM.rO(L(232)), [L(233), L(234), L(50)]);
		rM.a9j(a4[bq.data.playerNamesType]), rM.rR(new rY([new aL(L(368), function() {
			aM.iZ(23)
		}).button])), kI.push(rM)
	}(kI), function(kI) {
		var rM = new rN,
			a4 = (rM.rO(L(341)), [L(48), L(49) + ": " + bq.data.aIncomeValue, L(50)]);
		rM.a9j(a4[bq.data.aIncomeType]), rM.rR(new rY([new aL(L(368), function() {
			aM.iZ(22)
		}).button])), kI.push(rM)
	}(kI), function(kI) {
		var rM = new rN,
			a4 = (rM.rO(L(46)), [L(48), L(49) + ": " + bq.data.tIncomeValue, L(50)]);
		rM.a9j(a4[bq.data.tIncomeType]), rM.rR(new rY([new aL(L(368), function() {
			aM.iZ(26)
		}).button])), kI.push(rM)
	}(kI), function(kI) {
		var rM = new rN,
			a4 = (rM.rO(L(372)), [L(48), L(49) + ": " + bq.data.iIncomeValue, L(50)]);
		rM.a9j(a4[bq.data.iIncomeType]), rM.rR(new rY([new aL(L(368), function() {
			aM.iZ(27)
		}).button])), kI.push(rM)
	}(kI), function(kI) {
		var rM = new rN,
			a4 = (rM.rO(L(373)), [L(48), L(49) + ": " + bq.data.sResourcesValue, L(50)]);
		rM.a9j(a4[bq.data.sResourcesType]), rM.rR(new rY([new aL(L(368), function() {
			aM.iZ(28)
		}).button])), kI.push(rM)
	}(kI), function(kI) {
		var rM = new rN;
		rM.rO(L(374)), rM.rR(new rY([new aL(L(375), function() {
			aM.mo(), bq.hh.a2k(), aM.h.aAw[0] = 0, aM.iZ(19)
		}).button])), rM.rR(new rY([new aL(L(376), function() {
			aQ9.aQA()
		}).button])), rM.rR(new rY([new aL(L(377), function() {
			return aQ9.aQB(), !0
		}).button])), kI.push(rM)
	}(kI), kI))
}

function aI0() {
	this.jj = function() {
		for (var a3 = bq.fx, jX = hl.result.jX, ei = jX.length, x0 = (dU.dV(17 + 16 * a3 + 33 * ei), dU.dW(1, 1), dU.dW(4, 12), dU.dW(10, ei), dU.dW(1, +(2 === bq.hc)), dU.dW(1, bq.he % 2), fz.x0), a5 = 0; a5 < a3; a5++) dU.dW(16, x0[a5]);
		for (var lJ = fz.lJ, a5 = 0; a5 < ei; a5++) {
			var cE = jX[a5];
			dU.dW(9, cE), dU.dW(24, lJ[cE])
		}
		g.h.send(g.h.jP, dU.di)
	}
}

function aQC() {
	this.aQD = "https://", this.aQE = this.aQD + "territorial.io/", this.aQF = this.aQE + "changelog", this.aQG = this.aQE + "terms", this.aQH = this.aQE + "cookie_policy", this.aB1 = this.aQE + "privacy", this.aQI = this.aQE + "tutorial", this.aQJ =
		this.aQE + "players", this.aQK = this.aQE + "clans", this.aOE = this.aQE + "clan-results", this.aLJ = "https://patreon.com/c/territorial", this.nk = this.aQD + "play.google.com/store/apps/details?id=territorial.io", this.nl = this.aQD +
		"apps.apple.com/app/id1581110913", this.aQL = this.aQD + "www.youtube.com/watch?v=toZTQ8aRdFc", this.nm = this.aQD + "discord.gg/pthqvpTXmh", this.nn = this.aQD + "www.instagram.com/davidtschacher/", this.gY =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function aQM() {
	var aQN = 0,
		aQO = 0,
		aQP = 300,
		aQQ = 300,
		aQR = 0;
	this.iw = 0, this.aQ = new Uint32Array(512), this.aJ = function() {
		aQO = aQN = 0, this.iw = 0, aQR = 0
	}, this.c = function() {
		if (function() {
				var a3 = i3.iv.iw;
				if (0 === a3) return 1;
				var aQ = i3.iv.aQ;
				if (k.mF() % 35 == 6) {
					for (var a5 = a3 - 1; 0 <= a5; a5--) hy.j1(aQ[a5] << 2) || (a3--, aQ[a5] = aQ[a3]);
					i3.iv.iw = a3
				}
				return a3 < aQ.length
			}())
			if (aQP <= aQN) {
				var aQV = i3.iv.iw;
				if (aQV) {
					if (k.mF() % 350 != 1) return;
					if (aQR !== aQV) return void(aQR = aQV);
					if (!ar.d1.lp(vo[0])) return
				} else if (k.mF() % 12 != 8) return;
				ar.d1.vn() || i3.iv.aJ()
			} else {
				var a5, af = bh.ma,
					aQW = af - 2,
					aQV = aQW * (bh.oi - 2),
					aQX = aQP,
					aQ = i3.iv.aQ,
					ei = i3.iv.iw,
					aQY = aQ.length,
					j7 = Math.min(aQO + aQX * ((1 + 19 * i3.performance.a83) * aQQ), aQV);
				for (a5 = aQO; a5 < j7; a5 += aQX) {
					var gr = 4 * (a5 % aQW + (z.a0(a5, aQW) + 1) * af + 1);
					if (hy.j1(gr) && (aQ[ei] = gr >> 2, ++ei === aQY)) {
						a5 += aQX;
						break
					}
				}(aQO = a5) >= aQV && (aQO = ++aQN), i3.iv.iw = ei
			}
	}
}

function hx() {
	(bn = void 0 === bn ? document.createElement("canvas") : bn).width = bh.ma, bn.height = bh.oi, iB = bn.getContext("2d", {
		alpha: !0
	}), iC = a3r = null, iC = iB.getImageData(0, 0, bh.ma, bh.oi), a3r = iC.data, ar.t4.aLX(a3r)
}

function aQZ() {
	this.c = function(player) {
		var s2;
		return !!bq.data.passableWater && 0 !== fz.oH[player].length && bo.h.s0 !== bo.h.s1 && !((s2 = bo.h.s2[player]) >= Math.max(3 * i3.performance.a83, g6.s1[g6.g5[player]]) || s2 === bo.h.s3 || !ar.d1.rl(player, g6.a4D[g6.g5[player]], 32,
			0) || !i3.aQa.c(player) && !i3.aQb.c(player) || ! function(vw) {
				var a8F = j9.qJ[1] + i2.o0[j9.qJ[2] - 1] << 2;
				if (hy.j1(a8F)) return 1;
				return a8F = hy.oN(a8F), vw !== a8F && !!jA(vw, a8F)
			}(player)) && function(player) {
			return ar.d1.ru(player), bo.h.s9(player), !0
		}(player)
	}
}

function aQe() {
	function aQh() {
		return {
			ma: bh.ma,
			oi: bh.oi,
			bi: bh.bi,
			tm: bh.tm,
			aDm: bh.aDm,
			a63: bh.a63,
			ig: bh.ig,
			mapSeed: bh.mapSeed,
			aEA: bh.aEA
		}
	}

	function aQg(a5) {
		return 1 !== a5 && bh.v6(a5) && a5 !== bh.aQj()
	}
	this.pB = 22, this.a2N = 4096, this.ma = 0, this.oi = 0, this.bi = null, this.tm = null, this.aDm = null, this.a63 = null, this.ig = 0, this.mapSeed = 0, this.aEA = !1, this.aDi = new aDW, this.a7J = new oz, this.aCg = new aFT, this.aJ =
		function() {
			this.a7J.aJ()
		}, this.dV = function(map, aQf) {
			((map %= this.pB) !== this.ig || aQg(this.ig) && aQf !== this.mapSeed) && (this.aEA = !1, this.aDi.aDf(), g1.hq(map), this.ig = map, this.mapSeed = aQf, aQg(map) && (bh.a7J.p0[map].pE = aQf), this.v6(this.ig) ? (map = bh.a7J.p0[this.ig],
				this.ma = map.af, this.oi = map.ae, g1.hq(map.pE), yD.dV([this.ma, this.oi, map.pC, map.pD]), xw(), hz.aN2(), yD.aDg()) : ie())
		}, this.aOb = function(map, aQf) {
			var wB = aQh(),
				map = (this.dV(map, aQf), this.aDi.aDf(), aQh());
			return aQf = wB, bh.ma = aQf.ma, bh.oi = aQf.oi, bh.bi = aQf.bi, bh.tm = aQf.tm, bh.aDm = aQf.aDm, bh.a63 = aQf.a63, bh.ig = aQf.ig, bh.mapSeed = aQf.mapSeed, bh.aEA = aQf.aEA, map
		}, this.a2i = function(canvas) {
			canvas && this.bi !== canvas && (this.ma = canvas.width, this.oi = canvas.height, this.bi = canvas, this.tm = this.bi.getContext("2d", {
				alpha: !1
			}), this.vU = this.tm.getImageData(0, 0, this.ma, this.oi), this.a63 = this.vU.data, this.ig = this.aQj(), this.mapSeed = 0, bh.a7J.p0[this.ig].name = bq.data.mapName)
		}, this.ij = function(a5) {
			return 3 === a5 || 7 === a5 || 9 === a5 || 21 === a5 || a5 === this.aQj()
		}, this.a64 = function(a5) {
			return 2 === a5 || 7 === a5 || 9 === a5 || 20 === a5
		}, this.aN5 = function(a5) {
			return 1 === a5
		}, this.aQj = function() {
			return this.pB
		}, this.v6 = function(a5) {
			return void 0 === this.a7J.p0[a5].pH
		}, this.a2h = function(qm) {
			return 0 === qm.mapType ? qm.mapProceduralIndex < 10 ? qm.mapProceduralIndex : 10 + qm.mapProceduralIndex : 1 === qm.mapType ? qm.mapRealisticIndex + 10 : void 0
		}, this.v7 = function(qm, aQk) {
			0 === qm.mapType ? qm.mapProceduralIndex = aQk < 10 ? aQk : aQk - 10 : 1 === qm.mapType && (qm.mapRealisticIndex = aQk - 10)
		}
}

function aQl() {
	var aQm = 501,
		aQn = (this.aJL = new Uint32Array(aQm), this.nw = new Uint32Array(aQm), this.nv = new Uint16Array(aQm), this.aJH = 0, 1),
		aQo = 0;

	function aQp(self) {
		self.max.fill(0)
	}

	function aQr(self, a5) {
		self.max[0] = Math.max(self.aJL[a5], self.max[0]), self.max[1] = Math.max(self.nw[a5], self.max[1]), self.max[2] = Math.max(self.nv[a5], self.max[2])
	}
	this.max = [0, 0, 0], this.aJU = 0, this.a2D = new Array(21), this.aJQ = null, this.fZ = function() {
		this.aJQ = [L(378), L(379), L(380), L(381), L(382), L(383), L(384), L(385), L(46), L(372), L(386), L(387), L(388), L(389), "", L(390), L(391), L(392), L(341), L(393), L(394)]
	}, this.aJ = function() {
		this.aJH = 0, aQn = 1, this.aJU = 0, aQo = 0, aQp(this), this.a2D.fill(0)
	}, this.rv = function(player, cj) {
		ar.d1.vt(player) && (this.a2D[0] += cj + 1, this.a2D[1]++, this.a2D[12] += j9.sE[1])
	}, this.a0s = function(player, jw) {
		__fx.donationsTracker.logDonation(player, jw, j9.sE[0]);
		player === bq.d3 && (bu.a0s(j9.sE[0], j9.sE[1], jw), this.a2D[12] += j9.sE[1], this.a2D[16] += j9.sE[0]), jw === bq.d3 && (bu.aCb(j9.sE[0], player), this.a2D[10] += j9.sE[0])
	}, this.s6 = function(player) {
		ar.d1.vt(player) && (this.a2D[2]++, this.a2D[12] += j9.sE[1])
	}, this.sP = function(player) {
		ar.d1.vt(player) && (this.a2D[19]++, this.a2D[12] += j9.sE[1])
	}, this.a8G = function(player) {
		ar.d1.vt(player) && this.a2D[20]++
	}, this.sD = function(player, ck, b4) {
		ar.d1.vt(player) && (this.a2D[b4] += ck)
	}, this.c = function() {
		var self;
		this.aJU || 0 < aQo-- || ((self = this).aJL[self.aJH] = fz.lJ[bq.d3], self.nw[self.aJH] = fz.lQ[bq.d3], self.nv[self.aJH] = hr.nx(bq.d3), aQr(self, self.aJH), self.aJH++, self.aJH === aQm && function(self) {
			aQp(self), aQr(self, 0), self.aJH = 1 + z.a0(aQm, 2);
			for (var a5 = 1; a5 < self.aJH; a5++) self.aJL[a5] = self.aJL[2 * a5], self.nw[a5] = self.nw[2 * a5], self.nv[a5] = self.nv[2 * a5], aQr(self, a5);
			aQn *= 2
		}(self), aQo = aQn - 1, c5.nH(), 0 === fz.iN[bq.d3] && (self.aJU = k.mF()))
	}
}

function rY(aQt) {
	var dx = document.createElement("div");
	this.cb = dx, this.aQu = aQt, this.resize = function() {
		for (var a3 = aQt.length, a5 = 1; a5 < a3; a5++) ar.at.cd(aQt[a5], 4)
	};
	var a5, a3 = aQt.length;
	for (dx.style.width = "100%", dx.style.height = "2.7em", dx.style.marginTop = "0.6em", dx.style.border = "inherit", a5 = 0; a5 < a3; a5++) aQt[a5].style.verticalAlign = "top", aQt[a5].style.width = (100 / a3).toFixed(2) + "%", aQt[a5].style
		.height = "100%", aQt[a5].style.fontSize = "0.75em", dx.appendChild(aQt[a5])
}

function aI3() {
	function aQw() {
		var id = gv.gz(3);
		return 0 === id ? {
			id: id,
			dr: gv.gz(30),
			ml: qd.xh.aQx(h0.dp.h1(7))
		} : 1 === id ? {
			id: id,
			dr: gv.gz(30),
			a9K: gv.gz(3),
			value: gv.gz(30),
			target: gv.gz(30)
		} : 2 === id ? {
			id: id,
			dr: gv.gz(30),
			a9K: gv.gz(3)
		} : 3 === id ? {
			id: id,
			dr: gv.gz(30),
			a9K: gv.gz(3),
			value: gv.gz(4),
			target: gv.gz(30)
		} : 4 === id ? {
			id: id,
			dr: gv.gz(30),
			a9K: gv.gz(3),
			target: gv.gz(30)
		} : 5 === id ? {
			id: id,
			a9K: gv.gz(6)
		} : 6 === id ? {
			id: id,
			value: gv.gz(17)
		} : null
	}
	this.uf = function(dT) {
		if (dT !== g.h.dh) g.h.close(dT, 3239);
		else if (6 !== m.bS()) g.h.close(dT, 3271);
		else {
			qd.aJ();
			for (var a5 = 0; a5 < 4; a5++) {
				var aAE = qd.h.aA2[a5],
					playerCount = (aAE.jJ = gv.gz(10), aAE.ig = gv.gz(6), aAE.mapSeed = gv.gz(14), aAE.jK = gv.gz(4), aAE.jL = gv.gz(6), aAE.jM = gv.gz(4), aAE.jN = gv.gz(1), aAE.jO = gv.gz(12), aAE.spawningSeed = gv.gz(14), gv.gz(16));
				qd.qi.qk[a5] = gv.gz(16);
				for (var fp = 0; fp < playerCount; fp++) qd.qi.aDV(a5, gv.gz(30), h0.dp.h1(5), gv.gz(4), gv.gz(30), gv.gz(7), gv.gz(16), gv.gz(18), gv.gz(11), gv.gz(12))
			}
			aM.iZ(29), qd.h.aA5(!0)
		}
	}, this.uo = function(dT) {
		if (dT !== g.h.dh) g.h.close(dT, 3239);
		else if (qd.xk) {
			qd.h.aA4[0] = gv.gz(20), qd.h.aA4[1] = gv.gz(20);
			for (var aQv = gv.gz(16), fp = 0; fp < aQv; fp++) {
				var id = gv.gz(3);
				0 === id ? qd.qi.aDV(gv.gz(2), gv.gz(30), h0.dp.h1(5), 0, 1234566, 127, 0, gv.gz(18), 0, gv.gz(12)) : 1 === id ? qd.qi.aHF(gv.gz(16), gv.gz(2)) : 2 === id ? qd.qi.aHB(gv.gz(16), gv.gz(2), gv.gz(2)) : 3 === id ? qd.qi.aHE(gv.gz(
					16), gv.gz(2)) : 4 === id ? qd.qi.aH7(gv.gz(16), gv.gz(2), gv.gz(4), gv.gz(30), gv.gz(7), gv.gz(16), gv.gz(11)) : 5 === id && qd.qi.aH8(gv.gz(16), gv.gz(2), gv.gz(1))
			}
			for (var a5 = 0; a5 < 4; a5++) {
				var aAE = qd.h.aA2[a5];
				if (aAE.jJ = gv.gz(10), 0 === aAE.jJ) {
					if (aAE.jP = gv.gz(10), aAE.jQ = gv.gz(10), qd.xi.aBK(a5)) return;
					aAE.ig = gv.gz(6), aAE.mapSeed = gv.gz(14), aAE.jK = gv.gz(4), aAE.jL = gv.gz(6), aAE.jM = gv.gz(4), aAE.jN = gv.gz(1), aAE.jO = gv.gz(12), aAE.spawningSeed = gv.gz(14), aAE.jU.push(aAE.jU[0]), aAE.jU.shift()
				}
			}
			qd.h.aA7()
		} else g.h.close(dT, 3251)
	}, this.up = function(dT) {
		if (dT !== g.h.dh) g.h.close(dT, 3272);
		else if (qd.xk) {
			for (var aAG = gv.gz(4), aAE = qd.h.aA2[aAG], jR = aAE.jR, a8m = (aAE.jS = gv.gz(20), gv.gz(6)), a5 = 0; a5 < a8m; a5++) {
				var a9J = aQw();
				qd.gX.a9I(a9J), jR.push(a9J)
			}
			qd.h.aAF(aAG)
		} else g.h.close(dT, 3273)
	}, this.uq = function(dT) {
		dT !== g.h.dh ? g.h.close(dT, 3276) : qd.xk ? qd.message.aML(aQw()) : g.h.close(dT, 3277)
	}
}

function wR() {
	var aC, a7R, a7S, cJ;

	function aQy(id) {
		0 !== bE.id || aP.aQ.data[140].value ? 0 === id ? aM.iZ(8, 1, new kW(16)) : aM.iZ(2) : aM.h.aB0(aM.fQ, 0 === id ? 16 : 0)
	}
	this.show = function() {
		bE.bF.setState(12), aC.show(), this.resize(), this.c()
	}, this.aR = function() {
		aC.aR()
	}, this.resize = function() {
		aC.resize(), a7R.resize()
	}, this.c = function() {
		8 === m.bS() && (2 <= hw.aJH ? a7S[2].aM4 === ao.a4a && a7S[2].e0(0) : a7S[2].aM4 !== ao.a4a && a7S[2].e0(ao.a4a), !bq.cq && c2.sK(bq.d3) ? a7S[1].aM4 === ao.a4a && a7S[1].e0(0) : a7S[1].aM4 !== ao.a4a && a7S[1].e0(ao.a4a), !bq.cq && bx
			.rC(bq.d3) ? a7S[0].aM4 === ao.a4a && a7S[0].e0(0) : a7S[0].aM4 !== ao.a4a && a7S[0].e0(ao.a4a))
	}, this.b6 = function(aV) {
		2 === aV && aC.b7[0].b8()
	}, a7S = [new aL(L(395), function() {
		aQy(0)
	}), new aL(L(92), function() {
		aM.iZ(16)
	}), new aL(L(396), function() {
		aM.iZ(17)
	}), new aL(L(397), function() {
		aM.h.aAx()
	}, 0, 0, 1), new aL(L(40), function() {
		aM.iZ(3, 1)
	}), new aL(L(30), function() {
		aM.iZ(18)
	}), new aL(L(398), function() {
		aQy(1)
	}), new aL(L(399), function() {
		var kK = ["Patreon", L(408), L(409), "YouTube Tutorial", "Discord", L(410), L(85), L(411), L(88), L(412), "Terms", "Privacy"],
			aR3 = [gZ.aLJ, gZ.nk, gZ.nl, "https://www.youtube.com/watch?v=6QBmA9N1668", gZ.nm, gZ.aQF, gZ.aQK, gZ.aOE, gZ.aQJ, gZ.aQI, gZ.aQG, gZ.aB1];
		1 === bE.id ? (kK.splice(2, 1), kK.splice(0, 1), aR3.splice(2, 1), aR3.splice(0, 1)) : 2 === bE.id && (kK.splice(1, 1), kK.splice(0, 1), aR3.splice(1, 1), aR3.splice(0, 1)), aM.iZ(4, 1, new mn(L(399), ar.at.aR4(kK, aR3), !1, [
			new aL("⬅️ " + L(1), function() {
				aM.iZ(1)
			})
		]))
	}), new aL(L(400), function() {
		aM.iZ(4, 1, new mn(L(400), dX.my + "<br><a href='" + gZ.aQF + "' target='_blank'>" + gZ.aQF + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new aL("⬅️ " + L(1), function() {
				aM.iZ(1)
			})]))
	}), new aL(L(401), function() {
		aM.iZ(4, 1, new mn(L(401), L(413) + "<br>" + L(414), !1, [new aL("⬅️ " + L(1), function() {
			aM.iZ(1)
		}), new aL(L(415), function() {
			bE.bF.aOF(), aM.iZ(1)
		})]))
	}), new aL(L(402), function() {
		bE.bF.aOI(), aM.iZ(4, 1, new mn(L(416), L(417) + " <a href='" + gZ.aB1 + "' target='_blank'>" + gZ.aB1 + "</a>", !1, [new aL("⬅️ " + L(1), function() {
			aM.iZ(1)
		})]))
	})], cJ = [new aL("⬅️ " + L(1), function() {
		aM.h.aN()
	})], 8 === m.bS() && (a7S.unshift(new aL(L(62), function() {
		aM.iZ(30)
	})), a7S.unshift(new aL(L(405), function() {
		2 <= hw.aJH && (aM.mo(), c5.nN(), k.l = !0)
	}, 0, 1)), a7S.unshift(new aL(L(406), function() {
		!bq.cq && c2.sK(bq.d3) && (gl.gm.sJ(), aM.mo(), c2.d8) && c2.nN()
	}, 0, 1)), a7S.unshift(new aL(L(407), function() {
		!bq.cq && bx.rC(bq.d3) && (i4.px(2), gl.gm.r9(), aM.mo(), c2.d8) && c2.nN()
	}, 0, 1))), 1 === bE.id && 5 <= bE.my && a7S.push(new aL(L(403), function() {
		bE.bF.aOJ()
	})), aC = new aK(L(404), cJ), a7R = new a7U(a7S, aC.cQ)
}

function aI2() {
	this.aIB = function(gy, sT, sU) {
		dU.dV(75), dU.dW(1, 0), dU.dW(6, 21), dU.dW(6, gy), dU.dW(1, +(sT < 0)), dU.dW(1, +(sU < 0)), dU.dW(30, Math.abs(sT)), dU.dW(30, Math.abs(sU)), g.h.send(0, dU.di)
	}, this.aIC = function(gy, a7f, a7g) {
		dU.dV(18 + 16 * a7f.length + 30), dU.dW(1, 0), dU.dW(6, 22), dU.dW(6, gy), g.dZ.da(a7f), dU.dW(30, a7g), g.h.send(0, dU.di)
	}, this.aIF = function(gy, a7f, a7g) {
		dU.dV(73), dU.dW(1, 0), dU.dW(6, 28), dU.dW(6, gy), h0.kY.tP(a7f, 5), dU.dW(30, a7g), g.h.send(0, dU.di)
	}, this.aID = function(aAy, aAz) {
		for (var a3 = aAz.length, h4 = 0, a5 = 0; a5 < a3; a5++) h4 += aAz[a5].length;
		for (dU.dV(21 + 3 * a3 + 16 * h4), dU.dW(1, 0), dU.dW(6, 23), dU.dW(3, aAy), dU.dW(4, a3), dU.dW(7, h4), a5 = 0; a5 < a3; a5++) dU.dW(3, aAz[a5].length), dn.h6.tM(aAz[a5]);
		g.h.send(0, dU.di)
	}, this.aIE = function(aAy, sT, sU) {
		dU.dV(52), dU.dW(1, 0), dU.dW(6, 24), dU.dW(3, aAy), dU.dW(1, +(sT < 0)), dU.dW(1, +(sU < 0)), dU.dW(20, Math.abs(sT)), dU.dW(20, Math.abs(sU)), g.h.send(0, dU.di)
	}
}

function a6H() {
	var aR5;
	this.aJ = function() {
		aR5 = !1
	}, this.c = function() {
		var cE;
		if (function() {
				if (!aR5) {
					if (k.mF() % 30 != 9) return;
					if (!ar.d1.wH(90)) return;
					aR5 = !0
				}
				return 1
			}() && (! function() {
				var qm = bu.aCZ(956);
				if (qm) {
					if (ar.d1.vu(qm.player)) return 1;
					bu.qC(956, 0)
				}
				return
			}() && (-1 === (cE = (bq.hU ? function() {
				var id = bs.vs(),
					a3 = i8.j6;
				if (hv.vR[id])
					for (var e8 = i8.j5, va = hv.va, a5 = 0; a5 < a3; a5++) {
						var cE = e8[a5];
						if (va[cE] !== id) return cE
					} else if (1 < a3) return vo[a3 - 1];
				return -1
			} : function() {
				for (var aBI = i8.j6, aBH = i8.j5, aRD = lv, a5 = 0; a5 < aBI; a5++) {
					var cE = aBH[a5];
					if (0 !== aRD[cE]) return cE
				}
				return -1
			})()) ? ! function() {
				var qm = bu.aCZ(957);
				if (qm && qm.aC6) {
					if (hy.j1(qm.aC6.js << 2)) return 1;
					bu.qC(957, 0)
				}
				return
			}() : (bu.x1(0, L(418, [fz.fy[cE]]), 956, cE, ao.ap, ao.c9, -1, !0), 0)))) {
			var a3 = i3.iv.iw;
			if (0 !== a3)
				for (var aQ = i3.iv.aQ, a5 = 0; a5 < a3; a5++) {
					var js = aQ[a5];
					if (hy.j1(js << 2)) return void bu.x1(0, L(419, [i2.o6(js), i2.o8(js)]), 957, 0, ao.ap, ao.c9, -1, !0, void 0, {
						fp: 1,
						js: js
					})
				}
		}
	}
}

function aRE() {
	this.jq = 1098, this.mh = 2088, this.rVersion = 9, this.a3G = 0, this.aJ = function() {
		this.hp = 2;
		var dO = z.a0(this.mh, 10) % 100;
		this.my = "3 Jul 2025 [" + z.a0(this.mh, 1e3) + "." + (dO < 10 ? "0" : "") + dO + "." + this.mh % 10 + "]", this.mv = true, this.mw = function() {
			try {
				return window.self !== window.top
			} catch (cb) {
				return !0
			}
		}(), this.dY = (new Date).getTime() % 1024
	}, this.mg = 0
}

function n7(ld) {
	dX && !ld || (aRH(), z = new aRI, gZ = new aQC, ar = new uM, ao = new a4Q, bq = new hF, df = new sq, dn = new nd, h0 = new aOd, g6 = new a45, iD = new a8J, iE = new aIS, iL = new a0t, i6 = new aNF, i7 = new aLL, aPM = new a1Z, c3 = new pW, c2 =
		new aLl, bu = new aBp, d = new fa, c1 = new tj, bz = new a78, bw = new cg, bj = new aRJ, bT = new eK, c0 = new aRK, bv = new aG7, by = new aRL, c4 = new aRM, bW = new b9, e = new aOe, m = new aE8, gW = new f1, hy = new a3M, aBJ = new aRN,
		i8 = new aBD, qF = new aJx, iG = new a1r, hr = new aRO, aPj = new aRP, bp = new kf, fz = new a9c, hs = new fj, hm = new a0g, fW = new rh, hz = new aN0, yD = new aRQ, pU = new pI, g = new aHu, g1 = new a2I, i3 = new aRR, be = new a5x,
		aKO = new aRS, c6 = new aRT, f = new yg, bx = new aPV, i = new aDt, iJ = new a9p, aCi = new aKt, aDU = new aMC, iH = new ns, iI = new e2, aOO = new aPA, gl = new aCk, iA = new aRU, bt = new nA, dU = new mu, dm = new aRV, gv = new aCn,
		aIa = new aIX, n8 = new aJz, i2 = new nz, bo = new aRW, j9 = new aFJ, bm = new bY, sL = new aDP, hl = new aRX, bh = new aQe, aKR = new qv, aM = new wK, iW = new a9l, bE = new mx, dX = new aRE, jg = new eF, aP = new aEn, hv = new aCt, bs =
		new aBX, a1P = new vb, i1 = new aP7, i4 = new a6C, yt = new a2l, hw = new aQl, c5 = new aJ5, k = new aHJ, ct = new aRY, ab = new a9U, mi = new aRZ, s7 = new aRa, aQ9 = new aRb, qd = new xd, xu = new aRc, iU = new aRd, dX.aJ(), bE.aJ(), f
		.fZ(), aP.aJ(), df.aJ(), df.sz(), (a6I = new a9u).aJ(), ar.aJ(), i4.aJ(), g.aJ(), dn.aJ(), h0.aJ(), bh.aJ(), aM.aJ(), fU = new ng, f.aJ(), bE.bF.aOL(), k.aJ(), ab.aJ(), yt.aJ(), aEC = new aMm, g1.aJ(), hr.aRf(), iW.aJ(), hz.aJ(), m.aJ(),
		bT.aJ(), hs.aJ(), n8.aJ(), gW.aJ(), k.l = !0, setTimeout(function() {
			bh.dV(2, 14071)
		}, 0), aM.iZ(5, 5), aIa.aBK() || bE.bF.aOM(), f.yq(), dX.mg = 1)
}

function aRZ() {
	function aRg(cb) {
		aAK(cb), aM.iZ(4, 5, new mn("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new aL("⬅️ " + L(1), function() {
				aM.rI()
			}), new aL("🔄 Reload", function() {
				bE.bF.mq()
			}, ao.a4j)]))
	}

	function aRk(cb) {
		aAK(cb), aM.iZ(4, 5, new mn(L(420), aRj(cb), !0))
	}

	function aRj(cb) {
		var a2 = " [" + cb + "]";
		return 3249 === cb || 1006 === cb ? "No Internet / No Server Response" + a2 : 4527 === cb ? "Player already in lobby" + a2 : 4530 === cb ? "Lobby Timeout" + a2 : 4528 === cb ? "Lobby Kick: Another login detected." + a2 : 4540 === cb ?
			"You have been kicked." + a2 : 4495 === cb ? "Account doesn't exist." : "Unknown error" + a2
	}

	function aAK(cb) {
		aRh(cb), aM.h.mp()
	}

	function aRh(cb) {
		var vl = m.bS();
		6 === vl ? g.h.aP0(cb) : qd.xk ? (aM.mo(), qd.xv(), g.h.close(g.h.dh, 3256)) : 8 === vl && bq.iO(!0)
	}
	this.mj = [], this.aPS = function(dT, cb) {
		if (this.mj.push(cb), 8 === aM.fQ && 0 === dT)
			if (4211 === cb) aRg(cb);
			else {
				if (qd.xk && 4495 === cb && g.h.dh !== dT) return void aM.rI();
				if (8 !== m.bS() && aRh(), 4480 === cb) return aP.aS.aRl(), void aM.iZ(4, 0, new mn(L(422), L(423), !0));
				aM.iZ(4, 0, new mn(L(420), aRj(cb), !0))
			}
		else {
			var vl = m.bS();
			if (6 === vl) {
				if (4211 === cb) return void aRg(cb);
				if (4215 !== cb && 4516 !== cb && 4527 !== cb && 4533 !== cb && 4528 !== cb) return void e.aOw(dT)
			} else {
				if (!qd.xk) return 8 === vl ? void(dT !== g.h.jP || bq.hR || 1 !== bq.dM || bq.cq || bu.a5v(L(421, [cb]))) : void 0;
				if (dT !== g.h.dh) return
			}
			aRk(cb)
		}
	}, this.aOz = function(cb) {
		this.mj.push(cb), 8 === m.bS() ? bq.hR || 1 !== bq.dM || bu.a5v(L(421, [cb])) : aRk(cb)
	}, this.mm = function() {
		this.mj.push(3268), aAK(3268)
	}
}

function aI4() {
	this.uh = function(dT) {
		var vD, aMA;
		gv.h5(70) ? (vD = gv.gz(3), aMA = jg.eG.c(gv.gz(30), gv.gz(30)), g.dZ.aRm(dT, aMA, vD), 0 < vD || (0 === dT && 0 === aP.aQ.data[105].value.length ? g.dZ.aIA(0) : g.rb.tJ(dT), 4 === g.h.aPN(dT).a3D() ? 6 === m.bS() && g.aHx.dS(dT) : 5 !==
			g.h.aPN(dT).a3D() || 8 !== m.bS() && 10 !== m.bS() || g.v0.jo())) : g.h.gx(dT, 3269)
	}, this.uk = function(dT) {
		var id = gv.gz(6);
		1 === id ? (aP.aS.aT(160, gv.gz(30)), g.h.a3A(dT), bT.eY || g.dZ.aIA(1), df.t9(), 8 === aM.fQ && aM.fR().aIG()) : 21 === id ? 8 === aM.fQ && aM.fR().h3(17) : 22 === id && (aP.aS.aT(106, aP.aQ.data[110].value), aP.aS.aT(110, ""), 8 === aM
			.fQ) && aM.fR().h3(15)
	}, this.un = function() {
		var a3 = gv.gz(16),
			aRn = gv.gz(16);
		if (gv.h5(55 + 10 * a3 + 16 * aRn)) {
			for (var a4 = [], a5 = 0; a5 < a3; a5++) a4.push(h0.h6.h7(gv.gz(10)));
			df.tC(a4)
		} else g.h.gx(0, 3270)
	}
}

function xs() {
	var aRo = 0,
		aRp = "",
		aRq = 0,
		aRr = 0,
		aRs = 0;

	function aRu(bK) {
		g.aHx.dj(3, bK)
	}

	function aS3(gi) {
		aRo = 1, qd.message.aML({
			id: 6,
			value: gi
		})
	}

	function aRx(ml) {
		var aS6 = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return ml.match(aS6)
	}
	this.ja = function(ml) {
		var aRt, a4, aRz;
		if (aRo) return aRo = 0, "yes" === (aRt = ml.toLowerCase()) || "y" === aRt ? void aRu(aRp) : void qd.message.aML({
			id: 5,
			a9K: 7
		});
		!(ml.indexOf("@") < 0) && (aRt = aRx(ml)) ? (aRp = ml, a4 = function(aRw) {
			for (var a3 = aRw.length, aS5 = [0, 0, 0, 0], a5 = 0; a5 < a3; a5++)
				for (var af = aRw[a5], fp = 0; fp < 4; fp++) af === "@room" + (fp + 1) && (aS5[fp] = 1);
			if ((aRr = ar.t4.tt(aS5)) % 4 == 0) return ar.t4.aLj(qd.qi.qj);
			for (fp = 0; fp < 4; fp++) aS5[fp] = aS5[fp] ? qd.qi.qj[fp] : [];
			return ar.t4.aLj(aS5)
		}(aRt), function(aRw, aRz, ml) {
			if (!aRq) return;
			for (var a3 = aRz.length, a5 = 0; a5 < a3; a5++) 2 === aRz[a5].id && (ml = ml.replace(aRw[aRz[a5].b4], "@" + aRz[a5].y));
			return aRo = 1, aRu((aRp = ml).slice(0, 126) + "|"), 1
		}(aRt, aRz = function(aRw) {
			for (var aRz = [], a3 = (aRs = aRq = 0, aRw.length), a5 = 0; a5 < a3; a5++) {
				var af = aRw[a5],
					ei = af.length;
				ar.d5.startsWith(af, "@[") ? ei <= 9 && ar.d5.a7y(af, "]") && aRz.push({
					id: 0,
					y: af.substring(2, ei - 1).toUpperCase()
				}) : 6 === ei ? ar.d5.startsWith(af, "@room") || (aRs++, aRz.push({
					id: 1,
					y: h0.kY.xl(af.substring(1))
				})) : 1 < ei && ei < 5 && 0 <= (ei = df.data.tF(af.substring(1))) && (aRz.push({
					id: 2,
					y: ei,
					b4: a5
				}), aRq = 1)
			}
			return aRz
		}(aRt), ml) || (0 === aRz.length ? aRr || function(aRw) {
			for (var a3 = aRw.length, a5 = 0; a5 < a3; a5++) {
				var af = aRw[a5];
				if ("@all" === af || "@everyone" === af) return 1
			}
			return
		}(aRt) ? aS3(a4.length) : aRu(ml) : aRt.length === aRs ? aRu(ml) : (function(a4, aRz) {
			var ei = aRz.length;
			if (0 === ei) return;
			var a3 = a4.length;
			loop: for (var a5 = a3 - 1; 0 <= a5; a5--) {
				for (var fp = 0; fp < ei; fp++)
					if (0 === aRz[fp].id) {
						if (aRz[fp].y === ar.d5.a7s(a4[a5].username)) continue loop
					} else if (1 === aRz[fp].id && aRz[fp].y === a4[a5].dr) continue loop;
				a4[a5] = a4[--a3], a4.pop()
			}
		}(a4, aRz), aS3(a4.length)))) : aRu(ml)
	}, this.aQx = function(ml) {
		var aRw = aRx(ml);
		if (aRw)
			for (var mt = new RegExp("^[0-9]+$"), a3 = aRw.length, a5 = 0; a5 < a3; a5++) {
				var af = aRw[a5].substring(1),
					ei = af.length;
				1 <= ei && ei <= 3 && mt.test(af) && (ei = parseInt(af, 10), !isNaN(ei)) && 0 <= ei && ei < df.data.a4.length && (ml = ml.replace("@" + af, "@" + df.data.a4[ei]))
			}
		return ml
	}
}

function aRb() {
	function aS7(cb) {
		var a4, cb = cb.target.files;
		cb && 0 < cb.length && (cb = cb[0], "json" === (a4 = cb.name.split("."))[a4.length - 1].toLowerCase()) && ((a4 = new FileReader).onload = aSE, a4.readAsText(cb))
	}

	function aSE(cb) {
		var aSH;
		bq.dM || (cb = JSON.parse(cb.target.result), aSH = bq.data = new hg, aSI(cb, aSH, "mapType", 0, 2), aSI(cb, aSH, "mapProceduralIndex", 0, 255), aSI(cb, aSH, "mapRealisticIndex", 0, 255), aSI(cb, aSH, "mapSeed", 0, 16383), function(aSG, aSH,
				j7, max) {
				aSG = aSG[j7];
				aSH[j7] = aSO(aSG) ? aSG.slice(0, max) : aSH[j7]
			}(cb, aSH, "mapName", 20), function(aSG, aSH, j7) {
				var a02;
				2 === aSH.mapType && (!aSO(aSG = aSG[j7]) || aSG.length <= 20 ? aSH.mapType = 0 : ((a02 = new Image).onload = function() {
					iA.yZ.a01(a02, 1), a02.onload = null, a02 = null
				}, a02.src = aSG))
			}(cb, aSH, "canvas"), aSI(cb, aSH, "passableWater", 0, 1), aSI(cb, aSH, "passableMountains", 0, 1), aSI(cb, aSH, "playerCount", 1, 512), aSI(cb, aSH, "humanCount", 1, 1), aSI(cb, aSH, "selectedPlayer", 0, 0), aSI(cb, aSH, "gameMode",
				0, 1), aSI(cb, aSH, "playerMode", 0, 0), aSI(cb, aSH, "battleRoyaleMode", 0, 0), aSI(cb, aSH, "numberTeams", 0, 8), aSI(cb, aSH, "isZombieMode", 0, 0), aSI(cb, aSH, "isContest", 0, 0), aSI(cb, aSH, "isReplay", 0, 0), aSL(cb, aSH,
				"elo", 16, 2, 16383), aSI(cb, aSH, "colorsType", 0, 1), aSI(cb, aSH, "colorsPersonalized", 0, 1), aSL(cb, aSH, "colorsData", 32, 512, 262143), aSI(cb, aSH, "selectableColor", 0, 1), aSL(cb, aSH, "teamPlayerCount", 16, 9, 512),
			aSI(cb, aSH, "neutralBots", 0, 1), aSI(cb, aSH, "botDifficultyType", 0, 3), aSI(cb, aSH, "botDifficultyValue", 0, 15), aSL(cb, aSH, "botDifficultyTeam", 8, 9, 15), aSL(cb, aSH, "botDifficultyData", 8, 512, 15), aSI(cb, aSH,
				"spawningType", 0, 2), aSI(cb, aSH, "spawningSeed", 0, 16383), aSL(cb, aSH, "spawningData", 16, 1024, 4095), aSI(cb, aSH, "selectableSpawn", 0, 1), aSI(cb, aSH, "playerNamesType", 0, 2),
			function(aSG, aSH, j7, size, max) {
				var aFc = aSG[j7];
				if (Array.isArray(aFc)) {
					for (var aFf = new Array(size), a3 = Math.min(aFc.length, size), a5 = 0; a5 < a3; a5++) aFf[a5] = aSO(aFc[a5]) ? aFc[a5].slice(0, max) : "";
					aSH[j7] = aFf
				}
			}(cb, aSH, "playerNamesData", 512, 20), aSI(cb, aSH, "selectableName", 0, 1), aSI(cb, aSH, "aIncomeType", 0, 2), aSI(cb, aSH, "aIncomeValue", 0, 255), aSL(cb, aSH, "aIncomeData", 8, 512, 255), aSI(cb, aSH, "tIncomeType", 0, 2), aSI(
				cb, aSH, "tIncomeValue", 0, 255), aSL(cb, aSH, "tIncomeData", 8, 512, 255), aSI(cb, aSH, "iIncomeType", 0, 2), aSI(cb, aSH, "iIncomeValue", 0, 255), aSL(cb, aSH, "iIncomeData", 8, 512, 255), aSI(cb, aSH, "sResourcesType", 0, 2),
			aSI(cb, aSH, "sResourcesValue", 0, 2047), aSL(cb, aSH, "sResourcesData", 16, 512, 2047), aM.mo(), aM.h.aAw[0] = 0, aM.iZ(19))
	}

	function aSI(aSG, aSH, j7, min, max) {
		aSG = aSG[j7];
		aSH[j7] = "number" == typeof aSG && min <= aSG && aSG <= max ? Math.floor(aSG) : aSH[j7]
	}

	function aSO(a2) {
		return "string" == typeof a2
	}

	function aSL(aSG, aSH, j7, aSP, size, max) {
		var aFc = aSG[j7];
		if (Array.isArray(aFc)) {
			for (var aFf = new(8 === aSP ? Uint8Array : 16 === aSP ? Uint16Array : Uint32Array)(size), a3 = Math.min(aFc.length, size), a5 = 0; a5 < a3; a5++) aFf[a5] = z.ax(aFc[a5], 0, max);
			aSH[j7] = aFf
		}
	}
	this.aQA = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aS7, input.click()
	}, this.aQB = function() {
		for (var aSA, aMs, uI = bq.data, keys = Object.keys(uI), aS8 = {}, a5 = 0; a5 < keys.length; a5++) {
			var key = keys[a5];
			uI[key] instanceof Uint8Array || uI[key] instanceof Uint16Array || uI[key] instanceof Uint32Array ? aS8[key] = Array.from(uI[key]) : aS8[key] = uI[key]
		}
		aS8.canvas = 2 === aS8.mapType && aS8.canvas ? aS8.canvas.toDataURL() : null, aSA = aS8, aSA = JSON.stringify(aSA, null, 2), aSA = new Blob([aSA], {
			type: "application/json"
		}), (aMs = document.createElement("a")).href = URL.createObjectURL(aSA), aMs.download = "tt_scenario.json", aMs.click()
	}
}

function wU() {
	var aSQ, aSR, aD, aF6, aSS;
	this.fS = new aEs, aD = new aO([.45, .27], [.5, .5], 2 / 3), aSR = [new aL("⚔️<br>" + L(424), function() {
			aST(0)
		}, ao.a4m), new aL("🗡️<br>" + L(366), function() {
			aST(1)
		}, ao.a50), new aL("🔑<br>" + L(425), function() {
			aST(2)
		}, ao.a5C), new aL("☰<br>" + L(426), function() {
			aST(3)
		}, ao.a4b), new aL("", function() {
			aM.iZ(12)
		}, ao.cR, !1),
		new aL("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new aL("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], aF6 = new rQ(aP.aQ.data[122]);
	for (var a5 = 0; a5 < aSR.length; a5++) aSR[a5].button.style.position = "absolute";

	function aST(b4) {
		bE.bF.setState(10), gW.f7() || gW.f8(), 0 === b4 ? aM.h.iY() : 1 === b4 ? (iA.yZ.h1(aP.aQ.data[156].value, 1) || bq.hh.a2k(), aM.iZ(19)) : 2 === b4 ? 0 !== bE.id || aP.aQ.data[140].value ? aM.iZ(8, aM.fQ, new kW(16)) : aM.h.aB0(aM.fQ, 16) :
			3 === b4 && aM.iZ(1)
	}
	aF6.cb.style.position = "absolute", aF6.cb.style.textAlign = "center", aF6.cb.placeholder = L(427), this.show = function() {
		m.setState(0), bE.bF.setState(12), this.fS.show(), aSR[4].e0(ar.color.aAp(aP.aQ.data[121].value)), this.resize(), document.body.appendChild(aF6.cb);
		for (var a5 = 0; a5 < aSR.length; a5++) document.body.appendChild(aSR[a5].button);
		1 !== bE.id || bE.my < 5 || (aSS && k.e6 > aSS + 144e5 ? bE.n0.setState(14) : aSS = k.e6)
	}, this.aR = function() {
		this.fS.aR(), document.body.removeChild(aF6.cb);
		for (var a5 = 0; a5 < aSR.length; a5++) document.body.removeChild(aSR[a5].button)
	}, this.resize = function() {
		this.fS.resize(), this.fS.resize(), aD.resize();
		var gap = .5 * ab.gap,
			aEg = 10 / 99 * .84 * aD.af,
			aSW = .16 * aD.ae,
			aSX = .19 * aD.af,
			ag = aD.ag + aSX,
			aEg = aD.aZ + aEg + 3 * gap,
			af = .5 * (aD.af - gap) - aSX,
			aSX = aD.af - 2 * aSX - aSW - gap,
			aSX = (ar.at.aF1(aF6.cb, ag, aEg, aSX, aSW), ar.at.aF1(aSR[4].button, ag + aSX + gap, aEg, aSW, aSW), .5 * (aD.aZ + aD.ae - (aEg += aSW + gap) - gap));
		ar.at.aF1(aSR[0].button, ag, aEg, af, aSX), ar.at.aF1(aSR[1].button, ag + af + gap, aEg, af, aSX), ar.at.aF1(aSR[2].button, ag, aEg + aSX + gap, af, aSX), ar.at.aF1(aSR[3].button, ag + af + gap, aEg + aSX + gap, af, aSX);
		ar.at.aF1(aSR[5].button, ag, aEg + aSX * 2 + gap * 2, af * 2 + gap, aSX / 3);
		ar.at.aF1(aSR[6].button, ag, aEg + aSX * 2.33 + gap * 3, af * 2 + gap, aSX / 3);
		for (var a5 = 0; a5 < aSR.length; a5++) aSR[a5].button.style.font = ar.at.au(0, ar.at.aSY(.065 * aD.ae)), ar.at.cd(aSR[a5].button, 5);
		aF6.cb.style.font = ar.at.au(0, ar.at.aSY(.08 * aD.ae)), ar.at.cd(aF6.cb, 5)
	}, this.n = function() {
		if (m.aED(), bT.n(), d.n(), fU.n(), gW.f7()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aD.af * 0.03);
				ah.font = ar.at.au(1, size);
				ah.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = ah.measureText(text).width;
				ah.textAlign = "left";
				ah.textBaseline = "middle";
				ah.fillText(text, ah.canvas.width - textLength - size / 2, size);
			};
			ah.imageSmoothingEnabled = !1;
			var aV = gW.f6("territorial.io"),
				dL = .84 * aD.af / aV.width;
			ah.setTransform(dL, 0, 0, dL, aD.ag + .08 * aD.af, aD.aZ), aSQ = aSQ || ar.fH.fO(aV, ar.fH.aMR, [0, 0, 0]);
			for (var ag = -1; ag <= 1; ag += 2)
				for (var aZ = -1; aZ <= 1; aZ += 2) ah.drawImage(aSQ, ag, aZ);
			ah.drawImage(aV, 0, 0), ah.imageSmoothingEnabled = !0;
			var a7 = gW.f6("logo"),
				aSZ = .6666 * dL * aV.height / a7.height,
				li = .5 * f.af,
				lj = aD.aZ + .5 * dL * aV.height - .5 * aSZ * a7.height;
			ah.setTransform(aSZ, 0, 0, aSZ, li - .6 * dL * aV.width, lj), ah.drawImage(a7, 0, 0), ah.setTransform(aSZ, 0, 0, aSZ, li + .6 * dL * aV.width - aSZ * a7.width, lj), ah.drawImage(a7, 0, 0), ah.setTransform(1, 0, 0, 1, 0, 0), ah
				.imageSmoothingEnabled = !0
		}
	}
}

function aRV() {
	this.aJ = function() {
		this.a4 = [], this.b4 = 0
	}, this.ds = function() {
		return new Uint8Array(this.a4)
	}, this.dW = function(aSa, value) {
		for (var a4 = this.a4, mU = this.b4 + aSa - 1, aSb = 1 + (mU >> 3); a4.length < aSb;) a4.push(0);
		for (var a5 = this.b4; a5 <= mU; a5++) a4[a5 >> 3] |= (value >> mU - a5 & 1) << 7 - (7 & a5);
		this.b4 += aSa
	}, this.aRf = function(a4, gA, aCp) {
		var aSc = ar.t4.aLh(a4);
		this.dW(gA, aSc);
		for (var a5 = 0; a5 < aSc; a5++) this.dW(aCp, a4[a5])
	}, this.aSd = function(a4, gA, aCr) {
		var aSc = ar.t4.aLh(a4);
		this.dW(gA, aSc);
		for (var a5 = 0; a5 < aSc; a5++) this.aSe(a4[a5], aCr)
	}, this.aSe = function(a2, gA) {
		var a3 = a2.length;
		this.dW(gA, a3);
		for (var a5 = 0; a5 < a3; a5++) this.dW(16, a2.charCodeAt(a5))
	}, this.aSf = function(m9) {
		var aSg = (m9 = m9.toDataURL()).split(",");
		if (aSg.length < 2) console.log("error 266");
		else {
			m9 = ar.d5.a81(m9 = aSg[aSg.length - 1], "/", "_"), m9 = ar.d5.a81(m9, "\\+", "-");
			var m9 = ar.d5.a81(m9, "=", ""),
				x9 = h0.kY.zu(m9),
				a3 = x9.length;
			this.dW(30, a3);
			for (var a5 = 0; a5 < a3; a5++) this.dW(6, x9[a5])
		}
	}
}

function aSh() {
	this.ja = function() {
		if (2 === bq.hc) bq.hd = 2;
		else {
			if (8 === bq.fs) ar.d1.lp(0) || 0 === fz.iN[0] ? bq.he = 1 : ar.d1.lp(1) || 0 === fz.iN[1] ? bq.he = 0 : bq.he = +(fz.lJ[1] > fz.lJ[0]);
			else {
				if (bq.hU) {
					var vr = bs.aBd();
					if (bq.hf = vr, hv.vR[vr]) return void(bq.hd = +(hv.va[bq.d3] === vr))
				}
				bq.he = vo[0]
			}
			bq.hd = +(bq.he === bq.d3)
		}
	}
}

function aHM() {
	var b4 = 0,
		e6 = k.e6;
	this.b = 0, this.c = function() {
		f.c(), bq.cp ? a5q() : 0 === b4 ? k.e6 >= e6 && (e6 += k.a5h * Math.floor(1 + (k.e6 - e6) / k.a5h), 2 === bq.dM || c2.d8 ? a5i() : (a5o(), i1.a5k()), b4++) : ((c2.d8 ? a5q : (k.l = !0, a5r))(), b4 = 0), a5g(), k.l && (k.l = !1, bd())
	}
}

function aSj() {
	this.jd = function() {
		for (var a3 = i8.j6, e8 = i8.j5, jX = [], a5 = 0; a5 < a3; a5++) {
			var cE = e8[a5];
			ar.d1.vv(cE) && jX.push(cE)
		}
		return jX
	}, this.je = function() {
		if (0 === hv.vR[bq.hf]) return this.jf();
		bs.a88(bq.hf);
		for (var jX = [], a3 = j9.jB[0], a89 = j9.a89, a5 = 0; a5 < a3; a5++) {
			var cE = a89[a5];
			ar.d1.vv(cE) && jX.push(cE)
		}
		return jX
	}, this.jf = function() {
		var cE = vo[0];
		return ar.d1.vv(cE) ? [cE] : []
	}, this.ji = function(jX) {
		for (var a3 = jX.length, dO = 0, lJ = fz.lJ, a5 = 0; a5 < a3; a5++) dO += lJ[jX[a5]];
		return dO
	}
}

function aEp() {
	this.aT = function(b4, value) {
		aP.aQ.data[b4].value !== value && (aP.aQ.gg(b4, value), 0 === b4 ? (aM.mo(), df.aJ(), aM.iZ(2)) : 1 === b4 ? f.yq(1) : 2 === b4 ? f.yq(0) : 5 === b4 && (ar.at.uW(), f.yq(0)))
	}, this.aOG = function() {
		for (var data = aP.aQ.data, a5 = 0; a5 < 100; a5++) data[a5] && aP.aQ.gg(a5, data[a5].a31);
		ar.at.uW(), f.yq(1), df.aJ()
	}, this.aOH = function() {
		for (var data = aP.aQ.data, a5 = 0; a5 < data.length; a5++) data[a5] && aP.aQ.aT(a5, data[a5].a31)
	}, this.aRl = function() {
		for (var an = aP.aQ, a5 = 128; a5 < 135; a5++) an.gg(a5, an.data[a5].a31)
	}, this.a77 = function(data) {
		aP.aS.aT(109, data.kV), aP.aS.aT(107, data.a6a), aP.aS.aT(108, data.a6b), aP.aS.aT(112, data.a6c), aP.aS.aT(111, data.a6d), aP.aS.aT(113, data.a6e), aP.aS.aT(135, data.a6f), aP.aS.aT(136, data.a6g), aP.aS.aT(137, data.a6h), aP.aS.aT(138,
			data.a6i), aP.aS.aT(139, data.a6j), aP.aS.aT(141, data.a6k), aP.aS.aT(142, data.a6l), aP.aS.aT(143, data.a6m), aP.aS.aT(144, data.a6n)
	}
}

function wY() {
	var aC, rH, kI;
	this.show = function() {
		aC.show(), this.resize()
	}, this.aR = function() {
		aC.aR()
	}, this.resize = function() {
		aC.resize(), rH.resize()
	}, this.b6 = function(aV) {
		2 === aV && aC.b7[0].b8()
	}, aC = new aK(L(428), [new aL("⬅️ " + L(1), function() {
		aM.wo(13)
	})]), rH = new rJ(aC.cQ, ((kI = []).push(function() {
		var rM = new rN,
			a7Z = (rM.rO(L(429)), rM.re(L(430)), new aL(L(96), function() {
				aP.aS.aT(130, 0), aM.h.aAx()
			}, 0, 0, 1)),
			aF6 = new rQ(aP.aQ.data[126], 0, function() {
				a7Z.button.click()
			});
		return rM.rR(aF6), aF6.cb.placeholder = "a,b,c", aF6.cb.style.marginTop = "0.5em", rM.rR(new rY([a7Z.button])), rM
	}()), kI.push(function() {
		var rM = new rN,
			a7Z = new aL(L(96), function() {
				aP.aS.aT(130, 1), aM.h.aAx()
			}, 0, 0, 1),
			a7a = new rQ(aP.aQ.data[129], 1, function() {
				a7a.cb.focus()
			}),
			a7b = new rQ(aP.aQ.data[128], 1, function() {
				a7Z.button.click()
			});
		return rM.rO(L(94)), rM.rR(a7b), a7b.cb.style.marginBottom = "0.5em", rM.rO(L(95)), rM.rR(a7a), rM.rR(new rY([a7Z.button])), rM
	}()), kI.push(function() {
		var rM = new rN;
		return rM.rO(L(431)), aP.aQ.data[125].xx = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], rM.zB(new zC(aP.aQ.data[125])), rM
	}()), kI.push(function() {
		var rM = new rN;
		return rM.rO(L(432)), rM.rR(new a2P(aP.aQ.data[127], L(433))), rM
	}()), kI))
}

function a5i() {
	bu.c(), bp.c(), by.aSn(), g.h.c()
}

function a5o() {
	iJ.c(), iE.c(), hr.c(), iH.c(), iD.c(), i3.c(), bo.h.c(), i8.aBE(), bv.c(), hm.c(), i4.c(), bp.c(), bp.mI(), by.c(), bm.c(), c0.c(), c1.c(), bu.c(), iI.c(), bw.c(), bx.c(), hw.c(), bs.c(), g.h.c(), g.aHw.c(), aM.c(), iA.c(), k.c()
}

function a5g() {
	iL.c(), c4.c(), bz.c(), c6.c(), bt.c(), i.aE4()
}

function a5r() {
	bv.bR(!1), c1.bR(), by.bR(!1), c0.bR(), bw.bR(), bx.bR(), bp.bR(!1), bs.nH()
}

function a5q() {
	bp.bR(!1) && (k.l = !0), g.h.c()
}

function xq() {
	var a5P = 0,
		aSo = 0,
		aSp = 0,
		aSq = null,
		aSr = null;

	function aSt(qm, aSu, aSv) {
		var a2 = qm.username;
		return (a2 += "   " + qd.nu.aIl(qm.qr, qm.wF, qm.aH5)) + function(qm) {
			qm = qm.a6e;
			if (qm < 1e3) return "   Gold: " + qm;
			if ((qm %= 1024) < 1e3) return "   Gold: " + qm + "k";
			return "   Gold: " + (qm - 999) + "M"
		}(qm) + ("   IP: " + dn.kY.d6(qm.aH6, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aSv ? aSo : aSs(qm, aSu)])
	}

	function aSs(qm, aSu) {
		return aSo = aSu || qd.qi.a9C(qm.dr) ? 1 : 0
	}
	this.aAD = function() {
		!a5P || aSo === aSs(aSr) && aSp === aSr.a6e || (aSp = aSr.a6e, aSq.show(-1, -1, aSt(aSr, 0, 1), 1, 1))
	}, this.qu = function(cb, qm, aSu) {
		var nB = cb.target.getBoundingClientRect();
		this.show(nB.left, nB.top, qm, 0, aSu), cb.target.addEventListener("mouseleave", function remove() {
			cb.target.removeEventListener("mouseleave", remove), qd.qe && qd.qe.aR(1)
		})
	}, this.show = function(ag, aZ, qm, a5T, aSu) {
		aSq = aSq || new a5N, aSp = (aSr = qm).a6e, aSq.show(ag, aZ, aSt(qm, aSu), a5T), a5P = 1
	}, this.aR = function(a5X) {
		aSq && aSq.aR(a5X) && (a5P = 0, aSr = null)
	}
}

function aMQ(a8f) {
	var a5O = document.createElement("div");

	function a8j() {
		n8.qt() || (a5O.style.backgroundColor = ar.color.kS(ao.cR, 50))
	}

	function a8k() {
		a5O.style.backgroundColor = ao.cR
	}
	this.aT = function(a8m) {
			a5O.textContent = a8m
		}, this.show = function() {
			document.body.appendChild(a5O)
		}, this.resize = function() {
			var ae = ar.at.cX(.03, .5);
			a5O.style.width = 2 * ae + "px", a5O.style.height = ae + "px", a5O.style.font = ar.at.au(1, .75 * ae), ar.at.cd(a5O, 4), ar.at.cd(a5O, 2)
		}, this.xv = function() {
			a5O.onclick = null, a5O.onmouseover = null, a5O.onmouseout = null, document.body.removeChild(a5O), a5O = null
		}, a5O.style.position = "absolute", a8k(), a5O.style.color = ao.ap, a5O.style.zIndex = "3", a5O.style.right = "0", a5O.style.top = "0", a5O.style.display = "flex", a5O.style.justifyContent = "center", a5O.style.alignItems = "center", a5O
		.style.userSelect = "none", a5O.style.outline = "none", a5O.onclick = a8f, a5O.onmouseover = a8j, a5O.onmouseout = a8k
}

function aRS() {
	var gE, ex, li, lj, aSx = 0,
		aSy = 0;

	function aT0() {
		return Math.pow(Math.pow(li - gE, 2) + Math.pow(lj - ex, 2), .5)
	}

	function aSz(cb) {
		gE = f.aW * cb.touches[0].clientX, ex = f.aW * cb.touches[0].clientY, li = f.aW * cb.touches[1].clientX, lj = f.aW * cb.touches[1].clientY
	}
	this.aK9 = function(cb) {
		return 1 < cb.touches.length ? (aSy = k.e6, aSx = 3, aSz(cb), c3.aR(), !0) : (aSx = 0, !1)
	}, this.aKA = function(cb) {
		var y6, no, np;
		return 0 !== bq.dM && 1 < cb.touches.length && (aSx = Math.max(aSx - 1, 0), iL.mU() && (y6 = aT0(), aSz(cb), cb = aT0(), no = Math.floor((gE + li) / 2), np = Math.floor((ex + lj) / 2), bj.aT1(no, np, Math.max(.125, cb) / Math.max(.125,
			y6)), k.l = !0), !0)
	}, this.aKT = function() {
		var ag, aZ;
		return !!(aSx && (aSx = 0, k.e6 < aSy + 500)) && (ag = (gE + li) / 2, aZ = (ex + lj) / 2, c3.pm(ag, aZ), c3.click(ag, aZ, !0) && (k.l = !0), !0)
	}
}

function aRO() {
	var aT2;

	function aT4(player) {
		var al, aJW;
		return ar.d1.lp(player) && player < bq.fx ? 0 : (al = aT2[z.a0((bq.g7 - 1) * fz.lJ[player], bq.hS)], k.mF() < 1920 && (al = Math.max(z.a0(100 * (13440 - 6 * k.mF()), 1920), al)), aJW = hr.aJX(player), fz.lQ[player] > aJW && (al -= z.a0(2 *
			al * (fz.lQ[player] - aJW), aJW)), Math.min(Math.max(al, 0), 700))
	}

	function aTF(dL) {
		for (var lJ = fz.lJ, j5 = i8.j5, a5 = i8.j6 - 1; 0 <= a5; a5--) {
			var cE = j5[a5];
			ar.d1.vy(cE, z.a0(dL * lJ[cE], 32))
		}
	}

	function aTC() {
		var aMZ = bq.d3;
		j9.aFK[0] = fz.lQ[aMZ] - fz.w0[aMZ]
	}

	function aTE(b4) {
		var aMZ = bq.d3;
		hw.a2D[b4] += fz.lQ[aMZ] - fz.w0[aMZ] - j9.aFK[0]
	}
	this.aRf = function() {
		for (var a3 = bq.g7, a5 = (aT2 = new Uint16Array(a3), 0); a5 < a3; a5++) aT2[a5] = 100 + aT3(z.a0(25600 * a5, a3 - 4), 9)
	}, this.aJ = function() {
		0 === bq.data.iIncomeType ? this.nx = aT4 : 1 === bq.data.iIncomeType ? this.nx = function(player) {
			return z.a0(bq.data.iIncomeValue * aT4(player), 64)
		} : this.nx = function(player) {
			return z.a0(bq.data.iIncomeData[player] * aT4(player), 64)
		}
	}, this.c = function() {
		if (k.mF() % 10 == 9 && (function() {
				aTC();
				for (var j5 = i8.j5, lQ = fz.lQ, a5 = i8.j6 - 1; 0 <= a5; a5--) {
					var cE = j5[a5],
						aTD = z.a0(hr.nx(cE) * lQ[cE], 1e4);
					ar.d1.vy(cE, Math.max(aTD, 1))
				}
				aTE(9)
			}(), function() {
				if (0 !== bq.data.aIncomeType) {
					if (aTC(), 1 === bq.data.aIncomeType)
						for (var lJ = fz.lJ, j5 = i8.j5, dL = bq.data.aIncomeValue, a5 = i8.j6 - 1; 0 <= a5; a5--) {
							var cE = j5[a5];
							ar.d1.vy(cE, z.a0(dL * lJ[cE], 128))
						} else 2 === bq.data.aIncomeType && function() {
							for (var lJ = fz.lJ, j5 = i8.j5, dL = bq.data.aIncomeData, a5 = i8.j6 - 1; 0 <= a5; a5--) {
								var cE = j5[a5];
								ar.d1.vy(cE, z.a0(dL[cE] * lJ[cE], 128))
							}
						}();
					aTE(18)
				}
			}(), k.mF() % 100 == 99)) {
			if (aTC(), 0 === bq.data.tIncomeType) aTF(32);
			else if (1 === bq.data.tIncomeType) aTF(bq.data.tIncomeValue);
			else
				for (var lJ = fz.lJ, j5 = i8.j5, dL = bq.data.tIncomeData, a5 = i8.j6 - 1; 0 <= a5; a5--) {
					var cE = j5[a5];
					ar.d1.vy(cE, z.a0(dL[cE] * lJ[cE], 32))
				}
			aTE(8)
		}
	}, this.aJX = function(player) {
		return Math.min(100 * fz.lJ[player], bq.hH)
	}, this.pu = function(player, jw) {
		ar.d1.vy(jw, j9.sE[0]), hw.a0s(player, jw), bp.lH(player, j9.sE[0] + j9.sE[1]), bp.lK(jw, j9.sE[0]), ar.d1.ru(player)
	}, this.aT6 = function() {
		for (var a3 = i8.j6, e8 = i8.j5, ei = 0, nw = fz.lQ, a5 = 0; a5 < a3; a5++) ei += nw[e8[a5]];
		return ei
	}, this.aT7 = function(aT8) {
		for (var cE, a3 = i8.j6, e8 = i8.j5, ei = 0, nw = fz.lQ, va = hv.va, a5 = 0; a5 < a3; a5++) va[cE = e8[a5]] === aT8 && (ei += nw[cE]);
		return ei
	}
}

function uR() {
	this.aCO = function(a2, font, maxWidth) {
		if (font && (ah.font = font), ah.measureText(a2).width <= maxWidth) return a2;
		for (var a5 = a2.length - 1; 1 <= a5; a5--)
			if (a2 = a2.substring(0, a5), ah.measureText(a2 + "...").width <= maxWidth) return a2 + "...";
		return "..."
	}
}

function aJy() {
	this.qH = function(gr) {
		var iu;
		return bh.ij(bh.ig) && bq.data.passableMountains && (iu = hy.j0(gr), this.aTK(bq.d3, iu) || this.aTL(bq.d3, iu)) && 0 !== (iu = function(oK) {
			for (var ag = i2.o6(oK), aZ = i2.o8(oK), max = Math.max(bh.ma, bh.oi) - 2, aTO = max * max, a8I = !1, aTP = 0, vT = 0; vT < max; vT++) {
				var aTQ, js = function(ag, aZ, vT) {
					for (var a5 = 0; a5 <= vT; a5++)
						for (var fp = -1; fp < 2; fp += 2)
							for (var an = -1; an < 2; an += 2)
								for (var aV = 0; aV < 2; aV++) {
									var gr = function(ag, aZ) {
										if (i2.ol(ag, aZ)) {
											ag = i2.oj(ag, aZ), aZ = i2.om(ag);
											if (hy.q7(aZ) && hy.a3o(aZ)) return ag
										}
										return 0
									}(ag + aV * fp * a5 + (1 - aV) * an * vT, aZ + aV * an * vT + (1 - aV) * fp * a5);
									if (gr) return gr
								}
					return 0
				}(ag, aZ, vT);
				js && (aTQ = i2.oL(ag, aZ, js)) < aTO && (aTP = js, aTO = aTQ, a8I || (a8I = !0, max = Math.floor(Math.sqrt(aTQ)) + 1))
			}
			return aTP
		}(i2.on(gr))) && (gr = i2.om(iu), hy.j1(gr) || (gr = hy.oN(gr)) !== bq.d3 && jA(gr, bq.d3)) ? iu : 0
	}, this.sN = function(player, js) {
		js = i2.om(js);
		if (hy.q7(js)) {
			if (hy.j1(js)) j9.rp[0] = bq.g7;
			else if (hy.oN(js) !== j9.rp[0]) return !1;
			for (var va = function(gr) {
					var ix = hy.ix,
						va = [];
					loop: for (var iy = 3; 0 <= iy; iy--) {
						var j4 = gr + ix[iy];
						if (hy.iz(j4)) {
							for (var id = hy.j0(j4), a5 = 0; a5 < va.length; a5++)
								if (id === va[a5]) continue loop;
							j9.sO[va.length] = j4, va.push(id)
						}
					}
					return va
				}(js), a3 = va.length, a5 = 0; a5 < a3; a5++)
				if (this.aTK(player, va[a5]) || this.aTL(player, va[a5])) return j9.sO[0] = j9.sO[a5], !0
		}
		return !1
	}, this.aTK = function(player, iu) {
		for (var ik = fz.ik[player], a3 = ik.length, j2 = Math.max(z.a0(a3, 12), 1), ix = hy.ix, a5 = 0; a5 < a3; a5 += j2)
			for (var j3 = ik[a5], iy = 3; 0 <= iy; iy--) {
				var j4 = j3 + ix[iy];
				if (hy.iz(j4) && iu === hy.j0(j4)) return !0
			}
		return !1
	}, this.aTL = function(player, iu) {
		for (var ik = fz.ik[player], a3 = ik.length, ix = hy.ix, a5 = 0; a5 < a3; a5++)
			for (var j3 = ik[a5], iy = 3; 0 <= iy; iy--) {
				var j4 = j3 + ix[iy];
				if (hy.iz(j4) && iu === hy.j0(j4)) return !0
			}
		return !1
	}
}

function aRJ() {
	var aTR, aTS, af, ag, aZ, aTT, aTU;
	this.aJ = function() {
		aTR = new Array(2), aTS = new Array(2), this.dF = !1, aTU = aTT = lh = lg = 0, bg = 1, this.resize()
	}, this.resize = function() {
		af = (af = Math.floor((bE.bF.bG() ? .072 : .0502) * f.bH)) < 8 ? 8 : af;
		for (var a5 = 1; 0 <= a5; a5--) aTR[a5] = document.createElement("canvas"), aTR[a5].width = af, aTR[a5].height = af, aTS[a5] = aTR[a5].getContext("2d", {
			alpha: !0
		});
		this.cr(),
			function() {
				for (var aTf = Math.floor(1 + af / 20), a5 = 1; 0 <= a5; a5--) aTS[a5].clearRect(0, 0, af, af), aTS[a5].fillStyle = ao.a4S, aTS[a5].beginPath(), aTS[a5].arc(af / 2, af / 2, af / 2 - aTf, 0, 2 * Math.PI), aTS[a5].fill(), aTS[a5]
					.lineWidth = aTf, aTS[a5].fillStyle = ao.ap, aTS[a5].strokeStyle = ao.ap, aTS[a5].beginPath(), aTS[a5].arc(af / 2, af / 2, af / 2 - aTf, 0, 2 * Math.PI), aTS[a5].stroke(), cC(aTS[a5], 0, 0, af, aTf, .3, 0 === a5)
			}()
	}, this.bk = function() {
		return -lg / bg
	}, this.bl = function() {
		return -lh / bg
	}, this.a1N = function(aTY, no) {
		lg = bg * aTY - no
	}, this.a1O = function(aTZ, np) {
		lh = bg * aTZ - np
	}, this.ay = function(aTX, aCB) {
		return bq.br || ! function(aTX, aCB) {
			return Math.pow(aTX - (ag + af / 2), 2) + Math.pow(aCB - (aZ + af / 2), 2) < af * af / 4 || Math.pow(aTX - (ag + af / 2), 2) + Math.pow(aCB - (aZ + 2 * af), 2) < af * af / 4
		}(aTX, aCB) || aP.aQ.data[8].value ? (iL.mU() && (this.dF = !0, aTT = aTX, aTU = aCB), !1) : aCB < aZ + 1.25 * af ? this.b3(Math.floor(f.af / 2), Math.floor(f.ae / 2), -200) : this.b3(Math.floor(f.af / 2), Math.floor(f.ae / 2), 200)
	}, this.b2 = function(aTX, aCB) {
		var aTa, aTb, la, lb;
		return !iL.mU() || (aTa = lg, aTb = lh, lg += la = aTT - aTX, lh += lb = aTU - aCB, bp.b2(la, lb), this.pV(), aTT = aTX, aTU = aCB, aTa !== lg) || aTb !== lh
	}, this.b3 = function(az, b0, deltaY) {
		var dL;
		if (iL.mU()) {
			if (0 < deltaY) dL = (dL = 500 / (500 + deltaY)) < .5 ? .5 : dL;
			else {
				if (!(deltaY < 0)) return !1;
				dL = 2 < (dL = (500 - deltaY) / 500) ? 2 : dL
			}
			this.aT1(az, b0, dL), k.l = !0
		}
		return !0
	}, this.aT1 = function(ag, aZ, gr) {
		var dN;
		gr = dN = (dN = 1024 < (dN = gr) * bg ? 1024 / bg : dN) * bg < .125 ? .125 / bg : dN, bp.zoom(gr, ag, aZ),
			function(dN, az, b0) {
				bg *= dN, lg = (lg + az) * dN - az, lh = (lh + b0) * dN - b0, bj.pV()
			}(gr, ag, aZ)
	}, this.pV = function() {
		var aSX = f.af / 16,
			o5 = 0,
			aTe = f.ae / 16,
			o7 = 0;
		lg < -f.af + aSX && (o5 = -f.af + aSX - lg), lg > bg * bh.ma - aSX && (o5 = bg * bh.ma - aSX - lg), lh < -f.ae + aTe && (o7 = -f.ae + aTe - lh), lh > bg * bh.oi - aTe && (o7 = bg * bh.oi - aTe - lh), lg += o5, lh += o7, a1P.vj(), bp.lZ(
			o5, o7)
	}, this.cr = function() {
		ag = f.af - af - ab.gap, aZ = Math.floor(f.ae / 2 - 1.25 * af)
	}, this.n = function() {
		aP.aQ.data[8].value || (ah.drawImage(aTR[0], ag, aZ), ah.drawImage(aTR[1], ag, Math.floor(aZ + 3 * af / 2)))
	}
}

function aTg() {
	this.dq = function() {
		var lP = function() {
				for (var a0P = iA.iQ.a0P, a3 = a0P.length, max = 0, a5 = 0; a5 < a3; a5++) max = Math.max(max, a0P[a5]);
				return aMW(Math.max(max, 1))
			}(),
			af = (qm = bq.data, (af = dm).aJ(), af.dW(12, dX.rVersion), af.b4 += 43, af.dW(2, qm.mapType), af.dW(8, qm.mapProceduralIndex), af.dW(8, qm.mapRealisticIndex), af.dW(14, qm.mapSeed), af.aSe(qm.mapName, 5), 2 === qm.mapType && af.aSf(
				qm.canvas), af.dW(1, qm.passableWater), af.dW(1, qm.passableMountains), af.dW(10, qm.playerCount), af.dW(10, qm.humanCount), af.dW(9, qm.selectedPlayer), af.dW(1, qm.gameMode), af.dW(2, qm.playerMode), af.dW(2, qm
				.battleRoyaleMode), af.dW(4, qm.numberTeams), af.dW(1, qm.isZombieMode), af.dW(1, qm.isContest), af.dW(1, qm.isReplay), af.aRf(qm.elo, 2, 14), af.dW(1, qm.colorsType), af.dW(1, qm.colorsPersonalized), af.aRf(qm.colorsData, 10,
				18), af.dW(1, qm.selectableColor), af.aRf(qm.teamPlayerCount, 4, 10), af.dW(1, qm.neutralBots), af.dW(2, qm.botDifficultyType), af.dW(4, qm.botDifficultyValue), af.aRf(qm.botDifficultyTeam, 4, 4), af.aRf(qm.botDifficultyData,
				10, 4), af.dW(2, qm.spawningType), af.dW(14, qm.spawningSeed), af.aRf(qm.spawningData, 11, 12), af.dW(1, qm.selectableSpawn), af.dW(2, qm.playerNamesType), af.aSd(qm.playerNamesData, 10, 5), af.dW(1, qm.selectableName), af.dW(
				2, qm.aIncomeType), af.dW(8, qm.aIncomeValue), af.aRf(qm.aIncomeData, 10, 8), af.dW(2, qm.tIncomeType), af.dW(8, qm.tIncomeValue), af.aRf(qm.tIncomeData, 10, 8), af.dW(2, qm.iIncomeType), af.dW(8, qm.iIncomeValue), af.aRf(qm
				.iIncomeData, 10, 8), af.dW(2, qm.sResourcesType), af.dW(11, qm.sResourcesValue), af.aRf(qm.sResourcesData, 10, 11), ! function(lP) {
				var af = dm,
					a0K = iA.iQ.a0K,
					wB = iA.iQ.a0L,
					wC = iA.iQ.a0M,
					nh = iA.iQ.a0N,
					a3 = a0K.length;
				af.dW(5, lP), af.dW(30, a3), af.dW(30, iA.iQ.a0P.length);
				for (var a5 = 0; a5 < a3; a5++) {
					var aV = a0K[a5];
					af.dW(4, aV), af.dW(9, wB[a5]), 0 === aV ? af.dW(22, wC[a5]) : 1 === aV ? (af.dW(10, wC[a5]), af.dW(10, nh[a5])) : 2 === aV ? (af.dW(10, wC[a5]), af.dW(9, nh[a5])) : 3 === aV || 4 === aV ? (af.dW(10, wC[a5]), af.dW(22, nh[
						a5])) : 5 === aV || 6 === aV ? af.dW(10, wC[a5]) : 7 === aV ? af.dW(1, wC[a5]) : 10 === aV && (af.dW(20, wC[a5]), af.dW(22, nh[a5]))
				}
			}(lP), ! function(lP) {
				for (var af = dm, a0O = iA.iQ.a0O, a0P = iA.iQ.a0P, a3 = a0O.length, a5 = 0; a5 < a3; a5++) af.dW(1, a0O[a5]), af.dW(lP, a0P[a5])
			}(lP), dm.b4),
			qm = z.a0(af - 1, 6) + 1,
			lP = (dU.gw(6 * qm) !== dm.a4.length && dm.a4.push(0), ! function() {
				var af = dm;
				af.b4 = 24, af.dW(31, af.a4.length), af.b4 = 12, af.dW(12, function() {
					for (var a4 = dm.a4, a3 = a4.length, a05 = dX.rVersion, a5 = 3; a5 < a3; a5++) a05 = a05 + a4[a5] & 4095;
					return a05
				}())
			}(), gv.aJ(dm.a4), dn.kY.kZ(dn.kY.ka(qm)));
		return gv.xv(), dm.aJ(), lP
	}
}

function aRR() {
	this.iv = new aQM, this.aQa = new aTo, this.aQb = new aIp, this.performance = new a82, this.rs = new aTp, this.a0p = new aJV, this.aJp = new ii, this.aJ = function() {
		this.iv.aJ(), this.aQb.aJ(), this.performance.aJ(), this.rs.aJ(), this.a0p.aJ()
	}, this.c = function() {
		this.performance.c(), this.iv.c()
	}
}

function aBP(aLv, aLw, aTq, aTr) {
	var self;
	this.qo = document.createElement("span"), (self = this).qo.textContent = aLv, self.qo.style.color = ao.ap, self.qo.style.position = "absolute", self.qo.style.font = "inherit", aTr ? self.qo.style.bottom = "0.06em" : self.qo.style.top = "0.12em",
		aTq ? self.qo.style.left = "0.2em" : self.qo.style.right = "0.2em", self.qo.style.fontSize = "0.6em", self.qo.style.pointerEvents = "none", self.qo.style.whiteSpace = "pre", aLw.style.position = "relative", aLw.style.overflow = "hidden", aLw
		.appendChild(self.qo)
}

function xp() {
	var aTs = null,
		aTt = null,
		aTu = 0,
		aTv = 0,
		aTw = null;

	function aTx() {
		0 !== aTt.qr && (qd.xg.aR(), aM.iZ(8, 29, new kW(25, {
			kX: 0,
			dr: dn.kY.d6(aTt.dr, 5),
			kV: 0
		}, 29)))
	}

	function aTy() {
		var ag = aTs.ag,
			aZ = aTs.aZ;
		qd.xg.aR(), aTs = new aBN([new aL("Kick User", function() {
			aU4(0, 0)
		}, aU7(0, 0)), new aL("Block Chat", aU5, aU7(1, 0)), new aL("Censor Username", aU6, aU7(2, 0))]), aU3(ag, aZ), aTu = 2, aTv = 1
	}

	function aU7(id, b4) {
		var al, aH5;
		return !qd.xf || qd.nu.qs(aTt) || (al = aTt.wF) <= (aH5 = qd.xf.aH5) || 1 - t0.a6T(id, aH5, b4) ? 1 : 4 === aTt.qr ? 50 <= al ? +(al <= aH5) : 20 <= al ? +(al / 2 <= aH5) : +(al / 3 <= aH5) : 0
	}

	function aU1() {
		return !qd.xf || qd.nu.qs(aTt) ? 1 : 0
	}

	function aU0() {
		var ag = aTs.ag,
			aZ = aTs.aZ,
			aU8 = (qd.xg.aR(), aU1());
		aTs = new aBN([new aL(t0.a6S[5][0], function() {
			aU4(5, 0)
		}, aU8), new aL(t0.a6S[5][1], function() {
			aU4(5, 1)
		}, aU8), new aL(t0.a6S[5][2], function() {
			aU4(5, 2)
		}, aU8), new aL(aTt.aH5 < 100 ? "Stealth Report" : t0.a6S[5][3], function() {
			aU4(5, 3)
		}, aU8)]), aU3(ag, aZ), aTv = aTu = 2
	}

	function aU2() {
		29 === aM.fQ && aM.fR().xh(dn.kY.d6(aTt.dr, 5))
	}

	function aU4(id, value) {
		g.aHx.dj(5, {
			id: id,
			value: value,
			dr: aTt.dr
		})
	}

	function aU5() {
		var ag = aTs.ag,
			aZ = aTs.aZ;
		qd.xg.aR(), aTs = new aBN([new aL(t0.a6S[1][0], function() {
			aU4(1, 0)
		}, aU7(1, 0)), new aL(t0.a6S[1][1], function() {
			aU4(1, 1)
		}, aU7(1, 1)), new aL(t0.a6S[1][2], function() {
			aU4(1, 2)
		}, aU7(1, 2)), new aL(t0.a6S[1][3], function() {
			aU4(1, 3)
		}, aU7(1, 3)), new aL(t0.a6S[1][4], function() {
			aU4(1, 4)
		}, aU7(1, 4))]), aU3(ag, aZ), aTu = 3, aTv = 1
	}

	function aU6() {
		var ag = aTs.ag,
			aZ = aTs.aZ;
		qd.xg.aR(), aTs = new aBN([new aL(t0.a6S[2][0], function() {
			aU4(2, 0)
		}, aU7(2, 0)), new aL(t0.a6S[2][1], function() {
			aU4(2, 1)
		}, aU7(2, 1)), new aL(t0.a6S[2][2], function() {
			aU4(2, 2)
		}, aU7(2, 2))]), aU3(ag, aZ), aTu = 3, aTv = 2
	}

	function aU3(ag, aZ, aBT) {
		aTs.show(ag, aZ, aBT), qd.qe.show(aTs.ag, aTs.aZ, aTt, 1)
	}
	this.a96 = function(cb, qm) {
		aTu = 1, aTt = qm, aTs = new aBN([new aL(L(434), aTx, 0 === aTt.qr ? 1 : 0), new aL(L(435), aTy, function() {
			if (!qd.xf) return 1;
			if (qd.nu.qs(aTt)) return 1;
			if (100 <= qd.xf.aH5) return 1;
			if (qd.xf.aH5 >= aTt.wF) return 1;
			return 0
		}()), new aL(L(436, 0, "🚩 Report"), aU0, aU1()), new aL(L(437), aU2, 0)]), aU3((aTw = {
			clientX: cb.clientX,
			clientY: cb.clientY
		}).clientX, aTw.clientY, 1)
	}, this.b6 = function(code) {
		if (29 !== aM.fQ) return !1;
		if (!aTt) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.aR();
			else if (ar.d5.startsWith(code, "Numpad") || ar.d5.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aTu) this.a96(aTw, aTt);
				else {
					if (!aTs) return !1;
					1 === aTu ? code <= 1 ? aTx() : 2 === code ? aTy() : 3 === code ? aU0() : (aU2(), this.aR()) : 2 === aTu ? 1 === aTv ? code <= 1 ? (aU4(0, 0), this.aR()) : (2 === code ? aU5 : aU6)() : (aU4(5, z.ax(code - 1, 0, 3)), this
					.aR()) : (aU4(aTv, z.ax(code - 1, 0, t0.a6S[aTv].length - 1)), this.aR())
				}
		}
		return !0
	}, this.aR = function() {
		aTu = 0, aTs && aTs.aR(), aTs = null, qd.qe.aR()
	}
}

function sr() {
	this.a4 = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aUB = function() {
		for (var aUC = [], a4 = this.a4, a3 = a4.length, a5 = 0; a5 < a3; a5++) aUC.push(a4[a5]);
		var yB = aP.aQ.data[12].a31;
		for (a5 = 0; a5 < a3; a5++)
			if (aUC[a5] === yB) {
				aUC.splice(a5, 1), a3--;
				break
			} aUC.sort(), a3++, aUC.unshift(yB);
		try {
			if ("undefined" == typeof Intl) return aUC;
			for (a5 = 0; a5 < a3; a5++) {
				var a2 = new Intl.DisplayNames([aUC[a5]], {
					type: "language"
				}).of(aUC[a5]);
				a2 !== aUC[a5] && (aUC[a5] = aUC[a5] + ": " + a2)
			}
		} catch (cb) {
			console.log("error 3646: " + cb)
		}
		return aUC
	}, this.aUE = function(l1) {
		for (var a2 = aP.aQ.data[12].value, a3 = l1.length, a5 = 0; a5 < a3; a5++)
			if (a2 === l1[a5].split(":")[0]) return a5;
		return 0
	}, this.tF = function(aUF) {
		if (!aUF || aUF.length < 2) return 0;
		aUF = aUF.split("-")[0].toLowerCase();
		for (var a4 = this.a4, a3 = a4.length, a5 = 0; a5 < a3; a5++)
			if (aUF === a4[a5]) return a5;
		return -1
	}
}

function aRU() {
	this.iQ = new aUG, this.iS = new aTg, this.yZ = new zq, this.aJ = function() {
		bq.cq || this.iQ.aJ()
	}, this.c = function() {
		bq.cq || (this.iQ.c(), 3 !== aM.fQ) || k.mF() % 15 != 5 && 2 !== bq.dM || aM.fR().yT()
	}, this.yY = function() {
		0 === bq.dM && m.v4(), bq.hh.a2g(), bq.data.canvas = null, g.h.close(g.h.jP, 3257), g.h.jP = 0, bq.data.isReplay = 1, bq.hk()
	}, this.yW = function(a2) {
		var a5 = a2.indexOf("=");
		return 0 <= a5 ? a2.substring(a5 + 1) : a2
	}, this.yV = function(a2) {
		return "https://territorial.io/?replay=" + a2
	}
}

function aRT() {
	var a79, a13;
	this.aJ = function() {
		a79 = 1, a13 = 0
	}, this.c = function() {
		0 < a79 && (a13 = 0 === a13 ? k.e6 + 16 : a13, a79 = (a79 -= .001 * (k.e6 - a13)) < 0 ? 0 : a79, a13 = k.e6, k.l = !0)
	}, this.n = function() {
		0 < a79 && (ah.fillStyle = "rgba(0,0,0," + a79 + ")", ah.fillRect(0, 0, f.af, f.ae))
	}
}

function wS() {
	var aC, rH, kI, tA, rM;

	function aUK() {
		var e6;
		tA !== aP.aQ.data[12].value ? (df.aJ(), df.t9(), e6 = k.e6, aM.iZ(4, 1, new mn(L(439), L(440), !1, [new aL("⬅️ " + L(1), function() {
			aM.iZ(1)
		}), new aL("🔄 Reload", function() {
			k.e6 < e6 + 1500 || bE.bF.mq()
		}, ao.a4j)]))) : aM.iZ(1)
	}
	this.show = function() {
			tA = aP.aQ.data[12].value, aC.show(), this.resize()
		}, this.aR = function() {
			aC.aR()
		}, this.resize = function() {
			aC.resize(), rH.resize()
		}, this.b6 = function(aV) {
			2 === aV && aC.b7[0].b8()
		}, aC = new aK(L(398), [new aL("⬅️ " + L(1), aUK), new aL(L(438), function() {
			aM.mo(), aP.aS.aOG(), aM.iZ(2)
		})]), kI = [], (rM = new rN).rO(L(441)), rM.re(L(442)), kI.push(rM),
		function(kI) {
			var rM = new rN,
				a4 = (rM.rO(L(463)), df.data.aUB());
			rM.zB(new zC({
				xx: a4,
				value: df.data.aUE(a4)
			}, function(b4) {
				return aP.aS.aT(12, a4[b4].split(":")[0]), !0
			})), kI.push(rM)
		}(kI),
		function(kI) {
			var rM = new rN,
				aUN = (rM.rO(L(461)), []);
			rM.rR(new rY([new aL(L(462), function(cb) {
				a6I.aA1();
				for (var a5 = 0; a5 < aUN.length; a5++) aUN[a5].cb.value = a6I.a6J[a5];
				return ar.at.ra(cb), !0
			}).button]));
			for (var a5 = 0; a5 < a6I.a9v.length; a5++) {
				rM.re(a6I.a9v[a5]);
				for (var fp = 0; fp < 2; fp++) {
					var b4 = 2 * a5 + fp,
						aF6 = new rQ({
							value: a6I.a6J[b4],
							b4: -1
						});
					aF6.cb.aUO = b4, aUN.push(aF6), aF6.cb.addEventListener("keydown", function(cb) {
						cb.preventDefault();
						var code = cb.code;
						cb.target.value = code, a6I.a9y(cb.target.aUO, code)
					}), fp && (aF6.cb.style.marginLeft = "4%"), aF6.cb.style.width = "48%", rM.rR(aF6)
				}
			}
			kI.push(rM)
		}(kI), (rM = new rN).rO(L(231)), rM.zB(new zC({
			xx: ["1", "2"],
			value: e.aOs - 1
		}, function(a5) {
			e.aOs = a5 + 1
		})), kI.push(rM), (rM = new rN).rO(L(443)), aP.aQ.data[1].xx = [L(444), L(445), L(446), L(447)], rM.zB(new zC(aP.aQ.data[1])), kI.push(rM), (rM = new rN).rO(L(448)), aP.aQ.data[9].xx = [L(445), L(449), L(450)], rM.zB(new zC(aP.aQ.data[9])),
		kI.push(rM), (rM = new rN).rO(L(451)), aP.aQ.data[11].xx = [L(452), L(65), L(453)], rM.zB(new zC(aP.aQ.data[11])), kI.push(rM), (rM = new rN).rO(L(454)), rM.rR(new a2P(aP.aQ.data[2])), kI.push(rM), (rM = new rN).rO(L(455)), rM.rR(new a2P(aP
			.aQ.data[7])), kI.push(rM), (rM = new rN).rO(L(456)), rM.rR(new a2P(aP.aQ.data[8])), kI.push(rM), (rM = new rN).rO(L(457)), rM.rR(new rQ(aP.aQ.data[5])), kI.push(rM), (rM = new rN).rO(L(458)), rM.rR(new a2P(aP.aQ.data[13], L(459))), rM
		.rR(new a2P(aP.aQ.data[14], L(460))), kI.push(rM), rH = new rJ(aC.cQ, kI)
}

function eJ() {
	this.jh = function() {
		for (var cE, a3 = i8.j6, e8 = i8.j5, x0 = fz.x0, aPm = this.aMD(), a5 = 0; a5 < a3; a5++) cE = e8[a5], ar.d1.lp(cE) || (x0[cE] = aPm);
		var rr = fz.rr,
			a9e = fz.a9e,
			a9f = fz.a9f,
			a9g = fz.a9g,
			a3 = bq.fx;
		for (a5 = 0; a5 < a3; a5++)(0 === a9g[a5] || a9f[a5] < 1 || 2 * rr[a5] > 3 * (a9e[a5] + a9f[a5])) && (x0[a5] = 0);
		var jW = 0;
		for (a5 = 0; a5 < a3; a5++) jW += 0 < x0[a5];
		return jW
	}, this.aMD = function() {
		return Math.min(65535, k.mF())
	}
}

function aRH() {
	"function" != typeof Math.log2 && (Math.log2 = function(ag) {
		return Math.log(ag) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(ag) {
		return Math.log(ag) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(ag) {
		return 0 < ag ? 1 : ag < 0 ? -1 : 0
	})
}

function wl() {
	var yM, z2, z3, kI;

	function z4() {
		z6(), 2 !== bq.data.sResourcesType && (bq.data.sResourcesData = null), aM.wq()[19] = null, aM.rI()
	}

	function z6() {
		2 === bq.data.sResourcesType && ar.t4.z7(z3.yX(), bq.data.sResourcesData, 2047)
	}
	this.show = function() {
		yM.show(), this.resize()
	}, this.aR = function() {
		yM.aR()
	}, this.resize = function() {
		yM.resize(), z2.resize()
	}, this.b6 = function(aV) {
		2 === aV && yM.b7[0].b8()
	}, yM = new aK(L(373), [new aL("⬅️ " + L(1), z4)]), z2 = new rJ(yM.cQ, (function(kI) {
		var rM = new rN;
		rM.rO(L(47)), rM.zB(new zC({
			xx: [L(48), L(49), L(50)],
			value: bq.data.sResourcesType
		}, function(b4) {
			z6(), 2 !== b4 || bq.data.sResourcesData || (bq.data.sResourcesData = new Uint16Array(bq.g7)), bq.data.sResourcesType = b4, aM.iZ(28)
		})), kI.push(rM)
	}(kI = []), function(kI) {
		var rM;
		1 === bq.data.sResourcesType && ((rM = new rN).rO("Value"), rM.rR(new rQ({
			b4: -1,
			value: bq.data.sResourcesValue
		}, 1, 0, function(cb) {
			var value = z.ax(Math.floor(cb.target.value), 0, 2047);
			cb.target.value = bq.data.sResourcesValue = value
		})), kI.push(rM))
	}(kI), function(kI) {
		var rM;
		2 === bq.data.sResourcesType && ((rM = new rN).rO("Data"), (z3 = new yR(0, 1, 0, 1)).yU(ar.d5.zD(bq.data.sResourcesData, 2)), rM.rR(z3), kI.push(rM))
	}(kI), kI))
}

function ho() {
	this.jG = function(player, js) {
		i6.aNx(player, i2.o6(js), i2.o8(js)) && (k.l = !0), bq.hR && this.c()
	}, this.c = function() {
		bq.cp = !1;
		for (var a5 = 0; a5 < bq.fx; a5++) 0 !== fz.iN[a5] && 0 === fz.lJ[a5] && i6.aO1(a5);
		0 !== fz.iN[bq.d3] ? (hw.a2D[7] = fz.lJ[bq.d3], hw.a2D[8] = fz.lQ[bq.d3], bw.dB(), by.aUP(), bq.cq || iL.a1A(fz.lR[bq.d3] - 5, fz.lS[bq.d3] - 5, fz.lU[bq.d3] + 5, fz.lV[bq.d3] + 5), c6.aJ()) : c4.show(!1, !1, !1, !0), bu.aCG(18), bp.lT(),
			bp.bR(!0), bm.h.vP(), c3.aR(), bq.hY = null, i1.aP8 = !0, i1.aMz(), bq.hR && bE.bF.setState(1)
	}
}

function aHy() {
	this.aPQ = function(dT) {
		dU.dV(39), dU.dW(1, 0), dU.dW(6, 13), dU.dW(14, dX.jq), dU.dW(4, bE.id), dU.dW(7, bE.my), dU.dW(1, +dX.mv), dU.dW(1, +dX.mw), dU.dW(5, (new Date).getHours() % 24), g.h.send(dT, dU.di)
	}, this.aRm = function(dT, aMA, vD) {
		dU.dV(70), dU.dW(1, 0), dU.dW(6, 14), dU.dW(3, vD), dU.dW(30, aMA[0]), dU.dW(30, aMA[1]), g.h.send(dT, dU.di)
	}, this.aIA = function(id) {
		dU.dV(13), dU.dW(1, 0), dU.dW(6, 15), dU.dW(6, id), g.h.send(0, dU.di)
	}, this.tB = function(id, a2) {
		var a3 = Math.min(a2.length, 63);
		dU.dV(19 + 16 * a3), dU.dW(1, 0), dU.dW(6, 26), dU.dW(6, id), dU.dW(6, a3), dn.h6.tM(a2), g.h.send(0, dU.di)
	}, this.aUR = function(uy, qm) {
		dU.dV(7 + 26 * qm.length), dU.dW(1, 0), dU.dW(6, 9);
		for (var a5 = 0; a5 < qm.length; a5++) dU.dW(16, qm[a5][0]), dU.dW(10, qm[a5][1]);
		g.h.send(uy, dU.di)
	}, this.x4 = function(aUS, a05) {
		dU.dV(20), dU.dW(1, 0), dU.dW(6, 19), dU.dW(1, aUS), dU.dW(12, a05), g.h.send(g.h.jP, dU.di)
	}, this.da = function(username) {
		dU.dW(5, username.length), dn.h6.tM(username)
	}
}

function aRL() {
	var canvas, c8, ag, aZ, er, aUT, gap, aUU, fontSize, aUV, ni, aUW, aUX, aUY, aUZ, aUa, aUb, aUc;

	function aUg() {
		c8.clearRect(0, 0, by.af, by.ae), c8.fillStyle = ao.c9, c8.fillRect(0, 0, by.af, by.ae), c8.fillStyle = ao.a4g, gr = 0 < aUa ? aUa : Math.sqrt(aUX[4] / 1e4), c8.fillRect(0, by.ae - er - 1, Math.floor(gr * by.af), er), c8.fillStyle = ao.ap, c8
			.fillRect(0, 0, by.af, 1), c8.fillRect(0, 0, 1, by.ae), c8.fillRect(by.af - 1, 0, 1, by.ae), c8.fillRect(0, by.ae - 1, by.af, 1), c8.fillRect(0, by.ae - er - 1, by.af, 1);
		for (var gr, aUh, dO = 0, a5 = 0; a5 < aUW.length; a5++) aUY[a5] ? (ar.at.textAlign(c8, 0), aUh = Math.floor((aUT - er + 2 * aUU) * (a5 - dO + 1) / (aUW.length + 1) - .7 * aUU), c8.fillText(aUW[a5], gap, aUh), ar.at.textAlign(c8, 2), 5 ===
			a5 && 0 !== fz.iN[bq.d3] && fz.lQ[bq.d3] >= hr.aJX(bq.d3) ? (c8.fillStyle = ao.a56, c8.fillText(aUe(a5), by.af - gap, aUh), c8.fillStyle = ao.ap) : c8.fillText(aUe(a5), by.af - gap, aUh)) : dO++
	}

	function aUe(a5) {
		return a5 < 3 ? aUX[a5].toString() : 3 === a5 || 4 === a5 || 5 === a5 ? ar.d5.d7(aUX[a5] / 100, 2) : a5 < 7 ? ar.d5.d6(aUX[a5]) : a5 === 7 ? by.a2a(aUX[7]) : a5 === 8 ? __fx.utils.getMaxTroops(fz.lJ, bq.d3) : __fx.utils.getDensity(bq.d3)
	}

	function aUd() {
		fz.lJ[bq.d3] !== aUX[6] && (aUX[6] = fz.lJ[bq.d3], aUV++)
	}
	this.aJ = function() {
		aUa = aUb = 0, (ni = new Array(8))[0] = L(464), ni[1] = bq.hR ? L(465) : L(466), ni[2] = L(467), ni[3] = L(468), ni[4] = L(126), ni[5] = L(250, 0, "Interest"), ni[6] = L(249), ni[7] = L(469),
			ni.push("Max Troops", "Density"), // add ni
			(aUW = new Array(ni.length)).fill(""), (aUX = new Array(ni.length))[0] = bq.hR ? 0 : bq.fx, aUX[1] = bq.hR ? i8.j6 : bq.hM, aUX[2] = bq.hN, aUX[3] = 0, aUX[4] = z.a0(1e4 * fz.lJ[0], Math.max(bq.hS, 1)), aUX[5] = 0 === bq.data
			.iIncomeType ? 700 : 1 === bq.data.iIncomeType ? z.a0(700 * bq.data.iIncomeValue, 64) : z.a0(700 * bq.data.iIncomeData[bq.d3], 64), aUX[6] = 0, aUd(), aUX[7] = 0, aUZ = aUe(6), aUY = new Array(ni.length);
		for (var a5 = ni.length - 1; 0 <= a5; a5--) aUY[a5] = !0;
		aUc = 0, aUc = bq.hR ? (aUY[0] = !1, aUY[2] = !1, aUY[3] = !1, 3) : (aUY[3] = !1, 1), aUV = 0, this.resize()
	}, this.resize = function() {
		this.af = Math.floor((bE.bF.bG() ? .1646 : .126) * 1.25 * f.bH), this.ae = Math.floor(1.18 * this.af), er = Math.floor(.04 * this.af), gap = Math.floor(.035 * this.af), aUU = .04 * this.af, aUT = this.ae, this.ae -= Math.floor(aUc * (this
			.ae - 2 * er) / ni.length), fontSize = Math.floor(.7 * (aUT - er) / ni.length);
		var cl = ar.at.au(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.af, canvas.height = this.ae,
			function(cl, af) {
				for (var a5 = 0; a5 < aUW.length; a5++) aUW[a5] = ar.c8.aCO(ni[a5], cl, af)
			}((c8 = canvas.getContext("2d", {
				alpha: !0
			})).font = cl, .575 * this.af), ar.at.textBaseline(c8, 1), c8.lineWidth = 1, this.aUP(), this.cr(), c0.cr(), aUg()
	}, this.cr = function() {
		ag = f.af - this.af - ab.gap
	}, this.aME = function() {
		aZ = ab.gap
	}, this.aUP = function() {
		aZ = ab.gap + (c0.uL() && 0 !== fz.iN[bq.d3] && !bq.cp ? c0.ae + ab.gap : 0)
	}, this.bR = function(ld) {
		(ld || 100 <= aUV) && (aUV = 0, aUg())
	}, this.pw = function() {
		return aUX[7]
	}, this.a2a = function(value) {
		var ei = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * ei) / 1e3);
		return value < 10 ? ei + ":0" + value : ei + ":" + value
	}, this.c = function() {
		var nv, per;
		aUY[0] && bq.hL - bq.hN !== aUX[0] && (aUX[0] = bq.hL - bq.hN, aUV++), i8.j6 - aUX[0] !== aUX[1] && (aUX[1] = i8.j6 - aUX[0], aUV++), this.aSn(), (nv = hr.nx(bq.d3)) !== aUX[5] && (aUX[5] = nv, aUV++), aUd(), aUX[7] += k.a5h, nv = aUe(7),
			aUZ !== nv && (aUZ = nv, aUV += 100), nv = bq.hU ? bs.wJ() : fz.lJ[vo[0]], per = z.a0(1e4 * nv, Math.max(bq.hS, 1)), aUX[3] = nv, aUX[4] !== per && (aUV++, aUX[4] = per), 8 === bq.fs && function() {
				for (var a5 = 0; a5 < 2; a5++)
					if (!ar.d1.q6(a5)) return hl.aDS.aB6(), 1;
				return
			}() || aUX[3] < bq.hS || ! function() {
				for (var a5 = i8.j6 - 1; 0 <= a5; a5--)
					if (0 < fz.jF[i8.j5[a5]].length) return;
				return 1
			}() || hl.aDS.aB6()
	}, this.aSn = function() {
		aUY[2] && bq.hN !== aUX[2] && (aUX[2] = bq.hN, aUV++)
	}, this.a5p = function(a5) {
		var am, aUq, dO;
		return 2 !== bq.dM && (a5 % 2 == 1 && (bv.bR(1, 1), k.l = !0), a5 === bq.hb ? (aUa = 0, aUg(), !1) : (-1 !== a5 || 0 !== aUb) && (aUq = aUa, aUa = bq.cq ? a5 / bq.hb : (dO = performance.now(), 0 <= a5 && (am = dO - 392 * a5, aUb = 0 ===
			a5 || am < aUb ? am : aUb), 1 < (aUa = (dO - aUb) / (392 * bq.hb)) ? 1 : aUa), aUg(), aUa !== aUq))
	}, this.n = function() {
		ah.drawImage(canvas, ag, aZ)
	}
}

function aUG() {
	this.a0K = null, this.a0L = null, this.a0M = null, this.a0N = null, this.a0O = null, this.a0P = null, this.iR = "";
	var aUr = 0;
	this.aJ = function() {
		this.a0K = [], this.a0L = [], this.a0M = [], this.a0N = [], this.a0O = [0], this.a0P = [0], aUr = 0, this.iR = ""
	}, this.rj = function(id, wB, wC, nh) {
		bq.cq || 2 === bq.dM || (0 === this.a0O[aUr] && (this.a0P[aUr] ? (this.a0O.push(1), this.a0P.push(0), aUr++) : this.a0O[aUr] = 1), this.a0K.push(id), this.a0L.push(wB), this.a0M.push(void 0 === wC ? 0 : wC), this.a0N.push(void 0 === nh ?
			0 : nh), this.a0P[aUr]++)
	}, this.c = function() {
		0 === this.a0O[aUr] ? this.a0P[aUr]++ : (this.a0O.push(0), this.a0P.push(0), aUr++)
	}
}

function yF(fp, an) {
	return 0 <= fp ? z.a0(fp, an) : -z.a0(-fp, an)
}

function aUs(y) {
	return y * y
}

function ee(fp, an) {
	return an < fp ? fp : an
}

function z1(fp, an) {
	return fp < an ? fp : an
}

function nS(fp, y, an) {
	return y < fp ? fp : an < y ? an : y
}

function aUt(y, a3) {
	for (var aV = z.a0(y + 1, 2), a5 = 0; a5 < a3; a5++) aV = z.a0(aV + z.a0(y, aV), 2);
	return aV
}

function aT3(y, a3) {
	return y < 1 ? 0 : aUt(y, a3)
}

function a66(gE, ex, cG, d0, li, lj, cH, z0) {
	return !(gE + cG <= li || ex + d0 <= lj || li + cH <= gE || lj + z0 <= ex)
}

function a65(gE, ex, cG, d0, li, lj, cH, z0) {
	return gE <= li && ex <= lj && li + cH <= gE + cG && lj + z0 <= ex + d0
}

function aMW(y) {
	return Math.floor(!!y * (1 + Math.log2(y + .5)))
}

function aKg() {
	for (var ag, aZ, a5 = aHV - 1; 0 <= a5; a5--) ag = z.a0(aHX[a5], 4) % bh.ma, aZ = z.a0(aHX[a5], 4 * bh.ma), fz.lR[aHQ] = Math.min(ag, fz.lR[aHQ]), fz.lS[aHQ] = Math.min(aZ, fz.lS[aHQ]), fz.lU[aHQ] = Math.max(ag, fz.lU[aHQ]), fz.lV[aHQ] = Math
		.max(aZ, fz.lV[aHQ])
}

function aHg() {
	var iy, cE, a5, a3 = fz.jF[aHQ].length,
		ix = hy.ix;
	loop: for (a5 = a3 - 1; 0 <= a5; a5--) {
		for (iy = 3; 0 <= iy; iy--)
			if (cE = fz.jF[aHQ][a5] + ix[iy], hy.j1(cE) || hy.qE(cE) && hy.oN(cE) !== aHQ) {
				hy.a44(fz.jF[aHQ][a5], aHQ);
				continue loop
			} fz.jF[aHQ][a5] = fz.jF[aHQ][a3 - 1], fz.jF[aHQ].pop(), a3--
	}
}

function aHh() {
	var player = aHQ,
		rD = fz.rD,
		oH = fz.oH,
		ik = fz.ik,
		a3 = rD[player].length,
		ix = hy.ix;
	loop: for (var a5 = a3 - 1; 0 <= a5; a5--) {
		for (var aUu = !1, aUv = !1, iy = 3; 0 <= iy; iy--) {
			var cE = rD[player][a5] + ix[iy];
			if (hy.a3q(cE, player)) continue loop;
			aUu = aUu || hy.qK(cE), aUv = aUv || hy.a3n(cE)
		}
		aUu ? oH[player].push(rD[player][a5]) : aUv ? ik[player].push(rD[player][a5]) : hy.a42(rD[player][a5], player), rD[player][a5] = rD[player][a3 - 1], rD[player].pop(), a3--
	}
}

function aKa() {
	fz.lJ[aHU] -= aHV
}

function aKb(border) {
	for (var a3 = border.length, a5 = a3 - 1; 0 <= a5; a5--) hy.mZ(aHU, border[a5]) || (border[a5] = border[a3 - 1], border.pop(), a3--)
}

function aKc(border) {
	for (var a3 = border.length, a5 = a3 - 1; 0 <= a5; a5--) !hy.mZ(aHU, border[a5]) && hy.q7(border[a5]) && (border[a5] = border[a3 - 1], border.pop(), a3--)
}

function aKd(border) {
	for (var iy, cE, a3 = border.length, ix = hy.ix, a5 = a3 - 1; 0 <= a5; a5--)
		for (iy = 3; 0 <= iy; iy--)
			if (cE = border[a5] + ix[iy], hy.a3q(cE, aHU)) {
				fz.rD[aHU].push(border[a5]), border[a5] = border[a3 - 1], border.pop(), a3--;
				break
			}
}

function aKe() {
	for (var iy, cE, ix = hy.ix, a5 = aHV - 1; 0 <= a5; a5--)
		for (iy = 3; 0 <= iy; iy--) cE = aHX[a5] + ix[iy], hy.a3s(aHU, cE) && hy.a3t(cE) && (fz.rD[aHU].push(cE), hy.a43(cE, aHU))
}

function aKf() {
	var ag, aZ;
	loop: for (; fz.lS[aHU] < fz.lV[aHU];) {
		for (ag = fz.lU[aHU]; ag >= fz.lR[aHU]; ag--)
			if (hy.mZ(aHU, 4 * (fz.lS[aHU] * bh.ma + ag))) break loop;
		fz.lS[aHU]++
	}
	loop: for (; fz.lS[aHU] < fz.lV[aHU];) {
		for (ag = fz.lU[aHU]; ag >= fz.lR[aHU]; ag--)
			if (hy.mZ(aHU, 4 * (fz.lV[aHU] * bh.ma + ag))) break loop;
		fz.lV[aHU]--
	}
	loop: for (; fz.lR[aHU] < fz.lU[aHU];) {
		for (aZ = fz.lV[aHU]; aZ >= fz.lS[aHU]; aZ--)
			if (hy.mZ(aHU, 4 * (aZ * bh.ma + fz.lR[aHU]))) break loop;
		fz.lR[aHU]++
	}
	loop: for (; fz.lR[aHU] < fz.lU[aHU];) {
		for (aZ = fz.lV[aHU]; aZ >= fz.lS[aHU]; aZ--)
			if (hy.mZ(aHU, 4 * (aZ * bh.ma + fz.lU[aHU]))) break loop;
		fz.lU[aHU]--
	}
}

function jA(player, ju) {
	return 0 === hv.va[player] || hv.va[player] !== hv.va[ju]
}

function qM(player, ju) {
	for (var cb, aUw = iG.r3(player), a5 = 0; a5 < aUw; a5++)
		if (0 === iG.uH(player, a5))
			if ((cb = iG.r8(player, a5)) === bq.g7) {
				if (ju === bq.g7) return !1;
				if (qL(ju)) return !0
			} else if (ar.d1.vu(cb))
		if (ju === bq.g7) {
			if (qL(cb)) return !0
		} else if (qP(ju, cb)) return !0;
	return !1
}

function qL(player) {
	for (var a5, j7, a3 = fz.rD[player].length, ix = hy.ix, iy = 3; 0 <= iy; iy--)
		for (j7 = ix[iy], a5 = 0; a5 < a3; a5++)
			if (hy.j1(fz.rD[player][a5] + j7)) return !0;
	return !1
}

function a9r(player) {
	for (var a5, j7, a3 = fz.rD[player].length, ix = hy.ix, iy = 3; 0 <= iy; iy--)
		for (j7 = ix[iy], a5 = 0; a5 < a3; a5++)
			if (hy.a3u(fz.rD[player][a5]) && hy.j1(fz.rD[player][a5] + j7)) return !0;
	return !1
}

function qP(vw, vx) {
	for (var a5, dO, j7, cE, zI = fz.rD[vw].length, zJ = fz.rD[vx].length, ix = (zJ < zI && (dO = vw, vw = vx, vx = dO, dO = zI, zI = zJ, 0), hy.ix), iy = 3; 0 <= iy; iy--)
		for (j7 = ix[iy], a5 = 0; a5 < zI; a5++)
			if (cE = fz.rD[vw][a5] + j7, hy.qE(cE) && hy.oN(cE) === vx) return !0;
	return !1
}

function a9s(vw, vx) {
	for (var a5, j7, cE, zI = fz.rD[vw].length, ix = hy.ix, iy = 3; 0 <= iy; iy--)
		for (j7 = ix[iy], a5 = 0; a5 < zI; a5++)
			if (hy.a3u(fz.rD[vw][a5]) && (cE = fz.rD[vw][a5] + j7, hy.qE(cE)) && hy.oN(cE) === vx) return !0;
	return !1
}

function aRY() {
	this.cu = function() {
		return bE.bF.bG() ? 2 : 1
	}
}

function aRM() {
	var ci, aUx, af, ae, d0, aUy, aUz, a79, canvas, a13, aV0;

	function bl() {
		return Math.floor((f.af - af) / 2) < bw.ae + 2 * ab.gap ? f.ae - ae - 4 * ab.gap - bw.ae : f.ae - ae - 2 * ab.gap
	}
	this.aJ = function() {
		aV0 = ci = !1, d0 = .61, aUy = .07, aUz = .09, a13 = a79 = ae = 0
	}, this.resize = function() {
		var c8, gE, aV, aV4, aV5, m2;
		ci && (af = z1(af = bE.bF.bG() ? Math.floor(.69 * f.bH) : Math.floor(.5 * f.bH), ee(f.af - 2 * ab.gap, 10)), af = z1(af, Math.floor(3.57 * ee(f.ae - 2 * ab.gap, 3))), ae = Math.floor(.28 * af), (canvas = document.createElement("canvas"))
			.width = af, canvas.height = ae, c8 = canvas.getContext("2d", {
				alpha: !0
			}), gE = Math.floor(1 + ae / 40), c8.clearRect(0, 0, af, ae), c8.fillStyle = ao.c9, c8.fillRect(gE, gE, af - 2 * gE, ae - 2 * gE), c8.lineJoin = "bevel", c8.lineWidth = 2 * gE, c8.strokeStyle = ao.ap, c8.strokeRect(gE, gE, af -
				2 * gE, ae - 2 * gE), c8.imageSmoothingEnabled = !1, aV = gW.get(aUx), aV4 = aV.width, m2 = (1 === aUx ? .85 : 21 === aUx ? .666 : .9) * d0 * ae / (aV5 = aV.height), c8.setTransform(m2, 0, 0, m2, Math.floor((af - m2 * aV4) /
				2), Math.floor((ae - m2 * aV5) / 2)), c8.drawImage(aV, 0, 0), c8.setTransform(1, 0, 0, 1, Math.floor(af - aUz * ae - aUy * ae - gE), Math.floor(gE + aUy * ae)),
			function(c8, a3) {
				c8.lineWidth = Math.floor(1 + ae / 80), c8.strokeStyle = ao.ap, c8.beginPath(), c8.moveTo(0, 0), c8.lineTo(a3, a3), c8.moveTo(0, a3), c8.lineTo(a3, 0), c8.stroke()
			}(c8, Math.floor(aUz * ae)), c8.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(y, aV2, aPk, aV3) {
		ci || aV3 && aV0 || (aUx = aPk ? 21 : y ? 1 : 2, ci = aV0 = !0, this.resize(), c3.aR(), bw.dC(), a13 = k.e6, a79 = aV2 ? 1 : 0)
	}, this.c = function() {
		!ci || 1 <= a79 || (a79 = 1 < (a79 += 5e-4 * (k.e6 - a13)) ? 1 : a79, a13 = k.e6, k.l = !0)
	}, this.ay = function(ag, aZ) {
		return !(!ci || a79 <= 0 || (ag -= Math.floor((f.af - af) / 2), aZ -= bl(), ag < 0) || aZ < 0 || af < ag || ae < aZ || (af - ae / 3 < ag && aZ < ae / 3 && (ci = !1, k.l = !0), 0))
	}, this.n = function() {
		!ci || a79 <= 0 || (ah.globalAlpha = a79, ah.drawImage(canvas, Math.floor((f.af - af) / 2), bl()), ah.globalAlpha = 1)
	}
}

function aRW() {
	this.jc = new aFu, this.zS = new sQ, this.ba = new xC, this.h = new zE, this.os = new aV7, this.qA = new aBL, this.zK = new a8B, this.aIT = new aQZ, this.s4 = new aAI, this.aV8 = new tY, this.aJ = function() {
		this.ba.aJ(), this.h.aJ(), this.os.aJ(), this.qA.aJ(), this.aV8.aJ()
	}, this.n = function() {
		this.aV8.n(), this.ba.n()
	}
}

function aRI() {
	this.a0 = function(fp, an) {
		return Math.floor((fp + .5) / an)
	}, this.aV9 = function(fp, an) {
		return Math.floor(fp * (an + .5))
	}, this.sqrt = function(y) {
		return ~~Math.sqrt(y + .5)
	}, this.pow = function(cb) {
		return Math.floor(Math.pow(2, cb) + .5)
	}, this.ax = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aVA = function(wB, wC, nh) {
		return Math.max(Math.min(wB, wC), nh)
	}, this.aVB = function(aVC, aVD, ag, aZ) {
		ag -= aVC, aVC = aZ - aVD, aZ = 0;
		return 0 == ag ? aZ = 0 <= aVC ? Math.PI : 0 : (aZ = Math.atan(aVC / ag), aZ += 0 < ag ? .5 * Math.PI : 1.5 * Math.PI), aZ
	}, this.log2 = function(y) {
		return Math.floor(!!y * (1 + Math.log2(y + .5)))
	}, this.log10 = function(y) {
		return Math.floor(Math.log10(y + .5))
	}, this.aG3 = function(xR, xS, aVF, aVG, aVH) {
		return aVF - aVH < xR && xR < aVF + aVH && aVG - aVH < xS && xS < aVG + aVH
	}, this.pO = function(o5, o7) {
		return o5 * o5 + o7 * o7
	}
}

function aV7() {
	this.aVI = 32, this.ag = 0, this.aZ = 0, this.ot = 0, this.aVJ = 0, this.aVK = 4, this.os = null, this.zm = new Int16Array(9), this.aJ = function() {
		this.ot = 1 + z.a0(bh.ma - 1, this.aVI), this.aVJ = 1 + z.a0(bh.oi - 1, this.aVI), this.os = new Array(this.ot * this.aVJ), ar.t4.aLY(this.os);
		var ag, aZ, zm = this.zm,
			af = this.ot;
		for (ag = -1; ag <= 1; ag++)
			for (aZ = -1; aZ <= 1; aZ++) zm[3 * (1 + aZ) + 1 + ag] = aZ * af + ag
	}, this.s9 = function(aVM, a5) {
		return this.os[a5].push(aVM), this.os[a5].length - 1
	}, this.zd = function(aVN, zH, zT) {
		var aVO, aVP, zH = i2.or(zH),
			zT = i2.or(zT);
		return zH === zT ? aVN : (aVO = this.os[zH].pop(), this.os[zH].length === aVN ? this.s9(aVO, zT) : (aVP = this.os[zH][aVN], this.os[zH][aVN] = aVO, bo.h.sb[aVO] = aVN, this.s9(aVP, zT)))
	}
}

function wm() {
	var aVQ, aEI, aVT, aEH, aEK, aVR = [new Array(4), [], new Array(2), new Array(2)],
		aVS = new Array(4),
		aVU = new Array(2),
		aVV = [L(180), L(89), L(470), L(471)];

	function aRu() {
		var bK = aVQ.aEU.aF6.cb.value.trim().slice(0, 127);
		bK.length < 1 || (aVQ.aEU.aF6.cb.value = "", qd.xh.ja(bK))
	}

	function aVY(aVa) {
		qd.h.qh[3] = 1 - qd.h.qh[3], aVZ(3, 1, qd.h.qh[3]), aVa && g.aHx.dj(4), qd.h.qh[3] && aP.aS.aT(158, qd.h.qh[0])
	}

	function aVW(fp, an) {
		qd.h.qh[fp] !== an && (0 === fp && qd.h.qh[3] && aVY(0), aVZ(fp, qd.h.qh[fp], 0), aVZ(fp, an, 1), qd.h.qh[fp] = an, 0 === fp ? (g.aHx.dj(2, an), qd.h.qh[2] ? (aVQ.aEW.nH(), aVQ.aEU.bU(1)) : aVQ.aEU.bU(0), aM.fR().aAC(), aM.fR().aAB()) : 2 ===
			fp && (0 === an ? (g.aHx.dj(0), aVQ.aEU.nH(), aVQ.aEb()) : (g.aHx.dj(1), aVQ.aEW.nH(), aVQ.aEc())))
	}

	function aVZ(fp, an, color) {
		aVQ.aEX[fp].bD[an].e0(color ? ao.nb : ao.a5L)
	}

	function aVd(jK) {
		return jK < 7 ? jK + 2 + " " + L(478) : 7 === jK || 10 === jK ? L(89) + " (Full-Sending: " + L(7 === jK ? 479 : 480) + ")" : 8 === jK ? "1v1" : L(481)
	}

	function aVe(y) {
		var fd = z.a0(y, 60),
			y = y % 60;
		return (fd < 10 ? "0" : "") + fd + ":" + (y < 10 ? "0" : "") + y
	}
	this.aMM = function() {
		return aVQ.aEU
	}, this.xh = function(dr) {
		aVW(2, 0);
		var a2 = aVQ.aEU.aF6.cb.value,
			dr = "@" + dr + " ";
		a2.length && !ar.d5.a7y(a2, " ") && (dr = " " + dr), aVQ.aEU.aF6.cb.value = a2 += dr, aVQ.aEU.aF6.cb.focus()
	}, this.aAA = function() {
		aVQ.aEW.nH()
	}, this.aAC = function() {
		var aVc = qd.h.qh[0],
			aVc = qd.h.aA2[aVc];
		bh.dV(aVc.ig, aVc.mapSeed), aEI.bD[0].button.textContent = L(353) + ": " + bh.a7J.p0[aVc.ig].name, aEI.bD[1].button.textContent = L(369, 0, "Mode") + ": " + aVd(aVc.jK), aEI.bD[2].button.textContent = L(475) + ": " + bh.a7J.p0[aVc.jL]
			.name, aEI.bD[3].button.textContent = L(476, 0, "Next Mode") + ": " + aVd(aVc.jM), aEI.bD[4].button.textContent = L(477) + ": " + aVe(aVc.jO), aEI.resize()
	}, this.aAB = function() {
		var aVc = qd.h.qh[0],
			aAE = qd.h.aA2[aVc];
		aVQ.aEa(aAE.jJ);
		for (var a5 = 0; a5 < qd.qi.qj.length; a5++) aVR[0][a5].qo.textContent = "" + qd.qi.qj[a5].length;
		var qi = qd.qi.qj[aVc],
			aVf = qi.length,
			aVg = qd.qi.qk[aVc];
		aVR[2][1].qo.textContent = "" + aVf, aVR[3][1].qo.textContent = "" + aVg, aEI.bD[4].button.textContent = L(477) + ": " + aVe(aAE.jO);
		for (a5 = 0; a5 < 4; a5++) {
			var aVh = qd.h.aA2[a5];
			aVS[a5] ? 0 === aVh.jJ && (aVS[a5].qo.textContent = bh.a7J.p0[aVh.ig].name) : aVS[a5] = new aBP(bh.a7J.p0[aVh.ig].name, aEH.bD[a5].button, 1, 1), ar.d5.startsWith(aVV[a5], "🏆 ") ? aVh.jN || (aVV[a5] = aVV[a5].substring(3), aEH.bD[a5]
				.button.textContent = aVV[a5], aEH.bD[a5].button.appendChild(aVR[0][a5].qo), aEH.bD[a5].button.appendChild(aVS[a5].qo)) : aVh.jN && (aVV[a5] = "🏆 " + aVV[a5], aEH.bD[a5].button.textContent = aVV[a5], aEH.bD[a5].button
				.appendChild(aVR[0][a5].qo), aEH.bD[a5].button.appendChild(aVS[a5].qo))
		}
		var aAE = "",
			aVj = "";
		0 === aVc && (aAE = qd.nu.aIi(qi, 0, aVf), aVj = qd.nu.aIi(qi, 0, aVg)), aVT[0].qo.textContent = aAE, aVT[1].qo.textContent = aVj, aVU[1].qo.textContent = "MP: " + qd.h.aA4[0] + "   SP: " + qd.h.aA4[1] + "   Lobby: " + ar.t4.aLi(qd.qi.qj)
	}, this.aAH = function() {
		aVQ.aEU.nH()
	}, this.show = function() {
		aVQ.show(), this.resize(), qd.message.show()
	}, this.aR = function() {
		aVQ.aR(), qd.xg.aR(), qd.qe.aR(), qd.message.aR()
	}, this.resize = function() {
		aVQ.resize(1 - qd.h.qh[2]), qd.message.resize()
	}, this.b6 = function(aV) {
		2 === aV ? qd.h.qh[3] ? aVY(1) : aVQ.aEX[3].bD[0].b8() : aV < 2 && aVY(1)
	}, aEH = new dt([new aL(aVV[0], function() {
		return aVW(0, 0), 2
	}), new aL(aVV[1], function() {
		return aVW(0, 1), 2
	}), new aL(aVV[2], function() {
		return aVW(0, 2), 2
	}), new aL(aVV[3], function() {
		return aVW(0, 3), 2
	})], ao.a5L), aEI = new dt([new aL("", 0, 2), new aL("", 0, 2), new aL("", 0, 2), new aL("", 0, 2), new aL("", 0, 2)], ao.a5M, 1);
	var aVX = new dt([new aL(L(472), function() {
		return aVW(2, 0), 2
	}), new aL(L(465), function() {
		return aVW(2, 1), 2
	})], ao.a5L);
	aEK = new dt([new aL(L(473), (__fx.customLobby.setLeaveFunction(() => {
			aM.mo(), qd.xv(), g.h.aP0(3240), __fx.customLobby.setActive(false), aM.iZ(5, 5)
		}),
		function() {
			aM.mo(), qd.xv(), g.h.aP0(3240), __fx.customLobby.setActive(false), aM.iZ(5, 5)
		})), new aL(L(474), function() {
		return aVY(1), 2
	})], ao.a5L), aVQ = new aEG(aEH, aEI, aVX, aEK, aRu, qd.xg.a96);
	for (var a5 = 0; a5 < 4; a5++) aVR[0][a5] = new aBP("0", aEH.bD[a5].button);
	aVR[2][1] = new aBP("0", aVX.bD[1].button), aVR[3][1] = new aBP("0", aEK.bD[1].button), aVT = [new aBP("", aVX.bD[1].button, 1, 1), new aBP("", aEK.bD[1].button, 1, 1)], aVZ(0, qd.h.qh[0], 1), aVZ(2, qd.h.qh[2], 1), (aVU = [new aBP(L(147), aVQ
		.aEd(), 1, 0), new aBP("", aVQ.aEd(), 1, 1)])[0].qo.style.fontSize = "0.4em", aVU[1].qo.style.fontSize = "0.4em"
}

function aCm() {
	this.go = function(gb, player) {
		bu.gn(bq.d3, player, gb), g.v0.k6(gb, player)
	}, this.q1 = function(player) {
		bu.vH(player, 0), g.v0.k9(player)
	}, this.pt = function(pb, player) {
		bu.aCY(pb, player), g.v0.kB(pb, player)
	}, this.jj = function() {
		bq.hR || bq.cq || g.aHz.jj()
	}
}

function aRK() {
	var cl, af, aZ, aVk, aVl, canvas, c8, cm, nw, aVm, aVn, aVo, aVp;
	this.ag = 0, this.ae = 0, this.aJ = function() {
		aVl = bq.hJ, aVn = "rgba(0,100,0,0.8)", aVo = "rgba(150,0,0,0.8)", cm = aVm = !0, nw = fz.lQ[bq.d3], this.resize()
	}, this.resize = function() {
		af = Math.floor((bE.bF.bG() ? .305 : .24) * f.bH), this.ae = Math.floor(.5 + .13 * af), af = Math.floor(6 * this.ae), cl = ar.at.au(1, Math.floor(.8 * this.ae)), aVp = Math.floor(.5 * this.ae), bh.tm.font = cl, aZ = ab.gap, aVk = Math
			.floor(1 + .13 * this.ae), (canvas = document.createElement("canvas")).width = af, canvas.height = this.ae, (c8 = canvas.getContext("2d", {
				alpha: !0
			})).font = cl, ar.at.textBaseline(c8, 1), ar.at.textAlign(c8, 1), this.aVq()
	}, this.uL = function() {
		return bE.bF.bG() && f.af < 1.2 * f.ae
	}, this.cr = function() {
		this.uL() ? this.ag = f.af - af - ab.gap : this.ag = Math.floor(bv.aGc() + (f.af - bv.aGc() - by.af - af) / 2 - .5 * ab.gap)
	}, this.bR = function() {
		cm && (cm = !1, this.aVq())
	}, this.aVq = function() {
		c8.clearRect(0, 0, af, this.ae), c8.fillStyle = aVm ? aVn : aVo, c8.fillRect(0, 0, af, this.ae), c8.fillStyle = ao.ep, this.aVr(), this.aVs(), c8.fillStyle = fz.lQ[bq.d3] >= hr.aJX(bq.d3) ? ao.a4q : ao.ap, c8.fillText(ar.d5.d6(nw), Math
			.floor(af / 2), aVp), c8.fillStyle = ao.ap, c8.fillRect(0, 0, af, 1), c8.fillRect(0, 0, 1, this.ae), c8.fillRect(0, this.ae - 1, af, 1), c8.fillRect(af - 1, 0, 1, this.ae)
	}, this.aVr = function() {
		var aV = k.mF() % 100,
			aV = (aV = 9 - z.a0(aV -= aV % 10, 10), Math.floor(aV * (this.ae - aVk) / 9));
		c8.fillRect(0, aV, aVk, this.ae - aV), c8.fillRect(af - aVk, aV, aVk, this.ae - aV)
	}, this.aVs = function() {
		c8.fillRect(aVk, this.ae - aVk, Math.floor((af - 2 * aVk) * fz.lQ[bq.d3] / aVl), aVk)
	}, this.c = function() {
		var cE = bq.d3;
		ar.d1.q6(cE) && (cE = fz.lQ[cE] - fz.w0[cE], nw !== cE ? (aVl = ee(cE, aVl), aVm = nw < cE && 10 <= cE, nw = cE, cm = !0) : k.mF() % 10 == 9 && (cm = !0))
	}, this.n = function() {
		0 === fz.iN[bq.d3] || bq.cp || 2 === fz.lq[bq.d3] || ah.drawImage(canvas, this.ag, aZ)
	}
}

function aTo() {
	this.c = function(player) {
		var js = function(player) {
			var a3 = i3.iv.iw;
			if (0 === a3) return -1;
			for (var ei = Math.min(a3, i3.performance.a83 ? a3 : 10), aQ = i3.iv.aQ, mV = z.a0(g1.random() * a3, g1.value(100)), cb = mV + ei, az = g1.oy(fz.lR[player], fz.lU[player]), b0 = g1.oy(fz.lS[player], fz.lV[player]), pi = -1, vT =
					i2.oY(0, 0, bh.ma, bh.oi), a5 = mV; a5 < cb; a5++) {
				var j7 = a5 % a3,
					aVu = i2.oL(az, b0, aQ[j7]);
				aVu < vT && (vT = aVu, pi = j7)
			}
			return -1 !== pi ? aQ[pi] : -1
		}(player);
		return -1 !== js && bo.s4.s5(player, js)
	}
}

function aRQ() {
	var y, af, ae, max, aVv, pD, aVx, aVy, aVz, aW0, aW1, aW2, aW3, aW4, aVw = 1e4;

	function aWB(aWA, pC, a3) {
		var a5;
		for (aVx[0] = aWA, a5 = 1; a5 < a3; a5++) aVx[a5] = aVx[a5 - 1] + pC, pC = aVx[a5] >= aVw ? (aVx[a5] = aVw - 1, -pC) : aVx[a5] < 0 ? (aVx[a5] = 0, -pC) : (pC += 16384 <= g1.random() ? pD : -pD) < -aVv ? -aVv : aVv < pC ? aVv : pC
	}

	function aWD(ag, aZ, aWE, a3) {
		(aWE ? function(ag, aZ, a3) {
			var a5;
			for (a5 = 0; a5 < a3; a5++) y[aZ * af + ag + a5] = aVx[a5]
		} : function(ag, aZ, a3) {
			var a5;
			for (a5 = 0; a5 < a3; a5++) y[aZ * af + ag + a5 * af] = aVx[a5]
		})(ag, aZ, a3)
	}

	function aWH(value, a3) {
		var a5, mW, gr, oC = value - aVx[a3 - 1];
		if (0 != oC) {
			for (mW = 1 + z.a0(Math.abs(oC), a3 - 1), mW = oC < 0 ? -mW : mW, aVx[a3 - 1] = value, gr = (gr = a3 - 1 - z.a0(Math.abs(oC), Math.abs(mW))) < 1 ? 1 : a3 - 2 < gr ? a3 - 2 : gr, a5 = a3 - 2; gr <= a5; a5--) aVx[a5] += oC - (a3 - 1 - a5) *
				mW;
			(oC < 0 ? function(a3) {
				var a5;
				for (a5 = a3 - 2; 1 <= a5; a5--) aVx[a5] < 0 && (aVx[a5] = -aVx[a5] - 1)
			} : function(a3) {
				var a5;
				for (a5 = a3 - 2; 1 <= a5; a5--) aVx[a5] >= aVw && (aVx[a5] = 2 * aVw - aVx[a5] - 1)
			})(a3)
		}
	}

	function aWK(aFc, aFf, a3) {
		for (var a5 = 0; a5 < a3; a5++) aFc[a5] = aFf[a5]
	}

	function aWL(a4) {
		for (var a5 = 0; a5 < a4.length - 1; a5++) a4[a5] = a4[a5 + 1] - a4[a5];
		a4[a4.length - 1] = a4[a4.length - 3]
	}

	function aWM(pn, gap, oB) {
		aVy.push(pn), aVz.push(gap), aW0.push(oB)
	}
	this.dV = function(dl) {
		! function(dl) {
			var a5;
			for (af = dl[0], ae = dl[1], aVv = dl[2], pD = dl[3], y = new Int16Array(af * ae), max = ae < af ? af : ae, aVx = new Int16Array(max), aVy = [], aVz = [], aW0 = [], aW1 = new Array(af), aW2 = new Array(ae), a5 = af - 1; 0 <= a5; a5--)
				aW1[a5] = !1;
			for (a5 = ae - 1; 0 <= a5; a5--) aW2[a5] = !1;
			aW3 = new Int16Array(af), aW4 = new Int16Array(ae)
		}(dl),
		function(a3) {
			var aWA = g1.random() % aVw,
				pC = g1.random() % (2 * aVv + 1) - aVv;
			aWB(aWA, pC, a3)
		}(max), aWK(aW4, aVx, ae), aWD(0, 0, !0, af);
		var ag, aZ, dl = y[0],
			a3 = max,
			pC = g1.random() % (2 * aVv + 1) - aVv;
		for (aWB(dl, pC, a3), aWK(aW3, aVx, af), aWD(0, 0, !1, ae), aWL(aW3), aWL(aW4), aWB(y[af - 1], aW3[af - 1], ae), aWD(af - 1, 0, !1, ae), aWB(y[af * (ae - 1)], aW4[ae - 1], af), aWH(y[af * ae - 1], af), aWD(0, ae - 1, !0, af), aW1[af -
			1] = aW1[0] = !0, aW2[ae - 1] = aW2[0] = !0, aWM(0, af, !0), aWM(0, ae, !1), ! function() {
				var a7e, pn;
				for (;;) {
					if (a7e = function() {
							var a5, a7e = aVy.length - 1;
							for (a5 = a7e - 1; 0 <= a5; a5--) aVz[a5] > aVz[a7e] && (a7e = a5);
							return a7e
						}(), aVz[a7e] < 5) return;
					pn = aVy[a7e] + z.a0(aVz[a7e], 2), (aW0[a7e] ? function(ag) {
						var a3, aWQ, a5, bV = 0,
							aWR = 0;
						for (; aWR < ae - 1;) {
							for (a5 = bV + 1; a5 < ae; a5++)
								if (aW2[a5]) {
									aWR = a5;
									break
								} a3 = aWR - bV + 1, aWB(y[ag + af * bV], 0 === bV ? aW3[ag] : aVx[aWQ - 1] - aVx[aWQ - 2], a3), aWH(y[aWR * af + ag], a3), aWD(ag, bV, !1, a3), aWQ = a3, bV = aWR
						}
						aW1[ag] = !0
					} : function(aZ) {
						var a3, aWQ, a5, bV = 0,
							aWR = 0;
						for (; aWR < af - 1;) {
							for (a5 = bV + 1; a5 < af; a5++)
								if (aW1[a5]) {
									aWR = a5;
									break
								} a3 = aWR - bV + 1, aWB(y[aZ * af + bV], 0 === bV ? aW4[aZ] : aVx[aWQ - 1] - aVx[aWQ - 2], a3), aWH(y[aZ * af + aWR], a3), aWD(bV, aZ, !0, a3), aWQ = a3, bV = aWR
						}
						aW2[aZ] = !0
					})(pn), aWM(pn, aVy[a7e] + aVz[a7e] - pn, aW0[a7e]), aVz[a7e] = pn - aVy[a7e] + 1
				}
			}(), ag = 0; ag < af; ag++)
			if (!aW1[ag])
				for (aZ = 0; aZ < ae; aZ++) aW2[aZ] || ! function(ag, aZ) {
					var value = y[aZ * af + ag - 1] + y[(aZ - 1) * af + ag],
						fi = 2;
					aW1[ag + 1] && (fi++, value += y[aZ * af + ag + 1]);
					aW2[aZ + 1] && (fi++, value += y[(aZ + 1) * af + ag]);
					y[aZ * af + ag] = z.a0(value, fi)
				}(ag, aZ)
	}, this.yE = function() {
		return y
	}, this.aDg = function() {
		y = null
	}
}

function aRa() {
	this.s8 = new a1X
}

function aTp() {
	var aWT, aWV = new Uint16Array(8);

	function aWW(size, player) {
		for (var a5 = fz.jF[player].length - 1; size <= a5; a5--) hy.a44(fz.jF[player][a5], player)
	}
	this.aJ = function() {
		aWT = 0
	}, this.rt = function(player, rn) {
		return j9.rp[1] = fz.jF[player].length, j9.rp[0] === bq.g7 ? i3.rs.aJw(player) : this.aJu(player, j9.rp[0]), (0 !== j9.rp[1] || 0 !== fz.jF[player].length) && !(!rn && j9.rp[1] === fz.jF[player].length || (j9.rp[0] === bq.g7 ? fz.a9e[
			player]++ : fz.a9f[player]++, 0))
	}, this.rw = function(player) {
		bq.hU && (i3.a0p.a0q[player] = 1), aWW(j9.rp[1], player), iG.jG(player, j9.sE[0], j9.rp[0]), iD.jH(player, !1)
	}, this.aJv = function(player, ju, a3, g5) {
		var aWX = z.a0(12 * fz.lQ[player], 1024);
		g5 -= g5 >= z.a0(fz.lQ[player], 2) ? aWX : 0, aWW(a3, player), iG.jG(player, g5, ju), fz.lQ[player] -= g5 + aWX, iD.jH(player, !1)
	}, this.aJu = function(player, ju) {
		for (var oB, ix = hy.ix, a5 = fz.rD[player].length - 1; 0 <= a5; a5--)
			if (hy.a3u(fz.rD[player][a5]))
				for (oB = 3; 0 <= oB; oB--)
					if (hy.qE(fz.rD[player][a5] + ix[oB]) && hy.oN(fz.rD[player][a5] + ix[oB]) === ju) {
						fz.jF[player].push(fz.rD[player][a5]);
						break
					}
	}, this.aJw = function(player) {
		for (var ix = hy.ix, a5 = fz.rD[player].length - 1; 0 <= a5; a5--)
			if (hy.a3u(fz.rD[player][a5]))
				for (var oB = 3; 0 <= oB; oB--)
					if (hy.j1(fz.rD[player][a5] + ix[oB])) {
						fz.jF[player].push(fz.rD[player][a5]);
						break
					}
	}, this.aJd = function(player, aWY) {
		var a5, fp, oB, rF, a3 = fz.rD[player].length,
			oC = 256 <= a3 ? 12 : 32 <= a3 ? 6 : 1,
			mV = a3 - 1 - g1.g2(oC),
			ix = hy.ix;
		aWT = 0;
		loop: for (a5 = mV; 0 <= a5; a5 -= oC)
			for (oB = 3; 0 <= oB; oB--)
				if ((rF = hy.j1(fz.rD[player][a5] + ix[oB]) ? bq.g7 : hy.oN(fz.rD[player][a5] + ix[oB])) === bq.g7 || hy.qE(fz.rD[player][a5] + ix[oB]) && rF !== player && (aWY || jA(player, rF))) {
					for (fp = aWT - 1; 0 <= fp; fp--)
						if (aWV[fp] === rF) continue loop;
					if (aWV[aWT] = rF, 8 <= ++aWT) return !0
				}
		return 0 < aWT
	}, this.aJe = function(player, aWY) {
		var a5, oB, rF, ix = hy.ix;
		for (aWT = 0, a5 = fz.rD[player].length - 1; 0 <= a5; a5--)
			for (oB = 3; 0 <= oB; oB--)
				if ((rF = hy.j1(fz.rD[player][a5] + ix[oB]) ? bq.g7 : hy.oN(fz.rD[player][a5] + ix[oB])) === bq.g7 || hy.qE(fz.rD[player][a5] + ix[oB]) && rF !== player && (aWY || jA(player, rF))) return aWV[aWT++] = rF, !0;
		return !1
	}, this.aJg = function() {
		for (var an, a5 = aWT - 1; 0 <= a5; a5--)
			if (aWV[a5] === bq.g7) {
				for (aWT--, an = a5; an < aWT; an++) aWV[an] = aWV[an + 1];
				return !0
			} return !1
	}, this.aJf = function(player) {
		for (var an, a5 = aWT - 1; 0 <= a5; a5--)
			if (iG.ro(player, aWV[a5]))
				for (aWT--, an = a5; an < aWT; an++) aWV[an] = aWV[an + 1];
		return 0 === aWT
	}, this.aJl = function() {
		for (var a5 = aWT - 1; 0 <= a5; a5--)
			if (ar.d1.lp(aWV[a5])) return !0;
		return !1
	}, this.aJm = function() {
		for (var a5 = aWT - 1; 0 <= a5; a5--) ar.d1.lp(aWV[a5]) || (aWV[a5] = aWV[--aWT]);
		return 0 < aWT
	}, this.aJj = function(player) {
		for (var an, aWZ = aWV[0], aWa = fz.lQ[aWZ] + iG.a1z(aWZ, player), a5 = aWT - 1; 1 <= a5; a5--)(an = fz.lQ[aWV[a5]] + iG.a1z(aWV[a5], player)) < aWa && (aWZ = aWV[a5], aWa = an);
		return aWZ
	}, this.aJo = function(player) {
		var ae, aWb = aWV[0];
		if (1 !== aWT)
			for (var aWc = z.a0(fz.lU[player] + fz.lR[player], 2), aWd = z.a0(fz.lV[player] + fz.lS[player], 2), vT = aUs(aWc - z.a0(fz.lU[aWb] + fz.lR[aWb], 2)) + aUs(aWd - z.a0(fz.lV[aWb] + fz.lS[aWb], 2)), a5 = aWT - 1; 1 <= a5; a5--)(ae =
				aUs(aWc - z.a0(fz.lU[aWV[a5]] + fz.lR[aWV[a5]], 2)) + aUs(aWd - z.a0(fz.lV[aWV[a5]] + fz.lS[aWV[a5]], 2))) < vT && (vT = ae, aWb = aWV[a5]);
		return aWb
	}, this.aJt = function() {
		for (var aWe = aWV, aWf = aWe[0], lQ = fz.lQ, aWg = lQ[aWf], a5 = aWT - 1; 1 <= a5; a5--) {
			var cE = aWe[a5],
				an = lQ[cE];
			aWg < an && (aWf = cE, aWg = an)
		}
		return aWf
	}, this.aJn = function() {
		return aWV[g1.g2(aWT)]
	}
}

function wk() {
	var yM, z2, z3, kI;

	function z4() {
		z6(), 2 !== bq.data.iIncomeType && (bq.data.iIncomeData = null), aM.wq()[19] = null, aM.rI()
	}

	function z6() {
		2 === bq.data.iIncomeType && ar.t4.z7(z3.yX(), bq.data.iIncomeData, 255)
	}
	this.show = function() {
		yM.show(), this.resize()
	}, this.aR = function() {
		yM.aR()
	}, this.resize = function() {
		yM.resize(), z2.resize()
	}, this.b6 = function(aV) {
		2 === aV && yM.b7[0].b8()
	}, yM = new aK(L(372), [new aL("⬅️ " + L(1), z4)]), z2 = new rJ(yM.cQ, (function(kI) {
		var rM = new rN;
		rM.rO(L(47)), rM.zB(new zC({
			xx: [L(48), L(49), L(50)],
			value: bq.data.iIncomeType
		}, function(b4) {
			z6(), 2 !== b4 || bq.data.iIncomeData || (bq.data.iIncomeData = new Uint8Array(bq.g7), bq.data.iIncomeData.fill(32)), bq.data.iIncomeType = b4, aM.iZ(27)
		})), kI.push(rM)
	}(kI = []), function(kI) {
		var rM;
		1 === bq.data.iIncomeType && ((rM = new rN).rO("Value"), rM.rR(new rQ({
			b4: -1,
			value: bq.data.iIncomeValue
		}, 1, 0, function(cb) {
			var value = z.ax(Math.floor(cb.target.value), 0, 255);
			cb.target.value = bq.data.iIncomeValue = value
		})), kI.push(rM))
	}(kI), function(kI) {
		var rM;
		2 === bq.data.iIncomeType && ((rM = new rN).rO("Data"), (z3 = new yR(0, 1, 0, 1)).yU(ar.d5.zD(bq.data.iIncomeData, 4)), rM.rR(z3), kI.push(rM))
	}(kI), kI))
}

function uN() {
	var aWh = null;
	this.gs = 0, this.uW = function() {
		var y = aP.aQ.data[5].value;
		aWh = "px " + y, "Trebuchet MS" !== y && (aWh += ", Trebuchet MS"), this.gs = aGx(32, 32, ["a", "b", "m"], 200, aWh)
	}, this.pj = function(af, ae) {
		var aV = document.createElement("canvas");
		return aV.width = af, aV.height = ae, aV
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(c8, af, ae) {
		return c8.getImageData(0, 0, af, ae)
	}, this.au = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + aWh : 1 === type ? "bold " + size + aWh : 2 === type ? "lighter " + size + aWh : 3 === type ? "italic " + size + aWh : 4 === type ? "oblique " + size + aWh : 5 === type ? "small-caps " +
			size + aWh : "small-caps bold " + size + aWh
	}, this.textAlign = function(gq, id) {
		gq.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(gq, id) {
		gq.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.cd = function(cb, code, color) {
		color = this.cc(ab.yf) + " solid " + (color || ao.ap);
		5 === (code = code || 5) ? cb.style.border = color : 4 === code ? cb.style.borderLeft = color : 2 === code ? cb.style.borderBottom = color : 6 === code ? cb.style.borderRight = color : cb.style.borderTop = color
	}, this.aF1 = function(cb, ag, aZ, af, ae) {
		cb = cb.style;
		cb.left = this.aF2(ag), cb.top = this.aF2(aZ), cb.width = this.aF2(af), cb.height = this.aF2(ae)
	}, this.a6A = function(y) {
		return 1 + y * bE.bF.bG()
	}, this.cX = function(dL, j7) {
		return dL * this.a6A(void 0 === j7 ? .5 : j7) * f.bH / f.aW
	}, this.aF0 = function(dL, j7) {
		return dL * this.a6A(void 0 === j7 ? .5 : j7) * f.bH
	}, this.kd = function(dL, j7, aWi) {
		return this.a6A(j7) * Math.min(dL * f.bH, aWi * f.af) / f.aW
	}, this.cc = function(y) {
		return y.toFixed(1) + "px"
	}, this.aF2 = function(y) {
		return this.aSY(y).toFixed(1) + "px"
	}, this.aSY = function(y) {
		return y / f.aW
	}, this.aR4 = function(kK, aR3) {
		for (var a2 = "<ul>", a3 = kK.length, a5 = 0; a5 < a3; a5++) a2 += "<li>" + kK[a5] + ": <a href='" + aR3[a5] + "' target='_blank'>" + aR3[a5] + "</a></li>";
		return a2 += "</ul>"
	}, this.nr = function(aLK) {
		return "<a href='" + aLK + "' target='_blank'>" + aLK + "</a>"
	}, this.aLB = function(cb) {
		navigator.clipboard && navigator.clipboard.writeText(cb.value)
	}, this.ra = function(cb) {
		var dO = cb.textContent;
		ar.d5.a7y(dO, "✔") || (1 === dO.length ? cb.textContent = "✔" : cb.textContent = dO + " ✔", setTimeout(function() {
			cb.textContent = dO
		}, 500))
	}, this.measureText = function(a2) {
		return ah.measureText(a2).width
	}, this.cS = function(aWk) {
		aWk.style.overflowX = "auto", aWk.style.overflowY = "hidden", aWk.style.whiteSpace = "nowrap", aWk.addEventListener("wheel", function(cb) {
			Math.abs(cb.deltaY) < Math.abs(cb.deltaX) || (this.scrollLeft += cb.deltaY, this.cf = this.scrollLeft, cb.preventDefault())
		}), aWk.addEventListener("scroll", function() {
			this.cf = this.scrollLeft
		})
	}
}

function wb() {
	var aC, a7R, a7S, cJ;

	function a7T(a5) {
		aM.iZ(8, aM.fQ, new kW(21, {
			gy: a5,
			sT: 0,
			sU: 10
		}))
	}
	this.show = function() {
		aC.show(), this.resize()
	}, this.aR = function() {
		aC.aR()
	}, this.resize = function() {
		aC.resize(), a7R.resize()
	}, this.b6 = function(aV) {
		2 === aV && aC.b7[0].b8()
	}, a7S = [new aL(L(110), function() {
		a7T(5)
	}, 0, 0, 1), new aL(L(111), function() {
		a7T(6)
	}, 0, 0, 1), new aL(L(112), function() {
		a7T(7)
	}, 0, 0, 1), new aL(L(115), function() {
		a7T(12)
	}, 0, 0, 1)], cJ = [new aL("⬅️ " + L(1), function() {
		aM.rI()
	})], aC = new aK(L(396), cJ), a7R = new a7U(a7S, aC.cQ)
}

function aEq() {
	this.aJ = function() {
		! function() {
			var data = aP.aQ.data;
			0 === data[2].my && (f.ae > f.af || 0 !== bE.id) && (data[2].value = data[2].a31 = 1);
			0 === data[100].my && (data[100].value = data[100].a31 = (0 === bE.id ? "Player " : 1 === bE.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a5, y, data = aP.aQ.data,
			a3 = data.length;
		for (a5 = 0; a5 < a3; a5++) data[a5] && data[a5].my === aP.b8.aIM(a5, !0) && (y = aP.b8.aIN(a5), data[a5].value = null === y ? data[a5].a31 : 2 === data[a5].type ? y : Number(y))
	}
}

function a7U(bD, e1) {
	var dx;
	this.resize = function() {
		for (var a5 = 0; a5 < bD.length; a5++) ar.at.cd(bD[a5].button);
		dx.style.gap = dx.style.padding = ar.at.cc(ab.yb)
	}, (dx = document.createElement("div")).style.display = "grid", dx.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", dx.style.overflowY = "auto", dx.style.gridAutoRows = "5.3em", dx.style.maxHeight = "100%";
	for (var a5 = 0; a5 < bD.length; a5++) bD[a5].aM5(1), dx.appendChild(bD[a5].button);
	e1.appendChild(dx)
}

function wi() {
	var yM, z2, z3;

	function z4() {
		z6(), 3 !== bq.data.botDifficultyType || ar.t4.tt(bq.data.botDifficultyData) || (bq.data.botDifficultyType = 0), 3 !== bq.data.botDifficultyType && (bq.data.botDifficultyData = null), aM.wq()[19] = null, aM.rI()
	}

	function z6() {
		3 === bq.data.botDifficultyType && ar.t4.z7(z3.yX(), bq.data.botDifficultyData, g6.a4B.length - 1)
	}

	function aWn(kI, b4) {
		var rM = new rN,
			value = (rM.rO(b4 < 0 ? L(181) : L(180) + " " + hv.f3[b4 % 9]), 0 <= b4 && (rM.a9j(L(147) + ": " + bq.data.teamPlayerCount[b4]).style.marginBottom = "1em"), b4 < 0 ? bq.data.botDifficultyValue : bq.data.botDifficultyTeam[b4]);
		rM.zB(new zC({
			xx: g6.a4B,
			value: value
		}, function(eE) {
			b4 < 0 ? bq.data.botDifficultyValue = eE : bq.data.botDifficultyTeam[b4] = eE
		})), kI.push(rM)
	}
	this.show = function() {
		yM.show(), this.resize()
	}, this.aR = function() {
		yM.aR()
	}, this.resize = function() {
		yM.resize(), z2.resize()
	}, this.b6 = function(aV) {
		2 === aV && yM.b7[0].b8()
	}, yM = new aK(L(181), [new aL("⬅️ " + L(1), z4)]), z2 = new rJ(yM.cQ, function() {
		var kI = [];
		if (function(kI) {
				var rM = new rN,
					xx = (rM.rO(L(47)), [L(49), L(370), L(371), L(50)]),
					value = bq.data.botDifficultyType;
				0 === bq.data.gameMode && (value = Math.min(value, 2), xx.splice(2, 1));
				rM.zB(new zC({
					xx: xx,
					value: value
				}, function(b4) {
					z6(), bq.data.botDifficultyType = b4, 0 === bq.data.gameMode && 2 === b4 && (bq.data.botDifficultyType = 3), 3 !== bq.data.botDifficultyType || bq.data.botDifficultyData || (bq.data.botDifficultyData =
						new Uint8Array(bq.g7)), 2 !== bq.data.botDifficultyType || bq.data.botDifficultyTeam || (bq.data.botDifficultyTeam = new Uint8Array(9)), aM.iZ(25)
				})), kI.push(rM)
			}(kI), 0 === bq.data.botDifficultyType) aWn(kI, -1);
		else if (2 === bq.data.botDifficultyType)
			for (var a5 = 0; a5 < bq.data.teamPlayerCount.length; a5++) bq.data.teamPlayerCount[a5] && aWn(kI, a5);
		else 3 === bq.data.botDifficultyType && ! function(kI) {
			var rM = new rN;
			rM.rO("Data"), (z3 = new yR(0, 1, 0, 1)).yU(ar.d5.zD(bq.data.botDifficultyData, 8)), rM.rR(z3), kI.push(rM)
		}(kI);
		return kI
	}())
}

function aIH(data) {
	var aC, aWo, aWp, aE, aWq, aWr, aWs, colors, aWt, aWu, aWv = 0,
		aWw = 0,
		aWx = !1,
		aWy = !1,
		aWz = [1, 5, 60, 240, 1440, 10080, 43200];

	function aXO(az, b0) {
		! function(az, b0) {
			return aWo < az && az < aWo + aE && aWp < b0 && b0 < aWp + aWq
		}(aWv = az, aWw = b0) ? (aWx && (k.l = !0), aWx = !1) : (aWx = !0, k.l = !0)
	}
	this.show = function() {
		aWy = aP.aQ.data[127].value, aC.show(), this.resize()
	}, this.aR = function() {
		aC.aR()
	}, this.resize = function() {
		aC.resize();
		var aV = f.aW,
			aX = aC.aY(),
			aX6 = aV * aX.ad,
			aV = aV * aX.aa;
		aWr = ar.at.aF0(.06), aWs = ar.at.aF0(.04), aWo = ar.at.aF0(.06), aWp = aV + aWr, aE = f.af - aWo - aWs, aWq = aX6 + aV - aWp - aWs
	}, this.n = function() {
		aC.n(),
			function() {
				var a5, hE, gi, ag, fp, a4 = data.data,
					aX9 = 1,
					aXA = .125,
					aXB = aWy ? 65536 : 0;
				for (a5 = 0; a5 < a4.length; a5++)
					for (hE = a4[a5].hE, gi = hE.length, aX9 = Math.max(gi, aX9), fp = 0; fp < gi; fp++) aXA = Math.max(hE[fp], aXA), aXB = Math.min(hE[fp], aXB);
				var ex = aWp + aWq,
					aNz = aWq / (aXA - aXB),
					aNy = 1 / (aX9 - 1);
				for (ah.lineWidth = ab.ai, a5 = 0; a5 < a4.length; a5++) {
					for (hE = a4[a5].hE, gi = hE.length, ag = aWo, ah.beginPath(), ah.moveTo(ag + aE, ex - aNz * (hE[gi - 1] - aXB)), fp = gi - 2; 0 <= fp; fp--) ah.lineTo(ag + aNy * fp * aE, ex - aNz * (hE[fp] - aXB));
					ah.strokeStyle = colors[a5], ah.stroke()
				}(function(aXB, aXA, ex, aNz) {
					ah.font = ar.at.au(0, .25 * aWo), ar.at.textBaseline(ah, 1), ar.at.textAlign(ah, 2), ah.fillStyle = colors[0];
					for (var ag = .92 * aWo, a5 = 0; a5 < 3; a5++) {
						var y = aXB + a5 * (aXA - aXB) / 2;
						ah.fillText((y / 1e3).toFixed(3), ag, ex - aNz * (y - aXB))
					}
				})(aXB, aXA, ex, aNz),
				function(aX9) {
					var aZ = aWp + aWq + .15 * aWs;
					ah.font = ar.at.au(0, Math.min(.4 * aWs, .028 * f.af)), ar.at.textBaseline(ah, 0), ar.at.textAlign(ah, 2), ah.fillStyle = colors[0], ah.fillText(ar.uV.tW(aWt), aWo + aE, aZ), ar.at.textAlign(ah, 0), ah.fillText(ar.uV.tW(
						new Date(aWu.getTime() - 6e4 * (aX9 - 1) * aWz[data.aAy])), aWo, aZ)
				}(aX9),
				function(aX9, aXB, aXA) {
					if (aWx && !(aX9 < 2)) {
						for (var nC, b4 = (aWv - aWo) / aE * (aX9 - 1), aXE = Math.floor(b4), aXF = Math.floor(1 + b4), aXG = b4 - aXE, aXH = 1e5, aFx = -1, aXI = -1, aXJ = aXA - (aXA - aXB) * (aWw - aWp) / aWq, a4 = data.data, a5 = 0; a5 < a4
							.length; a5++) {
							var yB, hE = a4[a5].hE;
							hE.length <= aXF || (hE = hE[aXE] + aXG * (hE[aXF] - hE[aXE]), (yB = Math.abs(aXJ - hE)) < aXH && (aXH = yB, aFx = a5, aXI = hE))
						} - 1 !== aFx && (aXA = aWp + aWq - (aXI - aXB) / (aXA - aXB) * aWq, ah.lineWidth = .5 * ab.ai, ah.strokeStyle = colors[aFx], ah.beginPath(), ah.moveTo(aWo, aXA), ah.lineTo(aWv, aXA), ah.lineTo(aWv, aWp + aWq), ah
						.stroke(), ah.beginPath(), ah.arc(aWv, aXA, .1 * aWo, 0, 2 * Math.PI), ah.fillStyle = colors[aFx], ah.fill(), aXB = aWp + aWq + .15 * aWs, ar.at.textAlign(ah, 1), nC = aX9 - 2 < b4 ? (nC = aWu.getTime() - 6e4 * aWz[
								data.aAy], new Date(nC + (b4 - (aX9 - 2)) * (aWt.getTime() - nC))) : new Date(aWu.getTime() - 6e4 * (aX9 - b4 - 1) * aWz[data.aAy]), aX9 = ar.uV.tW(nC), b4 = ar.at.measureText(aX9), nC = z.ax(aWv, aWo + .5 *
								b4, aWo + aE - .5 * b4), ah.fillStyle = ar.color.a4R(70, 50, 20), ah.fillRect(nC - .52 * b4, aWp + aWq, 1.04 * b4, .55 * aWs), ah.fillStyle = colors[0], ah.fillText(aX9, nC, aXB), ah.font = ar.at.au(0, .25 *
								aWo), ar.at.textBaseline(ah, 1), ar.at.textAlign(ah, 2), nC = .92 * aWo, aX9 = (aXI / 1e3).toFixed(3), b4 = ar.at.measureText(aX9), aXB = nC - 1.04 * b4, ah.fillStyle = ar.color.a4R(70, 50, 20), ah.fillRect(
								aXB, aXA - .1625 * aWo, aWo - aXB, .275 * aWo), ah.fillStyle = colors[aFx], ah.fillText(aX9, nC, aXA))
					}
				}(aX9, aXB, aXA)
			}(), ah.lineWidth = ab.ai, ah.strokeStyle = ao.ap, ah.beginPath(), ah.moveTo(aWo, aWp), ah.lineTo(aWo, aWp + aWq), ah.lineTo(aWo + aE, aWp + aWq), ah.stroke();
		var a5, fontSize = .5 * aWr,
			a4 = (ah.font = ar.at.au(0, fontSize), ar.at.textBaseline(ah, 1), ar.at.textAlign(ah, 0), data.data),
			a3 = a4.length,
			aZ = aWp - .5 * aWr,
			a2 = "";
		for (a5 = 0; a5 < a3; a5++) a2 += a4[a5].name + "  ";
		a2 = a2.trim();
		var aJR = ar.at.measureText(a2),
			ag = .5 * (f.af - aJR);
		for (aJR > f.af && (ag = 0, ah.font = ar.at.au(0, f.af / aJR * fontSize)), a5 = 0; a5 < a3; a5++) ah.fillStyle = colors[a5], ah.fillText(a4[a5].name, ag, aZ), ag += ar.at.measureText(a4[a5].name + "  ")
	}, this.ay = function(az, b0) {
		aXO(az, b0)
	}, this.b2 = function(az, b0) {
		aXO(az, b0)
	}, this.b6 = function(aV) {
		2 === aV && aC.b7[0].b8()
	};
	var a5, dO, tU, eE, iy = data.data,
		a3 = iy.length,
		max = 1;
	for (a5 = 0; a5 < a3; a5++) max = Math.max(max, iy[a5].hE.length);
	for (a5 = 0; a5 < a3; a5++)
		for (; iy[a5].hE.length < max;) iy[a5].hE.unshift(0);
	dO = new Date, tU = 6e4 * dO.getTimezoneOffset(), eE = dO.getTime() - tU, aWt = new Date(eE), 6 === data.aAy ? function(dO, tU) {
		var aX5 = dO.getUTCFullYear(),
			dO = dO.getUTCMonth() + 1;
		aWu = dO < 12 ? new Date(Date.UTC(aX5, dO) - tU) : new Date(Date.UTC(aX5 + 1, 0) - tU)
	}(dO, tU) : (tU = 6e4 * aWz[data.aAy], aWu = data.aAy <= 4 ? new Date(eE + tU - dO.getTime() % tU) : new Date(eE + tU - (dO.getTime() + 2592e5) % tU)), eE = ar.color, colors = [ao.ap, eE.a4R(255, 0, 0), eE.a4R(0, 200, 0), eE.a4R(80, 80, 255),
		eE.a4R(255, 255, 0), eE.a4R(255, 0, 255), eE.a4R(0, 255, 255), eE.a4R(255, 140, 0), eE.a4R(128, 128, 128), eE.a4R(0, 255, 140)
	], aC = new aK(L(482) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aAy] + ", " + ar.uV.tT(aWt), [new aL("⬅️ " + L(1), function() {
		aM.iZ(1)
	}), new aL(L(104), function() {
		aM.iZ(14)
	})], !1)
}

function aRN() {
	function aXS(player) {
		var dO;
		ar.d1.vt(player) && (dO = fz.lQ[player] - fz.w0[player] + iG.zN(player), hw.sD(player, Math.abs(dO), dO < 0 ? 18 : 12)), fz.lQ[player] = 0, fz.w0[player] = 0
	}

	function aXW() {
		c4.show(!1, !1, !1, !0), by.aME(), hl.aB9.aMF()
	}

	function aXQ(player, a2H) {
		for (var a5 = a2H.length - 1; 0 <= a5; a5--) iG.a22(a2H[a5], player)
	}

	function aXR(player) {
		for (var lR = fz.lR, lU = fz.lU, lS = fz.lS, lV = fz.lV, gE = lR[player], ex = lS[player], ma = bh.ma, lJ = fz.lJ, ag = lU[player]; gE <= ag; ag--)
			for (var aZ = lV[player]; ex <= aZ; aZ--) {
				var cE = 4 * (aZ * ma + ag);
				hy.mZ(player, cE) && (hy.a3x(cE), lJ[player]--)
			}
		lU[player] = lV[player] = 0, lR[player] = lS[player] = Math.max(ma, bh.oi)
	}
	this.aBK = function(cE) {
		var player, dO = fz.lJ[cE];
		bo.h.s2[cE] ? dO && (aXQ(player = cE, iG.a2G(player)), aXR(player), iD.a8R(player), iG.clear(player), aXS(player), function(player) {
			fz.a9d[player] = 0, fz.jF[player] = [], fz.rD[player] = [], fz.oH[player] = [], fz.ik[player] = []
		}(player)) : !dO && fz.jF[cE].length || this.aDT(cE)
	}, this.aDT = function(player) {
		! function(player) {
			ar.d1.lp(player) || (fz.x0[player] = jg.eI.aMD(), bq.hN++);
			var a2H = iG.a2G(player);
			0 === a2H.length ? ar.d1.vm(player) && aXW() : (aXQ(player, a2H), function(player, a2H) {
				var aXZ = a2H[function(a2H) {
					var a5, b4 = 0;
					for (a5 = a2H.length - 1; 1 <= a5; a5--) fz.lJ[a2H[a5]] > fz.lJ[a2H[b4]] && (b4 = a5);
					return b4
				}(a2H)];
				9 === bq.fs && (1 === hv.va[player] ? g1.a2M(8) && hm.a0l(aXZ) : g6.g5[player] && (bu.qC(765, 0), bu.x1(280, L(483, [fz.fy[aXZ], fz.fy[player]]), 765, aXZ, ao.aq, ao.a5I, -1, !0)));
				if (ar.d1.vm(player)) aXW(), bu.a2E(aXZ, 1);
				else {
					for (var a5 = a2H.length - 1; 0 <= a5; a5--)
						if (ar.d1.vt(a2H[a5]) && (hw.a2D[4 - ar.d1.lp(player)]++, ar.d1.vm(a2H[a5]))) return bu.a2E(player, 0);
					ar.d1.lp(player) || bu.aCJ(0, player, aXZ)
				}
			}(player, a2H))
		}(player), aXR(player), aXS(player),
			function(player) {
				fz.iN[player] = 0, fz.jF[player] = null, fz.rD[player] = null, fz.oH[player] = null, fz.ik[player] = null
			}(player), iD.a8R(player), iG.clear(player), bo.zS.sR(player)
	}
}

function aRP() {
	this.aPk = function() {
		var aXc;
		return !(i8.j6 < 3 || fz.lJ[vo[0]] >= bq.hS >> 1) && (bq.hU ? (aXc = hr.aT6(), !(2 * hr.aT7(bs.vs()) >= aXc)) : function() {
			var aXc = hr.aT6();
			if (2 * fz.lQ[vo[0]] >= aXc) return !1;
			return !0
		}())
	}
}

function aRX() {
	this.aDS = new aB2, this.result = new jV, this.jc = new aSj, this.aBA = new aXe, this.aB8 = new aSh, this.aB9 = new aO2, this.aJ = function() {
		this.result.aJ()
	}
}

function aRd() {
	var aXf = [];
	this.x1 = function(a2, gb) {
		a2 = {
			e6: by.pw(),
			a2: a2,
			gb: gb
		};
		aXf.push(a2), 30 === aM.fQ && aM.fR().x1(a2)
	}, this.clear = function() {
		aXf = [], aM.wp(30) && aM.wp(30).clear()
	}, this.a2W = function() {
		return aXf
	}
}

function aXe() {
	this.c = function() {
		var aXk;
		2 === bq.hc ? (bu.a2E(0, 59), iL.a1J(2700)) : bq.fs < 7 ? (aXk = hv.vR[bq.hf], aXk = hv.f3[aXk], bz.a7I(L(484, [aXk]), 2, 1, 12), bu.x1(0, L(485, [aXk]), 40, 0, ao.ap, ao.c9, -1, !1), iL.a1J(2700)) : 8 === bq.fs ? (bq.hd ? bu.a2E(bq.he,
			2) : bu.a2E(1 - bq.d3, 3), bq.hZ.ws(bq.he), iL.a1B(bq.he, 2700, !1, 0)) : 9 === bq.fs ? (bu.aCT(), iL.a1J(2700)) : (bu.aCL(bq.he), iL.a1B(bq.he, 2700, !1, 0))
	}
}

function aRc() {
	var aXn = new Array(1),
		aXo = new Array(1),
		aXp = 20,
		aAm = 0,
		aXq = !1;

	function aXs() {
		aXp++, xu.play()
	}
	this.aJ = function() {
		if (!window.document.documentMode) {
			for (var a5 = 0; 0 <= a5; a5--) ! function(a5, src) {
				aXo[a5] = 0, aXn[a5] = document.createElement("audio"), aXn[a5].src = src, aXn[a5].setAttribute("preload", "auto"), aXn[a5].setAttribute("controls", "none"), aXn[a5].style.display = "none", aXn[a5].onpause = function() {
					aXo[a5] = 1
				}, aXn[a5].oncanplaythrough = function() {
					aXo[a5] = 0 === aXo[a5] ? 1 : aXo[a5]
				}, document.body.appendChild(aXn[a5])
			}(a5,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aXq = !0
		}
	}, this.xv = function() {
		if (aXq) {
			aXq = !1;
			for (var a5 = 0; 0 <= a5; a5--) aXn[a5].onpause = null, aXn[a5].oncanplaythrough = null, document.body.removeChild(aXn[a5]), aXn[a5] = null
		}
	}, this.play = function() {
		if (aXq) {
			var dO = performance.now();
			if (aAm + 66 < dO)
				for (var a5 = 0; 0 <= a5; a5--)
					if (1 === aXo[a5]) return aAm = dO, aXo[a5] = 2, void aXn[a5].play();
			0 < aXp && (aXp--, setTimeout(aXs, 66))
		}
	}
}
mb(), self.aiCommand746 = function(y) {
	0 === y ? n7() : 1 !== y || !bE || 1 !== bE.id || bE.my < 14 || n8.n9()
}, setTimeout(n7, 1e4), window.onload = function() {
	n7()
};