var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, bw, gP, gQ, gR, gS, gT, gU, gV, gW, gX, gY, gZ, ga, gb,
	im, jD, jE, aB5, mV, kf, a4d, xm, a1H, aFA, a7o, a7p, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "<br>", "0.8em", "rgb(", "center", "auto", "rgba(", "hidden", "flex", "   ", "span", "1em", "0.5em", "email",
		"Data", "50%", " / ", "territorial.io", "click", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "function", "undefined", "pointer", "middle",
		"break-word", "Escape", "0.6em", "underline", "text", "scroll", "nowrap", "button", "bold", "Value", "Player ", "Enter", "20%", "1.5em", "0.4em", "' target='_blank'>", "🔄 Reload", "translate(-50%, -50%)", "string", "rgba(0,0,0,0.8)",
		"pre-wrap", "orange", "number", "mouseleave", "keydown", "inline-block", "game.territorial.io", "focus", "fixed", "blur", "aria-label", "Space", "Reload", "Redacted ", "Gold Seizure", "<a href='", "</a>", "100,100,100", "1.2em", "1.0em",
		"0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "⚠️ ", "zombie", "wheel", "userIcon", "true", "top", "tls7", "system-ui", "style", "right", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)",
		"rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "oneVsOne", "noFullSending", "mouseover", "mouseout", "long", "logo", "loading", "left", "italic ", "https://territorial.io/", "file", "error", "en-US", "ellipsis", "dotted",
		"data:image/png;base64,", "crown", "column", "clock", "break-all", "blur(4px)", "battleRoyale", "aria-pressed", "arena", "account", "accept", "_blank", "[Redacted Message]", "Zombie", "Seed", "Remove Punishments", "Patreon", "Interest",
		"False Reporter", "Close", "Cheater", "Bot ", "Block Account", "Battle Royale", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui", "30%", "255,255,255", "1v1", "1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1 Minute", "1 Hour",
		"1 Day", "0em", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", ". Duration: x", "-1px 1px 0 lightgray,", "-1px -1px 0 lightgray,", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> "
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
	this.dw = 2, this.dx = 1766, this.dy = 0;
	this.rVersion = 25, this.dk = function() {
		this.o = "2.16.71", this.e3 = "7 Nov 2026 [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.e4 = 0 <= this.hostname.indexOf("github.io"), this.e5 = 0 <=
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
			.85), this.ps = ej.pG(190, 230, 190), this.pt = ej.pG(0, 255, 0), this.pu = ej.pI(10, 120, 10, .9), this.pv = ej.pG(200, 255, 200), this.pw = ej.pG(255, 120, 120), this.px = ej.pG(255, 160, 160), this.py = ej.pG(255, 70, 70), this.pz = ej
		.pG(230, 0, 0), this.q0 = ej.pI(220, 0, 0, .6), this.q1 = ej.pI(255, 100, 100, .8), this.q2 = ej.pI(100, 0, 0, .85), this.q3 = ej.pI(60, 0, 0, .85), this.q4 = ej.pI(200, 0, 0, .6), this.q5 = ej.pI(120, 0, 0, .85), this.q6 = ej.pG(255, 70,
		10), this.q7 = ej.pG(230, 190, 190), this.q8 = ej.pG(255, 0, 0), this.q9 = ej.pG(255, 0, 255), this.qA = ej.pI(60, 0, 60, .85), this.qB = ej.pI(0, 60, 60, .85), this.qC = ej.pI(10, 60, 60, .9), this.qD = ej.pI(0, 96, 96, .75), this.qE = ej
		.pG(0, 255, 255), this.qF = ej.pG(160, 160, 255), this.qG = ej.pI(0, 40, 90, .75), this.qH = ej.pI(0, 0, 255, .6), this.qI = ej.pG(200, 200, 255), this.qJ = ej.pI(50, 50, 255, .83), this.qK = ej.pI(20, 90, 150, .75), this.qL = ej.pI(10, 10,
			120, .75), this.qM = ej.pG(255, 120, 100), this.qN = ej.pI(255, 255, 0, .5), this.qO = ej.pI(255, 255, 150, .2), this.qP = ej.pG(255, 255, 0), this.qQ = ej.pG(255, 255, 200), this.qR = ej.pI(200, 200, 0, .6), this.qS = ej.pI(140, 120, 0,
			.75), this.qT = ej.pI(180, 160, 40, .75), this.qU = ej.pI(70, 50, 20, .85), this.qV = ej.pI(30, 30, 0, .85), this.qW = ej.pI(60, 60, 0, .85), this.qX = ej.pG(255, 255, 100), this.qY = ej.pG(255, 255, 140), this.qZ = ej.pI(255, 140, 0,
			.75), this.qa = ej.pI(70, 40, 0, .85), this.qb = ej.pG(255, 150, 0), this.qc = ej.pI(255, 200, 80, .85), this.qd = ej.pI(0, 0, 0, 0), this.qe = ej.pI(255, 255, 255, 0), this.qf = ej.pI(254, 254, 254, 0)
}

function d4() {
	this.hz = new qg, this.gv = new qh, this.qi = new qj, this.qk = new ql, this.kw = new qm
}

function qg() {
	this.qn = 1, this.i0 = function(fL) {
		aE.lE ? bB.qi.i0(aE.fJ, fL) : b1.qo.qp(fL)
	}, this.i6 = function(jC, k3) {
		this.qn && (this.qn = 0, bm.qq.qr(182, jC)), aE.lE ? bB.qi.i6(aE.fJ, jC, k3) : b1.qo.qs(jC, k3)
	}, this.qt = function(jC, qu) {
		aE.lE ? bB.qi.qv(aE.fJ, jC, qu) : b1.qo.qw(jC, qu)
	}, this.iB = function(jC, fL) {
		fL = (fL << 3) + bR.gB[6];
		aE.lE ? bB.qi.iB(aE.fJ, jC, fL) : bQ.n0.n1(aE.fJ) && b1.qo.qy(jC, fL)
	}, this.iE = function(jC) {
		849 === jC && (jC = 850);
		var ns = bR.gB[3];
		aE.lE ? bB.qi.iE(aE.fJ, jC, ns) : bQ.iC.qz(aE.fJ, ns) && b1.qo.r0(jC, ns)
	}, this.r1 = function(ns) {
		aE.lE ? bB.qi.r1(aE.fJ, ns) : b1.qo.r0(849, ns)
	}, this.r2 = function(k3) {
		aE.lE ? bB.qi.r2(aE.fJ, k3) : b1.qo.r3(k3)
	}, this.r4 = function(r5) {
		aE.lE ? bB.qi.r6(aE.fJ, r5) : b1.qo.r7(r5)
	}, this.iN = function(r8) {
		aE.lE ? bB.qi.iN(aE.fJ, r8) : b1.qo.r9(r8)
	}, this.rA = function() {
		aE.lE ? bB.qi.rA(aE.fJ) : b1.qo.rB()
	}, this.iK = function() {
		aE.lE ? bB.qi.iK(aE.fJ) : b1.qo.r3(513)
	}, this.i2 = function(jC, fL, k3) {
		aE.lE ? bB.qi.i2(aE.fJ, jC, fL, k3) : b1.qo.rC(jC, fL, k3)
	}
}

function qm() {
	this.kx = function(player, qu, iI) {
		bD.gv.rD(player, iI, qu) && (af.qt(player, qu), !bD.gv.kH(qu)) && ap.jh.kW[qu] && ap.jh.kW[qu]--
	}, this.rE = function(player, qu, iI) {
		bD.gv.rF(iI, qu) ? ao.ei(qu, bR.g6[0]) && (bt.rG(player, qu, bR.g6[0], 1), bD.gv.gy(qu, bR.g6[0]), bg.rH(player, qu), ag.rI(qu, bR.g6[0])) : bg.gz(player, iI, 12)
	}
}

function qh() {
	this.rJ = function(r5, player) {
		aO.r4(aE.fJ, player, r5), b1.qo.rK(r5, player)
	}, this.rL = function(player) {
		aO.rM(player, 0), b1.qo.rN(player)
	}, this.rO = function(rP, player) {
		aO.rQ(rP, player), b1.qo.rR(rP, player)
	}, this.rS = function() {
		aE.lE || aE.hi || b1.rT.rS()
	}
}

function ql() {
	this.ee = function(aD) {
		var id, gI, oD;
		for (bK.dk(aD), bK.eI += 2, oD = 8 * bK.size; bK.eI + 8 <= oD;) id = bK.rU(4), gI = bK.rU(9), 0 === id ? this.rV(id, gI, bK.rU(22)) : 1 === id ? this.rV(id, gI, bK.rU(10), bK.rU(10)) : 2 === id ? this.rV(id, gI, bK.rU(10), bK.rU(9)) :
			3 === id ? this.rV(id, gI, bK.rU(10), bK.rU(27)) : 4 === id ? this.rV(id, gI, bK.rU(10), bK.rU(16)) : 5 === id || 6 === id ? this.rV(id, gI, bK.rU(10)) : 7 === id ? this.rV(id, gI, bK.rU(1)) : 10 === id ? this.rV(id, gI, bK.rU(20), bK
				.rU(22)) : this.rV(id, gI)
	}, this.rW = [], this.rX = function() {
		for (var rZ = 0, ra = 0, rb = 0, rc = 0, rd = 0, re = 0, aC = 0; aC < 512; aC++) rZ += ah.nU[aC], ra += ah.hN[aC], rb += ah.hb[aC], rc += bQ.z.ky[aC];
		rd += bQ.z.mk, re += am.lQ, this.rW.push(rb % 1073741824 * 4 + (rZ + ra + rc + rd + re) % 4)
	}, this.rV = function(id, gI, gK, gM) {
		0 === id ? bB.qi.i0(gI, gK) : 1 === id ? bB.qi.i6(gI, gK, gM) : 2 === id ? bB.qi.qv(gI, gK, gM) : 3 === id ? bB.qi.iB(gI, gK, gM) : 4 === id ? bB.qi.iE(gI, gK, gM) : 5 === id ? bB.qi.r2(gI, gK) : 6 === id ? bB.qi.r6(gI, gK) : 7 === id ?
			bB.qi.iN(gI, gK) : 8 === id ? bB.qi.rA(gI) : 9 === id ? bB.qi.rf(gI) : 10 === id && bB.qi.i2(gI, gK >> 10, gM, gK % 1024)
	}
}

function qj() {
	this.i0 = function(player, fL) {
		bD.gv.hk(0) && bD.gv.hl(player) && bP.jH(fL) && (bC.rg.rh(0, player, fL), aE.ri.ei(player, fL))
	}, this.i6 = function(player, jC, k3) {
		bD.gv.hk(1) && bD.gv.hl(player) && bD.gv.rj(player, k3) && bD.gv.n2(player, jC, 12, 0) && bD.gv.rk(player, k3) && ((k3 = ae.kF(player, bR.fV[0])) || ae.kY(player)) && (ah.rl[player]++, bC.rg.rh(1, player, jC, bR.fV[0]), ap.jf.jt(player,
			k3)) && (bD.gv.n4(player), bg.rm(player, jC), ap.jf.jz(player))
	}, this.qv = function(player, jC, qu) {
		bD.gv.hk(1) && bD.gv.hl(player) && aE.iT && bD.gv.rj(player, qu) && bD.gv.rn(player, qu) && bD.gv.rD(player, bD.gv.jB(player, jC), qu) && ao.ei(qu, bR.g6[0]) && (bC.rg.rh(2, player, jC, qu), af.qt(player, qu))
	}, this.iB = function(player, jC, qx) {
		bR.gB[1] = 7 & qx;
		var fL = qx >> 3;
		bD.gv.hk(1) && bD.gv.hl(player) && bP.jH(fL) && bQ.n0.n1(player) && bQ.n0.ro(fL) && bD.gv.n2(player, jC, 32, 0) && bQ.lh.rp(player, fL, 1) && (bg.rq(player), bC.rg.rh(3, player, jC, qx), bD.gv.n4(player), bo.rr.iB(player), bQ.z.n5(
			player))
	}, this.iE = function(player, jC, ns) {
		849 === jC ? this.r1(player, ns) : bD.gv.hk(1) && bD.gv.hl(player) && bD.gv.n2(player, jC, 32, 0) && bQ.iC.rs(player, ns) && (bg.rq(player), bC.rg.rh(4, player, jC, ns), bD.gv.n4(player), bo.rr.iE(player), bQ.z.n5(player))
	}, this.r1 = function(player, ns) {
		bD.gv.hk(1) && bD.gv.hl(player) && bQ.rt.ee(player, ns) && bC.rg.rh(4, player, 849, ns)
	}, this.r2 = function(player, k3) {
		513 === k3 ? this.iK(player) : bD.gv.hk(1) && bD.gv.hl(player) && (k3 = Math.min(k3, aE.fW), ae.kF(player, k3)) && (bC.rg.rh(5, player, k3), ae.ru(player, k3))
	}, this.r6 = function(player, r5) {
		(bD.gv.hk(1) || bD.gv.hk(2)) && bD.gv.hl(player) && (r5 = bO.ij(r5, 0, 1023), bC.rg.rh(6, player, r5), ag.rv(player, 0, r5))
	}, this.iN = function(player, r8) {
		ax.iM(player) && (bC.rg.rh(7, player, r8), ax.rw(player, r8))
	}, this.rA = function(player) {
		(bD.gv.hk(0) || bD.gv.hk(1)) && bD.gv.hl(player) && aN.rx(player) && (bC.rg.rh(8, player), bT.rA(player))
	}, this.rf = function(player) {
		bC.rg.rh(9, player), bT.rf(player)
	}, this.iK = function(player) {
		ax.iO(player) && (bC.rg.rh(5, player, 513), ax.iK(player))
	}, this.i2 = function(player, jC, fL, k3) {
		bD.gv.hk(1) && bD.gv.hl(player) && bD.gv.rj(player, k3) && bD.gv.rk(player, k3) && bP.jH(fL) && an.fA.fT(player, fL) && (ae.kF(player, bR.fV[0]) || ae.kY(player)) && (bC.rg.rh(10, player, (jC << 10) + bR.fV[0], fL), k3 = bD.gv.m6(player,
			jC), ah.h1[player].push(bR.fa[0]), ae.ei(player, k3, bR.fV[0]), aG.k1(player, !0), bg.ry(player))
	}
}

function rz() {
	var s1;
	this.s0 = [], this.s1 = document.createElement("div"), this.s2 = function(s3, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = s3, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.s1.appendChild(
			title), title
	}, this.s4 = function(s3, marginBottom) {
		var s5 = document.createElement("p");
		return s5.textContent = s3, s5.style.fontSize = "0.75em", s5.style.lineHeight = "1.2em", s5.style.marginBottom = marginBottom || "0", this.s1.appendChild(s5), s5
	}, this.s6 = function(s3) {
		var s7 = document.createElement("p");
		return s7.textContent = s3, s7.style.fontSize = "1em", s7.style.marginBottom = "0", s7.style.whiteSpace = "pre-wrap", s7.style.overflowWrap = "break-word", this.s1.appendChild(s7), s7
	}, this.s8 = function(s9, fontSize) {
		var s1 = document.createElement("div");
		return s1.innerHTML = s9, s1.style.fontSize = fontSize || "1em", s1.style.lineHeight = "1.2em", this.s1.appendChild(s1), s1
	}, this.sA = function(sB) {
		for (var sC = sB.sC, fZ = sC.length, aC = 0; aC < fZ; aC++) this.s1.appendChild(sC[aC])
	}, this.sD = function(sE) {
		return this.s0.push(sE), this.s1.appendChild(sE.e), sE
	}, this.resize = function() {
		for (var fZ = this.s0.length, aC = 0; aC < fZ; aC++) this.s0[aC].resize && this.s0[aC].resize()
	}, (s1 = this.s1).style.position = "absolute", s1.style.height = "auto", s1.style.padding = "0.5em"
}

function sF(sG, sH) {
	var s1 = document.createElement("div");

	function sP() {
		var aC, sQ, k, h8, fc, sL = i.l * s1.offsetWidth,
			sR = new Float64Array(function(sL) {
				var j = .25 * bD.sM.sN(.6) * i.il;
				return Math.max(Math.floor(sL / j), 1)
			}(sL)),
			sS = bf.sS,
			sT = (sL - (sR.length + 1) * bf.gap) / (sR.length * i.l);
		for (sR.fill(sS), aC = 0; aC < sH.length; aC++) sQ = (fc = sH[aC].s1).style, k = bD.sU.min(sR), h8 = sR.indexOf(k), sQ.top = bD.sM.sV(k), sQ.left = bD.sM.sV(sS + h8 * (sT + sS)), sQ.width = bD.sM.sV(sT), bD.sM.sW(fc, 5), sR[h8] += fc
			.offsetHeight + 3 * sS;
		s1.style.height = bD.sM.sV(bD.sU.max(sR) - 2 * sS)
	}
	this.sI = s1, this.sJ = sH, this.resize = function() {
		var aC;
		for (aC = 0; aC < sH.length; aC++) sH[aC].resize();
		sP(), sP()
	}, s1.style.width = "100%", s1.style.maxWidth = "100%", sG.style.lineHeight = "1.5em", sG.style.overflowX = "hidden", sG.style.overflowY = "auto";
	for (var aC = 0; aC < sH.length; aC++) s1.appendChild(sH[aC].s1);
	sG.appendChild(s1)
}

function x(sX, sY, sZ, sa, sb) {
	var self, sc = document.createElement("button");

	function sj() {
		var sp;
		bM.so() || (sp = bD.color.sq(sZ), !1 !== sa && 0 < sp[0] && sp[0] < 255 && sp[0] === sp[1] && sp[0] === sp[2]) || (128 < sp[0] && 128 < sp[1] && 128 < sp[2] ? sc.style.backgroundColor = bD.color.sr(sZ, -50) : sc.style.backgroundColor = bD
			.color.sr(sZ, sp[3] && sp[3] < 120 ? 150 : 50))
	}

	function si() {
		if (sa) {
			var sp = bD.color.sq(sZ);
			if (sp[0] === sp[1] && sp[0] === sp[2]) return
		}
		sY && ((sp = sY(this)) ? 2 === sp && sj() : st(this))
	}

	function sl() {
		this.style.backgroundColor = sZ
	}

	function sk() {
		st(this)
	}

	function st(fc) {
		fc.style.backgroundColor = sZ, fc.blur()
	}
	this.button = sc, this.sd = sY, this.se = sZ, this.sh = function(sm) {
		sm = 1.1 - Math.min(.01 * sX.length, .6) + .2 * sm;
		sc.style.fontSize = sm.toFixed(1) + "em"
	}, this.sg = function(ej) {
		ej ? 1 === ej ? ej = bE.pa : 2 === ej && (sa = 1, ej = bE.pa) : (sa = 0, ej = bE.pK), this.se = sZ = ej, sc.style.backgroundColor = ej
	}, self = this, sc.innerHTML = sX, sc.style.color = sb ? bE.qP : bE.pO, sc.style.userSelect = "none", sc.style.outline = "none", sc.style.overflowWrap = "break-word", self.sg(sZ), sc.style.border = "none", sc.style.font = "inherit", self.sh(
		0), sc.style.padding = "0em 0.3em", sc.onclick = si, sc.addEventListener("mouseover", sj), sc.addEventListener("mouseout", sk), sc.addEventListener("focus", sj), sc.addEventListener("blur", sl)
}

function su(oy, sG) {
	var s1;
	this.resize = function() {
		for (var aC = 0; aC < oy.length; aC++) bD.sM.sW(oy[aC].button);
		s1.style.gap = s1.style.padding = bD.sM.sV(bf.sS)
	}, (s1 = document.createElement("div")).style.display = "grid", s1.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", s1.style.overflowY = "auto", s1.style.gridAutoRows = "5.3em", s1.style.maxHeight = "100%";
	for (var aC = 0; aC < oy.length; aC++) oy[aC].sh(1), s1.appendChild(oy[aC].button);
	sG.appendChild(s1)
}

function sw(sx, sy, sz) {
	this.fg = 0, this.fi = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.sM.sN(sz || .5) * sx[1] * i.il, i.k - 2 * bf.gap), this.j = Math.min(this.k * (sx[0] / sx[1]), i.j - 2 * bf.gap), this.k = sx[1] * this.j / sx[0], this.fg = bf.gap + sy[0] * (i.j - this.j - 2 * bf.gap), this.fi = bf
			.gap + sy[1] * (i.k - this.k - 2 * bf.gap)
	}, this.t0 = function() {
		return this.fg + .5 * this.j
	}
}

function t1(t2, t3) {
	var tC, self, t4 = document.createElement("div"),
		t5 = document.createElement("div"),
		t6 = document.createElement("div"),
		t7 = null,
		tD = (this.t8 = new t9({
			value: "",
			eI: -1
		}, 0, tA, function(e) {
			e.target.value = bD.tK.tL(e.target.value), t7.tJ.textContent = 127 - e.target.value.length
		}), 0),
		tE = 1,
		tF = 0,
		tG = 1048575;

	function tA() {
		t2(), t7.tJ.textContent = 127
	}

	function tQ(tP, sE) {
		sE && (sE.tV = 1, tP.appendChild(bq.tW.transform(sE)))
	}

	function tT(by) {
		tE ? t4.scrollTop = t4.scrollHeight : by && (t4.scrollTop = tF)
	}
	this.reset = function(tM) {
			tG = 1048575, t5.textContent = "", tM || this.nH()
		}, this.nH = function() {
			var tN = bq.z.tN,
				tO = bq.z.tO,
				fZ = tN.length,
				kA = 1048575 === tG ? 0 : fZ - (tO - tG + 1048575) % 1048575;
			if (tG = tO, !(fZ <= (kA = Math.max(kA, 0)))) {
				for (var tP = document.createDocumentFragment(), aC = kA; aC < fZ; aC++) tQ(tP, bq.lj.tR(tN[aC], bq.lj.tS(tN[aC])));
				t5.appendChild(tP), tT()
			}
		}, this.tU = function(s) {
			var tP = document.createDocumentFragment();
			tQ(tP, s), t5.appendChild(tP), tT()
		}, this.show = function(sG) {
			sG.appendChild(t4), sG.appendChild(t6), this.resize(sG)
		}, this.tX = function(sG) {
			u.removeChild(sG, t4), u.removeChild(sG, t6)
		}, this.resize = function(sG) {
			tD = sG ? sG.offsetHeight : tD;
			var sG = bD.sM.tZ(.04, .75),
				ta = Math.max(sG, tD - sG),
				tb = i.j / i.l,
				tc = .7 * tb,
				td = bD.sM.sV(tD - sG - ta),
				ta = (t6.style.height = bD.sM.sV(sG), t4.style.height = bD.sM.sV(ta), i.k > i.j || a1.a2.ik() ? (t6.style.top = td, t4.style.top = bD.sM.sV(tD - ta), bD.sM.sW(t4, 8)) : (t4.style.top = td, t6.style.top = bD.sM.sV(tD - sG), bD.sM.sW(
						t4, 2)), this.t8.e.style.width = bD.sM.sV(tc), this.t8.e.style.fontSize = tC.button.style.fontSize = bD.sM.sV(.5 * sG), bD.sM.sW(this.t8.e, 6), tC.button.style.left = bD.sM.sV(tc), tC.button.style.width = bD.sM.sV(tb - tc),
					.385 * sG);
			a1.a2.ik() && (ta *= .8 - .12 * (i.j > i.k)), t5.style.marginLeft = t5.style.marginRight = bD.sM.sV(.5 * ta), t5.style.fontSize = bD.sM.sV(ta), tT(1)
		}, (self = this).t8.e.tH = 127, t4.style.position = "absolute", t4.style.left = "0", t4.style.width = "100%", t4.style.overflowX = "hidden", t4.style.overflowY = "auto", t4.style.font = "inherit", t4.style.backgroundColor = bE.pM, t4
		.addEventListener("scroll", function() {
			tF = t4.scrollTop, tE = tF < t4.scrollHeight - t4.clientHeight - 2 ? 0 : 1
		}), t5.style.font = "inherit", t6.style.position = "absolute", t6.style.left = "0", t6.style.width = "100%", self.t8.e.setAttribute("placeholder", L(13)), self.t8.e.style.position = "absolute", self.t8.e.style.top = "0", self.t8.e.style
		.left = "0", self.t8.e.style.height = "100%", self.t8.e.style.backgroundColor = bE.pJ, self.t8.e.style.textAlign = "center", (tC = new x(L(14), tA)).button.top = "0", tC.button.style.position = "absolute", tC.button.style.height = "100%", tC
		.sg(bE.qe), t7 = new tI("127", tC.button, 1, 1), t4.appendChild(t5), t6.appendChild(self.t8.e), t6.appendChild(tC.button)
}

function tf(tg, sX, th) {
	function click() {
		var value = 1 - tg.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + sX, void 0 !== tg.eI ? bm.qq.qr(tg.eI, value) : tg.value = value, th && th(value)
	}
	var e;
	sX = sX || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (tg.value ? "🟩 " : "⬜ ") + sX, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function ti(sG, s9) {
	var s1 = document.createElement("div");
	this.sI = s1, this.resize = function() {
		s1.style.padding = bD.sM.sV(bf.sS), s1.style.lineHeight = bD.sM.sV(bD.sM.tZ(.035))
	}, sG.style.overflowX = "hidden", sG.style.overflowY = "auto", s1.innerHTML = s9, sG.appendChild(s1)
}

function tj(tk) {
	var s1 = document.createElement("div");
	this.e = s1, this.tl = tk, this.resize = function() {
		for (var fZ = tk.length, aC = 1; aC < fZ; aC++) bD.sM.sW(tk[aC], 4)
	};
	var aC, fZ = tk.length;
	for (s1.style.width = "100%", s1.style.height = "2.7em", s1.style.marginTop = "0.6em", s1.style.border = "inherit", aC = 0; aC < fZ; aC++) tk[aC].style.verticalAlign = "top", tk[aC].style.width = (100 / fZ).toFixed(2) + "%", tk[aC].style.height =
		"100%", tk[aC].style.fontSize = "0.75em", s1.appendChild(tk[aC])
}

function tm(tn, sZ, tp, tq) {
	this.s1 = document.createElement("div"), this.oy = tn;
	var tr = 0;
	this.resize = function(sG, tt) {
		var fZ = tn.length;
		if (!tp)
			for (var aC = 1; aC < fZ; aC++) bD.sM.sW(tn[aC].button, 4);
		if (tq)
			for (aC = 0; aC < fZ; aC++) tn[aC].button.style.width = tq[aC] + "%";
		else {
			for (var tu = 0, aC = 0; aC < fZ; aC++) tu += tn[aC].button.offsetWidth;
			if (sG && (tr = sG.offsetWidth), tt && tu < tr)
				for (aC = 0; aC < fZ; aC++) tn[aC].button.style.width = (100 * tn[aC].button.offsetWidth / tu).toFixed(2) + "%";
			else
				for (aC = 0; aC < fZ; aC++) tn[aC].button.style.width = "auto";
			tt || this.resize(sG, 1)
		}
	};
	var ts = this;
	ts.s1.style.height = ts.s1.style.maxHeight = "100%";
	for (var aC = 0; aC < tn.length; aC++) tn[aC].sg(sZ), tn[aC].button.style.height = "100%", tn[aC].button.style.padding = "0.0em 0.9em", tn[aC].button.style.whiteSpace = "pre", ts.s1.appendChild(tn[aC].button)
}

function tv() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.sM.sW(this.e, 8, bE.pX)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function tw() {
	var u1, u2, tx = document.createElement("div"),
		ty = document.createElement("div"),
		tz = 0,
		u0 = 0;
	this.show = function(fg, fi, s3, u3, u4, ej) {
			if (tz) {
				if (!u3) return;
				this.tX()
			}
			fg === fi && -1 === fg ? (fg = u1, fi = u2) : (u1 = fg, u2 = fi);
			var u5 = Math.floor(bD.sM.tZ(.018)),
				u4 = (fg = Math.max(u5 + 2, fg), u4 || (u0 = u3), tz = 1, i.j / i.l),
				u3 = (tx.style.whiteSpace = "pre", tx.textContent = s3, bD.sM.sW(tx, 5), tx.style.font = bD.sM.u7(0, bD.sM.tZ(.015)), tx.style.padding = "0.3em 0.6em", tx.style.left = fg + "px", tx.style.top = "0px", document.body.appendChild(tx),
					fg + tx.offsetWidth - u4),
				s3 = (0 < u3 && (fg -= u3, fg = Math.max(u5 + 1, fg), tx.style.left = fg + "px", fg < u5 + 2) && (tx.style.whiteSpace = "pre-wrap"), tx.offsetHeight);
			tx.style.top = fi - s3 + u0 * bf.u9 + "px", fg -= u5, ty.style.backgroundColor = bD.color.pG(ej >> 12 << 2, (ej >> 6 & 63) << 2, (63 & ej) << 2), ty.style.left = fg + "px", ty.style.top = tx.style.top, ty.style.width = u5 + "px", ty.style
				.height = s3 + "px", bD.sM.sW(ty, 4), bD.sM.sW(ty, 8), bD.sM.sW(ty, 2), document.body.appendChild(ty)
		}, this.tX = function(uA) {
			if (tz) {
				if (uA && u0) return 0;
				tz = 0, u.removeChild(document.body, tx), u.removeChild(document.body, ty)
			}
			return 1
		}, tx.style.position = "absolute", tx.style.backgroundColor = bE.pK, tx.style.color = bE.pO, tx.style.pointerEvents = "none", tx.style.zIndex = "5", tx.style.maxWidth = "100%", ty.style.position = "absolute", ty.style.color = bE.pO, ty.style
		.pointerEvents = "none", ty.style.zIndex = "5"
}

function t9(uB, type, uC, uD) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.uE++, e.value = uB.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.pO, e.style.backgroundColor = bE.pH, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.uF++
		}), e.addEventListener("blur", function() {
			i.uF--, -1 !== uB.eI && bm.qq.qr(uB.eI, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== uB.eI && bm.qq.qr(uB.eI, e.value), uC ? uC() : e.blur())
		}), uD && e.addEventListener("input", function(sE) {
			uD(sE)
		})
}

function uG(sG, data, oM) {
	var fZ = data.uH.length,
		uI = document.createElement("div"),
		uJ = document.createElement("div"),
		uK = document.createElement("div"),
		uL = new Array(fZ),
		sH = new Array(fZ),
		uM = new Array(data.uN.length),
		uO = bD.color.pI(70, 70, 0, .35);

	function sr() {
		this.style.backgroundColor = bD.color.sr(uO, 160)
	}

	function uV() {
		this.style.backgroundColor = uO
	}

	function sP() {
		var fs;
		for (sG.style.font = bD.sM.u7(0, bD.sM.ud(.026, .5, .03)), aC = 1; aC < uM.length; aC++) bD.sM.sW(uM[aC], 4);
		if (bD.sM.sW(uI, 2), fZ) {
			for (var i1, ue = uI.offsetWidth, uf = uK.offsetWidth, aC = 0; aC < uM.length; aC++) i1 = .01 * data.uU[aC] * uf, uM[aC].style.width = (100 * i1 / ue).toFixed(2) + "%";
			var lp = data.uH[0].length;
			for (aC = 0; aC < fZ; aC++)
				for (bD.sM.sW(uL[aC], 2), fs = 1; fs < lp; fs++) bD.sM.sW(sH[aC][fs], 4);
			uJ.uP && (uJ.scrollTop = uJ.uP)
		}
	}
	this.resize = function() {
			sP(), sP()
		}, sG.style.display = "flex", sG.style.flexDirection = "column", uJ.style.overflowX = "hidden", uJ.style.overflowY = "auto", uJ.addEventListener("scroll", function() {
			this.uP = this.scrollTop, oM && oM.uQ && (u.z.uR[oM.uQ] = this.scrollTop)
		}),
		function() {
			var fc, aC, uH = data.uH,
				lp = fZ ? uH[0].length : 0;
			for (aC = 0; aC < fZ; aC++) {
				uL[aC] = document.createElement("div"), uL[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.pI(130, 130, 130, .35) : bE.pN
				}(aC), uL[aC].style.width = "100%", uL[aC].style.display = "flex", sH[aC] = new Array(lp);
				for (var fs = 0; fs < lp; fs++) sH[aC][fs] = fc = document.createElement("div"), fc.style.display = "flex", fc.style.justifyContent = "center", fc.style.wordBreak = "break-all", fc.style.padding = "0.4em 0em", fc.style.width = data
					.uU[fs] + "%", fc.textContent = uH[aC][fs].g1, 1 === uH[aC][fs].ea && (fc.name = "" + aC, fc.style.color = bE.qP, fc.style.backgroundColor = uO, fc.addEventListener("mouseover", sr), fc.addEventListener("mouseout", uV), function(
						fc, uX, uY) {
						2147483647 !== uY && fc.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, uX), bK.dk(bG.aD), this.style.backgroundColor = uO, u.v(8, u.uZ, new ua(25, {
								action: 0,
								uX: bI.f0.ub(bI.f0.uc(5)),
								uY: uY
							}))
						})
					}(fc, uH[aC][fs].uX, uH[aC][fs].uY)), uL[aC].appendChild(fc)
			}
			for (uI.style.display = "flex", uI.style.backgroundColor = bD.color.pI(0, 120, 0, .35), aC = 0; aC < uM.length; aC++) uM[aC] = fc = document.createElement("div"), fc.style.display = "flex", fc.style.justifyContent = "center", fc.style
				.wordBreak = "break-all", fc.style.padding = "0.4em 0em", fc.style.width = data.uU[aC] + "%", fc.innerHTML = data.uN[aC], uI.appendChild(fc)
		}();
	for (var aC = 0; aC < fZ; aC++) uK.appendChild(uL[aC]);
	uJ.appendChild(uK), sG.appendChild(uI), sG.appendChild(uJ), oM && oM.uQ && (uJ.uP = u.z.uR[oM.uQ])
}

function ug() {
	var uk, ul, uh = document.createElement("div"),
		ui = document.createElement("div"),
		uj = document.createElement("div"),
		uK = document.createElement("div"),
		oy = [],
		eD = [L(16), L(17), L(18), L(19), L(20), L(21), L(22), L(23)],
		um = [1, 2, 3, 0, 9, 10, 11, 13];

	function uo(aC) {
		u.v(8, 0, new ua(21, {
			uq: um[aC],
			ur: 0,
			us: 10
		}))
	}
	this.show = function() {
			this.qr(u.z.ut), document.body.appendChild(uh)
		}, this.tX = function() {
			u.removeChild(document.body, uh)
		}, this.qr = function(ut) {
			for (var uu = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < oy.length; aC++) {
				var j = ut[aC];
				uk[uu[aC]][1].tJ.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, uv = bf.gap,
				k = bD.sM.uw(.085),
				j = Math.min(4 * k, i.j - 2 * uv),
				fZ = oy.length;
			for (bD.sM.ux(uh, uv, i.k - uv - k, j, k), bD.sM.sW(uh), bD.sM.sW(ui, 6), aC = 0; aC < fZ - 1; aC++) bD.sM.sW(oy[aC].button, 6);
			for (aC = 0; aC < fZ; aC++) uk[aC][0].resize(), uk[aC][1].resize();
			for (oy[0].fg = 0, oy[0].button.style.left = bD.sM.sV(oy[0].fg), oy[0].button.style.width = bD.sM.uy(1.7 * k), aC = 1; aC < fZ; aC++) oy[aC].fg = oy[aC - 1].fg + oy[aC - 1].button.offsetWidth, oy[aC].button.style.left = bD.sM.sV(oy[aC]
				.fg);
			if (!ul) {
				if (!ac.uz()) return;
				(ul = ac.get(14)).style.width = "24%", ul.style.position = "absolute", ui.appendChild(ul)
			}
			ul.style.left = bD.sM.sV(0), ul.style.top = "7%", uj.v0 && (uj.scrollLeft = uj.v0)
		}, uh.style.position = "absolute", ui.style.width = "25%", ui.style.height = "100%", ui.style.backgroundColor = bE.pK, uj.style.position = "absolute", uj.style.width = "75%", uj.style.height = "100%", uj.style.backgroundColor = bE.pK, uj
		.style.top = uj.style.right = bD.sM.sV(0), bD.sM.un(uj), uK.style.height = uK.style.maxHeight = "100%", oy.push(new x("", function() {
			uo(0)
		}, bE.qA)), oy.push(new x("", function() {
			uo(1)
		}, bE.qB)), oy.push(new x("", function() {
			uo(2)
		}, bE.q3)), oy.push(new x("", function() {
			uo(3)
		}, bE.pm)), oy.push(new x("", function() {
			uo(4)
		}, bE.qa)), oy.push(new x("", function() {
			uo(5)
		}, bE.qW)), oy.push(new x("", function() {
			uo(6)
		}, bE.qa)), oy.push(new x("", function() {
			uo(7)
		}, bE.pF)), uk = new Array(oy.length);
	for (var aC = 0; aC < oy.length; aC++) oy[aC].button.style.position = "absolute", uk[aC] = [new up(eD[aC], oy[aC].button, .25, .45), new up("", oy[aC].button, .53, .84, 1)], oy[aC].button.style.height = oy[aC].button.style.maxHeight = "100%", oy[
		aC].button.top = bD.sM.sV(0), uK.appendChild(oy[aC].button);
	uj.appendChild(uK), uh.appendChild(ui), uh.appendChild(uj)
}

function v1(v2, v3, t2, t3, v4) {
	var v5 = document.createElement("div"),
		v6 = document.createElement("div"),
		v7 = document.createElement("div"),
		v8 = document.createElement("div"),
		v9 = document.createElement("div"),
		vA = document.createElement("div"),
		vB = document.createElement("span"),
		vC = document.createElement("div"),
		vI = (this.vD = new t1(t2, t3), this.vE = new vF(t3), this.vG = new vH(v4), 2);
	this.vM = function(vN) {
		vN = (vN / 10).toFixed(1) + "%";
		vA.style.width = vN, vB.innerHTML = vN
	}, this.vO = function(vP) {
		(0 === vI ? this.vD : 1 === vI ? this.vE : this.vG).tX(v8), (0 === (vI = vP) ? this.vD : 1 === vP ? this.vE : this.vG).show(v8)
	}, this.vQ = function() {
		return v6
	}, this.show = function() {
		document.body.appendChild(v5)
	}, this.tX = function() {
		u.removeChild(document.body, v5)
	}, this.resize = function() {
		var vR = 1 - .4 * a1.a2.ik() * (i.j > 1.6 * i.k),
			vS = bD.sM.tZ(.05 * vR),
			vT = i.k > i.j,
			vU = bD.sM.tZ(.06 * vR + .03 * vT),
			vT = bD.sM.tZ(.02 * vR + .01 * vT),
			vW = bD.sM.tZ(.025);
		v5.style.font = bD.sM.u7(0, vW), v7.style.font = bD.sM.u7(0, .9 * vW), vC.style.font = bD.sM.u7(0, .9 * vW), vR < 1 && (vR = bD.sM.u7(0, vR * vW), v7.style.font = vR, vC.style.font = vR, v9.style.font = vR), v6.style.height = bD.sM.sV(
			vS), v6.style.font = bD.sM.u7(0, .72 * vS), bD.sM.sW(v6, 2), v7.style.top = bD.sM.sV(vS), v7.style.height = bD.sM.sV(vU), bD.sM.sW(v7, 2), v8.style.top = bD.sM.sV(vS + vU), v8.style.height = bD.sM.sV(i.k / i.l - vS - 2 * vU - vT), v9
			.style.top = bD.sM.sV(i.k / i.l - vU - vT), v9.style.height = bD.sM.sV(vT), bD.sM.sW(v9, 8), vB.style.font = bD.sM.u7(0, .8 * vT), vC.style.top = bD.sM.sV(i.k / i.l - vU), vC.style.height = bD.sM.sV(vU), bD.sM.sW(vC, 8), v2.resize(
			v5), v3.resize(v5), 0 === vI ? this.vD.resize(v8) : (1 === vI ? this.vE : this.vG).resize()
	};
	t2 = this;
	v5.style.position = "absolute", v5.style.top = "0", v5.style.left = "0", v5.style.width = "100%", v5.style.height = "100%", v5.style.backgroundColor = bE.pN, bM.so() || (v5.style.backdropFilter = "blur(4px)", v5.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (v5.style.display = "none"), v6.style.position = "absolute", v6.style.top = "0", v6.style.left = "0", v6.style.width = "100%", v6.style.display = "flex", v6.style.alignItems = "center", v6.translate = !1;
	for (var h = [v7, vC], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.sM.un(h[aC]);
	v8.style.position = "absolute", v8.style.left = "0", v8.style.width = "100%", v8.style.font = "inherit", v9.style.position = "absolute", v9.style.left = "0", v9.style.width = "100%", vA.style.position = "absolute", vA.style.top = "0", vA.style
		.left = "0", vA.style.height = "100%", vA.style.width = "50%", vA.style.backgroundColor = bE.pk, vB.innerHTML = "", vB.style.position = "absolute", vB.style.top = "50%", vB.style.left = "50%", vB.style.transform = "translate(-50%, -50%)", vB
		.translate = !1, v6.appendChild(function() {
			var vL = document.createElement("h1");
			return vL.textContent = L(24), vL.style.margin = "0 auto 0.15em auto", vL.style.fontFamily = "Arial Black, system-ui", vL.style.fontSize = "inherit", vL.style.fontWeight = "inherit", vL
		}()), v7.appendChild(v2.s1), v9.appendChild(vA), v9.appendChild(vB), vC.appendChild(v3.s1), v5.appendChild(v6), v5.appendChild(v7), v5.appendChild(v8), v5.appendChild(v9), v5.appendChild(vC), v5.className = "fx-lobby", v8.className =
		"fx-panel", v9.className = "fx-progress", t2.vG.show(v8)
}

function vH(v4) {
	var v5 = document.createElement("div"),
		vY = [],
		vZ = 96,
		va = ["battleRoyale", "oneVsOne", "zombie", "noFullSending"];

	function vp(e) {
		e.style.position = "absolute", e.style.top = e.style.left = "0", e.style.width = e.style.height = "100%", e.style.pointerEvents = "none"
	}

	function vd(button, w3) {
		var s1 = document.createElement("div");
		return s1.style.position = "absolute", s1.style.left = "0", s1.style.width = "100%", s1.style.height = "20%", s1.style.pointerEvents = "none", s1.style.backgroundColor = bE.pH, w3 ? s1.style.top = "0" : s1.style.bottom = "0", button
			.appendChild(s1), s1
	}

	function vg(w4, w5) {
		var s1 = document.createElement("div");
		return s1.style.position = "absolute", s1.style.top = "0", s1.style.width = "20%", s1.style.height = "100%", w5 ? s1.style.left = "0" : s1.style.right = "0", w4.appendChild(s1), s1
	}

	function vr(w6) {
		var canvas = document.createElement("canvas");
		return canvas.width = canvas.height = 64, vp(canvas), canvas.style.top = canvas.style.left = "10%", canvas.style.width = canvas.style.height = "80%", w6.appendChild(canvas), canvas.getContext("2d", {
			alpha: !0
		})
	}

	function vk(w4, left, right, width) {
		var s1 = document.createElement("div");
		return s1.style.position = "absolute", s1.style.top = "50%", s1.style.transform = "translateY(-50%)", s1.style.left = left, s1.style.right = right, s1.style.width = width, s1.style.textAlign = "left", w4.appendChild(s1), {
			s1: s1,
			vy: w9(s1, 1.9),
			vn: w9(s1, 1)
		}
	}

	function w9(oi, fontSize) {
		var s1 = document.createElement("div");
		return s1.style.fontSize = fontSize + "em", s1.style.lineHeight = "1.1", s1.style.whiteSpace = "nowrap", s1.style.overflow = "hidden", s1.style.textOverflow = "ellipsis", s1.style.textShadow = "0 0 0.25em black", oi.appendChild(s1), s1
	}

	function wA(e, s3) {
		e.textContent !== s3 && (e.textContent = s3)
	}

	function wB(sE) {
		sE.canvas && (bq.wC.wT(sE.canvas), sE.canvas = null), sE.vx = ""
	}
	this.nH = function() {
		var sH = bq.sH.sH,
			fZ = sH.length;
		if (fZ !== vY.length) {
			for (var aC = 0; aC < vY.length; aC++) wB(vY[aC]);
			for (v5.textContent = "", vY = new Array(fZ), aC = 0; aC < fZ; aC++) vY[aC] = function(eI) {
				var button = document.createElement("button"),
					vc = (button.style.position = "absolute", button.style.backgroundColor = bE.pN, button.style.color = bE.pO, button.style.outline = "none", button.style.userSelect = "none", button.style.cursor = "pointer", button.style
						.padding = "0", button.style.overflow = "hidden", button.onclick = function() {
							v4(eI)
						}, bD.sM.sW(button), vd(button, 1)),
					ve = vd(button, 0),
					vf = vg(vc, 0),
					vh = vg(ve, 1),
					vi = vg(ve, 0),
					vj = vk(vc, "3%", "", "74%"),
					vl = vk(ve, "20%", "", "30%"),
					vm = vk(ve, "", "20%", "30%"),
					vo = (vm.s1.style.textAlign = "right", vl.vn.textContent = L(25), document.createElement("canvas"));
				return vo.width = vo.height = vZ, vp(vo), vf.appendChild(vo), (button = {
					button: button,
					vc: vc,
					ve: ve,
					vq: vr(vh),
					vs: vr(vi),
					vt: 0,
					isContest: 0,
					vu: null,
					vf: vf,
					vo: vo,
					vv: vo.getContext("2d", {
						alpha: !0
					}),
					vw: -1,
					canvas: null,
					vx: "",
					map: vj.vy,
					vz: vj.vn,
					w0: vl.vy,
					w1: vm.vy,
					w2: vm.vn,
					hj: -1
				}).map.translate = !1, button.w0.translate = !1, button
			}(aC), v5.appendChild(vY[aC].button);
			this.resize()
		}
		for (aC = 0; aC < fZ; aC++) vY[aC].vx !== bq.wC.wD(sH[aC].fF, sH[aC].mapSeed) && wB(vY[aC]);
		for (aC = 0; aC < fZ; aC++) {
			var wE = sH[aC],
				sE = vY[aC],
				hj = wE.id === bq.sH.wF ? 1 : 0;
			wA(sE.map, bV.wG.wH[wE.fF]), wA(sE.vz, bq.sH.wI(wE.vz)), wA(sE.w0, bq.sH.wJ(wE.wK)), wA(sE.w1, "" + wE.h2), wA(sE.w2, 1 === wE.h2 ? L(26) : L(27)), sE.hj !== hj && (sE.hj = hj, sE.vc.style.backgroundColor = sE.ve.style
				.backgroundColor = hj ? bE.pu : bE.pH, bD.sM.sW(sE.button, 5, hj ? bE.pv : bE.pO), sE.button.classList.toggle("fx-line", !hj)), ! function(sE) {
				!sE.vt && ac.uz() && (sE.vt = 1, sE.vq.drawImage(ac.w8("clock"), 0, 0), sE.vs.drawImage(ac.w8("userIcon"), 0, 0))
			}(sE), ! function(sE, vz) {
				sE.vw === vz || 7 <= vz && !ac.uz() || ((sE.vw = vz) < 7 ? bk.wR(sE.vv, vz + 2, vZ) : (sE.vv.clearRect(0, 0, vZ, vZ), sE.vv.drawImage(ac.w8(va[vz - 7]), 0, 0, vZ, vZ)))
			}(sE, wE.vz), ! function(sE, isContest) {
				sE.isContest === isContest || isContest && !ac.uz() || ((sE.isContest = isContest) ? (sE.vu || (sE.vu = function(sE) {
					var wQ = ac.w8("crown"),
						canvas = document.createElement("canvas");
					return canvas.width = wQ.width, canvas.height = wQ.height, canvas.getContext("2d", {
							alpha: !0
						}).drawImage(wQ, 0, 0), canvas.style.position = "absolute", canvas.style.top = "50%", canvas.style.left = "50%", canvas.style.width = "55%", canvas.style.height = "auto", canvas.style.transform =
						"translate(-50%, -50%)", canvas.style.opacity = "0.5", canvas.style.pointerEvents = "none", sE.button.insertBefore(canvas, sE.vc), canvas
				}(sE)), sE.vu.hidden = !1) : sE.vu.hidden = !0)
			}(sE, wE.wN), ! function(sE, wE) {
				var canvas;
				sE.canvas || (canvas = bq.wC.wS(wE.fF, wE.mapSeed)) && (sE.canvas = canvas, sE.vx = bq.wC.wD(wE.fF, wE.mapSeed), vp(canvas), sE.button.insertBefore(canvas, sE.button.firstChild))
			}(sE, wE)
		}
	}, this.resize = function() {
		var fZ = vY.length,
			j = v5.offsetWidth,
			k = v5.offsetHeight;
		if (0 !== fZ && 0 !== j && 0 !== k) {
			for (var gap = bD.sM.tZ(.012), wU = 0, wV = 1, ej = 1; ej <= fZ; ej++) {
				var rows = bO.g0(fZ + ej - 1, ej),
					rows = Math.min((j - (ej + 1) * gap) / ej, (k - (rows + 1) * gap) / rows);
				wU < rows && (wU = rows, wV = ej)
			}
			for (var wW = bO.g0(fZ + wV - 1, wV), nv = (j - wV * wU - (wV - 1) * gap) / 2, nw = (k - wW * wU - (wW - 1) * gap) / 2, aC = 0; aC < fZ; aC++) {
				var sQ = vY[aC].button.style;
				sQ.left = bD.sM.sV(nv + aC % wV * (wU + gap)), sQ.top = bD.sM.sV(nw + bO.g0(aC, wV) * (wU + gap)), sQ.width = sQ.height = bD.sM.sV(wU), sQ.fontSize = bD.sM.sV(.05 * wU)
			}
		}
	}, this.show = function(sG) {
		sG.appendChild(v5), this.nH(), this.resize()
	}, this.tX = function(sG) {
		u.removeChild(sG, v5)
	}, v5.style.position = "absolute", v5.style.top = "0", v5.style.left = "0", v5.style.width = v5.style.height = "100%", v5.style.overflow = "hidden", v5.style.font = "inherit"
}

function vF(t3) {
	var v5 = document.createElement("div"),
		v8 = document.createElement("div");
	this.nH = function() {
			v8.textContent = "", bq.wX.wY && bq.wX.tX(1);
			for (var tP = document.createDocumentFragment(), w1 = bq.wZ.w1, wa = bq.wZ.wa, wb = bq.sH.wc(), aC = 0; aC < w1.length; aC++) ! function(tP, sE, we, wb) {
				var tJ = document.createElement("span");
				tJ.textContent = (we ? "🟢 " : "⚪ ") + bq.lj.wf(sE, wb), tJ.style.color = bq.lj.wg(sE.wh), 11 === sE.wh && (tJ.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
				tJ.style.cursor = "pointer", tJ.style.margin = "0.2em 0.2em 0.2em 0.2em", tJ.style.width = tJ.style.maxWidth = wb ? "10em" : "9em", tJ.style.height = tJ.style.maxHeight = "1.4em", tJ.style.whiteSpace = "nowrap", tJ.style
					.overflow = "hidden", tJ.style.textOverflow = "ellipsis", tJ.style.font = "inherit", tJ.style.display = "inline-block", __fx.settings.highlightDuplicateIps && (we = __fx.utils.getDuplicateIpHighlightColor(sE, bq.wZ.w1,
					"aGI")) && (tJ.style.backgroundColor = we, tJ.style.borderRadius = "0.3em");
				__fx.settings.highlightSameClan && (wb = __fx.utils.getSameClanHighlightColor(sE, bq.aFv, "username")) && (tJ.style.backgroundColor ? tJ.style.boxShadow = "inset 0 0 0 2px " + wb : tJ.style.backgroundColor = wb, tJ.style
					.borderRadius = "0.3em");
				bq.lj.wi(sE) && (tJ.style.textDecoration = "underline"), sE.wj && (tJ.style.textDecorationLine = "underline", tJ.style.textDecorationStyle = "dotted");
				tJ.onclick = function(e) {
					t3(e, sE)
				}, bM.so() || (tJ.onmouseover = function(e) {
					bq.wX.wk(e.target, sE, 1)
				}), tP.appendChild(tJ)
			}(tP, w1[aC], aC < wa, wb);
			v8.appendChild(tP), v8.classList.toggle("fx-wide", !!wb)
		}, this.show = function(sG) {
			sG.appendChild(v5)
		}, this.tX = function(sG) {
			u.removeChild(sG, v5)
		}, this.resize = function() {
			v8.style.fontSize = bD.sM.sV(bD.sM.tZ(.02, .3))
		}, v5.style.top = "0", v5.style.left = "0", v5.style.width = v5.style.height = "100%", v5.style.overflowX = "hidden", v5.style.overflowY = "auto", v5.style.font = "inherit", v8.style.font = "inherit", v8.style.margin = "0.4em", v5
		.appendChild(v8), v5.className = "fx-players-scroll", v8.className = "fx-players"
}

function wl(wm) {
	var v5 = document.createElement("div"),
		t6 = document.createElement("div"),
		wn = [];

	function sj() {
		bM.so() || (this.style.backgroundColor = bD.color.sr(bE.pK, 50))
	}

	function sk() {
		this.style.backgroundColor = bE.pK
	}
	this.qr = function(wp, wq) {
			wn[2].textContent = wp + 1 + " / " + wq
		}, this.show = function(sE) {
			sE = bq.lj.tR(sE, bq.lj.tS(sE)), t6.appendChild(bq.tW.transform(sE)), document.body.appendChild(v5)
		}, this.resize = function() {
			var k = bD.sM.tZ(.03, .5);
			v5.style.width = 10 * k + "px", v5.style.font = bD.sM.u7(1, .75 * k), bD.sM.sW(v5, 4), t6.style.top = k + "px", t6.style.font = bD.sM.u7(0, .55 * k), bD.sM.sW(t6, 2), v5.style.height = k + t6.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.sM.sW(wn[aC], 6), wn[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) wn[aC].style.height = k + "px", bD.sM.sW(wn[aC], 2);
			wn[2].style.width = 4 * k + "px", wn[1].style.left = 2 * k + "px", wn[2].style.left = 4 * k + "px", wn[3].style.left = 8 * k + "px"
		}, this.wr = function() {
			for (var aC = 0; aC < 4; aC++) wn[aC].onclick = null, wn[aC].onmouseover = null, wn[aC].onmouseout = null;
			u.removeChild(document.body, v5), v5 = t6 = wn = null
		}, v5.style.position = "absolute", v5.style.color = bE.pO, v5.style.zIndex = "3", v5.style.right = "0", v5.style.top = "0", t6.style.position = "absolute", t6.style.height = "auto", t6.style.color = bE.pO, t6.style.backgroundColor = bE.pK, t6
		.style.left = "0", t6.style.width = "100%", t6.style.overflowWrap = "break-word", v5.appendChild(t6);
	for (var aC = 0; aC < 4; aC++) wn[aC] = document.createElement("div"), wn[aC].style.position = "absolute", wn[aC].style.backgroundColor = bE.pK, wn[aC].style.color = bE.pO, wn[aC].style.top = "0", wn[aC].style.display = "flex", wn[aC].style
		.justifyContent = "center", wn[aC].style.alignItems = "center", wn[aC].style.userSelect = "none", wn[aC].style.outline = "none", wn[aC].style.font = "inherit", 2 !== (wn[aC].wo = aC) && (wn[aC].onclick = wm, wn[aC].onmouseover = sj, wn[aC]
			.onmouseout = sk), v5.appendChild(wn[aC]);
	wn[0].textContent = "◀", wn[1].textContent = "▶", wn[3].textContent = "✖"
}

function ws(wm) {
	var tx = document.createElement("div");

	function sj() {
		bM.so() || (tx.style.backgroundColor = bD.color.sr(bE.pK, 50))
	}

	function sk() {
		tx.style.backgroundColor = bE.pK
	}
	this.qr = function(wq) {
			tx.textContent = wq
		}, this.show = function() {
			document.body.appendChild(tx)
		}, this.resize = function() {
			var k = bD.sM.tZ(.03, .5);
			tx.style.width = 2 * k + "px", tx.style.height = k + "px", tx.style.font = bD.sM.u7(1, .75 * k), bD.sM.sW(tx, 4), bD.sM.sW(tx, 2)
		}, this.wr = function() {
			tx.onclick = null, tx.onmouseover = null, tx.onmouseout = null, u.removeChild(document.body, tx), tx = null
		}, tx.style.position = "absolute", sk(), tx.style.color = bE.pO, tx.style.zIndex = "3", tx.style.right = "0", tx.style.top = "0", tx.style.display = "flex", tx.style.justifyContent = "center", tx.style.alignItems = "center", tx.style
		.userSelect = "none", tx.style.outline = "none", tx.onclick = wm, tx.onmouseover = sj, tx.onmouseout = sk
}

function wt(tn) {
	var v5 = document.createElement("div"),
		wu = document.createElement("div"),
		tz = (this.fg = 0, this.fi = 0);

	function ww() {
		bq.wx.tX()
	}
	this.oy = tn, this.show = function(fg, fi, wz) {
		if (tz) return [0, 0];
		tz = 1, this.fg = fg, this.fi = fi,
			function(self, wz) {
				var j = bD.sM.tZ(.16, .7),
					k = tn.length * j / 3,
					x1 = i.j / i.l,
					x2 = i.k / i.l,
					o7 = Math.min(1, Math.min(x1 / j, x2 / k));
				j *= o7, k *= o7, wz && (self.fg += bD.sM.tZ(.03, .5)), self.fg = bO.ij(self.fg, 0, x1 - j), self.fi = bO.ij(self.fi, 0, x2 - k), wu.style.left = self.fg + "px", wu.style.top = self.fi + "px", wu.style.width = j + "px", wu.style
					.height = k + "px", wu.style.font = bD.sM.u7(0, .3 * k / tn.length), bD.sM.sW(wu, 5);
				for (var aC = 1; aC < tn.length; aC++) bD.sM.sW(tn[aC].button, 8)
			}(this, wz), document.body.appendChild(v5)
	}, this.tX = function() {
		tz && (tz = 0, v5.removeEventListener("click", ww), u.removeChild(document.body, v5))
	};
	for (var aC = 0; aC < tn.length; aC++) new tI("" + (1 + aC), tn[aC].button, 0, 1);
	v5.style.position = "fixed", v5.style.top = "0", v5.style.left = "0", v5.style.width = "100%", v5.style.height = "100%", v5.style.zIndex = "5", wu.style.position = "absolute",
		function() {
			for (var wy = (100 / tn.length).toFixed(2) + "%", aC = 0; aC < tn.length; aC++) tn[aC].button.style.width = "100%", tn[aC].button.style.height = tn[aC].button.style.maxHeight = wy, tn[aC].button.style.padding = "0.0em 0.9em", wu
				.appendChild(tn[aC].button)
		}(), v5.appendChild(wu), v5.addEventListener("click", ww)
}

function ek() {
	var x3, x4, x5;

	function xC(aC) {
		return bD.color.pG(x4[aC][0], x4[aC][1], x4[aC][2])
	}

	function xI(fs, ft) {
		return bD.color.xR(x4[fs], x4[ft]), xC(ft)
	}

	function xA() {
		x3 && (x3.remove(), x3 = null)
	}
	this.show = function(el, colors, id) {
		0 <= (x5 = id) && b1.z.ef(0) && b1.eg.x6(0, id), el = (el = (el = (el = (el = (el = (el = (el = (el = (el = (el = (el = el.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			x4 = colors, (x3 = document.createElement("div")).style.position = "fixed", x3.style.top = "0", x3.style.left = "0", x3.style.width = "100%", x3.style.height = "100%", x3.style.backgroundColor = bD.color.pI(x4[0][0], x4[0][1], x4[0][
				2], .6), x3.style.zIndex = "6", x3.onclick = function(e) {
				e.target === x3 && xA()
			},
			function(el) {
				var iV, xB = document.createElement("div");
				xB.style.position = "absolute", xB.style.display = "flex", xB.style.flexDirection = "column", xB.style.top = "50%", xB.style.left = "50%", xB.style.backgroundColor = xC(2), iV = a1.a2.ik() ? bD.sM.xD(i.min) : bD.sM.tZ(.4);
				iV = Math.max(iV, 200), xB.style.width = bD.sM.sV(iV), xB.style.height = bD.sM.sV(iV), xB.style.transform = "translate(-50%, -50%)",
					function(xB, iV) {
						var xH = document.createElement("div");
						xH.style.flex = "0 0 10%", xH.style.overflow = "hidden", xH.style.backgroundColor = xC(1), xH.style.color = xI(1, 7), xH.style.font = bD.sM.u7(1, .05 * iV), xH.style.display = "flex", xH.style.alignItems = "center", xH
							.style.justifyContent = "center", xH.innerHTML = L(28), xB.appendChild(xH)
					}(xB, iV),
					function(xB, el, iV) {
						var xJ = document.createElement("div");
						xJ.style.flex = "0 0 70%", xJ.style.overflowY = "auto", xJ.style.overflowX = "hidden", xJ.style.whiteSpace = "pre-wrap", xJ.style.wordWrap = "break-word", xJ.style.padding = bD.sM.sV(.02 * iV), xJ.style.backgroundColor =
							xC(2), xJ.style.color = xI(2, 8), xJ.style.font = bD.sM.u7(0, .07 * iV), xJ.innerHTML = el, xJ.innerHTML = "<style>a { color: inherit; }</style>" + xJ.innerHTML, xB.appendChild(xJ)
					}(xB, el, iV),
					function(xB, iV) {
						var oi = document.createElement("div"),
							xK = (oi.style.display = "flex", oi.style.flexDirection = "row", oi.style.justifyContent = "space-between", oi.style.alignItems = "stretch", oi.style.backgroundColor = xC(3), oi.style.flex = "1", oi.style.padding = bD
								.sM.sV(.01 * iV), oi.style.gap = bD.sM.sV(.01 * iV), document.createElement("div")),
							xL = (xK.style.flex = "0 0 60%", xK.style.height = "100%", new x(L(29, 0, 0, 1), function() {
								xA()
							}, xC(4), !1)),
							xL = (xL.button.style.width = "100%", xL.button.style.height = "100%", xL.button.style.color = xI(4, 9), xL.button.style.font = bD.sM.u7(1, .05 * iV), xK.appendChild(xL.button), document.createElement("div")),
							xN = (xL.style.flex = "0 0 15%", xL.style.height = "100%", xL.style.backgroundColor = xC(5), document.createElement("div")),
							xO = (xN.style.flex = "1", xN.style.height = "100%", new x(L(30), function(e) {
								return bD.sM.xP(e), x5 < 0 || b1.z.ef(0) && (b1.eg.x6(1, x5), x5 = -1), !0
							}, xC(6), !1));
						xO.button.style.width = "100%", xO.button.style.height = "100%", xO.button.style.color = xI(6, 10), xO.button.style.font = bD.sM.u7(1, .035 * iV), xN.appendChild(xO.button), oi.appendChild(xK), oi.appendChild(xL), oi
							.appendChild(xN), xB.appendChild(oi)
					}(xB, iV), x3.appendChild(xB)
			}(el), document.body.appendChild(x3)
	}
}

function xS(uB, xT) {
	this.sC = [];
	var xU = this.sC;

	function click() {
		for (var aC = 0; aC < xU.length; aC++) xU[aC].textContent = xU[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eI = parseInt(this.name);
		void 0 !== uB.eI && bm.qq.qr(uB.eI, eI), xT && xT(eI)
	}
	for (var xV, fZ = uB.oM.length, aC = 0; aC < fZ; aC++)(xV = document.createElement("p")).textContent = "⚪ " + uB.oM[aC], xV.style.margin = "0", xV.name = "" + aC, xV.style.cursor = "pointer", xV.style.fontSize = "1em", xV.addEventListener(
		"click", click), xU.push(xV);
	xU[uB.value].textContent = xU[uB.value].textContent.replace("⚪", "🟢")
}

function xW(title, xX, xY) {
	var uh = document.createElement("div"),
		xZ = document.createElement("div"),
		uK = document.createElement("div"),
		xa = document.createElement("div"),
		xb = document.createElement("div");
	this.xc = uK, this.xd = xX, uh.className = "fx-page", this.show = function() {
			!1 !== xY ? document.body.appendChild(uh) : (document.body.appendChild(xZ), document.body.appendChild(xa))
		}, this.tX = function() {
			!1 !== xY ? u.removeChild(document.body, uh) : (u.removeChild(document.body, xZ), u.removeChild(document.body, xa))
		}, this.xh = function() {
			var ta = bD.sM.tZ(.1),
				tY = bD.sM.tZ(.08 + .04 * (i.xi < 1), .3);
			return {
				ta: ta,
				tY: tY,
				xj: i.k / i.l - ta - tY
			}
		}, this.resize = function(tt) {
			var fZ = xX.length,
				xk = this.xh(),
				ta = xk.ta,
				tY = xk.tY;
			for (xZ.style.height = bD.sM.sV(ta), bD.sM.sW(xZ, 2), xa.style.top = bD.sM.sV(i.k / i.l - tY), xa.style.height = bD.sM.sV(tY), bD.sM.sW(xa, 8), uK.style.top = bD.sM.sV(ta), uK.style.height = uK.style.maxHeight = bD.sM.sV(xk.xj), xZ.style
				.font = bD.sM.u7(0, bD.sM.tZ(.02, .15)), xa.style.font = bD.sM.u7(0, bD.sM.tZ(.02, .7)), uK.style.font = bD.sM.u7(0, bD.sM.tZ(.02, .35)), aC = 1; aC < fZ; aC++) bD.sM.sW(xX[aC].button, 4);
			for (var tu = 0, aC = 0; aC < fZ; aC++) tu += xX[aC].button.offsetWidth;
			if (tt && tu < xa.offsetWidth)
				for (aC = 0; aC < fZ; aC++) xX[aC].button.style.width = (100 * xX[aC].button.offsetWidth / tu).toFixed(2) + "%";
			else
				for (aC = 0; aC < fZ; aC++) xX[aC].button.style.width = "auto";
			xa.v0 && (xa.scrollLeft = xa.v0), tt || this.resize(!0)
		}, this.xl = function() {
			var xk = this.xh(),
				ej = i.l;
			xm.fillStyle = bE.pK, xm.fillRect(0, ej * xk.ta, i.j, ej * xk.xj)
		}, uh.style.position = "absolute", uh.style.top = "0", uh.style.left = "0", uh.style.width = "100%", uh.style.height = "100%", xZ.style.position = "absolute", xZ.style.top = "0", xZ.style.left = "0", xZ.style.width = "100%", xZ.style
		.display = "flex", xZ.style.backgroundColor = bE.pK, xa.style.position = "absolute", xa.style.left = "0", xa.style.width = "100%", bD.sM.un(xa), xb.style.height = xb.style.maxHeight = "100%", uK.style.position = "absolute", uK.style.width =
		"100%", uK.style.backgroundColor = bE.pK,
		function() {
			for (var aC = 0; aC < xX.length; aC++) xX[aC].button.style.height = "100%", xX[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < xX.length; aC++) xb.appendChild(xX[aC].button);
	xZ.appendChild(function() {
		var xg = document.createElement("h1");
		return xg.textContent = title, xg.style.margin = "auto", xg.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", xg.style.fontFamily = "Arial Black, system-ui", xg
	}()), xa.appendChild(xb), !1 !== xY && (uh.appendChild(uK), uh.appendChild(xZ), uh.appendChild(xa))
}

function tI(xn, xo, xp, xq) {
	var self;
	this.tJ = document.createElement("span"), (self = this).tJ.textContent = xn, self.tJ.style.color = bE.pO, self.tJ.style.position = "absolute", self.tJ.style.font = "inherit", xq ? self.tJ.style.bottom = "0.06em" : self.tJ.style.top = "0.12em",
		xp ? self.tJ.style.left = "0.2em" : self.tJ.style.right = "0.2em", self.tJ.style.fontSize = "0.6em", self.tJ.style.pointerEvents = "none", self.tJ.style.whiteSpace = "pre", xo.style.position = "relative", xo.style.overflow = "hidden", xo
		.appendChild(self.tJ)
}

function up(xn, xo, xr, xs, xt) {
	var self;
	this.tJ = document.createElement("span"), this.resize = function() {
			this.tJ.style.fontSize = ((xs - xr) * xo.offsetHeight).toFixed(1) + "px"
		}, (self = this).tJ.textContent = xn, self.tJ.style.color = bE.pO, self.tJ.style.font = "inherit", self.tJ.style.margin = "0.1em 0.6em", self.tJ.style.pointerEvents = "none", xt && (self.tJ.style.fontWeight = "bold"), self.tJ.style
		.whiteSpace = "nowrap", self.tJ.style.display = "block", xo.appendChild(self.tJ)
}

function xu(xv, xw, xx, oO) {
	var xy = document.createElement("textarea"),
		xz = (this.e = xy, !0);

	function y4() {
		xy.select(), document.execCommand("copy")
	}
	this.resize = function() {
			xw && bD.sM.sW(xy, 5)
		}, this.y0 = function(el) {
			xy.value = el
		}, this.y1 = function() {
			return xy.value
		}, this.y2 = function() {
			xy.select()
		}, this.clear = function() {
			xy.value = ""
		}, this.y3 = function() {
			xz && navigator.clipboard ? (xy.select(), navigator.clipboard.writeText(xy.value).catch(function() {
				xz = !1, y4()
			})) : y4()
		}, xy.setAttribute("id", "textArea" + u.z.uE++), xy.setAttribute("autocomplete", "off"), xv && xy.setAttribute("placeholder", xv), xy.style.top = "0", xy.style.left = "0", xy.style.width = "100%", xy.style.height = "100%", xy.style
		.userSelect = "none", xy.style.outline = "none", xy.style.resize = "none", xy.style.border = "none", xy.style.color = bE.pO, xy.style.backgroundColor = bE.pH, oO ? (xy.style.fontSize = "1em", xy.rows = 6, xy.style.padding = "0.25em") : (xy
			.style.padding = "0.45em", xy.style.fontSize = "1.2em"), xx && xy.addEventListener("input", function(e) {
			xx(e)
		}), xy.addEventListener("focus", function() {
			i.uF++
		}), xy.addEventListener("blur", function() {
			i.uF--
		})
}

function dO() {
	this.sd = new y5, this.buffer = new y6, this.qq = new y7, this.z = new y8, this.y9 = new yA, this.dk = function() {
		this.buffer.dk(), (new yB).dk(), this.y9.dk(), this.z.yC()
	}
}

function y6() {
	function yD(aC, type, yJ, e3) {
		bm.buffer.data.push({
			eI: aC,
			type: type || 0,
			value: yJ || 0,
			yJ: yJ || 0,
			e3: e3 || 0
		})
	}

	function yE(aC, type, yJ, e3) {
		bm.buffer.data.push({
			eI: aC,
			type: type,
			value: yJ || "",
			yJ: yJ || "",
			e3: e3 || 0
		})
	}

	function yF(oD) {
		for (var aC = bm.buffer.data.length; aC < oD; aC++) bm.buffer.data.push(null)
	}
	this.data = [], this.dk = function() {
		yD(0, 1, 0, 5), yD(1, 1, 1), yD(2, 0), yE(3, 2), yD(4, 1), yE(5, 2, "system-ui", 2), yD(6, 0), yD(7, 0, 0), yD(8, 0), yD(9, 1, 1), yD(10, 1), yD(11, 1, 1), yE(12, 2, navigator.language), yD(13), yD(14), yD(15, 0, 1), yD(16, 0, 3), yF(
			100), yE(100, 2), yE(101, 2), yE(102, 2), yE(103, 2), yE(104, 2), yE(105, 2), yE(106, 2), yD(107), yD(108), yD(109), yE(110, 2), yD(111), yD(112), yD(113), yE(114, 2), yD(115), yE(116, 2), yD(117, 1), yE(118, 2, "", 2), yD(119, 1, 0,
				1), yE(120, 2), yD(121, 1, ~~(262144 * Math.random())), yE(122, 2, "Player " + Math.floor(1e3 * Math.random())), yD(123), yE(124), yD(125, 1), yE(126, 2), yD(127, 0, 1), yD(128), yD(129), yD(130), yD(131), yD(132), yE(133, 2), yD(
				134, 0, 5), yE(135, 2), yE(136, 2), yD(137), yD(138), yD(139), yD(140), yD(141), yD(142), yD(143), yD(144), yE(145, 2), yD(146), yD(147), yE(148, 2), yD(149), yD(150, 0, 1), yE(151, 2), yD(152, 0, 5), yD(153, 1), yD(154, 1), yE(
				155, 2), yE(156, 2), yD(157), yD(158), yD(159), yD(160), yE(161, 2), yD(162, 0, 1024), yE(163, 2, "0,0,0"), yE(164, 2, "100,100,100"), yE(165, 2, "30,30,30"), yE(166, 2, "70,70,70"), yE(167, 2, "100,100,100"), yE(168, 2,
				"85,85,85"), yE(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) yE(170 + aC, 2, "255,255,255");
		yE(174, 2), yE(175, 2), yD(176, 0, 200), yF(180), yD(180, 0), yD(181, 0), yD(182, 0, 1023), yE(183, 2), yD(184, 0, 100), yE(185, 2)
	}, this.qr = function(eI, value) {
		this.data[eI].value = value
	}, this.yG = function(eI, value) {
		this.qr(eI, value);
		var value = String(value),
			fZ = value.length;
		5e4 < fZ ? console.log("storage value too large: index " + eI + " size " + fZ) : (bm.sd.save(eI, value), bm.sd.save(eI, String(this.data[eI].e3), !0))
	}, this.yH = function(eI) {
		return Number(this.data[eI].value)
	}, this.yI = function(eI) {
		return String(this.data[eI].value)
	}
}

function yA() {
	var yK = [];

	function yN(uX) {
		yK.unshift(uX), bm.qq.qr(161, yK.join(";"))
	}

	function f5(uX) {
		for (var yP = yK, fZ = yP.length, aC = 0; aC < fZ; aC++)
			if (yP[aC] === uX) return yP.splice(aC, 1), bm.qq.qr(161, yP.join(";")), 1
	}
	this.dk = function() {
		var s3 = bm.buffer.data[161].value;
		s3.length && (yK = s3.split(";"))
	}, this.get = function() {
		return yK
	}, this.yL = function() {
		return {
			oM: yK,
			value: 0
		}
	}, this.wj = function(uX) {
		return bD.sU.has(yK, uX)
	}, this.yM = function(uX) {
		return f5(uX) ? 0 : (yN(uX), 1)
	}, this.nH = function(uX) {
		f5(uX) && yN(uX)
	}, this.yO = function(eI) {
		eI < yK.length && (yK.splice(eI, 1), bm.qq.qr(161, yK.join(";")))
	}
}

function y5() {
	this.yQ = function(eI, e3) {
		return Number(this.yR(eI, e3))
	}, this.yR = function(eI, e3) {
		var g1 = null;
		return 0 === a1.id ? a1.yS && (g1 = a1.yS.getItem((e3 ? "v" : "d") + eI)) : 1 === a1.id ? g1 = a1.yT.loadString((e3 ? 1e3 : 2e3) + eI) : 2 === a1.id && (g1 = a1.yU[(e3 ? "v" : "d") + eI]), g1 && 0 !== g1.length ? g1 : null
	}, this.yV = function(fZ, yW) {
		var h = [],
			yX = yW ? "e" : "l";
		if (0 === a1.id) {
			if (a1.yS)
				for (aC = 0; aC < fZ; aC++) h.push(a1.yS.getItem(yX + aC))
		} else if (1 === a1.id)
			for (var yY = yW ? 5e3 : 3e3, aC = 0; aC < fZ; aC++) h.push(a1.yT.loadString(yY + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fZ; aC++) h.push(a1.yU[yX + aC]);
		return h
	}, this.save = function(eI, value, e3) {
		var yZ = (e3 ? "v" : "d") + eI;
		if (0 === a1.id) {
			if (a1.yS && bm.buffer.data[140].value) try {
				a1.yS.setItem(yZ, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.yT.saveString((e3 ? 1e3 : 2e3) + eI, value) : 2 === a1.id && (a1.yU[yZ] = value, a1.ya.postMessage(yZ + " " + value))
	}, this.yb = function(h, yW) {
		var fZ = h.length,
			yX = yW ? "e" : "l";
		if (0 === a1.id) {
			if (a1.yS && bm.buffer.data[140].value) try {
				for (aC = 0; aC < fZ; aC++) a1.yS.setItem(yX + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var yY = yW ? 5e3 : 3e3, aC = 0; aC < fZ; aC++) a1.yT.saveString(yY + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fZ; aC++) a1.yU[yX + aC] = h[aC], a1.ya.postMessage(yX + aC + " " + h[aC])
	}
}

function yB() {
	this.dk = function() {
		! function() {
			var data = bm.buffer.data;
			0 === data[2].e3 && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].yJ = 1);
			0 === data[100].e3 && (data[100].value = data[100].yJ = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.buffer.data,
			fZ = data.length;
		for (aC = 0; aC < fZ; aC++) {
			var ye = bm.sd.yQ(aC, !0);
			data[aC] && data[aC].e3 === ye && (null === (ye = bm.sd.yR(aC)) ? data[aC].value = data[aC].yJ : 2 === data[aC].type ? data[aC].value = ye : (ye = Number(ye), isNaN(ye) ? data[aC].value = data[aC].yJ : data[aC].value = ye))
		}
	}
}

function y8() {
	function yj(h) {
		if (0 === h.length) bm.qq.qr(116, "");
		else {
			for (var ym = h[0], aC = 1; aC < h.length; aC++) ym += ";" + h[aC];
			bm.qq.qr(116, ym)
		}
	}
	this.yg = function() {
		bm.buffer.data[110].value.length && (bm.buffer.data[106].value = bm.buffer.data[110].value, bm.qq.qr(110, ""), this.yh())
	}, this.yh = function() {
		var h = bm.buffer.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.buffer.data[106].value), h.unshift(bm.buffer.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var yi = [], aC = 0; aC < h.length; aC += 2) yi.push(h[aC]);
		yj(h), bm.buffer.data[117].value = 0, bm.buffer.data[117].oM = yi
	}, this.yk = function(eI) {
		bm.buffer.data[117].oM.splice(eI, 1), bm.buffer.data[117].value = Math.min(eI, bm.buffer.data[117].oM.length - 1);
		var h = bm.buffer.data[116].value.split(";");
		h.splice(2 * eI, 2), yj(h)
	}, this.yl = function(eI) {
		var h = bm.buffer.data[116].value.split(";");
		return h.length < 2 * (eI + 1) ? null : {
			uX: h[2 * eI],
			password: h[2 * eI + 1]
		}
	}, this.yn = function() {
		var g1 = bO.ij(bm.buffer.data[121].value, -1, 262143);
		return g1 = -1 === g1 ? ~~(262144 * Math.random()) : g1
	}, this.yC = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var yo, s3 = h[aC].trim();
			0 !== s3.length && (yo = 0 <= (yo = s3.indexOf("=")) ? s3.substring(0, yo) : s3, document.cookie = yo + "=;expires=0;path=/", document.cookie = yo + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = yo +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function y7() {
	this.qr = function(eI, value) {
		2 !== bm.buffer.data[eI].type && (value = Math.floor(value)), bm.buffer.data[eI].value !== value && (bm.buffer.yG(eI, value), 0 === eI ? (u.y(), bA.dk(), u.v(2)) : 1 === eI ? i.dv(1) : 2 === eI ? i.dv(0) : 5 === eI && (bD.sM.yp(), i.dv(
			0)))
	}, this.yq = function() {
		for (var data = bm.buffer.data, aC = 0; aC < 100; aC++) data[aC] && bm.buffer.yG(aC, data[aC].yJ);
		bD.sM.yp(), i.dv(1)
	}, this.yr = function() {
		for (var data = bm.buffer.data, aC = 0; aC < data.length; aC++) data[aC] && bm.buffer.qr(aC, data[aC].yJ)
	}, this.ys = function() {
		for (var ft = bm.buffer, aC = 128; aC < 135; aC++) ft.yG(aC, ft.data[aC].yJ)
	}, this.yt = function(data) {
		bm.qq.qr(109, data.uY), bm.qq.qr(107, data.yu), bm.qq.qr(108, data.yv), bm.qq.qr(112, data.yw), bm.qq.qr(111, data.yx), bm.qq.qr(113, data.yy), bm.qq.qr(135, data.yz), bm.qq.qr(136, data.z0), bm.qq.qr(137, data.z1), bm.qq.qr(138, data
			.z2), bm.qq.qr(139, data.z3), bm.qq.qr(141, data.z4), bm.qq.qr(142, data.z5), bm.qq.qr(143, data.z6), bm.qq.qr(144, data.z7)
	}
}

function c8() {
	this.f0 = new z8, this.z9 = new zA, this.zB = new zC, this.dk = function() {
		this.f0.dk()
	}
}

function zA() {
	this.zD = function(size) {
		for (var zE = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(zE.rU(16)));
		return h.join("")
	}, this.zF = function(s3) {
		return 20 < (s3 = s3.trim()).length ? s3.substring(0, 20) : s3
	}
}

function z8() {
	var zG = new Uint8Array(78);
	this.dk = function() {
		var aC;
		for (zG[50] = 37, aC = 0; aC < 10; aC++) zG[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) zG[aC + 20] = aC + 11, zG[aC + 52] = aC + 38
	}, this.zH = function(s3) {
		return s3 || (console.log("validateString error: " + s3), s3 = ""), s3.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.zI = function(s3, size) {
		if ((s3 = this.zH(s3)).length > size) return s3.substring(0, size);
		for (; s3.length < size;) s3 = "-" + s3;
		return s3
	}, this.zJ = function(s3) {
		for (var zK = zG, fZ = s3.length, h = new Uint8Array(fZ), aC = 0; aC < fZ; aC++) h[aC] = zK[s3.charCodeAt(aC) - 45];
		return h
	}, this.zL = function(zM) {
		bG.a8(6 * zM.length), this.zN(zM), bK.dk(bG.aD)
	}, this.zN = function(zM) {
		for (var fZ = zM.length, j = bG, aC = 0; aC < fZ; aC++) j.a9(6, zM[aC])
	}, this.zO = function(s3) {
		this.zN(this.zJ(s3))
	}, this.zP = function(s3, size) {
		this.zN(this.zJ(this.zI(s3, size)))
	}, this.f1 = function(s3, size) {
		for (var h = this.zJ(this.zI(s3, size)), g1 = 0, o7 = 1, aC = h.length - 1; 0 <= aC; aC--) g1 += o7 * h[aC], o7 *= 64;
		return g1
	}
}

function zQ() {
	var j, k, zR;

	function zq(i1, fc, zo, zW, zj) {
		fc = zp(i1, fc + 1 + 2 * zW & 3);
		! function(i1, lX) {
			return 1 < Math.abs(i1 % j - lX % j) || 1 < Math.abs(zt(i1) - zt(lX))
		}(i1, fc) && 0 === zj[fc << 2] && (zj[fc << 2] = zo)
	}

	function zt(h7) {
		return Math.floor((h7 + .5) / j) % k
	}

	function zp(h7, fc) {
		return h7 + zR[fc]
	}
	this.zS = function(s3) {
		var aC, zT, fZ, zU, zE = bK;
		for (bJ.f0.zL(bJ.f0.zJ(s3)), bV.wG.zX[bV.fF].j = bV.fk = j = zE.rU(12), bV.wG.zX[bV.fF].k = bV.fl = k = zE.rU(12), zR = [-j, -1, j, 1], bV.zg = document.createElement("canvas"), bV.zg.width = bV.fk, bV.zg.height = bV.fl, bV.zc = bV.zg
			.getContext("2d", {
				alpha: !1
			}), bV.zd = bV.zh = null, bV.zd = bV.zc.getImageData(0, 0, bV.fk, bV.fl), bV.zh = bV.zd.data, bD.sU.zi(bV.zh), fZ = zE.rU(12), zT = zE.rU(5), zU = zZ(j * k - 1), aC = 0; aC < fZ; aC++) ! function(lp, h7, zV, zW) {
			var aC, fc, zE = bK,
				zj = bV.zh,
				zk = h7,
				zl = h7,
				zm = 0,
				zn = 1 + zV,
				zo = 2 - zV;
			for (zj[h7 << 2] = zn, aC = 0; aC < lp; aC++) fc = zE.rU(2), h7 = zp(h7, fc), zj[h7 << 2] === zn ? zm % 2 == 1 && zq(zl, zm + 2 * zW + 3, zo, zW, zj) : zj[h7 << 2] = zn, zq(h7, fc, zo, zW, zj), zq(zl, fc, zo, zW, zj), zl = h7,
				zm = fc;
			zp(h7, 0) === zk ? (zq(h7, 0, zo, zW, zj), zq(zk, 0, zo, zW, zj)) : zp(h7, 1) === zk && (zq(h7, 0, zo, zW, zj), zq(zk, 2, zo, zW, zj));
			0 === lp && (zq(zk, 0, zo, zW, zj), zq(zk, 2, zo, zW, zj))
		}(zE.rU(zT), zE.rU(zU), 1 === zE.rU(1), 1 === zE.rU(1));
		var fg, fi, iR, zu, zv, zw, zj = bV.zh,
			zx = !0,
			zy = bV.wG.zX[bV.fF].zy,
			zz = bV.wG.zX[bV.fF].zz;
		for (fi = 0; fi < k; fi++)
			for (zu = !0, zv = zx, fg = zw = 0; fg < j; fg++) iR = 4 * fi * j + 4 * fg, zw <= fg && 0 < zj[iR] && (zv = 2 === zj[iR], zu) && (zu = !1, zv !== zx) ? (zx = zv, zw = fg + 1, fg = -1) : (zv ? (zj[iR] = zz[0], zj[1 + iR] = zz[1], zj[
				2 + iR] = zz[2]) : (zj[iR] = zy[0], zj[1 + iR] = zy[1], zj[2 + iR] = zy[2]), zj[3 + iR] = 255);
		bV.zc.putImageData(bV.zd, 0, 0), bV.ze = !0, bV.zf.dk(), bi.ds = !0
	}
}

function zC() {
	this.zS = function(a00) {
		for (var zE = bK, size = zE.rU(a00), a01 = 7 + 9 * zE.rU(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(zE.rU(a01)));
		return h.join("")
	}
}

function cD() {
	var u1, u2, a02, a03, a04, a05, a06, a07, a08, a09;

	function a0B() {
		var a0E = aE.a0E;
		for (a08 = a0E; a08 < aE.fW; a08++) a0A();
		for (a08 = aE.hx ? aE.ku : 0; a08 < a0E; a08++) {
			if (!a0F()) {
				for (var ft = aE.a0J = a08; ft < a0E; ft++) a08 = ft, a0A();
				return
			}
			a0I(a05 + u1 * a04 + bO.g0(a04, 2), a06 + u2 * a04 + bO.g0(a04, 2))
		}
	}

	function a0l(player) {
		for (var jS = ah.jS, jU = ah.jU, jT = ah.jT, jV = ah.jV, fi = jU[player]; fi <= jV[player]; fi++)
			for (var fg = jS[player]; fg <= jT[player]; fg++) {
				var fD = ad.a0m(fg, fi);
				ad.h9(fD) && (ad.k5(fD) ? ad.h4(fD, player) : ad.a0n(fD, player))
			}
	}

	function a0k(h, ur, us) {
		var ea = h[ur];
		h[ur] = h[us], h[us] = ea
	}

	function a0F() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (u1 = bO.g0(a02 * az.random(), az.value(100)), u2 = bO.g0(a03 * az.random(), az.value(100)), a0s()) return 1;
			return
		}() || function() {
			var iw, iz, fs, a0H, ft, a0G;
			for (iw = bO.g0(a02 * az.random(), az.value(100)), iz = bO.g0(a03 * az.random(), az.value(100)), fs = 40; 1 <= fs; fs--)
				for (a0H = a03 - fs; 0 <= a0H; a0H -= 40)
					for (u2 = (a0H + iz) % a03, ft = 40; 1 <= ft; ft--)
						for (a0G = a02 - ft; 0 <= a0G; a0G -= 40)
							if (u1 = (a0G + iw) % a02, a0s()) return 1;
			return
		}()
	}

	function a0s() {
		for (var h7, a0u, gap = bO.g0(a04 - a07, 2), a0v = a06 + u2 * a04 + gap, a0w = a05 + u1 * a04 + gap, a0t = a0v + a07 - 1; a0v <= a0t; a0t--)
			for (a0u = a0w + a07 - 1; a0w <= a0u; a0u--)
				if (h7 = ad.a0m(a0u, a0t), !ad.fU(h7) || ad.k5(h7)) return;
		return 1
	}

	function a0I(a0G, a0H) {
		a0A(), a0x(a0G - 2, a0H - 2)
	}

	function a0A() {
		ah.nU[a08] = 0, ah.hN[a08] = ah.a0i[a08] = 0, ah.h1[a08] = [], ah.hF[a08] = [], ah.hG[a08] = [], ah.fy[a08] = [], ah.jS[a08] = ah.jU[a08] = ah.jT[a08] = ah.jV[a08] = 0
	}

	function a0x(a0G, a0H) {
		var h7, aC, a0y, a0z;
		for (ah.nU[a08] = 1, ah.jS[a08] = a0G + 10, ah.jU[a08] = a0H + 10, ah.jV[a08] = ah.jT[a08] = 0, a0y = a0G; a0y < a0G + 4; a0y++)
			for (a0z = a0H; a0z < a0H + 4; a0z++)(a0G < a0y && a0y < a0G + 3 || a0H < a0z && a0z < a0H + 3) && (h7 = ad.a0m(a0y, a0z), ad.fU(h7)) && (ah.jS[a08] = Math.min(a0y, ah.jS[a08]), ah.jT[a08] = Math.max(a0y, ah.jT[a08]), ah.jU[a08] = Math
				.min(a0z, ah.jU[a08]), ah.jV[a08] = Math.max(a0z, ah.jV[a08]), a09[ah.hN[a08]] = h7, ah.hN[a08]++, ad.a0n(h7, a08));
		for (ah.a0i[a08] = ah.hN[a08], aC = ah.hN[a08] - 1; 0 <= aC; aC--) ad.a10(a09[aC], a08) ? (ad.h4(a09[aC], a08), ah.hF[a08].push(a09[aC])) : ad.a11(a09[aC]) ? (ad.h4(a09[aC], a08), ah.hG[a08].push(a09[aC])) : ad.a12(a09[aC]) && (ad.h4(a09[aC],
			a08), ah.fy[a08].push(a09[aC]))
	}
	this.dk = function() {
		if (a09 = new Array(12), a07 = 6, a04 = 10, a02 = bO.g0(bV.fk, a04), a03 = bO.g0(bV.fl, a04), a05 = bO.g0(bV.fk - a04 * a02, 2), a06 = bO.g0(bV.fl - a04 * a03, 2), aE.hx)
			for (var aC = 0; aC < aE.ku; aC++) a08 = aC, a0A(), ah.nU[a08] = 1;
		(0 === aE.data.spawningType ? a0B : 1 === aE.data.spawningType ? (a0B(), function() {
			var a0K = aE.a0L;
			aE.a0M || a0K++;
			if (!(a0K < 3)) {
				for (var data = aE.data, kA = (aE.hx ? aE.ku : 0) + data.teamPlayerCount[0], oD = aE.a0J, a0N = new Uint32Array(a0K), a0O = new Uint32Array(a0K), a0P = new Uint16Array(a0K), a0Q = new Uint16Array(a0K), fX = bj.fX, jS = ah
						.jS, jU = ah.jU, jT = ah.jT, jV = ah.jV, gE = bR.gE, gF = bR.gF, aC = kA; aC < oD; aC++) gE[aC] = jS[aC] + jT[aC] >> 1, gF[aC] = jU[aC] + jV[aC] >> 1;
				for (aC = kA; aC < oD; aC++) {
					var id = fX[aC];
					a0N[id] += gE[aC], a0O[id] += gF[aC]
				}
				var lH = bj.lH;
				for (aC = 1; aC < a0K; aC++) {
					var h2 = Math.max(data.teamPlayerCount[lH[aC]], 1);
					a0P[aC] = bO.g0(a0N[aC], h2), a0Q[aC] = bO.g0(a0O[aC], h2)
				}
				var a0R = bj.a0R,
					a0S = bj.a0S,
					a0T = bj.a0T,
					gD = bR.gD;
				for (aC = 0; aC < 512; aC++) gD[aC] = aC;
				for (var eH = 0; eH < 2 + (4 <= a0K); eH++)
					for (aC = kA; aC < oD; aC++) {
						for (var i1 = aC, a0U = gD[i1], a0V = 1, fp = bO.a0W(gE[a0U] - a0P[1], gF[a0U] - a0Q[1]), fs = 2; fs < a0K; fs++) {
							var a0X = bO.a0W(gE[a0U] - a0P[fs], gF[a0U] - a0Q[fs]);
							a0X < fp && (fp = a0X, a0V = fs)
						}
						var a0Y = fX[i1];
						if (a0V !== a0Y) {
							if (2 === eH && 4 <= a0K) {
								var a0Z = Math.max((a0V + 1) % a0K, 1),
									a0a = bO.a0W(gE[a0U] - a0P[a0Z], gF[a0U] - a0Q[a0Z]);
								for (fs = 1; fs < a0K; fs++) a0X = bO.a0W(gE[a0U] - a0P[fs], gF[a0U] - a0Q[fs]), fp < a0X && a0X < a0a && (a0a = a0X, a0Z = fs);
								a0Z !== a0Y && bO.a0W(a0P[a0Y] - a0P[a0Z], a0Q[a0Y] - a0Q[a0Z]) < bO.a0W(a0P[a0Y] - a0P[a0V], a0Q[a0Y] - a0Q[a0V]) && (a0V = a0Z)
							}
							var a0b = lH[a0V],
								a0c = a0S[a0b] + (aE.hx ? 0 : a0T[a0b]),
								lX = a0R[a0c],
								a0d = gD[lX],
								a0e = a0S[a0b + 1];
							fp = bO.a0W(gE[a0d] - a0P[a0Y], gF[a0d] - a0Q[a0Y]);
							for (var ej = a0c + 1; ej < a0e; ej++) {
								var a0f = a0R[ej],
									a0g = gD[a0f];
								(a0X = bO.a0W(gE[a0g] - a0P[a0Y], gF[a0g] - a0Q[a0Y])) < fp && (fp = a0X, lX = a0f)
							}
							lX < kA || oD <= lX || (a0d = gD[lX], a0N[a0Y] += gE[a0d] - gE[a0U], a0O[a0Y] += gF[a0d] - gF[a0U], a0N[a0V] += gE[a0U] - gE[a0d], a0O[a0V] += gF[a0U] - gF[a0d], h2 = data.teamPlayerCount[lH[a0Y]], a0P[a0Y] =
								bO.g0(a0N[a0Y], h2), a0Q[a0Y] = bO.g0(a0O[a0Y], h2), h2 = data.teamPlayerCount[a0b], a0P[a0V] = bO.g0(a0N[a0V], h2), a0Q[a0V] = bO.g0(a0O[a0V], h2), gD[i1] = a0d, gD[lX] = a0U)
						}
					}! function() {
						for (var gD = bR.gD, jS = ah.jS, jU = ah.jU, jT = ah.jT, jV = ah.jV, hN = ah.hN, a0i = ah.a0i, hF = ah.hF, hG = ah.hG, fy = ah.fy, aC = 0; aC < 512; aC++) {
							var a0j = gD[aC];
							if (a0j !== aC) {
								a0k(jS, aC, a0j), a0k(jU, aC, a0j), a0k(jT, aC, a0j), a0k(jV, aC, a0j), a0k(hN, aC, a0j), a0k(a0i, aC, a0j), a0k(hF, aC, a0j), a0k(hG, aC, a0j), a0k(fy, aC, a0j), a0l(aC), a0l(a0j), gD[aC] = aC;
								for (var k = a0j, h8 = gD[k]; h8 !== aC;) h8 = gD[k = h8];
								gD[k] = a0j
							}
						}
					}()
			}
		}) : function() {
			var a0E = aE.a0E;
			for (a08 = a0E; a08 < aE.fW; a08++) a0A();
			for (a08 = aE.hx ? aE.ku : 0; a08 < a0E; a08++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							a0G = spawningData[2 * a08] + 1,
							spawningData = spawningData[2 * a08 + 1] + 1;
						if (3 < a0G && a0G < bV.fk - 5 && 3 < spawningData && spawningData < bV.fl - 5 && ad.fU(ad.a0m(a0G, spawningData)) && function(a0G, a0H) {
								var h7, a0u, a0t;
								for (a0t = a0H; a0H - 6 < a0t; a0t--)
									for (a0u = a0G; a0G - 6 < a0u; a0u--)
										if (h7 = ad.a0m(a0u, a0t), ad.k5(h7)) return;
								return 1
							}(a0G + 3, spawningData + 3)) return a0I(a0G + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a0F()) {
						for (var ft = aE.a0J = a08; ft < a0E; ft++) a08 = ft, a0A();
						return
					}
					var a0G = a05 + u1 * a04 + bO.g0(a04, 2),
						a0H = a06 + u2 * a04 + bO.g0(a04, 2);
					a0I(a0G, a0H)
				}
		})(), bg.nQ[7] = ah.hN[aE.fJ]
	}, this.a13 = function(k3, a14, a15) {
		var aC, a0G, a0H, h7, u1, u2;
		for (a08 = k3, aC = 0; aC < 20; aC++)
			for (a0G = a14 + aC; a14 - aC <= a0G; a0G--)
				for (a0H = a15 + aC; a15 - aC <= a0H; a0H--)
					if ((a0G === a14 + aC || a0G === a14 - aC || a0H === a15 + aC || a0H === a15 - aC) && 3 < a0G && a0G < bV.fk - 5 && 3 < a0H && a0H < bV.fl - 5 && ad.fU(ad.a0m(a0G, a0H)) && function(a0G, a0H) {
							var h7, a0u, a0t;
							for (a0t = a0H; a0H - 6 < a0t; a0t--)
								for (a0u = a0G; a0G - 6 < a0u; a0u--)
									if (h7 = ad.a0m(a0u, a0t), ad.k5(h7) && !ad.a1B(a08, h7)) return;
							return 1
						}(a0G + 3, a0H + 3)) {
						if (0 < ah.hN[a08]) {
							for (u2 = u1 = h7 = void 0, u1 = ah.jT[a08]; u1 >= ah.jS[a08]; u1--)
								for (u2 = ah.jV[a08]; u2 >= ah.jU[a08]; u2--) h7 = 4 * (u2 * bV.fk + u1), ad.a18(a08, h7) && (ad.a19(h7), ah.hN[a08]--);
							a0A()
						}
						return a0x(a0G - 1, a0H - 1), !0
					} return !1
	}, this.a1A = function(k3) {
		a08 = k3, a0F() ? a0I(a05 + u1 * a04 + bO.g0(a04, 2), a06 + u2 * a04 + bO.g0(a04, 2)) : a0A()
	}
}

function a1C() {
	au.a1D(), xm.setTransform(im, 0, 0, im, 0, 0), xm.imageSmoothingEnabled = im < 3, xm.drawImage(bV.zg, aT.a1E(), aT.a1F()), bS.a1G.xl(), xm.drawImage(a1H, aT.a1E(), aT.a1F()), au.xl(), bQ.xl(), ag.xl(), (aE.ny ? (bk.xl(), bF) : (aO.xl(), aW.xl(),
		aS.xl(), bF.xl(), ax.xl(), aX.xl(), aT.xl(), aR.xl(), bk.xl(), aV.xl(), aQ.xl(), aN.xl(), aM.xl(), aY.xl(), bh.xl(), aw)).xl(), u.xl()
}

function a1I(ou, j, k) {
	ou.clearRect(0, 0, j, k), ou.fillStyle = bE.pL, ou.fillRect(0, 0, j, k)
}

function a1J(ou, j, k, a1K) {
	ou.fillStyle = bE.pO, ou.fillRect(0, 0, j, a1K), ou.fillRect(0, 0, a1K, k), ou.fillRect(j - a1K, 0, a1K, k), ou.fillRect(0, k - a1K, j, a1K)
}

function a1L(ou, fg, fi, iV, a1K, h7, a1M) {
	ou.fillStyle = bE.pO;
	var h7 = Math.floor(iV * h7),
		uf = (h7 += (h7 - a1K) % 2, Math.floor((h7 - a1K) / 2)),
		iV = Math.floor((iV - h7) / 2);
	ou.fillRect(fg + iV, fi + iV + uf, h7, a1K), a1M && ou.fillRect(fg + iV + uf, fi + iV, a1K, h7)
}

function a1O() {
	this.dk = function() {
		8 === aE.lC && aO.a1P()
	}, this.a1Q = function(a1R) {
		var elo = aE.data.elo,
			k9 = (elo[a1R] - elo[1 - a1R]) / 10,
			k9 = 8 / (1 + Math.pow(2, k9 / 32)),
			k9 = Math.floor(10 * k9 + .5),
			a1T = elo[a1R] + k9,
			a1U = this.a1V(a1T),
			elo = this.a1V(elo[1 - a1R] - k9),
			k9 = (0 === a1R ? aO.a1X(a1U, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.a1X(elo, a1U, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a1T * bO.sqrt(a1T) >> 8),
			elo = ((1 + aE.a1a) * k9 / 100).toFixed(2);
		a1R === aE.fJ ? aO.a1b(640, L(31, [elo]), 40, 0, bE.pO, bE.pL, -1, !1) : aO.a1b(640, L(32, [ah.a1c[a1R], elo]), 40, 0, bE.pO, bE.pL, -1, !1)
	}, this.a1V = function(elo) {
		return 16e3 === (elo = bO.ij(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cj() {
	this.tW = new a1d, this.zj = new a1e
}

function a1e() {
	this.iL = !1;
	this.a1i = [], this.a1j = 100;
	var nv, nw, gap, iV, a1f, a1h, a1k = 0,
		a1l = new Array(9),
		a1m = [],
		a1n = [],
		a1o = 0,
		a1p = 0,
		a1q = 0,
		a1r = 0;

	function a23() {
		a1l.sort(function(fs, ft) {
			return ft.kz - fs.kz
		});
		for (var s3 = "" + a1l[0].r5, aC = 1; aC < 9; aC++) s3 += "," + a1l[aC].r5;
		for (aC = 0; aC < 9; aC++) s3 += "," + a1l[aC].kz;
		bm.buffer.yG(120, s3)
	}
	this.dk = function() {
		for (var a1s = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a1s.length; aC++) {
			var color = 6 === a1s[aC] ? bE.po : bE.pM;
			this.a1i.push(bD.canvas.a1t(ac.get(3), a1s[aC], color))
		}
		for (aC = 0; aC < ak.tW.a1u; aC++) a1n.push(ak.tW.a1v - ak.tW.a1u + aC);
		for (aC = 0; aC < ak.tW.a1w; aC++) a1n.push(ak.tW.a1x + aC);
		var a1y = ak.tW.a1z(bN.a1y);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a1y.slice(), aC = 0; aC < a1y.length; aC++) a1n.push(a1y[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a1l[q] = {
						r5: isNaN(qcode) ? 1015 + q : qcode,
						kz: 0
					}
				} else {
					var aC, h = bm.buffer.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) a1l[aC] = {
							r5: 1015 + aC,
							kz: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var g1 = parseInt(h[aC]),
								ej = (g1 = 0 <= g1 && g1 < ak.tW.a1v ? g1 : 0, parseInt(h[aC + 9]));
							ej = 0 <= ej && ej < 1e3 ? ej : 0, a1l[aC] = {
								r5: g1,
								kz: ej
							}
						}
				}
		}()
	}, this.show = function(m9, mA, a24) {
		var aC;
		if (a1o = m9, a1p = mA, a1k = a24 || 0, this.iL = !0, a1m = [], 0 === a1k)
			for (aC = 0; aC < 9; aC++) a1m.push(a1l[aC].r5);
		else {
			var ft = 49 * a1k,
				a24 = ft - 49;
			for (a24 >= a1n.length && (a1k = 1, a24 = 0, ft = 49), aC = a24 = (ft = Math.min(ft, a1n.length)) - 49; aC < ft; aC++) a1m.push(a1n[aC])
		}
		a1m.push(1024);
		a24 = a1m.length, iV = Math.floor((a1.a2.ik() ? .075 : .0468) * i.il), gap = Math.floor(iV / 3), (a1q = 10 * (a1f = iV + gap)) > i.j && (a1q = i.j, gap = (a1f = a1q / 10) - (iV = 3 * a1f / 4)), a1h = bO.g0(a24, 10) + !!(a24 % 10), (a1r =
			a1h * a1f) > i.k && (a1r = i.k, gap = (a1f = a1r / a1h) - (iV = 3 * a1f / 4)), a24 = .5 * gap;
		nv = Math.min(Math.max(m9 - .5 * a1q + a24, a24), i.j - a1q + a24), nw = Math.min(Math.max(mA - .5 * a1r + a24, a24), i.k - a1r + a24)
	}, this.hm = function(m9, mA, player) {
		if (!this.iL) return !1;
		if (this.a26(m9, mA)) {
			m9 = bO.ij(bO.g0(m9 - nv + .5 * gap, a1f), 0, 9);
			if ((m9 += 10 * bO.ij(bO.g0(mA - nw + .5 * gap, a1f), 0, 9)) >= a1m.length) return aM.tX(), !0;
			mA = a1m[m9];
			if (1024 === mA) return this.show(a1o, a1p, a1k + 1), !0;
			! function(r5) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) a1l[aC].kz = Math.floor(.99 * a1l[aC].kz);
					for (aC = 0; aC < 9; aC++)
						if (r5 === a1l[aC].r5) return a1l[aC].kz = Math.min(a1l[aC].kz + 30, 999), a23();
					a1l.splice(5, 0, {
						r5: r5,
						kz: Math.max(a1l[4].kz, 30)
					}), a1l.pop(), a23()
				}
			}(mA), player === aE.fJ ? bB.hz.r4(mA) : bB.gv.rJ(mA, player)
		}
		return aM.tX(), !0
	}, this.a26 = function(m9, mA) {
		return !(m9 < nv - .5 * gap || mA < nw - .5 * gap || nv + a1q - .5 * gap <= m9 || nw + a1r - .5 * gap <= mA)
	}, this.xl = function() {
		xm.fillStyle = bE.pL, xm.fillRect(nv - .5 * gap, nw - .5 * gap, a1q, a1r);
		for (var iR = .5 * bf.a27, fZ = (xm.lineWidth = bf.a27, xm.strokeStyle = xm.fillStyle = bE.pO, xm.strokeRect(nv - .5 * gap + iR, nw - .5 * gap + iR, a1q - 2 * iR, a1r - 2 * iR), xm.imageSmoothingEnabled = !0, a1m.length), aC = 0; aC <
			fZ; aC++) this.a28(a1m[aC], xm, nv + aC % 10 * a1f, nw + bO.g0(aC, 10) * a1f, iV);
		xm.imageSmoothingEnabled = !1
	}, this.a28 = function(r5, ib, fg, fi, iV) {
		var fD;
		r5 >= 1024 - ak.tW.a1u ? (fD = iV / this.a1j, ib.setTransform(fD, 0, 0, fD, fg, fi), ib.drawImage(this.a1i[r5 - 1024 + ak.tW.a1u], 0, 0), ib.setTransform(1, 0, 0, 1, 0, 0)) : (bD.sM.textAlign(ib, 1), bD.sM.textBaseline(ib, 1), ib.font =
			bD.sM.u7(0, .89 * iV), ib.fillText(ak.tW.a29(r5), fg + .5 * iV, fi + (.35 - bD.sM.a2A + .56) * iV))
	}
}

function a1d() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a1u = 13, this.a1w = this.emojis.length, this.a1x = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a1x, this.a1v = 1024, this.a2B = this.emojis.indexOf(
		"💀"), this.a2C = this.a2B + 1, this.a2D = this.emojis.indexOf("🥇"), this.a2E = this.emojis.indexOf("😊"), this.a29 = function(g1) {
		return g1 < this.a1x ? String.fromCharCode(55356, 56806 + bO.g0(g1, 26), 55356, 56806 + g1 % 26) : this.emojis[Math.min(g1 - this.a1x, this.a1w - 1)]
	}, this.a1z = function(s3) {
		for (var fZ = s3.length - 2, h = [], aC = 0; aC < fZ; aC++) {
			var a2F = s3.charCodeAt(aC) - 56806,
				a2G = s3.charCodeAt(aC + 2) - 56806;
			0 <= a2F && a2F < 26 && 0 <= a2G && a2G < 26 && (h.push(26 * a2F + a2G), aC += 3)
		}
		return h
	}, this.a2H = function(g1) {
		return g1 < this.a1x
	}, this.a2I = function(g1) {
		return g1 >= 1024 - this.a1u
	}, this.a2J = function(g1) {
		return g1 >= this.a1x && g1 < this.a1x + this.a2C
	}
}

function c7() {
	this.f0 = new a2K, this.z9 = new a2L, this.zB = new a2M, this.dk = function() {
		this.f0.dk()
	}
}

function a2L() {
	this.zO = function(s3) {
		for (var fZ = s3.length, j = bG, aC = 0; aC < fZ; aC++) j.a9(16, s3.charCodeAt(aC))
	}
}

function a2K() {
	var a2N = new Uint8Array(64);
	this.dk = function() {
		var aC;
		for (a2N[0] = 45, a2N[37] = 95, aC = 0; aC < 10; aC++) a2N[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a2N[aC + 11] = 65 + aC, a2N[aC + 38] = 97 + aC
	}, this.uc = function(a2O) {
		for (var zE = bK, zM = new Uint8Array(a2O), aC = 0; aC < a2O; aC++) zM[aC] = zE.rU(6);
		return zM
	}, this.ub = function(zM) {
		for (var fZ = zM.length, a2P = a2N, h = [], aC = 0; aC < fZ; aC++) h.push(String.fromCharCode(a2P[zM[aC]]));
		return h.join("")
	}, this.a2Q = function(value, a2R) {
		for (var a2P = a2N, h = [], aC = 0; aC < a2R; aC++) h.push(String.fromCharCode(a2P[value >> 6 * (a2R - 1 - aC) & 63]));
		return h.join("")
	}
}

function cF() {
	var a2S, a2T, a2U;
	a2S = [32, 65, 191, 913, 931], a2T = [64, 127, 688, 930, 1155], a2U = new Array(a2S.length + 1);
	for (var aC = 0; aC < a2U.length; aC++) {
		a2U[aC] = 0;
		for (var fs = aC - 1; 0 <= fs; fs--) a2U[aC] += a2T[fs] - a2S[fs]
	}

	function a2a(ej) {
		for (var aC = a2S.length - 1; 0 <= aC; aC--)
			if (ej >= a2S[aC] && ej < a2T[aC]) return aC;
		return -1
	}
	this.zF = function(s3) {
		return 0 !== (s3 = s3.trim()).indexOf("Bot ") && 0 !== s3.indexOf("[Bot] ") && function(s3, a2X, a2Y) {
			var fZ = (s3 = s3.trim()).length;
			if (fZ < a2X || a2Y < fZ) return !1;
			for (var ej, a2Z = 0, aC = 0; aC < fZ; aC++)
				if (ej = s3.charCodeAt(aC), a2Z += 65 <= ej && ej <= 90 || 1040 <= ej && ej <= 1071 ? 1 : 0, -1 === a2a(ej)) return !1;
			if (3 < a2Z && a2Z > Math.floor(fZ / 2)) return !1;
			return !0
		}(s3, 3, 20)
	}, this.a2b = function(s3) {
		for (var fZ = (s3 = s3.trim()).length, h = [], aC = 0; aC < fZ; aC++) {
			var ej, h7 = a2a(ej = s3.charCodeAt(aC));
			h.push(a2U[h7] + ej - a2S[h7])
		}
		return h
	}, this.zS = function(h) {
		for (var ej, ft, s3 = "", fZ = h.length, aC = 0; aC < fZ; aC++)
			for (ft = 1; ft < a2U.length; ft++)
				if (h[aC] < a2U[ft]) {
					ej = a2S[ft - 1] + h[aC] - a2U[ft - 1], s3 += String.fromCharCode(ej);
					break
				} return s3
	}, this.a2c = function(s3) {
		for (var h = this.a2b(s3), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a2d = function(s3) {
		for (var h = new Array(Math.floor(s3.length / 3)), aC = 0; aC < s3.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(s3.substring(aC, aC + 3));
		return this.zS(h)
	}, this.a2e = function(s3) {
		for (var g1, h = [s3.length], aC = 0; aC < s3.length; aC++) h[aC] = s3.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < s3.length; aC++) aC === s3.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (g1 = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(g1 + (g1 < 26 ? 65 : 71)), aC++);
		return result
	}, this.a2f = function(s3) {
		for (var ej, result = "", aC = 0; aC < s3.length; aC++) 48 <= (ej = s3.charCodeAt(aC)) && ej < 58 ? result += String.fromCharCode(ej) : 65 <= ej && ej < 75 ? result += "0" + (ej - 65).toString() : 75 <= ej && ej < 91 ? result += (ej - 65)
			.toString() : 97 <= ej && ej < 123 && (result += (ej - 71).toString());
		return result
	}, this.a2g = function(s3) {
		for (var fZ = s3.length, h = [], aC = 0; aC < fZ; aC++)(ej = s3.charCodeAt(aC)) < 58 ? h.push(s3[aC]) : (ej -= ej < 91 ? 65 : 71, h.push(String(bO.g0(ej, 10))), h.push(String(ej - 10 * bO.g0(ej, 10))));
		var fZ = h.length - 2,
			ej = 0,
			zM = [];
		for (aC = 0; aC < fZ; aC += 3) zM[ej++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return zM
	}, this.a2h = function() {
		for (var eH, a2i = "", aC = 0; aC < 6; aC++) eH = 48 + az.random() % 36, eH += 58 <= eH ? 39 : 0, a2i += String.fromCharCode(eH);
		return a2i
	}
}

function a2M() {
	this.a2b = function(s3, a00, a2j) {
		for (var a2k = [], fZ = s3.length, max = 0, aC = 0; aC < fZ; aC++) {
			var g1 = s3.charCodeAt(aC);
			a2k.push(g1), max = Math.max(max, g1)
		}
		var a01 = max < 128 ? 7 : 16;
		for (a2j.a9(a00, fZ), a2j.a9(1, +(16 == a01)), aC = 0; aC < fZ; aC++) a2j.a9(a01, a2k[aC])
	}
}

function dG() {
	this.a2l = new a2m, this.result = new a2n, this.a2o = new a2p, this.a2q = new a2r, this.a2s = new a2t, this.a2u = new a2v, this.dk = function() {
		this.result.dk()
	}
}

function a2p() {
	this.a2w = function() {
		for (var fZ = am.lQ, w1 = am.lV, a2x = [], aC = 0; aC < fZ; aC++) {
			var h7 = w1[aC];
			bD.gv.a2y(h7) && a2x.push(h7)
		}
		return a2x
	}, this.a2z = function() {
		if (0 === bj.lH[aE.a30]) return this.a31();
		bk.kv(aE.a30);
		for (var a2x = [], fZ = bR.g4[0], gD = bR.gD, aC = 0; aC < fZ; aC++) {
			var h7 = gD[aC];
			bD.gv.a2y(h7) && a2x.push(h7)
		}
		return a2x
	}, this.a31 = function() {
		var h7 = mV[0];
		return bD.gv.a2y(h7) ? [h7] : []
	}, this.a32 = function(a2x) {
		for (var fZ = a2x.length, ea = 0, hN = ah.hN, aC = 0; aC < fZ; aC++) ea += hN[a2x[aC]];
		return ea
	}
}

function a2m() {
	function a34() {
		if (2 === aE.a38) return 1;
		ax.a39(), aE.a38 = 2, aE.a3A = aE.a3B
	}

	function a36() {
		bU.a2s.a3C(), aY.show(1 === aE.a3D, !1, 2 === aE.a3D), bU.result.a3C(), bU.a2u.ee(), bU.a2q.ee(), bU.a2q.a3E(), aO.a3F(!0), aO.a3G(247), aO.a3G(956), aO.a3G(957), aW.nG(!0), aX.nG(!0), ax.nG(), bF.a3H(), aE.hi && bi.a3I.a3J(), bi.ds = !0, be
			.a3K(), a1.a2.setState(0)
	}
	this.a33 = function() {
		a34() || (aE.a35 = 2, a36())
	}, this.a37 = function() {
		a34() || (aE.a35 = 1, a36())
	}
}

function a2r() {
	this.ee = function() {
		var a3S;
		2 === aE.a35 ? (aO.a3L(0, 59), aI.o4(2700)) : aE.lC < 7 ? (a3S = bj.lH[aE.a30], a3S = bj.a3U[a3S], aR.a3V(L(33, [a3S]), 2, 1, 12), aO.a1b(0, L(34, [a3S]), 40, 0, bE.pO, bE.pL, -1, !1), aI.o4(2700)) : 8 === aE.lC ? (aE.a3D ? aO.a3L(aE.a3Q,
			2) : aO.a3L(1 - aE.fJ, 3), aE.a3R.a1Q(aE.a3Q), aI.nq(aE.a3Q, 2700, !1, 0)) : 9 === aE.lC ? (aO.a3W(), aI.o4(2700)) : (aO.a3X(aE.a3Q), aI.nq(aE.a3Q, 2700, !1, 0))
	}, this.a3E = function() {
		var s3;
		aE.hi || aE.lE || (s3 = b1.z.a3Y(), aE.lC < 7 ? s3 += "/log/team" : 8 === aE.lC ? s3 += "/log/1v1" : 9 === aE.lC ? s3 += "/log/zombies" : s3 += "/log/br", aO.a1b(720, s3, 736, 0, bE.pO, bE.pm, -1, !1))
	}
}

function a2v() {
	function a3i() {
		var uv;
		return 8 === aE.lC ? 0 : (uv = Math.floor(ah.a3j[aE.fJ] / 50), (uv = Math.min(uv, 200)) / 100)
	}

	function a3a() {
		var uv = a3i();
		0 !== uv && aO.a1b(440, L(35, [uv.toFixed(2)]), 40, 0, bE.pg, bE.pL, -1, !1)
	}
	this.ee = function() {
		var a3b;
		0 === bU.result.a3Z || 0 === bU.result.a2x.length || 8 === aE.lC ? bD.gv.hl(aE.fJ) && a3a() : (function(a3b) {
			7 !== aE.lC && 10 !== aE.lC && 9 !== aE.lC || 0 !== aE.a3D && a3b && (9 === aE.lC ? aO.a1b(600, L(39, [100 * (1 + aE.a1a)]), 40, 0, bE.pO, bE.pL, -1, !1) : aO.a1b(600, L(39, [a3b.toFixed(2)]), 40, 0, bE.pO, bE.pL, -1, !1))
		}(a3b = function() {
			aO.a1b(520, L(36), 40, 0, bE.pO, bE.pL, -1, !1);
			for (var a2x = bU.result.a2x, fZ = a2x.length, hN = ah.hN, h = [], aC = 0; aC < fZ; aC++) {
				var h7 = a2x[aC];
				h.push({
					h7: h7,
					ea: hN[h7]
				})
			}
			h.sort((fs, ft) => ft.ea - fs.ea);
			var a3U = ah.a1c,
				ea = bU.result.a3k,
				uv = bU.result.a3Z,
				s3 = "",
				a3b = 0;
			for (aC = 0; aC < fZ; aC++) {
				var iJ = h[aC].ea * uv / (100 * ea),
					a3m = a3U[h[aC].h7] + ": " + iJ.toFixed(2) + "   ";
				h[aC].h7 === aE.fJ && (a3b = iJ, 9 === aE.lC) && 0 !== aC && (a3b = 0), 2 < aC && 4 !== fZ ? 3 === aC && (s3 += "(" + L(37, [fZ - 3]) + ")") : s3 += a3m
			}
			aO.a1b(560, bD.tK.a3n(s3), 40, 0, bE.pg, bE.pL, -1, !1), a3b ? aO.a1b(580, L(38, [a3b.toFixed(2) + " + " + a3i().toFixed(2)]), 40, 0, bE.pg, bE.pL, -1, !1) : bD.gv.hl(aE.fJ) && a3a();
			return a3b
		}()), 2 === aE.a35 || 7 <= aE.lC || function(a3b) {
			var a2x = bU.result.a2x,
				fZ = a2x.length,
				a3o = ah.a3o,
				hN = ah.hN,
				a3p = [];
			loop: for (var aC = 0; aC < fZ; aC++) {
				var h7 = a2x[aC],
					a3q = bD.tK.a3r(a3o[h7]);
				if (null !== a3q) {
					for (var a3s = hN[h7], ft = a3p.length - 1; 0 <= ft; ft--)
						if (a3q === a3p[ft].name) {
							a3p[ft].ea += a3s, a3p[ft].h.push({
								h7: h7,
								ea: a3s
							});
							continue loop
						} a3p.push({
						name: a3q,
						ea: a3s,
						h: [{
							h7: h7,
							ea: a3s
						}]
					})
				}
			}
			if (0 !== a3p.length) {
				a3p.sort((fs, ft) => ft.ea - fs.ea);
				var h = a3p[0].h,
					a3t = (h.sort((fs, ft) => ft.ea - fs.ea), "[" + a3p[0].name + "]"),
					a3u = 512 * bU.result.a3Z / 26214400,
					lp = (aO.a1b(0, L(40, [a3t, a3u.toFixed(4)]), 40, 0, bE.pO, bE.pL, -1, !1), h.length),
					zK = a3p[0].ea,
					a3v = 1e4 * a3u;
				for (aC = 0; aC < lp; aC++)
					if (h[aC].h7 === aE.fJ) {
						aO.a1b(600, L(41, [(a3v * h[aC].ea / (10 * zK)).toFixed(2)]), 40, 0, bE.pO, bE.pL, -1, !1), aO.a1b(640, L(42, [(.2 * a3b).toFixed(2), a3t]), 40, 0, bE.pO, bE.pL, -1, !1);
						break
					}
			}
		}(a3b))
	}, this.a3f = function() {
		var a3g, zk;
		aE.lE || (a3g = ah, zk = aE.fJ, 0 === a3g.a3h[zk]) || a3g.jy[zk] < 1 || 2 * a3g.rl[zk] > 3 * (a3g.jx[zk] + a3g.jy[zk]) || a3a()
	}
}

function a2n() {
	this.dk = function() {
		this.a3w = 0, this.a2x = [], this.a3k = 0, this.a3Z = 0
	}, this.a3C = function() {
		var ts;
		aE.lE || (ts = this, 2 === aE.a35 ? ts.a2x = bU.a2o.a2w() : aE.iT ? ts.a2x = bU.a2o.a2z() : ts.a2x = bU.a2o.a31(), ts.a3w = bl.a3y.a3z(), ts.a3k = Math.max(1, bU.a2o.a32(ts.a2x)), bB.gv.rS(), 8 === aE.lC ? bU.result.a3Z = 0 : ts.a3Z =
			100 * bU.result.a3w * (1 + aE.a1a))
	}
}

function a2t() {
	this.a3C = function() {
		if (2 === aE.a35) aE.a3D = 2;
		else {
			if (8 === aE.lC) bD.gv.kH(0) || 0 === ah.nU[0] ? aE.a3Q = 1 : bD.gv.kH(1) || 0 === ah.nU[1] ? aE.a3Q = 0 : aE.a3Q = +(ah.hN[1] > ah.hN[0]);
			else {
				if (aE.iT) {
					var lS = bk.a42();
					if (aE.a30 = lS, bj.lH[lS]) return void(aE.a3D = +(bj.fX[aE.fJ] === lS))
				}
				aE.a3Q = mV[0]
			}
			aE.a3D = +(aE.a3Q === aE.fJ)
		}
	}
}

function dL() {
	this.id = 0, this.e3 = 0, this.yS = null, this.yT = null, this.yU = null, this.ya = null, this.a2 = new a43, this.dk = function() {
		var self, e3;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (e3 = Android.getVersion()) < 12 || (self.e3 = e3, self.id = 1, self.yT = Android),
			function(self) {
				var e3;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.yU = mwIOSdataX, self.ya = window.webkit.messageHandlers.iosCommandA, e3 = self
					.yU.version, self.e3 = e3 ? Number(e3) : 0)
			}(this),
			function(self) {
				var yS;
				try {
					if (!(yS = window.localStorage)) return;
					yS.setItem("tls7", "1"), yS.removeItem("tls7")
				} catch (error) {
					return
				}
				self.yS = yS
			}(this)
	}
}

function a43() {
	this.a47 = function() {
		bm.qq.yq(), bm.qq.yr(), b1.z.close(0, 3255), 0 === a1.id ? a1.yS && a1.yS.clear() : 1 === a1.id ? a1.yT.saveString(199, "") : 2 === a1.id && a1.ya.postMessage("clear")
	}, this.a48 = function() {
		2 === a1.id ? a1.ya.postMessage("showConsentForm") : 1 === a1.id && a1.yT.setState(7)
	}, this.a49 = function() {
		this.setState(14)
	}, this.ik = function() {
		return 1 === bm.buffer.yH(2)
	}, this.a4A = function() {
		bm.buffer.yG(102, "")
	}, this.setState = function(a4B) {
		1 === a1.id && 5 <= a1.e3 && a1.yT.setState(a4B)
	}, this.a3 = function() {
		var a4C;
		1 === a1.id && 7 <= a1.e3 ? a1.yT.setState(5) : 2 === a1.id ? a1.ya.postMessage("reload 0") : ((a4C = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a4C.toString())
	}, this.eV = function() {
		0 !== a1.id && (1 === a1.id ? a1.yT.prepareAd("8646194357") : 2 === a1.id && (0 === a1.e3 ? a1.ya.postMessage("prepare ad 2904813909") : a1.ya.postMessage("loadAds 2904813909")))
	}, this.eb = function(ea) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.e3 && (a1.yT.presentAd(ea), !0) : 2 === a1.id && 0 !== a1.e3 && (a1.ya.postMessage("showAd"), !0))
	}, this.du = function() {
		2 === a1.id && a1.e3 < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a4D + "' target='_blank'>" + bN
			.a4D + "</a>", !0, [new x("⬅️ " + L(43), function() {
				u.v(0)
			}, bE.q5)]))
	}
}

function da() {
	function a4F(e) {
		mE(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(43), function() {
				u.a4G()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.pl)]))
	}

	function a4S(e) {
		mE(e), u.v(4, 5, new w(L(44), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a4N(e), !0))
	}

	function a4N(e) {
		var s3 = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + s3 : 4527 === e ? "Player already in lobby" + s3 : 4577 === e ? "Your IP is banned." + s3 : 4530 === e ? "Lobby Timeout" + s3 : 4528 === e ?
			"Lobby Kick: Another login detected." + s3 : 4540 === e ? "You have been kicked." + s3 : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + s3 : 4555 === e ? "This Account is blocked." + s3 :
			4580 === e ? "More Gold needed" + s3 : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + s3 : 4591 === e ? "The algo determined you are a bot." + s3 : "Unknown error" + s3
	}

	function mE(e) {
		a4I(e), u.z.a0()
	}

	function a4I(e) {
		4540 === e && b1.z.a4U(e);
		var a4B = ab.a4H();
		bw.close(), 6 === a4B ? b1.z.a4U(e) : bq.f6 ? (u.y(), bq.wr(), b1.z.close(b1.z.f7, 3256)) : 8 === a4B && aE.a4V(!0)
	}
	this.q = [], this.a4E = function(oN, e) {
		if (1 === oN && __fx.customLobby.isActive() && 6 !== ab.a4H() && __fx.customLobby.setActive(!1), console.log("socket close index " + oN + " error " + e), this.q.push(e), 4321 === e && (data = bm.z.yl(0)) && (console.log("Reset to: " +
				data.uX), bm.qq.qr(105, data.uX), bm.qq.qr(106, data.password)), 8 === u.uZ && 0 === oN)
			if (4211 === e) a4F(e);
			else {
				if (bq.f6 && (4495 === e || 4480 === e) && b1.z.f7 !== oN) return void u.a4G();
				if (8 !== ab.a4H() && a4I(), 4480 === e) return bm.qq.ys(), void u.v(4, 0, new w(L(46), L(47), !0));
				var data = 0;
				u.a4L() && 10 === u.a4L().a4M && (data = u.a4L().a4M), u.v(4, data, new w(L(44), a4N(e), !0))
			}
		else {
			data = ab.a4H();
			if (6 === data) {
				if (4211 === e) return void a4F(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a4O(oN)
			} else if (bq.f6) {
				if (oN !== b1.z.f7) return
			} else {
				if (8 === data) return void(oN !== b1.z.a4P || aE.lE || 1 !== aE.a38 || aE.hi || aO.a4Q(L(45, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}(4591 === e ? function(e) {
				mE(e), u.v(4, 5, new w("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new x("⬅️ " + L(43), function() {
					u.a4G()
				}), new x("🔄 Reload", function() {
					a1.a2.a3()
				}, bE.pl)]))
			} : a4S)(e)
		}
	}, this.a4T = function(e) {
		this.q.push(e), 8 === ab.a4H() ? aE.lE || 1 !== aE.a38 || aO.a4Q(L(45, [e])) : a4S(e)
	}, this.t = function() {
		this.q.push(3268), mE(3268)
	}
}

function dA() {
	var a4W, a4X, a4Y = -15e3,
		a4Z = !1;

	function hm(e) {
		a4t() || (a4Z = !0, a4u(e, 1), b1.z.a4v(b1.z.a4P), a4w(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a4i(e) {
		a4Y = bi.eZ, a4u(e, 1), b1.z.a4v(b1.z.a4P), 0 < e.touches.length && (a4W = Math.floor(i.l * e.touches[0].clientX), a4X = Math.floor(i.l * e.touches[0].clientY), av.a4i(e) || a4w(a4W, a4X))
	}

	function a4w(fg, fi) {
		u.hm(fg, fi), 0 === aE.a38 ? ab.hm(fg, fi) : bF.a4x(fg, fi) || bh.hm(fg, fi) || aY.hm(fg, fi) || aM.a4y(fg, fi) || aQ.hm(fg, fi) || 0 <= aN.hm(fg, fi) || ax.hm(fg, fi) || bM.a4z(fg, fi) || aM.a50(fg, fi)
	}

	function a4e(e) {
		a4t() || (a4Z = !0, a4u(e, 1), a51(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a4j(e) {
		a4Y = bi.eZ, a4u(e, 1), 0 < e.touches.length && (a4W = Math.floor(i.l * e.touches[0].clientX), a4X = Math.floor(i.l * e.touches[0].clientY), av.a4j(e) || a51(a4W, a4X))
	}

	function a51(fg, fi) {
		bM.so() || (bM.he = fg, bM.hf = fi), u.a4e(fg, fi), 0 === aE.a38 ? ab.a4e(fg, fi) : (bW.hg(fg, fi), bh.a4e(fg, fi) || (aN.a4e(fg, fi), aM.iL() ? aM.a4e(fg, fi) : aS.hn ? aS.a4e(fg) && (bi.ds = !0) : (aW.a4e(fg, fi), aT.o0 && aT.a4e(fg, fi) &&
			(bi.ds = !0))))
	}

	function a4g(e) {
		a4t() || (a4u(e, 1), a52(), 0 === aE.a38 ? (ab.click(-1024, -1024), aU.reset()) : (aW.a53(-1024, -1024), aN.a4e(-1024, -1024), aS.a54(), aT.o0 = !1))
	}

	function a4f(e) {
		a4t() || (a4u(e, 1), a55(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a4c && (bM.a4c = !1, e.preventDefault()))
	}

	function click(e) {
		a4t() || a4u(e, 1)
	}

	function a4k(e) {
		a4Y = bi.eZ, a4u(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a38 ? aT.o0 = !1 : av.a56() || (a55(a4W, a4X, !1), bM.a4c && (bM.a4c = !1, e.preventDefault()))
	}

	function a4l(e) {
		a4Y = bi.eZ, a4u(e, 1), a55(a4W, a4X, !1), bM.a4c && (bM.a4c = !1, e.preventDefault())
	}

	function a4m(e) {}

	function a4n(e) {}

	function a4o(e) {
		a4t() || a4u(e, 0)
	}

	function a55(fg, fi, a57) {
		a52(), 0 === aE.a38 ? ab.click(fg, fi) : (aW.a53(fg, fi), bh.a53(), aS.a54(), aT.o0 = !1, aM.click(fg, fi, a57) ? bi.ds = !0 : aN.a4f(fg, fi))
	}

	function a52() {
		u.a52()
	}

	function a4h(e) {
		var fg, fi, deltaY;
		a4t() || (a4u(e, 1), b1.z.a4v(b1.z.a4P), fg = Math.floor(i.l * e.clientX), fi = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a4h(fg, fi, deltaY), 0 === aE.a38 ? ab.a4h(fg, fi, deltaY) : aW.a4h(fg, fi,
			deltaY) || (aS.a58(fg, fi) ? aS.a4h(deltaY) && (bi.ds = !0) : aT.a4h(fg, fi, deltaY)))
	}

	function a4p(e) {
		a4u(e, 0)
	}

	function a4u(e, id) {
		0 === id && u.iL() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a4H() && e.preventDefault()
	}

	function a4q(e) {
		if (__fx.keybindHandler(e.key)) return;
		a4t() || 0 < i.uF || (e = e.code) && e.length && (ba.ej(e, 18) ? at.a5A(3) : ba.ej(e, 22) ? at.a5A(0) : ba.ej(e, 20) ? at.a5A(1) : ba.ej(e, 24) ? at.a5A(2) : ba.ej(e, 10) ? aS.a5B(31 / 32) : ba.ej(e, 8) ? aS.a5B(32 / 31) : ba.ej(e, 6) ? aS
			.a5B(7 / 8) : ba.ej(e, 4) ? aS.a5B(8 / 7) : ba.ej(e, 14) ? 0 !== aE.a38 && aT.a4h(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.ej(e, 16) ? 0 !== aE.a38 && aT.a4h(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.ej(e, 0) ?
			aE.a38 && bW.hh(0) : ba.ej(e, 2) ? aE.a38 && bW.hh(1) : ba.ej(e, 30) ? aE.a38 && bW.hh(2) : ba.ej(e, 26) ? aE.a38 && bW.iF() : ba.ej(e, 28) && aE.a38 && bW.iK())
	}

	function a4r(e) {
		if (!a4t() && !(0 < i.uF || bi.eZ < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a5C(1) || "Space" === code && u.a5C(0))) return bq.f6 ? bq.wx.a5C(code) ? void 0 : void("Escape" === code && bM.g2()) : void(8 !== ab.a4H() && ab.a5C(e) ? bi.ds = !0 : "Escape" === code ?
				bM.g2() : ba.ej(code, 18) ? at.a5D(3) : ba.ej(code, 22) ? at.a5D(0) : ba.ej(code, 20) ? at.a5D(1) : ba.ej(code, 24) ? at.a5D(2) : ba.ej(code, 12) ? bF.a5E(!aE.ny) : "Space" === code && aE.a38 && (aN.hj && aN.a5F(), aE.hi) &&
				bF.a5G(!1))
		}
	}

	function a4s() {
		"hidden" !== document.visibilityState && (bi.ds = !0)
	}

	function a4t() {
		return a4Y + 15e3 > bi.eZ
	}

	function resize() {
		i.a5I()
	}
	this.a4a = 0, this.a4b = "", this.a4c = !1, this.he = 0, this.hf = 0, this.dk = function() {
		a4d.addEventListener("mousedown", hm, {
			passive: !1
		}), a4d.addEventListener("mousemove", a4e, {
			passive: !1
		}), a4d.addEventListener("mouseup", a4f, {
			passive: !1
		}), a4d.addEventListener("click", click, {
			passive: !1
		}), a4d.addEventListener("mouseleave", a4g, {
			passive: !1
		}), a4d.addEventListener("wheel", a4h, {
			passive: !1
		}), a4d.addEventListener("touchstart", a4i, {
			passive: !1
		}), a4d.addEventListener("touchmove", a4j, {
			passive: !1
		}), a4d.addEventListener("touchend", a4k, {
			passive: !1
		}), a4d.addEventListener("touchcancel", a4l, {
			passive: !1
		}), a4d.addEventListener("dragover", a4m), a4d.addEventListener("drop", a4n), a4d.addEventListener("dblclick", a4o), document.addEventListener("contextmenu", a4p), document.addEventListener("keydown", a4q), document.addEventListener(
			"keyup", a4r), document.addEventListener("visibilitychange", a4s), window.addEventListener("resize", resize)
	}, this.a4z = function(fg, fi) {
		return !!bF.hm(fg, fi) || !!(aW.hm(fg, fi) || aT.hm(fg, fi) || aS.hm(fg, fi) || aO.hm(fg, fi))
	}, this.a5H = a4t, this.so = function() {
		return !a4Z || 0 < a4Y
	}, this.g2 = function() {
		if (!u.iL()) return 8 === ab.a4H() ? aE.ny ? void bF.a5E(!1) : bh.iL ? void bh.a5F() : void aN.a5F() : void(7 !== ab.a4H() && 6 === ab.a4H() && aa.a5J());
		u.a5C(2)
	}
}

function c3() {
	this.sM = new a5K, this.sU = new a5L, this.gv = new a5M, this.tK = new a5N, this.ou = new a5O, this.or = new a5P, this.canvas = new a5Q, this.color = new a5R, this.a5S = new a5T, this.dk = function() {
		this.sM.yp()
	}
}

function a5L() {
	this.zi = function(h) {
		h.fill(0)
	}, this.a5U = function(h) {
		for (var fZ = h.length, aC = 0; aC < fZ; aC++) h[aC] = []
	}, this.a5V = function(a2F, a5W) {
		for (var a2G = bR.g9, aC = 0; aC < 3; aC++) a2G[aC] = a5W * a2F[aC];
		return a2G
	}, this.a5X = function(a2F, a2G, a5Y) {
		for (var k9 = 0, aC = 0; aC < 3; aC++) k9 += Math.abs(a2F[aC] - a2G[aC]);
		return a5Y <= k9
	}, this.a5Z = function(a2F, a5a) {
		for (var aC = 0; aC < 3; aC++) a2F[aC] = bO.ij(a2F[aC] + a5a, 0, 255);
		return a2F
	}, this.a5b = function(h, ur, us) {
		us = us || h.length - 1;
		for (var a5c = 0, aC = ur = ur || 0; aC <= us; aC++) a5c += h[aC];
		return a5c
	}, this.a5d = function(h, a5e) {
		for (var aC, a5f, fZ = h.length, a5g = [], fs = fZ - 1; 0 <= fs; fs--) {
			for (aC = a5f = 0; aC < fZ; aC++) a5e(h[aC]) < a5e(h[a5f]) && (a5f = aC);
			fZ--, a5g.push(h[a5f]), h[a5f] = h[fZ], h.pop()
		}
		return a5g
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
	}, this.a5h = function(h, g1) {
		for (var fZ = h.length, h2 = 0, aC = 0; aC < fZ; aC++) h2 += h[aC] > g1;
		return h2
	}, this.a5i = function(a5j, a5k, min) {
		for (var fZ = a5k[0], aC = fZ - 1; 0 <= aC; aC--) a5j[aC] < min && (a5j[aC] = a5j[--fZ]);
		a5k[0] = fZ
	}, this.a5l = function(h, fZ, value) {
		for (var aC = 0; aC < fZ; aC++) h[aC] -= value
	}, this.a5m = function(h) {
		for (var fZ = h.length, aC = 0; aC < fZ; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a5n = function(s3, h, a5o) {
		h.fill(0);
		for (var uv = s3.split(","), fZ = Math.min(uv.length, h.length), aC = 0; aC < fZ; aC++) h[aC] = Math.min(parseInt(uv[aC]), a5o)
	}, this.a5p = function(s3, h, tH) {
		h.fill("");
		for (var uv = s3.split('"'), fZ = Math.min(uv.length, 2 * h.length), iR = 0, aC = 1; aC < fZ; aC += 2) h[iR++] = uv[aC].slice(0, tH)
	}, this.a5q = function(h, h2) {
		if (0 === h2) h.fill(0);
		else {
			var a5c = this.a5b(h),
				fZ = h.length;
			if (0 === a5c) h.fill(bO.g0(h2, fZ));
			else
				for (var aC = 0; aC < fZ; aC++) h[aC] = bO.g0(h2 * h[aC], a5c);
			if (0 === (a5c = this.a5b(h))) h[1] = h2;
			else
				for (var iR = 0; a5c++ < h2;) h[iR = (iR + 1) % fZ] && h[iR]++
		}
	}, this.a5r = function(h) {
		if (!h) return 0;
		var fZ = h.length;
		if (0 === fZ) return 0;
		for (var g1 = h[fZ - 1], aC = fZ - 2; 0 <= aC; aC--)
			if (h[aC] !== g1) return aC + 2;
		return 1
	}, this.a5s = function(h) {
		for (var a5c = 0, aC = 0; aC < h.length; aC++) a5c += h[aC].length;
		return a5c
	}, this.a5t = function(a5u) {
		for (var h = [], aC = 0; aC < a5u.length; aC++) h = h.concat(a5u[aC]);
		return h
	}, this.has = function(h, g1) {
		for (var fZ = h.length, aC = 0; aC < fZ; aC++)
			if (h[aC] === g1) return !0;
		return !1
	}
}

function a5Q() {
	this.a1t = function(a5v, eI, a5w) {
		var iV = a5v.height,
			a5x = bD.sM.zY(iV, iV),
			ib = bD.sM.getContext(a5x);
		return function(j, ib, a5w) {
			ib.fillStyle = a5w, ib.beginPath(), ib.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), ib.fill()
		}(iV, ib, a5w), ib.drawImage(a5v, -eI * iV, 0), a5x
	}, this.a5z = function(a60) {
		var ib, iY, iV = a60.height;
		return a60.width === iV && (iY = (ib = bD.sM.getContext(a60, !0)).getImageData(0, 0, iV, iV), bD.or.a61(iY.data, iV, iV, .9), ib.putImageData(iY, 0, 0)), a60
	}
}

function a5R() {
	this.a62 = function(g1) {
		return [g1 >> 12 & 63, g1 >> 6 & 63, 63 & g1]
	}, this.a63 = function(g1) {
		for (var h = this.a62(g1), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a64 = function(g1) {
		g1 = this.a63(g1);
		return bD.color.pG(g1[0], g1[1], g1[2])
	}, this.a65 = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.pG = function(eH, uv, ft) {
		return "rgb(" + eH + "," + uv + "," + ft + ")"
	}, this.pI = function(eH, uv, ft, fs) {
		return "rgba(" + eH + "," + uv + "," + ft + "," + fs.toFixed(3) + ")"
	}, this.sq = function(ej) {
		for (var h = ej.split("(")[1].split(","), g8 = bR.g8, aC = 0; aC < 3; aC++) g8[aC] = parseInt(h[aC]);
		return 4 === h.length ? g8[3] = 255 * parseFloat(h[3].slice(0, -1)) : g8[3] = 255, g8
	}, this.sr = function(a66, fc) {
		for (var h = a66.slice(a66.indexOf("(") + 1, a66.indexOf(")")).split(","), g8 = bR.g8, aC = 0; aC < 3; aC++) g8[aC] = bO.ij(parseInt(h[aC].trim(), 10) + fc, 0, 255);
		return 3 === h.length ? this.pG(g8[0], g8[1], g8[2]) : (a66 = parseFloat(h[3].trim()), this.pI(g8[0], g8[1], g8[2], a66 = 0 === a66 ? .3 : a66))
	}, this.xR = function(a67, a68) {
		for (var k9 = 0, aC = 0; aC < 3; aC++) k9 += Math.abs(a68[aC] - a67[aC]);
		if (!(240 <= k9))
			for (aC = 0; aC < 3; aC++) a68[aC] = a67[aC] + (a67[aC] < 128 ? 80 : -80)
	}, this.a69 = function(h) {
		for (var s3 = "#", aC = 0; aC < 3; aC++) {
			var eH = h[aC].toString(16);
			s3 += 1 === eH.length ? "0" + eH : eH
		}
		return s3
	}, this.a6A = function(s3) {
		var eH, uv;
		return s3.length < 7 ? bE.pF : (eH = parseInt(s3.slice(1, 3), 16), uv = parseInt(s3.slice(3, 5), 16), s3 = parseInt(s3.slice(5, 7), 16), this.pG(eH, uv, s3))
	}
}

function a5O() {
	this.a6B = function(s3, font, maxWidth) {
		if (font && (xm.font = font), xm.measureText(s3).width <= maxWidth) return s3;
		for (var aC = s3.length - 1; 1 <= aC; aC--)
			if (s3 = s3.substring(0, aC), xm.measureText(s3 + "...").width <= maxWidth) return s3 + "...";
		return "..."
	}
}

function a5T() {
	var a6D = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a6E = function(eZ) {
		var a6G, s3 = new Date(eZ.getTime() - 6e4 * eZ.getTimezoneOffset()).toUTCString();
		return s3.length < 12 || (s3 = s3.substring(5, s3.length), 0 === (eZ = eZ.getTimezoneOffset())) ? s3 : (a6G = (eZ < 0 ? "+" : "-") + bO.g0(Math.abs(eZ), 60), 0 == (eZ = Math.abs(eZ) % 60) ? s3 + a6G : s3 + a6G + ":" + (eZ < 10 ? "0" :
			"") + eZ)
	}, this.a6H = function(eZ) {
		var s3 = eZ.toUTCString();
		return s3.length < 12 ? s3 : function(eZ) {
			return a6D[eZ.getUTCDay()]
		}(eZ) + ", " + s3.substring(5, s3.length - 4)
	}
}

function a5K() {
	var a6J = null;
	this.a2A = 0, this.yp = function() {
		var g1 = bm.buffer.data[5].value;
		a6J = "px " + g1, "system-ui" !== g1 && (a6J += ", system-ui"), this.a2A = iU(32, 32, ["a", "b", "m"], 200, a6J)
	}, this.zY = function(j, k) {
		var ej = document.createElement("canvas");
		return ej.width = j, ej.height = k, ej
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(ou, j, k) {
		return ou.getImageData(0, 0, j, k)
	}, this.u7 = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a6J : 1 === type ? "bold " + size + a6J : 2 === type ? "lighter " + size + a6J : 3 === type ? "italic " + size + a6J : 4 === type ? "oblique " + size + a6J : 5 === type ? "small-caps " +
			size + a6J : "small-caps bold " + size + a6J
	}, this.textAlign = function(ib, id) {
		ib.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(ib, id) {
		ib.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.sW = function(e, code, color) {
		e.classList.toggle("fx-line", !color), e.classList.toggle("fx-box", !code || 5 === code);
		color = this.sV(bf.u9) + " solid " + (color || bE.pO);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.ux = function(e, fg, fi, j, k) {
		e = e.style;
		e.left = this.uy(fg), e.top = this.uy(fi), e.width = this.uy(j), e.height = this.uy(k)
	}, this.sN = function(g1) {
		return 1 + g1 * a1.a2.ik()
	}, this.tZ = function(o7, h8) {
		return o7 * this.sN(void 0 === h8 ? .5 : h8) * i.il / i.l
	}, this.uw = function(o7, h8) {
		return o7 * this.sN(void 0 === h8 ? .5 : h8) * i.il
	}, this.ud = function(o7, h8, a6K) {
		return this.sN(h8) * Math.min(o7 * i.il, a6K * i.j) / i.l
	}, this.sV = function(g1) {
		return g1.toFixed(1) + "px"
	}, this.uy = function(g1) {
		return this.xD(g1).toFixed(1) + "px"
	}, this.xD = function(g1) {
		return g1 / i.l
	}, this.a6M = function(a6N) {
		for (var s3 = "<ul>", fZ = a6N.length, aC = 0; aC < fZ; aC++) s3 += "<li>" + a6N[aC][0] + ": <a href='" + a6N[aC][1] + "' target='_blank'>" + a6N[aC][0] + "</a></li>";
		return s3 += "</ul>"
	}, this.a6O = function(a6P) {
		return "<a href='" + a6P + "' target='_blank'>" + a6P + "</a>"
	}, this.a6Q = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.xP = function(e) {
		var ea = e.textContent;
		bD.tK.a6R(ea, "✔") || (1 === ea.length ? e.textContent = "✔" : e.textContent = ea + " ✔", setTimeout(function() {
			e.textContent = ea
		}, 500))
	}, this.measureText = function(s3) {
		return xm.measureText(s3).width
	}, this.un = function(oj) {
		oj.style.overflowX = "auto", oj.style.overflowY = "hidden", oj.style.whiteSpace = "nowrap", oj.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.v0 = this.scrollLeft, e.preventDefault())
		}), oj.addEventListener("scroll", function() {
			this.v0 = this.scrollLeft
		})
	}
}

function a5M() {
	this.hk = function(a4B) {
		return 0 === a4B ? 1 === aE.a38 && aE.hx : 1 === a4B ? 1 === aE.a38 && !aE.hx : 2 === aE.a38
	}, this.hl = function(player) {
		return 0 !== ah.nU[player] && 2 !== ah.a6S[player]
	}, this.a6T = function(player) {
		return player === aE.fJ && 2 !== ah.a6S[player]
	}, this.lY = function(player, k3) {
		return player !== k3 && (0 === bj.fX[player] || bj.fX[player] !== bj.fX[k3])
	}, this.mf = function() {
		return am.lQ < 2 ? 0 : aE.iT ? 1 < bk.a6U() : ah.hN[mV[1]]
	}, this.a6V = function() {
		var lQ = am.lQ;
		if (0 !== lQ) {
			if (!aE.iT) return !this.kH(mV[0]);
			for (var fX = bj.fX, lS = bk.lT(), lV = am.lV, aC = lQ - 1; 0 <= aC; aC--) {
				var h7 = lV[aC];
				if (fX[h7] === lS && !this.kH(h7)) return 1
			}
		}
		return 0
	}, this.a6W = function(player) {
		return player === aE.fJ
	}, this.a6X = function(k3, o7) {
		return ah.hb[aE.fJ] < o7 * ah.hb[k3]
	}, this.kH = function(player) {
		return player >= aE.ku || 2 === ah.a6S[player]
	}, this.ls = function(player) {
		return 0 !== ah.nU[player]
	}, this.a2y = function(player) {
		return player < aE.ku
	}, this.rj = function(a6Y, a6Z) {
		return a6Y !== a6Z
	}, this.gy = function(player, g1) {
		var min;
		return g1 = this.a6a(player, g1), ah.hb[player] += g1, ah.a6b[player] && (min = Math.min(ah.a6b[player], ah.hb[player]), ah.a6b[player] -= min, ah.hb[player] -= min), g1
	}, this.a6a = function(player, g1) {
		var a6c = ah.hb[player];
		return g1 = Math.min(g1, ah.hN[player] * aE.a6d - a6c), g1 = Math.min(g1, aE.a6e - a6c), Math.max(g1, 0)
	}, this.n2 = function(player, jC, a6f, a6g) {
		var a6c = ah.hb[player],
			jC = bO.g0(a6c * (jC + 1), 1024),
			a6f = bO.g0(a6f * a6c, 1024),
			jC = Math.min(jC, a6c - a6f);
		return jC = b5.a6i(player, jC), bR.g6[0] = jC, bR.g6[1] = a6f, a6g <= jC
	}, this.rD = function(player, qv, qu) {
		var player = ah.hb[player],
			a6h = bO.g0(64 * player, 1024);
		return qv = Math.min(qv, player - a6h), qv = this.a6a(qu, qv), bR.g6[0] = qv, bR.g6[1] = a6h, 1 <= qv
	}, this.a6j = function(player, qv, qu) {
		var player = ah.hb[player],
			a6h = bO.g0(64 * player, 1024);
		return qv = Math.min(qv, player - a6h), this.a6a(qu, qv)
	}, this.rF = function(qv, qu) {
		return qv = this.a6a(qu, qv), bR.g6[0] = qv, bR.g6[1] = 0, 1 <= qv
	}, this.jB = function(player, a6k) {
		return bO.g0(ah.hb[player] * (a6k + 1), 1024)
	}, this.a6l = function(player, a6f) {
		a6f = bO.g0(a6f * ah.hb[player], 1024);
		bR.g6[1] = a6f, ah.hb[player] -= a6f
	}, this.gw = function(player, a6m) {
		var gK, gM, ft = ah.hb[player];
		return a6m <= ft ? ah.hb[player] -= a6m : (ah.hb[player] = 0, gM = ah.a6b[player] + (gK = 5 * ((ft = a6m - ft) >> 2)), bg.gz(player, gK - ft, 12), gM <= aE.a6n ? ah.a6b[player] = gM : (ah.a6b[player] = aE.a6n, bg.gz(player, gM - aE.a6n,
			18))), a6m
	}, this.m6 = function(player, jC) {
		var hb = ah.hb,
			a6c = hb[player],
			jC = bO.g0(a6c * (jC + 1), 1024),
			a6h = Math.max(bO.g0(a6c, 10), 1e3);
		return (jC = Math.min(jC, a6c - a6h)) < 0 ? (hb[player] = 0, a6h = Math.min(1e3, a6c + aE.a6n - ah.a6b[player]), bR.g6[1] = a6h, ah.a6b[player] += a6h - a6c, 0) : (bR.g6[1] = a6h, jC = b5.a6i(player, jC), hb[player] -= a6h + jC, b5.a6o(
			player, jC), jC)
	}, this.n4 = function(player) {
		var iI = bR.g6[0];
		ah.hb[player] -= iI + bR.g6[1], b5.a6o(player, iI)
	}, this.rk = function(player, k3) {
		return (k3 = Math.min(k3, aE.fW)) < aE.fW && 0 === ah.nU[k3] && (k3 = aE.fW), (bR.fV[0] = k3) === aE.fW || bv.fS(player, k3)
	}, this.rn = function(player, qu) {
		return 0 !== ah.nU[qu] && !bv.fS(player, qu)
	}, this.a6p = function(player, a6q) {
		for (var h7, fZ = am.lQ, a6r = 0, a6s = mV, aC = 0; aC < fZ; aC++)
			if (h7 = a6s[aC], !this.kH(h7)) {
				if (player === h7) return !0;
				if (++a6r > a6q) return !1
			} return !1
	}, this.mR = function(h7) {
		var a6t = aE.iT ? bk.lR() : ah.hN[mV[0]];
		return a6t >= bO.g0(h7 * aE.ke, 100)
	}, this.a6u = function(g1, min, max) {
		return Math.floor(bO.ij(isNaN(g1) ? 0 : Number(g1), min, max))
	}
}

function a5P() {
	this.a6v = function(canvas, a6w, a6x) {
		var j = canvas.width,
			k = canvas.height,
			ej = bD.sM.zY(j, k),
			ib = bD.sM.getContext(ej, !0),
			canvas = (ib.drawImage(canvas, 0, 0), ib.getImageData(0, 0, j, k));
		return a6w(canvas.data, j, k, a6x), ib.putImageData(canvas, 0, 0), ej
	}, this.a6y = function(zj, j, k) {
		for (var fg = j - 1; 0 <= fg; fg--)
			for (var fi = k - 1; 0 <= fi; fi--) {
				var aC = 4 * (fg + fi * j);
				zj[3 + aC] = zj[aC], zj[aC] = zj[1 + aC] = zj[2 + aC] = 255
			}
	}, this.a6z = function(zj, j, k) {
		for (var fg = j - 1; 0 <= fg; fg--)
			for (var fi = k - 1; 0 <= fi; fi--) {
				var aC = 4 * (fg + fi * j);
				zj[1 + aC] > zj[2 + aC] + 10 && (zj[3 + aC] = zj[aC], zj[1 + aC] = zj[2 + aC])
			}
	}, this.a70 = function(zj, j, k) {
		for (var fg = j - 1; 0 <= fg; fg--)
			for (var fi = k - 1; 0 <= fi; fi--) {
				var fs, g1, aC = 4 * (fg + fi * j);
				zj[1 + aC] > zj[2 + aC] + 10 && (g1 = 0 < (fs = 255 - zj[1 + aC] + zj[2 + aC]) ? Math.min(255, Math.round(255 * zj[2 + aC] / fs)) : 0, zj[aC] = zj[1 + aC] = zj[2 + aC] = g1, zj[3 + aC] = fs)
			}
	}, this.a71 = function(zj, j, k, a6x) {
		for (var gap = Math.floor(Math.min(j, k) * a6x), fg = 0; fg < j; fg++)
			for (var aC, fi = 0; fi < k; fi++)(fg < gap || fi < gap || j - gap <= fg || k - gap <= fi) && (zj[3 + (aC = 4 * (fg + fi * j))] = 255 - 255 * (zj[1 + aC] - zj[aC]) / (255 - zj[aC]))
	}, this.a72 = function(zj, j, k, a6x) {
		for (var fg = j - 1; 0 <= fg; fg--)
			for (var fi = k - 1; 0 <= fi; fi--) {
				var aC = 4 * (fg + fi * j);
				zj[aC] = a6x[0], zj[1 + aC] = a6x[1], zj[2 + aC] = a6x[2]
			}
	}, this.a73 = function(zj, j, k, a6x) {
		for (var gap = Math.floor(j * a6x), fg = 0; fg < j; fg++)
			for (var aC, fi = 0; fi < k; fi++)(fg < gap || fi < gap || j - gap <= fg || k - gap <= fi) && (zj[aC = 4 * (fg + fi * j)] = zj[1 + aC] = zj[2 + aC] = 0)
	}, this.a74 = function(zj, j, k) {
		for (var fi, aC, fg = j - 1; 0 <= fg; fg--)
			for (fi = k - 1; 0 <= fi; fi--) 200 < zj[1 + (aC = 4 * (fg + fi * j))] && zj[1 + aC] - 20 > zj[aC] && zj[1 + aC] - 20 > zj[2 + aC] ? zj[aC] + zj[2 + aC] < 40 ? zj[3 + aC] = 0 : (zj[3 + aC] = zj[aC], zj[aC] = 255, zj[1 + aC] = 255, zj[
				2 + aC] = 255) : zj[aC] < 50 && zj[1 + aC] < 50 && zj[2 + aC] < 50 && (zj[aC] + zj[1 + aC] + zj[2 + aC] < 50 ? zj[3 + aC] = 180 : zj[3 + aC] = 180 + Math.floor(75 * (zj[aC] + zj[1 + aC] + zj[2 + aC] - 50) / 100))
	}, this.a75 = function(zj, j, k) {
		for (var fi, aC, fg = j - 1; 0 <= fg; fg--)
			for (fi = k - 1; 0 <= fi; fi--) zj[1 + (aC = 4 * (fg + fi * j))] > zj[aC] + 20 && zj[1 + aC] > zj[2 + aC] + 20 && zj[aC] + zj[2] < 40 && (zj[3 + aC] = 255 - zj[1 + aC], zj[aC] = zj[1 + aC] = zj[2 + aC] = zj[aC])
	}, this.a61 = function(zj, j, k, a6x) {
		for (var eH = j >> 1, fg = 0; fg < j; fg++)
			for (var fi = 0; fi < k; fi++) Math.sqrt((fg - eH) * (fg - eH) + (fi - eH) * (fi - eH)) > a6x * eH && (zj[4 * (fg + fi * j) + 3] = 0)
	}
}

function a5N() {
	var a76 = {
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
		a77 = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.tL = function(el) {
		return el.replace(a77, function(match) {
			return a76[match] || match
		})
	}, this.a2Q = function(g1) {
		var aC, a78, a79, a7A, a7B;
		if (g1 < 0) return "-" + this.a2Q(Math.abs(g1));
		if (g1 < 1e3) return g1.toString();
		for (a78 = Math.floor(Math.log(g1 + .5) / Math.log(10)) + 1, a79 = Math.floor((a78 - 1) / 3), a7B = (a7A = g1.toString()).substring(a78 - 3, a78), aC = 1; aC < a79; aC++) a7B = a7A.substring(a78 - 3 * (aC + 1), a78 - 3 * aC) + " " + a7B;
		return a7A.substring(0, a78 - 3 * a79) + " " + a7B
	}, this.a7C = function(h7, a78) {
		return h7.toFixed(a78) + "%"
	}, this.a7D = function(g1, a7E) {
		return g1.toFixed(bO.ij(Math.floor((void 0 === a7E ? 3 : a7E) - Math.log10(Math.max(g1, 1))), 0, 8))
	}, this.a7F = function(g1, o7, a78) {
		return (g1 * o7).toFixed(a78)
	}, this.a3r = function(username) {
		var fd, fO = username.indexOf("[");
		return !(fO < 0) && 1 < (fd = username.indexOf("]")) - fO && fd - fO <= 8 ? username.substring(fO + 1, fd).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a3r;
	this.a7G = function(s3) {
		for (var fs = Math.floor(.5 * s3.length + .5), oD = Math.floor(.5 * (fs - 1)), aC = 0; aC < oD; aC++)
			for (var ft = -1; ft < 2; ft += 2) {
				var ej = fs + ft * aC;
				if (" " === s3[ej]) return [this.a3n(s3.substring(0, ej)), this.a7H(s3.substring(ej))]
			}
		return [s3.substring(0, fs), s3.substring(fs)]
	}, this.a7H = function(s3) {
		for (var fZ = s3.length, aC = 0; aC < fZ; aC++)
			if (" " !== s3[aC]) return s3.substring(aC);
		return s3
	}, this.a3n = function(s3) {
		for (var aC = s3.length - 1; 0 <= aC; aC--)
			if (" " !== s3[aC]) return s3.substring(0, aC + 1);
		return s3
	}, this.a7I = function(s3, a7J) {
		return s3.split("(")[0] + "(🧈 " + a7J.toFixed(2) + ")"
	}, this.startsWith = function(s3, a7K) {
		return s3.substring(0, a7K.length) === a7K
	}, this.a6R = function(s3, a7K) {
		var fZ = s3.length;
		return s3.substring(fZ - a7K.length, fZ) === a7K
	}, this.a7L = function(h, a7M, a7N) {
		var s3 = "",
			fZ = h.length - 1;
		a7N = a7N || "";
		for (var aC = 0; aC < fZ; aC++) s3 += a7N + h[aC] + a7N + ",", (aC + 1) % a7M == 0 && (s3 += "\n");
		return s3 += a7N + h[fZ] + a7N
	}, this.a7O = function(s3, a2F, a2G) {
		return s3.replace(new RegExp(a2F, "g"), a2G)
	}
}

function a7P() {
	this.ei = function(player, fL) {
		aJ.a13(player, bP.fh(fL), bP.fj(fL)) && (bi.ds = !0), aE.lE && this.ee()
	}, this.ee = function() {
		aE.hx = !1;
		for (var aC = 0; aC < aE.ku; aC++) 0 !== ah.nU[aC] && 0 === ah.hN[aC] && aJ.a1A(aC);
		0 !== ah.nU[aE.fJ] ? (bg.nQ[7] = ah.hN[aE.fJ], bg.nQ[8] = ah.hb[aE.fJ], aS.a7Q(), aX.a7R(), aE.hi || aI.np(ah.jS[aE.fJ] - 5, ah.jU[aE.fJ] - 5, ah.jT[aE.fJ] + 5, ah.jV[aE.fJ] + 5), aw.dk()) : aY.show(!1, !1, !1, !0), aO.a7S(18), ag.a7T(),
			ag.nG(!0), bS.z.a7U(), aM.tX(), aE.ri = null, be.a7V = !0, be.a7W(), aE.lE && a1.a2.setState(1)
	}
}

function c5() {
	this.fW = 512, this.a6e = 15e8, this.a7X = 1e9, this.a6n = 5e4, this.a7Y = 512, this.gt = 2, this.fJ = 0, this.ku = 0, this.a3B = 0, this.lG = 0, this.a3A = 0, this.a0E = 512, this.a0J = 512, this.a6d = 150, this.lE = !0, this.hi = 0, this.a38 =
		0, this.ke = 0, this.ny = !1, this.hx = 0, this.a7Z = 0, this.iT = !1, this.a0L = 0, this.a0M = 0, this.lC = 0, this.a1a = 0, this.ri = null, this.a3R = new a1O, this.a7a = 30, this.a35 = 0, this.a3D = 0, this.a3Q = 0, this.a30 = 0, this
		.data = new a7b, this.a7c = new a7d, this.a7e = 0, this.a7f = "", this.a7g = function() {
			bX.turnstile.close(), bR.dk(), bU.dk(), bt.clear(), this.a3B = this.ku = this.data.humanCount, this.lE = 1 === this.a3B && !__fx.customLobby.isActive(), this.ny = !1, this.hi = this.data.isReplay, this.lC = 0 === this.data.gameMode ? [7,
					10, 8
				][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a1a = this.data.isContest, this.iT = this.lC < 7 || 9 === this.lC, this.lC = 10 === this.lC && this.lE ? 7 : this.lC, this.lC = 8 === this
				.lC && 2 !== this.ku ? 7 : this.lC, b0.dk(), this.a0L = this.data.numberTeams, this.data.teamPlayerCount ? this.a0M = +(0 < this.data.teamPlayerCount[0]) : (this.a0M = 0, this.iT && this.lE && (this.data.teamPlayerCount =
					new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.a0L + 1), aE.a7c.a7h())), this.a7a = this.ku <= 2 ? 30 : this.ku <= 50 ? 40 : 50, this.a7Z = this.hx = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo
				.spawnSelection : this.data.selectableSpawn, this.ri = this.hx ? new a7P : null, this.a0E = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.ku) : 1 === m.dw ? this.a0E =
				this.ku : this.a0E = this.data.playerCount,
				this.a0J = this.a0E, this.lG = this.a0E - this.ku, this.a3A = 0, this.fJ = this.data.selectedPlayer, this.a35 = 0, this.a3D = 0, this.a3Q = 0, this.a30 = 0, az.a7i(this.data.spawningSeed), af.dk(), ah.dk(), ao.dk(), aj.a7j(), bB.qk
				.rW = [], bB.hz.qn = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.dk(), this.a38 = 1, bg.dk(), a7k(), ad.dl(), aq.a7l(), be.dk(), ad.dk(), au.dk(),
				bP.dk(), bQ.dk(), ap.dk(), bY.a7m(), aF.dk(), aj.a8(), aJ.dk(), aK.dk(), am.a7n(), bC.dk(), bk.dk(), bS.dk(), bh.dk(), a7o.putImageData(a7p, 0, 0), aW.dk(), aT.dk(), aS.dk(), bF.dk(), ax.dk(), aV.dk(), aX.dk(), aN.dk(), aR.dk(), aO
				.dk(), aQ.dk(), aM.dk(), aY.dk(), aG.dk(), aH.dk(), gc(), ae.dk(), ag.dk(), b5.dk(), b6.dk(), b2.dk(), b8.dk(), b9.dk(), this.a3R.dk(), bi.a7m(), aI.no(), 0 === ah.nU[aE.fJ] && aY.show(!1, !0), ag.nG(!0), aw.dk(), bi.ds = !0, this
				.hi || this.lE && this.hx || a1.a2.setState(1), this.a7e = 0
		}, this.a4V = function(eY) {
			bC.rg.a7r.length ? this.a7f = bC.rg.a7r : this.a7f = bC.a7s.a2b(), __fx.replayHistory.save(this.a7f), !1 === __fx.customLobby.isActive() && b1.z.a7t(), bt.clear(), this.a38 = 0, bi.a7u(), a1.a2.setState(0), ab.setState(0), __fx
				.customLobby.isActive() || bX.eQ.show(eY), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a7e ? u.z.a7v(0) : 1 === this.a7e ? u.v(19) : u.v(5, 5)
		}, this.a7w = function() {
			return this.hi ? aN.hj || !bF.a7x : this.lE && (aN.hj || this.hx)
		}, this.a7y = function() {
			return 1 === this.a38 && !this.hx
		}
}

function a7b() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a7z = null
}

function a7d() {
	this.a7h = function() {
		var a80 = aE.data;
		bD.sU.a5q(a80.teamPlayerCount, a80.playerCount), a80.numberTeams = bD.sU.a5h(a80.teamPlayerCount, 0), a80.teamPlayerCount[0] && a80.teamPlayerCount[7] && (a80.teamPlayerCount[7] = 0, this.a7h())
	}, this.a81 = function() {
		var a80 = aE.data;
		a80.mapType < 2 ? bV.a8(bV.a82(a80), a80.mapSeed) : bV.a83(a80.canvas)
	}, this.a84 = function() {
		var a80 = aE.data;
		a80.colorsData || (a80.colorsData = new Uint32Array(1)), 0 === a80.gameMode && (a80.colorsData[0] = bm.z.yn()), a80.selectableName && (a80.playerNamesData || (a80.playerNamesData = new Array(1)), a80.playerNamesData[0] = bm.buffer.data[
			122].value), a80.a7z = new Uint32Array(1), a80.a7z[0] = bJ.f0.f1(bm.buffer.data[105].value, 5)
	}, this.a85 = function() {
		aE.data = new a7b
	}
}

function df() {
	var a86 = [];
	this.rG = function(player, qu, a87, a88) {
		player === aE.fJ || qu === aE.fJ || !a88 && bD.gv.kH(player) || bD.gv.kH(qu) || this.a1b(ah.a1c[player] + " supported " + ah.a1c[qu] + " with " + bD.tK.a2Q(a87) + " ressource" + (1 === a87 ? "." : "s."))
	}, this.a1b = function(s3, r5) {
		s3 = {
			eZ: aX.a8A(),
			s3: s3,
			r5: r5
		};
		a86.push(s3), 30 === u.uZ && u.a4L().a1b(s3)
	}, this.clear = function() {
		a86 = [];
		var uv = u.a8B(30);
		uv && uv.clear()
	}, this.a8C = function() {
		return a86
	}
}

function dZ() {
	this.a27 = 0, this.gap = 0, this.u9 = 0, this.sS = 0, this.dk = function() {
		this.resize()
	}, this.resize = function() {
		this.a27 = .0022 * bD.sM.sN(.5) * i.il, this.u9 = this.a27 / i.l, this.gap = Math.max(Math.floor((a1.a2.ik() ? .0114 : .01296) * i.il), 2), this.sS = this.gap / i.l
	}
}

function dY() {
	this.a8D = function() {
		return a1.a2.ik() ? 2 : 1
	}
}

function cG() {
	var oy, fg, fi, a8E, a8F, a8G, eZ, a8H, a8I, a8J, a8K, gap, zoom, rP, a8L;

	function a8Z(m9, mA, fD) {
		ad.fU(fD) || -1 === (m9 = bQ.lj.a8i(m9, mA)) ? aO.a8h(fD) : aO.a8j(m9)
	}

	function a8V(a8H) {
		for (var aC = rP.length - 1; 0 <= aC; aC--)
			if (rP[aC] === a8H) return 1
	}

	function a8T(a8Q) {
		var aC, fZ;
		if (-1 !== a8Q)
			for (fZ = oy.length, aC = 0; aC < fZ; aC++)
				if (oy[aC].iL && oy[aC].fg + 1 === a8Q % 4 && oy[aC].fi + 1 === a8Q >> 2) return aC;
		return -1
	}

	function a8R(m9, mA) {
		var uv = gap / 2;
		return m9 < fg - a8E - 3 * uv || fg + 3 * a8E + 5 * uv < m9 || mA < fi - a8E - 3 * uv || fi + 2 * a8E + 3 * uv < mA ? -1 : 4 * (mA < fi - uv ? 0 : mA < fi + a8E + uv ? 1 : 2) + (m9 < fg - uv ? 0 : m9 < fg + a8E + uv ? 1 : m9 < fg + 2 * a8E +
			3 * uv ? 2 : 3)
	}
	this.a8M = function() {
		var aC, ft, a8P = [bE.po, bE.q4, bE.pM, bE.qR, bE.qH];
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
			for (ft = 0; ft < oy[aC].colors.length; ft++) oy[aC].canvas.push(function(id, a5w) {
				if (id < 20) return bD.canvas.a1t(ac.get(3), id, a5w);
				var a5w = ac.get(3).height,
					a5x = bD.sM.zY(a5w, a5w),
					ib = bD.sM.getContext(a5x);
				20 === id ? ib.drawImage(ac.get(18), 0, 0) : 21 === id && ak.zj.a28(ak.tW.a1x + ak.tW.a2E, ib, 0, 0, a5w);
				return a5x
			}(oy[aC].id, a8P[oy[aC].colors[ft]]))
	}, this.a8O = function() {
		return oy
	}, this.dk = function() {
		rP = [], fg = fi = eZ = 0, a8F = a8G = -1e3, this.resize()
	}, this.resize = function() {
		a8E = Math.floor((a1.a2.ik() ? .075 : .0468) * i.il), zoom = a8E / ac.get(3).height, gap = Math.floor(a8E / 3)
	}, this.a4y = function(m9, mA) {
		return !!this.iL() && (bi.ds = !0, !!ak.zj.hm(m9, mA, a8I) || (m9 = function(m9, mA) {
			a8G = a8F = -1e3;
			var a8S = a8T(a8R(m9, mA));
			if (-1 === a8S) return 0;
			if (1 !== oy[a8S].colors[oy[a8S].lr])
				if (5 === a8S) {
					if (! function() {
							var ea = performance.now();
							a8L + 4e3 < ea && (rP = []);
							a8L = ea
						}(), a8V(a8H)) return 1;
					rP.push(a8H), 16 < rP.length && rP.shift()
				} else if (6 === a8S) {
				for (var aC = rP.length - 1; 0 <= aC; aC--) 0 === ah.nU[rP[aC]] && rP.splice(aC, 1);
				0 < rP.length && (b6.a8W(1, rP, !0) && bB.gv.rO(rP, a8H), rP = [])
			} else if (2 === a8S) ao.iD(a8H) && bB.hz.qt(aS.i3(), a8H);
			else if (3 === a8S) aE.hx && bB.hz.i0(a8J);
			else if (0 === a8S)
				if (0 === oy[0].lr) {
					if (aE.a7Z && aX.a8A() < 350) return 1;
					bY.a8X(4), bB.hz.i6(aS.i3(), a8H)
				} else b2.i7(a8H, aS.i3());
			else if (1 === a8S) bB.hz.iB(aS.i3(), a8J);
			else if (9 === a8S) bB.hz.iE(aS.i3());
			else {
				if (7 === a8S) return bY.a8X(0), ak.zj.show(m9, mA), 2;
				if (4 === a8S) b6.a8W(0, [a8H], !0) && bB.gv.rL(a8H);
				else {
					if (8 !== a8S) return 0;
					bB.hz.i2(aS.i3(), a8K, a8H)
				}
			}
			return 1
		}(m9, mA), this.tX(), 2 === m9 && (ak.zj.iL = !0), 0 < m9))
	}, this.a50 = function(m9, mA) {
		this.iL() || (a8F = m9, a8G = mA, eZ = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.hp(mouseX),
			coordY = bP.hr(mouseY),
			point = bP.fP(bP.fw(coordX, coordY));
		bP.hs(coordX, coordY) && a8Z(mouseX, mouseY, point)
	}, this.click = function(m9, mA, a57) {
		var ho = bP.hp(m9),
			hq = bP.hr(mA),
			fL = bP.fw(ho, hq),
			fD = bP.fP(fL),
			a8Y = (a1.a2.ik() ? .025 : .0144) * i.il,
			ea = performance.now();
		return !(Math.abs(m9 - a8F) > a8Y || Math.abs(mA - a8G) > a8Y || eZ + 500 < ea || (eZ = ea, bM.so() && (bM.he = m9, bM.hf = mA, b8.ee(1), b9.ee(1)), !bP.hs(ho, hq))) && (a57 ? (a8Z(m9, mA, fD), !1) : aN.hj || this.iL() || !bD.gv.hl(aE
			.fJ) || aE.hi ? (this.tX(), !1) : (aE.hx ? 0 <= (a8J = bu.hy(fL)) && (oy[3].iL = !0) : 2 === aE.a38 ? ad.h9(fD) && (a8H = ad.fR(fD), bD.gv.kH(a8H) || (oy[0].iL = !0, oy[0].lr = 1, oy[7].iL = !0)) : (bQ.iC.iD(aE.fJ, fL) && (oy[0]
					.iL = !0, oy[0].lr = 1, oy[1].iL = !0, oy[1].lr = 0, oy[9].iL = !0, oy[9].lr = 0), bQ.i9.iA(aE.fJ, fL) && (oy[0].iL = !0, oy[0].lr = 1, oy[1].iL = !0, oy[1].lr = 1, a8J = bR.gB[7]), ad.fe(fD) ? (a8K = an.fA.fC(fD)) &&
				(a8Y = bP.fP(a8K), oy[8].iL = !0, a8H = ad.fQ(a8Y) ? aE.fW : ad.fR(a8Y)) : (ad.a18(aE.fJ, fD) && (a8I = aE.fJ, oy[0].iL = !0, oy[0].lr = 1, oy[7].iL = !0), -1 !== (ea = bu.i4(fL)) && (ad.fQ(ea << 2) ? (a8H = aE.fW, bv.i5(
					aE.fJ) ? (oy[0].iL = !0, oy[0].lr = 0) : ae.gg(aE.fJ) && (oy[0].iL = !0, oy[0].lr = 3)) : (a8H = ad.fR(ea << 2), oy[0].lr = 1, oy[5].iL = function(a8H) {
					return !bD.gv.kH(a8H) && !a8V(a8H) && b6.a8W(1, [a8H], !1)
				}(a8H), oy[7].iL || bD.gv.kH(a8H) || (a8I = a8H, oy[7].iL = !0), oy[4].iL = !bD.gv.kH(a8H) && !ag.a8d(a8H) && b6.a8W(0, [a8H], !1), oy[6].iL = function(a8H) {
					if (0 === rP.length) return !1;
					if (performance.now() > a8L + 4e3) return !(rP = []);
					return !a8V(a8H) && ! function(a8H) {
						var aC;
						if (aE.iT)
							for (aC = rP.length - 1; 0 <= aC; aC--)
								if (!bv.fS(a8H, rP[aC])) return 1;
						return
					}(a8H)
				}(a8H), bv.fS(a8H, aE.fJ) ? (bv.i8(aE.fJ, a8H) ? (oy[0].lr = 0, oy[0].iL = !0) : ae.gg(aE.fJ) && (oy[0].lr = 3, oy[0].iL = !0), oy[0].iL = this.a8f()) : (oy[2].iL = !0, ao.iD(a8H) ? oy[2].lr = 0 : oy[2].lr = 1,
					oy[0].iL = !0))))), this.a8a(m9, mA)))
	}, this.a8a = function(m9, mA) {
		return fg = m9 - Math.floor(a8E / 2), fi = mA - Math.floor(a8E / 2), !!this.iL()
	}, this.a4e = function(m9, mA) {
		return !!this.iL() && (ak.zj.iL ? !ak.zj.a26(m9, mA) && (ak.zj.iL = !1, bi.ds = !0) : function(ts, m9, mA) {
			m9 = a8R(m9, mA);
			if (0 <= a8T(m9)) return !1;
			if ((1 === m9 || 6 === m9) && 0 <= a8T(2)) return !1;
			if ((6 === m9 || 9 === m9) && 0 <= a8T(10)) return !1;
			return ts.tX(), bi.ds = !0
		}(this, m9, mA))
	}, this.tX = function() {
		for (var aC = oy.length - 1; 0 <= aC; aC--) oy[aC].iL = !1, oy[aC].lr = 0;
		ak.zj.iL = !1
	}, this.iL = function() {
		return this.a8f() || ak.zj.iL
	}, this.a8f = function() {
		for (var fZ = oy.length, aC = 0; aC < fZ; aC++)
			if (oy[aC].iL) return !0;
		return !1
	}, this.xl = function() {
		if (this.iL())
			if (ak.zj.iL) ak.zj.xl();
			else {
				var aC, ib = xm,
					ft = oy,
					fZ = ft.length,
					a8n = (a8E + gap) / zoom;
				for (ib.imageSmoothingEnabled = !0, ib.setTransform(zoom, 0, 0, zoom, fg, fi), aC = 0; aC < fZ; aC++) ft[aC].iL && xm.drawImage(ft[aC].canvas[ft[aC].lr], ft[aC].fg * a8n, ft[aC].fi * a8n);
				ib.imageSmoothingEnabled = !1, ib.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cH() {
	var k, canvas, a8o, a8p, a8q, a8r = -1;

	function a8s() {
		var a8t, ou = canvas.getContext("2d", {
			alpha: !0
		});
		ou.clearRect(0, 0, k, k), ou.fillStyle = bE.pK, ou.fillRect(0, 0, k, k), 9 === a8p && (ou.fillStyle = bE.pP, ou.fillRect(0, 0, k, k)), ou.fillStyle = bE.pO, __fx.utils.smoothFrame(ou, k, k) || (ou.fillRect(0, 0, k, 1), ou.fillRect(0, 0, 1,
			k), ou.fillRect(0, k - 1, k, 1), ou.fillRect(k - 1, 0, 1, k)), a8t = .9 * k / ac.get(0).width, ou.imageSmoothingEnabled = !0, ou.setTransform(a8t, 0, 0, a8t, Math.floor((k - a8t * ac.get(0).width) / 2), Math.floor((k - a8t * ac.get(0)
			.height) / 2)), ou.drawImage(ac.get(0), 0, 0), ou.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8w(m9, mA) {
		if (!aN.hj) return m9 <= k + bf.gap && mA >= aS.fi ? 9 : -1;
		if (m9 <= 4 * k + bf.gap) {
			if (mA >= aS.fi) return 0;
			if (mA >= aS.fi - k - a8q * bf.gap) return 2
		} else if (m9 <= 7 * k + bf.gap && mA >= aS.fi - k - a8q * bf.gap) return 1;
		return -1
	}
	this.hj = !1, this.dk = function() {
		a8p = -1, this.hj = !1, a8q = a1.a2.ik() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, a8o = bD.sM.u7(1, (a1.a2.ik() ? .5 : .45) * k), a8s()
	}, this.a8u = function() {
		return !(1 !== aE.a38 || aE.hx || (aE.hi ? !bF.a7x : this.hj && aE.lE))
	}, this.a5F = function() {
		this.hj = !this.hj, this.hj ? (bF.a5E(!1), aE.hi && bF.a7x && bF.a5G(!0), this.a8v(), 9 === a8p && (a8p = 0)) : (a8p = -1, a8s(), !aE.lE || 1 !== aE.a38 || aE.hx || aE.hi || a1.a2.setState(1)), bi.ds = !0
	}, this.a8v = function() {
		(aE.lE || aE.hi) && 1 === aE.a38 && (aW.nG(!0), aE.hx || setTimeout(function() {
			be.a3K()
		}, 0), a1.a2.setState(0))
	}, this.hm = function(m9, mA) {
		return 0 <= (a8r = a8w(m9, mA)) || !aN.hj || aE.lE || aE.hi || bh.iL || aN.a5F(), a8r
	}, this.a4e = function(m9, mA) {
		m9 = a8w(m9, mA);
		m9 !== a8p && (a8p = m9, this.hj || a8s(), bi.ds = !0)
	}, this.a4f = function(m9, mA) {
		m9 = a8w(m9, mA);
		return -1 !== m9 && a8r === m9 && (this.hj ? aE.ny ? (0 <= m9 && bF.a5E(!1), !aE.hi) : (0 === m9 ? aE.a4V() : 1 === m9 ? this.a5F() : 2 === m9 && u.v(1, 0), !0) : 9 === m9 && (this.a5F(), !0))
	}, this.xl = function() {
		var j;
		this.hj ? (j = Math.floor(5.5 * k), xm.setTransform(1, 0, 0, 1, bf.gap, aS.fi), xm.fillStyle = bE.pK, xm.fillRect(0, 0, j, k), 0 === a8p ? (xm.fillStyle = bE.pP, xm.fillRect(0, 0, 4 * k, k)) : 1 === a8p && (xm.fillStyle = bE.pP, xm
				.fillRect(4 * k, 0, Math.floor(1.5 * k), k)), xm.fillStyle = bE.pO, xm.fillRect(0, 0, j, 1), xm.fillRect(0, 0, 1, k), xm.fillRect(4 * k, 0, 1, k), xm.fillRect(0, k - 1, j, 1), xm.fillRect(j - 1, 0, 1, k), xm.font = a8o, bD.sM
			.textBaseline(xm, 1), bD.sM.textAlign(xm, 1), xm.fillText(L(48), 2 * k, .54 * k), j = .4 * k, aN.a90(bf.gap + 4 * k + (1.5 * k - j) / 2, aS.fi + .3 * k, j), j = 1, xm.setTransform(1, 0, 0, 1, bf.gap, aS.fi - j * a8q * bf.gap - j *
				k), xm.fillStyle = bE.pK, xm.fillRect(0, 0, 4 * k, k), a8p === j + 1 && (xm.fillStyle = bE.pP, xm.fillRect(0, 0, 4 * k, k)), xm.fillStyle = bE.pO, xm.fillRect(0, 0, 4 * k, 1), xm.fillRect(0, 0, 1, k), xm.fillRect(4 * k, 0, 1,
				k), xm.fillRect(0, k - 1, 4 * k, 1), xm.fillText(L(0 === j ? 48 : 49), 2 * k, .54 * k), xm.setTransform(1, 0, 0, 1, 0, 0)) : xm.drawImage(canvas, bf.gap, aS.fi)
	}, this.rx = function(player) {
		return 0 !== ah.nU[player] && 2 !== aE.a38 && !bD.gv.kH(player)
	}, this.a90 = function(fg, fi, fZ) {
		xm.setTransform(1, 0, 0, 1, fg, fi), xm.lineWidth = bf.a27, xm.strokeStyle = bE.pO, xm.beginPath(), xm.moveTo(0, 0), xm.lineTo(fZ, fZ), xm.moveTo(0, fZ), xm.lineTo(fZ, 0), xm.stroke()
	}
}

function cI() {
	var a92, k, a93, a94, a95, a96, a97, a98, a99;

	function a1F() {
		return aS.a9R(aO.a9N()) ? ax.iL ? __fx.settings.keybindButtons ? aS.fi - 2 * aS.k - 3 * a93 : aS.fi - aS.k - 2 * a93 : __fx.settings.keybindButtons ? aS.fi - aS.k - 2 * a93 : aS.fi - a93 : bF.a9R(aO.a9Q()) ? ax.iL ? bF.a1F() - aS.k - 2 *
			a93 : bF.a1F() - a93 : ax.iL ? i.k - aS.k - (bn.a8D() + 1) * a93 : i.k - bn.a8D() * bf.gap
	}

	function a9E(ea, s3, id, h7, a9H, a9I, lX, a9J, a9K, a9L, a9V) {
		var aC, ou, a5x, sE, a9W = void 0 !== a9K,
			j = Math.floor(aR.measureText(s3, aO.a8o) + 1.5 * a94 + (a9W ? k : 1.5 * a94));
		if (bi.ds = !0, a9V || bt.a1b(s3, a9K), j + 2 * a93 + aS.k > i.j && !a9W && 50 !== id && 20 < s3.length) a9E(ea, (a9V = bD.tK.a7G(s3))[0], id, h7, a9H, a9I, lX, a9J, a9K, a9L, !0), a9E(ea, a9V[1], id, h7, a9H, a9I, lX, a9J, a9K, a9L, !0);
		else if (a9V = j + (50 === id ? a95 : 0), (a5x = document.createElement("canvas")).width = j, a5x.height = k, (ou = a5x.getContext("2d", {
				alpha: !0
			})).font = aO.a8o, bD.sM.textBaseline(ou, 1), bD.sM.textAlign(ou, 0), ou.clearRect(0, 0, j, k), ou.fillStyle = a9I, ou.fillRect(0, 0, j, k), __fx.utils.smoothFrame(ou, j, k, 0), ou.fillStyle = a9H, ou.fillText(s3, Math.floor(1.5 * a94),
				Math.floor(k / 2)), a9W && (ou.imageSmoothingEnabled = !0, ak.zj.a28(a9K, ou, j - k, 0, k)), 0 === (sE = {
				eZ: ea,
				s3: s3,
				id: id,
				player: h7,
				canvas: a5x,
				a9H: a9H,
				a9I: a9I,
				j: j,
				a9O: a9V,
				lX: lX,
				a9J: a9J,
				a9K: a9K,
				a9L: a9L
			}).eZ || 0 < a92.length && 0 < a92[0].eZ) a92.unshift(sE);
		else {
			for (aC = 1; aC < a92.length; aC++)
				if (0 < a92[aC].eZ) return void a92.splice(aC, 0, sE);
			a92.push(sE)
		}
	}

	function a9F(eH, uv, ft) {
		return "rgb(" + eH + "," + uv + "," + ft + ")"
	}

	function a9X(id, h2) {
		for (var fZ = a92.length, aC = 0; aC < fZ; aC++) a92[aC].id === id && h2-- <= 0 && (a92.splice(aC, 1), aC--, fZ--)
	}

	function a9Y(id, player) {
		for (var fn = !1, aC = a92.length - 1; 0 <= aC; aC--) a92[aC].id !== id || player !== aE.fW && a92[aC].player !== player || (a92.splice(aC, 1), fn = !0);
		return fn
	}

	function a9t(s3) {
		a9E(340, s3, 6, 0, a9F(215, 245, 255), bE.pL, -1, !1)
	}
	this.a9A = "", this.dk = function() {
		var self;
		a98 = 0, a97 = a1.a2.ik() ? 7 : 12, a96 = {
				w1: [0, 0, 0],
				a9B: [0, 0, 0],
				nm: [220, 180, 180],
				xk: [0, 0, 0],
				ej: [0, 0, 0]
			}, a92 = [], this.resize(), aE.hx && this.a3L(0, 18), bV.wG.zX[bV.fF].name.length && a9t(L(92, [bV.wG.zX[bV.fF].name])), bV.wG.zX[bV.fF].a9u && a9t(L(93, [bV.wG.zX[bV.fF].a9u])), a9t(L(94, [bV.fk - 2 + "x" + (bV.fl - 2)])), a9t(L(95,
				[bD.tK.a2Q(aq.a9v)])), aq.a9v !== aq.a9w && a9t(L(96, [bD.tK.a2Q(aq.a9w) + " (" + bD.tK.a7C(100 * aq.a9w / aq.a9v, 1) + ")"])), 0 < aq.a9x && a9t(L(72, [bD.tK.a2Q(aq.a9x) + " (" + bD.tK.a7C(100 * aq.a9x / aq.a9v, 1) + ")"])), 0 <
			aq.a9y && a9t(L(97, [bD.tK.a2Q(aq.a9y) + " (" + bD.tK.a7C(100 * aq.a9y / aq.a9v, 1) + ")"])), 10 === aE.lC && a9E(120, L(98), 6, 0, a9F(235, 255, 120), bE.pL, -1, !1), 0 !== (self = this).a9A.length && (a9E(200, self.a9A, 0, 0, bE.pO,
				bE.pL, -1, !1), self.a9A = ""), aE.a1a && a9E(340, L(50), 6, 0, a9F(255, 200, 0), bE.pL, -1, !1)
	}, this.resize = function() {
		var a9G, aC;
		if (k = (k = Math.floor((a1.a2.ik() ? .031 : .0249) * i.il)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.a8o = bD.sM.u7(1, this.fontSize), a93 = bf.gap, a94 = Math.floor(k / 5), 0 < a92.length)
			for (a9G = a92, a92 = [], aC = a9G.length - 1; 0 <= aC; aC--) a9E(a9G[aC].eZ, a9G[aC].s3, a9G[aC].id, a9G[aC].player, a9G[aC].a9H, a9G[aC].a9I, a9G[aC].lX, a9G[aC].a9J, a9G[aC].a9K, a9G[aC].a9L, !0);
		this.a9M()
	}, this.a9M = function() {
		a99 = document.createElement("canvas");
		var s3 = L(51),
			ou = (a95 = aR.measureText(s3, this.a8o) + 5 * a94, a99.height = k, a99.width = a95, a99.getContext("2d", {
				alpha: !0
			}));
		ou.font = this.a8o, bD.sM.textBaseline(ou, 1), bD.sM.textAlign(ou, 1), ou.clearRect(0, 0, a95, k), ou.fillStyle = bE.pl, ou.fillRect(0, 0, a95, k), ou.fillStyle = bE.pO, ou.fillText(s3, Math.floor(a95 / 2), Math.floor(k / 2))
	}, this.a9N = function() {
		var fZ;
		return ax.iL ? ax.j : 0 === (fZ = a92.length) ? 0 : 1 === fZ ? a92[0].a9O : a9P(a92[0].a9O, a92[1].a9O)
	}, this.a9Q = function() {
		var fZ = a92.length;
		return ax.iL ? fZ ? a9P(ax.j, a92[0].a9O) : ax.j : 0 === fZ ? 0 : 1 === fZ ? a92[0].a9O : 2 === fZ ? a9P(a92[0].a9O, a92[1].a9O) : a9P(a9P(a92[0].a9O, a92[1].a9O), a92[2].a9O)
	}, this.hm = function(fg, fi) {
		for (var nv, a9S, a9T = a1F(), aC = a92.length - 1; 0 <= aC; aC--)
			if ((a9S = a9T - (aC + 1) * k) <= fi && fi < a9S + k) return 50 === a92[aC].id ? fg >= i.j - a95 - a93 - a92[aC].j && (fg >= i.j - a95 - a93 ? bB.gv.rL(a92[aC].player) : aI.nq(a92[aC].player, 800, !1, 0), !0) : fg >= i.j - a92[aC].j -
				a93 && (736 === a92[aC].id ? window.open("https://" + a92[aC].s3, "_blank") : a92[aC].a9J && (a92[aC].a9L && a92[aC].a9L.fs ? (a9S = a92[aC].a9L.fL, nv = bP.fh(a9S) - 10, a9S = bP.fj(a9S) - 10, aI.np(nv, a9S, 19 + nv, 19 +
					a9S)) : a92[aC].a9L && a92[aC].a9L.ft ? aI.nr(a92[aC].player, a92[aC].a9L.ns) : (aI.nq(a92[aC].player, 800, !1, 0), 0 <= a92[aC].lX && (nv = a92[aC].lX, a92[aC].lX = a92[aC].player, a92[aC].player = nv))), !0);
		return !1
	}, this.a1b = function(ea, s3, id, h7, a9H, a9I, lX, a9J, a9K, a9L) {
		a9E(ea, s3, id, h7, a9H, a9I, lX, a9J, a9K, a9L)
	}, this.a9U = function(s) {
		a9E(300, s, 252, 0, bE.pO, bE.pL, -1, !1)
	}, this.a7S = function(id) {
		for (var aC = a92.length - 1; 0 <= aC; aC--) a92[aC].id === id && (a92[aC].eZ = 1)
	}, this.a3L = function(player, id) {
		0 === id ? (aR.ei(player, 0), a9X(423, 2), a9E(160, L(52, [ah.a1c[player]]), 423, player, "rgb(10,220,10)", bE.pL, -1, !1)) : 1 === id ? (a9Y(50, aE.fW), aR.ei(player, 1), a9E(360, L(53, [ah.a1c[player]]), 0, player, bE.q6, bE.pL, -1, !
				0), aI.nq(player, 2700, !1, 0)) : 2 === id ? (aR.ei(player, 2), a9E(0, L(54), 0, player, "rgb(10,255,255)", bE.pL, -1, !0), aI.nq(player, 2700, !1, 0)) : 3 === id ? (aR.ei(player, 2), a9E(0, L(55, [ah.a1c[player]]), 0, player, bE
				.pO, bE.pL, -1, !0), aI.nq(player, 2700, !1, 0)) : 4 === id ? this.a9Z(1, player, player) : 5 === id ? bD.gv.kH(aE.fJ) || (function(id, nP) {
				var aC, oq = 0,
					fZ = a92.length;
				for (aC = 0; aC < fZ; aC++)
					if (a92[aC].id === id && nP <= ++oq) return a92.splice(aC, 1)
			}(1, 5), ag.a9b(player) && a9E(180, L(56, [ah.a1c[player]]), 1, player, a9F(255, 200, 180), bE.pL, -1, !0), bD.gv.a6X(player, 10) && (a9X(573, 0), a9E(180, L(57, [ah.a1c[player]]), 573, player, bE.q6, bE.pL, -1, !0))) : 18 === id ?
			a9E(255, L(58), 18, 0, bE.pO, bE.pL, -1, !1) : 21 === id ? a9E(220, L(59), id, 0, bE.pO, bE.pL, -1, !1) : 22 === id ? this.a9Z(2, player, player) : 59 === id && a9E(0, L(60), id, 0, bE.qQ, bE.pL, 0, !1)
	}, this.a4Q = function(s) {
		a9E(200, L(61, [s]), 94, 0, bE.pO, bE.q2, -1, !1)
	}, this.a3X = function(a9c) {
		if (aE.fJ === a9c && !aE.lE && !aE.hi)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a9E(0, "Your Win Count is now " + __fx.wins.count, 3, a9c, bE.pO, bE.pL, -1, !0);
		ah.hN[a9c] && (aR.ei(a9c, 2), aE.ku < 100 ? a9E(0, L(55, [ah.a1c[a9c]]), 3, a9c, bE.pO, bE.pL, -1, !0) : a9E(0, L(62, [ah.a1c[a9c]]), 3, a9c, bE.pO, bE.pL, -1, !0))
	}, this.a8h = function(fD) {
		var s3, a9e, a9d = "(" + bP.fh(fD >> 2) + ", " + bP.fj(fD >> 2) + ")",
			a9J = !1,
			player = 0;
		ad.fU(fD) ? ad.fQ(fD) ? a9d = L(63, [a9d]) : (player = ad.fR(fD), aE.hi && !1 === __fx.hoveringTooltip.active && (aE.fJ = player), s3 = L(64, [bD.ou.a6B(ah.a3o[player], bD.sM.u7(0, 10), 150)]) + "   ", s3 = (s3 += L(65, [bD.tK.a2Q(ah.hb[
				player])]) + "   ") + L(66, [bD.tK.a2Q(ah.hN[player])]) + "   ", aE.iT && (a9e = bj.a3U[bj.lH[bj.fX[player]]], s3 += L(67) + ": " + a9e + "   "), bD.gv.kH(player) && (s3 += L(68) + ": " + aF.l5[aF.iI[player]] + "   "), a9d =
			s3 = (s3 += L(69, [player]) + "   ") + L(70, [a9d]), a9J = !0) : a9d = ad.fe(fD) ? L(71, [a9d]) + "   #" + ad.fH(fD) : L(72, [a9d]), a9X(55, 0), a9E(220, a9d, 55, player, bE.pO, bE.pL, -1, a9J, void 0, void 0, !0)
	}, this.a8j = function(a9f) {
		var lp = bQ.z,
			player = lp.mo[a9f] >> 3,
			s3 = (bi.ds = !0, a9X(55, 0), L(73, [ah.a1c[player]]) + "   ");
		a9E(220, s3 += L(65, [bD.tK.a2Q(lp.a9g[a9f])]), 55, player, bE.pO, bE.pL, -1, !0)
	}, this.r4 = function(qo, a9h, r5) {
		qo === aE.fJ ? a9E(175, " " + L(74, [ah.a1c[a9h]]) + ": ", 1001, a9h, a9F(200, 255, 210), bE.pL, -1, !0, r5) : this.a9i(qo, r5)
	}, this.a9i = function(qo, r5) {
		a9X(1e3, 0), a9E(175, ah.a1c[qo] + ": ", 1e3, qo, bE.pO, "rgba(5,60,25,0.9)", -1, !0, r5)
	}, this.a3W = function() {
		var s;
		aE.a3D ? (s = L(75), aR.a3V(L(76), 2, 1, 12), a9E(0, s, 40, 0, "rgb(10,220,10)", bE.pL, -1, !1)) : (s = L(77), aR.a3V(L(78), 2, 0, 16), a9E(0, s, 41, 0, bE.pO, bE.pL, -1, !1))
	}, this.a1P = function() {
		var h2 = ah.a1c,
			fc = aE.data;
		a9E(300, h2[0] + " [" + aE.a3R.a1V(fc.elo[0]) + "] vs " + h2[1] + " [" + aE.a3R.a1V(fc.elo[1]) + "]", 65, 0, bE.pF, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a9j = function(s) {
		a9E(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a9k = function(a9l) {
		a9E(0, L(a9l ? 79 : 80), 247, 0, bE.qP, bE.pL, -1, !1)
	}, this.a1X = function(a1U, a1W, a9m) {
		var fc = aE.data,
			h2 = ah.a1c;
		a9E(0, h2[0] + ": " + aE.a3R.a1V(fc.elo[0]) + " -> " + a1U, 66, 0, bE.pO, a9m[0], -1, !1), a9E(0, h2[1] + ": " + aE.a3R.a1V(fc.elo[1]) + " -> " + a1W, 66, 1, bE.pO, a9m[1], -1, !1)
	}, this.rM = function(player, id) {
		0 === id ? a9Y(50, player) ? (a9E(128, L(81, [ah.a1c[player]]), 52, player, a9F(180, 255, 180), bE.pL, -1, !0), ag.rv(player, 2, 255)) : a9E(384, L(82, [ah.a1c[player]]), 51, player, a9F(210, 210, 255), bE.pL, -1, !0) : a9Y(51, player) ?
			(a9E(128, L(83, [ah.a1c[player]]), 52, player, bE.pO, "rgba(60,120,10,0.9)", -1, !0), ag.rv(player, 2, 255)) : (a9E(384, L(84, [ah.a1c[player]]), 50, player, bE.pO, "rgba(90,90,90,0.9)", -1, !0), ag.rv(player, 2, 96))
	}, this.rQ = function(w1, target) {
		var color = a9F(210, 255, 210);
		1 < w1.length ? a9E(230, L(85, [w1.length, ah.a1c[target]]), 66, target, color, bE.pL, -1, !0) : a9E(230, L(86, [ah.a1c[w1[0]], ah.a1c[target]]), 66, w1[0], color, bE.pL, target, !0)
	}, this.a9n = function(player, target) {
		a9E(230, L(87, [ah.a1c[player], ah.a1c[target]]), 66, player, bE.pO, "rgba(75,65,5,0.9)", target, !0)
	}, this.a9o = function(id, h2) {
		a9X(id, h2)
	}, this.a3G = function(id, player) {
		a9Y(id, void 0 === player ? aE.fW : player)
	}, this.a9p = function(id) {
		for (var aC = a92.length - 1; 0 <= aC; aC--)
			if (a92[aC].id === id) return a92[aC];
		return null
	}, this.rH = function(a87, a9q, player) {
		2 !== ah.a6S[aE.fJ] && a9E(200, 1 === a87 ? L(88, [ah.a1c[player]]) : L(89, [bD.tK.a2Q(a87), ah.a1c[player]]), 30, player, "rgb(190,255,190)", bE.pL, -1, !0)
	}, this.a9s = function(a87, player) {
		2 !== ah.a6S[aE.fJ] && (a9X(31, 0), a87 = " (" + bD.tK.a2Q(a87) + ") 💸", a9E(150, a87 = bD.gv.kH(player) ? L(90) + a87 : L(91, [ah.a1c[player]]) + a87, 31, player, bE.pF, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a3F = function(by) {
		for (var ej = bi.kr(), aC = 2; 0 <= aC; aC--) 0 < a96.xk[aC] && (by || a96.ej[aC] < ej - 220) && this.a9z(aC)
	}, this.a9z = function(id) {
		var s3, fZ = a96.xk[id],
			player = a96.w1[id];
		a96.xk[id] = 0, 1 === fZ ? (0 === id ? s3 = L(99, [ah.a1c[player], ah.a1c[a96.a9B[0]]]) : 1 === id ? s3 = L(100, [ah.a1c[player]]) : 2 === id ? s3 = L(101, [ah.a1c[player]]) : 3 === id && (s3 = L(102, [ah.a1c[player]])), a9X(7, 0), a9E(
			a96.nm[id], s3, 7, a96.a9B[id], bE.pO, bE.pL, -1, !0)) : (s3 = L(0 === id ? 103 : 1 === id ? 104 : 105, [fZ]), a9X(7, 0), a9E(a96.nm[id], s3, 7, player, bE.pO, bE.pL, -1, !1))
	}, this.a9Z = function(id, i1, lX) {
		var ej = bi.kr(),
			fZ = a96.xk[id] + 1;
		a96.xk[id]++, a96.w1[id] = i1, a96.a9B[id] = lX, 1 === fZ && (a96.ej[id] = ej), (1 === fZ && (aE.a3B < 32 || 2 === aE.a38) || 1 < fZ && (a96.ej[id] < ej - 140 || 2 === aE.a38)) && this.a9z(id)
	}, this.ee = function() {
		b3.ee();
		for (var k9 = (k9 = a92.length - a97) <= 1 ? 1 : k9 * k9, aC = a92.length - 1; 0 <= aC; aC--) 0 < a92[aC].eZ && (a92[aC].eZ -= k9, a92[aC].eZ <= 0) && (bi.ds = !0, a92.splice(aC, 1));
		! function() {
			var h2, aC;
			if (128 !== a98 && !(++a98 < 128))
				for (h2 = 5, aC = am.lQ - 1; 0 <= aC; aC--) 1 === ah.a6S[am.lV[aC]] && 0 < h2-- && a9E(240, L(102, [ah.a1c[am.lV[aC]]]), 1, am.lV[aC], bE.pF, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a3F(!1)
	}, this.xl = function() {
		for (var a0H, fi = a1F(), aC = a92.length - 1; 0 <= aC; aC--) a0H = fi - (aC + 1) * k, 50 === a92[aC].id ? (xm.drawImage(a92[aC].canvas, i.j - a92[aC].j - a95 - a93, a0H), xm.drawImage(a99, i.j - a95 - a93, a0H)) : xm.drawImage(a92[aC]
			.canvas, i.j - a92[aC].j - a93, a0H)
	}, this.aA1 = function(id, iI) {
		var a9d, aA2 = bE.pY;
		0 === id ? a9d = L(106) : 1 === id ? (a9d = L(107), aA2 = bE.qL) : 2 === id ? a9d = L(108) : 3 === id ? a9d = L(109) : (a9d = bD.tK.a2Q(iI), aA2 = 5 === id ? bE.qL : bE.pL), a9X(74, 0), a9E(0, a9d, 74, 0, bE.pO, aA2, -1, !1, void 0,
			void 0, !0)
	}
}

function cJ() {
	var aA4, aA5, xn = "",
		a02 = 0,
		a03 = 0,
		aA3 = -1,
		eD = ["Team", "BR", "1v1", "Zombie"],
		aA6 = [
			[0, 15, 30, 45],
			[10, 40],
			[25],
			[55]
		];

	function aAB() {
		for (var ea = new Date, aAC = 60 * ea.getUTCMinutes() + ea.getUTCSeconds(), aAD = -1, aA9 = 0, aC = 0; aC < aA6.length; aC++)
			for (var fs = 0; fs < aA6[aC].length; fs++) {
				var fc = (fc = 60 * aA6[aC][fs] + 10 - aAC) <= 0 ? 3600 + fc : fc;
				(aAD < 0 || fc < aAD) && (aAD = fc, aA9 = aC)
			}
		if (!(aAD < 0)) return aAD !== aA3 && (xn = eD[aA9] + " " + aA5 + ": " + aAE(Math.floor(aAD / 60)) + ":" + aAE(aAD % 60), aA3 = aAD, a02 = aR.measureText(xn, aA4), a02 += Math.floor(.4 * a03), 1);
		xn = ""
	}

	function aAE(aAF) {
		return aAF < 10 ? "0" + aAF : String(aAF)
	}
	this.aA8 = function(aA9, aAA) {
		return 0 <= aA6[aA9].indexOf(aAA)
	}, this.dk = function() {
		aA5 = L(110)
	}, this.resize = function() {
		a02 = Math.floor((a1.a2.ik() ? .53 : .36) * i.il), a03 = Math.floor(.065 * a02), aA4 = bD.sM.u7(1, Math.floor(.9 * a03)), aA3 += 1e3, aAB()
	}, this.ee = function() {
		aAB() && (bi.ds = !0)
	}, this.xl = function(fi) {
		xn && (xm.lineWidth = 1 + Math.floor(a03 / 15), xm.translate(i.j - a03, fi + a02), xm.rotate(-Math.PI / 2), xm.fillStyle = bE.pO, xm.fillRect(0, 0, a02, a03), xm.strokeStyle = bE.pF, xm.strokeRect(0, 0, a02, a03 + 10), xm.fillStyle = bE
			.pF, xm.font = aA4, bD.sM.textBaseline(xm, 1), bD.sM.textAlign(xm, 1), xm.fillText(xn, Math.floor(a02 / 2), Math.floor(.59 * a03)), xm.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cK() {
	var a86, aAG, aAH, a03, aAI, aAJ = 0,
		aAK = 0;

	function aAM(aC) {
		var aAO = !0,
			a2F = bE.pO,
			j = (1 === a86[aC].id ? a86[aC].ou.fillStyle = bE.qJ : a86[aC].k3 === aE.fW ? a86[aC].ou.fillStyle = bE.pZ : (ad.aAP(a86[aC].k3), a86[aC].ou.fillStyle = bD.color.pI(bR.g8[0], bR.g8[1], bR.g8[2], .87), 400 < bD.sU.a5b(bR.g8, 0, 2) && (
				aAO = !1, a2F = bE.pF)), a86[aC].canvas.width),
			ue = (a86[aC].ou.clearRect(0, 0, j, a03), a86[aC].ou.fillRect(0, 0, j, a03), a86[aC].ou.fillStyle = a2F, ! function(ou, j, a03) {
				ou.fillRect(0, 0, j, 1), ou.fillRect(0, a03 - 1, j, 1), ou.fillRect(0, 0, 1, a03), ou.fillRect(j - 1, 0, 1, a03)
			}(a86[aC].ou, j, a03), aAG + 2 * a03 < j && (a86[aC].ou.fillRect(j - aAG - a03, 0, 1, a03), a86[aC].ou.fillText(ah.a1c[a86[aC].k3], Math.floor((j - aAG) / 2), Math.floor(.57 * a03))), 0 !== a86[aC].id ? 0 : a03);
		a86[aC].ou.fillText(bD.tK.a2Q(a86[aC].iI), Math.floor(j - aAG / 2 - ue), Math.floor(.57 * a03)),
			function(aC, j, ue, aAO) {
				a86[aC].ou.fillStyle = aAO ? bE.pQ : bE.pM;
				aAO = Math.floor(aAG * a86[aC].iI / a86[aC].aAV);
				a86[aC].ou.fillRect(Math.floor(j - aAG - ue), a03 - aAI, aAO, aAI)
			}(aC, j, ue, aAO), 0 === a86[aC].id ? (aAS(aC, j, aAO, a2F), function(aC, j, aAO) {
				a86[aC].ou.strokeStyle = aAO ? bE.pg : bE.pq, a86[aC].ou.fillRect(a03, 0, 1, a03);
				aAO = j - a03;
				a86[aC].ou.beginPath(), a86[aC].ou.moveTo(Math.floor(.3 * a03 + aAO), Math.floor(a03 / 2)), a86[aC].ou.lineTo(Math.floor(a03 - .3 * a03 + 0 + aAO), Math.floor(a03 / 2)), a86[aC].ou.stroke(), a86[aC].ou.beginPath(), a86[aC].ou
					.moveTo(Math.floor(a03 / 2 + aAO), Math.floor(.3 * a03)), a86[aC].ou.lineTo(Math.floor(a03 / 2 + aAO), Math.floor(a03 - .3 * a03 + 0)), a86[aC].ou.stroke()
			}(aC, j, aAO)) : aAS(aC, 2 * a03, aAO, a2F)
	}

	function aAS(aC, j, aAO, a2F) {
		a86[aC].ou.strokeStyle = a86[aC].aAW ? bE.pX : aAO ? bE.py : bE.pz, a86[aC].ou.fillStyle = a2F, a86[aC].ou.fillRect(j - a03, 0, 1, a03), a86[aC].ou.lineWidth = Math.max(Math.floor(a03 / 12), 3), a86[aC].ou.lineCap = "round";
		aAO = .35;
		j = a03 + 1, a86[aC].ou.beginPath(), a86[aC].ou.moveTo(Math.floor(j - aAO * a03 + 0), Math.floor(aAO * a03)), a86[aC].ou.lineTo(Math.floor(j - a03 + aAO * a03), Math.floor(a03 - aAO * a03 + 0)), a86[aC].ou.stroke(), a86[aC].ou.beginPath(),
			a86[aC].ou.moveTo(Math.floor(j - a03 + aAO * a03), Math.floor(aAO * a03)), a86[aC].ou.lineTo(Math.floor(j - aAO * a03 + 0), Math.floor(a03 - aAO * a03 + 0)), a86[aC].ou.stroke()
	}

	function aAi(h, aAg) {
		for (var iI, aC = aAg - 1; 0 <= aC; aC--) iI = ae.gm(aE.fJ, aC), h[aC].iI !== iI && (h[aC].iI = iI, h[aC].aAV = Math.max(iI, h[aC].aAV), h[aC].aAN = !0)
	}

	function aAm(h, aAk) {
		for (var ur = aE.fJ << 3, a9g = bQ.z.a9g, ml = bQ.z.ml, aAo = bQ.z.aAo, aC = aAk - 1; 0 <= aC; aC--) {
			var aAp = aAo[ur + aC],
				iI = a9g[aAp];
			h[aC].iI !== iI ? (h[aC].iI = iI, h[aC].aAV = Math.max(iI, h[aC].aAV), h[aC].aAN = !0) : h[aC].aAW || ml[aAp] % 64 != 5 || (h[aC].aAW = !0, h[aC].aAN = !0)
		}
	}

	function aAL(a89) {
		a89.canvas = document.createElement("canvas"), bV.zc.font = aAH;
		var j = aAG;
		a89.k3 < aE.fW && 0 === a89.id && (j += Math.floor(bV.zc.measureText(ah.a1c[a89.k3] + "000").width)), j += a03, 0 === a89.id && (j += a03), a89.canvas.width = j, a89.canvas.height = a03, a89.ou = a89.canvas.getContext("2d", {
			alpha: !0
		}), a89.ou.font = aAH, bD.sM.textBaseline(a89.ou, 1), bD.sM.textAlign(a89.ou, 1)
	}

	function aAc(aC) {
		return aV.aAq() ? i.j - a86[aC].canvas.width - bf.gap : aV.fg
	}

	function aAd(aC) {
		return Math.floor(2 * bf.gap + (aV.aAq() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * a03))
	}
	this.dk = function() {
		aAJ = aAK = 0, a86 = [], this.resize()
	}, this.resize = function() {
		aAH = aO.a8o, a03 = aO.fontSize + 5, a03 = Math.floor(1.25 * a03), a1.a2.ik() && (a03 = Math.floor(1.25 * a03)), aAI = Math.floor(.15 * a03), bV.zc.font = aAH, aAG = Math.floor(bV.zc.measureText("02 000 000 0000").width);
		for (var aC = a86.length - 1; 0 <= aC; aC--) aAL(a86[aC]), aAM(aC)
	}, this.nG = function() {
		for (var aC = a86.length - 1; 0 <= aC; aC--) a86[aC].aAN && (a86[aC].aAN = !1, aAM(aC))
	}, this.hm = function(m9, mA) {
		if (2 !== aE.a38 && 0 !== ah.nU[aE.fJ] && !aE.hi && !bD.gv.kH(aE.fJ))
			for (var aAX, aAY, aAZ, aAa = a1.a2.ik() ? a03 : 0, aAb = a1.a2.ik() ? Math.floor(.15 * a03) : 0, aC = a86.length - 1; 0 <= aC; aC--)
				if (aAX = aAc(aC), aAY = aAd(aC), aAZ = a86[aC].canvas.width, aAY - aAb <= mA && mA <= aAY + a03 + aAb) {
					if (aAX - aAa <= m9 && m9 <= aAX + a03 + aAa) return a86[aC].aAW || (a86[aC].aAN = !0, a86[aC].aAW = !0, 0 === a86[aC].id ? bB.hz.r2(a86[aC].k3) : bB.hz.r1(a86[aC].k3)), !0;
					if (0 === a86[aC].id && aAX + aAZ - a03 - aAa <= m9 && m9 <= aAX + aAZ + aAa) return bY.a8X(3), bB.hz.i6(aS.i3(), a86[aC].k3), !0
				} return !1
	}, this.ee = function() {
		var a5j, a5k, h, aAg;
		0 === ah.nU[aE.fJ] || bD.gv.kH(aE.fJ) && !aE.hi || (a5j = a86.slice(0, aAJ), a5k = a86.slice(aAJ, aAJ + aAK), h = a5j, aAg = ae.gg(aE.fJ), function(h, aAg) {
			if (aAJ !== aAg) return 1;
			for (var aC = aAg - 1; 0 <= aC; aC--)
				if (h[aC].k3 !== ae.gl(aE.fJ, aC)) return 1;
			return
		}(h, aAg) ? aAi(h = function(h, aAg) {
			var aC, k3, ft, iI, a9G = [];
			loop: for (aC = 0; aC < aAg; aC++) {
				for (k3 = ae.gl(aE.fJ, aC), ft = 0; ft < h.length; ft++)
					if (h[ft].k3 === k3) {
						a9G.push(h.splice(ft, 1)[0]);
						continue loop
					} iI = ae.gm(aE.fJ, aC), aAL(iI = {
					k3: k3,
					iI: iI,
					aAV: iI,
					id: 0,
					aAN: !0,
					aAW: !1,
					canvas: null,
					ou: null
				}), a9G.push(iI)
			}
			return a9G
		}(h, aAg), aAg) : aAi(h, aAg), a5j = h, a5k = function(h) {
			var aAk = bQ.z.ky[aE.fJ];
			return function(h, aAk) {
				if (aAK !== aAk) return 1;
				for (var ur = aE.fJ << 3, mn = bQ.z.mn, aAo = bQ.z.aAo, aC = aAk - 1; 0 <= aC; aC--) {
					var aAp = aAo[ur + aC];
					if (h[aC].k3 !== mn[aAp]) return 1
				}
				return
			}(h, aAk) ? aAm(h = function(h, aAk) {
				var aC, k3, ft, a9G = [],
					ur = aE.fJ << 3,
					mn = bQ.z.mn,
					a9g = bQ.z.a9g,
					aAo = bQ.z.aAo;
				loop: for (aC = 0; aC < aAk; aC++) {
					var aAp = aAo[ur + aC];
					for (k3 = mn[aAp], ft = 0; ft < h.length; ft++)
						if (h[ft].k3 === k3) {
							a9G.push(h.splice(ft, 1)[0]);
							continue loop
						} aAp = a9g[aAp], aAL(aAp = {
						k3: k3,
						iI: aAp,
						aAV: aAp,
						id: 1,
						aAN: !0,
						aAW: !1,
						canvas: null,
						ou: null
					}), a9G.push(aAp)
				}
				return a9G
			}(h, aAk), aAk) : aAm(h, aAk), h
		}(a5k), aAJ = a5j.length, aAK = a5k.length, a86 = a5j.concat(a5k))
	}, this.xl = function() {
		if (0 !== ah.nU[aE.fJ] && (!bD.gv.kH(aE.fJ) || aE.hi))
			for (var aC = a86.length - 1; 0 <= aC; aC--) xm.drawImage(a86[aC].canvas, aAc(aC), aAd(aC))
	}
}

function cL() {
	var a92, kz, aAr, aAs, k, a8o, fontSize, aAt, aAu, aAv, aAw, canvas, ou, nh, aAx;

	function y1(aC) {
		return L(0 === aC ? 111 : 1 === aC ? 112 : 2 === aC ? 113 : 114)
	}

	function aB4() {
		aE.iT ? aB5 + 4 * bf.gap + k + bk.aB6() > aS.fi ? xm.drawImage(canvas, 2 * bf.gap + bk.aB6(), aB5 + 2 * bf.gap) : xm.drawImage(canvas, bf.gap, aB5 + 3 * bf.gap + bk.aB6()) : xm.drawImage(canvas, bf.gap, aB5 + 2 * bf.gap)
	}

	function aAy() {
		canvas.width = a92[0].width + aAv, canvas.height = k + aAv, (ou = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a92[0].width + aAv, k + aAv), ou.translate(Math.floor(aAv / 2), Math.floor(aAv / 2)), ou.lineWidth = aAv, ou.fillStyle = 1 === a92[0].aB3 ? bE.pT : bE.pL, aB7(), ou.fill(), ou.strokeStyle = 1 === a92[0].aB3 ? bE.pF :
			bE.pO, aB7(), ou.stroke(), bD.sM.textAlign(ou, 1), bD.sM.textBaseline(ou, 1), ou.fillStyle = 1 === a92[0].aB3 ? bE.pF : bE.pO, ou.font = a8o[0], ou.fillText(y1(a92[0].aB2), Math.floor(a92[0].width / 2), Math.floor(.72 * aAt[0] * k)), ou
			.font = a8o[1], ou.fillText(a92[0].s3, Math.floor(a92[0].width / 2), Math.floor((aAt[0] + .48 * aAt[1]) * k))
	}

	function aB7() {
		if (__fx.settings.smoothUI && ou.roundRect) return ou.beginPath(), ou.roundRect(0, 0, a92[0].width, k, .15 * k);
		ou.beginPath(), ou.moveTo(aAw, 0), ou.lineTo(a92[0].width - aAw, 0), ou.lineTo(a92[0].width, aAw), ou.lineTo(a92[0].width, k - aAw), ou.lineTo(a92[0].width - aAw, k), ou.lineTo(aAw, k), ou.lineTo(0, k - aAw), ou.lineTo(0, aAw), ou.closePath()
	}
	this.dk = function() {
		kz = 4, aAr = aAs = nh = 0, a92 = [], a8o = new Array(2), fontSize = new Array(2), (aAt = new Array(2))[0] = .3, aAt[1] = .7, aAu = new Array(4), canvas = document.createElement("canvas"), aAx = bi.eZ + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.ik() ? .062 : .047) * i.il), fontSize[0] = Math.floor(.85 * aAt[0] * k), fontSize[1] = Math.floor(.85 * aAt[1] * k), a8o[0] = bD.sM.u7(1, fontSize[0]), a8o[1] = bD.sM.u7(1, fontSize[1]), aC = aAu.length -
			1; 0 <= aC; aC--) aAu[aC] = this.measureText(y1(aC) + "000", a8o[0]);
		if (aAv = Math.floor(1 + .05 * k), aAw = Math.floor(.2 * k), 0 < a92.length) {
			for (aC = a92.length - 1; 0 <= aC; aC--) j = this.measureText(a92[aC].s3 + "00", a8o[1]), a92[aC].width = j < aAu[aC] ? aAu[aC] : j;
			aAy()
		}
	}, this.ee = function() {
		0 !== kz && (4 === kz ? bi.eZ > aAx && (kz = 0, 1 === aE.a38) && aR.a3V(bV.wG.zX[bV.fF].name, 3, 1, 9) : (1 === kz ? (0 === aAr && (aAy(), aAr = 1e-4), 1 <= (aAr += .002 * (bi.eZ - nh)) && (aAs = 0, kz = 2, aAr = 1), bi.ds = !0) : 2 ===
			kz ? ((aAs += (bi.eZ - nh) / 1e3) > a92[0].nm || 1 < aAs && 1 < a92.length) && (kz = 3) : 3 === kz && ((aAr -= .002 * (bi.eZ - nh)) <= 0 && (aAr = 0, a92.shift(), kz = 0 < a92.length ? 1 : 0), bi.ds = !0), nh = bi.eZ))
	}, this.measureText = function(s3, a8o) {
		return xm.font = a8o, Math.floor(xm.measureText(s3).width)
	}, this.ei = function(aB1, aC) {
		this.a3V(ah.a1c[aB1], aC, 1, 0 === aC ? 3 : 7)
	}, this.a3V = function(s3, aB2, aB3, nm) {
		var j;
		s3.length && (j = (j = this.measureText(s3 + "00", a8o[1])) < aAu[aB2] ? aAu[aB2] : j, a92.push({
			s3: s3,
			width: j,
			aB2: aB2,
			aB3: aB3,
			nm: nm
		}), 0 === kz) && (aAr = 0, kz = 1, nh = bi.eZ)
	}, this.xl = function() {
		0 !== kz && 0 !== aAr && (aAr < 1 ? (xm.globalAlpha = aAr, aB4(), xm.globalAlpha = 1) : aB4())
	}
}

function cu() {
	var k, canvas, ou, aB8, aB9, aBA, aBB, aAN, aBC, aBD, aBE, aBF, a9l = !1,
		a5x = (this.iL = !1, this.j = 0, new Array(2)),
		aBG = 0;

	function nH() {
		var j = ax.j,
			lp = (aAN = !1, a1I(ou, j, k), Math.floor(j / 2));
		1 === aB8 ? (ou.fillStyle = bE.pi, ou.fillRect(lp, 0, lp, k)) : -1 === aB8 && (ou.fillStyle = bE.q0, ou.fillRect(0, 0, lp, k)), a1J(ou, j, k, 2);
		var lp = (lp = Math.floor(.25 * k)) < 2 ? 2 : lp,
			a9v = (ou.fillStyle = bE.pU, Math.floor((k - 4) * aB9[1] / aBA[1]));
		0 < a9v && ou.fillRect(2, k - 2 - a9v, lp, a9v), 0 < (a9v = Math.floor((k - 4) * aB9[0] / aBA[0])) && ou.fillRect(j - 2 - lp, k - 2 - a9v, lp, a9v);
		lp = (lp = Math.floor(k / 8)) < 2 ? 2 : lp, a1L(ou, Math.floor(.4 * k), 0, k, lp, .5, !1), a1L(ou, Math.floor(j - 1.4 * k), 0, k, lp, .5, !0), a9v = 1.1 * k / a5x[0].width;
		ou.imageSmoothingEnabled = !0, ou.setTransform(a9v, 0, 0, a9v, (j - a9v * a5x[0].width) / 2, -.05 * k), ou.drawImage(a5x[+a9l], 0, 0), ou.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aBL() {
		aBF = -1, a9l = ai.aBM(), aO.a7S(257), aO.a9k(a9l), ax.iL = !0, aAN = !0, aBC = 360;
		for (var g1, ea = 0, aC = am.lQ - 1; 0 <= aC; aC--) bD.gv.kH(am.lV[aC]) || (ea += ah.hN[am.lV[aC]]);
		a9l ? aBA[0] = Math.max(bO.g0(3 * ea, 4), 1) : aE.iT ? (g1 = 9 === aE.lC ? 8 === bj.lH[bk.lT()] ? 80 : (g1 = bO.g0(100 * bk.lR(), aE.ke), bO.g0(bO.ij(1550 - 11 * g1, 400, 1e3), 10)) : (g1 = bO.g0(100 * bk.lR(), aE.ke), bO.g0(bO.ij(1600 - 12 *
			g1, 400, 1e3), 10)), g1 = bO.g0(g1 * ea, 100), aBA[0] = Math.max(g1, 1)) : 8 === aE.lC ? aBA[0] = Math.max(bO.g0(3 * ea, 4), 1) : aBA[0] = Math.max(bO.g0(3 * ea, 5), 1), aBA[1] = Math.max(ea - aBA[0], 1)
	}

	function aBH() {
		aBE = bi.kr(), aAN = !0, aBC = aB8 = 0, aBB = [], ax.iL = !1, aO.a3G(247), aB9[0] = aB9[1] = 0, aO.a7S(673)
	}

	function a1F() {
		return aS.a9R(aO.a9N()) ? __fx.settings.keybindButtons ? aS.fi - 2 * (k + bf.gap) : aS.fi - k - bf.gap : bF.a9R(aO.a9Q()) ? bF.a1F() - k - bf.gap : i.k - k - bn.a8D() * bf.gap
	}
	this.dl = function() {
		for (var aC = 0; aC < 2; aC++) a5x[aC] = bD.canvas.a1t(ac.get(3), 8 - aC, bE.qd), a5x[aC] = bD.canvas.a5z(a5x[aC])
	}, this.dk = function() {
		aBE = -1e4, aBD = aBG = 0, aBF = -1, this.iL = !1, aAN = a9l = !1, aB9 = [aB8 = aBC = 0, 0], aBA = [1, 1], aBB = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, ou = canvas.getContext("2d", {
			alpha: !0
		}), nH()
	}, this.nG = function() {
		aAN && nH()
	}, this.hm = function(fg, fi) {
		return !!this.iL && !(fg < i.j - this.j - bf.gap || fi < a1F() || (aE.hi || this.iM(aE.fJ) && (aN.hj && aN.a5F(), bB.hz.iN(fg > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.ee = function() {
		0 < aBD ? 0 === --aBD && aBH() : this.iL ? 180 == --aBC && 3 * aB9[0] < aBA[0] ? aBH() : aB9[0] >= aBA[0] ? a9l ? bU.a2l.a33() : bU.a2l.a37() : aB9[1] >= aBA[1] ? aBD = 4 : aBC <= 0 && aBH() : ! function() {
			var aBO = bi.kr();
			if (aBO % 40 == 14) {
				if (aBG) return !(aBO < aBG) && !(aBO < aBE + 535) && (aBG = aBO + 1071, bD.gv.a6V()) ? (aBL(), 1) : 0;
				(1 === am.lQ || (aE.iT ? bk.lR() : ah.hN[mV[0]]) >= bO.g0(96 * aE.ke, 100)) && (aBG = aBO + 535)
			}
			return
		}() && 0 <= aBF && (aO.a1b(250, L(115, [ah.a1c[aBF]]), 673, aBF, bE.pO, bE.pL, -1, !0), aBL())
	}, this.a39 = function() {
		this.iL && aB9[0] < aBA[0] && aBH()
	}, this.rw = function(player, aBP) {
		var aBQ = L(aBP ? 116 : 117, [ah.a1c[player]]),
			aBQ = (aO.a1b(450, aBQ, 257, player, aBP ? bE.pg : bE.px, bE.pL, -1, !0), aBB.push(player), aAN = !0, aE.lE ? Math.max(aBA[0], aBA[1]) : ah.hN[player]),
			aBQ = Math.max(aBQ, 1);
		aBP ? aB9[0] += aBQ : aB9[1] += aBQ, player === aE.fJ && (aB8 = aBP ? 1 : -1)
	}, this.xl = function() {
		var fi;
		this.iL && (fi = a1F(), xm.drawImage(canvas, i.j - this.j - bf.gap, fi))
	}, this.iO = function(player) {
		if (0 !== aBC) return !1;
		if (!bD.gv.hk(1)) return !1;
		if (!bD.gv.hl(player)) return !1;
		if (10 <= kf[player] && !bD.gv.a6p(player, 9)) return !1;
		if (!aE.lE) {
			player = bi.kr();
			if (player < aBE + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iM = function(h7) {
		if (!bD.gv.hk(1)) return !1;
		if (!bD.gv.hl(h7)) return !1;
		if (!this.iL) return !1;
		for (var aC = aBB.length - 1; 0 <= aC; aC--)
			if (aBB[aC] === h7) return !1;
		return !0
	}, this.iK = function(player) {
		aBF = player
	}
}

function cM() {
	var j, fg, aBS, canvas, ou, iL, jC, a7J, a8o, aAN, aBT = 11 / 12;

	function aBV() {
		var aAU = Math.floor(jC * (j - 2 * aBS)),
			aBY = 1 + Math.floor(.0625 * aS.k),
			aBZ = 1 + Math.floor(.3 * aS.k),
			aBa = Math.floor(.55 * aS.k),
			rounded = (ou.clearRect(0, 0, j, aS.k), ou.fillStyle = bE.pK, ou.fillRect(0, 0, aBS, aS.k), ou.fillRect(aBS + aAU, 0, j - aBS - aAU, aS.k), ou.fillStyle = jC < 1 / 3 ? "rgba(" + Math.floor(3 * jC * 130) + ",130,0,0.85)" : jC < 2 / 3 ?
				"rgba(130," + (130 - Math.floor(3 * (jC - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (jC - 2 / 3) * 130) + ",0.85)", ou.fillRect(aBS, 0, aAU, aS.k), ou.fillStyle = bE.pO, ou.fillStyle = __fx.utils.lineColor(bE.pO),
				__fx.utils.smoothFrame(ou, j, aS.k));
		rounded || (ou.fillRect(0, 0, j, 1), ou.fillRect(0, aS.k - 1, j, 1), ou.fillRect(0, 0, 1, aS.k)), ou.fillRect(aBS, 0, 1, aS.k), ou.fillRect(aBS + aAU, 0, 1, aS.k), ou.fillRect(j - aBS, 0, 1, aS.k), rounded || ou.fillRect(j - 1, 0, 1, aS.k),
			ou.fillStyle = bE.pO, ou.fillRect(Math.floor(.25 * aS.k) + aBZ, Math.floor((aS.k - aBY) / 2), aS.k - 2 * aBZ, aBY), ou.fillRect(Math.floor(j - 1.25 * aS.k) + aBZ, Math.floor((aS.k - aBY) / 2), aS.k - 2 * aBZ - aBZ % 2, aBY), ou.fillRect(
				Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - aBY) / 2), aBZ, aBY, aS.k - 2 * aBZ - aBZ % 2), a7J = bD.gv.jB(aE.fJ, aS.i3()), ou.fillText(bD.tK.a2Q(a7J) + " (" + bD.tK.a7C(100 * jC, +(jC < .1)) + ")", Math.floor(.5 * j), aBa)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		jC = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a5B(arg1);

	function aBf(a5W) {
		return !(1 < a5W && 1 === jC || (1 < a5W && a5W * jC - jC < 1 / 1024 ? a5W = (jC + 1 / 1024) / jC : a5W < 1 && jC - a5W * jC < 1 / 1024 && (a5W = (jC - 1 / 1024) / jC), jC = bO.ij(jC * a5W, 1 / 1024, 1), aBV(), 0))
	}

	function aBg(m9) {
		return jC !== (jC = bO.ij((m9 - fg - aBS) / (j - 2 * aBS), 1 / 1024, 1)) && (aBV(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aBV(), bi.ds = !0
	}, this.fi = 0, this.hn = !1, this.dk = function() {
		iL = !aE.hx && !aE.hi, aAN = !1, jC = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.buffer.data[182].value + 1) / 1024, a7J = 0, this.hn = !1, this.resize()
	}, this.resize = function() {
		a1.a2.ik() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.il), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.ik() ? .65 : .389) * i.il), j += 12 - j % 12, this.k = Math.floor(j / 12)), aBS = Math.floor(3 * this.k / 2), a8o =
			bD.sM.u7(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, xm), canvas.height = this.k, (ou = canvas.getContext("2d", {
				alpha: !0
			})).font = a8o, bD.sM.textBaseline(ou, 1), bD.sM.textAlign(ou, 1), this.aBU(), aBV()
	}, this.aBU = function() {
		fg = a1.a2.ik() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.fi = i.k - this.k - bn.a8D() * bf.gap
	}, this.nG = function() {
		aAN && (aAN = !1, aBV())
	}, this.iL = function() {
		return !(!iL || aN.hj && fg < Math.floor(bf.gap + 5.5 * this.k))
	}, this.a9R = function(aBb) {
		return !!this.iL() && fg + j > i.j - aBb - bf.gap
	}, this.a7Q = function() {
		iL = !aE.hi
	}, this.aBH = function() {
		iL = !1
	}, this.i3 = function() {
		return bO.ij(Math.floor(1024 * jC + .5) - 1, 0, 1023)
	}, this.a58 = function(m9, mA) {
		return this.iL() && fg < m9 && m9 < fg + j && mA > this.fi
	}, this.hm = function(m9, mA) {
		if (!this.iL()) return !1;
		if (!(__fx.settings.keybindButtons && mA > this.fi - Math.floor(bf.gap / 4) - this.k && mA < this.fi - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(m9 - fg))) {
			if (!aS.a58(m9, mA)) return !1;
			aT.o0 = !1, ! function(ts, m9, mA) {
				if (function(m9, mA) {
						return fg < m9 && m9 < fg + aBS && mA > aS.fi
					}(m9, mA)) return aBf(aBT);
				if (function(m9, mA) {
						return fg + j - aBS < m9 && m9 < fg + j && mA > aS.fi
					}(m9, mA)) return aBf(1 / aBT);
				return ts.hn = !0, aBg(m9)
			}(this, m9, mA) || (bi.ds = !0)
		}
		return !0
	}, this.a5B = function(o7) {
		0 !== aE.a38 && this.iL() && aBf(o7) && (bi.ds = !0)
	}, this.a4h = function(deltaY) {
		var o7;
		return !(0 === deltaY || !this.iL()) && aBf(o7 = 0 < deltaY ? (o7 = 400 / (400 + deltaY)) < aBT ? aBT : o7 : 1 / aBT < (o7 = (400 - deltaY) / 400) ? 1 / aBT : o7)
	}, this.a4e = function(m9) {
		return !!this.hn && aBg(m9)
	}, this.a54 = function() {
		this.hn = !1
	}, this.ee = function() {
		this.iL() && a7J !== bD.gv.jB(aE.fJ, this.i3()) && (aAN = !0)
	}, this.xl = function() {
		this.iL() && (xm.drawImage(canvas, fg, this.fi), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(xm, fg, this.fi)
	}
}

function d6() {
	var canvas, ou, aBh, font, aBi = 0,
		aBj = !1,
		aBk = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aBl = 5;

	function aBs() {
		if (aBj) {
			var aC, fZ = aBk.length,
				aBa = Math.floor(.5 * aBh.k),
				k = fZ * aBa,
				fg = Math.floor(Math.floor(aBh.fg) + .3 * aBh.j - .5),
				fi = Math.floor(Math.floor(aBh.fi) - k),
				j = Math.floor(.4 * aBh.j + 2.5);
			for (xm.fillStyle = bE.pK, xm.fillRect(fg, fi, j, k), xm.fillStyle = bE.pn, xm.fillRect(fg, fi + aBl * aBa, j, aBa), xm.fillStyle = bE.pO, xm.fillRect(fg, fi, 2, k), xm.fillRect(fg, fi, j, 2), xm.fillRect(fg + j - 2, fi, 2, k), aC =
				1; aC < fZ; aC++) xm.fillRect(fg, fi + aC * aBa, j, 2);
			for (xm.fillStyle = bE.pO, bD.sM.textAlign(xm, 1), bD.sM.textBaseline(xm, 1), xm.font = bD.sM.u7(0, .6 * aBa), fg += .5 * j, aC = 0; aC < fZ; aC++) xm.fillText(aC0(aC), fg, fi + (aC + .6) * aBa)
		}
		xm.drawImage(canvas, Math.floor(aBh.fg), Math.floor(aBh.fi))
	}

	function nH(ts) {
		var fg, nv, nw, aBa;
		ou.clearRect(0, 0, Math.floor(aBh.j), Math.floor(aBh.k)), ou.fillStyle = bE.pK, ou.fillRect(0, 0, Math.floor(aBh.j), Math.floor(aBh.k)), aE.ny && (ou.fillStyle = bE.pn, ou.fillRect(0, 0, Math.floor(.3 * aBh.j), Math.floor(aBh.k))), ou
			.fillStyle = bE.pO, ou.fillText("Hide UI", .15 * aBh.j, .5 * aBh.k), ou.fillRect(Math.floor(.3 * aBh.j - .5), 0, 2, Math.floor(aBh.k)), fg = .5 * aBh.j, ou.fillText("Replay Speed", fg, .31 * aBh.k), ou.fillText(aC0(aBl), fg, .69 * aBh.k),
			ou.fillRect(Math.floor(.7 * aBh.j - .5), 0, 2, Math.floor(aBh.k)), ts.a7x ? (fg = Math.floor(.02 * aBh.j), ts = Math.floor(.025 * aBh.j), nv = Math.floor(.85 * aBh.j - fg - .5 * ts), nw = Math.floor(.25 * aBh.k), aBa = Math.floor(aBh.k) -
				2 * nw, ou.fillRect(nv, nw, fg, aBa), ou.fillRect(nv + fg + ts, nw, fg, aBa)) : function() {
				var j = Math.floor(.46 * aBh.k),
					k = Math.floor(.23 * aBh.k),
					fg = Math.floor(.85 * aBh.j - .5 * j + j / 12),
					fi = Math.floor(.5 * aBh.k - k);
				ou.beginPath(), ou.moveTo(fg, fi), ou.lineTo(fg + j, fi + k), ou.lineTo(fg, fi + (k << 1)), ou.fill()
			}(), ou.fillRect(0, 0, Math.floor(aBh.j), 2), ou.fillRect(0, 0, 2, Math.floor(aBh.k)), ou.fillRect(0, Math.floor(aBh.k) - 2, Math.floor(aBh.j), 2), ou.fillRect(Math.floor(aBh.j - 2), 0, 2, Math.floor(aBh.k))
	}

	function aC0(aC) {
		return 5 === aC ? "Normal" : "" + aBk[aC]
	}
	this.a7x = !1, this.dk = function() {
		aE.hi && (aBl = 5, this.a7x = !1, aBj = !1, aBh = new sw([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aBm = function() {
		return aBk[aBl]
	}, this.a1F = function() {
		return aBh.fi
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a7x,
		fxGetSpeedIndex: () => aBl,
		fxSetSpeedIndex: index => {
			aBl = index, this.resize()
		},
		fxGetPanelTop: () => aBh && aBh.fi
	}, this.a9R = function(aBb) {
		return !!aE.hi && aBh.fg + aBh.j > i.j - aBb - bf.gap
	}, this.resize = function() {
		aE.hi && (aBh.resize(), aBh.fi -= (bn.a8D() - 1) * bf.gap, font = bD.sM.u7(0, .3 * aBh.k), (canvas = document.createElement("canvas")).width = Math.floor(aBh.j), canvas.height = Math.floor(aBh.k), (ou = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.sM.textAlign(ou, 1), bD.sM.textBaseline(ou, 1), nH(this))
	}, this.a5E = function(aBn) {
		0 === aE.a38 || u.iL() || aBn !== aE.ny && (aE.ny = aBn, bk.resize(), bi.ds = !0, aE.hi) && (aBi = bi.eZ + 2e3, nH(this))
	}, this.hm = function(fg, fi) {
		if (!aE.hi) return !1;
		if (fg < aBh.fg || fi < aBh.fi || fg > aBh.fg + aBh.j) return aBj && function(ts, fg, fi) {
			var fZ = aBk.length,
				aBa = Math.floor(.5 * aBh.k),
				k = fZ * aBa,
				nv = Math.floor(Math.floor(aBh.fg) + .3 * aBh.j - .5),
				k = Math.floor(Math.floor(aBh.fi) - k),
				j = Math.floor(.4 * aBh.j + 2.5);
			return aBj = !1, bi.ds = !0, fg < nv || nv + j < fg || fi < k || (aBl = aBr(0, Math.floor((fi - k) / aBa), fZ - 1), nH(ts)), !0
		}(this, fg, fi);
		if ((fg -= aBh.fg) < .3 * aBh.j) aBj = !1, this.a5E(!aE.ny);
		else {
			if (fg < .7 * aBh.j) return aBj = !aBj, bi.ds = !0;
			this.a5G(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a5G(!0), this.a5G = function(aBp) {
		2 === aE.a38 ? (this.a5E(!1), u.v(3)) : (aBj = !1, this.a7x = !this.a7x, this.a7x ? (aN.hj && aN.a5F(), a1.a2.setState(1)) : aBp || aN.a8v(), bi.ds = !0, nH(this))
	}, this.aBq = function() {
		this.a7x = !1, aN.a8v(), bi.ds = !0, nH(this)
	}, this.a4x = function(fg, fi) {
		return !!aE.ny && (0 <= aN.hm(fg, fi) || (aE.hi ? ((bi.eZ > aBi || !this.hm(fg, fi)) && aT.hm(fg, fi), bi.ds = !0, aBi = bi.eZ + 2e3) : aT.hm(fg, fi)), !0)
	}, this.ee = function() {
		aE.hi && aE.ny && bi.eZ > aBi - 1e3 && bi.eZ < aBi && (bi.ds = !0)
	}, this.a3H = function() {
		aE.hi && (this.a7x = !1, bi.ds = !0, nH(this))
	}, this.xl = function() {
		if (aE.hi) {
			if (aE.ny) {
				if (bi.eZ > aBi) return;
				if (bi.eZ > aBi - 1e3) return xm.globalAlpha = aBr(0, (1e3 - (bi.eZ - (aBi - 1e3))) / 1e3, 1), aBs(), void(xm.globalAlpha = 1)
			}
			aBs()
		}
	}
}

function cN() {
	var aC1, aC2, j, fg, fi, aC3, aC4;
	this.dk = function() {
		aC1 = new Array(2), aC2 = new Array(2), this.o0 = !1, aC4 = aC3 = jE = jD = 0, im = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.ik() ? .072 : .0502) * i.il)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aC1[aC] = document.createElement("canvas"), aC1[aC].width = j, aC1[aC].height = j, aC2[aC] = aC1[aC].getContext("2d", {
			alpha: !0
		});
		this.aBU(),
			function() {
				for (var aCL = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aC2[aC].clearRect(0, 0, j, j), aC2[aC].fillStyle = bE.pH, aC2[aC].beginPath(), aC2[aC].arc(j / 2, j / 2, j / 2 - aCL, 0, 2 * Math.PI), aC2[aC].fill(), aC2[aC]
					.lineWidth = aCL, aC2[aC].fillStyle = bE.pO, aC2[aC].strokeStyle = bE.pO, aC2[aC].strokeStyle = __fx.utils.lineColor(bE.pO), aC2[aC].beginPath(), aC2[aC].arc(j / 2, j / 2, j / 2 - aCL, 0, 2 * Math.PI), aC2[aC].stroke(), a1L(
						aC2[aC], 0, 0, j, aCL, .3, 0 === aC)
			}()
	}, this.a1E = function() {
		return -jD / im
	}, this.a1F = function() {
		return -jE / im
	}, this.oA = function(aC8, it) {
		jD = im * aC8 - it
	}, this.oB = function(aC9, iu) {
		jE = im * aC9 - iu
	}, this.hm = function(aC7, a9S) {
		return aE.ny || ! function(aC7, a9S) {
			return Math.pow(aC7 - (fg + j / 2), 2) + Math.pow(a9S - (fi + j / 2), 2) < j * j / 4 || Math.pow(aC7 - (fg + j / 2), 2) + Math.pow(a9S - (fi + 2 * j), 2) < j * j / 4
		}(aC7, a9S) || bm.buffer.data[8].value ? (aI.oD() && (this.o0 = !0, aC3 = aC7, aC4 = a9S), !1) : a9S < fi + 1.25 * j ? this.a4h(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a4h(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a4e = function(aC7, a9S) {
		var aCA, aCB, iw, iz;
		return !aI.oD() || (aCA = jD, aCB = jE, jD += iw = aC3 - aC7, jE += iz = aC4 - a9S, ag.a4e(iw, iz), this.aCC(), aC3 = aC7, aC4 = a9S, aCA !== jD) || aCB !== jE
	}, this.a4h = function(m9, mA, deltaY) {
		var o7;
		if (aI.oD()) {
			if (0 < deltaY) o7 = (o7 = 500 / (500 + deltaY)) < .5 ? .5 : o7;
			else {
				if (!(deltaY < 0)) return !1;
				o7 = 2 < (o7 = (500 - deltaY) / 500) ? 2 : o7
			}
			this.aCD(m9, mA, o7), bi.ds = !0
		}
		return !0
	}, this.aCD = function(fg, fi, fD) {
		var a5W;
		fD = a5W = (a5W = 1024 < (a5W = fD) * im ? 1024 / im : a5W) * im < .125 ? .125 / im : a5W, ag.zoom(fD, fg, fi),
			function(a5W, m9, mA) {
				im *= a5W, jD = (jD + m9) * a5W - m9, jE = (jE + mA) * a5W - mA, aT.aCC()
			}(fD, fg, fi)
	}, this.aCC = function() {
		var aCG = i.j / 16,
			aCH = 0,
			aCI = i.k / 16,
			aCJ = 0;
		jD < -i.j + aCG && (aCH = -i.j + aCG - jD), jD > im * bV.fk - aCG && (aCH = im * bV.fk - aCG - jD), jE < -i.k + aCI && (aCJ = -i.k + aCI - jE), jE > im * bV.fl - aCI && (aCJ = im * bV.fl - aCI - jE), jD += aCH, jE += aCJ, bd.oC(), ag.aCK(
			aCH, aCJ)
	}, this.aBU = function() {
		fg = i.j - j - bf.gap, fi = Math.floor(i.k / 2 - 1.25 * j)
	}, this.xl = function() {
		bm.buffer.data[8].value || (xm.drawImage(aC1[0], fg, fi), xm.drawImage(aC1[1], fg, Math.floor(fi + 3 * j / 2)))
	}
}

function cO() {
	var h, aCM, aCN, aCO, gap, aCP, aCQ, aCR, aCS, aCT, a8o, aCU, he, aCV, aAU, aCW, aCX;

	function aCb() {
		aCO = Math.floor(.2 * (a1.a2.ik() ? .07 : .035) * i.il), aCO = a9P(a1.a2.ik() ? 3 : 1, aCO);
		var aCe = i.j / (h.length + gap);
		aCO = aCO < aCe ? aCe : aCO, aAU = Math.floor((1 - gap) * aCO), aCM = 0, aCf()
	}

	function aCf() {
		aCM = (aCM = aCM < -20 ? -20 : aCM) > (h.length - 15) * aCO ? (h.length - 15) * aCO : aCM, aCQ = Math.floor(aCM / aCO), aCR = (aCR = aCQ + Math.floor(i.j / aCO)) > h.length - 1 ? h.length - 1 : aCR, aCQ = (aCQ = aCR < aCQ ? aCR : aCQ) < 0 ?
			0 : aCQ;
		var lp = aCR;
		aCP = aCN / h[lp];
		for (var aC = aCR - 1; aCQ <= aC; aC--) h[aC] > h[lp] && (lp = aC, aCP = aCN / Math.pow(h[aC], aCV))
	}

	function aCi(fg) {
		fg = Math.floor((aCM + i.j - fg - gap * aCO) / aCO);
		return (fg = fg < -1 ? -1 : -1 === fg ? 0 : fg > h.length - 1 ? -1 : fg) !== aCS && (aCS = fg, -1 === aCW && 0 === aCS && aU.aCY && (aCW = setInterval(aCj, 100)), 1)
	}

	function aCk(aC) {
		var aCm = Math.floor(aCP * Math.pow(h[aC], aCV));
		xm.fillRect(aCM + i.j - (aC + 1) * aCO, i.k - aCm, aAU, aCm)
	}

	function aCj() {
		var h7;
		0 !== (aCS = 8 === ab.a4H() ? -1 : aCS) ? (aCX = (new Date).getTime(), clearInterval(aCW), aCW = -1) : (h7 = h[1] / 864e3, -1 !== aCX && (h7 += ((new Date).getTime() - aCX) * h[1] / 864e5, aCX = -1), 0 < h7 && (h[0] += Math.floor(h7), bi
			.ds = !0))
	}
	this.aCY = !1, this.dk = function() {
		aCX = aCW = -1, aCS = -(aCV = 1), this.aCZ = !1, he = 0, aCU = new Date, aCM = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aCN = Math.floor(.15 * i.k), aCT = (aCT = Math.floor((a1.a2.ik() ? .018 : .0137) * i.il)) < 2 ? 2 : aCT, a8o = bD.sM.u7(1, aCT), aCb()
	}, this.aCc = function(aCd) {
		var aC;
		for (this.aCY = !0, aC = 0; aC < aCd.length; aC++) h.unshift(aCd[aC]);
		aCb(), bi.ds = !0
	}, this.aCg = function() {
		aCf()
	}, this.a4e = function(fg, fi) {
		fi > i.k - .6 * aCN ? this.aCZ ? fg !== he && (aCM += fg - he, he = fg, aCf(), aCi(fg), this.aCZ = -1 !== aCS, bi.ds = !0) : aCi(fg) && (bi.ds = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aCS && (this.aCZ = !1, aCS = -1, bi.ds = !0)
	}, this.a4h = function(fg, deltaY) {
		-1 !== aCS && (aCM += Math.floor(deltaY), aCf(), aCi(fg), bi.ds = !0)
	}, this.hm = function(fg, fi) {
		this.a4e(fg, fi), -1 !== aCS && (he = fg, this.aCZ = !0)
	}, this.a53 = function() {
		-1 !== aCS && (this.aCZ = !1)
	}, this.xl = function() {
		xm.fillStyle = bE.pR;
		for (var aCn, month, ea, uf, aCq, aCr, nw, aCs, aCt, aC = aCR; aCQ <= aC; aC--) aCk(aC);
		this.aCY && 0 === aCQ && (xm.fillStyle = bE.q0, aCk(0)), -1 !== aCS && (xm.fillStyle = bE.pQ, aCk(aCS)), -1 !== aCS && (xm.font = a8o, bD.sM.textBaseline(xm, 2), (ea = new Date).setTime(aCU.getTime() - 1e3 * aCS * 60 * 60 * 24), month =
			"month", aCn = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(ea), aCn = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(ea)), aCn = aCn + ", " + ea.getUTCDate() + " " + month + " " + ea.getFullYear(), month = 1 === h[aCS] ? L(118) : L(119), month = bD.tK.a2Q(h[aCS]) + " " + month, ea = Math.floor(xm.measureText(aCn).width), uf = Math
			.floor(xm.measureText(month).width), aCq = Math.floor(.5 * (ea + aCT)), aCr = (aCr = aCM + i.j - (aCS + 1) * aCO) < aCq ? aCq : aCr > i.j - aCq ? i.j - aCq : aCr, nw = i.k - Math.floor(aCP * Math.pow(h[aCS], aCV)), aCs = Math
			.floor(1.1 * aCT), aCt = nw > i.k - aCs ? i.k - aCs : nw, xm.fillStyle = bE.pL, xm.fillRect(i.j - uf - aCT, aCt - aCs, uf + aCT, aCs), xm.fillRect(aCr - aCq, i.k - aCs, ea + aCT, aCs), xm.fillStyle = bE.pO, bD.sM.textAlign(xm, 2),
			xm.fillText(month, Math.floor(i.j - .5 * aCT), aCt), bD.sM.textAlign(xm, 1), xm.fillText(aCn, aCr, i.k), xm.strokeStyle = bE.pS, xm.lineWidth = 1, xm.beginPath(), xm.moveTo(0, nw), xm.lineTo(i.j, nw), xm.closePath(), xm.stroke())
	}
}

function cP() {
	var a8o, j, fi, aCu, aCv, aCw, canvas, ou, aAN, a6c, aCx, aCy, aCz, aD0;
	this.fg = 0, this.k = 0, this.dk = function() {
		aCw = aE.a7Y, aCy = "rgba(0,100,0,0.8)", aCz = "rgba(150,0,0,0.8)", aAN = aCx = !0, a6c = ah.hb[aE.fJ], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.ik() ? .305 : .24) * i.il), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), a8o = bD.sM.u7(1, Math.floor(.8 * this.k)), aCv = bD.sM.u7(1, Math.floor(.45 * this.k)), aD0 = Math.floor(.5 * this.k), bV.zc
			.font = a8o, fi = bf.gap, aCu = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, ou = canvas.getContext("2d", {
				alpha: !0
			}), bD.sM.textBaseline(ou, 1), bD.sM.textAlign(ou, 1), this.aD1()
	}, this.aAq = function() {
		return a1.a2.ik() && i.j < 1.2 * i.k
	}, this.aBU = function() {
		this.aAq() ? this.fg = i.j - j - bf.gap : this.fg = Math.floor(aW.aD2() + (i.j - aW.aD2() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.nG = function() {
		aAN && (aAN = !1, this.aD1())
	}, this.aD1 = function() {
		ou.font = a8o, ou.clearRect(0, 0, j, this.k), ou.fillStyle = aCx ? aCy : aCz, ou.fillRect(0, 0, j, this.k), ou.fillStyle = bE.pQ;
		var ej = this.aD3(),
			aD5 = (this.aD4(), ou.fillStyle = ah.hb[aE.fJ] >= af.ka(aE.fJ) ? bE.px : bE.pO, bD.tK.a2Q(a6c)),
			aD5 = (ou.fillText(aD5, Math.floor(j / 2), aD0), ou.measureText(aD5).width),
			aD6 = (ou.font = aCv, ou.fillStyle = 9 === ej ? bE.qX : bE.pO, af.aD7),
			aD8 = "+" + aD6,
			uf = ou.measureText(aD8).width,
			aD9 = Math.floor(this.k / 12),
			aD5 = .5 * (j + aD5) + aD9;
		(aD5 + uf + aCu <= j || 1e3 <= aD6 && (aD8 = "+" + Math.floor(aD6 / 1e3) + "K", aD5 + (uf = ou.measureText(aD8).width) + aCu <= j)) && ou.fillText(aD8, Math.floor(aD5 + .5 * uf), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && ou.fillText(9 - ej, Math.floor(2 * aCu + aD9), Math.floor(.3 * this.k)), ou.fillStyle = bE.pO, __fx.utils.smoothFrame(ou, j, this.k) || (ou.fillRect(0, 0, j, 1), ou.fillRect(0, 0, 1, this.k), ou.fillRect(0, this
				.k - 1, j, 1), ou.fillRect(j - 1, 0, 1, this.k))
	}, this.aD3 = function() {
		var ej = bi.kr() % 100,
			a0H = (ej = 9 - bO.g0(ej -= ej % 10, 10), Math.floor(ej * (this.k - aCu) / 9));
		return ou.fillRect(0, a0H, aCu, this.k - a0H), ou.fillRect(j - aCu, a0H, aCu, this.k - a0H), ej
	}, this.aD4 = function() {
		ou.fillRect(aCu, this.k - aCu, Math.floor((j - 2 * aCu) * ah.hb[aE.fJ] / aCw), aCu)
	}, this.ee = function() {
		var h7 = aE.fJ;
		bD.gv.hl(h7) && (h7 = ah.hb[h7] - ah.a6b[h7], a6c !== h7 ? (aCw = a9P(h7, aCw), aCx = a6c < h7 && 10 <= h7, a6c = h7, aAN = !0) : bi.kr() % 10 == 9 && (aAN = !0))
	}, this.xl = function() {
		0 === ah.nU[aE.fJ] || aE.hx || 2 === ah.a6S[aE.fJ] || xm.drawImage(canvas, this.fg, fi)
	}
}

function cQ() {
	var aDA, aDB, aDC, aDD, aDE, aDF, aDG, aDH, aDI, aDJ, aDK, aDL, aDM, aDN, aDO, aDP, aDQ, aDR, aDS, aDT, aDU, aDV, position, aDW, aDX, aDY, aDZ, aDa, aDb = 1,
		aDc = 1,
		aDd = "";
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

	function aDf() {
		aDG.clearRect(0, 0, aDA, aB5),
			aDG.fillStyle = aDa ? bE.qK : bE.qG,
			aDG.fillRect(0, 0, aDA, aDL),
			aDG.fillStyle = bE.pK,
			aDG.fillRect(0, aDL, aDA, aB5 - aDL);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aDE)
				position = (rivalsCount > aDE ? rivalsCount : aDE) - aDE;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kf[aE.fJ]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aDV = -1;
		if (__fx.leaderboardFilter.enabled && aDV >= __fx.leaderboardFilter.filteredLeaderboard.length) aDV = -1;
		if (__fx.leaderboardFilter.showingRivals && aDV + position >= __fx.leaderboardFilter.rivalsData.length) aDV = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= position && ownClanIndex < position + aDE) aDh(ownClanIndex - position, bE.pn);
			})() :
			(playerPos >= position && aDh(playerPos - position, bE.pn),
				0 !== kf[aE.fJ] && 0 === position && aDh(0, bE.qO))
		),
		-1 !== aDV && aDh(aDV, bE.pP),
			aDG.fillStyle = bE.pK,
			//console.log("drawing", aDV),
			aDG.clearRect(0, aB5 - __fx.leaderboardFilter.tabBarOffset, aDA, __fx.leaderboardFilter.tabBarOffset);
		aDG.fillRect(0, aB5 - __fx.leaderboardFilter.tabBarOffset, aDA, __fx.leaderboardFilter.tabBarOffset);
		aDG.fillStyle = __fx.utils.lineColor(bE.pO),
			aDG.fillRect(0, aDL, aDA, 1),
			aDG.fillRect(0, aB5 - __fx.leaderboardFilter.tabBarOffset, aDA, 1),
			__fx.leaderboardFilter.drawTabs(aDG, aDA, aB5 - __fx.leaderboardFilter.tabBarOffset, bE.pn),
			__fx.utils.smoothFrame(aDG, aDA, aB5, bf.a27) || (
				aDG.fillRect(0, 0, aDA, bf.a27),
				aDG.fillRect(0, 0, bf.a27, aB5),
				aDG.fillRect(aDA - bf.a27, 0, bf.a27, aB5),
				aDG.fillRect(0, aB5 - bf.a27, aDA, bf.a27)),
			aDG.fillStyle = bE.pO, aDG.font = aDB, bD.sM.textBaseline(aDG, 1), bD.sM.textAlign(aDG, 1), aDG.fillText(aDd, Math.floor((aDA + aDL - 22) / 2), Math.floor(aDJ + aDC / 2));
		__fx.playerList.drawButton(aDG, 12, 12, aDL - 22);
		var fs, h8 = playerPos < position + aDE - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) h8 = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aDE; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ah.hN[repId], ah.a1c[repId], ah.a6S[repId]]);
					ah.hN[repId] = rivalsEntry.territory;
					ah.a1c[repId] = "[" + rivalsEntry.clan + "]";
					ah.a6S[repId] = 0;
				}
				for (aDG.font = aDD, bD.sM.textAlign(aDG, 0), fs = aDE - h8; 0 <= fs; fs--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[fs + position];
					if (rivalsEntryLeft !== undefined)
						aDi(rivalsEntryLeft.representativeId), aDj(fs, fs + position, rivalsEntryLeft.representativeId);
				}
				for (bD.sM.textAlign(aDG, 2), fs = aDE - h8; 0 <= fs; fs--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[fs + position];
					if (rivalsEntryRight !== undefined)
						aDi(rivalsEntryRight.representativeId), aDk(fs, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hN[entry[0]] = entry[1];
					ah.a1c[entry[0]] = entry[2];
					ah.a6S[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aDE)
				position = (result.length > aDE ? result.length : aDE) - aDE;
			//if (position >= result.length) position = result.length - 1;
			for (aDG.font = aDD, bD.sM.textAlign(aDG, 0), fs = aDE - h8; 0 <= fs; fs--) {
				const pos = result[fs + position];
				if (pos !== undefined)
					aDi(mV[pos]), aDj(fs, pos, mV[pos]);
			}
			for (bD.sM.textAlign(aDG, 2), fs = aDE - h8; 0 <= fs; fs--) {
				const pos = result[fs + position];
				if (pos !== undefined)
					aDi(mV[pos]), aDk(fs, mV[pos]);
			}
		} else {
			for (aDG.font = aDD, bD.sM.textAlign(aDG, 0), fs = aDE - h8; 0 <= fs; fs--)
				aDi(mV[fs + position]), aDj(fs, fs + position, mV[fs + position]);
			for (bD.sM.textAlign(aDG, 2), fs = aDE - h8; 0 <= fs; fs--)
				aDi(mV[fs + position]), aDk(fs, mV[fs + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == h8 && (aDi(aE.fJ), bD.sM.textAlign(aDG, 0), aDj(aDE - 1, kf[aE.fJ], aE.fJ), bD.sM.textAlign(aDG, 2), aDk(aDE - 1, aE.fJ)), 0 === position && (h8 = .7 * aDM / ac.get(4).height, aDG.setTransform(
			h8, 0, 0, h8, Math.floor(aDN + .58 * aDM + .5 * h8 * ac.get(4).width), Math.floor(aDJ + aDC + .4 * aDM)), aDG.imageSmoothingEnabled = !0, aDG.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aDG.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aDi(player) {
		aE.iT && (aDG.fillStyle = bj.aDm[bj.aDn[player]])
	}

	function aDh(aC, aDo) {
		aDG.fillStyle = aDo, aC = aDE - 1 < aC ? aDE - 1 : aC;
		aDo = Math.floor((aC === aDE - 1 ? 2 : 0 === aC ? 1.15 : 1) * aDM), aDo = aC === aDE - 2 ? Math.floor(aDL + 9.15 * aDM) - Math.floor(aDL + 8.15 * aDM) : aDo;
		aDG.fillRect(0, Math.floor(aDL + (aC + (0 === aC ? 0 : .15)) * aDM), aDA, aDo)
	}

	function aDj(yo, a6r, aC) {
		aDG.fillText(aDR[a6r], aDN, Math.floor(aDJ + aDC + (yo + .5) * aDM)), 1 === ah.a6S[aC] && (aDG.font = "italic " + aDD);
		a6r = Math.floor(aDJ + aDC + (yo + .5) * aDM);
		aDG.fillText(ah.a1c[aC], aDO, a6r), 0 !== ah.a6S[aC] && (aDG.font = aDD), aC < aE.ku && 2 !== ah.a6S[aC] || aDG.fillRect(aDO, a6r + .35 * aDb, aDQ[aC], Math.max(1, .1 * aDb))
	}

	function aDk(yo, aC) {
		aDG.fillText(ah.hN[aC], aDP, Math.floor(aDJ + aDC + (yo + .5) * aDM))
	}
	this.dk = function() {
		var aC;
		for (u.z.uR[0] = 0, aDZ = aDY = aDW = 0, aDa = aDX = !1, aDV = -1, aDE = a1.a2.ik() ? 6 : 10, aDc = (position = 0) === (aDc = bm.buffer.data[11].value) ? 10 : 1 === aDc ? 5 : 1, aDU = !1, aDS = new Uint16Array(aDE + 1), aDT =
			new Uint32Array(aDE + 1), aDI = aE.fW, mV = new Uint16Array(aDI), kf = new Uint16Array(aDI), aC = aDI - 1; 0 <= aC; aC--) mV[aC] = aC, kf[aC] = aC;
		this.resize(!0), aDQ = new Uint16Array(aE.fW);
		var aDe = Math.floor(aDA - aDO - aDN - aDH);
		for (aDR = new Array(aE.fW), aDG.font = aDD, aC = aE.fW - 1; 0 <= aC; aC--) aDR[aC] = aC + 1 + ".", ah.a1c[aC] = bD.ou.a6B(ah.a3o[aC], aDD, aDe), aDQ[aC] = Math.floor(aDG.measureText(ah.a1c[aC]).width);
		aDf()
	}, this.resize = function(dk) {
		if (aB5 = a1.a2.ik() ? (aDA = Math.floor(.335 * i.il), Math.floor(aDE * aDA / 8)) : (aDA = Math.floor(.27 * i.il), Math.floor(aDE * aDA / 10)), aDA = Math.floor(.97 * aDA), (aDF = document.createElement("canvas")).width = aDA, aDF
			.height = aB5, aDG = aDF.getContext("2d", {
				alpha: !0
			}), aDJ = .025 * aDA, aDC = .16 * aDA, aDK = 0 * aDA, aDL = Math.floor(.45 * aDJ + aDC), aDM = (aB5 - aDC - 2 * aDJ - aDK) / aDE,
			aDF.height = aB5 += aDM, __fx.leaderboardFilter.tabBarOffset = Math.floor(aDM * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aB5 - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aDA,
			aDB = bD.sM.u7(1, Math.floor(.55 * aDC)), aDb = Math.floor((a1.a2.ik() ? .67 : .72) * aDM), aDD = bD.sM.u7(0, aDb), aDG.font = aDD, aDN = Math.floor(.04 * aDA), aDO = Math.floor((a1.a2.ik() ? .195 : .18) * aDA), aDH = Math.floor(aDG
				.measureText("00920600").width), aDG.font = aDB, aDP = aDA - aDN, !dk) {
			aDG.font = aDD;
			for (var aC = aE.fW - 1; 0 <= aC; aC--) aDQ[aC] = Math.floor(aDG.measureText(ah.a1c[aC]).width);
			aDf()
		}
		aDd = bD.ou.a6B(L(120), aDB, .96 * aDA)
	}, this.aD2 = function() {
		return aDA
	}, this.nG = function(by, aDg) {
		(aDg || aDU && (by || bi.kr() % aDc == 0)) && (aDU = !1, aDf())
	}, this.ee = function() {
		! function() {
			for (var fs = aDI - 1; 0 <= fs; fs--) 0 === ah.nU[mV[fs]] && ! function(fs) {
				var aDw = mV[fs];
				aDI--;
				for (var aC = fs; aC < aDI; aC++) mV[aC] = mV[aC + 1], kf[mV[aC]] = aC;
				mV[aDI] = aDw, kf[mV[aDI]] = aDI
			}(fs)
		}();
		for (var aDu, oD = aDI - 1, fs = 0; fs < oD; fs++) ah.hN[mV[fs]] < ah.hN[mV[fs + 1]] && (aDu = mV[fs], mV[fs] = mV[fs + 1], mV[fs + 1] = aDu, kf[mV[fs]] = fs, kf[mV[fs + 1]] = fs + 1);
		! function() {
			for (var ea = aDU, h8 = (aDU = !0, kf[aE.fJ] >= aDE - 1 ? aDE - 2 : aDE - 1), aC = h8; 0 <= aC; aC--)
				if (aDS[aC] !== mV[aC] || aDT[aC] !== ah.hN[mV[aC]]) return;
			(h8 != aDE - 2 || aDS[aDE] === kf[aE.fJ] && aDT[aDE] === ah.hN[aE.fJ]) && (aDU = ea)
		}();
		for (var aC = aDE - 1; 0 <= aC; aC--) aDS[aC] = mV[aC], aDT[aC] = ah.hN[mV[aC]];
		aDS[aDE] = kf[aE.fJ], aDT[aDE] = ah.hN[aE.fJ];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hm = function(fg, fi) {
		if (a26(fg, fi)) {
			if (__fx.utils.isPointInRectangle(fg, fi, bf.gap + 12, bf.gap + 12, aDL - 22, aDL - 22)) __fx.playerList.display(ah.a3o);
			else {
				if (fi - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fg - bf.gap);
				fg = aDy(fi);
				0 <= fg ? (aDW = bi.eZ, aDX = !0, aDY = aDZ = fg, bM.a5H() && (fg = aBr(-1, aDZ, aDE), aDV !== (fg = fg === aDE ? -1 : fg)) && (aDV = fg, aDf(), bi.ds = !0)) : (aDa && (aDa = !1, aDf(), bi.ds = !0), u.v(10, 0, new aDz({
					aE0: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aDf(), bi.ds = !0
	};

	function aDy(fi) {
		return (fi -= bf.gap + aDL) < 0 ? Math.floor(fi / aDM) - 1 : fi < (aDE - 1) * aDM ? Math.floor(fi / aDM) : fi < aB5 - aDL ? aDE - 1 : (fi -= aB5 - aDL, aDE + Math.floor(fi / aDM))
	}

	function a26(fg, fi) {
		return fg >= bf.gap && fg < bf.gap + aDA && fi >= bf.gap && fi < bf.gap + aB5
	}
	this.a4e = function(fg, fi) {
		var ea, aDx;
		if (__fx.utils.isPointInRectangle(fg, fi, bf.gap + 12, bf.gap + 12, aDL - 22, aDL - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fg, fi, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fg - bf.gap)) return aDx = aDy(fi), fg = a26(fg, fi), fi = !(!(aDx < 0 && fg) || bM.a5H()), aDX ? (ea = position, (position = aBr(0, position += aDY - aDx, aE.fW - aDE)) !== ea ? (aDa = fi,
			aDx = aBr(-1, aDY = aDx, aDE), aDV = aDx = aDx !== aDE && fg ? aDx : -1, aDf(), bi.ds = !0) : aDa !== fi && (aDa = fi, aDf(), bi.ds = !0), !0) : (aDx = (aDx = aBr(-1, aDx, aDE)) === aDE || !fg || bM.a5H() ? -1 : aDx, (aDV !==
			aDx || aDa !== fi) && (aDV = aDx, aDa = fi, aDf(), bi.ds = !0))
	}, this.a53 = function(fg, fi) {
		if (!aDX) return !1;
		aDX = !1;
		var aDx = aDy(fi);
		var isEmptySpace = false;
		return bM.a5H() && -1 !== aDV && (aDV = -1, aDf(), bi.ds = !0), bi.eZ - aDW < 350 && aDZ === aDx && -1 !== (aDx = (aDx = aBr(-1, aDx, aDE)) !== aDE && a26(fg, fi) ? aDx : -1) && (fg = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aDx + position] === undefined, __fx.leaderboardFilter.rivalsData[aDx + position]?.representativeId ?? aE.fJ) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), mV[__fx.leaderboardFilter.filteredLeaderboard[aDx + position] ?? (isEmptySpace = true, kf[aE.fJ])]) : mV[aDx + position]),
			aDx === aDE - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kf[aE.fJ]) >=
			position + aDE - 1 && (fg = aE.fJ), !isEmptySpace && aE.iT && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fg, ah.a3o, aE.lE), 0 === ah.nU[fg] || isEmptySpace || aE.hx && !aE.lE && !aE.hi &&
			fg !== aE.fJ || aI.nq(fg, 800, !1, 0)), !0
	}, this.a4h = function(fg, fi, deltaY) {
		var aE3;
		return !(aDX || aE.ny || (aE3 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a26(fg, fi)) || (fg = (fg = aBr(-1, aDy(fi), aDE)) === aDE || bM.a5H() ? -1 : fg, 0 < deltaY ? position < aE.fW - aDE && (position += Math.min(aE.fW - aDE -
			position, aE3), aDV = fg, aDf(), bi.ds = !0) : 0 < position && (position -= Math.min(position, aE3), aDV = fg, aDf(), bi.ds = !0), 0))
	}, this.xl = function() {
		xm.drawImage(aDF, bf.gap, bf.gap)
	}
}

function cR() {
	var canvas, ou, fg, fi, aCm, aE4, gap, aE5, fontSize, aE6, aE7, aE8, aE9, aEA, aEB, aEC, aED, aEE;

	function aEI() {
		ou.clearRect(0, 0, aX.j, aX.k), ou.fillStyle = bE.pL, ou.fillRect(0, 0, aX.j, aX.k), ou.fillStyle = bE.pi, fD = 0 < aEC ? aEC : aE9[4] / 1e4, ou.fillRect(0, aX.k - aCm - 1, Math.floor(fD * aX.j), aCm), ou.fillStyle = bE.pO, ou.fillStyle =
			__fx.utils.lineColor(bE.pO), __fx.utils.smoothFrame(ou, aX.j, aX.k) || (ou.fillRect(0, 0, aX.j, 1), ou.fillRect(0, 0, 1, aX.k), ou.fillRect(aX.j - 1, 0, 1, aX.k), ou.fillRect(0, aX.k - 1, aX.j, 1)), ou.fillRect(0, aX.k - aCm - 1, aX.j,
			1), ou.fillStyle = bE.pO;
		for (var fD, aEK, ea = 0, aC = 0; aC < aE8.length; aC++) aEA[aC] ? (bD.sM.textAlign(ou, 0), aEK = Math.floor((aE4 - aCm + 2 * aE5) * (aC - ea + 1) / (aE8.length + 1) - .7 * aE5), ou.fillText(aE8[aC], gap, aEK), bD.sM.textAlign(ou, 2), 5 ===
			aC && 0 !== ah.nU[aE.fJ] && ah.hb[aE.fJ] >= af.ka(aE.fJ) ? (ou.fillStyle = bE.qM, ou.fillText(aEG(aC), aX.j - gap, aEK), ou.fillStyle = bE.pO) : ou.fillText(aEG(aC), aX.j - gap, aEK)) : ea++
	}

	function aEG(aC) {
		return aC < 3 ? aE9[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.tK.a7C(aE9[aC] / 100, 2) : aC < 7 ? bD.tK.a2Q(aE9[aC]) : aC === 7 ? aX.aEL(aE9[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hN, aE.fJ) : __fx.utils.getDensity(aE.fJ)
	}

	function aEF() {
		ah.hN[aE.fJ] !== aE9[6] && (aE9[6] = ah.hN[aE.fJ], aE6++)
	}
	this.dk = function() {
		aEC = aED = 0, (aE7 = new Array(8))[0] = L(121), aE7[1] = aE.lE ? L(27) : L(122), aE7[2] = L(123), aE7[3] = L(124), aE7[4] = L(125), aE7[5] = L(126, 0, "Interest"), aE7[6] = L(127), aE7[7] = L(128),
			aE7.push("Max Troops", "Density"), // add aE7
			(aE8 = new Array(aE7.length)).fill(""), (aE9 = new Array(aE7.length))[0] = aE.lE ? 0 : aE.ku, aE9[1] = aE.lE ? am.lQ : aE.lG, aE9[2] = aE.a3A, aE9[3] = 0, aE9[4] = bO.g0(1e4 * ah.hN[0], Math.max(aE.ke, 1)), aE9[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.g0(700 * aE.data.iIncomeValue, 64) : bO.g0(700 * aE.data.iIncomeData[aE.fJ], 64), aE9[6] = 0, aEF(), aE9[7] = 0, aEB = aEG(6), (aEA = new Array(aE7.length)).fill(!0), aEE = 0, aEE =
			aE.lE ? (aEA[0] = !1, aEA[2] = !1, aEA[3] = !1, 3) : (aEA[3] = !1, 1), aE6 = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.ik() ? .1646 : .126) * 1.25 * i.il), this.k = Math.floor(1.18 * this.j), aCm = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aE5 = .04 * this.j, aE4 = this.k, this.k -= Math.floor(aEE * (this.k -
			2 * aCm) / aE7.length), fontSize = Math.floor(.7 * (aE4 - aCm) / aE7.length);
		var a8o = bD.sM.u7(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(a8o, j) {
				for (var aC = 0; aC < aE8.length; aC++) aE8[aC] = bD.ou.a6B(aE7[aC], a8o, j)
			}((ou = canvas.getContext("2d", {
				alpha: !0
			})).font = a8o, .575 * this.j), bD.sM.textBaseline(ou, 1), ou.lineWidth = 1, this.a7R(), this.aBU(), aV.aBU(), aEI()
	}, this.aBU = function() {
		fg = i.j - this.j - bf.gap
	}, this.aEJ = function() {
		fi = bf.gap
	}, this.a7R = function() {
		fi = bf.gap + (aV.aAq() && 0 !== ah.nU[aE.fJ] && !aE.hx ? aV.k + bf.gap : 0)
	}, this.nG = function(by) {
		(by || 100 <= aE6) && (aE6 = 0, aEI())
	}, this.a8A = function() {
		return aE9[7]
	}, this.aEL = function(value) {
		var lp = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lp) / 1e3);
		return value < 10 ? lp + ":0" + value : lp + ":" + value
	}, this.ee = function() {
		var aEW, per;
		aEA[0] && aE.a3B - aE.a3A !== aE9[0] && (aE9[0] = aE.a3B - aE.a3A, aE6++), am.lQ - aE9[0] !== aE9[1] && (aE9[1] = am.lQ - aE9[0], aE6++), this.n7(), (aEW = af.aEX(aE.fJ)) !== aE9[5] && (aE9[5] = aEW, aE6++), aEF(), aE9[7] += bi.aEY, aEW =
			aEG(7), aEB !== aEW && (aEB = aEW, aE6 += 100), aEW = aE.iT ? bk.lR() : ah.hN[mV[0]], per = bO.g0(1e4 * aEW, Math.max(aE.ke, 1)), aE9[3] = aEW, aE9[4] !== per && (aE6++, aE9[4] = per), 8 === aE.lC && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.gv.hl(aC)) return bU.a2l.a37(), 1;
				return
			}() || aE9[3] < aE.ke || ! function() {
				for (var aC = am.lQ - 1; 0 <= aC; aC--)
					if (0 < ah.h1[am.lV[aC]].length) return;
				return 1
			}() || bQ.lj.aEV().length || aE.iT && bk.lR(1) < aE.ke || bU.a2l.a37()
	}, this.n7 = function() {
		aEA[2] && aE.a3A !== aE9[2] && (aE9[2] = aE.a3A, aE6 += 2 === aE.a38 ? 100 : 1)
	}, this.aES = function() {
		return aE9[3] === aE.ke
	}, this.aEZ = function(aC) {
		var uv, aEa, ea;
		return 2 !== aE.a38 && (aC % 2 == 1 && (aW.nG(1, 1), bi.ds = !0), aC === aE.a7a ? (aEC = 0, aEI(), !1) : (-1 !== aC || 0 !== aED) && (aEa = aEC, aEC = aE.hi ? aC / aE.a7a : (ea = performance.now(), 0 <= aC && (uv = ea - 392 * aC, aED =
			0 === aC || uv < aED ? uv : aED), 1 < (aEC = (ea - aED) / (392 * aE.a7a)) ? 1 : aEC), aEI(), aEC !== aEa))
	}, this.xl = function() {
		xm.drawImage(canvas, fg, fi)
	}
}

function cS() {
	var iL, aEb, j, k, aBa, aEc, aEd, aAr, canvas, nh, aEe;

	function a1F() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.dk = function() {
		aEe = iL = !1, aBa = .61, aEc = .07, aEd = .09, nh = aAr = k = 0
	}, this.resize = function() {
		var ou, nv, ej, aEj, aEk, a8t;
		iL && (j = aEf(j = a1.a2.ik() ? Math.floor(.69 * i.il) : Math.floor(.5 * i.il), a9P(i.j - 2 * bf.gap, 10)), j = aEf(j, Math.floor(3.57 * a9P(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, ou = canvas.getContext("2d", {
				alpha: !0
			}), nv = Math.floor(1 + k / 40), ou.clearRect(0, 0, j, k), ou.fillStyle = bE.pL, ou.fillRect(nv, nv, j - 2 * nv, k - 2 * nv), ou.lineJoin = "bevel", ou.lineWidth = 2 * nv, ou.strokeStyle = bE.pO, ou.strokeRect(nv, nv, j - 2 * nv,
				k - 2 * nv), ou.imageSmoothingEnabled = !1, ej = ac.get(aEb), aEj = ej.width, a8t = (1 === aEb ? .85 : 21 === aEb ? .666 : .9) * aBa * k / (aEk = ej.height), ou.setTransform(a8t, 0, 0, a8t, Math.floor((j - a8t * aEj) / 2),
				Math.floor((k - a8t * aEk) / 2)), ou.drawImage(ej, 0, 0), ou.setTransform(1, 0, 0, 1, Math.floor(j - aEd * k - aEc * k - nv), Math.floor(nv + aEc * k)),
			function(ou, fZ) {
				ou.lineWidth = Math.floor(1 + k / 80), ou.strokeStyle = bE.pO, ou.beginPath(), ou.moveTo(0, 0), ou.lineTo(fZ, fZ), ou.moveTo(0, fZ), ou.lineTo(fZ, 0), ou.stroke()
			}(ou, Math.floor(aEd * k)), ou.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(g1, aEh, aBM, aEi) {
		iL || aEi && aEe || (aEb = aBM ? 21 : g1 ? 1 : 2, iL = aEe = !0, this.resize(), aM.tX(), aS.aBH(), nh = bi.eZ, aAr = aEh ? 1 : 0)
	}, this.ee = function() {
		!iL || 1 <= aAr || (aAr = 1 < (aAr += 5e-4 * (bi.eZ - nh)) ? 1 : aAr, nh = bi.eZ, bi.ds = !0)
	}, this.hm = function(fg, fi) {
		return !(!iL || aAr <= 0 || (fg -= Math.floor((i.j - j) / 2), fi -= a1F(), fg < 0) || fi < 0 || j < fg || k < fi || (j - k / 3 < fg && fi < k / 3 && (iL = !1, bi.ds = !0), 0))
	}, this.xl = function() {
		!iL || aAr <= 0 || (xm.globalAlpha = aAr, xm.drawImage(canvas, Math.floor((i.j - j) / 2), a1F()), xm.globalAlpha = 1)
	}
}

function dT() {
	var aEm, aEn = new Uint8Array(5),
		aEo = new Uint8Array(5);
	this.aEp = new aEq, this.dk = function() {
		for (var g1 = bm.buffer.data[119].value, aC = 0; aC < aEn.length; aC++) aEn[aC] = (g1 >> 2 * aC) % 4
	}, this.a7m = function() {
		aEm = [L(129), "", L(130, [ba.aEr[28]]), L(131, [ba.aEr[26]]), L(132, [ba.aEr[0]])], this.aEp.dk()
	}, this.ee = function() {
		this.aEp.ee()
	}, this.a8X = function(id) {
		1 < id && bM.so() || ! function(eI) {
			if (3 === aEn[eI] || 1 === aEo[eI]) return;
			if (aEo[eI] = 1, !(Math.random() < .6)) {
				aEn[eI]++;
				for (var g1 = 0, aC = 0; aC < aEn.length; aC++) g1 += aEn[aC] << 2 * aC;
				bm.qq.qr(119, g1)
			}
			return 1
		}(id) || aO.a9U(aEm[id])
	}
}

function aEq() {
	var aEt;
	this.dk = function() {
		aEt = !1
	}, this.ee = function() {
		var h7;
		if (function() {
				if (!aEt) {
					if (bi.kr() % 30 != 9) return;
					if (!bD.gv.mR(90)) return;
					aEt = !0
				}
				return 1
			}() && (! function() {
				var sE = aO.a9p(956);
				if (sE) {
					if (bD.gv.ls(sE.player)) return 1;
					aO.a9o(956, 0)
				}
				return
			}() && (-1 === (h7 = (aE.iT ? function() {
				var id = bk.lT(),
					fZ = am.lQ;
				if (bj.lH[id])
					for (var w1 = am.lV, fX = bj.fX, aC = 0; aC < fZ; aC++) {
						var h7 = w1[aC];
						if (fX[h7] !== id) return h7
					} else if (1 < fZ) return mV[fZ - 1];
				return -1
			} : function() {
				for (var aF1 = am.lQ, lo = am.lV, aF2 = kf, aC = 0; aC < aF1; aC++) {
					var h7 = lo[aC];
					if (0 !== aF2[h7]) return h7
				}
				return -1
			})()) ? ! function() {
				var sE = aO.a9p(957);
				if (sE && sE.a9L) {
					if (ad.fQ(sE.a9L.fL << 2)) return 1;
					aO.a9o(957, 0)
				}
				return
			}() : (aO.a1b(0, L(133, [ah.a1c[h7]]), 956, h7, bE.pO, bE.pL, -1, !0), 0)))) {
			var fZ = ap.jY.m4;
			if (0 !== fZ)
				for (var buffer = ap.jY.buffer, aC = 0; aC < fZ; aC++) {
					var fL = buffer[aC];
					if (ad.fQ(fL << 2)) return void aO.a1b(0, L(134, [bP.fh(fL), bP.fj(fL)]), 957, 0, bE.pO, bE.pL, -1, !0, void 0, {
						fs: 1,
						fL: fL
					})
				}
		}
	}
}

function dU() {
	this.aF3 = new aF4, this.dk = function() {
		this.aF3.resize()
	}
}

function aF4() {
	this.resize = function() {
		var aC, aF5 = document.head.querySelector("style#ss");
		if (aF5)
			for (aC = aF5.sheet.cssRules.length - 1; 0 <= aC; aC--) aF5.sheet.deleteRule(0);
		else(aF5 = document.createElement("style")).id = "ss", document.head.appendChild(aF5);
		var aBi = "::-webkit-scrollbar",
			aF6 = bD.sM.sV(bf.u9),
			iV = bD.sM.sV(Math.max(bD.sM.tZ(.012), 8));
		try {
			aF5.sheet.insertRule(aBi + "{width:" + iV + ";height:" + iV + ";}", aF5.sheet.cssRules.length), aF5.sheet.insertRule(aBi + "-thumb{background-color:white;}", aF5.sheet.cssRules.length), aF5.sheet.insertRule(aBi +
				"-track{background:" + bE.pK + ";}", aF5.sheet.cssRules.length), aF5.sheet.insertRule(aBi + "-track:horizontal{border-top:" + aF6 + " solid white;}", aF5.sheet.cssRules.length), aF5.sheet.insertRule(aBi +
				"-track:vertical{border-left:" + aF6 + " solid white;}", aF5.sheet.cssRules.length), aF5.sheet.insertRule(aBi + "-button{display:none;}", aF5.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aF5.sheet.cssRules.length - 1; 0 <= aC; aC--) aF5.sheet.deleteRule(0)
		}
	}
}

function dS() {
	this.aF7 = !1, this.oL = !1, this.a7V = !1, this.aF8 = [0, 0, 0, 0], this.render = function() {
		var nv, nw, o8, o9;
		this.a7V = this.a7V || this.oL, (this.oL || this.aF7 && this.a7V) && (nv = bd.aF9[0], nw = bd.aF9[1], o8 = bd.aF9[2], o9 = bd.aF9[3], nv = nv < this.aF8[0] ? this.aF8[0] : nv, nw = nw < this.aF8[1] ? this.aF8[1] : nw, o8 = o8 > this.aF8[
				2] ? this.aF8[2] : o8, o9 = o9 > this.aF8[3] ? this.aF8[3] : o9, this.oL = !1, this.aF7 = !1, nv === this.aF8[0] && nw === this.aF8[1] && o8 === this.aF8[2] && o9 === this.aF8[3] ? this.a7W() : nv <= o8 && nw <= o9 && a7o
			.putImageData(a7p, 0, 0, nv, nw, o8 - nv + 1, o9 - nw + 1))
	}, this.a7W = function() {
		this.a7V && this.aF8[2] >= this.aF8[0] && this.aF8[3] >= this.aF8[1] && a7o.putImageData(a7p, 0, 0, this.aF8[0], this.aF8[1], this.aF8[2] - this.aF8[0] + 1, this.aF8[3] - this.aF8[1] + 1), this.a7V = !1
	}, this.a3K = function() {
		this.aF8[2] >= this.aF8[0] && this.aF8[3] >= this.aF8[1] && a7o.putImageData(a7p, 0, 0, this.aF8[0], this.aF8[1], this.aF8[2] - this.aF8[0] + 1, this.aF8[3] - this.aF8[1] + 1), this.a7V = !1
	}, this.dk = function() {
		var fg, fi;
		this.aF7 = !1, this.oL = !1, this.a7V = !1, this.aF8[0] = bV.fk, this.aF8[1] = bV.fl, this.aF8[2] = this.aF8[3] = 0;
		loop: for (fg = 1; fg < bV.fk - 1; fg++)
			for (fi = bV.fl - 2; 1 < fi; fi--)
				if (1 === aFA[ad.a0m(fg, fi) + 2]) {
					this.aF8[0] = fg;
					break loop
				} loop: for (fi = 1; fi < bV.fl - 1; fi++)
			for (fg = bV.fk - 2; 1 < fg; fg--)
				if (1 === aFA[ad.a0m(fg, fi) + 2]) {
					this.aF8[1] = fi;
					break loop
				} loop: for (fg = bV.fk - 2; 0 < fg; fg--)
			for (fi = bV.fl - 2; 1 < fi; fi--)
				if (1 === aFA[ad.a0m(fg, fi) + 2]) {
					this.aF8[2] = fg;
					break loop
				} loop: for (fi = bV.fl - 2; 0 < fi; fi--)
			for (fg = bV.fk - 2; 1 < fg; fg--)
				if (1 === aFA[ad.a0m(fg, fi) + 2]) {
					this.aF8[3] = fi;
					break loop
				}
	}
}

function L(value, aFB, yJ, aFC) {
	var s3 = "number" == typeof value ? bA.aFD[value] : value;
	if (yJ && bA.aFE() && (s3 = yJ), !aFB) return aFC ? s3.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : s3;
	for (var fZ = aFB.length, aC = 0; aC < fZ; aC++)
		for (var fs = 0; fs < 3; fs++) s3 = s3.replace("{" + (10 * fs + aC) + "}", aFB[aC]);
	return s3
}

function c6() {
	this.data = new aFF;
	var aFG = (new aFH).L84,
		aFJ = (this.aFD = aFG, !(this.aFI = "en"));
	this.dk = function() {
		var s3, h;
		aFJ = !1, ("en" === (s3 = bm.buffer.data[12].value).split("-")[0].toLowerCase() ? (bA.aFD = aFG, bA.aFI = s3, 1) : bm.buffer.data[12].value === bm.buffer.data[145].value && 0 < bm.buffer.data[146].value && (s3 = bm.buffer.data[146].value,
			(h = bm.sd.yV(s3, !1)).length === s3) && !!bD.sU.a5m(h) && function(h) {
			for (var fZ = h.length, k = 0; k < fZ; k++) h[k] = h[k].replace("&#39;", "'");
			var aFP = bm.sd.yV(fZ, !0);
			if (fZ !== aFP.length) return !1;
			if (!bD.sU.a5m(aFP)) return !1;
			for (var lp = aFG.length, aCd = new Array(lp), aFQ = lp === fZ, h2 = Math.min(fZ, lp), aC = 0; aC < lp; aC++)
				if (aCd[aC] = aFG[aC], aC < fZ && aFP[aC] === aCd[aC]) aCd[aC] = h[aC];
				else {
					aFQ = !1;
					for (var ft = 0; ft < h2; ft++)
						if (aFP[ft] === aCd[aC]) {
							aCd[aC] = h[ft];
							break
						}
				} return bA.aFD = aCd, bA.aFI = bm.buffer.data[12].value, aFQ
		}(h)) || (aFJ = !0)
	}, this.dm = function() {
		bj.dl(), aF.dl(), bh.dl(), bg.dl(), aP.dk(), br = new e8
	}, this.aFE = function() {
		return this.aFD === aFG || !aFG.length
	}, this.aFR = function() {
		var aFS;
		return !!aFJ && (aFJ = !1, 0 !== aFG.length) && (aFS = bm.buffer.data[12].value, b1.eg.aFT(0, aFS.slice(0, 20)), !0)
	}, this.aFU = function(h) {
		h.length !== aFG.length ? 8 === u.uZ && u.a4L().aFV(30, 0, 1) : (this.aFD = h, this.aFI = bm.buffer.data[12].value, bm.qq.qr(145, this.aFI), bm.qq.qr(146, h.length), bm.sd.yb(h, !1), bm.sd.yb(aFG, !0), 8 === u.uZ ? u.a4L().aFV(30) : 0 ===
			ab.a4H() && 5 === u.uZ && u.z.aFW())
	}, this.aFX = function() {
		var ye, h = navigator.languages;
		return h && h.length ? (ye = Math.max(bA.data.aFY(h[0]), 0), 1 === h.length ? [ye, ye] : [ye, Math.max(bA.data.aFY(h[1]), 0)]) : [0, 0]
	}
}

function aFF() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aFZ = function() {
		for (var aFa = [], h = this.h, fZ = h.length, aC = 0; aC < fZ; aC++) aFa.push(h[aC]);
		var aFb = bm.buffer.data[12].yJ;
		for (aC = 0; aC < fZ; aC++)
			if (aFa[aC] === aFb) {
				aFa.splice(aC, 1), fZ--;
				break
			} aFa.sort(), fZ++, aFa.unshift(aFb);
		try {
			if ("undefined" == typeof Intl) return aFa;
			for (aC = 0; aC < fZ; aC++) {
				var s3 = new Intl.DisplayNames([aFa[aC]], {
					type: "language"
				}).of(aFa[aC]);
				s3 !== aFa[aC] && (aFa[aC] = aFa[aC] + ": " + s3)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aFa
	}, this.aFd = function(aFe) {
		for (var s3 = bm.buffer.data[12].value, fZ = aFe.length, aC = 0; aC < fZ; aC++)
			if (s3 === aFe[aC].split(":")[0]) return aC;
		return 0
	}, this.aFY = function(aFf) {
		if (aFf && !(aFf.length < 2)) {
			aFf = aFf.split("-")[0].toLowerCase();
			for (var h = this.h, fZ = h.length, aC = 0; aC < fZ; aC++)
				if (aFf === h[aC]) return aC
		}
		return -1
	}
}

function aFH() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Lobby", "Starts in", "Player", "Players", "Propaganda", "Close {button}", "Report Abuse",
		"You earned {10} gold!", "{0} earned {11} gold!", "Team {0}", "Team {0} won the game!", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.",
		"You earned {10} points.", "Clan {0} gained {11} points. ✨", "You earned {10} clan points.", "You earned an additional {10} gold because you played for {1}.", "Back", "Error", "Error {10}", "Not Enough Gold!",
		"You need more gold to perform this action.", "Quit Game", "More", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.",
		"{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}",
		"Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humans won.", "The Resistance", "The zombies won.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.",
		"{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.",
		"You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.",
		"{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land",
		"Contest", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Bots",
		"Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.",
		"Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!",
		"You are leaving Territorial.io.", "The game could not start for you. Your selection was removed.", "Battle Royale", "1v1", "Zombie", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Loading", "{0} defeated {1}!", "White Arena",
		"Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia",
		"Island Kingdom", "Mountains 2", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf",
		"Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Sell Account", "Asking Price:", "Account to receive the gold:", "Publish Offer", "Buy This Account", "Buy",
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
		"Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Richest Players", "Patreon Members", "Zombie Players", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking",
		"Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Elo", "Clan", "Rating", "Leader",
		"Time Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "Chat", "Overview", "Join", "Login", "The only official domain is territorial.io", "If you log in on a different website, your account may be stolen!",
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
	var fg, fi, k, vS, aFg, aFh, aFi, aFj, aFk, j, a6P, aFl;
	this.iL = !1, this.dk = function(s3, aFm) {
		if (1 === a1.id && 13 <= a1.e3 && a1.e3 < 18) return aFm ? void(a6P = s3) : a6P !== s3 ? void 0 : void a1.yT.saveString(200, s3);
		aFm && (a6P = s3, (aFl = document.createElement("a")).appendChild(document.createTextNode(a6P)), this.iL = !0, aFl.title = a6P, aFl.target = "_blank", aFl.href = a6P, aFl.style.textAlign = "center", aFl.style.color = bE.pO, aFl.style
			.position = "absolute", aFl.style.padding = "0px", aFl.style.margin = "0px", this.resize(), document.body.appendChild(aFl), bi.ds = !0)
	}, this.tX = function() {
		return !(!this.iL || (u.removeChild(document.body, aFl), this.iL = !1))
	}, this.hm = function(it, iu) {
		return !!this.iL && ((it < fg || iu < fi || fg + j < it || fi + k < iu || fg + j - vS < it && iu < fi + vS) && (bi.ds = !0, this.iL = !1, u.removeChild(document.body, aFl)), !0)
	}, this.resize = function() {
		var a8o, aFn;
		this.iL && (aFj = Math.floor(.8 * (a1.a2.ik() ? i.j > i.k ? .6 : .55 : .4) * i.il), vS = Math.floor(.15 * aFj), aFg = Math.floor(.35 * vS), aFh = Math.floor(.5 * vS), aFi = Math.floor(2.5 * aFh), k = vS + aFg + 3 * aFh, a8o = bD.sM.u7(1,
			aFg / i.l), aFk = Math.floor(i.l * aR.measureText(a6P, a8o)), aFn = j = (aFj < aFk ? aFk : aFj) + 2 * aFi, j = Math.min(j, i.j - 2 * (a1.a2.ik() ? 2 : 1) * bf.gap), a8o = bD.sM.u7(1, j / aFn * aFg / i.l), aFk = Math.floor(i
			.l * aR.measureText(a6P, a8o)), fg = Math.floor((i.j - j) / 2), fi = Math.floor((i.k - k) / 2), aFl.style.font = a8o, aFl.style.top = Math.floor((fi + 1.4 * aFh + vS) / i.l) + "px", aFl.style.left = Math.floor((fg + (j -
			aFk) / 2) / i.l) + "px")
	}, this.xl = function() {
		this.iL && (xm.fillStyle = bE.pL, xm.fillRect(fg, fi + vS, j, k - vS), xm.fillStyle = bE.qZ, xm.fillRect(fg, fi, j, vS), xm.fillStyle = bE.pO, xm.lineWidth = bf.a27, xm.strokeStyle = bE.pO, xm.strokeRect(fg, fi, j, k), xm.fillRect(fg,
			fi + vS, j, bf.a27), xm.font = bD.sM.u7(1, .48 * vS), bD.sM.textAlign(xm, 1), bD.sM.textBaseline(xm, 1), xm.fillText(L(135), Math.floor(fg + (j - .5 * vS) / 2), Math.floor(fi + .55 * vS)), aN.a90(Math.floor(fg + j - .8 * vS),
			Math.floor(fi + .25 * vS), Math.floor(.5 * vS)), xm.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dp() {
	var gap, aE7, fg = [0, 0, 0, 0, 0],
		fi = [0, 0, 0, 0, 0],
		o7 = [1, 1, 1, 1, 1],
		g1 = [!0, !0, !0, !1, !1],
		ej = (this.gM = [!0, !0, !0, !1, !1], null);
	this.aFo = function(a5x, aFp) {
		ej = a5x, g1 = aFp, aE7 = [bN.aFq, bN.a4D, bN.aFr, bN.aFr, bN.aFs], this.dk()
	}, this.dk = function() {
		if (ac.uz()) {
			var aC, ue = Math.floor((a1.a2.ik() ? .261 : .195) * i.il),
				uf = Math.floor(.9 * ue),
				aBa = Math.floor(.17 * uf);
			if (gap = a1.a2.ik() ? 2 * bf.gap : bf.gap, o7[0] = ue / ej[0].width, o7[1] = uf / ej[1].width, o7[2] = aBa / ej[2].height, o7[3] = aBa / ej[3].height, o7[4] = aBa / ej[4].height, o7[2] *= 1.7, o7[3] *= 1.07, fg[0] = gap, fg[1] = gap,
				fg[2] = gap, fg[3] = gap, fg[4] = Math.floor(2 * gap + o7[3] * ej[3].width), fi[0] = gap, fi[1] = fi[0] + gap + o7[0] * ej[0].height, fi[2] = fi[1] + gap + o7[1] * ej[1].height, fi[3] = fi[2] + gap + o7[2] * ej[2].height, fi[4] =
				fi[3], !g1[0])
				for (aC = 0; aC < 5; aC++) fi[aC] -= o7[0] * ej[0].height + gap;
			if (!g1[1])
				for (aC = 2; aC < 5; aC++) fi[aC] -= o7[1] * ej[1].height + gap
		}
	}, this.iL = function() {
		return !(7 === ab.a4H() && a1.a2.ik())
	}, this.hm = function(it, iu) {
		if (ej && this.iL())
			for (var aC = g1.length - 1; 0 <= aC; aC--)
				if (g1[aC] && this.gM[aC] && fg[aC] < it && fi[aC] < iu && it < fg[aC] + o7[aC] * ej[aC].width && iu < fi[aC] + o7[aC] * ej[aC].height) return u.v(9, u.uZ, new aFt(L(136), bD.sM.a6O(aE7[aC]))), !0;
		return !1
	}, this.xl = function() {
		if (ej && this.iL()) {
			var aC;
			for (xm.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) g1[aC] && this.gM[aC] && (xm.setTransform(o7[aC], 0, 0, o7[aC], fg[aC], fi[aC]), xm.drawImage(ej[aC], 0, 0));
			xm.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dd() {
	this.aFu = 0, this.aFv = null, this.wZ = null, this.sH = null, this.lj = null, this.z = null, this.wx = null, this.wX = null, this.message = null, this.aFw = null, this.tW = null, this.aFx = null, this.aFy = new aFz, this.wC = new aG0, this.f6 =
		0, this.aCU = 0, this.dk = function() {
			this.aCU = bi.eZ, this.aFu = bJ.f0.f1(bm.buffer.data[105].value, 5), this.wZ = new aG1, this.sH = new aG2, this.lj = new aG3, this.z = new aG4, this.wx = new aG5, this.wX = new aG6, this.message = new aG7, this.aFw = new aG8, this.tW =
				new aG9, this.aFx = new aGA, bs.dk(), this.f6 = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.f4()
		}, this.wr = function() {
			this.wC.aGB(), this.tW && this.tW.wr(), this.aFv = null, this.wZ = null, this.sH = null, this.lj = null, this.z = null, this.wx = null, this.wX = null, this.message = null, this.aFw = null, this.tW = null, this.aFx = null, this.f6 = 0, bs
				.wr(), a1.a2.setState(0)
		}
}

function aG1() {
	function aGD() {
		bq.z.aGE += 29 === u.uZ && 1 === bq.z.aGF
	}

	function aGX(h, ur, us) {
		var aGb = h[ur];
		h[ur] = h[us], h[us] = aGb
	}
	this.w1 = [], this.wa = 0, this.aGC = [], this.aGG = function(uX, username, wh, a6r, aGH, elo, color, yy, aGI, code) {
		username = this.aGK(uX, username, wh, a6r, aGH, elo, color, yy, aGI, code);
		this.w1.push(username), bq.aFu === uX && (bq.aFv = username), bq.aFx.aGL(uX) && (username.wj = 1), aGD()
	}, this.aGK = function(uX, username, wh, a6r, aGH, elo, color, yy, aGI, code) {
		return {
			uX: uX,
			username: code ? __fx.nameFilter.filter(username) : "Player " + bI.f0.a2Q(uX, 2),
			aGM: __fx.nameFilter.filter(username),
			wh: wh,
			a6r: a6r,
			aGH: aGH,
			elo: elo,
			color: color,
			yy: yy,
			aGI: aGI
		}
	}, this.aGN = function(eI, wh, a6r, aGH, elo, yy, color) {
		eI = this.w1[eI];
		eI.wh = wh, eI.a6r = a6r, eI.aGH = aGH, eI.elo = elo, eI.yy = yy, eI.color = color, aGD()
	}, this.aGO = function(eI, code) {
		eI = this.w1[eI];
		1 === code && (eI.username = eI.aGM), aGD()
	}, this.aGP = function(eI, aGQ) {
		var eI = this.w1[eI],
			aGR = eI.username,
			aBn = eI.username !== eI.aGM,
			aGS = "Redacted " + bI.f0.a2Q(eI.uX, 2);
		eI.aGM = aGQ ? "[" + bD.tK.a3r(eI.aGM) + "] " + aGS : aGS, aBn || (eI.username = eI.aGM), aGR.indexOf("Redacted") < 0 && (eI.aGT = aGR), bq.tW.aGU(eI.uX), aGD()
	}, this.aGV = function(eI) {
		var w1 = this.w1;
		this.aGC.push(w1[eI]), 1e3 < this.aGC.length && this.aGC.shift(), eI >= this.wa ? w1[eI] = w1[w1.length - 1] : (this.wa--, w1[eI] = w1[this.wa], w1[this.wa] = w1[w1.length - 1]), w1.pop(), aGD()
	}, this.aGW = function(eI) {
		var w1 = this.w1;
		aGD(), eI < this.wa ? aGX(w1, --this.wa, eI) : (bq.aFx.join(w1[eI]), aGX(w1, this.wa++, eI))
	}, this.aGY = function(a1s) {
		for (var w1 = this.w1, h2 = a1s.length, aC = 0; aC < h2; aC++) w1[a1s[aC]] = null;
		for (var fZ = w1.length, h8 = 0, aC = 0; aC < fZ; aC++) w1[aC] && (w1[h8++] = w1[aC]);
		w1.length = h8, this.wa -= h2
	}, this.aGZ = function() {
		this.wa = 0, aGD()
	}, this.aGa = function(a1s) {
		for (var w1 = this.w1, fZ = a1s.length, aC = 0; aC < fZ; aC++) bq.aFx.join(w1[a1s[aC]]), aGX(w1, this.wa++, a1s[aC]);
		aGD()
	}, this.aGc = function(uX) {
		for (var w1 = this.w1, lp = w1.length, fs = 0; fs < lp; fs++)
			if (uX === w1[fs].uX) return w1[fs];
		return null
	}
}

function aG2() {
	this.sH = [];
	var aGd = this.wF = 0,
		aGe = 0;
	this.aGf = function() {
		for (var fZ = bK.rU(4), sH = new Array(fZ), aC = 0; aC < fZ; aC++) sH[aC] = {
			id: bK.rU(13),
			wK: bK.rU(12),
			h2: bK.rU(16),
			fF: bK.rU(6),
			mapSeed: bK.rU(14),
			vz: bK.rU(4),
			wN: bK.rU(1)
		};
		var wb = this.wc();
		this.sH = sH, __fx.lobbyReminders.setRooms(this.sH), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aGi({
				id: 7,
				s: text
			})
		}), wb !== this.wc() && bq.z.aGE++, !(wb = this).wF || 0 <= wb.aGh(wb.wF) || (wb.wF = 0, bq.message.aGi({
			id: 7,
			s: L(137)
		}))
	}, this.aGh = function(id) {
		for (var sH = this.sH, aC = sH.length - 1; 0 <= aC; aC--)
			if (sH[aC].id === id) return aC;
		return -1
	}, this.aGj = function() {
		return 1 === aGd
	}, this.aGk = function(id) {
		return 0 < id && 0 < this.sH.length && this.sH[0].id === id
	}, this.wc = function() {
		return 0 < this.sH.length && 8 === this.sH[0].vz
	}, this.aGl = function() {
		return this.aGk(this.wF)
	}, this.click = function(eI) {
		eI = this.sH[eI];
		eI && this.select(eI.id === this.wF ? 0 : eI.id)
	}, this.select = function(id) {
		this.wF = id, aGd = 1, aGe++, b1.aGm.aGn(4, id), u.a8B(29).aGo()
	}, this.aGp = function(id) {
		0 === (aGe = Math.max(aGe - 1, 0)) && (this.wF = id)
	}, this.wI = function(vz) {
		return vz < 7 ? vz + 2 + " Teams" : 7 === vz ? L(138) : 8 === vz ? L(139) : 9 === vz ? L(140) : "No Full-Sending"
	}, this.wJ = function(wK) {
		var aGq = wK % 60;
		return bO.g0(wK, 60) + ":" + (aGq < 10 ? "0" : "") + aGq
	}
}

function aGA() {
	var aGr = [],
		aGs = [],
		aGt = 0;

	function aGu(h, a9r, aGx, aGy) {
		var fZ = h.length;
		if (0 === fZ) return "";
		var s3 = "@" + h[0];
		if (1 === fZ) return s3 + a9r + aGy;
		for (var aC = 1; aC < fZ - 1; aC++) s3 += ", @" + h[aC];
		return s3 + " and @" + h[fZ - 1] + aGx + aGy
	}
	this.dk = function() {
		var s3 = aGu(aGs, " is", " are", " in the lobby.");
		s3.length && bq.message.aGi({
			id: 7,
			s: s3
		}), aGr = [], aGs = [], aGt = 0
	}, this.aGL = function(aGv) {
		return bq.aFu !== aGv && (aGv = bI.f0.a2Q(aGv, 5), !!bm.y9.wj(aGv)) && (aGs.push(aGv), !0)
	}, this.join = function(player) {
		bq.aFu !== player.uX && (player = bI.f0.a2Q(player.uX, 5), bm.y9.wj(player)) && aGr.push(player)
	}, this.aGw = function() {
		var a9r, aGx;
		++aGt < 3 || (aGt = 0, a9r = aGu(aGs, "", "", " entered the lobby!"), (a9r = (aGx = aGu(aGr, "", "", " joined a game!")).length ? a9r.length ? a9r + " " + aGx : aGx : a9r).length && bq.message.aGi({
			id: 7,
			s: a9r
		}), aGr = [], aGs = [])
	}
}

function aFz() {
	this.dt = function(a1s) {
		for (var aFy = bq.z.aFy, w1 = bq.wZ.w1, aGz = a1s.length, aH0 = new Array(aGz), aC = 0; aC < aGz; aC++) aH0[aC] = w1[a1s[aC]];
		bq.wZ.aGY(a1s);
		var h8, aH1 = function(aH0) {
			if (__fx.customLobby.isActive()) return bq.aFv ? __fx.customLobby.getPlayerId() : -1;
			if (bq.aFv && bq.sH.aGj())
				for (var fZ = aH0.length, uX = bq.aFv.uX, aC = 0; aC < fZ; aC++)
					if (aH0[aC].uX === uX) return aC;
			return -1
		}(aH0);
		return -1 === aH1 ? (bq.wZ.aGC = bq.wZ.aGC.concat(aH0), 1e3 < bq.wZ.aGC.length && bq.wZ.aGC.splice(0, bq.wZ.aGC.length - 1e3), bq.z.aGE += 29 === u.uZ && 1 === bq.z.aGF, !1) : (8 === aFy.vz && (aFy.aH3 = (aFy.aH3 + (aH1 >> 1)) % 1024,
			h8 = aH1 - aH1 % 2, aH1 %= 2, aH0 = aH0.slice(h8, 2 + h8)), ay.dk(aFy, aH0, aH1), !0)
	}, this.aH4 = function(aFy, aH0, aH1) {
		var fc = aE.data = new a7b,
			aH7 = (fc.spawningSeed = aFy.spawningSeed, aFy.vz < 7 ? (fc.gameMode = 1, fc.numberTeams = aFy.vz + 2) : 9 === aFy.vz ? (fc.gameMode = fc.isZombieMode = 1, fc.numberTeams = 2) : (fc.gameMode = 0, fc.battleRoyaleMode = 7 === aFy.vz ?
				0 : 10 === aFy.vz ? 1 : 2), fc.selectedPlayer = aH1, fc.isContest = aFy.wN, fc.mapType = bV.aH5(aFy.fF) ? 0 : 1, bV.aH6(fc, aFy.fF), fc.mapSeed = aFy.mapSeed, fc.humanCount = aH0.length);
		fc.selectableSpawn = 1 === fc.gameMode || aH7 < 100, fc.colorsData = new Uint32Array(aH7), fc.playerNamesData = new Array(aH7), fc.a7z = new Uint32Array(aH7);
		for (var aC = 0; aC < aH7; aC++) fc.colorsData[aC] = aH0[aC].color, fc.playerNamesData[aC] = aH0[aC].username, fc.a7z[aC] = aH0[aC].uX;
		if (2 === fc.battleRoyaleMode)
			for (fc.elo = new Uint16Array(aH7), aC = 0; aC < aH7; aC++) fc.elo[aC] = aH0[aC].elo;
		bw.close(), ab.setState(8), bV.a8(aFy.fF, fc.mapSeed), aE.a7g(), aE.a7e = 2
	}
}

function aG3() {
	var e9 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aH8 = [bE.pc, bE.pc, bE.pd, bE.q8, bE.q9, bE.pt, bE.qE, bE.pd, bE.qb, bE.qP, bE.qY, bE.pF],
		aH9 = [
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
		aHA = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aHO(tN, uX, aHQ) {
		for (var ft = tN.length - 1; 0 <= ft; ft--) {
			var sE = tN[ft];
			0 === sE.id && sE.uX === uX && (sE.s = "[Redacted Message]", aHQ) && (sE.aHR = 1)
		}
	}
	this.tS = function(aHB) {
		var aHC, a3s;
		return aHB.id < 5 && (aHC = "@" + bI.f0.a2Q(aHB.uX, 5)), 0 === aHB.id ? aHC + ": " + aHB.s : 1 === aHB.id ? (a3s = "@" + bI.f0.a2Q(aHB.target, 5), 0 === aHB.aHD ? 32768 <= aHB.value ? aHC + " voted with " + (aHB.value - 32768 + 1) +
				" gold against " + a3s + " to weaken the latter's admin position. 📉" : aHC + " voted with " + (aHB.value + 1) + " gold for " + a3s + " to strengthen the latter's admin position. 💪" : 1 === aHB.aHD ? aHC + " sent " + Math.floor(
					aHB.value / 100) + " 🧈 gold to " + a3s + "." : aHC + " voted with " + (aHB.value / 10).toFixed(1) + " points for " + a3s + " to acknowledge the latter as clan leader. ✅") : 2 === aHB.id ? 0 === aHB.aHD ? aHC +
			" was 🔇 muted for 1 Hour." : 1 === aHB.aHD ? "The username of " + aHC + " was ✂️ redacted. Duration: 1 Day" : aHC + " 👢 was kicked." : 3 === aHB.id ? aHC + br.eL(aHB.aHD, br.eF[aHB.aHD][aHB.value]) + "@" + bI.f0.a2Q(aHB.target, 5) +
			br.eN(aHB.aHD, br.eF[aHB.aHD][aHB.value]) : 4 === aHB.id ? aHC + br.eL(5, br.eF[5][aHB.aHD]) + "@" + bI.f0.a2Q(aHB.target, 5) + br.eN(5, br.eF[5][aHB.aHD]) : 5 === aHB.id ? aHA[aHB.aHD] : 6 === aHB.id ? "You are about to mention " +
			aHB.value + " player" + (1 === aHB.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aHB.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aHB.id ? aHB.s : void 0
	}, this.tR = function(aHB, aHE) {
		return {
			aHB: aHB,
			s: aHE,
			aHF: 0,
			fontSize: 1,
			tV: 0,
			aHG: aHB.id ? bE.q7 : bE.pO
		}
	}, this.wf = function(player, wb) {
		return (wb ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.wg = function(wh) {
		return aH8[wh]
	}, this.aHH = function(wh, a6r) {
		return wh < 3 || 7 === wh ? aH9[wh][0] : 4 === wh ? aH9[wh][a6r < 1 ? 0 : a6r < 10 ? 1 : 2] : aH9[wh][a6r < 10 ? 0 : 1]
	}, this.aHI = function(a6r) {
		return 0 === a6r
	}, this.wi = function(sE) {
		return !!bq.aFv && sE.uX === bq.aFv.uX
	}, this.aHJ = function(wZ, aHK, aHL) {
		var a3p = [];
		loop: for (var aC = aHK; aC < aHL; aC++) {
			var a3q = bD.tK.a3r(wZ[aC].username);
			if (a3q) {
				for (var ft = a3p.length - 1; 0 <= ft; ft--)
					if (a3q === a3p[ft].name) {
						a3p[ft].h2++;
						continue loop
					} a3p.push({
					name: a3q,
					h2: 1
				})
			}
		}
		if (a3p.sort(function(fs, ft) {
				return ft.h2 - fs.h2
			}), 0 === a3p.length) return "";
		for (var s3 = a3p[0].name + ": " + a3p[0].h2, aC = 1; aC < a3p.length; aC++) s3 += "   " + a3p[aC].name + ": " + a3p[aC].h2;
		return s3
	}, this.aHM = function(wh, a6r, aGH) {
		return 0 === e9[wh].length ? "Rank: " + (a6r + 1) : e9[wh] + " Rank: " + (a6r + 1) + (3 !== wh && aGH < 100 ? "   " + e9[3] + " Rank: " + (aGH + 1) : "")
	}, this.aHN = function(uX) {
		aHO(bq.z.tN, uX), aHO(bq.message.aHP(), uX, 1), bq.tW.aHN(uX)
	}
}

function aG6() {
	var tz = 0,
		aHS = 0,
		aHT = 0,
		aHU = null,
		aHV = null;

	function aHY(sE, aHZ, aHa) {
		var s3 = sE.username;
		return (s3 += "   " + bq.lj.aHM(sE.wh, sE.a6r, sE.aGH)) + function(sE) {
			sE = sE.yy;
			if (sE < 1e3) return "   Gold: " + sE;
			if ((sE %= 1024) < 1e3) return "   Gold: " + sE + "k";
			return "   Gold: " + (sE - 999) + "M"
		}(sE) + ("   IP: " + bI.f0.a2Q(sE.aGI, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aHa ? aHS : aHX(sE, aHZ)])
	}

	function aHX(sE, aHZ) {
		return aHS = aHZ || bq.wZ.aGc(sE.uX) ? 1 : 0
	}
	this.wY = 0, this.aHW = function() {
		!tz || aHS === aHX(aHV) && aHT === aHV.yy || (aHT = aHV.yy, aHU.show(-1, -1, aHY(aHV, 0, 1), 1, 1, aHV.color))
	}, this.wk = function(e, sE, aHZ) {
		var aBh = e.getBoundingClientRect();
		this.show(aBh.left, aBh.top, sE, 0, aHZ), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.wX && bq.wX.tX(1)
		}), this.wY = aHZ
	}, this.show = function(fg, fi, sE, u3, aHZ) {
		aHU = aHU || new tw, aHT = (aHV = sE).yy, aHU.show(fg, fi, aHY(sE, aHZ), u3, 0, aHV.color), tz = 1
	}, this.tX = function(uA) {
		this.wY = 0, aHU && aHU.tX(uA) && (tz = 0, aHV = null)
	}
}

function aG4() {
	function aHe() {
		var fF, mapSeed;
		u.a8B(29) && (bq.z.aGE && 1 === bq.z.aGF && u.a8B(29).aHg(), bq.z.aGE = 0, u.a8B(29).aHh(), fF = bV.fF, mapSeed = bV.mapSeed, u.a8B(29).aHi(), fF === bV.fF && mapSeed === bV.mapSeed || bq.wC.aHj(), bq.wX.aHW())
	}
	this.vN = 0, this.aGF = 2, this.aFy = {
		fF: 0,
		mapSeed: 0,
		vz: 0,
		wN: 0,
		spawningSeed: 0,
		a4P: 0,
		aH3: 0
	}, this.tN = [], this.tO = 1048575, this.aGE = 0, this.aHc = [0, 0], this.aHd = function() {
		aHe(), bq.aFx.dk(), __fx.lobbyReminders.check()
	}, this.aGw = function() {
		bq.aFx.aGw(), aHe(), __fx.lobbyReminders.check()
	}, this.aHk = function() {
		0 === this.aGF && u.a8B(29).aHl()
	}
}

function aG0() {
	var aHm = 256,
		aHn = 18,
		aHo = [],
		aHr = 0;

	function yN(key, aHt, fg, fi, wU) {
		var canvas = document.createElement("canvas"),
			ou = (canvas.width = canvas.height = aHm, canvas.getContext("2d", {
				alpha: !1
			})),
			ou = (ou.imageSmoothingEnabled = !0, ou.drawImage(aHt, fg, fi, wU, wU, 0, 0, aHm, aHm), {
				key: key,
				canvas: canvas,
				iL: 0
			});
		return aHo.push(ou), aHo.length > aHn && function(aHz) {
			for (var fZ = aHo.length, aC = 0; aC < fZ; aC++) {
				var h7 = aHo[aC];
				if (!h7.iL && h7 !== aHz) return h7.canvas.width = h7.canvas.height = 0, aHo.splice(aC, 1)
			}
		}(ou), ou
	}
	this.wD = function(fF, mapSeed) {
		return fF + "_" + (bV.aHs(fF) ? mapSeed : 0)
	}, this.wS = function(fF, mapSeed) {
		for (var key = this.wD(fF, mapSeed), aHt = null, aC = aHo.length - 1; 0 <= aC; aC--) {
			var h7 = aHo[aC];
			if (h7.key === key) {
				if (!h7.iL) return h7.iL = 1, aHo.splice(aC, 1), aHo.push(h7), h7.canvas;
				aHt = h7
			}
		}
		return aHt ? ((fF = yN(key, aHt.canvas, 0, 0, aHm)).iL = 1, fF.canvas) : null
	}, this.wT = function(canvas) {
		for (var aC = aHo.length - 1; 0 <= aC; aC--)
			if (aHo[aC].canvas === canvas) {
				aHo[aC].iL = 0;
				break
			} canvas.parentNode && u.removeChild(canvas.parentNode, canvas)
	}, this.aGB = function() {
		for (var aC = aHo.length - 1; 0 <= aC; aC--) this.wT(aHo[aC].canvas)
	}, this.ee = function() {
		if (bq.f6 && !(bi.eZ < aHr)) {
			for (var self, fF, mapSeed, ea, sH = bq.sH.sH, fZ = sH.length, aC = 0; aC < fZ; aC++)
				if (! function(key) {
						for (var aC = aHo.length - 1; 0 <= aC; aC--)
							if (aHo[aC].key === key) return 1;
						return
					}(this.wD(sH[aC].fF, sH[aC].mapSeed))) return self = this, fF = sH[aC].fF, mapSeed = sH[aC].mapSeed, ea = void 0, ea = performance.now(),
					function(self, fF, mapSeed) {
						var aHt = bV.aHx(fF, mapSeed),
							wU = Math.min(aHt.width, aHt.height);
						yN(self.wD(fF, mapSeed), aHt, aHt.width - wU >> 1, aHt.height - wU >> 1, wU), aHt !== bV.zg && (aHt.width = aHt.height = 0)
					}(self, fF, mapSeed), u.a8B(29).aGo(), self = performance.now(), void(aHr = self + Math.max(Math.min(self - ea, 500), 200));
			aHr = bi.eZ + 200
		}
	}, this.aHj = function() {
		aHr = performance.now() + 200
	}
}

function aG8() {
	var aI0 = 0,
		aI1 = "",
		aI2 = 0,
		aI3 = 0;

	function aI5(aHE) {
		b1.aGm.aGn(3, aHE)
	}

	function aID(h2) {
		aI0 = 1, bq.message.aGi({
			id: 6,
			value: h2
		})
	}

	function aI8(s) {
		var aIG = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aIG)
	}
	this.a3C = function(s) {
		var aI4, h, aI9;
		if (aI0) return aI0 = 0, "yes" === (aI4 = s.toLowerCase()) || "y" === aI4 ? void aI5(aI1) : void bq.message.aGi({
			id: 5,
			aHD: 7
		});
		!(s.indexOf("@") < 0) && (aI4 = aI8(s)) ? (aI1 = s, h = bq.wZ.w1.slice(), function(aI7, aI9, s) {
			if (!aI2) return;
			for (var fZ = aI9.length, aC = 0; aC < fZ; aC++) 2 === aI9[aC].id && (s = s.replace(aI7[aI9[aC].eI], "@" + aI9[aC].g1));
			return aI0 = 1, aI5((aI1 = s).slice(0, 126) + "|"), 1
		}(aI4, aI9 = function(aI7) {
			for (var aI9 = [], fZ = (aI3 = aI2 = 0, aI7.length), aC = 0; aC < fZ; aC++) {
				var j = aI7[aC],
					lp = j.length;
				bD.tK.startsWith(j, "@[") ? lp <= 9 && bD.tK.a6R(j, "]") && aI9.push({
					id: 0,
					g1: j.substring(2, lp - 1).toUpperCase()
				}) : 6 === lp ? (aI3++, aI9.push({
					id: 1,
					g1: bJ.f0.f1(j.substring(1), 5)
				})) : 1 < lp && lp < 5 && 0 <= (lp = bA.data.aFY(j.substring(1))) && (aI9.push({
					id: 2,
					g1: lp,
					eI: aC
				}), aI2 = 1)
			}
			return aI9
		}(aI4), s) || (0 === aI9.length ? ! function(aI7) {
			for (var fZ = aI7.length, aC = 0; aC < fZ; aC++) {
				var j = aI7[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return
		}(aI4) ? aI5(s) : aID(h.length) : aI4.length === aI3 ? aI5(s) : (function(h, aI9) {
			var lp = aI9.length;
			if (0 === lp) return;
			var fZ = h.length;
			loop: for (var aC = fZ - 1; 0 <= aC; aC--) {
				for (var fs = 0; fs < lp; fs++)
					if (0 === aI9[fs].id) {
						if (aI9[fs].g1 === bD.tK.a3r(h[aC].username)) continue loop
					} else if (1 === aI9[fs].id && aI9[fs].g1 === h[aC].uX) continue loop;
				h[aC] = h[--fZ], h.pop()
			}
		}(h, aI9), aID(h.length)))) : aI5(s)
	}, this.aIH = function(s) {
		var aI7 = aI8(s);
		if (aI7)
			for (var a6 = new RegExp("^[0-9]+$"), fZ = aI7.length, aC = 0; aC < fZ; aC++) {
				var j = aI7[aC].substring(1),
					lp = j.length;
				1 <= lp && lp <= 3 && a6.test(j) && (lp = parseInt(j, 10), !isNaN(lp)) && 0 <= lp && lp < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[lp]))
			}
		return s
	}
}

function aG7() {
	var aII, aIJ = [],
		aIK = -1,
		aIL = 0,
		aIM = 0;

	function aIR() {
		aIL = bi.eZ, (3 === this.wo ? aIQ : (aIK = (aIJ.length + aIK + 2 * this.wo - 1) % aIJ.length, aIP))()
	}

	function aIP() {
		0 !== aIJ.length && (aIM = 0, aII && aII.wr(), (aII = new wl(aIR)).qr(aIK, aIJ.length), aII.show(aIJ[aIK]), bq.message.resize())
	}

	function aIQ() {
		aIM = 1, aII && aII.wr(), (aII = new ws(aIP)).qr(aIJ.length), aII.show(), bq.message.resize()
	}
	this.aGi = function(aHB) {
		var sE;
		2 === aHB.id && 3 === aHB.aHD ? bq.lj.aHN(aHB.uX) : (sE = bq.lj.tR(aHB, bq.lj.tS(aHB)), (5 !== aHB.id && 6 !== aHB.id || (u.a8B(29).aIN().tU(sE), 5 === aHB.id)) && (sE = bi.eZ < aIL + 2e4, aIK !== aIJ.length - 1 && sE || (aIK = aIJ
			.length), __fx.pingFilter.isMuted(aHB, "s") || (aIJ.push(aHB), bm.buffer.data[14].value || 7 === aHB.id || bs.play(), aII && (aIM && (bm.buffer.data[13].value || sE) ? aII.qr(aIJ.length) : aIP()))))
	}, this.show = function() {
		aIQ()
	}, this.tX = function() {
		aIK = aIJ.length - 1, aII && aII.wr(), aII = null
	}, this.resize = function() {
		aII && aII.resize()
	}, this.aHP = function() {
		return aIJ
	}
}

function aG5() {
	var aIS = null,
		aIT = null,
		aIU = 0,
		aIV = 0,
		aIW = null;

	function aIY() {
		0 !== aIT.wh && (bq.wx.tX(), u.v(8, 29, new ua(25, {
			action: 0,
			uX: bI.f0.a2Q(aIT.uX, 5),
			uY: 0
		}, 29)))
	}

	function aIa() {
		return !bq.aFv || bq.lj.wi(aIT) ? 1 : 0
	}

	function aIZ() {
		var fg = aIS.fg,
			fi = aIS.fi,
			aIg = (bq.wx.tX(), aIa());
		aIS = new wt([new x(br.eF[5][0], function() {
			aId(5, 0)
		}, aIg), new x(br.eF[5][1], function() {
			aId(5, 1)
		}, aIg), new x(br.eF[5][2], function() {
			aId(5, 2)
		}, aIg), new x(br.eF[5][3], function() {
			aId(5, 3)
		}, aIg)]), aIc(fg, fi), aIV = aIU = 2
	}

	function aIb() {
		29 === u.uZ && u.a4L().aFw(bI.f0.a2Q(aIT.uX, 5))
	}

	function aId(id, value) {
		5 === id && b1.aIh.aIi({
			action: 3,
			uX: bI.f0.a2Q(aIT.uX, 5),
			value: value
		})
	}

	function aIc(fg, fi, wz) {
		aIS.show(fg, fi, wz), bq.wX.show(aIS.fg, aIS.fi, aIT, 1)
	}
	this.aIX = function(e, sE) {
		aIU = 1, aIT = sE, aIS = new wt([new x(L(141), aIY, 0 === sE.wh ? 1 : 0), new x(L(142), aIZ, aIa()), new x(L(143), aIb, 0)]), aIc((aIW = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aIW.clientY, 1)
	}, this.a5C = function(code) {
		if (29 !== u.uZ) return !1;
		if (!aIT) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.tX();
			else if (bD.tK.startsWith(code, "Numpad") || bD.tK.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aIU) this.aIX(aIW, aIT);
				else {
					if (!aIS) return !1;
					1 === aIU ? code <= 1 ? aIY() : 2 === code ? aIZ() : (aIb(), this.tX()) : (aId(aIV, bO.ij(code - 1, 0, br.eF[aIV].length - 1)), this.tX())
				}
		}
		return !0
	}, this.tX = function() {
		aIU = 0, aIS && aIS.tX(), aIS = null, bq.wX.tX()
	}
}

function aG9() {
	var aIn = [],
		uk = [],
		aIo = [];

	function aIq(sE) {
		for (var s = sE.s, aIp = [];;) {
			var ej = function aIs(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var s3 = s.substring(position + 1, position + 6);
				if (5 !== s3.length) return aIs(s, position + 1);
				var aIz = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aIz.test(s3)) return aIs(s, position + 1);
				aIz = s.substring(position + 6, position + 7);
				if (1 !== aIz.length) return position;
				s3 = new RegExp("^[ :!.]+$");
				if (!s3.test(aIz)) return aIs(s, position + 1);
				return position
			}(s, 0);
			if (-1 === ej) {
				aIp.push(aIt(s, sE));
				break
			}
			0 === ej ? aIp.push(aIu(s.substring(1, 6), sE, ej)) : (aIp.push(aIt(s.substring(0, ej), sE)), aIp.push(aIu(s.substring(ej + 1, ej + 6), sE, ej))), s = s.substring(ej + 6)
		}
		return aIp
	}

	function aIu(s3, sE, ej) {
		var aGJ = function(s3) {
				var uX = bJ.f0.f1(s3, 5),
					aGJ = bq.wZ.aGc(uX);
				if (aGJ) {
					for (aIn.push(aGJ); 75 < aIn.length;) aIn.shift();
					return aGJ
				}
				for (var aGC = bq.wZ.aGC, aC = aGC.length - 1; 0 <= aC; aC--)
					if (aGJ = aGC[aC], uX === aGJ.uX) return aIn.push(aGJ), aGJ;
				for (aC = aIn.length - 1; 0 <= aC; aC--)
					if (aGJ = aIn[aC], uX === aGJ.uX) return aIn.push(aGJ), aGJ;
				return bq.wZ.aGK(uX, s3, 1, 999999, 999999, 0, 0, 0, 0, 1)
			}(s3),
			s3 = (0 === ej && 0 === sE.aHB.id && sE.tV && (sE.fontSize = bq.lj.aHH(aGJ.wh, aGJ.a6r), sE.aHF = bq.lj.aHI(aGJ.a6r)), document.createElement("span"));
		return s3.textContent = function(aGJ, sE, ej) {
				if (aGJ.aIx) return aGJ.aIx--, ej = 2 === sE.aHB.id || (3 === sE.aHB.id || 4 === sE.aHB.id) && 0 !== ej, aGJ.username + (ej ? " (" + aGJ.aGT + ")" : "");
				if (sE.aHB.aHR) return "Redacted " + bI.f0.a2Q(aGJ.uX, 2);
				return aGJ.username
			}(aGJ, sE, ej), s3.style.display = "inline-block", s3.style.color = bq.lj.wg(aGJ.wh), 11 === aGJ.wh && (s3.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), s3.style.cursor =
			"pointer", s3.style.margin = "0", s3.style.font = "inherit", s3.style.minWidth = s3.style.minHeight = "1em", bq.lj.wi(aGJ) && (s3.style.textDecoration = "underline"), aGJ.wj && (s3.style.textDecorationLine = "underline", s3.style
				.textDecorationStyle = "dotted"), bq.lj.aHI(aGJ.a6r) && (s3.style.fontWeight = "bold"), s3.onclick = function(e) {
				bq.wx.aIX(e, aGJ)
			}, bM.so() || (s3.onmouseover = function(e) {
				bq.wX.wk(e.target, aGJ)
			}), uk.push(s3), s3
	}

	function aIt(s, sE) {
		var tJ = document.createElement("span");
		return tJ.textContent = s, tJ.style.color = sE.aHG, tJ.style.margin = "0", tJ.style.font = "inherit", tJ
	}

	function aJ4(aGJ, aGS, uX) {
		uX !== aGJ.uX || aGJ.aGT || (aGJ.aGT = aGJ.username, aGJ.username = aGS)
	}
	this.wr = function() {
		for (var aC = 0; aC < uk.length; aC++) uk[aC].onclick = uk[aC].onmouseover = null;
		aIo = uk = null
	}, this.transform = function(sE) {
		for (var s1 = document.createElement("div"), aIp = aIq(sE), aC = 0; aC < aIp.length; aC++) s1.appendChild(aIp[aC]);
		0 === sE.aHB.id && (s1.vx143 = sE.aHB, aIo.push(s1)), s1.style.margin = "0.6em 0.6em", sE.tV && (s1.style.marginLeft = s1.style.marginRight = "inherit"), s1.style.font = "inherit";
		var aIr = 0 < sE.aHB.id;
		return sE.aHF && (s1.style.fontWeight = "bold"), aIr && (s1.style.paddingLeft = "0.7em"), aIr && (s1.style.fontStyle = "italic"), s1.style.fontSize = sE.fontSize.toFixed(2) + "em", s1
	}, this.aJ2 = function(aJ3) {
		if (aJ3 && (2 === aJ3.id && 1 === aJ3.aHD || 3 === aJ3.id && 2 === aJ3.aHD)) {
			var uX = 3 === aJ3.id ? aJ3.target : aJ3.uX;
			if (!bq.wZ.aGc(uX)) {
				for (var aGS = "Redacted " + bI.f0.a2Q(uX, 2), aGC = bq.wZ.aGC, aC = aGC.length - 1; 0 <= aC; aC--) aJ4(aGC[aC], aGS, uX);
				for (aC = aIn.length - 1; 0 <= aC; aC--) aJ4(aIn[aC], aGS, uX)
			}
		}
	}, this.aGU = function(uX) {
		for (var aJ5 = aIo, aJ6 = "@" + bI.f0.a2Q(uX, 5), aC = aJ5.length - 1; 0 <= aC; aC--) {
			var fc = aJ5[aC];
			if (fc.vx143.uX === uX || 0 <= fc.vx143.s.indexOf(aJ6)) {
				for (; fc.firstChild;) u.removeChild(fc, fc.firstChild);
				for (var aIp = aIq(bq.lj.tR(fc.vx143, bq.lj.tS(fc.vx143))), fs = 0; fs < aIp.length; fs++) fc.appendChild(aIp[fs]);
				aJ5.splice(aC, 1)
			}
		}
	}, this.aHN = function(uX) {
		for (var aJ5 = aIo, aC = aJ5.length - 1; 0 <= aC; aC--) {
			var fc = aJ5[aC];
			if (fc.vx143.uX === uX) {
				for (; fc.firstChild;) u.removeChild(fc, fc.firstChild);
				fc.vx143.s = "[Redacted Message]";
				for (var aIp = aIq(bq.lj.tR(fc.vx143, bq.lj.tS(fc.vx143))), fs = 0; fs < aIp.length; fs++) fc.appendChild(aIp[fs]);
				aJ5.splice(aC, 1)
			}
		}
	}
}

function cT() {
	var aJ7, aJ8, aJ9;

	function aJE(aC) {
		var button = aZ.oy[aC],
			fg = button.fg,
			fi = button.fi,
			j = button.j,
			k = button.k;
		xm.fillStyle = button.aJC, xm.fillRect(fg, fi, j, k), aC === aJ7 && (xm.fillStyle = aJ9, xm.fillRect(fg, fi, j, k)), xm.lineWidth = bf.a27, xm.strokeStyle = aJ8, xm.strokeRect(fg, fi, j, k),
			function(button) {
				var fg = button.fg,
					fi = button.fi,
					j = button.j,
					k = button.k;
				bD.sM.textAlign(xm, 1), bD.sM.textBaseline(xm, 1), xm.font = button.font, xm.fillStyle = aJ8, xm.fillText(button.aHE, Math.floor(fg + j / 2), Math.floor(fi + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.fi = 0, this.gap = 0, this.dk = function() {
		aJ7 = -1, aJ8 = bE.pO, aJ9 = "rgba(255,255,255,0.16)", this.oy = new Array(7), this.k = Math.floor((a1.a2.ik() ? .123 : .093) * i.il), this.j = Math.floor((a1.a2.ik() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aJA = Math.floor(.26 * this.k),
			aJB = bD.sM.u7(1, aJA);
		this.oy[0] = {
			fg: 0,
			fi: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aHE: "Multiplayer",
			font: aJB,
			aJC: "rgba(22,88,22,0.8)",
			fontSize: aJA
		}, aJA = Math.floor(.18 * this.k), aJB = bD.sM.u7(1, aJA), this.oy[1] = {
			fg: 0,
			fi: 0,
			j: this.j - this.oy[0].j - this.gap,
			k: this.k,
			aHE: "Single Player",
			font: aJB,
			aJC: "rgba(22,88,88,0.8)",
			fontSize: aJA
		}, this.oy[2] = {
			fg: 0,
			fi: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aHE: "",
			font: this.oy[1].font,
			aJC: "rgba(100,0,0,0.8)",
			fontSize: this.oy[1].fontSize
		}, this.oy[3] = {
			fg: 0,
			fi: 0,
			j: this.j,
			k: this.k,
			aHE: "Back",
			font: this.oy[0].font,
			aJC: "rgba(0,0,0,0.8)",
			fontSize: this.oy[0].fontSize
		}, this.oy[4] = {
			fg: 0,
			fi: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aHE: "The game was updated!",
			font: this.oy[1].font,
			aJC: "rgba(100,0,0,0.8)",
			fontSize: this.oy[1].fontSize
		}, this.oy[5] = {
			fg: 0,
			fi: 0,
			j: this.oy[0].j,
			k: Math.floor(.8 * this.k),
			aHE: "Reload",
			font: this.oy[0].font,
			aJC: "rgba(0,100,0,0.8)",
			fontSize: this.oy[0].fontSize
		}, this.oy[6] = {
			fg: 0,
			fi: 0,
			j: this.oy[1].j,
			k: this.oy[5].k,
			aHE: "Back",
			font: this.oy[0].font,
			aJC: "rgba(0,0,0,0.8)",
			fontSize: this.oy[0].fontSize
		}, this.aCg()
	}, this.aCg = function() {
		this.fi = Math.floor(.54 * i.k), this.oy[0].fg = Math.floor(.5 * i.j - .5 * this.j), this.oy[1].fg = this.oy[0].fg + this.oy[0].j + this.gap, this.oy[2].fg = this.oy[3].fg = this.oy[0].fg, this.oy[4].fg = this.oy[5].fg = this.oy[0].fg,
			this.oy[6].fg = this.oy[1].fg, this.oy[0].fi = Math.floor(.54 * i.k), this.oy[1].fi = this.oy[0].fi, this.oy[2].fi = Math.floor((i.k - this.oy[2].k - this.oy[3].k - this.gap) / 2), this.oy[3].fi = this.oy[2].fi + this.oy[2].k + this
			.gap, this.oy[4].fi = Math.floor((i.k - this.oy[4].k - this.oy[5].k - this.gap) / 2), this.oy[5].fi = this.oy[6].fi = this.oy[4].fi + this.oy[4].k + this.gap
	}, this.aJD = function() {
		aJE(0), aJE(1)
	}, this.aJF = function() {
		aJE(2), aJE(3)
	}, this.aJG = function() {
		aJE(4), aJE(5), aJE(6)
	}, this.a4e = function(fg, fi, nG) {
		var aC = -1;
		return 0 === ab.a4H() ? aC = this.a58(fg, fi, 0, 2) : 3 === ab.a4H() ? aC = this.a58(fg, fi, 3, 1) : 5 === ab.a4H() && (aC = this.a58(fg, fi, 5, 2)), aJ7 !== aC && (aJ7 = aC, nG) && (bi.ds = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a58 = function(fg, fi, aJH, size) {
		for (var aC = aJH; aC < aJH + size; aC++)
			if (fg >= this.oy[aC].fg && fi >= this.oy[aC].fi && fg <= this.oy[aC].fg + this.oy[aC].j && fi <= this.oy[aC].fi + this.oy[aC].k) return aC;
		return -1
	}
}

function cU() {
	var aJJ, aJK, aAI, aJL, aJM, aJN, aJO, aJP, aJQ, aAH, aJR, aJS, aJT, aJU = 1,
		aJW = 0;

	function aJZ(aJa) {
		aJa ? aJT = (aJT + 1) % b1.z.aJb : (b1.z.close(aJT, 3280), aJU ? aJU = 0 : (aJT = (aJT + 1) % b1.z.aJb, b1.z.close(aJT, 3280))), aJS = bi.eZ, aa.aJY = aJW, b1.z.aJc(aJT, 4, 1) && b1.aGm.aJd(aJT)
	}

	function aJe() {
		if (0 !== aJT) return 1 === aJT && __fx.customLobby.isActive() ? (p.a4T(3249), __fx.customLobby.setActive(!1)) : void aJZ();
		p.a4T(3249)
	}

	function aJj(fi, aCO, vN) {
		var nv = Math.floor((i.j - aJL) / 2) + aJO,
			o8 = nv + Math.floor(vN * (aJL - 2 * aJO));
		xm.lineWidth = aCO, xm.beginPath(), xm.moveTo(nv, fi), xm.lineTo(o8, fi), xm.lineTo(Math.floor(nv - aJO + vN * aJL), fi + aAI), xm.lineTo(nv - aJO, fi + aAI), xm.closePath()
	}
	this.f2 = 1, this.aJX = 0, this.aJY = 0, this.dk = function() {
		bX.turnstile.ey(), ab.setState(6), aJJ = 0, aJK = 1, aJP = "rgba(0,220,120,0.4)", aJQ = "rgba(0,0,0,0.8)", this.resize(), bi.ds = !0, aJU = 1, aJT = this.f2 - 1, aJW = 0, aJZ(1)
	}, this.resize = function() {
		aJL = Math.floor((a1.a2.ik() ? .5 : .25) * i.il), aJM = aJL + 12, aAI = Math.floor(.125 * aJL), aJO = 3 * aAI, aJN = Math.floor(.225 * aJL), aJR = Math.floor(.3 * aAI), aAH = bD.sM.u7(0, aJR)
	}, this.a4O = function(oN) {
		oN === aJT && aJe()
	}, this.hm = function(fg, fi) {
		var nv = Math.floor((i.j - aJM) / 2),
			nw = Math.floor(.5 * (i.k - bf.gap - aAI - aJN)) + aAI + bf.gap;
		return nv < fg && fg < nv + aJM && nw < fi && fi < nw + aJN && (this.a5J(), aZ.a4e(fg, fi, !1), !0)
	}, this.a5J = function() {
		b1.z.a4U(3260), __fx.customLobby.setActive(false), u.z.a0()
	}, this.ee = function() {
		6 === ab.a4H() && (bi.eZ > aJS + 12e3 && aJe(), 100 < (aJJ += .07 * aJK * (aJJ < 16 ? 5 + aJJ : 84 < aJJ ? 105 - aJJ : 17)) ? (aJJ = 100, aJK = -1) : aJJ < 0 && (aJJ = 0, aJK = 1), aJP = "rgba(0," + Math.floor(190 - 1.9 * aJJ) + "," +
			Math.floor(120 - 1.2 * aJJ) + "," + (.4 + .004 * aJJ) + ")", aJQ = "rgba(0," + Math.floor(1.9 * aJJ) + "," + Math.floor(1.2 * aJJ) + "," + (.8 - .004 * aJJ) + ")", bi.ds = !0)
	}, this.xl = function() {
		var fg = Math.floor((i.j - aJM) / 2),
			fi = Math.floor(.5 * (i.k - bf.gap - aAI - aJN));
		! function(title, fi, aCO, vN) {
			xm.fillStyle = aJQ, aJj(fi, aCO, 1), xm.fill(), xm.fillStyle = aJP, aJj(fi, aCO, vN), xm.fill(), xm.strokeStyle = bE.pO, __fx.settings.smoothUI && (xm.strokeStyle = "rgba(255, 255, 255, 0.3)", xm.lineJoin = "round"), aJj(fi, aCO, 1),
				xm.stroke(), xm.lineJoin = "miter",
				function(aJl, fi) {
					bD.sM.textAlign(xm, 1), bD.sM.textBaseline(xm, 1), xm.font = aAH, xm.fillStyle = bE.pO, xm.fillText(aJl, Math.floor(.5 * i.j), Math.floor(fi + .58 * aAI))
				}(title, fi)
		}(L(144), fi, 3, aJJ / 100),
		function(fg, fi, j, k, aHE) {
			xm.fillStyle = bE.pJ, xm.beginPath(), __fx.settings.smoothUI && xm.roundRect ? xm.roundRect(fg, fi, j, k, .1 * k) : xm.rect(fg, fi, j, k), xm.fill(), xm.lineWidth = 3, xm.strokeStyle = __fx.settings.smoothUI ?
				"rgba(255, 255, 255, 0.3)" : bE.pO, xm.stroke();
			var fZ = Math.floor(.3 * k);
			bD.sM.textAlign(xm, 1), bD.sM.textBaseline(xm, 1), xm.font = bD.sM.u7(0, fZ), xm.fillStyle = bE.pO, xm.fillText(aHE, Math.floor(fg + j / 2), Math.floor(fi + k / 2 + .1 * fZ))
		}(fg, fi + aAI + bf.gap, aJM, aJN, L(43))
	}
}

function cV() {
	var a4B = 0;
	this.dk = function() {
		aZ.dk(), a4B = 0
	}, this.setState = function(aJm) {
		a4B = aJm
	}, this.a4H = function() {
		return a4B
	}, this.aJn = function() {
		this.setState(8), u.y()
	}, this.a5C = function(e) {
		if (!bV.ze) return !1;
		if (!(bi.eZ < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aJo()) return !0;
				if ("Enter" === e.key) {
					if (0 === a4B) return !0;
					if (7 === a4B) return !0
				}
			}
			return !1
		}
	}, this.aJp = function() {
		bc.resize()
	}, this.aJo = function() {
		return !!bc.tX()
	}, this.hm = function(fg, fi) {
		!bV.ze || bc.hm(fg, fi) || 6 === a4B && aa.hm(fg, fi) || bb.hm(fg, fi) || aU.hm(fg, fi)
	}, this.a4e = function(fg, fi) {
		!aU.aCZ && aZ.a4e(fg, fi, !0) || aU.a4e(fg, fi)
	}, this.click = function(fg, fi) {
		aU.a53()
	}, this.a4h = function(fg, fi, deltaY) {}, this.aJq = function() {
		aZ.aCg(), bi.ds = !0
	}, this.xl = function() {
		8 !== a4B && 10 !== a4B && (xm.imageSmoothingEnabled = !0, this.a1D(), 0 !== a4B && (aU.xl(), aP.xl(), this.aJr(), bb.xl()), 0 !== a4B && 6 === a4B && aa.xl(), bc.xl(), u.xl())
	}, this.a1D = function() {
		var aJt, aJs;
		if (__fx.makeMainMenuTransparent) xm.clearRect(0, 0, i.j, i.k);
		else bV.ze ? (aJs = i.j / bV.fk, aJt = i.k / bV.fl, xm.setTransform(aJs = aJt < aJs ? aJs : aJt, 0, 0, aJs, Math.floor((i.j - aJs * bV.fk) / 2), Math.floor((i.k - aJs * bV.fl) / 2)), xm.drawImage(bV.zg, 0, 0), xm.setTransform(1, 0, 0, 1,
			0, 0), xm.fillStyle = bE.pJ) : xm.fillStyle = bE.pF, xm.fillRect(0, 0, i.j, i.k)
	}, this.aJr = function() {
		var fi = Math.floor(.3 * i.k),
			canvas = ac.w8("territorial.io"),
			ia = (ia = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : ia,
			fg = (xm.globalAlpha = .15, xm.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - ia * canvas.width))),
			fg = Math.floor(fg / ia),
			fi = Math.floor(fi - .5 * canvas.height * ia),
			fi = Math.floor(fi / ia);
		xm.setTransform(ia, 0, 0, ia, fg, fi), xm.drawImage(canvas, fg, fi), xm.setTransform(1, 0, 0, 1, 0, 0), xm.globalAlpha = 1, xm.imageSmoothingEnabled = !0
	}
}

function cv() {
	this.aH3 = 0;
	var aJv, aJw, aJx, aJy, aJz, aK0 = this.aJu = 0;

	function aK2() {
		aJy = aJz = null, aK0 = 0
	}
	this.dk = function(aFy, aH0, aH1) {
		u.y(), bq.wr(), ab.setState(10), aJy = aFy, aJz = aH0, aK0 = aH1, this.aH3 = aFy.aH3, this.aJu = aH1, aJv = 0, aJw = bi.eZ + 4500, b1.z.a4P = aFy.a4P, b1.z.f7 === aFy.a4P ? (console.log("direct pass"), aJx = 0) : (console.log(
			"delayed pass"), b1.z.close(b1.z.f7, 3247), aJx = 2, b1.z.aJc(aFy.a4P, 5, 2) && b1.qo.aK1()), xm.imageSmoothingEnabled = !0, ab.a1D();
		aH0 = ac.w8("loading"), aH1 = (a1.a2.ik() ? .396 : .25) * i.il / aH0.width;
		xm.setTransform(aH1, 0, 0, aH1, Math.floor((i.j - aH1 * aH0.width) / 2), Math.floor((i.k - aH1 * aH0.height) / 2)), xm.imageSmoothingEnabled = !1, xm.drawImage(aH0, 0, 0), xm.setTransform(1, 0, 0, 1, 0, 0)
	}, this.nE = function() {
		0 < aJx && bi.eZ > aJw && (aJx--, aJw += 4500, 0 === bi.aK3) && 0 === bi.kr() && b1.z.aJc(b1.z.a4P, 5, 2)
	}, this.aK4 = function() {
		return 10 === ab.a4H() && (bq.aFy.aH4(aJy, aJz, aK0), aK2(), !0)
	}, this.aK5 = function() {
		10 === ab.a4H() && 2 <= ++aJv && (bq.aFy.aH4(aJy, aJz, aK0), aK2())
	}
}

function cW() {
	var aK7, canvas, a3U, aK8;

	function aKE(eI, name, aKF, s3) {
		a3U[eI] = name, canvas[eI] = new Image, canvas[eI].onload = function() {
			! function(eI, aKF) {
				var a6w, a6x = null;
				7 === aKF ? a6w = bD.or.a6z : 9 === aKF ? a6w = bD.or.a70 : 8 === aKF ? (a6w = bD.or.a73, a6x = .1) : 3 === aKF ? (a6w = bD.or.a71, a6x = .06) : 5 === aKF ? a6w = bD.or.a74 : 6 === aKF ? a6w = bD.or.a6y : 4 === aKF && (a6w = bD.or
					.a75);
				canvas[eI] = bD.or.a6v(canvas[eI], a6w, a6x)
			}(eI, aKF), aKH()
		}, canvas[eI].onerror = function(e) {
			console.error("Error loading image at index", eI, "Error:", e), aKH()
		}, canvas[eI].src = "data:image/png;base64," + s3
	}

	function aKH() {
		aK7--, aKB()
	}

	function aKB() {
		0 === aK7 && (aK7 = -1, aKD(), bi.ds = !0, canvas[7] = aK8, canvas[8] = aK8, canvas[9] = aK8, canvas[10] = aK8, 5 === u.uZ) && u.a4L().aKJ.resize()
	}

	function aKD() {
		aM.a8M(), bb.aFo([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.zj = new a1e, ak.zj.dk(), ax.dl()
	}
	this.dk = function() {
		if (void 0 === canvas) {
			aK7 = 29, canvas = new Array(aK7), a3U = new Array(aK7), (aK8 = document.createElement("canvas")).width = 1;
			for (var aC = aK7 - (aK8.height = 1); 0 <= aC; aC--) canvas[aC] = aK8;
			aKD(), aKE(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aKE(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aKE(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aKE(3, "orders", 6,
					"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"
					), aKE(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aKE(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aKE(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aKE(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aKE(8,
					"googleplay", 3,
					"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"
					), aKE(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aKE(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aKE(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aKE(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aKE(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aKE(14, "bestPlayer", 5,
					"iVBORw0KGgoAAAANSUhEUgAAAHcAAABkCAMAAACLpV+NAAADAFBMVEUAAAAAAi8EBE8ZBQgUBwgbBwIQA24IBXsTBGIgCAYZDAUkCQonCAsdDAcSEAciDQsrCwgZDxwQESwnDQcYEwMvCxcfEgUxDAtOAzEbFwtPAzlpAAJlABVoAAtcADhfADBhACpjACMhEkUyEgtcAUAuEyRaBUYeHQkuFS1NC0EuGRcaF4MpFHRVDisyGDwgHnAlJg8aIIEoHmY9HFlmFhBgGB1ZGU0sLRI1KTYxLR8rJ4Q2LCxJJUg0Kl5QJVEzNBhYJys3L0pUJk1GK0dKLTAfM48tNGS+EANJLlVXMB86Ohk0NHssN4q8HQBWOiVNPSNDQyFLQC9kNGVRPGJMP1VlN15cO1thOl4+RV89RHhtN21ERldWQF1KSSFPRUI5TiwAYDQCXzq8KQ5KRWlBRYtGSzQ3UTZNRn8wTZkjWjJjR1jBLisZYEdSUSggXzw9T5A8VGZWTGgAbD4AbTMHakNkTFMtXz5aTmN+QX1FUodPUmQ+XDRLU3RdUz9PVGwHcDC5PBdbWCsAdUVGX3EAezkqbF9iYTJEYaRTZzlZYHhXYIe3TBq3SypsYEpeYXJYYn9QY5eRUJAAhTlzW4kAigpoaDJLa4G/TT6LWIR0Y1peamCdUp2FXngAkQ+AZGnCUk1yaWq0WyFYcH5nb1QBkyFibYVucDm0WzI8fHp0cEQAlT9XcqRQc7JicZJrcH8CmDJVd41+b1rFXFh3dzwCniKnYKIwkDGxaS2xajt1c8UApjIApT5xe5tff65/f0FNiZGccYx0ecOQfEFqgKFjhJR0gpNFmEiteT5ygcN+g4GIhFVgiqOPgWSHhkmVf3GAh2yJiENwhsCkgUORhVxikYR5ioZrkXeigIZXm17Id3FdlaVtj76Qjkq9g2Vslrt4l6JqoWhnm7tjnbNDr1uYlk+Fl6yKlceenFGWlM9ls3N6rHynpVeNp8SJrbqPtJexr1umsJCorNTYqKWgzqbVwbG3y9i30LnJyuPlzMrG29Dq5evW7tji6ujk+Or79vf///99szH1AAAb+0lEQVRo3oWaDVwUZf7A9+RFXtwFj01dRF4SGAiU0ZRRQDZBLhs4G0hRkCUQUrRmCRIFQu5WvSEoF/Bcg0M5zmQKlRVvei8nCqwsl7a8ope5q7v/XnvnnnqZqanp//fMzL4h/f8/ceEDs/Pd3/vveeZR+Pj4iv9k8fOWwEklWBT5h7Cw4BBZ4DfO97luoJR/8PX19Qvy9UOMoKAgXwX6wVf88vHz4Eq3CPx5bkJHR1Nc8LQwkGARHCxzpUs874JEvLVIELk+Ch8PQX/xUNNvEqCTm9By7NjRNokbJqofIv/RgwvflU6s8wW9TuT6+Exi3eAQt2mRdYPRz3ENLS0nWzoqQt3c4Du4gYEhgX53iMz1Rfb189L3TiWDJ8i0oqqqk39vaelYHhZ2j4vr9S50l5DASbiI4QNcX8kGfi7vTh5FXrKsKqf6ww8/rKxuiLvnHlnhsOCJbwyZTF0n10NR6afA/5+bUJmT9+Ho6OhgbnWRk4te7sBOyvWT9HW7VeZ7vXFSbm5O8uDo0NDQaENudcU9YZKTwySFXXQI8J/Hgr6+E9PWFU8h7iR1+nXatOBpwcty/NuGDoEMDVXmVi8JBZGjK9DtZzG8Pe6qnMD1dcVx4CRY9GYRKEGnTQudNm1+XlIlYHft2rV/6FRK5aY4ERwa6v540ocN8agigUploCfWT+GRQPAnV7EQ89EloaESEwDTEvKSUvqB2tjYaNw11Lagsgj9OtTJDXN9Vo/qhRJZ6ZlJPp5cz2rhhQ0W7yzdflpukn97v7Gxcf3q9Y2Nuw61pVU+FCqZOli0dpho7juiLNCtsI8rnifJoOA7uJIsW+DfANjVJdnZ2SXbm1tP5aZVLpfAYBdnEQnzyqoQb65nHv08d5oHd2bo/DT/3P7WxtVZqeHhiVnZNc39/Sm5lU4Xy2p7J1WInBeeDvZTuHJZBod4c5Flpzm5M2cmpE1N6e9vLMmKn5VeOis2NQuBk/M2ue0RKpvbg+rkehhajCs32V2PZXCo28IzkSxMSgbnAnaefufOrSsiU9fWtJqbkisr3NzgMNHkro8/CRdoCle3cHJD3NkT7KGGiL03CTkXsFEbd9bW7tTPk8BFyZXZoV4SHOy22SRc5N87SkbIZOEErp05c37yVHBuzZr4yPyttUg2RkemFgJ4YZqUxW5be4oT7FU3JjR775DyVveuZP+U9tbta+Mj79u6tRxk69b8qNjUkhpzX0DKsrvgChdX7hTSdxc30Is7ScudwJ0pyRT/gKbWmsLUyGg9YDdv3gzk+xC42bzOP2XlTAk8VyqbwcGu1hwSPDGg/Zzx7E1GyDAI42APXe+6617/gKLWmhLAbtxavvmpp9inniwv3xYTFZ9Z0my8OyBl/vz5cXfNnDvXFV2h7llkIhbieZJe70ogqI13Jdx778KFKcn+/v4BywCbFRuVv7V820cD77zDsU/qyx+JiYzPAvD2Kf7JSWlpebm5y5bNTxBNFeYqI4F3csWyNZmd4xKWL1uYkpaWlpQ0FUGn3H1383aEvQ+0vHDlv5988sk7CLwKwJklNca+mpSAqVOnJi1Iy8mrzKusLEL8OM9BxG8yO7upwFuWm5snAaf6L9xU1GQ0gxhrwLexUTHbEPbGjcvvvYfA5frFYOrUwpKa1tb2tra2hk2bUtKSkgGeV1VVXd3Q0FCx3AMc+DP+DS5qaanKy1mQNDU5paiprc18ytzfD1+trTU1JZBAUTGPlOv/cuXGTz/9+J4M3rYoJio2PgvIgG7tBzG3t7c1NOTm5eXkVcHceazJiXXrPVHfX7VUVeXlVTa09Q+OnjrV346Irc3ALFmblRobGR2xqlz/u69//AnkshO8cVFEdGRsfOqawhJg1zS3SngYSIZGjh49evLYsYQ7+pJiQjNqqDp2/vzXMDsd2r9/PxBFZCEwU+NjQdk5q/T63711/h/nbyLwqxJYv+2BOTHRUQidmrVmrUhvbm7dtX//0BBMf/9sObZ8Uq6nvm1VeedhZEPzBPRYSc3UeGBGRkXHzFlE6R974a0v//63v/2ANP7rKwjMPbW5HMgRCB0ZGxuP6IUl26E570Lgrztajio95zXR0IoJYdXYktPxtYiFxl6SIaoZGQXMmIjFqx4GZV946x+A/erbH27f/unyn1555T0xrIH8yKoHFsfEABzRw7OyYSxA4NHTVS3tUtHy7IcKH+/0DRnMSfp6FLCPr1+dnRiOkPPuW5X/yMZtUBdFZQH71Vcff/zdzdu3L/8JgZHKQNajyqnftvGR/PwV982LTMxAYOA2VB9Nv7NMKySqnxpTS/D11VOLRkV1sxNnrQCeXqrFAAVdQVkJ++1V4F57XgYj8lNPyuytW2t3bt04KxE0Bm5/Xkuru0y7piyJ64dpSQITvRDcv2AqMvP61Rnh6Tuh24lIYAL0yy9FGyPsD4C9dfn5p592kQHNPvUUYpdBi9xZGp6BuKO5VR3pTq4Sw3EsyMUNDMS0tIEmMT9UqpDCnyJu1qxtgC2DvJGZoCtSFrDvX70Ncu3Sb38rgV9BKYXYSO/NInjjrKzVMPaZ06qandOeEid1lBZzcgMDg3AdTbAGLSaOvf1J/sjOq7MigVtWhswrM/8mUT9+/7vrCPvFsxs2ANhFltV+anNZWe3O/Mis1c27DuXlIHXF4dYPIw0GmiZULq6aoE0Yw9HEDGSP0oapC0cPIW4+cMt/98KX/xCZLur7onNvX3p0A4ik8p+ef+XVV1+VyAPP6ctq9fNiM2paD7UuqGoU2zF4UKM1cCTFaDVObhBG0DyF8yZKVDjYnBZgNBu3QwvYVlumf0GMJcSUqW+/fxWpe/2PG379axn89NPPg4jkT9754DPg5keFFza3nk4BdWVsEEFzrMLEkKKHgavCtST6lcFi0GpQ6y1tm7rstLEROu2KreV6OWFFqIh9G6UQ8u6G+0WwRH5GIr/33jsfAXdbTCSMA4faF1Q3hsodCSNNVoLgGVIMLeBiJG1gWCuG8SyFK2EZFAoKVxwChcUO/7u35IxFUKAC9/otCOZrf9xwvwv826efeeYZkfvJfy98Vl4OY0hWDaib1ubswGrCwJtANwaFllKp8FMRNGXgOEGnoEFhDHHT26ZOOWXcXhgftbi8/DEn930ZC2DEvXQ/Ehf4GQRG3CsXtpVvFNU1tyZVNcprlxkYxVpxBc+bTDStVQcq/NRag0HNWQWW0rKsDp8B3FBjXoDxtBEMjbreC186uW/LgrLIi7vBzT3738/0+sXRsZmgbnJa2z3yuANBZaEJ3MbzBg24OFDhoyIMnJaw2gUtR4L1MTSiIIXNMDnGRi3WI0ODfz24r/0LwNf/fP8d4OfBvcjMVAREVY25IrmyUZ4vZ+A6liUYg93GqWiIX6XCB5IXgoqyOyhBZxJzCTQ25gZUmEWF82VDu7mvvYYUvvXFholc8O97l8HM+kXIzMbTAQva5spcjGR4kqetDiuO8ZBKSjGuGCupoi9yJoHgTGAD0Piedv8pYipFL9I7De3mvgYOvnXtWZn7axcXsDeufKZ/cA7MmDWnfzW1cr08Xc6AHGIou9Zh1ypMPE0EoXgOwiGLtLTJTjloGhRWI4UbcwOWn4ZUioIBAxnam/sv4N6SDb1hwx///CwKrOf/+tcffwJu+eyIqMRCY19AUtvcuSIYqcvhAm+6SJFaK6imDFQEBkoK8zRL2gScRcUDXdrqP6VPNPQivcz9+H0n9rXXrgL30qMy9tplKJnPPnv5MgwhNy5s2zgbmblvmX/l+pkz5zrVpemLOqvBpEPqqgKVwA2cgTxM2SkV6zBQHBQPNKuXFk35pRlSOGb2RpeD3dzXroOhvwDwhi8uId2vXbt07TZMIN9/f07/CHAza2oCklvnStwwnDKxmGDHaJNVa0GeDAxUhKD2hLxutROkzYKbTBQehlYIxoBfrIaIjp7zsORgby6y9KU/3n//o9du3XYKaPv9vz/f/PDsmNjMinsXNpTCXZCd1agwM3ZOQV+kTJyOUIdI3BlQsVgT6bBoBiyMVlQY3rGi4hfztxfGRv0M9zpK4Ucf/cKNvQ3Y/zmyt0zm5jbPFblzwyCHGNwiUKSD16JMDZL0VeJaHW3iSdY2cOLE2aUMFI974A133ft/cd+G3nDr0rOXAH/zypUrP928efOnG+f+/cYbTu7K3E0rkNnmhqKgIvacPZtvsWshUdGAAfU5JESjpWmW5VnCcqa7d2zPUg4+0tyZc+/1n9It2fmxSbivQZG+haiAPXfh3QtXfvzxyveAlbiRqQ/15VZXiCtECCqWXnpmrPuMwJAWljGAoUUutGNcZxUEcs9Y3ZLhsXyUSzNmzkzxXz5WkxUbM3vbYy94xpXT0GLvv33r5pXP392372Ukx48D98gTeuAmPmQ0VjYsAW4YRjGc5sR43dKxD3DWynMUTcHIoUANimFUlGDnl46NL9kyPoZBimOhdycF9JnFPHIXShH77Xffvv2vf0GtlDx75ZvP9yE5fPi4zC17ICIqfmXN6cqGCkldjiodO6CqG9tD2WxWLc7ocNQHxQ5lUJCCgz4xvsX3wHgphRROgR7cjOrGgx5149vvvvvu6vXr169evXpdDqgL7+6TuYcl7u6yh+dEx6ZWmM3VHQkzIYcGBjRjw0vSh8c0FgePqVCF8JPqFWWyaHWURVg6NuybPjyePjBALc8JOG2uyYqPivCok+9fv+6M3VvSy80fz+3b56UvOLj8AWToptObOipC0XBDdI9vUWwZ7zY4TLiCgbqhluZJGK84TmulGQrcgC6AXCpKKjK3OvuCHFbvf4fC6OZNJxYFshuLuJKhyzdGoAKNFF4CJcmQPj7sq0LqGhhGZ4WBI0jm4iRY2uBgNOljB3yWHBhPZ/bk+febawqRurJ7v/32u6ti0ly48OPNH69AAN+8ee7c5/vu5O5GCsemgsJFLU2QQ1jveLovaENoeQHnWTGcEVeNEySUTZJzcKre4SVr0sd7lzal5Z5uLcmMjc4X+/5/zv/nhx/kpHn35W+++fzld18+9825l/e5xcV9Y2+tuOuxUlR4B0eXjtdlxw2PB2kFB+SvQZ6vYHiG+cpg4FjcahuoG16zprh0fHVeUpu5GZl5G1L3/A8/iKPczZ+ufPPuvsnk4EE398ju8vJV0fGpoofNA9PHexPqs4e3LBUcjI6H8QoKB9IXygb0eygcBtJyZryrM6Ezu/dADtofg6haVS5y0aITyuCV7899fnhy7EFXXImGhnlSVji/bjy9M6O+q/eMjQMrM4xJLBwKSF8DiTFWEHLPmdI1PQX1nUuqk9r6ZXXRHCsudqH6vnv8+OGDByejHjzswQVDb82HyKpoP72ppWm8tKAz46WXesfOYiYLB/MVjlZECnGM1ym0rGCzLB3rVsUlJLz0+7xccyuKqlVbyx+Tud//+9z/HD98+MWDXuCD6N/Bgy++ePh1CSpzy/ViKpnNDR29CS+tySqIWzqWb7AJAqtVGaAOK5F/IX1pFUnxDq50vDeuuLizckHbITBzbLS+tgwtecHON1Dtff311w+/iMgH3ViR+iL85Q0PLiyQ8iMTV9aAwh1N4LqMOAhW0mbnSYUKzXBqNG+oCR1rpWleRwt09/iBhM7OvLT+/cjM+bAchGnjrfM3bkCLk8CvS2CRuG8S7JEje3eXlaEFUnhmRfMhc0dHZ09PwYrxsXRB0FEMxqJOCHMOLH41BKSRzgCfhlSOAbhyQdOh1sbCxFl6tAyF9eBfoEB8/+8jLrBT5YNe2CMge/fu3v0EwtbuTEfcXacbOn7fmQXtppSGuBUIhMWhASvQYl8C03Y7i6f3dhVXpfT3G2G5P28rWoeWwUL/M5DPdx85clwky2AvKlJz9xO16PpyaeEN3OXrdg31d3RkZHeN71AQnEPATTJWKa73gzAtAutsNsuO3q5NOQ1D+8VtBj1a75ch0YOU1f5m797j3mAZC9AnEFCSWoTVz0sE7uP7TyGFu3o1BpuDx8WyoUbbCiIXI7QUTBzQGiwneruqFgwO7XoccdNBYXHFX77tyYdBNpc9sfsIUtkJdmLBo5sppzwiyrxZiRnAFRXu6eo9YbGxCEsRmNq5zwDaQsVmeStNfTBWWlQF6gJ3eUb4rHn3zYuJiIiYAzIbZNGDm8t+I6osgUXsG8f3PlH28KLZs+dERMSgjaToqKioyFnhCAvc/aMNR9uy6k5YBnCWNxloSmwLUh/U0QxnsQo2O0Od6a3OGxG5q5dnJIbPQptXSKLhjhFzZi96uOyJvUck8IuStgj74OzZ0rZZZCzaOItPTEzMzEZYxB08enRJ95kBnBcsPMeZwNLyuhsWohoV9CTWaqPzzVUNo4j7+Pr1q7MzsuAOcJ/w8Fi4ZxQiP7C5zA2Wsatmz4mRtglTM5GsXJldsnqdhN0/NNpx8s2xE1qbw27lTDRJomWKs+/DGKtSaGHWm95SPfIhcEUwoFeXICksLMzKSg1HZBEsRpcob4jaRkRHxqPNQbQtinZGRXkcPblEO4UjJ0f2+FIMhSsUCkwH5Vkl+RfSiOGsPEPQVvtHxzo+/HBoaD+QAd3Y3Ii+QLZvX11SmBUeGR0x+8GyWhcYhdRmWA9FxmeUbK8xGtFGdSu8Hjpkhv+ffjo6+vXXX58/9nEpw1tYrYZmeYhoTI4rJTR+8LDVyurIwWMjcOWnkpxG0tdn7Dv90bq7715SV5KRGBsVMftJ8LGYyGLvgTFOfJqzfWX2+sZGuLqpubmvuampqehXTe0NDR0dR08eO/mBjaO0JquVY2jXvoq4gQXrQc5iswtvHjvW0lBdmZubsjAFvuAlIMAfSUDywsK67StTAfxAWdlvjsiluKzsSRG7fSx7ukLxiylT0OVTRUlKWlBVXV2NNr4H8wnGIojuJaQNO4mrRFHFQ0Q7PjoJ4Kq8nJwFSUnym3Ny8vIqK6urG4oqKipWIo2p8jIoXggL1QKGuPjCmr4+hWJ9Y3N7e/sgyJuynDp16p9InrNdvGi3WXkTLW/XufTVURiG4fD/1H/+809ZRkAGIQs6OtoaAPqrhramRgCDj/UA3ntExD4MM1xWjbFm4S/XGftEMR84cKCrq7Tzpa7h3rEzZ/PT05cyJhCGMdAGCg/y2BeFkDYwENQmhtb9oe8PIM+d6O7uPrAlfcmSJdn19cUFmRkZCcs62oyNFZnxkTEPQA1+QuoAi6PR1o1x05RfNiYkZGRkFhQX109PyKyfDiPG2NgZi4BWARDIKjVURchYT64U0qzV7rgI4rDo4DIMW7pny9rM+p6Mzp76jIL6YiAXDfb3NT2UGh8Vs7FcLNtltY/ERIYXNhuNuVOas+dnZBYXFxR09hRn1mcmZB/o1qhUQKR5we5wOLzs7OPcb9cQJG2ikR00JMQdXGizDNStrQdmfUbC9PpOUKSgYHCw3yiCF+slrH4xsnKzsS1gWU1BJlzRU6xIKO6Z39NTv6ZugOMtUJFhsWniBZvVwjE6rayu+3mKGkwNRZ0kcEJnMLE81LSBHXVr6uOmZ9R3ZvRkTi8Ac1eMDJqbUWxF56OGUVubL1m5PTegaXp9fX2morgnobMgIS4DsDs40POiww6zjQKJmtHJweznfi6JugO0JFSkQQSOVKhJnttTV5hdD3bLAENn9HTOn942MtjXhFw8bxvqdjBFhWfXtBo3JS8rUGT19CQUZxSDXzrXTF9bt2NgANNADUaBw3E8x0JllrGynaVHDKgJQ1NCvhBMOoMVLM0NDPSi2EzwXfNSZ0JPZnFG/cib7WBpAK+AHlu7AoaZ1WDltOTf12dmFvfEdXZmK7I6u7rW1p0YEByoWHB2CBm7wKPcdRrZTzxH4bI0xBaY16TDFDoWohDHcZNl4MSJ7t70A8PDXXGZmUAWLQ3gxFkrNm5cMSscPQs1b0oreqgYvFqwpGt4eEv6gd7u7gGLFqcZi01gSdIE33gWQkft+TzU9dwZBnhUsxXoOytYaYzmDDgncPndY2NjdcNb4jp7sqYXDyJLrwNw+KxZgM1e12puy035/ZrpBT31ii3DdWPj3XV7LBZGx4FbGVgNSd0AklRHBE3gSmjggaVNEA2QSxyhwEidGtZMOP7B2bNLl471FnbVw6R0YGSwv6l53cqMRLHJrmtubd2Ut+lAV1xWfdeW3jHVjrNnBxS0zU6pCBLDWLiVjWcoAldpxfWnh52dXBVENAoBiyAwuIIw2S4ynMNAYZzDosWYsye667YUggnNYOnW5nXLV86fD60dJsa2ylxjd++WtVvqek+cJVW0YKc0WquDtNjgNiqTHSLaCu6T+p/3uRHJ1NCWKAqSiNIQBt7muGhCi0Qr5bBqeYoXBvIHdnSfGNDsAUsbd61btxxk3bpdZuOm3JodS890QwDvsAioGDoE0kqabKT9op3TqVU0yzIGA61zlmaP81c+zpDGIHtpysRbLIKdwSlKcOgEgeDthM1GEZDRFoua/OjNkf5Dux5fJw0UoG7lRxghfDAwwCkYO69z0LSD4R0MaSAEuyBYYKIw6LQEgWv8JuPK7CBpyIOiaVBgJpg9DVZIBZ5ysFqtTSDhE2Dc6ZHBJjQJgez61Lwpt4/BKAdjEKwqXLDjNhtN27V2B69VENDSQVDPVQcF+XmdC/L19T5NGIQRJEkZOIMCbCsIWoZgrQJjEiiBdPBqg0PLUbZTI4MNInjXofa2yiaB4KiLWsxmIy2Ug+QFK8yJjN0mGBQEz9I69EAhaMIJOzfX9VxUqcZwrUGnYaBSCoyKgFIjUCbSatc6dBxpIx2U9bmRkTZxEtr/aX9D5UeswUYLUHPspAPca7LyFgOutlp5K4sT0Alcz+a8zgX5+vp6HVBFwzxUEJqBJTLLqQmeN7FWDGftoJXOYTIQDp4iW0cG22EG27+/v62yiCbsNoq22Amestt0hM5qQk6irKyJ40hah6uDvE6aSecHEdd34plNJQbrBx1FsyTEkoE2sQraarHiOG+3agi7nVQPQEyjx+iftjVUlioMDquKsNkNBAUJg+E8Q5sAzKD2ZhCj2OOcio98VlPk+vp6c0OUGhz1JRpnWQNJmXQ4z7I8ToLpKEywmgi2FCw9OjT6ZkdlkwnjBF7BQIqqdDwsCRQmaH2w6MEZSqvVoqes3lyfCVyPs1BoTzpIjR6Soo6ppSGnaYMJA9OzsIA1wWpD2w4z0IcjRzuq88VBRQXthqNIFiosWIogYHyhocdrNOpAr7O5kr5Bvr4/x4WLUWTD5wU+pLQWPVSjKZrRoR0ZLTZ95G8njx49Wl2Bag3NwD9AGdBqgNaRmAbXUiiKvQ+M+MingRFQ4cLKB2b8lDIWFTBMg9aqUExwiHE0E2gpHUyimCYkeN1XX311sqMhDj1Lht9ShIjCcYJApoUKhAHWb8I5M5Hr6+vU1/NQrtLjXKvr6EOQX6BSg0HyayAp1ErxMfHgV1993CEeRUFoXDMDxlGNUjlDHeQ+JCIenXQdvRYxIlXi+ngGtNLjOO0kR66VSvGhOOBCmgfbl8hnHpXKkGB0MmOCTDj8LYayB9cJFrFKj0PLgT8n6BT0xHNEIYE/g/WgBgFW4v4vtt0gxYBWEv8AAAAASUVORK5CYII="
					), aKE(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aKE(16, "apple", 3,
					"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"
					), aKE(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aKE(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aKE(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aKE(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aKE(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aKE(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					), aKE(23, "clock", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAZGhkoKic1NzRYWleAgoCjpaIA/wA4/zvJzMl5/3nk5+Sq/6rI/8fm/+b///8vfxrjAAAC1UlEQVRIx4WVMYwSQRSGh+O4hFBIe901VjZUlxgb2gvF0VhcLLhGGwrKI4TDksYoiUpCLCgxxgjqxeSyxZZngVIehYYSYzRcjIfurfB882be7Oyy6CvYYfbbN/9782aeOPqPifDfF8PPw+frgZczkLZ8Hw9UPwLbt2YMUJ1AYH9igBHO++27t+89k8TXFeAVzrbzQtr1Lo7HEaCOc0+EtmQZlfZCgBTwWL5Lne7g70YF4CoEPAQ4oY8zcCgfmy5AzwKqM/CyBFyDFj232YVgB4ciBIiKdqGAGVyKCLAF8MUAGELRANoVulgYoA9zjjDt53kEcKYBlNhiQGR5kHBpDQkcgy9ibJ/WELTCzzgAZTYVMDPCAtvDKRfOCaiBn42+T7kouwS/CTgOYjBWkYnJyLJA4BG8jr5PU2a3YEnAiCWkHJ2uZJecbshsC6kxz3HpaArgE9rFVAmpUTsugZ/Te32ilUwRqIOngRsAbxTo5bTLXwg0zE7il55KkM58BmtCAiaPJRJfMWGnMU6BUV6Y9ABc5raDvVdAHwZWfgBYIS220EDZOeX9Aa3wpuMUDbAJXJPyyLR4dBECigbY4dEgWOKg0xYGUFu72+nkA8BW6dl7tqAwfwRTGQhi4DDvm0zKSi2/y9m4yuRcrLF9LCl7s2LqakrbrQNbtS5WLRYMxBQ12QZQwRxN7DgjB4Nqsm+HYVtGHi0EGutUluQdIkKHP2wuBqGP3mCNhDMFjOJTdUueGwIa1hrJvJWFKw3UrB0q+NYK53wFTfSJoewWTQzLJgO4xtsokNIXJQG4BrswQEndYfqe7BsVDKCChXXT1k3VVtRRT2BxTu3LfMTHoaDSfgeURAOgCphLIkHYHqgYrYYiG47HSTqwupawW5r/VH6/K5sWN5ygZ9WpZ/qO41LbG692vQdWVwze241V+aDWO45vzTXder/31jb32vDDp2HvX91/1f4C6yMGMx9Ja7MAAAAASUVORK5CYII="
					), aKE(24, "userIcon", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAwAODg4sLyw2ODVCREFgYl+Bg4CkpqMA/wDMz8t5/3il/6Tk5+TD/8Th/+P///8NWuTPAAACa0lEQVRIx92Vz2sTQRTHR6GI4GU0SQkEqncvXoSAl9wFm5MXIe1fkCpIEYRcQ0L8ASp42mvwkmtP1taKCIW5loLstVjq4o/YrN3k68y8t7OzWyTise8S3pvPzPu+H2xEd46JswW8ycd7wzzQj4B97zgEDn2gp8+BPQeExj3xgE0TwCw9f2JdbDigD7y6dlfhgIEIH5s3A3rCAiN8kFLWMe32Ph/tdwc41m4FcECUNHREBuiblw9HuG/cthVlgB7GJiDvgC2x7iImDAzw3Eaq+uzTawX8su4VK0JY0at8BS91boXv1pVBCjxF0wZqdLVuNRpgWgA69NJlhUYeSFOomG62qQqpTvIiK/gpOdWW+SnhNwN9KrPKxWix38ifZI264QMVAtp2GIJmtZMHTDVlNXOtHiB5IMtBlgIvZKljJfC49fx3dQd/SNdR4w4d0AtpBtygFo/kSzfTgF1t4IYFSKznRA6AhyT7PUmwDasEblih1kS5k6bt+A4Vo8wTwvSJc5eBeLX0GNxpec/UIczCcXmddGHiBl+YWSCiBZK3kWq1K2pvDDWQLlxJIV4R2hYC0mKmdqCBdOFuIVkW1hZUKlOLEG5dAjwTbHXwZqipBjZjHkCcnovzilcomGkgpCKvY9sBokUro1ungWjMipcz4AK3poWh6NJ26IXMznUOKn0pA8oYe4Do0GJ7wCLe+UCL2l3LgCrWfOASNccDalgR5zLg4ilgyS/ClLF1Crg6DxB/BY7XtXWKAEcNwFYA2P4FePvVWFQEZjZ85L7VoyIwKXzMR1j37ZH7qGZAwSbzgOILgyKwcTb/Fv8b+ANlD8k4eGaP9QAAAABJRU5ErkJggg=="
					), aKE(25, "battleRoyale", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAmMCMAcQBbXVoArAB8fnuHioaQko+cnpunqqYA/gC2uLXAwr/N0M3c39v///9qRmqPAAADUElEQVRIx7WVT0gUURjAvzezYtnlgVlZBA/xNKcR6R/rxrjsaU+Kl4SUvHQ0oVMEUUgdLfEY5jrsaa5L0MUKpEN0EBFPQnsQXcVwToGL7rzen++9mV2KLvVO8775ve99/x9Ef1nwX4HSwKAEAoCL5d/9Fj+gLADopeAMdiLVIoB7c84TAFn+MA7gtBNFBuTG0/izAlb40ashAJIi1QGA3iffOX8jAZjlPPkxry7ExcC9t8bFGpMAK8jP5OsEzeH/EPrWYiX0JRD0c7WO543LgftRi5pUelHpjvX2AFVUIa8FfA9kHMIuBJIZRwEVsoDArqMAUrcHPGXiZTzB13MSqMIK7lu+o0ycxj1fVEDE7hrBuvSUuUZjMtajgesGaPo9QuGI2Z75ZQUEF4wkeUGiivvJ8qCBSreR8H3q0Sux3Tm6HiquFbXGgMxafBeBkGzw1Myuut1sIhDBIys79Qv2O3meM8BIKlyyJvJD30MgcN9Z6WTKzqj8g4rdbWNm85kFtnXuVIqZNf29dehsSJcY6ASj7a1CagzkMn1RxBLY3UgtdNoah2k78xkLvTYghFvi9p8L1kLIdbQeI1OcP4xtvGyfGKAKffWT6dRCr715S6VoFfJLJg0H1BHNU06BUPSvuMREvDUuFDBwUoC5QhQQU5tfhkA43quv0aGeOvAdWylHhX06SN1vOhI6WfWkBgRNTF7GLR+EUzWbLHZNFqiplIaoji0QvdH0DRDI3trGNLRkwk+HF3gGCGWvJahgXaYjeWu6RHtB+22WD20XtVIjo1FiCi2ZN76aTsV6GLGNYYoreUAyoTb9KGJIsOga1MsCOCNq4Iikqc8t8LK5mMLmdaKA3DcZz+QCg7RPr0ZVarVlc2EGgkgz3OFZFZBRIC8ur9oJpVVAqiCWp3KsL1N3GkAFp9K4RZATKllOVcghphXU5GhpUBmRhnZV6FNj0MUdiIw06TkVLjyjgfOoD4R5NRD4NmArnmigGy2qwqUdH6Bw5DtFreIkc4U0aJQMg8fcx7KmlYo9PWnJa+uSKPUQRFOg65t60kI+xqCoZmGqkKSKZE5P2sCd3DHNLqky5u+4RnswkmJ5na8icycoTlqhWb6gHSvEU39+eUul8r953H8BBeY6pZneQOEAAAAASUVORK5CYII="
					), aKE(26, "oneVsOne", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAACNwBHSUYAaQB+gH0AugCIioeSlZKanZkA3ACmqaUA/wC2uLXGycXa3Nn///+iBll7AAABfUlEQVRIx+2UPU7DUAyA3aZFCBWUCDF06wmga9WFG5CoYkA9BNyAK5CBKYfoEGWIsvQGcIOiDkxISAhRVEGN7ffTvrQRGwNKhhf5e1/0bMcJFL9cUAv/TkgB4MTdMEgJfYoaiSMYJEIOfI039y0SIYYJrnqOYBELud98LQlrxEIEHSwJawQcwHVJ2EDA9ewhRyNOa5D5kp5CIsTQfJCICwMvln2NRLhrTlAJp4ifjZDWhUFK6KAWDhC/wT9DnBvkClGLV7hFfNwSXiRJKh3PYUaLQUZY7HN0yQ9PpUEGaeEZJLri45/onCUYpMsEHfUPKT/K9B0sYiEDL1JRSN35OCLJs0hafZ/EKkrp/C9qw03XIvO6VZRRBSt6B72hRa6Q+xeIM2rWuEIouNmUBk/abiGUDs69okqIWyxM25UCl0GNHlYKGU2qHq3dQsHNXsoHUiGE1Ow3r9gSUhkzLo7vbQeJkMk0Gtx1kPo2R0EQDGTeg+A4cVD9l6uFPxZ+APLvRdqXArbWAAAAAElFTkSuQmCC"
					), aKE(27, "zombie", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAANwAwMi8AdwBWWFUAqgB+gH2Ji4iTlZIA1ACfop6rraoA/wC/wr/JzMn///+1mI6XAAACOElEQVRIx9WVv24TQRDGP3w2xAGcSIguhZ8gPskVUgqXVMQUFEguXEYUEEX0+A1iihRILvIGoaTCiSwXJ6VwSZcI0UXCkRU5UaLccjs7++92eYB81Xrv59nZ2W92cerpoP3umz8DZ5y11yH16j9AloL1YhQD5PfXf+f5xWcgGUWAFNWxIN10kITAV1TngpV3sFEGps53Ie6a6JWALo6Eo2uzCAMTbApPM4w8YFgRJTXrHoC1MnDJIcArHJWBnDeigO4TEaifWCBDKwSu1BoEnGAcAvfYMsCwKiLq1A2QNmLA98QA69sxYAENTMNNqnL3GJhAREVZSuBY5Xi7c8Y12lGbam5ogMq0BCpzdkPlC23jGQPDp/SzMGNDJQdQzH5dAw0VoAihSewXg0MNdCVwDp7PaUBTNQ3Is+7TfItD4bE88YSBVAJNml9TKajFLCDjwQdkaWY1NwcDXJoIA28X0DnYJcw2j1dMDp+KvjJJmkKdyLIMaH7ubtOUmg5rof8nduVo2z2siXRcrqcLM6oUrsmUIM/KD785gBB7wBvPMGy5Xx+0EX58LFnOMe3dOGbaCUzrL1ox22e0Jmmwokd/nMYprp997UPtzxskXvNyFksqprLNltv+b7FK0+dsO3GIl/4VlIL/x7HKVxD3xr0s55npiRAoNc3DBJYQs+eCavkwgal0nQXy4MXJ5FVogVv9nthHTfaGBa4QvHpp9acFLjpJAAzhqRYA9mGWetSLvN0HbaP38dc/qn80XpfaOx2MlAAAAABJRU5ErkJggg=="
					), aKE(28, "noFullSending", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEX///8A/wD4+Pjp6ekl6yXExMSZmZkAwAAygzJZWVkgTCAXNBcQHxAIDggCBAIAAACV9pxNAAAC1ElEQVR42u2VzWsaQRTAh13Wu6cBU9q9VPC2p8Cm/8ReGkibkiWSQyGJ7ClQov4Peio0LiH00EIqEkJomkZ6EAmx9VSltenSi2LaklNcVo3T92bW1XwUL6WnzOmN7+eb970kPOGQW+AfAmt/U64JIMI2b9ZzBQB3lyrWTXp6PPuDA2kj5t4EpDOKK55okpXymm+EBsbWa2TVEk4ms3KeDVBDi4z1OPLM6Wp6axjmeyN6xj4IPWN9IOjZwFQcdwhMeer8fhlM9eIqmbbhj/mLkpR77hR8IFXZlXP1MK3GCZzohUV7be1xicx1BUDP4htmqBGOdFQEpEQheWKGvmhEObQQoEVPg+uDejJL+NFbxR15wwQpUQCAVhkoZkqSXYTf5kAO9cGnl8uLgNYBuMNqYFmyM8pHg8i2pxLlmxHz7rNzcMcFIFnT0O7MT02vEdn5bZCVrHxgRAfgkdJFYFE83KiBRunmDR0FEmsdAdAbA8qprHIw66aXjg29ife3GpFfWByQ0Z9ypG/E2m4ql1GqW3DfQ2CDA9KjDALUa5InbvqztGrjfe+1RiQOxJ8yAZzPb8m5tjZTWsB7IW8QKWdhmINDH4DshDCFlwHasNZ9gITaqpQziQC2/SewNwTQCYAs+vDKd3IMGD6R2BoPcwS0l30nE5DlWP1IE4kaAQ0I8+Q7hHnYgTL0O+pV4JcRa9oeJOoT6pxhsQIAU23oWQVS3YMAeLlbYwAvFq8KCDuidRbKIwDL7fHCExvLjYJsbwYANkzF4RaiDBsG21PvWwGALbeZ6sZVadruRdrq/C6R5pzWcC4Y86Bpob1xcFghnNyRbRAG/uiB4gLbHkyhvo6zZoYcxvaCDZOEwREj+W6frxMKg3NqBSuIwpvly7O/DqM3AmB4T69uhzem0hgCMP7b13YM/arpdQFQWCCF6wtmKlggE1fQvYcTltjENThxkd5+cf4P8Acm8L1xck3dqAAAAABJRU5ErkJggg=="
					)
		}
	}, this.get = function(eI) {
		return canvas[eI]
	}, this.w8 = function(name) {
		for (var aC = a3U.length - 1; 0 <= aC; aC--)
			if (a3U[aC] === name) return canvas[aC];
		return aK8
	}, this.uz = function() {
		return aK7 <= 0
	}, this.aKA = function() {
		aK7 = 0, aKB()
	}
}

function cX() {
	var aKK = [
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
		aKL = [
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
	this.aKM = null, this.aKN = null, this.aKO = null, this.aKP = null, this.aKQ = null, this.aKR = null, this.aKS = null, this.aKT = null, this.aKU = null, this.aKV = null;

	function aKc(kA, oD) {
		for (var aKM = ad.aKM, aKN = ad.aKN, aKO = ad.aKO, aC = kA; aC < oD; aC++) aKM[aC] = bO.g0(64 * az.random(), az.value(100)) << 2, aKN[aC] = bO.g0(64 * az.random(), az.value(100)) << 2, aKO[aC] = bO.g0(64 * az.random(), az.value(100)) << 2
	}

	function aKb(kA, oD) {
		for (var colorsData = aE.data.colorsData, aKM = ad.aKM, aKN = ad.aKN, aKO = ad.aKO, aC = kA; aC < oD; aC++) {
			var g1 = colorsData[aC];
			aKM[aC] = 4 * (g1 >> 12), aKN[aC] = 4 * (g1 >> 6 & 63), aKO[aC] = 4 * (63 & g1)
		}
	}

	function aKt(fD, aKv) {
		aFA[fD] = 0, aFA[fD + 1] = 0, aFA[fD + 2] = aKv, aFA[fD + 3] = 0, aKw(fD)
	}

	function aKw(fD) {
		var fg;
		be.oL || (fg = ad.a1E(fD), fD = ad.a1F(fD), be.oL = fg >= bd.aF9[0] && fg <= bd.aF9[2] && fD >= bd.aF9[1] && fD <= bd.aF9[3])
	}
	this.fb = new Int32Array(4), this.aKZ = new Int32Array(8), this.dl = function() {
		var fb = this.fb,
			fb = (fb[0] = -4 * bV.fk, fb[1] = 4, fb[2] = -fb[0], fb[3] = -fb[1], this.aKZ);
		fb[0] = -4 * bV.fk - 4, fb[1] = -4 * bV.fk, fb[2] = -4 * bV.fk + 4, fb[3] = -4, fb[4] = 4, fb[5] = 4 * bV.fk - 4, fb[6] = 4 * bV.fk, fb[7] = 4 * bV.fk + 4
	}, this.dk = function() {
		if (this.aKM ? (this.aKM.fill(0), this.aKN.fill(0), this.aKO.fill(0), this.aKP.fill(0), this.aKQ.fill(0), this.aKR.fill(0), this.aKS.fill(0), this.aKT.fill(0), this.aKU.fill(0), this.aKV.fill(0), this.aBX.fill(0)) : (this.aKM =
				new Uint8Array(aE.fW), this.aKN = new Uint8Array(aE.fW), this.aKO = new Uint8Array(aE.fW), this.aKP = new Uint8Array(aE.fW), this.aKQ = new Uint8Array(aE.fW), this.aKR = new Uint8Array(aE.fW), this.aKS = new Uint8Array(aE.fW),
				this.aKT = new Uint8Array(aE.fW), this.aKU = new Uint8Array(aE.fW), this.aKV = new Uint8Array(aE.fW), this.aBX = new Uint8Array(aE.fW)), aE.iT)
			for (var aDn = bj.aDn, aKM = ad.aKM, aKN = ad.aKN, aKO = ad.aKO, aC = aE.fW - 1; 0 <= aC; aC--) {
				var ej = aDn[aC],
					lp = bO.g0((aKL[ej][3] + 1) * az.random(), az.value(100));
				aKM[aC] = aKK[ej][0] + lp * aKL[ej][0], aKN[aC] = aKK[ej][1] + lp * aKL[ej][1], aKO[aC] = aKK[ej][2] + lp * aKL[ej][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aKb(0, aE.ku), aKc(aE.ku, aE.fW)) : aKc(0, aE.fW) : aKb(0, aE.fW);
		! function() {
			var aC, fc, aKM = ad.aKM,
				aKN = ad.aKN,
				aKO = ad.aKO;
			for (aC = aE.fW - 1; 0 <= aC; aC--) fc = bO.g0(aKM[aC] + aKN[aC] + aKO[aC], 3), aKM[aC] += aKi(fc - aKM[aC], 2), aKN[aC] += aKi(fc - aKN[aC], 2), aKO[aC] += aKi(fc - aKO[aC], 2), aKM[aC] -= aKM[aC] % 4, aKN[aC] -= aKN[aC] % 4, aKO[
				aC] -= aKO[aC] % 4
		}(),
		function() {
			for (var fZ = aE.fW, aKM = ad.aKM, aKN = ad.aKN, aKO = ad.aKO, aKP = ad.aKP, aC = 0; aC < fZ; aC++) aKM[aC] += aC >> 7, aKN[aC] += aC >> 5 & 3, aKO[aC] += aC >> 3 & 3, aKP[aC] = 7 & aC
		}(), this.aKf(),
			function() {
				for (var fZ = aE.fW, aKQ = ad.aKQ, aKR = ad.aKR, aKS = ad.aKS, aKM = ad.aKM, aKN = ad.aKN, aKO = ad.aKO, aC = 0; aC < fZ; aC++) {
					var eH = aKM[aC],
						uv = aKN[aC],
						ft = aKO[aC];
					60 <= eH + uv + ft ? (aKQ[aC] = Math.max(eH - 40, 3 & eH), aKR[aC] = Math.max(uv - 40, 3 & uv), aKS[aC] = Math.max(ft - 40, 3 & ft)) : (aKQ[aC] = eH + 40, aKR[aC] = uv + 40, aKS[aC] = ft + 40)
				}
			}(),
			function() {
				for (var fZ = aE.fW, aKT = ad.aKT, aKU = ad.aKU, aKV = ad.aKV, aKM = ad.aKM, aKN = ad.aKN, aKO = ad.aKO, aC = 0; aC < fZ; aC++) {
					var eH = aKM[aC],
						uv = aKN[aC],
						ft = aKO[aC];
					688 <= eH + uv + ft ? (aKT[aC] = eH - 88, aKU[aC] = uv - 88, aKV[aC] = ft - 88) : (aKT[aC] = Math.min(eH + 88, 252 + (3 & eH)), aKU[aC] = Math.min(uv + 88, 252 + (3 & uv)), aKV[aC] = Math.min(ft + 88, 252 + (3 & ft)))
				}
			}()
	}, this.aAP = function(player) {
		var h = bR.g8;
		return h[0] = this.aKM[player], h[1] = this.aKN[player], h[2] = this.aKO[player], h
	}, this.aKf = function() {
		for (var aC = aE.fW - 1; 0 <= aC; aC--) this.aBX[aC] = this.aKM[aC] + this.aKN[aC] + this.aKO[aC] < 280 ? 0 : 1
	}, this.a1E = function(fD) {
		return bO.g0(fD, 4) % bV.fk
	}, this.a1F = function(fD) {
		return bO.g0(fD, 4 * bV.fk)
	}, this.a0m = function(fg, fi) {
		return Math.floor(4 * (fi * bV.fk + fg))
	}, this.a12 = function(fD) {
		var fb = this.fb;
		return this.aKj(fD + fb[0]) || this.aKj(fD + fb[1]) || this.aKj(fD + fb[2]) || this.aKj(fD + fb[3])
	}, this.fx = function(fD) {
		var fb = this.fb;
		return this.fe(fD + fb[0]) || this.fe(fD + fb[1]) || this.fe(fD + fb[2]) || this.fe(fD + fb[3])
	}, this.a10 = function(fD, player) {
		var fb = this.fb;
		return this.aKk(fD + fb[0], player) || this.aKk(fD + fb[1], player) || this.aKk(fD + fb[2], player) || this.aKk(fD + fb[3], player)
	}, this.aKl = function(aC, aKm, aKn, aKo) {
		this.aKM[aC] = aKm >> 16, this.aKN[aC] = aKm >> 8 & 255, this.aKO[aC] = 255 & aKm, this.aKQ[aC] = aKn >> 16, this.aKR[aC] = aKn >> 8 & 255, this.aKS[aC] = 255 & aKn, this.aKT[aC] = aKo >> 16, this.aKU[aC] = aKo >> 8 & 255, this.aKV[aC] =
			255 & aKo
	}, this.aKp = function(aC) {
		return [(this.aKM[aC] << 16) + (this.aKN[aC] << 8) + this.aKO[aC], (this.aKQ[aC] << 16) + (this.aKR[aC] << 8) + this.aKS[aC], (this.aKT[aC] << 16) + (this.aKU[aC] << 8) + this.aKV[aC]]
	}, this.h9 = function(fD) {
		return 208 <= aFA[fD + 3]
	}, this.a18 = function(player, fD) {
		return this.h9(fD) && this.a1B(player, fD)
	}, this.a1B = function(player, fD) {
		return player === this.fR(fD)
	}, this.aKq = function(fD) {
		return 208 <= aFA[fD + 3] && aFA[fD + 3] < 224
	}, this.k5 = function(fD) {
		return 224 <= aFA[fD + 3] && aFA[fD + 3] < 248
	}, this.aKr = function(fD) {
		return 248 <= aFA[fD + 3]
	}, this.a11 = function(fD) {
		for (var fb = this.fb, aC = 3; 0 <= aC; aC--)
			if (this.iq(fD + fb[aC])) return !0;
		return !1
	}, this.fU = function(fD) {
		return this.h9(fD) || this.fQ(fD)
	}, this.iq = function(fD) {
		return 0 === aFA[fD + 3] && 2 === aFA[fD + 2]
	}, this.fQ = function(fD) {
		return 0 === aFA[fD + 3] && 1 === aFA[fD + 2]
	}, this.zr = function(fD) {
		return 0 === aFA[fD + 3] && 3 === aFA[fD + 2]
	}, this.fe = function(fD) {
		return 0 === aFA[fD + 3] && 5 === aFA[fD + 2]
	}, this.aKj = function(fD) {
		return 0 === aFA[fD + 3] && 3 <= aFA[fD + 2]
	}, this.fH = function(fD) {
		return (aFA[fD] >> 1 << 8) + aFA[fD + 1]
	}, this.aKs = function(fD) {
		return 1 & aFA[fD]
	}, this.aKk = function(fD, player) {
		return this.fQ(fD) || this.h9(fD) && player !== this.fR(fD)
	}, this.fR = function(fD) {
		return ((3 & aFA[fD]) << 7) + ((3 & aFA[fD + 1]) << 5) + ((3 & aFA[fD + 2]) << 3) + (7 & aFA[fD + 3])
	}, this.a19 = function(fD) {
		aKt(fD, 1)
	}, this.aKu = function(fD) {
		aKt(fD, 2)
	}, this.a0n = function(fD, player) {
		aFA[fD] = this.aKM[player], aFA[fD + 1] = this.aKN[player], aFA[fD + 2] = this.aKO[player], aFA[fD + 3] = 208 + this.aKP[player], aKw(fD)
	}, this.h4 = function(fD, player) {
		aFA[fD] = this.aKQ[player], aFA[fD + 1] = this.aKR[player], aFA[fD + 2] = this.aKS[player], aFA[fD + 3] = 224 + this.aKP[player], aKw(fD)
	}, this.k6 = function(fD, player) {
		aFA[fD] = this.aKT[player], aFA[fD + 1] = this.aKU[player], aFA[fD + 2] = this.aKV[player], aFA[fD + 3] = 248 + this.aKP[player], aKw(fD)
	}
}

function cw() {
	var aKx = 0,
		aKy = new Uint16Array(64);

	function f5(a8Q) {
		aKx -= 2;
		for (var aC = a8Q; aC < aKx; aC += 2) aKy[aC] = aKy[aC + 2], aKy[aC + 1] = aKy[aC + 3]
	}
	this.dk = function() {
		aKx = 0
	}, this.ee = function() {
		var aC, k3, jC;
		if (0 !== aKx)
			if (0 === ah.nU[aE.fJ]) aKx = 0;
			else if (0 === ae.gg(aE.fJ)) aKx = 0;
		else
			for (aC = aKx - 2; 0 <= aC; aC -= 2)(k3 = aKy[aC]) < aE.fW && 0 === ah.nU[k3] ? f5(aC) : (jC = aKy[aC + 1], (k3 >= aE.fW && bv.aL0(aE.fJ) || k3 < aE.fW && bv.aL1(aE.fJ, k3)) && (bB.hz.i6(jC, k3), f5(aC)))
	}, this.i7 = function(k3, jC) {
		! function(k3, jC) {
			for (var aC = 0; aC < aKx; aC += 2)
				if (aKy[aC] === k3) return aKy[aC + 1] = Math.min(aKy[aC + 1] + jC, 1023), 1;
			return
		}(k3, jC) && 64 !== aKx && (aKy[aKx] = k3, aKy[aKx + 1] = jC, aKx += 2)
	}
}

function cY() {
	function aL9(player) {
		var ea;
		bD.gv.a6W(player) && (ea = ah.hb[player] - ah.a6b[player] + ae.aLB(player), bg.gz(player, Math.abs(ea), ea < 0 ? 18 : 12)), ah.hb[player] = 0, ah.a6b[player] = 0
	}

	function aLI() {
		aY.show(!1, !1, !1, !0), aX.aEJ(), bU.a2u.a3f()
	}

	function aL5(player, aLH) {
		for (var aC = aLH.length - 1; 0 <= aC; aC--) ae.aLK(aLH[aC], player)
	}

	function aL8(player) {
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
					ad.a18(player, h7) && ad.a19(h7)
				}
		}
		jT[player] = jV[player] = 0, jS[player] = jU[player] = Math.max(fk, bV.fl)
	}
	this.dt = function(h7) {
		var player, ea = ah.hN[h7] + ah.a0i[h7];
		bQ.z.ky[h7] ? ea && (aL5(player = h7, ae.aL6(player)), ag.aL7(player), aL8(player), aG.gx(player), ae.clear(player), aL9(player), function(player) {
			ah.a0i[player] = 0, ah.h1[player] = [], ah.hF[player] = [], ah.hG[player] = [], ah.fy[player] = []
		}(player)) : !ea && ah.h1[h7].length || this.aL4(h7)
	}, this.aL4 = function(player) {
		! function(player) {
			bD.gv.kH(player) || (ah.a3j[player] = bl.a3y.aLG(), aE.a3A++);
			var aLH = ae.aL6(player);
			0 === aLH.length ? bD.gv.a6T(player) && aLI() : (aL5(player, aLH), function(player, aLH) {
				var aLM = aLH[function(aLH) {
					var aC, eI = 0;
					for (aC = aLH.length - 1; 1 <= aC; aC--) ah.hN[aLH[aC]] > ah.hN[aLH[eI]] && (eI = aC);
					return eI
				}(aLH)];
				9 === aE.lC && (1 === bj.fX[player] ? az.km(8) && b0.aLN(aLM) : aF.iI[player] && (aO.a9o(765, 0), aO.a1b(280, L(145, [ah.a1c[aLM], ah.a1c[player]]), 765, aLM, bE.pF, bE.qc, -1, !0)));
				if (bD.gv.a6T(player)) aLI(), aO.a3L(aLM, 1);
				else {
					for (var aC = aLH.length - 1; 0 <= aC; aC--)
						if (bD.gv.a6W(aLH[aC]) && (bg.nQ[4 - bD.gv.kH(player)]++, bD.gv.a6T(aLH[aC]))) return aO.a3L(player, 0);
					bD.gv.kH(player) || aO.a9Z(0, player, aLM)
				}
			}(player, aLH))
		}(player), ag.aL7(player), aL8(player), aL9(player),
			function(player) {
				ah.nU[player] = 0, ah.h1[player] = null, ah.hF[player] = null, ah.hG[player] = null, ah.fy[player] = null
			}(player), aG.gx(player), ae.clear(player), bQ.aLE.aLF(player)
	}
}

function d1() {
	var input;

	function aLO(e) {
		(e = e.target.files) && 0 < e.length && b7.aLR(e[0])
	}

	function aLV(e) {
		var ej = new Image;
		ej.onload = aLW, ej.src = e.target.result
	}

	function aLW(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aLY = bm.buffer.data[162].value,
			max = Math.min(bV.aLZ, aLY),
			aLY = (max = a1.id || bM.so() ? Math.min(1400, aLY) : max) / Math.max(j, k);
		if (aLY < 1 && (j = Math.floor(aLY * j + .125), k = Math.floor(aLY * k + .125)), max < j || max < k || j < 10 || k < 10) aLY = "Invalid Image Dimensions!", a1.yT ? a1.yT.showToast(aLY) : alert(aLY);
		else {
			for (var max = document.createElement("canvas"), aLY = (max.width = j, max.height = k, max.getContext("2d")), aLb = document.createElement("canvas"), aLc = (aLb.width = e.width, aLb.height = e.height, aLb.getContext("2d")), e = (aLc
					.drawImage(e, 0, 0), aLc.getImageData(0, 0, aLb.width, aLb.height)), aLc = aLY.createImageData(j, k), src = e.data, aLf = aLc.data, aC8 = aLb.width / j, aC9 = aLb.height / k, fi = 0; fi < k; fi++)
				for (var fg = 0; fg < j; fg++) {
					var aLg = Math.floor(fg * aC8),
						aLg = 4 * (Math.floor(fi * aC9) * aLb.width + aLg),
						aLj = 4 * (fi * j + fg);
					aLf[aLj] = src[aLg], aLf[1 + aLj] = src[1 + aLg], aLf[2 + aLj] = src[2 + aLg], aLf[3 + aLj] = 255
				}
			aLY.putImageData(aLc, 0, 0), 20 === u.uZ && u.a4L().aLW(max)
		}
	}
	this.dk = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aLO
	}, this.wr = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aLP = function() {
		input.click()
	}, this.aLR = function(aLS) {
		var h = aLS.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aLV, h.readAsDataURL(aLS))
	}
}

function cz() {
	this.aLk = new Uint32Array(aE.fW), this.dk = function() {
		10 === aE.lC && this.aLk.fill(0)
	}, this.ee = function() {
		10 === aE.lC && this.lj()
	}, this.lj = function() {
		for (var h7, target, aEW, aLk = this.aLk, w1 = am.lV, a6c = ah.hb, aC = am.lQ - 1; 0 <= aC; aC--)(h7 = w1[aC]) >= aE.ku || (target = Math.max(bO.g0(a6c[h7], 4), 2048), aEW = Math.max(af.aEX(h7), 100), aLk[h7] += bO.g0(aEW * target, 1e4),
			aLk[h7] > target && (aLk[h7] = target))
	}, this.a6i = function(player, iI) {
		return 10 !== aE.lC || bD.gv.kH(player) ? iI : Math.min(this.aLk[player], iI)
	}, this.a6o = function(player, iI) {
		10 !== aE.lC || bD.gv.kH(player) || (this.aLk[player] -= iI)
	}
}

function d2() {
	var aLl = -1,
		aLm = null,
		aLn = -1,
		xI = 4;

	function aLp() {
		aN.a8u() ? be.render() : be.a3K()
	}

	function aLx(ej, fc) {
		var eH = ej >> 16,
			uv = ej >> 8 & 255,
			ej = 255 & ej,
			aLy = 255 - fc,
			aLy = (aLy < eH && aLy < uv && aLy < ej && (fc = -fc), aLl >> 7),
			aM0 = aLl >> 5 & 3,
			aM1 = aLl >> 3 & 3;
		return (Math.max(Math.min(eH + fc, 252 + aLy), aLy) << 16) + (Math.max(Math.min(uv + fc, 252 + aM0), aM0) << 8) + Math.max(Math.min(ej + fc, 252 + aM1), aM1)
	}

	function aLo() {
		return -1 !== aLl && (ad.aKl(aLl, aLm[0], aLm[1], aLm[2]), aLu(aLl), aLl = -1)
	}

	function aLu(player) {
		bi.ds = !0;
		for (var jS = ah.jS[player], jU = ah.jU[player], jT = ah.jT[player], jV = ah.jV[player], fi = jU; fi <= jV; fi++)
			for (var fg = jS; fg <= jT; fg++) {
				var fD = ad.a0m(fg, fi);
				ad.a18(player, fD) && (ad.aKr(fD) ? ad.k6(fD, player) : ad.k5(fD) ? ad.h4(fD, player) : ad.a0n(fD, player))
			}
	}
	this.dk = function() {
		aLm = null, aLn = aLl = -1, xI = bO.ij(Math.floor(bm.buffer.data[16].value), 0, 16)
	}, this.ee = function(by) {
		if (bm.buffer.data[15].value && 0 !== xI && (by || !bM.so())) {
			var by = bP.hp(bM.he),
				hq = bP.hr(bM.hf);
			if (bP.hs(by, hq)) {
				by = bP.fw(by, hq), hq = bP.fP(by);
				if (aLn === hq)
					if (ad.h9(hq)) {
						if (aLl === ad.fR(hq)) return
					} else if (-1 === aLl) return;
				! function(fD) {
					ad.h9(fD) ? (fD = ad.fR(fD)) !== aLl && (aLo(), function(player) {
						aLl = player, aLm = ad.aKp(player);
						var aLs = function() {
							var sE = aLm,
								aLv = xI << 2,
								aLw = aLv << 1;
							return [aLx(sE[0], aLv), aLx(sE[1], aLw), aLx(sE[2], aLw)]
						}();
						ad.aKl(player, aLs[0], aLs[1], aLs[2]), aLu(player)
					}(fD), aLp()) : aLo() && aLp()
				}(aLn = hq)
			} else aLo() && aLp()
		}
	}
}

function d3() {
	var x5 = 0,
		aM2 = 0,
		aM3 = 0,
		aM4 = 0,
		aLn = -1;

	function aM7(fD) {
		if (aLn === fD) return !1;
		if (-1 === (aLn = fD)) x5 = 0, aO.aA1(x5, 0);
		else {
			if (ad.h9(fD)) return aM3 = ad.fR(fD), kt = ah.hb[aM3] - ah.a6b[aM3], (4 !== x5 || kt !== aM2) && (x5 = 4, aM2 = kt, aO.aA1(x5, kt), !0);
			if (ad.fQ(fD)) return 3 !== x5 && (x5 = 3, aO.aA1(x5, 0), !0);
			if (ad.fe(fD)) return 2 !== x5 && (x5 = 2, aO.aA1(x5, 0), !0);
			var kt = bQ.lj.a8i(bM.he, bM.hf);
			if (-1 === kt) return 1 !== x5 && (x5 = 1, aO.aA1(x5, 0), !0);
			fD = bQ.z.a9g[kt];
			if (aM3 = bQ.z.mn[kt], aM4 = bQ.z.mo[kt] >> 3, 5 === x5 && fD === aM2) return !1;
			x5 = 5, aM2 = fD, aO.aA1(x5, fD)
		}
		return !0
	}
	this.dk = function() {
		aM4 = aM3 = aM2 = x5 = 0, aLn = -1
	}, this.ee = function(by) {
		var hq;
		!by && bM.so() || (by = bP.hp(bM.he), hq = bP.hr(bM.hf), bP.hs(by, hq) ? (by = bP.fw(by, hq), aM7(bP.fP(by))) : aM7(-1))
	}, this.nB = function() {
		var aM9, kt, a8g, aM8;
		if (0 !== x5 && 2 !== x5)
			if (bM.so()) {
				if (1 !== x5 && 3 !== x5) {
					if (4 === x5) return void(kt = ah.hb[aM3] - ah.a6b[aM3], aM2 === kt || (aM2 = kt, aO.aA1(x5, kt)));
					(a8g = bQ.lj.nu(aM4, aM3)) < 0 ? (x5 = 1, aO.aA1(x5, 0)) : (aM8 = bQ.z.a9g[a8g]) !== aM2 && (aM2 = aM8, aO.aA1(x5, aM8))
				}
			} else if (1 === x5) - 1 !== (a8g = bQ.lj.a8i(bM.he, bM.hf)) && (x5 = 5, aM2 = bQ.z.a9g[a8g], aO.aA1(x5, aM2));
		else if (3 === x5) ad.h9(aLn) && (x5 = 4, aM9 = ad.fR(aLn), aM2 = ah.hb[aM9] - ah.a6b[aM9], aO.aA1(x5, aM2));
		else if (4 === x5) {
			if (ad.h9(aLn)) return void(aM9 = ad.fR(aLn), kt = ah.hb[aM9] - ah.a6b[aM9], aM2 === kt || (aM2 = kt, aO.aA1(x5, kt)));
			x5 = 3, aO.aA1(x5, 0)
		} else - 1 === (a8g = bQ.lj.a8i(bM.he, bM.hf)) ? (x5 = 1, aO.aA1(x5, 0)) : (aM8 = bQ.z.a9g[a8g]) !== aM2 && (aM2 = aM8, aO.aA1(x5, aM8))
	}
}

function dc() {
	function aMB(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aMJ, h.readAsText(e))
	}

	function aMJ(e) {
		var aMM;
		aE.a38 || (e = JSON.parse(e.target.result), aMM = aE.data = new a7b, aMN(e, aMM, "mapType", 0, 2), aMN(e, aMM, "mapProceduralIndex", 0, 255), aMN(e, aMM, "mapRealisticIndex", 0, 255), aMN(e, aMM, "mapSeed", 0, 16383), function(aML, aMM, h8,
				max) {
				aML = aML[h8];
				aMM[h8] = aMT(aML) ? aML.slice(0, max) : aMM[h8]
			}(e, aMM, "mapName", 20), function(aML, aMM, h8) {
				var aLX;
				2 === aMM.mapType && (!aMT(aML = aML[h8]) || aML.length <= 20 ? aMM.mapType = 0 : ((aLX = new Image).onload = function() {
					bC.aMU.aMV(aLX, 1), aLX.onload = null, aLX = null
				}, aLX.src = aML))
			}(e, aMM, "canvas"), aMN(e, aMM, "passableWater", 0, 1), aMN(e, aMM, "passableMountains", 0, 1), aMN(e, aMM, "playerCount", 1, 512), aMN(e, aMM, "humanCount", 1, 1), aMN(e, aMM, "selectedPlayer", 0, 0), aMN(e, aMM, "gameMode", 0, 1),
			aMN(e, aMM, "playerMode", 0, 0), aMN(e, aMM, "battleRoyaleMode", 0, 0), aMN(e, aMM, "numberTeams", 0, 8), aMN(e, aMM, "isZombieMode", 0, 0), aMN(e, aMM, "isContest", 0, 0), aMN(e, aMM, "isReplay", 0, 0), aMQ(e, aMM, "elo", 16, 2,
				16383), aMN(e, aMM, "colorsType", 0, 1), aMN(e, aMM, "colorsPersonalized", 0, 1), aMQ(e, aMM, "colorsData", 32, 512, 262143), aMN(e, aMM, "selectableColor", 0, 1), aMQ(e, aMM, "teamPlayerCount", 16, 9, 512), aMN(e, aMM,
				"neutralBots", 0, 1), aMN(e, aMM, "botDifficultyType", 0, 3), aMN(e, aMM, "botDifficultyValue", 0, 15), aMQ(e, aMM, "botDifficultyTeam", 8, 9, 15), aMQ(e, aMM, "botDifficultyData", 8, 512, 15), aMN(e, aMM, "spawningType", 0, 2),
			aMN(e, aMM, "spawningSeed", 0, 16383), aMQ(e, aMM, "spawningData", 16, 1024, 4095), aMN(e, aMM, "selectableSpawn", 0, 1), aMN(e, aMM, "playerNamesType", 0, 2),
			function(aML, aMM, h8, size, max) {
				var a5j = aML[h8];
				if (Array.isArray(a5j)) {
					for (var a5k = new Array(size), fZ = Math.min(a5j.length, size), aC = 0; aC < fZ; aC++) a5k[aC] = aMT(a5j[aC]) ? a5j[aC].slice(0, max) : "";
					a5k.fill("", fZ), aMM[h8] = a5k
				}
			}(e, aMM, "playerNamesData", 512, 20), aMN(e, aMM, "selectableName", 0, 1), aMN(e, aMM, "aIncomeType", 0, 2), aMN(e, aMM, "aIncomeValue", 0, 255), aMQ(e, aMM, "aIncomeData", 8, 512, 255), aMN(e, aMM, "tIncomeType", 0, 2), aMN(e, aMM,
				"tIncomeValue", 0, 255), aMQ(e, aMM, "tIncomeData", 8, 512, 255), aMN(e, aMM, "iIncomeType", 0, 2), aMN(e, aMM, "iIncomeValue", 0, 255), aMQ(e, aMM, "iIncomeData", 8, 512, 255), aMN(e, aMM, "sResourcesType", 0, 2), aMN(e, aMM,
				"sResourcesValue", 0, 2047), aMQ(e, aMM, "sResourcesData", 16, 512, 2047), u.y(), u.z.uR[0] = 0, u.v(19))
	}

	function aMN(aML, aMM, h8, min, max) {
		aML = aML[h8];
		aMM[h8] = "number" == typeof aML && min <= aML && aML <= max ? Math.floor(aML) : aMM[h8]
	}

	function aMT(s3) {
		return "string" == typeof s3
	}

	function aMQ(aML, aMM, h8, aMW, size, max) {
		var a5j = aML[h8];
		if (Array.isArray(a5j)) {
			for (var a5k = new(8 === aMW ? Uint8Array : 16 === aMW ? Uint16Array : Uint32Array)(size), fZ = Math.min(a5j.length, size), aC = 0; aC < fZ; aC++) a5k[aC] = bO.ij(a5j[aC], 0, max);
			aMM[h8] = a5k
		}
	}
	this.aMA = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aMB, input.click()
	}, this.aMC = function() {
		for (var aMF, aFl, a89 = aE.data, keys = Object.keys(a89), aMD = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a89[key] instanceof Uint8Array || a89[key] instanceof Uint16Array || a89[key] instanceof Uint32Array ? aMD[key] = Array.from(a89[key]) : aMD[key] = a89[key]
		}
		aMD.canvas = 2 === aMD.mapType && aMD.canvas ? aMD.canvas.toDataURL() : null, aMF = aMD, aMF = JSON.stringify(aMF, null, 2), aMF = new Blob([aMF], {
			type: "application/json"
		}), (aFl = document.createElement("a")).href = URL.createObjectURL(aMF), aFl.download = "tt_scenario.json", aFl.click()
	}
}

function cc() {
	var aMX, aMY, size, k3, iI, aMZ;

	function aMa(player) {
		return player < aE.ku ? aMX * player : aMX * aE.ku + aMY * (player - aE.ku)
	}
	this.dk = function() {
		aMX = aE.ku < 16 ? 12 : 8, aMY = 4;
		var fZ = aMa(aE.fW);
		size = new Uint8Array(aE.fW), k3 = new Uint16Array(fZ), iI = new Uint32Array(fZ), aMZ = new Uint8Array(fZ)
	}, this.ru = function(aB1, aMb) {
		var aMc = this.hc(aB1, aMb),
			aMb = (this.ha(aB1, aMb, 0), bD.gv.gy(aB1, aMc));
		bg.gz(aB1, aMc - aMb, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aLK = function(player, aMb) {
		var aMf, aMb = function(player, aMb) {
			var aC, lp = aMa(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (k3[lp + aC] === aMb) return aC;
			return size[player]
		}(player, aMb);
		aMb !== size[player] && (aMf = iI[aMa(player) + aMb], this.h0(player, aMb), this.ei(player, aMf, aE.fW))
	}, this.kF = function(player, aMb) {
		for (var lp = aMa(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k3[lp + aC] === aMb) return !0;
		return !1
	}, this.kY = function(player) {
		return player < aE.ku ? size[player] < aMX : size[player] < aMY
	}, this.gg = function(player) {
		return size[player]
	}, this.gl = function(player, aC) {
		return k3[aMa(player) + aC]
	}, this.gm = function(player, aC) {
		return iI[aMa(player) + aC]
	}, this.hc = function(player, aMb) {
		for (var lp = aMa(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k3[lp + aC] === aMb) return iI[lp + aC];
		return 0
	}, this.aLB = function(player) {
		for (var lp = aMa(player), g1 = 0, aC = size[player] - 1; 0 <= aC; aC--) g1 += iI[lp + aC];
		return g1
	}, this.ha = function(player, aMb, aMf) {
		for (var lp = aMa(player), aC = size[player] - 1; 0 <= aC; aC--) k3[lp + aC] === aMb && (iI[lp + aC] = aMf)
	}, this.hL = function(player, aC, aMf) {
		iI[aMa(player) + aC] = Math.max(aMf, 0)
	}, this.hM = function(player, aC) {
		aMZ[aMa(player) + aC] = 0
	}, this.gn = function(player, aC) {
		return aMZ[aMa(player) + aC]
	}, this.ei = function(player, aMf, aMb) {
		ap.jh.kW[player] = ap.jh.kW[aMb] = 8, bD.gv.a6W(aMb) && bg.nQ[6 - bD.gv.kH(player)]++;
		for (var lp = aMa(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k3[lp + aC] === aMb) return iI[lp + aC] += aMf, void(iI[lp + aC] = iI[lp + aC] > aE.a6e ? aE.a6e : iI[lp + aC]);
		k3[lp + size[player]] = aMb, iI[lp + size[player]] = aMf, aMZ[lp + size[player]] = 1, size[player]++, aMb === aE.fJ ? aO.a3L(player, 5) : player < aE.ku && player === aE.fJ && ag.a9b(aMb)
	}, this.h0 = function(player, eI) {
		var fs, lp;
		if (0 !== size[player])
			for (lp = aMa(player), size[player]--, fs = eI; fs < size[player]; fs++) k3[lp + fs] = k3[lp + fs + 1], iI[lp + fs] = iI[lp + fs + 1], aMZ[lp + fs] = aMZ[lp + fs + 1]
	}, this.aL6 = function(player) {
		for (var fs, lp, aLH = [], aC = am.lQ - 1; 0 <= aC; aC--)
			for (lp = aMa(am.lV[aC]), fs = size[am.lV[aC]] - 1; 0 <= fs; fs--)
				if (k3[lp + fs] === player) {
					aLH.push(am.lV[aC]);
					break
				} return aLH
	}
}

function cd() {
	var aMg;

	function aMi(player) {
		var eH, kZ;
		return bD.gv.kH(player) && player < aE.ku ? 0 : (eH = aMg[bO.g0((aE.fW - 1) * ah.hN[player], aE.ke)], bi.kr() < 1920 && (eH = Math.max(bO.g0(100 * (13440 - 6 * bi.kr()), 1920), eH)), kZ = af.ka(player), ah.hb[player] > kZ && (eH -= bO.g0(2 *
			eH * (ah.hb[player] - kZ), kZ)), Math.min(Math.max(eH, 0), 700))
	}

	function aMu(o7) {
		for (var hN = ah.hN, lV = am.lV, aC = am.lQ - 1; 0 <= aC; aC--) {
			var h7 = lV[aC];
			bD.gv.gy(h7, bO.g0(o7 * hN[h7], 32))
		}
	}

	function aMr() {
		var zk = aE.fJ;
		bR.g5[0] = ah.hb[zk] - ah.a6b[zk]
	}

	function aMt(eI) {
		var zk = aE.fJ,
			zk = ah.hb[zk] - ah.a6b[zk] - bR.g5[0];
		af.aD7 += zk, bg.nQ[eI] += zk
	}
	this.aD7 = 0, this.dr = function() {
		for (var fZ = aE.fW, aC = (aMg = new Uint16Array(fZ), 0); aC < fZ; aC++) aMg[aC] = 100 + aMh(bO.g0(25600 * aC, fZ - 4), 9)
	}, this.dk = function() {
		(this.aD7 = 0) === aE.data.iIncomeType ? this.aEX = aMi : 1 === aE.data.iIncomeType ? this.aEX = function(player) {
			return bO.g0(aE.data.iIncomeValue * aMi(player), 64)
		} : this.aEX = function(player) {
			return bO.g0(aE.data.iIncomeData[player] * aMi(player), 64)
		}
	}, this.ee = function() {
		if (bi.kr() % 10 == 9 && (af.aD7 = 0, function() {
				aMr();
				for (var lV = am.lV, hb = ah.hb, aC = am.lQ - 1; 0 <= aC; aC--) {
					var h7 = lV[aC],
						aMs = bO.g0(af.aEX(h7) * hb[h7], 1e4);
					bD.gv.gy(h7, Math.max(aMs, 1))
				}
				aMt(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aMr(), 1 === aE.data.aIncomeType)
						for (var hN = ah.hN, lV = am.lV, o7 = aE.data.aIncomeValue, aC = am.lQ - 1; 0 <= aC; aC--) {
							var h7 = lV[aC];
							bD.gv.gy(h7, bO.g0(o7 * hN[h7], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hN = ah.hN, lV = am.lV, o7 = aE.data.aIncomeData, aC = am.lQ - 1; 0 <= aC; aC--) {
								var h7 = lV[aC];
								bD.gv.gy(h7, bO.g0(o7[h7] * hN[h7], 128))
							}
						}();
					aMt(18)
				}
			}(), bi.kr() % 100 == 99)) {
			if (aMr(), 0 === aE.data.tIncomeType) aMu(32);
			else if (1 === aE.data.tIncomeType) aMu(aE.data.tIncomeValue);
			else
				for (var hN = ah.hN, lV = am.lV, o7 = aE.data.tIncomeData, aC = am.lQ - 1; 0 <= aC; aC--) {
					var h7 = lV[aC];
					bD.gv.gy(h7, bO.g0(o7[h7] * hN[h7], 32))
				}
			aMt(8)
		}
	}, this.ka = function(player) {
		return Math.min(100 * ah.hN[player], aE.a7X)
	}, this.qt = function(player, qu) {
		bt.rG(player, qu, bR.g6[0], 0), bD.gv.gy(qu, bR.g6[0]), bg.rH(player, qu), ag.aMk(player, bR.g6[0] + bR.g6[1]), ag.rI(qu, bR.g6[0]), bD.gv.n4(player)
	}, this.aMl = function() {
		for (var fZ = am.lQ, w1 = am.lV, lp = 0, a6c = ah.hb, aC = 0; aC < fZ; aC++) lp += a6c[w1[aC]];
		return lp
	}, this.aMm = function(aMn) {
		for (var h7, fZ = am.lQ, w1 = am.lV, lp = 0, a6c = ah.hb, fX = bj.fX, aC = 0; aC < fZ; aC++) fX[h7 = w1[aC]] === aMn && (lp += a6c[h7]);
		return lp
	}
}

function cf() {
	var aMy, aMz, aN0, aN1, aN2, aN3, aN4, aN5, aN6, aN7, aN8, aN9, aNA, aNB, aNC, aND, aNE, aNF, aNH, aNI, aFe, aNJ, aNK, aNQ, aNR, aNG = null,
		aNM = 0,
		aNN = !1,
		aNO = new Float32Array(4),
		aNP = 0,
		aDc = 112,
		aNS = 0;

	function sP() {
		aN6 = Math.floor(+i.il), aN7 = Math.floor(.5 * aN6), aNG.width = i.j, aNG.height = i.k, aNH = aNG.getContext("2d", {
			alpha: !0
		}), bD.sM.textAlign(aNH, 1), bD.sM.textBaseline(aNH, 1), aNH.imageSmoothingEnabled = !0
	}

	function aNT() {
		var aC, aNY;
		for (xm.font = bD.sM.u7(1, 100 * aN8), aNY = 80 / Math.floor(xm.measureText(bD.tK.a2Q(aE.a6e)).width), xm.font = bD.sM.u7(1, 100), aC = aE.fW - 1; 0 <= aC; aC--) aN5[aC] = 100 / Math.floor(xm.measureText(ah.a1c[aC]).width), aN4[aC] = Math
			.min(aNY, aN5[aC])
	}

	function aNZ(aC) {
		return !aNS || (aC = ah.hb[aC]) < 1e6 ? 1 : aC < 1e7 ? aNO[0] : aNO[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aNX(ib) {
		aNN = !1, aNM = bi.eZ, aNF = !1, aNE = 1, aNC = aND = 0, ib.clearRect(0, 0, i.j, i.k);
		for (var aNf, aNg, aC, aNh, fontSize, aNi, nv = jD / im, nw = jE / im, o8 = (i.j + jD) / im, o9 = (i.k + jE) / im, aNj = 0 !== ah.nU[aE.fJ] && !bD.gv.kH(aE.fJ), fs = am.lQ - 1; 0 <= fs; fs--) aC = am.lV[fs], (fontSize = Math.floor(aNB * im *
			aNZ(aC) * aN4[aC] * aN2[aC])) < aNA || aN6 <= fontSize || aN0[aC] + aN2[aC] > nv && aN0[aC] < o8 && aN1[aC] + aN3[aC] > nw && aN1[aC] < o9 && (aNf = Math.floor(i.j * (aN0[aC] + aN2[aC] / 2 - nv) / (o8 - nv)), aNg = Math.floor(i.k * (
			aN1[aC] + aN3[aC] / 2 - nw) / (o9 - nw) - .1 * fontSize), aNh = ad.aBX[aC], ib.font = bD.sM.u7(1 === ah.a6S[aC] ? 4 : 1, fontSize), ib.fillStyle = aNk(fontSize, aNh % 2), aNS ? aNl(ib, aC, fontSize, aNf, aNg, aNh) : aNm(aC,
			fontSize, aNf, aNg, ib), aNF = !0, 0 < aFe[aC] ? function(aNf, aNg, fontSize, aC, ib) {
			0 === kf[aC] ? ak.tW.a2H(aNI[aC]) ? (function(aNf, aNg, fontSize, player, r5, ib) {
				for (var a0H = aNg, ia = (ib.globalAlpha = aNu(fontSize), aNZ(player) * (aNS ? aNP : aN5[player])), a0G = aNf - .5 * fontSize / ia - .9 * fontSize, ft = 0; ft < 2; ft++) ib.fillText(ak.tW.a29(r5), a0G, a0H), a0G =
					aNf + .5 * fontSize / ia + .9 * fontSize;
				ib.globalAlpha = 1
			}(aNf, aNg, fontSize, aC, aNI[aC], ib), aNo(aNf, aNg, fontSize, 0, 0, ib)) : ak.tW.a2J(aNI[aC]) ? (aNx(aNf, aNg, fontSize, aNI[aC], 0, ib), aNo(aNf, aNg, fontSize, 0, 1, ib)) : (aNx(aNf, aNg, fontSize, aNI[aC], 1, ib), aNo(
				aNf, aNg, fontSize, 1, 0, ib)) : aNx(aNf, aNg, fontSize, aNI[aC], 0, ib)
		}(aNf, aNg, fontSize, aC, ib) : 0 === kf[aC] && aNo(aNf, aNg, fontSize, 0, 0, ib), aNj && (0 < aFe[aC + aE.fW] || 0 < aFe[aC + 2 * aE.fW] || 0 < aFe[aC + 3 * aE.fW] || 0 < aFe[aC + 4 * aE.fW]) && function(aNf, aNg, fontSize, aC, ib) {
			var ej, h2 = -1;
			for (ej = 4; 1 <= ej; ej--) 0 < aFe[aC + ej * aE.fW] && h2++;
			for (ej = 1; ej < 5; ej++) 0 < aFe[aC + ej * aE.fW] && (! function(aNf, aNg, fontSize, ej, aC, aNs, ea, ib) {
				var a5x;
				if (1 === ej) {
					aC = aNI[aC + aE.fW];
					if (!ak.tW.a2I(aC)) return function(aNf, aNg, fontSize, r5, aNs, ib) {
						ib.globalAlpha = aNu(fontSize);
						aNf -= .534 * aNs * fontSize, aNs = aNg + 1.59 * fontSize;
						ib.font = bD.sM.u7(0, .785 * fontSize), ib.fillText(ak.tW.a29(r5), aNf, aNs), ib.globalAlpha = 1
					}(aNf, aNg, fontSize, aC, aNs, ib);
					a5x = ak.zj.a1i[aC - 1024 + ak.tW.a1u]
				} else a5x = 2 === ej ? aM.a8O()[4].canvas[+(ea < 255)] : (3 === ej ? aM.a8O()[5] : aM.a8O()[6]).canvas[0];
				aC = ak.zj.a1j, ea = .8 * fontSize / aC, ej = aNf - .5 * ea * aC - .534 * aNs * fontSize, aNf = aNg + 1.4 * ea * aC;
				ib.setTransform(ea, 0, 0, ea, ej, aNf), ib.globalAlpha = aNu(fontSize), ib.drawImage(a5x, 0, 0), ib.globalAlpha = 1, ib.setTransform(1, 0, 0, 1, 0, 0)
			}(aNf, aNg, fontSize, ej, aC, h2, aFe[aC + ej * aE.fW], ib), h2 -= 2)
		}(aNf, aNg, fontSize, aC, ib), (aNi = aN8 * fontSize) < aNA || (ib.font = bD.sM.u7(1, aNi), aNg += Math.floor(.78 * fontSize), aNS ? aNm(aC, aNi, aNf, aNg, ib) : aNl(ib, aC, aNi, aNf, aNg, aNh)))
	}

	function aNm(aC, fontSize, fg, fi, ib) {
		var ___id = aC;
		var showName = aC < aE.ku || !__fx.settings.hideBotNames;
		var eliminationEstimate = __fx.settings.showEstimatedEliminationAttack ?
			__fx.utils.getEstimatedEliminationAttack(___id, ah.hb[___id] - ah.a6b[___id]) :
			"";
		if (showName) ib.fillText(ah.a1c[aC], fg, fi), aC < aE.ku && 2 !== ah.a6S[aC] || (aC = fontSize / aN5[aC], ib.fillRect(fg - .5 * aC, fi + bD.sM.a2A * fontSize, aC, Math.max(1, .1 * fontSize)));
		aNS && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (ib.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			ib.fillText(__fx.utils.getDensity(___id), fg, showName ? fi + fontSize : fi),
			eliminationEstimate && ib.fillText(eliminationEstimate, fg, showName ? fi + 2 * fontSize : fi + fontSize)
		);
	}

	function aNl(ib, aC, fontSize, aNf, aNg, aNh) {
		var ea, a6b = ah.a6b[aC],
			aNr = bD.tK.a2Q(ah.hb[aC] - a6b);

		function drawDensity() {
			var eliminationEstimate;
			!aNS && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (ib.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), ib.fillText(__fx.utils.getDensity(aC), aNf, aNg + fontSize), eliminationEstimate = __fx.settings
				.showEstimatedEliminationAttack ? __fx.utils.getEstimatedEliminationAttack(aC, ah.hb[aC] - a6b) : "") && ib.fillText(eliminationEstimate, aNf, aNg + 2 * fontSize)
		}
		a6b ? (ea = ib.fillStyle, ib.fillStyle = aNk(fontSize, 2 + aNh % 2), ib.fillText(aNr, aNf, aNg), ib.fillStyle = ea) : aNh >> 1 & 1 ? (ib.lineWidth = .05 * fontSize, ib.strokeStyle = aNk(fontSize, aNh % 2), ib.strokeText(aNr, aNf, aNg)) : (1 <
			aNh && (ib.lineWidth = .12 * fontSize, ib.strokeStyle = aNk(fontSize, aNh), ib.strokeText(aNr, aNf, aNg)), ib.fillText(aNr, aNf, aNg)), drawDensity()
	}

	function aNo(aNf, aNg, fontSize, aNs, aNt, ib) {
		var a8t = .95 * fontSize / aNK,
			aNf = aNf - .5 * a8t * aNJ + .8 * aNs * fontSize,
			aNs = aNg - 1.76 * a8t * aNK - (.35 - bD.sM.a2A + .7) * aNt * fontSize;
		ib.setTransform(a8t, 0, 0, a8t, aNf, aNs), ib.globalAlpha = aNu(fontSize), ib.drawImage(ac.get(4), 0, 0), ib.globalAlpha = 1, ib.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aNx(aNf, aNg, fontSize, r5, aNs, ib) {
		var iV, a0G, a8t;
		ib.globalAlpha = aNu(fontSize), ak.tW.a2I(r5) ? (iV = ak.zj.a1j, ib.setTransform(a8t = 1.1 * fontSize / iV, 0, 0, a8t, a0G = aNf - .5 * a8t * iV - .8 * aNs * fontSize, a8t = aNg - 1.55 * a8t * iV), ib.drawImage(ak.zj.a1i[r5 - 1024 + ak.tW
			.a1u], 0, 0), ib.setTransform(1, 0, 0, 1, 0, 0)) : (a0G = aNf - .8 * aNs * fontSize, a8t = aNg - (.35 - bD.sM.a2A + 1) * fontSize, ib.fillText(ak.tW.a29(r5), a0G, a8t)), ib.globalAlpha = 1
	}

	function aNk(fontSize, aNh) {
		return aN7 <= fontSize && fontSize < aN6 ? bj.aNz[aNh] + aNu(fontSize).toFixed(3) + ")" : bj.aO0[aNh]
	}

	function aNu(fontSize) {
		return aN7 <= fontSize && fontSize < aN6 ? 1 - (fontSize - aN7) / (aN6 - aN7) : 1
	}

	function aO9(ia, j) {
		return 1 + Math.floor(aN9 * ia * j)
	}

	function aO6(aC) {
		for (var left = aN0[aC], fs = aN0[aC] - ah.jS[aC] - 1; 0 <= fs; fs--)
			if (!aOB(aC, --left, aN1[aC], aN3[aC])) {
				left++;
				break
			} var right = aN0[aC];
		for (fs = ah.jT[aC] - aN0[aC] - aN2[aC]; 0 <= fs; fs--)
			if (!aOB(aC, ++right + aN2[aC] - 1, aN1[aC], aN3[aC])) {
				right--;
				break
			} var fg = Math.floor((left + right) / 2),
			top = aN1[aC];
		for (fs = aN1[aC] - ah.jU[aC] - 1; 0 <= fs; fs--)
			if (!aOC(aC, fg, --top, aN2[aC])) {
				top++;
				break
			} var bottom = aN1[aC];
		for (fs = ah.jV[aC] - aN1[aC] - aN3[aC]; 0 <= fs; fs--)
			if (!aOC(aC, fg, ++bottom + aN3[aC] - 1, aN2[aC])) {
				bottom--;
				break
			} var fi = Math.floor((top + bottom) / 2);
		aO3(aC, fg, fi, aN2[aC], aN3[aC]) && (aN0[aC] = fg, aN1[aC] = fi)
	}

	function aO3(player, fg, fi, j, k) {
		fc = Math.floor(.2 * j);
		for (var fc, ej = fg + j - 1; fg <= ej; ej--)
			if (!aOB(player, ej, fi, k)) return;
		for (ej = fi + k - 1 - (fc = (fc = Math.floor(.25 * k)) < 1 ? 1 : fc); fi + fc <= ej; ej--)
			if (!aOC(player, fg, ej, j)) return;
		return 1
	}

	function aOB(player, fg, fi, k) {
		return ad.a18(player, 4 * (fi * bV.fk + fg)) && ad.a18(player, 4 * ((fi + k - 1) * bV.fk + fg))
	}

	function aOC(player, fg, fi, j) {
		return ad.a18(player, 4 * (fi * bV.fk + fg)) && ad.a18(player, 4 * (fi * bV.fk + fg + j - 1))
	}
	this.dk = function() {
		if (aNS = bm.buffer.data[7].value || 8 === aE.lC, aNF = !1, aNB = .88, aN8 = .5, aN9 = 1.8, aNA = 12 - 3 * bm.buffer.data[9].value, aMz = aMy = 0, aN0 = new Uint16Array(aE.fW), aN1 = new Uint16Array(aE.fW), aN2 = new Uint16Array(aE.fW),
			aN3 = new Uint16Array(aE.fW), aN4 = new Float32Array(aE.fW), aN5 = new Float32Array(aE.fW), aNI = new Uint16Array(2 * aE.fW), aFe = new Uint8Array(5 * aE.fW), aNQ = new Uint8Array(aE.fW), aNR = new Uint8Array(aE.fW), aNG = aNG ||
			document.createElement("canvas"), sP(), aND = aNC = 0, aNE = 1, aNS) {
			var aC, aNY;
			for (aNT(), xm.font = bD.sM.u7(1, 100), aNY = 100 / Math.floor(xm.measureText("900 000").width), aC = aE.fW - 1; 0 <= aC; aC--) aN4[aC] = Math.min(aNY, 2 * aN5[aC]);
			aNP = aNY, aNO[0] = 100 / (aNY * Math.floor(xm.measureText("5 000 000").width)), aNO[1] = 100 / (aNY * Math.floor(xm.measureText("50 000 000").width)), aNO[2] = 100 / (aNY * Math.floor(xm.measureText("500 000 000").width)), aNO[3] =
				100 / (aNY * Math.floor(xm.measureText("1 000 000 000").width))
		} else aNT();
		! function() {
			var aC;
			for (aC = aE.fW - 1; 0 <= aC; aC--) ah.hN[aC] < 12 ? (aN0[aC] = ah.jS[aC] + 1, aN1[aC] = ah.jU[aC] + 1, aN2[aC] = 1, aN3[aC] = 1) : (aN0[aC] = ah.jS[aC], aN1[aC] = ah.jU[aC] + 1, aN2[aC] = 4, aN3[aC] = 2);
			if (aE.hx)
				for (aC = 0; aC < aE.ku; aC++) aN2[aC] = 0;
			aNJ = ac.get(4).width, aNK = ac.get(4).height
		}()
	}, this.aMk = function(h7, a87) {
		a87 > 18 * ah.hN[h7] ? (aNR[h7] = 6, ad.aBX[h7] = 2 + ad.aBX[h7] % 2) : (aNQ[h7] = 4, (ad.aBX[h7] < 2 || 3 < ad.aBX[h7]) && (ad.aBX[h7] = 6 + ad.aBX[h7] % 2))
	}, this.rI = function(h7, a87) {
		a87 > 6 * ah.hN[h7] ? (aNR[h7] = 6, ad.aBX[h7] = 4 + ad.aBX[h7] % 2) : (aNQ[h7] = 4, (ad.aBX[h7] < 4 || 5 < ad.aBX[h7]) && (ad.aBX[h7] = 8 + ad.aBX[h7] % 2))
	}, this.resize = function() {
		sP(), aNX(aNH)
	}, this.a7T = function() {
		for (var aC = 0; aC < aE.ku; aC++) ah.jT[aC] - ah.jS[aC] != 3 || ah.jV[aC] - ah.jU[aC] != 3 ? (aN0[aC] = ah.jS[aC] + (ah.jT[aC] !== ah.jS[aC] ? 1 : 0), aN1[aC] = ah.jU[aC], aN2[aC] = 1, aN3[aC] = 1) : (aN0[aC] = ah.jS[aC], aN1[aC] = ah
			.jU[aC] + 1, aN2[aC] = 4, aN3[aC] = 2)
	}, this.rv = function(player, eI, aNa) {
		! function(player, eI, aNa) {
			player += eI * aE.fW;
			0 === eI ? aNI[player] === aNa && 0 < aFe[player] ? aFe[player] = 0 : (aNI[player] = aNa, aFe[player] = ak.tW.a2H(aNa) ? 255 : 64) : 1 === eI ? (aFe[player] = 64, aNI[player] = aNa) : aFe[player] = aNa
		}(player, eI, aNa), 2 === aE.a38 && this.nG(!0)
	}, this.xl = function() {
		aNF && (1 !== aNE ? (xm.imageSmoothingEnabled = !0, xm.setTransform(aNE, 0, 0, aNE, 0, 0), xm.drawImage(aNG, -aNC / aNE, -aND / aNE), xm.setTransform(1, 0, 0, 1, 0, 0), xm.imageSmoothingEnabled = !1) : xm.drawImage(aNG, -aNC, -aND))
	}, this.aCK = function(iw, iz) {
		aNC += iw, aND += iz
	}, this.a4e = function(iw, iz) {
		ag.aCK(iw, iz)
	}, this.zoom = function(a5W, m9, mA) {
		aNE *= a5W, aNC = (aNC + m9) * a5W - m9, aND = (aND + mA) * a5W - mA
	}, this.aL7 = function(player) {
		var jS = ah.jS[player],
			jT = ah.jT[player],
			jU = ah.jU[player],
			jV = ah.jV[player],
			j7 = bP.hp(0),
			j8 = bP.hr(0),
			j9 = bP.hp(i.j),
			jA = bP.hr(i.k);
		jS < j9 && j7 < jT && jU < jA && j8 < jV && (aN2[player] = 0, aNN = !0)
	}, this.nG = function(by) {
		return !(!aNN && !by && bi.eZ < aNM + (1 === aNE && 0 === aNC && 0 === aND && (aE.a7w() || aE.hx || 2 === aE.a38) ? 1e3 : aDc) || (aNX(aNH), 0))
	}, this.aNd = function(aC) {
		return aNZ(aC) * aN4[aC]
	}, this.aNe = function(player) {
		return aN4[player]
	}, this.ee = function() {
		bi.kr() % 10 == 9 && (aNN = aNN || aE.a7y() && !aE.a7w()), !aE.a7w() && 4 <= ++aMz && function() {
			var aC, fs, ft;
			for (aMz = 0, ft = 4; 1 <= ft; ft--)
				for (fs = am.lQ - 1; 0 <= fs; fs--) aC = am.lV[fs] + ft * aE.fW, 0 < aFe[aC] && aFe[aC] < 255 && aFe[aC]--;
			if (2 !== aE.a38)
				for (fs = am.lQ - 1; 0 <= fs; fs--) aC = am.lV[fs], 0 < aFe[aC] && aFe[aC] < 255 && aFe[aC]--
		}();
		var aC, fs, fZ = Math.floor(.1 * am.lQ);
		for (fZ = (fZ = fZ < 8 ? 8 : fZ) > am.lQ ? am.lQ : fZ, aC = aMy + fZ - 1; aMy <= aC; aC--) fs = aC % am.lQ, ! function(aC) {
			var ia = aNZ(aC) * aN4[aC];
			0 < aN2[aC] && aO3(aC, aN0[aC], aN1[aC], aN2[aC], aN3[aC]) ? ! function(aC) {
				for (var fg, fi, j, k, fD = !1, ft = 0; ft < 8; ft++) {
					if (j = aN2[aC] + 2, k = aN3[aC] + 2, j > ah.jT[aC] - ah.jS[aC] + 1 || k > ah.jV[aC] - ah.jU[aC] + 1) return fD;
					if (fg = aN0[aC] - 1, fi = aN1[aC] - 1, !aO3(aC, fg, fi, j, k)) return fD;
					aN0[aC] = fg, aN1[aC] = fi, aN2[aC] = j, aN3[aC] = k, fD = !0
				}
				return fD
			}(aC) && function(aC, ia) {
				for (var fg, fi, j, k, fD = !1, aFn = aN2[aC], o7 = 1 + Math.floor(.02 * aFn), ft = 1; ft < 5; ft++) {
					if ((j = aFn + ft * o7) > ah.jT[aC] - ah.jS[aC] + 1) return fD;
					if ((k = aO9(ia, j)) > ah.jV[aC] - ah.jU[aC] + 1) return fD;
					fg = ah.jS[aC] + Math.floor(Math.random() * (ah.jT[aC] - ah.jS[aC] + 2 - j)), fi = ah.jU[aC] + Math.floor(Math.random() * (ah.jV[aC] - ah.jU[aC] + 2 - k)), aO3(aC, fg, fi, j, k) && (aN0[aC] = fg, aN1[aC] = fi, aN2[
						aC] = j, aN3[aC] = k, fD = !0)
				}
				return fD
			}(aC, ia) && aO6(aC) : ! function(aC, ia) {
				var k, fg = aN0[aC] + 1,
					fi = aN1[aC] + 1,
					j = aN2[aC] - 2;
				for (;;) {
					if (j < 1) {
						aN2[aC] = 0;
						break
					}
					if (k = aO9(ia, j), aO3(aC, fg, fi, j, k)) return aN0[aC] = fg, aN1[aC] = fi, aN2[aC] = j, aN3[aC] = k, 1;
					fg++, fi++, j -= 2
				}
				return
			}(aC, ia) ? function(aC, ia) {
				var fg, fi, j, k, ft, oD, kA = ah.jT[aC] - ah.jS[aC] + 1,
					aOA = Math.floor(.02 * kA);
				for (oD = -6 * (aOA = aOA < 1 ? 1 : aOA), ft = kA; oD <= ft; ft -= aOA)
					if (k = aO9(ia, j = 0 < ft ? ft : 1), fg = ah.jS[aC] + Math.floor(Math.random() * (ah.jT[aC] - ah.jS[aC] + 2 - j)), fi = ah.jU[aC] + Math.floor(Math.random() * (ah.jV[aC] - ah.jU[aC] + 2 - k)), aO3(aC, fg, fi, j, k))
						return aN0[aC] = fg, aN1[aC] = fi, aN2[aC] = j, aN3[aC] = k
			}(aC, ia) : aO6(aC)
		}(am.lV[fs]);
		aMy = (aMy += fZ) % am.lQ
	}, this.nA = function() {
		var aC, h7, a2F, a2G;
		if (bi.kr() % 4 == 1)
			for (aC = am.lQ - 1; 0 <= aC; aC--) h7 = am.lV[aC], ad.aBX[h7] < 2 || ((a2F = Math.max(aNQ[h7] - 1, 0)) === (a2G = Math.max(aNR[h7] - 1, 0)) ? 0 === a2F && (ad.aBX[h7] %= 2) : 0 === a2G && ad.aBX[h7] < 6 && (ad.aBX[h7] += 4), aNQ[
				h7] = a2F, aNR[h7] = a2G)
	}, this.a9b = function(player) {
		var aC = player + 2 * aE.fW,
			ea = aFe[aC];
		return 0 < ea && (aO.a3G(50, player), aFe[aC] = 0, 255 === ea)
	}, this.a8d = function(player) {
		return 255 === aFe[player + 2 * aE.fW]
	}
}

function ch() {
	var aOD, aOE, aOF;
	this.dk = function() {
		aOD =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aOE =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aOF = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a9r = ["K ", " Y", "E ", " Z", " z", " s", "S "], aGx = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aOD.length - 1; 0 <= aC; aC--)
			for (var fs = a9r.length - 1; 0 <= fs; fs--) aOD[aC] = aOD[aC].replace(a9r[fs], aGx[fs]);
		if (__fx.settings.realisticNames) aOD = realisticNames;
	}, this.a7j = function() {
		var fZ = aE.ku,
			a1c = ah.a1c,
			a3o = ah.a3o,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fZ)
			for (var aC = 0; aC < fZ; aC++) a1c[aC] = a3o[aC] = "Player " + az.kB(1e3);
		else
			for (aC = 0; aC < fZ; aC++) a1c[aC] = a3o[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.lC) {
			for (var eH = az.random(), aOL = aOF, aOM = aOE, iI = aF.iI, fZ = aOL.length, lp = aE.data.teamPlayerCount[7], a1c = ah.a1c, a3o = ah.a3o, aC = lp - 1; aC >= aE.ku; aC--) a1c[aC] = a3o[aC] = aOL[(aC + eH) % fZ];
			for (fZ = aOM.length - 1, aC = lp; aC < aE.fW; aC++) a1c[aC] = a3o[aC] = aOM[iI[aC] ? fZ : aC % fZ]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fZ = aE.fW, a1c = ah.a1c, a3o = ah.a3o, playerNamesData = aE.data.playerNamesData, aC = aE.ku; aC < fZ; aC++) a1c[aC] = a3o[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var a1c = ah.a1c, a3o = ah.a3o, aC = aE.ku; aC < aE.fW; aC++) a1c[aC] = a3o[aC] = "Bot " + az.kB(1e3)
		} : function() {
			for (var aON = aOD, fZ = aON.length, eH = az.random(), a1c = ah.a1c, a3o = ah.a3o, aC = aE.ku; aC < aE.fW; aC++) a1c[aC] = a3o[aC] = aON[(aC + eH) % fZ]
		})()
	}
}

function d0() {
	this.aOO = [], this.aOP = [], this.dk = function() {
		this.aOO = [], this.aOP = []
	}, this.ee = function() {
		0 <= this.aOO.length && this.aOQ(this.aOO), 0 <= this.aOP.length && this.aOQ(this.aOP)
	}, this.aOQ = function(h) {
		for (var ft = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].eZ--, h[aC].eZ <= 0) {
				ft = aC;
				break
			} for (aC = ft; 0 <= aC; aC--) h.shift()
	}, this.a8W = function(id, w1, aOR) {
		return this.fu(this.aOO, id, w1, aOR)
	}, this.aOS = function(id, w1, aOR) {
		return this.fu(this.aOP, id, w1, aOR)
	}, this.fu = function(h, id, w1, aOR) {
		return ! function(h, id, w1) {
			var aC, iR;
			for (aC = w1.length - 1; 0 <= aC; aC--)
				for (iR = h.length - 1; 0 <= iR; iR--)
					if (h[iR].player === w1[aC] && id === h[iR].id) return 1;
			return
		}(h, id, w1) && (aOR && function(h, id, w1) {
			var aC;
			for (aC = w1.length - 1; 0 <= aC; aC--) h.push({
				player: w1[aC],
				id: id,
				eZ: 384
			})
		}(h, id, w1), !0)
	}
}

function cg() {
	this.a3o = new Array(aE.fW), this.a1c = new Array(aE.fW), this.a6S = new Uint8Array(aE.fW), this.nU = new Uint8Array(aE.fW), this.jS = new Uint16Array(aE.fW), this.jU = new Uint16Array(aE.fW), this.jT = new Uint16Array(aE.fW), this.jV =
		new Uint16Array(aE.fW), this.hN = new Uint32Array(aE.fW), this.a0i = new Uint32Array(aE.fW), this.hb = new Uint32Array(aE.fW), this.h1 = null, this.hF = null, this.hG = null, this.fy = null, this.rl = new Uint16Array(aE.fW), this.jx =
		new Uint16Array(aE.fW), this.jy = new Uint16Array(aE.fW), this.a3j = new Uint16Array(aE.fW), this.a3h = new Uint8Array(aE.fW), this.a6b = new Uint16Array(aE.fW), this.dk = function() {
			this.a3o.fill(""), this.a1c.fill(""), this.a6S.fill(0), this.nU.fill(0), this.jS.fill(0), this.jU.fill(0), this.jT.fill(0), this.jV.fill(0), this.hN.fill(0), this.a0i.fill(0), this.hb.fill(0), this.h1 = new Array(aE.fW), this.hF =
				new Array(aE.fW), this.hG = new Array(aE.fW), this.fy = new Array(aE.fW), this.rl.fill(0), this.jx.fill(0), this.jy.fill(0), this.a3j.fill(0), this.a3h.fill(0), this.a6b.fill(0)
		}
}

function cy() {
	this.aGG = function(player) {
		aH.nT(player), aE.a3A++, ah.a6S[player] = 2, ah.a3j[player] = bl.a3y.aLG(), player === aE.fJ && (aY.show(!1, !1), aX.aEJ(), bU.a2u.a3f()), ag.a9b(player)
	}
}

function cZ() {
	this.lV = null, this.lQ = 0, this.a7n = function() {
		for (this.lQ = 0, aC = aE.fW - 1; 0 <= aC; aC--) 0 !== ah.nU[aC] && this.lQ++;
		this.lV = new Uint16Array(this.lQ);
		for (var fZ = 0, aC = 0; aC < aE.fW; aC++) 0 !== ah.nU[aC] && (this.lV[fZ++] = aC)
	}, this.n9 = function() {
		for (var hN = ah.hN, a0i = ah.a0i, a3h = ah.a3h, lV = am.lV, aC = am.lQ - 1; 0 <= aC; aC--) {
			var h7 = lV[aC],
				ea = hN[h7],
				lp = a0i[h7];
			ea <= bO.g0(lp, 4) ? al.dt(h7) : lp <= ea ? 250 <= (a0i[h7] = ea) && (a3h[h7] = 1) : a0i[h7] = lp - Math.max(1, bO.g0(lp - ea, 1e3))
		}
		this.aOW()
	}, this.aOW = function() {
		for (var nU = ah.nU, lo = this.lV, aF1 = this.lQ, aC = aF1 - 1; 0 <= aC; aC--) 0 === nU[lo[aC]] && (lo[aC] = lo[--aF1]);
		this.lQ = aF1
	}
}

function ca() {
	var aOX = new Uint16Array(aE.fW),
		aOY = 0;

	function aOc(a9h, aOa) {
		var ej = bi.kr();
		return 3213 <= ej ? 4 + bO.g0(100 * aOa, af.ka(a9h)) : (a9h = 1 + bO.g0(aE.ke, 300), ej < 357 ? 2 + bO.g0(100 * aOa, a9h) : ej < 714 ? 2 + bO.g0(100 * aOa, 4 * a9h) : ej < 1071 ? 2 + bO.g0(100 * aOa, 10 * a9h) : ej < 2142 ? 2 + bO.g0(100 *
			aOa, 30 * a9h) : 2 + bO.g0(100 * aOa, 100 * a9h))
	}

	function aOb(a9h) {
		return aE.lE || 4284 <= bi.kr() || bD.gv.kH(a9h)
	}
	this.dk = function() {
		aOX.fill(0), aOY = 15
	}, this.iD = function(qu) {
		var player = aE.fJ;
		return !!bD.gv.rn(player, qu) && !(!bD.gv.rD(player, bD.gv.jB(player, aS.i3()), qu) || (player = qu, qu = bR.g6[0], !aOb(player) && aOX[player] + aOc(player, qu) > aOY))
	}, this.ei = function(a9h, aOa) {
		if (!aOb(a9h)) {
			aOa = aOc(a9h, aOa);
			if (aOX[a9h] + aOa > aOY) return !1;
			aOX[a9h] += aOa
		}
		return !0
	}, this.ee = function() {
		bi.kr() % 100 == 99 && (bi.kr() < 1071 ? aOY += 4 : bi.kr() < 2142 ? aOY += 6 : bi.kr() < 3213 ? aOY += 8 : aOY += 10)
	}
}

function ci() {
	var aOd;
	this.lL = null, this.lK = 0, this.dk = function() {
		aOd = [], 9 === aE.lC && this.aOe()
	}, this.aOe = function() {
		this.lL = [0, 0, 0, 0, 0, 0];
		for (var aOf = [250, 226, 166, 148, 100, this.lK = 0, 0, 0], aOg = [0, 8, 24, 30, 46, 70, 256, 333], aOh = [0, 0, 3, 9, 17, 25, 256, 179], k = aE.ku, aC = 1; aC < aOf.length; aC++)
			if (k <= aOg[aC]) {
				this.lK = aOf[aC - 1] - bO.g0((k - aOg[aC - 1]) * (aOf[aC - 1] - aOf[aC]), aOg[aC] - aOg[aC - 1]), this.lL[5] = aOh[aC - 1] - bO.g0((k - aOg[aC - 1]) * (aOh[aC - 1] - aOh[aC]), aOg[aC] - aOg[aC - 1]), this.lL[0] = aE.fW - k - this
					.lK - this.lL[5];
				break
			} aE.lG = aE.fW - aE.ku, aE.data.numberTeams = (0 < aE.ku) + (0 < aE.lG), aE.data.playerCount = aE.a0E = aE.ku + aE.lG, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.ku + this.lK, aE.lG - this.lK]), aE.a7c.a7h()
	}, this.aLN = function(player) {
		aOd.push({
			player: player,
			h2: 14 + az.kB(20)
		})
	}, this.ee = function() {
		if (9 === aE.lC)
			for (var aC = aOd.length - 1; 0 <= aC; aC--) --aOd[aC].h2 <= 0 && (ag.rv(aOd[aC].player, 0, ak.tW.a1x + ak.tW.a2B), aOd.splice(aC, 1))
	}
}

function dH() {
	this.aOj = 25, this.aOk = 13, this.aLZ = 4096, this.fk = 0, this.fl = 0, this.zg = null, this.zc = null, this.zd = null, this.zh = null, this.fF = 0, this.mapSeed = 0, this.ze = !1, this.zf = new aOl, this.wG = new aOm, this.a9y = new aOn;
	var aOo = {
		aOp: function() {},
		dk: function() {}
	};

	function aOy() {
		return {
			fk: bV.fk,
			fl: bV.fl,
			zg: bV.zg,
			zc: bV.zc,
			zd: bV.zd,
			zh: bV.zh,
			fF: bV.fF,
			mapSeed: bV.mapSeed,
			ze: bV.ze
		}
	}

	function aOz(g1) {
		bV.fk = g1.fk, bV.fl = g1.fl, bV.zg = g1.zg, bV.zc = g1.zc, bV.zd = g1.zd, bV.zh = g1.zh, bV.fF = g1.fF, bV.mapSeed = g1.mapSeed, bV.ze = g1.ze
	}

	function aOr(aC) {
		return !(1 === aC || !bV.aH5(aC) || aC === bV.aP3())
	}
	this.dk = function() {
		this.wG.dk()
	}, this.a8 = function(map, aOq) {
		((map %= this.aOj) !== this.fF || aOr(this.fF) && aOq !== this.mapSeed) && (this.ze = !1, this.zf.aOp(), az.a7i(map), this.fF = map, this.mapSeed = aOq, aOr(map) && (bV.wG.zX[map].aOs = aOq), this.aH5(this.fF) ? (map = bV.wG.zX[this.fF],
			this.fk = map.j, this.fl = map.k, az.a7i(map.aOs), ar.a8([this.fk, this.fl, map.nZ, map.nW]), aOu(), aq.aOv(), ar.aOw()) : aOt())
	}, this.aOx = function(map, aOq) {
		var gI = aOy(),
			map = (this.a8(map, aOq), this.zf.aOp(), aOy());
		return aOz(gI), map
	}, this.aHx = function(map, aOq) {
		var gI = aOy(),
			aOs = az.aP0(),
			aP1 = this.wG.zX[map].aOs,
			aP2 = this.zf,
			aOq = (this.zf = aOo, this.a8(map, aOq), this.zg);
		return this.zf = aP2, this.wG.zX[map].aOs = aP1, az.a7i(aOs), aOz(gI), aOq
	}, this.a83 = function(canvas) {
		canvas && this.zg !== canvas && (this.fk = canvas.width, this.fl = canvas.height, this.zg = canvas, this.zc = this.zg.getContext("2d", {
			alpha: !1
		}), this.iY = this.zc.getImageData(0, 0, this.fk, this.fl), this.zh = this.iY.data, this.fF = this.aP3(), this.mapSeed = 0, bV.wG.zX[this.fF].name = aE.data.mapName)
	}, this.fE = function(aC) {
		return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aP3()
	}, this.aP4 = function(aC) {
		return 2 === aC || 7 === aC || 9 === aC || 20 === aC
	}, this.aP5 = function(aC) {
		return 1 === aC
	}, this.aP3 = function() {
		return this.aOj
	}, this.aH5 = function(aC) {
		return void 0 === this.wG.zX[aC].aP6
	}, this.aHs = aOr, this.a82 = function(sE) {
		return 0 === sE.mapType ? sE.mapProceduralIndex < 10 ? sE.mapProceduralIndex : 10 + sE.mapProceduralIndex : 1 === sE.mapType ? 10 <= sE.mapRealisticIndex ? 22 + sE.mapRealisticIndex - 10 : sE.mapRealisticIndex + 10 : void 0
	}, this.aH6 = function(sE, aP7) {
		0 === sE.mapType ? sE.mapProceduralIndex = aP7 < 10 ? aP7 : aP7 - 10 : 1 === sE.mapType && (sE.mapRealisticIndex = aP7 - (22 <= aP7 ? 12 : 10))
	}
}

function aOl() {
	function aPG() {
		bV.zf.ee()
	}

	function aPL(h7, aPK) {
		0 < aPK && (bV.zh[h7] += aPK, bV.zh[h7 + 1] += aPK, bV.zh[h7 + 2] += aPK)
	}

	function iq(h7) {
		return bV.zh[h7 + 2] > bV.zh[h7] && bV.zh[h7 + 2] > bV.zh[h7 + 1]
	}
	this.aCW = -1, this.a4B = 0, this.aP8 = 0, this.aP9 = 8, this.aPA = 32, this.aPB = 8, this.aPC = 32, this.aPD = [0, 0], this.aBX = [0, 0, 0, 0], this.jM = null, this.aPE = !0, this.aPF = !1, this.aOp = function() {
		-1 !== this.aCW && clearTimeout(this.aCW), this.aCW = -1, this.jM = null, ar.aOw()
	}, this.dk = function() {
		7 === ab.a4H() || this.aPF || (this.aPE = !0, this.a4B = 0, this.aP8 = 1, this.aPD = [bV.wG.zX[bV.fF].zy[0], bV.wG.zX[bV.fF].zz[0]], this.aBX = [bV.wG.zX[bV.fF].aP6[3], bV.wG.zX[bV.fF].aP6[4], bV.wG.zX[bV.fF].aP6[5], bV.wG.zX[bV.fF].aP6[
			6]], this.aP9 = bV.wG.zX[bV.fF].aP6[7], this.aPA = bV.wG.zX[bV.fF].aP6[8], this.aPB = bV.wG.zX[bV.fF].aP6[9], this.aPC = bV.wG.zX[bV.fF].aP6[10], this.aPE ? this.aCW = setTimeout(aPG, 16) : this.ee())
	}, this.ee = function() {
		if (8 === ab.a4H() && aI.nn()) this.aCW = setTimeout(aPG, 16);
		else {
			if (0 === this.a4B) {
				var aOs = az.aP0();
				if (az.a7i(bV.wG.zX[bV.fF].aP6[2]), ar.a8([bV.fk, bV.fl, bV.wG.zX[bV.fF].aP6[0], bV.wG.zX[bV.fF].aP6[1]]), az.a7i(aOs), this.jM = ar.aPH(), this.a4B++, this.aPE) return void(this.aCW = setTimeout(aPG, 16))
			}
			for (var h7, fL, aOs = this.aPE ? 10 : 1e6, aOs = bV.fl - this.aP8 - 1 < aOs ? bV.fl - this.aP8 - 1 : aOs, a0v = this.aP8 + aOs, fi = this.aP8; fi < a0v; fi++)
				for (var fg = 1; fg < bV.fk - 1; fg++) iq(h7 = 4 * (fL = fg + fi * bV.fk)) ? this.aPI(h7, fL, 1) : (this.aPI(h7, fL, 0), function(fg, fi, h7) {
					return 1 < fg && iq(h7 - 4) || fg < bV.fk - 2 && iq(h7 + 4) || 1 < fi && iq(h7 - 4 * bV.fk) || fi < bV.fl - 2 && iq(h7 + 4 * bV.fk)
				}(fg, fi, h7) && this.aPJ(fg, fi));
			this.aP8 = a0v, this.aP8 >= bV.fl - 1 ? (bV.zc.putImageData(bV.zd, 0, 0, 1, 1, bV.fk - 2, bV.fl - 2), bi.ds = !0, this.aOp()) : this.aPE && (this.aCW = setTimeout(aPG, 16))
		}
	}, this.aPI = function(h7, fL, eI) {
		aPL(h7, Math.floor(this.aPD[eI] + this.aBX[eI] * this.jM[fL] / 1e4) - bV.zh[h7])
	}, this.aPM = function(h7, eH, aPN, eI, aBX) {
		aPL(h7, Math.floor(this.aPD[eI] + (1 - eH / aPN) * aBX) - bV.zh[h7])
	}, this.aPJ = function(m9, mA) {
		for (var h7, eH, aPN, aCM = m9 - this.aPA, aPO = mA - this.aPA, a0w = m9 + this.aPA, a0v = mA + this.aPA, aCM = aCM < 1 ? 1 : aCM, a0w = a0w > bV.fk - 2 ? bV.fk - 2 : a0w, a0v = a0v > bV.fl - 2 ? bV.fl - 2 : a0v, fi = aPO < 1 ? 1 :
			aPO; fi <= a0v; fi++)
			for (var fg = aCM; fg <= a0w; fg++) iq(h7 = 4 * (fg + fi * bV.fk)) ? (aPN = this.aP9 + (this.aPA - this.aP9) * this.jM[fg + bV.fk * fi] / 1e4, Math.abs(m9 - fg) > aPN || Math.abs(mA - fi) > aPN || aPN <= (eH = Math.sqrt((m9 - fg) * (
				m9 - fg) + (mA - fi) * (mA - fi))) || this.aPM(h7, eH, aPN, 1, this.aBX[3])) : (aPN = this.aPB + (this.aPC - this.aPB) * this.jM[fg + bV.fk * fi] / 1e4, Math.abs(m9 - fg) > aPN || Math.abs(mA - fi) > aPN || aPN <= (eH = Math
				.sqrt((m9 - fg) * (m9 - fg) + (mA - fi) * (mA - fi))) || this.aPM(h7, eH, aPN, 0, this.aBX[2]))
	}
}

function aOu() {
	var oM = aPP(bV.fF);
	oM && aPQ(oM[0], oM[1], oM[2], oM[3], oM[4])
}

function aPP(fF) {
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

function aPQ(aPR, aPS, aPT, aPU, aPV) {
	for (var fg, fi, aLv, aLw, a5W, aPY, iv = aPR.length - 1, aPW = bV.fk + bV.fl, fZ = (aPW *= aPW, aPT.length), aPX = Array(fZ), aC = fZ - 1; 0 <= aC; aC--) aPX[aC] = aPT[aC] * aPT[aC];
	var aPZ = new Array(fZ),
		aFb = new Array(fZ),
		aPa = new Array(fZ),
		g1 = ar.aPH();
	if (void 0 === aPV)
		for (aPV = new Array(fZ), aC = fZ - 1; 0 <= aC; aC--) aPV[aC] = 0;
	for (aC = 1; aC < fZ; aC++) aPZ[aC] = aPX[aC] - aPX[aC - 1], aFb[aC] = aPU[aC] - aPU[aC - 1], aPa[aC] = aPV[aC] - aPV[aC - 1];
	for (fg = bV.fk - 1; 0 <= fg; fg--)
		for (fi = bV.fl - 1; 0 <= fi; fi--) {
			for (aLv = aPW, aC = iv; 0 <= aC; aC--) aLv = (aLw = (fg - aPR[aC]) * (fg - aPR[aC]) + (fi - aPS[aC]) * (fi - aPS[aC])) < aLv ? aLw : aLv;
			for (a5W = aPU[fZ - 1], aPY = aPV[fZ - 1], aC = 1; aC < fZ; aC++)
				if (aLv < aPX[aC]) {
					a5W = aPU[aC - 1] + aKi((aLv - aPX[aC - 1]) * aFb[aC], aPZ[aC]), aPY = aPV[aC - 1] + aKi((aLv - aPX[aC - 1]) * aPa[aC], aPZ[aC]);
					break
				} aPb(bV.fk * fi + fg, a5W, aPY, g1)
		}
}

function aPb(eI, a5W, aPY, g1) {
	a5W < 500 ? g1[eI] = bO.g0(g1[eI] * a5W * 2, 1e3) : 500 < a5W && (g1[eI] += bO.g0(2 * (1e4 - g1[eI]) * (a5W - 500), 1e3)), g1[eI] += bO.g0(aPY * (10 * a5W - g1[eI]), 1e3)
}

function ck() {
	var aPc;

	function aPm(a5x, ia, fg, fi, globalAlpha) {
		bV.zc.save(), bV.zc.globalAlpha = globalAlpha, bV.zc.imageSmoothingEnabled = !1, bV.zc.scale(ia, ia), bV.zc.drawImage(a5x, Math.floor(fg * (bV.fk / ia - a5x.width)), Math.floor(fi * (bV.fl / ia - a5x.height))), bV.zc.restore()
	}
	this.a9v = 0, this.a9w = 0, this.a9x = 0, this.a9y = 0, this.dk = function() {
		(aPc = new Array(bV.aOj))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eH: [220, 250, 255, 220],
			uv: [190, 220, 0, 0],
			ft: [170, 200, 0, 0]
		}, aPc[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eH: [25, 0, 100, 0, 25],
			uv: [25, 0, 0, 0, 25],
			ft: [25, 0, 0, 0, 25]
		}, aPc[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eH: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			uv: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			ft: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aPc[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eH: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			uv: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			ft: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aPc[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eH: [10, 10, 20, 10, 10, 170, 212],
			uv: [20, 20, 60, 100, 100, 110, 170],
			ft: [70, 70, 160, 30, 30, 60, 120]
		}, aPc[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eH: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			uv: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			ft: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aPc[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eH: [10, 10, 60, 255, 255, 200, 200],
			uv: [10, 10, 60, 255, 255, 200, 200],
			ft: [80, 80, 255, 255, 255, 200, 200]
		}, aPc[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eH: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			uv: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			ft: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aPc[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eH: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			uv: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			ft: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aPc[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eH: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			uv: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			ft: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aPc[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eH: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			uv: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			ft: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aPc[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eH: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			uv: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			ft: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aOv = function() {
		var aPl, aC, fs, gI, iY = function() {
				var iY;
				return bV.zg = document.createElement("canvas"), bV.zg.width = bV.fk, bV.zg.height = bV.fl, bV.zc = bV.zg.getContext("2d", {
					alpha: !1
				}), iY = bV.zc.getImageData(0, 0, bV.fk, bV.fl), bV.zh = iY.data, iY
			}(),
			j = aPc[bV.fF].j,
			eH = aPc[bV.fF].eH,
			uv = aPc[bV.fF].uv,
			ft = aPc[bV.fF].ft,
			g1 = ar.aPH(),
			fZ = j.length - 2,
			aPg = new Array(1 + fZ),
			aPh = new Array(1 + fZ),
			aPi = new Array(1 + fZ),
			aPj = new Array(1 + fZ);
		for (fs = fZ; 0 <= fs; fs--) aPg[fs] = j[fs + 1] - j[fs], aPh[fs] = eH[fs + 1] - eH[fs], aPi[fs] = uv[fs + 1] - uv[fs], aPj[fs] = ft[fs + 1] - ft[fs];
		for (aC = bV.fk * bV.fl - 1; 0 <= aC; aC--)
			for (fs = fZ; 0 <= fs; fs--)
				if (g1[aC] >= j[fs]) {
					gI = g1[aC] - j[fs], bV.zh[4 * aC] = eH[fs] + aKi(aPh[fs] * gI, aPg[fs]), bV.zh[4 * aC + 1] = uv[fs] + aKi(aPi[fs] * gI, aPg[fs]), bV.zh[4 * aC + 2] = ft[fs] + aKi(aPj[fs] * gI, aPg[fs]), bV.zh[4 * aC + 3] = 255;
					break
				} bV.zc.putImageData(iY, 0, 0), bV.aP5(bV.fF) && ac.uz() && bV.aP5(bV.fF) && (iY = ac.w8("arena"), aPl = ac.w8("territorial.io"), aPm(iY, 5, .5, .5, .1), aPm(aPl, 2, .5, .45, .1)), bV.ze = !0, bi.ds = !0
	}, this.a7l = function() {
		for (var h7, fg, fi, aPn, iP, gK, a9w = 0, j = bV.fk, k = bV.fl, gI = j * k * 4, aPo = aFA, aPp = bV.zh, aC = j - 1; 0 <= aC; aC--) aPo[(h7 = aC << 2) + 2] = aPo[gI - h7 - 2] = 3;
		for (gI = 4 * j, aC = k - 1; 0 <= aC; aC--) aPo[(h7 = aC * gI) + 2] = aPo[h7 + gI - 2] = 3;
		for (aPn = j - 1, iP = k - 1, fi = 1; fi < iP; fi++)
			for (gI = fi * j, fg = 1; fg < aPn; fg++) gK = 1 - (aPp[(h7 = gI + fg << 2) + 2] > aPp[h7 + 1] && aPp[h7 + 2] > aPp[h7]), aPo[h7 + 2] = 6 - 5 * gK, a9w += gK;
		this.a9v = (j - 2) * (k - 2), this.a9y = 0, bV.fE(bV.fF) && (bV.a9y.aPq(), bV.a9y.aPr(4, 5)), this.a9w = aE.ke = a9w - this.a9y, this.a9x = this.a9v - this.a9w - this.a9y, this.a9x && (bV.a9y.aPr(6, 2), bV.a9y.aPs())
	}
}

function aOt() {
	var s3;
	10 === bV.fF ? s3 =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bV.fF ? s3 =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bV.fF ? s3 =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bV.fF ? s3 =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bV.fF ? s3 =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bV.fF ? s3 =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bV.fF ? s3 =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bV.fF ? s3 =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bV.fF ? s3 =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bV.fF ? s3 =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bV.fF ? s3 =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bV.fF ? s3 =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bV.fF && (s3 =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new zQ).zS(s3)
}

function aOm() {
	this.zX = null, this.aPt = null, this.aPu = null, this.dk = function() {
		this.wH = [L(146), L(147), L(148), L(149), L(150), L(151), L(152), L(153), L(154), L(155), L(156), L(157), L(158), L(159), L(160), L(161), L(162), L(163), L(164), L(165), L(166), L(167), L(168), L(169), "Mare Nostrum"];
		var aPv = [120, 105, 92],
			cos = [12, 12, 60],
			aPw = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aPx = [140, 130, 120],
			aPy = [12, 12, 76],
			aPz = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aQ0 = [130, 117, 106],
			aQ1 = [12, 12, 68],
			aQ2 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.zX = new Array(bV.aOj + 1), __fx.customLobby.setMapInfo(this.zX), this.zX[0] = {
			j: 230,
			k: 230,
			nZ: 1e3,
			nW: 2e3,
			aOs: 173
		}, this.zX[1] = {
			j: 800,
			k: 800,
			nZ: 100,
			nW: 50,
			aOs: 43
		}, this.zX[2] = {
			j: 512,
			k: 512,
			nZ: 128,
			nW: 32,
			aOs: 0
		}, this.zX[3] = {
			j: 960,
			k: 960,
			nZ: 60,
			nW: 8,
			aOs: 0
		}, this.zX[4] = {
			j: 900,
			k: 900,
			nZ: 100,
			nW: 5,
			aOs: 0
		}, this.zX[5] = {
			j: 1e3,
			k: 1e3,
			nZ: 100,
			nW: 40,
			aOs: 0
		}, this.zX[6] = {
			j: 1e3,
			k: 1e3,
			nZ: 100,
			nW: 20,
			aOs: 0
		}, this.zX[7] = {
			j: 1024,
			k: 1024,
			nZ: 128,
			nW: 32,
			aOs: 0
		}, this.zX[8] = {
			j: 820,
			k: 820,
			nZ: 200,
			nW: 100,
			aOs: 0
		}, this.zX[9] = {
			j: 1024,
			k: 1024,
			nZ: 128,
			nW: 32,
			aOs: 0
		}, this.zX[10] = {
			zy: aPx,
			zz: aPy,
			aP6: aPz
		}, this.zX[11] = {
			zy: aQ0,
			zz: aQ1,
			aP6: aQ2
		}, this.zX[12] = {
			zy: aQ0,
			zz: aQ1,
			aP6: aQ2
		}, this.zX[13] = {
			zy: aPv,
			zz: cos,
			aP6: aPw
		}, this.zX[14] = {
			zy: aPv,
			zz: cos,
			aP6: aPw
		}, this.zX[15] = {
			zy: aPx,
			zz: aPy,
			aP6: aPz
		}, this.zX[16] = {
			zy: aPx,
			zz: aPy,
			aP6: aPz
		}, this.zX[17] = {
			zy: aPv,
			zz: cos,
			aP6: aPw
		}, this.zX[18] = {
			zy: aQ0,
			zz: aQ1,
			aP6: aQ2
		}, this.zX[19] = {
			zy: aPv,
			zz: cos,
			aP6: aPw
		}, this.zX[20] = {
			j: 1024,
			k: 1024,
			nZ: 128,
			nW: 32,
			aOs: 0
		}, this.zX[21] = {
			j: 940,
			k: 940,
			nZ: 80,
			nW: 8,
			aOs: 0
		}, this.zX[22] = {
			zy: aQ0,
			zz: aQ1,
			aP6: aQ2
		}, this.zX[23] = {
			zy: aPx,
			zz: aPy,
			aP6: aPz
		}, this.zX[24] = {
			zy: [157, 136, 117],
			zz: [16, 13, 68],
			aP6: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			a9u: "[OG] Neutronian"
		};
		for (var aC = 0; aC < bV.aOj; aC++) this.zX[aC].name = this.wH[aC];
		this.zX[bV.aOj] = {
			name: ""
		}, this.aPt = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aPt[aC] = aC;
		for (this.aPt[10] = 20, this.aPt[11] = 21, this.aPu = new Uint8Array(bV.aOk), aC = 0; aC < 10; aC++) this.aPu[aC] = 10 + aC;
		this.aPu[10] = 22, this.aPu[11] = 23, this.aPu[12] = 24
	}
}

function aOn() {
	this.aPq = function() {
		for (var h7, fg, gI, aPo = aFA, aPp = bV.zh, j = bV.fk, aPn = j - 1, iP = bV.fl - 1, h2 = 0, fi = 1; fi < iP; fi++)
			for (gI = fi * j, fg = 1; fg < aPn; fg++) aPp[h7 = gI + fg << 2] === aPp[1 + h7] && aPp[h7] === aPp[2 + h7] && (h2++, aPo[2 + h7] = 4);
		aq.a9y = h2
	}, this.aPr = function(aQ4, aQ5) {
		for (var aPo = aFA, j = bV.fk, aPn = j - 1, iP = bV.fl - 1, id = 0, fi = 1; fi < iP; fi++)
			for (var gI = fi * j, fg = 1; fg < aPn; fg++) {
				var fD = 2 + (gI + fg << 2);
				aPo[fD] === aQ4 && (! function(fD, id, aQ4, aQ5) {
					var fZ = 1,
						aPo = aFA,
						fb = ad.aKZ,
						a5j = [fD],
						aQ7 = id >> 8 << 1,
						aQ8 = 255 & id;
					aPo[fD - 2] = aQ7, aPo[fD - 1] = aQ8, aPo[fD] = 5;
					for (; fZ;) {
						for (var a5k = [], aC = 0; aC < fZ; aC++)
							for (var fO = a5j[aC], fc = 0; fc < 8; fc++) {
								var fd = fO + fb[fc];
								aPo[fd] === aQ4 && (aPo[fd - 2] = aQ7, aPo[fd - 1] = aQ8, aPo[fd] = aQ5, a5k.push(fd))
							}
						fZ = (a5j = a5k).length
					}
				}(fD, id, aQ4, aQ5), id = (id + 1) % 32768)
			}
	}, this.aPs = function() {
		for (var aPo = aFA, j = bV.fk, aPn = j - 3, iP = bV.fl - 3, aQA = 12 * j, fi = 3; fi < iP; fi++)
			for (var gI = fi * j, fg = 3; fg < aPn; fg++) {
				var fD = 2 + (gI + fg << 2);
				2 !== aPo[fD] || 2 === aPo[fD - 12] && 2 === aPo[12 + fD] && 2 === aPo[fD - aQA] && 2 === aPo[fD + aQA] || (aPo[fD - 2] = 1 | aPo[fD - 2])
			}
	}
}

function a7k() {
	(a1H = void 0 === a1H ? document.createElement("canvas") : a1H).width = bV.fk, a1H.height = bV.fl, a7o = a1H.getContext("2d", {
		alpha: !0
	}), a7p = aFA = null, a7p = a7o.getImageData(0, 0, bV.fk, bV.fl), aFA = a7p.data, bD.sU.zi(aFA)
}

function cl() {
	var g1, j, k, max, aQB, nW, aQD, aQE, aQF, aQG, aQH, aQI, aQJ, aQK, aQC = 1e4;

	function aQR(aQQ, nZ, fZ) {
		var aC;
		for (aQD[0] = aQQ, aC = 1; aC < fZ; aC++) aQD[aC] = aQD[aC - 1] + nZ, nZ = aQD[aC] >= aQC ? (aQD[aC] = aQC - 1, -nZ) : aQD[aC] < 0 ? (aQD[aC] = 0, -nZ) : (nZ += 16384 <= az.random() ? nW : -nW) < -aQB ? -aQB : aQB < nZ ? aQB : nZ
	}

	function aQT(fg, fi, aQU, fZ) {
		(aQU ? function(fg, fi, fZ) {
			var aC;
			for (aC = 0; aC < fZ; aC++) g1[fi * j + fg + aC] = aQD[aC]
		} : function(fg, fi, fZ) {
			var aC;
			for (aC = 0; aC < fZ; aC++) g1[fi * j + fg + aC * j] = aQD[aC]
		})(fg, fi, fZ)
	}

	function aQX(value, fZ) {
		var aC, aOA, fD, k9 = value - aQD[fZ - 1];
		if (0 != k9) {
			for (aOA = 1 + bO.g0(Math.abs(k9), fZ - 1), aOA = k9 < 0 ? -aOA : aOA, aQD[fZ - 1] = value, fD = (fD = fZ - 1 - bO.g0(Math.abs(k9), Math.abs(aOA))) < 1 ? 1 : fZ - 2 < fD ? fZ - 2 : fD, aC = fZ - 2; fD <= aC; aC--) aQD[aC] += k9 - (fZ -
				1 - aC) * aOA;
			(k9 < 0 ? function(fZ) {
				var aC;
				for (aC = fZ - 2; 1 <= aC; aC--) aQD[aC] < 0 && (aQD[aC] = -aQD[aC] - 1)
			} : function(fZ) {
				var aC;
				for (aC = fZ - 2; 1 <= aC; aC--) aQD[aC] >= aQC && (aQD[aC] = 2 * aQC - aQD[aC] - 1)
			})(fZ)
		}
	}

	function aQa(a5j, a5k, fZ) {
		for (var aC = 0; aC < fZ; aC++) a5j[aC] = a5k[aC]
	}

	function aQb(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aQc(a8Q, gap, iQ) {
		aQE.push(a8Q), aQF.push(gap), aQG.push(iQ)
	}
	this.a8 = function(a6x) {
		! function(a6x) {
			var aC;
			for (j = a6x[0], k = a6x[1], aQB = a6x[2], nW = a6x[3], g1 = new Int16Array(j * k), max = k < j ? j : k, aQD = new Int16Array(max), aQE = [], aQF = [], aQG = [], aQH = new Array(j), aQI = new Array(k), aC = j - 1; 0 <= aC; aC--) aQH[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aQI[aC] = !1;
			aQJ = new Int16Array(j), aQK = new Int16Array(k)
		}(a6x),
		function(fZ) {
			var aQQ = az.random() % aQC,
				nZ = az.random() % (2 * aQB + 1) - aQB;
			aQR(aQQ, nZ, fZ)
		}(max), aQa(aQK, aQD, k), aQT(0, 0, !0, j);
		var fg, fi, a6x = g1[0],
			fZ = max,
			nZ = az.random() % (2 * aQB + 1) - aQB;
		for (aQR(a6x, nZ, fZ), aQa(aQJ, aQD, j), aQT(0, 0, !1, k), aQb(aQJ), aQb(aQK), aQR(g1[j - 1], aQJ[j - 1], k), aQT(j - 1, 0, !1, k), aQR(g1[j * (k - 1)], aQK[k - 1], j), aQX(g1[j * k - 1], j), aQT(0, k - 1, !0, j), aQH[j - 1] = aQH[0] = !
			0, aQI[k - 1] = aQI[0] = !0, aQc(0, j, !0), aQc(0, k, !1), ! function() {
				var aQe, a8Q;
				for (;;) {
					if (aQe = function() {
							var aC, aQe = aQE.length - 1;
							for (aC = aQe - 1; 0 <= aC; aC--) aQF[aC] > aQF[aQe] && (aQe = aC);
							return aQe
						}(), aQF[aQe] < 5) return;
					a8Q = aQE[aQe] + bO.g0(aQF[aQe], 2), (aQG[aQe] ? function(fg) {
						var fZ, aQh, aC, aJH = 0,
							aQi = 0;
						for (; aQi < k - 1;) {
							for (aC = aJH + 1; aC < k; aC++)
								if (aQI[aC]) {
									aQi = aC;
									break
								} fZ = aQi - aJH + 1, aQR(g1[fg + j * aJH], 0 === aJH ? aQJ[fg] : aQD[aQh - 1] - aQD[aQh - 2], fZ), aQX(g1[aQi * j + fg], fZ), aQT(fg, aJH, !1, fZ), aQh = fZ, aJH = aQi
						}
						aQH[fg] = !0
					} : function(fi) {
						var fZ, aQh, aC, aJH = 0,
							aQi = 0;
						for (; aQi < j - 1;) {
							for (aC = aJH + 1; aC < j; aC++)
								if (aQH[aC]) {
									aQi = aC;
									break
								} fZ = aQi - aJH + 1, aQR(g1[fi * j + aJH], 0 === aJH ? aQK[fi] : aQD[aQh - 1] - aQD[aQh - 2], fZ), aQX(g1[fi * j + aQi], fZ), aQT(aJH, fi, !0, fZ), aQh = fZ, aJH = aQi
						}
						aQI[fi] = !0
					})(a8Q), aQc(a8Q, aQE[aQe] + aQF[aQe] - a8Q, aQG[aQe]), aQF[aQe] = a8Q - aQE[aQe] + 1
				}
			}(), fg = 0; fg < j; fg++)
			if (!aQH[fg])
				for (fi = 0; fi < k; fi++) aQI[fi] || ! function(fg, fi) {
					var value = g1[fi * j + fg - 1] + g1[(fi - 1) * j + fg],
						aAF = 2;
					aQH[fg + 1] && (aAF++, value += g1[fi * j + fg + 1]);
					aQI[fi + 1] && (aAF++, value += g1[(fi + 1) * j + fg]);
					g1[fi * j + fg] = bO.g0(value, aAF)
				}(fg, fi)
	}, this.aPH = function() {
		return g1
	}, this.aOw = function() {
		g1 = null
	}
}

function aKi(fs, ft) {
	return 0 <= fs ? bO.g0(fs, ft) : -bO.g0(-fs, ft)
}

function kQ(g1) {
	return g1 * g1
}

function a9P(fs, ft) {
	return ft < fs ? fs : ft
}

function aEf(fs, ft) {
	return fs < ft ? fs : ft
}

function aBr(fs, g1, ft) {
	return g1 < fs ? fs : ft < g1 ? ft : g1
}

function aQk(g1, fZ) {
	for (var ej = bO.g0(g1 + 1, 2), aC = 0; aC < fZ; aC++) ej = bO.g0(ej + bO.g0(g1, ej), 2);
	return ej
}

function aMh(g1, fZ) {
	return g1 < 1 ? 0 : aQk(g1, fZ)
}

function aQl(nv, nw, ue, aBa, o8, o9, uf, vL) {
	return !(nv + ue <= o8 || nw + aBa <= o9 || o8 + uf <= nv || o9 + vL <= nw)
}

function aQm(nv, nw, ue, aBa, o8, o9, uf, vL) {
	return nv <= o8 && nw <= o9 && o8 + uf <= nv + ue && o9 + vL <= nw + aBa
}

function zZ(g1) {
	return Math.floor(!!g1 * (1 + Math.log2(g1 + .5)))
}

function c1() {
	this.g0 = function(fs, ft) {
		return Math.floor((fs + .5) / ft)
	}, this.aQn = function(fs, ft) {
		return Math.floor(fs * (ft + .5))
	}, this.sqrt = function(g1) {
		return ~~Math.sqrt(g1 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.ij = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aQo = function(gI, gK, gM) {
		return Math.max(Math.min(gI, gK), gM)
	}, this.aQp = function(aQq, aQr, fg, fi) {
		fg -= aQq, aQq = fi - aQr, fi = 0;
		return 0 == fg ? fi = 0 <= aQq ? Math.PI : 0 : (fi = Math.atan(aQq / fg), fi += 0 < fg ? .5 * Math.PI : 1.5 * Math.PI), fi
	}, this.log2 = function(g1) {
		return Math.floor(!!g1 * (1 + Math.log2(g1 + .5)))
	}, this.log10 = function(g1) {
		return Math.floor(Math.log10(g1 + .5))
	}, this.aQt = function(aQu, aQv, aQw, aQx, aQy) {
		return aQw - aQy < aQu && aQu < aQw + aQy && aQx - aQy < aQv && aQv < aQx + aQy
	}, this.a0W = function(aCH, aCJ) {
		return aCH * aCH + aCJ * aCJ
	}
}

function dJ() {
	this.z = new aQz, this.uZ = 0;
	var aR0 = new Array(32);

	function aR3() {
		for (var fZ = aR0.length, aC = 0; aC < fZ; aC++) aR0[aC] = null
	}
	this.dk = function() {
		for (var aR1, aR2 = document.body.firstChild; aR2;) aR1 = aR2.nextSibling, !document.body.contains(aR2) || "DIV" !== aR2.tagName && "INPUT" !== aR2.tagName && "BUTTON" !== aR2.tagName || u.removeChild(document.body, aR2), aR2 = aR1
	}, this.v = function(eI, a4M, a6x) {
		void 0 === a4M && (a4M = this.uZ), bi.ds = !0, 0 === eI && (0 === ab.a4H() ? eI = 5 : a1.a2.setState(13)), this.tX(), this.uZ === eI && (a4M = aR0[eI].a4M, aR0[eI] = null), this.uZ = eI;
		var lp = aR0[eI];
		if (!lp || 4 === eI || 7 === eI || 8 === eI || 9 === eI || 10 === eI || 11 === eI || 13 === eI || 15 === eI || 18 === eI || 20 <= eI && eI <= 28 || 32 === eI || 33 === eI) {
			if (0 === eI) return void aR3();
			1 === eI ? lp = new aR4 : 2 === eI ? lp = new aR5 : 3 === eI ? lp = new aR6 : 4 === eI || 9 === eI || 10 === eI || 11 === eI || 13 === eI || 33 === eI ? lp = a6x : 5 === eI ? lp = new aR7 : 6 === eI ? lp = new aR8 : 7 === eI ? lp =
				new aR9(u.z.aRA) : 8 === eI ? lp = a6x : 12 === eI ? lp = new aRB : 14 === eI ? lp = new aRC : 15 === eI ? lp = new aR9(u.z.aRD) : 16 === eI ? lp = new aRE : 17 === eI ? lp = new aRF : 18 === eI ? lp = new aRG : 19 === eI ? lp =
				new aRH : 20 === eI ? lp = new aRI : 21 === eI ? lp = new aRJ : 22 === eI ? lp = new aRK : 23 === eI ? lp = new aRL : 24 === eI ? lp = new aRM : 25 === eI ? lp = new aRN : 26 === eI ? lp = new aRO : 27 === eI ? lp = new aRP :
				28 === eI ? lp = new aRQ : 29 === eI ? lp = new aRR : 30 === eI ? lp = new aRS : 31 === eI ? lp = new aRT : 32 === eI && (lp = new aRU), lp.a4M = a4M, aR0[eI] = lp
		}
		lp.show(a6x)
	}, this.a4G = function() {
		this.iL() && this.aRV(this.a4L().a4M)
	}, this.aRV = function(eI) {
		this.iL() && (aR0[eI] ? (this.tX(), bi.ds = !0, this.uZ = eI, aR0[eI].show()) : this.v(eI))
	}, this.tX = function() {
		this.iL() && aR0[this.uZ].tX()
	}, this.y = function() {
		this.iL() && (aR0[this.uZ].tX(), aR3(), this.uZ = 0, a1.a2.setState(13))
	}, this.xl = function() {
		var lp;
		this.iL() && (lp = aR0[this.uZ]).xl && lp.xl()
	}, this.resize = function() {
		if (!this.iL()) return !1;
		aR0[this.uZ].resize()
	}, this.hm = function(fg, fi) {
		var lp;
		this.iL() && (lp = aR0[this.uZ]).hm && lp.hm(fg, fi)
	}, this.a4e = function(fg, fi) {
		var lp;
		this.iL() && (lp = aR0[this.uZ]).a4e && lp.a4e(fg, fi)
	}, this.a52 = function() {
		var lp;
		this.iL() && (lp = aR0[this.uZ]).a52 && lp.a52()
	}, this.a4h = function(m9, mA, deltaY) {
		var lp;
		this.iL() && (lp = aR0[this.uZ]).a4h && lp.a4h(m9, mA, deltaY)
	}, this.a5C = function(code) {
		var lp;
		return !!this.iL() && ((lp = aR0[this.uZ]).a5C && lp.a5C(code), !0)
	}, this.ee = function() {
		var lp;
		this.iL() && (lp = aR0[this.uZ]) && lp.ee && lp.ee()
	}, this.iL = function() {
		return 0 < this.uZ
	}, this.a4L = function() {
		return aR0[this.uZ]
	}, this.a8B = function(eI) {
		return aR0[eI]
	}, this.aRW = function() {
		return aR0
	}, this.removeChild = function(oi, oj) {
		try {
			oi.removeChild(oj)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aR9(data) {
	var aRX, aRY;

	function aRb(sH, w3) {
		if (!data.aRZ) {
			if (data.aSG) {
				if (w3) return
			} else {
				if (!w3) return;
				if (data.yy < 1e4) return
			}
			var aSP, wE = new rz,
				aSN = w3 && 1e5 <= data.yy,
				aSO = wE.s2(w3 ? (aSN ? "⚠️ " : "") + L(270) : L(271)),
				aSR = (aSN && (aSO.style.color = "yellow"), w3 ? wE.s4(L(272, [bD.tK.a7F(data.yy, .01, 0)])) : ((aSP = new t9({
					value: data.aSQ,
					eI: -1
				})).e.readOnly = !0, aSP.e.type = "password", wE.sD(aSP), wE.sD(new tj([new x(L(204), function(e) {
					return e.textContent === L(204) ? (e.textContent = L(205), aSP.e.type = "text") : (e.textContent = L(204), aSP.e.type = "password"), !0
				}).button, new x(L(201), function(e) {
					return bD.sM.a6Q(aSP.e), bD.sM.xP(e), !0
				}).button]))), wE.s8(L(w3 ? 271 : 273)).style.marginTop = "0.75em", new t9({
					value: "",
					eI: -1
				}, 0, 0)),
				aST = (aSR.e.type = "email", aSR.e.autocomplete = "email", aSR.e.name = "email", aSR.e.inputMode = "email", aSR.e.spellcheck = !1, wE.sD(aSR), wE.sD(new tj([new x(L(274), function(e) {
					return b1.aIh.aSS({
						action: 3,
						s3: aSR.e.value.trim().substring(0, 63)
					}), bD.sM.xP(e), !0
				}).button])), w3 && wE.s4(L(275)), wE.s8(L(276)).style.marginTop = "0.75em", new t9({
					value: "",
					eI: -1
				}, 1));
			wE.sD(aST), wE.sD(new tj([new x(L(277), function() {
				b1.aIh.aIi({
					action: 4,
					uX: "",
					value: Math.floor(+aST.e.value)
				}), u.v(8, u.a4L().a4M, new ua(18))
			}).button])), sH.push(wE)
		}
	}
	this.show = function() {
		data.aRZ && bL.aSl("account", data.uX), aRX.show(), this.resize()
	}, this.tX = function() {
		aRX.tX()
	}, this.resize = function() {
		aRX.resize(), aRY.resize()
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	}, aRX = new xW(data.username, [new x("⬅️ " + L(43), function() {
		bL.clear(), u.a4G()
	}), new x(data.aRZ ? "🔄 " + L(170) : L(171), function() {
		u.v(8, data.aRZ ? u.a4L().a4M : void 0, new ua(25, {
			action: 0,
			uX: data.uX,
			uY: data.uY
		}))
	}, 0, 0, 1)]), aRY = new sF(aRX.xc, function() {
		var sH = [];
		aRb(sH, 1), sH.push(function() {
				var wE = new rz;
				wE.s2(L(243)), data.aSG && (wE.s8("✅ " + L(244)).style.marginBottom = "0.75em");
				var a3s = data.aSH;
				a3s < 1 ? (wE.s8(L(245)), 0 === data.aSI ? wE.s4(L(246)) : 1 === data.aSI ? wE.s4(L(247)) : 2 === data.aSI ? wE.s4(L(248)) : 3 === data.aSI ? wE.s4(L(249)) : 4 === data.aSI ? wE.s4(L(250)) : 5 === data.aSI ? wE.s4(L(
					251)) : 6 === data.aSI ? wE.s4(L(252)) : wE.s4(L(253))) : (wE.s8(L(254)), a3s = a3s < 2 ? L(255) : a3s < 61 ? 2 === a3s ? L(256) : L(257, [a3s - 1]) : a3s < 84 ? 61 === a3s ? L(258) : L(259, [a3s - 60]) : a3s <
					255 ? 84 === a3s ? L(260) : L(261, [a3s - 83]) : L(262), wE.s4(a3s));
				{
					var s5, aRz;
					wE.sD(new tv), data.aRZ && (s5 = wE.s4(), wE.sD(new tj([new x(bm.y9.wj(data.uX) ? L(263) : L(264), function(e) {
						return bm.y9.yM(data.uX) ? (e.textContent = L(263), aRz(1)) : (e.textContent = L(264), aRz(0)), !0
					}).button])), aRz = function(g1) {
						s5.textContent = g1 ? L(265) : ""
					}, bm.y9.wj(data.uX) && aRz(1), wE.sD(new tv))
				}
				var sQ, t8 = new t9({
					value: data.username,
					eI: -1
				});
				t8.e.readOnly = !0, wE.sD(t8), wE.sD(new tj([new x(L(201), function(e) {
					return bD.sM.a6Q(t8.e), bD.sM.xP(e), !0
				}).button])), data.aRZ || wE.s4(L(266));
				(data.aSJ || data.aSK || data.aSL) && (wE.sD(new tv), wE.s4(L(267)), data.aSJ && (wE.s4("• Account Timeout").style.color = "orange"), data.aSK && ((sQ = wE.s4("• Muted")).style.color = "orange", sQ.style.marginTop =
					"0.5em"), data.aSL) && ((sQ = wE.s4("• Redacted")).style.color = "orange", sQ.style.marginTop = "0.5em");
				data.aRZ && (wE.sD(new tv), wE.s8(b1.z.aRv("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", wE.sD(new tj([new x(L(268), function(e) {
					return b1.aIh.aIi({
						action: 3,
						uX: data.uX,
						value: 0
					}), bD.sM.xP(e), !0
				}, bE.q5).button])), wE.sD(new tj([new x(L(269), function(e) {
					return b1.aIh.aIi({
						action: 3,
						uX: data.uX,
						value: 1
					}), bD.sM.xP(e), !0
				}, bE.q5).button])), wE.sD(new tj([new x("Cheater", function(e) {
					return b1.aIh.aIi({
						action: 3,
						uX: data.uX,
						value: 2
					}), bD.sM.xP(e), !0
				}, bE.q5).button])), wE.sD(new tj([new x("False Reporter", function(e) {
					return b1.aIh.aIi({
						action: 3,
						uX: data.uX,
						value: 3
					}), bD.sM.xP(e), !0
				}, bE.q5).button])), a3s = "CRTOR" === (a3s = bm.buffer.data[105].value) || "ADMIN" === a3s) && (wE.sD(new tj([new x("Block Account", function(e) {
					return b1.aIh.aIi({
						action: 3,
						uX: data.uX,
						value: 4
					}), bD.sM.xP(e), !0
				}, bE.q3).button])), wE.sD(new tj([new x("Ban IP", function(e) {
					return b1.aIh.aIi({
						action: 3,
						uX: data.uX,
						value: 5
					}), bD.sM.xP(e), !0
				}, bE.q3).button])), wE.sD(new tj([new x("Gold Seizure", function(e) {
					return b1.aIh.aIi({
						action: 3,
						uX: data.uX,
						value: 6
					}), bD.sM.xP(e), !0
				}, bE.q3).button])), wE.sD(new tj([new x("Remove Punishments", function(e) {
					return b1.aIh.aIi({
						action: 3,
						uX: data.uX,
						value: 7
					}), bD.sM.xP(e), !0
				}, bE.pq).button])));
				return wE
			}()),
			function(sH) {
				var wE, t8, k, aS0, aS2, aS1;
				data.aRZ && data.aS5 && ((wE = new rz).s2(L(197)), wE.s4(L(194)), (t8 = new t9({
					value: data.aS5,
					eI: -1
				})).e.readOnly = !0, wE.sD(t8), k = !1, aS0 = new x(L(198), function(e) {
					return k && b1.z.ef(0) && (bD.sM.xP(e), aS1(), b1.aIh.aS6({
						action: 9,
						uX: data.uX
					})), !0
				}, 1), aS2 = new x(L(191), function(e) {
					return e.textContent === L(191) ? (k = !0, e.textContent = L(192), aS0.sg(0), aS0.button.style.color = bE.qP) : aS1(), !0
				}), wE.sD(new tj([aS2.button])), aS1 = function() {
					k = !1, aS2.button.textContent = L(191), aS0.sg(1), aS0.button.style.color = bE.pO
				}, wE.sD(new tj([aS0.button])), wE.s4(L(199)), sH.push(wE))
			}(sH),
			function(sH) {
				var wE, s5, aFQ, aSV, aS0, aS2, aS1;
				data.aRZ || ((wE = new rz).s2(L(278)), (s5 = wE.s4(data.aSU.length + " / 160")).style.textAlign = "center", aFQ = !0, (aSV = new xu(0, 1, function(e) {
					e = e.target.value.length;
					s5.textContent = e + " / 160", 160 < e ? aFQ && (aFQ = !1, aS2.sg(1)) : aFQ || (aFQ = !0, aS2.sg(0))
				})).e.rows = 6, aSV.e.style.fontSize = "1em", aSV.y0(data.aSU), wE.sD(aSV), 0 !== data.aSW ? (aS2 = new x(L(279), function() {
					if (!aFQ) return !0;
					u.v(8, u.a4L().a4M, new ua(29, {
						action: 1,
						s3: aSV.y1().substring(0, 160)
					}))
				}, 0, 0, 1), wE.sD(new tj([aS2.button])), wE.sD(new tj([new x(1 === data.aSW ? L(280) : L(281), function() {
					u.v(8, u.a4L().a4M, new ua(29, {
						action: 0,
						s3: ""
					}))
				}, 0, 0, 1).button])), wE.s4(1 === data.aSW ? L(282, [data.aSX - 1]) : L(283, [data.aSX - 1])), wE.s4(L(284, [data.aSY]))) : (aS0 = new x(L(198), function() {
					if (!aSV.e.readOnly) return !0;
					u.v(8, u.a4L().a4M, new ua(29, {
						action: 1,
						s3: aSV.y1().substring(0, 160)
					}))
				}, 1), aS2 = new x(L(191), function(e) {
					if (e.textContent === L(191)) {
						if (!aFQ) return !0;
						e.textContent = L(192), aSV.e.readOnly = !0, aS0.sg(0), aS0.button.style.color = bE.qP
					} else aS1();
					return !0
				}), wE.sD(new tj([aS2.button])), wE.s4(L(284, [data.aSY])), aS1 = function() {
					aS2.button.textContent = L(191), aSV.e.readOnly = !1, aS0.sg(1), aS0.button.style.color = bE.pO
				}, wE.sD(new tj([aS0.button]))), sH.push(wE))
			}(sH),
			function(sH) {
				var wE;
				data.aRZ && 0 !== data.aSW && ((wE = new rz).s2(L(285)), wE.s6(data.aSU), wE.sD(new tj([new x(L(286, 0, "Report"), function(e) {
					return b1.z.ef(0) && (bD.sM.xP(e), b1.aIh.aS6({
						action: 5,
						uX: data.uX
					})), !0
				}, 0, 0, 1).button])), sH.push(wE))
			}(sH), sH.push(function() {
				var wE = new rz,
					aRw = (wE.s2(L(172)), wE.s8(b1.z.aRv("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(173), L(174), L(175), L(176), L(177), L(178), L(179), L(180), L(181), L(182), L(183), L(184), L(185), L(186)]),
					eH = data.aRx;
				return wE.s8(L(187) + bD.tK.a7F(data.yy, .01, 2) + "<br>" + L(188) + (eH + 1) + " / " + data.yx + "<br>" + L(189) + aRw[function(eH, yy) {
					if (eH < 10) return 0;
					if (eH < 30) return 1;
					if (eH < 60) return 2;
					if (3e4 <= (yy = bO.g0(yy, 100))) return 3;
					if (12e3 <= yy) return 4;
					if (7e3 <= yy) return 5;
					if (3e3 <= yy) return 6;
					if (1e3 <= yy) return 7;
					if (500 <= yy) return 8;
					if (200 <= yy) return 9;
					if (70 <= yy) return 10;
					if (20 <= yy) return 11;
					if (3 <= yy) return 12;
					return 13
				}(eH, data.yy)]), wE
			}()), data.aRZ && sH.push(function() {
				var wE = new rz,
					t8 = (wE.s2(L(190)), wE.s8(b1.z.aRv("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new t9({
						value: bm.buffer.data[147].value,
						eI: -1
					}, 1, void 0, function(e) {
						bm.qq.qr(147, aRz(e.target.value))
					})),
					aS0 = (wE.sD(t8), new x(L(14), function(e) {
						return t8.e.readOnly && b1.z.ef(0) && (bD.sM.xP(e), aS1(), b1.aIh.aIi({
							action: 0,
							uX: data.uX,
							value: parseInt(bm.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					aS2 = new x(L(191), function(e) {
						return e.textContent === L(191) ? (e.textContent = L(192), t8.e.readOnly = !0, aS0.sg(0), aS0.button.style.color = bE.qP, bm.qq.qr(147, t8.e.value), aRz(bm.buffer.data[147].value)) : aS1(), !0
					}),
					s5 = (wE.sD(new tj([aS2.button])), wE.s4()),
					aRz = function(g1) {
						return s5.innerHTML = u.z.aS3(g1, bm.buffer.data[105].value, data.uX), g1
					},
					aS1 = function() {
						aS2.button.textContent = L(191), t8.e.readOnly = !1, aS0.sg(1), aS0.button.style.color = bE.pO
					};
				return aRz(bm.buffer.data[147].value), wE.sD(new tj([aS0.button])), wE
			}());
		sH.push(function() {
			var wE = new rz,
				t8 = (wE.s2(L(200)), new t9({
					value: data.uX,
					eI: -1
				})),
				aS4 = (t8.e.readOnly = !0, wE.sD(t8), wE.sD(new tj([new x(L(201), function(e) {
					return bD.sM.a6Q(t8.e), bD.sM.xP(e), !0
				}).button])), wE.sD(new tv), new t9({
					value: data.uX,
					eI: -1
				}));
			return wE.sD(aS4), wE.sD(new tj([new x(L(202), function(e) {
				u.v(8, u.a4L().a4M, new ua(25, {
					action: 0,
					uX: aS4.e.value,
					uY: 0
				}))
			}).button])), wE
		}()), data.aRZ || (sH.push(function() {
			var wE = new rz,
				aS7 = (wE.s2(L(203)), new t9(bm.buffer.data[106])),
				customPasswordInput = (aS7.e.readOnly = !0, aS7.e.type = "password", wE.sD(aS7), wE.sD(new tj([new x(L(204), function(e) {
					return e.textContent === L(204) ? (e.textContent = L(205), aS7.e.type = "text") : (e.textContent = L(204), aS7.e.type = "password"), !0
				}).button, new x(L(201), function(e) {
					return bD.sM.a6Q(aS7.e), bD.sM.xP(e), !0
				}).button])), new t9({
					value: "",
					eI: -1
				}));
			return customPasswordInput.e.placeholder = "Custom new password (optional)", wE.sD(customPasswordInput), wE.sD(new tj([new x(L(206), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.e.value) && u.v(8, u.a4L().a4M, new ua(15))
			}).button])), wE.s2(L(207), "0.8em"), wE.s4(L(208)), wE.s4(L(209)), wE.s4(L(210)), wE
		}()), sH.push(function() {
			var wE = new rz;
			return wE.s2(L(211)), wE.sD(new tj([new x(L(212), function() {
				u.v(6, u.a4L().a4M)
			}).button])), wE.sD(new tj([new x(L(213), function() {
				bm.qq.qr(105, ""), u.v(8, u.a4L().a4M, new ua(18))
			}).button])), wE.sD(new tj([new x(L(214) + bm.buffer.data[105].value, function() {
				u.v(4, 0, new w(L(215), L(216), !0, [new x("⬅️ " + L(43), function() {
					u.v(7, u.a8B(7).a4M)
				})]))
			}, bE.q5).button])), wE
		}()), sH.push(function() {
			function aS9(eI) {
				aS8[0].sg(0 === eI ? bE.pa : bE.pl), aS8[1].sg(0 === eI ? bE.pa : bE.q5)
			}
			var sB, aS8, wE = new rz;
			wE.s2(L(220)), wE.s4(L(221)), bm.z.yh();
			return aS8 = [new x(L(222), function() {
				var eI = Math.min(bm.buffer.data[117].value, sB.sC.length - 1);
				eI < 1 || (eI = bm.z.yl(eI)) && (bm.qq.qr(105, eI.uX), bm.qq.qr(106, eI.password), u.v(8, u.a4L().a4M, new ua(18)))
			}, bE.pa, 1), new x(L(219), function() {
				var eI = Math.min(bm.buffer.data[117].value, sB.sC.length - 1);
				if (!(eI < 1)) {
					sB.sC[eI].remove(), sB.sC.splice(eI, 1);
					for (var aC = eI; aC < sB.sC.length; aC++) sB.sC[aC].name = "" + aC;
					bm.z.yk(eI), eI = bm.buffer.data[117].value, sB.sC[eI].textContent = sB.sC[eI].textContent.replace("⚪", "🟢"), aS9(eI)
				}
			}, bE.pa, 1)], sB = new xS(bm.buffer.data[117], aS9), __fx.savedAccounts.decorate(sB.sC, bm.buffer.data[117].oM), aS9(0), sB.sC[0].style.marginTop = "0.5em", wE.sA(sB), wE.sD(new tj([aS8[0].button])), wE.sD(new tj(
				[new x("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(bm.buffer.data[117].value)
				}).button])), wE.sD(new tj([aS8[1].button])), wE
		}()));
		return sH.push(function() {
				var wE = new rz,
					aRw = (wE.s2(L(226)), [L(227), L(228), L(229), L(230)]),
					eH = data.aSA;
				return wE.s8(L(231) + (data.a3b / 100).toFixed(2) + "<br>" + L(188) + (eH + 1) + " / " + data.yx + "<br>" + L(189) + aRw[eH < 10 ? 0 : eH < 50 ? 1 : eH < 200 ? 2 : 3]), wE
			}()), sH.push(function() {
				var wE = new rz;
				return wE.s2(L(223)), wE.s8(L(224) + bD.tK.a7F(data.yu, .1, 1) + "<br>" + L(188) + (data.yv + 1) + " / " + data.yx + "<br>" + L(225) + data.yw), wE
			}()),
			function(sH) {
				var wE = new rz,
					aSZ = data.z1,
					aSa = (wE.s2(L(287)), wE.s8(L(288, [data.yz.length ? "[" + data.yz + "]" : "-"])), wE.s8(L(289, [bD.tK.a7F(aSZ, .01, 2)])), wE.s8(L(290, [data.z3 + 1 + " / " + data.yx])), data.z4),
					aSb = (wE.s8(L(291, [bD.tK.a7F(aSa, .1, 1)])), data.z6);
				wE.s8(L(292, [aSb])), wE.s8(L(293, [bD.tK.a7F(aSa / Math.max(aSb, 1), .1, 2)])), aSZ = data.z2, wE.s2(L(294), "0.8em"), wE.s8(L(288, [data.z0.length ? "[" + data.z0 + "]" : "-"])), wE.s8(L(289, [bD.tK.a7F(aSZ, .01, 2)])),
					aSa = data.z5, wE.s8(L(291, [bD.tK.a7F(aSa, .1, 1)])), aSb = data.z7, wE.s8(L(292, [aSb])), wE.s8(L(293, [bD.tK.a7F(aSa / Math.max(aSb, 1), .1, 2)])), wE.s8(b1.z.aRv("/wiki/clans"), "0.75em").style.marginTop = "0.8em", sH
					.push(wE)
			}(sH),
			function(sH) {
				var wE = new rz;
				wE.s2(L(295)), wE.s8(L(231) + (data.aSc / 10).toFixed(1) + "<br>" + L(189) + (data.aSd.length ? L(296, [data.aSd]) : L(297))), data.aRZ && wE.sD(new tj([new x(L(241), function(e) {
					return b1.z.ef(0) && (bD.sM.xP(e), b1.aIh.aS6({
						action: 4,
						uX: data.uX
					})), !0
				}, 0, 0, 1).button]));
				wE.s8(b1.z.aRv("/wiki/clans"), "0.75em").style.marginTop = "0.8em", sH.push(wE)
			}(sH), sH.push(function() {
				var wE = new rz;
				{
					var t8, aS2, aSF, s5, aRz, aS1;
					wE.s2(L(239)), wE.s8(L(240) + data.aSD + "<br>" + L(188) + (data.aSE + 1) + " / " + data.yx + "<br>" + L(189) + br.eK(data.aSE)), data.aRZ && ((t8 = new t9({
						value: bm.buffer.data[157].value,
						eI: -1
					}, 1, void 0, function(e) {
						bm.qq.qr(157, aRz(e.target.value))
					})).e.style.marginTop = "0.6em", wE.sD(t8), aS2 = new x(L(191), function(e) {
						return e.textContent === L(191) ? (e.textContent = L(192), t8.e.readOnly = !0, aSF[0].sg(0), aSF[0].button.style.color = bE.qP, aRz(bm.buffer.data[157].value)) : aS1(), !0
					}), wE.sD(new tj([aS2.button])), aSF = [new x(L(241), function(e) {
						return t8.e.readOnly && b1.z.ef(0) && (bD.sM.xP(e), aS1(), b1.aIh.aIi({
							action: 1,
							uX: data.uX,
							value: bO.ij(parseInt(bm.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], s5 = wE.s4(), aRz = function(g1) {
						return g1 = bD.gv.a6u(g1, 2, 3e4), s5.textContent = L(242, [g1 - 1, g1, bm.buffer.data[105].value]), g1
					}, wE.sD(new tj([aSF[0].button])), aS1 = function() {
						aS2.button.textContent = L(191), t8.e.readOnly = !1, aSF[0].sg(1), aSF[0].button.style.color = bE.pO
					}, aRz(bm.buffer.data[157].value))
				}
				return wE
			}()),
			function(sH) {
				var wE, a6P;
				data.aRZ && !data.aSe || (0 === a1.id || data.aRZ || data.aSe) && ((wE = new rz).s2("Patreon"), !data.aRZ && data.aSf ? wE.sD(new tj([new x(L(204), function() {
					b1.aIh.aS6({
						action: 7,
						uX: data.uX
					}), data.aSf = 0, u.v(7)
				}).button])) : data.aSe ? (wE.s8(L(298, [(data.aSg / 100).toFixed(2)]) + "<br>" + L(299, [1 + data.aSh + " / " + data.aSi]) + "<br>" + L(300, [data.aSj ? L(301) : L(302)])), data.aRZ || wE.sD(new tj([new x(L(303),
					function() {
						b1.aIh.aS6({
							action: 8,
							uX: data.uX
						}), data.aSe = 0, bm.qq.qr(160, 0), u.v(7)
					}).button]))) : (wE.s8(L(304), "0.75em").style.marginBottom = "0.3em", wE.s8("  • " + L(305), "0.75em").style.whiteSpace = "pre", wE.s8("  • " + L(306), "0.75em").style.whiteSpace = "pre", wE.s8("  • " + L(307),
						"0.75em").style.whiteSpace = "pre", wE.s8(L(308), "0.75em").style.marginTop = "1.0em", wE.s8(L(309), "0.75em").style.marginTop = "1.0em", wE.s8("<a href='" + bN.aSk +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a6P = "https://www.patreon.com/oauth2/authorize?state=" + data.uX +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a3Y() + "/", wE.s8(L(310), "0.75em").style.marginTop = "1.0em", wE.s8("<a href='" +
						a6P + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aRZ || (wE.sD(new tv), wE.sD(new tj([new x(L(205), function() {
						b1.aIh.aS6({
							action: 6,
							uX: data.uX
						}), data.aSf = 1, u.v(7)
					}).button])), wE.s8(L(311), "0.75em").style.marginTop = "0.75em")), sH.push(wE))
			}(sH), sH.push(function() {
				var wE = new rz,
					aRw = (wE.s2(L(232)), [L(233), L(234), L(235), L(236), "Scout", L(237)]),
					eH = data.aSB;
				return wE.s8(L(238) + (data.aSC / 100).toFixed(2) + "<br>" + L(188) + (eH + 1) + " / " + data.yx + "<br>" + L(189) + aRw[eH < 3 ? 0 : eH < 20 ? 1 : eH < 100 ? 2 : eH < 500 ? 3 : eH < 2e3 ? 4 : 5]), wE.s8(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", wE
			}()),
			function(sH) {
				var wE, t8, aS4, aS0, aS2, aS1;
				data.aRZ || ((wE = new rz).s2(L(193)), wE.s4(L(194)), t8 = new t9({
					value: bm.buffer.data[184].value,
					eI: -1
				}, 1, void 0, function(e) {
					bm.qq.qr(184, e.target.value)
				}), wE.sD(t8), wE.s4(L(195)), aS4 = new t9({
					value: bm.buffer.data[185].value,
					eI: -1
				}, 0, void 0, function(e) {
					bm.qq.qr(185, e.target.value)
				}), wE.sD(aS4), aS0 = new x(L(196), function(e) {
					return t8.e.readOnly && b1.z.ef(0) && (bD.sM.xP(e), aS1(), b1.aIh.aIi({
						action: 5,
						uX: bm.buffer.data[185].value,
						value: bO.ij(parseInt(bm.buffer.data[184].value, 10), 1, 1e9)
					})), !0
				}, 1), aS2 = new x(L(191), function(e) {
					return e.textContent === L(191) ? (e.textContent = L(192), t8.e.readOnly = !0, aS4.e.readOnly = !0, aS0.sg(0), aS0.button.style.color = bE.qP, bm.qq.qr(184, t8.e.value)) : aS1(), !0
				}), wE.sD(new tj([aS2.button])), aS1 = function() {
					aS2.button.textContent = L(191), t8.e.readOnly = !1, aS4.e.readOnly = !1, aS0.sg(1), aS0.button.style.color = bE.pO
				}, wE.sD(new tj([aS0.button])), sH.push(wE))
			}(sH),
			function(sH) {
				var wE, sB, aS8, eI, aS9;
				data.aRZ || bm.y9.get().length && ((wE = new rz).s2(L(217)), eI = 0, aS9 = function() {
					var aF5 = bm.y9.get().length;
					aS8[0].sg(eI === aF5 ? bE.pa : bE.pl), aS8[1].sg(eI === aF5 ? bE.pa : bE.q5)
				}, aS8 = [new x(L(218), function() {
					u.v(8, void 0, new ua(25, {
						action: 0,
						uX: bm.y9.get()[eI],
						uY: 0
					}))
				}, bE.pa, 1), new x(L(219), function() {
					bm.y9.yO(eI), sB.sC[eI].remove(), sB.sC.splice(eI, 1);
					for (var aC = eI; aC < sB.sC.length; aC++) sB.sC[aC].name = "" + aC;
					bm.y9.get().length && (eI = Math.max(eI - 1, 0), sB.sC[eI].textContent = sB.sC[eI].textContent.replace("⚪", "🟢")), aS9()
				}, bE.pa, 1)], aS9(), sB = new xS(bm.y9.yL(), function(aC) {
					eI = aC, aS9()
				}), __fx.followedAccounts.decorate(sB.sC, bm.y9.get()), sB.sC[0].style.marginTop = "0.5em", wE.sA(sB), wE.sD(new tj([aS8[0].button])), wE.sD(new tj([new x("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(eI)
				}).button])), wE.sD(new tj([aS8[1].button])), sH.push(wE))
			}(sH), aRb(sH, 0), sH
	}())
}

function aRK() {
	var aSm, aSn, aSo, sH;

	function aSp() {
		aSr(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aRW()[19] = null, u.a4G()
	}

	function aSr() {
		2 === aE.data.aIncomeType ? (bD.sU.a5n(aSo.y1(), aE.data.aIncomeData, 255), bD.sU.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aSm.show(), this.resize()
	}, this.tX = function() {
		aSm.tX()
	}, this.resize = function() {
		aSm.resize(), aSn.resize()
	}, this.a5C = function(ej) {
		2 === ej && aSm.xd[0].sd()
	}, aSm = new xW(L(312), [new x("⬅️ " + L(43), aSp)]), aSn = new sF(aSm.xc, (function(sH) {
		var wE = new rz;
		wE.s2(L(313)), wE.sA(new xS({
			oM: [L(314), L(315), L(316)],
			value: aE.data.aIncomeType
		}, function(eI) {
			aSr(), 2 !== eI || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fW)), aE.data.aIncomeType = eI, u.v(22)
		})), sH.push(wE)
	}(sH = []), function(sH) {
		var wE;
		1 === aE.data.aIncomeType && ((wE = new rz).s2("Value"), wE.sD(new t9({
			eI: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ij(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), sH.push(wE))
	}(sH), function(sH) {
		var wE;
		2 === aE.data.aIncomeType && ((wE = new rz).s2("Data"), (aSo = new xu(0, 1, 0, 1)).y0(bD.tK.a7L(aE.data.aIncomeData, 4)), wE.sD(aSo), sH.push(wE))
	}(sH), sH))
}

function aRN() {
	var aSm, aSn, aSo;

	function aSp() {
		aSr(), 3 !== aE.data.botDifficultyType || bD.sU.a5b(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aRW()[19] = null, u.a4G()
	}

	function aSr() {
		3 === aE.data.botDifficultyType && bD.sU.a5n(aSo.y1(), aE.data.botDifficultyData, aF.l5.length - 1)
	}

	function aSw(sH, eI) {
		var wE = new rz,
			value = (wE.s2(eI < 0 ? L(68) : L(67) + " " + bj.a3U[eI % 9]), 0 <= eI && (wE.s8(L(319) + ": " + aE.data.teamPlayerCount[eI]).style.marginBottom = "1em"), eI < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eI]);
		wE.sA(new xS({
			oM: aF.l5,
			value: value
		}, function(iR) {
			eI < 0 ? aE.data.botDifficultyValue = iR : aE.data.botDifficultyTeam[eI] = iR
		})), sH.push(wE)
	}
	this.show = function() {
		aSm.show(), this.resize()
	}, this.tX = function() {
		aSm.tX()
	}, this.resize = function() {
		aSm.resize(), aSn.resize()
	}, this.a5C = function(ej) {
		2 === ej && aSm.xd[0].sd()
	}, aSm = new xW(L(68), [new x("⬅️ " + L(43), aSp)]), aSn = new sF(aSm.xc, function() {
		var sH = [];
		if (function(sH) {
				var wE = new rz,
					oM = (wE.s2(L(313)), [L(315), L(317), L(318), L(316)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), oM.splice(2, 1));
				wE.sA(new xS({
					oM: oM,
					value: value
				}, function(eI) {
					aSr(), aE.data.botDifficultyType = eI, 0 === aE.data.gameMode && 2 === eI && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fW)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), sH.push(wE)
			}(sH), 0 === aE.data.botDifficultyType) aSw(sH, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aSw(sH, aC);
		else 3 === aE.data.botDifficultyType && ! function(sH) {
			var wE = new rz;
			wE.s2("Data"), (aSo = new xu(0, 1, 0, 1)).y0(bD.tK.a7L(aE.data.botDifficultyData, 8)), wE.sD(aSo), sH.push(wE)
		}(sH);
		return sH
	}())
}

function aSx(data) {
	var aRX, aSy, aSz, aT0, aT1, aT2, aT3, colors, aT4, aT5, aT6 = 0,
		aT7 = 0,
		aT8 = !1,
		aT9 = !1,
		aTA = [1, 5, 60, 240, 1440, 10080, 43200];

	function aTe(m9, mA) {
		! function(m9, mA) {
			return aSy < m9 && m9 < aSy + aT0 && aSz < mA && mA < aSz + aT1
		}(aT6 = m9, aT7 = mA) ? (aT8 && (bi.ds = !0), aT8 = !1) : (aT8 = !0, bi.ds = !0)
	}
	this.show = function() {
		aT9 = bm.buffer.data[127].value, aRX.show(), this.resize()
	}, this.tX = function() {
		aRX.tX()
	}, this.resize = function() {
		aRX.resize();
		var ej = i.l,
			xk = aRX.xh(),
			aTJ = ej * xk.xj,
			ej = ej * xk.ta;
		aT2 = bD.sM.uw(.06), aT3 = bD.sM.uw(.04), aSy = bD.sM.uw(.06), aSz = ej + aT2, aT0 = i.j - aSy - aT3, aT1 = aTJ + ej - aSz - aT3
	}, this.xl = function() {
		aRX.xl(),
			function() {
				var aC, aTG, h2, fg, fs, h = data.data,
					aTN = 1,
					aTO = .125,
					aTP = aT9 ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aTG = h[aC].aTG, h2 = aTG.length, aTN = Math.max(h2, aTN), fs = 0; fs < h2; fs++) aTO = Math.max(aTG[fs], aTO), aTP = Math.min(aTG[fs], aTP);
				var nw = aSz + aT1,
					a15 = aT1 / (aTO - aTP),
					a14 = 1 / (aTN - 1);
				for (xm.lineWidth = bf.a27, aC = 0; aC < h.length; aC++) {
					for (aTG = h[aC].aTG, h2 = aTG.length, fg = aSy, xm.beginPath(), xm.moveTo(fg + aT0, nw - a15 * (aTG[h2 - 1] - aTP)), fs = h2 - 2; 0 <= fs; fs--) xm.lineTo(fg + a14 * fs * aT0, nw - a15 * (aTG[fs] - aTP));
					xm.strokeStyle = colors[aC], xm.stroke()
				}(function(aTP, aTO, nw, a15) {
					xm.font = bD.sM.u7(0, .25 * aSy), bD.sM.textBaseline(xm, 1), bD.sM.textAlign(xm, 2), xm.fillStyle = colors[0];
					for (var fg = .92 * aSy, aC = 0; aC < 3; aC++) {
						var g1 = aTP + aC * (aTO - aTP) / 2;
						xm.fillText((g1 / 1e3).toFixed(3), fg, nw - a15 * (g1 - aTP))
					}
				})(aTP, aTO, nw, a15),
				function(aTN) {
					var fi = aSz + aT1 + .15 * aT3;
					xm.font = bD.sM.u7(0, Math.min(.4 * aT3, .028 * i.j)), bD.sM.textBaseline(xm, 0), bD.sM.textAlign(xm, 2), xm.fillStyle = colors[0], xm.fillText(bD.a5S.a6H(aT4), aSy + aT0, fi), bD.sM.textAlign(xm, 0), xm.fillText(bD.a5S.a6H(
						new Date(aT5.getTime() - 6e4 * (aTN - 1) * aTA[data.aTF])), aSy, fi)
				}(aTN),
				function(aTN, aTP, aTO) {
					if (aT8 && !(aTN < 2)) {
						for (var aBi, eI = (aT6 - aSy) / aT0 * (aTN - 1), aTS = Math.floor(eI), aTT = Math.floor(1 + eI), aTU = eI - aTS, aTV = 1e5, aTW = -1, aTX = -1, aTY = aTO - (aTO - aTP) * (aT7 - aSz) / aT1, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aFb, aTG = h[aC].aTG;
							aTG.length <= aTT || (aTG = aTG[aTS] + aTU * (aTG[aTT] - aTG[aTS]), (aFb = Math.abs(aTY - aTG)) < aTV && (aTV = aFb, aTW = aC, aTX = aTG))
						} - 1 !== aTW && (aTO = aSz + aT1 - (aTX - aTP) / (aTO - aTP) * aT1, xm.lineWidth = .5 * bf.a27, xm.strokeStyle = colors[aTW], xm.beginPath(), xm.moveTo(aSy, aTO), xm.lineTo(aT6, aTO), xm.lineTo(aT6, aSz + aT1), xm
							.stroke(), xm.beginPath(), xm.arc(aT6, aTO, .1 * aSy, 0, 2 * Math.PI), xm.fillStyle = colors[aTW], xm.fill(), aTP = aSz + aT1 + .15 * aT3, bD.sM.textAlign(xm, 1), aBi = aTN - 2 < eI ? (aBi = aT5.getTime() - 6e4 *
								aTA[data.aTF], new Date(aBi + (eI - (aTN - 2)) * (aT4.getTime() - aBi))) : new Date(aT5.getTime() - 6e4 * (aTN - eI - 1) * aTA[data.aTF]), aTN = bD.a5S.a6H(aBi), eI = bD.sM.measureText(aTN), aBi = bO.ij(aT6,
								aSy + .5 * eI, aSy + aT0 - .5 * eI), xm.fillStyle = bD.color.pG(70, 50, 20), xm.fillRect(aBi - .52 * eI, aSz + aT1, 1.04 * eI, .55 * aT3), xm.fillStyle = colors[0], xm.fillText(aTN, aBi, aTP), xm.font = bD.sM
							.u7(0, .25 * aSy), bD.sM.textBaseline(xm, 1), bD.sM.textAlign(xm, 2), aBi = .92 * aSy, aTN = (aTX / 1e3).toFixed(3), eI = bD.sM.measureText(aTN), aTP = aBi - 1.04 * eI, xm.fillStyle = bD.color.pG(70, 50, 20), xm
							.fillRect(aTP, aTO - .1625 * aSy, aSy - aTP, .275 * aSy), xm.fillStyle = colors[aTW], xm.fillText(aTN, aBi, aTO))
					}
				}(aTN, aTP, aTO)
			}(), xm.lineWidth = bf.a27, xm.strokeStyle = bE.pO, xm.beginPath(), xm.moveTo(aSy, aSz), xm.lineTo(aSy, aSz + aT1), xm.lineTo(aSy + aT0, aSz + aT1), xm.stroke();
		var aC, fontSize = .5 * aT2,
			h = (xm.font = bD.sM.u7(0, fontSize), bD.sM.textBaseline(xm, 1), bD.sM.textAlign(xm, 0), data.data),
			fZ = h.length,
			fi = aSz - .5 * aT2,
			s3 = "";
		for (aC = 0; aC < fZ; aC++) s3 += h[aC].name + "  ";
		s3 = s3.trim();
		var aTb = bD.sM.measureText(s3),
			fg = .5 * (i.j - aTb);
		for (aTb > i.j && (fg = 0, xm.font = bD.sM.u7(0, i.j / aTb * fontSize)), aC = 0; aC < fZ; aC++) xm.fillStyle = colors[aC], xm.fillText(h[aC].name, fg, fi), fg += bD.sM.measureText(h[aC].name + "  ")
	}, this.hm = function(m9, mA) {
		aTe(m9, mA)
	}, this.a4e = function(m9, mA) {
		aTe(m9, mA)
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	};
	var aC, ea, a6F, iR, fc = data.data,
		fZ = fc.length,
		max = 1;
	for (aC = 0; aC < fZ; aC++) max = Math.max(max, fc[aC].aTG.length);
	for (aC = 0; aC < fZ; aC++)
		for (; fc[aC].aTG.length < max;) fc[aC].aTG.unshift(0);
	ea = new Date, a6F = 6e4 * ea.getTimezoneOffset(), iR = ea.getTime() - a6F, aT4 = new Date(iR), 6 === data.aTF ? function(ea, a6F) {
		var aTI = ea.getUTCFullYear(),
			ea = ea.getUTCMonth() + 1;
		aT5 = ea < 12 ? new Date(Date.UTC(aTI, ea) - a6F) : new Date(Date.UTC(aTI + 1, 0) - a6F)
	}(ea, a6F) : (a6F = 6e4 * aTA[data.aTF], aT5 = data.aTF <= 4 ? new Date(iR + a6F - ea.getTime() % a6F) : new Date(iR + a6F - (ea.getTime() + 2592e5) % a6F)), iR = bD.color, colors = [bE.pO, iR.pG(255, 0, 0), iR.pG(0, 200, 0), iR.pG(80, 80,
		255), iR.pG(255, 255, 0), iR.pG(255, 0, 255), iR.pG(0, 255, 255), iR.pG(255, 140, 0), iR.pG(128, 128, 128), iR.pG(0, 255, 140)], aRX = new xW(L(320) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aTF] + ", " + bD.a5S.a6E(aT4), [
		new x("⬅️ " + L(43), function() {
			u.v(1)
		}), new x(L(321), function() {
			u.v(14)
		})
	], !1)
}

function aRC() {
	var aRX, aRY, sH, aTf = -1;
	this.show = function() {
		aRX.show(), this.resize(), aTf = bm.buffer.data[125].value
	}, this.tX = function() {
		aRX.tX()
	}, this.resize = function() {
		aRX.resize(), aRY.resize()
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	}, aRX = new xW(L(322), [new x("⬅️ " + L(43), function() {
		aTf !== bm.buffer.data[125].value ? u.z.aTg() : u.aRV(13)
	})]), aRY = new sF(aRX.xc, ((sH = []).push(function() {
		var wE = new rz,
			aS2 = (wE.s2(L(323)), wE.s4(L(324)), new x(L(325), function() {
				bm.qq.qr(130, 0), u.z.aTg()
			}, 0, 0, 1)),
			t8 = new t9(bm.buffer.data[126], 0, function() {
				aS2.button.click()
			});
		return wE.sD(t8), t8.e.placeholder = "a,b,c", t8.e.style.marginTop = "0.5em", wE.sD(new tj([aS2.button])), wE
	}()), sH.push(function() {
		var wE = new rz,
			aS2 = new x(L(325), function() {
				bm.qq.qr(130, 1), u.z.aTg()
			}, 0, 0, 1),
			aTl = new t9(bm.buffer.data[129], 1, function() {
				aTl.e.focus()
			}),
			aTm = new t9(bm.buffer.data[128], 1, function() {
				aS2.button.click()
			});
		return wE.s2(L(326)), wE.sD(aTm), aTm.e.style.marginBottom = "0.5em", wE.s2(L(327)), wE.sD(aTl), wE.sD(new tj([aS2.button])), wE
	}()), sH.push(function() {
		var wE = new rz;
		return wE.s2(L(328)), bm.buffer.data[125].oM = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], wE.sA(new xS(bm.buffer.data[125])), wE
	}()), sH.push(function() {
		var wE = new rz;
		return wE.s2(L(329)), wE.sD(new tf(bm.buffer.data[127], L(330))), wE
	}()), sH))
}

function aRB() {
	var aRX, aTn, aT0, aTo, aTp, aTq, colors = [0, 0, 0],
		aTr = -1;

	function aTu(aC) {
		var aTv = aTn.fi + aC * (bf.gap + aTq);
		xm.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", xm.fillRect(aTo, aTv, colors[aC] * aTp, aTq), xm.strokeStyle = bE.pO, xm.strokeRect(aTo, aTv, aTp,
			aTq), xm.fillStyle = bE.pO, xm.font = bD.sM.u7(0, .32 * aTq), bD.sM.textBaseline(xm, 1), bD.sM.textAlign(xm, 0), xm.fillText(L(0 === aC ? 333 : 1 === aC ? 334 : 335) + aTs(aC), aTo + bf.gap, aTv + .53 * aTq)
	}

	function aTs(aC, aTw) {
		return aTw = aTw || 256, bO.ij(Math.floor(aTw * colors[aC]), 0, aTw - 1)
	}

	function a58(m9, mA) {
		return !(m9 < aTo || mA < aTn.fi || m9 > aTn.fg + aTn.j || mA > aTn.fi + aTn.k)
	}
	this.show = function() {
		var g1 = bm.buffer.data[121].value;
		colors[0] = (g1 >> 12) / 63, colors[1] = (g1 >> 6 & 63) / 63, colors[2] = (63 & g1) / 63, aRX.show(), this.resize()
	}, this.tX = function() {
		bm.qq.qr(121, (aTs(0, 64) << 12) + (aTs(1, 64) << 6) + aTs(2, 64)), aRX.tX()
	}, this.resize = function() {
		aRX.resize(), aTn.resize();
		var ej = i.l,
			xk = aRX.xh(),
			aTt = (aTn.fi = Math.max(aTn.fi, ej * xk.ta + bf.gap), ej * xk.xj - 2 * bf.gap);
		aTn.k = Math.min(aTn.k, aTt), aTn.j = 2 * aTn.k, aTn.fi = ej * xk.ta + .5 * (ej * xk.xj - aTn.k), aTn.fg = .5 * (i.j - aTn.j), aT0 = .25 * aTn.j, aTo = aTn.fg + aT0 + bf.gap, aTp = aTn.j - aT0 - bf.gap, aTq = (aTn.k - 2 * bf.gap) / 3
	}, this.xl = function() {
		var eH, uv, ft;
		aRX.xl(), xm.lineWidth = bf.a27, eH = aTs(0), uv = aTs(1), ft = aTs(2), xm.fillStyle = "rgb(" + eH + "," + uv + "," + ft + ")", xm.fillRect(aTn.fg, aTn.fi, aT0, aTn.k), xm.strokeStyle = bE.pO, xm.strokeRect(aTn.fg, aTn.fi, aT0, aTn.k), xm
			.fillStyle = eH + uv + ft < 306 && uv < 150 ? bE.pO : bE.pF, bD.sM.textBaseline(xm, 1), bD.sM.textAlign(xm, 1), xm.font = bD.sM.u7(0, .1 * aTn.k), xm.rotate(-Math.PI / 2), xm.fillText(L(332), -aTn.fi - .5 * aTn.k, aTn.fg + .5 * aT0),
			xm.setTransform(1, 0, 0, 1, 0, 0), aTu(0), aTu(1), aTu(2)
	}, this.hm = function(m9, mA) {
		a58(m9, mA) && (aTr = bO.ij(Math.floor((mA - aTn.fi) / (aTq + .75 * bf.gap)), 0, 2), colors[aTr] = bO.ij((m9 - aTo) / aTp, 0, 1), bi.ds = !0)
	}, this.a4e = function(m9) {
		-1 !== aTr && (colors[aTr] = bO.ij((m9 - aTo) / aTp, 0, 1), bi.ds = !0)
	}, this.a4h = function(m9, mA, deltaY) {
		a58(m9, mA) && (m9 = bO.ij(Math.floor((mA - aTn.fi) / (aTq + .75 * bf.gap)), 0, 2), colors[m9] = bO.ij(colors[m9] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.ds = !0)
	}, this.a52 = function() {
		0 <= aTr && (aTr = -1, bi.ds = !0)
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	}, aRX = new xW(L(331), [new x("⬅️ " + L(43), function() {
		u.z.aFW()
	})], !1), aTn = new sw([.5, .25], [.5, .5], 1)
}

function aRJ() {
	var aSm, aSn, aSo, oy;

	function aSp() {
		aSr(), u.aRW()[19] = null, u.a4G()
	}

	function aTx() {
		aSr(), u.v(21)
	}

	function aSr() {
		1 === aE.data.gameMode ? aE.a7c.a7h() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.sU.a5n(aSo.y1(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aSm.show(), this.resize()
	}, this.tX = function() {
		aSm.tX()
	}, this.resize = function() {
		aSm.resize(), aSn.resize()
	}, this.a5C = function(ej) {
		2 === ej && aSm.xd[0].sd()
	}, oy = [new x("⬅️ " + L(43), aSp)], 1 === aE.data.gameMode && oy.push(new x(L(336), aTx, 1, 1)), aSm = new xW(L(337), oy), aSn = new sF(aSm.xc, (oy = [], 0 === aE.data.gameMode ? (function(sH) {
		var wE = new rz;
		wE.s2(L(313)), wE.sA(new xS({
			oM: [L(338), L(316)],
			value: aE.data.colorsType
		}, function(eI) {
			aSr(), aE.data.colorsType = eI, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fW || (aE.data.colorsData = new Uint32Array(aE.fW)), u.v(21)
		})), sH.push(wE)
	}(oy), 1 === aE.data.colorsType && function(sH) {
		var wE = new rz;
		wE.s2("Data"), (aSo = new xu(0, 1, 0, 1)).y0(bD.tK.a7L(aE.data.colorsData, 1)), wE.sD(aSo), sH.push(wE)
	}(oy)) : (aE.a7c.a7h(), oy.push(function() {
		var wE = new rz;
		wE.s2(L(319));
		for (var aC = 0; aC < bj.a3U.length; aC++) {
			var iR = (aC + 1) % bj.a3U.length,
				e = wE.s8((0 == iR ? "" : "Team ") + bj.a3U[iR]);
			aC && (e.style.marginTop = "0.5em"), wE.sD(new t9({
				eI: -1,
				value: aE.data.teamPlayerCount[iR]
			}, 1, 0, function(e) {
				aSm.xd[1].sg(0);
				var playerCount = bO.ij(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aU0] = playerCount
			})).e.aU0 = iR
		}
		return wE
	}()), function(sH) {
		for (var wE = new rz, oM = (wE.s2(L(339)), []), aC = 0; aC < bj.a3U.length; aC++) {
			var iR = (aC + 1) % bj.a3U.length;
			oM.push(bj.a3U[iR])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		wE.sA(new xS({
			oM: oM,
			value: (aE.data.colorsData[0] % 16 + bj.a3U.length - 1) % bj.a3U.length
		}, function(eI) {
			var eI = (eI + 1) % bj.a3U.length,
				aU1 = bj.aU2[eI],
				aU1 = (aU1[0] >> 2 << 12) + (aU1[1] >> 2 << 6) + (aU1[2] >> 2);
			aE.data.colorsData[0] = aU1 - (15 & aU1) + eI
		})), sH.push(wE)
	}(oy)), oy))
}

function ua(id, a6x, aU3) {
	var aRX, aU4;

	function aU9() {
		aU4.sI.innerHTML += "<br>" + L(342)
	}

	function aUI() {
		var ft = 1;
		u.v(4, 1, new w(L(343), L(344), !1, [new x("🔄 Reload", function() {
			ft && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), ft = 0
		}, bE.pl)]))
	}

	function aU8() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.dk(bG.aD), bm.qq.qr(110, __fx.passwordReset.getCustomPassword() || bI.f0
			.ub(bI.f0.uc(15))), b1.aIh.aUK()
	}
	this.aU5 = !0, this.aU6 = id, this.show = function() {
		aRX.show(), this.resize(), 15 === id ? (b1.z.aU7(id) ? aU8 : aU9)() : 16 === id ? b1.z.aU7(id) ? b1.eg.eh(2) : aU9() : 17 === id ? b1.z.aU7(id) ? b1.eg.eh(3) : aU9() : 18 === id ? (b1.z.close(0, 3253), b1.z.aJc(0, id, 0), aU9()) : 21 ===
			id ? b1.z.aU7(id) ? b1.aUA.aUB(a6x.uq, a6x.ur, a6x.us) : aU9() : 22 === id ? b1.z.aU7(id) ? b1.aUA.aUC(a6x.uq, a6x.aUD, a6x.aUE) : aU9() : 23 === id ? b1.z.aU7(id) ? b1.aUA.aUF(a6x.aTF, a6x.a3p) : aU9() : 24 === id ? b1.z.aU7(id) ? b1
			.aUA.aUG(a6x.aTF, a6x.ur, a6x.us) : aU9() : 25 === id ? b1.z.aU7(id) ? b1.aIh.aS6(a6x) : aU9() : 28 === id ? b1.z.aU7(id) ? b1.aUA.aUH(a6x.uq, a6x.aUD, a6x.aUE) : aU9() : 29 === id ? b1.z.aU7(id) ? b1.aIh.aSS(a6x) : aU9() : 30 ===
			id && (b1.z.aU7(id) ? bA.aFR() || aUI() : aU9())
	}, this.aUJ = function() {
		15 === id ? aU8() : 16 === id ? b1.eg.eh(2) : 17 === id ? b1.eg.eh(3) : 18 === id ? u.v(8, this.a4M, new ua(16)) : 21 === id ? b1.aUA.aUB(a6x.uq, a6x.ur, a6x.us) : 22 === id ? b1.aUA.aUC(a6x.uq, a6x.aUD, a6x.aUE) : 23 === id ? b1.aUA.aUF(
			a6x.aTF, a6x.a3p) : 24 === id ? b1.aUA.aUG(a6x.aTF, a6x.ur, a6x.us) : 25 === id ? b1.aIh.aS6(a6x) : 28 === id ? b1.aUA.aUH(a6x.uq, a6x.aUD, a6x.aUE) : 29 === id ? b1.aIh.aSS(a6x) : 30 === id ? bA.aFR() || aUI() : 1e3 === id && (
			this.aU6 = id = 25, b1.aIh.aS6(a6x))
	}, this.aFV = function(code, by, data) {
		!by && code !== id || (15 === code || 16 === code ? u.v(7, this.a4M) : 17 === code ? (b1.z.close(0, 3252), bm.z.yk(0), bm.buffer.data[117].oM && 0 < bm.buffer.data[117].oM.length && (by = bm.z.yl(0)) ? (bm.qq.qr(105, by.uX), bm.qq.qr(106,
			by.password), u.v(8, this.a4M, new ua(16))) : (bm.qq.qr(105, ""), u.z.aFW())) : 21 === code ? u.v(10, this.a4M, new aDz(data)) : 23 === code ? u.v(13, this.a4M, new aSx({
			data: data,
			aTF: a6x.aTF
		})) : 25 === code ? (u.z.aRD.uX = a6x.uX, bm.y9.nH(a6x.uX), u.v(15, this.a4M)) : 30 === code && (data ? u.v(1) : aUI()))
	}, this.tX = function() {
		aRX.tX()
	}, this.resize = function() {
		aRX.resize(), aU4.resize()
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	}, aRX = new xW(L(340), [new x("⬅️ " + L(43), function() {
		aU3 ? u.v(29) : u.z.aFW()
	})]), aU4 = new ti(aRX.xc, L(341))
}

function aRH() {
	var aSm, aSn, sH;

	function aUN() {
		var h2;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a7c.a7h()), h2 = bD.sU.a5h(aE.data.teamPlayerCount, 0), aE.data.numberTeams = h2) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aSp() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aUP(), aE.data.canvas = null, u.v(5, 5)
	}

	function aUP() {
		bC.rg.dk(), bm.qq.qr(156, bC.a7s.a2b())
	}

	function aUL() {
		aE.data.isReplay = 0, aUP(), aE.a7c.a84(), ab.aJn(), aE.a7c.a81(), aE.data.canvas = 2 === aE.data.mapType ? bV.zg : null, aE.a7g(), aE.a7e = 1
	}

	function aUb() {
		aUN();
		for (var h = [aUS(), aUT(), aUU()], aC = 3; aC < 6; aC++) u.removeChild(aSn.sI, aSn.sJ[aC].s1), aSn.sJ[aC] = h[aC - 3], aSn.sI.appendChild(aSn.sJ[aC].s1);
		aSn.resize()
	}

	function aUS() {
		var aUc, wE = new rz;
		return wE.s2(L(337)), aUc = 0 === aE.data.gameMode ? [L(338), L(316)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), wE.s8(aUc), wE.sD(new tj([new x(L(348), function() {
			u.v(21)
		}).button])), wE
	}

	function aUT() {
		var wE = new rz,
			h = (wE.s2(L(68)), [L(315) + ": " + aF.l5[aE.data.botDifficultyValue], L(317), L(318), L(316)]);
		return wE.s8(h[aE.data.botDifficultyType]), wE.sD(new tj([new x(L(348), function() {
			u.v(25)
		}).button])), wE
	}

	function aUU() {
		var wE = new rz,
			h = (wE.s2("Spawning"), [L(338), L(350), L(316)]);
		return wE.s8(h[aE.data.spawningType]), wE.sD(new tj([new x(L(348), function() {
			u.v(24)
		}).button])), wE
	}
	this.show = function() {
		aSm.show(), this.resize(), aSm.xc.scrollTop = u.z.uR[0]
	}, this.tX = function() {
		u.z.uR[0] = aSm.xc.scrollTop, aSm.tX()
	}, this.resize = function() {
		aSm.resize(), aSn.resize()
	}, this.a5C = function(ej) {
		2 === ej && aSm.xd[0].sd()
	}, aSm = new xW("🔧 " + L(345), [new x("⬅️ " + L(43), aSp), new x(L(346), aUL)]), aUN(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.zg : 1 === aE.data.mapType ? aE.data.canvas = bV.aOx(bV.a82(aE.data), 0).zg : (aE.data
		.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aOx(bV.a82(aE.data), aE.data.mapSeed).zg)), aSn = new sF(aSm.xc, (function(sH) {
		var wE = new rz,
			a5x = (wE.s2(L(347)), aE.data.canvas);
		a5x.style.width = "100%", wE.sD({
			e: a5x
		}), wE.sD(new tj([new x(L(348), function() {
			u.v(20)
		}).button])), sH.push(wE)
	}(sH = []), function(sH) {
		var wE = new rz;
		wE.s2(L(319)), wE.sD(new t9({
			eI: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.ij(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.sU.a5h(aE.data.teamPlayerCount, 0), aE.a7c.a7h(), bD.sU.a5h(aE.data.teamPlayerCount, 0) !== e) && aUb()
		})), sH.push(wE)
	}(sH), function(sH) {
		var wE = new rz;
		wE.s2(L(349)), wE.sA(new xS({
			oM: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eI) {
			aE.data.gameMode !== eI && (1 === (aE.data.gameMode = eI) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aUb())
		})), sH.push(wE)
	}(sH), sH.push(aUS()), sH.push(aUT()), sH.push(aUU()), function(sH) {
		var wE = new rz,
			h = (wE.s2(L(351)), [L(352), L(353), L(316)]);
		wE.s8(h[aE.data.playerNamesType]), wE.sD(new tj([new x(L(348), function() {
			u.v(23)
		}).button])), sH.push(wE)
	}(sH), function(sH) {
		var wE = new rz,
			h = (wE.s2(L(312)), [L(314), L(315) + ": " + aE.data.aIncomeValue, L(316)]);
		wE.s8(h[aE.data.aIncomeType]), wE.sD(new tj([new x(L(348), function() {
			u.v(22)
		}).button])), sH.push(wE)
	}(sH), function(sH) {
		var wE = new rz,
			h = (wE.s2(L(354)), [L(314), L(315) + ": " + aE.data.tIncomeValue, L(316)]);
		wE.s8(h[aE.data.tIncomeType]), wE.sD(new tj([new x(L(348), function() {
			u.v(26)
		}).button])), sH.push(wE)
	}(sH), function(sH) {
		var wE = new rz,
			h = (wE.s2(L(355)), [L(314), L(315) + ": " + aE.data.iIncomeValue, L(316)]);
		wE.s8(h[aE.data.iIncomeType]), wE.sD(new tj([new x(L(348), function() {
			u.v(27)
		}).button])), sH.push(wE)
	}(sH), function(sH) {
		var wE = new rz,
			h = (wE.s2(L(356)), [L(314), L(315) + ": " + aE.data.sResourcesValue, L(316)]);
		wE.s8(h[aE.data.sResourcesType]), wE.sD(new tj([new x(L(348), function() {
			u.v(28)
		}).button])), sH.push(wE)
	}(sH), function(sH) {
		var wE = new rz;
		wE.s2(L(357)), wE.sD(new tj([new x(L(358), function() {
			u.y(), aE.a7c.a85(), u.z.uR[0] = 0, u.v(19)
		}).button])), wE.sD(new tj([new x(L(359), function() {
			bp.aMA()
		}).button])), wE.sD(new tj([new x(L(360), function() {
			return bp.aMC(), !0
		}).button])), sH.push(wE)
	}(sH), sH))
}

function aRS() {
	var aSm, tE = !0;

	function tQ(tP, a89) {
		var s1 = document.createElement("div"),
			aUe = document.createElement("span"),
			aUf = document.createElement("span");
		aUe.textContent = aX.aEL(a89.eZ) + ":", aUe.style.color = bE.pd, aUe.style.paddingRight = "0.4em", aUe.style.display = "table-cell", aUe.style.width = "6ch", aUe.style.textAlign = "end", s1.appendChild(aUe), aUf.textContent = a89.s3, s1
			.appendChild(aUf), s1.style.display = "table", a89.r5 && function(s1, r5) {
				{
					var aLX;
					r5 >= 1024 - ak.tW.a1u ? ((aLX = document.createElement("img")).src = ak.zj.a1i[r5 - 1024 + ak.tW.a1u].toDataURL(), aLX.style.width = "1.5em", aLX.style.height = "1.5em", aLX.style.verticalAlign = "middle", s1.appendChild(aLX)) :
						((aLX = document.createElement("span")).textContent = ak.tW.a29(r5), aLX.style.display = "inline-block", aLX.style.fontSize = "1.5em", aLX.style.lineHeight = "1em", aLX.style.verticalAlign = "middle", s1.appendChild(aLX))
				}
			}(s1, a89.r5), tP.appendChild(s1)
	}

	function tT() {
		tE && (aSm.xc.scrollTop = aSm.xc.scrollHeight)
	}
	this.clear = function() {
		aSm.xc.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a92 = bt.a8C(), fZ = a92.length, tP = document.createDocumentFragment(), aC = 0; aC < fZ; aC++) tQ(tP, a92[aC]);
		aSm.xc.appendChild(tP), tT(), aSm.show(), this.resize(), tE = !0, tT()
	}, this.tX = function() {
		aSm.tX()
	}, this.resize = function() {
		aSm.resize(), aSm.xc.style.padding = "0.4em " + bD.sM.sV(bf.sS)
	}, this.a5C = function(ej) {
		2 === ej && aSm.xd[0].sd()
	}, this.a1b = function(a89) {
		var tP = document.createDocumentFragment();
		tQ(tP, a89), aSm.xc.appendChild(tP), tT()
	}, (aSm = new xW(L(361), [new x("⬅️ " + L(43), function() {
		u.aRV(1)
	})])).xc.style.overflowY = "auto", aSm.xc.addEventListener("scroll", function() {
		tE = aSm.xc.scrollTop >= aSm.xc.scrollHeight - aSm.xc.clientHeight - 2
	})
}

function aRP() {
	var aSm, aSn, aSo, sH;

	function aSp() {
		aSr(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aRW()[19] = null, u.a4G()
	}

	function aSr() {
		2 === aE.data.iIncomeType && bD.sU.a5n(aSo.y1(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aSm.show(), this.resize()
	}, this.tX = function() {
		aSm.tX()
	}, this.resize = function() {
		aSm.resize(), aSn.resize()
	}, this.a5C = function(ej) {
		2 === ej && aSm.xd[0].sd()
	}, aSm = new xW(L(355), [new x("⬅️ " + L(43), aSp)]), aSn = new sF(aSm.xc, (function(sH) {
		var wE = new rz;
		wE.s2(L(313)), wE.sA(new xS({
			oM: [L(314), L(315), L(316)],
			value: aE.data.iIncomeType
		}, function(eI) {
			aSr(), 2 !== eI || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fW), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eI, u.v(27)
		})), sH.push(wE)
	}(sH = []), function(sH) {
		var wE;
		1 === aE.data.iIncomeType && ((wE = new rz).s2("Value"), wE.sD(new t9({
			eI: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ij(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), sH.push(wE))
	}(sH), function(sH) {
		var wE;
		2 === aE.data.iIncomeType && ((wE = new rz).s2("Data"), (aSo = new xu(0, 1, 0, 1)).y0(bD.tK.a7L(aE.data.iIncomeData, 4)), wE.sD(aSo), sH.push(wE))
	}(sH), sH))
}

function aR7() {
	var aUh, aUi, aTn, t8, aUj, u2 = 0;
	this.aKJ = new ug, aTn = new sw([.45, .27], [.5, .5], 2 / 3), aUi = [new x("⚔️<br>" + L(362), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aUk(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.pr), new x("🗡️<br>" + L(345), function() {
			aUk(1)
		}, bE.qB), new x("🔑<br>" + L(363), function() {
			aUk(2)
		}, bE.qU), new x("☰<br>" + L(364), function() {
			aUk(3)
		}, bE.pb), new x("", function() {
			u.v(12)
		}, bE.pK, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], t8 = new t9(bm.buffer.data[122]);
	for (var aC = 0; aC < aUi.length; aC++) aUi[aC].button.style.position = "absolute";

	function aUk(eI) {
		a1.a2.setState(10), ac.uz() || ac.aKA(), 0 === eI ? u.z.a7v(1) : 1 === eI ? (bC.aMU.zS(bm.buffer.data[156].value, 1) || aE.a7c.a85(), u.v(19)) : 2 === eI ? 0 !== a1.id || bm.buffer.data[140].value ? u.v(8, u.uZ, new ua(16)) : u.z.aUl(u.uZ,
			16) : 3 === eI && u.v(1)
	}
	t8.e.style.position = "absolute", t8.e.style.textAlign = "center", t8.e.placeholder = L(365), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aKJ.show(), aUi[4].sg(bD.color.a64(bm.buffer.data[121].value)), this.resize(), document.body.appendChild(t8.e);
		for (var aC = 0; aC < aUi.length; aC++) document.body.appendChild(aUi[aC].button);
		1 !== a1.id || a1.e3 < 5 || (aUj && bi.eZ > aUj + 144e5 ? a1.yT.setState(14) : aUj = bi.eZ)
	}, this.tX = function() {
		this.aKJ.tX(), u.removeChild(document.body, t8.e);
		for (var aC = 0; aC < aUi.length; aC++) u.removeChild(document.body, aUi[aC].button)
	}, this.resize = function() {
		this.aKJ.resize(), this.aKJ.resize(), aTn.resize();
		var gap = .5 * bf.gap,
			vS = 10 / 99 * .84 * aTn.j,
			aUo = .16 * aTn.k,
			aCG = .19 * aTn.j,
			fg = aTn.fg + aCG,
			vS = aTn.fi + vS + 3 * gap,
			j = .5 * (aTn.j - gap) - aCG,
			aCG = aTn.j - 2 * aCG - aUo - gap,
			aCG = (bD.sM.ux(t8.e, fg, vS, aCG, aUo), bD.sM.ux(aUi[4].button, fg + aCG + gap, vS, aUo, aUo), u2 = vS, .5 * (aTn.fi + aTn.k - (vS += aUo + gap) - gap));
		bD.sM.ux(aUi[0].button, fg, vS, j, aCG), bD.sM.ux(aUi[1].button, fg + j + gap, vS, j, aCG), bD.sM.ux(aUi[2].button, fg, vS + aCG + gap, j, aCG), bD.sM.ux(aUi[3].button, fg + j + gap, vS + aCG + gap, j, aCG);
		bD.sM.ux(aUi[5].button, fg, vS + aCG * 2 + gap * 2, j * 2 + gap, aCG / 3);
		bD.sM.ux(aUi[6].button, fg, vS + aCG * 2.33 + gap * 3, j * 2 + gap, aCG / 3);
		for (var aC = 0; aC < aUi.length; aC++) aUi[aC].button.style.font = bD.sM.u7(0, bD.sM.xD(.065 * aTn.k)), bD.sM.sW(aUi[aC].button, 5);
		t8.e.style.font = bD.sM.u7(0, bD.sM.xD(.08 * aTn.k)), bD.sM.sW(t8.e, 5)
	}, this.xl = function() {
		if (ab.aJr(), aU.xl(), fZ = Math.floor((a1.a2.ik() ? .018 : .0137) * i.il), xm.font = bD.sM.u7(0, Math.max(5, fZ)), bD.sM.textBaseline(xm, 0), bD.sM.textAlign(xm, 2), xm.fillStyle = bE.pO, xm.fillText(m.e3, i.j, 0), text = "Win count: " +
			__fx.wins.count, textLength = xm.measureText(text).width, fZ = Math.max(5, fZ), xm.textAlign = "left", xm.textBaseline = "middle", xm.fillText(text, xm.canvas.width - textLength - fZ / 2, 2 * fZ), aP.xl(u2), bb.xl(), ac.uz()) {
			xm.imageSmoothingEnabled = !1;
			var text = ac.w8("territorial.io"),
				textLength = .84 * aTn.j / text.width;
			xm.setTransform(textLength, 0, 0, textLength, aTn.fg + .08 * aTn.j, aTn.fi), aUh = aUh || bD.or.a6v(text, bD.or.a72, [0, 0, 0]);
			for (var fg = -1; fg <= 1; fg += 2)
				for (var fi = -1; fi <= 1; fi += 2) xm.drawImage(aUh, fg, fi);
			xm.drawImage(text, 0, 0), xm.imageSmoothingEnabled = !0;
			var fZ = ac.w8("logo"),
				aUr = .6666 * textLength * text.height / fZ.height,
				o8 = .5 * i.j,
				o9 = aTn.fi + .5 * textLength * text.height - .5 * aUr * fZ.height;
			xm.setTransform(aUr, 0, 0, aUr, o8 - .6 * textLength * text.width, o9), xm.drawImage(fZ, 0, 0), xm.setTransform(aUr, 0, 0, aUr, o8 + .6 * textLength * text.width - aUr * fZ.width, o9), xm.drawImage(fZ, 0, 0), xm.setTransform(1, 0, 0,
				1, 0, 0), xm.imageSmoothingEnabled = !0
		}
	}
}

function aRE() {
	var aRX, aUs, aUt, xX;

	function aUu(aC) {
		u.v(8, u.uZ, new ua(21, {
			uq: aC,
			ur: 0,
			us: 10
		}))
	}
	this.show = function() {
		aRX.show(), this.resize()
	}, this.tX = function() {
		aRX.tX()
	}, this.resize = function() {
		aRX.resize(), aUs.resize()
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	}, aUt = [new x(L(366), function() {
		aUu(1)
	}, 0, 0, 1), new x(L(367), function() {
		aUu(2)
	}, 0, 0, 1), new x(L(368), function() {
		aUu(3)
	}, 0, 0, 1), new x(L(369), function() {
		aUu(0)
	}, 0, 0, 1), new x(L(138), function() {
		aUu(9)
	}, 0, 0, 1), new x(L(370), function() {
		aUu(10)
	}, 0, 0, 1), new x(L(371), function() {
		aUu(11)
	}, 0, 0, 1), new x(L(372), function() {
		aUu(13)
	}, 0, 0, 1)], xX = [new x("⬅️ " + L(43), function() {
		u.a4G()
	})], aRX = new xW(L(373), xX), aUs = new su(aUt, aRX.xc)
}

function aFt(title, s9, aUv) {
	var aRX, aU4;
	this.show = function() {
		aRX.show(), this.resize()
	}, this.tX = function() {
		aRX.tX()
	}, this.resize = function() {
		aRX.resize(), aU4.resize()
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	}, aUv = aUv || [new x("⬅️ " + L(43), function() {
		u.a4G()
	}, bE.q5)], aRX = new xW(title, aUv), aU4 = new ti(aRX.xc, s9), bD.sM.textAlign(aRX.xc.style, 1)
}

function aDz(data) {
	var aRX, aUw;

	function aV5(fZ) {
		return fZ < 60 ? 1 === fZ ? fZ + " Second" : fZ + " Seconds" : fZ < 3600 ? 1 === (fZ = Math.floor(fZ / 60)) ? fZ + " Minute" : fZ + " Minutes" : fZ < 172800 ? 1 === (fZ = Math.floor(fZ / 3600)) ? fZ + " Hour" : fZ + " Hours" : (fZ = Math
			.floor(fZ / 172800)) + " Days"
	}

	function aUy(k9) {
		var fZ = data.data.length;
		if (fZ) {
			for (var ur, max = min = parseInt(data.data[0][0]), aC = 1; aC < fZ; aC++) var aIF = parseInt(data.data[aC][0]),
				min = Math.min(aIF, min),
				max = Math.max(aIF, max);
			ur = k9 < 0 ? min + k9 : max + 1, u.v(8, u.a4L().a4M, new ua(21, {
				uq: data.uq,
				ur: ur,
				us: ur + Math.abs(k9)
			}))
		}
	}
	if (this.show = function() {
			aRX.show(), this.resize()
		}, this.tX = function() {
			aRX.tX()
		}, this.resize = function() {
			aRX.resize(), aUw.resize()
		}, this.a5C = function(ej) {
			2 === ej && aRX.xd[0].sd()
		}, data.aE0) {
		aRX = new xW(L(27), [new x("⬅️ " + L(43), function() {
			u.a4G()
		})]);
		var fc = {
				uH: [],
				uN: [L(386), L(387), L(388) + " ↗"],
				uU: [12, 50, 38]
			},
			a7z = aE.data.a7z;
		if (a7z) {
			for (var fZ = a7z.length, uH = fc.uH, a1c = ah.a1c, aC = 0; aC < fZ; aC++) uH.push([{
				g1: aC + 1 + ".",
				ea: 0
			}, {
				g1: a1c[aC],
				ea: 0
			}, {
				g1: bI.f0.a2Q(a7z[aC], 5),
				ea: 1,
				uX: a7z[aC],
				uY: 0
			}]);
			aUw = new uG(aRX.xc, fc, {
				uQ: 1
			})
		} else aUw = new uG(aRX.xc, fc)
	} else {
		var fc = data.data.length ? 0 : 1,
			aUv = [new x("⬅️ " + L(43), function() {
				u.a4G()
			}), new x(L(374), function() {
				aUy(-10)
			}, fc, 0, 1), new x(L(375), function() {
				aUy(10)
			}, fc, 0, 1), new x(L(321), function() {
				u.v(11, 10, new aUz({
					uq: data.uq
				}))
			})],
			uN = [L(376), L(377), L(378), L(379), L(380), L(381), L(382), L(383), L(384), L(385), L(370), L(371), "Audit Log", L(372)];
		aRX = new xW(uN[data.uq], aUv), ! function() {
			var aC, fc = {
					uH: []
				},
				uH = fc.uH,
				aV1 = data.data,
				fZ = aV1.length;
			fZ && 0 === aV1[0][0] && 0 <= (eI = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.uq]) && (u.z.ut[eI] = aV1[0][1]);
			var o7 = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.uq],
				a78 = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.uq],
				eI = [
					[L(389), L(26) + " ↗", L(390)],
					[L(389), L(391), L(392), L(393) + " ↗"],
					[L(389), L(26) + " ↗", L(392)],
					[L(389), L(26) + " ↗", L(392)],
					[L(386), L(394), L(395) + " ↗", L(396) + " ↗", L(125)],
					[L(386), L(394), L(397) + " ↗", L(398) + " ↗", L(399)],
					[L(386), L(394), L(400) + " ↗", L(401) + " ↗", L(402)],
					[L(386), L(394), L(397) + " ↗", L(398) + " ↗", L(403)],
					[L(386), L(394), L(395) + " ↗", L(396) + " ↗", L(125)],
					[L(389), L(26) + " ↗", L(392)],
					[L(389), L(26) + " ↗", L(404)],
					[L(389), L(26) + " ↗", L(392)],
					[L(386), L(394), L(395) + " ↗", L(396) + " ↗", L(405)],
					[L(389), L(26) + " ↗", L(392)]
				];
			if (fc.uN = eI[data.uq], fc.uU = [
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
				][data.uq], 0 === data.uq || 2 === data.uq || 3 === data.uq || 9 === data.uq || 10 === data.uq || 11 === data.uq || 13 === data.uq)
				for (aC = 0; aC < fZ; aC++) uH.push([{
					g1: aV1[aC][0] + 1 + ".",
					ea: 0
				}, {
					g1: aV1[aC][1],
					ea: 1,
					uX: aV1[aC][4],
					uY: aV1[aC][3]
				}, {
					g1: (o7 * aV1[aC][2]).toFixed(a78),
					ea: 0
				}]);
			else if (12 === data.uq)
				for (aC = 0; aC < fZ; aC++) {
					var aV4 = aV1[aC][3];
					uH.push([{
						g1: "" + aV1[aC][0],
						ea: 0
					}, {
						g1: aV5(aV1[aC][4]),
						ea: 0
					}, {
						g1: aV1[aC][5],
						ea: 1,
						uX: aV1[aC][1],
						uY: 0
					}, {
						g1: aV1[aC][6],
						ea: 1,
						uX: aV1[aC][2],
						uY: 0
					}, {
						g1: br.eO(aV4, bI.f0.a2Q(aV1[aC][1], 5)),
						ea: 0
					}])
				} else if (1 === data.uq)
					for (aC = 0; aC < fZ; aC++) uH.push([{
						g1: aV1[aC][0] + 1 + ".",
						ea: 0
					}, {
						g1: aV1[aC][1],
						ea: 0
					}, {
						g1: (o7 * aV1[aC][2]).toFixed(a78),
						ea: 0
					}, {
						g1: aV1[aC][3],
						ea: 1,
						uX: aV1[aC][5],
						uY: aV1[aC][4]
					}]);
				else if (4 === data.uq || 5 === data.uq || 6 === data.uq || 7 === data.uq || 8 === data.uq)
				for (aC = 0; aC < fZ; aC++) {
					var aV6 = aV1[aC][5];
					4 === data.uq || 8 === data.uq ? "100%" === (aV6 = (aV6 % 64 * 100 / (aV6 >> 6)).toFixed(0) + "%") && (4 === data.uq ? aV6 += " (" + L(406) + ")" : aV6 += " (" + L(407) + ")") : 5 === data.uq ? 32768 <= aV6 && (aV6 = -(aV6 -
						32768)) : aV6 = (o7 * aV6).toFixed(a78), uH.push([{
						g1: "" + aV1[aC][0],
						ea: 0
					}, {
						g1: aV5(aV1[aC][6]),
						ea: 0
					}, {
						g1: aV1[aC][7],
						ea: 1,
						uX: aV1[aC][1],
						uY: aV1[aC][2]
					}, {
						g1: aV1[aC][8],
						ea: 1,
						uX: aV1[aC][3],
						uY: aV1[aC][4]
					}, {
						g1: "" + aV6,
						ea: 0
					}])
				}
			aUw = new uG(aRX.xc, fc)
		}()
	}
}

function aUz(a6x) {
	var aRX, aRY, sH;
	this.show = function() {
		aRX.show(), this.resize()
	}, this.tX = function() {
		aRX.tX()
	}, this.resize = function() {
		aRX.resize(), aRY.resize()
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	}, aRX = new xW(L(408), [new x("⬅️ " + L(43), function() {
		u.aRV(10)
	})]), aRY = new sF(aRX.xc, ((sH = []).push(function() {
		var aS2, wE = new rz,
			aTl = new t9(bm.buffer.data[132], 1, function() {
				aS2.button.click()
			}),
			aTm = new t9(bm.buffer.data[131], 1, function() {
				aTl.e.focus()
			});
		wE.s2(L(326)), wE.sD(aTm), aTm.e.style.marginBottom = "0.8em", wE.s2(L(327)), wE.sD(aTl);
		return aS2 = new x(L(325), function() {
			ur = Math.floor(aTm.e.value), us = Math.floor(aTl.e.value);
			var us, ur = {
				a5f: Math.min(ur, us),
				aQe: Math.max(ur, us)
			};
			u.v(8, u.a8B(10).a4M, new ua(21, {
				uq: a6x.uq,
				ur: ur.a5f,
				us: ur.aQe
			}))
		}, 0, 0, 1), wE.sD(new tj([aS2.button])), wE
	}()), sH.push(function() {
		var aS2, wE = new rz,
			aTl = new t9(bm.buffer.data[134], 1, function() {
				aS2.button.click()
			}),
			aTm = new t9(bm.buffer.data[133], 0, function() {
				aTl.e.focus()
			});
		return wE.s2(1 === a6x.uq ? L(409) : L(410)), wE.sD(aTm), aTm.e.style.marginBottom = "0.8em", wE.s2(L(411)), wE.sD(aTl), aS2 = new x(L(325), function() {
			var aUD = aTm.e.value.slice(0, 20),
				aUE = Math.abs(Math.floor(aTl.e.value));
			u.v(8, u.a8B(10).a4M, new ua(22, {
				uq: a6x.uq,
				aUD: aUD,
				aUE: aUE
			}))
		}, 0, 0, 1), wE.sD(new tj([aS2.button])), wE
	}()), sH.push(function() {
		var aS2, wE = new rz,
			aTl = new t9(bm.buffer.data[152], 1, function() {
				aS2.button.click()
			}),
			aTm = new t9(bm.buffer.data[151], 0, function() {
				aTl.e.focus()
			});
		return wE.s2(L(412)), wE.sD(aTm), aTm.e.style.marginBottom = "0.8em", wE.s2(L(411)), wE.sD(aTl), aS2 = new x(L(325), function() {
			var aUD = aTm.e.value.slice(0, 5),
				aUE = Math.abs(Math.floor(aTl.e.value));
			u.v(8, u.a8B(10).a4M, new ua(28, {
				uq: a6x.uq,
				aUD: aUD,
				aUE: aUE
			}))
		}, 0, 0, 1), wE.sD(new tj([aS2.button])), wE
	}()), sH))
}

function aRR() {
	var aVA, aVB, aVC, aVD, v2, v3, aVE = new Array(2);

	function aI5() {
		var aHE;
		!bq.f6 || (aHE = aVA.vD.t8.e.value.trim().slice(0, 127)).length < 1 || (aVA.vD.t8.e.value = "", bq.aFw.a3C(aHE))
	}

	function aVF(vP) {
		var aVI = bq.z.aGF;
		aVI !== vP && (aVG(aVI, 0), aVG(vP, 1), bq.z.aGF = vP, 0 === aVI && b1.aGm.aGn(1), 0 === vP ? (b1.aGm.aGn(0), aVA.vD.nH()) : 1 === vP && aVA.vE.nH(), aVA.vO(vP), aVA.resize())
	}

	function aVG(vP, color) {
		v2.oy[vP].sg(color ? bE.pn : bE.qe), v2.oy[vP].button.classList.toggle("fx-selected", !!color)
	}
	this.aIN = function() {
			return aVA.vD
		}, this.aFw = function(uX) {
			aVF(0);
			var s3 = aVA.vD.t8.e.value,
				uX = "@" + uX + " ";
			s3.length && !bD.tK.a6R(s3, " ") && (uX = " " + uX), aVA.vD.t8.e.value = s3 += uX, aVA.vD.t8.e.focus()
		}, this.aHg = function() {
			aVA.vE.nH()
		}, this.aGo = function() {
			v3.oy[1].sg(bq.sH.aGl() ? bE.pn : bE.qe), aVA.vG.nH()
		}, this.aHi = function() {
			var wE = bq.sH.sH[0];
			bV.a8(wE.fF, wE.mapSeed)
		}, this.aHh = function() {
			aVA.vM(bq.z.vN);
			var w1 = bq.wZ.w1,
				aVJ = w1.length,
				wa = bq.wZ.wa;
			aVB.tJ.textContent = "" + aVJ, aVC.tJ.textContent = "" + wa, aVD[0].tJ.textContent = bq.lj.aHJ(w1, 0, aVJ), aVD[1].tJ.textContent = bq.lj.aHJ(w1, 0, wa), aVE[1].tJ.textContent = "MP: " + bq.z.aHc[0] + "   SP: " + bq.z.aHc[1] +
				"   Lobby: " + aVJ, this.aGo()
		}, this.aHl = function() {
			aVA.vD.nH()
		}, this.show = function() {
			bq.z.aGE++, aVA.show(), this.resize(), bq.message.show()
		}, this.tX = function() {
			aVA.tX(), bq.wx.tX(), bq.wX.tX(), bq.message.tX()
		}, this.resize = function() {
			aVA.resize(), bq.message.resize()
		}, this.a5C = function(ej) {
			2 === ej ? bq.sH.wF ? bq.sH.select(0) : v3.oy[0].sd() : ej < 2 && bq.sH.click(0)
		}, v2 = new tm([new x(L(413), function() {
			return aVF(0), 2
		}), new x(L(27), function() {
			return aVF(1), 2
		}), new x(L(414), function() {
			return aVF(2), 2
		})], bE.qe, 0, [30, 38, 32]), v3 = new tm([new x(L(29, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
				u.y(), bq.wr(), b1.z.a4U(3240), __fx.customLobby.setActive(false), u.v(5, 5)
			}),
			function() {
				u.y(), bq.wr(), b1.z.a4U(3240), __fx.customLobby.setActive(false), u.v(5, 5)
			})), new x(L(415), function() {
			return bq.sH.click(0), 2
		})], bE.qe), aVA = new v1(v2, v3, aI5, bq.wx.aIX, function(eI) {
			bq.f6 && bq.sH.click(eI)
		}), aVB = new tI("0", v2.oy[1].button), aVC = new tI("0", v3.oy[1].button), (aVD = [new tI("", v2.oy[1].button, 1, 1), new tI("", v3.oy[1].button, 1, 1)])[0].tJ.style.bottom = "0em", aVD[1].tJ.style.bottom = "0em", aVD[0].tJ.translate = !1,
		aVD[1].tJ.translate = !1, aVG(bq.z.aGF, 1), (aVE = [new tI(L(319), aVA.vQ(), 1, 0), new tI("", aVA.vQ(), 1, 1)])[0].tJ.style.fontSize = "0.4em", aVE[1].tJ.style.fontSize = "0.4em"
}

function aR8() {
	var aRX, aRY, sH;
	this.show = function() {
		aRX.show(), this.resize()
	}, this.tX = function() {
		aRX.tX()
	}, this.resize = function() {
		aRX.resize(), aRY.resize()
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	}, aRX = new xW(L(416), [new x("⬅️ " + L(43), function() {
		u.v(7, u.a8B(7).a4M)
	}), new x(L(222), function() {
		bm.qq.qr(105, bJ.f0.zI(aRY.sJ[0].s0[0].e.value, 5)), bm.qq.qr(106, bJ.f0.zI(aRY.sJ[1].s0[0].e.value, 15)), u.v(8, u.a8B(7).a4M, new ua(18))
	})]), aRY = new sF(aRX.xc, ((sH = []).push(function() {
		var wE = new rz;
		return wE.s2(L(200)), wE.sD(new t9({
			value: "",
			eI: -1
		})), wE
	}()), sH.push(function() {
		var wE = new rz,
			aS7 = (wE.s2(L(203)), new t9({
				value: "",
				eI: -1
			}));
		return aS7.e.type = "password", wE.sD(aS7), wE.sD(new tj([new x(L(204), function(e) {
			return e.textContent === L(204) ? (e.textContent = L(205), aS7.e.type = "text") : (e.textContent = L(204), aS7.e.type = "password"), !0
		}).button])), wE
	}()), sH.push(function() {
		var wE = new rz;
		return wE.s2(L(207)), wE.s4(L(417)), wE.s4(L(418)), wE.s4(L(419)), wE
	}()), sH))
}

function aRF() {
	var aRX, aUs, aUt, xX;

	function aUu(aC) {
		u.v(8, u.uZ, new ua(21, {
			uq: aC,
			ur: 0,
			us: 10
		}))
	}
	this.show = function() {
		aRX.show(), this.resize()
	}, this.tX = function() {
		aRX.tX()
	}, this.resize = function() {
		aRX.resize(), aUs.resize()
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	}, aUt = [new x(L(381), function() {
		aUu(5)
	}, 0, 0, 1), new x(L(382), function() {
		aUu(6)
	}, 0, 0, 1), new x(L(383), function() {
		aUu(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aUu(12)
	}, 0, 0, 1)], xX = [new x("⬅️ " + L(43), function() {
		u.a4G()
	})], aRX = new xW(L(420), xX), aUs = new su(aUt, aRX.xc)
}

function aQz() {
	this.buffer = {}, this.ut = new Array(8), this.aRD = null, this.aRA = null, this.uE = 0, this.uR = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a7v = function(aVM) {
		aVM && (aa.f2 = aVM), u.y(), aa.dk()
	}, __fx.customLobby.setJoinFunction(() => this.a7v(1)), this.aFW = function() {
		u.v(0 === ab.a4H() ? 5 : 0)
	}, this.aTg = function() {
		if (1 === bm.buffer.data[130].value) u.v(8, u.a4L().a4M, new ua(24, {
			aTF: bm.buffer.data[125].value,
			ur: bm.buffer.data[128].value,
			us: bm.buffer.data[129].value
		}));
		else {
			for (var h = (h = bm.buffer.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a4L().a4M, new ua(23, {
				aTF: bm.buffer.data[125].value,
				a3p: h
			}))
		}
	}, this.aUl = function(a4M, target) {
		u.v(4, a4M, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aRv(
				"/privacy"), !1, [new x("⬅️ " + L(43), function() {
				u.v(a4M)
			}), new x("✅ Accept", function() {
				bm.qq.qr(140, 1), 0 === target ? u.v(2, a4M) : u.v(8, a4M, new ua(target))
			})]))
	}, this.aVN = function() {
		for (var aC = 0; aC < 8; aC++) this.ut[aC] = bJ.z9.zD(bK.rU(5));
		this.ut[1] = "[" + this.ut[1] + "]", 5 === u.uZ && (u.a4L().aKJ.qr(this.ut), u.a4L().resize())
	}, this.aS3 = function(g1, qo, a9h) {
		g1 = bD.gv.a6u(g1, 1, 1e6);
		qo = L(421, [qo]);
		return (qo += "<br>") + L(422, [__fx.utils.escapeHtml("" + a9h)]) + "<br>" + L(423, [g1 + "–" + (g1 + 2)]) + "<br>" + L(424, [g1])
	}
}

function aRI() {
	var aSm, aSn, aVO, sH;

	function aSp() {
		b7.wr(), u.aRW()[19] = null, u.a4G()
	}

	function aVV() {
		aVY(), aVW()
	}

	function aVY() {
		aVO.s1.lastChild && u.removeChild(aVO.s1, aVO.s1.lastChild)
	}

	function aVW() {
		var aVZ = bV.a82(aE.data);
		aE.data.canvas = bV.aOx(aVZ, aE.data.mapSeed).zg, aVX()
	}

	function aVX() {
		var a5x = aE.data.canvas;
		a5x.style.width = "100%", aVO.s1.appendChild(a5x)
	}
	this.aLW = function(a5x) {
		aE.data.canvas && aVY(), aE.data.canvas = a5x, aVX()
	}, this.show = function() {
		aSm.show(), this.resize()
	}, this.tX = function() {
		aSm.tX()
	}, this.resize = function() {
		aSm.resize(), aSn.resize()
	}, this.a5C = function(ej) {
		2 === ej && aSm.xd[0].sd()
	}, aSm = new xW(L(347), [new x("⬅️ " + L(43), aSp)]), 2 === aE.data.mapType && b7.dk(), aSn = new sF(aSm.xc, (function(sH) {
		var wE = new rz;
		wE.s2(L(313)), wE.sA(new xS({
			oM: [L(425), L(426), L(427)],
			value: aE.data.mapType
		}, function(eI) {
			2 === (aE.data.mapType = eI) ? (b7.dk(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.wr()), u.v(20)
		})), 2 <= aE.data.mapType && (wE.sD(new tv), wE.sD(new tf({
			value: aE.data.passableWater
		}, L(428), function(value) {
			aE.data.passableWater = value
		})), wE.sD(new tf({
			value: aE.data.passableMountains
		}, L(429), function(value) {
			aE.data.passableMountains = value
		})));
		sH.push(wE)
	}(sH = []), function(sH) {
		if (0 === aE.data.mapType) {
			for (var wE = new rz, oM = (wE.s2(L(347)), []), aC = 0; aC < bV.wG.aPt.length; aC++) oM.push(bV.wG.zX[bV.wG.aPt[aC]].name);
			wE.sA(new xS({
				oM: oM,
				value: aE.data.mapProceduralIndex
			}, function(eI) {
				aE.data.mapProceduralIndex = eI, aVV()
			})), sH.push(wE)
		}
	}(sH), function(sH) {
		if (1 === aE.data.mapType) {
			for (var wE = new rz, oM = (wE.s2(L(347)), []), aC = 0; aC < bV.wG.aPu.length; aC++) oM.push(bV.wG.zX[bV.wG.aPu[aC]].name);
			wE.sA(new xS({
				oM: oM,
				value: aE.data.mapRealisticIndex
			}, function(eI) {
				aE.data.mapRealisticIndex = eI, aVV()
			})), sH.push(wE)
		}
	}(sH), function(sH) {
		var wE;
		2 === aE.data.mapType && ((wE = new rz).s2(L(430)), wE.sD(new t9(bm.buffer.data[162], 1)), wE.s2(L(431), "0.8em"), wE.sD(new tj([new x(L(432), function() {
			return b7.aLP(), !0
		}).button])), sH.push(wE))
	}(sH), function(sH) {
		var wE, t8;
		2 === aE.data.mapType && ((wE = new rz).s2(L(433)), t8 = new t9({
			eI: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), wE.sD(t8), sH.push(wE))
	}(sH), function(sH) {
		var wE, t8, aS2;
		0 === aE.data.mapType && ((wE = new rz).s2("Seed"), t8 = new t9({
			eI: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aVV())
		}), aS2 = new x(L(338), function(e) {
			var aOs = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aOs) return t8.e.value = aE.data.mapSeed = aOs, aVV(), !0
		}), wE.sD(t8), wE.sD(new tj([aS2.button])), sH.push(wE))
	}(sH), function(sH) {
		(aVO = new rz).s2(L(434)), 2 !== aE.data.mapType ? aVW() : aE.data.canvas && aVX();
		sH.push(aVO)
	}(sH), sH))
}

function w(title, s9, aVa, aUv) {
	var aRX, aU4;
	this.show = function() {
		aRX.show(), this.resize()
	}, this.tX = function() {
		aRX.tX()
	}, this.resize = function() {
		aRX.resize(), aU4.resize()
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	}, aUv = aUv || [new x("⬅️ " + L(43), function() {
		u.a4G()
	})], aRX = new xW(title, aUv), aU4 = new ti(aRX.xc, s9), aVa && bD.sM.textAlign(aRX.xc.style, 1)
}

function aRL() {
	var aSm, aSn, aSo, sH;

	function aSp() {
		aSr(), 2 === aE.data.playerNamesType && 1 === bD.sU.a5b(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aRW()[19] = null, u.a4G()
	}

	function aSr() {
		2 === aE.data.playerNamesType && bD.sU.a5p(aSo.y1(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aSm.show(), this.resize()
	}, this.tX = function() {
		aSm.tX()
	}, this.resize = function() {
		aSm.resize(), aSn.resize()
	}, this.a5C = function(ej) {
		2 === ej && aSm.xd[0].sd()
	}, aSm = new xW(L(351), [new x("⬅️ " + L(43), aSp)]), aSn = new sF(aSm.xc, (function(sH) {
		var wE = new rz;
		wE.s2(L(313)), wE.sA(new xS({
			oM: [L(352), L(353), L(316)],
			value: aE.data.playerNamesType
		}, function(eI) {
			aSr(), aE.data.playerNamesType = eI, u.v(23)
		})), wE.sD(new tv), wE.sD(new tf({
			value: aE.data.selectableName
		}, L(435), function(value) {
			aE.data.selectableName = value
		})), sH.push(wE)
	}(sH = []), function(sH) {
		var wE;
		2 === aE.data.playerNamesType && ((wE = new rz).s2("Data"), aSo = new xu(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fW || (aE.data.playerNamesData = new Array(aE.fW), aE.data.playerNamesData
			.fill("")), aSo.y0(bD.tK.a7L(aE.data.playerNamesData, 1, '"')), wE.sD(aSo), sH.push(wE))
	}(sH), sH))
}

function aRT() {
	var aSm, aSn, sH;

	function aVg() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.buffer.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var fs = 0; fs < 3; fs++) fs < h.length && (colors[aC][fs] = Number(h[fs]))
		}
		return colors
	}
	this.show = function() {
		aSm.show(), this.resize()
	}, this.tX = function() {
		aSm.tX()
	}, this.resize = function() {
		aSm.resize(), aSn.resize()
	}, this.a5C = function(ej) {
		2 === ej && aSm.xd[0].sd()
	}, aSm = new xW(L(436), [new x("⬅️ " + L(43), function() {
		u.a4G()
	})]), aSn = new sF(aSm.xc, ((sH = []).push(function() {
		var wE = new rz;
		return wE.s2(L(437)), wE.s8(b1.z.aRv("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", wE.s8("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), wE
	}()), sH.push(function() {
		var wE = new rz,
			el = (wE.s2(L(438)), bm.buffer.data[174].value),
			s5 = wE.s4(el.length + " / 180"),
			aSV = (s5.style.textAlign = "center", new xu(0, 1, function(e) {
				var e = e.target.value,
					h2 = e.length;
				s5.textContent = h2 + " / 180", h2 <= 180 && bm.qq.qr(174, e)
			}));
		return aSV.e.rows = 6, aSV.e.style.fontSize = "1em", aSV.y0(el), wE.sD(aSV), wE
	}()), sH.push(function() {
		var wE = new rz;
		wE.s2(L(337));
		for (var aC = 0; aC < 11; aC++) {
			var iv = wE.sD(new t9(bm.buffer.data[163 + aC]));
			aC && (iv.e.style.marginTop = "0.6em")
		}
		return wE.sD(new tj([new x(L(439), function() {
			for (var data = bm.buffer.data, aC = 163; aC < 174; aC++) data[aC] && bm.buffer.yG(aC, data[aC].yJ);
			u.a4G(), u.aRW()[31] = null, u.v(31)
		}).button])), wE
	}()), sH.push(function() {
		var wE = new rz;
		return wE.s2("Targeting"), wE.s8(L(440)), wE.sD(new t9(bm.buffer.data[175], 0, 0)), wE
	}()), sH.push(function() {
		var wE = new rz;
		return wE.s2(L(434)), wE.sD(new tj([new x(L(204), function() {
			(new ek).show(bm.buffer.data[174].value, aVg(), -1)
		}).button])), wE
	}()), sH.push(function() {
		var wE = new rz,
			aVh = (wE.s2(L(441)), wE.s8(L(442)), new t9(bm.buffer.data[176], 1, 0)),
			aVi = (wE.sD(aVh), new x(L(443), function(e) {
				return aVj.button.textContent === L(192) && b1.z.ef(0) && (bD.sM.xP(e), aS1(), b1.aIh.aVk(bm.buffer.data[176].value, aVg(), bm.buffer.data[175].value, bm.buffer.data[174].value)), !0
			}, 1)),
			aS1 = function() {
				aVj.button.textContent = L(191), aVi.sg(1), aVi.button.style.color = bE.pO
			},
			aVj = new x(L(191), function(e) {
				return e.textContent === L(191) ? (e.textContent = L(192), aVi.sg(0), aVi.button.style.color = bE.qP) : aS1(), !0
			});
		return wE.sD(new tj([aVj.button, aVi.button])), wE
	}()), sH))
}

function aRU() {
	var aRX, aRY, sH;
	this.show = function() {
		aRX.show(), this.resize()
	}, this.tX = function() {
		aRX.tX()
	}, this.resize = function() {
		aRX.resize(), aRY.resize()
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	}, aRX = new xW("🔒 " + L(444), [new x("⬅️ " + L(43), function() {
		u.a4G()
	})]), aRY = new sF(aRX.xc, ((sH = []).push(function() {
		var wE = new rz,
			t8 = (wE.s8(b1.z.aRv("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", wE.s2(L(200)), new t9({
				value: "",
				eI: -1
			})),
			aSR = (wE.sD(t8), wE.s2(L(271), "0.8em"), new t9({
				value: "",
				eI: -1
			}, 0, 0)),
			aS0 = (aSR.e.type = "email", aSR.e.autocomplete = "email", aSR.e.name = "email", aSR.e.inputMode = "email", aSR.e.spellcheck = !1, wE.sD(aSR), new x(L(445), function(e) {
				return bD.sM.xP(e), b1.aIh.aSS({
					action: 4,
					s3: t8.e.value.trim() + aSR.e.value.trim().substring(0, 63)
				}), !0
			}));
		return wE.sD(new tj([aS0.button])), wE
	}()), sH))
}

function aR6() {
	var aSm, xy;

	function aVl() {
		u.y();
		var s3 = bC.aVp(xy.y1());
		(aE.a38 && 0 < s3.length && s3 === bC.rg.a7r || bC.aMU.zS(s3)) && bC.aVq()
	}
	this.show = function(aVm) {
		this.aVn(aVm), aSm.show(), this.resize()
	}, this.aVn = function(aVm) {
		0 === aE.a38 ? aVm ? xy.y0(aVm) : aE.a7f.length && xy.y0(aE.a7f) : (aE.hi || (bC.rg.a7r = bC.a7s.a2b()), xy.y0(bC.aVo(bC.rg.a7r)))
	}, this.tX = function() {
		aSm.tX()
	}, this.resize = function() {
		aSm.resize(), xy.resize()
	}, this.a5C = function(ej) {
		2 === ej ? aSm.xd[0].sd() : aVl()
	}, aSm = new xW(L(446), [new x("⬅️ " + L(43), function() {
		u.aRV(1)
	}), new x(L(447), function() {
		xy.y2()
	}), new x(L(448), function() {
		xy.y3()
	}), new x(L(449), function() {
		xy.clear()
	}), new x(L(450), function() {
		aVl()
	})]), xy = new xu(L(451)), aSm.xc.appendChild(xy.e)
}

function aR5() {
	var aRX, aRY, sH, wE;

	function aVr() {
		bA.aFI !== bm.buffer.data[12].value ? (bA.dk(), u.v(8, 1, new ua(30))) : u.v(1)
	}
	this.show = function() {
			aRX.show(), this.resize()
		}, this.tX = function() {
			aRX.tX()
		}, this.resize = function() {
			aRX.resize(), aRY.resize()
		}, this.a5C = function(ej) {
			2 === ej && aRX.xd[0].sd()
		}, aRX = new xW(L(452), [new x("⬅️ " + L(43), aVr), new x(L(453), function() {
			u.y(), bm.qq.yq(), u.v(2)
		})]), sH = [], (wE = new rz).s2(L(454)), wE.s4(L(455)), sH.push(wE),
		function(sH) {
			var wE = new rz,
				h = (wE.s2(L(440)), bA.data.aFZ());
			wE.sA(new xS({
				oM: h,
				value: bA.data.aFd(h)
			}, function(eI) {
				return bm.qq.qr(12, h[eI].split(":")[0]), !0
			})), sH.push(wE)
		}(sH),
		function(sH) {
			var wE = new rz,
				aVu = (wE.s2(L(480)), []);
			wE.sD(new tj([new x(L(439), function(e) {
				ba.aVv();
				for (var aC = 0; aC < aVu.length; aC++) aVu[aC].e.value = ba.aEr[aC];
				return bD.sM.xP(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aVw.length; aC++) {
				wE.s4(ba.aVw[aC]);
				for (var fs = 0; fs < 2; fs++) {
					var eI = 2 * aC + fs,
						t8 = new t9({
							value: ba.aEr[eI],
							eI: -1
						});
					t8.e.aVx = eI, aVu.push(t8), t8.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aVy(e.target.aVx, code)
					}), fs && (t8.e.style.marginLeft = "4%"), t8.e.style.width = "48%", wE.sD(t8)
				}
			}
			sH.push(wE)
		}(sH), (wE = new rz).s2(L(456)), bm.buffer.data[1].oM = [L(457), L(458), L(459), L(460)], wE.sA(new xS(bm.buffer.data[1])), sH.push(wE), (wE = new rz).s2(L(461)), bm.buffer.data[9].oM = [L(458), L(462), L(463)], wE.sA(new xS(bm.buffer.data[
			9])), sH.push(wE), (wE = new rz).s2(L(464)), bm.buffer.data[11].oM = [L(465), L(9), L(466)], wE.sA(new xS(bm.buffer.data[11])), sH.push(wE), (wE = new rz).s2(L(467)), wE.sD(new tf(bm.buffer.data[2])), sH.push(wE), (wE = new rz).s2(L(
		468)), wE.sD(new tf(bm.buffer.data[7])), sH.push(wE), (wE = new rz).s2(L(469)), wE.sD(new tf(bm.buffer.data[8])), sH.push(wE), (wE = new rz).s2(L(470)), wE.sD(new t9(bm.buffer.data[5])), sH.push(wE), (wE = new rz).s2(L(471)), wE.sD(new tf(bm
			.buffer.data[13], L(472))), wE.sD(new tf(bm.buffer.data[14], L(473))), sH.push(wE), (wE = new rz).s2(L(474)), wE.sA(new xS({
			oM: [L(475), L(476), L(477)],
			value: aa.aJX
		}, function(aC) {
			aa.aJX = aC
		})), sH.push(wE), (wE = new rz).s2(L(478)), wE.sD(new tf(bm.buffer.data[15])), wE.s4(L(479)), wE.sD(new t9(bm.buffer.data[16], 1, 0, function(e) {
			e.target.value = bO.ij(Math.floor(e.target.value), 0, 16)
		})), sH.push(wE), aRY = new sF(aRX.xc, sH)
}

function aRM() {
	var aSm, aSn, aSo, sH;

	function aSp() {
		aSr(), 2 !== aE.data.spawningType || bD.sU.a5b(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aRW()[19] = null, u.a4G()
	}

	function aSr() {
		2 === aE.data.spawningType && bD.sU.a5n(aSo.y1(), aE.data.spawningData, bV.aLZ - 1)
	}
	this.show = function() {
		aSm.show(), this.resize()
	}, this.tX = function() {
		aSm.tX()
	}, this.resize = function() {
		aSm.resize(), aSn.resize()
	}, this.a5C = function(ej) {
		2 === ej && aSm.xd[0].sd()
	}, aSm = new xW(L(481), [new x("⬅️ " + L(43), aSp)]), aSn = new sF(aSm.xc, (function(sH) {
		var wE = new rz,
			oM = (wE.s2(L(313)), [L(338), L(350), L(316)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (oM.splice(1, 1), 0 < value) && (value = 1);
		wE.sA(new xS({
			oM: oM,
			value: value
		}, function(eI) {
			aSr(), aE.data.spawningType = eI, 0 === aE.data.gameMode && 1 === eI && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fW)), u.v(24)
		})), sH.push(wE)
	}(sH = []), function(sH) {
		var wE = new rz;
		wE.s2("My Spawn"), wE.sD(new tf({
			value: aE.data.selectableSpawn
		}, L(482), function(value) {
			aE.data.selectableSpawn = value
		})), sH.push(wE)
	}(sH), function(sH) {
		var wE = new rz,
			aW0 = (wE.s2("Seed"), new t9({
				eI: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		wE.sD(aW0), wE.sD(new tj([new x(L(338), function() {
			aW0.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), sH.push(wE)
	}(sH), function(sH) {
		var wE;
		2 === aE.data.spawningType && ((wE = new rz).s2("Data"), (aSo = new xu(0, 1, 0, 1)).y0(bD.tK.a7L(aE.data.spawningData, 2)), wE.sD(aSo), sH.push(wE))
	}(sH), sH))
}

function aR4() {
	var aRX, aUs, aUt, xX;

	function aW1(id) {
		0 !== a1.id || bm.buffer.data[140].value ? 0 === id ? u.v(8, 1, new ua(16)) : u.v(2) : u.z.aUl(u.uZ, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aRX.show(), this.resize(), this.ee()
	}, this.tX = function() {
		aRX.tX()
	}, this.resize = function() {
		aRX.resize(), aUs.resize()
	}, this.ee = function() {
		8 === ab.a4H() && (2 <= bg.aW6 ? aUt[2].se === bE.pa && aUt[2].sg(0) : aUt[2].se !== bE.pa && aUt[2].sg(bE.pa), !aE.hi && aN.rx(aE.fJ) ? aUt[1].se === bE.pa && aUt[1].sg(0) : aUt[1].se !== bE.pa && aUt[1].sg(bE.pa), !aE.hi && ax.iO(aE
			.fJ) ? aUt[0].se === bE.pa && aUt[0].sg(0) : aUt[0].se !== bE.pa && aUt[0].sg(bE.pa))
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	}, aUt = [new x(L(483), function() {
		aW1(0)
	}), new x(L(373), function() {
		u.v(16)
	}), new x(L(420), function() {
		u.v(17)
	}), new x(L(484), function() {
		u.z.aTg()
	}, 0, 0, 1), new x(L(446), function() {
		u.v(3, 1)
	}), new x(L(485), function() {
		u.v(18)
	}), new x(L(436), function() {
		u.v(31)
	}), new x(L(486), function() {
		u.z.a7v(2)
	}), new x(L(452), function() {
		aW1(1)
	}), new x("🔒 " + L(444), function() {
		u.v(32)
	}), new x(L(487), function() {
		var a6N, sQ;
		(a6N = []).push(["Wiki", (sQ = "https://territorial.io/") + "wiki/gold"]), a6N.push(["Team Games", sQ + "log/team"]), a6N.push(["Battle Royale Games", sQ + "log/br"]), a6N.push(["1v1 Games", sQ + "log/1v1"]), a6N.push([
			"Zombie Games", sQ + "log/zombies"
		]), a6N.push(["Transactions", sQ + "log/transactions"]), a6N.push(["Changelog", sQ + "changelog"]), 2 !== a1.id && a6N.push(["Android App", bN.aFq]), 1 !== a1.id && a6N.push(["iOS App", bN.a4D]), 0 === a1.id && a6N.push([
			"Patreon", bN.aSk
		]), a6N.push(["Terms", bN.aW7]), a6N.push(["Privacy", bN.aW8]), u.v(4, 1, new w(L(487), bD.sM.a6M(a6N), !1, [new x("⬅️ " + L(43), function() {
			u.v(1)
		})]))
	}), new x(L(488), function() {
		u.v(4, 1, new w(L(488), m.e3 + "<br>" + b1.z.aRv("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(43),
				function() {
					u.v(1)
				})]))
	}), new x(L(489), function() {
		u.v(4, 1, new w(L(489), L(496) + "<br>" + L(497), !1, [new x("⬅️ " + L(43), function() {
			u.v(1)
		}), new x(L(498), function() {
			a1.a2.a47(), u.v(1)
		})]))
	}), new x("👁️ " + L(490), function() {
		a1.a2.a48(), u.v(4, 1, new w(L(499), L(500) + " " + b1.z.aRv("/privacy"), !1, [new x("⬅️ " + L(43), function() {
			u.v(1)
		})]))
	})], xX = [new x("⬅️ " + L(43), function() {
		u.z.aFW()
	})], 8 === ab.a4H() && (aUt.unshift(new x(L(361), function() {
		u.v(30)
	})), aUt.unshift(new x(L(493), function() {
		2 <= bg.aW6 && (u.y(), bh.a5F(), bi.ds = !0)
	}, 0, 1)), aUt.unshift(new x(L(494), function() {
		!aE.hi && aN.rx(aE.fJ) && (bB.hz.rA(), u.y(), aN.hj) && aN.a5F()
	}, 0, 1)), aUt.unshift(new x(L(495), function() {
		!aE.hi && ax.iO(aE.fJ) && (bY.a8X(2), bB.hz.iK(), u.y(), aN.hj) && aN.a5F()
	}, 0, 1))), 1 === a1.id && 5 <= a1.e3 && aUt.push(new x(L(491), function() {
		a1.a2.a49()
	})), aRX = new xW(L(492), xX), aUs = new su(aUt, aRX.xc)
}

function aRQ() {
	var aSm, aSn, aSo, sH;

	function aSp() {
		aSr(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aRW()[19] = null, u.a4G()
	}

	function aSr() {
		2 === aE.data.sResourcesType && bD.sU.a5n(aSo.y1(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aSm.show(), this.resize()
	}, this.tX = function() {
		aSm.tX()
	}, this.resize = function() {
		aSm.resize(), aSn.resize()
	}, this.a5C = function(ej) {
		2 === ej && aSm.xd[0].sd()
	}, aSm = new xW(L(356), [new x("⬅️ " + L(43), aSp)]), aSn = new sF(aSm.xc, (function(sH) {
		var wE = new rz;
		wE.s2(L(313)), wE.sA(new xS({
			oM: [L(314), L(315), L(316)],
			value: aE.data.sResourcesType
		}, function(eI) {
			aSr(), 2 !== eI || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fW)), aE.data.sResourcesType = eI, u.v(28)
		})), sH.push(wE)
	}(sH = []), function(sH) {
		var wE;
		1 === aE.data.sResourcesType && ((wE = new rz).s2("Value"), wE.sD(new t9({
			eI: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.ij(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), sH.push(wE))
	}(sH), function(sH) {
		var wE;
		2 === aE.data.sResourcesType && ((wE = new rz).s2("Data"), (aSo = new xu(0, 1, 0, 1)).y0(bD.tK.a7L(aE.data.sResourcesData, 2)), wE.sD(aSo), sH.push(wE))
	}(sH), sH))
}

function aRO() {
	var aSm, aSn, aSo, sH;

	function aSp() {
		aSr(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aRW()[19] = null, u.a4G()
	}

	function aSr() {
		2 === aE.data.tIncomeType && bD.sU.a5n(aSo.y1(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aSm.show(), this.resize()
	}, this.tX = function() {
		aSm.tX()
	}, this.resize = function() {
		aSm.resize(), aSn.resize()
	}, this.a5C = function(ej) {
		2 === ej && aSm.xd[0].sd()
	}, aSm = new xW(L(354), [new x("⬅️ " + L(43), aSp)]), aSn = new sF(aSm.xc, (function(sH) {
		var wE = new rz;
		wE.s2(L(313)), wE.sA(new xS({
			oM: [L(314), L(315), L(316)],
			value: aE.data.tIncomeType
		}, function(eI) {
			aSr(), 2 !== eI || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fW), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eI, u.v(26)
		})), sH.push(wE)
	}(sH = []), function(sH) {
		var wE;
		1 === aE.data.tIncomeType && ((wE = new rz).s2("Value"), wE.sD(new t9({
			eI: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ij(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), sH.push(wE))
	}(sH), function(sH) {
		var wE;
		2 === aE.data.tIncomeType && ((wE = new rz).s2("Data"), (aSo = new xu(0, 1, 0, 1)).y0(bD.tK.a7L(aE.data.tIncomeData, 4)), wE.sD(aSo), sH.push(wE))
	}(sH), sH))
}

function aRG() {
	var aRX, aRY, sH;
	this.show = function() {
		aRX.show(), this.resize()
	}, this.tX = function() {
		aRX.tX()
	}, this.resize = function() {
		aRX.resize(), aRY.resize()
	}, this.a5C = function(ej) {
		2 === ej && aRX.xd[0].sd()
	}, aRX = new xW(L(485), [new x("⬅️ " + L(43), function() {
		u.a4G()
	})]), aRY = new sF(aRX.xc, ((sH = []).push(function() {
		function aS1() {
			aVj.button.textContent = L(191), aWB.e.readOnly = !1, aWC.e.readOnly = !1, aS0.sg(1), aS0.button.style.color = bE.pO
		}
		var wE = new rz,
			aWA = (wE.s8(b1.z.aRv("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", wE.s2(L(501)), new t9({
				value: bm.buffer.data[105].value,
				eI: -1
			})),
			aWB = (aWA.e.readOnly = !0, wE.sD(aWA), wE.s2(L(398), "0.8em"), new t9(bm.buffer.data[148], 0, void 0, function(e) {
				aRz(bm.buffer.data[149].value, e.target.value)
			})),
			aWC = (wE.sD(aWB), wE.s2(L(402), "0.8em"), new t9(bm.buffer.data[149], 1, void 0, function(e) {
				aRz(e.target.value, bm.buffer.data[148].value)
			})),
			aVj = (wE.sD(aWC), new x(L(191), function(e) {
				return e.textContent === L(191) ? (e.textContent = L(192), aWB.e.readOnly = !0, aWC.e.readOnly = !0, aS0.sg(0), aS0.button.style.color = bE.qP, bm.qq.qr(149, aWC.e.value), aRz(bm.buffer.data[149].value, bm
					.buffer.data[148].value)) : aS1(), !0
			})),
			aS0 = (wE.sD(new tj([aVj.button])), new x(L(14), function(e) {
				return aWB.e.readOnly && b1.z.ef(0) && (bD.sM.xP(e), aS1(), b1.aIh.aIi({
					action: 0,
					uX: bm.buffer.data[148].value,
					value: parseInt(bm.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			s5 = wE.s4(),
			aRz = (wE.s4(L(502)).style.fontWeight = "bold", function(g1, s3) {
				s5.innerHTML = u.z.aS3(g1, bm.buffer.data[105].value, s3)
			});
		return wE.sD(new tj([aS0.button])), aRz(bm.buffer.data[149].value, bm.buffer.data[148].value), wE
	}()), sH))
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
	var aCW, aWE, aWF, aWG, aWD = !1;

	function aWH() {
		aWD = !0, aCW = -1, aWE = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aWE[aC] = !1;
		var a0W = Math.floor(1 + .02 * i.min);
		aWF = new Array(4), (aWG = new Array(4))[1] = aWG[3] = aWF[0] = aWF[2] = 0, aWG[0] = aWF[3] = -a0W, aWF[1] = aWG[2] = a0W
	}

	function aWI() {
		if (-1 !== aCW)
			if (0 !== aE.a38 && aI.oD()) {
				for (var aWJ = !1, aC = 3; 0 <= aC; aC--) aWE[aC] && (aWJ = !0, jD += aWF[aC], jE += aWG[aC], ag.a4e(aWF[aC], aWG[aC]), aT.aCC());
				aWJ ? bi.ds = !0 : at.o3()
			} else at.o3()
	}
	this.a5A = function(eI) {
		0 !== aE.a38 && aI.oD() && (aWD || aWH(), aWE[eI] = !0, -1 === aCW) && (aCW = setInterval(aWI, 20), aWI())
	}, this.a5D = function(eI) {
		if (0 !== aE.a38 && (aWD || aWH(), aWE[eI] = !1, -1 !== aCW)) {
			for (var aWJ = !1, aC = 3; 0 <= aC; aC--) aWJ = aWJ || aWE[aC];
			aWJ || this.o3()
		}
	}, this.o3 = function() {
		if (aWD && -1 !== aCW) {
			for (var aC = 3; 0 <= aC; aC--) aWE[aC] = !1;
			clearInterval(aCW), aCW = -1
		}
	}
}

function cn() {
	this.z = new aWK, this.nC = new aWL, this.qo = new aWM, this.aGm = new aWN, this.eg = new aWO, this.aIh = new aWP, this.rT = new aWQ, this.aUA = new aWR, this.a9h = new aWS, this.aWT = new aWU, this.aWV = new aWW, this.aWX = new aWY, this.aWZ =
		new aWa, this.dk = function() {
			this.z.dk()
		}
}

function aWK() {
	var aWc, aWd;
	this.aJb = 4, this.aWb = null, this.a4P = 0, this.f7 = 0;

	function aWm() {
		return 0 === aa.aJX ? m.e5 ? 1 : 0 : aa.aJX - 1
	}

	function aWp(oN, a4M, aWo) {
		aWd[oN].aWD = !0, aWi(oN), aWc[oN] = new aWs, aWc[oN].dk(oN, a4M, aWo)
	}

	function aWq(aC) {
		return aWd[aC].aWD && aWc[aC].aWq()
	}

	function aWi(oN) {
		aWd[oN].eZ = bi.eZ, aWd[oN].aWf = !1
	}
	this.dk = function() {
		this.aWb = new Array(this.aJb), this.aWb[0] = "territorial.io", this.aWb[1] = "1.territorial.io", this.aWb[2] = "4.territorial.io", this.aWb[3] = "5.territorial.io", aWc = new Array(this.aJb), aWd = new Array(this.aJb);
		for (var aC = this.aJb - 1; 0 <= aC; aC--) aWd[aC] = {
			aWD: !1,
			eZ: 0,
			aWf: !1
		};
		this.aJc(0, 0, 0)
	}, this.aWg = function(aC) {
		return aWc[aC]
	}, this.ee = function() {
		for (var aC = this.aJb - 1; 0 <= aC; aC--) this.ef(aC) && bi.eZ > aWd[aC].eZ + 15e3 && (b1.qo.aWh(aC, aWd[aC].aWf), aWi(aC));
		!this.ef(0) && bi.eZ > aWd[0].eZ + 8e3 && (aWd[0].eZ = bi.eZ, this.aJc(0, 0, 0))
	}, this.aU7 = function(id) {
		return this.aJc(0, id, 0) && this.aWj(0)
	}, this.aWk = function(aWl) {
		return aWl ? aa.aJY : aWm()
	}, this.a3Y = function() {
		return aWm() ? "game.territorial.io" : "territorial.io"
	}, this.aRv = function(aWn) {
		aWn = this.a3Y() + aWn;
		return "<a href='https://" + aWn + "' target='_blank'>" + aWn + "</a>"
	}, this.aJc = function(oN, a4M, aWl) {
		aWl = this.aWk(aWl);
		if (aWd[oN].aWD) {
			if (aWc[oN].aWq()) return aWc[oN].aWr(a4M), aWc[oN].ef();
			aWc[oN].tX()
		}
		return aWp(oN, a4M, aWl), !1
	}, this.aWt = function(oN, a4M) {
		console.log("Connection to Server " + oN), b1.eg.aWu(oN)
	}, this.aWj = function(aC) {
		return this.ef(aC) && aWc[aC].aWj()
	}, this.aWv = function(aC) {
		aWc[aC].aWv()
	}, this.ef = function(aC) {
		return aWd[aC].aWD && aWc[aC].ef()
	}, this.send = function(oN, aD) {
		0 !== oN && aWi(oN), aWc[oN].send(aD)
	}, __fx.customLobby.setSendFunction(this.send), this.a4v = function(oN) {
		8 === ab.a4H() && (aWd[oN].aWf = !0, b1.nC.aWw = !0)
	}, this.close = function(oN, aWx) {
		aWq(oN) && aWc[oN].close(aWx)
	}, this.aWy = function(oN, aWx) {
		p.a4T(aWx), aWq(oN) && aWc[oN].close(aWx)
	}, this.a4U = function(aWx) {
		for (var aC = this.aJb - 1; 0 <= aC; aC--) this.close(aC, aWx)
	}, this.aWz = function(oN, aWx) {
		for (var aC = this.aJb - 1; 0 <= aC; aC--) aC !== oN && this.close(aC, aWx)
	}, this.a7t = function() {
		0 === this.a4P && (aE.lE || aE.hi) || this.close(this.a4P, 3246)
	}, this.aX0 = function(oN, e) {
		aWc[oN].tX(), p.a4E(oN, e.code)
	}
}

function aWL() {
	this.aWw = !1, this.ee = function() {
		bi.kr() % 250 != 249 || aE.hi || (b1.eg.aX1(+(this.aWw && ah.nU[aE.fJ]), am.lQ + bQ.z.mk), this.aWw = !1)
	}
}

function aWS() {
	this.aX3 = function(oN, aD) {
		bK.dk(aD), 0 === bK.size ? b1.z.aWy(oN, 3205) : __fx.customLobby.isCustomMessage(aD) || ((0 === bK.rU(1) ? function(oN) {
			var aX7 = bK.rU(6);
			0 === aX7 ? function(oN) {
					if (0 === oN && 8 !== ab.a4H()) {
						u.z.aVN();
						for (var aXO = bK.rU(12), aXP = bK.rU(6), h = new Array(aXO), aC = 0; aC < aXO; aC++) h[aC] = bK.rU(aXP);
						aU.aCc(h)
					}
				}(oN) : 2 === aX7 ? b1.aWT.aX9(oN) : 3 === aX7 || 4 === aX7 ? ay.dk() : 5 === aX7 ? b1.aWV.aXA() : 9 === aX7 ? b1.aWV.aXB(oN) : 10 === aX7 ? b1.aWX.aXC() : 11 === aX7 ? b1.aWV.aXD(oN) : 12 === aX7 ? b1.aWX.aXE() :
				13 === aX7 ? b1.aWZ.aXF() : 14 === aX7 ? b1.aWZ.aXG() : 15 === aX7 ? b1.aWV.aXH() : 16 === aX7 ? b1.aWT.aXI(oN) : 17 === aX7 ? b1.aWT.aXJ(oN) : 19 === aX7 ? b1.aWT.aXK(oN) : 20 === aX7 ? b1.aWV.aXL(oN) : 21 !== aX7 &&
				22 !== aX7 && (23 === aX7 ? b1.aWV.aXM(oN) : 24 === aX7 && b1.aWT.aXN(oN))
		} : function(oN) {
			if (8 !== ab.a4H() && !ay.aK4()) return;
			if (oN !== b1.z.a4P) b1.z.aWy(oN, 3244);
			else if (0 === bK.rU(1)) bi.a3I.aXQ(bK.aD);
			else {
				var aC, oN = bK.rU(2);
				if (0 === oN) {
					var r5, qo = bK.rU(9);
					0 !== ah.nU[qo] && 0 !== ah.nU[aE.fJ] && (r5 = bK.rU(10), aO.r4(qo, aE.fJ, r5), ag.rv(qo, 1, r5))
				} else if (1 === oN) ! function() {
					var qo = bK.rU(9);
					0 !== ah.nU[qo] && 0 !== ah.nU[aE.fJ] && b6.aOS(0, [qo], !0) && aO.rM(qo, 1)
				}();
				else if (2 === oN) ! function() {
					var qo = bK.rU(9),
						target = bK.rU(9);
					0 !== ah.nU[qo] && 0 !== ah.nU[target] && 0 !== ah.nU[aE.fJ] && b6.aOS(1, [qo], !0) && (ag.rv(qo, 3, 96), ag.rv(target, 4, 96), aO.a9n(qo, target))
				}();
				else if (m.aA && !m.aB) {
					var fZ = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fZ = Math.min(bB.qk.rW.length, 540), aC = 0; aC < fZ; aC++) bG.aXW(32, bB.qk.rW[aC]);
					b1.z.send(b1.z.a4P, bG.aD)
				}
			}
		})(oN), bi.aX6())
	}
}

function aWY() {
	this.aXC = function() {
		bm.z.yg(), bm.qq.qr(105, bI.f0.ub(bI.f0.uc(5))), bm.qq.qr(106, bI.f0.ub(bI.f0.uc(15))), bm.qq.qr(109, 0), bm.qq.qr(108, bm.buffer.data[109].value), bm.qq.qr(111, bm.buffer.data[109].value + 1), bm.qq.qr(107, 0), bm.qq.qr(110, "")
	}, this.aXE = function() {
		var data;
		bK.size < bG.aXX(29) ? b1.z.aWy(0, 3254) : ((data = {
			uY: bK.rU(30),
			yu: bK.rU(16),
			yv: bK.rU(30),
			yw: bK.rU(30),
			yx: bK.rU(30),
			yy: bK.aXY(32),
			username: bJ.zB.zS(5),
			yz: bJ.zB.zS(3),
			z0: bJ.zB.zS(3),
			z1: bK.aXY(32),
			z2: bK.aXY(32),
			z3: bK.rU(30),
			z4: bK.aXY(32),
			z5: bK.aXY(32),
			z6: bK.aXY(32),
			z7: bK.aXY(32),
			aSD: bK.aXY(32),
			aSE: bK.aXY(30),
			aSc: bK.aXY(32),
			aSd: bJ.zB.zS(3),
			aSW: bK.aXY(2),
			aSY: bK.aXY(10),
			aSU: bJ.zB.zS(8),
			aSX: bK.aXY(5),
			aRx: bK.rU(30),
			aSA: bK.rU(30),
			a3b: bK.aXY(32),
			aSI: bK.rU(3),
			aSH: bK.rU(8),
			aSB: bK.rU(30),
			aSC: bK.aXY(32),
			aSG: bK.rU(1),
			aSQ: bJ.zB.zS(6),
			aSJ: bK.rU(1),
			aSK: bK.rU(1),
			aSL: bK.rU(1),
			aS5: bK.rU(30),
			aSe: bK.rU(1),
			aSf: bK.rU(1)
		}).aSe && (data.aSg = bK.aXY(32), data.aSh = bK.rU(30), data.aSi = bK.rU(30), data.aSj = bK.rU(1)), 8 === u.uZ && (25 === u.a4L().aU6 ? (data.aRZ = !0, u.z.aRD = data, u.a4L().aFV(25, !1)) : (data.aRZ = !1, bm.qq.qr(160, +(data
			.aSe && data.aSj)), data.uX = bm.buffer.data[105].value, u.z.aRA = data, bm.qq.yt(data), u.a4L().aFV(16, !0))))
	}
}

function aWa() {
	this.aXF = function() {
		var aC;
		if (bK.size < bG.aXX(23)) b1.z.aWy(0, 3259);
		else {
			var uq = bK.rU(6),
				fZ = bK.rU(10),
				data = [];
			if (9 === uq || 10 === uq || 11 === uq || 13 === uq) {
				for (aC = 0; aC < fZ; aC++) data.push([bK.rU(30), bJ.zB.zS(5), bK.aXY(32), 0, bK.rU(30)]);
				8 === u.uZ && u.a4L().aFV(21, !0, {
					uq: uq,
					data: data
				})
			} else if (12 === uq) {
				for (aC = 0; aC < fZ; aC++) data.push([bK.rU(20), bK.rU(30), bK.rU(30), bK.aXY(32), bK.rU(30), bJ.zB.zS(5), bJ.zB.zS(5)]);
				8 === u.uZ && u.a4L().aFV(21, !0, {
					uq: uq,
					data: data
				})
			} else {
				var iW = bK.rU(16);
				if (bK.aXZ(39 + 16 * iW + fZ * (0 === uq ? 111 : 1 === uq ? 101 : 2 === uq || 3 === uq ? 127 : 212))) {
					if (0 === uq)
						for (aC = 0; aC < fZ; aC++) data.push([bK.rU(30), bJ.z9.zD(bK.rU(5)), bK.rU(16), bK.rU(30), bK.rU(30)]);
					else if (1 === uq)
						for (aC = 0; aC < fZ; aC++) data.push([bK.rU(16), bJ.z9.zD(bK.rU(3)), bK.rU(16), bJ.z9.zD(bK.rU(5)), bK.rU(31), bK.rU(30)]);
					else if (2 === uq || 3 === uq)
						for (aC = 0; aC < fZ; aC++) data.push([bK.rU(30), bJ.z9.zD(bK.rU(5)), bK.aXY(32), bK.rU(30), bK.rU(30)]);
					else
						for (aC = 0; aC < fZ; aC++) data.push([bK.rU(20), bK.rU(30), bK.rU(30), bK.rU(30), bK.rU(30), bK.aXY(32), bK.rU(30), bJ.z9.zD(bK.rU(5)), bJ.z9.zD(bK.rU(5))]);
					8 === u.uZ && u.a4L().aFV(21, !0, {
						uq: uq,
						data: data
					})
				} else b1.z.aWy(0, 3260)
			}
		}
	}, this.aXG = function() {
		if (bK.size < bG.aXX(29)) b1.z.aWy(0, 3265);
		else {
			var aXa = bK.rU(4),
				aXb = bK.rU(7),
				aXc = bK.rU(11);
			if (bK.aXZ(29 + 16 * aXb + 16 * aXc + 11 * aXa)) {
				for (var data = [], aC = 0; aC < aXa; aC++) {
					for (var a3q = bJ.z9.zD(bK.rU(3)), aXd = bK.rU(8), aTG = [], fs = 0; fs < aXd; fs++) aTG.push(bK.rU(16));
					data.push({
						name: "[" + a3q + "]",
						aTG: aTG
					})
				}
				8 === u.uZ && u.a4L().aFV(23, !0, data)
			} else b1.z.aWy(0, 3266)
		}
	}
}

function aWU() {
	function aXh() {
		var id = bK.rU(3);
		return 0 === id ? {
			id: id,
			uX: bK.rU(30),
			s: bq.aFw.aIH(bJ.zB.zS(7))
		} : 1 === id ? {
			id: id,
			uX: bK.rU(30),
			aHD: bK.rU(3),
			value: bK.rU(30),
			target: bK.rU(30)
		} : 2 === id ? {
			id: id,
			uX: bK.rU(30),
			aHD: bK.rU(3)
		} : 3 === id ? {
			id: id,
			uX: bK.rU(30),
			aHD: bK.rU(3),
			value: bK.rU(4),
			target: bK.rU(30)
		} : 4 === id ? {
			id: id,
			uX: bK.rU(30),
			aHD: bK.rU(3),
			target: bK.rU(30)
		} : 5 === id ? {
			id: id,
			aHD: bK.rU(6)
		} : 6 === id ? {
			id: id,
			value: bK.rU(17)
		} : null
	}
	this.aX9 = function(oN) {
		if (oN !== b1.z.f7) b1.z.close(oN, 3239);
		else if (6 !== ab.a4H()) b1.z.close(oN, 3271);
		else {
			bq.dk(), bq.z.vN = bK.rU(10), bq.sH.aGf();
			var playerCount = bK.rU(16);
			bq.wZ.wa = bK.rU(16);
			for (var fs = 0; fs < playerCount; fs++) bq.wZ.aGG(bK.rU(30), bJ.zB.zS(5), bK.rU(4), bK.rU(30), bK.rU(7), bK.rU(16), bK.rU(18), bK.rU(11), bK.rU(12), bK.rU(6));
			u.v(29), bq.z.aHd(!0)
		}
	}, this.aXI = function(oN) {
		if (oN !== b1.z.f7) b1.z.close(oN, 3239);
		else if (bq.f6) {
			bq.z.aHc[0] = bK.rU(20), bq.z.aHc[1] = bK.rU(20);
			for (var aXe = bK.rU(20), fs = 0; fs < aXe; fs++) {
				var id = bK.rU(3);
				0 === id ? bq.wZ.aGG(bK.rU(30), bJ.zB.zS(5), 0, 1234566, 127, 0, bK.rU(18), 0, bK.rU(12), 0) : 1 === id ? bq.wZ.aGW(bK.rU(16)) : 3 === id ? bq.wZ.aGV(bK.rU(16)) : 4 === id ? bq.wZ.aGN(bK.rU(16), bK.rU(4), bK.rU(30), bK.rU(7), bK
					.rU(16), bK.rU(11), bK.rU(18)) : 5 === id ? bq.wZ.aGP(bK.rU(16), bK.rU(1)) : 6 === id && bq.wZ.aGO(bK.rU(16), bK.rU(6))
			}
			if (bq.z.vN = bK.rU(10), bK.rU(13)) {
				var aVJ = bK.rU(10);
				if (aVJ) {
					for (var aFy = bq.z.aFy, a1s = (aFy.a4P = bK.rU(10), aFy.aH3 = bK.rU(10), aFy.fF = bK.rU(6), aFy.mapSeed = bK.rU(14), aFy.vz = bK.rU(4), aFy.wN = bK.rU(1), aFy.spawningSeed = bK.rU(14), new Array(aVJ)), aC = 0; aC < aVJ; aC++)
						a1s[aC] = bK.rU(16);
					if (bq.aFy.dt(a1s)) return
				}
				bq.wZ.aGZ();
				for (var aXg = new Array(bK.rU(16)), fs = 0; fs < aXg.length; fs++) aXg[fs] = bK.rU(16);
				bq.wZ.aGa(aXg)
			}
			bq.sH.aGf(), bq.z.aGw()
		} else b1.z.close(oN, 3251)
	}, this.aXN = function(oN) {
		oN === b1.z.f7 && bq.f6 && bq.sH.aGp(bK.rU(13))
	}, this.aXJ = function(oN) {
		if (oN !== b1.z.f7) b1.z.close(oN, 3272);
		else if (bq.f6) {
			for (var tN = bq.z.tN, wq = (bq.z.tO = bK.rU(20), bK.rU(6)), aC = 0; aC < wq; aC++) {
				var aJ3 = aXh();
				bq.tW.aJ2(aJ3), tN.push(aJ3)
			}
			bq.z.aHk()
		} else b1.z.close(oN, 3273)
	}, this.aXK = function(oN) {
		oN !== b1.z.f7 ? b1.z.close(oN, 3276) : bq.f6 ? bq.message.aGi(aXh()) : b1.z.close(oN, 3277)
	}
}

function aWW() {
	this.aXA = function() {
		for (var id = bK.rU(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.rU(8), bK.rU(8), bK.rU(8)]);
		var el = bJ.zB.zS(8);
		bX.eS.ei({
			id: id,
			colors: colors,
			el: el
		})
	}, this.aXL = function(oN) {
		var aXi = bK.rU(3),
			fc = bK.rU(5),
			fc = bl.aXj.aXk(fc, bK.rU(30), bK.rU(30), bK.rU(30));
		b1.eg.aXl(oN, fc, aXi, 0)
	}, this.aXB = function(oN) {
		this.aXL(oN), bm.qq.qr(183, bI.f0.ub(bI.f0.uc(15))), 0 === oN && 0 === bm.buffer.data[105].value.length ? b1.eg.eh(0) : b1.aIh.aXm(oN), 4 === b1.z.aWg(oN).aXn() ? 6 === ab.a4H() && b1.aGm.aJd(oN) : 5 !== b1.z.aWg(oN).aXn() || 8 !== ab
			.a4H() && 10 !== ab.a4H() || b1.qo.aK1()
	}, this.aXD = function(oN) {
		var id = bK.rU(6);
		1 === id ? (bm.qq.qr(160, bK.rU(30)), b1.z.aWv(oN), aU.aCY || b1.eg.eh(1), bA.aFR(), 8 === u.uZ && u.a4L().aUJ()) : 21 === id ? 8 === u.uZ && u.a4L().aFV(17) : 22 === id && (bm.qq.qr(106, bm.buffer.data[110].value), bm.qq.qr(110, ""),
			8 === u.uZ) && u.a4L().aFV(15)
	}, this.aXH = function() {
		var fZ = bK.rU(16),
			aXo = bK.rU(16);
		if (bK.aXZ(55 + 10 * fZ + 16 * aXo)) {
			for (var h = [], aC = 0; aC < fZ; aC++) h.push(bJ.z9.zD(bK.rU(10)));
			bA.aFU(h)
		} else b1.z.aWy(0, 3270)
	}, this.aXM = function(oN) {
		for (var aXi = bK.rU(3), fc = bK.rU(5), aXi = {
				aXi: aXi,
				ss: bl.aXj.aXk(fc, bK.rU(30), bK.rU(30), bK.rU(30))
			}, fc = bK.aXY(32), aXp = [], aC = 0; aC < 17; aC++) aXp.push(new Uint8Array(bK.rU(16)));
		for (aC = 0; aC < 17; aC++)
			for (var h = aXp[aC], fZ = h.length, iR = 0; iR < fZ; iR++) h[iR] = bK.aXY(8);
		bw.show(aXp, fc, oN, aXi)
	}
}

function aWM() {
	this.aWh = function(oN, aWf) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, aWf ? 1 : 0), bG.a9(3, 0 === aE.a38 ? bq.f6 ? 6 : 0 : aE.hi ? 1 : aE.lE ? 7 : aE.lC < 7 ? 2 : 8 === aE.lC ? 4 : 9 === aE.lC ? 5 : 3), b1.z.send(oN, bG.aD)
	}, this.aK1 = function() {
		bG.a8(58), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.f7), bG.a9(10, ay.aH3), bG.a9(9, ay.aJu), bG.a9(10, m.e7), bG.a9(14, m.dx), b1.z.send(b1.z.a4P, bG.aD)
	}, this.qp = function(fL) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fL), b1.z.send(b1.z.a4P, bG.aD)
	}, this.qs = function(jC, k3) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, jC), bG.a9(10, k3), b1.z.send(b1.z.a4P, bG.aD)
	}, this.qw = function(jC, qu) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, jC), bG.a9(9, qu), b1.z.send(b1.z.a4P, bG.aD)
	}, this.qy = function(jC, qx) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, jC), bG.a9(27, qx), b1.z.send(b1.z.a4P, bG.aD)
	}, this.r0 = function(jC, ns) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, jC), bG.a9(16, ns), b1.z.send(b1.z.a4P, bG.aD)
	}, this.r3 = function(k3) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, k3), b1.z.send(b1.z.a4P, bG.aD)
	}, this.r7 = function(eI) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eI), b1.z.send(b1.z.a4P, bG.aD)
	}, this.r9 = function(r8) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, r8), b1.z.send(b1.z.a4P, bG.aD)
	}, this.rB = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a4P, bG.aD)
	}, this.rC = function(jC, fL, k3) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, jC), bG.a9(10, k3), bG.a9(22, fL), b1.z.send(b1.z.a4P, bG.aD)
	}, this.rK = function(aXq, aXr) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, aXr), bG.a9(10, aXq), b1.z.send(b1.z.a4P, bG.aD)
	}, this.rN = function(a9h) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, a9h), b1.z.send(b1.z.a4P, bG.aD)
	}, this.rR = function(aXs, target) {
		var aC, fZ = aXs.length;
		for (bG.a8(14 + 9 * fZ), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fZ; aC++) bG.a9(9, aXs[aC]);
		b1.z.send(b1.z.a4P, bG.aD)
	}
}

function aWP() {
	this.aXt = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.eg.aXu(), b1.z.send(0, bG.aD)
	}, this.aXm = function(oN) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.f0.zP(bm.buffer.data[105].value, 5), bJ.f0.zP(bm.buffer.data[106].value, 15), b1.z.send(oN, bG.aD)
	}, this.aUK = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.f0.zP(bm.buffer.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aSS = function(a6x) {
		var fZ = a6x.s3.length;
		bG.a8(21 + 16 * fZ), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a6x.action), bG.a9(8, fZ), bI.z9.zO(a6x.s3), b1.z.send(0, bG.aD)
	}, this.aVk = function(yy, colors, aXw, el) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(yy, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var fs = 0; fs < 3; fs++) bH.a9(8, colors[aC][fs]);
		yy = bA.data.aFY(aXw.trim());
		bH.a9(8, -1 === yy ? 255 : yy), bI.zB.a2b(el.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.aXx())
	}, this.aS6 = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.f0.zP(data.uX, 5), b1.z.send(0, bG.aD)
	}, this.aIi = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.f0.zP(data.uX, 5), bG.aXW(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aWQ() {
	this.rS = function() {
		for (var fZ = aE.ku, a2x = bU.result.a2x, lp = a2x.length, a3j = (bG.a8(17 + 16 * fZ + 33 * lp), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, lp), bG.a9(1, +(2 === aE.a35)), bG.a9(1, aE.a3Q % 2), ah.a3j), aC = 0; aC < fZ; aC++) bG.a9(16, a3j[
		aC]);
		for (var hN = ah.hN, aC = 0; aC < lp; aC++) {
			var h7 = a2x[aC];
			bG.a9(9, h7), bG.a9(24, hN[h7])
		}
		b1.z.send(b1.z.a4P, bG.aD)
	}
}

function aWR() {
	this.aUB = function(uq, ur, us) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, uq), bG.a9(1, +(ur < 0)), bG.a9(1, +(us < 0)), bG.a9(30, Math.abs(ur)), bG.a9(30, Math.abs(us)), b1.z.send(0, bG.aD)
	}, this.aUC = function(uq, aUD, aUE) {
		bG.a8(18 + 16 * aUD.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, uq), b1.eg.aXy(aUD), bG.a9(30, aUE), b1.z.send(0, bG.aD)
	}, this.aUH = function(uq, aUD, aUE) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, uq), bJ.f0.zP(aUD, 5), bG.a9(30, aUE), b1.z.send(0, bG.aD)
	}, this.aUF = function(aTF, a3p) {
		for (var fZ = a3p.length, iW = 0, aC = 0; aC < fZ; aC++) iW += a3p[aC].length;
		for (bG.a8(21 + 3 * fZ + 16 * iW), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aTF), bG.a9(4, fZ), bG.a9(7, iW), aC = 0; aC < fZ; aC++) bG.a9(3, a3p[aC].length), bI.z9.zO(a3p[aC]);
		b1.z.send(0, bG.aD)
	}, this.aUG = function(aTF, ur, us) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aTF), bG.a9(1, +(ur < 0)), bG.a9(1, +(us < 0)), bG.a9(20, Math.abs(ur)), bG.a9(20, Math.abs(us)), b1.z.send(0, bG.aD)
	}
}

function aWN() {
	this.aJd = function(oN) {
		var username = bm.buffer.data[122].value.slice(0, 20),
			username = (bG.a8(22 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.e7), b1.eg.aXy(username), bD.color.a62(bm.z.yn()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.f7 = oN, b1.z.send(oN, bG.aD)
	}, this.aGn = function(aXz, a6x) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, aXz), 4 === aXz ? bH.a9(13, a6x) : 3 === aXz ? bI.zB.a2b(a6x, 7, bH) : 5 === aXz && (bH.a9(3, a6x.id), bH.a9(3, a6x.value), bH.a9(30, a6x.uX)), b1.z.send(b1.z.f7, bH.aXx())
	}
}

function aWO() {
	this.aWu = function(oN) {
		var aY6;
		bG.a8(55 + bl.aY0.rU()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.dx), bG.a9(4, a1.id), bG.a9(7, a1.e3), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), aY6 = bA.aFX(), bG.a9(8, aY6[0]), bG.a9(8, aY6[1]), bl.aY0
		.a2b(), b1.z.send(oN, bG.aD)
	}, this.aXl = function(oN, ss, aXi, aY2) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, aXi), bG.a9(30, ss), bG.a9(30, aY2), b1.z.send(oN, bG.aD)
	}, this.f8 = function(f3) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 6), bI.zB.a2b(f3, 16, bH), b1.z.send(b1.z.f7, bH.aXx())
	}, this.eh = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.x6 = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aFT = function(id, s3) {
		var fZ = Math.min(s3.length, 63);
		bG.a8(19 + 16 * fZ), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fZ), bI.z9.zO(s3), b1.z.send(0, bG.aD)
	}, this.aY3 = function(aVM, sE) {
		bG.a8(7 + 26 * sE.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < sE.length; aC++) bG.a9(16, sE[aC][0]), bG.a9(10, sE[aC][1]);
		b1.z.send(aVM, bG.aD)
	}, this.aX1 = function(aY4, aY5) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, aY4), bG.a9(12, aY5), b1.z.send(b1.z.a4P, bG.aD)
	}, this.aXy = function(username) {
		bG.a9(5, username.length), bI.z9.zO(username)
	}, this.p8 = function(p9, pA, oN, pow) {
		bG.a8(88), bG.a9(1, 0), bG.a9(6, 8), bG.a9(3, pow.aXi), bG.a9(30, pow.ss), bG.aXW(32, pA), bG.a9(16, p9), b1.z.send(oN, bG.aD)
	}
}

function aWs() {
	var aY7, aY8, b, aY9 = ["wss://", "/s50/", "/s51/", "/s52/"],
		aYA = 0;

	function aWt() {
		b1.z.aWt(aY7, aY8)
	}

	function aYD(e) {
		b1.a9h.aX3(aY7, new Uint8Array(e.data))
	}

	function aYE() {}

	function aX0(e) {
		b1.z.aX0(aY7, e)
	}
	this.dk = function(eI, a4M, aWo) {
		aY7 = eI, aY8 = a4M,
			function(aWo) {
				aWo = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : m.dy ? "ws://localhost:" + (7130 + aY7) + "/" : aWo ? aY9[0] + "game.territorial.io/x0" + aY7 + "/" : aY9[0] + b1.z.aWb[aY7] + aY9[1 + m.dw];
				(b = new WebSocket(aWo)).binaryType = "arraybuffer", b.onopen = aWt, b.onmessage = aYD, b.onclose = aX0, b.onerror = aYE
			}(aWo)
	}, this.aYC = function() {
		return b.readyState === b.CONNECTING
	}, this.ef = function() {
		return b.readyState === b.OPEN
	}, this.aWj = function() {
		return aYA
	}, this.aWv = function() {
		aYA = 1
	}, this.aWq = function() {
		return this.aYC() || this.ef()
	}, this.aWr = function(a4M) {
		aY8 = a4M
	}, this.aXn = function() {
		return aY8
	}, this.send = function(aD) {
		this.ef() && b.send(aD)
	}, this.close = function(aWx) {
		this.aWq() && (this.tX(), b.close(aWx))
	}, this.tX = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dQ() {
	var gap, aYF = !1,
		w0 = 0,
		j = 0,
		ue = 0,
		canvas = null,
		ou = null,
		a5c = null;

	function aYJ() {
		for (var aC = aE.a0L; 0 <= aC; aC--) a5c[aC] = 0;
		for (aC = am.lQ - 1; 0 <= aC; aC--) a5c[bj.fX[am.lV[aC]]] += ah.hN[am.lV[aC]];
		aYF = !0
	}

	function aYH() {
		for (var aYO, aYM = 0, fZ = 0, ej = Math.floor(j / 2), eH = Math.floor(ue / 2), aYN = 1.5 * Math.PI, aC = aE.a0L; 0 <= aC; aC--) fZ += a5c[aC], 0 === a5c[aC] && aYM++;
		if (aYF = !1, ou.clearRect(0, 0, j, j), 0 < fZ)
			if (aYM === aE.a0L) {
				for (aC = aE.a0L; 0 <= aC; aC--)
					if (0 < a5c[aC]) {
						! function(aC, ej, eH) {
							ou.fillStyle = bj.aYS[bj.lH[aC]], ou.beginPath(), ou.arc(ej, ej, eH, 0, 2 * Math.PI), ou.fill()
						}(aC, ej, eH);
						break
					}!
				function(ej) {
					var fontSize = ej / 3;
					ou.font = bD.sM.u7(1, fontSize), ou.fillStyle = bE.pO, ou.fillText("100%", ej, ej + .1 * fontSize)
				}(ej)
			} else {
				for (aC = 0; aC <= aE.a0L; aC++) 0 < a5c[aC] && (aYO = aYN + 2 * Math.PI * a5c[aC] / fZ, aYR(ou, bj.aYS[bj.lH[aC]], ej, eH, aYN, aYO), function(ej, eH, aYN, aYO) {
					var g1 = (aYO - aYN) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eH * Math.min(g1, .37);
					fontSize < 8 || (aYN = (aYN + aYO) / 2, aYO = (__fx.settings.detailedTeamPercentage ? (100 * g1).toFixed(2) : Math.floor(100 * g1 + .5)) + "%", eH *= .525 - Math.max(.6 * (g1 - .7), 0), ou.font = bD.sM.u7(1, fontSize), ou
						.fillStyle = bE.pO, ou.fillText(aYO, ej + Math.cos(aYN) * eH, ej + Math.cos(aYN + 1.5 * Math.PI) * eH))
				}(ej, eH, aYN, aYO), 0 !== aC && aYU(ou, ej, eH, aYN), aYN = aYO);
				aYU(ou, ej, eH, 1.5 * Math.PI)
			} aYV(ou, ej, eH)
	}

	function aYR(ib, color, ej, eH, aYN, aYO) {
		ib.fillStyle = color, ib.beginPath(), ib.arc(ej, ej, eH, aYN, aYO), ib.lineTo(ej, ej), ib.fill()
	}

	function aYU(ib, ej, eH, aYW) {
		ib.beginPath(), ib.moveTo(ej, ej), ib.lineTo(ej + Math.cos(aYW) * eH, ej + Math.cos(aYW + 1.5 * Math.PI) * eH), ib.stroke()
	}

	function aYV(ib, ej, eH) {
		ib.beginPath(), ib.arc(ej, ej, eH, 0, 2 * Math.PI), ib.stroke()
	}
	this.dk = function() {
		if (aE.iT) {
			w0 = 0, a5c = new Uint32Array(aE.a0L + 1);
			for (var aC = aE.a0L; 0 <= aC; aC--) a5c[aC] = 0;
			for (aC = am.lQ - 1; 0 <= aC; aC--) a5c[bj.fX[am.lV[aC]]] += 1;
			this.resize()
		} else a5c = ou = canvas = null
	}, this.aB6 = function() {
		return j
	}, this.resize = function() {
		aE.iT && (j = Math.floor(.95 * (a1.a2.ik() && !aE.ny ? .18 * i.min : .13 * i.il)), j = (j *= 1 + (.5 + .2 * a1.a2.ik()) * aE.ny) + j % 2, gap = Math.max(1, .015 * j), ue = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (ou = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, ou.strokeStyle = bE.pO, bD.sM.textAlign(ou, 1), bD.sM.textBaseline(ou, 1), aYH())
	}, this.lR = function(aYI) {
		aYI && aYJ();
		var ea, aYI = this.lT();
		return bj.lH[aYI] || (aYI = function() {
			for (var lS = -1, aC = aE.a0L; 1 <= aC; aC--)(-1 === lS || a5c[aC] > a5c[lS]) && (lS = aC);
			return lS
		}(), ea = ah.hN[mV[0]], -1 !== aYI && a5c[aYI] > ea) ? a5c[aYI] : ea
	}, this.a42 = function() {
		return w0 = 31, this.ee(), this.lT()
	}, this.lT = function() {
		for (var lS = 0, aC = aE.a0L; 0 < aC; aC--) a5c[aC] > a5c[lS] && (lS = aC);
		return lS
	}, this.kv = function(aYL) {
		for (var h2 = 0, lV = am.lV, fX = bj.fX, fZ = am.lQ, gD = bR.gD, aC = 0; aC < fZ; aC++) {
			var h7 = lV[aC];
			fX[h7] === aYL && (gD[h2++] = h7)
		}
		bR.g4[0] = h2
	}, this.lU = function(aYL) {
		for (var h2 = 0, lV = am.lV, fX = bj.fX, fZ = am.lQ, gD = bR.gD, aC = 0; aC < fZ; aC++) {
			var h7 = lV[aC];
			fX[h7] !== aYL && (gD[h2++] = h7)
		}
		bR.g4[0] = h2
	}, this.a6U = function() {
		for (var h2 = 0, aC = aE.a0L; 0 <= aC; aC--) h2 += 0 < a5c[aC];
		return h2
	}, this.ee = function() {
		aE.iT && 32 <= ++w0 && (w0 = 0, aYJ())
	}, this.nH = function() {
		aE.iT && aYF && aYH()
	}, this.wR = function(ib, h2, size) {
		var ej = size >> 1,
			eH = Math.floor(.4 * size),
			aYN = 1.5 * Math.PI;
		ib.clearRect(0, 0, size, size), ib.lineWidth = .042 * size, ib.strokeStyle = bE.pO;
		for (var aC = 0; aC < h2; aC++) {
			var aYO = aYN + 2 * Math.PI / h2;
			aYR(ib, bj.aYS[aC + 1], ej, eH, aYN, aYO), 0 !== aC && aYU(ib, ej, eH, aYN), aYN = aYO
		}
		aYU(ib, ej, eH, 1.5 * Math.PI), aYV(ib, ej, eH)
	}, this.xl = function() {
		aE.iT && (aE.ny ? xm.drawImage(canvas, bf.gap, bf.gap) : xm.drawImage(canvas, bf.gap, aB5 + 2 * bf.gap))
	}
}

function dg() {
	function aYc(fg, fZ, fi, a2l, aCN, fz) {
		if (!(fi < 1 || aCN < fi))
			for (var aC = 0; aC <= fZ; aC++) {
				var fD = bP.jG(fg, fi);
				if (a2l(fD)) return fD >> 2;
				fg += fz
			}
		return -1
	}

	function aYg(fi, fZ, fg, a2l, aYa, fz) {
		if (!(fg < 1 || aYa < fg)) {
			fZ = Math.max(fZ, 0);
			for (var aC = 0; aC <= fZ; aC++) {
				var fD = bP.jG(fg, fi);
				if (a2l(fD)) return fD >> 2;
				fi += fz
			}
		}
		return -1
	}

	function aYk(j3, j4, aYX) {
		return -1 !== j4 && (-1 === j3 || bP.j5(j4, aYX) < bP.j5(j3, aYX)) ? j4 : j3
	}
	this.hy = function(aYX) {
		return this.a3C(aYX, function(fD) {
			return ad.fU(fD)
		})
	}, this.i4 = function(aYX) {
		return this.a3C(aYX, function(fD) {
			return ad.aKk(fD, aE.fJ)
		})
	}, this.a3C = function(aYX, a2l) {
		return function(aYX, aYY, a2l) {
			for (var ho = bP.fh(aYX), hq = bP.fj(aYX), aYa = bV.fk - 2, aCN = bV.fl - 2, aYb = -1, fc = 0; fc < aYY; fc++) {
				var aCM = Math.max(ho - fc, 1),
					aPO = Math.max(hq - fc, 1),
					a0w = Math.min(ho + fc, aYa),
					a0v = Math.min(hq + fc, aCN),
					j3 = aYc(ho, a0w - ho, hq - fc, a2l, aCN, 1),
					j4 = aYc(ho - 1, ho - aCM - 1, hq - fc, a2l, aCN, -1),
					a0w = aYc(ho, a0w - ho, hq + fc, a2l, aCN, 1),
					aCM = aYc(ho - 1, ho - aCM - 1, hq + fc, a2l, aCN, -1),
					aYf = aYg(hq, a0v - hq - 1, ho - fc, a2l, aYa, 1),
					aYh = aYg(hq - 1, hq - aPO - 2, ho - fc, a2l, aYa, -1),
					a0v = aYg(hq, a0v - hq - 1, ho + fc, a2l, aYa, 1),
					aPO = aYg(hq - 1, hq - aPO - 2, ho + fc, a2l, aYa, -1);
				if (aYb = aYk(aYb, j3, aYX), aYb = aYk(aYb, j4, aYX), aYb = aYk(aYb, a0w, aYX), aYb = aYk(aYb, aCM, aYX), aYb = aYk(aYb, aYf, aYX), aYb = aYk(aYb, aYh, aYX), aYb = aYk(aYb, a0v, aYX), 0 <= (aYb = aYk(aYb, aPO, aYX)) && fc *
					fc >= bP.j5(aYb, aYX)) return aYb
			}
			return -1
		}(aYX, bP.ii(), a2l)
	}
}

function d9() {
	function aYm(key) {
		var aVm;
		return "undefined" == typeof URLSearchParams || (aVm = window.location.search, "string" != typeof(aVm = new URLSearchParams(aVm).get(key))) || aVm.length < 1 ? null : bJ.f0.zI(aVm, 5)
	}
	this.dt = function() {
		if (0 !== a1.id) return !1;
		if (! function() {
				var value = aYm("account");
				if (!value && !(value = aYm("a"))) return void bL.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (bL.clear(), u.v(8, u.uZ, new ua(1e3, {
					action: 0,
					uX: value,
					uY: 0
				})), !0) : (bL.clear(), !1)
			}()) {
			var value = aYm("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			u.v(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a4C = new URL(window.location.href);
		a4C.search = "";
		try {
			return history.replaceState(null, "", a4C.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aSl = function(key, value) {
		if (0 === a1.id) try {
			var a4C = new URL(window.location.href),
				h7 = a4C.searchParams;
			h7.set(key, value), a4C.search = h7.toString(), history.replaceState(null, "", a4C.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function co() {
	var aYo, h;
	this.dk = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.g0(32768 * aC, 100);
		this.a7i(0)
	}, this.value = function(h7) {
		return h[h7]
	}, this.aP0 = function() {
		return bO.g0(aYo - 1, 2)
	}, this.a7i = function(aOs) {
		aYo = 2 * aOs % 32768 + 1
	}, this.random = function() {
		return aYo = 167 * aYo % 32768
	}, this.kB = function(nP) {
		return bO.g0(nP * this.random(), 32768)
	}, this.km = function(h7) {
		return 0 !== h7 && this.random() < this.value(h7)
	}, this.jX = function(fs, ft) {
		return fs + this.kB(ft - fs)
	}
}

function d5() {
	this.rg = new aYp, this.a7s = new aYq, this.aMU = new aYr, this.dk = function() {
		aE.hi || this.rg.dk()
	}, this.ee = function() {
		aE.hi || (this.rg.ee(), 3 !== u.uZ) || bi.kr() % 15 != 5 && 2 !== aE.a38 || u.a4L().aVn()
	}, __fx.replay.restartReplay = () => this.aVq(), this.aVq = function() {
		var aYt = 0 !== aE.a38,
			aYu = aE.a7e;
		aYt || ab.aJn(), aE.a7c.a81(), aE.data.canvas = null, b1.z.close(b1.z.a4P, 3257), b1.z.a4P = 0, aE.data.isReplay = 1, aE.a7g(), aYt && (aE.a7e = aYu)
	}, this.aVp = function(s3) {
		var aC = s3.indexOf("=");
		return 0 <= aC ? s3.substring(aC + 1) : s3
	}, this.aVo = function(s3) {
		return s3
	}, __fx.replayHistory.load = saved => {
		saved = bC.aVp(saved), bC.aMU.zS(saved) && bC.aVq()
	}
}

function aYp() {
	this.aYv = null, this.aYw = null, this.aYx = null, this.aYy = null, this.aYz = null, this.aZ0 = null, this.a7r = "";
	var aZ1 = 0;
	this.dk = function() {
		this.aYv = [], this.aYw = [], this.aYx = [], this.aYy = [], this.aYz = [0], this.aZ0 = [0], aZ1 = 0, this.a7r = ""
	}, this.rh = function(id, gI, gK, gM) {
		aE.hi || 2 === aE.a38 || (0 === this.aYz[aZ1] && (this.aZ0[aZ1] ? (this.aYz.push(1), this.aZ0.push(0), aZ1++) : this.aYz[aZ1] = 1), this.aYv.push(id), this.aYw.push(gI), this.aYx.push(void 0 === gK ? 0 : gK), this.aYy.push(void 0 === gM ?
			0 : gM), this.aZ0[aZ1]++)
	}, this.ee = function() {
		0 === this.aYz[aZ1] ? this.aZ0[aZ1]++ : (this.aYz.push(0), this.aZ0.push(0), aZ1++)
	}
}

function aYr() {
	var aZ2 = 0;

	function aZ6(s3, id) {
		console.log(s3), aZ2 || (id ? 1 === id ? aO.a9A = L(504) + ": " + s3 : u.v(4, 3, new w(L(505), s3, 1)) : u.v(4, 3, new w("⚠️ " + L(503), s3, 1)))
	}
	this.zS = function(s3, aZ3) {
		var iv, sE;
		return aZ2 = aZ3, bJ.f0.zL(bJ.f0.zJ(bJ.f0.zH(s3))), aO.a9A = "", !! function() {
			if (bK.size < 10) aZ6("File Too Small");
			else {
				var aZ8 = bK.rU(12),
					s = (aZ8 !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, aZ6(s = (s += "   Found: " + aZ8) + ("   Compatible at " + b1.z.a3Y() + "/" + aZ8), 1)), bK.rU(12)),
					aZ9 = bK.rU(31);
				if (aZ9 !== bK.size) aZ6("Size Error: Stated Size " + aZ9 + " Actual Size " + bK.size);
				else if (function(k, aZ8) {
						for (var h7 = bK.aD, fZ = bK.size, aY5 = aZ8, aC = 3; aC < fZ; aC++) aY5 = aY5 + h7[aC] & 4095;
						return aY5 === k || (aZ6("Hash Error: " + aY5 + " " + k + " " + fZ), !1)
					}(s, aZ8)) return 1
			}
			return
		}() && (iv = bK, (sE = aE.data = new a7b).mapType = iv.rU(2), sE.mapProceduralIndex = iv.rU(8), sE.mapRealisticIndex = iv.rU(8), sE.mapSeed = iv.rU(14), sE.mapName = iv.aZB(5), 2 === sE.mapType && iv.aZC(), sE.passableWater = iv.rU(
			1), sE.passableMountains = iv.rU(1), sE.playerCount = iv.rU(10), sE.humanCount = iv.rU(10), sE.selectedPlayer = iv.rU(9), sE.gameMode = iv.rU(1), sE.playerMode = iv.rU(2), sE.battleRoyaleMode = iv.rU(2), sE.numberTeams = iv.rU(4),
			sE.isZombieMode = iv.rU(1), sE.isContest = iv.rU(1), sE.isReplay = iv.rU(1), sE.elo = iv.aZD(2, 14, 2), sE.colorsType = iv.rU(1), sE.colorsPersonalized = iv.rU(1), sE.colorsData = iv.aZD(10, 18, 512), sE.selectableColor = iv.rU(
			1), sE.teamPlayerCount = iv.aZD(4, 10, 9), sE.neutralBots = iv.rU(1), sE.botDifficultyType = iv.rU(2), sE.botDifficultyValue = iv.rU(4), sE.botDifficultyTeam = iv.aZD(4, 4, 9), sE.botDifficultyData = iv.aZD(10, 4, 512), sE
			.spawningType = iv.rU(2), sE.spawningSeed = iv.rU(14), sE.spawningData = iv.aZD(11, 12, 1024), sE.selectableSpawn = iv.rU(1), sE.playerNamesType = iv.rU(2), sE.playerNamesData = iv.aZE(10, 5, 512), sE.selectableName = iv.rU(1), sE
			.aIncomeType = iv.rU(2), sE.aIncomeValue = iv.rU(8), sE.aIncomeData = iv.aZD(10, 8, 512), sE.tIncomeType = iv.rU(2), sE.tIncomeValue = iv.rU(8), sE.tIncomeData = iv.aZD(10, 8, 512), sE.iIncomeType = iv.rU(2), sE.iIncomeValue = iv
			.rU(8), sE.iIncomeData = iv.aZD(10, 8, 512), sE.sResourcesType = iv.rU(2), sE.sResourcesValue = iv.rU(11), sE.sResourcesData = iv.aZD(10, 11, 512), sE.a7z = iv.aZD(10, 30, 0), !! function() {
				var iv = bK,
					zT = iv.rU(5),
					aZF = iv.rU(30),
					aZG = iv.rU(30);
				if (aZF + aZG > 8 * iv.size) return void aZ6("Corrupted File");
				return function(fZ) {
						var aZJ = new Uint8Array(fZ),
							aZK = new Uint16Array(fZ),
							aZL = new Uint32Array(fZ),
							aZM = new Uint32Array(fZ);
						bC.rg.aYv = aZJ, bC.rg.aYw = aZK, bC.rg.aYx = aZL, bC.rg.aYy = aZM;
						for (var aC = 0; aC < fZ; aC++) {
							var id = bK.rU(4);
							aZJ[aC] = id, aZK[aC] = bK.rU(9), 0 === id ? aZL[aC] = bK.rU(22) : 1 === id ? (aZL[aC] = bK.rU(10), aZM[aC] = bK.rU(10)) : 2 === id ? (aZL[aC] = bK.rU(10), aZM[aC] = bK.rU(9)) : 3 === id ? (aZL[aC] = bK.rU(10),
								aZM[aC] = bK.rU(27)) : 4 === id ? (aZL[aC] = bK.rU(10), aZM[aC] = bK.rU(16)) : 5 === id || 6 === id ? aZL[aC] = bK.rU(10) : 7 === id ? aZL[aC] = bK.rU(1) : 10 === id && (aZL[aC] = bK.rU(20), aZM[aC] = bK
								.rU(22))
						}
					}(aZF),
					function(fZ, zT) {
						var aYz = new Uint8Array(fZ),
							aZ0 = new Array(fZ);
						aZ0.fill(0), bC.rg.aYz = aYz, bC.rg.aZ0 = aZ0;
						for (var aC = 0; aC < fZ; aC++) aYz[aC] = bK.rU(1), aZ0[aC] = bK.rU(zT)
					}(aZG, zT), 1
			}()) && (bK.eI < 8 * bK.size - 13 || bK.eI > 8 * bK.size ? (aZ6("Out Of Bounds Error: " + bK.eI + " " + 8 * bK.size), !1) : (bC.rg.a7r = s3, 2 !== aE.data.mapType || (aZ6("Load base64 image...", 2), aZ3)))
	}, this.aMV = function(aLX, aZ7) {
		var a5x = document.createElement("canvas"),
			ib = a5x.getContext("2d");
		if (a5x.width = aLX.width, a5x.height = aLX.height, ib.drawImage(aLX, 0, 0), aE.data.canvas = a5x, aZ2 || aZ7) return aE.a38 ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aVq()
	}
}

function aYq() {
	this.a2b = function() {
		var zT = function() {
				for (var aZ0 = bC.rg.aZ0, fZ = aZ0.length, max = 0, aC = 0; aC < fZ; aC++) max = Math.max(max, aZ0[aC]);
				return zZ(Math.max(max, 1))
			}(),
			j = (sE = aE.data, (j = bH).dk(), j.a9(12, m.rVersion), j.eI += 43, j.a9(2, sE.mapType), j.a9(8, sE.mapProceduralIndex), j.a9(8, sE.mapRealisticIndex), j.a9(14, sE.mapSeed), j.aZT(sE.mapName, 5), 2 === sE.mapType && j.aZU(sE.canvas),
				j.a9(1, sE.passableWater), j.a9(1, sE.passableMountains), j.a9(10, sE.playerCount), j.a9(10, sE.humanCount), j.a9(9, sE.selectedPlayer), j.a9(1, sE.gameMode), j.a9(2, sE.playerMode), j.a9(2, sE.battleRoyaleMode), j.a9(4, sE
					.numberTeams), j.a9(1, sE.isZombieMode), j.a9(1, sE.isContest), j.a9(1, sE.isReplay), j.dr(sE.elo, 2, 14), j.a9(1, sE.colorsType), j.a9(1, sE.colorsPersonalized), j.dr(sE.colorsData, 10, 18), j.a9(1, sE.selectableColor), j.dr(
					sE.teamPlayerCount, 4, 10), j.a9(1, sE.neutralBots), j.a9(2, sE.botDifficultyType), j.a9(4, sE.botDifficultyValue), j.dr(sE.botDifficultyTeam, 4, 4), j.dr(sE.botDifficultyData, 10, 4), j.a9(2, sE.spawningType), j.a9(14, sE
					.spawningSeed), j.dr(sE.spawningData, 11, 12), j.a9(1, sE.selectableSpawn), j.a9(2, sE.playerNamesType), j.aZV(sE.playerNamesData, 10, 5), j.a9(1, sE.selectableName), j.a9(2, sE.aIncomeType), j.a9(8, sE.aIncomeValue), j.dr(sE
					.aIncomeData, 10, 8), j.a9(2, sE.tIncomeType), j.a9(8, sE.tIncomeValue), j.dr(sE.tIncomeData, 10, 8), j.a9(2, sE.iIncomeType), j.a9(8, sE.iIncomeValue), j.dr(sE.iIncomeData, 10, 8), j.a9(2, sE.sResourcesType), j.a9(11, sE
					.sResourcesValue), j.dr(sE.sResourcesData, 10, 11), j.dr(sE.a7z, 10, 30), ! function(zT) {
					var j = bH,
						aYv = bC.rg.aYv,
						gI = bC.rg.aYw,
						gK = bC.rg.aYx,
						gM = bC.rg.aYy,
						fZ = aYv.length;
					j.a9(5, zT), j.a9(30, fZ), j.a9(30, bC.rg.aZ0.length);
					for (var aC = 0; aC < fZ; aC++) {
						var ej = aYv[aC];
						j.a9(4, ej), j.a9(9, gI[aC]), 0 === ej ? j.a9(22, gK[aC]) : 1 === ej ? (j.a9(10, gK[aC]), j.a9(10, gM[aC])) : 2 === ej ? (j.a9(10, gK[aC]), j.a9(9, gM[aC])) : 3 === ej ? (j.a9(10, gK[aC]), j.a9(27, gM[aC])) : 4 === ej ? (j
							.a9(10, gK[aC]), j.a9(16, gM[aC])) : 5 === ej || 6 === ej ? j.a9(10, gK[aC]) : 7 === ej ? j.a9(1, gK[aC]) : 10 === ej && (j.a9(20, gK[aC]), j.a9(22, gM[aC]))
					}
				}(zT), ! function(zT) {
					for (var j = bH, aYz = bC.rg.aYz, aZ0 = bC.rg.aZ0, fZ = aYz.length, aC = 0; aC < fZ; aC++) j.a9(1, aYz[aC]), j.a9(zT, aZ0[aC])
				}(zT), bH.eI),
			sE = bO.g0(j - 1, 6) + 1,
			zT = (bG.aXX(6 * sE) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eI = 24, j.a9(31, j.h.length), j.eI = 12, j.a9(12, function() {
					for (var h = bH.h, fZ = h.length, aY5 = m.rVersion, aC = 3; aC < fZ; aC++) aY5 = aY5 + h[aC] & 4095;
					return aY5
				}())
			}(), bK.dk(bH.h), bI.f0.ub(bI.f0.uc(sE)));
		return bK.wr(), bH.dk(), zT
	}
}

function ct() {
	var ej, by = !1,
		aZX = !1,
		aZY = -1e4,
		aZZ = -1,
		aZa = 0;

	function resize(aZe) {
		ej = 0, ac.uz() && (aZc(aZe) || by) && (by = !1, bf.resize(), bZ.aF3.resize(), aZ.dk(), bb.dk(), aa.resize(), aU.resize(), aP.resize(), bw.resize(), u.resize(), 1 <= aE.a38 ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(),
			aO.resize(), aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aCC()) : (ab.aJp(), ab.aJq()), bi.ds = !0)
	}

	function aZb(g1) {
		return g1 && 128 < g1 ? Math.floor(g1) : 128
	}

	function aZc(aZe) {
		var j, k, aZg, ue, aBa;
		if (!(0 < i.uF)) return ue = aZb(document.documentElement.clientWidth), aBa = aZb(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = ue, k = aBa, aZg = 0 !== a1.id || j < k ?
			700 : 1200, aZg = Math.min(aZg / ((j + k) / 2), 1), aZg = 0 === bm.buffer.data[1].value ? 2 * aZg / 3 : Math.min(aZg + (bm.buffer.data[1].value - 1) * (1 - aZg) / 2, 1), i.l = (window.devicePixelRatio || 1) * aZg, __fx.hoveringTooltip
			.canvasPixelScale = i.l, aZe && !aZX ? (aZX = !0, u.removeChild(document.body, a4d)) : aZX && (aZX = !1, document.body.appendChild(a4d)), j = Math.floor(.5 + ue * i.l), k = Math.floor(.5 + aBa * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aEf(j, k), i.max = a9P(j, k), i.il = bO.g0(j + k, 2), i.xi = j / k, a4d.width = j, a4d.height = k, a4d.style.width = ue + "px", a4d.style.height = aBa + "px", aZZ = bi.eZ + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.il = 0, this.xi = 1, this.l = 1, this.uF = 0, this.dl = function() {
		this.j = aZb(document.documentElement.clientWidth) + 2, this.k = aZb(document.documentElement.clientHeight) + 2
	}, this.dk = function() {
		ej = 1, a4d = document.getElementById("canvasA"), 2 === a1.id && (a4d.style.webkitUserSelect = "none"), (xm = a4d.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aZc(0)
	}, this.ee = function() {
		50 <= ++ej && resize(0), -1 === aZZ || bi.eZ < aZZ || (aZZ = -1, 2e3 * ++aZa >= bi.eZ + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.dv = function(k9) {
		by = !0, resize(k9)
	}, this.a5I = function() {
		aZY + 1e3 > bi.eZ || (aZY = bi.eZ, resize(0))
	}
}

function dN() {
	this.aXj = new aZi, this.a3y = new aZj, this.aY0 = new aZk
}

function aZk() {
	var aZl = aZm(),
		aZn = aZo(),
		aZp = aZq();
	this.rU = function() {
		return 123
	}, this.a2b = function() {
		bJ.f0.zP(bm.buffer.data[183].value, 15), bG.a9(14, aZl), bG.a9(7, aZn), bG.a9(12, aZp)
	}
}

function aZm() {
	for (var ej = document.createElement("canvas"), ej = (ej.width = 24, ej.height = 24, ej.getContext("2d", {
			alpha: !1
		})), fc = (ej.fillStyle = "rgb(0,0,0)", ej.fillRect(0, 0, 24, 24), ej.font = "22px system-ui", ej.textBaseline = "middle", ej.textAlign = "center", ej.fillStyle = "rgb(255,255,255)", ej.fillText("Q", 12, 12), ej.getImageData(0, 0, 24, 24)
			.data), fZ = fc.length, lp = 0, aC = 0; aC < fZ; aC += 4) lp += fc[aC];
	return 16383 & lp
}

function aZo() {
	var fc = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fc + .5) / 15))
}

function aZq() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aZj() {
	this.a3z = function() {
		for (var h7, fZ = am.lQ, w1 = am.lV, a3j = ah.a3j, aBO = this.aLG(), aC = 0; aC < fZ; aC++) h7 = w1[aC], bD.gv.kH(h7) || (a3j[h7] = aBO);
		var rl = ah.rl,
			jx = ah.jx,
			jy = ah.jy,
			a3h = ah.a3h,
			fZ = aE.ku;
		for (aC = 0; aC < fZ; aC++)(0 === a3h[aC] || jy[aC] < 1 || 2 * rl[aC] > 3 * (jx[aC] + jy[aC])) && (a3j[aC] = 0);
		var a3w = 0;
		for (aC = 0; aC < fZ; aC++) a3w += 0 < a3j[aC];
		return a3w
	}, this.aLG = function() {
		return Math.min(65535, bi.kr())
	}
}

function aZi() {
	function aZu(h, g1, iR) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (g1 >> (aC + iR) % 30 & 1)) % 256
	}
	this.ee = function(aZr, aZs) {
		var h = new Uint8Array(256);
		return function(h, aZr, aZs) {
				var aC, aZw = 3 + (4 + aZr) % 32768,
					aZx = 12 + aZs % 32768,
					aZy = 17 + ((aZr & aZs) + (aZr | aZs) + aZr) % 32768;
				for (aC = 0; aC < 256; aC++) aZw = 1 + aZw * aZx % aZy, h[aC] = aZw % 256
			}(h, aZr, aZs), aZu(h, aZr, 2), aZu(h, aZs, 7),
			function(h) {
				var aC, g1, eI = 0;
				for (aC = 0; aC < 3e4; aC++) g1 = h[eI], h[eI] = (g1 + aC + h[(eI + aC) % 256]) % 256, eI = (g1 + aC + eI + (g1 & eI)) % 256
			}(h),
			function(h) {
				var aC, aBa = 1,
					vL = 1;
				for (aC = 0; aC < 256; aC += 2) aBa = (1 + aBa) * (h[aC] + 1) % 1073741824, vL = (1 + vL) * (h[aC + 1] + 1) % 1073741824;
				return [aBa, vL]
			}(h)
	}, this.aXk = function(aZz, aa0, aa1, result) {
		for (var h2 = 1 << aZz, aC = 0; aC < h2; aC++)
			if (this.aa2(aC, aa0, aa1) === result) return aC;
		return 0
	}, this.aa2 = function(aa3, aa0, aa1) {
		for (var a0U = aa0 + aa3, a0d = aa1 + aa3, g1 = a0U + a0d & 2147483647, fs = 1; fs <= 16; fs++) g1 = (g1 = (g1 ^ g1 >> fs) >>> 1 + (3 & a0U)) * (7 + (1023 & (a0U | a0d))) & 1073741823, a0d >>= 1 + (1 & (a0U >>= 1 + (1 & (g1 += 65535 &
			a0d))));
		return g1 &= 1073741823
	}
}

function cq() {
	var aa4, aa5, iq, aa6;
	this.dk = function() {
		var aC, fg, fi, aU1, aa7, j, k, ou, iY, zj, g1, h7, fp, fs, aaA;
		if (function() {
				if (iq = !0, aa6 = "rgb(" + bV.zh[0] + "," + bV.zh[1] + "," + bV.zh[2] + ")", bV.aP4(bV.fF)) return 1;
				return iq = !1, 0
			}()) aa5 = null;
		else {
			for (aa4 = bO.g0(96, 4), aa7 = 1 === bV.fF ? (aU1 = 0, 160) : (aU1 = 128, 32), aa6 = "rgb(" + aU1 + "," + aU1 + "," + aU1 + ")", aa5 = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (aa5[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fk : aa4, k = aC % 2 == 0 ? aa4 : bV.fl + 2 * aa4, aa5[aC].width = j, aa5[aC].height = k, zj = (iY = (ou = aa5[aC].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (fi = aa4 - 1; 0 <= fi; fi--)
						for (g1 = aa7 + Math.floor((fi + 1) * (aU1 - aa7) / (aa4 + 1)), fg = j - 1; 0 <= fg; fg--) zj[h7 = 4 * ((0 === aC ? aa4 - fi - 1 : fi) * j + fg)] = g1, zj[h7 + 1] = g1, zj[h7 + 2] = g1, zj[h7 + 3] = 255;
				else {
					for (fg = aa4 - 1; 0 <= fg; fg--)
						for (g1 = aa7 + Math.floor((fg + 1) * (aU1 - aa7) / (aa4 + 1)), fi = k - 1 - aa4; aa4 <= fi; fi--) zj[h7 = 4 * (fi * j + (3 === aC ? aa4 - fg - 1 : fg))] = g1, zj[h7 + 1] = g1, zj[h7 + 2] = g1, zj[h7 + 3] = 255;
					for (fs = 1; 0 <= fs; fs--)
						for (fg = aa4 - 1; 0 <= fg; fg--)
							for (fi = aa4 - 1; 0 <= fi; fi--) fp = (Math.pow(fg * fg + fi * fi, .5) + 1) / (aa4 + 1), g1 = aa7 + Math.floor((1 < fp ? 1 : fp) * (aU1 - aa7)), zj[h7 = 4 * ((0 === fs ? aa4 - fi - 1 : fi + fs * (k - aa4)) * j + (
								1 === aC ? fg : aa4 - fg - 1))] = g1, zj[h7 + 1] = g1, zj[h7 + 2] = g1, zj[h7 + 3] = 255
				}
				ou.putImageData(iY, 0, 0)
			}
			aaA = aa7, bV.zc.fillStyle = "rgb(" + aaA + "," + aaA + "," + aaA + ")", bV.zc.fillRect(0, 0, bV.fk, 1), bV.zc.fillRect(0, bV.fl - 1, bV.fk, 1), bV.zc.fillRect(0, 0, 1, bV.fl), bV.zc.fillRect(bV.fk - 1, 0, 1, bV.fl)
		}
	}, this.a1D = function() {
		var fs = iq ? 0 : -aa4;
		aQm(fs, fs, bV.fk - 2 * fs, bV.fl - 2 * fs, bd.aaB, bd.aaC, bd.aaD, bd.aaE) || (xm.fillStyle = aa6, xm.fillRect(0, 0, i.j, i.k))
	}, this.xl = function() {
		iq || (aQl(0, -aa4, bV.fk, aa4, bd.aaB, bd.aaC, bd.aaD, bd.aaE) && xm.drawImage(aa5[0], bd.aaF, bd.aaG - aa4), aQl(bV.fk, -aa4, aa4, bV.fl + 2 * aa4, bd.aaB, bd.aaC, bd.aaD, bd.aaE) && xm.drawImage(aa5[1], bd.aaF + bV.fk, bd.aaG - aa4),
			aQl(0, bV.fl, bV.fk, aa4, bd.aaB, bd.aaC, bd.aaD, bd.aaE) && xm.drawImage(aa5[2], bd.aaF, bd.aaG + bV.fl), aQl(-aa4, -aa4, aa4, bV.fl + 2 * aa4, bd.aaB, bd.aaC, bd.aaD, bd.aaE) && xm.drawImage(aa5[3], bd.aaF - aa4, bd.aaG - aa4))
	}
}

function dC() {
	this.aLE = new aaH, this.a1G = new aaI, this.z = new aaJ, this.jM = new aaK, this.aaA = new aaL, this.mp = new aaM, this.ki = new aaN, this.lh = new aaO, this.aaP = new aaQ, this.aaR = new aaS, this.n0 = new aaT, this.i9 = new aaU, this.mG =
		new aaV, this.lj = new aaW, this.iC = new aaX, this.mt = new aaY, this.rt = new aaZ, this.dk = function() {
			this.mG.dk(), this.a1G.dk(), this.z.dk(), this.jM.dk(), this.aaA.dk(), this.aaR.dk(), this.mt.dk()
		}, this.xl = function() {
			this.aaR.xl(), this.a1G.xl()
		}
}

function aaN() {
	this.ee = function(player) {
		return !!bQ.n0.n1(player) && !(bQ.z.ky[player] >= Math.max(3 * ap.performance.m8, aF.l8[aF.iI[player]]) || !bD.gv.n2(player, aF.l6[aF.iI[player]], 32, 0)) && (aX.aES() ? function(player) {
			var aac = bQ.lj.aEV(),
				fZ = aac.length;
			if (0 === fZ) return !1;
			aac = aac[az.kB(fZ)], fZ = bQ.z.mn[aac];
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
			}(player, aac) && !!bQ.iC.rs(player, fZ, 1) && (bD.gv.n4(player), bQ.z.n5(player), !0)
		}(player) : !!(ap.jl.ee(player) || ap.ja.ee(player) || ap.jc.ee(player)) && (function(player) {
			bR.gB[1] = 4, bD.gv.n4(player), bQ.z.n5(player)
		}(player), !0))
	}
}

function aaY() {
	var aaf = 0,
		aag = null;
	this.dk = function() {
		null === aag && (aag = new Uint16Array(2 * bQ.z.l8)), aaf = 0
	}, this.ei = function(aah, mt) {
		var aai = aag;
		aai[aaf++] = aah, aai[aaf++] = mt
	}, this.mu = function(player, ms) {
		for (var aai = aag, fZ = aaf, aC = 0; aC < fZ; aC += 2)
			if (aai[aC] === ms && bQ.lj.aaj(aai[aC + 1]) && player === bQ.z.mo[bR.gB[2]] >> 3) return !0;
		return !1
	}, this.aak = function(aal) {
		var mp = bQ.z.ml[aal];
		if (!(mp < 64)) {
			for (var ms = bQ.z.mn[aal], aai = aag, fZ = aaf, aC = fZ - 2; 0 <= aC; aC -= 2)
				if (aai[aC] === ms) {
					{
						aaq = void 0;
						var aaq = aai[aC + 1];
						bQ.lj.aaj(aaq) && bQ.mt.aay(bR.gB[2])
					}
					aai[aC] = aai[fZ - 2], aai[aC + 1] = aai[fZ - 1], fZ -= 2
				} aaf = fZ
		}
	}, this.aan = function(aao, aap) {
		for (var aaq = bQ.z.mn[aao], ms = -1, aai = aag, fZ = aaf, aC = 1; aC < fZ; aC += 2)
			if (aai[aC] === aaq) {
				ms = aai[aC - 1];
				break
			} if (-1 === ms) return !1;
		if (!bQ.lj.aaj(ms)) return !1;
		var aal = bR.gB[2],
			mF = bQ.z.mm[aal];
		if (aap === mF[mF.length - 1]) bQ.z.mm[aao] = bQ.mG.aar(bQ.z.mm[aao], bQ.mG.mO(mF));
		else {
			var aas = bQ.lj.aat(mF, aap);
			if (-1 === aas) return !1;
			var aau = bQ.z.my[aal];
			aas === aau ? (aal = bP.jK(bQ.z.mz[aal]), bQ.z.mm[aao] = bQ.mG.aaw(bQ.z.mm[aao], mF, aas, aap, bP.j2(mF[aas], aap) > bP.j2(mF[aas], aal))) : bQ.z.mm[aao] = bQ.mG.aaw(bQ.z.mm[aao], mF, aas, aap, aau < aas)
		}
		return !0
	}, this.aay = function(aaz) {
		var mF, lp = bQ.z,
			mp = lp.ml[aaz];
		return mp % 64 != 5 && (mF = lp.mm[aaz], lp.ab0[aaz] = 65535 - lp.ab0[aaz], lp.my[aaz] = mF.length - lp.my[aaz] - 2, lp.mm[aaz] = bQ.mG.mO(mF), lp.ml[aaz] = mp - mp % 64 + 5, !0)
	}
}

function aaT() {
	this.n1 = function(player) {
		return !!aE.data.passableWater && bQ.z.mk !== bQ.z.l8 && bQ.z.ky[player] !== bQ.z.ab1 && 0 !== ah.hG[player].length
	}, this.ro = function(aYX) {
		var mp = bR.gB[1];
		return !(4 <= mp || !bQ.lj.ab2(bP.fP(aYX))) && ad.fU(bP.fP(bP.jO(aYX, mp)))
	}
}

function aaH() {
	this.aLF = function(player) {
		for (var aAo = bQ.z.aAo, ur = player << 3, aC = ur + bQ.z.ky[player] - 1; ur <= aC; aC--) this.ab3(aAo[aC])
	}, this.ab3 = function(ab4) {
		var z = bQ.z,
			ab5 = z.mk - 1,
			ab6 = z.mo[ab4],
			ab7 = z.ab8[ab4],
			ab9 = z.mz[ab4];
		z.mk = ab5, z.mo[ab4] = z.mo[ab5], z.mz[ab4] = z.mz[ab5], z.ab0[ab4] = z.ab0[ab5], z.a9g[ab4] = z.a9g[ab5], z.ab8[ab4] = z.ab8[ab5], z.mn[ab4] = z.mn[ab5], z.ml[ab4] = z.ml[ab5], z.abA[ab4] = z.abA[ab5], z.mm[ab4] = z.mm[ab5], z.my[ab4] =
			z.my[ab5], z.aAo[z.mo[ab4]] = ab4,
			function(aYW) {
				var player = aYW >> 3,
					z = bQ.z,
					fZ = z.ky[player] - 1,
					abD = (player << 3) + fZ;
				z.ky[player] = fZ, abD !== aYW && (z.aAo[aYW] = z.aAo[abD], z.mo[z.aAo[aYW]] = aYW)
			}(ab6), bQ.jM.jM[bP.jL(z.mz[ab4])][z.ab8[ab4]] = ab4, ab5 = bP.jL(ab9), ab6 = ab7, ab5 = bQ.jM.jM[ab5], z = ab5.pop(), ab6 !== ab5.length && (ab5[ab6] = z, bQ.z.ab8[z] = ab6)
	}
}

function aaI() {
	var abF, abG = 8,
		abH = null;

	function abM(zj, fL, eI) {
		fL *= 4;
		zj[fL] = 255, zj[1 + fL] = 255, zj[2 + fL] = eI, zj[3 + fL] = 255
	}

	function abO(ib, aa6) {
		var fg, fi, iw, fL, abP, abQ, iV = abG,
			iY = bD.sM.getImageData(ib, iV, iV),
			zj = iY.data,
			lp = (iV >> 1) - .5,
			abS = bD.sU.a5V(aa6, .5);
		for (bD.sU.a5X(aa6, abS, 300) || bD.sU.a5Z(aa6, 100), fi = 0; fi < iV; fi++)
			for (fg = 0; fg < iV; fg++) abQ = (iV - 1.5) * (iV - 1.5) / 4, zj[fL = 4 * (fi * iV + fg)] = (abP = (iw = (iw = fg - lp) * iw + (iw = fi - lp) * iw) <= (iV - 4.5) * (iV - 4.5) / 4 ? abS : aa6)[0], zj[1 + fL] = abP[1], zj[2 + fL] = abP[2],
				zj[3 + fL] = abQ < iw ? 0 : 255;
		ib.putImageData(iY, 0, 0)
	}
	this.dk = function() {
		var eI, iV, a5x, ib, iY, zj;
		(abF = abF || new Array(aE.fW)).fill(null), eI = 255, iV = abG + 4, a5x = bD.sM.zY(iV, iV), ib = bD.sM.getContext(a5x, !0), iY = bD.sM.getImageData(ib, iV, iV), abM(zj = iY.data, iV + 1, eI), abM(zj, iV + 2, eI), abM(zj, 2 * iV + 1, eI),
			abM(zj, 2 * iV - 3, eI), abM(zj, 2 * iV - 2, eI), abM(zj, 3 * iV - 2, eI), abM(zj, iV * (iV - 3) + 1, eI), abM(zj, iV * (iV - 2) + 1, eI), abM(zj, iV * (iV - 2) + 2, eI), abM(zj, iV * (iV - 2) - 2, eI), abM(zj, iV * (iV - 1) - 3, eI),
			abM(zj, iV * (iV - 1) - 2, eI), ib.putImageData(iY, 0, 0), abH = a5x,
			function() {
				if (aE.iT)
					for (var a5x = new Array(bj.lH.length), fZ = aE.fW, abK = abF, aDn = bj.aDn, aC = 0; aC < fZ; aC++) {
						var a8Q = aDn[aC];
						a5x[a8Q] || (a5x[a8Q] = function(a8Q) {
							var a5x = bD.sM.zY(abG, abG),
								ib = bD.sM.getContext(a5x, !0),
								h = bR.g8;
							return h.set(bj.aU2[a8Q]), abO(ib, h), a5x
						}(a8Q)), abK[aC] = a5x[a8Q]
					}
			}()
	}, this.xl = function() {
		var aC, player, abT, aQu, iI, iv, abV, abX, abY, mz = bQ.z.mz,
			mo = bQ.z.mo,
			a9g = bQ.z.a9g,
			abA = bQ.z.abA,
			abZ = abF,
			aba = aE.fJ,
			fZ = bQ.z.mk,
			abb = i.j,
			abc = i.k,
			abd = bV.fk << 4,
			fO = im,
			fD = fO / abG,
			nv = jD / fO,
			nw = jE / fO,
			iw = (abb + jD) / fO - nv,
			iz = (abc + jE) / fO - nw,
			ib = xm;
		for (ib.imageSmoothingEnabled = fO < 9, bD.sM.textAlign(ib, 1), bD.sM.textBaseline(ib, 1), aC = 0; aC < fZ; aC++) player = mo[aC] >> 3, iI = a9g[aC], abT = .9 + .1 * Math.log10(iI), aQu = (iv = mz[aC]) % abd / 16 - abT, iv = abc * (Math
			.floor(iv / abd) / 16 - abT - nw) / iz, abV = -2 * (abY = fO * abT) * (1 + (abX = +(player === aba)) / 8), abX = abX * abY / 4, (abY = abb * (aQu - nv) / iw) < abV || iv < abV || abb + abX < abY || abc + abX < iv || (aQu = 2 *
			abT * fD, abV = abT * fO, null === (abX = abZ[player]) && (abZ[player] = abX = function(player) {
				var a5x = bD.sM.zY(abG, abG);
				return abO(bD.sM.getContext(a5x, !0), ad.aAP(player)), a5x
			}(player)), player === aba && (ib.setTransform(aQu, 0, 0, aQu, abY - 2 * aQu, iv - 2 * aQu), ib.drawImage(abH, 0, 0)), ib.setTransform(aQu, 0, 0, aQu, abY, iv), ib.drawImage(abX, 0, 0), (abT = Math.floor(function(iI) {
				if (iI < 1e3) return .42;
				if (iI < 1e4) return .34;
				if (iI < 1e6) return .26;
				if (iI < 1e8) return .19;
				return .15
			}(iI) * abV)) < 6) || (ib.setTransform(1, 0, 0, 1, 0, 0), ib.fillStyle = abA[aC] ? bE.py : bE.pO, ib.font = bD.sM.u7(1, abT), ib.fillText(bD.tK.a2Q(iI), abY + abV, iv + abV + .1 * abT));
		ib.imageSmoothingEnabled = !1, ib.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aaS() {
	var abg;
	this.dk = function() {
		if (!abg) {
			abg = new Array(bj.abi.length);
			for (var aC = 0; aC < abg.length; aC++) abg[aC] = bS.z.abj(20, bj.abi[aC])
		}
	}, this.xl = function() {
		var oF = im;
		if (!(5 <= oF)) {
			var abb = i.j,
				abc = i.k,
				nv = jD / oF,
				nw = jE / oF,
				o8 = (abb + jD) / oF,
				o9 = (abc + jE) / oF,
				h8 = -20 * oF,
				abk = .5 * h8,
				abd = bV.fk << 4,
				fZ = bQ.z.mk,
				mz = bQ.z.mz,
				mo = bQ.z.mo,
				aDn = bj.aDn,
				a5x = abg,
				ib = xm;
			3 < oF && (ib.globalAlpha = .5 * (5 - oF));
			for (var aC = 0; aC < fZ; aC++) {
				var iv = mz[aC],
					fg = abb * (iv % abd / 16 - nv) / (o8 - nv) + abk,
					iv = abc * (Math.floor(iv / abd) / 16 - nw) / (o9 - nw) + abk;
				abb < fg || abc < iv || fg < h8 || iv < h8 || (ib.setTransform(oF, 0, 0, oF, fg, iv), fg = a5x[aDn[mo[aC] >> 3]], ib.drawImage(fg, 0, 0))
			}
			ib.globalAlpha = 1, ib.setTransform(oF, 0, 0, oF, 0, 0)
		}
	}
}

function aaW() {
	this.abn = function(player, id) {
		for (var abo = ah.hG[player], fZ = abo.length, aC = 0; aC < fZ; aC++)
			if (bP.io(abo[aC], id)) return !0;
		return !1
	}, this.abp = function(player, fL) {
		for (var j4, abq, fD, abo = ah.hG[player], fZ = abo.length, j = bV.fk, abt = bP.fh(fL), abu = bP.fj(fL), ff = -1, min = bV.fk * bV.fk + bV.fl * bV.fl, id = ad.fH(bP.fP(fL)), aC = 0; aC < fZ; aC++)(abq = (abq = abt - (j4 = (fD = abo[
			aC]) >> 2) % j) * abq + (abq = abu - ~~((.5 + j4) / j)) * abq) < min && bP.io(fD, id) && (min = abq, ff = j4);
		return ff
	}, this.lk = function(j3, j4) {
		for (var id = ad.fH(bP.fP(j4)), ip = bP.ig, fD = bP.fP(j3), abv = -1, aC = 0; aC < 4; aC++) {
			var fO = fD + ip[aC];
			ad.iq(fO) && ad.fH(fO) === id && (-1 === abv || bP.j5(bP.fN(fO), j4) < bP.j5(abv, j4)) && (abv = bP.fN(fO))
		}
		return abv
	}, this.mJ = function(player, fL) {
		for (var ip = bP.ig, fD = bP.fP(fL), aC = 0; aC < 4; aC++) {
			var fO = fD + ip[aC];
			if (ad.h9(fO) && ad.a1B(player, fO)) return !0
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
	}, this.ab2 = function(fD) {
		if (ad.iq(fD))
			for (var ip = bP.ig, aC = 0; aC < 4; aC++)
				if (ad.fU(fD + ip[aC])) return !0;
		return !1
	}, this.nu = function(player, id) {
		for (var ur = player << 3, us = ur + bQ.z.ky[player], mn = bQ.z.mn, aAo = bQ.z.aAo, aC = ur; aC < us; aC++) {
			var aAp = aAo[aC];
			if (mn[aAp] === id) return aAp
		}
		return -1
	}, this.nz = function(player) {
		return 0 === bQ.z.ky[player] ? -1 : bQ.z.aAo[player << 3]
	}, this.a8i = function(m9, mA) {
		var fZ = bQ.z.mk;
		if (fZ < 1) return -1;
		for (var mz = bQ.z.mz, abw = 80, aTW = -1, aC = 0; aC < fZ; aC++) {
			var fp = bP.is(m9, mA, mz[aC]);
			fp < abw && (abw = fp, aTW = aC)
		}
		return function(aC, m9, mA) {
			if (aC < 0) return;
			var ac3 = bQ.z.mz[aC],
				ac4 = bP.iy(ac3),
				ac3 = bP.j1(ac3),
				aC = 20 * (.9 + .1 * Math.log10(bQ.z.a9g[aC]));
			return aC = Math.max(aC, bP.jF(bD.sM.uw(.02, 1.7))), bO.aQt(bP.ix(m9), bP.j0(mA), ac4, ac3, aC)
		}(aTW, m9, mA) ? aTW : -1
	}, this.aaj = function(ns) {
		for (var fZ = bQ.z.mk, mn = bQ.z.mn, aC = 0; aC < fZ; aC++)
			if (mn[aC] === ns) return bR.gB[2] = aC, !0;
		return !1
	}, this.aLB = function(player) {
		for (var ur = player << 3, us = ur + bQ.z.ky[player], aAo = bQ.z.aAo, a9g = bQ.z.a9g, iI = 0, aC = ur; aC < us; aC++) iI += a9g[aAo[aC]];
		return iI
	}, this.aby = function(player, aaz) {
		aaz = bQ.z.mm[aaz];
		return this.mJ(player, aaz[aaz.length - 1])
	}, this.abz = function(j3, j4, fp, ac0) {
		var j7 = bP.fh(j3),
			j3 = bP.fj(j3),
			j9 = bP.fh(j4),
			j4 = bP.fj(j4),
			j9 = (fp = Math.max(fp, 1), j9 - j7),
			j4 = j4 - j3,
			iw = bO.g0(Math.abs(j9) * ac0, fp),
			ac0 = bO.g0(Math.abs(j4) * ac0, fp);
		return bP.fw(j7 + Math.sign(j9) * iw, j3 + Math.sign(j4) * ac0)
	}, this.aat = function(mF, fL) {
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
	}, this.aEV = function() {
		for (var ac6 = mV[0], mo = bQ.z.mo, mk = bQ.z.mk, h = [], aC = 0; aC < mk; aC++) bD.gv.lY(ac6, mo[aC] >> 3) && h.push(aC);
		return h
	}, this.mH = function(player, mF) {
		for (var ur = player << 3, us = ur + bQ.z.ky[player], aAo = bQ.z.aAo, mm = bQ.z.mm, i1 = mF[0], lX = mF[mF.length - 1], aC = ur; aC < us; aC++) {
			var h7 = mm[aAo[aC]];
			if (h7[0] === i1 && h7[h7.length - 1] === lX) return !0
		}
		return !1
	}
}

function aaX() {
	function ac9(player, aaz) {
		aaz = bP.jK(bQ.z.mz[aaz]), aaz = ad.fH(bP.fP(aaz));
		return !!bQ.lj.abn(player, aaz)
	}

	function ac7(player) {
		return bQ.n0.n1(player) && !bQ.mG.mM()
	}
	this.iD = function(player, fL) {
		return !!ac7(player) && -1 !== (fL = function(player, fL) {
			for (var fZ = bQ.z.mk, mz = bQ.z.mz, mo = bQ.z.mo, abw = bP.ii(), aTW = -1, aC = 0; aC < fZ; aC++) {
				var fp = bP.j2(fL, bP.jK(mz[aC]));
				fp < abw && bD.gv.lY(player, mo[aC] >> 3) && (abw = fp, aTW = aC)
			}
			return aTW
		}(player, fL)) && !!ac9(player, fL) && (bR.gB[3] = bQ.z.mn[fL], !0)
	}, this.qz = function(player, ns) {
		return !!ac7(player) && !!bQ.lj.aaj(ns) && !!ac9(player, bR.gB[2])
	}, this.rs = function(player, ns, acA) {
		return !! function(player, ns, acA) {
			if (ac7(player) && bQ.lj.aaj(ns)) {
				ns = bR.gB[2];
				if (bD.gv.lY(player, bQ.z.mo[ns] >> 3)) {
					if (function(player, aaz) {
							return bQ.lj.aby(player, aaz) && (bR.h[0] = bQ.mG.mO(bQ.z.mm[aaz]), bR.gB[1] = 6, !0)
						}(player, ns)) return 1;
					var aae = bP.jK(bQ.z.mz[ns]),
						acE = bQ.lj.abp(player, aae);
					if (-1 !== acE) {
						acE = bP.j2(acE, aae);
						if (!(acA && 120 < acE)) {
							acA = function(aaz, acF, aae) {
								var mF = bQ.z.mm[aaz],
									aaz = bQ.z.my[aaz],
									acH = bP.j2(aae, mF[aaz + 1]);
								if (acF <= acH) return bQ.lj.abz(aae, mF[aaz + 1], acH, acF);
								for (var fp = acF - acH, fZ = mF.length - 1, aC = aaz + 1; aC < fZ; aC++) {
									var acI = bP.j2(mF[aC], mF[aC + 1]);
									if (fp <= acI) return bQ.lj.abz(mF[aC], mF[aC + 1], acI, fp);
									fp -= acI
								}
								return mF[fZ]
							}(ns, acE, aae);
							if (bQ.lh.rp(player, acA, 1)) return bR.gB[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, ns, acA) && (player = bR.gB[2], bQ.z.ml[player] = 64 + bQ.z.ml[player] % 64, bQ.mt.ei(ns, bQ.z.n3), !0)
	}
}

function aaM() {
	function acN(player, iI, acL, aae) {
		var k3;
		if (ad.fQ(acL)) k3 = aE.fW;
		else {
			if ((k3 = ad.fR(acL)) === player) return void bg.gz(player, iI - bD.gv.gy(player, iI), 12);
			if (!bv.fS(player, k3)) return void bB.kw.rE(player, k3, iI)
		}
		ae.kF(player, k3) || ae.kY(player) ? (ah.h1[player].push(aae << 2), ae.ei(player, iI, k3), aG.k1(player, !0)) : bg.gz(player, iI, 12)
	}
	this.ee = function() {
		for (var ml = bQ.z.ml, mz = bQ.z.mz, ab0 = bQ.z.ab0, aC = bQ.z.mk - 1; 0 <= aC; aC--) 65535 === ab0[aC] && function(aC, aae, iQ) {
			if (6 === iQ) {
				if (bQ.mt.aan(aC, aae)) return bQ.z.my[aC]++, bQ.z.ab0[aC] = 0, 0
			} else {
				var player = bQ.z.mo[aC] >> 3,
					aC = bQ.z.a9g[aC];
				bg.acM(player), iQ < 4 ? acN(player, aC, aae + bP.ie[iQ] << 2, aae) : 4 === iQ ? function(player, iI, aae) {
					var aC, fd, ip = bP.ig,
						fO = bP.fP(aae);
					for (aC = 0; aC < 4; aC++)
						if (fd = fO + ip[aC], ad.fQ(fd)) return acN(player, iI, fd, aae);
					for (aC = 0; aC < 4; aC++)
						if (fd = fO + ip[aC], ad.h9(fd) && !ad.a1B(player, fd)) return acN(player, iI, fd, aae);
					for (aC = 0; aC < 4; aC++)
						if (fd = fO + ip[aC], ad.h9(fd)) return acN(player, iI, fd, aae)
				}(player, aC, aae) : 5 === iQ && function(player, iI, aae) {
					var aC, fd, ip = bP.ig,
						fO = bP.fP(aae);
					for (aC = 0; aC < 4; aC++)
						if (fd = fO + ip[aC], ad.h9(fd) && ad.a1B(player, fd)) return acN(player, iI, fd, aae);
					for (aC = 0; aC < 4; aC++)
						if (fd = fO + ip[aC], ad.h9(fd)) return acN(player, iI, fd, aae);
					for (aC = 0; aC < 4; aC++)
						if (fd = fO + ip[aC], ad.fQ(fd)) return acN(player, iI, fd, aae)
				}(player, aC, aae)
			}
			return 1
		}(aC, bP.jK(mz[aC]), ml[aC] % 64) && (bQ.mt.aak(aC), bQ.aLE.ab3(aC))
	}, this.acK = function(player, fL, iQ, ns, iI) {
		if (!(5 <= iQ)) {
			var aba = aE.fJ;
			if (bD.gv.hl(aba) && bv.fS(player, aba) && player !== aba && 0 !== ah.hG[aba].length && bD.gv.a6X(player, 5)) {
				for (var acL, fn = !1, aC = 0; aC < 4; aC++)
					if (acL = fL + bP.ie[aC] << 2, ad.fU(acL) && !ad.fQ(acL) && ad.fR(acL) === aba) {
						fn = !0;
						break
					} fn && (aO.a9o(719, 0), iQ = iI < 25e3 ? L(506) + " (" + bD.tK.a2Q(iI) + ") ⛵" : L(507) + " (" + bD.tK.a2Q(iI) + ") 🚢", aO.a1b(180, iQ, 719, player, bE.px, bE.pL, -1, !0, void 0, {
					ft: 1,
					ns: ns
				}))
			}
		}
	}
}

function aaJ() {
	this.l8 = 512, this.ab1 = 8, this.mk = 0, this.n3 = 0, this.mo = new Uint16Array(this.l8), this.mz = new Uint32Array(this.l8), this.ab0 = new Uint16Array(this.l8), this.a9g = new Uint32Array(this.l8), this.ab8 = new Uint16Array(this.l8), this
		.mn = new Uint16Array(this.l8), this.ml = new Uint8Array(this.l8), this.abA = new Uint8Array(this.l8), this.mm = new Array(this.l8), this.my = new Uint16Array(this.l8), this.ky = new Uint8Array(aE.fW), this.aAo = new Uint16Array(this.ab1 * aE
			.fW), this.dk = function() {
			this.mk = 0, this.n3 = 0, this.ky.fill(0), this.mm.fill(null)
		}, this.n5 = function(player) {
			var iI = bR.g6[0],
				mp = bR.gB[1],
				mF = bR.h[0],
				acQ = this.n3,
				fZ = this.mk,
				acR = bP.jJ(mF[0]),
				acS = this.ky[player],
				acT = (player << 3) + acS;
			this.mo[fZ] = acT, this.mz[fZ] = acR, this.ab0[fZ] = 0, iI < 60 && (bD.gv.gw(player, 60 - iI), iI = 60), this.a9g[fZ] = iI, this.ab8[fZ] = bQ.jM.n5(fZ, bP.jL(acR)), this.mn[fZ] = acQ, this.ml[fZ] = mp, this.abA[fZ] = 0, this.mm[fZ] = mF,
				this.my[fZ] = 0, this.n3 = (acQ + 1) % 65536, this.ky[player] = acS + 1, this.aAo[acT] = fZ, this.mk++, bQ.mp.acK(player, mF[mF.length - 1], mp, acQ, iI)
		}, this.ee = function() {
			bQ.mp.ee();
			for (var h7 = aE.fJ, ea = bQ.lj.aLB(h7), ts = (! function(ts) {
					for (var acY, mz = ts.mz, a9g = ts.a9g, abA = ts.abA, ab0 = ts.ab0, ab8 = ts.ab8, mm = ts.mm, my = ts.my, ts = ts.mk, abd = bV.fk << 4, aC = ts - 1; 0 <= aC; aC--) {
						var acZ = mz[aC],
							mF = mm[aC],
							aca = my[aC],
							acR = bP.jJ(mF[aca]),
							acb = bP.jJ(mF[aca + 1]),
							acc = acR % abd,
							acR = ~~((acR + .5) / abd),
							ace = acb % abd,
							acf = ~~((acb + .5) / abd),
							acg = ace - acc,
							ach = acf - acR,
							fc = Math.max(~~Math.sqrt(acg * acg + ach * ach + .5), 1),
							aM8 = a9g[aC],
							aM8 = (aM8 = abA[aC] ? 4e4 : 25e4 + Math.min(20 * aM8, 3e5) + Math.min(aM8 >> 3, 5e4), ab0[aC] + Math.max(~~((aM8 + .5) / fc), 1));
						65535 <= aM8 ? aca + 2 < mF.length ? (my[aC] = aca + 1, mz[aC] = acY = function(aC, aci, acc, acd, aca, fc, mF, abd) {
							aci = Math.min(aci - 65535, 65535);
							var mF = bP.jJ(mF[aca + 2]),
								aca = mF % abd - acc,
								mF = ~~((mF + .5) / abd) - acd,
								acl = Math.max(~~Math.sqrt(aca * aca + mF * mF + .5), 1);
							return aci = Math.min(Math.floor((fc * aci + .5) / acl), 65534), bQ.z.ab0[aC] = aci, acc + bO.g0(aci * aca, 65535) + abd * (acd + bO.g0(aci * mF, 65535))
						}(aC, aM8, ace, acf, aca, fc, mF, abd)) : (mz[aC] = acY = acb, ab0[aC] = 65535) : (ab0[aC] = aM8, mz[aC] = acY = acc + bO.g0(aM8 * acg, 65535) + abd * (acR + bO.g0(aM8 * ach, 65535))), ab8[aC] = bQ.jM.ack(ab8[aC],
							acZ, acY)
					}
				}(this), ! function(ts) {
					if (bi.kr() % 2 == 1) {
						var aC, iR, lp, ft, ej, acm, a24, acn, i1, nv, nw, acR, aco, aCH, acq, lX, fZ = ts.mk,
							mz = ts.mz,
							mo = ts.mo,
							a9g = ts.a9g,
							abA = ts.abA,
							jM = bQ.jM.jM,
							acs = jM.length,
							act = bQ.jM.act,
							abd = bV.fk << 4,
							acu = aE.iT,
							aYL = bj.fX,
							h8 = (fZ - 1) * (bO.g0(bi.kr(), 2) % 2);
						for (aC = 0; aC < fZ; aC++)
							for (iR = Math.abs(aC - h8), acR = mz[iR], lp = bP.jL(acR), i1 = mo[iR] >> 3, nv = acR % abd, nw = ~~((acR + .5) / abd), acq = a9g[iR], ft = 0; ft < 9; ft++)
								if (!((acm = lp + act[ft]) < 0 || acs <= acm))
									for (acn = jM[acm], a24 = acn.length, ej = 0; ej < a24; ej++) aco = acn[ej], lX = mo[aco] >> 3, i1 == lX || acu && aYL[i1] === aYL[lX] && aYL[i1] || (lX = mz[aco], (aCH = nv - lX % abd) * aCH + (aCH = nw -
										~~((lX + .5) / abd)) * aCH < 14400 && (lX = a9g[aco], aCH = lX <= acq ? Math.max(1, bO.g0(lX + bO.g0(acq - lX, 10), 10)) : Math.max(1, bO.g0(acq, 10)), a9g[aco] = Math.max(lX - aCH, 0), abA[
										aco] = 4))
					}
				}(this), ! function(ts) {
					if (bi.kr() % 5 == 3)
						for (var a9g = ts.a9g, fZ = ts.mk, aC = 0; aC < fZ; aC++) {
							var iI = a9g[aC];
							a9g[aC] = Math.max(iI - Math.max(1, iI >> 7), 0)
						}
				}(this), this), a9g = ts.a9g, abA = ts.abA, aC = ts.mk - 1; 0 <= aC; aC--) abA[aC] = abA[aC] >> 1, 0 === a9g[aC] && (bQ.mt.aak(aC), bQ.aLE.ab3(aC));
			bg.gz(h7, ea - bQ.lj.aLB(h7), 15)
		}
}

function aaK() {
	this.acv = 32, this.fg = 0, this.fi = 0, this.jN = 0, this.acw = 0, this.acx = 4, this.jM = null, this.act = new Int16Array(9), this.dk = function() {
		this.jN = 1 + bO.g0(bV.fk - 1, this.acv), this.acw = 1 + bO.g0(bV.fl - 1, this.acv), this.jM = new Array(this.jN * this.acw), bD.sU.a5U(this.jM);
		var fg, fi, act = this.act,
			j = this.jN;
		for (fg = -1; fg <= 1; fg++)
			for (fi = -1; fi <= 1; fi++) act[3 * (1 + fi) + 1 + fg] = fi * j + fg
	}, this.n5 = function(acz, aC) {
		return this.jM[aC].push(acz), this.jM[aC].length - 1
	}, this.ack = function(ad0, acR, acb) {
		var ad1, ad2, acR = bP.jL(acR),
			acb = bP.jL(acb);
		return acR === acb ? ad0 : (ad1 = this.jM[acR].pop(), this.jM[acR].length === ad0 ? this.n5(ad1, acb) : (ad2 = this.jM[acR][ad0], this.jM[acR][ad0] = ad1, bQ.z.ab8[ad1] = ad0, this.n5(ad2, acb)))
	}
}

function aaO() {
	this.li = function(player, ad3) {
		return -1 !== ad3 && !!bQ.lj.mK(player, ad3) && this.rp(player, ad3, 0)
	}, this.rp = function(player, ad3, ad4) {
		player = function(player, ad3, ad4) {
			var acE = bQ.lj.abp(player, ad3);
			if (-1 === acE) return -1;
			acE = bQ.lj.lk(acE, ad3);
			if (-1 === acE) return -1;
			var mD = bQ.mG.mL(acE, ad3);
			if (0 <= mD) return mD;
			if (bQ.mG.mM()) return -1;
			if (0 <= (mD = bQ.mG.mL(ad3, acE))) return bQ.mG.mN(bQ.mG.mO(bQ.mG.get(mD)));
			if (acE === ad3) return bQ.mG.mN(new Uint32Array([acE, ad3]));
			if (0 <= (mD = bQ.aaP.rp(acE, ad3))) return mD;
			return ad4 ? function(ad8, player) {
				var gG = bR.gG,
					buffer = (gG.fill(0), [ad8]),
					ih = (gG[ad8] = 1, bP.ih),
					ad9 = -1,
					fZ = buffer.length;
				for (; - 1 === ad9 && fZ;) {
					for (var h = [], aC = 0; aC < fZ; aC++)
						for (var fL = buffer[aC], a7J = gG[fL], fc = 0; fc < 8; fc++) {
							var zK, a3t, ff = fL + ih[fc],
								fD = 4 * ff;
							ad.iq(fD) ? (zK = gG[ff], a3t = a7J + 5 + ((1 & fc) << 1), 0 === zK ? (h.push(ff), gG[ff] = a3t) : gG[ff] = Math.min(a3t, zK)) : -1 === ad9 && fc % 2 == 0 && ad.a18(player, fD) && (ad9 = fL)
						}
					fZ = (buffer = h).length
				}
				return -1 !== ad9 ? function(j3, adB) {
					var ih = bP.ih,
						adC = -1,
						iQ = 0,
						nQ = [];
					for (; adB !== j3;)(iQ = function(fL, iQ) {
						var gG = bR.gG,
							ih = bP.ih,
							a7J = gG[fL];
						if (a7J - gG[fL + ih[iQ]] != 5 + ((1 & iQ) << 1))
							for (var fs = 0; fs < 8; fs++) {
								var fc = fs + iQ + 6 & 7;
								if (a7J - gG[fL + ih[fc]] == 5 + ((1 & fc) << 1)) return fc
							}
						return iQ
					}(adB, iQ)) !== adC && (nQ.push(adB), adC = iQ), adB += ih[iQ];
					nQ.push(j3);
					var mD = bQ.mG.mL(nQ[0], j3);
					if (0 <= mD) return mD;
					return bQ.mG.mN(new Uint32Array(nQ))
				}(ad8, ad9) : -1
			}(ad3, player) : -1
		}(player, ad3, ad4);
		return -1 !== player && (bR.h[0] = bQ.mG.get(player), !0)
	}
}

function aaQ() {
	function adE(ho, j8, jA) {
		for (var kA = Math.min(j8, jA), oD = Math.max(j8, jA), fi = kA + 1; fi < oD; fi++)
			if (!ad.iq(bP.jG(ho, fi))) return;
		return 1
	}

	function adF(hq, j7, j9) {
		for (var kA = Math.min(j7, j9), oD = Math.max(j7, j9), fg = kA + 1; fg < oD; fg++)
			if (!ad.iq(bP.jG(fg, hq))) return;
		return 1
	}

	function adG(j7, j8, j9, jA, ad6, ad3) {
		for (var fZ = Math.min(Math.abs(j9 - j7), Math.abs(jA - j8)), iw = Math.sign(j9 - j7), iz = Math.sign(jA - j8), aC = 0; aC < fZ; aC++)
			if (!ad.iq(bP.jG(j7 += iw, j8 += iz))) return null;
		return j7 === j9 ? adE(j7, j8, jA) ? new Uint32Array([ad6, bP.fw(j7, j8), ad3]) : null : adF(j8, j7, j9) ? new Uint32Array([ad6, bP.fw(j7, j8), ad3]) : null
	}
	this.rp = function(ad6, ad3) {
		ad6 = function(ad6, ad3) {
			var j7 = bP.fh(ad6),
				j8 = bP.fj(ad6),
				j9 = bP.fh(ad3),
				jA = bP.fj(ad3);
			if (j7 === j9) {
				if (adE(j7, j8, jA)) return new Uint32Array([ad6, ad3])
			} else {
				if (j8 !== jA) return adG(j7, j8, j9, jA, ad6, ad3) || adG(j9, jA, j7, j8, ad6, ad3);
				if (adF(j8, j7, j9)) return new Uint32Array([ad6, ad3])
			}
			return null
		}(ad6, ad3);
		return null === ad6 ? -1 : bQ.mG.mN(ad6)
	}
}

function aaV() {
	var adH = [];
	this.dk = function() {
		adH = []
	}, this.mM = function() {
		return 65536 === adH.length
	}, this.mL = function(ad6, ad3) {
		for (var mG = adH, fZ = mG.length, aC = 0; aC < fZ; aC++) {
			var h7 = mG[aC];
			if (h7[0] === ad6 && h7[h7.length - 1] === ad3) return aC
		}
		return -1
	}, this.mO = function(mF) {
		var adI = new Uint32Array(mF.length);
		return adI.set(mF), adI.reverse()
	}, this.aar = function(i1, lX) {
		var h2 = i1.length - 1,
			adJ = new Uint32Array(h2 + lX.length);
		return adJ.set(i1, 0), adJ.set(lX, h2), adJ
	}, this.aaw = function(i1, lX, yo, fL, adK) {
		adK && (yo = (lX = this.mO(lX)).length - yo - 2);
		adK = lX.subarray(yo + 1 + (fL === lX[yo + 1])), fL = new Uint32Array(i1.length + adK.length);
		return fL.set(i1, 0), fL.set(adK, i1.length), fL
	}, this.mN = function(mF) {
		return adH.push(mF), adH.length - 1
	}, this.get = function(aC) {
		return adH[aC]
	}, this.mI = function() {
		return adH
	}, this.adM = function(ad6, ad3) {
		return null
	}
}

function aaZ() {
	this.ee = function(player, ns) {
		player = bQ.lj.nu(player, ns);
		return !(player < 0 || !bQ.mt.aay(player) || (bQ.mt.aak(player), 0))
	}
}

function aaL() {
	var a1j = 32,
		a1i = new Array(2);

	function zY(ej) {
		var fg, fi, fL, iz, iw, iV = a1j,
			a5x = bD.sM.zY(iV, iV),
			ib = bD.sM.getContext(a5x, !0),
			iY = bD.sM.getImageData(ib, iV, iV),
			zj = iY.data,
			lp = (iV >> 1) - .5,
			lq = Math.sqrt(lp * lp);
		for (zj.fill(255), fi = 0; fi < iV; fi++)
			for (fg = 0; fg < iV; fg++) iw = fg - lp, iz = fi - lp, fL = 4 * (fi * iV + fg), iw = 714 * (lq - Math.sqrt(iw * iw + iz * iz)) / lq, zj[2 + fL] = ej, zj[3 + fL] = 255 < iw ? 0 : iw;
		return ib.putImageData(iY, 0, 0), a5x
	}
	this.adN = -1, this.dk = function() {
		this.adN = -1, a1i[0] || (a1i[0] = zY(255), a1i[1] = zY(0))
	}, this.adO = function(ib, fD, fg, fi, eH, aC) {
		bD.gv.hl(aE.fJ) && (ib.setTransform(fD *= 4 / 3 * .625, 0, 0, fD, fg - (eH *= 4 / 3), fi - eH), ib.drawImage(a1i[+(bQ.z.mn[aC] === this.adN)], 0, 0))
	}
}

function aaU() {
	function aYc(fg, fZ, fi, adP, aCN, fz, player) {
		if (!(fi < 1 || aCN < fi))
			for (var aC = 0; aC <= fZ; aC++) {
				var fD = bP.jG(fg, fi);
				if (bQ.lj.ab2(fD) && !bD.sU.has(adP, ad.fH(fD)) && ad.a10(fD, player)) return fD >> 2;
				fg += fz
			}
		return -1
	}

	function aYg(fi, fZ, fg, adP, aYa, fz, player) {
		if (!(fg < 1 || aYa < fg)) {
			fZ = Math.max(fZ, 0);
			for (var aC = 0; aC <= fZ; aC++) {
				var fD = bP.jG(fg, fi);
				if (bQ.lj.ab2(fD) && !bD.sU.has(adP, ad.fH(fD)) && ad.a10(fD, player)) return fD >> 2;
				fi += fz
			}
		}
		return -1
	}

	function aYk(j3, j4, aYX) {
		return -1 !== j4 && (-1 === j3 || bP.j5(j4, aYX) < bP.j5(j3, aYX)) ? j4 : j3
	}
	this.iA = function(player, aYX) {
		if (bQ.n0.n1(player))
			for (var aYY = bP.ii(), adP = [];;) {
				var ad9 = function(aYX, aYY, adP, player) {
					for (var ho = bP.fh(aYX), hq = bP.fj(aYX), aYa = bV.fk - 2, aCN = bV.fl - 2, aYb = -1, fc = 0; fc < aYY; fc++) {
						var aCM = Math.max(ho - fc, 1),
							aPO = Math.max(hq - fc, 1),
							a0w = Math.min(ho + fc, aYa),
							a0v = Math.min(hq + fc, aCN),
							j3 = aYc(ho, a0w - ho, hq - fc, adP, aCN, 1, player),
							j4 = aYc(ho - 1, ho - aCM - 1, hq - fc, adP, aCN, -1, player),
							a0w = aYc(ho, a0w - ho, hq + fc, adP, aCN, 1, player),
							aCM = aYc(ho - 1, ho - aCM - 1, hq + fc, adP, aCN, -1, player),
							aYf = aYg(hq, a0v - hq - 1, ho - fc, adP, aYa, 1, player),
							aYh = aYg(hq - 1, hq - aPO - 2, ho - fc, adP, aYa, -1, player),
							a0v = aYg(hq, a0v - hq - 1, ho + fc, adP, aYa, 1, player),
							aPO = aYg(hq - 1, hq - aPO - 2, ho + fc, adP, aYa, -1, player);
						if (aYb = aYk(aYb, j3, aYX), aYb = aYk(aYb, j4, aYX), aYb = aYk(aYb, a0w, aYX), aYb = aYk(aYb, aCM, aYX), aYb = aYk(aYb, aYf, aYX), aYb = aYk(aYb, aYh, aYX), aYb = aYk(aYb, a0v, aYX), 0 <= (aYb = aYk(aYb, aPO, aYX)) &&
							fc * fc >= bP.j5(aYb, aYX)) return aYb
					}
					return -1
				}(aYX, aYY, adP, player);
				if (-1 === ad9) break;
				var id = ad.fH(bP.fP(ad9));
				if (bQ.lj.abn(player, id)) return !! function(player, ad9, aYX) {
					for (var iQ = bP.jQ(ad9, aYX), aC = 0; aC < 4; aC++) {
						var fL = bP.jO(ad9, iQ);
						if (ad.aKk(bP.fP(fL), player)) return bR.gB[6] = iQ, 1;
						iQ = (iQ + 1) % 4
					}
					return
				}(player, ad9, aYX) && (bR.gB[7] = ad9, !0);
				adP.push(id)
			}
		return !1
	}
}

function dn() {
	this.aVw = [L(508), L(509), L(510), L(511), L(512), L(513), L(514), L(515), L(516), L(517), L(518), L(519), L(520), L(521), L(522), L(523)];
	var adS = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aEr = new Array(adS.length), this.dk = function() {
		var h = bm.buffer.data[155].value.split(";"),
			lp = h.length;
		if (function() {
				for (var fZ = adS.length, aC = 0; aC < fZ; aC++) ba.aEr[aC] = adS[aC]
			}(), !(lp > adS.length))
			for (var aC = 0; aC < lp; aC++) h[aC].length && (this.aEr[aC] = h[aC])
	}, this.aVy = function(eI, code) {
		for (var aEr = this.aEr, adU = adS, s3 = (aEr[eI] = code, ""), fZ = aEr.length, adV = [], aC = 0; aC < fZ; aC++) adV.push(aEr[aC] === adU[aC] ? "" : aEr[aC]);
		fZ--;
		for (aC = 0; aC < fZ; aC++) s3 += adV[aC] + ";";
		bm.qq.qr(155, s3 += adV[fZ])
	}, this.aVv = function() {
		bm.qq.qr(155, ""), this.dk()
	}, this.ej = function(code, eI) {
		return code === this.aEr[eI] || code === this.aEr[eI + 1]
	}
}

function de() {
	var adW = new Array(1),
		adX = new Array(1),
		adY = 20,
		eX = 0,
		adZ = !1;

	function adb() {
		adY++, bs.play()
	}
	this.dk = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				adX[aC] = 0, adW[aC] = document.createElement("audio"), adW[aC].src = src, adW[aC].setAttribute("preload", "auto"), adW[aC].setAttribute("controls", "none"), adW[aC].style.display = "none", adW[aC].onpause = function() {
					adX[aC] = 1
				}, adW[aC].oncanplaythrough = function() {
					adX[aC] = 0 === adX[aC] ? 1 : adX[aC]
				}, document.body.appendChild(adW[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			adZ = !0
		}
	}, this.wr = function() {
		if (adZ) {
			adZ = !1;
			for (var aC = 0; 0 <= aC; aC--) adW[aC].onpause = null, adW[aC].oncanplaythrough = null, u.removeChild(document.body, adW[aC]), adW[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bs.play()
	}), this.play = function() {
		if (adZ) {
			var ea = performance.now();
			if (eX + 66 < ea)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === adX[aC]) return eX = ea, adX[aC] = 2, void adW[aC].play();
			0 < adY && (adY--, setTimeout(adb, 66))
		}
	}
}

function ce() {
	this.aBM = function() {
		var ade;
		return !(am.lQ < 3 || ah.hN[mV[0]] >= aE.ke >> 1) && (aE.iT ? 9 !== aE.lC && (ade = af.aMl(), !(2 * af.aMm(bk.lT()) >= ade)) : function() {
			if (8 === aE.lC) return !1;
			var ade = af.aMl();
			if (2 * ah.hb[mV[0]] >= ade) return !1;
			return !0
		}())
	}
}

function cE() {
	this.dk = function() {
		if (0 === aE.data.sResourcesType) {
			for (var acS = aE.ku, hb = ah.hb, aC = 0; aC < acS; aC++) hb[aC] = 512;
			var acT = aE.a0E,
				l7 = aF.l7,
				iI = aF.iI;
			for (aC = acS; aC < acT; aC++) hb[aC] = l7[iI[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fZ = aE.a0E, hb = ah.hb, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fZ; aC++) hb[aC] = sResourcesValue
		} : function() {
			for (var fZ = aE.a0E, hb = ah.hb, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fZ; aC++) hb[aC] = sResourcesData[aC]
		})();
		bg.nQ[8] = ah.hb[aE.fJ]
	}
}

function dV() {
	var aHm = 501,
		adk = (this.adj = new Uint32Array(aHm), this.a6c = new Uint32Array(aHm), this.aEW = new Uint16Array(aHm), this.aW6 = 0, 1),
		x4 = 0;

	function adn(self) {
		self.max.fill(0)
	}

	function adp(self, aC) {
		self.max[0] = Math.max(self.adj[aC], self.max[0]), self.max[1] = Math.max(self.a6c[aC], self.max[1]), self.max[2] = Math.max(self.aEW[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.adl = 0, this.nQ = new Array(21), this.adm = null, this.dl = function() {
		this.adm = [L(524), L(525), L(526), L(527), L(528), L(529), L(530), L(531), L(354), L(355), L(532), L(533), L(534), L(535), "", L(536), L(537), L(538), L(312), L(539), L(540)]
	}, this.dk = function() {
		this.aW6 = 0, adk = 1, this.adl = 0, x4 = 0, adn(this), this.nQ.fill(0)
	}, this.rm = function(player, jC) {
		bD.gv.a6W(player) && (this.nQ[0] += jC + 1, this.nQ[1]++, this.nQ[12] += bR.g6[1])
	}, this.rH = function(player, qu) {
		__fx.donationsTracker.logDonation(player, qu, bR.g6[0], aX.a8A());
		player === aE.fJ && (aO.rH(bR.g6[0], bR.g6[1], qu), this.nQ[12] += bR.g6[1], this.nQ[16] += bR.g6[0]), qu === aE.fJ && (aO.a9s(bR.g6[0], player), this.nQ[10] += bR.g6[0])
	}, this.rq = function(player) {
		bD.gv.a6W(player) && (this.nQ[2]++, this.nQ[12] += bR.g6[1])
	}, this.ry = function(player) {
		bD.gv.a6W(player) && (this.nQ[19]++, this.nQ[12] += bR.g6[1])
	}, this.acM = function(player) {
		bD.gv.a6W(player) && this.nQ[20]++
	}, this.gz = function(player, a7J, eI) {
		bD.gv.a6W(player) && (this.nQ[eI] += a7J)
	}, this.ee = function() {
		var self;
		this.adl || 0 < x4-- || ((self = this).adj[self.aW6] = ah.hN[aE.fJ], self.a6c[self.aW6] = ah.hb[aE.fJ], self.aEW[self.aW6] = af.aEX(aE.fJ), adp(self, self.aW6), self.aW6++, self.aW6 === aHm && function(self) {
			adn(self), adp(self, 0), self.aW6 = 1 + bO.g0(aHm, 2);
			for (var aC = 1; aC < self.aW6; aC++) self.adj[aC] = self.adj[2 * aC], self.a6c[aC] = self.a6c[2 * aC], self.aEW[aC] = self.aEW[2 * aC], adp(self, aC);
			adk *= 2
		}(self), x4 = adk - 1, bh.nH(), 0 === ah.nU[aE.fJ] && (self.adl = bi.kr()))
	}
}

function dW() {
	this.j = 0, this.k = 0, this.ue = 0, this.uf = 0, this.adr = 0, this.ads = 0, this.aBa = 0, this.vL = 0;
	var adu = this.adt = 0;
	this.adv = 0, this.adw = 0, this.adx = 0, this.aAv = 0, this.eI = 0, this.aE7 = null, this.iL = !1, this.ady = -1, this.adz = !1, this.ae0 = [0, 0], this.dl = function() {
		this.aE7 = [L(541), L(127, 0, "Balance"), L(126, 0, "Interest"), L(542)]
	}, this.dk = function() {
		this.iL = !1, this.ady = -1, this.adz = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fc = a1.a2.ik() && i.j < i.k ? 1 : a1.a2.ik() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fc * this.j), this.j -= a1.a2.ik() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.aAv = Math.floor(this.k / 150), this.aAv = Math.max(this.aAv, 1.5), this.ue = Math.floor(1 + .02 * this
			.j), this.uf = Math.floor(1 + .04 * this.j), this.aBa = this.uf, adu = Math.floor(.75 * this.aBa), this.vL = Math.floor(1 + .075 * this.j), this.adv = Math.floor(1 + .1125 * this.j), this.adw = Math.floor(this.j * (a1.a2.ik() ? .03 :
				.029)), this.adw = Math.max(this.adw, 4), this.adx = Math.floor(.035 * this.j), this.adx = Math.max(this.adx, 4), this.adt = this.k - 2 * this.aBa - this.vL - this.adv, this.iL && this.ae1()
	}, this.hm = function(m9, mA) {
		var a0H, a0G;
		return !!this.iL && (a0G = m9, a0H = mA, m9 -= bO.g0(i.j - this.j, 2), mA -= bO.g0(i.k - this.k, 2), m9 < 0 || mA < 0 || m9 >= this.j || mA >= this.k || m9 >= this.j - this.adv && mA < this.adv ? -1 !== aN.hm(a0G, a0H) || bF.hm(a0G,
			a0H) || this.tX() : mA < this.adv || (mA < this.k - this.vL ? (this.adz = !0, this.ady = (m9 - 2 * this.ue - this.adr) / this.ads, 3 !== this.eI && (bi.ds = !0)) : (a0G = (a0G = Math.floor(m9 / (this.j / this.aE7.length))) < 0 ?
				0 : a0G >= this.aE7.length ? this.aE7.length - 1 : a0G) !== this.eI && (this.eI = a0G, this.ae1(), bi.ds = !0)), !0)
	}, this.a4e = function(m9, mA) {
		return this.ae0[0] = m9, this.ae0[1] = mA, !(!this.iL || !this.adz || (m9 -= bO.g0(i.j - this.j, 2), mA = this.ady, this.ady = (m9 - 2 * this.ue - this.adr) / this.ads, (0 <= this.ady && this.ady <= 1 || 0 <= mA && mA <= 1) && (bi.ds = !
			0), 0))
	}, this.a53 = function() {
		this.adz && (this.adz = !1)
	}, this.a5F = function() {
		this.iL ? this.tX() : this.show()
	}, this.show = function() {
		bg.aW6 < 2 || (this.iL = !0, this.ae1())
	}, this.tX = function() {
		this.iL = !1, this.ady = -1, bi.ds = !0
	}, this.ae1 = function() {
		this.eI < 2 ? this.adr = aR.measureText(bD.tK.a2Q(bg.max[this.eI]), bD.sM.u7(0, this.adw)) : 2 === this.eI && (this.adr = aR.measureText(bD.tK.a7C(6, 2), bD.sM.u7(0, this.adw))), this.ads = this.j - 2 * this.ue - this.adr - this.uf
	}, this.nH = function() {
		this.iL && this.ae1()
	}, this.xl = function() {
		this.iL && this.aBs()
	}, this.aBs = function() {
		var fg = bO.g0(i.j - this.j, 2),
			fi = bO.g0(i.k - this.k, 2);
		xm.setTransform(1, 0, 0, 1, fg, fi), xm.fillStyle = bE.pL, xm.fillRect(0, this.adv, this.j, this.k - this.adv), this.ae2(), this.aUq(), xm.strokeRect(0, 0, this.j, this.k), bD.sM.textAlign(xm, 2), xm.font = bD.sM.u7(0, this.adw), 0 ===
			this.eI ? this.ae3(bg.adj, fg, fi) : 1 === this.eI ? this.ae3(bg.a6c, fg, fi) : 2 === this.eI ? this.ae4(fg, fi) : 3 === this.eI && (this.ae5(fg, fi), this.ae6(fg, fi)), aN.a90(Math.floor(fg + this.j - .725 * this.adv), Math.floor(
				fi + .275 * this.adv), Math.floor(.45 * this.adv)), xm.setTransform(1, 0, 0, 1, 0, 0)
	}, this.ae2 = function() {
		var aC, ea;
		for (xm.lineWidth = this.aAv, bD.sM.textBaseline(xm, 1), bD.sM.textAlign(xm, 1), xm.strokeStyle = bE.pO, xm.font = bD.sM.u7(1, this.adx), ea = this.j / this.aE7.length, xm.fillStyle = bE.pk, xm.fillRect(this.eI * ea, this.k - this.vL, ea,
				this.vL), xm.fillStyle = bE.pO, xm.fillRect(0, this.k - this.vL - .5 * this.aAv, this.j, this.aAv), aC = 1; aC <= 3; aC++) xm.fillRect(aC * ea, this.k - this.vL, this.aAv, this.vL);
		for (aC = this.aE7.length - 1; 0 <= aC; aC--) xm.fillText(bD.ou.a6B(this.aE7[aC], 0, .9 * ea), (aC + .5) * ea, this.k - .46 * this.vL)
	}, this.aUq = function() {
		xm.fillStyle = bE.qC, xm.fillRect(0, 0, this.j, this.adv), xm.fillStyle = bE.pO, xm.fillRect(0, this.adv - .5 * this.aAv, this.j, this.aAv), xm.font = bD.sM.u7(1, .39 * this.adv), xm.fillText(bD.ou.a6B(L(543), 0, .8 * this.j), Math.floor(
			this.j / 2), Math.floor(.55 * this.adv))
	}, this.ae3 = function(h, fg, fi) {
		var lp = bg.max[this.eI],
			a5W = (xm.setTransform(1, 0, 0, 1, fg + 2 * this.ue + this.adr, fi + this.aBa + this.adv), xm.lineWidth = 2, this.adt / Math.sqrt(lp));
		xm.beginPath(), xm.moveTo(this.ads, this.adt - a5W * Math.sqrt(h[bg.aW6 - 1]));
		for (var aC = bg.aW6 - 2; 0 <= aC; aC--) xm.lineTo(aC * this.ads / (bg.aW6 - 1), this.adt - a5W * Math.sqrt(h[aC]));
		xm.stroke();
		fg = this.a90(h, a5W, .5);
		fg < .95 && xm.fillText(bD.tK.a2Q(lp), -this.ue, 0), .05 < Math.abs(fg - .5) && xm.fillText(bD.tK.a2Q(Math.floor(lp / 4)), -this.ue, Math.floor(this.adt / 2)), .05 < fg && xm.fillText("0", -this.ue, this.adt)
	}, this.ae4 = function(fg, fi) {
		xm.setTransform(1, 0, 0, 1, fg + 2 * this.ue + this.adr, fi + this.aBa + this.adv), xm.lineWidth = 2;
		var a5W = this.adt / Math.max(bg.max[this.eI], 1);
		xm.beginPath(), xm.moveTo(this.ads, this.adt - a5W * bg.aEW[bg.aW6 - 1]);
		for (var aC = bg.aW6 - 2; 0 <= aC; aC--) xm.lineTo(aC * this.ads / (bg.aW6 - 1), this.adt - a5W * bg.aEW[aC]);
		xm.stroke();
		fg = this.a90(bg.aEW, a5W, 1), fi = bg.max[this.eI] / 100;
		fg < .95 && xm.fillText(bD.tK.a7C(fi, 2), -this.ue, 0), .05 < Math.abs(fg - .5) && xm.fillText(bD.tK.a7C(fi / 2, 2), -this.ue, Math.floor(this.adt / 2)), .05 < fg && xm.fillText(bD.tK.a7C(0, 2), -this.ue, this.adt)
	}, this.ae5 = function(fg, fi) {
		xm.setTransform(1, 0, 0, 1, fg + .34 * this.j, fi + 2 * adu + this.adv), bD.sM.textAlign(xm, 2);
		for (var aDp = this.k - 4 * adu - this.vL - this.adv, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) xm.fillText(bD.ou.a6B(bg.adm[h[aC]], 0, .31 * this.j), 0, aC * aDp / 9);
		var g1 = bg.nQ;
		for (xm.setTransform(1, 0, 0, 1, fg + .39 * this.j, fi + 2 * adu + this.adv), bD.sM.textAlign(xm, 0), xm.fillText(bD.tK.a7C(100 * g1[0] / (1024 * Math.max(g1[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) xm.fillText(g1[h[aC]].toString(), 0,
			aC * aDp / 9);
		xm.fillText(bD.tK.a7C(100 * (1 - ah.hN[aE.fJ] / g1[7]), 0), 0, aDp)
	}, this.ae6 = function(fg, fi) {
		xm.setTransform(1, 0, 0, 1, fg + .79 * this.j, fi + 2 * adu + this.adv), bD.sM.textAlign(xm, 2);
		var aC, aDp = this.k - 4 * adu - this.vL - this.adv;
		for (xm.fillStyle = bE.pf, aC = 2; 0 <= aC; aC--) xm.fillText(bD.ou.a6B(bg.adm[aC + 8], 0, .31 * this.j), 0, aC * aDp / 9);
		xm.fillText(bD.ou.a6B(bg.adm[18], 0, .31 * this.j), 0, 3 * aDp / 9), xm.fillStyle = bE.pe, xm.fillText(bD.ou.a6B(bg.adm[11], 0, .31 * this.j), 0, 4 * aDp / 9), xm.fillStyle = bE.pz, xm.fillText(bD.ou.a6B(bg.adm[13], 0, .31 * this.j), 0,
				5 * aDp / 9), xm.fillText(bD.ou.a6B(bg.adm[15], 0, .31 * this.j), 0, 6 * aDp / 9), xm.fillText(bD.ou.a6B(bg.adm[16], 0, .31 * this.j), 0, 7 * aDp / 9), xm.fillText(bD.ou.a6B(bg.adm[12], 0, .31 * this.j), 0, 8 * aDp / 9), xm
			.fillStyle = bE.py, xm.fillText(bD.ou.a6B(bg.adm[17], 0, .31 * this.j), 0, aDp), xm.fillStyle = bE.pf;
		var g1 = bg.nQ,
			aIF = g1[8] + g1[9] + g1[10] + g1[18],
			aIF = bD.tK.a2Q(aIF),
			aTb = xm.measureText(aIF).width,
			fg = (xm.setTransform(1, 0, 0, 1, fg + .83 * this.j + aTb, fi + 2 * adu + this.adv), xm.fillText(bD.tK.a2Q(g1[8]), 0, 0), xm.fillText(bD.tK.a2Q(g1[9]), 0, aDp / 9), xm.fillText(bD.tK.a2Q(g1[10]), 0, 2 * aDp / 9), xm.fillText(bD.tK
				.a2Q(g1[18]), 0, 3 * aDp / 9), xm.fillStyle = bE.pe, xm.fillText(aIF, 0, 4 * aDp / 9), xm.fillStyle = bE.pz, xm.fillText(bD.tK.a2Q(g1[13]), 0, 5 * aDp / 9), xm.fillText(bD.tK.a2Q(g1[15]), 0, 6 * aDp / 9), xm.fillText(bD.tK
				.a2Q(g1[16]), 0, 7 * aDp / 9), xm.fillText(bD.tK.a2Q(g1[12]), 0, 8 * aDp / 9), g1[12] + g1[13] + g1[15] + g1[16]);
		xm.fillStyle = bE.py, xm.fillText(bD.tK.a2Q(fg), 0, aDp), xm.fillStyle = bE.pO
	}, this.a90 = function(h, a5W, aCV) {
		var aC, e, gI;
		return this.ady < 0 || 1 < this.ady ? .25 : (aC = this.ady * (bg.aW6 - 1), gI = h[e = Math.floor(aC)], gI += (aC - e) * (h[e < bg.aW6 - 1 ? e + 1 : e] - gI), xm.strokeStyle = bE.pR, .04 < this.ady && this.ae8(0, this.adt - a5W * Math.pow(
				gI, aCV), aC * this.ads / (bg.aW6 - 1), this.adt - a5W * Math.pow(gI, aCV)), .04 < gI / bg.max[this.eI] && this.ae8(aC * this.ads / (bg.aW6 - 1), this.adt, aC * this.ads / (bg.aW6 - 1), this.adt - a5W * Math.pow(gI, aCV)), xm
			.fillStyle = bE.q1, xm.beginPath(), xm.arc(aC * this.ads / (bg.aW6 - 1), this.adt - a5W * Math.pow(gI, aCV), Math.max(2, .014 * this.k), 0, 2 * Math.PI), xm.fill(), h = this.ady * bi.aEY, h = 0 === ah.nU[aE.fJ] ? Math.floor(h * bg
				.adl) : Math.floor(h * bi.kr()), xm.fillStyle = bE.pO, xm.fillText(1 === aCV ? bD.tK.a7C(gI / 100, 2) : bD.tK.a2Q(Math.floor(gI)), -this.ue, this.adt - a5W * Math.pow(gI, aCV)), bD.sM.textAlign(xm, 1), xm.fillText(aX.aEL(h),
				aC * this.ads / (bg.aW6 - 1), this.adt + this.adw - (a1.a2.ik() ? 2 : 0) - this.aAv), bD.sM.textAlign(xm, 2), a5W * Math.pow(gI, aCV) / this.adt)
	}, this.ae8 = function(nv, nw, o8, o9) {
		xm.beginPath(), xm.moveTo(nv, nw), xm.lineTo(o8, o9), xm.stroke()
	}
}

function c2() {
	this.ae9 = "https://territorial.io/changelog", this.aW7 = "https://territorial.io/terms", this.aW8 = "https://territorial.io/privacy", this.aeA = "https://territorial.io/tutorial", this.aeB = "https://territorial.io/players", this.aeC =
		"https://territorial.io/clans", this.aeD = "https://territorial.io/clan-results", this.aSk = "https://patreon.com/c/territorial", this.aFq = "https://play.google.com/store/apps/details?id=territorial.io", this.a4D =
		"https://apps.apple.com/app/id1581110913", this.aFr = "https://discord.gg/pthqvpTXmh", this.aFs = "https://www.instagram.com/davidtschacher/", this.a1y =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dE() {
	this.z = new aeE, this.a1G = new aeF, this.dk = function() {
		this.z.dk()
	}, this.ee = function() {
		0 !== this.z.w0 && this.z.w0--
	}
}

function aeF() {
	this.xl = function() {
		if (0 !== bS.z.w0 && (xm.globalAlpha = Math.min(bS.z.w0 / 580, 1), xm.drawImage(bS.z.aeI, 1 + aT.a1E(), 1 + aT.a1F()), xm.globalAlpha = 1, aE.hx)) {
			for (var nv = jD / im, nw = jE / im, o8 = (i.j + jD) / im, o9 = (i.k + jE) / im, h8 = bS.z.aeJ * im, aeK = bS.z.aeK, aC = aE.ku - 1; 0 <= aC; aC--) ! function(aC, h8, nv, nw, o8, o9, aeK) {
				var highlight;
				0 === ah.nU[aC] || 0 === ah.hN[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (h8 *= 2), o8 = i.j * ((ah.jS[aC] + ah.jT[aC] + 1) / 2 - nv) / (o8 - nv) - .5 * h8, nv = i.k * ((ah.jU[
					aC] + ah.jV[aC] + 1) / 2 - nw) / (o9 - nw) - .5 * h8, o8 > i.j) || nv > i.k || o8 < -h8 || nv < -h8 || (highlight ? xm.setTransform(2 * im, 0, 0, 2 * im, o8, nv) : xm.setTransform(im, 0, 0, im, o8, nv), xm.drawImage(
					aeK[aE.iT ? bj.fX[aC] : 1], 0, 0))
			}(aC, h8, nv, nw, o8, o9, aeK);
			xm.setTransform(im, 0, 0, im, 0, 0)
		}
	}
}

function aeE() {
	this.aeJ = 28, this.w0 = 0, this.aeI = null;
	var aeM = this.aeK = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function aeQ(iV, aeR) {
		var fg, fi, fL, iw, a5x = bD.sM.zY(iV, iV),
			ib = bD.sM.getContext(a5x, !0),
			iY = bD.sM.getImageData(ib, iV, iV),
			zj = iY.data,
			lp = (iV >> 1) - .5,
			aeS = .5 + lp;
		for (aeS *= aeS, fi = 0; fi < iV; fi++)
			for (fg = 0; fg < iV; fg++) iw = (iw = fg - lp) * iw + (iw = fi - lp) * iw, zj[fL = 4 * (fi * iV + fg)] = aeR[0], zj[1 + fL] = aeR[1], zj[2 + fL] = aeR[2], zj[3 + fL] = (aeS - iw) * aeR[3] / aeS;
		return ib.putImageData(iY, 0, 0), a5x
	}

	function adO(aC, ib, a5x, iV) {
		var highlight, fg, fi;
		0 !== ah.nU[aC] && 0 !== ah.hN[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (iV *= 2), fg = ah.jS[aC] + ah.jT[aC] + 1 - iV - 2 >> 1, fi = ah.jU[aC] + ah.jV[aC] + 1 - iV - 2 >> 1, highlight ? ib
			.drawImage(a5x[aE.iT ? 9 === aE.lC && 5 === aF.iI[aC] ? 3 : bj.fX[aC] : aC < aE.ku ? 1 : 0], fg, fi, iV, iV) : ib.drawImage(a5x[aE.iT ? 9 === aE.lC && 5 === aF.iI[aC] ? 3 : bj.fX[aC] : aC < aE.ku ? 1 : 0], fg, fi))
	}
	this.dk = function() {
		var ts;
		this.w0 = 700,
			function(ts) {
				var iV = ts.aeJ;
				if (ts.aeK = [], aeM = [], aE.iT) {
					for (var aC = 0; aC <= aE.a0L; aC++) ts.aeK.push(aeQ(iV, bj.abi[bj.lH[aC]])), aeM.push(aeQ(iV >> 1, bj.abi[bj.lH[aC]]));
					9 === aE.lC && aeM.push(aeQ(iV, bj.abi[1]))
				} else ts.aeK.push(aeQ(iV, bj.abi[7])), ts.aeK.push(aeQ(iV, bj.abi[4])), aeM.push(aeQ(iV >> 1, bj.abi[7]))
			}(this),
			function(ts, aeW) {
				var aC, aeI = ts.aeI,
					ib = bD.sM.getContext(aeI, !0),
					fZ = aE.fW,
					iV = ts.aeJ >> 1;
				ib.imageSmoothingEnabled = !1, ib.setTransform(1, 0, 0, 1, 0, 0), aeW && ib.clearRect(0, 0, aeI.width, aeI.height);
				if (9 === aE.lC) {
					iV <<= 1;
					ts = b0.lL[5];
					for (aC = fZ - ts; aC < fZ; aC++) adO(aC, ib, aeM, iV);
					fZ -= ts, iV >>= 1
				}
				for (aC = aE.ku; aC < fZ; aC++) adO(aC, ib, aeM, iV)
			}(this, null !== (ts = this).aeI && ts.aeI.width === bV.fk - 2 && ts.aeI.height === bV.fl - 2 || (ts.aeI = bD.sM.zY(bV.fk - 2, bV.fl - 2), !1)), aE.hx || this.a7U()
	}, this.abj = aeQ, this.a7U = function() {
		for (var fZ = aE.ku, iV = this.aeJ, aeK = this.aeK, ib = bD.sM.getContext(this.aeI, !0), aC = 0; aC < fZ; aC++) adO(aC, ib, aeK, iV)
	}
}

function dF() {
	function aeZ() {
		8 === aE.lC && 1 === aE.a38 && bU.a2l.a37()
	}

	function aeY(player) {
		aE.hx ? (al.aL4(player), am.aOW(), aE.lE && aE.ri.ee()) : b4.aGG(player)
	}
	this.rA = function(player) {
		aO.a3L(player, player === aE.fJ ? 21 : 22), aeY(player), aeZ()
	}, this.rf = function(player) {
		1 === aE.a38 && 0 !== ah.nU[player] && 2 !== ah.a6S[player] && aeY(player), aE.a3B--, aE.a3A--, aO.a3L(player, 4), bD.gv.hk(2) && aX.nG(!0), aeZ()
	}
}

function dP() {
	this.aYS = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aDm = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.pO, "rgb(170,170,170)"
	], this.aea = [bE.pO, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.pO, bE.pF], this.aeb = [bE.pF, bE.pO, bE.pO, bE.pO, bE.pF, bE.pF, bE.pF, bE.pF, bE.pO];
	var aOg = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aNz = ["rgba(" + aOg[0] + ",", "rgba(" + aOg[1] + ",", "rgba(" + aOg[2] + ",", "rgba(" + aOg[3] + ",", "rgba(" + aOg[4] + ",", "rgba(" + aOg[5] + ",", "rgba(" + aOg[6] + ",", "rgba(" + aOg[7] + ",", "rgba(" + aOg[8] + ",", "rgba(" + aOg[9] +
			","
		], this.aO0 = ["rgb(" + aOg[0] + ")", "rgb(" + aOg[1] + ")", "rgb(" + aOg[2] + ")", "rgb(" + aOg[3] + ")", "rgb(" + aOg[4] + ")", "rgb(" + aOg[5] + ")", "rgb(" + aOg[6] + ")", "rgb(" + aOg[7] + ")", "rgb(" + aOg[8] + ")", "rgb(" + aOg[9] +
			")"
		], this.a3U = null, this.abi = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aU2 = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lH = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fX = new Uint8Array(aE.fW), this.aDn = new Uint8Array(aE.fW), this.a0R = new Uint16Array(aE.fW), this.a0S = new Uint16Array(this.lH.length + 1), this.a0T = new Uint16Array(this.lH.length), this
		.dl = function() {
			this.a3U = [L(544), L(545), L(546), L(547), L(548), L(549), L(550), L(551), L(552)]
		}, this.dk = function() {
			if (this.fX.fill(0), this.aDn.fill(0), this.aec(), aE.iT) {
				if (9 === aE.lC) {
					for (var fX = bj.fX, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fX[aC] = 1;
					var fZ = aE.fW;
					for (aC = aE.data.teamPlayerCount[7]; aC < fZ; aC++) fX[aC] = 2;
					bj.lH[1] = 7, bj.lH[2] = 8
				} else aE.lE ? function() {
					var aU2 = bj.aU2,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.ku - 1; 0 <= aC; aC--) colorsData[aC] = az.kB(262144);
					var aen = 0,
						fp = 768,
						aU1 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fc = 0, ft = 0; ft < 3; ft++) fc += Math.abs(aU2[aC][ft] - aU1[ft]);
							fc < fp && (aen = aC, fp = fc)
						} var aeo = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) aeo[aC] = teamPlayerCount[aC];
					var lH = bj.lH,
						aep = new Uint8Array(9),
						h2 = (lH[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) aeo[aC] && (aep[aC] = h2, lH[h2++] = aC);
					var kA = aE.ku,
						fX = bj.fX;
					aeo[aen] ? (aeo[aen]--, fX[0] = aep[aen]) : kA = 0;
					var ej = 0;
					for (aC = kA; aC < aE.a0E; aC++) {
						var iR = lH[ej];
						if (aeo[iR]) aeo[iR]--, fX[aC] = aep[iR];
						else if (aC--, 9 <= ++ej) return console.log("error 325")
					}
				}() : this.ee();
				! function() {
					for (var fZ = aE.fW, a0R = bj.a0R, a0S = bj.a0S, a0T = bj.a0T, fX = bj.fX, lH = bj.lH, a0K = lH.length, buffer = new Array(a0K), aC = 0; aC < a0K; aC++) buffer[aC] = [];
					for (aC = 0; aC < fZ; aC++) buffer[lH[fX[aC]]].push(aC);
					for (aC = 1; aC <= a0K; aC++) a0S[aC] = a0S[aC - 1] + buffer[aC - 1].length;
					for (aC = 0; aC < a0K; aC++)
						for (var h2 = buffer[aC].length, lp = a0S[aC], iR = 0; iR < h2; iR++) a0R[iR + lp] = buffer[aC][iR];
					var ku = aE.ku;
					for (aC = 0; aC < a0K; aC++)
						for (h2 = buffer[aC].length, lp = a0S[aC], iR = 0; iR < h2; iR++)
							if (a0R[iR + lp] >= ku) {
								a0T[aC] = iR;
								break
							}
				}(), ! function() {
					for (var fZ = aE.fW, fX = bj.fX, aDn = bj.aDn, lH = bj.lH, aC = 0; aC < fZ; aC++) aDn[aC] = lH[fX[aC]];
					9 === aE.lC && aDn.fill(1, fZ - b0.lL[5])
				}()
			}
		}, this.aec = function() {
			for (var aC = this.lH.length - 1; 0 <= aC; aC--) this.lH[aC] = aC
		}, this.ee = function() {
			var a2F = new Uint8Array(aE.ku),
				a2G = new Uint8Array(aE.ku),
				aeh = new Uint16Array(8),
				aei = new Uint16Array(this.lH.length);
			this.aej(a2F, a2G, aeh, 1), this.aKa(aeh), this.aek(aei, a2F, a2G), this.ael(a2F, a2G, aei), this.aem()
		}, this.aej = function(a2F, a2G, aeo, aeq) {
			for (var ft, e, aer, fZ = this.lH.length - aeq, h = new Uint16Array(fZ), aU2 = this.aU2, colorsData = aE.data.colorsData, aC = aE.ku - 1; 0 <= aC; aC--) {
				for (ft = fZ; aeq <= ft; ft--) h[ft - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aU2[ft][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aU2[ft][1]) + Math.abs(4 * (63 & colorsData[aC]) - aU2[ft][2]);
				for (aer = 768, ft = fZ - 1; 0 <= ft; ft--) h[e = (ft + aC) % fZ] < aer && (aer = h[e], a2F[aC] = e);
				for (aeo[a2F[aC]] += 4, aer = 768, ft = fZ - 1; 0 <= ft; ft--) h[e = (ft + aC) % fZ] < aer && e !== a2F[aC] && (aer = h[e], a2G[aC] = e);
				aeo[a2G[aC]]++
			}
		}, this.aKa = function(aeo) {
			for (var ft, lr, fZ = this.lH.length - 1, aC = fZ; 0 <= aC; aC--) this.lH[aC] = aC;
			for (aC = fZ - 1; 0 <= aC; aC--) aeo[aC]++;
			for (aC = 1; aC <= fZ; aC++) {
				for (lr = 0, ft = 1; ft < fZ; ft++) aeo[ft] > aeo[lr] && (lr = ft);
				aeo[lr] = 0, this.lH[aC] = lr + 1
			}
		}, this.aek = function(aei, a2F, a2G) {
			var ft, a3q, ej, fc, e, o7, uv, aes = this.lH.length - 1,
				sp = new Uint16Array(aes),
				aet = [],
				aeu = 0,
				a3p = [],
				aev = [];
			loop: for (var aC = 0; aC < aE.ku; aC++)
				if (null !== (a3q = bD.tK.a3r(ah.a3o[aC]))) {
					for (ft = a3p.length - 1; 0 <= ft; ft--)
						if (a3q === a3p[ft]) {
							aev[ft].push(aC), aeu = Math.max(aeu, aev[ft].length);
							continue loop
						} a3p.push(a3q), aet.push(!1), aev.push([aC]), aeu = Math.max(aeu, 1)
				}
			for (; 2 < aE.a0L && aeu > bO.g0(aE.ku, aE.a0L);) aE.a0L--, aE.lC--;
			for (ft = a3p.length - 1; 0 <= ft; ft--) {
				for (fc = -1, ej = a3p.length - 1; 0 <= ej; ej--) !aet[ej] && (-1 === fc || aev[ej].length > aev[fc].length) && (fc = ej);
				for (ej = aes - 1; 0 <= ej; ej--) sp[ej] = 1;
				for (ej = aev[fc].length - 1; 0 <= ej; ej--) sp[a2F[aev[fc][ej]]] += 3, sp[a2G[aev[fc][ej]]]++;
				for (aC = aes - 1; 0 <= aC; aC--) {
					for (e = fc % aes, ej = aes - 1; 0 <= ej; ej--) sp[ej] > sp[e] && (e = ej);
					for (o7 = -1, ej = aE.a0L; 0 < ej; ej--)
						if (this.lH[ej] === e + 1) {
							o7 = ej;
							break
						} if (sp[e] = 0, -1 !== o7) {
						for (uv = 0, ej = aE.a0L; 0 < ej; ej--) aei[o7] > aei[ej] && uv++;
						if (uv !== aE.a0L - 1) {
							for (ej = aev[fc].length - 1; 0 <= ej; ej--) aei[o7]++, this.fX[aev[fc][ej]] = o7;
							break
						}
					}
				}
				aet[fc] = !0
			}
		}, this.ael = function(a2F, a2G, aei) {
			for (var aC, iv, fZ = this.lH.length - 1, border = bO.g0(aE.ku, aE.a0L), aew = (0 < aE.ku % aE.a0L && border++, new Uint8Array(1 + fZ)), ft = fZ; 1 <= ft; ft--) aew[this.lH[ft]] = ft;
			for (aC = 0; aC < aE.ku; aC++) iv = aew[a2F[aC] + 1], 0 === this.fX[aC] && iv <= aE.a0L && aei[iv] < border && (aei[iv]++, this.fX[aC] = iv);
			for (aC = 0; aC < aE.ku; aC++) iv = aew[a2G[aC] + 1], 0 === this.fX[aC] && iv <= aE.a0L && aei[iv] < border && (aei[iv]++, this.fX[aC] = iv);
			for (ft = aE.a0L; 1 <= ft; ft--)
				for (aC = aE.ku - 1; 0 <= aC && !(aei[ft] >= border); aC--) 0 === this.fX[aC] && (aei[ft]++, this.fX[aC] = ft)
		}, this.aem = function() {
			if (aE.a0L < 8) aE.a0L++, aE.lC++, aE.a0M = 1;
			else
				for (var aC = aE.ku; aC < aE.fW; aC++) this.fX[aC] = 1 + aC % aE.a0L
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
			for (var aex = !1, aey = !1, fc = 3; 0 <= fc; fc--) {
				var h7 = hF[player][aC] + fb[fc];
				if (ad.aKk(h7, player)) continue loop;
				aex = aex || ad.iq(h7), aey = aey || ad.aKj(h7)
			}
			aex ? hG[player].push(hF[player][aC]) : aey ? fy[player].push(hF[player][aC]) : ad.a0n(hF[player][aC], player), hF[player][aC] = hF[player][fZ - 1], hF[player].pop(), fZ--
		}
	}, this.hD = function() {
		ah.hN[gU] -= gV
	}, this.hE = function(border) {
		for (var fZ = border.length, aC = fZ - 1; 0 <= aC; aC--) ad.a18(gU, border[aC]) || (border[aC] = border[fZ - 1], border.pop(), fZ--)
	}, this.hH = function(border) {
		for (var fZ = border.length, aC = fZ - 1; 0 <= aC; aC--) !ad.a18(gU, border[aC]) && ad.fU(border[aC]) && (border[aC] = border[fZ - 1], border.pop(), fZ--)
	}, this.hI = function(border) {
		for (var fc, h7, fZ = border.length, fb = ad.fb, aC = fZ - 1; 0 <= aC; aC--)
			for (fc = 3; 0 <= fc; fc--)
				if (h7 = border[aC] + fb[fc], ad.aKk(h7, gU)) {
					ah.hF[gU].push(border[aC]), border[aC] = border[fZ - 1], border.pop(), fZ--;
					break
				}
	}, this.hJ = function() {
		for (var fc, h7, fb = ad.fb, aC = gV - 1; 0 <= aC; aC--)
			for (fc = 3; 0 <= fc; fc--) h7 = gX[aC] + fb[fc], ad.a1B(gU, h7) && ad.aKq(h7) && (ah.hF[gU].push(h7), ad.h4(h7, gU))
	}, this.hK = function() {
		var fg, fi;
		loop: for (; ah.jU[gU] < ah.jV[gU];) {
			for (fg = ah.jT[gU]; fg >= ah.jS[gU]; fg--)
				if (ad.a18(gU, 4 * (ah.jU[gU] * bV.fk + fg))) break loop;
			ah.jU[gU]++
		}
		loop: for (; ah.jU[gU] < ah.jV[gU];) {
			for (fg = ah.jT[gU]; fg >= ah.jS[gU]; fg--)
				if (ad.a18(gU, 4 * (ah.jV[gU] * bV.fk + fg))) break loop;
			ah.jV[gU]--
		}
		loop: for (; ah.jS[gU] < ah.jT[gU];) {
			for (fi = ah.jV[gU]; fi >= ah.jU[gU]; fi--)
				if (ad.a18(gU, 4 * (fi * bV.fk + ah.jS[gU]))) break loop;
			ah.jS[gU]++
		}
		loop: for (; ah.jS[gU] < ah.jT[gU];) {
			for (fi = ah.jV[gU]; fi >= ah.jU[gU]; fi--)
				if (ad.a18(gU, 4 * (fi * bV.fk + ah.jT[gU]))) break loop;
			ah.jT[gU]--
		}
	}, this.fS = function(player, k3) {
		return 0 === bj.fX[player] || bj.fX[player] !== bj.fX[k3]
	}, this.i5 = function(player) {
		for (var aC, h8, fZ = ah.hF[player].length, fb = ad.fb, fc = 3; 0 <= fc; fc--)
			for (h8 = fb[fc], aC = 0; aC < fZ; aC++)
				if (ad.fQ(ah.hF[player][aC] + h8)) return !0;
		return !1
	}, this.aL0 = function(player) {
		for (var aC, h8, fZ = ah.hF[player].length, fb = ad.fb, fc = 3; 0 <= fc; fc--)
			for (h8 = fb[fc], aC = 0; aC < fZ; aC++)
				if (ad.k5(ah.hF[player][aC]) && ad.fQ(ah.hF[player][aC] + h8)) return !0;
		return !1
	}, this.i8 = function(a6Y, a6Z) {
		for (var aC, ea, h8, h7, acS = ah.hF[a6Y].length, acT = ah.hF[a6Z].length, fb = (acT < acS && (ea = a6Y, a6Y = a6Z, a6Z = ea, ea = acS, acS = acT, 0), ad.fb), fc = 3; 0 <= fc; fc--)
			for (h8 = fb[fc], aC = 0; aC < acS; aC++)
				if (h7 = ah.hF[a6Y][aC] + h8, ad.h9(h7) && ad.fR(h7) === a6Z) return !0;
		return !1
	}, this.aL1 = function(a6Y, a6Z) {
		for (var aC, h8, h7, acS = ah.hF[a6Y].length, fb = ad.fb, fc = 3; 0 <= fc; fc--)
			for (h8 = fb[fc], aC = 0; aC < acS; aC++)
				if (ad.k5(ah.hF[a6Y][aC]) && (h7 = ah.hF[a6Y][aC] + h8, ad.h9(h7)) && ad.fR(h7) === a6Z) return !0;
		return !1
	}
}

function db() {
	this.rr = new aez
}

function aez() {
	this.iB = function(player) {
		bD.gv.a6T(player) && aO.a1b(80, L(553), 637, 0, bE.qF, bE.pL, -1, !1)
	}, this.iE = function(player) {
		bD.gv.a6T(player) && aO.a1b(80, L(554), 637, 0, bE.qF, bE.pL, -1, !1)
	}
}

function af0() {
	this.af1 = 0, this.ee = function() {
		aP.ee(), aa.ee(), i.ee(), b1.z.ee(), ay.aK5(), bX.eS.ee(), bq.wC.ee(), bi.ds && (bi.ds = !1, ab.xl())
	}
}

function af2() {
	this.eZ = bi.eZ, this.eI = 0, this.af1 = 0, this.aK3 = 0, this.af3 = null, this.af4 = 7, this.af5 = 0, this.dk = function() {
		this.aK3 = 0, this.af3 = [], this.eI = 0, this.af1 = 0
	}, this.aXQ = function(aD) {
		if (aE.hx) this.aEZ(aD);
		else if (this.af3.push(aD), 2 === aE.a38) {
			for (var aC = 0; aC < this.af3.length; aC++) bB.qk.ee(this.af3[aC]);
			this.af3 = []
		}
	}, this.aEZ = function(aD) {
		2 !== aE.a38 && (bB.qk.ee(aD), bC.ee(), aX.aEZ(this.aK3), this.aK3 === aE.a7a ? (aE.ri.ee(), this.aK3 = 0, this.eI = 0, this.af1 = 0, this.eZ = bi.eZ) : (this.aK3++, ag.a7T(), ag.nG(!0), be.render()))
	}, this.ee = function() {
		i.ee(), aE.hx ? (bi.ds = aX.aEZ(-1) || bi.ds, nI()) : (0 !== this.eI || bi.eZ >= this.eZ && (this.eZ += bi.aEY * Math.floor(1 + (bi.eZ - this.eZ) / bi.aEY), 2 === aE.a38 ? n6() : this.af6(), this.eI++, 27 < bi.eZ - this.af5)) && this
		.af7(), nD(), bi.ds && (bi.ds = !1, a1C()), this.af5 = bi.eZ
	}, this.af7 = function() {
		bi.ds = !0, nF(), this.eI = 0
	}, this.af6 = function() {
		var yZ, aC;
		if (this.af1 !== 7 * this.aK3) n8(), be.render();
		else {
			yZ = !1;
			loop: for (; this.af8() && (yZ = !0, n8(), 2 !== aE.a38) && 0 < this.af3.length;)
				for (aC = this.af4 - 2; 0 <= aC; aC--)
					if (n8(), 2 === aE.a38) break loop;
			yZ ? be.render() : (n6(), be.a7W())
		}
	}, this.af8 = function() {
		return 0 < this.af3.length && (this.aK3++, bB.qk.ee(this.af3[0]), this.af3.shift(), !0)
	}
}

function af9() {
	var afA, afB, afC, aK3, afD, eI = 0,
		eZ = bi.eZ;

	function afG() {
		! function() {
			if (!aE.hx) return;
			if (aE.lE) return;
			if (2 !== aE.a38)
				if (afD % 7 != 0) afD++;
				else if (aK3 === aE.a7a) {
				if (!afJ()) return;
				aX.aEZ(aK3), aE.ri.ee()
			} else {
				if (!afJ()) return;
				afD++, aK3++, ag.a7T(), ag.nG(!0)
			}
			return 1
		}() && afJ() && n8()
	}

	function afH() {
		eI = 0, (aE.hx ? (bi.ds = aX.aEZ(aK3 - (afD % 7 == 0 ? 0 : 1) + afD % 7 / 7) || bi.ds, nI) : aN.hj || !bF.a7x ? nI : (bi.ds = !0, nF))()
	}

	function afJ() {
		var aC, fZ, afK = bC.rg.aYv,
			gI = bC.rg.aYw,
			gK = bC.rg.aYx,
			gM = bC.rg.aYy,
			afL = bC.rg.aYz,
			afM = bC.rg.aZ0;
		if (!(afA >= afM.length)) {
			if (afM = afM[afA], afL[afA]) {
				for (fZ = afB + afM, aC = afB; aC < fZ; aC++) bB.qk.rV(afK[aC], gI[aC], gK[aC], gM[aC]);
				afB += afM, afA++
			} else ++afC >= afM && (afA++, afC = 0);
			return __fx.replay.tick++, 1
		}
		aO.a4Q("Replay file smaller than expected."), bF.a5G(!1), aE.a38 = 2
	}
	this.af1 = 0, this.dk = function() {
		afD = aK3 = afC = afB = afA = 0, __fx.replay.registerHooks({
			advance: () => afG(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.ds = !0
			},
			isEnded: () => 2 === aE.a38,
			getTickInterval: () => bi.aEY
		})
	}, this.ee = function() {
		var acs;
		i.ee(), __fx.replay.frame() ? n6() : bF.aBm() < 1.7 ? 0 === eI ? bi.eZ >= eZ && (acs = bi.aEY / bF.aBm(), eZ += acs * Math.floor(1 + (bi.eZ - eZ) / acs), 2 === aE.a38 || aN.hj || !bF.a7x ? n6() : (afG(), be.render()), eI++) : afH() :
			function() {
				var acs;
				if (bi.eZ >= eZ)
					if (2 === aE.a38 || aN.hj || !bF.a7x) n6(), eZ = bi.eZ;
					else {
						for (acs = bi.aEY / bF.aBm(), 16 < (bi.eZ - eZ) / acs && (eZ = bi.eZ - 16 * acs); bi.eZ >= eZ && 2 !== aE.a38;) eZ += acs, afG();
						be.render()
					} afH()
			}(), nD(), bi.ds && (bi.ds = !1, a1C())
	}, this.a3J = function() {
		bC.rg.aZ0.length - afA <= 2 || aO.a4Q("Replay file larger than expected.")
	}
}

function afN() {
	var eI = 0,
		eZ = bi.eZ;
	this.af1 = 0, this.ee = function() {
		i.ee(), aE.hx ? nI() : 0 === eI ? bi.eZ >= eZ && (eZ += bi.aEY * Math.floor(1 + (bi.eZ - eZ) / bi.aEY), 2 === aE.a38 || aN.hj ? n6() : (n8(), be.render()), eI++) : ((aN.hj ? nI : (bi.ds = !0, nF))(), eI = 0), nD(), bi.ds && (bi.ds = !1,
			a1C())
	}
}

function dX() {
	this.a3I = null, this.ds = !1, this.eZ = 0, this.aEY = 56;
	var afO = 0;

	function afP() {
		bi.eZ = afO = performance.now(), bi.a3I.ee(), window.requestAnimationFrame(afP)
	}
	this.dk = function() {
		this.a7u(), window.requestAnimationFrame(afP), this.eZ = performance.now()
	}, this.a7m = function() {
		aE.hi ? (this.a3I = new af9, this.a3I.dk()) : aE.lE ? this.a3I = new afN : (this.a3I = new af2, this.a3I.dk())
	}, this.a7u = function() {
		this.a3I = new af0, this.ds = !0
	}, this.ee = function() {
		this.a3I.af1++
	}, this.kr = function() {
		return this.a3I.af1
	}, this.aX6 = function() {
		var ea = performance.now();
		ea < afO + 1e3 || (this.eZ = ea, this.a3I.ee())
	}
}

function cx() {
	var aJS = 0,
		afQ = !0;
	this.ee = function() {
		var ea, aGq;
		bi.eZ < aJS || (aJS = bi.eZ + 3e3, aE.hi) || aE.lE || bD.gv.hl(aE.fJ) || (ea = new Date, aGq = ea.getUTCSeconds(), afQ ? aGq < 43 && (afQ = !1) : aGq < 43 || (aJS += 52e3, afQ = !0, aGq = (ea.getUTCMinutes() + 2) % 60, ea = aE.lC < 7 ?
			0 : 8 === aE.lC ? 2 : 9 === aE.lC ? 3 : 1, aP.aA8(ea, aGq) && (aGq = ea, aGq = [L(555), L(556), L(557), L(558)][aGq], aO.a9j(aGq))))
	}
}

function cr() {
	var nv, nw, o8, o9, afT = 0,
		afU = 0;

	function afW() {
		return Math.pow(Math.pow(o8 - nv, 2) + Math.pow(o9 - nw, 2), .5)
	}

	function afV(e) {
		nv = i.l * e.touches[0].clientX, nw = i.l * e.touches[0].clientY, o8 = i.l * e.touches[1].clientX, o9 = i.l * e.touches[1].clientY
	}
	this.a4i = function(e) {
		return 1 < e.touches.length ? (afU = bi.eZ, afT = 3, afV(e), aM.tX(), !0) : (afT = 0, !1)
	}, this.a4j = function(e) {
		var aLv, it, iu;
		return 0 !== aE.a38 && 1 < e.touches.length && (afT = Math.max(afT - 1, 0), aI.oD() && (aLv = afW(), afV(e), e = afW(), it = Math.floor((nv + o8) / 2), iu = Math.floor((nw + o9) / 2), aT.aCD(it, iu, Math.max(.125, e) / Math.max(.125,
			aLv)), bi.ds = !0), !0)
	}, this.a56 = function() {
		var fg, fi;
		return !!(afT && (afT = 0, bi.eZ < afU + 500)) && (fg = (nv + o8) / 2, fi = (nw + o9) / 2, aM.a50(fg, fi), aM.click(fg, fi, !0) && (bi.ds = !0), !0)
	}
}

function d8() {
	this.size = 0, this.eI = 0, this.aD = null, this.dk = function(aD) {
		this.eI = 0, this.aD = aD, this.size = aD.length
	}, this.wr = function() {
		this.aD = null
	}, this.rU = function(size) {
		for (var g1 = 0, aD = this.aD, oD = this.eI + size - 1, aC = this.eI; aC <= oD; aC++) g1 |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << oD - aC;
		return this.eI += size, this.eI > 8 * this.size && console.error("Unwrapper Overflow"), g1
	}, this.aXY = function(size) {
		var ft = size >> 1;
		return (1 << ft) * this.rU(size - ft) + this.rU(ft)
	}, this.aXZ = function(afX) {
		return this.size === bG.aXX(afX)
	}, this.aZD = function(a00, afY, afZ) {
		var h2 = this.rU(a00);
		if (!h2) return null;
		for (var a00 = Math.max(h2, afZ), h = new(afY <= 8 ? Uint8Array : afY <= 16 ? Uint16Array : Uint32Array)(a00), aC = 0; aC < h2; aC++) h[aC] = this.rU(afY);
		afZ = h[h2 - 1];
		return afZ && h.fill(afZ, h2), h
	}, this.aZE = function(a00, afa, afZ) {
		var h2 = this.rU(a00);
		if (!h2) return null;
		for (var a00 = Math.max(h2, afZ), h = new Array(a00), aC = 0; aC < h2; aC++) h[aC] = this.aZB(afa);
		return h.fill(h[h2 - 1], h2), h
	}, this.aZB = function(a00) {
		return bJ.z9.zD(this.rU(a00))
	}, this.aZC = function() {
		var a2O = this.rU(30);
		if (!(6 * a2O > 8 * this.size - this.eI)) {
			var s3 = bI.f0.ub(bI.f0.uc(a2O)),
				s3 = bD.tK.a7O(s3, "_", "/");
			s3 = bD.tK.a7O(s3, "-", "+");
			for (var afb = "";
				(s3.length + afb.length) % 4;) afb += "=";
			s3 = "data:image/png;base64," + s3 + afb;
			var aLX = new Image;
			aLX.onload = function() {
				bC.aMU.aMV(aLX), aLX.onload = null, aLX = null
			}, aLX.src = s3
		}
	}
}

function dR() {
	this.aaF = 0, this.aaG = 0, this.aaB = 0, this.aaC = 0, this.aaD = 0, this.aaE = 0, this.aF9 = [0, 0, 0, 0], this.oC = function() {
		this.aaF = aT.a1E(), this.aaG = aT.a1F(), this.aaB = -this.aaF, this.aaC = -this.aaG, this.aaD = i.j / im, this.aaE = i.k / im, this.aF9[0] = Math.floor(this.aaB), this.aF9[1] = Math.floor(this.aaC), this.aF9[2] = Math.floor(this.aF9[0] +
			this.aaD + 1), this.aF9[3] = Math.floor(this.aF9[1] + this.aaE + 1), be.aF7 = !0
	}
}

function cs() {
	var aAr, nh;
	this.dk = function() {
		aAr = 1, nh = 0
	}, this.ee = function() {
		0 < aAr && (nh = 0 === nh ? bi.eZ + 16 : nh, aAr = (aAr -= .001 * (bi.eZ - nh)) < 0 ? 0 : aAr, nh = bi.eZ, bi.ds = !0)
	}, this.xl = function() {
		0 < aAr && (xm.fillStyle = "rgba(0,0,0," + aAr + ")", xm.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eI = 0, this.aD = null, this.dk = function(aD) {
		this.eI = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(afX) {
		return this.dk(new Uint8Array(this.aXX(afX))), this.aD
	}, this.wr = function() {
		this.aD = null
	}, this.a9 = function(size, aAF) {
		for (var aD = this.aD, oD = this.eI + size - 1, aC = this.eI; aC <= oD; aC++) aD[aC >> 3] |= (aAF >> oD - aC & 1) << 7 - (7 & aC);
		this.eI += size, this.eI > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aXW = function(size, aAF) {
		var ft = size >> 1,
			fc = 1 << ft;
		this.a9(size - ft, bO.g0(aAF, fc)), this.a9(ft, aAF % fc)
	}, this.afe = function(size) {
		for (var aD = this.aD, oD = this.eI + size, aC = this.eI; aC < oD; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.aXX = function(afX) {
		return afX + 7 >> 3
	}, this.aff = function(h, kA, oD, afg) {
		for (var aC = kA; aC < oD; aC++) this.a9(afg, h[aC])
	}
}

function d7() {
	this.dk = function() {
		this.h = [], this.eI = 0
	}, this.aXx = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(afh, value) {
		for (var h = this.h, oD = this.eI + afh - 1, afi = 1 + (oD >> 3); h.length < afi;) h.push(0);
		for (var aC = this.eI; aC <= oD; aC++) h[aC >> 3] |= (value >> oD - aC & 1) << 7 - (7 & aC);
		this.eI += afh
	}, this.dr = function(h, a00, afY) {
		var afj = bD.sU.a5r(h);
		this.a9(a00, afj);
		for (var aC = 0; aC < afj; aC++) this.a9(afY, h[aC])
	}, this.aZV = function(h, a00, afa) {
		var afj = bD.sU.a5r(h);
		this.a9(a00, afj);
		for (var aC = 0; aC < afj; aC++) this.aZT(h[aC], afa)
	}, this.aZT = function(s3, a00) {
		var fZ = s3.length;
		this.a9(a00, fZ);
		for (var aC = 0; aC < fZ; aC++) this.a9(16, s3.charCodeAt(aC))
	}, this.aZU = function(a5x) {
		var afk = (a5x = a5x.toDataURL()).split(",");
		if (afk.length < 2) console.log("error 266");
		else {
			a5x = bD.tK.a7O(a5x = afk[afk.length - 1], "/", "_"), a5x = bD.tK.a7O(a5x, "\\+", "-");
			var a5x = bD.tK.a7O(a5x, "=", ""),
				zM = bJ.f0.zJ(a5x),
				fZ = zM.length;
			this.a9(30, fZ);
			for (var aC = 0; aC < fZ; aC++) this.a9(6, zM[aC])
		}
	}
}
a(), self.aiCommand746 = function(g1) {
	0 === g1 ? bx() : 1 !== g1 || !a1 || 1 !== a1.id || a1.e3 < 14 || bM.g2()
}, setTimeout(bx, 1e4), window.onload = function() {
	bx()
};