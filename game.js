var e1, eq, g7, g8, g9, gA, gB, gC, gD, gE, gF, gG, eP, gH, gI, gJ, gK, gL, gM, gN, at, gO, gP, eQ, eY, gQ, gR, gS, gT, gU, ei, gV, gW, b0, gX, ed, gY, gZ, ga, gb, gc, gd, ge, gf, gg, gh, eS, eR, gi, gj, bj, gk, gl, gm, gn, go, co, gp, gq, gr, aZ, t,
	gs, gt, gu, gv, gw, gx, gy, d1, gz, cf, h0, h1, h2, h3, h4, h5, cC, h6, aT, eU, h7, h8, h9, hA, hB, hC, hD, ac, hE, hF, eW, hG, hH, d0, hI, bp, hJ, hK, hL, hM, bQ, hN, hO, aj, hP, hQ, qM, q8, q5, q6, a0e, a0d, a0f, a0w, a0u, a0Q, a0h, a8D, a11,
	a8E, a8F, a8G, a0b, mJ, mI, mK, a2C, m0, aCx, je, sE, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "rgb(", "<br>", "center", "auto", "0.8em", "rgba(", "flex", "   ", "hidden", "1em", "span", "Data", "0.5em",
		" / ", "territorial.io", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click",
		"' target='_blank'>", "undefined", "pre", "break-word", "</a>", "50%", "0.6em", "underline", "scroll", "pointer", "password", "middle", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "text", "string", "rgba(0,0,0,0.8)",
		"pre-wrap", "number", "nowrap", "mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ",
		"🔄 Reload", "wheel", "translate(-50%, -50%)", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover", "mouseout",
		"long", "logo", "loading", "keydown", "italic ", "https://", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed",
		"Reload", "Patreon", "Interest", "False Reporter", "Cheater", "Bot ", "Battle Royale", "Back", "Audit Log", "Arial Black, Trebuchet MS", "@room",
		"<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "255,255,255", "1v1", "1 Minute",
		"1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0,0,0", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> "
	];

function a() {
	this.b = new c, this.d = new e, this.f = new g, this.h = new i, this.j = new k
}

function l(m, n, o, p, q) {
	var self;
	this.r = document.createElement("span"), this.resize = function() {
			this.r.style.fontSize = ((p - o) * n.offsetHeight).toFixed(1) + "px"
		}, (self = this).r.textContent = m, self.r.style.color = t.u, self.r.style.font = "inherit", self.r.style.margin = "0.1em 0.6em", self.r.style.pointerEvents = "none", q && (self.r.style.fontWeight = "bold"), self.r.style.whiteSpace =
		"nowrap", self.r.style.display = "block", n.appendChild(self.r)
}

function v() {
	function a1(z, a9, aA) {
		for (var a4 = 0; a4 < 256; a4++) z[a4] = (z[a4] + (a9 >> (a4 + aA) % 30 & 1)) % 256
	}
	this.w = function(x, y) {
		var z = new Uint8Array(256);
		return function(z, x, y) {
				var a4, a6 = 3 + (4 + x) % 32768,
					a7 = 12 + y % 32768,
					a8 = 17 + ((x & y) + (x | y) + x) % 32768;
				for (a4 = 0; a4 < 256; a4++) a6 = 1 + a6 * a7 % a8, z[a4] = a6 % 256
			}(z, x, y), a1(z, x, 2), a1(z, y, 7),
			function(z) {
				var a4, a9, aB = 0;
				for (a4 = 0; a4 < 3e4; a4++) a9 = z[aB], z[aB] = (a9 + a4 + z[(aB + a4) % 256]) % 256, aB = (a9 + a4 + aB + (a9 & aB)) % 256
			}(z),
			function(z) {
				var a4, aC = 1,
					aD = 1;
				for (a4 = 0; a4 < 256; a4 += 2) aC = (1 + aC) * (z[a4] + 1) % 1073741824, aD = (1 + aD) * (z[a4 + 1] + 1) % 1073741824;
				return [aC, aD]
			}(z)
	}, this.aE = function(aF, aG, aH, result) {
		for (var aI = 1 << aF, a4 = 0; a4 < aI; a4++)
			if (this.aJ(a4, aG, aH) === result) return a4;
		return 0
	}, this.aJ = function(aK, aG, aH) {
		for (var aL = aG + aK, aM = aH + aK, a9 = aL + aM & 2147483647, aN = 1; aN <= 16; aN++) a9 = (a9 = (a9 ^ a9 >> aN) >>> 1 + (3 & aL)) * (7 + (1023 & (aL | aM))) & 1073741823, aM >>= 1 + (1 & (aL >>= 1 + (1 & (a9 += 65535 & aM))));
		return a9 &= 1073741823
	}
}

function aO() {
	var aP, aQ = !0;

	function am(al, ao) {
		var ap = document.createElement("div"),
			aq = document.createElement("span"),
			ar = document.createElement("span");
		aq.textContent = at.au(ao.av) + ":", aq.style.color = t.aw, aq.style.paddingRight = "0.4em", aq.style.display = "table-cell", aq.style.width = "6ch", aq.style.textAlign = "end", ap.appendChild(aq), ar.textContent = ao.ax, ap.appendChild(ar),
			ap.style.display = "table", ao.ay && function(ap, ay) {
				{
					var b3;
					ay >= 1024 - b0.b1.b2 ? ((b3 = document.createElement("img")).src = b0.b4.b5[ay - 1024 + b0.b1.b2].toDataURL(), b3.style.width = "1.5em", b3.style.height = "1.5em", b3.style.verticalAlign = "middle", ap.appendChild(b3)) : ((b3 =
						document.createElement("span")).textContent = b0.b1.b6(ay), b3.style.display = "inline-block", b3.style.fontSize = "1.5em", b3.style.lineHeight = "1em", b3.style.verticalAlign = "middle", ap.appendChild(b3))
				}
			}(ap, ao.ay), al.appendChild(ap)
	}

	function aX() {
		aQ && (aP.aV.scrollTop = aP.aV.scrollHeight)
	}
	this.clear = function() {
		aP.aV.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var ai = aj.ak(), a5 = ai.length, al = document.createDocumentFragment(), a4 = 0; a4 < a5; a4++) am(al, ai[a4]);
		aP.aV.appendChild(al), aX(), aP.show(), this.resize(), aQ = !0, aX()
	}, this.aY = function() {
		aP.aY()
	}, this.resize = function() {
		aP.resize(), aP.aV.style.padding = "0.4em " + aZ.aa.ab(ac.ad)
	}, this.ae = function(af) {
		2 === af && aP.ag[0].ah()
	}, this.an = function(ao) {
		var al = document.createDocumentFragment();
		am(al, ao), aP.aV.appendChild(al), aX()
	}, (aP = new aR(L(0), [new aS("⬅️ " + L(1), function() {
		aT.aU(1)
	})])).aV.style.overflowY = "auto", aP.aV.addEventListener("scroll", function() {
		aQ = aP.aV.scrollTop >= aP.aV.scrollHeight - aP.aV.clientHeight - 2
	})
}

function b7() {
	var b8, b9, bC, bF, bG, bA = [new Array(4), [], new Array(2), new Array(2)],
		bB = new Array(4),
		bD = new Array(2),
		bE = [L(2), L(3), L(4), L(5)];

	function bP() {
		var ba;
		!bQ.bZ || (ba = b8.bb.bc.bd.value.trim().slice(0, 127)).length < 1 || (b8.bb.bc.bd.value = "", bQ.be.bf(ba))
	}

	function bN(bm) {
		bQ.bW.bX[3] = 1 - bQ.bW.bX[3], bV(3, 1, bQ.bW.bX[3]), bm && bj.bn.bo(4), bQ.bW.bX[3] && bp.bq.br(158, bQ.bW.bX[0])
	}

	function bI(aN, bw) {
		bQ.bW.bX[aN] !== bw && (0 === aN && bQ.bW.bX[3] && bN(0), bV(aN, bQ.bW.bX[aN], 0), bV(aN, bw, 1), bQ.bW.bX[aN] = bw, 0 === aN ? (bj.bn.bo(2, bw), bQ.bW.bX[2] ? (b8.bx.by(), b8.bb.bz(1)) : b8.bb.bz(0), aT.c0().c1(), aT.c0().c2()) : 2 === aN &&
			(0 === bw ? (bj.bn.bo(0), b8.bb.by(), b8.c3()) : (bj.bn.bo(1), b8.bx.by(), b8.c4())))
	}

	function bV(aN, bw, color) {
		b8.c5[aN].bU[bw].c6(color ? t.c7 : t.bJ)
	}

	function cH(cI) {
		return cI < 7 ? cI + 2 + " " + L(16) : 7 === cI || 10 === cI ? L(3) + " (Full-Sending: " + L(7 === cI ? 17 : 18) + ")" : 8 === cI ? "1v1" : L(19)
	}

	function cL(a9) {
		var ce = cf.cg(a9, 60),
			a9 = a9 % 60;
		return (ce < 10 ? "0" : "") + ce + ":" + (a9 < 10 ? "0" : "") + a9
	}
	this.bg = function() {
		return b8.bb
	}, this.be = function(bs) {
		bI(2, 0);
		var ax = b8.bb.bc.bd.value,
			bs = "@" + bs + " ";
		ax.length && !aZ.bu.bv(ax, " ") && (bs = " " + bs), b8.bb.bc.bd.value = ax += bs, b8.bb.bc.bd.focus()
	}, this.c8 = function() {
		b8.bx.by()
	}, this.c1 = function() {
		var c9 = bQ.bW.bX[0],
			c9 = bQ.bW.cB[c9];
		cC.cD(c9.cE, c9.mapSeed), b9.bU[0].button.textContent = L(11) + ": " + cC.cF.cG[c9.cE].name, b9.bU[1].button.textContent = L(12, 0, "Mode") + ": " + cH(c9.cI), b9.bU[2].button.textContent = L(13) + ": " + cC.cF.cG[c9.cJ].name, b9.bU[3]
			.button.textContent = L(14, 0, "Next Mode") + ": " + cH(c9.cK), b9.bU[4].button.textContent = L(15) + ": " + cL(c9.cM), b9.resize()
	}, this.c2 = function() {
		var c9 = bQ.bW.bX[0],
			cA = bQ.bW.cB[c9];
		b8.cN(cA.cO);
		for (var a4 = 0; a4 < bQ.cP.cQ.length; a4++) bA[0][a4].r.textContent = "" + bQ.cP.cQ[a4].length;
		var cP = bQ.cP.cQ[c9],
			cR = cP.length,
			cS = bQ.cP.cT[c9];
		bA[2][1].r.textContent = "" + cR, bA[3][1].r.textContent = "" + cS, b9.bU[4].button.textContent = L(15) + ": " + cL(cA.cM);
		for (a4 = 0; a4 < 4; a4++) {
			var cU = bQ.bW.cB[a4];
			bB[a4] ? 0 === cU.cO && (bB[a4].r.textContent = cC.cF.cG[cU.cE].name) : bB[a4] = new bT(cC.cF.cG[cU.cE].name, bF.bU[a4].button, 1, 1), aZ.bu.startsWith(bE[a4], "🏆 ") ? cU.cV || (bE[a4] = bE[a4].substring(3), bF.bU[a4].button
				.textContent = bE[a4], bF.bU[a4].button.appendChild(bA[0][a4].r), bF.bU[a4].button.appendChild(bB[a4].r)) : cU.cV && (bE[a4] = "🏆 " + bE[a4], bF.bU[a4].button.textContent = bE[a4], bF.bU[a4].button.appendChild(bA[0][a4].r),
				bF.bU[a4].button.appendChild(bB[a4].r))
		}
		var cA = "",
			cX = "";
		0 === c9 && (cA = bQ.cY.cZ(cP, 0, cR), cX = bQ.cY.cZ(cP, 0, cS)), bC[0].r.textContent = cA, bC[1].r.textContent = cX, bD[1].r.textContent = "MP: " + bQ.bW.ca[0] + "   SP: " + bQ.bW.ca[1] + "   Lobby: " + aZ.cb.cc(bQ.cP.cQ)
	}, this.cd = function() {
		b8.bb.by()
	}, this.show = function() {
		b8.show(), this.resize(), bQ.message.show()
	}, this.aY = function() {
		b8.aY(), bQ.bR.aY(), bQ.ci.aY(), bQ.message.aY()
	}, this.resize = function() {
		b8.resize(1 - bQ.bW.bX[2]), bQ.message.resize()
	}, this.ae = function(af) {
		2 === af ? bQ.bW.bX[3] ? bN(1) : b8.c5[3].bU[0].ah() : af < 2 && bN(1)
	}, bF = new bH([new aS(bE[0], function() {
		return bI(0, 0), 2
	}), new aS(bE[1], function() {
		return bI(0, 1), 2
	}), new aS(bE[2], function() {
		return bI(0, 2), 2
	}), new aS(bE[3], function() {
		return bI(0, 3), 2
	})], t.bJ), b9 = new bH([new aS("", 0, 2), new aS("", 0, 2), new aS("", 0, 2), new aS("", 0, 2), new aS("", 0, 2)], t.bK, 1);
	var bL = new bH([new aS(L(6), function() {
		return bI(2, 0), 2
	}), new aS(L(7), function() {
		return bI(2, 1), 2
	})], t.bJ);
	bG = new bH([new aS(L(8, 0, 0, 1), function() {
		aT.bh(), bQ.bi(), bj.bW.bk(3240), aT.bl(5, 5)
	}), new aS(L(9), function() {
		return bN(1), 2
	})], t.bJ), b8 = new bO(bF, b9, bL, bG, bP, bQ.bR.bS);
	for (var a4 = 0; a4 < 4; a4++) bA[0][a4] = new bT("0", bF.bU[a4].button);
	bA[2][1] = new bT("0", bL.bU[1].button), bA[3][1] = new bT("0", bG.bU[1].button), bC = [new bT("", bL.bU[1].button, 1, 1), new bT("", bG.bU[1].button, 1, 1)], bV(0, bQ.bW.bX[0], 1), bV(2, bQ.bW.bX[2], 1), (bD = [new bT(L(10), b8.bY(), 1, 0),
		new bT("", b8.bY(), 1, 1)
	])[0].r.style.fontSize = "0.4em", bD[1].r.style.fontSize = "0.4em"
}

function cj() {
	var input;

	function cl(bd) {
		(bd = bd.target.files) && 0 < bd.length && co.cp(bd[0])
	}

	function ct(bd) {
		var af = new Image;
		af.onload = cu, af.src = bd.target.result
	}

	function cu(bd) {
		var bd = bd.target,
			cv = bd.width,
			cw = bd.height,
			cx = bp.cy.data[162].value,
			max = Math.min(cC.cz, cx),
			cx = (max = d0.id || d1.d2() ? Math.min(1400, cx) : max) / Math.max(cv, cw);
		if (cx < 1 && (cv = Math.floor(cx * cv + .125), cw = Math.floor(cx * cw + .125)), max < cv || max < cw || cv < 10 || cw < 10) cx = "Invalid Image Dimensions!", d0.d5 ? d0.d5.showToast(cx) : alert(cx);
		else {
			for (var max = document.createElement("canvas"), cx = (max.width = cv, max.height = cw, max.getContext("2d")), d7 = document.createElement("canvas"), d8 = (d7.width = bd.width, d7.height = bd.height, d7.getContext("2d")), bd = (d8
					.drawImage(bd, 0, 0), d8.getImageData(0, 0, d7.width, d7.height)), d8 = cx.createImageData(cv, cw), src = bd.data, dB = d8.data, dC = d7.width / cv, dD = d7.height / cw, dE = 0; dE < cw; dE++)
				for (var dF = 0; dF < cv; dF++) {
					var dG = Math.floor(dF * dC),
						dG = 4 * (Math.floor(dE * dD) * d7.width + dG),
						dJ = 4 * (dE * cv + dF);
					dB[dJ] = src[dG], dB[1 + dJ] = src[1 + dG], dB[2 + dJ] = src[2 + dG], dB[3 + dJ] = 255
				}
			cx.putImageData(d8, 0, 0), 20 === aT.dK && aT.c0().cu(max)
		}
	}
	this.ck = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = cl
	}, this.bi = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.cm = function() {
		input.click()
	}, this.cp = function(cq) {
		var z = cq.name.split("."),
			z = z[z.length - 1].toLowerCase();
		"gif" !== z && "jpg" !== z && "jpeg" !== z && "png" !== z || ((z = new FileReader).onload = ct, z.readAsDataURL(cq))
	}
}

function aS(dL, dM, dN, dO, dP) {
	var self, dQ = document.createElement("button");

	function dV() {
		var dc;
		d1.d2() || (dc = aZ.color.dd(dN), !1 !== dO && 0 < dc[0] && dc[0] < 255 && dc[0] === dc[1] && dc[0] === dc[2]) || (128 < dc[0] && 128 < dc[1] && 128 < dc[2] ? dQ.style.backgroundColor = aZ.color.de(dN, -50) : dQ.style.backgroundColor = aZ
			.color.de(dN, dc[3] && dc[3] < 120 ? 150 : 50))
	}

	function dU() {
		if (dO) {
			var dc = aZ.color.dd(dN);
			if (dc[0] === dc[1] && dc[0] === dc[2]) return
		}
		dM && ((dc = dM(this)) ? 2 === dc && dV() : dg(this))
	}

	function dX() {
		this.style.backgroundColor = dN
	}

	function dW() {
		dg(this)
	}

	function dg(dh) {
		dh.style.backgroundColor = dN, dh.blur()
	}
	this.button = dQ, this.ah = dM, this.dR = dN, this.dT = function(dY) {
			dY = 1.1 - Math.min(.01 * dL.length, .6) + .2 * dY;
			dQ.style.fontSize = dY.toFixed(1) + "em"
		}, this.c6 = function(af) {
			af ? 1 === af ? af = t.db : 2 === af && (dO = 1, af = t.db) : (dO = 0, af = t.da), this.dR = dN = af, dQ.style.backgroundColor = af
		}, self = this, dQ.innerHTML = dL, dQ.style.color = dP ? t.dS : t.u, dQ.style.userSelect = "none", dQ.style.outline = "none", dQ.style.overflowWrap = "break-word", self.c6(dN), dQ.style.border = "none", dQ.style.font = "inherit", self.dT(0),
		dQ.style.padding = "0em 0.3em", dQ.onclick = dU, dQ.addEventListener("mouseover", dV), dQ.addEventListener("mouseout", dW), dQ.addEventListener("focus", dV), dQ.addEventListener("blur", dX)
}

function di() {
	var dj, dk, dl, dm = ["wss://", "/s50/", "/s51/", "/s52/"],
		dn = 0;

	function e5() {
		bj.bW.e5(dj, dk)
	}

	function e6(bd) {
		bj.e9.eA(dj, new Uint8Array(bd.data))
	}

	function e8() {}

	function e7(bd) {
		bj.bW.e7(dj, bd)
	}
	this.ck = function(aB, dp) {
		dj = aB, dk = dp, aB = e1.e2 ? "ws://localhost:" + (7130 + dj) + "/" : dm[0] + bj.bW.e3[dj] + dm[1 + e1.e4], (dl = new WebSocket(aB)).binaryType = "arraybuffer", dl.onopen = e5, dl.onmessage = e6, dl.onclose = e7, dl.onerror = e8
	}, this.dr = function() {
		return dl.readyState === dl.CONNECTING
	}, this.ds = function() {
		return dl.readyState === dl.OPEN
	}, this.dt = function() {
		return dn
	}, this.du = function() {
		dn = 1
	}, this.dv = function() {
		return this.dr() || this.ds()
	}, this.dw = function(dp) {
		dk = dp
	}, this.dx = function() {
		return dk
	}, this.send = function(dy) {
		this.ds() && dl.send(dy)
	}, this.close = function(dz) {
		this.dv() && (dl.close(dz), this.aY())
	}, this.aY = function() {
		dl.onopen = null, dl.onmessage = null, dl.onclose = null, dl.onerror = null
	}
}

function eB() {
	this.eC = new eD, this.result = new eE, this.eF = new eG, this.eH = new eI, this.eJ = new eK, this.eL = new eM, this.ck = function() {
		this.result.ck()
	}
}

function eN() {
	this.eO = 0, this.w = function() {
		eP.w(), eQ.w(), eR.w(), bj.bW.w(), eS.eT(), eU.eV.w(), eW.eX && (eW.eX = !1, eY.eZ())
	}
}

function ea() {
	this.eb = function() {
		for (var ec, a5 = ed.ee, ef = ed.eg, eh = ei.eh, ej = this.ek(), a4 = 0; a4 < a5; a4++) ec = ef[a4], aZ.d.el(ec) || (eh[ec] = ej);
		var em = ei.em,
			en = ei.en,
			eo = ei.eo,
			ep = ei.ep,
			a5 = eq.er;
		for (a4 = 0; a4 < a5; a4++)(0 === ep[a4] || eo[a4] < 1 || 2 * em[a4] > 3 * (en[a4] + eo[a4])) && (eh[a4] = 0);
		var es = 0;
		for (a4 = 0; a4 < a5; a4++) es += 0 < eh[a4];
		return es
	}, this.ek = function() {
		return Math.min(65535, eW.et())
	}
}

function eu() {
	var aP, ev, ew, f4;

	function bM() {
		ez(), 2 !== eq.data.sResourcesType && (eq.data.sResourcesData = null), aT.f0()[19] = null, aT.f1()
	}

	function ez() {
		2 === eq.data.sResourcesType && aZ.cb.f2(ew.f3(), eq.data.sResourcesData, 2047)
	}
	this.show = function() {
		aP.show(), this.resize()
	}, this.aY = function() {
		aP.aY()
	}, this.resize = function() {
		aP.resize(), ev.resize()
	}, this.ae = function(af) {
		2 === af && aP.ag[0].ah()
	}, aP = new aR(L(20), [new aS("⬅️ " + L(1), bM)]), ev = new ex(aP.aV, (function(f4) {
		var f8 = new f9;
		f8.fA(L(21)), f8.fB(new fC({
			fD: [L(22), L(23), L(24)],
			value: eq.data.sResourcesType
		}, function(aB) {
			ez(), 2 !== aB || eq.data.sResourcesData || (eq.data.sResourcesData = new Uint16Array(eq.fE)), eq.data.sResourcesType = aB, aT.bl(28)
		})), f4.push(f8)
	}(f4 = []), function(f4) {
		var f8;
		1 === eq.data.sResourcesType && ((f8 = new f9).fA("Value"), f8.fF(new fG({
			aB: -1,
			value: eq.data.sResourcesValue
		}, 1, 0, function(bd) {
			var value = cf.fH(Math.floor(bd.target.value), 0, 2047);
			bd.target.value = eq.data.sResourcesValue = value
		})), f4.push(f8))
	}(f4), function(f4) {
		var f8;
		2 === eq.data.sResourcesType && ((f8 = new f9).fA("Data"), (ew = new fI(0, 1, 0, 1)).fJ(aZ.bu.fK(eq.data.sResourcesData, 2)), f8.fF(ew), f4.push(f8))
	}(f4), f4))
}

function fL() {
	this.fM = "https://", this.fN = this.fM + "territorial.io/", this.fO = this.fN + "changelog", this.fP = this.fN + "terms", this.fQ = this.fN + "cookie_policy", this.fR = this.fN + "privacy", this.fS = this.fN + "tutorial", this.fT = this.fN +
		"players", this.fU = this.fN + "clans", this.fV = this.fN + "clan-results", this.fW = "https://patreon.com/c/territorial", this.fX = this.fM + "play.google.com/store/apps/details?id=territorial.io", this.fY = this.fM +
		"apps.apple.com/app/id1581110913", this.fZ = this.fM + "www.youtube.com/watch?v=toZTQ8aRdFc", this.fa = this.fM + "discord.gg/pthqvpTXmh", this.fb = this.fM + "www.instagram.com/davidtschacher/", this.fc =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function fC(fd, fe) {
	this.ff = [];
	var fg = this.ff;

	function click() {
		for (var a4 = 0; a4 < fg.length; a4++) fg[a4].textContent = fg[a4].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var aB = parseInt(this.name);
		void 0 !== fd.aB && bp.bq.br(fd.aB, aB), fe && fe(aB)
	}
	for (var fh, a5 = fd.fD.length, a4 = 0; a4 < a5; a4++)(fh = document.createElement("p")).textContent = "⚪ " + fd.fD[a4], fh.style.margin = "0", fh.name = "" + a4, fh.style.cursor = "pointer", fh.style.fontSize = "1em", fh.addEventListener(
		"click", click), fg.push(fh);
	fg[fd.value].textContent = fg[fd.value].textContent.replace("⚪", "🟢")
}

function fi() {
	var aP, ev, f4;

	function fz() {
		for (var colors = new Array(11), a4 = 0; a4 < 11; a4++) {
			var z = bp.cy.data[163 + a4].value.split(",");
			colors[a4] = new Uint8Array(3);
			for (var aN = 0; aN < 3; aN++) aN < z.length && (colors[a4][aN] = Number(z[aN]))
		}
		return colors
	}
	this.show = function() {
		aP.show(), this.resize()
	}, this.aY = function() {
		aP.aY()
	}, this.resize = function() {
		aP.resize(), ev.resize()
	}, this.ae = function(af) {
		2 === af && aP.ag[0].ah()
	}, aP = new aR(L(25), [new aS("⬅️ " + L(1), function() {
		aT.f1()
	})]), ev = new ex(aP.aV, ((f4 = []).push(function() {
		var f8 = new f9;
		return f8.fA(L(26)), f8.fp("<a href='https://territorial.io/wiki/propaganda' target='_blank'>territorial.io/wiki/propaganda</a>", "0.75em").style.marginBottom = "0.8em", f8.fp(
			"<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), f8
	}()), f4.push(function() {
		var f8 = new f9,
			fq = (f8.fA(L(27)), bp.cy.data[174].value),
			fr = f8.fs(fq.length + " / 180"),
			ft = (fr.style.textAlign = "center", new fI(0, 1, function(bd) {
				var bd = bd.target.value,
					aI = bd.length;
				fr.textContent = aI + " / 180", aI <= 180 && bp.bq.br(174, bd)
			}));
		return ft.bd.rows = 6, ft.bd.style.fontSize = "1em", ft.fJ(fq), f8.fF(ft), f8
	}()), f4.push(function() {
		var f8 = new f9;
		f8.fA(L(28));
		for (var a4 = 0; a4 < 11; a4++) {
			var fu = f8.fF(new fG(bp.cy.data[163 + a4]));
			a4 && (fu.bd.style.marginTop = "0.6em")
		}
		return f8.fF(new fv([new aS(L(29), function() {
			for (var data = bp.cy.data, a4 = 163; a4 < 174; a4++) data[a4] && bp.cy.fw(a4, data[a4].fx);
			aT.f1(), aT.f0()[31] = null, aT.bl(31)
		}).button])), f8
	}()), f4.push(function() {
		var f8 = new f9;
		return f8.fA("Targeting"), f8.fp(L(30)), f8.fF(new fG(bp.cy.data[175], 0, 0)), f8
	}()), f4.push(function() {
		var f8 = new f9;
		return f8.fA(L(31)), f8.fF(new fv([new aS(L(32), function() {
			(new fy).show(bp.cy.data[174].value, fz(), -1)
		}).button])), f8
	}()), f4.push(function() {
		var f8 = new f9,
			g0 = (f8.fA(L(33)), f8.fp(L(34)), new fG(bp.cy.data[176], 1, 0)),
			g1 = (f8.fF(g0), new aS(L(35), function(bd) {
				return g2.button.textContent === L(36) && bj.bW.ds(0) && (aZ.aa.g3(bd), g4(), bj.g5.g6(bp.cy.data[176].value, fz(), bp.cy.data[175].value, bp.cy.data[174].value)), !0
			}, 1)),
			g4 = function() {
				g2.button.textContent = L(37), g1.c6(1), g1.button.style.color = t.u
			},
			g2 = new aS(L(37), function(bd) {
				return bd.textContent === L(37) ? (bd.textContent = L(36), g1.c6(0), g1.button.style.color = t.dS) : g4(), !0
			});
		return f8.fF(new fv([g2.button, g1.button])), f8
	}()), f4))
}

function hR(hS) {
	e1 && !hS || (hU(), cf = new hV, gz = new fL, aZ = new hW, t = new hX, eq = new hY, gp = new hZ, gv = new ha, gw = new hb, g7 = new hc, g8 = new hd, g9 = new he, gA = new hf, gB = new hg, gC = new hh, gD = new hi, gE = new hj, gF = new hk, gG =
		new hl, eP = new hm, gH = new hn, gI = new ho, gJ = new hp, gK = new hq, gL = new hr, gM = new hs, gN = new ht, at = new hu, gO = new hv, gP = new hw, eQ = new hx, eY = new hy, gQ = new hz, gR = new i0, gX = new i1, ed = new i2, gZ =
		new i3, gY = new i4, gS = new i5, gT = new i6, gV = new i7, gU = new i8, ei = new i9, gW = new iA, gj = new iB, b0 = new iC, gb = new iD, gc = new iE, gd = new iF, bj = new iG, gi = new iH, ga = new iI, ge = new iJ, gf = new iK, gg =
		new iL, eR = new iM, gh = new iN, eS = new iO, gk = new iP, gl = new iQ, gm = new iR, gn = new iS, go = new iT, co = new cj, gq = new a, gr = new iU, gs = new iV, gt = new iW, gu = new iX, gx = new iY, gy = new iZ, d1 = new ia, h0 =
		new ib, h1 = new ic, h2 = new ie, h3 = new ig, h4 = new ih, h5 = new eB, cC = new ii, h6 = new ij, aT = new ik, eU = new il, d0 = new im, e1 = new io, hI = new ip, bp = new iq, hG = new ir, hH = new is, hC = new it, hD = new iu, h7 =
		new iv, h8 = new iw, hE = new ix, hF = new iy, eW = new iz, hJ = new j0, ac = new j1, hK = new j2, hL = new j3, hM = new j4, bQ = new j5, hO = new j6, aj = new j7, hP = new j8, hQ = new j9, e1.ck(), d0.ck(), eR.jB(), bp.ck(), gp.ck(), gp
		.jC(), (h9 = new jD).ck(), aZ.ck(), h7.ck(), bj.ck(), gv.ck(), gw.ck(), cC.ck(), aT.ck(), hA = new jE, eR.ck(), d0.jF.jG(), eW.ck(), ac.ck(), h8.ck(), hB = new jH, gi.ck(), gT.jI(), eU.ck(), gb.ck(), eY.ck(), gL.ck(), gW.ck(), d1.ck(), gQ
		.ck(), eW.eX = !0, setTimeout(function() {
			cC.cD(2, 14071)
		}, 0), aT.bl(5, 5), gy.jJ() || d0.jF.jK(), eR.jL(), e1.jM = 1)
}

function jN() {
	var jO = new Uint8Array(64);
	this.ck = function() {
		var a4;
		for (jO[0] = 45, jO[37] = 95, a4 = 0; a4 < 10; a4++) jO[a4 + 1] = 48 + a4;
		for (a4 = 0; a4 < 26; a4++) jO[a4 + 11] = 65 + a4, jO[a4 + 38] = 97 + a4
	}, this.jP = function(jQ) {
		for (var jR = gx, jS = new Uint8Array(jQ), a4 = 0; a4 < jQ; a4++) jS[a4] = jR.jT(6);
		return jS
	}, this.jU = function(jS) {
		for (var a5 = jS.length, jV = jO, z = [], a4 = 0; a4 < a5; a4++) z.push(String.fromCharCode(jV[jS[a4]]));
		return z.join("")
	}, this.jW = function(value, jX) {
		for (var jV = jO, z = [], a4 = 0; a4 < jX; a4++) z.push(String.fromCharCode(jV[value >> 6 * (jX - 1 - a4) & 63]));
		return z.join("")
	}
}

function hd() {
	var jY, jZ, ja;

	function jf(jh) {
		for (var a4 = jY - 1; 0 <= a4; a4--) 0 === ja[jZ[a4]] && ei.jd[jZ[a4]] >= jh && jc(jZ[a4])
	}

	function jb(player) {
		var jl;
		64 === ja[player] ? ja[player] = 6 : (jl = ei.jd[player], ja[player] = jl < 1e3 ? 3 : jl < 1e4 ? 2 : jl < 6e4 ? 1 : 0)
	}
	this.ck = function() {
		jY = 0, jZ = new Uint16Array(eq.fE), ja = new Uint8Array(eq.fE)
	}, this.w = function() {
		for (var a4 = jY - 1; 0 <= a4; a4--) 64 === ja[jZ[a4]] ? jb(jZ[a4]) : 0 == ja[jZ[a4]]-- && (jb(jZ[a4]), jc(jZ[a4]));
		16e4 <= ei.jd[je[0]] && (jf(16e4), 3e5 <= ei.jd[je[0]]) && jf(3e5), aZ.d.ji(eq.jj) && (hE.jk[7] = Math.max(ei.jd[eq.jj], hE.jk[7]))
	}, this.jm = function(player) {
		for (var aN, a4 = jY - 1; 0 <= a4; a4--)
			if (player === jZ[a4]) {
				for (jY--, aN = a4; aN < jY; aN++) jZ[aN] = jZ[aN + 1];
				return
			}
	}, this.jn = function(player, jo) {
		for (var a4 = jY - 1; 0 <= a4; a4--)
			if (player === jZ[a4]) return;
		jZ[jY++] = player, ja[player] = jo ? 2 : 64
	}
}

function jp() {
	var jq, jr, js, ju;

	function jt(a4) {
		aT.bl(8, aT.dK, new jw(21, {
			jx: a4,
			jy: 0,
			jz: 10
		}))
	}
	this.show = function() {
		jq.show(), this.resize()
	}, this.aY = function() {
		jq.aY()
	}, this.resize = function() {
		jq.resize(), jr.resize()
	}, this.ae = function(af) {
		2 === af && jq.ag[0].ah()
	}, js = [new aS(L(38), function() {
		jt(1)
	}, 0, 0, 1), new aS(L(39), function() {
		jt(2)
	}, 0, 0, 1), new aS(L(40), function() {
		jt(3)
	}, 0, 0, 1), new aS(L(41), function() {
		jt(0)
	}, 0, 0, 1), new aS(L(3), function() {
		jt(9)
	}, 0, 0, 1), new aS(L(42), function() {
		jt(10)
	}, 0, 0, 1), new aS(L(43), function() {
		jt(11)
	}, 0, 0, 1)], ju = [new aS("⬅️ " + L(1), function() {
		aT.f1()
	})], jq = new aR(L(44), ju), jr = new jv(js, jq.aV)
}

function k0() {
	var k1 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		k2 = [t.k3, t.k3, t.aw, t.k4, t.k5, t.k6, t.k7, t.aw, t.k8, t.dS, t.k9],
		kA = [
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
		kB = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function kk(kl, bs, kn) {
		for (var bw = kl.length - 1; 0 <= bw; bw--) {
			var ka = kl[bw];
			0 === ka.id && ka.bs === bs && (ka.kG = "[Redacted Message]", kn) && (ka.ko = 1)
		}
	}
	this.kC = function(kD) {
		var kE, kH;
		return kD.id < 5 && (kE = "@" + gv.kF.jW(kD.bs, 5)), 0 === kD.id ? kE + ": " + kD.kG : 1 === kD.id ? (kH = "@" + gv.kF.jW(kD.target, 5), 0 === kD.kI ? 32768 <= kD.value ? kE + " voted with " + (kD.value - 32768 + 1) + " gold against " +
				kH + " to weaken the latter's admin position. 📉" : kE + " voted with " + (kD.value + 1) + " gold for " + kH + " to strengthen the latter's admin position. 💪" : 1 === kD.kI ? kE + " sent " + Math.floor(kD.value / 100) +
				" 🧈 gold to " + kH + "." : kE + " voted with " + (kD.value / 10).toFixed(1) + " points for " + kH + " to acknowledge the latter as clan leader. ✅") : 2 === kD.id ? 0 === kD.kI ? kE + " was 🔇 muted for 1 Hour." : 1 === kD.kI ?
			"The username of " + kE + " was ✂️ redacted. Duration: 1 Day" : kE + " 👢 was kicked." : 3 === kD.id ? kE + hN.kJ(kD.kI, hN.kK[kD.kI][kD.value]) + "@" + gv.kF.jW(kD.target, 5) + hN.kL(kD.kI, hN.kK[kD.kI][kD.value]) : 4 === kD.id ?
			kE + hN.kJ(5, hN.kK[5][kD.kI]) + "@" + gv.kF.jW(kD.target, 5) + hN.kL(5, hN.kK[5][kD.kI]) : 5 === kD.id ? kB[kD.kI] : 6 === kD.id ? "You are about to mention " + kD.value + " player" + (1 === kD.value ? "" : "s") +
			". This action will cost " + (Math.max(10 * kD.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === kD.id ? kD.kG : void 0
	}, this.kM = function(kD, ba) {
		return {
			kD: kD,
			kG: ba,
			kN: 0,
			fontSize: 1,
			kO: 0,
			kP: kD.id ? t.kQ : t.u
		}
	}, this.kR = function(player, kS) {
		return (2 === kS ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.kT = function(kU) {
		return k2[kU]
	}, this.kV = function(kU, kW) {
		return kU < 3 || 7 === kU ? kA[kU][0] : 4 === kU ? kA[kU][kW < 1 ? 0 : kW < 10 ? 1 : 2] : kA[kU][kW < 10 ? 0 : 1]
	}, this.kX = function(kW) {
		return 0 === kW
	}, this.kY = function(kS, bs) {
		for (var cQ = bQ.cP.cQ, cP = cQ[kS], a5 = cP.length, a4 = 0; a4 < a5; a4++)
			if (bs === cP[a4].bs) return cP[a4];
		for (var bw = 0; bw < cQ.length; bw++)
			if (kS !== bw)
				for (a5 = (cP = cQ[bw]).length, a4 = 0; a4 < a5; a4++)
					if (bs === cP[a4].bs) return cP[a4];
		return null
	}, this.kZ = function(ka) {
		return !!bQ.kb && ka.bs === bQ.kb.bs
	}, this.cZ = function(cP, kc, kd) {
		var ke = [];
		loop: for (var a4 = kc; a4 < kd; a4++) {
			var kf = aZ.bu.kg(cP[a4].username);
			if (kf) {
				for (var bw = ke.length - 1; 0 <= bw; bw--)
					if (kf === ke[bw].name) {
						ke[bw].aI++;
						continue loop
					} ke.push({
					name: kf,
					aI: 1
				})
			}
		}
		if (ke.sort(function(aN, bw) {
				return bw.aI - aN.aI
			}), 0 === ke.length) return "";
		for (var ax = ke[0].name + ": " + ke[0].aI, a4 = 1; a4 < ke.length; a4++) ax += "   " + ke[a4].name + ": " + ke[a4].aI;
		return ax
	}, this.kh = function(kU, kW, ki) {
		return 0 === k1[kU].length ? "Rank: " + (kW + 1) : k1[kU] + " Rank: " + (kW + 1) + (3 !== kU && ki < 100 ? "   " + k1[3] + " Rank: " + (ki + 1) : "")
	}, this.kj = function(bs) {
		for (var cB = bQ.bW.cB, a4 = 0; a4 < cB.length; a4++) kk(cB[a4].kl, bs);
		kk(bQ.message.km(), bs, 1), bQ.b1.kj(bs)
	}
}

function ih() {
	function ks() {
		8 === eq.l1 && 1 === eq.ku && h5.eC.l2()
	}

	function kr(player) {
		eq.l3 ? (gX.l4(player), ed.l5(), eq.l6 && eq.l7.w()) : gm.l8(player)
	}
	this.kp = function(player) {
		gG.kq(player, player === eq.jj ? 21 : 22), kr(player), ks()
	}, this.kt = function(player) {
		1 === eq.ku && 0 !== ei.kv[player] && 2 !== ei.kw[player] && kr(player), eq.kx--, eq.ky--, gG.kq(player, 4), aZ.d.kz(2) && at.l0(!0), ks()
	}
}

function l9() {
	var lA = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.lB = function(av) {
		var lD, ax = new Date(av.getTime() - 6e4 * av.getTimezoneOffset()).toUTCString();
		return ax.length < 12 || (ax = ax.substring(5, ax.length), 0 === (av = av.getTimezoneOffset())) ? ax : (lD = (av < 0 ? "+" : "-") + cf.cg(Math.abs(av), 60), 0 == (av = Math.abs(av) % 60) ? ax + lD : ax + lD + ":" + (av < 10 ? "0" : "") +
			av)
	}, this.lF = function(av) {
		var ax = av.toUTCString();
		return ax.length < 12 ? ax : function(av) {
			return lA[av.getUTCDay()]
		}(av) + ", " + ax.substring(5, ax.length - 4)
	}
}

function hp() {
	var cv, dF, lH, canvas, lI, lJ, lK, lL, lM, lN, lO = 11 / 12;

	function lV() {
		var lZ = Math.floor(lK * (cv - 2 * lH)),
			la = 1 + Math.floor(.0625 * gJ.cw),
			lb = 1 + Math.floor(.3 * gJ.cw),
			aC = Math.floor(.55 * gJ.cw);
		lI.clearRect(0, 0, cv, gJ.cw), lI.fillStyle = t.da, lI.fillRect(0, 0, lH, gJ.cw), lI.fillRect(lH + lZ, 0, cv - lH - lZ, gJ.cw), lI.fillStyle = lK < 1 / 3 ? "rgba(" + Math.floor(3 * lK * 130) + ",130,0,0.85)" : lK < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (lK - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (lK - 2 / 3) * 130) + ",0.85)", lI.fillRect(lH, 0, lZ, gJ.cw), lI.fillStyle = t.u, lI.fillRect(0, 0, cv, 1), lI.fillRect(0, gJ.cw - 1, cv, 1), lI
			.fillRect(0, 0, 1, gJ.cw), lI.fillRect(lH, 0, 1, gJ.cw), lI.fillRect(lH + lZ, 0, 1, gJ.cw), lI.fillRect(cv - lH, 0, 1, gJ.cw), lI.fillRect(cv - 1, 0, 1, gJ.cw), lI.fillRect(Math.floor(.25 * gJ.cw) + lb, Math.floor((gJ.cw - la) / 2), gJ
				.cw - 2 * lb, la), lI.fillRect(Math.floor(cv - 1.25 * gJ.cw) + lb, Math.floor((gJ.cw - la) / 2), gJ.cw - 2 * lb - lb % 2, la), lI.fillRect(Math.floor(cv - 1.25 * gJ.cw) + Math.floor((gJ.cw - la) / 2), lb, la, gJ.cw - 2 * lb - lb % 2),
			lL = aZ.d.lc(eq.jj, gJ.ld()), lI.fillText(aZ.bu.jW(lL) + " (" + aZ.bu.le(100 * lK, +(lK < .1)) + ")", Math.floor(.5 * cv), aC)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		lK = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => gJ.lv(arg1);

	function lt(lw) {
		return !(1 < lw && 1 === lK || (1 < lw && lw * lK - lK < 1 / 1024 ? lw = (lK + 1 / 1024) / lK : lw < 1 && lK - lw * lK < 1 / 1024 && (lw = (lK - 1 / 1024) / lK), lK = cf.fH(lK * lw, 1 / 1024, 1), lV(), 0))
	}

	function lu(ll) {
		return lK !== (lK = cf.fH((ll - dF - lH) / (cv - 2 * lH), 1 / 1024, 1)) && (lV(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		lV(), eW.eX = !0
	}, this.dE = 0, this.lP = !1, this.ck = function() {
		lJ = !eq.l3 && !eq.lQ, lN = !1, lK = .5, lL = 0, this.lP = !1, this.resize()
	}, this.resize = function() {
		d0.jF.lR() && eR.cv < .8 * eR.cw ? (this.cw = Math.floor(.066 * eR.lS), cv = eR.cv - 4 * ac.gap - this.cw) : (cv = Math.floor((d0.jF.lR() ? .65 : .389) * eR.lS), cv += 12 - cv % 12, this.cw = Math.floor(cv / 12)), lH = Math.floor(3 * this
			.cw / 2), lM = aZ.aa.lT(1, Math.floor(.5 * this.cw)), (canvas = document.createElement("canvas")).width = cv, __fx.mobileKeybinds.setSize(cv, this.cw, m0), canvas.height = this.cw, (lI = canvas.getContext("2d", {
			alpha: !0
		})).font = lM, aZ.aa.textBaseline(lI, 1), aZ.aa.textAlign(lI, 1), this.lU(), lV()
	}, this.lU = function() {
		dF = d0.jF.lR() && eR.cv < .8 * eR.cw ? this.cw + 3 * ac.gap : Math.floor((eR.cv - cv) / 2), this.dE = eR.cw - this.cw - hJ.lW() * ac.gap
	}, this.l0 = function() {
		lN && (lN = !1, lV())
	}, this.lJ = function() {
		return !(!lJ || gF.lf && dF < Math.floor(ac.gap + 5.5 * this.cw))
	}, this.lg = function(lh) {
		return !!this.lJ() && dF + cv > eR.cv - lh - ac.gap
	}, this.li = function() {
		lJ = !eq.lQ
	}, this.lj = function() {
		lJ = !1
	}, this.ld = function() {
		return cf.fH(Math.floor(1024 * lK + .5) - 1, 0, 1023)
	}, this.lk = function(ll, lm) {
		return this.lJ() && dF < ll && ll < dF + cv && lm > this.dE
	}, this.lp = function(ll, lm) {
		if (!this.lJ()) return !1;
		if (!(__fx.settings.keybindButtons && lm > this.dE - Math.floor(ac.gap / 4) - this.cw && lm < this.dE - Math.floor(ac.gap / 4) && __fx.mobileKeybinds.click(ll - dF))) {
			if (!gJ.lk(ll, lm)) return !1;
			gK.lq = !1, ! function(ls, ll, lm) {
				if (function(ll, lm) {
						return dF < ll && ll < dF + lH && lm > gJ.dE
					}(ll, lm)) return lt(lO);
				if (function(ll, lm) {
						return dF + cv - lH < ll && ll < dF + cv && lm > gJ.dE
					}(ll, lm)) return lt(1 / lO);
				return ls.lP = !0, lu(ll)
			}(this, ll, lm) || (eW.eX = !0)
		}
		return !0
	}, this.lv = function(d3) {
		0 !== eq.ku && this.lJ() && lt(d3) && (eW.eX = !0)
	}, this.lx = function(deltaY) {
		var d3;
		return !(0 === deltaY || !this.lJ()) && lt(d3 = 0 < deltaY ? (d3 = 400 / (400 + deltaY)) < lO ? lO : d3 : 1 / lO < (d3 = (400 - deltaY) / 400) ? 1 / lO : d3)
	}, this.ly = function(ll) {
		return !!this.lP && lu(ll)
	}, this.lz = function() {
		this.lP = !1
	}, this.w = function() {
		this.lJ() && lL !== aZ.d.lc(eq.jj, this.ld()) && (lN = !0)
	}, this.eZ = function() {
		this.lJ() && (m0.drawImage(canvas, dF, this.dE), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(m0, dF, this.dE)
	}
}

function hf() {
	var m1, m2, m3, m4, m5, m6, m7, m8, m9, mA, mB, mC, mD, mE = !1,
		mF = !1;

	function mG(mH) {
		mC = eW.av, m3 = m4 = m2 = 0, m5 = (mD = 33) / mH, m1 = 1 / (mH / mD / 4), m6 = (eR.cv / 2 + mI) / mJ, m7 = (eR.cw / 2 + mK) / mJ, m8 = mJ
	}

	function mT(a4) {
		var mY; - 1 !== a4 && (a4 = h0.mW(h1.bW.mX[a4]), mY = h0.mZ(a4) - 15, a4 = h0.mb(a4) - 15, gA.mN(mY, a4, 29 + mY, 29 + a4))
	}

	function mk(mr) {
		Math.abs(Math.log(mB / m8)) < .125 && (mB = mr * m8)
	}

	function mj(mY, ma, ms, mt) {
		m9 = (mY + ms + 1) / 2, mA = (ma + mt + 1) / 2;
		ms = eR.cv / (ms - mY + 1), mY = eR.cw / (mt - ma + 1);
		mB = .9 * (ms < mY ? ms : mY)
	}
	this.mL = function() {
		return mE
	}, this.mM = function() {
		mG(1), this.mN(0, 0, cC.mO - 1, cC.mP - 1), eq.l3 || eq.lQ || this.mQ(eq.jj, 3e3, !0, .3)
	}, this.mR = function(player, mS) {
		mT(h1.cY.mU(player, mS))
	}, this.mQ = function(player, mH, mc, zoom) {
		eq.md || mE && !mc && mF || (0 === ei.jd[player] ? mT(h1.cY.me(player)) : (gK.lq = !1, mF = mc, mG(mH), function(player) {
			m9 = (ei.ml[player] + ei.mm[player] + 1) / 2, mA = (ei.mn[player] + ei.mo[player] + 1) / 2
		}(player), function(zoom, player) {
			var mp = ei.mm[player] - ei.ml[player] + 1,
				player = ei.mo[player] - ei.mn[player] + 1,
				aN = eR.cv / mp,
				bw = eR.cw / player,
				aN = (mB = aN < bw ? aN : bw, 0 !== zoom ? zoom : mp < 20 && player < 20 ? .5 : .9);
			mB *= aN, mk(7 / 8)
		}(zoom, player), mE = !0, gd.mh()))
	}, this.mi = function(mH) {
		eq.lQ || eq.md || (gK.lq = !1, mF = !1, mG(mH), mj(0, 0, cC.mO - 1, cC.mP - 1), mk(7 / 8), mE = !0, gd.mh())
	}, this.mN = function(mY, ma, ms, mt) {
		mE = !1, mj(mY, ma, ms, mt), mJ = mB, gK.mu(m9, eR.cv / 2), gK.mv(mA, eR.cw / 2), hC.mw(), eW.eX = !0
	}, this.mx = function() {
		return !(mE && mF || (mE = !1))
	}, this.w = function() {
		var n0, n1, dh, n4;
		mE && (m2 < .5 ? m4 < m5 && (m4 += m5 * m1, m3 = m2) : 1 - m3 < m2 && (m4 = (m4 -= m5 * m1) < m5 * m1 ? m5 * m1 : m4), mC = mC >= eW.av ? eW.av - 1 : mC, dh = eW.av - mC, m2 = 1e3 < dh || 1 < (m2 += m4 * dh / mD) ? 1 : m2, mC = eW.av,
			dh = mJ, n0 = mI, n1 = mK, dh = (mJ = m8 * Math.pow(mB / m8, m2)) / dh, n4 = 1 - (m8 * Math.pow(mB / m8, 1 - m2) - m8) / (mB - m8), gK.mu(m6 + n4 * (m9 - m6), eR.cv / 2), gK.mv(m7 + n4 * (mA - m7), eR.cw / 2), gU.zoom(dh, (n0 *
				dh - mI) / (1 - dh), (n1 * dh - mK) / (1 - dh)), hC.mw(), 1 <= m2 && (mE = !1, hD.n5 = !0), eW.eX = !0)
	}
}

function fy() {
	var n6, n7, n8;

	function nH(a4) {
		return aZ.color.nY(n7[a4][0], n7[a4][1], n7[a4][2])
	}

	function nP(aN, bw) {
		return aZ.color.nZ(n7[aN], n7[bw]), nH(bw)
	}

	function nF() {
		n6 && (n6.remove(), n6 = null)
	}
	this.show = function(fq, colors, id) {
		0 <= (n8 = id) && bj.bW.ds(0) && bj.n9.nA(0, id), fq = (fq = (fq = (fq = (fq = (fq = (fq = (fq = (fq = (fq = (fq = (fq = fq.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			n7 = colors, (n6 = document.createElement("div")).style.position = "fixed", n6.style.top = "0", n6.style.left = "0", n6.style.width = "100%", n6.style.height = "100%", n6.style.backgroundColor = aZ.color.nE(n7[0][0], n7[0][1], n7[0][
				2], .6), n6.style.zIndex = "6", n6.onclick = function(bd) {
				bd.target === n6 && nF()
			},
			function(fq) {
				var nI, nG = document.createElement("div");
				nG.style.position = "absolute", nG.style.display = "flex", nG.style.flexDirection = "column", nG.style.top = "50%", nG.style.left = "50%", nG.style.backgroundColor = nH(2), nI = d0.jF.lR() ? aZ.aa.nJ(eR.min) : aZ.aa.nK(.4);
				nI = Math.max(nI, 200), nG.style.width = aZ.aa.ab(nI), nG.style.height = aZ.aa.ab(nI), nG.style.transform = "translate(-50%, -50%)",
					function(nG, nI) {
						var nO = document.createElement("div");
						nO.style.flex = "0 0 10%", nO.style.overflow = "hidden", nO.style.backgroundColor = nH(1), nO.style.color = nP(1, 7), nO.style.font = aZ.aa.lT(1, .05 * nI), nO.style.display = "flex", nO.style.alignItems = "center", nO
							.style.justifyContent = "center", nO.innerHTML = L(45), nG.appendChild(nO)
					}(nG, nI),
					function(nG, fq, nI) {
						var nQ = document.createElement("div");
						nQ.style.flex = "0 0 70%", nQ.style.overflowY = "auto", nQ.style.overflowX = "hidden", nQ.style.whiteSpace = "pre-wrap", nQ.style.wordWrap = "break-word", nQ.style.padding = aZ.aa.ab(.02 * nI), nQ.style.backgroundColor =
							nH(2), nQ.style.color = nP(2, 8), nQ.style.font = aZ.aa.lT(0, .07 * nI), nQ.innerHTML = fq, nQ.innerHTML = "<style>a { color: inherit; }</style>" + nQ.innerHTML, nG.appendChild(nQ)
					}(nG, fq, nI),
					function(nG, nI) {
						var nR = document.createElement("div"),
							nS = (nR.style.display = "flex", nR.style.flexDirection = "row", nR.style.justifyContent = "space-between", nR.style.alignItems = "stretch", nR.style.backgroundColor = nH(3), nR.style.flex = "1", nR.style.padding = aZ
								.aa.ab(.01 * nI), nR.style.gap = aZ.aa.ab(.01 * nI), document.createElement("div")),
							nT = (nS.style.flex = "0 0 60%", nS.style.height = "100%", new aS(L(8, 0, 0, 1), function() {
								nF()
							}, nH(4), !1)),
							nT = (nT.button.style.width = "100%", nT.button.style.height = "100%", nT.button.style.color = nP(4, 9), nT.button.style.font = aZ.aa.lT(1, .05 * nI), nS.appendChild(nT.button), document.createElement("div")),
							nV = (nT.style.flex = "0 0 15%", nT.style.height = "100%", nT.style.backgroundColor = nH(5), document.createElement("div")),
							nW = (nV.style.flex = "1", nV.style.height = "100%", new aS(L(46), function(bd) {
								return aZ.aa.g3(bd), n8 < 0 || bj.bW.ds(0) && (bj.n9.nA(1, n8), n8 = -1), !0
							}, nH(6), !1));
						nW.button.style.width = "100%", nW.button.style.height = "100%", nW.button.style.color = nP(6, 10), nW.button.style.font = aZ.aa.lT(1, .035 * nI), nV.appendChild(nW.button), nR.appendChild(nS), nR.appendChild(nT), nR
							.appendChild(nV), nG.appendChild(nR)
					}(nG, nI), n6.appendChild(nG)
			}(fq), document.body.appendChild(n6)
	}
}

function iT() {
	this.na = [], this.nb = [], this.ck = function() {
		this.na = [], this.nb = []
	}, this.w = function() {
		0 <= this.na.length && this.nc(this.na), 0 <= this.nb.length && this.nc(this.nb)
	}, this.nc = function(z) {
		for (var bw = -1, a4 = z.length - 1; 0 <= a4; a4--)
			if (z[a4].av--, z[a4].av <= 0) {
				bw = a4;
				break
			} for (a4 = bw; 0 <= a4; a4--) z.shift()
	}, this.nd = function(id, ef, ne) {
		return this.nf(this.na, id, ef, ne)
	}, this.ng = function(id, ef, ne) {
		return this.nf(this.nb, id, ef, ne)
	}, this.nf = function(z, id, ef, ne) {
		return ! function(z, id, ef) {
			var a4, aA;
			for (a4 = ef.length - 1; 0 <= a4; a4--)
				for (aA = z.length - 1; 0 <= aA; aA--)
					if (z[aA].player === ef[a4] && id === z[aA].id) return 1;
			return
		}(z, id, ef) && (ne && function(z, id, ef) {
			var a4;
			for (a4 = ef.length - 1; 0 <= a4; a4--) z.push({
				player: ef[a4],
				id: id,
				av: 384
			})
		}(z, id, ef), !0)
	}
}

function nj() {
	this.w = function(player) {
		return !!h1.nk.nl(player) && !(h1.bW.nm[player] >= Math.max(3 * ga.performance.nn, g7.no[g7.np[player]]) || !aZ.d.nq(player, g7.nr[g7.np[player]], 32, 0)) && (at.ns() ? function(player) {
			var ny = h1.cY.nz(),
				a5 = ny.length;
			if (0 === a5) return !1;
			ny = ny[gi.o1(a5)], a5 = h1.bW.o2[ny];
			if (h1.o3.o4(player, a5)) return !1;
			return !! function(player, o0) {
				var o0 = h0.mW(h1.bW.mX[o0]),
					oB = h0.mZ(o0),
					o0 = h0.mb(o0),
					mY = ei.ml[player],
					ma = ei.mn[player],
					ms = ei.mm[player],
					player = ei.mo[player],
					ms = Math.max(oB - ms, mY - oB),
					mY = Math.max(o0 - player, ma - o0);
				return ms < 100 && mY < 100
			}(player, ny) && !!h1.o6.o7(player, a5, 1) && (aZ.d.o8(player), h1.bW.o9(player), !0)
		}(player) : !!(ga.nu.w(player) || ga.nv.w(player) || ga.nw.w(player)) && (function(player) {
			h2.oD[1] = 4, aZ.d.o8(player), h1.bW.o9(player)
		}(player), !0))
	}
}

function oE() {
	this.oF = function(dj) {
		var oa;
		gt.cD(55), gt.oG(1, 0), gt.oG(6, 13), gt.oG(14, e1.oW), gt.oG(4, d0.id), gt.oG(7, d0.oX), gt.oG(1, +e1.oY), gt.oG(1, +e1.oZ), gt.oG(5, (new Date).getHours() % 24), oa = gp.ob(), gt.oG(8, oa[0]), gt.oG(8, oa[1]), bj.bW.send(dj, gt.dy)
	}, this.oI = function(dj, df, oJ, oK) {
		gt.cD(100), gt.oG(1, 0), gt.oG(6, 14), gt.oG(3, oK), gt.oG(30, df[0]), gt.oG(30, df[1]), gt.oG(30, oJ), bj.bW.send(dj, gt.dy)
	}, this.oL = function(dj, df) {
		gt.cD(37), gt.oG(1, 0), gt.oG(6, 30), gt.oG(30, df), bj.bW.send(dj, gt.dy)
	}, this.oM = function(id) {
		gt.cD(13), gt.oG(1, 0), gt.oG(6, 15), gt.oG(6, id), bj.bW.send(0, gt.dy)
	}, this.nA = function(id, value) {
		gt.cD(43), gt.oG(1, 0), gt.oG(6, 3), gt.oG(6, id), gt.oG(30, value), bj.bW.send(0, gt.dy)
	}, this.oN = function(id, ax) {
		var a5 = Math.min(ax.length, 63);
		gt.cD(19 + 16 * a5), gt.oG(1, 0), gt.oG(6, 26), gt.oG(6, id), gt.oG(6, a5), gv.oO.oP(ax), bj.bW.send(0, gt.dy)
	}, this.oQ = function(oR, ka) {
		gt.cD(7 + 26 * ka.length), gt.oG(1, 0), gt.oG(6, 9);
		for (var a4 = 0; a4 < ka.length; a4++) gt.oG(16, ka[a4][0]), gt.oG(10, ka[a4][1]);
		bj.bW.send(oR, gt.dy)
	}, this.oS = function(oT, oU) {
		gt.cD(20), gt.oG(1, 0), gt.oG(6, 19), gt.oG(1, oT), gt.oG(12, oU), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.oc = function(username) {
		gt.oG(5, username.length), gv.oO.oP(username)
	}
}

function iP() {
	var od = 0,
		og = new Uint16Array(64);

	function ok(oo) {
		od -= 2;
		for (var a4 = oo; a4 < od; a4 += 2) og[a4] = og[a4 + 2], og[a4 + 1] = og[a4 + 3]
	}
	this.ck = function() {
		od = 0
	}, this.w = function() {
		var a4, oj, lK;
		if (0 !== od)
			if (0 === ei.kv[eq.jj]) od = 0;
			else if (0 === gS.oh(eq.jj)) od = 0;
		else
			for (a4 = od - 2; 0 <= a4; a4 -= 2)(oj = og[a4]) < eq.fE && 0 === ei.kv[oj] ? ok(a4) : (lK = og[a4 + 1], (oj >= eq.fE && hQ.ol(eq.jj) || oj < eq.fE && hQ.om(eq.jj, oj)) && (gq.b.on(lK, oj), ok(a4)))
	}, this.op = function(oj, lK) {
		! function(oj, lK) {
			for (var a4 = 0; a4 < od; a4 += 2)
				if (og[a4] === oj) return og[a4 + 1] = Math.min(og[a4 + 1] + lK, 1023), 1;
			return
		}(oj, lK) && 64 !== od && (og[od] = oj, og[od + 1] = lK, od += 2)
	}
}

function jv(bU, or) {
	var ap;
	this.resize = function() {
		for (var a4 = 0; a4 < bU.length; a4++) aZ.aa.ot(bU[a4].button);
		ap.style.gap = ap.style.padding = aZ.aa.ab(ac.ad)
	}, (ap = document.createElement("div")).style.display = "grid", ap.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", ap.style.overflowY = "auto", ap.style.gridAutoRows = "5.3em", ap.style.maxHeight = "100%";
	for (var a4 = 0; a4 < bU.length; a4++) bU[a4].dT(1), ap.appendChild(bU[a4].button);
	or.appendChild(ap)
}

function ou(title, ov, ow) {
	var jq, ox;
	this.show = function() {
		jq.show(), this.resize()
	}, this.aY = function() {
		jq.aY()
	}, this.resize = function() {
		jq.resize(), ox.resize()
	}, this.ae = function(af) {
		2 === af && jq.ag[0].ah()
	}, ow = ow || [new aS("⬅️ " + L(1), function() {
		aT.f1()
	}, t.oy)], jq = new aR(title, ow), ox = new oz(jq.aV, ov), aZ.aa.textAlign(jq.aV.style, 1)
}

function eE() {
	this.ck = function() {
		this.es = 0, this.p0 = [], this.p1 = 0, this.p2 = 0
	}, this.bf = function() {
		var ls;
		eq.l6 || (ls = this, 2 === eq.p4 ? ls.p0 = h5.eF.p5() : eq.p6 ? ls.p0 = h5.eF.p7() : ls.p0 = h5.eF.p8(), ls.es = hI.p9.eb(), ls.p1 = Math.max(1, h5.eF.pA(ls.p0)), gq.d.pB(), 8 === eq.l1 ? h5.result.p2 = 0 : ls.p2 = 100 * h5.result.es * (
			1 + eq.pD))
	}
}

function pE(aN, bw) {
	return 0 <= aN ? cf.cg(aN, bw) : -cf.cg(-aN, bw)
}

function pF(a9) {
	return a9 * a9
}

function pG(aN, bw) {
	return bw < aN ? aN : bw
}

function pH(aN, bw) {
	return aN < bw ? aN : bw
}

function pI(aN, a9, bw) {
	return a9 < aN ? aN : bw < a9 ? bw : a9
}

function pJ(a9, a5) {
	for (var af = cf.cg(a9 + 1, 2), a4 = 0; a4 < a5; a4++) af = cf.cg(af + cf.cg(a9, af), 2);
	return af
}

function pK(a9, a5) {
	return a9 < 1 ? 0 : pJ(a9, a5)
}

function pL(mY, ma, pM, aC, ms, mt, pN, aD) {
	return !(mY + pM <= ms || ma + aC <= mt || ms + pN <= mY || mt + aD <= ma)
}

function pO(mY, ma, pM, aC, ms, mt, pN, aD) {
	return mY <= ms && ma <= mt && ms + pN <= mY + pM && mt + aD <= ma + aC
}

function pP(a9) {
	return Math.floor(!!a9 * (1 + Math.log2(a9 + .5)))
}

function pQ() {
	this.nl = function(player) {
		return !!eq.data.passableWater && h1.bW.pR !== h1.bW.no && h1.bW.nm[player] !== h1.bW.pS && 0 !== ei.pT[player].length
	}, this.pU = function(pV) {
		var pW = h2.oD[1];
		return !(4 <= pW || !h1.cY.pX(h0.pY(pV))) && gR.pZ(h0.pY(h0.pa(pV, pW)))
	}
}

function pb() {
	this.pc = function(size) {
		for (var jR = gx, z = [], a4 = 0; a4 < size; a4++) z.push(String.fromCharCode(jR.jT(16)));
		return z.join("")
	}, this.pd = function(ax) {
		return 20 < (ax = ax.trim()).length ? ax.substring(0, 20) : ax
	}
}

function pe() {
	function pf(a4, type, fx, oX) {
		bp.cy.data.push({
			aB: a4,
			type: type || 0,
			value: fx || 0,
			fx: fx || 0,
			oX: oX || 0
		})
	}

	function pg(a4, type, fx, oX) {
		bp.cy.data.push({
			aB: a4,
			type: type,
			value: fx || "",
			fx: fx || "",
			oX: oX || 0
		})
	}

	function ph(mx) {
		for (var a4 = bp.cy.data.length; a4 < mx; a4++) bp.cy.data.push(null)
	}
	this.data = [], this.ck = function() {
		pf(0, 1, 0, 5), pf(1, 1, 1), pf(2, 0), pg(3, 2), pf(4, 1), pg(5, 2, "Trebuchet MS", 1), pf(6, 0), pf(7, 0, 0), pf(8, 0), pf(9, 1, 1), pf(10, 1), pf(11, 1, 1), pg(12, 2, navigator.language), pf(13), pf(14), ph(100), pg(100, 2), pg(101, 2),
			pg(102, 2), pg(103, 2), pg(104, 2), pg(105, 2), pg(106, 2), pf(107), pf(108), pf(109), pg(110, 2), pf(111), pf(112), pf(113), pg(114, 2), pf(115), pg(116, 2), pf(117, 1), pg(118, 2, "", 2), pf(119, 1, 0, 1), pg(120, 2), pf(121, 1, ~~(
				262144 * Math.random())), pg(122, 2, "Player " + Math.floor(1e3 * Math.random())), pf(123), pg(124), pf(125, 1), pg(126, 2), pf(127, 0, 1), pf(128), pf(129), pf(130), pf(131), pf(132), pg(133, 2), pf(134, 0, 5), pg(135, 2), pg(
				136, 2), pf(137), pf(138), pf(139), pf(140), pf(141), pf(142), pf(143), pf(144), pg(145, 2), pf(146), pf(147), pg(148, 2), pf(149), pf(150, 0, 1), pg(151, 2), pf(152, 0, 5), pf(153, 1), pf(154, 1), pg(155, 2), pg(156, 2), pf(157),
			pf(158), pf(159), pf(160), pg(161, 2), pf(162, 0, 1024), pg(163, 2, "0,0,0"), pg(164, 2, "100,100,100"), pg(165, 2, "30,30,30"), pg(166, 2, "70,70,70"), pg(167, 2, "100,100,100"), pg(168, 2, "85,85,85"), pg(169, 2, "100,100,100");
		for (var a4 = 0; a4 < 4; a4++) pg(170 + a4, 2, "255,255,255");
		pg(174, 2), pg(175, 2), pf(176, 0, 200), ph(180), pf(180, 0), pf(181, 0)
	}, this.br = function(aB, value) {
		this.data[aB].value = value
	}, this.fw = function(aB, value) {
		this.br(aB, value);
		var value = String(value),
			a5 = value.length;
		5e4 < a5 ? console.log("storage value too large: index " + aB + " size " + a5) : (bp.ah.save(aB, value), bp.ah.save(aB, String(this.data[aB].oX), !0))
	}, this.pi = function(aB) {
		return Number(this.data[aB].value)
	}, this.pj = function(aB) {
		return String(this.data[aB].value)
	}
}

function pk() {
	var pl = [],
		pm = [],
		pn = 0;

	function po(z, pw, px, py) {
		var a5 = z.length;
		if (0 === a5) return "";
		var ax = "@" + z[0];
		if (1 === a5) return ax + pw + py;
		for (var a4 = 1; a4 < a5 - 1; a4++) ax += ", @" + z[a4];
		return ax + " and @" + z[a5 - 1] + px + py
	}
	this.ck = function() {
		var ax = po(pm, " is", " are", " in the lobby!");
		ax.length && bQ.message.pp({
			id: 7,
			kG: ax
		}), pl = [], pm = [], pn = 0
	}, this.pq = function(pr) {
		return bQ.ps !== pr && (pr = gv.kF.jW(pr, 5), !!bp.pt.pu(pr)) && (pm.push(pr), !0)
	}, this.join = function(player) {
		bQ.ps !== player.bs && (player = gv.kF.jW(player.bs, 5), bp.pt.pu(player)) && pl.push(player)
	}, this.pv = function() {
		var pw, px;
		++pn < 3 || (pn = 0, pw = po(pm, "", "", " entered the lobby!"), (pw = (px = po(pl, "", "", " joined a game!")).length ? pw.length ? pw + " " + px : px : pw).length && bQ.message.pp({
			id: 7,
			kG: pw
		}), pl = [], pm = [])
	}
}

function iu() {
	this.pz = !1, this.n5 = !1, this.q0 = !1, this.q1 = [0, 0, 0, 0], this.q2 = function() {
		var mY, ma, ms, mt;
		this.q0 = this.q0 || this.n5, (this.n5 || this.pz && this.q0) && (mY = hC.q3[0], ma = hC.q3[1], ms = hC.q3[2], mt = hC.q3[3], mY = mY < this.q1[0] ? this.q1[0] : mY, ma = ma < this.q1[1] ? this.q1[1] : ma, ms = ms > this.q1[2] ? this.q1[
			2] : ms, mt = mt > this.q1[3] ? this.q1[3] : mt, this.n5 = !1, this.pz = !1, mY === this.q1[0] && ma === this.q1[1] && ms === this.q1[2] && mt === this.q1[3] ? this.q4() : mY <= ms && ma <= mt && q5.putImageData(q6, 0, 0, mY,
			ma, ms - mY + 1, mt - ma + 1))
	}, this.q4 = function() {
		this.q0 && this.q1[2] >= this.q1[0] && this.q1[3] >= this.q1[1] && q5.putImageData(q6, 0, 0, this.q1[0], this.q1[1], this.q1[2] - this.q1[0] + 1, this.q1[3] - this.q1[1] + 1), this.q0 = !1
	}, this.q7 = function() {
		this.q1[2] >= this.q1[0] && this.q1[3] >= this.q1[1] && q5.putImageData(q6, 0, 0, this.q1[0], this.q1[1], this.q1[2] - this.q1[0] + 1, this.q1[3] - this.q1[1] + 1), this.q0 = !1
	}, this.ck = function() {
		var dF, dE;
		this.pz = !1, this.n5 = !1, this.q0 = !1, this.q1[0] = cC.mO, this.q1[1] = cC.mP, this.q1[2] = this.q1[3] = 0;
		loop: for (dF = 1; dF < cC.mO - 1; dF++)
			for (dE = cC.mP - 2; 1 < dE; dE--)
				if (1 === q8[gR.q9(dF, dE) + 2]) {
					this.q1[0] = dF;
					break loop
				} loop: for (dE = 1; dE < cC.mP - 1; dE++)
			for (dF = cC.mO - 2; 1 < dF; dF--)
				if (1 === q8[gR.q9(dF, dE) + 2]) {
					this.q1[1] = dE;
					break loop
				} loop: for (dF = cC.mO - 2; 0 < dF; dF--)
			for (dE = cC.mP - 2; 1 < dE; dE--)
				if (1 === q8[gR.q9(dF, dE) + 2]) {
					this.q1[2] = dF;
					break loop
				} loop: for (dE = cC.mP - 2; 0 < dE; dE--)
			for (dF = cC.mO - 2; 1 < dF; dF--)
				if (1 === q8[gR.q9(dF, dE) + 2]) {
					this.q1[3] = dE;
					break loop
				}
	}
}

function qA() {
	var qB = null,
		qC = 2e4,
		qD = 0;
	this.w = function() {
		eW.av < qC || (qC = eW.av + 1e4, 0 !== d0.id) || qB || eU.qE() || (bj.bW.ds(0) ? bj.n9.oM(5) : qC = eW.av + 1e3)
	}, this.qF = function(af) {
		qB = af
	}, this.show = function() {
		return !(!qB || eW.av < qD) && (__fx.settings.hidePropagandaPopup ? void 0 : (qD = eW.av + 6e4, (new fy).show(qB.fq, qB.colors, qB.id), !(qB = null)))
	}
}

function qG() {
	ge.qH(), m0.setTransform(mJ, 0, 0, mJ, 0, 0), m0.imageSmoothingEnabled = mJ < 3, m0.drawImage(cC.qI, gK.qJ(), gK.qK()), h3.qL.eZ(), m0.drawImage(qM, gK.qJ(), gK.qK()), ge.eZ(), h1.eZ(), gU.eZ(), (eq.md ? (hH.eZ(), gs) : (gG.eZ(), gN.eZ(), gJ
	.eZ(), gs.eZ(), gh.eZ(), at.eZ(), gK.eZ(), gI.eZ(), hH.eZ(), gM.eZ(), gH.eZ(), gF.eZ(), gE.eZ(), gO.eZ(), hF.eZ(), gg)).eZ(), aT.eZ()
}

function qN(lI, cv, cw) {
	lI.clearRect(0, 0, cv, cw), lI.fillStyle = t.qO, lI.fillRect(0, 0, cv, cw)
}

function qP(lI, cv, cw, qQ) {
	lI.fillStyle = t.u, lI.fillRect(0, 0, cv, qQ), lI.fillRect(0, 0, qQ, cw), lI.fillRect(cv - qQ, 0, qQ, cw), lI.fillRect(0, cw - qQ, cv, qQ)
}

function qR(lI, dF, dE, nI, qQ, ec, qS) {
	lI.fillStyle = t.u;
	var ec = Math.floor(nI * ec),
		pN = (ec += (ec - qQ) % 2, Math.floor((ec - qQ) / 2)),
		nI = Math.floor((nI - ec) / 2);
	lI.fillRect(dF + nI, dE + nI + pN, ec, qQ), qS && lI.fillRect(dF + nI + pN, dE + nI, qQ, ec)
}

function io() {
	this.oW = 1115, this.qU = 2142, this.rVersion = 15, this.e2 = 0, this.ck = function() {
		this.e4 = 2;
		var jl = cf.cg(this.qU, 10) % 100;
		this.oX = "1 Dec 2025 [" + cf.cg(this.qU, 1e3) + "." + (jl < 10 ? "0" : "") + jl + "." + this.qU % 10 + "]", this.oY = true, this.oZ = function() {
			try {
				return window.self !== window.top
			} catch (bd) {
				return !0
			}
		}(), this.qX = (new Date).getTime() % 1048576
	}, this.jM = 0
}

function eG() {
	this.p5 = function() {
		for (var a5 = ed.ee, ef = ed.eg, p0 = [], a4 = 0; a4 < a5; a4++) {
			var ec = ef[a4];
			aZ.d.qY(ec) && p0.push(ec)
		}
		return p0
	}, this.p7 = function() {
		if (0 === hG.qZ[eq.qa]) return this.p8();
		hH.qb(eq.qa);
		for (var p0 = [], a5 = h2.qc[0], qd = h2.qd, a4 = 0; a4 < a5; a4++) {
			var ec = qd[a4];
			aZ.d.qY(ec) && p0.push(ec)
		}
		return p0
	}, this.p8 = function() {
		var ec = je[0];
		return aZ.d.qY(ec) ? [ec] : []
	}, this.pA = function(p0) {
		for (var a5 = p0.length, jl = 0, jd = ei.jd, a4 = 0; a4 < a5; a4++) jl += jd[p0[a4]];
		return jl
	}
}

function qe() {
	gG.w(), gU.w(), at.qf(), bj.bW.w()
}

function qg() {
	gk.w(), g9.w(), gZ.w(), gT.w(), gn.w(), g8.w(), ga.w(), h1.bW.w(), ed.qh(), gN.w(), gj.w(), h7.w(), gU.w(), gU.qi(), at.w(), h3.w(), gM.w(), gH.w(), gG.w(), go.w(), gJ.w(), gh.w(), hE.w(), hH.w(), bj.bW.w(), bj.qj.w(), aT.w(), eU.eV.w(), gr.w(),
		eW.w()
}

function qk() {
	gA.w(), gO.w(), gI.w(), gg.w(), gs.w(), eS.ql()
}

function qm() {
	gN.l0(!1), gH.l0(), at.l0(!1), gM.l0(), gJ.l0(), gh.l0(), gU.l0(!1), hH.by()
}

function qn() {
	gU.l0(!1) && (eW.eX = !0), bj.bW.w()
}

function qo() {
	this.w = function(player, mS) {
		player = h1.cY.mU(player, mS);
		return !(player < 0 || !h1.o3.qp(player) || (h1.o3.qq(player), 0))
	}
}

function iq() {
	this.ah = new qr, this.cy = new pe, this.bq = new qs, this.bW = new qt, this.pt = new qu, this.ck = function() {
		this.cy.ck(), (new qv).ck(), this.pt.ck(), this.bW.qw()
	}
}

function hu() {
	var canvas, lI, dF, dE, qx, qy, gap, qz, fontSize, r0, r1, r2, r3, r4, r5, r6, r7, r8;

	function rF() {
		lI.clearRect(0, 0, at.cv, at.cw), lI.fillStyle = t.qO, lI.fillRect(0, 0, at.cv, at.cw), lI.fillStyle = t.rK, rJ = 0 < r6 ? r6 : Math.sqrt(r3[4] / 1e4), lI.fillRect(0, at.cw - qx - 1, Math.floor(rJ * at.cv), qx), lI.fillStyle = t.u, lI
			.fillRect(0, 0, at.cv, 1), lI.fillRect(0, 0, 1, at.cw), lI.fillRect(at.cv - 1, 0, 1, at.cw), lI.fillRect(0, at.cw - 1, at.cv, 1), lI.fillRect(0, at.cw - qx - 1, at.cv, 1);
		for (var rJ, rL, jl = 0, a4 = 0; a4 < r2.length; a4++) r4[a4] ? (aZ.aa.textAlign(lI, 0), rL = Math.floor((qy - qx + 2 * qz) * (a4 - jl + 1) / (r2.length + 1) - .7 * qz), lI.fillText(r2[a4], gap, rL), aZ.aa.textAlign(lI, 2), 5 === a4 && 0 !==
			ei.kv[eq.jj] && ei.rM[eq.jj] >= gT.rN(eq.jj) ? (lI.fillStyle = t.rO, lI.fillText(rC(a4), at.cv - gap, rL), lI.fillStyle = t.u) : lI.fillText(rC(a4), at.cv - gap, rL)) : jl++
	}

	function rC(a4) {
		return a4 < 3 ? r3[a4].toString() : 3 === a4 || 4 === a4 || 5 === a4 ? aZ.bu.le(r3[a4] / 100, 2) : a4 < 7 ? aZ.bu.jW(r3[a4]) : a4 === 7 ? at.au(r3[7]) : a4 === 8 ? __fx.utils.getMaxTroops(ei.jd, eq.jj) : __fx.utils.getDensity(eq.jj)
	}

	function rB() {
		ei.jd[eq.jj] !== r3[6] && (r3[6] = ei.jd[eq.jj], r0++)
	}
	this.ck = function() {
		r6 = r7 = 0, (r1 = new Array(8))[0] = L(47), r1[1] = eq.l6 ? L(7) : L(48), r1[2] = L(49), r1[3] = L(50), r1[4] = L(51), r1[5] = L(52, 0, "Interest"), r1[6] = L(53), r1[7] = L(54),
			r1.push("Max Troops", "Density"), // add r1
			(r2 = new Array(r1.length)).fill(""), (r3 = new Array(r1.length))[0] = eq.l6 ? 0 : eq.er, r3[1] = eq.l6 ? ed.ee : eq.r9, r3[2] = eq.ky, r3[3] = 0, r3[4] = cf.cg(1e4 * ei.jd[0], Math.max(eq.rA, 1)), r3[5] = 0 === eq.data.iIncomeType ?
			700 : 1 === eq.data.iIncomeType ? cf.cg(700 * eq.data.iIncomeValue, 64) : cf.cg(700 * eq.data.iIncomeData[eq.jj], 64), r3[6] = 0, rB(), r3[7] = 0, r5 = rC(6), (r4 = new Array(r1.length)).fill(!0), r8 = 0, r8 = eq.l6 ? (r4[0] = !1, r4[
				2] = !1, r4[3] = !1, 3) : (r4[3] = !1, 1), r0 = 0, this.resize()
	}, this.resize = function() {
		this.cv = Math.floor((d0.jF.lR() ? .1646 : .126) * 1.25 * eR.lS), this.cw = Math.floor(1.18 * this.cv), qx = Math.floor(.04 * this.cv), gap = Math.floor(.035 * this.cv), qz = .04 * this.cv, qy = this.cw, this.cw -= Math.floor(r8 * (this
			.cw - 2 * qx) / r1.length), fontSize = Math.floor(.7 * (qy - qx) / r1.length);
		var lM = aZ.aa.lT(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.cv, canvas.height = this.cw,
			function(lM, cv) {
				for (var a4 = 0; a4 < r2.length; a4++) r2[a4] = aZ.lI.rG(r1[a4], lM, cv)
			}((lI = canvas.getContext("2d", {
				alpha: !0
			})).font = lM, .575 * this.cv), aZ.aa.textBaseline(lI, 1), lI.lineWidth = 1, this.rE(), this.lU(), gM.lU(), rF()
	}, this.lU = function() {
		dF = eR.cv - this.cv - ac.gap
	}, this.rH = function() {
		dE = ac.gap
	}, this.rE = function() {
		dE = ac.gap + (gM.rI() && 0 !== ei.kv[eq.jj] && !eq.l3 ? gM.cw + ac.gap : 0)
	}, this.l0 = function(hS) {
		(hS || 100 <= r0) && (r0 = 0, rF())
	}, this.rP = function() {
		return r3[7]
	}, this.au = function(value) {
		var rQ = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * rQ) / 1e3);
		return value < 10 ? rQ + ":0" + value : rQ + ":" + value
	}, this.w = function() {
		var rd, per;
		r4[0] && eq.kx - eq.ky !== r3[0] && (r3[0] = eq.kx - eq.ky, r0++), ed.ee - r3[0] !== r3[1] && (r3[1] = ed.ee - r3[0], r0++), this.qf(), (rd = gT.re(eq.jj)) !== r3[5] && (r3[5] = rd, r0++), rB(), r3[7] += eW.rf, rd = rC(7), r5 !== rd && (
			r5 = rd, r0 += 100), rd = eq.p6 ? hH.rY() : ei.jd[je[0]], per = cf.cg(1e4 * rd, Math.max(eq.rA, 1)), r3[3] = rd, r3[4] !== per && (r0++, r3[4] = per), 8 === eq.l1 && function() {
			for (var a4 = 0; a4 < 2; a4++)
				if (!aZ.d.rc(a4)) return h5.eC.l2(), 1;
			return
		}() || r3[3] < eq.rA || ! function() {
			for (var a4 = ed.ee - 1; 0 <= a4; a4--)
				if (0 < ei.rb[ed.eg[a4]].length) return;
			return 1
		}() || h1.cY.nz().length || h5.eC.l2()
	}, this.qf = function() {
		r4[2] && eq.ky !== r3[2] && (r3[2] = eq.ky, r0 += 2 === eq.ku ? 100 : 1)
	}, this.ns = function() {
		return r3[3] === eq.rA
	}, this.rg = function(a4) {
		var rh, ri, jl;
		return 2 !== eq.ku && (a4 % 2 == 1 && (gN.l0(1, 1), eW.eX = !0), a4 === eq.rj ? (r6 = 0, rF(), !1) : (-1 !== a4 || 0 !== r7) && (ri = r6, r6 = eq.lQ ? a4 / eq.rj : (jl = performance.now(), 0 <= a4 && (rh = jl - 392 * a4, r7 = 0 === a4 ||
			rh < r7 ? rh : r7), 1 < (r6 = (jl - r7) / (392 * eq.rj)) ? 1 : r6), rF(), r6 !== ri))
	}, this.eZ = function() {
		m0.drawImage(canvas, dF, dE)
	}
}

function rk() {
	var ro, rp, rl = document.createElement("div"),
		rm = 0,
		rn = 0;
	this.show = function(dF, dE, ax, rq, rr) {
		if (rm) {
			if (!rq) return;
			this.aY()
		}
		dF === dE && -1 === dF ? (dF = ro, dE = rp) : (ro = dF, rp = dE), rr || (rn = rq), rm = 1;
		rr = eR.cv / eR.rt, rl.style.whiteSpace = "pre", rl.textContent = ax, aZ.aa.ot(rl, 5), rl.style.font = aZ.aa.lT(0, aZ.aa.nK(.015)), rl.style.padding = "0.3em 0.6em", rl.style.left = dF + "px", rl.style.top = "0px", document.body
			.appendChild(rl), rq = dF + rl.offsetWidth - rr;
		0 < rq && (rl.style.left = (ax = dF - rq) + "px", ax < 5) && (rl.style.whiteSpace = "pre-wrap"), rl.style.top = dE - rl.offsetHeight + rn * ac.rw + "px"
	}, this.aY = function(rx) {
		if (rm) {
			if (rx && rn) return 0;
			rm = 0, aT.removeChild(document.body, rl)
		}
		return 1
	}, rl.style.position = "absolute", rl.style.backgroundColor = t.da, rl.style.color = t.u, rl.style.pointerEvents = "none", rl.style.zIndex = "5", rl.style.maxWidth = "100%"
}

function ry() {
	var rz;
	this.ck = function() {
		rz = !1
	}, this.w = function() {
		var ec;
		if (function() {
				if (!rz) {
					if (eW.et() % 30 != 9) return;
					if (!aZ.d.s5(90)) return;
					rz = !0
				}
				return 1
			}() && (! function() {
				var ka = gG.s6(956);
				if (ka) {
					if (aZ.d.ji(ka.player)) return 1;
					gG.s7(956, 0)
				}
				return
			}() && (-1 === (ec = (eq.p6 ? function() {
				var id = hH.sF(),
					a5 = ed.ee;
				if (hG.qZ[id])
					for (var ef = ed.eg, sG = hG.sG, a4 = 0; a4 < a5; a4++) {
						var ec = ef[a4];
						if (sG[ec] !== id) return ec
					} else if (1 < a5) return je[a5 - 1];
				return -1
			} : function() {
				for (var sB = ed.ee, sC = ed.eg, sD = sE, a4 = 0; a4 < sB; a4++) {
					var ec = sC[a4];
					if (0 !== sD[ec]) return ec
				}
				return -1
			})()) ? ! function() {
				var ka = gG.s6(957);
				if (ka && ka.sH) {
					if (gR.sI(ka.sH.mV << 2)) return 1;
					gG.s7(957, 0)
				}
				return
			}() : (gG.an(0, L(55, [ei.sA[ec]]), 956, ec, t.u, t.qO, -1, !0), 0)))) {
			var a5 = ga.sJ.sK;
			if (0 !== a5)
				for (var cy = ga.sJ.cy, a4 = 0; a4 < a5; a4++) {
					var mV = cy[a4];
					if (gR.sI(mV << 2)) return void gG.an(0, L(56, [h0.mZ(mV), h0.mb(mV)]), 957, 0, t.u, t.qO, -1, !0, void 0, {
						aN: 1,
						mV: mV
					})
				}
		}
	}
}

function sL() {
	function sg(player, np, sX, oA) {
		var oj;
		if (gR.sI(sX)) oj = eq.fE;
		else {
			if ((oj = gR.sZ(sX)) === player) return void hE.sp(player, np - aZ.d.sq(player, np), 12);
			if (!hQ.sU(player, oj)) return void gq.j.sr(player, oj, np)
		}
		gS.ss(player, oj) || gS.st(player) ? (ei.rb[player].push(oA << 2), gS.qF(player, np, oj), g8.jn(player, !0)) : hE.sp(player, np, 12)
	}
	this.w = function() {
		for (var sM = h1.bW.sM, mX = h1.bW.mX, sN = h1.bW.sN, a4 = h1.bW.pR - 1; 0 <= a4; a4--) 65535 === sN[a4] && function(a4, oA, sS) {
			if (6 === sS) {
				if (h1.o3.sb(a4, oA)) return h1.bW.sc[a4]++, h1.bW.sN[a4] = 0, 0
			} else {
				var player = h1.bW.sd[a4] >> 3,
					a4 = h1.bW.se[a4];
				hE.sf(player), sS < 4 ? sg(player, a4, oA + h0.sY[sS] << 2, oA) : 4 === sS ? function(player, np, oA) {
					var a4, sj, sk = h0.sl,
						sm = h0.pY(oA);
					for (a4 = 0; a4 < 4; a4++)
						if (sj = sm + sk[a4], gR.sI(sj)) return sg(player, np, sj, oA);
					for (a4 = 0; a4 < 4; a4++)
						if (sj = sm + sk[a4], gR.sn(sj) && !gR.so(player, sj)) return sg(player, np, sj, oA);
					for (a4 = 0; a4 < 4; a4++)
						if (sj = sm + sk[a4], gR.sn(sj)) return sg(player, np, sj, oA)
				}(player, a4, oA) : 5 === sS && function(player, np, oA) {
					var a4, sj, sk = h0.sl,
						sm = h0.pY(oA);
					for (a4 = 0; a4 < 4; a4++)
						if (sj = sm + sk[a4], gR.sn(sj) && gR.so(player, sj)) return sg(player, np, sj, oA);
					for (a4 = 0; a4 < 4; a4++)
						if (sj = sm + sk[a4], gR.sn(sj)) return sg(player, np, sj, oA);
					for (a4 = 0; a4 < 4; a4++)
						if (sj = sm + sk[a4], gR.sI(sj)) return sg(player, np, sj, oA)
				}(player, a4, oA)
			}
			return 1
		}(a4, h0.mW(mX[a4]), sM[a4] % 64) && (h1.o3.qq(a4), h1.sP.sQ(a4))
	}, this.sR = function(player, mV, sS, mS, np) {
		if (!(5 <= sS)) {
			var sT = eq.jj;
			if (aZ.d.rc(sT) && hQ.sU(player, sT) && player !== sT && 0 !== ei.pT[sT].length && aZ.d.sV(player, 5)) {
				for (var sX, sW = !1, a4 = 0; a4 < 4; a4++)
					if (sX = mV + h0.sY[a4] << 2, gR.pZ(sX) && !gR.sI(sX) && gR.sZ(sX) === sT) {
						sW = !0;
						break
					} sW && (gG.s7(719, 0), sS = np < 25e3 ? L(57) + " (" + aZ.bu.jW(np) + ") ⛵" : L(58) + " (" + aZ.bu.jW(np) + ") 🚢", gG.an(180, sS, 719, player, t.sa, t.qO, -1, !0, void 0, {
					bw: 1,
					mS: mS
				}))
			}
		}
	}
}

function su() {
	this.cO = 0, this.cE = 0, this.mapSeed = 0, this.cI = 0, this.cJ = 0, this.cK = 0, this.cV = 0, this.cM = 0, this.spawningSeed = 0, this.oV = 0, this.sv = 0, this.kl = [], this.sw = 1048575, this.sx = 0, this.sy = [{
		cE: 0,
		mapSeed: 0,
		cI: 0,
		av: 100,
		cV: 0
	}, {
		cE: 1,
		mapSeed: 0,
		cI: 1,
		av: 200,
		cV: 0
	}, {
		cE: 2,
		mapSeed: 0,
		cI: 2,
		av: 300,
		cV: 0
	}, {
		cE: 3,
		mapSeed: 0,
		cI: 3,
		av: 400,
		cV: 0
	}, {
		cE: 0,
		mapSeed: 0,
		cI: 9,
		av: 500,
		cV: 0
	}, {
		cE: 1,
		mapSeed: 0,
		cI: 10,
		av: 600,
		cV: 0
	}, {
		cE: 2,
		mapSeed: 0,
		cI: 8,
		av: 700,
		cV: 0
	}, {
		cE: 3,
		mapSeed: 0,
		cI: 3,
		av: 800,
		cV: 0
	}]
}

function sz(nI, size, t0, t1, font) {
	var a4, t4 = .2,
		canvas = document.createElement("canvas"),
		d6 = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = nI, canvas.height = nI, d6.font = size + font, d6.textAlign = "center", d6.textBaseline = "middle", d6.fillStyle = "red", a4 = 0; a4 < t0.length; a4++) d6.fillText(t0[a4], .5 * nI, .5 * nI);
	return -1 < (canvas = function(t2) {
		var a4, t6, dh = t2.data;
		for (a4 = dh.length - 4; 0 <= a4; a4 -= 4)
			if (t6 = dh[a4], t1 <= t6) return Math.floor(a4 / (4 * nI));
		return -1
	}(d6.getImageData(0, 0, nI, nI))) && (t4 = (canvas - .5 * nI + .1 * size) / size), Math.max(t4, 0)
}

function iW() {
	this.size = 0, this.aB = 0, this.dy = null, this.ck = function(dy) {
		this.aB = 0, this.dy = dy, this.size = dy.length
	}, this.cD = function(t7) {
		return this.ck(new Uint8Array(this.t8(t7))), this.dy
	}, this.bi = function() {
		this.dy = null
	}, this.oG = function(size, t9) {
		for (var dy = this.dy, mx = this.aB + size - 1, a4 = this.aB; a4 <= mx; a4++) dy[a4 >> 3] |= (t9 >> mx - a4 & 1) << 7 - (7 & a4);
		this.aB += size, this.aB > 8 * this.size && console.error("Wrapper Overflow")
	}, this.tA = function(size, t9) {
		var bw = size >> 1,
			dh = 1 << bw;
		this.oG(size - bw, cf.cg(t9, dh)), this.oG(bw, t9 % dh)
	}, this.tB = function(size) {
		for (var dy = this.dy, mx = this.aB + size, a4 = this.aB; a4 < mx; a4++) dy[a4 >> 3] &= 255 ^ 128 >>> (7 & a4)
	}, this.t8 = function(t7) {
		return t7 + 7 >> 3
	}, this.tC = function(z, tD, mx, tE) {
		for (var a4 = tD; a4 < mx; a4++) this.oG(tE, z[a4])
	}
}

function tF() {
	var jq, jr, js, ju;

	function tG(id) {
		0 !== d0.id || bp.cy.data[140].value ? 0 === id ? aT.bl(8, 1, new jw(16)) : aT.bl(2) : aT.bW.tW(aT.dK, 0 === id ? 16 : 0)
	}
	this.show = function() {
		d0.jF.setState(12), jq.show(), this.resize(), this.w()
	}, this.aY = function() {
		jq.aY()
	}, this.resize = function() {
		jq.resize(), jr.resize()
	}, this.w = function() {
		8 === eY.tP() && (2 <= hE.tQ ? js[2].dR === t.db && js[2].c6(0) : js[2].dR !== t.db && js[2].c6(t.db), !eq.lQ && gF.tS(eq.jj) ? js[1].dR === t.db && js[1].c6(0) : js[1].dR !== t.db && js[1].c6(t.db), !eq.lQ && gh.tT(eq.jj) ? js[0].dR ===
			t.db && js[0].c6(0) : js[0].dR !== t.db && js[0].c6(t.db))
	}, this.ae = function(af) {
		2 === af && jq.ag[0].ah()
	}, js = [new aS(L(59), function() {
		tG(0)
	}), new aS(L(44), function() {
		aT.bl(16)
	}), new aS(L(60), function() {
		aT.bl(17)
	}), new aS(L(61), function() {
		aT.bW.tH()
	}, 0, 0, 1), new aS(L(62), function() {
		aT.bl(3, 1)
	}), new aS(L(63), function() {
		aT.bl(18)
	}), new aS(L(25), function() {
		aT.bl(31)
	}), new aS(L(64), function() {
		tG(1)
	}), new aS(L(65), function() {
		var tX = ["Patreon", L(74), L(75), "YouTube Tutorial", "Discord", L(76), L(38), L(77), L(41), L(78), "Terms", "Privacy"],
			tY = [gz.fW, gz.fX, gz.fY, "https://www.youtube.com/watch?v=6QBmA9N1668", gz.fa, gz.fO, gz.fU, gz.fV, gz.fT, gz.fS, gz.fP, gz.fR];
		1 === d0.id ? (tX.splice(2, 1), tX.splice(0, 1), tY.splice(2, 1), tY.splice(0, 1)) : 2 === d0.id && (tX.splice(1, 1), tX.splice(0, 1), tY.splice(1, 1), tY.splice(0, 1)), aT.bl(4, 1, new tZ(L(65), aZ.aa.ta(tX, tY), !1, [new aS(
			"⬅️ " + L(1),
			function() {
				aT.bl(1)
			})]))
	}), new aS(L(66), function() {
		aT.bl(4, 1, new tZ(L(66), e1.oX + "<br><a href='" + gz.fO + "' target='_blank'>" + gz.fO + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new aS("⬅️ " + L(1), function() {
				aT.bl(1)
			})]))
	}), new aS(L(67), function() {
		aT.bl(4, 1, new tZ(L(67), L(79) + "<br>" + L(80), !1, [new aS("⬅️ " + L(1), function() {
			aT.bl(1)
		}), new aS(L(81), function() {
			d0.jF.tb(), aT.bl(1)
		})]))
	}), new aS(L(68), function() {
		d0.jF.tL(), aT.bl(4, 1, new tZ(L(82), L(83) + " <a href='" + gz.fR + "' target='_blank'>" + gz.fR + "</a>", !1, [new aS("⬅️ " + L(1), function() {
			aT.bl(1)
		})]))
	})], ju = [new aS("⬅️ " + L(1), function() {
		aT.bW.tM()
	})], 8 === eY.tP() && (js.unshift(new aS(L(0), function() {
		aT.bl(30)
	})), js.unshift(new aS(L(71), function() {
		2 <= hE.tQ && (aT.bh(), hF.tR(), eW.eX = !0)
	}, 0, 1)), js.unshift(new aS(L(72), function() {
		!eq.lQ && gF.tS(eq.jj) && (gq.b.kp(), aT.bh(), gF.lf) && gF.tR()
	}, 0, 1)), js.unshift(new aS(L(73), function() {
		!eq.lQ && gh.tT(eq.jj) && (h7.tU(2), gq.b.tV(), aT.bh(), gF.lf) && gF.tR()
	}, 0, 1))), 1 === d0.id && 5 <= d0.oX && js.push(new aS(L(69), function() {
		d0.jF.tO()
	})), jq = new aR(L(70), ju), jr = new jv(js, jq.aV)
}

function ii() {
	function u0() {
		return {
			mO: cC.mO,
			mP: cC.mP,
			qI: cC.qI,
			te: cC.te,
			tf: cC.tf,
			tg: cC.tg,
			cE: cC.cE,
			mapSeed: cC.mapSeed,
			th: cC.th
		}
	}

	function tp(a4) {
		return 1 !== a4 && cC.tt(a4) && a4 !== cC.u4()
	}
	this.tc = 24, this.td = 12, this.cz = 4096, this.mO = 0, this.mP = 0, this.qI = null, this.te = null, this.tf = null, this.tg = null, this.cE = 0, this.mapSeed = 0, this.th = !1, this.ti = new tj, this.cF = new tk, this.tl = new tm, this.ck =
		function() {
			this.cF.ck()
		}, this.cD = function(map, tn) {
			((map %= this.tc) !== this.cE || tp(this.cE) && tn !== this.mapSeed) && (this.th = !1, this.ti.tq(), gi.tr(map), this.cE = map, this.mapSeed = tn, tp(map) && (cC.cF.cG[map].ts = tn), this.tt(this.cE) ? (map = cC.cF.cG[this.cE], this.mO =
				map.cv, this.mP = map.cw, gi.tr(map.ts), gc.cD([this.mO, this.mP, map.m4, map.m1]), tv(), gb.tw(), gc.tx()) : tu())
		}, this.ty = function(map, tn) {
			var tz = u0(),
				map = (this.cD(map, tn), this.ti.tq(), u0());
			return tn = tz, cC.mO = tn.mO, cC.mP = tn.mP, cC.qI = tn.qI, cC.te = tn.te, cC.tf = tn.tf, cC.tg = tn.tg, cC.cE = tn.cE, cC.mapSeed = tn.mapSeed, cC.th = tn.th, map
		}, this.u3 = function(canvas) {
			canvas && this.qI !== canvas && (this.mO = canvas.width, this.mP = canvas.height, this.qI = canvas, this.te = this.qI.getContext("2d", {
				alpha: !1
			}), this.t2 = this.te.getImageData(0, 0, this.mO, this.mP), this.tg = this.t2.data, this.cE = this.u4(), this.mapSeed = 0, cC.cF.cG[this.cE].name = eq.data.mapName)
		}, this.u5 = function(a4) {
			return 3 === a4 || 7 === a4 || 9 === a4 || 21 === a4 || a4 === this.u4()
		}, this.u6 = function(a4) {
			return 2 === a4 || 7 === a4 || 9 === a4 || 20 === a4
		}, this.u7 = function(a4) {
			return 1 === a4
		}, this.u4 = function() {
			return this.tc
		}, this.tt = function(a4) {
			return void 0 === this.cF.cG[a4].u8
		}, this.u9 = function(ka) {
			return 0 === ka.mapType ? ka.mapProceduralIndex < 10 ? ka.mapProceduralIndex : 10 + ka.mapProceduralIndex : 1 === ka.mapType ? 10 <= ka.mapRealisticIndex ? 22 + ka.mapRealisticIndex - 10 : ka.mapRealisticIndex + 10 : void 0
		}, this.uA = function(ka, uB) {
			0 === ka.mapType ? ka.mapProceduralIndex = uB < 10 ? uB : uB - 10 : 1 === ka.mapType && (ka.mapRealisticIndex = uB - (22 <= uB ? 12 : 10))
		}
}

function im() {
	this.id = 0, this.oX = 0, this.uC = null, this.d5 = null, this.uD = null, this.uE = null, this.jF = new uF, this.ck = function() {
		var self, oX;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (oX = Android.getVersion()) < 12 || (self.oX = oX, self.id = 1, self.d5 = Android),
			function(self) {
				var oX;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.uD = mwIOSdataX, self.uE = window.webkit.messageHandlers.iosCommandA, oX = self
					.uD.version, self.oX = oX ? Number(oX) : 0)
			}(this),
			function(self) {
				var uC;
				try {
					if (!(uC = window.localStorage)) return;
					uC.setItem("tls7", "1"), uC.removeItem("tls7")
				} catch (error) {
					return
				}
				self.uC = uC
			}(this)
	}
}

function uJ() {
	this.av = eW.av, this.aB = 0, this.eO = 0, this.uK = 0, this.uL = null, this.uM = 7, this.uN = 0, this.ck = function() {
		this.uK = 0, this.uL = [], this.aB = 0, this.eO = 0
	}, this.uO = function(dy) {
		if (eq.l3) this.rg(dy);
		else if (this.uL.push(dy), 2 === eq.ku) {
			for (var a4 = 0; a4 < this.uL.length; a4++) gq.h.w(this.uL[a4]);
			this.uL = []
		}
	}, this.rg = function(dy) {
		2 !== eq.ku && (gq.h.w(dy), gr.w(), at.rg(this.uK), this.uK === eq.rj ? (eq.l7.w(), this.uK = 0, this.aB = 0, this.eO = 0, this.av = eW.av) : (this.uK++, gU.uP(), gU.l0(!0), hD.q2()))
	}, this.w = function() {
		eR.w(), eq.l3 ? (eW.eX = at.rg(-1) || eW.eX, qn()) : (0 !== this.aB || eW.av >= this.av && (this.av += eW.rf * Math.floor(1 + (eW.av - this.av) / eW.rf), 2 === eq.ku ? qe() : this.uQ(), this.aB++, 27 < eW.av - this.uN)) && this.uR(),
		qk(), eW.eX && (eW.eX = !1, qG()), this.uN = eW.av
	}, this.uR = function() {
		eW.eX = !0, qm(), this.aB = 0
	}, this.uQ = function() {
		var uS, a4;
		if (this.eO !== 7 * this.uK) qg(), hD.q2();
		else {
			uS = !1;
			loop: for (; this.uT() && (uS = !0, qg(), 2 !== eq.ku) && 0 < this.uL.length;)
				for (a4 = this.uM - 2; 0 <= a4; a4--)
					if (qg(), 2 === eq.ku) break loop;
			uS ? hD.q2() : (qe(), hD.q4())
		}
	}, this.uT = function() {
		return 0 < this.uL.length && (this.uK++, gq.h.w(this.uL[0]), this.uL.shift(), !0)
	}
}

function iA() {
	var uU, uV, uW;
	this.ck = function() {
		uU = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), uV =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), uW = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var pw = ["K ", " Y", "E ", " Z", " z", " s", "S "], px = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a4 = uU.length - 1; 0 <= a4; a4--)
			for (var aN = pw.length - 1; 0 <= aN; aN--) uU[a4] = uU[a4].replace(pw[aN], px[aN]);
		if (__fx.settings.realisticNames) uU = realisticNames;
	}, this.uX = function() {
		var a5 = eq.er,
			sA = ei.sA,
			ud = ei.ud,
			playerNamesData = eq.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < a5)
			for (var a4 = 0; a4 < a5; a4++) sA[a4] = ud[a4] = "Player " + gi.o1(1e3);
		else
			for (a4 = 0; a4 < a5; a4++) sA[a4] = ud[a4] = playerNamesData[a4]
	}, this.cD = function() {
		if (9 === eq.l1) {
			for (var t6 = gi.random(), ue = uW, uf = uV, np = g7.np, a5 = ue.length, rQ = eq.data.teamPlayerCount[7], sA = ei.sA, ud = ei.ud, a4 = rQ - 1; a4 >= eq.er; a4--) sA[a4] = ud[a4] = ue[(a4 + t6) % a5];
			for (a5 = uf.length - 1, a4 = rQ; a4 < eq.fE; a4++) sA[a4] = ud[a4] = uf[np[a4] ? a5 : a4 % a5]
		} else(2 === eq.data.playerNamesType ? function() {
			for (var a5 = eq.fE, sA = ei.sA, ud = ei.ud, playerNamesData = eq.data.playerNamesData, a4 = eq.er; a4 < a5; a4++) sA[a4] = ud[a4] = playerNamesData[a4]
		} : 1 === eq.data.playerNamesType ? function() {
			for (var sA = ei.sA, ud = ei.ud, a4 = eq.er; a4 < eq.fE; a4++) sA[a4] = ud[a4] = "Bot " + gi.o1(1e3)
		} : function() {
			for (var ug = uU, a5 = ug.length, t6 = gi.random(), sA = ei.sA, ud = ei.ud, a4 = eq.er; a4 < eq.fE; a4++) sA[a4] = ud[a4] = ug[(a4 + t6) % a5]
		})()
	}
}

function uh(ui) {
	var uj = document.createElement("div"),
		uk = document.createElement("div"),
		rm = (this.dF = 0, this.dE = 0);

	function um() {
		bQ.bR.aY()
	}
	this.bU = ui, this.show = function(dF, dE, uo) {
		if (rm) return [0, 0];
		rm = 1, this.dF = dF, this.dE = dE,
			function(self, uo) {
				var cv = aZ.aa.nK(.16, .7),
					cw = ui.length * cv / 3,
					uq = eR.cv / eR.rt,
					ur = eR.cw / eR.rt,
					d3 = Math.min(1, Math.min(uq / cv, ur / cw));
				cv *= d3, cw *= d3, uo && (self.dF += aZ.aa.nK(.03, .5)), self.dF = cf.fH(self.dF, 0, uq - cv), self.dE = cf.fH(self.dE, 0, ur - cw), uk.style.left = self.dF + "px", uk.style.top = self.dE + "px", uk.style.width = cv + "px", uk
					.style.height = cw + "px", uk.style.font = aZ.aa.lT(0, .3 * cw / ui.length), aZ.aa.ot(uk, 5);
				for (var a4 = 1; a4 < ui.length; a4++) aZ.aa.ot(ui[a4].button, 8)
			}(this, uo), document.body.appendChild(uj)
	}, this.aY = function() {
		rm && (rm = 0, uj.removeEventListener("click", um), aT.removeChild(document.body, uj))
	};
	for (var a4 = 0; a4 < ui.length; a4++) new bT("" + (1 + a4), ui[a4].button, 0, 1);
	uj.style.position = "fixed", uj.style.top = "0", uj.style.left = "0", uj.style.width = "100%", uj.style.height = "100%", uj.style.zIndex = "5", uk.style.position = "absolute",
		function() {
			for (var un = (100 / ui.length).toFixed(2) + "%", a4 = 0; a4 < ui.length; a4++) ui[a4].button.style.width = "100%", ui[a4].button.style.height = ui[a4].button.style.maxHeight = un, ui[a4].button.style.padding = "0.0em 0.9em", uk
				.appendChild(ui[a4].button)
		}(), uj.appendChild(uk), uj.addEventListener("click", um)
}

function tm() {
	this.us = function() {
		for (var ec, dF, tz, ut = q8, uu = cC.tg, cv = cC.mO, uv = cv - 1, uw = cC.mP - 1, aI = 0, dE = 1; dE < uw; dE++)
			for (tz = dE * cv, dF = 1; dF < uv; dF++) uu[ec = tz + dF << 2] === uu[1 + ec] && uu[ec] === uu[2 + ec] && (aI++, ut[2 + ec] = 4);
		gb.tl = aI
	}, this.ux = function(uy, uz) {
		for (var ut = q8, cv = cC.mO, uv = cv - 1, uw = cC.mP - 1, id = 0, dE = 1; dE < uw; dE++)
			for (var tz = dE * cv, dF = 1; dF < uv; dF++) {
				var rJ = 2 + (tz + dF << 2);
				ut[rJ] === uy && (! function(rJ, id, uy, uz) {
					var a5 = 1,
						ut = q8,
						v1 = gR.v1,
						v2 = [rJ],
						v3 = id >> 8 << 1,
						v4 = 255 & id;
					ut[rJ - 2] = v3, ut[rJ - 1] = v4, ut[rJ] = 5;
					for (; a5;) {
						for (var v5 = [], a4 = 0; a4 < a5; a4++)
							for (var sm = v2[a4], dh = 3; 0 <= dh; dh--) {
								var sj = sm + v1[dh];
								ut[sj] === uy && (ut[sj - 2] = v3, ut[sj - 1] = v4, ut[sj] = uz, v5.push(sj))
							}
						a5 = (v2 = v5).length
					}
				}(rJ, id, uy, uz), id = (id + 1) % 32768)
			}
	}, this.v6 = function() {
		for (var ut = q8, cv = cC.mO, uv = cv - 3, uw = cC.mP - 3, v9 = 12 * cv, dE = 3; dE < uw; dE++)
			for (var tz = dE * cv, dF = 3; dF < uv; dF++) {
				var rJ = 2 + (tz + dF << 2);
				2 !== ut[rJ] || 2 === ut[rJ - 12] && 2 === ut[12 + rJ] && 2 === ut[rJ - v9] && 2 === ut[rJ + v9] || (ut[rJ - 2] = 1 | ut[rJ - 2])
			}
	}
}

function vA(vB, vC) {
	var vJ, self, vD = document.createElement("div"),
		vE = document.createElement("div"),
		vF = document.createElement("div"),
		vG = null,
		vK = (this.bc = new fG({
			value: "",
			aB: -1
		}, 0, vH, function(bd) {
			bd.target.value = aZ.bu.vQ(bd.target.value), vG.r.textContent = 127 - bd.target.value.length
		}), 0),
		aQ = 1,
		vL = 0,
		vM = 1048575;

	function vH() {
		vB(), vG.r.textContent = 127
	}

	function am(al, ka) {
		ka && (ka.kO = 1, al.appendChild(bQ.b1.transform(ka)))
	}

	function aX(hS) {
		aQ ? vD.scrollTop = vD.scrollHeight : hS && (vD.scrollTop = vL)
	}
	this.bz = function(vR) {
			vM = 1048575, vE.textContent = "", vR || this.by()
		}, this.by = function() {
			var kS = bQ.bW.bX[0],
				kS = bQ.bW.cB[kS],
				kl = kS.kl,
				a5 = kl.length,
				tD = 1048575 === vM ? 0 : a5 - (kS.sw - vM + 1048575) % 1048575;
			if (vM = kS.sw, !(a5 <= (tD = Math.max(tD, 0)))) {
				for (var al = document.createDocumentFragment(), a4 = tD; a4 < a5; a4++) am(al, bQ.cY.kM(kl[a4], bQ.cY.kC(kl[a4])));
				vE.appendChild(al), aX()
			}
		}, this.vS = function(kG) {
			var al = document.createDocumentFragment();
			am(al, kG), vE.appendChild(al), aX()
		}, this.show = function(or) {
			or.appendChild(vD), or.appendChild(vF), this.resize(or)
		}, this.aY = function(or) {
			aT.removeChild(or, vD), aT.removeChild(or, vF)
		}, this.resize = function(or) {
			vK = or ? or.offsetHeight : vK;
			var or = aZ.aa.nK(.04, .75),
				vU = Math.max(or, vK - or),
				vV = eR.cv / eR.rt,
				vW = .7 * vV,
				vX = aZ.aa.ab(vK - or - vU),
				vU = (vF.style.height = aZ.aa.ab(or), vD.style.height = aZ.aa.ab(vU), eR.cw > eR.cv || d0.jF.lR() ? (vF.style.top = vX, vD.style.top = aZ.aa.ab(vK - vU), aZ.aa.ot(vD, 8)) : (vD.style.top = vX, vF.style.top = aZ.aa.ab(vK - or), aZ.aa
					.ot(vD, 2)), this.bc.bd.style.width = aZ.aa.ab(vW), this.bc.bd.style.fontSize = vJ.button.style.fontSize = aZ.aa.ab(.5 * or), aZ.aa.ot(this.bc.bd, 6), vJ.button.style.left = aZ.aa.ab(vW), vJ.button.style.width = aZ.aa.ab(vV -
					vW), .385 * or);
			d0.jF.lR() && (vU *= .8 - .12 * (eR.cv > eR.cw)), vE.style.marginLeft = vE.style.marginRight = aZ.aa.ab(.5 * vU), vE.style.fontSize = aZ.aa.ab(vU), aX(1)
		}, (self = this).bc.bd.vN = 127, vD.style.position = "absolute", vD.style.left = "0", vD.style.width = "100%", vD.style.overflowX = "hidden", vD.style.overflowY = "auto", vD.style.font = "inherit", vD.style.backgroundColor = t.vO, vD
		.addEventListener("scroll", function() {
			vL = vD.scrollTop, aQ = vL < vD.scrollHeight - vD.clientHeight - 2 ? 0 : 1
		}), vE.style.font = "inherit", vF.style.position = "absolute", vF.style.left = "0", vF.style.width = "100%", self.bc.bd.setAttribute("placeholder", L(84)), self.bc.bd.style.position = "absolute", self.bc.bd.style.top = "0", self.bc.bd.style
		.left = "0", self.bc.bd.style.height = "100%", self.bc.bd.style.backgroundColor = t.vP, self.bc.bd.style.textAlign = "center", (vJ = new aS(L(85), vH)).button.top = "0", vJ.button.style.position = "absolute", vJ.button.style.height = "100%",
		vJ.c6(t.bJ), vG = new bT("127", vJ.button, 1, 1), vD.appendChild(vE), vF.appendChild(self.bc.bd), vF.appendChild(vJ.button)
}

function j6() {
	var va = new Array(1),
		vb = new Array(1),
		vc = 20,
		qC = 0,
		vd = !1;

	function vf() {
		vc++, hO.play()
	}
	this.ck = function() {
		if (!window.document.documentMode) {
			for (var a4 = 0; 0 <= a4; a4--) ! function(a4, src) {
				vb[a4] = 0, va[a4] = document.createElement("audio"), va[a4].src = src, va[a4].setAttribute("preload", "auto"), va[a4].setAttribute("controls", "none"), va[a4].style.display = "none", va[a4].onpause = function() {
					vb[a4] = 1
				}, va[a4].oncanplaythrough = function() {
					vb[a4] = 0 === vb[a4] ? 1 : vb[a4]
				}, document.body.appendChild(va[a4])
			}(a4,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			vd = !0
		}
	}, this.bi = function() {
		if (vd) {
			vd = !1;
			for (var a4 = 0; 0 <= a4; a4--) va[a4].onpause = null, va[a4].oncanplaythrough = null, aT.removeChild(document.body, va[a4]), va[a4] = null
		}
	}, this.play = function() {
		if (vd) {
			var jl = performance.now();
			if (qC + 66 < jl)
				for (var a4 = 0; 0 <= a4; a4--)
					if (1 === vb[a4]) return qC = jl, vb[a4] = 2, void va[a4].play();
			0 < vc && (vc--, setTimeout(vf, 66))
		}
	}
}

function i4() {
	this.vg = new vh
}

function vi() {
	this.ck = function() {
		8 === eq.l1 && gG.vj()
	}, this.vk = function(vl) {
		var elo = eq.data.elo,
			ru = (elo[vl] - elo[1 - vl]) / 10,
			ru = 8 / (1 + Math.pow(2, ru / 32)),
			ru = Math.floor(10 * ru + .5),
			vn = elo[vl] + ru,
			vo = this.vp(vn),
			elo = this.vp(elo[1 - vl] - ru),
			ru = (0 === vl ? gG.vr(vo, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : gG.vr(elo, vo, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), ((1 + eq.pD) * vn / 500).toFixed(2));
		vl === eq.jj ? gG.an(640, L(86, [ru]), 40, 0, t.u, t.qO, -1, !1) : gG.an(640, L(87, [ei.sA[vl], ru]), 40, 0, t.u, t.qO, -1, !1)
	}, this.vp = function(elo) {
		return 16e3 === (elo = cf.fH(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function bH(ui, dN, vt) {
	this.ap = document.createElement("div"), this.bU = ui;
	var vu = 0;
	this.resize = function(or, vv) {
		var a5 = ui.length;
		if (!vt)
			for (var a4 = 1; a4 < a5; a4++) aZ.aa.ot(ui[a4].button, 4);
		for (var vw = 0, a4 = 0; a4 < a5; a4++) vw += ui[a4].button.offsetWidth;
		if (or && (vu = or.offsetWidth), vv && vw < vu)
			for (a4 = 0; a4 < a5; a4++) ui[a4].button.style.width = (100 * ui[a4].button.offsetWidth / vw).toFixed(2) + "%";
		else
			for (a4 = 0; a4 < a5; a4++) ui[a4].button.style.width = "auto";
		vv || this.resize(or, 1)
	};
	var ls = this;
	ls.ap.style.height = ls.ap.style.maxHeight = "100%";
	for (var a4 = 0; a4 < ui.length; a4++) ui[a4].c6(dN), ui[a4].button.style.height = "100%", ui[a4].button.style.padding = "0.0em 0.9em", ls.ap.appendChild(ui[a4].button)
}

function hZ() {
	this.data = new vx;
	var vy = (new vz).L84,
		w2 = (this.w0 = vy, !(this.w1 = "en"));
	this.ck = function() {
		var ax, z;
		w2 = !1, ("en" === (ax = bp.cy.data[12].value).split("-")[0].toLowerCase() ? (gp.w0 = vy, gp.w1 = ax, 1) : bp.cy.data[12].value === bp.cy.data[145].value && 0 < bp.cy.data[146].value && (ax = bp.cy.data[146].value, (z = bp.ah.w9(ax, !1))
			.length === ax) && !!aZ.cb.wA(z) && function(z) {
			for (var a5 = z.length, cw = 0; cw < a5; cw++) z[cw] = z[cw].replace("&#39;", "'");
			var wC = bp.ah.w9(a5, !0);
			if (a5 !== wC.length) return !1;
			if (!aZ.cb.wA(wC)) return !1;
			for (var rQ = vy.length, wD = new Array(rQ), wE = rQ === a5, aI = Math.min(a5, rQ), a4 = 0; a4 < rQ; a4++)
				if (wD[a4] = vy[a4], a4 < a5 && wC[a4] === wD[a4]) wD[a4] = z[a4];
				else {
					wE = !1;
					for (var bw = 0; bw < aI; bw++)
						if (wC[bw] === wD[a4]) {
							wD[a4] = z[bw];
							break
						}
				} return gp.w0 = wD, gp.w1 = bp.cy.data[12].value, wE
		}(z)) || (w2 = !0)
	}, this.jC = function() {
		hG.jB(), g7.jB(), hF.jB(), hE.jB(), eP.ck(), hN = new w7
	}, this.w8 = function() {
		return this.w0 === vy || !vy.length
	}, this.wF = function() {
		var wG;
		return !!w2 && (w2 = !1, 0 !== vy.length) && (wG = bp.cy.data[12].value, bj.n9.oN(0, wG.slice(0, 20)), !0)
	}, this.wH = function(z) {
		z.length !== vy.length ? 8 === aT.dK && aT.c0().wI(30, 0, 1) : (this.w0 = z, this.w1 = bp.cy.data[12].value, bp.bq.br(145, this.w1), bp.bq.br(146, z.length), bp.ah.wJ(z, !1), bp.ah.wJ(vy, !0), 8 === aT.dK ? aT.c0().wI(30) : 0 === eY
		.tP() && 5 === aT.dK && aT.bW.tM())
	}, this.ob = function() {
		var wK, z = navigator.languages;
		return z && z.length ? (wK = Math.max(gp.data.wL(z[0]), 0), 1 === z.length ? [wK, wK] : [wK, Math.max(gp.data.wL(z[1]), 0)]) : [0, 0]
	}
}

function iv() {
	var wM, wN = new Uint8Array(5),
		wO = new Uint8Array(5);
	this.wP = new ry, this.ck = function() {
		for (var a9 = bp.cy.data[119].value, a4 = 0; a4 < wN.length; a4++) wN[a4] = (a9 >> 2 * a4) % 4
	}, this.wQ = function() {
		wM = [L(88), "", L(89, [h9.wR[28]]), L(90, [h9.wR[26]]), L(91, [h9.wR[0]])], this.wP.ck()
	}, this.w = function() {
		this.wP.w()
	}, this.tU = function(id) {
		1 < id && d1.d2() || ! function(aB) {
			if (3 === wN[aB] || 1 === wO[aB]) return;
			if (wO[aB] = 1, !(Math.random() < .6)) {
				wN[aB]++;
				for (var a9 = 0, a4 = 0; a4 < wN.length; a4++) a9 += wN[a4] << 2 * a4;
				bp.bq.br(119, a9)
			}
			return 1
		}(id) || gG.wT(wM[id])
	}
}

function eK() {
	this.bf = function() {
		if (2 === eq.p4) eq.wU = 2;
		else {
			if (8 === eq.l1) aZ.d.el(0) || 0 === ei.kv[0] ? eq.wW = 1 : aZ.d.el(1) || 0 === ei.kv[1] ? eq.wW = 0 : eq.wW = +(ei.jd[1] > ei.jd[0]);
			else {
				if (eq.p6) {
					var wX = hH.wY();
					if (eq.qa = wX, hG.qZ[wX]) return void(eq.wU = +(hG.sG[eq.jj] === wX))
				}
				eq.wW = je[0]
			}
			eq.wU = +(eq.wW === eq.jj)
		}
	}
}

function ir() {
	this.wZ = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.wa = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", t.u, "rgb(170,170,170)"
	], this.wb = [t.u, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", t.u, t.wc], this.wd = [t.wc, t.u, t.u, t.u, t.wc, t.wc, t.wc, t.wc, t.u];
	var we = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.wf = ["rgba(" + we[0] + ",", "rgba(" + we[1] + ",", "rgba(" + we[2] + ",", "rgba(" + we[3] + ",", "rgba(" + we[4] + ",", "rgba(" + we[5] + ",", "rgba(" + we[6] + ",", "rgba(" + we[7] + ",", "rgba(" + we[8] + ",", "rgba(" + we[9] + ","], this
		.wg = ["rgb(" + we[0] + ")", "rgb(" + we[1] + ")", "rgb(" + we[2] + ")", "rgb(" + we[3] + ")", "rgb(" + we[4] + ")", "rgb(" + we[5] + ")", "rgb(" + we[6] + ")", "rgb(" + we[7] + ")", "rgb(" + we[8] + ")", "rgb(" + we[9] + ")"], this.wh =
		null, this.wi = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.wj = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.qZ = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.sG = new Uint8Array(eq.fE), this.wk = new Uint8Array(eq.fE), this.wl = new Uint16Array(eq.fE), this.wm = new Uint16Array(this.qZ.length + 1), this.wn = new Uint16Array(this.qZ.length), this.jB =
		function() {
			this.wh = [L(92), L(93), L(94), L(95), L(96), L(97), L(98), L(99), L(100)]
		}, this.ck = function() {
			if (this.sG.fill(0), this.wk.fill(0), this.wo(), eq.p6) {
				if (9 === eq.l1) {
					for (var sG = hG.sG, a4 = eq.data.teamPlayerCount[7] - 1; 0 <= a4; a4--) sG[a4] = 1;
					var a5 = eq.fE;
					for (a4 = eq.data.teamPlayerCount[7]; a4 < a5; a4++) sG[a4] = 2;
					hG.qZ[1] = 7, hG.qZ[2] = 8
				} else eq.l6 ? function() {
					var wj = hG.wj,
						colorsData = eq.data.colorsData;
					if (!eq.data.selectableColor)
						for (var a4 = eq.er - 1; 0 <= a4; a4--) colorsData[a4] = gi.o1(262144);
					var x2 = 0,
						v7 = 768,
						x3 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = eq.data.teamPlayerCount;
					for (a4 = 0; a4 < 9; a4++)
						if (teamPlayerCount[a4]) {
							for (var dh = 0, bw = 0; bw < 3; bw++) dh += Math.abs(wj[a4][bw] - x3[bw]);
							dh < v7 && (x2 = a4, v7 = dh)
						} var x4 = new Uint16Array(9);
					for (a4 = 0; a4 < 9; a4++) x4[a4] = teamPlayerCount[a4];
					var qZ = hG.qZ,
						x5 = new Uint8Array(9),
						aI = (qZ[0] = 0, 1);
					for (a4 = 1; a4 < 9; a4++) x4[a4] && (x5[a4] = aI, qZ[aI++] = a4);
					var tD = eq.er,
						sG = hG.sG;
					x4[x2] ? (x4[x2]--, sG[0] = x5[x2]) : tD = 0;
					var af = 0;
					for (a4 = tD; a4 < eq.x6; a4++) {
						var aA = qZ[af];
						if (x4[aA]) x4[aA]--, sG[a4] = x5[aA];
						else if (a4--, 9 <= ++af) return console.log("error 325")
					}
				}() : this.w();
				! function() {
					for (var a5 = eq.fE, wl = hG.wl, wm = hG.wm, wn = hG.wn, sG = hG.sG, qZ = hG.qZ, xG = qZ.length, cy = new Array(xG), a4 = 0; a4 < xG; a4++) cy[a4] = [];
					for (a4 = 0; a4 < a5; a4++) cy[qZ[sG[a4]]].push(a4);
					for (a4 = 1; a4 <= xG; a4++) wm[a4] = wm[a4 - 1] + cy[a4 - 1].length;
					for (a4 = 0; a4 < xG; a4++)
						for (var aI = cy[a4].length, rQ = wm[a4], aA = 0; aA < aI; aA++) wl[aA + rQ] = cy[a4][aA];
					var er = eq.er;
					for (a4 = 0; a4 < xG; a4++)
						for (aI = cy[a4].length, rQ = wm[a4], aA = 0; aA < aI; aA++)
							if (wl[aA + rQ] >= er) {
								wn[a4] = aA;
								break
							}
				}(), ! function() {
					for (var a5 = eq.fE, sG = hG.sG, wk = hG.wk, qZ = hG.qZ, a4 = 0; a4 < a5; a4++) wk[a4] = qZ[sG[a4]];
					9 === eq.l1 && wk.fill(1, a5 - gj.xH[5])
				}()
			}
		}, this.wo = function() {
			for (var a4 = this.qZ.length - 1; 0 <= a4; a4--) this.qZ[a4] = a4
		}, this.w = function() {
			var wt = new Uint8Array(eq.er),
				wu = new Uint8Array(eq.er),
				wv = new Uint16Array(8),
				ww = new Uint16Array(this.qZ.length);
			this.wx(wt, wu, wv, 1), this.wy(wv), this.wz(ww, wt, wu), this.x0(wt, wu, ww), this.x1()
		}, this.wx = function(wt, wu, x4, x7) {
			for (var bw, bd, x8, a5 = this.qZ.length - x7, z = new Uint16Array(a5), wj = this.wj, colorsData = eq.data.colorsData, a4 = eq.er - 1; 0 <= a4; a4--) {
				for (bw = a5; x7 <= bw; bw--) z[bw - 1] = Math.abs(4 * (colorsData[a4] >> 12) - wj[bw][0]) + Math.abs(4 * (colorsData[a4] >> 6 & 63) - wj[bw][1]) + Math.abs(4 * (63 & colorsData[a4]) - wj[bw][2]);
				for (x8 = 768, bw = a5 - 1; 0 <= bw; bw--) z[bd = (bw + a4) % a5] < x8 && (x8 = z[bd], wt[a4] = bd);
				for (x4[wt[a4]] += 4, x8 = 768, bw = a5 - 1; 0 <= bw; bw--) z[bd = (bw + a4) % a5] < x8 && bd !== wt[a4] && (x8 = z[bd], wu[a4] = bd);
				x4[wu[a4]]++
			}
		}, this.wy = function(x4) {
			for (var bw, x9, a5 = this.qZ.length - 1, a4 = a5; 0 <= a4; a4--) this.qZ[a4] = a4;
			for (a4 = a5 - 1; 0 <= a4; a4--) x4[a4]++;
			for (a4 = 1; a4 <= a5; a4++) {
				for (x9 = 0, bw = 1; bw < a5; bw++) x4[bw] > x4[x9] && (x9 = bw);
				x4[x9] = 0, this.qZ[a4] = x9 + 1
			}
		}, this.wz = function(ww, wt, wu) {
			var bw, kf, af, dh, bd, d3, rh, xA = this.qZ.length - 1,
				dc = new Uint16Array(xA),
				xB = [],
				xC = 0,
				ke = [],
				xD = [];
			loop: for (var a4 = 0; a4 < eq.er; a4++)
				if (null !== (kf = aZ.bu.kg(ei.ud[a4]))) {
					for (bw = ke.length - 1; 0 <= bw; bw--)
						if (kf === ke[bw]) {
							xD[bw].push(a4), xC = Math.max(xC, xD[bw].length);
							continue loop
						} ke.push(kf), xB.push(!1), xD.push([a4]), xC = Math.max(xC, 1)
				}
			for (; 2 < eq.xE && xC > cf.cg(eq.er, eq.xE);) eq.xE--, eq.l1--;
			for (bw = ke.length - 1; 0 <= bw; bw--) {
				for (dh = -1, af = ke.length - 1; 0 <= af; af--) !xB[af] && (-1 === dh || xD[af].length > xD[dh].length) && (dh = af);
				for (af = xA - 1; 0 <= af; af--) dc[af] = 1;
				for (af = xD[dh].length - 1; 0 <= af; af--) dc[wt[xD[dh][af]]] += 3, dc[wu[xD[dh][af]]]++;
				for (a4 = xA - 1; 0 <= a4; a4--) {
					for (bd = dh % xA, af = xA - 1; 0 <= af; af--) dc[af] > dc[bd] && (bd = af);
					for (d3 = -1, af = eq.xE; 0 < af; af--)
						if (this.qZ[af] === bd + 1) {
							d3 = af;
							break
						} if (dc[bd] = 0, -1 !== d3) {
						for (rh = 0, af = eq.xE; 0 < af; af--) ww[d3] > ww[af] && rh++;
						if (rh !== eq.xE - 1) {
							for (af = xD[dh].length - 1; 0 <= af; af--) ww[d3]++, this.sG[xD[dh][af]] = d3;
							break
						}
					}
				}
				xB[dh] = !0
			}
		}, this.x0 = function(wt, wu, ww) {
			for (var a4, fu, a5 = this.qZ.length - 1, border = cf.cg(eq.er, eq.xE), xF = (0 < eq.er % eq.xE && border++, new Uint8Array(1 + a5)), bw = a5; 1 <= bw; bw--) xF[this.qZ[bw]] = bw;
			for (a4 = 0; a4 < eq.er; a4++) fu = xF[wt[a4] + 1], 0 === this.sG[a4] && fu <= eq.xE && ww[fu] < border && (ww[fu]++, this.sG[a4] = fu);
			for (a4 = 0; a4 < eq.er; a4++) fu = xF[wu[a4] + 1], 0 === this.sG[a4] && fu <= eq.xE && ww[fu] < border && (ww[fu]++, this.sG[a4] = fu);
			for (bw = eq.xE; 1 <= bw; bw--)
				for (a4 = eq.er - 1; 0 <= a4 && !(ww[bw] >= border); a4--) 0 === this.sG[a4] && (ww[bw]++, this.sG[a4] = bw)
		}, this.x1 = function() {
			for (var a4 = eq.er; a4 < eq.fE; a4++) this.sG[a4] = 1 + a4 % eq.xE
		}
}

function w7() {
	var k1 = [L(101), L(102), L(103), L(104), L(105), L(106), L(107)],
		xI = [100, 60, 30, 15, 6, 1],
		xJ = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		xK = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		xM = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.kK = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter"]
	], this.xN = function(id, t6, aB) {
		t6 = this.xO(t6);
		return +(xJ[t6][id] > aB)
	}, this.xO = function(t6) {
		for (var a4 = 0; a4 < xI.length; a4++)
			if (xI[a4] <= t6) return a4;
		return xI.length
	}, this.xP = function(t6) {
		return k1[this.xO(t6)]
	}, this.kJ = function(id, mr) {
		return xK[id].replace(new RegExp("x", "g"), mr)
	}, this.kL = function(id, mr) {
		return xM[id].replace(new RegExp("x", "g"), mr)
	}, this.xQ = function(id, mH) {
		return this.kK[5][id]
	}
}

function eM() {
	function xZ() {
		var rh;
		return 8 === eq.l1 ? 0 : (rh = Math.floor(ei.eh[eq.jj] / 50), (rh = Math.min(rh, 400)) / 100)
	}

	function xR() {
		var rh = xZ();
		0 !== rh && gG.an(440, L(108, [rh.toFixed(2)]), 40, 0, t.xa, t.qO, -1, !1)
	}
	this.w = function() {
		var xS;
		0 === h5.result.p2 || 0 === h5.result.p0.length || 8 === eq.l1 ? aZ.d.rc(eq.jj) && xR() : (function(xS) {
			7 !== eq.l1 && 10 !== eq.l1 || 0 !== eq.wU && xS && gG.an(600, L(112, [xS.toFixed(2)]), 40, 0, t.u, t.qO, -1, !1)
		}(xS = function() {
			gG.an(520, L(109), 40, 0, t.u, t.qO, -1, !1);
			for (var p0 = h5.result.p0, a5 = p0.length, jd = ei.jd, z = [], a4 = 0; a4 < a5; a4++) {
				var ec = p0[a4];
				z.push({
					ec: ec,
					jl: jd[ec]
				})
			}
			z.sort((aN, bw) => bw.jl - aN.jl);
			var wh = ei.sA,
				jl = h5.result.p1,
				rh = h5.result.p2,
				ax = "",
				xS = 0;
			for (a4 = 0; a4 < a5; a4++) {
				var xc = z[a4].jl * rh / (100 * jl),
					xd = wh[z[a4].ec] + ": " + xc.toFixed(2) + "   ";
				z[a4].ec === eq.jj && (xS = xc), 2 < a4 && 4 !== a5 ? 3 === a4 && (ax += "(" + L(110, [a5 - 3]) + ")") : ax += xd
			}
			gG.an(560, aZ.bu.xe(ax), 40, 0, t.xa, t.qO, -1, !1), xS ? gG.an(580, L(111, [xS.toFixed(2) + " + " + xZ().toFixed(2)]), 40, 0, t.xa, t.qO, -1, !1) : aZ.d.rc(eq.jj) && xR();
			return xS
		}()), 2 === eq.p4 || 7 <= eq.l1 || function(xS) {
			var p0 = h5.result.p0,
				a5 = p0.length,
				ud = ei.ud,
				jd = ei.jd,
				ke = [];
			loop: for (var a4 = 0; a4 < a5; a4++) {
				var ec = p0[a4],
					kf = aZ.bu.kg(ud[ec]);
				if (null !== kf) {
					for (var kH = jd[ec], bw = ke.length - 1; 0 <= bw; bw--)
						if (kf === ke[bw].name) {
							ke[bw].jl += kH, ke[bw].z.push({
								ec: ec,
								jl: kH
							});
							continue loop
						} ke.push({
						name: kf,
						jl: kH,
						z: [{
							ec: ec,
							jl: kH
						}]
					})
				}
			}
			if (0 !== ke.length) {
				ke.sort((aN, bw) => bw.jl - aN.jl);
				var z = ke[0].z,
					xf = (z.sort((aN, bw) => bw.jl - aN.jl), "[" + ke[0].name + "]"),
					xg = 512 * h5.result.p2 / 26214400,
					rQ = (gG.an(0, L(113, [xf, xg.toFixed(4)]), 40, 0, t.u, t.qO, -1, !1), z.length),
					xh = ke[0].jl,
					xi = 1e4 * xg;
				for (a4 = 0; a4 < rQ; a4++)
					if (z[a4].ec === eq.jj) {
						gG.an(600, L(114, [(xi * z[a4].jl / (10 * xh)).toFixed(2)]), 40, 0, t.u, t.qO, -1, !1), gG.an(640, L(115, [(.2 * xS).toFixed(2), xf]), 40, 0, t.u, t.qO, -1, !1);
						break
					}
			}
		}(xS))
	}, this.xW = function() {
		var xX, xY;
		eq.l6 || (xX = ei, xY = eq.jj, 0 === xX.ep[xY]) || xX.eo[xY] < 1 || 2 * xX.em[xY] > 3 * (xX.en[xY] + xX.eo[xY]) || xR()
	}
}

function iK() {
	var mY, ma, ms, mt, xj = 0,
		xk = 0;

	function xp() {
		return Math.pow(Math.pow(ms - mY, 2) + Math.pow(mt - ma, 2), .5)
	}

	function xm(bd) {
		mY = eR.rt * bd.touches[0].clientX, ma = eR.rt * bd.touches[0].clientY, ms = eR.rt * bd.touches[1].clientX, mt = eR.rt * bd.touches[1].clientY
	}
	this.xl = function(bd) {
		return 1 < bd.touches.length ? (xk = eW.av, xj = 3, xm(bd), gE.aY(), !0) : (xj = 0, !1)
	}, this.xn = function(bd) {
		var xo, xr, xs;
		return 0 !== eq.ku && 1 < bd.touches.length && (xj = Math.max(xj - 1, 0), gA.mx() && (xo = xp(), xm(bd), bd = xp(), xr = Math.floor((mY + ms) / 2), xs = Math.floor((ma + mt) / 2), gK.xt(xr, xs, Math.max(.125, bd) / Math.max(.125, xo)), eW
			.eX = !0), !0)
	}, this.xu = function() {
		var dF, dE;
		return !!(xj && (xj = 0, eW.av < xk + 500)) && (dF = (mY + ms) / 2, dE = (ma + mt) / 2, gE.xv(dF, dE), gE.click(dF, dE, !0) && (eW.eX = !0), !0)
	}
}

function j3() {
	this.xw = new xx
}

function xy() {
	this.cy = {}, this.xz = new Array(7), this.y0 = null, this.y1 = null, this.y2 = 0, this.y3 = [0, 0], this.y4 = function() {
		aT.bl(5, 5)
	}, this.y5 = function() {
		aT.bh(), eQ.ck()
	}, this.tM = function() {
		aT.bl(0 === eY.tP() ? 5 : 0)
	}, this.tH = function() {
		if (1 === bp.cy.data[130].value) aT.bl(8, aT.c0().dk, new jw(24, {
			y6: bp.cy.data[125].value,
			jy: bp.cy.data[128].value,
			jz: bp.cy.data[129].value
		}));
		else {
			for (var z = (z = bp.cy.data[126].value.split(",")).slice(0, 10), a4 = 0; a4 < z.length; a4++) z[a4] = z[a4].trim().slice(0, 7).toUpperCase();
			1 === z.length && 0 === z[0].length && (z = []), aT.bl(8, aT.c0().dk, new jw(23, {
				y6: bp.cy.data[125].value,
				ke: z
			}))
		}
	}, this.tW = function(dk, target) {
		aT.bl(4, dk, new tZ("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + gz.fR +
			"' target='_blank'>" + gz.fR + "</a>", !1, [new aS("⬅️ " + L(1), function() {
				aT.bl(dk)
			}), new aS("✅ Accept", function() {
				bp.bq.br(140, 1), 0 === target ? aT.bl(2, dk) : aT.bl(8, dk, new jw(target))
			})]))
	}, this.y7 = function() {
		for (var a4 = 0; a4 < 7; a4++) this.xz[a4] = gw.oO.pc(gx.jT(5));
		this.xz[1] = "[" + this.xz[1] + "]", 5 === aT.dK && (aT.c0().y8.br(this.xz), aT.c0().resize())
	}, this.y9 = function(a9, yA, e9) {
		a9 = aZ.d.yB(a9, 1, 1e6);
		var yC = Math.max(1, 1 + Math.floor(.01 * (a9 - 100))),
			yA = L(116, [yA]);
		return (yA += "<br>") + L(117, [e9]) + "<br>" + L(118, [yC < 20 ? a9 + yC + "–" + (a9 + 20) : a9 + yC]) + "<br>" + L(119, [a9])
	}
}

function yD() {
	var yF, yG;
	this.yE = 5, this.e3 = null;

	function dv(a4) {
		return yG[a4].yL && yF[a4].dv()
	}

	function yQ(dj) {
		yG[dj].av = eW.av, yG[dj].yM = !1
	}
	this.oV = 0, this.yI = 0, this.ck = function() {
		this.e3 = new Array(this.yE);
		this.e3[0] = "territorial.io";
		var ts = gi.yJ(0);
		gi.tr(0);
		for (var a4 = 1; a4 < this.yE; a4++) this.e3[a4] = gD.yK() + ".territorial.io";
		for (gi.tr(ts), yF = new Array(this.yE), yG = new Array(this.yE), a4 = this.yE - 1; 0 <= a4; a4--) yG[a4] = {
			yL: !1,
			av: 0,
			yM: !1
		};
		this.yN(0, 0)
	}, this.yO = function(a4) {
		return yF[a4]
	}, this.w = function() {
		for (var a4 = this.yE - 1; 0 <= a4; a4--) this.ds(a4) && eW.av > yG[a4].av + 15e3 && (bj.yA.yP(a4, yG[a4].yM), yQ(a4));
		!this.ds(0) && eW.av > yG[0].av + 8e3 && (yG[0].av = eW.av, this.yN(0, 0))
	}, this.yR = function(id) {
		return this.yN(0, id) && this.dt(0)
	}, this.yN = function(dj, dk) {
		if (yG[dj].yL) {
			if (yF[dj].dv()) return yF[dj].dw(dk), yF[dj].ds();
			yF[dj].aY()
		}
		return this.yS(dj, dk), !1
	}, this.yS = function(dj, dk) {
		yG[dj].yL = !0, yQ(dj), yF[dj] = new di, yF[dj].ck(dj, dk)
	}, this.dw = function(dj, dk) {
		dv(dj) && yF[dj].dw(dk)
	}, this.e5 = function(dj, dk) {
		bj.n9.oF(dj)
	}, this.dt = function(a4) {
		return this.ds(a4) && yF[a4].dt()
	}, this.du = function(a4) {
		yF[a4].du()
	}, this.ds = function(a4) {
		return yG[a4].yL && yF[a4].ds()
	}, this.send = function(dj, dy) {
		0 !== dj && yQ(dj), yF[dj].send(dy)
	}, this.yT = function(dj) {
		8 === eY.tP() && (yG[dj].yM = !0, bj.qj.yU = !0)
	}, this.close = function(dj, dz) {
		dv(dj) && yF[dj].close(dz)
	}, this.yV = function(dj, dz) {
		hK.yW(dz), dv(dj) && yF[dj].close(dz)
	}, this.bk = function(dz) {
		for (var a4 = this.yE - 1; 0 <= a4; a4--) this.close(a4, dz)
	}, this.yX = function(dj, dz) {
		for (var a4 = this.yE - 1; 0 <= a4; a4--) a4 !== dj && this.close(a4, dz)
	}, this.yY = function() {
		0 === this.oV && (eq.l6 || eq.lQ) || this.close(this.oV, 3246)
	}, this.e7 = function(dj, bd) {
		yF[dj].aY(), hK.yZ(dj, bd.code)
	}
}

function oz(or, ov) {
	var ap = document.createElement("div");
	this.ya = ap, this.resize = function() {
		ap.style.padding = aZ.aa.ab(ac.ad), ap.style.lineHeight = aZ.aa.ab(aZ.aa.nK(.035))
	}, or.style.overflowX = "hidden", or.style.overflowY = "auto", ap.innerHTML = ov, or.appendChild(ap)
}

function yb() {
	var yc = new Uint8Array(78);
	this.ck = function() {
		var a4;
		for (yc[50] = 37, a4 = 0; a4 < 10; a4++) yc[a4 + 3] = a4 + 1;
		for (a4 = 0; a4 < 26; a4++) yc[a4 + 20] = a4 + 11, yc[a4 + 52] = a4 + 38
	}, this.yd = function(ax) {
		return ax.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.ye = function(ax, size) {
		if ((ax = this.yd(ax)).length > size) return ax.substring(0, size);
		for (; ax.length < size;) ax = "-" + ax;
		return ax
	}, this.yf = function(ax) {
		for (var xh = yc, a5 = ax.length, z = new Uint8Array(a5), a4 = 0; a4 < a5; a4++) z[a4] = xh[ax.charCodeAt(a4) - 45];
		return z
	}, this.yg = function(jS) {
		gt.cD(6 * jS.length), this.yh(jS), gx.ck(gt.dy)
	}, this.yh = function(jS) {
		for (var a5 = jS.length, cv = gt, a4 = 0; a4 < a5; a4++) cv.oG(6, jS[a4])
	}, this.oP = function(ax) {
		this.yh(this.yf(ax))
	}, this.yi = function(ax, size) {
		this.yh(this.yf(this.ye(ax, size)))
	}, this.yj = function(ax, size) {
		for (var z = this.yf(this.ye(ax, size)), a9 = 0, d3 = 1, a4 = z.length - 1; 0 <= a4; a4--) a9 += d3 * z[a4], d3 *= 64;
		return a9
	}
}

function ib() {
	this.sY = new Int16Array(4), this.sl = new Int16Array(4), this.yk = null, this.ck = function() {
		var a4;
		for (this.sY[0] = -cC.mO, this.sY[1] = 1, this.sY[2] = cC.mO, this.sY[3] = -1, this.yk = new Int16Array([-cC.mO, 1 - cC.mO, 1, cC.mO + 1, cC.mO, cC.mO - 1, -1, -cC.mO - 1]), a4 = 0; a4 < 4; a4++) this.sl[a4] = 4 * this.sY[a4]
	}, this.yl = function() {
		return cf.fH(Math.floor(.15 * (1 + .25 * d0.jF.lR()) * eR.lS / mJ), 4, 128)
	}, this.ym = function(rJ, id) {
		for (var sk = this.sl, a4 = 0; a4 < 4; a4++) {
			var sm = rJ + sk[a4];
			if (gR.yn(sm) && gR.yo(sm) === id) return !0
		}
		return !1
	}, this.yp = function(player, rJ) {
		return !gR.sI(rJ) && player === gR.sZ(rJ)
	}, this.yq = function(oB, oC, mV) {
		return (oB -= this.mZ(mV)) * oB + (oC -= this.mb(mV)) * oC
	}, this.yr = function(xr, xs, fu) {
		xr = this.ys(xr) - this.yt(fu), xs = this.yu(xs) - this.yv(fu);
		return Math.sqrt(xr * xr + xs * xs)
	}, this.yw = function(yx, yy) {
		var mp = this.mZ(yx) - this.mZ(yy),
			yx = this.mb(yx) - this.mb(yy);
		return ~~Math.sqrt(mp * mp + yx * yx + .5)
	}, this.yz = function(yx, yy) {
		var mp = this.mZ(yx) - this.mZ(yy),
			yx = this.mb(yx) - this.mb(yy);
		return mp * mp + yx * yx
	}, this.z0 = function(z1, z2, z3, z4) {
		return (z1 -= z3) * z1 + (z2 -= z4) * z2
	}, this.lc = function(ec, lK) {
		return cf.cg(lK * ei.rM[ec], 1e3)
	}, this.ys = function(xr) {
		return 16 * (xr + mI) / mJ
	}, this.yu = function(xs) {
		return 16 * (xs + mK) / mJ
	}, this.z5 = function(dh) {
		return 16 * dh / mJ
	}, this.z6 = function(xr) {
		return Math.floor((xr + mI) / mJ)
	}, this.z7 = function(xs) {
		return Math.floor((xs + mK) / mJ)
	}, this.z8 = function(oB, oC) {
		return 1 <= oB && 1 <= oC && oB < cC.mO - 1 && oC < cC.mP - 1
	}, this.mZ = function(mV) {
		return mV % cC.mO
	}, this.mb = function(mV) {
		return cf.cg(mV, cC.mO)
	}, this.z9 = function(oB, oC) {
		return oC * cC.mO + oB
	}, this.zA = function(oB, oC) {
		return 4 * this.z9(oB, oC)
	}, this.zB = function(mV) {
		return this.zC(this.mZ(mV), this.mb(mV))
	}, this.zC = function(oB, oC) {
		return 0 < oB && oB < cC.mO - 1 && 0 < oC && oC < cC.mP - 1
	}, this.pY = function(mV) {
		return mV << 2
	}, this.zD = function(rJ) {
		return rJ >> 2
	}, this.zE = function(mV) {
		return cC.mO * this.mb(mV) * 256 + (this.mZ(mV) << 4)
	}, this.zF = function(mV) {
		return this.zE(mV) + 8 + (cC.mO << 7)
	}, this.mW = function(fu) {
		return cC.mO * (this.yv(fu) >> 4) + (this.yt(fu) >> 4)
	}, this.zG = function(fu) {
		fu = this.mW(fu);
		return (this.mZ(fu) >> 5) + h1.zH.zI * (this.mb(fu) >> 5)
	}, this.yt = function(fu) {
		return fu % (cC.mO << 4)
	}, this.yv = function(fu) {
		return cf.cg(fu, cC.mO << 4)
	}, this.pa = function(mV, sS) {
		return mV + this.sY[sS]
	}, this.zJ = function(rJ, sS) {
		return rJ + this.sl[sS]
	}, this.zK = function(yx, yy) {
		var mp = this.mZ(yy) - this.mZ(yx),
			yy = this.mb(yy) - this.mb(yx);
		return Math.abs(mp) >= Math.abs(yy) ? 1 + 2 * (mp < 0) : 2 * (0 < yy)
	}, this.zL = function(player) {
		return this.z9(ei.ml[player] + ei.mm[player] >> 1, ei.mn[player] + ei.mo[player] >> 1)
	}, this.zM = function(player) {
		return this.z9(gi.zN(ei.ml[player], ei.mm[player]), gi.zN(ei.mn[player], ei.mo[player]))
	}
}

function zO() {
	var zP = 0,
		zQ = "",
		zR = 0,
		zS = 0,
		zT = 0;

	function bP(ba) {
		bj.bn.bo(3, ba)
	}

	function zd(aI) {
		zP = 1, bQ.message.pp({
			id: 6,
			value: aI
		})
	}

	function zX(kG) {
		var zj = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return kG.match(zj)
	}
	this.bf = function(kG) {
		var zU, z, zZ;
		if (zP) return zP = 0, "yes" === (zU = kG.toLowerCase()) || "y" === zU ? void bP(zQ) : void bQ.message.pp({
			id: 5,
			kI: 7
		});
		!(kG.indexOf("@") < 0) && (zU = zX(kG)) ? (zQ = kG, z = function(zW) {
			for (var a5 = zW.length, zf = [0, 0, 0, 0], a4 = 0; a4 < a5; a4++)
				for (var cv = zW[a4], aN = 0; aN < 4; aN++) cv === "@room" + (aN + 1) && (zf[aN] = 1);
			if ((zS = aZ.cb.zg(zf)) % 4 == 0) return aZ.cb.zh(bQ.cP.cQ);
			for (aN = 0; aN < 4; aN++) zf[aN] = zf[aN] ? bQ.cP.cQ[aN] : [];
			return aZ.cb.zh(zf)
		}(zU), function(zW, zZ, kG) {
			if (!zR) return;
			for (var a5 = zZ.length, a4 = 0; a4 < a5; a4++) 2 === zZ[a4].id && (kG = kG.replace(zW[zZ[a4].aB], "@" + zZ[a4].a9));
			return zP = 1, bP((zQ = kG).slice(0, 126) + "|"), 1
		}(zU, zZ = function(zW) {
			for (var zZ = [], a5 = (zT = zR = 0, zW.length), a4 = 0; a4 < a5; a4++) {
				var cv = zW[a4],
					rQ = cv.length;
				aZ.bu.startsWith(cv, "@[") ? rQ <= 9 && aZ.bu.bv(cv, "]") && zZ.push({
					id: 0,
					a9: cv.substring(2, rQ - 1).toUpperCase()
				}) : 6 === rQ ? aZ.bu.startsWith(cv, "@room") || (zT++, zZ.push({
					id: 1,
					a9: gw.kF.yj(cv.substring(1), 5)
				})) : 1 < rQ && rQ < 5 && 0 <= (rQ = gp.data.wL(cv.substring(1))) && (zZ.push({
					id: 2,
					a9: rQ,
					aB: a4
				}), zR = 1)
			}
			return zZ
		}(zU), kG) || (0 === zZ.length ? zS || function(zW) {
			for (var a5 = zW.length, a4 = 0; a4 < a5; a4++) {
				var cv = zW[a4];
				if ("@all" === cv || "@everyone" === cv) return 1
			}
			return
		}(zU) ? zd(z.length) : bP(kG) : zU.length === zT ? bP(kG) : (function(z, zZ) {
			var rQ = zZ.length;
			if (0 === rQ) return;
			var a5 = z.length;
			loop: for (var a4 = a5 - 1; 0 <= a4; a4--) {
				for (var aN = 0; aN < rQ; aN++)
					if (0 === zZ[aN].id) {
						if (zZ[aN].a9 === aZ.bu.kg(z[a4].username)) continue loop
					} else if (1 === zZ[aN].id && zZ[aN].a9 === z[a4].bs) continue loop;
				z[a4] = z[--a5], z.pop()
			}
		}(z, zZ), zd(z.length)))) : bP(kG)
	}, this.zk = function(kG) {
		var zW = zX(kG);
		if (zW)
			for (var zl = new RegExp("^[0-9]+$"), a5 = zW.length, a4 = 0; a4 < a5; a4++) {
				var cv = zW[a4].substring(1),
					rQ = cv.length;
				1 <= rQ && rQ <= 3 && zl.test(cv) && (rQ = parseInt(cv, 10), !isNaN(rQ)) && 0 <= rQ && rQ < gp.data.z.length && (kG = kG.replace("@" + cv, "@" + gp.data.z[rQ]))
			}
		return kG
	}
}

function zm() {
	this.lJ = !1;
	this.b5 = [], this.zq = 100;
	var mY, ma, gap, nI, zn, zp, zr = 0,
		zs = new Array(9),
		zt = [],
		zu = [],
		zv = 0,
		zw = 0,
		zx = 0,
		zy = 0;

	function a0A() {
		zs.sort(function(aN, bw) {
			return bw.a07 - aN.a07
		});
		for (var ax = "" + zs[0].ay, a4 = 1; a4 < 9; a4++) ax += "," + zs[a4].ay;
		for (a4 = 0; a4 < 9; a4++) ax += "," + zs[a4].a07;
		bp.cy.fw(120, ax)
	}
	this.ck = function() {
		for (var zz = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a4 = 0; a4 < zz.length; a4++) {
			var color = 6 === zz[a4] ? t.a00 : t.vO;
			this.b5.push(aZ.canvas.a01(gQ.get(3), zz[a4], color))
		}
		for (a4 = 0; a4 < b0.b1.b2; a4++) zu.push(b0.b1.a02 - b0.b1.b2 + a4);
		for (a4 = 0; a4 < b0.b1.a03; a4++) zu.push(b0.b1.a04 + a4);
		var fc = b0.b1.a05(gz.fc);
		for (a4 = 0; a4 < fc.length; a4++) zu.push(fc[a4]);
		! function() {
			var a4, z = bp.cy.data[120].value.split(",");
			if (18 !== z.length)
				for (a4 = 0; a4 < 9; a4++) zs[a4] = {
					ay: 1015 + a4,
					a07: 0
				};
			else
				for (a4 = 0; a4 < 9; a4++) {
					var a9 = parseInt(z[a4]),
						af = (a9 = 0 <= a9 && a9 < b0.b1.a02 ? a9 : 0, parseInt(z[a4 + 9]));
					af = 0 <= af && af < 1e3 ? af : 0, zs[a4] = {
						ay: a9,
						a07: af
					}
				}
		}()
	}, this.show = function(ll, lm, a0B) {
		var a4;
		if (zv = ll, zw = lm, zr = a0B || 0, this.lJ = !0, zt = [], 0 === zr)
			for (a4 = 0; a4 < 9; a4++) zt.push(zs[a4].ay);
		else {
			var bw = 49 * zr,
				a0B = bw - 49;
			for (a0B >= zu.length && (zr = 1, a0B = 0, bw = 49), a4 = a0B = (bw = Math.min(bw, zu.length)) - 49; a4 < bw; a4++) zt.push(zu[a4])
		}
		zt.push(1024);
		a0B = zt.length, nI = Math.floor((d0.jF.lR() ? .075 : .0468) * eR.lS), gap = Math.floor(nI / 3), (zx = 10 * (zn = nI + gap)) > eR.cv && (zx = eR.cv, gap = (zn = zx / 10) - (nI = 3 * zn / 4)), zp = cf.cg(a0B, 10) + !!(a0B % 10), (zy = zp *
			zn) > eR.cw && (zy = eR.cw, gap = (zn = zy / zp) - (nI = 3 * zn / 4)), a0B = .5 * gap;
		mY = Math.min(Math.max(ll - .5 * zx + a0B, a0B), eR.cv - zx + a0B), ma = Math.min(Math.max(lm - .5 * zy + a0B, a0B), eR.cw - zy + a0B)
	}, this.lp = function(ll, lm, player) {
		if (!this.lJ) return !1;
		if (this.a0D(ll, lm)) {
			ll = cf.fH(cf.cg(ll - mY + .5 * gap, zn), 0, 9);
			if ((ll += 10 * cf.fH(cf.cg(lm - ma + .5 * gap, zn), 0, 9)) >= zt.length) return gE.aY(), !0;
			lm = zt[ll];
			if (1024 === lm) return this.show(zv, zw, zr + 1), !0;
			! function(ay) {
				for (var a4 = 0; a4 < 9; a4++) zs[a4].a07 = Math.floor(.99 * zs[a4].a07);
				for (a4 = 0; a4 < 9; a4++)
					if (ay === zs[a4].ay) return zs[a4].a07 = Math.min(zs[a4].a07 + 30, 999), a0A();
				zs.splice(5, 0, {
					ay: ay,
					a07: Math.max(zs[4].a07, 30)
				}), zs.pop(), a0A()
			}(lm), player === eq.jj ? gq.b.a0E(lm) : gq.d.a0F(lm, player)
		}
		return gE.aY(), !0
	}, this.a0D = function(ll, lm) {
		return !(ll < mY - .5 * gap || lm < ma - .5 * gap || mY + zx - .5 * gap <= ll || ma + zy - .5 * gap <= lm)
	}, this.eZ = function() {
		m0.fillStyle = t.qO, m0.fillRect(mY - .5 * gap, ma - .5 * gap, zx, zy);
		for (var aA = .5 * ac.a0G, a5 = (m0.lineWidth = ac.a0G, m0.strokeStyle = m0.fillStyle = t.u, m0.strokeRect(mY - .5 * gap + aA, ma - .5 * gap + aA, zx - 2 * aA, zy - 2 * aA), m0.imageSmoothingEnabled = !0, zt.length), a4 = 0; a4 <
			a5; a4++) this.a0H(zt[a4], m0, mY + a4 % 10 * zn, ma + cf.cg(a4, 10) * zn, nI);
		m0.imageSmoothingEnabled = !1
	}, this.a0H = function(ay, d6, dF, dE, nI) {
		var rJ;
		ay >= 1024 - b0.b1.b2 ? (rJ = nI / this.zq, d6.setTransform(rJ, 0, 0, rJ, dF, dE), d6.drawImage(this.b5[ay - 1024 + b0.b1.b2], 0, 0), d6.setTransform(1, 0, 0, 1, 0, 0)) : (aZ.aa.textAlign(d6, 1), aZ.aa.textBaseline(d6, 1), d6.font = aZ.aa
			.lT(0, .89 * nI), d6.fillText(b0.b1.b6(ay), dF + .5 * nI, dE + (.35 - aZ.aa.a0I + .56) * nI))
	}
}

function xx() {
	this.a0J = function(player) {
		aZ.d.a0K(player) && gG.an(80, L(120), 637, 0, t.a0L, t.qO, -1, !1)
	}, this.a0M = function(player) {
		aZ.d.a0K(player) && gG.an(80, L(121), 637, 0, t.a0L, t.qO, -1, !1)
	}
}

function a0N() {
	a0O() ? (a0P(), a0Q !== eq.fE && a0R()) : a0S()
}

function a0R() {
	hQ.a0T(), hQ.a0U(ei.a0V[a0Q]), hQ.a0U(ei.pT[a0Q]), cC.u5(cC.cE) && hQ.a0U(ei.a0W[a0Q]), hQ.a0X(ei.rb[a0Q]), hQ.a0Y(ei.pT[a0Q]), hQ.a0Y(ei.a0W[a0Q]), hQ.a0Z(), hQ.a0a()
}

function a0P() {
	a0b = !0, gS.a0c(a0d, a0e, a0f), gS.a0g(a0d, a0e), ei.jd[a0d] += a0h, hQ.a0i(), a0j()
}

function a0O() {
	return (a0Q === eq.fE ? a0k : a0l)()
}

function a0l() {
	var a0m = a0h * eq.a0n,
		a0o = a0p(),
		a0q = a0r(),
		a0o = a0m + 2 * a0o + a0q,
		a0t = a0u * a0h;
	return a0o < a0t ? (a0f -= a0o, hE.sp(a0d, a0o, 13), a0v(a0o - a0m, a0q), !0) : a0w && 0 === a0q ? (a0f -= a0t, a0t += aZ.d.a0x(a0d, a0o - a0t + 1), hE.sp(a0d, a0t, 13), a0v(a0t - a0m, 0), !0) : (a0f -= a0t, hE.sp(a0d, a0t, 13), a0v(a0t - a0m,
		a0q), !1)
}

function a0v(a0t, a0q) {
	if (0 < a0q) {
		if (a0t <= a0q) return hE.sp(a0Q, a0t, 13), void gS.a0y(a0Q, a0d, a0q - a0t);
		gS.a0y(a0Q, a0d, 0), a0t -= a0q
	}
	a0t = cf.cg(a0t, 2), a0t = Math.min(ei.rM[a0Q], a0t), hE.sp(a0Q, a0t, 13), ei.rM[a0Q] -= a0t
}

function a0r() {
	return gS.a0z(a0Q, a0d)
}

function a0p() {
	return cf.cg(a0h * ei.rM[a0Q], 1 + cf.cg(10 * ei.jd[a0Q], 16))
}

function a0k() {
	var a10 = a0h * eq.a0n;
	return a0f -= a10, hE.sp(a0d, a10, 13), !0
}

function a0j() {
	for (var a4 = a0h - 1; 0 <= a4; a4--) ei.rb[a0d].push(a11[a4]), ei.a0V[a0d].push(a11[a4]), gR.a12(a11[a4], a0d)
}

function iV() {
	var canvas, lI, a13, font, a14 = 0,
		a15 = !1,
		a16 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a17 = 5;

	function a1K() {
		if (a15) {
			var a4, a5 = a16.length,
				aC = Math.floor(.5 * a13.cw),
				cw = a5 * aC,
				dF = Math.floor(Math.floor(a13.dF) + .3 * a13.cv - .5),
				dE = Math.floor(Math.floor(a13.dE) - cw),
				cv = Math.floor(.4 * a13.cv + 2.5);
			for (m0.fillStyle = t.da, m0.fillRect(dF, dE, cv, cw), m0.fillStyle = t.c7, m0.fillRect(dF, dE + a17 * aC, cv, aC), m0.fillStyle = t.u, m0.fillRect(dF, dE, 2, cw), m0.fillRect(dF, dE, cv, 2), m0.fillRect(dF + cv - 2, dE, 2, cw), a4 =
				1; a4 < a5; a4++) m0.fillRect(dF, dE + a4 * aC, cv, 2);
			for (m0.fillStyle = t.u, aZ.aa.textAlign(m0, 1), aZ.aa.textBaseline(m0, 1), m0.font = aZ.aa.lT(0, .6 * aC), dF += .5 * cv, a4 = 0; a4 < a5; a4++) m0.fillText(a1S(a4), dF, dE + (a4 + .6) * aC)
		}
		m0.drawImage(canvas, Math.floor(a13.dF), Math.floor(a13.dE))
	}

	function by(ls) {
		var dF, mY, ma, aC;
		lI.clearRect(0, 0, Math.floor(a13.cv), Math.floor(a13.cw)), lI.fillStyle = t.da, lI.fillRect(0, 0, Math.floor(a13.cv), Math.floor(a13.cw)), eq.md && (lI.fillStyle = t.c7, lI.fillRect(0, 0, Math.floor(.3 * a13.cv), Math.floor(a13.cw))), lI
			.fillStyle = t.u, lI.fillText("Hide UI", .15 * a13.cv, .5 * a13.cw), lI.fillRect(Math.floor(.3 * a13.cv - .5), 0, 2, Math.floor(a13.cw)), dF = .5 * a13.cv, lI.fillText("Replay Speed", dF, .31 * a13.cw), lI.fillText(a1S(a17), dF, .69 * a13
				.cw), lI.fillRect(Math.floor(.7 * a13.cv - .5), 0, 2, Math.floor(a13.cw)), ls.a18 ? (dF = Math.floor(.02 * a13.cv), ls = Math.floor(.025 * a13.cv), mY = Math.floor(.85 * a13.cv - dF - .5 * ls), ma = Math.floor(.25 * a13.cw), aC = Math
				.floor(a13.cw) - 2 * ma, lI.fillRect(mY, ma, dF, aC), lI.fillRect(mY + dF + ls, ma, dF, aC)) : function() {
				var cv = Math.floor(.46 * a13.cw),
					cw = Math.floor(.23 * a13.cw),
					dF = Math.floor(.85 * a13.cv - .5 * cv + cv / 12),
					dE = Math.floor(.5 * a13.cw - cw);
				lI.beginPath(), lI.moveTo(dF, dE), lI.lineTo(dF + cv, dE + cw), lI.lineTo(dF, dE + (cw << 1)), lI.fill()
			}(), lI.fillRect(0, 0, Math.floor(a13.cv), 2), lI.fillRect(0, 0, 2, Math.floor(a13.cw)), lI.fillRect(0, Math.floor(a13.cw) - 2, Math.floor(a13.cv), 2), lI.fillRect(Math.floor(a13.cv - 2), 0, 2, Math.floor(a13.cw))
	}

	function a1S(a4) {
		return 5 === a4 ? "Normal" : "" + a16[a4]
	}
	this.a18 = !1, this.ck = function() {
		eq.lQ && (a17 = 5, this.a18 = !1, a15 = !1, a13 = new a19([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a1A = function() {
		return a16[a17]
	}, this.qK = function() {
		return a13.dE
	}, this.lg = function(lh) {
		return !!eq.lQ && a13.dF + a13.cv > eR.cv - lh - ac.gap
	}, this.resize = function() {
		eq.lQ && (a13.resize(), a13.dE -= (hJ.lW() - 1) * ac.gap, font = aZ.aa.lT(0, .3 * a13.cw), (canvas = document.createElement("canvas")).width = Math.floor(a13.cv), canvas.height = Math.floor(a13.cw), (lI = canvas.getContext("2d", {
			alpha: !0
		})).font = font, aZ.aa.textAlign(lI, 1), aZ.aa.textBaseline(lI, 1), by(this))
	}, this.a1B = function(a1C) {
		0 === eq.ku || aT.lJ() || a1C !== eq.md && (eq.md = a1C, hH.resize(), eW.eX = !0, eq.lQ) && (a14 = eW.av + 2e3, by(this))
	}, this.lp = function(dF, dE) {
		if (!eq.lQ) return !1;
		if (dF < a13.dF || dE < a13.dE || dF > a13.dF + a13.cv) return a15 && function(ls, dF, dE) {
			var a5 = a16.length,
				aC = Math.floor(.5 * a13.cw),
				cw = a5 * aC,
				mY = Math.floor(Math.floor(a13.dF) + .3 * a13.cv - .5),
				cw = Math.floor(Math.floor(a13.dE) - cw),
				cv = Math.floor(.4 * a13.cv + 2.5);
			return a15 = !1, eW.eX = !0, dF < mY || mY + cv < dF || dE < cw || (a17 = pI(0, Math.floor((dE - cw) / aC), a5 - 1), by(ls)), !0
		}(this, dF, dE);
		if ((dF -= a13.dF) < .3 * a13.cv) a15 = !1, this.a1B(!eq.md);
		else {
			if (dF < .7 * a13.cv) return a15 = !a15, eW.eX = !0;
			this.a1E(!1)
		}
		return !0
	}, this.a1E = function(a1F) {
		2 === eq.ku ? (this.a1B(!1), aT.bl(3)) : (a15 = !1, this.a18 = !this.a18, this.a18 ? (gF.lf && gF.tR(), d0.jF.setState(1)) : a1F || gF.a1G(), eW.eX = !0, by(this))
	}, this.a1H = function() {
		this.a18 = !1, gF.a1G(), eW.eX = !0, by(this)
	}, this.a1I = function(dF, dE) {
		return !!eq.md && (0 <= gF.lp(dF, dE) || (eq.lQ ? ((eW.av > a14 || !this.lp(dF, dE)) && gK.lp(dF, dE), eW.eX = !0, a14 = eW.av + 2e3) : gK.lp(dF, dE)), !0)
	}, this.w = function() {
		eq.lQ && eq.md && eW.av > a14 - 1e3 && eW.av < a14 && (eW.eX = !0)
	}, this.a1J = function() {
		eq.lQ && (this.a18 = !1, eW.eX = !0, by(this))
	}, this.eZ = function() {
		if (eq.lQ) {
			if (eq.md) {
				if (eW.av > a14) return;
				if (eW.av > a14 - 1e3) return m0.globalAlpha = pI(0, (1e3 - (eW.av - (a14 - 1e3))) / 1e3, 1), a1K(), void(m0.globalAlpha = 1)
			}
			a1K()
		}
	}
}

function qu() {
	var a1T = [];

	function a1W(bs) {
		a1T.unshift(bs), bp.bq.br(161, a1T.join(";"))
	}

	function ok(bs) {
		for (var a1Y = a1T, a5 = a1Y.length, a4 = 0; a4 < a5; a4++)
			if (a1Y[a4] === bs) return a1Y.splice(a4, 1), bp.bq.br(161, a1Y.join(";")), 1
	}
	this.ck = function() {
		var ax = bp.cy.data[161].value;
		ax.length && (a1T = ax.split(";"))
	}, this.get = function() {
		return a1T
	}, this.a1U = function() {
		return {
			fD: a1T,
			value: 0
		}
	}, this.pu = function(bs) {
		return aZ.cb.has(a1T, bs)
	}, this.a1V = function(bs) {
		return ok(bs) ? 0 : (a1W(bs), 1)
	}, this.by = function(bs) {
		ok(bs) && a1W(bs)
	}, this.a1X = function(aB) {
		aB < a1T.length && (a1T.splice(aB, 1), bp.bq.br(161, a1T.join(";")))
	}
}

function a1Z() {
	this.a1a = function(ax, a1b, a1c) {
		for (var a1d = [], a5 = ax.length, max = 0, a4 = 0; a4 < a5; a4++) {
			var a9 = ax.charCodeAt(a4);
			a1d.push(a9), max = Math.max(max, a9)
		}
		var a1e = max < 128 ? 7 : 16;
		for (a1c.oG(a1b, a5), a1c.oG(1, +(16 == a1e)), a4 = 0; a4 < a5; a4++) a1c.oG(a1e, a1d[a4])
	}
}

function a1f() {
	var jq, a1g, f4;
	this.show = function() {
		jq.show(), this.resize()
	}, this.aY = function() {
		jq.aY()
	}, this.resize = function() {
		jq.resize(), a1g.resize()
	}, this.ae = function(af) {
		2 === af && jq.ag[0].ah()
	}, jq = new aR(L(122), [new aS("⬅️ " + L(1), function() {
		aT.bl(7, aT.a1h(7).dk)
	}), new aS(L(123), function() {
		bp.bq.br(105, gw.kF.ye(a1g.a1k[0].a1l[0].bd.value, 5)), bp.bq.br(106, gw.kF.ye(a1g.a1k[1].a1l[0].bd.value, 15)), aT.bl(8, aT.a1h(7).dk, new jw(18))
	})]), a1g = new ex(jq.aV, ((f4 = []).push(function() {
		var f8 = new f9;
		return f8.fA(L(124)), f8.fF(new fG({
			value: "",
			aB: -1
		})), f8
	}()), f4.push(function() {
		var f8 = new f9,
			a1p = (f8.fA(L(125)), new fG({
				value: "",
				aB: -1
			}));
		return a1p.bd.type = "password", f8.fF(a1p), f8.fF(new fv([new aS(L(32), function(bd) {
			return bd.textContent === L(32) ? (bd.textContent = L(126), a1p.bd.type = "text") : (bd.textContent = L(32), a1p.bd.type = "password"), !0
		}).button])), f8
	}()), f4.push(function() {
		var f8 = new f9;
		return f8.fA(L(127)), f8.fs(L(128)), f8.fs(L(129)), f8.fs(L(130)), f8
	}()), f4))
}

function a1q() {
	this.pB = function() {
		for (var a5 = eq.er, p0 = h5.result.p0, rQ = p0.length, eh = (gt.cD(17 + 16 * a5 + 33 * rQ), gt.oG(1, 1), gt.oG(4, 12), gt.oG(10, rQ), gt.oG(1, +(2 === eq.p4)), gt.oG(1, eq.wW % 2), ei.eh), a4 = 0; a4 < a5; a4++) gt.oG(16, eh[a4]);
		for (var jd = ei.jd, a4 = 0; a4 < rQ; a4++) {
			var ec = p0[a4];
			gt.oG(9, ec), gt.oG(24, jd[ec])
		}
		bj.bW.send(bj.bW.oV, gt.dy)
	}
}

function hU() {
	"function" != typeof Math.log2 && (Math.log2 = function(dF) {
		return Math.log(dF) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(dF) {
		return Math.log(dF) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(dF) {
		return 0 < dF ? 1 : dF < 0 ? -1 : 0
	})
}

function iC() {
	this.b1 = new a1r, this.b4 = new zm
}

function a1s(a1t) {
	var jq, a1g, f4;
	this.show = function() {
		jq.show(), this.resize()
	}, this.aY = function() {
		jq.aY()
	}, this.resize = function() {
		jq.resize(), a1g.resize()
	}, this.ae = function(af) {
		2 === af && jq.ag[0].ah()
	}, jq = new aR(L(131), [new aS("⬅️ " + L(1), function() {
		aT.aU(10)
	})]), a1g = new ex(jq.aV, ((f4 = []).push(function() {
		var a1x, f8 = new f9,
			a1y = new fG(bp.cy.data[132], 1, function() {
				a1x.button.click()
			}),
			a1z = new fG(bp.cy.data[131], 1, function() {
				a1y.bd.focus()
			});
		f8.fA(L(132)), f8.fF(a1z), a1z.bd.style.marginBottom = "0.8em", f8.fA(L(133)), f8.fF(a1y);
		return a1x = new aS(L(134), function() {
			jy = Math.floor(a1z.bd.value), jz = Math.floor(a1y.bd.value);
			var jz, jy = {
				a21: Math.min(jy, jz),
				a22: Math.max(jy, jz)
			};
			aT.bl(8, aT.a1h(10).dk, new jw(21, {
				jx: a1t.jx,
				jy: jy.a21,
				jz: jy.a22
			}))
		}, 0, 0, 1), f8.fF(new fv([a1x.button])), f8
	}()), f4.push(function() {
		var a1x, f8 = new f9,
			a1y = new fG(bp.cy.data[134], 1, function() {
				a1x.button.click()
			}),
			a1z = new fG(bp.cy.data[133], 0, function() {
				a1y.bd.focus()
			});
		return f8.fA(1 === a1t.jx ? L(135) : L(136)), f8.fF(a1z), a1z.bd.style.marginBottom = "0.8em", f8.fA(L(137)), f8.fF(a1y), a1x = new aS(L(134), function() {
			var a23 = a1z.bd.value.slice(0, 20),
				a24 = Math.abs(Math.floor(a1y.bd.value));
			aT.bl(8, aT.a1h(10).dk, new jw(22, {
				jx: a1t.jx,
				a23: a23,
				a24: a24
			}))
		}, 0, 0, 1), f8.fF(new fv([a1x.button])), f8
	}()), f4.push(function() {
		var a1x, f8 = new f9,
			a1y = new fG(bp.cy.data[152], 1, function() {
				a1x.button.click()
			}),
			a1z = new fG(bp.cy.data[151], 0, function() {
				a1y.bd.focus()
			});
		return f8.fA(L(138)), f8.fF(a1z), a1z.bd.style.marginBottom = "0.8em", f8.fA(L(137)), f8.fF(a1y), a1x = new aS(L(134), function() {
			var a23 = a1z.bd.value.slice(0, 5),
				a24 = Math.abs(Math.floor(a1y.bd.value));
			aT.bl(8, aT.a1h(10).dk, new jw(28, {
				jx: a1t.jx,
				a23: a23,
				a24: a24
			}))
		}, 0, 0, 1), f8.fF(new fv([a1x.button])), f8
	}()), f4))
}

function ia() {
	var a25, a26, a27 = -15e3,
		a28 = !1;

	function lp(bd) {
		a2O() || (a28 = !0, a2P(bd, 1), bj.bW.yT(bj.bW.oV), a2Q(Math.floor(eR.rt * bd.clientX), Math.floor(eR.rt * bd.clientY)))
	}

	function xl(bd) {
		a27 = eW.av, a2P(bd, 1), bj.bW.yT(bj.bW.oV), 0 < bd.touches.length && (a25 = Math.floor(eR.rt * bd.touches[0].clientX), a26 = Math.floor(eR.rt * bd.touches[0].clientY), gf.xl(bd) || a2Q(a25, a26))
	}

	function a2Q(dF, dE) {
		aT.lp(dF, dE), 0 === eq.ku ? eY.lp(dF, dE) : gs.a1I(dF, dE) || hF.lp(dF, dE) || gO.lp(dF, dE) || gE.a2R(dF, dE) || gH.lp(dF, dE) || 0 <= gF.lp(dF, dE) || gh.lp(dF, dE) || d1.a2S(dF, dE) || gE.xv(dF, dE)
	}

	function ly(bd) {
		a2O() || (a28 = !0, a2P(bd, 1), a2T(Math.floor(eR.rt * bd.clientX), Math.floor(eR.rt * bd.clientY)))
	}

	function xn(bd) {
		a27 = eW.av, a2P(bd, 1), 0 < bd.touches.length && (a25 = Math.floor(eR.rt * bd.touches[0].clientX), a26 = Math.floor(eR.rt * bd.touches[0].clientY), gf.xn(bd) || a2T(a25, a26))
	}

	function a2T(dF, dE) {
		aT.ly(dF, dE), 0 === eq.ku ? eY.ly(dF, dE) : (h6.a2U(dF, dE), hF.ly(dF, dE) || (gF.ly(dF, dE), gE.lJ() ? gE.ly(dF, dE) : gJ.lP ? gJ.ly(dF) && (eW.eX = !0) : (gN.ly(dF, dE), gK.lq && gK.ly(dF, dE) && (eW.eX = !0))))
	}

	function a2E(bd) {
		a2O() || (a2P(bd, 1), a2V(), 0 === eq.ku ? (eY.click(-1024, -1024), gL.bz()) : (gN.a2W(-1024, -1024), gF.ly(-1024, -1024), gJ.lz(), gK.lq = !1))
	}

	function a2D(bd) {
		a2O() || (a2P(bd, 1), a2X(Math.floor(eR.rt * bd.clientX), Math.floor(eR.rt * bd.clientY), 2 === bd.button), d1.a2B && (d1.a2B = !1, bd.preventDefault()))
	}

	function click(bd) {
		a2O() || a2P(bd, 1)
	}

	function a2F(bd) {
		a27 = eW.av, a2P(bd, 1), bd && bd.touches && 0 < bd.touches.length && 0 !== eq.ku ? gK.lq = !1 : gf.xu() || (a2X(a25, a26, !1), d1.a2B && (d1.a2B = !1, bd.preventDefault()))
	}

	function a2G(bd) {
		a27 = eW.av, a2P(bd, 1), a2X(a25, a26, !1), d1.a2B && (d1.a2B = !1, bd.preventDefault())
	}

	function a2H(bd) {}

	function a2I(bd) {}

	function a2J(bd) {
		a2O() || a2P(bd, 0)
	}

	function a2X(dF, dE, a2Y) {
		a2V(), 0 === eq.ku ? eY.click(dF, dE) : (gN.a2W(dF, dE), hF.a2W(), gJ.lz(), gK.lq = !1, gE.click(dF, dE, a2Y) ? eW.eX = !0 : gF.a2D(dF, dE))
	}

	function a2V() {
		aT.a2V()
	}

	function lx(bd) {
		var dF, dE, deltaY;
		a2O() || (a2P(bd, 1), bj.bW.yT(bj.bW.oV), dF = Math.floor(eR.rt * bd.clientX), dE = Math.floor(eR.rt * bd.clientY), deltaY = bd.deltaY, 1 === bd.deltaMode && (deltaY *= 16), aT.lx(dF, dE, deltaY), 0 === eq.ku ? eY.lx(dF, dE, deltaY) : gN.lx(
			dF, dE, deltaY) || (gJ.lk(dF, dE) ? gJ.lx(deltaY) && (eW.eX = !0) : gK.lx(dF, dE, deltaY)))
	}

	function a2K(bd) {
		a2P(bd, 0)
	}

	function a2P(bd, id) {
		0 === id && aT.lJ() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== eY.tP() && bd.preventDefault()
	}

	function a2L(bd) {
		if (__fx.keybindHandler(bd.key)) return;
		a2O() || 0 < eR.a2a || (bd = bd.code) && bd.length && (h9.af(bd, 18) ? gd.a2b(3) : h9.af(bd, 22) ? gd.a2b(0) : h9.af(bd, 20) ? gd.a2b(1) : h9.af(bd, 24) ? gd.a2b(2) : h9.af(bd, 10) ? gJ.lv(31 / 32) : h9.af(bd, 8) ? gJ.lv(32 / 31) : h9.af(bd,
				6) ? gJ.lv(7 / 8) : h9.af(bd, 4) ? gJ.lv(8 / 7) : h9.af(bd, 14) ? 0 !== eq.ku && gK.lx(Math.floor(eR.cv / 2), Math.floor(eR.cw / 2), -200) : h9.af(bd, 16) ? 0 !== eq.ku && gK.lx(Math.floor(eR.cv / 2), Math.floor(eR.cw / 2), 200) :
			h9.af(bd, 0) ? eq.ku && h6.a2c(0) : h9.af(bd, 2) ? eq.ku && h6.a2c(1) : h9.af(bd, 30) ? eq.ku && h6.a2c(2) : h9.af(bd, 26) ? eq.ku && h6.a2d() : h9.af(bd, 28) && eq.ku && h6.tV())
	}

	function a2M(bd) {
		if (!a2O() && !(0 < eR.a2a || eW.av < 400)) {
			var code = bd.code;
			if (code && code.length && !("Enter" === code && aT.ae(1) || "Space" === code && aT.ae(0))) return bQ.bZ ? bQ.bR.ae(code) ? void 0 : void("Escape" === code && d1.a2e()) : void(8 !== eY.tP() && eY.ae(bd) ? eW.eX = !0 : "Escape" === code ?
				d1.a2e() : h9.af(code, 18) ? gd.a2f(3) : h9.af(code, 22) ? gd.a2f(0) : h9.af(code, 20) ? gd.a2f(1) : h9.af(code, 24) ? gd.a2f(2) : h9.af(code, 12) ? gs.a1B(!eq.md) : "Space" === code && eq.ku && (gF.lf && gF.tR(), eq.lQ) && gs
				.a1E(!1))
		}
	}

	function a2N() {
		"hidden" !== document.visibilityState && (eW.eX = !0)
	}

	function a2O() {
		return a27 + 15e3 > eW.av
	}

	function resize() {
		eR.a2h()
	}
	this.a29 = 0, this.a2A = "", this.a2B = !1, this.ck = function() {
		a2C.addEventListener("mousedown", lp, {
			passive: !1
		}), a2C.addEventListener("mousemove", ly, {
			passive: !1
		}), a2C.addEventListener("mouseup", a2D, {
			passive: !1
		}), a2C.addEventListener("click", click, {
			passive: !1
		}), a2C.addEventListener("mouseleave", a2E, {
			passive: !1
		}), a2C.addEventListener("wheel", lx, {
			passive: !1
		}), a2C.addEventListener("touchstart", xl, {
			passive: !1
		}), a2C.addEventListener("touchmove", xn, {
			passive: !1
		}), a2C.addEventListener("touchend", a2F, {
			passive: !1
		}), a2C.addEventListener("touchcancel", a2G, {
			passive: !1
		}), a2C.addEventListener("dragover", a2H), a2C.addEventListener("drop", a2I), a2C.addEventListener("dblclick", a2J), document.addEventListener("contextmenu", a2K), document.addEventListener("keydown", a2L), document.addEventListener(
			"keyup", a2M), document.addEventListener("visibilitychange", a2N), window.addEventListener("resize", resize)
	}, this.a2S = function(dF, dE) {
		return !!gs.lp(dF, dE) || !!(gN.lp(dF, dE) || gK.lp(dF, dE) || gJ.lp(dF, dE) || gG.lp(dF, dE))
	}, this.a2g = a2O, this.d2 = function() {
		return !a28 || 0 < a27
	}, this.a2e = function() {
		if (!aT.lJ()) return 8 === eY.tP() ? eq.md ? void gs.a1B(!1) : hF.lJ ? void hF.tR() : void gF.tR() : void(7 !== eY.tP() && 6 === eY.tP() && eQ.a2i());
		aT.ae(2)
	}
}

function i1() {
	function a2o(player) {
		var jl;
		aZ.d.a2q(player) && (jl = ei.rM[player] - ei.a2r[player] + gS.a2s(player), hE.sp(player, Math.abs(jl), jl < 0 ? 18 : 12)), ei.rM[player] = 0, ei.a2r[player] = 0
	}

	function a2x() {
		gO.show(!1, !1, !1, !0), at.rH(), h5.eL.xW()
	}

	function a2l(player, a2w) {
		for (var a4 = a2w.length - 1; 0 <= a4; a4--) gS.a2z(a2w[a4], player)
	}

	function a2n(player) {
		var ml = ei.ml,
			mm = ei.mm,
			mn = ei.mn,
			mo = ei.mo,
			mO = cC.mO;
		if (ei.jd[player]) {
			ei.jd[player] = 0;
			for (var mY = ml[player], ma = mn[player], dF = mm[player]; mY <= dF; dF--)
				for (var dE = mo[player]; ma <= dE; dE--) {
					var ec = 4 * (dE * mO + dF);
					gR.a36(player, ec) && gR.a37(ec)
				}
		}
		mm[player] = mo[player] = 0, ml[player] = mn[player] = Math.max(mO, cC.mP)
	}
	this.jJ = function(ec) {
		var player, jl = ei.jd[ec] + ei.a2j[ec];
		h1.bW.nm[ec] ? jl && (a2l(player = ec, gS.a2m(player)), a2n(player), g8.jm(player), gS.clear(player), a2o(player), function(player) {
			ei.a2j[player] = 0, ei.rb[player] = [], ei.a0V[player] = [], ei.pT[player] = [], ei.a0W[player] = []
		}(player)) : !jl && ei.rb[ec].length || this.l4(ec)
	}, this.l4 = function(player) {
		! function(player) {
			aZ.d.el(player) || (ei.eh[player] = hI.p9.ek(), eq.ky++);
			var a2w = gS.a2m(player);
			0 === a2w.length ? aZ.d.a0K(player) && a2x() : (a2l(player, a2w), function(player, a2w) {
				var a31 = a2w[function(a2w) {
					var a4, aB = 0;
					for (a4 = a2w.length - 1; 1 <= a4; a4--) ei.jd[a2w[a4]] > ei.jd[a2w[aB]] && (aB = a4);
					return aB
				}(a2w)];
				9 === eq.l1 && (1 === hG.sG[player] ? gi.a32(8) && gj.a33(a31) : g7.np[player] && (gG.s7(765, 0), gG.an(280, L(139, [ei.sA[a31], ei.sA[player]]), 765, a31, t.wc, t.a34, -1, !0)));
				if (aZ.d.a0K(player)) a2x(), gG.kq(a31, 1);
				else {
					for (var a4 = a2w.length - 1; 0 <= a4; a4--)
						if (aZ.d.a2q(a2w[a4]) && (hE.jk[4 - aZ.d.el(player)]++, aZ.d.a0K(a2w[a4]))) return gG.kq(player, 0);
					aZ.d.el(player) || gG.a35(0, player, a31)
				}
			}(player, a2w))
		}(player), a2n(player), a2o(player),
			function(player) {
				ei.kv[player] = 0, ei.rb[player] = null, ei.a0V[player] = null, ei.pT[player] = null, ei.a0W[player] = null
			}(player), g8.jm(player), gS.clear(player), h1.sP.a2v(player)
	}
}

function a38() {
	function a3g(a3k) {
		var dh = eq.data,
			a3k = (dh.selectedPlayer = gx.jT(a3k), dh.spawningSeed = gx.jT(14), gx.jT(4)),
			a3k = (a3k < 7 ? (dh.gameMode = 1, dh.numberTeams = a3k + 2) : 9 === a3k ? (dh.gameMode = dh.isZombieMode = 1, dh.numberTeams = 2) : (dh.gameMode = 0, dh.battleRoyaleMode = 7 === a3k ? 0 : 10 === a3k ? 1 : 2), dh.isContest = gx.jT(1), gx
				.jT(6));
		return dh.mapType = cC.tt(a3k) ? 0 : 1, cC.uA(dh, a3k), dh.mapSeed = gx.jT(14), a3k
	}
	this.eA = function(dj, dy) {
		gx.ck(dy), 0 === gx.size ? bj.bW.yV(dj, 3205) : ((0 === gx.jT(1) ? function(dj) {
			var a3C = gx.jT(6);
			0 === a3C ? function(dj) {
					if (0 === dj && 8 !== eY.tP()) {
						aT.bW.y7();
						for (var a3V = gx.jT(12), a3W = gx.jT(6), z = new Array(a3V), a4 = 0; a4 < a3V; a4++) z[a4] = gx.jT(a3W);
						gL.a3X(z)
					}
				}(dj) : 2 === a3C ? bj.a3E.a3F(dj) : 3 === a3C || 4 === a3C ? eS.ck() : 5 === a3C ? bj.a3G.a3H() : 9 === a3C ? bj.a3G.a3I(dj) : 10 === a3C ? bj.a3J.a3K() : 11 === a3C ? bj.a3G.a3L(dj) : 12 === a3C ? bj.a3J.a3M() :
				13 === a3C ? bj.a3N.a3O() : 14 === a3C ? bj.a3N.a3P() : 15 === a3C ? bj.a3G.a3Q() : 16 === a3C ? bj.a3E.a3R(dj) : 17 === a3C ? bj.a3E.a3S(dj) : 19 === a3C ? bj.a3E.a3T(dj) : 20 === a3C && bj.a3G.a3U(dj)
		} : function(dj) {
			if (8 !== eY.tP() && !eS.a3m()) return;
			if (dj !== bj.bW.oV) bj.bW.yV(dj, 3244);
			else if (0 === gx.jT(1)) eW.a3n.uO(gx.dy);
			else {
				var a4, dj = gx.jT(2);
				if (0 === dj) {
					var ay, yA = gx.jT(9);
					0 !== ei.kv[yA] && 0 !== ei.kv[eq.jj] && (ay = gx.jT(10), gG.a0E(yA, eq.jj, ay), gU.a3t(yA, 1, ay))
				} else if (1 === dj) ! function() {
					var yA = gx.jT(9);
					0 !== ei.kv[yA] && 0 !== ei.kv[eq.jj] && go.ng(0, [yA], !0) && gG.a3u(yA, 1)
				}();
				else if (2 === dj) ! function() {
					var yA = gx.jT(9),
						target = gx.jT(9);
					0 !== ei.kv[yA] && 0 !== ei.kv[target] && 0 !== ei.kv[eq.jj] && go.ng(1, [yA], !0) && (gU.a3t(yA, 3, 96), gU.a3t(target, 4, 96), gG.a3v(yA, target))
				}();
				else if (e1.oY && !e1.oZ) {
					var a5 = 540;
					for (gt.cD(17287), gt.oG(1, 0), gt.oG(6, 10), a5 = Math.min(gq.h.a3s.length, 540), a4 = 0; a4 < a5; a4++) gt.tA(32, gq.h.a3s[a4]);
					bj.bW.send(bj.bW.oV, gt.dy)
				}
			}
		})(dj), eW.a3B())
	}, this.a3Y = function(dy) {
		if (gx.ck(dy), gx.aB = 1, 3 === gx.jT(6)) {
			gx.aB += 20;
			var dh = eq.data = new a3e,
				dy = a3g(9),
				a3h = dh.humanCount = gx.jT(9) + 1;
			dh.selectableSpawn = 1 === dh.gameMode || a3h < 100, dh.colorsData = new Uint32Array(a3h), dh.playerNamesData = new Array(a3h);
			for (var a4 = 0; a4 < a3h; a4++) gx.aB++, dh.colorsData[a4] = gx.jT(18), dh.playerNamesData[a4] = gw.oO.pc(gx.jT(5));
			eY.a3i(), cC.cD(dy, dh.mapSeed), eq.a3j()
		} else ! function() {
			gx.aB += 20;
			var dh = eq.data = new a3e,
				a3f = a3g(1);
			dh.humanCount = 2;
			dh.selectableSpawn = 1, dh.elo = new Uint16Array(2), dh.colorsData = new Uint32Array(2), dh.playerNamesData = new Array(2);
			for (var a4 = 0; a4 < 2; a4++) gx.aB++, dh.colorsData[a4] = gx.jT(18), dh.elo[a4] = gx.jT(14), dh.playerNamesData[a4] = gw.oO.pc(gx.jT(5));
			eY.a3i(), cC.cD(a3f, dh.mapSeed), eq.a3j()
		}()
	}, this.a3b = function() {
		gx.aB = 1;
		var a3C = gx.jT(6),
			oR = gx.jT(10);
		return bj.bW.yI === oR ? (bj.bW.oV = oR, !1) : (bj.bW.close(bj.bW.yI, 3247), bj.bW.oV = oR, eS.sv = gx.jT(10), eS.a3c = gx.jT(3 === a3C ? 9 : 1), bj.bW.yN(oR, 5) && bj.yA.a3d(), !0)
	}
}

function a3w() {
	var a3x;
	this.ck = function() {
		if (eq.p6) {
			var uw = 1 - eq.a41;
			a3x = new Array(hG.qZ.length);
			for (var a4 = eq.xE - 1; 0 <= a4; a4--) {
				var oo = hG.qZ[a4 + uw];
				a3x[oo] = h3.bW.a3z(20, hG.wi[oo])
			}
			9 === eq.l1 && (a3x[1] = h3.bW.a3z(20, hG.wi[1]))
		} else a3x = [h3.bW.a3z(20, hG.wi[7])]
	}, this.eZ = function() {
		var mz = mJ;
		if (!(5 <= mz)) {
			var a42 = eR.cv,
				a43 = eR.cw,
				mY = mI / mz,
				ma = mK / mz,
				ms = (a42 + mI) / mz,
				mt = (a43 + mK) / mz,
				lE = -20 * mz,
				a44 = .5 * lE,
				a45 = cC.mO << 4,
				a5 = h1.bW.pR,
				mX = h1.bW.mX,
				sd = h1.bW.sd,
				wk = hG.wk,
				a46 = a3x,
				d6 = m0;
			3 < mz && (d6.globalAlpha = .5 * (5 - mz));
			for (var a4 = 0; a4 < a5; a4++) {
				var fu = mX[a4],
					dF = a42 * (fu % a45 / 16 - mY) / (ms - mY) + a44,
					fu = a43 * (Math.floor(fu / a45) / 16 - ma) / (mt - ma) + a44;
				a42 < dF || a43 < fu || dF < lE || fu < lE || (d6.setTransform(mz, 0, 0, mz, dF, fu), d6.drawImage(a46[wk[sd[a4] >> 3]], 0, 0))
			}
			d6.globalAlpha = 1, d6.setTransform(mz, 0, 0, mz, 0, 0)
		}
	}
}

function hV() {
	this.cg = function(aN, bw) {
		return Math.floor((aN + .5) / bw)
	}, this.a49 = function(aN, bw) {
		return Math.floor(aN * (bw + .5))
	}, this.sqrt = function(a9) {
		return ~~Math.sqrt(a9 + .5)
	}, this.pow = function(bd) {
		return Math.floor(Math.pow(2, bd) + .5)
	}, this.fH = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.a4A = function(tz, u1, a4B) {
		return Math.max(Math.min(tz, u1), a4B)
	}, this.a4C = function(a4D, a4E, dF, dE) {
		dF -= a4D, a4D = dE - a4E, dE = 0;
		return 0 == dF ? dE = 0 <= a4D ? Math.PI : 0 : (dE = Math.atan(a4D / dF), dE += 0 < dF ? .5 * Math.PI : 1.5 * Math.PI), dE
	}, this.log2 = function(a9) {
		return Math.floor(!!a9 * (1 + Math.log2(a9 + .5)))
	}, this.log10 = function(a9) {
		return Math.floor(Math.log10(a9 + .5))
	}, this.a4G = function(a4H, a4I, a4J, a4K, a4L) {
		return a4J - a4L < a4H && a4H < a4J + a4L && a4K - a4L < a4I && a4I < a4K + a4L
	}, this.a4M = function(a4N, a4O) {
		return a4N * a4N + a4O * a4O
	}
}

function a4P() {
	var a4Q = new Uint16Array(eq.fE);

	function a4c(player, a4a) {
		for (var a5 = h2.qc[0], a4l = h2.a4l, a4m = -1, x9 = eq.fE, a4 = 0; a4 < a5; a4++) {
			var v7, ec = a4l[a4];
			hQ.sU(player, ec) && (v7 = h0.yz(a4a, h0.zL(ec)), -1 === a4m || v7 < a4m) && (a4m = v7, x9 = ec)
		}
		return x9
	}

	function a4e(a4b, a4a) {
		if (a4b === eq.fE) return 0;
		var pT = ei.pT[a4b],
			rQ = pT.length;
		if (0 === rQ) return 0;
		for (var a5 = Math.min(rQ, 10), x9 = 0, a4m = h0.yz(pT[x9] >> 2, a4a), a4 = 0; a4 < a5; a4++) {
			var aA = gi.o1(rQ),
				v7 = h0.yz(pT[aA] >> 2, a4a);
			v7 < a4m && (a4m = v7, x9 = aA)
		}
		return pT[x9] >> 2
	}

	function a4i(player, a4a, oj, a4n) {
		var a4o;
		(a4n === eq.fE || (a4o = h0.zL(oj), a4n = h0.zL(a4n), h0.yz(a4a, a4o) < h0.yz(a4a, a4n))) && (a4Q[player] = oj)
	}
	this.ck = function() {
		a4Q.fill(eq.fE)
	}, this.a4R = function() {
		if (eW.et() % 109 == 9 && !(ed.ee < 20) && eq.p6 && !(hH.rY() < cf.cg(8 * eq.rA, 10))) {
			var wX = hH.sF();
			if (hG.qZ[wX]) {
				hH.a4S(wX);
				var a5 = h2.qc[0];
				if (0 !== a5)
					for (var z = h2.qd, eg = ed.eg, ee = ed.ee, a4T = a4Q, aA = gi.o1(a5), a4 = 0; a4 < ee; a4++) {
						var a4U = eg[a4],
							a4V = z[aA];
						aZ.d.a4W(a4U, a4V) && 512 === a4T[a4U] && (a4T[a4U] = a4V, aA = (aA + 1) % a5)
					}
			}
		}
	}, this.w = function(player) {
		var a4a, a4d, a4b, a4X = function(player) {
			var oj = a4Q[player];
			if (oj !== eq.fE) {
				if (aZ.d.ji(oj) && ei.pT[oj]) return oj;
				a4Q[player] = eq.fE
			}
			return eq.fE
		}(player);
		return function(player) {
			for (var sC = ed.eg, rQ = ed.ee, a5 = Math.min(rQ, rQ < 17 && 5 === gi.o1(20) ? 1 : 16), lE = gi.o1(rQ), a4l = h2.a4l, pT = ei.pT, aI = 0, a4 = 0; a4 < a5; a4++) {
				var ec = sC[(a4 + lE) % rQ];
				ec !== player && pT[ec].length && (a4l[aI++] = ec)
			}
			h2.qc[0] = aI
		}(player), 0 !== h2.qc[0] && (0 < (a4d = a4e(a4b = a4c(player, a4a = h0.zM(player)), a4a)) && h1.a4f.a4g(player, h1.cY.a4h(a4d, a4a)) ? (a4i(player, a4a, a4b, a4X), !0) : 0 < (a4b = function(player, a4a) {
			for (var a5 = h2.qc[0], a4l = h2.a4l, a4T = a4Q, lE = 0, a4 = 0; a4 < a5; a4++) {
				var ec = a4l[a4],
					ec = a4T[ec];
				ec !== eq.fE && aZ.d.ji(ec) && player !== ec && hQ.sU(player, ec) && (a4l[lE++] = ec)
			}
			return 0 !== (h2.qc[0] = lE) ? a4e(a4c(player, a4a), a4a) : 0
		}(player, a4a)) && h1.a4f.a4g(player, h1.cY.a4h(a4b, a4a)) ? (a4i(player, a4a, gR.sZ(a4b << 2), a4X), !0) : !!(0 < (a4d = a4e(a4X, a4a)) && h1.a4f.a4g(player, h1.cY.a4h(a4d, a4a))))
	}
}

function a4q() {
	this.rG = function(ax, font, maxWidth) {
		if (font && (m0.font = font), m0.measureText(ax).width <= maxWidth) return ax;
		for (var a4 = ax.length - 1; 1 <= a4; a4--)
			if (ax = ax.substring(0, a4), m0.measureText(ax + "...").width <= maxWidth) return ax + "...";
		return "..."
	}
}

function a4s() {
	this.a4t = function(dj) {
		var username = bp.cy.data[122].value.slice(0, 20),
			username = (gt.cD(24 + 16 * username.length + 18 + hI.a4u.jT()), gt.oG(1, 0), gt.oG(6, 1), gt.oG(10, e1.qX), gt.oG(2, bp.cy.data[158].value), bj.n9.oc(username), aZ.color.a4v(bp.bW.a4w()));
		gt.oG(6, username[0]), gt.oG(6, username[1]), gt.oG(6, username[2]), hI.a4u.a1a(), bj.bW.yI = dj, bj.bW.send(dj, gt.dy)
	}, this.bo = function(a4x, a1t) {
		gu.ck(), gu.oG(1, 0), gu.oG(6, 2), gu.oG(3, a4x), 2 === a4x ? gu.oG(2, a1t) : 3 === a4x ? gv.a4y.a1a(a1t, 7, gu) : 5 === a4x && (gu.oG(3, a1t.id), gu.oG(3, a1t.value), gu.oG(30, a1t.bs)), bj.bW.send(bj.bW.yI, gu.a4z())
	}
}

function a50(vC) {
	var uj = document.createElement("div"),
		a51 = document.createElement("div");
	this.by = function() {
			a51.textContent = "", bQ.ci.aY(1);
			for (var al = document.createDocumentFragment(), a52 = bQ.bW.bX[0], cP = bQ.cP.cQ[a52], cT = bQ.cP.cT[a52], a4 = 0; a4 < cP.length; a4++) ! function(al, ka, a54, a52) {
				var r = document.createElement("span");
				r.textContent = (a54 ? "🟢 " : "⚪ ") + bQ.cY.kR(ka, a52), r.style.color = bQ.cY.kT(ka.kU), r.style.cursor = "pointer", r.style.margin = "0.2em 0.2em 0.2em 0.2em", r.style.width = r.style.maxWidth = 2 === a52 ? "10em" : "9em", r
					.style.height = r.style.maxHeight = "1.4em", r.style.whiteSpace = "nowrap", r.style.overflow = "hidden", r.style.textOverflow = "ellipsis", r.style.font = "inherit", r.style.display = "inline-block", bQ.cY.kZ(ka) && (r.style
						.textDecoration = "underline"), ka.pu && (r.style.textDecorationLine = "underline", r.style.textDecorationStyle = "dotted");
				r.onclick = function(bd) {
					vC(bd, ka)
				}, d1.d2() || (r.onmouseover = function(bd) {
					bQ.ci.a55(bd, ka, 1)
				}), al.appendChild(r)
			}(al, cP[a4], a4 < cT, a52);
			a51.appendChild(al)
		}, this.show = function(or) {
			or.appendChild(uj)
		}, this.aY = function(or) {
			aT.removeChild(or, uj)
		}, this.resize = function() {
			a51.style.fontSize = aZ.aa.ab(aZ.aa.nK(.02, .3))
		}, uj.style.top = "0", uj.style.left = "0", uj.style.width = uj.style.height = "100%", uj.style.overflowX = "hidden", uj.style.overflowY = "auto", uj.style.font = "inherit", a51.style.font = "inherit", a51.style.margin = "0.4em", uj
		.appendChild(a51)
}

function aR(title, ju, a56) {
	var a57 = document.createElement("div"),
		a58 = document.createElement("div"),
		a59 = document.createElement("div"),
		a5A = document.createElement("div"),
		a5B = document.createElement("div");
	this.aV = a59, this.ag = ju, this.show = function() {
			!1 !== a56 ? document.body.appendChild(a57) : (document.body.appendChild(a58), document.body.appendChild(a5A))
		}, this.aY = function() {
			!1 !== a56 ? aT.removeChild(document.body, a57) : (aT.removeChild(document.body, a58), aT.removeChild(document.body, a5A))
		}, this.a5G = function() {
			var vU = aZ.aa.nK(.1),
				vT = aZ.aa.nK(.08 + .04 * (eR.a5H < 1), .3);
			return {
				vU: vU,
				vT: vT,
				a5I: eR.cw / eR.rt - vU - vT
			}
		}, this.resize = function(vv) {
			var a5 = ju.length,
				a5J = this.a5G(),
				vU = a5J.vU,
				vT = a5J.vT;
			for (a58.style.height = aZ.aa.ab(vU), aZ.aa.ot(a58, 2), a5A.style.top = aZ.aa.ab(eR.cw / eR.rt - vT), a5A.style.height = aZ.aa.ab(vT), aZ.aa.ot(a5A, 8), a59.style.top = aZ.aa.ab(vU), a59.style.height = a59.style.maxHeight = aZ.aa.ab(a5J
					.a5I), a58.style.font = aZ.aa.lT(0, aZ.aa.nK(.02, .15)), a5A.style.font = aZ.aa.lT(0, aZ.aa.nK(.02, .7)), a59.style.font = aZ.aa.lT(0, aZ.aa.nK(.02, .35)), a4 = 1; a4 < a5; a4++) aZ.aa.ot(ju[a4].button, 4);
			for (var vw = 0, a4 = 0; a4 < a5; a4++) vw += ju[a4].button.offsetWidth;
			if (vv && vw < a5A.offsetWidth)
				for (a4 = 0; a4 < a5; a4++) ju[a4].button.style.width = (100 * ju[a4].button.offsetWidth / vw).toFixed(2) + "%";
			else
				for (a4 = 0; a4 < a5; a4++) ju[a4].button.style.width = "auto";
			a5A.a5K && (a5A.scrollLeft = a5A.a5K), vv || this.resize(!0)
		}, this.eZ = function() {
			var a5J = this.a5G(),
				af = eR.rt;
			m0.fillStyle = t.da, m0.fillRect(0, af * a5J.vU, eR.cv, af * a5J.a5I)
		}, a57.style.position = "absolute", a57.style.top = "0", a57.style.left = "0", a57.style.width = "100%", a57.style.height = "100%", a58.style.position = "absolute", a58.style.top = "0", a58.style.left = "0", a58.style.width = "100%", a58
		.style.display = "flex", a58.style.backgroundColor = t.da, a5A.style.position = "absolute", a5A.style.left = "0", a5A.style.width = "100%", aZ.aa.a5C(a5A), a5B.style.height = a5B.style.maxHeight = "100%", a59.style.position = "absolute", a59
		.style.width = "100%", a59.style.backgroundColor = t.da,
		function() {
			for (var a4 = 0; a4 < ju.length; a4++) ju[a4].button.style.height = "100%", ju[a4].button.style.padding = "0.0em 0.9em"
		}();
	for (var a4 = 0; a4 < ju.length; a4++) a5B.appendChild(ju[a4].button);
	a58.appendChild(function() {
		var a5F = document.createElement("h1");
		return a5F.textContent = title, a5F.style.margin = "auto", a5F.style.fontSize = 18 <= title.length && eR.cw > eR.cv ? "1.8em" : "2.3em", a5F.style.fontFamily = "Arial Black, Trebuchet MS", a5F
	}()), a5A.appendChild(a5B), !1 !== a56 && (a57.appendChild(a59), a57.appendChild(a58), a57.appendChild(a5A))
}

function ig() {
	this.bW = new a5L, this.qL = new a5M, this.ck = function() {
		this.bW.ck()
	}, this.w = function() {
		0 !== this.bW.a5N && this.bW.a5N--
	}
}

function a5O(data) {
	var jq, a5P, af, tX;

	function a5Q(ru) {
		var a5 = data.data.length;
		if (a5) {
			for (var jy, max = min = parseInt(data.data[0][0]), a4 = 1; a4 < a5; a4++) var zi = parseInt(data.data[a4][0]),
				min = Math.min(zi, min),
				max = Math.max(zi, max);
			jy = ru < 0 ? min + ru : max + 1, aT.bl(8, aT.c0().dk, new jw(21, {
				jx: data.jx,
				jy: jy,
				jz: jy + Math.abs(ru)
			}))
		}
	}
	this.show = function() {
			jq.show(), this.resize()
		}, this.aY = function() {
			jq.aY()
		}, this.resize = function() {
			jq.resize(), a5P.resize()
		}, this.ae = function(af) {
			2 === af && jq.ag[0].ah()
		}, af = data.data.length ? 0 : 1, af = [new aS("⬅️ " + L(1), function() {
			aT.f1()
		}), new aS(L(140), function() {
			a5Q(-10)
		}, af, 0, 1), new aS(L(141), function() {
			a5Q(10)
		}, af, 0, 1), new aS(L(142), function() {
			aT.bl(11, 10, new a1s({
				jx: data.jx
			}))
		})], tX = [L(143), L(144), L(145), L(146), L(147), L(148), L(149), L(150), L(151), L(152), L(42), L(43), "Audit Log"], jq = new aR(tX[data.jx], af),
		function() {
			var a4, dh = {
					a5S: []
				},
				a5S = dh.a5S,
				a5T = data.data,
				a5 = a5T.length;
			a5 && 0 === a5T[0][0] && 0 <= (aB = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.jx]) && (aT.bW.xz[aB] = a5T[0][1]);
			var d3 = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.jx],
				a5W = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.jx],
				aB = [
					[L(153), L(154) + " ↗", L(155)],
					[L(153), L(156), L(157), L(158) + " ↗"],
					[L(153), L(154) + " ↗", L(157)],
					[L(153), L(154) + " ↗", L(157)],
					[L(159), L(160), L(161) + " ↗", L(162) + " ↗", L(51)],
					[L(159), L(160), L(163) + " ↗", L(164) + " ↗", L(165)],
					[L(159), L(160), L(166) + " ↗", L(167) + " ↗", L(168)],
					[L(159), L(160), L(163) + " ↗", L(164) + " ↗", L(169)],
					[L(159), L(160), L(161) + " ↗", L(162) + " ↗", L(51)],
					[L(153), L(154) + " ↗", L(157)],
					[L(153), L(154) + " ↗", L(170)],
					[L(153), L(154) + " ↗", L(157)],
					[L(159), L(160), L(161) + " ↗", L(162) + " ↗", L(171)]
				];
			if (dh.tX = aB[data.jx], dh.a5X = [
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
				][data.jx], 0 === data.jx || 2 === data.jx || 3 === data.jx || 9 === data.jx || 10 === data.jx || 11 === data.jx)
				for (a4 = 0; a4 < a5; a4++) a5S.push([{
					a9: a5T[a4][0] + 1 + ".",
					jl: 0
				}, {
					a9: a5T[a4][1],
					jl: 1,
					bs: a5T[a4][4],
					a5Y: a5T[a4][3]
				}, {
					a9: (d3 * a5T[a4][2]).toFixed(a5W),
					jl: 0
				}]);
			else if (12 === data.jx)
				for (a4 = 0; a4 < a5; a4++) {
					var a5Z = a5T[a4][3];
					a5S.push([{
						a9: "" + a5T[a4][0],
						jl: 0
					}, {
						a9: "" + a5T[a4][4],
						jl: 0
					}, {
						a9: a5T[a4][5],
						jl: 1,
						bs: a5T[a4][1],
						a5Y: 0
					}, {
						a9: a5T[a4][6],
						jl: 1,
						bs: a5T[a4][2],
						a5Y: 0
					}, {
						a9: hN.xQ(a5Z),
						jl: 0
					}])
				} else if (1 === data.jx)
					for (a4 = 0; a4 < a5; a4++) a5S.push([{
						a9: a5T[a4][0] + 1 + ".",
						jl: 0
					}, {
						a9: a5T[a4][1],
						jl: 0
					}, {
						a9: (d3 * a5T[a4][2]).toFixed(a5W),
						jl: 0
					}, {
						a9: a5T[a4][3],
						jl: 1,
						bs: a5T[a4][5],
						a5Y: a5T[a4][4]
					}]);
				else if (4 === data.jx || 5 === data.jx || 6 === data.jx || 7 === data.jx || 8 === data.jx)
				for (a4 = 0; a4 < a5; a4++) {
					var a5a = a5T[a4][5];
					4 === data.jx || 8 === data.jx ? "100%" === (a5a = (a5a % 64 * 100 / (a5a >> 6)).toFixed(0) + "%") && (4 === data.jx ? a5a += " (" + L(172) + ")" : a5a += " (" + L(173) + ")") : 5 === data.jx ? 32768 <= a5a && (a5a = -(a5a -
						32768)) : a5a = (d3 * a5a).toFixed(a5W), a5S.push([{
						a9: "" + a5T[a4][0],
						jl: 0
					}, {
						a9: "" + a5T[a4][6],
						jl: 0
					}, {
						a9: a5T[a4][7],
						jl: 1,
						bs: a5T[a4][1],
						a5Y: a5T[a4][2]
					}, {
						a9: a5T[a4][8],
						jl: 1,
						bs: a5T[a4][3],
						a5Y: a5T[a4][4]
					}, {
						a9: "" + a5a,
						jl: 0
					}])
				}
			a5P = new a5b(jq.aV, dh)
		}()
}

function a5c() {
	var jq, a1g, f4, f8;

	function a5d() {
		gp.w1 !== bp.cy.data[12].value ? (gp.ck(), aT.bl(8, 1, new jw(30))) : aT.bl(1)
	}
	this.show = function() {
			jq.show(), this.resize()
		}, this.aY = function() {
			jq.aY()
		}, this.resize = function() {
			jq.resize(), a1g.resize()
		}, this.ae = function(af) {
			2 === af && jq.ag[0].ah()
		}, jq = new aR(L(64), [new aS("⬅️ " + L(1), a5d), new aS(L(174), function() {
			aT.bh(), bp.bq.a5e(), aT.bl(2)
		})]), f4 = [], (f8 = new f9).fA(L(175)), f8.fs(L(176)), f4.push(f8),
		function(f4) {
			var f8 = new f9,
				z = (f8.fA(L(30)), gp.data.a5o());
			f8.fB(new fC({
				fD: z,
				value: gp.data.a5p(z)
			}, function(aB) {
				return bp.bq.br(12, z[aB].split(":")[0]), !0
			})), f4.push(f8)
		}(f4),
		function(f4) {
			var f8 = new f9,
				a5j = (f8.fA(L(197)), []);
			f8.fF(new fv([new aS(L(29), function(bd) {
				h9.a5k();
				for (var a4 = 0; a4 < a5j.length; a4++) a5j[a4].bd.value = h9.wR[a4];
				return aZ.aa.g3(bd), !0
			}).button]));
			for (var a4 = 0; a4 < h9.a5l.length; a4++) {
				f8.fs(h9.a5l[a4]);
				for (var aN = 0; aN < 2; aN++) {
					var aB = 2 * a4 + aN,
						bc = new fG({
							value: h9.wR[aB],
							aB: -1
						});
					bc.bd.a5m = aB, a5j.push(bc), bc.bd.addEventListener("keydown", function(bd) {
						bd.preventDefault();
						var code = bd.code;
						bd.target.value = code, h9.a5n(bd.target.a5m, code)
					}), aN && (bc.bd.style.marginLeft = "4%"), bc.bd.style.width = "48%", f8.fF(bc)
				}
			}
			f4.push(f8)
		}(f4), (f8 = new f9).fA(L(177)), f8.fB(new fC({
			fD: ["1", "2"],
			value: eQ.a5h - 1
		}, function(a4) {
			eQ.a5h = a4 + 1
		})), f4.push(f8), (f8 = new f9).fA(L(178)), bp.cy.data[1].fD = [L(179), L(180), L(181), L(182)], f8.fB(new fC(bp.cy.data[1])), f4.push(f8), (f8 = new f9).fA(L(183)), bp.cy.data[9].fD = [L(180), L(184), L(185)], f8.fB(new fC(bp.cy.data[9])),
		f4.push(f8), (f8 = new f9).fA(L(186)), bp.cy.data[11].fD = [L(187), L(188), L(189)], f8.fB(new fC(bp.cy.data[11])), f4.push(f8), (f8 = new f9).fA(L(190)), f8.fF(new a5i(bp.cy.data[2])), f4.push(f8), (f8 = new f9).fA(L(191)), f8.fF(new a5i(bp
			.cy.data[7])), f4.push(f8), (f8 = new f9).fA(L(192)), f8.fF(new a5i(bp.cy.data[8])), f4.push(f8), (f8 = new f9).fA(L(193)), f8.fF(new fG(bp.cy.data[5])), f4.push(f8), (f8 = new f9).fA(L(194)), f8.fF(new a5i(bp.cy.data[13], L(195))), f8
		.fF(new a5i(bp.cy.data[14], L(196))), f4.push(f8), a1g = new ex(jq.aV, f4)
}

function a5q(a5r) {
	var rl = document.createElement("div");

	function dV() {
		d1.d2() || (rl.style.backgroundColor = aZ.color.de(t.da, 50))
	}

	function dW() {
		rl.style.backgroundColor = t.da
	}
	this.br = function(a5s) {
			rl.textContent = a5s
		}, this.show = function() {
			document.body.appendChild(rl)
		}, this.resize = function() {
			var cw = aZ.aa.nK(.03, .5);
			rl.style.width = 2 * cw + "px", rl.style.height = cw + "px", rl.style.font = aZ.aa.lT(1, .75 * cw), aZ.aa.ot(rl, 4), aZ.aa.ot(rl, 2)
		}, this.bi = function() {
			rl.onclick = null, rl.onmouseover = null, rl.onmouseout = null, aT.removeChild(document.body, rl), rl = null
		}, rl.style.position = "absolute", dW(), rl.style.color = t.u, rl.style.zIndex = "3", rl.style.right = "0", rl.style.top = "0", rl.style.display = "flex", rl.style.justifyContent = "center", rl.style.alignItems = "center", rl.style
		.userSelect = "none", rl.style.outline = "none", rl.onclick = a5r, rl.onmouseover = dV, rl.onmouseout = dW
}

function i8() {
	var a5t, a5u, a5v, a5w, a5x, a5y, a5z, a60, a61, a62, a63, a64, a65, a66, a67, a68, a69, a6A, a6C, a6D, a6E, a6F, a6G, a6N, a6O, a6B = null,
		a6I = 0,
		a6J = !1,
		a6K = new Float32Array(4),
		a6L = 0,
		a6M = !0,
		a6P = 400,
		a6Q = 0;

	function a6R() {
		a61 = Math.floor(+eR.lS), a62 = Math.floor(.5 * a61)
	}

	function a6S() {
		var a4, a6a;
		for (m0.font = aZ.aa.lT(1, 100 * a63), a6a = 80 / Math.floor(m0.measureText(aZ.bu.jW(eq.a6b)).width), m0.font = aZ.aa.lT(1, 100), a4 = eq.fE - 1; 0 <= a4; a4--) a60[a4] = 100 / Math.floor(m0.measureText(ei.sA[a4]).width), a5z[a4] = Math.min(
			a6a, a60[a4])
	}

	function a6c(a4) {
		return !a6Q || (a4 = ei.rM[a4]) < 1e6 ? 1 : a4 < 1e7 ? a6K[0] : a6K[Math.min(Math.floor(Math.log10(a4)) - 6, 3)]
	}

	function a6Z(d6) {
		a6A = !1, a69 = 1, a67 = a68 = 0, a6M && (aZ.aa.textAlign(d6, 1), aZ.aa.textBaseline(d6, 1));
		for (var a6m, a6n, a4, a6o, fontSize, a6p, mY = mI / mJ, ma = mK / mJ, ms = (eR.cv + mI) / mJ, mt = (eR.cw + mK) / mJ, a6q = 0 !== ei.kv[eq.jj] && !aZ.d.el(eq.jj), aN = ed.ee - 1; 0 <= aN; aN--) a4 = ed.eg[aN], (fontSize = Math.floor(a66 *
			mJ * a6c(a4) * a5z[a4] * a5x[a4])) < a65 || a61 <= fontSize || a5v[a4] + a5x[a4] > mY && a5v[a4] < ms && a5w[a4] + a5y[a4] > ma && a5w[a4] < mt && (a6m = Math.floor(eR.cv * (a5v[a4] + a5x[a4] / 2 - mY) / (ms - mY)), a6n = Math.floor(
			eR.cw * (a5w[a4] + a5y[a4] / 2 - ma) / (mt - ma) - .1 * fontSize), a6o = gR.lY[a4], d6.font = aZ.aa.lT(1 === ei.kw[a4] ? 4 : 1, fontSize), d6.fillStyle = a6r(fontSize, a6o % 2), a6Q ? a6s(d6, a4, fontSize, a6m, a6n, a6o) : a6t(a4,
			fontSize, a6m, a6n, d6), a6A = !0, 0 < a6E[a4] ? function(a6m, a6n, fontSize, a4, d6) {
			0 === sE[a4] ? b0.b1.a6g(a6D[a4]) ? (function(a6m, a6n, fontSize, player, ay, d6) {
				for (var a73 = a6n, t4 = (d6.globalAlpha = a74(fontSize), a6c(player) * (a6Q ? a6L : a60[player])), a72 = a6m - .5 * fontSize / t4 - .9 * fontSize, bw = 0; bw < 2; bw++) d6.fillText(b0.b1.b6(ay), a72, a73), a72 = a6m +
					.5 * fontSize / t4 + .9 * fontSize;
				d6.globalAlpha = 1
			}(a6m, a6n, fontSize, a4, a6D[a4], d6), a6v(a6m, a6n, fontSize, 0, 0, d6)) : b0.b1.a77(a6D[a4]) ? (a78(a6m, a6n, fontSize, a6D[a4], 0, d6), a6v(a6m, a6n, fontSize, 0, 1, d6)) : (a78(a6m, a6n, fontSize, a6D[a4], 1, d6), a6v(
				a6m, a6n, fontSize, 1, 0, d6)) : a78(a6m, a6n, fontSize, a6D[a4], 0, d6)
		}(a6m, a6n, fontSize, a4, d6) : 0 === sE[a4] && a6v(a6m, a6n, fontSize, 0, 0, d6), a6q && (0 < a6E[a4 + eq.fE] || 0 < a6E[a4 + 2 * eq.fE] || 0 < a6E[a4 + 3 * eq.fE] || 0 < a6E[a4 + 4 * eq.fE]) && function(a6m, a6n, fontSize, a4, d6) {
			var af, aI = -1;
			for (af = 4; 1 <= af; af--) 0 < a6E[a4 + af * eq.fE] && aI++;
			for (af = 1; af < 5; af++) 0 < a6E[a4 + af * eq.fE] && (! function(a6m, a6n, fontSize, af, a4, a6z, jl, d6) {
				var a46;
				if (1 === af) {
					a4 = a6D[a4 + eq.fE];
					if (!b0.b1.a79(a4)) return function(a6m, a6n, fontSize, ay, a6z, d6) {
						d6.globalAlpha = a74(fontSize);
						a6m -= .534 * a6z * fontSize, a6z = a6n + 1.59 * fontSize;
						d6.font = aZ.aa.lT(0, .785 * fontSize), d6.fillText(b0.b1.b6(ay), a6m, a6z), d6.globalAlpha = 1
					}(a6m, a6n, fontSize, a4, a6z, d6);
					a46 = b0.b4.b5[a4 - 1024 + b0.b1.b2]
				} else a46 = 2 === af ? gE.a7B()[4].canvas[+(jl < 255)] : (3 === af ? gE.a7B()[5] : gE.a7B()[6]).canvas[0];
				a4 = b0.b4.zq, jl = .8 * fontSize / a4, af = a6m - .5 * jl * a4 - .534 * a6z * fontSize, a6m = a6n + 1.4 * jl * a4;
				d6.setTransform(jl, 0, 0, jl, af, a6m), d6.globalAlpha = a74(fontSize), d6.drawImage(a46, 0, 0), d6.globalAlpha = 1, d6.setTransform(1, 0, 0, 1, 0, 0)
			}(a6m, a6n, fontSize, af, a4, aI, a6E[a4 + af * eq.fE], d6), aI -= 2)
		}(a6m, a6n, fontSize, a4, d6), (a6p = a63 * fontSize) < a65 || (d6.font = aZ.aa.lT(1, a6p), a6n += Math.floor(.78 * fontSize), a6Q ? a6t(a4, a6p, a6m, a6n, d6) : a6s(d6, a4, a6p, a6m, a6n, a6o)))
	}

	function a6t(a4, fontSize, dF, dE, d6) {
		var ___id = a4;
		var showName = a4 < eq.er || !__fx.settings.hideBotNames;
		if (showName) d6.fillText(ei.sA[a4], dF, dE), a4 < eq.er && 2 !== ei.kw[a4] || (a4 = fontSize / a60[a4], d6.fillRect(dF - .5 * a4, dE + aZ.aa.a0I * fontSize, a4, Math.max(1, .1 * fontSize)));
		a6Q && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (d6.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			d6.fillText(__fx.utils.getDensity(___id), dF, showName ? dE + fontSize : dE)
		);
	}

	function a6s(d6, a4, fontSize, a6m, a6n, a6o) {
		var ___id = a4;
		a4 = aZ.bu.jW(ei.rM[a4]);
		a6o >> 1 & 1 ? (d6.lineWidth = .05 * fontSize, d6.strokeStyle = a6r(fontSize, a6o % 2), d6.strokeText(a4, a6m, a6n)) : (1 < a6o && (d6.lineWidth = .12 * fontSize, d6.strokeStyle = a6r(fontSize, a6o), d6.strokeText(a4, a6m, a6n)), d6.fillText(
			a4, a6m, a6n));
		a6Q || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (d6.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), d6.fillText(__fx.utils.getDensity(___id), a6m, a6n + fontSize))
	}

	function a6v(a6m, a6n, fontSize, a6z, a70, d6) {
		var a71 = .95 * fontSize / a6G,
			a6m = a6m - .5 * a71 * a6F + .8 * a6z * fontSize,
			a6z = a6n - 1.76 * a71 * a6G - (.35 - aZ.aa.a0I + .7) * a70 * fontSize;
		d6.setTransform(a71, 0, 0, a71, a6m, a6z), d6.globalAlpha = a74(fontSize), d6.drawImage(gQ.get(4), 0, 0), d6.globalAlpha = 1, d6.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a78(a6m, a6n, fontSize, ay, a6z, d6) {
		var nI, a72, a71;
		d6.globalAlpha = a74(fontSize), b0.b1.a79(ay) ? (nI = b0.b4.zq, d6.setTransform(a71 = 1.1 * fontSize / nI, 0, 0, a71, a72 = a6m - .5 * a71 * nI - .8 * a6z * fontSize, a71 = a6n - 1.55 * a71 * nI), d6.drawImage(b0.b4.b5[ay - 1024 + b0.b1.b2],
			0, 0), d6.setTransform(1, 0, 0, 1, 0, 0)) : (a72 = a6m - .8 * a6z * fontSize, a71 = a6n - (.35 - aZ.aa.a0I + 1) * fontSize, d6.fillText(b0.b1.b6(ay), a72, a71)), d6.globalAlpha = 1
	}

	function a6r(fontSize, a6o) {
		return a62 <= fontSize && fontSize < a61 ? hG.wf[a6o] + a74(fontSize).toFixed(3) + ")" : hG.wg[a6o]
	}

	function a74(fontSize) {
		return a62 <= fontSize && fontSize < a61 ? 1 - (fontSize - a62) / (a61 - a62) : 1
	}

	function a7O(t4, cv) {
		return 1 + Math.floor(a64 * t4 * cv)
	}

	function a7L(a4) {
		for (var left = a5v[a4], aN = a5v[a4] - ei.ml[a4] - 1; 0 <= aN; aN--)
			if (!a7R(a4, --left, a5w[a4], a5y[a4])) {
				left++;
				break
			} var right = a5v[a4];
		for (aN = ei.mm[a4] - a5v[a4] - a5x[a4]; 0 <= aN; aN--)
			if (!a7R(a4, ++right + a5x[a4] - 1, a5w[a4], a5y[a4])) {
				right--;
				break
			} var dF = Math.floor((left + right) / 2),
			top = a5w[a4];
		for (aN = a5w[a4] - ei.mn[a4] - 1; 0 <= aN; aN--)
			if (!a7S(a4, dF, --top, a5x[a4])) {
				top++;
				break
			} var bottom = a5w[a4];
		for (aN = ei.mo[a4] - a5w[a4] - a5y[a4]; 0 <= aN; aN--)
			if (!a7S(a4, dF, ++bottom + a5y[a4] - 1, a5x[a4])) {
				bottom--;
				break
			} var dE = Math.floor((top + bottom) / 2);
		a7I(a4, dF, dE, a5x[a4], a5y[a4]) && (a5v[a4] = dF, a5w[a4] = dE)
	}

	function a7I(player, dF, dE, cv, cw) {
		dh = Math.floor(.2 * cv);
		for (var dh, af = dF + cv - 1; dF <= af; af--)
			if (!a7R(player, af, dE, cw)) return;
		for (af = dE + cw - 1 - (dh = (dh = Math.floor(.25 * cw)) < 1 ? 1 : dh); dE + dh <= af; af--)
			if (!a7S(player, dF, af, cv)) return;
		return 1
	}

	function a7R(player, dF, dE, cw) {
		return gR.a36(player, 4 * (dE * cC.mO + dF)) && gR.a36(player, 4 * ((dE + cw - 1) * cC.mO + dF))
	}

	function a7S(player, dF, dE, cv) {
		return gR.a36(player, 4 * (dE * cC.mO + dF)) && gR.a36(player, 4 * (dE * cC.mO + dF + cv - 1))
	}
	this.ck = function() {
		if (a6Q = bp.cy.data[7].value || 8 === eq.l1, a6P = 0 === (a6P = bp.cy.data[11].value) ? 280 : 1 === a6P ? 187 : 112, a6A = !1, a66 = .88, a63 = .5, a64 = 1.8, a65 = 12 - 3 * bp.cy.data[9].value, a5u = a5t = 0, a5v = new Uint16Array(eq
				.fE), a5w = new Uint16Array(eq.fE), a5x = new Uint16Array(eq.fE), a5y = new Uint16Array(eq.fE), a5z = new Float32Array(eq.fE), a60 = new Float32Array(eq.fE), a6D = new Uint16Array(2 * eq.fE), a6E = new Uint8Array(5 * eq.fE), a6N =
			new Uint8Array(eq.fE), a6O = new Uint8Array(eq.fE), a6M || (a6B = a6B || document.createElement("canvas")), a6R(), a68 = a67 = 0, a69 = 1, a6Q) {
			var a4, a6a;
			for (a6S(), m0.font = aZ.aa.lT(1, 100), a6a = 100 / Math.floor(m0.measureText("900 000").width), a4 = eq.fE - 1; 0 <= a4; a4--) a5z[a4] = Math.min(a6a, 2 * a60[a4]);
			a6L = a6a, a6K[0] = 100 / (a6a * Math.floor(m0.measureText("5 000 000").width)), a6K[1] = 100 / (a6a * Math.floor(m0.measureText("50 000 000").width)), a6K[2] = 100 / (a6a * Math.floor(m0.measureText("500 000 000").width)), a6K[3] =
				100 / (a6a * Math.floor(m0.measureText("1 000 000 000").width))
		} else a6S();
		! function() {
			var a4;
			for (a4 = eq.fE - 1; 0 <= a4; a4--) ei.jd[a4] < 12 ? (a5v[a4] = ei.ml[a4] + 1, a5w[a4] = ei.mn[a4] + 1, a5x[a4] = 1, a5y[a4] = 1) : (a5v[a4] = ei.ml[a4], a5w[a4] = ei.mn[a4] + 1, a5x[a4] = 4, a5y[a4] = 2);
			if (eq.l3)
				for (a4 = 0; a4 < eq.er; a4++) a5x[a4] = 0;
			a6F = gQ.get(4).width, a6G = gQ.get(4).height
		}()
	}, this.a6V = function(ec, a6W) {
		a6W > 18 * ei.jd[ec] ? (a6O[ec] = 6, gR.lY[ec] = 2 + gR.lY[ec] % 2) : (a6N[ec] = 4, (gR.lY[ec] < 2 || 3 < gR.lY[ec]) && (gR.lY[ec] = 6 + gR.lY[ec] % 2))
	}, this.a6X = function(ec, a6W) {
		a6W > 6 * ei.jd[ec] ? (a6O[ec] = 6, gR.lY[ec] = 4 + gR.lY[ec] % 2) : (a6N[ec] = 4, (gR.lY[ec] < 4 || 5 < gR.lY[ec]) && (gR.lY[ec] = 8 + gR.lY[ec] % 2))
	}, this.resize = function() {
		a6R(), a6M || a6Z(a6C)
	}, this.uP = function() {
		for (var a4 = 0; a4 < eq.er; a4++) ei.mm[a4] - ei.ml[a4] != 3 || ei.mo[a4] - ei.mn[a4] != 3 ? (a5v[a4] = ei.ml[a4] + (ei.mm[a4] !== ei.ml[a4] ? 1 : 0), a5w[a4] = ei.mn[a4], a5x[a4] = 1, a5y[a4] = 1) : (a5v[a4] = ei.ml[a4], a5w[a4] = ei
			.mn[a4] + 1, a5x[a4] = 4, a5y[a4] = 2)
	}, this.a3t = function(player, aB, a6e) {
		! function(player, aB, a6e) {
			player += aB * eq.fE;
			0 === aB ? a6D[player] === a6e && 0 < a6E[player] ? a6E[player] = 0 : (a6D[player] = a6e, a6E[player] = b0.b1.a6g(a6e) ? 255 : 64) : 1 === aB ? (a6E[player] = 64, a6D[player] = a6e) : a6E[player] = a6e
		}(player, aB, a6e), 2 === eq.ku && this.l0(!0)
	}, this.eZ = function() {
		a6M ? a6Z(m0) : a6A && (1 !== a69 ? (m0.imageSmoothingEnabled = !0, m0.setTransform(a69, 0, 0, a69, 0, 0), m0.drawImage(a6B, -a67 / a69, -a68 / a69), m0.setTransform(1, 0, 0, 1, 0, 0), m0.imageSmoothingEnabled = !1) : m0.drawImage(a6B, -
			a67, -a68))
	}, this.a6h = function(mp, mq) {
		a67 += mp, a68 += mq
	}, this.ly = function(mp, mq) {
		gU.a6h(mp, mq)
	}, this.zoom = function(lw, ll, lm) {
		a69 *= lw, a67 = (a67 + ll) * lw - ll, a68 = (a68 + lm) * lw - lm
	}, this.l0 = function(hS) {
		return !a6M && !(!a6J && !hS && eW.av < a6I + (1 === a69 && 0 === a67 && 0 === a68 && (eq.a6j() || eq.l3 || 2 === eq.ku) ? 1e3 : a6P) || (a6J = !1, a6I = eW.av, a6Z(a6C), 0))
	}, this.a6k = function(a4) {
		return a6c(a4) * a5z[a4]
	}, this.a6l = function(player) {
		return a5z[player]
	}, this.w = function() {
		eW.et() % 10 == 9 && (a6J = eq.a7C() && !eq.a6j()), !eq.a6j() && 4 <= ++a5u && function() {
			var a4, aN, bw;
			for (a5u = 0, bw = 4; 1 <= bw; bw--)
				for (aN = ed.ee - 1; 0 <= aN; aN--) a4 = ed.eg[aN] + bw * eq.fE, 0 < a6E[a4] && a6E[a4] < 255 && a6E[a4]--;
			if (2 !== eq.ku)
				for (aN = ed.ee - 1; 0 <= aN; aN--) a4 = ed.eg[aN], 0 < a6E[a4] && a6E[a4] < 255 && a6E[a4]--
		}();
		var a4, aN, a5 = Math.floor(.1 * ed.ee);
		for (a5 = (a5 = a5 < 8 ? 8 : a5) > ed.ee ? ed.ee : a5, a4 = a5t + a5 - 1; a5t <= a4; a4--) aN = a4 % ed.ee, ! function(a4) {
			var t4 = a6c(a4) * a5z[a4];
			0 < a5x[a4] && a7I(a4, a5v[a4], a5w[a4], a5x[a4], a5y[a4]) ? ! function(a4) {
				for (var dF, dE, cv, cw, rJ = !1, bw = 0; bw < 8; bw++) {
					if (cv = a5x[a4] + 2, cw = a5y[a4] + 2, cv > ei.mm[a4] - ei.ml[a4] + 1 || cw > ei.mo[a4] - ei.mn[a4] + 1) return rJ;
					if (dF = a5v[a4] - 1, dE = a5w[a4] - 1, !a7I(a4, dF, dE, cv, cw)) return rJ;
					a5v[a4] = dF, a5w[a4] = dE, a5x[a4] = cv, a5y[a4] = cw, rJ = !0
				}
				return rJ
			}(a4) && function(a4, t4) {
				for (var dF, dE, cv, cw, rJ = !1, a7P = a5x[a4], d3 = 1 + Math.floor(.02 * a7P), bw = 1; bw < 5; bw++) {
					if ((cv = a7P + bw * d3) > ei.mm[a4] - ei.ml[a4] + 1) return rJ;
					if ((cw = a7O(t4, cv)) > ei.mo[a4] - ei.mn[a4] + 1) return rJ;
					dF = ei.ml[a4] + Math.floor(Math.random() * (ei.mm[a4] - ei.ml[a4] + 2 - cv)), dE = ei.mn[a4] + Math.floor(Math.random() * (ei.mo[a4] - ei.mn[a4] + 2 - cw)), a7I(a4, dF, dE, cv, cw) && (a5v[a4] = dF, a5w[a4] = dE, a5x[
						a4] = cv, a5y[a4] = cw, rJ = !0)
				}
				return rJ
			}(a4, t4) && a7L(a4) : ! function(a4, t4) {
				var cw, dF = a5v[a4] + 1,
					dE = a5w[a4] + 1,
					cv = a5x[a4] - 2;
				for (;;) {
					if (cv < 1) {
						a5x[a4] = 0;
						break
					}
					if (cw = a7O(t4, cv), a7I(a4, dF, dE, cv, cw)) return a5v[a4] = dF, a5w[a4] = dE, a5x[a4] = cv, a5y[a4] = cw, 1;
					dF++, dE++, cv -= 2
				}
				return
			}(a4, t4) ? function(a4, t4) {
				var dF, dE, cv, cw, bw, mx, tD = ei.mm[a4] - ei.ml[a4] + 1,
					a7Q = Math.floor(.02 * tD);
				for (mx = -6 * (a7Q = a7Q < 1 ? 1 : a7Q), bw = tD; mx <= bw; bw -= a7Q)
					if (cw = a7O(t4, cv = 0 < bw ? bw : 1), dF = ei.ml[a4] + Math.floor(Math.random() * (ei.mm[a4] - ei.ml[a4] + 2 - cv)), dE = ei.mn[a4] + Math.floor(Math.random() * (ei.mo[a4] - ei.mn[a4] + 2 - cw)), a7I(a4, dF, dE, cv,
							cw)) return a5v[a4] = dF, a5w[a4] = dE, a5x[a4] = cv, a5y[a4] = cw
			}(a4, t4) : a7L(a4)
		}(ed.eg[aN]);
		a5t = (a5t += a5) % ed.ee
	}, this.qi = function() {
		var a4, ec, wt, wu;
		if (eW.et() % 4 == 1)
			for (a4 = ed.ee - 1; 0 <= a4; a4--) ec = ed.eg[a4], gR.lY[ec] < 2 || ((wt = Math.max(a6N[ec] - 1, 0)) === (wu = Math.max(a6O[ec] - 1, 0)) ? 0 === wt && (gR.lY[ec] %= 2) : 0 === wu && gR.lY[ec] < 6 && (gR.lY[ec] += 4), a6N[ec] = wt,
				a6O[ec] = wu)
	}, this.a7F = function(player) {
		var a4 = player + 2 * eq.fE,
			jl = a6E[a4];
		return 0 < jl && (gG.a7G(50, player), a6E[a4] = 0, 255 === jl)
	}, this.a7H = function(player) {
		return 255 === a6E[player + 2 * eq.fE]
	}
}

function a7T() {
	(qM = void 0 === qM ? document.createElement("canvas") : qM).width = cC.mO, qM.height = cC.mP, q5 = qM.getContext("2d", {
		alpha: !0
	}), q6 = q8 = null, q6 = q5.getImageData(0, 0, cC.mO, cC.mP), q8 = q6.data, aZ.cb.a7U(q8)
}

function a7V() {
	var a7Y, a7Z, a57 = document.createElement("div"),
		a7W = document.createElement("div"),
		a7X = document.createElement("div"),
		a59 = document.createElement("div"),
		bU = [],
		xL = [L(198), L(199), L(200), L(201), L(202), L(203), L(204)],
		a7a = [1, 2, 3, 0, 9, 10, 11];

	function a7b(a4) {
		aT.bl(8, 0, new jw(21, {
			jx: a7a[a4],
			jy: 0,
			jz: 10
		}))
	}
	this.show = function() {
			this.br(aT.bW.xz), document.body.appendChild(a57)
		}, this.aY = function() {
			aT.removeChild(document.body, a57)
		}, this.br = function(xz) {
			for (var a7i = [3, 0, 1, 2, 4, 5, 6], a4 = 0; a4 < bU.length; a4++) {
				var cv = xz[a4];
				a7Y[a7i[a4]][1].r.textContent = cv || ""
			}
		}, this.resize = function() {
			var a4, rh = ac.gap,
				cw = aZ.aa.a7j(.085),
				cv = Math.min(4 * cw, eR.cv - 2 * rh),
				a5 = bU.length;
			for (aZ.aa.a7k(a57, rh, eR.cw - rh - cw, cv, cw), aZ.aa.ot(a57), aZ.aa.ot(a7W, 6), a4 = 0; a4 < a5 - 1; a4++) aZ.aa.ot(bU[a4].button, 6);
			for (a4 = 0; a4 < a5; a4++) a7Y[a4][0].resize(), a7Y[a4][1].resize();
			for (bU[0].dF = 0, bU[0].button.style.left = aZ.aa.ab(bU[0].dF), bU[0].button.style.width = aZ.aa.a7l(1.7 * cw), a4 = 1; a4 < a5; a4++) bU[a4].dF = bU[a4 - 1].dF + bU[a4 - 1].button.offsetWidth, bU[a4].button.style.left = aZ.aa.ab(bU[a4]
				.dF);
			if (!a7Z) {
				if (!gQ.a7m()) return;
				(a7Z = gQ.get(14)).style.width = "24%", a7Z.style.position = "absolute", a7W.appendChild(a7Z)
			}
			a7Z.style.left = aZ.aa.ab(0), a7Z.style.top = "7%", a7X.a5K && (a7X.scrollLeft = a7X.a5K)
		}, a57.style.position = "absolute", a7W.style.width = "25%", a7W.style.height = "100%", a7W.style.backgroundColor = t.da, a7X.style.position = "absolute", a7X.style.width = "75%", a7X.style.height = "100%", a7X.style.backgroundColor = t.da,
		a7X.style.top = a7X.style.right = aZ.aa.ab(0), aZ.aa.a5C(a7X), a59.style.height = a59.style.maxHeight = "100%", bU.push(new aS("", function() {
			a7b(0)
		}, t.a7c)), bU.push(new aS("", function() {
			a7b(1)
		}, t.a7d)), bU.push(new aS("", function() {
			a7b(2)
		}, t.a7e)), bU.push(new aS("", function() {
			a7b(3)
		}, t.a7f)), bU.push(new aS("", function() {
			a7b(4)
		}, t.a7g)), bU.push(new aS("", function() {
			a7b(5)
		}, t.a7h)), bU.push(new aS("", function() {
			a7b(6)
		}, t.a7g)), a7Y = new Array(bU.length);
	for (var a4 = 0; a4 < bU.length; a4++) bU[a4].button.style.position = "absolute", a7Y[a4] = [new l(xL[a4], bU[a4].button, .25, .45), new l("", bU[a4].button, .53, .84, 1)], bU[a4].button.style.height = bU[a4].button.style.maxHeight = "100%", bU[
		a4].button.top = aZ.aa.ab(0), a59.appendChild(bU[a4].button);
	a7X.appendChild(a59), a57.appendChild(a7W), a57.appendChild(a7X)
}

function i6() {
	var a7o;

	function a7p(player) {
		var t6, a7r;
		return aZ.d.el(player) && player < eq.er ? 0 : (t6 = a7o[cf.cg((eq.fE - 1) * ei.jd[player], eq.rA)], eW.et() < 1920 && (t6 = Math.max(cf.cg(100 * (13440 - 6 * eW.et()), 1920), t6)), a7r = gT.rN(player), ei.rM[player] > a7r && (t6 -= cf.cg(2 *
			t6 * (ei.rM[player] - a7r), a7r)), Math.min(Math.max(t6, 0), 700))
	}

	function a88(d3) {
		for (var jd = ei.jd, eg = ed.eg, a4 = ed.ee - 1; 0 <= a4; a4--) {
			var ec = eg[a4];
			aZ.d.sq(ec, cf.cg(d3 * jd[ec], 32))
		}
	}

	function a85() {
		var xY = eq.jj;
		h2.a8C[0] = ei.rM[xY] - ei.a2r[xY]
	}

	function a87(aB) {
		var xY = eq.jj,
			xY = ei.rM[xY] - ei.a2r[xY] - h2.a8C[0];
		gT.a7n += xY, hE.jk[aB] += xY
	}
	this.a7n = 0, this.jI = function() {
		for (var a5 = eq.fE, a4 = (a7o = new Uint16Array(a5), 0); a4 < a5; a4++) a7o[a4] = 100 + pK(cf.cg(25600 * a4, a5 - 4), 9)
	}, this.ck = function() {
		(this.a7n = 0) === eq.data.iIncomeType ? this.re = a7p : 1 === eq.data.iIncomeType ? this.re = function(player) {
			return cf.cg(eq.data.iIncomeValue * a7p(player), 64)
		} : this.re = function(player) {
			return cf.cg(eq.data.iIncomeData[player] * a7p(player), 64)
		}
	}, this.w = function() {
		if (eW.et() % 10 == 9 && (gT.a7n = 0, function() {
				a85();
				for (var eg = ed.eg, rM = ei.rM, a4 = ed.ee - 1; 0 <= a4; a4--) {
					var ec = eg[a4],
						a86 = cf.cg(gT.re(ec) * rM[ec], 1e4);
					aZ.d.sq(ec, Math.max(a86, 1))
				}
				a87(9)
			}(), function() {
				if (0 !== eq.data.aIncomeType) {
					if (a85(), 1 === eq.data.aIncomeType)
						for (var jd = ei.jd, eg = ed.eg, d3 = eq.data.aIncomeValue, a4 = ed.ee - 1; 0 <= a4; a4--) {
							var ec = eg[a4];
							aZ.d.sq(ec, cf.cg(d3 * jd[ec], 128))
						} else 2 === eq.data.aIncomeType && function() {
							for (var jd = ei.jd, eg = ed.eg, d3 = eq.data.aIncomeData, a4 = ed.ee - 1; 0 <= a4; a4--) {
								var ec = eg[a4];
								aZ.d.sq(ec, cf.cg(d3[ec] * jd[ec], 128))
							}
						}();
					a87(18)
				}
			}(), eW.et() % 100 == 99)) {
			if (a85(), 0 === eq.data.tIncomeType) a88(32);
			else if (1 === eq.data.tIncomeType) a88(eq.data.tIncomeValue);
			else
				for (var jd = ei.jd, eg = ed.eg, d3 = eq.data.tIncomeData, a4 = ed.ee - 1; 0 <= a4; a4--) {
					var ec = eg[a4];
					aZ.d.sq(ec, cf.cg(d3[ec] * jd[ec], 32))
				}
			a87(8)
		}
	}, this.rN = function(player) {
		return Math.min(100 * ei.jd[player], eq.a7s)
	}, this.a7t = function(player, a7u) {
		aj.a7v(player, a7u, h2.a7w[0], 0), aZ.d.sq(a7u, h2.a7w[0]), hE.a7x(player, a7u), gU.a6V(player, h2.a7w[0] + h2.a7w[1]), gU.a6X(a7u, h2.a7w[0]), aZ.d.o8(player)
	}, this.a7y = function() {
		for (var a5 = ed.ee, ef = ed.eg, rQ = 0, a7z = ei.rM, a4 = 0; a4 < a5; a4++) rQ += a7z[ef[a4]];
		return rQ
	}, this.a80 = function(a81) {
		for (var ec, a5 = ed.ee, ef = ed.eg, rQ = 0, a7z = ei.rM, sG = hG.sG, a4 = 0; a4 < a5; a4++) sG[ec = ef[a4]] === a81 && (rQ += a7z[ec]);
		return rQ
	}
}

function a8H() {
	a0h = 0, a8D = 2048, a11 = new Uint32Array(4 * a8D), a8E = 0, a8F = new Uint32Array(a8D), a8G = new Uint8Array(cC.mO * cC.mP)
}

function jc(player) {
	a0d = player, a0b = !1, a8I(), a8J();
	for (var a4 = gS.oh(a0d) - 1; 0 <= a4; a4--) a0e = a4, a8K();
	a0b && a8L()
}

function a8L() {
	hQ.a8M(), hQ.a8N()
}

function a8K() {
	a0Q = gS.a8O(a0d, a0e), a0f = gS.a8P(a0d, a0e), a0w = gS.a8Q(a0d, a0e), a8R(), (0 !== a0h && (a8S(), a8T()) ? a0N : a0S)()
}

function a8T() {
	if (!((a0u = cf.cg(a0f, a0h)) > eq.a0n)) {
		if (!a0w) return !1;
		var a8U = a0h * (1 + eq.a0n);
		a0f += aZ.d.a0x(a0d, a8U - a0f), a0u = cf.cg(a0f, a0h)
	}
	return !0
}

function a8S() {
	for (var a4 = a0h - 1; 0 <= a4; a4--) a8G[cf.cg(a11[a4], 4)] = 0
}

function a0S() {
	1 === gS.oh(a0d) && g8.jm(a0d);
	var jl = aZ.d.sq(a0d, a0f);
	hE.sp(a0d, a0f - jl, 12), gS.a8V(a0d, a0e)
}

function a8I() {
	for (var player = a0d, rb = ei.rb, a5 = Math.min(rb[player].length, a8D), aI = 0, a8W = a8F, a4 = a5 - 1; 0 <= a4; a4--) a8W[aI++] = rb[player][a4];
	a8E = aI
}

function a8J() {
	for (var a4 = ei.rb[a0d].length - 1; 0 <= a4; a4--) gR.pZ(ei.rb[a0d][a4]) && gR.a12(ei.rb[a0d][a4], a0d);
	ei.rb[a0d] = []
}

function a8R() {
	a0h = 0, (a0Q === eq.fE ? a8X : a8Y)()
}

function a8Y() {
	for (var ec, lE, a4, v1 = gR.v1, dh = 3; 0 <= dh; dh--)
		for (a4 = a8E - 1; 0 <= a4; a4--) ec = a8F[a4] + v1[dh], lE = cf.cg(ec, 4), 0 === a8G[lE] && gR.sn(ec) && gR.sZ(ec) === a0Q && (a8G[lE] = 1, a11[a0h++] = ec)
}

function a8X() {
	for (var ec, lE, a4, v1 = gR.v1, dh = 3; 0 <= dh; dh--)
		for (a4 = a8E - 1; 0 <= a4; a4--) ec = a8F[a4] + v1[dh], lE = cf.cg(ec, 4), 0 === a8G[lE] && gR.sI(ec) && (a8G[lE] = 1, a11[a0h++] = ec)
}

function it() {
	this.a8Z = 0, this.a8a = 0, this.a8b = 0, this.a8c = 0, this.a8d = 0, this.a8e = 0, this.q3 = [0, 0, 0, 0], this.mw = function() {
		this.a8Z = gK.qJ(), this.a8a = gK.qK(), this.a8b = -this.a8Z, this.a8c = -this.a8a, this.a8d = eR.cv / mJ, this.a8e = eR.cw / mJ, this.q3[0] = Math.floor(this.a8b), this.q3[1] = Math.floor(this.a8c), this.q3[2] = Math.floor(this.q3[0] +
			this.a8d + 1), this.q3[3] = Math.floor(this.q3[1] + this.a8e + 1), hD.pz = !0
	}
}

function a8f() {
	this.a8g = null, this.a8h = null, this.a8i = null, this.a8j = null, this.a8k = null, this.a8l = null, this.a8m = "";
	var a8n = 0;
	this.ck = function() {
		this.a8g = [], this.a8h = [], this.a8i = [], this.a8j = [], this.a8k = [0], this.a8l = [0], a8n = 0, this.a8m = ""
	}, this.a8o = function(id, tz, u1, a4B) {
		eq.lQ || 2 === eq.ku || (0 === this.a8k[a8n] && (this.a8l[a8n] ? (this.a8k.push(1), this.a8l.push(0), a8n++) : this.a8k[a8n] = 1), this.a8g.push(id), this.a8h.push(tz), this.a8i.push(void 0 === u1 ? 0 : u1), this.a8j.push(void 0 === a4B ?
			0 : a4B), this.a8l[a8n]++)
	}, this.w = function() {
		0 === this.a8k[a8n] ? this.a8l[a8n]++ : (this.a8k.push(0), this.a8l.push(0), a8n++)
	}
}

function a8p() {
	this.oP = function(ax) {
		for (var a5 = ax.length, cv = gt, a4 = 0; a4 < a5; a4++) cv.oG(16, ax.charCodeAt(a4))
	}
}

function hc() {
	var a07 = new Uint8Array(eq.fE),
		a8q = new Uint16Array(eq.fE),
		a8r = new Uint16Array(eq.fE),
		a8s = new Uint8Array(eq.fE),
		a8t = (this.np = new Uint8Array(eq.fE), new Uint16Array(eq.fE)),
		a8u = new Uint16Array(eq.fE);

	function a95(a4) {
		a07[a4] = 1 + cf.cg(a8t[a4] * gi.random(), 10 * gi.value(100))
	}
	this.a8v = null, this.a8w = [97, 94, 70, 40, 20, 0, 100], this.nr = [500, 450, 400, 300, 80, 50, 100], this.a8x = [0, 0, 5, 25, 50, 100, 0], this.a8y = [60, 74, 112, 200, 256, 512, 512], this.no = [1, 2, 3, 4, 6, 8, 1], this.a8z = [500, 450, 400,
		300, 80, 50, 100
	], this.a90 = [100, 150, 250, 400, 600, 1e3, 100], this.jB = function() {
		this.a8v = [L(205), L(206), L(188), L(207), L(208), L(209), "H Bot"]
	}, this.ck = function() {
		a07.fill(0), a8q.fill(0), a8r.fill(0), a8s.fill(0), this.np.fill(0), a8t.fill(0), a8u.fill(0);
		var a91 = eq.er;
		if (9 === eq.l1) this.a92();
		else if (eq.l6)
			if (3 === eq.data.botDifficultyType)
				for (a4 = eq.r9 - 1; 0 <= a4; a4--) {
					var aA = a4 + a91;
					this.np[aA] = eq.data.botDifficultyData[aA]
				} else if (2 === eq.data.botDifficultyType)
					for (a4 = eq.r9 - 1; 0 <= a4; a4--) this.np[aA = a4 + a91] = eq.data.botDifficultyTeam[hG.qZ[hG.sG[aA]]];
				else if (1 === eq.data.botDifficultyType) {
			var a94 = this.a8v.length;
			for (a4 = eq.r9 - 1; 0 <= a4; a4--) this.np[a4 + a91] = a4 % a94
		} else
			for (a94 = eq.data.botDifficultyValue, a4 = eq.r9 - 1; 0 <= a4; a4--) this.np[a4 + a91] = a94;
		else
			for (var a93 = 8 === eq.l1 ? 1 : 0, a4 = eq.r9 - 1; 0 <= a4; a4--) this.np[a4 + a91] = a93;
		for (a4 = 0; a4 < a91; a4++) this.np[a4] = 6;
		var a5 = eq.fE;
		for (a4 = 0; a4 < a5; a4++) this.np[a4] <= 2 ? (a8s[a4] = 5, a8t[a4] = a8u[a4] = 1040, 0 === this.np[a4] ? (a8q[a4] = 980, a8r[a4] = 980) : 1 === this.np[a4] ? (a8q[a4] = 980, a8r[a4] = 920, a8t[a4] = a8u[a4] = 1100) : (a8q[a4] = 825,
				a8r[a4] = 750)) : this.np[a4] <= 4 ? (a8s[a4] = 1 + gi.o1(20), 3 === this.np[a4] ? (a8q[a4] = a8r[a4] = 500, a8t[a4] = a8u[a4] = 1e3) : (a8u[a4] = 250 + gi.o1(1501), a8t[a4] = 500 + gi.o1(501), a8q[a4] = 300 + gi.o1(201), a8r[
				a4] = 100 + gi.o1(201))) : this.np[a4] <= 5 ? (a8t[a4] = 1e3, a8u[a4] = 1e3, a8s[a4] = 35 + gi.o1(16), a8q[a4] = 300 + gi.o1(201), a8r[a4] = 50 + gi.o1(101)) : (a8t[a4] = a8u[a4] = 800, a8s[a4] = 5, a8q[a4] = 10, a8r[a4] = 250),
			a95(a4)
	}, this.a92 = function() {
		for (var rJ = gj.a96, a91 = eq.er, a4 = rJ - 1; 0 <= a4; a4--) this.np[a4 + a91] = 0;
		for (var bw = 0; bw < 6; bw++) {
			for (a4 = rJ + gj.xH[bw] - 1; rJ <= a4; a4--) this.np[a4 + a91] = bw;
			rJ += gj.xH[bw]
		}
	}, this.a97 = function(ec, value) {
		a07[ec] = Math.min(value, a07[ec])
	}, this.w = function(ec) {
		0 == --a07[ec] && ! function(ec) {
			(function(ec) {
				a8t[ec] !== a8u[ec] && (a8t[ec] += a8t[ec] < a8u[ec] ? 3 : -3);
				a8q[ec] !== a8r[ec] && (a8q[ec] += a8q[ec] < a8r[ec] ? a8s[ec] : -a8s[ec], a8q[ec] = (Math.abs(a8q[ec] - a8r[ec]) <= a8s[ec] ? a8r : a8q)[ec]);
				a07[ec] = cf.cg(a8t[ec], 10)
			})(ec), ga.a9A.a9B(ec, cf.cg(a8q[ec] * ei.rM[ec], 1e3))
		}(ec)
	}, this.a9C = function(ec, aI) {
		a8t[ec] = a8u[ec] = aI
	}
}

function hl() {
	var ai, cw, a9D, a9E, a9F, a9G, a9H, a9I, a9J;

	function qK() {
		return gJ.lg(gG.a9X()) ? gh.lJ ? __fx.settings.keybindButtons ? gJ.dE - 2 * gJ.cw - 3 * a9D : gJ.dE - gJ.cw - 2 * a9D : __fx.settings.keybindButtons ? gJ.dE - gJ.cw - 2 * a9D : gJ.dE - a9D : gs.lg(gG.a9Z()) ? gh.lJ ? gs.qK() - gJ.cw - 2 *
			a9D : gs.qK() - a9D : gh.lJ ? eR.cw - gJ.cw - (hJ.lW() + 1) * a9D : eR.cw - hJ.lW() * ac.gap
	}

	function a9O(jl, ax, id, ec, a9R, a9S, a4V, a9T, a9U, sH, a9d) {
		var a4, lI, a46, ka, a9e = void 0 !== a9U,
			cv = Math.floor(gI.measureText(ax, gG.lM) + 1.5 * a9E + (a9e ? cw : 1.5 * a9E));
		if (eW.eX = !0, a9d || aj.an(ax, a9U), cv + 2 * a9D + gJ.cw > eR.cv && !a9e && 50 !== id && 20 < ax.length) a9O(jl, (a9d = aZ.bu.a9f(ax))[0], id, ec, a9R, a9S, a4V, a9T, a9U, sH, !0), a9O(jl, a9d[1], id, ec, a9R, a9S, a4V, a9T, a9U, sH, !0);
		else if (a9d = cv + (50 === id ? a9F : 0), (a46 = document.createElement("canvas")).width = cv, a46.height = cw, (lI = a46.getContext("2d", {
				alpha: !0
			})).font = gG.lM, aZ.aa.textBaseline(lI, 1), aZ.aa.textAlign(lI, 0), lI.clearRect(0, 0, cv, cw), lI.fillStyle = a9S, lI.fillRect(0, 0, cv, cw), lI.fillStyle = a9R, lI.fillText(ax, Math.floor(1.5 * a9E), Math.floor(cw / 2)), a9e && (lI
				.imageSmoothingEnabled = !0, b0.b4.a0H(a9U, lI, cv - cw, 0, cw)), 0 === (ka = {
				av: jl,
				ax: ax,
				id: id,
				player: ec,
				canvas: a46,
				a9R: a9R,
				a9S: a9S,
				cv: cv,
				a9Y: a9d,
				a4V: a4V,
				a9T: a9T,
				a9U: a9U,
				sH: sH
			}).av || 0 < ai.length && 0 < ai[0].av) ai.unshift(ka);
		else {
			for (a4 = 1; a4 < ai.length; a4++)
				if (0 < ai[a4].av) return void ai.splice(a4, 0, ka);
			ai.push(ka)
		}
	}

	function a9P(t6, rh, bw) {
		return "rgb(" + t6 + "," + rh + "," + bw + ")"
	}

	function a9h(id, aI) {
		for (var a5 = ai.length, a4 = 0; a4 < a5; a4++) ai[a4].id === id && aI-- <= 0 && (ai.splice(a4, 1), a4--, a5--)
	}

	function a9i(id, player) {
		for (var sW = !1, a4 = ai.length - 1; 0 <= a4; a4--) ai[a4].id !== id || player !== eq.fE && ai[a4].player !== player || (ai.splice(a4, 1), sW = !0);
		return sW
	}

	function aA8(ax) {
		a9O(340, ax, 6, 0, a9P(215, 245, 255), t.qO, -1, !1)
	}
	this.a9K = "", this.ck = function() {
		var self;
		a9I = 0, a9H = d0.jF.lR() ? 7 : 12, a9G = {
			ef: [0, 0, 0],
			a9L: [0, 0, 0],
			mH: [220, 180, 180],
			a5J: [0, 0, 0],
			af: [0, 0, 0]
		}, ai = [], this.resize(), eq.l3 && this.kq(0, 18), cC.cF.cG[cC.cE].name.length && aA8(L(251, [cC.cF.cG[cC.cE].name])), aA8(L(252, [cC.mO - 2 + "x" + (cC.mP - 2)])), aA8(L(253, [aZ.bu.jW(gb.aA9)])), gb.aA9 !== gb.aAA && aA8(L(254, [aZ
			.bu.jW(gb.aAA) + " (" + aZ.bu.le(100 * gb.aAA / gb.aA9, 1) + ")"
		])), 0 < gb.aAB && aA8(L(231, [aZ.bu.jW(gb.aAB) + " (" + aZ.bu.le(100 * gb.aAB / gb.aA9, 1) + ")"])), 0 < gb.tl && aA8(L(255, [aZ.bu.jW(gb.tl) + " (" + aZ.bu.le(100 * gb.tl / gb.aA9, 1) + ")"])), 10 === eq.l1 && a9O(120, L(256), 6, 0,
			a9P(235, 255, 120), t.qO, -1, !1), 0 !== (self = this).a9K.length && (a9O(200, self.a9K, 0, 0, t.u, t.qO, -1, !1), self.a9K = ""), eq.pD && a9O(340, L(210), 6, 0, a9P(255, 200, 0), t.qO, -1, !1)
	}, this.resize = function() {
		var a9Q, a4;
		if (cw = (cw = Math.floor((d0.jF.lR() ? .031 : .0249) * eR.lS)) < 10 ? 10 : cw, this.fontSize = Math.floor(2 * cw / 3), this.lM = aZ.aa.lT(1, this.fontSize), a9D = ac.gap, a9E = Math.floor(cw / 5), 0 < ai.length)
			for (a9Q = ai, ai = [], a4 = a9Q.length - 1; 0 <= a4; a4--) a9O(a9Q[a4].av, a9Q[a4].ax, a9Q[a4].id, a9Q[a4].player, a9Q[a4].a9R, a9Q[a4].a9S, a9Q[a4].a4V, a9Q[a4].a9T, a9Q[a4].a9U, a9Q[a4].sH, !0);
		this.a9V()
	}, this.a9V = function() {
		a9J = document.createElement("canvas");
		var ax = L(211),
			lI = (a9F = gI.measureText(ax, this.lM) + 5 * a9E, a9J.height = cw, a9J.width = a9F, a9J.getContext("2d", {
				alpha: !0
			}));
		lI.font = this.lM, aZ.aa.textBaseline(lI, 1), aZ.aa.textAlign(lI, 1), lI.clearRect(0, 0, a9F, cw), lI.fillStyle = t.a9W, lI.fillRect(0, 0, a9F, cw), lI.fillStyle = t.u, lI.fillText(ax, Math.floor(a9F / 2), Math.floor(cw / 2))
	}, this.a9X = function() {
		var a5;
		return gh.lJ ? gh.cv : 0 === (a5 = ai.length) ? 0 : 1 === a5 ? ai[0].a9Y : pG(ai[0].a9Y, ai[1].a9Y)
	}, this.a9Z = function() {
		var a5 = ai.length;
		return gh.lJ ? a5 ? pG(gh.cv, ai[0].a9Y) : gh.cv : 0 === a5 ? 0 : 1 === a5 ? ai[0].a9Y : 2 === a5 ? pG(ai[0].a9Y, ai[1].a9Y) : pG(pG(ai[0].a9Y, ai[1].a9Y), ai[2].a9Y)
	}, this.lp = function(dF, dE) {
		for (var mY, a9a, a9b = qK(), a4 = ai.length - 1; 0 <= a4; a4--)
			if ((a9a = a9b - (a4 + 1) * cw) <= dE && dE < a9a + cw) return 50 === ai[a4].id ? dF >= eR.cv - a9F - a9D - ai[a4].cv && (dF >= eR.cv - a9F - a9D ? gq.d.a9c(ai[a4].player) : gA.mQ(ai[a4].player, 800, !1, 0), !0) : dF >= eR.cv - ai[a4]
				.cv - a9D && (736 === ai[a4].id ? window.open("https://" + ai[a4].ax, "_blank") : ai[a4].a9T && (ai[a4].sH && ai[a4].sH.aN ? (a9a = ai[a4].sH.mV, mY = h0.mZ(a9a) - 10, a9a = h0.mb(a9a) - 10, gA.mN(mY, a9a, 19 + mY, 19 +
					a9a)) : ai[a4].sH && ai[a4].sH.bw ? gA.mR(ai[a4].player, ai[a4].sH.mS) : (gA.mQ(ai[a4].player, 800, !1, 0), 0 <= ai[a4].a4V && (mY = ai[a4].a4V, ai[a4].a4V = ai[a4].player, ai[a4].player = mY))), !0);
		return !1
	}, this.an = function(jl, ax, id, ec, a9R, a9S, a4V, a9T, a9U, sH) {
		a9O(jl, ax, id, ec, a9R, a9S, a4V, a9T, a9U, sH)
	}, this.wT = function(kG) {
		a9O(300, kG, 252, 0, t.u, t.qO, -1, !1)
	}, this.a9g = function(id) {
		for (var a4 = ai.length - 1; 0 <= a4; a4--) ai[a4].id === id && (ai[a4].av = 1)
	}, this.kq = function(player, id) {
		0 === id ? (gI.qF(player, 0), a9h(423, 2), a9O(160, L(212, [ei.sA[player]]), 423, player, "rgb(10,220,10)", t.qO, -1, !1)) : 1 === id ? (a9i(50, eq.fE), gI.qF(player, 1), a9O(360, L(213, [ei.sA[player]]), 0, player, t.a9j, t.qO, -1, !0),
			gA.mQ(player, 2700, !1, 0)) : 2 === id ? (gI.qF(player, 2), a9O(0, L(214), 0, player, "rgb(10,255,255)", t.qO, -1, !0), gA.mQ(player, 2700, !1, 0)) : 3 === id ? (gI.qF(player, 2), a9O(0, L(215, [ei.sA[player]]), 0, player, t.u, t
			.qO, -1, !0), gA.mQ(player, 2700, !1, 0)) : 4 === id ? this.a35(1, player, player) : 5 === id ? aZ.d.el(eq.jj) || (function(id, jh) {
			var a4, a9x = 0,
				a5 = ai.length;
			for (a4 = 0; a4 < a5; a4++)
				if (ai[a4].id === id && jh <= ++a9x) return ai.splice(a4, 1)
		}(1, 5), gU.a7F(player) && a9O(180, L(216, [ei.sA[player]]), 1, player, a9P(255, 200, 180), t.qO, -1, !0), aZ.d.sV(player, 10) && (a9h(573, 0), a9O(180, L(217, [ei.sA[player]]), 573, player, t.a9j, t.qO, -1, !0))) : 18 === id ? a9O(
			255, L(218), 18, 0, t.u, t.qO, -1, !1) : 21 === id ? a9O(220, L(219), id, 0, t.u, t.qO, -1, !1) : 22 === id ? this.a35(2, player, player) : 59 === id && a9O(0, L(220), id, 0, t.a9l, t.qO, 0, !1)
	}, this.a9m = function(kG) {
		a9O(200, L(221, [kG]), 94, 0, t.u, t.a9n, -1, !1)
	}, this.a9o = function(a9p) {
		if (eq.jj === a9p && !eq.l6 && !eq.lQ)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a9O(0, "Your Win Count is now " + __fx.wins.count, 3, a9p, t.u, t.qO, -1, !0);
		ei.jd[a9p] && (gI.qF(a9p, 2), eq.er < 100 ? a9O(0, L(215, [ei.sA[a9p]]), 3, a9p, t.u, t.qO, -1, !0) : a9O(0, L(222, [ei.sA[a9p]]), 3, a9p, t.u, t.qO, -1, !0))
	}, this.a9q = function(rJ) {
		var ax, a9s, a9r = "(" + h0.mZ(rJ >> 2) + ", " + h0.mb(rJ >> 2) + ")",
			a9T = !1,
			player = 0;
		gR.pZ(rJ) ? gR.sI(rJ) ? a9r = L(223, [a9r]) : (player = gR.sZ(rJ), eq.lQ && !1 === __fx.hoveringTooltip.active && (eq.jj = player), ax = L(224, [aZ.lI.rG(ei.ud[player], aZ.aa.lT(0, 10), 150)]) + "   ", ax = (ax += L(225, [aZ.bu.jW(ei.rM[
				player])]) + "   ") + L(226, [aZ.bu.jW(ei.jd[player])]) + "   ", eq.p6 && (a9s = hG.wh[hG.qZ[hG.sG[player]]], ax += L(2) + ": " + a9s + "   "), aZ.d.el(player) && (ax += L(227) + ": " + g7.a8v[g7.np[player]] + "   "), a9r =
			ax = (ax += L(228, [player]) + "   ") + L(229, [a9r]), a9T = !0) : a9r = gR.a9t(rJ) ? L(230, [a9r]) + "   #" + gR.yo(rJ) : L(231, [a9r]), eW.eX = !0, a9h(55, 0), a9O(220, a9r, 55, player, t.u, t.qO, -1, a9T, void 0, void 0, !0)
	}, this.a9u = function(a9v) {
		var rQ = h1.bW,
			player = rQ.sd[a9v] >> 3,
			ax = (eW.eX = !0, a9h(55, 0), L(232, [ei.sA[player]]) + "   ");
		a9O(220, ax += L(225, [aZ.bu.jW(rQ.se[a9v])]), 55, player, t.u, t.qO, -1, !0)
	}, this.a0E = function(yA, e9, ay) {
		yA === eq.jj ? a9O(175, " " + L(233, [ei.sA[e9]]) + ": ", 1001, e9, a9P(200, 255, 210), t.qO, -1, !0, ay) : this.a9w(yA, ay)
	}, this.a9w = function(yA, ay) {
		a9h(1e3, 0), a9O(175, ei.sA[yA] + ": ", 1e3, yA, t.u, "rgba(5,60,25,0.9)", -1, !0, ay)
	}, this.a9y = function() {
		var kG;
		eq.wU ? (kG = L(234), gI.a9z(L(235), 2, 1, 12), a9O(0, kG, 40, 0, "rgb(10,220,10)", t.qO, -1, !1)) : (kG = L(236), gI.a9z(L(237), 2, 0, 16), a9O(0, kG, 41, 0, t.u, t.qO, -1, !1))
	}, this.vj = function() {
		var aI = ei.sA,
			dh = eq.data;
		a9O(300, aI[0] + " [" + eq.aA0.vp(dh.elo[0]) + "] vs " + aI[1] + " [" + eq.aA0.vp(dh.elo[1]) + "]", 65, 0, t.wc, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aA1 = function(kG) {
		a9O(350, kG, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aA2 = function(aA3) {
		a9O(0, L(aA3 ? 238 : 239), 247, 0, t.dS, t.qO, -1, !1)
	}, this.vr = function(vo, vq, aA4) {
		var dh = eq.data,
			aI = ei.sA;
		a9O(0, aI[0] + ": " + eq.aA0.vp(dh.elo[0]) + " -> " + vo, 66, 0, t.u, aA4[0], -1, !1), a9O(0, aI[1] + ": " + eq.aA0.vp(dh.elo[1]) + " -> " + vq, 66, 1, t.u, aA4[1], -1, !1)
	}, this.a3u = function(player, id) {
		0 === id ? a9i(50, player) ? (a9O(128, L(240, [ei.sA[player]]), 52, player, a9P(180, 255, 180), t.qO, -1, !0), gU.a3t(player, 2, 255)) : a9O(384, L(241, [ei.sA[player]]), 51, player, a9P(210, 210, 255), t.qO, -1, !0) : a9i(51, player) ? (
			a9O(128, L(242, [ei.sA[player]]), 52, player, t.u, "rgba(60,120,10,0.9)", -1, !0), gU.a3t(player, 2, 255)) : (a9O(384, L(243, [ei.sA[player]]), 50, player, t.u, "rgba(90,90,90,0.9)", -1, !0), gU.a3t(player, 2, 96))
	}, this.aA5 = function(ef, target) {
		var color = a9P(210, 255, 210);
		1 < ef.length ? a9O(230, L(244, [ef.length, ei.sA[target]]), 66, target, color, t.qO, -1, !0) : a9O(230, L(245, [ei.sA[ef[0]], ei.sA[target]]), 66, ef[0], color, t.qO, target, !0)
	}, this.a3v = function(player, target) {
		a9O(230, L(246, [ei.sA[player], ei.sA[target]]), 66, player, t.u, "rgba(75,65,5,0.9)", target, !0)
	}, this.s7 = function(id, aI) {
		a9h(id, aI)
	}, this.a7G = function(id, player) {
		a9i(id, void 0 === player ? eq.fE : player)
	}, this.s6 = function(id) {
		for (var a4 = ai.length - 1; 0 <= a4; a4--)
			if (ai[a4].id === id) return ai[a4];
		return null
	}, this.a7x = function(a6W, aA6, player) {
		2 !== ei.kw[eq.jj] && a9O(200, 1 === a6W ? L(247, [ei.sA[player]]) : L(248, [aZ.bu.jW(a6W), ei.sA[player]]), 30, player, "rgb(190,255,190)", t.qO, -1, !0)
	}, this.aA7 = function(a6W, player) {
		2 !== ei.kw[eq.jj] && (a9h(31, 0), a6W = " (" + aZ.bu.jW(a6W) + ") 💸", a9O(150, a6W = aZ.d.el(player) ? L(249) + a6W : L(250, [ei.sA[player]]) + a6W, 31, player, t.wc, "rgba(205,205,205,0.9)", -1, !0))
	}, this.aAC = function(hS) {
		for (var af = eW.et(), a4 = 2; 0 <= a4; a4--) 0 < a9G.a5J[a4] && (hS || a9G.af[a4] < af - 220) && this.aAD(a4)
	}, this.aAD = function(id) {
		var ax, a5 = a9G.a5J[id],
			player = a9G.ef[id];
		a9G.a5J[id] = 0, 1 === a5 ? (0 === id ? ax = L(257, [ei.sA[player], ei.sA[a9G.a9L[0]]]) : 1 === id ? ax = L(258, [ei.sA[player]]) : 2 === id ? ax = L(259, [ei.sA[player]]) : 3 === id && (ax = L(260, [ei.sA[player]])), a9h(7, 0), a9O(a9G
			.mH[id], ax, 7, a9G.a9L[id], t.u, t.qO, -1, !0)) : (ax = L(0 === id ? 261 : 1 === id ? 262 : 263, [a5]), a9h(7, 0), a9O(a9G.mH[id], ax, 7, player, t.u, t.qO, -1, !1))
	}, this.a35 = function(id, a4U, a4V) {
		var af = eW.et(),
			a5 = a9G.a5J[id] + 1;
		a9G.a5J[id]++, a9G.ef[id] = a4U, a9G.a9L[id] = a4V, 1 === a5 && (a9G.af[id] = af), (1 === a5 && (eq.kx < 32 || 2 === eq.ku) || 1 < a5 && (a9G.af[id] < af - 140 || 2 === eq.ku)) && this.aAD(id)
	}, this.w = function() {
		gl.w();
		for (var ru = (ru = ai.length - a9H) <= 1 ? 1 : ru * ru, a4 = ai.length - 1; 0 <= a4; a4--) 0 < ai[a4].av && (ai[a4].av -= ru, ai[a4].av <= 0) && (eW.eX = !0, ai.splice(a4, 1));
		! function() {
			var aI, a4;
			if (128 !== a9I && !(++a9I < 128))
				for (aI = 5, a4 = ed.ee - 1; 0 <= a4; a4--) 1 === ei.kw[ed.eg[a4]] && 0 < aI-- && a9O(240, L(260, [ei.sA[ed.eg[a4]]]), 1, ed.eg[a4], t.wc, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.aAC(!1)
	}, this.eZ = function() {
		for (var a73, dE = qK(), a4 = ai.length - 1; 0 <= a4; a4--) a73 = dE - (a4 + 1) * cw, 50 === ai[a4].id ? (m0.drawImage(ai[a4].canvas, eR.cv - ai[a4].cv - a9F - a9D, a73), m0.drawImage(a9J, eR.cv - a9F - a9D, a73)) : m0.drawImage(ai[a4]
			.canvas, eR.cv - ai[a4].cv - a9D, a73)
	}
}

function qv() {
	this.ck = function() {
		! function() {
			var data = bp.cy.data;
			0 === data[2].oX && (eR.cw > eR.cv || 0 !== d0.id) && (data[2].value = data[2].fx = 1);
			0 === data[100].oX && (data[100].value = data[100].fx = (0 === d0.id ? "Player " : 1 === d0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a4, a9, data = bp.cy.data,
			a5 = data.length;
		for (a4 = 0; a4 < a5; a4++) data[a4] && data[a4].oX === bp.ah.aAH(a4, !0) && (a9 = bp.ah.aAI(a4), data[a4].value = null === a9 ? data[a4].fx : 2 === data[a4].type ? a9 : Number(a9))
	}
}

function aAJ() {
	this.aAK = function() {
		gt.cD(39), gt.oG(1, 0), gt.oG(6, 16), bj.n9.aAL(), bj.bW.send(0, gt.dy)
	}, this.aAM = function(dj) {
		gt.cD(127), gt.oG(1, 0), gt.oG(6, 17), gw.kF.yi(bp.cy.data[105].value, 5), gw.kF.yi(bp.cy.data[106].value, 15), bj.bW.send(dj, gt.dy)
	}, this.aAO = function() {
		gt.cD(97), gt.oG(1, 0), gt.oG(6, 18), gw.kF.yi(bp.cy.data[110].value, 15), bj.bW.send(0, gt.dy)
	}, this.aAP = function(a1t) {
		var a5 = a1t.ax.length;
		gt.cD(21 + 16 * a5), gt.oG(1, 0), gt.oG(6, 29), gt.oG(6, a1t.aAQ), gt.oG(8, a5), gv.oO.oP(a1t.ax), bj.bW.send(0, gt.dy)
	}, this.g6 = function(aAR, colors, aAS, fq) {
		gu.ck(), gu.oG(1, 0), gu.oG(6, 16), gu.oG(20, Math.min(aAR, 1e6));
		for (var a4 = 0; a4 < 11; a4++)
			for (var aN = 0; aN < 3; aN++) gu.oG(8, colors[a4][aN]);
		aAR = gp.data.wL(aAS.trim());
		gu.oG(8, -1 === aAR ? 255 : aAR), gv.a4y.a1a(fq.trim().substring(0, 180), 8, gu), bj.bW.send(0, gu.a4z())
	}, this.aAT = function(data) {
		gt.cD(43), gt.oG(1, 0), gt.oG(6, 25), gt.oG(6, data.aAQ), gw.kF.yi(data.bs, 5), bj.bW.send(0, gt.dy)
	}, this.aAU = function(data) {
		gt.cD(75), gt.oG(1, 0), gt.oG(6, 27), gt.oG(6, data.aAQ), gw.kF.yi(data.bs, 5), gt.tA(32, data.value), bj.bW.send(0, gt.dy)
	}
}

function iF() {
	var aAV, aAW, aAX, aAY, yL = !1;

	function aAZ() {
		yL = !0, aAV = -1, aAW = new Array(4);
		for (var a4 = 3; 0 <= a4; a4--) aAW[a4] = !1;
		var a4M = Math.floor(1 + .02 * eR.min);
		aAX = new Array(4), (aAY = new Array(4))[1] = aAY[3] = aAX[0] = aAX[2] = 0, aAY[0] = aAX[3] = -a4M, aAX[1] = aAY[2] = a4M
	}

	function aAa() {
		if (-1 !== aAV)
			if (0 !== eq.ku && gA.mx()) {
				for (var aAb = !1, a4 = 3; 0 <= a4; a4--) aAW[a4] && (aAb = !0, mI += aAX[a4], mK += aAY[a4], gU.ly(aAX[a4], aAY[a4]), gK.aAc());
				aAb ? eW.eX = !0 : gd.mh()
			} else gd.mh()
	}
	this.a2b = function(aB) {
		0 !== eq.ku && gA.mx() && (yL || aAZ(), aAW[aB] = !0, -1 === aAV) && (aAV = setInterval(aAa, 20), aAa())
	}, this.a2f = function(aB) {
		if (0 !== eq.ku && (yL || aAZ(), aAW[aB] = !1, -1 !== aAV)) {
			for (var aAb = !1, a4 = 3; 0 <= a4; a4--) aAb = aAb || aAW[a4];
			aAb || this.mh()
		}
	}, this.mh = function() {
		if (yL && -1 !== aAV) {
			for (var a4 = 3; 0 <= a4; a4--) aAW[a4] = !1;
			clearInterval(aAV), aAV = -1
		}
	}
}

function iH() {
	var aAd, z;
	this.ck = function() {
		for (var a4 = (z = new Uint16Array(101)).length - 1; 0 <= a4; a4--) z[a4] = cf.cg(32768 * a4, 100);
		this.tr(0)
	}, this.value = function(ec) {
		return z[ec]
	}, this.yJ = function() {
		return cf.cg(aAd - 1, 2)
	}, this.tr = function(ts) {
		aAd = 2 * ts % 32768 + 1
	}, this.random = function() {
		return aAd = 167 * aAd % 32768
	}, this.o1 = function(jh) {
		return cf.cg(jh * this.random(), 32768)
	}, this.a32 = function(ec) {
		return 0 !== ec && this.random() < this.value(ec)
	}, this.zN = function(aN, bw) {
		return aN + this.o1(bw - aN)
	}
}

function eI() {
	this.w = function() {
		var aAi;
		2 === eq.p4 ? (gG.kq(0, 59), gA.mi(2700)) : eq.l1 < 7 ? (aAi = hG.qZ[eq.qa], aAi = hG.wh[aAi], gI.a9z(L(264, [aAi]), 2, 1, 12), gG.an(0, L(265, [aAi]), 40, 0, t.u, t.qO, -1, !1), gA.mi(2700)) : 8 === eq.l1 ? (eq.wU ? gG.kq(eq.wW, 2) : gG
			.kq(1 - eq.jj, 3), eq.aA0.vk(eq.wW), gA.mQ(eq.wW, 2700, !1, 0)) : 9 === eq.l1 ? (gG.a9y(), gA.mi(2700)) : (gG.a9o(eq.wW), gA.mQ(eq.wW, 2700, !1, 0))
	}, this.aAk = function() {
		var ax;
		eq.lQ || (ax = eq.l1 < 7 ? "territorial.io/log/team" : 8 === eq.l1 ? "territorial.io/log/1v1" : 9 === eq.l1 ? "territorial.io/log/zombies" : "territorial.io/log/br", gG.an(720, ax, 736, 0, t.u, t.a7f, -1, !1))
	}
}

function iR() {
	this.l8 = function(player) {
		g9.aAl(player), eq.ky++, ei.kw[player] = 2, ei.eh[player] = hI.p9.ek(), player === eq.jj && (gO.show(!1, !1), at.rH(), h5.eL.xW()), gU.a7F(player)
	}
}

function hx() {
	var aAm, aAn, aAo, aAp, aAq, aAr, aAs, aAt, aAu, aAv, aAw, aAx, aAy, aAz = 1;

	function aB0(aB1) {
		!aB1 && 1 === aAy && aAz ? (aAz = 0, bj.bW.close(aAy, 3280)) : aAy = (aAy + 1) % bj.bW.yE, aAx = eW.av, bj.bW.yN(aAy, 4) && bj.bn.a4t(aAy)
	}

	function aB3() {
		0 === aAy ? hK.yW(3249) : aB0()
	}

	function aB9(dE, aB8, cO) {
		var mY = Math.floor((eR.cv - aAp) / 2) + aAs,
			ms = mY + Math.floor(cO * (aAp - 2 * aAs));
		m0.lineWidth = aB8, m0.beginPath(), m0.moveTo(mY, dE), m0.lineTo(ms, dE), m0.lineTo(Math.floor(mY - aAs + cO * aAp), dE + aAo), m0.lineTo(mY - aAs, dE + aAo), m0.closePath()
	}
	this.a5h = 1, this.ck = function() {
		eY.setState(6), aAm = 0, aAn = 1, aAt = "rgba(0,220,120,0.4)", aAu = "rgba(0,0,0,0.8)", this.resize(), eW.eX = !0, aAz = 1, aAy = this.a5h - 1, aB0(1)
	}, this.resize = function() {
		aAp = Math.floor((d0.jF.lR() ? .5 : .25) * eR.lS), aAq = aAp + 12, aAo = Math.floor(.125 * aAp), aAs = 3 * aAo, aAr = Math.floor(.225 * aAp), aAw = Math.floor(.3 * aAo), aAv = aZ.aa.lT(0, aAw)
	}, this.aB2 = function(dj) {
		dj === aAy && aB3()
	}, this.lp = function(dF, dE) {
		var mY = Math.floor((eR.cv - aAq) / 2),
			ma = Math.floor(.5 * (eR.cw - ac.gap - aAo - aAr)) + aAo + ac.gap;
		return mY < dF && dF < mY + aAq && ma < dE && dE < ma + aAr && (this.a2i(), gP.ly(dF, dE, !1), !0)
	}, this.a2i = function() {
		bj.bW.bk(3260), aT.bW.y4()
	}, this.w = function() {
		6 === eY.tP() && (eW.av > aAx + 12e3 && aB3(), 100 < (aAm += .07 * aAn * (aAm < 16 ? 5 + aAm : 84 < aAm ? 105 - aAm : 17)) ? (aAm = 100, aAn = -1) : aAm < 0 && (aAm = 0, aAn = 1), aAt = "rgba(0," + Math.floor(190 - 1.9 * aAm) + "," + Math
			.floor(120 - 1.2 * aAm) + "," + (.4 + .004 * aAm) + ")", aAu = "rgba(0," + Math.floor(1.9 * aAm) + "," + Math.floor(1.2 * aAm) + "," + (.8 - .004 * aAm) + ")", eW.eX = !0)
	}, this.eZ = function() {
		var dF = Math.floor((eR.cv - aAq) / 2),
			dE = Math.floor(.5 * (eR.cw - ac.gap - aAo - aAr));
		! function(title, dE, aB8, cO) {
			m0.fillStyle = aAu, aB9(dE, aB8, 1), m0.fill(), m0.fillStyle = aAt, aB9(dE, aB8, cO), m0.fill(), m0.strokeStyle = t.u, aB9(dE, aB8, 1), m0.stroke(),
				function(aBB, dE) {
					aZ.aa.textAlign(m0, 1), aZ.aa.textBaseline(m0, 1), m0.font = aAv, m0.fillStyle = t.u, m0.fillText(aBB, Math.floor(.5 * eR.cv), Math.floor(dE + .58 * aAo))
				}(title, dE)
		}(L(266), dE, 3, aAm / 100),
		function(dF, dE, cv, cw, ba) {
			m0.fillStyle = t.vP, m0.fillRect(dF, dE, cv, cw), m0.lineWidth = 3, m0.strokeStyle = t.u, m0.strokeRect(dF, dE, cv, cw);
			var a5 = Math.floor(.3 * cw);
			aZ.aa.textAlign(m0, 1), aZ.aa.textBaseline(m0, 1), m0.font = aZ.aa.lT(0, a5), m0.fillStyle = t.u, m0.fillText(ba, Math.floor(dF + cv / 2), Math.floor(dE + cw / 2 + .1 * a5))
		}(dF, dE + aAo + ac.gap, aAq, aAr, L(1))
	}
}

function iQ() {
	var aAx = 0,
		aBC = !0;

	function aBE(id) {
		id = [L(267), L(268), L(269), L(270)][id];
		gG.aA1(id)
	}
	this.w = function() {
		var jl, ch;
		eW.av < aAx || (aAx = eW.av + 5e3, eq.lQ) || eq.l6 || aZ.d.rc(eq.jj) || (jl = new Date, ch = jl.getUTCSeconds(), aBC ? ch < 50 && (aBC = !1) : ch < 50 || (aBC = !0, (ch = (jl.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == ch || 20 == ch ||
			40 == ch ? eq.l1 < 7 && aBE(0) : 10 == ch || 30 == ch || 50 == ch ? 7 !== eq.l1 && 10 !== eq.l1 || aBE(1) : 5 == ch || 25 == ch || 45 == ch ? 8 === eq.l1 && aBE(2) : 35 == ch && 9 === eq.l1 && aBE(3))))
	}
}

function aBF() {
	var aP, ev, ew;

	function bM() {
		ez(), 3 !== eq.data.botDifficultyType || aZ.cb.zg(eq.data.botDifficultyData) || (eq.data.botDifficultyType = 0), 3 !== eq.data.botDifficultyType && (eq.data.botDifficultyData = null), aT.f0()[19] = null, aT.f1()
	}

	function ez() {
		3 === eq.data.botDifficultyType && aZ.cb.f2(ew.f3(), eq.data.botDifficultyData, g7.a8v.length - 1)
	}

	function aBH(f4, aB) {
		var f8 = new f9,
			value = (f8.fA(aB < 0 ? L(227) : L(2) + " " + hG.wh[aB % 9]), 0 <= aB && (f8.fp(L(10) + ": " + eq.data.teamPlayerCount[aB]).style.marginBottom = "1em"), aB < 0 ? eq.data.botDifficultyValue : eq.data.botDifficultyTeam[aB]);
		f8.fB(new fC({
			fD: g7.a8v,
			value: value
		}, function(aA) {
			aB < 0 ? eq.data.botDifficultyValue = aA : eq.data.botDifficultyTeam[aB] = aA
		})), f4.push(f8)
	}
	this.show = function() {
		aP.show(), this.resize()
	}, this.aY = function() {
		aP.aY()
	}, this.resize = function() {
		aP.resize(), ev.resize()
	}, this.ae = function(af) {
		2 === af && aP.ag[0].ah()
	}, aP = new aR(L(227), [new aS("⬅️ " + L(1), bM)]), ev = new ex(aP.aV, function() {
		var f4 = [];
		if (function(f4) {
				var f8 = new f9,
					fD = (f8.fA(L(21)), [L(23), L(271), L(272), L(24)]),
					value = eq.data.botDifficultyType;
				0 === eq.data.gameMode && (value = Math.min(value, 2), fD.splice(2, 1));
				f8.fB(new fC({
					fD: fD,
					value: value
				}, function(aB) {
					ez(), eq.data.botDifficultyType = aB, 0 === eq.data.gameMode && 2 === aB && (eq.data.botDifficultyType = 3), 3 !== eq.data.botDifficultyType || eq.data.botDifficultyData || (eq.data.botDifficultyData =
						new Uint8Array(eq.fE)), 2 !== eq.data.botDifficultyType || eq.data.botDifficultyTeam || (eq.data.botDifficultyTeam = new Uint8Array(9)), aT.bl(25)
				})), f4.push(f8)
			}(f4), 0 === eq.data.botDifficultyType) aBH(f4, -1);
		else if (2 === eq.data.botDifficultyType)
			for (var a4 = 0; a4 < eq.data.teamPlayerCount.length; a4++) eq.data.teamPlayerCount[a4] && aBH(f4, a4);
		else 3 === eq.data.botDifficultyType && ! function(f4) {
			var f8 = new f9;
			f8.fA("Data"), (ew = new fI(0, 1, 0, 1)).fJ(aZ.bu.fK(eq.data.botDifficultyData, 8)), f8.fF(ew), f4.push(f8)
		}(f4);
		return f4
	}())
}

function iE() {
	var a9, cv, cw, max, aBI, m1, aBK, aBL, aBM, aBN, aBO, aBP, aBQ, aBR, aBJ = 1e4;

	function aBZ(aBY, m4, a5) {
		var a4;
		for (aBK[0] = aBY, a4 = 1; a4 < a5; a4++) aBK[a4] = aBK[a4 - 1] + m4, m4 = aBK[a4] >= aBJ ? (aBK[a4] = aBJ - 1, -m4) : aBK[a4] < 0 ? (aBK[a4] = 0, -m4) : (m4 += 16384 <= gi.random() ? m1 : -m1) < -aBI ? -aBI : aBI < m4 ? aBI : m4
	}

	function aBb(dF, dE, aBc, a5) {
		(aBc ? function(dF, dE, a5) {
			var a4;
			for (a4 = 0; a4 < a5; a4++) a9[dE * cv + dF + a4] = aBK[a4]
		} : function(dF, dE, a5) {
			var a4;
			for (a4 = 0; a4 < a5; a4++) a9[dE * cv + dF + a4 * cv] = aBK[a4]
		})(dF, dE, a5)
	}

	function aBf(value, a5) {
		var a4, a7Q, rJ, ru = value - aBK[a5 - 1];
		if (0 != ru) {
			for (a7Q = 1 + cf.cg(Math.abs(ru), a5 - 1), a7Q = ru < 0 ? -a7Q : a7Q, aBK[a5 - 1] = value, rJ = (rJ = a5 - 1 - cf.cg(Math.abs(ru), Math.abs(a7Q))) < 1 ? 1 : a5 - 2 < rJ ? a5 - 2 : rJ, a4 = a5 - 2; rJ <= a4; a4--) aBK[a4] += ru - (a5 -
				1 - a4) * a7Q;
			(ru < 0 ? function(a5) {
				var a4;
				for (a4 = a5 - 2; 1 <= a4; a4--) aBK[a4] < 0 && (aBK[a4] = -aBK[a4] - 1)
			} : function(a5) {
				var a4;
				for (a4 = a5 - 2; 1 <= a4; a4--) aBK[a4] >= aBJ && (aBK[a4] = 2 * aBJ - aBK[a4] - 1)
			})(a5)
		}
	}

	function aBi(v2, v5, a5) {
		for (var a4 = 0; a4 < a5; a4++) v2[a4] = v5[a4]
	}

	function aBj(z) {
		for (var a4 = 0; a4 < z.length - 1; a4++) z[a4] = z[a4 + 1] - z[a4];
		z[z.length - 1] = z[z.length - 3]
	}

	function aBk(oo, gap, sS) {
		aBL.push(oo), aBM.push(gap), aBN.push(sS)
	}
	this.cD = function(a1t) {
		! function(a1t) {
			var a4;
			for (cv = a1t[0], cw = a1t[1], aBI = a1t[2], m1 = a1t[3], a9 = new Int16Array(cv * cw), max = cw < cv ? cv : cw, aBK = new Int16Array(max), aBL = [], aBM = [], aBN = [], aBO = new Array(cv), aBP = new Array(cw), a4 = cv - 1; 0 <=
				a4; a4--) aBO[a4] = !1;
			for (a4 = cw - 1; 0 <= a4; a4--) aBP[a4] = !1;
			aBQ = new Int16Array(cv), aBR = new Int16Array(cw)
		}(a1t),
		function(a5) {
			var aBY = gi.random() % aBJ,
				m4 = gi.random() % (2 * aBI + 1) - aBI;
			aBZ(aBY, m4, a5)
		}(max), aBi(aBR, aBK, cw), aBb(0, 0, !0, cv);
		var dF, dE, a1t = a9[0],
			a5 = max,
			m4 = gi.random() % (2 * aBI + 1) - aBI;
		for (aBZ(a1t, m4, a5), aBi(aBQ, aBK, cv), aBb(0, 0, !1, cw), aBj(aBQ), aBj(aBR), aBZ(a9[cv - 1], aBQ[cv - 1], cw), aBb(cv - 1, 0, !1, cw), aBZ(a9[cv * (cw - 1)], aBR[cw - 1], cv), aBf(a9[cv * cw - 1], cv), aBb(0, cw - 1, !0, cv), aBO[cv -
				1] = aBO[0] = !0, aBP[cw - 1] = aBP[0] = !0, aBk(0, cv, !0), aBk(0, cw, !1), ! function() {
				var a22, oo;
				for (;;) {
					if (a22 = function() {
							var a4, a22 = aBL.length - 1;
							for (a4 = a22 - 1; 0 <= a4; a4--) aBM[a4] > aBM[a22] && (a22 = a4);
							return a22
						}(), aBM[a22] < 5) return;
					oo = aBL[a22] + cf.cg(aBM[a22], 2), (aBN[a22] ? function(dF) {
						var a5, aBo, a4, aBp = 0,
							aBq = 0;
						for (; aBq < cw - 1;) {
							for (a4 = aBp + 1; a4 < cw; a4++)
								if (aBP[a4]) {
									aBq = a4;
									break
								} a5 = aBq - aBp + 1, aBZ(a9[dF + cv * aBp], 0 === aBp ? aBQ[dF] : aBK[aBo - 1] - aBK[aBo - 2], a5), aBf(a9[aBq * cv + dF], a5), aBb(dF, aBp, !1, a5), aBo = a5, aBp = aBq
						}
						aBO[dF] = !0
					} : function(dE) {
						var a5, aBo, a4, aBp = 0,
							aBq = 0;
						for (; aBq < cv - 1;) {
							for (a4 = aBp + 1; a4 < cv; a4++)
								if (aBO[a4]) {
									aBq = a4;
									break
								} a5 = aBq - aBp + 1, aBZ(a9[dE * cv + aBp], 0 === aBp ? aBR[dE] : aBK[aBo - 1] - aBK[aBo - 2], a5), aBf(a9[dE * cv + aBq], a5), aBb(aBp, dE, !0, a5), aBo = a5, aBp = aBq
						}
						aBP[dE] = !0
					})(oo), aBk(oo, aBL[a22] + aBM[a22] - oo, aBN[a22]), aBM[a22] = oo - aBL[a22] + 1
				}
			}(), dF = 0; dF < cv; dF++)
			if (!aBO[dF])
				for (dE = 0; dE < cw; dE++) aBP[dE] || ! function(dF, dE) {
					var value = a9[dE * cv + dF - 1] + a9[(dE - 1) * cv + dF],
						t9 = 2;
					aBO[dF + 1] && (t9++, value += a9[dE * cv + dF + 1]);
					aBP[dE + 1] && (t9++, value += a9[(dE + 1) * cv + dF]);
					a9[dE * cv + dF] = cf.cg(value, t9)
				}(dF, dE)
	}, this.aBW = function() {
		return a9
	}, this.tx = function() {
		a9 = null
	}
}

function tv() {
	var fD = aBs(cC.cE);
	fD && aBt(fD[0], fD[1], fD[2], fD[3], fD[4])
}

function aBs(cE) {
	return 2 === cE ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === cE ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === cE ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === cE ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === cE ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aBt(aBu, aBv, aBw, aBx, aBy) {
	for (var dF, dE, xo, xq, lw, aC1, fu = aBu.length - 1, aBz = cC.mO + cC.mP, a5 = (aBz *= aBz, aBw.length), aC0 = Array(a5), a4 = a5 - 1; 0 <= a4; a4--) aC0[a4] = aBw[a4] * aBw[a4];
	var aC2 = new Array(a5),
		aC3 = new Array(a5),
		aC4 = new Array(a5),
		a9 = gc.aBW();
	if (void 0 === aBy)
		for (aBy = new Array(a5), a4 = a5 - 1; 0 <= a4; a4--) aBy[a4] = 0;
	for (a4 = 1; a4 < a5; a4++) aC2[a4] = aC0[a4] - aC0[a4 - 1], aC3[a4] = aBx[a4] - aBx[a4 - 1], aC4[a4] = aBy[a4] - aBy[a4 - 1];
	for (dF = cC.mO - 1; 0 <= dF; dF--)
		for (dE = cC.mP - 1; 0 <= dE; dE--) {
			for (xo = aBz, a4 = fu; 0 <= a4; a4--) xo = (xq = (dF - aBu[a4]) * (dF - aBu[a4]) + (dE - aBv[a4]) * (dE - aBv[a4])) < xo ? xq : xo;
			for (lw = aBx[a5 - 1], aC1 = aBy[a5 - 1], a4 = 1; a4 < a5; a4++)
				if (xo < aC0[a4]) {
					lw = aBx[a4 - 1] + pE((xo - aC0[a4 - 1]) * aC3[a4], aC2[a4]), aC1 = aBy[a4 - 1] + pE((xo - aC0[a4 - 1]) * aC4[a4], aC2[a4]);
					break
				} aC5(cC.mO * dE + dF, lw, aC1, a9)
		}
}

function aC5(aB, lw, aC1, a9) {
	lw < 500 ? a9[aB] = cf.cg(a9[aB] * lw * 2, 1e3) : 500 < lw && (a9[aB] += cf.cg(2 * (1e4 - a9[aB]) * (lw - 500), 1e3)), a9[aB] += cf.cg(aC1 * (10 * lw - a9[aB]), 1e3)
}

function a5b(or, data) {
	var a5 = data.a5S.length,
		aC6 = document.createElement("div"),
		aC7 = document.createElement("div"),
		a59 = document.createElement("div"),
		aC8 = new Array(a5),
		f4 = new Array(a5),
		aC9 = new Array(data.tX.length),
		aCA = aZ.color.nE(70, 70, 0, .35);

	function de() {
		this.style.backgroundColor = aZ.color.de(aCA, 160)
	}

	function aCE() {
		this.style.backgroundColor = aCA
	}

	function a6R() {
		var aN;
		for (or.style.font = aZ.aa.lT(0, aZ.aa.aCH(.026, .5, .03)), a4 = 1; a4 < aC9.length; a4++) aZ.aa.ot(aC9[a4], 4);
		if (aZ.aa.ot(aC6, 2), a5) {
			for (var a4U, pM = aC6.offsetWidth, pN = a59.offsetWidth, a4 = 0; a4 < aC9.length; a4++) a4U = .01 * data.a5X[a4] * pN, aC9[a4].style.width = (100 * a4U / pM).toFixed(2) + "%";
			var rQ = data.a5S[0].length;
			for (a4 = 0; a4 < a5; a4++)
				for (aZ.aa.ot(aC8[a4], 2), aN = 1; aN < rQ; aN++) aZ.aa.ot(f4[a4][aN], 4);
			aC7.aCB && (aC7.scrollTop = aC7.aCB)
		}
	}
	this.resize = function() {
			a6R(), a6R()
		}, or.style.display = "flex", or.style.flexDirection = "column", aC7.style.overflowX = "hidden", aC7.style.overflowY = "auto", aC7.addEventListener("scroll", function() {
			this.aCB = this.scrollTop
		}),
		function() {
			var dh, a4, a5S = data.a5S,
				rQ = a5 ? a5S[0].length : 0;
			for (a4 = 0; a4 < a5; a4++) {
				aC8[a4] = document.createElement("div"), aC8[a4].style.backgroundColor = function(a4) {
					return a4 % 2 == 1 ? aZ.color.nE(130, 130, 130, .35) : t.aCG
				}(a4), aC8[a4].style.width = "100%", aC8[a4].style.display = "flex", f4[a4] = new Array(rQ);
				for (var aN = 0; aN < rQ; aN++) f4[a4][aN] = dh = document.createElement("div"), dh.style.display = "flex", dh.style.justifyContent = "center", dh.style.wordBreak = "break-all", dh.style.padding = "0.4em 0em", dh.style.width = data
					.a5X[aN] + "%", dh.innerHTML = a5S[a4][aN].a9, 1 === a5S[a4][aN].jl && (dh.name = "" + a4, dh.style.color = t.dS, dh.style.backgroundColor = aCA, dh.addEventListener("mouseover", de), dh.addEventListener("mouseout", aCE),
						function(dh, bs, a5Y) {
							2147483647 !== a5Y && dh.addEventListener("click", function() {
								gt.cD(30), gt.oG(30, bs), gx.ck(gt.dy), this.style.backgroundColor = aCA, aT.bl(8, aT.dK, new jw(25, {
									aAQ: 0,
									bs: gv.kF.jU(gv.kF.jP(5)),
									a5Y: a5Y
								}))
							})
						}(dh, a5S[a4][aN].bs, a5S[a4][aN].a5Y)), aC8[a4].appendChild(dh)
			}
			for (aC6.style.display = "flex", aC6.style.backgroundColor = aZ.color.nE(0, 120, 0, .35), a4 = 0; a4 < aC9.length; a4++) aC9[a4] = dh = document.createElement("div"), dh.style.display = "flex", dh.style.justifyContent = "center", dh.style
				.wordBreak = "break-all", dh.style.padding = "0.4em 0em", dh.style.width = data.a5X[a4] + "%", dh.innerHTML = data.tX[a4], aC6.appendChild(dh)
		}();
	for (var a4 = 0; a4 < a5; a4++) a59.appendChild(aC8[a4]);
	aC7.appendChild(a59), or.appendChild(aC6), or.appendChild(aC7)
}

function aCI() {
	this.a3H = function() {
		for (var id = gx.jT(20), colors = new Array(11), a4 = 0; a4 < 11; a4++) colors[a4] = new Uint8Array([gx.jT(8), gx.jT(8), gx.jT(8)]);
		var fq = gw.a4y.aCJ(8);
		eU.eV.qF({
			id: id,
			colors: colors,
			fq: fq
		})
	}, this.a3U = function(dj) {
		var dh = gx.jT(5),
			dh = hI.aCK.aE(dh, gx.jT(30), gx.jT(30), gx.jT(30));
		bj.n9.oL(dj, dh)
	}, this.a3I = function(dj) {
		var oK, df, oJ;
		gx.aCL(165) ? (oK = gx.jT(3), df = hI.aCK.w(gx.jT(30), gx.jT(30)), oJ = hI.aCK.aE(gx.jT(5), gx.jT(30), gx.jT(30), gx.jT(30)), bj.n9.oI(dj, df, oJ, oK), 0 < oK || (0 === dj && 0 === bp.cy.data[105].value.length ? bj.n9.oM(0) : bj.g5.aAM(
			dj), 4 === bj.bW.yO(dj).dx() ? 6 === eY.tP() && bj.bn.a4t(dj) : 5 !== bj.bW.yO(dj).dx() || 8 !== eY.tP() && 10 !== eY.tP() || bj.yA.a3d())) : bj.bW.yV(dj, 3269)
	}, this.a3L = function(dj) {
		var id = gx.jT(6);
		1 === id ? (bp.bq.br(160, gx.jT(30)), bj.bW.du(dj), gL.aCM || bj.n9.oM(1), gp.wF(), 8 === aT.dK && aT.c0().aCN()) : 21 === id ? 8 === aT.dK && aT.c0().wI(17) : 22 === id && (bp.bq.br(106, bp.cy.data[110].value), bp.bq.br(110, ""), 8 ===
			aT.dK) && aT.c0().wI(15)
	}, this.a3Q = function() {
		var a5 = gx.jT(16),
			aCO = gx.jT(16);
		if (gx.aCL(55 + 10 * a5 + 16 * aCO)) {
			for (var z = [], a4 = 0; a4 < a5; a4++) z.push(gw.oO.pc(gx.jT(10)));
			gp.wH(z)
		} else bj.bW.yV(0, 3270)
	}
}

function hv() {
	var lJ, aCP, cv, cw, aC, aCQ, aCR, aCS, canvas, mC, aCT;

	function qK() {
		return Math.floor((eR.cv - cv) / 2) < gJ.cw + 2 * ac.gap ? eR.cw - cw - 4 * ac.gap - gJ.cw : eR.cw - cw - 2 * ac.gap
	}
	this.ck = function() {
		aCT = lJ = !1, aC = .61, aCQ = .07, aCR = .09, mC = aCS = cw = 0
	}, this.resize = function() {
		var lI, mY, af, aCY, aCZ, a71;
		lJ && (cv = pH(cv = d0.jF.lR() ? Math.floor(.69 * eR.lS) : Math.floor(.5 * eR.lS), pG(eR.cv - 2 * ac.gap, 10)), cv = pH(cv, Math.floor(3.57 * pG(eR.cw - 2 * ac.gap, 3))), cw = Math.floor(.28 * cv), (canvas = document.createElement(
			"canvas")).width = cv, canvas.height = cw, lI = canvas.getContext("2d", {
			alpha: !0
		}), mY = Math.floor(1 + cw / 40), lI.clearRect(0, 0, cv, cw), lI.fillStyle = t.qO, lI.fillRect(mY, mY, cv - 2 * mY, cw - 2 * mY), lI.lineJoin = "bevel", lI.lineWidth = 2 * mY, lI.strokeStyle = t.u, lI.strokeRect(mY, mY, cv - 2 *
			mY, cw - 2 * mY), lI.imageSmoothingEnabled = !1, af = gQ.get(aCP), aCY = af.width, a71 = (1 === aCP ? .85 : 21 === aCP ? .666 : .9) * aC * cw / (aCZ = af.height), lI.setTransform(a71, 0, 0, a71, Math.floor((cv - a71 * aCY) /
			2), Math.floor((cw - a71 * aCZ) / 2)), lI.drawImage(af, 0, 0), lI.setTransform(1, 0, 0, 1, Math.floor(cv - aCR * cw - aCQ * cw - mY), Math.floor(mY + aCQ * cw)), function(lI, a5) {
			lI.lineWidth = Math.floor(1 + cw / 80), lI.strokeStyle = t.u, lI.beginPath(), lI.moveTo(0, 0), lI.lineTo(a5, a5), lI.moveTo(0, a5), lI.lineTo(a5, 0), lI.stroke()
		}(lI, Math.floor(aCR * cw)), lI.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(a9, aCV, aCW, aCX) {
		lJ || aCX && aCT || (aCP = aCW ? 21 : a9 ? 1 : 2, lJ = aCT = !0, this.resize(), gE.aY(), gJ.lj(), mC = eW.av, aCS = aCV ? 1 : 0)
	}, this.w = function() {
		!lJ || 1 <= aCS || (aCS = 1 < (aCS += 5e-4 * (eW.av - mC)) ? 1 : aCS, mC = eW.av, eW.eX = !0)
	}, this.lp = function(dF, dE) {
		return !(!lJ || aCS <= 0 || (dF -= Math.floor((eR.cv - cv) / 2), dE -= qK(), dF < 0) || dE < 0 || cv < dF || cw < dE || (cv - cw / 3 < dF && dE < cw / 3 && (lJ = !1, eW.eX = !0), 0))
	}, this.eZ = function() {
		!lJ || aCS <= 0 || (m0.globalAlpha = aCS, m0.drawImage(canvas, Math.floor((eR.cv - cv) / 2), qK()), m0.globalAlpha = 1)
	}
}

function hb() {
	this.kF = new yb, this.oO = new pb, this.a4y = new aCb, this.ck = function() {
		this.kF.ck()
	}
}

function ip() {
	this.aCK = new v, this.p9 = new ea, this.a4u = new aCc
}

function is() {
	var gap, aCd = !1,
		a5N = 0,
		cv = 0,
		pM = 0,
		canvas = null,
		lI = null,
		aCe = null;

	function aCh() {
		for (var aCp, aCn = 0, a5 = 0, af = Math.floor(cv / 2), t6 = Math.floor(pM / 2), aCo = 1.5 * Math.PI, a4 = eq.xE; 0 <= a4; a4--) a5 += aCe[a4], 0 === aCe[a4] && aCn++;
		if (aCd = !1, lI.clearRect(0, 0, cv, cv), 0 < a5)
			if (aCn === eq.xE) {
				for (a4 = eq.xE; 0 <= a4; a4--)
					if (0 < aCe[a4]) {
						! function(a4, af, t6) {
							lI.fillStyle = hG.wZ[hG.qZ[a4]], lI.beginPath(), lI.arc(af, af, t6, 0, 2 * Math.PI), lI.fill()
						}(a4, af, t6);
						break
					}!
				function(af) {
					var fontSize = af / 3;
					lI.font = aZ.aa.lT(1, fontSize), lI.fillStyle = t.u, lI.fillText("100%", af, af + .1 * fontSize)
				}(af)
			} else {
				for (a4 = 0; a4 <= eq.xE; a4++) 0 < aCe[a4] && (! function(a4, af, t6, aCo, aCp) {
					lI.fillStyle = hG.wZ[hG.qZ[a4]], lI.beginPath(), lI.arc(af, af, t6, aCo, aCp), lI.lineTo(af, af), lI.fill()
				}(a4, af, t6, aCo, aCp = aCo + 2 * Math.PI * aCe[a4] / a5), function(af, t6, aCo, aCp) {
					var a9 = (aCp - aCo) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * t6 * Math.min(a9, .37);
					fontSize < 8 || (aCo = (aCo + aCp) / 2, aCp = (__fx.settings.detailedTeamPercentage ? (100 * a9).toFixed(2) : Math.floor(100 * a9 + .5)) + "%", t6 *= .525 - Math.max(.6 * (a9 - .7), 0), lI.font = aZ.aa.lT(1, fontSize), lI
						.fillStyle = t.u, lI.fillText(aCp, af + Math.cos(aCo) * t6, af + Math.cos(aCo + 1.5 * Math.PI) * t6))
				}(af, t6, aCo, aCp), 0 !== a4 && aCu(af, t6, aCo), aCo = aCp);
				aCu(af, t6, 1.5 * Math.PI)
			}!
		function(af, t6) {
			lI.beginPath(), lI.arc(af, af, t6, 0, 2 * Math.PI), lI.stroke()
		}(af, t6)
	}

	function aCu(af, t6, aCw) {
		lI.beginPath(), lI.moveTo(af, af), lI.lineTo(af + Math.cos(aCw) * t6, af + Math.cos(aCw + 1.5 * Math.PI) * t6), lI.stroke()
	}
	this.ck = function() {
		if (eq.p6) {
			a5N = 0, aCe = new Uint32Array(eq.xE + 1);
			for (var a4 = eq.xE; 0 <= a4; a4--) aCe[a4] = 0;
			for (a4 = ed.ee - 1; 0 <= a4; a4--) aCe[hG.sG[ed.eg[a4]]] += 1;
			this.resize()
		} else aCe = lI = canvas = null
	}, this.aCg = function() {
		return cv
	}, this.resize = function() {
		eq.p6 && (cv = Math.floor(.95 * (d0.jF.lR() && !eq.md ? .18 * eR.min : .13 * eR.lS)), cv = (cv *= 1 + (.5 + .2 * d0.jF.lR()) * eq.md) + cv % 2, gap = Math.max(1, .015 * cv), pM = Math.floor(cv - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = cv, canvas.height = cv, (lI = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, lI.strokeStyle = t.u, aZ.aa.textAlign(lI, 1), aZ.aa.textBaseline(lI, 1), aCh())
	}, this.rY = function() {
		var jl, wX = this.sF();
		return hG.qZ[wX] || (wX = function() {
			for (var wX = -1, a4 = eq.xE; 1 <= a4; a4--)(-1 === wX || aCe[a4] > aCe[wX]) && (wX = a4);
			return wX
		}(), jl = ei.jd[je[0]], -1 !== wX && aCe[wX] > jl) ? aCe[wX] : jl
	}, this.wY = function() {
		return a5N = 31, this.w(), this.sF()
	}, this.sF = function() {
		for (var wX = 0, a4 = eq.xE; 0 < a4; a4--) aCe[a4] > aCe[wX] && (wX = a4);
		return wX
	}, this.aCj = function() {
		return aCe[2] > 2 * aCe[1] || aCe[1] > 4 * aCe[2]
	}, this.qb = function(aCk) {
		for (var aI = 0, eg = ed.eg, sG = hG.sG, a5 = ed.ee, qd = h2.qd, a4 = 0; a4 < a5; a4++) {
			var ec = eg[a4];
			sG[ec] === aCk && (qd[aI++] = ec)
		}
		h2.qc[0] = aI
	}, this.a4S = function(aCk) {
		for (var aI = 0, eg = ed.eg, sG = hG.sG, a5 = ed.ee, qd = h2.qd, a4 = 0; a4 < a5; a4++) {
			var ec = eg[a4];
			sG[ec] !== aCk && (qd[aI++] = ec)
		}
		h2.qc[0] = aI
	}, this.aCl = function() {
		for (var aI = 0, a4 = eq.xE; 0 <= a4; a4--) aI += 0 < aCe[a4];
		return aI
	}, this.w = function() {
		if (eq.p6 && 32 <= ++a5N) {
			a5N = 0;
			for (var a4 = eq.xE; 0 <= a4; a4--) aCe[a4] = 0;
			for (a4 = ed.ee - 1; 0 <= a4; a4--) aCe[hG.sG[ed.eg[a4]]] += ei.jd[ed.eg[a4]];
			aCd = !0
		}
	}, this.by = function() {
		eq.p6 && aCd && aCh()
	}, this.eZ = function() {
		eq.p6 && (eq.md ? m0.drawImage(canvas, ac.gap, ac.gap) : m0.drawImage(canvas, ac.gap, aCx + 2 * ac.gap))
	}
}

function j1() {
	this.a0G = 0, this.gap = 0, this.rw = 0, this.ad = 0, this.ck = function() {
		this.resize()
	}, this.resize = function() {
		this.a0G = .0022 * aZ.aa.aCy(.5) * eR.lS, this.rw = this.a0G / eR.rt, this.gap = Math.max(Math.floor((d0.jF.lR() ? .0114 : .01296) * eR.lS), 2), this.ad = this.gap / eR.rt
	}
}

function aCz() {
	this.aD0 = function(jx, jy, jz) {
		gt.cD(75), gt.oG(1, 0), gt.oG(6, 21), gt.oG(6, jx), gt.oG(1, +(jy < 0)), gt.oG(1, +(jz < 0)), gt.oG(30, Math.abs(jy)), gt.oG(30, Math.abs(jz)), bj.bW.send(0, gt.dy)
	}, this.aD1 = function(jx, a23, a24) {
		gt.cD(18 + 16 * a23.length + 30), gt.oG(1, 0), gt.oG(6, 22), gt.oG(6, jx), bj.n9.oc(a23), gt.oG(30, a24), bj.bW.send(0, gt.dy)
	}, this.aD2 = function(jx, a23, a24) {
		gt.cD(73), gt.oG(1, 0), gt.oG(6, 28), gt.oG(6, jx), gw.kF.yi(a23, 5), gt.oG(30, a24), bj.bW.send(0, gt.dy)
	}, this.aD3 = function(y6, ke) {
		for (var a5 = ke.length, t0 = 0, a4 = 0; a4 < a5; a4++) t0 += ke[a4].length;
		for (gt.cD(21 + 3 * a5 + 16 * t0), gt.oG(1, 0), gt.oG(6, 23), gt.oG(3, y6), gt.oG(4, a5), gt.oG(7, t0), a4 = 0; a4 < a5; a4++) gt.oG(3, ke[a4].length), gv.oO.oP(ke[a4]);
		bj.bW.send(0, gt.dy)
	}, this.aD4 = function(y6, jy, jz) {
		gt.cD(52), gt.oG(1, 0), gt.oG(6, 24), gt.oG(3, y6), gt.oG(1, +(jy < 0)), gt.oG(1, +(jz < 0)), gt.oG(20, Math.abs(jy)), gt.oG(20, Math.abs(jz)), bj.bW.send(0, gt.dy)
	}
}

function hq() {
	var aD5, aD6, cv, dF, dE, aD7, aD8;
	this.ck = function() {
		aD5 = new Array(2), aD6 = new Array(2), this.lq = !1, aD8 = aD7 = mK = mI = 0, mJ = 1, this.resize()
	}, this.resize = function() {
		cv = (cv = Math.floor((d0.jF.lR() ? .072 : .0502) * eR.lS)) < 8 ? 8 : cv;
		for (var a4 = 1; 0 <= a4; a4--) aD5[a4] = document.createElement("canvas"), aD5[a4].width = cv, aD5[a4].height = cv, aD6[a4] = aD5[a4].getContext("2d", {
			alpha: !0
		});
		this.lU(),
			function() {
				for (var aDI = Math.floor(1 + cv / 20), a4 = 1; 0 <= a4; a4--) aD6[a4].clearRect(0, 0, cv, cv), aD6[a4].fillStyle = t.aDJ, aD6[a4].beginPath(), aD6[a4].arc(cv / 2, cv / 2, cv / 2 - aDI, 0, 2 * Math.PI), aD6[a4].fill(), aD6[a4]
					.lineWidth = aDI, aD6[a4].fillStyle = t.u, aD6[a4].strokeStyle = t.u, aD6[a4].beginPath(), aD6[a4].arc(cv / 2, cv / 2, cv / 2 - aDI, 0, 2 * Math.PI), aD6[a4].stroke(), qR(aD6[a4], 0, 0, cv, aDI, .3, 0 === a4)
			}()
	}, this.qJ = function() {
		return -mI / mJ
	}, this.qK = function() {
		return -mK / mJ
	}, this.mu = function(dC, xr) {
		mI = mJ * dC - xr
	}, this.mv = function(dD, xs) {
		mK = mJ * dD - xs
	}, this.lp = function(aDB, a9a) {
		return eq.md || ! function(aDB, a9a) {
			return Math.pow(aDB - (dF + cv / 2), 2) + Math.pow(a9a - (dE + cv / 2), 2) < cv * cv / 4 || Math.pow(aDB - (dF + cv / 2), 2) + Math.pow(a9a - (dE + 2 * cv), 2) < cv * cv / 4
		}(aDB, a9a) || bp.cy.data[8].value ? (gA.mx() && (this.lq = !0, aD7 = aDB, aD8 = a9a), !1) : a9a < dE + 1.25 * cv ? this.lx(Math.floor(eR.cv / 2), Math.floor(eR.cw / 2), -200) : this.lx(Math.floor(eR.cv / 2), Math.floor(eR.cw / 2),
			200)
	}, this.ly = function(aDB, a9a) {
		var aDC, aDD, mp, mq;
		return !gA.mx() || (aDC = mI, aDD = mK, mI += mp = aD7 - aDB, mK += mq = aD8 - a9a, gU.ly(mp, mq), this.aAc(), aD7 = aDB, aD8 = a9a, aDC !== mI) || aDD !== mK
	}, this.lx = function(ll, lm, deltaY) {
		var d3;
		if (gA.mx()) {
			if (0 < deltaY) d3 = (d3 = 500 / (500 + deltaY)) < .5 ? .5 : d3;
			else {
				if (!(deltaY < 0)) return !1;
				d3 = 2 < (d3 = (500 - deltaY) / 500) ? 2 : d3
			}
			this.xt(ll, lm, d3), eW.eX = !0
		}
		return !0
	}, this.xt = function(dF, dE, rJ) {
		var lw;
		rJ = lw = (lw = 1024 < (lw = rJ) * mJ ? 1024 / mJ : lw) * mJ < .125 ? .125 / mJ : lw, gU.zoom(rJ, dF, dE),
			function(lw, ll, lm) {
				mJ *= lw, mI = (mI + ll) * lw - ll, mK = (mK + lm) * lw - lm, gK.aAc()
			}(rJ, dF, dE)
	}, this.aAc = function() {
		var aDG = eR.cv / 16,
			a4N = 0,
			aDH = eR.cw / 16,
			a4O = 0;
		mI < -eR.cv + aDG && (a4N = -eR.cv + aDG - mI), mI > mJ * cC.mO - aDG && (a4N = mJ * cC.mO - aDG - mI), mK < -eR.cw + aDH && (a4O = -eR.cw + aDH - mK), mK > mJ * cC.mP - aDH && (a4O = mJ * cC.mP - aDH - mK), mI += a4N, mK += a4O, hC.mw(),
			gU.a6h(a4N, a4O)
	}, this.lU = function() {
		dF = eR.cv - cv - ac.gap, dE = Math.floor(eR.cw / 2 - 1.25 * cv)
	}, this.eZ = function() {
		bp.cy.data[8].value || (m0.drawImage(aD5[0], dF, dE), m0.drawImage(aD5[1], dF, Math.floor(dE + 3 * cv / 2)))
	}
}

function hm() {
	var ba, a5N, uN, cv, cw, font, ax;

	function aDM(t9) {
		return t9 < 10 ? "0" + t9 : String(t9)
	}
	this.ck = function() {
		ax = L(273)
	}, this.resize = function() {
		cv = Math.floor((d0.jF.lR() ? .53 : .36) * eR.lS), cw = Math.floor(.065 * cv), font = aZ.aa.lT(1, Math.floor(.9 * cw)), uN--, this.setTime()
	}, this.w = function() {
		this.setTime() && (eW.eX = !0)
	}, this.setTime = function() {
		for (var jl = new Date, ce = jl.getUTCMinutes(), ch = jl.getUTCSeconds(), aDK = [0, 10, 20, 25, 30, 35, 40, 45, 50], aDL = (a5N = 3600 - 60 * ce - ch, a5N %= 300, 300), a4 = 0; a4 < aDK.length; a4++)
			if ((60 * ce + ch + a5N) % 3600 == 60 * aDK[a4]) {
				aDL = 0;
				break
			} return a5N += aDL, ba = ax + aDM(Math.floor(a5N / 60)) + ":" + aDM(a5N % 60), uN !== (uN = 60 * ce + ch) && (cv = gI.measureText(ba, font), cv += Math.floor(.4 * cw), !0)
	}, this.eZ = function() {
		m0.lineWidth = 1 + Math.floor(cw / 15), m0.translate(eR.cv - cw, Math.floor(.5 * (eR.cw + cv))), m0.rotate(-Math.PI / 2), m0.fillStyle = t.u, m0.fillRect(0, 0, cv, cw), m0.strokeStyle = t.wc, m0.strokeRect(0, 0, cv, cw + 10), m0
			.fillStyle = t.wc, m0.font = font, aZ.aa.textBaseline(m0, 1), aZ.aa.textAlign(m0, 1), m0.fillText(ba, Math.floor(cv / 2), Math.floor(.59 * cw)), m0.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function j9() {
	this.a0i = function() {
		for (var dF, dE, a4 = a0h - 1; 0 <= a4; a4--) dF = cf.cg(a11[a4], 4) % cC.mO, dE = cf.cg(a11[a4], 4 * cC.mO), ei.ml[a0d] = Math.min(dF, ei.ml[a0d]), ei.mn[a0d] = Math.min(dE, ei.mn[a0d]), ei.mm[a0d] = Math.max(dF, ei.mm[a0d]), ei.mo[
			a0d] = Math.max(dE, ei.mo[a0d])
	}, this.a8M = function() {
		var dh, ec, a4, a5 = ei.rb[a0d].length,
			v1 = gR.v1;
		loop: for (a4 = a5 - 1; 0 <= a4; a4--) {
			for (dh = 3; 0 <= dh; dh--)
				if (ec = ei.rb[a0d][a4] + v1[dh], gR.sI(ec) || gR.sn(ec) && gR.sZ(ec) !== a0d) {
					gR.aDN(ei.rb[a0d][a4], a0d);
					continue loop
				} ei.rb[a0d][a4] = ei.rb[a0d][a5 - 1], ei.rb[a0d].pop(), a5--
		}
	}, this.a8N = function() {
		var player = a0d,
			a0V = ei.a0V,
			pT = ei.pT,
			a0W = ei.a0W,
			a5 = a0V[player].length,
			v1 = gR.v1;
		loop: for (var a4 = a5 - 1; 0 <= a4; a4--) {
			for (var aDO = !1, aDP = !1, dh = 3; 0 <= dh; dh--) {
				var ec = a0V[player][a4] + v1[dh];
				if (gR.aDQ(ec, player)) continue loop;
				aDO = aDO || gR.yn(ec), aDP = aDP || gR.aDR(ec)
			}
			aDO ? pT[player].push(a0V[player][a4]) : aDP ? a0W[player].push(a0V[player][a4]) : gR.aDS(a0V[player][a4], player), a0V[player][a4] = a0V[player][a5 - 1], a0V[player].pop(), a5--
		}
	}, this.a0T = function() {
		ei.jd[a0Q] -= a0h
	}, this.a0U = function(border) {
		for (var a5 = border.length, a4 = a5 - 1; 0 <= a4; a4--) gR.a36(a0Q, border[a4]) || (border[a4] = border[a5 - 1], border.pop(), a5--)
	}, this.a0X = function(border) {
		for (var a5 = border.length, a4 = a5 - 1; 0 <= a4; a4--) !gR.a36(a0Q, border[a4]) && gR.pZ(border[a4]) && (border[a4] = border[a5 - 1], border.pop(), a5--)
	}, this.a0Y = function(border) {
		for (var dh, ec, a5 = border.length, v1 = gR.v1, a4 = a5 - 1; 0 <= a4; a4--)
			for (dh = 3; 0 <= dh; dh--)
				if (ec = border[a4] + v1[dh], gR.aDQ(ec, a0Q)) {
					ei.a0V[a0Q].push(border[a4]), border[a4] = border[a5 - 1], border.pop(), a5--;
					break
				}
	}, this.a0Z = function() {
		for (var dh, ec, v1 = gR.v1, a4 = a0h - 1; 0 <= a4; a4--)
			for (dh = 3; 0 <= dh; dh--) ec = a11[a4] + v1[dh], gR.so(a0Q, ec) && gR.aDT(ec) && (ei.a0V[a0Q].push(ec), gR.a12(ec, a0Q))
	}, this.a0a = function() {
		var dF, dE;
		loop: for (; ei.mn[a0Q] < ei.mo[a0Q];) {
			for (dF = ei.mm[a0Q]; dF >= ei.ml[a0Q]; dF--)
				if (gR.a36(a0Q, 4 * (ei.mn[a0Q] * cC.mO + dF))) break loop;
			ei.mn[a0Q]++
		}
		loop: for (; ei.mn[a0Q] < ei.mo[a0Q];) {
			for (dF = ei.mm[a0Q]; dF >= ei.ml[a0Q]; dF--)
				if (gR.a36(a0Q, 4 * (ei.mo[a0Q] * cC.mO + dF))) break loop;
			ei.mo[a0Q]--
		}
		loop: for (; ei.ml[a0Q] < ei.mm[a0Q];) {
			for (dE = ei.mo[a0Q]; dE >= ei.mn[a0Q]; dE--)
				if (gR.a36(a0Q, 4 * (dE * cC.mO + ei.ml[a0Q]))) break loop;
			ei.ml[a0Q]++
		}
		loop: for (; ei.ml[a0Q] < ei.mm[a0Q];) {
			for (dE = ei.mo[a0Q]; dE >= ei.mn[a0Q]; dE--)
				if (gR.a36(a0Q, 4 * (dE * cC.mO + ei.mm[a0Q]))) break loop;
			ei.mm[a0Q]--
		}
	}, this.sU = function(player, oj) {
		return 0 === hG.sG[player] || hG.sG[player] !== hG.sG[oj]
	}, this.aDU = function(player) {
		for (var a4, lE, a5 = ei.a0V[player].length, v1 = gR.v1, dh = 3; 0 <= dh; dh--)
			for (lE = v1[dh], a4 = 0; a4 < a5; a4++)
				if (gR.sI(ei.a0V[player][a4] + lE)) return !0;
		return !1
	}, this.ol = function(player) {
		for (var a4, lE, a5 = ei.a0V[player].length, v1 = gR.v1, dh = 3; 0 <= dh; dh--)
			for (lE = v1[dh], a4 = 0; a4 < a5; a4++)
				if (gR.aDV(ei.a0V[player][a4]) && gR.sI(ei.a0V[player][a4] + lE)) return !0;
		return !1
	}, this.aDW = function(aDX, aDY) {
		for (var a4, jl, lE, ec, aDZ = ei.a0V[aDX].length, aDa = ei.a0V[aDY].length, v1 = (aDa < aDZ && (jl = aDX, aDX = aDY, aDY = jl, jl = aDZ, aDZ = aDa, 0), gR.v1), dh = 3; 0 <= dh; dh--)
			for (lE = v1[dh], a4 = 0; a4 < aDZ; a4++)
				if (ec = ei.a0V[aDX][a4] + lE, gR.sn(ec) && gR.sZ(ec) === aDY) return !0;
		return !1
	}, this.om = function(aDX, aDY) {
		for (var a4, lE, ec, aDZ = ei.a0V[aDX].length, v1 = gR.v1, dh = 3; 0 <= dh; dh--)
			for (lE = v1[dh], a4 = 0; a4 < aDZ; a4++)
				if (gR.aDV(ei.a0V[aDX][a4]) && (ec = ei.a0V[aDX][a4] + lE, gR.sn(ec)) && gR.sZ(ec) === aDY) return !0;
		return !1
	}
}

function jD() {
	this.a5l = [L(274), L(275), L(276), L(277), L(278), L(279), L(280), L(281), L(282), L(283), L(284), L(285), L(286), L(287), L(288), L(289)];
	var aDb = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.wR = new Array(aDb.length), this.ck = function() {
		var z = bp.cy.data[155].value.split(";"),
			rQ = z.length;
		if (function() {
				for (var a5 = aDb.length, a4 = 0; a4 < a5; a4++) h9.wR[a4] = aDb[a4]
			}(), !(rQ > aDb.length))
			for (var a4 = 0; a4 < rQ; a4++) z[a4].length && (this.wR[a4] = z[a4])
	}, this.a5n = function(aB, code) {
		for (var wR = this.wR, aDd = aDb, ax = (wR[aB] = code, ""), a5 = wR.length, aDe = [], a4 = 0; a4 < a5; a4++) aDe.push(wR[a4] === aDd[a4] ? "" : wR[a4]);
		a5--;
		for (a4 = 0; a4 < a5; a4++) ax += aDe[a4] + ";";
		bp.bq.br(155, ax += aDe[a5])
	}, this.a5k = function() {
		bp.bq.br(155, ""), this.ck()
	}, this.af = function(code, aB) {
		return code === this.wR[aB] || code === this.wR[aB + 1]
	}
}

function qt() {
	function aDi(z) {
		if (0 === z.length) bp.bq.br(116, "");
		else {
			for (var aDl = z[0], a4 = 1; a4 < z.length; a4++) aDl += ";" + z[a4];
			bp.bq.br(116, aDl)
		}
	}
	this.aDf = function() {
		bp.cy.data[110].value.length && (bp.cy.data[106].value = bp.cy.data[110], bp.bq.br(110, ""), this.aDg())
	}, this.aDg = function() {
		var z = bp.cy.data[116].value.split(";");
		for (z.length % 2 == 1 && z.pop(), z.unshift(bp.cy.data[106].value), z.unshift(bp.cy.data[105].value), a4 = 2; a4 < z.length; a4 += 2)
			if (z[a4] === z[0]) {
				z.splice(a4, 2);
				break
			} for (var aDh = [], a4 = 0; a4 < z.length; a4 += 2) aDh.push(z[a4]);
		aDi(z), bp.cy.data[117].value = 0, bp.cy.data[117].fD = aDh
	}, this.aDj = function(aB) {
		bp.cy.data[117].fD.splice(aB, 1), bp.cy.data[117].value = Math.min(aB, bp.cy.data[117].fD.length - 1);
		var z = bp.cy.data[116].value.split(";");
		z.splice(2 * aB, 2), aDi(z)
	}, this.aDk = function(aB) {
		var z = bp.cy.data[116].value.split(";");
		return {
			bs: z[2 * aB],
			password: z[2 * aB + 1]
		}
	}, this.a4w = function() {
		var a9 = cf.fH(bp.cy.data[121].value, -1, 262143);
		return a9 = -1 === a9 ? ~~(262144 * Math.random()) : a9
	}, this.qw = function() {
		for (var z = document.cookie.split(";"), a4 = 0; a4 < z.length; a4++) {
			var ax = z[a4].trim(),
				aDm = ax.indexOf("="),
				aDm = 0 <= aDm ? ax.substring(0, aDm) : ax;
			document.cookie = aDm + "=;expires=0;path=/", document.cookie = aDm + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = aDm + "=;expires=0;path=/;domain=." + location.hostname
		}
	}
}

function aDn() {
	var aP, ev, ew, bU;

	function bM() {
		ez(), 1 !== eq.data.colorsType && (eq.data.colorsData = null), aT.f0()[19] = null, aT.f1()
	}

	function aDo() {
		ez(), aT.bl(21)
	}

	function ez() {
		1 === eq.data.gameMode ? eq.aDp.aDq() : 0 === eq.data.gameMode && 1 === eq.data.colorsType && aZ.cb.f2(ew.f3(), eq.data.colorsData, 262143)
	}
	this.show = function() {
		aP.show(), this.resize()
	}, this.aY = function() {
		aP.aY()
	}, this.resize = function() {
		aP.resize(), ev.resize()
	}, this.ae = function(af) {
		2 === af && aP.ag[0].ah()
	}, bU = [new aS("⬅️ " + L(1), bM)], 1 === eq.data.gameMode && bU.push(new aS(L(290), aDo, 1, 1)), aP = new aR(L(28), bU), ev = new ex(aP.aV, (function(f4) {
		var f8 = new f9;
		f8.fA(L(21)), 0 === eq.data.gameMode && (f8.fB(new fC({
			fD: [L(291), L(24)],
			value: eq.data.colorsType
		}, function(aB) {
			ez(), eq.data.colorsType = aB, 1 !== eq.data.colorsType || eq.data.colorsData && eq.data.colorsData.length === eq.fE || (eq.data.colorsData = new Uint32Array(eq.fE)), aT.bl(21)
		})), f8.fF(new aDs));
		f8.fF(new a5i({
			value: eq.data.selectableColor
		}, L(292), function(value) {
			eq.data.selectableColor = value
		})), f4.push(f8)
	}(bU = []), 0 === eq.data.gameMode ? 1 === eq.data.colorsType && function(f4) {
		var f8 = new f9;
		f8.fA("Data"), (ew = new fI(0, 1, 0, 1)).fJ(aZ.bu.fK(eq.data.colorsData, 1)), f8.fF(ew), f4.push(f8)
	}(bU) : (eq.aDp.aDq(), bU.push(function() {
		var f8 = new f9;
		f8.fA(L(10));
		for (var a4 = 0; a4 < hG.wh.length; a4++) {
			var aA = (a4 + 1) % hG.wh.length,
				bd = f8.fp((0 == aA ? "" : "Team ") + hG.wh[aA]);
			a4 && (bd.style.marginTop = "0.5em"), f8.fF(new fG({
				aB: -1,
				value: eq.data.teamPlayerCount[aA]
			}, 1, 0, function(bd) {
				aP.ag[1].c6(0);
				var playerCount = cf.fH(Math.floor(bd.target.value), 0, 512);
				bd.target.value = playerCount, eq.data.teamPlayerCount[bd.target.aDt] = playerCount
			})).bd.aDt = aA
		}
		return f8
	}())), bU))
}

function hY() {
	this.fE = 512, this.a6b = 15e8, this.a7s = 1e9, this.aDu = 5e4, this.aDv = 512, this.a0n = 2, this.jj = 0, this.er = 0, this.kx = 0, this.r9 = 0, this.ky = 0, this.x6 = 512, this.aDw = 512, this.aDx = 150, this.l6 = !0, this.lQ = 0, this.ku = 0,
		this.rA = 0, this.md = !1, this.l3 = 0, this.aDy = 0, this.p6 = !1, this.xE = 0, this.a41 = 0, this.l1 = 0, this.pD = 0, this.l7 = null, this.aA0 = new vi, this.rj = 30, this.p4 = 0, this.wU = 0, this.wW = 0, this.qa = 0, this.data = new a3e,
		this.aDp = new aDz, this.aE0 = 0, this.aE1 = "", this.a3j = function() {
			h2.ck(), h5.ck(), aj.clear(), this.kx = this.er = this.data.humanCount, this.l6 = 1 === this.kx, this.md = !1, this.lQ = this.data.isReplay, this.l1 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.pD = this.data.isContest, this.p6 = this.l1 < 7 || 9 === this.l1, this.l1 = 10 === this.l1 && this.l6 ? 7 : this.l1, this.l1 = 8 === this.l1 && 2 !== this.er ? 7 : this.l1, gj.ck(),
				this.xE = this.data.numberTeams, this.data.teamPlayerCount ? this.a41 = +(0 < this.data.teamPlayerCount[0]) : (this.a41 = 0, this.p6 && this.l6 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.xE + 1), eq.aDp.aDq())), this.rj = this.er <= 2 ? 30 : this.er <= 50 ? 40 : 50, this.aDy = this.l3 = this.data.selectableSpawn, this.l7 = this.l3 ? new aE2 : null, 1 === e1.e4 ? this.x6 = this.er : this.x6 = this.data
				.playerCount, this.aDw = this.x6, this.r9 = this.x6 - this.er, this.ky = 0, this.jj = this.data.selectedPlayer, this.p4 = 0, this.wU = 0, this.wW = 0, this.qa = 0, gi.tr(this.data.spawningSeed), gT.ck(), ei.ck(), gZ.ck(), gW.uX(), gq
				.h.a3s = [], hG.ck(), this.ku = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), hE.ck(), a7T(), gR.jB(), gb.aE3(), hD.ck(), gR.ck(), ge.ck(), h0.ck(), h1.ck(), ga.ck(), h7.wQ(), g7.ck(), gW
				.cD(), gB.ck(), gC.ck(), ed.aE4(), gr.ck(), hH.ck(), h3.ck(), hF.ck(), q5.putImageData(q6, 0, 0), gN.ck(), gK.ck(), gJ.ck(), gs.ck(), gh.ck(), gM.ck(), at.ck(), gF.ck(), gI.ck(), gG.ck(), gH.ck(), gE.ck(), gO.ck(), g8.ck(), g9.ck(),
				a8H(), gS.ck(), gU.ck(), gn.ck(), go.ck(), gk.ck(), this.aA0.ck(), eW.wQ(), gA.mM(), 0 === ei.kv[eq.jj] && gO.show(!1, !0), gU.l0(!0), gg.ck(), eW.eX = !0, this.lQ || this.l6 && this.l3 || d0.jF.setState(1), this.aE0 = 0
		}, this.aE6 = function(aE7) {
			gr.aE8.a8m.length ? this.aE1 = gr.aE8.a8m : this.aE1 = gr.aE9.a1a(), bj.bW.yY(), aj.clear(), this.ku = 0, eW.aEA(), d0.jF.setState(0), eY.setState(0), eU.aEB.show(aE7), 2 === this.aE0 ? aT.bW.y5() : 1 === this.aE0 ? aT.bl(19) : aT.bl(5,
				5)
		}, this.a6j = function() {
			return this.lQ ? gF.lf || !gs.a18 : this.l6 && (gF.lf || this.l3)
		}, this.a7C = function() {
			return 1 === this.ku && !this.l3
		}
}

function bO(bF, b9, aEC, bG, vB, vC) {
	var uj = document.createElement("div"),
		aED = document.createElement("div"),
		aEE = document.createElement("div"),
		aEF = document.createElement("div"),
		aEG = document.createElement("div"),
		a51 = document.createElement("div"),
		aEH = document.createElement("div"),
		aEI = document.createElement("div"),
		aEJ = document.createElement("span"),
		aEK = document.createElement("div");
	this.bb = new vA(vB, vC), this.bx = new a50(vC), this.c5 = [bF, b9, aEC, bG], this.cN = function(cO) {
		cO = (cO / 10).toFixed(1) + "%";
		aEI.style.width = cO, aEJ.innerHTML = cO
	}, this.c3 = function() {
		this.bx.aY(a51), this.bb.show(a51)
	}, this.c4 = function() {
		this.bb.aY(a51), this.bx.show(a51)
	}, this.bY = function() {
		return aED
	}, this.show = function() {
		document.body.appendChild(uj)
	}, this.aY = function() {
		aT.removeChild(document.body, uj)
	}, this.resize = function(aEO) {
		var aEP = 1 - .4 * d0.jF.lR() * (eR.cv > 1.6 * eR.cw),
			aEQ = aZ.aa.nK(.05 * aEP),
			aER = eR.cw > eR.cv,
			aES = aZ.aa.nK(.07 * aEP + .03 * aER),
			aET = aZ.aa.nK(.04 + .02 * aER),
			aER = aZ.aa.nK(.02 * aEP + .01 * aER),
			aEV = aZ.aa.nK(.025);
		uj.style.font = aZ.aa.lT(0, aEV), aEP < 1 && (aEV = aZ.aa.lT(0, aEP * aEV), aEE.style.font = aEV, aEG.style.font = aEV, aEK.style.font = aEV, aEH.style.font = aEV, aEF.style.font = aEV), aED.style.height = aZ.aa.ab(aEQ), aED.style.font =
			aZ.aa.lT(0, .72 * aEQ), aZ.aa.ot(aED, 2), aEE.style.top = aZ.aa.ab(aEQ), aEE.style.height = aZ.aa.ab(aES), aZ.aa.ot(aEE, 2), aEF.style.font = aZ.aa.lT(0, aEP * aZ.aa.nK(.02)), aEF.style.top = aZ.aa.ab(aEQ + aES), aEF.style.height = aZ
			.aa.ab(aET), aZ.aa.ot(aEF, 2), aEG.style.top = aZ.aa.ab(aEQ + aES + aET), aEG.style.height = aZ.aa.ab(aES), aZ.aa.ot(aEG, 2), a51.style.top = aZ.aa.ab(aEQ + aES + aET + aES), a51.style.height = aZ.aa.ab(eR.cw / eR.rt - aEQ - 3 * aES -
				aET - aER), aEH.style.top = aZ.aa.ab(eR.cw / eR.rt - aES - aER), aEH.style.height = aZ.aa.ab(aER), aZ.aa.ot(aEH, 8), aEJ.style.font = aZ.aa.lT(0, .8 * aER), aEK.style.top = aZ.aa.ab(eR.cw / eR.rt - aES), aEK.style.height = aZ.aa
			.ab(aES), aZ.aa.ot(aEK, 8), bF.resize(aEE), b9.resize(aEE), aEC.resize(aEE), bG.resize(aEE), aEO ? this.bb.resize(a51) : this.bx.resize()
	};
	vB = this;
	uj.style.position = "absolute", uj.style.top = "0", uj.style.left = "0", uj.style.width = "100%", uj.style.height = "100%", uj.style.backgroundColor = t.aCG, d1.d2() || (uj.style.backdropFilter = "blur(4px)", uj.style.webkitBackdropFilter =
		"blur(4px)"), aED.style.position = "absolute", aED.style.top = "0", aED.style.left = "0", aED.style.width = "100%", aED.style.display = "flex", aED.style.alignItems = "center";
	for (var z = [aEE, aEF, aEG, aEK], a4 = 0; a4 < z.length; a4++) z[a4].style.position = "absolute", z[a4].style.left = "0", z[a4].style.width = "100%", aZ.aa.a5C(z[a4]);
	a51.style.position = "absolute", a51.style.left = "0", a51.style.width = "100%", a51.style.font = "inherit", aEH.style.position = "absolute", aEH.style.left = "0", aEH.style.width = "100%", aEI.style.position = "absolute", aEI.style.top = "0",
		aEI.style.left = "0", aEI.style.height = "100%", aEI.style.width = "50%", aEI.style.backgroundColor = t.aEL, aEJ.innerHTML = "", aEJ.style.position = "absolute", aEJ.style.top = "50%", aEJ.style.left = "50%", aEJ.style.transform =
		"translate(-50%, -50%)", aED.appendChild(function() {
			var aD = document.createElement("h1");
			return aD.textContent = L(177), aD.style.margin = "0 auto 0.15em auto", aD.style.fontFamily = "Arial Black, Trebuchet MS", aD.style.fontSize = "inherit", aD.style.fontWeight = "inherit", aD
		}()), aEE.appendChild(bF.ap), aEF.appendChild(b9.ap), aEG.appendChild(aEC.ap), aEH.appendChild(aEI), aEH.appendChild(aEJ), aEK.appendChild(bG.ap), uj.appendChild(aED), uj.appendChild(aEE), uj.appendChild(aEF), uj.appendChild(aEG), uj
		.appendChild(a51), uj.appendChild(aEH), uj.appendChild(aEK), vB.bx.show(a51)
}

function iM() {
	var af, hS = !1,
		aEX = !1,
		aEY = -1e4,
		aEZ = -1,
		aEa = 0;

	function resize(aEf) {
		af = 0, gQ.a7m() && (aEd(aEf) || hS) && (hS = !1, ac.resize(), h8.aEg.resize(), gP.ck(), hA.ck(), eQ.resize(), gL.resize(), eP.resize(), aT.resize(), 1 <= eq.ku ? (gN.resize(!1), gM.resize(), at.resize(), gK.resize(), gJ.resize(), gG
		.resize(), gF.resize(), gs.resize(), gh.resize(), gH.resize(), gI.resize(), gE.resize(), hF.resize(), gU.resize(), gO.resize(), hH.resize(), gK.aAc()) : (eY.aEh(), eY.aEi()), eW.eX = !0)
	}

	function aEb(a9) {
		return a9 && 128 < a9 ? Math.floor(a9) : 128
	}

	function aEd(aEf) {
		var cv, cw, aEk, pM, aC;
		if (!(0 < eR.a2a)) return pM = aEb(document.documentElement.clientWidth), aC = aEb(window.visualViewport && 2 !== d0.id ? window.visualViewport.height : document.documentElement.clientHeight), cv = pM, cw = aC, aEk = 0 !== d0.id || cv < cw ?
			700 : 1200, aEk = Math.min(aEk / ((cv + cw) / 2), 1), aEk = 0 === bp.cy.data[1].value ? 2 * aEk / 3 : Math.min(aEk + (bp.cy.data[1].value - 1) * (1 - aEk) / 2, 1), eR.rt = (window.devicePixelRatio || 1) * aEk, __fx.hoveringTooltip
			.canvasPixelScale = eR.rt, aEf && !aEX ? (aEX = !0, aT.removeChild(document.body, a2C)) : aEX && (aEX = !1, document.body.appendChild(a2C)), cv = Math.floor(.5 + pM * eR.rt), cw = Math.floor(.5 + aC * eR.rt), cv !== eR.cv || cw !== eR
			.cw ? (eR.cv = cv, eR.cw = cw, eR.min = pH(cv, cw), eR.max = pG(cv, cw), eR.lS = cf.cg(cv + cw, 2), eR.a5H = cv / cw, a2C.width = cv, a2C.height = cw, a2C.style.width = pM + "px", a2C.style.height = aC + "px", aEZ = eW.av + 1e3, 1) :
			void 0
	}
	this.cv = 0, this.cw = 0, this.min = 0, this.max = 0, this.lS = 0, this.a5H = 1, this.rt = 1, this.a2a = 0, this.jB = function() {
		this.cv = aEb(document.documentElement.clientWidth) + 2, this.cw = aEb(document.documentElement.clientHeight) + 2
	}, this.ck = function() {
		af = 1, a2C = document.getElementById("canvasA"), 2 === d0.id && (a2C.style.webkitUserSelect = "none"), (m0 = a2C.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aEd(0)
	}, this.w = function() {
		50 <= ++af && resize(0), -1 === aEZ || eW.av < aEZ || (aEZ = -1, 2e3 * ++aEa >= eW.av + 8e3 ? console.log("error 3748") : d0.jF.setState(15))
	}, this.jL = function(ru) {
		hS = !0, resize(ru)
	}, this.a2h = function() {
		aEY + 1e3 > eW.av || (aEY = eW.av, resize(0))
	}
}

function a19(aEm, aEn, aEo) {
	this.dF = 0, this.dE = 0, this.cv = 0, this.cw = 0, this.resize = function() {
		this.cw = Math.min(aZ.aa.aCy(aEo || .5) * aEm[1] * eR.lS, eR.cw - 2 * ac.gap), this.cv = Math.min(this.cw * (aEm[0] / aEm[1]), eR.cv - 2 * ac.gap), this.cw = aEm[1] * this.cv / aEm[0], this.dF = ac.gap + aEn[0] * (eR.cv - this.cv - 2 * ac
			.gap), this.dE = ac.gap + aEn[1] * (eR.cw - this.cw - 2 * ac.gap)
	}, this.aEp = function() {
		return this.dF + .5 * this.cv
	}
}

function iY() {
	this.size = 0, this.aB = 0, this.dy = null, this.ck = function(dy) {
		this.aB = 0, this.dy = dy, this.size = dy.length
	}, this.bi = function() {
		this.dy = null
	}, this.jT = function(size) {
		for (var a9 = 0, dy = this.dy, mx = this.aB + size - 1, a4 = this.aB; a4 <= mx; a4++) a9 |= (dy[a4 >> 3] >> 7 - (7 & a4) & 1) << mx - a4;
		return this.aB += size, this.aB > 8 * this.size && console.error("Unwrapper Overflow"), a9
	}, this.aEq = function(size) {
		var bw = size >> 1;
		return (1 << bw) * this.jT(size - bw) + this.jT(bw)
	}, this.aCL = function(t7) {
		return this.size === gt.t8(t7)
	}, this.aEr = function(a1b, aEs, aEt) {
		var aI = this.jT(a1b);
		if (!aI) return null;
		for (var a1b = Math.max(aI, aEt), z = new(aEs <= 8 ? Uint8Array : aEs <= 16 ? Uint16Array : Uint32Array)(a1b), a4 = 0; a4 < aI; a4++) z[a4] = this.jT(aEs);
		aEt = z[aI - 1];
		return aEt && z.fill(aEt, aI), z
	}, this.aEu = function(a1b, aEv, aEt) {
		var aI = this.jT(a1b);
		if (!aI) return null;
		for (var a1b = Math.max(aI, aEt), z = new Array(a1b), a4 = 0; a4 < aI; a4++) z[a4] = this.aEw(aEv);
		return z.fill(z[aI - 1], aI), z
	}, this.aEw = function(a1b) {
		return gw.oO.pc(this.jT(a1b))
	}, this.aEx = function() {
		var ax = gv.kF.jU(gv.kF.jP(this.jT(30))),
			ax = aZ.bu.aEy(ax, "_", "/");
		ax = aZ.bu.aEy(ax, "-", "+");
		for (var aEz = "";
			(ax.length + aEz.length) % 4;) aEz += "=";
		ax = "data:image/png;base64," + ax + aEz;
		var b3 = new Image;
		b3.onload = function() {
			gr.aF0.aF1(b3), b3.onload = null, b3 = null
		}, b3.src = ax
	}
}

function aF2() {
	var aP, ev, ew, f4;

	function bM() {
		ez(), 2 === eq.data.playerNamesType && 1 === aZ.cb.zg(eq.data.playerNamesData).length && (eq.data.playerNamesType = 0), 2 !== eq.data.playerNamesType && (eq.data.playerNamesData = null), aT.f0()[19] = null, aT.f1()
	}

	function ez() {
		2 === eq.data.playerNamesType && aZ.cb.aF3(ew.f3(), eq.data.playerNamesData, 20)
	}
	this.show = function() {
		aP.show(), this.resize()
	}, this.aY = function() {
		aP.aY()
	}, this.resize = function() {
		aP.resize(), ev.resize()
	}, this.ae = function(af) {
		2 === af && aP.ag[0].ah()
	}, aP = new aR(L(293), [new aS("⬅️ " + L(1), bM)]), ev = new ex(aP.aV, (function(f4) {
		var f8 = new f9;
		f8.fA(L(21)), f8.fB(new fC({
			fD: [L(294), L(295), L(24)],
			value: eq.data.playerNamesType
		}, function(aB) {
			ez(), eq.data.playerNamesType = aB, aT.bl(23)
		})), f8.fF(new aDs), f8.fF(new a5i({
			value: eq.data.selectableName
		}, L(296), function(value) {
			eq.data.selectableName = value
		})), f4.push(f8)
	}(f4 = []), function(f4) {
		var f8;
		2 === eq.data.playerNamesType && ((f8 = new f9).fA("Data"), ew = new fI(0, 1, 0, 1), eq.data.playerNamesData && eq.data.playerNamesData.length === eq.fE || (eq.data.playerNamesData = new Array(eq.fE), eq.data.playerNamesData.fill(
			"")), ew.fJ(aZ.bu.fK(eq.data.playerNamesData, 1, '"')), f8.fF(ew), f4.push(f8))
	}(f4), f4))
}

function aF4() {
	function aFE() {
		var id = gx.jT(3);
		return 0 === id ? {
			id: id,
			bs: gx.jT(30),
			kG: bQ.be.zk(gw.a4y.aCJ(7))
		} : 1 === id ? {
			id: id,
			bs: gx.jT(30),
			kI: gx.jT(3),
			value: gx.jT(30),
			target: gx.jT(30)
		} : 2 === id ? {
			id: id,
			bs: gx.jT(30),
			kI: gx.jT(3)
		} : 3 === id ? {
			id: id,
			bs: gx.jT(30),
			kI: gx.jT(3),
			value: gx.jT(4),
			target: gx.jT(30)
		} : 4 === id ? {
			id: id,
			bs: gx.jT(30),
			kI: gx.jT(3),
			target: gx.jT(30)
		} : 5 === id ? {
			id: id,
			kI: gx.jT(6)
		} : 6 === id ? {
			id: id,
			value: gx.jT(17)
		} : null
	}
	this.a3F = function(dj) {
		if (dj !== bj.bW.yI) bj.bW.close(dj, 3239);
		else if (6 !== eY.tP()) bj.bW.close(dj, 3271);
		else {
			bQ.ck();
			for (var a4 = 0; a4 < 4; a4++) {
				var cA = bQ.bW.cB[a4],
					playerCount = (cA.cO = gx.jT(10), cA.cE = gx.jT(6), cA.mapSeed = gx.jT(14), cA.cI = gx.jT(4), cA.cJ = gx.jT(6), cA.cK = gx.jT(4), cA.cV = gx.jT(1), cA.cM = gx.jT(12), cA.spawningSeed = gx.jT(14), gx.jT(16));
				bQ.cP.cT[a4] = gx.jT(16);
				for (var aN = 0; aN < playerCount; aN++) bQ.cP.l8(a4, gx.jT(30), gw.a4y.aCJ(5), gx.jT(4), gx.jT(30), gx.jT(7), gx.jT(16), gx.jT(18), gx.jT(11), gx.jT(12))
			}
			aT.bl(29), bQ.bW.aF5(!0)
		}
	}, this.a3R = function(dj) {
		if (dj !== bj.bW.yI) bj.bW.close(dj, 3239);
		else if (bQ.bZ) {
			bQ.bW.ca[0] = gx.jT(20), bQ.bW.ca[1] = gx.jT(20);
			for (var aF6 = gx.jT(16), aN = 0; aN < aF6; aN++) {
				var id = gx.jT(3);
				0 === id ? bQ.cP.l8(gx.jT(2), gx.jT(30), gw.a4y.aCJ(5), 0, 1234566, 127, 0, gx.jT(18), 0, gx.jT(12)) : 1 === id ? bQ.cP.aF7(gx.jT(16), gx.jT(2)) : 2 === id ? bQ.cP.aF8(gx.jT(16), gx.jT(2), gx.jT(2)) : 3 === id ? bQ.cP.aF9(gx.jT(
					16), gx.jT(2)) : 4 === id ? bQ.cP.aFA(gx.jT(16), gx.jT(2), gx.jT(4), gx.jT(30), gx.jT(7), gx.jT(16), gx.jT(11)) : 5 === id && bQ.cP.aFB(gx.jT(16), gx.jT(2), gx.jT(1))
			}
			for (var a4 = 0; a4 < 4; a4++) {
				var cA = bQ.bW.cB[a4];
				if (cA.cO = gx.jT(10), 0 === cA.cO) {
					if (cA.oV = gx.jT(10), cA.sv = gx.jT(10), bQ.aFC.jJ(a4)) return;
					cA.cE = gx.jT(6), cA.mapSeed = gx.jT(14), cA.cI = gx.jT(4), cA.cJ = gx.jT(6), cA.cK = gx.jT(4), cA.cV = gx.jT(1), cA.cM = gx.jT(12), cA.spawningSeed = gx.jT(14), cA.sy.push(cA.sy[0]), cA.sy.shift()
				}
			}
			bQ.bW.pv()
		} else bj.bW.close(dj, 3251)
	}, this.a3S = function(dj) {
		if (dj !== bj.bW.yI) bj.bW.close(dj, 3272);
		else if (bQ.bZ) {
			for (var kS = gx.jT(4), cA = bQ.bW.cB[kS], kl = cA.kl, a5s = (cA.sw = gx.jT(20), gx.jT(6)), a4 = 0; a4 < a5s; a4++) {
				var aFD = aFE();
				bQ.b1.aFF(aFD), kl.push(aFD)
			}
			bQ.bW.aFG(kS)
		} else bj.bW.close(dj, 3273)
	}, this.a3T = function(dj) {
		dj !== bj.bW.yI ? bj.bW.close(dj, 3276) : bQ.bZ ? bQ.message.pp(aFE()) : bj.bW.close(dj, 3277)
	}
}

function iL() {
	var aCS, mC;
	this.ck = function() {
		aCS = 1, mC = 0
	}, this.w = function() {
		0 < aCS && (mC = 0 === mC ? eW.av + 16 : mC, aCS = (aCS -= .001 * (eW.av - mC)) < 0 ? 0 : aCS, mC = eW.av, eW.eX = !0)
	}, this.eZ = function() {
		0 < aCS && (m0.fillStyle = "rgba(0,0,0," + aCS + ")", m0.fillRect(0, 0, eR.cv, eR.cw))
	}
}

function L(value, aFJ, fx, aFK) {
	var ax = "number" == typeof value ? gp.w0[value] : value;
	if (fx && gp.w8() && (ax = fx), !aFJ) return aFK ? ax.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : ax;
	for (var a5 = aFJ.length, a4 = 0; a4 < a5; a4++)
		for (var aN = 0; aN < 3; aN++) ax = ax.replace("{" + (10 * aN + a4) + "}", aFJ[a4]);
	return ax
}

function hr() {
	var z, aFL, aFM, aB8, gap, aFN, aFO, aFP, aFQ, aFR, lM, aFS, aFT, aFU, lZ, aAV, aFV;

	function aFY() {
		aB8 = Math.floor(.2 * (d0.jF.lR() ? .07 : .035) * eR.lS), aB8 = pG(d0.jF.lR() ? 3 : 1, aB8);
		var aFZ = eR.cv / (z.length + gap);
		aB8 = aB8 < aFZ ? aFZ : aB8, lZ = Math.floor((1 - gap) * aB8), aFL = 0, aFa()
	}

	function aFa() {
		aFL = (aFL = aFL < -20 ? -20 : aFL) > (z.length - 15) * aB8 ? (z.length - 15) * aB8 : aFL, aFO = Math.floor(aFL / aB8), aFP = (aFP = aFO + Math.floor(eR.cv / aB8)) > z.length - 1 ? z.length - 1 : aFP, aFO = (aFO = aFP < aFO ? aFP : aFO) < 0 ?
			0 : aFO;
		var rQ = aFP;
		aFN = aFM / z[rQ];
		for (var a4 = aFP - 1; aFO <= a4; a4--) z[a4] > z[rQ] && (rQ = a4, aFN = aFM / Math.pow(z[a4], aFU))
	}

	function aFd(dF) {
		dF = Math.floor((aFL + eR.cv - dF - gap * aB8) / aB8);
		return (dF = dF < -1 ? -1 : -1 === dF ? 0 : dF > z.length - 1 ? -1 : dF) !== aFQ && (aFQ = dF, -1 === aAV && 0 === aFQ && gL.aCM && (aAV = setInterval(aFe, 100)), 1)
	}

	function aFg(a4) {
		var qx = Math.floor(aFN * Math.pow(z[a4], aFU));
		m0.fillRect(aFL + eR.cv - (a4 + 1) * aB8, eR.cw - qx, lZ, qx)
	}

	function aFe() {
		var ec;
		0 !== (aFQ = 8 === eY.tP() ? -1 : aFQ) ? (aFV = (new Date).getTime(), clearInterval(aAV), aAV = -1) : (ec = z[1] / 864e3, -1 !== aFV && (ec += ((new Date).getTime() - aFV) * z[1] / 864e5, aFV = -1), 0 < ec && (z[0] += Math.floor(ec), eW
			.eX = !0))
	}
	this.aCM = !1, this.ck = function() {
		aFV = aAV = -1, aFQ = -(aFU = 1), this.aFW = !1, aFT = 0, aFS = new Date, aFL = 0, gap = .3, z = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aFM = Math.floor(.15 * eR.cw), aFR = (aFR = Math.floor((d0.jF.lR() ? .018 : .0137) * eR.lS)) < 2 ? 2 : aFR, lM = aZ.aa.lT(1, aFR), aFY()
	}, this.a3X = function(wD) {
		var a4;
		for (this.aCM = !0, a4 = 0; a4 < wD.length; a4++) z.unshift(wD[a4]);
		aFY(), eW.eX = !0
	}, this.aFb = function() {
		aFa()
	}, this.ly = function(dF, dE) {
		dE > eR.cw - .6 * aFM ? this.aFW ? dF !== aFT && (aFL += dF - aFT, aFT = dF, aFa(), aFd(dF), this.aFW = -1 !== aFQ, eW.eX = !0) : aFd(dF) && (eW.eX = !0) : this.bz()
	}, this.bz = function() {
		-1 !== aFQ && (this.aFW = !1, aFQ = -1, eW.eX = !0)
	}, this.lx = function(dF, deltaY) {
		-1 !== aFQ && (aFL += Math.floor(deltaY), aFa(), aFd(dF), eW.eX = !0)
	}, this.lp = function(dF, dE) {
		this.ly(dF, dE), -1 !== aFQ && (aFT = dF, this.aFW = !0)
	}, this.a2W = function() {
		-1 !== aFQ && (this.aFW = !1)
	}, this.eZ = function() {
		m0.fillStyle = t.aFf;
		for (var aFk, month, jl, pN, aFn, aFo, ma, aFp, aFq, a4 = aFP; aFO <= a4; a4--) aFg(a4);
		this.aCM && 0 === aFO && (m0.fillStyle = t.aFh, aFg(0)), -1 !== aFQ && (m0.fillStyle = t.aFi, aFg(aFQ)), -1 !== aFQ && (m0.font = lM, aZ.aa.textBaseline(m0, 2), (jl = new Date).setTime(aFS.getTime() - 1e3 * aFQ * 60 * 60 * 24), month =
			"month", aFk = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(jl), aFk = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(jl)), aFk = aFk + ", " + jl.getUTCDate() + " " + month + " " + jl.getFullYear(), month = 1 === z[aFQ] ? L(297) : L(298), month = aZ.bu.jW(z[aFQ]) + " " + month, jl = Math.floor(m0.measureText(aFk).width), pN = Math
			.floor(m0.measureText(month).width), aFn = Math.floor(.5 * (jl + aFR)), aFo = (aFo = aFL + eR.cv - (aFQ + 1) * aB8) < aFn ? aFn : aFo > eR.cv - aFn ? eR.cv - aFn : aFo, ma = eR.cw - Math.floor(aFN * Math.pow(z[aFQ], aFU)), aFp =
			Math.floor(1.1 * aFR), aFq = ma > eR.cw - aFp ? eR.cw - aFp : ma, m0.fillStyle = t.qO, m0.fillRect(eR.cv - pN - aFR, aFq - aFp, pN + aFR, aFp), m0.fillRect(aFo - aFn, eR.cw - aFp, jl + aFR, aFp), m0.fillStyle = t.u, aZ.aa
			.textAlign(m0, 2), m0.fillText(month, Math.floor(eR.cv - .5 * aFR), aFq), aZ.aa.textAlign(m0, 1), m0.fillText(aFk, aFo, eR.cw), m0.strokeStyle = t.aFr, m0.lineWidth = 1, m0.beginPath(), m0.moveTo(0, ma), m0.lineTo(eR.cv, ma), m0
			.closePath(), m0.stroke())
	}
}

function aFs() {
	var aFt, aFu, aFv, uK, aFw, aB = 0,
		av = eW.av;

	function aG0() {
		! function() {
			if (!eq.l3) return;
			if (eq.l6) return;
			if (2 !== eq.ku)
				if (aFw % 7 != 0) aFw++;
				else if (uK === eq.rj) {
				if (!aG3()) return;
				at.rg(uK), eq.l7.w()
			} else {
				if (!aG3()) return;
				aFw++, uK++, gU.uP(), gU.l0(!0)
			}
			return 1
		}() && aG3() && qg()
	}

	function aG1() {
		aB = 0, (eq.l3 ? (eW.eX = at.rg(uK - (aFw % 7 == 0 ? 0 : 1) + aFw % 7 / 7) || eW.eX, qn) : gF.lf || !gs.a18 ? qn : (eW.eX = !0, qm))()
	}

	function aG3() {
		var a4, a5, aG4 = gr.aE8.a8g,
			tz = gr.aE8.a8h,
			u1 = gr.aE8.a8i,
			a4B = gr.aE8.a8j,
			aG5 = gr.aE8.a8k,
			aG6 = gr.aE8.a8l;
		if (!(aFt >= aG6.length)) {
			if (aG6 = aG6[aFt], aG5[aFt]) {
				for (a5 = aFu + aG6, a4 = aFu; a4 < a5; a4++) gq.h.aG7(aG4[a4], tz[a4], u1[a4], a4B[a4]);
				aFu += aG6, aFt++
			} else ++aFv >= aG6 && (aFt++, aFv = 0);
			return 1
		}
		gG.a9m("Replay file smaller than expected."), gs.a1E(!1), eq.ku = 2
	}
	this.eO = 0, this.ck = function() {
		aFw = uK = aFv = aFu = aFt = 0
	}, this.w = function() {
		var aFz;
		eR.w(), gs.a1A() < 1.7 ? 0 === aB ? eW.av >= av && (aFz = eW.rf / gs.a1A(), av += aFz * Math.floor(1 + (eW.av - av) / aFz), 2 === eq.ku || gF.lf || !gs.a18 ? qe() : (aG0(), hD.q2()), aB++) : aG1() : function() {
			var aFz;
			if (eW.av >= av)
				if (2 === eq.ku || gF.lf || !gs.a18) qe(), av = eW.av;
				else {
					for (aFz = eW.rf / gs.a1A(), 16 < (eW.av - av) / aFz && (av = eW.av - 16 * aFz); eW.av >= av && 2 !== eq.ku;) av += aFz, aG0();
					hD.q2()
				} aG1()
		}(), qk(), eW.eX && (eW.eX = !1, qG())
	}, this.aG8 = function() {
		gr.aE8.a8l.length - aFt <= 2 || gG.a9m("Replay file larger than expected.")
	}
}

function aG9() {
	var aGA = null;
	this.a0I = 0, this.aGB = function() {
		var a9 = bp.cy.data[5].value;
		aGA = "px " + a9, "Trebuchet MS" !== a9 && (aGA += ", Trebuchet MS"), this.a0I = sz(32, 32, ["a", "b", "m"], 200, aGA)
	}, this.aEc = function(cv, cw) {
		var af = document.createElement("canvas");
		return af.width = cv, af.height = cw, af
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(lI, cv, cw) {
		return lI.getImageData(0, 0, cv, cw)
	}, this.lT = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + aGA : 1 === type ? "bold " + size + aGA : 2 === type ? "lighter " + size + aGA : 3 === type ? "italic " + size + aGA : 4 === type ? "oblique " + size + aGA : 5 === type ? "small-caps " +
			size + aGA : "small-caps bold " + size + aGA
	}, this.textAlign = function(d6, id) {
		d6.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(d6, id) {
		d6.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.ot = function(bd, code, color) {
		color = this.ab(ac.rw) + " solid " + (color || t.u);
		5 === (code = code || 5) ? bd.style.border = color : 4 === code ? bd.style.borderLeft = color : 2 === code ? bd.style.borderBottom = color : 6 === code ? bd.style.borderRight = color : bd.style.borderTop = color
	}, this.a7k = function(bd, dF, dE, cv, cw) {
		bd = bd.style;
		bd.left = this.a7l(dF), bd.top = this.a7l(dE), bd.width = this.a7l(cv), bd.height = this.a7l(cw)
	}, this.aCy = function(a9) {
		return 1 + a9 * d0.jF.lR()
	}, this.nK = function(d3, lE) {
		return d3 * this.aCy(void 0 === lE ? .5 : lE) * eR.lS / eR.rt
	}, this.a7j = function(d3, lE) {
		return d3 * this.aCy(void 0 === lE ? .5 : lE) * eR.lS
	}, this.aCH = function(d3, lE, aGC) {
		return this.aCy(lE) * Math.min(d3 * eR.lS, aGC * eR.cv) / eR.rt
	}, this.ab = function(a9) {
		return a9.toFixed(1) + "px"
	}, this.a7l = function(a9) {
		return this.nJ(a9).toFixed(1) + "px"
	}, this.nJ = function(a9) {
		return a9 / eR.rt
	}, this.ta = function(tX, tY) {
		for (var ax = "<ul>", a5 = tX.length, a4 = 0; a4 < a5; a4++) ax += "<li>" + tX[a4] + ": <a href='" + tY[a4] + "' target='_blank'>" + tY[a4] + "</a></li>";
		return ax += "</ul>"
	}, this.aGE = function(aGF) {
		return "<a href='" + aGF + "' target='_blank'>" + aGF + "</a>"
	}, this.aGG = function(bd) {
		navigator.clipboard && navigator.clipboard.writeText(bd.value)
	}, this.g3 = function(bd) {
		var jl = bd.textContent;
		aZ.bu.bv(jl, "✔") || (1 === jl.length ? bd.textContent = "✔" : bd.textContent = jl + " ✔", setTimeout(function() {
			bd.textContent = jl
		}, 500))
	}, this.measureText = function(ax) {
		return m0.measureText(ax).width
	}, this.a5C = function(aGH) {
		aGH.style.overflowX = "auto", aGH.style.overflowY = "hidden", aGH.style.whiteSpace = "nowrap", aGH.addEventListener("wheel", function(bd) {
			Math.abs(bd.deltaY) < Math.abs(bd.deltaX) || (this.scrollLeft += bd.deltaY, this.a5K = this.scrollLeft, bd.preventDefault())
		}), aGH.addEventListener("scroll", function() {
			this.a5K = this.scrollLeft
		})
	}
}

function aGI() {
	this.jJ = function(aB) {
		if ((cT = bQ.cP.cT[aB]) < 2) return !1;
		var cA = bQ.bW.cB[aB],
			aGJ = 9 === cA.cI ? 333 : 512,
			cT = Math.min(cT, aGJ);
		8 === cA.cI && (cT -= cT % 2);
		aGJ = bQ.cP.cQ[aB].splice(0, cT), bQ.cP.cT[aB] -= cT, cT = function(aGK) {
			if (bQ.kb)
				for (var a5 = aGK.length, bs = bQ.kb.bs, a4 = 0; a4 < a5; a4++)
					if (aGK[a4].bs === bs) return a4;
			return -1
		}(aGJ);
		return -1 === cT ? (bQ.cP.aGN = bQ.cP.aGN.concat(aGJ), 1e3 < bQ.cP.aGN.length && bQ.cP.aGN.splice(0, bQ.cP.aGN.length - 1e3), bQ.bW.aGO += 29 === aT.dK && bQ.bW.bX[0] === aB && 1 === bQ.bW.bX[2], !1) : (8 === cA.cI && (cA.sv = (cA.sv + (
			cT >> 1)) % 1024, aB = cT - cT % 2, cT %= 2, aGJ = aGJ.slice(aB, 2 + aB)), eS.ck(cA, aGJ, cT), !0)
	}, this.aGP = function(cA, aGK, aGL) {
		var dh = eq.data = new a3e,
			a3h = (dh.spawningSeed = cA.spawningSeed, cA.cI < 7 ? (dh.gameMode = 1, dh.numberTeams = cA.cI + 2) : 9 === cA.cI ? (dh.gameMode = dh.isZombieMode = 1, dh.numberTeams = 2) : (dh.gameMode = 0, dh.battleRoyaleMode = 7 === cA.cI ? 0 :
				10 === cA.cI ? 1 : 2), dh.selectedPlayer = aGL, dh.isContest = cA.cV, dh.mapType = cC.tt(cA.cE) ? 0 : 1, cC.uA(dh, cA.cE), dh.mapSeed = cA.mapSeed, dh.humanCount = aGK.length);
		dh.selectableSpawn = 1 === dh.gameMode || a3h < 100, dh.colorsData = new Uint32Array(a3h), dh.playerNamesData = new Array(a3h);
		for (var a4 = 0; a4 < a3h; a4++) dh.colorsData[a4] = aGK[a4].color, dh.playerNamesData[a4] = aGK[a4].username;
		if (2 === dh.battleRoyaleMode)
			for (dh.elo = new Uint16Array(a3h), a4 = 0; a4 < a3h; a4++) dh.elo[a4] = aGK[a4].elo;
		eY.setState(8), cC.cD(cA.cE, dh.mapSeed), eq.a3j(), eq.aE0 = 2
	}
}

function tj() {
	function aGb() {
		cC.ti.w()
	}

	function aGh(ec, aGg) {
		0 < aGg && (cC.tg[ec] += aGg, cC.tg[ec + 1] += aGg, cC.tg[ec + 2] += aGg)
	}

	function yn(ec) {
		return cC.tg[ec + 2] > cC.tg[ec] && cC.tg[ec + 2] > cC.tg[ec + 1]
	}
	this.aAV = -1, this.aGQ = 0, this.aGR = 0, this.aGS = 8, this.aGT = 32, this.aGU = 8, this.aGV = 32, this.aGW = [0, 0], this.lY = [0, 0, 0, 0], this.zH = null, this.aGX = !0, this.aGY = !1, this.tq = function() {
		-1 !== this.aAV && clearTimeout(this.aAV), this.aAV = -1, this.zH = null, gc.tx()
	}, this.ck = function() {
		7 === eY.tP() || this.aGY || (this.aGX = !0, this.aGQ = 0, this.aGR = 1, this.aGW = [cC.cF.cG[cC.cE].aGZ[0], cC.cF.cG[cC.cE].aGa[0]], this.lY = [cC.cF.cG[cC.cE].u8[3], cC.cF.cG[cC.cE].u8[4], cC.cF.cG[cC.cE].u8[5], cC.cF.cG[cC.cE].u8[6]],
			this.aGS = cC.cF.cG[cC.cE].u8[7], this.aGT = cC.cF.cG[cC.cE].u8[8], this.aGU = cC.cF.cG[cC.cE].u8[9], this.aGV = cC.cF.cG[cC.cE].u8[10], this.aGX ? this.aAV = setTimeout(aGb, 16) : this.w())
	}, this.w = function() {
		if (8 === eY.tP() && gA.mL()) this.aAV = setTimeout(aGb, 16);
		else {
			if (0 === this.aGQ) {
				var ts = gi.yJ();
				if (gi.tr(cC.cF.cG[cC.cE].u8[2]), gc.cD([cC.mO, cC.mP, cC.cF.cG[cC.cE].u8[0], cC.cF.cG[cC.cE].u8[1]]), gi.tr(ts), this.zH = gc.aBW(), this.aGQ++, this.aGX) return void(this.aAV = setTimeout(aGb, 16))
			}
			for (var ec, mV, ts = this.aGX ? 10 : 1e6, ts = cC.mP - this.aGR - 1 < ts ? cC.mP - this.aGR - 1 : ts, aGc = this.aGR + ts, dE = this.aGR; dE < aGc; dE++)
				for (var dF = 1; dF < cC.mO - 1; dF++) yn(ec = 4 * (mV = dF + dE * cC.mO)) ? this.aGd(ec, mV, 1) : (this.aGd(ec, mV, 0), function(dF, dE, ec) {
					return 1 < dF && yn(ec - 4) || dF < cC.mO - 2 && yn(ec + 4) || 1 < dE && yn(ec - 4 * cC.mO) || dE < cC.mP - 2 && yn(ec + 4 * cC.mO)
				}(dF, dE, ec) && this.aGf(dF, dE));
			this.aGR = aGc, this.aGR >= cC.mP - 1 ? (cC.te.putImageData(cC.tf, 0, 0, 1, 1, cC.mO - 2, cC.mP - 2), eW.eX = !0, this.tq()) : this.aGX && (this.aAV = setTimeout(aGb, 16))
		}
	}, this.aGd = function(ec, mV, aB) {
		aGh(ec, Math.floor(this.aGW[aB] + this.lY[aB] * this.zH[mV] / 1e4) - cC.tg[ec])
	}, this.aGi = function(ec, t6, aGj, aB, lY) {
		aGh(ec, Math.floor(this.aGW[aB] + (1 - t6 / aGj) * lY) - cC.tg[ec])
	}, this.aGf = function(ll, lm) {
		for (var ec, t6, aGj, aFL = ll - this.aGT, aGk = lm - this.aGT, aGl = ll + this.aGT, aGc = lm + this.aGT, aFL = aFL < 1 ? 1 : aFL, aGl = aGl > cC.mO - 2 ? cC.mO - 2 : aGl, aGc = aGc > cC.mP - 2 ? cC.mP - 2 : aGc, dE = aGk < 1 ? 1 :
			aGk; dE <= aGc; dE++)
			for (var dF = aFL; dF <= aGl; dF++) yn(ec = 4 * (dF + dE * cC.mO)) ? (aGj = this.aGS + (this.aGT - this.aGS) * this.zH[dF + cC.mO * dE] / 1e4, Math.abs(ll - dF) > aGj || Math.abs(lm - dE) > aGj || aGj <= (t6 = Math.sqrt((ll - dF) * (
				ll - dF) + (lm - dE) * (lm - dE))) || this.aGi(ec, t6, aGj, 1, this.lY[3])) : (aGj = this.aGU + (this.aGV - this.aGU) * this.zH[dF + cC.mO * dE] / 1e4, Math.abs(ll - dF) > aGj || Math.abs(lm - dE) > aGj || aGj <= (t6 = Math
				.sqrt((ll - dF) * (ll - dF) + (lm - dE) * (lm - dE))) || this.aGi(ec, t6, aGj, 0, this.lY[2]))
	}
}

function iX() {
	this.ck = function() {
		this.z = [], this.aB = 0
	}, this.a4z = function() {
		return new Uint8Array(this.z)
	}, this.oG = function(aGm, value) {
		for (var z = this.z, mx = this.aB + aGm - 1, aGn = 1 + (mx >> 3); z.length < aGn;) z.push(0);
		for (var a4 = this.aB; a4 <= mx; a4++) z[a4 >> 3] |= (value >> mx - a4 & 1) << 7 - (7 & a4);
		this.aB += aGm
	}, this.jI = function(z, a1b, aEs) {
		var aGo = aZ.cb.aGp(z);
		this.oG(a1b, aGo);
		for (var a4 = 0; a4 < aGo; a4++) this.oG(aEs, z[a4])
	}, this.aGq = function(z, a1b, aEv) {
		var aGo = aZ.cb.aGp(z);
		this.oG(a1b, aGo);
		for (var a4 = 0; a4 < aGo; a4++) this.aGr(z[a4], aEv)
	}, this.aGr = function(ax, a1b) {
		var a5 = ax.length;
		this.oG(a1b, a5);
		for (var a4 = 0; a4 < a5; a4++) this.oG(16, ax.charCodeAt(a4))
	}, this.aGs = function(a46) {
		var aGt = (a46 = a46.toDataURL()).split(",");
		if (aGt.length < 2) console.log("error 266");
		else {
			a46 = aZ.bu.aEy(a46 = aGt[aGt.length - 1], "/", "_"), a46 = aZ.bu.aEy(a46, "\\+", "-");
			var a46 = aZ.bu.aEy(a46, "=", ""),
				jS = gw.kF.yf(a46),
				a5 = jS.length;
			this.oG(30, a5);
			for (var a4 = 0; a4 < a5; a4++) this.oG(6, jS[a4])
		}
	}
}

function aGu() {
	var aGv = [];
	this.ck = function() {
		aGv = []
	}, this.aGw = function() {
		return 65536 === aGv.length
	}, this.aGx = function(aGy, aGz) {
		for (var aH0 = aGv, a5 = aH0.length, a4 = 0; a4 < a5; a4++) {
			var ec = aH0[a4];
			if (ec[0] === aGy && ec[ec.length - 1] === aGz) return a4
		}
		return -1
	}, this.aH1 = function(e0) {
		var aH2 = new Uint32Array(e0.length);
		return aH2.set(e0), aH2.reverse()
	}, this.aH3 = function(a4U, a4V) {
		var aI = a4U.length - 1,
			aH4 = new Uint32Array(aI + a4V.length);
		return aH4.set(a4U, 0), aH4.set(a4V, aI), aH4
	}, this.aH5 = function(a4U, a4V, aDm, mV, aH6) {
		aH6 && (aDm = (a4V = this.aH1(a4V)).length - aDm - 2);
		aH6 = a4V.subarray(aDm + 1 + (mV === a4V[aDm + 1])), mV = new Uint32Array(a4U.length + aH6.length);
		return mV.set(a4U, 0), mV.set(aH6, a4U.length), mV
	}, this.aH8 = function(e0) {
		return aGv.push(e0), aGv.length - 1
	}, this.get = function(a4) {
		return aGv[a4]
	}, this.aH9 = function() {
		return aGv
	}, this.aHA = function(aGy, aGz) {
		return null
	}
}

function aHB(data) {
	var jq, a1g;
	this.show = function() {
		data.aHC && gy.aIA("account", data.bs), jq.show(), this.resize()
	}, this.aY = function() {
		jq.aY()
	}, this.resize = function() {
		jq.resize(), a1g.resize()
	}, this.ae = function(af) {
		2 === af && jq.ag[0].ah()
	}, jq = new aR(data.username, [new aS("⬅️ " + L(1), function() {
		gy.clear(), aT.f1()
	}), new aS(data.aHC ? "🔄 " + L(299) : L(300), function() {
		aT.bl(8, data.aHC ? aT.c0().dk : void 0, new jw(25, {
			aAQ: 0,
			bs: data.bs,
			a5Y: data.a5Y
		}))
	}, 0, 0, 1)]), a1g = new ex(jq.aV, function() {
		var f4 = [];
		f4.push(function() {
				var f8 = new f9,
					kH = (f8.fA(L(349)), data.aHj);
				kH < 1 ? (f8.fp(L(350)), 0 === data.aHk ? f8.fs(L(351)) : 1 === data.aHk ? f8.fs(L(352)) : 2 === data.aHk ? f8.fs(L(353)) : 3 === data.aHk ? f8.fs(L(354)) : 4 === data.aHk ? f8.fs(L(355)) : 5 === data.aHk ? f8.fs(L(356)) :
					6 === data.aHk ? f8.fs(L(357)) : f8.fs(L(358))) : (f8.fp(L(359)), kH = kH < 2 ? L(360) : kH < 61 ? 2 === kH ? L(361) : L(362, [kH - 1]) : kH < 84 ? 61 === kH ? L(363) : L(364, [kH - 60]) : kH < 255 ? 84 === kH ? L(
					365) : L(366, [kH - 83]) : L(367), f8.fs(kH));
				{
					var fr, aHW;
					f8.fF(new aDs), data.aHC && (fr = f8.fs(), f8.fF(new fv([new aS(bp.pt.pu(data.bs) ? L(368) : L(369), function(bd) {
						return bp.pt.a1V(data.bs) ? (bd.textContent = L(368), aHW(1)) : (bd.textContent = L(369), aHW(0)), !0
					}).button])), aHW = function(a9) {
						fr.textContent = a9 ? L(370) : ""
					}, bp.pt.pu(data.bs) && aHW(1), f8.fF(new aDs))
				}
				var bc = new fG({
					value: data.username,
					aB: -1
				});
				bc.bd.readOnly = !0, f8.fF(bc), f8.fF(new fv([new aS(L(320), function(bd) {
					return aZ.aa.aGG(bc.bd), aZ.aa.g3(bd), !0
				}).button])), data.aHC ? (f8.fF(new aDs), f8.fp("<a href='https://territorial.io/wiki/reports' target='_blank'>territorial.io/wiki/reports</a>", "0.75em").style.marginBottom = "0.8em", f8.fF(new fv([new aS(L(372),
					function(bd) {
						return bj.g5.aAU({
							aAQ: 3,
							bs: data.bs,
							value: 0
						}), aZ.aa.g3(bd), !0
					}, t.oy).button])), f8.fF(new fv([new aS(L(373), function(bd) {
					return bj.g5.aAU({
						aAQ: 3,
						bs: data.bs,
						value: 1
					}), aZ.aa.g3(bd), !0
				}, t.oy).button])), f8.fF(new fv([new aS("Cheater", function(bd) {
					return bj.g5.aAU({
						aAQ: 3,
						bs: data.bs,
						value: 2
					}), aZ.aa.g3(bd), !0
				}, t.oy).button])), f8.fF(new fv([new aS("False Reporter", function(bd) {
					return bj.g5.aAU({
						aAQ: 3,
						bs: data.bs,
						value: 3
					}), aZ.aa.g3(bd), !0
				}, t.oy).button]))) : f8.fs(L(371));
				return f8
			}()),
			function(f4) {
				var f8, fr, wE, ft, aHX, a1x, g4;
				data.aHC || ((f8 = new f9).fA(L(374)), (fr = f8.fs(data.aHl.length + " / 160")).style.textAlign = "center", wE = !0, (ft = new fI(0, 1, function(bd) {
					bd = bd.target.value.length;
					fr.textContent = bd + " / 160", 160 < bd ? wE && (wE = !1, a1x.c6(1)) : wE || (wE = !0, a1x.c6(0))
				})).bd.rows = 6, ft.bd.style.fontSize = "1em", ft.fJ(data.aHl), f8.fF(ft), 0 !== data.aHm ? (a1x = new aS(L(375), function() {
					if (!wE) return !0;
					aT.bl(8, aT.c0().dk, new jw(29, {
						aAQ: 1,
						ax: ft.f3().substring(0, 160)
					}))
				}, 0, 0, 1), f8.fF(new fv([a1x.button])), f8.fF(new fv([new aS(1 === data.aHm ? L(376) : L(377), function() {
					aT.bl(8, aT.c0().dk, new jw(29, {
						aAQ: 0,
						ax: ""
					}))
				}, 0, 0, 1).button])), f8.fs(1 === data.aHm ? L(378, [data.aHn - 1]) : L(379, [data.aHn - 1])), f8.fs(L(380, [data.aHo]))) : (aHX = new aS(L(381), function() {
					if (!ft.bd.readOnly) return !0;
					aT.bl(8, aT.c0().dk, new jw(29, {
						aAQ: 1,
						ax: ft.f3().substring(0, 160)
					}))
				}, 1), a1x = new aS(L(37), function(bd) {
					if (bd.textContent === L(37)) {
						if (!wE) return !0;
						bd.textContent = L(36), ft.bd.readOnly = !0, aHX.c6(0), aHX.button.style.color = t.dS
					} else g4();
					return !0
				}), f8.fF(new fv([a1x.button])), f8.fs(L(380, [data.aHo])), g4 = function() {
					a1x.button.textContent = L(37), ft.bd.readOnly = !1, aHX.c6(1), aHX.button.style.color = t.u
				}, f8.fF(new fv([aHX.button]))), f4.push(f8))
			}(f4),
			function(f4) {
				var f8;
				data.aHC && 0 !== data.aHm && ((f8 = new f9).fA(L(382)), f8.aHp(data.aHl), f8.fF(new fv([new aS(L(383, 0, "Report"), function(bd) {
					return bj.bW.ds(0) && (aZ.aa.g3(bd), bj.g5.aAT({
						aAQ: 5,
						bs: data.bs
					})), !0
				}, 0, 0, 1).button])), f4.push(f8))
			}(f4), f4.push(function() {
				var f8 = new f9,
					aHR = (f8.fA(L(301)), f8.fp("<a href='https://territorial.io/wiki/gold' target='_blank'>territorial.io/wiki/gold</a>", "0.75em").style.marginBottom = "0.8em", [L(302), L(303), L(304), L(305), L(306), L(307), L(308), L(
						309), L(310), L(311), L(312), L(313), L(314), L(315)]),
					t6 = data.aHS;
				return f8.fp(L(316) + aZ.bu.aHT(data.aAR, .01, 2) + "<br>" + L(317) + (t6 + 1) + " / " + data.aHU + "<br>" + L(318) + aHR[function(t6, aAR) {
					if (t6 < 10) return 0;
					if (t6 < 30) return 1;
					if (t6 < 60) return 2;
					if (3e4 <= (aAR = cf.cg(aAR, 100))) return 3;
					if (12e3 <= aAR) return 4;
					if (7e3 <= aAR) return 5;
					if (3e3 <= aAR) return 6;
					if (1e3 <= aAR) return 7;
					if (500 <= aAR) return 8;
					if (200 <= aAR) return 9;
					if (70 <= aAR) return 10;
					if (20 <= aAR) return 11;
					if (3 <= aAR) return 12;
					return 13
				}(t6, data.aAR)]), f8
			}()), data.aHC && f4.push(function() {
				var f8 = new f9,
					bc = (f8.fA(L(319)), f8.fp("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", new fG({
						value: bp.cy.data[147].value,
						aB: -1
					}, 1, void 0, function(bd) {
						bp.bq.br(147, aHW(bd.target.value))
					})),
					aHX = (f8.fF(bc), new aS(L(85), function(bd) {
						return bc.bd.readOnly && bj.bW.ds(0) && (aZ.aa.g3(bd), g4(), bj.g5.aAU({
							aAQ: 0,
							bs: data.bs,
							value: parseInt(bp.cy.data[147].value, 10)
						})), !0
					}, 1)),
					a1x = new aS(L(37), function(bd) {
						return bd.textContent === L(37) ? (bd.textContent = L(36), bc.bd.readOnly = !0, aHX.c6(0), aHX.button.style.color = t.dS, bp.bq.br(147, bc.bd.value), aHW(bp.cy.data[147].value)) : g4(), !0
					}),
					fr = (f8.fF(new fv([a1x.button])), f8.fs()),
					aHW = function(a9) {
						fr.innerHTML = aT.bW.y9(a9, bp.cy.data[105].value, data.bs)
					},
					g4 = function() {
						a1x.button.textContent = L(37), bc.bd.readOnly = !1, aHX.c6(1), aHX.button.style.color = t.u
					};
				return aHW(bp.cy.data[147].value), f8.fF(new fv([aHX.button])), f8
			}());
		f4.push(function() {
			var f8 = new f9,
				bc = (f8.fA(L(124)), new fG({
					value: data.bs,
					aB: -1
				}));
			return bc.bd.readOnly = !0, f8.fF(bc), f8.fF(new fv([new aS(L(320), function(bd) {
				return aZ.aa.aGG(bc.bd), aZ.aa.g3(bd), !0
			}).button])), f8
		}()), data.aHC || (f4.push(function() {
			var f8 = new f9,
				a1p = (f8.fA(L(125)), new fG(bp.cy.data[106]));
			return a1p.bd.readOnly = !0, a1p.bd.type = "password", f8.fF(a1p), f8.fF(new fv([new aS(L(32), function(bd) {
				return bd.textContent === L(32) ? (bd.textContent = L(126), a1p.bd.type = "text") : (bd.textContent = L(32), a1p.bd.type = "password"), !0
			}).button, new aS(L(320), function(bd) {
				return aZ.aa.aGG(a1p.bd), aZ.aa.g3(bd), !0
			}).button])), f8.fF(new fv([new aS(L(321), function() {
				aT.bl(8, aT.c0().dk, new jw(15))
			}).button])), f8.fA(L(127), "0.8em"), f8.fs(L(322)), f8.fs(L(323)), f8.fs(L(324)), f8
		}()), f4.push(function() {
			var f8 = new f9;
			return f8.fA(L(325)), f8.fF(new fv([new aS(L(326), function() {
				aT.bl(6, aT.c0().dk)
			}).button])), f8.fF(new fv([new aS(L(327), function() {
				bp.bq.br(105, ""), aT.bl(8, aT.c0().dk, new jw(18))
			}).button])), f8.fF(new fv([new aS(L(328) + bp.cy.data[105].value, function() {
				aT.bl(4, 0, new tZ(L(329), L(330), !0, [new aS("⬅️ " + L(1), function() {
					aT.bl(7, aT.a1h(7).dk)
				})]))
			}, t.oy).button])), f8
		}()), f4.push(function() {
			function aHa(aB) {
				aHZ[0].c6(0 === aB ? t.db : t.a9W), aHZ[1].c6(0 === aB ? t.db : t.oy), aHZ[2].c6(aB === aHY.ff.length - 1 || aB < 5 ? t.db : t.oy)
			}
			var aHY, aHZ, f8 = new f9;
			f8.fA(L(335)), f8.fs(L(336)), bp.bW.aDg();
			return aHZ = [new aS(L(123), function() {
				var aB = Math.min(bp.cy.data[117].value, aHY.ff.length - 1);
				aB < 1 || (aB = bp.bW.aDk(aB), bp.bq.br(105, aB.bs), bp.bq.br(106, aB.password), aT.bl(8, aT.c0().dk, new jw(18)))
			}, t.db, 1), new aS(L(333), function() {
				var aB = Math.min(bp.cy.data[117].value, aHY.ff.length - 1);
				if (!(aB < 1)) {
					aHY.ff[aB].remove(), aHY.ff.splice(aB, 1);
					for (var a4 = aB; a4 < aHY.ff.length; a4++) aHY.ff[a4].name = "" + a4;
					bp.bW.aDj(aB), aB = bp.cy.data[117].value, aHY.ff[aB].textContent = aHY.ff[aB].textContent.replace("⚪", "🟢"), aHa(aB)
				}
			}, t.db, 1), new aS(L(334), function() {
				var aB = Math.min(bp.cy.data[117].value, aHY.ff.length - 1);
				if (aB !== aHY.ff.length - 1) {
					for (var a4 = aHY.ff.length - 1; aB < a4; a4--) aHY.ff[a4].remove(), aHY.ff.splice(a4, 1), bp.bW.aDj(a4);
					aHa(aB)
				}
			}, t.db, 1)], aHY = new fC(bp.cy.data[117], aHa), aHa(0), aHY.ff[0].style.marginTop = "0.5em", f8.fB(aHY), f8.fF(new fv([aHZ[0].button])), f8.fF(new fv([aHZ[1].button])), f8.fF(new fv([aHZ[2].button])), f8
		}()));
		return f4.push(function() {
				var f8 = new f9,
					aHR = (f8.fA(L(340)), [L(341), L(342), L(343), L(344)]),
					t6 = data.aHf;
				return f8.fp(L(345) + (data.xS / 100).toFixed(2) + "<br>" + L(317) + (t6 + 1) + " / " + data.aHU + "<br>" + L(318) + aHR[t6 < 10 ? 0 : t6 < 50 ? 1 : t6 < 200 ? 2 : 3]), f8
			}()), f4.push(function() {
				var f8 = new f9;
				return f8.fA(L(337)), f8.fp(L(338) + aZ.bu.aHT(data.aHc, .1, 1) + "<br>" + L(317) + (data.aHd + 1) + " / " + data.aHU + "<br>" + L(339) + data.aHe), f8
			}()),
			function(f4) {
				var f8 = new f9,
					aHq = data.aHr,
					aHu = (f8.fA(L(384)), f8.fp(L(385, [data.aHs.length ? "[" + data.aHs + "]" : "-"])), f8.fp(L(386, [aZ.bu.aHT(aHq, .01, 2)])), f8.fp(L(387, [data.aHt + 1 + " / " + data.aHU])), data.aHv),
					aHw = (f8.fp(L(388, [aZ.bu.aHT(aHu, .1, 1)])), data.aHx);
				f8.fp(L(389, [aHw])), f8.fp(L(390, [aZ.bu.aHT(aHu / Math.max(aHw, 1), .1, 2)])), aHq = data.aHy, f8.fA(L(391), "0.8em"), f8.fp(L(385, [data.aHz.length ? "[" + data.aHz + "]" : "-"])), f8.fp(L(386, [aZ.bu.aHT(aHq, .01, 2)])),
					aHu = data.aI0, f8.fp(L(388, [aZ.bu.aHT(aHu, .1, 1)])), aHw = data.aI1, f8.fp(L(389, [aHw])), f8.fp(L(390, [aZ.bu.aHT(aHu / Math.max(aHw, 1), .1, 2)])), f8.fp(
						"<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", f4.push(f8)
			}(f4),
			function(f4) {
				var f8 = new f9;
				f8.fA(L(392)), f8.fp(L(345) + (data.aI2 / 10).toFixed(1) + "<br>" + L(318) + (data.aI3.length ? L(393, [data.aI3]) : L(394))), data.aHC && f8.fF(new fv([new aS(L(395), function(bd) {
					return bj.bW.ds(0) && (aZ.aa.g3(bd), bj.g5.aAT({
						aAQ: 4,
						bs: data.bs
					})), !0
				}, 0, 0, 1).button]));
				f8.fp("<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", f4.push(f8)
			}(f4), f4.push(function() {
				var f8 = new f9;
				if (f8.fA(L(346)), f8.fp(L(347) + data.aHg + "<br>" + L(317) + (data.aHh + 1) + " / " + data.aHU + "<br>" + L(318) + hN.xP(data.aHh)), data.aHC) {
					var bc = new fG({
							value: bp.cy.data[157].value,
							aB: -1
						}, 1, void 0, function(bd) {
							bp.bq.br(157, aHW(bd.target.value))
						}),
						a1x = (bc.bd.style.marginTop = "0.6em", f8.fF(bc), new aS(L(37), function(bd) {
							return bd.textContent === L(37) ? (bd.textContent = L(36), bc.bd.readOnly = !0, aHi[0].c6(0), aHi[1].c6(0), aHi[0].button.style.color = t.dS, aHi[1].button.style.color = t.dS, aHW(bp.cy.data[157]
								.value)) : g4(), !0
						})),
						aHi = (f8.fF(new fv([a1x.button])), [new aS("−", function(bd) {
							return bc.bd.readOnly && bj.bW.ds(0) && (aZ.aa.g3(bd), g4(), bj.g5.aAU({
								aAQ: 2,
								bs: data.bs,
								value: cf.fH(parseInt(bp.cy.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new aS("+", function(bd) {
							return bc.bd.readOnly && bj.bW.ds(0) && (aZ.aa.g3(bd), g4(), bj.g5.aAU({
								aAQ: 1,
								bs: data.bs,
								value: cf.fH(parseInt(bp.cy.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						fr = f8.fs(),
						aHW = function(a9) {
							return a9 = aZ.d.yB(a9, 3, 32767), fr.textContent = L(348, [a9 - 1, a9, bp.cy.data[105].value]), a9
						};
					f8.fF(new fv([aHi[0].button, aHi[1].button]));
					for (var a4 = 0; a4 < 2; a4++) aHi[a4].button.style.fontSize = "1.6em";
					var g4 = function() {
						a1x.button.textContent = L(37), bc.bd.readOnly = !1, aHi[0].c6(1), aHi[1].c6(1), aHi[0].button.style.color = t.u, aHi[1].button.style.color = t.u
					};
					aHW(bp.cy.data[157].value)
				}
				return f8
			}()),
			function(f4) {
				var f8, aGF;
				data.aHC && !data.aI4 || (0 === d0.id || data.aHC || data.aI4) && ((f8 = new f9).fA("Patreon"), !data.aHC && data.aI5 ? f8.fF(new fv([new aS(L(32), function() {
					bj.g5.aAT({
						aAQ: 7,
						bs: data.bs
					}), data.aI5 = 0, aT.bl(7)
				}).button])) : data.aI4 ? (f8.fp(L(396, [(data.aI6 / 100).toFixed(2)]) + "<br>" + L(397, [1 + data.aI7 + " / " + data.aI8]) + "<br>" + L(398, [data.aI9 ? L(399) : L(400)])), data.aHC || f8.fF(new fv([new aS(L(401),
					function() {
						bj.g5.aAT({
							aAQ: 8,
							bs: data.bs
						}), data.aI4 = 0, bp.bq.br(160, 0), aT.bl(7)
					}).button]))) : (f8.fp(L(402), "0.75em").style.marginBottom = "0.3em", f8.fp("  • " + L(403), "0.75em").style.whiteSpace = "pre", f8.fp("  • " + L(404), "0.75em").style.whiteSpace = "pre", f8.fp("  • " + L(405),
						"0.75em").style.whiteSpace = "pre", f8.fp(L(406), "0.75em").style.marginTop = "1.0em", f8.fp(L(407), "0.75em").style.marginTop = "1.0em", f8.fp("<a href='" + gz.fW +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", aGF = "https://www.patreon.com/oauth2/authorize?state=" + data.bs +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", f8.fp(L(408), "0.75em").style.marginTop = "1.0em", f8.fp("<a href='" + aGF +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aHC || (f8.fF(new aDs), f8.fF(new fv([new aS(L(126), function() {
						bj.g5.aAT({
							aAQ: 6,
							bs: data.bs
						}), data.aI5 = 1, aT.bl(7)
					}).button])), f8.fp(L(409), "0.75em").style.marginTop = "0.75em")), f4.push(f8))
			}(f4),
			function(f4) {
				var f8, aHY, aHZ, aB, aHa;
				data.aHC || bp.pt.get().length && ((f8 = new f9).fA(L(331)), aB = 0, aHa = function() {
					var aHb = bp.pt.get().length;
					aHZ[0].c6(aB === aHb ? t.db : t.a9W), aHZ[1].c6(aB === aHb ? t.db : t.oy), aHZ[2].c6(aB === aHb || aHb - 1 <= aB || aB < 5 ? t.db : t.oy)
				}, aHZ = [new aS(L(332), function() {
					aT.bl(8, void 0, new jw(25, {
						aAQ: 0,
						bs: bp.pt.get()[aB],
						a5Y: 0
					}))
				}, t.db, 1), new aS(L(333), function() {
					bp.pt.a1X(aB), aHY.ff[aB].remove(), aHY.ff.splice(aB, 1);
					for (var a4 = aB; a4 < aHY.ff.length; a4++) aHY.ff[a4].name = "" + a4;
					bp.pt.get().length && (aB = Math.max(aB - 1, 0), aHY.ff[aB].textContent = aHY.ff[aB].textContent.replace("⚪", "🟢")), aHa()
				}, t.db, 1), new aS(L(334), function() {
					for (var aA = aHY.ff.length - 1; aB < aA; aA--) bp.pt.a1X(aA), aHY.ff[aA].remove(), aHY.ff.splice(aA, 1);
					aHa()
				}, t.db, 1)], aHa(), (aHY = new fC(bp.pt.a1U(), function(a4) {
					aB = a4, aHa()
				})).ff[0].style.marginTop = "0.5em", f8.fB(aHY), f8.fF(new fv([aHZ[0].button])), f8.fF(new fv([aHZ[1].button])), f8.fF(new fv([aHZ[2].button])), f4.push(f8))
			}(f4), f4
	}())
}

function tu() {
	var ax;
	10 === cC.cE ? ax =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === cC.cE ? ax =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === cC.cE ? ax =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === cC.cE ? ax =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === cC.cE ? ax =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === cC.cE ? ax =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === cC.cE ? ax =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === cC.cE ? ax =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === cC.cE ? ax =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === cC.cE ? ax =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === cC.cE ? ax =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === cC.cE && (ax =
			"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-"
			), (new aIB).aCJ(ax)
}

function aIC() {
	var jq, a1g, f4;
	this.show = function() {
		jq.show(), this.resize()
	}, this.aY = function() {
		jq.aY()
	}, this.resize = function() {
		jq.resize(), a1g.resize()
	}, this.ae = function(af) {
		2 === af && jq.ag[0].ah()
	}, jq = new aR(L(63), [new aS("⬅️ " + L(1), function() {
		aT.f1()
	})]), a1g = new ex(jq.aV, ((f4 = []).push(function() {
		function g4() {
			g2.button.textContent = L(37), aIF.bd.readOnly = !1, aIG.bd.readOnly = !1, aHX.c6(1), aHX.button.style.color = t.u
		}
		var f8 = new f9,
			aIE = (f8.fp("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", f8.fA(L(410)), new fG({
				value: bp.cy.data[105].value,
				aB: -1
			})),
			aIF = (aIE.bd.readOnly = !0, f8.fF(aIE), f8.fA(L(164), "0.8em"), new fG(bp.cy.data[148], 0, void 0, function(bd) {
				aHW(bp.cy.data[149].value, bd.target.value)
			})),
			aIG = (f8.fF(aIF), f8.fA(L(168), "0.8em"), new fG(bp.cy.data[149], 1, void 0, function(bd) {
				aHW(bd.target.value, bp.cy.data[148].value)
			})),
			g2 = (f8.fF(aIG), new aS(L(37), function(bd) {
				return bd.textContent === L(37) ? (bd.textContent = L(36), aIF.bd.readOnly = !0, aIG.bd.readOnly = !0, aHX.c6(0), aHX.button.style.color = t.dS, bp.bq.br(149, aIG.bd.value), aHW(bp.cy.data[149].value, bp.cy
					.data[148].value)) : g4(), !0
			})),
			aHX = (f8.fF(new fv([g2.button])), new aS(L(85), function(bd) {
				return aIF.bd.readOnly && bj.bW.ds(0) && (aZ.aa.g3(bd), g4(), bj.g5.aAU({
					aAQ: 0,
					bs: bp.cy.data[148].value,
					value: parseInt(bp.cy.data[149].value, 10)
				})), !0
			}, 1)),
			fr = f8.fs(),
			aHW = (f8.fs(L(411)).style.fontWeight = "bold", function(a9, ax) {
				fr.innerHTML = aT.bW.y9(a9, bp.cy.data[105].value, ax)
			});
		return f8.fF(new fv([aHX.button])), aHW(bp.cy.data[149].value, bp.cy.data[148].value), f8
	}()), f4))
}

function aIH() {
	var aII, aIJ = 8,
		aIK = null;

	function aIP(b4, mV, aB) {
		mV *= 4;
		b4[mV] = 255, b4[1 + mV] = 255, b4[2 + mV] = aB, b4[3 + mV] = 255
	}

	function aIR(d6, aIU) {
		var dF, dE, mp, mV, aIV, aIW, nI = aIJ,
			t2 = aZ.aa.getImageData(d6, nI, nI),
			b4 = t2.data,
			rQ = (nI >> 1) - .5,
			aIY = aZ.cb.aIZ(aIU, .5);
		for (aZ.cb.aIa(aIU, aIY, 300) || aZ.cb.aIb(aIU, 100), dE = 0; dE < nI; dE++)
			for (dF = 0; dF < nI; dF++) aIW = (nI - 1.5) * (nI - 1.5) / 4, b4[mV = 4 * (dE * nI + dF)] = (aIV = (mp = (mp = dF - rQ) * mp + (mp = dE - rQ) * mp) <= (nI - 4.5) * (nI - 4.5) / 4 ? aIY : aIU)[0], b4[1 + mV] = aIV[1], b4[2 + mV] = aIV[2],
				b4[3 + mV] = aIW < mp ? 0 : 255;
		d6.putImageData(t2, 0, 0)
	}
	this.ck = function() {
		var aB, nI, a46, d6, t2, b4;
		(aII = aII || new Array(eq.fE)).fill(null), aB = 255, nI = aIJ + 4, a46 = aZ.aa.aEc(nI, nI), d6 = aZ.aa.getContext(a46, !0), t2 = aZ.aa.getImageData(d6, nI, nI), aIP(b4 = t2.data, nI + 1, aB), aIP(b4, nI + 2, aB), aIP(b4, 2 * nI + 1, aB),
			aIP(b4, 2 * nI - 3, aB), aIP(b4, 2 * nI - 2, aB), aIP(b4, 3 * nI - 2, aB), aIP(b4, nI * (nI - 3) + 1, aB), aIP(b4, nI * (nI - 2) + 1, aB), aIP(b4, nI * (nI - 2) + 2, aB), aIP(b4, nI * (nI - 2) - 2, aB), aIP(b4, nI * (nI - 1) - 3, aB),
			aIP(b4, nI * (nI - 1) - 2, aB), d6.putImageData(t2, 0, 0), aIK = a46,
			function() {
				if (eq.p6)
					for (var a46 = new Array(hG.qZ.length), a5 = eq.fE, aIN = aII, wk = hG.wk, a4 = 0; a4 < a5; a4++) {
						var oo = wk[a4];
						a46[oo] || (a46[oo] = function(oo) {
							var a46 = aZ.aa.aEc(aIJ, aIJ),
								d6 = aZ.aa.getContext(a46, !0),
								z = h2.aIT;
							return z.set(hG.wj[oo]), aIR(d6, z), a46
						}(oo)), aIN[a4] = a46[oo]
					}
			}()
	}, this.eZ = function() {
		var a4, player, aIc, a4H, np, fu, aIe, aIg, aIh, mX = h1.bW.mX,
			sd = h1.bW.sd,
			se = h1.bW.se,
			aIi = h1.bW.aIi,
			aIj = aII,
			sT = eq.jj,
			a5 = h1.bW.pR,
			a42 = eR.cv,
			a43 = eR.cw,
			a45 = cC.mO << 4,
			sm = mJ,
			rJ = sm / aIJ,
			mY = mI / sm,
			ma = mK / sm,
			mp = (a42 + mI) / sm - mY,
			mq = (a43 + mK) / sm - ma,
			d6 = m0;
		for (d6.imageSmoothingEnabled = sm < 9, aZ.aa.textAlign(d6, 1), aZ.aa.textBaseline(d6, 1), a4 = 0; a4 < a5; a4++) player = sd[a4] >> 3, np = se[a4], aIc = .9 + .1 * Math.log10(np), a4H = (fu = mX[a4]) % a45 / 16 - aIc, fu = a43 * (Math
			.floor(fu / a45) / 16 - aIc - ma) / mq, aIe = -2 * (aIh = sm * aIc) * (1 + (aIg = +(player === sT)) / 8), aIg = aIg * aIh / 4, (aIh = a42 * (a4H - mY) / mp) < aIe || fu < aIe || a42 + aIg < aIh || a43 + aIg < fu || (a4H = 2 *
			aIc * rJ, aIe = aIc * sm, null === (aIg = aIj[player]) && (aIj[player] = aIg = function(player) {
				var a46 = aZ.aa.aEc(aIJ, aIJ);
				return aIR(aZ.aa.getContext(a46, !0), gR.aIS(player)), a46
			}(player)), player === sT && (d6.setTransform(a4H, 0, 0, a4H, aIh - 2 * a4H, fu - 2 * a4H), d6.drawImage(aIK, 0, 0)), d6.setTransform(a4H, 0, 0, a4H, aIh, fu), d6.drawImage(aIg, 0, 0), (aIc = Math.floor(function(np) {
				if (np < 1e3) return .42;
				if (np < 1e4) return .34;
				if (np < 1e6) return .26;
				if (np < 1e8) return .19;
				return .15
			}(np) * aIe)) < 6) || (d6.setTransform(1, 0, 0, 1, 0, 0), d6.fillStyle = aIi[a4] ? t.aIm : t.u, d6.font = aZ.aa.lT(1, aIc), d6.fillText(aZ.bu.jW(np), aIh + aIe, fu + aIe + .1 * aIc));
		d6.imageSmoothingEnabled = !1, d6.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aIn() {
	this.a3K = function() {
		bp.bW.aDf(), bp.bq.br(105, gv.kF.jU(gv.kF.jP(5))), bp.bq.br(106, gv.kF.jU(gv.kF.jP(15))), bp.bq.br(109, 0), bp.bq.br(108, bp.cy.data[109].value), bp.bq.br(111, bp.cy.data[109].value + 1), bp.bq.br(107, 0), bp.bq.br(110, "")
	}, this.a3M = function() {
		var data;
		gx.size < gt.t8(29) ? bj.bW.yV(0, 3254) : ((data = {
			a5Y: gx.jT(30),
			aHc: gx.jT(16),
			aHd: gx.jT(30),
			aHe: gx.jT(30),
			aHU: gx.jT(30),
			aAR: gx.aEq(32),
			username: gw.a4y.aCJ(5),
			aHs: gw.a4y.aCJ(3),
			aHz: gw.a4y.aCJ(3),
			aHr: gx.aEq(32),
			aHy: gx.aEq(32),
			aHt: gx.jT(30),
			aHv: gx.aEq(32),
			aI0: gx.aEq(32),
			aHx: gx.aEq(32),
			aI1: gx.aEq(32),
			aHg: gx.aEq(32),
			aHh: gx.aEq(30),
			aI2: gx.aEq(32),
			aI3: gw.a4y.aCJ(3),
			aHm: gx.aEq(2),
			aHo: gx.aEq(10),
			aHl: gw.a4y.aCJ(8),
			aHn: gx.aEq(5),
			aHS: gx.jT(30),
			aHf: gx.jT(30),
			xS: gx.aEq(32),
			aHk: gx.jT(3),
			aHj: gx.jT(8),
			aI4: gx.jT(1),
			aI5: gx.jT(1)
		}).aI4 && (data.aI6 = gx.aEq(32), data.aI7 = gx.jT(30), data.aI8 = gx.jT(30), data.aI9 = gx.jT(1)), 8 === aT.dK && (25 === aT.c0().aIo ? (data.aHC = !0, aT.bW.y0 = data, aT.c0().wI(25, !1)) : (data.aHC = !1, bp.bq.br(160, +(data
			.aI4 && data.aI9)), data.bs = bp.cy.data[105].value, aT.bW.y1 = data, bp.bq.aIp(data), aT.c0().wI(16, !0))))
	}
}

function g() {
	this.aIq = function(player, mV) {
		aZ.d.kz(0) && aZ.d.rc(player) && h0.zB(mV) && (gr.aE8.a8o(0, player, mV), eq.l7.qF(player, mV))
	}, this.on = function(player, lK, oj) {
		aZ.d.kz(1) && aZ.d.rc(player) && aZ.d.aIr(player, oj) && aZ.d.nq(player, lK, 12, 0) && aZ.d.aIs(player, oj) && ((oj = gS.ss(player, h2.aIu[0])) || gS.st(player)) && (ei.em[player]++, gr.aE8.a8o(1, player, lK, h2.aIu[0]), ga.aIv.aIw(
			player, oj)) && (aZ.d.o8(player), hE.aIx(player, lK), ga.aIv.aIy(player))
	}, this.aIz = function(player, lK, a7u) {
		aZ.d.kz(1) && aZ.d.rc(player) && eq.p6 && aZ.d.aIr(player, a7u) && aZ.d.aJ0(player, a7u) && aZ.d.aJ1(player, aZ.d.lc(player, lK), a7u) && gZ.qF(a7u, h2.a7w[0]) && (gr.aE8.a8o(2, player, lK, a7u), gT.a7t(player, a7u))
	}, this.a0J = function(player, lK, aJ2) {
		h2.oD[1] = 7 & aJ2;
		var mV = aJ2 >> 3;
		aZ.d.kz(1) && aZ.d.rc(player) && h0.zB(mV) && h1.nk.nl(player) && h1.nk.pU(mV) && aZ.d.nq(player, lK, 32, 0) && h1.a4f.aJ3(player, mV, 1) && (hE.aJ4(player), gr.aE8.a8o(3, player, lK, aJ2), aZ.d.o8(player), hL.xw.a0J(player), h1.bW.o9(
			player))
	}, this.a0M = function(player, lK, mS) {
		849 === lK ? this.aJ5(player, mS) : aZ.d.kz(1) && aZ.d.rc(player) && aZ.d.nq(player, lK, 32, 0) && h1.o6.o7(player, mS) && (hE.aJ4(player), gr.aE8.a8o(4, player, lK, mS), aZ.d.o8(player), hL.xw.a0M(player), h1.bW.o9(player))
	}, this.aJ5 = function(player, mS) {
		aZ.d.kz(1) && aZ.d.rc(player) && h1.aJ6.w(player, mS) && gr.aE8.a8o(4, player, 849, mS)
	}, this.aJ7 = function(player, oj) {
		513 === oj ? this.tV(player) : aZ.d.kz(1) && aZ.d.rc(player) && (oj = Math.min(oj, eq.fE), gS.ss(player, oj)) && (gr.aE8.a8o(5, player, oj), gS.aJ8(player, oj))
	}, this.aJ9 = function(player, ay) {
		(aZ.d.kz(1) || aZ.d.kz(2)) && aZ.d.rc(player) && (ay = cf.fH(ay, 0, 1023), gr.aE8.a8o(6, player, ay), gU.a3t(player, 0, ay))
	}, this.aJA = function(player, aJB) {
		gh.aJC(player) && (gr.aE8.a8o(7, player, aJB), gh.aJD(player, aJB))
	}, this.kp = function(player) {
		(aZ.d.kz(0) || aZ.d.kz(1)) && aZ.d.rc(player) && gF.tS(player) && (gr.aE8.a8o(8, player), h4.kp(player))
	}, this.kt = function(player) {
		gr.aE8.a8o(9, player), h4.kt(player)
	}, this.tV = function(player) {
		gh.tT(player) && (gr.aE8.a8o(5, player, 513), gh.tV(player))
	}, this.aJE = function(player, lK, mV, oj) {
		aZ.d.kz(1) && aZ.d.rc(player) && aZ.d.aIr(player, oj) && aZ.d.aIs(player, oj) && h0.zB(mV) && gY.vg.aJF(player, mV) && (gS.ss(player, h2.aIu[0]) || gS.st(player)) && (gr.aE8.a8o(10, player, (lK << 10) + h2.aIu[0], mV), oj = aZ.d.aJG(
			player, lK), ei.rb[player].push(h2.aJH[0]), gS.qF(player, oj, h2.aIu[0]), g8.jn(player, !0), hE.aJI(player))
	}
}

function aJJ() {
	var rm = 0,
		aJK = 0,
		aJL = 0,
		aJM = null,
		aJN = null;

	function aJQ(ka, aJR, aJS) {
		var ax = ka.username;
		return (ax += "   " + bQ.cY.kh(ka.kU, ka.kW, ka.ki)) + function(ka) {
			ka = ka.aAR;
			if (ka < 1e3) return "   Gold: " + ka;
			if ((ka %= 1024) < 1e3) return "   Gold: " + ka + "k";
			return "   Gold: " + (ka - 999) + "M"
		}(ka) + ("   IP: " + gv.kF.jW(ka.aJU, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aJS ? aJK : aJP(ka, aJR)])
	}

	function aJP(ka, aJR) {
		return aJK = aJR || bQ.cP.kY(ka.bs) ? 1 : 0
	}
	this.aJO = function() {
		!rm || aJK === aJP(aJN) && aJL === aJN.aAR || (aJL = aJN.aAR, aJM.show(-1, -1, aJQ(aJN, 0, 1), 1, 1))
	}, this.a55 = function(bd, ka, aJR) {
		var a13 = bd.target.getBoundingClientRect();
		this.show(a13.left, a13.top, ka, 0, aJR), bd.target.addEventListener("mouseleave", function remove() {
			bd.target.removeEventListener("mouseleave", remove), bQ.ci && bQ.ci.aY(1)
		})
	}, this.show = function(dF, dE, ka, rq, aJR) {
		aJM = aJM || new rk, aJL = (aJN = ka).aAR, aJM.show(dF, dE, aJQ(ka, aJR), rq), rm = 1
	}, this.aY = function(rx) {
		aJM && aJM.aY(rx) && (rm = 0, aJN = null)
	}
}

function aJV() {
	var aP, ev, ew, f4;

	function bM() {
		ez(), 2 !== eq.data.tIncomeType && (eq.data.tIncomeData = null), aT.f0()[19] = null, aT.f1()
	}

	function ez() {
		2 === eq.data.tIncomeType && aZ.cb.f2(ew.f3(), eq.data.tIncomeData, 255)
	}
	this.show = function() {
		aP.show(), this.resize()
	}, this.aY = function() {
		aP.aY()
	}, this.resize = function() {
		aP.resize(), ev.resize()
	}, this.ae = function(af) {
		2 === af && aP.ag[0].ah()
	}, aP = new aR(L(412), [new aS("⬅️ " + L(1), bM)]), ev = new ex(aP.aV, (function(f4) {
		var f8 = new f9;
		f8.fA(L(21)), f8.fB(new fC({
			fD: [L(22), L(23), L(24)],
			value: eq.data.tIncomeType
		}, function(aB) {
			ez(), 2 !== aB || eq.data.tIncomeData || (eq.data.tIncomeData = new Uint8Array(eq.fE), eq.data.tIncomeData.fill(32)), eq.data.tIncomeType = aB, aT.bl(26)
		})), f4.push(f8)
	}(f4 = []), function(f4) {
		var f8;
		1 === eq.data.tIncomeType && ((f8 = new f9).fA("Value"), f8.fF(new fG({
			aB: -1,
			value: eq.data.tIncomeValue
		}, 1, 0, function(bd) {
			var value = cf.fH(Math.floor(bd.target.value), 0, 255);
			bd.target.value = eq.data.tIncomeValue = value
		})), f4.push(f8))
	}(f4), function(f4) {
		var f8;
		2 === eq.data.tIncomeType && ((f8 = new f9).fA("Data"), (ew = new fI(0, 1, 0, 1)).fJ(aZ.bu.fK(eq.data.tIncomeData, 4)), f8.fF(ew), f4.push(f8))
	}(f4), f4))
}

function a3e() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function aJW() {
	this.a1a = function() {
		var a6d = function() {
				for (var a8l = gr.aE8.a8l, a5 = a8l.length, max = 0, a4 = 0; a4 < a5; a4++) max = Math.max(max, a8l[a4]);
				return pP(Math.max(max, 1))
			}(),
			cv = (ka = eq.data, (cv = gu).ck(), cv.oG(12, e1.rVersion), cv.aB += 43, cv.oG(2, ka.mapType), cv.oG(8, ka.mapProceduralIndex), cv.oG(8, ka.mapRealisticIndex), cv.oG(14, ka.mapSeed), cv.aGr(ka.mapName, 5), 2 === ka.mapType && cv.aGs(
				ka.canvas), cv.oG(1, ka.passableWater), cv.oG(1, ka.passableMountains), cv.oG(10, ka.playerCount), cv.oG(10, ka.humanCount), cv.oG(9, ka.selectedPlayer), cv.oG(1, ka.gameMode), cv.oG(2, ka.playerMode), cv.oG(2, ka
				.battleRoyaleMode), cv.oG(4, ka.numberTeams), cv.oG(1, ka.isZombieMode), cv.oG(1, ka.isContest), cv.oG(1, ka.isReplay), cv.jI(ka.elo, 2, 14), cv.oG(1, ka.colorsType), cv.oG(1, ka.colorsPersonalized), cv.jI(ka.colorsData, 10,
				18), cv.oG(1, ka.selectableColor), cv.jI(ka.teamPlayerCount, 4, 10), cv.oG(1, ka.neutralBots), cv.oG(2, ka.botDifficultyType), cv.oG(4, ka.botDifficultyValue), cv.jI(ka.botDifficultyTeam, 4, 4), cv.jI(ka.botDifficultyData, 10,
				4), cv.oG(2, ka.spawningType), cv.oG(14, ka.spawningSeed), cv.jI(ka.spawningData, 11, 12), cv.oG(1, ka.selectableSpawn), cv.oG(2, ka.playerNamesType), cv.aGq(ka.playerNamesData, 10, 5), cv.oG(1, ka.selectableName), cv.oG(2, ka
				.aIncomeType), cv.oG(8, ka.aIncomeValue), cv.jI(ka.aIncomeData, 10, 8), cv.oG(2, ka.tIncomeType), cv.oG(8, ka.tIncomeValue), cv.jI(ka.tIncomeData, 10, 8), cv.oG(2, ka.iIncomeType), cv.oG(8, ka.iIncomeValue), cv.jI(ka
				.iIncomeData, 10, 8), cv.oG(2, ka.sResourcesType), cv.oG(11, ka.sResourcesValue), cv.jI(ka.sResourcesData, 10, 11), ! function(a6d) {
				var cv = gu,
					a8g = gr.aE8.a8g,
					tz = gr.aE8.a8h,
					u1 = gr.aE8.a8i,
					a4B = gr.aE8.a8j,
					a5 = a8g.length;
				cv.oG(5, a6d), cv.oG(30, a5), cv.oG(30, gr.aE8.a8l.length);
				for (var a4 = 0; a4 < a5; a4++) {
					var af = a8g[a4];
					cv.oG(4, af), cv.oG(9, tz[a4]), 0 === af ? cv.oG(22, u1[a4]) : 1 === af ? (cv.oG(10, u1[a4]), cv.oG(10, a4B[a4])) : 2 === af ? (cv.oG(10, u1[a4]), cv.oG(9, a4B[a4])) : 3 === af ? (cv.oG(10, u1[a4]), cv.oG(27, a4B[a4])) :
						4 === af ? (cv.oG(10, u1[a4]), cv.oG(16, a4B[a4])) : 5 === af || 6 === af ? cv.oG(10, u1[a4]) : 7 === af ? cv.oG(1, u1[a4]) : 10 === af && (cv.oG(20, u1[a4]), cv.oG(22, a4B[a4]))
				}
			}(a6d), ! function(a6d) {
				for (var cv = gu, a8k = gr.aE8.a8k, a8l = gr.aE8.a8l, a5 = a8k.length, a4 = 0; a4 < a5; a4++) cv.oG(1, a8k[a4]), cv.oG(a6d, a8l[a4])
			}(a6d), gu.aB),
			ka = cf.cg(cv - 1, 6) + 1,
			a6d = (gt.t8(6 * ka) !== gu.z.length && gu.z.push(0), ! function() {
				var cv = gu;
				cv.aB = 24, cv.oG(31, cv.z.length), cv.aB = 12, cv.oG(12, function() {
					for (var z = gu.z, a5 = z.length, oU = e1.rVersion, a4 = 3; a4 < a5; a4++) oU = oU + z[a4] & 4095;
					return oU
				}())
			}(), gx.ck(gu.z), gv.kF.jU(gv.kF.jP(ka)));
		return gx.bi(), gu.ck(), a6d
	}
}

function aJe() {
	var vZ = 0,
		aJf = null;
	this.ck = function() {
		null === aJf && (aJf = new Uint16Array(2 * h1.bW.no)), vZ = 0
	}, this.qF = function(aJg, o3) {
		var aJh = aJf;
		aJh[vZ++] = aJg, aJh[vZ++] = o3
	}, this.o4 = function(player, aJi) {
		for (var aJh = aJf, a5 = vZ, a4 = 0; a4 < a5; a4 += 2)
			if (aJh[a4] === aJi && h1.cY.aJj(aJh[a4 + 1]) && player === h1.bW.sd[h2.oD[2]] >> 3) return !0;
		return !1
	}, this.qq = function(aJk) {
		var pW = h1.bW.sM[aJk];
		if (!(pW < 64)) {
			for (var aJi = h1.bW.o2[aJk], aJh = aJf, a5 = vZ, a4 = a5 - 2; 0 <= a4; a4 -= 2)
				if (aJh[a4] === aJi) {
					{
						aJo = void 0;
						var aJo = aJh[a4 + 1];
						h1.cY.aJj(aJo) && h1.o3.qp(h2.oD[2])
					}
					aJh[a4] = aJh[a5 - 2], aJh[a4 + 1] = aJh[a5 - 1], a5 -= 2
				} vZ = a5
		}
	}, this.sb = function(aJm, aJn) {
		for (var aJo = h1.bW.o2[aJm], aJi = -1, aJh = aJf, a5 = vZ, a4 = 1; a4 < a5; a4 += 2)
			if (aJh[a4] === aJo) {
				aJi = aJh[a4 - 1];
				break
			} if (-1 === aJi) return !1;
		if (!h1.cY.aJj(aJi)) return !1;
		var aJk = h2.oD[2],
			e0 = h1.bW.aJp[aJk];
		if (aJn === e0[e0.length - 1]) h1.bW.aJp[aJm] = h1.aH0.aH3(h1.bW.aJp[aJm], h1.aH0.aH1(e0));
		else {
			var aJq = h1.cY.aJr(e0, aJn);
			if (-1 === aJq) return !1;
			var aJs = h1.bW.sc[aJk];
			aJq === aJs ? (aJk = h0.mW(h1.bW.mX[aJk]), h1.bW.aJp[aJm] = h1.aH0.aH5(h1.bW.aJp[aJm], e0, aJq, aJn, h0.yw(e0[aJq], aJn) > h0.yw(e0[aJq], aJk))) : h1.bW.aJp[aJm] = h1.aH0.aH5(h1.bW.aJp[aJm], e0, aJq, aJn, aJs < aJq)
		}
		return !0
	}, this.qp = function(aJv) {
		var e0, rQ = h1.bW,
			pW = rQ.sM[aJv];
		return pW % 64 != 5 && (e0 = rQ.aJp[aJv], rQ.sN[aJv] = 65535 - rQ.sN[aJv], rQ.sc[aJv] = e0.length - rQ.sc[aJv] - 2, rQ.aJp[aJv] = h1.aH0.aH1(e0), rQ.sM[aJv] = pW - pW % 64 + 5, !0)
	}
}

function iS() {
	this.aJw = null, this.ck = function() {
		10 !== eq.l1 ? this.aJw = null : this.aJw = new Uint32Array(eq.fE)
	}, this.w = function() {
		10 === eq.l1 && this.cY()
	}, this.cY = function() {
		for (var ec, target, rd, aJw = this.aJw, ef = ed.eg, a7z = ei.rM, a4 = ed.ee - 1; 0 <= a4; a4--)(ec = ef[a4]) >= eq.er || (target = Math.max(cf.cg(a7z[ec], 4), 2048), rd = Math.max(gT.re(ec), 100), aJw[ec] += cf.cg(rd * target, 1e4), aJw[
			ec] > target && (aJw[ec] = target))
	}, this.aJx = function(player, np) {
		return np > this.aJw[player] ? (np = this.aJw[player], this.aJw[player] = 0) : this.aJw[player] -= np, np
	}
}

function aIB() {
	var cv, cw, aJy;

	function aK9(a4U, dh, aK7, aK1, b4) {
		dh = aK8(a4U, dh + 1 + 2 * aK1 & 3);
		! function(a4U, a4V) {
			return 1 < Math.abs(a4U % cv - a4V % cv) || 1 < Math.abs(aKC(a4U) - aKC(a4V))
		}(a4U, dh) && 0 === b4[dh << 2] && (b4[dh << 2] = aK7)
	}

	function aKC(ec) {
		return Math.floor((ec + .5) / cv) % cw
	}

	function aK8(ec, dh) {
		return ec + aJy[dh]
	}
	this.aCJ = function(ax) {
		var a4, a6d, a5, aJz, jR = gx;
		for (gw.kF.yg(gw.kF.yf(ax)), cC.cF.cG[cC.cE].cv = cC.mO = cv = jR.jT(12), cC.cF.cG[cC.cE].cw = cC.mP = cw = jR.jT(12), aJy = [-cv, -1, cv, 1], cC.qI = document.createElement("canvas"), cC.qI.width = cC.mO, cC.qI.height = cC.mP, cC.te = cC
			.qI.getContext("2d", {
				alpha: !1
			}), cC.tf = cC.tg = null, cC.tf = cC.te.getImageData(0, 0, cC.mO, cC.mP), cC.tg = cC.tf.data, aZ.cb.a7U(cC.tg), a5 = jR.jT(12), a6d = jR.jT(5), aJz = pP(cv * cw - 1), a4 = 0; a4 < a5; a4++) ! function(rQ, ec, aK0, aK1) {
			var a4, dh, jR = gx,
				b4 = cC.tg,
				xY = ec,
				aK4 = ec,
				aK5 = 0,
				aK6 = 1 + aK0,
				aK7 = 2 - aK0;
			for (b4[ec << 2] = aK6, a4 = 0; a4 < rQ; a4++) dh = jR.jT(2), ec = aK8(ec, dh), b4[ec << 2] === aK6 ? aK5 % 2 == 1 && aK9(aK4, aK5 + 2 * aK1 + 3, aK7, aK1, b4) : b4[ec << 2] = aK6, aK9(ec, dh, aK7, aK1, b4), aK9(aK4, dh, aK7, aK1,
				b4), aK4 = ec, aK5 = dh;
			aK8(ec, 0) === xY ? (aK9(ec, 0, aK7, aK1, b4), aK9(xY, 0, aK7, aK1, b4)) : aK8(ec, 1) === xY && (aK9(ec, 0, aK7, aK1, b4), aK9(xY, 2, aK7, aK1, b4));
			0 === rQ && (aK9(xY, 0, aK7, aK1, b4), aK9(xY, 2, aK7, aK1, b4))
		}(jR.jT(a6d), jR.jT(aJz), 1 === jR.jT(1), 1 === jR.jT(1));
		var dF, dE, aA, aKD, aKE, aKF, b4 = cC.tg,
			aKG = !0,
			aGZ = cC.cF.cG[cC.cE].aGZ,
			aGa = cC.cF.cG[cC.cE].aGa;
		for (dE = 0; dE < cw; dE++)
			for (aKD = !0, aKE = aKG, dF = aKF = 0; dF < cv; dF++) aA = 4 * dE * cv + 4 * dF, aKF <= dF && 0 < b4[aA] && (aKE = 2 === b4[aA], aKD) && (aKD = !1, aKE !== aKG) ? (aKG = aKE, aKF = dF + 1, dF = -1) : (aKE ? (b4[aA] = aGa[0], b4[1 +
				aA] = aGa[1], b4[2 + aA] = aGa[2]) : (b4[aA] = aGZ[0], b4[1 + aA] = aGZ[1], b4[2 + aA] = aGZ[2]), b4[3 + aA] = 255);
		cC.te.putImageData(cC.tf, 0, 0), cC.th = !0, cC.ti.ck(), eW.eX = !0
	}
}

function j0() {
	this.lW = function() {
		return d0.jF.lR() ? 2 : 1
	}
}

function i3() {
	var aKH = new Uint16Array(eq.fE),
		aKI = 0;

	function aKN(e9, aKL) {
		var af = eW.et();
		return 3213 <= af ? 4 + cf.cg(100 * aKL, gT.rN(e9)) : (e9 = 1 + cf.cg(eq.rA, 300), af < 357 ? 2 + cf.cg(100 * aKL, e9) : af < 714 ? 2 + cf.cg(100 * aKL, 4 * e9) : af < 1071 ? 2 + cf.cg(100 * aKL, 10 * e9) : af < 2142 ? 2 + cf.cg(100 * aKL,
			30 * e9) : 2 + cf.cg(100 * aKL, 100 * e9))
	}

	function aKM(e9) {
		return eq.l6 || 7 <= eq.l1 || 4284 <= eW.et() || aZ.d.el(e9)
	}
	this.ck = function() {
		aKH.fill(0), aKI = 15
	}, this.aKJ = function(a7u) {
		var player = eq.jj;
		return !!aZ.d.aJ0(player, a7u) && !(!aZ.d.aJ1(player, aZ.d.lc(player, gJ.ld()), a7u) || (player = a7u, a7u = h2.a7w[0], !aKM(player) && aKH[player] + aKN(player, a7u) > aKI))
	}, this.qF = function(e9, aKL) {
		if (!aKM(e9)) {
			aKL = aKN(e9, aKL);
			if (aKH[e9] + aKL > aKI) return !1;
			aKH[e9] += aKL
		}
		return !0
	}, this.w = function() {
		eW.et() % 100 == 99 && (eW.et() < 1071 ? aKI += 4 : eW.et() < 2142 ? aKI += 6 : eW.et() < 3213 ? aKI += 8 : aKI += 10)
	}
}

function il() {
	this.aEB = new aKO, this.eV = new qA, this.ck = function() {
		d0.jF.aKP()
	}, this.qE = function() {
		return bp.cy.data[160].value
	}
}

function ij() {
	var aFT = 0,
		aKQ = 0;
	this.a2U = function(dF, dE) {
		aFT = dF, aKQ = dE
	}, this.a2c = function(code) {
		var oB, oC, mV;
		eq.lQ || gF.lf || (aZ.d.kz(0) || aZ.d.kz(1)) && aZ.d.rc(eq.jj) && (gJ.lp(aFT, aKQ) ? gJ.lP = !1 : gH.lp(aFT, aKQ) || (oB = h0.z6(aFT), oC = h0.z7(aKQ), mV = h0.z9(oB, oC), h0.z8(oB, oC) && (0 === code ? function(mV) {
			var aKU, rJ, sm;
			eq.l3 ? -1 !== (aKU = hP.aKV(mV)) && gq.b.aIq(mV) : (rJ = h0.pY(mV), gR.a9t(rJ) ? (aKU = gY.vg.aKW(rJ)) && (sm = h0.pY(aKU), sm = gR.sI(sm) ? eq.fE : gR.sZ(sm), gq.b.aJE(gJ.ld(), aKU, sm)) : (aKU = hP.aKX(mV)) < 0 || (
				rJ = h0.pY(aKU), gR.sI(rJ) ? hQ.aDU(eq.jj) ? gq.b.on(gJ.ld(), eq.fE) : gS.oh(eq.jj) && gk.op(eq.fE, gJ.ld()) : (sm = gR.sZ(rJ), hQ.sU(sm, eq.jj) && (hQ.aDW(eq.jj, sm) ? gq.b.on(gJ.ld(), sm) : gS.oh(eq
					.jj) && gk.op(sm, gJ.ld())))))
		}(mV) : 1 === code ? function(mV) {
			h1.aKY.aKZ(eq.jj, mV) && gq.b.a0J(gJ.ld(), h2.oD[7])
		}(mV) : 2 === code && function(mV) {
			h1.o6.aKJ(eq.jj, mV) && gq.b.a0M(gJ.ld())
		}(mV))))
	}, this.a2d = function() {
		if (!eq.lQ && !gF.lf && aZ.d.kz(1)) {
			var ec = eq.jj;
			if (aZ.d.rc(ec)) {
				var a5 = gS.oh(ec);
				if (a5 < 1) ! function() {
					var ec = eq.jj;
					if (hQ.aDU(ec)) gq.b.on(gJ.ld(), eq.fE);
					else
						for (var v1 = gR.v1, a0V = ei.a0V, a5 = a0V[ec].length, uw = Math.floor(Math.random() * a5), a4 = 0; a4 < a5; a4++)
							for (var sS = 3; 0 <= sS; sS--) {
								var aA = a0V[ec][(a4 + uw) % a5] + v1[sS];
								if (gR.sn(aA)) {
									aA = gR.sZ(aA);
									if (aA !== ec && (!eq.p6 || hQ.sU(ec, aA))) return gq.b.on(gJ.ld(), aA)
								}
							}
				}();
				else {
					for (var aKb = 0, np = gS.a8P(ec, 0), a4 = 1; a4 < a5; a4++) {
						var xc = gS.a8P(ec, a4);
						xc < np && (np = xc, aKb = a4)
					}
					gq.b.on(gJ.ld(), gS.a8O(ec, aKb))
				}
			}
		}
	}, this.tV = function() {
		if (!eq.lQ && !gF.lf && aZ.d.rc(eq.jj) && aZ.d.kz(1)) return gh.lJ ? gh.aJC(eq.jj) ? void gq.b.aJA(1) : void 0 : void(gh.tT(eq.jj) && gq.b.tV())
	}
}

function aKd(a5r) {
	var uj = document.createElement("div"),
		vF = document.createElement("div"),
		aKe = [];

	function dV() {
		d1.d2() || (this.style.backgroundColor = aZ.color.de(t.da, 50))
	}

	function dW() {
		this.style.backgroundColor = t.da
	}
	this.br = function(aKg, a5s) {
			aKe[2].textContent = aKg + 1 + " / " + a5s
		}, this.show = function(ka) {
			vF.appendChild(bQ.b1.transform(bQ.cY.kM(ka, bQ.cY.kC(ka)))), document.body.appendChild(uj)
		}, this.resize = function() {
			var cw = aZ.aa.nK(.03, .5);
			uj.style.width = 10 * cw + "px", uj.style.font = aZ.aa.lT(1, .75 * cw), aZ.aa.ot(uj, 4), vF.style.top = cw + "px", vF.style.font = aZ.aa.lT(0, .55 * cw), aZ.aa.ot(vF, 2), uj.style.height = cw + vF.offsetHeight + "px";
			for (var a4 = 0; a4 < 3; a4++) aZ.aa.ot(aKe[a4], 6), aKe[[0, 1, 3][a4]].style.width = 2 * cw + "px";
			for (a4 = 0; a4 < 4; a4++) aKe[a4].style.height = cw + "px", aZ.aa.ot(aKe[a4], 2);
			aKe[2].style.width = 4 * cw + "px", aKe[1].style.left = 2 * cw + "px", aKe[2].style.left = 4 * cw + "px", aKe[3].style.left = 8 * cw + "px"
		}, this.bi = function() {
			for (var a4 = 0; a4 < 4; a4++) aKe[a4].onclick = null, aKe[a4].onmouseover = null, aKe[a4].onmouseout = null;
			aT.removeChild(document.body, uj), uj = vF = aKe = null
		}, uj.style.position = "absolute", uj.style.color = t.u, uj.style.zIndex = "3", uj.style.right = "0", uj.style.top = "0", vF.style.position = "absolute", vF.style.height = "auto", vF.style.color = t.u, vF.style.backgroundColor = t.da, vF
		.style.left = "0", vF.style.width = "100%", vF.style.overflowWrap = "break-word", uj.appendChild(vF);
	for (var a4 = 0; a4 < 4; a4++) aKe[a4] = document.createElement("div"), aKe[a4].style.position = "absolute", aKe[a4].style.backgroundColor = t.da, aKe[a4].style.color = t.u, aKe[a4].style.top = "0", aKe[a4].style.display = "flex", aKe[a4].style
		.justifyContent = "center", aKe[a4].style.alignItems = "center", aKe[a4].style.userSelect = "none", aKe[a4].style.outline = "none", aKe[a4].style.font = "inherit", 2 !== (aKe[a4].aKf = a4) && (aKe[a4].onclick = a5r, aKe[a4].onmouseover = dV,
			aKe[a4].onmouseout = dW), uj.appendChild(aKe[a4]);
	aKe[0].textContent = "◀", aKe[1].textContent = "▶", aKe[3].textContent = "✖"
}

function aKh() {
	this.w = function(player) {
		var aKi = function(player) {
			for (var aH0 = h1.aH0.aH9(), a5 = aH0.length, rQ = Math.min(a5, 32), aA = gi.o1(a5), a4 = 0; a4 < rQ; a4++) {
				var aKi = (a4 + aA) % a5,
					e0 = aH0[aKi],
					yx = e0[0],
					yy = e0[e0.length - 1];
				if (h1.cY.aKl(player, yx) && h1.cY.aKm(player, yy)) return aKi;
				if (h1.cY.aKl(player, yy) && h1.cY.aKm(player, yx)) return 0 <= (aKi = h1.aH0.aGx(yy, yx)) ? aKi : h1.aH0.aGw() ? -1 : h1.aH0.aH8(h1.aH0.aH1(e0))
			}
			return -1
		}(player);
		return -1 !== aKi && (aKi = h1.aH0.get(aKi), !h1.cY.aKk(player, aKi)) && (h2.z[0] = aKi, !0)
	}
}

function tk() {
	this.cG = null, this.aKn = null, this.aKo = null, this.ck = function() {
		var aKp = [120, 105, 92],
			cos = [12, 12, 60],
			aKq = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aKr = [140, 130, 120],
			aKs = [12, 12, 76],
			aKt = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aKu = [130, 117, 106],
			aKv = [12, 12, 68],
			aKw = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.cG = new Array(cC.tc + 1), this.cG[0] = {
			name: L(413),
			cv: 230,
			cw: 230,
			m4: 1e3,
			m1: 2e3,
			ts: 173
		}, this.cG[1] = {
			name: L(414),
			cv: 800,
			cw: 800,
			m4: 100,
			m1: 50,
			ts: 43
		}, this.cG[2] = {
			name: L(415),
			cv: 512,
			cw: 512,
			m4: 128,
			m1: 32,
			ts: 0
		}, this.cG[3] = {
			name: L(416) + " 1",
			cv: 960,
			cw: 960,
			m4: 60,
			m1: 8,
			ts: 0
		}, this.cG[4] = {
			name: L(417),
			cv: 900,
			cw: 900,
			m4: 100,
			m1: 5,
			ts: 0
		}, this.cG[5] = {
			name: L(418),
			cv: 1e3,
			cw: 1e3,
			m4: 100,
			m1: 40,
			ts: 0
		}, this.cG[6] = {
			name: L(419),
			cv: 1e3,
			cw: 1e3,
			m4: 100,
			m1: 20,
			ts: 0
		}, this.cG[7] = {
			name: L(420),
			cv: 1024,
			cw: 1024,
			m4: 128,
			m1: 32,
			ts: 0
		}, this.cG[8] = {
			name: L(421),
			cv: 820,
			cw: 820,
			m4: 200,
			m1: 100,
			ts: 0
		}, this.cG[9] = {
			name: L(422),
			cv: 1024,
			cw: 1024,
			m4: 128,
			m1: 32,
			ts: 0
		}, this.cG[10] = {
			name: L(423),
			aGZ: aKr,
			aGa: aKs,
			u8: aKt
		}, this.cG[11] = {
			name: L(424),
			aGZ: aKu,
			aGa: aKv,
			u8: aKw
		}, this.cG[12] = {
			name: L(425),
			aGZ: aKu,
			aGa: aKv,
			u8: aKw
		}, this.cG[13] = {
			name: L(426),
			aGZ: aKp,
			aGa: cos,
			u8: aKq
		}, this.cG[14] = {
			name: L(427),
			aGZ: aKp,
			aGa: cos,
			u8: aKq
		}, this.cG[15] = {
			name: L(428),
			aGZ: aKr,
			aGa: aKs,
			u8: aKt
		}, this.cG[16] = {
			name: L(429),
			aGZ: aKr,
			aGa: aKs,
			u8: aKt
		}, this.cG[17] = {
			name: L(430),
			aGZ: aKp,
			aGa: cos,
			u8: aKq
		}, this.cG[18] = {
			name: L(431),
			aGZ: aKu,
			aGa: aKv,
			u8: aKw
		}, this.cG[19] = {
			name: L(432),
			aGZ: aKp,
			aGa: cos,
			u8: aKq
		}, this.cG[20] = {
			name: L(433),
			cv: 1024,
			cw: 1024,
			m4: 128,
			m1: 32,
			ts: 0
		}, this.cG[21] = {
			name: L(416) + " 2",
			cv: 940,
			cw: 940,
			m4: 80,
			m1: 8,
			ts: 0
		}, this.cG[22] = {
			name: L(434),
			aGZ: aKu,
			aGa: aKv,
			u8: aKw
		}, this.cG[23] = {
			name: L(435),
			aGZ: aKr,
			aGa: aKs,
			u8: aKt
		}, this.cG[cC.tc] = {
			name: ""
		}, this.aKn = new Uint8Array(12);
		for (var a4 = 0; a4 < 10; a4++) this.aKn[a4] = a4;
		for (this.aKn[10] = 20, this.aKn[11] = 21, this.aKo = new Uint8Array(cC.td), a4 = 0; a4 < 10; a4++) this.aKo[a4] = 10 + a4;
		this.aKo[10] = 22, this.aKo[11] = 23
	}
}

function aKx() {
	var aKy = 0,
		aKz = 0,
		aL0 = 300,
		aL1 = 300,
		aL2 = 0;
	this.sK = 0, this.cy = new Uint32Array(512), this.ck = function() {
		aKz = aKy = 0, this.sK = 0, aL2 = 0
	}, this.w = function() {
		if (function() {
				var a5 = ga.sJ.sK;
				if (0 === a5) return 1;
				var cy = ga.sJ.cy;
				if (eW.et() % 35 == 6) {
					for (var a4 = a5 - 1; 0 <= a4; a4--) gR.sI(cy[a4] << 2) || (a5--, cy[a4] = cy[a5]);
					ga.sJ.sK = a5
				}
				return a5 < cy.length
			}())
			if (aL0 <= aKy) {
				var aL6 = ga.sJ.sK;
				if (aL6) {
					if (eW.et() % 350 != 1) return;
					if (aL2 !== aL6) return void(aL2 = aL6);
					if (!aZ.d.el(je[0])) return
				} else if (eW.et() % 12 != 8) return;
				aZ.d.aL7() || ga.sJ.ck()
			} else {
				var a4, cv = cC.mO,
					aL8 = cv - 2,
					aL6 = aL8 * (cC.mP - 2),
					aL9 = aL0,
					cy = ga.sJ.cy,
					rQ = ga.sJ.sK,
					aLA = cy.length,
					lE = Math.min(aKz + aL9 * ((1 + 19 * ga.performance.nn) * aL1), aL6);
				for (a4 = aKz; a4 < lE; a4 += aL9) {
					var rJ = 4 * (a4 % aL8 + (cf.cg(a4, aL8) + 1) * cv + 1);
					if (gR.sI(rJ) && (cy[rQ] = rJ >> 2, ++rQ === aLA)) {
						a4 += aL9;
						break
					}
				}(aKz = a4) >= aL6 && (aKz = ++aKy), ga.sJ.sK = rQ
			}
	}
}

function j5() {
	this.ps = 0, this.kb = null, this.cP = null, this.cY = null, this.bW = null, this.bR = null, this.ci = null, this.message = null, this.be = null, this.b1 = null, this.aLB = null, this.aFC = new aGI, this.bZ = 0, this.aFS = 0, this.ck =
function() {
		this.aFS = eW.av, this.ps = gw.kF.yj(bp.cy.data[105].value, 5), this.cP = new aLC, this.cY = new k0, this.bW = new aLD, this.bR = new aLE, this.ci = new aJJ, this.message = new aLF, this.be = new zO, this.b1 = new aLG, this.aLB = new pk,
			this.bW.ck(), hO.ck(), this.bZ = 1, d0.jF.setState(1), eY.setState(0)
	}, this.bi = function() {
		this.b1 && this.b1.bi(), this.kb = null, this.cP = null, this.cY = null, this.bW = null, this.bR = null, this.ci = null, this.message = null, this.be = null, this.b1 = null, this.aLB = null, this.bZ = 0, hO.bi(), d0.jF.setState(0)
	}
}

function jw(id, a1t, aLH) {
	var jq, ox;

	function aLK() {
		ox.ya.innerHTML += "<br>" + L(438)
	}

	function aLM() {
		var bw = 1;
		aT.bl(4, 1, new tZ(L(439), L(440), !1, [new aS("🔄 Reload", function() {
			bw && (setTimeout(function() {
				aT.bl(1)
			}, 5e3), d0.jF.aLO()), bw = 0
		}, t.a9W)]))
	}

	function aLJ() {
		gt.cD(90), gt.oG(30, Math.floor(cf.pow(30) * Math.random())), gt.oG(30, Math.floor(cf.pow(30) * Math.random())), gt.oG(30, Math.floor(cf.pow(30) * Math.random())), gx.ck(gt.dy), bp.bq.br(110, gv.kF.jU(gv.kF.jP(15))), bj.g5.aAO()
	}
	this.aLI = !0, this.aIo = id, this.show = function() {
		jq.show(), this.resize(), 15 === id ? (bj.bW.yR(id) ? aLJ : aLK)() : 16 === id ? bj.bW.yR(id) ? bj.n9.oM(2) : aLK() : 17 === id ? bj.bW.yR(id) ? bj.n9.oM(3) : aLK() : 18 === id ? (bj.bW.close(0, 3253), bj.bW.yN(0, id), aLK()) : 21 ===
			id ? bj.bW.yR(id) ? bj.aLL.aD0(a1t.jx, a1t.jy, a1t.jz) : aLK() : 22 === id ? bj.bW.yR(id) ? bj.aLL.aD1(a1t.jx, a1t.a23, a1t.a24) : aLK() : 23 === id ? bj.bW.yR(id) ? bj.aLL.aD3(a1t.y6, a1t.ke) : aLK() : 24 === id ? bj.bW.yR(id) ? bj
			.aLL.aD4(a1t.y6, a1t.jy, a1t.jz) : aLK() : 25 === id ? bj.bW.yR(id) ? bj.g5.aAT(a1t) : aLK() : 28 === id ? bj.bW.yR(id) ? bj.aLL.aD2(a1t.jx, a1t.a23, a1t.a24) : aLK() : 29 === id ? bj.bW.yR(id) ? bj.g5.aAP(a1t) : aLK() : 30 === id &&
			(bj.bW.yR(id) ? gp.wF() || aLM() : aLK())
	}, this.aCN = function() {
		15 === id ? aLJ() : 16 === id ? bj.n9.oM(2) : 17 === id ? bj.n9.oM(3) : 18 === id ? aT.bl(8, this.dk, new jw(16)) : 21 === id ? bj.aLL.aD0(a1t.jx, a1t.jy, a1t.jz) : 22 === id ? bj.aLL.aD1(a1t.jx, a1t.a23, a1t.a24) : 23 === id ? bj.aLL
			.aD3(a1t.y6, a1t.ke) : 24 === id ? bj.aLL.aD4(a1t.y6, a1t.jy, a1t.jz) : 25 === id ? bj.g5.aAT(a1t) : 28 === id ? bj.aLL.aD2(a1t.jx, a1t.a23, a1t.a24) : 29 === id ? bj.g5.aAP(a1t) : 30 === id ? gp.wF() || aLM() : 1e3 === id && (this
				.aIo = id = 25, bj.g5.aAT(a1t))
	}, this.wI = function(code, hS, data) {
		!hS && code !== id || (15 === code || 16 === code ? aT.bl(7, this.dk) : 17 === code ? (bj.bW.close(0, 3252), bp.bW.aDj(0), bp.cy.data[117].fD && 0 < bp.cy.data[117].fD.length ? (hS = bp.bW.aDk(0), bp.bq.br(105, hS.bs), bp.bq.br(106, hS
			.password), aT.bl(8, this.dk, new jw(16))) : (bp.bq.br(105, ""), aT.bW.tM())) : 21 === code ? aT.bl(10, this.dk, new a5O(data)) : 23 === code ? aT.bl(13, this.dk, new aLN({
			data: data,
			y6: a1t.y6
		})) : 25 === code ? (aT.bW.y0.bs = a1t.bs, bp.pt.by(a1t.bs), aT.bl(15, this.dk)) : 30 === code && (data ? aT.bl(1) : aLM()))
	}, this.aY = function() {
		jq.aY()
	}, this.resize = function() {
		jq.resize(), ox.resize()
	}, this.ae = function(af) {
		2 === af && jq.ag[0].ah()
	}, jq = new aR(L(436), [new aS("⬅️ " + L(1), function() {
		aLH ? aT.bl(29) : aT.bW.tM()
	})]), ox = new oz(jq.aV, L(437))
}

function ha() {
	this.kF = new jN, this.oO = new a8p, this.a4y = new a1Z, this.ck = function() {
		this.kF.ck()
	}
}

function aDz() {
	this.aDq = function() {
		var aLP = eq.data;
		aZ.cb.aLQ(aLP.teamPlayerCount, aLP.playerCount), aLP.numberTeams = aZ.cb.aLR(aLP.teamPlayerCount, 0), aLP.teamPlayerCount[0] && aLP.teamPlayerCount[7] && (aLP.teamPlayerCount[7] = 0, this.aDq())
	}, this.aLS = function() {
		var aLP = eq.data;
		aLP.mapType < 2 ? cC.cD(cC.u9(aLP), aLP.mapSeed) : cC.u3(aLP.canvas)
	}, this.aLT = function() {
		var aLP = eq.data;
		aLP.colorsData || (aLP.colorsData = new Uint32Array(1)), aLP.selectableColor && (aLP.colorsData[0] = bp.bW.a4w()), aLP.selectableName && (aLP.playerNamesData || (aLP.playerNamesData = new Array(1)), aLP.playerNamesData[0] = bp.cy.data[
			122].value)
	}, this.aLU = function() {
		eq.data = new a3e, eq.data.aIncomeType = 2, eq.data.aIncomeData = new Uint8Array(eq.fE), eq.data.aIncomeData[0] = 64
	}
}

function i9() {
	this.ud = new Array(eq.fE), this.sA = new Array(eq.fE), this.kw = new Uint8Array(eq.fE), this.kv = new Uint8Array(eq.fE), this.ml = new Uint16Array(eq.fE), this.mn = new Uint16Array(eq.fE), this.mm = new Uint16Array(eq.fE), this.mo =
		new Uint16Array(eq.fE), this.jd = new Uint32Array(eq.fE), this.a2j = new Uint32Array(eq.fE), this.rM = new Uint32Array(eq.fE), this.rb = null, this.a0V = null, this.pT = null, this.a0W = null, this.em = new Uint16Array(eq.fE), this.en =
		new Uint16Array(eq.fE), this.eo = new Uint16Array(eq.fE), this.eh = new Uint16Array(eq.fE), this.ep = new Uint8Array(eq.fE), this.a2r = new Uint16Array(eq.fE), this.ck = function() {
			this.ud.fill(""), this.sA.fill(""), this.kw.fill(0), this.kv.fill(0), this.ml.fill(0), this.mn.fill(0), this.mm.fill(0), this.mo.fill(0), this.jd.fill(0), this.a2j.fill(0), this.rM.fill(0), this.rb = new Array(eq.fE), this.a0V =
				new Array(eq.fE), this.pT = new Array(eq.fE), this.a0W = new Array(eq.fE), this.em.fill(0), this.en.fill(0), this.eo.fill(0), this.eh.fill(0), this.ep.fill(0), this.a2r.fill(0)
		}
}

function aDs() {
	var bd;
	this.bd = document.createElement("hr"), this.resize = function() {
		aZ.aa.ot(this.bd, 8, t.aLV)
	}, (bd = this.bd).style.marginBottom = bd.style.marginTop = "0.65em", bd.style.marginLeft = bd.style.marginRight = "-4%", bd.style.border = "none"
}

function iz() {
	this.a3n = null, this.eX = !1, this.av = 0, this.rf = 56;
	var aLW = 0;

	function aLX() {
		eW.av = aLW = performance.now(), eW.a3n.w(), window.requestAnimationFrame(aLX)
	}
	this.ck = function() {
		this.aEA(), window.requestAnimationFrame(aLX), this.av = performance.now()
	}, this.wQ = function() {
		eq.lQ ? (this.a3n = new aFs, this.a3n.ck()) : eq.l6 ? this.a3n = new aLY : (this.a3n = new uJ, this.a3n.ck())
	}, this.aEA = function() {
		this.a3n = new eN, this.eX = !0
	}, this.w = function() {
		this.a3n.eO++
	}, this.et = function() {
		return this.a3n.eO
	}, this.a3B = function() {
		var jl = performance.now();
		jl < aLW + 1e3 || (this.av = jl, this.a3n.w())
	}
}

function iO() {
	this.sv = 0;
	var aLZ, aLa, aLb, aLc, aLd, aLe = this.a3c = 0;

	function aLg() {
		aLc = aLd = null, aLe = 0
	}
	this.ck = function(cA, aGK, aGL) {
		aT.bh(), bQ.bi(), eY.setState(10), aLc = cA, aLd = aGK, aLe = aGL, this.sv = cA.sv, this.a3c = aGL, aLZ = 0, aLa = eW.av + 4500, bj.bW.oV = cA.oV, bj.bW.yI === cA.oV ? (console.log("direct pass"), aLb = 0) : (console.log("delayed pass"),
			bj.bW.close(bj.bW.yI, 3247), aLb = 2, bj.bW.yN(cA.oV, 5) && bj.yA.a3d()), m0.imageSmoothingEnabled = !0, eY.qH();
		aGK = gQ.aLi("loading"), aGL = (d0.jF.lR() ? .396 : .25) * eR.lS / aGK.width;
		m0.setTransform(aGL, 0, 0, aGL, Math.floor((eR.cv - aGL * aGK.width) / 2), Math.floor((eR.cw - aGL * aGK.height) / 2)), m0.imageSmoothingEnabled = !1, m0.drawImage(aGK, 0, 0), m0.setTransform(1, 0, 0, 1, 0, 0)
	}, this.ql = function() {
		0 < aLb && eW.av > aLa && (aLb--, aLa += 4500, 0 === eW.uK) && 0 === eW.et() && bj.bW.yN(bj.bW.oV, 5)
	}, this.a3m = function() {
		return 10 === eY.tP() && (bQ.aFC.aGP(aLc, aLd, aLe), aLg(), !0)
	}, this.eT = function() {
		10 === eY.tP() && 2 <= ++aLZ && (bQ.aFC.aGP(aLc, aLd, aLe), aLg())
	}
}

function ik() {
	this.bW = new xy, this.dK = 0;
	var aLj = new Array(32);

	function aLm() {
		for (var a5 = aLj.length, a4 = 0; a4 < a5; a4++) aLj[a4] = null
	}
	this.ck = function() {
		for (var aLk, aLl = document.body.firstChild; aLl;) aLk = aLl.nextSibling, !document.body.contains(aLl) || "DIV" !== aLl.tagName && "INPUT" !== aLl.tagName && "BUTTON" !== aLl.tagName || aT.removeChild(document.body, aLl), aLl = aLk
	}, this.bl = function(aB, dk, a1t) {
		void 0 === dk && (dk = this.dK), eW.eX = !0, 0 === aB && (0 === eY.tP() ? aB = 5 : d0.jF.setState(13)), this.aY(), this.dK === aB && (dk = aLj[aB].dk, aLj[aB] = null), this.dK = aB;
		var rQ = aLj[aB];
		if (!rQ || 4 === aB || 7 === aB || 8 === aB || 9 === aB || 10 === aB || 11 === aB || 13 === aB || 15 === aB || 18 === aB || 20 <= aB && aB <= 28 || 32 === aB || 33 === aB) {
			if (0 === aB) return void aLm();
			1 === aB ? rQ = new tF : 2 === aB ? rQ = new a5c : 3 === aB ? rQ = new aLn : 4 === aB || 9 === aB || 10 === aB || 11 === aB || 13 === aB || 33 === aB ? rQ = a1t : 5 === aB ? rQ = new aLo : 6 === aB ? rQ = new a1f : 7 === aB ? rQ =
				new aHB(aT.bW.y1) : 8 === aB ? rQ = a1t : 12 === aB ? rQ = new aLp : 14 === aB ? rQ = new aLq : 15 === aB ? rQ = new aHB(aT.bW.y0) : 16 === aB ? rQ = new jp : 17 === aB ? rQ = new aLr : 18 === aB ? rQ = new aIC : 19 === aB ? rQ =
				new aLs : 20 === aB ? rQ = new aLt : 21 === aB ? rQ = new aDn : 22 === aB ? rQ = new aLu : 23 === aB ? rQ = new aF2 : 24 === aB ? rQ = new aLv : 25 === aB ? rQ = new aBF : 26 === aB ? rQ = new aJV : 27 === aB ? rQ = new aLw :
				28 === aB ? rQ = new eu : 29 === aB ? rQ = new b7 : 30 === aB ? rQ = new aO : 31 === aB && (rQ = new fi), rQ.dk = dk, aLj[aB] = rQ
		}
		rQ.show(a1t)
	}, this.f1 = function() {
		this.lJ() && this.aU(this.c0().dk)
	}, this.aU = function(aB) {
		this.lJ() && (aLj[aB] ? (this.aY(), eW.eX = !0, this.dK = aB, aLj[aB].show()) : this.bl(aB))
	}, this.aY = function() {
		this.lJ() && aLj[this.dK].aY()
	}, this.bh = function() {
		this.lJ() && (aLj[this.dK].aY(), aLm(), this.dK = 0, d0.jF.setState(13))
	}, this.eZ = function() {
		var rQ;
		this.lJ() && (rQ = aLj[this.dK]).eZ && rQ.eZ()
	}, this.resize = function() {
		if (!this.lJ()) return !1;
		aLj[this.dK].resize()
	}, this.lp = function(dF, dE) {
		var rQ;
		this.lJ() && (rQ = aLj[this.dK]).lp && rQ.lp(dF, dE)
	}, this.ly = function(dF, dE) {
		var rQ;
		this.lJ() && (rQ = aLj[this.dK]).ly && rQ.ly(dF, dE)
	}, this.a2V = function() {
		var rQ;
		this.lJ() && (rQ = aLj[this.dK]).a2V && rQ.a2V()
	}, this.lx = function(ll, lm, deltaY) {
		var rQ;
		this.lJ() && (rQ = aLj[this.dK]).lx && rQ.lx(ll, lm, deltaY)
	}, this.ae = function(code) {
		var rQ;
		return !!this.lJ() && ((rQ = aLj[this.dK]).ae && rQ.ae(code), !0)
	}, this.w = function() {
		var rQ;
		this.lJ() && (rQ = aLj[this.dK]) && rQ.w && rQ.w()
	}, this.lJ = function() {
		return 0 < this.dK
	}, this.c0 = function() {
		return aLj[this.dK]
	}, this.a1h = function(aB) {
		return aLj[aB]
	}, this.f0 = function() {
		return aLj
	}, this.removeChild = function(nR, aGH) {
		try {
			nR.removeChild(aGH)
		} catch (bd) {
			console.log("removeChild error " + bd)
		}
	}
}

function aLx() {
	function aM0(player, aJv) {
		aJv = h0.mW(h1.bW.mX[aJv]), aJv = gR.yo(h0.pY(aJv));
		return !!h1.cY.aM6(player, aJv)
	}

	function aLy(player) {
		return h1.nk.nl(player) && !h1.aH0.aGw()
	}
	this.aKJ = function(player, mV) {
		return !!aLy(player) && -1 !== (mV = function(player, mV) {
			for (var a5 = h1.bW.pR, mX = h1.bW.mX, sd = h1.bW.sd, aMH = h0.yl(), aMI = -1, a4 = 0; a4 < a5; a4++) {
				var v7 = h0.yw(mV, h0.mW(mX[a4]));
				v7 < aMH && aZ.d.a4W(player, sd[a4] >> 3) && (aMH = v7, aMI = a4)
			}
			return aMI
		}(player, mV)) && !!aM0(player, mV) && (h2.oD[3] = h1.bW.o2[mV], !0)
	}, this.aM1 = function(player, mS) {
		return !!aLy(player) && !!h1.cY.aJj(mS) && !!aM0(player, h2.oD[2])
	}, this.o7 = function(player, mS, aM2) {
		return !! function(player, mS, aM2) {
			if (aLy(player) && h1.cY.aJj(mS)) {
				mS = h2.oD[2];
				if (aZ.d.a4W(player, h1.bW.sd[mS] >> 3)) {
					if (function(player, aJv) {
							return h1.cY.aMG(player, aJv) && (h2.z[0] = h1.aH0.aH1(h1.bW.aJp[aJv]), h2.oD[1] = 6, !0)
						}(player, mS)) return 1;
					var oA = h0.mW(h1.bW.mX[mS]),
						aM8 = h1.cY.aM9(player, oA);
					if (-1 !== aM8) {
						aM8 = h0.yw(aM8, oA);
						if (!(aM2 && 120 < aM8)) {
							aM2 = function(aJv, aMA, oA) {
								var e0 = h1.bW.aJp[aJv],
									aJv = h1.bW.sc[aJv],
									aMD = h0.yw(oA, e0[aJv + 1]);
								if (aMA <= aMD) return h1.cY.aME(oA, e0[aJv + 1], aMD, aMA);
								for (var v7 = aMA - aMD, a5 = e0.length - 1, a4 = aJv + 1; a4 < a5; a4++) {
									var aMF = h0.yw(e0[a4], e0[a4 + 1]);
									if (v7 <= aMF) return h1.cY.aME(e0[a4], e0[a4 + 1], aMF, v7);
									v7 -= aMF
								}
								return e0[a5]
							}(mS, aM8, oA);
							if (h1.a4f.aJ3(player, aM2, 1)) return h2.oD[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, mS, aM2) && (player = h2.oD[2], h1.bW.sM[player] = 64 + h1.bW.sM[player] % 64, h1.o3.qF(mS, h1.bW.aM4), !0)
	}
}

function aMJ() {
	this.a3O = function() {
		var a4;
		if (gx.size < gt.t8(23)) bj.bW.yV(0, 3259);
		else {
			var jx = gx.jT(6),
				a5 = gx.jT(10),
				data = [];
			if (9 === jx || 10 === jx || 11 === jx) {
				for (a4 = 0; a4 < a5; a4++) data.push([gx.jT(30), gw.a4y.aCJ(5), gx.aEq(32), 0, gx.jT(30)]);
				8 === aT.dK && aT.c0().wI(21, !0, {
					jx: jx,
					data: data
				})
			} else if (12 === jx) {
				for (a4 = 0; a4 < a5; a4++) data.push([gx.jT(20), gx.jT(30), gx.jT(30), gx.aEq(32), gx.jT(30), gw.a4y.aCJ(5), gw.a4y.aCJ(5)]);
				8 === aT.dK && aT.c0().wI(21, !0, {
					jx: jx,
					data: data
				})
			} else {
				var t0 = gx.jT(16);
				if (gx.aCL(39 + 16 * t0 + a5 * (0 === jx ? 111 : 1 === jx ? 101 : 2 === jx || 3 === jx ? 127 : 212))) {
					if (0 === jx)
						for (a4 = 0; a4 < a5; a4++) data.push([gx.jT(30), gw.oO.pc(gx.jT(5)), gx.jT(16), gx.jT(30), gx.jT(30)]);
					else if (1 === jx)
						for (a4 = 0; a4 < a5; a4++) data.push([gx.jT(16), gw.oO.pc(gx.jT(3)), gx.jT(16), gw.oO.pc(gx.jT(5)), gx.jT(31), gx.jT(30)]);
					else if (2 === jx || 3 === jx)
						for (a4 = 0; a4 < a5; a4++) data.push([gx.jT(30), gw.oO.pc(gx.jT(5)), gx.aEq(32), gx.jT(30), gx.jT(30)]);
					else
						for (a4 = 0; a4 < a5; a4++) data.push([gx.jT(20), gx.jT(30), gx.jT(30), gx.jT(30), gx.jT(30), gx.aEq(32), gx.jT(30), gw.oO.pc(gx.jT(5)), gw.oO.pc(gx.jT(5))]);
					8 === aT.dK && aT.c0().wI(21, !0, {
						jx: jx,
						data: data
					})
				} else bj.bW.yV(0, 3260)
			}
		}
	}, this.a3P = function() {
		if (gx.size < gt.t8(29)) bj.bW.yV(0, 3265);
		else {
			var aMK = gx.jT(4),
				aML = gx.jT(7),
				aMM = gx.jT(11);
			if (gx.aCL(29 + 16 * aML + 16 * aMM + 11 * aMK)) {
				for (var data = [], a4 = 0; a4 < aMK; a4++) {
					for (var kf = gw.oO.pc(gx.jT(3)), aMN = gx.jT(8), aMO = [], aN = 0; aN < aMN; aN++) aMO.push(gx.jT(16));
					data.push({
						name: "[" + kf + "]",
						aMO: aMO
					})
				}
				8 === aT.dK && aT.c0().wI(23, !0, data)
			} else bj.bW.yV(0, 3266)
		}
	}
}

function aMP() {
	this.aMQ = function(canvas, aMR, a1t) {
		var cv = canvas.width,
			cw = canvas.height,
			af = aZ.aa.aEc(cv, cw),
			d6 = aZ.aa.getContext(af, !0),
			canvas = (d6.drawImage(canvas, 0, 0), d6.getImageData(0, 0, cv, cw));
		return aMR(canvas.data, cv, cw, a1t), d6.putImageData(canvas, 0, 0), af
	}, this.aMS = function(b4, cv, cw) {
		for (var dF = cv - 1; 0 <= dF; dF--)
			for (var dE = cw - 1; 0 <= dE; dE--) {
				var a4 = 4 * (dF + dE * cv);
				b4[3 + a4] = b4[a4], b4[a4] = b4[1 + a4] = b4[2 + a4] = 255
			}
	}, this.aMT = function(b4, cv, cw) {
		for (var dF = cv - 1; 0 <= dF; dF--)
			for (var dE = cw - 1; 0 <= dE; dE--) {
				var a4 = 4 * (dF + dE * cv);
				b4[1 + a4] > b4[2 + a4] + 10 && (b4[3 + a4] = b4[a4], b4[1 + a4] = b4[2 + a4])
			}
	}, this.aMU = function(b4, cv, cw, a1t) {
		for (var gap = Math.floor(Math.min(cv, cw) * a1t), dF = 0; dF < cv; dF++)
			for (var a4, dE = 0; dE < cw; dE++)(dF < gap || dE < gap || cv - gap <= dF || cw - gap <= dE) && (b4[3 + (a4 = 4 * (dF + dE * cv))] = 255 - 255 * (b4[1 + a4] - b4[a4]) / (255 - b4[a4]))
	}, this.aMV = function(b4, cv, cw, a1t) {
		for (var dF = cv - 1; 0 <= dF; dF--)
			for (var dE = cw - 1; 0 <= dE; dE--) {
				var a4 = 4 * (dF + dE * cv);
				b4[a4] = a1t[0], b4[1 + a4] = a1t[1], b4[2 + a4] = a1t[2]
			}
	}, this.aMW = function(b4, cv, cw, a1t) {
		for (var gap = Math.floor(cv * a1t), dF = 0; dF < cv; dF++)
			for (var a4, dE = 0; dE < cw; dE++)(dF < gap || dE < gap || cv - gap <= dF || cw - gap <= dE) && (b4[a4 = 4 * (dF + dE * cv)] = b4[1 + a4] = b4[2 + a4] = 0)
	}, this.aMX = function(b4, cv, cw) {
		for (var dE, a4, dF = cv - 1; 0 <= dF; dF--)
			for (dE = cw - 1; 0 <= dE; dE--) 200 < b4[1 + (a4 = 4 * (dF + dE * cv))] && b4[1 + a4] - 20 > b4[a4] && b4[1 + a4] - 20 > b4[2 + a4] ? b4[a4] + b4[2 + a4] < 40 ? b4[3 + a4] = 0 : (b4[3 + a4] = b4[a4], b4[a4] = 255, b4[1 + a4] = 255,
				b4[2 + a4] = 255) : b4[a4] < 50 && b4[1 + a4] < 50 && b4[2 + a4] < 50 && (b4[a4] + b4[1 + a4] + b4[2 + a4] < 50 ? b4[3 + a4] = 180 : b4[3 + a4] = 180 + Math.floor(75 * (b4[a4] + b4[1 + a4] + b4[2 + a4] - 50) / 100))
	}, this.aMY = function(b4, cv, cw) {
		for (var dE, a4, dF = cv - 1; 0 <= dF; dF--)
			for (dE = cw - 1; 0 <= dE; dE--) b4[1 + (a4 = 4 * (dF + dE * cv))] > b4[a4] + 20 && b4[1 + a4] > b4[2 + a4] + 20 && b4[a4] + b4[2] < 40 && (b4[3 + a4] = 255 - b4[1 + a4], b4[a4] = b4[1 + a4] = b4[2 + a4] = b4[a4])
	}, this.aMZ = function(b4, cv, cw, a1t) {
		for (var t6 = cv >> 1, dF = 0; dF < cv; dF++)
			for (var dE = 0; dE < cw; dE++) Math.sqrt((dF - t6) * (dF - t6) + (dE - t6) * (dE - t6)) > a1t * t6 && (b4[4 * (dF + dE * cv) + 3] = 0)
	}
}

function ic() {
	this.sP = new aMa, this.qL = new aIH, this.bW = new aMb, this.zH = new aMc, this.aMd = new aMe, this.pW = new sL, this.aMf = new nj, this.a4f = new aMg, this.aMh = new aMi, this.aMj = new a3w, this.nk = new pQ, this.aKY = new aMk, this.aH0 =
		new aGu, this.cY = new aMl, this.o6 = new aLx, this.o3 = new aJe, this.aJ6 = new qo, this.ck = function() {
			this.aH0.ck(), this.qL.ck(), this.bW.ck(), this.zH.ck(), this.aMd.ck(), this.aMj.ck(), this.o3.ck()
		}, this.eZ = function() {
			this.aMj.eZ(), this.qL.eZ()
		}
}

function ix() {
	var oe = 501,
		aMn = (this.aMm = new Uint32Array(oe), this.a7z = new Uint32Array(oe), this.rd = new Uint16Array(oe), this.tQ = 0, 1),
		n7 = 0;

	function aMq(self) {
		self.max.fill(0)
	}

	function aMs(self, a4) {
		self.max[0] = Math.max(self.aMm[a4], self.max[0]), self.max[1] = Math.max(self.a7z[a4], self.max[1]), self.max[2] = Math.max(self.rd[a4], self.max[2])
	}
	this.max = [0, 0, 0], this.aMo = 0, this.jk = new Array(21), this.aMp = null, this.jB = function() {
		this.aMp = [L(441), L(442), L(443), L(444), L(445), L(446), L(447), L(448), L(412), L(449), L(450), L(451), L(452), L(453), "", L(454), L(455), L(456), L(457), L(458), L(459)]
	}, this.ck = function() {
		this.tQ = 0, aMn = 1, this.aMo = 0, n7 = 0, aMq(this), this.jk.fill(0)
	}, this.aIx = function(player, lK) {
		aZ.d.a2q(player) && (this.jk[0] += lK + 1, this.jk[1]++, this.jk[12] += h2.a7w[1])
	}, this.a7x = function(player, a7u) {
		__fx.donationsTracker.logDonation(player, a7u, h2.a7w[0]);
		player === eq.jj && (gG.a7x(h2.a7w[0], h2.a7w[1], a7u), this.jk[12] += h2.a7w[1], this.jk[16] += h2.a7w[0]), a7u === eq.jj && (gG.aA7(h2.a7w[0], player), this.jk[10] += h2.a7w[0])
	}, this.aJ4 = function(player) {
		aZ.d.a2q(player) && (this.jk[2]++, this.jk[12] += h2.a7w[1])
	}, this.aJI = function(player) {
		aZ.d.a2q(player) && (this.jk[19]++, this.jk[12] += h2.a7w[1])
	}, this.sf = function(player) {
		aZ.d.a2q(player) && this.jk[20]++
	}, this.sp = function(player, lL, aB) {
		aZ.d.a2q(player) && (this.jk[aB] += lL)
	}, this.w = function() {
		var self;
		this.aMo || 0 < n7-- || ((self = this).aMm[self.tQ] = ei.jd[eq.jj], self.a7z[self.tQ] = ei.rM[eq.jj], self.rd[self.tQ] = gT.re(eq.jj), aMs(self, self.tQ), self.tQ++, self.tQ === oe && function(self) {
			aMq(self), aMs(self, 0), self.tQ = 1 + cf.cg(oe, 2);
			for (var a4 = 1; a4 < self.tQ; a4++) self.aMm[a4] = self.aMm[2 * a4], self.a7z[a4] = self.a7z[2 * a4], self.rd[a4] = self.rd[2 * a4], aMs(self, a4);
			aMn *= 2
		}(self), n7 = aMn - 1, hF.by(), 0 === ei.kv[eq.jj] && (self.aMo = eW.et()))
	}
}

function hh() {
	this.ck = function() {
		if (0 === eq.data.sResourcesType) {
			for (var aDZ = eq.er, rM = ei.rM, a4 = 0; a4 < aDZ; a4++) rM[a4] = 512;
			var aDa = eq.x6,
				a8y = g7.a8y,
				np = g7.np;
			for (a4 = aDZ; a4 < aDa; a4++) rM[a4] = a8y[np[a4]]
		} else(1 === eq.data.sResourcesType ? function() {
			for (var a5 = eq.x6, rM = ei.rM, sResourcesValue = eq.data.sResourcesValue, a4 = 0; a4 < a5; a4++) rM[a4] = sResourcesValue
		} : function() {
			for (var a5 = eq.x6, rM = ei.rM, sResourcesData = eq.data.sResourcesData, a4 = 0; a4 < a5; a4++) rM[a4] = sResourcesData[a4]
		})();
		hE.jk[8] = ei.rM[eq.jj]
	}
}

function aMx() {
	this.a01 = function(aMy, aB, aMz) {
		var nI = aMy.height,
			a46 = aZ.aa.aEc(nI, nI),
			d6 = aZ.aa.getContext(a46);
		return function(cv, d6, aMz) {
			d6.fillStyle = aMz, d6.beginPath(), d6.arc(cv / 2, cv / 2, .47 * cv, 0, 2 * Math.PI), d6.fill()
		}(nI, d6, aMz), d6.drawImage(aMy, -aB * nI, 0), a46
	}, this.aN1 = function(aN2) {
		var d6, t2, nI = aN2.height;
		return aN2.width === nI && (t2 = (d6 = aZ.aa.getContext(aN2, !0)).getImageData(0, 0, nI, nI), aZ.aN3.aMZ(t2.data, nI, nI, .9), d6.putImageData(t2, 0, 0)), aN2
	}
}

function aMa() {
	this.a2v = function(player) {
		for (var aN4 = h1.bW.aN4, jy = player << 3, a4 = jy + h1.bW.nm[player] - 1; jy <= a4; a4--) this.sQ(aN4[a4])
	}, this.sQ = function(aN5) {
		var bW = h1.bW,
			aN6 = bW.pR - 1,
			aN7 = bW.sd[aN5],
			aN8 = bW.aN9[aN5],
			aNA = bW.mX[aN5];
		bW.pR = aN6, bW.sd[aN5] = bW.sd[aN6], bW.mX[aN5] = bW.mX[aN6], bW.sN[aN5] = bW.sN[aN6], bW.se[aN5] = bW.se[aN6], bW.aN9[aN5] = bW.aN9[aN6], bW.o2[aN5] = bW.o2[aN6], bW.sM[aN5] = bW.sM[aN6], bW.aIi[aN5] = bW.aIi[aN6], bW.aJp[aN5] = bW.aJp[
				aN6], bW.sc[aN5] = bW.sc[aN6], bW.aN4[bW.sd[aN5]] = aN5,
			function(aCw) {
				var player = aCw >> 3,
					bW = h1.bW,
					a5 = bW.nm[player] - 1,
					aND = (player << 3) + a5;
				bW.nm[player] = a5, aND !== aCw && (bW.aN4[aCw] = bW.aN4[aND], bW.sd[bW.aN4[aCw]] = aCw)
			}(aN7), h1.zH.zH[h0.zG(bW.mX[aN5])][bW.aN9[aN5]] = aN5, aN6 = h0.zG(aNA), aN7 = aN8, aN6 = h1.zH.zH[aN6], bW = aN6.pop(), aN7 !== aN6.length && (aN6[aN7] = bW, h1.bW.aN9[bW] = aN7)
	}
}

function aNF() {
	var aNG, aNI = new Uint16Array(8);

	function aNL(size, player) {
		for (var a4 = ei.rb[player].length - 1; size <= a4; a4--) gR.aDN(ei.rb[player][a4], player)
	}
	this.ck = function() {
		aNG = 0
	}, this.aIw = function(player, aIt) {
		return h2.aIu[1] = ei.rb[player].length, h2.aIu[0] === eq.fE ? ga.aIv.aNJ(player) : this.aNK(player, h2.aIu[0]), (0 !== h2.aIu[1] || 0 !== ei.rb[player].length) && !(!aIt && h2.aIu[1] === ei.rb[player].length || (h2.aIu[0] === eq.fE ? ei
			.en[player]++ : ei.eo[player]++, 0))
	}, this.aIy = function(player) {
		aNL(h2.aIu[1], player), gS.qF(player, h2.a7w[0], h2.aIu[0]), g8.jn(player, !1)
	}, this.aNM = function(player, oj, a5, np) {
		var aNN = cf.cg(12 * ei.rM[player], 1024);
		np -= np >= cf.cg(ei.rM[player], 2) ? aNN : 0, aNL(a5, player), gS.qF(player, np, oj), ei.rM[player] -= np + aNN, g8.jn(player, !1)
	}, this.aNK = function(player, oj) {
		for (var sS, v1 = gR.v1, a4 = ei.a0V[player].length - 1; 0 <= a4; a4--)
			if (gR.aDV(ei.a0V[player][a4]))
				for (sS = 3; 0 <= sS; sS--)
					if (gR.sn(ei.a0V[player][a4] + v1[sS]) && gR.sZ(ei.a0V[player][a4] + v1[sS]) === oj) {
						ei.rb[player].push(ei.a0V[player][a4]);
						break
					}
	}, this.aNJ = function(player) {
		for (var v1 = gR.v1, a4 = ei.a0V[player].length - 1; 0 <= a4; a4--)
			if (gR.aDV(ei.a0V[player][a4]))
				for (var sS = 3; 0 <= sS; sS--)
					if (gR.sI(ei.a0V[player][a4] + v1[sS])) {
						ei.rb[player].push(ei.a0V[player][a4]);
						break
					}
	}, this.aNO = function(player, aNP) {
		var a4, aN, sS, aKc, a5 = ei.a0V[player].length,
			ru = 256 <= a5 ? 12 : 32 <= a5 ? 6 : 1,
			tD = a5 - 1 - gi.o1(ru),
			v1 = gR.v1;
		aNG = 0;
		loop: for (a4 = tD; 0 <= a4; a4 -= ru)
			for (sS = 3; 0 <= sS; sS--)
				if ((aKc = gR.sI(ei.a0V[player][a4] + v1[sS]) ? eq.fE : gR.sZ(ei.a0V[player][a4] + v1[sS])) === eq.fE || gR.sn(ei.a0V[player][a4] + v1[sS]) && aKc !== player && (aNP || hQ.sU(player, aKc))) {
					for (aN = aNG - 1; 0 <= aN; aN--)
						if (aNI[aN] === aKc) continue loop;
					if (aNI[aNG] = aKc, 8 <= ++aNG) return !0
				}
		return 0 < aNG
	}, this.aNQ = function(player, aNP) {
		var a4, sS, aKc, v1 = gR.v1;
		for (aNG = 0, a4 = ei.a0V[player].length - 1; 0 <= a4; a4--)
			for (sS = 3; 0 <= sS; sS--)
				if ((aKc = gR.sI(ei.a0V[player][a4] + v1[sS]) ? eq.fE : gR.sZ(ei.a0V[player][a4] + v1[sS])) === eq.fE || gR.sn(ei.a0V[player][a4] + v1[sS]) && aKc !== player && (aNP || hQ.sU(player, aKc))) return aNI[aNG++] = aKc, !0;
		return !1
	}, this.aNR = function() {
		for (var bw, a4 = aNG - 1; 0 <= a4; a4--)
			if (aNI[a4] === eq.fE) {
				for (aNG--, bw = a4; bw < aNG; bw++) aNI[bw] = aNI[bw + 1];
				return !0
			} return !1
	}, this.aNS = function(player) {
		for (var bw, a4 = aNG - 1; 0 <= a4; a4--)
			if (gS.ss(player, aNI[a4]))
				for (aNG--, bw = a4; bw < aNG; bw++) aNI[bw] = aNI[bw + 1];
		return 0 === aNG
	}, this.aNT = function() {
		for (var a4 = aNG - 1; 0 <= a4; a4--)
			if (aZ.d.el(aNI[a4])) return !0;
		return !1
	}, this.aNU = function() {
		for (var a4 = aNG - 1; 0 <= a4; a4--) aZ.d.el(aNI[a4]) || (aNI[a4] = aNI[--aNG]);
		return 0 < aNG
	}, this.aNV = function(player) {
		for (var bw, aNW = aNI[0], aNX = ei.rM[aNW] + gS.a0z(aNW, player), a4 = aNG - 1; 1 <= a4; a4--)(bw = ei.rM[aNI[a4]] + gS.a0z(aNI[a4], player)) < aNX && (aNW = aNI[a4], aNX = bw);
		return aNW
	}, this.aNY = function(player) {
		var cw, aNZ = aNI[0];
		if (1 !== aNG)
			for (var aNa = cf.cg(ei.mm[player] + ei.ml[player], 2), aNb = cf.cg(ei.mo[player] + ei.mn[player], 2), v7 = pF(aNa - cf.cg(ei.mm[aNZ] + ei.ml[aNZ], 2)) + pF(aNb - cf.cg(ei.mo[aNZ] + ei.mn[aNZ], 2)), a4 = aNG - 1; 1 <= a4; a4--)(cw =
				pF(aNa - cf.cg(ei.mm[aNI[a4]] + ei.ml[aNI[a4]], 2)) + pF(aNb - cf.cg(ei.mo[aNI[a4]] + ei.mn[aNI[a4]], 2))) < v7 && (v7 = cw, aNZ = aNI[a4]);
		return aNZ
	}, this.aNc = function() {
		for (var aNd = aNI, aNe = aNd[0], rM = ei.rM, aNf = rM[aNe], a4 = aNG - 1; 1 <= a4; a4--) {
			var ec = aNd[a4],
				bw = rM[ec];
			aNf < bw && (aNe = ec, aNf = bw)
		}
		return aNe
	}, this.aNg = function() {
		return aNI[gi.o1(aNG)]
	}
}

function aNh() {
	this.a4v = function(a9) {
		return [a9 >> 12 & 63, a9 >> 6 & 63, 63 & a9]
	}, this.aNi = function(a9) {
		for (var z = this.a4v(a9), a4 = 0; a4 < 3; a4++) z[a4] = ~~(4.05 * z[a4]);
		return z
	}, this.aNj = function(a9) {
		a9 = this.aNi(a9);
		return aZ.color.nY(a9[0], a9[1], a9[2])
	}, this.aNk = function(z) {
		for (var a4 = 0; a4 < 3; a4++) z[a4] = ~~(z[a4] / 4.04);
		return (z[0] << 12) + (z[1] << 6) + z[2]
	}, this.nY = function(t6, rh, bw) {
		return "rgb(" + t6 + "," + rh + "," + bw + ")"
	}, this.nE = function(t6, rh, bw, aN) {
		return "rgba(" + t6 + "," + rh + "," + bw + "," + aN.toFixed(3) + ")"
	}, this.dd = function(af) {
		for (var z = af.split("(")[1].split(","), aIT = h2.aIT, a4 = 0; a4 < 3; a4++) aIT[a4] = parseInt(z[a4]);
		return 4 === z.length ? aIT[3] = 255 * parseFloat(z[3].slice(0, -1)) : aIT[3] = 255, aIT
	}, this.de = function(aNl, dh) {
		for (var z = aNl.slice(aNl.indexOf("(") + 1, aNl.indexOf(")")).split(","), aIT = h2.aIT, a4 = 0; a4 < 3; a4++) aIT[a4] = cf.fH(parseInt(z[a4].trim(), 10) + dh, 0, 255);
		return 3 === z.length ? this.nY(aIT[0], aIT[1], aIT[2]) : (aNl = parseFloat(z[3].trim()), this.nE(aIT[0], aIT[1], aIT[2], aNl = 0 === aNl ? .3 : aNl))
	}, this.nZ = function(aNm, aNn) {
		for (var ru = 0, a4 = 0; a4 < 3; a4++) ru += Math.abs(aNn[a4] - aNm[a4]);
		if (!(240 <= ru))
			for (a4 = 0; a4 < 3; a4++) aNn[a4] = aNm[a4] + (aNm[a4] < 128 ? 80 : -80)
	}, this.aNo = function(z) {
		for (var ax = "#", a4 = 0; a4 < 3; a4++) {
			var t6 = z[a4].toString(16);
			ax += 1 === t6.length ? "0" + t6 : t6
		}
		return ax
	}, this.aNp = function(ax) {
		var t6, rh;
		return ax.length < 7 ? t.wc : (t6 = parseInt(ax.slice(1, 3), 16), rh = parseInt(ax.slice(3, 5), 16), ax = parseInt(ax.slice(5, 7), 16), this.nY(t6, rh, ax))
	}
}

function aNq() {
	this.w = function(player) {
		return h1.a4f.a4g(player, function(player) {
			var a5 = ga.sJ.sK;
			if (0 === a5) return -1;
			for (var rQ = Math.min(a5, ga.performance.nn ? a5 : 10), cy = ga.sJ.cy, tD = cf.cg(gi.random() * a5, gi.value(100)), bd = tD + rQ, ll = gi.zN(ei.ml[player], ei.mm[player]), lm = gi.zN(ei.mn[player], ei.mo[player]), x9 = -1,
					v7 = h0.z0(0, 0, cC.mO, cC.mP), a4 = tD; a4 < bd; a4++) {
				var lE = a4 % a5,
					aNs = h0.yq(ll, lm, cy[lE]);
				aNs < v7 && (v7 = aNs, x9 = lE)
			}
			return -1 !== x9 ? function(mV, ll, lm) {
				var oB = h0.mZ(mV),
					oC = h0.mb(mV),
					mp = ll - oB,
					mq = lm - oC;
				Math.abs(mp) >= Math.abs(mq) ? (mq = 0, mp = Math.sign(mp)) : (mp = 0, mq = Math.sign(mq));
				mp === mq && (mp = 1);
				for (;;) {
					if (oB += mp, oC += mq, !h0.zC(oB, oC)) break;
					if (mV = h0.z9(oB, oC), gR.yn(h0.pY(mV))) return mV
				}
				return -1
			}(cy[x9], ll, lm) : -1
		}(player))
	}
}

function aLE() {
	var aNu = null,
		aNv = null,
		aNw = 0,
		aNx = 0,
		aNy = null;

	function aNz() {
		0 !== aNv.kU && (bQ.bR.aY(), aT.bl(8, 29, new jw(25, {
			aAQ: 0,
			bs: gv.kF.jW(aNv.bs, 5),
			a5Y: 0
		}, 29)))
	}

	function aO1() {
		return !bQ.kb || bQ.cY.kZ(aNv) ? 1 : 0
	}

	function aO0() {
		var dF = aNu.dF,
			dE = aNu.dE,
			aOA = (bQ.bR.aY(), aO1());
		aNu = new uh([new aS(hN.kK[5][0], function() {
			aO4(5, 0)
		}, aOA), new aS(hN.kK[5][1], function() {
			aO4(5, 1)
		}, aOA), new aS(hN.kK[5][2], function() {
			aO4(5, 2)
		}, aOA), new aS(hN.kK[5][3], function() {
			aO4(5, 3)
		}, aOA)]), aO3(dF, dE), aNx = aNw = 2
	}

	function aO2() {
		29 === aT.dK && aT.c0().be(gv.kF.jW(aNv.bs, 5))
	}

	function aO4(id, value) {
		5 === id && bj.g5.aAU({
			aAQ: 3,
			bs: gv.kF.jW(aNv.bs, 5),
			value: value
		})
	}

	function aO3(dF, dE, uo) {
		aNu.show(dF, dE, uo), bQ.ci.show(aNu.dF, aNu.dE, aNv, 1)
	}
	this.bS = function(bd, ka) {
		aNw = 1, aNv = ka, aNu = new uh([new aS(L(460), aNz, 0 === ka.kU ? 1 : 0), new aS(L(461), aO0, aO1()), new aS(L(462), aO2, 0)]), aO3((aNy = {
			clientX: bd.clientX,
			clientY: bd.clientY
		}).clientX, aNy.clientY, 1)
	}, this.ae = function(code) {
		if (29 !== aT.dK) return !1;
		if (!aNv) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.aY();
			else if (aZ.bu.startsWith(code, "Numpad") || aZ.bu.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aNw) this.bS(aNy, aNv);
				else {
					if (!aNu) return !1;
					1 === aNw ? code <= 1 ? aNz() : 2 === code ? aO0() : (aO2(), this.aY()) : (aO4(aNx, cf.fH(code - 1, 0, hN.kK[aNx].length - 1)), this.aY())
				}
		}
		return !0
	}, this.aY = function() {
		aNw = 0, aNu && aNu.aY(), aNu = null, bQ.ci.aY()
	}
}

function hk() {
	var cw, canvas, lM, aOD, aOE, aOF = -1;

	function aOG() {
		var a71, lI = canvas.getContext("2d", {
			alpha: !0
		});
		lI.clearRect(0, 0, cw, cw), lI.fillStyle = t.da, lI.fillRect(0, 0, cw, cw), 0 === aOD && (lI.fillStyle = t.aOH, lI.fillRect(0, 0, cw, cw)), lI.fillStyle = t.u, lI.fillRect(0, 0, cw, 1), lI.fillRect(0, 0, 1, cw), lI.fillRect(0, cw - 1, cw, 1),
			lI.fillRect(cw - 1, 0, 1, cw), a71 = .9 * cw / gQ.get(0).width, lI.imageSmoothingEnabled = !0, lI.setTransform(a71, 0, 0, a71, Math.floor((cw - a71 * gQ.get(0).width) / 2), Math.floor((cw - a71 * gQ.get(0).height) / 2)), lI.drawImage(gQ
				.get(0), 0, 0), lI.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aOI(ll, lm) {
		if (!gF.lf) return ll <= cw + ac.gap && lm >= gJ.dE ? 9 : -1;
		if (ll <= 4 * cw + ac.gap) {
			if (lm >= gJ.dE) return 0;
			if (lm >= gJ.dE - cw - aOE * ac.gap) return 2
		} else if (ll <= 7 * cw + ac.gap && lm >= gJ.dE - cw - aOE * ac.gap) return 1;
		return -1
	}
	this.lf = !1, this.ck = function() {
		aOD = -1, this.lf = !1, aOE = d0.jF.lR() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		cw = gJ.cw, (canvas = document.createElement("canvas")).width = cw, canvas.height = cw, lM = aZ.aa.lT(1, (d0.jF.lR() ? .5 : .45) * cw), aOG()
	}, this.tR = function() {
		this.lf = !this.lf, this.lf ? (gs.a1B(!1), eq.lQ && gs.a18 && gs.a1E(!0), this.a1G()) : (aOD = -1, aOG(), !eq.l6 || 1 !== eq.ku || eq.l3 || eq.lQ || d0.jF.setState(1)), eW.eX = !0
	}, this.a1G = function() {
		(eq.l6 || eq.lQ) && 1 === eq.ku && (gN.l0(!0), eq.l3 || setTimeout(function() {
			hD.q7()
		}, 0), d0.jF.setState(0))
	}, this.lp = function(ll, lm) {
		return 0 <= (aOF = aOI(ll, lm)) || !gF.lf || eq.l6 || eq.lQ || hF.lJ || gF.tR(), aOF
	}, this.ly = function(ll, lm) {
		ll = aOI(ll, lm);
		ll !== aOD && (aOD = ll, this.lf || aOG(), eW.eX = !0)
	}, this.a2D = function(ll, lm) {
		ll = aOI(ll, lm);
		return -1 !== ll && aOF === ll && (this.lf ? eq.md ? (0 <= ll && gs.a1B(!1), !eq.lQ) : (0 === ll ? eq.aE6() : 1 === ll ? this.tR() : 2 === ll && aT.bl(1, 0), !0) : 9 === ll && (this.tR(), !0))
	}, this.eZ = function() {
		var cv;
		this.lf ? (cv = Math.floor(5.5 * cw), m0.setTransform(1, 0, 0, 1, ac.gap, gJ.dE), m0.fillStyle = t.da, m0.fillRect(0, 0, cv, cw), 0 === aOD ? (m0.fillStyle = t.aOH, m0.fillRect(0, 0, 4 * cw, cw)) : 1 === aOD && (m0.fillStyle = t.aOH, m0
				.fillRect(4 * cw, 0, Math.floor(1.5 * cw), cw)), m0.fillStyle = t.u, m0.fillRect(0, 0, cv, 1), m0.fillRect(0, 0, 1, cw), m0.fillRect(4 * cw, 0, 1, cw), m0.fillRect(0, cw - 1, cv, 1), m0.fillRect(cv - 1, 0, 1, cw), m0.font =
			lM, aZ.aa.textBaseline(m0, 1), aZ.aa.textAlign(m0, 1), m0.fillText(L(463), 2 * cw, .54 * cw), cv = .4 * cw, gF.aOM(ac.gap + 4 * cw + (1.5 * cw - cv) / 2, gJ.dE + .3 * cw, cv), cv = 1, m0.setTransform(1, 0, 0, 1, ac.gap, gJ.dE -
				cv * aOE * ac.gap - cv * cw), m0.fillStyle = t.da, m0.fillRect(0, 0, 4 * cw, cw), aOD === cv + 1 && (m0.fillStyle = t.aOH, m0.fillRect(0, 0, 4 * cw, cw)), m0.fillStyle = t.u, m0.fillRect(0, 0, 4 * cw, 1), m0.fillRect(0, 0, 1,
				cw), m0.fillRect(4 * cw, 0, 1, cw), m0.fillRect(0, cw - 1, 4 * cw, 1), m0.fillText(L(0 === cv ? 463 : 464), 2 * cw, .54 * cw), m0.setTransform(1, 0, 0, 1, 0, 0)) : m0.drawImage(canvas, ac.gap, gJ.dE)
	}, this.tS = function(player) {
		return 0 !== ei.kv[player] && 2 !== eq.ku && !aZ.d.el(player)
	}, this.aOM = function(dF, dE, a5) {
		m0.setTransform(1, 0, 0, 1, dF, dE), m0.lineWidth = ac.a0G, m0.strokeStyle = t.u, m0.beginPath(), m0.moveTo(0, 0), m0.lineTo(a5, a5), m0.moveTo(0, a5), m0.lineTo(a5, 0), m0.stroke()
	}
}

function hW() {
	this.aa = new aG9, this.cb = new aOO, this.d = new aOP, this.bu = new aOQ, this.lI = new a4q, this.aN3 = new aMP, this.canvas = new aMx, this.color = new aNh, this.aOR = new l9, this.ck = function() {
		this.aa.aGB()
	}
}

function aLs() {
	var aP, ev, f4;

	function aOU() {
		var aI;
		1 === eq.data.gameMode ? (eq.data.teamPlayerCount || (eq.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), eq.aDp.aDq()), aI = aZ.cb.aLR(eq.data.teamPlayerCount, 0), eq.data.numberTeams = aI) : (2 === eq.data
			.botDifficultyType && (eq.data.botDifficultyType = 0), 1 === eq.data.spawningType && (eq.data.spawningType = 0))
	}

	function bM() {
		1 !== eq.data.gameMode && (eq.data.teamPlayerCount = null), aOW(), eq.data.canvas = null, aT.bl(5, 5)
	}

	function aOW() {
		gr.aE8.ck(), bp.bq.br(156, gr.aE9.a1a())
	}

	function aOS() {
		eq.data.isReplay = 0, aOW(), eq.aDp.aLT(), eY.a3i(), eq.aDp.aLS(), eq.data.canvas = 2 === eq.data.mapType ? cC.qI : null, eq.a3j(), eq.aE0 = 1
	}

	function aOj() {
		aOU();
		for (var z = [fl(), aOZ(), aOa()], a4 = 3; a4 < 6; a4++) aT.removeChild(ev.ya, ev.a1k[a4].ap), ev.a1k[a4] = z[a4 - 3], ev.ya.appendChild(ev.a1k[a4].ap);
		ev.resize()
	}

	function fl() {
		var aOk, f8 = new f9;
		return f8.fA(L(28)), aOk = 0 === eq.data.gameMode ? [L(291), L(24)][eq.data.colorsType] : eq.data.numberTeams + " Team" + (1 === eq.data.numberTeams ? "" : "s"), f8.fp(aOk), f8.fF(new fv([new aS(L(467), function() {
			aT.bl(21)
		}).button])), f8
	}

	function aOZ() {
		var f8 = new f9,
			z = (f8.fA(L(227)), [L(23) + ": " + g7.a8v[eq.data.botDifficultyValue], L(271), L(272), L(24)]);
		return f8.fp(z[eq.data.botDifficultyType]), f8.fF(new fv([new aS(L(467), function() {
			aT.bl(25)
		}).button])), f8
	}

	function aOa() {
		var f8 = new f9,
			z = (f8.fA("Spawning"), [L(291), L(468), L(24)]);
		return f8.fp(z[eq.data.spawningType]), f8.fF(new fv([new aS(L(467), function() {
			aT.bl(24)
		}).button])), f8
	}
	this.show = function() {
		aP.show(), this.resize(), aP.aV.scrollTop = aT.bW.y3[0]
	}, this.aY = function() {
		aT.bW.y3[0] = aP.aV.scrollTop, aP.aY()
	}, this.resize = function() {
		aP.resize(), ev.resize()
	}, this.ae = function(af) {
		2 === af && aP.ag[0].ah()
	}, aP = new aR("🔧 " + L(465), [new aS("⬅️ " + L(1), bM), new aS(L(466), aOS)]), aOU(), eq.data.canvas || (2 === eq.data.mapType ? eq.data.canvas = cC.qI : 1 === eq.data.mapType ? eq.data.canvas = cC.ty(cC.u9(eq.data), 0).qI : (eq.data
		.mapType = 0, eq.data.passableWater = eq.data.passableMountains = 1, eq.data.canvas = cC.ty(cC.u9(eq.data), eq.data.mapSeed).qI)), ev = new ex(aP.aV, (function(f4) {
		var f8 = new f9,
			a46 = (f8.fA(L(11)), eq.data.canvas);
		a46.style.width = "100%", f8.fF({
			bd: a46
		}), f8.fF(new fv([new aS(L(467), function() {
			aT.bl(20)
		}).button])), f4.push(f8)
	}(f4 = []), function(f4) {
		var f8 = new f9;
		f8.fA(L(10)), f8.fF(new fG({
			aB: -1,
			value: eq.data.playerCount
		}, 1, 0, function(bd) {
			var playerCount = cf.fH(Math.floor(bd.target.value), 1, 512);
			bd.target.value = eq.data.playerCount = playerCount, 1 === eq.data.gameMode && (bd = aZ.cb.aLR(eq.data.teamPlayerCount, 0), eq.aDp.aDq(), aZ.cb.aLR(eq.data.teamPlayerCount, 0) !== bd) && aOj()
		})), f4.push(f8)
	}(f4), function(f4) {
		var f8 = new f9;
		f8.fA(L(12)), f8.fB(new fC({
			fD: ["Battle Royale", "Teams"],
			value: eq.data.gameMode
		}, function(aB) {
			eq.data.gameMode !== aB && (eq.data.gameMode = aB, aOj())
		})), f4.push(f8)
	}(f4), f4.push(fl()), f4.push(aOZ()), f4.push(aOa()), function(f4) {
		var f8 = new f9,
			z = (f8.fA(L(293)), [L(294), L(295), L(24)]);
		f8.fp(z[eq.data.playerNamesType]), f8.fF(new fv([new aS(L(467), function() {
			aT.bl(23)
		}).button])), f4.push(f8)
	}(f4), function(f4) {
		var f8 = new f9,
			z = (f8.fA(L(457)), [L(22), L(23) + ": " + eq.data.aIncomeValue, L(24)]);
		f8.fp(z[eq.data.aIncomeType]), f8.fF(new fv([new aS(L(467), function() {
			aT.bl(22)
		}).button])), f4.push(f8)
	}(f4), function(f4) {
		var f8 = new f9,
			z = (f8.fA(L(412)), [L(22), L(23) + ": " + eq.data.tIncomeValue, L(24)]);
		f8.fp(z[eq.data.tIncomeType]), f8.fF(new fv([new aS(L(467), function() {
			aT.bl(26)
		}).button])), f4.push(f8)
	}(f4), function(f4) {
		var f8 = new f9,
			z = (f8.fA(L(449)), [L(22), L(23) + ": " + eq.data.iIncomeValue, L(24)]);
		f8.fp(z[eq.data.iIncomeType]), f8.fF(new fv([new aS(L(467), function() {
			aT.bl(27)
		}).button])), f4.push(f8)
	}(f4), function(f4) {
		var f8 = new f9,
			z = (f8.fA(L(20)), [L(22), L(23) + ": " + eq.data.sResourcesValue, L(24)]);
		f8.fp(z[eq.data.sResourcesType]), f8.fF(new fv([new aS(L(467), function() {
			aT.bl(28)
		}).button])), f4.push(f8)
	}(f4), function(f4) {
		var f8 = new f9;
		f8.fA(L(469)), f8.fF(new fv([new aS(L(470), function() {
			aT.bh(), eq.aDp.aLU(), aT.bW.y3[0] = 0, aT.bl(19)
		}).button])), f8.fF(new fv([new aS(L(471), function() {
			hM.aOl()
		}).button])), f8.fF(new fv([new aS(L(472), function() {
			return hM.aOm(), !0
		}).button])), f4.push(f8)
	}(f4), f4))
}

function aMl() {
	this.aM6 = function(player, id) {
		for (var aOn = ei.pT[player], a5 = aOn.length, a4 = 0; a4 < a5; a4++)
			if (h0.ym(aOn[a4], id)) return !0;
		return !1
	}, this.aM9 = function(player, mV) {
		for (var yy, aOo, rJ, aOn = ei.pT[player], a5 = aOn.length, cv = cC.mO, aOq = h0.mZ(mV), aOr = h0.mb(mV), aOs = -1, min = cC.mO * cC.mO + cC.mP * cC.mP, id = gR.yo(h0.pY(mV)), a4 = 0; a4 < a5; a4++)(aOo = (aOo = aOq - (yy = (rJ = aOn[
			a4]) >> 2) % cv) * aOo + (aOo = aOr - ~~((.5 + yy) / cv)) * aOo) < min && h0.ym(rJ, id) && (min = aOo, aOs = yy);
		return aOs
	}, this.a4h = function(yx, yy) {
		for (var id = gR.yo(h0.pY(yy)), sk = h0.sl, rJ = h0.pY(yx), aOt = -1, a4 = 0; a4 < 4; a4++) {
			var sm = rJ + sk[a4];
			gR.yn(sm) && gR.yo(sm) === id && (-1 === aOt || h0.yz(h0.zD(sm), yy) < h0.yz(aOt, yy)) && (aOt = h0.zD(sm))
		}
		return aOt
	}, this.aKl = function(player, mV) {
		for (var sk = h0.sl, rJ = h0.pY(mV), a4 = 0; a4 < 4; a4++) {
			var sm = rJ + sk[a4];
			if (gR.sn(sm) && gR.so(player, sm)) return !0
		}
		return !1
	}, this.aKm = function(player, mV) {
		for (var sk = h0.sl, rJ = h0.pY(mV), a4 = 0; a4 < 4; a4++) {
			var sm = rJ + sk[a4];
			if (gR.sI(sm)) return !0;
			if (gR.sn(sm)) {
				sm = gR.sZ(sm);
				if (player !== sm && hQ.sU(player, sm)) return !0
			}
		}
		return !1
	}, this.aOu = function(mV) {
		for (var sk = h0.sl, rJ = h0.pY(mV), a4 = 0; a4 < 4; a4++) {
			var sm = rJ + sk[a4];
			if (gR.sn(sm)) {
				sm = gR.sZ(sm);
				if (aZ.d.el(sm)) return sm
			}
		}
		return -1
	}, this.pX = function(rJ) {
		if (gR.yn(rJ))
			for (var sk = h0.sl, a4 = 0; a4 < 4; a4++)
				if (gR.pZ(rJ + sk[a4])) return !0;
		return !1
	}, this.mU = function(player, id) {
		for (var jy = player << 3, jz = jy + h1.bW.nm[player], o2 = h1.bW.o2, aN4 = h1.bW.aN4, a4 = jy; a4 < jz; a4++) {
			var aOv = aN4[a4];
			if (o2[aOv] === id) return aOv
		}
		return -1
	}, this.me = function(player) {
		return 0 === h1.bW.nm[player] ? -1 : h1.bW.aN4[player << 3]
	}, this.aOw = function(ll, lm) {
		var a5 = h1.bW.pR;
		if (a5 < 1) return -1;
		for (var mX = h1.bW.mX, aMH = 80, aMI = -1, a4 = 0; a4 < a5; a4++) {
			var v7 = h0.yr(ll, lm, mX[a4]);
			v7 < aMH && (aMH = v7, aMI = a4)
		}
		return function(a4, ll, lm) {
			if (a4 < 0) return;
			var aP1 = h1.bW.mX[a4],
				aP2 = h0.yt(aP1),
				aP1 = h0.yv(aP1),
				a4 = 20 * (.9 + .1 * Math.log10(h1.bW.se[a4]));
			return a4 = Math.max(a4, h0.z5(aZ.aa.a7j(.02, 1.7))), cf.a4G(h0.ys(ll), h0.yu(lm), aP2, aP1, a4)
		}(aMI, ll, lm) ? aMI : -1
	}, this.aJj = function(mS) {
		for (var a5 = h1.bW.pR, o2 = h1.bW.o2, a4 = 0; a4 < a5; a4++)
			if (o2[a4] === mS) return h2.oD[2] = a4, !0;
		return !1
	}, this.a2s = function(player) {
		for (var jy = player << 3, jz = jy + h1.bW.nm[player], aN4 = h1.bW.aN4, se = h1.bW.se, np = 0, a4 = jy; a4 < jz; a4++) np += se[aN4[a4]];
		return np
	}, this.aMG = function(player, aJv) {
		aJv = h1.bW.aJp[aJv];
		return this.aKl(player, aJv[aJv.length - 1])
	}, this.aME = function(yx, yy, v7, aOy) {
		var z1 = h0.mZ(yx),
			yx = h0.mb(yx),
			z3 = h0.mZ(yy),
			yy = h0.mb(yy),
			z3 = (v7 = Math.max(v7, 1), z3 - z1),
			yy = yy - yx,
			mp = cf.cg(Math.abs(z3) * aOy, v7),
			aOy = cf.cg(Math.abs(yy) * aOy, v7);
		return h0.z9(z1 + Math.sign(z3) * mp, yx + Math.sign(yy) * aOy)
	}, this.aJr = function(e0, mV) {
		for (var a5 = e0.length - 1, dF = h0.mZ(mV), dE = h0.mb(mV), a4 = 0; a4 < a5; a4++) {
			var yx = e0[a4],
				yy = e0[a4 + 1],
				mY = h0.mZ(yx),
				yx = h0.mb(yx),
				ms = h0.mZ(yy),
				yy = h0.mb(yy);
			if (!(dF !== mY && dF !== ms && Math.sign(dF - mY) === Math.sign(dF - ms) || dE !== yx && dE !== yy && Math.sign(dE - yx) === Math.sign(dE - yy))) {
				if (mY === ms || yx === yy) return a4;
				if (Math.abs(dF - mY) === Math.abs(dE - yx) && Math.abs(dF - ms) === Math.abs(dE - yy)) return a4
			}
		}
		return -1
	}, this.nz = function() {
		for (var aP5 = je[0], sd = h1.bW.sd, pR = h1.bW.pR, z = [], a4 = 0; a4 < pR; a4++) aZ.d.a4W(aP5, sd[a4] >> 3) && z.push(a4);
		return z
	}, this.aKk = function(player, e0) {
		for (var jy = player << 3, jz = jy + h1.bW.nm[player], aN4 = h1.bW.aN4, aJp = h1.bW.aJp, a4U = e0[0], a4V = e0[e0.length - 1], a4 = jy; a4 < jz; a4++) {
			var ec = aJp[aN4[a4]];
			if (ec[0] === a4U && ec[ec.length - 1] === a4V) return !0
		}
		return !1
	}
}

function j4() {
	function aP6(bd) {
		var z, bd = bd.target.files;
		bd && 0 < bd.length && (bd = bd[0], "json" === (z = bd.name.split("."))[z.length - 1].toLowerCase()) && ((z = new FileReader).onload = aPE, z.readAsText(bd))
	}

	function aPE(bd) {
		var aPH;
		eq.ku || (bd = JSON.parse(bd.target.result), aPH = eq.data = new a3e, aPI(bd, aPH, "mapType", 0, 2), aPI(bd, aPH, "mapProceduralIndex", 0, 255), aPI(bd, aPH, "mapRealisticIndex", 0, 255), aPI(bd, aPH, "mapSeed", 0, 16383), function(aPG, aPH,
				lE, max) {
				aPG = aPG[lE];
				aPH[lE] = aPO(aPG) ? aPG.slice(0, max) : aPH[lE]
			}(bd, aPH, "mapName", 20), function(aPG, aPH, lE) {
				var b3;
				2 === aPH.mapType && (!aPO(aPG = aPG[lE]) || aPG.length <= 20 ? aPH.mapType = 0 : ((b3 = new Image).onload = function() {
					gr.aF0.aF1(b3, 1), b3.onload = null, b3 = null
				}, b3.src = aPG))
			}(bd, aPH, "canvas"), aPI(bd, aPH, "passableWater", 0, 1), aPI(bd, aPH, "passableMountains", 0, 1), aPI(bd, aPH, "playerCount", 1, 512), aPI(bd, aPH, "humanCount", 1, 1), aPI(bd, aPH, "selectedPlayer", 0, 0), aPI(bd, aPH, "gameMode",
				0, 1), aPI(bd, aPH, "playerMode", 0, 0), aPI(bd, aPH, "battleRoyaleMode", 0, 0), aPI(bd, aPH, "numberTeams", 0, 8), aPI(bd, aPH, "isZombieMode", 0, 0), aPI(bd, aPH, "isContest", 0, 0), aPI(bd, aPH, "isReplay", 0, 0), aPL(bd, aPH,
				"elo", 16, 2, 16383), aPI(bd, aPH, "colorsType", 0, 1), aPI(bd, aPH, "colorsPersonalized", 0, 1), aPL(bd, aPH, "colorsData", 32, 512, 262143), aPI(bd, aPH, "selectableColor", 0, 1), aPL(bd, aPH, "teamPlayerCount", 16, 9, 512),
			aPI(bd, aPH, "neutralBots", 0, 1), aPI(bd, aPH, "botDifficultyType", 0, 3), aPI(bd, aPH, "botDifficultyValue", 0, 15), aPL(bd, aPH, "botDifficultyTeam", 8, 9, 15), aPL(bd, aPH, "botDifficultyData", 8, 512, 15), aPI(bd, aPH,
				"spawningType", 0, 2), aPI(bd, aPH, "spawningSeed", 0, 16383), aPL(bd, aPH, "spawningData", 16, 1024, 4095), aPI(bd, aPH, "selectableSpawn", 0, 1), aPI(bd, aPH, "playerNamesType", 0, 2),
			function(aPG, aPH, lE, size, max) {
				var v2 = aPG[lE];
				if (Array.isArray(v2)) {
					for (var v5 = new Array(size), a5 = Math.min(v2.length, size), a4 = 0; a4 < a5; a4++) v5[a4] = aPO(v2[a4]) ? v2[a4].slice(0, max) : "";
					v5.fill("", a5), aPH[lE] = v5
				}
			}(bd, aPH, "playerNamesData", 512, 20), aPI(bd, aPH, "selectableName", 0, 1), aPI(bd, aPH, "aIncomeType", 0, 2), aPI(bd, aPH, "aIncomeValue", 0, 255), aPL(bd, aPH, "aIncomeData", 8, 512, 255), aPI(bd, aPH, "tIncomeType", 0, 2), aPI(
				bd, aPH, "tIncomeValue", 0, 255), aPL(bd, aPH, "tIncomeData", 8, 512, 255), aPI(bd, aPH, "iIncomeType", 0, 2), aPI(bd, aPH, "iIncomeValue", 0, 255), aPL(bd, aPH, "iIncomeData", 8, 512, 255), aPI(bd, aPH, "sResourcesType", 0, 2),
			aPI(bd, aPH, "sResourcesValue", 0, 2047), aPL(bd, aPH, "sResourcesData", 16, 512, 2047), aT.bh(), aT.bW.y3[0] = 0, aT.bl(19))
	}

	function aPI(aPG, aPH, lE, min, max) {
		aPG = aPG[lE];
		aPH[lE] = "number" == typeof aPG && min <= aPG && aPG <= max ? Math.floor(aPG) : aPH[lE]
	}

	function aPO(ax) {
		return "string" == typeof ax
	}

	function aPL(aPG, aPH, lE, aPP, size, max) {
		var v2 = aPG[lE];
		if (Array.isArray(v2)) {
			for (var v5 = new(8 === aPP ? Uint8Array : 16 === aPP ? Uint16Array : Uint32Array)(size), a5 = Math.min(v2.length, size), a4 = 0; a4 < a5; a4++) v5[a4] = cf.fH(v2[a4], 0, max);
			aPH[lE] = v5
		}
	}
	this.aOl = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aP6, input.click()
	}, this.aOm = function() {
		for (var aP9, aPC, ao = eq.data, keys = Object.keys(ao), aP7 = {}, a4 = 0; a4 < keys.length; a4++) {
			var key = keys[a4];
			ao[key] instanceof Uint8Array || ao[key] instanceof Uint16Array || ao[key] instanceof Uint32Array ? aP7[key] = Array.from(ao[key]) : aP7[key] = ao[key]
		}
		aP7.canvas = 2 === aP7.mapType && aP7.canvas ? aP7.canvas.toDataURL() : null, aP9 = aP7, aP9 = JSON.stringify(aP9, null, 2), aP9 = new Blob([aP9], {
			type: "application/json"
		}), (aPC = document.createElement("a")).href = URL.createObjectURL(aP9), aPC.download = "tt_scenario.json", aPC.click()
	}
}

function aLC() {
	function aPb(z, jy, jz) {
		var aPc = z[jy];
		z[jy] = z[jz], z[jz] = aPc
	}
	this.cQ = [
		[],
		[],
		[],
		[]
	], this.cT = [0, 0, 0, 0], this.aGN = [], this.l8 = function(aPQ, bs, username, kU, kW, ki, elo, color, aAR, aJU) {
		username = this.aPS(bs, username, kU, kW, ki, elo, color, aAR, aJU);
		this.cQ[aPQ].push(username), bQ.ps === bs && (bQ.kb = username), bQ.aLB.pq(bs) && (username.pu = 1), bQ.bW.aGO += 29 === aT.dK && bQ.bW.bX[0] === aPQ && 1 === bQ.bW.bX[2]
	}, this.aPS = function(bs, username, kU, kW, ki, elo, color, aAR, aJU) {
		return {
			bs: bs,
			username: username,
			kU: kU,
			kW: kW,
			ki: ki,
			elo: elo,
			color: color,
			aAR: aAR,
			aJU: aJU
		}
	}, this.aFA = function(aB, aPQ, kU, kW, ki, elo, aAR) {
		aB = this.cQ[aPQ][aB];
		aB.kU = kU, aB.kW = kW, aB.ki = ki, aB.elo = elo, aB.aAR = aAR, bQ.bW.aGO += 29 === aT.dK && bQ.bW.bX[0] === aPQ && 1 === bQ.bW.bX[2]
	}, this.aFB = function(aB, aPQ, aPT) {
		var aB = this.cQ[aPQ][aB],
			aPU = aB.username,
			aPV = "Redacted " + gv.kF.jW(aB.bs, 2);
		aB.username = aPT ? "[" + aZ.bu.kg(aPU) + "] " + aPV : aPV, aPU.indexOf("Redacted") < 0 && (aB.aPW = aPU), bQ.b1.aPX(aB.bs), bQ.bW.aGO += 29 === aT.dK && bQ.bW.bX[0] === aPQ && 1 === bQ.bW.bX[2]
	}, this.aF8 = function(aB, aPY, aPZ) {
		var player = this.cQ[aPY][aB];
		this.aF9(aB, aPY), this.cQ[aPZ].push(player), bQ.bW.aGO += 29 === aT.dK && bQ.bW.bX[0] === aPZ && 1 === bQ.bW.bX[2]
	}, this.aF9 = function(aB, aPY) {
		var cP = this.cQ[aPY];
		this.aGN.push(cP[aB]), 1e3 < this.aGN.length && this.aGN.shift(), aB >= this.cT[aPY] ? cP[aB] = cP[cP.length - 1] : (this.cT[aPY]--, 2 === aPY ? (cP.splice(this.cT[aPY] + 1, 0, cP[cP.length - 1]), cP.splice(aB, 1)) : (cP[aB] = cP[this.cT[
			aPY]], cP[this.cT[aPY]] = cP[cP.length - 1])), cP.pop(), bQ.bW.aGO += 29 === aT.dK && bQ.bW.bX[0] === aPY && 1 === bQ.bW.bX[2]
	}, this.aF7 = function(aB, kS) {
		bQ.bW.aGO += 29 === aT.dK && bQ.bW.bX[0] === kS && 1 === bQ.bW.bX[2];
		var cP = this.cQ[kS],
			ka = cP[aB];
		if (2 === kS)
			if (aB >= this.cT[kS]) {
				bQ.aLB.join(ka);
				for (var aPa = this.cT[kS], elo = ka.elo; aPa && elo > cP[aPa - 1].elo;) aPa--;
				cP[aB] = cP[this.cT[kS]], cP.splice(this.cT[kS]++, 1), cP.splice(aPa, 0, ka)
			} else cP.splice(this.cT[kS]--, 0, ka), cP.splice(aB, 1);
		else aB >= this.cT[kS] ? (bQ.aLB.join(ka), aPb(cP, this.cT[kS]++, aB)) : aPb(cP, --this.cT[kS], aB)
	}, this.kY = function(bs) {
		for (var cQ = this.cQ, a5 = cQ.length, a4 = 0; a4 < a5; a4++)
			for (var cP = cQ[a4], rQ = cP.length, aN = 0; aN < rQ; aN++)
				if (bs === cP[aN].bs) return cP[aN];
		return null
	}
}

function aPd() {
	function aPl(player, oj, aPf) {
		3 <= aPf && 2142 < eW.et() && (oj === eq.fE || ei.rM[oj] < cf.cg(ei.rM[player], 20)) && g7.a97(player, 20)
	}

	function aPm(player, np, oj, aPf) {
		3 <= aPf && aPf < 6 && cf.cg(ei.rM[player], 8) > ei.rM[oj] && (np = Math.max(cf.cg(11 * ei.rM[oj], 5), cf.cg(ei.rM[player], 10)));
		aPf = ei.rb[player].length;
		ga.aIv.aNK(player, oj), ga.aIv.aNM(player, oj, aPf, np)
	}

	function aPk(player, np) {
		var oj = eq.fE,
			a5 = ei.rb[player].length;
		ga.aIv.aNJ(player), ei.rb[player].length !== a5 && ga.aIv.aNM(player, oj, a5, np)
	}
	this.aPe = new Uint8Array(eq.fE), this.ck = function() {
		this.aPe.fill(0)
	}, this.a9B = function(player, np) {
		var a7r, aPf, aPg, aPh;
		gS.st(player) && (a7r = gT.rN(player), 3 <= (aPf = g7.np[player]) && aPf < 6 && (np = Math.max(ei.rM[player] - a7r, np)), aPg = ei.pT[player].length, aPh = ei.a0V[player].length, 30 * ei.jd[player] > eq.rA && sE[player] < 10 && 100 *
			aPh <= aPg && g7.a97(player, 10), eq.p6 ? function(player, np, aPf, a7r) {
				var oj;
				if (ga.aIv.aNO(player, !1) || ga.aIv.aNQ(player, !1)) {
					if (!ga.aIv.aNS(player))
						if (ga.aIv.aNR()) aPk(player, np), aPl(player, eq.fE, aPf);
						else {
							if (gi.a32(g7.a8x[aPf])) oj = ga.aIv.aNV(player);
							else {
								if (ga.aIv.aNT() && gi.a32(g7.a8w[aPf]) && ga.aIv.aNU(), 6 === aPf) return aPm(player, np, ga.aIv.aNg(), aPf);
								oj = ga.aIv.aNY(player)
							}
							aPm(player, np, oj, aPf), aPl(player, oj, aPf)
						}
				} else h1.aMf.w(player) || ga.aPn.w(player) || ! function(player, np, aPf, a7r) {
					var aPe = ga.a9A.aPe;
					aPe[player] = 0;
					var aPp = hG.sG[player];
					if (0 !== aPp) {
						var aPq = ei.rM[player],
							jd = ei.jd;
						if (player < eq.er && (np = aPq), !(aPq < jd[player] || 5 === aPf && aPq < a7r || 4 === aPf && aPq < cf.cg(a7r, 2))) {
							hH.qb(aPp);
							for (var a5 = h2.qc[0], qd = h2.qd, a4 = gi.o1(a5), bw = 0; bw < a5; bw++) {
								var af = qd[(bw + a4) % a5];
								if (aPe[af]) return gq.j.aPr(player, af, np)
							}
							var nm = h1.bW.nm;
							for (bw = 0; bw < a5; bw++)
								if (af = qd[(bw + a4) % a5], nm[af] && af !== player) return gq.j.aPr(player, af, np)
						}
					}
				}(player, np, aPf, a7r)
			}(player, np, aPf, a7r) : (!aPh || aPg && (aPg < aPh && !gi.o1(10) || 100 * aPh <= aPg && gi.o1(3) || !gi.o1(8))) && h1.aMf.w(player) || function(player, np, aPf) {
				ga.aIv.aNO(player, !0) || ga.aIv.aNQ(player, !0) ? ga.aIv.aNS(player) || (ga.aIv.aNR() ? aPk(player, np) : gi.a32(g7.a8x[aPf]) ? aPm(player, np, ga.aIv.aNV(player), aPf) : 5 === aPf ? aPm(player, np, ga.aIv.aNc(), aPf) : (ga
					.aIv.aNT() && gi.a32(g7.a8w[aPf]) && ga.aIv.aNU(), aPm(player, np, 6 === aPf ? ga.aIv.aNg() : ga.aIv.aNY(player), aPf))) : ga.aPn.w(player)
			}(player, np, aPf))
	}
}

function f9() {
	var ap;
	this.a1l = [], this.ap = document.createElement("div"), this.fA = function(ax, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = ax, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.ap.appendChild(
			title), title
	}, this.fs = function(ax, marginBottom) {
		var fr = document.createElement("p");
		return fr.textContent = ax, fr.style.fontSize = "0.75em", fr.style.lineHeight = "1.2em", fr.style.marginBottom = marginBottom || "0", this.ap.appendChild(fr), fr
	}, this.aHp = function(ax) {
		var aPs = document.createElement("p");
		return aPs.textContent = ax, aPs.style.fontSize = "1em", aPs.style.marginBottom = "0", aPs.style.whiteSpace = "pre-wrap", aPs.style.overflowWrap = "break-word", this.ap.appendChild(aPs), aPs
	}, this.fp = function(ov, fontSize) {
		var ap = document.createElement("div");
		return ap.innerHTML = ov, ap.style.fontSize = fontSize || "1em", ap.style.lineHeight = "1.2em", this.ap.appendChild(ap), ap
	}, this.fB = function(aHY) {
		for (var ff = aHY.ff, a5 = ff.length, a4 = 0; a4 < a5; a4++) this.ap.appendChild(ff[a4])
	}, this.fF = function(ka) {
		return this.a1l.push(ka), this.ap.appendChild(ka.bd), ka
	}, this.resize = function() {
		for (var a5 = this.a1l.length, a4 = 0; a4 < a5; a4++) this.a1l[a4].resize && this.a1l[a4].resize()
	}, (ap = this.ap).style.position = "absolute", ap.style.height = "auto", ap.style.padding = "0.5em"
}

function vx() {
	this.z = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.a5o = function() {
		for (var aPt = [], z = this.z, a5 = z.length, a4 = 0; a4 < a5; a4++) aPt.push(z[a4]);
		var aC3 = bp.cy.data[12].fx;
		for (a4 = 0; a4 < a5; a4++)
			if (aPt[a4] === aC3) {
				aPt.splice(a4, 1), a5--;
				break
			} aPt.sort(), a5++, aPt.unshift(aC3);
		try {
			if ("undefined" == typeof Intl) return aPt;
			for (a4 = 0; a4 < a5; a4++) {
				var ax = new Intl.DisplayNames([aPt[a4]], {
					type: "language"
				}).of(aPt[a4]);
				ax !== aPt[a4] && (aPt[a4] = aPt[a4] + ": " + ax)
			}
		} catch (bd) {
			console.log("error 3646: " + bd)
		}
		return aPt
	}, this.a5p = function(a6E) {
		for (var ax = bp.cy.data[12].value, a5 = a6E.length, a4 = 0; a4 < a5; a4++)
			if (ax === a6E[a4].split(":")[0]) return a4;
		return 0
	}, this.wL = function(aPv) {
		if (aPv && !(aPv.length < 2)) {
			aPv = aPv.split("-")[0].toLowerCase();
			for (var z = this.z, a5 = z.length, a4 = 0; a4 < a5; a4++)
				if (aPv === z[a4]) return a4
		}
		return -1
	}
}

function aLF() {
	var aPw, aPx = [],
		aPy = -1,
		aPz = 0,
		aQ0 = 0;

	function aQ4() {
		aPz = eW.av, (3 === this.aKf ? aQ3 : (aPy = (aPx.length + aPy + 2 * this.aKf - 1) % aPx.length, aQ2))()
	}

	function aQ2() {
		0 !== aPx.length && (aQ0 = 0, aPw && aPw.bi(), (aPw = new aKd(aQ4)).br(aPy, aPx.length), aPw.show(aPx[aPy]), bQ.message.resize())
	}

	function aQ3() {
		aQ0 = 1, aPw && aPw.bi(), (aPw = new a5q(aQ2)).br(aPx.length), aPw.show(), bQ.message.resize()
	}
	this.pp = function(kD) {
		var ka;
		2 === kD.id && 3 === kD.kI ? bQ.cY.kj(kD.bs) : (ka = bQ.cY.kM(kD, bQ.cY.kC(kD)), (5 !== kD.id && 6 !== kD.id || (aT.a1h(29).bg().vS(ka), 5 === kD.id)) && (ka = eW.av < aPz + 2e4, aPy !== aPx.length - 1 && ka || (aPy = aPx.length), aPx
			.push(kD), bp.cy.data[14].value || 7 === kD.id || hO.play(), aPw) && (aQ0 && (bp.cy.data[13].value || ka) ? aPw.br(aPx.length) : aQ2()))
	}, this.show = function() {
		aQ3()
	}, this.aY = function() {
		aPy = aPx.length - 1, aPw && aPw.bi(), aPw = null
	}, this.resize = function() {
		aPw && aPw.resize()
	}, this.km = function() {
		return aPx
	}
}

function aLt() {
	var aP, ev, aQ5, f4;

	function bM() {
		co.bi(), aT.f0()[19] = null, aT.f1()
	}

	function aQC() {
		aQF(), aQD()
	}

	function aQF() {
		aQ5.ap.lastChild && aT.removeChild(aQ5.ap, aQ5.ap.lastChild)
	}

	function aQD() {
		var aQG = cC.u9(eq.data);
		eq.data.canvas = cC.ty(aQG, eq.data.mapSeed).qI, aQE()
	}

	function aQE() {
		var a46 = eq.data.canvas;
		a46.style.width = "100%", aQ5.ap.appendChild(a46)
	}
	this.cu = function(a46) {
		eq.data.canvas && aQF(), eq.data.canvas = a46, aQE()
	}, this.show = function() {
		aP.show(), this.resize()
	}, this.aY = function() {
		aP.aY()
	}, this.resize = function() {
		aP.resize(), ev.resize()
	}, this.ae = function(af) {
		2 === af && aP.ag[0].ah()
	}, aP = new aR(L(11), [new aS("⬅️ " + L(1), bM)]), 2 === eq.data.mapType && co.ck(), ev = new ex(aP.aV, (function(f4) {
		var f8 = new f9;
		f8.fA(L(21)), f8.fB(new fC({
			fD: [L(473), L(474), L(475)],
			value: eq.data.mapType
		}, function(aB) {
			2 === (eq.data.mapType = aB) ? (co.ck(), eq.data.canvas = null) : (eq.data.passableWater = eq.data.passableMountains = 1, co.bi()), aT.bl(20)
		})), 2 <= eq.data.mapType && (f8.fF(new aDs), f8.fF(new a5i({
			value: eq.data.passableWater
		}, L(476), function(value) {
			eq.data.passableWater = value
		})), f8.fF(new a5i({
			value: eq.data.passableMountains
		}, L(477), function(value) {
			eq.data.passableMountains = value
		})));
		f4.push(f8)
	}(f4 = []), function(f4) {
		if (0 === eq.data.mapType) {
			for (var f8 = new f9, fD = (f8.fA(L(11)), []), a4 = 0; a4 < cC.cF.aKn.length; a4++) fD.push(cC.cF.cG[cC.cF.aKn[a4]].name);
			f8.fB(new fC({
				fD: fD,
				value: eq.data.mapProceduralIndex
			}, function(aB) {
				eq.data.mapProceduralIndex = aB, aQC()
			})), f4.push(f8)
		}
	}(f4), function(f4) {
		if (1 === eq.data.mapType) {
			for (var f8 = new f9, fD = (f8.fA(L(11)), []), a4 = 0; a4 < cC.cF.aKo.length; a4++) fD.push(cC.cF.cG[cC.cF.aKo[a4]].name);
			f8.fB(new fC({
				fD: fD,
				value: eq.data.mapRealisticIndex
			}, function(aB) {
				eq.data.mapRealisticIndex = aB, aQC()
			})), f4.push(f8)
		}
	}(f4), function(f4) {
		var f8;
		2 === eq.data.mapType && ((f8 = new f9).fA(L(478)), f8.fF(new fG(bp.cy.data[162], 1)), f8.fA(L(479), "0.8em"), f8.fF(new fv([new aS(L(480), function() {
			return co.cm(), !0
		}).button])), f4.push(f8))
	}(f4), function(f4) {
		var f8, bc;
		2 === eq.data.mapType && ((f8 = new f9).fA(L(481)), bc = new fG({
			aB: -1,
			value: eq.data.mapName
		}, 0, 0, function(bd) {
			eq.data.mapName = bd.target.value = bd.target.value.slice(0, 20)
		}), f8.fF(bc), f4.push(f8))
	}(f4), function(f4) {
		var f8, bc, a1x;
		0 === eq.data.mapType && ((f8 = new f9).fA("Seed"), bc = new fG({
			aB: -1,
			value: eq.data.mapSeed
		}, 1, 0, function(bd) {
			bd = Math.abs(Math.floor(bd.target.value)) % 16384;
			eq.data.mapSeed !== bd && (eq.data.mapSeed = bd, aQC())
		}), a1x = new aS(L(291), function(bd) {
			var ts = Math.floor(16384 * Math.random());
			if (eq.data.mapSeed !== ts) return bc.bd.value = eq.data.mapSeed = ts, aQC(), !0
		}), f8.fF(bc), f8.fF(new fv([a1x.button])), f4.push(f8))
	}(f4), function(f4) {
		(aQ5 = new f9).fA(L(31)), 2 !== eq.data.mapType ? aQD() : eq.data.canvas && aQE();
		f4.push(aQ5)
	}(f4), f4))
}

function ie() {
	this.z = new Array(4), this.aQH = new Uint16Array(2), this.qc = new Uint16Array(2), this.a8C = new Int32Array(2), this.a7w = new Uint32Array(2), this.aQI = new Uint32Array(2), this.aIT = new Uint8Array(4), this.aQJ = new Uint8Array(4), this.aJH =
		new Uint32Array(4), this.aQK = new Uint32Array(5), this.aIu = new Uint32Array(8), this.oD = new Uint32Array(8), this.a4l = new Uint16Array(16), this.qd = new Uint16Array(512), this.aQL = new Uint16Array(512), this.aQM = new Uint16Array(512),
		this.aQN = new Uint16Array(0), this.ck = function() {
			var a5 = cC.mO * cC.mP;
			this.aQN.length !== a5 && (this.aQN = new Uint16Array(a5))
		}, this.aQO = function(z, tz) {
			return z[0] = tz, z
		}, this.aQP = function(z, tz, u1) {
			return z[0] = tz, z[1] = u1, z
		}, this.aQQ = function(z, tz, u1, a4B) {
			return z[0] = tz, z[1] = u1, z[2] = a4B, z
		}, this.aQR = function(z, tz, u1, a4B, aQS) {
			return z[0] = tz, z[1] = u1, z[2] = a4B, z[3] = aQS, z
		}
}

function hz() {
	var aQT, canvas, wh, aQU;

	function aQa(aB, name, aQb, ax) {
		wh[aB] = name, canvas[aB] = new Image, canvas[aB].onload = function() {
			! function(aB, aQb) {
				var aMR, a1t = null;
				7 === aQb ? aMR = aZ.aN3.aMT : 8 === aQb ? (aMR = aZ.aN3.aMW, a1t = .1) : 3 === aQb ? (aMR = aZ.aN3.aMU, a1t = .06) : 5 === aQb ? aMR = aZ.aN3.aMX : 6 === aQb ? aMR = aZ.aN3.aMS : 4 === aQb && (aMR = aZ.aN3.aMY);
				canvas[aB] = aZ.aN3.aMQ(canvas[aB], aMR, a1t)
			}(aB, aQb), aQd()
		}, canvas[aB].onerror = function(bd) {
			console.error("Error loading image at index", aB, "Error:", bd), aQd()
		}, canvas[aB].src = "data:image/png;base64," + ax
	}

	function aQd() {
		aQT--, aQX()
	}

	function aQX() {
		0 === aQT && (aQT = -1, aQZ(), eW.eX = !0, canvas[7] = aQU, canvas[8] = aQU, canvas[9] = aQU, canvas[10] = aQU, 5 === aT.dK) && aT.c0().y8.resize()
	}

	function aQZ() {
		gE.aQf(), hA.aQg([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== d0.id, 1 !== d0.id, !0, !0, !0]), b0.b4 = new zm, b0.b4.ck(), gh.jB()
	}
	this.ck = function() {
		if (void 0 === canvas) {
			aQT = 23, canvas = new Array(aQT), wh = new Array(aQT), (aQU = document.createElement("canvas")).width = 1;
			for (var a4 = aQT - (aQU.height = 1); 0 <= a4; a4--) canvas[a4] = aQU;
			aQZ(), aQa(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aQa(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aQa(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aQa(3, "orders", 6,
					"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"
					), aQa(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aQa(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aQa(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aQa(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aQa(8,
					"googleplay", 3,
					"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"
					), aQa(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aQa(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aQa(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aQa(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aQa(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aQa(14, "bestPlayer", 5,
					"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"
					), aQa(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aQa(16, "apple", 3,
					"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"
					), aQa(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aQa(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aQa(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aQa(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aQa(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aQa(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(aB) {
		return canvas[aB]
	}, this.aLi = function(name) {
		for (var a4 = wh.length - 1; 0 <= a4; a4--)
			if (wh[a4] === name) return canvas[a4];
		return aQU
	}, this.a7m = function() {
		return aQT <= 0
	}, this.aQW = function() {
		aQT = 0, aQX()
	}
}

function vz() {
	this.L84 = ["📜 Game Log", "Back", "Team", "Battle Royale", "1v1", "Zombie", "Chat", "Players", "Close {button}", "Ready", "Player Count", "Map", "Game Mode", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies",
		"Starting Resources", "Options", "Default", "Uniform", "Customized", "📰 Propaganda", "Links", "Propaganda Text", "Colors", "Reset", "Language", "Preview", "Show", "Launch Campaign", "Gold Investment", "Launch", "Cancel", "Confirm",
		"Clans", "Clan Members", "Admins", "1v1 Players", "Richest Players", "Patreon Members", "🏆 Leaderboards", "Propaganda", "Report Abuse", "Humans", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time",
		"{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Incoming Boat!", "Incoming Ship!", "🔑 My Account", "📜 Logs", "📈 Clan Charts", "▶️ Replay", "🧈 Gold Transfer", "⚙️ Settings",
		"🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Type your message here...", "Send", "You earned {10} gold!", "{0} earned {11} gold!", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.",
		"Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "No Admin", "Helper",
		"Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.",
		"You earned {10} battle royale points!", "Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Source Account: {0}", "Target Account: {0}",
		"Gold to be Sent: {10}", "Gold to be Received: {10}", "Ship launched!", "Ship intercepted!", "Login", "➡️ Login", "Account Name", "Password", "Hide", "Security Tip", "The only official webpage is https://territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the Android or iOS App, you are fine.", "🛠️ List Options", "Start Index", "End Index", "Load Data", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "{0} defeated {1}!", "Previous 10", "Next 10", "🛠️ Options", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election",
		"Bio Reports", "Battle Royale Players", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type",
		"Elo Deducted", "Bio Removed", "🔄 Reset", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Lobby", "Resolution", "Low",
		"Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Normal", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted",
		"Shortcut Keys", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Very Easy", "Easy", "Hard", "Very Hard", "Impossible", "This is a contest!", "Accept",
		"You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️",
		"The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}",
		"Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.",
		"{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.",
		"You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.",
		"{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Team {0}", "Team {0} won the game!", "Loading", "Upcoming Alliance Contest!",
		"Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!", "Mixed", "Team dependent", "Next Contest: ", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar",
		"Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack",
		"Call Peace Vote", "Intercept Ship At Mouse Pointer", "Adjust", "Random", "Selectable Color", "Player Names", "Kingdom Names", "Simple Names", "Selectable Name", "second played", "seconds played", "Refresh", "Public Profile", "🧈 Gold",
		"Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Drifter", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer",
		"Copy", "Request New Password", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
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
		"If you hide Patreon, no one can share their membership with you.", "Source Account", "Send gold only to trusted accounts!", "Territorial Income", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains",
		"Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "World 2", "British Isles", "⏳ Connecting...", "Find Server...",
		"New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans",
		"Territorial Loss", "Interest Income", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Additional Income", "Mountain Attacks", "Ships landed",
		"🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Quit Game", "More", "Custom Scenario", "⚔️ Play", "Settings", "Clustered", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "Procedural Map", "Realistic Map",
		"Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "You are leaving Territorial.io.", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Timeframe",
		"More Options", "Y-Axis Compression", "You are leaving Territorial.io!", "Replay Error", "Warning", "Loading...", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "Choose Your Nation's Color!",
		"National Color", "Red: ", "Green: ", "Blue: ", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "Spawning", "Selectable Spawn", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Territory",
		"Numbers", "Statistics", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Activated", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "LEADERBOARD",
		"Clan Chart"
	]
}

function jE() {
	var gap, r1, dF = [0, 0, 0, 0, 0],
		dE = [0, 0, 0, 0, 0],
		d3 = [1, 1, 1, 1, 1],
		a9 = [!0, !0, !0, !1, !1],
		af = (this.a4B = [!0, !0, !0, !1, !1], null);
	this.aQg = function(a46, aQh) {
		af = a46, a9 = aQh, r1 = [gz.fX, gz.fY, gz.fa, gz.fa, gz.fb], this.ck()
	}, this.ck = function() {
		if (gQ.a7m()) {
			var a4, pM = Math.floor((d0.jF.lR() ? .261 : .195) * eR.lS),
				pN = Math.floor(.9 * pM),
				aC = Math.floor(.17 * pN);
			if (gap = d0.jF.lR() ? 2 * ac.gap : ac.gap, d3[0] = pM / af[0].width, d3[1] = pN / af[1].width, d3[2] = aC / af[2].height, d3[3] = aC / af[3].height, d3[4] = aC / af[4].height, d3[2] *= 1.7, d3[3] *= 1.07, dF[0] = gap, dF[1] = gap,
				dF[2] = gap, dF[3] = gap, dF[4] = Math.floor(2 * gap + d3[3] * af[3].width), dE[0] = gap, dE[1] = dE[0] + gap + d3[0] * af[0].height, dE[2] = dE[1] + gap + d3[1] * af[1].height, dE[3] = dE[2] + gap + d3[2] * af[2].height, dE[4] =
				dE[3], !a9[0])
				for (a4 = 0; a4 < 5; a4++) dE[a4] -= d3[0] * af[0].height + gap;
			if (!a9[1])
				for (a4 = 2; a4 < 5; a4++) dE[a4] -= d3[1] * af[1].height + gap
		}
	}, this.lJ = function() {
		return !(7 === eY.tP() && d0.jF.lR())
	}, this.lp = function(xr, xs) {
		if (af && this.lJ())
			for (var a4 = a9.length - 1; 0 <= a4; a4--)
				if (a9[a4] && this.a4B[a4] && dF[a4] < xr && dE[a4] < xs && xr < dF[a4] + d3[a4] * af[a4].width && xs < dE[a4] + d3[a4] * af[a4].height) return aT.bl(9, aT.dK, new ou(L(482), aZ.aa.aGE(r1[a4]))), !0;
		return !1
	}, this.eZ = function() {
		if (af && this.lJ()) {
			var a4;
			for (m0.imageSmoothingEnabled = !0, a4 = 0; a4 < 5; a4++) a9[a4] && this.a4B[a4] && (m0.setTransform(d3[a4], 0, 0, d3[a4], dF[a4], dE[a4]), m0.drawImage(af[a4], 0, 0));
			m0.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function aLw() {
	var aP, ev, ew, f4;

	function bM() {
		ez(), 2 !== eq.data.iIncomeType && (eq.data.iIncomeData = null), aT.f0()[19] = null, aT.f1()
	}

	function ez() {
		2 === eq.data.iIncomeType && aZ.cb.f2(ew.f3(), eq.data.iIncomeData, 255)
	}
	this.show = function() {
		aP.show(), this.resize()
	}, this.aY = function() {
		aP.aY()
	}, this.resize = function() {
		aP.resize(), ev.resize()
	}, this.ae = function(af) {
		2 === af && aP.ag[0].ah()
	}, aP = new aR(L(449), [new aS("⬅️ " + L(1), bM)]), ev = new ex(aP.aV, (function(f4) {
		var f8 = new f9;
		f8.fA(L(21)), f8.fB(new fC({
			fD: [L(22), L(23), L(24)],
			value: eq.data.iIncomeType
		}, function(aB) {
			ez(), 2 !== aB || eq.data.iIncomeData || (eq.data.iIncomeData = new Uint8Array(eq.fE), eq.data.iIncomeData.fill(32)), eq.data.iIncomeType = aB, aT.bl(27)
		})), f4.push(f8)
	}(f4 = []), function(f4) {
		var f8;
		1 === eq.data.iIncomeType && ((f8 = new f9).fA("Value"), f8.fF(new fG({
			aB: -1,
			value: eq.data.iIncomeValue
		}, 1, 0, function(bd) {
			var value = cf.fH(Math.floor(bd.target.value), 0, 255);
			bd.target.value = eq.data.iIncomeValue = value
		})), f4.push(f8))
	}(f4), function(f4) {
		var f8;
		2 === eq.data.iIncomeType && ((f8 = new f9).fA("Data"), (ew = new fI(0, 1, 0, 1)).fJ(aZ.bu.fK(eq.data.iIncomeData, 4)), f8.fF(ew), f4.push(f8))
	}(f4), f4))
}

function vh() {
	this.aKW = function(rJ) {
		var aQi;
		return cC.u5(cC.cE) && eq.data.passableMountains && (aQi = gR.yo(rJ), this.aQj(eq.jj, aQi) || this.aQk(eq.jj, aQi)) && 0 !== (aQi = function(aOs) {
			for (var dF = h0.mZ(aOs), dE = h0.mb(aOs), max = Math.max(cC.mO, cC.mP) - 2, aQn = max * max, sW = !1, aQo = 0, v7 = 0; v7 < max; v7++) {
				var aQp, mV = function(dF, dE, v7) {
					for (var a4 = 0; a4 <= v7; a4++)
						for (var aN = -1; aN < 2; aN += 2)
							for (var bw = -1; bw < 2; bw += 2)
								for (var af = 0; af < 2; af++) {
									var rJ = function(dF, dE) {
										if (h0.zC(dF, dE)) {
											dF = h0.z9(dF, dE), dE = h0.pY(dF);
											if (gR.pZ(dE) && gR.aQq(dE)) return dF
										}
										return 0
									}(dF + af * aN * a4 + (1 - af) * bw * v7, dE + af * bw * v7 + (1 - af) * aN * a4);
									if (rJ) return rJ
								}
					return 0
				}(dF, dE, v7);
				mV && (aQp = h0.yq(dF, dE, mV)) < aQn && (aQo = mV, aQn = aQp, sW || (sW = !0, max = Math.floor(Math.sqrt(aQp)) + 1))
			}
			return aQo
		}(h0.zD(rJ))) && (rJ = h0.pY(aQi), gR.sI(rJ) || (rJ = gR.sZ(rJ)) !== eq.jj && hQ.sU(rJ, eq.jj)) ? aQi : 0
	}, this.aJF = function(player, mV) {
		mV = h0.pY(mV);
		if (gR.pZ(mV)) {
			if (gR.sI(mV)) h2.aIu[0] = eq.fE;
			else if (gR.sZ(mV) !== h2.aIu[0]) return !1;
			for (var sG = function(rJ) {
					var v1 = gR.v1,
						sG = [];
					loop: for (var dh = 3; 0 <= dh; dh--) {
						var sj = rJ + v1[dh];
						if (gR.a9t(sj)) {
							for (var id = gR.yo(sj), a4 = 0; a4 < sG.length; a4++)
								if (id === sG[a4]) continue loop;
							h2.aJH[sG.length] = sj, sG.push(id)
						}
					}
					return sG
				}(mV), a5 = sG.length, a4 = 0; a4 < a5; a4++)
				if (this.aQj(player, sG[a4]) || this.aQk(player, sG[a4])) return h2.aJH[0] = h2.aJH[a4], !0
		}
		return !1
	}, this.aQj = function(player, aQi) {
		for (var a0W = ei.a0W[player], a5 = a0W.length, aQr = Math.max(cf.cg(a5, 12), 1), v1 = gR.v1, a4 = 0; a4 < a5; a4 += aQr)
			for (var sm = a0W[a4], dh = 3; 0 <= dh; dh--) {
				var sj = sm + v1[dh];
				if (gR.a9t(sj) && aQi === gR.yo(sj)) return !0
			}
		return !1
	}, this.aQk = function(player, aQi) {
		for (var a0W = ei.a0W[player], a5 = a0W.length, v1 = gR.v1, a4 = 0; a4 < a5; a4++)
			for (var sm = a0W[a4], dh = 3; 0 <= dh; dh--) {
				var sj = sm + v1[dh];
				if (gR.a9t(sj) && aQi === gR.yo(sj)) return !0
			}
		return !1
	}
}

function a5L() {
	this.aQs = 28, this.a5N = 0, this.aQt = null;
	var aQv = this.aQu = null;

	function aQz(nI, aR0) {
		var dF, dE, mV, mp, a46 = aZ.aa.aEc(nI, nI),
			d6 = aZ.aa.getContext(a46, !0),
			t2 = aZ.aa.getImageData(d6, nI, nI),
			b4 = t2.data,
			rQ = (nI >> 1) - .5,
			aR1 = .5 + rQ;
		for (aR1 *= aR1, dE = 0; dE < nI; dE++)
			for (dF = 0; dF < nI; dF++) mp = (mp = dF - rQ) * mp + (mp = dE - rQ) * mp, b4[mV = 4 * (dE * nI + dF)] = aR0[0], b4[1 + mV] = aR0[1], b4[2 + mV] = aR0[2], b4[3 + mV] = (aR1 - mp) * aR0[3] / aR1;
		return d6.putImageData(t2, 0, 0), a46
	}

	function aR4(a4, d6, a46, nI) {
		var highlight, dF, dE;
		0 !== ei.kv[a4] && 0 !== ei.jd[a4] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a4]) && (nI *= 2), dF = ei.ml[a4] + ei.mm[a4] + 1 - nI - 2 >> 1, dE = ei.mn[a4] + ei.mo[a4] + 1 - nI - 2 >> 1, highlight ? d6
			.drawImage(a46[eq.p6 ? 9 === eq.l1 && 5 === g7.np[a4] ? 3 : hG.sG[a4] : a4 < eq.er ? 1 : 0], dF, dE, nI, nI) : d6.drawImage(a46[eq.p6 ? 9 === eq.l1 && 5 === g7.np[a4] ? 3 : hG.sG[a4] : a4 < eq.er ? 1 : 0], dF, dE))
	}
	this.ck = function() {
		var ls;
		this.a5N = 700,
			function(ls) {
				var nI = ls.aQs;
				if (ls.aQu = [], aQv = [], eq.p6) {
					for (var a4 = 0; a4 <= eq.xE; a4++) ls.aQu.push(aQz(nI, hG.wi[hG.qZ[a4]])), aQv.push(aQz(nI >> 1, hG.wi[hG.qZ[a4]]));
					9 === eq.l1 && aQv.push(aQz(nI, hG.wi[1]))
				} else ls.aQu.push(aQz(nI, hG.wi[7])), ls.aQu.push(aQz(nI, hG.wi[4])), aQv.push(aQz(nI >> 1, hG.wi[7]))
			}(this),
			function(ls, aR2) {
				var a4, aQt = ls.aQt,
					d6 = aZ.aa.getContext(aQt, !0),
					a5 = eq.fE,
					nI = ls.aQs >> 1;
				d6.imageSmoothingEnabled = !1, d6.setTransform(1, 0, 0, 1, 0, 0), aR2 && d6.clearRect(0, 0, aQt.width, aQt.height);
				if (9 === eq.l1) {
					nI <<= 1;
					ls = gj.xH[5];
					for (a4 = a5 - ls; a4 < a5; a4++) aR4(a4, d6, aQv, nI);
					a5 -= ls, nI >>= 1
				}
				for (a4 = eq.er; a4 < a5; a4++) aR4(a4, d6, aQv, nI)
			}(this, null !== (ls = this).aQt && ls.aQt.width === cC.mO - 2 && ls.aQt.height === cC.mP - 2 || (ls.aQt = aZ.aa.aEc(cC.mO - 2, cC.mP - 2), !1)), eq.l3 || this.aQy()
	}, this.a3z = aQz, this.aQy = function() {
		for (var a5 = eq.er, nI = this.aQs, aQu = this.aQu, d6 = aZ.aa.getContext(this.aQt, !0), a4 = 0; a4 < a5; a4++) aR4(a4, d6, aQu, nI)
	}
}

function a5M() {
	this.eZ = function() {
		if (0 !== h3.bW.a5N && (m0.globalAlpha = Math.min(h3.bW.a5N / 580, 1), m0.drawImage(h3.bW.aQt, 1 + gK.qJ(), 1 + gK.qK()), m0.globalAlpha = 1, eq.l3)) {
			for (var mY = mI / mJ, ma = mK / mJ, ms = (eR.cv + mI) / mJ, mt = (eR.cw + mK) / mJ, lE = h3.bW.aQs * mJ, aQu = h3.bW.aQu, a4 = eq.er - 1; 0 <= a4; a4--) ! function(a4, lE, mY, ma, ms, mt, aQu) {
				var highlight;
				0 === ei.kv[a4] || 0 === ei.jd[a4] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a4]) && (lE *= 2), ms = eR.cv * ((ei.ml[a4] + ei.mm[a4] + 1) / 2 - mY) / (ms - mY) - .5 * lE, mY = eR.cw * ((ei
					.mn[a4] + ei.mo[a4] + 1) / 2 - ma) / (mt - ma) - .5 * lE, ms > eR.cv) || mY > eR.cw || ms < -lE || mY < -lE || (highlight ? m0.setTransform(2 * mJ, 0, 0, 2 * mJ, ms, mY) : m0.setTransform(mJ, 0, 0, mJ, ms, mY), m0
					.drawImage(aQu[eq.p6 ? hG.sG[a4] : 1], 0, 0))
			}(a4, lE, mY, ma, ms, mt, aQu);
			m0.setTransform(mJ, 0, 0, mJ, 0, 0)
		}
	}
}

function aLq() {
	var jq, a1g, f4;
	this.show = function() {
		jq.show(), this.resize()
	}, this.aY = function() {
		jq.aY()
	}, this.resize = function() {
		jq.resize(), a1g.resize()
	}, this.ae = function(af) {
		2 === af && jq.ag[0].ah()
	}, jq = new aR(L(483), [new aS("⬅️ " + L(1), function() {
		aT.aU(13)
	})]), a1g = new ex(jq.aV, ((f4 = []).push(function() {
		var f8 = new f9,
			a1x = (f8.fA(L(484)), f8.fs(L(485)), new aS(L(134), function() {
				bp.bq.br(130, 0), aT.bW.tH()
			}, 0, 0, 1)),
			bc = new fG(bp.cy.data[126], 0, function() {
				a1x.button.click()
			});
		return f8.fF(bc), bc.bd.placeholder = "a,b,c", bc.bd.style.marginTop = "0.5em", f8.fF(new fv([a1x.button])), f8
	}()), f4.push(function() {
		var f8 = new f9,
			a1x = new aS(L(134), function() {
				bp.bq.br(130, 1), aT.bW.tH()
			}, 0, 0, 1),
			a1y = new fG(bp.cy.data[129], 1, function() {
				a1y.bd.focus()
			}),
			a1z = new fG(bp.cy.data[128], 1, function() {
				a1x.button.click()
			});
		return f8.fA(L(132)), f8.fF(a1z), a1z.bd.style.marginBottom = "0.5em", f8.fA(L(133)), f8.fF(a1y), f8.fF(new fv([a1x.button])), f8
	}()), f4.push(function() {
		var f8 = new f9;
		return f8.fA(L(486)), bp.cy.data[125].fD = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], f8.fB(new fC(bp.cy.data[125])), f8
	}()), f4.push(function() {
		var f8 = new f9;
		return f8.fA(L(487)), f8.fF(new a5i(bp.cy.data[127], L(488))), f8
	}()), f4))
}

function aMb() {
	this.no = 512, this.pS = 8, this.pR = 0, this.aM4 = 0, this.sd = new Uint16Array(this.no), this.mX = new Uint32Array(this.no), this.sN = new Uint16Array(this.no), this.se = new Uint32Array(this.no), this.aN9 = new Uint16Array(this.no), this.o2 =
		new Uint16Array(this.no), this.sM = new Uint8Array(this.no), this.aIi = new Uint8Array(this.no), this.aJp = new Array(this.no), this.sc = new Uint16Array(this.no), this.nm = new Uint8Array(eq.fE), this.aN4 = new Uint16Array(this.pS * eq.fE),
		this.ck = function() {
			this.pR = 0, this.aM4 = 0, this.nm.fill(0), this.aJp.fill(null)
		}, this.o9 = function(player) {
			var np = h2.a7w[0],
				pW = h2.oD[1],
				e0 = h2.z[0],
				aRB = this.aM4,
				a5 = this.pR,
				aRC = h0.zF(e0[0]),
				aDZ = this.nm[player],
				aDa = (player << 3) + aDZ;
			this.sd[a5] = aDa, this.mX[a5] = aRC, this.sN[a5] = 0, np < 60 && (aZ.d.a0x(player, 60 - np), np = 60), this.se[a5] = np, this.aN9[a5] = h1.zH.o9(a5, h0.zG(aRC)), this.o2[a5] = aRB, this.sM[a5] = pW, this.aIi[a5] = 0, this.aJp[a5] = e0,
				this.sc[a5] = 0, this.aM4 = (aRB + 1) % 65536, this.nm[player] = aDZ + 1, this.aN4[aDa] = a5, this.pR++, h1.pW.sR(player, e0[e0.length - 1], pW, aRB, np)
		}, this.w = function() {
			h1.pW.w();
			for (var ec = eq.jj, jl = h1.cY.a2s(ec), ls = (! function(ls) {
					for (var aRH, mX = ls.mX, se = ls.se, aIi = ls.aIi, sN = ls.sN, aN9 = ls.aN9, aJp = ls.aJp, sc = ls.sc, ls = ls.pR, a45 = cC.mO << 4, a4 = ls - 1; 0 <= a4; a4--) {
						var aRI = mX[a4],
							e0 = aJp[a4],
							aRJ = sc[a4],
							aRC = h0.zF(e0[aRJ]),
							aRK = h0.zF(e0[aRJ + 1]),
							aRL = aRC % a45,
							aRC = ~~((aRC + .5) / a45),
							aRN = aRK % a45,
							aRO = ~~((aRK + .5) / a45),
							aRP = aRN - aRL,
							aRQ = aRO - aRC,
							dh = Math.max(~~Math.sqrt(aRP * aRP + aRQ * aRQ + .5), 1),
							aRR = se[a4],
							aRR = (aRR = aIi[a4] ? 4e4 : 25e4 + Math.min(20 * aRR, 3e5) + Math.min(aRR >> 3, 5e4), sN[a4] + Math.max(~~((aRR + .5) / dh), 1));
						65535 <= aRR ? aRJ + 2 < e0.length ? (sc[a4] = aRJ + 1, mX[a4] = aRH = function(a4, aRS, aRL, aRM, aRJ, dh, e0, a45) {
							aRS = Math.min(aRS - 65535, 65535);
							var e0 = h0.zF(e0[aRJ + 2]),
								aRJ = e0 % a45 - aRL,
								e0 = ~~((e0 + .5) / a45) - aRM,
								aRV = Math.max(~~Math.sqrt(aRJ * aRJ + e0 * e0 + .5), 1);
							return aRS = Math.min(Math.floor((dh * aRS + .5) / aRV), 65534), h1.bW.sN[a4] = aRS, aRL + cf.cg(aRS * aRJ, 65535) + a45 * (aRM + cf.cg(aRS * e0, 65535))
						}(a4, aRR, aRN, aRO, aRJ, dh, e0, a45)) : (mX[a4] = aRH = aRK, sN[a4] = 65535) : (sN[a4] = aRR, mX[a4] = aRH = aRL + cf.cg(aRR * aRP, 65535) + a45 * (aRC + cf.cg(aRR * aRQ, 65535))), aN9[a4] = h1.zH.aRU(aN9[a4],
							aRI, aRH)
					}
				}(this), ! function(ls) {
					if (eW.et() % 2 == 1) {
						var a4, aA, rQ, bw, af, aRW, a0B, aRX, a4U, mY, ma, aRC, aRY, a4N, aRa, a4V, a5 = ls.pR,
							mX = ls.mX,
							sd = ls.sd,
							se = ls.se,
							aIi = ls.aIi,
							zH = h1.zH.zH,
							aFz = zH.length,
							aRc = h1.zH.aRc,
							a45 = cC.mO << 4,
							aRd = eq.p6,
							aCk = hG.sG,
							lE = (a5 - 1) * (cf.cg(eW.et(), 2) % 2);
						for (a4 = 0; a4 < a5; a4++)
							for (aA = Math.abs(a4 - lE), aRC = mX[aA], rQ = h0.zG(aRC), a4U = sd[aA] >> 3, mY = aRC % a45, ma = ~~((aRC + .5) / a45), aRa = se[aA], bw = 0; bw < 9; bw++)
								if (!((aRW = rQ + aRc[bw]) < 0 || aFz <= aRW))
									for (aRX = zH[aRW], a0B = aRX.length, af = 0; af < a0B; af++) aRY = aRX[af], a4V = sd[aRY] >> 3, a4U == a4V || aRd && aCk[a4U] === aCk[a4V] && aCk[a4U] || (a4V = mX[aRY], (a4N = mY - a4V % a45) * a4N + (
										a4N = ma - ~~((a4V + .5) / a45)) * a4N < 14400 && (a4V = se[aRY], a4N = a4V <= aRa ? Math.max(1, cf.cg(a4V + cf.cg(aRa - a4V, 10), 10)) : Math.max(1, cf.cg(aRa, 10)), se[aRY] = Math.max(a4V -
										a4N, 0), aIi[aRY] = 4))
					}
				}(this), ! function(ls) {
					if (eW.et() % 5 == 3)
						for (var se = ls.se, a5 = ls.pR, a4 = 0; a4 < a5; a4++) {
							var np = se[a4];
							se[a4] = Math.max(np - Math.max(1, np >> 7), 0)
						}
				}(this), this), se = ls.se, aIi = ls.aIi, a4 = ls.pR - 1; 0 <= a4; a4--) aIi[a4] = aIi[a4] >> 1, 0 === se[a4] && (h1.o3.qq(a4), h1.sP.sQ(a4));
			hE.sp(ec, jl - h1.cY.a2s(ec), 15)
		}
}

function bT(m, n, aRe, aRf) {
	var self;
	this.r = document.createElement("span"), (self = this).r.textContent = m, self.r.style.color = t.u, self.r.style.position = "absolute", self.r.style.font = "inherit", aRf ? self.r.style.bottom = "0.06em" : self.r.style.top = "0.12em", aRe ? self
		.r.style.left = "0.2em" : self.r.style.right = "0.2em", self.r.style.fontSize = "0.6em", self.r.style.pointerEvents = "none", self.r.style.whiteSpace = "pre", n.style.position = "relative", n.style.overflow = "hidden", n.appendChild(self.r)
}

function iB() {
	var aRg;
	this.xH = null, this.a96 = 0, this.ck = function() {
		aRg = [], 9 === eq.l1 && this.aRh()
	}, this.aRh = function() {
		this.xH = [0, 0, 0, 0, 0, 0];
		for (var aRi = [256, 227, 170, 148, 100, this.a96 = 0, 0, 0], we = [0, 8, 24, 30, 46, 70, 256, 333], aRj = [0, 0, 3, 7, 14, 22, 256, 179], cw = eq.er, a4 = 1; a4 < aRi.length; a4++)
			if (cw <= we[a4]) {
				this.a96 = aRi[a4 - 1] - cf.cg((cw - we[a4 - 1]) * (aRi[a4 - 1] - aRi[a4]), we[a4] - we[a4 - 1]), this.xH[5] = aRj[a4 - 1] - cf.cg((cw - we[a4 - 1]) * (aRj[a4 - 1] - aRj[a4]), we[a4] - we[a4 - 1]), this.xH[0] = eq.fE - cw - this
					.a96 - this.xH[5];
				break
			} eq.r9 = eq.fE - eq.er, eq.data.numberTeams = (0 < eq.er) + (0 < eq.r9), eq.data.playerCount = eq.x6 = eq.er + eq.r9, eq.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, eq.er + this.a96, eq.r9 - this.a96]), eq.aDp.aDq()
	}, this.a33 = function(player) {
		aRg.push({
			player: player,
			aI: 14 + gi.o1(20)
		})
	}, this.w = function() {
		if (9 === eq.l1)
			for (var a4 = aRg.length - 1; 0 <= a4; a4--) --aRg[a4].aI <= 0 && (gU.a3t(aRg[a4].player, 0, b0.b1.a04 + b0.b1.aRl), aRg.splice(a4))
	}
}

function i2() {
	this.eg = null, this.ee = 0, this.aE4 = function() {
		for (this.ee = 0, a4 = eq.fE - 1; 0 <= a4; a4--) 0 !== ei.kv[a4] && this.ee++;
		this.eg = new Uint16Array(this.ee);
		for (var a5 = 0, a4 = 0; a4 < eq.fE; a4++) 0 !== ei.kv[a4] && (this.eg[a5++] = a4)
	}, this.qh = function() {
		for (var jd = ei.jd, a2j = ei.a2j, ep = ei.ep, eg = ed.eg, a4 = ed.ee - 1; 0 <= a4; a4--) {
			var ec = eg[a4],
				jl = jd[ec],
				rQ = a2j[ec];
			jl <= cf.cg(rQ, 4) ? gX.jJ(ec) : rQ <= jl ? 250 <= (a2j[ec] = jl) && (ep[ec] = 1) : a2j[ec] = rQ - Math.max(1, cf.cg(rQ - jl, 1e3))
		}
		this.l5()
	}, this.l5 = function() {
		for (var kv = ei.kv, sC = this.eg, sB = this.ee, a4 = sB - 1; 0 <= a4; a4--) 0 === kv[sC[a4]] && (sC[a4] = sC[--sB]);
		this.ee = sB
	}
}

function aLu() {
	var aP, ev, ew, f4;

	function bM() {
		ez(), 2 !== eq.data.aIncomeType && (eq.data.aIncomeData = null), aT.f0()[19] = null, aT.f1()
	}

	function ez() {
		2 === eq.data.aIncomeType ? (aZ.cb.f2(ew.f3(), eq.data.aIncomeData, 255), aZ.cb.max(eq.data.aIncomeData) || (eq.data.aIncomeType = 0)) : 1 !== eq.data.aIncomeType || eq.data.aIncomeValue || (eq.data.aIncomeType = 0)
	}
	this.show = function() {
		aP.show(), this.resize()
	}, this.aY = function() {
		aP.aY()
	}, this.resize = function() {
		aP.resize(), ev.resize()
	}, this.ae = function(af) {
		2 === af && aP.ag[0].ah()
	}, aP = new aR(L(457), [new aS("⬅️ " + L(1), bM)]), ev = new ex(aP.aV, (function(f4) {
		var f8 = new f9;
		f8.fA(L(21)), f8.fB(new fC({
			fD: [L(22), L(23), L(24)],
			value: eq.data.aIncomeType
		}, function(aB) {
			ez(), 2 !== aB || eq.data.aIncomeData || (eq.data.aIncomeData = new Uint8Array(eq.fE)), eq.data.aIncomeType = aB, aT.bl(22)
		})), f4.push(f8)
	}(f4 = []), function(f4) {
		var f8;
		1 === eq.data.aIncomeType && ((f8 = new f9).fA("Value"), f8.fF(new fG({
			aB: -1,
			value: eq.data.aIncomeValue
		}, 1, 0, function(bd) {
			var value = cf.fH(Math.floor(bd.target.value), 0, 255);
			bd.target.value = eq.data.aIncomeValue = value
		})), f4.push(f8))
	}(f4), function(f4) {
		var f8;
		2 === eq.data.aIncomeType && ((f8 = new f9).fA("Data"), (ew = new fI(0, 1, 0, 1)).fJ(aZ.bu.fK(eq.data.aIncomeData, 4)), f8.fF(ew), f4.push(f8))
	}(f4), f4))
}

function aLD() {
	function aRn(aRp) {
		bQ.bW.aGO && 1 === bQ.bW.bX[2] && aT.a1h(29).c8(), bQ.bW.aGO = 0, aT.a1h(29).c2(), 0 !== bQ.bW.cB[bQ.bW.bX[0]].cO && !aRp || aT.a1h(29).c1(), bQ.ci.aJO()
	}
	this.cB = new Array(4), this.bX = [0, 0, 1, 0], this.aGO = 0, this.ca = [0, 0], this.ck = function() {
		for (var a4 = 0; a4 < this.cB.length; a4++) this.cB[a4] = new su;
		this.bX[0] = bp.cy.data[158].value
	}, this.aF5 = function() {
		aRn(!0), bQ.aLB.ck()
	}, this.pv = function() {
		bQ.aLB.pv();
		for (var a4 = 0; a4 < bQ.bW.cB.length; a4++) {
			var cA = bQ.bW.cB[a4];
			0 === cA.cO ? cA.sx = 0 : (cA.cM = Math.max(cA.cM - cA.sx % 2, 0), cA.sx++)
		}
		aRn(!1)
	}, this.aFG = function(kS) {
		this.bX[0] !== kS || this.bX[2] || aT.a1h(29).cd()
	}
}

function jH() {
	var dF, dE, cw, aEQ, aRq, aRr, aRs, aRt, aRu, cv, aGF, aPC;
	this.lJ = !1, this.ck = function(ax, aRv) {
		if (1 === d0.id && 13 <= d0.oX && d0.oX < 18) return aRv ? void(aGF = ax) : aGF !== ax ? void 0 : void d0.d5.saveString(200, ax);
		aRv && (aGF = ax, (aPC = document.createElement("a")).appendChild(document.createTextNode(aGF)), this.lJ = !0, aPC.title = aGF, aPC.target = "_blank", aPC.href = aGF, aPC.style.textAlign = "center", aPC.style.color = t.u, aPC.style
			.position = "absolute", aPC.style.padding = "0px", aPC.style.margin = "0px", this.resize(), document.body.appendChild(aPC), eW.eX = !0)
	}, this.aY = function() {
		return !(!this.lJ || (aT.removeChild(document.body, aPC), this.lJ = !1))
	}, this.lp = function(xr, xs) {
		return !!this.lJ && ((xr < dF || xs < dE || dF + cv < xr || dE + cw < xs || dF + cv - aEQ < xr && xs < dE + aEQ) && (eW.eX = !0, this.lJ = !1, aT.removeChild(document.body, aPC)), !0)
	}, this.resize = function() {
		var lM, a7P;
		this.lJ && (aRt = Math.floor(.8 * (d0.jF.lR() ? eR.cv > eR.cw ? .6 : .55 : .4) * eR.lS), aEQ = Math.floor(.15 * aRt), aRq = Math.floor(.35 * aEQ), aRr = Math.floor(.5 * aEQ), aRs = Math.floor(2.5 * aRr), cw = aEQ + aRq + 3 * aRr, lM = aZ
			.aa.lT(1, aRq / eR.rt), aRu = Math.floor(eR.rt * gI.measureText(aGF, lM)), a7P = cv = (aRt < aRu ? aRu : aRt) + 2 * aRs, cv = Math.min(cv, eR.cv - 2 * (d0.jF.lR() ? 2 : 1) * ac.gap), lM = aZ.aa.lT(1, cv / a7P * aRq / eR.rt), aRu =
			Math.floor(eR.rt * gI.measureText(aGF, lM)), dF = Math.floor((eR.cv - cv) / 2), dE = Math.floor((eR.cw - cw) / 2), aPC.style.font = lM, aPC.style.top = Math.floor((dE + 1.4 * aRr + aEQ) / eR.rt) + "px", aPC.style.left = Math
			.floor((dF + (cv - aRu) / 2) / eR.rt) + "px")
	}, this.eZ = function() {
		this.lJ && (m0.fillStyle = t.qO, m0.fillRect(dF, dE + aEQ, cv, cw - aEQ), m0.fillStyle = t.aRw, m0.fillRect(dF, dE, cv, aEQ), m0.fillStyle = t.u, m0.lineWidth = ac.a0G, m0.strokeStyle = t.u, m0.strokeRect(dF, dE, cv, cw), m0.fillRect(dF,
			dE + aEQ, cv, ac.a0G), m0.font = aZ.aa.lT(1, .48 * aEQ), aZ.aa.textAlign(m0, 1), aZ.aa.textBaseline(m0, 1), m0.fillText(L(489), Math.floor(dF + (cv - .5 * aEQ) / 2), Math.floor(dE + .55 * aEQ)), gF.aOM(Math.floor(dF + cv -
			.8 * aEQ), Math.floor(dE + .25 * aEQ), Math.floor(.5 * aEQ)), m0.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function aRx() {
	var aRy = 0;

	function aS2(ax, id) {
		aRy || (id ? 1 === id ? gG.a9K = L(491) + ": " + ax : aT.bl(4, 3, new tZ(L(492), ax, 1)) : aT.bl(4, 3, new tZ("⚠️ " + L(490), ax, 1)))
	}
	this.aCJ = function(ax, aRz) {
		var fu, ka;
		return aRy = aRz, gw.kF.yg(gw.kF.yf(gw.kF.yd(ax))), gG.a9K = "", !! function() {
			if (gx.size < 10) aS2("File Too Small");
			else {
				var aS5 = gx.jT(12),
					oU = (aS5 !== e1.rVersion && aS2("Incompatible Version   Required: " + e1.rVersion + ("   Found: " + aS5) + ("   Compatible at territorial.io/" + aS5), 1), gx.jT(12)),
					aS6 = gx.jT(31);
				if (aS6 !== gx.size) aS2("Size Error: " + aS6 + " " + gx.size);
				else if (function(cw, aS5) {
						for (var ec = gx.dy, a5 = gx.size, oU = aS5, a4 = 3; a4 < a5; a4++) oU = oU + ec[a4] & 4095;
						return oU === cw || (aS2("Hash Error: " + oU + " " + cw + " " + a5), !1)
					}(oU, aS5)) return 1
			}
			return
		}() && (fu = gx, (ka = eq.data = new a3e).mapType = fu.jT(2), ka.mapProceduralIndex = fu.jT(8), ka.mapRealisticIndex = fu.jT(8), ka.mapSeed = fu.jT(14), ka.mapName = fu.aEw(5), 2 === ka.mapType && fu.aEx(), ka.passableWater = fu.jT(
			1), ka.passableMountains = fu.jT(1), ka.playerCount = fu.jT(10), ka.humanCount = fu.jT(10), ka.selectedPlayer = fu.jT(9), ka.gameMode = fu.jT(1), ka.playerMode = fu.jT(2), ka.battleRoyaleMode = fu.jT(2), ka.numberTeams = fu.jT(4),
			ka.isZombieMode = fu.jT(1), ka.isContest = fu.jT(1), ka.isReplay = fu.jT(1), ka.elo = fu.aEr(2, 14, 2), ka.colorsType = fu.jT(1), ka.colorsPersonalized = fu.jT(1), ka.colorsData = fu.aEr(10, 18, 512), ka.selectableColor = fu.jT(
			1), ka.teamPlayerCount = fu.aEr(4, 10, 9), ka.neutralBots = fu.jT(1), ka.botDifficultyType = fu.jT(2), ka.botDifficultyValue = fu.jT(4), ka.botDifficultyTeam = fu.aEr(4, 4, 9), ka.botDifficultyData = fu.aEr(10, 4, 512), ka
			.spawningType = fu.jT(2), ka.spawningSeed = fu.jT(14), ka.spawningData = fu.aEr(11, 12, 1024), ka.selectableSpawn = fu.jT(1), ka.playerNamesType = fu.jT(2), ka.playerNamesData = fu.aEu(10, 5, 512), ka.selectableName = fu.jT(1), ka
			.aIncomeType = fu.jT(2), ka.aIncomeValue = fu.jT(8), ka.aIncomeData = fu.aEr(10, 8, 512), ka.tIncomeType = fu.jT(2), ka.tIncomeValue = fu.jT(8), ka.tIncomeData = fu.aEr(10, 8, 512), ka.iIncomeType = fu.jT(2), ka.iIncomeValue = fu
			.jT(8), ka.iIncomeData = fu.aEr(10, 8, 512), ka.sResourcesType = fu.jT(2), ka.sResourcesValue = fu.jT(11), ka.sResourcesData = fu.aEr(10, 11, 512), !! function() {
				var fu = gx,
					a6d = fu.jT(5),
					aS8 = fu.jT(30),
					aS9 = fu.jT(30);
				if (aS8 + aS9 > 8 * fu.size) return void aS2("Corrupted File");
				return function(a5) {
						var aSC = new Uint8Array(a5),
							aSD = new Uint16Array(a5),
							aSE = new Uint32Array(a5),
							aSF = new Uint32Array(a5);
						gr.aE8.a8g = aSC, gr.aE8.a8h = aSD, gr.aE8.a8i = aSE, gr.aE8.a8j = aSF;
						for (var a4 = 0; a4 < a5; a4++) {
							var id = gx.jT(4);
							aSC[a4] = id, aSD[a4] = gx.jT(9), 0 === id ? aSE[a4] = gx.jT(22) : 1 === id ? (aSE[a4] = gx.jT(10), aSF[a4] = gx.jT(10)) : 2 === id ? (aSE[a4] = gx.jT(10), aSF[a4] = gx.jT(9)) : 3 === id ? (aSE[a4] = gx.jT(10),
								aSF[a4] = gx.jT(27)) : 4 === id ? (aSE[a4] = gx.jT(10), aSF[a4] = gx.jT(16)) : 5 === id || 6 === id ? aSE[a4] = gx.jT(10) : 7 === id ? aSE[a4] = gx.jT(1) : 10 === id && (aSE[a4] = gx.jT(20), aSF[a4] = gx
								.jT(22))
						}
					}(aS8),
					function(a5, a6d) {
						var a8k = new Uint8Array(a5),
							a8l = new Array(a5);
						a8l.fill(0), gr.aE8.a8k = a8k, gr.aE8.a8l = a8l;
						for (var a4 = 0; a4 < a5; a4++) a8k[a4] = gx.jT(1), a8l[a4] = gx.jT(a6d)
					}(aS9, a6d), 1
			}()) && (gx.aB < 8 * gx.size - 13 || gx.aB > 8 * gx.size ? (aS2("Out Of Bounds Error: " + gx.aB + " " + 8 * gx.size), !1) : (gr.aE8.a8m = ax, 2 !== eq.data.mapType || (aS2("Load base64 image...", 2), aRz)))
	}, this.aF1 = function(b3, aS3) {
		var a46 = document.createElement("canvas"),
			d6 = a46.getContext("2d");
		if (a46.width = b3.width, a46.height = b3.height, d6.drawImage(b3, 0, 0), eq.data.canvas = a46, aRy || aS3) return eq.ku ? void 0 : (eq.data.mapType = 2, aT.bh(), void aT.bl(19));
		gr.aS4()
	}
}

function aSG() {
	this.w = function() {
		if (eW.et() % 51 == 45)
			for (var a5 = h1.bW.pR, sM = h1.bW.sM, aJp = h1.bW.aJp, o2 = h1.bW.o2, sd = h1.bW.sd, a90 = g7.a90, np = g7.np, a4 = 0; a4 < a5; a4++) {
				var e0, player, aJi, pW = sM[a4];
				pW % 64 == 6 || (e0 = aJp[a4], (player = h1.cY.aOu(e0[e0.length - 1])) < 0) || !aZ.d.a4W(player, sd[a4] >> 3) || gi.o1(1e3) >= a90[np[player]] || ! function(o0, e0) {
					for (var a5 = e0.length - 1, aMC = h1.bW.sc[o0], v7 = 0, a4 = aMC + 1; a4 < a5; a4++) v7 += h0.yw(e0[a4], e0[a4 + 1]);
					return (v7 += h0.yw(h0.mW(h1.bW.mX[o0]), e0[aMC + 1])) <= 60
				}(a4, e0) || (aJi = o2[a4], 64 <= pW && h1.o3.o4(player, aJi)) || function(player, e0, aJi, o0, pW) {
					h1.nk.nl(player) && aZ.d.nq(player, g7.nr[g7.np[player]], 32, 0) && (h1.bW.sM[o0] = 64 + pW % 64, h1.o3.qF(aJi, h1.bW.aM4), h2.z[0] = h1.aH0.aH1(e0), h2.oD[1] = 6, aZ.d.o8(player), h1.bW.o9(player))
				}(player, e0, aJi, a4, pW)
			}
	}
}

function fv(aSJ) {
	var ap = document.createElement("div");
	this.bd = ap, this.aSK = aSJ, this.resize = function() {
		for (var a5 = aSJ.length, a4 = 1; a4 < a5; a4++) aZ.aa.ot(aSJ[a4], 4)
	};
	var a4, a5 = aSJ.length;
	for (ap.style.width = "100%", ap.style.height = "2.7em", ap.style.marginTop = "0.6em", ap.style.border = "inherit", a4 = 0; a4 < a5; a4++) aSJ[a4].style.verticalAlign = "top", aSJ[a4].style.width = (100 / a5).toFixed(2) + "%", aSJ[a4].style
		.height = "100%", aSJ[a4].style.fontSize = "0.75em", ap.appendChild(aSJ[a4])
}

function hg() {
	var ro, rp, aSL, aSM, aSN, aSO, aSP, aSQ, aSR, aSS;

	function aSU() {
		var x6 = eq.x6;
		for (aSR = x6; aSR < eq.fE; aSR++) aST();
		for (aSR = eq.l3 ? eq.er : 0; aSR < x6; aSR++) {
			if (!aSX()) {
				for (var bw = eq.aDw = aSR; bw < x6; bw++) aSR = bw, aST();
				return
			}
			aSY(aSO + ro * aSN + cf.cg(aSN, 2), aSP + rp * aSN + cf.cg(aSN, 2))
		}
	}

	function aSq(player) {
		for (var ml = ei.ml, mn = ei.mn, mm = ei.mm, mo = ei.mo, dE = mn[player]; dE <= mo[player]; dE++)
			for (var dF = ml[player]; dF <= mm[player]; dF++) {
				var rJ = gR.q9(dF, dE);
				gR.sn(rJ) && (gR.aDV(rJ) ? gR.a12(rJ, player) : gR.aDS(rJ, player))
			}
	}

	function aSp(z, jy, jz) {
		var jl = z[jy];
		z[jy] = z[jz], z[jz] = jl
	}

	function aSX() {
		return function() {
			var a4;
			for (a4 = 0; a4 < 8; a4++)
				if (ro = cf.cg(aSL * gi.random(), gi.value(100)), rp = cf.cg(aSM * gi.random(), gi.value(100)), aSv()) return 1;
			return
		}() || function() {
			var mp, mq, aN, a73, bw, a72;
			for (mp = cf.cg(aSL * gi.random(), gi.value(100)), mq = cf.cg(aSM * gi.random(), gi.value(100)), aN = 40; 1 <= aN; aN--)
				for (a73 = aSM - aN; 0 <= a73; a73 -= 40)
					for (rp = (a73 + mq) % aSM, bw = 40; 1 <= bw; bw--)
						for (a72 = aSL - bw; 0 <= a72; a72 -= 40)
							if (ro = (a72 + mp) % aSL, aSv()) return 1;
			return
		}()
	}

	function aSv() {
		for (var ec, aSx, gap = cf.cg(aSN - aSQ, 2), aGc = aSP + rp * aSN + gap, aGl = aSO + ro * aSN + gap, aSw = aGc + aSQ - 1; aGc <= aSw; aSw--)
			for (aSx = aGl + aSQ - 1; aGl <= aSx; aSx--)
				if (ec = gR.q9(aSx, aSw), !gR.pZ(ec) || gR.aDV(ec)) return;
		return 1
	}

	function aSY(a72, a73) {
		aST(), aSy(a72 - 2, a73 - 2)
	}

	function aST() {
		ei.kv[aSR] = 0, ei.jd[aSR] = ei.a2j[aSR] = 0, ei.rb[aSR] = [], ei.a0V[aSR] = [], ei.pT[aSR] = [], ei.a0W[aSR] = [], ei.ml[aSR] = ei.mn[aSR] = ei.mm[aSR] = ei.mo[aSR] = 0
	}

	function aSy(a72, a73) {
		var ec, a4, aSz, aT0;
		for (ei.kv[aSR] = 1, ei.ml[aSR] = a72 + 10, ei.mn[aSR] = a73 + 10, ei.mo[aSR] = ei.mm[aSR] = 0, aSz = a72; aSz < a72 + 4; aSz++)
			for (aT0 = a73; aT0 < a73 + 4; aT0++)(a72 < aSz && aSz < a72 + 3 || a73 < aT0 && aT0 < a73 + 3) && (ec = gR.q9(aSz, aT0), gR.pZ(ec)) && (ei.ml[aSR] = Math.min(aSz, ei.ml[aSR]), ei.mm[aSR] = Math.max(aSz, ei.mm[aSR]), ei.mn[aSR] = Math
				.min(aT0, ei.mn[aSR]), ei.mo[aSR] = Math.max(aT0, ei.mo[aSR]), aSS[ei.jd[aSR]] = ec, ei.jd[aSR]++, gR.aDS(ec, aSR));
		for (ei.a2j[aSR] = ei.jd[aSR], a4 = ei.jd[aSR] - 1; 0 <= a4; a4--) gR.aT1(aSS[a4], aSR) ? (gR.a12(aSS[a4], aSR), ei.a0V[aSR].push(aSS[a4])) : gR.aGe(aSS[a4]) ? (gR.a12(aSS[a4], aSR), ei.pT[aSR].push(aSS[a4])) : gR.aT2(aSS[a4]) && (gR.a12(aSS[
			a4], aSR), ei.a0W[aSR].push(aSS[a4]))
	}
	this.ck = function() {
		if (aSS = new Array(12), aSQ = 6, aSN = 10, aSL = cf.cg(cC.mO, aSN), aSM = cf.cg(cC.mP, aSN), aSO = cf.cg(cC.mO - aSN * aSL, 2), aSP = cf.cg(cC.mP - aSN * aSM, 2), eq.l3)
			for (var a4 = 0; a4 < eq.er; a4++) aSR = a4, aST(), ei.kv[aSR] = 1;
		(0 === eq.data.spawningType ? aSU : 1 === eq.data.spawningType ? (aSU(), function() {
			var xG = eq.xE;
			eq.a41 || xG++;
			if (!(xG < 3)) {
				for (var data = eq.data, tD = (eq.l3 ? eq.er : 0) + data.teamPlayerCount[0], mx = eq.aDw, aSZ = new Uint32Array(xG), aSa = new Uint32Array(xG), aSb = new Uint16Array(xG), aSc = new Uint16Array(xG), sG = hG.sG, ml = ei.ml,
						mn = ei.mn, mm = ei.mm, mo = ei.mo, aQL = h2.aQL, aQM = h2.aQM, a4 = tD; a4 < mx; a4++) aQL[a4] = ml[a4] + mm[a4] >> 1, aQM[a4] = mn[a4] + mo[a4] >> 1;
				for (a4 = tD; a4 < mx; a4++) {
					var id = sG[a4];
					aSZ[id] += aQL[a4], aSa[id] += aQM[a4]
				}
				var qZ = hG.qZ;
				for (a4 = 1; a4 < xG; a4++) {
					var aI = Math.max(data.teamPlayerCount[qZ[a4]], 1);
					aSb[a4] = cf.cg(aSZ[a4], aI), aSc[a4] = cf.cg(aSa[a4], aI)
				}
				var wl = hG.wl,
					wm = hG.wm,
					wn = hG.wn,
					qd = h2.qd;
				for (a4 = 0; a4 < 512; a4++) qd[a4] = a4;
				for (var t6 = 0; t6 < 2 + (4 <= xG); t6++)
					for (a4 = tD; a4 < mx; a4++) {
						for (var a4U = a4, aL = qd[a4U], aSd = 1, v7 = cf.a4M(aQL[aL] - aSb[1], aQM[aL] - aSc[1]), aN = 2; aN < xG; aN++) {
							var aSe = cf.a4M(aQL[aL] - aSb[aN], aQM[aL] - aSc[aN]);
							aSe < v7 && (v7 = aSe, aSd = aN)
						}
						var aSf = sG[a4U];
						if (aSd !== aSf) {
							if (2 === t6 && 4 <= xG) {
								var aSg = Math.max((aSd + 1) % xG, 1),
									aSh = cf.a4M(aQL[aL] - aSb[aSg], aQM[aL] - aSc[aSg]);
								for (aN = 1; aN < xG; aN++) aSe = cf.a4M(aQL[aL] - aSb[aN], aQM[aL] - aSc[aN]), v7 < aSe && aSe < aSh && (aSh = aSe, aSg = aN);
								aSg !== aSf && cf.a4M(aSb[aSf] - aSb[aSg], aSc[aSf] - aSc[aSg]) < cf.a4M(aSb[aSf] - aSb[aSd], aSc[aSf] - aSc[aSd]) && (aSd = aSg)
							}
							var aSi = qZ[aSd],
								aSj = wm[aSi] + (eq.l3 ? 0 : wn[aSi]),
								a4V = wl[aSj],
								aM = qd[a4V],
								aSk = wm[aSi + 1];
							v7 = cf.a4M(aQL[aM] - aSb[aSf], aQM[aM] - aSc[aSf]);
							for (var af = aSj + 1; af < aSk; af++) {
								var aSl = wl[af],
									aSm = qd[aSl];
								(aSe = cf.a4M(aQL[aSm] - aSb[aSf], aQM[aSm] - aSc[aSf])) < v7 && (v7 = aSe, a4V = aSl)
							}
							a4V < tD || mx <= a4V || (aM = qd[a4V], aSZ[aSf] += aQL[aM] - aQL[aL], aSa[aSf] += aQM[aM] - aQM[aL], aSZ[aSd] += aQL[aL] - aQL[aM], aSa[aSd] += aQM[aL] - aQM[aM], aI = data.teamPlayerCount[qZ[aSf]], aSb[aSf] =
								cf.cg(aSZ[aSf], aI), aSc[aSf] = cf.cg(aSa[aSf], aI), aI = data.teamPlayerCount[aSi], aSb[aSd] = cf.cg(aSZ[aSd], aI), aSc[aSd] = cf.cg(aSa[aSd], aI), qd[a4U] = aM, qd[a4V] = aL)
						}
					}! function() {
						for (var qd = h2.qd, ml = ei.ml, mn = ei.mn, mm = ei.mm, mo = ei.mo, jd = ei.jd, a2j = ei.a2j, a0V = ei.a0V, pT = ei.pT, a0W = ei.a0W, a4 = 0; a4 < 512; a4++) {
							var aSo = qd[a4];
							if (aSo !== a4) {
								aSp(ml, a4, aSo), aSp(mn, a4, aSo), aSp(mm, a4, aSo), aSp(mo, a4, aSo), aSp(jd, a4, aSo), aSp(a2j, a4, aSo), aSp(a0V, a4, aSo), aSp(pT, a4, aSo), aSp(a0W, a4, aSo), aSq(a4), aSq(aSo), qd[a4] = a4;
								for (var cw = aSo, lE = qd[cw]; lE !== a4;) lE = qd[cw = lE];
								qd[cw] = aSo
							}
						}
					}()
			}
		}) : function() {
			var x6 = eq.x6;
			for (aSR = x6; aSR < eq.fE; aSR++) aST();
			for (aSR = eq.l3 ? eq.er : 0; aSR < x6; aSR++)
				if (! function() {
						var spawningData = eq.data.spawningData,
							a72 = spawningData[2 * aSR] + 1,
							spawningData = spawningData[2 * aSR + 1] + 1;
						if (3 < a72 && a72 < cC.mO - 5 && 3 < spawningData && spawningData < cC.mP - 5 && gR.pZ(gR.q9(a72, spawningData)) && function(a72, a73) {
								var ec, aSx, aSw;
								for (aSw = a73; a73 - 6 < aSw; aSw--)
									for (aSx = a72; a72 - 6 < aSx; aSx--)
										if (ec = gR.q9(aSx, aSw), gR.aDV(ec)) return;
								return 1
							}(a72 + 3, spawningData + 3)) return aSY(a72 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!aSX()) {
						for (var bw = eq.aDw = aSR; bw < x6; bw++) aSR = bw, aST();
						return
					}
					var a72 = aSO + ro * aSN + cf.cg(aSN, 2),
						a73 = aSP + rp * aSN + cf.cg(aSN, 2);
					aSY(a72, a73)
				}
		})(), hE.jk[7] = ei.jd[eq.jj]
	}, this.aT3 = function(oj, aT4, aT5) {
		var a4, a72, a73, ec, ro, rp;
		for (aSR = oj, a4 = 0; a4 < 20; a4++)
			for (a72 = aT4 + a4; aT4 - a4 <= a72; a72--)
				for (a73 = aT5 + a4; aT5 - a4 <= a73; a73--)
					if ((a72 === aT4 + a4 || a72 === aT4 - a4 || a73 === aT5 + a4 || a73 === aT5 - a4) && 3 < a72 && a72 < cC.mO - 5 && 3 < a73 && a73 < cC.mP - 5 && gR.pZ(gR.q9(a72, a73)) && function(a72, a73) {
							var ec, aSx, aSw;
							for (aSw = a73; a73 - 6 < aSw; aSw--)
								for (aSx = a72; a72 - 6 < aSx; aSx--)
									if (ec = gR.q9(aSx, aSw), gR.aDV(ec) && !gR.so(aSR, ec)) return;
							return 1
						}(a72 + 3, a73 + 3)) {
						if (0 < ei.jd[aSR]) {
							for (rp = ro = ec = void 0, ro = ei.mm[aSR]; ro >= ei.ml[aSR]; ro--)
								for (rp = ei.mo[aSR]; rp >= ei.mn[aSR]; rp--) ec = 4 * (rp * cC.mO + ro), gR.a36(aSR, ec) && (gR.a37(ec), ei.jd[aSR]--);
							aST()
						}
						return aSy(a72 - 1, a73 - 1), !0
					} return !1
	}, this.aT8 = function(oj) {
		aSR = oj, aSX() ? aSY(aSO + ro * aSN + cf.cg(aSN, 2), aSP + rp * aSN + cf.cg(aSN, 2)) : aST()
	}
}

function aMc() {
	this.aT9 = 32, this.dF = 0, this.dE = 0, this.zI = 0, this.aTA = 0, this.aTB = 4, this.zH = null, this.aRc = new Int16Array(9), this.ck = function() {
		this.zI = 1 + cf.cg(cC.mO - 1, this.aT9), this.aTA = 1 + cf.cg(cC.mP - 1, this.aT9), this.zH = new Array(this.zI * this.aTA), aZ.cb.aTC(this.zH);
		var dF, dE, aRc = this.aRc,
			cv = this.zI;
		for (dF = -1; dF <= 1; dF++)
			for (dE = -1; dE <= 1; dE++) aRc[3 * (1 + dE) + 1 + dF] = dE * cv + dF
	}, this.o9 = function(aTE, a4) {
		return this.zH[a4].push(aTE), this.zH[a4].length - 1
	}, this.aRU = function(aTF, aRC, aRK) {
		var aTG, aTH, aRC = h0.zG(aRC),
			aRK = h0.zG(aRK);
		return aRC === aRK ? aTF : (aTG = this.zH[aRC].pop(), this.zH[aRC].length === aTF ? this.o9(aTG, aRK) : (aTH = this.zH[aRC][aTF], this.zH[aRC][aTF] = aTG, h1.bW.aN9[aTG] = aTF, this.o9(aTH, aRK)))
	}
}

function aLG() {
	var aTI = [],
		a7Y = [],
		aTJ = [];

	function aTL(ka) {
		for (var kG = ka.kG, aTK = [];;) {
			var af = function aTN(kG, position) {
				position = kG.indexOf("@", position);
				if (position < 0) return -1;
				var ax = kG.substring(position + 1, position + 6);
				if (5 !== ax.length) return aTN(kG, position + 1);
				if (aZ.bu.startsWith(ax, "room")) return aTN(kG, position + 1);
				var aTU = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aTU.test(ax)) return aTN(kG, position + 1);
				aTU = kG.substring(position + 6, position + 7);
				if (1 !== aTU.length) return position;
				ax = new RegExp("^[ :!.]+$");
				if (!ax.test(aTU)) return aTN(kG, position + 1);
				return position
			}(kG, 0);
			if (-1 === af) {
				aTK.push(aTO(kG, ka));
				break
			}
			0 === af ? aTK.push(aTP(kG.substring(1, 6), ka, af)) : (aTK.push(aTO(kG.substring(0, af), ka)), aTK.push(aTP(kG.substring(af + 1, af + 6), ka, af))), kG = kG.substring(af + 6)
		}
		return aTK
	}

	function aTP(ax, ka, af) {
		var aPR = function(ax) {
				var bs = gw.kF.yj(ax, 5),
					aPR = bQ.cP.kY(bs);
				if (aPR) {
					for (aTI.push(aPR); 75 < aTI.length;) aTI.shift();
					return aPR
				}
				for (var aGN = bQ.cP.aGN, a4 = aGN.length - 1; 0 <= a4; a4--)
					if (aPR = aGN[a4], bs === aPR.bs) return aTI.push(aPR), aPR;
				for (a4 = aTI.length - 1; 0 <= a4; a4--)
					if (aPR = aTI[a4], bs === aPR.bs) return aTI.push(aPR), aPR;
				return bQ.cP.aPS(bs, ax, 1, 999999, 999999, 0, 0, 0, 0)
			}(ax),
			ax = (0 === af && 0 === ka.kD.id && ka.kO && (ka.fontSize = bQ.cY.kV(aPR.kU, aPR.kW), ka.kN = bQ.cY.kX(aPR.kW)), document.createElement("span"));
		return ax.textContent = function(aPR, ka, af) {
			if (aPR.aTS) return aPR.aTS--, af = 2 === ka.kD.id || (3 === ka.kD.id || 4 === ka.kD.id) && 0 !== af, aPR.username + (af ? " (" + aPR.aPW + ")" : "");
			if (ka.kD.ko) return "Redacted " + gv.kF.jW(aPR.bs, 2);
			return aPR.username
		}(aPR, ka, af), ax.style.display = "inline-block", ax.style.color = bQ.cY.kT(aPR.kU), ax.style.cursor = "pointer", ax.style.margin = "0", ax.style.font = "inherit", ax.style.minWidth = ax.style.minHeight = "1em", bQ.cY.kZ(aPR) && (ax
			.style.textDecoration = "underline"), aPR.pu && (ax.style.textDecorationLine = "underline", ax.style.textDecorationStyle = "dotted"), bQ.cY.kX(aPR.kW) && (ax.style.fontWeight = "bold"), ax.onclick = function(bd) {
			bQ.bR.bS(bd, aPR)
		}, d1.d2() || (ax.onmouseover = function(bd) {
			bQ.ci.a55(bd, aPR)
		}), a7Y.push(ax), ax
	}

	function aTO(kG, ka) {
		var r = document.createElement("span");
		return r.textContent = kG, r.style.color = ka.kP, r.style.margin = "0", r.style.font = "inherit", r
	}

	function aTX(aPR, aPV, bs) {
		bs !== aPR.bs || aPR.aPW || (aPR.aPW = aPR.username, aPR.username = aPV)
	}
	this.bi = function() {
		for (var a4 = 0; a4 < a7Y.length; a4++) a7Y[a4].onclick = a7Y[a4].onmouseover = null;
		aTJ = a7Y = null
	}, this.transform = function(ka) {
		for (var ap = document.createElement("div"), aTK = aTL(ka), a4 = 0; a4 < aTK.length; a4++) ap.appendChild(aTK[a4]);
		0 === ka.kD.id && (ap.vx143 = ka.kD, aTJ.push(ap)), ap.style.margin = "0.6em 0.6em", ka.kO && (ap.style.marginLeft = ap.style.marginRight = "inherit"), ap.style.font = "inherit";
		var aTM = 0 < ka.kD.id;
		return ka.kN && (ap.style.fontWeight = "bold"), aTM && (ap.style.paddingLeft = "0.7em"), aTM && (ap.style.fontStyle = "italic"), ap.style.fontSize = ka.fontSize.toFixed(2) + "em", ap
	}, this.aFF = function(aFD) {
		if (aFD && (2 === aFD.id && 1 === aFD.kI || 3 === aFD.id && 2 === aFD.kI)) {
			var bs = 3 === aFD.id ? aFD.target : aFD.bs;
			if (!bQ.cP.kY(bs)) {
				for (var aPV = "Redacted " + gv.kF.jW(bs, 2), aGN = bQ.cP.aGN, a4 = aGN.length - 1; 0 <= a4; a4--) aTX(aGN[a4], aPV, bs);
				for (a4 = aTI.length - 1; 0 <= a4; a4--) aTX(aTI[a4], aPV, bs)
			}
		}
	}, this.aPX = function(bs) {
		for (var aTY = aTJ, a4 = aTY.length - 1; 0 <= a4; a4--) {
			var dh = aTY[a4];
			if (dh.vx143.bs === bs) {
				for (; dh.firstChild;) aT.removeChild(dh, dh.firstChild);
				for (var aTK = aTL(bQ.cY.kM(dh.vx143, bQ.cY.kC(dh.vx143))), aN = 0; aN < aTK.length; aN++) dh.appendChild(aTK[aN]);
				aTY.splice(a4, 1)
			}
		}
	}, this.kj = function(bs) {
		for (var aTY = aTJ, a4 = aTY.length - 1; 0 <= a4; a4--) {
			var dh = aTY[a4];
			if (dh.vx143.bs === bs) {
				for (; dh.firstChild;) aT.removeChild(dh, dh.firstChild);
				dh.vx143.kG = "[Redacted Message]";
				for (var aTK = aTL(bQ.cY.kM(dh.vx143, bQ.cY.kC(dh.vx143))), aN = 0; aN < aTK.length; aN++) dh.appendChild(aTK[aN]);
				aTY.splice(a4, 1)
			}
		}
	}
}

function iN() {
	var cw, canvas, lI, aTZ, aTa, aTb, aTc, lN, aTd, aTe, aTf, aTg, aA3 = !1,
		a46 = (this.lJ = !1, this.cv = 0, new Array(2)),
		aTh = 0;

	function by() {
		var cv = gh.cv,
			rQ = (lN = !1, qN(lI, cv, cw), Math.floor(cv / 2));
		1 === aTZ ? (lI.fillStyle = t.rK, lI.fillRect(rQ, 0, rQ, cw)) : -1 === aTZ && (lI.fillStyle = t.aFh, lI.fillRect(0, 0, rQ, cw)), qP(lI, cv, cw, 2);
		var rQ = (rQ = Math.floor(.25 * cw)) < 2 ? 2 : rQ,
			aA9 = (lI.fillStyle = t.aTj, Math.floor((cw - 4) * aTa[1] / aTb[1]));
		0 < aA9 && lI.fillRect(2, cw - 2 - aA9, rQ, aA9), 0 < (aA9 = Math.floor((cw - 4) * aTa[0] / aTb[0])) && lI.fillRect(cv - 2 - rQ, cw - 2 - aA9, rQ, aA9);
		rQ = (rQ = Math.floor(cw / 8)) < 2 ? 2 : rQ, qR(lI, Math.floor(.4 * cw), 0, cw, rQ, .5, !1), qR(lI, Math.floor(cv - 1.4 * cw), 0, cw, rQ, .5, !0), aA9 = 1.1 * cw / a46[0].width;
		lI.imageSmoothingEnabled = !0, lI.setTransform(aA9, 0, 0, aA9, (cv - aA9 * a46[0].width) / 2, -.05 * cw), lI.drawImage(a46[+aA3], 0, 0), lI.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aTn() {
		aTg = -1, aA3 = gV.aCW(), gG.a9g(257), gG.aA2(aA3), gh.lJ = !0, lN = !0, aTd = 360;
		for (var a9, jl = 0, a4 = ed.ee - 1; 0 <= a4; a4--) aZ.d.el(ed.eg[a4]) || (jl += ei.jd[ed.eg[a4]]);
		aA3 ? aTb[0] = Math.max(cf.cg(3 * jl, 4), 1) : eq.p6 ? 9 === eq.l1 && 8 === hG.qZ[hH.sF()] ? aTb[0] = Math.max(jl, 1) : (a9 = cf.cg(100 * hH.rY(), eq.rA), a9 = cf.fH(200 - 2 * a9, 40, 100), a9 = cf.cg(a9 * jl, 100), aTb[0] = Math.max(a9,
			1)) : 8 === eq.l1 ? aTb[0] = Math.max(cf.cg(3 * jl, 4), 1) : aTb[0] = Math.max(cf.cg(3 * jl, 5), 1), aTb[1] = Math.max(jl - aTb[0], 1)
	}

	function lj() {
		aTf = eW.et(), lN = !0, aTd = aTZ = 0, aTc = [], gh.lJ = !1, gG.a7G(247), aTa[0] = aTa[1] = 0, gG.a9g(673)
	}

	function qK() {
		return gJ.lg(gG.a9X()) ? __fx.settings.keybindButtons ? gJ.dE - 2 * (cw + ac.gap) : gJ.dE - cw - ac.gap : gs.lg(gG.a9Z()) ? gs.qK() - cw - ac.gap : eR.cw - cw - hJ.lW() * ac.gap
	}
	this.jB = function() {
		for (var a4 = 0; a4 < 2; a4++) a46[a4] = aZ.canvas.a01(gQ.get(3), 8 - a4, t.aTi), a46[a4] = aZ.canvas.aN1(a46[a4])
	}, this.ck = function() {
		aTf = -1e4, aTe = aTh = 0, aTg = -1, this.lJ = !1, lN = aA3 = !1, aTa = [aTZ = aTd = 0, 0], aTb = [1, 1], aTc = [], this.resize()
	}, this.resize = function() {
		cw = gJ.cw, this.cv = 4 * cw, (canvas = document.createElement("canvas")).width = this.cv, canvas.height = cw, lI = canvas.getContext("2d", {
			alpha: !0
		}), by()
	}, this.l0 = function() {
		lN && by()
	}, this.lp = function(dF, dE) {
		return !!this.lJ && !(dF < eR.cv - this.cv - ac.gap || dE < qK() || (eq.lQ || this.aJC(eq.jj) && (gF.lf && gF.tR(), gq.b.aJA(dF > eR.cv - ac.gap - this.cv / 2 ? 1 : 0)), 0))
	}, this.w = function() {
		0 < aTe ? 0 === --aTe && lj() : this.lJ ? 180 == --aTd && 3 * aTa[0] < aTb[0] ? lj() : aTa[0] >= aTb[0] ? aA3 ? h5.eC.aTq() : h5.eC.l2() : aTa[1] >= aTb[1] ? aTe = 4 : aTd <= 0 && lj() : ! function() {
			var ej = eW.et();
			if (ej % 40 == 14) {
				if (aTh) return !(ej < aTh) && !(ej < aTf + 535) && (aTh = ej + 1071, aZ.d.aTp()) ? (aTn(), 1) : 0;
				(1 === ed.ee || (eq.p6 ? hH.rY() : ei.jd[je[0]]) >= cf.cg(96 * eq.rA, 100)) && (aTh = ej + 535)
			}
			return
		}() && 0 <= aTg && (gG.an(250, L(493, [ei.sA[aTg]]), 673, aTg, t.u, t.qO, -1, !0), aTn())
	}, this.aTr = function() {
		this.lJ && aTa[0] < aTb[0] && lj()
	}, this.aJD = function(player, aTs) {
		var aTt = L(aTs ? 494 : 495, [ei.sA[player]]),
			aTt = (gG.an(450, aTt, 257, player, aTs ? t.xa : t.sa, t.qO, -1, !0), aTc.push(player), lN = !0, eq.l6 ? Math.max(aTb[0], aTb[1]) : ei.jd[player]),
			aTt = Math.max(aTt, 1);
		aTs ? aTa[0] += aTt : aTa[1] += aTt, player === eq.jj && (aTZ = aTs ? 1 : -1)
	}, this.eZ = function() {
		var dE;
		this.lJ && (dE = qK(), m0.drawImage(canvas, eR.cv - this.cv - ac.gap, dE))
	}, this.tT = function(player) {
		return 0 === aTd && !!aZ.d.kz(1) && !!aZ.d.rc(player) && !(10 <= sE[player] && !aZ.d.aTu(player, 9) || !eq.l6 && ((player = eW.et()) < aTf + 100 || player < 1607 || 9 === eq.l1 && !hH.aCj()))
	}, this.aJC = function(ec) {
		if (!aZ.d.kz(1)) return !1;
		if (!aZ.d.rc(ec)) return !1;
		if (!this.lJ) return !1;
		for (var a4 = aTc.length - 1; 0 <= a4; a4--)
			if (aTc[a4] === ec) return !1;
		return !0
	}, this.tV = function(player) {
		aTg = player
	}
}

function iG() {
	this.bW = new yD, this.qj = new aTw, this.yA = new aTx, this.bn = new a4s, this.n9 = new oE, this.g5 = new aAJ, this.aTy = new a1q, this.aLL = new aCz, this.e9 = new a38, this.a3E = new aF4, this.a3G = new aCI, this.a3J = new aIn, this.a3N =
		new aMJ, this.ck = function() {
			this.bW.ck()
		}
}

function aTz() {
	this.resize = function() {
		var a4, aHb = document.head.querySelector("style#ss");
		if (aHb)
			for (a4 = aHb.sheet.cssRules.length - 1; 0 <= a4; a4--) aHb.sheet.deleteRule(0);
		else(aHb = document.createElement("style")).id = "ss", document.head.appendChild(aHb);
		var a14 = "::-webkit-scrollbar",
			aU0 = aZ.aa.ab(ac.rw),
			nI = aZ.aa.ab(Math.max(aZ.aa.nK(.012), 8));
		try {
			aHb.sheet.insertRule(a14 + "{width:" + nI + ";height:" + nI + ";}", aHb.sheet.cssRules.length), aHb.sheet.insertRule(a14 + "-thumb{background-color:white;}", aHb.sheet.cssRules.length), aHb.sheet.insertRule(a14 +
				"-track{background:" + t.da + ";}", aHb.sheet.cssRules.length), aHb.sheet.insertRule(a14 + "-track:horizontal{border-top:" + aU0 + " solid white;}", aHb.sheet.cssRules.length), aHb.sheet.insertRule(a14 +
				"-track:vertical{border-left:" + aU0 + " solid white;}", aHb.sheet.cssRules.length), aHb.sheet.insertRule(a14 + "-button{display:none;}", aHb.sheet.cssRules.length)
		} catch (bd) {
			for (console.log("error 3425: " + bd), a4 = aHb.sheet.cssRules.length - 1; 0 <= a4; a4--) aHb.sheet.deleteRule(0)
		}
	}
}

function aMg() {
	this.a4g = function(player, aGz) {
		return -1 !== aGz && !!h1.cY.aKm(player, aGz) && this.aJ3(player, aGz, 0)
	}, this.aJ3 = function(player, aGz, aU1) {
		player = function(player, aGz, aU1) {
			var aM8 = h1.cY.aM9(player, aGz);
			if (-1 === aM8) return -1;
			aM8 = h1.cY.a4h(aM8, aGz);
			if (-1 === aM8) return -1;
			var aKi = h1.aH0.aGx(aM8, aGz);
			if (0 <= aKi) return aKi;
			if (h1.aH0.aGw()) return -1;
			if (0 <= (aKi = h1.aH0.aGx(aGz, aM8))) return h1.aH0.aH8(h1.aH0.aH1(h1.aH0.get(aKi)));
			if (aM8 === aGz) return h1.aH0.aH8(new Uint32Array([aM8, aGz]));
			if (0 <= (aKi = h1.aMh.aJ3(aM8, aGz))) return aKi;
			return aU1 ? function(aU4, player) {
				var aQN = h2.aQN,
					cy = (aQN.fill(0), [aU4]),
					yk = (aQN[aU4] = 1, h0.yk),
					aU5 = -1,
					a5 = cy.length;
				for (; - 1 === aU5 && a5;) {
					for (var z = [], a4 = 0; a4 < a5; a4++)
						for (var mV = cy[a4], lL = aQN[mV], dh = 0; dh < 8; dh++) {
							var xh, xf, aOs = mV + yk[dh],
								rJ = 4 * aOs;
							gR.yn(rJ) ? (xh = aQN[aOs], xf = lL + 5 + ((1 & dh) << 1), 0 === xh ? (z.push(aOs), aQN[aOs] = xf) : aQN[aOs] = Math.min(xf, xh)) : -1 === aU5 && dh % 2 == 0 && gR.a36(player, rJ) && (aU5 = mV)
						}
					a5 = (cy = z).length
				}
				return -1 !== aU5 ? function(yx, aU7) {
					var yk = h0.yk,
						aU8 = -1,
						sS = 0,
						jk = [];
					for (; aU7 !== yx;)(sS = function(mV, sS) {
						var aQN = h2.aQN,
							yk = h0.yk,
							lL = aQN[mV];
						if (lL - aQN[mV + yk[sS]] != 5 + ((1 & sS) << 1))
							for (var aN = 0; aN < 8; aN++) {
								var dh = aN + sS + 6 & 7;
								if (lL - aQN[mV + yk[dh]] == 5 + ((1 & dh) << 1)) return dh
							}
						return sS
					}(aU7, sS)) !== aU8 && (jk.push(aU7), aU8 = sS), aU7 += yk[sS];
					jk.push(yx);
					var aKi = h1.aH0.aGx(jk[0], yx);
					if (0 <= aKi) return aKi;
					return h1.aH0.aH8(new Uint32Array(jk))
				}(aU4, aU5) : -1
			}(aGz, player) : -1
		}(player, aGz, aU1);
		return -1 !== player && (h2.z[0] = h1.aH0.get(player), !0)
	}
}

function aLp() {
	var jq, aUA, aUB, aUC, aUD, aUE, colors = [0, 0, 0],
		aUF = -1;

	function aUJ(a4) {
		var aUK = aUA.dE + a4 * (ac.gap + aUE);
		m0.fillStyle = "rgb(" + (0 === a4 ? 150 : 2 === a4 ? 30 : 0) + "," + (1 === a4 ? 130 : 2 === a4 ? 30 : 0) + "," + (2 === a4 ? 220 : 0) + ")", m0.fillRect(aUC, aUK, colors[a4] * aUD, aUE), m0.strokeStyle = t.u, m0.strokeRect(aUC, aUK, aUD,
			aUE), m0.fillStyle = t.u, m0.font = aZ.aa.lT(0, .32 * aUE), aZ.aa.textBaseline(m0, 1), aZ.aa.textAlign(m0, 0), m0.fillText(L(0 === a4 ? 498 : 1 === a4 ? 499 : 500) + aUG(a4), aUC + ac.gap, aUK + .53 * aUE)
	}

	function aUG(a4, aUL) {
		return aUL = aUL || 256, cf.fH(Math.floor(aUL * colors[a4]), 0, aUL - 1)
	}

	function lk(ll, lm) {
		return !(ll < aUC || lm < aUA.dE || ll > aUA.dF + aUA.cv || lm > aUA.dE + aUA.cw)
	}
	this.show = function() {
		var a9 = bp.cy.data[121].value;
		colors[0] = (a9 >> 12) / 63, colors[1] = (a9 >> 6 & 63) / 63, colors[2] = (63 & a9) / 63, jq.show(), this.resize()
	}, this.aY = function() {
		bp.bq.br(121, (aUG(0, 64) << 12) + (aUG(1, 64) << 6) + aUG(2, 64)), jq.aY()
	}, this.resize = function() {
		jq.resize(), aUA.resize();
		var af = eR.rt,
			a5J = jq.a5G(),
			aUH = (aUA.dE = Math.max(aUA.dE, af * a5J.vU + ac.gap), af * a5J.a5I - 2 * ac.gap);
		aUA.cw = Math.min(aUA.cw, aUH), aUA.cv = 2 * aUA.cw, aUA.dE = af * a5J.vU + .5 * (af * a5J.a5I - aUA.cw), aUA.dF = .5 * (eR.cv - aUA.cv), aUB = .25 * aUA.cv, aUC = aUA.dF + aUB + ac.gap, aUD = aUA.cv - aUB - ac.gap, aUE = (aUA.cw - 2 * ac
			.gap) / 3
	}, this.eZ = function() {
		var t6, rh, bw;
		jq.eZ(), m0.lineWidth = ac.a0G, t6 = aUG(0), rh = aUG(1), bw = aUG(2), m0.fillStyle = "rgb(" + t6 + "," + rh + "," + bw + ")", m0.fillRect(aUA.dF, aUA.dE, aUB, aUA.cw), m0.strokeStyle = t.u, m0.strokeRect(aUA.dF, aUA.dE, aUB, aUA.cw), m0
			.fillStyle = t6 + rh + bw < 306 && rh < 150 ? t.u : t.wc, aZ.aa.textBaseline(m0, 1), aZ.aa.textAlign(m0, 1), m0.font = aZ.aa.lT(0, .1 * aUA.cw), m0.rotate(-Math.PI / 2), m0.fillText(L(497), -aUA.dE - .5 * aUA.cw, aUA.dF + .5 * aUB),
			m0.setTransform(1, 0, 0, 1, 0, 0), aUJ(0), aUJ(1), aUJ(2)
	}, this.lp = function(ll, lm) {
		lk(ll, lm) && (aUF = cf.fH(Math.floor((lm - aUA.dE) / (aUE + .75 * ac.gap)), 0, 2), colors[aUF] = cf.fH((ll - aUC) / aUD, 0, 1), eW.eX = !0)
	}, this.ly = function(ll) {
		-1 !== aUF && (colors[aUF] = cf.fH((ll - aUC) / aUD, 0, 1), eW.eX = !0)
	}, this.lx = function(ll, lm, deltaY) {
		lk(ll, lm) && (ll = cf.fH(Math.floor((lm - aUA.dE) / (aUE + .75 * ac.gap)), 0, 2), colors[ll] = cf.fH(colors[ll] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), eW.eX = !0)
	}, this.a2V = function() {
		0 <= aUF && (aUF = -1, eW.eX = !0)
	}, this.ae = function(af) {
		2 === af && jq.ag[0].ah()
	}, jq = new aR(L(496), [new aS("⬅️ " + L(1), function() {
		aT.bW.tM()
	})], !1), aUA = new a19([.5, .25], [.5, .5], 1)
}

function hn() {
	var aUM, aUN, aAv, aSM, aAo, aUO = 0,
		aUP = 0;

	function aUR(a4) {
		var aUS = !0,
			wt = t.u,
			cv = (1 === aUM[a4].id ? aUM[a4].lI.fillStyle = t.aUT : aUM[a4].oj === eq.fE ? aUM[a4].lI.fillStyle = t.aUU : (gR.aIS(aUM[a4].oj), aUM[a4].lI.fillStyle = aZ.color.nE(h2.aIT[0], h2.aIT[1], h2.aIT[2], .87), 400 < aZ.cb.zg(h2.aIT, 0, 2) && (
				aUS = !1, wt = t.wc)), aUM[a4].canvas.width),
			pM = (aUM[a4].lI.clearRect(0, 0, cv, aSM), aUM[a4].lI.fillRect(0, 0, cv, aSM), aUM[a4].lI.fillStyle = wt, ! function(lI, cv, aSM) {
				lI.fillRect(0, 0, cv, 1), lI.fillRect(0, aSM - 1, cv, 1), lI.fillRect(0, 0, 1, aSM), lI.fillRect(cv - 1, 0, 1, aSM)
			}(aUM[a4].lI, cv, aSM), aUN + 2 * aSM < cv && (aUM[a4].lI.fillRect(cv - aUN - aSM, 0, 1, aSM), aUM[a4].lI.fillText(ei.sA[aUM[a4].oj], Math.floor((cv - aUN) / 2), Math.floor(.57 * aSM))), 0 !== aUM[a4].id ? 0 : aSM);
		aUM[a4].lI.fillText(aZ.bu.jW(aUM[a4].np), Math.floor(cv - aUN / 2 - pM), Math.floor(.57 * aSM)),
			function(a4, cv, pM, aUS) {
				aUM[a4].lI.fillStyle = aUS ? t.aFi : t.vO;
				aUS = Math.floor(aUN * aUM[a4].np / aUM[a4].aUZ);
				aUM[a4].lI.fillRect(Math.floor(cv - aUN - pM), aSM - aAo, aUS, aAo)
			}(a4, cv, pM, aUS), 0 === aUM[a4].id ? (aUX(a4, cv, aUS, wt), function(a4, cv, aUS) {
				aUM[a4].lI.strokeStyle = aUS ? t.xa : t.aUc, aUM[a4].lI.fillRect(aSM, 0, 1, aSM);
				aUS = cv - aSM;
				aUM[a4].lI.beginPath(), aUM[a4].lI.moveTo(Math.floor(.3 * aSM + aUS), Math.floor(aSM / 2)), aUM[a4].lI.lineTo(Math.floor(aSM - .3 * aSM + 0 + aUS), Math.floor(aSM / 2)), aUM[a4].lI.stroke(), aUM[a4].lI.beginPath(), aUM[a4].lI
					.moveTo(Math.floor(aSM / 2 + aUS), Math.floor(.3 * aSM)), aUM[a4].lI.lineTo(Math.floor(aSM / 2 + aUS), Math.floor(aSM - .3 * aSM + 0)), aUM[a4].lI.stroke()
			}(a4, cv, aUS)) : aUX(a4, 2 * aSM, aUS, wt)
	}

	function aUX(a4, cv, aUS, wt) {
		aUM[a4].lI.strokeStyle = aUM[a4].aUa ? t.aLV : aUS ? t.aIm : t.aUb, aUM[a4].lI.fillStyle = wt, aUM[a4].lI.fillRect(cv - aSM, 0, 1, aSM), aUM[a4].lI.lineWidth = Math.max(Math.floor(aSM / 12), 3), aUM[a4].lI.lineCap = "round";
		aUS = .35;
		cv = aSM + 1, aUM[a4].lI.beginPath(), aUM[a4].lI.moveTo(Math.floor(cv - aUS * aSM + 0), Math.floor(aUS * aSM)), aUM[a4].lI.lineTo(Math.floor(cv - aSM + aUS * aSM), Math.floor(aSM - aUS * aSM + 0)), aUM[a4].lI.stroke(), aUM[a4].lI.beginPath(),
			aUM[a4].lI.moveTo(Math.floor(cv - aSM + aUS * aSM), Math.floor(aUS * aSM)), aUM[a4].lI.lineTo(Math.floor(cv - aUS * aSM + 0), Math.floor(aSM - aUS * aSM + 0)), aUM[a4].lI.stroke()
	}

	function aUn(z, aOh) {
		for (var np, a4 = aOh - 1; 0 <= a4; a4--) np = gS.a8P(eq.jj, a4), z[a4].np !== np && (z[a4].np = np, z[a4].aUZ = Math.max(np, z[a4].aUZ), z[a4].lN = !0)
	}

	function aUq(z, aOi) {
		for (var jy = eq.jj << 3, se = h1.bW.se, sM = h1.bW.sM, aN4 = h1.bW.aN4, a4 = aOi - 1; 0 <= a4; a4--) {
			var aOv = aN4[jy + a4],
				np = se[aOv];
			z[a4].np !== np ? (z[a4].np = np, z[a4].aUZ = Math.max(np, z[a4].aUZ), z[a4].lN = !0) : z[a4].aUa || sM[aOv] % 64 != 5 || (z[a4].aUa = !0, z[a4].lN = !0)
		}
	}

	function aUQ(ao) {
		ao.canvas = document.createElement("canvas"), cC.te.font = aAv;
		var cv = aUN;
		ao.oj < eq.fE && 0 === ao.id && (cv += Math.floor(cC.te.measureText(ei.sA[ao.oj] + "000").width)), cv += aSM, 0 === ao.id && (cv += aSM), ao.canvas.width = cv, ao.canvas.height = aSM, ao.lI = ao.canvas.getContext("2d", {
			alpha: !0
		}), ao.lI.font = aAv, aZ.aa.textBaseline(ao.lI, 1), aZ.aa.textAlign(ao.lI, 1)
	}

	function aUi(a4) {
		return gM.rI() ? eR.cv - aUM[a4].canvas.width - ac.gap : gM.dF
	}

	function aUj(a4) {
		return Math.floor(2 * ac.gap + (gM.rI() ? at.cw + ac.gap : 0) + gM.cw + a4 * (1.3 * aSM))
	}
	this.ck = function() {
		aUO = aUP = 0, aUM = [], this.resize()
	}, this.resize = function() {
		aAv = gG.lM, aSM = gG.fontSize + 5, aSM = Math.floor(1.25 * aSM), d0.jF.lR() && (aSM = Math.floor(1.25 * aSM)), aAo = Math.floor(.15 * aSM), cC.te.font = aAv, aUN = Math.floor(cC.te.measureText("02 000 000 0000").width);
		for (var a4 = aUM.length - 1; 0 <= a4; a4--) aUQ(aUM[a4]), aUR(a4)
	}, this.l0 = function() {
		for (var a4 = aUM.length - 1; 0 <= a4; a4--) aUM[a4].lN && (aUM[a4].lN = !1, aUR(a4))
	}, this.lp = function(ll, lm) {
		if (2 !== eq.ku && 0 !== ei.kv[eq.jj] && !eq.lQ && !aZ.d.el(eq.jj))
			for (var aUd, aUe, aUf, aUg = d0.jF.lR() ? aSM : 0, aUh = d0.jF.lR() ? Math.floor(.15 * aSM) : 0, a4 = aUM.length - 1; 0 <= a4; a4--)
				if (aUd = aUi(a4), aUe = aUj(a4), aUf = aUM[a4].canvas.width, aUe - aUh <= lm && lm <= aUe + aSM + aUh) {
					if (aUd - aUg <= ll && ll <= aUd + aSM + aUg) return aUM[a4].aUa || (aUM[a4].lN = !0, aUM[a4].aUa = !0, 0 === aUM[a4].id ? gq.b.aJ7(aUM[a4].oj) : gq.b.aJ5(aUM[a4].oj)), !0;
					if (0 === aUM[a4].id && aUd + aUf - aSM - aUg <= ll && ll <= aUd + aUf + aUg) return h7.tU(3), gq.b.on(gJ.ld(), aUM[a4].oj), !0
				} return !1
	}, this.w = function() {
		var v2, v5, z, aOh;
		0 === ei.kv[eq.jj] || aZ.d.el(eq.jj) && !eq.lQ || (v2 = aUM.slice(0, aUO), v5 = aUM.slice(aUO, aUO + aUP), z = v2, aOh = gS.oh(eq.jj), function(z, aOh) {
			if (aUO !== aOh) return 1;
			for (var a4 = aOh - 1; 0 <= a4; a4--)
				if (z[a4].oj !== gS.a8O(eq.jj, a4)) return 1;
			return
		}(z, aOh) ? aUn(z = function(z, aOh) {
			var a4, oj, bw, np, a9Q = [];
			loop: for (a4 = 0; a4 < aOh; a4++) {
				for (oj = gS.a8O(eq.jj, a4), bw = 0; bw < z.length; bw++)
					if (z[bw].oj === oj) {
						a9Q.push(z.splice(bw, 1)[0]);
						continue loop
					} np = gS.a8P(eq.jj, a4), aUQ(np = {
					oj: oj,
					np: np,
					aUZ: np,
					id: 0,
					lN: !0,
					aUa: !1,
					canvas: null,
					lI: null
				}), a9Q.push(np)
			}
			return a9Q
		}(z, aOh), aOh) : aUn(z, aOh), v2 = z, v5 = function(z) {
			var aOi = h1.bW.nm[eq.jj];
			return function(z, aOi) {
				if (aUP !== aOi) return 1;
				for (var jy = eq.jj << 3, o2 = h1.bW.o2, aN4 = h1.bW.aN4, a4 = aOi - 1; 0 <= a4; a4--) {
					var aOv = aN4[jy + a4];
					if (z[a4].oj !== o2[aOv]) return 1
				}
				return
			}(z, aOi) ? aUq(z = function(z, aOi) {
				var a4, oj, bw, a9Q = [],
					jy = eq.jj << 3,
					o2 = h1.bW.o2,
					se = h1.bW.se,
					aN4 = h1.bW.aN4;
				loop: for (a4 = 0; a4 < aOi; a4++) {
					var aOv = aN4[jy + a4];
					for (oj = o2[aOv], bw = 0; bw < z.length; bw++)
						if (z[bw].oj === oj) {
							a9Q.push(z.splice(bw, 1)[0]);
							continue loop
						} aOv = se[aOv], aUQ(aOv = {
						oj: oj,
						np: aOv,
						aUZ: aOv,
						id: 1,
						lN: !0,
						aUa: !1,
						canvas: null,
						lI: null
					}), a9Q.push(aOv)
				}
				return a9Q
			}(z, aOi), aOi) : aUq(z, aOi), z
		}(v5), aUO = v2.length, aUP = v5.length, aUM = v2.concat(v5))
	}, this.eZ = function() {
		if (0 !== ei.kv[eq.jj] && (!aZ.d.el(eq.jj) || eq.lQ))
			for (var a4 = aUM.length - 1; 0 <= a4; a4--) m0.drawImage(aUM[a4].canvas, aUi(a4), aUj(a4))
	}
}

function ho() {
	var ai, a07, aCS, aUs, cw, lM, fontSize, aUt, aUu, aUv, aUw, canvas, lI, mC, aUx;

	function f3(a4) {
		return L(0 === a4 ? 501 : 1 === a4 ? 502 : 2 === a4 ? 503 : 504)
	}

	function aV4() {
		eq.p6 ? aCx + 4 * ac.gap + cw + hH.aCg() > gJ.dE ? m0.drawImage(canvas, 2 * ac.gap + hH.aCg(), aCx + 2 * ac.gap) : m0.drawImage(canvas, ac.gap, aCx + 3 * ac.gap + hH.aCg()) : m0.drawImage(canvas, ac.gap, aCx + 2 * ac.gap)
	}

	function aUy() {
		canvas.width = ai[0].width + aUv, canvas.height = cw + aUv, (lI = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, ai[0].width + aUv, cw + aUv), lI.translate(Math.floor(aUv / 2), Math.floor(aUv / 2)), lI.lineWidth = aUv, lI.fillStyle = 1 === ai[0].aV3 ? t.aV5 : t.qO, aV6(), lI.fill(), lI.strokeStyle = 1 === ai[0].aV3 ? t.wc : t.u,
			aV6(), lI.stroke(), aZ.aa.textAlign(lI, 1), aZ.aa.textBaseline(lI, 1), lI.fillStyle = 1 === ai[0].aV3 ? t.wc : t.u, lI.font = lM[0], lI.fillText(f3(ai[0].aV2), Math.floor(ai[0].width / 2), Math.floor(.72 * aUt[0] * cw)), lI.font = lM[1],
			lI.fillText(ai[0].ax, Math.floor(ai[0].width / 2), Math.floor((aUt[0] + .48 * aUt[1]) * cw))
	}

	function aV6() {
		lI.beginPath(), lI.moveTo(aUw, 0), lI.lineTo(ai[0].width - aUw, 0), lI.lineTo(ai[0].width, aUw), lI.lineTo(ai[0].width, cw - aUw), lI.lineTo(ai[0].width - aUw, cw), lI.lineTo(aUw, cw), lI.lineTo(0, cw - aUw), lI.lineTo(0, aUw), lI.closePath()
	}
	this.ck = function() {
		a07 = 4, aCS = aUs = mC = 0, ai = [], lM = new Array(2), fontSize = new Array(2), (aUt = new Array(2))[0] = .3, aUt[1] = .7, aUu = new Array(4), canvas = document.createElement("canvas"), aUx = eW.av + 2e3, this.resize()
	}, this.resize = function() {
		var a4, cv;
		for (cw = Math.floor((d0.jF.lR() ? .062 : .047) * eR.lS), fontSize[0] = Math.floor(.85 * aUt[0] * cw), fontSize[1] = Math.floor(.85 * aUt[1] * cw), lM[0] = aZ.aa.lT(1, fontSize[0]), lM[1] = aZ.aa.lT(1, fontSize[1]), a4 = aUu.length -
			1; 0 <= a4; a4--) aUu[a4] = this.measureText(f3(a4) + "000", lM[0]);
		if (aUv = Math.floor(1 + .05 * cw), aUw = Math.floor(.2 * cw), 0 < ai.length) {
			for (a4 = ai.length - 1; 0 <= a4; a4--) cv = this.measureText(ai[a4].ax + "00", lM[1]), ai[a4].width = cv < aUu[a4] ? aUu[a4] : cv;
			aUy()
		}
	}, this.w = function() {
		0 !== a07 && (4 === a07 ? eW.av > aUx && (a07 = 0, 1 === eq.ku) && gI.a9z(cC.cF.cG[cC.cE].name, 3, 1, 9) : (1 === a07 ? (0 === aCS && (aUy(), aCS = 1e-4), 1 <= (aCS += .002 * (eW.av - mC)) && (aUs = 0, a07 = 2, aCS = 1), eW.eX = !0) :
			2 === a07 ? ((aUs += (eW.av - mC) / 1e3) > ai[0].mH || 1 < aUs && 1 < ai.length) && (a07 = 3) : 3 === a07 && ((aCS -= .002 * (eW.av - mC)) <= 0 && (aCS = 0, ai.shift(), a07 = 0 < ai.length ? 1 : 0), eW.eX = !0), mC = eW.av))
	}, this.measureText = function(ax, lM) {
		return m0.font = lM, Math.floor(m0.measureText(ax).width)
	}, this.qF = function(aV1, a4) {
		this.a9z(ei.sA[aV1], a4, 1, 0 === a4 ? 3 : 7)
	}, this.a9z = function(ax, aV2, aV3, mH) {
		var cv;
		ax.length && (cv = (cv = this.measureText(ax + "00", lM[1])) < aUu[aV2] ? aUu[aV2] : cv, ai.push({
			ax: ax,
			width: cv,
			aV2: aV2,
			aV3: aV3,
			mH: mH
		}), 0 === a07) && (aCS = 0, a07 = 1, mC = eW.av)
	}, this.eZ = function() {
		0 !== a07 && 0 !== aCS && (aCS < 1 ? (m0.globalAlpha = aCS, aV4(), m0.globalAlpha = 1) : aV4())
	}
}

function qs() {
	this.br = function(aB, value) {
		2 !== bp.cy.data[aB].type && (value = Math.floor(value)), bp.cy.data[aB].value !== value && (bp.cy.fw(aB, value), 0 === aB ? (aT.bh(), gp.ck(), aT.bl(2)) : 1 === aB ? eR.jL(1) : 2 === aB ? eR.jL(0) : 5 === aB && (aZ.aa.aGB(), eR.jL(0)))
	}, this.a5e = function() {
		for (var data = bp.cy.data, a4 = 0; a4 < 100; a4++) data[a4] && bp.cy.fw(a4, data[a4].fx);
		aZ.aa.aGB(), eR.jL(1)
	}, this.aV7 = function() {
		for (var data = bp.cy.data, a4 = 0; a4 < data.length; a4++) data[a4] && bp.cy.br(a4, data[a4].fx)
	}, this.aV8 = function() {
		for (var bw = bp.cy, a4 = 128; a4 < 135; a4++) bw.fw(a4, bw.data[a4].fx)
	}, this.aIp = function(data) {
		bp.bq.br(109, data.a5Y), bp.bq.br(107, data.aHc), bp.bq.br(108, data.aHd), bp.bq.br(112, data.aHe), bp.bq.br(111, data.aHU), bp.bq.br(113, data.aAR), bp.bq.br(135, data.aHs), bp.bq.br(136, data.aHz), bp.bq.br(137, data.aHr), bp.bq.br(138,
			data.aHy), bp.bq.br(139, data.aHt), bp.bq.br(141, data.aHv), bp.bq.br(142, data.aI0), bp.bq.br(143, data.aHx), bp.bq.br(144, data.aI1)
	}
}

function j7() {
	var aUM = [];
	this.a7v = function(player, a7u, a6W, aV9) {
		player === eq.jj || a7u === eq.jj || !aV9 && aZ.d.el(player) || aZ.d.el(a7u) || this.an(ei.sA[player] + " supported " + ei.sA[a7u] + " with " + aZ.bu.jW(a6W) + " ressource" + (1 === a6W ? "." : "s."))
	}, this.an = function(ax, ay) {
		ax = {
			av: at.rP(),
			ax: ax,
			ay: ay
		};
		aUM.push(ax), 30 === aT.dK && aT.c0().an(ax)
	}, this.clear = function() {
		aUM = [];
		var rh = aT.a1h(30);
		rh && rh.clear()
	}, this.ak = function() {
		return aUM
	}
}

function aLv() {
	var aP, ev, ew, f4;

	function bM() {
		ez(), 2 !== eq.data.spawningType || aZ.cb.zg(eq.data.spawningData) || (eq.data.spawningType = 0), 2 !== eq.data.spawningType && (eq.data.spawningData = null), aT.f0()[19] = null, aT.f1()
	}

	function ez() {
		2 === eq.data.spawningType && aZ.cb.f2(ew.f3(), eq.data.spawningData, cC.cz - 1)
	}
	this.show = function() {
		aP.show(), this.resize()
	}, this.aY = function() {
		aP.aY()
	}, this.resize = function() {
		aP.resize(), ev.resize()
	}, this.ae = function(af) {
		2 === af && aP.ag[0].ah()
	}, aP = new aR(L(505), [new aS("⬅️ " + L(1), bM)]), ev = new ex(aP.aV, (function(f4) {
		var f8 = new f9,
			fD = (f8.fA(L(21)), [L(291), L(468), L(24)]),
			value = eq.data.spawningType;
		0 === eq.data.gameMode && (fD.splice(1, 1), 0 < value) && (value = 1);
		f8.fB(new fC({
			fD: fD,
			value: value
		}, function(aB) {
			ez(), eq.data.spawningType = aB, 0 === eq.data.gameMode && 1 === aB && (eq.data.spawningType = 2), 2 !== eq.data.spawningType || eq.data.spawningData || (eq.data.spawningData = new Uint16Array(2 * eq.fE)), aT.bl(
				24)
		})), f8.fF(new aDs), f8.fF(new a5i({
			value: eq.data.selectableSpawn
		}, L(506), function(value) {
			eq.data.selectableSpawn = value
		})), f4.push(f8)
	}(f4 = []), function(f4) {
		var f8 = new f9;
		f8.fA("Seed"), f8.fF(new fG({
			aB: -1,
			value: eq.data.spawningSeed
		}, 1, 0, function(bd) {
			var value = Math.abs(Math.floor(bd.target.value)) % 16384;
			bd.target.value = eq.data.spawningSeed = value
		})), f4.push(f8)
	}(f4), function(f4) {
		var f8;
		2 === eq.data.spawningType && ((f8 = new f9).fA("Data"), (ew = new fI(0, 1, 0, 1)).fJ(aZ.bu.fK(eq.data.spawningData, 2)), f8.fF(ew), f4.push(f8))
	}(f4), f4))
}

function aLo() {
	var aVA, aVB, aUA, bc, aVC;
	this.y8 = new a7V, aUA = new a19([.45, .27], [.5, .5], 2 / 3), aVB = [new aS("⚔️<br>" + L(507), function() {
			aVD(0)
		}, t.aVE), new aS("🗡️<br>" + L(465), function() {
			aVD(1)
		}, t.a7d), new aS("🔑<br>" + L(508), function() {
			aVD(2)
		}, t.aVF), new aS("☰<br>" + L(509), function() {
			aVD(3)
		}, t.aVG), new aS("", function() {
			aT.bl(12)
		}, t.da, !1),
		new aS("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new aS("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], bc = new fG(bp.cy.data[122]);
	for (var a4 = 0; a4 < aVB.length; a4++) aVB[a4].button.style.position = "absolute";

	function aVD(aB) {
		d0.jF.setState(10), gQ.a7m() || gQ.aQW(), 0 === aB ? aT.bW.y5() : 1 === aB ? (gr.aF0.aCJ(bp.cy.data[156].value, 1) || eq.aDp.aLU(), aT.bl(19)) : 2 === aB ? 0 !== d0.id || bp.cy.data[140].value ? aT.bl(8, aT.dK, new jw(16)) : aT.bW.tW(aT.dK,
			16) : 3 === aB && aT.bl(1)
	}
	bc.bd.style.position = "absolute", bc.bd.style.textAlign = "center", bc.bd.placeholder = L(510), this.show = function() {
		eY.setState(0), d0.jF.setState(12), this.y8.show(), aVB[4].c6(aZ.color.aNj(bp.cy.data[121].value)), this.resize(), document.body.appendChild(bc.bd);
		for (var a4 = 0; a4 < aVB.length; a4++) document.body.appendChild(aVB[a4].button);
		1 !== d0.id || d0.oX < 5 || (aVC && eW.av > aVC + 144e5 ? d0.d5.setState(14) : aVC = eW.av)
	}, this.aY = function() {
		this.y8.aY(), aT.removeChild(document.body, bc.bd);
		for (var a4 = 0; a4 < aVB.length; a4++) aT.removeChild(document.body, aVB[a4].button)
	}, this.resize = function() {
		this.y8.resize(), this.y8.resize(), aUA.resize();
		var gap = .5 * ac.gap,
			aEQ = 10 / 99 * .84 * aUA.cv,
			aVJ = .16 * aUA.cw,
			aDG = .19 * aUA.cv,
			dF = aUA.dF + aDG,
			aEQ = aUA.dE + aEQ + 3 * gap,
			cv = .5 * (aUA.cv - gap) - aDG,
			aDG = aUA.cv - 2 * aDG - aVJ - gap,
			aDG = (aZ.aa.a7k(bc.bd, dF, aEQ, aDG, aVJ), aZ.aa.a7k(aVB[4].button, dF + aDG + gap, aEQ, aVJ, aVJ), .5 * (aUA.dE + aUA.cw - (aEQ += aVJ + gap) - gap));
		aZ.aa.a7k(aVB[0].button, dF, aEQ, cv, aDG), aZ.aa.a7k(aVB[1].button, dF + cv + gap, aEQ, cv, aDG), aZ.aa.a7k(aVB[2].button, dF, aEQ + aDG + gap, cv, aDG), aZ.aa.a7k(aVB[3].button, dF + cv + gap, aEQ + aDG + gap, cv, aDG);
		aZ.aa.a7k(aVB[5].button, dF, aEQ + aDG * 2 + gap * 2, cv * 2 + gap, aDG / 3);
		aZ.aa.a7k(aVB[6].button, dF, aEQ + aDG * 2.33 + gap * 3, cv * 2 + gap, aDG / 3);
		for (var a4 = 0; a4 < aVB.length; a4++) aVB[a4].button.style.font = aZ.aa.lT(0, aZ.aa.nJ(.065 * aUA.cw)), aZ.aa.ot(aVB[a4].button, 5);
		bc.bd.style.font = aZ.aa.lT(0, aZ.aa.nJ(.08 * aUA.cw)), aZ.aa.ot(bc.bd, 5)
	}, this.eZ = function() {
		if (eY.aVK(), gL.eZ(), a5 = Math.floor((d0.jF.lR() ? .018 : .0137) * eR.lS), m0.font = aZ.aa.lT(0, Math.max(5, a5)), aZ.aa.textBaseline(m0, 0), aZ.aa.textAlign(m0, 2), m0.fillStyle = t.u, m0.fillText(e1.oX, eR.cv, 0), text =
			"Win count: " + __fx.wins.count, textLength = m0.measureText(text).width, a5 = Math.max(5, a5), m0.textAlign = "left", m0.textBaseline = "middle", m0.fillText(text, m0.canvas.width - textLength - a5 / 2, 2 * a5), eP.eZ(), hA.eZ(), gQ
			.a7m()) {
			m0.imageSmoothingEnabled = !1;
			var text = gQ.aLi("territorial.io"),
				textLength = .84 * aUA.cv / text.width;
			m0.setTransform(textLength, 0, 0, textLength, aUA.dF + .08 * aUA.cv, aUA.dE), aVA = aVA || aZ.aN3.aMQ(text, aZ.aN3.aMV, [0, 0, 0]);
			for (var dF = -1; dF <= 1; dF += 2)
				for (var dE = -1; dE <= 1; dE += 2) m0.drawImage(aVA, dF, dE);
			m0.drawImage(text, 0, 0), m0.imageSmoothingEnabled = !0;
			var a5 = gQ.aLi("logo"),
				aVN = .6666 * textLength * text.height / a5.height,
				ms = .5 * eR.cv,
				mt = aUA.dE + .5 * textLength * text.height - .5 * aVN * a5.height;
			m0.setTransform(aVN, 0, 0, aVN, ms - .6 * textLength * text.width, mt), m0.drawImage(a5, 0, 0), m0.setTransform(aVN, 0, 0, aVN, ms + .6 * textLength * text.width - aVN * a5.width, mt), m0.drawImage(a5, 0, 0), m0.setTransform(1, 0, 0,
				1, 0, 0), m0.imageSmoothingEnabled = !0
		}
	}
}

function uF() {
	this.tb = function() {
		bp.bq.a5e(), bp.bq.aV7(), bj.bW.close(0, 3255), 0 === d0.id ? d0.uC && d0.uC.clear() : 1 === d0.id ? d0.d5.saveString(199, "") : 2 === d0.id && d0.uE.postMessage("clear")
	}, this.tL = function() {
		2 === d0.id ? d0.uE.postMessage("showConsentForm") : 1 === d0.id && d0.d5.setState(7)
	}, this.tO = function() {
		this.setState(14)
	}, this.lR = function() {
		return 1 === bp.cy.pi(2)
	}, this.aVO = function() {
		bp.cy.fw(102, "")
	}, this.setState = function(aGQ) {
		1 === d0.id && 5 <= d0.oX && d0.d5.setState(aGQ)
	}, this.aLO = function() {
		var aVP;
		1 === d0.id && 7 <= d0.oX ? d0.d5.setState(5) : ((aVP = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = aVP.toString())
	}, this.jG = function() {
		1 !== d0.id || d0.oX < 17 || d0.d5.saveString(23, document.documentElement.outerHTML)
	}, this.aKP = function() {
		0 !== d0.id && (1 === d0.id ? d0.d5.prepareAd("1688441405") : 2 === d0.id && (0 === d0.oX ? d0.uE.postMessage("prepare ad 2904813909") : d0.uE.postMessage("loadAds 2904813909")))
	}, this.aVQ = function(jl) {
		return 0 !== d0.id && 1 !== d0.id && 2 === d0.id && 0 !== d0.oX && (d0.uE.postMessage("showAd"), !0)
	}, this.jK = function() {
		2 === d0.id && d0.oX < 23 && aT.bl(4, 1, new tZ("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + gz.fY + "' target='_blank'>" + gz
			.fY + "</a>", !0, [new aS("⬅️ " + L(1), function() {
				aT.bl(0)
			}, t.oy)]))
	}
}

function a1r() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.b2 = 13, this.a03 = this.emojis.length, this.a04 = 676, this.a02 = 1024, this.aRl = this.emojis.indexOf("💀"), this.aVR = this.aRl + 1, this.aVS = this.emojis.indexOf("🥇"), this.aVT = this.emojis.indexOf("😊"), this.b6 = function(
	a9) {
		return a9 < this.a04 ? String.fromCharCode(55356, 56806 + cf.cg(a9, 26), 55356, 56806 + a9 % 26) : this.emojis[Math.min(a9 - this.a04, this.a03 - 1)]
	}, this.a05 = function(ax) {
		for (var a5 = ax.length - 2, z = [], a4 = 0; a4 < a5; a4++) {
			var wt = ax.charCodeAt(a4) - 56806,
				wu = ax.charCodeAt(a4 + 2) - 56806;
			0 <= wt && wt < 26 && 0 <= wu && wu < 26 && (z.push(26 * wt + wu), a4 += 3)
		}
		return z
	}, this.a6g = function(a9) {
		return a9 < this.a04
	}, this.a79 = function(a9) {
		return a9 >= 1024 - this.b2
	}, this.a77 = function(a9) {
		return a9 >= this.a04 && a9 < this.a04 + this.aVR
	}
}

function aCb() {
	this.aCJ = function(a1b) {
		for (var jR = gx, size = jR.jT(a1b), a1e = 7 + 9 * jR.jT(1), z = [], a4 = 0; a4 < size; a4++) z.push(String.fromCharCode(jR.jT(a1e)));
		return z.join("")
	}
}

function aCc() {
	this.jT = function() {
		return 69
	}, this.a1a = function() {
		var cv = window.screen.width,
			cw = window.screen.height;
		gt.oG(26, (cv * cw + cw) % 67108864), gt.oG(22, 0), gt.oG(21, 0)
	}
}

function i() {
	this.w = function(dy) {
		var id, tz, mx;
		for (gx.ck(dy), gx.aB += 2, mx = 8 * gx.size; gx.aB + 8 <= mx;) id = gx.jT(4), tz = gx.jT(9), 0 === id ? this.aG7(id, tz, gx.jT(22)) : 1 === id ? this.aG7(id, tz, gx.jT(10), gx.jT(10)) : 2 === id ? this.aG7(id, tz, gx.jT(10), gx.jT(9)) :
			3 === id ? this.aG7(id, tz, gx.jT(10), gx.jT(27)) : 4 === id ? this.aG7(id, tz, gx.jT(10), gx.jT(16)) : 5 === id || 6 === id ? this.aG7(id, tz, gx.jT(10)) : 7 === id ? this.aG7(id, tz, gx.jT(1)) : 10 === id ? this.aG7(id, tz, gx.jT(
				20), gx.jT(22)) : this.aG7(id, tz)
	}, this.a3s = [], this.aVU = function() {
		for (var aVW = 0, aVX = 0, aVY = 0, aVZ = 0, aVa = 0, aVb = 0, a4 = 0; a4 < 512; a4++) aVW += ei.kv[a4], aVX += ei.jd[a4], aVY += ei.rM[a4], aVZ += h1.bW.nm[a4];
		aVa += h1.bW.pR, aVb += ed.ee, this.a3s.push(aVY % 1073741824 * 4 + (aVW + aVX + aVZ + aVa + aVb) % 4)
	}, this.aG7 = function(id, tz, u1, a4B) {
		0 === id ? gq.f.aIq(tz, u1) : 1 === id ? gq.f.on(tz, u1, a4B) : 2 === id ? gq.f.aIz(tz, u1, a4B) : 3 === id ? gq.f.a0J(tz, u1, a4B) : 4 === id ? gq.f.a0M(tz, u1, a4B) : 5 === id ? gq.f.aJ7(tz, u1) : 6 === id ? gq.f.aJ9(tz, u1) : 7 ===
			id ? gq.f.aJA(tz, u1) : 8 === id ? gq.f.kp(tz) : 9 === id ? gq.f.kt(tz) : 10 === id && gq.f.aJE(tz, u1 >> 10, a4B, u1 % 1024)
	}
}

function aOQ() {
	var aVc = {
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
		aVd = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.vQ = function(fq) {
		return fq.replace(aVd, function(match) {
			return aVc[match] || match
		})
	}, this.jW = function(a9) {
		var a4, a5W, aVe, aVf, aVg;
		if (a9 < 0) return "-" + this.jW(Math.abs(a9));
		if (a9 < 1e3) return a9.toString();
		for (a5W = Math.floor(Math.log(a9 + .5) / Math.log(10)) + 1, aVe = Math.floor((a5W - 1) / 3), aVg = (aVf = a9.toString()).substring(a5W - 3, a5W), a4 = 1; a4 < aVe; a4++) aVg = aVf.substring(a5W - 3 * (a4 + 1), a5W - 3 * a4) + " " + aVg;
		return aVf.substring(0, a5W - 3 * aVe) + " " + aVg
	}, this.le = function(ec, a5W) {
		return ec.toFixed(a5W) + "%"
	}, this.aVh = function(a9, aVi) {
		return a9.toFixed(cf.fH(Math.floor((void 0 === aVi ? 3 : aVi) - Math.log10(Math.max(a9, 1))), 0, 8))
	}, this.aHT = function(a9, d3, a5W) {
		return (a9 * d3).toFixed(a5W)
	}, this.kg = function(username) {
		var sj, sm = username.indexOf("[");
		return !(sm < 0) && 1 < (sj = username.indexOf("]")) - sm && sj - sm <= 8 ? username.substring(sm + 1, sj).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.kg;
	this.a9f = function(ax) {
		for (var aN = Math.floor(.5 * ax.length + .5), mx = Math.floor(.5 * (aN - 1)), a4 = 0; a4 < mx; a4++)
			for (var bw = -1; bw < 2; bw += 2) {
				var af = aN + bw * a4;
				if (" " === ax[af]) return [this.xe(ax.substring(0, af)), this.aVj(ax.substring(af))]
			}
		return [ax.substring(0, aN), ax.substring(aN)]
	}, this.aVj = function(ax) {
		for (var a5 = ax.length, a4 = 0; a4 < a5; a4++)
			if (" " !== ax[a4]) return ax.substring(a4);
		return ax
	}, this.xe = function(ax) {
		for (var a4 = ax.length - 1; 0 <= a4; a4--)
			if (" " !== ax[a4]) return ax.substring(0, a4 + 1);
		return ax
	}, this.aVk = function(ax, lL) {
		return ax.split("(")[0] + "(🧈 " + lL.toFixed(2) + ")"
	}, this.startsWith = function(ax, aVl) {
		return ax.substring(0, aVl.length) === aVl
	}, this.bv = function(ax, aVl) {
		var a5 = ax.length;
		return ax.substring(a5 - aVl.length, a5) === aVl
	}, this.fK = function(z, aVm, aVn) {
		var ax = "",
			a5 = z.length - 1;
		aVn = aVn || "";
		for (var a4 = 0; a4 < a5; a4++) ax += aVn + z[a4] + aVn + ",", (a4 + 1) % aVm == 0 && (ax += "\n");
		return ax += aVn + z[a5] + aVn
	}, this.aEy = function(ax, wt, wu) {
		return ax.replace(new RegExp(wt, "g"), wu)
	}
}

function eD() {
	function aVo() {
		if (2 === eq.ku) return 1;
		gh.aTr(), eq.ku = 2, eq.ky = eq.kx
	}

	function aVp() {
		h5.eJ.bf(), gO.show(1 === eq.wU, !1, 2 === eq.wU), h5.result.bf(), h5.eL.w(), h5.eH.w(), h5.eH.aAk(), gG.aAC(!0), gG.a7G(247), gG.a7G(956), gG.a7G(957), gN.l0(!0), at.l0(!0), gh.l0(), gs.a1J(), eq.lQ && eW.a3n.aG8(), eW.eX = !0, hD.q7(), d0
			.jF.setState(0)
	}
	this.aTq = function() {
		aVo() || (eq.p4 = 2, aVp())
	}, this.l2 = function() {
		aVo() || (eq.p4 = 1, aVp())
	}
}

function aMi() {
	function aVq(oB, z2, z4) {
		for (var tD = Math.min(z2, z4), mx = Math.max(z2, z4), dE = tD + 1; dE < mx; dE++)
			if (!gR.yn(h0.zA(oB, dE))) return;
		return 1
	}

	function aVr(oC, z1, z3) {
		for (var tD = Math.min(z1, z3), mx = Math.max(z1, z3), dF = tD + 1; dF < mx; dF++)
			if (!gR.yn(h0.zA(dF, oC))) return;
		return 1
	}

	function aVs(z1, z2, z3, z4, aGy, aGz) {
		for (var a5 = Math.min(Math.abs(z3 - z1), Math.abs(z4 - z2)), mp = Math.sign(z3 - z1), mq = Math.sign(z4 - z2), a4 = 0; a4 < a5; a4++)
			if (!gR.yn(h0.zA(z1 += mp, z2 += mq))) return null;
		return z1 === z3 ? aVq(z1, z2, z4) ? new Uint32Array([aGy, h0.z9(z1, z2), aGz]) : null : aVr(z2, z1, z3) ? new Uint32Array([aGy, h0.z9(z1, z2), aGz]) : null
	}
	this.aJ3 = function(aGy, aGz) {
		aGy = function(aGy, aGz) {
			var z1 = h0.mZ(aGy),
				z2 = h0.mb(aGy),
				z3 = h0.mZ(aGz),
				z4 = h0.mb(aGz);
			if (z1 === z3) {
				if (aVq(z1, z2, z4)) return new Uint32Array([aGy, aGz])
			} else {
				if (z2 !== z4) return aVs(z1, z2, z3, z4, aGy, aGz) || aVs(z3, z4, z1, z2, aGy, aGz);
				if (aVr(z2, z1, z3)) return new Uint32Array([aGy, aGz])
			}
			return null
		}(aGy, aGz);
		return null === aGy ? -1 : h1.aH0.aH8(aGy)
	}
}

function iZ() {
	function aVu(key) {
		var aVv;
		return "undefined" == typeof URLSearchParams || (aVv = window.location.search, "string" != typeof(aVv = new URLSearchParams(aVv).get(key))) || aVv.length < 1 ? null : aVv
	}
	this.jJ = function() {
		if (0 !== d0.id) return !1;
		if (! function() {
				var value = aVu("account");
				if (!value && !(value = aVu("a"))) return void gy.clear();
				return gy.clear(), aT.bl(8, aT.dK, new jw(1e3, {
					aAQ: 0,
					bs: value,
					a5Y: 0
				})), 1
			}()) {
			var value = aVu("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			aT.bl(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var aVP = new URL(window.location.href);
		aVP.search = "";
		try {
			return history.replaceState(null, "", aVP.toString()), !0
		} catch (bd) {
			console.log("error 352: " + bd)
		}
		return !1
	}, this.aIA = function(key, value) {
		if (0 === d0.id) try {
			var aVP = new URL(window.location.href),
				ec = aVP.searchParams;
			ec.set(key, value), aVP.search = ec.toString(), history.replaceState(null, "", aVP.toString())
		} catch (bd) {
			console.log("error 358: " + bd)
		}
	}
}

function aTx() {
	this.yP = function(dj, yM) {
		gt.cD(11), gt.oG(1, 0), gt.oG(6, 4), gt.oG(1, yM ? 1 : 0), gt.oG(3, 0 === eq.ku ? bQ.bZ ? 6 : 0 : eq.lQ ? 1 : eq.l6 ? 7 : eq.l1 < 7 ? 2 : 8 === eq.l1 ? 4 : 9 === eq.l1 ? 5 : 3), bj.bW.send(dj, gt.dy)
	}, this.a3d = function() {
		gt.cD(58), gt.oG(1, 0), gt.oG(6, 5), gt.oG(8, bj.bW.yI), gt.oG(10, eS.sv), gt.oG(9, eS.a3c), gt.oG(10, e1.qX), gt.oG(14, e1.oW), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.aVx = function(mV) {
		gt.cD(27), gt.oG(1, 1), gt.oG(4, 0), gt.oG(22, mV), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.aVy = function(lK, oj) {
		gt.cD(25), gt.oG(1, 1), gt.oG(4, 1), gt.oG(10, lK), gt.oG(10, oj), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.aVz = function(lK, a7u) {
		gt.cD(24), gt.oG(1, 1), gt.oG(4, 2), gt.oG(10, lK), gt.oG(9, a7u), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.aW0 = function(lK, aJ2) {
		gt.cD(42), gt.oG(1, 1), gt.oG(4, 3), gt.oG(10, lK), gt.oG(27, aJ2), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.aW1 = function(lK, mS) {
		gt.cD(31), gt.oG(1, 1), gt.oG(4, 4), gt.oG(10, lK), gt.oG(16, mS), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.aW2 = function(oj) {
		gt.cD(15), gt.oG(1, 1), gt.oG(4, 5), gt.oG(10, oj), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.aW3 = function(aB) {
		gt.cD(15), gt.oG(1, 1), gt.oG(4, 6), gt.oG(10, aB), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.aW4 = function(aJB) {
		gt.cD(6), gt.oG(1, 1), gt.oG(4, 7), gt.oG(1, aJB), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.aW5 = function() {
		gt.cD(5), gt.oG(1, 1), gt.oG(4, 8), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.aW6 = function(lK, mV, oj) {
		gt.cD(47), gt.oG(1, 1), gt.oG(4, 10), gt.oG(10, lK), gt.oG(10, oj), gt.oG(22, mV), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.aW7 = function(aW8, aW9) {
		gt.cD(24), gt.oG(1, 1), gt.oG(4, 15), gt.oG(9, aW9), gt.oG(10, aW8), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.aWA = function(e9) {
		gt.cD(14), gt.oG(1, 1), gt.oG(4, 14), gt.oG(9, e9), bj.bW.send(bj.bW.oV, gt.dy)
	}, this.aWB = function(aWC, target) {
		var a4, a5 = aWC.length;
		for (gt.cD(14 + 9 * a5), gt.oG(1, 1), gt.oG(4, 13), gt.oG(9, target), a4 = 0; a4 < a5; a4++) gt.oG(9, aWC[a4]);
		bj.bW.send(bj.bW.oV, gt.dy)
	}
}

function aWD() {
	var aWE, aWF;

	function aWJ() {
		(aWE = new WebSocket("wss://territorial.io/s52/")).onopen = aWL, aWE.onclose = function() {
			aWM()
		}
	}

	function aWL() {
		if (aWE && aWE.readyState === aWE.OPEN) {
			var cv = new iW;
			cv.cD(1608), cv.oG(1, 0), cv.oG(6, 7), cv.oG(2, d0 ? d0.id : 3), cv.oG(1, e1.oY ? 1 : 0), cv.oG(1, e1.oZ ? 1 : 0), cv.oG(1, e1 ? e1.jM : 0);
			for (var a4 = 0; a4 < aWF.length && a4 < 228; a4++) cv.oG(7, aWF.charCodeAt(a4) % 128);
			aWE.send(cv.dy), aWM()
		}
	}

	function aWM() {
		aWE && (aWE.onclose = null, aWE.onopen = null, aWE = null)
	}
	window.addEventListener("error", function aWG(bd) {
		aWF = "";
		try {
			return window.removeEventListener("error", aWG), aWF = bd.lineno + " " + bd.colno + "|" + function(bd) {
				if (!bd.error) return "NoStack";
				var stack = bd.error.stack;
				if (!stack || !stack.length) return "NoStack";
				for (var match, zl = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = zl.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : "NoStack"
			}(bd), __fx.reportError(bd, aWF), alert("Error:\n" + bd.filename + " " + bd.lineno + " " + bd.colno + " " + bd.message)
		} catch (bd) {
			aWF = "SE|" + aWF + "|" + bd, console.log(aWF), alert(aWF)
		}
		aWJ()
	})
}

function iI() {
	this.sJ = new aKx, this.nv = new aNq, this.nw = new a4P, this.performance = new aWN, this.aIv = new aNF, this.a9A = new aPd, this.aPn = new aWO, this.nu = new aKh, this.aWP = new aSG, this.ck = function() {
		this.sJ.ck(), this.nw.ck(), this.performance.ck(), this.aIv.ck(), this.a9A.ck()
	}, this.w = function() {
		this.performance.w(), this.sJ.w(), this.nw.a4R()
	}
}

function iy() {
	this.cv = 0, this.cw = 0, this.pM = 0, this.pN = 0, this.aWQ = 0, this.aWR = 0, this.aC = 0, this.aD = 0;
	var aWT = this.aWS = 0;
	this.aWU = 0, this.aWV = 0, this.aWW = 0, this.aUv = 0, this.aB = 0, this.r1 = null, this.lJ = !1, this.aWX = -1, this.aWY = !1, this.aWZ = [0, 0], this.jB = function() {
		this.r1 = [L(511), L(53, 0, "Balance"), L(52, 0, "Interest"), L(512)]
	}, this.ck = function() {
		this.lJ = !1, this.aWX = -1, this.aWY = !1, this.resize()
	}, this.resize = function() {
		this.cv = eR.cv < 1.369 * eR.cw ? eR.cv : 1.369 * eR.cw;
		var dh = d0.jF.lR() && eR.cv < eR.cw ? 1 : d0.jF.lR() ? .8 : eR.cv < eR.cw ? .65 : .59;
		this.cv = Math.floor(dh * this.cv), this.cv -= d0.jF.lR() && eR.cv < eR.cw ? 2 * ac.gap + 2 : 0, this.cw = Math.floor(this.cv / 1.369), this.aUv = Math.floor(this.cw / 150), this.aUv = Math.max(this.aUv, 1.5), this.pM = Math.floor(1 +
			.02 * this.cv), this.pN = Math.floor(1 + .04 * this.cv), this.aC = this.pN, aWT = Math.floor(.75 * this.aC), this.aD = Math.floor(1 + .075 * this.cv), this.aWU = Math.floor(1 + .1125 * this.cv), this.aWV = Math.floor(this.cv * (d0
			.jF.lR() ? .03 : .029)), this.aWV = Math.max(this.aWV, 4), this.aWW = Math.floor(.035 * this.cv), this.aWW = Math.max(this.aWW, 4), this.aWS = this.cw - 2 * this.aC - this.aD - this.aWU, this.lJ && this.aWa()
	}, this.lp = function(ll, lm) {
		var a73, a72;
		return !!this.lJ && (a72 = ll, a73 = lm, ll -= cf.cg(eR.cv - this.cv, 2), lm -= cf.cg(eR.cw - this.cw, 2), ll < 0 || lm < 0 || ll >= this.cv || lm >= this.cw || ll >= this.cv - this.aWU && lm < this.aWU ? -1 !== gF.lp(a72, a73) || gs.lp(
			a72, a73) || this.aY() : lm < this.aWU || (lm < this.cw - this.aD ? (this.aWY = !0, this.aWX = (ll - 2 * this.pM - this.aWQ) / this.aWR, 3 !== this.aB && (eW.eX = !0)) : (a72 = (a72 = Math.floor(ll / (this.cv / this.r1
			.length))) < 0 ? 0 : a72 >= this.r1.length ? this.r1.length - 1 : a72) !== this.aB && (this.aB = a72, this.aWa(), eW.eX = !0)), !0)
	}, this.ly = function(ll, lm) {
		return this.aWZ[0] = ll, this.aWZ[1] = lm, !(!this.lJ || !this.aWY || (ll -= cf.cg(eR.cv - this.cv, 2), lm = this.aWX, this.aWX = (ll - 2 * this.pM - this.aWQ) / this.aWR, (0 <= this.aWX && this.aWX <= 1 || 0 <= lm && lm <= 1) && (eW
			.eX = !0), 0))
	}, this.a2W = function() {
		this.aWY && (this.aWY = !1)
	}, this.tR = function() {
		this.lJ ? this.aY() : this.show()
	}, this.show = function() {
		hE.tQ < 2 || (this.lJ = !0, this.aWa())
	}, this.aY = function() {
		this.lJ = !1, this.aWX = -1, eW.eX = !0
	}, this.aWa = function() {
		this.aB < 2 ? this.aWQ = gI.measureText(aZ.bu.jW(hE.max[this.aB]), aZ.aa.lT(0, this.aWV)) : 2 === this.aB && (this.aWQ = gI.measureText(aZ.bu.le(6, 2), aZ.aa.lT(0, this.aWV))), this.aWR = this.cv - 2 * this.pM - this.aWQ - this.pN
	}, this.by = function() {
		this.lJ && this.aWa()
	}, this.eZ = function() {
		this.lJ && this.a1K()
	}, this.a1K = function() {
		var dF = cf.cg(eR.cv - this.cv, 2),
			dE = cf.cg(eR.cw - this.cw, 2);
		m0.setTransform(1, 0, 0, 1, dF, dE), m0.fillStyle = t.qO, m0.fillRect(0, this.aWU, this.cv, this.cw - this.aWU), this.aWb(), this.aVM(), m0.strokeRect(0, 0, this.cv, this.cw), aZ.aa.textAlign(m0, 2), m0.font = aZ.aa.lT(0, this.aWV), 0 ===
			this.aB ? this.aWc(hE.aMm, dF, dE) : 1 === this.aB ? this.aWc(hE.a7z, dF, dE) : 2 === this.aB ? this.aWd(dF, dE) : 3 === this.aB && (this.aWe(dF, dE), this.aWf(dF, dE)), gF.aOM(Math.floor(dF + this.cv - .725 * this.aWU), Math.floor(
				dE + .275 * this.aWU), Math.floor(.45 * this.aWU)), m0.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aWb = function() {
		var a4, jl;
		for (m0.lineWidth = this.aUv, aZ.aa.textBaseline(m0, 1), aZ.aa.textAlign(m0, 1), m0.strokeStyle = t.u, m0.font = aZ.aa.lT(1, this.aWW), jl = this.cv / this.r1.length, m0.fillStyle = t.aEL, m0.fillRect(this.aB * jl, this.cw - this.aD, jl,
				this.aD), m0.fillStyle = t.u, m0.fillRect(0, this.cw - this.aD - .5 * this.aUv, this.cv, this.aUv), a4 = 1; a4 <= 3; a4++) m0.fillRect(a4 * jl, this.cw - this.aD, this.aUv, this.aD);
		for (a4 = this.r1.length - 1; 0 <= a4; a4--) m0.fillText(aZ.lI.rG(this.r1[a4], 0, .9 * jl), (a4 + .5) * jl, this.cw - .46 * this.aD)
	}, this.aVM = function() {
		m0.fillStyle = t.aWg, m0.fillRect(0, 0, this.cv, this.aWU), m0.fillStyle = t.u, m0.fillRect(0, this.aWU - .5 * this.aUv, this.cv, this.aUv), m0.font = aZ.aa.lT(1, .39 * this.aWU), m0.fillText(aZ.lI.rG(L(513), 0, .8 * this.cv), Math.floor(
			this.cv / 2), Math.floor(.55 * this.aWU))
	}, this.aWc = function(z, dF, dE) {
		var rQ = hE.max[this.aB],
			lw = (m0.setTransform(1, 0, 0, 1, dF + 2 * this.pM + this.aWQ, dE + this.aC + this.aWU), m0.lineWidth = 2, this.aWS / Math.sqrt(rQ));
		m0.beginPath(), m0.moveTo(this.aWR, this.aWS - lw * Math.sqrt(z[hE.tQ - 1]));
		for (var a4 = hE.tQ - 2; 0 <= a4; a4--) m0.lineTo(a4 * this.aWR / (hE.tQ - 1), this.aWS - lw * Math.sqrt(z[a4]));
		m0.stroke();
		dF = this.aOM(z, lw, .5);
		dF < .95 && m0.fillText(aZ.bu.jW(rQ), -this.pM, 0), .05 < Math.abs(dF - .5) && m0.fillText(aZ.bu.jW(Math.floor(rQ / 4)), -this.pM, Math.floor(this.aWS / 2)), .05 < dF && m0.fillText("0", -this.pM, this.aWS)
	}, this.aWd = function(dF, dE) {
		m0.setTransform(1, 0, 0, 1, dF + 2 * this.pM + this.aWQ, dE + this.aC + this.aWU), m0.lineWidth = 2;
		var lw = this.aWS / Math.max(hE.max[this.aB], 1);
		m0.beginPath(), m0.moveTo(this.aWR, this.aWS - lw * hE.rd[hE.tQ - 1]);
		for (var a4 = hE.tQ - 2; 0 <= a4; a4--) m0.lineTo(a4 * this.aWR / (hE.tQ - 1), this.aWS - lw * hE.rd[a4]);
		m0.stroke();
		dF = this.aOM(hE.rd, lw, 1), dE = hE.max[this.aB] / 100;
		dF < .95 && m0.fillText(aZ.bu.le(dE, 2), -this.pM, 0), .05 < Math.abs(dF - .5) && m0.fillText(aZ.bu.le(dE / 2, 2), -this.pM, Math.floor(this.aWS / 2)), .05 < dF && m0.fillText(aZ.bu.le(0, 2), -this.pM, this.aWS)
	}, this.aWe = function(dF, dE) {
		m0.setTransform(1, 0, 0, 1, dF + .34 * this.cv, dE + 2 * aWT + this.aWU), aZ.aa.textAlign(m0, 2);
		for (var aWh = this.cw - 4 * aWT - this.aD - this.aWU, z = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a4 = 9; 0 <= a4; a4--) m0.fillText(aZ.lI.rG(hE.aMp[z[a4]], 0, .31 * this.cv), 0, a4 * aWh / 9);
		var a9 = hE.jk;
		for (m0.setTransform(1, 0, 0, 1, dF + .39 * this.cv, dE + 2 * aWT + this.aWU), aZ.aa.textAlign(m0, 0), m0.fillText(aZ.bu.le(100 * a9[0] / (1024 * Math.max(a9[1], 1)), 1), 0, 0), a4 = 8; 1 <= a4; a4--) m0.fillText(a9[z[a4]].toString(), 0,
			a4 * aWh / 9);
		m0.fillText(aZ.bu.le(100 * (1 - ei.jd[eq.jj] / a9[7]), 0), 0, aWh)
	}, this.aWf = function(dF, dE) {
		m0.setTransform(1, 0, 0, 1, dF + .79 * this.cv, dE + 2 * aWT + this.aWU), aZ.aa.textAlign(m0, 2);
		var a4, aWh = this.cw - 4 * aWT - this.aD - this.aWU;
		for (m0.fillStyle = t.aWi, a4 = 2; 0 <= a4; a4--) m0.fillText(aZ.lI.rG(hE.aMp[a4 + 8], 0, .31 * this.cv), 0, a4 * aWh / 9);
		m0.fillText(aZ.lI.rG(hE.aMp[18], 0, .31 * this.cv), 0, 3 * aWh / 9), m0.fillStyle = t.aWj, m0.fillText(aZ.lI.rG(hE.aMp[11], 0, .31 * this.cv), 0, 4 * aWh / 9), m0.fillStyle = t.aUb, m0.fillText(aZ.lI.rG(hE.aMp[13], 0, .31 * this.cv), 0,
				5 * aWh / 9), m0.fillText(aZ.lI.rG(hE.aMp[15], 0, .31 * this.cv), 0, 6 * aWh / 9), m0.fillText(aZ.lI.rG(hE.aMp[16], 0, .31 * this.cv), 0, 7 * aWh / 9), m0.fillText(aZ.lI.rG(hE.aMp[12], 0, .31 * this.cv), 0, 8 * aWh / 9), m0
			.fillStyle = t.aIm, m0.fillText(aZ.lI.rG(hE.aMp[17], 0, .31 * this.cv), 0, aWh), m0.fillStyle = t.aWi;
		var a9 = hE.jk,
			zi = a9[8] + a9[9] + a9[10] + a9[18],
			zi = aZ.bu.jW(zi),
			aWk = m0.measureText(zi).width,
			dF = (m0.setTransform(1, 0, 0, 1, dF + .83 * this.cv + aWk, dE + 2 * aWT + this.aWU), m0.fillText(aZ.bu.jW(a9[8]), 0, 0), m0.fillText(aZ.bu.jW(a9[9]), 0, aWh / 9), m0.fillText(aZ.bu.jW(a9[10]), 0, 2 * aWh / 9), m0.fillText(aZ.bu.jW(
				a9[18]), 0, 3 * aWh / 9), m0.fillStyle = t.aWj, m0.fillText(zi, 0, 4 * aWh / 9), m0.fillStyle = t.aUb, m0.fillText(aZ.bu.jW(a9[13]), 0, 5 * aWh / 9), m0.fillText(aZ.bu.jW(a9[15]), 0, 6 * aWh / 9), m0.fillText(aZ.bu.jW(a9[16]),
				0, 7 * aWh / 9), m0.fillText(aZ.bu.jW(a9[12]), 0, 8 * aWh / 9), a9[12] + a9[13] + a9[15] + a9[16]);
		m0.fillStyle = t.aIm, m0.fillText(aZ.bu.jW(dF), 0, aWh), m0.fillStyle = t.u
	}, this.aOM = function(z, lw, aFU) {
		var a4, bd, tz;
		return this.aWX < 0 || 1 < this.aWX ? .25 : (a4 = this.aWX * (hE.tQ - 1), tz = z[bd = Math.floor(a4)], tz += (a4 - bd) * (z[bd < hE.tQ - 1 ? bd + 1 : bd] - tz), m0.strokeStyle = t.aFf, .04 < this.aWX && this.aWm(0, this.aWS - lw * Math
				.pow(tz, aFU), a4 * this.aWR / (hE.tQ - 1), this.aWS - lw * Math.pow(tz, aFU)), .04 < tz / hE.max[this.aB] && this.aWm(a4 * this.aWR / (hE.tQ - 1), this.aWS, a4 * this.aWR / (hE.tQ - 1), this.aWS - lw * Math.pow(tz, aFU)), m0
			.fillStyle = t.aWn, m0.beginPath(), m0.arc(a4 * this.aWR / (hE.tQ - 1), this.aWS - lw * Math.pow(tz, aFU), Math.max(2, .014 * this.cw), 0, 2 * Math.PI), m0.fill(), z = this.aWX * eW.rf, z = 0 === ei.kv[eq.jj] ? Math.floor(z * hE
				.aMo) : Math.floor(z * eW.et()), m0.fillStyle = t.u, m0.fillText(1 === aFU ? aZ.bu.le(tz / 100, 2) : aZ.bu.jW(Math.floor(tz)), -this.pM, this.aWS - lw * Math.pow(tz, aFU)), aZ.aa.textAlign(m0, 1), m0.fillText(at.au(z), a4 *
				this.aWR / (hE.tQ - 1), this.aWS + this.aWV - (d0.jF.lR() ? 2 : 0) - this.aUv), aZ.aa.textAlign(m0, 2), lw * Math.pow(tz, aFU) / this.aWS)
	}, this.aWm = function(mY, ma, ms, mt) {
		m0.beginPath(), m0.moveTo(mY, ma), m0.lineTo(ms, mt), m0.stroke()
	}
}

function j2() {
	function aWo(bd) {
		aKj(bd), aT.bl(4, 5, new tZ("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new aS("⬅️ " + L(1), function() {
				aT.f1()
			}), new aS("🔄 Reload", function() {
				d0.jF.aLO()
			}, t.a9W)]))
	}

	function aWs(bd) {
		aKj(bd), aT.bl(4, 5, new tZ(L(514), aWr(bd), !0))
	}

	function aWr(bd) {
		var ax = " [" + bd + "]";
		return 3249 === bd || 1006 === bd ? "No Internet / No Server Response" + ax : 4527 === bd ? "Player already in lobby" + ax : 4530 === bd ? "Lobby Timeout" + ax : 4528 === bd ? "Lobby Kick: Another login detected." + ax : 4540 === bd ?
			"You have been kicked." + ax : 4495 === bd ? "Account doesn't exist." : 4229 === bd ? "Bad Internet / Unresponsive Client" + ax : 4555 === bd ? "Invalid Account Error. Please Try Again." + ax : 4557 <= bd && bd <= 4560 ?
			"Please try again later!" + ax : "Unknown error" + ax
	}

	function aKj(bd) {
		aWp(bd), aT.bW.y4()
	}

	function aWp(bd) {
		var aGQ = eY.tP();
		6 === aGQ ? bj.bW.bk(bd) : bQ.bZ ? (aT.bh(), bQ.bi(), bj.bW.close(bj.bW.yI, 3256)) : 8 === aGQ && eq.aE6(!0)
	}
	this.aWI = [], this.yZ = function(dj, bd) {
		if (this.aWI.push(bd), 8 === aT.dK && 0 === dj)
			if (4211 === bd) aWo(bd);
			else {
				if (bQ.bZ && (4495 === bd || 4480 === bd) && bj.bW.yI !== dj) return void aT.f1();
				if (8 !== eY.tP() && aWp(), 4480 === bd) return bp.bq.aV8(), void aT.bl(4, 0, new tZ(L(516), L(517), !0));
				aT.bl(4, 0, new tZ(L(514), aWr(bd), !0))
			}
		else {
			var aGQ = eY.tP();
			if (6 === aGQ) {
				if (4211 === bd) return void aWo(bd);
				if (4215 !== bd && 4516 !== bd && 4527 !== bd && 4533 !== bd && 4528 !== bd && !(4557 <= bd && bd <= 4560)) return void eQ.aB2(dj)
			} else {
				if (!bQ.bZ) return 8 === aGQ ? void(dj !== bj.bW.oV || eq.l6 || 1 !== eq.ku || eq.lQ || gG.a9m(L(515, [bd]))) : void 0;
				if (dj !== bj.bW.yI) return
			}
			aWs(bd)
		}
	}, this.yW = function(bd) {
		this.aWI.push(bd), 8 === eY.tP() ? eq.l6 || 1 !== eq.ku || gG.a9m(L(515, [bd])) : aWs(bd)
	}, this.aWK = function() {
		this.aWI.push(3268), aKj(3268)
	}
}

function aLY() {
	var aB = 0,
		av = eW.av;
	this.eO = 0, this.w = function() {
		eR.w(), eq.l3 ? qn() : 0 === aB ? eW.av >= av && (av += eW.rf * Math.floor(1 + (eW.av - av) / eW.rf), 2 === eq.ku || gF.lf ? qe() : (qg(), hD.q2()), aB++) : ((gF.lf ? qn : (eW.eX = !0, qm))(), aB = 0), qk(), eW.eX && (eW.eX = !1, qG())
	}
}

function fG(fd, type, aWt, aWu) {
	var bd;
	this.bd = document.createElement("input"), (bd = this.bd).type = type ? "number" : "text", bd.id = "input" + aT.bW.y2++, bd.value = fd.value, bd.style.width = "100%", bd.style.userSelect = "none", bd.style.outline = "none", bd.style.resize =
		"none", bd.style.border = "inherit", bd.style.font = "inherit", bd.style.color = t.u, bd.style.backgroundColor = t.aDJ, bd.style.fontSize = "1em", bd.style.padding = "0.1em 0.2em", bd.addEventListener("focus", function() {
			eR.a2a++
		}), bd.addEventListener("blur", function() {
			eR.a2a--, -1 !== fd.aB && bp.bq.br(fd.aB, bd.value)
		}), bd.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== fd.aB && bp.bq.br(fd.aB, bd.value), aWt ? aWt() : bd.blur())
		}), aWu && bd.addEventListener("input", function(ka) {
			aWu(ka)
		})
}

function iJ() {
	var aWv, aWw, yn, aIU;
	this.ck = function() {
		var a4, dF, dE, x3, aWx, cv, cw, lI, t2, b4, a9, ec, v7, aN, aMd;
		if (function() {
				if (yn = !0, aIU = "rgb(" + cC.tg[0] + "," + cC.tg[1] + "," + cC.tg[2] + ")", cC.u6(cC.cE)) return 1;
				return yn = !1, 0
			}()) aWw = null;
		else {
			for (aWv = cf.cg(96, 4), aWx = 1 === cC.cE ? (x3 = 0, 160) : (x3 = 128, 32), aIU = "rgb(" + x3 + "," + x3 + "," + x3 + ")", aWw = new Array(4), a4 = 3; 0 <= a4; a4--) {
				if (aWw[a4] = document.createElement("canvas"), cv = a4 % 2 == 0 ? cC.mO : aWv, cw = a4 % 2 == 0 ? aWv : cC.mP + 2 * aWv, aWw[a4].width = cv, aWw[a4].height = cw, b4 = (t2 = (lI = aWw[a4].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, cv, cw)).data, a4 % 2 == 0)
					for (dE = aWv - 1; 0 <= dE; dE--)
						for (a9 = aWx + Math.floor((dE + 1) * (x3 - aWx) / (aWv + 1)), dF = cv - 1; 0 <= dF; dF--) b4[ec = 4 * ((0 === a4 ? aWv - dE - 1 : dE) * cv + dF)] = a9, b4[ec + 1] = a9, b4[ec + 2] = a9, b4[ec + 3] = 255;
				else {
					for (dF = aWv - 1; 0 <= dF; dF--)
						for (a9 = aWx + Math.floor((dF + 1) * (x3 - aWx) / (aWv + 1)), dE = cw - 1 - aWv; aWv <= dE; dE--) b4[ec = 4 * (dE * cv + (3 === a4 ? aWv - dF - 1 : dF))] = a9, b4[ec + 1] = a9, b4[ec + 2] = a9, b4[ec + 3] = 255;
					for (aN = 1; 0 <= aN; aN--)
						for (dF = aWv - 1; 0 <= dF; dF--)
							for (dE = aWv - 1; 0 <= dE; dE--) v7 = (Math.pow(dF * dF + dE * dE, .5) + 1) / (aWv + 1), a9 = aWx + Math.floor((1 < v7 ? 1 : v7) * (x3 - aWx)), b4[ec = 4 * ((0 === aN ? aWv - dE - 1 : dE + aN * (cw - aWv)) * cv + (
								1 === a4 ? dF : aWv - dF - 1))] = a9, b4[ec + 1] = a9, b4[ec + 2] = a9, b4[ec + 3] = 255
				}
				lI.putImageData(t2, 0, 0)
			}
			aMd = aWx, cC.te.fillStyle = "rgb(" + aMd + "," + aMd + "," + aMd + ")", cC.te.fillRect(0, 0, cC.mO, 1), cC.te.fillRect(0, cC.mP - 1, cC.mO, 1), cC.te.fillRect(0, 0, 1, cC.mP), cC.te.fillRect(cC.mO - 1, 0, 1, cC.mP)
		}
	}, this.qH = function() {
		var aN = yn ? 0 : -aWv;
		pO(aN, aN, cC.mO - 2 * aN, cC.mP - 2 * aN, hC.a8b, hC.a8c, hC.a8d, hC.a8e) || (m0.fillStyle = aIU, m0.fillRect(0, 0, eR.cv, eR.cw))
	}, this.eZ = function() {
		yn || (pL(0, -aWv, cC.mO, aWv, hC.a8b, hC.a8c, hC.a8d, hC.a8e) && m0.drawImage(aWw[0], hC.a8Z, hC.a8a - aWv), pL(cC.mO, -aWv, aWv, cC.mP + 2 * aWv, hC.a8b, hC.a8c, hC.a8d, hC.a8e) && m0.drawImage(aWw[1], hC.a8Z + cC.mO, hC.a8a - aWv), pL(
			0, cC.mP, cC.mO, aWv, hC.a8b, hC.a8c, hC.a8d, hC.a8e) && m0.drawImage(aWw[2], hC.a8Z, hC.a8a + cC.mP), pL(-aWv, -aWv, aWv, cC.mP + 2 * aWv, hC.a8b, hC.a8c, hC.a8d, hC.a8e) && m0.drawImage(aWw[3], hC.a8Z - aWv, hC.a8a - aWv))
	}
}

function aWN() {
	this.nn = 0, this.ck = function() {
		this.nn = 0
	}, this.w = function() {
		if (!this.nn && eW.et() % 30 == 7 && aZ.d.s5(80) && (ga.performance.nn = 1)) {
			if (eq.p6) {
				var wX = hH.sF();
				if (hG.qZ[wX]) {
					hH.qb(wX);
					var z = h2.qd,
						a5 = h2.qc[0];
					if (0 !== a5)
						for (var aX4 = Math.min(100 + 10 * (a5 - 1), 400), a4 = 0; a4 < a5; a4++) g7.a9C(z[a4], aX4)
				}
			}
			g7.a9C(je[0], 100)
		}
	}
}

function hi() {
	var aX5, aX6, aX7;
	aX5 = [32, 65, 191, 913, 931], aX6 = [64, 127, 688, 930, 1155], aX7 = new Array(aX5.length + 1);
	for (var a4 = 0; a4 < aX7.length; a4++) {
		aX7[a4] = 0;
		for (var aN = a4 - 1; 0 <= aN; aN--) aX7[a4] += aX6[aN] - aX5[aN]
	}

	function aXD(af) {
		for (var a4 = aX5.length - 1; 0 <= a4; a4--)
			if (af >= aX5[a4] && af < aX6[a4]) return a4;
		return -1
	}
	this.pd = function(ax) {
		return 0 !== (ax = ax.trim()).indexOf("Bot ") && 0 !== ax.indexOf("[Bot] ") && function(ax, aXA, aXB) {
			var a5 = (ax = ax.trim()).length;
			if (a5 < aXA || aXB < a5) return !1;
			for (var af, aXC = 0, a4 = 0; a4 < a5; a4++)
				if (af = ax.charCodeAt(a4), aXC += 65 <= af && af <= 90 || 1040 <= af && af <= 1071 ? 1 : 0, -1 === aXD(af)) return !1;
			if (3 < aXC && aXC > Math.floor(a5 / 2)) return !1;
			return !0
		}(ax, 3, 20)
	}, this.a1a = function(ax) {
		for (var a5 = (ax = ax.trim()).length, z = [], a4 = 0; a4 < a5; a4++) {
			var af, ec = aXD(af = ax.charCodeAt(a4));
			z.push(aX7[ec] + af - aX5[ec])
		}
		return z
	}, this.aCJ = function(z) {
		for (var af, bw, ax = "", a5 = z.length, a4 = 0; a4 < a5; a4++)
			for (bw = 1; bw < aX7.length; bw++)
				if (z[a4] < aX7[bw]) {
					af = aX5[bw - 1] + z[a4] - aX7[bw - 1], ax += String.fromCharCode(af);
					break
				} return ax
	}, this.aXE = function(ax) {
		for (var z = this.a1a(ax), result = "", a4 = 0; a4 < z.length; a4++) result = (result += z[a4] < 10 ? "00" : z[a4] < 100 ? "0" : "") + z[a4].toString(10);
		return result
	}, this.aXF = function(ax) {
		for (var z = new Array(Math.floor(ax.length / 3)), a4 = 0; a4 < ax.length; a4 += 3) z[Math.floor(a4 / 3)] = parseInt(ax.substring(a4, a4 + 3));
		return this.aCJ(z)
	}, this.aXG = function(ax) {
		for (var a9, z = [ax.length], a4 = 0; a4 < ax.length; a4++) z[a4] = ax.charCodeAt(a4) - 48;
		var result = "";
		for (a4 = 0; a4 < ax.length; a4++) a4 === ax.length - 1 || 51 < 10 * z[a4] + z[a4 + 1] ? result += z[a4].toString() : (a9 = 10 * z[a4] + z[a4 + 1], result += String.fromCharCode(a9 + (a9 < 26 ? 65 : 71)), a4++);
		return result
	}, this.aXH = function(ax) {
		for (var af, result = "", a4 = 0; a4 < ax.length; a4++) 48 <= (af = ax.charCodeAt(a4)) && af < 58 ? result += String.fromCharCode(af) : 65 <= af && af < 75 ? result += "0" + (af - 65).toString() : 75 <= af && af < 91 ? result += (af - 65)
			.toString() : 97 <= af && af < 123 && (result += (af - 71).toString());
		return result
	}, this.aXI = function(ax) {
		for (var a5 = ax.length, z = [], a4 = 0; a4 < a5; a4++)(af = ax.charCodeAt(a4)) < 58 ? z.push(ax[a4]) : (af -= af < 91 ? 65 : 71, z.push(String(cf.cg(af, 10))), z.push(String(af - 10 * cf.cg(af, 10))));
		var a5 = z.length - 2,
			af = 0,
			jS = [];
		for (a4 = 0; a4 < a5; a4 += 3) jS[af++] = parseInt(z[a4] + z[a4 + 1] + z[a4 + 2]);
		return jS
	}, this.yK = function() {
		for (var t6, aXJ = "", a4 = 0; a4 < 6; a4++) t6 = 48 + gi.random() % 36, t6 += 58 <= t6 ? 39 : 0, aXJ += String.fromCharCode(t6);
		return aXJ
	}
}

function hj() {
	var bU, dF, dE, aXK, aXL, aXM, av, aXN, aXO, aXP, aXQ, gap, zoom, aXR, aXS;

	function aXf(ll, lm, rJ) {
		gR.pZ(rJ) || -1 === (ll = h1.cY.aOw(ll, lm)) ? gG.a9q(rJ) : gG.a9u(ll)
	}

	function aXc(aXN) {
		for (var a4 = aXR.length - 1; 0 <= a4; a4--)
			if (aXR[a4] === aXN) return 1
	}

	function aXa(oo) {
		var a4, a5;
		if (-1 !== oo)
			for (a5 = bU.length, a4 = 0; a4 < a5; a4++)
				if (bU[a4].lJ && bU[a4].dF + 1 === oo % 4 && bU[a4].dE + 1 === oo >> 2) return a4;
		return -1
	}

	function aXY(ll, lm) {
		var rh = gap / 2;
		return ll < dF - aXK - 3 * rh || dF + 3 * aXK + 5 * rh < ll || lm < dE - aXK - 3 * rh || dE + 2 * aXK + 3 * rh < lm ? -1 : 4 * (lm < dE - rh ? 0 : lm < dE + aXK + rh ? 1 : 2) + (ll < dF - rh ? 0 : ll < dF + aXK + rh ? 1 : ll < dF + 2 * aXK +
			3 * rh ? 2 : 3)
	}
	this.aQf = function() {
		var a4, bw, aXU = [t.a00, t.aXV, t.vO, t.aXW, t.aXX];
		for (bU = new Array(10), a4 = 0; a4 < 10; a4++) bU[a4] = {
			id: a4,
			lJ: !1,
			x9: 0,
			canvas: [],
			dF: 0,
			dE: 0
		};
		for (bU[0].colors = [0, 1, 2, 3], bU[0].dF = 0, bU[0].dE = 0, bU[1].colors = [1, 4], bU[1].dF = 1, bU[1].dE = 0, bU[2].colors = [0, 1], bU[2].dF = -1, bU[2].dE = 0, bU[3].colors = [0], bU[3].dF = 0, bU[3].dE = 0, bU[4].colors = [0, 2],
			bU[4].dF = 1, bU[4].dE = 1, bU[5].colors = [3], bU[5].dF = 0, bU[5].dE = -1, bU[6].id = 20, bU[6].colors = [0], bU[6].dF = 1, bU[6].dE = -1, bU[7].id = 21, bU[7].colors = [0], bU[7].dF = 0, bU[7].dE = 1, bU[8].id = 16, bU[8]
			.colors = [0], bU[8].dF = 0, bU[8].dE = 0, bU[9].id = 10, bU[9].colors = [4], bU[9].dF = 2, bU[9].dE = 0, a4 = 0; a4 < 10; a4++)
			for (bw = 0; bw < bU[a4].colors.length; bw++) bU[a4].canvas.push(function(id, aMz) {
				if (id < 20) return aZ.canvas.a01(gQ.get(3), id, aMz);
				var aMz = gQ.get(3).height,
					a46 = aZ.aa.aEc(aMz, aMz),
					d6 = aZ.aa.getContext(a46);
				20 === id ? d6.drawImage(gQ.get(18), 0, 0) : 21 === id && b0.b4.a0H(b0.b1.a04 + b0.b1.aVT, d6, 0, 0, aMz);
				return a46
			}(bU[a4].id, aXU[bU[a4].colors[bw]]))
	}, this.a7B = function() {
		return bU
	}, this.ck = function() {
		aXR = [], dF = dE = av = 0, aXL = aXM = -1e3, this.resize()
	}, this.resize = function() {
		aXK = Math.floor((d0.jF.lR() ? .075 : .0468) * eR.lS), zoom = aXK / gQ.get(3).height, gap = Math.floor(aXK / 3)
	}, this.a2R = function(ll, lm) {
		return !!this.lJ() && (eW.eX = !0, !!b0.b4.lp(ll, lm, aXO) || (ll = function(ll, lm) {
			aXM = aXL = -1e3;
			var aXZ = aXa(aXY(ll, lm));
			if (-1 === aXZ) return 0;
			if (1 !== bU[aXZ].colors[bU[aXZ].x9])
				if (5 === aXZ) {
					if (! function() {
							var jl = performance.now();
							aXS + 4e3 < jl && (aXR = []);
							aXS = jl
						}(), aXc(aXN)) return 1;
					aXR.push(aXN), 16 < aXR.length && aXR.shift()
				} else if (6 === aXZ) {
				for (var a4 = aXR.length - 1; 0 <= a4; a4--) 0 === ei.kv[aXR[a4]] && aXR.splice(a4, 1);
				0 < aXR.length && (go.nd(1, aXR, !0) && gq.d.aXd(aXR, aXN), aXR = [])
			} else if (2 === aXZ) gZ.aKJ(aXN) && gq.b.a7t(gJ.ld(), aXN);
			else if (3 === aXZ) eq.l3 && gq.b.aIq(aXP);
			else if (0 === aXZ)
				if (0 === bU[0].x9) {
					if (eq.aDy && at.rP() < 350) return 1;
					h7.tU(4), gq.b.on(gJ.ld(), aXN)
				} else gk.op(aXN, gJ.ld());
			else if (1 === aXZ) gq.b.a0J(gJ.ld(), aXP);
			else if (9 === aXZ) gq.b.a0M(gJ.ld());
			else {
				if (7 === aXZ) return h7.tU(0), b0.b4.show(ll, lm), 2;
				if (4 === aXZ) go.nd(0, [aXN], !0) && gq.d.a9c(aXN);
				else {
					if (8 !== aXZ) return 0;
					gq.b.aJE(gJ.ld(), aXQ, aXN)
				}
			}
			return 1
		}(ll, lm), this.aY(), 2 === ll && (b0.b4.lJ = !0), 0 < ll))
	}, this.xv = function(ll, lm) {
		this.lJ() || (aXL = ll, aXM = lm, av = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = h0.z6(mouseX),
			coordY = h0.z7(mouseY),
			coord = h0.z9(coordX, coordY),
			coord = h0.pY(coord);
		h0.z8(coordX, coordY) && aXf(mouseX, mouseY, coord)
	}, this.click = function(ll, lm, a2Y) {
		var oB = h0.z6(ll),
			oC = h0.z7(lm),
			mV = h0.z9(oB, oC),
			rJ = h0.pY(mV);
		return !(!h0.z8(oB, oC) || (oB = (d0.jF.lR() ? .025 : .0144) * eR.lS, oC = performance.now(), Math.abs(ll - aXL) > oB) || Math.abs(lm - aXM) > oB || av + 500 < oC) && (av = oC, a2Y ? (aXf(ll, lm, rJ), !1) : gF.lf || this.lJ() || !aZ.d.rc(
			eq.jj) || eq.lQ ? (this.aY(), !1) : (eq.l3 ? 0 <= (aXP = hP.aKV(mV)) && (bU[3].lJ = !0) : 2 === eq.ku ? gR.sn(rJ) && (aXN = gR.sZ(rJ), aZ.d.el(aXN) || (bU[0].lJ = !0, bU[0].x9 = 1, bU[7].lJ = !0)) : (h1.o6.aKJ(eq.jj, mV) && (
			bU[0].lJ = !0, bU[0].x9 = 1, bU[1].lJ = !0, bU[1].x9 = 0, bU[9].lJ = !0, bU[9].x9 = 0), h1.aKY.aKZ(eq.jj, mV) && (bU[0].lJ = !0, bU[0].x9 = 1, bU[1].lJ = !0, bU[1].x9 = 1, aXP = h2.oD[7]), gR.a9t(rJ) ? (aXQ = gY.vg
			.aKW(rJ)) && (oB = h0.pY(aXQ), bU[8].lJ = !0, aXN = gR.sI(oB) ? eq.fE : gR.sZ(oB)) : (gR.a36(eq.jj, rJ) && (aXO = eq.jj, bU[0].lJ = !0, bU[0].x9 = 1, bU[7].lJ = !0), -1 !== (oC = hP.aKX(mV)) && (gR.sI(oC << 2) ? (aXN =
			eq.fE, hQ.aDU(eq.jj) ? (bU[0].lJ = !0, bU[0].x9 = 0) : gS.oh(eq.jj) && (bU[0].lJ = !0, bU[0].x9 = 3)) : (aXN = gR.sZ(oC << 2), bU[0].x9 = 1, bU[5].lJ = function(aXN) {
			return !aZ.d.el(aXN) && !aXc(aXN) && go.nd(1, [aXN], !1)
		}(aXN), bU[7].lJ || aZ.d.el(aXN) || (aXO = aXN, bU[7].lJ = !0), bU[4].lJ = !aZ.d.el(aXN) && !gU.a7H(aXN) && go.nd(0, [aXN], !1), bU[6].lJ = function(aXN) {
			if (0 === aXR.length) return !1;
			if (performance.now() > aXS + 4e3) return !(aXR = []);
			return !aXc(aXN) && ! function(aXN) {
				var a4;
				if (eq.p6)
					for (a4 = aXR.length - 1; 0 <= a4; a4--)
						if (!hQ.sU(aXN, aXR[a4])) return 1;
				return
			}(aXN)
		}(aXN), hQ.sU(aXN, eq.jj) ? (hQ.aDW(eq.jj, aXN) ? (bU[0].x9 = 0, bU[0].lJ = !0) : gS.oh(eq.jj) && (bU[0].x9 = 3, bU[0].lJ = !0), bU[0].lJ = this.aXk()) : (bU[2].lJ = !0, gZ.aKJ(aXN) ? bU[2].x9 = 0 : bU[2].x9 =
			1, bU[0].lJ = !0))))), this.aXg(ll, lm)))
	}, this.aXg = function(ll, lm) {
		return dF = ll - Math.floor(aXK / 2), dE = lm - Math.floor(aXK / 2), !!this.lJ()
	}, this.ly = function(ll, lm) {
		return !!this.lJ() && (b0.b4.lJ ? !b0.b4.a0D(ll, lm) && (b0.b4.lJ = !1, eW.eX = !0) : function(ls, ll, lm) {
			ll = aXY(ll, lm);
			if (0 <= aXa(ll)) return !1;
			if ((1 === ll || 6 === ll) && 0 <= aXa(2)) return !1;
			if ((6 === ll || 9 === ll) && 0 <= aXa(10)) return !1;
			return ls.aY(), eW.eX = !0
		}(this, ll, lm))
	}, this.aY = function() {
		for (var a4 = bU.length - 1; 0 <= a4; a4--) bU[a4].lJ = !1, bU[a4].x9 = 0;
		b0.b4.lJ = !1
	}, this.lJ = function() {
		return this.aXk() || b0.b4.lJ
	}, this.aXk = function() {
		for (var a5 = bU.length, a4 = 0; a4 < a5; a4++)
			if (bU[a4].lJ) return !0;
		return !1
	}, this.eZ = function() {
		if (this.lJ())
			if (b0.b4.lJ) b0.b4.eZ();
			else {
				var a4, d6 = m0,
					bw = bU,
					a5 = bw.length,
					aXp = (aXK + gap) / zoom;
				for (d6.imageSmoothingEnabled = !0, d6.setTransform(zoom, 0, 0, zoom, dF, dE), a4 = 0; a4 < a5; a4++) bw[a4].lJ && m0.drawImage(bw[a4].canvas[bw[a4].x9], bw[a4].dF * aXp, bw[a4].dE * aXp);
				d6.imageSmoothingEnabled = !1, d6.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function i7() {
	this.aCW = function() {
		var aXs;
		return !(ed.ee < 3 || ei.jd[je[0]] >= eq.rA >> 1) && (eq.p6 ? 9 !== eq.l1 && (aXs = gT.a7y(), !(2 * gT.a80(hH.sF()) >= aXs)) : function() {
			if (8 === eq.l1) return !1;
			var aXs = gT.a7y();
			if (2 * ei.rM[je[0]] >= aXs) return !1;
			return !0
		}())
	}
}

function aMe() {
	var zq = 32,
		b5 = new Array(2);

	function aEc(af) {
		var dF, dE, mV, mq, mp, nI = zq,
			a46 = aZ.aa.aEc(nI, nI),
			d6 = aZ.aa.getContext(a46, !0),
			t2 = aZ.aa.getImageData(d6, nI, nI),
			b4 = t2.data,
			rQ = (nI >> 1) - .5,
			a4m = Math.sqrt(rQ * rQ);
		for (b4.fill(255), dE = 0; dE < nI; dE++)
			for (dF = 0; dF < nI; dF++) mp = dF - rQ, mq = dE - rQ, mV = 4 * (dE * nI + dF), mp = 714 * (a4m - Math.sqrt(mp * mp + mq * mq)) / a4m, b4[2 + mV] = af, b4[3 + mV] = 255 < mp ? 0 : mp;
		return d6.putImageData(t2, 0, 0), a46
	}
	this.aXu = -1, this.ck = function() {
		this.aXu = -1, b5[0] || (b5[0] = aEc(255), b5[1] = aEc(0))
	}, this.aR4 = function(d6, rJ, dF, dE, t6, a4) {
		aZ.d.rc(eq.jj) && (d6.setTransform(rJ *= 4 / 3 * .625, 0, 0, rJ, dF - (t6 *= 4 / 3), dE - t6), d6.drawImage(b5[+(h1.bW.o2[a4] === this.aXu)], 0, 0))
	}
}

function aTw() {
	this.yU = !1, this.w = function() {
		eW.et() % 250 != 249 || eq.lQ || (bj.n9.oS(+(this.yU && ei.kv[eq.jj]), ed.ee + h1.bW.pR), this.yU = !1)
	}
}

function j8() {
	function aXy(dF, a5, dE, eC, aFM, aQr) {
		if (!(dE < 1 || aFM < dE))
			for (var a4 = 0; a4 <= a5; a4++) {
				var rJ = h0.zA(dF, dE);
				if (eC(rJ)) return rJ >> 2;
				dF += aQr
			}
		return -1
	}

	function aY2(dE, a5, dF, eC, aXw, aQr) {
		if (!(dF < 1 || aXw < dF)) {
			a5 = Math.max(a5, 0);
			for (var a4 = 0; a4 <= a5; a4++) {
				var rJ = h0.zA(dF, dE);
				if (eC(rJ)) return rJ >> 2;
				dE += aQr
			}
		}
		return -1
	}

	function aY6(yx, yy, pV) {
		return -1 !== yy && (-1 === yx || h0.yz(yy, pV) < h0.yz(yx, pV)) ? yy : yx
	}
	this.aKV = function(pV) {
		return this.bf(pV, function(rJ) {
			return gR.pZ(rJ)
		})
	}, this.aKX = function(pV) {
		return this.bf(pV, function(rJ) {
			return gR.aDQ(rJ, eq.jj)
		})
	}, this.bf = function(pV, eC) {
		return function(pV, aP4, eC) {
			for (var oB = h0.mZ(pV), oC = h0.mb(pV), aXw = cC.mO - 2, aFM = cC.mP - 2, aXx = -1, dh = 0; dh < aP4; dh++) {
				var aFL = Math.max(oB - dh, 1),
					aGk = Math.max(oC - dh, 1),
					aGl = Math.min(oB + dh, aXw),
					aGc = Math.min(oC + dh, aFM),
					yx = aXy(oB, aGl - oB, oC - dh, eC, aFM, 1),
					yy = aXy(oB - 1, oB - aFL - 1, oC - dh, eC, aFM, -1),
					aGl = aXy(oB, aGl - oB, oC + dh, eC, aFM, 1),
					aFL = aXy(oB - 1, oB - aFL - 1, oC + dh, eC, aFM, -1),
					aY1 = aY2(oC, aGc - oC - 1, oB - dh, eC, aXw, 1),
					aY3 = aY2(oC - 1, oC - aGk - 2, oB - dh, eC, aXw, -1),
					aGc = aY2(oC, aGc - oC - 1, oB + dh, eC, aXw, 1),
					aGk = aY2(oC - 1, oC - aGk - 2, oB + dh, eC, aXw, -1);
				if (aXx = aY6(aXx, yx, pV), aXx = aY6(aXx, yy, pV), aXx = aY6(aXx, aGl, pV), aXx = aY6(aXx, aFL, pV), aXx = aY6(aXx, aY1, pV), aXx = aY6(aXx, aY3, pV), aXx = aY6(aXx, aGc, pV), 0 <= (aXx = aY6(aXx, aGk, pV)) && dh * dh >= h0
					.yz(aXx, pV)) return aXx
			}
			return -1
		}(pV, h0.yl(), eC)
	}
}

function aKO() {
	var qC = 12e3;
	this.show = function(aE7) {
		return !aE7 && !eU.qE() && (0 === d0.id ? eU.eV.show() : 2 === d0.id && !(eW.av < qC) && (qC = eW.av + 3e5, 2 === e1.e4) && d0.jF.aVQ(Math.floor(3e5)))
	}
}

function tZ(title, ov, aY7, ow) {
	var jq, ox;
	this.show = function() {
		jq.show(), this.resize()
	}, this.aY = function() {
		jq.aY()
	}, this.resize = function() {
		jq.resize(), ox.resize()
	}, this.ae = function(af) {
		2 === af && jq.ag[0].ah()
	}, ow = ow || [new aS("⬅️ " + L(1), function() {
		aT.f1()
	})], jq = new aR(title, ow), ox = new oz(jq.aV, ov), aY7 && aZ.aa.textAlign(jq.aV.style, 1)
}

function hy() {
	var aGQ = 0;
	this.ck = function() {
		gP.ck(), aGQ = 0
	}, this.setState = function(aY8) {
		aGQ = aY8
	}, this.tP = function() {
		return aGQ
	}, this.a3i = function() {
		this.setState(8), aT.bh()
	}, this.ae = function(bd) {
		if (!cC.th) return !1;
		if (!(eW.av < 400)) {
			if ("Enter" === bd.key || "Escape" === bd.key) {
				if (this.aY9()) return !0;
				if ("Enter" === bd.key) {
					if (0 === aGQ) return !0;
					if (7 === aGQ) return !0
				}
			}
			return !1
		}
	}, this.aEh = function() {
		hB.resize()
	}, this.aY9 = function() {
		return !!hB.aY()
	}, this.lp = function(dF, dE) {
		!cC.th || hB.lp(dF, dE) || 6 === aGQ && eQ.lp(dF, dE) || hA.lp(dF, dE) || gL.lp(dF, dE)
	}, this.ly = function(dF, dE) {
		!gL.aFW && gP.ly(dF, dE, !0) || gL.ly(dF, dE)
	}, this.click = function(dF, dE) {
		gL.a2W()
	}, this.lx = function(dF, dE, deltaY) {}, this.aEi = function() {
		gP.aFb(), eW.eX = !0
	}, this.eZ = function() {
		8 !== aGQ && 10 !== aGQ && (m0.imageSmoothingEnabled = !0, this.qH(), 0 !== aGQ && (gL.eZ(), eP.eZ(), this.aVK(), hA.eZ()), 0 !== aGQ && 6 === aGQ && eQ.eZ(), hB.eZ(), aT.eZ())
	}, this.qH = function() {
		var aYB, aYA;
		if (__fx.makeMainMenuTransparent) m0.clearRect(0, 0, eR.cv, eR.cw);
		else cC.th ? (aYA = eR.cv / cC.mO, aYB = eR.cw / cC.mP, m0.setTransform(aYA = aYB < aYA ? aYA : aYB, 0, 0, aYA, Math.floor((eR.cv - aYA * cC.mO) / 2), Math.floor((eR.cw - aYA * cC.mP) / 2)), m0.drawImage(cC.qI, 0, 0), m0.setTransform(1,
			0, 0, 1, 0, 0), m0.fillStyle = t.vP) : m0.fillStyle = t.wc, m0.fillRect(0, 0, eR.cv, eR.cw)
	}, this.aVK = function() {
		var dE = Math.floor(.3 * eR.cw),
			canvas = gQ.aLi("territorial.io"),
			t4 = (t4 = 1.75 * eR.cw / canvas.width) * canvas.width < .98 * eR.cv ? .98 * eR.cv / canvas.width : t4,
			dF = (m0.globalAlpha = .15, m0.imageSmoothingEnabled = !1, Math.floor(.5 * (eR.cv - t4 * canvas.width))),
			dF = Math.floor(dF / t4),
			dE = Math.floor(dE - .5 * canvas.height * t4),
			dE = Math.floor(dE / t4);
		m0.setTransform(t4, 0, 0, t4, dF, dE), m0.drawImage(canvas, dF, dE), m0.setTransform(1, 0, 0, 1, 0, 0), m0.globalAlpha = 1, m0.imageSmoothingEnabled = !0
	}
}

function e() {
	this.a0F = function(ay, player) {
		gG.a0E(eq.jj, player, ay), bj.yA.aW7(ay, player)
	}, this.a9c = function(player) {
		gG.a3u(player, 0), bj.yA.aWA(player)
	}, this.aXd = function(aXR, player) {
		gG.aA5(aXR, player), bj.yA.aWB(aXR, player)
	}, this.pB = function() {
		eq.l6 || eq.lQ || bj.aTy.pB()
	}
}

function aE2() {
	this.qF = function(player, mV) {
		gB.aT3(player, h0.mZ(mV), h0.mb(mV)) && (eW.eX = !0), eq.l6 && this.w()
	}, this.w = function() {
		eq.l3 = !1;
		for (var a4 = 0; a4 < eq.er; a4++) 0 !== ei.kv[a4] && 0 === ei.jd[a4] && gB.aT8(a4);
		0 !== ei.kv[eq.jj] ? (hE.jk[7] = ei.jd[eq.jj], hE.jk[8] = ei.rM[eq.jj], gJ.li(), at.rE(), eq.lQ || gA.mN(ei.ml[eq.jj] - 5, ei.mn[eq.jj] - 5, ei.mm[eq.jj] + 5, ei.mo[eq.jj] + 5), gg.ck()) : gO.show(!1, !1, !1, !0), gG.a9g(18), gU.uP(), gU
			.l0(!0), h3.bW.aQy(), gE.aY(), eq.l7 = null, hD.q0 = !0, hD.q4(), eq.l6 && d0.jF.setState(1)
	}
}

function aOO() {
	this.a7U = function(z) {
		z.fill(0)
	}, this.aTC = function(z) {
		for (var a5 = z.length, a4 = 0; a4 < a5; a4++) z[a4] = []
	}, this.aIZ = function(wt, lw) {
		for (var wu = h2.aQJ, a4 = 0; a4 < 3; a4++) wu[a4] = lw * wt[a4];
		return wu
	}, this.aIa = function(wt, wu, aYC) {
		for (var ru = 0, a4 = 0; a4 < 3; a4++) ru += Math.abs(wt[a4] - wu[a4]);
		return aYC <= ru
	}, this.aIb = function(wt, aYD) {
		for (var a4 = 0; a4 < 3; a4++) wt[a4] = cf.fH(wt[a4] + aYD, 0, 255);
		return wt
	}, this.zg = function(z, jy, jz) {
		jz = jz || z.length - 1;
		for (var aCe = 0, a4 = jy = jy || 0; a4 <= jz; a4++) aCe += z[a4];
		return aCe
	}, this.aYE = function(z, aYF) {
		for (var a4, a21, a5 = z.length, aYG = [], aN = a5 - 1; 0 <= aN; aN--) {
			for (a4 = a21 = 0; a4 < a5; a4++) aYF(z[a4]) < aYF(z[a21]) && (a21 = a4);
			a5--, aYG.push(z[a21]), z[a21] = z[a5], z.pop()
		}
		return aYG
	}, this.min = function(z) {
		var a4, a9, a5 = z.length;
		if (0 === a5) return 0;
		for (a9 = z[0], a4 = 1; a4 < a5; a4++) a9 = Math.min(a9, z[a4]);
		return a9
	}, this.max = function(z) {
		var a5 = z.length;
		if (0 === a5) return 0;
		for (var a9 = z[0], a4 = 1; a4 < a5; a4++) a9 = Math.max(a9, z[a4]);
		return a9
	}, this.aLR = function(z, a9) {
		for (var a5 = z.length, aI = 0, a4 = 0; a4 < a5; a4++) aI += z[a4] > a9;
		return aI
	}, this.aYH = function(v2, v5, min) {
		for (var a5 = v5[0], a4 = a5 - 1; 0 <= a4; a4--) v2[a4] < min && (v2[a4] = v2[--a5]);
		v5[0] = a5
	}, this.aYI = function(z, a5, value) {
		for (var a4 = 0; a4 < a5; a4++) z[a4] -= value
	}, this.wA = function(z) {
		for (var a5 = z.length, a4 = 0; a4 < a5; a4++)
			if ("string" != typeof z[a4]) return !1;
		return !0
	}, this.f2 = function(ax, z, aYJ) {
		z.fill(0);
		for (var rh = ax.split(","), a5 = Math.min(rh.length, z.length), a4 = 0; a4 < a5; a4++) z[a4] = Math.min(parseInt(rh[a4]), aYJ)
	}, this.aF3 = function(ax, z, vN) {
		z.fill("");
		for (var rh = ax.split('"'), a5 = Math.min(rh.length, 2 * z.length), aA = 0, a4 = 1; a4 < a5; a4 += 2) z[aA++] = rh[a4].slice(0, vN)
	}, this.aLQ = function(z, aI) {
		if (0 === aI) z.fill(0);
		else {
			var aCe = this.zg(z),
				a5 = z.length;
			if (0 === aCe) z.fill(cf.cg(aI, a5));
			else
				for (var a4 = 0; a4 < a5; a4++) z[a4] = cf.cg(aI * z[a4], aCe);
			if (0 === (aCe = this.zg(z))) z[1] = aI;
			else
				for (var aA = 0; aCe++ < aI;) z[aA = (aA + 1) % a5] && z[aA]++
		}
	}, this.aGp = function(z) {
		if (!z) return 0;
		var a5 = z.length;
		if (0 === a5) return 0;
		for (var a9 = z[a5 - 1], a4 = a5 - 2; 0 <= a4; a4--)
			if (z[a4] !== a9) return a4 + 2;
		return 1
	}, this.cc = function(z) {
		for (var aCe = 0, a4 = 0; a4 < z.length; a4++) aCe += z[a4].length;
		return aCe
	}, this.zh = function(aYK) {
		for (var z = [], a4 = 0; a4 < aYK.length; a4++) z = z.concat(aYK[a4]);
		return z
	}, this.has = function(z, a9) {
		for (var a5 = z.length, a4 = 0; a4 < a5; a4++)
			if (z[a4] === a9) return !0;
		return !1
	}
}

function iU() {
	this.aE8 = new a8f, this.aE9 = new aJW, this.aF0 = new aRx, this.ck = function() {
		eq.lQ || this.aE8.ck()
	}, this.w = function() {
		eq.lQ || (this.aE8.w(), 3 !== aT.dK) || eW.et() % 15 != 5 && 2 !== eq.ku || aT.c0().aYM()
	}, this.aS4 = function() {
		0 === eq.ku && eY.a3i(), eq.aDp.aLS(), eq.data.canvas = null, bj.bW.close(bj.bW.oV, 3257), bj.bW.oV = 0, eq.data.isReplay = 1, eq.a3j()
	}, this.aYN = function(ax) {
		var a4 = ax.indexOf("=");
		return 0 <= a4 ? ax.substring(a4 + 1) : ax
	}, this.aYO = function(ax) {
		return "https://territorial.io/?replay=" + ax
	}
}

function hX() {
	var af = aZ.color;
	this.wc = af.nY(0, 0, 0), this.aDJ = af.nE(0, 0, 0, .7), this.vP = af.nE(0, 0, 0, .5), this.da = af.nE(0, 0, 0, .85), this.qO = af.nE(0, 0, 0, .75), this.vO = af.nE(0, 0, 0, .6), this.aCG = af.nE(0, 0, 0, .35), this.u = af.nY(255, 255, 255), this
		.aOH = af.nE(255, 255, 255, .3), this.aFi = af.nE(255, 255, 255, .6), this.aFf = af.nE(255, 255, 255, .4), this.aFr = af.nE(255, 255, 255, .25), this.aV5 = af.nE(255, 255, 255, .85), this.aTj = af.nE(255, 255, 255, .75), this.aYP = af.nE(255,
			255, 255, .15), this.aYQ = af.nE(255, 255, 255, .11), this.aLV = af.nY(128, 128, 128), this.aYR = af.nE(64, 64, 64, .75), this.aUU = af.nE(88, 88, 88, .83), this.db = af.nE(60, 60, 60, .85), this.aVG = af.nE(80, 60, 60, .85), this.k3 = af
		.nY(170, 170, 170), this.aw = af.nY(200, 235, 245), this.aWj = af.nY(30, 255, 30), this.aWi = af.nY(0, 200, 0), this.xa = af.nY(128, 255, 128), this.aYS = af.nE(10, 65, 10, .75), this.rK = af.nE(0, 255, 0, .6), this.aYT = af.nE(0, 255, 0,
		.5), this.aEL = af.nE(0, 200, 0, .5), this.a9W = af.nE(0, 100, 0, .75), this.a7f = af.nE(0, 60, 0, .8), this.c7 = af.nE(0, 255, 0, .3), this.a00 = af.nE(0, 180, 0, .6), this.aYU = af.nE(0, 120, 0, .85), this.aUc = af.nY(0, 120, 0), this.aVE =
		af.nE(0, 70, 0, .85), this.aYV = af.nY(190, 230, 190), this.k6 = af.nY(0, 255, 0), this.aYW = af.nY(255, 120, 120), this.sa = af.nY(255, 160, 160), this.aIm = af.nY(255, 70, 70), this.aUb = af.nY(230, 0, 0), this.aFh = af.nE(220, 0, 0, .6),
		this.aWn = af.nE(255, 100, 100, .8), this.a9n = af.nE(100, 0, 0, .85), this.a7e = af.nE(60, 0, 0, .85), this.aXV = af.nE(200, 0, 0, .6), this.oy = af.nE(120, 0, 0, .85), this.a9j = af.nY(255, 70, 10), this.kQ = af.nY(230, 190, 190), this.k4 =
		af.nY(255, 0, 0), this.k5 = af.nY(255, 0, 255), this.a7c = af.nE(60, 0, 60, .85), this.a7d = af.nE(0, 60, 60, .85), this.aWg = af.nE(10, 60, 60, .9), this.aYX = af.nE(0, 96, 96, .75), this.k7 = af.nY(0, 255, 255), this.a0L = af.nY(160, 160,
			255), this.aYY = af.nE(0, 40, 90, .75), this.aXX = af.nE(0, 0, 255, .6), this.aYZ = af.nY(200, 200, 255), this.aUT = af.nE(50, 50, 255, .83), this.rO = af.nY(255, 120, 100), this.aYa = af.nE(255, 255, 0, .5), this.aYb = af.nE(255, 255,
			150, .2), this.dS = af.nY(255, 255, 0), this.a9l = af.nY(255, 255, 200), this.aXW = af.nE(200, 200, 0, .6), this.aYc = af.nE(140, 120, 0, .75), this.aYd = af.nE(180, 160, 40, .75), this.aVF = af.nE(70, 50, 20, .85), this.aYe = af.nE(30,
			30, 0, .85), this.a7h = af.nE(60, 60, 0, .85), this.aYf = af.nY(255, 255, 100), this.k9 = af.nY(255, 255, 140), this.aRw = af.nE(255, 140, 0, .75), this.a7g = af.nE(70, 40, 0, .85), this.k8 = af.nY(255, 150, 0), this.a34 = af.nE(255, 200,
			80, .85), this.aTi = af.nE(0, 0, 0, 0), this.bJ = af.nE(255, 255, 255, 0), this.bK = af.nE(254, 254, 254, 0)
}

function iw() {
	this.aEg = new aTz, this.ck = function() {
		this.aEg.resize()
	}
}

function hw() {
	var aYg, aYh, aYi;

	function aYn(a4) {
		var button = gP.bU[a4],
			dF = button.dF,
			dE = button.dE,
			cv = button.cv,
			cw = button.cw;
		m0.fillStyle = button.aYl, m0.fillRect(dF, dE, cv, cw), a4 === aYg && (m0.fillStyle = aYi, m0.fillRect(dF, dE, cv, cw)), m0.lineWidth = ac.a0G, m0.strokeStyle = aYh, m0.strokeRect(dF, dE, cv, cw),
			function(button) {
				var dF = button.dF,
					dE = button.dE,
					cv = button.cv,
					cw = button.cw;
				aZ.aa.textAlign(m0, 1), aZ.aa.textBaseline(m0, 1), m0.font = button.font, m0.fillStyle = aYh, m0.fillText(button.ba, Math.floor(dF + cv / 2), Math.floor(dE + cw / 2 + .1 * button.fontSize))
			}(button)
	}
	this.cv = 0, this.cw = 0, this.dE = 0, this.gap = 0, this.ck = function() {
		aYg = -1, aYh = t.u, aYi = "rgba(255,255,255,0.16)", this.bU = new Array(7), this.cw = Math.floor((d0.jF.lR() ? .123 : .093) * eR.lS), this.cv = Math.floor((d0.jF.lR() ? 3.96 : 4.2) * this.cw), this.gap = Math.floor(.025 * this.cv);
		var aYj = Math.floor(.26 * this.cw),
			aYk = aZ.aa.lT(1, aYj);
		this.bU[0] = {
			dF: 0,
			dE: 0,
			cv: Math.floor(.6 * this.cv - this.gap / 2),
			cw: this.cw,
			ba: "Multiplayer",
			font: aYk,
			aYl: "rgba(22,88,22,0.8)",
			fontSize: aYj
		}, aYj = Math.floor(.18 * this.cw), aYk = aZ.aa.lT(1, aYj), this.bU[1] = {
			dF: 0,
			dE: 0,
			cv: this.cv - this.bU[0].cv - this.gap,
			cw: this.cw,
			ba: "Single Player",
			font: aYk,
			aYl: "rgba(22,88,88,0.8)",
			fontSize: aYj
		}, this.bU[2] = {
			dF: 0,
			dE: 0,
			cv: this.cv,
			cw: Math.floor(.3 * this.cw),
			ba: "",
			font: this.bU[1].font,
			aYl: "rgba(100,0,0,0.8)",
			fontSize: this.bU[1].fontSize
		}, this.bU[3] = {
			dF: 0,
			dE: 0,
			cv: this.cv,
			cw: this.cw,
			ba: "Back",
			font: this.bU[0].font,
			aYl: "rgba(0,0,0,0.8)",
			fontSize: this.bU[0].fontSize
		}, this.bU[4] = {
			dF: 0,
			dE: 0,
			cv: this.cv,
			cw: Math.floor(.3 * this.cw),
			ba: "The game was updated!",
			font: this.bU[1].font,
			aYl: "rgba(100,0,0,0.8)",
			fontSize: this.bU[1].fontSize
		}, this.bU[5] = {
			dF: 0,
			dE: 0,
			cv: this.bU[0].cv,
			cw: Math.floor(.8 * this.cw),
			ba: "Reload",
			font: this.bU[0].font,
			aYl: "rgba(0,100,0,0.8)",
			fontSize: this.bU[0].fontSize
		}, this.bU[6] = {
			dF: 0,
			dE: 0,
			cv: this.bU[1].cv,
			cw: this.bU[5].cw,
			ba: "Back",
			font: this.bU[0].font,
			aYl: "rgba(0,0,0,0.8)",
			fontSize: this.bU[0].fontSize
		}, this.aFb()
	}, this.aFb = function() {
		this.dE = Math.floor(.54 * eR.cw), this.bU[0].dF = Math.floor(.5 * eR.cv - .5 * this.cv), this.bU[1].dF = this.bU[0].dF + this.bU[0].cv + this.gap, this.bU[2].dF = this.bU[3].dF = this.bU[0].dF, this.bU[4].dF = this.bU[5].dF = this.bU[0]
			.dF, this.bU[6].dF = this.bU[1].dF, this.bU[0].dE = Math.floor(.54 * eR.cw), this.bU[1].dE = this.bU[0].dE, this.bU[2].dE = Math.floor((eR.cw - this.bU[2].cw - this.bU[3].cw - this.gap) / 2), this.bU[3].dE = this.bU[2].dE + this.bU[2]
			.cw + this.gap, this.bU[4].dE = Math.floor((eR.cw - this.bU[4].cw - this.bU[5].cw - this.gap) / 2), this.bU[5].dE = this.bU[6].dE = this.bU[4].dE + this.bU[4].cw + this.gap
	}, this.aYm = function() {
		aYn(0), aYn(1)
	}, this.aYo = function() {
		aYn(2), aYn(3)
	}, this.aYp = function() {
		aYn(4), aYn(5), aYn(6)
	}, this.ly = function(dF, dE, l0) {
		var a4 = -1;
		return 0 === eY.tP() ? a4 = this.lk(dF, dE, 0, 2) : 3 === eY.tP() ? a4 = this.lk(dF, dE, 3, 1) : 5 === eY.tP() && (a4 = this.lk(dF, dE, 5, 2)), aYg !== a4 && (aYg = a4, l0) && (eW.eX = !0), -1 !== a4 && (gL.bz(), !0)
	}, this.lk = function(dF, dE, aBp, size) {
		for (var a4 = aBp; a4 < aBp + size; a4++)
			if (dF >= this.bU[a4].dF && dE >= this.bU[a4].dE && dF <= this.bU[a4].dF + this.bU[a4].cv && dE <= this.bU[a4].dE + this.bU[a4].cw) return a4;
		return -1
	}
}

function aWO() {
	function aYt(player) {
		for (var a0W = ei.a0W[player], a5 = a0W.length, aQr = Math.max(cf.cg(a5, 12), 1), v1 = gR.v1, t6 = gi.o1(a5), a4 = 0; a4 < a5; a4 += aQr)
			for (var sm = a0W[(a4 + t6) % a5], dh = 3; 0 <= dh; dh--) {
				var sj = sm + v1[dh];
				if (gR.a9t(sj)) return {
					rJ: sj,
					id: gR.yo(sj),
					ec: player
				}
			}
		return null
	}

	function aYy(player, aYz) {
		var np = aZ.d.aJG(player, g7.a8z[g7.np[player]]);
		ei.rb[player].push(aYz.rJ), gS.qF(player, np, aYz.ec), g8.jn(player, !0)
	}
	this.w = function(player) {
		return !!cC.u5(cC.cE) && !!eq.data.passableMountains && 0 !== ei.a0W[player].length && function(player) {
			var aYs = aYt(player);
			if (null === aYs) return !1;
			! function(player) {
				for (var eg = ed.eg, ee = ed.ee, a5 = Math.min(ee, 12), lE = gi.o1(ee), a4l = h2.a4l, a0W = ei.a0W, aI = 0, a4 = 0; a4 < a5; a4++) {
					var ec = eg[(a4 + lE) % ee];
					ec !== player && a0W[ec].length && hQ.sU(player, ec) && (a4l[aI++] = ec)
				}
				h2.qc[0] = aI
			}(player);
			var aYv = function(aQi) {
				for (var a5 = h2.qc[0], a4l = h2.a4l, a4 = 0; a4 < a5; a4++) {
					var aYz = aYt(a4l[a4]);
					if (null !== aYz && aYz.id === aQi) return aYz
				}
				return null
			}(aYs.id);
			return null !== aYv ? (aYy(player, aYv), !0) : function(player, aQi) {
				var a5 = ga.sJ.sK;
				if (0 !== a5)
					for (var rJ = ga.sJ.cy[gi.o1(a5)] << 2, v1 = gR.v1, dh = gi.o1(4);;) {
						if (rJ += v1[dh], gR.a9t(rJ)) {
							if (gR.yo(rJ) === aQi) return aYy(player, {
								rJ: rJ,
								ec: eq.fE
							}), !0;
							break
						}
						if (!gR.sI(rJ)) break
					}
				return !1
			}(player, aYs.id)
		}(player)
	}
}

function he() {
	var size, aMf;
	this.ck = function() {
		size = eq.r9, aMf = new Uint16Array(eq.fE);
		for (var er = eq.er, a4 = eq.r9 - 1; 0 <= a4; a4--) aMf[a4] = er + a4
	}, this.w = function() {
		ga.aWP.w();
		for (var a4 = size - 1; 0 <= a4; a4--)
			if (0 === ei.kv[aMf[a4]]) {
				aN = void 0;
				var aN = a4;
				size--, aMf[aN] = aMf[size]
			} else g7.w(aMf[a4])
	}, this.aAl = function(ec) {
		aMf[size++] = ec
	}
}

function i5() {
	var aZ2, aZ3, size, oj, np, aZ4;

	function aZ5(player) {
		return player < eq.er ? aZ2 * player : aZ2 * eq.er + aZ3 * (player - eq.er)
	}
	this.ck = function() {
		aZ2 = eq.er < 16 ? 12 : 8, aZ3 = 4;
		var a5 = aZ5(eq.fE);
		size = new Uint8Array(eq.fE), oj = new Uint16Array(a5), np = new Uint32Array(a5), aZ4 = new Uint8Array(a5)
	}, this.aJ8 = function(aV1, aZ6) {
		var aZ7 = this.a0z(aV1, aZ6),
			aZ6 = (this.a0y(aV1, aZ6, 0), aZ.d.sq(aV1, aZ7));
		hE.sp(aV1, aZ7 - aZ6, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.a2z = function(player, aZ6) {
		var aZA, aZ6 = function(player, aZ6) {
			var a4, rQ = aZ5(player);
			for (a4 = size[player] - 1; 0 <= a4; a4--)
				if (oj[rQ + a4] === aZ6) return a4;
			return size[player]
		}(player, aZ6);
		aZ6 !== size[player] && (aZA = np[aZ5(player) + aZ6], this.a8V(player, aZ6), this.qF(player, aZA, eq.fE))
	}, this.ss = function(player, aZ6) {
		for (var rQ = aZ5(player), a4 = size[player] - 1; 0 <= a4; a4--)
			if (oj[rQ + a4] === aZ6) return !0;
		return !1
	}, this.st = function(player) {
		return player < eq.er ? size[player] < aZ2 : size[player] < aZ3
	}, this.oh = function(player) {
		return size[player]
	}, this.a8O = function(player, a4) {
		return oj[aZ5(player) + a4]
	}, this.a8P = function(player, a4) {
		return np[aZ5(player) + a4]
	}, this.a0z = function(player, aZ6) {
		for (var rQ = aZ5(player), a4 = size[player] - 1; 0 <= a4; a4--)
			if (oj[rQ + a4] === aZ6) return np[rQ + a4];
		return 0
	}, this.a2s = function(player) {
		for (var rQ = aZ5(player), a9 = 0, a4 = size[player] - 1; 0 <= a4; a4--) a9 += np[rQ + a4];
		return a9
	}, this.a0y = function(player, aZ6, aZA) {
		for (var rQ = aZ5(player), a4 = size[player] - 1; 0 <= a4; a4--) oj[rQ + a4] === aZ6 && (np[rQ + a4] = aZA)
	}, this.a0c = function(player, a4, aZA) {
		np[aZ5(player) + a4] = Math.max(aZA, 0)
	}, this.a0g = function(player, a4) {
		aZ4[aZ5(player) + a4] = 0
	}, this.a8Q = function(player, a4) {
		return aZ4[aZ5(player) + a4]
	}, this.qF = function(player, aZA, aZ6) {
		ga.a9A.aPe[player] = ga.a9A.aPe[aZ6] = 8, aZ.d.a2q(aZ6) && hE.jk[6 - aZ.d.el(player)]++;
		for (var rQ = aZ5(player), a4 = size[player] - 1; 0 <= a4; a4--)
			if (oj[rQ + a4] === aZ6) return np[rQ + a4] += aZA, void(np[rQ + a4] = np[rQ + a4] > eq.a6b ? eq.a6b : np[rQ + a4]);
		oj[rQ + size[player]] = aZ6, np[rQ + size[player]] = aZA, aZ4[rQ + size[player]] = 1, size[player]++, aZ6 === eq.jj ? gG.kq(player, 5) : player < eq.er && player === eq.jj && gU.a7F(aZ6)
	}, this.a8V = function(player, aB) {
		var aN, rQ;
		if (0 !== size[player])
			for (rQ = aZ5(player), size[player]--, aN = aB; aN < size[player]; aN++) oj[rQ + aN] = oj[rQ + aN + 1], np[rQ + aN] = np[rQ + aN + 1], aZ4[rQ + aN] = aZ4[rQ + aN + 1]
	}, this.a2m = function(player) {
		for (var aN, rQ, a2w = [], a4 = ed.ee - 1; 0 <= a4; a4--)
			for (rQ = aZ5(ed.eg[a4]), aN = size[ed.eg[a4]] - 1; 0 <= aN; aN--)
				if (oj[rQ + aN] === player) {
					a2w.push(ed.eg[a4]);
					break
				} return a2w
	}
}

function aOP() {
	this.kz = function(aGQ) {
		return 0 === aGQ ? 1 === eq.ku && eq.l3 : 1 === aGQ ? 1 === eq.ku && !eq.l3 : 2 === eq.ku
	}, this.rc = function(player) {
		return 0 !== ei.kv[player] && 2 !== ei.kw[player]
	}, this.a0K = function(player) {
		return player === eq.jj && 2 !== ei.kw[player]
	}, this.a4W = function(player, oj) {
		return player !== oj && (0 === hG.sG[player] || hG.sG[player] !== hG.sG[oj])
	}, this.aL7 = function() {
		return ed.ee < 2 ? 0 : eq.p6 ? 1 < hH.aCl() : ei.jd[je[1]]
	}, this.aTp = function() {
		var ee = ed.ee;
		if (0 !== ee) {
			if (!eq.p6) return !this.el(je[0]);
			for (var sG = hG.sG, wX = hH.sF(), eg = ed.eg, a4 = ee - 1; 0 <= a4; a4--) {
				var ec = eg[a4];
				if (sG[ec] === wX && !this.el(ec)) return 1
			}
		}
		return 0
	}, this.a2q = function(player) {
		return player === eq.jj
	}, this.sV = function(oj, d3) {
		return ei.rM[eq.jj] < d3 * ei.rM[oj]
	}, this.el = function(player) {
		return player >= eq.er || 2 === ei.kw[player]
	}, this.ji = function(player) {
		return 0 !== ei.kv[player]
	}, this.qY = function(player) {
		return player < eq.er
	}, this.aIr = function(aDX, aDY) {
		return aDX !== aDY
	}, this.sq = function(player, a9) {
		var min;
		return a9 = this.aZB(player, a9), ei.rM[player] += a9, ei.a2r[player] && (min = Math.min(ei.a2r[player], ei.rM[player]), ei.a2r[player] -= min, ei.rM[player] -= min), a9
	}, this.aZB = function(player, a9) {
		var a7z = ei.rM[player];
		return a9 = Math.min(a9, ei.jd[player] * eq.aDx - a7z), a9 = Math.min(a9, eq.a6b - a7z), Math.max(a9, 0)
	}, this.nq = function(player, lK, aZC, aZD) {
		var a7z = ei.rM[player],
			lK = cf.cg(a7z * (lK + 1), 1024),
			aZC = cf.cg(aZC * a7z, 1024),
			lK = Math.min(lK, a7z - aZC);
		return 10 === eq.l1 && (lK = gn.aJx(player, lK)), h2.a7w[0] = lK, h2.a7w[1] = aZC, aZD <= lK
	}, this.aJ1 = function(player, aIz, a7u) {
		var player = ei.rM[player],
			aZE = cf.cg(64 * player, 1024);
		return aIz = Math.min(aIz, player - aZE), aIz = this.aZB(a7u, aIz), h2.a7w[0] = aIz, h2.a7w[1] = aZE, 1 <= aIz
	}, this.aZF = function(player, aIz, a7u) {
		var player = ei.rM[player],
			aZE = cf.cg(64 * player, 1024);
		return aIz = Math.min(aIz, player - aZE), this.aZB(a7u, aIz)
	}, this.aZG = function(aIz, a7u) {
		return aIz = this.aZB(a7u, aIz), h2.a7w[0] = aIz, h2.a7w[1] = 0, 1 <= aIz
	}, this.lc = function(player, aZH) {
		return cf.cg(ei.rM[player] * (aZH + 1), 1024)
	}, this.aZI = function(player, aZC) {
		aZC = cf.cg(aZC * ei.rM[player], 1024);
		h2.a7w[1] = aZC, ei.rM[player] -= aZC
	}, this.a0x = function(player, aZJ) {
		var u1, a4B, bw = ei.rM[player];
		return aZJ <= bw ? ei.rM[player] -= aZJ : (ei.rM[player] = 0, a4B = ei.a2r[player] + (u1 = 5 * ((bw = aZJ - bw) >> 2)), hE.sp(player, u1 - bw, 12), a4B <= eq.aDu ? ei.a2r[player] = a4B : (ei.a2r[player] = eq.aDu, hE.sp(player, a4B - eq
			.aDu, 18))), aZJ
	}, this.aJG = function(player, lK) {
		var rM = ei.rM,
			a7z = rM[player],
			lK = cf.cg(a7z * (lK + 1), 1024),
			aZE = Math.max(cf.cg(a7z, 10), 1e3);
		return (lK = Math.min(lK, a7z - aZE)) < 0 ? (rM[player] = 0, aZE = Math.min(1e3, a7z + eq.aDu - ei.a2r[player]), h2.a7w[1] = aZE, ei.a2r[player] += aZE - a7z, 0) : (h2.a7w[1] = aZE, 10 === eq.l1 && (lK = gn.aJx(player, lK)), rM[player] -=
			aZE + lK, lK)
	}, this.o8 = function(player) {
		ei.rM[player] -= h2.a7w[0] + h2.a7w[1]
	}, this.aIs = function(player, oj) {
		return (oj = Math.min(oj, eq.fE)) < eq.fE && 0 === ei.kv[oj] && (oj = eq.fE), (h2.aIu[0] = oj) === eq.fE || hQ.sU(player, oj)
	}, this.aJ0 = function(player, a7u) {
		return 0 !== ei.kv[a7u] && !hQ.sU(player, a7u)
	}, this.aTu = function(player, aZK) {
		for (var ec, a5 = ed.ee, kW = 0, aZL = je, a4 = 0; a4 < a5; a4++)
			if (ec = aZL[a4], !this.el(ec)) {
				if (player === ec) return !0;
				if (++kW > aZK) return !1
			} return !1
	}, this.s5 = function(ec) {
		var rX = eq.p6 ? hH.rY() : ei.jd[je[0]];
		return rX >= cf.cg(ec * eq.rA, 100)
	}, this.yB = function(a9, min, max) {
		return Math.floor(cf.fH(isNaN(a9) ? 0 : Number(a9), min, max))
	}
}

function a5i(aZM, dL, aZN) {
	function click() {
		var value = 1 - aZM.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + dL, void 0 !== aZM.aB ? bp.bq.br(aZM.aB, value) : aZM.value = value, aZN && aZN(value)
	}
	var bd;
	dL = dL || L(518), this.bd = document.createElement("p"), (bd = this.bd).textContent = (aZM.value ? "🟩 " : "⬜ ") + dL, bd.style.margin = "0", bd.style.marginBottom = "0.5em", bd.style.cursor = "pointer", bd.addEventListener("click", click)
}

function hs() {
	var lM, cv, dE, aZO, aZP, aZQ, canvas, lI, lN, a7z, aZR, aZS, aZT, aZU;
	this.dF = 0, this.cw = 0, this.ck = function() {
		aZQ = eq.aDv, aZS = "rgba(0,100,0,0.8)", aZT = "rgba(150,0,0,0.8)", lN = aZR = !0, a7z = ei.rM[eq.jj], this.resize()
	}, this.resize = function() {
		cv = Math.floor((d0.jF.lR() ? .305 : .24) * eR.lS), this.cw = Math.floor(.5 + .13 * cv), cv = Math.floor(6 * this.cw), lM = aZ.aa.lT(1, Math.floor(.8 * this.cw)), aZP = aZ.aa.lT(1, Math.floor(.45 * this.cw)), aZU = Math.floor(.5 * this
			.cw), cC.te.font = lM, dE = ac.gap, aZO = Math.floor(1 + .13 * this.cw), (canvas = document.createElement("canvas")).width = cv, canvas.height = this.cw, lI = canvas.getContext("2d", {
			alpha: !0
		}), aZ.aa.textBaseline(lI, 1), aZ.aa.textAlign(lI, 1), this.aZV()
	}, this.rI = function() {
		return d0.jF.lR() && eR.cv < 1.2 * eR.cw
	}, this.lU = function() {
		this.rI() ? this.dF = eR.cv - cv - ac.gap : this.dF = Math.floor(gN.aZW() + (eR.cv - gN.aZW() - at.cv - cv) / 2 - .5 * ac.gap)
	}, this.l0 = function() {
		lN && (lN = !1, this.aZV())
	}, this.aZV = function() {
		lI.font = lM, lI.clearRect(0, 0, cv, this.cw), lI.fillStyle = aZR ? aZS : aZT, lI.fillRect(0, 0, cv, this.cw), lI.fillStyle = t.aFi;
		var af = this.aZX(),
			aZZ = (this.aZY(), lI.fillStyle = ei.rM[eq.jj] >= gT.rN(eq.jj) ? t.sa : t.u, aZ.bu.jW(a7z)),
			aZZ = (lI.fillText(aZZ, Math.floor(cv / 2), aZU), lI.measureText(aZZ).width),
			af = (lI.font = aZP, lI.fillStyle = 9 === af ? t.aYf : t.u, gT.a7n),
			aZb = "+" + af,
			pN = lI.measureText(aZb).width,
			aZc = Math.floor(this.cw / 12),
			aZZ = .5 * (cv + aZZ) + aZc;
		(aZZ + pN + aZO <= cv || 1e3 <= af && (aZb = "+" + Math.floor(af / 1e3) + "K", aZZ + (pN = lI.measureText(aZb).width) + aZO <= cv)) && lI.fillText(aZb, Math.floor(aZZ + .5 * pN), Math.floor(.3 * this.cw)), lI.fillStyle = t.u, lI.fillRect(
			0, 0, cv, 1), lI.fillRect(0, 0, 1, this.cw), lI.fillRect(0, this.cw - 1, cv, 1), lI.fillRect(cv - 1, 0, 1, this.cw)
	}, this.aZX = function() {
		var af = eW.et() % 100,
			a73 = (af = 9 - cf.cg(af -= af % 10, 10), Math.floor(af * (this.cw - aZO) / 9));
		return lI.fillRect(0, a73, aZO, this.cw - a73), lI.fillRect(cv - aZO, a73, aZO, this.cw - a73), af
	}, this.aZY = function() {
		lI.fillRect(aZO, this.cw - aZO, Math.floor((cv - 2 * aZO) * ei.rM[eq.jj] / aZQ), aZO)
	}, this.w = function() {
		var ec = eq.jj;
		aZ.d.rc(ec) && (ec = ei.rM[ec] - ei.a2r[ec], a7z !== ec ? (aZQ = pG(ec, aZQ), aZR = a7z < ec && 10 <= ec, a7z = ec, lN = !0) : eW.et() % 10 == 9 && (lN = !0))
	}, this.eZ = function() {
		0 === ei.kv[eq.jj] || eq.l3 || 2 === ei.kw[eq.jj] || m0.drawImage(canvas, this.dF, dE)
	}
}

function k() {
	this.aPr = function(player, a7u, np) {
		aZ.d.aJ1(player, np, a7u) && (gT.a7t(player, a7u), !aZ.d.el(a7u)) && ga.a9A.aPe[a7u] && ga.a9A.aPe[a7u]--
	}, this.sr = function(player, a7u, np) {
		aZ.d.aZG(np, a7u) ? gZ.qF(a7u, h2.a7w[0]) && (aj.a7v(player, a7u, h2.a7w[0], 1), aZ.d.sq(a7u, h2.a7w[0]), hE.a7x(player, a7u), gU.a6X(a7u, h2.a7w[0])) : hE.sp(player, np, 12)
	}
}

function aMk() {
	function aXy(dF, a5, dE, aZd, aFM, aQr, player) {
		if (!(dE < 1 || aFM < dE))
			for (var a4 = 0; a4 <= a5; a4++) {
				var rJ = h0.zA(dF, dE);
				if (h1.cY.pX(rJ) && !aZ.cb.has(aZd, gR.yo(rJ)) && gR.aT1(rJ, player)) return rJ >> 2;
				dF += aQr
			}
		return -1
	}

	function aY2(dE, a5, dF, aZd, aXw, aQr, player) {
		if (!(dF < 1 || aXw < dF)) {
			a5 = Math.max(a5, 0);
			for (var a4 = 0; a4 <= a5; a4++) {
				var rJ = h0.zA(dF, dE);
				if (h1.cY.pX(rJ) && !aZ.cb.has(aZd, gR.yo(rJ)) && gR.aT1(rJ, player)) return rJ >> 2;
				dE += aQr
			}
		}
		return -1
	}

	function aY6(yx, yy, pV) {
		return -1 !== yy && (-1 === yx || h0.yz(yy, pV) < h0.yz(yx, pV)) ? yy : yx
	}
	this.aKZ = function(player, pV) {
		if (h1.nk.nl(player))
			for (var aP4 = h0.yl(), aZd = [];;) {
				var aU5 = function(pV, aP4, aZd, player) {
					for (var oB = h0.mZ(pV), oC = h0.mb(pV), aXw = cC.mO - 2, aFM = cC.mP - 2, aXx = -1, dh = 0; dh < aP4; dh++) {
						var aFL = Math.max(oB - dh, 1),
							aGk = Math.max(oC - dh, 1),
							aGl = Math.min(oB + dh, aXw),
							aGc = Math.min(oC + dh, aFM),
							yx = aXy(oB, aGl - oB, oC - dh, aZd, aFM, 1, player),
							yy = aXy(oB - 1, oB - aFL - 1, oC - dh, aZd, aFM, -1, player),
							aGl = aXy(oB, aGl - oB, oC + dh, aZd, aFM, 1, player),
							aFL = aXy(oB - 1, oB - aFL - 1, oC + dh, aZd, aFM, -1, player),
							aY1 = aY2(oC, aGc - oC - 1, oB - dh, aZd, aXw, 1, player),
							aY3 = aY2(oC - 1, oC - aGk - 2, oB - dh, aZd, aXw, -1, player),
							aGc = aY2(oC, aGc - oC - 1, oB + dh, aZd, aXw, 1, player),
							aGk = aY2(oC - 1, oC - aGk - 2, oB + dh, aZd, aXw, -1, player);
						if (aXx = aY6(aXx, yx, pV), aXx = aY6(aXx, yy, pV), aXx = aY6(aXx, aGl, pV), aXx = aY6(aXx, aFL, pV), aXx = aY6(aXx, aY1, pV), aXx = aY6(aXx, aY3, pV), aXx = aY6(aXx, aGc, pV), 0 <= (aXx = aY6(aXx, aGk, pV)) && dh *
							dh >= h0.yz(aXx, pV)) return aXx
					}
					return -1
				}(pV, aP4, aZd, player);
				if (-1 === aU5) break;
				var id = gR.yo(h0.pY(aU5));
				if (h1.cY.aM6(player, id)) return !! function(player, aU5, pV) {
					for (var sS = h0.zK(aU5, pV), a4 = 0; a4 < 4; a4++) {
						var mV = h0.pa(aU5, sS);
						if (gR.aDQ(h0.pY(mV), player)) return h2.oD[6] = sS, 1;
						sS = (sS + 1) % 4
					}
					return
				}(player, aU5, pV) && (h2.oD[7] = aU5, !0);
				aZd.push(id)
			}
		return !1
	}
}

function ex(or, f4) {
	var ap = document.createElement("div");

	function a6R() {
		var a4, a3l, cw, lE, dh, aZh = eR.rt * ap.offsetWidth,
			aZj = new Float64Array(function(aZh) {
				var cv = .25 * aZ.aa.aCy(.6) * eR.lS;
				return Math.max(Math.floor(aZh / cv), 1)
			}(aZh)),
			ad = ac.ad,
			aZk = (aZh - (aZj.length + 1) * ac.gap) / (aZj.length * eR.rt);
		for (aZj.fill(ad), a4 = 0; a4 < f4.length; a4++) a3l = (dh = f4[a4].ap).style, cw = aZ.cb.min(aZj), lE = aZj.indexOf(cw), a3l.top = aZ.aa.ab(cw), a3l.left = aZ.aa.ab(ad + lE * (aZk + ad)), a3l.width = aZ.aa.ab(aZk), aZ.aa.ot(dh, 5), aZj[
			lE] += dh.offsetHeight + 3 * ad;
		ap.style.height = aZ.aa.ab(aZ.cb.max(aZj) - 2 * ad)
	}
	this.ya = ap, this.a1k = f4, this.resize = function() {
		var a4;
		for (a4 = 0; a4 < f4.length; a4++) f4[a4].resize();
		a6R(), a6R()
	}, ap.style.width = "100%", ap.style.maxWidth = "100%", or.style.lineHeight = "1.5em", or.style.overflowX = "hidden", or.style.overflowY = "auto";
	for (var a4 = 0; a4 < f4.length; a4++) ap.appendChild(f4[a4].ap);
	or.appendChild(ap)
}

function aLn() {
	var aP, aZl;

	function aZo() {
		aT.bh();
		var ax = gr.aYN(aZl.f3());
		(eq.ku && 0 < ax.length && ax === gr.aE8.a8m || gr.aF0.aCJ(ax)) && gr.aS4()
	}
	this.show = function(aVv) {
		this.aYM(aVv), aP.show(), this.resize()
	}, this.aYM = function(aVv) {
		0 === eq.ku ? aVv ? aZl.fJ(aVv) : eq.aE1.length && aZl.fJ(eq.aE1) : (eq.lQ || (gr.aE8.a8m = gr.aE9.a1a()), aZl.fJ(gr.aYO(gr.aE8.a8m)))
	}, this.aY = function() {
		aP.aY()
	}, this.resize = function() {
		aP.resize(), aZl.resize()
	}, this.ae = function(af) {
		2 === af ? aP.ag[0].ah() : aZo()
	}, aP = new aR(L(62), [new aS("⬅️ " + L(1), function() {
		aT.aU(1)
	}), new aS(L(519), function() {
		aZl.aZm()
	}), new aS(L(520), function() {
		aZl.aZn()
	}), new aS(L(521), function() {
		aZl.clear()
	}), new aS(L(522), function() {
		aZo()
	})]), aZl = new fI(L(523)), aP.aV.appendChild(aZl.bd)
}

function aLr() {
	var jq, jr, js, ju;

	function jt(a4) {
		aT.bl(8, aT.dK, new jw(21, {
			jx: a4,
			jy: 0,
			jz: 10
		}))
	}
	this.show = function() {
		jq.show(), this.resize()
	}, this.aY = function() {
		jq.aY()
	}, this.resize = function() {
		jq.resize(), jr.resize()
	}, this.ae = function(af) {
		2 === af && jq.ag[0].ah()
	}, js = [new aS(L(148), function() {
		jt(5)
	}, 0, 0, 1), new aS(L(149), function() {
		jt(6)
	}, 0, 0, 1), new aS(L(150), function() {
		jt(7)
	}, 0, 0, 1), new aS("Audit Log", function() {
		jt(12)
	}, 0, 0, 1)], ju = [new aS("⬅️ " + L(1), function() {
		aT.f1()
	})], jq = new aR(L(60), ju), jr = new jv(js, jq.aV)
}

function i0() {
	var aZr, aZs, aZt, aZu, aZv, aZw, aZx, aZy, aZz, aa0, aZp = [
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
		aZq = [
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

	function aa5(tD, mx) {
		for (var a4 = tD; a4 < mx; a4++) aZr[a4] = 4 * cf.cg(64 * gi.random(), gi.value(100)), aZs[a4] = 4 * cf.cg(64 * gi.random(), gi.value(100)), aZt[a4] = 4 * cf.cg(64 * gi.random(), gi.value(100))
	}

	function aa4(tD, mx) {
		for (var colorsData = eq.data.colorsData, a4 = tD; a4 < mx; a4++) {
			var a9 = colorsData[a4];
			aZr[a4] = 4 * (a9 >> 12), aZs[a4] = 4 * (a9 >> 6 & 63), aZt[a4] = 4 * (63 & a9)
		}
	}

	function aaC(rJ, aaE) {
		q8[rJ] = 0, q8[rJ + 1] = 0, q8[rJ + 2] = aaE, q8[rJ + 3] = 0, aaF(rJ)
	}

	function aaF(rJ) {
		var dF;
		hD.n5 || (dF = gR.qJ(rJ), rJ = gR.qK(rJ), hD.n5 = dF >= hC.q3[0] && dF <= hC.q3[2] && rJ >= hC.q3[1] && rJ <= hC.q3[3])
	}
	this.v1 = new Int32Array(4), this.jB = function() {
		var v1 = this.v1;
		v1[0] = -4 * cC.mO, v1[1] = 4, v1[2] = -v1[0], v1[3] = -v1[1]
	}, this.ck = function() {
		if (aZr = new Uint8Array(eq.fE), aZs = new Uint8Array(eq.fE), aZt = new Uint8Array(eq.fE), aZu = new Uint8Array(eq.fE), aZv = new Uint8Array(eq.fE), aZw = new Uint8Array(eq.fE), aZx = new Uint8Array(eq.fE), aZy = new Uint8Array(eq.fE),
			aZz = new Uint8Array(eq.fE), aa0 = new Uint8Array(eq.fE), this.lY = new Uint8Array(eq.fE), eq.p6)
			for (var wk = hG.wk, a4 = eq.fE - 1; 0 <= a4; a4--) {
				var af = wk[a4],
					rQ = cf.cg((aZq[af][3] + 1) * gi.random(), gi.value(100));
				aZr[a4] = aZp[af][0] + rQ * aZq[af][0], aZs[a4] = aZp[af][1] + rQ * aZq[af][1], aZt[a4] = aZp[af][2] + rQ * aZq[af][2]
			} else 0 === eq.data.colorsType ? eq.data.selectableColor ? (aa4(0, eq.er), aa5(eq.er, eq.fE)) : aa5(0, eq.fE) : aa4(0, eq.fE);
		! function() {
			var a4, dh;
			for (a4 = eq.fE - 1; 0 <= a4; a4--) dh = cf.cg(aZr[a4] + aZs[a4] + aZt[a4], 3), aZr[a4] += pE(dh - aZr[a4], 2), aZs[a4] += pE(dh - aZs[a4], 2), aZt[a4] += pE(dh - aZt[a4], 2), aZr[a4] -= aZr[a4] % 4, aZs[a4] -= aZs[a4] % 4, aZt[a4] -=
				aZt[a4] % 4
		}(),
		function() {
			for (var a4 = eq.fE - 1; 0 <= a4; a4--) aZr[a4] += cf.cg(a4, 128), aZs[a4] += cf.cg(a4 % 128, 32), aZt[a4] += cf.cg(a4 % 32, 8), aZu[a4] = a4 % 8
		}(), this.aa8(),
			function() {
				for (var a4 = eq.fE - 1; 0 <= a4; a4--) aZv[a4] = aZr[a4] < 32 ? aZr[a4] + 32 : aZr[a4] - 32, aZw[a4] = aZs[a4] < 32 ? aZs[a4] + 32 : aZs[a4] - 32, aZx[a4] = aZt[a4] < 32 ? aZt[a4] + 32 : aZt[a4] - 32
			}(),
			function() {
				for (var a4 = eq.fE - 1; 0 <= a4; a4--) aZy[a4] = 235 < aZr[a4] ? aZr[a4] - 20 : aZr[a4] + 20, aZz[a4] = 235 < aZs[a4] ? aZs[a4] - 20 : aZs[a4] + 20, aa0[a4] = 235 < aZt[a4] ? aZt[a4] - 20 : aZt[a4] + 20
			}()
	}, this.aIS = function(player) {
		var z = h2.aIT;
		return z[0] = aZr[player], z[1] = aZs[player], z[2] = aZt[player], z
	}, this.aa8 = function() {
		for (var a4 = eq.fE - 1; 0 <= a4; a4--) this.lY[a4] = aZr[a4] + aZs[a4] + aZt[a4] < 280 ? 0 : 1
	}, this.qJ = function(rJ) {
		return cf.cg(rJ, 4) % cC.mO
	}, this.qK = function(rJ) {
		return cf.cg(rJ, 4 * cC.mO)
	}, this.q9 = function(dF, dE) {
		return Math.floor(4 * (dE * cC.mO + dF))
	}, this.aT2 = function(rJ) {
		var v1 = this.v1;
		return this.aDR(rJ + v1[0]) || this.aDR(rJ + v1[1]) || this.aDR(rJ + v1[2]) || this.aDR(rJ + v1[3])
	}, this.aQq = function(rJ) {
		var v1 = this.v1;
		return this.a9t(rJ + v1[0]) || this.a9t(rJ + v1[1]) || this.a9t(rJ + v1[2]) || this.a9t(rJ + v1[3])
	}, this.aT1 = function(rJ, player) {
		var v1 = this.v1;
		return this.aDQ(rJ + v1[0], player) || this.aDQ(rJ + v1[1], player) || this.aDQ(rJ + v1[2], player) || this.aDQ(rJ + v1[3], player)
	}, this.sn = function(rJ) {
		return 208 <= q8[rJ + 3]
	}, this.a36 = function(player, rJ) {
		return this.sn(rJ) && this.so(player, rJ)
	}, this.so = function(player, rJ) {
		return player === this.sZ(rJ)
	}, this.aDT = function(rJ) {
		return 208 <= q8[rJ + 3] && q8[rJ + 3] < 224
	}, this.aDV = function(rJ) {
		return 224 <= q8[rJ + 3] && q8[rJ + 3] < 248
	}, this.aGe = function(rJ) {
		for (var v1 = this.v1, a4 = 3; 0 <= a4; a4--)
			if (this.yn(rJ + v1[a4])) return !0;
		return !1
	}, this.pZ = function(rJ) {
		return this.sn(rJ) || this.sI(rJ)
	}, this.yn = function(rJ) {
		return 0 === q8[rJ + 3] && 2 === q8[rJ + 2]
	}, this.sI = function(rJ) {
		return 0 === q8[rJ + 3] && 1 === q8[rJ + 2]
	}, this.aKA = function(rJ) {
		return 0 === q8[rJ + 3] && 3 === q8[rJ + 2]
	}, this.a9t = function(rJ) {
		return 0 === q8[rJ + 3] && 5 === q8[rJ + 2]
	}, this.aDR = function(rJ) {
		return 0 === q8[rJ + 3] && 3 <= q8[rJ + 2]
	}, this.yo = function(rJ) {
		return (q8[rJ] >> 1 << 8) + q8[rJ + 1]
	}, this.aaB = function(rJ) {
		return 1 & q8[rJ]
	}, this.aDQ = function(rJ, player) {
		return this.sI(rJ) || this.sn(rJ) && player !== this.sZ(rJ)
	}, this.sZ = function(rJ) {
		return q8[rJ] % 4 * 128 + q8[rJ + 1] % 4 * 32 + q8[rJ + 2] % 4 * 8 + q8[rJ + 3] % 8
	}, this.a37 = function(rJ) {
		aaC(rJ, 1)
	}, this.aaD = function(rJ) {
		aaC(rJ, 2)
	}, this.aDS = function(rJ, player) {
		q8[rJ] = aZr[player], q8[rJ + 1] = aZs[player], q8[rJ + 2] = aZt[player], q8[rJ + 3] = 208 + aZu[player], aaF(rJ)
	}, this.a12 = function(rJ, player) {
		q8[rJ] = aZv[player], q8[rJ + 1] = aZw[player], q8[rJ + 2] = aZx[player], q8[rJ + 3] = 224 + aZu[player], aaF(rJ)
	}, this.aDN = function(rJ, player) {
		q8[rJ] = aZy[player], q8[rJ + 1] = aZz[player], q8[rJ + 2] = aa0[player], q8[rJ + 3] = 248 + aZu[player], aaF(rJ)
	}
}

function iD() {
	var aaG;

	function aaQ(a46, t4, dF, dE, globalAlpha) {
		cC.te.save(), cC.te.globalAlpha = globalAlpha, cC.te.imageSmoothingEnabled = !1, cC.te.scale(t4, t4), cC.te.drawImage(a46, Math.floor(dF * (cC.mO / t4 - a46.width)), Math.floor(dE * (cC.mP / t4 - a46.height))), cC.te.restore()
	}
	this.aA9 = 0, this.aAA = 0, this.aAB = 0, this.tl = 0, this.ck = function() {
		(aaG = new Array(cC.tc))[0] = {
			cv: [0, 5e3, 8e3, 1e4],
			t6: [220, 250, 255, 220],
			rh: [190, 220, 0, 0],
			bw: [170, 200, 0, 0]
		}, aaG[1] = {
			cv: [0, 4e3, 5e3, 6e3, 1e4],
			t6: [25, 0, 100, 0, 25],
			rh: [25, 0, 0, 0, 25],
			bw: [25, 0, 0, 0, 25]
		}, aaG[2] = {
			cv: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			t6: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			rh: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			bw: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aaG[3] = {
			cv: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			t6: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			rh: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			bw: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aaG[4] = {
			cv: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			t6: [10, 10, 20, 10, 10, 170, 212],
			rh: [20, 20, 60, 100, 100, 110, 170],
			bw: [70, 70, 160, 30, 30, 60, 120]
		}, aaG[5] = {
			cv: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			t6: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			rh: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			bw: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aaG[6] = {
			cv: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			t6: [10, 10, 60, 255, 255, 200, 200],
			rh: [10, 10, 60, 255, 255, 200, 200],
			bw: [80, 80, 255, 255, 255, 200, 200]
		}, aaG[7] = {
			cv: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			t6: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			rh: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			bw: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aaG[8] = {
			cv: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			t6: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			rh: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			bw: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aaG[9] = {
			cv: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			t6: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			rh: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			bw: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aaG[20] = {
			cv: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			t6: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			rh: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			bw: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aaG[21] = {
			cv: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			t6: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			rh: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			bw: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.tw = function() {
		var aaP, a4, aN, tz, t2 = function() {
				var t2;
				return cC.qI = document.createElement("canvas"), cC.qI.width = cC.mO, cC.qI.height = cC.mP, cC.te = cC.qI.getContext("2d", {
					alpha: !1
				}), t2 = cC.te.getImageData(0, 0, cC.mO, cC.mP), cC.tg = t2.data, t2
			}(),
			cv = aaG[cC.cE].cv,
			t6 = aaG[cC.cE].t6,
			rh = aaG[cC.cE].rh,
			bw = aaG[cC.cE].bw,
			a9 = gc.aBW(),
			a5 = cv.length - 2,
			aaK = new Array(1 + a5),
			aaL = new Array(1 + a5),
			aaM = new Array(1 + a5),
			aaN = new Array(1 + a5);
		for (aN = a5; 0 <= aN; aN--) aaK[aN] = cv[aN + 1] - cv[aN], aaL[aN] = t6[aN + 1] - t6[aN], aaM[aN] = rh[aN + 1] - rh[aN], aaN[aN] = bw[aN + 1] - bw[aN];
		for (a4 = cC.mO * cC.mP - 1; 0 <= a4; a4--)
			for (aN = a5; 0 <= aN; aN--)
				if (a9[a4] >= cv[aN]) {
					tz = a9[a4] - cv[aN], cC.tg[4 * a4] = t6[aN] + pE(aaL[aN] * tz, aaK[aN]), cC.tg[4 * a4 + 1] = rh[aN] + pE(aaM[aN] * tz, aaK[aN]), cC.tg[4 * a4 + 2] = bw[aN] + pE(aaN[aN] * tz, aaK[aN]), cC.tg[4 * a4 + 3] = 255;
					break
				} cC.te.putImageData(t2, 0, 0), cC.u7(cC.cE) && gQ.a7m() && cC.u7(cC.cE) && (t2 = gQ.aLi("arena"), aaP = gQ.aLi("territorial.io"), aaQ(t2, 5, .5, .5, .1), aaQ(aaP, 2, .5, .45, .1)), cC.th = !0, eW.eX = !0
	}, this.aE3 = function() {
		for (var ec, dF, dE, uv, uw, u1, aAA = 0, cv = cC.mO, cw = cC.mP, tz = cv * cw * 4, ut = q8, uu = cC.tg, a4 = cv - 1; 0 <= a4; a4--) ut[(ec = a4 << 2) + 2] = ut[tz - ec - 2] = 3;
		for (tz = 4 * cv, a4 = cw - 1; 0 <= a4; a4--) ut[(ec = a4 * tz) + 2] = ut[ec + tz - 2] = 3;
		for (uv = cv - 1, uw = cw - 1, dE = 1; dE < uw; dE++)
			for (tz = dE * cv, dF = 1; dF < uv; dF++) u1 = 1 - (uu[(ec = tz + dF << 2) + 2] > uu[ec + 1] && uu[ec + 2] > uu[ec]), ut[ec + 2] = 6 - 5 * u1, aAA += u1;
		this.aA9 = (cv - 2) * (cw - 2), this.tl = 0, cC.u5(cC.cE) && (cC.tl.us(), cC.tl.ux(4, 5)), this.aAA = eq.rA = aAA - this.tl, this.aAB = this.aA9 - this.aAA - this.tl, this.aAB && (cC.tl.ux(6, 2), cC.tl.v6())
	}
}

function ht() {
	var aaR, aaS, aaT, aaU, aaV, aaW, aaX, aaY, aaZ, aaa, aab, aac, aad, aae, aaf, aag, aah, aai, aaj, aak, aal, aam, position, aan, aao, aap, aaq, aar = 1,
		a6P = 1,
		aas = "";
	var leaderboardHasChanged = true;
	this.playerPos = eq.jj;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => sE[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(sE[eq.jj]);
	}

	function aau() {
		aaX.clearRect(0, 0, aaR, aCx),
			aaX.fillStyle = t.aYY,
			aaX.fillRect(0, 0, aaR, aac),
			aaX.fillStyle = t.da,
			aaX.fillRect(0, aac, aaR, aCx - aac);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			sE[eq.jj]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aam = -1;
		if (__fx.leaderboardFilter.enabled && aam >= __fx.leaderboardFilter.filteredLeaderboard.length) aam = -1;
		playerPos >= position && aaw(playerPos - position, t.c7),
			0 !== sE[eq.jj] && 0 === position && aaw(0, t.aYb),
			-1 !== aam && aaw(aam, t.aOH),
			aaX.fillStyle = t.da,
			//console.log("drawing", aam),
			aaX.clearRect(0, aCx - __fx.leaderboardFilter.tabBarOffset, aaR, __fx.leaderboardFilter.tabBarOffset);
		aaX.fillRect(0, aCx - __fx.leaderboardFilter.tabBarOffset, aaR, __fx.leaderboardFilter.tabBarOffset);
		aaX.fillStyle = t.u,
			aaX.fillRect(0, aac, aaR, 1),
			aaX.fillRect(0, aCx - __fx.leaderboardFilter.tabBarOffset, aaR, 1),
			__fx.leaderboardFilter.drawTabs(aaX, aaR, aCx - __fx.leaderboardFilter.tabBarOffset, t.c7),
			aaX.fillRect(0, 0, aaR, ac.a0G),
			aaX.fillRect(0, 0, ac.a0G, aCx),
			aaX.fillRect(aaR - ac.a0G, 0, ac.a0G, aCx),
			aaX.fillRect(0, aCx - ac.a0G, aaR, ac.a0G), aaX.font = aaS, aZ.aa.textBaseline(aaX, 1), aZ.aa.textAlign(aaX, 1), aaX.fillText(aas, Math.floor((aaR + aac - 22) / 2), Math.floor(aaa + aaT / 2));
		__fx.playerList.drawButton(aaX, 12, 12, aac - 22);
		var aN, lE = playerPos < position + aaV - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aaV)
				position = (result.length > aaV ? result.length : aaV) - aaV;
			//if (position >= result.length) position = result.length - 1;
			for (aaX.font = aaU, aZ.aa.textAlign(aaX, 0), aN = aaV - lE; 0 <= aN; aN--) {
				const pos = result[aN + position];
				if (pos !== undefined)
					aax(je[pos]), aay(aN, pos, je[pos]);
			}
			for (aZ.aa.textAlign(aaX, 2), aN = aaV - lE; 0 <= aN; aN--) {
				const pos = result[aN + position];
				if (pos !== undefined)
					aax(je[pos]), aaz(aN, je[pos]);
			}
		} else {
			for (aaX.font = aaU, aZ.aa.textAlign(aaX, 0), aN = aaV - lE; 0 <= aN; aN--)
				aax(je[aN + position]), aay(aN, aN + position, je[aN + position]);
			for (aZ.aa.textAlign(aaX, 2), aN = aaV - lE; 0 <= aN; aN--)
				aax(je[aN + position]), aaz(aN, je[aN + position]);
		}
		2 == lE && (aax(eq.jj), aZ.aa.textAlign(aaX, 0), aay(aaV - 1, sE[eq.jj], eq.jj), aZ.aa.textAlign(aaX, 2), aaz(aaV - 1, eq.jj)), 0 === position && (lE = .7 * aad / gQ.get(4).height, aaX.setTransform(lE, 0, 0, lE, Math.floor(aae + .58 * aad +
			.5 * lE * gQ.get(4).width), Math.floor(aaa + aaT + .4 * aad)), aaX.imageSmoothingEnabled = !0, aaX.drawImage(gQ.get(4), -Math.floor(gQ.get(4).width / 2), -Math.floor(gQ.get(4).height / 2)), aaX.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aax(player) {
		eq.p6 && (aaX.fillStyle = hG.wa[hG.wk[player]])
	}

	function aaw(a4, ab1) {
		aaX.fillStyle = ab1, a4 = aaV - 1 < a4 ? aaV - 1 : a4;
		ab1 = Math.floor((a4 === aaV - 1 ? 2 : 0 === a4 ? 1.15 : 1) * aad), ab1 = a4 === aaV - 2 ? Math.floor(aac + 9.15 * aad) - Math.floor(aac + 8.15 * aad) : ab1;
		aaX.fillRect(0, Math.floor(aac + (a4 + (0 === a4 ? 0 : .15)) * aad), aaR, ab1)
	}

	function aay(aDm, kW, a4) {
		aaX.fillText(aai[kW], aae, Math.floor(aaa + aaT + (aDm + .5) * aad)), 1 === ei.kw[a4] && (aaX.font = "italic " + aaU);
		kW = Math.floor(aaa + aaT + (aDm + .5) * aad);
		aaX.fillText(ei.sA[a4], aaf, kW), 0 !== ei.kw[a4] && (aaX.font = aaU), a4 < eq.er && 2 !== ei.kw[a4] || aaX.fillRect(aaf, kW + .35 * aar, aah[a4], Math.max(1, .1 * aar))
	}

	function aaz(aDm, a4) {
		aaX.fillText(ei.jd[a4], aag, Math.floor(aaa + aaT + (aDm + .5) * aad))
	}

	function abA(dE) {
		return (dE -= ac.gap + aac) < 0 ? Math.floor(dE / aad) - 1 : dE < (aaV - 1) * aad ? Math.floor(dE / aad) : dE < aCx - aac ? aaV - 1 : (dE -= aCx - aac, aaV + Math.floor(dE / aad))
	}

	function a0D(dF, dE) {
		return dF >= ac.gap && dF < ac.gap + aaR && dE >= ac.gap && dE < ac.gap + aCx
	}
	this.ck = function() {
			var a4;
			for (aao = !1, aaq = aap = aan = 0, aam = -1, aaV = d0.jF.lR() ? 6 : 10, a6P = (position = 0) === (a6P = bp.cy.data[11].value) ? 10 : 1 === a6P ? 5 : 1, aal = !1, aaj = new Uint16Array(aaV + 1), aak = new Uint32Array(aaV + 1), aaZ = eq
				.fE, je = new Uint16Array(aaZ), sE = new Uint16Array(aaZ), a4 = aaZ - 1; 0 <= a4; a4--) je[a4] = a4, sE[a4] = a4;
			this.resize(!0), aah = new Uint16Array(eq.fE);
			var aat = Math.floor(aaR - aaf - aae - aaY);
			for (aai = new Array(eq.fE), aaX.font = aaU, a4 = eq.fE - 1; 0 <= a4; a4--) aai[a4] = a4 + 1 + ".", ei.sA[a4] = aZ.lI.rG(ei.ud[a4], aaU, aat), aah[a4] = Math.floor(aaX.measureText(ei.sA[a4]).width);
			aau()
		}, this.resize = function(ck) {
			if (aCx = d0.jF.lR() ? (aaR = Math.floor(.335 * eR.lS), Math.floor(aaV * aaR / 8)) : (aaR = Math.floor(.27 * eR.lS), Math.floor(aaV * aaR / 10)), aaR = Math.floor(.97 * aaR), (aaW = document.createElement("canvas")).width = aaR, aaW
				.height = aCx, aaX = aaW.getContext("2d", {
					alpha: !0
				}), aaa = .025 * aaR, aaT = .16 * aaR, aab = 0 * aaR, aac = Math.floor(.45 * aaa + aaT), aad = (aCx - aaT - 2 * aaa - aab) / aaV,
				aaW.height = aCx += aad, __fx.leaderboardFilter.tabBarOffset = Math.floor(aad * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aCx - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aaR,
				aaS = aZ.aa.lT(1, Math.floor(.55 * aaT)), aar = Math.floor((d0.jF.lR() ? .67 : .72) * aad), aaU = aZ.aa.lT(0, aar), aaX.font = aaU, aae = Math.floor(.04 * aaR), aaf = Math.floor((d0.jF.lR() ? .195 : .18) * aaR), aaY = Math.floor(aaX
					.measureText("00920600").width), aaX.font = aaS, aag = aaR - aae, !ck) {
				aaX.font = aaU;
				for (var a4 = eq.fE - 1; 0 <= a4; a4--) aah[a4] = Math.floor(aaX.measureText(ei.sA[a4]).width);
				aau()
			}
			aas = aZ.lI.rG(L(524), aaS, .96 * aaR)
		}, this.aZW = function() {
			return aaR
		}, this.l0 = function(hS, aav) {
			(aav || aal && (hS || eW.et() % a6P == 0)) && (aal = !1, aau())
		}, this.w = function() {
			! function() {
				for (var aN = aaZ - 1; 0 <= aN; aN--) 0 === ei.kv[je[aN]] && ! function(aN) {
					var ab8 = je[aN];
					aaZ--;
					for (var a4 = aN; a4 < aaZ; a4++) je[a4] = je[a4 + 1], sE[je[a4]] = a4;
					je[aaZ] = ab8, sE[je[aaZ]] = aaZ
				}(aN)
			}();
			for (var ab6, mx = aaZ - 1, aN = 0; aN < mx; aN++) ei.jd[je[aN]] < ei.jd[je[aN + 1]] && (ab6 = je[aN], je[aN] = je[aN + 1], je[aN + 1] = ab6, sE[je[aN]] = aN, sE[je[aN + 1]] = aN + 1);
			! function() {
				for (var jl = aal, lE = (aal = !0, sE[eq.jj] >= aaV - 1 ? aaV - 2 : aaV - 1), a4 = lE; 0 <= a4; a4--)
					if (aaj[a4] !== je[a4] || aak[a4] !== ei.jd[je[a4]]) return;
				(lE != aaV - 2 || aaj[aaV] === sE[eq.jj] && aak[aaV] === ei.jd[eq.jj]) && (aal = jl)
			}();
			for (var a4 = aaV - 1; 0 <= a4; a4--) aaj[a4] = je[a4], aak[a4] = ei.jd[je[a4]];
			aaj[aaV] = sE[eq.jj], aak[aaV] = ei.jd[eq.jj];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.lp = function(dF, dE) {
			return !!a0D(dF, dE) && ((__fx.utils.isPointInRectangle(dF, dE, ac.gap + 12, ac.gap + 12, aac - 22, aac - 22) && __fx.playerList.display(ei.ud), true) &&
				!(dE - ac.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(dF - ac.gap)) && (aan = eW.av, aao = !0, aap = aaq = abA(dE), d1.a2g() && (dF = pI(-1, aaq, aaV), aam !== (dF = dF === aaV ? -
					1 : dF)) && (aam = dF, aau(), eW.eX = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aau(), eW.eX = !0;
		},
		this.ly = function(dF, dE) {
			if (__fx.utils.isPointInRectangle(dF, dE, ac.gap + 12, ac.gap + 12, aac - 22, aac - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aau(), eW.eX = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aau(), eW.eX = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(dF, dE, ac.gap, ac.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), dF - ac.gap
				)) return;
			var jl, ab9 = abA(dE);
			return aao ? (jl = position, (position = pI(0, position += aap - ab9, eq.fE - aaV)) !== jl && (ab9 = (ab9 = pI(-1, aap = ab9, aaV)) !== aaV && a0D(dF, dE) ? ab9 : -1, aam = ab9, aau(), eW.eX = !0), !0) : (ab9 = (ab9 = pI(-1, ab9,
				aaV)) === aaV || !a0D(dF, dE) || d1.a2g() ? -1 : ab9, aam !== ab9 && (aam = ab9, aau(), eW.eX = !0))
		}, this.a2W = function(dF, dE) {
			if (!aao) return !1;
			aao = !1;
			var ab9 = abA(dE);
			var isEmptySpace = false;
			return d1.a2g() && -1 !== aam && (aam = -1, aau(), eW.eX = !0), eW.av - aan < 350 && aaq === ab9 && -1 !== (ab9 = (ab9 = pI(-1, ab9, aaV)) !== aaV && a0D(dF, dE) ? ab9 : -1) && (dF = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					je[__fx.leaderboardFilter.filteredLeaderboard[ab9 + position] ?? (isEmptySpace = true, sE[eq.jj])]) : je[ab9 + position]), ab9 === aaV - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : sE[eq.jj]) >=
				position + aaV - 1 && (dF = eq.jj), !isEmptySpace && eq.p6 && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(dF, ei.ud, eq.l6), 0 !== ei.kv[dF] && !isEmptySpace) && gA.mQ(dF, 800, !1, 0), !0
		}, this.lx = function(dF, dE, deltaY) {
			var abB;
			return !(aao || eq.md || (abB = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a0D(dF, dE)) || (dF = (dF = pI(-1, abA(dE), aaV)) === aaV || d1.a2g() ? -1 : dF, 0 < deltaY ? position < eq.fE - aaV && (position += Math.min(eq.fE - aaV -
				position, abB), aam = dF, aau(), eW.eX = !0) : 0 < position && (position -= Math.min(position, abB), aam = dF, aau(), eW.eX = !0), 0))
		}, this.eZ = function() {
			m0.drawImage(aaW, ac.gap, ac.gap)
		}
}

function fI(abC, abD, abE, abF) {
	var aZl = document.createElement("textarea"),
		abG = (this.bd = aZl, !0);

	function abH() {
		aZl.select(), document.execCommand("copy")
	}
	this.resize = function() {
			abD && aZ.aa.ot(aZl, 5)
		}, this.fJ = function(fq) {
			aZl.value = fq
		}, this.f3 = function() {
			return aZl.value
		}, this.aZm = function() {
			aZl.select()
		}, this.clear = function() {
			aZl.value = ""
		}, this.aZn = function() {
			abG && navigator.clipboard ? (aZl.select(), navigator.clipboard.writeText(aZl.value).catch(function() {
				abG = !1, abH()
			})) : abH()
		}, aZl.setAttribute("id", "textArea" + aT.bW.y2++), aZl.setAttribute("autocomplete", "off"), abC && aZl.setAttribute("placeholder", abC), aZl.style.top = "0", aZl.style.left = "0", aZl.style.width = "100%", aZl.style.height = "100%", aZl
		.style.userSelect = "none", aZl.style.outline = "none", aZl.style.resize = "none", aZl.style.border = "none", aZl.style.color = t.u, aZl.style.backgroundColor = t.aDJ, abF ? (aZl.style.fontSize = "1em", aZl.rows = 6, aZl.style.padding =
			"0.25em") : (aZl.style.padding = "0.45em", aZl.style.fontSize = "1.2em"), abE && aZl.addEventListener("input", function(bd) {
			abE(bd)
		}), aZl.addEventListener("focus", function() {
			eR.a2a++
		}), aZl.addEventListener("blur", function() {
			eR.a2a--
		})
}

function qr() {
	this.aAH = function(aB, oX) {
		return Number(this.aAI(aB, oX))
	}, this.aAI = function(aB, oX) {
		var a9 = null;
		return 0 === d0.id ? d0.uC && (a9 = d0.uC.getItem((oX ? "v" : "d") + aB)) : 1 === d0.id ? a9 = d0.d5.loadString((oX ? 1e3 : 2e3) + aB) : 2 === d0.id && (a9 = d0.uD[(oX ? "v" : "d") + aB]), a9 && 0 !== a9.length ? a9 : null
	}, this.w9 = function(a5, abI) {
		var z = [],
			abJ = abI ? "e" : "l";
		if (0 === d0.id) {
			if (d0.uC)
				for (a4 = 0; a4 < a5; a4++) z.push(d0.uC.getItem(abJ + a4))
		} else if (1 === d0.id)
			for (var abK = abI ? 5e3 : 3e3, a4 = 0; a4 < a5; a4++) z.push(d0.d5.loadString(abK + a4));
		else if (2 === d0.id)
			for (a4 = 0; a4 < a5; a4++) z.push(d0.uD[abJ + a4]);
		return z
	}, this.save = function(aB, value, oX) {
		var uS = (oX ? "v" : "d") + aB;
		if (0 === d0.id) {
			if (d0.uC && bp.cy.data[140].value) try {
				d0.uC.setItem(uS, value)
			} catch (bd) {
				console.log(bd)
			}
		} else 1 === d0.id ? d0.d5.saveString((oX ? 1e3 : 2e3) + aB, value) : 2 === d0.id && (d0.uD[uS] = value, d0.uE.postMessage(uS + " " + value))
	}, this.wJ = function(z, abI) {
		var a5 = z.length,
			abJ = abI ? "e" : "l";
		if (0 === d0.id) {
			if (d0.uC && bp.cy.data[140].value) try {
				for (a4 = 0; a4 < a5; a4++) d0.uC.setItem(abJ + a4, z[a4])
			} catch (bd) {
				console.log(bd)
			}
		} else if (1 === d0.id)
			for (var abK = abI ? 5e3 : 3e3, a4 = 0; a4 < a5; a4++) d0.d5.saveString(abK + a4, z[a4]);
		else if (2 === d0.id)
			for (a4 = 0; a4 < a5; a4++) d0.uD[abJ + a4] = z[a4], d0.uE.postMessage(abJ + a4 + " " + z[a4])
	}
}

function c() {
	this.aIq = function(mV) {
		eq.l6 ? gq.f.aIq(eq.jj, mV) : bj.yA.aVx(mV)
	}, this.on = function(lK, oj) {
		eq.l6 ? gq.f.on(eq.jj, lK, oj) : bj.yA.aVy(lK, oj)
	}, this.a7t = function(lK, a7u) {
		eq.l6 ? gq.f.aIz(eq.jj, lK, a7u) : bj.yA.aVz(lK, a7u)
	}, this.a0J = function(lK, mV) {
		mV = (mV << 3) + h2.oD[6];
		eq.l6 ? gq.f.a0J(eq.jj, lK, mV) : h1.nk.nl(eq.jj) && bj.yA.aW0(lK, mV)
	}, this.a0M = function(lK) {
		849 === lK && (lK = 850);
		var mS = h2.oD[3];
		eq.l6 ? gq.f.a0M(eq.jj, lK, mS) : h1.o6.aM1(eq.jj, mS) && bj.yA.aW1(lK, mS)
	}, this.aJ5 = function(mS) {
		eq.l6 ? gq.f.aJ5(eq.jj, mS) : bj.yA.aW1(849, mS)
	}, this.aJ7 = function(oj) {
		eq.l6 ? gq.f.aJ7(eq.jj, oj) : bj.yA.aW2(oj)
	}, this.a0E = function(ay) {
		eq.l6 ? gq.f.aJ9(eq.jj, ay) : bj.yA.aW3(ay)
	}, this.aJA = function(aJB) {
		eq.l6 ? gq.f.aJA(eq.jj, aJB) : bj.yA.aW4(aJB)
	}, this.kp = function() {
		eq.l6 ? gq.f.kp(eq.jj) : bj.yA.aW5()
	}, this.tV = function() {
		eq.l6 ? gq.f.tV(eq.jj) : bj.yA.aW2(513)
	}, this.aJE = function(lK, mV, oj) {
		eq.l6 ? gq.f.aJE(eq.jj, lK, mV, oj) : bj.yA.aW6(lK, mV, oj)
	}
}

function aLN(data) {
	var jq, abL, abM, aUB, abN, abO, abP, colors, abQ, abR, abS = 0,
		abT = 0,
		abU = !1,
		abV = !1,
		abW = [1, 5, 60, 240, 1440, 10080, 43200];

	function abw(ll, lm) {
		! function(ll, lm) {
			return abL < ll && ll < abL + aUB && abM < lm && lm < abM + abN
		}(abS = ll, abT = lm) ? (abU && (eW.eX = !0), abU = !1) : (abU = !0, eW.eX = !0)
	}
	this.show = function() {
		abV = bp.cy.data[127].value, jq.show(), this.resize()
	}, this.aY = function() {
		jq.aY()
	}, this.resize = function() {
		jq.resize();
		var af = eR.rt,
			a5J = jq.a5G(),
			abd = af * a5J.a5I,
			af = af * a5J.vU;
		abO = aZ.aa.a7j(.06), abP = aZ.aa.a7j(.04), abL = aZ.aa.a7j(.06), abM = af + abO, aUB = eR.cv - abL - abP, abN = abd + af - abM - abP
	}, this.eZ = function() {
		jq.eZ(),
			function() {
				var a4, aMO, aI, dF, aN, z = data.data,
					abg = 1,
					abh = .125,
					abi = abV ? 65536 : 0;
				for (a4 = 0; a4 < z.length; a4++)
					for (aMO = z[a4].aMO, aI = aMO.length, abg = Math.max(aI, abg), aN = 0; aN < aI; aN++) abh = Math.max(aMO[aN], abh), abi = Math.min(aMO[aN], abi);
				var ma = abM + abN,
					aT5 = abN / (abh - abi),
					aT4 = 1 / (abg - 1);
				for (m0.lineWidth = ac.a0G, a4 = 0; a4 < z.length; a4++) {
					for (aMO = z[a4].aMO, aI = aMO.length, dF = abL, m0.beginPath(), m0.moveTo(dF + aUB, ma - aT5 * (aMO[aI - 1] - abi)), aN = aI - 2; 0 <= aN; aN--) m0.lineTo(dF + aT4 * aN * aUB, ma - aT5 * (aMO[aN] - abi));
					m0.strokeStyle = colors[a4], m0.stroke()
				}(function(abi, abh, ma, aT5) {
					m0.font = aZ.aa.lT(0, .25 * abL), aZ.aa.textBaseline(m0, 1), aZ.aa.textAlign(m0, 2), m0.fillStyle = colors[0];
					for (var dF = .92 * abL, a4 = 0; a4 < 3; a4++) {
						var a9 = abi + a4 * (abh - abi) / 2;
						m0.fillText((a9 / 1e3).toFixed(3), dF, ma - aT5 * (a9 - abi))
					}
				})(abi, abh, ma, aT5),
				function(abg) {
					var dE = abM + abN + .15 * abP;
					m0.font = aZ.aa.lT(0, Math.min(.4 * abP, .028 * eR.cv)), aZ.aa.textBaseline(m0, 0), aZ.aa.textAlign(m0, 2), m0.fillStyle = colors[0], m0.fillText(aZ.aOR.lF(abQ), abL + aUB, dE), aZ.aa.textAlign(m0, 0), m0.fillText(aZ.aOR.lF(
						new Date(abR.getTime() - 6e4 * (abg - 1) * abW[data.y6])), abL, dE)
				}(abg),
				function(abg, abi, abh) {
					if (abU && !(abg < 2)) {
						for (var a14, aB = (abS - abL) / aUB * (abg - 1), abl = Math.floor(aB), abm = Math.floor(1 + aB), abn = aB - abl, abo = 1e5, aMI = -1, abp = -1, abq = abh - (abh - abi) * (abT - abM) / abN, z = data.data, a4 = 0; a4 < z
							.length; a4++) {
							var aC3, aMO = z[a4].aMO;
							aMO.length <= abm || (aMO = aMO[abl] + abn * (aMO[abm] - aMO[abl]), (aC3 = Math.abs(abq - aMO)) < abo && (abo = aC3, aMI = a4, abp = aMO))
						} - 1 !== aMI && (abh = abM + abN - (abp - abi) / (abh - abi) * abN, m0.lineWidth = .5 * ac.a0G, m0.strokeStyle = colors[aMI], m0.beginPath(), m0.moveTo(abL, abh), m0.lineTo(abS, abh), m0.lineTo(abS, abM + abN), m0
							.stroke(), m0.beginPath(), m0.arc(abS, abh, .1 * abL, 0, 2 * Math.PI), m0.fillStyle = colors[aMI], m0.fill(), abi = abM + abN + .15 * abP, aZ.aa.textAlign(m0, 1), a14 = abg - 2 < aB ? (a14 = abR.getTime() - 6e4 *
								abW[data.y6], new Date(a14 + (aB - (abg - 2)) * (abQ.getTime() - a14))) : new Date(abR.getTime() - 6e4 * (abg - aB - 1) * abW[data.y6]), abg = aZ.aOR.lF(a14), aB = aZ.aa.measureText(abg), a14 = cf.fH(abS, abL +
								.5 * aB, abL + aUB - .5 * aB), m0.fillStyle = aZ.color.nY(70, 50, 20), m0.fillRect(a14 - .52 * aB, abM + abN, 1.04 * aB, .55 * abP), m0.fillStyle = colors[0], m0.fillText(abg, a14, abi), m0.font = aZ.aa.lT(0,
								.25 * abL), aZ.aa.textBaseline(m0, 1), aZ.aa.textAlign(m0, 2), a14 = .92 * abL, abg = (abp / 1e3).toFixed(3), aB = aZ.aa.measureText(abg), abi = a14 - 1.04 * aB, m0.fillStyle = aZ.color.nY(70, 50, 20), m0
							.fillRect(abi, abh - .1625 * abL, abL - abi, .275 * abL), m0.fillStyle = colors[aMI], m0.fillText(abg, a14, abh))
					}
				}(abg, abi, abh)
			}(), m0.lineWidth = ac.a0G, m0.strokeStyle = t.u, m0.beginPath(), m0.moveTo(abL, abM), m0.lineTo(abL, abM + abN), m0.lineTo(abL + aUB, abM + abN), m0.stroke();
		var a4, fontSize = .5 * abO,
			z = (m0.font = aZ.aa.lT(0, fontSize), aZ.aa.textBaseline(m0, 1), aZ.aa.textAlign(m0, 0), data.data),
			a5 = z.length,
			dE = abM - .5 * abO,
			ax = "";
		for (a4 = 0; a4 < a5; a4++) ax += z[a4].name + "  ";
		ax = ax.trim();
		var aWk = aZ.aa.measureText(ax),
			dF = .5 * (eR.cv - aWk);
		for (aWk > eR.cv && (dF = 0, m0.font = aZ.aa.lT(0, eR.cv / aWk * fontSize)), a4 = 0; a4 < a5; a4++) m0.fillStyle = colors[a4], m0.fillText(z[a4].name, dF, dE), dF += aZ.aa.measureText(z[a4].name + "  ")
	}, this.lp = function(ll, lm) {
		abw(ll, lm)
	}, this.ly = function(ll, lm) {
		abw(ll, lm)
	}, this.ae = function(af) {
		2 === af && jq.ag[0].ah()
	};
	var a4, jl, lC, aA, dh = data.data,
		a5 = dh.length,
		max = 1;
	for (a4 = 0; a4 < a5; a4++) max = Math.max(max, dh[a4].aMO.length);
	for (a4 = 0; a4 < a5; a4++)
		for (; dh[a4].aMO.length < max;) dh[a4].aMO.unshift(0);
	jl = new Date, lC = 6e4 * jl.getTimezoneOffset(), aA = jl.getTime() - lC, abQ = new Date(aA), 6 === data.y6 ? function(jl, lC) {
		var abc = jl.getUTCFullYear(),
			jl = jl.getUTCMonth() + 1;
		abR = jl < 12 ? new Date(Date.UTC(abc, jl) - lC) : new Date(Date.UTC(abc + 1, 0) - lC)
	}(jl, lC) : (lC = 6e4 * abW[data.y6], abR = data.y6 <= 4 ? new Date(aA + lC - jl.getTime() % lC) : new Date(aA + lC - (jl.getTime() + 2592e5) % lC)), aA = aZ.color, colors = [t.u, aA.nY(255, 0, 0), aA.nY(0, 200, 0), aA.nY(80, 80, 255), aA.nY(
		255, 255, 0), aA.nY(255, 0, 255), aA.nY(0, 255, 255), aA.nY(255, 140, 0), aA.nY(128, 128, 128), aA.nY(0, 255, 140)], jq = new aR(L(525) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.y6] + ", " + aZ.aOR.lB(abQ), [new aS("⬅️ " +
		L(1),
		function() {
			aT.bl(1)
		}), new aS(L(142), function() {
		aT.bl(14)
	})], !1)
}
self.aiCommand746 = function(a9) {
	0 === a9 ? hR() : 1 !== a9 || !d0 || 1 !== d0.id || d0.oX < 14 || d1.a2e()
}, aWD(), setTimeout(hR, 1e4), window.onload = function() {
	hR()
};