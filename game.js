var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, bw, gP, gQ, gR, gS, gT, gU, gV, gW, gX, gY, gZ, ga, gb,
	im, jD, jE, aAA, mV, kf, a3l, ws, a0O, aEF, a6v, a6w, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "0.75em", "none", "<br>", "inherit", "0.8em", "rgb(", "center", "auto", "rgba(", "   ", "flex", "hidden", "span", "1em", "0.5em", "email",
		"Data", " / ", "territorial.io", "click", "pre", "password", "input",
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
	var b, c;

	function r() {
		(b = new WebSocket("wss://territorial.io/s52/")).onopen = a4, b.onclose = function() {
			a5()
		}
	}

	function a4() {
		if (b && b.readyState === b.OPEN) {
			var j = new a7;
			j.a8(1608), j.a9(1, 0), j.a9(6, 7), j.a9(2, a1 ? a1.id : 3), j.a9(1, m.aA ? 1 : 0), j.a9(1, m.aB ? 1 : 0), j.a9(1, m ? m.n : 0);
			for (var aC = 0; aC < c.length && aC < 228; aC++) j.a9(7, c.charCodeAt(aC) % 128);
			b.send(j.aD), a5()
		}
	}

	function a5() {
		b && (b.onclose = null, b.onopen = null, b = null)
	}
	window.addEventListener("error", function d(e) {
		c = "";
		try {
			var f = function(e) {
				if (!e.error) return 0;
				var stack = e.error.stack;
				if (!stack || !stack.length) return 0;
				for (var match, a6 = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = a6.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : 0
			}(e);
			return 0 === f || e.lineno <= 3 ? void console.log("Error: External Code | " + f) : (window.removeEventListener("error", d), c = e.lineno + " " + e.colno + "|" + f, __fx.reportError(e, c), alert("Error:\n" + e.filename + " " + e
				.lineno + " " + e.colno + " " + e.message))
		} catch (e) {
			c = "SE|" + c + "|" + e, console.log(c), alert(c)
		}
		r()
	})
}

function bx(by) {
	m && !by || (c0(), bO = new c1, bN = new c2, bD = new c3, bE = new c4, aE = new c5, bA = new c6, bI = new c7, bJ = new c8, aF = new c9, aG = new cA, aH = new cB, aI = new cC, aJ = new cD, aK = new cE, aL = new cF, aM = new cG, aN = new cH, aO =
		new cI, aP = new cJ, aQ = new cK, aR = new cL, aS = new cM, aT = new cN, aU = new cO, aV = new cP, aW = new cQ, aX = new cR, aY = new cS, aZ = new cT, aa = new cU, ab = new cV, ac = new cW, ad = new cX, al = new cY, am = new cZ, ao =
		new ca, an = new cb, ae = new cc, af = new cd, ai = new ce, ag = new cf, ah = new cg, aj = new ch, b0 = new ci, ak = new cj, aq = new ck, ar = new cl, at = new cm, b1 = new cn, az = new co, ap = new cp, au = new cq, av = new cr, aw =
		new cs, i = new ct, ax = new cu, ay = new cv, b2 = new cw, b3 = new cx, b4 = new cy, b5 = new cz, b6 = new d0, b7 = new d1, b8 = new d2, b9 = new d3, bB = new d4, bC = new d5, bF = new d6, bG = new a7, bH = new d7, bK = new d8, bL =
		new d9, bM = new dA, bP = new dB, bQ = new dC, bR = new dD, bS = new dE, bT = new dF, bU = new dG, bV = new dH, bW = new dI, u = new dJ, bX = new dK, a1 = new dL, m = new dM, bl = new dN, bm = new dO, bj = new dP, bk = new dQ, bd =
		new dR, be = new dS, bY = new dT, bZ = new dU, bg = new dV, bh = new dW, bi = new dX, bn = new dY, bf = new dZ, p = new da, bo = new db, bp = new dc, bq = new dd, bs = new de, bt = new df, bu = new dg, bv = new dh, bw = new di, m.dk(), a1
		.dk(), i.dl(), bm.dk(), bA.dk(), bA.dm(), (ba = new dn).dk(), bD.dk(), bY.dk(), b1.dk(), bI.dk(), bJ.dk(), bV.dk(), u.dk(), bb = new dp, i.dk(), bi.dk(), bf.dk(), bZ.dk(), bc = new dq, az.dk(), af.dr(), bX.dk(), aq.dk(), ab.dk(), aU.dk(),
		aj.dk(), bM.dk(), ac.dk(), bi.ds = !0, setTimeout(function() {
			bV.a8(2, 14071)
		}, 0), u.v(5, 5), bL.dt() || a1.a2.du(), i.dv(), m.n = 1)
}

function dM() {
	this.dw = 2, this.dx = 1764, this.dy = 0;
	this.rVersion = 25, this.dk = function() {
		this.o = "2.16.68", this.e3 = "3 Nov 2026 [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.e4 = 0 <= this.hostname.indexOf("github.io"), this.e5 = 0 <=
			this.hostname.indexOf("game.territorial.io"), this.aB = function() {
				try {
					return window.self !== window.top
				} catch (e) {
					return !0
				}
			}(), this.e7 = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.aA + " validMod: " + +this.e4)
	}, this.n = 0
}

function e8() {
	var e9 = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		eA = [100, 60, 30, 15, 6, 1],
		eB = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		eC = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		eE = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.eF = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.eG = function(id, eH, eI) {
		eH = this.eJ(eH);
		return +(eB[eH][id] > eI)
	}, this.eJ = function(eH) {
		for (var aC = 0; aC < eA.length; aC++)
			if (eA[aC] <= eH) return aC;
		return eA.length
	}, this.eK = function(eH) {
		return e9[this.eJ(eH)]
	}, this.eL = function(id, eM) {
		return eC[id].replace(new RegExp("x", "g"), eM)
	}, this.eN = function(id, eM) {
		return eE[id].replace(new RegExp("x", "g"), eM)
	}, this.eO = function(id, eP) {
		return this.eF[5][id]
	}
}

function dK() {
	this.eQ = new eR, this.eS = new eT, this.turnstile = new eU, this.dk = function() {
		a1.a2.eV(), this.turnstile.dk()
	}, this.eW = function() {
		return bm.buffer.data[160].value
	}
}

function eR() {
	var eX = 12e3;
	this.show = function(eY) {
		return !eY && !bX.eW() && (0 === a1.id ? bX.eS.show() : !(bi.eZ < eX) && (eY = 1 === a1.id ? 72e4 : 108e4, eX = bi.eZ + eY, 2 === m.dw) && a1.a2.eb(Math.floor(eY)))
	}
}

function eT() {
	var ec = null,
		eX = 2e4,
		ed = 0;
	this.ee = function() {
		bi.eZ < eX || (eX = bi.eZ + 1e4, 0 !== a1.id) || ec || bX.eW() || (b1.z.ef(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b1.eg.eh(5) : eX = bi.eZ + 1e3)
	}, this.ei = function(ej) {
		ec = ej
	}, this.show = function() {
		return !(!ec || bi.eZ < ed) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (ed = bi.eZ + 6e4, (new ek).show(ec.el, ec.colors, ec.id), !(ec = null)))
	}
}

function eU() {
	this.em = 0;
	var ep, en = null,
		eo = 0,
		eq = "",
		er = 0,
		es = null,
		et = -1,
		eu = -1,
		ev = 0;

	function f5() {
		if (null !== es && null !== en) {
			eo = 0;
			try {
				window.turnstile.remove(en), es.remove()
			} catch (e) {
				console.log("turnstile remove failed " + e)
			}
			en = es = null
		}
	}

	function ez(f9) {
		return "" !== eq && er + 1e3 * (300 - f9) > performance.now()
	}
	this.dk = function() {
		var ex;
		m.dy || !m.aA && !m.e4 ? (console.log("turnstile cannot be loaded"), this.em = -1) : ((ex = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", ex.async = !0, ex.onload =
			function() {
				bX.turnstile.em = 1, console.log("turnstile onload"), bX.turnstile.ey()
			}, ex.onerror = function() {
				bX.turnstile.em = -1, console.log("turnstile onerror")
			}, document.head.appendChild(ex))
	}, this.ey = function() {
		var ea;
		return !(1 !== this.em || (window.turnstile ? eo ? (console.log("turnstile error 246"), 1) : ez(30) || (ea = performance.now()) < ev && et === bJ.f0.f1(bm.buffer.data[105].value, 5) && eu === aa.f2 || (eq = "", eo = 1, ep = ea, (es =
			document.createElement("div")).style.position = "fixed", es.style.left = "0", es.style.top = "0", es.style.zIndex = "100", document.body.appendChild(es), console.log("turnstile render"), en = window.turnstile.render(
			es, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(f3) {
					console.log("turnstile success " + Math.floor(performance.now() - ep)), eq = f3, er = performance.now(), bX.turnstile.f4(), f5()
				},
				"expired-callback": function() {
					f5(), console.log("turnstile expired " + Math.floor(performance.now() - ep))
				},
				"error-callback": function() {
					f5(), console.log("turnstile callback error " + Math.floor(performance.now() - ep)), bX.turnstile.em = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		f5()
	}, this.f4 = function() {
		ez(8) && bq.f6 && b1.z.ef(b1.z.f7) && (ev = performance.now() + 36e5 - 1e4, et = bJ.f0.f1(bm.buffer.data[105].value, 5), eu = aa.f2, b1.eg.f8(eq), eq = "", console.log("sendTokenToLobby success"))
	}
}

function cb() {
	this.fA = new fB
}

function fB() {
	this.fC = function(fD) {
		var fG;
		return bV.fE(bV.fF) && aE.data.passableMountains && (fG = ad.fH(fD), this.fI(aE.fJ, fG) || this.fK(aE.fJ, fG)) && 0 !== (fG = function(ff) {
			for (var fg = bP.fh(ff), fi = bP.fj(ff), max = Math.max(bV.fk, bV.fl) - 2, fm = max * max, fn = !1, fo = 0, fp = 0; fp < max; fp++) {
				var fq, fL = function(fg, fi, fp) {
					for (var aC = 0; aC <= fp; aC++)
						for (var fs = -1; fs < 2; fs += 2)
							for (var ft = -1; ft < 2; ft += 2)
								for (var ej = 0; ej < 2; ej++) {
									var fD = function(fg, fi) {
										if (bP.fv(fg, fi)) {
											fg = bP.fw(fg, fi), fi = bP.fP(fg);
											if (ad.fU(fi) && ad.fx(fi)) return fg
										}
										return 0
									}(fg + ej * fs * aC + (1 - ej) * ft * fp, fi + ej * ft * fp + (1 - ej) * fs * aC);
									if (fD) return fD
								}
					return 0
				}(fg, fi, fp);
				fL && (fq = bP.fr(fg, fi, fL)) < fm && (fo = fL, fm = fq, fn || (fn = !0, max = Math.floor(Math.sqrt(fq)) + 1))
			}
			return fo
		}(bP.fN(fD))) && (fD = bP.fP(fG), ad.fQ(fD) || (fD = ad.fR(fD)) !== aE.fJ && bv.fS(fD, aE.fJ)) ? fG : 0
	}, this.fT = function(player, fL) {
		fL = bP.fP(fL);
		if (ad.fU(fL)) {
			if (ad.fQ(fL)) bR.fV[0] = aE.fW;
			else if (ad.fR(fL) !== bR.fV[0]) return !1;
			for (var fX = function(fD) {
					var fb = ad.fb,
						fX = [];
					loop: for (var fc = 3; 0 <= fc; fc--) {
						var fd = fD + fb[fc];
						if (ad.fe(fd)) {
							for (var id = ad.fH(fd), aC = 0; aC < fX.length; aC++)
								if (id === fX[aC]) continue loop;
							bR.fa[fX.length] = fd, fX.push(id)
						}
					}
					return fX
				}(fL), fZ = fX.length, aC = 0; aC < fZ; aC++)
				if (this.fI(player, fX[aC]) || this.fK(player, fX[aC])) return bR.fa[0] = bR.fa[aC], !0
		}
		return !1
	}, this.fI = function(player, fG) {
		for (var fy = ah.fy[player], fZ = fy.length, fz = Math.max(bO.g0(fZ, 12), 1), fb = ad.fb, aC = 0; aC < fZ; aC += fz)
			for (var fO = fy[aC], fc = 3; 0 <= fc; fc--) {
				var fd = fO + fb[fc];
				if (ad.fe(fd) && fG === ad.fH(fd)) return !0
			}
		return !1
	}, this.fK = function(player, fG) {
		for (var fy = ah.fy[player], fZ = fy.length, fb = ad.fb, aC = 0; aC < fZ; aC++)
			for (var fO = fy[aC], fc = 3; 0 <= fc; fc--) {
				var fd = fO + fb[fc];
				if (ad.fe(fd) && fG === ad.fH(fd)) return !0
			}
		return !1
	}
}

function dD() {
	this.h = new Array(4), this.g3 = new Uint16Array(2), this.g4 = new Uint16Array(2), this.g5 = new Int32Array(2), this.g6 = new Uint32Array(2), this.g7 = new Uint32Array(2), this.g8 = new Uint8Array(4), this.g9 = new Uint8Array(4), this.fa =
		new Uint32Array(4), this.gA = new Uint32Array(5), this.fV = new Uint32Array(8), this.gB = new Uint32Array(8), this.gC = new Uint16Array(16), this.gD = new Uint16Array(512), this.gE = new Uint16Array(512), this.gF = new Uint16Array(512), this
		.gG = new Uint16Array(0), this.dk = function() {
			var fZ = bV.fk * bV.fl;
			this.gG.length !== fZ && (this.gG = new Uint16Array(fZ))
		}, this.gH = function(h, gI) {
			return h[0] = gI, h
		}, this.gJ = function(h, gI, gK) {
			return h[0] = gI, h[1] = gK, h
		}, this.gL = function(h, gI, gK, gM) {
			return h[0] = gI, h[1] = gK, h[2] = gM, h
		}, this.gN = function(h, gI, gK, gM, gO) {
			return h[0] = gI, h[1] = gK, h[2] = gM, h[3] = gO, h
		}
}

function gc() {
	gV = 0, gW = 2048, gX = new Uint32Array(4 * gW), gY = 0, gZ = new Uint32Array(gW), ga = new Uint8Array(bV.fk * bV.fl)
}

function gd(player) {
	gQ = player, gb = !1, ge(), gf();
	for (var aC = ae.gg(gQ) - 1; 0 <= aC; aC--) gP = aC, gh();
	gb && gi()
}

function gi() {
	bv.gj(), bv.gk()
}

function gh() {
	gU = ae.gl(gQ, gP), gR = ae.gm(gQ, gP), gS = ae.gn(gQ, gP), go(), (0 !== gV && (gq(), gr()) ? gs : gp)()
}

function gr() {
	if (!((gT = bO.g0(gR, gV)) > aE.gt)) {
		if (!gS) return !1;
		var gu = gV * (1 + aE.gt);
		gR += bD.gv.gw(gQ, gu - gR), gT = bO.g0(gR, gV)
	}
	return !0
}

function gq() {
	for (var aC = gV - 1; 0 <= aC; aC--) ga[bO.g0(gX[aC], 4)] = 0
}

function gp() {
	1 === ae.gg(gQ) && aG.gx(gQ);
	var ea = bD.gv.gy(gQ, gR);
	bg.gz(gQ, gR - ea, 12), ae.h0(gQ, gP)
}

function ge() {
	for (var player = gQ, h1 = ah.h1, fZ = Math.min(h1[player].length, gW), h2 = 0, h3 = gZ, aC = fZ - 1; 0 <= aC; aC--) h3[h2++] = h1[player][aC];
	gY = h2
}

function gf() {
	for (var aC = ah.h1[gQ].length - 1; 0 <= aC; aC--) ad.fU(ah.h1[gQ][aC]) && ad.h4(ah.h1[gQ][aC], gQ);
	ah.h1[gQ] = []
}

function go() {
	gV = 0, (gU === aE.fW ? h5 : h6)()
}

function h6() {
	for (var h7, h8, aC, fb = ad.fb, fc = 3; 0 <= fc; fc--)
		for (aC = gY - 1; 0 <= aC; aC--) h7 = gZ[aC] + fb[fc], h8 = bO.g0(h7, 4), 0 === ga[h8] && ad.h9(h7) && ad.fR(h7) === gU && (ga[h8] = 1, gX[gV++] = h7)
}

function h5() {
	for (var h7, h8, aC, fb = ad.fb, fc = 3; 0 <= fc; fc--)
		for (aC = gY - 1; 0 <= aC; aC--) h7 = gZ[aC] + fb[fc], h8 = bO.g0(h7, 4), 0 === ga[h8] && ad.fQ(h7) && (ga[h8] = 1, gX[gV++] = h7)
}

function gs() {
	hA() ? (hB(), gU !== aE.fW && hC()) : gp()
}

function hC() {
	bv.hD(), bv.hE(ah.hF[gU]), bv.hE(ah.hG[gU]), bV.fE(bV.fF) && bv.hE(ah.fy[gU]), bv.hH(ah.h1[gU]), bv.hI(ah.hG[gU]), bv.hI(ah.fy[gU]), bv.hJ(), bv.hK()
}

function hB() {
	gb = !0, ae.hL(gQ, gP, gR), ae.hM(gQ, gP), ah.hN[gQ] += gV, bv.hO(), hP()
}

function hA() {
	return (gU === aE.fW ? hQ : hR)()
}

function hR() {
	var hS = gV * aE.gt,
		hT = hU(),
		hV = hW(),
		hT = hS + 2 * hT + hV,
		hY = gT * gV;
	return hT < hY ? (gR -= hT, bg.gz(gQ, hT, 13), hZ(hT - hS, hV), !0) : gS && 0 === hV ? (gR -= hY, hY += bD.gv.gw(gQ, hT - hY + 1), bg.gz(gQ, hY, 13), hZ(hY - hS, 0), !0) : (gR -= hY, bg.gz(gQ, hY, 13), hZ(hY - hS, hV), !1)
}

function hZ(hY, hV) {
	if (0 < hV) {
		if (hY <= hV) return bg.gz(gU, hY, 13), void ae.ha(gU, gQ, hV - hY);
		ae.ha(gU, gQ, 0), hY -= hV
	}
	hY = bO.g0(hY, 2), hY = Math.min(ah.hb[gU], hY), bg.gz(gU, hY, 13), ah.hb[gU] -= hY
}

function hW() {
	return ae.hc(gU, gQ)
}

function hU() {
	return bO.g0(gV * ah.hb[gU], 1 + bO.g0(10 * ah.hN[gU], 16))
}

function hQ() {
	var hd = gV * aE.gt;
	return gR -= hd, bg.gz(gQ, hd, 13), !0
}

function hP() {
	for (var aC = gV - 1; 0 <= aC; aC--) ah.h1[gQ].push(gX[aC]), ah.hF[gQ].push(gX[aC]), ad.h4(gX[aC], gQ)
}

function dI() {
	var he = 0,
		hf = 0;
	this.hg = function(fg, fi) {
		he = fg, hf = fi
	}, this.hh = function(code) {
		var ho, hq, fL;
		aE.hi || aN.hj || (bD.gv.hk(0) || bD.gv.hk(1)) && bD.gv.hl(aE.fJ) && (aS.hm(he, hf) ? aS.hn = !1 : aQ.hm(he, hf) || (ho = bP.hp(he), hq = bP.hr(hf), fL = bP.fw(ho, hq), bP.hs(ho, hq) && (0 === code ? function(fL) {
			var hw, fD, fO;
			aE.hx ? -1 !== (hw = bu.hy(fL)) && bB.hz.i0(fL) : (fD = bP.fP(fL), ad.fe(fD) ? (hw = an.fA.fC(fD)) && (fO = bP.fP(hw), fO = ad.fQ(fO) ? aE.fW : ad.fR(fO), bB.hz.i2(aS.i3(), hw, fO)) : (hw = bu.i4(fL)) < 0 || (fD = bP
				.fP(hw), ad.fQ(fD) ? bv.i5(aE.fJ) ? bB.hz.i6(aS.i3(), aE.fW) : ae.gg(aE.fJ) && b2.i7(aE.fW, aS.i3()) : (fO = ad.fR(fD), bv.fS(fO, aE.fJ) && (bv.i8(aE.fJ, fO) ? bB.hz.i6(aS.i3(), fO) : ae.gg(aE.fJ) && b2.i7(
					fO, aS.i3())))))
		}(fL) : 1 === code ? function(fL) {
			bQ.i9.iA(aE.fJ, fL) && bB.hz.iB(aS.i3(), bR.gB[7])
		}(fL) : 2 === code && function(fL) {
			bQ.iC.iD(aE.fJ, fL) && bB.hz.iE(aS.i3())
		}(fL))))
	}, this.iF = function() {
		if (!aE.hi && !aN.hj && bD.gv.hk(1)) {
			var h7 = aE.fJ;
			if (bD.gv.hl(h7)) {
				var fZ = ae.gg(h7);
				if (fZ < 1) ! function() {
					var h7 = aE.fJ;
					if (bv.i5(h7)) bB.hz.i6(aS.i3(), aE.fW);
					else
						for (var fb = ad.fb, hF = ah.hF, fZ = hF[h7].length, iP = Math.floor(Math.random() * fZ), aC = 0; aC < fZ; aC++)
							for (var iQ = 3; 0 <= iQ; iQ--) {
								var iR = hF[h7][(aC + iP) % fZ] + fb[iQ];
								if (ad.h9(iR)) {
									iR = ad.fR(iR);
									if (iR !== h7 && (!aE.iT || bv.fS(h7, iR))) return bB.hz.i6(aS.i3(), iR)
								}
							}
				}();
				else {
					for (var iH = 0, iI = ae.gm(h7, 0), aC = 1; aC < fZ; aC++) {
						var iJ = ae.gm(h7, aC);
						iJ < iI && (iI = iJ, iH = aC)
					}
					bB.hz.i6(aS.i3(), ae.gl(h7, iH))
				}
			}
		}
	}, this.iK = function() {
		if (!aE.hi && !aN.hj && bD.gv.hl(aE.fJ) && bD.gv.hk(1)) return ax.iL ? ax.iM(aE.fJ) ? void bB.hz.iN(1) : void 0 : void(ax.iO(aE.fJ) && bB.hz.iK())
	}
}

function iU(iV, size, iW, iX, font) {
	var aC, ia = .2,
		canvas = document.createElement("canvas"),
		ib = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = iV, canvas.height = iV, ib.font = size + font, ib.textAlign = "center", ib.textBaseline = "middle", ib.fillStyle = "red", aC = 0; aC < iW.length; aC++) ib.fillText(iW[aC], .5 * iV, .5 * iV);
	return -1 < (canvas = function(iY) {
		var aC, eH, fc = iY.data;
		for (aC = fc.length - 4; 0 <= aC; aC -= 4)
			if (eH = fc[aC], iX <= eH) return Math.floor(aC / (4 * iV));
		return -1
	}(ib.getImageData(0, 0, iV, iV))) && (ia = (canvas - .5 * iV + .1 * size) / size), Math.max(ia, 0)
}

function dB() {
	this.ie = new Int16Array(4), this.ig = new Int16Array(4), this.ih = null, this.dk = function() {
		var aC;
		for (this.ie[0] = -bV.fk, this.ie[1] = 1, this.ie[2] = bV.fk, this.ie[3] = -1, this.ih = new Int16Array([-bV.fk, 1 - bV.fk, 1, bV.fk + 1, bV.fk, bV.fk - 1, -1, -bV.fk - 1]), aC = 0; aC < 4; aC++) this.ig[aC] = 4 * this.ie[aC]
	}, this.ii = function() {
		return bO.ij(Math.floor(.15 * (1 + .25 * a1.a2.ik()) * i.il / im), 4, 128)
	}, this.io = function(fD, id) {
		for (var ip = this.ig, aC = 0; aC < 4; aC++) {
			var fO = fD + ip[aC];
			if (ad.iq(fO) && ad.fH(fO) === id) return !0
		}
		return !1
	}, this.ir = function(player, fD) {
		return !ad.fQ(fD) && player === ad.fR(fD)
	}, this.fr = function(ho, hq, fL) {
		return (ho -= this.fh(fL)) * ho + (hq -= this.fj(fL)) * hq
	}, this.is = function(it, iu, iv) {
		it = this.ix(it) - this.iy(iv), iu = this.j0(iu) - this.j1(iv);
		return Math.sqrt(it * it + iu * iu)
	}, this.j2 = function(j3, j4) {
		var iw = this.fh(j3) - this.fh(j4),
			j3 = this.fj(j3) - this.fj(j4);
		return ~~Math.sqrt(iw * iw + j3 * j3 + .5)
	}, this.j5 = function(j3, j4) {
		var iw = this.fh(j3) - this.fh(j4),
			j3 = this.fj(j3) - this.fj(j4);
		return iw * iw + j3 * j3
	}, this.j6 = function(j7, j8, j9, jA) {
		return (j7 -= j9) * j7 + (j8 -= jA) * j8
	}, this.jB = function(h7, jC) {
		return bO.g0(jC * ah.hb[h7], 1e3)
	}, this.ix = function(it) {
		return 16 * (it + jD) / im
	}, this.j0 = function(iu) {
		return 16 * (iu + jE) / im
	}, this.jF = function(fc) {
		return 16 * fc / im
	}, this.hp = function(it) {
		return Math.floor((it + jD) / im)
	}, this.hr = function(iu) {
		return Math.floor((iu + jE) / im)
	}, this.hs = function(ho, hq) {
		return 1 <= ho && 1 <= hq && ho < bV.fk - 1 && hq < bV.fl - 1
	}, this.fh = function(fL) {
		return fL % bV.fk
	}, this.fj = function(fL) {
		return bO.g0(fL, bV.fk)
	}, this.fw = function(ho, hq) {
		return hq * bV.fk + ho
	}, this.jG = function(ho, hq) {
		return 4 * this.fw(ho, hq)
	}, this.jH = function(fL) {
		return this.fv(this.fh(fL), this.fj(fL))
	}, this.fv = function(ho, hq) {
		return 0 < ho && ho < bV.fk - 1 && 0 < hq && hq < bV.fl - 1
	}, this.fP = function(fL) {
		return fL << 2
	}, this.fN = function(fD) {
		return fD >> 2
	}, this.jI = function(fL) {
		return bV.fk * this.fj(fL) * 256 + (this.fh(fL) << 4)
	}, this.jJ = function(fL) {
		return this.jI(fL) + 8 + (bV.fk << 7)
	}, this.jK = function(iv) {
		return bV.fk * (this.j1(iv) >> 4) + (this.iy(iv) >> 4)
	}, this.jL = function(iv) {
		iv = this.jK(iv);
		return (this.fh(iv) >> 5) + bQ.jM.jN * (this.fj(iv) >> 5)
	}, this.iy = function(iv) {
		return iv % (bV.fk << 4)
	}, this.j1 = function(iv) {
		return bO.g0(iv, bV.fk << 4)
	}, this.jO = function(fL, iQ) {
		return fL + this.ie[iQ]
	}, this.jP = function(fD, iQ) {
		return fD + this.ig[iQ]
	}, this.jQ = function(j3, j4) {
		var iw = this.fh(j4) - this.fh(j3),
			j4 = this.fj(j4) - this.fj(j3);
		return Math.abs(iw) >= Math.abs(j4) ? 1 + 2 * (iw < 0) : 2 * (0 < j4)
	}, this.jR = function(player) {
		return this.fw(ah.jS[player] + ah.jT[player] >> 1, ah.jU[player] + ah.jV[player] >> 1)
	}, this.jW = function(player) {
		return this.fw(az.jX(ah.jS[player], ah.jT[player]), az.jX(ah.jU[player], ah.jV[player]))
	}
}

function cp() {
	this.jY = new jZ, this.ja = new jb, this.jc = new jd, this.performance = new je, this.jf = new jg, this.jh = new ji, this.jj = new jk, this.jl = new jm, this.jn = new jo, this.dk = function() {
		this.jY.dk(), this.jc.dk(), this.performance.dk(), this.jf.dk(), this.jh.dk()
	}, this.ee = function() {
		this.performance.ee(), this.jY.ee(), this.jc.jp()
	}
}

function jg() {
	var jq, js = new Uint16Array(8);

	function k0(size, player) {
		for (var aC = ah.h1[player].length - 1; size <= aC; aC--) ad.k6(ah.h1[player][aC], player)
	}
	this.dk = function() {
		jq = 0
	}, this.jt = function(player, ju) {
		return bR.fV[1] = ah.h1[player].length, bR.fV[0] === aE.fW ? ap.jf.jv(player) : this.jw(player, bR.fV[0]), (0 !== bR.fV[1] || 0 !== ah.h1[player].length) && !(!ju && bR.fV[1] === ah.h1[player].length || (bR.fV[0] === aE.fW ? ah.jx[
			player]++ : ah.jy[player]++, 0))
	}, this.jz = function(player) {
		k0(bR.fV[1], player), ae.ei(player, bR.g6[0], bR.fV[0]), aG.k1(player, !1)
	}, this.k2 = function(player, k3, fZ, iI) {
		var k4 = bO.g0(12 * ah.hb[player], 1024);
		iI -= iI >= bO.g0(ah.hb[player], 2) ? k4 : 0, k0(fZ, player), ae.ei(player, iI, k3), ah.hb[player] -= iI + k4, aG.k1(player, !1)
	}, this.jw = function(player, k3) {
		for (var iQ, fb = ad.fb, aC = ah.hF[player].length - 1; 0 <= aC; aC--)
			if (ad.k5(ah.hF[player][aC]))
				for (iQ = 3; 0 <= iQ; iQ--)
					if (ad.h9(ah.hF[player][aC] + fb[iQ]) && ad.fR(ah.hF[player][aC] + fb[iQ]) === k3) {
						ah.h1[player].push(ah.hF[player][aC]);
						break
					}
	}, this.jv = function(player) {
		for (var fb = ad.fb, aC = ah.hF[player].length - 1; 0 <= aC; aC--)
			if (ad.k5(ah.hF[player][aC]))
				for (var iQ = 3; 0 <= iQ; iQ--)
					if (ad.fQ(ah.hF[player][aC] + fb[iQ])) {
						ah.h1[player].push(ah.hF[player][aC]);
						break
					}
	}, this.k7 = function(player, k8) {
		var aC, fs, iQ, iS, fZ = ah.hF[player].length,
			k9 = 256 <= fZ ? 12 : 32 <= fZ ? 6 : 1,
			kA = fZ - 1 - az.kB(k9),
			fb = ad.fb;
		jq = 0;
		loop: for (aC = kA; 0 <= aC; aC -= k9)
			for (iQ = 3; 0 <= iQ; iQ--)
				if ((iS = ad.fQ(ah.hF[player][aC] + fb[iQ]) ? aE.fW : ad.fR(ah.hF[player][aC] + fb[iQ])) === aE.fW || ad.h9(ah.hF[player][aC] + fb[iQ]) && iS !== player && (k8 || bv.fS(player, iS))) {
					for (fs = jq - 1; 0 <= fs; fs--)
						if (js[fs] === iS) continue loop;
					if (js[jq] = iS, 8 <= ++jq) return !0
				}
		return 0 < jq
	}, this.kC = function(player, k8) {
		var aC, iQ, iS, fb = ad.fb;
		for (jq = 0, aC = ah.hF[player].length - 1; 0 <= aC; aC--)
			for (iQ = 3; 0 <= iQ; iQ--)
				if ((iS = ad.fQ(ah.hF[player][aC] + fb[iQ]) ? aE.fW : ad.fR(ah.hF[player][aC] + fb[iQ])) === aE.fW || ad.h9(ah.hF[player][aC] + fb[iQ]) && iS !== player && (k8 || bv.fS(player, iS))) return js[jq++] = iS, !0;
		return !1
	}, this.kD = function() {
		for (var ft, aC = jq - 1; 0 <= aC; aC--)
			if (js[aC] === aE.fW) {
				for (jq--, ft = aC; ft < jq; ft++) js[ft] = js[ft + 1];
				return !0
			} return !1
	}, this.kE = function(player) {
		for (var ft, aC = jq - 1; 0 <= aC; aC--)
			if (ae.kF(player, js[aC]))
				for (jq--, ft = aC; ft < jq; ft++) js[ft] = js[ft + 1];
		return 0 === jq
	}, this.kG = function() {
		for (var aC = jq - 1; 0 <= aC; aC--)
			if (bD.gv.kH(js[aC])) return !0;
		return !1
	}, this.kI = function() {
		for (var aC = jq - 1; 0 <= aC; aC--) bD.gv.kH(js[aC]) || (js[aC] = js[--jq]);
		return 0 < jq
	}, this.kJ = function(player) {
		for (var ft, kK = js[0], kL = ah.hb[kK] + ae.hc(kK, player), aC = jq - 1; 1 <= aC; aC--)(ft = ah.hb[js[aC]] + ae.hc(js[aC], player)) < kL && (kK = js[aC], kL = ft);
		return kK
	}, this.kM = function(player) {
		var k, kN = js[0];
		if (1 !== jq)
			for (var kO = bO.g0(ah.jT[player] + ah.jS[player], 2), kP = bO.g0(ah.jV[player] + ah.jU[player], 2), fp = kQ(kO - bO.g0(ah.jT[kN] + ah.jS[kN], 2)) + kQ(kP - bO.g0(ah.jV[kN] + ah.jU[kN], 2)), aC = jq - 1; 1 <= aC; aC--)(k = kQ(kO - bO
				.g0(ah.jT[js[aC]] + ah.jS[js[aC]], 2)) + kQ(kP - bO.g0(ah.jV[js[aC]] + ah.jU[js[aC]], 2))) < fp && (fp = k, kN = js[aC]);
		return kN
	}, this.kR = function() {
		for (var kS = js, kT = kS[0], hb = ah.hb, kU = hb[kT], aC = jq - 1; 1 <= aC; aC--) {
			var h7 = kS[aC],
				ft = hb[h7];
			kU < ft && (kT = h7, kU = ft)
		}
		return kT
	}, this.kV = function() {
		return js[az.kB(jq)]
	}
}

function ji() {
	function kl(player, k3, kb) {
		3 <= kb && 2142 < bi.kr() && (k3 === aE.fW || ah.hb[k3] < bO.g0(ah.hb[player], 20)) && aF.kg(player, 20)
	}

	function ko(player, iI, k3, kb) {
		3 <= kb && kb < 6 && bO.g0(ah.hb[player], 8) > ah.hb[k3] && (iI = Math.max(bO.g0(11 * ah.hb[k3], 5), bO.g0(ah.hb[player], 10)));
		kb = ah.h1[player].length;
		ap.jf.jw(player, k3), ap.jf.k2(player, k3, kb, iI)
	}

	function kk(player, iI) {
		var k3 = aE.fW,
			fZ = ah.h1[player].length;
		ap.jf.jv(player), ah.h1[player].length !== fZ && ap.jf.k2(player, k3, fZ, iI)
	}
	this.kW = new Uint8Array(aE.fW), this.dk = function() {
		this.kW.fill(0)
	}, this.kX = function(player, iI) {
		var kZ, kb, kc, kd;
		ae.kY(player) && (kZ = af.ka(player), 3 <= (kb = aF.iI[player]) && kb < 6 && (iI = Math.max(ah.hb[player] - kZ, iI)), kc = ah.hG[player].length, kd = ah.hF[player].length, 30 * ah.hN[player] > aE.ke && kf[player] < 10 && 100 * kd <= kc &&
			aF.kg(player, 10), aE.iT ? function(player, iI, kb, kZ) {
				var k3;
				if (ap.jf.k7(player, !1) || ap.jf.kC(player, !1)) {
					if (!ap.jf.kE(player))
						if (ap.jf.kD()) kk(player, iI), kl(player, aE.fW, kb);
						else {
							if (az.km(aF.kn[kb])) k3 = ap.jf.kJ(player);
							else {
								if (ap.jf.kG() && az.km(aF.kp[kb]) && ap.jf.kI(), 6 === kb) return ko(player, iI, ap.jf.kV(), kb);
								k3 = ap.jf.kM(player)
							}
							ko(player, iI, k3, kb), kl(player, k3, kb)
						}
				} else bQ.ki.ee(player) || ap.jj.ee(player) || ! function(player, iI, kb, kZ) {
					var kW = ap.jh.kW;
					kW[player] = 0;
					var ks = bj.fX[player];
					if (0 !== ks) {
						var kt = ah.hb[player],
							hN = ah.hN;
						if (player < aE.ku && (iI = kt), !(kt < hN[player] || 5 === kb && kt < kZ || 4 === kb && kt < bO.g0(kZ, 2))) {
							bk.kv(ks);
							for (var fZ = bR.g4[0], gD = bR.gD, aC = az.kB(fZ), ft = 0; ft < fZ; ft++) {
								var ej = gD[(ft + aC) % fZ];
								if (kW[ej]) return bB.kw.kx(player, ej, iI)
							}
							var ky = bQ.z.ky;
							for (ft = 0; ft < fZ; ft++)
								if (ej = gD[(ft + aC) % fZ], ky[ej] && ej !== player) return bB.kw.kx(player, ej, iI)
						}
					}
				}(player, iI, kb, kZ)
			}(player, iI, kb, kZ) : (!kd || kc && (kc < kd && !az.kB(10) || 100 * kd <= kc && az.kB(3) || !az.kB(8))) && bQ.ki.ee(player) || function(player, iI, kb) {
				ap.jf.k7(player, !0) || ap.jf.kC(player, !0) ? ap.jf.kE(player) || (ap.jf.kD() ? kk(player, iI) : az.km(aF.kn[kb]) ? ko(player, iI, ap.jf.kJ(player), kb) : 5 === kb ? ko(player, iI, ap.jf.kR(), kb) : (ap.jf.kG() && az.km(aF
					.kp[kb]) && ap.jf.kI(), ko(player, iI, 6 === kb ? ap.jf.kV() : ap.jf.kM(player), kb))) : ap.jj.ee(player)
			}(player, iI, kb))
	}
}

function c9() {
	var kz = new Uint8Array(aE.fW),
		l0 = new Uint16Array(aE.fW),
		l1 = new Uint16Array(aE.fW),
		l2 = new Uint8Array(aE.fW),
		l3 = (this.iI = new Uint8Array(aE.fW), new Uint16Array(aE.fW)),
		l4 = new Uint16Array(aE.fW);

	function lJ(aC) {
		kz[aC] = 1 + bO.g0(l3[aC] * az.random(), 10 * az.value(100))
	}
	this.l5 = null, this.kp = [97, 94, 70, 40, 20, 0, 100], this.l6 = [500, 450, 400, 300, 80, 50, 100], this.kn = [0, 0, 5, 25, 50, 100, 0], this.l7 = [60, 74, 112, 200, 256, 512, 512], this.l8 = [1, 2, 3, 4, 6, 8, 1], this.l9 = [500, 450, 400, 300,
		80, 50, 100
	], this.lA = [100, 150, 250, 400, 600, 1e3, 100], this.dl = function() {
		this.l5 = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dk = function() {
		kz.fill(0), l0.fill(0), l1.fill(0), l2.fill(0), this.iI.fill(0), l3.fill(0), l4.fill(0);
		var lB = aE.ku;
		if (9 === aE.lC) this.lD();
		else if (__fx.customLobby.isActive())
			for (aC = aE.lG - 1; 0 <= aC; aC--) this.iI[aC + lB] = __fx.customLobby.gameInfo.difficulty;
		else if (aE.lE)
			if (3 === aE.data.botDifficultyType)
				for (aC = aE.lG - 1; 0 <= aC; aC--) {
					var iR = aC + lB;
					this.iI[iR] = aE.data.botDifficultyData[iR]
				} else if (2 === aE.data.botDifficultyType)
					for (aC = aE.lG - 1; 0 <= aC; aC--) this.iI[iR = aC + lB] = aE.data.botDifficultyTeam[bj.lH[bj.fX[iR]]];
				else if (1 === aE.data.botDifficultyType) {
			var lI = this.l5.length;
			for (aC = aE.lG - 1; 0 <= aC; aC--) this.iI[aC + lB] = aC % lI
		} else
			for (lI = aE.data.botDifficultyValue, aC = aE.lG - 1; 0 <= aC; aC--) this.iI[aC + lB] = lI;
		else
			for (var lF = 8 === aE.lC ? 1 : 0, aC = aE.lG - 1; 0 <= aC; aC--) this.iI[aC + lB] = lF;
		for (aC = 0; aC < lB; aC++) this.iI[aC] = 6;
		var fZ = aE.fW;
		for (aC = 0; aC < fZ; aC++) this.iI[aC] <= 2 ? (l2[aC] = 5, l3[aC] = l4[aC] = 1040, 0 === this.iI[aC] ? (l0[aC] = 980, l1[aC] = 980) : 1 === this.iI[aC] ? (l0[aC] = 980, l1[aC] = 920, l3[aC] = l4[aC] = 1100) : (l0[aC] = 825, l1[aC] =
			750)) : this.iI[aC] <= 4 ? (l2[aC] = 1 + az.kB(20), 3 === this.iI[aC] ? (l0[aC] = l1[aC] = 500, l3[aC] = l4[aC] = 1e3) : (l4[aC] = 250 + az.kB(1501), l3[aC] = 500 + az.kB(501), l0[aC] = 300 + az.kB(201), l1[aC] = 100 + az.kB(
			201))) : this.iI[aC] <= 5 ? (l3[aC] = 1e3, l4[aC] = 1e3, l2[aC] = 35 + az.kB(16), l0[aC] = 300 + az.kB(201), l1[aC] = 50 + az.kB(101)) : (l3[aC] = l4[aC] = 800, l2[aC] = 5, l0[aC] = 10, l1[aC] = 250), lJ(aC)
	}, this.lD = function() {
		for (var fD = b0.lK, lB = aE.ku, aC = fD - 1; 0 <= aC; aC--) this.iI[aC + lB] = 0;
		for (var ft = 0; ft < 6; ft++) {
			for (aC = fD + b0.lL[ft] - 1; fD <= aC; aC--) this.iI[aC + lB] = ft;
			fD += b0.lL[ft]
		}
	}, this.kg = function(h7, value) {
		kz[h7] = Math.min(value, kz[h7])
	}, this.ee = function(h7) {
		0 == --kz[h7] && ! function(h7) {
			(function(h7) {
				l3[h7] !== l4[h7] && (l3[h7] += l3[h7] < l4[h7] ? 3 : -3);
				l0[h7] !== l1[h7] && (l0[h7] += l0[h7] < l1[h7] ? l2[h7] : -l2[h7], l0[h7] = (Math.abs(l0[h7] - l1[h7]) <= l2[h7] ? l1 : l0)[h7]);
				kz[h7] = bO.g0(l3[h7], 10)
			})(h7), ap.jh.kX(h7, bO.g0(l0[h7] * ah.hb[h7], 1e3))
		}(h7)
	}, this.lO = function(h7, h2) {
		l3[h7] = l4[h7] = h2
	}
}

function jd() {
	var lP = new Uint16Array(aE.fW);

	function le(player, lc) {
		for (var fZ = bR.g4[0], gC = bR.gC, lq = -1, lr = aE.fW, aC = 0; aC < fZ; aC++) {
			var fp, h7 = gC[aC];
			bv.fS(player, h7) && (fp = bP.j5(lc, bP.jR(h7)), -1 === lq || fp < lq) && (lq = fp, lr = h7)
		}
		return lr
	}

	function lg(ld, lc) {
		if (ld === aE.fW) return 0;
		var hG = ah.hG[ld],
			lp = hG.length;
		if (0 === lp) return 0;
		for (var fZ = Math.min(lp, 10), lr = 0, lq = bP.j5(hG[lr] >> 2, lc), aC = 0; aC < fZ; aC++) {
			var iR = az.kB(lp),
				fp = bP.j5(hG[iR] >> 2, lc);
			fp < lq && (lq = fp, lr = iR)
		}
		return hG[lr] >> 2
	}

	function ll(player, lc, k3, lt) {
		var lu;
		(lt === aE.fW || (lu = bP.jR(k3), lt = bP.jR(lt), bP.j5(lc, lu) < bP.j5(lc, lt))) && (lP[player] = k3)
	}
	this.dk = function() {
		lP.fill(aE.fW)
	}, this.jp = function() {
		if (bi.kr() % 109 == 9 && !(am.lQ < 20) && aE.iT && !(bk.lR() < bO.g0(8 * aE.ke, 10))) {
			var lS = bk.lT();
			if (bj.lH[lS]) {
				bk.lU(lS);
				var fZ = bR.g4[0];
				if (0 !== fZ)
					for (var h = bR.gD, lV = am.lV, lQ = am.lQ, lW = lP, iR = az.kB(fZ), aC = 0; aC < lQ; aC++) {
						var i1 = lV[aC],
							lX = h[iR];
						bD.gv.lY(i1, lX) && 512 === lW[i1] && (lW[i1] = lX, iR = (iR + 1) % fZ)
					}
			}
		}
	}, this.ee = function(player) {
		var lc, lf, ld, lZ = function(player) {
			var k3 = lP[player];
			if (k3 !== aE.fW) {
				if (bD.gv.ls(k3) && ah.hG[k3]) return k3;
				lP[player] = aE.fW
			}
			return aE.fW
		}(player);
		return function(player) {
			for (var lo = am.lV, lp = am.lQ, fZ = Math.min(lp, lp < 17 && 5 === az.kB(20) ? 1 : 16), h8 = az.kB(lp), gC = bR.gC, hG = ah.hG, h2 = 0, aC = 0; aC < fZ; aC++) {
				var h7 = lo[(aC + h8) % lp];
				h7 !== player && hG[h7].length && (gC[h2++] = h7)
			}
			bR.g4[0] = h2
		}(player), 0 !== bR.g4[0] && (0 < (lf = lg(ld = le(player, lc = bP.jW(player)), lc)) && bQ.lh.li(player, bQ.lj.lk(lf, lc)) ? (ll(player, lc, ld, lZ), !0) : 0 < (ld = function(player, lc) {
			for (var fZ = bR.g4[0], gC = bR.gC, lW = lP, h8 = 0, aC = 0; aC < fZ; aC++) {
				var h7 = gC[aC],
					h7 = lW[h7];
				h7 !== aE.fW && bD.gv.ls(h7) && player !== h7 && bv.fS(player, h7) && (gC[h8++] = h7)
			}
			return 0 !== (bR.g4[0] = h8) ? lg(le(player, lc), lc) : 0
		}(player, lc)) && bQ.lh.li(player, bQ.lj.lk(ld, lc)) ? (ll(player, lc, ad.fR(ld << 2), lZ), !0) : !!(0 < (lf = lg(lZ, lc)) && bQ.lh.li(player, bQ.lj.lk(lf, lc))))
	}
}

function jk() {
	function ly(player) {
		for (var fy = ah.fy[player], fZ = fy.length, fz = Math.max(bO.g0(fZ, 12), 1), fb = ad.fb, eH = az.kB(fZ), aC = 0; aC < fZ; aC += fz)
			for (var fO = fy[(aC + eH) % fZ], fc = 3; 0 <= fc; fc--) {
				var fd = fO + fb[fc];
				if (ad.fe(fd)) return {
					fD: fd,
					id: ad.fH(fd),
					h7: player
				}
			}
		return null
	}

	function m3(player, m5) {
		var iI = bD.gv.m6(player, aF.l9[aF.iI[player]]);
		ah.h1[player].push(m5.fD), ae.ei(player, iI, m5.h7), aG.k1(player, !0)
	}
	this.ee = function(player) {
		return !!bV.fE(bV.fF) && !!aE.data.passableMountains && 0 !== ah.fy[player].length && function(player) {
			var lx = ly(player);
			if (null === lx) return !1;
			! function(player) {
				for (var lV = am.lV, lQ = am.lQ, fZ = Math.min(lQ, 12), h8 = az.kB(lQ), gC = bR.gC, fy = ah.fy, h2 = 0, aC = 0; aC < fZ; aC++) {
					var h7 = lV[(aC + h8) % lQ];
					h7 !== player && fy[h7].length && bv.fS(player, h7) && (gC[h2++] = h7)
				}
				bR.g4[0] = h2
			}(player);
			var m0 = function(fG) {
				for (var fZ = bR.g4[0], gC = bR.gC, aC = 0; aC < fZ; aC++) {
					var m5 = ly(gC[aC]);
					if (null !== m5 && m5.id === fG) return m5
				}
				return null
			}(lx.id);
			return null !== m0 ? (m3(player, m0), !0) : function(player, fG) {
				var fZ = ap.jY.m4;
				if (0 !== fZ)
					for (var fD = ap.jY.buffer[az.kB(fZ)] << 2, fb = ad.fb, fc = az.kB(4);;) {
						if (fD += fb[fc], ad.fe(fD)) {
							if (ad.fH(fD) === fG) return m3(player, {
								fD: fD,
								h7: aE.fW
							}), !0;
							break
						}
						if (!ad.fQ(fD)) break
					}
				return !1
			}(player, lx.id)
		}(player)
	}
}

function jb() {
	this.ee = function(player) {
		return bQ.lh.li(player, function(player) {
			var fZ = ap.jY.m4;
			if (0 === fZ) return -1;
			for (var lp = Math.min(fZ, ap.performance.m8 ? fZ : 10), buffer = ap.jY.buffer, kA = bO.g0(az.random() * fZ, az.value(100)), e = kA + lp, m9 = az.jX(ah.jS[player], ah.jT[player]), mA = az.jX(ah.jU[player], ah.jV[player]),
					lr = -1, fp = bP.j6(0, 0, bV.fk, bV.fl), aC = kA; aC < e; aC++) {
				var h8 = aC % fZ,
					mB = bP.fr(m9, mA, buffer[h8]);
				mB < fp && (fp = mB, lr = h8)
			}
			return -1 !== lr ? function(fL, m9, mA) {
				var ho = bP.fh(fL),
					hq = bP.fj(fL),
					iw = m9 - ho,
					iz = mA - hq;
				Math.abs(iw) >= Math.abs(iz) ? (iz = 0, iw = Math.sign(iw)) : (iw = 0, iz = Math.sign(iz));
				iw === iz && (iw = 1);
				for (;;) {
					if (ho += iw, hq += iz, !bP.fv(ho, hq)) break;
					if (fL = bP.fw(ho, hq), ad.iq(bP.fP(fL))) return fL
				}
				return -1
			}(buffer[lr], m9, mA) : -1
		}(player))
	}
}

function jm() {
	this.ee = function(player) {
		var mD = function(player) {
			for (var mG = bQ.mG.mI(), fZ = mG.length, lp = Math.min(fZ, 32), iR = az.kB(fZ), aC = 0; aC < lp; aC++) {
				var mD = (aC + iR) % fZ,
					mF = mG[mD],
					j3 = mF[0],
					j4 = mF[mF.length - 1];
				if (bQ.lj.mJ(player, j3) && bQ.lj.mK(player, j4)) return mD;
				if (bQ.lj.mJ(player, j4) && bQ.lj.mK(player, j3)) return 0 <= (mD = bQ.mG.mL(j4, j3)) ? mD : bQ.mG.mM() ? -1 : bQ.mG.mN(bQ.mG.mO(mF))
			}
			return -1
		}(player);
		return -1 !== mD && (mD = bQ.mG.get(mD), !bQ.lj.mH(player, mD)) && (bR.h[0] = mD, !0)
	}
}

function je() {
	this.m8 = 0, this.dk = function() {
		this.m8 = 0
	}, this.ee = function() {
		if (!this.m8 && bi.kr() % 30 == 7 && bD.gv.mR(90) && (ap.performance.m8 = 1)) {
			if (aE.iT) {
				var lS = bk.lT();
				if (bj.lH[lS]) {
					bk.kv(lS);
					var h = bR.gD,
						fZ = bR.g4[0];
					if (0 !== fZ)
						for (var mU = Math.min(100 + 10 * (fZ - 1), 400), aC = 0; aC < fZ; aC++) aF.lO(h[aC], mU)
				}
			}
			aF.lO(mV[0], 100)
		}
	}
}

function jZ() {
	var mW = 0,
		mX = 0,
		mY = 300,
		mZ = 300,
		ma = 0;
	this.m4 = 0, this.buffer = new Uint32Array(512), this.dk = function() {
		mX = mW = 0, this.m4 = 0, ma = 0
	}, this.ee = function() {
		if (function() {
				var fZ = ap.jY.m4;
				if (0 === fZ) return 1;
				var buffer = ap.jY.buffer;
				if (bi.kr() % 35 == 6) {
					for (var aC = fZ - 1; 0 <= aC; aC--) ad.fQ(buffer[aC] << 2) || (fZ--, buffer[aC] = buffer[fZ]);
					ap.jY.m4 = fZ
				}
				return fZ < buffer.length
			}())
			if (mY <= mW) {
				var me = ap.jY.m4;
				if (me) {
					if (bi.kr() % 350 != 1) return;
					if (ma !== me) return void(ma = me);
					if (!bD.gv.kH(mV[0])) return
				} else if (bi.kr() % 12 != 8) return;
				bD.gv.mf() || ap.jY.dk()
			} else {
				var aC, j = bV.fk,
					mg = j - 2,
					me = mg * (bV.fl - 2),
					mh = mY,
					buffer = ap.jY.buffer,
					lp = ap.jY.m4,
					mi = buffer.length,
					h8 = Math.min(mX + mh * ((1 + 19 * ap.performance.m8) * mZ), me);
				for (aC = mX; aC < h8; aC += mh) {
					var fD = 4 * (aC % mg + (bO.g0(aC, mg) + 1) * j + 1);
					if (ad.fQ(fD) && (buffer[lp] = fD >> 2, ++lp === mi)) {
						aC += mh;
						break
					}
				}(mX = aC) >= me && (mX = ++mW), ap.jY.m4 = lp
			}
	}
}

function jo() {
	this.ee = function() {
		if (bi.kr() % 51 == 45)
			for (var fZ = bQ.z.mk, ml = bQ.z.ml, mm = bQ.z.mm, mn = bQ.z.mn, mo = bQ.z.mo, lA = aF.lA, iI = aF.iI, aC = 0; aC < fZ; aC++) {
				var mF, player, ms, mp = ml[aC];
				mp % 64 == 6 || (mF = mm[aC], (player = bQ.lj.mq(mF[mF.length - 1])) < 0) || !bD.gv.lY(player, mo[aC] >> 3) || az.kB(1e3) >= lA[iI[player]] || ! function(mw, mF) {
					for (var fZ = mF.length - 1, mx = bQ.z.my[mw], fp = 0, aC = mx + 1; aC < fZ; aC++) fp += bP.j2(mF[aC], mF[aC + 1]);
					return (fp += bP.j2(bP.jK(bQ.z.mz[mw]), mF[mx + 1])) <= 60
				}(aC, mF) || (ms = mn[aC], 64 <= mp && bQ.mt.mu(player, ms)) || function(player, mF, ms, mw, mp) {
					bQ.n0.n1(player) && bD.gv.n2(player, aF.l6[aF.iI[player]], 32, 0) && (bQ.z.ml[mw] = 64 + mp % 64, bQ.mt.ei(ms, bQ.z.n3), bR.h[0] = bQ.mG.mO(mF), bR.gB[1] = 6, bD.gv.n4(player), bQ.z.n5(player))
				}(player, mF, ms, aC, mp)
			}
	}
}

function n6() {
	aO.ee(), ag.ee(), aX.n7(), b1.z.ee()
}

function n8() {
	b2.ee(), aH.ee(), ao.ee(), af.ee(), b5.ee(), aG.ee(), ap.ee(), bQ.z.ee(), am.n9(), aW.ee(), b0.ee(), bY.ee(), ag.ee(), ag.nA(), aX.ee(), bS.ee(), aV.ee(), aQ.ee(), b9.nB(), aO.ee(), b6.ee(), aS.ee(), ax.ee(), bg.ee(), bk.ee(), b1.z.ee(), b1.nC
		.ee(), u.ee(), bX.eS.ee(), bC.ee(), bi.ee()
}

function nD() {
	aI.ee(), aY.ee(), aR.ee(), aw.ee(), bF.ee(), b8.ee(), b9.ee(), ay.nE()
}

function nF() {
	aW.nG(!1), aQ.nG(), aX.nG(!1), aV.nG(), aS.nG(), ax.nG(), ag.nG(!1), bk.nH()
}

function nI() {
	ag.nG(!1) && (bi.ds = !0), b1.z.ee()
}

function cA() {
	var nJ, nK, nL;

	function nN(nP) {
		for (var aC = nJ - 1; 0 <= aC; aC--) 0 === nL[nK[aC]] && ah.hN[nK[aC]] >= nP && gd(nK[aC])
	}

	function nM(player) {
		var ea;
		64 === nL[player] ? nL[player] = 6 : (ea = ah.hN[player], nL[player] = ea < 1e3 ? 3 : ea < 1e4 ? 2 : ea < 6e4 ? 1 : 0)
	}
	this.dk = function() {
		nJ = 0, nK = new Uint16Array(aE.fW), nL = new Uint8Array(aE.fW)
	}, this.ee = function() {
		for (var aC = nJ - 1; 0 <= aC; aC--) 64 === nL[nK[aC]] ? nM(nK[aC]) : 0 == nL[nK[aC]]-- && (nM(nK[aC]), gd(nK[aC]));
		16e4 <= ah.hN[mV[0]] && (nN(16e4), 3e5 <= ah.hN[mV[0]]) && nN(3e5), bD.gv.ls(aE.fJ) && (bg.nQ[7] = Math.max(ah.hN[aE.fJ], bg.nQ[7]))
	}, this.gx = function(player) {
		for (var fs, aC = nJ - 1; 0 <= aC; aC--)
			if (player === nK[aC]) {
				for (nJ--, fs = aC; fs < nJ; fs++) nK[fs] = nK[fs + 1];
				return
			}
	}, this.k1 = function(player, nR) {
		for (var aC = nJ - 1; 0 <= aC; aC--)
			if (player === nK[aC]) return;
		nK[nJ++] = player, nL[player] = nR ? 2 : 64
	}
}

function cB() {
	var size, ki;
	this.dk = function() {
		size = aE.lG, ki = new Uint16Array(aE.fW);
		for (var ku = aE.ku, aC = aE.lG - 1; 0 <= aC; aC--) ki[aC] = ku + aC
	}, this.ee = function() {
		ap.jn.ee();
		for (var aC = size - 1; 0 <= aC; aC--)
			if (0 === ah.nU[ki[aC]]) {
				fs = void 0;
				var fs = aC;
				size--, ki[fs] = ki[size]
			} else aF.ee(ki[aC])
	}, this.nT = function(h7) {
		ki[size++] = h7
	}
}

function cC() {
	var nW, nX, nY, nZ, na, nb, nc, nd, ne, nf, ng, nh, ni, nj = !1,
		nk = !1;

	function nl(nm) {
		nh = bi.eZ, nY = nZ = nX = 0, na = (ni = 33) / nm, nW = 1 / (nm / ni / 4), nb = (i.j / 2 + jD) / im, nc = (i.k / 2 + jE) / im, nd = im
	}

	function nt(aC) {
		var nv; - 1 !== aC && (aC = bP.jK(bQ.z.mz[aC]), nv = bP.fh(aC) - 15, aC = bP.fj(aC) - 15, aI.np(nv, aC, 29 + nv, 29 + aC))
	}

	function o6(eM) {
		Math.abs(Math.log(ng / nd)) < .125 && (ng = eM * nd)
	}

	function o5(nv, nw, o8, o9) {
		ne = (nv + o8 + 1) / 2, nf = (nw + o9 + 1) / 2;
		o8 = i.j / (o8 - nv + 1), nv = i.k / (o9 - nw + 1);
		ng = .9 * (o8 < nv ? o8 : nv)
	}
	this.nn = function() {
		return nj
	}, this.no = function() {
		nl(1), this.np(0, 0, bV.fk - 1, bV.fl - 1), aE.hx || aE.hi || this.nq(aE.fJ, 3e3, !0, .3)
	}, this.nr = function(player, ns) {
		nt(bQ.lj.nu(player, ns))
	}, this.nq = function(player, nm, nx, zoom) {
		aE.ny || nj && !nx && nk || (0 === ah.hN[player] ? nt(bQ.lj.nz(player)) : (aT.o0 = !1, nk = nx, nl(nm), function(player) {
			ne = (ah.jS[player] + ah.jT[player] + 1) / 2, nf = (ah.jU[player] + ah.jV[player] + 1) / 2
		}(player), function(zoom, player) {
			var iw = ah.jT[player] - ah.jS[player] + 1,
				player = ah.jV[player] - ah.jU[player] + 1,
				fs = i.j / iw,
				ft = i.k / player,
				fs = (ng = fs < ft ? fs : ft, 0 !== zoom ? zoom : iw < 20 && player < 20 ? .5 : .9);
			ng *= fs, o6(7 / 8)
		}(zoom, player), nj = !0, at.o3()))
	}, this.o4 = function(nm) {
		aE.hi || aE.ny || (aT.o0 = !1, nk = !1, nl(nm), o5(0, 0, bV.fk - 1, bV.fl - 1), o6(7 / 8), nj = !0, at.o3())
	}, this.np = function(nv, nw, o8, o9) {
		nj = !1, o5(nv, nw, o8, o9), im = ng, aT.oA(ne, i.j / 2), aT.oB(nf, i.k / 2), bd.oC(), bi.ds = !0
	}, this.oD = function() {
		return !(nj && nk || (nj = !1))
	}, this.ee = function() {
		var oG, oH, fc, oK;
		nj && (nX < .5 ? nZ < na && (nZ += na * nW, nY = nX) : 1 - nY < nX && (nZ = (nZ -= na * nW) < na * nW ? na * nW : nZ), nh = nh >= bi.eZ ? bi.eZ - 1 : nh, fc = bi.eZ - nh, nX = 1e3 < fc || 1 < (nX += nZ * fc / ni) ? 1 : nX, nh = bi.eZ,
			fc = im, oG = jD, oH = jE, fc = (im = nd * Math.pow(ng / nd, nX)) / fc, oK = 1 - (nd * Math.pow(ng / nd, 1 - nX) - nd) / (ng - nd), aT.oA(nb + oK * (ne - nb), i.j / 2), aT.oB(nc + oK * (nf - nc), i.k / 2), ag.zoom(fc, (oG * fc -
				jD) / (1 - fc), (oH * fc - jE) / (1 - fc)), bd.oC(), 1 <= nX && (nj = !1, be.oL = !0), bi.ds = !0)
	}
}

function di(oM) {
	this.oN = -1, this.pow = -1;
	var oO = oM || {},
		oP = this,
		oQ = null,
		oR = null,
		oS = null,
		oT = null,
		oU = null,
		oV = [],
		oW = 0,
		oX = null,
		oY = null,
		oZ = null,
		oa = !1,
		ob = null,
		oe = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255;

	function og(oh, oi, className) {
		oh = document.createElement(oh);
		return className && (oh.className = className), oi && oi.appendChild(oh), oh
	}

	function ok(el, oi, action) {
		oi = og("button", oi);
		return oi.type = "button", oi.textContent = el, oi.addEventListener("click", action), oi
	}

	function ol(oi) {
		oi = og("canvas", oi);
		return oi.width = oi.height = 128, oi
	}

	function os(canvas, ot) {
		for (var canvas = canvas.getContext("2d"), data = (oY || (oY = canvas.createImageData(128, 128), oZ = new Uint32Array(oY.data.buffer)), ot), on = oZ, oo = 0, position = 0, color = 0; position < 16384; oo += 6, color ^= 1) {
			for (var eI = oo >> 3, oD = position + ((data[eI] << 8 | data[1 + eI]) >> 10 - (7 & oo) & 63), or = color ? oe : 4294967295, aC = position; aC < oD; aC++) on[aC] = or;
			position = oD
		}
		canvas.putImageData(oY, 0, 0)
	}

	function ov() {
		if (oQ) {
			oQ.setAttribute("aria-busy", String(oa)), oU.disabled = oa, oT.disabled = oa || !oW;
			for (var aC = 0; aC < oV.length; aC++) oV[aC].disabled = oa, oV[aC].setAttribute("aria-pressed", String(Boolean(oW & 1 << aC)))
		}
	}

	function ox(event) {
		var oz, oy;
		"Escape" === event.key && (event.preventDefault(), oP.close()), "Tab" === event.key && oQ && (oz = (oy = oQ.querySelectorAll("button:not(:disabled)"))[0], oy = oy[oy.length - 1], event.shiftKey && document.activeElement === oz ? (event
			.preventDefault(), oy.focus()) : event.shiftKey || document.activeElement !== oy || (event.preventDefault(), oz.focus()))
	}

	function p1() {
		ob = document.activeElement, (oQ = og("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), oQ.setAttribute("aria-modal", "true"), oQ.setAttribute("aria-label", "Select all images matching the reference");
		og("style", oQ).textContent =
			".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
		var p2 = og("div", oQ, "captcha-reference-row");
		og("span", p2, "captcha-reference-label").textContent = "Find All:", (oS = ol(p2)).className = "captcha-reference", oS.setAttribute("aria-label", "Reference image"), oR = og("div", oQ, "captcha-grid");
		for (var aC = 0; aC < 16; aC++) oV.push(function(eI) {
			var button = ok("", oR, function() {
				oa || (oW ^= 1 << eI, ov())
			});
			return button.className = "captcha-tile", button.setAttribute("aria-label", "Select image " + (eI + 1)), button.setAttribute("aria-pressed", "false"), ol(button).setAttribute("aria-hidden", "true"), button
		}(aC));
		var p2 = og("div", oQ, "captcha-actions"),
			p5 = ok("Close", p2, function() {
				oP.close()
			});
		oU = ok("Reload", p2, p6), oT = ok("Verify", p2, p7), oQ.addEventListener("keydown", ox), oP.resize(), ov(), p5.focus()
	}

	function p6() {
		oa || (oP.close(), b1.eg.p8(0, 0, bw.oN, bw.pow))
	}

	function p7() {
		var p9, pA;
		!oa && oW && (p9 = oW, pA = oX, oP.close(), b1.eg.p8(p9, pA, bw.oN, bw.pow))
	}
	this.show = function(pB, pA, oN, pow) {
		this.oN = oN, this.pow = pow, oX = pA, oQ || p1(), os(oS, pB[0]);
		for (var iR = 0; iR < 16; iR++) os(oV[iR].firstChild, pB[iR + 1]);
		oW = 0, oa = !1, ov(), "function" == typeof oO.pC && oO.pC()
	}, this.resize = function() {
		var size;
		oQ && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), oQ.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (oQ) {
			for (var pD = oQ.querySelectorAll("canvas"), aC = 0; aC < pD.length; aC++) pD[aC].width = pD[aC].height = 0;
			oQ.remove(), oQ = oR = oS = oT = oU = null, oY = oZ = oX = null, oW = 0, oa = !(oV = []), ob && document.body.contains(ob) && ob.focus(), ob = null, "function" == typeof oO.pE && oO.pE()
		}
	}
}

function c4() {
	var ej = bD.color;
	this.pF = ej.pG(0, 0, 0), this.pH = ej.pI(0, 0, 0, .7), this.pJ = ej.pI(0, 0, 0, .5), this.pK = ej.pI(0, 0, 0, .85), this.pL = ej.pI(0, 0, 0, .75), this.pM = ej.pI(0, 0, 0, .6), this.pN = ej.pI(0, 0, 0, .35), this.pO = ej.pG(255, 255, 255), this
		.pP = ej.pI(255, 255, 255, .3), this.pQ = ej.pI(255, 255, 255, .6), this.pR = ej.pI(255, 255, 255, .4), this.pS = ej.pI(255, 255, 255, .25), this.pT = ej.pI(255, 255, 255, .85), this.pU = ej.pI(255, 255, 255, .75), this.pV = ej.pI(255, 255,
			255, .15), this.pW = ej.pI(255, 255, 255, .11), this.pX = ej.pG(128, 128, 128), this.pY = ej.pI(64, 64, 64, .75), this.pZ = ej.pI(88, 88, 88, .83), this.pa = ej.pI(60, 60, 60, .85), this.pb = ej.pI(80, 60, 60, .85), this.pc = ej.pG(170,
			170, 170), this.pd = ej.pG(200, 235, 245), this.pe = ej.pG(30, 255, 30), this.pf = ej.pG(0, 200, 0), this.pg = ej.pG(128, 255, 128), this.ph = ej.pI(10, 65, 10, .75), this.pi = ej.pI(0, 255, 0, .6), this.pj = ej.pI(0, 255, 0, .5), this
		.pk = ej.pI(0, 200, 0, .5), this.pl = ej.pI(0, 100, 0, .75), this.pm = ej.pI(0, 60, 0, .8), this.pn = ej.pI(0, 255, 0, .3), this.po = ej.pI(0, 180, 0, .6), this.pp = ej.pI(0, 120, 0, .85), this.pq = ej.pG(0, 120, 0), this.pr = ej.pI(0, 70, 0,
			.85), this.ps = ej.pG(190, 230, 190), this.pt = ej.pG(0, 255, 0), this.pu = ej.pG(255, 120, 120), this.pv = ej.pG(255, 160, 160), this.pw = ej.pG(255, 70, 70), this.px = ej.pG(230, 0, 0), this.py = ej.pI(220, 0, 0, .6), this.pz = ej.pI(
			255, 100, 100, .8), this.q0 = ej.pI(100, 0, 0, .85), this.q1 = ej.pI(60, 0, 0, .85), this.q2 = ej.pI(200, 0, 0, .6), this.q3 = ej.pI(120, 0, 0, .85), this.q4 = ej.pG(255, 70, 10), this.q5 = ej.pG(230, 190, 190), this.q6 = ej.pG(255, 0,
		0), this.q7 = ej.pG(255, 0, 255), this.q8 = ej.pI(60, 0, 60, .85), this.q9 = ej.pI(0, 60, 60, .85), this.qA = ej.pI(10, 60, 60, .9), this.qB = ej.pI(0, 96, 96, .75), this.qC = ej.pG(0, 255, 255), this.qD = ej.pG(160, 160, 255), this.qE = ej
		.pI(0, 40, 90, .75), this.qF = ej.pI(0, 0, 255, .6), this.qG = ej.pG(200, 200, 255), this.qH = ej.pI(50, 50, 255, .83), this.qI = ej.pI(20, 90, 150, .75), this.qJ = ej.pI(10, 10, 120, .75), this.qK = ej.pG(255, 120, 100), this.qL = ej.pI(255,
			255, 0, .5), this.qM = ej.pI(255, 255, 150, .2), this.qN = ej.pG(255, 255, 0), this.qO = ej.pG(255, 255, 200), this.qP = ej.pI(200, 200, 0, .6), this.qQ = ej.pI(140, 120, 0, .75), this.qR = ej.pI(180, 160, 40, .75), this.qS = ej.pI(70,
			50, 20, .85), this.qT = ej.pI(30, 30, 0, .85), this.qU = ej.pI(60, 60, 0, .85), this.qV = ej.pG(255, 255, 100), this.qW = ej.pG(255, 255, 140), this.qX = ej.pI(255, 140, 0, .75), this.qY = ej.pI(70, 40, 0, .85), this.qZ = ej.pG(255, 150,
			0), this.qa = ej.pI(255, 200, 80, .85), this.qb = ej.pI(0, 0, 0, 0), this.qc = ej.pI(255, 255, 255, 0), this.qd = ej.pI(254, 254, 254, 0)
}

function d4() {
	this.hz = new qe, this.gv = new qf, this.qg = new qh, this.qi = new qj, this.kw = new qk
}

function qe() {
	this.ql = 1, this.i0 = function(fL) {
		aE.lE ? bB.qg.i0(aE.fJ, fL) : b1.qm.qn(fL)
	}, this.i6 = function(jC, k3) {
		this.ql && (this.ql = 0, bm.qo.qp(182, jC)), aE.lE ? bB.qg.i6(aE.fJ, jC, k3) : b1.qm.qq(jC, k3)
	}, this.qr = function(jC, qs) {
		aE.lE ? bB.qg.qt(aE.fJ, jC, qs) : b1.qm.qu(jC, qs)
	}, this.iB = function(jC, fL) {
		fL = (fL << 3) + bR.gB[6];
		aE.lE ? bB.qg.iB(aE.fJ, jC, fL) : bQ.n0.n1(aE.fJ) && b1.qm.qw(jC, fL)
	}, this.iE = function(jC) {
		849 === jC && (jC = 850);
		var ns = bR.gB[3];
		aE.lE ? bB.qg.iE(aE.fJ, jC, ns) : bQ.iC.qx(aE.fJ, ns) && b1.qm.qy(jC, ns)
	}, this.qz = function(ns) {
		aE.lE ? bB.qg.qz(aE.fJ, ns) : b1.qm.qy(849, ns)
	}, this.r0 = function(k3) {
		aE.lE ? bB.qg.r0(aE.fJ, k3) : b1.qm.r1(k3)
	}, this.r2 = function(r3) {
		aE.lE ? bB.qg.r4(aE.fJ, r3) : b1.qm.r5(r3)
	}, this.iN = function(r6) {
		aE.lE ? bB.qg.iN(aE.fJ, r6) : b1.qm.r7(r6)
	}, this.r8 = function() {
		aE.lE ? bB.qg.r8(aE.fJ) : b1.qm.r9()
	}, this.iK = function() {
		aE.lE ? bB.qg.iK(aE.fJ) : b1.qm.r1(513)
	}, this.i2 = function(jC, fL, k3) {
		aE.lE ? bB.qg.i2(aE.fJ, jC, fL, k3) : b1.qm.rA(jC, fL, k3)
	}
}

function qk() {
	this.kx = function(player, qs, iI) {
		bD.gv.rB(player, iI, qs) && (af.qr(player, qs), !bD.gv.kH(qs)) && ap.jh.kW[qs] && ap.jh.kW[qs]--
	}, this.rC = function(player, qs, iI) {
		bD.gv.rD(iI, qs) ? ao.ei(qs, bR.g6[0]) && (bt.rE(player, qs, bR.g6[0], 1), bD.gv.gy(qs, bR.g6[0]), bg.rF(player, qs), ag.rG(qs, bR.g6[0])) : bg.gz(player, iI, 12)
	}
}

function qf() {
	this.rH = function(r3, player) {
		aO.r2(aE.fJ, player, r3), b1.qm.rI(r3, player)
	}, this.rJ = function(player) {
		aO.rK(player, 0), b1.qm.rL(player)
	}, this.rM = function(rN, player) {
		aO.rO(rN, player), b1.qm.rP(rN, player)
	}, this.rQ = function() {
		aE.lE || aE.hi || b1.rR.rQ()
	}
}

function qj() {
	this.ee = function(aD) {
		var id, gI, oD;
		for (bK.dk(aD), bK.eI += 2, oD = 8 * bK.size; bK.eI + 8 <= oD;) id = bK.rS(4), gI = bK.rS(9), 0 === id ? this.rT(id, gI, bK.rS(22)) : 1 === id ? this.rT(id, gI, bK.rS(10), bK.rS(10)) : 2 === id ? this.rT(id, gI, bK.rS(10), bK.rS(9)) :
			3 === id ? this.rT(id, gI, bK.rS(10), bK.rS(27)) : 4 === id ? this.rT(id, gI, bK.rS(10), bK.rS(16)) : 5 === id || 6 === id ? this.rT(id, gI, bK.rS(10)) : 7 === id ? this.rT(id, gI, bK.rS(1)) : 10 === id ? this.rT(id, gI, bK.rS(20), bK
				.rS(22)) : this.rT(id, gI)
	}, this.rU = [], this.rV = function() {
		for (var rX = 0, rY = 0, rZ = 0, ra = 0, rb = 0, rc = 0, aC = 0; aC < 512; aC++) rX += ah.nU[aC], rY += ah.hN[aC], rZ += ah.hb[aC], ra += bQ.z.ky[aC];
		rb += bQ.z.mk, rc += am.lQ, this.rU.push(rZ % 1073741824 * 4 + (rX + rY + ra + rb + rc) % 4)
	}, this.rT = function(id, gI, gK, gM) {
		0 === id ? bB.qg.i0(gI, gK) : 1 === id ? bB.qg.i6(gI, gK, gM) : 2 === id ? bB.qg.qt(gI, gK, gM) : 3 === id ? bB.qg.iB(gI, gK, gM) : 4 === id ? bB.qg.iE(gI, gK, gM) : 5 === id ? bB.qg.r0(gI, gK) : 6 === id ? bB.qg.r4(gI, gK) : 7 === id ?
			bB.qg.iN(gI, gK) : 8 === id ? bB.qg.r8(gI) : 9 === id ? bB.qg.rd(gI) : 10 === id && bB.qg.i2(gI, gK >> 10, gM, gK % 1024)
	}
}

function qh() {
	this.i0 = function(player, fL) {
		bD.gv.hk(0) && bD.gv.hl(player) && bP.jH(fL) && (bC.re.rf(0, player, fL), aE.rg.ei(player, fL))
	}, this.i6 = function(player, jC, k3) {
		bD.gv.hk(1) && bD.gv.hl(player) && bD.gv.rh(player, k3) && bD.gv.n2(player, jC, 12, 0) && bD.gv.ri(player, k3) && ((k3 = ae.kF(player, bR.fV[0])) || ae.kY(player)) && (ah.rj[player]++, bC.re.rf(1, player, jC, bR.fV[0]), ap.jf.jt(player,
			k3)) && (bD.gv.n4(player), bg.rk(player, jC), ap.jf.jz(player))
	}, this.qt = function(player, jC, qs) {
		bD.gv.hk(1) && bD.gv.hl(player) && aE.iT && bD.gv.rh(player, qs) && bD.gv.rl(player, qs) && bD.gv.rB(player, bD.gv.jB(player, jC), qs) && ao.ei(qs, bR.g6[0]) && (bC.re.rf(2, player, jC, qs), af.qr(player, qs))
	}, this.iB = function(player, jC, qv) {
		bR.gB[1] = 7 & qv;
		var fL = qv >> 3;
		bD.gv.hk(1) && bD.gv.hl(player) && bP.jH(fL) && bQ.n0.n1(player) && bQ.n0.rm(fL) && bD.gv.n2(player, jC, 32, 0) && bQ.lh.rn(player, fL, 1) && (bg.ro(player), bC.re.rf(3, player, jC, qv), bD.gv.n4(player), bo.rp.iB(player), bQ.z.n5(
			player))
	}, this.iE = function(player, jC, ns) {
		849 === jC ? this.qz(player, ns) : bD.gv.hk(1) && bD.gv.hl(player) && bD.gv.n2(player, jC, 32, 0) && bQ.iC.rq(player, ns) && (bg.ro(player), bC.re.rf(4, player, jC, ns), bD.gv.n4(player), bo.rp.iE(player), bQ.z.n5(player))
	}, this.qz = function(player, ns) {
		bD.gv.hk(1) && bD.gv.hl(player) && bQ.rr.ee(player, ns) && bC.re.rf(4, player, 849, ns)
	}, this.r0 = function(player, k3) {
		513 === k3 ? this.iK(player) : bD.gv.hk(1) && bD.gv.hl(player) && (k3 = Math.min(k3, aE.fW), ae.kF(player, k3)) && (bC.re.rf(5, player, k3), ae.rs(player, k3))
	}, this.r4 = function(player, r3) {
		(bD.gv.hk(1) || bD.gv.hk(2)) && bD.gv.hl(player) && (r3 = bO.ij(r3, 0, 1023), bC.re.rf(6, player, r3), ag.rt(player, 0, r3))
	}, this.iN = function(player, r6) {
		ax.iM(player) && (bC.re.rf(7, player, r6), ax.ru(player, r6))
	}, this.r8 = function(player) {
		(bD.gv.hk(0) || bD.gv.hk(1)) && bD.gv.hl(player) && aN.rv(player) && (bC.re.rf(8, player), bT.r8(player))
	}, this.rd = function(player) {
		bC.re.rf(9, player), bT.rd(player)
	}, this.iK = function(player) {
		ax.iO(player) && (bC.re.rf(5, player, 513), ax.iK(player))
	}, this.i2 = function(player, jC, fL, k3) {
		bD.gv.hk(1) && bD.gv.hl(player) && bD.gv.rh(player, k3) && bD.gv.ri(player, k3) && bP.jH(fL) && an.fA.fT(player, fL) && (ae.kF(player, bR.fV[0]) || ae.kY(player)) && (bC.re.rf(10, player, (jC << 10) + bR.fV[0], fL), k3 = bD.gv.m6(player,
			jC), ah.h1[player].push(bR.fa[0]), ae.ei(player, k3, bR.fV[0]), aG.k1(player, !0), bg.rw(player))
	}
}

function rx() {
	var rz;
	this.ry = [], this.rz = document.createElement("div"), this.s0 = function(s1, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = s1, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.rz.appendChild(
			title), title
	}, this.s2 = function(s1, marginBottom) {
		var s3 = document.createElement("p");
		return s3.textContent = s1, s3.style.fontSize = "0.75em", s3.style.lineHeight = "1.2em", s3.style.marginBottom = marginBottom || "0", this.rz.appendChild(s3), s3
	}, this.s4 = function(s1) {
		var s5 = document.createElement("p");
		return s5.textContent = s1, s5.style.fontSize = "1em", s5.style.marginBottom = "0", s5.style.whiteSpace = "pre-wrap", s5.style.overflowWrap = "break-word", this.rz.appendChild(s5), s5
	}, this.s6 = function(s7, fontSize) {
		var rz = document.createElement("div");
		return rz.innerHTML = s7, rz.style.fontSize = fontSize || "1em", rz.style.lineHeight = "1.2em", this.rz.appendChild(rz), rz
	}, this.s8 = function(s9) {
		for (var sA = s9.sA, fZ = sA.length, aC = 0; aC < fZ; aC++) this.rz.appendChild(sA[aC])
	}, this.sB = function(sC) {
		return this.ry.push(sC), this.rz.appendChild(sC.e), sC
	}, this.resize = function() {
		for (var fZ = this.ry.length, aC = 0; aC < fZ; aC++) this.ry[aC].resize && this.ry[aC].resize()
	}, (rz = this.rz).style.position = "absolute", rz.style.height = "auto", rz.style.padding = "0.5em"
}

function sD(sE, sF) {
	var rz = document.createElement("div");

	function sN() {
		var aC, sO, k, h8, fc, sJ = i.l * rz.offsetWidth,
			sP = new Float64Array(function(sJ) {
				var j = .25 * bD.sK.sL(.6) * i.il;
				return Math.max(Math.floor(sJ / j), 1)
			}(sJ)),
			sQ = bf.sQ,
			sR = (sJ - (sP.length + 1) * bf.gap) / (sP.length * i.l);
		for (sP.fill(sQ), aC = 0; aC < sF.length; aC++) sO = (fc = sF[aC].rz).style, k = bD.sS.min(sP), h8 = sP.indexOf(k), sO.top = bD.sK.sT(k), sO.left = bD.sK.sT(sQ + h8 * (sR + sQ)), sO.width = bD.sK.sT(sR), bD.sK.sU(fc, 5), sP[h8] += fc
			.offsetHeight + 3 * sQ;
		rz.style.height = bD.sK.sT(bD.sS.max(sP) - 2 * sQ)
	}
	this.sG = rz, this.sH = sF, this.resize = function() {
		var aC;
		for (aC = 0; aC < sF.length; aC++) sF[aC].resize();
		sN(), sN()
	}, rz.style.width = "100%", rz.style.maxWidth = "100%", sE.style.lineHeight = "1.5em", sE.style.overflowX = "hidden", sE.style.overflowY = "auto";
	for (var aC = 0; aC < sF.length; aC++) rz.appendChild(sF[aC].rz);
	sE.appendChild(rz)
}

function x(sV, sW, sX, sY, sZ) {
	var self, sa = document.createElement("button");

	function sh() {
		var sn;
		bM.sm() || (sn = bD.color.so(sX), !1 !== sY && 0 < sn[0] && sn[0] < 255 && sn[0] === sn[1] && sn[0] === sn[2]) || (128 < sn[0] && 128 < sn[1] && 128 < sn[2] ? sa.style.backgroundColor = bD.color.sp(sX, -50) : sa.style.backgroundColor = bD
			.color.sp(sX, sn[3] && sn[3] < 120 ? 150 : 50))
	}

	function sg() {
		if (sY) {
			var sn = bD.color.so(sX);
			if (sn[0] === sn[1] && sn[0] === sn[2]) return
		}
		sW && ((sn = sW(this)) ? 2 === sn && sh() : sr(this))
	}

	function sj() {
		this.style.backgroundColor = sX
	}

	function si() {
		sr(this)
	}

	function sr(fc) {
		fc.style.backgroundColor = sX, fc.blur()
	}
	this.button = sa, this.sb = sW, this.sc = sX, this.sf = function(sk) {
		sk = 1.1 - Math.min(.01 * sV.length, .6) + .2 * sk;
		sa.style.fontSize = sk.toFixed(1) + "em"
	}, this.se = function(ej) {
		ej ? 1 === ej ? ej = bE.pa : 2 === ej && (sY = 1, ej = bE.pa) : (sY = 0, ej = bE.pK), this.sc = sX = ej, sa.style.backgroundColor = ej
	}, self = this, sa.innerHTML = sV, sa.style.color = sZ ? bE.qN : bE.pO, sa.style.userSelect = "none", sa.style.outline = "none", sa.style.overflowWrap = "break-word", self.se(sX), sa.style.border = "none", sa.style.font = "inherit", self.sf(
		0), sa.style.padding = "0em 0.3em", sa.onclick = sg, sa.addEventListener("mouseover", sh), sa.addEventListener("mouseout", si), sa.addEventListener("focus", sh), sa.addEventListener("blur", sj)
}

function ss(oy, sE) {
	var rz;
	this.resize = function() {
		for (var aC = 0; aC < oy.length; aC++) bD.sK.sU(oy[aC].button);
		rz.style.gap = rz.style.padding = bD.sK.sT(bf.sQ)
	}, (rz = document.createElement("div")).style.display = "grid", rz.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", rz.style.overflowY = "auto", rz.style.gridAutoRows = "5.3em", rz.style.maxHeight = "100%";
	for (var aC = 0; aC < oy.length; aC++) oy[aC].sf(1), rz.appendChild(oy[aC].button);
	sE.appendChild(rz)
}

function su(sv, sw, sx) {
	this.fg = 0, this.fi = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.sK.sL(sx || .5) * sv[1] * i.il, i.k - 2 * bf.gap), this.j = Math.min(this.k * (sv[0] / sv[1]), i.j - 2 * bf.gap), this.k = sv[1] * this.j / sv[0], this.fg = bf.gap + sw[0] * (i.j - this.j - 2 * bf.gap), this.fi = bf
			.gap + sw[1] * (i.k - this.k - 2 * bf.gap)
	}, this.sy = function() {
		return this.fg + .5 * this.j
	}
}

function sz(t0, t1) {
	var tA, self, t2 = document.createElement("div"),
		t3 = document.createElement("div"),
		t4 = document.createElement("div"),
		t5 = null,
		tB = (this.t6 = new t7({
			value: "",
			eI: -1
		}, 0, t8, function(e) {
			e.target.value = bD.tI.tJ(e.target.value), t5.tH.textContent = 127 - e.target.value.length
		}), 0),
		tC = 1,
		tD = 0,
		tE = 1048575;

	function t8() {
		t0(), t5.tH.textContent = 127
	}

	function tS(tR, sC) {
		sC && (sC.tX = 1, tR.appendChild(bq.tY.transform(sC)))
	}

	function tV(by) {
		tC ? t2.scrollTop = t2.scrollHeight : by && (t2.scrollTop = tD)
	}
	this.reset = function(tK) {
			tE = 1048575, t3.textContent = "", tK || this.nH()
		}, this.nH = function() {
			var tL = bq.z.tM[0],
				tL = bq.z.tO[tL],
				tP = tL.tP,
				fZ = tP.length,
				kA = 1048575 === tE ? 0 : fZ - (tL.tQ - tE + 1048575) % 1048575;
			if (tE = tL.tQ, !(fZ <= (kA = Math.max(kA, 0)))) {
				for (var tR = document.createDocumentFragment(), aC = kA; aC < fZ; aC++) tS(tR, bq.lj.tT(tP[aC], bq.lj.tU(tP[aC])));
				t3.appendChild(tR), tV()
			}
		}, this.tW = function(s) {
			var tR = document.createDocumentFragment();
			tS(tR, s), t3.appendChild(tR), tV()
		}, this.show = function(sE) {
			sE.appendChild(t2), sE.appendChild(t4), this.resize(sE)
		}, this.tZ = function(sE) {
			u.removeChild(sE, t2), u.removeChild(sE, t4)
		}, this.resize = function(sE) {
			tB = sE ? sE.offsetHeight : tB;
			var sE = bD.sK.tb(.04, .75),
				tc = Math.max(sE, tB - sE),
				td = i.j / i.l,
				te = .7 * td,
				tf = bD.sK.sT(tB - sE - tc),
				tc = (t4.style.height = bD.sK.sT(sE), t2.style.height = bD.sK.sT(tc), i.k > i.j || a1.a2.ik() ? (t4.style.top = tf, t2.style.top = bD.sK.sT(tB - tc), bD.sK.sU(t2, 8)) : (t2.style.top = tf, t4.style.top = bD.sK.sT(tB - sE), bD.sK.sU(
						t2, 2)), this.t6.e.style.width = bD.sK.sT(te), this.t6.e.style.fontSize = tA.button.style.fontSize = bD.sK.sT(.5 * sE), bD.sK.sU(this.t6.e, 6), tA.button.style.left = bD.sK.sT(te), tA.button.style.width = bD.sK.sT(td - te),
					.385 * sE);
			a1.a2.ik() && (tc *= .8 - .12 * (i.j > i.k)), t3.style.marginLeft = t3.style.marginRight = bD.sK.sT(.5 * tc), t3.style.fontSize = bD.sK.sT(tc), tV(1)
		}, (self = this).t6.e.tF = 127, t2.style.position = "absolute", t2.style.left = "0", t2.style.width = "100%", t2.style.overflowX = "hidden", t2.style.overflowY = "auto", t2.style.font = "inherit", t2.style.backgroundColor = bE.pM, t2
		.addEventListener("scroll", function() {
			tD = t2.scrollTop, tC = tD < t2.scrollHeight - t2.clientHeight - 2 ? 0 : 1
		}), t3.style.font = "inherit", t4.style.position = "absolute", t4.style.left = "0", t4.style.width = "100%", self.t6.e.setAttribute("placeholder", L(13)), self.t6.e.style.position = "absolute", self.t6.e.style.top = "0", self.t6.e.style
		.left = "0", self.t6.e.style.height = "100%", self.t6.e.style.backgroundColor = bE.pJ, self.t6.e.style.textAlign = "center", (tA = new x(L(14), t8)).button.top = "0", tA.button.style.position = "absolute", tA.button.style.height = "100%", tA
		.se(bE.qc), t5 = new tG("127", tA.button, 1, 1), t2.appendChild(t3), t4.appendChild(self.t6.e), t4.appendChild(tA.button)
}

function th(ti, sV, tj) {
	function click() {
		var value = 1 - ti.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + sV, void 0 !== ti.eI ? bm.qo.qp(ti.eI, value) : ti.value = value, tj && tj(value)
	}
	var e;
	sV = sV || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (ti.value ? "🟩 " : "⬜ ") + sV, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function tk(sE, s7) {
	var rz = document.createElement("div");
	this.sG = rz, this.resize = function() {
		rz.style.padding = bD.sK.sT(bf.sQ), rz.style.lineHeight = bD.sK.sT(bD.sK.tb(.035))
	}, sE.style.overflowX = "hidden", sE.style.overflowY = "auto", rz.innerHTML = s7, sE.appendChild(rz)
}

function tl(tm) {
	var rz = document.createElement("div");
	this.e = rz, this.tn = tm, this.resize = function() {
		for (var fZ = tm.length, aC = 1; aC < fZ; aC++) bD.sK.sU(tm[aC], 4)
	};
	var aC, fZ = tm.length;
	for (rz.style.width = "100%", rz.style.height = "2.7em", rz.style.marginTop = "0.6em", rz.style.border = "inherit", aC = 0; aC < fZ; aC++) tm[aC].style.verticalAlign = "top", tm[aC].style.width = (100 / fZ).toFixed(2) + "%", tm[aC].style.height =
		"100%", tm[aC].style.fontSize = "0.75em", rz.appendChild(tm[aC])
}

function tp(tq, sX, tr) {
	this.rz = document.createElement("div"), this.oy = tq;
	var ts = 0;
	this.resize = function(sE, tu) {
		var fZ = tq.length;
		if (!tr)
			for (var aC = 1; aC < fZ; aC++) bD.sK.sU(tq[aC].button, 4);
		for (var tv = 0, aC = 0; aC < fZ; aC++) tv += tq[aC].button.offsetWidth;
		if (sE && (ts = sE.offsetWidth), tu && tv < ts)
			for (aC = 0; aC < fZ; aC++) tq[aC].button.style.width = (100 * tq[aC].button.offsetWidth / tv).toFixed(2) + "%";
		else
			for (aC = 0; aC < fZ; aC++) tq[aC].button.style.width = "auto";
		tu || this.resize(sE, 1)
	};
	var tt = this;
	tt.rz.style.height = tt.rz.style.maxHeight = "100%";
	for (var aC = 0; aC < tq.length; aC++) tq[aC].se(sX), tq[aC].button.style.height = "100%", tq[aC].button.style.padding = "0.0em 0.9em", tq[aC].button.style.whiteSpace = "pre", tt.rz.appendChild(tq[aC].button)
}

function tw() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.sK.sU(this.e, 8, bE.pX)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function tx() {
	var u2, u3, ty = document.createElement("div"),
		tz = document.createElement("div"),
		u0 = 0,
		u1 = 0;
	this.show = function(fg, fi, s1, u4, u5, ej) {
			if (u0) {
				if (!u4) return;
				this.tZ()
			}
			fg === fi && -1 === fg ? (fg = u2, fi = u3) : (u2 = fg, u3 = fi);
			var u6 = Math.floor(bD.sK.tb(.018)),
				u5 = (fg = Math.max(u6 + 2, fg), u5 || (u1 = u4), u0 = 1, i.j / i.l),
				u4 = (ty.style.whiteSpace = "pre", ty.textContent = s1, bD.sK.sU(ty, 5), ty.style.font = bD.sK.u8(0, bD.sK.tb(.015)), ty.style.padding = "0.3em 0.6em", ty.style.left = fg + "px", ty.style.top = "0px", document.body.appendChild(ty),
					fg + ty.offsetWidth - u5),
				s1 = (0 < u4 && (fg -= u4, fg = Math.max(u6 + 1, fg), ty.style.left = fg + "px", fg < u6 + 2) && (ty.style.whiteSpace = "pre-wrap"), ty.offsetHeight);
			ty.style.top = fi - s1 + u1 * bf.uA + "px", fg -= u6, tz.style.backgroundColor = bD.color.pG(ej >> 12 << 2, (ej >> 6 & 63) << 2, (63 & ej) << 2), tz.style.left = fg + "px", tz.style.top = ty.style.top, tz.style.width = u6 + "px", tz.style
				.height = s1 + "px", bD.sK.sU(tz, 4), bD.sK.sU(tz, 8), bD.sK.sU(tz, 2), document.body.appendChild(tz)
		}, this.tZ = function(uB) {
			if (u0) {
				if (uB && u1) return 0;
				u0 = 0, u.removeChild(document.body, ty), u.removeChild(document.body, tz)
			}
			return 1
		}, ty.style.position = "absolute", ty.style.backgroundColor = bE.pK, ty.style.color = bE.pO, ty.style.pointerEvents = "none", ty.style.zIndex = "5", ty.style.maxWidth = "100%", tz.style.position = "absolute", tz.style.color = bE.pO, tz.style
		.pointerEvents = "none", tz.style.zIndex = "5"
}

function t7(uC, type, uD, uE) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.uF++, e.value = uC.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.pO, e.style.backgroundColor = bE.pH, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.uG++
		}), e.addEventListener("blur", function() {
			i.uG--, -1 !== uC.eI && bm.qo.qp(uC.eI, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== uC.eI && bm.qo.qp(uC.eI, e.value), uD ? uD() : e.blur())
		}), uE && e.addEventListener("input", function(sC) {
			uE(sC)
		})
}

function uH(sE, data, oM) {
	var fZ = data.uI.length,
		uJ = document.createElement("div"),
		uK = document.createElement("div"),
		uL = document.createElement("div"),
		uM = new Array(fZ),
		sF = new Array(fZ),
		uN = new Array(data.uO.length),
		uP = bD.color.pI(70, 70, 0, .35);

	function sp() {
		this.style.backgroundColor = bD.color.sp(uP, 160)
	}

	function uW() {
		this.style.backgroundColor = uP
	}

	function sN() {
		var fs;
		for (sE.style.font = bD.sK.u8(0, bD.sK.ue(.026, .5, .03)), aC = 1; aC < uN.length; aC++) bD.sK.sU(uN[aC], 4);
		if (bD.sK.sU(uJ, 2), fZ) {
			for (var i1, uf = uJ.offsetWidth, ug = uL.offsetWidth, aC = 0; aC < uN.length; aC++) i1 = .01 * data.uV[aC] * ug, uN[aC].style.width = (100 * i1 / uf).toFixed(2) + "%";
			var lp = data.uI[0].length;
			for (aC = 0; aC < fZ; aC++)
				for (bD.sK.sU(uM[aC], 2), fs = 1; fs < lp; fs++) bD.sK.sU(sF[aC][fs], 4);
			uK.uQ && (uK.scrollTop = uK.uQ)
		}
	}
	this.resize = function() {
			sN(), sN()
		}, sE.style.display = "flex", sE.style.flexDirection = "column", uK.style.overflowX = "hidden", uK.style.overflowY = "auto", uK.addEventListener("scroll", function() {
			this.uQ = this.scrollTop, oM && oM.uR && (u.z.uS[oM.uR] = this.scrollTop)
		}),
		function() {
			var fc, aC, uI = data.uI,
				lp = fZ ? uI[0].length : 0;
			for (aC = 0; aC < fZ; aC++) {
				uM[aC] = document.createElement("div"), uM[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.pI(130, 130, 130, .35) : bE.pN
				}(aC), uM[aC].style.width = "100%", uM[aC].style.display = "flex", sF[aC] = new Array(lp);
				for (var fs = 0; fs < lp; fs++) sF[aC][fs] = fc = document.createElement("div"), fc.style.display = "flex", fc.style.justifyContent = "center", fc.style.wordBreak = "break-all", fc.style.padding = "0.4em 0em", fc.style.width = data
					.uV[fs] + "%", fc.textContent = uI[aC][fs].g1, 1 === uI[aC][fs].ea && (fc.name = "" + aC, fc.style.color = bE.qN, fc.style.backgroundColor = uP, fc.addEventListener("mouseover", sp), fc.addEventListener("mouseout", uW), function(
						fc, uY, uZ) {
						2147483647 !== uZ && fc.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, uY), bK.dk(bG.aD), this.style.backgroundColor = uP, u.v(8, u.ua, new ub(25, {
								action: 0,
								uY: bI.f0.uc(bI.f0.ud(5)),
								uZ: uZ
							}))
						})
					}(fc, uI[aC][fs].uY, uI[aC][fs].uZ)), uM[aC].appendChild(fc)
			}
			for (uJ.style.display = "flex", uJ.style.backgroundColor = bD.color.pI(0, 120, 0, .35), aC = 0; aC < uN.length; aC++) uN[aC] = fc = document.createElement("div"), fc.style.display = "flex", fc.style.justifyContent = "center", fc.style
				.wordBreak = "break-all", fc.style.padding = "0.4em 0em", fc.style.width = data.uV[aC] + "%", fc.innerHTML = data.uO[aC], uJ.appendChild(fc)
		}();
	for (var aC = 0; aC < fZ; aC++) uL.appendChild(uM[aC]);
	uK.appendChild(uL), sE.appendChild(uJ), sE.appendChild(uK), oM && oM.uR && (uK.uQ = u.z.uS[oM.uR])
}

function uh() {
	var ul, um, ui = document.createElement("div"),
		uj = document.createElement("div"),
		uk = document.createElement("div"),
		uL = document.createElement("div"),
		oy = [],
		eD = [L(16), L(17), L(18), L(19), L(20), L(21), L(22), L(23)],
		un = [1, 2, 3, 0, 9, 10, 11, 13];

	function up(aC) {
		u.v(8, 0, new ub(21, {
			ur: un[aC],
			us: 0,
			ut: 10
		}))
	}
	this.show = function() {
			this.qp(u.z.uu), document.body.appendChild(ui)
		}, this.tZ = function() {
			u.removeChild(document.body, ui)
		}, this.qp = function(uu) {
			for (var uv = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < oy.length; aC++) {
				var j = uu[aC];
				ul[uv[aC]][1].tH.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, uw = bf.gap,
				k = bD.sK.ux(.085),
				j = Math.min(4 * k, i.j - 2 * uw),
				fZ = oy.length;
			for (bD.sK.uy(ui, uw, i.k - uw - k, j, k), bD.sK.sU(ui), bD.sK.sU(uj, 6), aC = 0; aC < fZ - 1; aC++) bD.sK.sU(oy[aC].button, 6);
			for (aC = 0; aC < fZ; aC++) ul[aC][0].resize(), ul[aC][1].resize();
			for (oy[0].fg = 0, oy[0].button.style.left = bD.sK.sT(oy[0].fg), oy[0].button.style.width = bD.sK.uz(1.7 * k), aC = 1; aC < fZ; aC++) oy[aC].fg = oy[aC - 1].fg + oy[aC - 1].button.offsetWidth, oy[aC].button.style.left = bD.sK.sT(oy[aC]
				.fg);
			if (!um) {
				if (!ac.v0()) return;
				(um = ac.get(14)).style.width = "24%", um.style.position = "absolute", uj.appendChild(um)
			}
			um.style.left = bD.sK.sT(0), um.style.top = "7%", uk.v1 && (uk.scrollLeft = uk.v1)
		}, ui.style.position = "absolute", uj.style.width = "25%", uj.style.height = "100%", uj.style.backgroundColor = bE.pK, uk.style.position = "absolute", uk.style.width = "75%", uk.style.height = "100%", uk.style.backgroundColor = bE.pK, uk
		.style.top = uk.style.right = bD.sK.sT(0), bD.sK.uo(uk), uL.style.height = uL.style.maxHeight = "100%", oy.push(new x("", function() {
			up(0)
		}, bE.q8)), oy.push(new x("", function() {
			up(1)
		}, bE.q9)), oy.push(new x("", function() {
			up(2)
		}, bE.q1)), oy.push(new x("", function() {
			up(3)
		}, bE.pm)), oy.push(new x("", function() {
			up(4)
		}, bE.qY)), oy.push(new x("", function() {
			up(5)
		}, bE.qU)), oy.push(new x("", function() {
			up(6)
		}, bE.qY)), oy.push(new x("", function() {
			up(7)
		}, bE.pF)), ul = new Array(oy.length);
	for (var aC = 0; aC < oy.length; aC++) oy[aC].button.style.position = "absolute", ul[aC] = [new uq(eD[aC], oy[aC].button, .25, .45), new uq("", oy[aC].button, .53, .84, 1)], oy[aC].button.style.height = oy[aC].button.style.maxHeight = "100%", oy[
		aC].button.top = bD.sK.sT(0), uL.appendChild(oy[aC].button);
	uk.appendChild(uL), ui.appendChild(uj), ui.appendChild(uk)
}

function v2(v3, v4, v5, v6, t0, t1) {
	var v7 = document.createElement("div"),
		v8 = document.createElement("div"),
		v9 = document.createElement("div"),
		vA = document.createElement("div"),
		vB = document.createElement("div"),
		vC = document.createElement("div"),
		vD = document.createElement("div"),
		vE = document.createElement("div"),
		vF = document.createElement("span"),
		vG = document.createElement("div");
	this.vH = new sz(t0, t1), this.vI = new vJ(t1), this.vK = [v3, v4, v5, v6], this.vO = function(vP) {
		vP = (vP / 10).toFixed(1) + "%";
		vE.style.width = vP, vF.innerHTML = vP
	}, this.vQ = function() {
		this.vI.tZ(vC), this.vH.show(vC)
	}, this.vR = function() {
		this.vH.tZ(vC), this.vI.show(vC)
	}, this.vS = function() {
		return v8
	}, this.show = function() {
		document.body.appendChild(v7)
	}, this.tZ = function() {
		u.removeChild(document.body, v7)
	}, this.resize = function(vT) {
		var vU = 1 - .4 * a1.a2.ik() * (i.j > 1.6 * i.k),
			vV = bD.sK.tb(.05 * vU),
			vW = i.k > i.j,
			vX = bD.sK.tb(.06 * vU + .03 * vW),
			vY = bD.sK.tb(.08 * vU + .03 * vW),
			vZ = bD.sK.tb(.04 + .02 * vW),
			vW = bD.sK.tb(.02 * vU + .01 * vW),
			vb = bD.sK.tb(.025);
		v7.style.font = bD.sK.u8(0, vb), vB.style.font = bD.sK.u8(0, .9 * vb), vG.style.font = bD.sK.u8(0, .9 * vb), vU < 1 && (vb = bD.sK.u8(0, vU * vb), v9.style.font = vb, vB.style.font = vb, vG.style.font = vb, vD.style.font = vb, vA.style
				.font = vb), v8.style.height = bD.sK.sT(vV), v8.style.font = bD.sK.u8(0, .72 * vV), bD.sK.sU(v8, 2), v9.style.top = bD.sK.sT(vV), v9.style.height = bD.sK.sT(vY), bD.sK.sU(v9, 2), vA.style.font = bD.sK.u8(0, vU * bD.sK.tb(.02)), vA
			.style.top = bD.sK.sT(vV + vY), vA.style.height = bD.sK.sT(vZ), bD.sK.sU(vA, 2), vB.style.top = bD.sK.sT(vV + vY + vZ), vB.style.height = bD.sK.sT(vX), bD.sK.sU(vB, 2), vC.style.top = bD.sK.sT(vV + vY + vZ + vX), vC.style.height = bD
			.sK.sT(i.k / i.l - vV - vY - 2 * vX - vZ - vW), vD.style.top = bD.sK.sT(i.k / i.l - vX - vW), vD.style.height = bD.sK.sT(vW), bD.sK.sU(vD, 8), vF.style.font = bD.sK.u8(0, .8 * vW), vG.style.top = bD.sK.sT(i.k / i.l - vX), vG.style
			.height = bD.sK.sT(vX), bD.sK.sU(vG, 8), v3.resize(v9), v4.resize(v9), v5.resize(v9), v6.resize(v9), vT ? this.vH.resize(vC) : this.vI.resize()
	};
	t0 = this;
	v7.style.position = "absolute", v7.style.top = "0", v7.style.left = "0", v7.style.width = "100%", v7.style.height = "100%", v7.style.backgroundColor = bE.pN, bM.sm() || (v7.style.backdropFilter = "blur(4px)", v7.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (v7.style.display = "none"), v8.style.position = "absolute", v8.style.top = "0", v8.style.left = "0", v8.style.width = "100%", v8.style.display = "flex", v8.style.alignItems = "center", v8.translate = !1;
	for (var h = [v9, vA, vB, vG], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.sK.uo(h[aC]);
	vC.style.position = "absolute", vC.style.left = "0", vC.style.width = "100%", vC.style.font = "inherit", vD.style.position = "absolute", vD.style.left = "0", vD.style.width = "100%", vE.style.position = "absolute", vE.style.top = "0", vE.style
		.left = "0", vE.style.height = "100%", vE.style.width = "50%", vE.style.backgroundColor = bE.pk, vF.innerHTML = "", vF.style.position = "absolute", vF.style.top = "50%", vF.style.left = "50%", vF.style.transform = "translate(-50%, -50%)", vF
		.translate = !1, v8.appendChild(function() {
			var vN = document.createElement("h1");
			return vN.textContent = L(24), vN.style.margin = "0 auto 0.15em auto", vN.style.fontFamily = "Arial Black, system-ui", vN.style.fontSize = "inherit", vN.style.fontWeight = "inherit", vN
		}()), v9.appendChild(v3.rz), vA.appendChild(v4.rz), vB.appendChild(v5.rz), vD.appendChild(vE), vD.appendChild(vF), vG.appendChild(v6.rz), v7.appendChild(v8), v7.appendChild(v9), v7.appendChild(vA), v7.appendChild(vB), v7.appendChild(vC), v7
		.appendChild(vD), v7.appendChild(vG), t0.vI.show(vC)
}

function vJ(t1) {
	var v7 = document.createElement("div"),
		vC = document.createElement("div");
	this.nH = function() {
			vC.textContent = "", bq.vd.ve && bq.vd.tZ(1);
			for (var tR = document.createDocumentFragment(), vf = bq.z.tM[0], vg = bq.vg.vh[vf], vi = bq.vg.vi[vf], aC = 0; aC < vg.length; aC++) ! function(tR, sC, vk, vf) {
				var tH = document.createElement("span");
				tH.textContent = (vk ? "🟢 " : "⚪ ") + bq.lj.vl(sC, vf), tH.style.color = bq.lj.vm(sC.vn), 11 === sC.vn && (tH.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				tH.style.cursor = "pointer", tH.style.margin = "0.2em 0.2em 0.2em 0.2em", tH.style.width = tH.style.maxWidth = 2 === vf ? "10em" : "9em", tH.style.height = tH.style.maxHeight = "1.4em", tH.style.whiteSpace = "nowrap", tH.style
					.overflow = "hidden", tH.style.textOverflow = "ellipsis", tH.style.font = "inherit", tH.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (vk = __fx.utils.getDuplicateIpHighlightColor(sC, bq.vg.vh[vf],
						"aFI")) && (tH.style.backgroundColor = vk, tH.style.borderRadius = "0.3em");
				__fx.settings.highlightSameClan && (vf = __fx.utils.getSameClanHighlightColor(sC, bq.aF0, "username")) && (tH.style.backgroundColor ? tH.style.boxShadow = "inset 0 0 0 2px " + vf : tH.style.backgroundColor = vf, tH.style
					.borderRadius = "0.3em");
				bq.lj.vo(sC) && (tH.style.textDecoration = "underline"), sC.vp && (tH.style.textDecorationLine = "underline", tH.style.textDecorationStyle = "dotted");
				tH.onclick = function(e) {
					t1(e, sC)
				}, bM.sm() || (tH.onmouseover = function(e) {
					bq.vd.vq(e.target, sC, 1)
				}), tR.appendChild(tH)
			}(tR, vg[aC], aC < vi, vf);
			vC.appendChild(tR)
		}, this.show = function(sE) {
			sE.appendChild(v7)
		}, this.tZ = function(sE) {
			u.removeChild(sE, v7)
		}, this.resize = function() {
			vC.style.fontSize = bD.sK.sT(bD.sK.tb(.02, .3))
		}, v7.style.top = "0", v7.style.left = "0", v7.style.width = v7.style.height = "100%", v7.style.overflowX = "hidden", v7.style.overflowY = "auto", v7.style.font = "inherit", vC.style.font = "inherit", vC.style.margin = "0.4em", v7
		.appendChild(vC)
}

function vr(vs) {
	var v7 = document.createElement("div"),
		t4 = document.createElement("div"),
		vt = [];

	function sh() {
		bM.sm() || (this.style.backgroundColor = bD.color.sp(bE.pK, 50))
	}

	function si() {
		this.style.backgroundColor = bE.pK
	}
	this.qp = function(vv, vw) {
			vt[2].textContent = vv + 1 + " / " + vw
		}, this.show = function(sC) {
			sC = bq.lj.tT(sC, bq.lj.tU(sC)), t4.appendChild(bq.tY.transform(sC)), document.body.appendChild(v7)
		}, this.resize = function() {
			var k = bD.sK.tb(.03, .5);
			v7.style.width = 10 * k + "px", v7.style.font = bD.sK.u8(1, .75 * k), bD.sK.sU(v7, 4), t4.style.top = k + "px", t4.style.font = bD.sK.u8(0, .55 * k), bD.sK.sU(t4, 2), v7.style.height = k + t4.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.sK.sU(vt[aC], 6), vt[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) vt[aC].style.height = k + "px", bD.sK.sU(vt[aC], 2);
			vt[2].style.width = 4 * k + "px", vt[1].style.left = 2 * k + "px", vt[2].style.left = 4 * k + "px", vt[3].style.left = 8 * k + "px"
		}, this.vx = function() {
			for (var aC = 0; aC < 4; aC++) vt[aC].onclick = null, vt[aC].onmouseover = null, vt[aC].onmouseout = null;
			u.removeChild(document.body, v7), v7 = t4 = vt = null
		}, v7.style.position = "absolute", v7.style.color = bE.pO, v7.style.zIndex = "3", v7.style.right = "0", v7.style.top = "0", t4.style.position = "absolute", t4.style.height = "auto", t4.style.color = bE.pO, t4.style.backgroundColor = bE.pK, t4
		.style.left = "0", t4.style.width = "100%", t4.style.overflowWrap = "break-word", v7.appendChild(t4);
	for (var aC = 0; aC < 4; aC++) vt[aC] = document.createElement("div"), vt[aC].style.position = "absolute", vt[aC].style.backgroundColor = bE.pK, vt[aC].style.color = bE.pO, vt[aC].style.top = "0", vt[aC].style.display = "flex", vt[aC].style
		.justifyContent = "center", vt[aC].style.alignItems = "center", vt[aC].style.userSelect = "none", vt[aC].style.outline = "none", vt[aC].style.font = "inherit", 2 !== (vt[aC].vu = aC) && (vt[aC].onclick = vs, vt[aC].onmouseover = sh, vt[aC]
			.onmouseout = si), v7.appendChild(vt[aC]);
	vt[0].textContent = "◀", vt[1].textContent = "▶", vt[3].textContent = "✖"
}

function vy(vs) {
	var ty = document.createElement("div");

	function sh() {
		bM.sm() || (ty.style.backgroundColor = bD.color.sp(bE.pK, 50))
	}

	function si() {
		ty.style.backgroundColor = bE.pK
	}
	this.qp = function(vw) {
			ty.textContent = vw
		}, this.show = function() {
			document.body.appendChild(ty)
		}, this.resize = function() {
			var k = bD.sK.tb(.03, .5);
			ty.style.width = 2 * k + "px", ty.style.height = k + "px", ty.style.font = bD.sK.u8(1, .75 * k), bD.sK.sU(ty, 4), bD.sK.sU(ty, 2)
		}, this.vx = function() {
			ty.onclick = null, ty.onmouseover = null, ty.onmouseout = null, u.removeChild(document.body, ty), ty = null
		}, ty.style.position = "absolute", si(), ty.style.color = bE.pO, ty.style.zIndex = "3", ty.style.right = "0", ty.style.top = "0", ty.style.display = "flex", ty.style.justifyContent = "center", ty.style.alignItems = "center", ty.style
		.userSelect = "none", ty.style.outline = "none", ty.onclick = vs, ty.onmouseover = sh, ty.onmouseout = si
}

function vz(tq) {
	var v7 = document.createElement("div"),
		w0 = document.createElement("div"),
		u0 = (this.fg = 0, this.fi = 0);

	function w2() {
		bq.w3.tZ()
	}
	this.oy = tq, this.show = function(fg, fi, w5) {
		if (u0) return [0, 0];
		u0 = 1, this.fg = fg, this.fi = fi,
			function(self, w5) {
				var j = bD.sK.tb(.16, .7),
					k = tq.length * j / 3,
					w7 = i.j / i.l,
					w8 = i.k / i.l,
					o7 = Math.min(1, Math.min(w7 / j, w8 / k));
				j *= o7, k *= o7, w5 && (self.fg += bD.sK.tb(.03, .5)), self.fg = bO.ij(self.fg, 0, w7 - j), self.fi = bO.ij(self.fi, 0, w8 - k), w0.style.left = self.fg + "px", w0.style.top = self.fi + "px", w0.style.width = j + "px", w0.style
					.height = k + "px", w0.style.font = bD.sK.u8(0, .3 * k / tq.length), bD.sK.sU(w0, 5);
				for (var aC = 1; aC < tq.length; aC++) bD.sK.sU(tq[aC].button, 8)
			}(this, w5), document.body.appendChild(v7)
	}, this.tZ = function() {
		u0 && (u0 = 0, v7.removeEventListener("click", w2), u.removeChild(document.body, v7))
	};
	for (var aC = 0; aC < tq.length; aC++) new tG("" + (1 + aC), tq[aC].button, 0, 1);
	v7.style.position = "fixed", v7.style.top = "0", v7.style.left = "0", v7.style.width = "100%", v7.style.height = "100%", v7.style.zIndex = "5", w0.style.position = "absolute",
		function() {
			for (var w4 = (100 / tq.length).toFixed(2) + "%", aC = 0; aC < tq.length; aC++) tq[aC].button.style.width = "100%", tq[aC].button.style.height = tq[aC].button.style.maxHeight = w4, tq[aC].button.style.padding = "0.0em 0.9em", w0
				.appendChild(tq[aC].button)
		}(), v7.appendChild(w0), v7.addEventListener("click", w2)
}

function ek() {
	var w9, wA, wB;

	function wI(aC) {
		return bD.color.pG(wA[aC][0], wA[aC][1], wA[aC][2])
	}

	function wO(fs, ft) {
		return bD.color.wX(wA[fs], wA[ft]), wI(ft)
	}

	function wG() {
		w9 && (w9.remove(), w9 = null)
	}
	this.show = function(el, colors, id) {
		0 <= (wB = id) && b1.z.ef(0) && b1.eg.wC(0, id), el = (el = (el = (el = (el = (el = (el = (el = (el = (el = (el = (el = el.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			wA = colors, (w9 = document.createElement("div")).style.position = "fixed", w9.style.top = "0", w9.style.left = "0", w9.style.width = "100%", w9.style.height = "100%", w9.style.backgroundColor = bD.color.pI(wA[0][0], wA[0][1], wA[0][
				2], .6), w9.style.zIndex = "6", w9.onclick = function(e) {
				e.target === w9 && wG()
			},
			function(el) {
				var iV, wH = document.createElement("div");
				wH.style.position = "absolute", wH.style.display = "flex", wH.style.flexDirection = "column", wH.style.top = "50%", wH.style.left = "50%", wH.style.backgroundColor = wI(2), iV = a1.a2.ik() ? bD.sK.wJ(i.min) : bD.sK.tb(.4);
				iV = Math.max(iV, 200), wH.style.width = bD.sK.sT(iV), wH.style.height = bD.sK.sT(iV), wH.style.transform = "translate(-50%, -50%)",
					function(wH, iV) {
						var wN = document.createElement("div");
						wN.style.flex = "0 0 10%", wN.style.overflow = "hidden", wN.style.backgroundColor = wI(1), wN.style.color = wO(1, 7), wN.style.font = bD.sK.u8(1, .05 * iV), wN.style.display = "flex", wN.style.alignItems = "center", wN
							.style.justifyContent = "center", wN.innerHTML = L(25), wH.appendChild(wN)
					}(wH, iV),
					function(wH, el, iV) {
						var wP = document.createElement("div");
						wP.style.flex = "0 0 70%", wP.style.overflowY = "auto", wP.style.overflowX = "hidden", wP.style.whiteSpace = "pre-wrap", wP.style.wordWrap = "break-word", wP.style.padding = bD.sK.sT(.02 * iV), wP.style.backgroundColor =
							wI(2), wP.style.color = wO(2, 8), wP.style.font = bD.sK.u8(0, .07 * iV), wP.innerHTML = el, wP.innerHTML = "<style>a { color: inherit; }</style>" + wP.innerHTML, wH.appendChild(wP)
					}(wH, el, iV),
					function(wH, iV) {
						var oi = document.createElement("div"),
							wQ = (oi.style.display = "flex", oi.style.flexDirection = "row", oi.style.justifyContent = "space-between", oi.style.alignItems = "stretch", oi.style.backgroundColor = wI(3), oi.style.flex = "1", oi.style.padding = bD
								.sK.sT(.01 * iV), oi.style.gap = bD.sK.sT(.01 * iV), document.createElement("div")),
							wR = (wQ.style.flex = "0 0 60%", wQ.style.height = "100%", new x(L(26, 0, 0, 1), function() {
								wG()
							}, wI(4), !1)),
							wR = (wR.button.style.width = "100%", wR.button.style.height = "100%", wR.button.style.color = wO(4, 9), wR.button.style.font = bD.sK.u8(1, .05 * iV), wQ.appendChild(wR.button), document.createElement("div")),
							wT = (wR.style.flex = "0 0 15%", wR.style.height = "100%", wR.style.backgroundColor = wI(5), document.createElement("div")),
							wU = (wT.style.flex = "1", wT.style.height = "100%", new x(L(27), function(e) {
								return bD.sK.wV(e), wB < 0 || b1.z.ef(0) && (b1.eg.wC(1, wB), wB = -1), !0
							}, wI(6), !1));
						wU.button.style.width = "100%", wU.button.style.height = "100%", wU.button.style.color = wO(6, 10), wU.button.style.font = bD.sK.u8(1, .035 * iV), wT.appendChild(wU.button), oi.appendChild(wQ), oi.appendChild(wR), oi
							.appendChild(wT), wH.appendChild(oi)
					}(wH, iV), w9.appendChild(wH)
			}(el), document.body.appendChild(w9)
	}
}

function wY(uC, wZ) {
	this.sA = [];
	var wa = this.sA;

	function click() {
		for (var aC = 0; aC < wa.length; aC++) wa[aC].textContent = wa[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eI = parseInt(this.name);
		void 0 !== uC.eI && bm.qo.qp(uC.eI, eI), wZ && wZ(eI)
	}
	for (var wb, fZ = uC.oM.length, aC = 0; aC < fZ; aC++)(wb = document.createElement("p")).textContent = "⚪ " + uC.oM[aC], wb.style.margin = "0", wb.name = "" + aC, wb.style.cursor = "pointer", wb.style.fontSize = "1em", wb.addEventListener(
		"click", click), wa.push(wb);
	wa[uC.value].textContent = wa[uC.value].textContent.replace("⚪", "🟢")
}

function wc(title, wd, we) {
	var ui = document.createElement("div"),
		wf = document.createElement("div"),
		uL = document.createElement("div"),
		wg = document.createElement("div"),
		wh = document.createElement("div");
	this.wi = uL, this.wj = wd, this.show = function() {
			!1 !== we ? document.body.appendChild(ui) : (document.body.appendChild(wf), document.body.appendChild(wg))
		}, this.tZ = function() {
			!1 !== we ? u.removeChild(document.body, ui) : (u.removeChild(document.body, wf), u.removeChild(document.body, wg))
		}, this.wn = function() {
			var tc = bD.sK.tb(.1),
				ta = bD.sK.tb(.08 + .04 * (i.wo < 1), .3);
			return {
				tc: tc,
				ta: ta,
				wp: i.k / i.l - tc - ta
			}
		}, this.resize = function(tu) {
			var fZ = wd.length,
				wq = this.wn(),
				tc = wq.tc,
				ta = wq.ta;
			for (wf.style.height = bD.sK.sT(tc), bD.sK.sU(wf, 2), wg.style.top = bD.sK.sT(i.k / i.l - ta), wg.style.height = bD.sK.sT(ta), bD.sK.sU(wg, 8), uL.style.top = bD.sK.sT(tc), uL.style.height = uL.style.maxHeight = bD.sK.sT(wq.wp), wf.style
				.font = bD.sK.u8(0, bD.sK.tb(.02, .15)), wg.style.font = bD.sK.u8(0, bD.sK.tb(.02, .7)), uL.style.font = bD.sK.u8(0, bD.sK.tb(.02, .35)), aC = 1; aC < fZ; aC++) bD.sK.sU(wd[aC].button, 4);
			for (var tv = 0, aC = 0; aC < fZ; aC++) tv += wd[aC].button.offsetWidth;
			if (tu && tv < wg.offsetWidth)
				for (aC = 0; aC < fZ; aC++) wd[aC].button.style.width = (100 * wd[aC].button.offsetWidth / tv).toFixed(2) + "%";
			else
				for (aC = 0; aC < fZ; aC++) wd[aC].button.style.width = "auto";
			wg.v1 && (wg.scrollLeft = wg.v1), tu || this.resize(!0)
		}, this.wr = function() {
			var wq = this.wn(),
				ej = i.l;
			ws.fillStyle = bE.pK, ws.fillRect(0, ej * wq.tc, i.j, ej * wq.wp)
		}, ui.style.position = "absolute", ui.style.top = "0", ui.style.left = "0", ui.style.width = "100%", ui.style.height = "100%", wf.style.position = "absolute", wf.style.top = "0", wf.style.left = "0", wf.style.width = "100%", wf.style
		.display = "flex", wf.style.backgroundColor = bE.pK, wg.style.position = "absolute", wg.style.left = "0", wg.style.width = "100%", bD.sK.uo(wg), wh.style.height = wh.style.maxHeight = "100%", uL.style.position = "absolute", uL.style.width =
		"100%", uL.style.backgroundColor = bE.pK,
		function() {
			for (var aC = 0; aC < wd.length; aC++) wd[aC].button.style.height = "100%", wd[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < wd.length; aC++) wh.appendChild(wd[aC].button);
	wf.appendChild(function() {
		var wm = document.createElement("h1");
		return wm.textContent = title, wm.style.margin = "auto", wm.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", wm.style.fontFamily = "Arial Black, system-ui", wm
	}()), wg.appendChild(wh), !1 !== we && (ui.appendChild(uL), ui.appendChild(wf), ui.appendChild(wg))
}

function tG(wt, wu, wv, ww) {
	var self;
	this.tH = document.createElement("span"), (self = this).tH.textContent = wt, self.tH.style.color = bE.pO, self.tH.style.position = "absolute", self.tH.style.font = "inherit", ww ? self.tH.style.bottom = "0.06em" : self.tH.style.top = "0.12em",
		wv ? self.tH.style.left = "0.2em" : self.tH.style.right = "0.2em", self.tH.style.fontSize = "0.6em", self.tH.style.pointerEvents = "none", self.tH.style.whiteSpace = "pre", wu.style.position = "relative", wu.style.overflow = "hidden", wu
		.appendChild(self.tH)
}

function uq(wt, wu, wx, wy, wz) {
	var self;
	this.tH = document.createElement("span"), this.resize = function() {
			this.tH.style.fontSize = ((wy - wx) * wu.offsetHeight).toFixed(1) + "px"
		}, (self = this).tH.textContent = wt, self.tH.style.color = bE.pO, self.tH.style.font = "inherit", self.tH.style.margin = "0.1em 0.6em", self.tH.style.pointerEvents = "none", wz && (self.tH.style.fontWeight = "bold"), self.tH.style
		.whiteSpace = "nowrap", self.tH.style.display = "block", wu.appendChild(self.tH)
}

function x0(x1, x2, x3, oO) {
	var x4 = document.createElement("textarea"),
		x5 = (this.e = x4, !0);

	function xA() {
		x4.select(), document.execCommand("copy")
	}
	this.resize = function() {
			x2 && bD.sK.sU(x4, 5)
		}, this.x6 = function(el) {
			x4.value = el
		}, this.x7 = function() {
			return x4.value
		}, this.x8 = function() {
			x4.select()
		}, this.clear = function() {
			x4.value = ""
		}, this.x9 = function() {
			x5 && navigator.clipboard ? (x4.select(), navigator.clipboard.writeText(x4.value).catch(function() {
				x5 = !1, xA()
			})) : xA()
		}, x4.setAttribute("id", "textArea" + u.z.uF++), x4.setAttribute("autocomplete", "off"), x1 && x4.setAttribute("placeholder", x1), x4.style.top = "0", x4.style.left = "0", x4.style.width = "100%", x4.style.height = "100%", x4.style
		.userSelect = "none", x4.style.outline = "none", x4.style.resize = "none", x4.style.border = "none", x4.style.color = bE.pO, x4.style.backgroundColor = bE.pH, oO ? (x4.style.fontSize = "1em", x4.rows = 6, x4.style.padding = "0.25em") : (x4
			.style.padding = "0.45em", x4.style.fontSize = "1.2em"), x3 && x4.addEventListener("input", function(e) {
			x3(e)
		}), x4.addEventListener("focus", function() {
			i.uG++
		}), x4.addEventListener("blur", function() {
			i.uG--
		})
}

function dO() {
	this.sb = new xB, this.buffer = new xC, this.qo = new xD, this.z = new xE, this.xF = new xG, this.dk = function() {
		this.buffer.dk(), (new xH).dk(), this.xF.dk(), this.z.xI()
	}
}

function xC() {
	function xJ(aC, type, xP, e3) {
		bm.buffer.data.push({
			eI: aC,
			type: type || 0,
			value: xP || 0,
			xP: xP || 0,
			e3: e3 || 0
		})
	}

	function xK(aC, type, xP, e3) {
		bm.buffer.data.push({
			eI: aC,
			type: type,
			value: xP || "",
			xP: xP || "",
			e3: e3 || 0
		})
	}

	function xL(oD) {
		for (var aC = bm.buffer.data.length; aC < oD; aC++) bm.buffer.data.push(null)
	}
	this.data = [], this.dk = function() {
		xJ(0, 1, 0, 5), xJ(1, 1, 1), xJ(2, 0), xK(3, 2), xJ(4, 1), xK(5, 2, "system-ui", 2), xJ(6, 0), xJ(7, 0, 0), xJ(8, 0), xJ(9, 1, 1), xJ(10, 1), xJ(11, 1, 1), xK(12, 2, navigator.language), xJ(13), xJ(14), xJ(15, 0, 1), xJ(16, 0, 3), xL(
			100), xK(100, 2), xK(101, 2), xK(102, 2), xK(103, 2), xK(104, 2), xK(105, 2), xK(106, 2), xJ(107), xJ(108), xJ(109), xK(110, 2), xJ(111), xJ(112), xJ(113), xK(114, 2), xJ(115), xK(116, 2), xJ(117, 1), xK(118, 2, "", 2), xJ(119, 1, 0,
				1), xK(120, 2), xJ(121, 1, ~~(262144 * Math.random())), xK(122, 2, "Player " + Math.floor(1e3 * Math.random())), xJ(123), xK(124), xJ(125, 1), xK(126, 2), xJ(127, 0, 1), xJ(128), xJ(129), xJ(130), xJ(131), xJ(132), xK(133, 2), xJ(
				134, 0, 5), xK(135, 2), xK(136, 2), xJ(137), xJ(138), xJ(139), xJ(140), xJ(141), xJ(142), xJ(143), xJ(144), xK(145, 2), xJ(146), xJ(147), xK(148, 2), xJ(149), xJ(150, 0, 1), xK(151, 2), xJ(152, 0, 5), xJ(153, 1), xJ(154, 1), xK(
				155, 2), xK(156, 2), xJ(157), xJ(158), xJ(159), xJ(160), xK(161, 2), xJ(162, 0, 1024), xK(163, 2, "0,0,0"), xK(164, 2, "100,100,100"), xK(165, 2, "30,30,30"), xK(166, 2, "70,70,70"), xK(167, 2, "100,100,100"), xK(168, 2,
				"85,85,85"), xK(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) xK(170 + aC, 2, "255,255,255");
		xK(174, 2), xK(175, 2), xJ(176, 0, 200), xL(180), xJ(180, 0), xJ(181, 0), xJ(182, 0, 1023), xK(183, 2), xJ(184, 0, 100), xK(185, 2)
	}, this.qp = function(eI, value) {
		this.data[eI].value = value
	}, this.xM = function(eI, value) {
		this.qp(eI, value);
		var value = String(value),
			fZ = value.length;
		5e4 < fZ ? console.log("storage value too large: index " + eI + " size " + fZ) : (bm.sb.save(eI, value), bm.sb.save(eI, String(this.data[eI].e3), !0))
	}, this.xN = function(eI) {
		return Number(this.data[eI].value)
	}, this.xO = function(eI) {
		return String(this.data[eI].value)
	}
}

function xG() {
	var xQ = [];

	function xT(uY) {
		xQ.unshift(uY), bm.qo.qp(161, xQ.join(";"))
	}

	function f5(uY) {
		for (var xV = xQ, fZ = xV.length, aC = 0; aC < fZ; aC++)
			if (xV[aC] === uY) return xV.splice(aC, 1), bm.qo.qp(161, xV.join(";")), 1
	}
	this.dk = function() {
		var s1 = bm.buffer.data[161].value;
		s1.length && (xQ = s1.split(";"))
	}, this.get = function() {
		return xQ
	}, this.xR = function() {
		return {
			oM: xQ,
			value: 0
		}
	}, this.vp = function(uY) {
		return bD.sS.has(xQ, uY)
	}, this.xS = function(uY) {
		return f5(uY) ? 0 : (xT(uY), 1)
	}, this.nH = function(uY) {
		f5(uY) && xT(uY)
	}, this.xU = function(eI) {
		eI < xQ.length && (xQ.splice(eI, 1), bm.qo.qp(161, xQ.join(";")))
	}
}

function xB() {
	this.xW = function(eI, e3) {
		return Number(this.xX(eI, e3))
	}, this.xX = function(eI, e3) {
		var g1 = null;
		return 0 === a1.id ? a1.xY && (g1 = a1.xY.getItem((e3 ? "v" : "d") + eI)) : 1 === a1.id ? g1 = a1.xZ.loadString((e3 ? 1e3 : 2e3) + eI) : 2 === a1.id && (g1 = a1.xa[(e3 ? "v" : "d") + eI]), g1 && 0 !== g1.length ? g1 : null
	}, this.xb = function(fZ, xc) {
		var h = [],
			xd = xc ? "e" : "l";
		if (0 === a1.id) {
			if (a1.xY)
				for (aC = 0; aC < fZ; aC++) h.push(a1.xY.getItem(xd + aC))
		} else if (1 === a1.id)
			for (var xe = xc ? 5e3 : 3e3, aC = 0; aC < fZ; aC++) h.push(a1.xZ.loadString(xe + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fZ; aC++) h.push(a1.xa[xd + aC]);
		return h
	}, this.save = function(eI, value, e3) {
		var xf = (e3 ? "v" : "d") + eI;
		if (0 === a1.id) {
			if (a1.xY && bm.buffer.data[140].value) try {
				a1.xY.setItem(xf, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.xZ.saveString((e3 ? 1e3 : 2e3) + eI, value) : 2 === a1.id && (a1.xa[xf] = value, a1.xg.postMessage(xf + " " + value))
	}, this.xh = function(h, xc) {
		var fZ = h.length,
			xd = xc ? "e" : "l";
		if (0 === a1.id) {
			if (a1.xY && bm.buffer.data[140].value) try {
				for (aC = 0; aC < fZ; aC++) a1.xY.setItem(xd + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var xe = xc ? 5e3 : 3e3, aC = 0; aC < fZ; aC++) a1.xZ.saveString(xe + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fZ; aC++) a1.xa[xd + aC] = h[aC], a1.xg.postMessage(xd + aC + " " + h[aC])
	}
}

function xH() {
	this.dk = function() {
		! function() {
			var data = bm.buffer.data;
			0 === data[2].e3 && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].xP = 1);
			0 === data[100].e3 && (data[100].value = data[100].xP = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.buffer.data,
			fZ = data.length;
		for (aC = 0; aC < fZ; aC++) {
			var xk = bm.sb.xW(aC, !0);
			data[aC] && data[aC].e3 === xk && (null === (xk = bm.sb.xX(aC)) ? data[aC].value = data[aC].xP : 2 === data[aC].type ? data[aC].value = xk : (xk = Number(xk), isNaN(xk) ? data[aC].value = data[aC].xP : data[aC].value = xk))
		}
	}
}

function xE() {
	function xp(h) {
		if (0 === h.length) bm.qo.qp(116, "");
		else {
			for (var xs = h[0], aC = 1; aC < h.length; aC++) xs += ";" + h[aC];
			bm.qo.qp(116, xs)
		}
	}
	this.xm = function() {
		bm.buffer.data[110].value.length && (bm.buffer.data[106].value = bm.buffer.data[110], bm.qo.qp(110, ""), this.xn())
	}, this.xn = function() {
		var h = bm.buffer.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.buffer.data[106].value), h.unshift(bm.buffer.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var xo = [], aC = 0; aC < h.length; aC += 2) xo.push(h[aC]);
		xp(h), bm.buffer.data[117].value = 0, bm.buffer.data[117].oM = xo
	}, this.xq = function(eI) {
		bm.buffer.data[117].oM.splice(eI, 1), bm.buffer.data[117].value = Math.min(eI, bm.buffer.data[117].oM.length - 1);
		var h = bm.buffer.data[116].value.split(";");
		h.splice(2 * eI, 2), xp(h)
	}, this.xr = function(eI) {
		var h = bm.buffer.data[116].value.split(";");
		return {
			uY: h[2 * eI],
			password: h[2 * eI + 1]
		}
	}, this.xt = function() {
		var g1 = bO.ij(bm.buffer.data[121].value, -1, 262143);
		return g1 = -1 === g1 ? ~~(262144 * Math.random()) : g1
	}, this.xI = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var xu, s1 = h[aC].trim();
			0 !== s1.length && (xu = 0 <= (xu = s1.indexOf("=")) ? s1.substring(0, xu) : s1, document.cookie = xu + "=;expires=0;path=/", document.cookie = xu + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = xu +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function xD() {
	this.qp = function(eI, value) {
		2 !== bm.buffer.data[eI].type && (value = Math.floor(value)), bm.buffer.data[eI].value !== value && (bm.buffer.xM(eI, value), 0 === eI ? (u.y(), bA.dk(), u.v(2)) : 1 === eI ? i.dv(1) : 2 === eI ? i.dv(0) : 5 === eI && (bD.sK.xv(), i.dv(
			0)))
	}, this.xw = function() {
		for (var data = bm.buffer.data, aC = 0; aC < 100; aC++) data[aC] && bm.buffer.xM(aC, data[aC].xP);
		bD.sK.xv(), i.dv(1)
	}, this.xx = function() {
		for (var data = bm.buffer.data, aC = 0; aC < data.length; aC++) data[aC] && bm.buffer.qp(aC, data[aC].xP)
	}, this.xy = function() {
		for (var ft = bm.buffer, aC = 128; aC < 135; aC++) ft.xM(aC, ft.data[aC].xP)
	}, this.xz = function(data) {
		bm.qo.qp(109, data.uZ), bm.qo.qp(107, data.y0), bm.qo.qp(108, data.y1), bm.qo.qp(112, data.y2), bm.qo.qp(111, data.y3), bm.qo.qp(113, data.y4), bm.qo.qp(135, data.y5), bm.qo.qp(136, data.y6), bm.qo.qp(137, data.y7), bm.qo.qp(138, data
			.y8), bm.qo.qp(139, data.y9), bm.qo.qp(141, data.yA), bm.qo.qp(142, data.yB), bm.qo.qp(143, data.yC), bm.qo.qp(144, data.yD)
	}
}

function c8() {
	this.f0 = new yE, this.yF = new yG, this.yH = new yI, this.dk = function() {
		this.f0.dk()
	}
}

function yG() {
	this.yJ = function(size) {
		for (var yK = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(yK.rS(16)));
		return h.join("")
	}, this.yL = function(s1) {
		return 20 < (s1 = s1.trim()).length ? s1.substring(0, 20) : s1
	}
}

function yE() {
	var yM = new Uint8Array(78);
	this.dk = function() {
		var aC;
		for (yM[50] = 37, aC = 0; aC < 10; aC++) yM[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) yM[aC + 20] = aC + 11, yM[aC + 52] = aC + 38
	}, this.yN = function(s1) {
		return s1.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.yO = function(s1, size) {
		if ((s1 = this.yN(s1)).length > size) return s1.substring(0, size);
		for (; s1.length < size;) s1 = "-" + s1;
		return s1
	}, this.yP = function(s1) {
		for (var yQ = yM, fZ = s1.length, h = new Uint8Array(fZ), aC = 0; aC < fZ; aC++) h[aC] = yQ[s1.charCodeAt(aC) - 45];
		return h
	}, this.yR = function(yS) {
		bG.a8(6 * yS.length), this.yT(yS), bK.dk(bG.aD)
	}, this.yT = function(yS) {
		for (var fZ = yS.length, j = bG, aC = 0; aC < fZ; aC++) j.a9(6, yS[aC])
	}, this.yU = function(s1) {
		this.yT(this.yP(s1))
	}, this.yV = function(s1, size) {
		this.yT(this.yP(this.yO(s1, size)))
	}, this.f1 = function(s1, size) {
		for (var h = this.yP(this.yO(s1, size)), g1 = 0, o7 = 1, aC = h.length - 1; 0 <= aC; aC--) g1 += o7 * h[aC], o7 *= 64;
		return g1
	}
}

function yW() {
	var j, k, yX;

	function yx(i1, fc, yv, yc, yq) {
		fc = yw(i1, fc + 1 + 2 * yc & 3);
		! function(i1, lX) {
			return 1 < Math.abs(i1 % j - lX % j) || 1 < Math.abs(z0(i1) - z0(lX))
		}(i1, fc) && 0 === yq[fc << 2] && (yq[fc << 2] = yv)
	}

	function z0(h7) {
		return Math.floor((h7 + .5) / j) % k
	}

	function yw(h7, fc) {
		return h7 + yX[fc]
	}
	this.yY = function(s1) {
		var aC, yZ, fZ, ya, yK = bK;
		for (bJ.f0.yR(bJ.f0.yP(s1)), bV.yd.ye[bV.fF].j = bV.fk = j = yK.rS(12), bV.yd.ye[bV.fF].k = bV.fl = k = yK.rS(12), yX = [-j, -1, j, 1], bV.yn = document.createElement("canvas"), bV.yn.width = bV.fk, bV.yn.height = bV.fl, bV.yj = bV.yn
			.getContext("2d", {
				alpha: !1
			}), bV.yk = bV.yo = null, bV.yk = bV.yj.getImageData(0, 0, bV.fk, bV.fl), bV.yo = bV.yk.data, bD.sS.yp(bV.yo), fZ = yK.rS(12), yZ = yK.rS(5), ya = yg(j * k - 1), aC = 0; aC < fZ; aC++) ! function(lp, h7, yb, yc) {
			var aC, fc, yK = bK,
				yq = bV.yo,
				yr = h7,
				ys = h7,
				yt = 0,
				yu = 1 + yb,
				yv = 2 - yb;
			for (yq[h7 << 2] = yu, aC = 0; aC < lp; aC++) fc = yK.rS(2), h7 = yw(h7, fc), yq[h7 << 2] === yu ? yt % 2 == 1 && yx(ys, yt + 2 * yc + 3, yv, yc, yq) : yq[h7 << 2] = yu, yx(h7, fc, yv, yc, yq), yx(ys, fc, yv, yc, yq), ys = h7,
				yt = fc;
			yw(h7, 0) === yr ? (yx(h7, 0, yv, yc, yq), yx(yr, 0, yv, yc, yq)) : yw(h7, 1) === yr && (yx(h7, 0, yv, yc, yq), yx(yr, 2, yv, yc, yq));
			0 === lp && (yx(yr, 0, yv, yc, yq), yx(yr, 2, yv, yc, yq))
		}(yK.rS(yZ), yK.rS(ya), 1 === yK.rS(1), 1 === yK.rS(1));
		var fg, fi, iR, z1, z2, z3, yq = bV.yo,
			z4 = !0,
			z5 = bV.yd.ye[bV.fF].z5,
			z6 = bV.yd.ye[bV.fF].z6;
		for (fi = 0; fi < k; fi++)
			for (z1 = !0, z2 = z4, fg = z3 = 0; fg < j; fg++) iR = 4 * fi * j + 4 * fg, z3 <= fg && 0 < yq[iR] && (z2 = 2 === yq[iR], z1) && (z1 = !1, z2 !== z4) ? (z4 = z2, z3 = fg + 1, fg = -1) : (z2 ? (yq[iR] = z6[0], yq[1 + iR] = z6[1], yq[
				2 + iR] = z6[2]) : (yq[iR] = z5[0], yq[1 + iR] = z5[1], yq[2 + iR] = z5[2]), yq[3 + iR] = 255);
		bV.yj.putImageData(bV.yk, 0, 0), bV.yl = !0, bV.ym.dk(), bi.ds = !0
	}
}

function yI() {
	this.yY = function(z7) {
		for (var yK = bK, size = yK.rS(z7), z8 = 7 + 9 * yK.rS(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(yK.rS(z8)));
		return h.join("")
	}
}

function cD() {
	var u2, u3, z9, zA, zB, zC, zD, zE, zF, zG;

	function zI() {
		var zL = aE.zL;
		for (zF = zL; zF < aE.fW; zF++) zH();
		for (zF = aE.hx ? aE.ku : 0; zF < zL; zF++) {
			if (!zM()) {
				for (var ft = aE.zQ = zF; ft < zL; ft++) zF = ft, zH();
				return
			}
			zP(zC + u2 * zB + bO.g0(zB, 2), zD + u3 * zB + bO.g0(zB, 2))
		}
	}

	function zs(player) {
		for (var jS = ah.jS, jU = ah.jU, jT = ah.jT, jV = ah.jV, fi = jU[player]; fi <= jV[player]; fi++)
			for (var fg = jS[player]; fg <= jT[player]; fg++) {
				var fD = ad.zt(fg, fi);
				ad.h9(fD) && (ad.k5(fD) ? ad.h4(fD, player) : ad.zu(fD, player))
			}
	}

	function zr(h, us, ut) {
		var ea = h[us];
		h[us] = h[ut], h[ut] = ea
	}

	function zM() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (u2 = bO.g0(z9 * az.random(), az.value(100)), u3 = bO.g0(zA * az.random(), az.value(100)), zz()) return 1;
			return
		}() || function() {
			var iw, iz, fs, zO, ft, zN;
			for (iw = bO.g0(z9 * az.random(), az.value(100)), iz = bO.g0(zA * az.random(), az.value(100)), fs = 40; 1 <= fs; fs--)
				for (zO = zA - fs; 0 <= zO; zO -= 40)
					for (u3 = (zO + iz) % zA, ft = 40; 1 <= ft; ft--)
						for (zN = z9 - ft; 0 <= zN; zN -= 40)
							if (u2 = (zN + iw) % z9, zz()) return 1;
			return
		}()
	}

	function zz() {
		for (var h7, a01, gap = bO.g0(zB - zE, 2), a02 = zD + u3 * zB + gap, a03 = zC + u2 * zB + gap, a00 = a02 + zE - 1; a02 <= a00; a00--)
			for (a01 = a03 + zE - 1; a03 <= a01; a01--)
				if (h7 = ad.zt(a01, a00), !ad.fU(h7) || ad.k5(h7)) return;
		return 1
	}

	function zP(zN, zO) {
		zH(), a04(zN - 2, zO - 2)
	}

	function zH() {
		ah.nU[zF] = 0, ah.hN[zF] = ah.zp[zF] = 0, ah.h1[zF] = [], ah.hF[zF] = [], ah.hG[zF] = [], ah.fy[zF] = [], ah.jS[zF] = ah.jU[zF] = ah.jT[zF] = ah.jV[zF] = 0
	}

	function a04(zN, zO) {
		var h7, aC, a05, a06;
		for (ah.nU[zF] = 1, ah.jS[zF] = zN + 10, ah.jU[zF] = zO + 10, ah.jV[zF] = ah.jT[zF] = 0, a05 = zN; a05 < zN + 4; a05++)
			for (a06 = zO; a06 < zO + 4; a06++)(zN < a05 && a05 < zN + 3 || zO < a06 && a06 < zO + 3) && (h7 = ad.zt(a05, a06), ad.fU(h7)) && (ah.jS[zF] = Math.min(a05, ah.jS[zF]), ah.jT[zF] = Math.max(a05, ah.jT[zF]), ah.jU[zF] = Math.min(a06, ah
				.jU[zF]), ah.jV[zF] = Math.max(a06, ah.jV[zF]), zG[ah.hN[zF]] = h7, ah.hN[zF]++, ad.zu(h7, zF));
		for (ah.zp[zF] = ah.hN[zF], aC = ah.hN[zF] - 1; 0 <= aC; aC--) ad.a07(zG[aC], zF) ? (ad.h4(zG[aC], zF), ah.hF[zF].push(zG[aC])) : ad.a08(zG[aC]) ? (ad.h4(zG[aC], zF), ah.hG[zF].push(zG[aC])) : ad.a09(zG[aC]) && (ad.h4(zG[aC], zF), ah.fy[zF]
			.push(zG[aC]))
	}
	this.dk = function() {
		if (zG = new Array(12), zE = 6, zB = 10, z9 = bO.g0(bV.fk, zB), zA = bO.g0(bV.fl, zB), zC = bO.g0(bV.fk - zB * z9, 2), zD = bO.g0(bV.fl - zB * zA, 2), aE.hx)
			for (var aC = 0; aC < aE.ku; aC++) zF = aC, zH(), ah.nU[zF] = 1;
		(0 === aE.data.spawningType ? zI : 1 === aE.data.spawningType ? (zI(), function() {
			var zR = aE.zS;
			aE.zT || zR++;
			if (!(zR < 3)) {
				for (var data = aE.data, kA = (aE.hx ? aE.ku : 0) + data.teamPlayerCount[0], oD = aE.zQ, zU = new Uint32Array(zR), zV = new Uint32Array(zR), zW = new Uint16Array(zR), zX = new Uint16Array(zR), fX = bj.fX, jS = ah.jS, jU =
						ah.jU, jT = ah.jT, jV = ah.jV, gE = bR.gE, gF = bR.gF, aC = kA; aC < oD; aC++) gE[aC] = jS[aC] + jT[aC] >> 1, gF[aC] = jU[aC] + jV[aC] >> 1;
				for (aC = kA; aC < oD; aC++) {
					var id = fX[aC];
					zU[id] += gE[aC], zV[id] += gF[aC]
				}
				var lH = bj.lH;
				for (aC = 1; aC < zR; aC++) {
					var h2 = Math.max(data.teamPlayerCount[lH[aC]], 1);
					zW[aC] = bO.g0(zU[aC], h2), zX[aC] = bO.g0(zV[aC], h2)
				}
				var zY = bj.zY,
					zZ = bj.zZ,
					za = bj.za,
					gD = bR.gD;
				for (aC = 0; aC < 512; aC++) gD[aC] = aC;
				for (var eH = 0; eH < 2 + (4 <= zR); eH++)
					for (aC = kA; aC < oD; aC++) {
						for (var i1 = aC, zb = gD[i1], zc = 1, fp = bO.zd(gE[zb] - zW[1], gF[zb] - zX[1]), fs = 2; fs < zR; fs++) {
							var ze = bO.zd(gE[zb] - zW[fs], gF[zb] - zX[fs]);
							ze < fp && (fp = ze, zc = fs)
						}
						var zf = fX[i1];
						if (zc !== zf) {
							if (2 === eH && 4 <= zR) {
								var zg = Math.max((zc + 1) % zR, 1),
									zh = bO.zd(gE[zb] - zW[zg], gF[zb] - zX[zg]);
								for (fs = 1; fs < zR; fs++) ze = bO.zd(gE[zb] - zW[fs], gF[zb] - zX[fs]), fp < ze && ze < zh && (zh = ze, zg = fs);
								zg !== zf && bO.zd(zW[zf] - zW[zg], zX[zf] - zX[zg]) < bO.zd(zW[zf] - zW[zc], zX[zf] - zX[zc]) && (zc = zg)
							}
							var zi = lH[zc],
								zj = zZ[zi] + (aE.hx ? 0 : za[zi]),
								lX = zY[zj],
								zk = gD[lX],
								zl = zZ[zi + 1];
							fp = bO.zd(gE[zk] - zW[zf], gF[zk] - zX[zf]);
							for (var ej = zj + 1; ej < zl; ej++) {
								var zm = zY[ej],
									zn = gD[zm];
								(ze = bO.zd(gE[zn] - zW[zf], gF[zn] - zX[zf])) < fp && (fp = ze, lX = zm)
							}
							lX < kA || oD <= lX || (zk = gD[lX], zU[zf] += gE[zk] - gE[zb], zV[zf] += gF[zk] - gF[zb], zU[zc] += gE[zb] - gE[zk], zV[zc] += gF[zb] - gF[zk], h2 = data.teamPlayerCount[lH[zf]], zW[zf] = bO.g0(zU[zf], h2),
								zX[zf] = bO.g0(zV[zf], h2), h2 = data.teamPlayerCount[zi], zW[zc] = bO.g0(zU[zc], h2), zX[zc] = bO.g0(zV[zc], h2), gD[i1] = zk, gD[lX] = zb)
						}
					}! function() {
						for (var gD = bR.gD, jS = ah.jS, jU = ah.jU, jT = ah.jT, jV = ah.jV, hN = ah.hN, zp = ah.zp, hF = ah.hF, hG = ah.hG, fy = ah.fy, aC = 0; aC < 512; aC++) {
							var zq = gD[aC];
							if (zq !== aC) {
								zr(jS, aC, zq), zr(jU, aC, zq), zr(jT, aC, zq), zr(jV, aC, zq), zr(hN, aC, zq), zr(zp, aC, zq), zr(hF, aC, zq), zr(hG, aC, zq), zr(fy, aC, zq), zs(aC), zs(zq), gD[aC] = aC;
								for (var k = zq, h8 = gD[k]; h8 !== aC;) h8 = gD[k = h8];
								gD[k] = zq
							}
						}
					}()
			}
		}) : function() {
			var zL = aE.zL;
			for (zF = zL; zF < aE.fW; zF++) zH();
			for (zF = aE.hx ? aE.ku : 0; zF < zL; zF++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							zN = spawningData[2 * zF] + 1,
							spawningData = spawningData[2 * zF + 1] + 1;
						if (3 < zN && zN < bV.fk - 5 && 3 < spawningData && spawningData < bV.fl - 5 && ad.fU(ad.zt(zN, spawningData)) && function(zN, zO) {
								var h7, a01, a00;
								for (a00 = zO; zO - 6 < a00; a00--)
									for (a01 = zN; zN - 6 < a01; a01--)
										if (h7 = ad.zt(a01, a00), ad.k5(h7)) return;
								return 1
							}(zN + 3, spawningData + 3)) return zP(zN + 1, spawningData + 1), 1;
						return
					}()) {
					if (!zM()) {
						for (var ft = aE.zQ = zF; ft < zL; ft++) zF = ft, zH();
						return
					}
					var zN = zC + u2 * zB + bO.g0(zB, 2),
						zO = zD + u3 * zB + bO.g0(zB, 2);
					zP(zN, zO)
				}
		})(), bg.nQ[7] = ah.hN[aE.fJ]
	}, this.a0A = function(k3, a0B, a0C) {
		var aC, zN, zO, h7, u2, u3;
		for (zF = k3, aC = 0; aC < 20; aC++)
			for (zN = a0B + aC; a0B - aC <= zN; zN--)
				for (zO = a0C + aC; a0C - aC <= zO; zO--)
					if ((zN === a0B + aC || zN === a0B - aC || zO === a0C + aC || zO === a0C - aC) && 3 < zN && zN < bV.fk - 5 && 3 < zO && zO < bV.fl - 5 && ad.fU(ad.zt(zN, zO)) && function(zN, zO) {
							var h7, a01, a00;
							for (a00 = zO; zO - 6 < a00; a00--)
								for (a01 = zN; zN - 6 < a01; a01--)
									if (h7 = ad.zt(a01, a00), ad.k5(h7) && !ad.a0I(zF, h7)) return;
							return 1
						}(zN + 3, zO + 3)) {
						if (0 < ah.hN[zF]) {
							for (u3 = u2 = h7 = void 0, u2 = ah.jT[zF]; u2 >= ah.jS[zF]; u2--)
								for (u3 = ah.jV[zF]; u3 >= ah.jU[zF]; u3--) h7 = 4 * (u3 * bV.fk + u2), ad.a0F(zF, h7) && (ad.a0G(h7), ah.hN[zF]--);
							zH()
						}
						return a04(zN - 1, zO - 1), !0
					} return !1
	}, this.a0H = function(k3) {
		zF = k3, zM() ? zP(zC + u2 * zB + bO.g0(zB, 2), zD + u3 * zB + bO.g0(zB, 2)) : zH()
	}
}

function a0J() {
	au.a0K(), ws.setTransform(im, 0, 0, im, 0, 0), ws.imageSmoothingEnabled = im < 3, ws.drawImage(bV.yn, aT.a0L(), aT.a0M()), bS.a0N.wr(), ws.drawImage(a0O, aT.a0L(), aT.a0M()), au.wr(), bQ.wr(), ag.wr(), (aE.ny ? (bk.wr(), bF) : (aO.wr(), aW.wr(),
		aS.wr(), bF.wr(), ax.wr(), aX.wr(), aT.wr(), aR.wr(), bk.wr(), aV.wr(), aQ.wr(), aN.wr(), aM.wr(), aY.wr(), bh.wr(), aw)).wr(), u.wr()
}

function a0P(ou, j, k) {
	ou.clearRect(0, 0, j, k), ou.fillStyle = bE.pL, ou.fillRect(0, 0, j, k)
}

function a0Q(ou, j, k, a0R) {
	ou.fillStyle = bE.pO, ou.fillRect(0, 0, j, a0R), ou.fillRect(0, 0, a0R, k), ou.fillRect(j - a0R, 0, a0R, k), ou.fillRect(0, k - a0R, j, a0R)
}

function a0S(ou, fg, fi, iV, a0R, h7, a0T) {
	ou.fillStyle = bE.pO;
	var h7 = Math.floor(iV * h7),
		ug = (h7 += (h7 - a0R) % 2, Math.floor((h7 - a0R) / 2)),
		iV = Math.floor((iV - h7) / 2);
	ou.fillRect(fg + iV, fi + iV + ug, h7, a0R), a0T && ou.fillRect(fg + iV + ug, fi + iV, a0R, h7)
}

function a0V() {
	this.dk = function() {
		8 === aE.lC && aO.a0W()
	}, this.a0X = function(a0Y) {
		var elo = aE.data.elo,
			k9 = (elo[a0Y] - elo[1 - a0Y]) / 10,
			k9 = 8 / (1 + Math.pow(2, k9 / 32)),
			k9 = Math.floor(10 * k9 + .5),
			a0a = elo[a0Y] + k9,
			a0b = this.a0c(a0a),
			elo = this.a0c(elo[1 - a0Y] - k9),
			k9 = (0 === a0Y ? aO.a0e(a0b, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.a0e(elo, a0b, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a0a * bO.sqrt(a0a) >> 8),
			elo = ((1 + aE.a0h) * k9 / 100).toFixed(2);
		a0Y === aE.fJ ? aO.a0i(640, L(28, [elo]), 40, 0, bE.pO, bE.pL, -1, !1) : aO.a0i(640, L(29, [ah.a0j[a0Y], elo]), 40, 0, bE.pO, bE.pL, -1, !1)
	}, this.a0c = function(elo) {
		return 16e3 === (elo = bO.ij(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cj() {
	this.tY = new a0k, this.yq = new a0l
}

function a0l() {
	this.iL = !1;
	this.a0p = [], this.a0q = 100;
	var nv, nw, gap, iV, a0m, a0o, a0r = 0,
		a0s = new Array(9),
		a0t = [],
		a0u = [],
		a0v = 0,
		a0w = 0,
		a0x = 0,
		a0y = 0;

	function a1A() {
		a0s.sort(function(fs, ft) {
			return ft.kz - fs.kz
		});
		for (var s1 = "" + a0s[0].r3, aC = 1; aC < 9; aC++) s1 += "," + a0s[aC].r3;
		for (aC = 0; aC < 9; aC++) s1 += "," + a0s[aC].kz;
		bm.buffer.xM(120, s1)
	}
	this.dk = function() {
		for (var a0z = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a0z.length; aC++) {
			var color = 6 === a0z[aC] ? bE.po : bE.pM;
			this.a0p.push(bD.canvas.a10(ac.get(3), a0z[aC], color))
		}
		for (aC = 0; aC < ak.tY.a11; aC++) a0u.push(ak.tY.a12 - ak.tY.a11 + aC);
		for (aC = 0; aC < ak.tY.a13; aC++) a0u.push(ak.tY.a14 + aC);
		var a15 = ak.tY.a16(bN.a15);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a15.slice(), aC = 0; aC < a15.length; aC++) a0u.push(a15[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a0s[q] = {
						r3: isNaN(qcode) ? 1015 + q : qcode,
						kz: 0
					}
				} else {
					var aC, h = bm.buffer.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) a0s[aC] = {
							r3: 1015 + aC,
							kz: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var g1 = parseInt(h[aC]),
								ej = (g1 = 0 <= g1 && g1 < ak.tY.a12 ? g1 : 0, parseInt(h[aC + 9]));
							ej = 0 <= ej && ej < 1e3 ? ej : 0, a0s[aC] = {
								r3: g1,
								kz: ej
							}
						}
				}
		}()
	}, this.show = function(m9, mA, a1B) {
		var aC;
		if (a0v = m9, a0w = mA, a0r = a1B || 0, this.iL = !0, a0t = [], 0 === a0r)
			for (aC = 0; aC < 9; aC++) a0t.push(a0s[aC].r3);
		else {
			var ft = 49 * a0r,
				a1B = ft - 49;
			for (a1B >= a0u.length && (a0r = 1, a1B = 0, ft = 49), aC = a1B = (ft = Math.min(ft, a0u.length)) - 49; aC < ft; aC++) a0t.push(a0u[aC])
		}
		a0t.push(1024);
		a1B = a0t.length, iV = Math.floor((a1.a2.ik() ? .075 : .0468) * i.il), gap = Math.floor(iV / 3), (a0x = 10 * (a0m = iV + gap)) > i.j && (a0x = i.j, gap = (a0m = a0x / 10) - (iV = 3 * a0m / 4)), a0o = bO.g0(a1B, 10) + !!(a1B % 10), (a0y =
			a0o * a0m) > i.k && (a0y = i.k, gap = (a0m = a0y / a0o) - (iV = 3 * a0m / 4)), a1B = .5 * gap;
		nv = Math.min(Math.max(m9 - .5 * a0x + a1B, a1B), i.j - a0x + a1B), nw = Math.min(Math.max(mA - .5 * a0y + a1B, a1B), i.k - a0y + a1B)
	}, this.hm = function(m9, mA, player) {
		if (!this.iL) return !1;
		if (this.a1D(m9, mA)) {
			m9 = bO.ij(bO.g0(m9 - nv + .5 * gap, a0m), 0, 9);
			if ((m9 += 10 * bO.ij(bO.g0(mA - nw + .5 * gap, a0m), 0, 9)) >= a0t.length) return aM.tZ(), !0;
			mA = a0t[m9];
			if (1024 === mA) return this.show(a0v, a0w, a0r + 1), !0;
			! function(r3) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) a0s[aC].kz = Math.floor(.99 * a0s[aC].kz);
					for (aC = 0; aC < 9; aC++)
						if (r3 === a0s[aC].r3) return a0s[aC].kz = Math.min(a0s[aC].kz + 30, 999), a1A();
					a0s.splice(5, 0, {
						r3: r3,
						kz: Math.max(a0s[4].kz, 30)
					}), a0s.pop(), a1A()
				}
			}(mA), player === aE.fJ ? bB.hz.r2(mA) : bB.gv.rH(mA, player)
		}
		return aM.tZ(), !0
	}, this.a1D = function(m9, mA) {
		return !(m9 < nv - .5 * gap || mA < nw - .5 * gap || nv + a0x - .5 * gap <= m9 || nw + a0y - .5 * gap <= mA)
	}, this.wr = function() {
		ws.fillStyle = bE.pL, ws.fillRect(nv - .5 * gap, nw - .5 * gap, a0x, a0y);
		for (var iR = .5 * bf.a1E, fZ = (ws.lineWidth = bf.a1E, ws.strokeStyle = ws.fillStyle = bE.pO, ws.strokeRect(nv - .5 * gap + iR, nw - .5 * gap + iR, a0x - 2 * iR, a0y - 2 * iR), ws.imageSmoothingEnabled = !0, a0t.length), aC = 0; aC <
			fZ; aC++) this.a1F(a0t[aC], ws, nv + aC % 10 * a0m, nw + bO.g0(aC, 10) * a0m, iV);
		ws.imageSmoothingEnabled = !1
	}, this.a1F = function(r3, ib, fg, fi, iV) {
		var fD;
		r3 >= 1024 - ak.tY.a11 ? (fD = iV / this.a0q, ib.setTransform(fD, 0, 0, fD, fg, fi), ib.drawImage(this.a0p[r3 - 1024 + ak.tY.a11], 0, 0), ib.setTransform(1, 0, 0, 1, 0, 0)) : (bD.sK.textAlign(ib, 1), bD.sK.textBaseline(ib, 1), ib.font =
			bD.sK.u8(0, .89 * iV), ib.fillText(ak.tY.a1G(r3), fg + .5 * iV, fi + (.35 - bD.sK.a1H + .56) * iV))
	}
}

function a0k() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a11 = 13, this.a13 = this.emojis.length, this.a14 = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a14, this.a12 = 1024, this.a1I = this.emojis.indexOf(
		"💀"), this.a1J = this.a1I + 1, this.a1K = this.emojis.indexOf("🥇"), this.a1L = this.emojis.indexOf("😊"), this.a1G = function(g1) {
		return g1 < this.a14 ? String.fromCharCode(55356, 56806 + bO.g0(g1, 26), 55356, 56806 + g1 % 26) : this.emojis[Math.min(g1 - this.a14, this.a13 - 1)]
	}, this.a16 = function(s1) {
		for (var fZ = s1.length - 2, h = [], aC = 0; aC < fZ; aC++) {
			var a1M = s1.charCodeAt(aC) - 56806,
				a1N = s1.charCodeAt(aC + 2) - 56806;
			0 <= a1M && a1M < 26 && 0 <= a1N && a1N < 26 && (h.push(26 * a1M + a1N), aC += 3)
		}
		return h
	}, this.a1O = function(g1) {
		return g1 < this.a14
	}, this.a1P = function(g1) {
		return g1 >= 1024 - this.a11
	}, this.a1Q = function(g1) {
		return g1 >= this.a14 && g1 < this.a14 + this.a1J
	}
}

function c7() {
	this.f0 = new a1R, this.yF = new a1S, this.yH = new a1T, this.dk = function() {
		this.f0.dk()
	}
}

function a1S() {
	this.yU = function(s1) {
		for (var fZ = s1.length, j = bG, aC = 0; aC < fZ; aC++) j.a9(16, s1.charCodeAt(aC))
	}
}

function a1R() {
	var a1U = new Uint8Array(64);
	this.dk = function() {
		var aC;
		for (a1U[0] = 45, a1U[37] = 95, aC = 0; aC < 10; aC++) a1U[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a1U[aC + 11] = 65 + aC, a1U[aC + 38] = 97 + aC
	}, this.ud = function(a1V) {
		for (var yK = bK, yS = new Uint8Array(a1V), aC = 0; aC < a1V; aC++) yS[aC] = yK.rS(6);
		return yS
	}, this.uc = function(yS) {
		for (var fZ = yS.length, a1W = a1U, h = [], aC = 0; aC < fZ; aC++) h.push(String.fromCharCode(a1W[yS[aC]]));
		return h.join("")
	}, this.a1X = function(value, a1Y) {
		for (var a1W = a1U, h = [], aC = 0; aC < a1Y; aC++) h.push(String.fromCharCode(a1W[value >> 6 * (a1Y - 1 - aC) & 63]));
		return h.join("")
	}
}

function cF() {
	var a1Z, a1a, a1b;
	a1Z = [32, 65, 191, 913, 931], a1a = [64, 127, 688, 930, 1155], a1b = new Array(a1Z.length + 1);
	for (var aC = 0; aC < a1b.length; aC++) {
		a1b[aC] = 0;
		for (var fs = aC - 1; 0 <= fs; fs--) a1b[aC] += a1a[fs] - a1Z[fs]
	}

	function a1h(ej) {
		for (var aC = a1Z.length - 1; 0 <= aC; aC--)
			if (ej >= a1Z[aC] && ej < a1a[aC]) return aC;
		return -1
	}
	this.yL = function(s1) {
		return 0 !== (s1 = s1.trim()).indexOf("Bot ") && 0 !== s1.indexOf("[Bot] ") && function(s1, a1e, a1f) {
			var fZ = (s1 = s1.trim()).length;
			if (fZ < a1e || a1f < fZ) return !1;
			for (var ej, a1g = 0, aC = 0; aC < fZ; aC++)
				if (ej = s1.charCodeAt(aC), a1g += 65 <= ej && ej <= 90 || 1040 <= ej && ej <= 1071 ? 1 : 0, -1 === a1h(ej)) return !1;
			if (3 < a1g && a1g > Math.floor(fZ / 2)) return !1;
			return !0
		}(s1, 3, 20)
	}, this.a1i = function(s1) {
		for (var fZ = (s1 = s1.trim()).length, h = [], aC = 0; aC < fZ; aC++) {
			var ej, h7 = a1h(ej = s1.charCodeAt(aC));
			h.push(a1b[h7] + ej - a1Z[h7])
		}
		return h
	}, this.yY = function(h) {
		for (var ej, ft, s1 = "", fZ = h.length, aC = 0; aC < fZ; aC++)
			for (ft = 1; ft < a1b.length; ft++)
				if (h[aC] < a1b[ft]) {
					ej = a1Z[ft - 1] + h[aC] - a1b[ft - 1], s1 += String.fromCharCode(ej);
					break
				} return s1
	}, this.a1j = function(s1) {
		for (var h = this.a1i(s1), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a1k = function(s1) {
		for (var h = new Array(Math.floor(s1.length / 3)), aC = 0; aC < s1.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(s1.substring(aC, aC + 3));
		return this.yY(h)
	}, this.a1l = function(s1) {
		for (var g1, h = [s1.length], aC = 0; aC < s1.length; aC++) h[aC] = s1.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < s1.length; aC++) aC === s1.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (g1 = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(g1 + (g1 < 26 ? 65 : 71)), aC++);
		return result
	}, this.a1m = function(s1) {
		for (var ej, result = "", aC = 0; aC < s1.length; aC++) 48 <= (ej = s1.charCodeAt(aC)) && ej < 58 ? result += String.fromCharCode(ej) : 65 <= ej && ej < 75 ? result += "0" + (ej - 65).toString() : 75 <= ej && ej < 91 ? result += (ej - 65)
			.toString() : 97 <= ej && ej < 123 && (result += (ej - 71).toString());
		return result
	}, this.a1n = function(s1) {
		for (var fZ = s1.length, h = [], aC = 0; aC < fZ; aC++)(ej = s1.charCodeAt(aC)) < 58 ? h.push(s1[aC]) : (ej -= ej < 91 ? 65 : 71, h.push(String(bO.g0(ej, 10))), h.push(String(ej - 10 * bO.g0(ej, 10))));
		var fZ = h.length - 2,
			ej = 0,
			yS = [];
		for (aC = 0; aC < fZ; aC += 3) yS[ej++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return yS
	}, this.a1o = function() {
		for (var eH, a1p = "", aC = 0; aC < 6; aC++) eH = 48 + az.random() % 36, eH += 58 <= eH ? 39 : 0, a1p += String.fromCharCode(eH);
		return a1p
	}
}

function a1T() {
	this.a1i = function(s1, z7, a1q) {
		for (var a1r = [], fZ = s1.length, max = 0, aC = 0; aC < fZ; aC++) {
			var g1 = s1.charCodeAt(aC);
			a1r.push(g1), max = Math.max(max, g1)
		}
		var z8 = max < 128 ? 7 : 16;
		for (a1q.a9(z7, fZ), a1q.a9(1, +(16 == z8)), aC = 0; aC < fZ; aC++) a1q.a9(z8, a1r[aC])
	}
}

function dG() {
	this.a1s = new a1t, this.result = new a1u, this.a1v = new a1w, this.a1x = new a1y, this.a1z = new a20, this.a21 = new a22, this.dk = function() {
		this.result.dk()
	}
}

function a1w() {
	this.a23 = function() {
		for (var fZ = am.lQ, a24 = am.lV, a25 = [], aC = 0; aC < fZ; aC++) {
			var h7 = a24[aC];
			bD.gv.a26(h7) && a25.push(h7)
		}
		return a25
	}, this.a27 = function() {
		if (0 === bj.lH[aE.a28]) return this.a29();
		bk.kv(aE.a28);
		for (var a25 = [], fZ = bR.g4[0], gD = bR.gD, aC = 0; aC < fZ; aC++) {
			var h7 = gD[aC];
			bD.gv.a26(h7) && a25.push(h7)
		}
		return a25
	}, this.a29 = function() {
		var h7 = mV[0];
		return bD.gv.a26(h7) ? [h7] : []
	}, this.a2A = function(a25) {
		for (var fZ = a25.length, ea = 0, hN = ah.hN, aC = 0; aC < fZ; aC++) ea += hN[a25[aC]];
		return ea
	}
}

function a1t() {
	function a2C() {
		if (2 === aE.a2G) return 1;
		ax.a2H(), aE.a2G = 2, aE.a2I = aE.a2J
	}

	function a2E() {
		bU.a1z.a2K(), aY.show(1 === aE.a2L, !1, 2 === aE.a2L), bU.result.a2K(), bU.a21.ee(), bU.a1x.ee(), bU.a1x.a2M(), aO.a2N(!0), aO.a2O(247), aO.a2O(956), aO.a2O(957), aW.nG(!0), aX.nG(!0), ax.nG(), bF.a2P(), aE.hi && bi.a2Q.a2R(), bi.ds = !0, be
			.a2S(), a1.a2.setState(0)
	}
	this.a2B = function() {
		a2C() || (aE.a2D = 2, a2E())
	}, this.a2F = function() {
		a2C() || (aE.a2D = 1, a2E())
	}
}

function a1y() {
	this.ee = function() {
		var a2a;
		2 === aE.a2D ? (aO.a2T(0, 59), aI.o4(2700)) : aE.lC < 7 ? (a2a = bj.lH[aE.a28], a2a = bj.a2c[a2a], aR.a2d(L(30, [a2a]), 2, 1, 12), aO.a0i(0, L(31, [a2a]), 40, 0, bE.pO, bE.pL, -1, !1), aI.o4(2700)) : 8 === aE.lC ? (aE.a2L ? aO.a2T(aE.a2Y,
			2) : aO.a2T(1 - aE.fJ, 3), aE.a2Z.a0X(aE.a2Y), aI.nq(aE.a2Y, 2700, !1, 0)) : 9 === aE.lC ? (aO.a2e(), aI.o4(2700)) : (aO.a2f(aE.a2Y), aI.nq(aE.a2Y, 2700, !1, 0))
	}, this.a2M = function() {
		var s1;
		aE.hi || aE.lE || (s1 = b1.z.a2g(), aE.lC < 7 ? s1 += "/log/team" : 8 === aE.lC ? s1 += "/log/1v1" : 9 === aE.lC ? s1 += "/log/zombies" : s1 += "/log/br", aO.a0i(720, s1, 736, 0, bE.pO, bE.pm, -1, !1))
	}
}

function a22() {
	function a2q() {
		var uw;
		return 8 === aE.lC ? 0 : (uw = Math.floor(ah.a2r[aE.fJ] / 50), (uw = Math.min(uw, 200)) / 100)
	}

	function a2i() {
		var uw = a2q();
		0 !== uw && aO.a0i(440, L(32, [uw.toFixed(2)]), 40, 0, bE.pg, bE.pL, -1, !1)
	}
	this.ee = function() {
		var a2j;
		0 === bU.result.a2h || 0 === bU.result.a25.length || 8 === aE.lC ? bD.gv.hl(aE.fJ) && a2i() : (function(a2j) {
			7 !== aE.lC && 10 !== aE.lC && 9 !== aE.lC || 0 !== aE.a2L && a2j && (9 === aE.lC ? aO.a0i(600, L(36, [100 * (1 + aE.a0h)]), 40, 0, bE.pO, bE.pL, -1, !1) : aO.a0i(600, L(36, [a2j.toFixed(2)]), 40, 0, bE.pO, bE.pL, -1, !1))
		}(a2j = function() {
			aO.a0i(520, L(33), 40, 0, bE.pO, bE.pL, -1, !1);
			for (var a25 = bU.result.a25, fZ = a25.length, hN = ah.hN, h = [], aC = 0; aC < fZ; aC++) {
				var h7 = a25[aC];
				h.push({
					h7: h7,
					ea: hN[h7]
				})
			}
			h.sort((fs, ft) => ft.ea - fs.ea);
			var a2c = ah.a0j,
				ea = bU.result.a2s,
				uw = bU.result.a2h,
				s1 = "",
				a2j = 0;
			for (aC = 0; aC < fZ; aC++) {
				var iJ = h[aC].ea * uw / (100 * ea),
					a2u = a2c[h[aC].h7] + ": " + iJ.toFixed(2) + "   ";
				h[aC].h7 === aE.fJ && (a2j = iJ, 9 === aE.lC) && 0 !== aC && (a2j = 0), 2 < aC && 4 !== fZ ? 3 === aC && (s1 += "(" + L(34, [fZ - 3]) + ")") : s1 += a2u
			}
			aO.a0i(560, bD.tI.a2v(s1), 40, 0, bE.pg, bE.pL, -1, !1), a2j ? aO.a0i(580, L(35, [a2j.toFixed(2) + " + " + a2q().toFixed(2)]), 40, 0, bE.pg, bE.pL, -1, !1) : bD.gv.hl(aE.fJ) && a2i();
			return a2j
		}()), 2 === aE.a2D || 7 <= aE.lC || function(a2j) {
			var a25 = bU.result.a25,
				fZ = a25.length,
				a2w = ah.a2w,
				hN = ah.hN,
				a2x = [];
			loop: for (var aC = 0; aC < fZ; aC++) {
				var h7 = a25[aC],
					a2y = bD.tI.a2z(a2w[h7]);
				if (null !== a2y) {
					for (var a30 = hN[h7], ft = a2x.length - 1; 0 <= ft; ft--)
						if (a2y === a2x[ft].name) {
							a2x[ft].ea += a30, a2x[ft].h.push({
								h7: h7,
								ea: a30
							});
							continue loop
						} a2x.push({
						name: a2y,
						ea: a30,
						h: [{
							h7: h7,
							ea: a30
						}]
					})
				}
			}
			if (0 !== a2x.length) {
				a2x.sort((fs, ft) => ft.ea - fs.ea);
				var h = a2x[0].h,
					a31 = (h.sort((fs, ft) => ft.ea - fs.ea), "[" + a2x[0].name + "]"),
					a32 = 512 * bU.result.a2h / 26214400,
					lp = (aO.a0i(0, L(37, [a31, a32.toFixed(4)]), 40, 0, bE.pO, bE.pL, -1, !1), h.length),
					yQ = a2x[0].ea,
					a33 = 1e4 * a32;
				for (aC = 0; aC < lp; aC++)
					if (h[aC].h7 === aE.fJ) {
						aO.a0i(600, L(38, [(a33 * h[aC].ea / (10 * yQ)).toFixed(2)]), 40, 0, bE.pO, bE.pL, -1, !1), aO.a0i(640, L(39, [(.2 * a2j).toFixed(2), a31]), 40, 0, bE.pO, bE.pL, -1, !1);
						break
					}
			}
		}(a2j))
	}, this.a2n = function() {
		var a2o, yr;
		aE.lE || (a2o = ah, yr = aE.fJ, 0 === a2o.a2p[yr]) || a2o.jy[yr] < 1 || 2 * a2o.rj[yr] > 3 * (a2o.jx[yr] + a2o.jy[yr]) || a2i()
	}
}

function a1u() {
	this.dk = function() {
		this.a34 = 0, this.a25 = [], this.a2s = 0, this.a2h = 0
	}, this.a2K = function() {
		var tt;
		aE.lE || (tt = this, 2 === aE.a2D ? tt.a25 = bU.a1v.a23() : aE.iT ? tt.a25 = bU.a1v.a27() : tt.a25 = bU.a1v.a29(), tt.a34 = bl.a36.a37(), tt.a2s = Math.max(1, bU.a1v.a2A(tt.a25)), bB.gv.rQ(), 8 === aE.lC ? bU.result.a2h = 0 : tt.a2h =
			100 * bU.result.a34 * (1 + aE.a0h))
	}
}

function a20() {
	this.a2K = function() {
		if (2 === aE.a2D) aE.a2L = 2;
		else {
			if (8 === aE.lC) bD.gv.kH(0) || 0 === ah.nU[0] ? aE.a2Y = 1 : bD.gv.kH(1) || 0 === ah.nU[1] ? aE.a2Y = 0 : aE.a2Y = +(ah.hN[1] > ah.hN[0]);
			else {
				if (aE.iT) {
					var lS = bk.a3A();
					if (aE.a28 = lS, bj.lH[lS]) return void(aE.a2L = +(bj.fX[aE.fJ] === lS))
				}
				aE.a2Y = mV[0]
			}
			aE.a2L = +(aE.a2Y === aE.fJ)
		}
	}
}

function dL() {
	this.id = 0, this.e3 = 0, this.xY = null, this.xZ = null, this.xa = null, this.xg = null, this.a2 = new a3B, this.dk = function() {
		var self, e3;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (e3 = Android.getVersion()) < 12 || (self.e3 = e3, self.id = 1, self.xZ = Android),
			function(self) {
				var e3;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.xa = mwIOSdataX, self.xg = window.webkit.messageHandlers.iosCommandA, e3 = self
					.xa.version, self.e3 = e3 ? Number(e3) : 0)
			}(this),
			function(self) {
				var xY;
				try {
					if (!(xY = window.localStorage)) return;
					xY.setItem("tls7", "1"), xY.removeItem("tls7")
				} catch (error) {
					return
				}
				self.xY = xY
			}(this)
	}
}

function a3B() {
	this.a3F = function() {
		bm.qo.xw(), bm.qo.xx(), b1.z.close(0, 3255), 0 === a1.id ? a1.xY && a1.xY.clear() : 1 === a1.id ? a1.xZ.saveString(199, "") : 2 === a1.id && a1.xg.postMessage("clear")
	}, this.a3G = function() {
		2 === a1.id ? a1.xg.postMessage("showConsentForm") : 1 === a1.id && a1.xZ.setState(7)
	}, this.a3H = function() {
		this.setState(14)
	}, this.ik = function() {
		return 1 === bm.buffer.xN(2)
	}, this.a3I = function() {
		bm.buffer.xM(102, "")
	}, this.setState = function(a3J) {
		1 === a1.id && 5 <= a1.e3 && a1.xZ.setState(a3J)
	}, this.a3 = function() {
		var a3K;
		1 === a1.id && 7 <= a1.e3 ? a1.xZ.setState(5) : 2 === a1.id ? a1.xg.postMessage("reload 0") : ((a3K = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a3K.toString())
	}, this.eV = function() {
		0 !== a1.id && (1 === a1.id ? a1.xZ.prepareAd("8646194357") : 2 === a1.id && (0 === a1.e3 ? a1.xg.postMessage("prepare ad 2904813909") : a1.xg.postMessage("loadAds 2904813909")))
	}, this.eb = function(ea) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.e3 && (a1.xZ.presentAd(ea), !0) : 2 === a1.id && 0 !== a1.e3 && (a1.xg.postMessage("showAd"), !0))
	}, this.du = function() {
		2 === a1.id && a1.e3 < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a3L + "' target='_blank'>" + bN
			.a3L + "</a>", !0, [new x("⬅️ " + L(40), function() {
				u.v(0)
			}, bE.q3)]))
	}
}

function da() {
	function a3N(e) {
		mE(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(40), function() {
				u.a3O()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.pl)]))
	}

	function a3a(e) {
		mE(e), u.v(4, 5, new w(L(41), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a3V(e), !0))
	}

	function a3V(e) {
		var s1 = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + s1 : 4527 === e ? "Player already in lobby" + s1 : 4577 === e ? "Your IP is banned." + s1 : 4530 === e ? "Lobby Timeout" + s1 : 4528 === e ?
			"Lobby Kick: Another login detected." + s1 : 4540 === e ? "You have been kicked." + s1 : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + s1 : 4555 === e ? "This Account is blocked." + s1 :
			4580 === e ? "More Gold needed" + s1 : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + s1 : 4591 === e ? "The algo determined you are a bot." + s1 : "Unknown error" + s1
	}

	function mE(e) {
		a3Q(e), u.z.a0()
	}

	function a3Q(e) {
		4540 === e && b1.z.a3c(e);
		var a3J = ab.a3P();
		bw.close(), 6 === a3J ? b1.z.a3c(e) : bq.f6 ? (u.y(), bq.vx(), b1.z.close(b1.z.f7, 3256)) : 8 === a3J && aE.a3d(!0)
	}
	this.q = [], this.a3M = function(oN, e) {
		if (1 === oN && __fx.customLobby.isActive() && 6 !== ab.a3P() && __fx.customLobby.setActive(!1), console.log("socket close index " + oN + " error " + e), this.q.push(e), 4321 === e && (data = bm.z.xr(0), console.log("Reset to: " + data
				.uY), bm.qo.qp(105, data.uY), bm.qo.qp(106, data.password)), 8 === u.ua && 0 === oN)
			if (4211 === e) a3N(e);
			else {
				if (bq.f6 && (4495 === e || 4480 === e) && b1.z.f7 !== oN) return void u.a3O();
				if (8 !== ab.a3P() && a3Q(), 4480 === e) return bm.qo.xy(), void u.v(4, 0, new w(L(43), L(44), !0));
				var data = 0;
				u.a3T() && 10 === u.a3T().a3U && (data = u.a3T().a3U), u.v(4, data, new w(L(41), a3V(e), !0))
			}
		else {
			data = ab.a3P();
			if (6 === data) {
				if (4211 === e) return void a3N(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a3W(oN)
			} else if (bq.f6) {
				if (oN !== b1.z.f7) return
			} else {
				if (8 === data) return void(oN !== b1.z.a3X || aE.lE || 1 !== aE.a2G || aE.hi || aO.a3Y(L(42, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}(4591 === e ? function(e) {
				mE(e), u.v(4, 5, new w("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new x("⬅️ " + L(40), function() {
					u.a3O()
				}), new x("🔄 Reload", function() {
					a1.a2.a3()
				}, bE.pl)]))
			} : a3a)(e)
		}
	}, this.a3b = function(e) {
		this.q.push(e), 8 === ab.a3P() ? aE.lE || 1 !== aE.a2G || aO.a3Y(L(42, [e])) : a3a(e)
	}, this.t = function() {
		this.q.push(3268), mE(3268)
	}
}

function dA() {
	var a3e, a3f, a3g = -15e3,
		a3h = !1;

	function hm(e) {
		a41() || (a3h = !0, a42(e, 1), b1.z.a43(b1.z.a3X), a44(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a3q(e) {
		a3g = bi.eZ, a42(e, 1), b1.z.a43(b1.z.a3X), 0 < e.touches.length && (a3e = Math.floor(i.l * e.touches[0].clientX), a3f = Math.floor(i.l * e.touches[0].clientY), av.a3q(e) || a44(a3e, a3f))
	}

	function a44(fg, fi) {
		u.hm(fg, fi), 0 === aE.a2G ? ab.hm(fg, fi) : bF.a45(fg, fi) || bh.hm(fg, fi) || aY.hm(fg, fi) || aM.a46(fg, fi) || aQ.hm(fg, fi) || 0 <= aN.hm(fg, fi) || ax.hm(fg, fi) || bM.a47(fg, fi) || aM.a48(fg, fi)
	}

	function a3m(e) {
		a41() || (a3h = !0, a42(e, 1), a49(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a3r(e) {
		a3g = bi.eZ, a42(e, 1), 0 < e.touches.length && (a3e = Math.floor(i.l * e.touches[0].clientX), a3f = Math.floor(i.l * e.touches[0].clientY), av.a3r(e) || a49(a3e, a3f))
	}

	function a49(fg, fi) {
		bM.sm() || (bM.he = fg, bM.hf = fi), u.a3m(fg, fi), 0 === aE.a2G ? ab.a3m(fg, fi) : (bW.hg(fg, fi), bh.a3m(fg, fi) || (aN.a3m(fg, fi), aM.iL() ? aM.a3m(fg, fi) : aS.hn ? aS.a3m(fg) && (bi.ds = !0) : (aW.a3m(fg, fi), aT.o0 && aT.a3m(fg, fi) &&
			(bi.ds = !0))))
	}

	function a3o(e) {
		a41() || (a42(e, 1), a4A(), 0 === aE.a2G ? (ab.click(-1024, -1024), aU.reset()) : (aW.a4B(-1024, -1024), aN.a3m(-1024, -1024), aS.a4C(), aT.o0 = !1))
	}

	function a3n(e) {
		a41() || (a42(e, 1), a4D(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a3k && (bM.a3k = !1, e.preventDefault()))
	}

	function click(e) {
		a41() || a42(e, 1)
	}

	function a3s(e) {
		a3g = bi.eZ, a42(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a2G ? aT.o0 = !1 : av.a4E() || (a4D(a3e, a3f, !1), bM.a3k && (bM.a3k = !1, e.preventDefault()))
	}

	function a3t(e) {
		a3g = bi.eZ, a42(e, 1), a4D(a3e, a3f, !1), bM.a3k && (bM.a3k = !1, e.preventDefault())
	}

	function a3u(e) {}

	function a3v(e) {}

	function a3w(e) {
		a41() || a42(e, 0)
	}

	function a4D(fg, fi, a4F) {
		a4A(), 0 === aE.a2G ? ab.click(fg, fi) : (aW.a4B(fg, fi), bh.a4B(), aS.a4C(), aT.o0 = !1, aM.click(fg, fi, a4F) ? bi.ds = !0 : aN.a3n(fg, fi))
	}

	function a4A() {
		u.a4A()
	}

	function a3p(e) {
		var fg, fi, deltaY;
		a41() || (a42(e, 1), b1.z.a43(b1.z.a3X), fg = Math.floor(i.l * e.clientX), fi = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a3p(fg, fi, deltaY), 0 === aE.a2G ? ab.a3p(fg, fi, deltaY) : aW.a3p(fg, fi,
			deltaY) || (aS.a4G(fg, fi) ? aS.a3p(deltaY) && (bi.ds = !0) : aT.a3p(fg, fi, deltaY)))
	}

	function a3x(e) {
		a42(e, 0)
	}

	function a42(e, id) {
		0 === id && u.iL() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a3P() && e.preventDefault()
	}

	function a3y(e) {
		if (__fx.keybindHandler(e.key)) return;
		a41() || 0 < i.uG || (e = e.code) && e.length && (ba.ej(e, 18) ? at.a4I(3) : ba.ej(e, 22) ? at.a4I(0) : ba.ej(e, 20) ? at.a4I(1) : ba.ej(e, 24) ? at.a4I(2) : ba.ej(e, 10) ? aS.a4J(31 / 32) : ba.ej(e, 8) ? aS.a4J(32 / 31) : ba.ej(e, 6) ? aS
			.a4J(7 / 8) : ba.ej(e, 4) ? aS.a4J(8 / 7) : ba.ej(e, 14) ? 0 !== aE.a2G && aT.a3p(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.ej(e, 16) ? 0 !== aE.a2G && aT.a3p(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.ej(e, 0) ?
			aE.a2G && bW.hh(0) : ba.ej(e, 2) ? aE.a2G && bW.hh(1) : ba.ej(e, 30) ? aE.a2G && bW.hh(2) : ba.ej(e, 26) ? aE.a2G && bW.iF() : ba.ej(e, 28) && aE.a2G && bW.iK())
	}

	function a3z(e) {
		if (!a41() && !(0 < i.uG || bi.eZ < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a4K(1) || "Space" === code && u.a4K(0))) return bq.f6 ? bq.w3.a4K(code) ? void 0 : void("Escape" === code && bM.g2()) : void(8 !== ab.a3P() && ab.a4K(e) ? bi.ds = !0 : "Escape" === code ?
				bM.g2() : ba.ej(code, 18) ? at.a4L(3) : ba.ej(code, 22) ? at.a4L(0) : ba.ej(code, 20) ? at.a4L(1) : ba.ej(code, 24) ? at.a4L(2) : ba.ej(code, 12) ? bF.a4M(!aE.ny) : "Space" === code && aE.a2G && (aN.hj && aN.a4N(), aE.hi) &&
				bF.a4O(!1))
		}
	}

	function a40() {
		"hidden" !== document.visibilityState && (bi.ds = !0)
	}

	function a41() {
		return a3g + 15e3 > bi.eZ
	}

	function resize() {
		i.a4Q()
	}
	this.a3i = 0, this.a3j = "", this.a3k = !1, this.he = 0, this.hf = 0, this.dk = function() {
		a3l.addEventListener("mousedown", hm, {
			passive: !1
		}), a3l.addEventListener("mousemove", a3m, {
			passive: !1
		}), a3l.addEventListener("mouseup", a3n, {
			passive: !1
		}), a3l.addEventListener("click", click, {
			passive: !1
		}), a3l.addEventListener("mouseleave", a3o, {
			passive: !1
		}), a3l.addEventListener("wheel", a3p, {
			passive: !1
		}), a3l.addEventListener("touchstart", a3q, {
			passive: !1
		}), a3l.addEventListener("touchmove", a3r, {
			passive: !1
		}), a3l.addEventListener("touchend", a3s, {
			passive: !1
		}), a3l.addEventListener("touchcancel", a3t, {
			passive: !1
		}), a3l.addEventListener("dragover", a3u), a3l.addEventListener("drop", a3v), a3l.addEventListener("dblclick", a3w), document.addEventListener("contextmenu", a3x), document.addEventListener("keydown", a3y), document.addEventListener(
			"keyup", a3z), document.addEventListener("visibilitychange", a40), window.addEventListener("resize", resize)
	}, this.a47 = function(fg, fi) {
		return !!bF.hm(fg, fi) || !!(aW.hm(fg, fi) || aT.hm(fg, fi) || aS.hm(fg, fi) || aO.hm(fg, fi))
	}, this.a4P = a41, this.sm = function() {
		return !a3h || 0 < a3g
	}, this.g2 = function() {
		if (!u.iL()) return 8 === ab.a3P() ? aE.ny ? void bF.a4M(!1) : bh.iL ? void bh.a4N() : void aN.a4N() : void(7 !== ab.a3P() && 6 === ab.a3P() && aa.a4R());
		u.a4K(2)
	}
}

function c3() {
	this.sK = new a4S, this.sS = new a4T, this.gv = new a4U, this.tI = new a4V, this.ou = new a4W, this.or = new a4X, this.canvas = new a4Y, this.color = new a4Z, this.a4a = new a4b, this.dk = function() {
		this.sK.xv()
	}
}

function a4T() {
	this.yp = function(h) {
		h.fill(0)
	}, this.a4c = function(h) {
		for (var fZ = h.length, aC = 0; aC < fZ; aC++) h[aC] = []
	}, this.a4d = function(a1M, a4e) {
		for (var a1N = bR.g9, aC = 0; aC < 3; aC++) a1N[aC] = a4e * a1M[aC];
		return a1N
	}, this.a4f = function(a1M, a1N, a4g) {
		for (var k9 = 0, aC = 0; aC < 3; aC++) k9 += Math.abs(a1M[aC] - a1N[aC]);
		return a4g <= k9
	}, this.a4h = function(a1M, a4i) {
		for (var aC = 0; aC < 3; aC++) a1M[aC] = bO.ij(a1M[aC] + a4i, 0, 255);
		return a1M
	}, this.a4j = function(h, us, ut) {
		ut = ut || h.length - 1;
		for (var a4k = 0, aC = us = us || 0; aC <= ut; aC++) a4k += h[aC];
		return a4k
	}, this.a4l = function(h, a4m) {
		for (var aC, a4n, fZ = h.length, a4o = [], fs = fZ - 1; 0 <= fs; fs--) {
			for (aC = a4n = 0; aC < fZ; aC++) a4m(h[aC]) < a4m(h[a4n]) && (a4n = aC);
			fZ--, a4o.push(h[a4n]), h[a4n] = h[fZ], h.pop()
		}
		return a4o
	}, this.min = function(h) {
		var aC, g1, fZ = h.length;
		if (0 === fZ) return 0;
		for (g1 = h[0], aC = 1; aC < fZ; aC++) g1 = Math.min(g1, h[aC]);
		return g1
	}, this.max = function(h) {
		var fZ = h.length;
		if (0 === fZ) return 0;
		for (var g1 = h[0], aC = 1; aC < fZ; aC++) g1 = Math.max(g1, h[aC]);
		return g1
	}, this.a4p = function(h, g1) {
		for (var fZ = h.length, h2 = 0, aC = 0; aC < fZ; aC++) h2 += h[aC] > g1;
		return h2
	}, this.a4q = function(a4r, a4s, min) {
		for (var fZ = a4s[0], aC = fZ - 1; 0 <= aC; aC--) a4r[aC] < min && (a4r[aC] = a4r[--fZ]);
		a4s[0] = fZ
	}, this.a4t = function(h, fZ, value) {
		for (var aC = 0; aC < fZ; aC++) h[aC] -= value
	}, this.a4u = function(h) {
		for (var fZ = h.length, aC = 0; aC < fZ; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a4v = function(s1, h, a4w) {
		h.fill(0);
		for (var uw = s1.split(","), fZ = Math.min(uw.length, h.length), aC = 0; aC < fZ; aC++) h[aC] = Math.min(parseInt(uw[aC]), a4w)
	}, this.a4x = function(s1, h, tF) {
		h.fill("");
		for (var uw = s1.split('"'), fZ = Math.min(uw.length, 2 * h.length), iR = 0, aC = 1; aC < fZ; aC += 2) h[iR++] = uw[aC].slice(0, tF)
	}, this.a4y = function(h, h2) {
		if (0 === h2) h.fill(0);
		else {
			var a4k = this.a4j(h),
				fZ = h.length;
			if (0 === a4k) h.fill(bO.g0(h2, fZ));
			else
				for (var aC = 0; aC < fZ; aC++) h[aC] = bO.g0(h2 * h[aC], a4k);
			if (0 === (a4k = this.a4j(h))) h[1] = h2;
			else
				for (var iR = 0; a4k++ < h2;) h[iR = (iR + 1) % fZ] && h[iR]++
		}
	}, this.a4z = function(h) {
		if (!h) return 0;
		var fZ = h.length;
		if (0 === fZ) return 0;
		for (var g1 = h[fZ - 1], aC = fZ - 2; 0 <= aC; aC--)
			if (h[aC] !== g1) return aC + 2;
		return 1
	}, this.a50 = function(h) {
		for (var a4k = 0, aC = 0; aC < h.length; aC++) a4k += h[aC].length;
		return a4k
	}, this.a51 = function(a52) {
		for (var h = [], aC = 0; aC < a52.length; aC++) h = h.concat(a52[aC]);
		return h
	}, this.has = function(h, g1) {
		for (var fZ = h.length, aC = 0; aC < fZ; aC++)
			if (h[aC] === g1) return !0;
		return !1
	}
}

function a4Y() {
	this.a10 = function(a53, eI, a54) {
		var iV = a53.height,
			a55 = bD.sK.yf(iV, iV),
			ib = bD.sK.getContext(a55);
		return function(j, ib, a54) {
			ib.fillStyle = a54, ib.beginPath(), ib.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), ib.fill()
		}(iV, ib, a54), ib.drawImage(a53, -eI * iV, 0), a55
	}, this.a57 = function(a58) {
		var ib, iY, iV = a58.height;
		return a58.width === iV && (iY = (ib = bD.sK.getContext(a58, !0)).getImageData(0, 0, iV, iV), bD.or.a59(iY.data, iV, iV, .9), ib.putImageData(iY, 0, 0)), a58
	}
}

function a4Z() {
	this.a5A = function(g1) {
		return [g1 >> 12 & 63, g1 >> 6 & 63, 63 & g1]
	}, this.a5B = function(g1) {
		for (var h = this.a5A(g1), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a5C = function(g1) {
		g1 = this.a5B(g1);
		return bD.color.pG(g1[0], g1[1], g1[2])
	}, this.a5D = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.pG = function(eH, uw, ft) {
		return "rgb(" + eH + "," + uw + "," + ft + ")"
	}, this.pI = function(eH, uw, ft, fs) {
		return "rgba(" + eH + "," + uw + "," + ft + "," + fs.toFixed(3) + ")"
	}, this.so = function(ej) {
		for (var h = ej.split("(")[1].split(","), g8 = bR.g8, aC = 0; aC < 3; aC++) g8[aC] = parseInt(h[aC]);
		return 4 === h.length ? g8[3] = 255 * parseFloat(h[3].slice(0, -1)) : g8[3] = 255, g8
	}, this.sp = function(a5E, fc) {
		for (var h = a5E.slice(a5E.indexOf("(") + 1, a5E.indexOf(")")).split(","), g8 = bR.g8, aC = 0; aC < 3; aC++) g8[aC] = bO.ij(parseInt(h[aC].trim(), 10) + fc, 0, 255);
		return 3 === h.length ? this.pG(g8[0], g8[1], g8[2]) : (a5E = parseFloat(h[3].trim()), this.pI(g8[0], g8[1], g8[2], a5E = 0 === a5E ? .3 : a5E))
	}, this.wX = function(a5F, a5G) {
		for (var k9 = 0, aC = 0; aC < 3; aC++) k9 += Math.abs(a5G[aC] - a5F[aC]);
		if (!(240 <= k9))
			for (aC = 0; aC < 3; aC++) a5G[aC] = a5F[aC] + (a5F[aC] < 128 ? 80 : -80)
	}, this.a5H = function(h) {
		for (var s1 = "#", aC = 0; aC < 3; aC++) {
			var eH = h[aC].toString(16);
			s1 += 1 === eH.length ? "0" + eH : eH
		}
		return s1
	}, this.a5I = function(s1) {
		var eH, uw;
		return s1.length < 7 ? bE.pF : (eH = parseInt(s1.slice(1, 3), 16), uw = parseInt(s1.slice(3, 5), 16), s1 = parseInt(s1.slice(5, 7), 16), this.pG(eH, uw, s1))
	}
}

function a4W() {
	this.a5J = function(s1, font, maxWidth) {
		if (font && (ws.font = font), ws.measureText(s1).width <= maxWidth) return s1;
		for (var aC = s1.length - 1; 1 <= aC; aC--)
			if (s1 = s1.substring(0, aC), ws.measureText(s1 + "...").width <= maxWidth) return s1 + "...";
		return "..."
	}
}

function a4b() {
	var a5L = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a5M = function(eZ) {
		var a5O, s1 = new Date(eZ.getTime() - 6e4 * eZ.getTimezoneOffset()).toUTCString();
		return s1.length < 12 || (s1 = s1.substring(5, s1.length), 0 === (eZ = eZ.getTimezoneOffset())) ? s1 : (a5O = (eZ < 0 ? "+" : "-") + bO.g0(Math.abs(eZ), 60), 0 == (eZ = Math.abs(eZ) % 60) ? s1 + a5O : s1 + a5O + ":" + (eZ < 10 ? "0" :
			"") + eZ)
	}, this.a5P = function(eZ) {
		var s1 = eZ.toUTCString();
		return s1.length < 12 ? s1 : function(eZ) {
			return a5L[eZ.getUTCDay()]
		}(eZ) + ", " + s1.substring(5, s1.length - 4)
	}
}

function a4S() {
	var a5R = null;
	this.a1H = 0, this.xv = function() {
		var g1 = bm.buffer.data[5].value;
		a5R = "px " + g1, "system-ui" !== g1 && (a5R += ", system-ui"), this.a1H = iU(32, 32, ["a", "b", "m"], 200, a5R)
	}, this.yf = function(j, k) {
		var ej = document.createElement("canvas");
		return ej.width = j, ej.height = k, ej
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(ou, j, k) {
		return ou.getImageData(0, 0, j, k)
	}, this.u8 = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a5R : 1 === type ? "bold " + size + a5R : 2 === type ? "lighter " + size + a5R : 3 === type ? "italic " + size + a5R : 4 === type ? "oblique " + size + a5R : 5 === type ? "small-caps " +
			size + a5R : "small-caps bold " + size + a5R
	}, this.textAlign = function(ib, id) {
		ib.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(ib, id) {
		ib.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.sU = function(e, code, color) {
		color = this.sT(bf.uA) + " solid " + (color || bE.pO);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.uy = function(e, fg, fi, j, k) {
		e = e.style;
		e.left = this.uz(fg), e.top = this.uz(fi), e.width = this.uz(j), e.height = this.uz(k)
	}, this.sL = function(g1) {
		return 1 + g1 * a1.a2.ik()
	}, this.tb = function(o7, h8) {
		return o7 * this.sL(void 0 === h8 ? .5 : h8) * i.il / i.l
	}, this.ux = function(o7, h8) {
		return o7 * this.sL(void 0 === h8 ? .5 : h8) * i.il
	}, this.ue = function(o7, h8, a5S) {
		return this.sL(h8) * Math.min(o7 * i.il, a5S * i.j) / i.l
	}, this.sT = function(g1) {
		return g1.toFixed(1) + "px"
	}, this.uz = function(g1) {
		return this.wJ(g1).toFixed(1) + "px"
	}, this.wJ = function(g1) {
		return g1 / i.l
	}, this.a5U = function(a5V) {
		for (var s1 = "<ul>", fZ = a5V.length, aC = 0; aC < fZ; aC++) s1 += "<li>" + a5V[aC][0] + ": <a href='" + a5V[aC][1] + "' target='_blank'>" + a5V[aC][0] + "</a></li>";
		return s1 += "</ul>"
	}, this.a5W = function(a5X) {
		return "<a href='" + a5X + "' target='_blank'>" + a5X + "</a>"
	}, this.a5Y = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.wV = function(e) {
		var ea = e.textContent;
		bD.tI.a5Z(ea, "✔") || (1 === ea.length ? e.textContent = "✔" : e.textContent = ea + " ✔", setTimeout(function() {
			e.textContent = ea
		}, 500))
	}, this.measureText = function(s1) {
		return ws.measureText(s1).width
	}, this.uo = function(oj) {
		oj.style.overflowX = "auto", oj.style.overflowY = "hidden", oj.style.whiteSpace = "nowrap", oj.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.v1 = this.scrollLeft, e.preventDefault())
		}), oj.addEventListener("scroll", function() {
			this.v1 = this.scrollLeft
		})
	}
}

function a4U() {
	this.hk = function(a3J) {
		return 0 === a3J ? 1 === aE.a2G && aE.hx : 1 === a3J ? 1 === aE.a2G && !aE.hx : 2 === aE.a2G
	}, this.hl = function(player) {
		return 0 !== ah.nU[player] && 2 !== ah.a5a[player]
	}, this.a5b = function(player) {
		return player === aE.fJ && 2 !== ah.a5a[player]
	}, this.lY = function(player, k3) {
		return player !== k3 && (0 === bj.fX[player] || bj.fX[player] !== bj.fX[k3])
	}, this.mf = function() {
		return am.lQ < 2 ? 0 : aE.iT ? 1 < bk.a5c() : ah.hN[mV[1]]
	}, this.a5d = function() {
		var lQ = am.lQ;
		if (0 !== lQ) {
			if (!aE.iT) return !this.kH(mV[0]);
			for (var fX = bj.fX, lS = bk.lT(), lV = am.lV, aC = lQ - 1; 0 <= aC; aC--) {
				var h7 = lV[aC];
				if (fX[h7] === lS && !this.kH(h7)) return 1
			}
		}
		return 0
	}, this.a5e = function(player) {
		return player === aE.fJ
	}, this.a5f = function(k3, o7) {
		return ah.hb[aE.fJ] < o7 * ah.hb[k3]
	}, this.kH = function(player) {
		return player >= aE.ku || 2 === ah.a5a[player]
	}, this.ls = function(player) {
		return 0 !== ah.nU[player]
	}, this.a26 = function(player) {
		return player < aE.ku
	}, this.rh = function(a5g, a5h) {
		return a5g !== a5h
	}, this.gy = function(player, g1) {
		var min;
		return g1 = this.a5i(player, g1), ah.hb[player] += g1, ah.a5j[player] && (min = Math.min(ah.a5j[player], ah.hb[player]), ah.a5j[player] -= min, ah.hb[player] -= min), g1
	}, this.a5i = function(player, g1) {
		var a5k = ah.hb[player];
		return g1 = Math.min(g1, ah.hN[player] * aE.a5l - a5k), g1 = Math.min(g1, aE.a5m - a5k), Math.max(g1, 0)
	}, this.n2 = function(player, jC, a5n, a5o) {
		var a5k = ah.hb[player],
			jC = bO.g0(a5k * (jC + 1), 1024),
			a5n = bO.g0(a5n * a5k, 1024),
			jC = Math.min(jC, a5k - a5n);
		return jC = b5.a5q(player, jC), bR.g6[0] = jC, bR.g6[1] = a5n, a5o <= jC
	}, this.rB = function(player, qt, qs) {
		var player = ah.hb[player],
			a5p = bO.g0(64 * player, 1024);
		return qt = Math.min(qt, player - a5p), qt = this.a5i(qs, qt), bR.g6[0] = qt, bR.g6[1] = a5p, 1 <= qt
	}, this.a5r = function(player, qt, qs) {
		var player = ah.hb[player],
			a5p = bO.g0(64 * player, 1024);
		return qt = Math.min(qt, player - a5p), this.a5i(qs, qt)
	}, this.rD = function(qt, qs) {
		return qt = this.a5i(qs, qt), bR.g6[0] = qt, bR.g6[1] = 0, 1 <= qt
	}, this.jB = function(player, a5s) {
		return bO.g0(ah.hb[player] * (a5s + 1), 1024)
	}, this.a5t = function(player, a5n) {
		a5n = bO.g0(a5n * ah.hb[player], 1024);
		bR.g6[1] = a5n, ah.hb[player] -= a5n
	}, this.gw = function(player, a5u) {
		var gK, gM, ft = ah.hb[player];
		return a5u <= ft ? ah.hb[player] -= a5u : (ah.hb[player] = 0, gM = ah.a5j[player] + (gK = 5 * ((ft = a5u - ft) >> 2)), bg.gz(player, gK - ft, 12), gM <= aE.a5v ? ah.a5j[player] = gM : (ah.a5j[player] = aE.a5v, bg.gz(player, gM - aE.a5v,
			18))), a5u
	}, this.m6 = function(player, jC) {
		var hb = ah.hb,
			a5k = hb[player],
			jC = bO.g0(a5k * (jC + 1), 1024),
			a5p = Math.max(bO.g0(a5k, 10), 1e3);
		return (jC = Math.min(jC, a5k - a5p)) < 0 ? (hb[player] = 0, a5p = Math.min(1e3, a5k + aE.a5v - ah.a5j[player]), bR.g6[1] = a5p, ah.a5j[player] += a5p - a5k, 0) : (bR.g6[1] = a5p, jC = b5.a5q(player, jC), hb[player] -= a5p + jC, b5.a5w(
			player, jC), jC)
	}, this.n4 = function(player) {
		var iI = bR.g6[0];
		ah.hb[player] -= iI + bR.g6[1], b5.a5w(player, iI)
	}, this.ri = function(player, k3) {
		return (k3 = Math.min(k3, aE.fW)) < aE.fW && 0 === ah.nU[k3] && (k3 = aE.fW), (bR.fV[0] = k3) === aE.fW || bv.fS(player, k3)
	}, this.rl = function(player, qs) {
		return 0 !== ah.nU[qs] && !bv.fS(player, qs)
	}, this.a5x = function(player, a5y) {
		for (var h7, fZ = am.lQ, a5z = 0, a60 = mV, aC = 0; aC < fZ; aC++)
			if (h7 = a60[aC], !this.kH(h7)) {
				if (player === h7) return !0;
				if (++a5z > a5y) return !1
			} return !1
	}, this.mR = function(h7) {
		var a61 = aE.iT ? bk.lR() : ah.hN[mV[0]];
		return a61 >= bO.g0(h7 * aE.ke, 100)
	}, this.a62 = function(g1, min, max) {
		return Math.floor(bO.ij(isNaN(g1) ? 0 : Number(g1), min, max))
	}
}

function a4X() {
	this.a63 = function(canvas, a64, a65) {
		var j = canvas.width,
			k = canvas.height,
			ej = bD.sK.yf(j, k),
			ib = bD.sK.getContext(ej, !0),
			canvas = (ib.drawImage(canvas, 0, 0), ib.getImageData(0, 0, j, k));
		return a64(canvas.data, j, k, a65), ib.putImageData(canvas, 0, 0), ej
	}, this.a66 = function(yq, j, k) {
		for (var fg = j - 1; 0 <= fg; fg--)
			for (var fi = k - 1; 0 <= fi; fi--) {
				var aC = 4 * (fg + fi * j);
				yq[3 + aC] = yq[aC], yq[aC] = yq[1 + aC] = yq[2 + aC] = 255
			}
	}, this.a67 = function(yq, j, k) {
		for (var fg = j - 1; 0 <= fg; fg--)
			for (var fi = k - 1; 0 <= fi; fi--) {
				var aC = 4 * (fg + fi * j);
				yq[1 + aC] > yq[2 + aC] + 10 && (yq[3 + aC] = yq[aC], yq[1 + aC] = yq[2 + aC])
			}
	}, this.a68 = function(yq, j, k, a65) {
		for (var gap = Math.floor(Math.min(j, k) * a65), fg = 0; fg < j; fg++)
			for (var aC, fi = 0; fi < k; fi++)(fg < gap || fi < gap || j - gap <= fg || k - gap <= fi) && (yq[3 + (aC = 4 * (fg + fi * j))] = 255 - 255 * (yq[1 + aC] - yq[aC]) / (255 - yq[aC]))
	}, this.a69 = function(yq, j, k, a65) {
		for (var fg = j - 1; 0 <= fg; fg--)
			for (var fi = k - 1; 0 <= fi; fi--) {
				var aC = 4 * (fg + fi * j);
				yq[aC] = a65[0], yq[1 + aC] = a65[1], yq[2 + aC] = a65[2]
			}
	}, this.a6A = function(yq, j, k, a65) {
		for (var gap = Math.floor(j * a65), fg = 0; fg < j; fg++)
			for (var aC, fi = 0; fi < k; fi++)(fg < gap || fi < gap || j - gap <= fg || k - gap <= fi) && (yq[aC = 4 * (fg + fi * j)] = yq[1 + aC] = yq[2 + aC] = 0)
	}, this.a6B = function(yq, j, k) {
		for (var fi, aC, fg = j - 1; 0 <= fg; fg--)
			for (fi = k - 1; 0 <= fi; fi--) 200 < yq[1 + (aC = 4 * (fg + fi * j))] && yq[1 + aC] - 20 > yq[aC] && yq[1 + aC] - 20 > yq[2 + aC] ? yq[aC] + yq[2 + aC] < 40 ? yq[3 + aC] = 0 : (yq[3 + aC] = yq[aC], yq[aC] = 255, yq[1 + aC] = 255, yq[
				2 + aC] = 255) : yq[aC] < 50 && yq[1 + aC] < 50 && yq[2 + aC] < 50 && (yq[aC] + yq[1 + aC] + yq[2 + aC] < 50 ? yq[3 + aC] = 180 : yq[3 + aC] = 180 + Math.floor(75 * (yq[aC] + yq[1 + aC] + yq[2 + aC] - 50) / 100))
	}, this.a6C = function(yq, j, k) {
		for (var fi, aC, fg = j - 1; 0 <= fg; fg--)
			for (fi = k - 1; 0 <= fi; fi--) yq[1 + (aC = 4 * (fg + fi * j))] > yq[aC] + 20 && yq[1 + aC] > yq[2 + aC] + 20 && yq[aC] + yq[2] < 40 && (yq[3 + aC] = 255 - yq[1 + aC], yq[aC] = yq[1 + aC] = yq[2 + aC] = yq[aC])
	}, this.a59 = function(yq, j, k, a65) {
		for (var eH = j >> 1, fg = 0; fg < j; fg++)
			for (var fi = 0; fi < k; fi++) Math.sqrt((fg - eH) * (fg - eH) + (fi - eH) * (fi - eH)) > a65 * eH && (yq[4 * (fg + fi * j) + 3] = 0)
	}
}

function a4V() {
	var a6D = {
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
		a6E = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.tJ = function(el) {
		return el.replace(a6E, function(match) {
			return a6D[match] || match
		})
	}, this.a1X = function(g1) {
		var aC, a6F, a6G, a6H, a6I;
		if (g1 < 0) return "-" + this.a1X(Math.abs(g1));
		if (g1 < 1e3) return g1.toString();
		for (a6F = Math.floor(Math.log(g1 + .5) / Math.log(10)) + 1, a6G = Math.floor((a6F - 1) / 3), a6I = (a6H = g1.toString()).substring(a6F - 3, a6F), aC = 1; aC < a6G; aC++) a6I = a6H.substring(a6F - 3 * (aC + 1), a6F - 3 * aC) + " " + a6I;
		return a6H.substring(0, a6F - 3 * a6G) + " " + a6I
	}, this.a6J = function(h7, a6F) {
		return h7.toFixed(a6F) + "%"
	}, this.a6K = function(g1, a6L) {
		return g1.toFixed(bO.ij(Math.floor((void 0 === a6L ? 3 : a6L) - Math.log10(Math.max(g1, 1))), 0, 8))
	}, this.a6M = function(g1, o7, a6F) {
		return (g1 * o7).toFixed(a6F)
	}, this.a2z = function(username) {
		var fd, fO = username.indexOf("[");
		return !(fO < 0) && 1 < (fd = username.indexOf("]")) - fO && fd - fO <= 8 ? username.substring(fO + 1, fd).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a2z;
	this.a6N = function(s1) {
		for (var fs = Math.floor(.5 * s1.length + .5), oD = Math.floor(.5 * (fs - 1)), aC = 0; aC < oD; aC++)
			for (var ft = -1; ft < 2; ft += 2) {
				var ej = fs + ft * aC;
				if (" " === s1[ej]) return [this.a2v(s1.substring(0, ej)), this.a6O(s1.substring(ej))]
			}
		return [s1.substring(0, fs), s1.substring(fs)]
	}, this.a6O = function(s1) {
		for (var fZ = s1.length, aC = 0; aC < fZ; aC++)
			if (" " !== s1[aC]) return s1.substring(aC);
		return s1
	}, this.a2v = function(s1) {
		for (var aC = s1.length - 1; 0 <= aC; aC--)
			if (" " !== s1[aC]) return s1.substring(0, aC + 1);
		return s1
	}, this.a6P = function(s1, a6Q) {
		return s1.split("(")[0] + "(🧈 " + a6Q.toFixed(2) + ")"
	}, this.startsWith = function(s1, a6R) {
		return s1.substring(0, a6R.length) === a6R
	}, this.a5Z = function(s1, a6R) {
		var fZ = s1.length;
		return s1.substring(fZ - a6R.length, fZ) === a6R
	}, this.a6S = function(h, a6T, a6U) {
		var s1 = "",
			fZ = h.length - 1;
		a6U = a6U || "";
		for (var aC = 0; aC < fZ; aC++) s1 += a6U + h[aC] + a6U + ",", (aC + 1) % a6T == 0 && (s1 += "\n");
		return s1 += a6U + h[fZ] + a6U
	}, this.a6V = function(s1, a1M, a1N) {
		return s1.replace(new RegExp(a1M, "g"), a1N)
	}
}

function a6W() {
	this.ei = function(player, fL) {
		aJ.a0A(player, bP.fh(fL), bP.fj(fL)) && (bi.ds = !0), aE.lE && this.ee()
	}, this.ee = function() {
		aE.hx = !1;
		for (var aC = 0; aC < aE.ku; aC++) 0 !== ah.nU[aC] && 0 === ah.hN[aC] && aJ.a0H(aC);
		0 !== ah.nU[aE.fJ] ? (bg.nQ[7] = ah.hN[aE.fJ], bg.nQ[8] = ah.hb[aE.fJ], aS.a6X(), aX.a6Y(), aE.hi || aI.np(ah.jS[aE.fJ] - 5, ah.jU[aE.fJ] - 5, ah.jT[aE.fJ] + 5, ah.jV[aE.fJ] + 5), aw.dk()) : aY.show(!1, !1, !1, !0), aO.a6Z(18), ag.a6a(),
			ag.nG(!0), bS.z.a6b(), aM.tZ(), aE.rg = null, be.a6c = !0, be.a6d(), aE.lE && a1.a2.setState(1)
	}
}

function c5() {
	this.fW = 512, this.a5m = 15e8, this.a6e = 1e9, this.a5v = 5e4, this.a6f = 512, this.gt = 2, this.fJ = 0, this.ku = 0, this.a2J = 0, this.lG = 0, this.a2I = 0, this.zL = 512, this.zQ = 512, this.a5l = 150, this.lE = !0, this.hi = 0, this.a2G = 0,
		this.ke = 0, this.ny = !1, this.hx = 0, this.a6g = 0, this.iT = !1, this.zS = 0, this.zT = 0, this.lC = 0, this.a0h = 0, this.rg = null, this.a2Z = new a0V, this.a6h = 30, this.a2D = 0, this.a2L = 0, this.a2Y = 0, this.a28 = 0, this.data =
		new a6i, this.a6j = new a6k, this.a6l = 0, this.a6m = "", this.a6n = function() {
			bX.turnstile.close(), bR.dk(), bU.dk(), bt.clear(), this.a2J = this.ku = this.data.humanCount, this.lE = 1 === this.a2J && !__fx.customLobby.isActive(), this.ny = !1, this.hi = this.data.isReplay, this.lC = 0 === this.data.gameMode ? [7,
					10, 8
				][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a0h = this.data.isContest, this.iT = this.lC < 7 || 9 === this.lC, this.lC = 10 === this.lC && this.lE ? 7 : this.lC, this.lC = 8 === this
				.lC && 2 !== this.ku ? 7 : this.lC, b0.dk(), this.zS = this.data.numberTeams, this.data.teamPlayerCount ? this.zT = +(0 < this.data.teamPlayerCount[0]) : (this.zT = 0, this.iT && this.lE && (this.data.teamPlayerCount =
					new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.zS + 1), aE.a6j.a6o())), this.a6h = this.ku <= 2 ? 30 : this.ku <= 50 ? 40 : 50, this.a6g = this.hx = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo
				.spawnSelection : this.data.selectableSpawn, this.rg = this.hx ? new a6W : null, this.zL = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.ku) : 1 === m.dw ? this.zL =
				this.ku : this.zL = this.data.playerCount,
				this.zQ = this.zL, this.lG = this.zL - this.ku, this.a2I = 0, this.fJ = this.data.selectedPlayer, this.a2D = 0, this.a2L = 0, this.a2Y = 0, this.a28 = 0, az.a6p(this.data.spawningSeed), af.dk(), ah.dk(), ao.dk(), aj.a6q(), bB.qi
				.rU = [], bB.hz.ql = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.dk(), this.a2G = 1, bg.dk(), a6r(), ad.dl(), aq.a6s(), be.dk(), ad.dk(), au.dk(),
				bP.dk(), bQ.dk(), ap.dk(), bY.a6t(), aF.dk(), aj.a8(), aJ.dk(), aK.dk(), am.a6u(), bC.dk(), bk.dk(), bS.dk(), bh.dk(), a6v.putImageData(a6w, 0, 0), aW.dk(), aT.dk(), aS.dk(), bF.dk(), ax.dk(), aV.dk(), aX.dk(), aN.dk(), aR.dk(), aO
				.dk(), aQ.dk(), aM.dk(), aY.dk(), aG.dk(), aH.dk(), gc(), ae.dk(), ag.dk(), b5.dk(), b6.dk(), b2.dk(), b8.dk(), b9.dk(), this.a2Z.dk(), bi.a6t(), aI.no(), 0 === ah.nU[aE.fJ] && aY.show(!1, !0), ag.nG(!0), aw.dk(), bi.ds = !0, this
				.hi || this.lE && this.hx || a1.a2.setState(1), this.a6l = 0
		}, this.a3d = function(eY) {
			bC.re.a6y.length ? this.a6m = bC.re.a6y : this.a6m = bC.a6z.a1i(), __fx.replayHistory.save(this.a6m), !1 === __fx.customLobby.isActive() && b1.z.a70(), bt.clear(), this.a2G = 0, bi.a71(), a1.a2.setState(0), ab.setState(0), __fx
				.customLobby.isActive() || bX.eQ.show(eY), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a6l ? u.z.a72(0) : 1 === this.a6l ? u.v(19) : u.v(5, 5)
		}, this.a73 = function() {
			return this.hi ? aN.hj || !bF.a74 : this.lE && (aN.hj || this.hx)
		}, this.a75 = function() {
			return 1 === this.a2G && !this.hx
		}
}

function a6i() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a76 = null
}

function a6k() {
	this.a6o = function() {
		var a77 = aE.data;
		bD.sS.a4y(a77.teamPlayerCount, a77.playerCount), a77.numberTeams = bD.sS.a4p(a77.teamPlayerCount, 0), a77.teamPlayerCount[0] && a77.teamPlayerCount[7] && (a77.teamPlayerCount[7] = 0, this.a6o())
	}, this.a78 = function() {
		var a77 = aE.data;
		a77.mapType < 2 ? bV.a8(bV.a79(a77), a77.mapSeed) : bV.a7A(a77.canvas)
	}, this.a7B = function() {
		var a77 = aE.data;
		a77.colorsData || (a77.colorsData = new Uint32Array(1)), 0 === a77.gameMode && (a77.colorsData[0] = bm.z.xt()), a77.selectableName && (a77.playerNamesData || (a77.playerNamesData = new Array(1)), a77.playerNamesData[0] = bm.buffer.data[
			122].value), a77.a76 = new Uint32Array(1), a77.a76[0] = bJ.f0.f1(bm.buffer.data[105].value, 5)
	}, this.a7C = function() {
		aE.data = new a6i
	}
}

function df() {
	var a7D = [];
	this.rE = function(player, qs, a7E, a7F) {
		player === aE.fJ || qs === aE.fJ || !a7F && bD.gv.kH(player) || bD.gv.kH(qs) || this.a0i(ah.a0j[player] + " supported " + ah.a0j[qs] + " with " + bD.tI.a1X(a7E) + " ressource" + (1 === a7E ? "." : "s."))
	}, this.a0i = function(s1, r3) {
		s1 = {
			eZ: aX.a7H(),
			s1: s1,
			r3: r3
		};
		a7D.push(s1), 30 === u.ua && u.a3T().a0i(s1)
	}, this.clear = function() {
		a7D = [];
		var uw = u.a7I(30);
		uw && uw.clear()
	}, this.a7J = function() {
		return a7D
	}
}

function dZ() {
	this.a1E = 0, this.gap = 0, this.uA = 0, this.sQ = 0, this.dk = function() {
		this.resize()
	}, this.resize = function() {
		this.a1E = .0022 * bD.sK.sL(.5) * i.il, this.uA = this.a1E / i.l, this.gap = Math.max(Math.floor((a1.a2.ik() ? .0114 : .01296) * i.il), 2), this.sQ = this.gap / i.l
	}
}

function dY() {
	this.a7K = function() {
		return a1.a2.ik() ? 2 : 1
	}
}

function cG() {
	var oy, fg, fi, a7L, a7M, a7N, eZ, a7O, a7P, a7Q, a7R, gap, zoom, rN, a7S;

	function a7g(m9, mA, fD) {
		ad.fU(fD) || -1 === (m9 = bQ.lj.a7p(m9, mA)) ? aO.a7o(fD) : aO.a7q(m9)
	}

	function a7c(a7O) {
		for (var aC = rN.length - 1; 0 <= aC; aC--)
			if (rN[aC] === a7O) return 1
	}

	function a7a(a7X) {
		var aC, fZ;
		if (-1 !== a7X)
			for (fZ = oy.length, aC = 0; aC < fZ; aC++)
				if (oy[aC].iL && oy[aC].fg + 1 === a7X % 4 && oy[aC].fi + 1 === a7X >> 2) return aC;
		return -1
	}

	function a7Y(m9, mA) {
		var uw = gap / 2;
		return m9 < fg - a7L - 3 * uw || fg + 3 * a7L + 5 * uw < m9 || mA < fi - a7L - 3 * uw || fi + 2 * a7L + 3 * uw < mA ? -1 : 4 * (mA < fi - uw ? 0 : mA < fi + a7L + uw ? 1 : 2) + (m9 < fg - uw ? 0 : m9 < fg + a7L + uw ? 1 : m9 < fg + 2 * a7L +
			3 * uw ? 2 : 3)
	}
	this.a7T = function() {
		var aC, ft, a7W = [bE.po, bE.q2, bE.pM, bE.qP, bE.qF];
		for (oy = new Array(10), aC = 0; aC < 10; aC++) oy[aC] = {
			id: aC,
			iL: !1,
			lr: 0,
			canvas: [],
			fg: 0,
			fi: 0
		};
		for (oy[0].colors = [0, 1, 2, 3], oy[0].fg = 0, oy[0].fi = 0, oy[1].colors = [1, 4], oy[1].fg = 1, oy[1].fi = 0, oy[2].colors = [0, 1], oy[2].fg = -1, oy[2].fi = 0, oy[3].colors = [0], oy[3].fg = 0, oy[3].fi = 0, oy[4].colors = [0, 2],
			oy[4].fg = 1, oy[4].fi = 1, oy[5].colors = [3], oy[5].fg = 0, oy[5].fi = -1, oy[6].id = 20, oy[6].colors = [0], oy[6].fg = 1, oy[6].fi = -1, oy[7].id = 21, oy[7].colors = [0], oy[7].fg = 0, oy[7].fi = 1, oy[8].id = 16, oy[8]
			.colors = [0], oy[8].fg = 0, oy[8].fi = 0, oy[9].id = 10, oy[9].colors = [4], oy[9].fg = 2, oy[9].fi = 0, aC = 0; aC < 10; aC++)
			for (ft = 0; ft < oy[aC].colors.length; ft++) oy[aC].canvas.push(function(id, a54) {
				if (id < 20) return bD.canvas.a10(ac.get(3), id, a54);
				var a54 = ac.get(3).height,
					a55 = bD.sK.yf(a54, a54),
					ib = bD.sK.getContext(a55);
				20 === id ? ib.drawImage(ac.get(18), 0, 0) : 21 === id && ak.yq.a1F(ak.tY.a14 + ak.tY.a1L, ib, 0, 0, a54);
				return a55
			}(oy[aC].id, a7W[oy[aC].colors[ft]]))
	}, this.a7V = function() {
		return oy
	}, this.dk = function() {
		rN = [], fg = fi = eZ = 0, a7M = a7N = -1e3, this.resize()
	}, this.resize = function() {
		a7L = Math.floor((a1.a2.ik() ? .075 : .0468) * i.il), zoom = a7L / ac.get(3).height, gap = Math.floor(a7L / 3)
	}, this.a46 = function(m9, mA) {
		return !!this.iL() && (bi.ds = !0, !!ak.yq.hm(m9, mA, a7P) || (m9 = function(m9, mA) {
			a7N = a7M = -1e3;
			var a7Z = a7a(a7Y(m9, mA));
			if (-1 === a7Z) return 0;
			if (1 !== oy[a7Z].colors[oy[a7Z].lr])
				if (5 === a7Z) {
					if (! function() {
							var ea = performance.now();
							a7S + 4e3 < ea && (rN = []);
							a7S = ea
						}(), a7c(a7O)) return 1;
					rN.push(a7O), 16 < rN.length && rN.shift()
				} else if (6 === a7Z) {
				for (var aC = rN.length - 1; 0 <= aC; aC--) 0 === ah.nU[rN[aC]] && rN.splice(aC, 1);
				0 < rN.length && (b6.a7d(1, rN, !0) && bB.gv.rM(rN, a7O), rN = [])
			} else if (2 === a7Z) ao.iD(a7O) && bB.hz.qr(aS.i3(), a7O);
			else if (3 === a7Z) aE.hx && bB.hz.i0(a7Q);
			else if (0 === a7Z)
				if (0 === oy[0].lr) {
					if (aE.a6g && aX.a7H() < 350) return 1;
					bY.a7e(4), bB.hz.i6(aS.i3(), a7O)
				} else b2.i7(a7O, aS.i3());
			else if (1 === a7Z) bB.hz.iB(aS.i3(), a7Q);
			else if (9 === a7Z) bB.hz.iE(aS.i3());
			else {
				if (7 === a7Z) return bY.a7e(0), ak.yq.show(m9, mA), 2;
				if (4 === a7Z) b6.a7d(0, [a7O], !0) && bB.gv.rJ(a7O);
				else {
					if (8 !== a7Z) return 0;
					bB.hz.i2(aS.i3(), a7R, a7O)
				}
			}
			return 1
		}(m9, mA), this.tZ(), 2 === m9 && (ak.yq.iL = !0), 0 < m9))
	}, this.a48 = function(m9, mA) {
		this.iL() || (a7M = m9, a7N = mA, eZ = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.hp(mouseX),
			coordY = bP.hr(mouseY),
			point = bP.fP(bP.fw(coordX, coordY));
		bP.hs(coordX, coordY) && a7g(mouseX, mouseY, point)
	}, this.click = function(m9, mA, a4F) {
		var ho = bP.hp(m9),
			hq = bP.hr(mA),
			fL = bP.fw(ho, hq),
			fD = bP.fP(fL),
			a7f = (a1.a2.ik() ? .025 : .0144) * i.il,
			ea = performance.now();
		return !(Math.abs(m9 - a7M) > a7f || Math.abs(mA - a7N) > a7f || eZ + 500 < ea || (eZ = ea, bM.sm() && (bM.he = m9, bM.hf = mA, b8.ee(1), b9.ee(1)), !bP.hs(ho, hq))) && (a4F ? (a7g(m9, mA, fD), !1) : aN.hj || this.iL() || !bD.gv.hl(aE
			.fJ) || aE.hi ? (this.tZ(), !1) : (aE.hx ? 0 <= (a7Q = bu.hy(fL)) && (oy[3].iL = !0) : 2 === aE.a2G ? ad.h9(fD) && (a7O = ad.fR(fD), bD.gv.kH(a7O) || (oy[0].iL = !0, oy[0].lr = 1, oy[7].iL = !0)) : (bQ.iC.iD(aE.fJ, fL) && (oy[0]
					.iL = !0, oy[0].lr = 1, oy[1].iL = !0, oy[1].lr = 0, oy[9].iL = !0, oy[9].lr = 0), bQ.i9.iA(aE.fJ, fL) && (oy[0].iL = !0, oy[0].lr = 1, oy[1].iL = !0, oy[1].lr = 1, a7Q = bR.gB[7]), ad.fe(fD) ? (a7R = an.fA.fC(fD)) &&
				(a7f = bP.fP(a7R), oy[8].iL = !0, a7O = ad.fQ(a7f) ? aE.fW : ad.fR(a7f)) : (ad.a0F(aE.fJ, fD) && (a7P = aE.fJ, oy[0].iL = !0, oy[0].lr = 1, oy[7].iL = !0), -1 !== (ea = bu.i4(fL)) && (ad.fQ(ea << 2) ? (a7O = aE.fW, bv.i5(
					aE.fJ) ? (oy[0].iL = !0, oy[0].lr = 0) : ae.gg(aE.fJ) && (oy[0].iL = !0, oy[0].lr = 3)) : (a7O = ad.fR(ea << 2), oy[0].lr = 1, oy[5].iL = function(a7O) {
					return !bD.gv.kH(a7O) && !a7c(a7O) && b6.a7d(1, [a7O], !1)
				}(a7O), oy[7].iL || bD.gv.kH(a7O) || (a7P = a7O, oy[7].iL = !0), oy[4].iL = !bD.gv.kH(a7O) && !ag.a7k(a7O) && b6.a7d(0, [a7O], !1), oy[6].iL = function(a7O) {
					if (0 === rN.length) return !1;
					if (performance.now() > a7S + 4e3) return !(rN = []);
					return !a7c(a7O) && ! function(a7O) {
						var aC;
						if (aE.iT)
							for (aC = rN.length - 1; 0 <= aC; aC--)
								if (!bv.fS(a7O, rN[aC])) return 1;
						return
					}(a7O)
				}(a7O), bv.fS(a7O, aE.fJ) ? (bv.i8(aE.fJ, a7O) ? (oy[0].lr = 0, oy[0].iL = !0) : ae.gg(aE.fJ) && (oy[0].lr = 3, oy[0].iL = !0), oy[0].iL = this.a7m()) : (oy[2].iL = !0, ao.iD(a7O) ? oy[2].lr = 0 : oy[2].lr = 1,
					oy[0].iL = !0))))), this.a7h(m9, mA)))
	}, this.a7h = function(m9, mA) {
		return fg = m9 - Math.floor(a7L / 2), fi = mA - Math.floor(a7L / 2), !!this.iL()
	}, this.a3m = function(m9, mA) {
		return !!this.iL() && (ak.yq.iL ? !ak.yq.a1D(m9, mA) && (ak.yq.iL = !1, bi.ds = !0) : function(tt, m9, mA) {
			m9 = a7Y(m9, mA);
			if (0 <= a7a(m9)) return !1;
			if ((1 === m9 || 6 === m9) && 0 <= a7a(2)) return !1;
			if ((6 === m9 || 9 === m9) && 0 <= a7a(10)) return !1;
			return tt.tZ(), bi.ds = !0
		}(this, m9, mA))
	}, this.tZ = function() {
		for (var aC = oy.length - 1; 0 <= aC; aC--) oy[aC].iL = !1, oy[aC].lr = 0;
		ak.yq.iL = !1
	}, this.iL = function() {
		return this.a7m() || ak.yq.iL
	}, this.a7m = function() {
		for (var fZ = oy.length, aC = 0; aC < fZ; aC++)
			if (oy[aC].iL) return !0;
		return !1
	}, this.wr = function() {
		if (this.iL())
			if (ak.yq.iL) ak.yq.wr();
			else {
				var aC, ib = ws,
					ft = oy,
					fZ = ft.length,
					a7u = (a7L + gap) / zoom;
				for (ib.imageSmoothingEnabled = !0, ib.setTransform(zoom, 0, 0, zoom, fg, fi), aC = 0; aC < fZ; aC++) ft[aC].iL && ws.drawImage(ft[aC].canvas[ft[aC].lr], ft[aC].fg * a7u, ft[aC].fi * a7u);
				ib.imageSmoothingEnabled = !1, ib.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cH() {
	var k, canvas, a7v, a7w, a7x, a7y = -1;

	function a7z() {
		var a80, ou = canvas.getContext("2d", {
			alpha: !0
		});
		ou.clearRect(0, 0, k, k), ou.fillStyle = bE.pK, ou.fillRect(0, 0, k, k), 9 === a7w && (ou.fillStyle = bE.pP, ou.fillRect(0, 0, k, k)), ou.fillStyle = bE.pO, ou.fillRect(0, 0, k, 1), ou.fillRect(0, 0, 1, k), ou.fillRect(0, k - 1, k, 1), ou
			.fillRect(k - 1, 0, 1, k), a80 = .9 * k / ac.get(0).width, ou.imageSmoothingEnabled = !0, ou.setTransform(a80, 0, 0, a80, Math.floor((k - a80 * ac.get(0).width) / 2), Math.floor((k - a80 * ac.get(0).height) / 2)), ou.drawImage(ac.get(0),
				0, 0), ou.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a83(m9, mA) {
		if (!aN.hj) return m9 <= k + bf.gap && mA >= aS.fi ? 9 : -1;
		if (m9 <= 4 * k + bf.gap) {
			if (mA >= aS.fi) return 0;
			if (mA >= aS.fi - k - a7x * bf.gap) return 2
		} else if (m9 <= 7 * k + bf.gap && mA >= aS.fi - k - a7x * bf.gap) return 1;
		return -1
	}
	this.hj = !1, this.dk = function() {
		a7w = -1, this.hj = !1, a7x = a1.a2.ik() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, a7v = bD.sK.u8(1, (a1.a2.ik() ? .5 : .45) * k), a7z()
	}, this.a81 = function() {
		return !(1 !== aE.a2G || aE.hx || (aE.hi ? !bF.a74 : this.hj && aE.lE))
	}, this.a4N = function() {
		this.hj = !this.hj, this.hj ? (bF.a4M(!1), aE.hi && bF.a74 && bF.a4O(!0), this.a82(), 9 === a7w && (a7w = 0)) : (a7w = -1, a7z(), !aE.lE || 1 !== aE.a2G || aE.hx || aE.hi || a1.a2.setState(1)), bi.ds = !0
	}, this.a82 = function() {
		(aE.lE || aE.hi) && 1 === aE.a2G && (aW.nG(!0), aE.hx || setTimeout(function() {
			be.a2S()
		}, 0), a1.a2.setState(0))
	}, this.hm = function(m9, mA) {
		return 0 <= (a7y = a83(m9, mA)) || !aN.hj || aE.lE || aE.hi || bh.iL || aN.a4N(), a7y
	}, this.a3m = function(m9, mA) {
		m9 = a83(m9, mA);
		m9 !== a7w && (a7w = m9, this.hj || a7z(), bi.ds = !0)
	}, this.a3n = function(m9, mA) {
		m9 = a83(m9, mA);
		return -1 !== m9 && a7y === m9 && (this.hj ? aE.ny ? (0 <= m9 && bF.a4M(!1), !aE.hi) : (0 === m9 ? aE.a3d() : 1 === m9 ? this.a4N() : 2 === m9 && u.v(1, 0), !0) : 9 === m9 && (this.a4N(), !0))
	}, this.wr = function() {
		var j;
		this.hj ? (j = Math.floor(5.5 * k), ws.setTransform(1, 0, 0, 1, bf.gap, aS.fi), ws.fillStyle = bE.pK, ws.fillRect(0, 0, j, k), 0 === a7w ? (ws.fillStyle = bE.pP, ws.fillRect(0, 0, 4 * k, k)) : 1 === a7w && (ws.fillStyle = bE.pP, ws
				.fillRect(4 * k, 0, Math.floor(1.5 * k), k)), ws.fillStyle = bE.pO, ws.fillRect(0, 0, j, 1), ws.fillRect(0, 0, 1, k), ws.fillRect(4 * k, 0, 1, k), ws.fillRect(0, k - 1, j, 1), ws.fillRect(j - 1, 0, 1, k), ws.font = a7v, bD.sK
			.textBaseline(ws, 1), bD.sK.textAlign(ws, 1), ws.fillText(L(45), 2 * k, .54 * k), j = .4 * k, aN.a87(bf.gap + 4 * k + (1.5 * k - j) / 2, aS.fi + .3 * k, j), j = 1, ws.setTransform(1, 0, 0, 1, bf.gap, aS.fi - j * a7x * bf.gap - j *
				k), ws.fillStyle = bE.pK, ws.fillRect(0, 0, 4 * k, k), a7w === j + 1 && (ws.fillStyle = bE.pP, ws.fillRect(0, 0, 4 * k, k)), ws.fillStyle = bE.pO, ws.fillRect(0, 0, 4 * k, 1), ws.fillRect(0, 0, 1, k), ws.fillRect(4 * k, 0, 1,
				k), ws.fillRect(0, k - 1, 4 * k, 1), ws.fillText(L(0 === j ? 45 : 46), 2 * k, .54 * k), ws.setTransform(1, 0, 0, 1, 0, 0)) : ws.drawImage(canvas, bf.gap, aS.fi)
	}, this.rv = function(player) {
		return 0 !== ah.nU[player] && 2 !== aE.a2G && !bD.gv.kH(player)
	}, this.a87 = function(fg, fi, fZ) {
		ws.setTransform(1, 0, 0, 1, fg, fi), ws.lineWidth = bf.a1E, ws.strokeStyle = bE.pO, ws.beginPath(), ws.moveTo(0, 0), ws.lineTo(fZ, fZ), ws.moveTo(0, fZ), ws.lineTo(fZ, 0), ws.stroke()
	}
}

function cI() {
	var a89, k, a8A, a8B, a8C, a8D, a8E, a8F, a8G;

	function a0M() {
		return aS.a8Y(aO.a8U()) ? ax.iL ? __fx.settings.keybindButtons ? aS.fi - 2 * aS.k - 3 * a8A : aS.fi - aS.k - 2 * a8A : __fx.settings.keybindButtons ? aS.fi - aS.k - 2 * a8A : aS.fi - a8A : bF.a8Y(aO.a8X()) ? ax.iL ? bF.a0M() - aS.k - 2 *
			a8A : bF.a0M() - a8A : ax.iL ? i.k - aS.k - (bn.a7K() + 1) * a8A : i.k - bn.a7K() * bf.gap
	}

	function a8L(ea, s1, id, h7, a8O, a8P, lX, a8Q, a8R, a8S, a8c) {
		var aC, ou, a55, sC, a8d = void 0 !== a8R,
			j = Math.floor(aR.measureText(s1, aO.a7v) + 1.5 * a8B + (a8d ? k : 1.5 * a8B));
		if (bi.ds = !0, a8c || bt.a0i(s1, a8R), j + 2 * a8A + aS.k > i.j && !a8d && 50 !== id && 20 < s1.length) a8L(ea, (a8c = bD.tI.a6N(s1))[0], id, h7, a8O, a8P, lX, a8Q, a8R, a8S, !0), a8L(ea, a8c[1], id, h7, a8O, a8P, lX, a8Q, a8R, a8S, !0);
		else if (a8c = j + (50 === id ? a8C : 0), (a55 = document.createElement("canvas")).width = j, a55.height = k, (ou = a55.getContext("2d", {
				alpha: !0
			})).font = aO.a7v, bD.sK.textBaseline(ou, 1), bD.sK.textAlign(ou, 0), ou.clearRect(0, 0, j, k), ou.fillStyle = a8P, ou.fillRect(0, 0, j, k), ou.fillStyle = a8O, ou.fillText(s1, Math.floor(1.5 * a8B), Math.floor(k / 2)), a8d && (ou
				.imageSmoothingEnabled = !0, ak.yq.a1F(a8R, ou, j - k, 0, k)), 0 === (sC = {
				eZ: ea,
				s1: s1,
				id: id,
				player: h7,
				canvas: a55,
				a8O: a8O,
				a8P: a8P,
				j: j,
				a8V: a8c,
				lX: lX,
				a8Q: a8Q,
				a8R: a8R,
				a8S: a8S
			}).eZ || 0 < a89.length && 0 < a89[0].eZ) a89.unshift(sC);
		else {
			for (aC = 1; aC < a89.length; aC++)
				if (0 < a89[aC].eZ) return void a89.splice(aC, 0, sC);
			a89.push(sC)
		}
	}

	function a8M(eH, uw, ft) {
		return "rgb(" + eH + "," + uw + "," + ft + ")"
	}

	function a8e(id, h2) {
		for (var fZ = a89.length, aC = 0; aC < fZ; aC++) a89[aC].id === id && h2-- <= 0 && (a89.splice(aC, 1), aC--, fZ--)
	}

	function a8f(id, player) {
		for (var fn = !1, aC = a89.length - 1; 0 <= aC; aC--) a89[aC].id !== id || player !== aE.fW && a89[aC].player !== player || (a89.splice(aC, 1), fn = !0);
		return fn
	}

	function a90(s1) {
		a8L(340, s1, 6, 0, a8M(215, 245, 255), bE.pL, -1, !1)
	}
	this.a8H = "", this.dk = function() {
		var self;
		a8F = 0, a8E = a1.a2.ik() ? 7 : 12, a8D = {
				a24: [0, 0, 0],
				a8I: [0, 0, 0],
				nm: [220, 180, 180],
				wq: [0, 0, 0],
				ej: [0, 0, 0]
			}, a89 = [], this.resize(), aE.hx && this.a2T(0, 18), bV.yd.ye[bV.fF].name.length && a90(L(89, [bV.yd.ye[bV.fF].name])), bV.yd.ye[bV.fF].a91 && a90(L(90, [bV.yd.ye[bV.fF].a91])), a90(L(91, [bV.fk - 2 + "x" + (bV.fl - 2)])), a90(L(92,
				[bD.tI.a1X(aq.a92)])), aq.a92 !== aq.a93 && a90(L(93, [bD.tI.a1X(aq.a93) + " (" + bD.tI.a6J(100 * aq.a93 / aq.a92, 1) + ")"])), 0 < aq.a94 && a90(L(69, [bD.tI.a1X(aq.a94) + " (" + bD.tI.a6J(100 * aq.a94 / aq.a92, 1) + ")"])), 0 <
			aq.a95 && a90(L(94, [bD.tI.a1X(aq.a95) + " (" + bD.tI.a6J(100 * aq.a95 / aq.a92, 1) + ")"])), 10 === aE.lC && a8L(120, L(95), 6, 0, a8M(235, 255, 120), bE.pL, -1, !1), 0 !== (self = this).a8H.length && (a8L(200, self.a8H, 0, 0, bE.pO,
				bE.pL, -1, !1), self.a8H = ""), aE.a0h && a8L(340, L(47), 6, 0, a8M(255, 200, 0), bE.pL, -1, !1)
	}, this.resize = function() {
		var a8N, aC;
		if (k = (k = Math.floor((a1.a2.ik() ? .031 : .0249) * i.il)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.a7v = bD.sK.u8(1, this.fontSize), a8A = bf.gap, a8B = Math.floor(k / 5), 0 < a89.length)
			for (a8N = a89, a89 = [], aC = a8N.length - 1; 0 <= aC; aC--) a8L(a8N[aC].eZ, a8N[aC].s1, a8N[aC].id, a8N[aC].player, a8N[aC].a8O, a8N[aC].a8P, a8N[aC].lX, a8N[aC].a8Q, a8N[aC].a8R, a8N[aC].a8S, !0);
		this.a8T()
	}, this.a8T = function() {
		a8G = document.createElement("canvas");
		var s1 = L(48),
			ou = (a8C = aR.measureText(s1, this.a7v) + 5 * a8B, a8G.height = k, a8G.width = a8C, a8G.getContext("2d", {
				alpha: !0
			}));
		ou.font = this.a7v, bD.sK.textBaseline(ou, 1), bD.sK.textAlign(ou, 1), ou.clearRect(0, 0, a8C, k), ou.fillStyle = bE.pl, ou.fillRect(0, 0, a8C, k), ou.fillStyle = bE.pO, ou.fillText(s1, Math.floor(a8C / 2), Math.floor(k / 2))
	}, this.a8U = function() {
		var fZ;
		return ax.iL ? ax.j : 0 === (fZ = a89.length) ? 0 : 1 === fZ ? a89[0].a8V : a8W(a89[0].a8V, a89[1].a8V)
	}, this.a8X = function() {
		var fZ = a89.length;
		return ax.iL ? fZ ? a8W(ax.j, a89[0].a8V) : ax.j : 0 === fZ ? 0 : 1 === fZ ? a89[0].a8V : 2 === fZ ? a8W(a89[0].a8V, a89[1].a8V) : a8W(a8W(a89[0].a8V, a89[1].a8V), a89[2].a8V)
	}, this.hm = function(fg, fi) {
		for (var nv, a8Z, a8a = a0M(), aC = a89.length - 1; 0 <= aC; aC--)
			if ((a8Z = a8a - (aC + 1) * k) <= fi && fi < a8Z + k) return 50 === a89[aC].id ? fg >= i.j - a8C - a8A - a89[aC].j && (fg >= i.j - a8C - a8A ? bB.gv.rJ(a89[aC].player) : aI.nq(a89[aC].player, 800, !1, 0), !0) : fg >= i.j - a89[aC].j -
				a8A && (736 === a89[aC].id ? window.open("https://" + a89[aC].s1, "_blank") : a89[aC].a8Q && (a89[aC].a8S && a89[aC].a8S.fs ? (a8Z = a89[aC].a8S.fL, nv = bP.fh(a8Z) - 10, a8Z = bP.fj(a8Z) - 10, aI.np(nv, a8Z, 19 + nv, 19 +
					a8Z)) : a89[aC].a8S && a89[aC].a8S.ft ? aI.nr(a89[aC].player, a89[aC].a8S.ns) : (aI.nq(a89[aC].player, 800, !1, 0), 0 <= a89[aC].lX && (nv = a89[aC].lX, a89[aC].lX = a89[aC].player, a89[aC].player = nv))), !0);
		return !1
	}, this.a0i = function(ea, s1, id, h7, a8O, a8P, lX, a8Q, a8R, a8S) {
		a8L(ea, s1, id, h7, a8O, a8P, lX, a8Q, a8R, a8S)
	}, this.a8b = function(s) {
		a8L(300, s, 252, 0, bE.pO, bE.pL, -1, !1)
	}, this.a6Z = function(id) {
		for (var aC = a89.length - 1; 0 <= aC; aC--) a89[aC].id === id && (a89[aC].eZ = 1)
	}, this.a2T = function(player, id) {
		0 === id ? (aR.ei(player, 0), a8e(423, 2), a8L(160, L(49, [ah.a0j[player]]), 423, player, "rgb(10,220,10)", bE.pL, -1, !1)) : 1 === id ? (a8f(50, aE.fW), aR.ei(player, 1), a8L(360, L(50, [ah.a0j[player]]), 0, player, bE.q4, bE.pL, -1, !
				0), aI.nq(player, 2700, !1, 0)) : 2 === id ? (aR.ei(player, 2), a8L(0, L(51), 0, player, "rgb(10,255,255)", bE.pL, -1, !0), aI.nq(player, 2700, !1, 0)) : 3 === id ? (aR.ei(player, 2), a8L(0, L(52, [ah.a0j[player]]), 0, player, bE
				.pO, bE.pL, -1, !0), aI.nq(player, 2700, !1, 0)) : 4 === id ? this.a8g(1, player, player) : 5 === id ? bD.gv.kH(aE.fJ) || (function(id, nP) {
				var aC, oq = 0,
					fZ = a89.length;
				for (aC = 0; aC < fZ; aC++)
					if (a89[aC].id === id && nP <= ++oq) return a89.splice(aC, 1)
			}(1, 5), ag.a8i(player) && a8L(180, L(53, [ah.a0j[player]]), 1, player, a8M(255, 200, 180), bE.pL, -1, !0), bD.gv.a5f(player, 10) && (a8e(573, 0), a8L(180, L(54, [ah.a0j[player]]), 573, player, bE.q4, bE.pL, -1, !0))) : 18 === id ?
			a8L(255, L(55), 18, 0, bE.pO, bE.pL, -1, !1) : 21 === id ? a8L(220, L(56), id, 0, bE.pO, bE.pL, -1, !1) : 22 === id ? this.a8g(2, player, player) : 59 === id && a8L(0, L(57), id, 0, bE.qO, bE.pL, 0, !1)
	}, this.a3Y = function(s) {
		a8L(200, L(58, [s]), 94, 0, bE.pO, bE.q0, -1, !1)
	}, this.a2f = function(a8j) {
		if (aE.fJ === a8j && !aE.lE && !aE.hi)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a8L(0, "Your Win Count is now " + __fx.wins.count, 3, a8j, bE.pO, bE.pL, -1, !0);
		ah.hN[a8j] && (aR.ei(a8j, 2), aE.ku < 100 ? a8L(0, L(52, [ah.a0j[a8j]]), 3, a8j, bE.pO, bE.pL, -1, !0) : a8L(0, L(59, [ah.a0j[a8j]]), 3, a8j, bE.pO, bE.pL, -1, !0))
	}, this.a7o = function(fD) {
		var s1, a8l, a8k = "(" + bP.fh(fD >> 2) + ", " + bP.fj(fD >> 2) + ")",
			a8Q = !1,
			player = 0;
		ad.fU(fD) ? ad.fQ(fD) ? a8k = L(60, [a8k]) : (player = ad.fR(fD), aE.hi && !1 === __fx.hoveringTooltip.active && (aE.fJ = player), s1 = L(61, [bD.ou.a5J(ah.a2w[player], bD.sK.u8(0, 10), 150)]) + "   ", s1 = (s1 += L(62, [bD.tI.a1X(ah.hb[
				player])]) + "   ") + L(63, [bD.tI.a1X(ah.hN[player])]) + "   ", aE.iT && (a8l = bj.a2c[bj.lH[bj.fX[player]]], s1 += L(64) + ": " + a8l + "   "), bD.gv.kH(player) && (s1 += L(65) + ": " + aF.l5[aF.iI[player]] + "   "), a8k =
			s1 = (s1 += L(66, [player]) + "   ") + L(67, [a8k]), a8Q = !0) : a8k = ad.fe(fD) ? L(68, [a8k]) + "   #" + ad.fH(fD) : L(69, [a8k]), a8e(55, 0), a8L(220, a8k, 55, player, bE.pO, bE.pL, -1, a8Q, void 0, void 0, !0)
	}, this.a7q = function(a8m) {
		var lp = bQ.z,
			player = lp.mo[a8m] >> 3,
			s1 = (bi.ds = !0, a8e(55, 0), L(70, [ah.a0j[player]]) + "   ");
		a8L(220, s1 += L(62, [bD.tI.a1X(lp.a8n[a8m])]), 55, player, bE.pO, bE.pL, -1, !0)
	}, this.r2 = function(qm, a8o, r3) {
		qm === aE.fJ ? a8L(175, " " + L(71, [ah.a0j[a8o]]) + ": ", 1001, a8o, a8M(200, 255, 210), bE.pL, -1, !0, r3) : this.a8p(qm, r3)
	}, this.a8p = function(qm, r3) {
		a8e(1e3, 0), a8L(175, ah.a0j[qm] + ": ", 1e3, qm, bE.pO, "rgba(5,60,25,0.9)", -1, !0, r3)
	}, this.a2e = function() {
		var s;
		aE.a2L ? (s = L(72), aR.a2d(L(73), 2, 1, 12), a8L(0, s, 40, 0, "rgb(10,220,10)", bE.pL, -1, !1)) : (s = L(74), aR.a2d(L(75), 2, 0, 16), a8L(0, s, 41, 0, bE.pO, bE.pL, -1, !1))
	}, this.a0W = function() {
		var h2 = ah.a0j,
			fc = aE.data;
		a8L(300, h2[0] + " [" + aE.a2Z.a0c(fc.elo[0]) + "] vs " + h2[1] + " [" + aE.a2Z.a0c(fc.elo[1]) + "]", 65, 0, bE.pF, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a8q = function(s) {
		a8L(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a8r = function(a8s) {
		a8L(0, L(a8s ? 76 : 77), 247, 0, bE.qN, bE.pL, -1, !1)
	}, this.a0e = function(a0b, a0d, a8t) {
		var fc = aE.data,
			h2 = ah.a0j;
		a8L(0, h2[0] + ": " + aE.a2Z.a0c(fc.elo[0]) + " -> " + a0b, 66, 0, bE.pO, a8t[0], -1, !1), a8L(0, h2[1] + ": " + aE.a2Z.a0c(fc.elo[1]) + " -> " + a0d, 66, 1, bE.pO, a8t[1], -1, !1)
	}, this.rK = function(player, id) {
		0 === id ? a8f(50, player) ? (a8L(128, L(78, [ah.a0j[player]]), 52, player, a8M(180, 255, 180), bE.pL, -1, !0), ag.rt(player, 2, 255)) : a8L(384, L(79, [ah.a0j[player]]), 51, player, a8M(210, 210, 255), bE.pL, -1, !0) : a8f(51, player) ?
			(a8L(128, L(80, [ah.a0j[player]]), 52, player, bE.pO, "rgba(60,120,10,0.9)", -1, !0), ag.rt(player, 2, 255)) : (a8L(384, L(81, [ah.a0j[player]]), 50, player, bE.pO, "rgba(90,90,90,0.9)", -1, !0), ag.rt(player, 2, 96))
	}, this.rO = function(a24, target) {
		var color = a8M(210, 255, 210);
		1 < a24.length ? a8L(230, L(82, [a24.length, ah.a0j[target]]), 66, target, color, bE.pL, -1, !0) : a8L(230, L(83, [ah.a0j[a24[0]], ah.a0j[target]]), 66, a24[0], color, bE.pL, target, !0)
	}, this.a8u = function(player, target) {
		a8L(230, L(84, [ah.a0j[player], ah.a0j[target]]), 66, player, bE.pO, "rgba(75,65,5,0.9)", target, !0)
	}, this.a8v = function(id, h2) {
		a8e(id, h2)
	}, this.a2O = function(id, player) {
		a8f(id, void 0 === player ? aE.fW : player)
	}, this.a8w = function(id) {
		for (var aC = a89.length - 1; 0 <= aC; aC--)
			if (a89[aC].id === id) return a89[aC];
		return null
	}, this.rF = function(a7E, a8x, player) {
		2 !== ah.a5a[aE.fJ] && a8L(200, 1 === a7E ? L(85, [ah.a0j[player]]) : L(86, [bD.tI.a1X(a7E), ah.a0j[player]]), 30, player, "rgb(190,255,190)", bE.pL, -1, !0)
	}, this.a8z = function(a7E, player) {
		2 !== ah.a5a[aE.fJ] && (a8e(31, 0), a7E = " (" + bD.tI.a1X(a7E) + ") 💸", a8L(150, a7E = bD.gv.kH(player) ? L(87) + a7E : L(88, [ah.a0j[player]]) + a7E, 31, player, bE.pF, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a2N = function(by) {
		for (var ej = bi.kr(), aC = 2; 0 <= aC; aC--) 0 < a8D.wq[aC] && (by || a8D.ej[aC] < ej - 220) && this.a96(aC)
	}, this.a96 = function(id) {
		var s1, fZ = a8D.wq[id],
			player = a8D.a24[id];
		a8D.wq[id] = 0, 1 === fZ ? (0 === id ? s1 = L(96, [ah.a0j[player], ah.a0j[a8D.a8I[0]]]) : 1 === id ? s1 = L(97, [ah.a0j[player]]) : 2 === id ? s1 = L(98, [ah.a0j[player]]) : 3 === id && (s1 = L(99, [ah.a0j[player]])), a8e(7, 0), a8L(a8D
			.nm[id], s1, 7, a8D.a8I[id], bE.pO, bE.pL, -1, !0)) : (s1 = L(0 === id ? 100 : 1 === id ? 101 : 102, [fZ]), a8e(7, 0), a8L(a8D.nm[id], s1, 7, player, bE.pO, bE.pL, -1, !1))
	}, this.a8g = function(id, i1, lX) {
		var ej = bi.kr(),
			fZ = a8D.wq[id] + 1;
		a8D.wq[id]++, a8D.a24[id] = i1, a8D.a8I[id] = lX, 1 === fZ && (a8D.ej[id] = ej), (1 === fZ && (aE.a2J < 32 || 2 === aE.a2G) || 1 < fZ && (a8D.ej[id] < ej - 140 || 2 === aE.a2G)) && this.a96(id)
	}, this.ee = function() {
		b3.ee();
		for (var k9 = (k9 = a89.length - a8E) <= 1 ? 1 : k9 * k9, aC = a89.length - 1; 0 <= aC; aC--) 0 < a89[aC].eZ && (a89[aC].eZ -= k9, a89[aC].eZ <= 0) && (bi.ds = !0, a89.splice(aC, 1));
		! function() {
			var h2, aC;
			if (128 !== a8F && !(++a8F < 128))
				for (h2 = 5, aC = am.lQ - 1; 0 <= aC; aC--) 1 === ah.a5a[am.lV[aC]] && 0 < h2-- && a8L(240, L(99, [ah.a0j[am.lV[aC]]]), 1, am.lV[aC], bE.pF, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a2N(!1)
	}, this.wr = function() {
		for (var zO, fi = a0M(), aC = a89.length - 1; 0 <= aC; aC--) zO = fi - (aC + 1) * k, 50 === a89[aC].id ? (ws.drawImage(a89[aC].canvas, i.j - a89[aC].j - a8C - a8A, zO), ws.drawImage(a8G, i.j - a8C - a8A, zO)) : ws.drawImage(a89[aC]
			.canvas, i.j - a89[aC].j - a8A, zO)
	}, this.a98 = function(id, iI) {
		var a8k, a99 = bE.pY;
		0 === id ? a8k = L(103) : 1 === id ? (a8k = L(104), a99 = bE.qJ) : 2 === id ? a8k = L(105) : 3 === id ? a8k = L(106) : (a8k = bD.tI.a1X(iI), a99 = 5 === id ? bE.qJ : bE.pL), a8e(74, 0), a8L(0, a8k, 74, 0, bE.pO, a99, -1, !1, void 0,
			void 0, !0)
	}
}

function cJ() {
	var a9B, a9C, wt = "",
		z9 = 0,
		zA = 0,
		a9A = -1,
		eD = ["Team", "Zombie", "BR", "1v1"];

	function a9D() {
		for (var ea = new Date, a9E = ea.getUTCMinutes(), ea = ea.getUTCSeconds(), a9G = [], a9H = 0, aC = 0; aC < 6; aC++) a9G.push(a9H), a9G.push(a9H + 2), a9G.push(a9H + 5), a9G.push(a9H + 7), a9H += 10;
		for (var fZ = a9G.length, aC = 1; aC < fZ && !(a9E < a9G[aC]); aC++);
		aC %= fZ;
		ea = (a9G[0] = 60) * (a9G[aC] - a9E) - ea;
		return ea !== a9A && (wt = eD[aC % 4] + " " + a9C + ": " + a9J(Math.floor(ea / 60)) + ":" + a9J(ea % 60), a9A = ea, z9 = aR.measureText(wt, a9B), z9 += Math.floor(.4 * zA), 1)
	}

	function a9J(a9K) {
		return a9K < 10 ? "0" + a9K : String(a9K)
	}
	this.dk = function() {
		a9C = L(107)
	}, this.resize = function() {
		z9 = Math.floor((a1.a2.ik() ? .53 : .36) * i.il), zA = Math.floor(.065 * z9), a9B = bD.sK.u8(1, Math.floor(.9 * zA)), a9A += 1e3, a9D()
	}, this.ee = function() {
		a9D() && (bi.ds = !0)
	}, this.wr = function(fi) {
		ws.lineWidth = 1 + Math.floor(zA / 15), ws.translate(i.j - zA, fi + z9), ws.rotate(-Math.PI / 2), ws.fillStyle = bE.pO, ws.fillRect(0, 0, z9, zA), ws.strokeStyle = bE.pF, ws.strokeRect(0, 0, z9, zA + 10), ws.fillStyle = bE.pF, ws.font =
			a9B, bD.sK.textBaseline(ws, 1), bD.sK.textAlign(ws, 1), ws.fillText(wt, Math.floor(z9 / 2), Math.floor(.59 * zA)), ws.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cK() {
	var a7D, a9L, a9M, zA, a9N, a9O = 0,
		a9P = 0;

	function a9R(aC) {
		var a9T = !0,
			a1M = bE.pO,
			j = (1 === a7D[aC].id ? a7D[aC].ou.fillStyle = bE.qH : a7D[aC].k3 === aE.fW ? a7D[aC].ou.fillStyle = bE.pZ : (ad.a9U(a7D[aC].k3), a7D[aC].ou.fillStyle = bD.color.pI(bR.g8[0], bR.g8[1], bR.g8[2], .87), 400 < bD.sS.a4j(bR.g8, 0, 2) && (
				a9T = !1, a1M = bE.pF)), a7D[aC].canvas.width),
			uf = (a7D[aC].ou.clearRect(0, 0, j, zA), a7D[aC].ou.fillRect(0, 0, j, zA), a7D[aC].ou.fillStyle = a1M, ! function(ou, j, zA) {
				ou.fillRect(0, 0, j, 1), ou.fillRect(0, zA - 1, j, 1), ou.fillRect(0, 0, 1, zA), ou.fillRect(j - 1, 0, 1, zA)
			}(a7D[aC].ou, j, zA), a9L + 2 * zA < j && (a7D[aC].ou.fillRect(j - a9L - zA, 0, 1, zA), a7D[aC].ou.fillText(ah.a0j[a7D[aC].k3], Math.floor((j - a9L) / 2), Math.floor(.57 * zA))), 0 !== a7D[aC].id ? 0 : zA);
		a7D[aC].ou.fillText(bD.tI.a1X(a7D[aC].iI), Math.floor(j - a9L / 2 - uf), Math.floor(.57 * zA)),
			function(aC, j, uf, a9T) {
				a7D[aC].ou.fillStyle = a9T ? bE.pQ : bE.pM;
				a9T = Math.floor(a9L * a7D[aC].iI / a7D[aC].a9a);
				a7D[aC].ou.fillRect(Math.floor(j - a9L - uf), zA - a9N, a9T, a9N)
			}(aC, j, uf, a9T), 0 === a7D[aC].id ? (a9X(aC, j, a9T, a1M), function(aC, j, a9T) {
				a7D[aC].ou.strokeStyle = a9T ? bE.pg : bE.pq, a7D[aC].ou.fillRect(zA, 0, 1, zA);
				a9T = j - zA;
				a7D[aC].ou.beginPath(), a7D[aC].ou.moveTo(Math.floor(.3 * zA + a9T), Math.floor(zA / 2)), a7D[aC].ou.lineTo(Math.floor(zA - .3 * zA + 0 + a9T), Math.floor(zA / 2)), a7D[aC].ou.stroke(), a7D[aC].ou.beginPath(), a7D[aC].ou.moveTo(
					Math.floor(zA / 2 + a9T), Math.floor(.3 * zA)), a7D[aC].ou.lineTo(Math.floor(zA / 2 + a9T), Math.floor(zA - .3 * zA + 0)), a7D[aC].ou.stroke()
			}(aC, j, a9T)) : a9X(aC, 2 * zA, a9T, a1M)
	}

	function a9X(aC, j, a9T, a1M) {
		a7D[aC].ou.strokeStyle = a7D[aC].a9b ? bE.pX : a9T ? bE.pw : bE.px, a7D[aC].ou.fillStyle = a1M, a7D[aC].ou.fillRect(j - zA, 0, 1, zA), a7D[aC].ou.lineWidth = Math.max(Math.floor(zA / 12), 3), a7D[aC].ou.lineCap = "round";
		a9T = .35;
		j = zA + 1, a7D[aC].ou.beginPath(), a7D[aC].ou.moveTo(Math.floor(j - a9T * zA + 0), Math.floor(a9T * zA)), a7D[aC].ou.lineTo(Math.floor(j - zA + a9T * zA), Math.floor(zA - a9T * zA + 0)), a7D[aC].ou.stroke(), a7D[aC].ou.beginPath(), a7D[aC]
			.ou.moveTo(Math.floor(j - zA + a9T * zA), Math.floor(a9T * zA)), a7D[aC].ou.lineTo(Math.floor(j - a9T * zA + 0), Math.floor(zA - a9T * zA + 0)), a7D[aC].ou.stroke()
	}

	function a9n(h, a9l) {
		for (var iI, aC = a9l - 1; 0 <= aC; aC--) iI = ae.gm(aE.fJ, aC), h[aC].iI !== iI && (h[aC].iI = iI, h[aC].a9a = Math.max(iI, h[aC].a9a), h[aC].a9S = !0)
	}

	function a9r(h, a9p) {
		for (var us = aE.fJ << 3, a8n = bQ.z.a8n, ml = bQ.z.ml, a9t = bQ.z.a9t, aC = a9p - 1; 0 <= aC; aC--) {
			var a9u = a9t[us + aC],
				iI = a8n[a9u];
			h[aC].iI !== iI ? (h[aC].iI = iI, h[aC].a9a = Math.max(iI, h[aC].a9a), h[aC].a9S = !0) : h[aC].a9b || ml[a9u] % 64 != 5 || (h[aC].a9b = !0, h[aC].a9S = !0)
		}
	}

	function a9Q(a7G) {
		a7G.canvas = document.createElement("canvas"), bV.yj.font = a9M;
		var j = a9L;
		a7G.k3 < aE.fW && 0 === a7G.id && (j += Math.floor(bV.yj.measureText(ah.a0j[a7G.k3] + "000").width)), j += zA, 0 === a7G.id && (j += zA), a7G.canvas.width = j, a7G.canvas.height = zA, a7G.ou = a7G.canvas.getContext("2d", {
			alpha: !0
		}), a7G.ou.font = a9M, bD.sK.textBaseline(a7G.ou, 1), bD.sK.textAlign(a7G.ou, 1)
	}

	function a9h(aC) {
		return aV.a9v() ? i.j - a7D[aC].canvas.width - bf.gap : aV.fg
	}

	function a9i(aC) {
		return Math.floor(2 * bf.gap + (aV.a9v() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * zA))
	}
	this.dk = function() {
		a9O = a9P = 0, a7D = [], this.resize()
	}, this.resize = function() {
		a9M = aO.a7v, zA = aO.fontSize + 5, zA = Math.floor(1.25 * zA), a1.a2.ik() && (zA = Math.floor(1.25 * zA)), a9N = Math.floor(.15 * zA), bV.yj.font = a9M, a9L = Math.floor(bV.yj.measureText("02 000 000 0000").width);
		for (var aC = a7D.length - 1; 0 <= aC; aC--) a9Q(a7D[aC]), a9R(aC)
	}, this.nG = function() {
		for (var aC = a7D.length - 1; 0 <= aC; aC--) a7D[aC].a9S && (a7D[aC].a9S = !1, a9R(aC))
	}, this.hm = function(m9, mA) {
		if (2 !== aE.a2G && 0 !== ah.nU[aE.fJ] && !aE.hi && !bD.gv.kH(aE.fJ))
			for (var a9c, a9d, a9e, a9f = a1.a2.ik() ? zA : 0, a9g = a1.a2.ik() ? Math.floor(.15 * zA) : 0, aC = a7D.length - 1; 0 <= aC; aC--)
				if (a9c = a9h(aC), a9d = a9i(aC), a9e = a7D[aC].canvas.width, a9d - a9g <= mA && mA <= a9d + zA + a9g) {
					if (a9c - a9f <= m9 && m9 <= a9c + zA + a9f) return a7D[aC].a9b || (a7D[aC].a9S = !0, a7D[aC].a9b = !0, 0 === a7D[aC].id ? bB.hz.r0(a7D[aC].k3) : bB.hz.qz(a7D[aC].k3)), !0;
					if (0 === a7D[aC].id && a9c + a9e - zA - a9f <= m9 && m9 <= a9c + a9e + a9f) return bY.a7e(3), bB.hz.i6(aS.i3(), a7D[aC].k3), !0
				} return !1
	}, this.ee = function() {
		var a4r, a4s, h, a9l;
		0 === ah.nU[aE.fJ] || bD.gv.kH(aE.fJ) && !aE.hi || (a4r = a7D.slice(0, a9O), a4s = a7D.slice(a9O, a9O + a9P), h = a4r, a9l = ae.gg(aE.fJ), function(h, a9l) {
			if (a9O !== a9l) return 1;
			for (var aC = a9l - 1; 0 <= aC; aC--)
				if (h[aC].k3 !== ae.gl(aE.fJ, aC)) return 1;
			return
		}(h, a9l) ? a9n(h = function(h, a9l) {
			var aC, k3, ft, iI, a8N = [];
			loop: for (aC = 0; aC < a9l; aC++) {
				for (k3 = ae.gl(aE.fJ, aC), ft = 0; ft < h.length; ft++)
					if (h[ft].k3 === k3) {
						a8N.push(h.splice(ft, 1)[0]);
						continue loop
					} iI = ae.gm(aE.fJ, aC), a9Q(iI = {
					k3: k3,
					iI: iI,
					a9a: iI,
					id: 0,
					a9S: !0,
					a9b: !1,
					canvas: null,
					ou: null
				}), a8N.push(iI)
			}
			return a8N
		}(h, a9l), a9l) : a9n(h, a9l), a4r = h, a4s = function(h) {
			var a9p = bQ.z.ky[aE.fJ];
			return function(h, a9p) {
				if (a9P !== a9p) return 1;
				for (var us = aE.fJ << 3, mn = bQ.z.mn, a9t = bQ.z.a9t, aC = a9p - 1; 0 <= aC; aC--) {
					var a9u = a9t[us + aC];
					if (h[aC].k3 !== mn[a9u]) return 1
				}
				return
			}(h, a9p) ? a9r(h = function(h, a9p) {
				var aC, k3, ft, a8N = [],
					us = aE.fJ << 3,
					mn = bQ.z.mn,
					a8n = bQ.z.a8n,
					a9t = bQ.z.a9t;
				loop: for (aC = 0; aC < a9p; aC++) {
					var a9u = a9t[us + aC];
					for (k3 = mn[a9u], ft = 0; ft < h.length; ft++)
						if (h[ft].k3 === k3) {
							a8N.push(h.splice(ft, 1)[0]);
							continue loop
						} a9u = a8n[a9u], a9Q(a9u = {
						k3: k3,
						iI: a9u,
						a9a: a9u,
						id: 1,
						a9S: !0,
						a9b: !1,
						canvas: null,
						ou: null
					}), a8N.push(a9u)
				}
				return a8N
			}(h, a9p), a9p) : a9r(h, a9p), h
		}(a4s), a9O = a4r.length, a9P = a4s.length, a7D = a4r.concat(a4s))
	}, this.wr = function() {
		if (0 !== ah.nU[aE.fJ] && (!bD.gv.kH(aE.fJ) || aE.hi))
			for (var aC = a7D.length - 1; 0 <= aC; aC--) ws.drawImage(a7D[aC].canvas, a9h(aC), a9i(aC))
	}
}

function cL() {
	var a89, kz, a9w, a9x, k, a7v, fontSize, a9y, a9z, aA0, aA1, canvas, ou, nh, aA2;

	function x7(aC) {
		return L(0 === aC ? 108 : 1 === aC ? 109 : 2 === aC ? 110 : 111)
	}

	function aA9() {
		aE.iT ? aAA + 4 * bf.gap + k + bk.aAB() > aS.fi ? ws.drawImage(canvas, 2 * bf.gap + bk.aAB(), aAA + 2 * bf.gap) : ws.drawImage(canvas, bf.gap, aAA + 3 * bf.gap + bk.aAB()) : ws.drawImage(canvas, bf.gap, aAA + 2 * bf.gap)
	}

	function aA3() {
		canvas.width = a89[0].width + aA0, canvas.height = k + aA0, (ou = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a89[0].width + aA0, k + aA0), ou.translate(Math.floor(aA0 / 2), Math.floor(aA0 / 2)), ou.lineWidth = aA0, ou.fillStyle = 1 === a89[0].aA8 ? bE.pT : bE.pL, aAC(), ou.fill(), ou.strokeStyle = 1 === a89[0].aA8 ? bE.pF :
			bE.pO, aAC(), ou.stroke(), bD.sK.textAlign(ou, 1), bD.sK.textBaseline(ou, 1), ou.fillStyle = 1 === a89[0].aA8 ? bE.pF : bE.pO, ou.font = a7v[0], ou.fillText(x7(a89[0].aA7), Math.floor(a89[0].width / 2), Math.floor(.72 * a9y[0] * k)), ou
			.font = a7v[1], ou.fillText(a89[0].s1, Math.floor(a89[0].width / 2), Math.floor((a9y[0] + .48 * a9y[1]) * k))
	}

	function aAC() {
		ou.beginPath(), ou.moveTo(aA1, 0), ou.lineTo(a89[0].width - aA1, 0), ou.lineTo(a89[0].width, aA1), ou.lineTo(a89[0].width, k - aA1), ou.lineTo(a89[0].width - aA1, k), ou.lineTo(aA1, k), ou.lineTo(0, k - aA1), ou.lineTo(0, aA1), ou.closePath()
	}
	this.dk = function() {
		kz = 4, a9w = a9x = nh = 0, a89 = [], a7v = new Array(2), fontSize = new Array(2), (a9y = new Array(2))[0] = .3, a9y[1] = .7, a9z = new Array(4), canvas = document.createElement("canvas"), aA2 = bi.eZ + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.ik() ? .062 : .047) * i.il), fontSize[0] = Math.floor(.85 * a9y[0] * k), fontSize[1] = Math.floor(.85 * a9y[1] * k), a7v[0] = bD.sK.u8(1, fontSize[0]), a7v[1] = bD.sK.u8(1, fontSize[1]), aC = a9z.length -
			1; 0 <= aC; aC--) a9z[aC] = this.measureText(x7(aC) + "000", a7v[0]);
		if (aA0 = Math.floor(1 + .05 * k), aA1 = Math.floor(.2 * k), 0 < a89.length) {
			for (aC = a89.length - 1; 0 <= aC; aC--) j = this.measureText(a89[aC].s1 + "00", a7v[1]), a89[aC].width = j < a9z[aC] ? a9z[aC] : j;
			aA3()
		}
	}, this.ee = function() {
		0 !== kz && (4 === kz ? bi.eZ > aA2 && (kz = 0, 1 === aE.a2G) && aR.a2d(bV.yd.ye[bV.fF].name, 3, 1, 9) : (1 === kz ? (0 === a9w && (aA3(), a9w = 1e-4), 1 <= (a9w += .002 * (bi.eZ - nh)) && (a9x = 0, kz = 2, a9w = 1), bi.ds = !0) : 2 ===
			kz ? ((a9x += (bi.eZ - nh) / 1e3) > a89[0].nm || 1 < a9x && 1 < a89.length) && (kz = 3) : 3 === kz && ((a9w -= .002 * (bi.eZ - nh)) <= 0 && (a9w = 0, a89.shift(), kz = 0 < a89.length ? 1 : 0), bi.ds = !0), nh = bi.eZ))
	}, this.measureText = function(s1, a7v) {
		return ws.font = a7v, Math.floor(ws.measureText(s1).width)
	}, this.ei = function(aA6, aC) {
		this.a2d(ah.a0j[aA6], aC, 1, 0 === aC ? 3 : 7)
	}, this.a2d = function(s1, aA7, aA8, nm) {
		var j;
		s1.length && (j = (j = this.measureText(s1 + "00", a7v[1])) < a9z[aA7] ? a9z[aA7] : j, a89.push({
			s1: s1,
			width: j,
			aA7: aA7,
			aA8: aA8,
			nm: nm
		}), 0 === kz) && (a9w = 0, kz = 1, nh = bi.eZ)
	}, this.wr = function() {
		0 !== kz && 0 !== a9w && (a9w < 1 ? (ws.globalAlpha = a9w, aA9(), ws.globalAlpha = 1) : aA9())
	}
}

function cu() {
	var k, canvas, ou, aAD, aAE, aAF, aAG, a9S, aAH, aAI, aAJ, aAK, a8s = !1,
		a55 = (this.iL = !1, this.j = 0, new Array(2)),
		aAL = 0;

	function nH() {
		var j = ax.j,
			lp = (a9S = !1, a0P(ou, j, k), Math.floor(j / 2));
		1 === aAD ? (ou.fillStyle = bE.pi, ou.fillRect(lp, 0, lp, k)) : -1 === aAD && (ou.fillStyle = bE.py, ou.fillRect(0, 0, lp, k)), a0Q(ou, j, k, 2);
		var lp = (lp = Math.floor(.25 * k)) < 2 ? 2 : lp,
			a92 = (ou.fillStyle = bE.pU, Math.floor((k - 4) * aAE[1] / aAF[1]));
		0 < a92 && ou.fillRect(2, k - 2 - a92, lp, a92), 0 < (a92 = Math.floor((k - 4) * aAE[0] / aAF[0])) && ou.fillRect(j - 2 - lp, k - 2 - a92, lp, a92);
		lp = (lp = Math.floor(k / 8)) < 2 ? 2 : lp, a0S(ou, Math.floor(.4 * k), 0, k, lp, .5, !1), a0S(ou, Math.floor(j - 1.4 * k), 0, k, lp, .5, !0), a92 = 1.1 * k / a55[0].width;
		ou.imageSmoothingEnabled = !0, ou.setTransform(a92, 0, 0, a92, (j - a92 * a55[0].width) / 2, -.05 * k), ou.drawImage(a55[+a8s], 0, 0), ou.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aAQ() {
		aAK = -1, a8s = ai.aAR(), aO.a6Z(257), aO.a8r(a8s), ax.iL = !0, a9S = !0, aAH = 360;
		for (var g1, ea = 0, aC = am.lQ - 1; 0 <= aC; aC--) bD.gv.kH(am.lV[aC]) || (ea += ah.hN[am.lV[aC]]);
		a8s ? aAF[0] = Math.max(bO.g0(3 * ea, 4), 1) : aE.iT ? (g1 = 9 === aE.lC ? 8 === bj.lH[bk.lT()] ? 80 : (g1 = bO.g0(100 * bk.lR(), aE.ke), bO.g0(bO.ij(1550 - 11 * g1, 400, 1e3), 10)) : (g1 = bO.g0(100 * bk.lR(), aE.ke), bO.g0(bO.ij(1600 - 12 *
			g1, 400, 1e3), 10)), g1 = bO.g0(g1 * ea, 100), aAF[0] = Math.max(g1, 1)) : 8 === aE.lC ? aAF[0] = Math.max(bO.g0(3 * ea, 4), 1) : aAF[0] = Math.max(bO.g0(3 * ea, 5), 1), aAF[1] = Math.max(ea - aAF[0], 1)
	}

	function aAM() {
		aAJ = bi.kr(), a9S = !0, aAH = aAD = 0, aAG = [], ax.iL = !1, aO.a2O(247), aAE[0] = aAE[1] = 0, aO.a6Z(673)
	}

	function a0M() {
		return aS.a8Y(aO.a8U()) ? __fx.settings.keybindButtons ? aS.fi - 2 * (k + bf.gap) : aS.fi - k - bf.gap : bF.a8Y(aO.a8X()) ? bF.a0M() - k - bf.gap : i.k - k - bn.a7K() * bf.gap
	}
	this.dl = function() {
		for (var aC = 0; aC < 2; aC++) a55[aC] = bD.canvas.a10(ac.get(3), 8 - aC, bE.qb), a55[aC] = bD.canvas.a57(a55[aC])
	}, this.dk = function() {
		aAJ = -1e4, aAI = aAL = 0, aAK = -1, this.iL = !1, a9S = a8s = !1, aAE = [aAD = aAH = 0, 0], aAF = [1, 1], aAG = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, ou = canvas.getContext("2d", {
			alpha: !0
		}), nH()
	}, this.nG = function() {
		a9S && nH()
	}, this.hm = function(fg, fi) {
		return !!this.iL && !(fg < i.j - this.j - bf.gap || fi < a0M() || (aE.hi || this.iM(aE.fJ) && (aN.hj && aN.a4N(), bB.hz.iN(fg > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.ee = function() {
		0 < aAI ? 0 === --aAI && aAM() : this.iL ? 180 == --aAH && 3 * aAE[0] < aAF[0] ? aAM() : aAE[0] >= aAF[0] ? a8s ? bU.a1s.a2B() : bU.a1s.a2F() : aAE[1] >= aAF[1] ? aAI = 4 : aAH <= 0 && aAM() : ! function() {
			var aAT = bi.kr();
			if (aAT % 40 == 14) {
				if (aAL) return !(aAT < aAL) && !(aAT < aAJ + 535) && (aAL = aAT + 1071, bD.gv.a5d()) ? (aAQ(), 1) : 0;
				(1 === am.lQ || (aE.iT ? bk.lR() : ah.hN[mV[0]]) >= bO.g0(96 * aE.ke, 100)) && (aAL = aAT + 535)
			}
			return
		}() && 0 <= aAK && (aO.a0i(250, L(112, [ah.a0j[aAK]]), 673, aAK, bE.pO, bE.pL, -1, !0), aAQ())
	}, this.a2H = function() {
		this.iL && aAE[0] < aAF[0] && aAM()
	}, this.ru = function(player, aAU) {
		var aAV = L(aAU ? 113 : 114, [ah.a0j[player]]),
			aAV = (aO.a0i(450, aAV, 257, player, aAU ? bE.pg : bE.pv, bE.pL, -1, !0), aAG.push(player), a9S = !0, aE.lE ? Math.max(aAF[0], aAF[1]) : ah.hN[player]),
			aAV = Math.max(aAV, 1);
		aAU ? aAE[0] += aAV : aAE[1] += aAV, player === aE.fJ && (aAD = aAU ? 1 : -1)
	}, this.wr = function() {
		var fi;
		this.iL && (fi = a0M(), ws.drawImage(canvas, i.j - this.j - bf.gap, fi))
	}, this.iO = function(player) {
		if (0 !== aAH) return !1;
		if (!bD.gv.hk(1)) return !1;
		if (!bD.gv.hl(player)) return !1;
		if (10 <= kf[player] && !bD.gv.a5x(player, 9)) return !1;
		if (!aE.lE) {
			player = bi.kr();
			if (player < aAJ + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iM = function(h7) {
		if (!bD.gv.hk(1)) return !1;
		if (!bD.gv.hl(h7)) return !1;
		if (!this.iL) return !1;
		for (var aC = aAG.length - 1; 0 <= aC; aC--)
			if (aAG[aC] === h7) return !1;
		return !0
	}, this.iK = function(player) {
		aAK = player
	}
}

function cM() {
	var j, fg, aAX, canvas, ou, iL, jC, a6Q, a7v, a9S, aAY = 11 / 12;

	function aAa() {
		var a9Z = Math.floor(jC * (j - 2 * aAX)),
			aAd = 1 + Math.floor(.0625 * aS.k),
			aAe = 1 + Math.floor(.3 * aS.k),
			aAf = Math.floor(.55 * aS.k);
		ou.clearRect(0, 0, j, aS.k), ou.fillStyle = bE.pK, ou.fillRect(0, 0, aAX, aS.k), ou.fillRect(aAX + a9Z, 0, j - aAX - a9Z, aS.k), ou.fillStyle = jC < 1 / 3 ? "rgba(" + Math.floor(3 * jC * 130) + ",130,0,0.85)" : jC < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (jC - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (jC - 2 / 3) * 130) + ",0.85)", ou.fillRect(aAX, 0, a9Z, aS.k), ou.fillStyle = bE.pO, ou.fillRect(0, 0, j, 1), ou.fillRect(0, aS.k - 1, j, 1), ou
			.fillRect(0, 0, 1, aS.k), ou.fillRect(aAX, 0, 1, aS.k), ou.fillRect(aAX + a9Z, 0, 1, aS.k), ou.fillRect(j - aAX, 0, 1, aS.k), ou.fillRect(j - 1, 0, 1, aS.k), ou.fillRect(Math.floor(.25 * aS.k) + aAe, Math.floor((aS.k - aAd) / 2), aS.k -
				2 * aAe, aAd), ou.fillRect(Math.floor(j - 1.25 * aS.k) + aAe, Math.floor((aS.k - aAd) / 2), aS.k - 2 * aAe - aAe % 2, aAd), ou.fillRect(Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - aAd) / 2), aAe, aAd, aS.k - 2 * aAe - aAe % 2),
			a6Q = bD.gv.jB(aE.fJ, aS.i3()), ou.fillText(bD.tI.a1X(a6Q) + " (" + bD.tI.a6J(100 * jC, +(jC < .1)) + ")", Math.floor(.5 * j), aAf)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		jC = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a4J(arg1);

	function aAk(a4e) {
		return !(1 < a4e && 1 === jC || (1 < a4e && a4e * jC - jC < 1 / 1024 ? a4e = (jC + 1 / 1024) / jC : a4e < 1 && jC - a4e * jC < 1 / 1024 && (a4e = (jC - 1 / 1024) / jC), jC = bO.ij(jC * a4e, 1 / 1024, 1), aAa(), 0))
	}

	function aAl(m9) {
		return jC !== (jC = bO.ij((m9 - fg - aAX) / (j - 2 * aAX), 1 / 1024, 1)) && (aAa(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aAa(), bi.ds = !0
	}, this.fi = 0, this.hn = !1, this.dk = function() {
		iL = !aE.hx && !aE.hi, a9S = !1, jC = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.buffer.data[182].value + 1) / 1024, a6Q = 0, this.hn = !1, this.resize()
	}, this.resize = function() {
		a1.a2.ik() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.il), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.ik() ? .65 : .389) * i.il), j += 12 - j % 12, this.k = Math.floor(j / 12)), aAX = Math.floor(3 * this.k / 2), a7v =
			bD.sK.u8(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, ws), canvas.height = this.k, (ou = canvas.getContext("2d", {
				alpha: !0
			})).font = a7v, bD.sK.textBaseline(ou, 1), bD.sK.textAlign(ou, 1), this.aAZ(), aAa()
	}, this.aAZ = function() {
		fg = a1.a2.ik() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.fi = i.k - this.k - bn.a7K() * bf.gap
	}, this.nG = function() {
		a9S && (a9S = !1, aAa())
	}, this.iL = function() {
		return !(!iL || aN.hj && fg < Math.floor(bf.gap + 5.5 * this.k))
	}, this.a8Y = function(aAg) {
		return !!this.iL() && fg + j > i.j - aAg - bf.gap
	}, this.a6X = function() {
		iL = !aE.hi
	}, this.aAM = function() {
		iL = !1
	}, this.i3 = function() {
		return bO.ij(Math.floor(1024 * jC + .5) - 1, 0, 1023)
	}, this.a4G = function(m9, mA) {
		return this.iL() && fg < m9 && m9 < fg + j && mA > this.fi
	}, this.hm = function(m9, mA) {
		if (!this.iL()) return !1;
		if (!(__fx.settings.keybindButtons && mA > this.fi - Math.floor(bf.gap / 4) - this.k && mA < this.fi - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(m9 - fg))) {
			if (!aS.a4G(m9, mA)) return !1;
			aT.o0 = !1, ! function(tt, m9, mA) {
				if (function(m9, mA) {
						return fg < m9 && m9 < fg + aAX && mA > aS.fi
					}(m9, mA)) return aAk(aAY);
				if (function(m9, mA) {
						return fg + j - aAX < m9 && m9 < fg + j && mA > aS.fi
					}(m9, mA)) return aAk(1 / aAY);
				return tt.hn = !0, aAl(m9)
			}(this, m9, mA) || (bi.ds = !0)
		}
		return !0
	}, this.a4J = function(o7) {
		0 !== aE.a2G && this.iL() && aAk(o7) && (bi.ds = !0)
	}, this.a3p = function(deltaY) {
		var o7;
		return !(0 === deltaY || !this.iL()) && aAk(o7 = 0 < deltaY ? (o7 = 400 / (400 + deltaY)) < aAY ? aAY : o7 : 1 / aAY < (o7 = (400 - deltaY) / 400) ? 1 / aAY : o7)
	}, this.a3m = function(m9) {
		return !!this.hn && aAl(m9)
	}, this.a4C = function() {
		this.hn = !1
	}, this.ee = function() {
		this.iL() && a6Q !== bD.gv.jB(aE.fJ, this.i3()) && (a9S = !0)
	}, this.wr = function() {
		this.iL() && (ws.drawImage(canvas, fg, this.fi), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(ws, fg, this.fi)
	}
}

function d6() {
	var canvas, ou, aAm, font, aAn = 0,
		aAo = !1,
		aAp = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aAq = 5;

	function aAx() {
		if (aAo) {
			var aC, fZ = aAp.length,
				aAf = Math.floor(.5 * aAm.k),
				k = fZ * aAf,
				fg = Math.floor(Math.floor(aAm.fg) + .3 * aAm.j - .5),
				fi = Math.floor(Math.floor(aAm.fi) - k),
				j = Math.floor(.4 * aAm.j + 2.5);
			for (ws.fillStyle = bE.pK, ws.fillRect(fg, fi, j, k), ws.fillStyle = bE.pn, ws.fillRect(fg, fi + aAq * aAf, j, aAf), ws.fillStyle = bE.pO, ws.fillRect(fg, fi, 2, k), ws.fillRect(fg, fi, j, 2), ws.fillRect(fg + j - 2, fi, 2, k), aC =
				1; aC < fZ; aC++) ws.fillRect(fg, fi + aC * aAf, j, 2);
			for (ws.fillStyle = bE.pO, bD.sK.textAlign(ws, 1), bD.sK.textBaseline(ws, 1), ws.font = bD.sK.u8(0, .6 * aAf), fg += .5 * j, aC = 0; aC < fZ; aC++) ws.fillText(aB5(aC), fg, fi + (aC + .6) * aAf)
		}
		ws.drawImage(canvas, Math.floor(aAm.fg), Math.floor(aAm.fi))
	}

	function nH(tt) {
		var fg, nv, nw, aAf;
		ou.clearRect(0, 0, Math.floor(aAm.j), Math.floor(aAm.k)), ou.fillStyle = bE.pK, ou.fillRect(0, 0, Math.floor(aAm.j), Math.floor(aAm.k)), aE.ny && (ou.fillStyle = bE.pn, ou.fillRect(0, 0, Math.floor(.3 * aAm.j), Math.floor(aAm.k))), ou
			.fillStyle = bE.pO, ou.fillText("Hide UI", .15 * aAm.j, .5 * aAm.k), ou.fillRect(Math.floor(.3 * aAm.j - .5), 0, 2, Math.floor(aAm.k)), fg = .5 * aAm.j, ou.fillText("Replay Speed", fg, .31 * aAm.k), ou.fillText(aB5(aAq), fg, .69 * aAm.k),
			ou.fillRect(Math.floor(.7 * aAm.j - .5), 0, 2, Math.floor(aAm.k)), tt.a74 ? (fg = Math.floor(.02 * aAm.j), tt = Math.floor(.025 * aAm.j), nv = Math.floor(.85 * aAm.j - fg - .5 * tt), nw = Math.floor(.25 * aAm.k), aAf = Math.floor(aAm.k) -
				2 * nw, ou.fillRect(nv, nw, fg, aAf), ou.fillRect(nv + fg + tt, nw, fg, aAf)) : function() {
				var j = Math.floor(.46 * aAm.k),
					k = Math.floor(.23 * aAm.k),
					fg = Math.floor(.85 * aAm.j - .5 * j + j / 12),
					fi = Math.floor(.5 * aAm.k - k);
				ou.beginPath(), ou.moveTo(fg, fi), ou.lineTo(fg + j, fi + k), ou.lineTo(fg, fi + (k << 1)), ou.fill()
			}(), ou.fillRect(0, 0, Math.floor(aAm.j), 2), ou.fillRect(0, 0, 2, Math.floor(aAm.k)), ou.fillRect(0, Math.floor(aAm.k) - 2, Math.floor(aAm.j), 2), ou.fillRect(Math.floor(aAm.j - 2), 0, 2, Math.floor(aAm.k))
	}

	function aB5(aC) {
		return 5 === aC ? "Normal" : "" + aAp[aC]
	}
	this.a74 = !1, this.dk = function() {
		aE.hi && (aAq = 5, this.a74 = !1, aAo = !1, aAm = new su([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aAr = function() {
		return aAp[aAq]
	}, this.a0M = function() {
		return aAm.fi
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a74,
		fxGetSpeedIndex: () => aAq,
		fxSetSpeedIndex: index => {
			aAq = index, this.resize()
		},
		fxGetPanelTop: () => aAm && aAm.fi
	}, this.a8Y = function(aAg) {
		return !!aE.hi && aAm.fg + aAm.j > i.j - aAg - bf.gap
	}, this.resize = function() {
		aE.hi && (aAm.resize(), aAm.fi -= (bn.a7K() - 1) * bf.gap, font = bD.sK.u8(0, .3 * aAm.k), (canvas = document.createElement("canvas")).width = Math.floor(aAm.j), canvas.height = Math.floor(aAm.k), (ou = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.sK.textAlign(ou, 1), bD.sK.textBaseline(ou, 1), nH(this))
	}, this.a4M = function(aAs) {
		0 === aE.a2G || u.iL() || aAs !== aE.ny && (aE.ny = aAs, bk.resize(), bi.ds = !0, aE.hi) && (aAn = bi.eZ + 2e3, nH(this))
	}, this.hm = function(fg, fi) {
		if (!aE.hi) return !1;
		if (fg < aAm.fg || fi < aAm.fi || fg > aAm.fg + aAm.j) return aAo && function(tt, fg, fi) {
			var fZ = aAp.length,
				aAf = Math.floor(.5 * aAm.k),
				k = fZ * aAf,
				nv = Math.floor(Math.floor(aAm.fg) + .3 * aAm.j - .5),
				k = Math.floor(Math.floor(aAm.fi) - k),
				j = Math.floor(.4 * aAm.j + 2.5);
			return aAo = !1, bi.ds = !0, fg < nv || nv + j < fg || fi < k || (aAq = aAw(0, Math.floor((fi - k) / aAf), fZ - 1), nH(tt)), !0
		}(this, fg, fi);
		if ((fg -= aAm.fg) < .3 * aAm.j) aAo = !1, this.a4M(!aE.ny);
		else {
			if (fg < .7 * aAm.j) return aAo = !aAo, bi.ds = !0;
			this.a4O(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a4O(!0), this.a4O = function(aAu) {
		2 === aE.a2G ? (this.a4M(!1), u.v(3)) : (aAo = !1, this.a74 = !this.a74, this.a74 ? (aN.hj && aN.a4N(), a1.a2.setState(1)) : aAu || aN.a82(), bi.ds = !0, nH(this))
	}, this.aAv = function() {
		this.a74 = !1, aN.a82(), bi.ds = !0, nH(this)
	}, this.a45 = function(fg, fi) {
		return !!aE.ny && (0 <= aN.hm(fg, fi) || (aE.hi ? ((bi.eZ > aAn || !this.hm(fg, fi)) && aT.hm(fg, fi), bi.ds = !0, aAn = bi.eZ + 2e3) : aT.hm(fg, fi)), !0)
	}, this.ee = function() {
		aE.hi && aE.ny && bi.eZ > aAn - 1e3 && bi.eZ < aAn && (bi.ds = !0)
	}, this.a2P = function() {
		aE.hi && (this.a74 = !1, bi.ds = !0, nH(this))
	}, this.wr = function() {
		if (aE.hi) {
			if (aE.ny) {
				if (bi.eZ > aAn) return;
				if (bi.eZ > aAn - 1e3) return ws.globalAlpha = aAw(0, (1e3 - (bi.eZ - (aAn - 1e3))) / 1e3, 1), aAx(), void(ws.globalAlpha = 1)
			}
			aAx()
		}
	}
}

function cN() {
	var aB6, aB7, j, fg, fi, aB8, aB9;
	this.dk = function() {
		aB6 = new Array(2), aB7 = new Array(2), this.o0 = !1, aB9 = aB8 = jE = jD = 0, im = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.ik() ? .072 : .0502) * i.il)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aB6[aC] = document.createElement("canvas"), aB6[aC].width = j, aB6[aC].height = j, aB7[aC] = aB6[aC].getContext("2d", {
			alpha: !0
		});
		this.aAZ(),
			function() {
				for (var aBQ = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aB7[aC].clearRect(0, 0, j, j), aB7[aC].fillStyle = bE.pH, aB7[aC].beginPath(), aB7[aC].arc(j / 2, j / 2, j / 2 - aBQ, 0, 2 * Math.PI), aB7[aC].fill(), aB7[aC]
					.lineWidth = aBQ, aB7[aC].fillStyle = bE.pO, aB7[aC].strokeStyle = bE.pO, aB7[aC].beginPath(), aB7[aC].arc(j / 2, j / 2, j / 2 - aBQ, 0, 2 * Math.PI), aB7[aC].stroke(), a0S(aB7[aC], 0, 0, j, aBQ, .3, 0 === aC)
			}()
	}, this.a0L = function() {
		return -jD / im
	}, this.a0M = function() {
		return -jE / im
	}, this.oA = function(aBD, it) {
		jD = im * aBD - it
	}, this.oB = function(aBE, iu) {
		jE = im * aBE - iu
	}, this.hm = function(aBC, a8Z) {
		return aE.ny || ! function(aBC, a8Z) {
			return Math.pow(aBC - (fg + j / 2), 2) + Math.pow(a8Z - (fi + j / 2), 2) < j * j / 4 || Math.pow(aBC - (fg + j / 2), 2) + Math.pow(a8Z - (fi + 2 * j), 2) < j * j / 4
		}(aBC, a8Z) || bm.buffer.data[8].value ? (aI.oD() && (this.o0 = !0, aB8 = aBC, aB9 = a8Z), !1) : a8Z < fi + 1.25 * j ? this.a3p(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a3p(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a3m = function(aBC, a8Z) {
		var aBF, aBG, iw, iz;
		return !aI.oD() || (aBF = jD, aBG = jE, jD += iw = aB8 - aBC, jE += iz = aB9 - a8Z, ag.a3m(iw, iz), this.aBH(), aB8 = aBC, aB9 = a8Z, aBF !== jD) || aBG !== jE
	}, this.a3p = function(m9, mA, deltaY) {
		var o7;
		if (aI.oD()) {
			if (0 < deltaY) o7 = (o7 = 500 / (500 + deltaY)) < .5 ? .5 : o7;
			else {
				if (!(deltaY < 0)) return !1;
				o7 = 2 < (o7 = (500 - deltaY) / 500) ? 2 : o7
			}
			this.aBI(m9, mA, o7), bi.ds = !0
		}
		return !0
	}, this.aBI = function(fg, fi, fD) {
		var a4e;
		fD = a4e = (a4e = 1024 < (a4e = fD) * im ? 1024 / im : a4e) * im < .125 ? .125 / im : a4e, ag.zoom(fD, fg, fi),
			function(a4e, m9, mA) {
				im *= a4e, jD = (jD + m9) * a4e - m9, jE = (jE + mA) * a4e - mA, aT.aBH()
			}(fD, fg, fi)
	}, this.aBH = function() {
		var aBL = i.j / 16,
			aBM = 0,
			aBN = i.k / 16,
			aBO = 0;
		jD < -i.j + aBL && (aBM = -i.j + aBL - jD), jD > im * bV.fk - aBL && (aBM = im * bV.fk - aBL - jD), jE < -i.k + aBN && (aBO = -i.k + aBN - jE), jE > im * bV.fl - aBN && (aBO = im * bV.fl - aBN - jE), jD += aBM, jE += aBO, bd.oC(), ag.aBP(
			aBM, aBO)
	}, this.aAZ = function() {
		fg = i.j - j - bf.gap, fi = Math.floor(i.k / 2 - 1.25 * j)
	}, this.wr = function() {
		bm.buffer.data[8].value || (ws.drawImage(aB6[0], fg, fi), ws.drawImage(aB6[1], fg, Math.floor(fi + 3 * j / 2)))
	}
}

function cO() {
	var h, aBR, aBS, aBT, gap, aBU, aBV, aBW, aBX, aBY, a7v, aBZ, he, aBa, a9Z, aBb, aBc;

	function aBg() {
		aBT = Math.floor(.2 * (a1.a2.ik() ? .07 : .035) * i.il), aBT = a8W(a1.a2.ik() ? 3 : 1, aBT);
		var aBj = i.j / (h.length + gap);
		aBT = aBT < aBj ? aBj : aBT, a9Z = Math.floor((1 - gap) * aBT), aBR = 0, aBk()
	}

	function aBk() {
		aBR = (aBR = aBR < -20 ? -20 : aBR) > (h.length - 15) * aBT ? (h.length - 15) * aBT : aBR, aBV = Math.floor(aBR / aBT), aBW = (aBW = aBV + Math.floor(i.j / aBT)) > h.length - 1 ? h.length - 1 : aBW, aBV = (aBV = aBW < aBV ? aBW : aBV) < 0 ?
			0 : aBV;
		var lp = aBW;
		aBU = aBS / h[lp];
		for (var aC = aBW - 1; aBV <= aC; aC--) h[aC] > h[lp] && (lp = aC, aBU = aBS / Math.pow(h[aC], aBa))
	}

	function aBn(fg) {
		fg = Math.floor((aBR + i.j - fg - gap * aBT) / aBT);
		return (fg = fg < -1 ? -1 : -1 === fg ? 0 : fg > h.length - 1 ? -1 : fg) !== aBX && (aBX = fg, -1 === aBb && 0 === aBX && aU.aBd && (aBb = setInterval(aBo, 100)), 1)
	}

	function aBp(aC) {
		var aBr = Math.floor(aBU * Math.pow(h[aC], aBa));
		ws.fillRect(aBR + i.j - (aC + 1) * aBT, i.k - aBr, a9Z, aBr)
	}

	function aBo() {
		var h7;
		0 !== (aBX = 8 === ab.a3P() ? -1 : aBX) ? (aBc = (new Date).getTime(), clearInterval(aBb), aBb = -1) : (h7 = h[1] / 864e3, -1 !== aBc && (h7 += ((new Date).getTime() - aBc) * h[1] / 864e5, aBc = -1), 0 < h7 && (h[0] += Math.floor(h7), bi
			.ds = !0))
	}
	this.aBd = !1, this.dk = function() {
		aBc = aBb = -1, aBX = -(aBa = 1), this.aBe = !1, he = 0, aBZ = new Date, aBR = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aBS = Math.floor(.15 * i.k), aBY = (aBY = Math.floor((a1.a2.ik() ? .018 : .0137) * i.il)) < 2 ? 2 : aBY, a7v = bD.sK.u8(1, aBY), aBg()
	}, this.aBh = function(aBi) {
		var aC;
		for (this.aBd = !0, aC = 0; aC < aBi.length; aC++) h.unshift(aBi[aC]);
		aBg(), bi.ds = !0
	}, this.aBl = function() {
		aBk()
	}, this.a3m = function(fg, fi) {
		fi > i.k - .6 * aBS ? this.aBe ? fg !== he && (aBR += fg - he, he = fg, aBk(), aBn(fg), this.aBe = -1 !== aBX, bi.ds = !0) : aBn(fg) && (bi.ds = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aBX && (this.aBe = !1, aBX = -1, bi.ds = !0)
	}, this.a3p = function(fg, deltaY) {
		-1 !== aBX && (aBR += Math.floor(deltaY), aBk(), aBn(fg), bi.ds = !0)
	}, this.hm = function(fg, fi) {
		this.a3m(fg, fi), -1 !== aBX && (he = fg, this.aBe = !0)
	}, this.a4B = function() {
		-1 !== aBX && (this.aBe = !1)
	}, this.wr = function() {
		ws.fillStyle = bE.pR;
		for (var aBs, month, ea, ug, aBv, aBw, nw, aBx, aBy, aC = aBW; aBV <= aC; aC--) aBp(aC);
		this.aBd && 0 === aBV && (ws.fillStyle = bE.py, aBp(0)), -1 !== aBX && (ws.fillStyle = bE.pQ, aBp(aBX)), -1 !== aBX && (ws.font = a7v, bD.sK.textBaseline(ws, 2), (ea = new Date).setTime(aBZ.getTime() - 1e3 * aBX * 60 * 60 * 24), month =
			"month", aBs = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(ea), aBs = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(ea)), aBs = aBs + ", " + ea.getUTCDate() + " " + month + " " + ea.getFullYear(), month = 1 === h[aBX] ? L(115) : L(116), month = bD.tI.a1X(h[aBX]) + " " + month, ea = Math.floor(ws.measureText(aBs).width), ug = Math
			.floor(ws.measureText(month).width), aBv = Math.floor(.5 * (ea + aBY)), aBw = (aBw = aBR + i.j - (aBX + 1) * aBT) < aBv ? aBv : aBw > i.j - aBv ? i.j - aBv : aBw, nw = i.k - Math.floor(aBU * Math.pow(h[aBX], aBa)), aBx = Math
			.floor(1.1 * aBY), aBy = nw > i.k - aBx ? i.k - aBx : nw, ws.fillStyle = bE.pL, ws.fillRect(i.j - ug - aBY, aBy - aBx, ug + aBY, aBx), ws.fillRect(aBw - aBv, i.k - aBx, ea + aBY, aBx), ws.fillStyle = bE.pO, bD.sK.textAlign(ws, 2),
			ws.fillText(month, Math.floor(i.j - .5 * aBY), aBy), bD.sK.textAlign(ws, 1), ws.fillText(aBs, aBw, i.k), ws.strokeStyle = bE.pS, ws.lineWidth = 1, ws.beginPath(), ws.moveTo(0, nw), ws.lineTo(i.j, nw), ws.closePath(), ws.stroke())
	}
}

function cP() {
	var a7v, j, fi, aBz, aC0, aC1, canvas, ou, a9S, a5k, aC2, aC3, aC4, aC5;
	this.fg = 0, this.k = 0, this.dk = function() {
		aC1 = aE.a6f, aC3 = "rgba(0,100,0,0.8)", aC4 = "rgba(150,0,0,0.8)", a9S = aC2 = !0, a5k = ah.hb[aE.fJ], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.ik() ? .305 : .24) * i.il), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), a7v = bD.sK.u8(1, Math.floor(.8 * this.k)), aC0 = bD.sK.u8(1, Math.floor(.45 * this.k)), aC5 = Math.floor(.5 * this.k), bV.yj
			.font = a7v, fi = bf.gap, aBz = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, ou = canvas.getContext("2d", {
				alpha: !0
			}), bD.sK.textBaseline(ou, 1), bD.sK.textAlign(ou, 1), this.aC6()
	}, this.a9v = function() {
		return a1.a2.ik() && i.j < 1.2 * i.k
	}, this.aAZ = function() {
		this.a9v() ? this.fg = i.j - j - bf.gap : this.fg = Math.floor(aW.aC7() + (i.j - aW.aC7() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.nG = function() {
		a9S && (a9S = !1, this.aC6())
	}, this.aC6 = function() {
		ou.font = a7v, ou.clearRect(0, 0, j, this.k), ou.fillStyle = aC2 ? aC3 : aC4, ou.fillRect(0, 0, j, this.k), ou.fillStyle = bE.pQ;
		var ej = this.aC8(),
			aCA = (this.aC9(), ou.fillStyle = ah.hb[aE.fJ] >= af.ka(aE.fJ) ? bE.pv : bE.pO, bD.tI.a1X(a5k)),
			aCA = (ou.fillText(aCA, Math.floor(j / 2), aC5), ou.measureText(aCA).width),
			aCB = (ou.font = aC0, ou.fillStyle = 9 === ej ? bE.qV : bE.pO, af.aCC),
			aCD = "+" + aCB,
			ug = ou.measureText(aCD).width,
			aCE = Math.floor(this.k / 12),
			aCA = .5 * (j + aCA) + aCE;
		(aCA + ug + aBz <= j || 1e3 <= aCB && (aCD = "+" + Math.floor(aCB / 1e3) + "K", aCA + (ug = ou.measureText(aCD).width) + aBz <= j)) && ou.fillText(aCD, Math.floor(aCA + .5 * ug), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && ou.fillText(9 - ej, Math.floor(2 * aBz + aCE), Math.floor(.3 * this.k)), ou.fillStyle = bE.pO, ou.fillRect(0, 0, j, 1), ou.fillRect(0, 0, 1, this.k), ou.fillRect(0, this.k - 1, j, 1), ou.fillRect(j - 1, 0, 1,
				this.k)
	}, this.aC8 = function() {
		var ej = bi.kr() % 100,
			zO = (ej = 9 - bO.g0(ej -= ej % 10, 10), Math.floor(ej * (this.k - aBz) / 9));
		return ou.fillRect(0, zO, aBz, this.k - zO), ou.fillRect(j - aBz, zO, aBz, this.k - zO), ej
	}, this.aC9 = function() {
		ou.fillRect(aBz, this.k - aBz, Math.floor((j - 2 * aBz) * ah.hb[aE.fJ] / aC1), aBz)
	}, this.ee = function() {
		var h7 = aE.fJ;
		bD.gv.hl(h7) && (h7 = ah.hb[h7] - ah.a5j[h7], a5k !== h7 ? (aC1 = a8W(h7, aC1), aC2 = a5k < h7 && 10 <= h7, a5k = h7, a9S = !0) : bi.kr() % 10 == 9 && (a9S = !0))
	}, this.wr = function() {
		0 === ah.nU[aE.fJ] || aE.hx || 2 === ah.a5a[aE.fJ] || ws.drawImage(canvas, this.fg, fi)
	}
}

function cQ() {
	var aCF, aCG, aCH, aCI, aCJ, aCK, aCL, aCM, aCN, aCO, aCP, aCQ, aCR, aCS, aCT, aCU, aCV, aCW, aCX, aCY, aCZ, aCa, position, aCb, aCc, aCd, aCe, aCf, aCg = 1,
		aCh = 1,
		aCi = "";
	var leaderboardHasChanged = true;
	this.playerPos = aE.fJ;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kf[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kf[aE.fJ]);
	}

	function aCk() {
		aCL.clearRect(0, 0, aCF, aAA),
			aCL.fillStyle = aCf ? bE.qI : bE.qE,
			aCL.fillRect(0, 0, aCF, aCQ),
			aCL.fillStyle = bE.pK,
			aCL.fillRect(0, aCQ, aCF, aAA - aCQ);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aCJ)
				position = (rivalsCount > aCJ ? rivalsCount : aCJ) - aCJ;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kf[aE.fJ]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aCa = -1;
		if (__fx.leaderboardFilter.enabled && aCa >= __fx.leaderboardFilter.filteredLeaderboard.length) aCa = -1;
		if (__fx.leaderboardFilter.showingRivals && aCa + position >= __fx.leaderboardFilter.rivalsData.length) aCa = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= position && ownClanIndex < position + aCJ) aCm(ownClanIndex - position, bE.pn);
			})() :
			(playerPos >= position && aCm(playerPos - position, bE.pn),
				0 !== kf[aE.fJ] && 0 === position && aCm(0, bE.qM))
		),
		-1 !== aCa && aCm(aCa, bE.pP),
			aCL.fillStyle = bE.pK,
			//console.log("drawing", aCa),
			aCL.clearRect(0, aAA - __fx.leaderboardFilter.tabBarOffset, aCF, __fx.leaderboardFilter.tabBarOffset);
		aCL.fillRect(0, aAA - __fx.leaderboardFilter.tabBarOffset, aCF, __fx.leaderboardFilter.tabBarOffset);
		aCL.fillStyle = bE.pO,
			aCL.fillRect(0, aCQ, aCF, 1),
			aCL.fillRect(0, aAA - __fx.leaderboardFilter.tabBarOffset, aCF, 1),
			__fx.leaderboardFilter.drawTabs(aCL, aCF, aAA - __fx.leaderboardFilter.tabBarOffset, bE.pn),
			aCL.fillRect(0, 0, aCF, bf.a1E),
			aCL.fillRect(0, 0, bf.a1E, aAA),
			aCL.fillRect(aCF - bf.a1E, 0, bf.a1E, aAA),
			aCL.fillRect(0, aAA - bf.a1E, aCF, bf.a1E), aCL.font = aCG, bD.sK.textBaseline(aCL, 1), bD.sK.textAlign(aCL, 1), aCL.fillText(aCi, Math.floor((aCF + aCQ - 22) / 2), Math.floor(aCO + aCH / 2));
		__fx.playerList.drawButton(aCL, 12, 12, aCQ - 22);
		var fs, h8 = playerPos < position + aCJ - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) h8 = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aCJ; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ah.hN[repId], ah.a0j[repId], ah.a5a[repId]]);
					ah.hN[repId] = rivalsEntry.territory;
					ah.a0j[repId] = "[" + rivalsEntry.clan + "]";
					ah.a5a[repId] = 0;
				}
				for (aCL.font = aCI, bD.sK.textAlign(aCL, 0), fs = aCJ - h8; 0 <= fs; fs--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[fs + position];
					if (rivalsEntryLeft !== undefined)
						aCn(rivalsEntryLeft.representativeId), aCo(fs, fs + position, rivalsEntryLeft.representativeId);
				}
				for (bD.sK.textAlign(aCL, 2), fs = aCJ - h8; 0 <= fs; fs--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[fs + position];
					if (rivalsEntryRight !== undefined)
						aCn(rivalsEntryRight.representativeId), aCp(fs, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hN[entry[0]] = entry[1];
					ah.a0j[entry[0]] = entry[2];
					ah.a5a[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aCJ)
				position = (result.length > aCJ ? result.length : aCJ) - aCJ;
			//if (position >= result.length) position = result.length - 1;
			for (aCL.font = aCI, bD.sK.textAlign(aCL, 0), fs = aCJ - h8; 0 <= fs; fs--) {
				const pos = result[fs + position];
				if (pos !== undefined)
					aCn(mV[pos]), aCo(fs, pos, mV[pos]);
			}
			for (bD.sK.textAlign(aCL, 2), fs = aCJ - h8; 0 <= fs; fs--) {
				const pos = result[fs + position];
				if (pos !== undefined)
					aCn(mV[pos]), aCp(fs, mV[pos]);
			}
		} else {
			for (aCL.font = aCI, bD.sK.textAlign(aCL, 0), fs = aCJ - h8; 0 <= fs; fs--)
				aCn(mV[fs + position]), aCo(fs, fs + position, mV[fs + position]);
			for (bD.sK.textAlign(aCL, 2), fs = aCJ - h8; 0 <= fs; fs--)
				aCn(mV[fs + position]), aCp(fs, mV[fs + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == h8 && (aCn(aE.fJ), bD.sK.textAlign(aCL, 0), aCo(aCJ - 1, kf[aE.fJ], aE.fJ), bD.sK.textAlign(aCL, 2), aCp(aCJ - 1, aE.fJ)), 0 === position && (h8 = .7 * aCR / ac.get(4).height, aCL.setTransform(
			h8, 0, 0, h8, Math.floor(aCS + .58 * aCR + .5 * h8 * ac.get(4).width), Math.floor(aCO + aCH + .4 * aCR)), aCL.imageSmoothingEnabled = !0, aCL.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aCL.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aCn(player) {
		aE.iT && (aCL.fillStyle = bj.aCr[bj.aCs[player]])
	}

	function aCm(aC, aCt) {
		aCL.fillStyle = aCt, aC = aCJ - 1 < aC ? aCJ - 1 : aC;
		aCt = Math.floor((aC === aCJ - 1 ? 2 : 0 === aC ? 1.15 : 1) * aCR), aCt = aC === aCJ - 2 ? Math.floor(aCQ + 9.15 * aCR) - Math.floor(aCQ + 8.15 * aCR) : aCt;
		aCL.fillRect(0, Math.floor(aCQ + (aC + (0 === aC ? 0 : .15)) * aCR), aCF, aCt)
	}

	function aCo(xu, a5z, aC) {
		aCL.fillText(aCW[a5z], aCS, Math.floor(aCO + aCH + (xu + .5) * aCR)), 1 === ah.a5a[aC] && (aCL.font = "italic " + aCI);
		a5z = Math.floor(aCO + aCH + (xu + .5) * aCR);
		aCL.fillText(ah.a0j[aC], aCT, a5z), 0 !== ah.a5a[aC] && (aCL.font = aCI), aC < aE.ku && 2 !== ah.a5a[aC] || aCL.fillRect(aCT, a5z + .35 * aCg, aCV[aC], Math.max(1, .1 * aCg))
	}

	function aCp(xu, aC) {
		aCL.fillText(ah.hN[aC], aCU, Math.floor(aCO + aCH + (xu + .5) * aCR))
	}
	this.dk = function() {
		var aC;
		for (u.z.uS[0] = 0, aCe = aCd = aCb = 0, aCf = aCc = !1, aCa = -1, aCJ = a1.a2.ik() ? 6 : 10, aCh = (position = 0) === (aCh = bm.buffer.data[11].value) ? 10 : 1 === aCh ? 5 : 1, aCZ = !1, aCX = new Uint16Array(aCJ + 1), aCY =
			new Uint32Array(aCJ + 1), aCN = aE.fW, mV = new Uint16Array(aCN), kf = new Uint16Array(aCN), aC = aCN - 1; 0 <= aC; aC--) mV[aC] = aC, kf[aC] = aC;
		this.resize(!0), aCV = new Uint16Array(aE.fW);
		var aCj = Math.floor(aCF - aCT - aCS - aCM);
		for (aCW = new Array(aE.fW), aCL.font = aCI, aC = aE.fW - 1; 0 <= aC; aC--) aCW[aC] = aC + 1 + ".", ah.a0j[aC] = bD.ou.a5J(ah.a2w[aC], aCI, aCj), aCV[aC] = Math.floor(aCL.measureText(ah.a0j[aC]).width);
		aCk()
	}, this.resize = function(dk) {
		if (aAA = a1.a2.ik() ? (aCF = Math.floor(.335 * i.il), Math.floor(aCJ * aCF / 8)) : (aCF = Math.floor(.27 * i.il), Math.floor(aCJ * aCF / 10)), aCF = Math.floor(.97 * aCF), (aCK = document.createElement("canvas")).width = aCF, aCK
			.height = aAA, aCL = aCK.getContext("2d", {
				alpha: !0
			}), aCO = .025 * aCF, aCH = .16 * aCF, aCP = 0 * aCF, aCQ = Math.floor(.45 * aCO + aCH), aCR = (aAA - aCH - 2 * aCO - aCP) / aCJ,
			aCK.height = aAA += aCR, __fx.leaderboardFilter.tabBarOffset = Math.floor(aCR * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aAA - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aCF,
			aCG = bD.sK.u8(1, Math.floor(.55 * aCH)), aCg = Math.floor((a1.a2.ik() ? .67 : .72) * aCR), aCI = bD.sK.u8(0, aCg), aCL.font = aCI, aCS = Math.floor(.04 * aCF), aCT = Math.floor((a1.a2.ik() ? .195 : .18) * aCF), aCM = Math.floor(aCL
				.measureText("00920600").width), aCL.font = aCG, aCU = aCF - aCS, !dk) {
			aCL.font = aCI;
			for (var aC = aE.fW - 1; 0 <= aC; aC--) aCV[aC] = Math.floor(aCL.measureText(ah.a0j[aC]).width);
			aCk()
		}
		aCi = bD.ou.a5J(L(117), aCG, .96 * aCF)
	}, this.aC7 = function() {
		return aCF
	}, this.nG = function(by, aCl) {
		(aCl || aCZ && (by || bi.kr() % aCh == 0)) && (aCZ = !1, aCk())
	}, this.ee = function() {
		! function() {
			for (var fs = aCN - 1; 0 <= fs; fs--) 0 === ah.nU[mV[fs]] && ! function(fs) {
				var aD1 = mV[fs];
				aCN--;
				for (var aC = fs; aC < aCN; aC++) mV[aC] = mV[aC + 1], kf[mV[aC]] = aC;
				mV[aCN] = aD1, kf[mV[aCN]] = aCN
			}(fs)
		}();
		for (var aCz, oD = aCN - 1, fs = 0; fs < oD; fs++) ah.hN[mV[fs]] < ah.hN[mV[fs + 1]] && (aCz = mV[fs], mV[fs] = mV[fs + 1], mV[fs + 1] = aCz, kf[mV[fs]] = fs, kf[mV[fs + 1]] = fs + 1);
		! function() {
			for (var ea = aCZ, h8 = (aCZ = !0, kf[aE.fJ] >= aCJ - 1 ? aCJ - 2 : aCJ - 1), aC = h8; 0 <= aC; aC--)
				if (aCX[aC] !== mV[aC] || aCY[aC] !== ah.hN[mV[aC]]) return;
			(h8 != aCJ - 2 || aCX[aCJ] === kf[aE.fJ] && aCY[aCJ] === ah.hN[aE.fJ]) && (aCZ = ea)
		}();
		for (var aC = aCJ - 1; 0 <= aC; aC--) aCX[aC] = mV[aC], aCY[aC] = ah.hN[mV[aC]];
		aCX[aCJ] = kf[aE.fJ], aCY[aCJ] = ah.hN[aE.fJ];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hm = function(fg, fi) {
		if (a1D(fg, fi)) {
			if (__fx.utils.isPointInRectangle(fg, fi, bf.gap + 12, bf.gap + 12, aCQ - 22, aCQ - 22)) __fx.playerList.display(ah.a2w);
			else {
				if (fi - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fg - bf.gap);
				fg = aD3(fi);
				0 <= fg ? (aCb = bi.eZ, aCc = !0, aCd = aCe = fg, bM.a4P() && (fg = aAw(-1, aCe, aCJ), aCa !== (fg = fg === aCJ ? -1 : fg)) && (aCa = fg, aCk(), bi.ds = !0)) : (aCf && (aCf = !1, aCk(), bi.ds = !0), u.v(10, 0, new aD4({
					aD5: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aCk(), bi.ds = !0
	};

	function aD3(fi) {
		return (fi -= bf.gap + aCQ) < 0 ? Math.floor(fi / aCR) - 1 : fi < (aCJ - 1) * aCR ? Math.floor(fi / aCR) : fi < aAA - aCQ ? aCJ - 1 : (fi -= aAA - aCQ, aCJ + Math.floor(fi / aCR))
	}

	function a1D(fg, fi) {
		return fg >= bf.gap && fg < bf.gap + aCF && fi >= bf.gap && fi < bf.gap + aAA
	}
	this.a3m = function(fg, fi) {
		var ea, aD2;
		if (__fx.utils.isPointInRectangle(fg, fi, bf.gap + 12, bf.gap + 12, aCQ - 22, aCQ - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fg, fi, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fg - bf.gap)) return aD2 = aD3(fi), fg = a1D(fg, fi), fi = !(!(aD2 < 0 && fg) || bM.a4P()), aCc ? (ea = position, (position = aAw(0, position += aCd - aD2, aE.fW - aCJ)) !== ea ? (aCf = fi,
			aD2 = aAw(-1, aCd = aD2, aCJ), aCa = aD2 = aD2 !== aCJ && fg ? aD2 : -1, aCk(), bi.ds = !0) : aCf !== fi && (aCf = fi, aCk(), bi.ds = !0), !0) : (aD2 = (aD2 = aAw(-1, aD2, aCJ)) === aCJ || !fg || bM.a4P() ? -1 : aD2, (aCa !==
			aD2 || aCf !== fi) && (aCa = aD2, aCf = fi, aCk(), bi.ds = !0))
	}, this.a4B = function(fg, fi) {
		if (!aCc) return !1;
		aCc = !1;
		var aD2 = aD3(fi);
		var isEmptySpace = false;
		return bM.a4P() && -1 !== aCa && (aCa = -1, aCk(), bi.ds = !0), bi.eZ - aCb < 350 && aCe === aD2 && -1 !== (aD2 = (aD2 = aAw(-1, aD2, aCJ)) !== aCJ && a1D(fg, fi) ? aD2 : -1) && (fg = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aD2 + position] === undefined, __fx.leaderboardFilter.rivalsData[aD2 + position]?.representativeId ?? aE.fJ) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), mV[__fx.leaderboardFilter.filteredLeaderboard[aD2 + position] ?? (isEmptySpace = true, kf[aE.fJ])]) : mV[aD2 + position]),
			aD2 === aCJ - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kf[aE.fJ]) >=
			position + aCJ - 1 && (fg = aE.fJ), !isEmptySpace && aE.iT && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fg, ah.a2w, aE.lE), 0 === ah.nU[fg] || isEmptySpace || aE.hx && !aE.lE && !aE.hi &&
			fg !== aE.fJ || aI.nq(fg, 800, !1, 0)), !0
	}, this.a3p = function(fg, fi, deltaY) {
		var aD8;
		return !(aCc || aE.ny || (aD8 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a1D(fg, fi)) || (fg = (fg = aAw(-1, aD3(fi), aCJ)) === aCJ || bM.a4P() ? -1 : fg, 0 < deltaY ? position < aE.fW - aCJ && (position += Math.min(aE.fW - aCJ -
			position, aD8), aCa = fg, aCk(), bi.ds = !0) : 0 < position && (position -= Math.min(position, aD8), aCa = fg, aCk(), bi.ds = !0), 0))
	}, this.wr = function() {
		ws.drawImage(aCK, bf.gap, bf.gap)
	}
}

function cR() {
	var canvas, ou, fg, fi, aBr, aD9, gap, aDA, fontSize, aDB, aDC, aDD, aDE, aDF, aDG, aDH, aDI, aDJ;

	function aDN() {
		ou.clearRect(0, 0, aX.j, aX.k), ou.fillStyle = bE.pL, ou.fillRect(0, 0, aX.j, aX.k), ou.fillStyle = bE.pi, fD = 0 < aDH ? aDH : aDE[4] / 1e4, ou.fillRect(0, aX.k - aBr - 1, Math.floor(fD * aX.j), aBr), ou.fillStyle = bE.pO, ou.fillRect(0, 0,
			aX.j, 1), ou.fillRect(0, 0, 1, aX.k), ou.fillRect(aX.j - 1, 0, 1, aX.k), ou.fillRect(0, aX.k - 1, aX.j, 1), ou.fillRect(0, aX.k - aBr - 1, aX.j, 1);
		for (var fD, aDP, ea = 0, aC = 0; aC < aDD.length; aC++) aDF[aC] ? (bD.sK.textAlign(ou, 0), aDP = Math.floor((aD9 - aBr + 2 * aDA) * (aC - ea + 1) / (aDD.length + 1) - .7 * aDA), ou.fillText(aDD[aC], gap, aDP), bD.sK.textAlign(ou, 2), 5 ===
			aC && 0 !== ah.nU[aE.fJ] && ah.hb[aE.fJ] >= af.ka(aE.fJ) ? (ou.fillStyle = bE.qK, ou.fillText(aDL(aC), aX.j - gap, aDP), ou.fillStyle = bE.pO) : ou.fillText(aDL(aC), aX.j - gap, aDP)) : ea++
	}

	function aDL(aC) {
		return aC < 3 ? aDE[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.tI.a6J(aDE[aC] / 100, 2) : aC < 7 ? bD.tI.a1X(aDE[aC]) : aC === 7 ? aX.aDQ(aDE[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hN, aE.fJ) : __fx.utils.getDensity(aE.fJ)
	}

	function aDK() {
		ah.hN[aE.fJ] !== aDE[6] && (aDE[6] = ah.hN[aE.fJ], aDB++)
	}
	this.dk = function() {
		aDH = aDI = 0, (aDC = new Array(8))[0] = L(118), aDC[1] = aE.lE ? L(119) : L(120), aDC[2] = L(121), aDC[3] = L(122), aDC[4] = L(123), aDC[5] = L(124, 0, "Interest"), aDC[6] = L(125), aDC[7] = L(126),
			aDC.push("Max Troops", "Density"), // add aDC
			(aDD = new Array(aDC.length)).fill(""), (aDE = new Array(aDC.length))[0] = aE.lE ? 0 : aE.ku, aDE[1] = aE.lE ? am.lQ : aE.lG, aDE[2] = aE.a2I, aDE[3] = 0, aDE[4] = bO.g0(1e4 * ah.hN[0], Math.max(aE.ke, 1)), aDE[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.g0(700 * aE.data.iIncomeValue, 64) : bO.g0(700 * aE.data.iIncomeData[aE.fJ], 64), aDE[6] = 0, aDK(), aDE[7] = 0, aDG = aDL(6), (aDF = new Array(aDC.length)).fill(!0), aDJ = 0, aDJ =
			aE.lE ? (aDF[0] = !1, aDF[2] = !1, aDF[3] = !1, 3) : (aDF[3] = !1, 1), aDB = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.ik() ? .1646 : .126) * 1.25 * i.il), this.k = Math.floor(1.18 * this.j), aBr = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aDA = .04 * this.j, aD9 = this.k, this.k -= Math.floor(aDJ * (this.k -
			2 * aBr) / aDC.length), fontSize = Math.floor(.7 * (aD9 - aBr) / aDC.length);
		var a7v = bD.sK.u8(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(a7v, j) {
				for (var aC = 0; aC < aDD.length; aC++) aDD[aC] = bD.ou.a5J(aDC[aC], a7v, j)
			}((ou = canvas.getContext("2d", {
				alpha: !0
			})).font = a7v, .575 * this.j), bD.sK.textBaseline(ou, 1), ou.lineWidth = 1, this.a6Y(), this.aAZ(), aV.aAZ(), aDN()
	}, this.aAZ = function() {
		fg = i.j - this.j - bf.gap
	}, this.aDO = function() {
		fi = bf.gap
	}, this.a6Y = function() {
		fi = bf.gap + (aV.a9v() && 0 !== ah.nU[aE.fJ] && !aE.hx ? aV.k + bf.gap : 0)
	}, this.nG = function(by) {
		(by || 100 <= aDB) && (aDB = 0, aDN())
	}, this.a7H = function() {
		return aDE[7]
	}, this.aDQ = function(value) {
		var lp = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lp) / 1e3);
		return value < 10 ? lp + ":0" + value : lp + ":" + value
	}, this.ee = function() {
		var aDb, per;
		aDF[0] && aE.a2J - aE.a2I !== aDE[0] && (aDE[0] = aE.a2J - aE.a2I, aDB++), am.lQ - aDE[0] !== aDE[1] && (aDE[1] = am.lQ - aDE[0], aDB++), this.n7(), (aDb = af.aDc(aE.fJ)) !== aDE[5] && (aDE[5] = aDb, aDB++), aDK(), aDE[7] += bi.aDd, aDb =
			aDL(7), aDG !== aDb && (aDG = aDb, aDB += 100), aDb = aE.iT ? bk.lR() : ah.hN[mV[0]], per = bO.g0(1e4 * aDb, Math.max(aE.ke, 1)), aDE[3] = aDb, aDE[4] !== per && (aDB++, aDE[4] = per), 8 === aE.lC && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.gv.hl(aC)) return bU.a1s.a2F(), 1;
				return
			}() || aDE[3] < aE.ke || ! function() {
				for (var aC = am.lQ - 1; 0 <= aC; aC--)
					if (0 < ah.h1[am.lV[aC]].length) return;
				return 1
			}() || bQ.lj.aDa().length || aE.iT && bk.lR(1) < aE.ke || bU.a1s.a2F()
	}, this.n7 = function() {
		aDF[2] && aE.a2I !== aDE[2] && (aDE[2] = aE.a2I, aDB += 2 === aE.a2G ? 100 : 1)
	}, this.aDX = function() {
		return aDE[3] === aE.ke
	}, this.aDe = function(aC) {
		var uw, aDf, ea;
		return 2 !== aE.a2G && (aC % 2 == 1 && (aW.nG(1, 1), bi.ds = !0), aC === aE.a6h ? (aDH = 0, aDN(), !1) : (-1 !== aC || 0 !== aDI) && (aDf = aDH, aDH = aE.hi ? aC / aE.a6h : (ea = performance.now(), 0 <= aC && (uw = ea - 392 * aC, aDI =
			0 === aC || uw < aDI ? uw : aDI), 1 < (aDH = (ea - aDI) / (392 * aE.a6h)) ? 1 : aDH), aDN(), aDH !== aDf))
	}, this.wr = function() {
		ws.drawImage(canvas, fg, fi)
	}
}

function cS() {
	var iL, aDg, j, k, aAf, aDh, aDi, a9w, canvas, nh, aDj;

	function a0M() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.dk = function() {
		aDj = iL = !1, aAf = .61, aDh = .07, aDi = .09, nh = a9w = k = 0
	}, this.resize = function() {
		var ou, nv, ej, aDo, aDp, a80;
		iL && (j = aDk(j = a1.a2.ik() ? Math.floor(.69 * i.il) : Math.floor(.5 * i.il), a8W(i.j - 2 * bf.gap, 10)), j = aDk(j, Math.floor(3.57 * a8W(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, ou = canvas.getContext("2d", {
				alpha: !0
			}), nv = Math.floor(1 + k / 40), ou.clearRect(0, 0, j, k), ou.fillStyle = bE.pL, ou.fillRect(nv, nv, j - 2 * nv, k - 2 * nv), ou.lineJoin = "bevel", ou.lineWidth = 2 * nv, ou.strokeStyle = bE.pO, ou.strokeRect(nv, nv, j - 2 * nv,
				k - 2 * nv), ou.imageSmoothingEnabled = !1, ej = ac.get(aDg), aDo = ej.width, a80 = (1 === aDg ? .85 : 21 === aDg ? .666 : .9) * aAf * k / (aDp = ej.height), ou.setTransform(a80, 0, 0, a80, Math.floor((j - a80 * aDo) / 2),
				Math.floor((k - a80 * aDp) / 2)), ou.drawImage(ej, 0, 0), ou.setTransform(1, 0, 0, 1, Math.floor(j - aDi * k - aDh * k - nv), Math.floor(nv + aDh * k)),
			function(ou, fZ) {
				ou.lineWidth = Math.floor(1 + k / 80), ou.strokeStyle = bE.pO, ou.beginPath(), ou.moveTo(0, 0), ou.lineTo(fZ, fZ), ou.moveTo(0, fZ), ou.lineTo(fZ, 0), ou.stroke()
			}(ou, Math.floor(aDi * k)), ou.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(g1, aDm, aAR, aDn) {
		iL || aDn && aDj || (aDg = aAR ? 21 : g1 ? 1 : 2, iL = aDj = !0, this.resize(), aM.tZ(), aS.aAM(), nh = bi.eZ, a9w = aDm ? 1 : 0)
	}, this.ee = function() {
		!iL || 1 <= a9w || (a9w = 1 < (a9w += 5e-4 * (bi.eZ - nh)) ? 1 : a9w, nh = bi.eZ, bi.ds = !0)
	}, this.hm = function(fg, fi) {
		return !(!iL || a9w <= 0 || (fg -= Math.floor((i.j - j) / 2), fi -= a0M(), fg < 0) || fi < 0 || j < fg || k < fi || (j - k / 3 < fg && fi < k / 3 && (iL = !1, bi.ds = !0), 0))
	}, this.wr = function() {
		!iL || a9w <= 0 || (ws.globalAlpha = a9w, ws.drawImage(canvas, Math.floor((i.j - j) / 2), a0M()), ws.globalAlpha = 1)
	}
}

function dT() {
	var aDr, aDs = new Uint8Array(5),
		aDt = new Uint8Array(5);
	this.aDu = new aDv, this.dk = function() {
		for (var g1 = bm.buffer.data[119].value, aC = 0; aC < aDs.length; aC++) aDs[aC] = (g1 >> 2 * aC) % 4
	}, this.a6t = function() {
		aDr = [L(127), "", L(128, [ba.aDw[28]]), L(129, [ba.aDw[26]]), L(130, [ba.aDw[0]])], this.aDu.dk()
	}, this.ee = function() {
		this.aDu.ee()
	}, this.a7e = function(id) {
		1 < id && bM.sm() || ! function(eI) {
			if (3 === aDs[eI] || 1 === aDt[eI]) return;
			if (aDt[eI] = 1, !(Math.random() < .6)) {
				aDs[eI]++;
				for (var g1 = 0, aC = 0; aC < aDs.length; aC++) g1 += aDs[aC] << 2 * aC;
				bm.qo.qp(119, g1)
			}
			return 1
		}(id) || aO.a8b(aDr[id])
	}
}

function aDv() {
	var aDy;
	this.dk = function() {
		aDy = !1
	}, this.ee = function() {
		var h7;
		if (function() {
				if (!aDy) {
					if (bi.kr() % 30 != 9) return;
					if (!bD.gv.mR(90)) return;
					aDy = !0
				}
				return 1
			}() && (! function() {
				var sC = aO.a8w(956);
				if (sC) {
					if (bD.gv.ls(sC.player)) return 1;
					aO.a8v(956, 0)
				}
				return
			}() && (-1 === (h7 = (aE.iT ? function() {
				var id = bk.lT(),
					fZ = am.lQ;
				if (bj.lH[id])
					for (var a24 = am.lV, fX = bj.fX, aC = 0; aC < fZ; aC++) {
						var h7 = a24[aC];
						if (fX[h7] !== id) return h7
					} else if (1 < fZ) return mV[fZ - 1];
				return -1
			} : function() {
				for (var aE6 = am.lQ, lo = am.lV, aE7 = kf, aC = 0; aC < aE6; aC++) {
					var h7 = lo[aC];
					if (0 !== aE7[h7]) return h7
				}
				return -1
			})()) ? ! function() {
				var sC = aO.a8w(957);
				if (sC && sC.a8S) {
					if (ad.fQ(sC.a8S.fL << 2)) return 1;
					aO.a8v(957, 0)
				}
				return
			}() : (aO.a0i(0, L(131, [ah.a0j[h7]]), 956, h7, bE.pO, bE.pL, -1, !0), 0)))) {
			var fZ = ap.jY.m4;
			if (0 !== fZ)
				for (var buffer = ap.jY.buffer, aC = 0; aC < fZ; aC++) {
					var fL = buffer[aC];
					if (ad.fQ(fL << 2)) return void aO.a0i(0, L(132, [bP.fh(fL), bP.fj(fL)]), 957, 0, bE.pO, bE.pL, -1, !0, void 0, {
						fs: 1,
						fL: fL
					})
				}
		}
	}
}

function dU() {
	this.aE8 = new aE9, this.dk = function() {
		this.aE8.resize()
	}
}

function aE9() {
	this.resize = function() {
		var aC, aEA = document.head.querySelector("style#ss");
		if (aEA)
			for (aC = aEA.sheet.cssRules.length - 1; 0 <= aC; aC--) aEA.sheet.deleteRule(0);
		else(aEA = document.createElement("style")).id = "ss", document.head.appendChild(aEA);
		var aAn = "::-webkit-scrollbar",
			aEB = bD.sK.sT(bf.uA),
			iV = bD.sK.sT(Math.max(bD.sK.tb(.012), 8));
		try {
			aEA.sheet.insertRule(aAn + "{width:" + iV + ";height:" + iV + ";}", aEA.sheet.cssRules.length), aEA.sheet.insertRule(aAn + "-thumb{background-color:white;}", aEA.sheet.cssRules.length), aEA.sheet.insertRule(aAn +
				"-track{background:" + bE.pK + ";}", aEA.sheet.cssRules.length), aEA.sheet.insertRule(aAn + "-track:horizontal{border-top:" + aEB + " solid white;}", aEA.sheet.cssRules.length), aEA.sheet.insertRule(aAn +
				"-track:vertical{border-left:" + aEB + " solid white;}", aEA.sheet.cssRules.length), aEA.sheet.insertRule(aAn + "-button{display:none;}", aEA.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aEA.sheet.cssRules.length - 1; 0 <= aC; aC--) aEA.sheet.deleteRule(0)
		}
	}
}

function dS() {
	this.aEC = !1, this.oL = !1, this.a6c = !1, this.aED = [0, 0, 0, 0], this.render = function() {
		var nv, nw, o8, o9;
		this.a6c = this.a6c || this.oL, (this.oL || this.aEC && this.a6c) && (nv = bd.aEE[0], nw = bd.aEE[1], o8 = bd.aEE[2], o9 = bd.aEE[3], nv = nv < this.aED[0] ? this.aED[0] : nv, nw = nw < this.aED[1] ? this.aED[1] : nw, o8 = o8 > this.aED[
				2] ? this.aED[2] : o8, o9 = o9 > this.aED[3] ? this.aED[3] : o9, this.oL = !1, this.aEC = !1, nv === this.aED[0] && nw === this.aED[1] && o8 === this.aED[2] && o9 === this.aED[3] ? this.a6d() : nv <= o8 && nw <= o9 && a6v
			.putImageData(a6w, 0, 0, nv, nw, o8 - nv + 1, o9 - nw + 1))
	}, this.a6d = function() {
		this.a6c && this.aED[2] >= this.aED[0] && this.aED[3] >= this.aED[1] && a6v.putImageData(a6w, 0, 0, this.aED[0], this.aED[1], this.aED[2] - this.aED[0] + 1, this.aED[3] - this.aED[1] + 1), this.a6c = !1
	}, this.a2S = function() {
		this.aED[2] >= this.aED[0] && this.aED[3] >= this.aED[1] && a6v.putImageData(a6w, 0, 0, this.aED[0], this.aED[1], this.aED[2] - this.aED[0] + 1, this.aED[3] - this.aED[1] + 1), this.a6c = !1
	}, this.dk = function() {
		var fg, fi;
		this.aEC = !1, this.oL = !1, this.a6c = !1, this.aED[0] = bV.fk, this.aED[1] = bV.fl, this.aED[2] = this.aED[3] = 0;
		loop: for (fg = 1; fg < bV.fk - 1; fg++)
			for (fi = bV.fl - 2; 1 < fi; fi--)
				if (1 === aEF[ad.zt(fg, fi) + 2]) {
					this.aED[0] = fg;
					break loop
				} loop: for (fi = 1; fi < bV.fl - 1; fi++)
			for (fg = bV.fk - 2; 1 < fg; fg--)
				if (1 === aEF[ad.zt(fg, fi) + 2]) {
					this.aED[1] = fi;
					break loop
				} loop: for (fg = bV.fk - 2; 0 < fg; fg--)
			for (fi = bV.fl - 2; 1 < fi; fi--)
				if (1 === aEF[ad.zt(fg, fi) + 2]) {
					this.aED[2] = fg;
					break loop
				} loop: for (fi = bV.fl - 2; 0 < fi; fi--)
			for (fg = bV.fk - 2; 1 < fg; fg--)
				if (1 === aEF[ad.zt(fg, fi) + 2]) {
					this.aED[3] = fi;
					break loop
				}
	}
}

function L(value, aEG, xP, aEH) {
	var s1 = "number" == typeof value ? bA.aEI[value] : value;
	if (xP && bA.aEJ() && (s1 = xP), !aEG) return aEH ? s1.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : s1;
	for (var fZ = aEG.length, aC = 0; aC < fZ; aC++)
		for (var fs = 0; fs < 3; fs++) s1 = s1.replace("{" + (10 * fs + aC) + "}", aEG[aC]);
	return s1
}

function c6() {
	this.data = new aEK;
	var aEL = (new aEM).L84,
		aEO = (this.aEI = aEL, !(this.aEN = "en"));
	this.dk = function() {
		var s1, h;
		aEO = !1, ("en" === (s1 = bm.buffer.data[12].value).split("-")[0].toLowerCase() ? (bA.aEI = aEL, bA.aEN = s1, 1) : bm.buffer.data[12].value === bm.buffer.data[145].value && 0 < bm.buffer.data[146].value && (s1 = bm.buffer.data[146].value,
			(h = bm.sb.xb(s1, !1)).length === s1) && !!bD.sS.a4u(h) && function(h) {
			for (var fZ = h.length, k = 0; k < fZ; k++) h[k] = h[k].replace("&#39;", "'");
			var aEU = bm.sb.xb(fZ, !0);
			if (fZ !== aEU.length) return !1;
			if (!bD.sS.a4u(aEU)) return !1;
			for (var lp = aEL.length, aBi = new Array(lp), aEV = lp === fZ, h2 = Math.min(fZ, lp), aC = 0; aC < lp; aC++)
				if (aBi[aC] = aEL[aC], aC < fZ && aEU[aC] === aBi[aC]) aBi[aC] = h[aC];
				else {
					aEV = !1;
					for (var ft = 0; ft < h2; ft++)
						if (aEU[ft] === aBi[aC]) {
							aBi[aC] = h[ft];
							break
						}
				} return bA.aEI = aBi, bA.aEN = bm.buffer.data[12].value, aEV
		}(h)) || (aEO = !0)
	}, this.dm = function() {
		bj.dl(), aF.dl(), bh.dl(), bg.dl(), aP.dk(), br = new e8
	}, this.aEJ = function() {
		return this.aEI === aEL || !aEL.length
	}, this.aEW = function() {
		var aEX;
		return !!aEO && (aEO = !1, 0 !== aEL.length) && (aEX = bm.buffer.data[12].value, b1.eg.aEY(0, aEX.slice(0, 20)), !0)
	}, this.aEZ = function(h) {
		h.length !== aEL.length ? 8 === u.ua && u.a3T().aEa(30, 0, 1) : (this.aEI = h, this.aEN = bm.buffer.data[12].value, bm.qo.qp(145, this.aEN), bm.qo.qp(146, h.length), bm.sb.xh(h, !1), bm.sb.xh(aEL, !0), 8 === u.ua ? u.a3T().aEa(30) : 0 ===
			ab.a3P() && 5 === u.ua && u.z.aEb())
	}, this.aEc = function() {
		var xk, h = navigator.languages;
		return h && h.length ? (xk = Math.max(bA.data.aEd(h[0]), 0), 1 === h.length ? [xk, xk] : [xk, Math.max(bA.data.aEd(h[1]), 0)]) : [0, 0]
	}
}

function aEK() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aEe = function() {
		for (var aEf = [], h = this.h, fZ = h.length, aC = 0; aC < fZ; aC++) aEf.push(h[aC]);
		var aEg = bm.buffer.data[12].xP;
		for (aC = 0; aC < fZ; aC++)
			if (aEf[aC] === aEg) {
				aEf.splice(aC, 1), fZ--;
				break
			} aEf.sort(), fZ++, aEf.unshift(aEg);
		try {
			if ("undefined" == typeof Intl) return aEf;
			for (aC = 0; aC < fZ; aC++) {
				var s1 = new Intl.DisplayNames([aEf[aC]], {
					type: "language"
				}).of(aEf[aC]);
				s1 !== aEf[aC] && (aEf[aC] = aEf[aC] + ": " + s1)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aEf
	}, this.aEi = function(aEj) {
		for (var s1 = bm.buffer.data[12].value, fZ = aEj.length, aC = 0; aC < fZ; aC++)
			if (s1 === aEj[aC].split(":")[0]) return aC;
		return 0
	}, this.aEd = function(aEk) {
		if (aEk && !(aEk.length < 2)) {
			aEk = aEk.split("-")[0].toLowerCase();
			for (var h = this.h, fZ = h.length, aC = 0; aC < fZ; aC++)
				if (aEk === h[aC]) return aC
		}
		return -1
	}
}

function aEM() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Lobby", "Propaganda", "Close {button}", "Report Abuse", "You earned {10} gold!",
		"{0} earned {11} gold!", "Team {0}", "Team {0} won the game!", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} points.",
		"Clan {0} gained {11} points. ✨", "You earned {10} clan points.", "You earned an additional {10} gold because you played for {1}.", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.",
		"Quit Game", "More", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️",
		"Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty",
		"Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humans won.", "The Resistance", "The zombies won.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.",
		"If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.",
		"{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.",
		"Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.",
		"{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land", "Contest", "YOU CONQUERED", "YOU WERE CONQUERED BY",
		"THE GAME WAS WON BY", "MAP:", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth",
		"Income", "Time", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.",
		"Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!",
		"You are leaving Territorial.io.", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Loading", "{0} defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo",
		"Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold",
		"Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer",
		"Confirm", "Cancel", "Sell Account", "Asking Price:", "Account to receive the gold:", "Publish Offer", "Buy This Account", "Buy",
		"If you successfully buy this account, it will be assigned the same password as your currently logged-in account.", "Account Name", "Copy", "Search", "Password", "Show", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist",
		"Soldier", "Recruit", "Rating: ", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Win Streak: ", "Admin Statistics", "Votes: ", "Elect", "You are about to purchase {10} votes for {11} Gold with your Account {2}.",
		"User", "Email Verified", "🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.",
		"🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.",
		"Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅", "Please choose a respectful username.", "Active punishments:", "Offensive Name", "Hate Speech", "Email Verification", "Email",
		"You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code", "Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}",
		"Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Rating: {10}", "Rank: {10}",
		"Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can transfer a membership to your account.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust",
		"Colors", "Random", "My Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode",
		"Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "📜 Game Log", "Multiplayer", "My Account",
		"Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "Zombie Players", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking",
		"Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan",
		"Rating", "Leader", "Time Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search",
		"Quantity", "Account Name Search", "1v1", "Zombie", "Chat", "Ready", "Next Game", "Login", "The only official domain is territorial.io", "If you log in on a different website, your account may be stolen!",
		"If you play with the official Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "Procedural Map", "Realistic Map", "Custom Map",
		"Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Selectable Name", "📰 Propaganda", "Links", "Propaganda Text", "Reset", "Language", "Launch Campaign", "Gold Investment",
		"Launch", "Account Recovery", "Request Email", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct", "Via Proxy",
		"Highlighting", "Intensity", "Shortcut Keys", "Spawning", "Manual Spawn", "🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "⚔️ Join Lobby 2", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings",
		"Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning",
		"Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer",
		"Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses",
		"Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!",
		"Ship intercepted!", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function dq() {
	var fg, fi, k, vV, aEl, aEm, aEn, aEo, aEp, j, a5X, aEq;
	this.iL = !1, this.dk = function(s1, aEr) {
		if (1 === a1.id && 13 <= a1.e3 && a1.e3 < 18) return aEr ? void(a5X = s1) : a5X !== s1 ? void 0 : void a1.xZ.saveString(200, s1);
		aEr && (a5X = s1, (aEq = document.createElement("a")).appendChild(document.createTextNode(a5X)), this.iL = !0, aEq.title = a5X, aEq.target = "_blank", aEq.href = a5X, aEq.style.textAlign = "center", aEq.style.color = bE.pO, aEq.style
			.position = "absolute", aEq.style.padding = "0px", aEq.style.margin = "0px", this.resize(), document.body.appendChild(aEq), bi.ds = !0)
	}, this.tZ = function() {
		return !(!this.iL || (u.removeChild(document.body, aEq), this.iL = !1))
	}, this.hm = function(it, iu) {
		return !!this.iL && ((it < fg || iu < fi || fg + j < it || fi + k < iu || fg + j - vV < it && iu < fi + vV) && (bi.ds = !0, this.iL = !1, u.removeChild(document.body, aEq)), !0)
	}, this.resize = function() {
		var a7v, aEs;
		this.iL && (aEo = Math.floor(.8 * (a1.a2.ik() ? i.j > i.k ? .6 : .55 : .4) * i.il), vV = Math.floor(.15 * aEo), aEl = Math.floor(.35 * vV), aEm = Math.floor(.5 * vV), aEn = Math.floor(2.5 * aEm), k = vV + aEl + 3 * aEm, a7v = bD.sK.u8(1,
			aEl / i.l), aEp = Math.floor(i.l * aR.measureText(a5X, a7v)), aEs = j = (aEo < aEp ? aEp : aEo) + 2 * aEn, j = Math.min(j, i.j - 2 * (a1.a2.ik() ? 2 : 1) * bf.gap), a7v = bD.sK.u8(1, j / aEs * aEl / i.l), aEp = Math.floor(i
			.l * aR.measureText(a5X, a7v)), fg = Math.floor((i.j - j) / 2), fi = Math.floor((i.k - k) / 2), aEq.style.font = a7v, aEq.style.top = Math.floor((fi + 1.4 * aEm + vV) / i.l) + "px", aEq.style.left = Math.floor((fg + (j -
			aEp) / 2) / i.l) + "px")
	}, this.wr = function() {
		this.iL && (ws.fillStyle = bE.pL, ws.fillRect(fg, fi + vV, j, k - vV), ws.fillStyle = bE.qX, ws.fillRect(fg, fi, j, vV), ws.fillStyle = bE.pO, ws.lineWidth = bf.a1E, ws.strokeStyle = bE.pO, ws.strokeRect(fg, fi, j, k), ws.fillRect(fg,
			fi + vV, j, bf.a1E), ws.font = bD.sK.u8(1, .48 * vV), bD.sK.textAlign(ws, 1), bD.sK.textBaseline(ws, 1), ws.fillText(L(133), Math.floor(fg + (j - .5 * vV) / 2), Math.floor(fi + .55 * vV)), aN.a87(Math.floor(fg + j - .8 * vV),
			Math.floor(fi + .25 * vV), Math.floor(.5 * vV)), ws.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dp() {
	var gap, aDC, fg = [0, 0, 0, 0, 0],
		fi = [0, 0, 0, 0, 0],
		o7 = [1, 1, 1, 1, 1],
		g1 = [!0, !0, !0, !1, !1],
		ej = (this.gM = [!0, !0, !0, !1, !1], null);
	this.aEt = function(a55, aEu) {
		ej = a55, g1 = aEu, aDC = [bN.aEv, bN.a3L, bN.aEw, bN.aEw, bN.aEx], this.dk()
	}, this.dk = function() {
		if (ac.v0()) {
			var aC, uf = Math.floor((a1.a2.ik() ? .261 : .195) * i.il),
				ug = Math.floor(.9 * uf),
				aAf = Math.floor(.17 * ug);
			if (gap = a1.a2.ik() ? 2 * bf.gap : bf.gap, o7[0] = uf / ej[0].width, o7[1] = ug / ej[1].width, o7[2] = aAf / ej[2].height, o7[3] = aAf / ej[3].height, o7[4] = aAf / ej[4].height, o7[2] *= 1.7, o7[3] *= 1.07, fg[0] = gap, fg[1] = gap,
				fg[2] = gap, fg[3] = gap, fg[4] = Math.floor(2 * gap + o7[3] * ej[3].width), fi[0] = gap, fi[1] = fi[0] + gap + o7[0] * ej[0].height, fi[2] = fi[1] + gap + o7[1] * ej[1].height, fi[3] = fi[2] + gap + o7[2] * ej[2].height, fi[4] =
				fi[3], !g1[0])
				for (aC = 0; aC < 5; aC++) fi[aC] -= o7[0] * ej[0].height + gap;
			if (!g1[1])
				for (aC = 2; aC < 5; aC++) fi[aC] -= o7[1] * ej[1].height + gap
		}
	}, this.iL = function() {
		return !(7 === ab.a3P() && a1.a2.ik())
	}, this.hm = function(it, iu) {
		if (ej && this.iL())
			for (var aC = g1.length - 1; 0 <= aC; aC--)
				if (g1[aC] && this.gM[aC] && fg[aC] < it && fi[aC] < iu && it < fg[aC] + o7[aC] * ej[aC].width && iu < fi[aC] + o7[aC] * ej[aC].height) return u.v(9, u.ua, new aEy(L(134), bD.sK.a5W(aDC[aC]))), !0;
		return !1
	}, this.wr = function() {
		if (ej && this.iL()) {
			var aC;
			for (ws.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) g1[aC] && this.gM[aC] && (ws.setTransform(o7[aC], 0, 0, o7[aC], fg[aC], fi[aC]), ws.drawImage(ej[aC], 0, 0));
			ws.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dd() {
	this.aEz = 0, this.aF0 = null, this.vg = null, this.lj = null, this.z = null, this.w3 = null, this.vd = null, this.message = null, this.aF1 = null, this.tY = null, this.aF2 = null, this.aF3 = new aF4, this.f6 = 0, this.aBZ = 0, this.dk =
		function() {
			this.aBZ = bi.eZ, this.aEz = bJ.f0.f1(bm.buffer.data[105].value, 5), this.vg = new aF5, this.lj = new aF6, this.z = new aF7, this.w3 = new aF8, this.vd = new aF9, this.message = new aFA, this.aF1 = new aFB, this.tY = new aFC, this.aF2 =
				new aFD, this.z.dk(), bs.dk(), this.f6 = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.f4()
		}, this.vx = function() {
			this.tY && this.tY.vx(), this.aF0 = null, this.vg = null, this.lj = null, this.z = null, this.w3 = null, this.vd = null, this.message = null, this.aF1 = null, this.tY = null, this.aF2 = null, this.f6 = 0, bs.vx(), a1.a2.setState(0)
		}
}

function aF5() {
	function aFc(h, us, ut) {
		var aFd = h[us];
		h[us] = h[ut], h[ut] = aFd
	}
	this.vh = [
		[],
		[],
		[],
		[]
	], this.vi = [0, 0, 0, 0], this.aFE = [], this.aFF = function(aFG, uY, username, vn, a5z, aFH, elo, color, y4, aFI, code) {
		username = this.aFK(uY, username, vn, a5z, aFH, elo, color, y4, aFI, code);
		this.vh[aFG].push(username), bq.aEz === uY && (bq.aF0 = username), bq.aF2.aFL(uY) && (username.vp = 1), bq.z.aFM += 29 === u.ua && bq.z.tM[0] === aFG && 1 === bq.z.tM[2]
	}, this.aFK = function(uY, username, vn, a5z, aFH, elo, color, y4, aFI, code) {
		return {
			uY: uY,
			username: code ? __fx.nameFilter.filter(username) : "Player " + bI.f0.a1X(uY, 2),
			aFN: __fx.nameFilter.filter(username),
			vn: vn,
			a5z: a5z,
			aFH: aFH,
			elo: elo,
			color: color,
			y4: y4,
			aFI: aFI
		}
	}, this.aFO = function(eI, aFG, vn, a5z, aFH, elo, y4, color) {
		eI = this.vh[aFG][eI];
		eI.vn = vn, eI.a5z = a5z, eI.aFH = aFH, eI.elo = elo, eI.y4 = y4, eI.color = color, bq.z.aFM += 29 === u.ua && bq.z.tM[0] === aFG && 1 === bq.z.tM[2]
	}, this.aFP = function(eI, aFG, code) {
		eI = this.vh[aFG][eI];
		1 === code && (eI.username = eI.aFN), bq.z.aFM += 29 === u.ua && bq.z.tM[0] === aFG && 1 === bq.z.tM[2]
	}, this.aFQ = function(eI, aFG, aFR) {
		var eI = this.vh[aFG][eI],
			aFS = eI.username,
			aFT = "Redacted " + bI.f0.a1X(eI.uY, 2);
		eI.username = aFR ? "[" + bD.tI.a2z(aFS) + "] " + aFT : aFT, aFS.indexOf("Redacted") < 0 && (eI.aFU = aFS), bq.tY.aFV(eI.uY), bq.z.aFM += 29 === u.ua && bq.z.tM[0] === aFG && 1 === bq.z.tM[2]
	}, this.aFW = function(eI, aFX, aFY) {
		var player = this.vh[aFX][eI];
		this.aFZ(eI, aFX), this.vh[aFY].push(player), bq.z.aFM += 29 === u.ua && bq.z.tM[0] === aFY && 1 === bq.z.tM[2]
	}, this.aFZ = function(eI, aFX) {
		var vg = this.vh[aFX];
		this.aFE.push(vg[eI]), 1e3 < this.aFE.length && this.aFE.shift(), eI >= this.vi[aFX] ? vg[eI] = vg[vg.length - 1] : (this.vi[aFX]--, 2 === aFX ? (vg.splice(this.vi[aFX] + 1, 0, vg[vg.length - 1]), vg.splice(eI, 1)) : (vg[eI] = vg[this.vi[
			aFX]], vg[this.vi[aFX]] = vg[vg.length - 1])), vg.pop(), bq.z.aFM += 29 === u.ua && bq.z.tM[0] === aFX && 1 === bq.z.tM[2]
	}, this.aFa = function(eI, tL) {
		bq.z.aFM += 29 === u.ua && bq.z.tM[0] === tL && 1 === bq.z.tM[2];
		var vg = this.vh[tL],
			sC = vg[eI];
		if (2 === tL)
			if (eI >= this.vi[tL]) {
				bq.aF2.join(sC);
				for (var aFb = this.vi[tL], elo = sC.elo; aFb && elo > vg[aFb - 1].elo;) aFb--;
				vg[eI] = vg[this.vi[tL]], vg.splice(this.vi[tL]++, 1), vg.splice(aFb, 0, sC)
			} else vg.splice(this.vi[tL]--, 0, sC), vg.splice(eI, 1);
		else eI >= this.vi[tL] ? (bq.aF2.join(sC), aFc(vg, this.vi[tL]++, eI)) : aFc(vg, --this.vi[tL], eI)
	}, this.aFe = function(uY) {
		for (var vh = this.vh, fZ = vh.length, aC = 0; aC < fZ; aC++)
			for (var vg = vh[aC], lp = vg.length, fs = 0; fs < lp; fs++)
				if (uY === vg[fs].uY) return vg[fs];
		return null
	}
}

function aFD() {
	var aFf = [],
		aFg = [],
		aFh = 0;

	function aFi(h, a8y, aFm, aFn) {
		var fZ = h.length;
		if (0 === fZ) return "";
		var s1 = "@" + h[0];
		if (1 === fZ) return s1 + a8y + aFn;
		for (var aC = 1; aC < fZ - 1; aC++) s1 += ", @" + h[aC];
		return s1 + " and @" + h[fZ - 1] + aFm + aFn
	}
	this.dk = function() {
		var s1 = aFi(aFg, " is", " are", " in the lobby.");
		s1.length && bq.message.aFj({
			id: 7,
			s: s1
		}), aFf = [], aFg = [], aFh = 0
	}, this.aFL = function(aFk) {
		return bq.aEz !== aFk && (aFk = bI.f0.a1X(aFk, 5), !!bm.xF.vp(aFk)) && (aFg.push(aFk), !0)
	}, this.join = function(player) {
		bq.aEz !== player.uY && (player = bI.f0.a1X(player.uY, 5), bm.xF.vp(player)) && aFf.push(player)
	}, this.aFl = function() {
		var a8y, aFm;
		++aFh < 3 || (aFh = 0, a8y = aFi(aFg, "", "", " entered the lobby!"), (a8y = (aFm = aFi(aFf, "", "", " joined a game!")).length ? a8y.length ? a8y + " " + aFm : aFm : a8y).length && bq.message.aFj({
			id: 7,
			s: a8y
		}), aFf = [], aFg = [])
	}
}

function aF4() {
	this.dt = function(eI) {
		if ((vi = bq.vg.vi[eI]) < 2 && !__fx.customLobby.isActive()) return !1;
		var tN = bq.z.tO[eI],
			aFo = 9 === tN.aFp ? 333 : 512,
			vi = Math.min(vi, aFo);
		8 === tN.aFp && (vi -= vi % 2);
		aFo = bq.vg.vh[eI].splice(0, vi), bq.vg.vi[eI] -= vi, vi = function(aFq) {
			if (bq.aF0) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var fZ = aFq.length, uY = bq.aF0.uY, aC = 0; aC < fZ; aC++)
					if (aFq[aC].uY === uY) return aC
			}
			return -1
		}(aFo);
		return -1 === vi ? (bq.vg.aFE = bq.vg.aFE.concat(aFo), 1e3 < bq.vg.aFE.length && bq.vg.aFE.splice(0, bq.vg.aFE.length - 1e3), bq.z.aFM += 29 === u.ua && bq.z.tM[0] === eI && 1 === bq.z.tM[2], !1) : (8 === tN.aFp && (tN.aFt = (tN.aFt + (
			vi >> 1)) % 1024, eI = vi - vi % 2, vi %= 2, aFo = aFo.slice(eI, 2 + eI)), ay.dk(tN, aFo, vi), !0)
	}, this.aFu = function(tN, aFq, aFr) {
		var fc = aE.data = new a6i,
			aFy = (fc.spawningSeed = tN.spawningSeed, tN.aFp < 7 ? (fc.gameMode = 1, fc.numberTeams = tN.aFp + 2) : 9 === tN.aFp ? (fc.gameMode = fc.isZombieMode = 1, fc.numberTeams = 2) : (fc.gameMode = 0, fc.battleRoyaleMode = 7 === tN.aFp ?
				0 : 10 === tN.aFp ? 1 : 2), fc.selectedPlayer = aFr, fc.isContest = tN.aFv, fc.mapType = bV.aFw(tN.fF) ? 0 : 1, bV.aFx(fc, tN.fF), fc.mapSeed = tN.mapSeed, fc.humanCount = aFq.length);
		fc.selectableSpawn = 1 === fc.gameMode || aFy < 100, fc.colorsData = new Uint32Array(aFy), fc.playerNamesData = new Array(aFy), fc.a76 = new Uint32Array(aFy);
		for (var aC = 0; aC < aFy; aC++) fc.colorsData[aC] = aFq[aC].color, fc.playerNamesData[aC] = aFq[aC].username, fc.a76[aC] = aFq[aC].uY;
		if (2 === fc.battleRoyaleMode)
			for (fc.elo = new Uint16Array(aFy), aC = 0; aC < aFy; aC++) fc.elo[aC] = aFq[aC].elo;
		bw.close(), ab.setState(8), bV.a8(tN.fF, fc.mapSeed), aE.a6n(), aE.a6l = 2
	}
}

function aF6() {
	var e9 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aFz = [bE.pc, bE.pc, bE.pd, bE.q6, bE.q7, bE.pt, bE.qC, bE.pd, bE.qZ, bE.qN, bE.qW, bE.pF],
		aG0 = [
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
		aG1 = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aGF(tP, uY, aGH) {
		for (var ft = tP.length - 1; 0 <= ft; ft--) {
			var sC = tP[ft];
			0 === sC.id && sC.uY === uY && (sC.s = "[Redacted Message]", aGH) && (sC.aGI = 1)
		}
	}
	this.tU = function(aG2) {
		var aG3, a30;
		return aG2.id < 5 && (aG3 = "@" + bI.f0.a1X(aG2.uY, 5)), 0 === aG2.id ? aG3 + ": " + aG2.s : 1 === aG2.id ? (a30 = "@" + bI.f0.a1X(aG2.target, 5), 0 === aG2.aG4 ? 32768 <= aG2.value ? aG3 + " voted with " + (aG2.value - 32768 + 1) +
				" gold against " + a30 + " to weaken the latter's admin position. 📉" : aG3 + " voted with " + (aG2.value + 1) + " gold for " + a30 + " to strengthen the latter's admin position. 💪" : 1 === aG2.aG4 ? aG3 + " sent " + Math.floor(
					aG2.value / 100) + " 🧈 gold to " + a30 + "." : aG3 + " voted with " + (aG2.value / 10).toFixed(1) + " points for " + a30 + " to acknowledge the latter as clan leader. ✅") : 2 === aG2.id ? 0 === aG2.aG4 ? aG3 +
			" was 🔇 muted for 1 Hour." : 1 === aG2.aG4 ? "The username of " + aG3 + " was ✂️ redacted. Duration: 1 Day" : aG3 + " 👢 was kicked." : 3 === aG2.id ? aG3 + br.eL(aG2.aG4, br.eF[aG2.aG4][aG2.value]) + "@" + bI.f0.a1X(aG2.target, 5) +
			br.eN(aG2.aG4, br.eF[aG2.aG4][aG2.value]) : 4 === aG2.id ? aG3 + br.eL(5, br.eF[5][aG2.aG4]) + "@" + bI.f0.a1X(aG2.target, 5) + br.eN(5, br.eF[5][aG2.aG4]) : 5 === aG2.id ? aG1[aG2.aG4] : 6 === aG2.id ? "You are about to mention " +
			aG2.value + " player" + (1 === aG2.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aG2.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aG2.id ? aG2.s : void 0
	}, this.tT = function(aG2, aG5) {
		return {
			aG2: aG2,
			s: aG5,
			aG6: 0,
			fontSize: 1,
			tX: 0,
			aG7: aG2.id ? bE.q5 : bE.pO
		}
	}, this.vl = function(player, tL) {
		return (2 === tL ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.vm = function(vn) {
		return aFz[vn]
	}, this.aG8 = function(vn, a5z) {
		return vn < 3 || 7 === vn ? aG0[vn][0] : 4 === vn ? aG0[vn][a5z < 1 ? 0 : a5z < 10 ? 1 : 2] : aG0[vn][a5z < 10 ? 0 : 1]
	}, this.aG9 = function(a5z) {
		return 0 === a5z
	}, this.aFe = function(tL, uY) {
		for (var vh = bq.vg.vh, vg = vh[tL], fZ = vg.length, aC = 0; aC < fZ; aC++)
			if (uY === vg[aC].uY) return vg[aC];
		for (var ft = 0; ft < vh.length; ft++)
			if (tL !== ft)
				for (fZ = (vg = vh[ft]).length, aC = 0; aC < fZ; aC++)
					if (uY === vg[aC].uY) return vg[aC];
		return null
	}, this.vo = function(sC) {
		return !!bq.aF0 && sC.uY === bq.aF0.uY
	}, this.aGA = function(vg, aGB, aGC) {
		var a2x = [];
		loop: for (var aC = aGB; aC < aGC; aC++) {
			var a2y = bD.tI.a2z(vg[aC].username);
			if (a2y) {
				for (var ft = a2x.length - 1; 0 <= ft; ft--)
					if (a2y === a2x[ft].name) {
						a2x[ft].h2++;
						continue loop
					} a2x.push({
					name: a2y,
					h2: 1
				})
			}
		}
		if (a2x.sort(function(fs, ft) {
				return ft.h2 - fs.h2
			}), 0 === a2x.length) return "";
		for (var s1 = a2x[0].name + ": " + a2x[0].h2, aC = 1; aC < a2x.length; aC++) s1 += "   " + a2x[aC].name + ": " + a2x[aC].h2;
		return s1
	}, this.aGD = function(vn, a5z, aFH) {
		return 0 === e9[vn].length ? "Rank: " + (a5z + 1) : e9[vn] + " Rank: " + (a5z + 1) + (3 !== vn && aFH < 100 ? "   " + e9[3] + " Rank: " + (aFH + 1) : "")
	}, this.aGE = function(uY) {
		for (var tO = bq.z.tO, aC = 0; aC < tO.length; aC++) aGF(tO[aC].tP, uY);
		aGF(bq.message.aGG(), uY, 1), bq.tY.aGE(uY)
	}
}

function aF9() {
	var u0 = 0,
		aGJ = 0,
		aGK = 0,
		aGL = null,
		aGM = null;

	function aGP(sC, aGQ, aGR) {
		var s1 = sC.username;
		return (s1 += "   " + bq.lj.aGD(sC.vn, sC.a5z, sC.aFH)) + function(sC) {
			sC = sC.y4;
			if (sC < 1e3) return "   Gold: " + sC;
			if ((sC %= 1024) < 1e3) return "   Gold: " + sC + "k";
			return "   Gold: " + (sC - 999) + "M"
		}(sC) + ("   IP: " + bI.f0.a1X(sC.aFI, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aGR ? aGJ : aGO(sC, aGQ)])
	}

	function aGO(sC, aGQ) {
		return aGJ = aGQ || bq.vg.aFe(sC.uY) ? 1 : 0
	}
	this.ve = 0, this.aGN = function() {
		!u0 || aGJ === aGO(aGM) && aGK === aGM.y4 || (aGK = aGM.y4, aGL.show(-1, -1, aGP(aGM, 0, 1), 1, 1, aGM.color))
	}, this.vq = function(e, sC, aGQ) {
		var aAm = e.getBoundingClientRect();
		this.show(aAm.left, aAm.top, sC, 0, aGQ), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.vd && bq.vd.tZ(1)
		}), this.ve = aGQ
	}, this.show = function(fg, fi, sC, u4, aGQ) {
		aGL = aGL || new tx, aGK = (aGM = sC).y4, aGL.show(fg, fi, aGP(sC, aGQ), u4, 0, aGM.color), u0 = 1
	}, this.tZ = function(uB) {
		this.ve = 0, aGL && aGL.tZ(uB) && (u0 = 0, aGM = null)
	}
}

function aF7() {
	function aGW() {
		u.a7I(29) && (bq.z.aFM && 1 === bq.z.tM[2] && u.a7I(29).aGZ(), bq.z.aFM = 0, u.a7I(29).aGa(), u.a7I(29).aGb(), bq.vd.aGN())
	}
	this.tO = new Array(4), this.tM = [0, 0, 1, 0], this.aFM = 0, this.aGT = [0, 0], this.dk = function() {
		for (var aC = 0; aC < this.tO.length; aC++) this.tO[aC] = new aGU;
		this.tM[0] = bm.buffer.data[158].value, __fx.lobbyReminders.setRooms(this.tO), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aFj({
				id: 7,
				s: text
			})
		})
	}, this.aGV = function() {
		aGW(), bq.aF2.dk(), __fx.lobbyReminders.check()
	}, this.aFl = function() {
		bq.aF2.aFl();
		for (var aC = 0; aC < bq.z.tO.length; aC++) {
			var tN = bq.z.tO[aC];
			0 === tN.vP ? tN.aGc = 0 : (tN.aGd = Math.max(tN.aGd - tN.aGc % 2, 0), tN.aGc++)
		}
		aGW(), __fx.lobbyReminders.check()
	}, this.aGe = function(tL) {
		this.tM[0] !== tL || this.tM[2] || u.a7I(29).aGf()
	}
}

function aFB() {
	var aGg = 0,
		aGh = "",
		aGi = 0,
		aGj = 0,
		aGk = 0;

	function aGm(aG5) {
		b1.aGx.aGy(3, aG5)
	}

	function aGv(h2) {
		aGg = 1, bq.message.aFj({
			id: 6,
			value: h2
		})
	}

	function aGp(s) {
		var aH1 = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aH1)
	}
	this.a2K = function(s) {
		var aGl, h, aGr;
		if (aGg) return aGg = 0, "yes" === (aGl = s.toLowerCase()) || "y" === aGl ? void aGm(aGh) : void bq.message.aFj({
			id: 5,
			aG4: 7
		});
		!(s.indexOf("@") < 0) && (aGl = aGp(s)) ? (aGh = s, h = function(aGo) {
			for (var fZ = aGo.length, aGz = [0, 0, 0, 0], aC = 0; aC < fZ; aC++)
				for (var j = aGo[aC], fs = 0; fs < 4; fs++) j === "@room" + (fs + 1) && (aGz[fs] = 1);
			if ((aGj = bD.sS.a4j(aGz)) % 4 == 0) return bD.sS.a51(bq.vg.vh);
			for (fs = 0; fs < 4; fs++) aGz[fs] = aGz[fs] ? bq.vg.vh[fs] : [];
			return bD.sS.a51(aGz)
		}(aGl), function(aGo, aGr, s) {
			if (!aGi) return;
			for (var fZ = aGr.length, aC = 0; aC < fZ; aC++) 2 === aGr[aC].id && (s = s.replace(aGo[aGr[aC].eI], "@" + aGr[aC].g1));
			return aGg = 1, aGm((aGh = s).slice(0, 126) + "|"), 1
		}(aGl, aGr = function(aGo) {
			for (var aGr = [], fZ = (aGk = aGi = 0, aGo.length), aC = 0; aC < fZ; aC++) {
				var j = aGo[aC],
					lp = j.length;
				bD.tI.startsWith(j, "@[") ? lp <= 9 && bD.tI.a5Z(j, "]") && aGr.push({
					id: 0,
					g1: j.substring(2, lp - 1).toUpperCase()
				}) : 6 === lp ? bD.tI.startsWith(j, "@room") || (aGk++, aGr.push({
					id: 1,
					g1: bJ.f0.f1(j.substring(1), 5)
				})) : 1 < lp && lp < 5 && 0 <= (lp = bA.data.aEd(j.substring(1))) && (aGr.push({
					id: 2,
					g1: lp,
					eI: aC
				}), aGi = 1)
			}
			return aGr
		}(aGl), s) || (0 === aGr.length ? aGj || function(aGo) {
			for (var fZ = aGo.length, aC = 0; aC < fZ; aC++) {
				var j = aGo[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return
		}(aGl) ? aGv(h.length) : aGm(s) : aGl.length === aGk ? aGm(s) : (function(h, aGr) {
			var lp = aGr.length;
			if (0 === lp) return;
			var fZ = h.length;
			loop: for (var aC = fZ - 1; 0 <= aC; aC--) {
				for (var fs = 0; fs < lp; fs++)
					if (0 === aGr[fs].id) {
						if (aGr[fs].g1 === bD.tI.a2z(h[aC].username)) continue loop
					} else if (1 === aGr[fs].id && aGr[fs].g1 === h[aC].uY) continue loop;
				h[aC] = h[--fZ], h.pop()
			}
		}(h, aGr), aGv(h.length)))) : aGm(s)
	}, this.aH2 = function(s) {
		var aGo = aGp(s);
		if (aGo)
			for (var a6 = new RegExp("^[0-9]+$"), fZ = aGo.length, aC = 0; aC < fZ; aC++) {
				var j = aGo[aC].substring(1),
					lp = j.length;
				1 <= lp && lp <= 3 && a6.test(j) && (lp = parseInt(j, 10), !isNaN(lp)) && 0 <= lp && lp < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[lp]))
			}
		return s
	}
}

function aFA() {
	var aH3, aH4 = [],
		aH5 = -1,
		aH6 = 0,
		aH7 = 0;

	function aHC() {
		aH6 = bi.eZ, (3 === this.vu ? aHB : (aH5 = (aH4.length + aH5 + 2 * this.vu - 1) % aH4.length, aHA))()
	}

	function aHA() {
		0 !== aH4.length && (aH7 = 0, aH3 && aH3.vx(), (aH3 = new vr(aHC)).qp(aH5, aH4.length), aH3.show(aH4[aH5]), bq.message.resize())
	}

	function aHB() {
		aH7 = 1, aH3 && aH3.vx(), (aH3 = new vy(aHA)).qp(aH4.length), aH3.show(), bq.message.resize()
	}
	this.aFj = function(aG2) {
		var sC;
		2 === aG2.id && 3 === aG2.aG4 ? bq.lj.aGE(aG2.uY) : (sC = bq.lj.tT(aG2, bq.lj.tU(aG2)), (5 !== aG2.id && 6 !== aG2.id || (u.a7I(29).aH8().tW(sC), 5 === aG2.id)) && (sC = bi.eZ < aH6 + 2e4, aH5 !== aH4.length - 1 && sC || (aH5 = aH4
			.length), __fx.pingFilter.isMuted(aG2, "s") || (aH4.push(aG2), bm.buffer.data[14].value || 7 === aG2.id || bs.play(), aH3 && (aH7 && (bm.buffer.data[13].value || sC) ? aH3.qp(aH4.length) : aHA()))))
	}, this.show = function() {
		aHB()
	}, this.tZ = function() {
		aH5 = aH4.length - 1, aH3 && aH3.vx(), aH3 = null
	}, this.resize = function() {
		aH3 && aH3.resize()
	}, this.aGG = function() {
		return aH4
	}
}

function aF8() {
	var aHD = null,
		aHE = null,
		aHF = 0,
		aHG = 0,
		aHH = null;

	function aHJ() {
		0 !== aHE.vn && (bq.w3.tZ(), u.v(8, 29, new ub(25, {
			action: 0,
			uY: bI.f0.a1X(aHE.uY, 5),
			uZ: 0
		}, 29)))
	}

	function aHL() {
		return !bq.aF0 || bq.lj.vo(aHE) ? 1 : 0
	}

	function aHK() {
		var fg = aHD.fg,
			fi = aHD.fi,
			aHR = (bq.w3.tZ(), aHL());
		aHD = new vz([new x(br.eF[5][0], function() {
			aHO(5, 0)
		}, aHR), new x(br.eF[5][1], function() {
			aHO(5, 1)
		}, aHR), new x(br.eF[5][2], function() {
			aHO(5, 2)
		}, aHR), new x(br.eF[5][3], function() {
			aHO(5, 3)
		}, aHR)]), aHN(fg, fi), aHG = aHF = 2
	}

	function aHM() {
		29 === u.ua && u.a3T().aF1(bI.f0.a1X(aHE.uY, 5))
	}

	function aHO(id, value) {
		5 === id && b1.aHS.aHT({
			action: 3,
			uY: bI.f0.a1X(aHE.uY, 5),
			value: value
		})
	}

	function aHN(fg, fi, w5) {
		aHD.show(fg, fi, w5), bq.vd.show(aHD.fg, aHD.fi, aHE, 1)
	}
	this.aHI = function(e, sC) {
		aHF = 1, aHE = sC, aHD = new vz([new x(L(135), aHJ, 0 === sC.vn ? 1 : 0), new x(L(136), aHK, aHL()), new x(L(137), aHM, 0)]), aHN((aHH = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aHH.clientY, 1)
	}, this.a4K = function(code) {
		if (29 !== u.ua) return !1;
		if (!aHE) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.tZ();
			else if (bD.tI.startsWith(code, "Numpad") || bD.tI.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aHF) this.aHI(aHH, aHE);
				else {
					if (!aHD) return !1;
					1 === aHF ? code <= 1 ? aHJ() : 2 === code ? aHK() : (aHM(), this.tZ()) : (aHO(aHG, bO.ij(code - 1, 0, br.eF[aHG].length - 1)), this.tZ())
				}
		}
		return !0
	}, this.tZ = function() {
		aHF = 0, aHD && aHD.tZ(), aHD = null, bq.vd.tZ()
	}
}

function aGU() {
	this.vP = 0, this.fF = 0, this.mapSeed = 0, this.aFp = 0, this.aHY = 0, this.aHZ = 0, this.aHa = 0, this.aFv = 0, this.aGd = 0, this.spawningSeed = 0, this.a3X = 0, this.aFt = 0, this.tP = [], this.tQ = 1048575, this.aGc = 0, this.aHb = [{
		fF: 0,
		mapSeed: 0,
		aFp: 0,
		eZ: 100,
		aFv: 0
	}, {
		fF: 1,
		mapSeed: 0,
		aFp: 1,
		eZ: 200,
		aFv: 0
	}, {
		fF: 2,
		mapSeed: 0,
		aFp: 2,
		eZ: 300,
		aFv: 0
	}, {
		fF: 3,
		mapSeed: 0,
		aFp: 3,
		eZ: 400,
		aFv: 0
	}, {
		fF: 0,
		mapSeed: 0,
		aFp: 9,
		eZ: 500,
		aFv: 0
	}, {
		fF: 1,
		mapSeed: 0,
		aFp: 10,
		eZ: 600,
		aFv: 0
	}, {
		fF: 2,
		mapSeed: 0,
		aFp: 8,
		eZ: 700,
		aFv: 0
	}, {
		fF: 3,
		mapSeed: 0,
		aFp: 3,
		eZ: 800,
		aFv: 0
	}]
}

function aFC() {
	var aHc = [],
		ul = [],
		aHd = [];

	function aHf(sC) {
		for (var s = sC.s, aHe = [];;) {
			var ej = function aHh(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var s1 = s.substring(position + 1, position + 6);
				if (5 !== s1.length) return aHh(s, position + 1);
				if (bD.tI.startsWith(s1, "room")) return aHh(s, position + 1);
				var aHo = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aHo.test(s1)) return aHh(s, position + 1);
				aHo = s.substring(position + 6, position + 7);
				if (1 !== aHo.length) return position;
				s1 = new RegExp("^[ :!.]+$");
				if (!s1.test(aHo)) return aHh(s, position + 1);
				return position
			}(s, 0);
			if (-1 === ej) {
				aHe.push(aHi(s, sC));
				break
			}
			0 === ej ? aHe.push(aHj(s.substring(1, 6), sC, ej)) : (aHe.push(aHi(s.substring(0, ej), sC)), aHe.push(aHj(s.substring(ej + 1, ej + 6), sC, ej))), s = s.substring(ej + 6)
		}
		return aHe
	}

	function aHj(s1, sC, ej) {
		var aFJ = function(s1) {
				var uY = bJ.f0.f1(s1, 5),
					aFJ = bq.vg.aFe(uY);
				if (aFJ) {
					for (aHc.push(aFJ); 75 < aHc.length;) aHc.shift();
					return aFJ
				}
				for (var aFE = bq.vg.aFE, aC = aFE.length - 1; 0 <= aC; aC--)
					if (aFJ = aFE[aC], uY === aFJ.uY) return aHc.push(aFJ), aFJ;
				for (aC = aHc.length - 1; 0 <= aC; aC--)
					if (aFJ = aHc[aC], uY === aFJ.uY) return aHc.push(aFJ), aFJ;
				return bq.vg.aFK(uY, s1, 1, 999999, 999999, 0, 0, 0, 0, 1)
			}(s1),
			s1 = (0 === ej && 0 === sC.aG2.id && sC.tX && (sC.fontSize = bq.lj.aG8(aFJ.vn, aFJ.a5z), sC.aG6 = bq.lj.aG9(aFJ.a5z)), document.createElement("span"));
		return s1.textContent = function(aFJ, sC, ej) {
				if (aFJ.aHm) return aFJ.aHm--, ej = 2 === sC.aG2.id || (3 === sC.aG2.id || 4 === sC.aG2.id) && 0 !== ej, aFJ.username + (ej ? " (" + aFJ.aFU + ")" : "");
				if (sC.aG2.aGI) return "Redacted " + bI.f0.a1X(aFJ.uY, 2);
				return aFJ.username
			}(aFJ, sC, ej), s1.style.display = "inline-block", s1.style.color = bq.lj.vm(aFJ.vn), 11 === aFJ.vn && (s1.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), s1.style.cursor =
			"pointer", s1.style.margin = "0", s1.style.font = "inherit", s1.style.minWidth = s1.style.minHeight = "1em", bq.lj.vo(aFJ) && (s1.style.textDecoration = "underline"), aFJ.vp && (s1.style.textDecorationLine = "underline", s1.style
				.textDecorationStyle = "dotted"), bq.lj.aG9(aFJ.a5z) && (s1.style.fontWeight = "bold"), s1.onclick = function(e) {
				bq.w3.aHI(e, aFJ)
			}, bM.sm() || (s1.onmouseover = function(e) {
				bq.vd.vq(e.target, aFJ)
			}), ul.push(s1), s1
	}

	function aHi(s, sC) {
		var tH = document.createElement("span");
		return tH.textContent = s, tH.style.color = sC.aG7, tH.style.margin = "0", tH.style.font = "inherit", tH
	}

	function aHt(aFJ, aFT, uY) {
		uY !== aFJ.uY || aFJ.aFU || (aFJ.aFU = aFJ.username, aFJ.username = aFT)
	}
	this.vx = function() {
		for (var aC = 0; aC < ul.length; aC++) ul[aC].onclick = ul[aC].onmouseover = null;
		aHd = ul = null
	}, this.transform = function(sC) {
		for (var rz = document.createElement("div"), aHe = aHf(sC), aC = 0; aC < aHe.length; aC++) rz.appendChild(aHe[aC]);
		0 === sC.aG2.id && (rz.vx143 = sC.aG2, aHd.push(rz)), rz.style.margin = "0.6em 0.6em", sC.tX && (rz.style.marginLeft = rz.style.marginRight = "inherit"), rz.style.font = "inherit";
		var aHg = 0 < sC.aG2.id;
		return sC.aG6 && (rz.style.fontWeight = "bold"), aHg && (rz.style.paddingLeft = "0.7em"), aHg && (rz.style.fontStyle = "italic"), rz.style.fontSize = sC.fontSize.toFixed(2) + "em", rz
	}, this.aHr = function(aHs) {
		if (aHs && (2 === aHs.id && 1 === aHs.aG4 || 3 === aHs.id && 2 === aHs.aG4)) {
			var uY = 3 === aHs.id ? aHs.target : aHs.uY;
			if (!bq.vg.aFe(uY)) {
				for (var aFT = "Redacted " + bI.f0.a1X(uY, 2), aFE = bq.vg.aFE, aC = aFE.length - 1; 0 <= aC; aC--) aHt(aFE[aC], aFT, uY);
				for (aC = aHc.length - 1; 0 <= aC; aC--) aHt(aHc[aC], aFT, uY)
			}
		}
	}, this.aFV = function(uY) {
		for (var aHu = aHd, aHv = "@" + bI.f0.a1X(uY, 5), aC = aHu.length - 1; 0 <= aC; aC--) {
			var fc = aHu[aC];
			if (fc.vx143.uY === uY || 0 <= fc.vx143.s.indexOf(aHv)) {
				for (; fc.firstChild;) u.removeChild(fc, fc.firstChild);
				for (var aHe = aHf(bq.lj.tT(fc.vx143, bq.lj.tU(fc.vx143))), fs = 0; fs < aHe.length; fs++) fc.appendChild(aHe[fs]);
				aHu.splice(aC, 1)
			}
		}
	}, this.aGE = function(uY) {
		for (var aHu = aHd, aC = aHu.length - 1; 0 <= aC; aC--) {
			var fc = aHu[aC];
			if (fc.vx143.uY === uY) {
				for (; fc.firstChild;) u.removeChild(fc, fc.firstChild);
				fc.vx143.s = "[Redacted Message]";
				for (var aHe = aHf(bq.lj.tT(fc.vx143, bq.lj.tU(fc.vx143))), fs = 0; fs < aHe.length; fs++) fc.appendChild(aHe[fs]);
				aHu.splice(aC, 1)
			}
		}
	}
}

function cT() {
	var aHw, aHx, aHy;

	function aI3(aC) {
		var button = aZ.oy[aC],
			fg = button.fg,
			fi = button.fi,
			j = button.j,
			k = button.k;
		ws.fillStyle = button.aI1, ws.fillRect(fg, fi, j, k), aC === aHw && (ws.fillStyle = aHy, ws.fillRect(fg, fi, j, k)), ws.lineWidth = bf.a1E, ws.strokeStyle = aHx, ws.strokeRect(fg, fi, j, k),
			function(button) {
				var fg = button.fg,
					fi = button.fi,
					j = button.j,
					k = button.k;
				bD.sK.textAlign(ws, 1), bD.sK.textBaseline(ws, 1), ws.font = button.font, ws.fillStyle = aHx, ws.fillText(button.aG5, Math.floor(fg + j / 2), Math.floor(fi + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.fi = 0, this.gap = 0, this.dk = function() {
		aHw = -1, aHx = bE.pO, aHy = "rgba(255,255,255,0.16)", this.oy = new Array(7), this.k = Math.floor((a1.a2.ik() ? .123 : .093) * i.il), this.j = Math.floor((a1.a2.ik() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aHz = Math.floor(.26 * this.k),
			aI0 = bD.sK.u8(1, aHz);
		this.oy[0] = {
			fg: 0,
			fi: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aG5: "Multiplayer",
			font: aI0,
			aI1: "rgba(22,88,22,0.8)",
			fontSize: aHz
		}, aHz = Math.floor(.18 * this.k), aI0 = bD.sK.u8(1, aHz), this.oy[1] = {
			fg: 0,
			fi: 0,
			j: this.j - this.oy[0].j - this.gap,
			k: this.k,
			aG5: "Single Player",
			font: aI0,
			aI1: "rgba(22,88,88,0.8)",
			fontSize: aHz
		}, this.oy[2] = {
			fg: 0,
			fi: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aG5: "",
			font: this.oy[1].font,
			aI1: "rgba(100,0,0,0.8)",
			fontSize: this.oy[1].fontSize
		}, this.oy[3] = {
			fg: 0,
			fi: 0,
			j: this.j,
			k: this.k,
			aG5: "Back",
			font: this.oy[0].font,
			aI1: "rgba(0,0,0,0.8)",
			fontSize: this.oy[0].fontSize
		}, this.oy[4] = {
			fg: 0,
			fi: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aG5: "The game was updated!",
			font: this.oy[1].font,
			aI1: "rgba(100,0,0,0.8)",
			fontSize: this.oy[1].fontSize
		}, this.oy[5] = {
			fg: 0,
			fi: 0,
			j: this.oy[0].j,
			k: Math.floor(.8 * this.k),
			aG5: "Reload",
			font: this.oy[0].font,
			aI1: "rgba(0,100,0,0.8)",
			fontSize: this.oy[0].fontSize
		}, this.oy[6] = {
			fg: 0,
			fi: 0,
			j: this.oy[1].j,
			k: this.oy[5].k,
			aG5: "Back",
			font: this.oy[0].font,
			aI1: "rgba(0,0,0,0.8)",
			fontSize: this.oy[0].fontSize
		}, this.aBl()
	}, this.aBl = function() {
		this.fi = Math.floor(.54 * i.k), this.oy[0].fg = Math.floor(.5 * i.j - .5 * this.j), this.oy[1].fg = this.oy[0].fg + this.oy[0].j + this.gap, this.oy[2].fg = this.oy[3].fg = this.oy[0].fg, this.oy[4].fg = this.oy[5].fg = this.oy[0].fg,
			this.oy[6].fg = this.oy[1].fg, this.oy[0].fi = Math.floor(.54 * i.k), this.oy[1].fi = this.oy[0].fi, this.oy[2].fi = Math.floor((i.k - this.oy[2].k - this.oy[3].k - this.gap) / 2), this.oy[3].fi = this.oy[2].fi + this.oy[2].k + this
			.gap, this.oy[4].fi = Math.floor((i.k - this.oy[4].k - this.oy[5].k - this.gap) / 2), this.oy[5].fi = this.oy[6].fi = this.oy[4].fi + this.oy[4].k + this.gap
	}, this.aI2 = function() {
		aI3(0), aI3(1)
	}, this.aI4 = function() {
		aI3(2), aI3(3)
	}, this.aI5 = function() {
		aI3(4), aI3(5), aI3(6)
	}, this.a3m = function(fg, fi, nG) {
		var aC = -1;
		return 0 === ab.a3P() ? aC = this.a4G(fg, fi, 0, 2) : 3 === ab.a3P() ? aC = this.a4G(fg, fi, 3, 1) : 5 === ab.a3P() && (aC = this.a4G(fg, fi, 5, 2)), aHw !== aC && (aHw = aC, nG) && (bi.ds = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a4G = function(fg, fi, aI6, size) {
		for (var aC = aI6; aC < aI6 + size; aC++)
			if (fg >= this.oy[aC].fg && fi >= this.oy[aC].fi && fg <= this.oy[aC].fg + this.oy[aC].j && fi <= this.oy[aC].fi + this.oy[aC].k) return aC;
		return -1
	}
}

function cU() {
	var aI8, aI9, a9N, aIA, aIB, aIC, aID, aIE, aIF, a9M, aIG, aIH, aII, aIJ = 1,
		aIL = 0;

	function aIO(aIP) {
		aIP ? aII = (aII + 1) % b1.z.aIQ : (b1.z.close(aII, 3280), aIJ ? aIJ = 0 : (aII = (aII + 1) % b1.z.aIQ, b1.z.close(aII, 3280))), aIH = bi.eZ, aa.aIN = aIL, b1.z.aIR(aII, 4, 1) && b1.aGx.aIS(aII)
	}

	function aIT() {
		if (0 !== aII) return 1 === aII && __fx.customLobby.isActive() ? (p.a3b(3249), __fx.customLobby.setActive(!1)) : void aIO();
		p.a3b(3249)
	}

	function aIY(fi, aBT, vP) {
		var nv = Math.floor((i.j - aIA) / 2) + aID,
			o8 = nv + Math.floor(vP * (aIA - 2 * aID));
		ws.lineWidth = aBT, ws.beginPath(), ws.moveTo(nv, fi), ws.lineTo(o8, fi), ws.lineTo(Math.floor(nv - aID + vP * aIA), fi + a9N), ws.lineTo(nv - aID, fi + a9N), ws.closePath()
	}
	this.f2 = 1, this.aIM = 0, this.aIN = 0, this.dk = function() {
		bX.turnstile.ey(), ab.setState(6), aI8 = 0, aI9 = 1, aIE = "rgba(0,220,120,0.4)", aIF = "rgba(0,0,0,0.8)", this.resize(), bi.ds = !0, aIJ = 1, aII = this.f2 - 1, aIL = 0, aIO(1)
	}, this.resize = function() {
		aIA = Math.floor((a1.a2.ik() ? .5 : .25) * i.il), aIB = aIA + 12, a9N = Math.floor(.125 * aIA), aID = 3 * a9N, aIC = Math.floor(.225 * aIA), aIG = Math.floor(.3 * a9N), a9M = bD.sK.u8(0, aIG)
	}, this.a3W = function(oN) {
		oN === aII && aIT()
	}, this.hm = function(fg, fi) {
		var nv = Math.floor((i.j - aIB) / 2),
			nw = Math.floor(.5 * (i.k - bf.gap - a9N - aIC)) + a9N + bf.gap;
		return nv < fg && fg < nv + aIB && nw < fi && fi < nw + aIC && (this.a4R(), aZ.a3m(fg, fi, !1), !0)
	}, this.a4R = function() {
		b1.z.a3c(3260), __fx.customLobby.setActive(false), u.z.a0()
	}, this.ee = function() {
		6 === ab.a3P() && (bi.eZ > aIH + 12e3 && aIT(), 100 < (aI8 += .07 * aI9 * (aI8 < 16 ? 5 + aI8 : 84 < aI8 ? 105 - aI8 : 17)) ? (aI8 = 100, aI9 = -1) : aI8 < 0 && (aI8 = 0, aI9 = 1), aIE = "rgba(0," + Math.floor(190 - 1.9 * aI8) + "," +
			Math.floor(120 - 1.2 * aI8) + "," + (.4 + .004 * aI8) + ")", aIF = "rgba(0," + Math.floor(1.9 * aI8) + "," + Math.floor(1.2 * aI8) + "," + (.8 - .004 * aI8) + ")", bi.ds = !0)
	}, this.wr = function() {
		var fg = Math.floor((i.j - aIB) / 2),
			fi = Math.floor(.5 * (i.k - bf.gap - a9N - aIC));
		! function(title, fi, aBT, vP) {
			ws.fillStyle = aIF, aIY(fi, aBT, 1), ws.fill(), ws.fillStyle = aIE, aIY(fi, aBT, vP), ws.fill(), ws.strokeStyle = bE.pO, aIY(fi, aBT, 1), ws.stroke(),
				function(aIa, fi) {
					bD.sK.textAlign(ws, 1), bD.sK.textBaseline(ws, 1), ws.font = a9M, ws.fillStyle = bE.pO, ws.fillText(aIa, Math.floor(.5 * i.j), Math.floor(fi + .58 * a9N))
				}(title, fi)
		}(L(138), fi, 3, aI8 / 100),
		function(fg, fi, j, k, aG5) {
			ws.fillStyle = bE.pJ, ws.fillRect(fg, fi, j, k), ws.lineWidth = 3, ws.strokeStyle = bE.pO, ws.strokeRect(fg, fi, j, k);
			var fZ = Math.floor(.3 * k);
			bD.sK.textAlign(ws, 1), bD.sK.textBaseline(ws, 1), ws.font = bD.sK.u8(0, fZ), ws.fillStyle = bE.pO, ws.fillText(aG5, Math.floor(fg + j / 2), Math.floor(fi + k / 2 + .1 * fZ))
		}(fg, fi + a9N + bf.gap, aIB, aIC, L(40))
	}
}

function cV() {
	var a3J = 0;
	this.dk = function() {
		aZ.dk(), a3J = 0
	}, this.setState = function(aIb) {
		a3J = aIb
	}, this.a3P = function() {
		return a3J
	}, this.aIc = function() {
		this.setState(8), u.y()
	}, this.a4K = function(e) {
		if (!bV.yl) return !1;
		if (!(bi.eZ < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aId()) return !0;
				if ("Enter" === e.key) {
					if (0 === a3J) return !0;
					if (7 === a3J) return !0
				}
			}
			return !1
		}
	}, this.aIe = function() {
		bc.resize()
	}, this.aId = function() {
		return !!bc.tZ()
	}, this.hm = function(fg, fi) {
		!bV.yl || bc.hm(fg, fi) || 6 === a3J && aa.hm(fg, fi) || bb.hm(fg, fi) || aU.hm(fg, fi)
	}, this.a3m = function(fg, fi) {
		!aU.aBe && aZ.a3m(fg, fi, !0) || aU.a3m(fg, fi)
	}, this.click = function(fg, fi) {
		aU.a4B()
	}, this.a3p = function(fg, fi, deltaY) {}, this.aIf = function() {
		aZ.aBl(), bi.ds = !0
	}, this.wr = function() {
		8 !== a3J && 10 !== a3J && (ws.imageSmoothingEnabled = !0, this.a0K(), 0 !== a3J && (aU.wr(), aP.wr(), this.aIg(), bb.wr()), 0 !== a3J && 6 === a3J && aa.wr(), bc.wr(), u.wr())
	}, this.a0K = function() {
		var aIi, aIh;
		if (__fx.makeMainMenuTransparent) ws.clearRect(0, 0, i.j, i.k);
		else bV.yl ? (aIh = i.j / bV.fk, aIi = i.k / bV.fl, ws.setTransform(aIh = aIi < aIh ? aIh : aIi, 0, 0, aIh, Math.floor((i.j - aIh * bV.fk) / 2), Math.floor((i.k - aIh * bV.fl) / 2)), ws.drawImage(bV.yn, 0, 0), ws.setTransform(1, 0, 0, 1,
			0, 0), ws.fillStyle = bE.pJ) : ws.fillStyle = bE.pF, ws.fillRect(0, 0, i.j, i.k)
	}, this.aIg = function() {
		var fi = Math.floor(.3 * i.k),
			canvas = ac.aIj("territorial.io"),
			ia = (ia = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : ia,
			fg = (ws.globalAlpha = .15, ws.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - ia * canvas.width))),
			fg = Math.floor(fg / ia),
			fi = Math.floor(fi - .5 * canvas.height * ia),
			fi = Math.floor(fi / ia);
		ws.setTransform(ia, 0, 0, ia, fg, fi), ws.drawImage(canvas, fg, fi), ws.setTransform(1, 0, 0, 1, 0, 0), ws.globalAlpha = 1, ws.imageSmoothingEnabled = !0
	}
}

function cv() {
	this.aFt = 0;
	var aIl, aIm, aIn, aIo, aIp, aIq = this.aIk = 0;

	function aIs() {
		aIo = aIp = null, aIq = 0
	}
	this.dk = function(tN, aFq, aFr) {
		u.y(), bq.vx(), ab.setState(10), aIo = tN, aIp = aFq, aIq = aFr, this.aFt = tN.aFt, this.aIk = aFr, aIl = 0, aIm = bi.eZ + 4500, b1.z.a3X = tN.a3X, b1.z.f7 === tN.a3X ? (console.log("direct pass"), aIn = 0) : (console.log("delayed pass"),
			b1.z.close(b1.z.f7, 3247), aIn = 2, b1.z.aIR(tN.a3X, 5, 2) && b1.qm.aIr()), ws.imageSmoothingEnabled = !0, ab.a0K();
		aFq = ac.aIj("loading"), aFr = (a1.a2.ik() ? .396 : .25) * i.il / aFq.width;
		ws.setTransform(aFr, 0, 0, aFr, Math.floor((i.j - aFr * aFq.width) / 2), Math.floor((i.k - aFr * aFq.height) / 2)), ws.imageSmoothingEnabled = !1, ws.drawImage(aFq, 0, 0), ws.setTransform(1, 0, 0, 1, 0, 0)
	}, this.nE = function() {
		0 < aIn && bi.eZ > aIm && (aIn--, aIm += 4500, 0 === bi.aIt) && 0 === bi.kr() && b1.z.aIR(b1.z.a3X, 5, 2)
	}, this.aIu = function() {
		return 10 === ab.a3P() && (bq.aF3.aFu(aIo, aIp, aIq), aIs(), !0)
	}, this.aIv = function() {
		10 === ab.a3P() && 2 <= ++aIl && (bq.aF3.aFu(aIo, aIp, aIq), aIs())
	}
}

function cW() {
	var aIx, canvas, a2c, aIy;

	function aJ4(eI, name, aJ5, s1) {
		a2c[eI] = name, canvas[eI] = new Image, canvas[eI].onload = function() {
			! function(eI, aJ5) {
				var a64, a65 = null;
				7 === aJ5 ? a64 = bD.or.a67 : 8 === aJ5 ? (a64 = bD.or.a6A, a65 = .1) : 3 === aJ5 ? (a64 = bD.or.a68, a65 = .06) : 5 === aJ5 ? a64 = bD.or.a6B : 6 === aJ5 ? a64 = bD.or.a66 : 4 === aJ5 && (a64 = bD.or.a6C);
				canvas[eI] = bD.or.a63(canvas[eI], a64, a65)
			}(eI, aJ5), aJ7()
		}, canvas[eI].onerror = function(e) {
			console.error("Error loading image at index", eI, "Error:", e), aJ7()
		}, canvas[eI].src = "data:image/png;base64," + s1
	}

	function aJ7() {
		aIx--, aJ1()
	}

	function aJ1() {
		0 === aIx && (aIx = -1, aJ3(), bi.ds = !0, canvas[7] = aIy, canvas[8] = aIy, canvas[9] = aIy, canvas[10] = aIy, 5 === u.ua) && u.a3T().aJ9.resize()
	}

	function aJ3() {
		aM.a7T(), bb.aEt([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.yq = new a0l, ak.yq.dk(), ax.dl()
	}
	this.dk = function() {
		if (void 0 === canvas) {
			aIx = 23, canvas = new Array(aIx), a2c = new Array(aIx), (aIy = document.createElement("canvas")).width = 1;
			for (var aC = aIx - (aIy.height = 1); 0 <= aC; aC--) canvas[aC] = aIy;
			aJ3(), aJ4(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aJ4(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aJ4(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aJ4(3, "orders", 6,
					"iVBORw0KGgoAAAANSUhEUgAABqQAAABkBAMAAAASxkyFAAAAGFBMVEUAAAAsLixKS0lkZmOFh4SqrKnMzsv///8J7h1xAAAgAElEQVR42u1dS3fbNrCm+NJWaRN7q9vW8la3Sayt0trmVkltcyu/xK0Ti+Tfv8SLmAEGIBTL5yateHrSWNHnwevDDAYzwyging83Vds9zePfUeBzQBwQB4Tz+ci/L57mnwPigDggXoRIAYCDlgfEAXFAfD/iY2s9/xwQB8QB8b2IS8G8x6s/J6PfL4TJ2D4cEAfEAfECRHM1UT+PLqoBzAFxQBwQbsQZ+/fHKfwovmGf3R8QB8QBsTsiIy1Dbj2uQhDxzojogDgg/sUI5stoiH/LKpdfw0D8sTMiOiAOiH8vIipdbGPsrAMQV7shRmU92VlG9JqIk8q4afghWnVA/KyIWfcPn2n99a77p7tBRLbdDZG37XpXGbu3agfEWWs5cF6pVWnVfP6Ren5AvAaCqbUHj6fDVm0m4my7G6LE3A6SEU12RgT34526aLh/PRm6683klWW8KiLdPPyArfpeRL56DRns09rtCyyJ32cg4mq7G4Kt3s78+zANlxFFqx1bFd6PWF+LL19LhnyStr6BNsQeZaTGQnh8lX6MurG6/a5V0q/P5tVGd3dE0Ux2QFxuZITfJz8i4zyLp5HbdbGiEPDn7U6IlC/eUdk+h8uIkvWOrQrvx6m+D69fS0b/43JUrQMRyaanRXSy+TyAKHHDyu2r9CNnS+q7Volcw62k5GuM7s6IuG2/7YDQW68mFYFgNOvsndxJ9jNrIygNd3yBKTWIKPjihdbfsIwo/bpjq4L7EcMYk+XryNCnyOht9TUQUegjZ9LN69SLiKt15Njm9tmP07Zp2/n3rBK9KpvXGt2dEUfGjA8gfr3RpHqYOBGZMO6LtnboqZFJwwwdB7jdtA1G3Gw2la0TBmV0i3G7W6vC+5HzbWcZ8wvy59eRoX+eVu1TGGIERoi1ce1FGKZCAbbfgH4s7gL7UbTzBeX9Ch0rvW+9wujujGCuvJ3WlVgkKGrWQrCtcCX+59JTWWvOliV0G4rIUNjht2AZ0ei4nuzUqvB+FGpcz0yjZn8y9FlqjbydPkQKmrPo/v7kReRorYwQcQf7kVTNPKwfRTs5JgchcKz4vK9faXR3RfATSLvbutLx6Mp1ayK6b9RiUDtOTVynPGiwKgQUug1F5IhS62AZ7zZWhsoAIrwfbb8PlaYdsDcZ+t/XvQU3hEiFF6dv2ZMXsUBTn7VIFw61qrDO2C7Eon2oOsMv6UygZvsd88Hn/em1RndHBD9Eb3eUMdKK6jOFYD73Va+/tk6q3xGIfoezgU4E1lLTUBkn9r3RACK8H2zlftWtW7+GDP2M14RKpxEJ6/JcH0HWXkSBjNYcU2qgVZkdWeNCCPfEpbUlBo6VOLduX2t0d0OMKtGJzWQ3GWdq/ZL9iKretmAa7ZFuVwXtocrw+OQE050I5ApoQmVk1L2Rv1Xh/cj1wmUr9zl6BRng3Lm2fFROBFjoiFIk4giN5xhTyt8qsbQM5elAsAn8Utr+0b/DxipBuH2P7o4IafelO8/5u96X9Zv9pQzcMsTWggKOkRWFiNBRJAgBMyO3gTJG9L2Rt1Xh/RiDtbgwT5R7kgH+dW2Nlnes1ha7HIgMfePUoJS3Vey60rrOdCG631zYe+JsGzZWGcLZiNmGPbAl76/5R9d/7n8+UrEITw0XZoCME7l+483URHR8AOfSxHVNnACfHkKofWcbjFgASj0Fyjii7418raIfElEAN0luXrrsR8blZtUb6mvtQTrZ3HtlaEoleDshECnbEHslfr4IH11ux6yOTBvAhRgDSrV6iW3DxipHlLIQsblzguT0xz3OOfjta8s0CZFxJlo5E0iIiLD/O2sdxC/0SjM95kckpZyInPZO+GSMKse9kadVjodClPiU0gb3PFgG88Nei6farNvHVv0gt0eXjLI/5WUtbpiNyJcg1Cl+MCnl6ceZOKSWrXXbSCLGhJY6EysgYKwWWLuZCLU6vlqeANW6/cw558GKc2GamssqSMYlV1LEDGaEG+ALra9XNIJPBSHXhUjBGK3CZCCXxnNYq9yHVQsBKZVYlNqHjNN207f/cj1b9z9shGSXjEU/smbMgo0Yr4/0iGbbY0ypvy3Ee9XjG3mMYiaKTrJ772yVraV4Lt42bKwqTCkTMdaUiq+vN0aph+ne5lyMbrfSR1c8KBYv4BAZo5IrKbkgwfcW5uErcwTdVmotm4hEnYqySRBiBIZoHiajQC6NSUirPIdVC1GCYYstSu1DRlEnffvP1vm66vtSfvXJGPeWbm4mEViI/CHVKyPfjvudnj+dyY8RcbthSd9vebq38Jdk/K9X3aQkF5vW2SpEqTv25apfk4NjlZpnMAMBKFXa1VNWe5tzye5bh04IkZE+yNjQOUIQeq3TU42pp96utGYzEbOeUiuHvjUQYKiiMASu9bT0IJZeo9ohY4BSzp4PWxoKUdTa0XnRlGu9PZTffDK0bjpurQtIA5FtpmXvtcvrHH0/ac0Z5A2ScSzqylLeVGw2cm7oViFKGa6mwbGamSdiA6EpFRMy1nuaD237PKhj0ep75nxG2KMpodeYg/AT/ODNWdeXTK5lC1H1lLKvW0jEqZNSDkTauq6HTUTSLn3H1CUtAxp+aXCr/JYGRkDDb102J6bh55KR9ZQqDJPXRsSbdd6fhPMGUyq1ZhCsWMaobJUvRR4mmBu6VT5KDY5VZVrvBkJTKm8dWmoP8wFOdQ/S4RmltzvPuUpgmAIEa/eEchCCLDleYXPF7LU1hUj7Ac0MO86FyOlrKTfCGNxnNyI371awdnyiZRTg2JEHt8rzWAjmnngvnqr+ZVr0P6h5cMhI+3CZ0vSPmohkefnIpljaiU2KDMW0A2OEptRmybabVc48W8C/5myVj1JDY5Vh74ON0JSiZCz3NB/Q58UiW9nSOEXhXEEyZuAoohAsVjaiL7KUnvq1lH0plWqvqV/LKfXZXMMkInVSyoE4xuNauxFF69bTKl7YlrEAqHFwq3yPhbjsx+ao3dz04ma9i42WoV3nleUfNRDZbb5ZnsmdPM3av9BA8XwShOgoJe53WYmDuGxXOV9cspRWI3Q12SofpYbGakEFokGEphRxlGon+5oP6PPqduG80wYVcnUHyZBr/xYiut+zRicNpZg6QZ96d5DoSy7WWmXNrKZUbV5BkAh9NGrsSwsKsTDK5roRhDGJpE5JGZBGJUFKVz/cj4XIeouUGwvL/ntLvwxwJjdNEAOR1XHFHRRMiZ/92q7hhX6+KlcxRnSUis/Pz/9S15Edpdqamxl/nJ///YsYR7JVXkr5xyohzsMY4aeUcKPsYT6Qz6uZ5LVpngTJEIaf1G4SkYB5Ku4niH/MhPoIVnHGXRuJHYSuKWWcZGgE6MwzYRfYiDfmBL5xIbLWo6VO5eZoywBhB4lpX/n64TXeMSJHBN7qNq39MpRyiq2rExPRsfNss5QOiptltS3BEhk3l39VGBGDa1rOV+4K+aS9NM5WeSnlH6ucju0ECD+lRJf2MB+A3bzva74o17vN+USoqTuhjQSC/Q+IQMUk2NSkaO3zX58ZauAYUQonSNIIbbAT5x4KYY+tC3FqWUcG+el+xNqaPCUr4Tj64XlMxEJvH5BSpR4xWoY6QqXGOrQReXufVLW8qt+sy2YBflfOrE2M6CklDZGVWO6Pc0gpslVeSvnHqqIMDYQYoJQyRl46H/iAvsomVgjQsIzRI1dT3SpeLHtE14Eashbenc/ugDp56o/3Y2zdjUpEqXpiOwTGtjnKEgPa5mHicCGMzeOSj1IQYaRmnPPgsKupJk5Dy6j63G1i5Xr6EfldIQABEgTGj3rqwMe0DOXoywgzGSOybm4v2zvhoGjrGfMxzvV20lQNRjDSxO8/XNz0O7Vc7Y/n5+/nilJUq/yU8o1VRponCDFEqef9zIdcVdL1uhoJfXO705wfdRSacSUliC7cXwXoXFphTk1BkZO12Gm3GAEHaUtdElMIxUXOp9g+vtoIP6UAIobrLr7RLq2/Ikg4W8apTH3h6rOmDtXOfjgeAzECN9Tjq55SKYrXpWScyrVKFXzAiO533SVVc8M72TYfmYdhCY3+GiMYaTJk/MAfFKWoVvkp5RurkgxEQ4ghStV7mQ8VcCCVxlzqz+kucz5i+2FcMSUl+i7+VxnmY7udIBqi+wB+/jLOa2cGpbb2qdA64Y20r700QxIpxIdz83Egcr6LZUvz9qtbjZvqiduoT6QMYeBuBAnra/T84+zH4HkYeif0+gaUypGngpIxllQaE1w3EFWnps4Ykdr7brbvsT/jjC9jiAijFNUqP6U8Y5XQgWgIMUSpJtrHfCi7b5VJ/0ImUsxBtMKgjCO+NczueFUQ7Z/AnXtn5PhVOHCIG5YYofWYpBSmCIFAKdl2CTQSMXTyVAhxwlyIO7XK2t5SuSxtGSet53l4YavENVHb11oBlDoFH9MylHai8mcMRPeV+0TmPc3apoTKIEmqxwlGhFGKapWfUp6xWtBX/AgRRCmNKPkvq/jnpaJrH2Jc9vduVqtKKeVs83itPGbLqHwOX4miLE08593qHROJcXBgbdF+v8ywtLphnhuIrDUohQtvEgjusOWvFBnJlzQuhxD+ByCEm1xUr86syZgqN7ol46z1PrcvaxVfTHXbzxagVNl9/NXb80zeYJQtDtkjELw0lrgpWXeDvIGIxapYGogwSlGt8lPKPVYJfbOIEUGGn0aEUIotMbNVCS59EosOpOD4OTTnmbJgE6V2GYKdWu073gfbcV8rXq4yVzyrolRtMNlEKH9Goy+n5n7E0NMjsl4XdWNYEL4i5Sc1ZLzzM0oYAAIhoiQztYKSjQzdFp1hiqCS7hwso3poF7VNqepaf0z3XOUdVJQvEyFS9p36t0pMQoEzPIv68u9rjBj5KLVMlCYhWuWnlHsGF8AOF490L0JEkHtCI8Io9Wy1Spxp/hGEeSN+XLIWfgtdiaWyYMf94bBDdGZFTXDv3nLcf1O/ZY0RII9JUao1SsIaCCrMpPYicqf6NxHHfCbE6YOfPh9/r9Bk5HJKsIykGqBU1yWFqPTi2yqzt45g5JqiFJIRt1ftRxXZoimVdh/mjXus1Pa5Ele+a3tWASLjOYQPR2KXyvDILprypsaIQEoRrRqgFEb8zuKurIsgM+JCI4YotcSIMEo1Vj+q3vj6/WJzx79Y8xY2kXc+DE7WateTjsh1137rYvSk59TMClQt2qexlbBoUspIYnMjWpgg4EaMhyjVI0q5+tmKzsUpDdKl6T2CWEYxxKhuvBQCU+q0H52qD5hRlEIysvaP9r3abDSl8iZr097UsHreh0+szZxeCpFtedcfRIESWUxC70vCXQ8RXWvdlEoVlmjVAKUQotDUJikyNxFDV71Te86HKdXNi9EPXRworRoBWAs1uoy884GVyUpJkeFwT93v+Gp9+W0lXk0FM2nX6lr3GSMKglIonclEgNrjXyMyXcOSMUgpheAbugozULnvkFNL5UZHMhJ5G3NNPzw/r0eI9TqWHa76rle9PlOUQjJYEOtcOSI0pRZ11ka9f8Lqeb+dPvGd0H49BEJk7TITse28SYWZ6MfxEFG183SYUkSrBigFEan28GXum1uIGNJSWyxjmFJf3/JJN/qhDCRG6RXnUiNWfO1eiXYYSN0rrEYiunEnfISMU3eo3IMuN7VFCEAQTSl0NWUigGcbUmrrRkQZGxe+sh+vuYu7kqGeJkLUacp7fdRxB4dWr7n4J0PGKarFS58AegT/ZU+SUgk8aykRilJIRvHcUap4NilVfu0o1fsnrJ73Jvszdz1Eb6+seQWItJvgS73l5DDu5+RNpeqZa0TFiOOg1LynFNGqAUpBRO5NKFQxBBAxRClhPvcIk1JPvSmkY094uL/RD9UBkRkoyrQf4aRYej6Q4biKUHxAh+DGn/10q/AO20NzJaQuzddC2ZTCKXQIoc3p5moa/XpJ3FOYMsQRSYbhqaE2AmcFYtEr729sKmtxXARx77V6vxaSUfniAuWATRQCUYpHOJXKl/jlRM2fpBSUse4opU5NmlJVd/6NFrWz51HvPe/68zWpTEWFEN0e+1nvccsYqv/y7p2oKgoRPkpNMk0pq1WDlNIITZCsdXsbaETpOthCRCClVmY/clQjhvnM5nzq7iPPSjTPLzVYQiuBEGuO0FObKU77A2EtEFGQlIIePANxangkUttDYcoYppRCVK0al7WouSvPUxnY4MSfUEZKxxri08wUymifZIlS9vvXp3zhVrJ1fP6ezH7E7Splv2OCKZUy32HU+yfsnqsha3gh2aPWrmkAEayUT2qoy2WUsLvqss5uLUTFXeU0pXRWAdGqAUpBhD/7SectUggHpfDoBlPK6AdMwPzCklueieoeTeW6liqRIlj0AdmNi1LRG5xQsaWFJC1JKbiXYsTIKh9xZKmp76aUqB8unc58+ytlNsBMCylac3jHvkhbmlLfCk2p6JcASmWsCM80UZeZilI5OxdHvX+CnsKxPB81cvW4KcUKDU/f9b5HPoHzuBLdnn25nhiIUjSZolSjfcH7olS5L0pt90IpRPF7HtFj1u72UOoI64FcCmaUQr8jmdLucW1fGsWZjhyUauxrFUPbrq0AjS2NCKGUROTK4uOH68feWzLVw/csvwRlFEOvfshEOVJ9PcRf4tNTSry1waYUlJEzqk+VI6Kn1ILZjt0+s3L1HI7ZNrZzwQzEGYsjP4GHqYZvJ3Wn6qoNt/YhouxPfiSlts5WDVAKIgYJ8rwzYosQwZRKrSwtGCAzIcLp6Pkw3X1Kt3wTiAiVKDqu5xFJl1ukluZ0OCugFKzgiBAlTs5Ecqa0jABKSYR2oXfy51parfeHRt48GKXGnwcCLjvxCQyurKsASkEZxTOnlPRP9JQqWTmI7n+3rp6rYGa+CxGx6BiR8Piuf2QoCC9OV3etay6Zkm37/DjdqiBKEa0aoBREDBJkvTNiixDBlDL7EZtXowszB4GeD/skFfV5qwmn1BQ6MUBqBuiPfutUjKJ109ZFqW1EIoiTk/5sTcoIoZRAcKNSmpYrdK221VLEUWsOZCS23ZdaTvS6b1WlAz9MSnH3xLqnFOxHp56YeXfUIEqNuDnClZWj59wCj0Tc1nxhp2xiRP55dKOLHvE23bF8m5y9dlGa4xDhoVTdDfo3Z6sGKAURgwSZ74z4hhBlC29z5cGfopTVj9KOAL2N0qVrdN0nqaiv+h1zSgGb5wawhy5fOUIaZuaklD7uI8QxVba5Mmg2st73M0SpkXRRKSecGPUTdJM8g270NZCRU8UE7VlUCLYdsmDvyqYUupdawX7E3O5g4V8TSCmmuBillH/C7jkzzpmT96Li514Wencxt3ref7lZgdqsa15KjfGQHQhOZclLiDjmMR4kpbbdInlytmqAUhARFl60C0K0q0cMU0reS1n9yK1wtW4JlnPX6PqUlEqyH3FKwT0PvLNtQdcjQuZ85aQU2PchAmXLZF+je/ThnJIRQimBOO0Z0z1X5zdGEEvZasf3FsgY09aU5beVCE6p1kmpGlxYaBmMSoxS0j+hKMWolLWgsJR9WGKtZu+EHV3ciVpJhZkPCxAJ499HfTjNJQ/Z38tPNiLnF5MkpeCNpd0qRalmQ1IKIsIubndByFOFFR/hpJRaXGY/YjN4oNNQR61zdN0nqUjnvZmU4t55oafAHS4KaoVC0tZNqZpCxEjvFV8jplV/tbLSvpNSi96uI2ItJiqKgn8ZUsouqZSSoRqaUjX7a0lSqlmSlGLc4X494Z9QlFpsBaV6/4TVc+khfVzKTZXX11w5J71sm4epqr/TRPHNZ+mh2fzRRBSltnDrhJR6AjeWLkoxqicvpZRBkN1JGEgpqh+FdapLPRuW090nv6ophRRbr6eO6Pg7pApPPZTqVQ5E5IhSZUep+4vKGivS8GuGDT92ECcjM+Xvzns3ejMFMiqrektKJHdAw2/L/lrQWqqJKMOPuSU4pYR/QlGqXAtKKU+g3fN+QB+X4u4jxyc/AzHjgVVXFzpn5kxsivHlHYFgV085Tam1vl5xGX7/WJbK9xh+hhm3u6kYRqma6kdubZyFXWh84g+cAOZEb/jh41dc8lDCUUlHiaMDW+mj1BcCcYoodQQDkoDr3T4Uxm/evIlG3R+TSP3xhmhVUtEFSpXEQkU1LIGM2K7ekhIpiNA98cz+urApdfsOnaVAP6q1pFReA0qNROAbo9zW0fNTYCvwBOAFppSBwCH1d8rYuIvSzZxApH3YkkUp1o25zz1xubQXwep73BPfXujQCKPULdWPkel8zPByd7gnMkJJsZnq3RPG0TzmlaoyMqAVuxWz1kcpddUDESU+an2KqLHyuC5dj0KkSzelGllIYx7FKygj64WdqNeEMUqZifLQif7koBR3elBO9FiERc0j6Z+QlJKfRL1/wu45oMg3no1tFPMzEe8gpzor9FKmE5b3FCLBoeiQUiy3Y+Jzos/tffVz9D1O9O0L3e7DTnS5KRL9KFw60OdEH1FKii2F3oluXmXF1T2Ude+8Wjz1Uoq6vjS0fRRRY+W5YPMF4UlE7MzPEKbfs4lQ3omTCt4iNk4ZklLNmKCU66o3Y1tdKqrCrTSlcpE1qb5A9DxBOryTmBj7poVIb2Ayy0ZFlevzMEJUnDoUpaYgs5G86p1Yq/IL2aodL253vxwOuZdy9SN32KHR8NU7kWYor3qJgIt4CoNbp64AmFHlp9TWQiTWXnCCf8dXKwzk47X/mVqIxeO5NRON0v2lWo4aIS4U3lbgUpukFAhIeqqCKKVljH5Tf0S/AC0V/4/+twkZAJMjSlXiKFV7Qma6uRt9uN4YL2ViBgGJqID3H1EKxCM5ApLMgDJYQv+HC0hy9SN2xOT6ApJoJSXLHrpj/GZ23IQlJGv9lJIbI41QSxa/4m5rdaQcSA20ZPCyn2WzTEoo7EzuDunK6keFXxHRBFKqHqMYPz+lrKi9Kzry3UIUBqXmRkFUm1Kb6/P35zeVM7UMI3BEEqBUrYMnBiglXcOP0+g7KfX0wkDbl1CKkDAfotQRqaRYCySl6OB1XfVo4kwmOBuglHoni0bk1GZwZs09DKkPo5QZhM8KR4FbgDoSZ4ot1Q91JwoaRlIKJHc8MQe6ptSRCps1KKUQ8QY/S0GpDH/6SCUTVOh2Xx6llpEn/eBsIFsTI07RxRSgFPv4a+RL7ugXxuji+vpq4kw52TFVY/d0kGBKUakaefhY+dx9QpJM7jBSrEZGFtTSmfJm2X0WpWozjevY+keDNY2V+BVKKZgq9r/WUW8uf9HK7kei+AAcUA5K9SmIT90qfB7byR0WpQQitdYQp5SZq0ykvAnk5z+4HXeXtnepPelGklzSB0w1lWOZAESOvOiAUmuw19IpiL5A4xckFEY7Jy3uQCk7oTB2BYA4EblDSUVF09/0oUTgS6wO702cTh3O2iFKCT6CZGOYLaJ/dWZmZcH05DfMxnrDFu0bpgw+v2GL/g27l3rDCPopshDdOuzkJp/h762l0tIB5z0iUxPCjJdL8V2SUiBR/qnryNexisT41qcgakrx0VCIET7ZbOZKS6Hd8TGyE7NztSd/ZEUv8+4/c9LtVO50026u2GtXLulrECO1vqEpxQzZpVPGEKVekPYe7ZxaH0wpMu3dtPy++kfXdZJiX24EIjJLrdzDexk7MU8XuLgcptRXjDCa/zi3rRurtAe/WaWjJ8YwPQMg+CAsZLKh5m+Cinb1iFze8IkIhQX/iaQUKOfCcnqfxjBRXsypQSndqpKbdlpliLNU2upPhTFjlg/JtaHwYaoWyJqeD/icsKT4it55ESIRlepsSrEo9olbxgClXlCcRa+T0AIwwZQixyr3eCcohOskJf23hcjmxpydA5PpM2EwyjJMtt1nU6qeRKhwU2nHJNgWmlHqKYhSCMGW56jFyXVMVAaHokeM+YfZ5vFT1OssklKg6Bij03psl3MxKKVbVUga/PrhZlNr90QlltPo/flGhE+YRa5EwlN6ztt2JS8d5uR8QNvvpur2q5lj58UI5PLTlGrUq5IcMgYo9YISYvzZqUyZSSk+B5kOq+opRZYQG9nmt2903UpK3OKX/O2tDb4GqfXBvqb8FqAI5RCluGRQXrCklWxujC8qSBhEKYjI2NLO2VcvjZmbta1dhPIYXe6N3JQCpTGf8p5SqOiYQSndqvz5kimkSqkjSaly3X+qvI+4FCMfzguuZdNO8dyl7XDh0e55ez6HNWywXsOIsttsSptS265jW4+MAUq9oNAllaumLtnoYprBlKJlFO6jFIFwnqS6VVPLLQoXqOV1Yo4of2J/mpMlbS831sMqh+NPrnARXJtSm2lkRWrgsrkhlEKIjP2l5D/J6ZhfSpf+GazWKxELdLnnplSPkJRaje3SmJhSoFVpg1/XICk12xYo1sQqGAzCjNn2+KxyR4n5MFoLQydxCXuMYMw5sikFvROOAs4eSr2kHDMZGEOsY28BZ5JSDhk5EWzg7LlHSUWje1nAGZdR57mfpcs38dJi+zal+B6VYkphGSGUMhD8iLPtV6Q8KjEr9NxuVYEo5Tb8egSjVNZTChVwxpSCraruK8idPiDpwrhqMUe30OuJX0lX9gsoifkYldRxhUTkMh7ZoBTLWFx5ZPgp9ZKXBnjUlENGKKUcMhLnrRSBcJ+kYAgFetkHPCFR9Rhe9goS6C7fXP3JKNVgSs0tGSGUwoh0zr6/YvcBhfLSlq1ZCU0hCrQzud0TL+v5rPe/4Uj0usSXM6YMvYUuc3FlXQ+3KkaZYk1VexCJoI9BqUboercMP6X2+mqbwdfnhFLKISNpyasdEuFTUhphvJLqiAiCRFvGS16UVWCTtbIpNbVkhFDKahV/7XN5J6dT2Wd3VKsgpUYeJ/rLeh5XfbgdpFTeSo9f7ZChLb+nlHf/A3pFOdmqt9hn/4hL/5mISr57AVGKGYO1T4afUvt9AVtJGmUaEY06JB8AAAlbSURBVEoph4zUaffZiHxASclXto3tcHbioNZ37yWvc1wY4ygNP+ONO1hGCKXMVqX81Vv6yuVOuNC3VKsApcT5w3HV+8IXWc6QMa3LuRhuL0tGoadDDtuNS8bl49X53/otoUoJXJpvfcAyClmeF1GKHaWefT33U2q/rwkNeBXp7vNB/Ho7N8pEDCop+WLRzHxJZ58YQDwve+nwMeZOfBtt5si6aWwZIZQyW3Us3mrS9G4vEWT0RLWqUFN1UXkDkl76uuXLPscAUkrmN31xysj1JsTLdZ/fuF4b7ci9vK8abz9ykLbZv6t3GoPQNsfrryeBPX/5y6yHX5j9HfNBU8qPGDpJqYNXYuXQW6m8ULx+bX3y28AzNRE5fQw8RZRCiCBKGQhGqZr57mqdktd9LwOBnQBxLI7vHyt/2KwlI8QvgxCXla7jrsNm2R3S5otbRgyDZq0ZhYiUXLCPR3gmLRlJX6dNU4rrramv515KYcTQVe/w6ObwWLC3+SA9fl7EsJLK5MLGJ7YjcEvrOH1JRHKz8T9zE5HRRiu+5keIIEoZCCaH30yt+b89lGb5DITg2RLA5exI7rBkhHknEEInIo9vgBU68cooTEo9O2RIVbNBV/CPv1W467aMsuNcjinFTle1t1VeSmGEn1LNcnh0EyLgdB/zge/NbEqZiGElpe7HC/Stig6XVcO/BYiBtzJtLURCulZSfPeLZYRQykAwI443bsp3eVnFeeLoR0oclglK2TKGTXc3YkweVUlEjgw/YzNCCP7vD/B+u3mYXBpXIbaMGSv7UkFKNayKx623VV5KYYSfUpOQ0V3Y+/D+5mPsiZ3AiEElpRBs0ibmDNIFjUeyVxKR+Sm1shEVlX5fIN1lIAIoZSKUwbSN4m6HLqUT4JurHyizvE+Ub7w9D3i8CJJSNCKG7gnDZMYINihfZuCa4noenRlhmoSMTBWK7ynFi1wvva3yUcpA+LOfliGjm1mBVXucj4WLUiZi0N3XI9gCWllG2K2ja0uI8GZeNBMbURBqKsUXbQiRcB9zw40Z/kez6dO/xYebldUqvVByNo93kXmfixEgwlC9YiolXpBByBgy3Z2IC7b6rwMRBXCi20cpgHi3uZqwLGk+Ovzt4vElewv4kIxKvPRZU2oJ6wTRrfJRykBoSuWuZKnB0bVs3j3OR+GiFL3aVwEyxJjaDibi6Ue66m/73c8XApEbVYciXNOnNhHH7eCztVolWdGID8a8IZebpasfvTX6MAUsb/w9H358CNq2diByfdVr2n0W4kSlSXXqefThupKvI/PLmDFNVmpK8SG587fKRykDoSkVu/x9g6M7MxflHufDSSkTUQ0pKbATLcBrz525h+JfnxEi9q31KYFAAP7KNhSLtjYRQZQyWyXNWv52Dm5tfPH348haqzalaBm+x41QeVKb+yBEjF4Q33gQMT9HsTf1doziLszNp4BW8UrgmabUiq3gpb9VPkoZiLE3oXAVNLqp6UXf43xULkqZiGpISWmEMJLgjuh4K6D+nvrb5YBzwkIszBg/01TEiGQz+KzsVgHnvHg3752/Hyc8GtxHKbcMjw3gQpRksq0bwcdslVDFRjCC/+KGZcrfxdPR+fXVX2GtKtnIl4pSW0bieqBVHkqZCECp+Pp6Q2y8AaNb4QHb53y4KGUhqiEllRnWNHC814l9kYz1mkKkfueEjcClGw1K3ZIygjW6hSj70q/TIUThp9Q+WxXpi7swBFcg84UuI+lCcPPonr0ta3qxS6v4fQO7FV+Jl0bOUKom2SoPpUxEjn0LuH7PfeDoLjCl9jkfLkpZiHJIScFKtYW8t8lVcN8ZddebgLZIxMjpoGgciHduSm1pxMDjQSz4dc2NGVJPIfyU2mOrUnSZ97gMkMH3rY1dZM5C8MIUfzIXaXr7bh3eqk4rdWrqTFDqTv7oRbwtQVL2gIzYPEmATK7H0NHNEaX2ukocCYg24mhASUEE2wdvgZISf7PIf4Te/Sl8gicuSt25EDMXpfjlMoXwPx6ErDcZTYYRfkrtsVVnVorZoIzUUbfRRnQL/Y6dDNdnX6rlDq2asfnqtseOUt0szMB2SiLUawwewno+M3oaRe+v+UfXfwaPboYotddV4qCUjRjdbFahMmTktnLgfRbKZGnbs431g8tB0cxdCF2EEj8PThlDx859IPyU+v9qlZ9SNiLv1AuvUV1dNrvIYHqJ5QGvcv4/cJdFIbSWqSev23MzgKJ+BRmJg1IvlME2pj5KTJaJ2BIbxZ2JMP0NlnOCQETRx43FwMd55EN4j4T7QHgptcdW3VgxeMMyHJSiEDdLnkOatuV2p7Ga8YZkq1w4OW59iLhqPdkKrzSDMa5fvEcZGU2pl8rgbyJX7RZpUm8tJVWi4PRUeoVSuq7y0o3gI3R+o2oudAeKqz/9MnzPnhBeSu2vVamrEKFPhoNSNIIdbuu8tWprDcxH1a+HGQydoRCFZd9HrzJWxFXe0yvIcFDqpTL4OEkvbO0m4dZGDND2p0GkHkrtsVWZq0CQTwZNKRrBj/HfjlsqmtQn40gFsGYVPkP8KDMIrg73KyMnKfVyGeyDbm86duTyStfFykZ4np8LUTgptc9WETp9PiiDpJQDwc85a3IB+PtRivMvwz/8iDMIAgL3K4Ok1B5k8CG99+m3M0t/lWS9l58SccfWrYtS/+/9gCXV10MIdv2xKqngF3+r2IVhMxV//ogzWPUOvz3LICm1DxmchssovXEoqdQmYebK/P35EPw05aDUT9bz0Q1z+BHlu4ZkvFOV1Fc/ZM8LFcq9bxljglJ7kcFji2rf2cu+hfj3IiClfrZ+xGWd0MVyB2ScmQ6HH6rnaaXLq+5VBornud1nP7AVTfw+m6P/XgSg1M/Xj9E0I7zbATIu8fXtf2XOdYk2VUlhTzJEWIPD7HtH16L41yI0pX7KfqQ3m+V3yGA248N/cc6Tc+YnOp/vW4YnLDBz+db/rYiOUpv/YM9HNw//3Tl/DQRXbQ2BYVcV9NHs34pIz8//oz0/IPaJkBeR/5iffvRkXh0QB8QB4Uv6OLPeYywPb/cHxAFxQOyOkE6f5gq82bhyRvEfEAfEATGEUJnvzePVn5PR7xc3VXtAHBAHxAsQ0jLEzz8HxAFxQHwvAqUxe143cEAcEAdEGCICFfcZ4J/ogDggDogXIbrngzASm8e/owPigDggdkL8H8xj7XrcjeVgAAAAAElFTkSuQmCC"
					), aJ4(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aJ4(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aJ4(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhjuAQAAAAAAAAAgJ1x00UXx5ptvps5gKxQWFsaoUaNSZ5DDmjRpEieeeGLqDKros88+i3HjxqXOACBPDBo0KF566aWYNm1adOjQIXUOGVRYWBiHH354zJ07Nx5++OHo1q1b6iQAqLJmzZqlTmALdt1119QJAAAAAAAAAAAAAADUAsM9AAAAAAAAAADkhA0bNsT06dNTZ7CVjj766OjcuXPqDHJUeXl57LLLLqkzqKJf/epX8cwzz6TOACDHHX/88fGHP/whZs+eHR07dkydA1FUVBR9+vSJhQsXxj333BNt27ZNnQQAW1RaWpo6gS0w3AMAAAAAAAAAAAAAUDcZ7gEAAAAAAAAAIGdcccUV8frrr6fOYCs0aNAgysrKUmeQg4qKimLgwIGpM6iitWvXei4DsFndunWL+fPnxy9/+cvo1q1b6hz4L/Xr14/vfOc78fzzz8e0adOiUaNGqZMA4Es1adIkiouLU2ewBY0bN06dAAAAAAAAAAAAAABALTDcAwAAAAAAAABATrnmmmtSJ7CVvvWtb0WrVq1SZ5BjysrKYrfddkudQRXdeuutsWrVqtQZAOSg5s2bx6233hpPP/10HHXUUVFQUJA6CTarcePGMWzYsHj99ddj9OjRqXMA4L/stddeqROoAsM9AAAAAAAAAAAAAAB1k+EeAAAAAAAAAAByyqxZs2Lp0qWpM9gKjRs3jrKystQZ5JgzzjgjdQJV9Pe//91zGIAvNWbMmHj55Zdj8ODBUVxcnDoHqqVFixYxefLkeP7556N3796pcwDgX3bcccfUCVSB978AAAAAAAAAAAAAAHWT4R4AAAAAAAAAAHLOlClTYuPGjakz2AonnXRSNGrUKHUGOeIHP/hBtGnTJnUGVXTdddfF+vXrU2cAkEOOOuqoeP7552PSpEnRrFmz1DmwVbp06RJz5syJu+++O1q1apU6BwBip512Sp1AFRjuAQAAAAAAAAAAAAComwz3AAAAAAAAAACQc+6999743e9+lzqDrVBaWhpjx45NnUGOOPvss1MnUEWvvPJKXHXVVakzAMgRpaWl8fOf/zwefvjh6NKlS+oc2GaKiorixBNPjKVLl8bIkSNT5wCQcQZhAAAAAAAAAAAAAAAgHcM9AAAAAAAAAADkpIkTJ0ZFRUXqDLbCoEGDorDQJUpZd8opp8S+++6bOoMquvzyy1MnAJAjhgwZEi+++GIMGDAg6tWrlzoHakVpaWlceeWVsXDhwjjwwANT5wAAAAAAAAAAAAAAAACwnTkVAwAAAAAAAACAnLRgwYKYP39+6gy2QqtWrWLEiBGpM0jsBz/4QeoEqujpp5+OO++8M3UGAIm1bt06HnnkkZg1a1a0bNkydQ5sFwcffHA88cQTccUVVxgfBWC7++STT1InAAAAAAAAAAAAAABAZvlEGQAAAAAAAAAAOeviiy+Ozz77LHUGW+Gss85KnUBCffr0ie7du6fOoAo+//zzmDBhQuoMABIbNmxYLFmyJHr37p06Bba7hg0bxqhRo+K5556Lnj17ps4BIEP+3//7f6kTqIL169enTgAAAAAAAAAAAAAAoBYY7gEAAAAAAAAAIGc9++yz8cADD6TOYCu0b98+zjzzzNQZJDJixIgoKChInUEVzJkzJ37729+mzgAgkRYtWsScOXNi2rRpUVpamjoHktp///3jN7/5TUyZMiV1CgAZ8cEHH6ROoAoM9wAAAAAAAAAAAAAA1E2GewAAAAAAAAAAyGnjxo2Ljz76KHUGW+Hcc89NnUACPXr0iEMPPTR1BlXw0UcfxZgxY1JnAJDIqaeeGs8//3z07ds3dQrkjJKSkrjwwgtj0aJF0blz59Q5ANRxy5YtS51AFaxbty51AgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAOW358uVx5513ps5gK3z961+P4447LnUG29nIkSOjqKgodQZVcMcdd8Rrr72WOgOA7ayoqCh++tOfxq233hotWrRInQM5qXv37vHUU0/Fj370o9QpANRhGzZsMFyeB9auXZs6AQAAAAAAAAAAAACAWmC4BwAAAAAAAACAnDdu3Lj44IMPUmewFc4///zUCWxHHTt2jD59+qTOoAreeeedGD16dOoMALazrl27xnPPPRdnnXWWoT3YgqZNm8aPf/zj+OUvfxmNGjVKnQNAHeVvn7nv3XffTZ0AAAAAAAAAAAAAAEAtMNwDAAAAAAAAAEDOe/fdd+OWW25JncFW6NWrV/Ts2TN1BttJWVlZFBcXp86gCmbMmBFr165NnQHAdjRs2LB4/PHHY7/99kudAnnlhBNOiKVLl8ahhx6aOgWAOui9995LncAWvP3226kTAAAAAAAAAAAAAACoBYZ7AAAAAAAAAADIC+PHj4+33nordQY1VFhYGKNGjUqdwXbQqlWr6N+/f+oMqmD58uUxadKk1BkAbCeFhYXxs5/9LH7yk59EkyZNUudAXmrbtm089NBDfrcBYJtbvXp16gS24K9//WvqBAAAAAAAAAAAAAAAakG91AEAAAAAAAAAAFAV69evj5kzZ8bEiRNTp1BDxxxzTHTu3Dleeuml1CnUojFjxkTjxo1TZ1AFU6ZMicrKytQZAGwH7dq1izvuuCO6deuWOgXyXsOGDeOKK66Ir3/96zFo0KDYsGFD6iQA6oAVK1akTmAL/E0TAACAfHHTTTdFcXFx6ozMGTRoUOoEAAAAAAAAAGrIcA8AAAAAAAAAAHlj8uTJcfrpp8dee+2VOoUaaNCgQZSVlcXAgQNTp1BLmjRpEt/97ndTZ1AFzzzzTPzsZz9LnQHAdnDsscfGrFmz4itf+UrqFKhTvvvd78Y+++wTAwYMiFdeeSV1DgB57uWXX06dwGZUVFTE448/njoDAAAAquTkk0+Ohg0bps7IHMM9AAAAAAAAAPmrMHUAAAAAAAAAAABUVWVlZUydOjV1BlvhW9/6VrRq1Sp1BrVkzJgxUVpamjqDLaisrIyLL744dQYA28HIkSPj7rvvNtoDtWTfffeNJ554Io4//vjUKQDkuXnz5sXGjRtTZ7AJb7zxRqxduzZ1BgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAeWXGjBnxpz/9KXUGNdS4ceMoKytLnUEtKCoqikGDBqXOoArmzp0b8+fPT50BQC276aab4oorroiSkpLUKVCnNW/ePO68884YM2ZM6hQA8tjq1avjzTffTJ3BJixbtix1AgAAAAAAAAAAAAAAtcRwDwAAAAAAAAAAeWfKlCmpE9gKJ510kgPk66BRo0ZFy5YtU2ewBevXr4+xY8emzgCgFjVp0iQee+yxOPPMM6OgoCB1DmRCcXFxTJo0KW655ZbUKQDksT/+8Y+pE9iEP/zhD6kTAAAAAAAAAAAAAACoJYZ7AAAAAAAAAADIO3fddVcsWrQodQY1VFpaGuPGjUudwTZ25plnpk6gCn7xi1/En/70p9QZANSSNm3axNNPPx2HHXZY6hTIpNNOOy0WLFgQTZo0SZ0CQB5auHBh6gQ24YEHHkidAAAAAAAAAAAAAABALTHcAwAAAAAAAABAXpo4cWJUVlamzqCGBg8eHIWFLl+qK4YOHRpt27ZNncEWfPDBBzF69OjUGQDUkp49e8YTTzwR++67b+oUyLTDDz88Fi5c6P0xANV23333RUVFReoMvmDlypXx4osvps4AAAAAAAAAAAAAAKCWOPkCAAAAAAAAAIC8NG/evFiwYEHqDGqoVatWMXz48NQZbCPnnHNO6gSqYNasWfHuu++mzgCgFvTv3z8eeOCB+OpXv5o6BYiITp06xeOPPx4HH3xw6hQA8shrr70WL7/8cuoMvuCpp55KnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN6aMGFCbNiwIXUGNTRkyJDUCWwDJ510Uuy///6pM9iCN954I8aPH586A4BaMHDgwLj99ttjl112SZ0C/JtWrVrFnDlzom/fvqlTAMgjjz/+eOoEvuD+++9PnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN565plnYs6cOakzqKH27dvHGWeckTqDrfTDH/4wdQJVcPXVV0dFRUXqDAC2sfPOOy9uuummaNSoUeoU4Evssssucdddd8XAgQNTpwCQJ2644Yb4/PPPU2fwTytXrowHH3wwdQYAAAAAAAAAAAAAALXIcA8AAAAAAAAAAHlt3Lhx8fHHH6fOoIbOPffc1AlshWOOOSYOOuig1BlswdKlS2PGjBmpMwDYxsrKyuLaa6+NBg0apE4BNqNx48Zx0003xdChQ1OnAJAHXnvttViyZEnqDP7p4YcfTp0AAAAAAAAAAAAAAEAtM9wDAAAAAAAAAEBee/XVV+Oee+5JnUENdevWLY499tjUGdTQ8OHDo6CgIHUGm7Fx48aYOHFi6gwAtrFLL700Jk2aFEVFRalTgCpo0KBBXHfddTFq1KjUKQDkgdtuuy11AhHx6aefxo9//OPUGQAAAAAAAAAAAAAA1DLDPQAAAAAAAAAA5L2xY8fGmjVrUmdQQ8OHD0+dQA0ceOCBccQRR6TOYAsee+yxeOCBB1JnALANXXrppVFeXm48D/JM/fr14/LLL4+LL744dQoAOe7GG2+MVatWpc7IvEcffTRWrFiROgMAAAAAAAAAAAAAgFpmuAcAAAAAAAAAgLz39ttvx2233ZY6gxrq1atX9OzZM3UG1VRWVhZFRUWpM9iMzz77LMrLy1NnALANGe2B/FZUVBTjx4+PSy+9NHUKADnulltuSZ2QaRUVFXHllVemzgAAAAAAAAAAAAAAYDsw3AMAAAAAAAAAQJ1QXl4e//d//5c6gxooKiqKUaNGpc6gGtq1axff/OY3U2ewBffdd18sWbIkdQYA24jRHqgbCgoKory83HgPAJt12WWXxZtvvpk6I7MeffTR+N3vfpc6AwAAAAAAAAAAAACA7cBwDwAAAAAAAAAAdcJHH30UN954Y+oMaujoo4+Ozp07p86gisaOHRvFxcWpM9iMDz/8MEaPHp06A4BtZPTo0UZ7oA75/8d7xo8fnzoFgBxVUVERM2fOTJ2RSZ999llMnDgxdQYAAAAAAAAAAAAAANuJ4R4AAAAAAAAAAOqMiRMnxsqVK1NnUAPFxcVx4YUXps6gClq0aBEnnHBC6gy24JZbbonVq1enzgBgGxg1alRcdtllRnugjikoKIiLLrooRo0alToFgBw1efLkeOWVV1JnZM69994bixYtSp0BAAAAAAAAAAAAAMB2YrgHAAAAAAAAAIA6o6KiIn7yk5+kzqCG+vfvHy1btkydwRaMHTs2GjdunDqDzXjzzTdj7NixqTMA2AbOPvvsmDhxYhQVFaVOAWpBUVFRTJo0KYYOHZo6BYAcVV5eHhUVFakzMuOdd94xqgcAAAAAAAAAAAAAkDGGewAAAAAAAAAAqFOmTp0ar7zySuoMaqBx48YxZsyY1BlsRklJSQwYMCB1Bltw3XXXxfr161NnALCVTjjhhJg6dWo0aNAgdQpQi+rVqxdTp06NwYMHp04BIAc9+OCDcffdd6fOyIxLL7003n777dQZAAAAAAAAAAAAAABsR4Z7AAAAAAAAAACoc6644orUCdTQySefHCUlJakz2ITx48dHaWlp6gw24+WXX46rr746dQYAW+mwww6Lm266KXbYYYfUKcB20KBBg5g+fXr069cvdQoAOegHP/hBrFy5MnVGnffII4/EzJkzU2cAAAAAAAAAAAAAALCdGe4BAAAAAAAAAKDOuf322+MPf/hD6gxqoLS0NMaNG5c6gy9RWFgYgwcPTp3BFlx++eWpEwDYSvvuu2/ceeed0bRp09QpwHbUuHHjuPXWW6NHjx6pUwDIMWvWrIlzzz03Pv3009QpddaqVavitNNOS50BAAAAAAAAAAAAAEAChnsAAAAAAAAAAKiTLrvssti4cWPqDGpg8ODBUVjo0qZcM3LkyNh9991TZ7AZTz75ZNx1112pMwDYCs2bN49f/vKX8ZWvfCV1CpDALrvsEvfcc0+0a9cudQoAOWb+/PnGemvJxx9/HEOGDIn3338/dQoAAAAAAAAAAAAAAAk43QIAAAAAAAAAgDrpoYceiscffzx1BjXQqlWrGD58eOoMvuCss85KncBmfP755zFhwoTUGQBshcLCwrj//vtj7733Tp0CJNSyZcv41a9+FU2aNEmdAkCOmThxYtx9992pM+qUjRs3RllZWSxYsCB1CgAAAAAAAAAAAAAAiRjuAQAAAAAAAACgzrrkkkvi888/T51BDQwZMiR1Av/me9/7nhGBHPfrX/86nnrqqdQZAGyFX/ziF9GjR4/UGUAO6NixYzz44INRWOgjHwD8p1NPPdVY+TZ05ZVXxvTp01NnAAAAAAAAAAAAAACQkE9xAQAAAAAAAABQZ/3ud7+Lhx9+OHUGNdC+ffs4/fTTU2fwT0OHDk2dwGasW7cuysrKUmcAsBWmTJkS3/nOd1JnADnkf//3f+PWW29NnQFAjqmsrIx+/frFs88+mzol7/30pz+NMWPGpM4AAAAAAAAAAAAAACAxwz0AAAAAAAAAANRp48ePj/Xr16fOoAa+//3vp04gIk488cTo0qVL6gw247bbbovly5enzgCghgYPHhwjRoxInQHkoIEDB8b48eNTZwCQY9avXx9HHnmk8Z6tcMMNN8Q555yTOgMAAAAAAAAAAAAAgBxguAcAAAAAAAAAgDrtpZdeinvvvTd1BjXQrVu36NevX+qMzDvvvPNSJ7AZ77zzTowdOzZ1BgA11L1795g6dWrUq1cvdQqQo8rLy+O73/1u6gwAcszatWvjyCOPjMceeyx1Sl6prKyMq666ymA4AAAAAAAAAAAAAAD/YrgHAAAAAAAAAIA6r7y8PNauXZs6gxoYPnx46oRMO/LII+N//ud/UmewGdOmTfP6BpCnSktL44477oimTZumTgFyWIMGDWLmzJnRtWvX1CkA5Ji1a9fGMcccE3feeWfqlLywfv36uOCCC2L06NGpUwAAAAAAAAAAAAAAyCGGewAAAAAAAAAAqPNWr14dt99+e+oMauCQQw6Jnj17ps7IrAsuuCAKCgpSZ7AJr7/+ekyePDl1BgA19Itf/CL22muv1BlAHthll13itttui5KSktQpAOSYysrKGDhwYIwdOzbWr1+fOidnrV69Oo4//vi47rrrUqcAAAAAAAAAAAAAAJBjDPcAAAAAAAAAAJAJ5eXl8e6776bOoJqKioriggsuSJ2RSd26dYsjjjgidQabMWXKlKisrEydAUANTJkyxf+zQLV07Ngx7rrrrtQZAOSoKVOmxHHHHRd/+ctfUqfknN/85jfRo0ePmD9/fuoUAAAAAAAAAAAAAABykOEeAAAAAAAAAAAyYe3atXHTTTelzqAGevfuHR07dkydkTmjR4+OevXqpc5gExYvXhy33HJL6gwAauA73/lODB8+PHUGkIeOO+64mDBhQuoMAHLUo48+Gl26dIk777wzKioqUuckt2bNmigrK4vevXvH6tWrU+cAAAAAAAAAAAAAAJCjDPcAAAAAAAAAAJAZF110Ufztb39LnUE1FRcXx+jRo1NnZErbtm2jb9++qTPYhIqKCge2A+SpNm3axPTp06N+/fqpU4A8VVZWFn369EmdAUCO+uijj2LgwIFxwgknxKuvvpo6J4mNGzfGI488Et26dYsrr7wydQ4AAAAAAAAAAAAAADnOcA8AAAAAAAAAAJlRUVER06ZNS51BDRx//PHRokWL1BmZMXbs2CgpKUmdwSbMnTs3Hn300dQZANTAbbfdFrvuumvqDCCPFRcXx/XXXx+lpaWpUwDIYXPmzInOnTvHRRddFO+8807qnO3mhRdeiG9/+9vRr1+/WLFiReocAAAAAAAAAAAAAADygOEeAAAAAAAAAAAy5eqrr45ly5alzqCaGjduHGPHjk2dkQnNmzePE044IXUGm/DJJ594LgDkqauuuip69OiROgOoA/bYY4+4/fbbU2cAkOMqKyvjsssui3bt2sXUqVPr9IDPCy+8EEOHDo2uXbvGAw88kDoHAAAAAAAAAAAAAIA8YrgHAAAAAAAAAIDMufrqq1MnUAMnn3xylJSUpM6o88aNGxdNmjRJncEm3HXXXfHSSy+lzgCgmvr27RvnnXde6gygDundu3eMHz8+dQYAeWDt2rUxYsSIaN26dVxyySXx+uuvp07aJioqKuK3v/1tDBgwILp27RqzZs1KnQQAAAAAAAAAAAAAQB4y3AMAAAAAAAAAQObcfPPN8dxzz6XOoJqaNWsW5eXlqTPqtJKSkhgwYEDqDDbh/fffjzFjxqTOAKCaSktLY8aMGdGgQYPUKUAdM3r06Dj44INTZwCQJ9avXx+XXHJJtG/fPk466aSYM2dOrFu3LnVWtb3xxhtx/fXXR9euXePwww+Pu+++O3USAAAAAAAAAAAAAAB5zHAPAAAAAAAAAACZdPnll8fGjRtTZ1BNgwcPjsJClz3VlvLy8mjWrFnqDDbhxhtvjHfffTd1BgDVNGvWrNhjjz1SZwB1UMOGDWPWrFlRVFSUOgWAPHPvvffGcccdF7vttlv88Ic/jHnz5sU//vGP1FlfauPGjfGXv/wlZs+eHX379o2vfe1rMWzYsPjTn/6UOg0AAAAAAAAAAAAAgDrACRYAAAAAAAAAAGTS/fffH0899VTqDKrpq1/9apx//vmpM+qkwsLCOO2001JnsAkrV66MCRMmpM4AoJqGDBkS/fv3T50B1GGdOnWKG264IXUGAHnqo48+iunTp8c3v/nNKC0tjeOOOy6uv/76WLRoUaxZsyZJ08aNG+ONN96IRx55JCZMmBD77rtv7L333nHGGWfE3LlzkzQBAAAAAAAAAAAAAFB31UsdAAAAAAAAAAAAqVx66aXxm9/8JoqKilKnUA1DhgyJa6+9NnVGnTN8+PBo1apV6gw24eqrr46KiorUGQBUwx577BGTJk2KgoKC1ClAHXfaaafFQw89FA8++GDqFADy3Jw5c2LOnDn/+nePHj3i4IMPjk6dOkXr1q1jt912ixYtWsROO+201ff1+eefx3vvvRdvvfVWrF69OpYvXx4vvvhiLFiwIP7+979v9c8HAAAAAAAAAAAAAICqMNwDAAAAAAAAAEBmPfHEEzF37tzo169f6hSqoUOHDnH66afHrbfemjqlThkyZEjqBDbh+eefj5kzZ6bOAKCaZs2aFc2bN0+dAWRAvXr14pprron58+fH+vXrU+cAUIf8/ve/j9///vf/dXuTJk2iU6dOsddee8XOO+8cO+20UzRq1CgaN24chYWF//G1n3zySaxfvz7Wrl0b//jHP+Ktt96KFStWxCuvvLK9HgYAAAAAAAAAAAAAAGyS4R4AAAAAAAAAADJtwoQJcdRRR0VxcXHqFKrh+9//vuGebeiss86K9u3bp87gS1RWVsbEiRNTZwBQTeedd14cffTRqTOADGnTpk3MmjUrBg8enDoFgAxYu3ZtLFq0KBYtWpQ6BQAAAAAAAAAAAAAAtkph6gAAAAAAAAAAAEhp6dKl8atf/Sp1BtXUrVu36NevX+qMOuP73/9+6gQ24bHHHosHH3wwdQYA1dCqVasYP3586gwggwYMGBDHHXdc6gwAAAAAAAAAAAAAAACAvGG4BwAAAAAAAACAzBs/fnysW7cudQbVNHz48NQJdcIJJ5wQBxxwQOoMvsSnn34a5eXlqTMAqKYZM2ZEs2bNUmcAGVRUVBRXXXVVFBUVpU4BAAAAAAAAAAAAAAAAyAuGewAAAAAAAAAAyLwVK1bEz3/+89QZVNMhhxwSPXr0SJ2R984///zUCWzCfffdF88++2zqDACq4fTTT49+/fqlzgAyrG3btnHdddelzgAAAAAAAAAAAAAAAADIC4Z7AAAAAAAAAAAgIsaNGxfvv/9+6gyqoaioKEaOHJk6I68dccQRxo9y1Jo1a6KsrCx1BgDV0KhRo5g4cWIUFBSkTgEy7qyzzoqePXumzgAAAAAAAAAAAAAAAADIeYZ7AAAAAAAAAAAgIt5///24+eabU2dQTX369IkOHTqkzshbI0aMiMJCl5HloptvvjlWr16dOgOAapg6dWrsvvvuqTMAori4OK666qrUGQAAAAAAAAAAAAAAAAA5z4kLAAAAAAAAAADwTxdffHG8+eabqTOohuLi4igrK0udkZe6du0aRx55ZOoMvsTq1atj/PjxqTMAqIZevXrFoEGDUmcA/Ev37t1j+PDhqTMAAAAAAAAAAAAAAAAAcprhHgAAAAAAAAAA+Kf169fHjBkzUmdQTSeccEI0b948dUbeGT16dNSvXz91Bl/iuuuui/Xr16fOAKAarr766mjQoEHqDID/MHr06CgtLU2dAQAAAAAAAAAAAAAAAJCzDPcAAAAAAAAAAMC/ufLKK+P1119PnUE1NG7cOMaNG5c6I6+0bds2+vbtmzqDL/HSSy/FNddckzoDgGq44IIL4sADD0ydAfBfdt1117j22mtTZwAAAAAAAAAAAAAAAADkLMM9AAAAAAAAAADwbyorKx1snIcGDBgQJSUlqTPyRllZWTRs2DB1Bl+wcePGmDRpUuoMAKqhSZMmccEFF6TOANikk046KQ4++ODUGQAAAAAAAAAAAAAAAAA5yXAPAAAAAAAAAAB8wY033hgvvvhi6gyqoVmzZjF27NjUGXmhefPm8e1vfzt1Bl/iqaeeirvvvjt1BgDVcNVVV0WLFi1SZwBsUoMGDWLy5MmpMwAAAAAAAAAAAAAAAABykuEeAAAAAAAAAAD4EpdffnnqBKpp8ODBUVjokqgtGTt2bOy0006pM/iCDRs2xEUXXZQ6A4BqOOCAA2LQoEGpMwC26JBDDvF6BQAAAAAAAAAAAAAAAPAlnFIBAAAAAAAAAABf4t57742FCxemzqAa9thjj/jRj36UOiOnlZSUxIABA1Jn8CUeeOCBePrpp1NnAFANU6ZMiZKSktQZAFUyduzY1AkAAAAAAAAAAAAAAAAAOcdwDwAAAAAAAAAAbMIll1wSlZWVqTOohiFDhqROyGllZWWx6667ps7gC9atWxfl5eWpMwCohv79+8eRRx6ZOgOgytq3bx+jR49OnQEAAAAAAAAAAAAAAACQUwz3AAAAAAAAAADAJixYsCDmz5+fOoNq2GeffWLw4MGpM3JSYWFhnH766akz+BK33nprLF++PHUGANUwbtz/x959h1dd3///fyYBZBmjyBARFXAUQZSKq9SKuLWuunBbUam4qyJLRHFW69Y6WrVu3BXrbJ1VUcRaKXUXFS2CICIgiAm/Pz78+kWrECDkmZxzu11X/lCT9/vOdXlxkpxzXo8hUVJSkp0BsESOO+64aNy4cXYGAAAAAAAAAAAAAAAAQJ1huAcAAAAAAAAAABZh2LBhMW/evOwMlkD//v2zE+qkE044Idq3b5+dwXdMmjQphgwZkp0BwBLo169fdO/ePTsDYIm1bds2RowYkZ0BAAAAAAAAAAAAAAAAUGcY7gEAAAAAAAAAgEUYM2ZM3H///dkZLIFNNtkkdt111+yMOufII4/MTuB7XHnllTFjxozsDACqqbS0NE455ZTsDIClduihh0ZFRUV2BgAAAAAAAAAAAAAAAECdYLgHAAAAAAAAAAAWY8iQITF79uzsDKqppKQkTjjhhOyMOuXwww+P9ddfPzuD73jrrbfi/PPPz84AYAkMGTIkOnTokJ0BsNRatGgR55xzTnYGAAAAAAAAAAAAAAAAQJ1guAcAAAAAAAAAABbj3Xffjdtvvz07gyWw9dZbx5ZbbpmdUWccc8wx2Ql8jwsuuCCqqqqyMwCopoYNG8aRRx6ZnQGwzPr06RMtW7bMzgAAAAAAAAAAAAAAAABIZ7gHAAAAAAAAAACqYfDgwTF9+vTsDKqprKwsTjnllOyMOmH33XePH//4x9kZfMeLL74YN910U3YGAEvgrLPOitVXXz07gwL1zTffxOzZs2PGjBnx2WefxaRJk+Kzzz6Lzz77LGbMmBGzZ8/OTqSAVFRUxPDhw7MzAAAAAAAAAAAAAAAAANI1yA4AAAAAAAAAAID6YMqUKfGHP/whTj755OwUqmmnnXaK9ddfP958883slFQnnnhidgLfUVlZGcOGDcvOAGAJNG7cOA477LDsDOqp+fPnx6effhofffRRTJgwISZOnBiTJk2K//znP/H+++/HuHHjYsaMGYu9TllZWfzoRz+Kdu3aRZs2bWLttdeONdZYI9q2bRtt27aNNddcM1ZcccVa+BNRCPbff/8YNmxYTJkyJTsFAAAAAAAAAAAAAAAAII3hHgAAAAAAAAAAqKYhQ4bEAQccEG3atMlOoRpWWGGFOP3004v6kP2tttoqfvrTn2Zn8B1//vOf48knn8zOAGAJnHPOOdG6devsDOqJyZMnx/jx42Ps2LHxwgsvxDPPPBNTp05d5utWVlbGuHHjYty4cT/4Od27d48tt9wyunfvHhtuuGGst9560axZs2W+N4WnoqIiBg8ebOgTAAAAAAAAAAAAAAAAKGqGewAAAAAAAAAAoJrmzJkTV199dZx11lnZKVTTXnvtFaeeempMmTIlOyXFaaedFqWlpdkZLGT27NkxcODA7AwAlkDjxo3joIMOys6gDvvqq6/i1Vdfjaeffjr+9Kc/xZgxY9Jaxo4dG2PHjv3vP5eWlsYuu+wSO++8c2yxxRbRuXPnaNDA2wj4PwceeGCcccYZMWPGjOwUAAAAAAAAAAAAAAAAgBROZAAAAAAAAAAAgCVw7rnnxr///e/sDKqpefPmMWTIkOyMFN26dYvtttsuO4PvuP3222P8+PHZGQAsgWHDhkXLli2zM6hjvvzyy3j44Yfj+OOPj1atWsVWW20VZ5xxRupoz/epqqqKhx56KH71q1/FRhttFO3bt48hQ4bE888/H3Pnzs3OI1mLFi2MSgIAAAAAAAAAAAAAAABFzXAPAAAAAAAAAAAsgaqqqrjkkkuyM1gC+++/fzRu3Dg7o9YNHDgwGjZsmJ3BQj777DMHowPUM2VlZXHIIYdkZ1BHzJ8/P8aOHRtDhgyJNdZYI37+85/HlVdeGbNmzcpOq7ZJkybFueeeG1tttVW0b98+zjzzzHj99ddj/vz52WkkOfDAA6O01FtLAAAAAAAAAAAAAAAAgOLk3VUAAAAAAAAAALCErrzyyhg3blx2BtXUsmXLohtLWWuttWLXXXfNzuA7rr322pg6dWp2BgBLYMiQIbHaaqtlZ5Bs9uzZceedd8aWW24Zm2yySZx77rkxY8aM7KxlNmXKlDjrrLNi4403jm233TZGjhwZX375ZXYWtaxdu3ZxwgknZGcAAAAAAAAAAAAAAAAApDDcAwAAAAAAAAAAS+GCCy7ITmAJHHrooVFaWjwvlxo0aFA0bdo0O4OF/Pvf/45hw4ZlZwCwBEpLS+Pwww/PziDRtGnT4rrrrov1118/DjjggBg9enR20nLz1FNPxf777x+dOnWKyy+/PCZNmpSdRC3ydx0AAAAAAAAAAAAAAABQrIrnJAoAAAAAAAAAAKhBt912W7z00kvZGVRT+/bt4/jjj8/OqBUVFRWx9957Z2fwHRdeeGFUVVVlZwCwBI477rho3759dgYJvvjii7jsssuiQ4cO0a9fv5g4cWJ2Uq2ZMmVKnHjiibHGGmvE8OHD4z//+U92ErWgS5cusddee2VnAAAAAAAAAAAAAAAAANS6BtkBAAAAAAAAABSeL774IkaNGpWdARER8Y9//CM7gQJ29tlnx0MPPRSlpaXZKVRD375949JLL83OWO6GDh0aFRUV2Rks5NVXX41rr702OwOAJfTLX/4yO4Fa9vXXX8e9994bAwYMKKqxnu9TWVkZw4cPjwsuuCCGDRsWffv2jRYtWmRnsRz169cv7rvvvuwMAAAAAAAAAAAAAAAAgFpluAcAAAAAAACAGjd9+vQ4+OCDszMAlrtHHnkk/vKXv8R2222XnUI1dO7cOQ4++OC45ZZbslOWm4YNG8YBBxyQncFCqqqqYvjw4dkZACyhffbZJ7p27ZqdQS165pln4vTTT4/Ro0dnp9Qpc+bMiYEDB8ZFF10UF198cey///7RqFGj7CyWg5/97GfRuXPnGD9+fHYKAAAAAAAAAAAAAAAAQK0pzQ4AAAAAAAAAAID6bPjw4TFv3rzsDKrpmGOOyU5YrgYNGhStW7fOzmAhTz75ZIwaNSo7A4Al1L9//+wEasnUqVPjpJNOil69ehntWYSpU6fGYYcdFttuu228+OKL2TksBw0bNoyTTz45OwMAAAAAAAAAAAAAAACgVjXIDgAAAAAAAAAAgPrshRdeiFGjRsWee+6ZnUI1bLrpprHLLrvEww8/nJ1S40pLS+PQQw/NzmAhc+fOjUGDBmVnALCEtthii+jZs2d2BsvZ/Pnz4+GHH45jjjkmJk6cmJ1Tbzz//PPxk5/8JAYMGBCnn356rLTSStlJ1KBdd901ysrKorKyMjsFAACWWWlpaWywwQbRvn37aNu2bbRp0ybKy8ujvLw8VlxxxWjevHk0bdo0GjVqFI0aNYomTZpEWVnZf7++WbNmEfF/Pz/Onj37v/9+3rx5MXfu3Pj666/j66+/jlmzZsWsWbPiyy+/jJkzZ8b06dNj8uTJ8cknn8THH38cb7zxRsybN6/W//wAFI9OnTpF165dY4011og2bdpEy5Yto6KiIpo1axbNmjWLpk2bRpMmTf77+c2aNYtvvvkm5s6dGxH/95zm//9YNXPmzPjiiy9ixowZ8cUXX8Tnn38e06ZNiw8//DBef/31mDBhQsYfEQAAAAAAAAAAlivDPQAAAAAAAAAAsIyGDh0aO+ywQzRt2jQ7hcUoKSmJE088sSCHe4477rhYa621sjNYyMiRI2Ps2LHZGQAsoRNOOCFKS0uzM1iOpk2bFoMHD45rr702O6XeuuCCC+Lee++Na6+9Nnr16pWdQw1p1apVHHPMMXHFFVdkpwAAwGI1a9YsNt988+jcuXN07Ngx2rVrF61atYqWLVtGixYtYuWVV/7WEE+W+fPnxxdffBFTp06NqVOnxuTJk+Pjjz+ODz74IN599914+eWX48MPP8zOBKCOa9iwYWyzzTbRvXv36Ny5c6y99tqx2mqrRatWrf47NlcbZs+eHVOmTIkpU6bEpEmT4t13341//vOf8cwzz8S7775bax0AAAAAAAAAAFCTSiJifnYEAAAAAAAAQE3697//HWuuuWZ2RlH74IMPYu21187OAKhVN954Yxx66KHZGVRDZWVlbLXVVvHiiy9mp9SocePGRefOnbMzWGD69OnRpUuX+OSTT7JTAFgCLVq0iPfffz9WXHHF7BSWkzFjxsQhhxwSb775ZnZKwRg2bFicdtpp0aRJk+wUasBLL70UW265ZXYGdchLL70Um266aXZG0enXr19cd9112RkAUCc0bNgwtt1229h0001jnXXWiY4dO8Yaa6wRrVu3rhPDPDVh2rRp8cknn8QHH3wQ7733XvzjH/+Iv/71rzFhwoTsNACSbLzxxrHzzjvHRhttFD/60Y+iU6dO0ahRo+ysRZo2bVp8+OGH8fbbb8fLL78cf/7zn/0eFpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9ydG5c+fsBAAAAAAAAAAAFjDcAwAAAAAAAAAAxJlnnhlff/11dgbEa6+9FldddVV2BgD1wKqrrpqdwEI+/fTT7AQAAIBlst9++2UnFL0LLrjAaM8PqKqqij322CNGjx6dnVK0dthhh+wEYDmZO3du3H///fGTn/wkNt988/jtb38bs2bNSuuZN29eXHHFFbH11ltHjx494rbbbouZM2em9bB8dOzYMTsBAAAAAAAAAIAFGmQHAAAAAAAAAAAA+caMGRP333+/gwlJNX/+/Dj77LOzMwCoJwz31C2GewAAgPqsXbt2scUWW2RnFLUbbrghBg0alJ1Rp82bNy/23HPPeO655xz2n6Br166x/vrrx5tvvpmdAtSQb775Jh588MEYNmxYjB8/Pjvne73++utx8MEHR7t27eKcc86JvffeO5o0aZKdRQ1o165ddgLV8Jvf/Cbuuuuu7Iwl9uijj0bjxo2zM4rO1ltvnZ1Qaz755JPsBAAAAAAAAIAaZbgHAAAAAAAAAACIiIihQ4fGLrvsEs2bN89OoUg9+eST8cADD2RnAFBPrLzyytkJLOTjjz/OTgAAAFhqRx99dDRq1Cg7o2g98sgjcdRRR2Vn1AuTJk2KQw45JB555JEoLy/PzikqZWVlcfjhh8eAAQOyU4Aa8OKLL8bAgQPj2WefzU6plokTJ8ahhx4al156afz2t7+Nn/3sZ9lJLKPVVlstO4FqmDBhQkyYMCE7Y4lVVVVlJxSl+vKYAgAAAAAAAMD/Ks0OAAAAAAAAAAAA6oZ333037rjjjuwMitTXX38dQ4YMyc4AoB5ZaaWVshNYyAcffJCdAAAAsNR22WWX7ISiNX78+Nh3332zM+qVF198MQYMGBDz58/PTik62223XXYCsIw+//zzOP300+MnP/lJvRxYeO2116JXr15x/PHHx+eff56dwzJo2bJllJWVZWcAAAAAAAAAABCGewAAAAAAAAAAgIUMGTIkpk2blp1BEbrnnnvilVdeyc4AoB5ZccUVsxNYyLvvvpudAAAAsFS6desW3bp1y84oSp9//nn06dMnZs2alZ1S71x77bUxcuTI7Iyi07Vr1+jUqVN2BrCUXn755fjJT34SF154YXbKMrvyyivjpz/9qedX67GysrLYYostsjMAAAAAAAAAAAjDPQAAAAAAAAAAwEKmTJkSf/jDH7IzKDJffPFFnH766dkZANQz5eXl2Qks5B//+Ed2AgAAwFI59NBDo6SkJDuj6MyfPz9OP/30eOONN7JT6q2+ffvG+++/n51RVMrKyuLggw/OzgCWUFVVVVx11VWx+eabx5tvvpmdU2PGjx8fW2yxRdx2223ZKSylzp07ZycAAAAAAAAAABCGewAAAAAAAABYDtZcc82oqqry4aPGPvbee+/s/62hqJxxxhnxySefZGdQRH7/+9/HxIkTszMAqGeaN2+encACc+bMialTp2ZnAAAALJVtt902O6Eo3XnnnXH99ddnZ9Rrs2bNipNOOikqKyuzU4pK7969sxOAJTBr1qw4/vjj47jjjstOWS6qqqri4IMPjnPOOcfjQT209tprZycAAAAAAAAAABCGewAAAAAAAAAAgO+YM2dOXHPNNdkZFImPP/44hgwZkp0BQD1kuKfumD59enYCAADAUunWrVtssMEG2RlF54MPPoijjjoqO6MgPPTQQ3HvvfdmZxSV7t27R3l5eXYGUA3Tpk2L/fffP66++urslOVu6NChMWDAgPjmm2+yU1gC7du3z04AAAAAAAAAACAM9wAAAAAAAAAAAN/jvPPOi/feey87gyJw6aWXxpw5c7IzAKhnWrRoEY0aNcrOYIEZM2ZkJwAAACyVQw89NEpKSrIzikplZWWceuqpMWvWrOyUgtG/f/+YMmVKdkbRaNy4cRxwwAHZGcBifPrpp7HHHnvEww8/nJ1Sa37729/G4MGDo7KyMjuFamrVqlV2AgAAAAAAAAAAYbgHAAAAAAAAAAD4HlVVVXHJJZdkZ1Dg/vnPf8bFF1+cnQFAPdShQ4fsBBYybdq07AQAAIClss0222QnFJ377rsv7rnnnuyMgjJ16tS46qqrsjOKSq9evbITgEWYPHly7LXXXvH8889np9S63/zmN3HeeedlZ1BNLVq0yE4AAAAAAAAAACAM9wAAAAAAAAAAAD/g6quvjjfeeCM7gwI2YsSI7AQA6qlVV101O4GFTJ8+PTsBAABgiXXo0CE22GCD7IyiMm3atDjppJOyMwrSiBEj4u23387OKBo9evTITgB+wPTp0+Oggw6KF198MTslzRlnnBG33XZbdgbVsMoqq2QnAAAAAAAAAAAQhnsAAAAAAAAAAIBFOP/887MTKFDPPPNM3HXXXdkZANRTK6+8cnYCC5k2bVp2AgAAwBI75JBDoqysLDujqFxxxRXxySefZGcUpKqqqvjtb3+bnVE01lprrejWrVt2BvAdX3/9dfTr1y+efPLJ7JR0hx56aIwePTo7g8WoqKjITgAAAAAAAAAAIAz3AAAAAAAAAAAAi3DHHXfEiy++mJ1Bgfnmm2/ijDPOyM4AoB5zmF3dMnXq1OwEAACAJbbNNttkJxSV9957L84+++zsjIJ23XXXxfjx47MzisY+++yTnQB8x9ChQ2PkyJHZGXVCVVVVHHroofHZZ59lp7AI5eXlUV5enp0BAAAAAAAAAFD0DPcAAAAAAAAAAACLdNZZZ0VVVVV2BgXkwQcfjOeeey47A4B6zEF2dcuMGTOyEwAAAJZI48aNo3v37tkZReXiiy/2XEMtuPrqq7MTisaWW26ZnQAs5K677orf/OY32Rl1yttvvx2nn356zJ8/PzuFRdhwww2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYJEee+yxePLJJ7MzKBAzZ86MgQMHZmcAUM+ttNJK2QksZPr06dkJAAAAS+Sggw6Kpk2bZmcUjfHjx8fvfve77IyicPXVV8eECROyM4pC9+7do7TUW/WhLhg3blwccsgh2Rl10h/+8Id46KGHsjNYhLXXXjs7AQAAAAAAAACg6Hk1IAAAAAAAAAAAsFjDhg2LefPmZWdQAP74xz/Gu+++m50BQD234oorZiewkM8//zw7AQAAYIlsu+222QlF5fLLL89OKCq33XZbdkJRKC8vj7322is7A4re7Nmz4+ijj/Zc9iIce+yxMXXq1OwMfkDLli2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYLFGjx4df/rTn7IzqOc+/fTTGDRoUHYGAAWgadOm2QksZNq0adkJAAAAS2SzzTbLTiga77zzTlx33XXZGUXlN7/5TcyYMSM7oyhsvfXW2QlQ9C655JJ48cUXszPqtIkTJ8YVV1yRncEPWHnllbMTAAAAAAAAAACKnuEeAAAAAAAAAACgWgYPHhyzZ8/OzqAeu/LKKx0WCECNaNiwYXYCC5k8eXJ2AgAAQLV179491lxzzeyMonHLLbdkJxSdGTNmxBNPPJGdURQ22mij7AQoaq+99loMHTo0O6NeGDFiRLz11lvZGXyPioqK7AQAAAAAAAAAgKJnuAcAAAAAAAAAAKiWt99+O0aOHJmdQT319ttvx3nnnZedAUCBWHHFFbMTWMjEiROzEwAAAKptzz33zE4oGlOnTo2LLrooO6Mo/f73v89OKAqdO3fOToCiNW/evDjllFOyM+qNqqqquOSSS7Iz+B4rr7xydgIAAAAAAAAAQNEz3AMAAAAAAAAAAFTboEGDYvr06dkZ1EMXXHBBVFVVZWcAUCAaNGiQncAC8+fPjw8//DA7AwAAoNo233zz7ISi8eCDD8acOXOyM4rSo48+Gu+88052RsGrqKiIXr16ZWdAUbrzzjvjqaeeys6oV6677roYP358dgbfUV5enp0AAAAAAAAAAFD0DPcAAAAAAAAAAADVNmnSpLj55puzM6hnXnrppbjxxhuzMwAoII0bN85OYIGvvvoqOwEAAGCJbLTRRtkJRaGqqiquvvrq7Iyi9vjjj2cnFIXevXtnJ0DRmT59egwcODA7o1668sorsxP4DsM9AAAAAAAAAAD5DPcAAAAAAAAAAABLZMiQIfHpp59mZ1BPVFZWxrBhw7IzACgwTZs2zU5ggXnz5mUnAAAAVNu2224bLVq0yM4oCmPHjo2xY8dmZxS1m2++OebPn5+dUfC6d++enQBF54YbbohPPvkkO6Ne+t3vfhcffPBBdgYLWXHFFbMTAAAAAAAAAACKnuEeAAAAAAAAAABgicyaNSuuvfba7AzqiUceeSSeeOKJ7AwACkxpqZdB1xWGewAAgPpk2223zU4oGg888EB2QtEbM2ZMvP3229kZBW+DDTbIToCi8umnn8YZZ5yRnVGv3XHHHdkJLGSFFVbITgAAAAAAAAAAKHresQoAAAAAAAAAACyxs846KyZMmJCdQR03e/bsGDRoUHYGAAWoefPm2Qks8NVXX2UnAAAAVFv37t2zE4rCV199FVdffXV2BhHx/PPPZycUvHbt2sW6666bnQFF44477og5c+ZkZ9Rrl19+ecyePTs7gwWaNWuWnQAAAAAAAAAAUPQM9wAAAAAAAAAAAEusqqoqLrvssuwM6rg77rgjxo0bl50BACxHlZWV2QkAAADV1rlz5+yEovDyyy/H9OnTszOIiAcffDA7oeCVlJTETjvtlJ0BReHzzz+PM888Mzuj3ps0aVI8/fTT2Rks0LBhw+wEAAAAAAAAAICiZ7gHAAAAAAAAAABYKpdddlmMHz8+O4M66rPPPotBgwZlZwBQoMrKyrITWGD27NnZCQAAANXSpUuXaNu2bXZGUXjkkUeyE1hg1KhRMW3atOyMgrfhhhtmJ0BRePDBB2PGjBnZGQXhzjvvzE5ggUaNGmUnAAAAAAAAAAAUPcM9AAAAAAAAAADAUrvggguyE6ijrrvuupgyZUp2BgAFqnHjxtkJLDBv3rzsBAAAgGrZaaedshOKwrx58+KPf/xjdgYL+fvf/56dUPDWW2+97AQoePPmzYvf/va32RkF49Zbb43JkydnZxARTZs2zU4AAAAAAAAAACh6hnsAAAAAAAAAAICldsstt8To0aOzM6hj/v3vf8ewYcOyMwCAWjB37tzsBAAAgGrp0aNHdkJReOONN2LSpEnZGSzE8zjLX4cOHbIToOD97W9/i3HjxmVnFJRnnnkmO4GIaNCgQXYCAAAAAAAAAEDRM9wDAAAAAAAAAAAsk3POOSfmz5+fnUEdcvHFF0dlZWV2BgAFrFGjRtkJAAAA1DNdu3bNTigKL7zwQnYC3/HYY49lJxS81q1bR/v27bMzoKDdcccd2QkFZ9SoUdkJhOc7AAAAAAAAAADqAsM9AAAAAAAAAADAMhk1alT89a9/zc6gjnj11Vfj6quvzs4AoMA1bNgwO4EFjPUBAAD1QUVFRXTs2DE7oyg88sgj2Ql8x7PPPhszZszIzihoJSUlsd1222VnQMH69NNP4/e//312RsG5/fbb48svv8zOICLWWmut7AQAAAAAAAAAgKJmuAcAAAAAAAAAAFhmw4cPj2+++SY7g2RVVVUxYsSI7AwAoBZ99dVX2QkAAACLtccee0SDBg2yMwreF198YbinjnrzzTezEwreRhttlJ0ABeuvf/1rVFVVZWcUnMrKynj11VezM4jwfSoAAAAAAAAAQDLDPQAAAAAAAAAAwDJ7/vnn4+GHH87OINmTTz4ZDz74YHYGAAAAAMC3bLzxxtkJReGNN97ITuAHjB8/Pjuh4K2//vrZCVCw7r777uyEgjV69OjsBAAAAAAAAAAASGe4BwAAAAAAAAAAqBFDhw6NOXPmZGeQZO7cuTFkyJDsDAAAAACA/2FQo3b8/e9/z07gBxhVWv46duyYnQAF6ZNPPokHHnggO6NgPfTQQ9kJAAAAAAAAAACQznAPAAAAAAAAAABQI8aNGxd33313dgZJ7r777hgzZkx2BgAAAADA/+jUqVN2QlEYPXp0dgI/4IUXXshOKHhrrLFGNGzYMDsDCo6/v5avF154ISZPnpydUfRWXHHF7AQAAAAAAAAAgKJmuAcAAAAAAAAAAKgxb731VnYCCaZPnx6DBg3KzgAAAAAA+B/NmjWLNdZYIzuj4H3zzTfx0EMPZWfwA0aPHh2zZs3KzihoZWVl0bNnz+wMKDiPP/54dkLBe/PNN7MTip7hHgAAAAAAAACAXIZ7AAAAAAAAAACAGlFWVhb9+vXLziDBCy+8EBMnTszOAKCINGnSJDuBBWbOnJmdAAAAsEjbb799NGjQIDuj4H300UcxY8aM7AwWwe/xl7+NNtooOwEKyuzZs+Pmm2/Ozih4b7zxRnYCAAAAAAAAAACkMtwDAAAAAAAAAADUiDPPPDPatWuXnUGC3r17R/fu3bMzAIAEK6ywQnYCAADAIvXo0SM7oSi8//772QkshuGe5a9Tp07ZCVBQxo0bF/PmzcvOKHgvv/xydgIAAAAAAAAAAKQy3AMAAAAAAAAAACyzZs2aRd++fbMzSLLCCivE2WefnZ0BQBH56quvshNYoGHDhtkJAAAAi9S5c+fshKLw9ttvZyewGB9++GF2QsFba621shOgoLz66qvZCUXhiSeeiPnz52dnAAAAAAAAAABAGsM9AAAAAAAAAADAMjv77LOjdevW2Rkk2mGHHWKHHXbIzgAAAAAA+JZOnTplJxSFf/3rX9kJLIbhnuWvffv22QlQUJ566qnshKIwadKk+PTTT7MzAAAAAAAAAAAgjeEeAAAAAAAAAABgmbRs2TIOO+yw7AySlZaWxrBhw7IzAAAAAAC+Ze21185OKAr/+Mc/shNYjA8++CA7oeCtttpq2QlQMObOnRsPPvhgdkbRmDBhQnYCAAAAAAAAAACkMdwDAAAAAAAAAAAskxEjRkRFRUV2BnXA5ptvbsQJAAAAAKgzevToEU2aNMnOKHjffPNN/O1vf8vOYDHeeuut7ISCt8oqq0T79u2zM6AgvPfeezFv3rzsjKLx73//OzsBAAAAAAAAAADSGO4BAAAAAAAAAACW2lprrRV9+vTJzqAOOe2007ITAIBa1KBBg+wEAACAH7TxxhtnJxSFTz/9NCorK7MzWIwxY8bE/PnzszMK3uabb56dAAXhX//6V3ZCUfnggw+yEwAAAAAAAAAAII3hHgAAAAAAAAAAYKmdffbZ0bx58+wM6pD1118/Tj311OwMAKCWNG7cODsBAADgB6233nrZCUVhypQp2QlUw7x58+LLL7/Mzih4/t6BmjF+/PjshKLyzjvvZCcAAAAAAAAAAEAawz0AAAAAAAAAAMBS6dKlS/ziF7/IzqAOOv744x3iD8ByNW/evOwEAAAA6oEOHTpkJxSFyZMnZydQTTNmzMhOKHjt2rXLToCCMHbs2OyEovL3v/89OwEAAAAAAAAAANIY7gEAAAAAAAAAAJbK8OHDjbPwvVZfffU466yzsjMAKGBff/11dgILlJZ6SToAAFB3GdCoHYZ76o/p06dnJxS8Nm3aZCdAvVdZWRlPPvlkdkZRee211+Kbb77JzgAAAAAAAAAAgBTeJQkAAAAAAAAAACyxzTbbLHbdddfsDOqwvn37OpwOAIpA06ZNsxMAAAB+0BprrJGdUBSmTJmSnUA1zZw5Mzuh4LVq1So7Aeq9//znPzFr1qzsjKIzderU7AQAAAAAAAAAAEhhuAcAAAAAAAAAAFhiw4YNi4YNG2ZnUIdVVFTEeeedl50BQIGaM2dOdgIL+J4QAACoq8rLy2PVVVfNzigK06ZNy06gmgxhLH/+3oFl95///Cc7oSgZ7gEAAAAAAAAAoFgZ7gEAAAAAAAAAAJbItttuG9tvv312BvXAvvvuG126dMnOAKAAVVZWZiewQKNGjbITAAAAvtdWW20VpaXeRlsbJk+enJ1ANRnuWf5atmyZnQD13sSJE7MTipIhPgAAAAAAAAAAilWD7AAAAAAAAAAAAKB+GTp0qMMOqZYmTZrEOeecE7vvvnt2CgCwnDRu3Dg7AQAA4HsZFa89PXv2jA4dOmRnUA1t27bNTih45eXlUVFREdOnT89OgXrro48+yk4oSv7eAgAAAAAAAACgWBnuAQAAAAAAAAAAqm3PPfeMnj17ZmdQj+y8887Rq1eveOqpp7JTACggM2fOzE5ggbKysuwEAACA77XWWmtlJxSNgw8+ODsB6pQePXrEE088kZ0B9dbEiROzE4rS1KlTsxMAAAAAAAAAACBFaXYAAAAAAAAAAABQf5x++ulRUlKSnUE9UlZWFsOHD8/OAKDAVFVVZSewQNOmTbMTAAAAvtdqq62WnQAUqY4dO2YnQL320UcfZScUpenTp2cnAAAAAAAAAABACsM9AAAAAAAAAABAtRx88MHRo0eP7AzqoZ49e0afPn2yMwAoILNnz85OYIEGDRpkJwAAAHyvVq1aZScARapdu3bZCVCvvf3229kJRWnGjBnZCQAAAAAAAAAAkMJwDwAAAAAAAAAAUC2nnXZadgL12MCBA7MTACggc+fOzU5ggUaNGkWzZs2yMwAAAP7Hqquump0AFKmWLVtmJ0C99o9//CM7oShNnz49OwEAAAAAAAAAAFIY7gEAAAAAAAAAABarf//+scEGG2RnUI916dIlTjzxxOwMAArEvHnzshNYSIcOHbITAAAA/ofhDCBLRUVFdgLUWzNnzozKysrsjKJkuAcAAAAAAAAAgGJluAcAAAAAAAAAAFik0tLSOOGEE7IzKAAnnnhilJWVZWcAUAC+/PLL7AQW0qZNm+wEAACAb6moqIjy8vLsDKBIGe6BpTdz5szshKLl9+4AAAAAAAAAABQrwz0AAAAAAAAAAMAinXrqqdGpU6fsDApA+/bt46yzzsrOAKAAzJs3LzuBhay66qrZCQAAAN/So0eP7ASgiK288srZCVBvGY8BAAAAAAAAAABqm+EeAAAAAAAAAADgB5WVlUX//v2zMyggRx11VLRs2TI7A4B6bvbs2dkJLGSVVVbJTgAAAPiWjh07ZicARay8vDw7AeqtuXPnZicULaNJAAAAAAAAAAAUK8M9AAAAAAAAAADADxo+fHi0a9cuO4MC0qJFixgxYkR2BgD1nAME65aKiorsBAAAgG9p3759dgJQxAz3wNIz2p7nq6++yk4AAAAAAAAAAIAUhnsAAAAAAAAAAIDvVV5eHkcccUR2BgXowAMPjHXXXTc7A4B67IsvvshOYCErrbRSdgIAAMC3rLbaatkJQBFbccUVsxOg3jIeAwAAAAAAAAAA1DbDPQAAAAAAAAAAwPc688wzo3Xr1tkZFKCmTZvGeeedl50BQD02Y8aM7AQWUlFRkZ0AAADwLS1btsxOAIpYs2bNonHjxtkZUC9VVlZmJxStyZMnZycAAAAAAAAAAEAKwz0AAAAAAAAAAMD/aNmyZRx22GHZGRSwXXfdNXr27JmdAUA9NX369OwEFrLKKqtkJwAAAHxLeXl5dgJQ5Dp37pydALBEvvnmm+wEAAAAAAAAAABIYbgHAAAAAAAAAAD4HyNGjIiKiorsDApYw4YN46yzzsrOAKCemjZtWnYCC2nRokV2AgAAwLestNJK2QlAkVtttdWyE6Bemj17dnYCAAAAAAAAAABQZAz3AAAAAAAAAAAA39KhQ4fo06dPdgZF4Gc/+1nstdde2RkA1ENTp07NTmAhBh8BAIC6xnAPkK158+bZCVAvVVVVZScAAAAAAAAAAABFxnAPAAAAAAAAAADwLcOHD3eYGLWipKQkBg8enJ0BQD30/vvvZyewEAdiAwAAdU15eXl2AlDk/L4EAAAAAAAAAAAA6gfDPQAAAAAAAAAAwH916dIl9t577+wMisjGG28cxxxzTHYGAPXM1KlT4+uvv87OYIGKiorsBAAAgG9ZccUVsxOAIme4BwAAAAAAAAAAAOoHwz0AAAAAAAAAAMB/nXXWWbHCCitkZ1Bkfv3rX0dpqZezAbBkZs6cmZ3AAg7EBgAA6pIOHTpEWVlZdgZQ5Jo1a5adAAAAAAAAAAAAAFSDkw4AAAAA+P/Y+/M4r+t6//9/zIwIIY64gOZCJJw0RUvDT0ckjiZW6DE1TUtTE7T0gFKoiArDNoC4JW65YLmhx31JIxWVECnREI6KuKMhgQgiAoIww++f8+trHkZnYGYe75n39Xq58M8s79dtvIwwy+v9vAMAAABARETsu+++ccghh2RnUIS++tWvRkVFRXYGAE2M4Z7CUVZWFl26dMnOAAAAiIiITp06ZScAROvWrbMTAAAAAAAAAAAAgFow3AMAAAAAAAAAAEREREVFRbRo0SI7gyJ16qmnRnl5eXYGAE3IsmXLshP4lK997WvZCQAAABER8eUvfzk7ASA222yz7AQAAAAAAAAAAACgFgz3AAAAAAAAAAAA0bNnzzjooIOyMyhi7du3j9GjR2dnANCEfPTRR9kJfMrOO++cnQAAABAREe3atctOAIg2bdpkJwAAAAAAAAAAAAC1YLgHAAAAAAAAAACIIUOGRGmp24nIdcIJJzj0H4Ba+/DDD7MT+JQdd9wxOwEAACAiItq2bZudABBf+tKXshMAAAAAAAAAAACAWnDSBgAAAAAAAAAAFLkjjjgiunfvnp0B0aZNmxg1alR2BgBNxAcffJCdwKd8+ctfzk4AAACIiIjWrVtnJwAY7gEAAAAAAAAAAIAmwnAPAAAAAAAAAAAUuUGDBkVJSUl2BkRExI9+9KPYZ599sjMAaAIWLVqUncCnbLfddtkJAAAAEWG4BygMhnsAAAAAAAAAAACgaTDcAwAAAAAAAAAARez44483kkJBadGiRVRWVmZnANAELF68ODuBT2nfvn12AgAAQEREtGnTJjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAEARGzhwYHYC/B8HHnhgHHroodkZABS4+fPnZyfwKVtvvXV2AgAAQEREtG7dOjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAECR6tu3b+y+++7ZGfB/lJaWxpAhQ7IzAChwhnsKy9Zbbx3l5eXZGQAAAPGlL30pOwEgNt100+wEAAAAAAAAAAAAoBYM9wAAAAAAAAAAQBEqLS2N/v37Z2dAjbp27Rp9+vTJzgCggL322mvZCXxKSUlJ7LffftkZAAAAhnuAgmC4BwAAAAAAAAAAAJoGwz0AAAAAAAAAAFCEzj777OjcuXN2BnyugQMHRmmp29wAWL/XX3891qxZk53Bp+y+++7ZCQAAAIZ7AAAAAAAAAAAAAIBac6IBAAAAAAAAAAAUmbKysujbt292Bnyhf/u3f4tBgwZlZwBQwBYvXpydwKd06tQpOwEAACBat26dnQAAAAAAAAAAAAAANBGGewAAAAAAAAAAoMgMHz48dtxxx+wMqJV+/fpFq1atsjMAKFBLlizJTuBTvvKVr2QnAAAARMuWLbMTAKJFixbZCQAAAAAAAAAAAEAtGO4BAAAAAAAAAIAiUl5eHn369MnOgFrbbrvt4oILLsjOAKBALV68ODuBTzEOCQAAFIJNN900OwHAiBgAAAAAAAAAAAA0EYZ7AAAAAAAAAACgiAwbNiy23Xbb7AyokxNPPNEQAADrtXDhwuwEPmW77bbLTgAAAAAAAAAAAAAAAAAAqDXDPQAAAAAAAAAAUCTatWsXP//5z7MzoM622GKLGDNmTHYGAAXovffey07gU7bZZhtjewAAQLpNNtkkOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQJGorKyMtm3bZmfABjnqqKNir732ys4AoMD8/e9/z07gMw444IDsBAAAoMi1bNkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBHYeeed46c//Wl2Bmywli1bxsiRI7MzACgwb775ZnYCn7HnnntmJwAAAAAAAAAAAAAAAAAA1IrhHgAAAAAAAAAAKALDhw+PNm3aZGfARvnBD34Q3//+97MzACggL7zwQnYCn/G1r30tOwEAAAAAAAAAAAAAAAAAoFYM9wAAAAAAAAAAQDPXpUuXOOqoo7IzYKOVlpZGRUVFdgYABWTOnDmxatWq7Aw+pVOnTtkJAABAkSsrK8tOAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQzI0YMSJatmyZnQH1Yt99943jjz8+OwOAAvLee+9lJ/ApHTp0yE4AAACKnJ+HAwAAAAAAAAAAAAC1ZbgHAAAAAAAAAACasX333TcOOeSQ7AyoV+eee252AgAFZNGiRdkJfEqbNm2ia9eu2RkAAAAAAAAAAAAAAAAAAF/IcA8AAAAAAAAAADRjFRUV0aJFi+wMqFe77rprnHXWWdkZABSI+fPnZyfwGT169MhOAAAAAAAAAAAAAAAAAAD4QoZ7AAAAAAAAAACgmerZs2ccdNBB2RnQIM4444xo1apVdgYABeDtt9/OTuAz9t577+wEAAAAAAAAAAAAAAAAAIAvZLgHAAAAAAAAAACaqSFDhkRpqVuEaJ523HHHGDFiRHYGAAXgzTffzE7gM77+9a9nJwAAAAAAAAAAAAAAAAAAfCGncgAAAAAAAAAAQDN0xBFHRPfu3bMzoEH16dMn2rVrl50BQLKXXnopO4HP6Ny5c3YCAAAAAAAAAAAAAAAAAMAX2iQ7AAAAAAAAAIDmp6qqKj744IPsDJqRVatWZSdAkzNo0KAoKSnJzoAGteWWW8aFF14YJ510UnYKAImmTZsW1dXVUVpamp3C/9p8883jgAMOiCeffDI7BQAAAAAAAAAAAAAAAACgRoZ7AAAAAAAAAKh38+bNi69+9avZGQBF6/jjj4999tknOwMaxY9//OO45JJL4sUXX8xOASDJihUr4v3334/27dtnp/ApPXr0MNwDAACkWL16dbRu3To7AwAAAAAAAAAAAABoAkqzAwAAAAAAAAAAgPo1cODA7ARoNK1bt47KysrsDACSvfvuu9kJfMaee+6ZnQAAABSpqqqq7AQAAAAAAAAAAAAAoIkw3AMAAAAAAAAAAM1I3759Y/fdd8/OgEZ1yCGHxAEHHJCdAUCit99+OzuBz/jGN76RnQAAAAAAAAAAAAAAAAAA8LkM9wAAAAAAAAAAQDNRWloa/fv3z86ARldWVhZDhw7NzgAg0euvv56dwGd89atfjQ4dOmRnAAAAAAAAAAAAAAAAAADUaJPsAAAAAAAAAAAAoH6cffbZ0blz5+wMSNGjR4845phj4o477shOASDBK6+8kp3AZ5SUlMQRRxwR48aNy06hyBx00EExYcKE7Iyic99998Uvf/nL7AwAgIiIWL16dXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIBmoKysLPr27ZudAanOP/98wz0ARerpp5/OTmA9unXrZriHRrfHHnvENttsk51RdL70pS9lJwAA/NPatWuzEwAAAAAAAAAAAACAJqI0OwAAAAAAAAAAANh4w4cPjx133DE7A1J16dIlzjjjjOwMABLMmTMnPvroo+wMPmPPPffMTqAIdezYMTuhKPk7GAAAAAAAAAAAAAAAAGiKDPcAAAAAAAAAAEATV15eHn369MnOgIIwYMCAKCsry84AIMHf//737AQ+o3PnzrHddttlZ1Bkdtppp+yEorRq1arsBACAf/rkk0+yEwAAAAAAAAAAAACAJsJwDwAAAAAAAAAANHHDhg2LbbfdNjsDCkKHDh1ixIgR2RkAJHjjjTeyE/iMsrKy+MlPfpKdQZHZYYcdshOK0urVq7MTAAD+yaggAAAAAAAAAAAAAFBbhnsAAAAAAAAAAKAJa9euXfz85z/PzoCCcsopp8TWW2+dnQFAI3vllVeyE1iP/fffPzuBItOhQ4fshKK0dOnS7AQAgH/6+OOPsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADRhlZWV0bZt2+wMKCjbbLNNjB49OjsDgEY2a9as7ATWo2vXrtkJFJHtt98+2rVrl51RlD744IPsBACAf1q5cmV2AgAAAAAAAAAAAADQRBjuAQAAAAAAAACAJmrnnXeOn/70p9kZUJCOO+646Ny5c3YGAI3oySefjHXr1mVn8Bnbb7999OjRIzuDIrH//vtHSUlJdkZRev/997MTAAD+6eOPP85OAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQRA0fPjzatGmTnQEFqXXr1nHBBRdkZwDQiObPnx/vvfdedgbrcfjhh2cnUCT22GOP7ISitWjRouwEAIB/WrVqVXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIAmqEuXLnHUUUdlZ0BBO/TQQ6N79+7ZGQA0ojfffDM7gfXo1q1bdgJFokuXLtkJReudd97JTgAA+KeVK1dmJwAAAAAAAAAAAAAATYThHgAAAAAAAAAAaIJGjBgRLVu2zM6AgtaiRYsYPnx4dgYAjejll1/OTmA9vvGNb0S7du2yMygCu+yyS3ZCUVq7dq3hHgCgoCxfvjw7AQAAAAAAAAAAAABoIgz3AAAAAAAAAABAE7PvvvvGIYcckp0BTcL+++8fRxxxRHYGAI1k5syZ2QmsR8uWLeOkk07KzqCZKy8vj44dO2ZnFKWPPvooOwEA4F+sXLkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBNTUVERLVq0yM6AJqGkpCQGDx6cnQFAI3niiSeyE6hBr169shNo5v7zP/8zNtlkk+yMovTBBx9kJwAA/IuPP/44OwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBPSs2fPOOigg7IzoEnZa6+94tRTT83OAKARzJ49OxYvXpydwXp07do1Nttss+wMmrH99tsvO6FoLVu2LDsBAOBfLFmyJDsBAAAAAAAAAAAAAGgiNskOAAAAAAAAAAAAam/IkCFRWlqanQFNzllnnRXXXXddVFdXZ6cA0MBef/312HrrrbMz+IzNNtssevfuHVdccUV2Cs3Ut771reyEovXBBx9kJwAA/ItFixZlJxSVN954Ix599NHsDCg48+fPz04AAAAAAAAAAAAAasFwDwAAAAAAAAAANBFHHHFEdO/ePTsDmqSdd945hgwZEsOHD89OAaCBvfjii/Htb387O4P16NWrl+EeGkRZWVnsvvvu2RlFy8H4AECh+cc//pGdUFTefvvt6Nu3b3YGAAAAAAAAAAAAAGyQ0uwAAAAAAAAAAACgdgYNGhQlJSXZGdBknXbaaVFeXp6dAUADe/bZZ7MTqEH37t1js802y86gGTriiCN8biVasGBBdgIAwL94/fXXsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADQBxx9/fOyzzz7ZGdCktW/fPkaNGpWdAUADe+ihh2LdunXZGaxHmzZtom/fvtkZNEPf/e53sxOK2vz587MTAAD+xdy5c6Oqqio7AwAAAAAAAAAAAABoAgz3AAAAAAAAAABAEzBw4MDsBGgWTjzxxOjYsWN2BgANaP78+fHOO+9kZ1CDww47LDuBZmi//fbLTihq8+bNy04AAPg/Pvroo+wEAAAAAAAAAAAAAKAJMNwDAAAAAAAAAAAFrl+/frH77rtnZ0Cz0KZNmxg9enR2BgANbM6cOdkJ1GCfffaJzp07Z2fQjHTo0CG+/vWvZ2cUtZdeeik7AQDg/1i2bFl2AgAAAAAAAAAAAADQBBjuAQAAAAAAAACAAlZaWhr9+/fPzqAGS5cujffff/9f/qxduzY7iy/wox/9KPbZZ5/sDAAa0MyZM7MTqMEmm2wSp556anYGzchPf/rT2GSTTbIzitbq1atj1qxZ2RkAAP/Hhx9+mJ0AAAAAAAAAAAAAADQBhnsAAAAAAAAAAKCAnX322dGpU6fsDNZj8eLFsfPOO0f79u3/5c/NN9+cncYX2HTTTWPkyJHZGQA0oMcffzw7gc9xyCGHZCfQjPTs2TM7oagtWrQoOwEAYL0M9zSeNm3aZCcAAAAAAAAAAAAAwAYz3AMAAAAAAAAAAAWqrKws+vXrl51BDW688cZYunTp/3l5RUXFel9OYenZs6fRAIBmbNKkSQ5pLmC77LJLHHbYYdkZNAObbbZZ/Pu//3t2RlFbsGBBdgIAwHotW7YsO6FolJZ6qjIAAAAAAAAAAAAATZe7YQEAAAAAAAAAoECNGDEidthhh+wM1mPhwoUxZMiQ9b5u/vz5cfvttzdyEXVVWloaQ4cOzc4AoAG99NJL2Ql8jpNPPjk7gWbg5JNPjs022yw7o6j94x//yE4AAFiv9957LzuhaLRu3To7AQAAAAAAAAAAAAA2mOEeAAAAAAAAAAAoQOXl5dGnT5/sDGpw/fXXx6pVq2p8fUVFRSxevLgRi9gQXbt2jd69e2dnANBAZsyYkZ3A5zjwwANjxx13zM6giTvkkEOyE4re3LlzsxMAANZr/vz52QlFY9NNN81OAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAK0PDhw6N9+/bZGazHvHnzYvjw4Z/7NosXL45bbrmlkYrYGAMHDozSUrfSATRHU6ZMyU7gc7Rq1Sp+9atfZWfQhG299dbRrVu37Iyi9+qrr2YnAACs19tvv52dUDTatGmTnQAAAAAAAAAAAAAAG8xpAwAAAAAAAAAAUGDatWsXJ554YnYGNbjqqquiqqrqC99uyJAhsXDhwkYoYmN87Wtfi0GDBmVnANAAHnjggVixYkV2Bp/jyCOPzE6gCTv99NOjdevW2RlFb9asWdkJAADr9eabb2YnFA1flwMAAAAAAAAAAADQlBnuAQAAAAAAAACAAjNq1Kho27Ztdgbr8cYbb8RFF11Uq7ddsWJF3HjjjQ0bRL3o27dvtGrVKjsDgHq2Zs2aeOmll7Iz+Bxf+cpX4he/+EV2Bk3UYYcdlp1Q9D755JOYNm1adgYAwHo9++yz2QlFY7PNNstOAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAKSOfOneMnP/lJdgY1uPLKK6O6urrWb19RURHvvvtuAxZRH7785S/HmDFjsjMAaADPPPNMdgJf4Je//GV2Ak1Q9+7dY88998zOKHrz58+v0/dHAACNadmyZfHhhx9mZxSFsrKy6NixY3YGAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFBAhg0bFm3atMnOYD1mz54d48aNq9P7rFmzJsaPH99ARdSnE088MXbcccfsDADq2aRJk7IT+AJ77bVXHH744dkZNDGnnXZalJSUZGcUvbfeeis7AQDgc73//vvZCUXj61//enYCAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFAgunTpEkceeWR2BjX4zW9+s0HvN3LkyJg7d279xlDv2rZtG6NGjcrOAKCe/eEPf4gPP/wwO4Mv0L9//+wEmpDy8vI45JBDsjOIiNdffz07AQDgcy1atCg7oWjstNNO2QkAAAAAAAAAAAAAsEEM9wAAAAAAAAAAQIEYOXJktGzZMjuD9Zg5c2bccMMNG/S+1dXVce2119ZzEQ3h6KOPjr322is7A4B6NmvWrOwEvkD37t2jW7du2Rk0EQMHDozy8vLsDCJi9uzZ2QkAAJ9r4cKF2QlFY/vtt89OAAAAAAAAAAAAAIANYrgHAAAAAAAAAAAKQLdu3eLggw/OzqAGF1xwwUa9/9ixY+O1116rpxoaSsuWLWPEiBHZGQDUs2nTpmUn8AXKyspi0KBB2Rk0Ecccc0x2Av/rr3/9a3YCAMDn+sc//pGdUDQM9wAAAAAAAAAAAADQVBnuAQAAAAAAAACAAlBRUREtWrTIzmA9nnnmmbjzzjs3+nGuuuqqeqihof3gBz+Igw46KDsDgHp09913ZydQC7169Yru3btnZ1DgTj311OjUqVN2BhHx4YcfxjPPPJOdAQDwud54443shKKxww47ZCcAAAAAAAAAAAAAwAYx3AMAAAAAAAAAAMl69uwZPXv2zM5gPdatWxejRo2ql8e6/PLLY/bs2fXyWDScsrKyGDZsWHYGAPVoxowZMXfu3OwMvkBZWVkMGTIkO4MC91//9V/ZCfyvt956KzsBAOALzZo1KzuhaGy//fbZCQAAAAAAAAAAAACwQQz3AAAAAAAAAABAsoqKiigtdStPIfrzn/8cDz30UL093rhx4+rtsWg4++67bxx33HHZGQDUo+nTp2cnUAsHHnigQUtqdPzxx0eXLl2yM/hfr7zySnYCAMAXmjp1alRVVWVnFIVtt902OwEAAAAAAAAAAAAANojTPgAAAAAAAAAAINGPfvSj2G+//bIzWI+qqqoYPXp0vT7m9ddfHzNnzqzXx6RhnHfeedkJANSjJ554IjuBWigtLY3BgwdnZ1Cg+vfvn53Ap/zP//xPdgIAwBdatWpVLFy4MDujKLRv3z7Ky8uzMwAAAAAAAAAAAACgzgz3AAAAAAAAAABAokGDBkVJSUl2Buvx2GOPxaRJk+r9cS+99NJ6f0zq39e//vU466yzsjMAqCcTJkyIlStXZmdQC9/5znfi6KOPzs6gwPTu3Tv23nvv7Aw+ZfLkydkJAAC1Mm/evOyEolBaWhoHHnhgdgYAAAAAAAAAAAAA1JnhHgAAAAAAAAAASHL88cdH165dszNYjzVr1sTIkSMb5LFvvfXWmD59eoM8NvXrjDPOiBYtWmRnAFAPVqxYETNmzMjOoBZKSkpi2LBhUVrqVnf+P2effXZ2Ap+yZMmS+Mtf/pKdAQBQK3//+9+zE4rGnnvumZ0AAAAAAAAAAAAAAHXm2YwAAAAAAAAAAJDknHPOyU6gBhMnTmzQg6gvvvjiWLduXYM9PvVjxx13jMrKyuwMAOrJk08+mZ1ALe26664xZMiQ7AwKxJlnnhm77LJLdgafMmfOnOwEAIBae+ONN7ITisbXvva17AQAAAAAAAAAAAAAqDPDPQAAAAAAAAAAkKBfv36x2267ZWewHqtXr47Bgwc36DXuvvvuePrppxv0GtSPk08+Odq1a5edAUA9mDBhQlRXV2dnUEv9+vWL7bbbLjuDZOXl5TFgwIDsDD7jpZdeyk4AAKi11157LTuhaBjcBAAAAAAAAAAAAKApMtwDAAAAAAAAAACNrLS0NPr375+dQQ3uu+++ePHFFxv8OmPHjjUe0ARsueWWccEFF2RnAFAPXn311Xj55ZezM6ilrbfeOi6++OLsDJJdfPHF8eUvfzk7g8+YOnVqdgIAQK0988wz2QlFo1OnTtkJAAAAAAAAAAAAAFBnhnsAAAAAAAAAAKCRnX322Q6wK1ArV66MioqKRrnWww8/HJMnT26Ua7FxjjnmmOjSpUt2BgD14KmnnspOoA6OPvroOOSQQ7IzSNK1a9f42c9+lp3BZ3zyySdx7733ZmcAANTaiy++GEuXLs3OKApbbLFFdO/ePTsDAAAAAAAAAAAAAOrEcA8AAAAAAAAAADSisrKy6NevX3YGNbjjjjvi9ddfb7TrjRkzJqqqqhrtemyY1q1bx4gRI7IzAKgHt912W3YCdbDJJpvEJZdcEmVlZdkpJPjNb34TrVq1ys7gM1555ZVYsWJFdgYAQJ289dZb2QlFY//9989OAAAAAAAAAAAAAIA6MdwDAAAAAAAAAACNaMSIEbHDDjtkZ7Aey5Yti6FDhzbqNR9//PF47LHHGvWabJhDDz3UoZMAzcDUqVMbdaSPjfe1r30tLrvssuwMGtk555wT++23X3YG6/H8889nJwAA1Nmrr76anVA0vv3tb2cnAAAAAAAAAAAAAECdGO4BAAAAAAAAAIBGUl5eHn369MnOoAYTJkyIefPmNfp1KysrY82aNY1+XeqmrKwshg0blp0BQD2YMmVKdgJ1dPLJJ8d3vvOd7AwaSefOnWPgwIHZGdRg2rRp2QkAAHX20ksvZScUjS5dumQnAAAApGjbtm12AgAAAAAAAAAbyHAPAAAAAAAAAAA0kuHDh0f79u2zM1iPxYsXR0VFRcq1p02bFhMnTky5NnXzne98J44++ujsDAA20u23356dQB21bNkyrrrqqigrK8tOoRH89re/jS233DI7g/X45JNP4r//+7+zMwAA6uyvf/1rdkLR6NChQ+y6667ZGQAAAI1um222yU4AAAAAAAAAYAMZ7gEAAAAAAAAAgEbQrl27OPHEE7MzqMFNN90UixcvTrv+iBEjYvXq1WnXp3ZKSkri/PPPz84AYCM9/vjj8dZbb2VnUEddunSJ6667LjuDBjZkyJA48MADszOowUsvvRTLli3LzgAAqLMnnngiVq1alZ1RFEpKSoyfAwAARalVq1bZCQAAAAAAAABsIMM9AAAAAAAAAADQCEaNGhVt27bNzmA9Fi5cGIMHD05tmDFjRjz44IOpDdTOHnvsEaeffnp2BgAb6cknn8xOYAOccMIJcfzxx2dn0EC6desW55xzTnYGn2P69OnZCQAAG6S6ujrmzp2bnVE0evTokZ0AAADQ6HbYYYfsBAAAAAAAAAA2kOEeAAAAAAAAAABoYJ07d46f/OQn2RnU4Prrr49Vq1ZlZ8Tw4cNj5cqV2RnUwoABA6KsrCw7A4CNcOONN2YnsAHKysrioosuio4dO2anUM9atWoV48ePj9atW2en8DkeeeSR7AQAgA322muvZScUjW9961tRWurpywAAQHHZfvvtsxMAAAAAAAAA2EDufAUAAAAAAAAAgAY2bNiwaNOmTXYG6zFv3rwYPnx4dkZERMyePTvuu+++7Axq4Stf+UrBfN4AsGGmTp0ar7zySnYGG6B9+/Zx6623OgS6mbn99ttj1113zc7gcyxZsiTuv//+7AwAgA02e/bs7ISiscUWW8Rxxx2XnQEAANCodthhh+wEAAAAAAAAADaQZysCAAAAAAAAAEAD6tKlSxx55JHZGdTgqquuiqqqquyMfxo6dGgsX748O4Na+MUvfhFt27bNzgBgIzzyyCPZCWygbt26xfXXX5+dQT0ZOnRoHHbYYdkZfIFnn302OwEAYKNMmTIlO6Go+BofAAAoNttss012AgAAAAAAAAAbyHAPAAAAAAAAAAA0oJEjR0bLli2zM1iPN954Iy666KLsjH/x5ptvxp133pmdQS1ss802ccEFF2RnALARfv/73xfUgB918/Of/zzOPPPM7Aw20tFHHx3nnntudga18MQTT2QnAABslEceecRoeiPq3r17dgIAAECj2nbbbbMTAAAAAAAAANhAhnsAAAAAAAAAAKCBdOvWLQ4++ODsDGpw5ZVXRnV1dXbG/1FRURFLly7NzqAWjjvuuOjcuXN2BgAbaNasWTFz5szsDDZQSUlJjBgxInr16pWdwgbq1q1bXHPNNbHppptmp/AF1q5dGxMmTMjOAADYKNXV1TFnzpzsjKLRvn37OO6447IzAAAAGk3Hjh2zEwAAAAAAAADYQIZ7AAAAAAAAAACggVRUVESLFi2yM1iP2bNnx7hx47Iz1mv+/Plx++23Z2dQC5tttlmMGTMmOwOAjXD//fdnJ7ARvvSlL8UNN9wQXbp0yU6hjjp27Bi33XZbtG3bNjuFWvif//mfmD9/fnYGAMBGmzVrVnZCUfnpT3+anQAAANBodtppp+wEAAAAAAAAADaQ4R4AAAAAAAAAAGgAPXv2jJ49e2ZnUIPLLrssO+FzVVRUxOLFi7MzqIUf/vCH0a1bt+wMADbQVVddFcuXL8/OYCNst912cffdd8d2222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aJ4(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aJ4(8,
					"googleplay", 3,
					"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"
					), aJ4(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aJ4(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aJ4(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aJ4(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aJ4(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aJ4(14, "bestPlayer", 5,
					"iVBORw0KGgoAAAANSUhEUgAAAHcAAABkCAMAAACLpV+NAAADAFBMVEUAAAAAAi8EBE8ZBQgUBwgbBwIQA24IBXsTBGIgCAYZDAUkCQonCAsdDAcSEAciDQsrCwgZDxwQESwnDQcYEwMvCxcfEgUxDAtOAzEbFwtPAzlpAAJlABVoAAtcADhfADBhACpjACMhEkUyEgtcAUAuEyRaBUYeHQkuFS1NC0EuGRcaF4MpFHRVDisyGDwgHnAlJg8aIIEoHmY9HFlmFhBgGB1ZGU0sLRI1KTYxLR8rJ4Q2LCxJJUg0Kl5QJVEzNBhYJys3L0pUJk1GK0dKLTAfM48tNGS+EANJLlVXMB86Ohk0NHssN4q8HQBWOiVNPSNDQyFLQC9kNGVRPGJMP1VlN15cO1thOl4+RV89RHhtN21ERldWQF1KSSFPRUI5TiwAYDQCXzq8KQ5KRWlBRYtGSzQ3UTZNRn8wTZkjWjJjR1jBLisZYEdSUSggXzw9T5A8VGZWTGgAbD4AbTMHakNkTFMtXz5aTmN+QX1FUodPUmQ+XDRLU3RdUz9PVGwHcDC5PBdbWCsAdUVGX3EAezkqbF9iYTJEYaRTZzlZYHhXYIe3TBq3SypsYEpeYXJYYn9QY5eRUJAAhTlzW4kAigpoaDJLa4G/TT6LWIR0Y1peamCdUp2FXngAkQ+AZGnCUk1yaWq0WyFYcH5nb1QBkyFibYVucDm0WzI8fHp0cEQAlT9XcqRQc7JicZJrcH8CmDJVd41+b1rFXFh3dzwCniKnYKIwkDGxaS2xajt1c8UApjIApT5xe5tff65/f0FNiZGccYx0ecOQfEFqgKFjhJR0gpNFmEiteT5ygcN+g4GIhFVgiqOPgWSHhkmVf3GAh2yJiENwhsCkgUORhVxikYR5ioZrkXeigIZXm17Id3FdlaVtj76Qjkq9g2Vslrt4l6JqoWhnm7tjnbNDr1uYlk+Fl6yKlceenFGWlM9ls3N6rHynpVeNp8SJrbqPtJexr1umsJCorNTYqKWgzqbVwbG3y9i30LnJyuPlzMrG29Dq5evW7tji6ujk+Or79vf///99szH1AAAb+0lEQVRo3oWaDVwUZf7A9+RFXtwFj01dRF4SGAiU0ZRRQDZBLhs4G0hRkCUQUrRmCRIFQu5WvSEoF/Bcg0M5zmQKlRVvei8nCqwsl7a8ope5q7v/XnvnnnqZqanp//fMzL4h/f8/ceEDs/Pd3/vveeZR+Pj4iv9k8fOWwEklWBT5h7Cw4BBZ4DfO97luoJR/8PX19Qvy9UOMoKAgXwX6wVf88vHz4Eq3CPx5bkJHR1Nc8LQwkGARHCxzpUs874JEvLVIELk+Ch8PQX/xUNNvEqCTm9By7NjRNokbJqofIv/RgwvflU6s8wW9TuT6+Exi3eAQt2mRdYPRz3ENLS0nWzoqQt3c4Du4gYEhgX53iMz1Rfb189L3TiWDJ8i0oqqqk39vaelYHhZ2j4vr9S50l5DASbiI4QNcX8kGfi7vTh5FXrKsKqf6ww8/rKxuiLvnHlnhsOCJbwyZTF0n10NR6afA/5+bUJmT9+Ho6OhgbnWRk4te7sBOyvWT9HW7VeZ7vXFSbm5O8uDo0NDQaENudcU9YZKTwySFXXQI8J/Hgr6+E9PWFU8h7iR1+nXatOBpwcty/NuGDoEMDVXmVi8JBZGjK9DtZzG8Pe6qnMD1dcVx4CRY9GYRKEGnTQudNm1+XlIlYHft2rV/6FRK5aY4ERwa6v540ocN8agigUploCfWT+GRQPAnV7EQ89EloaESEwDTEvKSUvqB2tjYaNw11Lagsgj9OtTJDXN9Vo/qhRJZ6ZlJPp5cz2rhhQ0W7yzdflpukn97v7Gxcf3q9Y2Nuw61pVU+FCqZOli0dpho7juiLNCtsI8rnifJoOA7uJIsW+DfANjVJdnZ2SXbm1tP5aZVLpfAYBdnEQnzyqoQb65nHv08d5oHd2bo/DT/3P7WxtVZqeHhiVnZNc39/Sm5lU4Xy2p7J1WInBeeDvZTuHJZBod4c5Flpzm5M2cmpE1N6e9vLMmKn5VeOis2NQuBk/M2ue0RKpvbg+rkehhajCs32V2PZXCo28IzkSxMSgbnAnaefufOrSsiU9fWtJqbkisr3NzgMNHkro8/CRdoCle3cHJD3NkT7KGGiL03CTkXsFEbd9bW7tTPk8BFyZXZoV4SHOy22SRc5N87SkbIZOEErp05c37yVHBuzZr4yPyttUg2RkemFgJ4YZqUxW5be4oT7FU3JjR775DyVveuZP+U9tbta+Mj79u6tRxk69b8qNjUkhpzX0DKsrvgChdX7hTSdxc30Is7ScudwJ0pyRT/gKbWmsLUyGg9YDdv3gzk+xC42bzOP2XlTAk8VyqbwcGu1hwSPDGg/Zzx7E1GyDAI42APXe+6617/gKLWmhLAbtxavvmpp9inniwv3xYTFZ9Z0my8OyBl/vz5cXfNnDvXFV2h7llkIhbieZJe70ogqI13Jdx778KFKcn+/v4BywCbFRuVv7V820cD77zDsU/qyx+JiYzPAvD2Kf7JSWlpebm5y5bNTxBNFeYqI4F3csWyNZmd4xKWL1uYkpaWlpQ0FUGn3H1383aEvQ+0vHDlv5988sk7CLwKwJklNca+mpSAqVOnJi1Iy8mrzKusLEL8OM9BxG8yO7upwFuWm5snAaf6L9xU1GQ0gxhrwLexUTHbEPbGjcvvvYfA5frFYOrUwpKa1tb2tra2hk2bUtKSkgGeV1VVXd3Q0FCx3AMc+DP+DS5qaanKy1mQNDU5paiprc18ytzfD1+trTU1JZBAUTGPlOv/cuXGTz/9+J4M3rYoJio2PgvIgG7tBzG3t7c1NOTm5eXkVcHceazJiXXrPVHfX7VUVeXlVTa09Q+OnjrV346Irc3ALFmblRobGR2xqlz/u69//AnkshO8cVFEdGRsfOqawhJg1zS3SngYSIZGjh49evLYsYQ7+pJiQjNqqDp2/vzXMDsd2r9/PxBFZCEwU+NjQdk5q/T63711/h/nbyLwqxJYv+2BOTHRUQidmrVmrUhvbm7dtX//0BBMf/9sObZ8Uq6nvm1VeedhZEPzBPRYSc3UeGBGRkXHzFlE6R974a0v//63v/2ANP7rKwjMPbW5HMgRCB0ZGxuP6IUl26E570Lgrztajio95zXR0IoJYdXYktPxtYiFxl6SIaoZGQXMmIjFqx4GZV946x+A/erbH27f/unyn1555T0xrIH8yKoHFsfEABzRw7OyYSxA4NHTVS3tUtHy7IcKH+/0DRnMSfp6FLCPr1+dnRiOkPPuW5X/yMZtUBdFZQH71Vcff/zdzdu3L/8JgZHKQNajyqnftvGR/PwV982LTMxAYOA2VB9Nv7NMKySqnxpTS/D11VOLRkV1sxNnrQCeXqrFAAVdQVkJ++1V4F57XgYj8lNPyuytW2t3bt04KxE0Bm5/Xkuru0y7piyJ64dpSQITvRDcv2AqMvP61Rnh6Tuh24lIYAL0yy9FGyPsD4C9dfn5p592kQHNPvUUYpdBi9xZGp6BuKO5VR3pTq4Sw3EsyMUNDMS0tIEmMT9UqpDCnyJu1qxtgC2DvJGZoCtSFrDvX70Ncu3Sb38rgV9BKYXYSO/NInjjrKzVMPaZ06qandOeEid1lBZzcgMDg3AdTbAGLSaOvf1J/sjOq7MigVtWhswrM/8mUT9+/7vrCPvFsxs2ANhFltV+anNZWe3O/Mis1c27DuXlIHXF4dYPIw0GmiZULq6aoE0Yw9HEDGSP0oapC0cPIW4+cMt/98KX/xCZLur7onNvX3p0A4ik8p+ef+XVV1+VyAPP6ctq9fNiM2paD7UuqGoU2zF4UKM1cCTFaDVObhBG0DyF8yZKVDjYnBZgNBu3QwvYVlumf0GMJcSUqW+/fxWpe/2PG379axn89NPPg4jkT9754DPg5keFFza3nk4BdWVsEEFzrMLEkKKHgavCtST6lcFi0GpQ6y1tm7rstLEROu2KreV6OWFFqIh9G6UQ8u6G+0WwRH5GIr/33jsfAXdbTCSMA4faF1Q3hsodCSNNVoLgGVIMLeBiJG1gWCuG8SyFK2EZFAoKVxwChcUO/7u35IxFUKAC9/otCOZrf9xwvwv826efeeYZkfvJfy98Vl4OY0hWDaib1ubswGrCwJtANwaFllKp8FMRNGXgOEGnoEFhDHHT26ZOOWXcXhgftbi8/DEn930ZC2DEvXQ/Ehf4GQRG3CsXtpVvFNU1tyZVNcprlxkYxVpxBc+bTDStVQcq/NRag0HNWQWW0rKsDp8B3FBjXoDxtBEMjbreC186uW/LgrLIi7vBzT3738/0+sXRsZmgbnJa2z3yuANBZaEJ3MbzBg24OFDhoyIMnJaw2gUtR4L1MTSiIIXNMDnGRi3WI0ODfz24r/0LwNf/fP8d4OfBvcjMVAREVY25IrmyUZ4vZ+A6liUYg93GqWiIX6XCB5IXgoqyOyhBZxJzCTQ25gZUmEWF82VDu7mvvYYUvvXFholc8O97l8HM+kXIzMbTAQva5spcjGR4kqetDiuO8ZBKSjGuGCupoi9yJoHgTGAD0Piedv8pYipFL9I7De3mvgYOvnXtWZn7axcXsDeufKZ/cA7MmDWnfzW1cr08Xc6AHGIou9Zh1ypMPE0EoXgOwiGLtLTJTjloGhRWI4UbcwOWn4ZUioIBAxnam/sv4N6SDb1hwx///CwKrOf/+tcffwJu+eyIqMRCY19AUtvcuSIYqcvhAm+6SJFaK6imDFQEBkoK8zRL2gScRcUDXdrqP6VPNPQivcz9+H0n9rXXrgL30qMy9tplKJnPPnv5MgwhNy5s2zgbmblvmX/l+pkz5zrVpemLOqvBpEPqqgKVwA2cgTxM2SkV6zBQHBQPNKuXFk35pRlSOGb2RpeD3dzXroOhvwDwhi8uId2vXbt07TZMIN9/f07/CHAza2oCklvnStwwnDKxmGDHaJNVa0GeDAxUhKD2hLxutROkzYKbTBQehlYIxoBfrIaIjp7zsORgby6y9KU/3n//o9du3XYKaPv9vz/f/PDsmNjMinsXNpTCXZCd1agwM3ZOQV+kTJyOUIdI3BlQsVgT6bBoBiyMVlQY3rGi4hfztxfGRv0M9zpK4Ucf/cKNvQ3Y/zmyt0zm5jbPFblzwyCHGNwiUKSD16JMDZL0VeJaHW3iSdY2cOLE2aUMFI974A133ft/cd+G3nDr0rOXAH/zypUrP928efOnG+f+/cYbTu7K3E0rkNnmhqKgIvacPZtvsWshUdGAAfU5JESjpWmW5VnCcqa7d2zPUg4+0tyZc+/1n9It2fmxSbivQZG+haiAPXfh3QtXfvzxyveAlbiRqQ/15VZXiCtECCqWXnpmrPuMwJAWljGAoUUutGNcZxUEcs9Y3ZLhsXyUSzNmzkzxXz5WkxUbM3vbYy94xpXT0GLvv33r5pXP392372Ukx48D98gTeuAmPmQ0VjYsAW4YRjGc5sR43dKxD3DWynMUTcHIoUANimFUlGDnl46NL9kyPoZBimOhdycF9JnFPHIXShH77Xffvv2vf0GtlDx75ZvP9yE5fPi4zC17ICIqfmXN6cqGCkldjiodO6CqG9tD2WxWLc7ocNQHxQ5lUJCCgz4xvsX3wHgphRROgR7cjOrGgx5149vvvvvu6vXr169evXpdDqgL7+6TuYcl7u6yh+dEx6ZWmM3VHQkzIYcGBjRjw0vSh8c0FgePqVCF8JPqFWWyaHWURVg6NuybPjyePjBALc8JOG2uyYqPivCok+9fv+6M3VvSy80fz+3b56UvOLj8AWToptObOipC0XBDdI9vUWwZ7zY4TLiCgbqhluZJGK84TmulGQrcgC6AXCpKKjK3OvuCHFbvf4fC6OZNJxYFshuLuJKhyzdGoAKNFF4CJcmQPj7sq0LqGhhGZ4WBI0jm4iRY2uBgNOljB3yWHBhPZ/bk+febawqRurJ7v/32u6ti0ly48OPNH69AAN+8ee7c5/vu5O5GCsemgsJFLU2QQ1jveLovaENoeQHnWTGcEVeNEySUTZJzcKre4SVr0sd7lzal5Z5uLcmMjc4X+/5/zv/nhx/kpHn35W+++fzld18+9825l/e5xcV9Y2+tuOuxUlR4B0eXjtdlxw2PB2kFB+SvQZ6vYHiG+cpg4FjcahuoG16zprh0fHVeUpu5GZl5G1L3/A8/iKPczZ+ufPPuvsnk4EE398ju8vJV0fGpoofNA9PHexPqs4e3LBUcjI6H8QoKB9IXygb0eygcBtJyZryrM6Ezu/dADtofg6haVS5y0aITyuCV7899fnhy7EFXXImGhnlSVji/bjy9M6O+q/eMjQMrM4xJLBwKSF8DiTFWEHLPmdI1PQX1nUuqk9r6ZXXRHCsudqH6vnv8+OGDByejHjzswQVDb82HyKpoP72ppWm8tKAz46WXesfOYiYLB/MVjlZECnGM1ym0rGCzLB3rVsUlJLz0+7xccyuKqlVbyx+Tud//+9z/HD98+MWDXuCD6N/Bgy++ePh1CSpzy/ViKpnNDR29CS+tySqIWzqWb7AJAqtVGaAOK5F/IX1pFUnxDq50vDeuuLizckHbITBzbLS+tgwtecHON1Dtff311w+/iMgH3ViR+iL85Q0PLiyQ8iMTV9aAwh1N4LqMOAhW0mbnSYUKzXBqNG+oCR1rpWleRwt09/iBhM7OvLT+/cjM+bAchGnjrfM3bkCLk8CvS2CRuG8S7JEje3eXlaEFUnhmRfMhc0dHZ09PwYrxsXRB0FEMxqJOCHMOLH41BKSRzgCfhlSOAbhyQdOh1sbCxFl6tAyF9eBfoEB8/+8jLrBT5YNe2CMge/fu3v0EwtbuTEfcXacbOn7fmQXtppSGuBUIhMWhASvQYl8C03Y7i6f3dhVXpfT3G2G5P28rWoeWwUL/M5DPdx85clwky2AvKlJz9xO16PpyaeEN3OXrdg31d3RkZHeN71AQnEPATTJWKa73gzAtAutsNsuO3q5NOQ1D+8VtBj1a75ch0YOU1f5m797j3mAZC9AnEFCSWoTVz0sE7uP7TyGFu3o1BpuDx8WyoUbbCiIXI7QUTBzQGiwneruqFgwO7XoccdNBYXHFX77tyYdBNpc9sfsIUtkJdmLBo5sppzwiyrxZiRnAFRXu6eo9YbGxCEsRmNq5zwDaQsVmeStNfTBWWlQF6gJ3eUb4rHn3zYuJiIiYAzIbZNGDm8t+I6osgUXsG8f3PlH28KLZs+dERMSgjaToqKioyFnhCAvc/aMNR9uy6k5YBnCWNxloSmwLUh/U0QxnsQo2O0Od6a3OGxG5q5dnJIbPQptXSKLhjhFzZi96uOyJvUck8IuStgj74OzZ0rZZZCzaOItPTEzMzEZYxB08enRJ95kBnBcsPMeZwNLyuhsWohoV9CTWaqPzzVUNo4j7+Pr1q7MzsuAOcJ/w8Fi4ZxQiP7C5zA2Wsatmz4mRtglTM5GsXJldsnqdhN0/NNpx8s2xE1qbw27lTDRJomWKs+/DGKtSaGHWm95SPfIhcEUwoFeXICksLMzKSg1HZBEsRpcob4jaRkRHxqPNQbQtinZGRXkcPblEO4UjJ0f2+FIMhSsUCkwH5Vkl+RfSiOGsPEPQVvtHxzo+/HBoaD+QAd3Y3Ii+QLZvX11SmBUeGR0x+8GyWhcYhdRmWA9FxmeUbK8xGtFGdSu8Hjpkhv+ffjo6+vXXX58/9nEpw1tYrYZmeYhoTI4rJTR+8LDVyurIwWMjcOWnkpxG0tdn7Dv90bq7715SV5KRGBsVMftJ8LGYyGLvgTFOfJqzfWX2+sZGuLqpubmvuampqehXTe0NDR0dR08eO/mBjaO0JquVY2jXvoq4gQXrQc5iswtvHjvW0lBdmZubsjAFvuAlIMAfSUDywsK67StTAfxAWdlvjsiluKzsSRG7fSx7ukLxiylT0OVTRUlKWlBVXV2NNr4H8wnGIojuJaQNO4mrRFHFQ0Q7PjoJ4Kq8nJwFSUnym3Ny8vIqK6urG4oqKipWIo2p8jIoXggL1QKGuPjCmr4+hWJ9Y3N7e/sgyJuynDp16p9InrNdvGi3WXkTLW/XufTVURiG4fD/1H/+809ZRkAGIQs6OtoaAPqrhramRgCDj/UA3ntExD4MM1xWjbFm4S/XGftEMR84cKCrq7Tzpa7h3rEzZ/PT05cyJhCGMdAGCg/y2BeFkDYwENQmhtb9oe8PIM+d6O7uPrAlfcmSJdn19cUFmRkZCcs62oyNFZnxkTEPQA1+QuoAi6PR1o1x05RfNiYkZGRkFhQX109PyKyfDiPG2NgZi4BWARDIKjVURchYT64U0qzV7rgI4rDo4DIMW7pny9rM+p6Mzp76jIL6YiAXDfb3NT2UGh8Vs7FcLNtltY/ERIYXNhuNuVOas+dnZBYXFxR09hRn1mcmZB/o1qhUQKR5we5wOLzs7OPcb9cQJG2ikR00JMQdXGizDNStrQdmfUbC9PpOUKSgYHCw3yiCF+slrH4xsnKzsS1gWU1BJlzRU6xIKO6Z39NTv6ZugOMtUJFhsWniBZvVwjE6rayu+3mKGkwNRZ0kcEJnMLE81LSBHXVr6uOmZ9R3ZvRkTi8Ac1eMDJqbUWxF56OGUVubL1m5PTegaXp9fX2morgnobMgIS4DsDs40POiww6zjQKJmtHJweznfi6JugO0JFSkQQSOVKhJnttTV5hdD3bLAENn9HTOn942MtjXhFw8bxvqdjBFhWfXtBo3JS8rUGT19CQUZxSDXzrXTF9bt2NgANNADUaBw3E8x0JllrGynaVHDKgJQ1NCvhBMOoMVLM0NDPSi2EzwXfNSZ0JPZnFG/cib7WBpAK+AHlu7AoaZ1WDltOTf12dmFvfEdXZmK7I6u7rW1p0YEByoWHB2CBm7wKPcdRrZTzxH4bI0xBaY16TDFDoWohDHcZNl4MSJ7t70A8PDXXGZmUAWLQ3gxFkrNm5cMSscPQs1b0oreqgYvFqwpGt4eEv6gd7u7gGLFqcZi01gSdIE33gWQkft+TzU9dwZBnhUsxXoOytYaYzmDDgncPndY2NjdcNb4jp7sqYXDyJLrwNw+KxZgM1e12puy035/ZrpBT31ii3DdWPj3XV7LBZGx4FbGVgNSd0AklRHBE3gSmjggaVNEA2QSxyhwEidGtZMOP7B2bNLl471FnbVw6R0YGSwv6l53cqMRLHJrmtubd2Ut+lAV1xWfdeW3jHVjrNnBxS0zU6pCBLDWLiVjWcoAldpxfWnh52dXBVENAoBiyAwuIIw2S4ynMNAYZzDosWYsye667YUggnNYOnW5nXLV86fD60dJsa2ylxjd++WtVvqek+cJVW0YKc0WquDtNjgNiqTHSLaCu6T+p/3uRHJ1NCWKAqSiNIQBt7muGhCi0Qr5bBqeYoXBvIHdnSfGNDsAUsbd61btxxk3bpdZuOm3JodS890QwDvsAioGDoE0kqabKT9op3TqVU0yzIGA61zlmaP81c+zpDGIHtpysRbLIKdwSlKcOgEgeDthM1GEZDRFoua/OjNkf5Dux5fJw0UoG7lRxghfDAwwCkYO69z0LSD4R0MaSAEuyBYYKIw6LQEgWv8JuPK7CBpyIOiaVBgJpg9DVZIBZ5ysFqtTSDhE2Dc6ZHBJjQJgez61Lwpt4/BKAdjEKwqXLDjNhtN27V2B69VENDSQVDPVQcF+XmdC/L19T5NGIQRJEkZOIMCbCsIWoZgrQJjEiiBdPBqg0PLUbZTI4MNInjXofa2yiaB4KiLWsxmIy2Ug+QFK8yJjN0mGBQEz9I69EAhaMIJOzfX9VxUqcZwrUGnYaBSCoyKgFIjUCbSatc6dBxpIx2U9bmRkTZxEtr/aX9D5UeswUYLUHPspAPca7LyFgOutlp5K4sT0Alcz+a8zgX5+vp6HVBFwzxUEJqBJTLLqQmeN7FWDGftoJXOYTIQDp4iW0cG22EG27+/v62yiCbsNoq22Amestt0hM5qQk6irKyJ40hah6uDvE6aSecHEdd34plNJQbrBx1FsyTEkoE2sQraarHiOG+3agi7nVQPQEyjx+iftjVUlioMDquKsNkNBAUJg+E8Q5sAzKD2ZhCj2OOcio98VlPk+vp6c0OUGhz1JRpnWQNJmXQ4z7I8ToLpKEywmgi2FCw9OjT6ZkdlkwnjBF7BQIqqdDwsCRQmaH2w6MEZSqvVoqes3lyfCVyPs1BoTzpIjR6Soo6ppSGnaYMJA9OzsIA1wWpD2w4z0IcjRzuq88VBRQXthqNIFiosWIogYHyhocdrNOpAr7O5kr5Bvr4/x4WLUWTD5wU+pLQWPVSjKZrRoR0ZLTZ95G8njx49Wl2Bag3NwD9AGdBqgNaRmAbXUiiKvQ+M+MingRFQ4cLKB2b8lDIWFTBMg9aqUExwiHE0E2gpHUyimCYkeN1XX311sqMhDj1Lht9ShIjCcYJApoUKhAHWb8I5M5Hr6+vU1/NQrtLjXKvr6EOQX6BSg0HyayAp1ErxMfHgV1993CEeRUFoXDMDxlGNUjlDHeQ+JCIenXQdvRYxIlXi+ngGtNLjOO0kR66VSvGhOOBCmgfbl8hnHpXKkGB0MmOCTDj8LYayB9cJFrFKj0PLgT8n6BT0xHNEIYE/g/WgBgFW4v4vtt0gxYBWEv8AAAAASUVORK5CYII="
					), aJ4(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aJ4(16, "apple", 3,
					"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"
					), aJ4(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aJ4(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aJ4(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aJ4(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aJ4(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aJ4(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(eI) {
		return canvas[eI]
	}, this.aIj = function(name) {
		for (var aC = a2c.length - 1; 0 <= aC; aC--)
			if (a2c[aC] === name) return canvas[aC];
		return aIy
	}, this.v0 = function() {
		return aIx <= 0
	}, this.aJ0 = function() {
		aIx = 0, aJ1()
	}
}

function cX() {
	var aJA = [
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
		aJB = [
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
	this.aJC = null, this.aJD = null, this.aJE = null, this.aJF = null, this.aJG = null, this.aJH = null, this.aJI = null, this.aJJ = null, this.aJK = null, this.aJL = null;

	function aJS(kA, oD) {
		for (var aJC = ad.aJC, aJD = ad.aJD, aJE = ad.aJE, aC = kA; aC < oD; aC++) aJC[aC] = bO.g0(64 * az.random(), az.value(100)) << 2, aJD[aC] = bO.g0(64 * az.random(), az.value(100)) << 2, aJE[aC] = bO.g0(64 * az.random(), az.value(100)) << 2
	}

	function aJR(kA, oD) {
		for (var colorsData = aE.data.colorsData, aJC = ad.aJC, aJD = ad.aJD, aJE = ad.aJE, aC = kA; aC < oD; aC++) {
			var g1 = colorsData[aC];
			aJC[aC] = 4 * (g1 >> 12), aJD[aC] = 4 * (g1 >> 6 & 63), aJE[aC] = 4 * (63 & g1)
		}
	}

	function aJj(fD, aJl) {
		aEF[fD] = 0, aEF[fD + 1] = 0, aEF[fD + 2] = aJl, aEF[fD + 3] = 0, aJm(fD)
	}

	function aJm(fD) {
		var fg;
		be.oL || (fg = ad.a0L(fD), fD = ad.a0M(fD), be.oL = fg >= bd.aEE[0] && fg <= bd.aEE[2] && fD >= bd.aEE[1] && fD <= bd.aEE[3])
	}
	this.fb = new Int32Array(4), this.aJP = new Int32Array(8), this.dl = function() {
		var fb = this.fb,
			fb = (fb[0] = -4 * bV.fk, fb[1] = 4, fb[2] = -fb[0], fb[3] = -fb[1], this.aJP);
		fb[0] = -4 * bV.fk - 4, fb[1] = -4 * bV.fk, fb[2] = -4 * bV.fk + 4, fb[3] = -4, fb[4] = 4, fb[5] = 4 * bV.fk - 4, fb[6] = 4 * bV.fk, fb[7] = 4 * bV.fk + 4
	}, this.dk = function() {
		if (this.aJC ? (this.aJC.fill(0), this.aJD.fill(0), this.aJE.fill(0), this.aJF.fill(0), this.aJG.fill(0), this.aJH.fill(0), this.aJI.fill(0), this.aJJ.fill(0), this.aJK.fill(0), this.aJL.fill(0), this.aAc.fill(0)) : (this.aJC =
				new Uint8Array(aE.fW), this.aJD = new Uint8Array(aE.fW), this.aJE = new Uint8Array(aE.fW), this.aJF = new Uint8Array(aE.fW), this.aJG = new Uint8Array(aE.fW), this.aJH = new Uint8Array(aE.fW), this.aJI = new Uint8Array(aE.fW),
				this.aJJ = new Uint8Array(aE.fW), this.aJK = new Uint8Array(aE.fW), this.aJL = new Uint8Array(aE.fW), this.aAc = new Uint8Array(aE.fW)), aE.iT)
			for (var aCs = bj.aCs, aJC = ad.aJC, aJD = ad.aJD, aJE = ad.aJE, aC = aE.fW - 1; 0 <= aC; aC--) {
				var ej = aCs[aC],
					lp = bO.g0((aJB[ej][3] + 1) * az.random(), az.value(100));
				aJC[aC] = aJA[ej][0] + lp * aJB[ej][0], aJD[aC] = aJA[ej][1] + lp * aJB[ej][1], aJE[aC] = aJA[ej][2] + lp * aJB[ej][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aJR(0, aE.ku), aJS(aE.ku, aE.fW)) : aJS(0, aE.fW) : aJR(0, aE.fW);
		! function() {
			var aC, fc, aJC = ad.aJC,
				aJD = ad.aJD,
				aJE = ad.aJE;
			for (aC = aE.fW - 1; 0 <= aC; aC--) fc = bO.g0(aJC[aC] + aJD[aC] + aJE[aC], 3), aJC[aC] += aJY(fc - aJC[aC], 2), aJD[aC] += aJY(fc - aJD[aC], 2), aJE[aC] += aJY(fc - aJE[aC], 2), aJC[aC] -= aJC[aC] % 4, aJD[aC] -= aJD[aC] % 4, aJE[
				aC] -= aJE[aC] % 4
		}(),
		function() {
			for (var fZ = aE.fW, aJC = ad.aJC, aJD = ad.aJD, aJE = ad.aJE, aJF = ad.aJF, aC = 0; aC < fZ; aC++) aJC[aC] += aC >> 7, aJD[aC] += aC >> 5 & 3, aJE[aC] += aC >> 3 & 3, aJF[aC] = 7 & aC
		}(), this.aJV(),
			function() {
				for (var fZ = aE.fW, aJG = ad.aJG, aJH = ad.aJH, aJI = ad.aJI, aJC = ad.aJC, aJD = ad.aJD, aJE = ad.aJE, aC = 0; aC < fZ; aC++) {
					var eH = aJC[aC],
						uw = aJD[aC],
						ft = aJE[aC];
					60 <= eH + uw + ft ? (aJG[aC] = Math.max(eH - 40, 3 & eH), aJH[aC] = Math.max(uw - 40, 3 & uw), aJI[aC] = Math.max(ft - 40, 3 & ft)) : (aJG[aC] = eH + 40, aJH[aC] = uw + 40, aJI[aC] = ft + 40)
				}
			}(),
			function() {
				for (var fZ = aE.fW, aJJ = ad.aJJ, aJK = ad.aJK, aJL = ad.aJL, aJC = ad.aJC, aJD = ad.aJD, aJE = ad.aJE, aC = 0; aC < fZ; aC++) {
					var eH = aJC[aC],
						uw = aJD[aC],
						ft = aJE[aC];
					688 <= eH + uw + ft ? (aJJ[aC] = eH - 88, aJK[aC] = uw - 88, aJL[aC] = ft - 88) : (aJJ[aC] = Math.min(eH + 88, 252 + (3 & eH)), aJK[aC] = Math.min(uw + 88, 252 + (3 & uw)), aJL[aC] = Math.min(ft + 88, 252 + (3 & ft)))
				}
			}()
	}, this.a9U = function(player) {
		var h = bR.g8;
		return h[0] = this.aJC[player], h[1] = this.aJD[player], h[2] = this.aJE[player], h
	}, this.aJV = function() {
		for (var aC = aE.fW - 1; 0 <= aC; aC--) this.aAc[aC] = this.aJC[aC] + this.aJD[aC] + this.aJE[aC] < 280 ? 0 : 1
	}, this.a0L = function(fD) {
		return bO.g0(fD, 4) % bV.fk
	}, this.a0M = function(fD) {
		return bO.g0(fD, 4 * bV.fk)
	}, this.zt = function(fg, fi) {
		return Math.floor(4 * (fi * bV.fk + fg))
	}, this.a09 = function(fD) {
		var fb = this.fb;
		return this.aJZ(fD + fb[0]) || this.aJZ(fD + fb[1]) || this.aJZ(fD + fb[2]) || this.aJZ(fD + fb[3])
	}, this.fx = function(fD) {
		var fb = this.fb;
		return this.fe(fD + fb[0]) || this.fe(fD + fb[1]) || this.fe(fD + fb[2]) || this.fe(fD + fb[3])
	}, this.a07 = function(fD, player) {
		var fb = this.fb;
		return this.aJa(fD + fb[0], player) || this.aJa(fD + fb[1], player) || this.aJa(fD + fb[2], player) || this.aJa(fD + fb[3], player)
	}, this.aJb = function(aC, aJc, aJd, aJe) {
		this.aJC[aC] = aJc >> 16, this.aJD[aC] = aJc >> 8 & 255, this.aJE[aC] = 255 & aJc, this.aJG[aC] = aJd >> 16, this.aJH[aC] = aJd >> 8 & 255, this.aJI[aC] = 255 & aJd, this.aJJ[aC] = aJe >> 16, this.aJK[aC] = aJe >> 8 & 255, this.aJL[aC] =
			255 & aJe
	}, this.aJf = function(aC) {
		return [(this.aJC[aC] << 16) + (this.aJD[aC] << 8) + this.aJE[aC], (this.aJG[aC] << 16) + (this.aJH[aC] << 8) + this.aJI[aC], (this.aJJ[aC] << 16) + (this.aJK[aC] << 8) + this.aJL[aC]]
	}, this.h9 = function(fD) {
		return 208 <= aEF[fD + 3]
	}, this.a0F = function(player, fD) {
		return this.h9(fD) && this.a0I(player, fD)
	}, this.a0I = function(player, fD) {
		return player === this.fR(fD)
	}, this.aJg = function(fD) {
		return 208 <= aEF[fD + 3] && aEF[fD + 3] < 224
	}, this.k5 = function(fD) {
		return 224 <= aEF[fD + 3] && aEF[fD + 3] < 248
	}, this.aJh = function(fD) {
		return 248 <= aEF[fD + 3]
	}, this.a08 = function(fD) {
		for (var fb = this.fb, aC = 3; 0 <= aC; aC--)
			if (this.iq(fD + fb[aC])) return !0;
		return !1
	}, this.fU = function(fD) {
		return this.h9(fD) || this.fQ(fD)
	}, this.iq = function(fD) {
		return 0 === aEF[fD + 3] && 2 === aEF[fD + 2]
	}, this.fQ = function(fD) {
		return 0 === aEF[fD + 3] && 1 === aEF[fD + 2]
	}, this.yy = function(fD) {
		return 0 === aEF[fD + 3] && 3 === aEF[fD + 2]
	}, this.fe = function(fD) {
		return 0 === aEF[fD + 3] && 5 === aEF[fD + 2]
	}, this.aJZ = function(fD) {
		return 0 === aEF[fD + 3] && 3 <= aEF[fD + 2]
	}, this.fH = function(fD) {
		return (aEF[fD] >> 1 << 8) + aEF[fD + 1]
	}, this.aJi = function(fD) {
		return 1 & aEF[fD]
	}, this.aJa = function(fD, player) {
		return this.fQ(fD) || this.h9(fD) && player !== this.fR(fD)
	}, this.fR = function(fD) {
		return ((3 & aEF[fD]) << 7) + ((3 & aEF[fD + 1]) << 5) + ((3 & aEF[fD + 2]) << 3) + (7 & aEF[fD + 3])
	}, this.a0G = function(fD) {
		aJj(fD, 1)
	}, this.aJk = function(fD) {
		aJj(fD, 2)
	}, this.zu = function(fD, player) {
		aEF[fD] = this.aJC[player], aEF[fD + 1] = this.aJD[player], aEF[fD + 2] = this.aJE[player], aEF[fD + 3] = 208 + this.aJF[player], aJm(fD)
	}, this.h4 = function(fD, player) {
		aEF[fD] = this.aJG[player], aEF[fD + 1] = this.aJH[player], aEF[fD + 2] = this.aJI[player], aEF[fD + 3] = 224 + this.aJF[player], aJm(fD)
	}, this.k6 = function(fD, player) {
		aEF[fD] = this.aJJ[player], aEF[fD + 1] = this.aJK[player], aEF[fD + 2] = this.aJL[player], aEF[fD + 3] = 248 + this.aJF[player], aJm(fD)
	}
}

function cw() {
	var aJn = 0,
		aJp = new Uint16Array(64);

	function f5(a7X) {
		aJn -= 2;
		for (var aC = a7X; aC < aJn; aC += 2) aJp[aC] = aJp[aC + 2], aJp[aC + 1] = aJp[aC + 3]
	}
	this.dk = function() {
		aJn = 0
	}, this.ee = function() {
		var aC, k3, jC;
		if (0 !== aJn)
			if (0 === ah.nU[aE.fJ]) aJn = 0;
			else if (0 === ae.gg(aE.fJ)) aJn = 0;
		else
			for (aC = aJn - 2; 0 <= aC; aC -= 2)(k3 = aJp[aC]) < aE.fW && 0 === ah.nU[k3] ? f5(aC) : (jC = aJp[aC + 1], (k3 >= aE.fW && bv.aJr(aE.fJ) || k3 < aE.fW && bv.aJs(aE.fJ, k3)) && (bB.hz.i6(jC, k3), f5(aC)))
	}, this.i7 = function(k3, jC) {
		! function(k3, jC) {
			for (var aC = 0; aC < aJn; aC += 2)
				if (aJp[aC] === k3) return aJp[aC + 1] = Math.min(aJp[aC + 1] + jC, 1023), 1;
			return
		}(k3, jC) && 64 !== aJn && (aJp[aJn] = k3, aJp[aJn + 1] = jC, aJn += 2)
	}
}

function cY() {
	function aK0(player) {
		var ea;
		bD.gv.a5e(player) && (ea = ah.hb[player] - ah.a5j[player] + ae.aK2(player), bg.gz(player, Math.abs(ea), ea < 0 ? 18 : 12)), ah.hb[player] = 0, ah.a5j[player] = 0
	}

	function aK9() {
		aY.show(!1, !1, !1, !0), aX.aDO(), bU.a21.a2n()
	}

	function aJw(player, aK8) {
		for (var aC = aK8.length - 1; 0 <= aC; aC--) ae.aKB(aK8[aC], player)
	}

	function aJz(player) {
		var jS = ah.jS,
			jT = ah.jT,
			jU = ah.jU,
			jV = ah.jV,
			fk = bV.fk;
		if (ah.hN[player]) {
			ah.hN[player] = 0;
			for (var nv = jS[player], nw = jU[player], fg = jT[player]; nv <= fg; fg--)
				for (var fi = jV[player]; nw <= fi; fi--) {
					var h7 = 4 * (fi * fk + fg);
					ad.a0F(player, h7) && ad.a0G(h7)
				}
		}
		jT[player] = jV[player] = 0, jS[player] = jU[player] = Math.max(fk, bV.fl)
	}
	this.dt = function(h7) {
		var player, ea = ah.hN[h7] + ah.zp[h7];
		bQ.z.ky[h7] ? ea && (aJw(player = h7, ae.aJx(player)), ag.aJy(player), aJz(player), aG.gx(player), ae.clear(player), aK0(player), function(player) {
			ah.zp[player] = 0, ah.h1[player] = [], ah.hF[player] = [], ah.hG[player] = [], ah.fy[player] = []
		}(player)) : !ea && ah.h1[h7].length || this.aJv(h7)
	}, this.aJv = function(player) {
		! function(player) {
			bD.gv.kH(player) || (ah.a2r[player] = bl.a36.aK7(), aE.a2I++);
			var aK8 = ae.aJx(player);
			0 === aK8.length ? bD.gv.a5b(player) && aK9() : (aJw(player, aK8), function(player, aK8) {
				var aKD = aK8[function(aK8) {
					var aC, eI = 0;
					for (aC = aK8.length - 1; 1 <= aC; aC--) ah.hN[aK8[aC]] > ah.hN[aK8[eI]] && (eI = aC);
					return eI
				}(aK8)];
				9 === aE.lC && (1 === bj.fX[player] ? az.km(8) && b0.aKE(aKD) : aF.iI[player] && (aO.a8v(765, 0), aO.a0i(280, L(139, [ah.a0j[aKD], ah.a0j[player]]), 765, aKD, bE.pF, bE.qa, -1, !0)));
				if (bD.gv.a5b(player)) aK9(), aO.a2T(aKD, 1);
				else {
					for (var aC = aK8.length - 1; 0 <= aC; aC--)
						if (bD.gv.a5e(aK8[aC]) && (bg.nQ[4 - bD.gv.kH(player)]++, bD.gv.a5b(aK8[aC]))) return aO.a2T(player, 0);
					bD.gv.kH(player) || aO.a8g(0, player, aKD)
				}
			}(player, aK8))
		}(player), ag.aJy(player), aJz(player), aK0(player),
			function(player) {
				ah.nU[player] = 0, ah.h1[player] = null, ah.hF[player] = null, ah.hG[player] = null, ah.fy[player] = null
			}(player), aG.gx(player), ae.clear(player), bQ.aK5.aK6(player)
	}
}

function d1() {
	var input;

	function aKF(e) {
		(e = e.target.files) && 0 < e.length && b7.aKI(e[0])
	}

	function aKM(e) {
		var ej = new Image;
		ej.onload = aKN, ej.src = e.target.result
	}

	function aKN(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aKP = bm.buffer.data[162].value,
			max = Math.min(bV.aKQ, aKP),
			aKP = (max = a1.id || bM.sm() ? Math.min(1400, aKP) : max) / Math.max(j, k);
		if (aKP < 1 && (j = Math.floor(aKP * j + .125), k = Math.floor(aKP * k + .125)), max < j || max < k || j < 10 || k < 10) aKP = "Invalid Image Dimensions!", a1.xZ ? a1.xZ.showToast(aKP) : alert(aKP);
		else {
			for (var max = document.createElement("canvas"), aKP = (max.width = j, max.height = k, max.getContext("2d")), aKS = document.createElement("canvas"), aKT = (aKS.width = e.width, aKS.height = e.height, aKS.getContext("2d")), e = (aKT
					.drawImage(e, 0, 0), aKT.getImageData(0, 0, aKS.width, aKS.height)), aKT = aKP.createImageData(j, k), src = e.data, aKW = aKT.data, aBD = aKS.width / j, aBE = aKS.height / k, fi = 0; fi < k; fi++)
				for (var fg = 0; fg < j; fg++) {
					var aKX = Math.floor(fg * aBD),
						aKX = 4 * (Math.floor(fi * aBE) * aKS.width + aKX),
						aKa = 4 * (fi * j + fg);
					aKW[aKa] = src[aKX], aKW[1 + aKa] = src[1 + aKX], aKW[2 + aKa] = src[2 + aKX], aKW[3 + aKa] = 255
				}
			aKP.putImageData(aKT, 0, 0), 20 === u.ua && u.a3T().aKN(max)
		}
	}
	this.dk = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aKF
	}, this.vx = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aKG = function() {
		input.click()
	}, this.aKI = function(aKJ) {
		var h = aKJ.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aKM, h.readAsDataURL(aKJ))
	}
}

function cz() {
	this.aKb = new Uint32Array(aE.fW), this.dk = function() {
		10 === aE.lC && this.aKb.fill(0)
	}, this.ee = function() {
		10 === aE.lC && this.lj()
	}, this.lj = function() {
		for (var h7, target, aDb, aKb = this.aKb, a24 = am.lV, a5k = ah.hb, aC = am.lQ - 1; 0 <= aC; aC--)(h7 = a24[aC]) >= aE.ku || (target = Math.max(bO.g0(a5k[h7], 4), 2048), aDb = Math.max(af.aDc(h7), 100), aKb[h7] += bO.g0(aDb * target,
			1e4), aKb[h7] > target && (aKb[h7] = target))
	}, this.a5q = function(player, iI) {
		return 10 !== aE.lC || bD.gv.kH(player) ? iI : Math.min(this.aKb[player], iI)
	}, this.a5w = function(player, iI) {
		10 !== aE.lC || bD.gv.kH(player) || (this.aKb[player] -= iI)
	}
}

function d2() {
	var aKc = -1,
		aKd = null,
		aKe = -1,
		wO = 4;

	function aKg() {
		aN.a81() ? be.render() : be.a2S()
	}

	function aKo(ej, fc) {
		var eH = ej >> 16,
			uw = ej >> 8 & 255,
			ej = 255 & ej,
			aKp = 255 - fc,
			aKp = (aKp < eH && aKp < uw && aKp < ej && (fc = -fc), aKc >> 7),
			aKr = aKc >> 5 & 3,
			aKs = aKc >> 3 & 3;
		return (Math.max(Math.min(eH + fc, 252 + aKp), aKp) << 16) + (Math.max(Math.min(uw + fc, 252 + aKr), aKr) << 8) + Math.max(Math.min(ej + fc, 252 + aKs), aKs)
	}

	function aKf() {
		return -1 !== aKc && (ad.aJb(aKc, aKd[0], aKd[1], aKd[2]), aKl(aKc), aKc = -1)
	}

	function aKl(player) {
		bi.ds = !0;
		for (var jS = ah.jS[player], jU = ah.jU[player], jT = ah.jT[player], jV = ah.jV[player], fi = jU; fi <= jV; fi++)
			for (var fg = jS; fg <= jT; fg++) {
				var fD = ad.zt(fg, fi);
				ad.a0F(player, fD) && (ad.aJh(fD) ? ad.k6(fD, player) : ad.k5(fD) ? ad.h4(fD, player) : ad.zu(fD, player))
			}
	}
	this.dk = function() {
		aKd = null, aKe = aKc = -1, wO = bO.ij(Math.floor(bm.buffer.data[16].value), 0, 16)
	}, this.ee = function(by) {
		if (bm.buffer.data[15].value && 0 !== wO && (by || !bM.sm())) {
			var by = bP.hp(bM.he),
				hq = bP.hr(bM.hf);
			if (bP.hs(by, hq)) {
				by = bP.fw(by, hq), hq = bP.fP(by);
				if (aKe === hq)
					if (ad.h9(hq)) {
						if (aKc === ad.fR(hq)) return
					} else if (-1 === aKc) return;
				! function(fD) {
					ad.h9(fD) ? (fD = ad.fR(fD)) !== aKc && (aKf(), function(player) {
						aKc = player, aKd = ad.aJf(player);
						var aKj = function() {
							var sC = aKd,
								aKm = wO << 2,
								aKn = aKm << 1;
							return [aKo(sC[0], aKm), aKo(sC[1], aKn), aKo(sC[2], aKn)]
						}();
						ad.aJb(player, aKj[0], aKj[1], aKj[2]), aKl(player)
					}(fD), aKg()) : aKf() && aKg()
				}(aKe = hq)
			} else aKf() && aKg()
		}
	}
}

function d3() {
	var wB = 0,
		aKt = 0,
		aKu = 0,
		aKv = 0,
		aKe = -1;

	function aKy(fD) {
		if (aKe === fD) return !1;
		if (-1 === (aKe = fD)) wB = 0, aO.a98(wB, 0);
		else {
			if (ad.h9(fD)) return aKu = ad.fR(fD), kt = ah.hb[aKu] - ah.a5j[aKu], (4 !== wB || kt !== aKt) && (wB = 4, aKt = kt, aO.a98(wB, kt), !0);
			if (ad.fQ(fD)) return 3 !== wB && (wB = 3, aO.a98(wB, 0), !0);
			if (ad.fe(fD)) return 2 !== wB && (wB = 2, aO.a98(wB, 0), !0);
			var kt = bQ.lj.a7p(bM.he, bM.hf);
			if (-1 === kt) return 1 !== wB && (wB = 1, aO.a98(wB, 0), !0);
			fD = bQ.z.a8n[kt];
			if (aKu = bQ.z.mn[kt], aKv = bQ.z.mo[kt] >> 3, 5 === wB && fD === aKt) return !1;
			wB = 5, aKt = fD, aO.a98(wB, fD)
		}
		return !0
	}
	this.dk = function() {
		aKv = aKu = aKt = wB = 0, aKe = -1
	}, this.ee = function(by) {
		var hq;
		!by && bM.sm() || (by = bP.hp(bM.he), hq = bP.hr(bM.hf), bP.hs(by, hq) ? (by = bP.fw(by, hq), aKy(bP.fP(by))) : aKy(-1))
	}, this.nB = function() {
		var aL0, kt, a7n, aKz;
		if (0 !== wB && 2 !== wB)
			if (bM.sm()) {
				if (1 !== wB && 3 !== wB) {
					if (4 === wB) return void(kt = ah.hb[aKu] - ah.a5j[aKu], aKt === kt || (aKt = kt, aO.a98(wB, kt)));
					(a7n = bQ.lj.nu(aKv, aKu)) < 0 ? (wB = 1, aO.a98(wB, 0)) : (aKz = bQ.z.a8n[a7n]) !== aKt && (aKt = aKz, aO.a98(wB, aKz))
				}
			} else if (1 === wB) - 1 !== (a7n = bQ.lj.a7p(bM.he, bM.hf)) && (wB = 5, aKt = bQ.z.a8n[a7n], aO.a98(wB, aKt));
		else if (3 === wB) ad.h9(aKe) && (wB = 4, aL0 = ad.fR(aKe), aKt = ah.hb[aL0] - ah.a5j[aL0], aO.a98(wB, aKt));
		else if (4 === wB) {
			if (ad.h9(aKe)) return void(aL0 = ad.fR(aKe), kt = ah.hb[aL0] - ah.a5j[aL0], aKt === kt || (aKt = kt, aO.a98(wB, kt)));
			wB = 3, aO.a98(wB, 0)
		} else - 1 === (a7n = bQ.lj.a7p(bM.he, bM.hf)) ? (wB = 1, aO.a98(wB, 0)) : (aKz = bQ.z.a8n[a7n]) !== aKt && (aKt = aKz, aO.a98(wB, aKz))
	}
}

function dc() {
	function aL2(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aLA, h.readAsText(e))
	}

	function aLA(e) {
		var aLD;
		aE.a2G || (e = JSON.parse(e.target.result), aLD = aE.data = new a6i, aLE(e, aLD, "mapType", 0, 2), aLE(e, aLD, "mapProceduralIndex", 0, 255), aLE(e, aLD, "mapRealisticIndex", 0, 255), aLE(e, aLD, "mapSeed", 0, 16383), function(aLC, aLD, h8,
				max) {
				aLC = aLC[h8];
				aLD[h8] = aLK(aLC) ? aLC.slice(0, max) : aLD[h8]
			}(e, aLD, "mapName", 20), function(aLC, aLD, h8) {
				var aKO;
				2 === aLD.mapType && (!aLK(aLC = aLC[h8]) || aLC.length <= 20 ? aLD.mapType = 0 : ((aKO = new Image).onload = function() {
					bC.aLL.aLM(aKO, 1), aKO.onload = null, aKO = null
				}, aKO.src = aLC))
			}(e, aLD, "canvas"), aLE(e, aLD, "passableWater", 0, 1), aLE(e, aLD, "passableMountains", 0, 1), aLE(e, aLD, "playerCount", 1, 512), aLE(e, aLD, "humanCount", 1, 1), aLE(e, aLD, "selectedPlayer", 0, 0), aLE(e, aLD, "gameMode", 0, 1),
			aLE(e, aLD, "playerMode", 0, 0), aLE(e, aLD, "battleRoyaleMode", 0, 0), aLE(e, aLD, "numberTeams", 0, 8), aLE(e, aLD, "isZombieMode", 0, 0), aLE(e, aLD, "isContest", 0, 0), aLE(e, aLD, "isReplay", 0, 0), aLH(e, aLD, "elo", 16, 2,
				16383), aLE(e, aLD, "colorsType", 0, 1), aLE(e, aLD, "colorsPersonalized", 0, 1), aLH(e, aLD, "colorsData", 32, 512, 262143), aLE(e, aLD, "selectableColor", 0, 1), aLH(e, aLD, "teamPlayerCount", 16, 9, 512), aLE(e, aLD,
				"neutralBots", 0, 1), aLE(e, aLD, "botDifficultyType", 0, 3), aLE(e, aLD, "botDifficultyValue", 0, 15), aLH(e, aLD, "botDifficultyTeam", 8, 9, 15), aLH(e, aLD, "botDifficultyData", 8, 512, 15), aLE(e, aLD, "spawningType", 0, 2),
			aLE(e, aLD, "spawningSeed", 0, 16383), aLH(e, aLD, "spawningData", 16, 1024, 4095), aLE(e, aLD, "selectableSpawn", 0, 1), aLE(e, aLD, "playerNamesType", 0, 2),
			function(aLC, aLD, h8, size, max) {
				var a4r = aLC[h8];
				if (Array.isArray(a4r)) {
					for (var a4s = new Array(size), fZ = Math.min(a4r.length, size), aC = 0; aC < fZ; aC++) a4s[aC] = aLK(a4r[aC]) ? a4r[aC].slice(0, max) : "";
					a4s.fill("", fZ), aLD[h8] = a4s
				}
			}(e, aLD, "playerNamesData", 512, 20), aLE(e, aLD, "selectableName", 0, 1), aLE(e, aLD, "aIncomeType", 0, 2), aLE(e, aLD, "aIncomeValue", 0, 255), aLH(e, aLD, "aIncomeData", 8, 512, 255), aLE(e, aLD, "tIncomeType", 0, 2), aLE(e, aLD,
				"tIncomeValue", 0, 255), aLH(e, aLD, "tIncomeData", 8, 512, 255), aLE(e, aLD, "iIncomeType", 0, 2), aLE(e, aLD, "iIncomeValue", 0, 255), aLH(e, aLD, "iIncomeData", 8, 512, 255), aLE(e, aLD, "sResourcesType", 0, 2), aLE(e, aLD,
				"sResourcesValue", 0, 2047), aLH(e, aLD, "sResourcesData", 16, 512, 2047), u.y(), u.z.uS[0] = 0, u.v(19))
	}

	function aLE(aLC, aLD, h8, min, max) {
		aLC = aLC[h8];
		aLD[h8] = "number" == typeof aLC && min <= aLC && aLC <= max ? Math.floor(aLC) : aLD[h8]
	}

	function aLK(s1) {
		return "string" == typeof s1
	}

	function aLH(aLC, aLD, h8, aLN, size, max) {
		var a4r = aLC[h8];
		if (Array.isArray(a4r)) {
			for (var a4s = new(8 === aLN ? Uint8Array : 16 === aLN ? Uint16Array : Uint32Array)(size), fZ = Math.min(a4r.length, size), aC = 0; aC < fZ; aC++) a4s[aC] = bO.ij(a4r[aC], 0, max);
			aLD[h8] = a4s
		}
	}
	this.aL1 = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aL2, input.click()
	}, this.aL3 = function() {
		for (var aL6, aEq, a7G = aE.data, keys = Object.keys(a7G), aL4 = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a7G[key] instanceof Uint8Array || a7G[key] instanceof Uint16Array || a7G[key] instanceof Uint32Array ? aL4[key] = Array.from(a7G[key]) : aL4[key] = a7G[key]
		}
		aL4.canvas = 2 === aL4.mapType && aL4.canvas ? aL4.canvas.toDataURL() : null, aL6 = aL4, aL6 = JSON.stringify(aL6, null, 2), aL6 = new Blob([aL6], {
			type: "application/json"
		}), (aEq = document.createElement("a")).href = URL.createObjectURL(aL6), aEq.download = "tt_scenario.json", aEq.click()
	}
}

function cc() {
	var aLO, aLP, size, k3, iI, aLQ;

	function aLR(player) {
		return player < aE.ku ? aLO * player : aLO * aE.ku + aLP * (player - aE.ku)
	}
	this.dk = function() {
		aLO = aE.ku < 16 ? 12 : 8, aLP = 4;
		var fZ = aLR(aE.fW);
		size = new Uint8Array(aE.fW), k3 = new Uint16Array(fZ), iI = new Uint32Array(fZ), aLQ = new Uint8Array(fZ)
	}, this.rs = function(aA6, aLS) {
		var aLT = this.hc(aA6, aLS),
			aLS = (this.ha(aA6, aLS, 0), bD.gv.gy(aA6, aLT));
		bg.gz(aA6, aLT - aLS, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aKB = function(player, aLS) {
		var aLW, aLS = function(player, aLS) {
			var aC, lp = aLR(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (k3[lp + aC] === aLS) return aC;
			return size[player]
		}(player, aLS);
		aLS !== size[player] && (aLW = iI[aLR(player) + aLS], this.h0(player, aLS), this.ei(player, aLW, aE.fW))
	}, this.kF = function(player, aLS) {
		for (var lp = aLR(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k3[lp + aC] === aLS) return !0;
		return !1
	}, this.kY = function(player) {
		return player < aE.ku ? size[player] < aLO : size[player] < aLP
	}, this.gg = function(player) {
		return size[player]
	}, this.gl = function(player, aC) {
		return k3[aLR(player) + aC]
	}, this.gm = function(player, aC) {
		return iI[aLR(player) + aC]
	}, this.hc = function(player, aLS) {
		for (var lp = aLR(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k3[lp + aC] === aLS) return iI[lp + aC];
		return 0
	}, this.aK2 = function(player) {
		for (var lp = aLR(player), g1 = 0, aC = size[player] - 1; 0 <= aC; aC--) g1 += iI[lp + aC];
		return g1
	}, this.ha = function(player, aLS, aLW) {
		for (var lp = aLR(player), aC = size[player] - 1; 0 <= aC; aC--) k3[lp + aC] === aLS && (iI[lp + aC] = aLW)
	}, this.hL = function(player, aC, aLW) {
		iI[aLR(player) + aC] = Math.max(aLW, 0)
	}, this.hM = function(player, aC) {
		aLQ[aLR(player) + aC] = 0
	}, this.gn = function(player, aC) {
		return aLQ[aLR(player) + aC]
	}, this.ei = function(player, aLW, aLS) {
		ap.jh.kW[player] = ap.jh.kW[aLS] = 8, bD.gv.a5e(aLS) && bg.nQ[6 - bD.gv.kH(player)]++;
		for (var lp = aLR(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k3[lp + aC] === aLS) return iI[lp + aC] += aLW, void(iI[lp + aC] = iI[lp + aC] > aE.a5m ? aE.a5m : iI[lp + aC]);
		k3[lp + size[player]] = aLS, iI[lp + size[player]] = aLW, aLQ[lp + size[player]] = 1, size[player]++, aLS === aE.fJ ? aO.a2T(player, 5) : player < aE.ku && player === aE.fJ && ag.a8i(aLS)
	}, this.h0 = function(player, eI) {
		var fs, lp;
		if (0 !== size[player])
			for (lp = aLR(player), size[player]--, fs = eI; fs < size[player]; fs++) k3[lp + fs] = k3[lp + fs + 1], iI[lp + fs] = iI[lp + fs + 1], aLQ[lp + fs] = aLQ[lp + fs + 1]
	}, this.aJx = function(player) {
		for (var fs, lp, aK8 = [], aC = am.lQ - 1; 0 <= aC; aC--)
			for (lp = aLR(am.lV[aC]), fs = size[am.lV[aC]] - 1; 0 <= fs; fs--)
				if (k3[lp + fs] === player) {
					aK8.push(am.lV[aC]);
					break
				} return aK8
	}
}

function cd() {
	var aLX;

	function aLZ(player) {
		var eH, kZ;
		return bD.gv.kH(player) && player < aE.ku ? 0 : (eH = aLX[bO.g0((aE.fW - 1) * ah.hN[player], aE.ke)], bi.kr() < 1920 && (eH = Math.max(bO.g0(100 * (13440 - 6 * bi.kr()), 1920), eH)), kZ = af.ka(player), ah.hb[player] > kZ && (eH -= bO.g0(2 *
			eH * (ah.hb[player] - kZ), kZ)), Math.min(Math.max(eH, 0), 700))
	}

	function aLl(o7) {
		for (var hN = ah.hN, lV = am.lV, aC = am.lQ - 1; 0 <= aC; aC--) {
			var h7 = lV[aC];
			bD.gv.gy(h7, bO.g0(o7 * hN[h7], 32))
		}
	}

	function aLi() {
		var yr = aE.fJ;
		bR.g5[0] = ah.hb[yr] - ah.a5j[yr]
	}

	function aLk(eI) {
		var yr = aE.fJ,
			yr = ah.hb[yr] - ah.a5j[yr] - bR.g5[0];
		af.aCC += yr, bg.nQ[eI] += yr
	}
	this.aCC = 0, this.dr = function() {
		for (var fZ = aE.fW, aC = (aLX = new Uint16Array(fZ), 0); aC < fZ; aC++) aLX[aC] = 100 + aLY(bO.g0(25600 * aC, fZ - 4), 9)
	}, this.dk = function() {
		(this.aCC = 0) === aE.data.iIncomeType ? this.aDc = aLZ : 1 === aE.data.iIncomeType ? this.aDc = function(player) {
			return bO.g0(aE.data.iIncomeValue * aLZ(player), 64)
		} : this.aDc = function(player) {
			return bO.g0(aE.data.iIncomeData[player] * aLZ(player), 64)
		}
	}, this.ee = function() {
		if (bi.kr() % 10 == 9 && (af.aCC = 0, function() {
				aLi();
				for (var lV = am.lV, hb = ah.hb, aC = am.lQ - 1; 0 <= aC; aC--) {
					var h7 = lV[aC],
						aLj = bO.g0(af.aDc(h7) * hb[h7], 1e4);
					bD.gv.gy(h7, Math.max(aLj, 1))
				}
				aLk(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aLi(), 1 === aE.data.aIncomeType)
						for (var hN = ah.hN, lV = am.lV, o7 = aE.data.aIncomeValue, aC = am.lQ - 1; 0 <= aC; aC--) {
							var h7 = lV[aC];
							bD.gv.gy(h7, bO.g0(o7 * hN[h7], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hN = ah.hN, lV = am.lV, o7 = aE.data.aIncomeData, aC = am.lQ - 1; 0 <= aC; aC--) {
								var h7 = lV[aC];
								bD.gv.gy(h7, bO.g0(o7[h7] * hN[h7], 128))
							}
						}();
					aLk(18)
				}
			}(), bi.kr() % 100 == 99)) {
			if (aLi(), 0 === aE.data.tIncomeType) aLl(32);
			else if (1 === aE.data.tIncomeType) aLl(aE.data.tIncomeValue);
			else
				for (var hN = ah.hN, lV = am.lV, o7 = aE.data.tIncomeData, aC = am.lQ - 1; 0 <= aC; aC--) {
					var h7 = lV[aC];
					bD.gv.gy(h7, bO.g0(o7[h7] * hN[h7], 32))
				}
			aLk(8)
		}
	}, this.ka = function(player) {
		return Math.min(100 * ah.hN[player], aE.a6e)
	}, this.qr = function(player, qs) {
		bt.rE(player, qs, bR.g6[0], 0), bD.gv.gy(qs, bR.g6[0]), bg.rF(player, qs), ag.aLb(player, bR.g6[0] + bR.g6[1]), ag.rG(qs, bR.g6[0]), bD.gv.n4(player)
	}, this.aLc = function() {
		for (var fZ = am.lQ, a24 = am.lV, lp = 0, a5k = ah.hb, aC = 0; aC < fZ; aC++) lp += a5k[a24[aC]];
		return lp
	}, this.aLd = function(aLe) {
		for (var h7, fZ = am.lQ, a24 = am.lV, lp = 0, a5k = ah.hb, fX = bj.fX, aC = 0; aC < fZ; aC++) fX[h7 = a24[aC]] === aLe && (lp += a5k[h7]);
		return lp
	}
}

function cf() {
	var aLp, aLq, aLr, aLs, aLt, aLu, aLv, aLw, aLx, aLy, aLz, aM0, aM1, aM2, aM3, aM4, aM5, aM6, aM8, aM9, aEj, aMA, aMB, aMH, aMI, aM7 = null,
		aMD = 0,
		aME = !1,
		aMF = new Float32Array(4),
		aMG = 0,
		aCh = 112,
		aMJ = 0;

	function sN() {
		aLx = Math.floor(+i.il), aLy = Math.floor(.5 * aLx), aM7.width = i.j, aM7.height = i.k, aM8 = aM7.getContext("2d", {
			alpha: !0
		}), bD.sK.textAlign(aM8, 1), bD.sK.textBaseline(aM8, 1), aM8.imageSmoothingEnabled = !0
	}

	function aMK() {
		var aC, aMP;
		for (ws.font = bD.sK.u8(1, 100 * aLz), aMP = 80 / Math.floor(ws.measureText(bD.tI.a1X(aE.a5m)).width), ws.font = bD.sK.u8(1, 100), aC = aE.fW - 1; 0 <= aC; aC--) aLw[aC] = 100 / Math.floor(ws.measureText(ah.a0j[aC]).width), aLv[aC] = Math
			.min(aMP, aLw[aC])
	}

	function aMQ(aC) {
		return !aMJ || (aC = ah.hb[aC]) < 1e6 ? 1 : aC < 1e7 ? aMF[0] : aMF[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aMO(ib) {
		aME = !1, aMD = bi.eZ, aM6 = !1, aM5 = 1, aM3 = aM4 = 0, ib.clearRect(0, 0, i.j, i.k);
		for (var aMW, aMX, aC, aMY, fontSize, aMZ, nv = jD / im, nw = jE / im, o8 = (i.j + jD) / im, o9 = (i.k + jE) / im, aMa = 0 !== ah.nU[aE.fJ] && !bD.gv.kH(aE.fJ), fs = am.lQ - 1; 0 <= fs; fs--) aC = am.lV[fs], (fontSize = Math.floor(aM2 * im *
			aMQ(aC) * aLv[aC] * aLt[aC])) < aM1 || aLx <= fontSize || aLr[aC] + aLt[aC] > nv && aLr[aC] < o8 && aLs[aC] + aLu[aC] > nw && aLs[aC] < o9 && (aMW = Math.floor(i.j * (aLr[aC] + aLt[aC] / 2 - nv) / (o8 - nv)), aMX = Math.floor(i.k * (
			aLs[aC] + aLu[aC] / 2 - nw) / (o9 - nw) - .1 * fontSize), aMY = ad.aAc[aC], ib.font = bD.sK.u8(1 === ah.a5a[aC] ? 4 : 1, fontSize), ib.fillStyle = aMb(fontSize, aMY % 2), aMJ ? aMc(ib, aC, fontSize, aMW, aMX, aMY) : aMd(aC,
			fontSize, aMW, aMX, ib), aM6 = !0, 0 < aEj[aC] ? function(aMW, aMX, fontSize, aC, ib) {
			0 === kf[aC] ? ak.tY.a1O(aM9[aC]) ? (function(aMW, aMX, fontSize, player, r3, ib) {
				for (var zO = aMX, ia = (ib.globalAlpha = aMl(fontSize), aMQ(player) * (aMJ ? aMG : aLw[player])), zN = aMW - .5 * fontSize / ia - .9 * fontSize, ft = 0; ft < 2; ft++) ib.fillText(ak.tY.a1G(r3), zN, zO), zN = aMW +
					.5 * fontSize / ia + .9 * fontSize;
				ib.globalAlpha = 1
			}(aMW, aMX, fontSize, aC, aM9[aC], ib), aMf(aMW, aMX, fontSize, 0, 0, ib)) : ak.tY.a1Q(aM9[aC]) ? (aMo(aMW, aMX, fontSize, aM9[aC], 0, ib), aMf(aMW, aMX, fontSize, 0, 1, ib)) : (aMo(aMW, aMX, fontSize, aM9[aC], 1, ib), aMf(
				aMW, aMX, fontSize, 1, 0, ib)) : aMo(aMW, aMX, fontSize, aM9[aC], 0, ib)
		}(aMW, aMX, fontSize, aC, ib) : 0 === kf[aC] && aMf(aMW, aMX, fontSize, 0, 0, ib), aMa && (0 < aEj[aC + aE.fW] || 0 < aEj[aC + 2 * aE.fW] || 0 < aEj[aC + 3 * aE.fW] || 0 < aEj[aC + 4 * aE.fW]) && function(aMW, aMX, fontSize, aC, ib) {
			var ej, h2 = -1;
			for (ej = 4; 1 <= ej; ej--) 0 < aEj[aC + ej * aE.fW] && h2++;
			for (ej = 1; ej < 5; ej++) 0 < aEj[aC + ej * aE.fW] && (! function(aMW, aMX, fontSize, ej, aC, aMj, ea, ib) {
				var a55;
				if (1 === ej) {
					aC = aM9[aC + aE.fW];
					if (!ak.tY.a1P(aC)) return function(aMW, aMX, fontSize, r3, aMj, ib) {
						ib.globalAlpha = aMl(fontSize);
						aMW -= .534 * aMj * fontSize, aMj = aMX + 1.59 * fontSize;
						ib.font = bD.sK.u8(0, .785 * fontSize), ib.fillText(ak.tY.a1G(r3), aMW, aMj), ib.globalAlpha = 1
					}(aMW, aMX, fontSize, aC, aMj, ib);
					a55 = ak.yq.a0p[aC - 1024 + ak.tY.a11]
				} else a55 = 2 === ej ? aM.a7V()[4].canvas[+(ea < 255)] : (3 === ej ? aM.a7V()[5] : aM.a7V()[6]).canvas[0];
				aC = ak.yq.a0q, ea = .8 * fontSize / aC, ej = aMW - .5 * ea * aC - .534 * aMj * fontSize, aMW = aMX + 1.4 * ea * aC;
				ib.setTransform(ea, 0, 0, ea, ej, aMW), ib.globalAlpha = aMl(fontSize), ib.drawImage(a55, 0, 0), ib.globalAlpha = 1, ib.setTransform(1, 0, 0, 1, 0, 0)
			}(aMW, aMX, fontSize, ej, aC, h2, aEj[aC + ej * aE.fW], ib), h2 -= 2)
		}(aMW, aMX, fontSize, aC, ib), (aMZ = aLz * fontSize) < aM1 || (ib.font = bD.sK.u8(1, aMZ), aMX += Math.floor(.78 * fontSize), aMJ ? aMd(aC, aMZ, aMW, aMX, ib) : aMc(ib, aC, aMZ, aMW, aMX, aMY)))
	}

	function aMd(aC, fontSize, fg, fi, ib) {
		var ___id = aC;
		var showName = aC < aE.ku || !__fx.settings.hideBotNames;
		var eliminationEstimate = __fx.settings.showEstimatedEliminationAttack ?
			__fx.utils.getEstimatedEliminationAttack(___id, ah?.playerBalances?.[___id] - ah.a4f[___id]) :
			"";
		if (showName) ib.fillText(ah.a0j[aC], fg, fi), aC < aE.ku && 2 !== ah.a5a[aC] || (aC = fontSize / aLw[aC], ib.fillRect(fg - .5 * aC, fi + bD.sK.a1H * fontSize, aC, Math.max(1, .1 * fontSize)));
		aMJ && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (ib.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			ib.fillText(__fx.utils.getDensity(___id), fg, showName ? fi + fontSize : fi),
			eliminationEstimate && ib.fillText(eliminationEstimate, fg, showName ? fi + 2 * fontSize : fi + fontSize)
		);
	}

	function aMc(ib, aC, fontSize, aMW, aMX, aMY) {
		var ea, a5j = ah.a5j[aC],
			aMi = bD.tI.a1X(ah.hb[aC] - a5j);

		function drawDensity() {
			var eliminationEstimate;
			!aMJ && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (ib.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), ib.fillText(__fx.utils.getDensity(aC), aMW, aMX + fontSize), eliminationEstimate = __fx.settings
				.showEstimatedEliminationAttack ? __fx.utils.getEstimatedEliminationAttack(aC, ah?.hb?.[aC] - a5j) : "") && ib.fillText(eliminationEstimate, aMW, aMX + 2 * fontSize)
		}
		a5j ? (ea = ib.fillStyle, ib.fillStyle = aMb(fontSize, 2 + aMY % 2), ib.fillText(aMi, aMW, aMX), ib.fillStyle = ea) : aMY >> 1 & 1 ? (ib.lineWidth = .05 * fontSize, ib.strokeStyle = aMb(fontSize, aMY % 2), ib.strokeText(aMi, aMW, aMX)) : (1 <
			aMY && (ib.lineWidth = .12 * fontSize, ib.strokeStyle = aMb(fontSize, aMY), ib.strokeText(aMi, aMW, aMX)), ib.fillText(aMi, aMW, aMX)), drawDensity()
	}

	function aMf(aMW, aMX, fontSize, aMj, aMk, ib) {
		var a80 = .95 * fontSize / aMB,
			aMW = aMW - .5 * a80 * aMA + .8 * aMj * fontSize,
			aMj = aMX - 1.76 * a80 * aMB - (.35 - bD.sK.a1H + .7) * aMk * fontSize;
		ib.setTransform(a80, 0, 0, a80, aMW, aMj), ib.globalAlpha = aMl(fontSize), ib.drawImage(ac.get(4), 0, 0), ib.globalAlpha = 1, ib.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aMo(aMW, aMX, fontSize, r3, aMj, ib) {
		var iV, zN, a80;
		ib.globalAlpha = aMl(fontSize), ak.tY.a1P(r3) ? (iV = ak.yq.a0q, ib.setTransform(a80 = 1.1 * fontSize / iV, 0, 0, a80, zN = aMW - .5 * a80 * iV - .8 * aMj * fontSize, a80 = aMX - 1.55 * a80 * iV), ib.drawImage(ak.yq.a0p[r3 - 1024 + ak.tY
			.a11], 0, 0), ib.setTransform(1, 0, 0, 1, 0, 0)) : (zN = aMW - .8 * aMj * fontSize, a80 = aMX - (.35 - bD.sK.a1H + 1) * fontSize, ib.fillText(ak.tY.a1G(r3), zN, a80)), ib.globalAlpha = 1
	}

	function aMb(fontSize, aMY) {
		return aLy <= fontSize && fontSize < aLx ? bj.aMq[aMY] + aMl(fontSize).toFixed(3) + ")" : bj.aMr[aMY]
	}

	function aMl(fontSize) {
		return aLy <= fontSize && fontSize < aLx ? 1 - (fontSize - aLy) / (aLx - aLy) : 1
	}

	function aN0(ia, j) {
		return 1 + Math.floor(aM0 * ia * j)
	}

	function aMx(aC) {
		for (var left = aLr[aC], fs = aLr[aC] - ah.jS[aC] - 1; 0 <= fs; fs--)
			if (!aN2(aC, --left, aLs[aC], aLu[aC])) {
				left++;
				break
			} var right = aLr[aC];
		for (fs = ah.jT[aC] - aLr[aC] - aLt[aC]; 0 <= fs; fs--)
			if (!aN2(aC, ++right + aLt[aC] - 1, aLs[aC], aLu[aC])) {
				right--;
				break
			} var fg = Math.floor((left + right) / 2),
			top = aLs[aC];
		for (fs = aLs[aC] - ah.jU[aC] - 1; 0 <= fs; fs--)
			if (!aN3(aC, fg, --top, aLt[aC])) {
				top++;
				break
			} var bottom = aLs[aC];
		for (fs = ah.jV[aC] - aLs[aC] - aLu[aC]; 0 <= fs; fs--)
			if (!aN3(aC, fg, ++bottom + aLu[aC] - 1, aLt[aC])) {
				bottom--;
				break
			} var fi = Math.floor((top + bottom) / 2);
		aMu(aC, fg, fi, aLt[aC], aLu[aC]) && (aLr[aC] = fg, aLs[aC] = fi)
	}

	function aMu(player, fg, fi, j, k) {
		fc = Math.floor(.2 * j);
		for (var fc, ej = fg + j - 1; fg <= ej; ej--)
			if (!aN2(player, ej, fi, k)) return;
		for (ej = fi + k - 1 - (fc = (fc = Math.floor(.25 * k)) < 1 ? 1 : fc); fi + fc <= ej; ej--)
			if (!aN3(player, fg, ej, j)) return;
		return 1
	}

	function aN2(player, fg, fi, k) {
		return ad.a0F(player, 4 * (fi * bV.fk + fg)) && ad.a0F(player, 4 * ((fi + k - 1) * bV.fk + fg))
	}

	function aN3(player, fg, fi, j) {
		return ad.a0F(player, 4 * (fi * bV.fk + fg)) && ad.a0F(player, 4 * (fi * bV.fk + fg + j - 1))
	}
	this.dk = function() {
		if (aMJ = bm.buffer.data[7].value || 8 === aE.lC, aM6 = !1, aM2 = .88, aLz = .5, aM0 = 1.8, aM1 = 12 - 3 * bm.buffer.data[9].value, aLq = aLp = 0, aLr = new Uint16Array(aE.fW), aLs = new Uint16Array(aE.fW), aLt = new Uint16Array(aE.fW),
			aLu = new Uint16Array(aE.fW), aLv = new Float32Array(aE.fW), aLw = new Float32Array(aE.fW), aM9 = new Uint16Array(2 * aE.fW), aEj = new Uint8Array(5 * aE.fW), aMH = new Uint8Array(aE.fW), aMI = new Uint8Array(aE.fW), aM7 = aM7 ||
			document.createElement("canvas"), sN(), aM4 = aM3 = 0, aM5 = 1, aMJ) {
			var aC, aMP;
			for (aMK(), ws.font = bD.sK.u8(1, 100), aMP = 100 / Math.floor(ws.measureText("900 000").width), aC = aE.fW - 1; 0 <= aC; aC--) aLv[aC] = Math.min(aMP, 2 * aLw[aC]);
			aMG = aMP, aMF[0] = 100 / (aMP * Math.floor(ws.measureText("5 000 000").width)), aMF[1] = 100 / (aMP * Math.floor(ws.measureText("50 000 000").width)), aMF[2] = 100 / (aMP * Math.floor(ws.measureText("500 000 000").width)), aMF[3] =
				100 / (aMP * Math.floor(ws.measureText("1 000 000 000").width))
		} else aMK();
		! function() {
			var aC;
			for (aC = aE.fW - 1; 0 <= aC; aC--) ah.hN[aC] < 12 ? (aLr[aC] = ah.jS[aC] + 1, aLs[aC] = ah.jU[aC] + 1, aLt[aC] = 1, aLu[aC] = 1) : (aLr[aC] = ah.jS[aC], aLs[aC] = ah.jU[aC] + 1, aLt[aC] = 4, aLu[aC] = 2);
			if (aE.hx)
				for (aC = 0; aC < aE.ku; aC++) aLt[aC] = 0;
			aMA = ac.get(4).width, aMB = ac.get(4).height
		}()
	}, this.aLb = function(h7, a7E) {
		a7E > 18 * ah.hN[h7] ? (aMI[h7] = 6, ad.aAc[h7] = 2 + ad.aAc[h7] % 2) : (aMH[h7] = 4, (ad.aAc[h7] < 2 || 3 < ad.aAc[h7]) && (ad.aAc[h7] = 6 + ad.aAc[h7] % 2))
	}, this.rG = function(h7, a7E) {
		a7E > 6 * ah.hN[h7] ? (aMI[h7] = 6, ad.aAc[h7] = 4 + ad.aAc[h7] % 2) : (aMH[h7] = 4, (ad.aAc[h7] < 4 || 5 < ad.aAc[h7]) && (ad.aAc[h7] = 8 + ad.aAc[h7] % 2))
	}, this.resize = function() {
		sN(), aMO(aM8)
	}, this.a6a = function() {
		for (var aC = 0; aC < aE.ku; aC++) ah.jT[aC] - ah.jS[aC] != 3 || ah.jV[aC] - ah.jU[aC] != 3 ? (aLr[aC] = ah.jS[aC] + (ah.jT[aC] !== ah.jS[aC] ? 1 : 0), aLs[aC] = ah.jU[aC], aLt[aC] = 1, aLu[aC] = 1) : (aLr[aC] = ah.jS[aC], aLs[aC] = ah
			.jU[aC] + 1, aLt[aC] = 4, aLu[aC] = 2)
	}, this.rt = function(player, eI, aMR) {
		! function(player, eI, aMR) {
			player += eI * aE.fW;
			0 === eI ? aM9[player] === aMR && 0 < aEj[player] ? aEj[player] = 0 : (aM9[player] = aMR, aEj[player] = ak.tY.a1O(aMR) ? 255 : 64) : 1 === eI ? (aEj[player] = 64, aM9[player] = aMR) : aEj[player] = aMR
		}(player, eI, aMR), 2 === aE.a2G && this.nG(!0)
	}, this.wr = function() {
		aM6 && (1 !== aM5 ? (ws.imageSmoothingEnabled = !0, ws.setTransform(aM5, 0, 0, aM5, 0, 0), ws.drawImage(aM7, -aM3 / aM5, -aM4 / aM5), ws.setTransform(1, 0, 0, 1, 0, 0), ws.imageSmoothingEnabled = !1) : ws.drawImage(aM7, -aM3, -aM4))
	}, this.aBP = function(iw, iz) {
		aM3 += iw, aM4 += iz
	}, this.a3m = function(iw, iz) {
		ag.aBP(iw, iz)
	}, this.zoom = function(a4e, m9, mA) {
		aM5 *= a4e, aM3 = (aM3 + m9) * a4e - m9, aM4 = (aM4 + mA) * a4e - mA
	}, this.aJy = function(player) {
		var jS = ah.jS[player],
			jT = ah.jT[player],
			jU = ah.jU[player],
			jV = ah.jV[player],
			j7 = bP.hp(0),
			j8 = bP.hr(0),
			j9 = bP.hp(i.j),
			jA = bP.hr(i.k);
		jS < j9 && j7 < jT && jU < jA && j8 < jV && (aLt[player] = 0, aME = !0)
	}, this.nG = function(by) {
		return !(!aME && !by && bi.eZ < aMD + (1 === aM5 && 0 === aM3 && 0 === aM4 && (aE.a73() || aE.hx || 2 === aE.a2G) ? 1e3 : aCh) || (aMO(aM8), 0))
	}, this.aMU = function(aC) {
		return aMQ(aC) * aLv[aC]
	}, this.aMV = function(player) {
		return aLv[player]
	}, this.ee = function() {
		bi.kr() % 10 == 9 && (aME = aME || aE.a75() && !aE.a73()), !aE.a73() && 4 <= ++aLq && function() {
			var aC, fs, ft;
			for (aLq = 0, ft = 4; 1 <= ft; ft--)
				for (fs = am.lQ - 1; 0 <= fs; fs--) aC = am.lV[fs] + ft * aE.fW, 0 < aEj[aC] && aEj[aC] < 255 && aEj[aC]--;
			if (2 !== aE.a2G)
				for (fs = am.lQ - 1; 0 <= fs; fs--) aC = am.lV[fs], 0 < aEj[aC] && aEj[aC] < 255 && aEj[aC]--
		}();
		var aC, fs, fZ = Math.floor(.1 * am.lQ);
		for (fZ = (fZ = fZ < 8 ? 8 : fZ) > am.lQ ? am.lQ : fZ, aC = aLp + fZ - 1; aLp <= aC; aC--) fs = aC % am.lQ, ! function(aC) {
			var ia = aMQ(aC) * aLv[aC];
			0 < aLt[aC] && aMu(aC, aLr[aC], aLs[aC], aLt[aC], aLu[aC]) ? ! function(aC) {
				for (var fg, fi, j, k, fD = !1, ft = 0; ft < 8; ft++) {
					if (j = aLt[aC] + 2, k = aLu[aC] + 2, j > ah.jT[aC] - ah.jS[aC] + 1 || k > ah.jV[aC] - ah.jU[aC] + 1) return fD;
					if (fg = aLr[aC] - 1, fi = aLs[aC] - 1, !aMu(aC, fg, fi, j, k)) return fD;
					aLr[aC] = fg, aLs[aC] = fi, aLt[aC] = j, aLu[aC] = k, fD = !0
				}
				return fD
			}(aC) && function(aC, ia) {
				for (var fg, fi, j, k, fD = !1, aEs = aLt[aC], o7 = 1 + Math.floor(.02 * aEs), ft = 1; ft < 5; ft++) {
					if ((j = aEs + ft * o7) > ah.jT[aC] - ah.jS[aC] + 1) return fD;
					if ((k = aN0(ia, j)) > ah.jV[aC] - ah.jU[aC] + 1) return fD;
					fg = ah.jS[aC] + Math.floor(Math.random() * (ah.jT[aC] - ah.jS[aC] + 2 - j)), fi = ah.jU[aC] + Math.floor(Math.random() * (ah.jV[aC] - ah.jU[aC] + 2 - k)), aMu(aC, fg, fi, j, k) && (aLr[aC] = fg, aLs[aC] = fi, aLt[
						aC] = j, aLu[aC] = k, fD = !0)
				}
				return fD
			}(aC, ia) && aMx(aC) : ! function(aC, ia) {
				var k, fg = aLr[aC] + 1,
					fi = aLs[aC] + 1,
					j = aLt[aC] - 2;
				for (;;) {
					if (j < 1) {
						aLt[aC] = 0;
						break
					}
					if (k = aN0(ia, j), aMu(aC, fg, fi, j, k)) return aLr[aC] = fg, aLs[aC] = fi, aLt[aC] = j, aLu[aC] = k, 1;
					fg++, fi++, j -= 2
				}
				return
			}(aC, ia) ? function(aC, ia) {
				var fg, fi, j, k, ft, oD, kA = ah.jT[aC] - ah.jS[aC] + 1,
					aN1 = Math.floor(.02 * kA);
				for (oD = -6 * (aN1 = aN1 < 1 ? 1 : aN1), ft = kA; oD <= ft; ft -= aN1)
					if (k = aN0(ia, j = 0 < ft ? ft : 1), fg = ah.jS[aC] + Math.floor(Math.random() * (ah.jT[aC] - ah.jS[aC] + 2 - j)), fi = ah.jU[aC] + Math.floor(Math.random() * (ah.jV[aC] - ah.jU[aC] + 2 - k)), aMu(aC, fg, fi, j, k))
						return aLr[aC] = fg, aLs[aC] = fi, aLt[aC] = j, aLu[aC] = k
			}(aC, ia) : aMx(aC)
		}(am.lV[fs]);
		aLp = (aLp += fZ) % am.lQ
	}, this.nA = function() {
		var aC, h7, a1M, a1N;
		if (bi.kr() % 4 == 1)
			for (aC = am.lQ - 1; 0 <= aC; aC--) h7 = am.lV[aC], ad.aAc[h7] < 2 || ((a1M = Math.max(aMH[h7] - 1, 0)) === (a1N = Math.max(aMI[h7] - 1, 0)) ? 0 === a1M && (ad.aAc[h7] %= 2) : 0 === a1N && ad.aAc[h7] < 6 && (ad.aAc[h7] += 4), aMH[
				h7] = a1M, aMI[h7] = a1N)
	}, this.a8i = function(player) {
		var aC = player + 2 * aE.fW,
			ea = aEj[aC];
		return 0 < ea && (aO.a2O(50, player), aEj[aC] = 0, 255 === ea)
	}, this.a7k = function(player) {
		return 255 === aEj[player + 2 * aE.fW]
	}
}

function ch() {
	var aN4, aN5, aN6;
	this.dk = function() {
		aN4 =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aN5 =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aN6 = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a8y = ["K ", " Y", "E ", " Z", " z", " s", "S "], aFm = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aN4.length - 1; 0 <= aC; aC--)
			for (var fs = a8y.length - 1; 0 <= fs; fs--) aN4[aC] = aN4[aC].replace(a8y[fs], aFm[fs]);
		if (__fx.settings.realisticNames) aN4 = realisticNames;
	}, this.a6q = function() {
		var fZ = aE.ku,
			a0j = ah.a0j,
			a2w = ah.a2w,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fZ)
			for (var aC = 0; aC < fZ; aC++) a0j[aC] = a2w[aC] = "Player " + az.kB(1e3);
		else
			for (aC = 0; aC < fZ; aC++) a0j[aC] = a2w[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.lC) {
			for (var eH = az.random(), aNC = aN6, aND = aN5, iI = aF.iI, fZ = aNC.length, lp = aE.data.teamPlayerCount[7], a0j = ah.a0j, a2w = ah.a2w, aC = lp - 1; aC >= aE.ku; aC--) a0j[aC] = a2w[aC] = aNC[(aC + eH) % fZ];
			for (fZ = aND.length - 1, aC = lp; aC < aE.fW; aC++) a0j[aC] = a2w[aC] = aND[iI[aC] ? fZ : aC % fZ]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fZ = aE.fW, a0j = ah.a0j, a2w = ah.a2w, playerNamesData = aE.data.playerNamesData, aC = aE.ku; aC < fZ; aC++) a0j[aC] = a2w[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var a0j = ah.a0j, a2w = ah.a2w, aC = aE.ku; aC < aE.fW; aC++) a0j[aC] = a2w[aC] = "Bot " + az.kB(1e3)
		} : function() {
			for (var aNE = aN4, fZ = aNE.length, eH = az.random(), a0j = ah.a0j, a2w = ah.a2w, aC = aE.ku; aC < aE.fW; aC++) a0j[aC] = a2w[aC] = aNE[(aC + eH) % fZ]
		})()
	}
}

function d0() {
	this.aNF = [], this.aNG = [], this.dk = function() {
		this.aNF = [], this.aNG = []
	}, this.ee = function() {
		0 <= this.aNF.length && this.aNH(this.aNF), 0 <= this.aNG.length && this.aNH(this.aNG)
	}, this.aNH = function(h) {
		for (var ft = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].eZ--, h[aC].eZ <= 0) {
				ft = aC;
				break
			} for (aC = ft; 0 <= aC; aC--) h.shift()
	}, this.a7d = function(id, a24, aNI) {
		return this.fu(this.aNF, id, a24, aNI)
	}, this.aNJ = function(id, a24, aNI) {
		return this.fu(this.aNG, id, a24, aNI)
	}, this.fu = function(h, id, a24, aNI) {
		return ! function(h, id, a24) {
			var aC, iR;
			for (aC = a24.length - 1; 0 <= aC; aC--)
				for (iR = h.length - 1; 0 <= iR; iR--)
					if (h[iR].player === a24[aC] && id === h[iR].id) return 1;
			return
		}(h, id, a24) && (aNI && function(h, id, a24) {
			var aC;
			for (aC = a24.length - 1; 0 <= aC; aC--) h.push({
				player: a24[aC],
				id: id,
				eZ: 384
			})
		}(h, id, a24), !0)
	}
}

function cg() {
	this.a2w = new Array(aE.fW), this.a0j = new Array(aE.fW), this.a5a = new Uint8Array(aE.fW), this.nU = new Uint8Array(aE.fW), this.jS = new Uint16Array(aE.fW), this.jU = new Uint16Array(aE.fW), this.jT = new Uint16Array(aE.fW), this.jV =
		new Uint16Array(aE.fW), this.hN = new Uint32Array(aE.fW), this.zp = new Uint32Array(aE.fW), this.hb = new Uint32Array(aE.fW), this.h1 = null, this.hF = null, this.hG = null, this.fy = null, this.rj = new Uint16Array(aE.fW), this.jx =
		new Uint16Array(aE.fW), this.jy = new Uint16Array(aE.fW), this.a2r = new Uint16Array(aE.fW), this.a2p = new Uint8Array(aE.fW), this.a5j = new Uint16Array(aE.fW), this.dk = function() {
			this.a2w.fill(""), this.a0j.fill(""), this.a5a.fill(0), this.nU.fill(0), this.jS.fill(0), this.jU.fill(0), this.jT.fill(0), this.jV.fill(0), this.hN.fill(0), this.zp.fill(0), this.hb.fill(0), this.h1 = new Array(aE.fW), this.hF =
				new Array(aE.fW), this.hG = new Array(aE.fW), this.fy = new Array(aE.fW), this.rj.fill(0), this.jx.fill(0), this.jy.fill(0), this.a2r.fill(0), this.a2p.fill(0), this.a5j.fill(0)
		}
}

function cy() {
	this.aFF = function(player) {
		aH.nT(player), aE.a2I++, ah.a5a[player] = 2, ah.a2r[player] = bl.a36.aK7(), player === aE.fJ && (aY.show(!1, !1), aX.aDO(), bU.a21.a2n()), ag.a8i(player)
	}
}

function cZ() {
	this.lV = null, this.lQ = 0, this.a6u = function() {
		for (this.lQ = 0, aC = aE.fW - 1; 0 <= aC; aC--) 0 !== ah.nU[aC] && this.lQ++;
		this.lV = new Uint16Array(this.lQ);
		for (var fZ = 0, aC = 0; aC < aE.fW; aC++) 0 !== ah.nU[aC] && (this.lV[fZ++] = aC)
	}, this.n9 = function() {
		for (var hN = ah.hN, zp = ah.zp, a2p = ah.a2p, lV = am.lV, aC = am.lQ - 1; 0 <= aC; aC--) {
			var h7 = lV[aC],
				ea = hN[h7],
				lp = zp[h7];
			ea <= bO.g0(lp, 4) ? al.dt(h7) : lp <= ea ? 250 <= (zp[h7] = ea) && (a2p[h7] = 1) : zp[h7] = lp - Math.max(1, bO.g0(lp - ea, 1e3))
		}
		this.aNN()
	}, this.aNN = function() {
		for (var nU = ah.nU, lo = this.lV, aE6 = this.lQ, aC = aE6 - 1; 0 <= aC; aC--) 0 === nU[lo[aC]] && (lo[aC] = lo[--aE6]);
		this.lQ = aE6
	}
}

function ca() {
	var aNO = new Uint16Array(aE.fW),
		aNP = 0;

	function aNT(a8o, aNR) {
		var ej = bi.kr();
		return 3213 <= ej ? 4 + bO.g0(100 * aNR, af.ka(a8o)) : (a8o = 1 + bO.g0(aE.ke, 300), ej < 357 ? 2 + bO.g0(100 * aNR, a8o) : ej < 714 ? 2 + bO.g0(100 * aNR, 4 * a8o) : ej < 1071 ? 2 + bO.g0(100 * aNR, 10 * a8o) : ej < 2142 ? 2 + bO.g0(100 *
			aNR, 30 * a8o) : 2 + bO.g0(100 * aNR, 100 * a8o))
	}

	function aNS(a8o) {
		return aE.lE || 4284 <= bi.kr() || bD.gv.kH(a8o)
	}
	this.dk = function() {
		aNO.fill(0), aNP = 15
	}, this.iD = function(qs) {
		var player = aE.fJ;
		return !!bD.gv.rl(player, qs) && !(!bD.gv.rB(player, bD.gv.jB(player, aS.i3()), qs) || (player = qs, qs = bR.g6[0], !aNS(player) && aNO[player] + aNT(player, qs) > aNP))
	}, this.ei = function(a8o, aNR) {
		if (!aNS(a8o)) {
			aNR = aNT(a8o, aNR);
			if (aNO[a8o] + aNR > aNP) return !1;
			aNO[a8o] += aNR
		}
		return !0
	}, this.ee = function() {
		bi.kr() % 100 == 99 && (bi.kr() < 1071 ? aNP += 4 : bi.kr() < 2142 ? aNP += 6 : bi.kr() < 3213 ? aNP += 8 : aNP += 10)
	}
}

function ci() {
	var aNU;
	this.lL = null, this.lK = 0, this.dk = function() {
		aNU = [], 9 === aE.lC && this.aNV()
	}, this.aNV = function() {
		this.lL = [0, 0, 0, 0, 0, 0];
		for (var aNW = [250, 226, 166, 148, 100, this.lK = 0, 0, 0], aNX = [0, 8, 24, 30, 46, 70, 256, 333], aNY = [0, 0, 3, 9, 17, 25, 256, 179], k = aE.ku, aC = 1; aC < aNW.length; aC++)
			if (k <= aNX[aC]) {
				this.lK = aNW[aC - 1] - bO.g0((k - aNX[aC - 1]) * (aNW[aC - 1] - aNW[aC]), aNX[aC] - aNX[aC - 1]), this.lL[5] = aNY[aC - 1] - bO.g0((k - aNX[aC - 1]) * (aNY[aC - 1] - aNY[aC]), aNX[aC] - aNX[aC - 1]), this.lL[0] = aE.fW - k - this
					.lK - this.lL[5];
				break
			} aE.lG = aE.fW - aE.ku, aE.data.numberTeams = (0 < aE.ku) + (0 < aE.lG), aE.data.playerCount = aE.zL = aE.ku + aE.lG, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.ku + this.lK, aE.lG - this.lK]), aE.a6j.a6o()
	}, this.aKE = function(player) {
		aNU.push({
			player: player,
			h2: 14 + az.kB(20)
		})
	}, this.ee = function() {
		if (9 === aE.lC)
			for (var aC = aNU.length - 1; 0 <= aC; aC--) --aNU[aC].h2 <= 0 && (ag.rt(aNU[aC].player, 0, ak.tY.a14 + ak.tY.a1I), aNU.splice(aC, 1))
	}
}

function dH() {
	function aNo() {
		return {
			fk: bV.fk,
			fl: bV.fl,
			yn: bV.yn,
			yj: bV.yj,
			yk: bV.yk,
			yo: bV.yo,
			fF: bV.fF,
			mapSeed: bV.mapSeed,
			yl: bV.yl
		}
	}

	function aNg(aC) {
		return 1 !== aC && bV.aFw(aC) && aC !== bV.aNq()
	}
	this.aNa = 25, this.aNb = 13, this.aKQ = 4096, this.fk = 0, this.fl = 0, this.yn = null, this.yj = null, this.yk = null, this.yo = null, this.fF = 0, this.mapSeed = 0, this.yl = !1, this.ym = new aNc, this.yd = new aNd, this.a95 = new aNe, this
		.dk = function() {
			this.yd.dk()
		}, this.a8 = function(map, aNf) {
			((map %= this.aNa) !== this.fF || aNg(this.fF) && aNf !== this.mapSeed) && (this.yl = !1, this.ym.aNh(), az.a6p(map), this.fF = map, this.mapSeed = aNf, aNg(map) && (bV.yd.ye[map].aNi = aNf), this.aFw(this.fF) ? (map = bV.yd.ye[this.fF],
				this.fk = map.j, this.fl = map.k, az.a6p(map.aNi), ar.a8([this.fk, this.fl, map.nZ, map.nW]), aNk(), aq.aNl(), ar.aNm()) : aNj())
		}, this.aNn = function(map, aNf) {
			var gI = aNo(),
				map = (this.a8(map, aNf), this.ym.aNh(), aNo());
			return aNf = gI, bV.fk = aNf.fk, bV.fl = aNf.fl, bV.yn = aNf.yn, bV.yj = aNf.yj, bV.yk = aNf.yk, bV.yo = aNf.yo, bV.fF = aNf.fF, bV.mapSeed = aNf.mapSeed, bV.yl = aNf.yl, map
		}, this.a7A = function(canvas) {
			canvas && this.yn !== canvas && (this.fk = canvas.width, this.fl = canvas.height, this.yn = canvas, this.yj = this.yn.getContext("2d", {
				alpha: !1
			}), this.iY = this.yj.getImageData(0, 0, this.fk, this.fl), this.yo = this.iY.data, this.fF = this.aNq(), this.mapSeed = 0, bV.yd.ye[this.fF].name = aE.data.mapName)
		}, this.fE = function(aC) {
			return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aNq()
		}, this.aNr = function(aC) {
			return 2 === aC || 7 === aC || 9 === aC || 20 === aC
		}, this.aNs = function(aC) {
			return 1 === aC
		}, this.aNq = function() {
			return this.aNa
		}, this.aFw = function(aC) {
			return void 0 === this.yd.ye[aC].aNt
		}, this.a79 = function(sC) {
			return 0 === sC.mapType ? sC.mapProceduralIndex < 10 ? sC.mapProceduralIndex : 10 + sC.mapProceduralIndex : 1 === sC.mapType ? 10 <= sC.mapRealisticIndex ? 22 + sC.mapRealisticIndex - 10 : sC.mapRealisticIndex + 10 : void 0
		}, this.aFx = function(sC, aNu) {
			0 === sC.mapType ? sC.mapProceduralIndex = aNu < 10 ? aNu : aNu - 10 : 1 === sC.mapType && (sC.mapRealisticIndex = aNu - (22 <= aNu ? 12 : 10))
		}
}

function aNc() {
	function aO3() {
		bV.ym.ee()
	}

	function aO9(h7, aO8) {
		0 < aO8 && (bV.yo[h7] += aO8, bV.yo[h7 + 1] += aO8, bV.yo[h7 + 2] += aO8)
	}

	function iq(h7) {
		return bV.yo[h7 + 2] > bV.yo[h7] && bV.yo[h7 + 2] > bV.yo[h7 + 1]
	}
	this.aBb = -1, this.a3J = 0, this.aNv = 0, this.aNw = 8, this.aNx = 32, this.aNy = 8, this.aNz = 32, this.aO0 = [0, 0], this.aAc = [0, 0, 0, 0], this.jM = null, this.aO1 = !0, this.aO2 = !1, this.aNh = function() {
		-1 !== this.aBb && clearTimeout(this.aBb), this.aBb = -1, this.jM = null, ar.aNm()
	}, this.dk = function() {
		7 === ab.a3P() || this.aO2 || (this.aO1 = !0, this.a3J = 0, this.aNv = 1, this.aO0 = [bV.yd.ye[bV.fF].z5[0], bV.yd.ye[bV.fF].z6[0]], this.aAc = [bV.yd.ye[bV.fF].aNt[3], bV.yd.ye[bV.fF].aNt[4], bV.yd.ye[bV.fF].aNt[5], bV.yd.ye[bV.fF].aNt[
			6]], this.aNw = bV.yd.ye[bV.fF].aNt[7], this.aNx = bV.yd.ye[bV.fF].aNt[8], this.aNy = bV.yd.ye[bV.fF].aNt[9], this.aNz = bV.yd.ye[bV.fF].aNt[10], this.aO1 ? this.aBb = setTimeout(aO3, 16) : this.ee())
	}, this.ee = function() {
		if (8 === ab.a3P() && aI.nn()) this.aBb = setTimeout(aO3, 16);
		else {
			if (0 === this.a3J) {
				var aNi = az.aO4();
				if (az.a6p(bV.yd.ye[bV.fF].aNt[2]), ar.a8([bV.fk, bV.fl, bV.yd.ye[bV.fF].aNt[0], bV.yd.ye[bV.fF].aNt[1]]), az.a6p(aNi), this.jM = ar.aO5(), this.a3J++, this.aO1) return void(this.aBb = setTimeout(aO3, 16))
			}
			for (var h7, fL, aNi = this.aO1 ? 10 : 1e6, aNi = bV.fl - this.aNv - 1 < aNi ? bV.fl - this.aNv - 1 : aNi, a02 = this.aNv + aNi, fi = this.aNv; fi < a02; fi++)
				for (var fg = 1; fg < bV.fk - 1; fg++) iq(h7 = 4 * (fL = fg + fi * bV.fk)) ? this.aO6(h7, fL, 1) : (this.aO6(h7, fL, 0), function(fg, fi, h7) {
					return 1 < fg && iq(h7 - 4) || fg < bV.fk - 2 && iq(h7 + 4) || 1 < fi && iq(h7 - 4 * bV.fk) || fi < bV.fl - 2 && iq(h7 + 4 * bV.fk)
				}(fg, fi, h7) && this.aO7(fg, fi));
			this.aNv = a02, this.aNv >= bV.fl - 1 ? (bV.yj.putImageData(bV.yk, 0, 0, 1, 1, bV.fk - 2, bV.fl - 2), bi.ds = !0, this.aNh()) : this.aO1 && (this.aBb = setTimeout(aO3, 16))
		}
	}, this.aO6 = function(h7, fL, eI) {
		aO9(h7, Math.floor(this.aO0[eI] + this.aAc[eI] * this.jM[fL] / 1e4) - bV.yo[h7])
	}, this.aOA = function(h7, eH, aOB, eI, aAc) {
		aO9(h7, Math.floor(this.aO0[eI] + (1 - eH / aOB) * aAc) - bV.yo[h7])
	}, this.aO7 = function(m9, mA) {
		for (var h7, eH, aOB, aBR = m9 - this.aNx, aOC = mA - this.aNx, a03 = m9 + this.aNx, a02 = mA + this.aNx, aBR = aBR < 1 ? 1 : aBR, a03 = a03 > bV.fk - 2 ? bV.fk - 2 : a03, a02 = a02 > bV.fl - 2 ? bV.fl - 2 : a02, fi = aOC < 1 ? 1 :
			aOC; fi <= a02; fi++)
			for (var fg = aBR; fg <= a03; fg++) iq(h7 = 4 * (fg + fi * bV.fk)) ? (aOB = this.aNw + (this.aNx - this.aNw) * this.jM[fg + bV.fk * fi] / 1e4, Math.abs(m9 - fg) > aOB || Math.abs(mA - fi) > aOB || aOB <= (eH = Math.sqrt((m9 - fg) * (
				m9 - fg) + (mA - fi) * (mA - fi))) || this.aOA(h7, eH, aOB, 1, this.aAc[3])) : (aOB = this.aNy + (this.aNz - this.aNy) * this.jM[fg + bV.fk * fi] / 1e4, Math.abs(m9 - fg) > aOB || Math.abs(mA - fi) > aOB || aOB <= (eH = Math
				.sqrt((m9 - fg) * (m9 - fg) + (mA - fi) * (mA - fi))) || this.aOA(h7, eH, aOB, 0, this.aAc[2]))
	}
}

function aNk() {
	var oM = aOD(bV.fF);
	oM && aOE(oM[0], oM[1], oM[2], oM[3], oM[4])
}

function aOD(fF) {
	return 2 === fF ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === fF ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === fF ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === fF ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === fF ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aOE(aOF, aOG, aOH, aOI, aOJ) {
	for (var fg, fi, aKm, aKn, a4e, aOM, iv = aOF.length - 1, aOK = bV.fk + bV.fl, fZ = (aOK *= aOK, aOH.length), aOL = Array(fZ), aC = fZ - 1; 0 <= aC; aC--) aOL[aC] = aOH[aC] * aOH[aC];
	var aON = new Array(fZ),
		aEg = new Array(fZ),
		aOO = new Array(fZ),
		g1 = ar.aO5();
	if (void 0 === aOJ)
		for (aOJ = new Array(fZ), aC = fZ - 1; 0 <= aC; aC--) aOJ[aC] = 0;
	for (aC = 1; aC < fZ; aC++) aON[aC] = aOL[aC] - aOL[aC - 1], aEg[aC] = aOI[aC] - aOI[aC - 1], aOO[aC] = aOJ[aC] - aOJ[aC - 1];
	for (fg = bV.fk - 1; 0 <= fg; fg--)
		for (fi = bV.fl - 1; 0 <= fi; fi--) {
			for (aKm = aOK, aC = iv; 0 <= aC; aC--) aKm = (aKn = (fg - aOF[aC]) * (fg - aOF[aC]) + (fi - aOG[aC]) * (fi - aOG[aC])) < aKm ? aKn : aKm;
			for (a4e = aOI[fZ - 1], aOM = aOJ[fZ - 1], aC = 1; aC < fZ; aC++)
				if (aKm < aOL[aC]) {
					a4e = aOI[aC - 1] + aJY((aKm - aOL[aC - 1]) * aEg[aC], aON[aC]), aOM = aOJ[aC - 1] + aJY((aKm - aOL[aC - 1]) * aOO[aC], aON[aC]);
					break
				} aOP(bV.fk * fi + fg, a4e, aOM, g1)
		}
}

function aOP(eI, a4e, aOM, g1) {
	a4e < 500 ? g1[eI] = bO.g0(g1[eI] * a4e * 2, 1e3) : 500 < a4e && (g1[eI] += bO.g0(2 * (1e4 - g1[eI]) * (a4e - 500), 1e3)), g1[eI] += bO.g0(aOM * (10 * a4e - g1[eI]), 1e3)
}

function ck() {
	var aOQ;

	function aOa(a55, ia, fg, fi, globalAlpha) {
		bV.yj.save(), bV.yj.globalAlpha = globalAlpha, bV.yj.imageSmoothingEnabled = !1, bV.yj.scale(ia, ia), bV.yj.drawImage(a55, Math.floor(fg * (bV.fk / ia - a55.width)), Math.floor(fi * (bV.fl / ia - a55.height))), bV.yj.restore()
	}
	this.a92 = 0, this.a93 = 0, this.a94 = 0, this.a95 = 0, this.dk = function() {
		(aOQ = new Array(bV.aNa))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eH: [220, 250, 255, 220],
			uw: [190, 220, 0, 0],
			ft: [170, 200, 0, 0]
		}, aOQ[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eH: [25, 0, 100, 0, 25],
			uw: [25, 0, 0, 0, 25],
			ft: [25, 0, 0, 0, 25]
		}, aOQ[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eH: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			uw: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			ft: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aOQ[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eH: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			uw: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			ft: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aOQ[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eH: [10, 10, 20, 10, 10, 170, 212],
			uw: [20, 20, 60, 100, 100, 110, 170],
			ft: [70, 70, 160, 30, 30, 60, 120]
		}, aOQ[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eH: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			uw: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			ft: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aOQ[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eH: [10, 10, 60, 255, 255, 200, 200],
			uw: [10, 10, 60, 255, 255, 200, 200],
			ft: [80, 80, 255, 255, 255, 200, 200]
		}, aOQ[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eH: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			uw: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			ft: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aOQ[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eH: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			uw: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			ft: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aOQ[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eH: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			uw: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			ft: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aOQ[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eH: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			uw: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			ft: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aOQ[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eH: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			uw: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			ft: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aNl = function() {
		var aOZ, aC, fs, gI, iY = function() {
				var iY;
				return bV.yn = document.createElement("canvas"), bV.yn.width = bV.fk, bV.yn.height = bV.fl, bV.yj = bV.yn.getContext("2d", {
					alpha: !1
				}), iY = bV.yj.getImageData(0, 0, bV.fk, bV.fl), bV.yo = iY.data, iY
			}(),
			j = aOQ[bV.fF].j,
			eH = aOQ[bV.fF].eH,
			uw = aOQ[bV.fF].uw,
			ft = aOQ[bV.fF].ft,
			g1 = ar.aO5(),
			fZ = j.length - 2,
			aOU = new Array(1 + fZ),
			aOV = new Array(1 + fZ),
			aOW = new Array(1 + fZ),
			aOX = new Array(1 + fZ);
		for (fs = fZ; 0 <= fs; fs--) aOU[fs] = j[fs + 1] - j[fs], aOV[fs] = eH[fs + 1] - eH[fs], aOW[fs] = uw[fs + 1] - uw[fs], aOX[fs] = ft[fs + 1] - ft[fs];
		for (aC = bV.fk * bV.fl - 1; 0 <= aC; aC--)
			for (fs = fZ; 0 <= fs; fs--)
				if (g1[aC] >= j[fs]) {
					gI = g1[aC] - j[fs], bV.yo[4 * aC] = eH[fs] + aJY(aOV[fs] * gI, aOU[fs]), bV.yo[4 * aC + 1] = uw[fs] + aJY(aOW[fs] * gI, aOU[fs]), bV.yo[4 * aC + 2] = ft[fs] + aJY(aOX[fs] * gI, aOU[fs]), bV.yo[4 * aC + 3] = 255;
					break
				} bV.yj.putImageData(iY, 0, 0), bV.aNs(bV.fF) && ac.v0() && bV.aNs(bV.fF) && (iY = ac.aIj("arena"), aOZ = ac.aIj("territorial.io"), aOa(iY, 5, .5, .5, .1), aOa(aOZ, 2, .5, .45, .1)), bV.yl = !0, bi.ds = !0
	}, this.a6s = function() {
		for (var h7, fg, fi, aOb, iP, gK, a93 = 0, j = bV.fk, k = bV.fl, gI = j * k * 4, aOc = aEF, aOd = bV.yo, aC = j - 1; 0 <= aC; aC--) aOc[(h7 = aC << 2) + 2] = aOc[gI - h7 - 2] = 3;
		for (gI = 4 * j, aC = k - 1; 0 <= aC; aC--) aOc[(h7 = aC * gI) + 2] = aOc[h7 + gI - 2] = 3;
		for (aOb = j - 1, iP = k - 1, fi = 1; fi < iP; fi++)
			for (gI = fi * j, fg = 1; fg < aOb; fg++) gK = 1 - (aOd[(h7 = gI + fg << 2) + 2] > aOd[h7 + 1] && aOd[h7 + 2] > aOd[h7]), aOc[h7 + 2] = 6 - 5 * gK, a93 += gK;
		this.a92 = (j - 2) * (k - 2), this.a95 = 0, bV.fE(bV.fF) && (bV.a95.aOe(), bV.a95.aOf(4, 5)), this.a93 = aE.ke = a93 - this.a95, this.a94 = this.a92 - this.a93 - this.a95, this.a94 && (bV.a95.aOf(6, 2), bV.a95.aOg())
	}
}

function aNj() {
	var s1;
	10 === bV.fF ? s1 =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bV.fF ? s1 =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bV.fF ? s1 =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bV.fF ? s1 =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bV.fF ? s1 =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bV.fF ? s1 =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bV.fF ? s1 =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bV.fF ? s1 =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bV.fF ? s1 =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bV.fF ? s1 =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bV.fF ? s1 =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bV.fF ? s1 =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bV.fF && (s1 =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new yW).yY(s1)
}

function aNd() {
	this.ye = null, this.aOh = null, this.aOi = null, this.dk = function() {
		this.aOj = [L(140), L(141), L(142), L(143), L(144), L(145), L(146), L(147), L(148), L(149), L(150), L(151), L(152), L(153), L(154), L(155), L(156), L(157), L(158), L(159), L(160), L(161), L(162), L(163), "Mare Nostrum"];
		var aOk = [120, 105, 92],
			cos = [12, 12, 60],
			aOl = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aOm = [140, 130, 120],
			aOn = [12, 12, 76],
			aOo = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aOp = [130, 117, 106],
			aOq = [12, 12, 68],
			aOr = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.ye = new Array(bV.aNa + 1), __fx.customLobby.setMapInfo(this.ye), this.ye[0] = {
			j: 230,
			k: 230,
			nZ: 1e3,
			nW: 2e3,
			aNi: 173
		}, this.ye[1] = {
			j: 800,
			k: 800,
			nZ: 100,
			nW: 50,
			aNi: 43
		}, this.ye[2] = {
			j: 512,
			k: 512,
			nZ: 128,
			nW: 32,
			aNi: 0
		}, this.ye[3] = {
			j: 960,
			k: 960,
			nZ: 60,
			nW: 8,
			aNi: 0
		}, this.ye[4] = {
			j: 900,
			k: 900,
			nZ: 100,
			nW: 5,
			aNi: 0
		}, this.ye[5] = {
			j: 1e3,
			k: 1e3,
			nZ: 100,
			nW: 40,
			aNi: 0
		}, this.ye[6] = {
			j: 1e3,
			k: 1e3,
			nZ: 100,
			nW: 20,
			aNi: 0
		}, this.ye[7] = {
			j: 1024,
			k: 1024,
			nZ: 128,
			nW: 32,
			aNi: 0
		}, this.ye[8] = {
			j: 820,
			k: 820,
			nZ: 200,
			nW: 100,
			aNi: 0
		}, this.ye[9] = {
			j: 1024,
			k: 1024,
			nZ: 128,
			nW: 32,
			aNi: 0
		}, this.ye[10] = {
			z5: aOm,
			z6: aOn,
			aNt: aOo
		}, this.ye[11] = {
			z5: aOp,
			z6: aOq,
			aNt: aOr
		}, this.ye[12] = {
			z5: aOp,
			z6: aOq,
			aNt: aOr
		}, this.ye[13] = {
			z5: aOk,
			z6: cos,
			aNt: aOl
		}, this.ye[14] = {
			z5: aOk,
			z6: cos,
			aNt: aOl
		}, this.ye[15] = {
			z5: aOm,
			z6: aOn,
			aNt: aOo
		}, this.ye[16] = {
			z5: aOm,
			z6: aOn,
			aNt: aOo
		}, this.ye[17] = {
			z5: aOk,
			z6: cos,
			aNt: aOl
		}, this.ye[18] = {
			z5: aOp,
			z6: aOq,
			aNt: aOr
		}, this.ye[19] = {
			z5: aOk,
			z6: cos,
			aNt: aOl
		}, this.ye[20] = {
			j: 1024,
			k: 1024,
			nZ: 128,
			nW: 32,
			aNi: 0
		}, this.ye[21] = {
			j: 940,
			k: 940,
			nZ: 80,
			nW: 8,
			aNi: 0
		}, this.ye[22] = {
			z5: aOp,
			z6: aOq,
			aNt: aOr
		}, this.ye[23] = {
			z5: aOm,
			z6: aOn,
			aNt: aOo
		}, this.ye[24] = {
			z5: [157, 136, 117],
			z6: [16, 13, 68],
			aNt: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a91: "[OG] Neutronian"
		};
		for (var aC = 0; aC < bV.aNa; aC++) this.ye[aC].name = this.aOj[aC];
		this.ye[bV.aNa] = {
			name: ""
		}, this.aOh = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aOh[aC] = aC;
		for (this.aOh[10] = 20, this.aOh[11] = 21, this.aOi = new Uint8Array(bV.aNb), aC = 0; aC < 10; aC++) this.aOi[aC] = 10 + aC;
		this.aOi[10] = 22, this.aOi[11] = 23, this.aOi[12] = 24
	}
}

function aNe() {
	this.aOe = function() {
		for (var h7, fg, gI, aOc = aEF, aOd = bV.yo, j = bV.fk, aOb = j - 1, iP = bV.fl - 1, h2 = 0, fi = 1; fi < iP; fi++)
			for (gI = fi * j, fg = 1; fg < aOb; fg++) aOd[h7 = gI + fg << 2] === aOd[1 + h7] && aOd[h7] === aOd[2 + h7] && (h2++, aOc[2 + h7] = 4);
		aq.a95 = h2
	}, this.aOf = function(aOu, aOv) {
		for (var aOc = aEF, j = bV.fk, aOb = j - 1, iP = bV.fl - 1, id = 0, fi = 1; fi < iP; fi++)
			for (var gI = fi * j, fg = 1; fg < aOb; fg++) {
				var fD = 2 + (gI + fg << 2);
				aOc[fD] === aOu && (! function(fD, id, aOu, aOv) {
					var fZ = 1,
						aOc = aEF,
						fb = ad.aJP,
						a4r = [fD],
						aOx = id >> 8 << 1,
						aOy = 255 & id;
					aOc[fD - 2] = aOx, aOc[fD - 1] = aOy, aOc[fD] = 5;
					for (; fZ;) {
						for (var a4s = [], aC = 0; aC < fZ; aC++)
							for (var fO = a4r[aC], fc = 0; fc < 8; fc++) {
								var fd = fO + fb[fc];
								aOc[fd] === aOu && (aOc[fd - 2] = aOx, aOc[fd - 1] = aOy, aOc[fd] = aOv, a4s.push(fd))
							}
						fZ = (a4r = a4s).length
					}
				}(fD, id, aOu, aOv), id = (id + 1) % 32768)
			}
	}, this.aOg = function() {
		for (var aOc = aEF, j = bV.fk, aOb = j - 3, iP = bV.fl - 3, aP0 = 12 * j, fi = 3; fi < iP; fi++)
			for (var gI = fi * j, fg = 3; fg < aOb; fg++) {
				var fD = 2 + (gI + fg << 2);
				2 !== aOc[fD] || 2 === aOc[fD - 12] && 2 === aOc[12 + fD] && 2 === aOc[fD - aP0] && 2 === aOc[fD + aP0] || (aOc[fD - 2] = 1 | aOc[fD - 2])
			}
	}
}

function a6r() {
	(a0O = void 0 === a0O ? document.createElement("canvas") : a0O).width = bV.fk, a0O.height = bV.fl, a6v = a0O.getContext("2d", {
		alpha: !0
	}), a6w = aEF = null, a6w = a6v.getImageData(0, 0, bV.fk, bV.fl), aEF = a6w.data, bD.sS.yp(aEF)
}

function cl() {
	var g1, j, k, max, aP1, nW, aP3, aP4, aP5, aP6, aP7, aP8, aP9, aPA, aP2 = 1e4;

	function aPH(aPG, nZ, fZ) {
		var aC;
		for (aP3[0] = aPG, aC = 1; aC < fZ; aC++) aP3[aC] = aP3[aC - 1] + nZ, nZ = aP3[aC] >= aP2 ? (aP3[aC] = aP2 - 1, -nZ) : aP3[aC] < 0 ? (aP3[aC] = 0, -nZ) : (nZ += 16384 <= az.random() ? nW : -nW) < -aP1 ? -aP1 : aP1 < nZ ? aP1 : nZ
	}

	function aPJ(fg, fi, aPK, fZ) {
		(aPK ? function(fg, fi, fZ) {
			var aC;
			for (aC = 0; aC < fZ; aC++) g1[fi * j + fg + aC] = aP3[aC]
		} : function(fg, fi, fZ) {
			var aC;
			for (aC = 0; aC < fZ; aC++) g1[fi * j + fg + aC * j] = aP3[aC]
		})(fg, fi, fZ)
	}

	function aPN(value, fZ) {
		var aC, aN1, fD, k9 = value - aP3[fZ - 1];
		if (0 != k9) {
			for (aN1 = 1 + bO.g0(Math.abs(k9), fZ - 1), aN1 = k9 < 0 ? -aN1 : aN1, aP3[fZ - 1] = value, fD = (fD = fZ - 1 - bO.g0(Math.abs(k9), Math.abs(aN1))) < 1 ? 1 : fZ - 2 < fD ? fZ - 2 : fD, aC = fZ - 2; fD <= aC; aC--) aP3[aC] += k9 - (fZ -
				1 - aC) * aN1;
			(k9 < 0 ? function(fZ) {
				var aC;
				for (aC = fZ - 2; 1 <= aC; aC--) aP3[aC] < 0 && (aP3[aC] = -aP3[aC] - 1)
			} : function(fZ) {
				var aC;
				for (aC = fZ - 2; 1 <= aC; aC--) aP3[aC] >= aP2 && (aP3[aC] = 2 * aP2 - aP3[aC] - 1)
			})(fZ)
		}
	}

	function aPQ(a4r, a4s, fZ) {
		for (var aC = 0; aC < fZ; aC++) a4r[aC] = a4s[aC]
	}

	function aPR(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aPS(a7X, gap, iQ) {
		aP4.push(a7X), aP5.push(gap), aP6.push(iQ)
	}
	this.a8 = function(a65) {
		! function(a65) {
			var aC;
			for (j = a65[0], k = a65[1], aP1 = a65[2], nW = a65[3], g1 = new Int16Array(j * k), max = k < j ? j : k, aP3 = new Int16Array(max), aP4 = [], aP5 = [], aP6 = [], aP7 = new Array(j), aP8 = new Array(k), aC = j - 1; 0 <= aC; aC--) aP7[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aP8[aC] = !1;
			aP9 = new Int16Array(j), aPA = new Int16Array(k)
		}(a65),
		function(fZ) {
			var aPG = az.random() % aP2,
				nZ = az.random() % (2 * aP1 + 1) - aP1;
			aPH(aPG, nZ, fZ)
		}(max), aPQ(aPA, aP3, k), aPJ(0, 0, !0, j);
		var fg, fi, a65 = g1[0],
			fZ = max,
			nZ = az.random() % (2 * aP1 + 1) - aP1;
		for (aPH(a65, nZ, fZ), aPQ(aP9, aP3, j), aPJ(0, 0, !1, k), aPR(aP9), aPR(aPA), aPH(g1[j - 1], aP9[j - 1], k), aPJ(j - 1, 0, !1, k), aPH(g1[j * (k - 1)], aPA[k - 1], j), aPN(g1[j * k - 1], j), aPJ(0, k - 1, !0, j), aP7[j - 1] = aP7[0] = !
			0, aP8[k - 1] = aP8[0] = !0, aPS(0, j, !0), aPS(0, k, !1), ! function() {
				var aPU, a7X;
				for (;;) {
					if (aPU = function() {
							var aC, aPU = aP4.length - 1;
							for (aC = aPU - 1; 0 <= aC; aC--) aP5[aC] > aP5[aPU] && (aPU = aC);
							return aPU
						}(), aP5[aPU] < 5) return;
					a7X = aP4[aPU] + bO.g0(aP5[aPU], 2), (aP6[aPU] ? function(fg) {
						var fZ, aPX, aC, aI6 = 0,
							aPY = 0;
						for (; aPY < k - 1;) {
							for (aC = aI6 + 1; aC < k; aC++)
								if (aP8[aC]) {
									aPY = aC;
									break
								} fZ = aPY - aI6 + 1, aPH(g1[fg + j * aI6], 0 === aI6 ? aP9[fg] : aP3[aPX - 1] - aP3[aPX - 2], fZ), aPN(g1[aPY * j + fg], fZ), aPJ(fg, aI6, !1, fZ), aPX = fZ, aI6 = aPY
						}
						aP7[fg] = !0
					} : function(fi) {
						var fZ, aPX, aC, aI6 = 0,
							aPY = 0;
						for (; aPY < j - 1;) {
							for (aC = aI6 + 1; aC < j; aC++)
								if (aP7[aC]) {
									aPY = aC;
									break
								} fZ = aPY - aI6 + 1, aPH(g1[fi * j + aI6], 0 === aI6 ? aPA[fi] : aP3[aPX - 1] - aP3[aPX - 2], fZ), aPN(g1[fi * j + aPY], fZ), aPJ(aI6, fi, !0, fZ), aPX = fZ, aI6 = aPY
						}
						aP8[fi] = !0
					})(a7X), aPS(a7X, aP4[aPU] + aP5[aPU] - a7X, aP6[aPU]), aP5[aPU] = a7X - aP4[aPU] + 1
				}
			}(), fg = 0; fg < j; fg++)
			if (!aP7[fg])
				for (fi = 0; fi < k; fi++) aP8[fi] || ! function(fg, fi) {
					var value = g1[fi * j + fg - 1] + g1[(fi - 1) * j + fg],
						a9K = 2;
					aP7[fg + 1] && (a9K++, value += g1[fi * j + fg + 1]);
					aP8[fi + 1] && (a9K++, value += g1[(fi + 1) * j + fg]);
					g1[fi * j + fg] = bO.g0(value, a9K)
				}(fg, fi)
	}, this.aO5 = function() {
		return g1
	}, this.aNm = function() {
		g1 = null
	}
}

function aJY(fs, ft) {
	return 0 <= fs ? bO.g0(fs, ft) : -bO.g0(-fs, ft)
}

function kQ(g1) {
	return g1 * g1
}

function a8W(fs, ft) {
	return ft < fs ? fs : ft
}

function aDk(fs, ft) {
	return fs < ft ? fs : ft
}

function aAw(fs, g1, ft) {
	return g1 < fs ? fs : ft < g1 ? ft : g1
}

function aPa(g1, fZ) {
	for (var ej = bO.g0(g1 + 1, 2), aC = 0; aC < fZ; aC++) ej = bO.g0(ej + bO.g0(g1, ej), 2);
	return ej
}

function aLY(g1, fZ) {
	return g1 < 1 ? 0 : aPa(g1, fZ)
}

function aPb(nv, nw, uf, aAf, o8, o9, ug, vN) {
	return !(nv + uf <= o8 || nw + aAf <= o9 || o8 + ug <= nv || o9 + vN <= nw)
}

function aPc(nv, nw, uf, aAf, o8, o9, ug, vN) {
	return nv <= o8 && nw <= o9 && o8 + ug <= nv + uf && o9 + vN <= nw + aAf
}

function yg(g1) {
	return Math.floor(!!g1 * (1 + Math.log2(g1 + .5)))
}

function c1() {
	this.g0 = function(fs, ft) {
		return Math.floor((fs + .5) / ft)
	}, this.aPd = function(fs, ft) {
		return Math.floor(fs * (ft + .5))
	}, this.sqrt = function(g1) {
		return ~~Math.sqrt(g1 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.ij = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aPe = function(gI, gK, gM) {
		return Math.max(Math.min(gI, gK), gM)
	}, this.aPf = function(aPg, aPh, fg, fi) {
		fg -= aPg, aPg = fi - aPh, fi = 0;
		return 0 == fg ? fi = 0 <= aPg ? Math.PI : 0 : (fi = Math.atan(aPg / fg), fi += 0 < fg ? .5 * Math.PI : 1.5 * Math.PI), fi
	}, this.log2 = function(g1) {
		return Math.floor(!!g1 * (1 + Math.log2(g1 + .5)))
	}, this.log10 = function(g1) {
		return Math.floor(Math.log10(g1 + .5))
	}, this.aPj = function(aPk, aPl, aPm, aPn, aPo) {
		return aPm - aPo < aPk && aPk < aPm + aPo && aPn - aPo < aPl && aPl < aPn + aPo
	}, this.zd = function(aBM, aBO) {
		return aBM * aBM + aBO * aBO
	}
}

function dJ() {
	this.z = new aPp, this.ua = 0;
	var aPq = new Array(32);

	function aPt() {
		for (var fZ = aPq.length, aC = 0; aC < fZ; aC++) aPq[aC] = null
	}
	this.dk = function() {
		for (var aPr, aPs = document.body.firstChild; aPs;) aPr = aPs.nextSibling, !document.body.contains(aPs) || "DIV" !== aPs.tagName && "INPUT" !== aPs.tagName && "BUTTON" !== aPs.tagName || u.removeChild(document.body, aPs), aPs = aPr
	}, this.v = function(eI, a3U, a65) {
		void 0 === a3U && (a3U = this.ua), bi.ds = !0, 0 === eI && (0 === ab.a3P() ? eI = 5 : a1.a2.setState(13)), this.tZ(), this.ua === eI && (a3U = aPq[eI].a3U, aPq[eI] = null), this.ua = eI;
		var lp = aPq[eI];
		if (!lp || 4 === eI || 7 === eI || 8 === eI || 9 === eI || 10 === eI || 11 === eI || 13 === eI || 15 === eI || 18 === eI || 20 <= eI && eI <= 28 || 32 === eI || 33 === eI) {
			if (0 === eI) return void aPt();
			1 === eI ? lp = new aPu : 2 === eI ? lp = new aPv : 3 === eI ? lp = new aPw : 4 === eI || 9 === eI || 10 === eI || 11 === eI || 13 === eI || 33 === eI ? lp = a65 : 5 === eI ? lp = new aPx : 6 === eI ? lp = new aPy : 7 === eI ? lp =
				new aPz(u.z.aQ0) : 8 === eI ? lp = a65 : 12 === eI ? lp = new aQ1 : 14 === eI ? lp = new aQ2 : 15 === eI ? lp = new aPz(u.z.aQ3) : 16 === eI ? lp = new aQ4 : 17 === eI ? lp = new aQ5 : 18 === eI ? lp = new aQ6 : 19 === eI ? lp =
				new aQ7 : 20 === eI ? lp = new aQ8 : 21 === eI ? lp = new aQ9 : 22 === eI ? lp = new aQA : 23 === eI ? lp = new aQB : 24 === eI ? lp = new aQC : 25 === eI ? lp = new aQD : 26 === eI ? lp = new aQE : 27 === eI ? lp = new aQF :
				28 === eI ? lp = new aQG : 29 === eI ? lp = new aQH : 30 === eI ? lp = new aQI : 31 === eI ? lp = new aQJ : 32 === eI && (lp = new aQK), lp.a3U = a3U, aPq[eI] = lp
		}
		lp.show(a65)
	}, this.a3O = function() {
		this.iL() && this.aQL(this.a3T().a3U)
	}, this.aQL = function(eI) {
		this.iL() && (aPq[eI] ? (this.tZ(), bi.ds = !0, this.ua = eI, aPq[eI].show()) : this.v(eI))
	}, this.tZ = function() {
		this.iL() && aPq[this.ua].tZ()
	}, this.y = function() {
		this.iL() && (aPq[this.ua].tZ(), aPt(), this.ua = 0, a1.a2.setState(13))
	}, this.wr = function() {
		var lp;
		this.iL() && (lp = aPq[this.ua]).wr && lp.wr()
	}, this.resize = function() {
		if (!this.iL()) return !1;
		aPq[this.ua].resize()
	}, this.hm = function(fg, fi) {
		var lp;
		this.iL() && (lp = aPq[this.ua]).hm && lp.hm(fg, fi)
	}, this.a3m = function(fg, fi) {
		var lp;
		this.iL() && (lp = aPq[this.ua]).a3m && lp.a3m(fg, fi)
	}, this.a4A = function() {
		var lp;
		this.iL() && (lp = aPq[this.ua]).a4A && lp.a4A()
	}, this.a3p = function(m9, mA, deltaY) {
		var lp;
		this.iL() && (lp = aPq[this.ua]).a3p && lp.a3p(m9, mA, deltaY)
	}, this.a4K = function(code) {
		var lp;
		return !!this.iL() && ((lp = aPq[this.ua]).a4K && lp.a4K(code), !0)
	}, this.ee = function() {
		var lp;
		this.iL() && (lp = aPq[this.ua]) && lp.ee && lp.ee()
	}, this.iL = function() {
		return 0 < this.ua
	}, this.a3T = function() {
		return aPq[this.ua]
	}, this.a7I = function(eI) {
		return aPq[eI]
	}, this.aQM = function() {
		return aPq
	}, this.removeChild = function(oi, oj) {
		try {
			oi.removeChild(oj)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aPz(data) {
	var aQN, aQO;

	function aQR(sF, aRE) {
		if (!data.aQP) {
			if (data.aR7) {
				if (aRE) return
			} else {
				if (!aRE) return;
				if (data.y4 < 1e4) return
			}
			var aRH, aQl = new rx,
				aRF = aRE && 1e5 <= data.y4,
				aRG = aQl.s0(aRE ? (aRF ? "⚠️ " : "") + L(264) : L(265)),
				aRJ = (aRF && (aRG.style.color = "yellow"), aRE ? aQl.s2(L(266, [bD.tI.a6M(data.y4, .01, 0)])) : ((aRH = new t7({
					value: data.aRI,
					eI: -1
				})).e.readOnly = !0, aRH.e.type = "password", aQl.sB(aRH), aQl.sB(new tl([new x(L(198), function(e) {
					return e.textContent === L(198) ? (e.textContent = L(199), aRH.e.type = "text") : (e.textContent = L(198), aRH.e.type = "password"), !0
				}).button, new x(L(195), function(e) {
					return bD.sK.a5Y(aRH.e), bD.sK.wV(e), !0
				}).button]))), aQl.s6(L(aRE ? 265 : 267)).style.marginTop = "0.75em", new t7({
					value: "",
					eI: -1
				}, 0, 0)),
				aRL = (aRJ.e.type = "email", aRJ.e.autocomplete = "email", aRJ.e.name = "email", aRJ.e.inputMode = "email", aRJ.e.spellcheck = !1, aQl.sB(aRJ), aQl.sB(new tl([new x(L(268), function(e) {
					return b1.aHS.aRK({
						action: 3,
						s1: aRJ.e.value.trim().substring(0, 63)
					}), bD.sK.wV(e), !0
				}).button])), aRE && aQl.s2(L(269)), aQl.s6(L(270)).style.marginTop = "0.75em", new t7({
					value: "",
					eI: -1
				}, 1));
			aQl.sB(aRL), aQl.sB(new tl([new x(L(271), function() {
				b1.aHS.aHT({
					action: 4,
					uY: "",
					value: Math.floor(+aRL.e.value)
				}), u.v(8, u.a3T().a3U, new ub(18))
			}).button])), sF.push(aQl)
		}
	}
	this.show = function() {
		data.aQP && bL.aRd("account", data.uY), aQN.show(), this.resize()
	}, this.tZ = function() {
		aQN.tZ()
	}, this.resize = function() {
		aQN.resize(), aQO.resize()
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	}, aQN = new wc(data.username, [new x("⬅️ " + L(40), function() {
		bL.clear(), u.a3O()
	}), new x(data.aQP ? "🔄 " + L(164) : L(165), function() {
		u.v(8, data.aQP ? u.a3T().a3U : void 0, new ub(25, {
			action: 0,
			uY: data.uY,
			uZ: data.uZ
		}))
	}, 0, 0, 1)]), aQO = new sD(aQN.wi, function() {
		var sF = [];
		aQR(sF, 1), sF.push(function() {
				var aQl = new rx;
				aQl.s0(L(237)), data.aR7 && (aQl.s6("✅ " + L(238)).style.marginBottom = "0.75em");
				var a30 = data.aR8;
				a30 < 1 ? (aQl.s6(L(239)), 0 === data.aR9 ? aQl.s2(L(240)) : 1 === data.aR9 ? aQl.s2(L(241)) : 2 === data.aR9 ? aQl.s2(L(242)) : 3 === data.aR9 ? aQl.s2(L(243)) : 4 === data.aR9 ? aQl.s2(L(244)) : 5 === data.aR9 ? aQl.s2(
					L(245)) : 6 === data.aR9 ? aQl.s2(L(246)) : aQl.s2(L(247))) : (aQl.s6(L(248)), a30 = a30 < 2 ? L(249) : a30 < 61 ? 2 === a30 ? L(250) : L(251, [a30 - 1]) : a30 < 84 ? 61 === a30 ? L(252) : L(253, [a30 - 60]) :
					a30 < 255 ? 84 === a30 ? L(254) : L(255, [a30 - 83]) : L(256), aQl.s2(a30));
				{
					var s3, aQq;
					aQl.sB(new tw), data.aQP && (s3 = aQl.s2(), aQl.sB(new tl([new x(bm.xF.vp(data.uY) ? L(257) : L(258), function(e) {
						return bm.xF.xS(data.uY) ? (e.textContent = L(257), aQq(1)) : (e.textContent = L(258), aQq(0)), !0
					}).button])), aQq = function(g1) {
						s3.textContent = g1 ? L(259) : ""
					}, bm.xF.vp(data.uY) && aQq(1), aQl.sB(new tw))
				}
				var sO, t6 = new t7({
					value: data.username,
					eI: -1
				});
				t6.e.readOnly = !0, aQl.sB(t6), aQl.sB(new tl([new x(L(195), function(e) {
					return bD.sK.a5Y(t6.e), bD.sK.wV(e), !0
				}).button])), data.aQP || aQl.s2(L(260));
				(data.aRA || data.aRB || data.aRC) && (aQl.sB(new tw), aQl.s2(L(261)), data.aRA && (aQl.s2("• Account Timeout").style.color = "orange"), data.aRB && ((sO = aQl.s2("• Muted")).style.color = "orange", sO.style.marginTop =
					"0.5em"), data.aRC) && ((sO = aQl.s2("• Redacted")).style.color = "orange", sO.style.marginTop = "0.5em");
				data.aQP && (aQl.sB(new tw), aQl.s6(b1.z.aQm("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", aQl.sB(new tl([new x(L(262), function(e) {
					return b1.aHS.aHT({
						action: 3,
						uY: data.uY,
						value: 0
					}), bD.sK.wV(e), !0
				}, bE.q3).button])), aQl.sB(new tl([new x(L(263), function(e) {
					return b1.aHS.aHT({
						action: 3,
						uY: data.uY,
						value: 1
					}), bD.sK.wV(e), !0
				}, bE.q3).button])), aQl.sB(new tl([new x("Cheater", function(e) {
					return b1.aHS.aHT({
						action: 3,
						uY: data.uY,
						value: 2
					}), bD.sK.wV(e), !0
				}, bE.q3).button])), aQl.sB(new tl([new x("False Reporter", function(e) {
					return b1.aHS.aHT({
						action: 3,
						uY: data.uY,
						value: 3
					}), bD.sK.wV(e), !0
				}, bE.q3).button])), a30 = "CRTOR" === (a30 = bm.buffer.data[105].value) || "ADMIN" === a30) && (aQl.sB(new tl([new x("Block Account", function(e) {
					return b1.aHS.aHT({
						action: 3,
						uY: data.uY,
						value: 4
					}), bD.sK.wV(e), !0
				}, bE.q1).button])), aQl.sB(new tl([new x("Ban IP", function(e) {
					return b1.aHS.aHT({
						action: 3,
						uY: data.uY,
						value: 5
					}), bD.sK.wV(e), !0
				}, bE.q1).button])), aQl.sB(new tl([new x("Gold Seizure", function(e) {
					return b1.aHS.aHT({
						action: 3,
						uY: data.uY,
						value: 6
					}), bD.sK.wV(e), !0
				}, bE.q1).button])), aQl.sB(new tl([new x("Remove Punishments", function(e) {
					return b1.aHS.aHT({
						action: 3,
						uY: data.uY,
						value: 7
					}), bD.sK.wV(e), !0
				}, bE.pq).button])));
				return aQl
			}()),
			function(sF) {
				var aQl, t6, k, aQr, aQt, aQs;
				data.aQP && data.aQw && ((aQl = new rx).s0(L(191)), aQl.s2(L(188)), (t6 = new t7({
					value: data.aQw,
					eI: -1
				})).e.readOnly = !0, aQl.sB(t6), k = !1, aQr = new x(L(192), function(e) {
					return k && b1.z.ef(0) && (bD.sK.wV(e), aQs(), b1.aHS.aQx({
						action: 9,
						uY: data.uY
					})), !0
				}, 1), aQt = new x(L(185), function(e) {
					return e.textContent === L(185) ? (k = !0, e.textContent = L(186), aQr.se(0), aQr.button.style.color = bE.qN) : aQs(), !0
				}), aQl.sB(new tl([aQt.button])), aQs = function() {
					k = !1, aQt.button.textContent = L(185), aQr.se(1), aQr.button.style.color = bE.pO
				}, aQl.sB(new tl([aQr.button])), aQl.s2(L(193)), sF.push(aQl))
			}(sF),
			function(sF) {
				var aQl, s3, aEV, aRN, aQr, aQt, aQs;
				data.aQP || ((aQl = new rx).s0(L(272)), (s3 = aQl.s2(data.aRM.length + " / 160")).style.textAlign = "center", aEV = !0, (aRN = new x0(0, 1, function(e) {
					e = e.target.value.length;
					s3.textContent = e + " / 160", 160 < e ? aEV && (aEV = !1, aQt.se(1)) : aEV || (aEV = !0, aQt.se(0))
				})).e.rows = 6, aRN.e.style.fontSize = "1em", aRN.x6(data.aRM), aQl.sB(aRN), 0 !== data.aRO ? (aQt = new x(L(273), function() {
					if (!aEV) return !0;
					u.v(8, u.a3T().a3U, new ub(29, {
						action: 1,
						s1: aRN.x7().substring(0, 160)
					}))
				}, 0, 0, 1), aQl.sB(new tl([aQt.button])), aQl.sB(new tl([new x(1 === data.aRO ? L(274) : L(275), function() {
					u.v(8, u.a3T().a3U, new ub(29, {
						action: 0,
						s1: ""
					}))
				}, 0, 0, 1).button])), aQl.s2(1 === data.aRO ? L(276, [data.aRP - 1]) : L(277, [data.aRP - 1])), aQl.s2(L(278, [data.aRQ]))) : (aQr = new x(L(192), function() {
					if (!aRN.e.readOnly) return !0;
					u.v(8, u.a3T().a3U, new ub(29, {
						action: 1,
						s1: aRN.x7().substring(0, 160)
					}))
				}, 1), aQt = new x(L(185), function(e) {
					if (e.textContent === L(185)) {
						if (!aEV) return !0;
						e.textContent = L(186), aRN.e.readOnly = !0, aQr.se(0), aQr.button.style.color = bE.qN
					} else aQs();
					return !0
				}), aQl.sB(new tl([aQt.button])), aQl.s2(L(278, [data.aRQ])), aQs = function() {
					aQt.button.textContent = L(185), aRN.e.readOnly = !1, aQr.se(1), aQr.button.style.color = bE.pO
				}, aQl.sB(new tl([aQr.button]))), sF.push(aQl))
			}(sF),
			function(sF) {
				var aQl;
				data.aQP && 0 !== data.aRO && ((aQl = new rx).s0(L(279)), aQl.s4(data.aRM), aQl.sB(new tl([new x(L(280, 0, "Report"), function(e) {
					return b1.z.ef(0) && (bD.sK.wV(e), b1.aHS.aQx({
						action: 5,
						uY: data.uY
					})), !0
				}, 0, 0, 1).button])), sF.push(aQl))
			}(sF), sF.push(function() {
				var aQl = new rx,
					aQn = (aQl.s0(L(166)), aQl.s6(b1.z.aQm("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(167), L(168), L(169), L(170), L(171), L(172), L(173), L(174), L(175), L(176), L(177), L(178), L(179), L(180)]),
					eH = data.aQo;
				return aQl.s6(L(181) + bD.tI.a6M(data.y4, .01, 2) + "<br>" + L(182) + (eH + 1) + " / " + data.y3 + "<br>" + L(183) + aQn[function(eH, y4) {
					if (eH < 10) return 0;
					if (eH < 30) return 1;
					if (eH < 60) return 2;
					if (3e4 <= (y4 = bO.g0(y4, 100))) return 3;
					if (12e3 <= y4) return 4;
					if (7e3 <= y4) return 5;
					if (3e3 <= y4) return 6;
					if (1e3 <= y4) return 7;
					if (500 <= y4) return 8;
					if (200 <= y4) return 9;
					if (70 <= y4) return 10;
					if (20 <= y4) return 11;
					if (3 <= y4) return 12;
					return 13
				}(eH, data.y4)]), aQl
			}()), data.aQP && sF.push(function() {
				var aQl = new rx,
					t6 = (aQl.s0(L(184)), aQl.s6(b1.z.aQm("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new t7({
						value: bm.buffer.data[147].value,
						eI: -1
					}, 1, void 0, function(e) {
						bm.qo.qp(147, aQq(e.target.value))
					})),
					aQr = (aQl.sB(t6), new x(L(14), function(e) {
						return t6.e.readOnly && b1.z.ef(0) && (bD.sK.wV(e), aQs(), b1.aHS.aHT({
							action: 0,
							uY: data.uY,
							value: parseInt(bm.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					aQt = new x(L(185), function(e) {
						return e.textContent === L(185) ? (e.textContent = L(186), t6.e.readOnly = !0, aQr.se(0), aQr.button.style.color = bE.qN, bm.qo.qp(147, t6.e.value), aQq(bm.buffer.data[147].value)) : aQs(), !0
					}),
					s3 = (aQl.sB(new tl([aQt.button])), aQl.s2()),
					aQq = function(g1) {
						return s3.innerHTML = u.z.aQu(g1, bm.buffer.data[105].value, data.uY), g1
					},
					aQs = function() {
						aQt.button.textContent = L(185), t6.e.readOnly = !1, aQr.se(1), aQr.button.style.color = bE.pO
					};
				return aQq(bm.buffer.data[147].value), aQl.sB(new tl([aQr.button])), aQl
			}());
		sF.push(function() {
			var aQl = new rx,
				t6 = (aQl.s0(L(194)), new t7({
					value: data.uY,
					eI: -1
				})),
				aQv = (t6.e.readOnly = !0, aQl.sB(t6), aQl.sB(new tl([new x(L(195), function(e) {
					return bD.sK.a5Y(t6.e), bD.sK.wV(e), !0
				}).button])), aQl.sB(new tw), new t7({
					value: data.uY,
					eI: -1
				}));
			return aQl.sB(aQv), aQl.sB(new tl([new x(L(196), function(e) {
				u.v(8, u.a3T().a3U, new ub(25, {
					action: 0,
					uY: aQv.e.value,
					uZ: 0
				}))
			}).button])), aQl
		}()), data.aQP || (sF.push(function() {
			var aQl = new rx,
				aQy = (aQl.s0(L(197)), new t7(bm.buffer.data[106])),
				customPasswordInput = (aQy.e.readOnly = !0, aQy.e.type = "password", aQl.sB(aQy), aQl.sB(new tl([new x(L(198), function(e) {
					return e.textContent === L(198) ? (e.textContent = L(199), aQy.e.type = "text") : (e.textContent = L(198), aQy.e.type = "password"), !0
				}).button, new x(L(195), function(e) {
					return bD.sK.a5Y(aQy.e), bD.sK.wV(e), !0
				}).button])), new t7({
					value: "",
					eI: -1
				}));
			return customPasswordInput.e.placeholder = "Custom new password (optional)", aQl.sB(customPasswordInput), aQl.sB(new tl([new x(L(200), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.e.value) && u.v(8, u.a3T().a3U, new ub(15))
			}).button])), aQl.s0(L(201), "0.8em"), aQl.s2(L(202)), aQl.s2(L(203)), aQl.s2(L(204)), aQl
		}()), sF.push(function() {
			var aQl = new rx;
			return aQl.s0(L(205)), aQl.sB(new tl([new x(L(206), function() {
				u.v(6, u.a3T().a3U)
			}).button])), aQl.sB(new tl([new x(L(207), function() {
				bm.qo.qp(105, ""), u.v(8, u.a3T().a3U, new ub(18))
			}).button])), aQl.sB(new tl([new x(L(208) + bm.buffer.data[105].value, function() {
				u.v(4, 0, new w(L(209), L(210), !0, [new x("⬅️ " + L(40), function() {
					u.v(7, u.a7I(7).a3U)
				})]))
			}, bE.q3).button])), aQl
		}()), sF.push(function() {
			function aR0(eI) {
				aQz[0].se(0 === eI ? bE.pa : bE.pl), aQz[1].se(0 === eI ? bE.pa : bE.q3)
			}
			var s9, aQz, aQl = new rx;
			aQl.s0(L(214)), aQl.s2(L(215)), bm.z.xn();
			return aQz = [new x(L(216), function() {
				var eI = Math.min(bm.buffer.data[117].value, s9.sA.length - 1);
				eI < 1 || (eI = bm.z.xr(eI), bm.qo.qp(105, eI.uY), bm.qo.qp(106, eI.password), u.v(8, u.a3T().a3U, new ub(18)))
			}, bE.pa, 1), new x(L(213), function() {
				var eI = Math.min(bm.buffer.data[117].value, s9.sA.length - 1);
				if (!(eI < 1)) {
					s9.sA[eI].remove(), s9.sA.splice(eI, 1);
					for (var aC = eI; aC < s9.sA.length; aC++) s9.sA[aC].name = "" + aC;
					bm.z.xq(eI), eI = bm.buffer.data[117].value, s9.sA[eI].textContent = s9.sA[eI].textContent.replace("⚪", "🟢"), aR0(eI)
				}
			}, bE.pa, 1)], s9 = new wY(bm.buffer.data[117], aR0), __fx.savedAccounts.decorate(s9.sA, bm.buffer.data[117].oM), aR0(0), s9.sA[0].style.marginTop = "0.5em", aQl.s8(s9), aQl.sB(new tl([aQz[0].button])), aQl.sB(
				new tl([new x("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(bm.buffer.data[117].value)
				}).button])), aQl.sB(new tl([aQz[1].button])), aQl
		}()));
		return sF.push(function() {
				var aQl = new rx,
					aQn = (aQl.s0(L(220)), [L(221), L(222), L(223), L(224)]),
					eH = data.aR1;
				return aQl.s6(L(225) + (data.a2j / 100).toFixed(2) + "<br>" + L(182) + (eH + 1) + " / " + data.y3 + "<br>" + L(183) + aQn[eH < 10 ? 0 : eH < 50 ? 1 : eH < 200 ? 2 : 3]), aQl
			}()), sF.push(function() {
				var aQl = new rx;
				return aQl.s0(L(217)), aQl.s6(L(218) + bD.tI.a6M(data.y0, .1, 1) + "<br>" + L(182) + (data.y1 + 1) + " / " + data.y3 + "<br>" + L(219) + data.y2), aQl
			}()),
			function(sF) {
				var aQl = new rx,
					aRR = data.y7,
					aRS = (aQl.s0(L(281)), aQl.s6(L(282, [data.y5.length ? "[" + data.y5 + "]" : "-"])), aQl.s6(L(283, [bD.tI.a6M(aRR, .01, 2)])), aQl.s6(L(284, [data.y9 + 1 + " / " + data.y3])), data.yA),
					aRT = (aQl.s6(L(285, [bD.tI.a6M(aRS, .1, 1)])), data.yC);
				aQl.s6(L(286, [aRT])), aQl.s6(L(287, [bD.tI.a6M(aRS / Math.max(aRT, 1), .1, 2)])), aRR = data.y8, aQl.s0(L(288), "0.8em"), aQl.s6(L(282, [data.y6.length ? "[" + data.y6 + "]" : "-"])), aQl.s6(L(283, [bD.tI.a6M(aRR, .01, 2)])),
					aRS = data.yB, aQl.s6(L(285, [bD.tI.a6M(aRS, .1, 1)])), aRT = data.yD, aQl.s6(L(286, [aRT])), aQl.s6(L(287, [bD.tI.a6M(aRS / Math.max(aRT, 1), .1, 2)])), aQl.s6(b1.z.aQm("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					sF.push(aQl)
			}(sF),
			function(sF) {
				var aQl = new rx;
				aQl.s0(L(289)), aQl.s6(L(225) + (data.aRU / 10).toFixed(1) + "<br>" + L(183) + (data.aRV.length ? L(290, [data.aRV]) : L(291))), data.aQP && aQl.sB(new tl([new x(L(235), function(e) {
					return b1.z.ef(0) && (bD.sK.wV(e), b1.aHS.aQx({
						action: 4,
						uY: data.uY
					})), !0
				}, 0, 0, 1).button]));
				aQl.s6(b1.z.aQm("/wiki/clans"), "0.75em").style.marginTop = "0.8em", sF.push(aQl)
			}(sF), sF.push(function() {
				var aQl = new rx;
				{
					var t6, aQt, aR6, s3, aQq, aQs;
					aQl.s0(L(233)), aQl.s6(L(234) + data.aR4 + "<br>" + L(182) + (data.aR5 + 1) + " / " + data.y3 + "<br>" + L(183) + br.eK(data.aR5)), data.aQP && ((t6 = new t7({
						value: bm.buffer.data[157].value,
						eI: -1
					}, 1, void 0, function(e) {
						bm.qo.qp(157, aQq(e.target.value))
					})).e.style.marginTop = "0.6em", aQl.sB(t6), aQt = new x(L(185), function(e) {
						return e.textContent === L(185) ? (e.textContent = L(186), t6.e.readOnly = !0, aR6[0].se(0), aR6[0].button.style.color = bE.qN, aQq(bm.buffer.data[157].value)) : aQs(), !0
					}), aQl.sB(new tl([aQt.button])), aR6 = [new x(L(235), function(e) {
						return t6.e.readOnly && b1.z.ef(0) && (bD.sK.wV(e), aQs(), b1.aHS.aHT({
							action: 1,
							uY: data.uY,
							value: bO.ij(parseInt(bm.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], s3 = aQl.s2(), aQq = function(g1) {
						return g1 = bD.gv.a62(g1, 2, 3e4), s3.textContent = L(236, [g1 - 1, g1, bm.buffer.data[105].value]), g1
					}, aQl.sB(new tl([aR6[0].button])), aQs = function() {
						aQt.button.textContent = L(185), t6.e.readOnly = !1, aR6[0].se(1), aR6[0].button.style.color = bE.pO
					}, aQq(bm.buffer.data[157].value))
				}
				return aQl
			}()),
			function(sF) {
				var aQl, a5X;
				data.aQP && !data.aRW || (0 === a1.id || data.aQP || data.aRW) && ((aQl = new rx).s0("Patreon"), !data.aQP && data.aRX ? aQl.sB(new tl([new x(L(198), function() {
					b1.aHS.aQx({
						action: 7,
						uY: data.uY
					}), data.aRX = 0, u.v(7)
				}).button])) : data.aRW ? (aQl.s6(L(292, [(data.aRY / 100).toFixed(2)]) + "<br>" + L(293, [1 + data.aRZ + " / " + data.aRa]) + "<br>" + L(294, [data.aRb ? L(295) : L(296)])), data.aQP || aQl.sB(new tl([new x(L(297),
					function() {
						b1.aHS.aQx({
							action: 8,
							uY: data.uY
						}), data.aRW = 0, bm.qo.qp(160, 0), u.v(7)
					}).button]))) : (aQl.s6(L(298), "0.75em").style.marginBottom = "0.3em", aQl.s6("  • " + L(299), "0.75em").style.whiteSpace = "pre", aQl.s6("  • " + L(300), "0.75em").style.whiteSpace = "pre", aQl.s6("  • " + L(
						301), "0.75em").style.whiteSpace = "pre", aQl.s6(L(302), "0.75em").style.marginTop = "1.0em", aQl.s6(L(303), "0.75em").style.marginTop = "1.0em", aQl.s6("<a href='" + bN.aRc +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a5X = "https://www.patreon.com/oauth2/authorize?state=" + data.uY +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a2g() + "/", aQl.s6(L(304), "0.75em").style.marginTop = "1.0em", aQl.s6("<a href='" +
						a5X + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aQP || (aQl.sB(new tw), aQl.sB(new tl([new x(L(199), function() {
						b1.aHS.aQx({
							action: 6,
							uY: data.uY
						}), data.aRX = 1, u.v(7)
					}).button])), aQl.s6(L(305), "0.75em").style.marginTop = "0.75em")), sF.push(aQl))
			}(sF), sF.push(function() {
				var aQl = new rx,
					aQn = (aQl.s0(L(226)), [L(227), L(228), L(229), L(230), "Scout", L(231)]),
					eH = data.aR2;
				return aQl.s6(L(232) + (data.aR3 / 100).toFixed(2) + "<br>" + L(182) + (eH + 1) + " / " + data.y3 + "<br>" + L(183) + aQn[eH < 3 ? 0 : eH < 20 ? 1 : eH < 100 ? 2 : eH < 500 ? 3 : eH < 2e3 ? 4 : 5]), aQl.s6(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", aQl
			}()),
			function(sF) {
				var aQl, t6, aQv, aQr, aQt, aQs;
				data.aQP || ((aQl = new rx).s0(L(187)), aQl.s2(L(188)), t6 = new t7({
					value: bm.buffer.data[184].value,
					eI: -1
				}, 1, void 0, function(e) {
					bm.qo.qp(184, e.target.value)
				}), aQl.sB(t6), aQl.s2(L(189)), aQv = new t7({
					value: bm.buffer.data[185].value,
					eI: -1
				}, 0, void 0, function(e) {
					bm.qo.qp(185, e.target.value)
				}), aQl.sB(aQv), aQr = new x(L(190), function(e) {
					return t6.e.readOnly && b1.z.ef(0) && (bD.sK.wV(e), aQs(), b1.aHS.aHT({
						action: 5,
						uY: bm.buffer.data[185].value,
						value: bO.ij(parseInt(bm.buffer.data[184].value, 10), 1, 1e9)
					})), !0
				}, 1), aQt = new x(L(185), function(e) {
					return e.textContent === L(185) ? (e.textContent = L(186), t6.e.readOnly = !0, aQv.e.readOnly = !0, aQr.se(0), aQr.button.style.color = bE.qN, bm.qo.qp(184, t6.e.value)) : aQs(), !0
				}), aQl.sB(new tl([aQt.button])), aQs = function() {
					aQt.button.textContent = L(185), t6.e.readOnly = !1, aQv.e.readOnly = !1, aQr.se(1), aQr.button.style.color = bE.pO
				}, aQl.sB(new tl([aQr.button])), sF.push(aQl))
			}(sF),
			function(sF) {
				var aQl, s9, aQz, eI, aR0;
				data.aQP || bm.xF.get().length && ((aQl = new rx).s0(L(211)), eI = 0, aR0 = function() {
					var aEA = bm.xF.get().length;
					aQz[0].se(eI === aEA ? bE.pa : bE.pl), aQz[1].se(eI === aEA ? bE.pa : bE.q3)
				}, aQz = [new x(L(212), function() {
					u.v(8, void 0, new ub(25, {
						action: 0,
						uY: bm.xF.get()[eI],
						uZ: 0
					}))
				}, bE.pa, 1), new x(L(213), function() {
					bm.xF.xU(eI), s9.sA[eI].remove(), s9.sA.splice(eI, 1);
					for (var aC = eI; aC < s9.sA.length; aC++) s9.sA[aC].name = "" + aC;
					bm.xF.get().length && (eI = Math.max(eI - 1, 0), s9.sA[eI].textContent = s9.sA[eI].textContent.replace("⚪", "🟢")), aR0()
				}, bE.pa, 1)], aR0(), s9 = new wY(bm.xF.xR(), function(aC) {
					eI = aC, aR0()
				}), __fx.followedAccounts.decorate(s9.sA, bm.xF.get()), s9.sA[0].style.marginTop = "0.5em", aQl.s8(s9), aQl.sB(new tl([aQz[0].button])), aQl.sB(new tl([new x("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(eI)
				}).button])), aQl.sB(new tl([aQz[1].button])), sF.push(aQl))
			}(sF), aQR(sF, 0), sF
	}())
}

function aQA() {
	var aRe, aRf, aRg, sF;

	function aRh() {
		aRj(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aQM()[19] = null, u.a3O()
	}

	function aRj() {
		2 === aE.data.aIncomeType ? (bD.sS.a4v(aRg.x7(), aE.data.aIncomeData, 255), bD.sS.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aRe.show(), this.resize()
	}, this.tZ = function() {
		aRe.tZ()
	}, this.resize = function() {
		aRe.resize(), aRf.resize()
	}, this.a4K = function(ej) {
		2 === ej && aRe.wj[0].sb()
	}, aRe = new wc(L(306), [new x("⬅️ " + L(40), aRh)]), aRf = new sD(aRe.wi, (function(sF) {
		var aQl = new rx;
		aQl.s0(L(307)), aQl.s8(new wY({
			oM: [L(308), L(309), L(310)],
			value: aE.data.aIncomeType
		}, function(eI) {
			aRj(), 2 !== eI || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fW)), aE.data.aIncomeType = eI, u.v(22)
		})), sF.push(aQl)
	}(sF = []), function(sF) {
		var aQl;
		1 === aE.data.aIncomeType && ((aQl = new rx).s0("Value"), aQl.sB(new t7({
			eI: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ij(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), sF.push(aQl))
	}(sF), function(sF) {
		var aQl;
		2 === aE.data.aIncomeType && ((aQl = new rx).s0("Data"), (aRg = new x0(0, 1, 0, 1)).x6(bD.tI.a6S(aE.data.aIncomeData, 4)), aQl.sB(aRg), sF.push(aQl))
	}(sF), sF))
}

function aQD() {
	var aRe, aRf, aRg;

	function aRh() {
		aRj(), 3 !== aE.data.botDifficultyType || bD.sS.a4j(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aQM()[19] = null, u.a3O()
	}

	function aRj() {
		3 === aE.data.botDifficultyType && bD.sS.a4v(aRg.x7(), aE.data.botDifficultyData, aF.l5.length - 1)
	}

	function aRo(sF, eI) {
		var aQl = new rx,
			value = (aQl.s0(eI < 0 ? L(65) : L(64) + " " + bj.a2c[eI % 9]), 0 <= eI && (aQl.s6(L(313) + ": " + aE.data.teamPlayerCount[eI]).style.marginBottom = "1em"), eI < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eI]);
		aQl.s8(new wY({
			oM: aF.l5,
			value: value
		}, function(iR) {
			eI < 0 ? aE.data.botDifficultyValue = iR : aE.data.botDifficultyTeam[eI] = iR
		})), sF.push(aQl)
	}
	this.show = function() {
		aRe.show(), this.resize()
	}, this.tZ = function() {
		aRe.tZ()
	}, this.resize = function() {
		aRe.resize(), aRf.resize()
	}, this.a4K = function(ej) {
		2 === ej && aRe.wj[0].sb()
	}, aRe = new wc(L(65), [new x("⬅️ " + L(40), aRh)]), aRf = new sD(aRe.wi, function() {
		var sF = [];
		if (function(sF) {
				var aQl = new rx,
					oM = (aQl.s0(L(307)), [L(309), L(311), L(312), L(310)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), oM.splice(2, 1));
				aQl.s8(new wY({
					oM: oM,
					value: value
				}, function(eI) {
					aRj(), aE.data.botDifficultyType = eI, 0 === aE.data.gameMode && 2 === eI && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fW)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), sF.push(aQl)
			}(sF), 0 === aE.data.botDifficultyType) aRo(sF, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aRo(sF, aC);
		else 3 === aE.data.botDifficultyType && ! function(sF) {
			var aQl = new rx;
			aQl.s0("Data"), (aRg = new x0(0, 1, 0, 1)).x6(bD.tI.a6S(aE.data.botDifficultyData, 8)), aQl.sB(aRg), sF.push(aQl)
		}(sF);
		return sF
	}())
}

function aRp(data) {
	var aQN, aRq, aRr, aRs, aRt, aRu, aRv, colors, aRw, aRx, aRy = 0,
		aRz = 0,
		aS0 = !1,
		aS1 = !1,
		aS2 = [1, 5, 60, 240, 1440, 10080, 43200];

	function aSW(m9, mA) {
		! function(m9, mA) {
			return aRq < m9 && m9 < aRq + aRs && aRr < mA && mA < aRr + aRt
		}(aRy = m9, aRz = mA) ? (aS0 && (bi.ds = !0), aS0 = !1) : (aS0 = !0, bi.ds = !0)
	}
	this.show = function() {
		aS1 = bm.buffer.data[127].value, aQN.show(), this.resize()
	}, this.tZ = function() {
		aQN.tZ()
	}, this.resize = function() {
		aQN.resize();
		var ej = i.l,
			wq = aQN.wn(),
			aSB = ej * wq.wp,
			ej = ej * wq.tc;
		aRu = bD.sK.ux(.06), aRv = bD.sK.ux(.04), aRq = bD.sK.ux(.06), aRr = ej + aRu, aRs = i.j - aRq - aRv, aRt = aSB + ej - aRr - aRv
	}, this.wr = function() {
		aQN.wr(),
			function() {
				var aC, aS8, h2, fg, fs, h = data.data,
					aSF = 1,
					aSG = .125,
					aSH = aS1 ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aS8 = h[aC].aS8, h2 = aS8.length, aSF = Math.max(h2, aSF), fs = 0; fs < h2; fs++) aSG = Math.max(aS8[fs], aSG), aSH = Math.min(aS8[fs], aSH);
				var nw = aRr + aRt,
					a0C = aRt / (aSG - aSH),
					a0B = 1 / (aSF - 1);
				for (ws.lineWidth = bf.a1E, aC = 0; aC < h.length; aC++) {
					for (aS8 = h[aC].aS8, h2 = aS8.length, fg = aRq, ws.beginPath(), ws.moveTo(fg + aRs, nw - a0C * (aS8[h2 - 1] - aSH)), fs = h2 - 2; 0 <= fs; fs--) ws.lineTo(fg + a0B * fs * aRs, nw - a0C * (aS8[fs] - aSH));
					ws.strokeStyle = colors[aC], ws.stroke()
				}(function(aSH, aSG, nw, a0C) {
					ws.font = bD.sK.u8(0, .25 * aRq), bD.sK.textBaseline(ws, 1), bD.sK.textAlign(ws, 2), ws.fillStyle = colors[0];
					for (var fg = .92 * aRq, aC = 0; aC < 3; aC++) {
						var g1 = aSH + aC * (aSG - aSH) / 2;
						ws.fillText((g1 / 1e3).toFixed(3), fg, nw - a0C * (g1 - aSH))
					}
				})(aSH, aSG, nw, a0C),
				function(aSF) {
					var fi = aRr + aRt + .15 * aRv;
					ws.font = bD.sK.u8(0, Math.min(.4 * aRv, .028 * i.j)), bD.sK.textBaseline(ws, 0), bD.sK.textAlign(ws, 2), ws.fillStyle = colors[0], ws.fillText(bD.a4a.a5P(aRw), aRq + aRs, fi), bD.sK.textAlign(ws, 0), ws.fillText(bD.a4a.a5P(
						new Date(aRx.getTime() - 6e4 * (aSF - 1) * aS2[data.aS7])), aRq, fi)
				}(aSF),
				function(aSF, aSH, aSG) {
					if (aS0 && !(aSF < 2)) {
						for (var aAn, eI = (aRy - aRq) / aRs * (aSF - 1), aSK = Math.floor(eI), aSL = Math.floor(1 + eI), aSM = eI - aSK, aSN = 1e5, aSO = -1, aSP = -1, aSQ = aSG - (aSG - aSH) * (aRz - aRr) / aRt, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aEg, aS8 = h[aC].aS8;
							aS8.length <= aSL || (aS8 = aS8[aSK] + aSM * (aS8[aSL] - aS8[aSK]), (aEg = Math.abs(aSQ - aS8)) < aSN && (aSN = aEg, aSO = aC, aSP = aS8))
						} - 1 !== aSO && (aSG = aRr + aRt - (aSP - aSH) / (aSG - aSH) * aRt, ws.lineWidth = .5 * bf.a1E, ws.strokeStyle = colors[aSO], ws.beginPath(), ws.moveTo(aRq, aSG), ws.lineTo(aRy, aSG), ws.lineTo(aRy, aRr + aRt), ws
							.stroke(), ws.beginPath(), ws.arc(aRy, aSG, .1 * aRq, 0, 2 * Math.PI), ws.fillStyle = colors[aSO], ws.fill(), aSH = aRr + aRt + .15 * aRv, bD.sK.textAlign(ws, 1), aAn = aSF - 2 < eI ? (aAn = aRx.getTime() - 6e4 *
								aS2[data.aS7], new Date(aAn + (eI - (aSF - 2)) * (aRw.getTime() - aAn))) : new Date(aRx.getTime() - 6e4 * (aSF - eI - 1) * aS2[data.aS7]), aSF = bD.a4a.a5P(aAn), eI = bD.sK.measureText(aSF), aAn = bO.ij(aRy,
								aRq + .5 * eI, aRq + aRs - .5 * eI), ws.fillStyle = bD.color.pG(70, 50, 20), ws.fillRect(aAn - .52 * eI, aRr + aRt, 1.04 * eI, .55 * aRv), ws.fillStyle = colors[0], ws.fillText(aSF, aAn, aSH), ws.font = bD.sK
							.u8(0, .25 * aRq), bD.sK.textBaseline(ws, 1), bD.sK.textAlign(ws, 2), aAn = .92 * aRq, aSF = (aSP / 1e3).toFixed(3), eI = bD.sK.measureText(aSF), aSH = aAn - 1.04 * eI, ws.fillStyle = bD.color.pG(70, 50, 20), ws
							.fillRect(aSH, aSG - .1625 * aRq, aRq - aSH, .275 * aRq), ws.fillStyle = colors[aSO], ws.fillText(aSF, aAn, aSG))
					}
				}(aSF, aSH, aSG)
			}(), ws.lineWidth = bf.a1E, ws.strokeStyle = bE.pO, ws.beginPath(), ws.moveTo(aRq, aRr), ws.lineTo(aRq, aRr + aRt), ws.lineTo(aRq + aRs, aRr + aRt), ws.stroke();
		var aC, fontSize = .5 * aRu,
			h = (ws.font = bD.sK.u8(0, fontSize), bD.sK.textBaseline(ws, 1), bD.sK.textAlign(ws, 0), data.data),
			fZ = h.length,
			fi = aRr - .5 * aRu,
			s1 = "";
		for (aC = 0; aC < fZ; aC++) s1 += h[aC].name + "  ";
		s1 = s1.trim();
		var aST = bD.sK.measureText(s1),
			fg = .5 * (i.j - aST);
		for (aST > i.j && (fg = 0, ws.font = bD.sK.u8(0, i.j / aST * fontSize)), aC = 0; aC < fZ; aC++) ws.fillStyle = colors[aC], ws.fillText(h[aC].name, fg, fi), fg += bD.sK.measureText(h[aC].name + "  ")
	}, this.hm = function(m9, mA) {
		aSW(m9, mA)
	}, this.a3m = function(m9, mA) {
		aSW(m9, mA)
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	};
	var aC, ea, a5N, iR, fc = data.data,
		fZ = fc.length,
		max = 1;
	for (aC = 0; aC < fZ; aC++) max = Math.max(max, fc[aC].aS8.length);
	for (aC = 0; aC < fZ; aC++)
		for (; fc[aC].aS8.length < max;) fc[aC].aS8.unshift(0);
	ea = new Date, a5N = 6e4 * ea.getTimezoneOffset(), iR = ea.getTime() - a5N, aRw = new Date(iR), 6 === data.aS7 ? function(ea, a5N) {
		var aSA = ea.getUTCFullYear(),
			ea = ea.getUTCMonth() + 1;
		aRx = ea < 12 ? new Date(Date.UTC(aSA, ea) - a5N) : new Date(Date.UTC(aSA + 1, 0) - a5N)
	}(ea, a5N) : (a5N = 6e4 * aS2[data.aS7], aRx = data.aS7 <= 4 ? new Date(iR + a5N - ea.getTime() % a5N) : new Date(iR + a5N - (ea.getTime() + 2592e5) % a5N)), iR = bD.color, colors = [bE.pO, iR.pG(255, 0, 0), iR.pG(0, 200, 0), iR.pG(80, 80,
		255), iR.pG(255, 255, 0), iR.pG(255, 0, 255), iR.pG(0, 255, 255), iR.pG(255, 140, 0), iR.pG(128, 128, 128), iR.pG(0, 255, 140)], aQN = new wc(L(314) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aS7] + ", " + bD.a4a.a5M(aRw), [
		new x("⬅️ " + L(40), function() {
			u.v(1)
		}), new x(L(315), function() {
			u.v(14)
		})
	], !1)
}

function aQ2() {
	var aQN, aQO, sF, aSX = -1;
	this.show = function() {
		aQN.show(), this.resize(), aSX = bm.buffer.data[125].value
	}, this.tZ = function() {
		aQN.tZ()
	}, this.resize = function() {
		aQN.resize(), aQO.resize()
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	}, aQN = new wc(L(316), [new x("⬅️ " + L(40), function() {
		aSX !== bm.buffer.data[125].value ? u.z.aSY() : u.aQL(13)
	})]), aQO = new sD(aQN.wi, ((sF = []).push(function() {
		var aQl = new rx,
			aQt = (aQl.s0(L(317)), aQl.s2(L(318)), new x(L(319), function() {
				bm.qo.qp(130, 0), u.z.aSY()
			}, 0, 0, 1)),
			t6 = new t7(bm.buffer.data[126], 0, function() {
				aQt.button.click()
			});
		return aQl.sB(t6), t6.e.placeholder = "a,b,c", t6.e.style.marginTop = "0.5em", aQl.sB(new tl([aQt.button])), aQl
	}()), sF.push(function() {
		var aQl = new rx,
			aQt = new x(L(319), function() {
				bm.qo.qp(130, 1), u.z.aSY()
			}, 0, 0, 1),
			aSd = new t7(bm.buffer.data[129], 1, function() {
				aSd.e.focus()
			}),
			aSe = new t7(bm.buffer.data[128], 1, function() {
				aQt.button.click()
			});
		return aQl.s0(L(320)), aQl.sB(aSe), aSe.e.style.marginBottom = "0.5em", aQl.s0(L(321)), aQl.sB(aSd), aQl.sB(new tl([aQt.button])), aQl
	}()), sF.push(function() {
		var aQl = new rx;
		return aQl.s0(L(322)), bm.buffer.data[125].oM = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aQl.s8(new wY(bm.buffer.data[125])), aQl
	}()), sF.push(function() {
		var aQl = new rx;
		return aQl.s0(L(323)), aQl.sB(new th(bm.buffer.data[127], L(324))), aQl
	}()), sF))
}

function aQ1() {
	var aQN, aSf, aRs, aSg, aSh, aSi, colors = [0, 0, 0],
		aSj = -1;

	function aSm(aC) {
		var aSn = aSf.fi + aC * (bf.gap + aSi);
		ws.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", ws.fillRect(aSg, aSn, colors[aC] * aSh, aSi), ws.strokeStyle = bE.pO, ws.strokeRect(aSg, aSn, aSh,
			aSi), ws.fillStyle = bE.pO, ws.font = bD.sK.u8(0, .32 * aSi), bD.sK.textBaseline(ws, 1), bD.sK.textAlign(ws, 0), ws.fillText(L(0 === aC ? 327 : 1 === aC ? 328 : 329) + aSk(aC), aSg + bf.gap, aSn + .53 * aSi)
	}

	function aSk(aC, aSo) {
		return aSo = aSo || 256, bO.ij(Math.floor(aSo * colors[aC]), 0, aSo - 1)
	}

	function a4G(m9, mA) {
		return !(m9 < aSg || mA < aSf.fi || m9 > aSf.fg + aSf.j || mA > aSf.fi + aSf.k)
	}
	this.show = function() {
		var g1 = bm.buffer.data[121].value;
		colors[0] = (g1 >> 12) / 63, colors[1] = (g1 >> 6 & 63) / 63, colors[2] = (63 & g1) / 63, aQN.show(), this.resize()
	}, this.tZ = function() {
		bm.qo.qp(121, (aSk(0, 64) << 12) + (aSk(1, 64) << 6) + aSk(2, 64)), aQN.tZ()
	}, this.resize = function() {
		aQN.resize(), aSf.resize();
		var ej = i.l,
			wq = aQN.wn(),
			aSl = (aSf.fi = Math.max(aSf.fi, ej * wq.tc + bf.gap), ej * wq.wp - 2 * bf.gap);
		aSf.k = Math.min(aSf.k, aSl), aSf.j = 2 * aSf.k, aSf.fi = ej * wq.tc + .5 * (ej * wq.wp - aSf.k), aSf.fg = .5 * (i.j - aSf.j), aRs = .25 * aSf.j, aSg = aSf.fg + aRs + bf.gap, aSh = aSf.j - aRs - bf.gap, aSi = (aSf.k - 2 * bf.gap) / 3
	}, this.wr = function() {
		var eH, uw, ft;
		aQN.wr(), ws.lineWidth = bf.a1E, eH = aSk(0), uw = aSk(1), ft = aSk(2), ws.fillStyle = "rgb(" + eH + "," + uw + "," + ft + ")", ws.fillRect(aSf.fg, aSf.fi, aRs, aSf.k), ws.strokeStyle = bE.pO, ws.strokeRect(aSf.fg, aSf.fi, aRs, aSf.k), ws
			.fillStyle = eH + uw + ft < 306 && uw < 150 ? bE.pO : bE.pF, bD.sK.textBaseline(ws, 1), bD.sK.textAlign(ws, 1), ws.font = bD.sK.u8(0, .1 * aSf.k), ws.rotate(-Math.PI / 2), ws.fillText(L(326), -aSf.fi - .5 * aSf.k, aSf.fg + .5 * aRs),
			ws.setTransform(1, 0, 0, 1, 0, 0), aSm(0), aSm(1), aSm(2)
	}, this.hm = function(m9, mA) {
		a4G(m9, mA) && (aSj = bO.ij(Math.floor((mA - aSf.fi) / (aSi + .75 * bf.gap)), 0, 2), colors[aSj] = bO.ij((m9 - aSg) / aSh, 0, 1), bi.ds = !0)
	}, this.a3m = function(m9) {
		-1 !== aSj && (colors[aSj] = bO.ij((m9 - aSg) / aSh, 0, 1), bi.ds = !0)
	}, this.a3p = function(m9, mA, deltaY) {
		a4G(m9, mA) && (m9 = bO.ij(Math.floor((mA - aSf.fi) / (aSi + .75 * bf.gap)), 0, 2), colors[m9] = bO.ij(colors[m9] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.ds = !0)
	}, this.a4A = function() {
		0 <= aSj && (aSj = -1, bi.ds = !0)
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	}, aQN = new wc(L(325), [new x("⬅️ " + L(40), function() {
		u.z.aEb()
	})], !1), aSf = new su([.5, .25], [.5, .5], 1)
}

function aQ9() {
	var aRe, aRf, aRg, oy;

	function aRh() {
		aRj(), u.aQM()[19] = null, u.a3O()
	}

	function aSp() {
		aRj(), u.v(21)
	}

	function aRj() {
		1 === aE.data.gameMode ? aE.a6j.a6o() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.sS.a4v(aRg.x7(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aRe.show(), this.resize()
	}, this.tZ = function() {
		aRe.tZ()
	}, this.resize = function() {
		aRe.resize(), aRf.resize()
	}, this.a4K = function(ej) {
		2 === ej && aRe.wj[0].sb()
	}, oy = [new x("⬅️ " + L(40), aRh)], 1 === aE.data.gameMode && oy.push(new x(L(330), aSp, 1, 1)), aRe = new wc(L(331), oy), aRf = new sD(aRe.wi, (oy = [], 0 === aE.data.gameMode ? (function(sF) {
		var aQl = new rx;
		aQl.s0(L(307)), aQl.s8(new wY({
			oM: [L(332), L(310)],
			value: aE.data.colorsType
		}, function(eI) {
			aRj(), aE.data.colorsType = eI, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fW || (aE.data.colorsData = new Uint32Array(aE.fW)), u.v(21)
		})), sF.push(aQl)
	}(oy), 1 === aE.data.colorsType && function(sF) {
		var aQl = new rx;
		aQl.s0("Data"), (aRg = new x0(0, 1, 0, 1)).x6(bD.tI.a6S(aE.data.colorsData, 1)), aQl.sB(aRg), sF.push(aQl)
	}(oy)) : (aE.a6j.a6o(), oy.push(function() {
		var aQl = new rx;
		aQl.s0(L(313));
		for (var aC = 0; aC < bj.a2c.length; aC++) {
			var iR = (aC + 1) % bj.a2c.length,
				e = aQl.s6((0 == iR ? "" : "Team ") + bj.a2c[iR]);
			aC && (e.style.marginTop = "0.5em"), aQl.sB(new t7({
				eI: -1,
				value: aE.data.teamPlayerCount[iR]
			}, 1, 0, function(e) {
				aRe.wj[1].se(0);
				var playerCount = bO.ij(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aSs] = playerCount
			})).e.aSs = iR
		}
		return aQl
	}()), function(sF) {
		for (var aQl = new rx, oM = (aQl.s0(L(333)), []), aC = 0; aC < bj.a2c.length; aC++) {
			var iR = (aC + 1) % bj.a2c.length;
			oM.push(bj.a2c[iR])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		aQl.s8(new wY({
			oM: oM,
			value: (aE.data.colorsData[0] % 16 + bj.a2c.length - 1) % bj.a2c.length
		}, function(eI) {
			var eI = (eI + 1) % bj.a2c.length,
				aSt = bj.aSu[eI],
				aSt = (aSt[0] >> 2 << 12) + (aSt[1] >> 2 << 6) + (aSt[2] >> 2);
			aE.data.colorsData[0] = aSt - (15 & aSt) + eI
		})), sF.push(aQl)
	}(oy)), oy))
}

function ub(id, a65, aSv) {
	var aQN, aSw;

	function aT1() {
		aSw.sG.innerHTML += "<br>" + L(336)
	}

	function aTA() {
		var ft = 1;
		u.v(4, 1, new w(L(337), L(338), !1, [new x("🔄 Reload", function() {
			ft && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), ft = 0
		}, bE.pl)]))
	}

	function aT0() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.dk(bG.aD), bm.qo.qp(110, __fx.passwordReset.getCustomPassword() || bI.f0
			.uc(bI.f0.ud(15))), b1.aHS.aTC()
	}
	this.aSx = !0, this.aSy = id, this.show = function() {
		aQN.show(), this.resize(), 15 === id ? (b1.z.aSz(id) ? aT0 : aT1)() : 16 === id ? b1.z.aSz(id) ? b1.eg.eh(2) : aT1() : 17 === id ? b1.z.aSz(id) ? b1.eg.eh(3) : aT1() : 18 === id ? (b1.z.close(0, 3253), b1.z.aIR(0, id, 0), aT1()) : 21 ===
			id ? b1.z.aSz(id) ? b1.aT2.aT3(a65.ur, a65.us, a65.ut) : aT1() : 22 === id ? b1.z.aSz(id) ? b1.aT2.aT4(a65.ur, a65.aT5, a65.aT6) : aT1() : 23 === id ? b1.z.aSz(id) ? b1.aT2.aT7(a65.aS7, a65.a2x) : aT1() : 24 === id ? b1.z.aSz(id) ? b1
			.aT2.aT8(a65.aS7, a65.us, a65.ut) : aT1() : 25 === id ? b1.z.aSz(id) ? b1.aHS.aQx(a65) : aT1() : 28 === id ? b1.z.aSz(id) ? b1.aT2.aT9(a65.ur, a65.aT5, a65.aT6) : aT1() : 29 === id ? b1.z.aSz(id) ? b1.aHS.aRK(a65) : aT1() : 30 ===
			id && (b1.z.aSz(id) ? bA.aEW() || aTA() : aT1())
	}, this.aTB = function() {
		15 === id ? aT0() : 16 === id ? b1.eg.eh(2) : 17 === id ? b1.eg.eh(3) : 18 === id ? u.v(8, this.a3U, new ub(16)) : 21 === id ? b1.aT2.aT3(a65.ur, a65.us, a65.ut) : 22 === id ? b1.aT2.aT4(a65.ur, a65.aT5, a65.aT6) : 23 === id ? b1.aT2.aT7(
			a65.aS7, a65.a2x) : 24 === id ? b1.aT2.aT8(a65.aS7, a65.us, a65.ut) : 25 === id ? b1.aHS.aQx(a65) : 28 === id ? b1.aT2.aT9(a65.ur, a65.aT5, a65.aT6) : 29 === id ? b1.aHS.aRK(a65) : 30 === id ? bA.aEW() || aTA() : 1e3 === id && (
			this.aSy = id = 25, b1.aHS.aQx(a65))
	}, this.aEa = function(code, by, data) {
		!by && code !== id || (15 === code || 16 === code ? u.v(7, this.a3U) : 17 === code ? (b1.z.close(0, 3252), bm.z.xq(0), bm.buffer.data[117].oM && 0 < bm.buffer.data[117].oM.length ? (by = bm.z.xr(0), bm.qo.qp(105, by.uY), bm.qo.qp(106, by
			.password), u.v(8, this.a3U, new ub(16))) : (bm.qo.qp(105, ""), u.z.aEb())) : 21 === code ? u.v(10, this.a3U, new aD4(data)) : 23 === code ? u.v(13, this.a3U, new aRp({
			data: data,
			aS7: a65.aS7
		})) : 25 === code ? (u.z.aQ3.uY = a65.uY, bm.xF.nH(a65.uY), u.v(15, this.a3U)) : 30 === code && (data ? u.v(1) : aTA()))
	}, this.tZ = function() {
		aQN.tZ()
	}, this.resize = function() {
		aQN.resize(), aSw.resize()
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	}, aQN = new wc(L(334), [new x("⬅️ " + L(40), function() {
		aSv ? u.v(29) : u.z.aEb()
	})]), aSw = new tk(aQN.wi, L(335))
}

function aQ7() {
	var aRe, aRf, sF;

	function aTF() {
		var h2;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a6j.a6o()), h2 = bD.sS.a4p(aE.data.teamPlayerCount, 0), aE.data.numberTeams = h2) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aRh() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aTH(), aE.data.canvas = null, u.v(5, 5)
	}

	function aTH() {
		bC.re.dk(), bm.qo.qp(156, bC.a6z.a1i())
	}

	function aTD() {
		aE.data.isReplay = 0, aTH(), aE.a6j.a7B(), ab.aIc(), aE.a6j.a78(), aE.data.canvas = 2 === aE.data.mapType ? bV.yn : null, aE.a6n(), aE.a6l = 1
	}

	function aTT() {
		aTF();
		for (var h = [aTK(), aTL(), aTM()], aC = 3; aC < 6; aC++) u.removeChild(aRf.sG, aRf.sH[aC].rz), aRf.sH[aC] = h[aC - 3], aRf.sG.appendChild(aRf.sH[aC].rz);
		aRf.resize()
	}

	function aTK() {
		var aTU, aQl = new rx;
		return aQl.s0(L(331)), aTU = 0 === aE.data.gameMode ? [L(332), L(310)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), aQl.s6(aTU), aQl.sB(new tl([new x(L(342), function() {
			u.v(21)
		}).button])), aQl
	}

	function aTL() {
		var aQl = new rx,
			h = (aQl.s0(L(65)), [L(309) + ": " + aF.l5[aE.data.botDifficultyValue], L(311), L(312), L(310)]);
		return aQl.s6(h[aE.data.botDifficultyType]), aQl.sB(new tl([new x(L(342), function() {
			u.v(25)
		}).button])), aQl
	}

	function aTM() {
		var aQl = new rx,
			h = (aQl.s0("Spawning"), [L(332), L(344), L(310)]);
		return aQl.s6(h[aE.data.spawningType]), aQl.sB(new tl([new x(L(342), function() {
			u.v(24)
		}).button])), aQl
	}
	this.show = function() {
		aRe.show(), this.resize(), aRe.wi.scrollTop = u.z.uS[0]
	}, this.tZ = function() {
		u.z.uS[0] = aRe.wi.scrollTop, aRe.tZ()
	}, this.resize = function() {
		aRe.resize(), aRf.resize()
	}, this.a4K = function(ej) {
		2 === ej && aRe.wj[0].sb()
	}, aRe = new wc("🔧 " + L(339), [new x("⬅️ " + L(40), aRh), new x(L(340), aTD)]), aTF(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.yn : 1 === aE.data.mapType ? aE.data.canvas = bV.aNn(bV.a79(aE.data), 0).yn : (aE.data
		.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aNn(bV.a79(aE.data), aE.data.mapSeed).yn)), aRf = new sD(aRe.wi, (function(sF) {
		var aQl = new rx,
			a55 = (aQl.s0(L(341)), aE.data.canvas);
		a55.style.width = "100%", aQl.sB({
			e: a55
		}), aQl.sB(new tl([new x(L(342), function() {
			u.v(20)
		}).button])), sF.push(aQl)
	}(sF = []), function(sF) {
		var aQl = new rx;
		aQl.s0(L(313)), aQl.sB(new t7({
			eI: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.ij(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.sS.a4p(aE.data.teamPlayerCount, 0), aE.a6j.a6o(), bD.sS.a4p(aE.data.teamPlayerCount, 0) !== e) && aTT()
		})), sF.push(aQl)
	}(sF), function(sF) {
		var aQl = new rx;
		aQl.s0(L(343)), aQl.s8(new wY({
			oM: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eI) {
			aE.data.gameMode !== eI && (1 === (aE.data.gameMode = eI) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aTT())
		})), sF.push(aQl)
	}(sF), sF.push(aTK()), sF.push(aTL()), sF.push(aTM()), function(sF) {
		var aQl = new rx,
			h = (aQl.s0(L(345)), [L(346), L(347), L(310)]);
		aQl.s6(h[aE.data.playerNamesType]), aQl.sB(new tl([new x(L(342), function() {
			u.v(23)
		}).button])), sF.push(aQl)
	}(sF), function(sF) {
		var aQl = new rx,
			h = (aQl.s0(L(306)), [L(308), L(309) + ": " + aE.data.aIncomeValue, L(310)]);
		aQl.s6(h[aE.data.aIncomeType]), aQl.sB(new tl([new x(L(342), function() {
			u.v(22)
		}).button])), sF.push(aQl)
	}(sF), function(sF) {
		var aQl = new rx,
			h = (aQl.s0(L(348)), [L(308), L(309) + ": " + aE.data.tIncomeValue, L(310)]);
		aQl.s6(h[aE.data.tIncomeType]), aQl.sB(new tl([new x(L(342), function() {
			u.v(26)
		}).button])), sF.push(aQl)
	}(sF), function(sF) {
		var aQl = new rx,
			h = (aQl.s0(L(349)), [L(308), L(309) + ": " + aE.data.iIncomeValue, L(310)]);
		aQl.s6(h[aE.data.iIncomeType]), aQl.sB(new tl([new x(L(342), function() {
			u.v(27)
		}).button])), sF.push(aQl)
	}(sF), function(sF) {
		var aQl = new rx,
			h = (aQl.s0(L(350)), [L(308), L(309) + ": " + aE.data.sResourcesValue, L(310)]);
		aQl.s6(h[aE.data.sResourcesType]), aQl.sB(new tl([new x(L(342), function() {
			u.v(28)
		}).button])), sF.push(aQl)
	}(sF), function(sF) {
		var aQl = new rx;
		aQl.s0(L(351)), aQl.sB(new tl([new x(L(352), function() {
			u.y(), aE.a6j.a7C(), u.z.uS[0] = 0, u.v(19)
		}).button])), aQl.sB(new tl([new x(L(353), function() {
			bp.aL1()
		}).button])), aQl.sB(new tl([new x(L(354), function() {
			return bp.aL3(), !0
		}).button])), sF.push(aQl)
	}(sF), sF))
}

function aQI() {
	var aRe, tC = !0;

	function tS(tR, a7G) {
		var rz = document.createElement("div"),
			aTW = document.createElement("span"),
			aTX = document.createElement("span");
		aTW.textContent = aX.aDQ(a7G.eZ) + ":", aTW.style.color = bE.pd, aTW.style.paddingRight = "0.4em", aTW.style.display = "table-cell", aTW.style.width = "6ch", aTW.style.textAlign = "end", rz.appendChild(aTW), aTX.textContent = a7G.s1, rz
			.appendChild(aTX), rz.style.display = "table", a7G.r3 && function(rz, r3) {
				{
					var aKO;
					r3 >= 1024 - ak.tY.a11 ? ((aKO = document.createElement("img")).src = ak.yq.a0p[r3 - 1024 + ak.tY.a11].toDataURL(), aKO.style.width = "1.5em", aKO.style.height = "1.5em", aKO.style.verticalAlign = "middle", rz.appendChild(aKO)) :
						((aKO = document.createElement("span")).textContent = ak.tY.a1G(r3), aKO.style.display = "inline-block", aKO.style.fontSize = "1.5em", aKO.style.lineHeight = "1em", aKO.style.verticalAlign = "middle", rz.appendChild(aKO))
				}
			}(rz, a7G.r3), tR.appendChild(rz)
	}

	function tV() {
		tC && (aRe.wi.scrollTop = aRe.wi.scrollHeight)
	}
	this.clear = function() {
		aRe.wi.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a89 = bt.a7J(), fZ = a89.length, tR = document.createDocumentFragment(), aC = 0; aC < fZ; aC++) tS(tR, a89[aC]);
		aRe.wi.appendChild(tR), tV(), aRe.show(), this.resize(), tC = !0, tV()
	}, this.tZ = function() {
		aRe.tZ()
	}, this.resize = function() {
		aRe.resize(), aRe.wi.style.padding = "0.4em " + bD.sK.sT(bf.sQ)
	}, this.a4K = function(ej) {
		2 === ej && aRe.wj[0].sb()
	}, this.a0i = function(a7G) {
		var tR = document.createDocumentFragment();
		tS(tR, a7G), aRe.wi.appendChild(tR), tV()
	}, (aRe = new wc(L(355), [new x("⬅️ " + L(40), function() {
		u.aQL(1)
	})])).wi.style.overflowY = "auto", aRe.wi.addEventListener("scroll", function() {
		tC = aRe.wi.scrollTop >= aRe.wi.scrollHeight - aRe.wi.clientHeight - 2
	})
}

function aQF() {
	var aRe, aRf, aRg, sF;

	function aRh() {
		aRj(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aQM()[19] = null, u.a3O()
	}

	function aRj() {
		2 === aE.data.iIncomeType && bD.sS.a4v(aRg.x7(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aRe.show(), this.resize()
	}, this.tZ = function() {
		aRe.tZ()
	}, this.resize = function() {
		aRe.resize(), aRf.resize()
	}, this.a4K = function(ej) {
		2 === ej && aRe.wj[0].sb()
	}, aRe = new wc(L(349), [new x("⬅️ " + L(40), aRh)]), aRf = new sD(aRe.wi, (function(sF) {
		var aQl = new rx;
		aQl.s0(L(307)), aQl.s8(new wY({
			oM: [L(308), L(309), L(310)],
			value: aE.data.iIncomeType
		}, function(eI) {
			aRj(), 2 !== eI || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fW), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eI, u.v(27)
		})), sF.push(aQl)
	}(sF = []), function(sF) {
		var aQl;
		1 === aE.data.iIncomeType && ((aQl = new rx).s0("Value"), aQl.sB(new t7({
			eI: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ij(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), sF.push(aQl))
	}(sF), function(sF) {
		var aQl;
		2 === aE.data.iIncomeType && ((aQl = new rx).s0("Data"), (aRg = new x0(0, 1, 0, 1)).x6(bD.tI.a6S(aE.data.iIncomeData, 4)), aQl.sB(aRg), sF.push(aQl))
	}(sF), sF))
}

function aPx() {
	var aTZ, aTa, aSf, t6, aTb, u3 = 0;
	this.aJ9 = new uh, aSf = new su([.45, .27], [.5, .5], 2 / 3), aTa = [new x("⚔️<br>" + L(356), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aTc(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.pr), new x("🗡️<br>" + L(339), function() {
			aTc(1)
		}, bE.q9), new x("🔑<br>" + L(357), function() {
			aTc(2)
		}, bE.qS), new x("☰<br>" + L(358), function() {
			aTc(3)
		}, bE.pb), new x("", function() {
			u.v(12)
		}, bE.pK, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], t6 = new t7(bm.buffer.data[122]);
	for (var aC = 0; aC < aTa.length; aC++) aTa[aC].button.style.position = "absolute";

	function aTc(eI) {
		a1.a2.setState(10), ac.v0() || ac.aJ0(), 0 === eI ? u.z.a72(1) : 1 === eI ? (bC.aLL.yY(bm.buffer.data[156].value, 1) || aE.a6j.a7C(), u.v(19)) : 2 === eI ? 0 !== a1.id || bm.buffer.data[140].value ? u.v(8, u.ua, new ub(16)) : u.z.aTd(u.ua,
			16) : 3 === eI && u.v(1)
	}
	t6.e.style.position = "absolute", t6.e.style.textAlign = "center", t6.e.placeholder = L(359), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aJ9.show(), aTa[4].se(bD.color.a5C(bm.buffer.data[121].value)), this.resize(), document.body.appendChild(t6.e);
		for (var aC = 0; aC < aTa.length; aC++) document.body.appendChild(aTa[aC].button);
		1 !== a1.id || a1.e3 < 5 || (aTb && bi.eZ > aTb + 144e5 ? a1.xZ.setState(14) : aTb = bi.eZ)
	}, this.tZ = function() {
		this.aJ9.tZ(), u.removeChild(document.body, t6.e);
		for (var aC = 0; aC < aTa.length; aC++) u.removeChild(document.body, aTa[aC].button)
	}, this.resize = function() {
		this.aJ9.resize(), this.aJ9.resize(), aSf.resize();
		var gap = .5 * bf.gap,
			vV = 10 / 99 * .84 * aSf.j,
			aTg = .16 * aSf.k,
			aBL = .19 * aSf.j,
			fg = aSf.fg + aBL,
			vV = aSf.fi + vV + 3 * gap,
			j = .5 * (aSf.j - gap) - aBL,
			aBL = aSf.j - 2 * aBL - aTg - gap,
			aBL = (bD.sK.uy(t6.e, fg, vV, aBL, aTg), bD.sK.uy(aTa[4].button, fg + aBL + gap, vV, aTg, aTg), u3 = vV, .5 * (aSf.fi + aSf.k - (vV += aTg + gap) - gap));
		bD.sK.uy(aTa[0].button, fg, vV, j, aBL), bD.sK.uy(aTa[1].button, fg + j + gap, vV, j, aBL), bD.sK.uy(aTa[2].button, fg, vV + aBL + gap, j, aBL), bD.sK.uy(aTa[3].button, fg + j + gap, vV + aBL + gap, j, aBL);
		bD.sK.uy(aTa[5].button, fg, vV + aBL * 2 + gap * 2, j * 2 + gap, aBL / 3);
		bD.sK.uy(aTa[6].button, fg, vV + aBL * 2.33 + gap * 3, j * 2 + gap, aBL / 3);
		for (var aC = 0; aC < aTa.length; aC++) aTa[aC].button.style.font = bD.sK.u8(0, bD.sK.wJ(.065 * aSf.k)), bD.sK.sU(aTa[aC].button, 5);
		t6.e.style.font = bD.sK.u8(0, bD.sK.wJ(.08 * aSf.k)), bD.sK.sU(t6.e, 5)
	}, this.wr = function() {
		if (ab.aIg(), aU.wr(), fZ = Math.floor((a1.a2.ik() ? .018 : .0137) * i.il), ws.font = bD.sK.u8(0, Math.max(5, fZ)), bD.sK.textBaseline(ws, 0), bD.sK.textAlign(ws, 2), ws.fillStyle = bE.pO, ws.fillText(m.e3, i.j, 0), text = "Win count: " +
			__fx.wins.count, textLength = ws.measureText(text).width, fZ = Math.max(5, fZ), ws.textAlign = "left", ws.textBaseline = "middle", ws.fillText(text, ws.canvas.width - textLength - fZ / 2, 2 * fZ), aP.wr(u3), bb.wr(), ac.v0()) {
			ws.imageSmoothingEnabled = !1;
			var text = ac.aIj("territorial.io"),
				textLength = .84 * aSf.j / text.width;
			ws.setTransform(textLength, 0, 0, textLength, aSf.fg + .08 * aSf.j, aSf.fi), aTZ = aTZ || bD.or.a63(text, bD.or.a69, [0, 0, 0]);
			for (var fg = -1; fg <= 1; fg += 2)
				for (var fi = -1; fi <= 1; fi += 2) ws.drawImage(aTZ, fg, fi);
			ws.drawImage(text, 0, 0), ws.imageSmoothingEnabled = !0;
			var fZ = ac.aIj("logo"),
				aTj = .6666 * textLength * text.height / fZ.height,
				o8 = .5 * i.j,
				o9 = aSf.fi + .5 * textLength * text.height - .5 * aTj * fZ.height;
			ws.setTransform(aTj, 0, 0, aTj, o8 - .6 * textLength * text.width, o9), ws.drawImage(fZ, 0, 0), ws.setTransform(aTj, 0, 0, aTj, o8 + .6 * textLength * text.width - aTj * fZ.width, o9), ws.drawImage(fZ, 0, 0), ws.setTransform(1, 0, 0,
				1, 0, 0), ws.imageSmoothingEnabled = !0
		}
	}
}

function aQ4() {
	var aQN, aTk, aTl, wd;

	function aTm(aC) {
		u.v(8, u.ua, new ub(21, {
			ur: aC,
			us: 0,
			ut: 10
		}))
	}
	this.show = function() {
		aQN.show(), this.resize()
	}, this.tZ = function() {
		aQN.tZ()
	}, this.resize = function() {
		aQN.resize(), aTk.resize()
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	}, aTl = [new x(L(360), function() {
		aTm(1)
	}, 0, 0, 1), new x(L(361), function() {
		aTm(2)
	}, 0, 0, 1), new x(L(362), function() {
		aTm(3)
	}, 0, 0, 1), new x(L(363), function() {
		aTm(0)
	}, 0, 0, 1), new x(L(364), function() {
		aTm(9)
	}, 0, 0, 1), new x(L(365), function() {
		aTm(10)
	}, 0, 0, 1), new x(L(366), function() {
		aTm(11)
	}, 0, 0, 1), new x(L(367), function() {
		aTm(13)
	}, 0, 0, 1)], wd = [new x("⬅️ " + L(40), function() {
		u.a3O()
	})], aQN = new wc(L(368), wd), aTk = new ss(aTl, aQN.wi)
}

function aEy(title, s7, aTn) {
	var aQN, aSw;
	this.show = function() {
		aQN.show(), this.resize()
	}, this.tZ = function() {
		aQN.tZ()
	}, this.resize = function() {
		aQN.resize(), aSw.resize()
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	}, aTn = aTn || [new x("⬅️ " + L(40), function() {
		u.a3O()
	}, bE.q3)], aQN = new wc(title, aTn), aSw = new tk(aQN.wi, s7), bD.sK.textAlign(aQN.wi.style, 1)
}

function aD4(data) {
	var aQN, aTo;

	function aTx(fZ) {
		return fZ < 60 ? 1 === fZ ? fZ + " Second" : fZ + " Seconds" : fZ < 3600 ? 1 === (fZ = Math.floor(fZ / 60)) ? fZ + " Minute" : fZ + " Minutes" : fZ < 172800 ? 1 === (fZ = Math.floor(fZ / 3600)) ? fZ + " Hour" : fZ + " Hours" : (fZ = Math
			.floor(fZ / 172800)) + " Days"
	}

	function aTq(k9) {
		var fZ = data.data.length;
		if (fZ) {
			for (var us, max = min = parseInt(data.data[0][0]), aC = 1; aC < fZ; aC++) var aH0 = parseInt(data.data[aC][0]),
				min = Math.min(aH0, min),
				max = Math.max(aH0, max);
			us = k9 < 0 ? min + k9 : max + 1, u.v(8, u.a3T().a3U, new ub(21, {
				ur: data.ur,
				us: us,
				ut: us + Math.abs(k9)
			}))
		}
	}
	if (this.show = function() {
			aQN.show(), this.resize()
		}, this.tZ = function() {
			aQN.tZ()
		}, this.resize = function() {
			aQN.resize(), aTo.resize()
		}, this.a4K = function(ej) {
			2 === ej && aQN.wj[0].sb()
		}, data.aD5) {
		aQN = new wc(L(119), [new x("⬅️ " + L(40), function() {
			u.a3O()
		})]);
		var fc = {
				uI: [],
				uO: [L(381), L(382), L(383) + " ↗"],
				uV: [12, 50, 38]
			},
			a76 = aE.data.a76;
		if (a76) {
			for (var fZ = a76.length, uI = fc.uI, a0j = ah.a0j, aC = 0; aC < fZ; aC++) uI.push([{
				g1: aC + 1 + ".",
				ea: 0
			}, {
				g1: a0j[aC],
				ea: 0
			}, {
				g1: bI.f0.a1X(a76[aC], 5),
				ea: 1,
				uY: a76[aC],
				uZ: 0
			}]);
			aTo = new uH(aQN.wi, fc, {
				uR: 1
			})
		} else aTo = new uH(aQN.wi, fc)
	} else {
		var fc = data.data.length ? 0 : 1,
			aTn = [new x("⬅️ " + L(40), function() {
				u.a3O()
			}), new x(L(369), function() {
				aTq(-10)
			}, fc, 0, 1), new x(L(370), function() {
				aTq(10)
			}, fc, 0, 1), new x(L(315), function() {
				u.v(11, 10, new aTr({
					ur: data.ur
				}))
			})],
			uO = [L(371), L(372), L(373), L(374), L(375), L(376), L(377), L(378), L(379), L(380), L(365), L(366), "Audit Log", L(367)];
		aQN = new wc(uO[data.ur], aTn), ! function() {
			var aC, fc = {
					uI: []
				},
				uI = fc.uI,
				aTt = data.data,
				fZ = aTt.length;
			fZ && 0 === aTt[0][0] && 0 <= (eI = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.ur]) && (u.z.uu[eI] = aTt[0][1]);
			var o7 = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.ur],
				a6F = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.ur],
				eI = [
					[L(384), L(385) + " ↗", L(386)],
					[L(384), L(387), L(388), L(389) + " ↗"],
					[L(384), L(385) + " ↗", L(388)],
					[L(384), L(385) + " ↗", L(388)],
					[L(381), L(390), L(391) + " ↗", L(392) + " ↗", L(123)],
					[L(381), L(390), L(393) + " ↗", L(394) + " ↗", L(395)],
					[L(381), L(390), L(396) + " ↗", L(397) + " ↗", L(398)],
					[L(381), L(390), L(393) + " ↗", L(394) + " ↗", L(399)],
					[L(381), L(390), L(391) + " ↗", L(392) + " ↗", L(123)],
					[L(384), L(385) + " ↗", L(388)],
					[L(384), L(385) + " ↗", L(400)],
					[L(384), L(385) + " ↗", L(388)],
					[L(381), L(390), L(391) + " ↗", L(392) + " ↗", L(401)],
					[L(384), L(385) + " ↗", L(388)]
				];
			if (fc.uO = eI[data.ur], fc.uV = [
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
				][data.ur], 0 === data.ur || 2 === data.ur || 3 === data.ur || 9 === data.ur || 10 === data.ur || 11 === data.ur || 13 === data.ur)
				for (aC = 0; aC < fZ; aC++) uI.push([{
					g1: aTt[aC][0] + 1 + ".",
					ea: 0
				}, {
					g1: aTt[aC][1],
					ea: 1,
					uY: aTt[aC][4],
					uZ: aTt[aC][3]
				}, {
					g1: (o7 * aTt[aC][2]).toFixed(a6F),
					ea: 0
				}]);
			else if (12 === data.ur)
				for (aC = 0; aC < fZ; aC++) {
					var aTw = aTt[aC][3];
					uI.push([{
						g1: "" + aTt[aC][0],
						ea: 0
					}, {
						g1: aTx(aTt[aC][4]),
						ea: 0
					}, {
						g1: aTt[aC][5],
						ea: 1,
						uY: aTt[aC][1],
						uZ: 0
					}, {
						g1: aTt[aC][6],
						ea: 1,
						uY: aTt[aC][2],
						uZ: 0
					}, {
						g1: br.eO(aTw, bI.f0.a1X(aTt[aC][1], 5)),
						ea: 0
					}])
				} else if (1 === data.ur)
					for (aC = 0; aC < fZ; aC++) uI.push([{
						g1: aTt[aC][0] + 1 + ".",
						ea: 0
					}, {
						g1: aTt[aC][1],
						ea: 0
					}, {
						g1: (o7 * aTt[aC][2]).toFixed(a6F),
						ea: 0
					}, {
						g1: aTt[aC][3],
						ea: 1,
						uY: aTt[aC][5],
						uZ: aTt[aC][4]
					}]);
				else if (4 === data.ur || 5 === data.ur || 6 === data.ur || 7 === data.ur || 8 === data.ur)
				for (aC = 0; aC < fZ; aC++) {
					var aTy = aTt[aC][5];
					4 === data.ur || 8 === data.ur ? "100%" === (aTy = (aTy % 64 * 100 / (aTy >> 6)).toFixed(0) + "%") && (4 === data.ur ? aTy += " (" + L(402) + ")" : aTy += " (" + L(403) + ")") : 5 === data.ur ? 32768 <= aTy && (aTy = -(aTy -
						32768)) : aTy = (o7 * aTy).toFixed(a6F), uI.push([{
						g1: "" + aTt[aC][0],
						ea: 0
					}, {
						g1: aTx(aTt[aC][6]),
						ea: 0
					}, {
						g1: aTt[aC][7],
						ea: 1,
						uY: aTt[aC][1],
						uZ: aTt[aC][2]
					}, {
						g1: aTt[aC][8],
						ea: 1,
						uY: aTt[aC][3],
						uZ: aTt[aC][4]
					}, {
						g1: "" + aTy,
						ea: 0
					}])
				}
			aTo = new uH(aQN.wi, fc)
		}()
	}
}

function aTr(a65) {
	var aQN, aQO, sF;
	this.show = function() {
		aQN.show(), this.resize()
	}, this.tZ = function() {
		aQN.tZ()
	}, this.resize = function() {
		aQN.resize(), aQO.resize()
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	}, aQN = new wc(L(404), [new x("⬅️ " + L(40), function() {
		u.aQL(10)
	})]), aQO = new sD(aQN.wi, ((sF = []).push(function() {
		var aQt, aQl = new rx,
			aSd = new t7(bm.buffer.data[132], 1, function() {
				aQt.button.click()
			}),
			aSe = new t7(bm.buffer.data[131], 1, function() {
				aSd.e.focus()
			});
		aQl.s0(L(320)), aQl.sB(aSe), aSe.e.style.marginBottom = "0.8em", aQl.s0(L(321)), aQl.sB(aSd);
		return aQt = new x(L(319), function() {
			us = Math.floor(aSe.e.value), ut = Math.floor(aSd.e.value);
			var ut, us = {
				a4n: Math.min(us, ut),
				aPU: Math.max(us, ut)
			};
			u.v(8, u.a7I(10).a3U, new ub(21, {
				ur: a65.ur,
				us: us.a4n,
				ut: us.aPU
			}))
		}, 0, 0, 1), aQl.sB(new tl([aQt.button])), aQl
	}()), sF.push(function() {
		var aQt, aQl = new rx,
			aSd = new t7(bm.buffer.data[134], 1, function() {
				aQt.button.click()
			}),
			aSe = new t7(bm.buffer.data[133], 0, function() {
				aSd.e.focus()
			});
		return aQl.s0(1 === a65.ur ? L(405) : L(406)), aQl.sB(aSe), aSe.e.style.marginBottom = "0.8em", aQl.s0(L(407)), aQl.sB(aSd), aQt = new x(L(319), function() {
			var aT5 = aSe.e.value.slice(0, 20),
				aT6 = Math.abs(Math.floor(aSd.e.value));
			u.v(8, u.a7I(10).a3U, new ub(22, {
				ur: a65.ur,
				aT5: aT5,
				aT6: aT6
			}))
		}, 0, 0, 1), aQl.sB(new tl([aQt.button])), aQl
	}()), sF.push(function() {
		var aQt, aQl = new rx,
			aSd = new t7(bm.buffer.data[152], 1, function() {
				aQt.button.click()
			}),
			aSe = new t7(bm.buffer.data[151], 0, function() {
				aSd.e.focus()
			});
		return aQl.s0(L(408)), aQl.sB(aSe), aSe.e.style.marginBottom = "0.8em", aQl.s0(L(407)), aQl.sB(aSd), aQt = new x(L(319), function() {
			var aT5 = aSe.e.value.slice(0, 5),
				aT6 = Math.abs(Math.floor(aSd.e.value));
			u.v(8, u.a7I(10).a3U, new ub(28, {
				ur: a65.ur,
				aT5: aT5,
				aT6: aT6
			}))
		}, 0, 0, 1), aQl.sB(new tl([aQt.button])), aQl
	}()), sF))
}

function aQH() {
	var aU2, v4, aU5, v3, v6, aU3 = [new Array(4), new Array(4), new Array(2), new Array(2)],
		aU4 = new Array(4),
		aU6 = new Array(2),
		aU7 = [L(64), L(364), L(409), L(410)];

	function aGm() {
		var aG5;
		!bq.f6 || (aG5 = aU2.vH.t6.e.value.trim().slice(0, 127)).length < 1 || (aU2.vH.t6.e.value = "", bq.aF1.a2K(aG5))
	}

	function aUA(aUC) {
		bq.z.tM[3] = 1 - bq.z.tM[3], aUB(3, 1, bq.z.tM[3]), aUC && b1.aGx.aGy(4), bq.z.tM[3] && bm.qo.qp(158, bq.z.tM[0])
	}

	function aU8(fs, ft) {
		bq.z.tM[fs] !== ft && (0 === fs && bq.z.tM[3] && aUA(0), aUB(fs, bq.z.tM[fs], 0), aUB(fs, ft, 1), bq.z.tM[fs] = ft, 0 === fs ? (b1.aGx.aGy(2, ft), bq.z.tM[2] ? (aU2.vI.nH(), aU2.vH.reset(1)) : aU2.vH.reset(0), u.a3T().aGb(), u.a3T().aGa()) :
			2 === fs && (0 === ft ? (b1.aGx.aGy(0), aU2.vH.nH(), aU2.vQ()) : (b1.aGx.aGy(1), aU2.vI.nH(), aU2.vR())))
	}

	function aUB(fs, ft, color) {
		aU2.vK[fs].oy[ft].se(color ? bE.pn : bE.qc)
	}

	function aUF(fF) {
		return bV.yd.aOj[fF]
	}

	function aUG(aFp) {
		return aFp < 7 ? "   " + (aFp + 2) + " Teams" : 10 === aFp ? "   No Full-Sending" : ""
	}

	function aUH(aGd, aUO) {
		return aUO ? aGd <= 90 && 60 < aGd ? "   Contest" : "" : aGd <= 60 ? "   Contest" : ""
	}
	this.aH8 = function() {
		return aU2.vH
	}, this.aF1 = function(uY) {
		aU8(2, 0);
		var s1 = aU2.vH.t6.e.value,
			uY = "@" + uY + " ";
		s1.length && !bD.tI.a5Z(s1, " ") && (uY = " " + uY), aU2.vH.t6.e.value = s1 += uY, aU2.vH.t6.e.focus()
	}, this.aGZ = function() {
		aU2.vI.nH()
	}, this.aGb = function() {
		var aUE = bq.z.tM[0],
			aUE = bq.z.tO[aUE],
			ft = (bV.a8(aUE.fF, aUE.mapSeed), v4.oy),
			a8y = aUF(aUE.fF, aUE.mapSeed) + aUG(aUE.aFp) + aUH(aUE.aGd),
			aUE = L(413) + "   " + aUF(aUE.aHY, aUE.aHZ) + aUG(aUE.aHa) + aUH(aUE.aGd, 1);
		ft[0].button.textContent === a8y && ft[1].button.textContent === aUE || (ft[0].button.textContent = a8y, ft[1].button.textContent = aUE, v4.resize())
	}, this.aGa = function() {
		var aUE = bq.z.tM[0],
			tN = bq.z.tO[aUE];
		aU2.vO(tN.vP);
		for (var g1, a9E, aC = 0; aC < bq.vg.vh.length; aC++) aU3[0][aC].tH.textContent = bq.vg.vh[aC].length, aU3[1][aC].tH.textContent = (g1 = bq.z.tO[aC].aGd, a9E = void 0, ((a9E = bO.g0(g1, 60)) < 10 ? "0" : "") + a9E + ":" + ((g1 %= 60) <
			10 ? "0" : "") + g1);
		var tN = bq.vg.vh[aUE],
			aUJ = tN.length,
			aUK = bq.vg.vi[aUE];
		aU3[2][1].tH.textContent = "" + aUJ, aU3[3][1].tH.textContent = "" + aUK;
		for (aC = 0; aC < 4; aC++) {
			var aUL = bq.z.tO[aC];
			aU4[aC] ? 0 === aUL.vP && (aU4[aC].tH.textContent = bV.yd.aOj[aUL.fF]) : aU4[aC] = new tG(bV.yd.aOj[aUL.fF], v3.oy[aC].button, 1, 1), bD.tI.startsWith(aU7[aC], "🏆 ") ? aUL.aFv || (aU7[aC] = aU7[aC].substring(3), v3.oy[aC].button
				.textContent = aU7[aC], v3.oy[aC].button.appendChild(aU3[1][aC].tH), v3.oy[aC].button.appendChild(aU3[0][aC].tH), v3.oy[aC].button.appendChild(aU4[aC].tH)) : aUL.aFv && (aU7[aC] = "🏆 " + aU7[aC], v3.oy[aC].button
				.textContent = aU7[aC], v3.oy[aC].button.appendChild(aU3[1][aC].tH), v3.oy[aC].button.appendChild(aU3[0][aC].tH), v3.oy[aC].button.appendChild(aU4[aC].tH))
		}
		var aUM = "",
			aUN = "";
		0 === aUE && (aUM = bq.lj.aGA(tN, 0, aUJ), aUN = bq.lj.aGA(tN, 0, aUK)), aU5[0].tH.textContent = aUM, aU5[1].tH.textContent = aUN, aU6[1].tH.textContent = "MP: " + bq.z.aGT[0] + "   SP: " + bq.z.aGT[1] + "   Lobby: " + bD.sS.a50(bq.vg.vh)
	}, this.aGf = function() {
		aU2.vH.nH()
	}, this.show = function() {
		bq.z.aFM++, aU2.show(), this.resize(), bq.message.show()
	}, this.tZ = function() {
		aU2.tZ(), bq.w3.tZ(), bq.vd.tZ(), bq.message.tZ()
	}, this.resize = function() {
		aU2.resize(1 - bq.z.tM[2]), bq.message.resize()
	}, this.a4K = function(ej) {
		2 === ej ? bq.z.tM[3] ? aUA(1) : aU2.vK[3].oy[0].sb() : ej < 2 && aUA(1)
	}, v3 = new tp([new x(aU7[0], function() {
		return aU8(0, 0), 2
	}), new x(aU7[1], function() {
		return aU8(0, 1), 2
	}), new x(aU7[2], function() {
		return aU8(0, 2), 2
	}), new x(aU7[3], function() {
		return aU8(0, 3), 2
	})], bE.qc), (v4 = new tp([new x("", 0, 2), new x("", 0, 2)], bE.qd, 1)).rz.translate = !1;
	var aU9 = new tp([new x(L(411), function() {
		return aU8(2, 0), 2
	}), new x(L(119), function() {
		return aU8(2, 1), 2
	})], bE.qc);
	v6 = new tp([new x(L(26, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			u.y(), bq.vx(), b1.z.a3c(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		}),
		function() {
			u.y(), bq.vx(), b1.z.a3c(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		})), new x(L(412), function() {
		return aUA(1), 2
	})], bE.qc), aU2 = new v2(v3, v4, aU9, v6, aGm, bq.w3.aHI);
	for (var aC = 0; aC < 4; aC++) aU3[0][aC] = new tG("0", v3.oy[aC].button), aU3[1][aC] = new tG("0", v3.oy[aC].button, 1);
	aU3[2][1] = new tG("0", aU9.oy[1].button), aU3[3][1] = new tG("0", v6.oy[1].button), (aU5 = [new tG("", aU9.oy[1].button, 1, 1), new tG("", v6.oy[1].button, 1, 1)])[0].tH.style.bottom = "0em", aU5[1].tH.style.bottom = "0em", aU5[0].tH
		.translate = !1, aU5[1].tH.translate = !1, aUB(0, bq.z.tM[0], 1), aUB(2, bq.z.tM[2], 1), (aU6 = [new tG(L(313), aU2.vS(), 1, 0), new tG("", aU2.vS(), 1, 1)])[0].tH.style.fontSize = "0.4em", aU6[1].tH.style.fontSize = "0.4em"
}

function aPy() {
	var aQN, aQO, sF;
	this.show = function() {
		aQN.show(), this.resize()
	}, this.tZ = function() {
		aQN.tZ()
	}, this.resize = function() {
		aQN.resize(), aQO.resize()
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	}, aQN = new wc(L(414), [new x("⬅️ " + L(40), function() {
		u.v(7, u.a7I(7).a3U)
	}), new x(L(216), function() {
		bm.qo.qp(105, bJ.f0.yO(aQO.sH[0].ry[0].e.value, 5)), bm.qo.qp(106, bJ.f0.yO(aQO.sH[1].ry[0].e.value, 15)), u.v(8, u.a7I(7).a3U, new ub(18))
	})]), aQO = new sD(aQN.wi, ((sF = []).push(function() {
		var aQl = new rx;
		return aQl.s0(L(194)), aQl.sB(new t7({
			value: "",
			eI: -1
		})), aQl
	}()), sF.push(function() {
		var aQl = new rx,
			aQy = (aQl.s0(L(197)), new t7({
				value: "",
				eI: -1
			}));
		return aQy.e.type = "password", aQl.sB(aQy), aQl.sB(new tl([new x(L(198), function(e) {
			return e.textContent === L(198) ? (e.textContent = L(199), aQy.e.type = "text") : (e.textContent = L(198), aQy.e.type = "password"), !0
		}).button])), aQl
	}()), sF.push(function() {
		var aQl = new rx;
		return aQl.s0(L(201)), aQl.s2(L(415)), aQl.s2(L(416)), aQl.s2(L(417)), aQl
	}()), sF))
}

function aQ5() {
	var aQN, aTk, aTl, wd;

	function aTm(aC) {
		u.v(8, u.ua, new ub(21, {
			ur: aC,
			us: 0,
			ut: 10
		}))
	}
	this.show = function() {
		aQN.show(), this.resize()
	}, this.tZ = function() {
		aQN.tZ()
	}, this.resize = function() {
		aQN.resize(), aTk.resize()
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	}, aTl = [new x(L(376), function() {
		aTm(5)
	}, 0, 0, 1), new x(L(377), function() {
		aTm(6)
	}, 0, 0, 1), new x(L(378), function() {
		aTm(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aTm(12)
	}, 0, 0, 1)], wd = [new x("⬅️ " + L(40), function() {
		u.a3O()
	})], aQN = new wc(L(418), wd), aTk = new ss(aTl, aQN.wi)
}

function aPp() {
	this.buffer = {}, this.uu = new Array(8), this.aQ3 = null, this.aQ0 = null, this.uF = 0, this.uS = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a72 = function(aUR) {
		aUR && (aa.f2 = aUR), u.y(), aa.dk()
	}, __fx.customLobby.setJoinFunction(() => this.a72(1)), this.aEb = function() {
		u.v(0 === ab.a3P() ? 5 : 0)
	}, this.aSY = function() {
		if (1 === bm.buffer.data[130].value) u.v(8, u.a3T().a3U, new ub(24, {
			aS7: bm.buffer.data[125].value,
			us: bm.buffer.data[128].value,
			ut: bm.buffer.data[129].value
		}));
		else {
			for (var h = (h = bm.buffer.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a3T().a3U, new ub(23, {
				aS7: bm.buffer.data[125].value,
				a2x: h
			}))
		}
	}, this.aTd = function(a3U, target) {
		u.v(4, a3U, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aQm(
				"/privacy"), !1, [new x("⬅️ " + L(40), function() {
				u.v(a3U)
			}), new x("✅ Accept", function() {
				bm.qo.qp(140, 1), 0 === target ? u.v(2, a3U) : u.v(8, a3U, new ub(target))
			})]))
	}, this.aUS = function() {
		for (var aC = 0; aC < 8; aC++) this.uu[aC] = bJ.yF.yJ(bK.rS(5));
		this.uu[1] = "[" + this.uu[1] + "]", 5 === u.ua && (u.a3T().aJ9.qp(this.uu), u.a3T().resize())
	}, this.aQu = function(g1, qm, a8o) {
		g1 = bD.gv.a62(g1, 1, 1e6);
		qm = L(419, [qm]);
		return (qm += "<br>") + L(420, [__fx.utils.escapeHtml("" + a8o)]) + "<br>" + L(421, [g1 + "–" + (g1 + 2)]) + "<br>" + L(422, [g1])
	}
}

function aQ8() {
	var aRe, aRf, aUT, sF;

	function aRh() {
		b7.vx(), u.aQM()[19] = null, u.a3O()
	}

	function aUa() {
		aUd(), aUb()
	}

	function aUd() {
		aUT.rz.lastChild && u.removeChild(aUT.rz, aUT.rz.lastChild)
	}

	function aUb() {
		var aUe = bV.a79(aE.data);
		aE.data.canvas = bV.aNn(aUe, aE.data.mapSeed).yn, aUc()
	}

	function aUc() {
		var a55 = aE.data.canvas;
		a55.style.width = "100%", aUT.rz.appendChild(a55)
	}
	this.aKN = function(a55) {
		aE.data.canvas && aUd(), aE.data.canvas = a55, aUc()
	}, this.show = function() {
		aRe.show(), this.resize()
	}, this.tZ = function() {
		aRe.tZ()
	}, this.resize = function() {
		aRe.resize(), aRf.resize()
	}, this.a4K = function(ej) {
		2 === ej && aRe.wj[0].sb()
	}, aRe = new wc(L(341), [new x("⬅️ " + L(40), aRh)]), 2 === aE.data.mapType && b7.dk(), aRf = new sD(aRe.wi, (function(sF) {
		var aQl = new rx;
		aQl.s0(L(307)), aQl.s8(new wY({
			oM: [L(423), L(424), L(425)],
			value: aE.data.mapType
		}, function(eI) {
			2 === (aE.data.mapType = eI) ? (b7.dk(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.vx()), u.v(20)
		})), 2 <= aE.data.mapType && (aQl.sB(new tw), aQl.sB(new th({
			value: aE.data.passableWater
		}, L(426), function(value) {
			aE.data.passableWater = value
		})), aQl.sB(new th({
			value: aE.data.passableMountains
		}, L(427), function(value) {
			aE.data.passableMountains = value
		})));
		sF.push(aQl)
	}(sF = []), function(sF) {
		if (0 === aE.data.mapType) {
			for (var aQl = new rx, oM = (aQl.s0(L(341)), []), aC = 0; aC < bV.yd.aOh.length; aC++) oM.push(bV.yd.ye[bV.yd.aOh[aC]].name);
			aQl.s8(new wY({
				oM: oM,
				value: aE.data.mapProceduralIndex
			}, function(eI) {
				aE.data.mapProceduralIndex = eI, aUa()
			})), sF.push(aQl)
		}
	}(sF), function(sF) {
		if (1 === aE.data.mapType) {
			for (var aQl = new rx, oM = (aQl.s0(L(341)), []), aC = 0; aC < bV.yd.aOi.length; aC++) oM.push(bV.yd.ye[bV.yd.aOi[aC]].name);
			aQl.s8(new wY({
				oM: oM,
				value: aE.data.mapRealisticIndex
			}, function(eI) {
				aE.data.mapRealisticIndex = eI, aUa()
			})), sF.push(aQl)
		}
	}(sF), function(sF) {
		var aQl;
		2 === aE.data.mapType && ((aQl = new rx).s0(L(428)), aQl.sB(new t7(bm.buffer.data[162], 1)), aQl.s0(L(429), "0.8em"), aQl.sB(new tl([new x(L(430), function() {
			return b7.aKG(), !0
		}).button])), sF.push(aQl))
	}(sF), function(sF) {
		var aQl, t6;
		2 === aE.data.mapType && ((aQl = new rx).s0(L(431)), t6 = new t7({
			eI: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aQl.sB(t6), sF.push(aQl))
	}(sF), function(sF) {
		var aQl, t6, aQt;
		0 === aE.data.mapType && ((aQl = new rx).s0("Seed"), t6 = new t7({
			eI: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aUa())
		}), aQt = new x(L(332), function(e) {
			var aNi = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aNi) return t6.e.value = aE.data.mapSeed = aNi, aUa(), !0
		}), aQl.sB(t6), aQl.sB(new tl([aQt.button])), sF.push(aQl))
	}(sF), function(sF) {
		(aUT = new rx).s0(L(432)), 2 !== aE.data.mapType ? aUb() : aE.data.canvas && aUc();
		sF.push(aUT)
	}(sF), sF))
}

function w(title, s7, aUf, aTn) {
	var aQN, aSw;
	this.show = function() {
		aQN.show(), this.resize()
	}, this.tZ = function() {
		aQN.tZ()
	}, this.resize = function() {
		aQN.resize(), aSw.resize()
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	}, aTn = aTn || [new x("⬅️ " + L(40), function() {
		u.a3O()
	})], aQN = new wc(title, aTn), aSw = new tk(aQN.wi, s7), aUf && bD.sK.textAlign(aQN.wi.style, 1)
}

function aQB() {
	var aRe, aRf, aRg, sF;

	function aRh() {
		aRj(), 2 === aE.data.playerNamesType && 1 === bD.sS.a4j(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aQM()[19] = null, u.a3O()
	}

	function aRj() {
		2 === aE.data.playerNamesType && bD.sS.a4x(aRg.x7(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aRe.show(), this.resize()
	}, this.tZ = function() {
		aRe.tZ()
	}, this.resize = function() {
		aRe.resize(), aRf.resize()
	}, this.a4K = function(ej) {
		2 === ej && aRe.wj[0].sb()
	}, aRe = new wc(L(345), [new x("⬅️ " + L(40), aRh)]), aRf = new sD(aRe.wi, (function(sF) {
		var aQl = new rx;
		aQl.s0(L(307)), aQl.s8(new wY({
			oM: [L(346), L(347), L(310)],
			value: aE.data.playerNamesType
		}, function(eI) {
			aRj(), aE.data.playerNamesType = eI, u.v(23)
		})), aQl.sB(new tw), aQl.sB(new th({
			value: aE.data.selectableName
		}, L(433), function(value) {
			aE.data.selectableName = value
		})), sF.push(aQl)
	}(sF = []), function(sF) {
		var aQl;
		2 === aE.data.playerNamesType && ((aQl = new rx).s0("Data"), aRg = new x0(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fW || (aE.data.playerNamesData = new Array(aE.fW), aE.data.playerNamesData
			.fill("")), aRg.x6(bD.tI.a6S(aE.data.playerNamesData, 1, '"')), aQl.sB(aRg), sF.push(aQl))
	}(sF), sF))
}

function aQJ() {
	var aRe, aRf, sF;

	function aUl() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.buffer.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var fs = 0; fs < 3; fs++) fs < h.length && (colors[aC][fs] = Number(h[fs]))
		}
		return colors
	}
	this.show = function() {
		aRe.show(), this.resize()
	}, this.tZ = function() {
		aRe.tZ()
	}, this.resize = function() {
		aRe.resize(), aRf.resize()
	}, this.a4K = function(ej) {
		2 === ej && aRe.wj[0].sb()
	}, aRe = new wc(L(434), [new x("⬅️ " + L(40), function() {
		u.a3O()
	})]), aRf = new sD(aRe.wi, ((sF = []).push(function() {
		var aQl = new rx;
		return aQl.s0(L(435)), aQl.s6(b1.z.aQm("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", aQl.s6("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), aQl
	}()), sF.push(function() {
		var aQl = new rx,
			el = (aQl.s0(L(436)), bm.buffer.data[174].value),
			s3 = aQl.s2(el.length + " / 180"),
			aRN = (s3.style.textAlign = "center", new x0(0, 1, function(e) {
				var e = e.target.value,
					h2 = e.length;
				s3.textContent = h2 + " / 180", h2 <= 180 && bm.qo.qp(174, e)
			}));
		return aRN.e.rows = 6, aRN.e.style.fontSize = "1em", aRN.x6(el), aQl.sB(aRN), aQl
	}()), sF.push(function() {
		var aQl = new rx;
		aQl.s0(L(331));
		for (var aC = 0; aC < 11; aC++) {
			var iv = aQl.sB(new t7(bm.buffer.data[163 + aC]));
			aC && (iv.e.style.marginTop = "0.6em")
		}
		return aQl.sB(new tl([new x(L(437), function() {
			for (var data = bm.buffer.data, aC = 163; aC < 174; aC++) data[aC] && bm.buffer.xM(aC, data[aC].xP);
			u.a3O(), u.aQM()[31] = null, u.v(31)
		}).button])), aQl
	}()), sF.push(function() {
		var aQl = new rx;
		return aQl.s0("Targeting"), aQl.s6(L(438)), aQl.sB(new t7(bm.buffer.data[175], 0, 0)), aQl
	}()), sF.push(function() {
		var aQl = new rx;
		return aQl.s0(L(432)), aQl.sB(new tl([new x(L(198), function() {
			(new ek).show(bm.buffer.data[174].value, aUl(), -1)
		}).button])), aQl
	}()), sF.push(function() {
		var aQl = new rx,
			aUm = (aQl.s0(L(439)), aQl.s6(L(440)), new t7(bm.buffer.data[176], 1, 0)),
			aUn = (aQl.sB(aUm), new x(L(441), function(e) {
				return aUo.button.textContent === L(186) && b1.z.ef(0) && (bD.sK.wV(e), aQs(), b1.aHS.aUp(bm.buffer.data[176].value, aUl(), bm.buffer.data[175].value, bm.buffer.data[174].value)), !0
			}, 1)),
			aQs = function() {
				aUo.button.textContent = L(185), aUn.se(1), aUn.button.style.color = bE.pO
			},
			aUo = new x(L(185), function(e) {
				return e.textContent === L(185) ? (e.textContent = L(186), aUn.se(0), aUn.button.style.color = bE.qN) : aQs(), !0
			});
		return aQl.sB(new tl([aUo.button, aUn.button])), aQl
	}()), sF))
}

function aQK() {
	var aQN, aQO, sF;
	this.show = function() {
		aQN.show(), this.resize()
	}, this.tZ = function() {
		aQN.tZ()
	}, this.resize = function() {
		aQN.resize(), aQO.resize()
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	}, aQN = new wc("🔒 " + L(442), [new x("⬅️ " + L(40), function() {
		u.a3O()
	})]), aQO = new sD(aQN.wi, ((sF = []).push(function() {
		var aQl = new rx,
			t6 = (aQl.s6(b1.z.aQm("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", aQl.s0(L(194)), new t7({
				value: "",
				eI: -1
			})),
			aRJ = (aQl.sB(t6), aQl.s0(L(265), "0.8em"), new t7({
				value: "",
				eI: -1
			}, 0, 0)),
			aQr = (aRJ.e.type = "email", aRJ.e.autocomplete = "email", aRJ.e.name = "email", aRJ.e.inputMode = "email", aRJ.e.spellcheck = !1, aQl.sB(aRJ), new x(L(443), function(e) {
				return bD.sK.wV(e), b1.aHS.aRK({
					action: 4,
					s1: t6.e.value.trim() + aRJ.e.value.trim().substring(0, 63)
				}), !0
			}));
		return aQl.sB(new tl([aQr.button])), aQl
	}()), sF))
}

function aPw() {
	var aRe, x4;

	function aUr() {
		u.y();
		var s1 = bC.aUv(x4.x7());
		(aE.a2G && 0 < s1.length && s1 === bC.re.a6y || bC.aLL.yY(s1)) && bC.aUw()
	}
	this.show = function(aUs) {
		this.aUt(aUs), aRe.show(), this.resize()
	}, this.aUt = function(aUs) {
		0 === aE.a2G ? aUs ? x4.x6(aUs) : aE.a6m.length && x4.x6(aE.a6m) : (aE.hi || (bC.re.a6y = bC.a6z.a1i()), x4.x6(bC.aUu(bC.re.a6y)))
	}, this.tZ = function() {
		aRe.tZ()
	}, this.resize = function() {
		aRe.resize(), x4.resize()
	}, this.a4K = function(ej) {
		2 === ej ? aRe.wj[0].sb() : aUr()
	}, aRe = new wc(L(444), [new x("⬅️ " + L(40), function() {
		u.aQL(1)
	}), new x(L(445), function() {
		x4.x8()
	}), new x(L(446), function() {
		x4.x9()
	}), new x(L(447), function() {
		x4.clear()
	}), new x(L(448), function() {
		aUr()
	})]), x4 = new x0(L(449)), aRe.wi.appendChild(x4.e)
}

function aPv() {
	var aQN, aQO, sF, aQl;

	function aUx() {
		bA.aEN !== bm.buffer.data[12].value ? (bA.dk(), u.v(8, 1, new ub(30))) : u.v(1)
	}
	this.show = function() {
			aQN.show(), this.resize()
		}, this.tZ = function() {
			aQN.tZ()
		}, this.resize = function() {
			aQN.resize(), aQO.resize()
		}, this.a4K = function(ej) {
			2 === ej && aQN.wj[0].sb()
		}, aQN = new wc(L(450), [new x("⬅️ " + L(40), aUx), new x(L(451), function() {
			u.y(), bm.qo.xw(), u.v(2)
		})]), sF = [], (aQl = new rx).s0(L(452)), aQl.s2(L(453)), sF.push(aQl),
		function(sF) {
			var aQl = new rx,
				h = (aQl.s0(L(438)), bA.data.aEe());
			aQl.s8(new wY({
				oM: h,
				value: bA.data.aEi(h)
			}, function(eI) {
				return bm.qo.qp(12, h[eI].split(":")[0]), !0
			})), sF.push(aQl)
		}(sF),
		function(sF) {
			var aQl = new rx,
				aV0 = (aQl.s0(L(478)), []);
			aQl.sB(new tl([new x(L(437), function(e) {
				ba.aV1();
				for (var aC = 0; aC < aV0.length; aC++) aV0[aC].e.value = ba.aDw[aC];
				return bD.sK.wV(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aV2.length; aC++) {
				aQl.s2(ba.aV2[aC]);
				for (var fs = 0; fs < 2; fs++) {
					var eI = 2 * aC + fs,
						t6 = new t7({
							value: ba.aDw[eI],
							eI: -1
						});
					t6.e.aV3 = eI, aV0.push(t6), t6.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aV4(e.target.aV3, code)
					}), fs && (t6.e.style.marginLeft = "4%"), t6.e.style.width = "48%", aQl.sB(t6)
				}
			}
			sF.push(aQl)
		}(sF), (aQl = new rx).s0(L(454)), bm.buffer.data[1].oM = [L(455), L(456), L(457), L(458)], aQl.s8(new wY(bm.buffer.data[1])), sF.push(aQl), (aQl = new rx).s0(L(459)), bm.buffer.data[9].oM = [L(456), L(460), L(461)], aQl.s8(new wY(bm.buffer
			.data[9])), sF.push(aQl), (aQl = new rx).s0(L(462)), bm.buffer.data[11].oM = [L(463), L(9), L(464)], aQl.s8(new wY(bm.buffer.data[11])), sF.push(aQl), (aQl = new rx).s0(L(465)), aQl.sB(new th(bm.buffer.data[2])), sF.push(aQl), (aQl =
			new rx).s0(L(466)), aQl.sB(new th(bm.buffer.data[7])), sF.push(aQl), (aQl = new rx).s0(L(467)), aQl.sB(new th(bm.buffer.data[8])), sF.push(aQl), (aQl = new rx).s0(L(468)), aQl.sB(new t7(bm.buffer.data[5])), sF.push(aQl), (aQl = new rx)
		.s0(L(469)), aQl.sB(new th(bm.buffer.data[13], L(470))), aQl.sB(new th(bm.buffer.data[14], L(471))), sF.push(aQl), (aQl = new rx).s0(L(472)), aQl.s8(new wY({
			oM: [L(473), L(474), L(475)],
			value: aa.aIM
		}, function(aC) {
			aa.aIM = aC
		})), sF.push(aQl), (aQl = new rx).s0(L(476)), aQl.sB(new th(bm.buffer.data[15])), aQl.s2(L(477)), aQl.sB(new t7(bm.buffer.data[16], 1, 0, function(e) {
			e.target.value = bO.ij(Math.floor(e.target.value), 0, 16)
		})), sF.push(aQl), aQO = new sD(aQN.wi, sF)
}

function aQC() {
	var aRe, aRf, aRg, sF;

	function aRh() {
		aRj(), 2 !== aE.data.spawningType || bD.sS.a4j(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aQM()[19] = null, u.a3O()
	}

	function aRj() {
		2 === aE.data.spawningType && bD.sS.a4v(aRg.x7(), aE.data.spawningData, bV.aKQ - 1)
	}
	this.show = function() {
		aRe.show(), this.resize()
	}, this.tZ = function() {
		aRe.tZ()
	}, this.resize = function() {
		aRe.resize(), aRf.resize()
	}, this.a4K = function(ej) {
		2 === ej && aRe.wj[0].sb()
	}, aRe = new wc(L(479), [new x("⬅️ " + L(40), aRh)]), aRf = new sD(aRe.wi, (function(sF) {
		var aQl = new rx,
			oM = (aQl.s0(L(307)), [L(332), L(344), L(310)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (oM.splice(1, 1), 0 < value) && (value = 1);
		aQl.s8(new wY({
			oM: oM,
			value: value
		}, function(eI) {
			aRj(), aE.data.spawningType = eI, 0 === aE.data.gameMode && 1 === eI && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fW)), u.v(24)
		})), sF.push(aQl)
	}(sF = []), function(sF) {
		var aQl = new rx;
		aQl.s0("My Spawn"), aQl.sB(new th({
			value: aE.data.selectableSpawn
		}, L(480), function(value) {
			aE.data.selectableSpawn = value
		})), sF.push(aQl)
	}(sF), function(sF) {
		var aQl = new rx,
			aV6 = (aQl.s0("Seed"), new t7({
				eI: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		aQl.sB(aV6), aQl.sB(new tl([new x(L(332), function() {
			aV6.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), sF.push(aQl)
	}(sF), function(sF) {
		var aQl;
		2 === aE.data.spawningType && ((aQl = new rx).s0("Data"), (aRg = new x0(0, 1, 0, 1)).x6(bD.tI.a6S(aE.data.spawningData, 2)), aQl.sB(aRg), sF.push(aQl))
	}(sF), sF))
}

function aPu() {
	var aQN, aTk, aTl, wd;

	function aV7(id) {
		0 !== a1.id || bm.buffer.data[140].value ? 0 === id ? u.v(8, 1, new ub(16)) : u.v(2) : u.z.aTd(u.ua, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aQN.show(), this.resize(), this.ee()
	}, this.tZ = function() {
		aQN.tZ()
	}, this.resize = function() {
		aQN.resize(), aTk.resize()
	}, this.ee = function() {
		8 === ab.a3P() && (2 <= bg.aVC ? aTl[2].sc === bE.pa && aTl[2].se(0) : aTl[2].sc !== bE.pa && aTl[2].se(bE.pa), !aE.hi && aN.rv(aE.fJ) ? aTl[1].sc === bE.pa && aTl[1].se(0) : aTl[1].sc !== bE.pa && aTl[1].se(bE.pa), !aE.hi && ax.iO(aE
			.fJ) ? aTl[0].sc === bE.pa && aTl[0].se(0) : aTl[0].sc !== bE.pa && aTl[0].se(bE.pa))
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	}, aTl = [new x(L(481), function() {
		aV7(0)
	}), new x(L(368), function() {
		u.v(16)
	}), new x(L(418), function() {
		u.v(17)
	}), new x(L(482), function() {
		u.z.aSY()
	}, 0, 0, 1), new x(L(444), function() {
		u.v(3, 1)
	}), new x(L(483), function() {
		u.v(18)
	}), new x(L(434), function() {
		u.v(31)
	}), new x(L(484), function() {
		u.z.a72(2)
	}), new x(L(450), function() {
		aV7(1)
	}), new x("🔒 " + L(442), function() {
		u.v(32)
	}), new x(L(485), function() {
		var a5V, sO;
		(a5V = []).push(["Wiki", (sO = "https://territorial.io/") + "wiki/gold"]), a5V.push(["Team Games", sO + "log/team"]), a5V.push(["Battle Royale Games", sO + "log/br"]), a5V.push(["1v1 Games", sO + "log/1v1"]), a5V.push([
			"Zombie Games", sO + "log/zombies"
		]), a5V.push(["Transactions", sO + "log/transactions"]), a5V.push(["Changelog", sO + "changelog"]), 2 !== a1.id && a5V.push(["Android App", bN.aEv]), 1 !== a1.id && a5V.push(["iOS App", bN.a3L]), 0 === a1.id && a5V.push([
			"Patreon", bN.aRc
		]), a5V.push(["Terms", bN.aVD]), a5V.push(["Privacy", bN.aVE]), u.v(4, 1, new w(L(485), bD.sK.a5U(a5V), !1, [new x("⬅️ " + L(40), function() {
			u.v(1)
		})]))
	}), new x(L(486), function() {
		u.v(4, 1, new w(L(486), m.e3 + "<br>" + b1.z.aQm("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(40),
				function() {
					u.v(1)
				})]))
	}), new x(L(487), function() {
		u.v(4, 1, new w(L(487), L(494) + "<br>" + L(495), !1, [new x("⬅️ " + L(40), function() {
			u.v(1)
		}), new x(L(496), function() {
			a1.a2.a3F(), u.v(1)
		})]))
	}), new x("👁️ " + L(488), function() {
		a1.a2.a3G(), u.v(4, 1, new w(L(497), L(498) + " " + b1.z.aQm("/privacy"), !1, [new x("⬅️ " + L(40), function() {
			u.v(1)
		})]))
	})], wd = [new x("⬅️ " + L(40), function() {
		u.z.aEb()
	})], 8 === ab.a3P() && (aTl.unshift(new x(L(355), function() {
		u.v(30)
	})), aTl.unshift(new x(L(491), function() {
		2 <= bg.aVC && (u.y(), bh.a4N(), bi.ds = !0)
	}, 0, 1)), aTl.unshift(new x(L(492), function() {
		!aE.hi && aN.rv(aE.fJ) && (bB.hz.r8(), u.y(), aN.hj) && aN.a4N()
	}, 0, 1)), aTl.unshift(new x(L(493), function() {
		!aE.hi && ax.iO(aE.fJ) && (bY.a7e(2), bB.hz.iK(), u.y(), aN.hj) && aN.a4N()
	}, 0, 1))), 1 === a1.id && 5 <= a1.e3 && aTl.push(new x(L(489), function() {
		a1.a2.a3H()
	})), aQN = new wc(L(490), wd), aTk = new ss(aTl, aQN.wi)
}

function aQG() {
	var aRe, aRf, aRg, sF;

	function aRh() {
		aRj(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aQM()[19] = null, u.a3O()
	}

	function aRj() {
		2 === aE.data.sResourcesType && bD.sS.a4v(aRg.x7(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aRe.show(), this.resize()
	}, this.tZ = function() {
		aRe.tZ()
	}, this.resize = function() {
		aRe.resize(), aRf.resize()
	}, this.a4K = function(ej) {
		2 === ej && aRe.wj[0].sb()
	}, aRe = new wc(L(350), [new x("⬅️ " + L(40), aRh)]), aRf = new sD(aRe.wi, (function(sF) {
		var aQl = new rx;
		aQl.s0(L(307)), aQl.s8(new wY({
			oM: [L(308), L(309), L(310)],
			value: aE.data.sResourcesType
		}, function(eI) {
			aRj(), 2 !== eI || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fW)), aE.data.sResourcesType = eI, u.v(28)
		})), sF.push(aQl)
	}(sF = []), function(sF) {
		var aQl;
		1 === aE.data.sResourcesType && ((aQl = new rx).s0("Value"), aQl.sB(new t7({
			eI: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.ij(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), sF.push(aQl))
	}(sF), function(sF) {
		var aQl;
		2 === aE.data.sResourcesType && ((aQl = new rx).s0("Data"), (aRg = new x0(0, 1, 0, 1)).x6(bD.tI.a6S(aE.data.sResourcesData, 2)), aQl.sB(aRg), sF.push(aQl))
	}(sF), sF))
}

function aQE() {
	var aRe, aRf, aRg, sF;

	function aRh() {
		aRj(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aQM()[19] = null, u.a3O()
	}

	function aRj() {
		2 === aE.data.tIncomeType && bD.sS.a4v(aRg.x7(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aRe.show(), this.resize()
	}, this.tZ = function() {
		aRe.tZ()
	}, this.resize = function() {
		aRe.resize(), aRf.resize()
	}, this.a4K = function(ej) {
		2 === ej && aRe.wj[0].sb()
	}, aRe = new wc(L(348), [new x("⬅️ " + L(40), aRh)]), aRf = new sD(aRe.wi, (function(sF) {
		var aQl = new rx;
		aQl.s0(L(307)), aQl.s8(new wY({
			oM: [L(308), L(309), L(310)],
			value: aE.data.tIncomeType
		}, function(eI) {
			aRj(), 2 !== eI || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fW), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eI, u.v(26)
		})), sF.push(aQl)
	}(sF = []), function(sF) {
		var aQl;
		1 === aE.data.tIncomeType && ((aQl = new rx).s0("Value"), aQl.sB(new t7({
			eI: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ij(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), sF.push(aQl))
	}(sF), function(sF) {
		var aQl;
		2 === aE.data.tIncomeType && ((aQl = new rx).s0("Data"), (aRg = new x0(0, 1, 0, 1)).x6(bD.tI.a6S(aE.data.tIncomeData, 4)), aQl.sB(aRg), sF.push(aQl))
	}(sF), sF))
}

function aQ6() {
	var aQN, aQO, sF;
	this.show = function() {
		aQN.show(), this.resize()
	}, this.tZ = function() {
		aQN.tZ()
	}, this.resize = function() {
		aQN.resize(), aQO.resize()
	}, this.a4K = function(ej) {
		2 === ej && aQN.wj[0].sb()
	}, aQN = new wc(L(483), [new x("⬅️ " + L(40), function() {
		u.a3O()
	})]), aQO = new sD(aQN.wi, ((sF = []).push(function() {
		function aQs() {
			aUo.button.textContent = L(185), aVH.e.readOnly = !1, aVI.e.readOnly = !1, aQr.se(1), aQr.button.style.color = bE.pO
		}
		var aQl = new rx,
			aVG = (aQl.s6(b1.z.aQm("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", aQl.s0(L(499)), new t7({
				value: bm.buffer.data[105].value,
				eI: -1
			})),
			aVH = (aVG.e.readOnly = !0, aQl.sB(aVG), aQl.s0(L(394), "0.8em"), new t7(bm.buffer.data[148], 0, void 0, function(e) {
				aQq(bm.buffer.data[149].value, e.target.value)
			})),
			aVI = (aQl.sB(aVH), aQl.s0(L(398), "0.8em"), new t7(bm.buffer.data[149], 1, void 0, function(e) {
				aQq(e.target.value, bm.buffer.data[148].value)
			})),
			aUo = (aQl.sB(aVI), new x(L(185), function(e) {
				return e.textContent === L(185) ? (e.textContent = L(186), aVH.e.readOnly = !0, aVI.e.readOnly = !0, aQr.se(0), aQr.button.style.color = bE.qN, bm.qo.qp(149, aVI.e.value), aQq(bm.buffer.data[149].value, bm
					.buffer.data[148].value)) : aQs(), !0
			})),
			aQr = (aQl.sB(new tl([aUo.button])), new x(L(14), function(e) {
				return aVH.e.readOnly && b1.z.ef(0) && (bD.sK.wV(e), aQs(), b1.aHS.aHT({
					action: 0,
					uY: bm.buffer.data[148].value,
					value: parseInt(bm.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			s3 = aQl.s2(),
			aQq = (aQl.s2(L(500)).style.fontWeight = "bold", function(g1, s1) {
				s3.innerHTML = u.z.aQu(g1, bm.buffer.data[105].value, s1)
			});
		return aQl.sB(new tl([aQr.button])), aQq(bm.buffer.data[149].value, bm.buffer.data[148].value), aQl
	}()), sF))
}

function c0() {
	"function" != typeof Math.log2 && (Math.log2 = function(fg) {
		return Math.log(fg) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fg) {
		return Math.log(fg) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fg) {
		return 0 < fg ? 1 : fg < 0 ? -1 : 0
	})
}

function cm() {
	var aBb, aVK, aVL, aVM, aVJ = !1;

	function aVN() {
		aVJ = !0, aBb = -1, aVK = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aVK[aC] = !1;
		var zd = Math.floor(1 + .02 * i.min);
		aVL = new Array(4), (aVM = new Array(4))[1] = aVM[3] = aVL[0] = aVL[2] = 0, aVM[0] = aVL[3] = -zd, aVL[1] = aVM[2] = zd
	}

	function aVO() {
		if (-1 !== aBb)
			if (0 !== aE.a2G && aI.oD()) {
				for (var aVP = !1, aC = 3; 0 <= aC; aC--) aVK[aC] && (aVP = !0, jD += aVL[aC], jE += aVM[aC], ag.a3m(aVL[aC], aVM[aC]), aT.aBH());
				aVP ? bi.ds = !0 : at.o3()
			} else at.o3()
	}
	this.a4I = function(eI) {
		0 !== aE.a2G && aI.oD() && (aVJ || aVN(), aVK[eI] = !0, -1 === aBb) && (aBb = setInterval(aVO, 20), aVO())
	}, this.a4L = function(eI) {
		if (0 !== aE.a2G && (aVJ || aVN(), aVK[eI] = !1, -1 !== aBb)) {
			for (var aVP = !1, aC = 3; 0 <= aC; aC--) aVP = aVP || aVK[aC];
			aVP || this.o3()
		}
	}, this.o3 = function() {
		if (aVJ && -1 !== aBb) {
			for (var aC = 3; 0 <= aC; aC--) aVK[aC] = !1;
			clearInterval(aBb), aBb = -1
		}
	}
}

function cn() {
	this.z = new aVQ, this.nC = new aVR, this.qm = new aVS, this.aGx = new aVT, this.eg = new aVU, this.aHS = new aVV, this.rR = new aVW, this.aT2 = new aVX, this.a8o = new aVY, this.aVZ = new aVa, this.aVb = new aVc, this.aVd = new aVe, this.aVf =
		new aVg, this.dk = function() {
			this.z.dk()
		}
}

function aVQ() {
	var aVi, aVj;
	this.aIQ = 4, this.aVh = null, this.a3X = 0, this.f7 = 0;

	function aVs() {
		return 0 === aa.aIM ? m.e5 ? 1 : 0 : aa.aIM - 1
	}

	function aVv(oN, a3U, aVu) {
		aVj[oN].aVJ = !0, aVo(oN), aVi[oN] = new aVy, aVi[oN].dk(oN, a3U, aVu)
	}

	function aVw(aC) {
		return aVj[aC].aVJ && aVi[aC].aVw()
	}

	function aVo(oN) {
		aVj[oN].eZ = bi.eZ, aVj[oN].aVl = !1
	}
	this.dk = function() {
		this.aVh = new Array(this.aIQ), this.aVh[0] = "territorial.io", this.aVh[1] = "1.territorial.io", this.aVh[2] = "4.territorial.io", this.aVh[3] = "5.territorial.io", aVi = new Array(this.aIQ), aVj = new Array(this.aIQ);
		for (var aC = this.aIQ - 1; 0 <= aC; aC--) aVj[aC] = {
			aVJ: !1,
			eZ: 0,
			aVl: !1
		};
		this.aIR(0, 0, 0)
	}, this.aVm = function(aC) {
		return aVi[aC]
	}, this.ee = function() {
		for (var aC = this.aIQ - 1; 0 <= aC; aC--) this.ef(aC) && bi.eZ > aVj[aC].eZ + 15e3 && (b1.qm.aVn(aC, aVj[aC].aVl), aVo(aC));
		!this.ef(0) && bi.eZ > aVj[0].eZ + 8e3 && (aVj[0].eZ = bi.eZ, this.aIR(0, 0, 0))
	}, this.aSz = function(id) {
		return this.aIR(0, id, 0) && this.aVp(0)
	}, this.aVq = function(aVr) {
		return aVr ? aa.aIN : aVs()
	}, this.a2g = function() {
		return aVs() ? "game.territorial.io" : "territorial.io"
	}, this.aQm = function(aVt) {
		aVt = this.a2g() + aVt;
		return "<a href='https://" + aVt + "' target='_blank'>" + aVt + "</a>"
	}, this.aIR = function(oN, a3U, aVr) {
		aVr = this.aVq(aVr);
		if (aVj[oN].aVJ) {
			if (aVi[oN].aVw()) return aVi[oN].aVx(a3U), aVi[oN].ef();
			aVi[oN].tZ()
		}
		return aVv(oN, a3U, aVr), !1
	}, this.aVz = function(oN, a3U) {
		console.log("Connection to Server " + oN), b1.eg.aW0(oN)
	}, this.aVp = function(aC) {
		return this.ef(aC) && aVi[aC].aVp()
	}, this.aW1 = function(aC) {
		aVi[aC].aW1()
	}, this.ef = function(aC) {
		return aVj[aC].aVJ && aVi[aC].ef()
	}, this.send = function(oN, aD) {
		0 !== oN && aVo(oN), aVi[oN].send(aD)
	}, __fx.customLobby.setSendFunction(this.send), this.a43 = function(oN) {
		8 === ab.a3P() && (aVj[oN].aVl = !0, b1.nC.aW2 = !0)
	}, this.close = function(oN, aW3) {
		aVw(oN) && aVi[oN].close(aW3)
	}, this.aW4 = function(oN, aW3) {
		p.a3b(aW3), aVw(oN) && aVi[oN].close(aW3)
	}, this.a3c = function(aW3) {
		for (var aC = this.aIQ - 1; 0 <= aC; aC--) this.close(aC, aW3)
	}, this.aW5 = function(oN, aW3) {
		for (var aC = this.aIQ - 1; 0 <= aC; aC--) aC !== oN && this.close(aC, aW3)
	}, this.a70 = function() {
		0 === this.a3X && (aE.lE || aE.hi) || this.close(this.a3X, 3246)
	}, this.aW6 = function(oN, e) {
		aVi[oN].tZ(), p.a3M(oN, e.code)
	}
}

function aVR() {
	this.aW2 = !1, this.ee = function() {
		bi.kr() % 250 != 249 || aE.hi || (b1.eg.aW7(+(this.aW2 && ah.nU[aE.fJ]), am.lQ + bQ.z.mk), this.aW2 = !1)
	}
}

function aVY() {
	this.aW9 = function(oN, aD) {
		bK.dk(aD), 0 === bK.size ? b1.z.aW4(oN, 3205) : __fx.customLobby.isCustomMessage(aD) || ((0 === bK.rS(1) ? function(oN) {
			var aWD = bK.rS(6);
			0 === aWD ? function(oN) {
					if (0 === oN && 8 !== ab.a3P()) {
						u.z.aUS();
						for (var aWT = bK.rS(12), aWU = bK.rS(6), h = new Array(aWT), aC = 0; aC < aWT; aC++) h[aC] = bK.rS(aWU);
						aU.aBh(h)
					}
				}(oN) : 2 === aWD ? b1.aVZ.aWF(oN) : 3 === aWD || 4 === aWD ? ay.dk() : 5 === aWD ? b1.aVb.aWG() : 9 === aWD ? b1.aVb.aWH(oN) : 10 === aWD ? b1.aVd.aWI() : 11 === aWD ? b1.aVb.aWJ(oN) : 12 === aWD ? b1.aVd.aWK() :
				13 === aWD ? b1.aVf.aWL() : 14 === aWD ? b1.aVf.aWM() : 15 === aWD ? b1.aVb.aWN() : 16 === aWD ? b1.aVZ.aWO(oN) : 17 === aWD ? b1.aVZ.aWP(oN) : 19 === aWD ? b1.aVZ.aWQ(oN) : 20 === aWD ? b1.aVb.aWR(oN) : 21 !== aWD &&
				22 !== aWD && 23 === aWD && b1.aVb.aWS(oN)
		} : function(oN) {
			if (8 !== ab.a3P() && !ay.aIu()) return;
			if (oN !== b1.z.a3X) b1.z.aW4(oN, 3244);
			else if (0 === bK.rS(1)) bi.a2Q.aWV(bK.aD);
			else {
				var aC, oN = bK.rS(2);
				if (0 === oN) {
					var r3, qm = bK.rS(9);
					0 !== ah.nU[qm] && 0 !== ah.nU[aE.fJ] && (r3 = bK.rS(10), aO.r2(qm, aE.fJ, r3), ag.rt(qm, 1, r3))
				} else if (1 === oN) ! function() {
					var qm = bK.rS(9);
					0 !== ah.nU[qm] && 0 !== ah.nU[aE.fJ] && b6.aNJ(0, [qm], !0) && aO.rK(qm, 1)
				}();
				else if (2 === oN) ! function() {
					var qm = bK.rS(9),
						target = bK.rS(9);
					0 !== ah.nU[qm] && 0 !== ah.nU[target] && 0 !== ah.nU[aE.fJ] && b6.aNJ(1, [qm], !0) && (ag.rt(qm, 3, 96), ag.rt(target, 4, 96), aO.a8u(qm, target))
				}();
				else if (m.aA && !m.aB) {
					var fZ = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fZ = Math.min(bB.qi.rU.length, 540), aC = 0; aC < fZ; aC++) bG.aWb(32, bB.qi.rU[aC]);
					b1.z.send(b1.z.a3X, bG.aD)
				}
			}
		})(oN), bi.aWC())
	}
}

function aVe() {
	this.aWI = function() {
		bm.z.xm(), bm.qo.qp(105, bI.f0.uc(bI.f0.ud(5))), bm.qo.qp(106, bI.f0.uc(bI.f0.ud(15))), bm.qo.qp(109, 0), bm.qo.qp(108, bm.buffer.data[109].value), bm.qo.qp(111, bm.buffer.data[109].value + 1), bm.qo.qp(107, 0), bm.qo.qp(110, "")
	}, this.aWK = function() {
		var data;
		bK.size < bG.aWc(29) ? b1.z.aW4(0, 3254) : ((data = {
			uZ: bK.rS(30),
			y0: bK.rS(16),
			y1: bK.rS(30),
			y2: bK.rS(30),
			y3: bK.rS(30),
			y4: bK.aWd(32),
			username: bJ.yH.yY(5),
			y5: bJ.yH.yY(3),
			y6: bJ.yH.yY(3),
			y7: bK.aWd(32),
			y8: bK.aWd(32),
			y9: bK.rS(30),
			yA: bK.aWd(32),
			yB: bK.aWd(32),
			yC: bK.aWd(32),
			yD: bK.aWd(32),
			aR4: bK.aWd(32),
			aR5: bK.aWd(30),
			aRU: bK.aWd(32),
			aRV: bJ.yH.yY(3),
			aRO: bK.aWd(2),
			aRQ: bK.aWd(10),
			aRM: bJ.yH.yY(8),
			aRP: bK.aWd(5),
			aQo: bK.rS(30),
			aR1: bK.rS(30),
			a2j: bK.aWd(32),
			aR9: bK.rS(3),
			aR8: bK.rS(8),
			aR2: bK.rS(30),
			aR3: bK.aWd(32),
			aR7: bK.rS(1),
			aRI: bJ.yH.yY(6),
			aRA: bK.rS(1),
			aRB: bK.rS(1),
			aRC: bK.rS(1),
			aQw: bK.rS(30),
			aRW: bK.rS(1),
			aRX: bK.rS(1)
		}).aRW && (data.aRY = bK.aWd(32), data.aRZ = bK.rS(30), data.aRa = bK.rS(30), data.aRb = bK.rS(1)), 8 === u.ua && (25 === u.a3T().aSy ? (data.aQP = !0, u.z.aQ3 = data, u.a3T().aEa(25, !1)) : (data.aQP = !1, bm.qo.qp(160, +(data
			.aRW && data.aRb)), data.uY = bm.buffer.data[105].value, u.z.aQ0 = data, bm.qo.xz(data), u.a3T().aEa(16, !0))))
	}
}

function aVg() {
	this.aWL = function() {
		var aC;
		if (bK.size < bG.aWc(23)) b1.z.aW4(0, 3259);
		else {
			var ur = bK.rS(6),
				fZ = bK.rS(10),
				data = [];
			if (9 === ur || 10 === ur || 11 === ur || 13 === ur) {
				for (aC = 0; aC < fZ; aC++) data.push([bK.rS(30), bJ.yH.yY(5), bK.aWd(32), 0, bK.rS(30)]);
				8 === u.ua && u.a3T().aEa(21, !0, {
					ur: ur,
					data: data
				})
			} else if (12 === ur) {
				for (aC = 0; aC < fZ; aC++) data.push([bK.rS(20), bK.rS(30), bK.rS(30), bK.aWd(32), bK.rS(30), bJ.yH.yY(5), bJ.yH.yY(5)]);
				8 === u.ua && u.a3T().aEa(21, !0, {
					ur: ur,
					data: data
				})
			} else {
				var iW = bK.rS(16);
				if (bK.aWe(39 + 16 * iW + fZ * (0 === ur ? 111 : 1 === ur ? 101 : 2 === ur || 3 === ur ? 127 : 212))) {
					if (0 === ur)
						for (aC = 0; aC < fZ; aC++) data.push([bK.rS(30), bJ.yF.yJ(bK.rS(5)), bK.rS(16), bK.rS(30), bK.rS(30)]);
					else if (1 === ur)
						for (aC = 0; aC < fZ; aC++) data.push([bK.rS(16), bJ.yF.yJ(bK.rS(3)), bK.rS(16), bJ.yF.yJ(bK.rS(5)), bK.rS(31), bK.rS(30)]);
					else if (2 === ur || 3 === ur)
						for (aC = 0; aC < fZ; aC++) data.push([bK.rS(30), bJ.yF.yJ(bK.rS(5)), bK.aWd(32), bK.rS(30), bK.rS(30)]);
					else
						for (aC = 0; aC < fZ; aC++) data.push([bK.rS(20), bK.rS(30), bK.rS(30), bK.rS(30), bK.rS(30), bK.aWd(32), bK.rS(30), bJ.yF.yJ(bK.rS(5)), bJ.yF.yJ(bK.rS(5))]);
					8 === u.ua && u.a3T().aEa(21, !0, {
						ur: ur,
						data: data
					})
				} else b1.z.aW4(0, 3260)
			}
		}
	}, this.aWM = function() {
		if (bK.size < bG.aWc(29)) b1.z.aW4(0, 3265);
		else {
			var aWf = bK.rS(4),
				aWg = bK.rS(7),
				aWh = bK.rS(11);
			if (bK.aWe(29 + 16 * aWg + 16 * aWh + 11 * aWf)) {
				for (var data = [], aC = 0; aC < aWf; aC++) {
					for (var a2y = bJ.yF.yJ(bK.rS(3)), aWi = bK.rS(8), aS8 = [], fs = 0; fs < aWi; fs++) aS8.push(bK.rS(16));
					data.push({
						name: "[" + a2y + "]",
						aS8: aS8
					})
				}
				8 === u.ua && u.a3T().aEa(23, !0, data)
			} else b1.z.aW4(0, 3266)
		}
	}
}

function aVa() {
	function aWk() {
		var id = bK.rS(3);
		return 0 === id ? {
			id: id,
			uY: bK.rS(30),
			s: bq.aF1.aH2(bJ.yH.yY(7))
		} : 1 === id ? {
			id: id,
			uY: bK.rS(30),
			aG4: bK.rS(3),
			value: bK.rS(30),
			target: bK.rS(30)
		} : 2 === id ? {
			id: id,
			uY: bK.rS(30),
			aG4: bK.rS(3)
		} : 3 === id ? {
			id: id,
			uY: bK.rS(30),
			aG4: bK.rS(3),
			value: bK.rS(4),
			target: bK.rS(30)
		} : 4 === id ? {
			id: id,
			uY: bK.rS(30),
			aG4: bK.rS(3),
			target: bK.rS(30)
		} : 5 === id ? {
			id: id,
			aG4: bK.rS(6)
		} : 6 === id ? {
			id: id,
			value: bK.rS(17)
		} : null
	}
	this.aWF = function(oN) {
		if (oN !== b1.z.f7) b1.z.close(oN, 3239);
		else if (6 !== ab.a3P()) b1.z.close(oN, 3271);
		else {
			bq.dk();
			for (var aC = 0; aC < 4; aC++) {
				var tN = bq.z.tO[aC],
					playerCount = (tN.vP = bK.rS(10), tN.fF = bK.rS(6), tN.mapSeed = bK.rS(14), tN.aFp = bK.rS(4), tN.aHY = bK.rS(6), tN.aHZ = bK.rS(14), tN.aHa = bK.rS(4), tN.aFv = bK.rS(1), tN.aGd = bK.rS(12), tN.spawningSeed = bK.rS(14), bK
						.rS(16));
				bq.vg.vi[aC] = bK.rS(16);
				for (var fs = 0; fs < playerCount; fs++) bq.vg.aFF(aC, bK.rS(30), bJ.yH.yY(5), bK.rS(4), bK.rS(30), bK.rS(7), bK.rS(16), bK.rS(18), bK.rS(11), bK.rS(12), bK.rS(6))
			}
			u.v(29), bq.z.aGV(!0)
		}
	}, this.aWO = function(oN) {
		if (oN !== b1.z.f7) b1.z.close(oN, 3239);
		else if (bq.f6) {
			bq.z.aGT[0] = bK.rS(20), bq.z.aGT[1] = bK.rS(20);
			for (var aWj = bK.rS(16), fs = 0; fs < aWj; fs++) {
				var id = bK.rS(3);
				0 === id ? bq.vg.aFF(bK.rS(2), bK.rS(30), bJ.yH.yY(5), 0, 1234566, 127, 0, bK.rS(18), 0, bK.rS(12), 0) : 1 === id ? bq.vg.aFa(bK.rS(16), bK.rS(2)) : 2 === id ? bq.vg.aFW(bK.rS(16), bK.rS(2), bK.rS(2)) : 3 === id ? bq.vg.aFZ(bK.rS(
					16), bK.rS(2)) : 4 === id ? bq.vg.aFO(bK.rS(16), bK.rS(2), bK.rS(4), bK.rS(30), bK.rS(7), bK.rS(16), bK.rS(11), bK.rS(18)) : 5 === id ? bq.vg.aFQ(bK.rS(16), bK.rS(2), bK.rS(1)) : 6 === id && bq.vg.aFP(bK.rS(16), bK.rS(2),
					bK.rS(6))
			}
			for (var aC = 0; aC < 4; aC++) {
				var tN = bq.z.tO[aC];
				if (tN.vP = bK.rS(10), tN.aHY = bK.rS(6), tN.aHZ = bK.rS(14), tN.aHa = bK.rS(4), 0 === tN.vP) {
					if (tN.a3X = bK.rS(10), tN.aFt = bK.rS(10), bq.aF3.dt(aC)) return;
					tN.fF = bK.rS(6), tN.mapSeed = bK.rS(14), tN.aFp = bK.rS(4), tN.aFv = bK.rS(1), tN.aGd = bK.rS(12), tN.spawningSeed = bK.rS(14), tN.aHb.push(tN.aHb[0]), tN.aHb.shift()
				}
			}
			bq.z.aFl()
		} else b1.z.close(oN, 3251)
	}, this.aWP = function(oN) {
		if (oN !== b1.z.f7) b1.z.close(oN, 3272);
		else if (bq.f6) {
			for (var tL = bK.rS(4), tN = bq.z.tO[tL], tP = tN.tP, vw = (tN.tQ = bK.rS(20), bK.rS(6)), aC = 0; aC < vw; aC++) {
				var aHs = aWk();
				bq.tY.aHr(aHs), tP.push(aHs)
			}
			bq.z.aGe(tL)
		} else b1.z.close(oN, 3273)
	}, this.aWQ = function(oN) {
		oN !== b1.z.f7 ? b1.z.close(oN, 3276) : bq.f6 ? bq.message.aFj(aWk()) : b1.z.close(oN, 3277)
	}
}

function aVc() {
	this.aWG = function() {
		for (var id = bK.rS(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.rS(8), bK.rS(8), bK.rS(8)]);
		var el = bJ.yH.yY(8);
		bX.eS.ei({
			id: id,
			colors: colors,
			el: el
		})
	}, this.aWR = function(oN) {
		var aWl = bK.rS(3),
			fc = bK.rS(5),
			fc = bl.aWm.aWn(fc, bK.rS(30), bK.rS(30), bK.rS(30));
		b1.eg.aWo(oN, fc, aWl, 0)
	}, this.aWH = function(oN) {
		this.aWR(oN), bm.qo.qp(183, bI.f0.uc(bI.f0.ud(15))), 0 === oN && 0 === bm.buffer.data[105].value.length ? b1.eg.eh(0) : b1.aHS.aWp(oN), 4 === b1.z.aVm(oN).aWq() ? 6 === ab.a3P() && b1.aGx.aIS(oN) : 5 !== b1.z.aVm(oN).aWq() || 8 !== ab
			.a3P() && 10 !== ab.a3P() || b1.qm.aIr()
	}, this.aWJ = function(oN) {
		var id = bK.rS(6);
		1 === id ? (bm.qo.qp(160, bK.rS(30)), b1.z.aW1(oN), aU.aBd || b1.eg.eh(1), bA.aEW(), 8 === u.ua && u.a3T().aTB()) : 21 === id ? 8 === u.ua && u.a3T().aEa(17) : 22 === id && (bm.qo.qp(106, bm.buffer.data[110].value), bm.qo.qp(110, ""),
			8 === u.ua) && u.a3T().aEa(15)
	}, this.aWN = function() {
		var fZ = bK.rS(16),
			aWr = bK.rS(16);
		if (bK.aWe(55 + 10 * fZ + 16 * aWr)) {
			for (var h = [], aC = 0; aC < fZ; aC++) h.push(bJ.yF.yJ(bK.rS(10)));
			bA.aEZ(h)
		} else b1.z.aW4(0, 3270)
	}, this.aWS = function(oN) {
		for (var aWl = bK.rS(3), fc = bK.rS(5), aWl = {
				aWl: aWl,
				sq: bl.aWm.aWn(fc, bK.rS(30), bK.rS(30), bK.rS(30))
			}, fc = bK.aWd(32), aWs = [], aC = 0; aC < 17; aC++) aWs.push(new Uint8Array(bK.rS(16)));
		for (aC = 0; aC < 17; aC++)
			for (var h = aWs[aC], fZ = h.length, iR = 0; iR < fZ; iR++) h[iR] = bK.aWd(8);
		bw.show(aWs, fc, oN, aWl)
	}
}

function aVS() {
	this.aVn = function(oN, aVl) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, aVl ? 1 : 0), bG.a9(3, 0 === aE.a2G ? bq.f6 ? 6 : 0 : aE.hi ? 1 : aE.lE ? 7 : aE.lC < 7 ? 2 : 8 === aE.lC ? 4 : 9 === aE.lC ? 5 : 3), b1.z.send(oN, bG.aD)
	}, this.aIr = function() {
		bG.a8(58), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.f7), bG.a9(10, ay.aFt), bG.a9(9, ay.aIk), bG.a9(10, m.e7), bG.a9(14, m.dx), b1.z.send(b1.z.a3X, bG.aD)
	}, this.qn = function(fL) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fL), b1.z.send(b1.z.a3X, bG.aD)
	}, this.qq = function(jC, k3) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, jC), bG.a9(10, k3), b1.z.send(b1.z.a3X, bG.aD)
	}, this.qu = function(jC, qs) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, jC), bG.a9(9, qs), b1.z.send(b1.z.a3X, bG.aD)
	}, this.qw = function(jC, qv) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, jC), bG.a9(27, qv), b1.z.send(b1.z.a3X, bG.aD)
	}, this.qy = function(jC, ns) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, jC), bG.a9(16, ns), b1.z.send(b1.z.a3X, bG.aD)
	}, this.r1 = function(k3) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, k3), b1.z.send(b1.z.a3X, bG.aD)
	}, this.r5 = function(eI) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eI), b1.z.send(b1.z.a3X, bG.aD)
	}, this.r7 = function(r6) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, r6), b1.z.send(b1.z.a3X, bG.aD)
	}, this.r9 = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a3X, bG.aD)
	}, this.rA = function(jC, fL, k3) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, jC), bG.a9(10, k3), bG.a9(22, fL), b1.z.send(b1.z.a3X, bG.aD)
	}, this.rI = function(aWt, aWu) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, aWu), bG.a9(10, aWt), b1.z.send(b1.z.a3X, bG.aD)
	}, this.rL = function(a8o) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, a8o), b1.z.send(b1.z.a3X, bG.aD)
	}, this.rP = function(aWv, target) {
		var aC, fZ = aWv.length;
		for (bG.a8(14 + 9 * fZ), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fZ; aC++) bG.a9(9, aWv[aC]);
		b1.z.send(b1.z.a3X, bG.aD)
	}
}

function aVV() {
	this.aWw = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.eg.aWx(), b1.z.send(0, bG.aD)
	}, this.aWp = function(oN) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.f0.yV(bm.buffer.data[105].value, 5), bJ.f0.yV(bm.buffer.data[106].value, 15), b1.z.send(oN, bG.aD)
	}, this.aTC = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.f0.yV(bm.buffer.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aRK = function(a65) {
		var fZ = a65.s1.length;
		bG.a8(21 + 16 * fZ), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a65.action), bG.a9(8, fZ), bI.yF.yU(a65.s1), b1.z.send(0, bG.aD)
	}, this.aUp = function(y4, colors, aWz, el) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(y4, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var fs = 0; fs < 3; fs++) bH.a9(8, colors[aC][fs]);
		y4 = bA.data.aEd(aWz.trim());
		bH.a9(8, -1 === y4 ? 255 : y4), bI.yH.a1i(el.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.aX0())
	}, this.aQx = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.f0.yV(data.uY, 5), b1.z.send(0, bG.aD)
	}, this.aHT = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.f0.yV(data.uY, 5), bG.aWb(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aVW() {
	this.rQ = function() {
		for (var fZ = aE.ku, a25 = bU.result.a25, lp = a25.length, a2r = (bG.a8(17 + 16 * fZ + 33 * lp), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, lp), bG.a9(1, +(2 === aE.a2D)), bG.a9(1, aE.a2Y % 2), ah.a2r), aC = 0; aC < fZ; aC++) bG.a9(16, a2r[
		aC]);
		for (var hN = ah.hN, aC = 0; aC < lp; aC++) {
			var h7 = a25[aC];
			bG.a9(9, h7), bG.a9(24, hN[h7])
		}
		b1.z.send(b1.z.a3X, bG.aD)
	}
}

function aVX() {
	this.aT3 = function(ur, us, ut) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, ur), bG.a9(1, +(us < 0)), bG.a9(1, +(ut < 0)), bG.a9(30, Math.abs(us)), bG.a9(30, Math.abs(ut)), b1.z.send(0, bG.aD)
	}, this.aT4 = function(ur, aT5, aT6) {
		bG.a8(18 + 16 * aT5.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, ur), b1.eg.aX1(aT5), bG.a9(30, aT6), b1.z.send(0, bG.aD)
	}, this.aT9 = function(ur, aT5, aT6) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, ur), bJ.f0.yV(aT5, 5), bG.a9(30, aT6), b1.z.send(0, bG.aD)
	}, this.aT7 = function(aS7, a2x) {
		for (var fZ = a2x.length, iW = 0, aC = 0; aC < fZ; aC++) iW += a2x[aC].length;
		for (bG.a8(21 + 3 * fZ + 16 * iW), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aS7), bG.a9(4, fZ), bG.a9(7, iW), aC = 0; aC < fZ; aC++) bG.a9(3, a2x[aC].length), bI.yF.yU(a2x[aC]);
		b1.z.send(0, bG.aD)
	}, this.aT8 = function(aS7, us, ut) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aS7), bG.a9(1, +(us < 0)), bG.a9(1, +(ut < 0)), bG.a9(20, Math.abs(us)), bG.a9(20, Math.abs(ut)), b1.z.send(0, bG.aD)
	}
}

function aVT() {
	this.aIS = function(oN) {
		var username = bm.buffer.data[122].value.slice(0, 20),
			username = (bG.a8(24 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.e7), bG.a9(2, bm.buffer.data[158].value), b1.eg.aX1(username), bD.color.a5A(bm.z.xt()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.f7 = oN, b1.z.send(oN, bG.aD)
	}, this.aGy = function(aX2, a65) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, aX2), 2 === aX2 ? bH.a9(2, a65) : 3 === aX2 ? bI.yH.a1i(a65, 7, bH) : 5 === aX2 && (bH.a9(3, a65.id), bH.a9(3, a65.value), bH.a9(30, a65.uY)), b1.z.send(b1.z.f7, bH.aX0())
	}
}

function aVU() {
	this.aW0 = function(oN) {
		var aX9;
		bG.a8(55 + bl.aX3.rS()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.dx), bG.a9(4, a1.id), bG.a9(7, a1.e3), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), aX9 = bA.aEc(), bG.a9(8, aX9[0]), bG.a9(8, aX9[1]), bl.aX3
		.a1i(), b1.z.send(oN, bG.aD)
	}, this.aWo = function(oN, sq, aWl, aX5) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, aWl), bG.a9(30, sq), bG.a9(30, aX5), b1.z.send(oN, bG.aD)
	}, this.f8 = function(f3) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 6), bI.yH.a1i(f3, 16, bH), b1.z.send(b1.z.f7, bH.aX0())
	}, this.eh = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.wC = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aEY = function(id, s1) {
		var fZ = Math.min(s1.length, 63);
		bG.a8(19 + 16 * fZ), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fZ), bI.yF.yU(s1), b1.z.send(0, bG.aD)
	}, this.aX6 = function(aUR, sC) {
		bG.a8(7 + 26 * sC.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < sC.length; aC++) bG.a9(16, sC[aC][0]), bG.a9(10, sC[aC][1]);
		b1.z.send(aUR, bG.aD)
	}, this.aW7 = function(aX7, aX8) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, aX7), bG.a9(12, aX8), b1.z.send(b1.z.a3X, bG.aD)
	}, this.aX1 = function(username) {
		bG.a9(5, username.length), bI.yF.yU(username)
	}, this.p8 = function(p9, pA, oN, pow) {
		bG.a8(88), bG.a9(1, 0), bG.a9(6, 8), bG.a9(3, pow.aWl), bG.a9(30, pow.sq), bG.aWb(32, pA), bG.a9(16, p9), b1.z.send(oN, bG.aD)
	}
}

function aVy() {
	var aXA, aXB, b, aXC = ["wss://", "/s50/", "/s51/", "/s52/"],
		aXD = 0;

	function aVz() {
		b1.z.aVz(aXA, aXB)
	}

	function aXG(e) {
		b1.a8o.aW9(aXA, new Uint8Array(e.data))
	}

	function aXH() {}

	function aW6(e) {
		b1.z.aW6(aXA, e)
	}
	this.dk = function(eI, a3U, aVu) {
		aXA = eI, aXB = a3U,
			function(aVu) {
				aVu = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : m.dy ? "ws://localhost:" + (7130 + aXA) + "/" : aVu ? aXC[0] + "game.territorial.io/x0" + aXA + "/" : aXC[0] + b1.z.aVh[aXA] + aXC[1 + m.dw];
				(b = new WebSocket(aVu)).binaryType = "arraybuffer", b.onopen = aVz, b.onmessage = aXG, b.onclose = aW6, b.onerror = aXH
			}(aVu)
	}, this.aXF = function() {
		return b.readyState === b.CONNECTING
	}, this.ef = function() {
		return b.readyState === b.OPEN
	}, this.aVp = function() {
		return aXD
	}, this.aW1 = function() {
		aXD = 1
	}, this.aVw = function() {
		return this.aXF() || this.ef()
	}, this.aVx = function(a3U) {
		aXB = a3U
	}, this.aWq = function() {
		return aXB
	}, this.send = function(aD) {
		this.ef() && b.send(aD)
	}, this.close = function(aW3) {
		this.aVw() && (this.tZ(), b.close(aW3))
	}, this.tZ = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dQ() {
	var gap, aXI = !1,
		aXJ = 0,
		j = 0,
		uf = 0,
		canvas = null,
		ou = null,
		a4k = null;

	function aXN() {
		for (var aC = aE.zS; 0 <= aC; aC--) a4k[aC] = 0;
		for (aC = am.lQ - 1; 0 <= aC; aC--) a4k[bj.fX[am.lV[aC]]] += ah.hN[am.lV[aC]];
		aXI = !0
	}

	function aXL() {
		for (var aXS, aXQ = 0, fZ = 0, ej = Math.floor(j / 2), eH = Math.floor(uf / 2), aXR = 1.5 * Math.PI, aC = aE.zS; 0 <= aC; aC--) fZ += a4k[aC], 0 === a4k[aC] && aXQ++;
		if (aXI = !1, ou.clearRect(0, 0, j, j), 0 < fZ)
			if (aXQ === aE.zS) {
				for (aC = aE.zS; 0 <= aC; aC--)
					if (0 < a4k[aC]) {
						! function(aC, ej, eH) {
							ou.fillStyle = bj.aXZ[bj.lH[aC]], ou.beginPath(), ou.arc(ej, ej, eH, 0, 2 * Math.PI), ou.fill()
						}(aC, ej, eH);
						break
					}!
				function(ej) {
					var fontSize = ej / 3;
					ou.font = bD.sK.u8(1, fontSize), ou.fillStyle = bE.pO, ou.fillText("100%", ej, ej + .1 * fontSize)
				}(ej)
			} else {
				for (aC = 0; aC <= aE.zS; aC++) 0 < a4k[aC] && (! function(aC, ej, eH, aXR, aXS) {
					ou.fillStyle = bj.aXZ[bj.lH[aC]], ou.beginPath(), ou.arc(ej, ej, eH, aXR, aXS), ou.lineTo(ej, ej), ou.fill()
				}(aC, ej, eH, aXR, aXS = aXR + 2 * Math.PI * a4k[aC] / fZ), function(ej, eH, aXR, aXS) {
					var g1 = (aXS - aXR) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eH * Math.min(g1, .37);
					fontSize < 8 || (aXR = (aXR + aXS) / 2, aXS = (__fx.settings.detailedTeamPercentage ? (100 * g1).toFixed(2) : Math.floor(100 * g1 + .5)) + "%", eH *= .525 - Math.max(.6 * (g1 - .7), 0), ou.font = bD.sK.u8(1, fontSize), ou
						.fillStyle = bE.pO, ou.fillText(aXS, ej + Math.cos(aXR) * eH, ej + Math.cos(aXR + 1.5 * Math.PI) * eH))
				}(ej, eH, aXR, aXS), 0 !== aC && aXX(ej, eH, aXR), aXR = aXS);
				aXX(ej, eH, 1.5 * Math.PI)
			}!
		function(ej, eH) {
			ou.beginPath(), ou.arc(ej, ej, eH, 0, 2 * Math.PI), ou.stroke()
		}(ej, eH)
	}

	function aXX(ej, eH, aXa) {
		ou.beginPath(), ou.moveTo(ej, ej), ou.lineTo(ej + Math.cos(aXa) * eH, ej + Math.cos(aXa + 1.5 * Math.PI) * eH), ou.stroke()
	}
	this.dk = function() {
		if (aE.iT) {
			aXJ = 0, a4k = new Uint32Array(aE.zS + 1);
			for (var aC = aE.zS; 0 <= aC; aC--) a4k[aC] = 0;
			for (aC = am.lQ - 1; 0 <= aC; aC--) a4k[bj.fX[am.lV[aC]]] += 1;
			this.resize()
		} else a4k = ou = canvas = null
	}, this.aAB = function() {
		return j
	}, this.resize = function() {
		aE.iT && (j = Math.floor(.95 * (a1.a2.ik() && !aE.ny ? .18 * i.min : .13 * i.il)), j = (j *= 1 + (.5 + .2 * a1.a2.ik()) * aE.ny) + j % 2, gap = Math.max(1, .015 * j), uf = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (ou = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, ou.strokeStyle = bE.pO, bD.sK.textAlign(ou, 1), bD.sK.textBaseline(ou, 1), aXL())
	}, this.lR = function(aXM) {
		aXM && aXN();
		var ea, aXM = this.lT();
		return bj.lH[aXM] || (aXM = function() {
			for (var lS = -1, aC = aE.zS; 1 <= aC; aC--)(-1 === lS || a4k[aC] > a4k[lS]) && (lS = aC);
			return lS
		}(), ea = ah.hN[mV[0]], -1 !== aXM && a4k[aXM] > ea) ? a4k[aXM] : ea
	}, this.a3A = function() {
		return aXJ = 31, this.ee(), this.lT()
	}, this.lT = function() {
		for (var lS = 0, aC = aE.zS; 0 < aC; aC--) a4k[aC] > a4k[lS] && (lS = aC);
		return lS
	}, this.kv = function(aXP) {
		for (var h2 = 0, lV = am.lV, fX = bj.fX, fZ = am.lQ, gD = bR.gD, aC = 0; aC < fZ; aC++) {
			var h7 = lV[aC];
			fX[h7] === aXP && (gD[h2++] = h7)
		}
		bR.g4[0] = h2
	}, this.lU = function(aXP) {
		for (var h2 = 0, lV = am.lV, fX = bj.fX, fZ = am.lQ, gD = bR.gD, aC = 0; aC < fZ; aC++) {
			var h7 = lV[aC];
			fX[h7] !== aXP && (gD[h2++] = h7)
		}
		bR.g4[0] = h2
	}, this.a5c = function() {
		for (var h2 = 0, aC = aE.zS; 0 <= aC; aC--) h2 += 0 < a4k[aC];
		return h2
	}, this.ee = function() {
		aE.iT && 32 <= ++aXJ && (aXJ = 0, aXN())
	}, this.nH = function() {
		aE.iT && aXI && aXL()
	}, this.wr = function() {
		aE.iT && (aE.ny ? ws.drawImage(canvas, bf.gap, bf.gap) : ws.drawImage(canvas, bf.gap, aAA + 2 * bf.gap))
	}
}

function dg() {
	function aXg(fg, fZ, fi, a1s, aBS, fz) {
		if (!(fi < 1 || aBS < fi))
			for (var aC = 0; aC <= fZ; aC++) {
				var fD = bP.jG(fg, fi);
				if (a1s(fD)) return fD >> 2;
				fg += fz
			}
		return -1
	}

	function aXk(fi, fZ, fg, a1s, aXe, fz) {
		if (!(fg < 1 || aXe < fg)) {
			fZ = Math.max(fZ, 0);
			for (var aC = 0; aC <= fZ; aC++) {
				var fD = bP.jG(fg, fi);
				if (a1s(fD)) return fD >> 2;
				fi += fz
			}
		}
		return -1
	}

	function aXo(j3, j4, aXb) {
		return -1 !== j4 && (-1 === j3 || bP.j5(j4, aXb) < bP.j5(j3, aXb)) ? j4 : j3
	}
	this.hy = function(aXb) {
		return this.a2K(aXb, function(fD) {
			return ad.fU(fD)
		})
	}, this.i4 = function(aXb) {
		return this.a2K(aXb, function(fD) {
			return ad.aJa(fD, aE.fJ)
		})
	}, this.a2K = function(aXb, a1s) {
		return function(aXb, aXc, a1s) {
			for (var ho = bP.fh(aXb), hq = bP.fj(aXb), aXe = bV.fk - 2, aBS = bV.fl - 2, aXf = -1, fc = 0; fc < aXc; fc++) {
				var aBR = Math.max(ho - fc, 1),
					aOC = Math.max(hq - fc, 1),
					a03 = Math.min(ho + fc, aXe),
					a02 = Math.min(hq + fc, aBS),
					j3 = aXg(ho, a03 - ho, hq - fc, a1s, aBS, 1),
					j4 = aXg(ho - 1, ho - aBR - 1, hq - fc, a1s, aBS, -1),
					a03 = aXg(ho, a03 - ho, hq + fc, a1s, aBS, 1),
					aBR = aXg(ho - 1, ho - aBR - 1, hq + fc, a1s, aBS, -1),
					aXj = aXk(hq, a02 - hq - 1, ho - fc, a1s, aXe, 1),
					aXl = aXk(hq - 1, hq - aOC - 2, ho - fc, a1s, aXe, -1),
					a02 = aXk(hq, a02 - hq - 1, ho + fc, a1s, aXe, 1),
					aOC = aXk(hq - 1, hq - aOC - 2, ho + fc, a1s, aXe, -1);
				if (aXf = aXo(aXf, j3, aXb), aXf = aXo(aXf, j4, aXb), aXf = aXo(aXf, a03, aXb), aXf = aXo(aXf, aBR, aXb), aXf = aXo(aXf, aXj, aXb), aXf = aXo(aXf, aXl, aXb), aXf = aXo(aXf, a02, aXb), 0 <= (aXf = aXo(aXf, aOC, aXb)) && fc *
					fc >= bP.j5(aXf, aXb)) return aXf
			}
			return -1
		}(aXb, bP.ii(), a1s)
	}
}

function d9() {
	function aXq(key) {
		var aUs;
		return "undefined" == typeof URLSearchParams || (aUs = window.location.search, "string" != typeof(aUs = new URLSearchParams(aUs).get(key))) || aUs.length < 1 ? null : bJ.f0.yO(aUs, 5)
	}
	this.dt = function() {
		if (0 !== a1.id) return !1;
		if (! function() {
				var value = aXq("account");
				if (!value && !(value = aXq("a"))) return void bL.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (bL.clear(), u.v(8, u.ua, new ub(1e3, {
					action: 0,
					uY: value,
					uZ: 0
				})), !0) : (bL.clear(), !1)
			}()) {
			var value = aXq("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			u.v(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a3K = new URL(window.location.href);
		a3K.search = "";
		try {
			return history.replaceState(null, "", a3K.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aRd = function(key, value) {
		if (0 === a1.id) try {
			var a3K = new URL(window.location.href),
				h7 = a3K.searchParams;
			h7.set(key, value), a3K.search = h7.toString(), history.replaceState(null, "", a3K.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function co() {
	var aXs, h;
	this.dk = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.g0(32768 * aC, 100);
		this.a6p(0)
	}, this.value = function(h7) {
		return h[h7]
	}, this.aO4 = function() {
		return bO.g0(aXs - 1, 2)
	}, this.a6p = function(aNi) {
		aXs = 2 * aNi % 32768 + 1
	}, this.random = function() {
		return aXs = 167 * aXs % 32768
	}, this.kB = function(nP) {
		return bO.g0(nP * this.random(), 32768)
	}, this.km = function(h7) {
		return 0 !== h7 && this.random() < this.value(h7)
	}, this.jX = function(fs, ft) {
		return fs + this.kB(ft - fs)
	}
}

function d5() {
	this.re = new aXt, this.a6z = new aXu, this.aLL = new aXv, this.dk = function() {
		aE.hi || this.re.dk()
	}, this.ee = function() {
		aE.hi || (this.re.ee(), 3 !== u.ua) || bi.kr() % 15 != 5 && 2 !== aE.a2G || u.a3T().aUt()
	}, __fx.replay.restartReplay = () => this.aUw(), this.aUw = function() {
		var aXx = 0 !== aE.a2G,
			aXy = aE.a6l;
		aXx || ab.aIc(), aE.a6j.a78(), aE.data.canvas = null, b1.z.close(b1.z.a3X, 3257), b1.z.a3X = 0, aE.data.isReplay = 1, aE.a6n(), aXx && (aE.a6l = aXy)
	}, this.aUv = function(s1) {
		var aC = s1.indexOf("=");
		return 0 <= aC ? s1.substring(aC + 1) : s1
	}, this.aUu = function(s1) {
		return s1
	}, __fx.replayHistory.load = saved => {
		saved = bC.aUv(saved), bC.aLL.yY(saved) && bC.aUw()
	}
}

function aXt() {
	this.aXz = null, this.aY0 = null, this.aY1 = null, this.aY2 = null, this.aY3 = null, this.aY4 = null, this.a6y = "";
	var aY5 = 0;
	this.dk = function() {
		this.aXz = [], this.aY0 = [], this.aY1 = [], this.aY2 = [], this.aY3 = [0], this.aY4 = [0], aY5 = 0, this.a6y = ""
	}, this.rf = function(id, gI, gK, gM) {
		aE.hi || 2 === aE.a2G || (0 === this.aY3[aY5] && (this.aY4[aY5] ? (this.aY3.push(1), this.aY4.push(0), aY5++) : this.aY3[aY5] = 1), this.aXz.push(id), this.aY0.push(gI), this.aY1.push(void 0 === gK ? 0 : gK), this.aY2.push(void 0 === gM ?
			0 : gM), this.aY4[aY5]++)
	}, this.ee = function() {
		0 === this.aY3[aY5] ? this.aY4[aY5]++ : (this.aY3.push(0), this.aY4.push(0), aY5++)
	}
}

function aXv() {
	var aY6 = 0;

	function aYA(s1, id) {
		console.log(s1), aY6 || (id ? 1 === id ? aO.a8H = L(502) + ": " + s1 : u.v(4, 3, new w(L(503), s1, 1)) : u.v(4, 3, new w("⚠️ " + L(501), s1, 1)))
	}
	this.yY = function(s1, aY7) {
		var iv, sC;
		return aY6 = aY7, bJ.f0.yR(bJ.f0.yP(bJ.f0.yN(s1))), aO.a8H = "", !! function() {
			if (bK.size < 10) aYA("File Too Small");
			else {
				var aYC = bK.rS(12),
					s = (aYC !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, aYA(s = (s += "   Found: " + aYC) + ("   Compatible at " + b1.z.a2g() + "/" + aYC), 1)), bK.rS(12)),
					aYD = bK.rS(31);
				if (aYD !== bK.size) aYA("Size Error: Stated Size " + aYD + " Actual Size " + bK.size);
				else if (function(k, aYC) {
						for (var h7 = bK.aD, fZ = bK.size, aX8 = aYC, aC = 3; aC < fZ; aC++) aX8 = aX8 + h7[aC] & 4095;
						return aX8 === k || (aYA("Hash Error: " + aX8 + " " + k + " " + fZ), !1)
					}(s, aYC)) return 1
			}
			return
		}() && (iv = bK, (sC = aE.data = new a6i).mapType = iv.rS(2), sC.mapProceduralIndex = iv.rS(8), sC.mapRealisticIndex = iv.rS(8), sC.mapSeed = iv.rS(14), sC.mapName = iv.aYF(5), 2 === sC.mapType && iv.aYG(), sC.passableWater = iv.rS(
			1), sC.passableMountains = iv.rS(1), sC.playerCount = iv.rS(10), sC.humanCount = iv.rS(10), sC.selectedPlayer = iv.rS(9), sC.gameMode = iv.rS(1), sC.playerMode = iv.rS(2), sC.battleRoyaleMode = iv.rS(2), sC.numberTeams = iv.rS(4),
			sC.isZombieMode = iv.rS(1), sC.isContest = iv.rS(1), sC.isReplay = iv.rS(1), sC.elo = iv.aYH(2, 14, 2), sC.colorsType = iv.rS(1), sC.colorsPersonalized = iv.rS(1), sC.colorsData = iv.aYH(10, 18, 512), sC.selectableColor = iv.rS(
			1), sC.teamPlayerCount = iv.aYH(4, 10, 9), sC.neutralBots = iv.rS(1), sC.botDifficultyType = iv.rS(2), sC.botDifficultyValue = iv.rS(4), sC.botDifficultyTeam = iv.aYH(4, 4, 9), sC.botDifficultyData = iv.aYH(10, 4, 512), sC
			.spawningType = iv.rS(2), sC.spawningSeed = iv.rS(14), sC.spawningData = iv.aYH(11, 12, 1024), sC.selectableSpawn = iv.rS(1), sC.playerNamesType = iv.rS(2), sC.playerNamesData = iv.aYI(10, 5, 512), sC.selectableName = iv.rS(1), sC
			.aIncomeType = iv.rS(2), sC.aIncomeValue = iv.rS(8), sC.aIncomeData = iv.aYH(10, 8, 512), sC.tIncomeType = iv.rS(2), sC.tIncomeValue = iv.rS(8), sC.tIncomeData = iv.aYH(10, 8, 512), sC.iIncomeType = iv.rS(2), sC.iIncomeValue = iv
			.rS(8), sC.iIncomeData = iv.aYH(10, 8, 512), sC.sResourcesType = iv.rS(2), sC.sResourcesValue = iv.rS(11), sC.sResourcesData = iv.aYH(10, 11, 512), sC.a76 = iv.aYH(10, 30, 0), !! function() {
				var iv = bK,
					yZ = iv.rS(5),
					aYJ = iv.rS(30),
					aYK = iv.rS(30);
				if (aYJ + aYK > 8 * iv.size) return void aYA("Corrupted File");
				return function(fZ) {
						var aYN = new Uint8Array(fZ),
							aYO = new Uint16Array(fZ),
							aYP = new Uint32Array(fZ),
							aYQ = new Uint32Array(fZ);
						bC.re.aXz = aYN, bC.re.aY0 = aYO, bC.re.aY1 = aYP, bC.re.aY2 = aYQ;
						for (var aC = 0; aC < fZ; aC++) {
							var id = bK.rS(4);
							aYN[aC] = id, aYO[aC] = bK.rS(9), 0 === id ? aYP[aC] = bK.rS(22) : 1 === id ? (aYP[aC] = bK.rS(10), aYQ[aC] = bK.rS(10)) : 2 === id ? (aYP[aC] = bK.rS(10), aYQ[aC] = bK.rS(9)) : 3 === id ? (aYP[aC] = bK.rS(10),
								aYQ[aC] = bK.rS(27)) : 4 === id ? (aYP[aC] = bK.rS(10), aYQ[aC] = bK.rS(16)) : 5 === id || 6 === id ? aYP[aC] = bK.rS(10) : 7 === id ? aYP[aC] = bK.rS(1) : 10 === id && (aYP[aC] = bK.rS(20), aYQ[aC] = bK
								.rS(22))
						}
					}(aYJ),
					function(fZ, yZ) {
						var aY3 = new Uint8Array(fZ),
							aY4 = new Array(fZ);
						aY4.fill(0), bC.re.aY3 = aY3, bC.re.aY4 = aY4;
						for (var aC = 0; aC < fZ; aC++) aY3[aC] = bK.rS(1), aY4[aC] = bK.rS(yZ)
					}(aYK, yZ), 1
			}()) && (bK.eI < 8 * bK.size - 13 || bK.eI > 8 * bK.size ? (aYA("Out Of Bounds Error: " + bK.eI + " " + 8 * bK.size), !1) : (bC.re.a6y = s1, 2 !== aE.data.mapType || (aYA("Load base64 image...", 2), aY7)))
	}, this.aLM = function(aKO, aYB) {
		var a55 = document.createElement("canvas"),
			ib = a55.getContext("2d");
		if (a55.width = aKO.width, a55.height = aKO.height, ib.drawImage(aKO, 0, 0), aE.data.canvas = a55, aY6 || aYB) return aE.a2G ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aUw()
	}
}

function aXu() {
	this.a1i = function() {
		var yZ = function() {
				for (var aY4 = bC.re.aY4, fZ = aY4.length, max = 0, aC = 0; aC < fZ; aC++) max = Math.max(max, aY4[aC]);
				return yg(Math.max(max, 1))
			}(),
			j = (sC = aE.data, (j = bH).dk(), j.a9(12, m.rVersion), j.eI += 43, j.a9(2, sC.mapType), j.a9(8, sC.mapProceduralIndex), j.a9(8, sC.mapRealisticIndex), j.a9(14, sC.mapSeed), j.aYX(sC.mapName, 5), 2 === sC.mapType && j.aYY(sC.canvas),
				j.a9(1, sC.passableWater), j.a9(1, sC.passableMountains), j.a9(10, sC.playerCount), j.a9(10, sC.humanCount), j.a9(9, sC.selectedPlayer), j.a9(1, sC.gameMode), j.a9(2, sC.playerMode), j.a9(2, sC.battleRoyaleMode), j.a9(4, sC
					.numberTeams), j.a9(1, sC.isZombieMode), j.a9(1, sC.isContest), j.a9(1, sC.isReplay), j.dr(sC.elo, 2, 14), j.a9(1, sC.colorsType), j.a9(1, sC.colorsPersonalized), j.dr(sC.colorsData, 10, 18), j.a9(1, sC.selectableColor), j.dr(
					sC.teamPlayerCount, 4, 10), j.a9(1, sC.neutralBots), j.a9(2, sC.botDifficultyType), j.a9(4, sC.botDifficultyValue), j.dr(sC.botDifficultyTeam, 4, 4), j.dr(sC.botDifficultyData, 10, 4), j.a9(2, sC.spawningType), j.a9(14, sC
					.spawningSeed), j.dr(sC.spawningData, 11, 12), j.a9(1, sC.selectableSpawn), j.a9(2, sC.playerNamesType), j.aYZ(sC.playerNamesData, 10, 5), j.a9(1, sC.selectableName), j.a9(2, sC.aIncomeType), j.a9(8, sC.aIncomeValue), j.dr(sC
					.aIncomeData, 10, 8), j.a9(2, sC.tIncomeType), j.a9(8, sC.tIncomeValue), j.dr(sC.tIncomeData, 10, 8), j.a9(2, sC.iIncomeType), j.a9(8, sC.iIncomeValue), j.dr(sC.iIncomeData, 10, 8), j.a9(2, sC.sResourcesType), j.a9(11, sC
					.sResourcesValue), j.dr(sC.sResourcesData, 10, 11), j.dr(sC.a76, 10, 30), ! function(yZ) {
					var j = bH,
						aXz = bC.re.aXz,
						gI = bC.re.aY0,
						gK = bC.re.aY1,
						gM = bC.re.aY2,
						fZ = aXz.length;
					j.a9(5, yZ), j.a9(30, fZ), j.a9(30, bC.re.aY4.length);
					for (var aC = 0; aC < fZ; aC++) {
						var ej = aXz[aC];
						j.a9(4, ej), j.a9(9, gI[aC]), 0 === ej ? j.a9(22, gK[aC]) : 1 === ej ? (j.a9(10, gK[aC]), j.a9(10, gM[aC])) : 2 === ej ? (j.a9(10, gK[aC]), j.a9(9, gM[aC])) : 3 === ej ? (j.a9(10, gK[aC]), j.a9(27, gM[aC])) : 4 === ej ? (j
							.a9(10, gK[aC]), j.a9(16, gM[aC])) : 5 === ej || 6 === ej ? j.a9(10, gK[aC]) : 7 === ej ? j.a9(1, gK[aC]) : 10 === ej && (j.a9(20, gK[aC]), j.a9(22, gM[aC]))
					}
				}(yZ), ! function(yZ) {
					for (var j = bH, aY3 = bC.re.aY3, aY4 = bC.re.aY4, fZ = aY3.length, aC = 0; aC < fZ; aC++) j.a9(1, aY3[aC]), j.a9(yZ, aY4[aC])
				}(yZ), bH.eI),
			sC = bO.g0(j - 1, 6) + 1,
			yZ = (bG.aWc(6 * sC) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eI = 24, j.a9(31, j.h.length), j.eI = 12, j.a9(12, function() {
					for (var h = bH.h, fZ = h.length, aX8 = m.rVersion, aC = 3; aC < fZ; aC++) aX8 = aX8 + h[aC] & 4095;
					return aX8
				}())
			}(), bK.dk(bH.h), bI.f0.uc(bI.f0.ud(sC)));
		return bK.vx(), bH.dk(), yZ
	}
}

function ct() {
	var ej, by = !1,
		aYb = !1,
		aYc = -1e4,
		aYd = -1,
		aYe = 0;

	function resize(aYi) {
		ej = 0, ac.v0() && (aYg(aYi) || by) && (by = !1, bf.resize(), bZ.aE8.resize(), aZ.dk(), bb.dk(), aa.resize(), aU.resize(), aP.resize(), bw.resize(), u.resize(), 1 <= aE.a2G ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(),
			aO.resize(), aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aBH()) : (ab.aIe(), ab.aIf()), bi.ds = !0)
	}

	function aYf(g1) {
		return g1 && 128 < g1 ? Math.floor(g1) : 128
	}

	function aYg(aYi) {
		var j, k, aYk, uf, aAf;
		if (!(0 < i.uG)) return uf = aYf(document.documentElement.clientWidth), aAf = aYf(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = uf, k = aAf, aYk = 0 !== a1.id || j < k ?
			700 : 1200, aYk = Math.min(aYk / ((j + k) / 2), 1), aYk = 0 === bm.buffer.data[1].value ? 2 * aYk / 3 : Math.min(aYk + (bm.buffer.data[1].value - 1) * (1 - aYk) / 2, 1), i.l = (window.devicePixelRatio || 1) * aYk, __fx.hoveringTooltip
			.canvasPixelScale = i.l, aYi && !aYb ? (aYb = !0, u.removeChild(document.body, a3l)) : aYb && (aYb = !1, document.body.appendChild(a3l)), j = Math.floor(.5 + uf * i.l), k = Math.floor(.5 + aAf * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aDk(j, k), i.max = a8W(j, k), i.il = bO.g0(j + k, 2), i.wo = j / k, a3l.width = j, a3l.height = k, a3l.style.width = uf + "px", a3l.style.height = aAf + "px", aYd = bi.eZ + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.il = 0, this.wo = 1, this.l = 1, this.uG = 0, this.dl = function() {
		this.j = aYf(document.documentElement.clientWidth) + 2, this.k = aYf(document.documentElement.clientHeight) + 2
	}, this.dk = function() {
		ej = 1, a3l = document.getElementById("canvasA"), 2 === a1.id && (a3l.style.webkitUserSelect = "none"), (ws = a3l.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aYg(0)
	}, this.ee = function() {
		50 <= ++ej && resize(0), -1 === aYd || bi.eZ < aYd || (aYd = -1, 2e3 * ++aYe >= bi.eZ + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.dv = function(k9) {
		by = !0, resize(k9)
	}, this.a4Q = function() {
		aYc + 1e3 > bi.eZ || (aYc = bi.eZ, resize(0))
	}
}

function dN() {
	this.aWm = new aYm, this.a36 = new aYn, this.aX3 = new aYo
}

function aYo() {
	var aYp = aYq(),
		aYr = aYs(),
		aYt = aYu();
	this.rS = function() {
		return 123
	}, this.a1i = function() {
		bJ.f0.yV(bm.buffer.data[183].value, 15), bG.a9(14, aYp), bG.a9(7, aYr), bG.a9(12, aYt)
	}
}

function aYq() {
	for (var ej = document.createElement("canvas"), ej = (ej.width = 24, ej.height = 24, ej.getContext("2d", {
			alpha: !1
		})), fc = (ej.fillStyle = "rgb(0,0,0)", ej.fillRect(0, 0, 24, 24), ej.font = "22px system-ui", ej.textBaseline = "middle", ej.textAlign = "center", ej.fillStyle = "rgb(255,255,255)", ej.fillText("Q", 12, 12), ej.getImageData(0, 0, 24, 24)
			.data), fZ = fc.length, lp = 0, aC = 0; aC < fZ; aC += 4) lp += fc[aC];
	return 16383 & lp
}

function aYs() {
	var fc = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fc + .5) / 15))
}

function aYu() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aYn() {
	this.a37 = function() {
		for (var h7, fZ = am.lQ, a24 = am.lV, a2r = ah.a2r, aAT = this.aK7(), aC = 0; aC < fZ; aC++) h7 = a24[aC], bD.gv.kH(h7) || (a2r[h7] = aAT);
		var rj = ah.rj,
			jx = ah.jx,
			jy = ah.jy,
			a2p = ah.a2p,
			fZ = aE.ku;
		for (aC = 0; aC < fZ; aC++)(0 === a2p[aC] || jy[aC] < 1 || 2 * rj[aC] > 3 * (jx[aC] + jy[aC])) && (a2r[aC] = 0);
		var a34 = 0;
		for (aC = 0; aC < fZ; aC++) a34 += 0 < a2r[aC];
		return a34
	}, this.aK7 = function() {
		return Math.min(65535, bi.kr())
	}
}

function aYm() {
	function aYy(h, g1, iR) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (g1 >> (aC + iR) % 30 & 1)) % 256
	}
	this.ee = function(aYv, aYw) {
		var h = new Uint8Array(256);
		return function(h, aYv, aYw) {
				var aC, aZ0 = 3 + (4 + aYv) % 32768,
					aZ1 = 12 + aYw % 32768,
					aZ2 = 17 + ((aYv & aYw) + (aYv | aYw) + aYv) % 32768;
				for (aC = 0; aC < 256; aC++) aZ0 = 1 + aZ0 * aZ1 % aZ2, h[aC] = aZ0 % 256
			}(h, aYv, aYw), aYy(h, aYv, 2), aYy(h, aYw, 7),
			function(h) {
				var aC, g1, eI = 0;
				for (aC = 0; aC < 3e4; aC++) g1 = h[eI], h[eI] = (g1 + aC + h[(eI + aC) % 256]) % 256, eI = (g1 + aC + eI + (g1 & eI)) % 256
			}(h),
			function(h) {
				var aC, aAf = 1,
					vN = 1;
				for (aC = 0; aC < 256; aC += 2) aAf = (1 + aAf) * (h[aC] + 1) % 1073741824, vN = (1 + vN) * (h[aC + 1] + 1) % 1073741824;
				return [aAf, vN]
			}(h)
	}, this.aWn = function(aZ3, aZ4, aZ5, result) {
		for (var h2 = 1 << aZ3, aC = 0; aC < h2; aC++)
			if (this.aZ6(aC, aZ4, aZ5) === result) return aC;
		return 0
	}, this.aZ6 = function(aZ7, aZ4, aZ5) {
		for (var zb = aZ4 + aZ7, zk = aZ5 + aZ7, g1 = zb + zk & 2147483647, fs = 1; fs <= 16; fs++) g1 = (g1 = (g1 ^ g1 >> fs) >>> 1 + (3 & zb)) * (7 + (1023 & (zb | zk))) & 1073741823, zk >>= 1 + (1 & (zb >>= 1 + (1 & (g1 += 65535 & zk))));
		return g1 &= 1073741823
	}
}

function cq() {
	var aZ8, aZ9, iq, aZA;
	this.dk = function() {
		var aC, fg, fi, aSt, aZB, j, k, ou, iY, yq, g1, h7, fp, fs, aZE;
		if (function() {
				if (iq = !0, aZA = "rgb(" + bV.yo[0] + "," + bV.yo[1] + "," + bV.yo[2] + ")", bV.aNr(bV.fF)) return 1;
				return iq = !1, 0
			}()) aZ9 = null;
		else {
			for (aZ8 = bO.g0(96, 4), aZB = 1 === bV.fF ? (aSt = 0, 160) : (aSt = 128, 32), aZA = "rgb(" + aSt + "," + aSt + "," + aSt + ")", aZ9 = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (aZ9[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fk : aZ8, k = aC % 2 == 0 ? aZ8 : bV.fl + 2 * aZ8, aZ9[aC].width = j, aZ9[aC].height = k, yq = (iY = (ou = aZ9[aC].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (fi = aZ8 - 1; 0 <= fi; fi--)
						for (g1 = aZB + Math.floor((fi + 1) * (aSt - aZB) / (aZ8 + 1)), fg = j - 1; 0 <= fg; fg--) yq[h7 = 4 * ((0 === aC ? aZ8 - fi - 1 : fi) * j + fg)] = g1, yq[h7 + 1] = g1, yq[h7 + 2] = g1, yq[h7 + 3] = 255;
				else {
					for (fg = aZ8 - 1; 0 <= fg; fg--)
						for (g1 = aZB + Math.floor((fg + 1) * (aSt - aZB) / (aZ8 + 1)), fi = k - 1 - aZ8; aZ8 <= fi; fi--) yq[h7 = 4 * (fi * j + (3 === aC ? aZ8 - fg - 1 : fg))] = g1, yq[h7 + 1] = g1, yq[h7 + 2] = g1, yq[h7 + 3] = 255;
					for (fs = 1; 0 <= fs; fs--)
						for (fg = aZ8 - 1; 0 <= fg; fg--)
							for (fi = aZ8 - 1; 0 <= fi; fi--) fp = (Math.pow(fg * fg + fi * fi, .5) + 1) / (aZ8 + 1), g1 = aZB + Math.floor((1 < fp ? 1 : fp) * (aSt - aZB)), yq[h7 = 4 * ((0 === fs ? aZ8 - fi - 1 : fi + fs * (k - aZ8)) * j + (
								1 === aC ? fg : aZ8 - fg - 1))] = g1, yq[h7 + 1] = g1, yq[h7 + 2] = g1, yq[h7 + 3] = 255
				}
				ou.putImageData(iY, 0, 0)
			}
			aZE = aZB, bV.yj.fillStyle = "rgb(" + aZE + "," + aZE + "," + aZE + ")", bV.yj.fillRect(0, 0, bV.fk, 1), bV.yj.fillRect(0, bV.fl - 1, bV.fk, 1), bV.yj.fillRect(0, 0, 1, bV.fl), bV.yj.fillRect(bV.fk - 1, 0, 1, bV.fl)
		}
	}, this.a0K = function() {
		var fs = iq ? 0 : -aZ8;
		aPc(fs, fs, bV.fk - 2 * fs, bV.fl - 2 * fs, bd.aZF, bd.aZG, bd.aZH, bd.aZI) || (ws.fillStyle = aZA, ws.fillRect(0, 0, i.j, i.k))
	}, this.wr = function() {
		iq || (aPb(0, -aZ8, bV.fk, aZ8, bd.aZF, bd.aZG, bd.aZH, bd.aZI) && ws.drawImage(aZ9[0], bd.aZJ, bd.aZK - aZ8), aPb(bV.fk, -aZ8, aZ8, bV.fl + 2 * aZ8, bd.aZF, bd.aZG, bd.aZH, bd.aZI) && ws.drawImage(aZ9[1], bd.aZJ + bV.fk, bd.aZK - aZ8),
			aPb(0, bV.fl, bV.fk, aZ8, bd.aZF, bd.aZG, bd.aZH, bd.aZI) && ws.drawImage(aZ9[2], bd.aZJ, bd.aZK + bV.fl), aPb(-aZ8, -aZ8, aZ8, bV.fl + 2 * aZ8, bd.aZF, bd.aZG, bd.aZH, bd.aZI) && ws.drawImage(aZ9[3], bd.aZJ - aZ8, bd.aZK - aZ8))
	}
}

function dC() {
	this.aK5 = new aZL, this.a0N = new aZM, this.z = new aZN, this.jM = new aZO, this.aZE = new aZP, this.mp = new aZQ, this.ki = new aZR, this.lh = new aZS, this.aZT = new aZU, this.aZV = new aZW, this.n0 = new aZX, this.i9 = new aZY, this.mG =
		new aZZ, this.lj = new aZa, this.iC = new aZb, this.mt = new aZc, this.rr = new aZd, this.dk = function() {
			this.mG.dk(), this.a0N.dk(), this.z.dk(), this.jM.dk(), this.aZE.dk(), this.aZV.dk(), this.mt.dk()
		}, this.wr = function() {
			this.aZV.wr(), this.a0N.wr()
		}
}

function aZR() {
	this.ee = function(player) {
		return !!bQ.n0.n1(player) && !(bQ.z.ky[player] >= Math.max(3 * ap.performance.m8, aF.l8[aF.iI[player]]) || !bD.gv.n2(player, aF.l6[aF.iI[player]], 32, 0)) && (aX.aDX() ? function(player) {
			var aZg = bQ.lj.aDa(),
				fZ = aZg.length;
			if (0 === fZ) return !1;
			aZg = aZg[az.kB(fZ)], fZ = bQ.z.mn[aZg];
			if (bQ.mt.mu(player, fZ)) return !1;
			return !! function(player, mw) {
				var mw = bP.jK(bQ.z.mz[mw]),
					ho = bP.fh(mw),
					mw = bP.fj(mw),
					nv = ah.jS[player],
					nw = ah.jU[player],
					o8 = ah.jT[player],
					player = ah.jV[player],
					o8 = Math.max(ho - o8, nv - ho),
					nv = Math.max(mw - player, nw - mw);
				return o8 < 100 && nv < 100
			}(player, aZg) && !!bQ.iC.rq(player, fZ, 1) && (bD.gv.n4(player), bQ.z.n5(player), !0)
		}(player) : !!(ap.jl.ee(player) || ap.ja.ee(player) || ap.jc.ee(player)) && (function(player) {
			bR.gB[1] = 4, bD.gv.n4(player), bQ.z.n5(player)
		}(player), !0))
	}
}

function aZc() {
	var aZj = 0,
		aZk = null;
	this.dk = function() {
		null === aZk && (aZk = new Uint16Array(2 * bQ.z.l8)), aZj = 0
	}, this.ei = function(aZl, mt) {
		var aZm = aZk;
		aZm[aZj++] = aZl, aZm[aZj++] = mt
	}, this.mu = function(player, ms) {
		for (var aZm = aZk, fZ = aZj, aC = 0; aC < fZ; aC += 2)
			if (aZm[aC] === ms && bQ.lj.aZn(aZm[aC + 1]) && player === bQ.z.mo[bR.gB[2]] >> 3) return !0;
		return !1
	}, this.aZo = function(aZp) {
		var mp = bQ.z.ml[aZp];
		if (!(mp < 64)) {
			for (var ms = bQ.z.mn[aZp], aZm = aZk, fZ = aZj, aC = fZ - 2; 0 <= aC; aC -= 2)
				if (aZm[aC] === ms) {
					{
						aZu = void 0;
						var aZu = aZm[aC + 1];
						bQ.lj.aZn(aZu) && bQ.mt.aa2(bR.gB[2])
					}
					aZm[aC] = aZm[fZ - 2], aZm[aC + 1] = aZm[fZ - 1], fZ -= 2
				} aZj = fZ
		}
	}, this.aZr = function(aZs, aZt) {
		for (var aZu = bQ.z.mn[aZs], ms = -1, aZm = aZk, fZ = aZj, aC = 1; aC < fZ; aC += 2)
			if (aZm[aC] === aZu) {
				ms = aZm[aC - 1];
				break
			} if (-1 === ms) return !1;
		if (!bQ.lj.aZn(ms)) return !1;
		var aZp = bR.gB[2],
			mF = bQ.z.mm[aZp];
		if (aZt === mF[mF.length - 1]) bQ.z.mm[aZs] = bQ.mG.aZv(bQ.z.mm[aZs], bQ.mG.mO(mF));
		else {
			var aZw = bQ.lj.aZx(mF, aZt);
			if (-1 === aZw) return !1;
			var aZy = bQ.z.my[aZp];
			aZw === aZy ? (aZp = bP.jK(bQ.z.mz[aZp]), bQ.z.mm[aZs] = bQ.mG.aa0(bQ.z.mm[aZs], mF, aZw, aZt, bP.j2(mF[aZw], aZt) > bP.j2(mF[aZw], aZp))) : bQ.z.mm[aZs] = bQ.mG.aa0(bQ.z.mm[aZs], mF, aZw, aZt, aZy < aZw)
		}
		return !0
	}, this.aa2 = function(aa3) {
		var mF, lp = bQ.z,
			mp = lp.ml[aa3];
		return mp % 64 != 5 && (mF = lp.mm[aa3], lp.aa4[aa3] = 65535 - lp.aa4[aa3], lp.my[aa3] = mF.length - lp.my[aa3] - 2, lp.mm[aa3] = bQ.mG.mO(mF), lp.ml[aa3] = mp - mp % 64 + 5, !0)
	}
}

function aZX() {
	this.n1 = function(player) {
		return !!aE.data.passableWater && bQ.z.mk !== bQ.z.l8 && bQ.z.ky[player] !== bQ.z.aa5 && 0 !== ah.hG[player].length
	}, this.rm = function(aXb) {
		var mp = bR.gB[1];
		return !(4 <= mp || !bQ.lj.aa6(bP.fP(aXb))) && ad.fU(bP.fP(bP.jO(aXb, mp)))
	}
}

function aZL() {
	this.aK6 = function(player) {
		for (var a9t = bQ.z.a9t, us = player << 3, aC = us + bQ.z.ky[player] - 1; us <= aC; aC--) this.aa7(a9t[aC])
	}, this.aa7 = function(aa8) {
		var z = bQ.z,
			aa9 = z.mk - 1,
			aaA = z.mo[aa8],
			aaB = z.aaC[aa8],
			aaD = z.mz[aa8];
		z.mk = aa9, z.mo[aa8] = z.mo[aa9], z.mz[aa8] = z.mz[aa9], z.aa4[aa8] = z.aa4[aa9], z.a8n[aa8] = z.a8n[aa9], z.aaC[aa8] = z.aaC[aa9], z.mn[aa8] = z.mn[aa9], z.ml[aa8] = z.ml[aa9], z.aaE[aa8] = z.aaE[aa9], z.mm[aa8] = z.mm[aa9], z.my[aa8] =
			z.my[aa9], z.a9t[z.mo[aa8]] = aa8,
			function(aXa) {
				var player = aXa >> 3,
					z = bQ.z,
					fZ = z.ky[player] - 1,
					aaH = (player << 3) + fZ;
				z.ky[player] = fZ, aaH !== aXa && (z.a9t[aXa] = z.a9t[aaH], z.mo[z.a9t[aXa]] = aXa)
			}(aaA), bQ.jM.jM[bP.jL(z.mz[aa8])][z.aaC[aa8]] = aa8, aa9 = bP.jL(aaD), aaA = aaB, aa9 = bQ.jM.jM[aa9], z = aa9.pop(), aaA !== aa9.length && (aa9[aaA] = z, bQ.z.aaC[z] = aaA)
	}
}

function aZM() {
	var aaJ, aaK = 8,
		aaL = null;

	function aaQ(yq, fL, eI) {
		fL *= 4;
		yq[fL] = 255, yq[1 + fL] = 255, yq[2 + fL] = eI, yq[3 + fL] = 255
	}

	function aaS(ib, aZA) {
		var fg, fi, iw, fL, aaT, aaU, iV = aaK,
			iY = bD.sK.getImageData(ib, iV, iV),
			yq = iY.data,
			lp = (iV >> 1) - .5,
			aaW = bD.sS.a4d(aZA, .5);
		for (bD.sS.a4f(aZA, aaW, 300) || bD.sS.a4h(aZA, 100), fi = 0; fi < iV; fi++)
			for (fg = 0; fg < iV; fg++) aaU = (iV - 1.5) * (iV - 1.5) / 4, yq[fL = 4 * (fi * iV + fg)] = (aaT = (iw = (iw = fg - lp) * iw + (iw = fi - lp) * iw) <= (iV - 4.5) * (iV - 4.5) / 4 ? aaW : aZA)[0], yq[1 + fL] = aaT[1], yq[2 + fL] = aaT[2],
				yq[3 + fL] = aaU < iw ? 0 : 255;
		ib.putImageData(iY, 0, 0)
	}
	this.dk = function() {
		var eI, iV, a55, ib, iY, yq;
		(aaJ = aaJ || new Array(aE.fW)).fill(null), eI = 255, iV = aaK + 4, a55 = bD.sK.yf(iV, iV), ib = bD.sK.getContext(a55, !0), iY = bD.sK.getImageData(ib, iV, iV), aaQ(yq = iY.data, iV + 1, eI), aaQ(yq, iV + 2, eI), aaQ(yq, 2 * iV + 1, eI),
			aaQ(yq, 2 * iV - 3, eI), aaQ(yq, 2 * iV - 2, eI), aaQ(yq, 3 * iV - 2, eI), aaQ(yq, iV * (iV - 3) + 1, eI), aaQ(yq, iV * (iV - 2) + 1, eI), aaQ(yq, iV * (iV - 2) + 2, eI), aaQ(yq, iV * (iV - 2) - 2, eI), aaQ(yq, iV * (iV - 1) - 3, eI),
			aaQ(yq, iV * (iV - 1) - 2, eI), ib.putImageData(iY, 0, 0), aaL = a55,
			function() {
				if (aE.iT)
					for (var a55 = new Array(bj.lH.length), fZ = aE.fW, aaO = aaJ, aCs = bj.aCs, aC = 0; aC < fZ; aC++) {
						var a7X = aCs[aC];
						a55[a7X] || (a55[a7X] = function(a7X) {
							var a55 = bD.sK.yf(aaK, aaK),
								ib = bD.sK.getContext(a55, !0),
								h = bR.g8;
							return h.set(bj.aSu[a7X]), aaS(ib, h), a55
						}(a7X)), aaO[aC] = a55[a7X]
					}
			}()
	}, this.wr = function() {
		var aC, player, aaX, aPk, iI, iv, aaZ, aab, aac, mz = bQ.z.mz,
			mo = bQ.z.mo,
			a8n = bQ.z.a8n,
			aaE = bQ.z.aaE,
			aad = aaJ,
			aae = aE.fJ,
			fZ = bQ.z.mk,
			aaf = i.j,
			aag = i.k,
			aah = bV.fk << 4,
			fO = im,
			fD = fO / aaK,
			nv = jD / fO,
			nw = jE / fO,
			iw = (aaf + jD) / fO - nv,
			iz = (aag + jE) / fO - nw,
			ib = ws;
		for (ib.imageSmoothingEnabled = fO < 9, bD.sK.textAlign(ib, 1), bD.sK.textBaseline(ib, 1), aC = 0; aC < fZ; aC++) player = mo[aC] >> 3, iI = a8n[aC], aaX = .9 + .1 * Math.log10(iI), aPk = (iv = mz[aC]) % aah / 16 - aaX, iv = aag * (Math
			.floor(iv / aah) / 16 - aaX - nw) / iz, aaZ = -2 * (aac = fO * aaX) * (1 + (aab = +(player === aae)) / 8), aab = aab * aac / 4, (aac = aaf * (aPk - nv) / iw) < aaZ || iv < aaZ || aaf + aab < aac || aag + aab < iv || (aPk = 2 *
			aaX * fD, aaZ = aaX * fO, null === (aab = aad[player]) && (aad[player] = aab = function(player) {
				var a55 = bD.sK.yf(aaK, aaK);
				return aaS(bD.sK.getContext(a55, !0), ad.a9U(player)), a55
			}(player)), player === aae && (ib.setTransform(aPk, 0, 0, aPk, aac - 2 * aPk, iv - 2 * aPk), ib.drawImage(aaL, 0, 0)), ib.setTransform(aPk, 0, 0, aPk, aac, iv), ib.drawImage(aab, 0, 0), (aaX = Math.floor(function(iI) {
				if (iI < 1e3) return .42;
				if (iI < 1e4) return .34;
				if (iI < 1e6) return .26;
				if (iI < 1e8) return .19;
				return .15
			}(iI) * aaZ)) < 6) || (ib.setTransform(1, 0, 0, 1, 0, 0), ib.fillStyle = aaE[aC] ? bE.pw : bE.pO, ib.font = bD.sK.u8(1, aaX), ib.fillText(bD.tI.a1X(iI), aac + aaZ, iv + aaZ + .1 * aaX));
		ib.imageSmoothingEnabled = !1, ib.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aZW() {
	var aak;
	this.dk = function() {
		if (!aak) {
			aak = new Array(bj.aam.length);
			for (var aC = 0; aC < aak.length; aC++) aak[aC] = bS.z.aan(20, bj.aam[aC])
		}
	}, this.wr = function() {
		var oF = im;
		if (!(5 <= oF)) {
			var aaf = i.j,
				aag = i.k,
				nv = jD / oF,
				nw = jE / oF,
				o8 = (aaf + jD) / oF,
				o9 = (aag + jE) / oF,
				h8 = -20 * oF,
				aao = .5 * h8,
				aah = bV.fk << 4,
				fZ = bQ.z.mk,
				mz = bQ.z.mz,
				mo = bQ.z.mo,
				aCs = bj.aCs,
				a55 = aak,
				ib = ws;
			3 < oF && (ib.globalAlpha = .5 * (5 - oF));
			for (var aC = 0; aC < fZ; aC++) {
				var iv = mz[aC],
					fg = aaf * (iv % aah / 16 - nv) / (o8 - nv) + aao,
					iv = aag * (Math.floor(iv / aah) / 16 - nw) / (o9 - nw) + aao;
				aaf < fg || aag < iv || fg < h8 || iv < h8 || (ib.setTransform(oF, 0, 0, oF, fg, iv), fg = a55[aCs[mo[aC] >> 3]], ib.drawImage(fg, 0, 0))
			}
			ib.globalAlpha = 1, ib.setTransform(oF, 0, 0, oF, 0, 0)
		}
	}
}

function aZa() {
	this.aar = function(player, id) {
		for (var aas = ah.hG[player], fZ = aas.length, aC = 0; aC < fZ; aC++)
			if (bP.io(aas[aC], id)) return !0;
		return !1
	}, this.aat = function(player, fL) {
		for (var j4, aau, fD, aas = ah.hG[player], fZ = aas.length, j = bV.fk, aaw = bP.fh(fL), aax = bP.fj(fL), ff = -1, min = bV.fk * bV.fk + bV.fl * bV.fl, id = ad.fH(bP.fP(fL)), aC = 0; aC < fZ; aC++)(aau = (aau = aaw - (j4 = (fD = aas[
			aC]) >> 2) % j) * aau + (aau = aax - ~~((.5 + j4) / j)) * aau) < min && bP.io(fD, id) && (min = aau, ff = j4);
		return ff
	}, this.lk = function(j3, j4) {
		for (var id = ad.fH(bP.fP(j4)), ip = bP.ig, fD = bP.fP(j3), aay = -1, aC = 0; aC < 4; aC++) {
			var fO = fD + ip[aC];
			ad.iq(fO) && ad.fH(fO) === id && (-1 === aay || bP.j5(bP.fN(fO), j4) < bP.j5(aay, j4)) && (aay = bP.fN(fO))
		}
		return aay
	}, this.mJ = function(player, fL) {
		for (var ip = bP.ig, fD = bP.fP(fL), aC = 0; aC < 4; aC++) {
			var fO = fD + ip[aC];
			if (ad.h9(fO) && ad.a0I(player, fO)) return !0
		}
		return !1
	}, this.mK = function(player, fL) {
		for (var ip = bP.ig, fD = bP.fP(fL), aC = 0; aC < 4; aC++) {
			var fO = fD + ip[aC];
			if (ad.fQ(fO)) return !0;
			if (ad.h9(fO)) {
				fO = ad.fR(fO);
				if (player !== fO && bv.fS(player, fO)) return !0
			}
		}
		return !1
	}, this.mq = function(fL) {
		for (var ip = bP.ig, fD = bP.fP(fL), aC = 0; aC < 4; aC++) {
			var fO = fD + ip[aC];
			if (ad.h9(fO)) {
				fO = ad.fR(fO);
				if (bD.gv.kH(fO)) return fO
			}
		}
		return -1
	}, this.aa6 = function(fD) {
		if (ad.iq(fD))
			for (var ip = bP.ig, aC = 0; aC < 4; aC++)
				if (ad.fU(fD + ip[aC])) return !0;
		return !1
	}, this.nu = function(player, id) {
		for (var us = player << 3, ut = us + bQ.z.ky[player], mn = bQ.z.mn, a9t = bQ.z.a9t, aC = us; aC < ut; aC++) {
			var a9u = a9t[aC];
			if (mn[a9u] === id) return a9u
		}
		return -1
	}, this.nz = function(player) {
		return 0 === bQ.z.ky[player] ? -1 : bQ.z.a9t[player << 3]
	}, this.a7p = function(m9, mA) {
		var fZ = bQ.z.mk;
		if (fZ < 1) return -1;
		for (var mz = bQ.z.mz, aaz = 80, aSO = -1, aC = 0; aC < fZ; aC++) {
			var fp = bP.is(m9, mA, mz[aC]);
			fp < aaz && (aaz = fp, aSO = aC)
		}
		return function(aC, m9, mA) {
			if (aC < 0) return;
			var ab6 = bQ.z.mz[aC],
				ab7 = bP.iy(ab6),
				ab6 = bP.j1(ab6),
				aC = 20 * (.9 + .1 * Math.log10(bQ.z.a8n[aC]));
			return aC = Math.max(aC, bP.jF(bD.sK.ux(.02, 1.7))), bO.aPj(bP.ix(m9), bP.j0(mA), ab7, ab6, aC)
		}(aSO, m9, mA) ? aSO : -1
	}, this.aZn = function(ns) {
		for (var fZ = bQ.z.mk, mn = bQ.z.mn, aC = 0; aC < fZ; aC++)
			if (mn[aC] === ns) return bR.gB[2] = aC, !0;
		return !1
	}, this.aK2 = function(player) {
		for (var us = player << 3, ut = us + bQ.z.ky[player], a9t = bQ.z.a9t, a8n = bQ.z.a8n, iI = 0, aC = us; aC < ut; aC++) iI += a8n[a9t[aC]];
		return iI
	}, this.ab1 = function(player, aa3) {
		aa3 = bQ.z.mm[aa3];
		return this.mJ(player, aa3[aa3.length - 1])
	}, this.ab2 = function(j3, j4, fp, ab3) {
		var j7 = bP.fh(j3),
			j3 = bP.fj(j3),
			j9 = bP.fh(j4),
			j4 = bP.fj(j4),
			j9 = (fp = Math.max(fp, 1), j9 - j7),
			j4 = j4 - j3,
			iw = bO.g0(Math.abs(j9) * ab3, fp),
			ab3 = bO.g0(Math.abs(j4) * ab3, fp);
		return bP.fw(j7 + Math.sign(j9) * iw, j3 + Math.sign(j4) * ab3)
	}, this.aZx = function(mF, fL) {
		for (var fZ = mF.length - 1, fg = bP.fh(fL), fi = bP.fj(fL), aC = 0; aC < fZ; aC++) {
			var j3 = mF[aC],
				j4 = mF[aC + 1],
				nv = bP.fh(j3),
				j3 = bP.fj(j3),
				o8 = bP.fh(j4),
				j4 = bP.fj(j4);
			if (!(fg !== nv && fg !== o8 && Math.sign(fg - nv) === Math.sign(fg - o8) || fi !== j3 && fi !== j4 && Math.sign(fi - j3) === Math.sign(fi - j4))) {
				if (nv === o8 || j3 === j4) return aC;
				if (Math.abs(fg - nv) === Math.abs(fi - j3) && Math.abs(fg - o8) === Math.abs(fi - j4)) return aC
			}
		}
		return -1
	}, this.aDa = function() {
		for (var ab9 = mV[0], mo = bQ.z.mo, mk = bQ.z.mk, h = [], aC = 0; aC < mk; aC++) bD.gv.lY(ab9, mo[aC] >> 3) && h.push(aC);
		return h
	}, this.mH = function(player, mF) {
		for (var us = player << 3, ut = us + bQ.z.ky[player], a9t = bQ.z.a9t, mm = bQ.z.mm, i1 = mF[0], lX = mF[mF.length - 1], aC = us; aC < ut; aC++) {
			var h7 = mm[a9t[aC]];
			if (h7[0] === i1 && h7[h7.length - 1] === lX) return !0
		}
		return !1
	}
}

function aZb() {
	function abC(player, aa3) {
		aa3 = bP.jK(bQ.z.mz[aa3]), aa3 = ad.fH(bP.fP(aa3));
		return !!bQ.lj.aar(player, aa3)
	}

	function abA(player) {
		return bQ.n0.n1(player) && !bQ.mG.mM()
	}
	this.iD = function(player, fL) {
		return !!abA(player) && -1 !== (fL = function(player, fL) {
			for (var fZ = bQ.z.mk, mz = bQ.z.mz, mo = bQ.z.mo, aaz = bP.ii(), aSO = -1, aC = 0; aC < fZ; aC++) {
				var fp = bP.j2(fL, bP.jK(mz[aC]));
				fp < aaz && bD.gv.lY(player, mo[aC] >> 3) && (aaz = fp, aSO = aC)
			}
			return aSO
		}(player, fL)) && !!abC(player, fL) && (bR.gB[3] = bQ.z.mn[fL], !0)
	}, this.qx = function(player, ns) {
		return !!abA(player) && !!bQ.lj.aZn(ns) && !!abC(player, bR.gB[2])
	}, this.rq = function(player, ns, abD) {
		return !! function(player, ns, abD) {
			if (abA(player) && bQ.lj.aZn(ns)) {
				ns = bR.gB[2];
				if (bD.gv.lY(player, bQ.z.mo[ns] >> 3)) {
					if (function(player, aa3) {
							return bQ.lj.ab1(player, aa3) && (bR.h[0] = bQ.mG.mO(bQ.z.mm[aa3]), bR.gB[1] = 6, !0)
						}(player, ns)) return 1;
					var aZi = bP.jK(bQ.z.mz[ns]),
						abH = bQ.lj.aat(player, aZi);
					if (-1 !== abH) {
						abH = bP.j2(abH, aZi);
						if (!(abD && 120 < abH)) {
							abD = function(aa3, abI, aZi) {
								var mF = bQ.z.mm[aa3],
									aa3 = bQ.z.my[aa3],
									abK = bP.j2(aZi, mF[aa3 + 1]);
								if (abI <= abK) return bQ.lj.ab2(aZi, mF[aa3 + 1], abK, abI);
								for (var fp = abI - abK, fZ = mF.length - 1, aC = aa3 + 1; aC < fZ; aC++) {
									var abL = bP.j2(mF[aC], mF[aC + 1]);
									if (fp <= abL) return bQ.lj.ab2(mF[aC], mF[aC + 1], abL, fp);
									fp -= abL
								}
								return mF[fZ]
							}(ns, abH, aZi);
							if (bQ.lh.rn(player, abD, 1)) return bR.gB[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, ns, abD) && (player = bR.gB[2], bQ.z.ml[player] = 64 + bQ.z.ml[player] % 64, bQ.mt.ei(ns, bQ.z.n3), !0)
	}
}

function aZQ() {
	function abQ(player, iI, abO, aZi) {
		var k3;
		if (ad.fQ(abO)) k3 = aE.fW;
		else {
			if ((k3 = ad.fR(abO)) === player) return void bg.gz(player, iI - bD.gv.gy(player, iI), 12);
			if (!bv.fS(player, k3)) return void bB.kw.rC(player, k3, iI)
		}
		ae.kF(player, k3) || ae.kY(player) ? (ah.h1[player].push(aZi << 2), ae.ei(player, iI, k3), aG.k1(player, !0)) : bg.gz(player, iI, 12)
	}
	this.ee = function() {
		for (var ml = bQ.z.ml, mz = bQ.z.mz, aa4 = bQ.z.aa4, aC = bQ.z.mk - 1; 0 <= aC; aC--) 65535 === aa4[aC] && function(aC, aZi, iQ) {
			if (6 === iQ) {
				if (bQ.mt.aZr(aC, aZi)) return bQ.z.my[aC]++, bQ.z.aa4[aC] = 0, 0
			} else {
				var player = bQ.z.mo[aC] >> 3,
					aC = bQ.z.a8n[aC];
				bg.abP(player), iQ < 4 ? abQ(player, aC, aZi + bP.ie[iQ] << 2, aZi) : 4 === iQ ? function(player, iI, aZi) {
					var aC, fd, ip = bP.ig,
						fO = bP.fP(aZi);
					for (aC = 0; aC < 4; aC++)
						if (fd = fO + ip[aC], ad.fQ(fd)) return abQ(player, iI, fd, aZi);
					for (aC = 0; aC < 4; aC++)
						if (fd = fO + ip[aC], ad.h9(fd) && !ad.a0I(player, fd)) return abQ(player, iI, fd, aZi);
					for (aC = 0; aC < 4; aC++)
						if (fd = fO + ip[aC], ad.h9(fd)) return abQ(player, iI, fd, aZi)
				}(player, aC, aZi) : 5 === iQ && function(player, iI, aZi) {
					var aC, fd, ip = bP.ig,
						fO = bP.fP(aZi);
					for (aC = 0; aC < 4; aC++)
						if (fd = fO + ip[aC], ad.h9(fd) && ad.a0I(player, fd)) return abQ(player, iI, fd, aZi);
					for (aC = 0; aC < 4; aC++)
						if (fd = fO + ip[aC], ad.h9(fd)) return abQ(player, iI, fd, aZi);
					for (aC = 0; aC < 4; aC++)
						if (fd = fO + ip[aC], ad.fQ(fd)) return abQ(player, iI, fd, aZi)
				}(player, aC, aZi)
			}
			return 1
		}(aC, bP.jK(mz[aC]), ml[aC] % 64) && (bQ.mt.aZo(aC), bQ.aK5.aa7(aC))
	}, this.abN = function(player, fL, iQ, ns, iI) {
		if (!(5 <= iQ)) {
			var aae = aE.fJ;
			if (bD.gv.hl(aae) && bv.fS(player, aae) && player !== aae && 0 !== ah.hG[aae].length && bD.gv.a5f(player, 5)) {
				for (var abO, fn = !1, aC = 0; aC < 4; aC++)
					if (abO = fL + bP.ie[aC] << 2, ad.fU(abO) && !ad.fQ(abO) && ad.fR(abO) === aae) {
						fn = !0;
						break
					} fn && (aO.a8v(719, 0), iQ = iI < 25e3 ? L(504) + " (" + bD.tI.a1X(iI) + ") ⛵" : L(505) + " (" + bD.tI.a1X(iI) + ") 🚢", aO.a0i(180, iQ, 719, player, bE.pv, bE.pL, -1, !0, void 0, {
					ft: 1,
					ns: ns
				}))
			}
		}
	}
}

function aZN() {
	this.l8 = 512, this.aa5 = 8, this.mk = 0, this.n3 = 0, this.mo = new Uint16Array(this.l8), this.mz = new Uint32Array(this.l8), this.aa4 = new Uint16Array(this.l8), this.a8n = new Uint32Array(this.l8), this.aaC = new Uint16Array(this.l8), this
		.mn = new Uint16Array(this.l8), this.ml = new Uint8Array(this.l8), this.aaE = new Uint8Array(this.l8), this.mm = new Array(this.l8), this.my = new Uint16Array(this.l8), this.ky = new Uint8Array(aE.fW), this.a9t = new Uint16Array(this.aa5 * aE
			.fW), this.dk = function() {
			this.mk = 0, this.n3 = 0, this.ky.fill(0), this.mm.fill(null)
		}, this.n5 = function(player) {
			var iI = bR.g6[0],
				mp = bR.gB[1],
				mF = bR.h[0],
				abT = this.n3,
				fZ = this.mk,
				abU = bP.jJ(mF[0]),
				abV = this.ky[player],
				abW = (player << 3) + abV;
			this.mo[fZ] = abW, this.mz[fZ] = abU, this.aa4[fZ] = 0, iI < 60 && (bD.gv.gw(player, 60 - iI), iI = 60), this.a8n[fZ] = iI, this.aaC[fZ] = bQ.jM.n5(fZ, bP.jL(abU)), this.mn[fZ] = abT, this.ml[fZ] = mp, this.aaE[fZ] = 0, this.mm[fZ] = mF,
				this.my[fZ] = 0, this.n3 = (abT + 1) % 65536, this.ky[player] = abV + 1, this.a9t[abW] = fZ, this.mk++, bQ.mp.abN(player, mF[mF.length - 1], mp, abT, iI)
		}, this.ee = function() {
			bQ.mp.ee();
			for (var h7 = aE.fJ, ea = bQ.lj.aK2(h7), tt = (! function(tt) {
					for (var abb, mz = tt.mz, a8n = tt.a8n, aaE = tt.aaE, aa4 = tt.aa4, aaC = tt.aaC, mm = tt.mm, my = tt.my, tt = tt.mk, aah = bV.fk << 4, aC = tt - 1; 0 <= aC; aC--) {
						var abc = mz[aC],
							mF = mm[aC],
							abd = my[aC],
							abU = bP.jJ(mF[abd]),
							abe = bP.jJ(mF[abd + 1]),
							abf = abU % aah,
							abU = ~~((abU + .5) / aah),
							abh = abe % aah,
							abi = ~~((abe + .5) / aah),
							abj = abh - abf,
							abk = abi - abU,
							fc = Math.max(~~Math.sqrt(abj * abj + abk * abk + .5), 1),
							aKz = a8n[aC],
							aKz = (aKz = aaE[aC] ? 4e4 : 25e4 + Math.min(20 * aKz, 3e5) + Math.min(aKz >> 3, 5e4), aa4[aC] + Math.max(~~((aKz + .5) / fc), 1));
						65535 <= aKz ? abd + 2 < mF.length ? (my[aC] = abd + 1, mz[aC] = abb = function(aC, abl, abf, abg, abd, fc, mF, aah) {
							abl = Math.min(abl - 65535, 65535);
							var mF = bP.jJ(mF[abd + 2]),
								abd = mF % aah - abf,
								mF = ~~((mF + .5) / aah) - abg,
								abo = Math.max(~~Math.sqrt(abd * abd + mF * mF + .5), 1);
							return abl = Math.min(Math.floor((fc * abl + .5) / abo), 65534), bQ.z.aa4[aC] = abl, abf + bO.g0(abl * abd, 65535) + aah * (abg + bO.g0(abl * mF, 65535))
						}(aC, aKz, abh, abi, abd, fc, mF, aah)) : (mz[aC] = abb = abe, aa4[aC] = 65535) : (aa4[aC] = aKz, mz[aC] = abb = abf + bO.g0(aKz * abj, 65535) + aah * (abU + bO.g0(aKz * abk, 65535))), aaC[aC] = bQ.jM.abn(aaC[aC],
							abc, abb)
					}
				}(this), ! function(tt) {
					if (bi.kr() % 2 == 1) {
						var aC, iR, lp, ft, ej, abp, a1B, abq, i1, nv, nw, abU, abr, aBM, abu, lX, fZ = tt.mk,
							mz = tt.mz,
							mo = tt.mo,
							a8n = tt.a8n,
							aaE = tt.aaE,
							jM = bQ.jM.jM,
							abw = jM.length,
							abx = bQ.jM.abx,
							aah = bV.fk << 4,
							aby = aE.iT,
							aXP = bj.fX,
							h8 = (fZ - 1) * (bO.g0(bi.kr(), 2) % 2);
						for (aC = 0; aC < fZ; aC++)
							for (iR = Math.abs(aC - h8), abU = mz[iR], lp = bP.jL(abU), i1 = mo[iR] >> 3, nv = abU % aah, nw = ~~((abU + .5) / aah), abu = a8n[iR], ft = 0; ft < 9; ft++)
								if (!((abp = lp + abx[ft]) < 0 || abw <= abp))
									for (abq = jM[abp], a1B = abq.length, ej = 0; ej < a1B; ej++) abr = abq[ej], lX = mo[abr] >> 3, i1 == lX || aby && aXP[i1] === aXP[lX] && aXP[i1] || (lX = mz[abr], (aBM = nv - lX % aah) * aBM + (aBM = nw -
										~~((lX + .5) / aah)) * aBM < 14400 && (lX = a8n[abr], aBM = lX <= abu ? Math.max(1, bO.g0(lX + bO.g0(abu - lX, 10), 10)) : Math.max(1, bO.g0(abu, 10)), a8n[abr] = Math.max(lX - aBM, 0), aaE[
										abr] = 4))
					}
				}(this), ! function(tt) {
					if (bi.kr() % 5 == 3)
						for (var a8n = tt.a8n, fZ = tt.mk, aC = 0; aC < fZ; aC++) {
							var iI = a8n[aC];
							a8n[aC] = Math.max(iI - Math.max(1, iI >> 7), 0)
						}
				}(this), this), a8n = tt.a8n, aaE = tt.aaE, aC = tt.mk - 1; 0 <= aC; aC--) aaE[aC] = aaE[aC] >> 1, 0 === a8n[aC] && (bQ.mt.aZo(aC), bQ.aK5.aa7(aC));
			bg.gz(h7, ea - bQ.lj.aK2(h7), 15)
		}
}

function aZO() {
	this.abz = 32, this.fg = 0, this.fi = 0, this.jN = 0, this.ac0 = 0, this.ac1 = 4, this.jM = null, this.abx = new Int16Array(9), this.dk = function() {
		this.jN = 1 + bO.g0(bV.fk - 1, this.abz), this.ac0 = 1 + bO.g0(bV.fl - 1, this.abz), this.jM = new Array(this.jN * this.ac0), bD.sS.a4c(this.jM);
		var fg, fi, abx = this.abx,
			j = this.jN;
		for (fg = -1; fg <= 1; fg++)
			for (fi = -1; fi <= 1; fi++) abx[3 * (1 + fi) + 1 + fg] = fi * j + fg
	}, this.n5 = function(ac3, aC) {
		return this.jM[aC].push(ac3), this.jM[aC].length - 1
	}, this.abn = function(ac4, abU, abe) {
		var ac5, ac6, abU = bP.jL(abU),
			abe = bP.jL(abe);
		return abU === abe ? ac4 : (ac5 = this.jM[abU].pop(), this.jM[abU].length === ac4 ? this.n5(ac5, abe) : (ac6 = this.jM[abU][ac4], this.jM[abU][ac4] = ac5, bQ.z.aaC[ac5] = ac4, this.n5(ac6, abe)))
	}
}

function aZS() {
	this.li = function(player, ac7) {
		return -1 !== ac7 && !!bQ.lj.mK(player, ac7) && this.rn(player, ac7, 0)
	}, this.rn = function(player, ac7, ac8) {
		player = function(player, ac7, ac8) {
			var abH = bQ.lj.aat(player, ac7);
			if (-1 === abH) return -1;
			abH = bQ.lj.lk(abH, ac7);
			if (-1 === abH) return -1;
			var mD = bQ.mG.mL(abH, ac7);
			if (0 <= mD) return mD;
			if (bQ.mG.mM()) return -1;
			if (0 <= (mD = bQ.mG.mL(ac7, abH))) return bQ.mG.mN(bQ.mG.mO(bQ.mG.get(mD)));
			if (abH === ac7) return bQ.mG.mN(new Uint32Array([abH, ac7]));
			if (0 <= (mD = bQ.aZT.rn(abH, ac7))) return mD;
			return ac8 ? function(acC, player) {
				var gG = bR.gG,
					buffer = (gG.fill(0), [acC]),
					ih = (gG[acC] = 1, bP.ih),
					acD = -1,
					fZ = buffer.length;
				for (; - 1 === acD && fZ;) {
					for (var h = [], aC = 0; aC < fZ; aC++)
						for (var fL = buffer[aC], a6Q = gG[fL], fc = 0; fc < 8; fc++) {
							var yQ, a31, ff = fL + ih[fc],
								fD = 4 * ff;
							ad.iq(fD) ? (yQ = gG[ff], a31 = a6Q + 5 + ((1 & fc) << 1), 0 === yQ ? (h.push(ff), gG[ff] = a31) : gG[ff] = Math.min(a31, yQ)) : -1 === acD && fc % 2 == 0 && ad.a0F(player, fD) && (acD = fL)
						}
					fZ = (buffer = h).length
				}
				return -1 !== acD ? function(j3, acF) {
					var ih = bP.ih,
						acG = -1,
						iQ = 0,
						nQ = [];
					for (; acF !== j3;)(iQ = function(fL, iQ) {
						var gG = bR.gG,
							ih = bP.ih,
							a6Q = gG[fL];
						if (a6Q - gG[fL + ih[iQ]] != 5 + ((1 & iQ) << 1))
							for (var fs = 0; fs < 8; fs++) {
								var fc = fs + iQ + 6 & 7;
								if (a6Q - gG[fL + ih[fc]] == 5 + ((1 & fc) << 1)) return fc
							}
						return iQ
					}(acF, iQ)) !== acG && (nQ.push(acF), acG = iQ), acF += ih[iQ];
					nQ.push(j3);
					var mD = bQ.mG.mL(nQ[0], j3);
					if (0 <= mD) return mD;
					return bQ.mG.mN(new Uint32Array(nQ))
				}(acC, acD) : -1
			}(ac7, player) : -1
		}(player, ac7, ac8);
		return -1 !== player && (bR.h[0] = bQ.mG.get(player), !0)
	}
}

function aZU() {
	function acI(ho, j8, jA) {
		for (var kA = Math.min(j8, jA), oD = Math.max(j8, jA), fi = kA + 1; fi < oD; fi++)
			if (!ad.iq(bP.jG(ho, fi))) return;
		return 1
	}

	function acJ(hq, j7, j9) {
		for (var kA = Math.min(j7, j9), oD = Math.max(j7, j9), fg = kA + 1; fg < oD; fg++)
			if (!ad.iq(bP.jG(fg, hq))) return;
		return 1
	}

	function acK(j7, j8, j9, jA, acA, ac7) {
		for (var fZ = Math.min(Math.abs(j9 - j7), Math.abs(jA - j8)), iw = Math.sign(j9 - j7), iz = Math.sign(jA - j8), aC = 0; aC < fZ; aC++)
			if (!ad.iq(bP.jG(j7 += iw, j8 += iz))) return null;
		return j7 === j9 ? acI(j7, j8, jA) ? new Uint32Array([acA, bP.fw(j7, j8), ac7]) : null : acJ(j8, j7, j9) ? new Uint32Array([acA, bP.fw(j7, j8), ac7]) : null
	}
	this.rn = function(acA, ac7) {
		acA = function(acA, ac7) {
			var j7 = bP.fh(acA),
				j8 = bP.fj(acA),
				j9 = bP.fh(ac7),
				jA = bP.fj(ac7);
			if (j7 === j9) {
				if (acI(j7, j8, jA)) return new Uint32Array([acA, ac7])
			} else {
				if (j8 !== jA) return acK(j7, j8, j9, jA, acA, ac7) || acK(j9, jA, j7, j8, acA, ac7);
				if (acJ(j8, j7, j9)) return new Uint32Array([acA, ac7])
			}
			return null
		}(acA, ac7);
		return null === acA ? -1 : bQ.mG.mN(acA)
	}
}

function aZZ() {
	var acL = [];
	this.dk = function() {
		acL = []
	}, this.mM = function() {
		return 65536 === acL.length
	}, this.mL = function(acA, ac7) {
		for (var mG = acL, fZ = mG.length, aC = 0; aC < fZ; aC++) {
			var h7 = mG[aC];
			if (h7[0] === acA && h7[h7.length - 1] === ac7) return aC
		}
		return -1
	}, this.mO = function(mF) {
		var acM = new Uint32Array(mF.length);
		return acM.set(mF), acM.reverse()
	}, this.aZv = function(i1, lX) {
		var h2 = i1.length - 1,
			acN = new Uint32Array(h2 + lX.length);
		return acN.set(i1, 0), acN.set(lX, h2), acN
	}, this.aa0 = function(i1, lX, xu, fL, acO) {
		acO && (xu = (lX = this.mO(lX)).length - xu - 2);
		acO = lX.subarray(xu + 1 + (fL === lX[xu + 1])), fL = new Uint32Array(i1.length + acO.length);
		return fL.set(i1, 0), fL.set(acO, i1.length), fL
	}, this.mN = function(mF) {
		return acL.push(mF), acL.length - 1
	}, this.get = function(aC) {
		return acL[aC]
	}, this.mI = function() {
		return acL
	}, this.acQ = function(acA, ac7) {
		return null
	}
}

function aZd() {
	this.ee = function(player, ns) {
		player = bQ.lj.nu(player, ns);
		return !(player < 0 || !bQ.mt.aa2(player) || (bQ.mt.aZo(player), 0))
	}
}

function aZP() {
	var a0q = 32,
		a0p = new Array(2);

	function yf(ej) {
		var fg, fi, fL, iz, iw, iV = a0q,
			a55 = bD.sK.yf(iV, iV),
			ib = bD.sK.getContext(a55, !0),
			iY = bD.sK.getImageData(ib, iV, iV),
			yq = iY.data,
			lp = (iV >> 1) - .5,
			lq = Math.sqrt(lp * lp);
		for (yq.fill(255), fi = 0; fi < iV; fi++)
			for (fg = 0; fg < iV; fg++) iw = fg - lp, iz = fi - lp, fL = 4 * (fi * iV + fg), iw = 714 * (lq - Math.sqrt(iw * iw + iz * iz)) / lq, yq[2 + fL] = ej, yq[3 + fL] = 255 < iw ? 0 : iw;
		return ib.putImageData(iY, 0, 0), a55
	}
	this.acR = -1, this.dk = function() {
		this.acR = -1, a0p[0] || (a0p[0] = yf(255), a0p[1] = yf(0))
	}, this.acS = function(ib, fD, fg, fi, eH, aC) {
		bD.gv.hl(aE.fJ) && (ib.setTransform(fD *= 4 / 3 * .625, 0, 0, fD, fg - (eH *= 4 / 3), fi - eH), ib.drawImage(a0p[+(bQ.z.mn[aC] === this.acR)], 0, 0))
	}
}

function aZY() {
	function aXg(fg, fZ, fi, acT, aBS, fz, player) {
		if (!(fi < 1 || aBS < fi))
			for (var aC = 0; aC <= fZ; aC++) {
				var fD = bP.jG(fg, fi);
				if (bQ.lj.aa6(fD) && !bD.sS.has(acT, ad.fH(fD)) && ad.a07(fD, player)) return fD >> 2;
				fg += fz
			}
		return -1
	}

	function aXk(fi, fZ, fg, acT, aXe, fz, player) {
		if (!(fg < 1 || aXe < fg)) {
			fZ = Math.max(fZ, 0);
			for (var aC = 0; aC <= fZ; aC++) {
				var fD = bP.jG(fg, fi);
				if (bQ.lj.aa6(fD) && !bD.sS.has(acT, ad.fH(fD)) && ad.a07(fD, player)) return fD >> 2;
				fi += fz
			}
		}
		return -1
	}

	function aXo(j3, j4, aXb) {
		return -1 !== j4 && (-1 === j3 || bP.j5(j4, aXb) < bP.j5(j3, aXb)) ? j4 : j3
	}
	this.iA = function(player, aXb) {
		if (bQ.n0.n1(player))
			for (var aXc = bP.ii(), acT = [];;) {
				var acD = function(aXb, aXc, acT, player) {
					for (var ho = bP.fh(aXb), hq = bP.fj(aXb), aXe = bV.fk - 2, aBS = bV.fl - 2, aXf = -1, fc = 0; fc < aXc; fc++) {
						var aBR = Math.max(ho - fc, 1),
							aOC = Math.max(hq - fc, 1),
							a03 = Math.min(ho + fc, aXe),
							a02 = Math.min(hq + fc, aBS),
							j3 = aXg(ho, a03 - ho, hq - fc, acT, aBS, 1, player),
							j4 = aXg(ho - 1, ho - aBR - 1, hq - fc, acT, aBS, -1, player),
							a03 = aXg(ho, a03 - ho, hq + fc, acT, aBS, 1, player),
							aBR = aXg(ho - 1, ho - aBR - 1, hq + fc, acT, aBS, -1, player),
							aXj = aXk(hq, a02 - hq - 1, ho - fc, acT, aXe, 1, player),
							aXl = aXk(hq - 1, hq - aOC - 2, ho - fc, acT, aXe, -1, player),
							a02 = aXk(hq, a02 - hq - 1, ho + fc, acT, aXe, 1, player),
							aOC = aXk(hq - 1, hq - aOC - 2, ho + fc, acT, aXe, -1, player);
						if (aXf = aXo(aXf, j3, aXb), aXf = aXo(aXf, j4, aXb), aXf = aXo(aXf, a03, aXb), aXf = aXo(aXf, aBR, aXb), aXf = aXo(aXf, aXj, aXb), aXf = aXo(aXf, aXl, aXb), aXf = aXo(aXf, a02, aXb), 0 <= (aXf = aXo(aXf, aOC, aXb)) &&
							fc * fc >= bP.j5(aXf, aXb)) return aXf
					}
					return -1
				}(aXb, aXc, acT, player);
				if (-1 === acD) break;
				var id = ad.fH(bP.fP(acD));
				if (bQ.lj.aar(player, id)) return !! function(player, acD, aXb) {
					for (var iQ = bP.jQ(acD, aXb), aC = 0; aC < 4; aC++) {
						var fL = bP.jO(acD, iQ);
						if (ad.aJa(bP.fP(fL), player)) return bR.gB[6] = iQ, 1;
						iQ = (iQ + 1) % 4
					}
					return
				}(player, acD, aXb) && (bR.gB[7] = acD, !0);
				acT.push(id)
			}
		return !1
	}
}

function dn() {
	this.aV2 = [L(506), L(507), L(508), L(509), L(510), L(511), L(512), L(513), L(514), L(515), L(516), L(517), L(518), L(519), L(520), L(521)];
	var acW = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aDw = new Array(acW.length), this.dk = function() {
		var h = bm.buffer.data[155].value.split(";"),
			lp = h.length;
		if (function() {
				for (var fZ = acW.length, aC = 0; aC < fZ; aC++) ba.aDw[aC] = acW[aC]
			}(), !(lp > acW.length))
			for (var aC = 0; aC < lp; aC++) h[aC].length && (this.aDw[aC] = h[aC])
	}, this.aV4 = function(eI, code) {
		for (var aDw = this.aDw, acY = acW, s1 = (aDw[eI] = code, ""), fZ = aDw.length, acZ = [], aC = 0; aC < fZ; aC++) acZ.push(aDw[aC] === acY[aC] ? "" : aDw[aC]);
		fZ--;
		for (aC = 0; aC < fZ; aC++) s1 += acZ[aC] + ";";
		bm.qo.qp(155, s1 += acZ[fZ])
	}, this.aV1 = function() {
		bm.qo.qp(155, ""), this.dk()
	}, this.ej = function(code, eI) {
		return code === this.aDw[eI] || code === this.aDw[eI + 1]
	}
}

function de() {
	var aca = new Array(1),
		acb = new Array(1),
		acc = 20,
		eX = 0,
		acd = !1;

	function acf() {
		acc++, bs.play()
	}
	this.dk = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				acb[aC] = 0, aca[aC] = document.createElement("audio"), aca[aC].src = src, aca[aC].setAttribute("preload", "auto"), aca[aC].setAttribute("controls", "none"), aca[aC].style.display = "none", aca[aC].onpause = function() {
					acb[aC] = 1
				}, aca[aC].oncanplaythrough = function() {
					acb[aC] = 0 === acb[aC] ? 1 : acb[aC]
				}, document.body.appendChild(aca[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			acd = !0
		}
	}, this.vx = function() {
		if (acd) {
			acd = !1;
			for (var aC = 0; 0 <= aC; aC--) aca[aC].onpause = null, aca[aC].oncanplaythrough = null, u.removeChild(document.body, aca[aC]), aca[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bs.play()
	}), this.play = function() {
		if (acd) {
			var ea = performance.now();
			if (eX + 66 < ea)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === acb[aC]) return eX = ea, acb[aC] = 2, void aca[aC].play();
			0 < acc && (acc--, setTimeout(acf, 66))
		}
	}
}

function ce() {
	this.aAR = function() {
		var aci;
		return !(am.lQ < 3 || ah.hN[mV[0]] >= aE.ke >> 1) && (aE.iT ? 9 !== aE.lC && (aci = af.aLc(), !(2 * af.aLd(bk.lT()) >= aci)) : function() {
			if (8 === aE.lC) return !1;
			var aci = af.aLc();
			if (2 * ah.hb[mV[0]] >= aci) return !1;
			return !0
		}())
	}
}

function cE() {
	this.dk = function() {
		if (0 === aE.data.sResourcesType) {
			for (var abV = aE.ku, hb = ah.hb, aC = 0; aC < abV; aC++) hb[aC] = 512;
			var abW = aE.zL,
				l7 = aF.l7,
				iI = aF.iI;
			for (aC = abV; aC < abW; aC++) hb[aC] = l7[iI[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fZ = aE.zL, hb = ah.hb, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fZ; aC++) hb[aC] = sResourcesValue
		} : function() {
			for (var fZ = aE.zL, hb = ah.hb, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fZ; aC++) hb[aC] = sResourcesData[aC]
		})();
		bg.nQ[8] = ah.hb[aE.fJ]
	}
}

function dV() {
	var aJo = 501,
		aco = (this.acn = new Uint32Array(aJo), this.a5k = new Uint32Array(aJo), this.aDb = new Uint16Array(aJo), this.aVC = 0, 1),
		wA = 0;

	function acr(self) {
		self.max.fill(0)
	}

	function act(self, aC) {
		self.max[0] = Math.max(self.acn[aC], self.max[0]), self.max[1] = Math.max(self.a5k[aC], self.max[1]), self.max[2] = Math.max(self.aDb[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.acp = 0, this.nQ = new Array(21), this.acq = null, this.dl = function() {
		this.acq = [L(522), L(523), L(524), L(525), L(526), L(527), L(528), L(529), L(348), L(349), L(530), L(531), L(532), L(533), "", L(534), L(535), L(536), L(306), L(537), L(538)]
	}, this.dk = function() {
		this.aVC = 0, aco = 1, this.acp = 0, wA = 0, acr(this), this.nQ.fill(0)
	}, this.rk = function(player, jC) {
		bD.gv.a5e(player) && (this.nQ[0] += jC + 1, this.nQ[1]++, this.nQ[12] += bR.g6[1])
	}, this.rF = function(player, qs) {
		__fx.donationsTracker.logDonation(player, qs, bR.g6[0], aX.a7H());
		player === aE.fJ && (aO.rF(bR.g6[0], bR.g6[1], qs), this.nQ[12] += bR.g6[1], this.nQ[16] += bR.g6[0]), qs === aE.fJ && (aO.a8z(bR.g6[0], player), this.nQ[10] += bR.g6[0])
	}, this.ro = function(player) {
		bD.gv.a5e(player) && (this.nQ[2]++, this.nQ[12] += bR.g6[1])
	}, this.rw = function(player) {
		bD.gv.a5e(player) && (this.nQ[19]++, this.nQ[12] += bR.g6[1])
	}, this.abP = function(player) {
		bD.gv.a5e(player) && this.nQ[20]++
	}, this.gz = function(player, a6Q, eI) {
		bD.gv.a5e(player) && (this.nQ[eI] += a6Q)
	}, this.ee = function() {
		var self;
		this.acp || 0 < wA-- || ((self = this).acn[self.aVC] = ah.hN[aE.fJ], self.a5k[self.aVC] = ah.hb[aE.fJ], self.aDb[self.aVC] = af.aDc(aE.fJ), act(self, self.aVC), self.aVC++, self.aVC === aJo && function(self) {
			acr(self), act(self, 0), self.aVC = 1 + bO.g0(aJo, 2);
			for (var aC = 1; aC < self.aVC; aC++) self.acn[aC] = self.acn[2 * aC], self.a5k[aC] = self.a5k[2 * aC], self.aDb[aC] = self.aDb[2 * aC], act(self, aC);
			aco *= 2
		}(self), wA = aco - 1, bh.nH(), 0 === ah.nU[aE.fJ] && (self.acp = bi.kr()))
	}
}

function dW() {
	this.j = 0, this.k = 0, this.uf = 0, this.ug = 0, this.acv = 0, this.acw = 0, this.aAf = 0, this.vN = 0;
	var acy = this.acx = 0;
	this.acz = 0, this.ad0 = 0, this.ad1 = 0, this.aA0 = 0, this.eI = 0, this.aDC = null, this.iL = !1, this.ad2 = -1, this.ad3 = !1, this.ad4 = [0, 0], this.dl = function() {
		this.aDC = [L(539), L(125, 0, "Balance"), L(124, 0, "Interest"), L(540)]
	}, this.dk = function() {
		this.iL = !1, this.ad2 = -1, this.ad3 = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fc = a1.a2.ik() && i.j < i.k ? 1 : a1.a2.ik() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fc * this.j), this.j -= a1.a2.ik() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.aA0 = Math.floor(this.k / 150), this.aA0 = Math.max(this.aA0, 1.5), this.uf = Math.floor(1 + .02 * this
			.j), this.ug = Math.floor(1 + .04 * this.j), this.aAf = this.ug, acy = Math.floor(.75 * this.aAf), this.vN = Math.floor(1 + .075 * this.j), this.acz = Math.floor(1 + .1125 * this.j), this.ad0 = Math.floor(this.j * (a1.a2.ik() ? .03 :
				.029)), this.ad0 = Math.max(this.ad0, 4), this.ad1 = Math.floor(.035 * this.j), this.ad1 = Math.max(this.ad1, 4), this.acx = this.k - 2 * this.aAf - this.vN - this.acz, this.iL && this.ad5()
	}, this.hm = function(m9, mA) {
		var zO, zN;
		return !!this.iL && (zN = m9, zO = mA, m9 -= bO.g0(i.j - this.j, 2), mA -= bO.g0(i.k - this.k, 2), m9 < 0 || mA < 0 || m9 >= this.j || mA >= this.k || m9 >= this.j - this.acz && mA < this.acz ? -1 !== aN.hm(zN, zO) || bF.hm(zN, zO) ||
			this.tZ() : mA < this.acz || (mA < this.k - this.vN ? (this.ad3 = !0, this.ad2 = (m9 - 2 * this.uf - this.acv) / this.acw, 3 !== this.eI && (bi.ds = !0)) : (zN = (zN = Math.floor(m9 / (this.j / this.aDC.length))) < 0 ? 0 : zN >=
				this.aDC.length ? this.aDC.length - 1 : zN) !== this.eI && (this.eI = zN, this.ad5(), bi.ds = !0)), !0)
	}, this.a3m = function(m9, mA) {
		return this.ad4[0] = m9, this.ad4[1] = mA, !(!this.iL || !this.ad3 || (m9 -= bO.g0(i.j - this.j, 2), mA = this.ad2, this.ad2 = (m9 - 2 * this.uf - this.acv) / this.acw, (0 <= this.ad2 && this.ad2 <= 1 || 0 <= mA && mA <= 1) && (bi.ds = !
			0), 0))
	}, this.a4B = function() {
		this.ad3 && (this.ad3 = !1)
	}, this.a4N = function() {
		this.iL ? this.tZ() : this.show()
	}, this.show = function() {
		bg.aVC < 2 || (this.iL = !0, this.ad5())
	}, this.tZ = function() {
		this.iL = !1, this.ad2 = -1, bi.ds = !0
	}, this.ad5 = function() {
		this.eI < 2 ? this.acv = aR.measureText(bD.tI.a1X(bg.max[this.eI]), bD.sK.u8(0, this.ad0)) : 2 === this.eI && (this.acv = aR.measureText(bD.tI.a6J(6, 2), bD.sK.u8(0, this.ad0))), this.acw = this.j - 2 * this.uf - this.acv - this.ug
	}, this.nH = function() {
		this.iL && this.ad5()
	}, this.wr = function() {
		this.iL && this.aAx()
	}, this.aAx = function() {
		var fg = bO.g0(i.j - this.j, 2),
			fi = bO.g0(i.k - this.k, 2);
		ws.setTransform(1, 0, 0, 1, fg, fi), ws.fillStyle = bE.pL, ws.fillRect(0, this.acz, this.j, this.k - this.acz), this.ad6(), this.aTi(), ws.strokeRect(0, 0, this.j, this.k), bD.sK.textAlign(ws, 2), ws.font = bD.sK.u8(0, this.ad0), 0 ===
			this.eI ? this.ad7(bg.acn, fg, fi) : 1 === this.eI ? this.ad7(bg.a5k, fg, fi) : 2 === this.eI ? this.ad8(fg, fi) : 3 === this.eI && (this.ad9(fg, fi), this.adA(fg, fi)), aN.a87(Math.floor(fg + this.j - .725 * this.acz), Math.floor(
				fi + .275 * this.acz), Math.floor(.45 * this.acz)), ws.setTransform(1, 0, 0, 1, 0, 0)
	}, this.ad6 = function() {
		var aC, ea;
		for (ws.lineWidth = this.aA0, bD.sK.textBaseline(ws, 1), bD.sK.textAlign(ws, 1), ws.strokeStyle = bE.pO, ws.font = bD.sK.u8(1, this.ad1), ea = this.j / this.aDC.length, ws.fillStyle = bE.pk, ws.fillRect(this.eI * ea, this.k - this.vN, ea,
				this.vN), ws.fillStyle = bE.pO, ws.fillRect(0, this.k - this.vN - .5 * this.aA0, this.j, this.aA0), aC = 1; aC <= 3; aC++) ws.fillRect(aC * ea, this.k - this.vN, this.aA0, this.vN);
		for (aC = this.aDC.length - 1; 0 <= aC; aC--) ws.fillText(bD.ou.a5J(this.aDC[aC], 0, .9 * ea), (aC + .5) * ea, this.k - .46 * this.vN)
	}, this.aTi = function() {
		ws.fillStyle = bE.qA, ws.fillRect(0, 0, this.j, this.acz), ws.fillStyle = bE.pO, ws.fillRect(0, this.acz - .5 * this.aA0, this.j, this.aA0), ws.font = bD.sK.u8(1, .39 * this.acz), ws.fillText(bD.ou.a5J(L(541), 0, .8 * this.j), Math.floor(
			this.j / 2), Math.floor(.55 * this.acz))
	}, this.ad7 = function(h, fg, fi) {
		var lp = bg.max[this.eI],
			a4e = (ws.setTransform(1, 0, 0, 1, fg + 2 * this.uf + this.acv, fi + this.aAf + this.acz), ws.lineWidth = 2, this.acx / Math.sqrt(lp));
		ws.beginPath(), ws.moveTo(this.acw, this.acx - a4e * Math.sqrt(h[bg.aVC - 1]));
		for (var aC = bg.aVC - 2; 0 <= aC; aC--) ws.lineTo(aC * this.acw / (bg.aVC - 1), this.acx - a4e * Math.sqrt(h[aC]));
		ws.stroke();
		fg = this.a87(h, a4e, .5);
		fg < .95 && ws.fillText(bD.tI.a1X(lp), -this.uf, 0), .05 < Math.abs(fg - .5) && ws.fillText(bD.tI.a1X(Math.floor(lp / 4)), -this.uf, Math.floor(this.acx / 2)), .05 < fg && ws.fillText("0", -this.uf, this.acx)
	}, this.ad8 = function(fg, fi) {
		ws.setTransform(1, 0, 0, 1, fg + 2 * this.uf + this.acv, fi + this.aAf + this.acz), ws.lineWidth = 2;
		var a4e = this.acx / Math.max(bg.max[this.eI], 1);
		ws.beginPath(), ws.moveTo(this.acw, this.acx - a4e * bg.aDb[bg.aVC - 1]);
		for (var aC = bg.aVC - 2; 0 <= aC; aC--) ws.lineTo(aC * this.acw / (bg.aVC - 1), this.acx - a4e * bg.aDb[aC]);
		ws.stroke();
		fg = this.a87(bg.aDb, a4e, 1), fi = bg.max[this.eI] / 100;
		fg < .95 && ws.fillText(bD.tI.a6J(fi, 2), -this.uf, 0), .05 < Math.abs(fg - .5) && ws.fillText(bD.tI.a6J(fi / 2, 2), -this.uf, Math.floor(this.acx / 2)), .05 < fg && ws.fillText(bD.tI.a6J(0, 2), -this.uf, this.acx)
	}, this.ad9 = function(fg, fi) {
		ws.setTransform(1, 0, 0, 1, fg + .34 * this.j, fi + 2 * acy + this.acz), bD.sK.textAlign(ws, 2);
		for (var aCu = this.k - 4 * acy - this.vN - this.acz, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) ws.fillText(bD.ou.a5J(bg.acq[h[aC]], 0, .31 * this.j), 0, aC * aCu / 9);
		var g1 = bg.nQ;
		for (ws.setTransform(1, 0, 0, 1, fg + .39 * this.j, fi + 2 * acy + this.acz), bD.sK.textAlign(ws, 0), ws.fillText(bD.tI.a6J(100 * g1[0] / (1024 * Math.max(g1[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) ws.fillText(g1[h[aC]].toString(), 0,
			aC * aCu / 9);
		ws.fillText(bD.tI.a6J(100 * (1 - ah.hN[aE.fJ] / g1[7]), 0), 0, aCu)
	}, this.adA = function(fg, fi) {
		ws.setTransform(1, 0, 0, 1, fg + .79 * this.j, fi + 2 * acy + this.acz), bD.sK.textAlign(ws, 2);
		var aC, aCu = this.k - 4 * acy - this.vN - this.acz;
		for (ws.fillStyle = bE.pf, aC = 2; 0 <= aC; aC--) ws.fillText(bD.ou.a5J(bg.acq[aC + 8], 0, .31 * this.j), 0, aC * aCu / 9);
		ws.fillText(bD.ou.a5J(bg.acq[18], 0, .31 * this.j), 0, 3 * aCu / 9), ws.fillStyle = bE.pe, ws.fillText(bD.ou.a5J(bg.acq[11], 0, .31 * this.j), 0, 4 * aCu / 9), ws.fillStyle = bE.px, ws.fillText(bD.ou.a5J(bg.acq[13], 0, .31 * this.j), 0,
				5 * aCu / 9), ws.fillText(bD.ou.a5J(bg.acq[15], 0, .31 * this.j), 0, 6 * aCu / 9), ws.fillText(bD.ou.a5J(bg.acq[16], 0, .31 * this.j), 0, 7 * aCu / 9), ws.fillText(bD.ou.a5J(bg.acq[12], 0, .31 * this.j), 0, 8 * aCu / 9), ws
			.fillStyle = bE.pw, ws.fillText(bD.ou.a5J(bg.acq[17], 0, .31 * this.j), 0, aCu), ws.fillStyle = bE.pf;
		var g1 = bg.nQ,
			aH0 = g1[8] + g1[9] + g1[10] + g1[18],
			aH0 = bD.tI.a1X(aH0),
			aST = ws.measureText(aH0).width,
			fg = (ws.setTransform(1, 0, 0, 1, fg + .83 * this.j + aST, fi + 2 * acy + this.acz), ws.fillText(bD.tI.a1X(g1[8]), 0, 0), ws.fillText(bD.tI.a1X(g1[9]), 0, aCu / 9), ws.fillText(bD.tI.a1X(g1[10]), 0, 2 * aCu / 9), ws.fillText(bD.tI
				.a1X(g1[18]), 0, 3 * aCu / 9), ws.fillStyle = bE.pe, ws.fillText(aH0, 0, 4 * aCu / 9), ws.fillStyle = bE.px, ws.fillText(bD.tI.a1X(g1[13]), 0, 5 * aCu / 9), ws.fillText(bD.tI.a1X(g1[15]), 0, 6 * aCu / 9), ws.fillText(bD.tI
				.a1X(g1[16]), 0, 7 * aCu / 9), ws.fillText(bD.tI.a1X(g1[12]), 0, 8 * aCu / 9), g1[12] + g1[13] + g1[15] + g1[16]);
		ws.fillStyle = bE.pw, ws.fillText(bD.tI.a1X(fg), 0, aCu), ws.fillStyle = bE.pO
	}, this.a87 = function(h, a4e, aBa) {
		var aC, e, gI;
		return this.ad2 < 0 || 1 < this.ad2 ? .25 : (aC = this.ad2 * (bg.aVC - 1), gI = h[e = Math.floor(aC)], gI += (aC - e) * (h[e < bg.aVC - 1 ? e + 1 : e] - gI), ws.strokeStyle = bE.pR, .04 < this.ad2 && this.adC(0, this.acx - a4e * Math.pow(
				gI, aBa), aC * this.acw / (bg.aVC - 1), this.acx - a4e * Math.pow(gI, aBa)), .04 < gI / bg.max[this.eI] && this.adC(aC * this.acw / (bg.aVC - 1), this.acx, aC * this.acw / (bg.aVC - 1), this.acx - a4e * Math.pow(gI, aBa)), ws
			.fillStyle = bE.pz, ws.beginPath(), ws.arc(aC * this.acw / (bg.aVC - 1), this.acx - a4e * Math.pow(gI, aBa), Math.max(2, .014 * this.k), 0, 2 * Math.PI), ws.fill(), h = this.ad2 * bi.aDd, h = 0 === ah.nU[aE.fJ] ? Math.floor(h * bg
				.acp) : Math.floor(h * bi.kr()), ws.fillStyle = bE.pO, ws.fillText(1 === aBa ? bD.tI.a6J(gI / 100, 2) : bD.tI.a1X(Math.floor(gI)), -this.uf, this.acx - a4e * Math.pow(gI, aBa)), bD.sK.textAlign(ws, 1), ws.fillText(aX.aDQ(h),
				aC * this.acw / (bg.aVC - 1), this.acx + this.ad0 - (a1.a2.ik() ? 2 : 0) - this.aA0), bD.sK.textAlign(ws, 2), a4e * Math.pow(gI, aBa) / this.acx)
	}, this.adC = function(nv, nw, o8, o9) {
		ws.beginPath(), ws.moveTo(nv, nw), ws.lineTo(o8, o9), ws.stroke()
	}
}

function c2() {
	this.adD = "https://territorial.io/changelog", this.aVD = "https://territorial.io/terms", this.aVE = "https://territorial.io/privacy", this.adE = "https://territorial.io/tutorial", this.adF = "https://territorial.io/players", this.adG =
		"https://territorial.io/clans", this.adH = "https://territorial.io/clan-results", this.aRc = "https://patreon.com/c/territorial", this.aEv = "https://play.google.com/store/apps/details?id=territorial.io", this.a3L =
		"https://apps.apple.com/app/id1581110913", this.aEw = "https://discord.gg/pthqvpTXmh", this.aEx = "https://www.instagram.com/davidtschacher/", this.a15 =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dE() {
	this.z = new adI, this.a0N = new adJ, this.dk = function() {
		this.z.dk()
	}, this.ee = function() {
		0 !== this.z.aXJ && this.z.aXJ--
	}
}

function adJ() {
	this.wr = function() {
		if (0 !== bS.z.aXJ && (ws.globalAlpha = Math.min(bS.z.aXJ / 580, 1), ws.drawImage(bS.z.adM, 1 + aT.a0L(), 1 + aT.a0M()), ws.globalAlpha = 1, aE.hx)) {
			for (var nv = jD / im, nw = jE / im, o8 = (i.j + jD) / im, o9 = (i.k + jE) / im, h8 = bS.z.adN * im, adO = bS.z.adO, aC = aE.ku - 1; 0 <= aC; aC--) ! function(aC, h8, nv, nw, o8, o9, adO) {
				var highlight;
				0 === ah.nU[aC] || 0 === ah.hN[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (h8 *= 2), o8 = i.j * ((ah.jS[aC] + ah.jT[aC] + 1) / 2 - nv) / (o8 - nv) - .5 * h8, nv = i.k * ((ah.jU[
					aC] + ah.jV[aC] + 1) / 2 - nw) / (o9 - nw) - .5 * h8, o8 > i.j) || nv > i.k || o8 < -h8 || nv < -h8 || (highlight ? ws.setTransform(2 * im, 0, 0, 2 * im, o8, nv) : ws.setTransform(im, 0, 0, im, o8, nv), ws.drawImage(
					adO[aE.iT ? bj.fX[aC] : 1], 0, 0))
			}(aC, h8, nv, nw, o8, o9, adO);
			ws.setTransform(im, 0, 0, im, 0, 0)
		}
	}
}

function adI() {
	this.adN = 28, this.aXJ = 0, this.adM = null;
	var adQ = this.adO = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function adU(iV, adV) {
		var fg, fi, fL, iw, a55 = bD.sK.yf(iV, iV),
			ib = bD.sK.getContext(a55, !0),
			iY = bD.sK.getImageData(ib, iV, iV),
			yq = iY.data,
			lp = (iV >> 1) - .5,
			adW = .5 + lp;
		for (adW *= adW, fi = 0; fi < iV; fi++)
			for (fg = 0; fg < iV; fg++) iw = (iw = fg - lp) * iw + (iw = fi - lp) * iw, yq[fL = 4 * (fi * iV + fg)] = adV[0], yq[1 + fL] = adV[1], yq[2 + fL] = adV[2], yq[3 + fL] = (adW - iw) * adV[3] / adW;
		return ib.putImageData(iY, 0, 0), a55
	}

	function acS(aC, ib, a55, iV) {
		var highlight, fg, fi;
		0 !== ah.nU[aC] && 0 !== ah.hN[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (iV *= 2), fg = ah.jS[aC] + ah.jT[aC] + 1 - iV - 2 >> 1, fi = ah.jU[aC] + ah.jV[aC] + 1 - iV - 2 >> 1, highlight ? ib
			.drawImage(a55[aE.iT ? 9 === aE.lC && 5 === aF.iI[aC] ? 3 : bj.fX[aC] : aC < aE.ku ? 1 : 0], fg, fi, iV, iV) : ib.drawImage(a55[aE.iT ? 9 === aE.lC && 5 === aF.iI[aC] ? 3 : bj.fX[aC] : aC < aE.ku ? 1 : 0], fg, fi))
	}
	this.dk = function() {
		var tt;
		this.aXJ = 700,
			function(tt) {
				var iV = tt.adN;
				if (tt.adO = [], adQ = [], aE.iT) {
					for (var aC = 0; aC <= aE.zS; aC++) tt.adO.push(adU(iV, bj.aam[bj.lH[aC]])), adQ.push(adU(iV >> 1, bj.aam[bj.lH[aC]]));
					9 === aE.lC && adQ.push(adU(iV, bj.aam[1]))
				} else tt.adO.push(adU(iV, bj.aam[7])), tt.adO.push(adU(iV, bj.aam[4])), adQ.push(adU(iV >> 1, bj.aam[7]))
			}(this),
			function(tt, ada) {
				var aC, adM = tt.adM,
					ib = bD.sK.getContext(adM, !0),
					fZ = aE.fW,
					iV = tt.adN >> 1;
				ib.imageSmoothingEnabled = !1, ib.setTransform(1, 0, 0, 1, 0, 0), ada && ib.clearRect(0, 0, adM.width, adM.height);
				if (9 === aE.lC) {
					iV <<= 1;
					tt = b0.lL[5];
					for (aC = fZ - tt; aC < fZ; aC++) acS(aC, ib, adQ, iV);
					fZ -= tt, iV >>= 1
				}
				for (aC = aE.ku; aC < fZ; aC++) acS(aC, ib, adQ, iV)
			}(this, null !== (tt = this).adM && tt.adM.width === bV.fk - 2 && tt.adM.height === bV.fl - 2 || (tt.adM = bD.sK.yf(bV.fk - 2, bV.fl - 2), !1)), aE.hx || this.a6b()
	}, this.aan = adU, this.a6b = function() {
		for (var fZ = aE.ku, iV = this.adN, adO = this.adO, ib = bD.sK.getContext(this.adM, !0), aC = 0; aC < fZ; aC++) acS(aC, ib, adO, iV)
	}
}

function dF() {
	function add() {
		8 === aE.lC && 1 === aE.a2G && bU.a1s.a2F()
	}

	function adc(player) {
		aE.hx ? (al.aJv(player), am.aNN(), aE.lE && aE.rg.ee()) : b4.aFF(player)
	}
	this.r8 = function(player) {
		aO.a2T(player, player === aE.fJ ? 21 : 22), adc(player), add()
	}, this.rd = function(player) {
		1 === aE.a2G && 0 !== ah.nU[player] && 2 !== ah.a5a[player] && adc(player), aE.a2J--, aE.a2I--, aO.a2T(player, 4), bD.gv.hk(2) && aX.nG(!0), add()
	}
}

function dP() {
	this.aXZ = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aCr = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.pO, "rgb(170,170,170)"
	], this.ade = [bE.pO, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.pO, bE.pF], this.adf = [bE.pF, bE.pO, bE.pO, bE.pO, bE.pF, bE.pF, bE.pF, bE.pF, bE.pO];
	var aNX = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aMq = ["rgba(" + aNX[0] + ",", "rgba(" + aNX[1] + ",", "rgba(" + aNX[2] + ",", "rgba(" + aNX[3] + ",", "rgba(" + aNX[4] + ",", "rgba(" + aNX[5] + ",", "rgba(" + aNX[6] + ",", "rgba(" + aNX[7] + ",", "rgba(" + aNX[8] + ",", "rgba(" + aNX[9] +
			","
		], this.aMr = ["rgb(" + aNX[0] + ")", "rgb(" + aNX[1] + ")", "rgb(" + aNX[2] + ")", "rgb(" + aNX[3] + ")", "rgb(" + aNX[4] + ")", "rgb(" + aNX[5] + ")", "rgb(" + aNX[6] + ")", "rgb(" + aNX[7] + ")", "rgb(" + aNX[8] + ")", "rgb(" + aNX[9] +
			")"
		], this.a2c = null, this.aam = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aSu = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lH = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fX = new Uint8Array(aE.fW), this.aCs = new Uint8Array(aE.fW), this.zY = new Uint16Array(aE.fW), this.zZ = new Uint16Array(this.lH.length + 1), this.za = new Uint16Array(this.lH.length), this.dl =
		function() {
			this.a2c = [L(542), L(543), L(544), L(545), L(546), L(547), L(548), L(549), L(550)]
		}, this.dk = function() {
			if (this.fX.fill(0), this.aCs.fill(0), this.adg(), aE.iT) {
				if (9 === aE.lC) {
					for (var fX = bj.fX, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fX[aC] = 1;
					var fZ = aE.fW;
					for (aC = aE.data.teamPlayerCount[7]; aC < fZ; aC++) fX[aC] = 2;
					bj.lH[1] = 7, bj.lH[2] = 8
				} else aE.lE ? function() {
					var aSu = bj.aSu,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.ku - 1; 0 <= aC; aC--) colorsData[aC] = az.kB(262144);
					var adr = 0,
						fp = 768,
						aSt = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fc = 0, ft = 0; ft < 3; ft++) fc += Math.abs(aSu[aC][ft] - aSt[ft]);
							fc < fp && (adr = aC, fp = fc)
						} var ads = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) ads[aC] = teamPlayerCount[aC];
					var lH = bj.lH,
						adt = new Uint8Array(9),
						h2 = (lH[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) ads[aC] && (adt[aC] = h2, lH[h2++] = aC);
					var kA = aE.ku,
						fX = bj.fX;
					ads[adr] ? (ads[adr]--, fX[0] = adt[adr]) : kA = 0;
					var ej = 0;
					for (aC = kA; aC < aE.zL; aC++) {
						var iR = lH[ej];
						if (ads[iR]) ads[iR]--, fX[aC] = adt[iR];
						else if (aC--, 9 <= ++ej) return console.log("error 325")
					}
				}() : this.ee();
				! function() {
					for (var fZ = aE.fW, zY = bj.zY, zZ = bj.zZ, za = bj.za, fX = bj.fX, lH = bj.lH, zR = lH.length, buffer = new Array(zR), aC = 0; aC < zR; aC++) buffer[aC] = [];
					for (aC = 0; aC < fZ; aC++) buffer[lH[fX[aC]]].push(aC);
					for (aC = 1; aC <= zR; aC++) zZ[aC] = zZ[aC - 1] + buffer[aC - 1].length;
					for (aC = 0; aC < zR; aC++)
						for (var h2 = buffer[aC].length, lp = zZ[aC], iR = 0; iR < h2; iR++) zY[iR + lp] = buffer[aC][iR];
					var ku = aE.ku;
					for (aC = 0; aC < zR; aC++)
						for (h2 = buffer[aC].length, lp = zZ[aC], iR = 0; iR < h2; iR++)
							if (zY[iR + lp] >= ku) {
								za[aC] = iR;
								break
							}
				}(), ! function() {
					for (var fZ = aE.fW, fX = bj.fX, aCs = bj.aCs, lH = bj.lH, aC = 0; aC < fZ; aC++) aCs[aC] = lH[fX[aC]];
					9 === aE.lC && aCs.fill(1, fZ - b0.lL[5])
				}()
			}
		}, this.adg = function() {
			for (var aC = this.lH.length - 1; 0 <= aC; aC--) this.lH[aC] = aC
		}, this.ee = function() {
			var a1M = new Uint8Array(aE.ku),
				a1N = new Uint8Array(aE.ku),
				adl = new Uint16Array(8),
				adm = new Uint16Array(this.lH.length);
			this.adn(a1M, a1N, adl, 1), this.aJQ(adl), this.ado(adm, a1M, a1N), this.adp(a1M, a1N, adm), this.adq()
		}, this.adn = function(a1M, a1N, ads, adu) {
			for (var ft, e, adv, fZ = this.lH.length - adu, h = new Uint16Array(fZ), aSu = this.aSu, colorsData = aE.data.colorsData, aC = aE.ku - 1; 0 <= aC; aC--) {
				for (ft = fZ; adu <= ft; ft--) h[ft - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aSu[ft][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aSu[ft][1]) + Math.abs(4 * (63 & colorsData[aC]) - aSu[ft][2]);
				for (adv = 768, ft = fZ - 1; 0 <= ft; ft--) h[e = (ft + aC) % fZ] < adv && (adv = h[e], a1M[aC] = e);
				for (ads[a1M[aC]] += 4, adv = 768, ft = fZ - 1; 0 <= ft; ft--) h[e = (ft + aC) % fZ] < adv && e !== a1M[aC] && (adv = h[e], a1N[aC] = e);
				ads[a1N[aC]]++
			}
		}, this.aJQ = function(ads) {
			for (var ft, lr, fZ = this.lH.length - 1, aC = fZ; 0 <= aC; aC--) this.lH[aC] = aC;
			for (aC = fZ - 1; 0 <= aC; aC--) ads[aC]++;
			for (aC = 1; aC <= fZ; aC++) {
				for (lr = 0, ft = 1; ft < fZ; ft++) ads[ft] > ads[lr] && (lr = ft);
				ads[lr] = 0, this.lH[aC] = lr + 1
			}
		}, this.ado = function(adm, a1M, a1N) {
			var ft, a2y, ej, fc, e, o7, uw, adw = this.lH.length - 1,
				sn = new Uint16Array(adw),
				adx = [],
				ady = 0,
				a2x = [],
				adz = [];
			loop: for (var aC = 0; aC < aE.ku; aC++)
				if (null !== (a2y = bD.tI.a2z(ah.a2w[aC]))) {
					for (ft = a2x.length - 1; 0 <= ft; ft--)
						if (a2y === a2x[ft]) {
							adz[ft].push(aC), ady = Math.max(ady, adz[ft].length);
							continue loop
						} a2x.push(a2y), adx.push(!1), adz.push([aC]), ady = Math.max(ady, 1)
				}
			for (; 2 < aE.zS && ady > bO.g0(aE.ku, aE.zS);) aE.zS--, aE.lC--;
			for (ft = a2x.length - 1; 0 <= ft; ft--) {
				for (fc = -1, ej = a2x.length - 1; 0 <= ej; ej--) !adx[ej] && (-1 === fc || adz[ej].length > adz[fc].length) && (fc = ej);
				for (ej = adw - 1; 0 <= ej; ej--) sn[ej] = 1;
				for (ej = adz[fc].length - 1; 0 <= ej; ej--) sn[a1M[adz[fc][ej]]] += 3, sn[a1N[adz[fc][ej]]]++;
				for (aC = adw - 1; 0 <= aC; aC--) {
					for (e = fc % adw, ej = adw - 1; 0 <= ej; ej--) sn[ej] > sn[e] && (e = ej);
					for (o7 = -1, ej = aE.zS; 0 < ej; ej--)
						if (this.lH[ej] === e + 1) {
							o7 = ej;
							break
						} if (sn[e] = 0, -1 !== o7) {
						for (uw = 0, ej = aE.zS; 0 < ej; ej--) adm[o7] > adm[ej] && uw++;
						if (uw !== aE.zS - 1) {
							for (ej = adz[fc].length - 1; 0 <= ej; ej--) adm[o7]++, this.fX[adz[fc][ej]] = o7;
							break
						}
					}
				}
				adx[fc] = !0
			}
		}, this.adp = function(a1M, a1N, adm) {
			for (var aC, iv, fZ = this.lH.length - 1, border = bO.g0(aE.ku, aE.zS), ae0 = (0 < aE.ku % aE.zS && border++, new Uint8Array(1 + fZ)), ft = fZ; 1 <= ft; ft--) ae0[this.lH[ft]] = ft;
			for (aC = 0; aC < aE.ku; aC++) iv = ae0[a1M[aC] + 1], 0 === this.fX[aC] && iv <= aE.zS && adm[iv] < border && (adm[iv]++, this.fX[aC] = iv);
			for (aC = 0; aC < aE.ku; aC++) iv = ae0[a1N[aC] + 1], 0 === this.fX[aC] && iv <= aE.zS && adm[iv] < border && (adm[iv]++, this.fX[aC] = iv);
			for (ft = aE.zS; 1 <= ft; ft--)
				for (aC = aE.ku - 1; 0 <= aC && !(adm[ft] >= border); aC--) 0 === this.fX[aC] && (adm[ft]++, this.fX[aC] = ft)
		}, this.adq = function() {
			if (aE.zS < 8) aE.zS++, aE.lC++, aE.zT = 1;
			else
				for (var aC = aE.ku; aC < aE.fW; aC++) this.fX[aC] = 1 + aC % aE.zS
		}
}

function dh() {
	this.hO = function() {
		for (var fg, fi, aC = gV - 1; 0 <= aC; aC--) fg = bO.g0(gX[aC], 4) % bV.fk, fi = bO.g0(gX[aC], 4 * bV.fk), ah.jS[gQ] = Math.min(fg, ah.jS[gQ]), ah.jU[gQ] = Math.min(fi, ah.jU[gQ]), ah.jT[gQ] = Math.max(fg, ah.jT[gQ]), ah.jV[gQ] = Math
			.max(fi, ah.jV[gQ])
	}, this.gj = function() {
		var fc, h7, aC, fZ = ah.h1[gQ].length,
			fb = ad.fb;
		loop: for (aC = fZ - 1; 0 <= aC; aC--) {
			for (fc = 3; 0 <= fc; fc--)
				if (h7 = ah.h1[gQ][aC] + fb[fc], ad.fQ(h7) || ad.h9(h7) && ad.fR(h7) !== gQ) {
					ad.k6(ah.h1[gQ][aC], gQ);
					continue loop
				} ah.h1[gQ][aC] = ah.h1[gQ][fZ - 1], ah.h1[gQ].pop(), fZ--
		}
	}, this.gk = function() {
		var player = gQ,
			hF = ah.hF,
			hG = ah.hG,
			fy = ah.fy,
			fZ = hF[player].length,
			fb = ad.fb;
		loop: for (var aC = fZ - 1; 0 <= aC; aC--) {
			for (var ae1 = !1, ae2 = !1, fc = 3; 0 <= fc; fc--) {
				var h7 = hF[player][aC] + fb[fc];
				if (ad.aJa(h7, player)) continue loop;
				ae1 = ae1 || ad.iq(h7), ae2 = ae2 || ad.aJZ(h7)
			}
			ae1 ? hG[player].push(hF[player][aC]) : ae2 ? fy[player].push(hF[player][aC]) : ad.zu(hF[player][aC], player), hF[player][aC] = hF[player][fZ - 1], hF[player].pop(), fZ--
		}
	}, this.hD = function() {
		ah.hN[gU] -= gV
	}, this.hE = function(border) {
		for (var fZ = border.length, aC = fZ - 1; 0 <= aC; aC--) ad.a0F(gU, border[aC]) || (border[aC] = border[fZ - 1], border.pop(), fZ--)
	}, this.hH = function(border) {
		for (var fZ = border.length, aC = fZ - 1; 0 <= aC; aC--) !ad.a0F(gU, border[aC]) && ad.fU(border[aC]) && (border[aC] = border[fZ - 1], border.pop(), fZ--)
	}, this.hI = function(border) {
		for (var fc, h7, fZ = border.length, fb = ad.fb, aC = fZ - 1; 0 <= aC; aC--)
			for (fc = 3; 0 <= fc; fc--)
				if (h7 = border[aC] + fb[fc], ad.aJa(h7, gU)) {
					ah.hF[gU].push(border[aC]), border[aC] = border[fZ - 1], border.pop(), fZ--;
					break
				}
	}, this.hJ = function() {
		for (var fc, h7, fb = ad.fb, aC = gV - 1; 0 <= aC; aC--)
			for (fc = 3; 0 <= fc; fc--) h7 = gX[aC] + fb[fc], ad.a0I(gU, h7) && ad.aJg(h7) && (ah.hF[gU].push(h7), ad.h4(h7, gU))
	}, this.hK = function() {
		var fg, fi;
		loop: for (; ah.jU[gU] < ah.jV[gU];) {
			for (fg = ah.jT[gU]; fg >= ah.jS[gU]; fg--)
				if (ad.a0F(gU, 4 * (ah.jU[gU] * bV.fk + fg))) break loop;
			ah.jU[gU]++
		}
		loop: for (; ah.jU[gU] < ah.jV[gU];) {
			for (fg = ah.jT[gU]; fg >= ah.jS[gU]; fg--)
				if (ad.a0F(gU, 4 * (ah.jV[gU] * bV.fk + fg))) break loop;
			ah.jV[gU]--
		}
		loop: for (; ah.jS[gU] < ah.jT[gU];) {
			for (fi = ah.jV[gU]; fi >= ah.jU[gU]; fi--)
				if (ad.a0F(gU, 4 * (fi * bV.fk + ah.jS[gU]))) break loop;
			ah.jS[gU]++
		}
		loop: for (; ah.jS[gU] < ah.jT[gU];) {
			for (fi = ah.jV[gU]; fi >= ah.jU[gU]; fi--)
				if (ad.a0F(gU, 4 * (fi * bV.fk + ah.jT[gU]))) break loop;
			ah.jT[gU]--
		}
	}, this.fS = function(player, k3) {
		return 0 === bj.fX[player] || bj.fX[player] !== bj.fX[k3]
	}, this.i5 = function(player) {
		for (var aC, h8, fZ = ah.hF[player].length, fb = ad.fb, fc = 3; 0 <= fc; fc--)
			for (h8 = fb[fc], aC = 0; aC < fZ; aC++)
				if (ad.fQ(ah.hF[player][aC] + h8)) return !0;
		return !1
	}, this.aJr = function(player) {
		for (var aC, h8, fZ = ah.hF[player].length, fb = ad.fb, fc = 3; 0 <= fc; fc--)
			for (h8 = fb[fc], aC = 0; aC < fZ; aC++)
				if (ad.k5(ah.hF[player][aC]) && ad.fQ(ah.hF[player][aC] + h8)) return !0;
		return !1
	}, this.i8 = function(a5g, a5h) {
		for (var aC, ea, h8, h7, abV = ah.hF[a5g].length, abW = ah.hF[a5h].length, fb = (abW < abV && (ea = a5g, a5g = a5h, a5h = ea, ea = abV, abV = abW, 0), ad.fb), fc = 3; 0 <= fc; fc--)
			for (h8 = fb[fc], aC = 0; aC < abV; aC++)
				if (h7 = ah.hF[a5g][aC] + h8, ad.h9(h7) && ad.fR(h7) === a5h) return !0;
		return !1
	}, this.aJs = function(a5g, a5h) {
		for (var aC, h8, h7, abV = ah.hF[a5g].length, fb = ad.fb, fc = 3; 0 <= fc; fc--)
			for (h8 = fb[fc], aC = 0; aC < abV; aC++)
				if (ad.k5(ah.hF[a5g][aC]) && (h7 = ah.hF[a5g][aC] + h8, ad.h9(h7)) && ad.fR(h7) === a5h) return !0;
		return !1
	}
}

function db() {
	this.rp = new ae3
}

function ae3() {
	this.iB = function(player) {
		bD.gv.a5b(player) && aO.a0i(80, L(551), 637, 0, bE.qD, bE.pL, -1, !1)
	}, this.iE = function(player) {
		bD.gv.a5b(player) && aO.a0i(80, L(552), 637, 0, bE.qD, bE.pL, -1, !1)
	}
}

function ae4() {
	this.ae5 = 0, this.ee = function() {
		aP.ee(), aa.ee(), i.ee(), b1.z.ee(), ay.aIv(), bX.eS.ee(), bi.ds && (bi.ds = !1, ab.wr())
	}
}

function ae6() {
	this.eZ = bi.eZ, this.eI = 0, this.ae5 = 0, this.aIt = 0, this.ae7 = null, this.ae8 = 7, this.ae9 = 0, this.dk = function() {
		this.aIt = 0, this.ae7 = [], this.eI = 0, this.ae5 = 0
	}, this.aWV = function(aD) {
		if (aE.hx) this.aDe(aD);
		else if (this.ae7.push(aD), 2 === aE.a2G) {
			for (var aC = 0; aC < this.ae7.length; aC++) bB.qi.ee(this.ae7[aC]);
			this.ae7 = []
		}
	}, this.aDe = function(aD) {
		2 !== aE.a2G && (bB.qi.ee(aD), bC.ee(), aX.aDe(this.aIt), this.aIt === aE.a6h ? (aE.rg.ee(), this.aIt = 0, this.eI = 0, this.ae5 = 0, this.eZ = bi.eZ) : (this.aIt++, ag.a6a(), ag.nG(!0), be.render()))
	}, this.ee = function() {
		i.ee(), aE.hx ? (bi.ds = aX.aDe(-1) || bi.ds, nI()) : (0 !== this.eI || bi.eZ >= this.eZ && (this.eZ += bi.aDd * Math.floor(1 + (bi.eZ - this.eZ) / bi.aDd), 2 === aE.a2G ? n6() : this.aeA(), this.eI++, 27 < bi.eZ - this.ae9)) && this
		.aeB(), nD(), bi.ds && (bi.ds = !1, a0J()), this.ae9 = bi.eZ
	}, this.aeB = function() {
		bi.ds = !0, nF(), this.eI = 0
	}, this.aeA = function() {
		var xf, aC;
		if (this.ae5 !== 7 * this.aIt) n8(), be.render();
		else {
			xf = !1;
			loop: for (; this.aeC() && (xf = !0, n8(), 2 !== aE.a2G) && 0 < this.ae7.length;)
				for (aC = this.ae8 - 2; 0 <= aC; aC--)
					if (n8(), 2 === aE.a2G) break loop;
			xf ? be.render() : (n6(), be.a6d())
		}
	}, this.aeC = function() {
		return 0 < this.ae7.length && (this.aIt++, bB.qi.ee(this.ae7[0]), this.ae7.shift(), !0)
	}
}

function aeD() {
	var aeE, aeF, aeG, aIt, aeH, eI = 0,
		eZ = bi.eZ;

	function aeK() {
		! function() {
			if (!aE.hx) return;
			if (aE.lE) return;
			if (2 !== aE.a2G)
				if (aeH % 7 != 0) aeH++;
				else if (aIt === aE.a6h) {
				if (!aeN()) return;
				aX.aDe(aIt), aE.rg.ee()
			} else {
				if (!aeN()) return;
				aeH++, aIt++, ag.a6a(), ag.nG(!0)
			}
			return 1
		}() && aeN() && n8()
	}

	function aeL() {
		eI = 0, (aE.hx ? (bi.ds = aX.aDe(aIt - (aeH % 7 == 0 ? 0 : 1) + aeH % 7 / 7) || bi.ds, nI) : aN.hj || !bF.a74 ? nI : (bi.ds = !0, nF))()
	}

	function aeN() {
		var aC, fZ, aeO = bC.re.aXz,
			gI = bC.re.aY0,
			gK = bC.re.aY1,
			gM = bC.re.aY2,
			aeP = bC.re.aY3,
			aeQ = bC.re.aY4;
		if (!(aeE >= aeQ.length)) {
			if (aeQ = aeQ[aeE], aeP[aeE]) {
				for (fZ = aeF + aeQ, aC = aeF; aC < fZ; aC++) bB.qi.rT(aeO[aC], gI[aC], gK[aC], gM[aC]);
				aeF += aeQ, aeE++
			} else ++aeG >= aeQ && (aeE++, aeG = 0);
			return __fx.replay.tick++, 1
		}
		aO.a3Y("Replay file smaller than expected."), bF.a4O(!1), aE.a2G = 2
	}
	this.ae5 = 0, this.dk = function() {
		aeH = aIt = aeG = aeF = aeE = 0, __fx.replay.registerHooks({
			advance: () => aeK(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.ds = !0
			},
			isEnded: () => 2 === aE.a2G,
			getTickInterval: () => bi.aDd
		})
	}, this.ee = function() {
		var abw;
		i.ee(), __fx.replay.frame() ? n6() : bF.aAr() < 1.7 ? 0 === eI ? bi.eZ >= eZ && (abw = bi.aDd / bF.aAr(), eZ += abw * Math.floor(1 + (bi.eZ - eZ) / abw), 2 === aE.a2G || aN.hj || !bF.a74 ? n6() : (aeK(), be.render()), eI++) : aeL() :
			function() {
				var abw;
				if (bi.eZ >= eZ)
					if (2 === aE.a2G || aN.hj || !bF.a74) n6(), eZ = bi.eZ;
					else {
						for (abw = bi.aDd / bF.aAr(), 16 < (bi.eZ - eZ) / abw && (eZ = bi.eZ - 16 * abw); bi.eZ >= eZ && 2 !== aE.a2G;) eZ += abw, aeK();
						be.render()
					} aeL()
			}(), nD(), bi.ds && (bi.ds = !1, a0J())
	}, this.a2R = function() {
		bC.re.aY4.length - aeE <= 2 || aO.a3Y("Replay file larger than expected.")
	}
}

function aeR() {
	var eI = 0,
		eZ = bi.eZ;
	this.ae5 = 0, this.ee = function() {
		i.ee(), aE.hx ? nI() : 0 === eI ? bi.eZ >= eZ && (eZ += bi.aDd * Math.floor(1 + (bi.eZ - eZ) / bi.aDd), 2 === aE.a2G || aN.hj ? n6() : (n8(), be.render()), eI++) : ((aN.hj ? nI : (bi.ds = !0, nF))(), eI = 0), nD(), bi.ds && (bi.ds = !1,
			a0J())
	}
}

function dX() {
	this.a2Q = null, this.ds = !1, this.eZ = 0, this.aDd = 56;
	var aeS = 0;

	function aeT() {
		bi.eZ = aeS = performance.now(), bi.a2Q.ee(), window.requestAnimationFrame(aeT)
	}
	this.dk = function() {
		this.a71(), window.requestAnimationFrame(aeT), this.eZ = performance.now()
	}, this.a6t = function() {
		aE.hi ? (this.a2Q = new aeD, this.a2Q.dk()) : aE.lE ? this.a2Q = new aeR : (this.a2Q = new ae6, this.a2Q.dk())
	}, this.a71 = function() {
		this.a2Q = new ae4, this.ds = !0
	}, this.ee = function() {
		this.a2Q.ae5++
	}, this.kr = function() {
		return this.a2Q.ae5
	}, this.aWC = function() {
		var ea = performance.now();
		ea < aeS + 1e3 || (this.eZ = ea, this.a2Q.ee())
	}
}

function cx() {
	var aIH = 0,
		aeU = !0;

	function aeV(id) {
		id = [L(553), L(554), L(555), L(556)][id];
		aO.a8q(id)
	}
	this.ee = function() {
		var ea, a9F;
		bi.eZ < aIH || (aIH = bi.eZ + 3e3, aE.hi) || aE.lE || bD.gv.hl(aE.fJ) || (ea = new Date, a9F = ea.getUTCSeconds(), aeU ? a9F < 43 && (aeU = !1) : a9F < 43 || (aIH += 52e3, aeU = !0, (a9F = (ea.getUTCMinutes() + 2) % 60) % 10 == 0 ? aE
			.lC < 7 && aeV(0) : a9F % 10 == 5 ? 7 !== aE.lC && 10 !== aE.lC || aeV(1) : a9F % 10 == 7 ? 8 === aE.lC && aeV(2) : a9F % 10 == 2 && 9 === aE.lC && aeV(3)))
	}
}

function cr() {
	var nv, nw, o8, o9, aeW = 0,
		aeX = 0;

	function aeZ() {
		return Math.pow(Math.pow(o8 - nv, 2) + Math.pow(o9 - nw, 2), .5)
	}

	function aeY(e) {
		nv = i.l * e.touches[0].clientX, nw = i.l * e.touches[0].clientY, o8 = i.l * e.touches[1].clientX, o9 = i.l * e.touches[1].clientY
	}
	this.a3q = function(e) {
		return 1 < e.touches.length ? (aeX = bi.eZ, aeW = 3, aeY(e), aM.tZ(), !0) : (aeW = 0, !1)
	}, this.a3r = function(e) {
		var aKm, it, iu;
		return 0 !== aE.a2G && 1 < e.touches.length && (aeW = Math.max(aeW - 1, 0), aI.oD() && (aKm = aeZ(), aeY(e), e = aeZ(), it = Math.floor((nv + o8) / 2), iu = Math.floor((nw + o9) / 2), aT.aBI(it, iu, Math.max(.125, e) / Math.max(.125,
			aKm)), bi.ds = !0), !0)
	}, this.a4E = function() {
		var fg, fi;
		return !!(aeW && (aeW = 0, bi.eZ < aeX + 500)) && (fg = (nv + o8) / 2, fi = (nw + o9) / 2, aM.a48(fg, fi), aM.click(fg, fi, !0) && (bi.ds = !0), !0)
	}
}

function d8() {
	this.size = 0, this.eI = 0, this.aD = null, this.dk = function(aD) {
		this.eI = 0, this.aD = aD, this.size = aD.length
	}, this.vx = function() {
		this.aD = null
	}, this.rS = function(size) {
		for (var g1 = 0, aD = this.aD, oD = this.eI + size - 1, aC = this.eI; aC <= oD; aC++) g1 |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << oD - aC;
		return this.eI += size, this.eI > 8 * this.size && console.error("Unwrapper Overflow"), g1
	}, this.aWd = function(size) {
		var ft = size >> 1;
		return (1 << ft) * this.rS(size - ft) + this.rS(ft)
	}, this.aWe = function(aea) {
		return this.size === bG.aWc(aea)
	}, this.aYH = function(z7, aeb, aec) {
		var h2 = this.rS(z7);
		if (!h2) return null;
		for (var z7 = Math.max(h2, aec), h = new(aeb <= 8 ? Uint8Array : aeb <= 16 ? Uint16Array : Uint32Array)(z7), aC = 0; aC < h2; aC++) h[aC] = this.rS(aeb);
		aec = h[h2 - 1];
		return aec && h.fill(aec, h2), h
	}, this.aYI = function(z7, aed, aec) {
		var h2 = this.rS(z7);
		if (!h2) return null;
		for (var z7 = Math.max(h2, aec), h = new Array(z7), aC = 0; aC < h2; aC++) h[aC] = this.aYF(aed);
		return h.fill(h[h2 - 1], h2), h
	}, this.aYF = function(z7) {
		return bJ.yF.yJ(this.rS(z7))
	}, this.aYG = function() {
		var a1V = this.rS(30);
		if (!(6 * a1V > 8 * this.size - this.eI)) {
			var s1 = bI.f0.uc(bI.f0.ud(a1V)),
				s1 = bD.tI.a6V(s1, "_", "/");
			s1 = bD.tI.a6V(s1, "-", "+");
			for (var aee = "";
				(s1.length + aee.length) % 4;) aee += "=";
			s1 = "data:image/png;base64," + s1 + aee;
			var aKO = new Image;
			aKO.onload = function() {
				bC.aLL.aLM(aKO), aKO.onload = null, aKO = null
			}, aKO.src = s1
		}
	}
}

function dR() {
	this.aZJ = 0, this.aZK = 0, this.aZF = 0, this.aZG = 0, this.aZH = 0, this.aZI = 0, this.aEE = [0, 0, 0, 0], this.oC = function() {
		this.aZJ = aT.a0L(), this.aZK = aT.a0M(), this.aZF = -this.aZJ, this.aZG = -this.aZK, this.aZH = i.j / im, this.aZI = i.k / im, this.aEE[0] = Math.floor(this.aZF), this.aEE[1] = Math.floor(this.aZG), this.aEE[2] = Math.floor(this.aEE[0] +
			this.aZH + 1), this.aEE[3] = Math.floor(this.aEE[1] + this.aZI + 1), be.aEC = !0
	}
}

function cs() {
	var a9w, nh;
	this.dk = function() {
		a9w = 1, nh = 0
	}, this.ee = function() {
		0 < a9w && (nh = 0 === nh ? bi.eZ + 16 : nh, a9w = (a9w -= .001 * (bi.eZ - nh)) < 0 ? 0 : a9w, nh = bi.eZ, bi.ds = !0)
	}, this.wr = function() {
		0 < a9w && (ws.fillStyle = "rgba(0,0,0," + a9w + ")", ws.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eI = 0, this.aD = null, this.dk = function(aD) {
		this.eI = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(aea) {
		return this.dk(new Uint8Array(this.aWc(aea))), this.aD
	}, this.vx = function() {
		this.aD = null
	}, this.a9 = function(size, a9K) {
		for (var aD = this.aD, oD = this.eI + size - 1, aC = this.eI; aC <= oD; aC++) aD[aC >> 3] |= (a9K >> oD - aC & 1) << 7 - (7 & aC);
		this.eI += size, this.eI > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aWb = function(size, a9K) {
		var ft = size >> 1,
			fc = 1 << ft;
		this.a9(size - ft, bO.g0(a9K, fc)), this.a9(ft, a9K % fc)
	}, this.aeh = function(size) {
		for (var aD = this.aD, oD = this.eI + size, aC = this.eI; aC < oD; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.aWc = function(aea) {
		return aea + 7 >> 3
	}, this.aei = function(h, kA, oD, aej) {
		for (var aC = kA; aC < oD; aC++) this.a9(aej, h[aC])
	}
}

function d7() {
	this.dk = function() {
		this.h = [], this.eI = 0
	}, this.aX0 = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(aek, value) {
		for (var h = this.h, oD = this.eI + aek - 1, ael = 1 + (oD >> 3); h.length < ael;) h.push(0);
		for (var aC = this.eI; aC <= oD; aC++) h[aC >> 3] |= (value >> oD - aC & 1) << 7 - (7 & aC);
		this.eI += aek
	}, this.dr = function(h, z7, aeb) {
		var aem = bD.sS.a4z(h);
		this.a9(z7, aem);
		for (var aC = 0; aC < aem; aC++) this.a9(aeb, h[aC])
	}, this.aYZ = function(h, z7, aed) {
		var aem = bD.sS.a4z(h);
		this.a9(z7, aem);
		for (var aC = 0; aC < aem; aC++) this.aYX(h[aC], aed)
	}, this.aYX = function(s1, z7) {
		var fZ = s1.length;
		this.a9(z7, fZ);
		for (var aC = 0; aC < fZ; aC++) this.a9(16, s1.charCodeAt(aC))
	}, this.aYY = function(a55) {
		var aen = (a55 = a55.toDataURL()).split(",");
		if (aen.length < 2) console.log("error 266");
		else {
			a55 = bD.tI.a6V(a55 = aen[aen.length - 1], "/", "_"), a55 = bD.tI.a6V(a55, "\\+", "-");
			var a55 = bD.tI.a6V(a55, "=", ""),
				yS = bJ.f0.yP(a55),
				fZ = yS.length;
			this.a9(30, fZ);
			for (var aC = 0; aC < fZ; aC++) this.a9(6, yS[aC])
		}
	}
}
a(), self.aiCommand746 = function(g1) {
	0 === g1 ? bx() : 1 !== g1 || !a1 || 1 !== a1.id || a1.e3 < 14 || bM.g2()
}, setTimeout(bx, 1e4), window.onload = function() {
	bx()
};