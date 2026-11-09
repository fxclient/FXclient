var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, bw, gQ, gR, gS, gT, gU, gV, gW, gX, gY, gZ, ga, gb, gc,
	ip, jF, jG, aBe, mX, kh, a4x, y3, a1Y, aFj, a8E, a8F, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "<br>", "0.8em", "center", "rgb(", "auto", "hidden", "rgba(", "   ", "flex", "span", "1em", "0.5em", "email",
		"Data", "50%", " / ", "territorial.io", "click", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "function", "undefined", "pointer", "middle",
		"break-word", "bold", "Player ", "Escape", "0.6em", "0.4em", "underline", "text", "scroll", "nowrap", "inline-block", "button", "Value", "Enter", "20%", "1.5em", "' target='_blank'>", "🔄 Reload", "translate(-50%, -50%)", "string",
		"rgba(0,0,0,0.8)", "pre-wrap", "orange", "number", "mouseleave", "left", "keydown", "https://", "game.territorial.io", "focus", "fixed", "ellipsis", "blur", "aria-label", "Zombie", "Space", "Reload", "Redacted ", "Gold Seizure",
		"Battle Royale", "<a href='", "</a>", "1v1", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.2em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "⚠️ ", "zombie", "wheel", "userIcon", "true", "touchstart", "top", "tls7", "system-ui",
		"style", "right", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "oneVsOne", "noFullSending", "mouseover", "mouseout", "long", "logo", "loading",
		"italic ", "https://territorial.io/", "file", "error", "en-US", "dotted", "data:image/png;base64,", "crown", "contextmenu", "column", "clock", "break-all", "blur(4px)", "battleRoyale", "aria-pressed", "arena", "account", "accept", "_blank",
		"[Redacted Message]", "Seed", "Remove Punishments", "Patreon", "Mare Nostrum", "Interest", "False Reporter", "Close", "Cheater", "Bot ", "Block Account", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui", "30%", "255,255,255",
		"1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1.3em", "1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", "/log/?r=", ". Duration: x", "-1px 1px 0 lightgray,",
		"-1px -1px 0 lightgray,", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> "
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
	this.dw = 2, this.dx = 1770, this.dy = 0;
	this.rVersion = 26, this.e2 = 0, this.dk = function() {
		this.o = "2.17.3", this.e4 = "9 Nov 2026 [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.e5 = 0 <= this.hostname.indexOf("github.io"), this.e6 = 0 <=
			this.hostname.indexOf("game.territorial.io"), this.aB = function() {
				try {
					return window.self !== window.top
				} catch (e) {
					return !0
				}
			}(), this.e8 = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.aA + " validMod: " + +this.e5)
	}, this.n = 0
}

function e9() {
	var eA = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		eB = [100, 60, 30, 15, 6, 1],
		eC = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		eD = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		eF = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.eG = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments"]
	], this.eH = function(id, eI, eJ) {
		eI = this.eK(eI);
		return +(eC[eI][id] > eJ)
	}, this.eK = function(eI) {
		for (var aC = 0; aC < eB.length; aC++)
			if (eB[aC] <= eI) return aC;
		return eB.length
	}, this.eL = function(eI) {
		return eA[this.eK(eI)]
	}, this.eM = function(id, eN) {
		return eD[id].replace(new RegExp("x", "g"), eN)
	}, this.eO = function(id, eN) {
		return eF[id].replace(new RegExp("x", "g"), eN)
	}, this.eP = function(id, eQ) {
		return this.eG[5][id]
	}
}

function dK() {
	this.eR = new eS, this.eT = new eU, this.turnstile = new eV, this.dk = function() {
		a1.a2.eW(), this.turnstile.dk()
	}, this.eX = function() {
		return bm.buffer.data[160].value
	}
}

function eS() {
	var eY = 12e3;
	this.show = function(eZ) {
		return !eZ && !bX.eX() && (0 === a1.id ? bX.eT.show() : !(bi.ea < eY) && (eZ = 1 === a1.id ? 72e4 : 108e4, eY = bi.ea + eZ, 2 === m.dw) && a1.a2.ec(Math.floor(eZ)))
	}
}

function eU() {
	var ed = null,
		eY = 2e4,
		ee = 0;
	this.ef = function() {
		bi.ea < eY || (eY = bi.ea + 1e4, 0 !== a1.id) || ed || bX.eX() || (b1.z.eg(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b1.eh.ei(5) : eY = bi.ea + 1e3)
	}, this.ej = function(ek) {
		ed = ek
	}, this.show = function() {
		return !(!ed || bi.ea < ee) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (ee = bi.ea + 6e4, (new el).show(ed.em, ed.colors, ed.id), !(ed = null)))
	}
}

function eV() {
	this.en = 0;
	var eq, eo = null,
		ep = 0,
		er = "",
		es = 0,
		et = null,
		eu = -1,
		ev = -1,
		ew = 0;

	function f6() {
		if (null !== et && null !== eo) {
			ep = 0;
			try {
				window.turnstile.remove(eo), et.remove()
			} catch (e) {
				console.log("turnstile remove failed " + e)
			}
			eo = et = null
		}
	}

	function f0(fA) {
		return "" !== er && es + 1e3 * (300 - fA) > performance.now()
	}
	this.dk = function() {
		var ey;
		m.dy || !m.aA && !m.e5 ? (console.log("turnstile cannot be loaded"), this.en = -1) : ((ey = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", ey.async = !0, ey.onload =
			function() {
				bX.turnstile.en = 1, console.log("turnstile onload"), bX.turnstile.ez()
			}, ey.onerror = function() {
				bX.turnstile.en = -1, console.log("turnstile onerror")
			}, document.head.appendChild(ey))
	}, this.ez = function() {
		var eb;
		return !(1 !== this.en || (window.turnstile ? ep ? (console.log("turnstile error 246"), 1) : f0(30) || (eb = performance.now()) < ew && eu === bJ.f1.f2(bm.buffer.data[105].value, 5) && ev === aa.f3 || (er = "", ep = 1, eq = eb, (et =
			document.createElement("div")).style.position = "fixed", et.style.left = "0", et.style.top = "0", et.style.zIndex = "100", document.body.appendChild(et), console.log("turnstile render"), eo = window.turnstile.render(
			et, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(f4) {
					console.log("turnstile success " + Math.floor(performance.now() - eq)), er = f4, es = performance.now(), bX.turnstile.f5(), f6()
				},
				"expired-callback": function() {
					f6(), console.log("turnstile expired " + Math.floor(performance.now() - eq))
				},
				"error-callback": function() {
					f6(), console.log("turnstile callback error " + Math.floor(performance.now() - eq)), bX.turnstile.en = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		f6()
	}, this.f5 = function() {
		f0(8) && bq.f7 && b1.z.eg(b1.z.f8) && (ew = performance.now() + 36e5 - 1e4, eu = bJ.f1.f2(bm.buffer.data[105].value, 5), ev = aa.f3, b1.eh.f9(er), er = "", console.log("sendTokenToLobby success"))
	}
}

function cb() {
	this.fB = new fC
}

function fC() {
	this.fD = function(fE) {
		var fH;
		return bV.fF(bV.fG) && aE.data.passableMountains && (fH = ad.fI(fE), this.fJ(aE.fK, fH) || this.fL(aE.fK, fH)) && 0 !== (fH = function(fg) {
			for (var fh = bP.fi(fg), fj = bP.fk(fg), max = Math.max(bV.fl, bV.fm) - 2, fn = max * max, fo = !1, fp = 0, fq = 0; fq < max; fq++) {
				var fr, fM = function(fh, fj, fq) {
					for (var aC = 0; aC <= fq; aC++)
						for (var ft = -1; ft < 2; ft += 2)
							for (var fu = -1; fu < 2; fu += 2)
								for (var ek = 0; ek < 2; ek++) {
									var fE = function(fh, fj) {
										if (bP.fw(fh, fj)) {
											fh = bP.fx(fh, fj), fj = bP.fQ(fh);
											if (ad.fV(fj) && ad.fy(fj)) return fh
										}
										return 0
									}(fh + ek * ft * aC + (1 - ek) * fu * fq, fj + ek * fu * fq + (1 - ek) * ft * aC);
									if (fE) return fE
								}
					return 0
				}(fh, fj, fq);
				fM && (fr = bP.fs(fh, fj, fM)) < fn && (fp = fM, fn = fr, fo || (fo = !0, max = Math.floor(Math.sqrt(fr)) + 1))
			}
			return fp
		}(bP.fO(fE))) && (fE = bP.fQ(fH), ad.fR(fE) || (fE = ad.fS(fE)) !== aE.fK && bv.fT(fE, aE.fK)) ? fH : 0
	}, this.fU = function(player, fM) {
		fM = bP.fQ(fM);
		if (ad.fV(fM)) {
			if (ad.fR(fM)) bR.fW[0] = aE.fX;
			else if (ad.fS(fM) !== bR.fW[0]) return !1;
			for (var fY = function(fE) {
					var fc = ad.fc,
						fY = [];
					loop: for (var fd = 3; 0 <= fd; fd--) {
						var fe = fE + fc[fd];
						if (ad.ff(fe)) {
							for (var id = ad.fI(fe), aC = 0; aC < fY.length; aC++)
								if (id === fY[aC]) continue loop;
							bR.fb[fY.length] = fe, fY.push(id)
						}
					}
					return fY
				}(fM), fa = fY.length, aC = 0; aC < fa; aC++)
				if (this.fJ(player, fY[aC]) || this.fL(player, fY[aC])) return bR.fb[0] = bR.fb[aC], !0
		}
		return !1
	}, this.fJ = function(player, fH) {
		for (var fz = ah.fz[player], fa = fz.length, g0 = Math.max(bO.g1(fa, 12), 1), fc = ad.fc, aC = 0; aC < fa; aC += g0)
			for (var fP = fz[aC], fd = 3; 0 <= fd; fd--) {
				var fe = fP + fc[fd];
				if (ad.ff(fe) && fH === ad.fI(fe)) return !0
			}
		return !1
	}, this.fL = function(player, fH) {
		for (var fz = ah.fz[player], fa = fz.length, fc = ad.fc, aC = 0; aC < fa; aC++)
			for (var fP = fz[aC], fd = 3; 0 <= fd; fd--) {
				var fe = fP + fc[fd];
				if (ad.ff(fe) && fH === ad.fI(fe)) return !0
			}
		return !1
	}
}

function dD() {
	this.h = new Array(4), this.g4 = new Uint16Array(2), this.g5 = new Uint16Array(2), this.g6 = new Int32Array(2), this.g7 = new Uint32Array(2), this.g8 = new Uint32Array(2), this.g9 = new Uint8Array(4), this.gA = new Uint8Array(4), this.fb =
		new Uint32Array(4), this.gB = new Uint32Array(5), this.fW = new Uint32Array(8), this.gC = new Uint32Array(8), this.gD = new Uint16Array(16), this.gE = new Uint16Array(512), this.gF = new Uint16Array(512), this.gG = new Uint16Array(512), this
		.gH = new Uint16Array(0), this.dk = function() {
			var fa = bV.fl * bV.fm;
			this.gH.length !== fa && (this.gH = new Uint16Array(fa))
		}, this.gI = function(h, gJ) {
			return h[0] = gJ, h
		}, this.gK = function(h, gJ, gL) {
			return h[0] = gJ, h[1] = gL, h
		}, this.gM = function(h, gJ, gL, gN) {
			return h[0] = gJ, h[1] = gL, h[2] = gN, h
		}, this.gO = function(h, gJ, gL, gN, gP) {
			return h[0] = gJ, h[1] = gL, h[2] = gN, h[3] = gP, h
		}
}

function gd() {
	gW = 0, gX = 2048, gY = new Uint32Array(4 * gX), gZ = 0, ga = new Uint32Array(gX), gb = new Uint8Array(bV.fl * bV.fm)
}

function ge(player) {
	gR = player, gc = !1, gf(), gg();
	for (var aC = ae.gh(gR) - 1; 0 <= aC; aC--) gQ = aC, gi();
	gc && gj()
}

function gj() {
	bv.gk(), bv.gl()
}

function gi() {
	gV = ae.gm(gR, gQ), gS = ae.gn(gR, gQ), gT = ae.go(gR, gQ), gp(), (0 !== gW && (gr(), gs()) ? gt : gq)()
}

function gs() {
	if (!((gU = bO.g1(gS, gW)) > aE.gu)) {
		if (!gT) return !1;
		var gv = gW * (1 + aE.gu);
		gS += bD.gw.gx(gR, gv - gS), gU = bO.g1(gS, gW)
	}
	return !0
}

function gr() {
	for (var aC = gW - 1; 0 <= aC; aC--) gb[bO.g1(gY[aC], 4)] = 0
}

function gq() {
	1 === ae.gh(gR) && aG.gy(gR);
	var eb = bD.gw.gz(gR, gS);
	bg.h0(gR, gS - eb, 12), ae.h1(gR, gQ)
}

function gf() {
	for (var player = gR, h2 = ah.h2, fa = Math.min(h2[player].length, gX), h3 = 0, h4 = ga, aC = fa - 1; 0 <= aC; aC--) h4[h3++] = h2[player][aC];
	gZ = h3
}

function gg() {
	for (var aC = ah.h2[gR].length - 1; 0 <= aC; aC--) ad.fV(ah.h2[gR][aC]) && ad.h5(ah.h2[gR][aC], gR);
	ah.h2[gR] = []
}

function gp() {
	gW = 0, (gV === aE.fX ? h6 : h7)()
}

function h7() {
	for (var h8, h9, aC, fc = ad.fc, fd = 3; 0 <= fd; fd--)
		for (aC = gZ - 1; 0 <= aC; aC--) h8 = ga[aC] + fc[fd], h9 = bO.g1(h8, 4), 0 === gb[h9] && ad.hA(h8) && ad.fS(h8) === gV && (gb[h9] = 1, gY[gW++] = h8)
}

function h6() {
	for (var h8, h9, aC, fc = ad.fc, fd = 3; 0 <= fd; fd--)
		for (aC = gZ - 1; 0 <= aC; aC--) h8 = ga[aC] + fc[fd], h9 = bO.g1(h8, 4), 0 === gb[h9] && ad.fR(h8) && (gb[h9] = 1, gY[gW++] = h8)
}

function gt() {
	hB() ? (hC(), gV !== aE.fX && hD()) : gq()
}

function hD() {
	bv.hE(), bv.hF(ah.hG[gV]), bv.hF(ah.hH[gV]), bV.fF(bV.fG) && bv.hF(ah.fz[gV]), bv.hI(ah.h2[gV]), bv.hJ(ah.hH[gV]), bv.hJ(ah.fz[gV]), bv.hK(), bv.hL()
}

function hC() {
	gc = !0, ae.hM(gR, gQ, gS), ae.hN(gR, gQ), ah.hO[gR] += gW, bv.hP(), hQ()
}

function hB() {
	return (gV === aE.fX ? hR : hS)()
}

function hS() {
	var hT = gW * aE.gu,
		hU = hV(),
		hW = hX(),
		hU = hT + 2 * hU + hW,
		hZ = gU * gW;
	return hU < hZ ? (gS -= hU, bg.h0(gR, hU, 13), ha(hU - hT, hW), !0) : gT && 0 === hW ? (gS -= hZ, hZ += bD.gw.gx(gR, hU - hZ + 1), bg.h0(gR, hZ, 13), ha(hZ - hT, 0), !0) : (gS -= hZ, bg.h0(gR, hZ, 13), ha(hZ - hT, hW), !1)
}

function ha(hZ, hW) {
	if (0 < hW) {
		if (hZ <= hW) return bg.h0(gV, hZ, 13), void ae.hb(gV, gR, hW - hZ);
		ae.hb(gV, gR, 0), hZ -= hW
	}
	hZ = bO.g1(hZ, 2), hZ = Math.min(ah.hc[gV], hZ), bg.h0(gV, hZ, 13), ah.hc[gV] -= hZ
}

function hX() {
	return ae.hd(gV, gR)
}

function hV() {
	return bO.g1(gW * ah.hc[gV], 1 + bO.g1(10 * ah.hO[gV], 16))
}

function hR() {
	var he = gW * aE.gu;
	return gS -= he, bg.h0(gR, he, 13), !0
}

function hQ() {
	for (var aC = gW - 1; 0 <= aC; aC--) ah.h2[gR].push(gY[aC]), ah.hG[gR].push(gY[aC]), ad.h5(gY[aC], gR)
}

function dI() {
	var hf = 0,
		hg = 0;
	this.hh = function(fh, fj) {
		hf = fh, hg = fj
	}, this.hi = function(code) {
		var hq, hs, fM;
		aE.hj || aE.hk || aN.hl || (bD.gw.hm(0) || bD.gw.hm(1)) && bD.gw.hn(aE.fK) && (aS.ho(hf, hg) ? aS.hp = !1 : aQ.ho(hf, hg) || (hq = bP.hr(hf), hs = bP.ht(hg), fM = bP.fx(hq, hs), bP.hu(hq, hs) && (0 === code ? function(fM) {
			var hy, fE, fP;
			aE.hz ? -1 !== (hy = bu.i0(fM)) && bB.i1.i2(fM) : (fE = bP.fQ(fM), ad.ff(fE) ? (hy = an.fB.fD(fE)) && (fP = bP.fQ(hy), fP = ad.fR(fP) ? aE.fX : ad.fS(fP), bB.i1.i4(aS.i5(), hy, fP)) : (hy = bu.i6(fM)) < 0 || (fE = bP
				.fQ(hy), ad.fR(fE) ? bv.i7(aE.fK) ? bB.i1.i8(aS.i5(), aE.fX) : ae.gh(aE.fK) && b2.i9(aE.fX, aS.i5()) : (fP = ad.fS(fE), bv.fT(fP, aE.fK) && (bv.iA(aE.fK, fP) ? bB.i1.i8(aS.i5(), fP) : ae.gh(aE.fK) && b2.i9(
					fP, aS.i5())))))
		}(fM) : 1 === code ? function(fM) {
			bQ.iB.iC(aE.fK, fM) && bB.i1.iD(aS.i5(), bR.gC[7])
		}(fM) : 2 === code && function(fM) {
			bQ.iE.iF(aE.fK, fM) && bB.i1.iG(aS.i5())
		}(fM))))
	}, this.iH = function() {
		if (!(aE.hj || aE.hk || aN.hl) && bD.gw.hm(1)) {
			var h8 = aE.fK;
			if (bD.gw.hn(h8)) {
				var fa = ae.gh(h8);
				if (fa < 1) ! function() {
					var h8 = aE.fK;
					if (bv.i7(h8)) bB.i1.i8(aS.i5(), aE.fX);
					else
						for (var fc = ad.fc, hG = ah.hG, fa = hG[h8].length, iR = Math.floor(Math.random() * fa), aC = 0; aC < fa; aC++)
							for (var iS = 3; 0 <= iS; iS--) {
								var iT = hG[h8][(aC + iR) % fa] + fc[iS];
								if (ad.hA(iT)) {
									iT = ad.fS(iT);
									if (iT !== h8 && (!aE.iV || bv.fT(h8, iT))) return bB.i1.i8(aS.i5(), iT)
								}
							}
				}();
				else {
					for (var iJ = 0, iK = ae.gn(h8, 0), aC = 1; aC < fa; aC++) {
						var iL = ae.gn(h8, aC);
						iL < iK && (iK = iL, iJ = aC)
					}
					bB.i1.i8(aS.i5(), ae.gm(h8, iJ))
				}
			}
		}
	}, this.iM = function() {
		if (!(aE.hj || aE.hk || aN.hl) && bD.gw.hn(aE.fK) && bD.gw.hm(1)) return ax.iN ? ax.iO(aE.fK) ? void bB.i1.iP(1) : void 0 : void(ax.iQ(aE.fK) && bB.i1.iM())
	}
}

function iW(iX, size, iY, iZ, font) {
	var aC, ic = .2,
		canvas = document.createElement("canvas"),
		ie = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = iX, canvas.height = iX, ie.font = size + font, ie.textAlign = "center", ie.textBaseline = "middle", ie.fillStyle = "red", aC = 0; aC < iY.length; aC++) ie.fillText(iY[aC], .5 * iX, .5 * iX);
	return -1 < (canvas = function(ia) {
		var aC, eI, fd = ia.data;
		for (aC = fd.length - 4; 0 <= aC; aC -= 4)
			if (eI = fd[aC], iZ <= eI) return Math.floor(aC / (4 * iX));
		return -1
	}(ie.getImageData(0, 0, iX, iX))) && (ic = (canvas - .5 * iX + .1 * size) / size), Math.max(ic, 0)
}

function dB() {
	this.ih = new Int16Array(4), this.ii = new Int16Array(4), this.ij = null, this.dk = function() {
		var aC;
		for (this.ih[0] = -bV.fl, this.ih[1] = 1, this.ih[2] = bV.fl, this.ih[3] = -1, this.ij = new Int16Array([-bV.fl, 1 - bV.fl, 1, bV.fl + 1, bV.fl, bV.fl - 1, -1, -bV.fl - 1]), aC = 0; aC < 4; aC++) this.ii[aC] = 4 * this.ih[aC]
	}, this.ik = function() {
		return bO.il(Math.floor(.15 * (1 + .25 * a1.a2.im()) * i.io / ip), 4, 128)
	}, this.iq = function(fE, id) {
		for (var ir = this.ii, aC = 0; aC < 4; aC++) {
			var fP = fE + ir[aC];
			if (ad.is(fP) && ad.fI(fP) === id) return !0
		}
		return !1
	}, this.it = function(player, fE) {
		return !ad.fR(fE) && player === ad.fS(fE)
	}, this.fs = function(hq, hs, fM) {
		return (hq -= this.fi(fM)) * hq + (hs -= this.fk(fM)) * hs
	}, this.iu = function(iv, iw, ix) {
		iv = this.iz(iv) - this.j0(ix), iw = this.j2(iw) - this.j3(ix);
		return Math.sqrt(iv * iv + iw * iw)
	}, this.j4 = function(j5, j6) {
		var iy = this.fi(j5) - this.fi(j6),
			j5 = this.fk(j5) - this.fk(j6);
		return ~~Math.sqrt(iy * iy + j5 * j5 + .5)
	}, this.j7 = function(j5, j6) {
		var iy = this.fi(j5) - this.fi(j6),
			j5 = this.fk(j5) - this.fk(j6);
		return iy * iy + j5 * j5
	}, this.j8 = function(j9, jA, jB, jC) {
		return (j9 -= jB) * j9 + (jA -= jC) * jA
	}, this.jD = function(h8, jE) {
		return bO.g1(jE * ah.hc[h8], 1e3)
	}, this.iz = function(iv) {
		return 16 * (iv + jF) / ip
	}, this.j2 = function(iw) {
		return 16 * (iw + jG) / ip
	}, this.jH = function(fd) {
		return 16 * fd / ip
	}, this.hr = function(iv) {
		return Math.floor((iv + jF) / ip)
	}, this.ht = function(iw) {
		return Math.floor((iw + jG) / ip)
	}, this.hu = function(hq, hs) {
		return 1 <= hq && 1 <= hs && hq < bV.fl - 1 && hs < bV.fm - 1
	}, this.fi = function(fM) {
		return fM % bV.fl
	}, this.fk = function(fM) {
		return bO.g1(fM, bV.fl)
	}, this.fx = function(hq, hs) {
		return hs * bV.fl + hq
	}, this.jI = function(hq, hs) {
		return 4 * this.fx(hq, hs)
	}, this.jJ = function(fM) {
		return this.fw(this.fi(fM), this.fk(fM))
	}, this.fw = function(hq, hs) {
		return 0 < hq && hq < bV.fl - 1 && 0 < hs && hs < bV.fm - 1
	}, this.fQ = function(fM) {
		return fM << 2
	}, this.fO = function(fE) {
		return fE >> 2
	}, this.jK = function(fM) {
		return bV.fl * this.fk(fM) * 256 + (this.fi(fM) << 4)
	}, this.jL = function(fM) {
		return this.jK(fM) + 8 + (bV.fl << 7)
	}, this.jM = function(ix) {
		return bV.fl * (this.j3(ix) >> 4) + (this.j0(ix) >> 4)
	}, this.jN = function(ix) {
		ix = this.jM(ix);
		return (this.fi(ix) >> 5) + bQ.jO.jP * (this.fk(ix) >> 5)
	}, this.j0 = function(ix) {
		return ix % (bV.fl << 4)
	}, this.j3 = function(ix) {
		return bO.g1(ix, bV.fl << 4)
	}, this.jQ = function(fM, iS) {
		return fM + this.ih[iS]
	}, this.jR = function(fE, iS) {
		return fE + this.ii[iS]
	}, this.jS = function(j5, j6) {
		var iy = this.fi(j6) - this.fi(j5),
			j6 = this.fk(j6) - this.fk(j5);
		return Math.abs(iy) >= Math.abs(j6) ? 1 + 2 * (iy < 0) : 2 * (0 < j6)
	}, this.jT = function(player) {
		return this.fx(ah.jU[player] + ah.jV[player] >> 1, ah.jW[player] + ah.jX[player] >> 1)
	}, this.jY = function(player) {
		return this.fx(az.jZ(ah.jU[player], ah.jV[player]), az.jZ(ah.jW[player], ah.jX[player]))
	}
}

function cp() {
	this.ja = new jb, this.jc = new jd, this.je = new jf, this.performance = new jg, this.jh = new ji, this.jj = new jk, this.jl = new jm, this.jn = new jo, this.jp = new jq, this.dk = function() {
		this.ja.dk(), this.je.dk(), this.performance.dk(), this.jh.dk(), this.jj.dk()
	}, this.ef = function() {
		this.performance.ef(), this.ja.ef(), this.je.jr()
	}
}

function ji() {
	var js, ju = new Uint16Array(8);

	function k2(size, player) {
		for (var aC = ah.h2[player].length - 1; size <= aC; aC--) ad.k8(ah.h2[player][aC], player)
	}
	this.dk = function() {
		js = 0
	}, this.jv = function(player, jw) {
		return bR.fW[1] = ah.h2[player].length, bR.fW[0] === aE.fX ? ap.jh.jx(player) : this.jy(player, bR.fW[0]), (0 !== bR.fW[1] || 0 !== ah.h2[player].length) && !(!jw && bR.fW[1] === ah.h2[player].length || (bR.fW[0] === aE.fX ? ah.jz[
			player]++ : ah.k0[player]++, 0))
	}, this.k1 = function(player) {
		k2(bR.fW[1], player), ae.ej(player, bR.g7[0], bR.fW[0]), aG.k3(player, !1)
	}, this.k4 = function(player, k5, fa, iK) {
		var k6 = bO.g1(12 * ah.hc[player], 1024);
		iK -= iK >= bO.g1(ah.hc[player], 2) ? k6 : 0, k2(fa, player), ae.ej(player, iK, k5), ah.hc[player] -= iK + k6, aG.k3(player, !1)
	}, this.jy = function(player, k5) {
		for (var iS, fc = ad.fc, aC = ah.hG[player].length - 1; 0 <= aC; aC--)
			if (ad.k7(ah.hG[player][aC]))
				for (iS = 3; 0 <= iS; iS--)
					if (ad.hA(ah.hG[player][aC] + fc[iS]) && ad.fS(ah.hG[player][aC] + fc[iS]) === k5) {
						ah.h2[player].push(ah.hG[player][aC]);
						break
					}
	}, this.jx = function(player) {
		for (var fc = ad.fc, aC = ah.hG[player].length - 1; 0 <= aC; aC--)
			if (ad.k7(ah.hG[player][aC]))
				for (var iS = 3; 0 <= iS; iS--)
					if (ad.fR(ah.hG[player][aC] + fc[iS])) {
						ah.h2[player].push(ah.hG[player][aC]);
						break
					}
	}, this.k9 = function(player, kA) {
		var aC, ft, iS, iU, fa = ah.hG[player].length,
			kB = 256 <= fa ? 12 : 32 <= fa ? 6 : 1,
			kC = fa - 1 - az.kD(kB),
			fc = ad.fc;
		js = 0;
		loop: for (aC = kC; 0 <= aC; aC -= kB)
			for (iS = 3; 0 <= iS; iS--)
				if ((iU = ad.fR(ah.hG[player][aC] + fc[iS]) ? aE.fX : ad.fS(ah.hG[player][aC] + fc[iS])) === aE.fX || ad.hA(ah.hG[player][aC] + fc[iS]) && iU !== player && (kA || bv.fT(player, iU))) {
					for (ft = js - 1; 0 <= ft; ft--)
						if (ju[ft] === iU) continue loop;
					if (ju[js] = iU, 8 <= ++js) return !0
				}
		return 0 < js
	}, this.kE = function(player, kA) {
		var aC, iS, iU, fc = ad.fc;
		for (js = 0, aC = ah.hG[player].length - 1; 0 <= aC; aC--)
			for (iS = 3; 0 <= iS; iS--)
				if ((iU = ad.fR(ah.hG[player][aC] + fc[iS]) ? aE.fX : ad.fS(ah.hG[player][aC] + fc[iS])) === aE.fX || ad.hA(ah.hG[player][aC] + fc[iS]) && iU !== player && (kA || bv.fT(player, iU))) return ju[js++] = iU, !0;
		return !1
	}, this.kF = function() {
		for (var fu, aC = js - 1; 0 <= aC; aC--)
			if (ju[aC] === aE.fX) {
				for (js--, fu = aC; fu < js; fu++) ju[fu] = ju[fu + 1];
				return !0
			} return !1
	}, this.kG = function(player) {
		for (var fu, aC = js - 1; 0 <= aC; aC--)
			if (ae.kH(player, ju[aC]))
				for (js--, fu = aC; fu < js; fu++) ju[fu] = ju[fu + 1];
		return 0 === js
	}, this.kI = function() {
		for (var aC = js - 1; 0 <= aC; aC--)
			if (bD.gw.kJ(ju[aC])) return !0;
		return !1
	}, this.kK = function() {
		for (var aC = js - 1; 0 <= aC; aC--) bD.gw.kJ(ju[aC]) || (ju[aC] = ju[--js]);
		return 0 < js
	}, this.kL = function(player) {
		for (var fu, kM = ju[0], kN = ah.hc[kM] + ae.hd(kM, player), aC = js - 1; 1 <= aC; aC--)(fu = ah.hc[ju[aC]] + ae.hd(ju[aC], player)) < kN && (kM = ju[aC], kN = fu);
		return kM
	}, this.kO = function(player) {
		var k, kP = ju[0];
		if (1 !== js)
			for (var kQ = bO.g1(ah.jV[player] + ah.jU[player], 2), kR = bO.g1(ah.jX[player] + ah.jW[player], 2), fq = kS(kQ - bO.g1(ah.jV[kP] + ah.jU[kP], 2)) + kS(kR - bO.g1(ah.jX[kP] + ah.jW[kP], 2)), aC = js - 1; 1 <= aC; aC--)(k = kS(kQ - bO
				.g1(ah.jV[ju[aC]] + ah.jU[ju[aC]], 2)) + kS(kR - bO.g1(ah.jX[ju[aC]] + ah.jW[ju[aC]], 2))) < fq && (fq = k, kP = ju[aC]);
		return kP
	}, this.kT = function() {
		for (var kU = ju, kV = kU[0], hc = ah.hc, kW = hc[kV], aC = js - 1; 1 <= aC; aC--) {
			var h8 = kU[aC],
				fu = hc[h8];
			kW < fu && (kV = h8, kW = fu)
		}
		return kV
	}, this.kX = function() {
		return ju[az.kD(js)]
	}
}

function jk() {
	function kn(player, k5, kd) {
		3 <= kd && 2142 < bi.kt() && (k5 === aE.fX || ah.hc[k5] < bO.g1(ah.hc[player], 20)) && aF.ki(player, 20)
	}

	function kq(player, iK, k5, kd) {
		3 <= kd && kd < 6 && bO.g1(ah.hc[player], 8) > ah.hc[k5] && (iK = Math.max(bO.g1(11 * ah.hc[k5], 5), bO.g1(ah.hc[player], 10)));
		kd = ah.h2[player].length;
		ap.jh.jy(player, k5), ap.jh.k4(player, k5, kd, iK)
	}

	function km(player, iK) {
		var k5 = aE.fX,
			fa = ah.h2[player].length;
		ap.jh.jx(player), ah.h2[player].length !== fa && ap.jh.k4(player, k5, fa, iK)
	}
	this.kY = new Uint8Array(aE.fX), this.dk = function() {
		this.kY.fill(0)
	}, this.kZ = function(player, iK) {
		var kb, kd, ke, kf;
		ae.ka(player) && (kb = af.kc(player), 3 <= (kd = aF.iK[player]) && kd < 6 && (iK = Math.max(ah.hc[player] - kb, iK)), ke = ah.hH[player].length, kf = ah.hG[player].length, 30 * ah.hO[player] > aE.kg && kh[player] < 10 && 100 * kf <= ke &&
			aF.ki(player, 10), aE.iV ? function(player, iK, kd, kb) {
				var k5;
				if (ap.jh.k9(player, !1) || ap.jh.kE(player, !1)) {
					if (!ap.jh.kG(player))
						if (ap.jh.kF()) km(player, iK), kn(player, aE.fX, kd);
						else {
							if (az.ko(aF.kp[kd])) k5 = ap.jh.kL(player);
							else {
								if (ap.jh.kI() && az.ko(aF.kr[kd]) && ap.jh.kK(), 6 === kd) return kq(player, iK, ap.jh.kX(), kd);
								k5 = ap.jh.kO(player)
							}
							kq(player, iK, k5, kd), kn(player, k5, kd)
						}
				} else bQ.kk.ef(player) || ap.jl.ef(player) || ! function(player, iK, kd, kb) {
					var kY = ap.jj.kY;
					kY[player] = 0;
					var ku = bj.fY[player];
					if (0 !== ku) {
						var kv = ah.hc[player],
							hO = ah.hO;
						if (player < aE.kw && (iK = kv), !(kv < hO[player] || 5 === kd && kv < kb || 4 === kd && kv < bO.g1(kb, 2))) {
							bk.kx(ku);
							for (var fa = bR.g5[0], gE = bR.gE, aC = az.kD(fa), fu = 0; fu < fa; fu++) {
								var ek = gE[(fu + aC) % fa];
								if (kY[ek]) return bB.ky.kz(player, ek, iK)
							}
							var l0 = bQ.z.l0;
							for (fu = 0; fu < fa; fu++)
								if (ek = gE[(fu + aC) % fa], l0[ek] && ek !== player) return bB.ky.kz(player, ek, iK)
						}
					}
				}(player, iK, kd, kb)
			}(player, iK, kd, kb) : (!kf || ke && (ke < kf && !az.kD(10) || 100 * kf <= ke && az.kD(3) || !az.kD(8))) && bQ.kk.ef(player) || function(player, iK, kd) {
				ap.jh.k9(player, !0) || ap.jh.kE(player, !0) ? ap.jh.kG(player) || (ap.jh.kF() ? km(player, iK) : az.ko(aF.kp[kd]) ? kq(player, iK, ap.jh.kL(player), kd) : 5 === kd ? kq(player, iK, ap.jh.kT(), kd) : (ap.jh.kI() && az.ko(aF
					.kr[kd]) && ap.jh.kK(), kq(player, iK, 6 === kd ? ap.jh.kX() : ap.jh.kO(player), kd))) : ap.jl.ef(player)
			}(player, iK, kd))
	}
}

function c9() {
	var l1 = new Uint8Array(aE.fX),
		l2 = new Uint16Array(aE.fX),
		l3 = new Uint16Array(aE.fX),
		l4 = new Uint8Array(aE.fX),
		l5 = (this.iK = new Uint8Array(aE.fX), new Uint16Array(aE.fX)),
		l6 = new Uint16Array(aE.fX);

	function lL(aC) {
		l1[aC] = 1 + bO.g1(l5[aC] * az.random(), 10 * az.value(100))
	}
	this.l7 = null, this.kr = [97, 94, 70, 40, 20, 0, 100], this.l8 = [500, 450, 400, 300, 80, 50, 100], this.kp = [0, 0, 5, 25, 50, 100, 0], this.l9 = [60, 74, 112, 200, 256, 512, 512], this.lA = [1, 2, 3, 4, 6, 8, 1], this.lB = [500, 450, 400, 300,
		80, 50, 100
	], this.lC = [100, 150, 250, 400, 600, 1e3, 100], this.dl = function() {
		this.l7 = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dk = function() {
		l1.fill(0), l2.fill(0), l3.fill(0), l4.fill(0), this.iK.fill(0), l5.fill(0), l6.fill(0);
		var lD = aE.kw;
		if (9 === aE.lE) this.lF();
		else if (__fx.customLobby.isActive())
			for (aC = aE.lI - 1; 0 <= aC; aC--) this.iK[aC + lD] = __fx.customLobby.gameInfo.difficulty;
		else if (aE.lG)
			if (3 === aE.data.botDifficultyType)
				for (aC = aE.lI - 1; 0 <= aC; aC--) {
					var iT = aC + lD;
					this.iK[iT] = aE.data.botDifficultyData[iT]
				} else if (2 === aE.data.botDifficultyType)
					for (aC = aE.lI - 1; 0 <= aC; aC--) this.iK[iT = aC + lD] = aE.data.botDifficultyTeam[bj.lJ[bj.fY[iT]]];
				else if (1 === aE.data.botDifficultyType) {
			var lK = this.l7.length;
			for (aC = aE.lI - 1; 0 <= aC; aC--) this.iK[aC + lD] = aC % lK
		} else
			for (lK = aE.data.botDifficultyValue, aC = aE.lI - 1; 0 <= aC; aC--) this.iK[aC + lD] = lK;
		else
			for (var lH = 8 === aE.lE ? 1 : 0, aC = aE.lI - 1; 0 <= aC; aC--) this.iK[aC + lD] = lH;
		for (aC = 0; aC < lD; aC++) this.iK[aC] = 6;
		var fa = aE.fX;
		for (aC = 0; aC < fa; aC++) this.iK[aC] <= 2 ? (l4[aC] = 5, l5[aC] = l6[aC] = 1040, 0 === this.iK[aC] ? (l2[aC] = 980, l3[aC] = 980) : 1 === this.iK[aC] ? (l2[aC] = 980, l3[aC] = 920, l5[aC] = l6[aC] = 1100) : (l2[aC] = 825, l3[aC] =
			750)) : this.iK[aC] <= 4 ? (l4[aC] = 1 + az.kD(20), 3 === this.iK[aC] ? (l2[aC] = l3[aC] = 500, l5[aC] = l6[aC] = 1e3) : (l6[aC] = 250 + az.kD(1501), l5[aC] = 500 + az.kD(501), l2[aC] = 300 + az.kD(201), l3[aC] = 100 + az.kD(
			201))) : this.iK[aC] <= 5 ? (l5[aC] = 1e3, l6[aC] = 1e3, l4[aC] = 35 + az.kD(16), l2[aC] = 300 + az.kD(201), l3[aC] = 50 + az.kD(101)) : (l5[aC] = l6[aC] = 800, l4[aC] = 5, l2[aC] = 10, l3[aC] = 250), lL(aC)
	}, this.lF = function() {
		for (var fE = b0.lM, lD = aE.kw, aC = fE - 1; 0 <= aC; aC--) this.iK[aC + lD] = 0;
		for (var fu = 0; fu < 6; fu++) {
			for (aC = fE + b0.lN[fu] - 1; fE <= aC; aC--) this.iK[aC + lD] = fu;
			fE += b0.lN[fu]
		}
	}, this.ki = function(h8, value) {
		l1[h8] = Math.min(value, l1[h8])
	}, this.ef = function(h8) {
		0 == --l1[h8] && ! function(h8) {
			(function(h8) {
				l5[h8] !== l6[h8] && (l5[h8] += l5[h8] < l6[h8] ? 3 : -3);
				l2[h8] !== l3[h8] && (l2[h8] += l2[h8] < l3[h8] ? l4[h8] : -l4[h8], l2[h8] = (Math.abs(l2[h8] - l3[h8]) <= l4[h8] ? l3 : l2)[h8]);
				l1[h8] = bO.g1(l5[h8], 10)
			})(h8), ap.jj.kZ(h8, bO.g1(l2[h8] * ah.hc[h8], 1e3))
		}(h8)
	}, this.lQ = function(h8, h3) {
		l5[h8] = l6[h8] = h3
	}
}

function jf() {
	var lR = new Uint16Array(aE.fX);

	function lg(player, le) {
		for (var fa = bR.g5[0], gD = bR.gD, ls = -1, lt = aE.fX, aC = 0; aC < fa; aC++) {
			var fq, h8 = gD[aC];
			bv.fT(player, h8) && (fq = bP.j7(le, bP.jT(h8)), -1 === ls || fq < ls) && (ls = fq, lt = h8)
		}
		return lt
	}

	function li(lf, le) {
		if (lf === aE.fX) return 0;
		var hH = ah.hH[lf],
			lr = hH.length;
		if (0 === lr) return 0;
		for (var fa = Math.min(lr, 10), lt = 0, ls = bP.j7(hH[lt] >> 2, le), aC = 0; aC < fa; aC++) {
			var iT = az.kD(lr),
				fq = bP.j7(hH[iT] >> 2, le);
			fq < ls && (ls = fq, lt = iT)
		}
		return hH[lt] >> 2
	}

	function ln(player, le, k5, lv) {
		var lw;
		(lv === aE.fX || (lw = bP.jT(k5), lv = bP.jT(lv), bP.j7(le, lw) < bP.j7(le, lv))) && (lR[player] = k5)
	}
	this.dk = function() {
		lR.fill(aE.fX)
	}, this.jr = function() {
		if (bi.kt() % 109 == 9 && !(am.lS < 20) && aE.iV && !(bk.lT() < bO.g1(8 * aE.kg, 10))) {
			var lU = bk.lV();
			if (bj.lJ[lU]) {
				bk.lW(lU);
				var fa = bR.g5[0];
				if (0 !== fa)
					for (var h = bR.gE, lX = am.lX, lS = am.lS, lY = lR, iT = az.kD(fa), aC = 0; aC < lS; aC++) {
						var i3 = lX[aC],
							lZ = h[iT];
						bD.gw.la(i3, lZ) && 512 === lY[i3] && (lY[i3] = lZ, iT = (iT + 1) % fa)
					}
			}
		}
	}, this.ef = function(player) {
		var le, lh, lf, lb = function(player) {
			var k5 = lR[player];
			if (k5 !== aE.fX) {
				if (bD.gw.lu(k5) && ah.hH[k5]) return k5;
				lR[player] = aE.fX
			}
			return aE.fX
		}(player);
		return function(player) {
			for (var lq = am.lX, lr = am.lS, fa = Math.min(lr, lr < 17 && 5 === az.kD(20) ? 1 : 16), h9 = az.kD(lr), gD = bR.gD, hH = ah.hH, h3 = 0, aC = 0; aC < fa; aC++) {
				var h8 = lq[(aC + h9) % lr];
				h8 !== player && hH[h8].length && (gD[h3++] = h8)
			}
			bR.g5[0] = h3
		}(player), 0 !== bR.g5[0] && (0 < (lh = li(lf = lg(player, le = bP.jY(player)), le)) && bQ.lj.lk(player, bQ.ll.lm(lh, le)) ? (ln(player, le, lf, lb), !0) : 0 < (lf = function(player, le) {
			for (var fa = bR.g5[0], gD = bR.gD, lY = lR, h9 = 0, aC = 0; aC < fa; aC++) {
				var h8 = gD[aC],
					h8 = lY[h8];
				h8 !== aE.fX && bD.gw.lu(h8) && player !== h8 && bv.fT(player, h8) && (gD[h9++] = h8)
			}
			return 0 !== (bR.g5[0] = h9) ? li(lg(player, le), le) : 0
		}(player, le)) && bQ.lj.lk(player, bQ.ll.lm(lf, le)) ? (ln(player, le, ad.fS(lf << 2), lb), !0) : !!(0 < (lh = li(lb, le)) && bQ.lj.lk(player, bQ.ll.lm(lh, le))))
	}
}

function jm() {
	function m0(player) {
		for (var fz = ah.fz[player], fa = fz.length, g0 = Math.max(bO.g1(fa, 12), 1), fc = ad.fc, eI = az.kD(fa), aC = 0; aC < fa; aC += g0)
			for (var fP = fz[(aC + eI) % fa], fd = 3; 0 <= fd; fd--) {
				var fe = fP + fc[fd];
				if (ad.ff(fe)) return {
					fE: fe,
					id: ad.fI(fe),
					h8: player
				}
			}
		return null
	}

	function m5(player, m7) {
		var iK = bD.gw.m8(player, aF.lB[aF.iK[player]]);
		ah.h2[player].push(m7.fE), ae.ej(player, iK, m7.h8), aG.k3(player, !0)
	}
	this.ef = function(player) {
		return !!bV.fF(bV.fG) && !!aE.data.passableMountains && 0 !== ah.fz[player].length && function(player) {
			var lz = m0(player);
			if (null === lz) return !1;
			! function(player) {
				for (var lX = am.lX, lS = am.lS, fa = Math.min(lS, 12), h9 = az.kD(lS), gD = bR.gD, fz = ah.fz, h3 = 0, aC = 0; aC < fa; aC++) {
					var h8 = lX[(aC + h9) % lS];
					h8 !== player && fz[h8].length && bv.fT(player, h8) && (gD[h3++] = h8)
				}
				bR.g5[0] = h3
			}(player);
			var m2 = function(fH) {
				for (var fa = bR.g5[0], gD = bR.gD, aC = 0; aC < fa; aC++) {
					var m7 = m0(gD[aC]);
					if (null !== m7 && m7.id === fH) return m7
				}
				return null
			}(lz.id);
			return null !== m2 ? (m5(player, m2), !0) : function(player, fH) {
				var fa = ap.ja.m6;
				if (0 !== fa)
					for (var fE = ap.ja.buffer[az.kD(fa)] << 2, fc = ad.fc, fd = az.kD(4);;) {
						if (fE += fc[fd], ad.ff(fE)) {
							if (ad.fI(fE) === fH) return m5(player, {
								fE: fE,
								h8: aE.fX
							}), !0;
							break
						}
						if (!ad.fR(fE)) break
					}
				return !1
			}(player, lz.id)
		}(player)
	}
}

function jd() {
	this.ef = function(player) {
		return bQ.lj.lk(player, function(player) {
			var fa = ap.ja.m6;
			if (0 === fa) return -1;
			for (var lr = Math.min(fa, ap.performance.mA ? fa : 10), buffer = ap.ja.buffer, kC = bO.g1(az.random() * fa, az.value(100)), e = kC + lr, mB = az.jZ(ah.jU[player], ah.jV[player]), mC = az.jZ(ah.jW[player], ah.jX[player]),
					lt = -1, fq = bP.j8(0, 0, bV.fl, bV.fm), aC = kC; aC < e; aC++) {
				var h9 = aC % fa,
					mD = bP.fs(mB, mC, buffer[h9]);
				mD < fq && (fq = mD, lt = h9)
			}
			return -1 !== lt ? function(fM, mB, mC) {
				var hq = bP.fi(fM),
					hs = bP.fk(fM),
					iy = mB - hq,
					j1 = mC - hs;
				Math.abs(iy) >= Math.abs(j1) ? (j1 = 0, iy = Math.sign(iy)) : (iy = 0, j1 = Math.sign(j1));
				iy === j1 && (iy = 1);
				for (;;) {
					if (hq += iy, hs += j1, !bP.fw(hq, hs)) break;
					if (fM = bP.fx(hq, hs), ad.is(bP.fQ(fM))) return fM
				}
				return -1
			}(buffer[lt], mB, mC) : -1
		}(player))
	}
}

function jo() {
	this.ef = function(player) {
		var mF = function(player) {
			for (var mI = bQ.mI.mK(), fa = mI.length, lr = Math.min(fa, 32), iT = az.kD(fa), aC = 0; aC < lr; aC++) {
				var mF = (aC + iT) % fa,
					mH = mI[mF],
					j5 = mH[0],
					j6 = mH[mH.length - 1];
				if (bQ.ll.mL(player, j5) && bQ.ll.mM(player, j6)) return mF;
				if (bQ.ll.mL(player, j6) && bQ.ll.mM(player, j5)) return 0 <= (mF = bQ.mI.mN(j6, j5)) ? mF : bQ.mI.mO() ? -1 : bQ.mI.mP(bQ.mI.mQ(mH))
			}
			return -1
		}(player);
		return -1 !== mF && (mF = bQ.mI.get(mF), !bQ.ll.mJ(player, mF)) && (bR.h[0] = mF, !0)
	}
}

function jg() {
	this.mA = 0, this.dk = function() {
		this.mA = 0
	}, this.ef = function() {
		if (!this.mA && bi.kt() % 30 == 7 && bD.gw.mT(90) && (ap.performance.mA = 1)) {
			if (aE.iV) {
				var lU = bk.lV();
				if (bj.lJ[lU]) {
					bk.kx(lU);
					var h = bR.gE,
						fa = bR.g5[0];
					if (0 !== fa)
						for (var mW = Math.min(100 + 10 * (fa - 1), 400), aC = 0; aC < fa; aC++) aF.lQ(h[aC], mW)
				}
			}
			aF.lQ(mX[0], 100)
		}
	}
}

function jb() {
	var mY = 0,
		mZ = 0,
		ma = 300,
		mb = 300,
		mc = 0;
	this.m6 = 0, this.buffer = new Uint32Array(512), this.dk = function() {
		mZ = mY = 0, this.m6 = 0, mc = 0
	}, this.ef = function() {
		if (function() {
				var fa = ap.ja.m6;
				if (0 === fa) return 1;
				var buffer = ap.ja.buffer;
				if (bi.kt() % 35 == 6) {
					for (var aC = fa - 1; 0 <= aC; aC--) ad.fR(buffer[aC] << 2) || (fa--, buffer[aC] = buffer[fa]);
					ap.ja.m6 = fa
				}
				return fa < buffer.length
			}())
			if (ma <= mY) {
				var mg = ap.ja.m6;
				if (mg) {
					if (bi.kt() % 350 != 1) return;
					if (mc !== mg) return void(mc = mg);
					if (!bD.gw.kJ(mX[0])) return
				} else if (bi.kt() % 12 != 8) return;
				bD.gw.mh() || ap.ja.dk()
			} else {
				var aC, j = bV.fl,
					mi = j - 2,
					mg = mi * (bV.fm - 2),
					mj = ma,
					buffer = ap.ja.buffer,
					lr = ap.ja.m6,
					mk = buffer.length,
					h9 = Math.min(mZ + mj * ((1 + 19 * ap.performance.mA) * mb), mg);
				for (aC = mZ; aC < h9; aC += mj) {
					var fE = 4 * (aC % mi + (bO.g1(aC, mi) + 1) * j + 1);
					if (ad.fR(fE) && (buffer[lr] = fE >> 2, ++lr === mk)) {
						aC += mj;
						break
					}
				}(mZ = aC) >= mg && (mZ = ++mY), ap.ja.m6 = lr
			}
	}
}

function jq() {
	this.ef = function() {
		if (bi.kt() % 51 == 45)
			for (var fa = bQ.z.mm, mn = bQ.z.mn, mo = bQ.z.mo, mp = bQ.z.mp, mq = bQ.z.mq, lC = aF.lC, iK = aF.iK, aC = 0; aC < fa; aC++) {
				var mH, player, mu, mr = mn[aC];
				mr % 64 == 6 || (mH = mo[aC], (player = bQ.ll.ms(mH[mH.length - 1])) < 0) || !bD.gw.la(player, mq[aC] >> 3) || az.kD(1e3) >= lC[iK[player]] || ! function(my, mH) {
					for (var fa = mH.length - 1, mz = bQ.z.n0[my], fq = 0, aC = mz + 1; aC < fa; aC++) fq += bP.j4(mH[aC], mH[aC + 1]);
					return (fq += bP.j4(bP.jM(bQ.z.n1[my]), mH[mz + 1])) <= 60
				}(aC, mH) || (mu = mp[aC], 64 <= mr && bQ.mv.mw(player, mu)) || function(player, mH, mu, my, mr) {
					bQ.n2.n3(player) && bD.gw.n4(player, aF.l8[aF.iK[player]], 32, 0) && (bQ.z.mn[my] = 64 + mr % 64, bQ.mv.ej(mu, bQ.z.n5), bR.h[0] = bQ.mI.mQ(mH), bR.gC[1] = 6, bD.gw.n6(player), bQ.z.n7(player))
				}(player, mH, mu, aC, mr)
			}
	}
}

function n8() {
	bU.n9.nA(), aO.ef(), ag.ef(), aX.nB(), b1.z.ef()
}

function nC() {
	b2.ef(), aH.ef(), ao.ef(), af.ef(), b5.ef(), aG.ef(), ap.ef(), bQ.z.ef(), am.nD(), aW.ef(), b0.ef(), bY.ef(), ag.ef(), ag.nE(), aX.ef(), bS.ef(), aV.ef(), aQ.ef(), b9.nF(), aO.ef(), b6.ef(), aS.ef(), ax.ef(), bg.ef(), bk.ef(), b1.z.ef(), b1.nG
		.ef(), u.ef(), bX.eT.ef(), bC.ef(), bi.ef()
}

function nH() {
	aI.ef(), aY.ef(), aR.ef(), aw.ef(), bF.ef(), b8.ef(), b9.ef(), ay.nI()
}

function nJ() {
	aW.nK(!1), aQ.nK(), aX.nK(!1), aV.nK(), aS.nK(), ax.nK(), ag.nK(!1), bk.nL()
}

function nM() {
	ag.nK(!1) && (bi.ds = !0), b1.z.ef()
}

function cA() {
	var nN, nO, nP;

	function nR(nT) {
		for (var aC = nN - 1; 0 <= aC; aC--) 0 === nP[nO[aC]] && ah.hO[nO[aC]] >= nT && ge(nO[aC])
	}

	function nQ(player) {
		var eb;
		64 === nP[player] ? nP[player] = 6 : (eb = ah.hO[player], nP[player] = eb < 1e3 ? 3 : eb < 1e4 ? 2 : eb < 6e4 ? 1 : 0)
	}
	this.dk = function() {
		nN = 0, nO = new Uint16Array(aE.fX), nP = new Uint8Array(aE.fX)
	}, this.ef = function() {
		for (var aC = nN - 1; 0 <= aC; aC--) 64 === nP[nO[aC]] ? nQ(nO[aC]) : 0 == nP[nO[aC]]-- && (nQ(nO[aC]), ge(nO[aC]));
		16e4 <= ah.hO[mX[0]] && (nR(16e4), 3e5 <= ah.hO[mX[0]]) && nR(3e5), bD.gw.lu(aE.fK) && (bg.nU[7] = Math.max(ah.hO[aE.fK], bg.nU[7]))
	}, this.gy = function(player) {
		for (var ft, aC = nN - 1; 0 <= aC; aC--)
			if (player === nO[aC]) {
				for (nN--, ft = aC; ft < nN; ft++) nO[ft] = nO[ft + 1];
				return
			}
	}, this.k3 = function(player, nV) {
		for (var aC = nN - 1; 0 <= aC; aC--)
			if (player === nO[aC]) return;
		nO[nN++] = player, nP[player] = nV ? 2 : 64
	}
}

function cB() {
	var size, kk;
	this.dk = function() {
		size = aE.lI, kk = new Uint16Array(aE.fX);
		for (var kw = aE.kw, aC = aE.lI - 1; 0 <= aC; aC--) kk[aC] = kw + aC
	}, this.ef = function() {
		ap.jp.ef();
		for (var aC = size - 1; 0 <= aC; aC--)
			if (0 === ah.nY[kk[aC]]) {
				ft = void 0;
				var ft = aC;
				size--, kk[ft] = kk[size]
			} else aF.ef(kk[aC])
	}, this.nX = function(h8) {
		kk[size++] = h8
	}
}

function cC() {
	var na, nb, nc, nd, ne, nf, ng, nh, ni, nj, nk, nl, nm, nn = !1,
		no = !1;

	function np(nq) {
		nl = bi.ea, nc = nd = nb = 0, ne = (nm = 33) / nq, na = 1 / (nq / nm / 4), nf = (i.j / 2 + jF) / ip, ng = (i.k / 2 + jG) / ip, nh = ip
	}

	function nx(aC) {
		var nz; - 1 !== aC && (aC = bP.jM(bQ.z.n1[aC]), nz = bP.fi(aC) - 15, aC = bP.fk(aC) - 15, aI.nt(nz, aC, 29 + nz, 29 + aC))
	}

	function oA(eN) {
		Math.abs(Math.log(nk / nh)) < .125 && (nk = eN * nh)
	}

	function o9(nz, o0, oC, oD) {
		ni = (nz + oC + 1) / 2, nj = (o0 + oD + 1) / 2;
		oC = i.j / (oC - nz + 1), nz = i.k / (oD - o0 + 1);
		nk = .9 * (oC < nz ? oC : nz)
	}
	this.nr = function() {
		return nn
	}, this.ns = function() {
		np(1), this.nt(0, 0, bV.fl - 1, bV.fm - 1), aE.hz || aE.hj || aE.hk || this.nu(aE.fK, 3e3, !0, .3)
	}, this.nv = function(player, nw) {
		nx(bQ.ll.ny(player, nw))
	}, this.nu = function(player, nq, o1, zoom) {
		aE.o2 || nn && !o1 && no || (0 === ah.hO[player] ? nx(bQ.ll.o3(player)) : (aT.o4 = !1, no = o1, np(nq), function(player) {
			ni = (ah.jU[player] + ah.jV[player] + 1) / 2, nj = (ah.jW[player] + ah.jX[player] + 1) / 2
		}(player), function(zoom, player) {
			var iy = ah.jV[player] - ah.jU[player] + 1,
				player = ah.jX[player] - ah.jW[player] + 1,
				ft = i.j / iy,
				fu = i.k / player,
				ft = (nk = ft < fu ? ft : fu, 0 !== zoom ? zoom : iy < 20 && player < 20 ? .5 : .9);
			nk *= ft, oA(7 / 8)
		}(zoom, player), nn = !0, at.o7()))
	}, this.o8 = function(nq) {
		aE.hj || aE.o2 || (aT.o4 = !1, no = !1, np(nq), o9(0, 0, bV.fl - 1, bV.fm - 1), oA(7 / 8), nn = !0, at.o7())
	}, this.nt = function(nz, o0, oC, oD) {
		nn = !1, o9(nz, o0, oC, oD), ip = nk, aT.oE(ni, i.j / 2), aT.oF(nj, i.k / 2), bd.oG(), bi.ds = !0
	}, this.oH = function() {
		return !(nn && no || (nn = !1))
	}, this.ef = function() {
		var oK, oL, fd, oO;
		nn && (nb < .5 ? nd < ne && (nd += ne * na, nc = nb) : 1 - nc < nb && (nd = (nd -= ne * na) < ne * na ? ne * na : nd), nl = nl >= bi.ea ? bi.ea - 1 : nl, fd = bi.ea - nl, nb = 1e3 < fd || 1 < (nb += nd * fd / nm) ? 1 : nb, nl = bi.ea,
			fd = ip, oK = jF, oL = jG, fd = (ip = nh * Math.pow(nk / nh, nb)) / fd, oO = 1 - (nh * Math.pow(nk / nh, 1 - nb) - nh) / (nk - nh), aT.oE(nf + oO * (ni - nf), i.j / 2), aT.oF(ng + oO * (nj - ng), i.k / 2), ag.zoom(fd, (oK * fd -
				jF) / (1 - fd), (oL * fd - jG) / (1 - fd)), bd.oG(), 1 <= nb && (nn = !1, be.oP = !0), bi.ds = !0)
	}
}

function di(oQ) {
	this.oR = -1, this.pow = -1;
	var oS = oQ || {},
		oT = this,
		oU = null,
		oV = null,
		oW = null,
		oX = null,
		oY = null,
		oZ = [],
		oa = 0,
		ob = null,
		oc = null,
		od = null,
		oe = !1,
		og = null,
		oj = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255;

	function ok(ol, om, className) {
		ol = document.createElement(ol);
		return className && (ol.className = className), om && om.appendChild(ol), ol
	}

	function oo(em, om, action) {
		om = ok("button", om);
		return om.type = "button", om.textContent = em, om.addEventListener("click", action), om
	}

	function op(om) {
		om = ok("canvas", om);
		return om.width = om.height = 128, om
	}

	function ow(canvas, ox) {
		for (var canvas = canvas.getContext("2d"), data = (oc || (oc = canvas.createImageData(128, 128), od = new Uint32Array(oc.data.buffer)), ox), or = od, os = 0, position = 0, color = 0; position < 16384; os += 6, color ^= 1) {
			for (var eJ = os >> 3, oH = position + ((data[eJ] << 8 | data[1 + eJ]) >> 10 - (7 & os) & 63), ov = color ? oj : 4294967295, aC = position; aC < oH; aC++) or[aC] = ov;
			position = oH
		}
		canvas.putImageData(oc, 0, 0)
	}

	function oz() {
		if (oU) {
			oU.setAttribute("aria-busy", String(oe)), oY.disabled = oe, oX.disabled = oe || !oa;
			for (var aC = 0; aC < oZ.length; aC++) oZ[aC].disabled = oe, oZ[aC].setAttribute("aria-pressed", String(Boolean(oa & 1 << aC)))
		}
	}

	function p1(event) {
		var p3, p2;
		"Escape" === event.key && (event.preventDefault(), oT.close()), "Tab" === event.key && oU && (p3 = (p2 = oU.querySelectorAll("button:not(:disabled)"))[0], p2 = p2[p2.length - 1], event.shiftKey && document.activeElement === p3 ? (event
			.preventDefault(), p2.focus()) : event.shiftKey || document.activeElement !== p2 || (event.preventDefault(), p3.focus()))
	}

	function p5() {
		og = document.activeElement, (oU = ok("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), oU.setAttribute("aria-modal", "true"), oU.setAttribute("aria-label", "Select all images matching the reference");
		ok("style", oU).textContent =
			".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
		var p6 = ok("div", oU, "captcha-reference-row");
		ok("span", p6, "captcha-reference-label").textContent = "Find All:", (oW = op(p6)).className = "captcha-reference", oW.setAttribute("aria-label", "Reference image"), oV = ok("div", oU, "captcha-grid");
		for (var aC = 0; aC < 16; aC++) oZ.push(function(eJ) {
			var button = oo("", oV, function() {
				oe || (oa ^= 1 << eJ, oz())
			});
			return button.className = "captcha-tile", button.setAttribute("aria-label", "Select image " + (eJ + 1)), button.setAttribute("aria-pressed", "false"), op(button).setAttribute("aria-hidden", "true"), button
		}(aC));
		var p6 = ok("div", oU, "captcha-actions"),
			p9 = oo("Close", p6, function() {
				oT.close()
			});
		oY = oo("Reload", p6, pA), oX = oo("Verify", p6, pB), oU.addEventListener("keydown", p1), oT.resize(), oz(), p9.focus()
	}

	function pA() {
		oe || (oT.close(), b1.eh.pC(0, 0, bw.oR, bw.pow))
	}

	function pB() {
		var pD, pE;
		!oe && oa && (pD = oa, pE = ob, oT.close(), b1.eh.pC(pD, pE, bw.oR, bw.pow))
	}
	this.show = function(pF, pE, oR, pow) {
		this.oR = oR, this.pow = pow, ob = pE, oU || p5(), ow(oW, pF[0]);
		for (var iT = 0; iT < 16; iT++) ow(oZ[iT].firstChild, pF[iT + 1]);
		oa = 0, oe = !1, oz(), "function" == typeof oS.pG && oS.pG()
	}, this.resize = function() {
		var size;
		oU && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), oU.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (oU) {
			for (var pH = oU.querySelectorAll("canvas"), aC = 0; aC < pH.length; aC++) pH[aC].width = pH[aC].height = 0;
			oU.remove(), oU = oV = oW = oX = oY = null, oc = od = ob = null, oa = 0, oe = !(oZ = []), og && document.body.contains(og) && og.focus(), og = null, "function" == typeof oS.pI && oS.pI()
		}
	}
}

function c4() {
	var ek = bD.color;
	this.pJ = ek.pK(0, 0, 0), this.pL = ek.pM(0, 0, 0, .7), this.pN = ek.pM(0, 0, 0, .5), this.pO = ek.pM(0, 0, 0, .85), this.pP = ek.pM(0, 0, 0, .75), this.pQ = ek.pM(0, 0, 0, .6), this.pR = ek.pM(0, 0, 0, .35), this.pS = ek.pK(255, 255, 255), this
		.pT = ek.pM(255, 255, 255, .3), this.pU = ek.pM(255, 255, 255, .6), this.pV = ek.pM(255, 255, 255, .4), this.pW = ek.pM(255, 255, 255, .25), this.pX = ek.pM(255, 255, 255, .85), this.pY = ek.pM(255, 255, 255, .75), this.pZ = ek.pM(255, 255,
			255, .15), this.pa = ek.pM(255, 255, 255, .11), this.pb = ek.pK(128, 128, 128), this.pc = ek.pM(64, 64, 64, .75), this.pd = ek.pM(88, 88, 88, .83), this.pe = ek.pM(60, 60, 60, .85), this.pf = ek.pM(80, 60, 60, .85), this.pg = ek.pK(170,
			170, 170), this.ph = ek.pK(200, 235, 245), this.pi = ek.pK(30, 255, 30), this.pj = ek.pK(0, 200, 0), this.pk = ek.pK(128, 255, 128), this.pl = ek.pM(10, 65, 10, .75), this.pm = ek.pM(0, 255, 0, .6), this.pn = ek.pM(0, 255, 0, .5), this
		.po = ek.pM(0, 200, 0, .5), this.pp = ek.pM(0, 100, 0, .75), this.pq = ek.pM(0, 60, 0, .8), this.pr = ek.pM(0, 255, 0, .3), this.ps = ek.pM(0, 180, 0, .6), this.pt = ek.pM(0, 120, 0, .85), this.pu = ek.pK(0, 120, 0), this.pv = ek.pM(0, 70, 0,
			.85), this.pw = ek.pK(190, 230, 190), this.px = ek.pK(0, 255, 0), this.py = ek.pM(10, 120, 10, .9), this.pz = ek.pK(200, 255, 200), this.q0 = ek.pK(255, 120, 120), this.q1 = ek.pK(255, 160, 160), this.q2 = ek.pK(255, 70, 70), this.q3 = ek
		.pK(230, 0, 0), this.q4 = ek.pM(220, 0, 0, .6), this.q5 = ek.pM(255, 100, 100, .8), this.q6 = ek.pM(100, 0, 0, .85), this.q7 = ek.pM(60, 0, 0, .85), this.q8 = ek.pM(200, 0, 0, .6), this.q9 = ek.pM(120, 0, 0, .85), this.qA = ek.pK(255, 70,
		10), this.qB = ek.pK(230, 190, 190), this.qC = ek.pK(255, 0, 0), this.qD = ek.pK(255, 0, 255), this.qE = ek.pM(60, 0, 60, .85), this.qF = ek.pM(0, 60, 60, .85), this.qG = ek.pM(10, 60, 60, .9), this.qH = ek.pM(0, 96, 96, .75), this.qI = ek
		.pK(0, 255, 255), this.qJ = ek.pK(160, 160, 255), this.qK = ek.pM(0, 40, 90, .75), this.qL = ek.pM(0, 0, 255, .6), this.qM = ek.pK(200, 200, 255), this.qN = ek.pM(50, 50, 255, .83), this.qO = ek.pM(20, 90, 150, .75), this.qP = ek.pM(10, 10,
			120, .75), this.qQ = ek.pM(10, 60, 160, .9), this.qR = ek.pK(200, 220, 255), this.qS = ek.pM(0, 120, 255, .35), this.qT = ek.pK(70, 150, 255), this.qU = ek.pK(255, 120, 100), this.qV = ek.pM(255, 255, 0, .5), this.qW = ek.pM(255, 255,
			150, .2), this.qX = ek.pK(255, 255, 0), this.qY = ek.pK(255, 255, 200), this.qZ = ek.pM(200, 200, 0, .6), this.qa = ek.pM(140, 120, 0, .75), this.qb = ek.pM(180, 160, 40, .75), this.qc = ek.pM(70, 50, 20, .85), this.qd = ek.pM(30, 30, 0,
			.85), this.qe = ek.pM(60, 60, 0, .85), this.qf = ek.pK(255, 255, 100), this.qg = ek.pK(255, 255, 140), this.qh = ek.pM(255, 140, 0, .75), this.qi = ek.pM(70, 40, 0, .85), this.qj = ek.pK(255, 150, 0), this.qk = ek.pM(255, 200, 80, .85),
		this.ql = ek.pM(0, 0, 0, 0), this.qm = ek.pM(255, 255, 255, 0), this.qn = ek.pM(254, 254, 254, 0)
}

function d4() {
	this.i1 = new qo, this.gw = new qp, this.qq = new qr, this.qs = new qt, this.ky = new qu
}

function qo() {
	this.qv = 1, this.i2 = function(fM) {
		aE.hk || (aE.lG ? bB.qq.i2(aE.fK, fM) : b1.qw.qx(fM))
	}, this.i8 = function(jE, k5) {
		aE.hk || (this.qv && (this.qv = 0, bm.qy.qz(182, jE)), aE.lG ? bB.qq.i8(aE.fK, jE, k5) : b1.qw.r0(jE, k5))
	}, this.r1 = function(jE, r2) {
		aE.hk || (aE.lG ? bB.qq.r3(aE.fK, jE, r2) : b1.qw.r4(jE, r2))
	}, this.iD = function(jE, fM) {
		aE.hk || (fM = (fM << 3) + bR.gC[6], aE.lG ? bB.qq.iD(aE.fK, jE, fM) : bQ.n2.n3(aE.fK) && b1.qw.r6(jE, fM))
	}, this.iG = function(jE) {
		var nw;
		aE.hk || (849 === jE && (jE = 850), nw = bR.gC[3], aE.lG ? bB.qq.iG(aE.fK, jE, nw) : bQ.iE.r7(aE.fK, nw) && b1.qw.r8(jE, nw))
	}, this.r9 = function(nw) {
		aE.hk || (aE.lG ? bB.qq.r9(aE.fK, nw) : b1.qw.r8(849, nw))
	}, this.rA = function(k5) {
		aE.hk || (aE.lG ? bB.qq.rA(aE.fK, k5) : b1.qw.rB(k5))
	}, this.rC = function(rD) {
		aE.hk || (aE.lG ? bB.qq.rE(aE.fK, rD) : b1.qw.rF(rD))
	}, this.iP = function(rG) {
		aE.hk || (aE.lG ? bB.qq.iP(aE.fK, rG) : b1.qw.rH(rG))
	}, this.rI = function() {
		aE.hk || (aE.lG ? bB.qq.rI(aE.fK) : b1.qw.rJ())
	}, this.iM = function() {
		aE.hk || (aE.lG ? bB.qq.iM(aE.fK) : b1.qw.rB(513))
	}, this.i4 = function(jE, fM, k5) {
		aE.hk || (aE.lG ? bB.qq.i4(aE.fK, jE, fM, k5) : b1.qw.rK(jE, fM, k5))
	}
}

function qu() {
	this.kz = function(player, r2, iK) {
		bD.gw.rL(player, iK, r2) && (af.r1(player, r2), !bD.gw.kJ(r2)) && ap.jj.kY[r2] && ap.jj.kY[r2]--
	}, this.rM = function(player, r2, iK) {
		bD.gw.rN(iK, r2) ? ao.ej(r2, bR.g7[0]) && (bt.rO(player, r2, bR.g7[0], 1), bD.gw.gz(r2, bR.g7[0]), bg.rP(player, r2), ag.rQ(r2, bR.g7[0])) : bg.h0(player, iK, 12)
	}
}

function qp() {
	this.rR = function(rD, player) {
		aE.hk || (aO.rC(aE.fK, player, rD), b1.qw.rS(rD, player))
	}, this.rT = function(player) {
		aE.hk || (aO.rU(player, 0), b1.qw.rV(player))
	}, this.rW = function(rX, player) {
		aE.hk || (aO.rY(rX, player), b1.qw.rZ(rX, player))
	}, this.ra = function() {
		aE.lG || aE.hj || aE.hk || b1.rb.ra()
	}
}

function qt() {
	this.ef = function(aD) {
		var id, gJ, oH;
		for (bK.dk(aD), bK.eJ += 2, oH = 8 * bK.size; bK.eJ + 8 <= oH;) id = bK.rc(4), gJ = bK.rc(9), 0 === id ? this.rd(id, gJ, bK.rc(22)) : 1 === id ? this.rd(id, gJ, bK.rc(10), bK.rc(10)) : 2 === id ? this.rd(id, gJ, bK.rc(10), bK.rc(9)) :
			3 === id ? this.rd(id, gJ, bK.rc(10), bK.rc(27)) : 4 === id ? this.rd(id, gJ, bK.rc(10), bK.rc(16)) : 5 === id || 6 === id ? this.rd(id, gJ, bK.rc(10)) : 7 === id ? this.rd(id, gJ, bK.rc(1)) : 10 === id ? this.rd(id, gJ, bK.rc(20), bK
				.rc(22)) : this.rd(id, gJ)
	}, this.re = [], this.rf = function() {
		for (var rh = 0, ri = 0, rj = 0, rk = 0, rl = 0, rm = 0, aC = 0; aC < 512; aC++) rh += ah.nY[aC], ri += ah.hO[aC], rj += ah.hc[aC], rk += bQ.z.l0[aC];
		rl += bQ.z.mm, rm += am.lS, this.re.push(rj % 1073741824 * 4 + (rh + ri + rk + rl + rm) % 4)
	}, this.rd = function(id, gJ, gL, gN) {
		0 === id ? bB.qq.i2(gJ, gL) : 1 === id ? bB.qq.i8(gJ, gL, gN) : 2 === id ? bB.qq.r3(gJ, gL, gN) : 3 === id ? bB.qq.iD(gJ, gL, gN) : 4 === id ? bB.qq.iG(gJ, gL, gN) : 5 === id ? bB.qq.rA(gJ, gL) : 6 === id ? bB.qq.rE(gJ, gL) : 7 === id ?
			bB.qq.iP(gJ, gL) : 8 === id ? bB.qq.rI(gJ) : 9 === id ? bB.qq.rn(gJ) : 10 === id && bB.qq.i4(gJ, gL >> 10, gN, gL % 1024)
	}
}

function qr() {
	this.i2 = function(player, fM) {
		bD.gw.hm(0) && bD.gw.hn(player) && bP.jJ(fM) && (bC.ro.rp(0, player, fM), aE.rq.ej(player, fM))
	}, this.i8 = function(player, jE, k5) {
		bD.gw.hm(1) && bD.gw.hn(player) && bD.gw.rr(player, k5) && bD.gw.n4(player, jE, 12, 0) && bD.gw.rs(player, k5) && ((k5 = ae.kH(player, bR.fW[0])) || ae.ka(player)) && (ah.rt[player]++, bC.ro.rp(1, player, jE, bR.fW[0]), ap.jh.jv(player,
			k5)) && (bD.gw.n6(player), bg.ru(player, jE), ap.jh.k1(player))
	}, this.r3 = function(player, jE, r2) {
		bD.gw.hm(1) && bD.gw.hn(player) && aE.iV && bD.gw.rr(player, r2) && bD.gw.rv(player, r2) && bD.gw.rL(player, bD.gw.jD(player, jE), r2) && ao.ej(r2, bR.g7[0]) && (bC.ro.rp(2, player, jE, r2), af.r1(player, r2))
	}, this.iD = function(player, jE, r5) {
		bR.gC[1] = 7 & r5;
		var fM = r5 >> 3;
		bD.gw.hm(1) && bD.gw.hn(player) && bP.jJ(fM) && bQ.n2.n3(player) && bQ.n2.rw(fM) && bD.gw.n4(player, jE, 32, 0) && bQ.lj.rx(player, fM, 1) && (bg.ry(player), bC.ro.rp(3, player, jE, r5), bD.gw.n6(player), bo.rz.iD(player), bQ.z.n7(
			player))
	}, this.iG = function(player, jE, nw) {
		849 === jE ? this.r9(player, nw) : bD.gw.hm(1) && bD.gw.hn(player) && bD.gw.n4(player, jE, 32, 0) && bQ.iE.s0(player, nw) && (bg.ry(player), bC.ro.rp(4, player, jE, nw), bD.gw.n6(player), bo.rz.iG(player), bQ.z.n7(player))
	}, this.r9 = function(player, nw) {
		bD.gw.hm(1) && bD.gw.hn(player) && bQ.s1.ef(player, nw) && bC.ro.rp(4, player, 849, nw)
	}, this.rA = function(player, k5) {
		513 === k5 ? this.iM(player) : bD.gw.hm(1) && bD.gw.hn(player) && (k5 = Math.min(k5, aE.fX), ae.kH(player, k5)) && (bC.ro.rp(5, player, k5), ae.s2(player, k5))
	}, this.rE = function(player, rD) {
		(bD.gw.hm(1) || bD.gw.hm(2)) && bD.gw.hn(player) && (rD = bO.il(rD, 0, 1023), bC.ro.rp(6, player, rD), ag.s3(player, 0, rD))
	}, this.iP = function(player, rG) {
		ax.iO(player) && (bC.ro.rp(7, player, rG), ax.s4(player, rG))
	}, this.rI = function(player) {
		(bD.gw.hm(0) || bD.gw.hm(1)) && bD.gw.hn(player) && aN.s5(player) && (bC.ro.rp(8, player), bT.rI(player))
	}, this.rn = function(player) {
		bC.ro.rp(9, player), bT.rn(player)
	}, this.iM = function(player) {
		ax.iQ(player) && (bC.ro.rp(5, player, 513), ax.iM(player))
	}, this.i4 = function(player, jE, fM, k5) {
		bD.gw.hm(1) && bD.gw.hn(player) && bD.gw.rr(player, k5) && bD.gw.rs(player, k5) && bP.jJ(fM) && an.fB.fU(player, fM) && (ae.kH(player, bR.fW[0]) || ae.ka(player)) && (bC.ro.rp(10, player, (jE << 10) + bR.fW[0], fM), k5 = bD.gw.m8(player,
			jE), ah.h2[player].push(bR.fb[0]), ae.ej(player, k5, bR.fW[0]), aG.k3(player, !0), bg.s6(player))
	}
}

function s7() {
	var s9;
	this.s8 = [], this.s9 = document.createElement("div"), this.sA = function(sB, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = sB, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.s9.appendChild(
			title), title
	}, this.sC = function(sB, marginBottom) {
		var sD = document.createElement("p");
		return sD.textContent = sB, sD.style.fontSize = "0.75em", sD.style.lineHeight = "1.2em", sD.style.marginBottom = marginBottom || "0", this.s9.appendChild(sD), sD
	}, this.sE = function(sB) {
		var sF = document.createElement("p");
		return sF.textContent = sB, sF.style.fontSize = "1em", sF.style.marginBottom = "0", sF.style.whiteSpace = "pre-wrap", sF.style.overflowWrap = "break-word", this.s9.appendChild(sF), sF
	}, this.sG = function(sH, fontSize) {
		var s9 = document.createElement("div");
		return s9.innerHTML = sH, s9.style.fontSize = fontSize || "1em", s9.style.lineHeight = "1.2em", this.s9.appendChild(s9), s9
	}, this.sI = function(sJ) {
		for (var sK = sJ.sK, fa = sK.length, aC = 0; aC < fa; aC++) this.s9.appendChild(sK[aC])
	}, this.sL = function(sM) {
		return this.s8.push(sM), this.s9.appendChild(sM.e), sM
	}, this.resize = function() {
		for (var fa = this.s8.length, aC = 0; aC < fa; aC++) this.s8[aC].resize && this.s8[aC].resize()
	}, (s9 = this.s9).style.position = "absolute", s9.style.height = "auto", s9.style.padding = "0.5em"
}

function sN(sO, sP) {
	var s9 = document.createElement("div");

	function sX() {
		var aC, sY, k, h9, fd, sT = i.l * s9.offsetWidth,
			sZ = new Float64Array(function(sT) {
				var j = .25 * bD.sU.sV(.6) * i.io;
				return Math.max(Math.floor(sT / j), 1)
			}(sT)),
			sa = bf.sa,
			sb = (sT - (sZ.length + 1) * bf.gap) / (sZ.length * i.l);
		for (sZ.fill(sa), aC = 0; aC < sP.length; aC++) sY = (fd = sP[aC].s9).style, k = bD.sc.min(sZ), h9 = sZ.indexOf(k), sY.top = bD.sU.sd(k), sY.left = bD.sU.sd(sa + h9 * (sb + sa)), sY.width = bD.sU.sd(sb), bD.sU.se(fd, 5), sZ[h9] += fd
			.offsetHeight + 3 * sa;
		s9.style.height = bD.sU.sd(bD.sc.max(sZ) - 2 * sa)
	}
	this.sQ = s9, this.sR = sP, this.resize = function() {
		var aC;
		for (aC = 0; aC < sP.length; aC++) sP[aC].resize();
		sX(), sX()
	}, s9.style.width = "100%", s9.style.maxWidth = "100%", sO.style.lineHeight = "1.5em", sO.style.overflowX = "hidden", sO.style.overflowY = "auto";
	for (var aC = 0; aC < sP.length; aC++) s9.appendChild(sP[aC].s9);
	sO.appendChild(s9)
}

function x(sf, sg, sh, si, sj) {
	var self, sk = document.createElement("button");

	function sr() {
		var sx;
		bM.sw() || (sx = bD.color.sy(sh), !1 !== si && 0 < sx[0] && sx[0] < 255 && sx[0] === sx[1] && sx[0] === sx[2]) || (128 < sx[0] && 128 < sx[1] && 128 < sx[2] ? sk.style.backgroundColor = bD.color.sz(sh, -50) : sk.style.backgroundColor = bD
			.color.sz(sh, sx[3] && sx[3] < 120 ? 150 : 50))
	}

	function sq() {
		if (si) {
			var sx = bD.color.sy(sh);
			if (sx[0] === sx[1] && sx[0] === sx[2]) return
		}
		sg && ((sx = sg(this)) ? 2 === sx && sr() : t1(this))
	}

	function st() {
		this.style.backgroundColor = sh
	}

	function ss() {
		t1(this)
	}

	function t1(fd) {
		fd.style.backgroundColor = sh, fd.blur()
	}
	this.button = sk, this.sl = sg, this.sm = sh, this.sp = function(su) {
		su = 1.1 - Math.min(.01 * sf.length, .6) + .2 * su;
		sk.style.fontSize = su.toFixed(1) + "em"
	}, this.so = function(ek) {
		ek ? 1 === ek ? ek = bE.pe : 2 === ek && (si = 1, ek = bE.pe) : (si = 0, ek = bE.pO), this.sm = sh = ek, sk.style.backgroundColor = ek
	}, self = this, sk.innerHTML = sf, sk.style.color = sj ? bE.qX : bE.pS, sk.style.userSelect = "none", sk.style.outline = "none", sk.style.overflowWrap = "break-word", self.so(sh), sk.style.border = "none", sk.style.font = "inherit", self.sp(
		0), sk.style.padding = "0em 0.3em", sk.onclick = sq, sk.addEventListener("mouseover", sr), sk.addEventListener("mouseout", ss), sk.addEventListener("focus", sr), sk.addEventListener("blur", st)
}

function t2(p2, sO) {
	var s9;
	this.resize = function() {
		for (var aC = 0; aC < p2.length; aC++) bD.sU.se(p2[aC].button);
		s9.style.gap = s9.style.padding = bD.sU.sd(bf.sa)
	}, (s9 = document.createElement("div")).style.display = "grid", s9.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", s9.style.overflowY = "auto", s9.style.gridAutoRows = "5.3em", s9.style.maxHeight = "100%";
	for (var aC = 0; aC < p2.length; aC++) p2[aC].sp(1), s9.appendChild(p2[aC].button);
	sO.appendChild(s9)
}

function t4(t5, t6, t7) {
	this.fh = 0, this.fj = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.sU.sV(t7 || .5) * t5[1] * i.io, i.k - 2 * bf.gap), this.j = Math.min(this.k * (t5[0] / t5[1]), i.j - 2 * bf.gap), this.k = t5[1] * this.j / t5[0], this.fh = bf.gap + t6[0] * (i.j - this.j - 2 * bf.gap), this.fj = bf
			.gap + t6[1] * (i.k - this.k - 2 * bf.gap)
	}, this.t8 = function() {
		return this.fh + .5 * this.j
	}
}

function t9(tA, tB) {
	var tK, self, tC = document.createElement("div"),
		tD = document.createElement("div"),
		tE = document.createElement("div"),
		tF = null,
		tL = (this.tG = new tH({
			value: "",
			eJ: -1
		}, 0, tI, function(e) {
			e.target.value = bD.tR.tS(e.target.value), tF.tQ.textContent = 255 - e.target.value.length
		}), 0),
		tM = 1,
		tN = 0,
		tO = 1048575;

	function tI() {
		tA(), tF.tQ.textContent = 255
	}

	function tX(tW, sM) {
		sM && (sM.tc = 1, tW.appendChild(bq.td.transform(sM)))
	}

	function ta(by) {
		tM ? tC.scrollTop = tC.scrollHeight : by && (tC.scrollTop = tN)
	}
	this.reset = function(tT) {
			tO = 1048575, tD.textContent = "", tT || this.nL()
		}, this.nL = function() {
			var tU = bq.z.tU,
				tV = bq.z.tV,
				fa = tU.length,
				kC = 1048575 === tO ? 0 : fa - (tV - tO + 1048575) % 1048575;
			if (tO = tV, !(fa <= (kC = Math.max(kC, 0)))) {
				for (var tW = document.createDocumentFragment(), aC = kC; aC < fa; aC++) tX(tW, bq.ll.tY(tU[aC], bq.ll.tZ(tU[aC])));
				tD.appendChild(tW), ta()
			}
		}, this.tb = function(s) {
			var tW = document.createDocumentFragment();
			tX(tW, s), tD.appendChild(tW), ta()
		}, this.show = function(sO) {
			sO.appendChild(tC), sO.appendChild(tE), this.resize(sO)
		}, this.te = function(sO) {
			u.removeChild(sO, tC), u.removeChild(sO, tE)
		}, this.resize = function(sO) {
			tL = sO ? sO.offsetHeight : tL;
			var sO = bD.sU.tg(.04, .75),
				th = Math.max(sO, tL - sO),
				ti = i.j / i.l,
				tj = .7 * ti,
				tk = bD.sU.sd(tL - sO - th),
				th = (tE.style.height = bD.sU.sd(sO), tC.style.height = bD.sU.sd(th), i.k > i.j || a1.a2.im() ? (tE.style.top = tk, tC.style.top = bD.sU.sd(tL - th), bD.sU.se(tC, 8)) : (tC.style.top = tk, tE.style.top = bD.sU.sd(tL - sO), bD.sU.se(
						tC, 2)), this.tG.e.style.width = bD.sU.sd(tj), this.tG.e.style.fontSize = tK.button.style.fontSize = bD.sU.sd(.5 * sO), bD.sU.se(this.tG.e, 6), tK.button.style.left = bD.sU.sd(tj), tK.button.style.width = bD.sU.sd(ti - tj),
					.385 * sO);
			a1.a2.im() && (th *= .8 - .12 * (i.j > i.k)), tD.style.marginLeft = tD.style.marginRight = bD.sU.sd(.5 * th), tD.style.fontSize = bD.sU.sd(th), ta(1)
		}, (self = this).tG.e.maxLength = 255, tC.style.position = "absolute", tC.style.left = "0", tC.style.width = "100%", tC.style.overflowX = "hidden", tC.style.overflowY = "auto", tC.style.font = "inherit", tC.style.backgroundColor = bE.pQ, tC
		.addEventListener("scroll", function() {
			tN = tC.scrollTop, tM = tN < tC.scrollHeight - tC.clientHeight - 2 ? 0 : 1
		}), tD.style.font = "inherit", tE.style.position = "absolute", tE.style.left = "0", tE.style.width = "100%", self.tG.e.setAttribute("placeholder", L(13)), self.tG.e.style.position = "absolute", self.tG.e.style.top = "0", self.tG.e.style
		.left = "0", self.tG.e.style.height = "100%", self.tG.e.style.backgroundColor = bE.pN, self.tG.e.style.textAlign = "center", (tK = new x(L(14), tI)).button.top = "0", tK.button.style.position = "absolute", tK.button.style.height = "100%", tK
		.so(bE.qm), tF = new tP("255", tK.button, 1, 1), tC.appendChild(tD), tE.appendChild(self.tG.e), tE.appendChild(tK.button)
}

function tm(tn, sf, tp) {
	function click() {
		var value = 1 - tn.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + sf, void 0 !== tn.eJ ? bm.qy.qz(tn.eJ, value) : tn.value = value, tp && tp(value)
	}
	var e;
	sf = sf || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (tn.value ? "🟩 " : "⬜ ") + sf, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function tq(sO, sH) {
	var s9 = document.createElement("div");
	this.sQ = s9, this.resize = function() {
		s9.style.padding = bD.sU.sd(bf.sa), s9.style.lineHeight = bD.sU.sd(bD.sU.tg(.035))
	}, sO.style.overflowX = "hidden", sO.style.overflowY = "auto", s9.innerHTML = sH, sO.appendChild(s9)
}

function tr(ts) {
	var s9 = document.createElement("div");
	this.e = s9, this.tt = ts, this.resize = function() {
		for (var fa = ts.length, aC = 1; aC < fa; aC++) bD.sU.se(ts[aC], 4)
	};
	var aC, fa = ts.length;
	for (s9.style.width = "100%", s9.style.height = "2.7em", s9.style.marginTop = "0.6em", s9.style.border = "inherit", aC = 0; aC < fa; aC++) ts[aC].style.verticalAlign = "top", ts[aC].style.width = (100 / fa).toFixed(2) + "%", ts[aC].style.height =
		"100%", ts[aC].style.fontSize = "0.75em", s9.appendChild(ts[aC])
}

function tu(tv, sh, tw, tx) {
	this.s9 = document.createElement("div"), this.p2 = tv;
	var ty = 0;
	this.resize = function(sO, u0) {
		var fa = tv.length;
		if (!tw)
			for (var aC = 1; aC < fa; aC++) bD.sU.se(tv[aC].button, 4);
		if (tx)
			for (aC = 0; aC < fa; aC++) tv[aC].button.style.width = tx[aC] + "%";
		else {
			for (var u1 = 0, aC = 0; aC < fa; aC++) u1 += tv[aC].button.offsetWidth;
			if (sO && (ty = sO.offsetWidth), u0 && u1 < ty)
				for (aC = 0; aC < fa; aC++) tv[aC].button.style.width = (100 * tv[aC].button.offsetWidth / u1).toFixed(2) + "%";
			else
				for (aC = 0; aC < fa; aC++) tv[aC].button.style.width = "auto";
			u0 || this.resize(sO, 1)
		}
	};
	var tz = this;
	tz.s9.style.height = tz.s9.style.maxHeight = "100%";
	for (var aC = 0; aC < tv.length; aC++) tv[aC].so(sh), tv[aC].button.style.height = "100%", tv[aC].button.style.padding = "0.0em 0.9em", tv[aC].button.style.whiteSpace = "pre", tz.s9.appendChild(tv[aC].button)
}

function u2() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.sU.se(this.e, 8, bE.pb)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function u3() {
	var u8, u9, u4 = document.createElement("div"),
		u5 = document.createElement("div"),
		u6 = 0,
		u7 = 0;
	this.show = function(fh, fj, sB, uA, uB, ek) {
			if (u6) {
				if (!uA) return;
				this.te()
			}
			fh === fj && -1 === fh ? (fh = u8, fj = u9) : (u8 = fh, u9 = fj);
			var uC = Math.floor(bD.sU.tg(.018)),
				uB = (fh = Math.max(uC + 2, fh), uB || (u7 = uA), u6 = 1, i.j / i.l),
				uA = (u4.style.whiteSpace = "pre", u4.textContent = sB, bD.sU.se(u4, 5), u4.style.font = bD.sU.uE(0, bD.sU.tg(.015)), u4.style.padding = "0.3em 0.6em", u4.style.left = fh + "px", u4.style.top = "0px", document.body.appendChild(u4),
					fh + u4.offsetWidth - uB),
				sB = (0 < uA && (fh -= uA, fh = Math.max(uC + 1, fh), u4.style.left = fh + "px", fh < uC + 2) && (u4.style.whiteSpace = "pre-wrap"), u4.offsetHeight);
			u4.style.top = fj - sB + u7 * bf.uG + "px", fh -= uC, u5.style.backgroundColor = bD.color.pK(ek >> 12 << 2, (ek >> 6 & 63) << 2, (63 & ek) << 2), u5.style.left = fh + "px", u5.style.top = u4.style.top, u5.style.width = uC + "px", u5.style
				.height = sB + "px", bD.sU.se(u5, 4), bD.sU.se(u5, 8), bD.sU.se(u5, 2), document.body.appendChild(u5)
		}, this.te = function(uH) {
			if (u6) {
				if (uH && u7) return 0;
				u6 = 0, u.removeChild(document.body, u4), u.removeChild(document.body, u5)
			}
			return 1
		}, u4.style.position = "absolute", u4.style.backgroundColor = bE.pO, u4.style.color = bE.pS, u4.style.pointerEvents = "none", u4.style.zIndex = "5", u4.style.maxWidth = "100%", u5.style.position = "absolute", u5.style.color = bE.pS, u5.style
		.pointerEvents = "none", u5.style.zIndex = "5"
}

function tH(uI, type, uJ, uK) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.uL++, e.value = uI.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.pS, e.style.backgroundColor = bE.pL, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.uM++
		}), e.addEventListener("blur", function() {
			i.uM--, -1 !== uI.eJ && bm.qy.qz(uI.eJ, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== uI.eJ && bm.qy.qz(uI.eJ, e.value), uJ ? uJ() : e.blur())
		}), uK && e.addEventListener("input", function(sM) {
			uK(sM)
		})
}

function uN(sO, data, oQ) {
	var fa = data.uO.length,
		uP = document.createElement("div"),
		uQ = document.createElement("div"),
		uR = document.createElement("div"),
		uS = new Array(fa),
		sP = new Array(fa),
		uT = new Array(data.uU.length),
		uV = bD.color.pM(70, 70, 0, .35);

	function sz() {
		this.style.backgroundColor = bD.color.sz(uV, 160)
	}

	function uc() {
		this.style.backgroundColor = uV
	}

	function sX() {
		var ft;
		for (sO.style.font = bD.sU.uE(0, bD.sU.uk(.026, .5, .03)), aC = 1; aC < uT.length; aC++) bD.sU.se(uT[aC], 4);
		if (bD.sU.se(uP, 2), fa) {
			for (var i3, ul = uP.offsetWidth, um = uR.offsetWidth, aC = 0; aC < uT.length; aC++) i3 = .01 * data.ub[aC] * um, uT[aC].style.width = (100 * i3 / ul).toFixed(2) + "%";
			var lr = data.uO[0].length;
			for (aC = 0; aC < fa; aC++)
				for (bD.sU.se(uS[aC], 2), ft = 1; ft < lr; ft++) bD.sU.se(sP[aC][ft], 4);
			uQ.uW && (uQ.scrollTop = uQ.uW)
		}
	}
	this.resize = function() {
			sX(), sX()
		}, sO.style.display = "flex", sO.style.flexDirection = "column", uQ.style.overflowX = "hidden", uQ.style.overflowY = "auto", uQ.addEventListener("scroll", function() {
			this.uW = this.scrollTop, oQ && oQ.uX && (u.z.uY[oQ.uX] = this.scrollTop)
		}),
		function() {
			var fd, aC, uO = data.uO,
				lr = fa ? uO[0].length : 0;
			for (aC = 0; aC < fa; aC++) {
				uS[aC] = document.createElement("div"), uS[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.pM(130, 130, 130, .35) : bE.pR
				}(aC), uS[aC].style.width = "100%", uS[aC].style.display = "flex", sP[aC] = new Array(lr);
				for (var ft = 0; ft < lr; ft++) sP[aC][ft] = fd = document.createElement("div"), fd.style.display = "flex", fd.style.justifyContent = "center", fd.style.wordBreak = "break-all", fd.style.padding = "0.4em 0em", fd.style.width = data
					.ub[ft] + "%", fd.textContent = uO[aC][ft].g2, 1 === uO[aC][ft].eb && (fd.name = "" + aC, fd.style.color = bE.qX, fd.style.backgroundColor = uV, fd.addEventListener("mouseover", sz), fd.addEventListener("mouseout", uc), function(
						fd, ue, uf) {
						2147483647 !== uf && fd.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, ue), bK.dk(bG.aD), this.style.backgroundColor = uV, u.v(8, u.ug, new uh(25, {
								action: 0,
								ue: bI.f1.ui(bI.f1.uj(5)),
								uf: uf
							}))
						})
					}(fd, uO[aC][ft].ue, uO[aC][ft].uf)), uS[aC].appendChild(fd)
			}
			for (uP.style.display = "flex", uP.style.backgroundColor = bD.color.pM(0, 120, 0, .35), aC = 0; aC < uT.length; aC++) uT[aC] = fd = document.createElement("div"), fd.style.display = "flex", fd.style.justifyContent = "center", fd.style
				.wordBreak = "break-all", fd.style.padding = "0.4em 0em", fd.style.width = data.ub[aC] + "%", fd.innerHTML = data.uU[aC], uP.appendChild(fd)
		}();
	for (var aC = 0; aC < fa; aC++) uR.appendChild(uS[aC]);
	uQ.appendChild(uR), sO.appendChild(uP), sO.appendChild(uQ), oQ && oQ.uX && (uQ.uW = u.z.uY[oQ.uX])
}

function un() {
	var ur, us, uo = document.createElement("div"),
		up = document.createElement("div"),
		uq = document.createElement("div"),
		uR = document.createElement("div"),
		p2 = [],
		eE = [L(16), L(17), L(18), L(19), L(20), L(21), L(22), L(23)],
		ut = [1, 2, 3, 0, 9, 10, 11, 13];

	function uv(aC) {
		u.v(8, 0, new uh(21, {
			ux: ut[aC],
			uy: 0,
			uz: 10
		}))
	}
	this.show = function() {
			this.qz(u.z.v0), document.body.appendChild(uo)
		}, this.te = function() {
			u.removeChild(document.body, uo)
		}, this.qz = function(v0) {
			for (var v1 = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < p2.length; aC++) {
				var j = v0[aC];
				ur[v1[aC]][1].tQ.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, v2 = bf.gap,
				k = bD.sU.v3(.085),
				j = Math.min(4 * k, i.j - 2 * v2),
				fa = p2.length;
			for (bD.sU.v4(uo, v2, i.k - v2 - k, j, k), bD.sU.se(uo), bD.sU.se(up, 6), aC = 0; aC < fa - 1; aC++) bD.sU.se(p2[aC].button, 6);
			for (aC = 0; aC < fa; aC++) ur[aC][0].resize(), ur[aC][1].resize();
			for (p2[0].fh = 0, p2[0].button.style.left = bD.sU.sd(p2[0].fh), p2[0].button.style.width = bD.sU.v5(1.7 * k), aC = 1; aC < fa; aC++) p2[aC].fh = p2[aC - 1].fh + p2[aC - 1].button.offsetWidth, p2[aC].button.style.left = bD.sU.sd(p2[aC]
				.fh);
			if (!us) {
				if (!ac.v6()) return;
				(us = ac.get(14)).style.width = "24%", us.style.position = "absolute", up.appendChild(us)
			}
			us.style.left = bD.sU.sd(0), us.style.top = "7%", uq.v7 && (uq.scrollLeft = uq.v7)
		}, uo.style.position = "absolute", up.style.width = "25%", up.style.height = "100%", up.style.backgroundColor = bE.pO, uq.style.position = "absolute", uq.style.width = "75%", uq.style.height = "100%", uq.style.backgroundColor = bE.pO, uq
		.style.top = uq.style.right = bD.sU.sd(0), bD.sU.uu(uq), uR.style.height = uR.style.maxHeight = "100%", p2.push(new x("", function() {
			uv(0)
		}, bE.qE)), p2.push(new x("", function() {
			uv(1)
		}, bE.qF)), p2.push(new x("", function() {
			uv(2)
		}, bE.q7)), p2.push(new x("", function() {
			uv(3)
		}, bE.pq)), p2.push(new x("", function() {
			uv(4)
		}, bE.qi)), p2.push(new x("", function() {
			uv(5)
		}, bE.qe)), p2.push(new x("", function() {
			uv(6)
		}, bE.qi)), p2.push(new x("", function() {
			uv(7)
		}, bE.pJ)), ur = new Array(p2.length);
	for (var aC = 0; aC < p2.length; aC++) p2[aC].button.style.position = "absolute", ur[aC] = [new uw(eE[aC], p2[aC].button, .25, .45), new uw("", p2[aC].button, .53, .84, 1)], p2[aC].button.style.height = p2[aC].button.style.maxHeight = "100%", p2[
		aC].button.top = bD.sU.sd(0), uR.appendChild(p2[aC].button);
	uq.appendChild(uR), uo.appendChild(up), uo.appendChild(uq)
}

function v8(v9, vA, tA, tB, vB) {
	var vC = document.createElement("div"),
		vD = document.createElement("div"),
		vE = document.createElement("div"),
		vF = document.createElement("div"),
		vG = document.createElement("div"),
		vH = document.createElement("div"),
		vI = document.createElement("span"),
		vJ = document.createElement("div"),
		vP = (this.vK = new t9(tA, tB), this.vL = new vM(tB), this.vN = new vO(vB), 2);
	this.vT = function(vU) {
		vU = (vU / 10).toFixed(1) + "%";
		vH.style.width = vU, vI.innerHTML = vU
	}, this.vV = function(vW) {
		(0 === vP ? this.vK : 1 === vP ? this.vL : this.vN).te(vF), (0 === (vP = vW) ? this.vK : 1 === vW ? this.vL : this.vN).show(vF)
	}, this.vX = function() {
		return vD
	}, this.show = function() {
		document.body.appendChild(vC)
	}, this.te = function() {
		u.removeChild(document.body, vC)
	}, this.resize = function() {
		var vY = 1 - .4 * a1.a2.im() * (i.j > 1.6 * i.k),
			vZ = bD.sU.tg(.05 * vY),
			va = i.k > i.j,
			vb = bD.sU.tg(.06 * vY + .03 * va),
			va = bD.sU.tg(.02 * vY + .01 * va),
			vd = bD.sU.tg(.025);
		vC.style.font = bD.sU.uE(0, vd), vE.style.font = bD.sU.uE(0, .9 * vd), vJ.style.font = bD.sU.uE(0, .9 * vd), vY < 1 && (vY = bD.sU.uE(0, vY * vd), vE.style.font = vY, vJ.style.font = vY, vG.style.font = vY), vD.style.height = bD.sU.sd(
			vZ), vD.style.font = bD.sU.uE(0, .72 * vZ), bD.sU.se(vD, 2), vE.style.top = bD.sU.sd(vZ), vE.style.height = bD.sU.sd(vb), bD.sU.se(vE, 2), vF.style.top = bD.sU.sd(vZ + vb), vF.style.height = bD.sU.sd(i.k / i.l - vZ - 2 * vb - va), vG
			.style.top = bD.sU.sd(i.k / i.l - vb - va), vG.style.height = bD.sU.sd(va), bD.sU.se(vG, 8), vI.style.font = bD.sU.uE(0, .8 * va), vJ.style.top = bD.sU.sd(i.k / i.l - vb), vJ.style.height = bD.sU.sd(vb), bD.sU.se(vJ, 8), v9.resize(
			vC), vA.resize(vC), 0 === vP ? this.vK.resize(vF) : (1 === vP ? this.vL : this.vN).resize()
	};
	tA = this;
	vC.style.position = "absolute", vC.style.top = "0", vC.style.left = "0", vC.style.width = "100%", vC.style.height = "100%", vC.style.backgroundColor = bE.pR, bM.sw() || (vC.style.backdropFilter = "blur(4px)", vC.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (vC.style.display = "none"), vD.style.position = "absolute", vD.style.top = "0", vD.style.left = "0", vD.style.width = "100%", vD.style.display = "flex", vD.style.alignItems = "center", vD.translate = !1;
	for (var h = [vE, vJ], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.sU.uu(h[aC]);
	vF.style.position = "absolute", vF.style.left = "0", vF.style.width = "100%", vF.style.font = "inherit", vG.style.position = "absolute", vG.style.left = "0", vG.style.width = "100%", vH.style.position = "absolute", vH.style.top = "0", vH.style
		.left = "0", vH.style.height = "100%", vH.style.width = "50%", vH.style.backgroundColor = bE.po, vI.innerHTML = "", vI.style.position = "absolute", vI.style.top = "50%", vI.style.left = "50%", vI.style.transform = "translate(-50%, -50%)", vI
		.translate = !1, vD.appendChild(function() {
			var vS = document.createElement("h1");
			return vS.textContent = L(24), vS.style.margin = "0 auto 0.15em auto", vS.style.fontFamily = "Arial Black, system-ui", vS.style.fontSize = "inherit", vS.style.fontWeight = "inherit", vS
		}()), vE.appendChild(v9.s9), vG.appendChild(vH), vG.appendChild(vI), vJ.appendChild(vA.s9), vC.appendChild(vD), vC.appendChild(vE), vC.appendChild(vF), vC.appendChild(vG), vC.appendChild(vJ), vC.className = "fx-lobby", vF.className =
		"fx-panel", vG.className = "fx-progress", tA.vN.show(vF)
}

function vO(vB) {
	var vC = document.createElement("div"),
		vf = [],
		vg = 96,
		vh = ["battleRoyale", "oneVsOne", "zombie", "noFullSending"];

	function vx(e) {
		e.style.position = "absolute", e.style.top = e.style.left = "0", e.style.width = e.style.height = "100%", e.style.pointerEvents = "none"
	}

	function vl(button, wB) {
		var s9 = document.createElement("div");
		return s9.style.position = "absolute", s9.style.left = "0", s9.style.width = "100%", s9.style.height = "20%", s9.style.pointerEvents = "none", s9.style.backgroundColor = bE.pL, wB ? s9.style.top = "0" : s9.style.bottom = "0", button
			.appendChild(s9), s9
	}

	function vo(wC, wD) {
		var s9 = document.createElement("div");
		return s9.style.position = "absolute", s9.style.top = "0", s9.style.width = "20%", s9.style.height = "100%", wD ? s9.style.left = "0" : s9.style.right = "0", wC.appendChild(s9), s9
	}

	function vz(wE) {
		var canvas = document.createElement("canvas");
		return canvas.width = canvas.height = 64, vx(canvas), canvas.style.top = canvas.style.left = "10%", canvas.style.width = canvas.style.height = "80%", wE.appendChild(canvas), canvas.getContext("2d", {
			alpha: !0
		})
	}

	function vs(wC, left, right, width) {
		var s9 = document.createElement("div");
		return s9.style.position = "absolute", s9.style.top = "50%", s9.style.transform = "translateY(-50%)", s9.style.left = left, s9.style.right = right, s9.style.width = width, s9.style.textAlign = "left", wC.appendChild(s9), {
			s9: s9,
			w6: wH(s9, 1.9),
			vv: wH(s9, 1)
		}
	}

	function wH(om, fontSize) {
		var s9 = document.createElement("div");
		return s9.style.fontSize = fontSize + "em", s9.style.lineHeight = "1.1", s9.style.whiteSpace = "nowrap", s9.style.overflow = "hidden", s9.style.textOverflow = "ellipsis", s9.style.textShadow = "0 0 0.25em black", om.appendChild(s9), s9
	}

	function wI(e, sB) {
		e.textContent !== sB && (e.textContent = sB)
	}

	function wJ(sM) {
		sM.canvas && (bq.wK.we(sM.canvas), sM.canvas = null), sM.w5 = ""
	}
	this.nL = function() {
		var sP = bq.sP.sP,
			fa = sP.length;
		if (fa !== vf.length) {
			for (var aC = 0; aC < vf.length; aC++) wJ(vf[aC]);
			for (vC.textContent = "", vf = new Array(fa), aC = 0; aC < fa; aC++) vf[aC] = function(eJ) {
				var button = document.createElement("button"),
					vk = (button.style.position = "absolute", button.style.backgroundColor = bE.pR, button.style.color = bE.pS, button.style.outline = "none", button.style.userSelect = "none", button.style.cursor = "pointer", button.style
						.padding = "0", button.style.overflow = "hidden", bD.sU.vj(button, function() {
							vB(eJ, 0)
						}, function() {
							vB(eJ, 1)
						}), bD.sU.se(button), vl(button, 1)),
					vm = vl(button, 0),
					vn = vo(vk, 0),
					vp = vo(vm, 1),
					vq = vo(vm, 0),
					vr = vs(vk, "3%", "", "74%"),
					vt = vs(vm, "20%", "", "30%"),
					vu = vs(vm, "", "20%", "30%"),
					vw = (vu.s9.style.textAlign = "right", vt.vv.textContent = "Starts in", document.createElement("canvas"));
				return vw.width = vw.height = vg, vx(vw), vn.appendChild(vw), (button = {
					button: button,
					vk: vk,
					vm: vm,
					vy: vz(vp),
					w0: vz(vq),
					w1: 0,
					isContest: 0,
					w2: null,
					vn: vn,
					vw: vw,
					w3: vw.getContext("2d", {
						alpha: !0
					}),
					w4: -1,
					canvas: null,
					w5: "",
					map: vr.w6,
					w7: vr.vv,
					w8: vt.w6,
					w9: vu.w6,
					wA: vu.vv,
					hl: -1
				}).map.translate = !1, button.w7.translate = !1, button.w8.translate = !1, vt.vv.translate = !1, button
			}(aC), vC.appendChild(vf[aC].button);
			this.resize()
		}
		for (aC = 0; aC < fa; aC++) vf[aC].w5 !== bq.wK.wL(sP[aC].fG, sP[aC].mapSeed) && wJ(vf[aC]);
		for (aC = 0; aC < fa; aC++) {
			var wM = sP[aC],
				sM = vf[aC],
				hl = wM.id === bq.sP.wN ? 1 + bq.sP.wO : 0,
				h3 = bq.sP.wP(wM);
			wI(sM.map, bV.wQ.wR[wM.fG]), wI(sM.w7, bq.sP.wS(wM.w7)), wI(sM.w8, bq.sP.wT(wM.wU)), wI(sM.w9, h3 + (bq.sP.wV(wM) ? "/" + wM.nT : "")), wI(sM.wA, L(1 === h3 ? 25 : 26)), sM.hl !== hl && (sM.hl = hl, sM.vk.style.backgroundColor = sM.vm
				.style.backgroundColor = [bE.pL, bE.py, bE.qQ][hl], bD.sU.se(sM.button, 5, [bE.pS, bE.pz, bE.qR][hl]), sM.button.classList.toggle("fx-line", !hl)), ! function(sM) {
				!sM.w1 && ac.v6() && (sM.w1 = 1, sM.vy.drawImage(ac.wG("clock"), 0, 0), sM.w0.drawImage(ac.wG("userIcon"), 0, 0))
			}(sM), ! function(sM, w7) {
				sM.w4 === w7 || 7 <= w7 && !ac.v6() || ((sM.w4 = w7) < 7 ? bk.wc(sM.w3, w7 + 2, vg) : (sM.w3.clearRect(0, 0, vg, vg), sM.w3.drawImage(ac.wG(vh[w7 - 7]), 0, 0, vg, vg)))
			}(sM, wM.w7), ! function(sM, isContest) {
				sM.isContest === isContest || isContest && !ac.v6() || ((sM.isContest = isContest) ? (sM.w2 || (sM.w2 = function(sM) {
					var wb = ac.wG("crown"),
						canvas = document.createElement("canvas");
					return canvas.width = wb.width, canvas.height = wb.height, canvas.getContext("2d", {
							alpha: !0
						}).drawImage(wb, 0, 0), canvas.style.position = "absolute", canvas.style.top = "50%", canvas.style.left = "50%", canvas.style.width = "55%", canvas.style.height = "auto", canvas.style.transform =
						"translate(-50%, -50%)", canvas.style.opacity = "0.5", canvas.style.pointerEvents = "none", sM.button.insertBefore(canvas, sM.vk), canvas
				}(sM)), sM.w2.hidden = !1) : sM.w2.hidden = !0)
			}(sM, wM.wY), ! function(sM, wM) {
				var canvas;
				sM.canvas || (canvas = bq.wK.wd(wM.fG, wM.mapSeed)) && (sM.canvas = canvas, sM.w5 = bq.wK.wL(wM.fG, wM.mapSeed), vx(canvas), sM.button.insertBefore(canvas, sM.button.firstChild))
			}(sM, wM)
		}
	}, this.resize = function() {
		var fa = vf.length,
			j = vC.offsetWidth,
			k = vC.offsetHeight;
		if (0 !== fa && 0 !== j && 0 !== k) {
			for (var gap = bD.sU.tg(.012), wf = 0, wg = 1, ek = 1; ek <= fa; ek++) {
				var rows = bO.g1(fa + ek - 1, ek),
					rows = Math.min((j - (ek + 1) * gap) / ek, (k - (rows + 1) * gap) / rows);
				wf < rows && (wf = rows, wg = ek)
			}
			for (var wh = bO.g1(fa + wg - 1, wg), nz = (j - wg * wf - (wg - 1) * gap) / 2, o0 = (k - wh * wf - (wh - 1) * gap) / 2, aC = 0; aC < fa; aC++) {
				var sY = vf[aC].button.style;
				sY.left = bD.sU.sd(nz + aC % wg * (wf + gap)), sY.top = bD.sU.sd(o0 + bO.g1(aC, wg) * (wf + gap)), sY.width = sY.height = bD.sU.sd(wf), sY.fontSize = bD.sU.sd(.05 * wf)
			}
		}
	}, this.show = function(sO) {
		sO.appendChild(vC), this.nL(), this.resize()
	}, this.te = function(sO) {
		u.removeChild(sO, vC)
	}, vC.style.position = "absolute", vC.style.top = "0", vC.style.left = "0", vC.style.width = vC.style.height = "100%", vC.style.overflow = "hidden", vC.style.font = "inherit"
}

function vM(tB) {
	var tQ, wE, vC = document.createElement("div"),
		vF = document.createElement("div"),
		wi = null,
		wj = null;
	this.nL = function() {
			vF.textContent = "", bq.wm.wn && bq.wm.te(1);
			for (var tW = document.createDocumentFragment(), w9 = bq.wo.wp, sP = bq.sP.sP, wq = 0, aC = 0; aC < sP.length; aC++) wq = wq || 8 === sP[aC].w7;
			for (wi.style.width = wi.style.maxWidth = wq ? "11.3em" : "10.3em", aC = 0; aC < w9.length; aC++) {
				var eJ = bq.sP.wr(w9[aC].ws);
				! function(tW, sM, eJ, wu) {
					var tQ = wi.cloneNode(!0),
						wE = tQ.firstChild;
					wE.style.backgroundColor = 0 <= eJ && sM.wv ? bE.qT : wj[eJ < 0 ? 15 : Math.min(eJ, 14)], 0 <= eJ && (wE.textContent = "" + (eJ + 1));
					tQ.lastChild.textContent = bq.ll.ww(sM, wu), tQ.style.color = bq.ll.wx(sM.wy), 11 === sM.wy && (tQ.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
					__fx.settings.highlightDuplicateIps && (wE = __fx.utils.getDuplicateIpHighlightColor(sM, bq.wo.wp, "aGq")) && (tQ.style.backgroundColor = wE, tQ.style.borderRadius = "0.3em");
					__fx.settings.highlightSameClan && (eJ = __fx.utils.getSameClanHighlightColor(sM, bq.aGT, "username")) && (tQ.style.backgroundColor ? tQ.style.boxShadow = "inset 0 0 0 2px " + eJ : tQ.style.backgroundColor = eJ, tQ.style
						.borderRadius = "0.3em");
					bq.ll.wz(sM) && (tQ.style.textDecoration = "underline"), sM.x0 && (tQ.style.textDecorationLine = "underline", tQ.style.textDecorationStyle = "dotted");
					tQ.onclick = function(e) {
						tB(e, sM)
					}, bM.sw() || (tQ.onmouseover = function(e) {
						bq.wm.x1(tQ, sM, 1)
					}), tW.appendChild(tQ)
				}(tW, w9[aC], eJ, 0 <= eJ && 8 === sP[eJ].w7)
			}
			vF.appendChild(tW), vF.classList.toggle("fx-wide", !!wq)
		}, this.show = function(sO) {
			sO.appendChild(vC)
		}, this.te = function(sO) {
			u.removeChild(sO, vC)
		}, this.resize = function() {
			vF.style.fontSize = bD.sU.sd(bD.sU.tg(.02, .3))
		}, vC.style.top = "0", vC.style.left = "0", vC.style.width = vC.style.height = "100%", vC.style.overflowX = "hidden", vC.style.overflowY = "auto", vC.style.font = "inherit", vF.style.font = "inherit", vF.style.margin = "0.4em", vC
		.appendChild(vF), vC.className = "fx-players-scroll", vF.className = "fx-players", (tQ = document.createElement("span")).style.cursor = "pointer", tQ.style.margin = "0.2em 0.2em 0.2em 0.2em", tQ.style.height = tQ.style.maxHeight = "1.4em", tQ
		.style.whiteSpace = "nowrap", tQ.style.overflow = "hidden", tQ.style.textOverflow = "ellipsis", tQ.style.font = "inherit", tQ.style.display = "inline-block", (wE = document.createElement("span")).style.display = "inline-block", wE.style
		.width = wE.style.height = wE.style.lineHeight = "1.3em", wE.style.marginRight = "0.4em", wE.style.fontSize = "0.8em", wE.style.fontWeight = "bold", wE.style.textAlign = "center", wE.style.color = bE.pJ, wE.style.textShadow = "none", wE.style
		.textDecoration = "none", wE.style.pointerEvents = "none", wE.translate = !1, tQ.appendChild(wE), tQ.appendChild(document.createTextNode("")), wi = tQ, wj = function() {
			for (var h = ["rgb(0,200,0)", "rgb(150,220,0)", "rgb(250,225,0)", "rgb(255,150,0)", "rgb(240,85,0)"], aC = h.length; aC < 15; aC++) h.push("rgb(210,0,0)");
			return h.push("rgb(128,128,128)"), h
		}()
}

function x2(x3) {
	var vC = document.createElement("div"),
		tE = document.createElement("div"),
		x4 = [];

	function sr() {
		bM.sw() || (this.style.backgroundColor = bD.color.sz(bE.pO, 50))
	}

	function ss() {
		this.style.backgroundColor = bE.pO
	}
	this.qz = function(x6, x7) {
			x4[2].textContent = x6 + 1 + " / " + x7
		}, this.show = function(sM) {
			sM = bq.ll.tY(sM, bq.ll.tZ(sM)), tE.appendChild(bq.td.transform(sM)), document.body.appendChild(vC)
		}, this.resize = function() {
			var k = bD.sU.tg(.03, .5);
			vC.style.width = 10 * k + "px", vC.style.font = bD.sU.uE(1, .75 * k), bD.sU.se(vC, 4), tE.style.top = k + "px", tE.style.font = bD.sU.uE(0, .55 * k), bD.sU.se(tE, 2), vC.style.height = k + tE.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.sU.se(x4[aC], 6), x4[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) x4[aC].style.height = k + "px", bD.sU.se(x4[aC], 2);
			x4[2].style.width = 4 * k + "px", x4[1].style.left = 2 * k + "px", x4[2].style.left = 4 * k + "px", x4[3].style.left = 8 * k + "px"
		}, this.x8 = function() {
			for (var aC = 0; aC < 4; aC++) x4[aC].onclick = null, x4[aC].onmouseover = null, x4[aC].onmouseout = null;
			u.removeChild(document.body, vC), vC = tE = x4 = null
		}, vC.style.position = "absolute", vC.style.color = bE.pS, vC.style.zIndex = "3", vC.style.right = "0", vC.style.top = "0", tE.style.position = "absolute", tE.style.height = "auto", tE.style.color = bE.pS, tE.style.backgroundColor = bE.pO, tE
		.style.left = "0", tE.style.width = "100%", tE.style.overflowWrap = "break-word", vC.appendChild(tE);
	for (var aC = 0; aC < 4; aC++) x4[aC] = document.createElement("div"), x4[aC].style.position = "absolute", x4[aC].style.backgroundColor = bE.pO, x4[aC].style.color = bE.pS, x4[aC].style.top = "0", x4[aC].style.display = "flex", x4[aC].style
		.justifyContent = "center", x4[aC].style.alignItems = "center", x4[aC].style.userSelect = "none", x4[aC].style.outline = "none", x4[aC].style.font = "inherit", 2 !== (x4[aC].x5 = aC) && (x4[aC].onclick = x3, x4[aC].onmouseover = sr, x4[aC]
			.onmouseout = ss), vC.appendChild(x4[aC]);
	x4[0].textContent = "◀", x4[1].textContent = "▶", x4[3].textContent = "✖"
}

function x9(x3) {
	var u4 = document.createElement("div");

	function sr() {
		bM.sw() || (u4.style.backgroundColor = bD.color.sz(bE.pO, 50))
	}

	function ss() {
		u4.style.backgroundColor = bE.pO
	}
	this.qz = function(x7) {
			u4.textContent = x7
		}, this.show = function() {
			document.body.appendChild(u4)
		}, this.resize = function() {
			var k = bD.sU.tg(.03, .5);
			u4.style.width = 2 * k + "px", u4.style.height = k + "px", u4.style.font = bD.sU.uE(1, .75 * k), bD.sU.se(u4, 4), bD.sU.se(u4, 2)
		}, this.x8 = function() {
			u4.onclick = null, u4.onmouseover = null, u4.onmouseout = null, u.removeChild(document.body, u4), u4 = null
		}, u4.style.position = "absolute", ss(), u4.style.color = bE.pS, u4.style.zIndex = "3", u4.style.right = "0", u4.style.top = "0", u4.style.display = "flex", u4.style.justifyContent = "center", u4.style.alignItems = "center", u4.style
		.userSelect = "none", u4.style.outline = "none", u4.onclick = x3, u4.onmouseover = sr, u4.onmouseout = ss
}

function xA(tv) {
	var vC = document.createElement("div"),
		xB = document.createElement("div"),
		u6 = (this.fh = 0, this.fj = 0);

	function xD() {
		bq.xE.te()
	}
	this.p2 = tv, this.show = function(fh, fj, xG) {
		if (u6) return [0, 0];
		u6 = 1, this.fh = fh, this.fj = fj,
			function(self, xG) {
				var j = bD.sU.tg(.16, .7),
					k = tv.length * j / 3,
					xI = i.j / i.l,
					xJ = i.k / i.l,
					oB = Math.min(1, Math.min(xI / j, xJ / k));
				j *= oB, k *= oB, xG && (self.fh += bD.sU.tg(.03, .5)), self.fh = bO.il(self.fh, 0, xI - j), self.fj = bO.il(self.fj, 0, xJ - k), xB.style.left = self.fh + "px", xB.style.top = self.fj + "px", xB.style.width = j + "px", xB.style
					.height = k + "px", xB.style.font = bD.sU.uE(0, .3 * k / tv.length), bD.sU.se(xB, 5);
				for (var aC = 1; aC < tv.length; aC++) bD.sU.se(tv[aC].button, 8)
			}(this, xG), document.body.appendChild(vC)
	}, this.te = function() {
		u6 && (u6 = 0, vC.removeEventListener("click", xD), u.removeChild(document.body, vC))
	};
	for (var aC = 0; aC < tv.length; aC++) new tP("" + (1 + aC), tv[aC].button, 0, 1);
	vC.style.position = "fixed", vC.style.top = "0", vC.style.left = "0", vC.style.width = "100%", vC.style.height = "100%", vC.style.zIndex = "5", xB.style.position = "absolute",
		function() {
			for (var xF = (100 / tv.length).toFixed(2) + "%", aC = 0; aC < tv.length; aC++) tv[aC].button.style.width = "100%", tv[aC].button.style.height = tv[aC].button.style.maxHeight = xF, tv[aC].button.style.padding = "0.0em 0.9em", xB
				.appendChild(tv[aC].button)
		}(), vC.appendChild(xB), vC.addEventListener("click", xD)
}

function el() {
	var xK, xL, xM;

	function xT(aC) {
		return bD.color.pK(xL[aC][0], xL[aC][1], xL[aC][2])
	}

	function xZ(ft, fu) {
		return bD.color.xi(xL[ft], xL[fu]), xT(fu)
	}

	function xR() {
		xK && (xK.remove(), xK = null)
	}
	this.show = function(em, colors, id) {
		0 <= (xM = id) && b1.z.eg(0) && b1.eh.xN(0, id), em = (em = (em = (em = (em = (em = (em = (em = (em = (em = (em = (em = em.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			xL = colors, (xK = document.createElement("div")).style.position = "fixed", xK.style.top = "0", xK.style.left = "0", xK.style.width = "100%", xK.style.height = "100%", xK.style.backgroundColor = bD.color.pM(xL[0][0], xL[0][1], xL[0][
				2], .6), xK.style.zIndex = "6", xK.onclick = function(e) {
				e.target === xK && xR()
			},
			function(em) {
				var iX, xS = document.createElement("div");
				xS.style.position = "absolute", xS.style.display = "flex", xS.style.flexDirection = "column", xS.style.top = "50%", xS.style.left = "50%", xS.style.backgroundColor = xT(2), iX = a1.a2.im() ? bD.sU.xU(i.min) : bD.sU.tg(.4);
				iX = Math.max(iX, 200), xS.style.width = bD.sU.sd(iX), xS.style.height = bD.sU.sd(iX), xS.style.transform = "translate(-50%, -50%)",
					function(xS, iX) {
						var xY = document.createElement("div");
						xY.style.flex = "0 0 10%", xY.style.overflow = "hidden", xY.style.backgroundColor = xT(1), xY.style.color = xZ(1, 7), xY.style.font = bD.sU.uE(1, .05 * iX), xY.style.display = "flex", xY.style.alignItems = "center", xY
							.style.justifyContent = "center", xY.innerHTML = L(27), xS.appendChild(xY)
					}(xS, iX),
					function(xS, em, iX) {
						var xa = document.createElement("div");
						xa.style.flex = "0 0 70%", xa.style.overflowY = "auto", xa.style.overflowX = "hidden", xa.style.whiteSpace = "pre-wrap", xa.style.wordWrap = "break-word", xa.style.padding = bD.sU.sd(.02 * iX), xa.style.backgroundColor =
							xT(2), xa.style.color = xZ(2, 8), xa.style.font = bD.sU.uE(0, .07 * iX), xa.innerHTML = em, xa.innerHTML = "<style>a { color: inherit; }</style>" + xa.innerHTML, xS.appendChild(xa)
					}(xS, em, iX),
					function(xS, iX) {
						var om = document.createElement("div"),
							xb = (om.style.display = "flex", om.style.flexDirection = "row", om.style.justifyContent = "space-between", om.style.alignItems = "stretch", om.style.backgroundColor = xT(3), om.style.flex = "1", om.style.padding = bD
								.sU.sd(.01 * iX), om.style.gap = bD.sU.sd(.01 * iX), document.createElement("div")),
							xc = (xb.style.flex = "0 0 60%", xb.style.height = "100%", new x(L(28, 0, 0, 1), function() {
								xR()
							}, xT(4), !1)),
							xc = (xc.button.style.width = "100%", xc.button.style.height = "100%", xc.button.style.color = xZ(4, 9), xc.button.style.font = bD.sU.uE(1, .05 * iX), xb.appendChild(xc.button), document.createElement("div")),
							xe = (xc.style.flex = "0 0 15%", xc.style.height = "100%", xc.style.backgroundColor = xT(5), document.createElement("div")),
							xf = (xe.style.flex = "1", xe.style.height = "100%", new x(L(29), function(e) {
								return bD.sU.xg(e), xM < 0 || b1.z.eg(0) && (b1.eh.xN(1, xM), xM = -1), !0
							}, xT(6), !1));
						xf.button.style.width = "100%", xf.button.style.height = "100%", xf.button.style.color = xZ(6, 10), xf.button.style.font = bD.sU.uE(1, .035 * iX), xe.appendChild(xf.button), om.appendChild(xb), om.appendChild(xc), om
							.appendChild(xe), xS.appendChild(om)
					}(xS, iX), xK.appendChild(xS)
			}(em), document.body.appendChild(xK)
	}
}

function xj(uI, xk) {
	this.sK = [];
	var xl = this.sK;

	function click() {
		for (var aC = 0; aC < xl.length; aC++) xl[aC].textContent = xl[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eJ = parseInt(this.name);
		void 0 !== uI.eJ && bm.qy.qz(uI.eJ, eJ), xk && xk(eJ)
	}
	for (var xm, fa = uI.oQ.length, aC = 0; aC < fa; aC++)(xm = document.createElement("p")).textContent = "⚪ " + uI.oQ[aC], xm.style.margin = "0", xm.name = "" + aC, xm.style.cursor = "pointer", xm.style.fontSize = "1em", xm.addEventListener(
		"click", click), xl.push(xm);
	xl[uI.value].textContent = xl[uI.value].textContent.replace("⚪", "🟢")
}

function xn(title, xo, xp) {
	var uo = document.createElement("div"),
		xq = document.createElement("div"),
		uR = document.createElement("div"),
		xr = document.createElement("div"),
		xs = document.createElement("div");
	this.xt = uR, this.xu = xo, uo.className = "fx-page", this.show = function() {
			!1 !== xp ? document.body.appendChild(uo) : (document.body.appendChild(xq), document.body.appendChild(xr))
		}, this.te = function() {
			!1 !== xp ? u.removeChild(document.body, uo) : (u.removeChild(document.body, xq), u.removeChild(document.body, xr))
		}, this.xy = function() {
			var th = bD.sU.tg(.1),
				tf = bD.sU.tg(.08 + .04 * (i.xz < 1), .3);
			return {
				th: th,
				tf: tf,
				y0: i.k / i.l - th - tf
			}
		}, this.resize = function(u0) {
			var fa = xo.length,
				y1 = this.xy(),
				th = y1.th,
				tf = y1.tf;
			for (xq.style.height = bD.sU.sd(th), bD.sU.se(xq, 2), xr.style.top = bD.sU.sd(i.k / i.l - tf), xr.style.height = bD.sU.sd(tf), bD.sU.se(xr, 8), uR.style.top = bD.sU.sd(th), uR.style.height = uR.style.maxHeight = bD.sU.sd(y1.y0), xq.style
				.font = bD.sU.uE(0, bD.sU.tg(.02, .15)), xr.style.font = bD.sU.uE(0, bD.sU.tg(.02, .7)), uR.style.font = bD.sU.uE(0, bD.sU.tg(.02, .35)), aC = 1; aC < fa; aC++) bD.sU.se(xo[aC].button, 4);
			for (var u1 = 0, aC = 0; aC < fa; aC++) u1 += xo[aC].button.offsetWidth;
			if (u0 && u1 < xr.offsetWidth)
				for (aC = 0; aC < fa; aC++) xo[aC].button.style.width = (100 * xo[aC].button.offsetWidth / u1).toFixed(2) + "%";
			else
				for (aC = 0; aC < fa; aC++) xo[aC].button.style.width = "auto";
			xr.v7 && (xr.scrollLeft = xr.v7), u0 || this.resize(!0)
		}, this.y2 = function() {
			var y1 = this.xy(),
				ek = i.l;
			y3.fillStyle = bE.pO, y3.fillRect(0, ek * y1.th, i.j, ek * y1.y0)
		}, uo.style.position = "absolute", uo.style.top = "0", uo.style.left = "0", uo.style.width = "100%", uo.style.height = "100%", xq.style.position = "absolute", xq.style.top = "0", xq.style.left = "0", xq.style.width = "100%", xq.style
		.display = "flex", xq.style.backgroundColor = bE.pO, xr.style.position = "absolute", xr.style.left = "0", xr.style.width = "100%", bD.sU.uu(xr), xs.style.height = xs.style.maxHeight = "100%", uR.style.position = "absolute", uR.style.width =
		"100%", uR.style.backgroundColor = bE.pO,
		function() {
			for (var aC = 0; aC < xo.length; aC++) xo[aC].button.style.height = "100%", xo[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < xo.length; aC++) xs.appendChild(xo[aC].button);
	xq.appendChild(function() {
		var xx = document.createElement("h1");
		return xx.textContent = title, xx.style.margin = "auto", xx.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", xx.style.fontFamily = "Arial Black, system-ui", xx
	}()), xr.appendChild(xs), !1 !== xp && (uo.appendChild(uR), uo.appendChild(xq), uo.appendChild(xr))
}

function tP(y4, y5, y6, y7) {
	var self;
	this.tQ = document.createElement("span"), (self = this).tQ.textContent = y4, self.tQ.style.color = bE.pS, self.tQ.style.position = "absolute", self.tQ.style.font = "inherit", y7 ? self.tQ.style.bottom = "0.06em" : self.tQ.style.top = "0.12em",
		y6 ? self.tQ.style.left = "0.2em" : self.tQ.style.right = "0.2em", self.tQ.style.fontSize = "0.6em", self.tQ.style.pointerEvents = "none", self.tQ.style.whiteSpace = "pre", y5.style.position = "relative", y5.style.overflow = "hidden", y5
		.appendChild(self.tQ)
}

function uw(y4, y5, y8, y9, yA) {
	var self;
	this.tQ = document.createElement("span"), this.resize = function() {
			this.tQ.style.fontSize = ((y9 - y8) * y5.offsetHeight).toFixed(1) + "px"
		}, (self = this).tQ.textContent = y4, self.tQ.style.color = bE.pS, self.tQ.style.font = "inherit", self.tQ.style.margin = "0.1em 0.6em", self.tQ.style.pointerEvents = "none", yA && (self.tQ.style.fontWeight = "bold"), self.tQ.style
		.whiteSpace = "nowrap", self.tQ.style.display = "block", y5.appendChild(self.tQ)
}

function yB(yC, yD, yE, oS) {
	var yF = document.createElement("textarea"),
		yG = (this.e = yF, !0);

	function yL() {
		yF.select(), document.execCommand("copy")
	}
	this.resize = function() {
			yD && bD.sU.se(yF, 5)
		}, this.yH = function(em) {
			yF.value = em
		}, this.yI = function() {
			return yF.value
		}, this.yJ = function() {
			yF.select()
		}, this.clear = function() {
			yF.value = ""
		}, this.yK = function() {
			yG && navigator.clipboard ? (yF.select(), navigator.clipboard.writeText(yF.value).catch(function() {
				yG = !1, yL()
			})) : yL()
		}, yF.setAttribute("id", "textArea" + u.z.uL++), yF.setAttribute("autocomplete", "off"), yC && yF.setAttribute("placeholder", yC), yF.style.top = "0", yF.style.left = "0", yF.style.width = "100%", yF.style.height = "100%", yF.style
		.userSelect = "none", yF.style.outline = "none", yF.style.resize = "none", yF.style.border = "none", yF.style.color = bE.pS, yF.style.backgroundColor = bE.pL, oS ? (yF.style.fontSize = "1em", yF.rows = 6, yF.style.padding = "0.25em") : (yF
			.style.padding = "0.45em", yF.style.fontSize = "1.2em"), yE && yF.addEventListener("input", function(e) {
			yE(e)
		}), yF.addEventListener("focus", function() {
			i.uM++
		}), yF.addEventListener("blur", function() {
			i.uM--
		})
}

function dO() {
	this.sl = new yM, this.buffer = new yN, this.qy = new yO, this.z = new yP, this.yQ = new yR, this.dk = function() {
		this.buffer.dk(), (new yS).dk(), this.yQ.dk(), this.z.yT()
	}
}

function yN() {
	function yU(aC, type, ya, e4) {
		bm.buffer.data.push({
			eJ: aC,
			type: type || 0,
			value: ya || 0,
			ya: ya || 0,
			e4: e4 || 0
		})
	}

	function yV(aC, type, ya, e4) {
		bm.buffer.data.push({
			eJ: aC,
			type: type,
			value: ya || "",
			ya: ya || "",
			e4: e4 || 0
		})
	}

	function yW(oH) {
		for (var aC = bm.buffer.data.length; aC < oH; aC++) bm.buffer.data.push(null)
	}
	this.data = [], this.dk = function() {
		yU(0, 1, 0, 5), yU(1, 1, 1), yU(2, 0), yV(3, 2), yU(4, 1), yV(5, 2, "system-ui", 2), yU(6, 0), yU(7, 0, 0), yU(8, 0), yU(9, 1, 1), yU(10, 1), yU(11, 1, 1), yV(12, 2, navigator.language), yU(13), yU(14), yU(15, 0, 1), yU(16, 0, 3), yW(
			100), yV(100, 2), yV(101, 2), yV(102, 2), yV(103, 2), yV(104, 2), yV(105, 2), yV(106, 2), yU(107), yU(108), yU(109), yV(110, 2), yU(111), yU(112), yU(113), yV(114, 2), yU(115), yV(116, 2), yU(117, 1), yV(118, 2, "", 2), yU(119, 1, 0,
				1), yV(120, 2), yU(121, 1, ~~(262144 * Math.random())), yV(122, 2, "Player " + Math.floor(1e3 * Math.random())), yU(123), yV(124), yU(125, 1), yV(126, 2), yU(127, 0, 1), yU(128), yU(129), yU(130), yU(131), yU(132), yV(133, 2), yU(
				134, 0, 5), yV(135, 2), yV(136, 2), yU(137), yU(138), yU(139), yU(140), yU(141), yU(142), yU(143), yU(144), yV(145, 2), yU(146), yU(147), yV(148, 2), yU(149), yU(150, 0, 1), yV(151, 2), yU(152, 0, 5), yU(153, 1), yU(154, 1), yV(
				155, 2), yV(156, 2), yU(157), yU(158), yU(159), yU(160), yV(161, 2), yU(162, 0, 1024), yV(163, 2, "0,0,0"), yV(164, 2, "100,100,100"), yV(165, 2, "30,30,30"), yV(166, 2, "70,70,70"), yV(167, 2, "100,100,100"), yV(168, 2,
				"85,85,85"), yV(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) yV(170 + aC, 2, "255,255,255");
		yV(174, 2), yV(175, 2), yU(176, 0, 200), yW(180), yU(180, 0), yU(181, 0), yU(182, 0, 1023), yV(183, 2), yU(184, 0, 100), yV(185, 2)
	}, this.qz = function(eJ, value) {
		this.data[eJ].value = value
	}, this.yX = function(eJ, value) {
		this.qz(eJ, value);
		var value = String(value),
			fa = value.length;
		5e4 < fa ? console.log("storage value too large: index " + eJ + " size " + fa) : (bm.sl.save(eJ, value), bm.sl.save(eJ, String(this.data[eJ].e4), !0))
	}, this.yY = function(eJ) {
		return Number(this.data[eJ].value)
	}, this.yZ = function(eJ) {
		return String(this.data[eJ].value)
	}
}

function yR() {
	var yb = [];

	function ye(ue) {
		yb.unshift(ue), bm.qy.qz(161, yb.join(";"))
	}

	function f6(ue) {
		for (var yg = yb, fa = yg.length, aC = 0; aC < fa; aC++)
			if (yg[aC] === ue) return yg.splice(aC, 1), bm.qy.qz(161, yg.join(";")), 1
	}
	this.dk = function() {
		var sB = bm.buffer.data[161].value;
		sB.length && (yb = sB.split(";"))
	}, this.get = function() {
		return yb
	}, this.yc = function() {
		return {
			oQ: yb,
			value: 0
		}
	}, this.x0 = function(ue) {
		return bD.sc.has(yb, ue)
	}, this.yd = function(ue) {
		return f6(ue) ? 0 : (ye(ue), 1)
	}, this.nL = function(ue) {
		f6(ue) && ye(ue)
	}, this.yf = function(eJ) {
		eJ < yb.length && (yb.splice(eJ, 1), bm.qy.qz(161, yb.join(";")))
	}
}

function yM() {
	this.yh = function(eJ, e4) {
		return Number(this.yi(eJ, e4))
	}, this.yi = function(eJ, e4) {
		var g2 = null;
		return 0 === a1.id ? a1.yj && (g2 = a1.yj.getItem((e4 ? "v" : "d") + eJ)) : 1 === a1.id ? g2 = a1.yk.loadString((e4 ? 1e3 : 2e3) + eJ) : 2 === a1.id && (g2 = a1.yl[(e4 ? "v" : "d") + eJ]), g2 && 0 !== g2.length ? g2 : null
	}, this.ym = function(fa, yn) {
		var h = [],
			yo = yn ? "e" : "l";
		if (0 === a1.id) {
			if (a1.yj)
				for (aC = 0; aC < fa; aC++) h.push(a1.yj.getItem(yo + aC))
		} else if (1 === a1.id)
			for (var yp = yn ? 5e3 : 3e3, aC = 0; aC < fa; aC++) h.push(a1.yk.loadString(yp + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fa; aC++) h.push(a1.yl[yo + aC]);
		return h
	}, this.save = function(eJ, value, e4) {
		var yq = (e4 ? "v" : "d") + eJ;
		if (0 === a1.id) {
			if (a1.yj && bm.buffer.data[140].value) try {
				a1.yj.setItem(yq, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.yk.saveString((e4 ? 1e3 : 2e3) + eJ, value) : 2 === a1.id && (a1.yl[yq] = value, a1.yr.postMessage(yq + " " + value))
	}, this.ys = function(h, yn) {
		var fa = h.length,
			yo = yn ? "e" : "l";
		if (0 === a1.id) {
			if (a1.yj && bm.buffer.data[140].value) try {
				for (aC = 0; aC < fa; aC++) a1.yj.setItem(yo + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var yp = yn ? 5e3 : 3e3, aC = 0; aC < fa; aC++) a1.yk.saveString(yp + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fa; aC++) a1.yl[yo + aC] = h[aC], a1.yr.postMessage(yo + aC + " " + h[aC])
	}
}

function yS() {
	this.dk = function() {
		! function() {
			var data = bm.buffer.data;
			0 === data[2].e4 && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].ya = 1);
			0 === data[100].e4 && (data[100].value = data[100].ya = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.buffer.data,
			fa = data.length;
		for (aC = 0; aC < fa; aC++) {
			var yv = bm.sl.yh(aC, !0);
			data[aC] && data[aC].e4 === yv && (null === (yv = bm.sl.yi(aC)) ? data[aC].value = data[aC].ya : 2 === data[aC].type ? data[aC].value = yv : (yv = Number(yv), isNaN(yv) ? data[aC].value = data[aC].ya : data[aC].value = yv))
		}
	}
}

function yP() {
	function z0(h) {
		if (0 === h.length) bm.qy.qz(116, "");
		else {
			for (var z3 = h[0], aC = 1; aC < h.length; aC++) z3 += ";" + h[aC];
			bm.qy.qz(116, z3)
		}
	}
	this.yx = function() {
		bm.buffer.data[110].value.length && (bm.buffer.data[106].value = bm.buffer.data[110].value, bm.qy.qz(110, ""), this.yy())
	}, this.yy = function() {
		var h = bm.buffer.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.buffer.data[106].value), h.unshift(bm.buffer.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var yz = [], aC = 0; aC < h.length; aC += 2) yz.push(h[aC]);
		z0(h), bm.buffer.data[117].value = 0, bm.buffer.data[117].oQ = yz
	}, this.z1 = function(eJ) {
		bm.buffer.data[117].oQ.splice(eJ, 1), bm.buffer.data[117].value = Math.min(eJ, bm.buffer.data[117].oQ.length - 1);
		var h = bm.buffer.data[116].value.split(";");
		h.splice(2 * eJ, 2), z0(h)
	}, this.z2 = function(eJ) {
		var h = bm.buffer.data[116].value.split(";");
		return h.length < 2 * (eJ + 1) ? null : {
			ue: h[2 * eJ],
			password: h[2 * eJ + 1]
		}
	}, this.z4 = function() {
		var g2 = bO.il(bm.buffer.data[121].value, -1, 262143);
		return g2 = -1 === g2 ? ~~(262144 * Math.random()) : g2
	}, this.yT = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var z5, sB = h[aC].trim();
			0 !== sB.length && (z5 = 0 <= (z5 = sB.indexOf("=")) ? sB.substring(0, z5) : sB, document.cookie = z5 + "=;expires=0;path=/", document.cookie = z5 + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = z5 +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function yO() {
	this.qz = function(eJ, value) {
		2 !== bm.buffer.data[eJ].type && (value = Math.floor(value)), bm.buffer.data[eJ].value !== value && (bm.buffer.yX(eJ, value), 0 === eJ ? (u.y(), bA.dk(), u.v(2)) : 1 === eJ ? i.dv(1) : 2 === eJ ? i.dv(0) : 5 === eJ && (bD.sU.z6(), i.dv(
			0)))
	}, this.z7 = function() {
		for (var data = bm.buffer.data, aC = 0; aC < 100; aC++) data[aC] && bm.buffer.yX(aC, data[aC].ya);
		bD.sU.z6(), i.dv(1)
	}, this.z8 = function() {
		for (var data = bm.buffer.data, aC = 0; aC < data.length; aC++) data[aC] && bm.buffer.qz(aC, data[aC].ya)
	}, this.z9 = function() {
		for (var fu = bm.buffer, aC = 128; aC < 135; aC++) fu.yX(aC, fu.data[aC].ya)
	}, this.zA = function(data) {
		bm.qy.qz(109, data.uf), bm.qy.qz(107, data.zB), bm.qy.qz(108, data.zC), bm.qy.qz(112, data.zD), bm.qy.qz(111, data.zE), bm.qy.qz(113, data.zF), bm.qy.qz(135, data.zG), bm.qy.qz(136, data.zH), bm.qy.qz(137, data.zI), bm.qy.qz(138, data
			.zJ), bm.qy.qz(139, data.zK), bm.qy.qz(141, data.zL), bm.qy.qz(142, data.zM), bm.qy.qz(143, data.zN), bm.qy.qz(144, data.zO)
	}
}

function c8() {
	this.f1 = new zP, this.zQ = new zR, this.zS = new zT, this.dk = function() {
		this.f1.dk()
	}
}

function zR() {
	this.zU = function(size) {
		for (var zV = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(zV.rc(16)));
		return h.join("")
	}, this.zW = function(sB) {
		return 20 < (sB = sB.trim()).length ? sB.substring(0, 20) : sB
	}
}

function zP() {
	var zX = new Uint8Array(78);
	this.dk = function() {
		var aC;
		for (zX[50] = 37, aC = 0; aC < 10; aC++) zX[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) zX[aC + 20] = aC + 11, zX[aC + 52] = aC + 38
	}, this.zY = function(sB) {
		return sB || (console.log("validateString error: " + sB), sB = ""), sB.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.zZ = function(sB, size) {
		if ((sB = this.zY(sB)).length > size) return sB.substring(0, size);
		for (; sB.length < size;) sB = "-" + sB;
		return sB
	}, this.za = function(sB) {
		for (var zb = zX, fa = sB.length, h = new Uint8Array(fa), aC = 0; aC < fa; aC++) h[aC] = zb[sB.charCodeAt(aC) - 45];
		return h
	}, this.zc = function(zd) {
		bG.a8(6 * zd.length), this.ze(zd), bK.dk(bG.aD)
	}, this.ze = function(zd) {
		for (var fa = zd.length, j = bG, aC = 0; aC < fa; aC++) j.a9(6, zd[aC])
	}, this.zf = function(sB) {
		this.ze(this.za(sB))
	}, this.zg = function(sB, size) {
		this.ze(this.za(this.zZ(sB, size)))
	}, this.f2 = function(sB, size) {
		for (var h = this.za(this.zZ(sB, size)), g2 = 0, oB = 1, aC = h.length - 1; 0 <= aC; aC--) g2 += oB * h[aC], oB *= 64;
		return g2
	}
}

function zh() {
	var j, k, zi;

	function a07(i3, fd, a05, zn, a00) {
		fd = a06(i3, fd + 1 + 2 * zn & 3);
		! function(i3, lZ) {
			return 1 < Math.abs(i3 % j - lZ % j) || 1 < Math.abs(a0A(i3) - a0A(lZ))
		}(i3, fd) && 0 === a00[fd << 2] && (a00[fd << 2] = a05)
	}

	function a0A(h8) {
		return Math.floor((h8 + .5) / j) % k
	}

	function a06(h8, fd) {
		return h8 + zi[fd]
	}
	this.zj = function(sB) {
		var aC, zk, fa, zl, zV = bK;
		for (bJ.f1.zc(bJ.f1.za(sB)), bV.wQ.zo[bV.fG].j = bV.fl = j = zV.rc(12), bV.wQ.zo[bV.fG].k = bV.fm = k = zV.rc(12), zi = [-j, -1, j, 1], bV.zx = document.createElement("canvas"), bV.zx.width = bV.fl, bV.zx.height = bV.fm, bV.zt = bV.zx
			.getContext("2d", {
				alpha: !1
			}), bV.zu = bV.zy = null, bV.zu = bV.zt.getImageData(0, 0, bV.fl, bV.fm), bV.zy = bV.zu.data, bD.sc.zz(bV.zy), fa = zV.rc(12), zk = zV.rc(5), zl = zq(j * k - 1), aC = 0; aC < fa; aC++) ! function(lr, h8, zm, zn) {
			var aC, fd, zV = bK,
				a00 = bV.zy,
				a01 = h8,
				a02 = h8,
				a03 = 0,
				a04 = 1 + zm,
				a05 = 2 - zm;
			for (a00[h8 << 2] = a04, aC = 0; aC < lr; aC++) fd = zV.rc(2), h8 = a06(h8, fd), a00[h8 << 2] === a04 ? a03 % 2 == 1 && a07(a02, a03 + 2 * zn + 3, a05, zn, a00) : a00[h8 << 2] = a04, a07(h8, fd, a05, zn, a00), a07(a02, fd, a05,
				zn, a00), a02 = h8, a03 = fd;
			a06(h8, 0) === a01 ? (a07(h8, 0, a05, zn, a00), a07(a01, 0, a05, zn, a00)) : a06(h8, 1) === a01 && (a07(h8, 0, a05, zn, a00), a07(a01, 2, a05, zn, a00));
			0 === lr && (a07(a01, 0, a05, zn, a00), a07(a01, 2, a05, zn, a00))
		}(zV.rc(zk), zV.rc(zl), 1 === zV.rc(1), 1 === zV.rc(1));
		var fh, fj, iT, a0B, a0C, a0D, a00 = bV.zy,
			a0E = !0,
			a0F = bV.wQ.zo[bV.fG].a0F,
			a0G = bV.wQ.zo[bV.fG].a0G;
		for (fj = 0; fj < k; fj++)
			for (a0B = !0, a0C = a0E, fh = a0D = 0; fh < j; fh++) iT = 4 * fj * j + 4 * fh, a0D <= fh && 0 < a00[iT] && (a0C = 2 === a00[iT], a0B) && (a0B = !1, a0C !== a0E) ? (a0E = a0C, a0D = fh + 1, fh = -1) : (a0C ? (a00[iT] = a0G[0], a00[1 +
				iT] = a0G[1], a00[2 + iT] = a0G[2]) : (a00[iT] = a0F[0], a00[1 + iT] = a0F[1], a00[2 + iT] = a0F[2]), a00[3 + iT] = 255);
		bV.zt.putImageData(bV.zu, 0, 0), bV.zv = !0, bV.zw.dk(), bi.ds = !0
	}
}

function zT() {
	this.zj = function(a0H) {
		for (var zV = bK, size = zV.rc(a0H), a0I = 7 + 9 * zV.rc(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(zV.rc(a0I)));
		return h.join("")
	}
}

function cD() {
	var u8, u9, a0J, a0K, a0L, a0M, a0N, a0O, a0P, a0Q;

	function a0S() {
		var a0V = aE.a0V;
		for (a0P = a0V; a0P < aE.fX; a0P++) a0R();
		for (a0P = aE.hz ? aE.kw : 0; a0P < a0V; a0P++) {
			if (!a0W()) {
				for (var fu = aE.a0a = a0P; fu < a0V; fu++) a0P = fu, a0R();
				return
			}
			a0Z(a0M + u8 * a0L + bO.g1(a0L, 2), a0N + u9 * a0L + bO.g1(a0L, 2))
		}
	}

	function a12(player) {
		for (var jU = ah.jU, jW = ah.jW, jV = ah.jV, jX = ah.jX, fj = jW[player]; fj <= jX[player]; fj++)
			for (var fh = jU[player]; fh <= jV[player]; fh++) {
				var fE = ad.a13(fh, fj);
				ad.hA(fE) && (ad.k7(fE) ? ad.h5(fE, player) : ad.a14(fE, player))
			}
	}

	function a11(h, uy, uz) {
		var eb = h[uy];
		h[uy] = h[uz], h[uz] = eb
	}

	function a0W() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (u8 = bO.g1(a0J * az.random(), az.value(100)), u9 = bO.g1(a0K * az.random(), az.value(100)), a19()) return 1;
			return
		}() || function() {
			var iy, j1, ft, a0Y, fu, a0X;
			for (iy = bO.g1(a0J * az.random(), az.value(100)), j1 = bO.g1(a0K * az.random(), az.value(100)), ft = 40; 1 <= ft; ft--)
				for (a0Y = a0K - ft; 0 <= a0Y; a0Y -= 40)
					for (u9 = (a0Y + j1) % a0K, fu = 40; 1 <= fu; fu--)
						for (a0X = a0J - fu; 0 <= a0X; a0X -= 40)
							if (u8 = (a0X + iy) % a0J, a19()) return 1;
			return
		}()
	}

	function a19() {
		for (var h8, a1B, gap = bO.g1(a0L - a0O, 2), a1C = a0N + u9 * a0L + gap, a1D = a0M + u8 * a0L + gap, a1A = a1C + a0O - 1; a1C <= a1A; a1A--)
			for (a1B = a1D + a0O - 1; a1D <= a1B; a1B--)
				if (h8 = ad.a13(a1B, a1A), !ad.fV(h8) || ad.k7(h8)) return;
		return 1
	}

	function a0Z(a0X, a0Y) {
		a0R(), a1E(a0X - 2, a0Y - 2)
	}

	function a0R() {
		ah.nY[a0P] = 0, ah.hO[a0P] = ah.a0z[a0P] = 0, ah.h2[a0P] = [], ah.hG[a0P] = [], ah.hH[a0P] = [], ah.fz[a0P] = [], ah.jU[a0P] = ah.jW[a0P] = ah.jV[a0P] = ah.jX[a0P] = 0
	}

	function a1E(a0X, a0Y) {
		var h8, aC, a1F, a1G;
		for (ah.nY[a0P] = 1, ah.jU[a0P] = a0X + 10, ah.jW[a0P] = a0Y + 10, ah.jX[a0P] = ah.jV[a0P] = 0, a1F = a0X; a1F < a0X + 4; a1F++)
			for (a1G = a0Y; a1G < a0Y + 4; a1G++)(a0X < a1F && a1F < a0X + 3 || a0Y < a1G && a1G < a0Y + 3) && (h8 = ad.a13(a1F, a1G), ad.fV(h8)) && (ah.jU[a0P] = Math.min(a1F, ah.jU[a0P]), ah.jV[a0P] = Math.max(a1F, ah.jV[a0P]), ah.jW[a0P] = Math
				.min(a1G, ah.jW[a0P]), ah.jX[a0P] = Math.max(a1G, ah.jX[a0P]), a0Q[ah.hO[a0P]] = h8, ah.hO[a0P]++, ad.a14(h8, a0P));
		for (ah.a0z[a0P] = ah.hO[a0P], aC = ah.hO[a0P] - 1; 0 <= aC; aC--) ad.a1H(a0Q[aC], a0P) ? (ad.h5(a0Q[aC], a0P), ah.hG[a0P].push(a0Q[aC])) : ad.a1I(a0Q[aC]) ? (ad.h5(a0Q[aC], a0P), ah.hH[a0P].push(a0Q[aC])) : ad.a1J(a0Q[aC]) && (ad.h5(a0Q[aC],
			a0P), ah.fz[a0P].push(a0Q[aC]))
	}
	this.dk = function() {
		if (a0Q = new Array(12), a0O = 6, a0L = 10, a0J = bO.g1(bV.fl, a0L), a0K = bO.g1(bV.fm, a0L), a0M = bO.g1(bV.fl - a0L * a0J, 2), a0N = bO.g1(bV.fm - a0L * a0K, 2), aE.hz)
			for (var aC = 0; aC < aE.kw; aC++) a0P = aC, a0R(), ah.nY[a0P] = 1;
		(0 === aE.data.spawningType ? a0S : 1 === aE.data.spawningType ? (a0S(), function() {
			var a0b = aE.a0c;
			aE.a0d || a0b++;
			if (!(a0b < 3)) {
				for (var data = aE.data, kC = (aE.hz ? aE.kw : 0) + data.teamPlayerCount[0], oH = aE.a0a, a0e = new Uint32Array(a0b), a0f = new Uint32Array(a0b), a0g = new Uint16Array(a0b), a0h = new Uint16Array(a0b), fY = bj.fY, jU = ah
						.jU, jW = ah.jW, jV = ah.jV, jX = ah.jX, gF = bR.gF, gG = bR.gG, aC = kC; aC < oH; aC++) gF[aC] = jU[aC] + jV[aC] >> 1, gG[aC] = jW[aC] + jX[aC] >> 1;
				for (aC = kC; aC < oH; aC++) {
					var id = fY[aC];
					a0e[id] += gF[aC], a0f[id] += gG[aC]
				}
				var lJ = bj.lJ;
				for (aC = 1; aC < a0b; aC++) {
					var h3 = Math.max(data.teamPlayerCount[lJ[aC]], 1);
					a0g[aC] = bO.g1(a0e[aC], h3), a0h[aC] = bO.g1(a0f[aC], h3)
				}
				var a0i = bj.a0i,
					a0j = bj.a0j,
					a0k = bj.a0k,
					gE = bR.gE;
				for (aC = 0; aC < 512; aC++) gE[aC] = aC;
				for (var eI = 0; eI < 2 + (4 <= a0b); eI++)
					for (aC = kC; aC < oH; aC++) {
						for (var i3 = aC, a0l = gE[i3], a0m = 1, fq = bO.a0n(gF[a0l] - a0g[1], gG[a0l] - a0h[1]), ft = 2; ft < a0b; ft++) {
							var a0o = bO.a0n(gF[a0l] - a0g[ft], gG[a0l] - a0h[ft]);
							a0o < fq && (fq = a0o, a0m = ft)
						}
						var a0p = fY[i3];
						if (a0m !== a0p) {
							if (2 === eI && 4 <= a0b) {
								var a0q = Math.max((a0m + 1) % a0b, 1),
									a0r = bO.a0n(gF[a0l] - a0g[a0q], gG[a0l] - a0h[a0q]);
								for (ft = 1; ft < a0b; ft++) a0o = bO.a0n(gF[a0l] - a0g[ft], gG[a0l] - a0h[ft]), fq < a0o && a0o < a0r && (a0r = a0o, a0q = ft);
								a0q !== a0p && bO.a0n(a0g[a0p] - a0g[a0q], a0h[a0p] - a0h[a0q]) < bO.a0n(a0g[a0p] - a0g[a0m], a0h[a0p] - a0h[a0m]) && (a0m = a0q)
							}
							var a0s = lJ[a0m],
								a0t = a0j[a0s] + (aE.hz ? 0 : a0k[a0s]),
								lZ = a0i[a0t],
								a0u = gE[lZ],
								a0v = a0j[a0s + 1];
							fq = bO.a0n(gF[a0u] - a0g[a0p], gG[a0u] - a0h[a0p]);
							for (var ek = a0t + 1; ek < a0v; ek++) {
								var a0w = a0i[ek],
									a0x = gE[a0w];
								(a0o = bO.a0n(gF[a0x] - a0g[a0p], gG[a0x] - a0h[a0p])) < fq && (fq = a0o, lZ = a0w)
							}
							lZ < kC || oH <= lZ || (a0u = gE[lZ], a0e[a0p] += gF[a0u] - gF[a0l], a0f[a0p] += gG[a0u] - gG[a0l], a0e[a0m] += gF[a0l] - gF[a0u], a0f[a0m] += gG[a0l] - gG[a0u], h3 = data.teamPlayerCount[lJ[a0p]], a0g[a0p] =
								bO.g1(a0e[a0p], h3), a0h[a0p] = bO.g1(a0f[a0p], h3), h3 = data.teamPlayerCount[a0s], a0g[a0m] = bO.g1(a0e[a0m], h3), a0h[a0m] = bO.g1(a0f[a0m], h3), gE[i3] = a0u, gE[lZ] = a0l)
						}
					}! function() {
						for (var gE = bR.gE, jU = ah.jU, jW = ah.jW, jV = ah.jV, jX = ah.jX, hO = ah.hO, a0z = ah.a0z, hG = ah.hG, hH = ah.hH, fz = ah.fz, aC = 0; aC < 512; aC++) {
							var a10 = gE[aC];
							if (a10 !== aC) {
								a11(jU, aC, a10), a11(jW, aC, a10), a11(jV, aC, a10), a11(jX, aC, a10), a11(hO, aC, a10), a11(a0z, aC, a10), a11(hG, aC, a10), a11(hH, aC, a10), a11(fz, aC, a10), a12(aC), a12(a10), gE[aC] = aC;
								for (var k = a10, h9 = gE[k]; h9 !== aC;) h9 = gE[k = h9];
								gE[k] = a10
							}
						}
					}()
			}
		}) : function() {
			var a0V = aE.a0V;
			for (a0P = a0V; a0P < aE.fX; a0P++) a0R();
			for (a0P = aE.hz ? aE.kw : 0; a0P < a0V; a0P++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							a0X = spawningData[2 * a0P] + 1,
							spawningData = spawningData[2 * a0P + 1] + 1;
						if (3 < a0X && a0X < bV.fl - 5 && 3 < spawningData && spawningData < bV.fm - 5 && ad.fV(ad.a13(a0X, spawningData)) && function(a0X, a0Y) {
								var h8, a1B, a1A;
								for (a1A = a0Y; a0Y - 6 < a1A; a1A--)
									for (a1B = a0X; a0X - 6 < a1B; a1B--)
										if (h8 = ad.a13(a1B, a1A), ad.k7(h8)) return;
								return 1
							}(a0X + 3, spawningData + 3)) return a0Z(a0X + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a0W()) {
						for (var fu = aE.a0a = a0P; fu < a0V; fu++) a0P = fu, a0R();
						return
					}
					var a0X = a0M + u8 * a0L + bO.g1(a0L, 2),
						a0Y = a0N + u9 * a0L + bO.g1(a0L, 2);
					a0Z(a0X, a0Y)
				}
		})(), bg.nU[7] = ah.hO[aE.fK]
	}, this.a1K = function(k5, a1L, a1M) {
		var aC, a0X, a0Y, h8, u8, u9;
		for (a0P = k5, aC = 0; aC < 20; aC++)
			for (a0X = a1L + aC; a1L - aC <= a0X; a0X--)
				for (a0Y = a1M + aC; a1M - aC <= a0Y; a0Y--)
					if ((a0X === a1L + aC || a0X === a1L - aC || a0Y === a1M + aC || a0Y === a1M - aC) && 3 < a0X && a0X < bV.fl - 5 && 3 < a0Y && a0Y < bV.fm - 5 && ad.fV(ad.a13(a0X, a0Y)) && function(a0X, a0Y) {
							var h8, a1B, a1A;
							for (a1A = a0Y; a0Y - 6 < a1A; a1A--)
								for (a1B = a0X; a0X - 6 < a1B; a1B--)
									if (h8 = ad.a13(a1B, a1A), ad.k7(h8) && !ad.a1S(a0P, h8)) return;
							return 1
						}(a0X + 3, a0Y + 3)) {
						if (0 < ah.hO[a0P]) {
							for (u9 = u8 = h8 = void 0, u8 = ah.jV[a0P]; u8 >= ah.jU[a0P]; u8--)
								for (u9 = ah.jX[a0P]; u9 >= ah.jW[a0P]; u9--) h8 = 4 * (u9 * bV.fl + u8), ad.a1P(a0P, h8) && (ad.a1Q(h8), ah.hO[a0P]--);
							a0R()
						}
						return a1E(a0X - 1, a0Y - 1), !0
					} return !1
	}, this.a1R = function(k5) {
		a0P = k5, a0W() ? a0Z(a0M + u8 * a0L + bO.g1(a0L, 2), a0N + u9 * a0L + bO.g1(a0L, 2)) : a0R()
	}
}

function a1T() {
	au.a1U(), y3.setTransform(ip, 0, 0, ip, 0, 0), y3.imageSmoothingEnabled = ip < 3, y3.drawImage(bV.zx, aT.a1V(), aT.a1W()), bS.a1X.y2(), y3.drawImage(a1Y, aT.a1V(), aT.a1W()), au.y2(), bQ.y2(), ag.y2(), (aE.o2 ? (bk.y2(), bF) : (aO.y2(), aW.y2(),
		aS.y2(), bF.y2(), ax.y2(), aX.y2(), aT.y2(), aR.y2(), bk.y2(), aV.y2(), aQ.y2(), aN.y2(), aM.y2(), aY.y2(), bh.y2(), aw)).y2(), u.y2()
}

function a1Z(oy, j, k) {
	oy.clearRect(0, 0, j, k), oy.fillStyle = bE.pP, oy.fillRect(0, 0, j, k)
}

function a1a(oy, j, k, a1b) {
	oy.fillStyle = bE.pS, oy.fillRect(0, 0, j, a1b), oy.fillRect(0, 0, a1b, k), oy.fillRect(j - a1b, 0, a1b, k), oy.fillRect(0, k - a1b, j, a1b)
}

function a1c(oy, fh, fj, iX, a1b, h8, a1d) {
	oy.fillStyle = bE.pS;
	var h8 = Math.floor(iX * h8),
		um = (h8 += (h8 - a1b) % 2, Math.floor((h8 - a1b) / 2)),
		iX = Math.floor((iX - h8) / 2);
	oy.fillRect(fh + iX, fj + iX + um, h8, a1b), a1d && oy.fillRect(fh + iX + um, fj + iX, a1b, h8)
}

function a1f() {
	this.dk = function() {
		8 === aE.lE && aO.a1g()
	}, this.a1h = function(a1i) {
		var elo = aE.data.elo,
			kB = (elo[a1i] - elo[1 - a1i]) / 10,
			kB = 8 / (1 + Math.pow(2, kB / 32)),
			kB = Math.floor(10 * kB + .5),
			a1k = elo[a1i] + kB,
			a1l = this.a1m(a1k),
			elo = this.a1m(elo[1 - a1i] - kB),
			kB = (0 === a1i ? aO.a1o(a1l, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.a1o(elo, a1l, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a1k * bO.sqrt(a1k) >> 8),
			elo = ((1 + aE.a1r) * kB / 100).toFixed(2);
		a1i !== aE.fK || aE.hk ? aO.a1s(640, L(31, [ah.a1t[a1i], elo]), 40, 0, bE.pS, bE.pP, -1, !1) : aO.a1s(640, L(30, [elo]), 40, 0, bE.pS, bE.pP, -1, !1)
	}, this.a1m = function(elo) {
		return 16e3 === (elo = bO.il(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cj() {
	this.td = new a1u, this.a00 = new a1v
}

function a1v() {
	this.iN = !1;
	this.a1z = [], this.a20 = 100;
	var nz, o0, gap, iX, a1w, a1y, a21 = 0,
		a22 = new Array(9),
		a23 = [],
		a24 = [],
		a25 = 0,
		a26 = 0,
		a27 = 0,
		a28 = 0;

	function a2K() {
		a22.sort(function(ft, fu) {
			return fu.l1 - ft.l1
		});
		for (var sB = "" + a22[0].rD, aC = 1; aC < 9; aC++) sB += "," + a22[aC].rD;
		for (aC = 0; aC < 9; aC++) sB += "," + a22[aC].l1;
		bm.buffer.yX(120, sB)
	}
	this.dk = function() {
		for (var a29 = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a29.length; aC++) {
			var color = 6 === a29[aC] ? bE.ps : bE.pQ;
			this.a1z.push(bD.canvas.a2A(ac.get(3), a29[aC], color))
		}
		for (aC = 0; aC < ak.td.a2B; aC++) a24.push(ak.td.a2C - ak.td.a2B + aC);
		for (aC = 0; aC < ak.td.a2D; aC++) a24.push(ak.td.a2E + aC);
		var a2F = ak.td.a2G(bN.a2F);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a2F.slice(), aC = 0; aC < a2F.length; aC++) a24.push(a2F[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a22[q] = {
						rD: isNaN(qcode) ? 1015 + q : qcode,
						l1: 0
					}
				} else {
					var aC, h = bm.buffer.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) a22[aC] = {
							rD: 1015 + aC,
							l1: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var g2 = parseInt(h[aC]),
								ek = (g2 = 0 <= g2 && g2 < ak.td.a2C ? g2 : 0, parseInt(h[aC + 9]));
							ek = 0 <= ek && ek < 1e3 ? ek : 0, a22[aC] = {
								rD: g2,
								l1: ek
							}
						}
				}
		}()
	}, this.show = function(mB, mC, a2L) {
		var aC;
		if (a25 = mB, a26 = mC, a21 = a2L || 0, this.iN = !0, a23 = [], 0 === a21)
			for (aC = 0; aC < 9; aC++) a23.push(a22[aC].rD);
		else {
			var fu = 49 * a21,
				a2L = fu - 49;
			for (a2L >= a24.length && (a21 = 1, a2L = 0, fu = 49), aC = a2L = (fu = Math.min(fu, a24.length)) - 49; aC < fu; aC++) a23.push(a24[aC])
		}
		a23.push(1024);
		a2L = a23.length, iX = Math.floor((a1.a2.im() ? .075 : .0468) * i.io), gap = Math.floor(iX / 3), (a27 = 10 * (a1w = iX + gap)) > i.j && (a27 = i.j, gap = (a1w = a27 / 10) - (iX = 3 * a1w / 4)), a1y = bO.g1(a2L, 10) + !!(a2L % 10), (a28 =
			a1y * a1w) > i.k && (a28 = i.k, gap = (a1w = a28 / a1y) - (iX = 3 * a1w / 4)), a2L = .5 * gap;
		nz = Math.min(Math.max(mB - .5 * a27 + a2L, a2L), i.j - a27 + a2L), o0 = Math.min(Math.max(mC - .5 * a28 + a2L, a2L), i.k - a28 + a2L)
	}, this.ho = function(mB, mC, player) {
		if (!this.iN) return !1;
		if (this.a2N(mB, mC)) {
			mB = bO.il(bO.g1(mB - nz + .5 * gap, a1w), 0, 9);
			if ((mB += 10 * bO.il(bO.g1(mC - o0 + .5 * gap, a1w), 0, 9)) >= a23.length) return aM.te(), !0;
			mC = a23[mB];
			if (1024 === mC) return this.show(a25, a26, a21 + 1), !0;
			! function(rD) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) a22[aC].l1 = Math.floor(.99 * a22[aC].l1);
					for (aC = 0; aC < 9; aC++)
						if (rD === a22[aC].rD) return a22[aC].l1 = Math.min(a22[aC].l1 + 30, 999), a2K();
					a22.splice(5, 0, {
						rD: rD,
						l1: Math.max(a22[4].l1, 30)
					}), a22.pop(), a2K()
				}
			}(mC), player === aE.fK ? bB.i1.rC(mC) : bB.gw.rR(mC, player)
		}
		return aM.te(), !0
	}, this.a2N = function(mB, mC) {
		return !(mB < nz - .5 * gap || mC < o0 - .5 * gap || nz + a27 - .5 * gap <= mB || o0 + a28 - .5 * gap <= mC)
	}, this.y2 = function() {
		y3.fillStyle = bE.pP, y3.fillRect(nz - .5 * gap, o0 - .5 * gap, a27, a28);
		for (var iT = .5 * bf.a2O, fa = (y3.lineWidth = bf.a2O, y3.strokeStyle = y3.fillStyle = bE.pS, y3.strokeRect(nz - .5 * gap + iT, o0 - .5 * gap + iT, a27 - 2 * iT, a28 - 2 * iT), y3.imageSmoothingEnabled = !0, a23.length), aC = 0; aC <
			fa; aC++) this.a2P(a23[aC], y3, nz + aC % 10 * a1w, o0 + bO.g1(aC, 10) * a1w, iX);
		y3.imageSmoothingEnabled = !1
	}, this.a2P = function(rD, ie, fh, fj, iX) {
		var fE;
		rD >= 1024 - ak.td.a2B ? (fE = iX / this.a20, ie.setTransform(fE, 0, 0, fE, fh, fj), ie.drawImage(this.a1z[rD - 1024 + ak.td.a2B], 0, 0), ie.setTransform(1, 0, 0, 1, 0, 0)) : (bD.sU.textAlign(ie, 1), bD.sU.textBaseline(ie, 1), ie.font =
			bD.sU.uE(0, .89 * iX), ie.fillText(ak.td.a2Q(rD), fh + .5 * iX, fj + (.35 - bD.sU.a2R + .56) * iX))
	}
}

function a1u() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a2B = 13, this.a2D = this.emojis.length, this.a2E = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a2E, this.a2C = 1024, this.a2S = this.emojis.indexOf(
		"💀"), this.a2T = this.a2S + 1, this.a2U = this.emojis.indexOf("🥇"), this.a2V = this.emojis.indexOf("😊"), this.a2Q = function(g2) {
		return g2 < this.a2E ? String.fromCharCode(55356, 56806 + bO.g1(g2, 26), 55356, 56806 + g2 % 26) : this.emojis[Math.min(g2 - this.a2E, this.a2D - 1)]
	}, this.a2G = function(sB) {
		for (var fa = sB.length - 2, h = [], aC = 0; aC < fa; aC++) {
			var a2W = sB.charCodeAt(aC) - 56806,
				a2X = sB.charCodeAt(aC + 2) - 56806;
			0 <= a2W && a2W < 26 && 0 <= a2X && a2X < 26 && (h.push(26 * a2W + a2X), aC += 3)
		}
		return h
	}, this.a2Y = function(g2) {
		return g2 < this.a2E
	}, this.a2Z = function(g2) {
		return g2 >= 1024 - this.a2B
	}, this.a2a = function(g2) {
		return g2 >= this.a2E && g2 < this.a2E + this.a2T
	}
}

function c7() {
	this.f1 = new a2b, this.zQ = new a2c, this.zS = new a2d, this.dk = function() {
		this.f1.dk()
	}
}

function a2c() {
	this.zf = function(sB) {
		for (var fa = sB.length, j = bG, aC = 0; aC < fa; aC++) j.a9(16, sB.charCodeAt(aC))
	}
}

function a2b() {
	var a2e = new Uint8Array(64);
	this.dk = function() {
		var aC;
		for (a2e[0] = 45, a2e[37] = 95, aC = 0; aC < 10; aC++) a2e[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a2e[aC + 11] = 65 + aC, a2e[aC + 38] = 97 + aC
	}, this.uj = function(a2f) {
		for (var zV = bK, zd = new Uint8Array(a2f), aC = 0; aC < a2f; aC++) zd[aC] = zV.rc(6);
		return zd
	}, this.ui = function(zd) {
		for (var fa = zd.length, a2g = a2e, h = [], aC = 0; aC < fa; aC++) h.push(String.fromCharCode(a2g[zd[aC]]));
		return h.join("")
	}, this.a2h = function(value, a2i) {
		for (var a2g = a2e, h = [], aC = 0; aC < a2i; aC++) h.push(String.fromCharCode(a2g[value >> 6 * (a2i - 1 - aC) & 63]));
		return h.join("")
	}
}

function cF() {
	var a2j, a2k, a2l;
	a2j = [32, 65, 191, 913, 931], a2k = [64, 127, 688, 930, 1155], a2l = new Array(a2j.length + 1);
	for (var aC = 0; aC < a2l.length; aC++) {
		a2l[aC] = 0;
		for (var ft = aC - 1; 0 <= ft; ft--) a2l[aC] += a2k[ft] - a2j[ft]
	}

	function a2r(ek) {
		for (var aC = a2j.length - 1; 0 <= aC; aC--)
			if (ek >= a2j[aC] && ek < a2k[aC]) return aC;
		return -1
	}
	this.zW = function(sB) {
		return 0 !== (sB = sB.trim()).indexOf("Bot ") && 0 !== sB.indexOf("[Bot] ") && function(sB, a2o, a2p) {
			var fa = (sB = sB.trim()).length;
			if (fa < a2o || a2p < fa) return !1;
			for (var ek, a2q = 0, aC = 0; aC < fa; aC++)
				if (ek = sB.charCodeAt(aC), a2q += 65 <= ek && ek <= 90 || 1040 <= ek && ek <= 1071 ? 1 : 0, -1 === a2r(ek)) return !1;
			if (3 < a2q && a2q > Math.floor(fa / 2)) return !1;
			return !0
		}(sB, 3, 20)
	}, this.a2s = function(sB) {
		for (var fa = (sB = sB.trim()).length, h = [], aC = 0; aC < fa; aC++) {
			var ek, h8 = a2r(ek = sB.charCodeAt(aC));
			h.push(a2l[h8] + ek - a2j[h8])
		}
		return h
	}, this.zj = function(h) {
		for (var ek, fu, sB = "", fa = h.length, aC = 0; aC < fa; aC++)
			for (fu = 1; fu < a2l.length; fu++)
				if (h[aC] < a2l[fu]) {
					ek = a2j[fu - 1] + h[aC] - a2l[fu - 1], sB += String.fromCharCode(ek);
					break
				} return sB
	}, this.a2t = function(sB) {
		for (var h = this.a2s(sB), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a2u = function(sB) {
		for (var h = new Array(Math.floor(sB.length / 3)), aC = 0; aC < sB.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(sB.substring(aC, aC + 3));
		return this.zj(h)
	}, this.a2v = function(sB) {
		for (var g2, h = [sB.length], aC = 0; aC < sB.length; aC++) h[aC] = sB.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < sB.length; aC++) aC === sB.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (g2 = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(g2 + (g2 < 26 ? 65 : 71)), aC++);
		return result
	}, this.a2w = function(sB) {
		for (var ek, result = "", aC = 0; aC < sB.length; aC++) 48 <= (ek = sB.charCodeAt(aC)) && ek < 58 ? result += String.fromCharCode(ek) : 65 <= ek && ek < 75 ? result += "0" + (ek - 65).toString() : 75 <= ek && ek < 91 ? result += (ek - 65)
			.toString() : 97 <= ek && ek < 123 && (result += (ek - 71).toString());
		return result
	}, this.a2x = function(sB) {
		for (var fa = sB.length, h = [], aC = 0; aC < fa; aC++)(ek = sB.charCodeAt(aC)) < 58 ? h.push(sB[aC]) : (ek -= ek < 91 ? 65 : 71, h.push(String(bO.g1(ek, 10))), h.push(String(ek - 10 * bO.g1(ek, 10))));
		var fa = h.length - 2,
			ek = 0,
			zd = [];
		for (aC = 0; aC < fa; aC += 3) zd[ek++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return zd
	}, this.a2y = function() {
		for (var eI, a2z = "", aC = 0; aC < 6; aC++) eI = 48 + az.random() % 36, eI += 58 <= eI ? 39 : 0, a2z += String.fromCharCode(eI);
		return a2z
	}
}

function a2d() {
	this.a2s = function(sB, a0H, a30) {
		for (var a31 = [], fa = sB.length, max = 0, aC = 0; aC < fa; aC++) {
			var g2 = sB.charCodeAt(aC);
			a31.push(g2), max = Math.max(max, g2)
		}
		var a0I = max < 128 ? 7 : 16;
		for (a30.a9(a0H, fa), a30.a9(1, +(16 == a0I)), aC = 0; aC < fa; aC++) a30.a9(a0I, a31[aC])
	}
}

function dG() {
	this.a32 = new a33, this.result = new a34, this.a35 = new a36, this.n9 = new a37, this.a38 = new a39, this.a3A = new a3B, this.dk = function() {
		this.result.dk()
	}
}

function a36() {
	this.a3C = function() {
		for (var fa = am.lS, w9 = am.lX, a3D = [], aC = 0; aC < fa; aC++) {
			var h8 = w9[aC];
			bD.gw.a3E(h8) && a3D.push(h8)
		}
		return a3D
	}, this.a3F = function() {
		if (0 === bj.lJ[aE.a3G]) return this.a3H();
		bk.kx(aE.a3G);
		for (var a3D = [], fa = bR.g5[0], gE = bR.gE, aC = 0; aC < fa; aC++) {
			var h8 = gE[aC];
			bD.gw.a3E(h8) && a3D.push(h8)
		}
		return a3D
	}, this.a3H = function() {
		var h8 = mX[0];
		return bD.gw.a3E(h8) ? [h8] : []
	}, this.a3I = function(a3D) {
		for (var fa = a3D.length, eb = 0, hO = ah.hO, aC = 0; aC < fa; aC++) eb += hO[a3D[aC]];
		return eb
	}
}

function a33() {
	function a3K() {
		if (2 === aE.a3O) return 1;
		ax.a3P(), aE.a3O = 2, aE.a3Q = aE.a3R
	}

	function a3M() {
		bU.a38.a3S(), aY.show(1 === aE.a3T, !1, 2 === aE.a3T), bU.result.a3S(), bU.a3A.ef(), bU.n9.ef(), bU.n9.a3U(), aO.a3V(!0), aO.a3W(247), aO.a3W(956), aO.a3W(957), aW.nK(!0), aX.nK(!0), ax.nK(), bF.a3X(), aE.hj && bi.a3Y.a3Z(), bi.ds = !0, be
			.a3a(), a1.a2.setState(0)
	}
	this.a3J = function() {
		a3K() || (aE.a3L = 2, a3M())
	}, this.a3N = function() {
		a3K() || (aE.a3L = 1, a3M())
	}
}

function a37() {
	var a3b = 0;
	this.ef = function() {
		var a3j;
		2 === aE.a3L ? (aO.a3c(0, 59), aI.o8(2700)) : aE.lE < 7 ? (a3j = bj.lJ[aE.a3G], a3j = bj.a3l[a3j], aR.a3m(L(32, [a3j]), 2, 1, 12), aO.a1s(0, L(33, [a3j]), 40, 0, bE.pS, bE.pP, -1, !1), aI.o8(2700)) : 8 === aE.lE ? (aE.hk ? aO.a3c(aE.a3h,
			3) : aE.a3T ? aO.a3c(aE.a3h, 2) : aO.a3c(1 - aE.fK, 3), aE.a3i.a1h(aE.a3h), aI.nu(aE.a3h, 2700, !1, 0)) : 9 === aE.lE ? (aO.a3n(), aI.o8(2700)) : (aO.a3o(aE.a3h), aI.nu(aE.a3h, 2700, !1, 0))
	}, this.a3U = function() {
		var sB;
		a3b = 0, aE.hj || aE.lG || (sB = b1.z.a3p(), aE.lE < 7 ? sB += "/log/team" : 8 === aE.lE ? sB += "/log/1v1" : 9 === aE.lE ? sB += "/log/zombies" : sB += "/log/br", aO.a1s(720, sB, 736, 0, bE.pS, bE.pq, -1, !1), 0 <= aE.a3q && (a3b = 54))
	}, this.nA = function() {
		var id, sB;
		0 !== a3b && 0 === --a3b && (id = bI.f1.a2h(aE.a3q, 6), sB = L(34, ["territorial.io/log/?r=" + id]), aO.a1s(1071, sB, 737, 0, bE.pS, bE.pq, -1, !1, void 0, {
			a3s: b1.z.a3p() + "/log/?r=" + id
		}))
	}
}

function a3B() {
	function a42() {
		var v2;
		return 8 === aE.lE ? 0 : (v2 = Math.floor(ah.a43[aE.fK] / 50), (v2 = Math.min(v2, 200)) / 100)
	}

	function a3u() {
		var v2 = a42();
		0 === v2 || aE.hk || aO.a1s(440, L(35, [v2.toFixed(2)]), 40, 0, bE.pk, bE.pP, -1, !1)
	}
	this.ef = function() {
		var a3v;
		0 === bU.result.a3t || 0 === bU.result.a3D.length || 8 === aE.lE ? bD.gw.hn(aE.fK) && a3u() : (function(a3v) {
			7 !== aE.lE && 10 !== aE.lE && 9 !== aE.lE || 0 !== aE.a3T && a3v && (9 === aE.lE ? aO.a1s(600, L(39, [100 * (1 + aE.a1r)]), 40, 0, bE.pS, bE.pP, -1, !1) : aO.a1s(600, L(39, [a3v.toFixed(2)]), 40, 0, bE.pS, bE.pP, -1, !1))
		}(a3v = function() {
			aO.a1s(520, L(36), 40, 0, bE.pS, bE.pP, -1, !1);
			for (var a3D = bU.result.a3D, fa = a3D.length, hO = ah.hO, h = [], aC = 0; aC < fa; aC++) {
				var h8 = a3D[aC];
				h.push({
					h8: h8,
					eb: hO[h8]
				})
			}
			h.sort((ft, fu) => fu.eb - ft.eb);
			var a3l = ah.a1t,
				eb = bU.result.a44,
				v2 = bU.result.a3t,
				sB = "",
				a3v = 0;
			for (aC = 0; aC < fa; aC++) {
				var iL = h[aC].eb * v2 / (100 * eb),
					a46 = a3l[h[aC].h8] + ": " + iL.toFixed(2) + "   ";
				h[aC].h8 !== aE.fK || aE.hk || (a3v = iL, 9 === aE.lE && 0 !== aC && (a3v = 0)), 2 < aC && 4 !== fa ? 3 === aC && (sB += "(" + L(37, [fa - 3]) + ")") : sB += a46
			}
			aO.a1s(560, bD.tR.a47(sB), 40, 0, bE.pk, bE.pP, -1, !1), a3v ? aO.a1s(580, L(38, [a3v.toFixed(2) + " + " + a42().toFixed(2)]), 40, 0, bE.pk, bE.pP, -1, !1) : bD.gw.hn(aE.fK) && a3u();
			return a3v
		}()), 2 === aE.a3L || 7 <= aE.lE || function(a3v) {
			var a3D = bU.result.a3D,
				fa = a3D.length,
				a48 = ah.a48,
				hO = ah.hO,
				a49 = [];
			loop: for (var aC = 0; aC < fa; aC++) {
				var h8 = a3D[aC],
					a4A = bD.tR.a4B(a48[h8]);
				if (null !== a4A) {
					for (var a4C = hO[h8], fu = a49.length - 1; 0 <= fu; fu--)
						if (a4A === a49[fu].name) {
							a49[fu].eb += a4C, a49[fu].h.push({
								h8: h8,
								eb: a4C
							});
							continue loop
						} a49.push({
						name: a4A,
						eb: a4C,
						h: [{
							h8: h8,
							eb: a4C
						}]
					})
				}
			}
			if (0 !== a49.length) {
				a49.sort((ft, fu) => fu.eb - ft.eb);
				var h = a49[0].h,
					a4D = (h.sort((ft, fu) => fu.eb - ft.eb), "[" + a49[0].name + "]"),
					a4E = 512 * bU.result.a3t / 26214400,
					lr = (aO.a1s(0, L(40, [a4D, a4E.toFixed(4)]), 40, 0, bE.pS, bE.pP, -1, !1), h.length),
					zb = a49[0].eb,
					a4F = 1e4 * a4E;
				for (aC = 0; aC < lr; aC++)
					if (h[aC].h8 === aE.fK && !aE.hk) {
						aO.a1s(600, L(41, [(a4F * h[aC].eb / (10 * zb)).toFixed(2)]), 40, 0, bE.pS, bE.pP, -1, !1), aO.a1s(640, L(42, [(.2 * a3v).toFixed(2), a4D]), 40, 0, bE.pS, bE.pP, -1, !1);
						break
					}
			}
		}(a3v))
	}, this.a3z = function() {
		var a40, a01;
		aE.lG || (a40 = ah, a01 = aE.fK, 0 === a40.a41[a01]) || a40.k0[a01] < 1 || 2 * a40.rt[a01] > 3 * (a40.jz[a01] + a40.k0[a01]) || a3u()
	}
}

function a34() {
	this.dk = function() {
		this.a4G = 0, this.a3D = [], this.a44 = 0, this.a3t = 0
	}, this.a3S = function() {
		var tz;
		aE.lG || (tz = this, 2 === aE.a3L ? tz.a3D = bU.a35.a3C() : aE.iV ? tz.a3D = bU.a35.a3F() : tz.a3D = bU.a35.a3H(), tz.a4G = bl.a4I.a4J(), tz.a44 = Math.max(1, bU.a35.a3I(tz.a3D)), bB.gw.ra(), 8 === aE.lE ? bU.result.a3t = 0 : tz.a3t =
			100 * bU.result.a4G * (1 + aE.a1r))
	}
}

function a39() {
	this.a3S = function() {
		if (2 === aE.a3L) aE.a3T = 2;
		else {
			if (8 === aE.lE) bD.gw.kJ(0) || 0 === ah.nY[0] ? aE.a3h = 1 : bD.gw.kJ(1) || 0 === ah.nY[1] ? aE.a3h = 0 : aE.a3h = +(ah.hO[1] > ah.hO[0]);
			else {
				if (aE.iV) {
					var lU = bk.a4M();
					if (aE.a3G = lU, bj.lJ[lU]) return void(aE.a3T = +(bj.fY[aE.fK] === lU))
				}
				aE.a3h = mX[0]
			}
			aE.a3T = +(aE.a3h === aE.fK)
		}
	}
}

function dL() {
	this.id = 0, this.e4 = 0, this.yj = null, this.yk = null, this.yl = null, this.yr = null, this.a2 = new a4N, this.dk = function() {
		var self, e4;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (e4 = Android.getVersion()) < 12 || (self.e4 = e4, self.id = 1, self.yk = Android),
			function(self) {
				var e4;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.yl = mwIOSdataX, self.yr = window.webkit.messageHandlers.iosCommandA, e4 = self
					.yl.version, self.e4 = e4 ? Number(e4) : 0)
			}(this),
			function(self) {
				var yj;
				try {
					if (!(yj = window.localStorage)) return;
					yj.setItem("tls7", "1"), yj.removeItem("tls7")
				} catch (error) {
					return
				}
				self.yj = yj
			}(this)
	}
}

function a4N() {
	this.a4R = function() {
		bm.qy.z7(), bm.qy.z8(), b1.z.close(0, 3255), 0 === a1.id ? a1.yj && a1.yj.clear() : 1 === a1.id ? a1.yk.saveString(199, "") : 2 === a1.id && a1.yr.postMessage("clear")
	}, this.a4S = function() {
		2 === a1.id ? a1.yr.postMessage("showConsentForm") : 1 === a1.id && a1.yk.setState(7)
	}, this.a4T = function() {
		this.setState(14)
	}, this.im = function() {
		return 1 === bm.buffer.yY(2)
	}, this.a4U = function() {
		bm.buffer.yX(102, "")
	}, this.setState = function(a4V) {
		1 === a1.id && 5 <= a1.e4 && a1.yk.setState(a4V)
	}, this.a3 = function() {
		var a4W;
		1 === a1.id && 7 <= a1.e4 ? a1.yk.setState(5) : 2 === a1.id ? a1.yr.postMessage("reload 0") : ((a4W = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a4W.toString())
	}, this.eW = function() {
		0 !== a1.id && (1 === a1.id ? a1.yk.prepareAd("8646194357") : 2 === a1.id && (0 === a1.e4 ? a1.yr.postMessage("prepare ad 2904813909") : a1.yr.postMessage("loadAds 2904813909")))
	}, this.ec = function(eb) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.e4 && (a1.yk.presentAd(eb), !0) : 2 === a1.id && 0 !== a1.e4 && (a1.yr.postMessage("showAd"), !0))
	}, this.du = function() {
		2 === a1.id && a1.e4 < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a4X + "' target='_blank'>" + bN
			.a4X + "</a>", !0, [new x("⬅️ " + L(43), function() {
				u.v(0)
			}, bE.q9)]))
	}
}

function da() {
	function a4Z(e) {
		mG(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(43), function() {
				u.a4a()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.pp)]))
	}

	function a4m(e) {
		mG(e), u.v(4, 5, new w(L(44), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a4h(e), !0))
	}

	function a4h(e) {
		var sB = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + sB : 4527 === e ? "Player already in lobby" + sB : 4577 === e ? "Your IP is banned." + sB : 4530 === e ? "Lobby Timeout" + sB : 4528 === e ?
			"Lobby Kick: Another login detected." + sB : 4540 === e ? "You have been kicked." + sB : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + sB : 4555 === e ? "This Account is blocked." + sB :
			4580 === e ? "More Gold needed" + sB : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + sB : 4591 === e ? "The algo determined you are a bot." + sB : "Unknown error" + sB
	}

	function mG(e) {
		a4c(e), u.z.a0()
	}

	function a4c(e) {
		4540 === e && b1.z.a4o(e);
		var a4V = ab.a4b();
		bw.close(), 6 === a4V ? b1.z.a4o(e) : bq.f7 ? (u.y(), bq.x8(), b1.z.close(b1.z.f8, 3256)) : 8 === a4V && aE.a4p(!0)
	}
	this.q = [], this.a4Y = function(oR, e) {
		if (1 === oR && __fx.customLobby.isActive() && 6 !== ab.a4b() && __fx.customLobby.setActive(!1), console.log("socket close index " + oR + " error " + e), this.q.push(e), 4321 === e && (data = bm.z.z2(0)) && (console.log("Reset to: " +
				data.ue), bm.qy.qz(105, data.ue), bm.qy.qz(106, data.password)), 8 === u.ug && 0 === oR)
			if (4211 === e) a4Z(e);
			else {
				if (bq.f7 && (4495 === e || 4480 === e) && b1.z.f8 !== oR) return void u.a4a();
				if (8 !== ab.a4b() && a4c(), 4480 === e) return bm.qy.z9(), void u.v(4, 0, new w(L(46), L(47), !0));
				var data = 0;
				u.a4f() && 10 === u.a4f().a4g && (data = u.a4f().a4g), u.v(4, data, new w(L(44), a4h(e), !0))
			}
		else {
			data = ab.a4b();
			if (6 === data) {
				if (4211 === e) return void a4Z(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a4i(oR)
			} else if (bq.f7) {
				if (oR !== b1.z.f8) return
			} else {
				if (8 === data) return void(oR !== b1.z.a4j || aE.lG || 1 !== aE.a3O || aE.hj || aO.a4k(L(45, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}(4591 === e ? function(e) {
				mG(e), u.v(4, 5, new w("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new x("⬅️ " + L(43), function() {
					u.a4a()
				}), new x("🔄 Reload", function() {
					a1.a2.a3()
				}, bE.pp)]))
			} : a4m)(e)
		}
	}, this.a4n = function(e) {
		this.q.push(e), 8 === ab.a4b() ? aE.lG || 1 !== aE.a3O || aO.a4k(L(45, [e])) : a4m(e)
	}, this.t = function() {
		this.q.push(3268), mG(3268)
	}
}

function dA() {
	var a4q, a4r, a4s = -15e3,
		a4t = !1;

	function ho(e) {
		a5D() || (a4t = !0, a5E(e, 1), b1.z.a5F(b1.z.a4j), a5G(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a52(e) {
		a4s = bi.ea, a5E(e, 1), b1.z.a5F(b1.z.a4j), 0 < e.touches.length && (a4q = Math.floor(i.l * e.touches[0].clientX), a4r = Math.floor(i.l * e.touches[0].clientY), av.a52(e) || a5G(a4q, a4r))
	}

	function a5G(fh, fj) {
		u.ho(fh, fj), 0 === aE.a3O ? ab.ho(fh, fj) : bF.a5H(fh, fj) || bh.ho(fh, fj) || aY.ho(fh, fj) || aM.a5I(fh, fj) || aQ.ho(fh, fj) || 0 <= aN.ho(fh, fj) || ax.ho(fh, fj) || bM.a5J(fh, fj) || aM.a5K(fh, fj)
	}

	function a4y(e) {
		a5D() || (a4t = !0, a5E(e, 1), a5L(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a53(e) {
		a4s = bi.ea, a5E(e, 1), 0 < e.touches.length && (a4q = Math.floor(i.l * e.touches[0].clientX), a4r = Math.floor(i.l * e.touches[0].clientY), av.a53(e) || a5L(a4q, a4r))
	}

	function a5L(fh, fj) {
		bM.sw() || (bM.hf = fh, bM.hg = fj), u.a4y(fh, fj), 0 === aE.a3O ? ab.a4y(fh, fj) : (bW.hh(fh, fj), bh.a4y(fh, fj) || (aN.a4y(fh, fj), aM.iN() ? aM.a4y(fh, fj) : aS.hp ? aS.a4y(fh) && (bi.ds = !0) : (aW.a4y(fh, fj), aT.o4 && aT.a4y(fh, fj) &&
			(bi.ds = !0))))
	}

	function a50(e) {
		a5D() || (a5E(e, 1), a5M(), 0 === aE.a3O ? (ab.click(-1024, -1024), aU.reset()) : (aW.a5N(-1024, -1024), aN.a4y(-1024, -1024), aS.a5O(), aT.o4 = !1))
	}

	function a4z(e) {
		a5D() || (a5E(e, 1), a5P(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a4w && (bM.a4w = !1, e.preventDefault()))
	}

	function click(e) {
		a5D() || a5E(e, 1)
	}

	function a54(e) {
		a4s = bi.ea, a5E(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a3O ? aT.o4 = !1 : av.a5Q() || (a5P(a4q, a4r, !1), bM.a4w && (bM.a4w = !1, e.preventDefault()))
	}

	function a55(e) {
		a4s = bi.ea, a5E(e, 1), a5P(a4q, a4r, !1), bM.a4w && (bM.a4w = !1, e.preventDefault())
	}

	function a56(e) {}

	function a57(e) {}

	function a58(e) {
		a5D() || a5E(e, 0)
	}

	function a5P(fh, fj, a5R) {
		a5M(), 0 === aE.a3O ? ab.click(fh, fj) : (aW.a5N(fh, fj), bh.a5N(), aS.a5O(), aT.o4 = !1, aM.click(fh, fj, a5R) ? bi.ds = !0 : aN.a4z(fh, fj))
	}

	function a5M() {
		u.a5M()
	}

	function a51(e) {
		var fh, fj, deltaY;
		a5D() || (a5E(e, 1), b1.z.a5F(b1.z.a4j), fh = Math.floor(i.l * e.clientX), fj = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a51(fh, fj, deltaY), 0 === aE.a3O ? ab.a51(fh, fj, deltaY) : aW.a51(fh, fj,
			deltaY) || (aS.a5S(fh, fj) ? aS.a51(deltaY) && (bi.ds = !0) : aT.a51(fh, fj, deltaY)))
	}

	function a59(e) {
		a5E(e, 0)
	}

	function a5E(e, id) {
		0 === id && u.iN() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a4b() && e.preventDefault()
	}

	function a5A(e) {
		if (__fx.keybindHandler(e.key)) return;
		a5D() || 0 < i.uM || (e = e.code) && e.length && (ba.ek(e, 18) ? at.a5U(3) : ba.ek(e, 22) ? at.a5U(0) : ba.ek(e, 20) ? at.a5U(1) : ba.ek(e, 24) ? at.a5U(2) : ba.ek(e, 10) ? aS.a5V(31 / 32) : ba.ek(e, 8) ? aS.a5V(32 / 31) : ba.ek(e, 6) ? aS
			.a5V(7 / 8) : ba.ek(e, 4) ? aS.a5V(8 / 7) : ba.ek(e, 14) ? 0 !== aE.a3O && aT.a51(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.ek(e, 16) ? 0 !== aE.a3O && aT.a51(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.ek(e, 0) ?
			aE.a3O && bW.hi(0) : ba.ek(e, 2) ? aE.a3O && bW.hi(1) : ba.ek(e, 30) ? aE.a3O && bW.hi(2) : ba.ek(e, 26) ? aE.a3O && bW.iH() : ba.ek(e, 28) && aE.a3O && bW.iM())
	}

	function a5B(e) {
		if (!a5D() && !(0 < i.uM || bi.ea < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a5W(1) || "Space" === code && u.a5W(0))) return bq.f7 ? bq.xE.a5W(code) ? void 0 : void("Escape" === code && bM.g3()) : void(8 !== ab.a4b() && ab.a5W(e) ? bi.ds = !0 : "Escape" === code ?
				bM.g3() : ba.ek(code, 18) ? at.a5X(3) : ba.ek(code, 22) ? at.a5X(0) : ba.ek(code, 20) ? at.a5X(1) : ba.ek(code, 24) ? at.a5X(2) : ba.ek(code, 12) ? bF.a5Y(!aE.o2) : "Space" === code && aE.a3O && (aN.hl && aN.a5Z(), aE.hj) &&
				bF.a5a(!1))
		}
	}

	function a5C() {
		"hidden" !== document.visibilityState && (bi.ds = !0)
	}

	function a5D() {
		return a4s + 15e3 > bi.ea
	}

	function resize() {
		i.a5c()
	}
	this.a4u = 0, this.a4v = "", this.a4w = !1, this.hf = 0, this.hg = 0, this.dk = function() {
		a4x.addEventListener("mousedown", ho, {
			passive: !1
		}), a4x.addEventListener("mousemove", a4y, {
			passive: !1
		}), a4x.addEventListener("mouseup", a4z, {
			passive: !1
		}), a4x.addEventListener("click", click, {
			passive: !1
		}), a4x.addEventListener("mouseleave", a50, {
			passive: !1
		}), a4x.addEventListener("wheel", a51, {
			passive: !1
		}), a4x.addEventListener("touchstart", a52, {
			passive: !1
		}), a4x.addEventListener("touchmove", a53, {
			passive: !1
		}), a4x.addEventListener("touchend", a54, {
			passive: !1
		}), a4x.addEventListener("touchcancel", a55, {
			passive: !1
		}), a4x.addEventListener("dragover", a56), a4x.addEventListener("drop", a57), a4x.addEventListener("dblclick", a58), document.addEventListener("contextmenu", a59), document.addEventListener("keydown", a5A), document.addEventListener(
			"keyup", a5B), document.addEventListener("visibilitychange", a5C), window.addEventListener("resize", resize)
	}, this.a5J = function(fh, fj) {
		return !!bF.ho(fh, fj) || !!(aW.ho(fh, fj) || aT.ho(fh, fj) || aS.ho(fh, fj) || aO.ho(fh, fj))
	}, this.a5b = a5D, this.sw = function() {
		return !a4t || 0 < a4s
	}, this.g3 = function() {
		if (!u.iN()) return 8 === ab.a4b() ? aE.o2 ? void bF.a5Y(!1) : bh.iN ? void bh.a5Z() : void aN.a5Z() : void(7 !== ab.a4b() && 6 === ab.a4b() && aa.a5d());
		u.a5W(2)
	}
}

function c3() {
	this.sU = new a5e, this.sc = new a5f, this.gw = new a5g, this.tR = new a5h, this.oy = new a5i, this.ov = new a5j, this.canvas = new a5k, this.color = new a5l, this.a5m = new a5n, this.dk = function() {
		this.sU.z6()
	}
}

function a5f() {
	this.zz = function(h) {
		h.fill(0)
	}, this.a5o = function(h) {
		for (var fa = h.length, aC = 0; aC < fa; aC++) h[aC] = []
	}, this.a5p = function(a2W, a5q) {
		for (var a2X = bR.gA, aC = 0; aC < 3; aC++) a2X[aC] = a5q * a2W[aC];
		return a2X
	}, this.a5r = function(a2W, a2X, a5s) {
		for (var kB = 0, aC = 0; aC < 3; aC++) kB += Math.abs(a2W[aC] - a2X[aC]);
		return a5s <= kB
	}, this.a5t = function(a2W, a5u) {
		for (var aC = 0; aC < 3; aC++) a2W[aC] = bO.il(a2W[aC] + a5u, 0, 255);
		return a2W
	}, this.a5v = function(h, uy, uz) {
		uz = uz || h.length - 1;
		for (var a5w = 0, aC = uy = uy || 0; aC <= uz; aC++) a5w += h[aC];
		return a5w
	}, this.a5x = function(h, a5y) {
		for (var aC, a5z, fa = h.length, a60 = [], ft = fa - 1; 0 <= ft; ft--) {
			for (aC = a5z = 0; aC < fa; aC++) a5y(h[aC]) < a5y(h[a5z]) && (a5z = aC);
			fa--, a60.push(h[a5z]), h[a5z] = h[fa], h.pop()
		}
		return a60
	}, this.min = function(h) {
		var aC, g2, fa = h.length;
		if (0 === fa) return 0;
		for (g2 = h[0], aC = 1; aC < fa; aC++) g2 = Math.min(g2, h[aC]);
		return g2
	}, this.max = function(h) {
		var fa = h.length;
		if (0 === fa) return 0;
		for (var g2 = h[0], aC = 1; aC < fa; aC++) g2 = Math.max(g2, h[aC]);
		return g2
	}, this.a61 = function(h, g2) {
		for (var fa = h.length, h3 = 0, aC = 0; aC < fa; aC++) h3 += h[aC] > g2;
		return h3
	}, this.a62 = function(a63, a64, min) {
		for (var fa = a64[0], aC = fa - 1; 0 <= aC; aC--) a63[aC] < min && (a63[aC] = a63[--fa]);
		a64[0] = fa
	}, this.a65 = function(h, fa, value) {
		for (var aC = 0; aC < fa; aC++) h[aC] -= value
	}, this.a66 = function(h) {
		for (var fa = h.length, aC = 0; aC < fa; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a67 = function(sB, h, a68) {
		h.fill(0);
		for (var v2 = sB.split(","), fa = Math.min(v2.length, h.length), aC = 0; aC < fa; aC++) h[aC] = Math.min(parseInt(v2[aC]), a68)
	}, this.a69 = function(sB, h, maxLength) {
		h.fill("");
		for (var v2 = sB.split('"'), fa = Math.min(v2.length, 2 * h.length), iT = 0, aC = 1; aC < fa; aC += 2) h[iT++] = v2[aC].slice(0, maxLength)
	}, this.a6A = function(h, h3) {
		if (0 === h3) h.fill(0);
		else {
			var a5w = this.a5v(h),
				fa = h.length;
			if (0 === a5w) h.fill(bO.g1(h3, fa));
			else
				for (var aC = 0; aC < fa; aC++) h[aC] = bO.g1(h3 * h[aC], a5w);
			if (0 === (a5w = this.a5v(h))) h[1] = h3;
			else
				for (var iT = 0; a5w++ < h3;) h[iT = (iT + 1) % fa] && h[iT]++
		}
	}, this.a6B = function(h) {
		if (!h) return 0;
		var fa = h.length;
		if (0 === fa) return 0;
		for (var g2 = h[fa - 1], aC = fa - 2; 0 <= aC; aC--)
			if (h[aC] !== g2) return aC + 2;
		return 1
	}, this.a6C = function(h) {
		for (var a5w = 0, aC = 0; aC < h.length; aC++) a5w += h[aC].length;
		return a5w
	}, this.a6D = function(a6E) {
		for (var h = [], aC = 0; aC < a6E.length; aC++) h = h.concat(a6E[aC]);
		return h
	}, this.has = function(h, g2) {
		for (var fa = h.length, aC = 0; aC < fa; aC++)
			if (h[aC] === g2) return !0;
		return !1
	}
}

function a5k() {
	this.a2A = function(a6F, eJ, a6G) {
		var iX = a6F.height,
			a6H = bD.sU.zp(iX, iX),
			ie = bD.sU.getContext(a6H);
		return function(j, ie, a6G) {
			ie.fillStyle = a6G, ie.beginPath(), ie.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), ie.fill()
		}(iX, ie, a6G), ie.drawImage(a6F, -eJ * iX, 0), a6H
	}, this.a6J = function(a6K) {
		var ie, ia, iX = a6K.height;
		return a6K.width === iX && (ia = (ie = bD.sU.getContext(a6K, !0)).getImageData(0, 0, iX, iX), bD.ov.a6L(ia.data, iX, iX, .9), ie.putImageData(ia, 0, 0)), a6K
	}
}

function a5l() {
	this.a6M = function(g2) {
		return [g2 >> 12 & 63, g2 >> 6 & 63, 63 & g2]
	}, this.a6N = function(g2) {
		for (var h = this.a6M(g2), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a6O = function(g2) {
		g2 = this.a6N(g2);
		return bD.color.pK(g2[0], g2[1], g2[2])
	}, this.a6P = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.pK = function(eI, v2, fu) {
		return "rgb(" + eI + "," + v2 + "," + fu + ")"
	}, this.pM = function(eI, v2, fu, ft) {
		return "rgba(" + eI + "," + v2 + "," + fu + "," + ft.toFixed(3) + ")"
	}, this.sy = function(ek) {
		for (var h = ek.split("(")[1].split(","), g9 = bR.g9, aC = 0; aC < 3; aC++) g9[aC] = parseInt(h[aC]);
		return 4 === h.length ? g9[3] = 255 * parseFloat(h[3].slice(0, -1)) : g9[3] = 255, g9
	}, this.sz = function(a6Q, fd) {
		for (var h = a6Q.slice(a6Q.indexOf("(") + 1, a6Q.indexOf(")")).split(","), g9 = bR.g9, aC = 0; aC < 3; aC++) g9[aC] = bO.il(parseInt(h[aC].trim(), 10) + fd, 0, 255);
		return 3 === h.length ? this.pK(g9[0], g9[1], g9[2]) : (a6Q = parseFloat(h[3].trim()), this.pM(g9[0], g9[1], g9[2], a6Q = 0 === a6Q ? .3 : a6Q))
	}, this.xi = function(a6R, a6S) {
		for (var kB = 0, aC = 0; aC < 3; aC++) kB += Math.abs(a6S[aC] - a6R[aC]);
		if (!(240 <= kB))
			for (aC = 0; aC < 3; aC++) a6S[aC] = a6R[aC] + (a6R[aC] < 128 ? 80 : -80)
	}, this.a6T = function(h) {
		for (var sB = "#", aC = 0; aC < 3; aC++) {
			var eI = h[aC].toString(16);
			sB += 1 === eI.length ? "0" + eI : eI
		}
		return sB
	}, this.a6U = function(sB) {
		var eI, v2;
		return sB.length < 7 ? bE.pJ : (eI = parseInt(sB.slice(1, 3), 16), v2 = parseInt(sB.slice(3, 5), 16), sB = parseInt(sB.slice(5, 7), 16), this.pK(eI, v2, sB))
	}
}

function a5i() {
	this.a6V = function(sB, font, maxWidth) {
		if (font && (y3.font = font), y3.measureText(sB).width <= maxWidth) return sB;
		for (var aC = sB.length - 1; 1 <= aC; aC--)
			if (sB = sB.substring(0, aC), y3.measureText(sB + "...").width <= maxWidth) return sB + "...";
		return "..."
	}
}

function a5n() {
	var a6X = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a6Y = function(ea) {
		var a6a, sB = new Date(ea.getTime() - 6e4 * ea.getTimezoneOffset()).toUTCString();
		return sB.length < 12 || (sB = sB.substring(5, sB.length), 0 === (ea = ea.getTimezoneOffset())) ? sB : (a6a = (ea < 0 ? "+" : "-") + bO.g1(Math.abs(ea), 60), 0 == (ea = Math.abs(ea) % 60) ? sB + a6a : sB + a6a + ":" + (ea < 10 ? "0" :
			"") + ea)
	}, this.a6b = function(ea) {
		var sB = ea.toUTCString();
		return sB.length < 12 ? sB : function(ea) {
			return a6X[ea.getUTCDay()]
		}(ea) + ", " + sB.substring(5, sB.length - 4)
	}
}

function a5e() {
	var a6d = null,
		a6m = (this.a2R = 0, this.z6 = function() {
			var g2 = bm.buffer.data[5].value;
			a6d = "px " + g2, "system-ui" !== g2 && (a6d += ", system-ui"), this.a2R = iW(32, 32, ["a", "b", "m"], 200, a6d)
		}, this.zp = function(j, k) {
			var ek = document.createElement("canvas");
			return ek.width = j, ek.height = k, ek
		}, this.getContext = function(canvas, alpha) {
			return canvas.getContext("2d", {
				alpha: alpha
			})
		}, this.getImageData = function(oy, j, k) {
			return oy.getImageData(0, 0, j, k)
		}, this.uE = function(type, size) {
			return size = size.toFixed(2), 0 === type ? size + a6d : 1 === type ? "bold " + size + a6d : 2 === type ? "lighter " + size + a6d : 3 === type ? "italic " + size + a6d : 4 === type ? "oblique " + size + a6d : 5 === type ?
				"small-caps " + size + a6d : "small-caps bold " + size + a6d
		}, this.textAlign = function(ie, id) {
			ie.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
		}, this.textBaseline = function(ie, id) {
			ie.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
		}, this.se = function(e, code, color) {
			e.classList.toggle("fx-line", !color), e.classList.toggle("fx-box", !code || 5 === code);
			color = this.sd(bf.uG) + " solid " + (color || bE.pS);
			5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
		}, this.v4 = function(e, fh, fj, j, k) {
			e = e.style;
			e.left = this.v5(fh), e.top = this.v5(fj), e.width = this.v5(j), e.height = this.v5(k)
		}, this.sV = function(g2) {
			return 1 + g2 * a1.a2.im()
		}, this.tg = function(oB, h9) {
			return oB * this.sV(void 0 === h9 ? .5 : h9) * i.io / i.l
		}, this.v3 = function(oB, h9) {
			return oB * this.sV(void 0 === h9 ? .5 : h9) * i.io
		}, this.uk = function(oB, h9, a6e) {
			return this.sV(h9) * Math.min(oB * i.io, a6e * i.j) / i.l
		}, this.sd = function(g2) {
			return g2.toFixed(1) + "px"
		}, this.v5 = function(g2) {
			return this.xU(g2).toFixed(1) + "px"
		}, this.xU = function(g2) {
			return g2 / i.l
		}, this.a6g = function(a6h) {
			for (var sB = "<ul>", fa = a6h.length, aC = 0; aC < fa; aC++) sB += "<li>" + a6h[aC][0] + ": <a href='" + a6h[aC][1] + "' target='_blank'>" + a6h[aC][0] + "</a></li>";
			return sB += "</ul>"
		}, this.a6i = function(a6j) {
			return "<a href='" + a6j + "' target='_blank'>" + a6j + "</a>"
		}, this.a6k = function(e) {
			navigator.clipboard && navigator.clipboard.writeText(e.value)
		}, this.xg = function(e) {
			var eb = e.textContent;
			bD.tR.a6l(eb, "✔") || (1 === eb.length ? e.textContent = "✔" : e.textContent = eb + " ✔", setTimeout(function() {
				e.textContent = eb
			}, 500))
		}, this.measureText = function(sB) {
			return y3.measureText(sB).width
		}, this.uu = function(on) {
			on.style.overflowX = "auto", on.style.overflowY = "hidden", on.style.whiteSpace = "nowrap", on.addEventListener("wheel", function(e) {
				Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.v7 = this.scrollLeft, e.preventDefault())
			}), on.addEventListener("scroll", function() {
				this.v7 = this.scrollLeft
			})
		}, -1e4);

	function a6q(a6o) {
		performance.now() - a6m < 600 || (a6m = performance.now(), a6o())
	}
	this.vj = function(e, a6n, a6o) {
		a6n && (e.onclick = function() {
			performance.now() - a6m < 600 || a6n()
		}), e.addEventListener("contextmenu", function(a6p) {
			a6p.preventDefault(), a6q(a6o)
		}), e.addEventListener("touchstart", function(a6p) {
			2 === a6p.touches.length && (a6p.preventDefault(), a6q(a6o))
		}, {
			passive: !1
		})
	}
}

function a5g() {
	this.hm = function(a4V) {
		return 0 === a4V ? 1 === aE.a3O && aE.hz : 1 === a4V ? 1 === aE.a3O && !aE.hz : 2 === aE.a3O
	}, this.hn = function(player) {
		return 0 !== ah.nY[player] && 2 !== ah.a6r[player]
	}, this.a6s = function(player) {
		return player === aE.fK && 2 !== ah.a6r[player]
	}, this.la = function(player, k5) {
		return player !== k5 && (0 === bj.fY[player] || bj.fY[player] !== bj.fY[k5])
	}, this.mh = function() {
		return am.lS < 2 ? 0 : aE.iV ? 1 < bk.a6t() : ah.hO[mX[1]]
	}, this.a6u = function() {
		var lS = am.lS;
		if (0 !== lS) {
			if (!aE.iV) return !this.kJ(mX[0]);
			for (var fY = bj.fY, lU = bk.lV(), lX = am.lX, aC = lS - 1; 0 <= aC; aC--) {
				var h8 = lX[aC];
				if (fY[h8] === lU && !this.kJ(h8)) return 1
			}
		}
		return 0
	}, this.a6v = function(player) {
		return player === aE.fK
	}, this.a6w = function(k5, oB) {
		return ah.hc[aE.fK] < oB * ah.hc[k5]
	}, this.kJ = function(player) {
		return player >= aE.kw || 2 === ah.a6r[player]
	}, this.lu = function(player) {
		return 0 !== ah.nY[player]
	}, this.a3E = function(player) {
		return player < aE.kw
	}, this.rr = function(a6x, a6y) {
		return a6x !== a6y
	}, this.gz = function(player, g2) {
		var min;
		return g2 = this.a6z(player, g2), ah.hc[player] += g2, ah.a70[player] && (min = Math.min(ah.a70[player], ah.hc[player]), ah.a70[player] -= min, ah.hc[player] -= min), g2
	}, this.a6z = function(player, g2) {
		var a71 = ah.hc[player];
		return g2 = Math.min(g2, ah.hO[player] * aE.a72 - a71), g2 = Math.min(g2, aE.a73 - a71), Math.max(g2, 0)
	}, this.n4 = function(player, jE, a74, a75) {
		var a71 = ah.hc[player],
			jE = bO.g1(a71 * (jE + 1), 1024),
			a74 = bO.g1(a74 * a71, 1024),
			jE = Math.min(jE, a71 - a74);
		return jE = b5.a77(player, jE), bR.g7[0] = jE, bR.g7[1] = a74, a75 <= jE
	}, this.rL = function(player, r3, r2) {
		var player = ah.hc[player],
			a76 = bO.g1(64 * player, 1024);
		return r3 = Math.min(r3, player - a76), r3 = this.a6z(r2, r3), bR.g7[0] = r3, bR.g7[1] = a76, 1 <= r3
	}, this.a78 = function(player, r3, r2) {
		var player = ah.hc[player],
			a76 = bO.g1(64 * player, 1024);
		return r3 = Math.min(r3, player - a76), this.a6z(r2, r3)
	}, this.rN = function(r3, r2) {
		return r3 = this.a6z(r2, r3), bR.g7[0] = r3, bR.g7[1] = 0, 1 <= r3
	}, this.jD = function(player, a79) {
		return bO.g1(ah.hc[player] * (a79 + 1), 1024)
	}, this.a7A = function(player, a74) {
		a74 = bO.g1(a74 * ah.hc[player], 1024);
		bR.g7[1] = a74, ah.hc[player] -= a74
	}, this.gx = function(player, a7B) {
		var gL, gN, fu = ah.hc[player];
		return a7B <= fu ? ah.hc[player] -= a7B : (ah.hc[player] = 0, gN = ah.a70[player] + (gL = 5 * ((fu = a7B - fu) >> 2)), bg.h0(player, gL - fu, 12), gN <= aE.a7C ? ah.a70[player] = gN : (ah.a70[player] = aE.a7C, bg.h0(player, gN - aE.a7C,
			18))), a7B
	}, this.m8 = function(player, jE) {
		var hc = ah.hc,
			a71 = hc[player],
			jE = bO.g1(a71 * (jE + 1), 1024),
			a76 = Math.max(bO.g1(a71, 10), 1e3);
		return (jE = Math.min(jE, a71 - a76)) < 0 ? (hc[player] = 0, a76 = Math.min(1e3, a71 + aE.a7C - ah.a70[player]), bR.g7[1] = a76, ah.a70[player] += a76 - a71, 0) : (bR.g7[1] = a76, jE = b5.a77(player, jE), hc[player] -= a76 + jE, b5.a7D(
			player, jE), jE)
	}, this.n6 = function(player) {
		var iK = bR.g7[0];
		ah.hc[player] -= iK + bR.g7[1], b5.a7D(player, iK)
	}, this.rs = function(player, k5) {
		return (k5 = Math.min(k5, aE.fX)) < aE.fX && 0 === ah.nY[k5] && (k5 = aE.fX), (bR.fW[0] = k5) === aE.fX || bv.fT(player, k5)
	}, this.rv = function(player, r2) {
		return 0 !== ah.nY[r2] && !bv.fT(player, r2)
	}, this.a7E = function(player, a7F) {
		for (var h8, fa = am.lS, a7G = 0, a7H = mX, aC = 0; aC < fa; aC++)
			if (h8 = a7H[aC], !this.kJ(h8)) {
				if (player === h8) return !0;
				if (++a7G > a7F) return !1
			} return !1
	}, this.mT = function(h8) {
		var a7I = aE.iV ? bk.lT() : ah.hO[mX[0]];
		return a7I >= bO.g1(h8 * aE.kg, 100)
	}, this.a7J = function(g2, min, max) {
		return Math.floor(bO.il(isNaN(g2) ? 0 : Number(g2), min, max))
	}
}

function a5j() {
	this.a7K = function(canvas, a7L, a7M) {
		var j = canvas.width,
			k = canvas.height,
			ek = bD.sU.zp(j, k),
			ie = bD.sU.getContext(ek, !0),
			canvas = (ie.drawImage(canvas, 0, 0), ie.getImageData(0, 0, j, k));
		return a7L(canvas.data, j, k, a7M), ie.putImageData(canvas, 0, 0), ek
	}, this.a7N = function(a00, j, k) {
		for (var fh = j - 1; 0 <= fh; fh--)
			for (var fj = k - 1; 0 <= fj; fj--) {
				var aC = 4 * (fh + fj * j);
				a00[3 + aC] = a00[aC], a00[aC] = a00[1 + aC] = a00[2 + aC] = 255
			}
	}, this.a7O = function(a00, j, k) {
		for (var fh = j - 1; 0 <= fh; fh--)
			for (var fj = k - 1; 0 <= fj; fj--) {
				var aC = 4 * (fh + fj * j);
				a00[1 + aC] > a00[2 + aC] + 10 && (a00[3 + aC] = a00[aC], a00[1 + aC] = a00[2 + aC])
			}
	}, this.a7P = function(a00, j, k) {
		for (var fh = j - 1; 0 <= fh; fh--)
			for (var fj = k - 1; 0 <= fj; fj--) {
				var ft, g2, aC = 4 * (fh + fj * j);
				a00[1 + aC] > a00[2 + aC] + 10 && (g2 = 0 < (ft = 255 - a00[1 + aC] + a00[2 + aC]) ? Math.min(255, Math.round(255 * a00[2 + aC] / ft)) : 0, a00[aC] = a00[1 + aC] = a00[2 + aC] = g2, a00[3 + aC] = ft)
			}
	}, this.a7Q = function(a00, j, k, a7M) {
		for (var gap = Math.floor(Math.min(j, k) * a7M), fh = 0; fh < j; fh++)
			for (var aC, fj = 0; fj < k; fj++)(fh < gap || fj < gap || j - gap <= fh || k - gap <= fj) && (a00[3 + (aC = 4 * (fh + fj * j))] = 255 - 255 * (a00[1 + aC] - a00[aC]) / (255 - a00[aC]))
	}, this.a7R = function(a00, j, k, a7M) {
		for (var fh = j - 1; 0 <= fh; fh--)
			for (var fj = k - 1; 0 <= fj; fj--) {
				var aC = 4 * (fh + fj * j);
				a00[aC] = a7M[0], a00[1 + aC] = a7M[1], a00[2 + aC] = a7M[2]
			}
	}, this.a7S = function(a00, j, k, a7M) {
		for (var gap = Math.floor(j * a7M), fh = 0; fh < j; fh++)
			for (var aC, fj = 0; fj < k; fj++)(fh < gap || fj < gap || j - gap <= fh || k - gap <= fj) && (a00[aC = 4 * (fh + fj * j)] = a00[1 + aC] = a00[2 + aC] = 0)
	}, this.a7T = function(a00, j, k) {
		for (var fj, aC, fh = j - 1; 0 <= fh; fh--)
			for (fj = k - 1; 0 <= fj; fj--) 200 < a00[1 + (aC = 4 * (fh + fj * j))] && a00[1 + aC] - 20 > a00[aC] && a00[1 + aC] - 20 > a00[2 + aC] ? a00[aC] + a00[2 + aC] < 40 ? a00[3 + aC] = 0 : (a00[3 + aC] = a00[aC], a00[aC] = 255, a00[1 +
				aC] = 255, a00[2 + aC] = 255) : a00[aC] < 50 && a00[1 + aC] < 50 && a00[2 + aC] < 50 && (a00[aC] + a00[1 + aC] + a00[2 + aC] < 50 ? a00[3 + aC] = 180 : a00[3 + aC] = 180 + Math.floor(75 * (a00[aC] + a00[1 + aC] + a00[2 + aC] -
				50) / 100))
	}, this.a7U = function(a00, j, k) {
		for (var fj, aC, fh = j - 1; 0 <= fh; fh--)
			for (fj = k - 1; 0 <= fj; fj--) a00[1 + (aC = 4 * (fh + fj * j))] > a00[aC] + 20 && a00[1 + aC] > a00[2 + aC] + 20 && a00[aC] + a00[2] < 40 && (a00[3 + aC] = 255 - a00[1 + aC], a00[aC] = a00[1 + aC] = a00[2 + aC] = a00[aC])
	}, this.a6L = function(a00, j, k, a7M) {
		for (var eI = j >> 1, fh = 0; fh < j; fh++)
			for (var fj = 0; fj < k; fj++) Math.sqrt((fh - eI) * (fh - eI) + (fj - eI) * (fj - eI)) > a7M * eI && (a00[4 * (fh + fj * j) + 3] = 0)
	}
}

function a5h() {
	var a7V = {
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
		a7W = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.tS = function(em) {
		return em.replace(a7W, function(match) {
			return a7V[match] || match
		})
	}, this.a2h = function(g2) {
		var aC, a7X, a7Y, a7Z, a7a;
		if (g2 < 0) return "-" + this.a2h(Math.abs(g2));
		if (g2 < 1e3) return g2.toString();
		for (a7X = Math.floor(Math.log(g2 + .5) / Math.log(10)) + 1, a7Y = Math.floor((a7X - 1) / 3), a7a = (a7Z = g2.toString()).substring(a7X - 3, a7X), aC = 1; aC < a7Y; aC++) a7a = a7Z.substring(a7X - 3 * (aC + 1), a7X - 3 * aC) + " " + a7a;
		return a7Z.substring(0, a7X - 3 * a7Y) + " " + a7a
	}, this.a7b = function(h8, a7X) {
		return h8.toFixed(a7X) + "%"
	}, this.a7c = function(g2, a7d) {
		return g2.toFixed(bO.il(Math.floor((void 0 === a7d ? 3 : a7d) - Math.log10(Math.max(g2, 1))), 0, 8))
	}, this.a7e = function(g2, oB, a7X) {
		return (g2 * oB).toFixed(a7X)
	}, this.a4B = function(username) {
		var fe, fP = username.indexOf("[");
		return !(fP < 0) && 1 < (fe = username.indexOf("]")) - fP && fe - fP <= 8 ? username.substring(fP + 1, fe).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a4B;
	this.a7f = function(sB) {
		for (var ft = Math.floor(.5 * sB.length + .5), oH = Math.floor(.5 * (ft - 1)), aC = 0; aC < oH; aC++)
			for (var fu = -1; fu < 2; fu += 2) {
				var ek = ft + fu * aC;
				if (" " === sB[ek]) return [this.a47(sB.substring(0, ek)), this.a7g(sB.substring(ek))]
			}
		return [sB.substring(0, ft), sB.substring(ft)]
	}, this.a7g = function(sB) {
		for (var fa = sB.length, aC = 0; aC < fa; aC++)
			if (" " !== sB[aC]) return sB.substring(aC);
		return sB
	}, this.a47 = function(sB) {
		for (var aC = sB.length - 1; 0 <= aC; aC--)
			if (" " !== sB[aC]) return sB.substring(0, aC + 1);
		return sB
	}, this.a7h = function(sB, a7i) {
		return sB.split("(")[0] + "(🧈 " + a7i.toFixed(2) + ")"
	}, this.startsWith = function(sB, a7j) {
		return sB.substring(0, a7j.length) === a7j
	}, this.a6l = function(sB, a7j) {
		var fa = sB.length;
		return sB.substring(fa - a7j.length, fa) === a7j
	}, this.a7k = function(h, a7l, a7m) {
		var sB = "",
			fa = h.length - 1;
		a7m = a7m || "";
		for (var aC = 0; aC < fa; aC++) sB += a7m + h[aC] + a7m + ",", (aC + 1) % a7l == 0 && (sB += "\n");
		return sB += a7m + h[fa] + a7m
	}, this.a7n = function(sB, a2W, a2X) {
		return sB.replace(new RegExp(a2W, "g"), a2X)
	}
}

function a7o() {
	this.ej = function(player, fM) {
		aJ.a1K(player, bP.fi(fM), bP.fk(fM)) && (bi.ds = !0), aE.lG && this.ef()
	}, this.ef = function() {
		aE.hz = !1;
		for (var aC = 0; aC < aE.kw; aC++) 0 !== ah.nY[aC] && 0 === ah.hO[aC] && aJ.a1R(aC);
		0 !== ah.nY[aE.fK] ? (bg.nU[7] = ah.hO[aE.fK], bg.nU[8] = ah.hc[aE.fK], aS.a7p(), aX.a7q(), aE.hj || aE.hk || aI.nt(ah.jU[aE.fK] - 5, ah.jW[aE.fK] - 5, ah.jV[aE.fK] + 5, ah.jX[aE.fK] + 5), aw.dk()) : aY.show(!1, !1, !1, !0), aO.a7r(18),
			ag.a7s(), ag.nK(!0), bS.z.a7t(), aM.te(), aE.rq = null, be.a7u = !0, be.a7v(), aE.lG && a1.a2.setState(1)
	}
}

function c5() {
	this.fX = 512, this.a73 = 15e8, this.a7w = 1e9, this.a7C = 5e4, this.a7x = 512, this.gu = 2, this.fK = 0, this.kw = 0, this.a3R = 0, this.lI = 0, this.a3Q = 0, this.a0V = 512, this.a0a = 512, this.a72 = 150, this.lG = !0, this.hj = 0, this.hk =
		0, this.a3O = 0, this.kg = 0, this.o2 = !1, this.hz = 0, this.a7y = 0, this.iV = !1, this.a0c = 0, this.a0d = 0, this.lE = 0, this.a1r = 0, this.rq = null, this.a3i = new a1f, this.a7z = 30, this.a3L = 0, this.a3T = 0, this.a3h = 0, this
		.a3G = 0, this.data = new a80, this.a81 = new a82, this.a83 = 0, this.a84 = "", this.a3q = -1, this.a85 = function() {
			this.a3q = -1, bX.turnstile.close(), bR.dk(), bU.dk(), bt.clear(), this.a3R = this.kw = this.data.humanCount, this.lG = 1 === this.a3R && !__fx.customLobby.isActive(), this.o2 = !1, this.hj = this.data.isReplay, this.hk = this.data.a86,
				this.lE = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a1r = this.data.isContest, this.iV = this.lE < 7 || 9 === this.lE, this.lE = 10 === this.lE &&
				this.lG ? 7 : this.lE, this.lE = 8 === this.lE && 2 !== this.kw ? 7 : this.lE, b0.dk(), this.a0c = this.data.numberTeams, this.data.teamPlayerCount ? this.a0d = +(0 < this.data.teamPlayerCount[0]) : (this.a0d = 0, this.iV && this
					.lG && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.a0c + 1), aE.a81.a87())), this.a7z = this.kw <= 2 ? 30 : this.kw <= 50 ? 40 : 50, this.a7y = this.hz = __fx.customLobby.isActive() ?
				__fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.rq = this.hz ? new a7o : null, this.a0V = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this
				.kw) : 1 === m.dw ? this.a0V = this.kw : this.a0V = this.data.playerCount,
				this.a0a = this.a0V, this.lI = this.a0V - this.kw, this.a3Q = 0, this.fK = this.data.selectedPlayer, this.a3L = 0, this.a3T = 0, this.a3h = 0, this.a3G = 0, az.a88(this.data.spawningSeed), af.dk(), ah.dk(), ao.dk(), aj.a89(), bB.qs
				.re = [], bB.i1.qv = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.dk(), this.a3O = 1, bg.dk(), a8A(), ad.dl(), aq.a8B(), be.dk(), ad.dk(), au.dk(),
				bP.dk(), bQ.dk(), ap.dk(), bY.a8C(), aF.dk(), aj.a8(), aJ.dk(), aK.dk(), am.a8D(), bC.dk(), bk.dk(), bS.dk(), bh.dk(), a8E.putImageData(a8F, 0, 0), aW.dk(), aT.dk(), aS.dk(), bF.dk(), ax.dk(), aV.dk(), aX.dk(), aN.dk(), aR.dk(), aO
				.dk(), aQ.dk(), aM.dk(), aY.dk(), aG.dk(), aH.dk(), gd(), ae.dk(), ag.dk(), b5.dk(), b6.dk(), b2.dk(), b8.dk(), b9.dk(), this.a3i.dk(), bi.a8C(), aI.ns(), 0 === ah.nY[aE.fK] && aY.show(!1, !0), ag.nK(!0), aw.dk(), bi.ds = !0, this
				.hj || this.lG && this.hz || a1.a2.setState(1), this.a83 = 0
		}, this.a4p = function(eZ) {
			bC.ro.a8H.length ? this.a84 = bC.ro.a8H : this.a84 = bC.a8I.a2s(), __fx.replayHistory.save(this.a84), !1 === __fx.customLobby.isActive() && b1.z.a8J(), bt.clear(), this.a3O = 0, bi.a8K(), a1.a2.setState(0), ab.setState(0), __fx
				.customLobby.isActive() || bX.eR.show(eZ), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a83 ? u.z.a8L(0) : 1 === this.a83 ? u.v(19) : u.v(5, 5)
		}, this.a8M = function() {
			return this.hj ? aN.hl || !bF.a8N : this.lG && (aN.hl || this.hz)
		}, this.a8O = function() {
			return 1 === this.a3O && !this.hz
		}
}

function a80() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.a86 = 0, this.a8P = 0, this.elo = null, this.colorsType = 0, this
		.colorsPersonalized = 1, this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData =
		null, this.spawningType = 0, this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this
		.aIncomeData = null, this.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null,
		this.a8Q = null
}

function a82() {
	this.a87 = function() {
		var a8R = aE.data;
		bD.sc.a6A(a8R.teamPlayerCount, a8R.playerCount), a8R.numberTeams = bD.sc.a61(a8R.teamPlayerCount, 0), a8R.teamPlayerCount[0] && a8R.teamPlayerCount[7] && (a8R.teamPlayerCount[7] = 0, this.a87())
	}, this.a8S = function() {
		var a8R = aE.data;
		a8R.mapType < 2 ? bV.a8(bV.a8T(a8R), a8R.mapSeed) : bV.a8U(a8R.canvas)
	}, this.a8V = function() {
		var a8R = aE.data;
		a8R.colorsData || (a8R.colorsData = new Uint32Array(1)), 0 === a8R.gameMode && (a8R.colorsData[0] = bm.z.z4()), a8R.selectableName && (a8R.playerNamesData || (a8R.playerNamesData = new Array(1)), a8R.playerNamesData[0] = bm.buffer.data[
			122].value), a8R.a8Q = new Uint32Array(1), a8R.a8Q[0] = bJ.f1.f2(bm.buffer.data[105].value, 5)
	}, this.a8W = function() {
		aE.data = new a80
	}
}

function df() {
	var a8X = [];
	this.rO = function(player, r2, a8Y, a8Z) {
		player === aE.fK || r2 === aE.fK || !a8Z && bD.gw.kJ(player) || bD.gw.kJ(r2) || this.a1s(ah.a1t[player] + " supported " + ah.a1t[r2] + " with " + bD.tR.a2h(a8Y) + " ressource" + (1 === a8Y ? "." : "s."))
	}, this.a1s = function(sB, rD) {
		sB = {
			ea: aX.a8b(),
			sB: sB,
			rD: rD
		};
		a8X.push(sB), 30 === u.ug && u.a4f().a1s(sB)
	}, this.clear = function() {
		a8X = [];
		var v2 = u.a8c(30);
		v2 && v2.clear()
	}, this.a8d = function() {
		return a8X
	}
}

function dZ() {
	this.a2O = 0, this.gap = 0, this.uG = 0, this.sa = 0, this.dk = function() {
		this.resize()
	}, this.resize = function() {
		this.a2O = .0022 * bD.sU.sV(.5) * i.io, this.uG = this.a2O / i.l, this.gap = Math.max(Math.floor((a1.a2.im() ? .0114 : .01296) * i.io), 2), this.sa = this.gap / i.l
	}
}

function dY() {
	this.a8e = function() {
		return a1.a2.im() ? 2 : 1
	}
}

function cG() {
	var p2, fh, fj, a8f, a8g, a8h, ea, a8i, a8j, a8k, a8l, gap, zoom, rX, a8m;

	function a90(mB, mC, fE) {
		ad.fV(fE) || -1 === (mB = bQ.ll.a99(mB, mC)) ? aO.a98(fE) : aO.a9A(mB)
	}

	function a8w(a8i) {
		for (var aC = rX.length - 1; 0 <= aC; aC--)
			if (rX[aC] === a8i) return 1
	}

	function a8u(a8r) {
		var aC, fa;
		if (-1 !== a8r)
			for (fa = p2.length, aC = 0; aC < fa; aC++)
				if (p2[aC].iN && p2[aC].fh + 1 === a8r % 4 && p2[aC].fj + 1 === a8r >> 2) return aC;
		return -1
	}

	function a8s(mB, mC) {
		var v2 = gap / 2;
		return mB < fh - a8f - 3 * v2 || fh + 3 * a8f + 5 * v2 < mB || mC < fj - a8f - 3 * v2 || fj + 2 * a8f + 3 * v2 < mC ? -1 : 4 * (mC < fj - v2 ? 0 : mC < fj + a8f + v2 ? 1 : 2) + (mB < fh - v2 ? 0 : mB < fh + a8f + v2 ? 1 : mB < fh + 2 * a8f +
			3 * v2 ? 2 : 3)
	}
	this.a8n = function() {
		var aC, fu, a8q = [bE.ps, bE.q8, bE.pQ, bE.qZ, bE.qL];
		for (p2 = new Array(10), aC = 0; aC < 10; aC++) p2[aC] = {
			id: aC,
			iN: !1,
			lt: 0,
			canvas: [],
			fh: 0,
			fj: 0
		};
		for (p2[0].colors = [0, 1, 2, 3], p2[0].fh = 0, p2[0].fj = 0, p2[1].colors = [1, 4], p2[1].fh = 1, p2[1].fj = 0, p2[2].colors = [0, 1], p2[2].fh = -1, p2[2].fj = 0, p2[3].colors = [0], p2[3].fh = 0, p2[3].fj = 0, p2[4].colors = [0, 2],
			p2[4].fh = 1, p2[4].fj = 1, p2[5].colors = [3], p2[5].fh = 0, p2[5].fj = -1, p2[6].id = 20, p2[6].colors = [0], p2[6].fh = 1, p2[6].fj = -1, p2[7].id = 21, p2[7].colors = [0], p2[7].fh = 0, p2[7].fj = 1, p2[8].id = 16, p2[8]
			.colors = [0], p2[8].fh = 0, p2[8].fj = 0, p2[9].id = 10, p2[9].colors = [4], p2[9].fh = 2, p2[9].fj = 0, aC = 0; aC < 10; aC++)
			for (fu = 0; fu < p2[aC].colors.length; fu++) p2[aC].canvas.push(function(id, a6G) {
				if (id < 20) return bD.canvas.a2A(ac.get(3), id, a6G);
				var a6G = ac.get(3).height,
					a6H = bD.sU.zp(a6G, a6G),
					ie = bD.sU.getContext(a6H);
				20 === id ? ie.drawImage(ac.get(18), 0, 0) : 21 === id && ak.a00.a2P(ak.td.a2E + ak.td.a2V, ie, 0, 0, a6G);
				return a6H
			}(p2[aC].id, a8q[p2[aC].colors[fu]]))
	}, this.a8p = function() {
		return p2
	}, this.dk = function() {
		rX = [], fh = fj = ea = 0, a8g = a8h = -1e3, this.resize()
	}, this.resize = function() {
		a8f = Math.floor((a1.a2.im() ? .075 : .0468) * i.io), zoom = a8f / ac.get(3).height, gap = Math.floor(a8f / 3)
	}, this.a5I = function(mB, mC) {
		return !!this.iN() && (bi.ds = !0, !!ak.a00.ho(mB, mC, a8j) || (mB = function(mB, mC) {
			a8h = a8g = -1e3;
			var a8t = a8u(a8s(mB, mC));
			if (-1 === a8t) return 0;
			if (1 !== p2[a8t].colors[p2[a8t].lt])
				if (5 === a8t) {
					if (! function() {
							var eb = performance.now();
							a8m + 4e3 < eb && (rX = []);
							a8m = eb
						}(), a8w(a8i)) return 1;
					rX.push(a8i), 16 < rX.length && rX.shift()
				} else if (6 === a8t) {
				for (var aC = rX.length - 1; 0 <= aC; aC--) 0 === ah.nY[rX[aC]] && rX.splice(aC, 1);
				0 < rX.length && (b6.a8x(1, rX, !0) && bB.gw.rW(rX, a8i), rX = [])
			} else if (2 === a8t) ao.iF(a8i) && bB.i1.r1(aS.i5(), a8i);
			else if (3 === a8t) aE.hz && bB.i1.i2(a8k);
			else if (0 === a8t)
				if (0 === p2[0].lt) {
					if (aE.a7y && aX.a8b() < 350) return 1;
					bY.a8y(4), bB.i1.i8(aS.i5(), a8i)
				} else b2.i9(a8i, aS.i5());
			else if (1 === a8t) bB.i1.iD(aS.i5(), a8k);
			else if (9 === a8t) bB.i1.iG(aS.i5());
			else {
				if (7 === a8t) return bY.a8y(0), ak.a00.show(mB, mC), 2;
				if (4 === a8t) b6.a8x(0, [a8i], !0) && bB.gw.rT(a8i);
				else {
					if (8 !== a8t) return 0;
					bB.i1.i4(aS.i5(), a8l, a8i)
				}
			}
			return 1
		}(mB, mC), this.te(), 2 === mB && (ak.a00.iN = !0), 0 < mB))
	}, this.a5K = function(mB, mC) {
		this.iN() || (a8g = mB, a8h = mC, ea = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.hr(mouseX),
			coordY = bP.ht(mouseY),
			point = bP.fQ(bP.fx(coordX, coordY));
		bP.hu(coordX, coordY) && a90(mouseX, mouseY, point)
	}, this.click = function(mB, mC, a5R) {
		var hq = bP.hr(mB),
			hs = bP.ht(mC),
			fM = bP.fx(hq, hs),
			fE = bP.fQ(fM),
			a8z = (a1.a2.im() ? .025 : .0144) * i.io,
			eb = performance.now();
		return !(Math.abs(mB - a8g) > a8z || Math.abs(mC - a8h) > a8z || ea + 500 < eb || (ea = eb, bM.sw() && (bM.hf = mB, bM.hg = mC, b8.ef(1), b9.ef(1)), !bP.hu(hq, hs))) && (a5R ? (a90(mB, mC, fE), !1) : aN.hl || this.iN() || !bD.gw.hn(aE
			.fK) || aE.hj || aE.hk ? (this.te(), !1) : (aE.hz ? 0 <= (a8k = bu.i0(fM)) && (p2[3].iN = !0) : 2 === aE.a3O ? ad.hA(fE) && (a8i = ad.fS(fE), bD.gw.kJ(a8i) || (p2[0].iN = !0, p2[0].lt = 1, p2[7].iN = !0)) : (bQ.iE.iF(aE.fK, fM) &&
				(p2[0].iN = !0, p2[0].lt = 1, p2[1].iN = !0, p2[1].lt = 0, p2[9].iN = !0, p2[9].lt = 0), bQ.iB.iC(aE.fK, fM) && (p2[0].iN = !0, p2[0].lt = 1, p2[1].iN = !0, p2[1].lt = 1, a8k = bR.gC[7]), ad.ff(fE) ? (a8l = an.fB.fD(
				fE)) && (a8z = bP.fQ(a8l), p2[8].iN = !0, a8i = ad.fR(a8z) ? aE.fX : ad.fS(a8z)) : (ad.a1P(aE.fK, fE) && (a8j = aE.fK, p2[0].iN = !0, p2[0].lt = 1, p2[7].iN = !0), -1 !== (eb = bu.i6(fM)) && (ad.fR(eb << 2) ? (a8i = aE.fX,
					bv.i7(aE.fK) ? (p2[0].iN = !0, p2[0].lt = 0) : ae.gh(aE.fK) && (p2[0].iN = !0, p2[0].lt = 3)) : (a8i = ad.fS(eb << 2), p2[0].lt = 1, p2[5].iN = function(a8i) {
					return !bD.gw.kJ(a8i) && !a8w(a8i) && b6.a8x(1, [a8i], !1)
				}(a8i), p2[7].iN || bD.gw.kJ(a8i) || (a8j = a8i, p2[7].iN = !0), p2[4].iN = !bD.gw.kJ(a8i) && !ag.a94(a8i) && b6.a8x(0, [a8i], !1), p2[6].iN = function(a8i) {
					if (0 === rX.length) return !1;
					if (performance.now() > a8m + 4e3) return !(rX = []);
					return !a8w(a8i) && ! function(a8i) {
						var aC;
						if (aE.iV)
							for (aC = rX.length - 1; 0 <= aC; aC--)
								if (!bv.fT(a8i, rX[aC])) return 1;
						return
					}(a8i)
				}(a8i), bv.fT(a8i, aE.fK) ? (bv.iA(aE.fK, a8i) ? (p2[0].lt = 0, p2[0].iN = !0) : ae.gh(aE.fK) && (p2[0].lt = 3, p2[0].iN = !0), p2[0].iN = this.a96()) : (p2[2].iN = !0, ao.iF(a8i) ? p2[2].lt = 0 : p2[2].lt = 1,
					p2[0].iN = !0))))), this.a91(mB, mC)))
	}, this.a91 = function(mB, mC) {
		return fh = mB - Math.floor(a8f / 2), fj = mC - Math.floor(a8f / 2), !!this.iN()
	}, this.a4y = function(mB, mC) {
		return !!this.iN() && (ak.a00.iN ? !ak.a00.a2N(mB, mC) && (ak.a00.iN = !1, bi.ds = !0) : function(tz, mB, mC) {
			mB = a8s(mB, mC);
			if (0 <= a8u(mB)) return !1;
			if ((1 === mB || 6 === mB) && 0 <= a8u(2)) return !1;
			if ((6 === mB || 9 === mB) && 0 <= a8u(10)) return !1;
			return tz.te(), bi.ds = !0
		}(this, mB, mC))
	}, this.te = function() {
		for (var aC = p2.length - 1; 0 <= aC; aC--) p2[aC].iN = !1, p2[aC].lt = 0;
		ak.a00.iN = !1
	}, this.iN = function() {
		return this.a96() || ak.a00.iN
	}, this.a96 = function() {
		for (var fa = p2.length, aC = 0; aC < fa; aC++)
			if (p2[aC].iN) return !0;
		return !1
	}, this.y2 = function() {
		if (this.iN())
			if (ak.a00.iN) ak.a00.y2();
			else {
				var aC, ie = y3,
					fu = p2,
					fa = fu.length,
					a9E = (a8f + gap) / zoom;
				for (ie.imageSmoothingEnabled = !0, ie.setTransform(zoom, 0, 0, zoom, fh, fj), aC = 0; aC < fa; aC++) fu[aC].iN && y3.drawImage(fu[aC].canvas[fu[aC].lt], fu[aC].fh * a9E, fu[aC].fj * a9E);
				ie.imageSmoothingEnabled = !1, ie.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cH() {
	var k, canvas, a9F, a9G, a9H, a9I = -1;

	function a9J() {
		var a9K, oy = canvas.getContext("2d", {
			alpha: !0
		});
		oy.clearRect(0, 0, k, k), oy.fillStyle = bE.pO, oy.fillRect(0, 0, k, k), 9 === a9G && (oy.fillStyle = bE.pT, oy.fillRect(0, 0, k, k)), oy.fillStyle = bE.pS, __fx.utils.smoothFrame(oy, k, k) || (oy.fillRect(0, 0, k, 1), oy.fillRect(0, 0, 1,
			k), oy.fillRect(0, k - 1, k, 1), oy.fillRect(k - 1, 0, 1, k)), a9K = .9 * k / ac.get(0).width, oy.imageSmoothingEnabled = !0, oy.setTransform(a9K, 0, 0, a9K, Math.floor((k - a9K * ac.get(0).width) / 2), Math.floor((k - a9K * ac.get(0)
			.height) / 2)), oy.drawImage(ac.get(0), 0, 0), oy.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9N(mB, mC) {
		if (!aN.hl) return mB <= k + bf.gap && mC >= aS.fj ? 9 : -1;
		if (mB <= 4 * k + bf.gap) {
			if (mC >= aS.fj) return 0;
			if (mC >= aS.fj - k - a9H * bf.gap) return 2
		} else if (mB <= 7 * k + bf.gap && mC >= aS.fj - k - a9H * bf.gap) return 1;
		return -1
	}
	this.hl = !1, this.dk = function() {
		a9G = -1, this.hl = !1, a9H = a1.a2.im() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, a9F = bD.sU.uE(1, (a1.a2.im() ? .5 : .45) * k), a9J()
	}, this.a9L = function() {
		return !(1 !== aE.a3O || aE.hz || (aE.hj ? !bF.a8N : this.hl && aE.lG))
	}, this.a5Z = function() {
		this.hl = !this.hl, this.hl ? (bF.a5Y(!1), aE.hj && bF.a8N && bF.a5a(!0), this.a9M(), 9 === a9G && (a9G = 0)) : (a9G = -1, a9J(), !aE.lG || 1 !== aE.a3O || aE.hz || aE.hj || a1.a2.setState(1)), bi.ds = !0
	}, this.a9M = function() {
		(aE.lG || aE.hj) && 1 === aE.a3O && (aW.nK(!0), aE.hz || setTimeout(function() {
			be.a3a()
		}, 0), a1.a2.setState(0))
	}, this.ho = function(mB, mC) {
		return 0 <= (a9I = a9N(mB, mC)) || !aN.hl || aE.lG || aE.hj || bh.iN || aN.a5Z(), a9I
	}, this.a4y = function(mB, mC) {
		mB = a9N(mB, mC);
		mB !== a9G && (a9G = mB, this.hl || a9J(), bi.ds = !0)
	}, this.a4z = function(mB, mC) {
		mB = a9N(mB, mC);
		return -1 !== mB && a9I === mB && (this.hl ? aE.o2 ? (0 <= mB && bF.a5Y(!1), !aE.hj) : (0 === mB ? aE.a4p() : 1 === mB ? this.a5Z() : 2 === mB && u.v(1, 0), !0) : 9 === mB && (this.a5Z(), !0))
	}, this.y2 = function() {
		var j;
		this.hl ? (j = Math.floor(5.5 * k), y3.setTransform(1, 0, 0, 1, bf.gap, aS.fj), y3.fillStyle = bE.pO, y3.fillRect(0, 0, j, k), 0 === a9G ? (y3.fillStyle = bE.pT, y3.fillRect(0, 0, 4 * k, k)) : 1 === a9G && (y3.fillStyle = bE.pT, y3
				.fillRect(4 * k, 0, Math.floor(1.5 * k), k)), y3.fillStyle = bE.pS, y3.fillRect(0, 0, j, 1), y3.fillRect(0, 0, 1, k), y3.fillRect(4 * k, 0, 1, k), y3.fillRect(0, k - 1, j, 1), y3.fillRect(j - 1, 0, 1, k), y3.font = a9F, bD.sU
			.textBaseline(y3, 1), bD.sU.textAlign(y3, 1), y3.fillText(L(48), 2 * k, .54 * k), j = .4 * k, aN.a9R(bf.gap + 4 * k + (1.5 * k - j) / 2, aS.fj + .3 * k, j), j = 1, y3.setTransform(1, 0, 0, 1, bf.gap, aS.fj - j * a9H * bf.gap - j *
				k), y3.fillStyle = bE.pO, y3.fillRect(0, 0, 4 * k, k), a9G === j + 1 && (y3.fillStyle = bE.pT, y3.fillRect(0, 0, 4 * k, k)), y3.fillStyle = bE.pS, y3.fillRect(0, 0, 4 * k, 1), y3.fillRect(0, 0, 1, k), y3.fillRect(4 * k, 0, 1,
				k), y3.fillRect(0, k - 1, 4 * k, 1), y3.fillText(L(0 === j ? 48 : 49), 2 * k, .54 * k), y3.setTransform(1, 0, 0, 1, 0, 0)) : y3.drawImage(canvas, bf.gap, aS.fj)
	}, this.s5 = function(player) {
		return 0 !== ah.nY[player] && 2 !== aE.a3O && !bD.gw.kJ(player)
	}, this.a9R = function(fh, fj, fa) {
		y3.setTransform(1, 0, 0, 1, fh, fj), y3.lineWidth = bf.a2O, y3.strokeStyle = bE.pS, y3.beginPath(), y3.moveTo(0, 0), y3.lineTo(fa, fa), y3.moveTo(0, fa), y3.lineTo(fa, 0), y3.stroke()
	}
}

function cI() {
	var a9T, k, a9U, a9V, a9W, a9X, a9Y, a9Z, a9a;

	function a1W() {
		return aS.a9t(aO.a9p()) ? ax.iN ? __fx.settings.keybindButtons ? aS.fj - 2 * aS.k - 3 * a9U : aS.fj - aS.k - 2 * a9U : __fx.settings.keybindButtons ? aS.fj - aS.k - 2 * a9U : aS.fj - a9U : bF.a9t(aO.a9s()) ? ax.iN ? bF.a1W() - aS.k - 2 *
			a9U : bF.a1W() - a9U : ax.iN ? i.k - aS.k - (bn.a8e() + 1) * a9U : i.k - bn.a8e() * bf.gap
	}

	function a9w(a4W) {
		window.open(a4W, "_blank"), aT.o4 = !1
	}

	function a9f(eb, sB, id, h8, a9j, a9k, lZ, a9l, a9m, a9n, a9y) {
		var aC, oy, a6H, sM, a9z = void 0 !== a9m,
			j = Math.floor(aR.measureText(sB, aO.a9F) + 1.5 * a9V + (a9z ? k : 1.5 * a9V));
		if (bi.ds = !0, a9y || bt.a1s(sB, a9m), j + 2 * a9U + aS.k > i.j && !a9z && 50 !== id && 20 < sB.length) a9f(eb, (a9y = bD.tR.a7f(sB))[0], id, h8, a9j, a9k, lZ, a9l, a9m, a9n, !0), a9f(eb, a9y[1], id, h8, a9j, a9k, lZ, a9l, a9m, a9n, !0);
		else if (a9y = j + (50 === id ? a9W : 0), (a6H = document.createElement("canvas")).width = j, a6H.height = k, (oy = a6H.getContext("2d", {
				alpha: !0
			})).font = aO.a9F, bD.sU.textBaseline(oy, 1), bD.sU.textAlign(oy, 0), oy.clearRect(0, 0, j, k), oy.fillStyle = a9k, oy.fillRect(0, 0, j, k), __fx.utils.smoothFrame(oy, j, k, 0), oy.fillStyle = a9j, oy.fillText(sB, Math.floor(1.5 * a9V),
				Math.floor(k / 2)), a9z && (oy.imageSmoothingEnabled = !0, ak.a00.a2P(a9m, oy, j - k, 0, k)), 0 === (sM = {
				ea: eb,
				sB: sB,
				id: id,
				player: h8,
				canvas: a6H,
				a9j: a9j,
				a9k: a9k,
				j: j,
				a9q: a9y,
				lZ: lZ,
				a9l: a9l,
				a9m: a9m,
				a9n: a9n
			}).ea || 0 < a9T.length && 0 < a9T[0].ea) a9T.unshift(sM);
		else {
			for (aC = 1; aC < a9T.length; aC++)
				if (0 < a9T[aC].ea) return void a9T.splice(aC, 0, sM);
			a9T.push(sM)
		}
	}

	function a9g(eI, v2, fu) {
		return "rgb(" + eI + "," + v2 + "," + fu + ")"
	}

	function aA0(id, h3) {
		for (var fa = a9T.length, aC = 0; aC < fa; aC++) a9T[aC].id === id && h3-- <= 0 && (a9T.splice(aC, 1), aC--, fa--)
	}

	function aA1(id, player) {
		for (var fo = !1, aC = a9T.length - 1; 0 <= aC; aC--) a9T[aC].id !== id || player !== aE.fX && a9T[aC].player !== player || (a9T.splice(aC, 1), fo = !0);
		return fo
	}

	function aAM(sB) {
		a9f(340, sB, 6, 0, a9g(215, 245, 255), bE.pP, -1, !1)
	}
	this.a9b = "", this.dk = function() {
		var self;
		a9Z = 0, a9Y = a1.a2.im() ? 7 : 12, a9X = {
				w9: [0, 0, 0],
				a9c: [0, 0, 0],
				nq: [220, 180, 180],
				y1: [0, 0, 0],
				ek: [0, 0, 0]
			}, a9T = [], this.resize(), aE.hz && this.a3c(0, 18), bV.wQ.zo[bV.fG].name.length && aAM(L(94, [bV.wQ.zo[bV.fG].name])), bV.wQ.zo[bV.fG].aAN && aAM(L(95, [bV.wQ.zo[bV.fG].aAN])), aAM(L(96, [bV.fl - 2 + "x" + (bV.fm - 2)])), aAM(L(97,
				[bD.tR.a2h(aq.aAO)])), aq.aAO !== aq.aAP && aAM(L(98, [bD.tR.a2h(aq.aAP) + " (" + bD.tR.a7b(100 * aq.aAP / aq.aAO, 1) + ")"])), 0 < aq.aAQ && aAM(L(74, [bD.tR.a2h(aq.aAQ) + " (" + bD.tR.a7b(100 * aq.aAQ / aq.aAO, 1) + ")"])), 0 <
			aq.aAR && aAM(L(99, [bD.tR.a2h(aq.aAR) + " (" + bD.tR.a7b(100 * aq.aAR / aq.aAO, 1) + ")"])), 10 === aE.lE && a9f(120, L(100), 6, 0, a9g(235, 255, 120), bE.pP, -1, !1), 0 !== (self = this).a9b.length && (a9f(200, self.a9b, 0, 0, bE
				.pS, bE.pP, -1, !1), self.a9b = ""), aE.a1r && a9f(340, L(50), 6, 0, a9g(255, 200, 0), bE.pP, -1, !1), (self = aE.data.a8P) && a9f(340, 1 === self ? L(52) : L(53, [self]), 10, 0, bE.pS, bE.pP, -1, !1)
	}, this.resize = function() {
		var a9i, aC;
		if (k = (k = Math.floor((a1.a2.im() ? .031 : .0249) * i.io)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.a9F = bD.sU.uE(1, this.fontSize), a9U = bf.gap, a9V = Math.floor(k / 5), 0 < a9T.length)
			for (a9i = a9T, a9T = [], aC = a9i.length - 1; 0 <= aC; aC--) a9f(a9i[aC].ea, a9i[aC].sB, a9i[aC].id, a9i[aC].player, a9i[aC].a9j, a9i[aC].a9k, a9i[aC].lZ, a9i[aC].a9l, a9i[aC].a9m, a9i[aC].a9n, !0);
		this.a9o()
	}, this.a9o = function() {
		a9a = document.createElement("canvas");
		var sB = L(51),
			oy = (a9W = aR.measureText(sB, this.a9F) + 5 * a9V, a9a.height = k, a9a.width = a9W, a9a.getContext("2d", {
				alpha: !0
			}));
		oy.font = this.a9F, bD.sU.textBaseline(oy, 1), bD.sU.textAlign(oy, 1), oy.clearRect(0, 0, a9W, k), oy.fillStyle = bE.pp, oy.fillRect(0, 0, a9W, k), oy.fillStyle = bE.pS, oy.fillText(sB, Math.floor(a9W / 2), Math.floor(k / 2))
	}, this.a9p = function() {
		var fa;
		return ax.iN ? ax.j : 0 === (fa = a9T.length) ? 0 : 1 === fa ? a9T[0].a9q : a9r(a9T[0].a9q, a9T[1].a9q)
	}, this.a9s = function() {
		var fa = a9T.length;
		return ax.iN ? fa ? a9r(ax.j, a9T[0].a9q) : ax.j : 0 === fa ? 0 : 1 === fa ? a9T[0].a9q : 2 === fa ? a9r(a9T[0].a9q, a9T[1].a9q) : a9r(a9r(a9T[0].a9q, a9T[1].a9q), a9T[2].a9q)
	}, this.ho = function(fh, fj) {
		for (var nz, a9u, a9v = a1W(), aC = a9T.length - 1; 0 <= aC; aC--)
			if ((a9u = a9v - (aC + 1) * k) <= fj && fj < a9u + k) return 50 === a9T[aC].id ? fh >= i.j - a9W - a9U - a9T[aC].j && (fh >= i.j - a9W - a9U ? bB.gw.rT(a9T[aC].player) : aI.nu(a9T[aC].player, 800, !1, 0), !0) : fh >= i.j - a9T[aC].j -
				a9U && (736 === a9T[aC].id ? a9w("https://" + a9T[aC].sB) : 737 === a9T[aC].id ? a9w("https://" + a9T[aC].a9n.a3s) : a9T[aC].a9l && (a9T[aC].a9n && a9T[aC].a9n.ft ? (a9u = a9T[aC].a9n.fM, nz = bP.fi(a9u) - 10, a9u = bP.fk(
					a9u) - 10, aI.nt(nz, a9u, 19 + nz, 19 + a9u)) : a9T[aC].a9n && a9T[aC].a9n.fu ? aI.nv(a9T[aC].player, a9T[aC].a9n.nw) : (aI.nu(a9T[aC].player, 800, !1, 0), 0 <= a9T[aC].lZ && (nz = a9T[aC].lZ, a9T[aC].lZ = a9T[aC]
					.player, a9T[aC].player = nz))), !0);
		return !1
	}, this.a1s = function(eb, sB, id, h8, a9j, a9k, lZ, a9l, a9m, a9n) {
		a9f(eb, sB, id, h8, a9j, a9k, lZ, a9l, a9m, a9n)
	}, this.a9x = function(s) {
		a9f(300, s, 252, 0, bE.pS, bE.pP, -1, !1)
	}, this.a7r = function(id) {
		for (var aC = a9T.length - 1; 0 <= aC; aC--) a9T[aC].id === id && (a9T[aC].ea = 1)
	}, this.a3c = function(player, id) {
		0 === id ? (aR.ej(player, 0), aA0(423, 2), a9f(160, L(54, [ah.a1t[player]]), 423, player, "rgb(10,220,10)", bE.pP, -1, !1)) : 1 === id ? (aA1(50, aE.fX), aR.ej(player, 1), a9f(360, L(55, [ah.a1t[player]]), 0, player, bE.qA, bE.pP, -1, !
				0), aI.nu(player, 2700, !1, 0)) : 2 === id ? (aR.ej(player, 2), a9f(0, L(56), 0, player, "rgb(10,255,255)", bE.pP, -1, !0), aI.nu(player, 2700, !1, 0)) : 3 === id ? (aR.ej(player, 2), a9f(0, L(57, [ah.a1t[player]]), 0, player, bE
				.pS, bE.pP, -1, !0), aI.nu(player, 2700, !1, 0)) : 4 === id ? this.aA2(1, player, player) : 5 === id ? bD.gw.kJ(aE.fK) || (function(id, nT) {
				var aC, ou = 0,
					fa = a9T.length;
				for (aC = 0; aC < fa; aC++)
					if (a9T[aC].id === id && nT <= ++ou) return a9T.splice(aC, 1)
			}(1, 5), ag.aA4(player) && a9f(180, L(58, [ah.a1t[player]]), 1, player, a9g(255, 200, 180), bE.pP, -1, !0), bD.gw.a6w(player, 10) && (aA0(573, 0), a9f(180, L(59, [ah.a1t[player]]), 573, player, bE.qA, bE.pP, -1, !0))) : 18 === id ?
			a9f(255, L(60), 18, 0, bE.pS, bE.pP, -1, !1) : 21 === id ? a9f(220, L(61), id, 0, bE.pS, bE.pP, -1, !1) : 22 === id ? this.aA2(2, player, player) : 59 === id && a9f(0, L(62), id, 0, bE.qY, bE.pP, 0, !1)
	}, this.a4k = function(s) {
		a9f(200, L(63, [s]), 94, 0, bE.pS, bE.q6, -1, !1)
	}, this.a3o = function(aA5) {
		if (aE.fK === aA5 && !aE.lG && !aE.hj)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a9f(0, "Your Win Count is now " + __fx.wins.count, 3, aA5, bE.pS, bE.pP, -1, !0);
		ah.hO[aA5] && (aR.ej(aA5, 2), aE.kw < 100 ? a9f(0, L(57, [ah.a1t[aA5]]), 3, aA5, bE.pS, bE.pP, -1, !0) : a9f(0, L(64, [ah.a1t[aA5]]), 3, aA5, bE.pS, bE.pP, -1, !0))
	}, this.a98 = function(fE) {
		var sB, aA7, aA6 = "(" + bP.fi(fE >> 2) + ", " + bP.fk(fE >> 2) + ")",
			a9l = !1,
			player = 0;
		ad.fV(fE) ? ad.fR(fE) ? aA6 = L(65, [aA6]) : (player = ad.fS(fE), (aE.hj || aE.hk) && !1 === __fx.hoveringTooltip.active && (aE.fK = player), sB = L(66, [bD.oy.a6V(ah.a48[player], bD.sU.uE(0, 10), 150)]) + "   ", sB = (sB += L(67, [bD.tR
			.a2h(ah.hc[player])
		]) + "   ") + L(68, [bD.tR.a2h(ah.hO[player])]) + "   ", aE.iV && (aA7 = bj.a3l[bj.lJ[bj.fY[player]]], sB += L(69) + ": " + aA7 + "   "), bD.gw.kJ(player) && (sB += L(70) + ": " + aF.l7[aF.iK[player]] + "   "), aA6 = sB = (sB +=
			L(71, [player]) + "   ") + L(72, [aA6]), a9l = !0) : aA6 = ad.ff(fE) ? L(73, [aA6]) + "   #" + ad.fI(fE) : L(74, [aA6]), aA0(55, 0), a9f(220, aA6, 55, player, bE.pS, bE.pP, -1, a9l, void 0, void 0, !0)
	}, this.a9A = function(aA8) {
		var lr = bQ.z,
			player = lr.mq[aA8] >> 3,
			sB = (bi.ds = !0, aA0(55, 0), L(75, [ah.a1t[player]]) + "   ");
		a9f(220, sB += L(67, [bD.tR.a2h(lr.aA9[aA8])]), 55, player, bE.pS, bE.pP, -1, !0)
	}, this.rC = function(qw, aAA, rD) {
		qw === aE.fK ? a9f(175, " " + L(76, [ah.a1t[aAA]]) + ": ", 1001, aAA, a9g(200, 255, 210), bE.pP, -1, !0, rD) : this.aAB(qw, rD)
	}, this.aAB = function(qw, rD) {
		aA0(1e3, 0), a9f(175, ah.a1t[qw] + ": ", 1e3, qw, bE.pS, "rgba(5,60,25,0.9)", -1, !0, rD)
	}, this.a3n = function() {
		var s;
		aE.a3T ? (s = L(77), aR.a3m(L(78), 2, 1, 12), a9f(0, s, 40, 0, "rgb(10,220,10)", bE.pP, -1, !1)) : (s = L(79), aR.a3m(L(80), 2, 0, 16), a9f(0, s, 41, 0, bE.pS, bE.pP, -1, !1))
	}, this.a1g = function() {
		var h3 = ah.a1t,
			fd = aE.data;
		a9f(300, h3[0] + " [" + aE.a3i.a1m(fd.elo[0]) + "] vs " + h3[1] + " [" + aE.a3i.a1m(fd.elo[1]) + "]", 65, 0, bE.pJ, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aAC = function(s) {
		a9f(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aAD = function(aAE) {
		a9f(0, L(aAE ? 81 : 82), 247, 0, bE.qX, bE.pP, -1, !1)
	}, this.a1o = function(a1l, a1n, aAF) {
		var fd = aE.data,
			h3 = ah.a1t;
		a9f(0, h3[0] + ": " + aE.a3i.a1m(fd.elo[0]) + " -> " + a1l, 66, 0, bE.pS, aAF[0], -1, !1), a9f(0, h3[1] + ": " + aE.a3i.a1m(fd.elo[1]) + " -> " + a1n, 66, 1, bE.pS, aAF[1], -1, !1)
	}, this.rU = function(player, id) {
		0 === id ? aA1(50, player) ? (a9f(128, L(83, [ah.a1t[player]]), 52, player, a9g(180, 255, 180), bE.pP, -1, !0), ag.s3(player, 2, 255)) : a9f(384, L(84, [ah.a1t[player]]), 51, player, a9g(210, 210, 255), bE.pP, -1, !0) : aA1(51, player) ?
			(a9f(128, L(85, [ah.a1t[player]]), 52, player, bE.pS, "rgba(60,120,10,0.9)", -1, !0), ag.s3(player, 2, 255)) : (a9f(384, L(86, [ah.a1t[player]]), 50, player, bE.pS, "rgba(90,90,90,0.9)", -1, !0), ag.s3(player, 2, 96))
	}, this.rY = function(w9, target) {
		var color = a9g(210, 255, 210);
		1 < w9.length ? a9f(230, L(87, [w9.length, ah.a1t[target]]), 66, target, color, bE.pP, -1, !0) : a9f(230, L(88, [ah.a1t[w9[0]], ah.a1t[target]]), 66, w9[0], color, bE.pP, target, !0)
	}, this.aAG = function(player, target) {
		a9f(230, L(89, [ah.a1t[player], ah.a1t[target]]), 66, player, bE.pS, "rgba(75,65,5,0.9)", target, !0)
	}, this.aAH = function(id, h3) {
		aA0(id, h3)
	}, this.a3W = function(id, player) {
		aA1(id, void 0 === player ? aE.fX : player)
	}, this.aAI = function(id) {
		for (var aC = a9T.length - 1; 0 <= aC; aC--)
			if (a9T[aC].id === id) return a9T[aC];
		return null
	}, this.rP = function(a8Y, aAJ, player) {
		2 !== ah.a6r[aE.fK] && a9f(200, 1 === a8Y ? L(90, [ah.a1t[player]]) : L(91, [bD.tR.a2h(a8Y), ah.a1t[player]]), 30, player, "rgb(190,255,190)", bE.pP, -1, !0)
	}, this.aAL = function(a8Y, player) {
		2 !== ah.a6r[aE.fK] && (aA0(31, 0), a8Y = " (" + bD.tR.a2h(a8Y) + ") 💸", a9f(150, a8Y = bD.gw.kJ(player) ? L(92) + a8Y : L(93, [ah.a1t[player]]) + a8Y, 31, player, bE.pJ, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a3V = function(by) {
		for (var ek = bi.kt(), aC = 2; 0 <= aC; aC--) 0 < a9X.y1[aC] && (by || a9X.ek[aC] < ek - 220) && this.aAS(aC)
	}, this.aAS = function(id) {
		var sB, fa = a9X.y1[id],
			player = a9X.w9[id];
		a9X.y1[id] = 0, 1 === fa ? (0 === id ? sB = L(101, [ah.a1t[player], ah.a1t[a9X.a9c[0]]]) : 1 === id ? sB = L(102, [ah.a1t[player]]) : 2 === id ? sB = L(103, [ah.a1t[player]]) : 3 === id && (sB = L(104, [ah.a1t[player]])), aA0(7, 0), a9f(
			a9X.nq[id], sB, 7, a9X.a9c[id], bE.pS, bE.pP, -1, !0)) : (sB = L(0 === id ? 105 : 1 === id ? 106 : 107, [fa]), aA0(7, 0), a9f(a9X.nq[id], sB, 7, player, bE.pS, bE.pP, -1, !1))
	}, this.aA2 = function(id, i3, lZ) {
		var ek = bi.kt(),
			fa = a9X.y1[id] + 1;
		a9X.y1[id]++, a9X.w9[id] = i3, a9X.a9c[id] = lZ, 1 === fa && (a9X.ek[id] = ek), (1 === fa && (aE.a3R < 32 || 2 === aE.a3O) || 1 < fa && (a9X.ek[id] < ek - 140 || 2 === aE.a3O)) && this.aAS(id)
	}, this.ef = function() {
		b3.ef();
		for (var kB = (kB = a9T.length - a9Y) <= 1 ? 1 : kB * kB, aC = a9T.length - 1; 0 <= aC; aC--) 0 < a9T[aC].ea && (a9T[aC].ea -= kB, a9T[aC].ea <= 0) && (bi.ds = !0, a9T.splice(aC, 1));
		! function() {
			var h3, aC;
			if (128 !== a9Z && !(++a9Z < 128))
				for (h3 = 5, aC = am.lS - 1; 0 <= aC; aC--) 1 === ah.a6r[am.lX[aC]] && 0 < h3-- && a9f(240, L(104, [ah.a1t[am.lX[aC]]]), 1, am.lX[aC], bE.pJ, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a3V(!1)
	}, this.y2 = function() {
		for (var a0Y, fj = a1W(), aC = a9T.length - 1; 0 <= aC; aC--) a0Y = fj - (aC + 1) * k, 50 === a9T[aC].id ? (y3.drawImage(a9T[aC].canvas, i.j - a9T[aC].j - a9W - a9U, a0Y), y3.drawImage(a9a, i.j - a9W - a9U, a0Y)) : y3.drawImage(a9T[aC]
			.canvas, i.j - a9T[aC].j - a9U, a0Y)
	}, this.aAU = function(id, iK) {
		var aA6, aAV = bE.pc;
		0 === id ? aA6 = L(108) : 1 === id ? (aA6 = L(109), aAV = bE.qP) : 2 === id ? aA6 = L(110) : 3 === id ? aA6 = L(111) : (aA6 = bD.tR.a2h(iK), aAV = 5 === id ? bE.qP : bE.pP), aA0(74, 0), a9f(0, aA6, 74, 0, bE.pS, aAV, -1, !1, void 0,
			void 0, !0)
	}
}

function cJ() {
	var aAX, aAY, y4 = "",
		a0J = 0,
		a0K = 0,
		aAW = -1,
		eE = ["Team", "BR", "1v1", "Zombie"],
		aAZ = [
			[0, 15, 30, 45],
			[10, 40],
			[25],
			[55]
		],
		aAa = 10;

	function aAe() {
		for (var aAf = aAg(), aAh = -1, aAc = 0, aC = 0; aC < aAZ.length; aC++) {
			var fd = aAi(aC, aAf);
			0 <= fd && (aAh < 0 || fd < aAh) && (aAh = fd, aAc = aC)
		}
		if (!(aAh < 0)) return aAh !== aAW && (y4 = eE[aAc] + " " + aAY + ": " + aAj(aAh), aAW = aAh, a0J = aR.measureText(y4, aAX), a0J += Math.floor(.4 * a0K), 1);
		y4 = ""
	}

	function aAg() {
		var eb = new Date;
		return 60 * eb.getUTCMinutes() + eb.getUTCSeconds()
	}

	function aAi(aAc, aAf) {
		for (var aAl = aAZ[aAc], g2 = -1, ft = 0; ft < aAl.length; ft++) {
			var fd = (fd = 60 * aAl[ft] + aAa - aAf) <= 0 ? 3600 + fd : fd;
			(g2 < 0 || fd < g2) && (g2 = fd)
		}
		return g2
	}

	function aAj(aAm) {
		return aAn(Math.floor(aAm / 60)) + ":" + aAn(aAm % 60)
	}

	function aAn(aAo) {
		return aAo < 10 ? "0" + aAo : String(aAo)
	}
	this.aAb = function(aAc, aAd) {
		return 0 <= aAZ[aAc].indexOf(aAd)
	}, this.dk = function() {
		aAY = L(112)
	}, this.resize = function() {
		a0J = Math.floor((a1.a2.im() ? .53 : .36) * i.io), a0K = Math.floor(.065 * a0J), aAX = bD.sU.uE(1, Math.floor(.9 * a0K)), aAW += 1e3, aAe()
	}, this.ef = function() {
		aAe() && (bi.ds = !0)
	}, this.aAk = function() {
		for (var aAf = aAg(), sB = "", aC = 0; aC < aAZ.length; aC++) {
			var fd = aAi(aC, aAf);
			0 <= fd && (sB += (sB ? "   " : "") + eE[aC] + ": " + aAj(fd))
		}
		return sB
	}, this.y2 = function(fj) {
		y4 && (y3.lineWidth = 1 + Math.floor(a0K / 15), y3.translate(i.j - a0K, fj + a0J), y3.rotate(-Math.PI / 2), y3.fillStyle = bE.pS, y3.fillRect(0, 0, a0J, a0K), y3.strokeStyle = bE.pJ, y3.strokeRect(0, 0, a0J, a0K + 10), y3.fillStyle = bE
			.pJ, y3.font = aAX, bD.sU.textBaseline(y3, 1), bD.sU.textAlign(y3, 1), y3.fillText(y4, Math.floor(a0J / 2), Math.floor(.59 * a0K)), y3.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cK() {
	var a8X, aAp, aAq, a0K, aAr, aAs = 0,
		aAt = 0;

	function aAv(aC) {
		var aAx = !0,
			a2W = bE.pS,
			j = (1 === a8X[aC].id ? a8X[aC].oy.fillStyle = bE.qN : a8X[aC].k5 === aE.fX ? a8X[aC].oy.fillStyle = bE.pd : (ad.aAy(a8X[aC].k5), a8X[aC].oy.fillStyle = bD.color.pM(bR.g9[0], bR.g9[1], bR.g9[2], .87), 400 < bD.sc.a5v(bR.g9, 0, 2) && (
				aAx = !1, a2W = bE.pJ)), a8X[aC].canvas.width),
			ul = (a8X[aC].oy.clearRect(0, 0, j, a0K), a8X[aC].oy.fillRect(0, 0, j, a0K), a8X[aC].oy.fillStyle = a2W, ! function(oy, j, a0K) {
				oy.fillRect(0, 0, j, 1), oy.fillRect(0, a0K - 1, j, 1), oy.fillRect(0, 0, 1, a0K), oy.fillRect(j - 1, 0, 1, a0K)
			}(a8X[aC].oy, j, a0K), aAp + 2 * a0K < j && (a8X[aC].oy.fillRect(j - aAp - a0K, 0, 1, a0K), a8X[aC].oy.fillText(ah.a1t[a8X[aC].k5], Math.floor((j - aAp) / 2), Math.floor(.57 * a0K))), 0 !== a8X[aC].id ? 0 : a0K);
		a8X[aC].oy.fillText(bD.tR.a2h(a8X[aC].iK), Math.floor(j - aAp / 2 - ul), Math.floor(.57 * a0K)),
			function(aC, j, ul, aAx) {
				a8X[aC].oy.fillStyle = aAx ? bE.pU : bE.pQ;
				aAx = Math.floor(aAp * a8X[aC].iK / a8X[aC].aB4);
				a8X[aC].oy.fillRect(Math.floor(j - aAp - ul), a0K - aAr, aAx, aAr)
			}(aC, j, ul, aAx), 0 === a8X[aC].id ? (aB1(aC, j, aAx, a2W), function(aC, j, aAx) {
				a8X[aC].oy.strokeStyle = aAx ? bE.pk : bE.pu, a8X[aC].oy.fillRect(a0K, 0, 1, a0K);
				aAx = j - a0K;
				a8X[aC].oy.beginPath(), a8X[aC].oy.moveTo(Math.floor(.3 * a0K + aAx), Math.floor(a0K / 2)), a8X[aC].oy.lineTo(Math.floor(a0K - .3 * a0K + 0 + aAx), Math.floor(a0K / 2)), a8X[aC].oy.stroke(), a8X[aC].oy.beginPath(), a8X[aC].oy
					.moveTo(Math.floor(a0K / 2 + aAx), Math.floor(.3 * a0K)), a8X[aC].oy.lineTo(Math.floor(a0K / 2 + aAx), Math.floor(a0K - .3 * a0K + 0)), a8X[aC].oy.stroke()
			}(aC, j, aAx)) : aB1(aC, 2 * a0K, aAx, a2W)
	}

	function aB1(aC, j, aAx, a2W) {
		a8X[aC].oy.strokeStyle = a8X[aC].aB5 ? bE.pb : aAx ? bE.q2 : bE.q3, a8X[aC].oy.fillStyle = a2W, a8X[aC].oy.fillRect(j - a0K, 0, 1, a0K), a8X[aC].oy.lineWidth = Math.max(Math.floor(a0K / 12), 3), a8X[aC].oy.lineCap = "round";
		aAx = .35;
		j = a0K + 1, a8X[aC].oy.beginPath(), a8X[aC].oy.moveTo(Math.floor(j - aAx * a0K + 0), Math.floor(aAx * a0K)), a8X[aC].oy.lineTo(Math.floor(j - a0K + aAx * a0K), Math.floor(a0K - aAx * a0K + 0)), a8X[aC].oy.stroke(), a8X[aC].oy.beginPath(),
			a8X[aC].oy.moveTo(Math.floor(j - a0K + aAx * a0K), Math.floor(aAx * a0K)), a8X[aC].oy.lineTo(Math.floor(j - aAx * a0K + 0), Math.floor(a0K - aAx * a0K + 0)), a8X[aC].oy.stroke()
	}

	function aBH(h, aBF) {
		for (var iK, aC = aBF - 1; 0 <= aC; aC--) iK = ae.gn(aE.fK, aC), h[aC].iK !== iK && (h[aC].iK = iK, h[aC].aB4 = Math.max(iK, h[aC].aB4), h[aC].aAw = !0)
	}

	function aBL(h, aBJ) {
		for (var uy = aE.fK << 3, aA9 = bQ.z.aA9, mn = bQ.z.mn, aBN = bQ.z.aBN, aC = aBJ - 1; 0 <= aC; aC--) {
			var aBO = aBN[uy + aC],
				iK = aA9[aBO];
			h[aC].iK !== iK ? (h[aC].iK = iK, h[aC].aB4 = Math.max(iK, h[aC].aB4), h[aC].aAw = !0) : h[aC].aB5 || mn[aBO] % 64 != 5 || (h[aC].aB5 = !0, h[aC].aAw = !0)
		}
	}

	function aAu(a8a) {
		a8a.canvas = document.createElement("canvas"), bV.zt.font = aAq;
		var j = aAp;
		a8a.k5 < aE.fX && 0 === a8a.id && (j += Math.floor(bV.zt.measureText(ah.a1t[a8a.k5] + "000").width)), j += a0K, 0 === a8a.id && (j += a0K), a8a.canvas.width = j, a8a.canvas.height = a0K, a8a.oy = a8a.canvas.getContext("2d", {
			alpha: !0
		}), a8a.oy.font = aAq, bD.sU.textBaseline(a8a.oy, 1), bD.sU.textAlign(a8a.oy, 1)
	}

	function aBB(aC) {
		return aV.aBP() ? i.j - a8X[aC].canvas.width - bf.gap : aV.fh
	}

	function aBC(aC) {
		return Math.floor(2 * bf.gap + (aV.aBP() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * a0K))
	}
	this.dk = function() {
		aAs = aAt = 0, a8X = [], this.resize()
	}, this.resize = function() {
		aAq = aO.a9F, a0K = aO.fontSize + 5, a0K = Math.floor(1.25 * a0K), a1.a2.im() && (a0K = Math.floor(1.25 * a0K)), aAr = Math.floor(.15 * a0K), bV.zt.font = aAq, aAp = Math.floor(bV.zt.measureText("02 000 000 0000").width);
		for (var aC = a8X.length - 1; 0 <= aC; aC--) aAu(a8X[aC]), aAv(aC)
	}, this.nK = function() {
		for (var aC = a8X.length - 1; 0 <= aC; aC--) a8X[aC].aAw && (a8X[aC].aAw = !1, aAv(aC))
	}, this.ho = function(mB, mC) {
		if (!(2 === aE.a3O || 0 === ah.nY[aE.fK] || aE.hj || aE.hk || bD.gw.kJ(aE.fK)))
			for (var aB6, aB7, aB8, aB9 = a1.a2.im() ? a0K : 0, aBA = a1.a2.im() ? Math.floor(.15 * a0K) : 0, aC = a8X.length - 1; 0 <= aC; aC--)
				if (aB6 = aBB(aC), aB7 = aBC(aC), aB8 = a8X[aC].canvas.width, aB7 - aBA <= mC && mC <= aB7 + a0K + aBA) {
					if (aB6 - aB9 <= mB && mB <= aB6 + a0K + aB9) return a8X[aC].aB5 || (a8X[aC].aAw = !0, a8X[aC].aB5 = !0, 0 === a8X[aC].id ? bB.i1.rA(a8X[aC].k5) : bB.i1.r9(a8X[aC].k5)), !0;
					if (0 === a8X[aC].id && aB6 + aB8 - a0K - aB9 <= mB && mB <= aB6 + aB8 + aB9) return bY.a8y(3), bB.i1.i8(aS.i5(), a8X[aC].k5), !0
				} return !1
	}, this.ef = function() {
		var a63, a64, h, aBF;
		0 === ah.nY[aE.fK] || bD.gw.kJ(aE.fK) && !aE.hj && !aE.hk || (a63 = a8X.slice(0, aAs), a64 = a8X.slice(aAs, aAs + aAt), h = a63, aBF = ae.gh(aE.fK), function(h, aBF) {
			if (aAs !== aBF) return 1;
			for (var aC = aBF - 1; 0 <= aC; aC--)
				if (h[aC].k5 !== ae.gm(aE.fK, aC)) return 1;
			return
		}(h, aBF) ? aBH(h = function(h, aBF) {
			var aC, k5, fu, iK, a9i = [];
			loop: for (aC = 0; aC < aBF; aC++) {
				for (k5 = ae.gm(aE.fK, aC), fu = 0; fu < h.length; fu++)
					if (h[fu].k5 === k5) {
						a9i.push(h.splice(fu, 1)[0]);
						continue loop
					} iK = ae.gn(aE.fK, aC), aAu(iK = {
					k5: k5,
					iK: iK,
					aB4: iK,
					id: 0,
					aAw: !0,
					aB5: !1,
					canvas: null,
					oy: null
				}), a9i.push(iK)
			}
			return a9i
		}(h, aBF), aBF) : aBH(h, aBF), a63 = h, a64 = function(h) {
			var aBJ = bQ.z.l0[aE.fK];
			return function(h, aBJ) {
				if (aAt !== aBJ) return 1;
				for (var uy = aE.fK << 3, mp = bQ.z.mp, aBN = bQ.z.aBN, aC = aBJ - 1; 0 <= aC; aC--) {
					var aBO = aBN[uy + aC];
					if (h[aC].k5 !== mp[aBO]) return 1
				}
				return
			}(h, aBJ) ? aBL(h = function(h, aBJ) {
				var aC, k5, fu, a9i = [],
					uy = aE.fK << 3,
					mp = bQ.z.mp,
					aA9 = bQ.z.aA9,
					aBN = bQ.z.aBN;
				loop: for (aC = 0; aC < aBJ; aC++) {
					var aBO = aBN[uy + aC];
					for (k5 = mp[aBO], fu = 0; fu < h.length; fu++)
						if (h[fu].k5 === k5) {
							a9i.push(h.splice(fu, 1)[0]);
							continue loop
						} aBO = aA9[aBO], aAu(aBO = {
						k5: k5,
						iK: aBO,
						aB4: aBO,
						id: 1,
						aAw: !0,
						aB5: !1,
						canvas: null,
						oy: null
					}), a9i.push(aBO)
				}
				return a9i
			}(h, aBJ), aBJ) : aBL(h, aBJ), h
		}(a64), aAs = a63.length, aAt = a64.length, a8X = a63.concat(a64))
	}, this.y2 = function() {
		if (0 !== ah.nY[aE.fK] && (!bD.gw.kJ(aE.fK) || aE.hj || aE.hk))
			for (var aC = a8X.length - 1; 0 <= aC; aC--) y3.drawImage(a8X[aC].canvas, aBB(aC), aBC(aC))
	}
}

function cL() {
	var a9T, l1, aBQ, aBR, k, a9F, fontSize, aBS, aBT, aBU, aBV, canvas, oy, nl, aBW;

	function yI(aC) {
		return L(0 === aC ? 113 : 1 === aC ? 114 : 2 === aC ? 115 : 116)
	}

	function aBd() {
		aE.iV ? aBe + 4 * bf.gap + k + bk.aBf() > aS.fj ? y3.drawImage(canvas, 2 * bf.gap + bk.aBf(), aBe + 2 * bf.gap) : y3.drawImage(canvas, bf.gap, aBe + 3 * bf.gap + bk.aBf()) : y3.drawImage(canvas, bf.gap, aBe + 2 * bf.gap)
	}

	function aBX() {
		canvas.width = a9T[0].width + aBU, canvas.height = k + aBU, (oy = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a9T[0].width + aBU, k + aBU), oy.translate(Math.floor(aBU / 2), Math.floor(aBU / 2)), oy.lineWidth = aBU, oy.fillStyle = 1 === a9T[0].aBc ? bE.pX : bE.pP, aBg(), oy.fill(), oy.strokeStyle = 1 === a9T[0].aBc ? bE.pJ :
			bE.pS, aBg(), oy.stroke(), bD.sU.textAlign(oy, 1), bD.sU.textBaseline(oy, 1), oy.fillStyle = 1 === a9T[0].aBc ? bE.pJ : bE.pS, oy.font = a9F[0], oy.fillText(yI(a9T[0].aBb), Math.floor(a9T[0].width / 2), Math.floor(.72 * aBS[0] * k)), oy
			.font = a9F[1], oy.fillText(a9T[0].sB, Math.floor(a9T[0].width / 2), Math.floor((aBS[0] + .48 * aBS[1]) * k))
	}

	function aBg() {
		if (__fx.settings.smoothUI && oy.roundRect) return oy.beginPath(), oy.roundRect(0, 0, a9T[0].width, k, .15 * k);
		oy.beginPath(), oy.moveTo(aBV, 0), oy.lineTo(a9T[0].width - aBV, 0), oy.lineTo(a9T[0].width, aBV), oy.lineTo(a9T[0].width, k - aBV), oy.lineTo(a9T[0].width - aBV, k), oy.lineTo(aBV, k), oy.lineTo(0, k - aBV), oy.lineTo(0, aBV), oy.closePath()
	}
	this.dk = function() {
		l1 = 4, aBQ = aBR = nl = 0, a9T = [], a9F = new Array(2), fontSize = new Array(2), (aBS = new Array(2))[0] = .3, aBS[1] = .7, aBT = new Array(4), canvas = document.createElement("canvas"), aBW = bi.ea + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.im() ? .062 : .047) * i.io), fontSize[0] = Math.floor(.85 * aBS[0] * k), fontSize[1] = Math.floor(.85 * aBS[1] * k), a9F[0] = bD.sU.uE(1, fontSize[0]), a9F[1] = bD.sU.uE(1, fontSize[1]), aC = aBT.length -
			1; 0 <= aC; aC--) aBT[aC] = this.measureText(yI(aC) + "000", a9F[0]);
		if (aBU = Math.floor(1 + .05 * k), aBV = Math.floor(.2 * k), 0 < a9T.length) {
			for (aC = a9T.length - 1; 0 <= aC; aC--) j = this.measureText(a9T[aC].sB + "00", a9F[1]), a9T[aC].width = j < aBT[aC] ? aBT[aC] : j;
			aBX()
		}
	}, this.ef = function() {
		0 !== l1 && (4 === l1 ? bi.ea > aBW && (l1 = 0, 1 === aE.a3O) && aR.a3m(bV.wQ.zo[bV.fG].name, 3, 1, 9) : (1 === l1 ? (0 === aBQ && (aBX(), aBQ = 1e-4), 1 <= (aBQ += .002 * (bi.ea - nl)) && (aBR = 0, l1 = 2, aBQ = 1), bi.ds = !0) : 2 ===
			l1 ? ((aBR += (bi.ea - nl) / 1e3) > a9T[0].nq || 1 < aBR && 1 < a9T.length) && (l1 = 3) : 3 === l1 && ((aBQ -= .002 * (bi.ea - nl)) <= 0 && (aBQ = 0, a9T.shift(), l1 = 0 < a9T.length ? 1 : 0), bi.ds = !0), nl = bi.ea))
	}, this.measureText = function(sB, a9F) {
		return y3.font = a9F, Math.floor(y3.measureText(sB).width)
	}, this.ej = function(aBa, aC) {
		this.a3m(ah.a1t[aBa], aC, 1, 0 === aC ? 3 : 7)
	}, this.a3m = function(sB, aBb, aBc, nq) {
		var j;
		sB.length && (j = (j = this.measureText(sB + "00", a9F[1])) < aBT[aBb] ? aBT[aBb] : j, a9T.push({
			sB: sB,
			width: j,
			aBb: aBb,
			aBc: aBc,
			nq: nq
		}), 0 === l1) && (aBQ = 0, l1 = 1, nl = bi.ea)
	}, this.y2 = function() {
		0 !== l1 && 0 !== aBQ && (aBQ < 1 ? (y3.globalAlpha = aBQ, aBd(), y3.globalAlpha = 1) : aBd())
	}
}

function cu() {
	var k, canvas, oy, aBh, aBi, aBj, aBk, aAw, aBl, aBm, aBn, aBo, aAE = !1,
		a6H = (this.iN = !1, this.j = 0, new Array(2)),
		aBp = 0;

	function nL() {
		var j = ax.j,
			lr = (aAw = !1, a1Z(oy, j, k), Math.floor(j / 2));
		1 === aBh ? (oy.fillStyle = bE.pm, oy.fillRect(lr, 0, lr, k)) : -1 === aBh && (oy.fillStyle = bE.q4, oy.fillRect(0, 0, lr, k)), a1a(oy, j, k, 2);
		var lr = (lr = Math.floor(.25 * k)) < 2 ? 2 : lr,
			aAO = (oy.fillStyle = bE.pY, Math.floor((k - 4) * aBi[1] / aBj[1]));
		0 < aAO && oy.fillRect(2, k - 2 - aAO, lr, aAO), 0 < (aAO = Math.floor((k - 4) * aBi[0] / aBj[0])) && oy.fillRect(j - 2 - lr, k - 2 - aAO, lr, aAO);
		lr = (lr = Math.floor(k / 8)) < 2 ? 2 : lr, a1c(oy, Math.floor(.4 * k), 0, k, lr, .5, !1), a1c(oy, Math.floor(j - 1.4 * k), 0, k, lr, .5, !0), aAO = 1.1 * k / a6H[0].width;
		oy.imageSmoothingEnabled = !0, oy.setTransform(aAO, 0, 0, aAO, (j - aAO * a6H[0].width) / 2, -.05 * k), oy.drawImage(a6H[+aAE], 0, 0), oy.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aBu() {
		aBo = -1, aAE = ai.aBv(), aO.a7r(257), aO.aAD(aAE), ax.iN = !0, aAw = !0, aBl = 360;
		for (var g2, eb = 0, aC = am.lS - 1; 0 <= aC; aC--) bD.gw.kJ(am.lX[aC]) || (eb += ah.hO[am.lX[aC]]);
		aAE ? aBj[0] = Math.max(bO.g1(3 * eb, 4), 1) : aE.iV ? (g2 = 9 === aE.lE ? 8 === bj.lJ[bk.lV()] ? 80 : (g2 = bO.g1(100 * bk.lT(), aE.kg), bO.g1(bO.il(1550 - 11 * g2, 400, 1e3), 10)) : (g2 = bO.g1(100 * bk.lT(), aE.kg), bO.g1(bO.il(1600 - 12 *
			g2, 400, 1e3), 10)), g2 = bO.g1(g2 * eb, 100), aBj[0] = Math.max(g2, 1)) : 8 === aE.lE ? aBj[0] = Math.max(bO.g1(3 * eb, 4), 1) : aBj[0] = Math.max(bO.g1(3 * eb, 5), 1), aBj[1] = Math.max(eb - aBj[0], 1)
	}

	function aBq() {
		aBn = bi.kt(), aAw = !0, aBl = aBh = 0, aBk = [], ax.iN = !1, aO.a3W(247), aBi[0] = aBi[1] = 0, aO.a7r(673)
	}

	function a1W() {
		return aS.a9t(aO.a9p()) ? __fx.settings.keybindButtons ? aS.fj - 2 * (k + bf.gap) : aS.fj - k - bf.gap : bF.a9t(aO.a9s()) ? bF.a1W() - k - bf.gap : i.k - k - bn.a8e() * bf.gap
	}
	this.dl = function() {
		for (var aC = 0; aC < 2; aC++) a6H[aC] = bD.canvas.a2A(ac.get(3), 8 - aC, bE.ql), a6H[aC] = bD.canvas.a6J(a6H[aC])
	}, this.dk = function() {
		aBn = -1e4, aBm = aBp = 0, aBo = -1, this.iN = !1, aAw = aAE = !1, aBi = [aBh = aBl = 0, 0], aBj = [1, 1], aBk = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, oy = canvas.getContext("2d", {
			alpha: !0
		}), nL()
	}, this.nK = function() {
		aAw && nL()
	}, this.ho = function(fh, fj) {
		return !!this.iN && !(fh < i.j - this.j - bf.gap || fj < a1W() || (aE.hj || aE.hk || this.iO(aE.fK) && (aN.hl && aN.a5Z(), bB.i1.iP(fh > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.ef = function() {
		0 < aBm ? 0 === --aBm && aBq() : this.iN ? 180 == --aBl && 3 * aBi[0] < aBj[0] ? aBq() : aBi[0] >= aBj[0] ? aAE ? bU.a32.a3J() : bU.a32.a3N() : aBi[1] >= aBj[1] ? aBm = 4 : aBl <= 0 && aBq() : ! function() {
			var aBx = bi.kt();
			if (aBx % 40 == 14) {
				if (aBp) return !(aBx < aBp) && !(aBx < aBn + 535) && (aBp = aBx + 1071, bD.gw.a6u()) ? (aBu(), 1) : 0;
				(1 === am.lS || (aE.iV ? bk.lT() : ah.hO[mX[0]]) >= bO.g1(96 * aE.kg, 100)) && (aBp = aBx + 535)
			}
			return
		}() && 0 <= aBo && (aO.a1s(250, L(117, [ah.a1t[aBo]]), 673, aBo, bE.pS, bE.pP, -1, !0), aBu())
	}, this.a3P = function() {
		this.iN && aBi[0] < aBj[0] && aBq()
	}, this.s4 = function(player, aBy) {
		var aBz = L(aBy ? 118 : 119, [ah.a1t[player]]),
			aBz = (aO.a1s(450, aBz, 257, player, aBy ? bE.pk : bE.q1, bE.pP, -1, !0), aBk.push(player), aAw = !0, aE.lG ? Math.max(aBj[0], aBj[1]) : ah.hO[player]),
			aBz = Math.max(aBz, 1);
		aBy ? aBi[0] += aBz : aBi[1] += aBz, player === aE.fK && (aBh = aBy ? 1 : -1)
	}, this.y2 = function() {
		var fj;
		this.iN && (fj = a1W(), y3.drawImage(canvas, i.j - this.j - bf.gap, fj))
	}, this.iQ = function(player) {
		if (0 !== aBl) return !1;
		if (!bD.gw.hm(1)) return !1;
		if (!bD.gw.hn(player)) return !1;
		if (10 <= kh[player] && !bD.gw.a7E(player, 9)) return !1;
		if (!(aE.lG || m.dy && m.e2)) {
			player = bi.kt();
			if (player < aBn + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iO = function(h8) {
		if (!bD.gw.hm(1)) return !1;
		if (!bD.gw.hn(h8)) return !1;
		if (!this.iN) return !1;
		for (var aC = aBk.length - 1; 0 <= aC; aC--)
			if (aBk[aC] === h8) return !1;
		return !0
	}, this.iM = function(player) {
		aBo = player
	}
}

function cM() {
	var j, fh, aC1, canvas, oy, iN, jE, a7i, a9F, aAw, aC2 = 11 / 12;

	function aC4() {
		var aB3 = Math.floor(jE * (j - 2 * aC1)),
			aC7 = 1 + Math.floor(.0625 * aS.k),
			aC8 = 1 + Math.floor(.3 * aS.k),
			aC9 = Math.floor(.55 * aS.k),
			rounded = (oy.clearRect(0, 0, j, aS.k), oy.fillStyle = bE.pO, oy.fillRect(0, 0, aC1, aS.k), oy.fillRect(aC1 + aB3, 0, j - aC1 - aB3, aS.k), oy.fillStyle = jE < 1 / 3 ? "rgba(" + Math.floor(3 * jE * 130) + ",130,0,0.85)" : jE < 2 / 3 ?
				"rgba(130," + (130 - Math.floor(3 * (jE - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (jE - 2 / 3) * 130) + ",0.85)", oy.fillRect(aC1, 0, aB3, aS.k), oy.fillStyle = bE.pS, oy.fillStyle = __fx.utils.lineColor(bE.pS),
				__fx.utils.smoothFrame(oy, j, aS.k));
		rounded || (oy.fillRect(0, 0, j, 1), oy.fillRect(0, aS.k - 1, j, 1), oy.fillRect(0, 0, 1, aS.k)), oy.fillRect(aC1, 0, 1, aS.k), oy.fillRect(aC1 + aB3, 0, 1, aS.k), oy.fillRect(j - aC1, 0, 1, aS.k), rounded || oy.fillRect(j - 1, 0, 1, aS.k),
			oy.fillStyle = bE.pS, oy.fillRect(Math.floor(.25 * aS.k) + aC8, Math.floor((aS.k - aC7) / 2), aS.k - 2 * aC8, aC7), oy.fillRect(Math.floor(j - 1.25 * aS.k) + aC8, Math.floor((aS.k - aC7) / 2), aS.k - 2 * aC8 - aC8 % 2, aC7), oy.fillRect(
				Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - aC7) / 2), aC8, aC7, aS.k - 2 * aC8 - aC8 % 2), a7i = bD.gw.jD(aE.fK, aS.i5()), oy.fillText(bD.tR.a2h(a7i) + " (" + bD.tR.a7b(100 * jE, +(jE < .1)) + ")", Math.floor(.5 * j), aC9)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		jE = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a5V(arg1);

	function aCE(a5q) {
		return !(1 < a5q && 1 === jE || (1 < a5q && a5q * jE - jE < 1 / 1024 ? a5q = (jE + 1 / 1024) / jE : a5q < 1 && jE - a5q * jE < 1 / 1024 && (a5q = (jE - 1 / 1024) / jE), jE = bO.il(jE * a5q, 1 / 1024, 1), aC4(), 0))
	}

	function aCF(mB) {
		return jE !== (jE = bO.il((mB - fh - aC1) / (j - 2 * aC1), 1 / 1024, 1)) && (aC4(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aC4(), bi.ds = !0
	}, this.fj = 0, this.hp = !1, this.dk = function() {
		iN = !aE.hz && !aE.hj && !aE.hk, aAw = !1, jE = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.buffer.data[182].value + 1) / 1024, a7i = 0, this.hp = !1, this.resize()
	}, this.resize = function() {
		a1.a2.im() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.io), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.im() ? .65 : .389) * i.io), j += 12 - j % 12, this.k = Math.floor(j / 12)), aC1 = Math.floor(3 * this.k / 2), a9F =
			bD.sU.uE(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, y3), canvas.height = this.k, (oy = canvas.getContext("2d", {
				alpha: !0
			})).font = a9F, bD.sU.textBaseline(oy, 1), bD.sU.textAlign(oy, 1), this.aC3(), aC4()
	}, this.aC3 = function() {
		fh = a1.a2.im() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.fj = i.k - this.k - bn.a8e() * bf.gap
	}, this.nK = function() {
		aAw && (aAw = !1, aC4())
	}, this.iN = function() {
		return !(!iN || aN.hl && fh < Math.floor(bf.gap + 5.5 * this.k))
	}, this.a9t = function(aCA) {
		return !!this.iN() && fh + j > i.j - aCA - bf.gap
	}, this.a7p = function() {
		iN = !aE.hj && !aE.hk
	}, this.aBq = function() {
		iN = !1
	}, this.i5 = function() {
		return bO.il(Math.floor(1024 * jE + .5) - 1, 0, 1023)
	}, this.a5S = function(mB, mC) {
		return this.iN() && fh < mB && mB < fh + j && mC > this.fj
	}, this.ho = function(mB, mC) {
		if (!this.iN()) return !1;
		if (!(__fx.settings.keybindButtons && mC > this.fj - Math.floor(bf.gap / 4) - this.k && mC < this.fj - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(mB - fh))) {
			if (!aS.a5S(mB, mC)) return !1;
			aT.o4 = !1, ! function(tz, mB, mC) {
				if (function(mB, mC) {
						return fh < mB && mB < fh + aC1 && mC > aS.fj
					}(mB, mC)) return aCE(aC2);
				if (function(mB, mC) {
						return fh + j - aC1 < mB && mB < fh + j && mC > aS.fj
					}(mB, mC)) return aCE(1 / aC2);
				return tz.hp = !0, aCF(mB)
			}(this, mB, mC) || (bi.ds = !0)
		}
		return !0
	}, this.a5V = function(oB) {
		0 !== aE.a3O && this.iN() && aCE(oB) && (bi.ds = !0)
	}, this.a51 = function(deltaY) {
		var oB;
		return !(0 === deltaY || !this.iN()) && aCE(oB = 0 < deltaY ? (oB = 400 / (400 + deltaY)) < aC2 ? aC2 : oB : 1 / aC2 < (oB = (400 - deltaY) / 400) ? 1 / aC2 : oB)
	}, this.a4y = function(mB) {
		return !!this.hp && aCF(mB)
	}, this.a5O = function() {
		this.hp = !1
	}, this.ef = function() {
		this.iN() && a7i !== bD.gw.jD(aE.fK, this.i5()) && (aAw = !0)
	}, this.y2 = function() {
		this.iN() && (y3.drawImage(canvas, fh, this.fj), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(y3, fh, this.fj)
	}
}

function d6() {
	var canvas, oy, aCG, font, aCH = 0,
		aCI = !1,
		aCJ = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aCK = 5;

	function aCR() {
		if (aCI) {
			var aC, fa = aCJ.length,
				aC9 = Math.floor(.5 * aCG.k),
				k = fa * aC9,
				fh = Math.floor(Math.floor(aCG.fh) + .3 * aCG.j - .5),
				fj = Math.floor(Math.floor(aCG.fj) - k),
				j = Math.floor(.4 * aCG.j + 2.5);
			for (y3.fillStyle = bE.pO, y3.fillRect(fh, fj, j, k), y3.fillStyle = bE.pr, y3.fillRect(fh, fj + aCK * aC9, j, aC9), y3.fillStyle = bE.pS, y3.fillRect(fh, fj, 2, k), y3.fillRect(fh, fj, j, 2), y3.fillRect(fh + j - 2, fj, 2, k), aC =
				1; aC < fa; aC++) y3.fillRect(fh, fj + aC * aC9, j, 2);
			for (y3.fillStyle = bE.pS, bD.sU.textAlign(y3, 1), bD.sU.textBaseline(y3, 1), y3.font = bD.sU.uE(0, .6 * aC9), fh += .5 * j, aC = 0; aC < fa; aC++) y3.fillText(aCZ(aC), fh, fj + (aC + .6) * aC9)
		}
		y3.drawImage(canvas, Math.floor(aCG.fh), Math.floor(aCG.fj))
	}

	function nL(tz) {
		var fh, nz, o0, aC9;
		oy.clearRect(0, 0, Math.floor(aCG.j), Math.floor(aCG.k)), oy.fillStyle = bE.pO, oy.fillRect(0, 0, Math.floor(aCG.j), Math.floor(aCG.k)), aE.o2 && (oy.fillStyle = bE.pr, oy.fillRect(0, 0, Math.floor(.3 * aCG.j), Math.floor(aCG.k))), oy
			.fillStyle = bE.pS, oy.fillText("Hide UI", .15 * aCG.j, .5 * aCG.k), oy.fillRect(Math.floor(.3 * aCG.j - .5), 0, 2, Math.floor(aCG.k)), fh = .5 * aCG.j, oy.fillText("Replay Speed", fh, .31 * aCG.k), oy.fillText(aCZ(aCK), fh, .69 * aCG.k),
			oy.fillRect(Math.floor(.7 * aCG.j - .5), 0, 2, Math.floor(aCG.k)), tz.a8N ? (fh = Math.floor(.02 * aCG.j), tz = Math.floor(.025 * aCG.j), nz = Math.floor(.85 * aCG.j - fh - .5 * tz), o0 = Math.floor(.25 * aCG.k), aC9 = Math.floor(aCG.k) -
				2 * o0, oy.fillRect(nz, o0, fh, aC9), oy.fillRect(nz + fh + tz, o0, fh, aC9)) : function() {
				var j = Math.floor(.46 * aCG.k),
					k = Math.floor(.23 * aCG.k),
					fh = Math.floor(.85 * aCG.j - .5 * j + j / 12),
					fj = Math.floor(.5 * aCG.k - k);
				oy.beginPath(), oy.moveTo(fh, fj), oy.lineTo(fh + j, fj + k), oy.lineTo(fh, fj + (k << 1)), oy.fill()
			}(), oy.fillRect(0, 0, Math.floor(aCG.j), 2), oy.fillRect(0, 0, 2, Math.floor(aCG.k)), oy.fillRect(0, Math.floor(aCG.k) - 2, Math.floor(aCG.j), 2), oy.fillRect(Math.floor(aCG.j - 2), 0, 2, Math.floor(aCG.k))
	}

	function aCZ(aC) {
		return 5 === aC ? "Normal" : "" + aCJ[aC]
	}
	this.a8N = !1, this.dk = function() {
		aE.hj && (aCK = 5, this.a8N = !1, aCI = !1, aCG = new t4([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aCL = function() {
		return aCJ[aCK]
	}, this.a1W = function() {
		return aCG.fj
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a8N,
		fxGetSpeedIndex: () => aCK,
		fxSetSpeedIndex: index => {
			aCK = index, this.resize()
		},
		fxGetPanelTop: () => aCG && aCG.fj
	}, this.a9t = function(aCA) {
		return !!aE.hj && aCG.fh + aCG.j > i.j - aCA - bf.gap
	}, this.resize = function() {
		aE.hj && (aCG.resize(), aCG.fj -= (bn.a8e() - 1) * bf.gap, font = bD.sU.uE(0, .3 * aCG.k), (canvas = document.createElement("canvas")).width = Math.floor(aCG.j), canvas.height = Math.floor(aCG.k), (oy = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.sU.textAlign(oy, 1), bD.sU.textBaseline(oy, 1), nL(this))
	}, this.a5Y = function(aCM) {
		0 === aE.a3O || u.iN() || aCM !== aE.o2 && (aE.o2 = aCM, bk.resize(), bi.ds = !0, aE.hj) && (aCH = bi.ea + 2e3, nL(this))
	}, this.ho = function(fh, fj) {
		if (!aE.hj) return !1;
		if (fh < aCG.fh || fj < aCG.fj || fh > aCG.fh + aCG.j) return aCI && function(tz, fh, fj) {
			var fa = aCJ.length,
				aC9 = Math.floor(.5 * aCG.k),
				k = fa * aC9,
				nz = Math.floor(Math.floor(aCG.fh) + .3 * aCG.j - .5),
				k = Math.floor(Math.floor(aCG.fj) - k),
				j = Math.floor(.4 * aCG.j + 2.5);
			return aCI = !1, bi.ds = !0, fh < nz || nz + j < fh || fj < k || (aCK = aCQ(0, Math.floor((fj - k) / aC9), fa - 1), nL(tz)), !0
		}(this, fh, fj);
		if ((fh -= aCG.fh) < .3 * aCG.j) aCI = !1, this.a5Y(!aE.o2);
		else {
			if (fh < .7 * aCG.j) return aCI = !aCI, bi.ds = !0;
			this.a5a(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a5a(!0), this.a5a = function(aCO) {
		2 === aE.a3O ? (this.a5Y(!1), u.v(3)) : (aCI = !1, this.a8N = !this.a8N, this.a8N ? (aN.hl && aN.a5Z(), a1.a2.setState(1)) : aCO || aN.a9M(), bi.ds = !0, nL(this))
	}, this.aCP = function() {
		this.a8N = !1, aN.a9M(), bi.ds = !0, nL(this)
	}, this.a5H = function(fh, fj) {
		return !!aE.o2 && (0 <= aN.ho(fh, fj) || (aE.hj ? ((bi.ea > aCH || !this.ho(fh, fj)) && aT.ho(fh, fj), bi.ds = !0, aCH = bi.ea + 2e3) : aT.ho(fh, fj)), !0)
	}, this.ef = function() {
		aE.hj && aE.o2 && bi.ea > aCH - 1e3 && bi.ea < aCH && (bi.ds = !0)
	}, this.a3X = function() {
		aE.hj && (this.a8N = !1, bi.ds = !0, nL(this))
	}, this.y2 = function() {
		if (aE.hj) {
			if (aE.o2) {
				if (bi.ea > aCH) return;
				if (bi.ea > aCH - 1e3) return y3.globalAlpha = aCQ(0, (1e3 - (bi.ea - (aCH - 1e3))) / 1e3, 1), aCR(), void(y3.globalAlpha = 1)
			}
			aCR()
		}
	}
}

function cN() {
	var aCa, aCb, j, fh, fj, aCc, aCd;
	this.dk = function() {
		aCa = new Array(2), aCb = new Array(2), this.o4 = !1, aCd = aCc = jG = jF = 0, ip = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.im() ? .072 : .0502) * i.io)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aCa[aC] = document.createElement("canvas"), aCa[aC].width = j, aCa[aC].height = j, aCb[aC] = aCa[aC].getContext("2d", {
			alpha: !0
		});
		this.aC3(),
			function() {
				for (var aCu = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aCb[aC].clearRect(0, 0, j, j), aCb[aC].fillStyle = bE.pL, aCb[aC].beginPath(), aCb[aC].arc(j / 2, j / 2, j / 2 - aCu, 0, 2 * Math.PI), aCb[aC].fill(), aCb[aC]
					.lineWidth = aCu, aCb[aC].fillStyle = bE.pS, aCb[aC].strokeStyle = bE.pS, aCb[aC].strokeStyle = __fx.utils.lineColor(bE.pS), aCb[aC].beginPath(), aCb[aC].arc(j / 2, j / 2, j / 2 - aCu, 0, 2 * Math.PI), aCb[aC].stroke(), a1c(
						aCb[aC], 0, 0, j, aCu, .3, 0 === aC)
			}()
	}, this.a1V = function() {
		return -jF / ip
	}, this.a1W = function() {
		return -jG / ip
	}, this.oE = function(aCh, iv) {
		jF = ip * aCh - iv
	}, this.oF = function(aCi, iw) {
		jG = ip * aCi - iw
	}, this.ho = function(aCg, a9u) {
		return aE.o2 || ! function(aCg, a9u) {
			return Math.pow(aCg - (fh + j / 2), 2) + Math.pow(a9u - (fj + j / 2), 2) < j * j / 4 || Math.pow(aCg - (fh + j / 2), 2) + Math.pow(a9u - (fj + 2 * j), 2) < j * j / 4
		}(aCg, a9u) || bm.buffer.data[8].value ? (aI.oH() && (this.o4 = !0, aCc = aCg, aCd = a9u), !1) : a9u < fj + 1.25 * j ? this.a51(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a51(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a4y = function(aCg, a9u) {
		var aCj, aCk, iy, j1;
		return !aI.oH() || (aCj = jF, aCk = jG, jF += iy = aCc - aCg, jG += j1 = aCd - a9u, ag.a4y(iy, j1), this.aCl(), aCc = aCg, aCd = a9u, aCj !== jF) || aCk !== jG
	}, this.a51 = function(mB, mC, deltaY) {
		var oB;
		if (aI.oH()) {
			if (0 < deltaY) oB = (oB = 500 / (500 + deltaY)) < .5 ? .5 : oB;
			else {
				if (!(deltaY < 0)) return !1;
				oB = 2 < (oB = (500 - deltaY) / 500) ? 2 : oB
			}
			this.aCm(mB, mC, oB), bi.ds = !0
		}
		return !0
	}, this.aCm = function(fh, fj, fE) {
		var a5q;
		fE = a5q = (a5q = 1024 < (a5q = fE) * ip ? 1024 / ip : a5q) * ip < .125 ? .125 / ip : a5q, ag.zoom(fE, fh, fj),
			function(a5q, mB, mC) {
				ip *= a5q, jF = (jF + mB) * a5q - mB, jG = (jG + mC) * a5q - mC, aT.aCl()
			}(fE, fh, fj)
	}, this.aCl = function() {
		var aCp = i.j / 16,
			aCq = 0,
			aCr = i.k / 16,
			aCs = 0;
		jF < -i.j + aCp && (aCq = -i.j + aCp - jF), jF > ip * bV.fl - aCp && (aCq = ip * bV.fl - aCp - jF), jG < -i.k + aCr && (aCs = -i.k + aCr - jG), jG > ip * bV.fm - aCr && (aCs = ip * bV.fm - aCr - jG), jF += aCq, jG += aCs, bd.oG(), ag.aCt(
			aCq, aCs)
	}, this.aC3 = function() {
		fh = i.j - j - bf.gap, fj = Math.floor(i.k / 2 - 1.25 * j)
	}, this.y2 = function() {
		bm.buffer.data[8].value || (y3.drawImage(aCa[0], fh, fj), y3.drawImage(aCa[1], fh, Math.floor(fj + 3 * j / 2)))
	}
}

function cO() {
	var h, aCv, aCw, aCx, gap, aCy, aCz, aD0, aD1, aD2, a9F, aD3, hf, aD4, aB3, aD5, aD6;

	function aDA() {
		aCx = Math.floor(.2 * (a1.a2.im() ? .07 : .035) * i.io), aCx = a9r(a1.a2.im() ? 3 : 1, aCx);
		var aDD = i.j / (h.length + gap);
		aCx = aCx < aDD ? aDD : aCx, aB3 = Math.floor((1 - gap) * aCx), aCv = 0, aDE()
	}

	function aDE() {
		aCv = (aCv = aCv < -20 ? -20 : aCv) > (h.length - 15) * aCx ? (h.length - 15) * aCx : aCv, aCz = Math.floor(aCv / aCx), aD0 = (aD0 = aCz + Math.floor(i.j / aCx)) > h.length - 1 ? h.length - 1 : aD0, aCz = (aCz = aD0 < aCz ? aD0 : aCz) < 0 ?
			0 : aCz;
		var lr = aD0;
		aCy = aCw / h[lr];
		for (var aC = aD0 - 1; aCz <= aC; aC--) h[aC] > h[lr] && (lr = aC, aCy = aCw / Math.pow(h[aC], aD4))
	}

	function aDH(fh) {
		fh = Math.floor((aCv + i.j - fh - gap * aCx) / aCx);
		return (fh = fh < -1 ? -1 : -1 === fh ? 0 : fh > h.length - 1 ? -1 : fh) !== aD1 && (aD1 = fh, -1 === aD5 && 0 === aD1 && aU.aD7 && (aD5 = setInterval(aDI, 100)), 1)
	}

	function aDJ(aC) {
		var aDL = Math.floor(aCy * Math.pow(h[aC], aD4));
		y3.fillRect(aCv + i.j - (aC + 1) * aCx, i.k - aDL, aB3, aDL)
	}

	function aDI() {
		var h8;
		0 !== (aD1 = 8 === ab.a4b() ? -1 : aD1) ? (aD6 = (new Date).getTime(), clearInterval(aD5), aD5 = -1) : (h8 = h[1] / 864e3, -1 !== aD6 && (h8 += ((new Date).getTime() - aD6) * h[1] / 864e5, aD6 = -1), 0 < h8 && (h[0] += Math.floor(h8), bi
			.ds = !0))
	}
	this.aD7 = !1, this.dk = function() {
		aD6 = aD5 = -1, aD1 = -(aD4 = 1), this.aD8 = !1, hf = 0, aD3 = new Date, aCv = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aCw = Math.floor(.15 * i.k), aD2 = (aD2 = Math.floor((a1.a2.im() ? .018 : .0137) * i.io)) < 2 ? 2 : aD2, a9F = bD.sU.uE(1, aD2), aDA()
	}, this.aDB = function(aDC) {
		var aC;
		for (this.aD7 = !0, aC = 0; aC < aDC.length; aC++) h.unshift(aDC[aC]);
		aDA(), bi.ds = !0
	}, this.aDF = function() {
		aDE()
	}, this.a4y = function(fh, fj) {
		fj > i.k - .6 * aCw ? this.aD8 ? fh !== hf && (aCv += fh - hf, hf = fh, aDE(), aDH(fh), this.aD8 = -1 !== aD1, bi.ds = !0) : aDH(fh) && (bi.ds = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aD1 && (this.aD8 = !1, aD1 = -1, bi.ds = !0)
	}, this.a51 = function(fh, deltaY) {
		-1 !== aD1 && (aCv += Math.floor(deltaY), aDE(), aDH(fh), bi.ds = !0)
	}, this.ho = function(fh, fj) {
		this.a4y(fh, fj), -1 !== aD1 && (hf = fh, this.aD8 = !0)
	}, this.a5N = function() {
		-1 !== aD1 && (this.aD8 = !1)
	}, this.y2 = function() {
		y3.fillStyle = bE.pV;
		for (var aDM, month, eb, um, aDP, aDQ, o0, aDR, aDS, aC = aD0; aCz <= aC; aC--) aDJ(aC);
		this.aD7 && 0 === aCz && (y3.fillStyle = bE.q4, aDJ(0)), -1 !== aD1 && (y3.fillStyle = bE.pU, aDJ(aD1)), -1 !== aD1 && (y3.font = a9F, bD.sU.textBaseline(y3, 2), (eb = new Date).setTime(aD3.getTime() - 1e3 * aD1 * 60 * 60 * 24), month =
			"month", aDM = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(eb), aDM = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(eb)), aDM = aDM + ", " + eb.getUTCDate() + " " + month + " " + eb.getFullYear(), month = 1 === h[aD1] ? L(120) : L(121), month = bD.tR.a2h(h[aD1]) + " " + month, eb = Math.floor(y3.measureText(aDM).width), um = Math
			.floor(y3.measureText(month).width), aDP = Math.floor(.5 * (eb + aD2)), aDQ = (aDQ = aCv + i.j - (aD1 + 1) * aCx) < aDP ? aDP : aDQ > i.j - aDP ? i.j - aDP : aDQ, o0 = i.k - Math.floor(aCy * Math.pow(h[aD1], aD4)), aDR = Math
			.floor(1.1 * aD2), aDS = o0 > i.k - aDR ? i.k - aDR : o0, y3.fillStyle = bE.pP, y3.fillRect(i.j - um - aD2, aDS - aDR, um + aD2, aDR), y3.fillRect(aDQ - aDP, i.k - aDR, eb + aD2, aDR), y3.fillStyle = bE.pS, bD.sU.textAlign(y3, 2),
			y3.fillText(month, Math.floor(i.j - .5 * aD2), aDS), bD.sU.textAlign(y3, 1), y3.fillText(aDM, aDQ, i.k), y3.strokeStyle = bE.pW, y3.lineWidth = 1, y3.beginPath(), y3.moveTo(0, o0), y3.lineTo(i.j, o0), y3.closePath(), y3.stroke())
	}
}

function cP() {
	var a9F, j, fj, aDT, aDU, aDV, canvas, oy, aAw, a71, aDW, aDX, aDY, aDZ;
	this.fh = 0, this.k = 0, this.dk = function() {
		aDV = aE.a7x, aDX = "rgba(0,100,0,0.8)", aDY = "rgba(150,0,0,0.8)", aAw = aDW = !0, a71 = ah.hc[aE.fK], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.im() ? .305 : .24) * i.io), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), a9F = bD.sU.uE(1, Math.floor(.8 * this.k)), aDU = bD.sU.uE(1, Math.floor(.45 * this.k)), aDZ = Math.floor(.5 * this.k), bV.zt
			.font = a9F, fj = bf.gap, aDT = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, oy = canvas.getContext("2d", {
				alpha: !0
			}), bD.sU.textBaseline(oy, 1), bD.sU.textAlign(oy, 1), this.aDa()
	}, this.aBP = function() {
		return a1.a2.im() && i.j < 1.2 * i.k
	}, this.aC3 = function() {
		this.aBP() ? this.fh = i.j - j - bf.gap : this.fh = Math.floor(aW.aDb() + (i.j - aW.aDb() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.nK = function() {
		aAw && (aAw = !1, this.aDa())
	}, this.aDa = function() {
		oy.font = a9F, oy.clearRect(0, 0, j, this.k), oy.fillStyle = aDW ? aDX : aDY, oy.fillRect(0, 0, j, this.k), oy.fillStyle = bE.pU;
		var ek = this.aDc(),
			aDe = (this.aDd(), oy.fillStyle = ah.hc[aE.fK] >= af.kc(aE.fK) ? bE.q1 : bE.pS, bD.tR.a2h(a71)),
			aDe = (oy.fillText(aDe, Math.floor(j / 2), aDZ), oy.measureText(aDe).width),
			aDf = (oy.font = aDU, oy.fillStyle = 9 === ek ? bE.qf : bE.pS, af.aDg),
			aDh = "+" + aDf,
			um = oy.measureText(aDh).width,
			aDi = Math.floor(this.k / 12),
			aDe = .5 * (j + aDe) + aDi;
		(aDe + um + aDT <= j || 1e3 <= aDf && (aDh = "+" + Math.floor(aDf / 1e3) + "K", aDe + (um = oy.measureText(aDh).width) + aDT <= j)) && oy.fillText(aDh, Math.floor(aDe + .5 * um), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && oy.fillText(9 - ek, Math.floor(2 * aDT + aDi), Math.floor(.3 * this.k)), oy.fillStyle = bE.pS, __fx.utils.smoothFrame(oy, j, this.k) || (oy.fillRect(0, 0, j, 1), oy.fillRect(0, 0, 1, this.k), oy.fillRect(0, this
				.k - 1, j, 1), oy.fillRect(j - 1, 0, 1, this.k))
	}, this.aDc = function() {
		var ek = bi.kt() % 100,
			a0Y = (ek = 9 - bO.g1(ek -= ek % 10, 10), Math.floor(ek * (this.k - aDT) / 9));
		return oy.fillRect(0, a0Y, aDT, this.k - a0Y), oy.fillRect(j - aDT, a0Y, aDT, this.k - a0Y), ek
	}, this.aDd = function() {
		oy.fillRect(aDT, this.k - aDT, Math.floor((j - 2 * aDT) * ah.hc[aE.fK] / aDV), aDT)
	}, this.ef = function() {
		var h8 = aE.fK;
		bD.gw.hn(h8) && (h8 = ah.hc[h8] - ah.a70[h8], a71 !== h8 ? (aDV = a9r(h8, aDV), aDW = a71 < h8 && 10 <= h8, a71 = h8, aAw = !0) : bi.kt() % 10 == 9 && (aAw = !0))
	}, this.y2 = function() {
		0 === ah.nY[aE.fK] || aE.hz || 2 === ah.a6r[aE.fK] || y3.drawImage(canvas, this.fh, fj)
	}
}

function cQ() {
	var aDj, aDk, aDl, aDm, aDn, aDo, aDp, aDq, aDr, aDs, aDt, aDu, aDv, aDw, aDx, aDy, aDz, aE0, aE1, aE2, aE3, aE4, position, aE5, aE6, aE7, aE8, aE9, aEA = 1,
		aEB = 1,
		aEC = "";
	var leaderboardHasChanged = true;
	this.playerPos = aE.fK;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kh[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kh[aE.fK]);
	}

	function aEE() {
		aDp.clearRect(0, 0, aDj, aBe),
			aDp.fillStyle = aE9 ? bE.qO : bE.qK,
			aDp.fillRect(0, 0, aDj, aDu),
			aDp.fillStyle = bE.pO,
			aDp.fillRect(0, aDu, aDj, aBe - aDu);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aDn)
				position = (rivalsCount > aDn ? rivalsCount : aDn) - aDn;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kh[aE.fK]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aE4 = -1;
		if (__fx.leaderboardFilter.enabled && aE4 >= __fx.leaderboardFilter.filteredLeaderboard.length) aE4 = -1;
		if (__fx.leaderboardFilter.showingRivals && aE4 + position >= __fx.leaderboardFilter.rivalsData.length) aE4 = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= position && ownClanIndex < position + aDn) aEG(ownClanIndex - position, bE.pr);
			})() :
			(playerPos >= position && aEG(playerPos - position, bE.pr),
				0 !== kh[aE.fK] && 0 === position && aEG(0, bE.qW))
		),
		-1 !== aE4 && aEG(aE4, bE.pT),
			aDp.fillStyle = bE.pO,
			//console.log("drawing", aE4),
			aDp.clearRect(0, aBe - __fx.leaderboardFilter.tabBarOffset, aDj, __fx.leaderboardFilter.tabBarOffset);
		aDp.fillRect(0, aBe - __fx.leaderboardFilter.tabBarOffset, aDj, __fx.leaderboardFilter.tabBarOffset);
		aDp.fillStyle = __fx.utils.lineColor(bE.pS),
			aDp.fillRect(0, aDu, aDj, 1),
			aDp.fillRect(0, aBe - __fx.leaderboardFilter.tabBarOffset, aDj, 1),
			__fx.leaderboardFilter.drawTabs(aDp, aDj, aBe - __fx.leaderboardFilter.tabBarOffset, bE.pr),
			__fx.utils.smoothFrame(aDp, aDj, aBe, bf.a2O) || (
				aDp.fillRect(0, 0, aDj, bf.a2O),
				aDp.fillRect(0, 0, bf.a2O, aBe),
				aDp.fillRect(aDj - bf.a2O, 0, bf.a2O, aBe),
				aDp.fillRect(0, aBe - bf.a2O, aDj, bf.a2O)),
			aDp.fillStyle = bE.pS, aDp.font = aDk, bD.sU.textBaseline(aDp, 1), bD.sU.textAlign(aDp, 1), aDp.fillText(aEC, Math.floor((aDj + aDu - 22) / 2), Math.floor(aDs + aDl / 2));
		__fx.playerList.drawButton(aDp, 12, 12, aDu - 22);
		var ft, h9 = playerPos < position + aDn - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) h9 = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aDn; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ah.hO[repId], ah.a1t[repId], ah.a6r[repId]]);
					ah.hO[repId] = rivalsEntry.territory;
					ah.a1t[repId] = "[" + rivalsEntry.clan + "]";
					ah.a6r[repId] = 0;
				}
				for (aDp.font = aDm, bD.sU.textAlign(aDp, 0), ft = aDn - h9; 0 <= ft; ft--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[ft + position];
					if (rivalsEntryLeft !== undefined)
						aEH(rivalsEntryLeft.representativeId), aEI(ft, ft + position, rivalsEntryLeft.representativeId);
				}
				for (bD.sU.textAlign(aDp, 2), ft = aDn - h9; 0 <= ft; ft--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[ft + position];
					if (rivalsEntryRight !== undefined)
						aEH(rivalsEntryRight.representativeId), aEJ(ft, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hO[entry[0]] = entry[1];
					ah.a1t[entry[0]] = entry[2];
					ah.a6r[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aDn)
				position = (result.length > aDn ? result.length : aDn) - aDn;
			//if (position >= result.length) position = result.length - 1;
			for (aDp.font = aDm, bD.sU.textAlign(aDp, 0), ft = aDn - h9; 0 <= ft; ft--) {
				const pos = result[ft + position];
				if (pos !== undefined)
					aEH(mX[pos]), aEI(ft, pos, mX[pos]);
			}
			for (bD.sU.textAlign(aDp, 2), ft = aDn - h9; 0 <= ft; ft--) {
				const pos = result[ft + position];
				if (pos !== undefined)
					aEH(mX[pos]), aEJ(ft, mX[pos]);
			}
		} else {
			for (aDp.font = aDm, bD.sU.textAlign(aDp, 0), ft = aDn - h9; 0 <= ft; ft--)
				aEH(mX[ft + position]), aEI(ft, ft + position, mX[ft + position]);
			for (bD.sU.textAlign(aDp, 2), ft = aDn - h9; 0 <= ft; ft--)
				aEH(mX[ft + position]), aEJ(ft, mX[ft + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == h9 && (aEH(aE.fK), bD.sU.textAlign(aDp, 0), aEI(aDn - 1, kh[aE.fK], aE.fK), bD.sU.textAlign(aDp, 2), aEJ(aDn - 1, aE.fK)), 0 === position && (h9 = .7 * aDv / ac.get(4).height, aDp.setTransform(
			h9, 0, 0, h9, Math.floor(aDw + .58 * aDv + .5 * h9 * ac.get(4).width), Math.floor(aDs + aDl + .4 * aDv)), aDp.imageSmoothingEnabled = !0, aDp.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aDp.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aEH(player) {
		aE.iV && (aDp.fillStyle = bj.aEL[bj.aEM[player]])
	}

	function aEG(aC, aEN) {
		aDp.fillStyle = aEN, aC = aDn - 1 < aC ? aDn - 1 : aC;
		aEN = Math.floor((aC === aDn - 1 ? 2 : 0 === aC ? 1.15 : 1) * aDv), aEN = aC === aDn - 2 ? Math.floor(aDu + 9.15 * aDv) - Math.floor(aDu + 8.15 * aDv) : aEN;
		aDp.fillRect(0, Math.floor(aDu + (aC + (0 === aC ? 0 : .15)) * aDv), aDj, aEN)
	}

	function aEI(z5, a7G, aC) {
		aDp.fillText(aE0[a7G], aDw, Math.floor(aDs + aDl + (z5 + .5) * aDv)), 1 === ah.a6r[aC] && (aDp.font = "italic " + aDm);
		a7G = Math.floor(aDs + aDl + (z5 + .5) * aDv);
		aDp.fillText(ah.a1t[aC], aDx, a7G), 0 !== ah.a6r[aC] && (aDp.font = aDm), aC < aE.kw && 2 !== ah.a6r[aC] || aDp.fillRect(aDx, a7G + .35 * aEA, aDz[aC], Math.max(1, .1 * aEA))
	}

	function aEJ(z5, aC) {
		aDp.fillText(ah.hO[aC], aDy, Math.floor(aDs + aDl + (z5 + .5) * aDv))
	}
	this.dk = function() {
		var aC;
		for (u.z.uY[0] = 0, aE8 = aE7 = aE5 = 0, aE9 = aE6 = !1, aE4 = -1, aDn = a1.a2.im() ? 6 : 10, aEB = (position = 0) === (aEB = bm.buffer.data[11].value) ? 10 : 1 === aEB ? 5 : 1, aE3 = !1, aE1 = new Uint16Array(aDn + 1), aE2 =
			new Uint32Array(aDn + 1), aDr = aE.fX, mX = new Uint16Array(aDr), kh = new Uint16Array(aDr), aC = aDr - 1; 0 <= aC; aC--) mX[aC] = aC, kh[aC] = aC;
		this.resize(!0), aDz = new Uint16Array(aE.fX);
		var aED = Math.floor(aDj - aDx - aDw - aDq);
		for (aE0 = new Array(aE.fX), aDp.font = aDm, aC = aE.fX - 1; 0 <= aC; aC--) aE0[aC] = aC + 1 + ".", ah.a1t[aC] = bD.oy.a6V(ah.a48[aC], aDm, aED), aDz[aC] = Math.floor(aDp.measureText(ah.a1t[aC]).width);
		aEE()
	}, this.resize = function(dk) {
		if (aBe = a1.a2.im() ? (aDj = Math.floor(.335 * i.io), Math.floor(aDn * aDj / 8)) : (aDj = Math.floor(.27 * i.io), Math.floor(aDn * aDj / 10)), aDj = Math.floor(.97 * aDj), (aDo = document.createElement("canvas")).width = aDj, aDo
			.height = aBe, aDp = aDo.getContext("2d", {
				alpha: !0
			}), aDs = .025 * aDj, aDl = .16 * aDj, aDt = 0 * aDj, aDu = Math.floor(.45 * aDs + aDl), aDv = (aBe - aDl - 2 * aDs - aDt) / aDn,
			aDo.height = aBe += aDv, __fx.leaderboardFilter.tabBarOffset = Math.floor(aDv * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aBe - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aDj,
			aDk = bD.sU.uE(1, Math.floor(.55 * aDl)), aEA = Math.floor((a1.a2.im() ? .67 : .72) * aDv), aDm = bD.sU.uE(0, aEA), aDp.font = aDm, aDw = Math.floor(.04 * aDj), aDx = Math.floor((a1.a2.im() ? .195 : .18) * aDj), aDq = Math.floor(aDp
				.measureText("00920600").width), aDp.font = aDk, aDy = aDj - aDw, !dk) {
			aDp.font = aDm;
			for (var aC = aE.fX - 1; 0 <= aC; aC--) aDz[aC] = Math.floor(aDp.measureText(ah.a1t[aC]).width);
			aEE()
		}
		aEC = bD.oy.a6V(L(122), aDk, .96 * aDj)
	}, this.aDb = function() {
		return aDj
	}, this.nK = function(by, aEF) {
		(aEF || aE3 && (by || bi.kt() % aEB == 0)) && (aE3 = !1, aEE())
	}, this.ef = function() {
		! function() {
			for (var ft = aDr - 1; 0 <= ft; ft--) 0 === ah.nY[mX[ft]] && ! function(ft) {
				var aEV = mX[ft];
				aDr--;
				for (var aC = ft; aC < aDr; aC++) mX[aC] = mX[aC + 1], kh[mX[aC]] = aC;
				mX[aDr] = aEV, kh[mX[aDr]] = aDr
			}(ft)
		}();
		for (var aET, oH = aDr - 1, ft = 0; ft < oH; ft++) ah.hO[mX[ft]] < ah.hO[mX[ft + 1]] && (aET = mX[ft], mX[ft] = mX[ft + 1], mX[ft + 1] = aET, kh[mX[ft]] = ft, kh[mX[ft + 1]] = ft + 1);
		! function() {
			for (var eb = aE3, h9 = (aE3 = !0, kh[aE.fK] >= aDn - 1 ? aDn - 2 : aDn - 1), aC = h9; 0 <= aC; aC--)
				if (aE1[aC] !== mX[aC] || aE2[aC] !== ah.hO[mX[aC]]) return;
			(h9 != aDn - 2 || aE1[aDn] === kh[aE.fK] && aE2[aDn] === ah.hO[aE.fK]) && (aE3 = eb)
		}();
		for (var aC = aDn - 1; 0 <= aC; aC--) aE1[aC] = mX[aC], aE2[aC] = ah.hO[mX[aC]];
		aE1[aDn] = kh[aE.fK], aE2[aDn] = ah.hO[aE.fK];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.ho = function(fh, fj) {
		if (a2N(fh, fj)) {
			if (__fx.utils.isPointInRectangle(fh, fj, bf.gap + 12, bf.gap + 12, aDu - 22, aDu - 22)) __fx.playerList.display(ah.a48);
			else {
				if (fj - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fh - bf.gap);
				fh = aEX(fj);
				0 <= fh ? (aE5 = bi.ea, aE6 = !0, aE7 = aE8 = fh, bM.a5b() && (fh = aCQ(-1, aE8, aDn), aE4 !== (fh = fh === aDn ? -1 : fh)) && (aE4 = fh, aEE(), bi.ds = !0)) : (aE9 && (aE9 = !1, aEE(), bi.ds = !0), u.v(10, 0, new aEY({
					aEZ: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aEE(), bi.ds = !0
	};

	function aEX(fj) {
		return (fj -= bf.gap + aDu) < 0 ? Math.floor(fj / aDv) - 1 : fj < (aDn - 1) * aDv ? Math.floor(fj / aDv) : fj < aBe - aDu ? aDn - 1 : (fj -= aBe - aDu, aDn + Math.floor(fj / aDv))
	}

	function a2N(fh, fj) {
		return fh >= bf.gap && fh < bf.gap + aDj && fj >= bf.gap && fj < bf.gap + aBe
	}
	this.a4y = function(fh, fj) {
		var eb, aEW;
		if (__fx.utils.isPointInRectangle(fh, fj, bf.gap + 12, bf.gap + 12, aDu - 22, aDu - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fh, fj, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fh - bf.gap)) return aEW = aEX(fj), fh = a2N(fh, fj), fj = !(!(aEW < 0 && fh) || bM.a5b()), aE6 ? (eb = position, (position = aCQ(0, position += aE7 - aEW, aE.fX - aDn)) !== eb ? (aE9 = fj,
			aEW = aCQ(-1, aE7 = aEW, aDn), aE4 = aEW = aEW !== aDn && fh ? aEW : -1, aEE(), bi.ds = !0) : aE9 !== fj && (aE9 = fj, aEE(), bi.ds = !0), !0) : (aEW = (aEW = aCQ(-1, aEW, aDn)) === aDn || !fh || bM.a5b() ? -1 : aEW, (aE4 !==
			aEW || aE9 !== fj) && (aE4 = aEW, aE9 = fj, aEE(), bi.ds = !0))
	}, this.a5N = function(fh, fj) {
		if (!aE6) return !1;
		aE6 = !1;
		var aEW = aEX(fj);
		var isEmptySpace = false;
		return bM.a5b() && -1 !== aE4 && (aE4 = -1, aEE(), bi.ds = !0), bi.ea - aE5 < 350 && aE8 === aEW && -1 !== (aEW = (aEW = aCQ(-1, aEW, aDn)) !== aDn && a2N(fh, fj) ? aEW : -1) && (fh = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aEW + position] === undefined, __fx.leaderboardFilter.rivalsData[aEW + position]?.representativeId ?? aE.fK) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), mX[__fx.leaderboardFilter.filteredLeaderboard[aEW + position] ?? (isEmptySpace = true, kh[aE.fK])]) : mX[aEW + position]),
			aEW === aDn - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kh[aE.fK]) >=
			position + aDn - 1 && (fh = aE.fK), aE.hk && (aE.fK = fh, bi.ds = !0), !isEmptySpace && aE.iV && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fh, ah.a48, aE.lG), 0 === ah.nY[fh] ||
			isEmptySpace || aE.hz && !aE.lG && !aE.hj && !aE.hk && fh !== aE.fK || aI.nu(fh, 800, !1, 0)), !0
	}, this.a51 = function(fh, fj, deltaY) {
		var aEc;
		return !(aE6 || aE.o2 || (aEc = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a2N(fh, fj)) || (fh = (fh = aCQ(-1, aEX(fj), aDn)) === aDn || bM.a5b() ? -1 : fh, 0 < deltaY ? position < aE.fX - aDn && (position += Math.min(aE.fX - aDn -
			position, aEc), aE4 = fh, aEE(), bi.ds = !0) : 0 < position && (position -= Math.min(position, aEc), aE4 = fh, aEE(), bi.ds = !0), 0))
	}, this.y2 = function() {
		y3.drawImage(aDo, bf.gap, bf.gap)
	}
}

function cR() {
	var canvas, oy, fh, fj, aDL, aEd, gap, aEe, fontSize, aEf, aEg, aEh, aEi, aEj, aEk, aEl, aEm, aEn;

	function aEr() {
		oy.clearRect(0, 0, aX.j, aX.k), oy.fillStyle = bE.pP, oy.fillRect(0, 0, aX.j, aX.k), oy.fillStyle = bE.pm, fE = 0 < aEl ? aEl : aEi[4] / 1e4, oy.fillRect(0, aX.k - aDL - 1, Math.floor(fE * aX.j), aDL), oy.fillStyle = bE.pS, oy.fillStyle =
			__fx.utils.lineColor(bE.pS), __fx.utils.smoothFrame(oy, aX.j, aX.k) || (oy.fillRect(0, 0, aX.j, 1), oy.fillRect(0, 0, 1, aX.k), oy.fillRect(aX.j - 1, 0, 1, aX.k), oy.fillRect(0, aX.k - 1, aX.j, 1)), oy.fillRect(0, aX.k - aDL - 1, aX.j,
			1), oy.fillStyle = bE.pS;
		for (var fE, aEt, eb = 0, aC = 0; aC < aEh.length; aC++) aEj[aC] ? (bD.sU.textAlign(oy, 0), aEt = Math.floor((aEd - aDL + 2 * aEe) * (aC - eb + 1) / (aEh.length + 1) - .7 * aEe), oy.fillText(aEh[aC], gap, aEt), bD.sU.textAlign(oy, 2), 5 ===
			aC && 0 !== ah.nY[aE.fK] && ah.hc[aE.fK] >= af.kc(aE.fK) ? (oy.fillStyle = bE.qU, oy.fillText(aEp(aC), aX.j - gap, aEt), oy.fillStyle = bE.pS) : oy.fillText(aEp(aC), aX.j - gap, aEt)) : eb++
	}

	function aEp(aC) {
		return aC < 3 ? aEi[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.tR.a7b(aEi[aC] / 100, 2) : aC < 7 ? bD.tR.a2h(aEi[aC]) : aC === 7 ? aX.aEu(aEi[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hO, aE.fK) : __fx.utils.getDensity(aE.fK)
	}

	function aEo() {
		ah.hO[aE.fK] !== aEi[6] && (aEi[6] = ah.hO[aE.fK], aEf++)
	}
	this.dk = function() {
		aEl = aEm = 0, (aEg = new Array(8))[0] = L(123), aEg[1] = aE.lG ? L(26) : L(124), aEg[2] = L(125), aEg[3] = L(126), aEg[4] = L(127), aEg[5] = L(128, 0, "Interest"), aEg[6] = L(129), aEg[7] = L(130),
			aEg.push("Max Troops", "Density"), // add aEg
			(aEh = new Array(aEg.length)).fill(""), (aEi = new Array(aEg.length))[0] = aE.lG ? 0 : aE.kw, aEi[1] = aE.lG ? am.lS : aE.lI, aEi[2] = aE.a3Q, aEi[3] = 0, aEi[4] = bO.g1(1e4 * ah.hO[0], Math.max(aE.kg, 1)), aEi[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.g1(700 * aE.data.iIncomeValue, 64) : bO.g1(700 * aE.data.iIncomeData[aE.fK], 64), aEi[6] = 0, aEo(), aEi[7] = 0, aEk = aEp(6), (aEj = new Array(aEg.length)).fill(!0), aEn = 0, aEn =
			aE.lG ? (aEj[0] = !1, aEj[2] = !1, aEj[3] = !1, 3) : (aEj[3] = !1, 1), aEf = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.im() ? .1646 : .126) * 1.25 * i.io), this.k = Math.floor(1.18 * this.j), aDL = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aEe = .04 * this.j, aEd = this.k, this.k -= Math.floor(aEn * (this.k -
			2 * aDL) / aEg.length), fontSize = Math.floor(.7 * (aEd - aDL) / aEg.length);
		var a9F = bD.sU.uE(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(a9F, j) {
				for (var aC = 0; aC < aEh.length; aC++) aEh[aC] = bD.oy.a6V(aEg[aC], a9F, j)
			}((oy = canvas.getContext("2d", {
				alpha: !0
			})).font = a9F, .575 * this.j), bD.sU.textBaseline(oy, 1), oy.lineWidth = 1, this.a7q(), this.aC3(), aV.aC3(), aEr()
	}, this.aC3 = function() {
		fh = i.j - this.j - bf.gap
	}, this.aEs = function() {
		fj = bf.gap
	}, this.a7q = function() {
		fj = bf.gap + (aV.aBP() && 0 !== ah.nY[aE.fK] && !aE.hz ? aV.k + bf.gap : 0)
	}, this.nK = function(by) {
		(by || 100 <= aEf) && (aEf = 0, aEr())
	}, this.a8b = function() {
		return aEi[7]
	}, this.aEu = function(value) {
		var lr = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lr) / 1e3);
		return value < 10 ? lr + ":0" + value : lr + ":" + value
	}, this.ef = function() {
		var aF5, per;
		aEj[0] && aE.a3R - aE.a3Q !== aEi[0] && (aEi[0] = aE.a3R - aE.a3Q, aEf++), am.lS - aEi[0] !== aEi[1] && (aEi[1] = am.lS - aEi[0], aEf++), this.nB(), (aF5 = af.aF6(aE.fK)) !== aEi[5] && (aEi[5] = aF5, aEf++), aEo(), aEi[7] += bi.aF7, aF5 =
			aEp(7), aEk !== aF5 && (aEk = aF5, aEf += 100), aF5 = aE.iV ? bk.lT() : ah.hO[mX[0]], per = bO.g1(1e4 * aF5, Math.max(aE.kg, 1)), aEi[3] = aF5, aEi[4] !== per && (aEf++, aEi[4] = per), 8 === aE.lE && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.gw.hn(aC)) return bU.a32.a3N(), 1;
				return
			}() || aEi[3] < aE.kg || ! function() {
				for (var aC = am.lS - 1; 0 <= aC; aC--)
					if (0 < ah.h2[am.lX[aC]].length) return;
				return 1
			}() || bQ.ll.aF4().length || aE.iV && bk.lT(1) < aE.kg || bU.a32.a3N()
	}, this.nB = function() {
		aEj[2] && aE.a3Q !== aEi[2] && (aEi[2] = aE.a3Q, aEf += 2 === aE.a3O ? 100 : 1)
	}, this.aF1 = function() {
		return aEi[3] === aE.kg
	}, this.aF8 = function(aC) {
		var v2, aF9, eb;
		return 2 !== aE.a3O && (aC % 2 == 1 && (aW.nK(1, 1), bi.ds = !0), aC === aE.a7z ? (aEl = 0, aEr(), !1) : (-1 !== aC || 0 !== aEm) && (aF9 = aEl, aEl = aE.hj ? aC / aE.a7z : (eb = performance.now(), 0 <= aC && (v2 = eb - 392 * aC, aEm =
			0 === aC || v2 < aEm ? v2 : aEm), 1 < (aEl = (eb - aEm) / (392 * aE.a7z)) ? 1 : aEl), aEr(), aEl !== aF9))
	}, this.y2 = function() {
		y3.drawImage(canvas, fh, fj)
	}
}

function cS() {
	var iN, aFA, j, k, aC9, aFB, aFC, aBQ, canvas, nl, aFD;

	function a1W() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.dk = function() {
		aFD = iN = !1, aC9 = .61, aFB = .07, aFC = .09, nl = aBQ = k = 0
	}, this.resize = function() {
		var oy, nz, ek, aFI, aFJ, a9K;
		iN && (j = aFE(j = a1.a2.im() ? Math.floor(.69 * i.io) : Math.floor(.5 * i.io), a9r(i.j - 2 * bf.gap, 10)), j = aFE(j, Math.floor(3.57 * a9r(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, oy = canvas.getContext("2d", {
				alpha: !0
			}), nz = Math.floor(1 + k / 40), oy.clearRect(0, 0, j, k), oy.fillStyle = bE.pP, oy.fillRect(nz, nz, j - 2 * nz, k - 2 * nz), oy.lineJoin = "bevel", oy.lineWidth = 2 * nz, oy.strokeStyle = bE.pS, oy.strokeRect(nz, nz, j - 2 * nz,
				k - 2 * nz), oy.imageSmoothingEnabled = !1, ek = ac.get(aFA), aFI = ek.width, a9K = (1 === aFA ? .85 : 21 === aFA ? .666 : .9) * aC9 * k / (aFJ = ek.height), oy.setTransform(a9K, 0, 0, a9K, Math.floor((j - a9K * aFI) / 2),
				Math.floor((k - a9K * aFJ) / 2)), oy.drawImage(ek, 0, 0), oy.setTransform(1, 0, 0, 1, Math.floor(j - aFC * k - aFB * k - nz), Math.floor(nz + aFB * k)),
			function(oy, fa) {
				oy.lineWidth = Math.floor(1 + k / 80), oy.strokeStyle = bE.pS, oy.beginPath(), oy.moveTo(0, 0), oy.lineTo(fa, fa), oy.moveTo(0, fa), oy.lineTo(fa, 0), oy.stroke()
			}(oy, Math.floor(aFC * k)), oy.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(g2, aFG, aBv, aFH) {
		iN || aE.hk || aFH && aFD || (aFA = aBv ? 21 : g2 ? 1 : 2, iN = aFD = !0, this.resize(), aM.te(), aS.aBq(), nl = bi.ea, aBQ = aFG ? 1 : 0)
	}, this.ef = function() {
		!iN || 1 <= aBQ || (aBQ = 1 < (aBQ += 5e-4 * (bi.ea - nl)) ? 1 : aBQ, nl = bi.ea, bi.ds = !0)
	}, this.ho = function(fh, fj) {
		return !(!iN || aBQ <= 0 || (fh -= Math.floor((i.j - j) / 2), fj -= a1W(), fh < 0) || fj < 0 || j < fh || k < fj || (j - k / 3 < fh && fj < k / 3 && (iN = !1, bi.ds = !0), 0))
	}, this.y2 = function() {
		!iN || aBQ <= 0 || (y3.globalAlpha = aBQ, y3.drawImage(canvas, Math.floor((i.j - j) / 2), a1W()), y3.globalAlpha = 1)
	}
}

function dT() {
	var aFL, aFM = new Uint8Array(5),
		aFN = new Uint8Array(5);
	this.aFO = new aFP, this.dk = function() {
		for (var g2 = bm.buffer.data[119].value, aC = 0; aC < aFM.length; aC++) aFM[aC] = (g2 >> 2 * aC) % 4
	}, this.a8C = function() {
		aFL = [L(131), "", L(132, [ba.aFQ[28]]), L(133, [ba.aFQ[26]]), L(134, [ba.aFQ[0]])], this.aFO.dk()
	}, this.ef = function() {
		this.aFO.ef()
	}, this.a8y = function(id) {
		1 < id && bM.sw() || ! function(eJ) {
			if (3 === aFM[eJ] || 1 === aFN[eJ]) return;
			if (aFN[eJ] = 1, !(Math.random() < .6)) {
				aFM[eJ]++;
				for (var g2 = 0, aC = 0; aC < aFM.length; aC++) g2 += aFM[aC] << 2 * aC;
				bm.qy.qz(119, g2)
			}
			return 1
		}(id) || aO.a9x(aFL[id])
	}
}

function aFP() {
	var aFS;
	this.dk = function() {
		aFS = !1
	}, this.ef = function() {
		var h8;
		if (function() {
				if (!aFS) {
					if (bi.kt() % 30 != 9) return;
					if (!bD.gw.mT(90)) return;
					aFS = !0
				}
				return 1
			}() && (! function() {
				var sM = aO.aAI(956);
				if (sM) {
					if (bD.gw.lu(sM.player)) return 1;
					aO.aAH(956, 0)
				}
				return
			}() && (-1 === (h8 = (aE.iV ? function() {
				var id = bk.lV(),
					fa = am.lS;
				if (bj.lJ[id])
					for (var w9 = am.lX, fY = bj.fY, aC = 0; aC < fa; aC++) {
						var h8 = w9[aC];
						if (fY[h8] !== id) return h8
					} else if (1 < fa) return mX[fa - 1];
				return -1
			} : function() {
				for (var aFa = am.lS, lq = am.lX, aFb = kh, aC = 0; aC < aFa; aC++) {
					var h8 = lq[aC];
					if (0 !== aFb[h8]) return h8
				}
				return -1
			})()) ? ! function() {
				var sM = aO.aAI(957);
				if (sM && sM.a9n) {
					if (ad.fR(sM.a9n.fM << 2)) return 1;
					aO.aAH(957, 0)
				}
				return
			}() : (aO.a1s(0, L(135, [ah.a1t[h8]]), 956, h8, bE.pS, bE.pP, -1, !0), 0)))) {
			var fa = ap.ja.m6;
			if (0 !== fa)
				for (var buffer = ap.ja.buffer, aC = 0; aC < fa; aC++) {
					var fM = buffer[aC];
					if (ad.fR(fM << 2)) return void aO.a1s(0, L(136, [bP.fi(fM), bP.fk(fM)]), 957, 0, bE.pS, bE.pP, -1, !0, void 0, {
						ft: 1,
						fM: fM
					})
				}
		}
	}
}

function dU() {
	this.aFc = new aFd, this.dk = function() {
		this.aFc.resize()
	}
}

function aFd() {
	this.resize = function() {
		var aC, aFe = document.head.querySelector("style#ss");
		if (aFe)
			for (aC = aFe.sheet.cssRules.length - 1; 0 <= aC; aC--) aFe.sheet.deleteRule(0);
		else(aFe = document.createElement("style")).id = "ss", document.head.appendChild(aFe);
		var aCH = "::-webkit-scrollbar",
			aFf = bD.sU.sd(bf.uG),
			iX = bD.sU.sd(Math.max(bD.sU.tg(.012), 8));
		try {
			aFe.sheet.insertRule(aCH + "{width:" + iX + ";height:" + iX + ";}", aFe.sheet.cssRules.length), aFe.sheet.insertRule(aCH + "-thumb{background-color:white;}", aFe.sheet.cssRules.length), aFe.sheet.insertRule(aCH +
				"-track{background:" + bE.pO + ";}", aFe.sheet.cssRules.length), aFe.sheet.insertRule(aCH + "-track:horizontal{border-top:" + aFf + " solid white;}", aFe.sheet.cssRules.length), aFe.sheet.insertRule(aCH +
				"-track:vertical{border-left:" + aFf + " solid white;}", aFe.sheet.cssRules.length), aFe.sheet.insertRule(aCH + "-button{display:none;}", aFe.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aFe.sheet.cssRules.length - 1; 0 <= aC; aC--) aFe.sheet.deleteRule(0)
		}
	}
}

function dS() {
	this.aFg = !1, this.oP = !1, this.a7u = !1, this.aFh = [0, 0, 0, 0], this.render = function() {
		var nz, o0, oC, oD;
		this.a7u = this.a7u || this.oP, (this.oP || this.aFg && this.a7u) && (nz = bd.aFi[0], o0 = bd.aFi[1], oC = bd.aFi[2], oD = bd.aFi[3], nz = nz < this.aFh[0] ? this.aFh[0] : nz, o0 = o0 < this.aFh[1] ? this.aFh[1] : o0, oC = oC > this.aFh[
				2] ? this.aFh[2] : oC, oD = oD > this.aFh[3] ? this.aFh[3] : oD, this.oP = !1, this.aFg = !1, nz === this.aFh[0] && o0 === this.aFh[1] && oC === this.aFh[2] && oD === this.aFh[3] ? this.a7v() : nz <= oC && o0 <= oD && a8E
			.putImageData(a8F, 0, 0, nz, o0, oC - nz + 1, oD - o0 + 1))
	}, this.a7v = function() {
		this.a7u && this.aFh[2] >= this.aFh[0] && this.aFh[3] >= this.aFh[1] && a8E.putImageData(a8F, 0, 0, this.aFh[0], this.aFh[1], this.aFh[2] - this.aFh[0] + 1, this.aFh[3] - this.aFh[1] + 1), this.a7u = !1
	}, this.a3a = function() {
		this.aFh[2] >= this.aFh[0] && this.aFh[3] >= this.aFh[1] && a8E.putImageData(a8F, 0, 0, this.aFh[0], this.aFh[1], this.aFh[2] - this.aFh[0] + 1, this.aFh[3] - this.aFh[1] + 1), this.a7u = !1
	}, this.dk = function() {
		var fh, fj;
		this.aFg = !1, this.oP = !1, this.a7u = !1, this.aFh[0] = bV.fl, this.aFh[1] = bV.fm, this.aFh[2] = this.aFh[3] = 0;
		loop: for (fh = 1; fh < bV.fl - 1; fh++)
			for (fj = bV.fm - 2; 1 < fj; fj--)
				if (1 === aFj[ad.a13(fh, fj) + 2]) {
					this.aFh[0] = fh;
					break loop
				} loop: for (fj = 1; fj < bV.fm - 1; fj++)
			for (fh = bV.fl - 2; 1 < fh; fh--)
				if (1 === aFj[ad.a13(fh, fj) + 2]) {
					this.aFh[1] = fj;
					break loop
				} loop: for (fh = bV.fl - 2; 0 < fh; fh--)
			for (fj = bV.fm - 2; 1 < fj; fj--)
				if (1 === aFj[ad.a13(fh, fj) + 2]) {
					this.aFh[2] = fh;
					break loop
				} loop: for (fj = bV.fm - 2; 0 < fj; fj--)
			for (fh = bV.fl - 2; 1 < fh; fh--)
				if (1 === aFj[ad.a13(fh, fj) + 2]) {
					this.aFh[3] = fj;
					break loop
				}
	}
}

function L(value, aFk, ya, aFl) {
	var sB = "number" == typeof value ? bA.aFm[value] : value;
	if (ya && bA.aFn() && (sB = ya), !aFk) return aFl ? sB.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : sB;
	for (var fa = aFk.length, aC = 0; aC < fa; aC++)
		for (var ft = 0; ft < 3; ft++) sB = sB.replace("{" + (10 * ft + aC) + "}", aFk[aC]);
	return sB
}

function c6() {
	this.data = new aFo;
	var aFp = (new aFq).L84,
		aFs = (this.aFm = aFp, !(this.aFr = "en"));
	this.dk = function() {
		var sB, h;
		aFs = !1, ("en" === (sB = bm.buffer.data[12].value).split("-")[0].toLowerCase() ? (bA.aFm = aFp, bA.aFr = sB, 1) : bm.buffer.data[12].value === bm.buffer.data[145].value && 0 < bm.buffer.data[146].value && (sB = bm.buffer.data[146].value,
			(h = bm.sl.ym(sB, !1)).length === sB) && !!bD.sc.a66(h) && function(h) {
			for (var fa = h.length, k = 0; k < fa; k++) h[k] = h[k].replace("&#39;", "'");
			var aFy = bm.sl.ym(fa, !0);
			if (fa !== aFy.length) return !1;
			if (!bD.sc.a66(aFy)) return !1;
			for (var lr = aFp.length, aDC = new Array(lr), aFz = lr === fa, h3 = Math.min(fa, lr), aC = 0; aC < lr; aC++)
				if (aDC[aC] = aFp[aC], aC < fa && aFy[aC] === aDC[aC]) aDC[aC] = h[aC];
				else {
					aFz = !1;
					for (var fu = 0; fu < h3; fu++)
						if (aFy[fu] === aDC[aC]) {
							aDC[aC] = h[fu];
							break
						}
				} return bA.aFm = aDC, bA.aFr = bm.buffer.data[12].value, aFz
		}(h)) || (aFs = !0)
	}, this.dm = function() {
		bj.dl(), aF.dl(), bh.dl(), bg.dl(), aP.dk(), br = new e9
	}, this.aFn = function() {
		return this.aFm === aFp || !aFp.length
	}, this.aG0 = function() {
		var aG1;
		return !!aFs && (aFs = !1, 0 !== aFp.length) && (aG1 = bm.buffer.data[12].value, b1.eh.aG2(0, aG1.slice(0, 20)), !0)
	}, this.aG3 = function(h) {
		h.length !== aFp.length ? 8 === u.ug && u.a4f().aG4(30, 0, 1) : (this.aFm = h, this.aFr = bm.buffer.data[12].value, bm.qy.qz(145, this.aFr), bm.qy.qz(146, h.length), bm.sl.ys(h, !1), bm.sl.ys(aFp, !0), 8 === u.ug ? u.a4f().aG4(30) : 0 ===
			ab.a4b() && 5 === u.ug && u.z.aG5())
	}, this.aG6 = function() {
		var yv, h = navigator.languages;
		return h && h.length ? (yv = Math.max(bA.data.aG7(h[0]), 0), 1 === h.length ? [yv, yv] : [yv, Math.max(bA.data.aG7(h[1]), 0)]) : [0, 0]
	}
}

function aFo() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aG8 = function() {
		for (var aG9 = [], h = this.h, fa = h.length, aC = 0; aC < fa; aC++) aG9.push(h[aC]);
		var aGA = bm.buffer.data[12].ya;
		for (aC = 0; aC < fa; aC++)
			if (aG9[aC] === aGA) {
				aG9.splice(aC, 1), fa--;
				break
			} aG9.sort(), fa++, aG9.unshift(aGA);
		try {
			if ("undefined" == typeof Intl) return aG9;
			for (aC = 0; aC < fa; aC++) {
				var sB = new Intl.DisplayNames([aG9[aC]], {
					type: "language"
				}).of(aG9[aC]);
				sB !== aG9[aC] && (aG9[aC] = aG9[aC] + ": " + sB)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aG9
	}, this.aGC = function(aGD) {
		for (var sB = bm.buffer.data[12].value, fa = aGD.length, aC = 0; aC < fa; aC++)
			if (sB === aGD[aC].split(":")[0]) return aC;
		return 0
	}, this.aG7 = function(aGE) {
		if (aGE && !(aGE.length < 2)) {
			aGE = aGE.split("-")[0].toLowerCase();
			for (var h = this.h, fa = h.length, aC = 0; aC < fa; aC++)
				if (aGE === h[aC]) return aC
		}
		return -1
	}
}

function aFq() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Lobby", "Player", "Players", "Propaganda", "Close {button}", "Report Abuse", "You earned {10} gold!",
		"{0} earned {11} gold!", "Team {0}", "Team {0} won the game!", "This game will be stored here: {0}", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more",
		"You earned {10} gold.", "You earned {10} points.", "Clan {0} gained {11} points. ✨", "You earned {10} clan points.", "You earned an additional {10} gold because you played for {1}.", "Back", "Error", "Error {10}", "Not Enough Gold!",
		"You need more gold to perform this action.", "Quit Game", "More", "This is a contest!", "Accept", "1 spectator joined the game.", "{10} spectators joined the game.", "You conquered {0}. 🔥", "You were conquered by {0}.",
		"Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}",
		"{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}",
		"Humans won.", "The Resistance", "The zombies won.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.",
		"You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.",
		"{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land", "Contest", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "{0} called the peace vote.",
		"{0} voted for peace.", "{0} rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.",
		"Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!", "You are leaving Territorial.io.", "The game could not start for you. Your selection was removed.", "🔑 Show Account",
		"🚩 Report Abuse", "💬 Mention", "👁 Stop Observing", "👁 Observe", "🤝 Stop Joining With", "🤝 Join With", "🛡 Join Clan", "Loading", "{0} defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp",
		"White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles",
		"Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ",
		"Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Sell Account", "Asking Price:", "Account to receive the gold:", "Publish Offer", "Buy This Account", "Buy",
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
		"Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Elo", "Clan", "Rating",
		"Leader", "Time Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search",
		"Quantity", "Account Name Search", "Chat", "Overview", "Join", "Login", "The only official domain is territorial.io", "If you log in on a different website, your account may be stolen!",
		"If you play with the official Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}", "Procedural Map", "Realistic Map", "Custom Map",
		"Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Selectable Name", "📰 Propaganda", "Links", "Propaganda Text", "Reset", "Language", "Launch Campaign", "Gold Investment",
		"Launch", "Account Recovery", "Request Email", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct", "Via Proxy",
		"Highlighting", "Intensity", "Shortcut Keys", "Spawning", "Manual Spawn", "🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "⚔️ Join Lobby 2", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings",
		"Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "fetching data...",
		"This replay does not exist.", "The replay could not be loaded.", "Replay Error", "Warning", "Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer",
		"Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down",
		"Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss",
		"Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green",
		"Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship intercepted!", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function dq() {
	var fh, fj, k, vZ, aGF, aGG, aGH, aGI, aGJ, j, a6j, a3s;
	this.iN = !1, this.dk = function(sB, aGK) {
		if (1 === a1.id && 13 <= a1.e4 && a1.e4 < 18) return aGK ? void(a6j = sB) : a6j !== sB ? void 0 : void a1.yk.saveString(200, sB);
		aGK && (a6j = sB, (a3s = document.createElement("a")).appendChild(document.createTextNode(a6j)), this.iN = !0, a3s.title = a6j, a3s.target = "_blank", a3s.href = a6j, a3s.style.textAlign = "center", a3s.style.color = bE.pS, a3s.style
			.position = "absolute", a3s.style.padding = "0px", a3s.style.margin = "0px", this.resize(), document.body.appendChild(a3s), bi.ds = !0)
	}, this.te = function() {
		return !(!this.iN || (u.removeChild(document.body, a3s), this.iN = !1))
	}, this.ho = function(iv, iw) {
		return !!this.iN && ((iv < fh || iw < fj || fh + j < iv || fj + k < iw || fh + j - vZ < iv && iw < fj + vZ) && (bi.ds = !0, this.iN = !1, u.removeChild(document.body, a3s)), !0)
	}, this.resize = function() {
		var a9F, aGL;
		this.iN && (aGI = Math.floor(.8 * (a1.a2.im() ? i.j > i.k ? .6 : .55 : .4) * i.io), vZ = Math.floor(.15 * aGI), aGF = Math.floor(.35 * vZ), aGG = Math.floor(.5 * vZ), aGH = Math.floor(2.5 * aGG), k = vZ + aGF + 3 * aGG, a9F = bD.sU.uE(1,
			aGF / i.l), aGJ = Math.floor(i.l * aR.measureText(a6j, a9F)), aGL = j = (aGI < aGJ ? aGJ : aGI) + 2 * aGH, j = Math.min(j, i.j - 2 * (a1.a2.im() ? 2 : 1) * bf.gap), a9F = bD.sU.uE(1, j / aGL * aGF / i.l), aGJ = Math.floor(i
			.l * aR.measureText(a6j, a9F)), fh = Math.floor((i.j - j) / 2), fj = Math.floor((i.k - k) / 2), a3s.style.font = a9F, a3s.style.top = Math.floor((fj + 1.4 * aGG + vZ) / i.l) + "px", a3s.style.left = Math.floor((fh + (j -
			aGJ) / 2) / i.l) + "px")
	}, this.y2 = function() {
		this.iN && (y3.fillStyle = bE.pP, y3.fillRect(fh, fj + vZ, j, k - vZ), y3.fillStyle = bE.qh, y3.fillRect(fh, fj, j, vZ), y3.fillStyle = bE.pS, y3.lineWidth = bf.a2O, y3.strokeStyle = bE.pS, y3.strokeRect(fh, fj, j, k), y3.fillRect(fh,
			fj + vZ, j, bf.a2O), y3.font = bD.sU.uE(1, .48 * vZ), bD.sU.textAlign(y3, 1), bD.sU.textBaseline(y3, 1), y3.fillText(L(137), Math.floor(fh + (j - .5 * vZ) / 2), Math.floor(fj + .55 * vZ)), aN.a9R(Math.floor(fh + j - .8 * vZ),
			Math.floor(fj + .25 * vZ), Math.floor(.5 * vZ)), y3.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dp() {
	var gap, aEg, fh = [0, 0, 0, 0, 0],
		fj = [0, 0, 0, 0, 0],
		oB = [1, 1, 1, 1, 1],
		g2 = [!0, !0, !0, !1, !1],
		ek = (this.gN = [!0, !0, !0, !1, !1], null);
	this.aGM = function(a6H, aGN) {
		ek = a6H, g2 = aGN, aEg = [bN.aGO, bN.a4X, bN.aGP, bN.aGP, bN.aGQ], this.dk()
	}, this.dk = function() {
		if (ac.v6()) {
			var aC, ul = Math.floor((a1.a2.im() ? .261 : .195) * i.io),
				um = Math.floor(.9 * ul),
				aC9 = Math.floor(.17 * um);
			if (gap = a1.a2.im() ? 2 * bf.gap : bf.gap, oB[0] = ul / ek[0].width, oB[1] = um / ek[1].width, oB[2] = aC9 / ek[2].height, oB[3] = aC9 / ek[3].height, oB[4] = aC9 / ek[4].height, oB[2] *= 1.7, oB[3] *= 1.07, fh[0] = gap, fh[1] = gap,
				fh[2] = gap, fh[3] = gap, fh[4] = Math.floor(2 * gap + oB[3] * ek[3].width), fj[0] = gap, fj[1] = fj[0] + gap + oB[0] * ek[0].height, fj[2] = fj[1] + gap + oB[1] * ek[1].height, fj[3] = fj[2] + gap + oB[2] * ek[2].height, fj[4] =
				fj[3], !g2[0])
				for (aC = 0; aC < 5; aC++) fj[aC] -= oB[0] * ek[0].height + gap;
			if (!g2[1])
				for (aC = 2; aC < 5; aC++) fj[aC] -= oB[1] * ek[1].height + gap
		}
	}, this.iN = function() {
		return !(7 === ab.a4b() && a1.a2.im())
	}, this.ho = function(iv, iw) {
		if (ek && this.iN())
			for (var aC = g2.length - 1; 0 <= aC; aC--)
				if (g2[aC] && this.gN[aC] && fh[aC] < iv && fj[aC] < iw && iv < fh[aC] + oB[aC] * ek[aC].width && iw < fj[aC] + oB[aC] * ek[aC].height) return u.v(9, u.ug, new aGR(L(138), bD.sU.a6i(aEg[aC]))), !0;
		return !1
	}, this.y2 = function() {
		if (ek && this.iN()) {
			var aC;
			for (y3.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) g2[aC] && this.gN[aC] && (y3.setTransform(oB[aC], 0, 0, oB[aC], fh[aC], fj[aC]), y3.drawImage(ek[aC], 0, 0));
			y3.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dd() {
	this.aGS = 0, this.aGT = null, this.wo = null, this.sP = null, this.ll = null, this.z = null, this.xE = null, this.wm = null, this.message = null, this.aGU = null, this.td = null, this.aGV = null, this.aGW = new aGX, this.wK = new aGY, this.f7 =
		0, this.aD3 = 0, this.dk = function() {
			this.aD3 = bi.ea, this.aGS = bJ.f1.f2(bm.buffer.data[105].value, 5), this.wo = new aGZ, this.sP = new aGa, this.ll = new aGb, this.z = new aGc, this.xE = new aGd, this.wm = new aGe, this.message = new aGf, this.aGU = new aGg, this.td =
				new aGh, this.aGV = new aGi, bs.dk(), this.f7 = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.f5()
		}, this.x8 = function() {
			this.wK.aGj(), this.td && this.td.x8(), this.aGT = null, this.wo = null, this.sP = null, this.ll = null, this.z = null, this.xE = null, this.wm = null, this.message = null, this.aGU = null, this.td = null, this.aGV = null, this.f7 = 0, bs
				.x8(), a1.a2.setState(0)
		}
}

function aGZ() {
	function aGl() {
		bq.z.aGm += 29 === u.ug && 1 === bq.z.aGn
	}

	function aHH(self, kC, h3) {
		for (var h = self.w9.splice(kC, h3), aC = 0; aC < h.length; aC++) aH7(self, h[aC]);
		aGl()
	}

	function aH7(self, h8) {
		var self = self.wp,
			p4 = self.pop();
		p4 !== h8 && ((self[h8.aGt] = p4).aGt = h8.aGt)
	}
	this.w9 = [], this.wp = [], this.aGk = [], this.aGo = function(ue, username, wy, a7G, aGp, elo, color, zF, aGq, code, ws, wv) {
		username = this.aGs(ue, username, wy, a7G, aGp, elo, color, zF, aGq, code);
		username.ws = ws, username.wv = wv, this.w9.push(username), username.aGt = this.wp.length, this.wp.push(username), bq.aGS === ue && (bq.aGT = username), bq.aGV.aGu(ue) && (username.x0 = 1), bq.td.aGv(ue), aGl()
	}, this.aGs = function(ue, username, wy, a7G, aGp, elo, color, zF, aGq, code) {
		return {
			ue: ue,
			username: code ? __fx.nameFilter.filter(username) : "Player " + bI.f1.a2h(ue, 2),
			aGw: __fx.nameFilter.filter(username),
			wy: wy,
			a7G: a7G,
			aGp: aGp,
			elo: elo,
			color: color,
			zF: zF,
			aGq: aGq
		}
	}, this.aGx = function(eJ, wy, a7G, aGp, elo, zF, color) {
		eJ = this.w9[eJ];
		eJ.wy = wy, eJ.a7G = a7G, eJ.aGp = aGp, eJ.elo = elo, eJ.zF = zF, eJ.color = color, bq.td.aGv(eJ.ue), aGl()
	}, this.aGy = function(eJ, code) {
		eJ = this.w9[eJ];
		1 === code && (eJ.username = eJ.aGw), bq.td.aGv(eJ.ue), aGl()
	}, this.aGz = function(eJ, aH0) {
		var eJ = this.w9[eJ],
			aH1 = eJ.username,
			aCM = eJ.username !== eJ.aGw,
			aH2 = "Redacted " + bI.f1.a2h(eJ.ue, 2);
		eJ.aGw = aH0 ? "[" + bD.tR.a4B(eJ.aGw) + "] " + aH2 : aH2, aCM || (eJ.username = eJ.aGw), aH1.indexOf("Redacted") < 0 && (eJ.aH3 = aH1), bq.td.aGv(eJ.ue), aGl()
	}, this.aH4 = function(eJ, username) {
		var eJ = this.w9[eJ],
			aCM = eJ.username !== eJ.aGw;
		eJ.aGw = username, aCM || (eJ.username = username), eJ.ue === bq.aGS && bq.ll.aH5(username), bq.td.aGv(eJ.ue), aGl()
	}, this.aH6 = function(eJ) {
		eJ = this.w9.splice(eJ, 1)[0];
		aH7(this, eJ), this.aGk.push(eJ), 1e3 < this.aGk.length && this.aGk.shift(), aGl()
	}, this.aH8 = function(eJ, target, ws, wv) {
		var w9 = this.w9,
			eJ = w9.splice(eJ, 1)[0];
		w9.splice(target, 0, eJ), !eJ.ws && ws && bq.aGV.join(eJ), eJ.ws = ws, eJ.wv = wv, aGl()
	}, this.aH9 = function(ws) {
		for (var w9 = this.w9, fa = w9.length, aC = 0; aC < fa; aC++)
			if (w9[aC].ws === ws) return aC;
		return fa
	}, this.aHA = function(kC) {
		for (var w9 = this.w9, fa = w9.length, ws = kC < fa ? w9[kC].ws : 0, aC = kC; aC < fa && w9[aC].ws === ws && !w9[aC].wv;) aC++;
		return aC
	}, this.aHB = function(kC, aHC, aHD) {
		for (var aHE = this.aHA(kC), h = [], aC = 0; aC < aHC; aC++) aHD && 511 === aHD[aC] || h.push(this.w9[aHE + aC]);
		return h
	}, this.aHF = function(kC, h3, aHC, aHD) {
		for (var aHG = this.aHB(kC, aHC, aHD), aC = aHG.length - 1; 0 <= aC; aC--) aHH(this, this.w9.indexOf(aHG[aC], kC), 1);
		aHH(this, kC, h3)
	}, this.aHI = function(ws) {
		for (var w9 = this.w9, aHJ = 0; aHJ < w9.length && w9[aHJ].ws === ws;) aHJ++;
		for (var left = w9.splice(0, aHJ), aC = 0; aC < aHJ; aC++) left[aC].ws = 0, left[aC].wv = 0, w9.push(left[aC]);
		aGl()
	}, this.aHK = function(ue) {
		for (var w9 = this.w9, lr = w9.length, ft = 0; ft < lr; ft++)
			if (ue === w9[ft].ue) return w9[ft];
		return null
	}
}

function aGa() {
	this.sP = [], this.wN = 0, this.wO = 0, this.aHL = 0;
	var aHN = this.aHM = 0,
		aHO = 0;
	this.aHP = function() {
		for (var self, fa = bK.rc(4), sP = new Array(fa), aC = 0; aC < fa; aC++) sP[aC] = {
			id: bK.rc(13),
			wU: bK.rc(12),
			h3: bK.rc(16),
			aHC: bK.rc(16),
			nT: bK.rc(10),
			fG: bK.rc(6),
			mapSeed: bK.rc(14),
			w7: bK.rc(4),
			wY: bK.rc(1)
		};
		this.sP = sP, __fx.lobbyReminders.setRooms(this.sP), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aHR({
				id: 7,
				s: text
			})
		}), !(self = this).wN || 0 <= self.wr(self.wN) || (self.wN = 0, self.wO = 0, bq.message.aHR({
			id: 7,
			s: L(139)
		}))
	}, this.wr = function(id) {
		for (var sP = this.sP, aC = sP.length - 1; 0 <= aC; aC--)
			if (sP[aC].id === id) return aC;
		return -1
	}, this.aHS = function() {
		return 1 === aHN
	}, this.aHT = function(id) {
		return 0 < id && 0 < this.sP.length && this.sP[0].id === id
	}, this.aHU = function() {
		return this.aHT(this.wN)
	}, this.click = function(eJ, wv) {
		eJ = this.sP[eJ];
		wv = wv ? 1 : 0, eJ && (eJ.id === this.wN && wv === this.wO ? this.select(0, 0) : this.select(eJ.id, wv))
	}, this.select = function(id, wv) {
		this.wN = id, this.wO = id ? wv : 0, this.aHL = this.aHM = 0, aHN = 1, aHO++, b1.aHV.aHW(4, {
			ws: id,
			wv: this.wO
		}), u.a8c(29).aHX()
	}, this.aHY = function(id, wv) {
		0 === (aHO = Math.max(aHO - 1, 0)) && (this.wN = id, this.wO = wv)
	}, this.yQ = function(ue, w7) {
		this.aHL = w7 ? ue : 0, this.aHM = w7, aHN = 1, b1.aHV.aHW(6, {
			w7: w7,
			ue: ue
		})
	}, this.aHZ = function(ue, w7) {
		return this.aHM === w7 && this.aHL === ue
	}, this.wP = function(wM) {
		return wM.h3 - wM.aHC
	}, this.wS = function(w7) {
		return w7 < 7 ? w7 + 2 + " Teams" : 7 === w7 ? "Battle Royale" : 8 === w7 ? "1v1" : 9 === w7 ? "Zombie" : "No Full-Sending"
	}, this.wV = function(wM) {
		return wM.nT < (9 === wM.w7 ? 333 : 512)
	}, this.wT = function(wU) {
		var aAm = wU % 60;
		return bO.g1(wU, 60) + ":" + (aAm < 10 ? "0" : "") + aAm
	}
}

function aGi() {
	var aHa = [],
		aHb = [],
		aHc = 0;

	function aHd(h, aAK, aHg, aHh) {
		var fa = h.length;
		if (0 === fa) return "";
		var sB = "@" + h[0];
		if (1 === fa) return sB + aAK + aHh;
		for (var aC = 1; aC < fa - 1; aC++) sB += ", @" + h[aC];
		return sB + " and @" + h[fa - 1] + aHg + aHh
	}
	this.dk = function() {
		var sB = aHd(aHb, " is", " are", " in the lobby.");
		sB.length && bq.message.aHR({
			id: 7,
			s: sB
		}), aHa = [], aHb = [], aHc = 0
	}, this.aGu = function(aHe) {
		return bq.aGS !== aHe && (aHe = bI.f1.a2h(aHe, 5), !!bm.yQ.x0(aHe)) && (aHb.push(aHe), !0)
	}, this.join = function(player) {
		bq.aGS !== player.ue && (player = bI.f1.a2h(player.ue, 5), bm.yQ.x0(player)) && aHa.push(player)
	}, this.aHf = function() {
		var aAK, aHg;
		++aHc < 3 || (aHc = 0, aAK = aHd(aHb, "", "", " entered the lobby!"), (aAK = (aHg = aHd(aHa, "", "", " joined a game!")).length ? aAK.length ? aAK + " " + aHg : aHg : aAK).length && bq.message.aHR({
			id: 7,
			s: aAK
		}), aHa = [], aHb = [])
	}
}

function aGX() {
	this.dt = function(kC, aHi, aHC) {
		var wo, aGW = bq.z.aGW,
			aHj = bq.wo.w9.slice(kC, kC + aHi),
			kC = bq.wo.aHB(kC, aHC, aGW.aHD),
			aHC = function(aHj) {
				if (__fx.customLobby.isActive()) return bq.aGT ? __fx.customLobby.getPlayerId() : -1;
				if (bq.aGT && bq.sP.aHS())
					for (var fa = aHj.length, ue = bq.aGT.ue, aC = 0; aC < fa; aC++)
						if (aHj[aC].ue === ue) return aC;
				return -1
			}(aHj.concat(kC));
		if (-1 === aHC) return (wo = bq.wo).aGk = wo.aGk.concat(aHj, kC), 1e3 < bq.wo.aGk.length && bq.wo.aGk.splice(0, bq.wo.aGk.length - 1e3), bq.z.aGm += 29 === u.ug && 1 === bq.z.aGn, !1;
		if (aGW.a86 = aHi <= aHC ? 1 : 0, aGW.a8P = kC.length, 8 === aGW.w7) {
			for (var aHn = function(aHD) {
					for (var h = [], aC = 0; aC < aHD.length; aC++) 511 !== aHD[aC] && h.push(aHD[aC]);
					return h
				}(aGW.aHD), iT = aHC - aHi, aHp = aGW.a86 ? aHn[iT] : aHC >> 1, aHq = 0, aC = aGW.a8P = 0; aC < aHn.length; aC++) aHn[aC] === aHp && (aHq += aC < iT ? 1 : 0, aGW.a8P++);
			aGW.aHr = (aGW.aHr + aHp) % 1024, 0 <= aGW.a3q && (aGW.a3q += aHp), aHC = aGW.a86 ? 2 + aHq : aHC % 2, aHj = aHj.slice(2 * aHp, 2 * aHp + 2)
		}
		return aGW.aHs = aGW.a86 ? function(aHj) {
			var sP = bq.sP;
			if (sP.aHM)
				for (var aC = 0; aC < aHj.length; aC++)
					if (aHj[aC].ue === sP.aHL) return aC;
			return 0
		}(aHj) : 0, ay.dk(aGW, aHj, aHC), !0
	}, this.aHu = function(aGW, aHj, aHl) {
		var fd = aE.data = new a80,
			aHx = (fd.spawningSeed = aGW.spawningSeed, aGW.w7 < 7 ? (fd.gameMode = 1, fd.numberTeams = aGW.w7 + 2) : 9 === aGW.w7 ? (fd.gameMode = fd.isZombieMode = 1, fd.numberTeams = 2) : (fd.gameMode = 0, fd.battleRoyaleMode = 7 === aGW.w7 ?
					0 : 10 === aGW.w7 ? 1 : 2), fd.selectedPlayer = aGW.a86 ? aGW.aHs : aHl, fd.a86 = aGW.a86, fd.a8P = aGW.a8P, fd.isContest = aGW.wY, fd.mapType = bV.aHv(aGW.fG) ? 0 : 1, bV.aHw(fd, aGW.fG), fd.mapSeed = aGW.mapSeed, fd
				.humanCount = aHj.length);
		fd.selectableSpawn = 1 === fd.gameMode || aHx < 100, fd.colorsData = new Uint32Array(aHx), fd.playerNamesData = new Array(aHx), fd.a8Q = new Uint32Array(aHx);
		for (var aC = 0; aC < aHx; aC++) fd.colorsData[aC] = aHj[aC].color, fd.playerNamesData[aC] = aHj[aC].username, fd.a8Q[aC] = aHj[aC].ue;
		if (2 === fd.battleRoyaleMode)
			for (fd.elo = new Uint16Array(aHx), aC = 0; aC < aHx; aC++) fd.elo[aC] = aHj[aC].elo;
		bw.close(), ab.setState(8), bV.a8(aGW.fG, fd.mapSeed), aE.a85(), aE.a3q = aGW.a3q, aE.a83 = 2
	}
}

function aGb() {
	var eA = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aHy = [bE.pg, bE.pg, bE.ph, bE.qC, bE.qD, bE.px, bE.qI, bE.ph, bE.qj, bE.qX, bE.qg, bE.pJ],
		aHz = [
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
		aI0 = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aIF(tU, ue, aIH) {
		for (var fu = tU.length - 1; 0 <= fu; fu--) {
			var sM = tU[fu];
			0 === sM.id && sM.ue === ue && (sM.s = "[Redacted Message]", aIH) && (sM.aII = 1)
		}
	}
	this.tZ = function(aI1) {
		var aI2, a4C;
		return aI1.id < 5 && (aI2 = "@" + bI.f1.a2h(aI1.ue, 5)), 0 === aI1.id ? aI2 + ": " + aI1.s : 1 === aI1.id ? (a4C = "@" + bI.f1.a2h(aI1.target, 5), 0 === aI1.aI3 ? 32768 <= aI1.value ? aI2 + " voted with " + (aI1.value - 32768 + 1) +
				" gold against " + a4C + " to weaken the latter's admin position. 📉" : aI2 + " voted with " + (aI1.value + 1) + " gold for " + a4C + " to strengthen the latter's admin position. 💪" : 1 === aI1.aI3 ? aI2 + " sent " + Math.floor(
					aI1.value / 100) + " 🧈 gold to " + a4C + "." : aI2 + " voted with " + (aI1.value / 10).toFixed(1) + " points for " + a4C + " to acknowledge the latter as clan leader. ✅") : 2 === aI1.id ? 0 === aI1.aI3 ? aI2 +
			" was 🔇 muted for 1 Hour." : 1 === aI1.aI3 ? "The username of " + aI2 + " was ✂️ redacted. Duration: 1 Day" : aI2 + " 👢 was kicked." : 3 === aI1.id ? aI2 + br.eM(aI1.aI3, br.eG[aI1.aI3][aI1.value]) + "@" + bI.f1.a2h(aI1.target, 5) +
			br.eO(aI1.aI3, br.eG[aI1.aI3][aI1.value]) : 4 === aI1.id && aI1.aI4 ? "⚖️ @" + bI.f1.a2h(aI1.target, 5) + " was punished after a report by " + aI2 + ". Reason: " + br.eG[5][aI1.aI3] + "." : 4 === aI1.id ? aI2 + br.eM(5, br.eG[5][aI1
				.aI3
			]) + "@" + bI.f1.a2h(aI1.target, 5) + br.eO(5, br.eG[5][aI1.aI3]) : 5 === aI1.id ? aI0[aI1.aI3] : 6 === aI1.id ? "You are about to mention " + aI1.value + " player" + (1 === aI1.value ? "" : "s") + ". This action will cost " + (Math
				.max(10 * aI1.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aI1.id ? aI1.s : void 0
	}, this.tY = function(aI1, aI5) {
		return {
			aI1: aI1,
			s: aI5,
			aI6: 0,
			fontSize: 1,
			tc: 0,
			aI7: aI1.id ? bE.qB : bE.pS
		}
	}, this.ww = function(player, wu) {
		return (wu ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.wx = function(wy) {
		return aHy[wy]
	}, this.aI8 = function(wy, a7G) {
		return wy < 3 || 7 === wy ? aHz[wy][0] : 4 === wy ? aHz[wy][a7G < 1 ? 0 : a7G < 10 ? 1 : 2] : aHz[wy][a7G < 10 ? 0 : 1]
	}, this.aI9 = function(a7G) {
		return 0 === a7G
	}, this.wz = function(sM) {
		return !!bq.aGT && sM.ue === bq.aGT.ue
	}, this.aIA = function(wo, aIB, aIC) {
		var a49 = [];
		loop: for (var aC = aIB; aC < aIC; aC++) {
			var a4A = bD.tR.a4B(wo[aC].username);
			if (a4A) {
				for (var fu = a49.length - 1; 0 <= fu; fu--)
					if (a4A === a49[fu].name) {
						a49[fu].h3++;
						continue loop
					} a49.push({
					name: a4A,
					h3: 1
				})
			}
		}
		if (a49.sort(function(ft, fu) {
				return fu.h3 - ft.h3
			}), 0 === a49.length) return "";
		for (var sB = a49[0].name + ": " + a49[0].h3, aC = 1; aC < a49.length; aC++) sB += "   " + a49[aC].name + ": " + a49[aC].h3;
		return sB
	}, this.aID = function(wy, a7G, aGp) {
		return 0 === eA[wy].length ? "Rank: " + (a7G + 1) : eA[wy] + " Rank: " + (a7G + 1) + (3 !== wy && aGp < 100 ? "   " + eA[3] + " Rank: " + (aGp + 1) : "")
	}, this.aIE = function(ue) {
		aIF(bq.z.tU, ue), aIF(bq.message.aIG(), ue, 1), bq.td.aIE(ue)
	}, this.aH5 = function(username) {
		var username = this.aIJ(username);
		username && (username = "[" + username + "] " + function(username) {
			var fP = username.indexOf("["),
				fe = username.indexOf("]", fP);
			for (; 0 <= fP && fP < fe;) username = username.substring(0, fP) + username.substring(fe + 1), fP = username.indexOf("["), fe = username.indexOf("]", fP);
			return (username = username.replace(new RegExp("[\\[\\]]", "g"), "")).replace(new RegExp("\\s+", "g"), " ").trim()
		}(String(bm.buffer.data[122].value)), bm.qy.qz(122, username.trim().slice(0, 20)))
	}, this.aIJ = function(username) {
		var fP = username.indexOf("["),
			fe = username.indexOf("]");
		return !(fP < 0 || fe - fP <= 1 || 8 < fe - fP) && (username = username.substring(fP + 1, fe).trim()).length ? username : null
	}
}

function aGe() {
	var u6 = 0,
		aIM = 0,
		aIN = 0,
		aIO = null,
		aIP = null;

	function aIS(sM, aIT, aIU) {
		var sB = sM.username;
		return (sB += "   " + bq.ll.aID(sM.wy, sM.a7G, sM.aGp)) + function(sM) {
			sM = sM.zF;
			if (sM < 1e3) return "   Gold: " + sM;
			if ((sM %= 1024) < 1e3) return "   Gold: " + sM + "k";
			return "   Gold: " + (sM - 999) + "M"
		}(sM) + ("   IP: " + bI.f1.a2h(sM.aGq, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aIU ? aIM : aIR(sM, aIT)])
	}

	function aIR(sM, aIT) {
		return aIM = aIT || bq.wo.aHK(sM.ue) ? 1 : 0
	}
	this.wn = 0, this.aIQ = function() {
		!u6 || aIM === aIR(aIP) && aIN === aIP.zF || (aIN = aIP.zF, aIO.show(-1, -1, aIS(aIP, 0, 1), 1, 1, aIP.color))
	}, this.x1 = function(e, sM, aIT) {
		var aCG = e.getBoundingClientRect();
		this.show(aCG.left, aCG.top, sM, 0, aIT), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.wm && bq.wm.te(1)
		}), this.wn = aIT
	}, this.show = function(fh, fj, sM, uA, aIT) {
		aIO = aIO || new u3, aIN = (aIP = sM).zF, aIO.show(fh, fj, aIS(sM, aIT), uA, 0, aIP.color), u6 = 1
	}, this.te = function(uH) {
		this.wn = 0, aIO && aIO.te(uH) && (u6 = 0, aIP = null)
	}
}

function aGc() {
	function aIY() {
		var fG, mapSeed;
		u.a8c(29) && (bq.z.aGm && 1 === bq.z.aGn && u.a8c(29).aIa(), bq.z.aGm = 0, u.a8c(29).aIb(), fG = bV.fG, mapSeed = bV.mapSeed, u.a8c(29).aIc(), fG === bV.fG && mapSeed === bV.mapSeed || bq.wK.aId(), bq.wm.aIQ())
	}
	this.vU = 0, this.aGn = 2, this.aGW = {
		fG: 0,
		mapSeed: 0,
		w7: 0,
		wY: 0,
		spawningSeed: 0,
		a3q: -1,
		a4j: 0,
		aHr: 0,
		aHC: 0,
		aHD: null,
		a8P: 0,
		a86: 0,
		aHs: 0
	}, this.tU = [], this.tV = 1048575, this.aGm = 0, this.aIW = [0, 0], this.aIX = function() {
		aIY(), bq.aGV.dk(), __fx.lobbyReminders.check()
	}, this.aHf = function() {
		bq.aGV.aHf(), aIY(), __fx.lobbyReminders.check()
	}, this.aIe = function() {
		0 === this.aGn && u.a8c(29).aIf()
	}
}

function aGY() {
	var aIg = 256,
		aIh = 18,
		aIi = [],
		aIl = 0;

	function ye(key, aIn, fh, fj, wf) {
		var canvas = document.createElement("canvas"),
			oy = (canvas.width = canvas.height = aIg, canvas.getContext("2d", {
				alpha: !1
			})),
			oy = (oy.imageSmoothingEnabled = !0, oy.drawImage(aIn, fh, fj, wf, wf, 0, 0, aIg, aIg), {
				key: key,
				canvas: canvas,
				iN: 0
			});
		return aIi.push(oy), aIi.length > aIh && function(aIt) {
			for (var fa = aIi.length, aC = 0; aC < fa; aC++) {
				var h8 = aIi[aC];
				if (!h8.iN && h8 !== aIt) return h8.canvas.width = h8.canvas.height = 0, aIi.splice(aC, 1)
			}
		}(oy), oy
	}
	this.wL = function(fG, mapSeed) {
		return fG + "_" + (bV.aIm(fG) ? mapSeed : 0)
	}, this.wd = function(fG, mapSeed) {
		for (var key = this.wL(fG, mapSeed), aIn = null, aC = aIi.length - 1; 0 <= aC; aC--) {
			var h8 = aIi[aC];
			if (h8.key === key) {
				if (!h8.iN) return h8.iN = 1, aIi.splice(aC, 1), aIi.push(h8), h8.canvas;
				aIn = h8
			}
		}
		return aIn ? ((fG = ye(key, aIn.canvas, 0, 0, aIg)).iN = 1, fG.canvas) : null
	}, this.we = function(canvas) {
		for (var aC = aIi.length - 1; 0 <= aC; aC--)
			if (aIi[aC].canvas === canvas) {
				aIi[aC].iN = 0;
				break
			} canvas.parentNode && u.removeChild(canvas.parentNode, canvas)
	}, this.aGj = function() {
		for (var aC = aIi.length - 1; 0 <= aC; aC--) this.we(aIi[aC].canvas)
	}, this.ef = function() {
		if (bq.f7 && !(bi.ea < aIl)) {
			for (var self, fG, mapSeed, eb, sP = bq.sP.sP, fa = sP.length, aC = 0; aC < fa; aC++)
				if (! function(key) {
						for (var aC = aIi.length - 1; 0 <= aC; aC--)
							if (aIi[aC].key === key) return 1;
						return
					}(this.wL(sP[aC].fG, sP[aC].mapSeed))) return self = this, fG = sP[aC].fG, mapSeed = sP[aC].mapSeed, eb = void 0, eb = performance.now(),
					function(self, fG, mapSeed) {
						var aIn = bV.aIr(fG, mapSeed),
							wf = Math.min(aIn.width, aIn.height);
						ye(self.wL(fG, mapSeed), aIn, aIn.width - wf >> 1, aIn.height - wf >> 1, wf), aIn !== bV.zx && (aIn.width = aIn.height = 0)
					}(self, fG, mapSeed), u.a8c(29).aHX(), self = performance.now(), void(aIl = self + Math.max(Math.min(self - eb, 500), 200));
			aIl = bi.ea + 200
		}
	}, this.aId = function() {
		aIl = performance.now() + 200
	}
}

function aGg() {
	var aIu = 0,
		aIv = "",
		aIw = 0,
		aIx = 0;

	function aIz(aI5) {
		b1.aHV.aHW(3, aI5)
	}

	function aJ7(h3) {
		aIu = 1, bq.message.aHR({
			id: 6,
			value: h3
		})
	}

	function aJ2(s) {
		var aJA = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aJA)
	}
	this.a3S = function(s) {
		var aIy, h, aJ3;
		if (aIu) return aIu = 0, "yes" === (aIy = s.toLowerCase()) || "y" === aIy ? void aIz(aIv) : void bq.message.aHR({
			id: 5,
			aI3: 7
		});
		!(s.indexOf("@") < 0) && (aIy = aJ2(s)) ? (aIv = s, h = bq.wo.w9.slice(), function(aJ1, aJ3, s) {
			if (!aIw) return;
			for (var fa = aJ3.length, aC = 0; aC < fa; aC++) 2 === aJ3[aC].id && (s = s.replace(aJ1[aJ3[aC].eJ], "@" + aJ3[aC].g2));
			return aIu = 1, aIz((aIv = s).slice(0, 126) + "|"), 1
		}(aIy, aJ3 = function(aJ1) {
			for (var aJ3 = [], fa = (aIx = aIw = 0, aJ1.length), aC = 0; aC < fa; aC++) {
				var j = aJ1[aC],
					lr = j.length;
				bD.tR.startsWith(j, "@[") ? lr <= 9 && bD.tR.a6l(j, "]") && aJ3.push({
					id: 0,
					g2: j.substring(2, lr - 1).toUpperCase()
				}) : 6 === lr ? (aIx++, aJ3.push({
					id: 1,
					g2: bJ.f1.f2(j.substring(1), 5)
				})) : 1 < lr && lr < 5 && 0 <= (lr = bA.data.aG7(j.substring(1))) && (aJ3.push({
					id: 2,
					g2: lr,
					eJ: aC
				}), aIw = 1)
			}
			return aJ3
		}(aIy), s) || (0 === aJ3.length ? ! function(aJ1) {
			for (var fa = aJ1.length, aC = 0; aC < fa; aC++) {
				var j = aJ1[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return
		}(aIy) ? aIz(s) : aJ7(h.length) : aIy.length === aIx ? aIz(s) : (function(h, aJ3) {
			var lr = aJ3.length;
			if (0 === lr) return;
			var fa = h.length;
			loop: for (var aC = fa - 1; 0 <= aC; aC--) {
				for (var ft = 0; ft < lr; ft++)
					if (0 === aJ3[ft].id) {
						if (aJ3[ft].g2 === bD.tR.a4B(h[aC].username)) continue loop
					} else if (1 === aJ3[ft].id && aJ3[ft].g2 === h[aC].ue) continue loop;
				h[aC] = h[--fa], h.pop()
			}
		}(h, aJ3), aJ7(h.length)))) : aIz(s)
	}, this.aJB = function(s) {
		var aJ1 = aJ2(s);
		if (aJ1)
			for (var a6 = new RegExp("^[0-9]+$"), fa = aJ1.length, aC = 0; aC < fa; aC++) {
				var j = aJ1[aC].substring(1),
					lr = j.length;
				1 <= lr && lr <= 3 && a6.test(j) && (lr = parseInt(j, 10), !isNaN(lr)) && 0 <= lr && lr < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[lr]))
			}
		return s
	}
}

function aGf() {
	var aJC, aJD = [],
		aJE = -1,
		aJF = 0,
		aJG = 0;

	function aJL() {
		aJF = bi.ea, (3 === this.x5 ? aJK : (aJE = (aJD.length + aJE + 2 * this.x5 - 1) % aJD.length, aJJ))()
	}

	function aJJ() {
		0 !== aJD.length && (aJG = 0, aJC && aJC.x8(), (aJC = new x2(aJL)).qz(aJE, aJD.length), aJC.show(aJD[aJE]), bq.message.resize())
	}

	function aJK() {
		aJG = 1, aJC && aJC.x8(), (aJC = new x9(aJJ)).qz(aJD.length), aJC.show(), bq.message.resize()
	}
	this.aHR = function(aI1) {
		var sM;
		2 === aI1.id && 3 === aI1.aI3 ? bq.ll.aIE(aI1.ue) : (sM = bq.ll.tY(aI1, bq.ll.tZ(aI1)), (5 !== aI1.id && 6 !== aI1.id || (u.a8c(29).aJH().tb(sM), 5 === aI1.id)) && (sM = bi.ea < aJF + 2e4, aJE !== aJD.length - 1 && sM || (aJE = aJD
			.length), __fx.pingFilter.isMuted(aI1, "s") || (aJD.push(aI1), bm.buffer.data[14].value || 7 === aI1.id || bs.play(), aJC && (aJG && (bm.buffer.data[13].value || sM) ? aJC.qz(aJD.length) : aJJ()))))
	}, this.show = function() {
		aJK()
	}, this.te = function() {
		aJE = aJD.length - 1, aJC && aJC.x8(), aJC = null
	}, this.resize = function() {
		aJC && aJC.resize()
	}, this.aIG = function() {
		return aJD
	}
}

function aGd() {
	var aJM = null,
		aJN = null,
		aJO = 0,
		aJP = 0,
		aJQ = null;

	function aJS() {
		0 !== aJN.wy && (bq.xE.te(), u.v(8, 29, new uh(25, {
			action: 0,
			ue: bI.f1.a2h(aJN.ue, 5),
			uf: 0
		}, 29)))
	}

	function aJU() {
		return !bq.aGT || bq.ll.wz(aJN) ? 1 : 0
	}

	function aJT() {
		var fh = aJM.fh,
			fj = aJM.fj,
			aJe = (bq.xE.te(), aJU());
		aJM = new xA([new x(br.eG[5][0], function() {
			aJb(5, 0)
		}, aJe), new x(br.eG[5][1], function() {
			aJb(5, 1)
		}, aJe), new x(br.eG[5][2], function() {
			aJb(5, 2)
		}, aJe), new x(br.eG[5][3], function() {
			aJb(5, 3)
		}, aJe)]), aJa(fh, fj), aJP = aJO = 2
	}

	function aJW(w7) {
		return bq.sP.aHZ(aJN.ue, w7)
	}

	function aJX(w7) {
		aJU() || (bq.sP.yQ(aJN.ue, aJW(w7) ? 0 : w7), bq.xE.te())
	}

	function aJZ() {
		var ol;
		return !aJU() && (ol = bD.tR.a4B(aJN.username)) ? +(ol === bD.tR.a4B(bq.aGT.aGw)) : 1
	}

	function aJY() {
		aJZ() || (b1.aHV.aHW(2, aJN.ue), bq.xE.te())
	}

	function aJV() {
		29 === u.ug && u.a4f().aGU(bI.f1.a2h(aJN.ue, 5))
	}

	function aJb(id, value) {
		5 === id && b1.aJf.aJg({
			action: 3,
			ue: bI.f1.a2h(aJN.ue, 5),
			value: value
		})
	}

	function aJa(fh, fj, xG) {
		aJM.show(fh, fj, xG), bq.wm.show(aJM.fh, aJM.fj, aJN, 1)
	}
	this.aJR = function(e, sM) {
		aJO = 1, aJN = sM, aJM = new xA([new x(L(140), aJS, 0 === sM.wy ? 1 : 0), new x(L(141), aJT, aJU()), new x(L(142), aJV, 0), new x(aJW(1) ? L(143) : L(144), function() {
			aJX(1)
		}, aJU()), new x(aJW(2) ? L(145) : L(146), function() {
			aJX(2)
		}, aJU()), new x(L(147), aJY, aJZ())]), aJa((aJQ = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aJQ.clientY, 1)
	}, this.a5W = function(code) {
		if (29 !== u.ug) return !1;
		if (!aJN) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.te();
			else if (bD.tR.startsWith(code, "Numpad") || bD.tR.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aJO) this.aJR(aJQ, aJN);
				else {
					if (!aJM) return !1;
					1 === aJO ? code <= 1 ? aJS() : 2 === code ? aJT() : 3 === code ? (aJV(), this.te()) : code <= 5 ? aJX(4 === code ? 1 : 2) : aJY() : (aJb(aJP, bO.il(code - 1, 0, br.eG[aJP].length - 1)), this.te())
				}
		}
		return !0
	}, this.te = function() {
		aJO = 0, aJM && aJM.te(), aJM = null, bq.wm.te()
	}
}

function aGh() {
	var aJl = [],
		ur = [],
		aJm = [],
		aJn = {},
		aJo = {};

	function aJq(sM) {
		for (var s = sM.s, aJp = [];;) {
			var ek = function aJs(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var sB = s.substring(position + 1, position + 6);
				if (5 !== sB.length) return aJs(s, position + 1);
				var aK8 = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aK8.test(sB)) return aJs(s, position + 1);
				aK8 = s.substring(position + 6, position + 7);
				if (1 !== aK8.length) return position;
				sB = new RegExp("^[ :!.]+$");
				if (!sB.test(aK8)) return aJs(s, position + 1);
				return position
			}(s, 0);
			if (-1 === ek) {
				aJp.push(aJt(s, sM));
				break
			}
			0 === ek ? aJp.push(aJu(s.substring(1, 6), sM, ek)) : (aJp.push(aJt(s.substring(0, ek), sM)), aJp.push(aJu(s.substring(ek + 1, ek + 6), sM, ek))), s = s.substring(ek + 6)
		}
		return aJp
	}

	function aJu(sB, sM, ek) {
		var sB = aJv(sB),
			tQ = (0 === ek && 0 === sM.aI1.id && sM.tc && (sM.fontSize = bq.ll.aI8(sB.wy, sB.a7G), sM.aI6 = bq.ll.aI9(sB.a7G)), document.createElement("span"));
		return tQ.style.display = "inline-block", tQ.style.cursor = "pointer", tQ.style.margin = "0", tQ.style.font = "inherit", tQ.style.minWidth = tQ.style.minHeight = "1em", tQ.aJw = {
			sM: sM,
			ek: ek
		}, aJx(tQ, sB), ur.push(tQ), (aJn[sB.ue] || (aJn[sB.ue] = [])).push(tQ), tQ
	}

	function aJx(tQ, aGr) {
		var sM = tQ.aJw.sM;
		tQ.textContent = function(aGr, sM, ek) {
				if (aGr.aJz) return aGr.aJz--, ek = 2 === sM.aI1.id || (3 === sM.aI1.id || 4 === sM.aI1.id) && 0 !== ek, aGr.username + (ek ? " (" + aGr.aH3 + ")" : "");
				if (sM.aI1.aII) return "Redacted " + bI.f1.a2h(aGr.ue, 2);
				return aGr.username
			}(aGr, sM, tQ.aJw.ek), tQ.style.color = bq.ll.wx(aGr.wy), tQ.style.textShadow = 11 !== aGr.wy ? "none" : "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray", tQ.style.textDecoration = bq.ll.wz(aGr) ?
			"underline" : "none", aGr.x0 && (tQ.style.textDecorationLine = "underline", tQ.style.textDecorationStyle = "dotted"), tQ.style.fontWeight = bq.ll.aI9(aGr.a7G) ? "bold" : "inherit", tQ.onclick = function(e) {
				bq.xE.aJR(e, aGr)
			}, bM.sw() || (tQ.onmouseover = function(e) {
				bq.wm.x1(e.target, aGr)
			})
	}

	function aJt(s, sM) {
		var tQ = document.createElement("span");
		return tQ.textContent = s, tQ.style.color = sM.aI7, tQ.style.margin = "0", tQ.style.font = "inherit", tQ
	}

	function aJv(sB) {
		var ue = bJ.f1.f2(sB, 5),
			aGr = bq.wo.aHK(ue);
		if (aGr) {
			for (aJl.push(aGr); 75 < aJl.length;) aJl.shift();
			return aGr
		}
		for (var aGk = bq.wo.aGk, aC = aGk.length - 1; 0 <= aC; aC--)
			if (ue === (aGr = aGk[aC]).ue) return aJl.push(aGr), aGr;
		for (aC = aJl.length - 1; 0 <= aC; aC--)
			if (ue === (aGr = aJl[aC]).ue) return aJl.push(aGr), aGr;
		return aK1(ue, null)
	}

	function aK1(ue, name) {
		return aJo[ue] || (aJo[ue] = bq.wo.aGs(ue, name || "Player " + bI.f1.a2h(ue, 2), 1, 999999, 999999, 0, 0, 0, 0, 1))
	}

	function aK5(ue, name) {
		var aGr;
		name && !bq.wo.aHK(ue) && ((aGr = function(ue) {
			for (var aGk = bq.wo.aGk, aC = aGk.length - 1; 0 <= aC; aC--)
				if (ue === aGk[aC].ue) return aGk[aC];
			for (aC = aJl.length - 1; 0 <= aC; aC--)
				if (ue === aJl[aC].ue) return aJl[aC];
			return aJo[ue] || null
		}(ue)) ? aGr.username !== name && (aGr.username = aGr.aGw = name, bq.td.aGv(ue)) : aK1(ue, name))
	}

	function aKC(aGr, aH2, ue) {
		ue === aGr.ue && (aGr.aH3 || (aGr.aH3 = aGr.username), aGr.username = aGr.aGw = aH2)
	}
	this.x8 = function() {
		for (var aC = 0; aC < ur.length; aC++) ur[aC].onclick = ur[aC].onmouseover = null;
		aJo = aJn = aJm = ur = null
	}, this.transform = function(sM) {
		for (var s9 = document.createElement("div"), aJp = aJq(sM), aC = 0; aC < aJp.length; aC++) s9.appendChild(aJp[aC]);
		0 === sM.aI1.id && (s9.vx143 = sM.aI1, aJm.push(s9)), s9.style.margin = "0.6em 0.6em", sM.tc && (s9.style.marginLeft = s9.style.marginRight = "inherit"), s9.style.font = "inherit";
		var aJr = 0 < sM.aI1.id;
		return sM.aI6 && (s9.style.fontWeight = "bold"), aJr && (s9.style.paddingLeft = "0.7em"), aJr && (s9.style.fontStyle = "italic"), s9.style.fontSize = sM.fontSize.toFixed(2) + "em", s9
	}, this.aGv = function(ue) {
		var h = aJn && aJn[ue];
		if (h)
			for (var aGr = aJv(bI.f1.a2h(ue, 5)), aC = h.length - 1; 0 <= aC; aC--) h[aC].parentNode ? aJx(h[aC], aGr) : h.splice(aC, 1)
	}, this.aK3 = function(aK4) {
		!aK4 || 4 < aK4.id || (aK5(aK4.ue, aK4.aK6), aK4.aK7 && aK5(aK4.target, aK4.aK7))
	}, this.aKB = function(aK4) {
		if (aK4 && (2 === aK4.id && 1 === aK4.aI3 || 3 === aK4.id && 2 === aK4.aI3)) {
			var ue = 3 === aK4.id ? aK4.target : aK4.ue;
			if (!bq.wo.aHK(ue)) {
				for (var aH2 = (3 === aK4.id ? aK4.aK7 : aK4.aK6) || "Redacted " + bI.f1.a2h(ue, 2), aGk = bq.wo.aGk, aC = aGk.length - 1; 0 <= aC; aC--) aKC(aGk[aC], aH2, ue);
				for (aC = aJl.length - 1; 0 <= aC; aC--) aKC(aJl[aC], aH2, ue);
				aJo[ue] && aKC(aJo[ue], aH2, ue), this.aGv(ue)
			}
		}
	}, this.aIE = function(ue) {
		for (var aKD = aJm, aC = aKD.length - 1; 0 <= aC; aC--) {
			var fd = aKD[aC];
			if (fd.vx143.ue === ue) {
				for (; fd.firstChild;) u.removeChild(fd, fd.firstChild);
				fd.vx143.s = "[Redacted Message]";
				for (var aJp = aJq(bq.ll.tY(fd.vx143, bq.ll.tZ(fd.vx143))), ft = 0; ft < aJp.length; ft++) fd.appendChild(aJp[ft]);
				aKD.splice(aC, 1)
			}
		}
	}
}

function cT() {
	var aKE, aKF, aKG;

	function aKL(aC) {
		var button = aZ.p2[aC],
			fh = button.fh,
			fj = button.fj,
			j = button.j,
			k = button.k;
		y3.fillStyle = button.aKJ, y3.fillRect(fh, fj, j, k), aC === aKE && (y3.fillStyle = aKG, y3.fillRect(fh, fj, j, k)), y3.lineWidth = bf.a2O, y3.strokeStyle = aKF, y3.strokeRect(fh, fj, j, k),
			function(button) {
				var fh = button.fh,
					fj = button.fj,
					j = button.j,
					k = button.k;
				bD.sU.textAlign(y3, 1), bD.sU.textBaseline(y3, 1), y3.font = button.font, y3.fillStyle = aKF, y3.fillText(button.aI5, Math.floor(fh + j / 2), Math.floor(fj + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.fj = 0, this.gap = 0, this.dk = function() {
		aKE = -1, aKF = bE.pS, aKG = "rgba(255,255,255,0.16)", this.p2 = new Array(7), this.k = Math.floor((a1.a2.im() ? .123 : .093) * i.io), this.j = Math.floor((a1.a2.im() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aKH = Math.floor(.26 * this.k),
			aKI = bD.sU.uE(1, aKH);
		this.p2[0] = {
			fh: 0,
			fj: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aI5: "Multiplayer",
			font: aKI,
			aKJ: "rgba(22,88,22,0.8)",
			fontSize: aKH
		}, aKH = Math.floor(.18 * this.k), aKI = bD.sU.uE(1, aKH), this.p2[1] = {
			fh: 0,
			fj: 0,
			j: this.j - this.p2[0].j - this.gap,
			k: this.k,
			aI5: "Single Player",
			font: aKI,
			aKJ: "rgba(22,88,88,0.8)",
			fontSize: aKH
		}, this.p2[2] = {
			fh: 0,
			fj: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aI5: "",
			font: this.p2[1].font,
			aKJ: "rgba(100,0,0,0.8)",
			fontSize: this.p2[1].fontSize
		}, this.p2[3] = {
			fh: 0,
			fj: 0,
			j: this.j,
			k: this.k,
			aI5: "Back",
			font: this.p2[0].font,
			aKJ: "rgba(0,0,0,0.8)",
			fontSize: this.p2[0].fontSize
		}, this.p2[4] = {
			fh: 0,
			fj: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aI5: "The game was updated!",
			font: this.p2[1].font,
			aKJ: "rgba(100,0,0,0.8)",
			fontSize: this.p2[1].fontSize
		}, this.p2[5] = {
			fh: 0,
			fj: 0,
			j: this.p2[0].j,
			k: Math.floor(.8 * this.k),
			aI5: "Reload",
			font: this.p2[0].font,
			aKJ: "rgba(0,100,0,0.8)",
			fontSize: this.p2[0].fontSize
		}, this.p2[6] = {
			fh: 0,
			fj: 0,
			j: this.p2[1].j,
			k: this.p2[5].k,
			aI5: "Back",
			font: this.p2[0].font,
			aKJ: "rgba(0,0,0,0.8)",
			fontSize: this.p2[0].fontSize
		}, this.aDF()
	}, this.aDF = function() {
		this.fj = Math.floor(.54 * i.k), this.p2[0].fh = Math.floor(.5 * i.j - .5 * this.j), this.p2[1].fh = this.p2[0].fh + this.p2[0].j + this.gap, this.p2[2].fh = this.p2[3].fh = this.p2[0].fh, this.p2[4].fh = this.p2[5].fh = this.p2[0].fh,
			this.p2[6].fh = this.p2[1].fh, this.p2[0].fj = Math.floor(.54 * i.k), this.p2[1].fj = this.p2[0].fj, this.p2[2].fj = Math.floor((i.k - this.p2[2].k - this.p2[3].k - this.gap) / 2), this.p2[3].fj = this.p2[2].fj + this.p2[2].k + this
			.gap, this.p2[4].fj = Math.floor((i.k - this.p2[4].k - this.p2[5].k - this.gap) / 2), this.p2[5].fj = this.p2[6].fj = this.p2[4].fj + this.p2[4].k + this.gap
	}, this.aKK = function() {
		aKL(0), aKL(1)
	}, this.aKM = function() {
		aKL(2), aKL(3)
	}, this.aKN = function() {
		aKL(4), aKL(5), aKL(6)
	}, this.a4y = function(fh, fj, nK) {
		var aC = -1;
		return 0 === ab.a4b() ? aC = this.a5S(fh, fj, 0, 2) : 3 === ab.a4b() ? aC = this.a5S(fh, fj, 3, 1) : 5 === ab.a4b() && (aC = this.a5S(fh, fj, 5, 2)), aKE !== aC && (aKE = aC, nK) && (bi.ds = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a5S = function(fh, fj, aKO, size) {
		for (var aC = aKO; aC < aKO + size; aC++)
			if (fh >= this.p2[aC].fh && fj >= this.p2[aC].fj && fh <= this.p2[aC].fh + this.p2[aC].j && fj <= this.p2[aC].fj + this.p2[aC].k) return aC;
		return -1
	}
}

function cU() {
	var aKQ, aKR, aAr, aKS, aKT, aKU, aKV, aKW, aKX, aAq, aKY, aKZ, aKa, aKb = 1,
		aKd = 0;

	function aKg(aKh) {
		aKh ? aKa = (aKa + 1) % b1.z.aKi : (b1.z.close(aKa, 3280), aKb ? aKb = 0 : (aKa = (aKa + 1) % b1.z.aKi, b1.z.close(aKa, 3280))), aKZ = bi.ea, aa.aKf = aKd, b1.z.aKj(aKa, 4, 1) && b1.aHV.aKk(aKa)
	}

	function aKl() {
		if (0 !== aKa) return 1 === aKa && __fx.customLobby.isActive() ? (p.a4n(3249), __fx.customLobby.setActive(!1)) : void aKg();
		p.a4n(3249)
	}

	function aKq(fj, aCx, vU) {
		var nz = Math.floor((i.j - aKS) / 2) + aKV,
			oC = nz + Math.floor(vU * (aKS - 2 * aKV));
		y3.lineWidth = aCx, y3.beginPath(), y3.moveTo(nz, fj), y3.lineTo(oC, fj), y3.lineTo(Math.floor(nz - aKV + vU * aKS), fj + aAr), y3.lineTo(nz - aKV, fj + aAr), y3.closePath()
	}
	this.f3 = 1, this.aKe = 0, this.aKf = 0, this.dk = function() {
		bX.turnstile.ez(), ab.setState(6), aKQ = 0, aKR = 1, aKW = "rgba(0,220,120,0.4)", aKX = "rgba(0,0,0,0.8)", this.resize(), bi.ds = !0, aKb = 1, aKa = this.f3 - 1, aKd = 0, aKg(1)
	}, this.resize = function() {
		aKS = Math.floor((a1.a2.im() ? .5 : .25) * i.io), aKT = aKS + 12, aAr = Math.floor(.125 * aKS), aKV = 3 * aAr, aKU = Math.floor(.225 * aKS), aKY = Math.floor(.3 * aAr), aAq = bD.sU.uE(0, aKY)
	}, this.a4i = function(oR) {
		oR === aKa && aKl()
	}, this.ho = function(fh, fj) {
		var nz = Math.floor((i.j - aKT) / 2),
			o0 = Math.floor(.5 * (i.k - bf.gap - aAr - aKU)) + aAr + bf.gap;
		return nz < fh && fh < nz + aKT && o0 < fj && fj < o0 + aKU && (this.a5d(), aZ.a4y(fh, fj, !1), !0)
	}, this.a5d = function() {
		b1.z.a4o(3260), __fx.customLobby.setActive(false), u.z.a0()
	}, this.ef = function() {
		6 === ab.a4b() && (bi.ea > aKZ + 12e3 && aKl(), 100 < (aKQ += .07 * aKR * (aKQ < 16 ? 5 + aKQ : 84 < aKQ ? 105 - aKQ : 17)) ? (aKQ = 100, aKR = -1) : aKQ < 0 && (aKQ = 0, aKR = 1), aKW = "rgba(0," + Math.floor(190 - 1.9 * aKQ) + "," +
			Math.floor(120 - 1.2 * aKQ) + "," + (.4 + .004 * aKQ) + ")", aKX = "rgba(0," + Math.floor(1.9 * aKQ) + "," + Math.floor(1.2 * aKQ) + "," + (.8 - .004 * aKQ) + ")", bi.ds = !0)
	}, this.y2 = function() {
		var fh = Math.floor((i.j - aKT) / 2),
			fj = Math.floor(.5 * (i.k - bf.gap - aAr - aKU));
		! function(title, fj, aCx, vU) {
			y3.fillStyle = aKX, aKq(fj, aCx, 1), y3.fill(), y3.fillStyle = aKW, aKq(fj, aCx, vU), y3.fill(), y3.strokeStyle = bE.pS, __fx.settings.smoothUI && (y3.strokeStyle = "rgba(255, 255, 255, 0.3)", y3.lineJoin = "round"), aKq(fj, aCx, 1),
				y3.stroke(), y3.lineJoin = "miter",
				function(aKs, fj) {
					bD.sU.textAlign(y3, 1), bD.sU.textBaseline(y3, 1), y3.font = aAq, y3.fillStyle = bE.pS, y3.fillText(aKs, Math.floor(.5 * i.j), Math.floor(fj + .58 * aAr))
				}(title, fj)
		}(L(148), fj, 3, aKQ / 100),
		function(fh, fj, j, k, aI5) {
			y3.fillStyle = bE.pN, y3.beginPath(), __fx.settings.smoothUI && y3.roundRect ? y3.roundRect(fh, fj, j, k, .1 * k) : y3.rect(fh, fj, j, k), y3.fill(), y3.lineWidth = 3, y3.strokeStyle = __fx.settings.smoothUI ?
				"rgba(255, 255, 255, 0.3)" : bE.pS, y3.stroke();
			var fa = Math.floor(.3 * k);
			bD.sU.textAlign(y3, 1), bD.sU.textBaseline(y3, 1), y3.font = bD.sU.uE(0, fa), y3.fillStyle = bE.pS, y3.fillText(aI5, Math.floor(fh + j / 2), Math.floor(fj + k / 2 + .1 * fa))
		}(fh, fj + aAr + bf.gap, aKT, aKU, L(43))
	}
}

function cV() {
	var a4V = 0;
	this.dk = function() {
		aZ.dk(), a4V = 0
	}, this.setState = function(aKt) {
		a4V = aKt
	}, this.a4b = function() {
		return a4V
	}, this.aKu = function() {
		this.setState(8), u.y()
	}, this.a5W = function(e) {
		if (!bV.zv) return !1;
		if (!(bi.ea < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aKv()) return !0;
				if ("Enter" === e.key) {
					if (0 === a4V) return !0;
					if (7 === a4V) return !0
				}
			}
			return !1
		}
	}, this.aKw = function() {
		bc.resize()
	}, this.aKv = function() {
		return !!bc.te()
	}, this.ho = function(fh, fj) {
		!bV.zv || bc.ho(fh, fj) || 6 === a4V && aa.ho(fh, fj) || bb.ho(fh, fj) || aU.ho(fh, fj)
	}, this.a4y = function(fh, fj) {
		!aU.aD8 && aZ.a4y(fh, fj, !0) || aU.a4y(fh, fj)
	}, this.click = function(fh, fj) {
		aU.a5N()
	}, this.a51 = function(fh, fj, deltaY) {}, this.aKx = function() {
		aZ.aDF(), bi.ds = !0
	}, this.y2 = function() {
		8 !== a4V && 10 !== a4V && (y3.imageSmoothingEnabled = !0, this.a1U(), 0 !== a4V && (aU.y2(), aP.y2(), this.aKy(), bb.y2()), 0 !== a4V && 6 === a4V && aa.y2(), bc.y2(), u.y2())
	}, this.a1U = function() {
		var aL0, aKz;
		if (__fx.makeMainMenuTransparent) y3.clearRect(0, 0, i.j, i.k);
		else bV.zv ? (aKz = i.j / bV.fl, aL0 = i.k / bV.fm, y3.setTransform(aKz = aL0 < aKz ? aKz : aL0, 0, 0, aKz, Math.floor((i.j - aKz * bV.fl) / 2), Math.floor((i.k - aKz * bV.fm) / 2)), y3.drawImage(bV.zx, 0, 0), y3.setTransform(1, 0, 0, 1,
			0, 0), y3.fillStyle = bE.pN) : y3.fillStyle = bE.pJ, y3.fillRect(0, 0, i.j, i.k)
	}, this.aKy = function() {
		var fj = Math.floor(.3 * i.k),
			canvas = ac.wG("territorial.io"),
			ic = (ic = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : ic,
			fh = (y3.globalAlpha = .15, y3.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - ic * canvas.width))),
			fh = Math.floor(fh / ic),
			fj = Math.floor(fj - .5 * canvas.height * ic),
			fj = Math.floor(fj / ic);
		y3.setTransform(ic, 0, 0, ic, fh, fj), y3.drawImage(canvas, fh, fj), y3.setTransform(1, 0, 0, 1, 0, 0), y3.globalAlpha = 1, y3.imageSmoothingEnabled = !0
	}
}

function cv() {
	this.aHr = 0;
	var aL2, aL3, aL4, aL5, aL6, aL7 = this.aL1 = 0;

	function aL9() {
		aL5 = aL6 = null, aL7 = 0
	}
	this.dk = function(aGW, aHj, aHl) {
		u.y(), bq.x8(), ab.setState(10), aL5 = aGW, aL6 = aHj, aL7 = aHl, this.aHr = aGW.aHr, this.aL1 = aHl, aL2 = 0, aL3 = bi.ea + 4500, b1.z.a4j = aGW.a4j, 1 === aHj.length ? (b1.z.close(b1.z.f8, 3281), aL4 = 0) : b1.z.f8 === aGW.a4j ? (
			console.log("direct pass"), aL4 = 0) : (console.log("delayed pass"), b1.z.close(b1.z.f8, 3247), aL4 = 2, b1.z.aKj(aGW.a4j, 5, 2) && b1.qw.aL8()), y3.imageSmoothingEnabled = !0, ab.a1U();
		aHl = ac.wG("loading"), aHj = (a1.a2.im() ? .396 : .25) * i.io / aHl.width;
		y3.setTransform(aHj, 0, 0, aHj, Math.floor((i.j - aHj * aHl.width) / 2), Math.floor((i.k - aHj * aHl.height) / 2)), y3.imageSmoothingEnabled = !1, y3.drawImage(aHl, 0, 0), y3.setTransform(1, 0, 0, 1, 0, 0)
	}, this.nI = function() {
		0 < aL4 && bi.ea > aL3 && (aL4--, aL3 += 4500, 0 === bi.aLA) && 0 === bi.kt() && b1.z.aKj(b1.z.a4j, 5, 2)
	}, this.aLB = function() {
		return 10 === ab.a4b() && (bq.aGW.aHu(aL5, aL6, aL7), aL9(), !0)
	}, this.aLC = function() {
		10 === ab.a4b() && 2 <= ++aL2 && (bq.aGW.aHu(aL5, aL6, aL7), aL9())
	}
}

function cW() {
	var aLE, canvas, a3l, aLF;

	function aLL(eJ, name, aLM, sB) {
		a3l[eJ] = name, canvas[eJ] = new Image, canvas[eJ].onload = function() {
			! function(eJ, aLM) {
				var a7L, a7M = null;
				7 === aLM ? a7L = bD.ov.a7O : 9 === aLM ? a7L = bD.ov.a7P : 8 === aLM ? (a7L = bD.ov.a7S, a7M = .1) : 3 === aLM ? (a7L = bD.ov.a7Q, a7M = .06) : 5 === aLM ? a7L = bD.ov.a7T : 6 === aLM ? a7L = bD.ov.a7N : 4 === aLM && (a7L = bD.ov
					.a7U);
				canvas[eJ] = bD.ov.a7K(canvas[eJ], a7L, a7M)
			}(eJ, aLM), aLO()
		}, canvas[eJ].onerror = function(e) {
			console.error("Error loading image at index", eJ, "Error:", e), aLO()
		}, canvas[eJ].src = "data:image/png;base64," + sB
	}

	function aLO() {
		aLE--, aLI()
	}

	function aLI() {
		0 === aLE && (aLE = -1, aLK(), bi.ds = !0, canvas[7] = aLF, canvas[8] = aLF, canvas[9] = aLF, canvas[10] = aLF, 5 === u.ug) && u.a4f().aLQ.resize()
	}

	function aLK() {
		aM.a8n(), bb.aGM([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.a00 = new a1v, ak.a00.dk(), ax.dl()
	}
	this.dk = function() {
		if (void 0 === canvas) {
			aLE = 29, canvas = new Array(aLE), a3l = new Array(aLE), (aLF = document.createElement("canvas")).width = 1;
			for (var aC = aLE - (aLF.height = 1); 0 <= aC; aC--) canvas[aC] = aLF;
			aLK(), aLL(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aLL(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aLL(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLL(3, "orders", 6,
					"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"
					), aLL(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aLL(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aLL(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aLL(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLL(8,
					"googleplay", 3,
					"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"
					), aLL(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aLL(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLL(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLL(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLL(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLL(14, "bestPlayer", 5,
					"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"
					), aLL(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aLL(16, "apple", 3,
					"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"
					), aLL(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aLL(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aLL(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aLL(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aLL(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aLL(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					), aLL(23, "clock", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAZGhkoKic1NzRYWleAgoCjpaIA/wA4/zvJzMl5/3nk5+Sq/6rI/8fm/+b///8vfxrjAAAC1UlEQVRIx4WVMYwSQRSGh+O4hFBIe901VjZUlxgb2gvF0VhcLLhGGwrKI4TDksYoiUpCLCgxxgjqxeSyxZZngVIehYYSYzRcjIfurfB882be7Oyy6CvYYfbbN/9782aeOPqPifDfF8PPw+frgZczkLZ8Hw9UPwLbt2YMUJ1AYH9igBHO++27t+89k8TXFeAVzrbzQtr1Lo7HEaCOc0+EtmQZlfZCgBTwWL5Lne7g70YF4CoEPAQ4oY8zcCgfmy5AzwKqM/CyBFyDFj232YVgB4ciBIiKdqGAGVyKCLAF8MUAGELRANoVulgYoA9zjjDt53kEcKYBlNhiQGR5kHBpDQkcgy9ibJ/WELTCzzgAZTYVMDPCAtvDKRfOCaiBn42+T7kouwS/CTgOYjBWkYnJyLJA4BG8jr5PU2a3YEnAiCWkHJ2uZJecbshsC6kxz3HpaArgE9rFVAmpUTsugZ/Te32ilUwRqIOngRsAbxTo5bTLXwg0zE7il55KkM58BmtCAiaPJRJfMWGnMU6BUV6Y9ABc5raDvVdAHwZWfgBYIS220EDZOeX9Aa3wpuMUDbAJXJPyyLR4dBECigbY4dEgWOKg0xYGUFu72+nkA8BW6dl7tqAwfwRTGQhi4DDvm0zKSi2/y9m4yuRcrLF9LCl7s2LqakrbrQNbtS5WLRYMxBQ12QZQwRxN7DgjB4Nqsm+HYVtGHi0EGutUluQdIkKHP2wuBqGP3mCNhDMFjOJTdUueGwIa1hrJvJWFKw3UrB0q+NYK53wFTfSJoewWTQzLJgO4xtsokNIXJQG4BrswQEndYfqe7BsVDKCChXXT1k3VVtRRT2BxTu3LfMTHoaDSfgeURAOgCphLIkHYHqgYrYYiG47HSTqwupawW5r/VH6/K5sWN5ygZ9WpZ/qO41LbG692vQdWVwze241V+aDWO45vzTXder/31jb32vDDp2HvX91/1f4C6yMGMx9Ja7MAAAAASUVORK5CYII="
					), aLL(24, "userIcon", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAwAODg4sLyw2ODVCREFgYl+Bg4CkpqMA/wDMz8t5/3il/6Tk5+TD/8Th/+P///8NWuTPAAACa0lEQVRIx92Vz2sTQRTHR6GI4GU0SQkEqncvXoSAl9wFm5MXIe1fkCpIEYRcQ0L8ASp42mvwkmtP1taKCIW5loLstVjq4o/YrN3k68y8t7OzWyTise8S3pvPzPu+H2xEd46JswW8ycd7wzzQj4B97zgEDn2gp8+BPQeExj3xgE0TwCw9f2JdbDigD7y6dlfhgIEIH5s3A3rCAiN8kFLWMe32Ph/tdwc41m4FcECUNHREBuiblw9HuG/cthVlgB7GJiDvgC2x7iImDAzw3Eaq+uzTawX8su4VK0JY0at8BS91boXv1pVBCjxF0wZqdLVuNRpgWgA69NJlhUYeSFOomG62qQqpTvIiK/gpOdWW+SnhNwN9KrPKxWix38ifZI264QMVAtp2GIJmtZMHTDVlNXOtHiB5IMtBlgIvZKljJfC49fx3dQd/SNdR4w4d0AtpBtygFo/kSzfTgF1t4IYFSKznRA6AhyT7PUmwDasEblih1kS5k6bt+A4Vo8wTwvSJc5eBeLX0GNxpec/UIczCcXmddGHiBl+YWSCiBZK3kWq1K2pvDDWQLlxJIV4R2hYC0mKmdqCBdOFuIVkW1hZUKlOLEG5dAjwTbHXwZqipBjZjHkCcnovzilcomGkgpCKvY9sBokUro1ungWjMipcz4AK3poWh6NJ26IXMznUOKn0pA8oYe4Do0GJ7wCLe+UCL2l3LgCrWfOASNccDalgR5zLg4ilgyS/ClLF1Crg6DxB/BY7XtXWKAEcNwFYA2P4FePvVWFQEZjZ85L7VoyIwKXzMR1j37ZH7qGZAwSbzgOILgyKwcTb/Fv8b+ANlD8k4eGaP9QAAAABJRU5ErkJggg=="
					), aLL(25, "battleRoyale", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAmMCMAcQBbXVoArAB8fnuHioaQko+cnpunqqYA/gC2uLXAwr/N0M3c39v///9qRmqPAAADUElEQVRIx7WVT0gUURjAvzezYtnlgVlZBA/xNKcR6R/rxrjsaU+Kl4SUvHQ0oVMEUUgdLfEY5jrsaa5L0MUKpEN0EBFPQnsQXcVwToGL7rzen++9mV2KLvVO8775ve99/x9Ef1nwX4HSwKAEAoCL5d/9Fj+gLADopeAMdiLVIoB7c84TAFn+MA7gtBNFBuTG0/izAlb40ashAJIi1QGA3iffOX8jAZjlPPkxry7ExcC9t8bFGpMAK8jP5OsEzeH/EPrWYiX0JRD0c7WO543LgftRi5pUelHpjvX2AFVUIa8FfA9kHMIuBJIZRwEVsoDArqMAUrcHPGXiZTzB13MSqMIK7lu+o0ycxj1fVEDE7hrBuvSUuUZjMtajgesGaPo9QuGI2Z75ZQUEF4wkeUGiivvJ8qCBSreR8H3q0Sux3Tm6HiquFbXGgMxafBeBkGzw1Myuut1sIhDBIys79Qv2O3meM8BIKlyyJvJD30MgcN9Z6WTKzqj8g4rdbWNm85kFtnXuVIqZNf29dehsSJcY6ASj7a1CagzkMn1RxBLY3UgtdNoah2k78xkLvTYghFvi9p8L1kLIdbQeI1OcP4xtvGyfGKAKffWT6dRCr715S6VoFfJLJg0H1BHNU06BUPSvuMREvDUuFDBwUoC5QhQQU5tfhkA43quv0aGeOvAdWylHhX06SN1vOhI6WfWkBgRNTF7GLR+EUzWbLHZNFqiplIaoji0QvdH0DRDI3trGNLRkwk+HF3gGCGWvJahgXaYjeWu6RHtB+22WD20XtVIjo1FiCi2ZN76aTsV6GLGNYYoreUAyoTb9KGJIsOga1MsCOCNq4Iikqc8t8LK5mMLmdaKA3DcZz+QCg7RPr0ZVarVlc2EGgkgz3OFZFZBRIC8ur9oJpVVAqiCWp3KsL1N3GkAFp9K4RZATKllOVcghphXU5GhpUBmRhnZV6FNj0MUdiIw06TkVLjyjgfOoD4R5NRD4NmArnmigGy2qwqUdH6Bw5DtFreIkc4U0aJQMg8fcx7KmlYo9PWnJa+uSKPUQRFOg65t60kI+xqCoZmGqkKSKZE5P2sCd3DHNLqky5u+4RnswkmJ5na8icycoTlqhWb6gHSvEU39+eUul8r953H8BBeY6pZneQOEAAAAASUVORK5CYII="
					), aLL(26, "oneVsOne", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAACNwBHSUYAaQB+gH0AugCIioeSlZKanZkA3ACmqaUA/wC2uLXGycXa3Nn///+iBll7AAABfUlEQVRIx+2UPU7DUAyA3aZFCBWUCDF06wmga9WFG5CoYkA9BNyAK5CBKYfoEGWIsvQGcIOiDkxISAhRVEGN7ffTvrQRGwNKhhf5e1/0bMcJFL9cUAv/TkgB4MTdMEgJfYoaiSMYJEIOfI039y0SIYYJrnqOYBELud98LQlrxEIEHSwJawQcwHVJ2EDA9ewhRyNOa5D5kp5CIsTQfJCICwMvln2NRLhrTlAJp4ifjZDWhUFK6KAWDhC/wT9DnBvkClGLV7hFfNwSXiRJKh3PYUaLQUZY7HN0yQ9PpUEGaeEZJLri45/onCUYpMsEHfUPKT/K9B0sYiEDL1JRSN35OCLJs0hafZ/EKkrp/C9qw03XIvO6VZRRBSt6B72hRa6Q+xeIM2rWuEIouNmUBk/abiGUDs69okqIWyxM25UCl0GNHlYKGU2qHq3dQsHNXsoHUiGE1Ow3r9gSUhkzLo7vbQeJkMk0Gtx1kPo2R0EQDGTeg+A4cVD9l6uFPxZ+APLvRdqXArbWAAAAAElFTkSuQmCC"
					), aLL(27, "zombie", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAANwAwMi8AdwBWWFUAqgB+gH2Ji4iTlZIA1ACfop6rraoA/wC/wr/JzMn///+1mI6XAAACOElEQVRIx9WVv24TQRDGP3w2xAGcSIguhZ8gPskVUgqXVMQUFEguXEYUEEX0+A1iihRILvIGoaTCiSwXJ6VwSZcI0UXCkRU5UaLccjs7++92eYB81Xrv59nZ2W92cerpoP3umz8DZ5y11yH16j9AloL1YhQD5PfXf+f5xWcgGUWAFNWxIN10kITAV1TngpV3sFEGps53Ie6a6JWALo6Eo2uzCAMTbApPM4w8YFgRJTXrHoC1MnDJIcArHJWBnDeigO4TEaifWCBDKwSu1BoEnGAcAvfYMsCwKiLq1A2QNmLA98QA69sxYAENTMNNqnL3GJhAREVZSuBY5Xi7c8Y12lGbam5ogMq0BCpzdkPlC23jGQPDp/SzMGNDJQdQzH5dAw0VoAihSewXg0MNdCVwDp7PaUBTNQ3Is+7TfItD4bE88YSBVAJNml9TKajFLCDjwQdkaWY1NwcDXJoIA28X0DnYJcw2j1dMDp+KvjJJmkKdyLIMaH7ubtOUmg5rof8nduVo2z2siXRcrqcLM6oUrsmUIM/KD785gBB7wBvPMGy5Xx+0EX58LFnOMe3dOGbaCUzrL1ox22e0Jmmwokd/nMYprp997UPtzxskXvNyFksqprLNltv+b7FK0+dsO3GIl/4VlIL/x7HKVxD3xr0s55npiRAoNc3DBJYQs+eCavkwgal0nQXy4MXJ5FVogVv9nthHTfaGBa4QvHpp9acFLjpJAAzhqRYA9mGWetSLvN0HbaP38dc/qn80XpfaOx2MlAAAAABJRU5ErkJggg=="
					), aLL(28, "noFullSending", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEX///8A/wD4+Pjp6ekl6yXExMSZmZkAwAAygzJZWVkgTCAXNBcQHxAIDggCBAIAAACV9pxNAAAC1ElEQVR42u2VzWsaQRTAh13Wu6cBU9q9VPC2p8Cm/8ReGkibkiWSQyGJ7ClQov4Peio0LiH00EIqEkJomkZ6EAmx9VSltenSi2LaklNcVo3T92bW1XwUL6WnzOmN7+eb970kPOGQW+AfAmt/U64JIMI2b9ZzBQB3lyrWTXp6PPuDA2kj5t4EpDOKK55okpXymm+EBsbWa2TVEk4ms3KeDVBDi4z1OPLM6Wp6axjmeyN6xj4IPWN9IOjZwFQcdwhMeer8fhlM9eIqmbbhj/mLkpR77hR8IFXZlXP1MK3GCZzohUV7be1xicx1BUDP4htmqBGOdFQEpEQheWKGvmhEObQQoEVPg+uDejJL+NFbxR15wwQpUQCAVhkoZkqSXYTf5kAO9cGnl8uLgNYBuMNqYFmyM8pHg8i2pxLlmxHz7rNzcMcFIFnT0O7MT02vEdn5bZCVrHxgRAfgkdJFYFE83KiBRunmDR0FEmsdAdAbA8qprHIw66aXjg29ife3GpFfWByQ0Z9ypG/E2m4ql1GqW3DfQ2CDA9KjDALUa5InbvqztGrjfe+1RiQOxJ8yAZzPb8m5tjZTWsB7IW8QKWdhmINDH4DshDCFlwHasNZ9gITaqpQziQC2/SewNwTQCYAs+vDKd3IMGD6R2BoPcwS0l30nE5DlWP1IE4kaAQ0I8+Q7hHnYgTL0O+pV4JcRa9oeJOoT6pxhsQIAU23oWQVS3YMAeLlbYwAvFq8KCDuidRbKIwDL7fHCExvLjYJsbwYANkzF4RaiDBsG21PvWwGALbeZ6sZVadruRdrq/C6R5pzWcC4Y86Bpob1xcFghnNyRbRAG/uiB4gLbHkyhvo6zZoYcxvaCDZOEwREj+W6frxMKg3NqBSuIwpvly7O/DqM3AmB4T69uhzem0hgCMP7b13YM/arpdQFQWCCF6wtmKlggE1fQvYcTltjENThxkd5+cf4P8Acm8L1xck3dqAAAAABJRU5ErkJggg=="
					)
		}
	}, this.get = function(eJ) {
		return canvas[eJ]
	}, this.wG = function(name) {
		for (var aC = a3l.length - 1; 0 <= aC; aC--)
			if (a3l[aC] === name) return canvas[aC];
		return aLF
	}, this.v6 = function() {
		return aLE <= 0
	}, this.aLH = function() {
		aLE = 0, aLI()
	}
}

function cX() {
	var aLR = [
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
		aLS = [
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
	this.aLT = null, this.aLU = null, this.aLV = null, this.aLW = null, this.aLX = null, this.aLY = null, this.aLZ = null, this.aLa = null, this.aLb = null, this.aLc = null;

	function aLj(kC, oH) {
		for (var aLT = ad.aLT, aLU = ad.aLU, aLV = ad.aLV, aC = kC; aC < oH; aC++) aLT[aC] = bO.g1(64 * az.random(), az.value(100)) << 2, aLU[aC] = bO.g1(64 * az.random(), az.value(100)) << 2, aLV[aC] = bO.g1(64 * az.random(), az.value(100)) << 2
	}

	function aLi(kC, oH) {
		for (var colorsData = aE.data.colorsData, aLT = ad.aLT, aLU = ad.aLU, aLV = ad.aLV, aC = kC; aC < oH; aC++) {
			var g2 = colorsData[aC];
			aLT[aC] = 4 * (g2 >> 12), aLU[aC] = 4 * (g2 >> 6 & 63), aLV[aC] = 4 * (63 & g2)
		}
	}

	function aM0(fE, aM2) {
		aFj[fE] = 0, aFj[fE + 1] = 0, aFj[fE + 2] = aM2, aFj[fE + 3] = 0, aM3(fE)
	}

	function aM3(fE) {
		var fh;
		be.oP || (fh = ad.a1V(fE), fE = ad.a1W(fE), be.oP = fh >= bd.aFi[0] && fh <= bd.aFi[2] && fE >= bd.aFi[1] && fE <= bd.aFi[3])
	}
	this.fc = new Int32Array(4), this.aLg = new Int32Array(8), this.dl = function() {
		var fc = this.fc,
			fc = (fc[0] = -4 * bV.fl, fc[1] = 4, fc[2] = -fc[0], fc[3] = -fc[1], this.aLg);
		fc[0] = -4 * bV.fl - 4, fc[1] = -4 * bV.fl, fc[2] = -4 * bV.fl + 4, fc[3] = -4, fc[4] = 4, fc[5] = 4 * bV.fl - 4, fc[6] = 4 * bV.fl, fc[7] = 4 * bV.fl + 4
	}, this.dk = function() {
		if (this.aLT ? (this.aLT.fill(0), this.aLU.fill(0), this.aLV.fill(0), this.aLW.fill(0), this.aLX.fill(0), this.aLY.fill(0), this.aLZ.fill(0), this.aLa.fill(0), this.aLb.fill(0), this.aLc.fill(0), this.aC6.fill(0)) : (this.aLT =
				new Uint8Array(aE.fX), this.aLU = new Uint8Array(aE.fX), this.aLV = new Uint8Array(aE.fX), this.aLW = new Uint8Array(aE.fX), this.aLX = new Uint8Array(aE.fX), this.aLY = new Uint8Array(aE.fX), this.aLZ = new Uint8Array(aE.fX),
				this.aLa = new Uint8Array(aE.fX), this.aLb = new Uint8Array(aE.fX), this.aLc = new Uint8Array(aE.fX), this.aC6 = new Uint8Array(aE.fX)), aE.iV)
			for (var aEM = bj.aEM, aLT = ad.aLT, aLU = ad.aLU, aLV = ad.aLV, aC = aE.fX - 1; 0 <= aC; aC--) {
				var ek = aEM[aC],
					lr = bO.g1((aLS[ek][3] + 1) * az.random(), az.value(100));
				aLT[aC] = aLR[ek][0] + lr * aLS[ek][0], aLU[aC] = aLR[ek][1] + lr * aLS[ek][1], aLV[aC] = aLR[ek][2] + lr * aLS[ek][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aLi(0, aE.kw), aLj(aE.kw, aE.fX)) : aLj(0, aE.fX) : aLi(0, aE.fX);
		! function() {
			var aC, fd, aLT = ad.aLT,
				aLU = ad.aLU,
				aLV = ad.aLV;
			for (aC = aE.fX - 1; 0 <= aC; aC--) fd = bO.g1(aLT[aC] + aLU[aC] + aLV[aC], 3), aLT[aC] += aLp(fd - aLT[aC], 2), aLU[aC] += aLp(fd - aLU[aC], 2), aLV[aC] += aLp(fd - aLV[aC], 2), aLT[aC] -= aLT[aC] % 4, aLU[aC] -= aLU[aC] % 4, aLV[
				aC] -= aLV[aC] % 4
		}(),
		function() {
			for (var fa = aE.fX, aLT = ad.aLT, aLU = ad.aLU, aLV = ad.aLV, aLW = ad.aLW, aC = 0; aC < fa; aC++) aLT[aC] += aC >> 7, aLU[aC] += aC >> 5 & 3, aLV[aC] += aC >> 3 & 3, aLW[aC] = 7 & aC
		}(), this.aLm(),
			function() {
				for (var fa = aE.fX, aLX = ad.aLX, aLY = ad.aLY, aLZ = ad.aLZ, aLT = ad.aLT, aLU = ad.aLU, aLV = ad.aLV, aC = 0; aC < fa; aC++) {
					var eI = aLT[aC],
						v2 = aLU[aC],
						fu = aLV[aC];
					60 <= eI + v2 + fu ? (aLX[aC] = Math.max(eI - 40, 3 & eI), aLY[aC] = Math.max(v2 - 40, 3 & v2), aLZ[aC] = Math.max(fu - 40, 3 & fu)) : (aLX[aC] = eI + 40, aLY[aC] = v2 + 40, aLZ[aC] = fu + 40)
				}
			}(),
			function() {
				for (var fa = aE.fX, aLa = ad.aLa, aLb = ad.aLb, aLc = ad.aLc, aLT = ad.aLT, aLU = ad.aLU, aLV = ad.aLV, aC = 0; aC < fa; aC++) {
					var eI = aLT[aC],
						v2 = aLU[aC],
						fu = aLV[aC];
					688 <= eI + v2 + fu ? (aLa[aC] = eI - 88, aLb[aC] = v2 - 88, aLc[aC] = fu - 88) : (aLa[aC] = Math.min(eI + 88, 252 + (3 & eI)), aLb[aC] = Math.min(v2 + 88, 252 + (3 & v2)), aLc[aC] = Math.min(fu + 88, 252 + (3 & fu)))
				}
			}()
	}, this.aAy = function(player) {
		var h = bR.g9;
		return h[0] = this.aLT[player], h[1] = this.aLU[player], h[2] = this.aLV[player], h
	}, this.aLm = function() {
		for (var aC = aE.fX - 1; 0 <= aC; aC--) this.aC6[aC] = this.aLT[aC] + this.aLU[aC] + this.aLV[aC] < 280 ? 0 : 1
	}, this.a1V = function(fE) {
		return bO.g1(fE, 4) % bV.fl
	}, this.a1W = function(fE) {
		return bO.g1(fE, 4 * bV.fl)
	}, this.a13 = function(fh, fj) {
		return Math.floor(4 * (fj * bV.fl + fh))
	}, this.a1J = function(fE) {
		var fc = this.fc;
		return this.aLq(fE + fc[0]) || this.aLq(fE + fc[1]) || this.aLq(fE + fc[2]) || this.aLq(fE + fc[3])
	}, this.fy = function(fE) {
		var fc = this.fc;
		return this.ff(fE + fc[0]) || this.ff(fE + fc[1]) || this.ff(fE + fc[2]) || this.ff(fE + fc[3])
	}, this.a1H = function(fE, player) {
		var fc = this.fc;
		return this.aLr(fE + fc[0], player) || this.aLr(fE + fc[1], player) || this.aLr(fE + fc[2], player) || this.aLr(fE + fc[3], player)
	}, this.aLs = function(aC, aLt, aLu, aLv) {
		this.aLT[aC] = aLt >> 16, this.aLU[aC] = aLt >> 8 & 255, this.aLV[aC] = 255 & aLt, this.aLX[aC] = aLu >> 16, this.aLY[aC] = aLu >> 8 & 255, this.aLZ[aC] = 255 & aLu, this.aLa[aC] = aLv >> 16, this.aLb[aC] = aLv >> 8 & 255, this.aLc[aC] =
			255 & aLv
	}, this.aLw = function(aC) {
		return [(this.aLT[aC] << 16) + (this.aLU[aC] << 8) + this.aLV[aC], (this.aLX[aC] << 16) + (this.aLY[aC] << 8) + this.aLZ[aC], (this.aLa[aC] << 16) + (this.aLb[aC] << 8) + this.aLc[aC]]
	}, this.hA = function(fE) {
		return 208 <= aFj[fE + 3]
	}, this.a1P = function(player, fE) {
		return this.hA(fE) && this.a1S(player, fE)
	}, this.a1S = function(player, fE) {
		return player === this.fS(fE)
	}, this.aLx = function(fE) {
		return 208 <= aFj[fE + 3] && aFj[fE + 3] < 224
	}, this.k7 = function(fE) {
		return 224 <= aFj[fE + 3] && aFj[fE + 3] < 248
	}, this.aLy = function(fE) {
		return 248 <= aFj[fE + 3]
	}, this.a1I = function(fE) {
		for (var fc = this.fc, aC = 3; 0 <= aC; aC--)
			if (this.is(fE + fc[aC])) return !0;
		return !1
	}, this.fV = function(fE) {
		return this.hA(fE) || this.fR(fE)
	}, this.is = function(fE) {
		return 0 === aFj[fE + 3] && 2 === aFj[fE + 2]
	}, this.fR = function(fE) {
		return 0 === aFj[fE + 3] && 1 === aFj[fE + 2]
	}, this.a08 = function(fE) {
		return 0 === aFj[fE + 3] && 3 === aFj[fE + 2]
	}, this.ff = function(fE) {
		return 0 === aFj[fE + 3] && 5 === aFj[fE + 2]
	}, this.aLq = function(fE) {
		return 0 === aFj[fE + 3] && 3 <= aFj[fE + 2]
	}, this.fI = function(fE) {
		return (aFj[fE] >> 1 << 8) + aFj[fE + 1]
	}, this.aLz = function(fE) {
		return 1 & aFj[fE]
	}, this.aLr = function(fE, player) {
		return this.fR(fE) || this.hA(fE) && player !== this.fS(fE)
	}, this.fS = function(fE) {
		return ((3 & aFj[fE]) << 7) + ((3 & aFj[fE + 1]) << 5) + ((3 & aFj[fE + 2]) << 3) + (7 & aFj[fE + 3])
	}, this.a1Q = function(fE) {
		aM0(fE, 1)
	}, this.aM1 = function(fE) {
		aM0(fE, 2)
	}, this.a14 = function(fE, player) {
		aFj[fE] = this.aLT[player], aFj[fE + 1] = this.aLU[player], aFj[fE + 2] = this.aLV[player], aFj[fE + 3] = 208 + this.aLW[player], aM3(fE)
	}, this.h5 = function(fE, player) {
		aFj[fE] = this.aLX[player], aFj[fE + 1] = this.aLY[player], aFj[fE + 2] = this.aLZ[player], aFj[fE + 3] = 224 + this.aLW[player], aM3(fE)
	}, this.k8 = function(fE, player) {
		aFj[fE] = this.aLa[player], aFj[fE + 1] = this.aLb[player], aFj[fE + 2] = this.aLc[player], aFj[fE + 3] = 248 + this.aLW[player], aM3(fE)
	}
}

function cw() {
	var aM4 = 0,
		aM5 = new Uint16Array(64);

	function f6(a8r) {
		aM4 -= 2;
		for (var aC = a8r; aC < aM4; aC += 2) aM5[aC] = aM5[aC + 2], aM5[aC + 1] = aM5[aC + 3]
	}
	this.dk = function() {
		aM4 = 0
	}, this.ef = function() {
		var aC, k5, jE;
		if (0 !== aM4)
			if (0 === ah.nY[aE.fK]) aM4 = 0;
			else if (0 === ae.gh(aE.fK)) aM4 = 0;
		else
			for (aC = aM4 - 2; 0 <= aC; aC -= 2)(k5 = aM5[aC]) < aE.fX && 0 === ah.nY[k5] ? f6(aC) : (jE = aM5[aC + 1], (k5 >= aE.fX && bv.aM7(aE.fK) || k5 < aE.fX && bv.aM8(aE.fK, k5)) && (bB.i1.i8(jE, k5), f6(aC)))
	}, this.i9 = function(k5, jE) {
		! function(k5, jE) {
			for (var aC = 0; aC < aM4; aC += 2)
				if (aM5[aC] === k5) return aM5[aC + 1] = Math.min(aM5[aC + 1] + jE, 1023), 1;
			return
		}(k5, jE) && 64 !== aM4 && (aM5[aM4] = k5, aM5[aM4 + 1] = jE, aM4 += 2)
	}
}

function cY() {
	function aMG(player) {
		var eb;
		bD.gw.a6v(player) && (eb = ah.hc[player] - ah.a70[player] + ae.aMI(player), bg.h0(player, Math.abs(eb), eb < 0 ? 18 : 12)), ah.hc[player] = 0, ah.a70[player] = 0
	}

	function aMP() {
		aY.show(!1, !1, !1, !0), aX.aEs(), bU.a3A.a3z()
	}

	function aMC(player, aMO) {
		for (var aC = aMO.length - 1; 0 <= aC; aC--) ae.aMR(aMO[aC], player)
	}

	function aMF(player) {
		var jU = ah.jU,
			jV = ah.jV,
			jW = ah.jW,
			jX = ah.jX,
			fl = bV.fl;
		if (ah.hO[player]) {
			ah.hO[player] = 0;
			for (var nz = jU[player], o0 = jW[player], fh = jV[player]; nz <= fh; fh--)
				for (var fj = jX[player]; o0 <= fj; fj--) {
					var h8 = 4 * (fj * fl + fh);
					ad.a1P(player, h8) && ad.a1Q(h8)
				}
		}
		jV[player] = jX[player] = 0, jU[player] = jW[player] = Math.max(fl, bV.fm)
	}
	this.dt = function(h8) {
		var player, eb = ah.hO[h8] + ah.a0z[h8];
		bQ.z.l0[h8] ? eb && (aMC(player = h8, ae.aMD(player)), ag.aME(player), aMF(player), aG.gy(player), ae.clear(player), aMG(player), function(player) {
			ah.a0z[player] = 0, ah.h2[player] = [], ah.hG[player] = [], ah.hH[player] = [], ah.fz[player] = []
		}(player)) : !eb && ah.h2[h8].length || this.aMB(h8)
	}, this.aMB = function(player) {
		! function(player) {
			bD.gw.kJ(player) || (ah.a43[player] = bl.a4I.aMN(), aE.a3Q++);
			var aMO = ae.aMD(player);
			0 === aMO.length ? bD.gw.a6s(player) && aMP() : (aMC(player, aMO), function(player, aMO) {
				var aMT = aMO[function(aMO) {
					var aC, eJ = 0;
					for (aC = aMO.length - 1; 1 <= aC; aC--) ah.hO[aMO[aC]] > ah.hO[aMO[eJ]] && (eJ = aC);
					return eJ
				}(aMO)];
				9 === aE.lE && (1 === bj.fY[player] ? az.ko(8) && b0.aMU(aMT) : aF.iK[player] && (aO.aAH(765, 0), aO.a1s(280, L(149, [ah.a1t[aMT], ah.a1t[player]]), 765, aMT, bE.pJ, bE.qk, -1, !0)));
				if (bD.gw.a6s(player)) aMP(), aO.a3c(aMT, 1);
				else {
					for (var aC = aMO.length - 1; 0 <= aC; aC--)
						if (bD.gw.a6v(aMO[aC]) && (bg.nU[4 - bD.gw.kJ(player)]++, bD.gw.a6s(aMO[aC]))) return aO.a3c(player, 0);
					bD.gw.kJ(player) || aO.aA2(0, player, aMT)
				}
			}(player, aMO))
		}(player), ag.aME(player), aMF(player), aMG(player),
			function(player) {
				ah.nY[player] = 0, ah.h2[player] = null, ah.hG[player] = null, ah.hH[player] = null, ah.fz[player] = null
			}(player), aG.gy(player), ae.clear(player), bQ.aML.aMM(player)
	}
}

function d1() {
	var input;

	function aMV(e) {
		(e = e.target.files) && 0 < e.length && b7.aMY(e[0])
	}

	function aMc(e) {
		var ek = new Image;
		ek.onload = aMd, ek.src = e.target.result
	}

	function aMd(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aMf = bm.buffer.data[162].value,
			max = Math.min(bV.aMg, aMf),
			aMf = (max = a1.id || bM.sw() ? Math.min(1400, aMf) : max) / Math.max(j, k);
		if (aMf < 1 && (j = Math.floor(aMf * j + .125), k = Math.floor(aMf * k + .125)), max < j || max < k || j < 10 || k < 10) aMf = "Invalid Image Dimensions!", a1.yk ? a1.yk.showToast(aMf) : alert(aMf);
		else {
			for (var max = document.createElement("canvas"), aMf = (max.width = j, max.height = k, max.getContext("2d")), aMi = document.createElement("canvas"), aMj = (aMi.width = e.width, aMi.height = e.height, aMi.getContext("2d")), e = (aMj
					.drawImage(e, 0, 0), aMj.getImageData(0, 0, aMi.width, aMi.height)), aMj = aMf.createImageData(j, k), src = e.data, aMm = aMj.data, aCh = aMi.width / j, aCi = aMi.height / k, fj = 0; fj < k; fj++)
				for (var fh = 0; fh < j; fh++) {
					var aMn = Math.floor(fh * aCh),
						aMn = 4 * (Math.floor(fj * aCi) * aMi.width + aMn),
						aMq = 4 * (fj * j + fh);
					aMm[aMq] = src[aMn], aMm[1 + aMq] = src[1 + aMn], aMm[2 + aMq] = src[2 + aMn], aMm[3 + aMq] = 255
				}
			aMf.putImageData(aMj, 0, 0), 20 === u.ug && u.a4f().aMd(max)
		}
	}
	this.dk = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aMV
	}, this.x8 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aMW = function() {
		input.click()
	}, this.aMY = function(aMZ) {
		var h = aMZ.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aMc, h.readAsDataURL(aMZ))
	}
}

function cz() {
	this.aMr = new Uint32Array(aE.fX), this.dk = function() {
		10 === aE.lE && this.aMr.fill(0)
	}, this.ef = function() {
		10 === aE.lE && this.ll()
	}, this.ll = function() {
		for (var h8, target, aF5, aMr = this.aMr, w9 = am.lX, a71 = ah.hc, aC = am.lS - 1; 0 <= aC; aC--)(h8 = w9[aC]) >= aE.kw || (target = Math.max(bO.g1(a71[h8], 4), 2048), aF5 = Math.max(af.aF6(h8), 100), aMr[h8] += bO.g1(aF5 * target, 1e4),
			aMr[h8] > target && (aMr[h8] = target))
	}, this.a77 = function(player, iK) {
		return 10 !== aE.lE || bD.gw.kJ(player) ? iK : Math.min(this.aMr[player], iK)
	}, this.a7D = function(player, iK) {
		10 !== aE.lE || bD.gw.kJ(player) || (this.aMr[player] -= iK)
	}
}

function d2() {
	var aMs = -1,
		aMt = null,
		aMu = -1,
		xZ = 4;

	function aMw() {
		aN.a9L() ? be.render() : be.a3a()
	}

	function aN4(ek, fd) {
		var eI = ek >> 16,
			v2 = ek >> 8 & 255,
			ek = 255 & ek,
			aN5 = 255 - fd,
			aN5 = (aN5 < eI && aN5 < v2 && aN5 < ek && (fd = -fd), aMs >> 7),
			aN7 = aMs >> 5 & 3,
			aN8 = aMs >> 3 & 3;
		return (Math.max(Math.min(eI + fd, 252 + aN5), aN5) << 16) + (Math.max(Math.min(v2 + fd, 252 + aN7), aN7) << 8) + Math.max(Math.min(ek + fd, 252 + aN8), aN8)
	}

	function aMv() {
		return -1 !== aMs && (ad.aLs(aMs, aMt[0], aMt[1], aMt[2]), aN1(aMs), aMs = -1)
	}

	function aN1(player) {
		bi.ds = !0;
		for (var jU = ah.jU[player], jW = ah.jW[player], jV = ah.jV[player], jX = ah.jX[player], fj = jW; fj <= jX; fj++)
			for (var fh = jU; fh <= jV; fh++) {
				var fE = ad.a13(fh, fj);
				ad.a1P(player, fE) && (ad.aLy(fE) ? ad.k8(fE, player) : ad.k7(fE) ? ad.h5(fE, player) : ad.a14(fE, player))
			}
	}
	this.dk = function() {
		aMt = null, aMu = aMs = -1, xZ = bO.il(Math.floor(bm.buffer.data[16].value), 0, 16)
	}, this.ef = function(by) {
		if (bm.buffer.data[15].value && 0 !== xZ && (by || !bM.sw())) {
			var by = bP.hr(bM.hf),
				hs = bP.ht(bM.hg);
			if (bP.hu(by, hs)) {
				by = bP.fx(by, hs), hs = bP.fQ(by);
				if (aMu === hs)
					if (ad.hA(hs)) {
						if (aMs === ad.fS(hs)) return
					} else if (-1 === aMs) return;
				! function(fE) {
					ad.hA(fE) ? (fE = ad.fS(fE)) !== aMs && (aMv(), function(player) {
						aMs = player, aMt = ad.aLw(player);
						var aMz = function() {
							var sM = aMt,
								aN2 = xZ << 2,
								aN3 = aN2 << 1;
							return [aN4(sM[0], aN2), aN4(sM[1], aN3), aN4(sM[2], aN3)]
						}();
						ad.aLs(player, aMz[0], aMz[1], aMz[2]), aN1(player)
					}(fE), aMw()) : aMv() && aMw()
				}(aMu = hs)
			} else aMv() && aMw()
		}
	}
}

function d3() {
	var xM = 0,
		aN9 = 0,
		aNA = 0,
		aNB = 0,
		aMu = -1;

	function aNE(fE) {
		if (aMu === fE) return !1;
		if (-1 === (aMu = fE)) xM = 0, aO.aAU(xM, 0);
		else {
			if (ad.hA(fE)) return aNA = ad.fS(fE), kv = ah.hc[aNA] - ah.a70[aNA], (4 !== xM || kv !== aN9) && (xM = 4, aN9 = kv, aO.aAU(xM, kv), !0);
			if (ad.fR(fE)) return 3 !== xM && (xM = 3, aO.aAU(xM, 0), !0);
			if (ad.ff(fE)) return 2 !== xM && (xM = 2, aO.aAU(xM, 0), !0);
			var kv = bQ.ll.a99(bM.hf, bM.hg);
			if (-1 === kv) return 1 !== xM && (xM = 1, aO.aAU(xM, 0), !0);
			fE = bQ.z.aA9[kv];
			if (aNA = bQ.z.mp[kv], aNB = bQ.z.mq[kv] >> 3, 5 === xM && fE === aN9) return !1;
			xM = 5, aN9 = fE, aO.aAU(xM, fE)
		}
		return !0
	}
	this.dk = function() {
		aNB = aNA = aN9 = xM = 0, aMu = -1
	}, this.ef = function(by) {
		var hs;
		!by && bM.sw() || (by = bP.hr(bM.hf), hs = bP.ht(bM.hg), bP.hu(by, hs) ? (by = bP.fx(by, hs), aNE(bP.fQ(by))) : aNE(-1))
	}, this.nF = function() {
		var aNG, kv, a97, aNF;
		if (0 !== xM && 2 !== xM)
			if (bM.sw()) {
				if (1 !== xM && 3 !== xM) {
					if (4 === xM) return void(kv = ah.hc[aNA] - ah.a70[aNA], aN9 === kv || (aN9 = kv, aO.aAU(xM, kv)));
					(a97 = bQ.ll.ny(aNB, aNA)) < 0 ? (xM = 1, aO.aAU(xM, 0)) : (aNF = bQ.z.aA9[a97]) !== aN9 && (aN9 = aNF, aO.aAU(xM, aNF))
				}
			} else if (1 === xM) - 1 !== (a97 = bQ.ll.a99(bM.hf, bM.hg)) && (xM = 5, aN9 = bQ.z.aA9[a97], aO.aAU(xM, aN9));
		else if (3 === xM) ad.hA(aMu) && (xM = 4, aNG = ad.fS(aMu), aN9 = ah.hc[aNG] - ah.a70[aNG], aO.aAU(xM, aN9));
		else if (4 === xM) {
			if (ad.hA(aMu)) return void(aNG = ad.fS(aMu), kv = ah.hc[aNG] - ah.a70[aNG], aN9 === kv || (aN9 = kv, aO.aAU(xM, kv)));
			xM = 3, aO.aAU(xM, 0)
		} else - 1 === (a97 = bQ.ll.a99(bM.hf, bM.hg)) ? (xM = 1, aO.aAU(xM, 0)) : (aNF = bQ.z.aA9[a97]) !== aN9 && (aN9 = aNF, aO.aAU(xM, aNF))
	}
}

function dc() {
	function aNI(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aNQ, h.readAsText(e))
	}

	function aNQ(e) {
		var aNT;
		aE.a3O || (e = JSON.parse(e.target.result), aNT = aE.data = new a80, aNU(e, aNT, "mapType", 0, 2), aNU(e, aNT, "mapProceduralIndex", 0, 255), aNU(e, aNT, "mapRealisticIndex", 0, 255), aNU(e, aNT, "mapSeed", 0, 16383), function(aNS, aNT, h9,
				max) {
				aNS = aNS[h9];
				aNT[h9] = aNa(aNS) ? aNS.slice(0, max) : aNT[h9]
			}(e, aNT, "mapName", 20), function(aNS, aNT, h9) {
				var aMe;
				2 === aNT.mapType && (!aNa(aNS = aNS[h9]) || aNS.length <= 20 ? aNT.mapType = 0 : ((aMe = new Image).onload = function() {
					bC.aNb.aNc(aMe, 1), aMe.onload = null, aMe = null
				}, aMe.src = aNS))
			}(e, aNT, "canvas"), aNU(e, aNT, "passableWater", 0, 1), aNU(e, aNT, "passableMountains", 0, 1), aNU(e, aNT, "playerCount", 1, 512), aNU(e, aNT, "humanCount", 1, 1), aNU(e, aNT, "selectedPlayer", 0, 0), aNU(e, aNT, "gameMode", 0, 1),
			aNU(e, aNT, "playerMode", 0, 0), aNU(e, aNT, "battleRoyaleMode", 0, 0), aNU(e, aNT, "numberTeams", 0, 8), aNU(e, aNT, "isZombieMode", 0, 0), aNU(e, aNT, "isContest", 0, 0), aNU(e, aNT, "isReplay", 0, 0), aNX(e, aNT, "elo", 16, 2,
				16383), aNU(e, aNT, "colorsType", 0, 1), aNU(e, aNT, "colorsPersonalized", 0, 1), aNX(e, aNT, "colorsData", 32, 512, 262143), aNU(e, aNT, "selectableColor", 0, 1), aNX(e, aNT, "teamPlayerCount", 16, 9, 512), aNU(e, aNT,
				"neutralBots", 0, 1), aNU(e, aNT, "botDifficultyType", 0, 3), aNU(e, aNT, "botDifficultyValue", 0, 15), aNX(e, aNT, "botDifficultyTeam", 8, 9, 15), aNX(e, aNT, "botDifficultyData", 8, 512, 15), aNU(e, aNT, "spawningType", 0, 2),
			aNU(e, aNT, "spawningSeed", 0, 16383), aNX(e, aNT, "spawningData", 16, 1024, 4095), aNU(e, aNT, "selectableSpawn", 0, 1), aNU(e, aNT, "playerNamesType", 0, 2),
			function(aNS, aNT, h9, size, max) {
				var a63 = aNS[h9];
				if (Array.isArray(a63)) {
					for (var a64 = new Array(size), fa = Math.min(a63.length, size), aC = 0; aC < fa; aC++) a64[aC] = aNa(a63[aC]) ? a63[aC].slice(0, max) : "";
					a64.fill("", fa), aNT[h9] = a64
				}
			}(e, aNT, "playerNamesData", 512, 20), aNU(e, aNT, "selectableName", 0, 1), aNU(e, aNT, "aIncomeType", 0, 2), aNU(e, aNT, "aIncomeValue", 0, 255), aNX(e, aNT, "aIncomeData", 8, 512, 255), aNU(e, aNT, "tIncomeType", 0, 2), aNU(e, aNT,
				"tIncomeValue", 0, 255), aNX(e, aNT, "tIncomeData", 8, 512, 255), aNU(e, aNT, "iIncomeType", 0, 2), aNU(e, aNT, "iIncomeValue", 0, 255), aNX(e, aNT, "iIncomeData", 8, 512, 255), aNU(e, aNT, "sResourcesType", 0, 2), aNU(e, aNT,
				"sResourcesValue", 0, 2047), aNX(e, aNT, "sResourcesData", 16, 512, 2047), u.y(), u.z.uY[0] = 0, u.v(19))
	}

	function aNU(aNS, aNT, h9, min, max) {
		aNS = aNS[h9];
		aNT[h9] = "number" == typeof aNS && min <= aNS && aNS <= max ? Math.floor(aNS) : aNT[h9]
	}

	function aNa(sB) {
		return "string" == typeof sB
	}

	function aNX(aNS, aNT, h9, aNd, size, max) {
		var a63 = aNS[h9];
		if (Array.isArray(a63)) {
			for (var a64 = new(8 === aNd ? Uint8Array : 16 === aNd ? Uint16Array : Uint32Array)(size), fa = Math.min(a63.length, size), aC = 0; aC < fa; aC++) a64[aC] = bO.il(a63[aC], 0, max);
			aNT[h9] = a64
		}
	}
	this.aNH = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aNI, input.click()
	}, this.aNJ = function() {
		for (var aNM, a3s, a8a = aE.data, keys = Object.keys(a8a), aNK = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a8a[key] instanceof Uint8Array || a8a[key] instanceof Uint16Array || a8a[key] instanceof Uint32Array ? aNK[key] = Array.from(a8a[key]) : aNK[key] = a8a[key]
		}
		aNK.canvas = 2 === aNK.mapType && aNK.canvas ? aNK.canvas.toDataURL() : null, aNM = aNK, aNM = JSON.stringify(aNM, null, 2), aNM = new Blob([aNM], {
			type: "application/json"
		}), (a3s = document.createElement("a")).href = URL.createObjectURL(aNM), a3s.download = "tt_scenario.json", a3s.click()
	}
}

function cc() {
	var aNe, aNf, size, k5, iK, aNg;

	function aNh(player) {
		return player < aE.kw ? aNe * player : aNe * aE.kw + aNf * (player - aE.kw)
	}
	this.dk = function() {
		aNe = aE.kw < 16 ? 12 : 8, aNf = 4;
		var fa = aNh(aE.fX);
		size = new Uint8Array(aE.fX), k5 = new Uint16Array(fa), iK = new Uint32Array(fa), aNg = new Uint8Array(fa)
	}, this.s2 = function(aBa, aNi) {
		var aNj = this.hd(aBa, aNi),
			aNi = (this.hb(aBa, aNi, 0), bD.gw.gz(aBa, aNj));
		bg.h0(aBa, aNj - aNi, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aMR = function(player, aNi) {
		var aNm, aNi = function(player, aNi) {
			var aC, lr = aNh(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (k5[lr + aC] === aNi) return aC;
			return size[player]
		}(player, aNi);
		aNi !== size[player] && (aNm = iK[aNh(player) + aNi], this.h1(player, aNi), this.ej(player, aNm, aE.fX))
	}, this.kH = function(player, aNi) {
		for (var lr = aNh(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k5[lr + aC] === aNi) return !0;
		return !1
	}, this.ka = function(player) {
		return player < aE.kw ? size[player] < aNe : size[player] < aNf
	}, this.gh = function(player) {
		return size[player]
	}, this.gm = function(player, aC) {
		return k5[aNh(player) + aC]
	}, this.gn = function(player, aC) {
		return iK[aNh(player) + aC]
	}, this.hd = function(player, aNi) {
		for (var lr = aNh(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k5[lr + aC] === aNi) return iK[lr + aC];
		return 0
	}, this.aMI = function(player) {
		for (var lr = aNh(player), g2 = 0, aC = size[player] - 1; 0 <= aC; aC--) g2 += iK[lr + aC];
		return g2
	}, this.hb = function(player, aNi, aNm) {
		for (var lr = aNh(player), aC = size[player] - 1; 0 <= aC; aC--) k5[lr + aC] === aNi && (iK[lr + aC] = aNm)
	}, this.hM = function(player, aC, aNm) {
		iK[aNh(player) + aC] = Math.max(aNm, 0)
	}, this.hN = function(player, aC) {
		aNg[aNh(player) + aC] = 0
	}, this.go = function(player, aC) {
		return aNg[aNh(player) + aC]
	}, this.ej = function(player, aNm, aNi) {
		ap.jj.kY[player] = ap.jj.kY[aNi] = 8, bD.gw.a6v(aNi) && bg.nU[6 - bD.gw.kJ(player)]++;
		for (var lr = aNh(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k5[lr + aC] === aNi) return iK[lr + aC] += aNm, void(iK[lr + aC] = iK[lr + aC] > aE.a73 ? aE.a73 : iK[lr + aC]);
		k5[lr + size[player]] = aNi, iK[lr + size[player]] = aNm, aNg[lr + size[player]] = 1, size[player]++, aNi === aE.fK ? aO.a3c(player, 5) : player < aE.kw && player === aE.fK && ag.aA4(aNi)
	}, this.h1 = function(player, eJ) {
		var ft, lr;
		if (0 !== size[player])
			for (lr = aNh(player), size[player]--, ft = eJ; ft < size[player]; ft++) k5[lr + ft] = k5[lr + ft + 1], iK[lr + ft] = iK[lr + ft + 1], aNg[lr + ft] = aNg[lr + ft + 1]
	}, this.aMD = function(player) {
		for (var ft, lr, aMO = [], aC = am.lS - 1; 0 <= aC; aC--)
			for (lr = aNh(am.lX[aC]), ft = size[am.lX[aC]] - 1; 0 <= ft; ft--)
				if (k5[lr + ft] === player) {
					aMO.push(am.lX[aC]);
					break
				} return aMO
	}
}

function cd() {
	var aNn;

	function aNp(player) {
		var eI, kb;
		return bD.gw.kJ(player) && player < aE.kw ? 0 : (eI = aNn[bO.g1((aE.fX - 1) * ah.hO[player], aE.kg)], bi.kt() < 1920 && (eI = Math.max(bO.g1(100 * (13440 - 6 * bi.kt()), 1920), eI)), kb = af.kc(player), ah.hc[player] > kb && (eI -= bO.g1(2 *
			eI * (ah.hc[player] - kb), kb)), Math.min(Math.max(eI, 0), 700))
	}

	function aO1(oB) {
		for (var hO = ah.hO, lX = am.lX, aC = am.lS - 1; 0 <= aC; aC--) {
			var h8 = lX[aC];
			bD.gw.gz(h8, bO.g1(oB * hO[h8], 32))
		}
	}

	function aNy() {
		var a01 = aE.fK;
		bR.g6[0] = ah.hc[a01] - ah.a70[a01]
	}

	function aO0(eJ) {
		var a01 = aE.fK,
			a01 = ah.hc[a01] - ah.a70[a01] - bR.g6[0];
		af.aDg += a01, bg.nU[eJ] += a01
	}
	this.aDg = 0, this.dr = function() {
		for (var fa = aE.fX, aC = (aNn = new Uint16Array(fa), 0); aC < fa; aC++) aNn[aC] = 100 + aNo(bO.g1(25600 * aC, fa - 4), 9)
	}, this.dk = function() {
		(this.aDg = 0) === aE.data.iIncomeType ? this.aF6 = aNp : 1 === aE.data.iIncomeType ? this.aF6 = function(player) {
			return bO.g1(aE.data.iIncomeValue * aNp(player), 64)
		} : this.aF6 = function(player) {
			return bO.g1(aE.data.iIncomeData[player] * aNp(player), 64)
		}
	}, this.ef = function() {
		if (bi.kt() % 10 == 9 && (af.aDg = 0, function() {
				aNy();
				for (var lX = am.lX, hc = ah.hc, aC = am.lS - 1; 0 <= aC; aC--) {
					var h8 = lX[aC],
						aNz = bO.g1(af.aF6(h8) * hc[h8], 1e4);
					bD.gw.gz(h8, Math.max(aNz, 1))
				}
				aO0(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aNy(), 1 === aE.data.aIncomeType)
						for (var hO = ah.hO, lX = am.lX, oB = aE.data.aIncomeValue, aC = am.lS - 1; 0 <= aC; aC--) {
							var h8 = lX[aC];
							bD.gw.gz(h8, bO.g1(oB * hO[h8], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hO = ah.hO, lX = am.lX, oB = aE.data.aIncomeData, aC = am.lS - 1; 0 <= aC; aC--) {
								var h8 = lX[aC];
								bD.gw.gz(h8, bO.g1(oB[h8] * hO[h8], 128))
							}
						}();
					aO0(18)
				}
			}(), bi.kt() % 100 == 99)) {
			if (aNy(), 0 === aE.data.tIncomeType) aO1(32);
			else if (1 === aE.data.tIncomeType) aO1(aE.data.tIncomeValue);
			else
				for (var hO = ah.hO, lX = am.lX, oB = aE.data.tIncomeData, aC = am.lS - 1; 0 <= aC; aC--) {
					var h8 = lX[aC];
					bD.gw.gz(h8, bO.g1(oB[h8] * hO[h8], 32))
				}
			aO0(8)
		}
	}, this.kc = function(player) {
		return Math.min(100 * ah.hO[player], aE.a7w)
	}, this.r1 = function(player, r2) {
		bt.rO(player, r2, bR.g7[0], 0), bD.gw.gz(r2, bR.g7[0]), bg.rP(player, r2), ag.aNr(player, bR.g7[0] + bR.g7[1]), ag.rQ(r2, bR.g7[0]), bD.gw.n6(player)
	}, this.aNs = function() {
		for (var fa = am.lS, w9 = am.lX, lr = 0, a71 = ah.hc, aC = 0; aC < fa; aC++) lr += a71[w9[aC]];
		return lr
	}, this.aNt = function(aNu) {
		for (var h8, fa = am.lS, w9 = am.lX, lr = 0, a71 = ah.hc, fY = bj.fY, aC = 0; aC < fa; aC++) fY[h8 = w9[aC]] === aNu && (lr += a71[h8]);
		return lr
	}
}

function cf() {
	var aO5, aO6, aO7, aO8, aO9, aOA, aOB, aOC, aOD, aOE, aOF, aOG, aOH, aOI, aOJ, aOK, aOL, aOM, aOO, aOP, aGD, aOQ, aOR, aOX, aOY, aON = null,
		aOT = 0,
		aOU = !1,
		aOV = new Float32Array(4),
		aOW = 0,
		aEB = 112,
		aOZ = 0;

	function sX() {
		aOD = Math.floor(+i.io), aOE = Math.floor(.5 * aOD), aON.width = i.j, aON.height = i.k, aOO = aON.getContext("2d", {
			alpha: !0
		}), bD.sU.textAlign(aOO, 1), bD.sU.textBaseline(aOO, 1), aOO.imageSmoothingEnabled = !0
	}

	function aOa() {
		var aC, aOf;
		for (y3.font = bD.sU.uE(1, 100 * aOF), aOf = 80 / Math.floor(y3.measureText(bD.tR.a2h(aE.a73)).width), y3.font = bD.sU.uE(1, 100), aC = aE.fX - 1; 0 <= aC; aC--) aOC[aC] = 100 / Math.floor(y3.measureText(ah.a1t[aC]).width), aOB[aC] = Math
			.min(aOf, aOC[aC])
	}

	function aOg(aC) {
		return !aOZ || (aC = ah.hc[aC]) < 1e6 ? 1 : aC < 1e7 ? aOV[0] : aOV[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aOe(ie) {
		aOU = !1, aOT = bi.ea, aOM = !1, aOL = 1, aOJ = aOK = 0, ie.clearRect(0, 0, i.j, i.k);
		for (var aOm, aOn, aC, aOo, fontSize, aOp, nz = jF / ip, o0 = jG / ip, oC = (i.j + jF) / ip, oD = (i.k + jG) / ip, aOq = 0 !== ah.nY[aE.fK] && !bD.gw.kJ(aE.fK), ft = am.lS - 1; 0 <= ft; ft--) aC = am.lX[ft], (fontSize = Math.floor(aOI * ip *
			aOg(aC) * aOB[aC] * aO9[aC])) < aOH || aOD <= fontSize || aO7[aC] + aO9[aC] > nz && aO7[aC] < oC && aO8[aC] + aOA[aC] > o0 && aO8[aC] < oD && (aOm = Math.floor(i.j * (aO7[aC] + aO9[aC] / 2 - nz) / (oC - nz)), aOn = Math.floor(i.k * (
			aO8[aC] + aOA[aC] / 2 - o0) / (oD - o0) - .1 * fontSize), aOo = ad.aC6[aC], ie.font = bD.sU.uE(1 === ah.a6r[aC] ? 4 : 1, fontSize), ie.fillStyle = aOr(fontSize, aOo % 2), aOZ ? aOs(ie, aC, fontSize, aOm, aOn, aOo) : aOt(aC,
			fontSize, aOm, aOn, ie), aOM = !0, 0 < aGD[aC] ? function(aOm, aOn, fontSize, aC, ie) {
			0 === kh[aC] ? ak.td.a2Y(aOP[aC]) ? (function(aOm, aOn, fontSize, player, rD, ie) {
				for (var a0Y = aOn, ic = (ie.globalAlpha = aP1(fontSize), aOg(player) * (aOZ ? aOW : aOC[player])), a0X = aOm - .5 * fontSize / ic - .9 * fontSize, fu = 0; fu < 2; fu++) ie.fillText(ak.td.a2Q(rD), a0X, a0Y), a0X =
					aOm + .5 * fontSize / ic + .9 * fontSize;
				ie.globalAlpha = 1
			}(aOm, aOn, fontSize, aC, aOP[aC], ie), aOv(aOm, aOn, fontSize, 0, 0, ie)) : ak.td.a2a(aOP[aC]) ? (aP4(aOm, aOn, fontSize, aOP[aC], 0, ie), aOv(aOm, aOn, fontSize, 0, 1, ie)) : (aP4(aOm, aOn, fontSize, aOP[aC], 1, ie), aOv(
				aOm, aOn, fontSize, 1, 0, ie)) : aP4(aOm, aOn, fontSize, aOP[aC], 0, ie)
		}(aOm, aOn, fontSize, aC, ie) : 0 === kh[aC] && aOv(aOm, aOn, fontSize, 0, 0, ie), aOq && (0 < aGD[aC + aE.fX] || 0 < aGD[aC + 2 * aE.fX] || 0 < aGD[aC + 3 * aE.fX] || 0 < aGD[aC + 4 * aE.fX]) && function(aOm, aOn, fontSize, aC, ie) {
			var ek, h3 = -1;
			for (ek = 4; 1 <= ek; ek--) 0 < aGD[aC + ek * aE.fX] && h3++;
			for (ek = 1; ek < 5; ek++) 0 < aGD[aC + ek * aE.fX] && (! function(aOm, aOn, fontSize, ek, aC, aOz, eb, ie) {
				var a6H;
				if (1 === ek) {
					aC = aOP[aC + aE.fX];
					if (!ak.td.a2Z(aC)) return function(aOm, aOn, fontSize, rD, aOz, ie) {
						ie.globalAlpha = aP1(fontSize);
						aOm -= .534 * aOz * fontSize, aOz = aOn + 1.59 * fontSize;
						ie.font = bD.sU.uE(0, .785 * fontSize), ie.fillText(ak.td.a2Q(rD), aOm, aOz), ie.globalAlpha = 1
					}(aOm, aOn, fontSize, aC, aOz, ie);
					a6H = ak.a00.a1z[aC - 1024 + ak.td.a2B]
				} else a6H = 2 === ek ? aM.a8p()[4].canvas[+(eb < 255)] : (3 === ek ? aM.a8p()[5] : aM.a8p()[6]).canvas[0];
				aC = ak.a00.a20, eb = .8 * fontSize / aC, ek = aOm - .5 * eb * aC - .534 * aOz * fontSize, aOm = aOn + 1.4 * eb * aC;
				ie.setTransform(eb, 0, 0, eb, ek, aOm), ie.globalAlpha = aP1(fontSize), ie.drawImage(a6H, 0, 0), ie.globalAlpha = 1, ie.setTransform(1, 0, 0, 1, 0, 0)
			}(aOm, aOn, fontSize, ek, aC, h3, aGD[aC + ek * aE.fX], ie), h3 -= 2)
		}(aOm, aOn, fontSize, aC, ie), (aOp = aOF * fontSize) < aOH || (ie.font = bD.sU.uE(1, aOp), aOn += Math.floor(.78 * fontSize), aOZ ? aOt(aC, aOp, aOm, aOn, ie) : aOs(ie, aC, aOp, aOm, aOn, aOo)))
	}

	function aOt(aC, fontSize, fh, fj, ie) {
		var ___id = aC;
		var showName = aC < aE.kw || !__fx.settings.hideBotNames;
		var eliminationEstimate = __fx.settings.showEstimatedEliminationAttack ?
			__fx.utils.getEstimatedEliminationAttack(___id, ah.hc[___id] - ah.a70[___id]) :
			"";
		if (showName) ie.fillText(ah.a1t[aC], fh, fj), aC < aE.kw && 2 !== ah.a6r[aC] || (aC = fontSize / aOC[aC], ie.fillRect(fh - .5 * aC, fj + bD.sU.a2R * fontSize, aC, Math.max(1, .1 * fontSize)));
		aOZ && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (ie.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			ie.fillText(__fx.utils.getDensity(___id), fh, showName ? fj + fontSize : fj),
			eliminationEstimate && ie.fillText(eliminationEstimate, fh, showName ? fj + 2 * fontSize : fj + fontSize)
		);
	}

	function aOs(ie, aC, fontSize, aOm, aOn, aOo) {
		var eb, a70 = ah.a70[aC],
			aOy = bD.tR.a2h(ah.hc[aC] - a70);

		function drawDensity() {
			var eliminationEstimate;
			!aOZ && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (ie.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), ie.fillText(__fx.utils.getDensity(aC), aOm, aOn + fontSize), eliminationEstimate = __fx.settings
				.showEstimatedEliminationAttack ? __fx.utils.getEstimatedEliminationAttack(aC, ah.hc[aC] - a70) : "") && ie.fillText(eliminationEstimate, aOm, aOn + 2 * fontSize)
		}
		a70 ? (eb = ie.fillStyle, ie.fillStyle = aOr(fontSize, 2 + aOo % 2), ie.fillText(aOy, aOm, aOn), ie.fillStyle = eb) : aOo >> 1 & 1 ? (ie.lineWidth = .05 * fontSize, ie.strokeStyle = aOr(fontSize, aOo % 2), ie.strokeText(aOy, aOm, aOn)) : (1 <
			aOo && (ie.lineWidth = .12 * fontSize, ie.strokeStyle = aOr(fontSize, aOo), ie.strokeText(aOy, aOm, aOn)), ie.fillText(aOy, aOm, aOn)), drawDensity()
	}

	function aOv(aOm, aOn, fontSize, aOz, aP0, ie) {
		var a9K = .95 * fontSize / aOR,
			aOm = aOm - .5 * a9K * aOQ + .8 * aOz * fontSize,
			aOz = aOn - 1.76 * a9K * aOR - (.35 - bD.sU.a2R + .7) * aP0 * fontSize;
		ie.setTransform(a9K, 0, 0, a9K, aOm, aOz), ie.globalAlpha = aP1(fontSize), ie.drawImage(ac.get(4), 0, 0), ie.globalAlpha = 1, ie.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aP4(aOm, aOn, fontSize, rD, aOz, ie) {
		var iX, a0X, a9K;
		ie.globalAlpha = aP1(fontSize), ak.td.a2Z(rD) ? (iX = ak.a00.a20, ie.setTransform(a9K = 1.1 * fontSize / iX, 0, 0, a9K, a0X = aOm - .5 * a9K * iX - .8 * aOz * fontSize, a9K = aOn - 1.55 * a9K * iX), ie.drawImage(ak.a00.a1z[rD - 1024 + ak.td
			.a2B], 0, 0), ie.setTransform(1, 0, 0, 1, 0, 0)) : (a0X = aOm - .8 * aOz * fontSize, a9K = aOn - (.35 - bD.sU.a2R + 1) * fontSize, ie.fillText(ak.td.a2Q(rD), a0X, a9K)), ie.globalAlpha = 1
	}

	function aOr(fontSize, aOo) {
		return aOE <= fontSize && fontSize < aOD ? bj.aP6[aOo] + aP1(fontSize).toFixed(3) + ")" : bj.aP7[aOo]
	}

	function aP1(fontSize) {
		return aOE <= fontSize && fontSize < aOD ? 1 - (fontSize - aOE) / (aOD - aOE) : 1
	}

	function aPG(ic, j) {
		return 1 + Math.floor(aOG * ic * j)
	}

	function aPD(aC) {
		for (var left = aO7[aC], ft = aO7[aC] - ah.jU[aC] - 1; 0 <= ft; ft--)
			if (!aPI(aC, --left, aO8[aC], aOA[aC])) {
				left++;
				break
			} var right = aO7[aC];
		for (ft = ah.jV[aC] - aO7[aC] - aO9[aC]; 0 <= ft; ft--)
			if (!aPI(aC, ++right + aO9[aC] - 1, aO8[aC], aOA[aC])) {
				right--;
				break
			} var fh = Math.floor((left + right) / 2),
			top = aO8[aC];
		for (ft = aO8[aC] - ah.jW[aC] - 1; 0 <= ft; ft--)
			if (!aPJ(aC, fh, --top, aO9[aC])) {
				top++;
				break
			} var bottom = aO8[aC];
		for (ft = ah.jX[aC] - aO8[aC] - aOA[aC]; 0 <= ft; ft--)
			if (!aPJ(aC, fh, ++bottom + aOA[aC] - 1, aO9[aC])) {
				bottom--;
				break
			} var fj = Math.floor((top + bottom) / 2);
		aPA(aC, fh, fj, aO9[aC], aOA[aC]) && (aO7[aC] = fh, aO8[aC] = fj)
	}

	function aPA(player, fh, fj, j, k) {
		fd = Math.floor(.2 * j);
		for (var fd, ek = fh + j - 1; fh <= ek; ek--)
			if (!aPI(player, ek, fj, k)) return;
		for (ek = fj + k - 1 - (fd = (fd = Math.floor(.25 * k)) < 1 ? 1 : fd); fj + fd <= ek; ek--)
			if (!aPJ(player, fh, ek, j)) return;
		return 1
	}

	function aPI(player, fh, fj, k) {
		return ad.a1P(player, 4 * (fj * bV.fl + fh)) && ad.a1P(player, 4 * ((fj + k - 1) * bV.fl + fh))
	}

	function aPJ(player, fh, fj, j) {
		return ad.a1P(player, 4 * (fj * bV.fl + fh)) && ad.a1P(player, 4 * (fj * bV.fl + fh + j - 1))
	}
	this.dk = function() {
		if (aOZ = bm.buffer.data[7].value || 8 === aE.lE, aOM = !1, aOI = .88, aOF = .5, aOG = 1.8, aOH = 12 - 3 * bm.buffer.data[9].value, aO6 = aO5 = 0, aO7 = new Uint16Array(aE.fX), aO8 = new Uint16Array(aE.fX), aO9 = new Uint16Array(aE.fX),
			aOA = new Uint16Array(aE.fX), aOB = new Float32Array(aE.fX), aOC = new Float32Array(aE.fX), aOP = new Uint16Array(2 * aE.fX), aGD = new Uint8Array(5 * aE.fX), aOX = new Uint8Array(aE.fX), aOY = new Uint8Array(aE.fX), aON = aON ||
			document.createElement("canvas"), sX(), aOK = aOJ = 0, aOL = 1, aOZ) {
			var aC, aOf;
			for (aOa(), y3.font = bD.sU.uE(1, 100), aOf = 100 / Math.floor(y3.measureText("900 000").width), aC = aE.fX - 1; 0 <= aC; aC--) aOB[aC] = Math.min(aOf, 2 * aOC[aC]);
			aOW = aOf, aOV[0] = 100 / (aOf * Math.floor(y3.measureText("5 000 000").width)), aOV[1] = 100 / (aOf * Math.floor(y3.measureText("50 000 000").width)), aOV[2] = 100 / (aOf * Math.floor(y3.measureText("500 000 000").width)), aOV[3] =
				100 / (aOf * Math.floor(y3.measureText("1 000 000 000").width))
		} else aOa();
		! function() {
			var aC;
			for (aC = aE.fX - 1; 0 <= aC; aC--) ah.hO[aC] < 12 ? (aO7[aC] = ah.jU[aC] + 1, aO8[aC] = ah.jW[aC] + 1, aO9[aC] = 1, aOA[aC] = 1) : (aO7[aC] = ah.jU[aC], aO8[aC] = ah.jW[aC] + 1, aO9[aC] = 4, aOA[aC] = 2);
			if (aE.hz)
				for (aC = 0; aC < aE.kw; aC++) aO9[aC] = 0;
			aOQ = ac.get(4).width, aOR = ac.get(4).height
		}()
	}, this.aNr = function(h8, a8Y) {
		a8Y > 18 * ah.hO[h8] ? (aOY[h8] = 6, ad.aC6[h8] = 2 + ad.aC6[h8] % 2) : (aOX[h8] = 4, (ad.aC6[h8] < 2 || 3 < ad.aC6[h8]) && (ad.aC6[h8] = 6 + ad.aC6[h8] % 2))
	}, this.rQ = function(h8, a8Y) {
		a8Y > 6 * ah.hO[h8] ? (aOY[h8] = 6, ad.aC6[h8] = 4 + ad.aC6[h8] % 2) : (aOX[h8] = 4, (ad.aC6[h8] < 4 || 5 < ad.aC6[h8]) && (ad.aC6[h8] = 8 + ad.aC6[h8] % 2))
	}, this.resize = function() {
		sX(), aOe(aOO)
	}, this.a7s = function() {
		for (var aC = 0; aC < aE.kw; aC++) ah.jV[aC] - ah.jU[aC] != 3 || ah.jX[aC] - ah.jW[aC] != 3 ? (aO7[aC] = ah.jU[aC] + (ah.jV[aC] !== ah.jU[aC] ? 1 : 0), aO8[aC] = ah.jW[aC], aO9[aC] = 1, aOA[aC] = 1) : (aO7[aC] = ah.jU[aC], aO8[aC] = ah
			.jW[aC] + 1, aO9[aC] = 4, aOA[aC] = 2)
	}, this.s3 = function(player, eJ, aOh) {
		! function(player, eJ, aOh) {
			player += eJ * aE.fX;
			0 === eJ ? aOP[player] === aOh && 0 < aGD[player] ? aGD[player] = 0 : (aOP[player] = aOh, aGD[player] = ak.td.a2Y(aOh) ? 255 : 64) : 1 === eJ ? (aGD[player] = 64, aOP[player] = aOh) : aGD[player] = aOh
		}(player, eJ, aOh), 2 === aE.a3O && this.nK(!0)
	}, this.y2 = function() {
		aOM && (1 !== aOL ? (y3.imageSmoothingEnabled = !0, y3.setTransform(aOL, 0, 0, aOL, 0, 0), y3.drawImage(aON, -aOJ / aOL, -aOK / aOL), y3.setTransform(1, 0, 0, 1, 0, 0), y3.imageSmoothingEnabled = !1) : y3.drawImage(aON, -aOJ, -aOK))
	}, this.aCt = function(iy, j1) {
		aOJ += iy, aOK += j1
	}, this.a4y = function(iy, j1) {
		ag.aCt(iy, j1)
	}, this.zoom = function(a5q, mB, mC) {
		aOL *= a5q, aOJ = (aOJ + mB) * a5q - mB, aOK = (aOK + mC) * a5q - mC
	}, this.aME = function(player) {
		var jU = ah.jU[player],
			jV = ah.jV[player],
			jW = ah.jW[player],
			jX = ah.jX[player],
			j9 = bP.hr(0),
			jA = bP.ht(0),
			jB = bP.hr(i.j),
			jC = bP.ht(i.k);
		jU < jB && j9 < jV && jW < jC && jA < jX && (aO9[player] = 0, aOU = !0)
	}, this.nK = function(by) {
		return !(!aOU && !by && bi.ea < aOT + (1 === aOL && 0 === aOJ && 0 === aOK && (aE.a8M() || aE.hz || 2 === aE.a3O) ? 1e3 : aEB) || (aOe(aOO), 0))
	}, this.aOk = function(aC) {
		return aOg(aC) * aOB[aC]
	}, this.aOl = function(player) {
		return aOB[player]
	}, this.ef = function() {
		bi.kt() % 10 == 9 && (aOU = aOU || aE.a8O() && !aE.a8M()), !aE.a8M() && 4 <= ++aO6 && function() {
			var aC, ft, fu;
			for (aO6 = 0, fu = 4; 1 <= fu; fu--)
				for (ft = am.lS - 1; 0 <= ft; ft--) aC = am.lX[ft] + fu * aE.fX, 0 < aGD[aC] && aGD[aC] < 255 && aGD[aC]--;
			if (2 !== aE.a3O)
				for (ft = am.lS - 1; 0 <= ft; ft--) aC = am.lX[ft], 0 < aGD[aC] && aGD[aC] < 255 && aGD[aC]--
		}();
		var aC, ft, fa = Math.floor(.1 * am.lS);
		for (fa = (fa = fa < 8 ? 8 : fa) > am.lS ? am.lS : fa, aC = aO5 + fa - 1; aO5 <= aC; aC--) ft = aC % am.lS, ! function(aC) {
			var ic = aOg(aC) * aOB[aC];
			0 < aO9[aC] && aPA(aC, aO7[aC], aO8[aC], aO9[aC], aOA[aC]) ? ! function(aC) {
				for (var fh, fj, j, k, fE = !1, fu = 0; fu < 8; fu++) {
					if (j = aO9[aC] + 2, k = aOA[aC] + 2, j > ah.jV[aC] - ah.jU[aC] + 1 || k > ah.jX[aC] - ah.jW[aC] + 1) return fE;
					if (fh = aO7[aC] - 1, fj = aO8[aC] - 1, !aPA(aC, fh, fj, j, k)) return fE;
					aO7[aC] = fh, aO8[aC] = fj, aO9[aC] = j, aOA[aC] = k, fE = !0
				}
				return fE
			}(aC) && function(aC, ic) {
				for (var fh, fj, j, k, fE = !1, aGL = aO9[aC], oB = 1 + Math.floor(.02 * aGL), fu = 1; fu < 5; fu++) {
					if ((j = aGL + fu * oB) > ah.jV[aC] - ah.jU[aC] + 1) return fE;
					if ((k = aPG(ic, j)) > ah.jX[aC] - ah.jW[aC] + 1) return fE;
					fh = ah.jU[aC] + Math.floor(Math.random() * (ah.jV[aC] - ah.jU[aC] + 2 - j)), fj = ah.jW[aC] + Math.floor(Math.random() * (ah.jX[aC] - ah.jW[aC] + 2 - k)), aPA(aC, fh, fj, j, k) && (aO7[aC] = fh, aO8[aC] = fj, aO9[
						aC] = j, aOA[aC] = k, fE = !0)
				}
				return fE
			}(aC, ic) && aPD(aC) : ! function(aC, ic) {
				var k, fh = aO7[aC] + 1,
					fj = aO8[aC] + 1,
					j = aO9[aC] - 2;
				for (;;) {
					if (j < 1) {
						aO9[aC] = 0;
						break
					}
					if (k = aPG(ic, j), aPA(aC, fh, fj, j, k)) return aO7[aC] = fh, aO8[aC] = fj, aO9[aC] = j, aOA[aC] = k, 1;
					fh++, fj++, j -= 2
				}
				return
			}(aC, ic) ? function(aC, ic) {
				var fh, fj, j, k, fu, oH, kC = ah.jV[aC] - ah.jU[aC] + 1,
					aPH = Math.floor(.02 * kC);
				for (oH = -6 * (aPH = aPH < 1 ? 1 : aPH), fu = kC; oH <= fu; fu -= aPH)
					if (k = aPG(ic, j = 0 < fu ? fu : 1), fh = ah.jU[aC] + Math.floor(Math.random() * (ah.jV[aC] - ah.jU[aC] + 2 - j)), fj = ah.jW[aC] + Math.floor(Math.random() * (ah.jX[aC] - ah.jW[aC] + 2 - k)), aPA(aC, fh, fj, j, k))
						return aO7[aC] = fh, aO8[aC] = fj, aO9[aC] = j, aOA[aC] = k
			}(aC, ic) : aPD(aC)
		}(am.lX[ft]);
		aO5 = (aO5 += fa) % am.lS
	}, this.nE = function() {
		var aC, h8, a2W, a2X;
		if (bi.kt() % 4 == 1)
			for (aC = am.lS - 1; 0 <= aC; aC--) h8 = am.lX[aC], ad.aC6[h8] < 2 || ((a2W = Math.max(aOX[h8] - 1, 0)) === (a2X = Math.max(aOY[h8] - 1, 0)) ? 0 === a2W && (ad.aC6[h8] %= 2) : 0 === a2X && ad.aC6[h8] < 6 && (ad.aC6[h8] += 4), aOX[
				h8] = a2W, aOY[h8] = a2X)
	}, this.aA4 = function(player) {
		var aC = player + 2 * aE.fX,
			eb = aGD[aC];
		return 0 < eb && (aO.a3W(50, player), aGD[aC] = 0, 255 === eb)
	}, this.a94 = function(player) {
		return 255 === aGD[player + 2 * aE.fX]
	}
}

function ch() {
	var aPK, aPL, aPM;
	this.dk = function() {
		aPK =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aPL =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aPM = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aAK = ["K ", " Y", "E ", " Z", " z", " s", "S "], aHg = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aPK.length - 1; 0 <= aC; aC--)
			for (var ft = aAK.length - 1; 0 <= ft; ft--) aPK[aC] = aPK[aC].replace(aAK[ft], aHg[ft]);
		if (__fx.settings.realisticNames) aPK = realisticNames;
	}, this.a89 = function() {
		var fa = aE.kw,
			a1t = ah.a1t,
			a48 = ah.a48,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fa)
			for (var aC = 0; aC < fa; aC++) a1t[aC] = a48[aC] = "Player " + az.kD(1e3);
		else
			for (aC = 0; aC < fa; aC++) a1t[aC] = a48[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.lE) {
			for (var eI = az.random(), aPS = aPM, aPT = aPL, iK = aF.iK, fa = aPS.length, lr = aE.data.teamPlayerCount[7], a1t = ah.a1t, a48 = ah.a48, aC = lr - 1; aC >= aE.kw; aC--) a1t[aC] = a48[aC] = aPS[(aC + eI) % fa];
			for (fa = aPT.length - 1, aC = lr; aC < aE.fX; aC++) a1t[aC] = a48[aC] = aPT[iK[aC] ? fa : aC % fa]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fa = aE.fX, a1t = ah.a1t, a48 = ah.a48, playerNamesData = aE.data.playerNamesData, aC = aE.kw; aC < fa; aC++) a1t[aC] = a48[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var a1t = ah.a1t, a48 = ah.a48, aC = aE.kw; aC < aE.fX; aC++) a1t[aC] = a48[aC] = "Bot " + az.kD(1e3)
		} : function() {
			for (var aPU = aPK, fa = aPU.length, eI = az.random(), a1t = ah.a1t, a48 = ah.a48, aC = aE.kw; aC < aE.fX; aC++) a1t[aC] = a48[aC] = aPU[(aC + eI) % fa]
		})()
	}
}

function d0() {
	this.aPV = [], this.aPW = [], this.dk = function() {
		this.aPV = [], this.aPW = []
	}, this.ef = function() {
		0 <= this.aPV.length && this.aPX(this.aPV), 0 <= this.aPW.length && this.aPX(this.aPW)
	}, this.aPX = function(h) {
		for (var fu = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].ea--, h[aC].ea <= 0) {
				fu = aC;
				break
			} for (aC = fu; 0 <= aC; aC--) h.shift()
	}, this.a8x = function(id, w9, aPY) {
		return this.fv(this.aPV, id, w9, aPY)
	}, this.aPZ = function(id, w9, aPY) {
		return this.fv(this.aPW, id, w9, aPY)
	}, this.fv = function(h, id, w9, aPY) {
		return ! function(h, id, w9) {
			var aC, iT;
			for (aC = w9.length - 1; 0 <= aC; aC--)
				for (iT = h.length - 1; 0 <= iT; iT--)
					if (h[iT].player === w9[aC] && id === h[iT].id) return 1;
			return
		}(h, id, w9) && (aPY && function(h, id, w9) {
			var aC;
			for (aC = w9.length - 1; 0 <= aC; aC--) h.push({
				player: w9[aC],
				id: id,
				ea: 384
			})
		}(h, id, w9), !0)
	}
}

function cg() {
	this.a48 = new Array(aE.fX), this.a1t = new Array(aE.fX), this.a6r = new Uint8Array(aE.fX), this.nY = new Uint8Array(aE.fX), this.jU = new Uint16Array(aE.fX), this.jW = new Uint16Array(aE.fX), this.jV = new Uint16Array(aE.fX), this.jX =
		new Uint16Array(aE.fX), this.hO = new Uint32Array(aE.fX), this.a0z = new Uint32Array(aE.fX), this.hc = new Uint32Array(aE.fX), this.h2 = null, this.hG = null, this.hH = null, this.fz = null, this.rt = new Uint16Array(aE.fX), this.jz =
		new Uint16Array(aE.fX), this.k0 = new Uint16Array(aE.fX), this.a43 = new Uint16Array(aE.fX), this.a41 = new Uint8Array(aE.fX), this.a70 = new Uint16Array(aE.fX), this.dk = function() {
			this.a48.fill(""), this.a1t.fill(""), this.a6r.fill(0), this.nY.fill(0), this.jU.fill(0), this.jW.fill(0), this.jV.fill(0), this.jX.fill(0), this.hO.fill(0), this.a0z.fill(0), this.hc.fill(0), this.h2 = new Array(aE.fX), this.hG =
				new Array(aE.fX), this.hH = new Array(aE.fX), this.fz = new Array(aE.fX), this.rt.fill(0), this.jz.fill(0), this.k0.fill(0), this.a43.fill(0), this.a41.fill(0), this.a70.fill(0)
		}
}

function cy() {
	this.aGo = function(player) {
		aH.nX(player), aE.a3Q++, ah.a6r[player] = 2, ah.a43[player] = bl.a4I.aMN(), player === aE.fK && (aY.show(!1, !1), aX.aEs(), bU.a3A.a3z()), ag.aA4(player)
	}
}

function cZ() {
	this.lX = null, this.lS = 0, this.a8D = function() {
		for (this.lS = 0, aC = aE.fX - 1; 0 <= aC; aC--) 0 !== ah.nY[aC] && this.lS++;
		this.lX = new Uint16Array(this.lS);
		for (var fa = 0, aC = 0; aC < aE.fX; aC++) 0 !== ah.nY[aC] && (this.lX[fa++] = aC)
	}, this.nD = function() {
		for (var hO = ah.hO, a0z = ah.a0z, a41 = ah.a41, lX = am.lX, aC = am.lS - 1; 0 <= aC; aC--) {
			var h8 = lX[aC],
				eb = hO[h8],
				lr = a0z[h8];
			eb <= bO.g1(lr, 4) ? al.dt(h8) : lr <= eb ? 250 <= (a0z[h8] = eb) && (a41[h8] = 1) : a0z[h8] = lr - Math.max(1, bO.g1(lr - eb, 1e3))
		}
		this.aPd()
	}, this.aPd = function() {
		for (var nY = ah.nY, lq = this.lX, aFa = this.lS, aC = aFa - 1; 0 <= aC; aC--) 0 === nY[lq[aC]] && (lq[aC] = lq[--aFa]);
		this.lS = aFa
	}
}

function ca() {
	var aPe = new Uint16Array(aE.fX),
		aPf = 0;

	function aPj(aAA, aPh) {
		var ek = bi.kt();
		return 3213 <= ek ? 4 + bO.g1(100 * aPh, af.kc(aAA)) : (aAA = 1 + bO.g1(aE.kg, 300), ek < 357 ? 2 + bO.g1(100 * aPh, aAA) : ek < 714 ? 2 + bO.g1(100 * aPh, 4 * aAA) : ek < 1071 ? 2 + bO.g1(100 * aPh, 10 * aAA) : ek < 2142 ? 2 + bO.g1(100 *
			aPh, 30 * aAA) : 2 + bO.g1(100 * aPh, 100 * aAA))
	}

	function aPi(aAA) {
		return aE.lG || 4284 <= bi.kt() || bD.gw.kJ(aAA)
	}
	this.dk = function() {
		aPe.fill(0), aPf = 15
	}, this.iF = function(r2) {
		var player = aE.fK;
		return !!bD.gw.rv(player, r2) && !(!bD.gw.rL(player, bD.gw.jD(player, aS.i5()), r2) || (player = r2, r2 = bR.g7[0], !aPi(player) && aPe[player] + aPj(player, r2) > aPf))
	}, this.ej = function(aAA, aPh) {
		if (!aPi(aAA)) {
			aPh = aPj(aAA, aPh);
			if (aPe[aAA] + aPh > aPf) return !1;
			aPe[aAA] += aPh
		}
		return !0
	}, this.ef = function() {
		bi.kt() % 100 == 99 && (bi.kt() < 1071 ? aPf += 4 : bi.kt() < 2142 ? aPf += 6 : bi.kt() < 3213 ? aPf += 8 : aPf += 10)
	}
}

function ci() {
	var aPk;
	this.lN = null, this.lM = 0, this.dk = function() {
		aPk = [], 9 === aE.lE && this.aPl()
	}, this.aPl = function() {
		this.lN = [0, 0, 0, 0, 0, 0];
		for (var aPm = [254, 227, 167, 149, 102, this.lM = 0, 0, 0], aPn = [0, 8, 24, 30, 46, 80, 256, 333], aPo = [0, 0, 3, 9, 17, 25, 150, 179], k = aE.kw, aC = 1; aC < aPm.length; aC++)
			if (k <= aPn[aC]) {
				this.lM = aPm[aC - 1] - bO.g1((k - aPn[aC - 1]) * (aPm[aC - 1] - aPm[aC]), aPn[aC] - aPn[aC - 1]), this.lN[5] = aPo[aC - 1] - bO.g1((k - aPn[aC - 1]) * (aPo[aC - 1] - aPo[aC]), aPn[aC] - aPn[aC - 1]), this.lN[0] = aE.fX - k - this
					.lM - this.lN[5];
				break
			} aE.lI = aE.fX - aE.kw, aE.data.numberTeams = (0 < aE.kw) + (0 < aE.lI), aE.data.playerCount = aE.a0V = aE.kw + aE.lI, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.kw + this.lM, aE.lI - this.lM]), aE.a81.a87()
	}, this.aMU = function(player) {
		aPk.push({
			player: player,
			h3: 14 + az.kD(20)
		})
	}, this.ef = function() {
		if (9 === aE.lE)
			for (var aC = aPk.length - 1; 0 <= aC; aC--) --aPk[aC].h3 <= 0 && (ag.s3(aPk[aC].player, 0, ak.td.a2E + ak.td.a2S), aPk.splice(aC, 1))
	}
}

function dH() {
	this.aPq = 25, this.aPr = 13, this.aMg = 4096, this.fl = 0, this.fm = 0, this.zx = null, this.zt = null, this.zu = null, this.zy = null, this.fG = 0, this.mapSeed = 0, this.zv = !1, this.zw = new aPs, this.wQ = new aPt, this.aAR = new aPu;
	var aPv = {
		aPw: function() {},
		dk: function() {}
	};

	function aQ5() {
		return {
			fl: bV.fl,
			fm: bV.fm,
			zx: bV.zx,
			zt: bV.zt,
			zu: bV.zu,
			zy: bV.zy,
			fG: bV.fG,
			mapSeed: bV.mapSeed,
			zv: bV.zv
		}
	}

	function aQ6(g2) {
		bV.fl = g2.fl, bV.fm = g2.fm, bV.zx = g2.zx, bV.zt = g2.zt, bV.zu = g2.zu, bV.zy = g2.zy, bV.fG = g2.fG, bV.mapSeed = g2.mapSeed, bV.zv = g2.zv
	}

	function aPy(aC) {
		return !(1 === aC || !bV.aHv(aC) || aC === bV.aQA())
	}
	this.dk = function() {
		this.wQ.dk()
	}, this.a8 = function(map, aPx) {
		((map %= this.aPq) !== this.fG || aPy(this.fG) && aPx !== this.mapSeed) && (this.zv = !1, this.zw.aPw(), az.a88(map), this.fG = map, this.mapSeed = aPx, aPy(map) && (bV.wQ.zo[map].aPz = aPx), this.aHv(this.fG) ? (map = bV.wQ.zo[this.fG],
			this.fl = map.j, this.fm = map.k, az.a88(map.aPz), ar.a8([this.fl, this.fm, map.nd, map.na]), aQ1(), aq.aQ2(), ar.aQ3()) : aQ0())
	}, this.aQ4 = function(map, aPx) {
		var gJ = aQ5(),
			map = (this.a8(map, aPx), this.zw.aPw(), aQ5());
		return aQ6(gJ), map
	}, this.aIr = function(map, aPx) {
		var gJ = aQ5(),
			aPz = az.aQ7(),
			aQ8 = this.wQ.zo[map].aPz,
			aQ9 = this.zw,
			aPx = (this.zw = aPv, this.a8(map, aPx), this.zx);
		return this.zw = aQ9, this.wQ.zo[map].aPz = aQ8, az.a88(aPz), aQ6(gJ), aPx
	}, this.a8U = function(canvas) {
		canvas && this.zx !== canvas && (this.fl = canvas.width, this.fm = canvas.height, this.zx = canvas, this.zt = this.zx.getContext("2d", {
			alpha: !1
		}), this.ia = this.zt.getImageData(0, 0, this.fl, this.fm), this.zy = this.ia.data, this.fG = this.aQA(), this.mapSeed = 0, bV.wQ.zo[this.fG].name = aE.data.mapName)
	}, this.fF = function(aC) {
		return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aQA()
	}, this.aQB = function(aC) {
		return 2 === aC || 7 === aC || 9 === aC || 20 === aC
	}, this.aQC = function(aC) {
		return 1 === aC
	}, this.aQA = function() {
		return this.aPq
	}, this.aHv = function(aC) {
		return void 0 === this.wQ.zo[aC].aQD
	}, this.aIm = aPy, this.a8T = function(sM) {
		return 0 === sM.mapType ? sM.mapProceduralIndex < 10 ? sM.mapProceduralIndex : 10 + sM.mapProceduralIndex : 1 === sM.mapType ? 10 <= sM.mapRealisticIndex ? 22 + sM.mapRealisticIndex - 10 : sM.mapRealisticIndex + 10 : void 0
	}, this.aHw = function(sM, aQE) {
		0 === sM.mapType ? sM.mapProceduralIndex = aQE < 10 ? aQE : aQE - 10 : 1 === sM.mapType && (sM.mapRealisticIndex = aQE - (22 <= aQE ? 12 : 10))
	}
}

function aPs() {
	function aQN() {
		bV.zw.ef()
	}

	function aQS(h8, aQR) {
		0 < aQR && (bV.zy[h8] += aQR, bV.zy[h8 + 1] += aQR, bV.zy[h8 + 2] += aQR)
	}

	function is(h8) {
		return bV.zy[h8 + 2] > bV.zy[h8] && bV.zy[h8 + 2] > bV.zy[h8 + 1]
	}
	this.aD5 = -1, this.a4V = 0, this.aQF = 0, this.aQG = 8, this.aQH = 32, this.aQI = 8, this.aQJ = 32, this.aQK = [0, 0], this.aC6 = [0, 0, 0, 0], this.jO = null, this.aQL = !0, this.aQM = !1, this.aPw = function() {
		-1 !== this.aD5 && clearTimeout(this.aD5), this.aD5 = -1, this.jO = null, ar.aQ3()
	}, this.dk = function() {
		7 === ab.a4b() || this.aQM || (this.aQL = !0, this.a4V = 0, this.aQF = 1, this.aQK = [bV.wQ.zo[bV.fG].a0F[0], bV.wQ.zo[bV.fG].a0G[0]], this.aC6 = [bV.wQ.zo[bV.fG].aQD[3], bV.wQ.zo[bV.fG].aQD[4], bV.wQ.zo[bV.fG].aQD[5], bV.wQ.zo[bV.fG]
			.aQD[6]
		], this.aQG = bV.wQ.zo[bV.fG].aQD[7], this.aQH = bV.wQ.zo[bV.fG].aQD[8], this.aQI = bV.wQ.zo[bV.fG].aQD[9], this.aQJ = bV.wQ.zo[bV.fG].aQD[10], this.aQL ? this.aD5 = setTimeout(aQN, 16) : this.ef())
	}, this.ef = function() {
		if (8 === ab.a4b() && aI.nr()) this.aD5 = setTimeout(aQN, 16);
		else {
			if (0 === this.a4V) {
				var aPz = az.aQ7();
				if (az.a88(bV.wQ.zo[bV.fG].aQD[2]), ar.a8([bV.fl, bV.fm, bV.wQ.zo[bV.fG].aQD[0], bV.wQ.zo[bV.fG].aQD[1]]), az.a88(aPz), this.jO = ar.aQO(), this.a4V++, this.aQL) return void(this.aD5 = setTimeout(aQN, 16))
			}
			for (var h8, fM, aPz = this.aQL ? 10 : 1e6, aPz = bV.fm - this.aQF - 1 < aPz ? bV.fm - this.aQF - 1 : aPz, a1C = this.aQF + aPz, fj = this.aQF; fj < a1C; fj++)
				for (var fh = 1; fh < bV.fl - 1; fh++) is(h8 = 4 * (fM = fh + fj * bV.fl)) ? this.aQP(h8, fM, 1) : (this.aQP(h8, fM, 0), function(fh, fj, h8) {
					return 1 < fh && is(h8 - 4) || fh < bV.fl - 2 && is(h8 + 4) || 1 < fj && is(h8 - 4 * bV.fl) || fj < bV.fm - 2 && is(h8 + 4 * bV.fl)
				}(fh, fj, h8) && this.aQQ(fh, fj));
			this.aQF = a1C, this.aQF >= bV.fm - 1 ? (bV.zt.putImageData(bV.zu, 0, 0, 1, 1, bV.fl - 2, bV.fm - 2), bi.ds = !0, this.aPw()) : this.aQL && (this.aD5 = setTimeout(aQN, 16))
		}
	}, this.aQP = function(h8, fM, eJ) {
		aQS(h8, Math.floor(this.aQK[eJ] + this.aC6[eJ] * this.jO[fM] / 1e4) - bV.zy[h8])
	}, this.aQT = function(h8, eI, aQU, eJ, aC6) {
		aQS(h8, Math.floor(this.aQK[eJ] + (1 - eI / aQU) * aC6) - bV.zy[h8])
	}, this.aQQ = function(mB, mC) {
		for (var h8, eI, aQU, aCv = mB - this.aQH, aQV = mC - this.aQH, a1D = mB + this.aQH, a1C = mC + this.aQH, aCv = aCv < 1 ? 1 : aCv, a1D = a1D > bV.fl - 2 ? bV.fl - 2 : a1D, a1C = a1C > bV.fm - 2 ? bV.fm - 2 : a1C, fj = aQV < 1 ? 1 :
			aQV; fj <= a1C; fj++)
			for (var fh = aCv; fh <= a1D; fh++) is(h8 = 4 * (fh + fj * bV.fl)) ? (aQU = this.aQG + (this.aQH - this.aQG) * this.jO[fh + bV.fl * fj] / 1e4, Math.abs(mB - fh) > aQU || Math.abs(mC - fj) > aQU || aQU <= (eI = Math.sqrt((mB - fh) * (
				mB - fh) + (mC - fj) * (mC - fj))) || this.aQT(h8, eI, aQU, 1, this.aC6[3])) : (aQU = this.aQI + (this.aQJ - this.aQI) * this.jO[fh + bV.fl * fj] / 1e4, Math.abs(mB - fh) > aQU || Math.abs(mC - fj) > aQU || aQU <= (eI = Math
				.sqrt((mB - fh) * (mB - fh) + (mC - fj) * (mC - fj))) || this.aQT(h8, eI, aQU, 0, this.aC6[2]))
	}
}

function aQ1() {
	var oQ = aQW(bV.fG);
	oQ && aQX(oQ[0], oQ[1], oQ[2], oQ[3], oQ[4])
}

function aQW(fG) {
	return 2 === fG ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === fG ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === fG ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === fG ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === fG ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aQX(aQY, aQZ, aQa, aQb, aQc) {
	for (var fh, fj, aN2, aN3, a5q, aQf, ix = aQY.length - 1, aQd = bV.fl + bV.fm, fa = (aQd *= aQd, aQa.length), aQe = Array(fa), aC = fa - 1; 0 <= aC; aC--) aQe[aC] = aQa[aC] * aQa[aC];
	var aQg = new Array(fa),
		aGA = new Array(fa),
		aQh = new Array(fa),
		g2 = ar.aQO();
	if (void 0 === aQc)
		for (aQc = new Array(fa), aC = fa - 1; 0 <= aC; aC--) aQc[aC] = 0;
	for (aC = 1; aC < fa; aC++) aQg[aC] = aQe[aC] - aQe[aC - 1], aGA[aC] = aQb[aC] - aQb[aC - 1], aQh[aC] = aQc[aC] - aQc[aC - 1];
	for (fh = bV.fl - 1; 0 <= fh; fh--)
		for (fj = bV.fm - 1; 0 <= fj; fj--) {
			for (aN2 = aQd, aC = ix; 0 <= aC; aC--) aN2 = (aN3 = (fh - aQY[aC]) * (fh - aQY[aC]) + (fj - aQZ[aC]) * (fj - aQZ[aC])) < aN2 ? aN3 : aN2;
			for (a5q = aQb[fa - 1], aQf = aQc[fa - 1], aC = 1; aC < fa; aC++)
				if (aN2 < aQe[aC]) {
					a5q = aQb[aC - 1] + aLp((aN2 - aQe[aC - 1]) * aGA[aC], aQg[aC]), aQf = aQc[aC - 1] + aLp((aN2 - aQe[aC - 1]) * aQh[aC], aQg[aC]);
					break
				} aQi(bV.fl * fj + fh, a5q, aQf, g2)
		}
}

function aQi(eJ, a5q, aQf, g2) {
	a5q < 500 ? g2[eJ] = bO.g1(g2[eJ] * a5q * 2, 1e3) : 500 < a5q && (g2[eJ] += bO.g1(2 * (1e4 - g2[eJ]) * (a5q - 500), 1e3)), g2[eJ] += bO.g1(aQf * (10 * a5q - g2[eJ]), 1e3)
}

function ck() {
	var aQj;

	function aQt(a6H, ic, fh, fj, globalAlpha) {
		bV.zt.save(), bV.zt.globalAlpha = globalAlpha, bV.zt.imageSmoothingEnabled = !1, bV.zt.scale(ic, ic), bV.zt.drawImage(a6H, Math.floor(fh * (bV.fl / ic - a6H.width)), Math.floor(fj * (bV.fm / ic - a6H.height))), bV.zt.restore()
	}
	this.aAO = 0, this.aAP = 0, this.aAQ = 0, this.aAR = 0, this.dk = function() {
		(aQj = new Array(bV.aPq))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eI: [220, 250, 255, 220],
			v2: [190, 220, 0, 0],
			fu: [170, 200, 0, 0]
		}, aQj[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eI: [25, 0, 100, 0, 25],
			v2: [25, 0, 0, 0, 25],
			fu: [25, 0, 0, 0, 25]
		}, aQj[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eI: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			v2: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fu: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aQj[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eI: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			v2: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fu: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aQj[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eI: [10, 10, 20, 10, 10, 170, 212],
			v2: [20, 20, 60, 100, 100, 110, 170],
			fu: [70, 70, 160, 30, 30, 60, 120]
		}, aQj[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eI: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			v2: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fu: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aQj[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eI: [10, 10, 60, 255, 255, 200, 200],
			v2: [10, 10, 60, 255, 255, 200, 200],
			fu: [80, 80, 255, 255, 255, 200, 200]
		}, aQj[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eI: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			v2: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fu: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aQj[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eI: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			v2: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fu: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aQj[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eI: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			v2: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fu: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aQj[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eI: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			v2: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fu: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aQj[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eI: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			v2: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fu: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aQ2 = function() {
		var aQs, aC, ft, gJ, ia = function() {
				var ia;
				return bV.zx = document.createElement("canvas"), bV.zx.width = bV.fl, bV.zx.height = bV.fm, bV.zt = bV.zx.getContext("2d", {
					alpha: !1
				}), ia = bV.zt.getImageData(0, 0, bV.fl, bV.fm), bV.zy = ia.data, ia
			}(),
			j = aQj[bV.fG].j,
			eI = aQj[bV.fG].eI,
			v2 = aQj[bV.fG].v2,
			fu = aQj[bV.fG].fu,
			g2 = ar.aQO(),
			fa = j.length - 2,
			aQn = new Array(1 + fa),
			aQo = new Array(1 + fa),
			aQp = new Array(1 + fa),
			aQq = new Array(1 + fa);
		for (ft = fa; 0 <= ft; ft--) aQn[ft] = j[ft + 1] - j[ft], aQo[ft] = eI[ft + 1] - eI[ft], aQp[ft] = v2[ft + 1] - v2[ft], aQq[ft] = fu[ft + 1] - fu[ft];
		for (aC = bV.fl * bV.fm - 1; 0 <= aC; aC--)
			for (ft = fa; 0 <= ft; ft--)
				if (g2[aC] >= j[ft]) {
					gJ = g2[aC] - j[ft], bV.zy[4 * aC] = eI[ft] + aLp(aQo[ft] * gJ, aQn[ft]), bV.zy[4 * aC + 1] = v2[ft] + aLp(aQp[ft] * gJ, aQn[ft]), bV.zy[4 * aC + 2] = fu[ft] + aLp(aQq[ft] * gJ, aQn[ft]), bV.zy[4 * aC + 3] = 255;
					break
				} bV.zt.putImageData(ia, 0, 0), bV.aQC(bV.fG) && ac.v6() && bV.aQC(bV.fG) && (ia = ac.wG("arena"), aQs = ac.wG("territorial.io"), aQt(ia, 5, .5, .5, .1), aQt(aQs, 2, .5, .45, .1)), bV.zv = !0, bi.ds = !0
	}, this.a8B = function() {
		for (var h8, fh, fj, aQu, iR, gL, aAP = 0, j = bV.fl, k = bV.fm, gJ = j * k * 4, aQv = aFj, aQw = bV.zy, aC = j - 1; 0 <= aC; aC--) aQv[(h8 = aC << 2) + 2] = aQv[gJ - h8 - 2] = 3;
		for (gJ = 4 * j, aC = k - 1; 0 <= aC; aC--) aQv[(h8 = aC * gJ) + 2] = aQv[h8 + gJ - 2] = 3;
		for (aQu = j - 1, iR = k - 1, fj = 1; fj < iR; fj++)
			for (gJ = fj * j, fh = 1; fh < aQu; fh++) gL = 1 - (aQw[(h8 = gJ + fh << 2) + 2] > aQw[h8 + 1] && aQw[h8 + 2] > aQw[h8]), aQv[h8 + 2] = 6 - 5 * gL, aAP += gL;
		this.aAO = (j - 2) * (k - 2), this.aAR = 0, bV.fF(bV.fG) && (bV.aAR.aQx(), bV.aAR.aQy(4, 5)), this.aAP = aE.kg = aAP - this.aAR, this.aAQ = this.aAO - this.aAP - this.aAR, this.aAQ && (bV.aAR.aQy(6, 2), bV.aAR.aQz())
	}
}

function aQ0() {
	var sB;
	10 === bV.fG ? sB =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bV.fG ? sB =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bV.fG ? sB =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bV.fG ? sB =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bV.fG ? sB =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bV.fG ? sB =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bV.fG ? sB =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bV.fG ? sB =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bV.fG ? sB =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bV.fG ? sB =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bV.fG ? sB =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bV.fG ? sB =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bV.fG && (sB =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new zh).zj(sB)
}

function aPt() {
	this.zo = null, this.aR0 = null, this.aR1 = null, this.wR = ["White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East",
		"Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Mare Nostrum"
	], this.dk = function() {
		this.aR2 = [L(150), L(151), L(152), L(153), L(154), L(155), L(156), L(157), L(158), L(159), L(160), L(161), L(162), L(163), L(164), L(165), L(166), L(167), L(168), L(169), L(170), L(171), L(172), L(173), "Mare Nostrum"];
		var aR3 = [120, 105, 92],
			cos = [12, 12, 60],
			aR4 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aR5 = [140, 130, 120],
			aR6 = [12, 12, 76],
			aR7 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aR8 = [130, 117, 106],
			aR9 = [12, 12, 68],
			aRA = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.zo = new Array(bV.aPq + 1), __fx.customLobby.setMapInfo(this.zo), this.zo[0] = {
			j: 230,
			k: 230,
			nd: 1e3,
			na: 2e3,
			aPz: 173
		}, this.zo[1] = {
			j: 800,
			k: 800,
			nd: 100,
			na: 50,
			aPz: 43
		}, this.zo[2] = {
			j: 512,
			k: 512,
			nd: 128,
			na: 32,
			aPz: 0
		}, this.zo[3] = {
			j: 960,
			k: 960,
			nd: 60,
			na: 8,
			aPz: 0
		}, this.zo[4] = {
			j: 900,
			k: 900,
			nd: 100,
			na: 5,
			aPz: 0
		}, this.zo[5] = {
			j: 1e3,
			k: 1e3,
			nd: 100,
			na: 40,
			aPz: 0
		}, this.zo[6] = {
			j: 1e3,
			k: 1e3,
			nd: 100,
			na: 20,
			aPz: 0
		}, this.zo[7] = {
			j: 1024,
			k: 1024,
			nd: 128,
			na: 32,
			aPz: 0
		}, this.zo[8] = {
			j: 820,
			k: 820,
			nd: 200,
			na: 100,
			aPz: 0
		}, this.zo[9] = {
			j: 1024,
			k: 1024,
			nd: 128,
			na: 32,
			aPz: 0
		}, this.zo[10] = {
			a0F: aR5,
			a0G: aR6,
			aQD: aR7
		}, this.zo[11] = {
			a0F: aR8,
			a0G: aR9,
			aQD: aRA
		}, this.zo[12] = {
			a0F: aR8,
			a0G: aR9,
			aQD: aRA
		}, this.zo[13] = {
			a0F: aR3,
			a0G: cos,
			aQD: aR4
		}, this.zo[14] = {
			a0F: aR3,
			a0G: cos,
			aQD: aR4
		}, this.zo[15] = {
			a0F: aR5,
			a0G: aR6,
			aQD: aR7
		}, this.zo[16] = {
			a0F: aR5,
			a0G: aR6,
			aQD: aR7
		}, this.zo[17] = {
			a0F: aR3,
			a0G: cos,
			aQD: aR4
		}, this.zo[18] = {
			a0F: aR8,
			a0G: aR9,
			aQD: aRA
		}, this.zo[19] = {
			a0F: aR3,
			a0G: cos,
			aQD: aR4
		}, this.zo[20] = {
			j: 1024,
			k: 1024,
			nd: 128,
			na: 32,
			aPz: 0
		}, this.zo[21] = {
			j: 940,
			k: 940,
			nd: 80,
			na: 8,
			aPz: 0
		}, this.zo[22] = {
			a0F: aR8,
			a0G: aR9,
			aQD: aRA
		}, this.zo[23] = {
			a0F: aR5,
			a0G: aR6,
			aQD: aR7
		}, this.zo[24] = {
			a0F: [157, 136, 117],
			a0G: [16, 13, 68],
			aQD: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aAN: "[OG] Neutronian"
		};
		for (var aC = 0; aC < bV.aPq; aC++) this.zo[aC].name = this.aR2[aC];
		this.zo[bV.aPq] = {
			name: ""
		}, this.aR0 = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aR0[aC] = aC;
		for (this.aR0[10] = 20, this.aR0[11] = 21, this.aR1 = new Uint8Array(bV.aPr), aC = 0; aC < 10; aC++) this.aR1[aC] = 10 + aC;
		this.aR1[10] = 22, this.aR1[11] = 23, this.aR1[12] = 24
	}
}

function aPu() {
	this.aQx = function() {
		for (var h8, fh, gJ, aQv = aFj, aQw = bV.zy, j = bV.fl, aQu = j - 1, iR = bV.fm - 1, h3 = 0, fj = 1; fj < iR; fj++)
			for (gJ = fj * j, fh = 1; fh < aQu; fh++) aQw[h8 = gJ + fh << 2] === aQw[1 + h8] && aQw[h8] === aQw[2 + h8] && (h3++, aQv[2 + h8] = 4);
		aq.aAR = h3
	}, this.aQy = function(aRC, aRD) {
		for (var aQv = aFj, j = bV.fl, aQu = j - 1, iR = bV.fm - 1, id = 0, fj = 1; fj < iR; fj++)
			for (var gJ = fj * j, fh = 1; fh < aQu; fh++) {
				var fE = 2 + (gJ + fh << 2);
				aQv[fE] === aRC && (! function(fE, id, aRC, aRD) {
					var fa = 1,
						aQv = aFj,
						fc = ad.aLg,
						a63 = [fE],
						aRF = id >> 8 << 1,
						aRG = 255 & id;
					aQv[fE - 2] = aRF, aQv[fE - 1] = aRG, aQv[fE] = 5;
					for (; fa;) {
						for (var a64 = [], aC = 0; aC < fa; aC++)
							for (var fP = a63[aC], fd = 0; fd < 8; fd++) {
								var fe = fP + fc[fd];
								aQv[fe] === aRC && (aQv[fe - 2] = aRF, aQv[fe - 1] = aRG, aQv[fe] = aRD, a64.push(fe))
							}
						fa = (a63 = a64).length
					}
				}(fE, id, aRC, aRD), id = (id + 1) % 32768)
			}
	}, this.aQz = function() {
		for (var aQv = aFj, j = bV.fl, aQu = j - 3, iR = bV.fm - 3, aRI = 12 * j, fj = 3; fj < iR; fj++)
			for (var gJ = fj * j, fh = 3; fh < aQu; fh++) {
				var fE = 2 + (gJ + fh << 2);
				2 !== aQv[fE] || 2 === aQv[fE - 12] && 2 === aQv[12 + fE] && 2 === aQv[fE - aRI] && 2 === aQv[fE + aRI] || (aQv[fE - 2] = 1 | aQv[fE - 2])
			}
	}
}

function a8A() {
	(a1Y = void 0 === a1Y ? document.createElement("canvas") : a1Y).width = bV.fl, a1Y.height = bV.fm, a8E = a1Y.getContext("2d", {
		alpha: !0
	}), a8F = aFj = null, a8F = a8E.getImageData(0, 0, bV.fl, bV.fm), aFj = a8F.data, bD.sc.zz(aFj)
}

function cl() {
	var g2, j, k, max, aRJ, na, aRL, aRM, aRN, aRO, aRP, aRQ, aRR, aRS, aRK = 1e4;

	function aRZ(aRY, nd, fa) {
		var aC;
		for (aRL[0] = aRY, aC = 1; aC < fa; aC++) aRL[aC] = aRL[aC - 1] + nd, nd = aRL[aC] >= aRK ? (aRL[aC] = aRK - 1, -nd) : aRL[aC] < 0 ? (aRL[aC] = 0, -nd) : (nd += 16384 <= az.random() ? na : -na) < -aRJ ? -aRJ : aRJ < nd ? aRJ : nd
	}

	function aRb(fh, fj, aRc, fa) {
		(aRc ? function(fh, fj, fa) {
			var aC;
			for (aC = 0; aC < fa; aC++) g2[fj * j + fh + aC] = aRL[aC]
		} : function(fh, fj, fa) {
			var aC;
			for (aC = 0; aC < fa; aC++) g2[fj * j + fh + aC * j] = aRL[aC]
		})(fh, fj, fa)
	}

	function aRf(value, fa) {
		var aC, aPH, fE, kB = value - aRL[fa - 1];
		if (0 != kB) {
			for (aPH = 1 + bO.g1(Math.abs(kB), fa - 1), aPH = kB < 0 ? -aPH : aPH, aRL[fa - 1] = value, fE = (fE = fa - 1 - bO.g1(Math.abs(kB), Math.abs(aPH))) < 1 ? 1 : fa - 2 < fE ? fa - 2 : fE, aC = fa - 2; fE <= aC; aC--) aRL[aC] += kB - (fa -
				1 - aC) * aPH;
			(kB < 0 ? function(fa) {
				var aC;
				for (aC = fa - 2; 1 <= aC; aC--) aRL[aC] < 0 && (aRL[aC] = -aRL[aC] - 1)
			} : function(fa) {
				var aC;
				for (aC = fa - 2; 1 <= aC; aC--) aRL[aC] >= aRK && (aRL[aC] = 2 * aRK - aRL[aC] - 1)
			})(fa)
		}
	}

	function aRi(a63, a64, fa) {
		for (var aC = 0; aC < fa; aC++) a63[aC] = a64[aC]
	}

	function aRj(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aRk(a8r, gap, iS) {
		aRM.push(a8r), aRN.push(gap), aRO.push(iS)
	}
	this.a8 = function(a7M) {
		! function(a7M) {
			var aC;
			for (j = a7M[0], k = a7M[1], aRJ = a7M[2], na = a7M[3], g2 = new Int16Array(j * k), max = k < j ? j : k, aRL = new Int16Array(max), aRM = [], aRN = [], aRO = [], aRP = new Array(j), aRQ = new Array(k), aC = j - 1; 0 <= aC; aC--) aRP[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aRQ[aC] = !1;
			aRR = new Int16Array(j), aRS = new Int16Array(k)
		}(a7M),
		function(fa) {
			var aRY = az.random() % aRK,
				nd = az.random() % (2 * aRJ + 1) - aRJ;
			aRZ(aRY, nd, fa)
		}(max), aRi(aRS, aRL, k), aRb(0, 0, !0, j);
		var fh, fj, a7M = g2[0],
			fa = max,
			nd = az.random() % (2 * aRJ + 1) - aRJ;
		for (aRZ(a7M, nd, fa), aRi(aRR, aRL, j), aRb(0, 0, !1, k), aRj(aRR), aRj(aRS), aRZ(g2[j - 1], aRR[j - 1], k), aRb(j - 1, 0, !1, k), aRZ(g2[j * (k - 1)], aRS[k - 1], j), aRf(g2[j * k - 1], j), aRb(0, k - 1, !0, j), aRP[j - 1] = aRP[0] = !
			0, aRQ[k - 1] = aRQ[0] = !0, aRk(0, j, !0), aRk(0, k, !1), ! function() {
				var aRm, a8r;
				for (;;) {
					if (aRm = function() {
							var aC, aRm = aRM.length - 1;
							for (aC = aRm - 1; 0 <= aC; aC--) aRN[aC] > aRN[aRm] && (aRm = aC);
							return aRm
						}(), aRN[aRm] < 5) return;
					a8r = aRM[aRm] + bO.g1(aRN[aRm], 2), (aRO[aRm] ? function(fh) {
						var fa, aRp, aC, aKO = 0,
							aRq = 0;
						for (; aRq < k - 1;) {
							for (aC = aKO + 1; aC < k; aC++)
								if (aRQ[aC]) {
									aRq = aC;
									break
								} fa = aRq - aKO + 1, aRZ(g2[fh + j * aKO], 0 === aKO ? aRR[fh] : aRL[aRp - 1] - aRL[aRp - 2], fa), aRf(g2[aRq * j + fh], fa), aRb(fh, aKO, !1, fa), aRp = fa, aKO = aRq
						}
						aRP[fh] = !0
					} : function(fj) {
						var fa, aRp, aC, aKO = 0,
							aRq = 0;
						for (; aRq < j - 1;) {
							for (aC = aKO + 1; aC < j; aC++)
								if (aRP[aC]) {
									aRq = aC;
									break
								} fa = aRq - aKO + 1, aRZ(g2[fj * j + aKO], 0 === aKO ? aRS[fj] : aRL[aRp - 1] - aRL[aRp - 2], fa), aRf(g2[fj * j + aRq], fa), aRb(aKO, fj, !0, fa), aRp = fa, aKO = aRq
						}
						aRQ[fj] = !0
					})(a8r), aRk(a8r, aRM[aRm] + aRN[aRm] - a8r, aRO[aRm]), aRN[aRm] = a8r - aRM[aRm] + 1
				}
			}(), fh = 0; fh < j; fh++)
			if (!aRP[fh])
				for (fj = 0; fj < k; fj++) aRQ[fj] || ! function(fh, fj) {
					var value = g2[fj * j + fh - 1] + g2[(fj - 1) * j + fh],
						aAo = 2;
					aRP[fh + 1] && (aAo++, value += g2[fj * j + fh + 1]);
					aRQ[fj + 1] && (aAo++, value += g2[(fj + 1) * j + fh]);
					g2[fj * j + fh] = bO.g1(value, aAo)
				}(fh, fj)
	}, this.aQO = function() {
		return g2
	}, this.aQ3 = function() {
		g2 = null
	}
}

function aLp(ft, fu) {
	return 0 <= ft ? bO.g1(ft, fu) : -bO.g1(-ft, fu)
}

function kS(g2) {
	return g2 * g2
}

function a9r(ft, fu) {
	return fu < ft ? ft : fu
}

function aFE(ft, fu) {
	return ft < fu ? ft : fu
}

function aCQ(ft, g2, fu) {
	return g2 < ft ? ft : fu < g2 ? fu : g2
}

function aRs(g2, fa) {
	for (var ek = bO.g1(g2 + 1, 2), aC = 0; aC < fa; aC++) ek = bO.g1(ek + bO.g1(g2, ek), 2);
	return ek
}

function aNo(g2, fa) {
	return g2 < 1 ? 0 : aRs(g2, fa)
}

function aRt(nz, o0, ul, aC9, oC, oD, um, vS) {
	return !(nz + ul <= oC || o0 + aC9 <= oD || oC + um <= nz || oD + vS <= o0)
}

function aRu(nz, o0, ul, aC9, oC, oD, um, vS) {
	return nz <= oC && o0 <= oD && oC + um <= nz + ul && oD + vS <= o0 + aC9
}

function zq(g2) {
	return Math.floor(!!g2 * (1 + Math.log2(g2 + .5)))
}

function c1() {
	this.g1 = function(ft, fu) {
		return Math.floor((ft + .5) / fu)
	}, this.aRv = function(ft, fu) {
		return Math.floor(ft * (fu + .5))
	}, this.sqrt = function(g2) {
		return ~~Math.sqrt(g2 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.il = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aRw = function(gJ, gL, gN) {
		return Math.max(Math.min(gJ, gL), gN)
	}, this.aRx = function(aRy, aRz, fh, fj) {
		fh -= aRy, aRy = fj - aRz, fj = 0;
		return 0 == fh ? fj = 0 <= aRy ? Math.PI : 0 : (fj = Math.atan(aRy / fh), fj += 0 < fh ? .5 * Math.PI : 1.5 * Math.PI), fj
	}, this.log2 = function(g2) {
		return Math.floor(!!g2 * (1 + Math.log2(g2 + .5)))
	}, this.log10 = function(g2) {
		return Math.floor(Math.log10(g2 + .5))
	}, this.aS1 = function(aS2, aS3, aS4, aS5, aS6) {
		return aS4 - aS6 < aS2 && aS2 < aS4 + aS6 && aS5 - aS6 < aS3 && aS3 < aS5 + aS6
	}, this.a0n = function(aCq, aCs) {
		return aCq * aCq + aCs * aCs
	}
}

function dJ() {
	this.z = new aS7, this.ug = 0;
	var aS8 = new Array(32);

	function aSB() {
		for (var fa = aS8.length, aC = 0; aC < fa; aC++) aS8[aC] = null
	}
	this.dk = function() {
		for (var aS9, aSA = document.body.firstChild; aSA;) aS9 = aSA.nextSibling, !document.body.contains(aSA) || "DIV" !== aSA.tagName && "INPUT" !== aSA.tagName && "BUTTON" !== aSA.tagName || u.removeChild(document.body, aSA), aSA = aS9
	}, this.v = function(eJ, a4g, a7M) {
		void 0 === a4g && (a4g = this.ug), bi.ds = !0, 0 === eJ && (0 === ab.a4b() ? eJ = 5 : a1.a2.setState(13)), this.te(), this.ug === eJ && (a4g = aS8[eJ].a4g, aS8[eJ] = null), this.ug = eJ;
		var lr = aS8[eJ];
		if (!lr || 4 === eJ || 7 === eJ || 8 === eJ || 9 === eJ || 10 === eJ || 11 === eJ || 13 === eJ || 15 === eJ || 18 === eJ || 20 <= eJ && eJ <= 28 || 32 === eJ || 33 === eJ) {
			if (0 === eJ) return void aSB();
			1 === eJ ? lr = new aSC : 2 === eJ ? lr = new aSD : 3 === eJ ? lr = new aSE : 4 === eJ || 9 === eJ || 10 === eJ || 11 === eJ || 13 === eJ || 33 === eJ ? lr = a7M : 5 === eJ ? lr = new aSF : 6 === eJ ? lr = new aSG : 7 === eJ ? lr =
				new aSH(u.z.aSI) : 8 === eJ ? lr = a7M : 12 === eJ ? lr = new aSJ : 14 === eJ ? lr = new aSK : 15 === eJ ? lr = new aSH(u.z.aSL) : 16 === eJ ? lr = new aSM : 17 === eJ ? lr = new aSN : 18 === eJ ? lr = new aSO : 19 === eJ ? lr =
				new aSP : 20 === eJ ? lr = new aSQ : 21 === eJ ? lr = new aSR : 22 === eJ ? lr = new aSS : 23 === eJ ? lr = new aST : 24 === eJ ? lr = new aSU : 25 === eJ ? lr = new aSV : 26 === eJ ? lr = new aSW : 27 === eJ ? lr = new aSX :
				28 === eJ ? lr = new aSY : 29 === eJ ? lr = new aSZ : 30 === eJ ? lr = new aSa : 31 === eJ ? lr = new aSb : 32 === eJ && (lr = new aSc), lr.a4g = a4g, aS8[eJ] = lr
		}
		lr.show(a7M)
	}, this.a4a = function() {
		this.iN() && this.aSd(this.a4f().a4g)
	}, this.aSd = function(eJ) {
		this.iN() && (aS8[eJ] ? (this.te(), bi.ds = !0, this.ug = eJ, aS8[eJ].show()) : this.v(eJ))
	}, this.te = function() {
		this.iN() && aS8[this.ug].te()
	}, this.y = function() {
		this.iN() && (aS8[this.ug].te(), aSB(), this.ug = 0, a1.a2.setState(13))
	}, this.y2 = function() {
		var lr;
		this.iN() && (lr = aS8[this.ug]).y2 && lr.y2()
	}, this.resize = function() {
		if (!this.iN()) return !1;
		aS8[this.ug].resize()
	}, this.ho = function(fh, fj) {
		var lr;
		this.iN() && (lr = aS8[this.ug]).ho && lr.ho(fh, fj)
	}, this.a4y = function(fh, fj) {
		var lr;
		this.iN() && (lr = aS8[this.ug]).a4y && lr.a4y(fh, fj)
	}, this.a5M = function() {
		var lr;
		this.iN() && (lr = aS8[this.ug]).a5M && lr.a5M()
	}, this.a51 = function(mB, mC, deltaY) {
		var lr;
		this.iN() && (lr = aS8[this.ug]).a51 && lr.a51(mB, mC, deltaY)
	}, this.a5W = function(code) {
		var lr;
		return !!this.iN() && ((lr = aS8[this.ug]).a5W && lr.a5W(code), !0)
	}, this.ef = function() {
		var lr;
		this.iN() && (lr = aS8[this.ug]) && lr.ef && lr.ef()
	}, this.iN = function() {
		return 0 < this.ug
	}, this.a4f = function() {
		return aS8[this.ug]
	}, this.a8c = function(eJ) {
		return aS8[eJ]
	}, this.aSe = function() {
		return aS8
	}, this.removeChild = function(om, on) {
		try {
			om.removeChild(on)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aSH(data) {
	var aSf, aSg;

	function aSj(sP, wB) {
		if (!data.aSh) {
			if (data.aTO) {
				if (wB) return
			} else {
				if (!wB) return;
				if (data.zF < 1e4) return
			}
			var aTX, wM = new s7,
				aTV = wB && 1e5 <= data.zF,
				aTW = wM.sA(wB ? (aTV ? "⚠️ " : "") + L(274) : L(275)),
				aTZ = (aTV && (aTW.style.color = "yellow"), wB ? wM.sC(L(276, [bD.tR.a7e(data.zF, .01, 0)])) : ((aTX = new tH({
					value: data.aTY,
					eJ: -1
				})).e.readOnly = !0, aTX.e.type = "password", wM.sL(aTX), wM.sL(new tr([new x(L(208), function(e) {
					return e.textContent === L(208) ? (e.textContent = L(209), aTX.e.type = "text") : (e.textContent = L(208), aTX.e.type = "password"), !0
				}).button, new x(L(205), function(e) {
					return bD.sU.a6k(aTX.e), bD.sU.xg(e), !0
				}).button]))), wM.sG(L(wB ? 275 : 277)).style.marginTop = "0.75em", new tH({
					value: "",
					eJ: -1
				}, 0, 0)),
				aTb = (aTZ.e.type = "email", aTZ.e.autocomplete = "email", aTZ.e.name = "email", aTZ.e.inputMode = "email", aTZ.e.spellcheck = !1, wM.sL(aTZ), wM.sL(new tr([new x(L(278), function(e) {
					return b1.aJf.aTa({
						action: 3,
						sB: aTZ.e.value.trim().substring(0, 63)
					}), bD.sU.xg(e), !0
				}).button])), wB && wM.sC(L(279)), wM.sG(L(280)).style.marginTop = "0.75em", new tH({
					value: "",
					eJ: -1
				}, 1));
			wM.sL(aTb), wM.sL(new tr([new x(L(281), function() {
				b1.aJf.aJg({
					action: 4,
					ue: "",
					value: Math.floor(+aTb.e.value)
				}), u.v(8, u.a4f().a4g, new uh(18))
			}).button])), sP.push(wM)
		}
	}
	this.show = function() {
		data.aSh && bL.aTt("account", data.ue), aSf.show(), this.resize()
	}, this.te = function() {
		aSf.te()
	}, this.resize = function() {
		aSf.resize(), aSg.resize()
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	}, aSf = new xn(data.username, [new x("⬅️ " + L(43), function() {
		bL.clear(), u.a4a()
	}), new x(data.aSh ? "🔄 " + L(174) : L(175), function() {
		u.v(8, data.aSh ? u.a4f().a4g : void 0, new uh(25, {
			action: 0,
			ue: data.ue,
			uf: data.uf
		}))
	}, 0, 0, 1)]), aSg = new sN(aSf.xt, function() {
		var sP = [];
		aSj(sP, 1), sP.push(function() {
				var wM = new s7;
				wM.sA(L(247)), data.aTO && (wM.sG("✅ " + L(248)).style.marginBottom = "0.75em");
				var a4C = data.aTP;
				a4C < 1 ? (wM.sG(L(249)), 0 === data.aTQ ? wM.sC(L(250)) : 1 === data.aTQ ? wM.sC(L(251)) : 2 === data.aTQ ? wM.sC(L(252)) : 3 === data.aTQ ? wM.sC(L(253)) : 4 === data.aTQ ? wM.sC(L(254)) : 5 === data.aTQ ? wM.sC(L(
					255)) : 6 === data.aTQ ? wM.sC(L(256)) : wM.sC(L(257))) : (wM.sG(L(258)), a4C = a4C < 2 ? L(259) : a4C < 61 ? 2 === a4C ? L(260) : L(261, [a4C - 1]) : a4C < 84 ? 61 === a4C ? L(262) : L(263, [a4C - 60]) : a4C <
					255 ? 84 === a4C ? L(264) : L(265, [a4C - 83]) : L(266), wM.sC(a4C));
				{
					var sD, aT7;
					wM.sL(new u2), data.aSh && (sD = wM.sC(), wM.sL(new tr([new x(bm.yQ.x0(data.ue) ? L(267) : L(268), function(e) {
						return bm.yQ.yd(data.ue) ? (e.textContent = L(267), aT7(1)) : (e.textContent = L(268), aT7(0)), !0
					}).button])), aT7 = function(g2) {
						sD.textContent = g2 ? L(269) : ""
					}, bm.yQ.x0(data.ue) && aT7(1), wM.sL(new u2))
				}
				var sY, tG = new tH({
					value: data.username,
					eJ: -1
				});
				tG.e.readOnly = !0, wM.sL(tG), wM.sL(new tr([new x(L(205), function(e) {
					return bD.sU.a6k(tG.e), bD.sU.xg(e), !0
				}).button])), data.aSh || wM.sC(L(270));
				(data.aTR || data.aTS || data.aTT) && (wM.sL(new u2), wM.sC(L(271)), data.aTR && (wM.sC("• Account Timeout").style.color = "orange"), data.aTS && ((sY = wM.sC("• Muted")).style.color = "orange", sY.style.marginTop =
					"0.5em"), data.aTT) && ((sY = wM.sC("• Redacted")).style.color = "orange", sY.style.marginTop = "0.5em");
				data.aSh && (wM.sL(new u2), wM.sG(b1.z.aT3("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", wM.sL(new tr([new x(L(272), function(e) {
					return b1.aJf.aJg({
						action: 3,
						ue: data.ue,
						value: 0
					}), bD.sU.xg(e), !0
				}, bE.q9).button])), wM.sL(new tr([new x(L(273), function(e) {
					return b1.aJf.aJg({
						action: 3,
						ue: data.ue,
						value: 1
					}), bD.sU.xg(e), !0
				}, bE.q9).button])), wM.sL(new tr([new x("Cheater", function(e) {
					return b1.aJf.aJg({
						action: 3,
						ue: data.ue,
						value: 2
					}), bD.sU.xg(e), !0
				}, bE.q9).button])), wM.sL(new tr([new x("False Reporter", function(e) {
					return b1.aJf.aJg({
						action: 3,
						ue: data.ue,
						value: 3
					}), bD.sU.xg(e), !0
				}, bE.q9).button])), a4C = "CRTOR" === (a4C = bm.buffer.data[105].value) || "ADMIN" === a4C) && (wM.sL(new tr([new x("Block Account", function(e) {
					return b1.aJf.aJg({
						action: 3,
						ue: data.ue,
						value: 4
					}), bD.sU.xg(e), !0
				}, bE.q7).button])), wM.sL(new tr([new x("Ban IP", function(e) {
					return b1.aJf.aJg({
						action: 3,
						ue: data.ue,
						value: 5
					}), bD.sU.xg(e), !0
				}, bE.q7).button])), wM.sL(new tr([new x("Gold Seizure", function(e) {
					return b1.aJf.aJg({
						action: 3,
						ue: data.ue,
						value: 6
					}), bD.sU.xg(e), !0
				}, bE.q7).button])), wM.sL(new tr([new x("Remove Punishments", function(e) {
					return b1.aJf.aJg({
						action: 3,
						ue: data.ue,
						value: 7
					}), bD.sU.xg(e), !0
				}, bE.pu).button])));
				return wM
			}()),
			function(sP) {
				var wM, tG, k, aT8, aTA, aT9;
				data.aSh && data.aTD && ((wM = new s7).sA(L(201)), wM.sC(L(198)), (tG = new tH({
					value: data.aTD,
					eJ: -1
				})).e.readOnly = !0, wM.sL(tG), k = !1, aT8 = new x(L(202), function(e) {
					return k && b1.z.eg(0) && (bD.sU.xg(e), aT9(), b1.aJf.aTE({
						action: 9,
						ue: data.ue
					})), !0
				}, 1), aTA = new x(L(195), function(e) {
					return e.textContent === L(195) ? (k = !0, e.textContent = L(196), aT8.so(0), aT8.button.style.color = bE.qX) : aT9(), !0
				}), wM.sL(new tr([aTA.button])), aT9 = function() {
					k = !1, aTA.button.textContent = L(195), aT8.so(1), aT8.button.style.color = bE.pS
				}, wM.sL(new tr([aT8.button])), wM.sC(L(203)), sP.push(wM))
			}(sP),
			function(sP) {
				var wM, sD, aFz, aTd, aT8, aTA, aT9;
				data.aSh || ((wM = new s7).sA(L(282)), (sD = wM.sC(data.aTc.length + " / 160")).style.textAlign = "center", aFz = !0, (aTd = new yB(0, 1, function(e) {
					e = e.target.value.length;
					sD.textContent = e + " / 160", 160 < e ? aFz && (aFz = !1, aTA.so(1)) : aFz || (aFz = !0, aTA.so(0))
				})).e.rows = 6, aTd.e.style.fontSize = "1em", aTd.yH(data.aTc), wM.sL(aTd), 0 !== data.aTe ? (aTA = new x(L(283), function() {
					if (!aFz) return !0;
					u.v(8, u.a4f().a4g, new uh(29, {
						action: 1,
						sB: aTd.yI().substring(0, 160)
					}))
				}, 0, 0, 1), wM.sL(new tr([aTA.button])), wM.sL(new tr([new x(1 === data.aTe ? L(284) : L(285), function() {
					u.v(8, u.a4f().a4g, new uh(29, {
						action: 0,
						sB: ""
					}))
				}, 0, 0, 1).button])), wM.sC(1 === data.aTe ? L(286, [data.aTf - 1]) : L(287, [data.aTf - 1])), wM.sC(L(288, [data.aTg]))) : (aT8 = new x(L(202), function() {
					if (!aTd.e.readOnly) return !0;
					u.v(8, u.a4f().a4g, new uh(29, {
						action: 1,
						sB: aTd.yI().substring(0, 160)
					}))
				}, 1), aTA = new x(L(195), function(e) {
					if (e.textContent === L(195)) {
						if (!aFz) return !0;
						e.textContent = L(196), aTd.e.readOnly = !0, aT8.so(0), aT8.button.style.color = bE.qX
					} else aT9();
					return !0
				}), wM.sL(new tr([aTA.button])), wM.sC(L(288, [data.aTg])), aT9 = function() {
					aTA.button.textContent = L(195), aTd.e.readOnly = !1, aT8.so(1), aT8.button.style.color = bE.pS
				}, wM.sL(new tr([aT8.button]))), sP.push(wM))
			}(sP),
			function(sP) {
				var wM;
				data.aSh && 0 !== data.aTe && ((wM = new s7).sA(L(289)), wM.sE(data.aTc), wM.sL(new tr([new x(L(290, 0, "Report"), function(e) {
					return b1.z.eg(0) && (bD.sU.xg(e), b1.aJf.aTE({
						action: 5,
						ue: data.ue
					})), !0
				}, 0, 0, 1).button])), sP.push(wM))
			}(sP), sP.push(function() {
				var wM = new s7,
					aT4 = (wM.sA(L(176)), wM.sG(b1.z.aT3("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(177), L(178), L(179), L(180), L(181), L(182), L(183), L(184), L(185), L(186), L(187), L(188), L(189), L(190)]),
					eI = data.aT5;
				return wM.sG(L(191) + bD.tR.a7e(data.zF, .01, 2) + "<br>" + L(192) + (eI + 1) + " / " + data.zE + "<br>" + L(193) + aT4[function(eI, zF) {
					if (eI < 10) return 0;
					if (eI < 30) return 1;
					if (eI < 60) return 2;
					if (3e4 <= (zF = bO.g1(zF, 100))) return 3;
					if (12e3 <= zF) return 4;
					if (7e3 <= zF) return 5;
					if (3e3 <= zF) return 6;
					if (1e3 <= zF) return 7;
					if (500 <= zF) return 8;
					if (200 <= zF) return 9;
					if (70 <= zF) return 10;
					if (20 <= zF) return 11;
					if (3 <= zF) return 12;
					return 13
				}(eI, data.zF)]), wM
			}()), data.aSh && sP.push(function() {
				var wM = new s7,
					tG = (wM.sA(L(194)), wM.sG(b1.z.aT3("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new tH({
						value: bm.buffer.data[147].value,
						eJ: -1
					}, 1, void 0, function(e) {
						bm.qy.qz(147, aT7(e.target.value))
					})),
					aT8 = (wM.sL(tG), new x(L(14), function(e) {
						return tG.e.readOnly && b1.z.eg(0) && (bD.sU.xg(e), aT9(), b1.aJf.aJg({
							action: 0,
							ue: data.ue,
							value: parseInt(bm.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					aTA = new x(L(195), function(e) {
						return e.textContent === L(195) ? (e.textContent = L(196), tG.e.readOnly = !0, aT8.so(0), aT8.button.style.color = bE.qX, bm.qy.qz(147, tG.e.value), aT7(bm.buffer.data[147].value)) : aT9(), !0
					}),
					sD = (wM.sL(new tr([aTA.button])), wM.sC()),
					aT7 = function(g2) {
						return sD.innerHTML = u.z.aTB(g2, bm.buffer.data[105].value, data.ue), g2
					},
					aT9 = function() {
						aTA.button.textContent = L(195), tG.e.readOnly = !1, aT8.so(1), aT8.button.style.color = bE.pS
					};
				return aT7(bm.buffer.data[147].value), wM.sL(new tr([aT8.button])), wM
			}());
		sP.push(function() {
			var wM = new s7,
				tG = (wM.sA(L(204)), new tH({
					value: data.ue,
					eJ: -1
				})),
				aTC = (tG.e.readOnly = !0, wM.sL(tG), wM.sL(new tr([new x(L(205), function(e) {
					return bD.sU.a6k(tG.e), bD.sU.xg(e), !0
				}).button])), wM.sL(new u2), new tH({
					value: data.ue,
					eJ: -1
				}));
			return wM.sL(aTC), wM.sL(new tr([new x(L(206), function(e) {
				u.v(8, u.a4f().a4g, new uh(25, {
					action: 0,
					ue: aTC.e.value,
					uf: 0
				}))
			}).button])), wM
		}()), data.aSh || (sP.push(function() {
			var wM = new s7,
				aTF = (wM.sA(L(207)), new tH(bm.buffer.data[106])),
				customPasswordInput = (aTF.e.readOnly = !0, aTF.e.type = "password", wM.sL(aTF), wM.sL(new tr([new x(L(208), function(e) {
					return e.textContent === L(208) ? (e.textContent = L(209), aTF.e.type = "text") : (e.textContent = L(208), aTF.e.type = "password"), !0
				}).button, new x(L(205), function(e) {
					return bD.sU.a6k(aTF.e), bD.sU.xg(e), !0
				}).button])), new tH({
					value: "",
					eJ: -1
				}));
			return customPasswordInput.e.placeholder = "Custom new password (optional)", wM.sL(customPasswordInput), wM.sL(new tr([new x(L(210), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.e.value) && u.v(8, u.a4f().a4g, new uh(15))
			}).button])), wM.sA(L(211), "0.8em"), wM.sC(L(212)), wM.sC(L(213)), wM.sC(L(214)), wM
		}()), sP.push(function() {
			var wM = new s7;
			return wM.sA(L(215)), wM.sL(new tr([new x(L(216), function() {
				u.v(6, u.a4f().a4g)
			}).button])), wM.sL(new tr([new x(L(217), function() {
				bm.qy.qz(105, ""), u.v(8, u.a4f().a4g, new uh(18))
			}).button])), wM.sL(new tr([new x(L(218) + bm.buffer.data[105].value, function() {
				u.v(4, 0, new w(L(219), L(220), !0, [new x("⬅️ " + L(43), function() {
					u.v(7, u.a8c(7).a4g)
				})]))
			}, bE.q9).button])), wM
		}()), sP.push(function() {
			function aTH(eJ) {
				aTG[0].so(0 === eJ ? bE.pe : bE.pp), aTG[1].so(0 === eJ ? bE.pe : bE.q9)
			}
			var sJ, aTG, wM = new s7;
			wM.sA(L(224)), wM.sC(L(225)), bm.z.yy();
			return aTG = [new x(L(226), function() {
				var eJ = Math.min(bm.buffer.data[117].value, sJ.sK.length - 1);
				eJ < 1 || (eJ = bm.z.z2(eJ)) && (bm.qy.qz(105, eJ.ue), bm.qy.qz(106, eJ.password), u.v(8, u.a4f().a4g, new uh(18)))
			}, bE.pe, 1), new x(L(223), function() {
				var eJ = Math.min(bm.buffer.data[117].value, sJ.sK.length - 1);
				if (!(eJ < 1)) {
					sJ.sK[eJ].remove(), sJ.sK.splice(eJ, 1);
					for (var aC = eJ; aC < sJ.sK.length; aC++) sJ.sK[aC].name = "" + aC;
					bm.z.z1(eJ), eJ = bm.buffer.data[117].value, sJ.sK[eJ].textContent = sJ.sK[eJ].textContent.replace("⚪", "🟢"), aTH(eJ)
				}
			}, bE.pe, 1)], sJ = new xj(bm.buffer.data[117], aTH), __fx.savedAccounts.decorate(sJ.sK, bm.buffer.data[117].oQ), aTH(0), sJ.sK[0].style.marginTop = "0.5em", wM.sI(sJ), wM.sL(new tr([aTG[0].button])), wM.sL(new tr(
				[new x("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(bm.buffer.data[117].value)
				}).button])), wM.sL(new tr([aTG[1].button])), wM
		}()));
		return sP.push(function() {
				var wM = new s7,
					aT4 = (wM.sA(L(230)), [L(231), L(232), L(233), L(234)]),
					eI = data.aTI;
				return wM.sG(L(235) + (data.a3v / 100).toFixed(2) + "<br>" + L(192) + (eI + 1) + " / " + data.zE + "<br>" + L(193) + aT4[eI < 10 ? 0 : eI < 50 ? 1 : eI < 200 ? 2 : 3]), wM
			}()), sP.push(function() {
				var wM = new s7;
				return wM.sA(L(227)), wM.sG(L(228) + bD.tR.a7e(data.zB, .1, 1) + "<br>" + L(192) + (data.zC + 1) + " / " + data.zE + "<br>" + L(229) + data.zD), wM
			}()),
			function(sP) {
				var wM = new s7,
					aTh = data.zI,
					aTi = (wM.sA(L(291)), wM.sG(L(292, [data.zG.length ? "[" + data.zG + "]" : "-"])), wM.sG(L(293, [bD.tR.a7e(aTh, .01, 2)])), wM.sG(L(294, [data.zK + 1 + " / " + data.zE])), data.zL),
					aTj = (wM.sG(L(295, [bD.tR.a7e(aTi, .1, 1)])), data.zN);
				wM.sG(L(296, [aTj])), wM.sG(L(297, [bD.tR.a7e(aTi / Math.max(aTj, 1), .1, 2)])), aTh = data.zJ, wM.sA(L(298), "0.8em"), wM.sG(L(292, [data.zH.length ? "[" + data.zH + "]" : "-"])), wM.sG(L(293, [bD.tR.a7e(aTh, .01, 2)])),
					aTi = data.zM, wM.sG(L(295, [bD.tR.a7e(aTi, .1, 1)])), aTj = data.zO, wM.sG(L(296, [aTj])), wM.sG(L(297, [bD.tR.a7e(aTi / Math.max(aTj, 1), .1, 2)])), wM.sG(b1.z.aT3("/wiki/clans"), "0.75em").style.marginTop = "0.8em", sP
					.push(wM)
			}(sP),
			function(sP) {
				var wM = new s7;
				wM.sA(L(299)), wM.sG(L(235) + (data.aTk / 10).toFixed(1) + "<br>" + L(193) + (data.aTl.length ? L(300, [data.aTl]) : L(301))), data.aSh && wM.sL(new tr([new x(L(245), function(e) {
					return b1.z.eg(0) && (bD.sU.xg(e), b1.aJf.aTE({
						action: 4,
						ue: data.ue
					})), !0
				}, 0, 0, 1).button]));
				wM.sG(b1.z.aT3("/wiki/clans"), "0.75em").style.marginTop = "0.8em", sP.push(wM)
			}(sP), sP.push(function() {
				var wM = new s7;
				{
					var tG, aTA, aTN, sD, aT7, aT9;
					wM.sA(L(243)), wM.sG(L(244) + data.aTL + "<br>" + L(192) + (data.aTM + 1) + " / " + data.zE + "<br>" + L(193) + br.eL(data.aTM)), data.aSh && ((tG = new tH({
						value: bm.buffer.data[157].value,
						eJ: -1
					}, 1, void 0, function(e) {
						bm.qy.qz(157, aT7(e.target.value))
					})).e.style.marginTop = "0.6em", wM.sL(tG), aTA = new x(L(195), function(e) {
						return e.textContent === L(195) ? (e.textContent = L(196), tG.e.readOnly = !0, aTN[0].so(0), aTN[0].button.style.color = bE.qX, aT7(bm.buffer.data[157].value)) : aT9(), !0
					}), wM.sL(new tr([aTA.button])), aTN = [new x(L(245), function(e) {
						return tG.e.readOnly && b1.z.eg(0) && (bD.sU.xg(e), aT9(), b1.aJf.aJg({
							action: 1,
							ue: data.ue,
							value: bO.il(parseInt(bm.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], sD = wM.sC(), aT7 = function(g2) {
						return g2 = bD.gw.a7J(g2, 2, 3e4), sD.textContent = L(246, [g2 - 1, g2, bm.buffer.data[105].value]), g2
					}, wM.sL(new tr([aTN[0].button])), aT9 = function() {
						aTA.button.textContent = L(195), tG.e.readOnly = !1, aTN[0].so(1), aTN[0].button.style.color = bE.pS
					}, aT7(bm.buffer.data[157].value))
				}
				return wM
			}()),
			function(sP) {
				var wM, a6j;
				data.aSh && !data.aTm || (0 === a1.id || data.aSh || data.aTm) && ((wM = new s7).sA("Patreon"), !data.aSh && data.aTn ? wM.sL(new tr([new x(L(208), function() {
					b1.aJf.aTE({
						action: 7,
						ue: data.ue
					}), data.aTn = 0, u.v(7)
				}).button])) : data.aTm ? (wM.sG(L(302, [(data.aTo / 100).toFixed(2)]) + "<br>" + L(303, [1 + data.aTp + " / " + data.aTq]) + "<br>" + L(304, [data.aTr ? L(305) : L(306)])), data.aSh || wM.sL(new tr([new x(L(307),
					function() {
						b1.aJf.aTE({
							action: 8,
							ue: data.ue
						}), data.aTm = 0, bm.qy.qz(160, 0), u.v(7)
					}).button]))) : (wM.sG(L(308), "0.75em").style.marginBottom = "0.3em", wM.sG("  • " + L(309), "0.75em").style.whiteSpace = "pre", wM.sG("  • " + L(310), "0.75em").style.whiteSpace = "pre", wM.sG("  • " + L(311),
						"0.75em").style.whiteSpace = "pre", wM.sG(L(312), "0.75em").style.marginTop = "1.0em", wM.sG(L(313), "0.75em").style.marginTop = "1.0em", wM.sG("<a href='" + bN.aTs +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a6j = "https://www.patreon.com/oauth2/authorize?state=" + data.ue +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a3p() + "/", wM.sG(L(314), "0.75em").style.marginTop = "1.0em", wM.sG("<a href='" +
						a6j + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aSh || (wM.sL(new u2), wM.sL(new tr([new x(L(209), function() {
						b1.aJf.aTE({
							action: 6,
							ue: data.ue
						}), data.aTn = 1, u.v(7)
					}).button])), wM.sG(L(315), "0.75em").style.marginTop = "0.75em")), sP.push(wM))
			}(sP), sP.push(function() {
				var wM = new s7,
					aT4 = (wM.sA(L(236)), [L(237), L(238), L(239), L(240), "Scout", L(241)]),
					eI = data.aTJ;
				return wM.sG(L(242) + (data.aTK / 100).toFixed(2) + "<br>" + L(192) + (eI + 1) + " / " + data.zE + "<br>" + L(193) + aT4[eI < 3 ? 0 : eI < 20 ? 1 : eI < 100 ? 2 : eI < 500 ? 3 : eI < 2e3 ? 4 : 5]), wM.sG(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", wM
			}()),
			function(sP) {
				var wM, tG, aTC, aT8, aTA, aT9;
				data.aSh || ((wM = new s7).sA(L(197)), wM.sC(L(198)), tG = new tH({
					value: bm.buffer.data[184].value,
					eJ: -1
				}, 1, void 0, function(e) {
					bm.qy.qz(184, e.target.value)
				}), wM.sL(tG), wM.sC(L(199)), aTC = new tH({
					value: bm.buffer.data[185].value,
					eJ: -1
				}, 0, void 0, function(e) {
					bm.qy.qz(185, e.target.value)
				}), wM.sL(aTC), aT8 = new x(L(200), function(e) {
					return tG.e.readOnly && b1.z.eg(0) && (bD.sU.xg(e), aT9(), b1.aJf.aJg({
						action: 5,
						ue: bm.buffer.data[185].value,
						value: bO.il(parseInt(bm.buffer.data[184].value, 10), 1, 1e9)
					})), !0
				}, 1), aTA = new x(L(195), function(e) {
					return e.textContent === L(195) ? (e.textContent = L(196), tG.e.readOnly = !0, aTC.e.readOnly = !0, aT8.so(0), aT8.button.style.color = bE.qX, bm.qy.qz(184, tG.e.value)) : aT9(), !0
				}), wM.sL(new tr([aTA.button])), aT9 = function() {
					aTA.button.textContent = L(195), tG.e.readOnly = !1, aTC.e.readOnly = !1, aT8.so(1), aT8.button.style.color = bE.pS
				}, wM.sL(new tr([aT8.button])), sP.push(wM))
			}(sP),
			function(sP) {
				var wM, sJ, aTG, eJ, aTH;
				data.aSh || bm.yQ.get().length && ((wM = new s7).sA(L(221)), eJ = 0, aTH = function() {
					var aFe = bm.yQ.get().length;
					aTG[0].so(eJ === aFe ? bE.pe : bE.pp), aTG[1].so(eJ === aFe ? bE.pe : bE.q9)
				}, aTG = [new x(L(222), function() {
					u.v(8, void 0, new uh(25, {
						action: 0,
						ue: bm.yQ.get()[eJ],
						uf: 0
					}))
				}, bE.pe, 1), new x(L(223), function() {
					bm.yQ.yf(eJ), sJ.sK[eJ].remove(), sJ.sK.splice(eJ, 1);
					for (var aC = eJ; aC < sJ.sK.length; aC++) sJ.sK[aC].name = "" + aC;
					bm.yQ.get().length && (eJ = Math.max(eJ - 1, 0), sJ.sK[eJ].textContent = sJ.sK[eJ].textContent.replace("⚪", "🟢")), aTH()
				}, bE.pe, 1)], aTH(), sJ = new xj(bm.yQ.yc(), function(aC) {
					eJ = aC, aTH()
				}), __fx.followedAccounts.decorate(sJ.sK, bm.yQ.get()), sJ.sK[0].style.marginTop = "0.5em", wM.sI(sJ), wM.sL(new tr([aTG[0].button])), wM.sL(new tr([new x("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(eJ)
				}).button])), wM.sL(new tr([aTG[1].button])), sP.push(wM))
			}(sP), aSj(sP, 0), sP
	}())
}

function aSS() {
	var aTu, aTv, aTw, sP;

	function aTx() {
		aTz(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aSe()[19] = null, u.a4a()
	}

	function aTz() {
		2 === aE.data.aIncomeType ? (bD.sc.a67(aTw.yI(), aE.data.aIncomeData, 255), bD.sc.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aTu.show(), this.resize()
	}, this.te = function() {
		aTu.te()
	}, this.resize = function() {
		aTu.resize(), aTv.resize()
	}, this.a5W = function(ek) {
		2 === ek && aTu.xu[0].sl()
	}, aTu = new xn(L(316), [new x("⬅️ " + L(43), aTx)]), aTv = new sN(aTu.xt, (function(sP) {
		var wM = new s7;
		wM.sA(L(317)), wM.sI(new xj({
			oQ: [L(318), L(319), L(320)],
			value: aE.data.aIncomeType
		}, function(eJ) {
			aTz(), 2 !== eJ || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fX)), aE.data.aIncomeType = eJ, u.v(22)
		})), sP.push(wM)
	}(sP = []), function(sP) {
		var wM;
		1 === aE.data.aIncomeType && ((wM = new s7).sA("Value"), wM.sL(new tH({
			eJ: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.il(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), sP.push(wM))
	}(sP), function(sP) {
		var wM;
		2 === aE.data.aIncomeType && ((wM = new s7).sA("Data"), (aTw = new yB(0, 1, 0, 1)).yH(bD.tR.a7k(aE.data.aIncomeData, 4)), wM.sL(aTw), sP.push(wM))
	}(sP), sP))
}

function aSV() {
	var aTu, aTv, aTw;

	function aTx() {
		aTz(), 3 !== aE.data.botDifficultyType || bD.sc.a5v(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aSe()[19] = null, u.a4a()
	}

	function aTz() {
		3 === aE.data.botDifficultyType && bD.sc.a67(aTw.yI(), aE.data.botDifficultyData, aF.l7.length - 1)
	}

	function aU4(sP, eJ) {
		var wM = new s7,
			value = (wM.sA(eJ < 0 ? L(70) : L(69) + " " + bj.a3l[eJ % 9]), 0 <= eJ && (wM.sG(L(323) + ": " + aE.data.teamPlayerCount[eJ]).style.marginBottom = "1em"), eJ < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eJ]);
		wM.sI(new xj({
			oQ: aF.l7,
			value: value
		}, function(iT) {
			eJ < 0 ? aE.data.botDifficultyValue = iT : aE.data.botDifficultyTeam[eJ] = iT
		})), sP.push(wM)
	}
	this.show = function() {
		aTu.show(), this.resize()
	}, this.te = function() {
		aTu.te()
	}, this.resize = function() {
		aTu.resize(), aTv.resize()
	}, this.a5W = function(ek) {
		2 === ek && aTu.xu[0].sl()
	}, aTu = new xn(L(70), [new x("⬅️ " + L(43), aTx)]), aTv = new sN(aTu.xt, function() {
		var sP = [];
		if (function(sP) {
				var wM = new s7,
					oQ = (wM.sA(L(317)), [L(319), L(321), L(322), L(320)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), oQ.splice(2, 1));
				wM.sI(new xj({
					oQ: oQ,
					value: value
				}, function(eJ) {
					aTz(), aE.data.botDifficultyType = eJ, 0 === aE.data.gameMode && 2 === eJ && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fX)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), sP.push(wM)
			}(sP), 0 === aE.data.botDifficultyType) aU4(sP, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aU4(sP, aC);
		else 3 === aE.data.botDifficultyType && ! function(sP) {
			var wM = new s7;
			wM.sA("Data"), (aTw = new yB(0, 1, 0, 1)).yH(bD.tR.a7k(aE.data.botDifficultyData, 8)), wM.sL(aTw), sP.push(wM)
		}(sP);
		return sP
	}())
}

function aU5(data) {
	var aSf, aU6, aU7, aU8, aU9, aUA, aUB, colors, aUC, aUD, aUE = 0,
		aUF = 0,
		aUG = !1,
		aUH = !1,
		aUI = [1, 5, 60, 240, 1440, 10080, 43200];

	function aUm(mB, mC) {
		! function(mB, mC) {
			return aU6 < mB && mB < aU6 + aU8 && aU7 < mC && mC < aU7 + aU9
		}(aUE = mB, aUF = mC) ? (aUG && (bi.ds = !0), aUG = !1) : (aUG = !0, bi.ds = !0)
	}
	this.show = function() {
		aUH = bm.buffer.data[127].value, aSf.show(), this.resize()
	}, this.te = function() {
		aSf.te()
	}, this.resize = function() {
		aSf.resize();
		var ek = i.l,
			y1 = aSf.xy(),
			aUR = ek * y1.y0,
			ek = ek * y1.th;
		aUA = bD.sU.v3(.06), aUB = bD.sU.v3(.04), aU6 = bD.sU.v3(.06), aU7 = ek + aUA, aU8 = i.j - aU6 - aUB, aU9 = aUR + ek - aU7 - aUB
	}, this.y2 = function() {
		aSf.y2(),
			function() {
				var aC, aUO, h3, fh, ft, h = data.data,
					aUV = 1,
					aUW = .125,
					aUX = aUH ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aUO = h[aC].aUO, h3 = aUO.length, aUV = Math.max(h3, aUV), ft = 0; ft < h3; ft++) aUW = Math.max(aUO[ft], aUW), aUX = Math.min(aUO[ft], aUX);
				var o0 = aU7 + aU9,
					a1M = aU9 / (aUW - aUX),
					a1L = 1 / (aUV - 1);
				for (y3.lineWidth = bf.a2O, aC = 0; aC < h.length; aC++) {
					for (aUO = h[aC].aUO, h3 = aUO.length, fh = aU6, y3.beginPath(), y3.moveTo(fh + aU8, o0 - a1M * (aUO[h3 - 1] - aUX)), ft = h3 - 2; 0 <= ft; ft--) y3.lineTo(fh + a1L * ft * aU8, o0 - a1M * (aUO[ft] - aUX));
					y3.strokeStyle = colors[aC], y3.stroke()
				}(function(aUX, aUW, o0, a1M) {
					y3.font = bD.sU.uE(0, .25 * aU6), bD.sU.textBaseline(y3, 1), bD.sU.textAlign(y3, 2), y3.fillStyle = colors[0];
					for (var fh = .92 * aU6, aC = 0; aC < 3; aC++) {
						var g2 = aUX + aC * (aUW - aUX) / 2;
						y3.fillText((g2 / 1e3).toFixed(3), fh, o0 - a1M * (g2 - aUX))
					}
				})(aUX, aUW, o0, a1M),
				function(aUV) {
					var fj = aU7 + aU9 + .15 * aUB;
					y3.font = bD.sU.uE(0, Math.min(.4 * aUB, .028 * i.j)), bD.sU.textBaseline(y3, 0), bD.sU.textAlign(y3, 2), y3.fillStyle = colors[0], y3.fillText(bD.a5m.a6b(aUC), aU6 + aU8, fj), bD.sU.textAlign(y3, 0), y3.fillText(bD.a5m.a6b(
						new Date(aUD.getTime() - 6e4 * (aUV - 1) * aUI[data.aUN])), aU6, fj)
				}(aUV),
				function(aUV, aUX, aUW) {
					if (aUG && !(aUV < 2)) {
						for (var aCH, eJ = (aUE - aU6) / aU8 * (aUV - 1), aUa = Math.floor(eJ), aUb = Math.floor(1 + eJ), aUc = eJ - aUa, aUd = 1e5, aUe = -1, aUf = -1, aUg = aUW - (aUW - aUX) * (aUF - aU7) / aU9, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aGA, aUO = h[aC].aUO;
							aUO.length <= aUb || (aUO = aUO[aUa] + aUc * (aUO[aUb] - aUO[aUa]), (aGA = Math.abs(aUg - aUO)) < aUd && (aUd = aGA, aUe = aC, aUf = aUO))
						} - 1 !== aUe && (aUW = aU7 + aU9 - (aUf - aUX) / (aUW - aUX) * aU9, y3.lineWidth = .5 * bf.a2O, y3.strokeStyle = colors[aUe], y3.beginPath(), y3.moveTo(aU6, aUW), y3.lineTo(aUE, aUW), y3.lineTo(aUE, aU7 + aU9), y3
							.stroke(), y3.beginPath(), y3.arc(aUE, aUW, .1 * aU6, 0, 2 * Math.PI), y3.fillStyle = colors[aUe], y3.fill(), aUX = aU7 + aU9 + .15 * aUB, bD.sU.textAlign(y3, 1), aCH = aUV - 2 < eJ ? (aCH = aUD.getTime() - 6e4 *
								aUI[data.aUN], new Date(aCH + (eJ - (aUV - 2)) * (aUC.getTime() - aCH))) : new Date(aUD.getTime() - 6e4 * (aUV - eJ - 1) * aUI[data.aUN]), aUV = bD.a5m.a6b(aCH), eJ = bD.sU.measureText(aUV), aCH = bO.il(aUE,
								aU6 + .5 * eJ, aU6 + aU8 - .5 * eJ), y3.fillStyle = bD.color.pK(70, 50, 20), y3.fillRect(aCH - .52 * eJ, aU7 + aU9, 1.04 * eJ, .55 * aUB), y3.fillStyle = colors[0], y3.fillText(aUV, aCH, aUX), y3.font = bD.sU
							.uE(0, .25 * aU6), bD.sU.textBaseline(y3, 1), bD.sU.textAlign(y3, 2), aCH = .92 * aU6, aUV = (aUf / 1e3).toFixed(3), eJ = bD.sU.measureText(aUV), aUX = aCH - 1.04 * eJ, y3.fillStyle = bD.color.pK(70, 50, 20), y3
							.fillRect(aUX, aUW - .1625 * aU6, aU6 - aUX, .275 * aU6), y3.fillStyle = colors[aUe], y3.fillText(aUV, aCH, aUW))
					}
				}(aUV, aUX, aUW)
			}(), y3.lineWidth = bf.a2O, y3.strokeStyle = bE.pS, y3.beginPath(), y3.moveTo(aU6, aU7), y3.lineTo(aU6, aU7 + aU9), y3.lineTo(aU6 + aU8, aU7 + aU9), y3.stroke();
		var aC, fontSize = .5 * aUA,
			h = (y3.font = bD.sU.uE(0, fontSize), bD.sU.textBaseline(y3, 1), bD.sU.textAlign(y3, 0), data.data),
			fa = h.length,
			fj = aU7 - .5 * aUA,
			sB = "";
		for (aC = 0; aC < fa; aC++) sB += h[aC].name + "  ";
		sB = sB.trim();
		var aUj = bD.sU.measureText(sB),
			fh = .5 * (i.j - aUj);
		for (aUj > i.j && (fh = 0, y3.font = bD.sU.uE(0, i.j / aUj * fontSize)), aC = 0; aC < fa; aC++) y3.fillStyle = colors[aC], y3.fillText(h[aC].name, fh, fj), fh += bD.sU.measureText(h[aC].name + "  ")
	}, this.ho = function(mB, mC) {
		aUm(mB, mC)
	}, this.a4y = function(mB, mC) {
		aUm(mB, mC)
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	};
	var aC, eb, a6Z, iT, fd = data.data,
		fa = fd.length,
		max = 1;
	for (aC = 0; aC < fa; aC++) max = Math.max(max, fd[aC].aUO.length);
	for (aC = 0; aC < fa; aC++)
		for (; fd[aC].aUO.length < max;) fd[aC].aUO.unshift(0);
	eb = new Date, a6Z = 6e4 * eb.getTimezoneOffset(), iT = eb.getTime() - a6Z, aUC = new Date(iT), 6 === data.aUN ? function(eb, a6Z) {
		var aUQ = eb.getUTCFullYear(),
			eb = eb.getUTCMonth() + 1;
		aUD = eb < 12 ? new Date(Date.UTC(aUQ, eb) - a6Z) : new Date(Date.UTC(aUQ + 1, 0) - a6Z)
	}(eb, a6Z) : (a6Z = 6e4 * aUI[data.aUN], aUD = data.aUN <= 4 ? new Date(iT + a6Z - eb.getTime() % a6Z) : new Date(iT + a6Z - (eb.getTime() + 2592e5) % a6Z)), iT = bD.color, colors = [bE.pS, iT.pK(255, 0, 0), iT.pK(0, 200, 0), iT.pK(80, 80,
		255), iT.pK(255, 255, 0), iT.pK(255, 0, 255), iT.pK(0, 255, 255), iT.pK(255, 140, 0), iT.pK(128, 128, 128), iT.pK(0, 255, 140)], aSf = new xn(L(324) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aUN] + ", " + bD.a5m.a6Y(aUC), [
		new x("⬅️ " + L(43), function() {
			u.v(1)
		}), new x(L(325), function() {
			u.v(14)
		})
	], !1)
}

function aSK() {
	var aSf, aSg, sP, aUn = -1;
	this.show = function() {
		aSf.show(), this.resize(), aUn = bm.buffer.data[125].value
	}, this.te = function() {
		aSf.te()
	}, this.resize = function() {
		aSf.resize(), aSg.resize()
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	}, aSf = new xn(L(326), [new x("⬅️ " + L(43), function() {
		aUn !== bm.buffer.data[125].value ? u.z.aUo() : u.aSd(13)
	})]), aSg = new sN(aSf.xt, ((sP = []).push(function() {
		var wM = new s7,
			aTA = (wM.sA(L(327)), wM.sC(L(328)), new x(L(329), function() {
				bm.qy.qz(130, 0), u.z.aUo()
			}, 0, 0, 1)),
			tG = new tH(bm.buffer.data[126], 0, function() {
				aTA.button.click()
			});
		return wM.sL(tG), tG.e.placeholder = "a,b,c", tG.e.style.marginTop = "0.5em", wM.sL(new tr([aTA.button])), wM
	}()), sP.push(function() {
		var wM = new s7,
			aTA = new x(L(329), function() {
				bm.qy.qz(130, 1), u.z.aUo()
			}, 0, 0, 1),
			aUt = new tH(bm.buffer.data[129], 1, function() {
				aUt.e.focus()
			}),
			aUu = new tH(bm.buffer.data[128], 1, function() {
				aTA.button.click()
			});
		return wM.sA(L(330)), wM.sL(aUu), aUu.e.style.marginBottom = "0.5em", wM.sA(L(331)), wM.sL(aUt), wM.sL(new tr([aTA.button])), wM
	}()), sP.push(function() {
		var wM = new s7;
		return wM.sA(L(332)), bm.buffer.data[125].oQ = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], wM.sI(new xj(bm.buffer.data[125])), wM
	}()), sP.push(function() {
		var wM = new s7;
		return wM.sA(L(333)), wM.sL(new tm(bm.buffer.data[127], L(334))), wM
	}()), sP))
}

function aSJ() {
	var aSf, aUv, aU8, aUw, aUx, aUy, colors = [0, 0, 0],
		aUz = -1;

	function aV2(aC) {
		var aV3 = aUv.fj + aC * (bf.gap + aUy);
		y3.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", y3.fillRect(aUw, aV3, colors[aC] * aUx, aUy), y3.strokeStyle = bE.pS, y3.strokeRect(aUw, aV3, aUx,
			aUy), y3.fillStyle = bE.pS, y3.font = bD.sU.uE(0, .32 * aUy), bD.sU.textBaseline(y3, 1), bD.sU.textAlign(y3, 0), y3.fillText(L(0 === aC ? 337 : 1 === aC ? 338 : 339) + aV0(aC), aUw + bf.gap, aV3 + .53 * aUy)
	}

	function aV0(aC, aV4) {
		return aV4 = aV4 || 256, bO.il(Math.floor(aV4 * colors[aC]), 0, aV4 - 1)
	}

	function a5S(mB, mC) {
		return !(mB < aUw || mC < aUv.fj || mB > aUv.fh + aUv.j || mC > aUv.fj + aUv.k)
	}
	this.show = function() {
		var g2 = bm.buffer.data[121].value;
		colors[0] = (g2 >> 12) / 63, colors[1] = (g2 >> 6 & 63) / 63, colors[2] = (63 & g2) / 63, aSf.show(), this.resize()
	}, this.te = function() {
		bm.qy.qz(121, (aV0(0, 64) << 12) + (aV0(1, 64) << 6) + aV0(2, 64)), aSf.te()
	}, this.resize = function() {
		aSf.resize(), aUv.resize();
		var ek = i.l,
			y1 = aSf.xy(),
			aV1 = (aUv.fj = Math.max(aUv.fj, ek * y1.th + bf.gap), ek * y1.y0 - 2 * bf.gap);
		aUv.k = Math.min(aUv.k, aV1), aUv.j = 2 * aUv.k, aUv.fj = ek * y1.th + .5 * (ek * y1.y0 - aUv.k), aUv.fh = .5 * (i.j - aUv.j), aU8 = .25 * aUv.j, aUw = aUv.fh + aU8 + bf.gap, aUx = aUv.j - aU8 - bf.gap, aUy = (aUv.k - 2 * bf.gap) / 3
	}, this.y2 = function() {
		var eI, v2, fu;
		aSf.y2(), y3.lineWidth = bf.a2O, eI = aV0(0), v2 = aV0(1), fu = aV0(2), y3.fillStyle = "rgb(" + eI + "," + v2 + "," + fu + ")", y3.fillRect(aUv.fh, aUv.fj, aU8, aUv.k), y3.strokeStyle = bE.pS, y3.strokeRect(aUv.fh, aUv.fj, aU8, aUv.k), y3
			.fillStyle = eI + v2 + fu < 306 && v2 < 150 ? bE.pS : bE.pJ, bD.sU.textBaseline(y3, 1), bD.sU.textAlign(y3, 1), y3.font = bD.sU.uE(0, .1 * aUv.k), y3.rotate(-Math.PI / 2), y3.fillText(L(336), -aUv.fj - .5 * aUv.k, aUv.fh + .5 * aU8),
			y3.setTransform(1, 0, 0, 1, 0, 0), aV2(0), aV2(1), aV2(2)
	}, this.ho = function(mB, mC) {
		a5S(mB, mC) && (aUz = bO.il(Math.floor((mC - aUv.fj) / (aUy + .75 * bf.gap)), 0, 2), colors[aUz] = bO.il((mB - aUw) / aUx, 0, 1), bi.ds = !0)
	}, this.a4y = function(mB) {
		-1 !== aUz && (colors[aUz] = bO.il((mB - aUw) / aUx, 0, 1), bi.ds = !0)
	}, this.a51 = function(mB, mC, deltaY) {
		a5S(mB, mC) && (mB = bO.il(Math.floor((mC - aUv.fj) / (aUy + .75 * bf.gap)), 0, 2), colors[mB] = bO.il(colors[mB] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.ds = !0)
	}, this.a5M = function() {
		0 <= aUz && (aUz = -1, bi.ds = !0)
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	}, aSf = new xn(L(335), [new x("⬅️ " + L(43), function() {
		u.z.aG5()
	})], !1), aUv = new t4([.5, .25], [.5, .5], 1)
}

function aSR() {
	var aTu, aTv, aTw, p2;

	function aTx() {
		aTz(), u.aSe()[19] = null, u.a4a()
	}

	function aV5() {
		aTz(), u.v(21)
	}

	function aTz() {
		1 === aE.data.gameMode ? aE.a81.a87() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.sc.a67(aTw.yI(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aTu.show(), this.resize()
	}, this.te = function() {
		aTu.te()
	}, this.resize = function() {
		aTu.resize(), aTv.resize()
	}, this.a5W = function(ek) {
		2 === ek && aTu.xu[0].sl()
	}, p2 = [new x("⬅️ " + L(43), aTx)], 1 === aE.data.gameMode && p2.push(new x(L(340), aV5, 1, 1)), aTu = new xn(L(341), p2), aTv = new sN(aTu.xt, (p2 = [], 0 === aE.data.gameMode ? (function(sP) {
		var wM = new s7;
		wM.sA(L(317)), wM.sI(new xj({
			oQ: [L(342), L(320)],
			value: aE.data.colorsType
		}, function(eJ) {
			aTz(), aE.data.colorsType = eJ, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fX || (aE.data.colorsData = new Uint32Array(aE.fX)), u.v(21)
		})), sP.push(wM)
	}(p2), 1 === aE.data.colorsType && function(sP) {
		var wM = new s7;
		wM.sA("Data"), (aTw = new yB(0, 1, 0, 1)).yH(bD.tR.a7k(aE.data.colorsData, 1)), wM.sL(aTw), sP.push(wM)
	}(p2)) : (aE.a81.a87(), p2.push(function() {
		var wM = new s7;
		wM.sA(L(323));
		for (var aC = 0; aC < bj.a3l.length; aC++) {
			var iT = (aC + 1) % bj.a3l.length,
				e = wM.sG((0 == iT ? "" : "Team ") + bj.a3l[iT]);
			aC && (e.style.marginTop = "0.5em"), wM.sL(new tH({
				eJ: -1,
				value: aE.data.teamPlayerCount[iT]
			}, 1, 0, function(e) {
				aTu.xu[1].so(0);
				var playerCount = bO.il(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aV8] = playerCount
			})).e.aV8 = iT
		}
		return wM
	}()), function(sP) {
		for (var wM = new s7, oQ = (wM.sA(L(343)), []), aC = 0; aC < bj.a3l.length; aC++) {
			var iT = (aC + 1) % bj.a3l.length;
			oQ.push(bj.a3l[iT])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		wM.sI(new xj({
			oQ: oQ,
			value: (aE.data.colorsData[0] % 16 + bj.a3l.length - 1) % bj.a3l.length
		}, function(eJ) {
			var eJ = (eJ + 1) % bj.a3l.length,
				aV9 = bj.aVA[eJ],
				aV9 = (aV9[0] >> 2 << 12) + (aV9[1] >> 2 << 6) + (aV9[2] >> 2);
			aE.data.colorsData[0] = aV9 - (15 & aV9) + eJ
		})), sP.push(wM)
	}(p2)), p2))
}

function uh(id, a7M, aVB) {
	var aSf, aVC;

	function aVH() {
		aVC.sQ.innerHTML += "<br>" + L(346)
	}

	function aVQ() {
		var fu = 1;
		u.v(4, 1, new w(L(347), L(348), !1, [new x("🔄 Reload", function() {
			fu && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), fu = 0
		}, bE.pp)]))
	}

	function aVG() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.dk(bG.aD), bm.qy.qz(110, __fx.passwordReset.getCustomPassword() || bI.f1
			.ui(bI.f1.uj(15))), b1.aJf.aVS()
	}
	this.aVD = !0, this.aVE = id, this.show = function() {
		aSf.show(), this.resize(), 15 === id ? (b1.z.aVF(id) ? aVG : aVH)() : 16 === id ? b1.z.aVF(id) ? b1.eh.ei(2) : aVH() : 17 === id ? b1.z.aVF(id) ? b1.eh.ei(3) : aVH() : 18 === id ? (b1.z.close(0, 3253), b1.z.aKj(0, id, 0), aVH()) : 21 ===
			id ? b1.z.aVF(id) ? b1.aVI.aVJ(a7M.ux, a7M.uy, a7M.uz) : aVH() : 22 === id ? b1.z.aVF(id) ? b1.aVI.aVK(a7M.ux, a7M.aVL, a7M.aVM) : aVH() : 23 === id ? b1.z.aVF(id) ? b1.aVI.aVN(a7M.aUN, a7M.a49) : aVH() : 24 === id ? b1.z.aVF(id) ? b1
			.aVI.aVO(a7M.aUN, a7M.uy, a7M.uz) : aVH() : 25 === id ? b1.z.aVF(id) ? b1.aJf.aTE(a7M) : aVH() : 28 === id ? b1.z.aVF(id) ? b1.aVI.aVP(a7M.ux, a7M.aVL, a7M.aVM) : aVH() : 29 === id ? b1.z.aVF(id) ? b1.aJf.aTa(a7M) : aVH() : 30 ===
			id && (b1.z.aVF(id) ? bA.aG0() || aVQ() : aVH())
	}, this.aVR = function() {
		15 === id ? aVG() : 16 === id ? b1.eh.ei(2) : 17 === id ? b1.eh.ei(3) : 18 === id ? u.v(8, this.a4g, new uh(16)) : 21 === id ? b1.aVI.aVJ(a7M.ux, a7M.uy, a7M.uz) : 22 === id ? b1.aVI.aVK(a7M.ux, a7M.aVL, a7M.aVM) : 23 === id ? b1.aVI.aVN(
			a7M.aUN, a7M.a49) : 24 === id ? b1.aVI.aVO(a7M.aUN, a7M.uy, a7M.uz) : 25 === id ? b1.aJf.aTE(a7M) : 28 === id ? b1.aVI.aVP(a7M.ux, a7M.aVL, a7M.aVM) : 29 === id ? b1.aJf.aTa(a7M) : 30 === id ? bA.aG0() || aVQ() : 1e3 === id && (
			this.aVE = id = 25, b1.aJf.aTE(a7M))
	}, this.aG4 = function(code, by, data) {
		!by && code !== id || (15 === code || 16 === code ? u.v(7, this.a4g) : 17 === code ? (b1.z.close(0, 3252), bm.z.z1(0), bm.buffer.data[117].oQ && 0 < bm.buffer.data[117].oQ.length && (by = bm.z.z2(0)) ? (bm.qy.qz(105, by.ue), bm.qy.qz(106,
			by.password), u.v(8, this.a4g, new uh(16))) : (bm.qy.qz(105, ""), u.z.aG5())) : 21 === code ? u.v(10, this.a4g, new aEY(data)) : 23 === code ? u.v(13, this.a4g, new aU5({
			data: data,
			aUN: a7M.aUN
		})) : 25 === code ? (u.z.aSL.ue = a7M.ue, bm.yQ.nL(a7M.ue), u.v(15, this.a4g)) : 30 === code && (data ? u.v(1) : aVQ()))
	}, this.te = function() {
		aSf.te()
	}, this.resize = function() {
		aSf.resize(), aVC.resize()
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	}, aSf = new xn(L(344), [new x("⬅️ " + L(43), function() {
		aVB ? u.v(29) : u.z.aG5()
	})]), aVC = new tq(aSf.xt, L(345))
}

function aSP() {
	var aTu, aTv, sP;

	function aVV() {
		var h3;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a81.a87()), h3 = bD.sc.a61(aE.data.teamPlayerCount, 0), aE.data.numberTeams = h3) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aTx() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aVX(), aE.data.canvas = null, u.v(5, 5)
	}

	function aVX() {
		bC.ro.dk(), bm.qy.qz(156, bC.a8I.a2s())
	}

	function aVT() {
		aE.data.isReplay = 0, aVX(), aE.a81.a8V(), ab.aKu(), aE.a81.a8S(), aE.data.canvas = 2 === aE.data.mapType ? bV.zx : null, aE.a85(), aE.a83 = 1
	}

	function aVj() {
		aVV();
		for (var h = [aVa(), aVb(), aVc()], aC = 3; aC < 6; aC++) u.removeChild(aTv.sQ, aTv.sR[aC].s9), aTv.sR[aC] = h[aC - 3], aTv.sQ.appendChild(aTv.sR[aC].s9);
		aTv.resize()
	}

	function aVa() {
		var aVk, wM = new s7;
		return wM.sA(L(341)), aVk = 0 === aE.data.gameMode ? [L(342), L(320)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), wM.sG(aVk), wM.sL(new tr([new x(L(352), function() {
			u.v(21)
		}).button])), wM
	}

	function aVb() {
		var wM = new s7,
			h = (wM.sA(L(70)), [L(319) + ": " + aF.l7[aE.data.botDifficultyValue], L(321), L(322), L(320)]);
		return wM.sG(h[aE.data.botDifficultyType]), wM.sL(new tr([new x(L(352), function() {
			u.v(25)
		}).button])), wM
	}

	function aVc() {
		var wM = new s7,
			h = (wM.sA("Spawning"), [L(342), L(354), L(320)]);
		return wM.sG(h[aE.data.spawningType]), wM.sL(new tr([new x(L(352), function() {
			u.v(24)
		}).button])), wM
	}
	this.show = function() {
		aTu.show(), this.resize(), aTu.xt.scrollTop = u.z.uY[0]
	}, this.te = function() {
		u.z.uY[0] = aTu.xt.scrollTop, aTu.te()
	}, this.resize = function() {
		aTu.resize(), aTv.resize()
	}, this.a5W = function(ek) {
		2 === ek && aTu.xu[0].sl()
	}, aTu = new xn("🔧 " + L(349), [new x("⬅️ " + L(43), aTx), new x(L(350), aVT)]), aVV(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.zx : 1 === aE.data.mapType ? aE.data.canvas = bV.aQ4(bV.a8T(aE.data), 0).zx : (aE.data
		.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aQ4(bV.a8T(aE.data), aE.data.mapSeed).zx)), aTv = new sN(aTu.xt, (function(sP) {
		var wM = new s7,
			a6H = (wM.sA(L(351)), aE.data.canvas);
		a6H.style.width = "100%", wM.sL({
			e: a6H
		}), wM.sL(new tr([new x(L(352), function() {
			u.v(20)
		}).button])), sP.push(wM)
	}(sP = []), function(sP) {
		var wM = new s7;
		wM.sA(L(323)), wM.sL(new tH({
			eJ: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.il(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.sc.a61(aE.data.teamPlayerCount, 0), aE.a81.a87(), bD.sc.a61(aE.data.teamPlayerCount, 0) !== e) && aVj()
		})), sP.push(wM)
	}(sP), function(sP) {
		var wM = new s7;
		wM.sA(L(353)), wM.sI(new xj({
			oQ: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eJ) {
			aE.data.gameMode !== eJ && (1 === (aE.data.gameMode = eJ) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aVj())
		})), sP.push(wM)
	}(sP), sP.push(aVa()), sP.push(aVb()), sP.push(aVc()), function(sP) {
		var wM = new s7,
			h = (wM.sA(L(355)), [L(356), L(357), L(320)]);
		wM.sG(h[aE.data.playerNamesType]), wM.sL(new tr([new x(L(352), function() {
			u.v(23)
		}).button])), sP.push(wM)
	}(sP), function(sP) {
		var wM = new s7,
			h = (wM.sA(L(316)), [L(318), L(319) + ": " + aE.data.aIncomeValue, L(320)]);
		wM.sG(h[aE.data.aIncomeType]), wM.sL(new tr([new x(L(352), function() {
			u.v(22)
		}).button])), sP.push(wM)
	}(sP), function(sP) {
		var wM = new s7,
			h = (wM.sA(L(358)), [L(318), L(319) + ": " + aE.data.tIncomeValue, L(320)]);
		wM.sG(h[aE.data.tIncomeType]), wM.sL(new tr([new x(L(352), function() {
			u.v(26)
		}).button])), sP.push(wM)
	}(sP), function(sP) {
		var wM = new s7,
			h = (wM.sA(L(359)), [L(318), L(319) + ": " + aE.data.iIncomeValue, L(320)]);
		wM.sG(h[aE.data.iIncomeType]), wM.sL(new tr([new x(L(352), function() {
			u.v(27)
		}).button])), sP.push(wM)
	}(sP), function(sP) {
		var wM = new s7,
			h = (wM.sA(L(360)), [L(318), L(319) + ": " + aE.data.sResourcesValue, L(320)]);
		wM.sG(h[aE.data.sResourcesType]), wM.sL(new tr([new x(L(352), function() {
			u.v(28)
		}).button])), sP.push(wM)
	}(sP), function(sP) {
		var wM = new s7;
		wM.sA(L(361)), wM.sL(new tr([new x(L(362), function() {
			u.y(), aE.a81.a8W(), u.z.uY[0] = 0, u.v(19)
		}).button])), wM.sL(new tr([new x(L(363), function() {
			bp.aNH()
		}).button])), wM.sL(new tr([new x(L(364), function() {
			return bp.aNJ(), !0
		}).button])), sP.push(wM)
	}(sP), sP))
}

function aSa() {
	var aTu, tM = !0;

	function tX(tW, a8a) {
		var s9 = document.createElement("div"),
			aVm = document.createElement("span"),
			aVn = document.createElement("span");
		aVm.textContent = aX.aEu(a8a.ea) + ":", aVm.style.color = bE.ph, aVm.style.paddingRight = "0.4em", aVm.style.display = "table-cell", aVm.style.width = "6ch", aVm.style.textAlign = "end", s9.appendChild(aVm), aVn.textContent = a8a.sB, s9
			.appendChild(aVn), s9.style.display = "table", a8a.rD && function(s9, rD) {
				{
					var aMe;
					rD >= 1024 - ak.td.a2B ? ((aMe = document.createElement("img")).src = ak.a00.a1z[rD - 1024 + ak.td.a2B].toDataURL(), aMe.style.width = "1.5em", aMe.style.height = "1.5em", aMe.style.verticalAlign = "middle", s9.appendChild(aMe)) :
						((aMe = document.createElement("span")).textContent = ak.td.a2Q(rD), aMe.style.display = "inline-block", aMe.style.fontSize = "1.5em", aMe.style.lineHeight = "1em", aMe.style.verticalAlign = "middle", s9.appendChild(aMe))
				}
			}(s9, a8a.rD), tW.appendChild(s9)
	}

	function ta() {
		tM && (aTu.xt.scrollTop = aTu.xt.scrollHeight)
	}
	this.clear = function() {
		aTu.xt.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a9T = bt.a8d(), fa = a9T.length, tW = document.createDocumentFragment(), aC = 0; aC < fa; aC++) tX(tW, a9T[aC]);
		aTu.xt.appendChild(tW), ta(), aTu.show(), this.resize(), tM = !0, ta()
	}, this.te = function() {
		aTu.te()
	}, this.resize = function() {
		aTu.resize(), aTu.xt.style.padding = "0.4em " + bD.sU.sd(bf.sa)
	}, this.a5W = function(ek) {
		2 === ek && aTu.xu[0].sl()
	}, this.a1s = function(a8a) {
		var tW = document.createDocumentFragment();
		tX(tW, a8a), aTu.xt.appendChild(tW), ta()
	}, (aTu = new xn(L(365), [new x("⬅️ " + L(43), function() {
		u.aSd(1)
	})])).xt.style.overflowY = "auto", aTu.xt.addEventListener("scroll", function() {
		tM = aTu.xt.scrollTop >= aTu.xt.scrollHeight - aTu.xt.clientHeight - 2
	})
}

function aSX() {
	var aTu, aTv, aTw, sP;

	function aTx() {
		aTz(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aSe()[19] = null, u.a4a()
	}

	function aTz() {
		2 === aE.data.iIncomeType && bD.sc.a67(aTw.yI(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aTu.show(), this.resize()
	}, this.te = function() {
		aTu.te()
	}, this.resize = function() {
		aTu.resize(), aTv.resize()
	}, this.a5W = function(ek) {
		2 === ek && aTu.xu[0].sl()
	}, aTu = new xn(L(359), [new x("⬅️ " + L(43), aTx)]), aTv = new sN(aTu.xt, (function(sP) {
		var wM = new s7;
		wM.sA(L(317)), wM.sI(new xj({
			oQ: [L(318), L(319), L(320)],
			value: aE.data.iIncomeType
		}, function(eJ) {
			aTz(), 2 !== eJ || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fX), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eJ, u.v(27)
		})), sP.push(wM)
	}(sP = []), function(sP) {
		var wM;
		1 === aE.data.iIncomeType && ((wM = new s7).sA("Value"), wM.sL(new tH({
			eJ: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.il(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), sP.push(wM))
	}(sP), function(sP) {
		var wM;
		2 === aE.data.iIncomeType && ((wM = new s7).sA("Data"), (aTw = new yB(0, 1, 0, 1)).yH(bD.tR.a7k(aE.data.iIncomeData, 4)), wM.sL(aTw), sP.push(wM))
	}(sP), sP))
}

function aSF() {
	var aVp, aVq, aUv, tG, aVr, u9 = 0;
	this.aLQ = new un, aUv = new t4([.45, .27], [.5, .5], 2 / 3), aVq = [new x("⚔️<br>" + L(366), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aVs(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.pv), new x("🗡️<br>" + L(349), function() {
			aVs(1)
		}, bE.qF), new x("🔑<br>" + L(367), function() {
			aVs(2)
		}, bE.qc), new x("☰<br>" + L(368), function() {
			aVs(3)
		}, bE.pf), new x("", function() {
			u.v(12)
		}, bE.pO, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], tG = new tH(bm.buffer.data[122]);
	for (var aC = 0; aC < aVq.length; aC++) aVq[aC].button.style.position = "absolute";

	function aVs(eJ) {
		a1.a2.setState(10), ac.v6() || ac.aLH(), 0 === eJ ? u.z.a8L(1) : 1 === eJ ? (bC.aNb.zj(bm.buffer.data[156].value, 1) || aE.a81.a8W(), u.v(19)) : 2 === eJ ? 0 !== a1.id || bm.buffer.data[140].value ? u.v(8, u.ug, new uh(16)) : u.z.aVt(u.ug,
			16) : 3 === eJ && u.v(1)
	}
	tG.e.style.position = "absolute", tG.e.style.textAlign = "center", tG.e.placeholder = L(369), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aLQ.show(), aVq[4].so(bD.color.a6O(bm.buffer.data[121].value)), this.resize(), document.body.appendChild(tG.e);
		for (var aC = 0; aC < aVq.length; aC++) document.body.appendChild(aVq[aC].button);
		1 !== a1.id || a1.e4 < 5 || (aVr && bi.ea > aVr + 144e5 ? a1.yk.setState(14) : aVr = bi.ea)
	}, this.te = function() {
		this.aLQ.te(), u.removeChild(document.body, tG.e);
		for (var aC = 0; aC < aVq.length; aC++) u.removeChild(document.body, aVq[aC].button)
	}, this.resize = function() {
		this.aLQ.resize(), this.aLQ.resize(), aUv.resize();
		var gap = .5 * bf.gap,
			vZ = 10 / 99 * .84 * aUv.j,
			aVw = .16 * aUv.k,
			aCp = .19 * aUv.j,
			fh = aUv.fh + aCp,
			vZ = aUv.fj + vZ + 3 * gap,
			j = .5 * (aUv.j - gap) - aCp,
			aCp = aUv.j - 2 * aCp - aVw - gap,
			aCp = (bD.sU.v4(tG.e, fh, vZ, aCp, aVw), bD.sU.v4(aVq[4].button, fh + aCp + gap, vZ, aVw, aVw), u9 = vZ, .5 * (aUv.fj + aUv.k - (vZ += aVw + gap) - gap));
		bD.sU.v4(aVq[0].button, fh, vZ, j, aCp), bD.sU.v4(aVq[1].button, fh + j + gap, vZ, j, aCp), bD.sU.v4(aVq[2].button, fh, vZ + aCp + gap, j, aCp), bD.sU.v4(aVq[3].button, fh + j + gap, vZ + aCp + gap, j, aCp);
		bD.sU.v4(aVq[5].button, fh, vZ + aCp * 2 + gap * 2, j * 2 + gap, aCp / 3);
		bD.sU.v4(aVq[6].button, fh, vZ + aCp * 2.33 + gap * 3, j * 2 + gap, aCp / 3);
		for (var aC = 0; aC < aVq.length; aC++) aVq[aC].button.style.font = bD.sU.uE(0, bD.sU.xU(.065 * aUv.k)), bD.sU.se(aVq[aC].button, 5);
		tG.e.style.font = bD.sU.uE(0, bD.sU.xU(.08 * aUv.k)), bD.sU.se(tG.e, 5)
	}, this.y2 = function() {
		if (ab.aKy(), aU.y2(), fa = Math.floor((a1.a2.im() ? .018 : .0137) * i.io), y3.font = bD.sU.uE(0, Math.max(5, fa)), bD.sU.textBaseline(y3, 0), bD.sU.textAlign(y3, 2), y3.fillStyle = bE.pS, y3.fillText(m.e4, i.j, 0), text = "Win count: " +
			__fx.wins.count, textLength = y3.measureText(text).width, fa = Math.max(5, fa), y3.textAlign = "left", y3.textBaseline = "middle", y3.fillText(text, y3.canvas.width - textLength - fa / 2, 2 * fa), aP.y2(u9), bb.y2(), ac.v6()) {
			y3.imageSmoothingEnabled = !1;
			var text = ac.wG("territorial.io"),
				textLength = .84 * aUv.j / text.width;
			y3.setTransform(textLength, 0, 0, textLength, aUv.fh + .08 * aUv.j, aUv.fj), aVp = aVp || bD.ov.a7K(text, bD.ov.a7R, [0, 0, 0]);
			for (var fh = -1; fh <= 1; fh += 2)
				for (var fj = -1; fj <= 1; fj += 2) y3.drawImage(aVp, fh, fj);
			y3.drawImage(text, 0, 0), y3.imageSmoothingEnabled = !0;
			var fa = ac.wG("logo"),
				aVz = .6666 * textLength * text.height / fa.height,
				oC = .5 * i.j,
				oD = aUv.fj + .5 * textLength * text.height - .5 * aVz * fa.height;
			y3.setTransform(aVz, 0, 0, aVz, oC - .6 * textLength * text.width, oD), y3.drawImage(fa, 0, 0), y3.setTransform(aVz, 0, 0, aVz, oC + .6 * textLength * text.width - aVz * fa.width, oD), y3.drawImage(fa, 0, 0), y3.setTransform(1, 0, 0,
				1, 0, 0), y3.imageSmoothingEnabled = !0
		}
	}
}

function aSM() {
	var aSf, aW0, aW1, xo;

	function aW2(aC) {
		u.v(8, u.ug, new uh(21, {
			ux: aC,
			uy: 0,
			uz: 10
		}))
	}
	this.show = function() {
		aSf.show(), this.resize()
	}, this.te = function() {
		aSf.te()
	}, this.resize = function() {
		aSf.resize(), aW0.resize()
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	}, aW1 = [new x(L(370), function() {
		aW2(1)
	}, 0, 0, 1), new x(L(371), function() {
		aW2(2)
	}, 0, 0, 1), new x(L(372), function() {
		aW2(3)
	}, 0, 0, 1), new x(L(373), function() {
		aW2(0)
	}, 0, 0, 1), new x(L(374), function() {
		aW2(9)
	}, 0, 0, 1), new x(L(375), function() {
		aW2(10)
	}, 0, 0, 1), new x(L(376), function() {
		aW2(11)
	}, 0, 0, 1), new x(L(377), function() {
		aW2(13)
	}, 0, 0, 1)], xo = [new x("⬅️ " + L(43), function() {
		u.a4a()
	})], aSf = new xn(L(378), xo), aW0 = new t2(aW1, aSf.xt)
}

function aGR(title, sH, aW3) {
	var aSf, aVC;
	this.show = function() {
		aSf.show(), this.resize()
	}, this.te = function() {
		aSf.te()
	}, this.resize = function() {
		aSf.resize(), aVC.resize()
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	}, aW3 = aW3 || [new x("⬅️ " + L(43), function() {
		u.a4a()
	}, bE.q9)], aSf = new xn(title, aW3), aVC = new tq(aSf.xt, sH), bD.sU.textAlign(aSf.xt.style, 1)
}

function aEY(data) {
	var aSf, aW4;

	function aWD(fa) {
		return fa < 60 ? 1 === fa ? fa + " Second" : fa + " Seconds" : fa < 3600 ? 1 === (fa = Math.floor(fa / 60)) ? fa + " Minute" : fa + " Minutes" : fa < 172800 ? 1 === (fa = Math.floor(fa / 3600)) ? fa + " Hour" : fa + " Hours" : (fa = Math
			.floor(fa / 172800)) + " Days"
	}

	function aW6(kB) {
		var fa = data.data.length;
		if (fa) {
			for (var uy, max = min = parseInt(data.data[0][0]), aC = 1; aC < fa; aC++) var aJ9 = parseInt(data.data[aC][0]),
				min = Math.min(aJ9, min),
				max = Math.max(aJ9, max);
			uy = kB < 0 ? min + kB : max + 1, u.v(8, u.a4f().a4g, new uh(21, {
				ux: data.ux,
				uy: uy,
				uz: uy + Math.abs(kB)
			}))
		}
	}
	if (this.show = function() {
			aSf.show(), this.resize()
		}, this.te = function() {
			aSf.te()
		}, this.resize = function() {
			aSf.resize(), aW4.resize()
		}, this.a5W = function(ek) {
			2 === ek && aSf.xu[0].sl()
		}, data.aEZ) {
		aSf = new xn(L(26), [new x("⬅️ " + L(43), function() {
			u.a4a()
		})]);
		var fd = {
				uO: [],
				uU: [L(391), L(392), L(393) + " ↗"],
				ub: [12, 50, 38]
			},
			a8Q = aE.data.a8Q;
		if (a8Q) {
			for (var fa = a8Q.length, uO = fd.uO, a1t = ah.a1t, aC = 0; aC < fa; aC++) uO.push([{
				g2: aC + 1 + ".",
				eb: 0
			}, {
				g2: a1t[aC],
				eb: 0
			}, {
				g2: bI.f1.a2h(a8Q[aC], 5),
				eb: 1,
				ue: a8Q[aC],
				uf: 0
			}]);
			aW4 = new uN(aSf.xt, fd, {
				uX: 1
			})
		} else aW4 = new uN(aSf.xt, fd)
	} else {
		var fd = data.data.length ? 0 : 1,
			aW3 = [new x("⬅️ " + L(43), function() {
				u.a4a()
			}), new x(L(379), function() {
				aW6(-10)
			}, fd, 0, 1), new x(L(380), function() {
				aW6(10)
			}, fd, 0, 1), new x(L(325), function() {
				u.v(11, 10, new aW7({
					ux: data.ux
				}))
			})],
			uU = [L(381), L(382), L(383), L(384), L(385), L(386), L(387), L(388), L(389), L(390), L(375), L(376), "Audit Log", L(377)];
		aSf = new xn(uU[data.ux], aW3), ! function() {
			var aC, fd = {
					uO: []
				},
				uO = fd.uO,
				aW9 = data.data,
				fa = aW9.length;
			fa && 0 === aW9[0][0] && 0 <= (eJ = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.ux]) && (u.z.v0[eJ] = aW9[0][1]);
			var oB = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.ux],
				a7X = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.ux],
				eJ = [
					[L(394), L(25) + " ↗", L(395)],
					[L(394), L(396), L(397), L(398) + " ↗"],
					[L(394), L(25) + " ↗", L(397)],
					[L(394), L(25) + " ↗", L(397)],
					[L(391), L(399), L(400) + " ↗", L(401) + " ↗", L(127)],
					[L(391), L(399), L(402) + " ↗", L(403) + " ↗", L(404)],
					[L(391), L(399), L(405) + " ↗", L(406) + " ↗", L(407)],
					[L(391), L(399), L(402) + " ↗", L(403) + " ↗", L(408)],
					[L(391), L(399), L(400) + " ↗", L(401) + " ↗", L(127)],
					[L(394), L(25) + " ↗", L(397)],
					[L(394), L(25) + " ↗", L(409)],
					[L(394), L(25) + " ↗", L(397)],
					[L(391), L(399), L(400) + " ↗", L(401) + " ↗", L(410)],
					[L(394), L(25) + " ↗", L(397)]
				];
			if (fd.uU = eJ[data.ux], fd.ub = [
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
				][data.ux], 0 === data.ux || 2 === data.ux || 3 === data.ux || 9 === data.ux || 10 === data.ux || 11 === data.ux || 13 === data.ux)
				for (aC = 0; aC < fa; aC++) uO.push([{
					g2: aW9[aC][0] + 1 + ".",
					eb: 0
				}, {
					g2: aW9[aC][1],
					eb: 1,
					ue: aW9[aC][4],
					uf: aW9[aC][3]
				}, {
					g2: (oB * aW9[aC][2]).toFixed(a7X),
					eb: 0
				}]);
			else if (12 === data.ux)
				for (aC = 0; aC < fa; aC++) {
					var aWC = aW9[aC][3];
					uO.push([{
						g2: "" + aW9[aC][0],
						eb: 0
					}, {
						g2: aWD(aW9[aC][4]),
						eb: 0
					}, {
						g2: aW9[aC][5],
						eb: 1,
						ue: aW9[aC][1],
						uf: 0
					}, {
						g2: aW9[aC][6],
						eb: 1,
						ue: aW9[aC][2],
						uf: 0
					}, {
						g2: br.eP(aWC, bI.f1.a2h(aW9[aC][1], 5)),
						eb: 0
					}])
				} else if (1 === data.ux)
					for (aC = 0; aC < fa; aC++) uO.push([{
						g2: aW9[aC][0] + 1 + ".",
						eb: 0
					}, {
						g2: aW9[aC][1],
						eb: 0
					}, {
						g2: (oB * aW9[aC][2]).toFixed(a7X),
						eb: 0
					}, {
						g2: aW9[aC][3],
						eb: 1,
						ue: aW9[aC][5],
						uf: aW9[aC][4]
					}]);
				else if (4 === data.ux || 5 === data.ux || 6 === data.ux || 7 === data.ux || 8 === data.ux)
				for (aC = 0; aC < fa; aC++) {
					var aWE = aW9[aC][5];
					4 === data.ux || 8 === data.ux ? "100%" === (aWE = (aWE % 64 * 100 / (aWE >> 6)).toFixed(0) + "%") && (4 === data.ux ? aWE += " (" + L(411) + ")" : aWE += " (" + L(412) + ")") : 5 === data.ux ? 32768 <= aWE && (aWE = -(aWE -
						32768)) : aWE = (oB * aWE).toFixed(a7X), uO.push([{
						g2: "" + aW9[aC][0],
						eb: 0
					}, {
						g2: aWD(aW9[aC][6]),
						eb: 0
					}, {
						g2: aW9[aC][7],
						eb: 1,
						ue: aW9[aC][1],
						uf: aW9[aC][2]
					}, {
						g2: aW9[aC][8],
						eb: 1,
						ue: aW9[aC][3],
						uf: aW9[aC][4]
					}, {
						g2: "" + aWE,
						eb: 0
					}])
				}
			aW4 = new uN(aSf.xt, fd)
		}()
	}
}

function aW7(a7M) {
	var aSf, aSg, sP;
	this.show = function() {
		aSf.show(), this.resize()
	}, this.te = function() {
		aSf.te()
	}, this.resize = function() {
		aSf.resize(), aSg.resize()
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	}, aSf = new xn(L(413), [new x("⬅️ " + L(43), function() {
		u.aSd(10)
	})]), aSg = new sN(aSf.xt, ((sP = []).push(function() {
		var aTA, wM = new s7,
			aUt = new tH(bm.buffer.data[132], 1, function() {
				aTA.button.click()
			}),
			aUu = new tH(bm.buffer.data[131], 1, function() {
				aUt.e.focus()
			});
		wM.sA(L(330)), wM.sL(aUu), aUu.e.style.marginBottom = "0.8em", wM.sA(L(331)), wM.sL(aUt);
		return aTA = new x(L(329), function() {
			uy = Math.floor(aUu.e.value), uz = Math.floor(aUt.e.value);
			var uz, uy = {
				a5z: Math.min(uy, uz),
				aRm: Math.max(uy, uz)
			};
			u.v(8, u.a8c(10).a4g, new uh(21, {
				ux: a7M.ux,
				uy: uy.a5z,
				uz: uy.aRm
			}))
		}, 0, 0, 1), wM.sL(new tr([aTA.button])), wM
	}()), sP.push(function() {
		var aTA, wM = new s7,
			aUt = new tH(bm.buffer.data[134], 1, function() {
				aTA.button.click()
			}),
			aUu = new tH(bm.buffer.data[133], 0, function() {
				aUt.e.focus()
			});
		return wM.sA(1 === a7M.ux ? L(414) : L(415)), wM.sL(aUu), aUu.e.style.marginBottom = "0.8em", wM.sA(L(416)), wM.sL(aUt), aTA = new x(L(329), function() {
			var aVL = aUu.e.value.slice(0, 20),
				aVM = Math.abs(Math.floor(aUt.e.value));
			u.v(8, u.a8c(10).a4g, new uh(22, {
				ux: a7M.ux,
				aVL: aVL,
				aVM: aVM
			}))
		}, 0, 0, 1), wM.sL(new tr([aTA.button])), wM
	}()), sP.push(function() {
		var aTA, wM = new s7,
			aUt = new tH(bm.buffer.data[152], 1, function() {
				aTA.button.click()
			}),
			aUu = new tH(bm.buffer.data[151], 0, function() {
				aUt.e.focus()
			});
		return wM.sA(L(417)), wM.sL(aUu), aUu.e.style.marginBottom = "0.8em", wM.sA(L(416)), wM.sL(aUt), aTA = new x(L(329), function() {
			var aVL = aUu.e.value.slice(0, 5),
				aVM = Math.abs(Math.floor(aUt.e.value));
			u.v(8, u.a8c(10).a4g, new uh(28, {
				ux: a7M.ux,
				aVL: aVL,
				aVM: aVM
			}))
		}, 0, 0, 1), wM.sL(new tr([aTA.button])), wM
	}()), sP))
}

function aSZ() {
	var aWI, aWJ, aWK, aWL, aWM, aWN, v9, vA, join, aWO = new Array(2);

	function aWQ(button) {
		button = new tP("", button, 1, 0);
		return button.tQ.style.right = "0.2em", button.tQ.style.textAlign = "left", button.tQ.style.overflow = "hidden", button.tQ.style.textOverflow = "ellipsis", button.tQ.translate = !1, button
	}

	function aIz() {
		var aI5;
		!bq.f7 || (aI5 = aWI.vK.tG.e.value.trim().slice(0, 255)).length < 1 || (aWI.vK.tG.e.value = "", bq.aGU.a3S(aI5))
	}

	function aWP(vW) {
		var aWT = bq.z.aGn;
		aWT !== vW && (aWR(aWT, 0), aWR(vW, 1), bq.z.aGn = vW, 0 === aWT && b1.aHV.aHW(1), 0 === vW ? (b1.aHV.aHW(0), aWI.vK.nL()) : 1 === vW && aWI.vL.nL(), aWI.vV(vW), aWI.resize())
	}

	function aWR(vW, color) {
		v9.p2[vW].so(color ? bE.pr : bE.qm), v9.p2[vW].button.classList.toggle("fx-selected", !!color)
	}
	this.aJH = function() {
			return aWI.vK
		}, this.aGU = function(ue) {
			aWP(0);
			var sB = aWI.vK.tG.e.value,
				ue = "@" + ue + " ";
			sB.length && !bD.tR.a6l(sB, " ") && (ue = " " + ue), aWI.vK.tG.e.value = sB += ue, aWI.vK.tG.e.focus()
		}, this.aIa = function() {
			aWI.vL.nL()
		}, this.aHX = function() {
			var sP = bq.sP,
				sP = sP.aHU() ? sP.wO ? bE.qS : bE.pr : bE.qm;
			vA.p2[1].so(sP), aWI.vN.nL()
		}, this.aIc = function() {
			var wM = bq.sP.sP[0];
			bV.a8(wM.fG, wM.mapSeed)
		}, this.aIb = function() {
			aWI.vT(bq.z.vU);
			var w9 = bq.wo.w9,
				aWU = w9.length,
				wM = bq.sP.sP[0],
				aWV = wM ? Math.min(bq.sP.wP(wM), aWU) : 0;
			aWJ.tQ.textContent = "" + aWU, aWK.tQ.textContent = "" + aWV, aWL.tQ.textContent = aP.aAk(), aWM.tQ.textContent = wM ? bq.sP.wS(wM.w7) + "   " + bV.wQ.wR[wM.fG] : "", aWN[0].tQ.textContent = bq.ll.aIA(w9, 0, aWU), aWN[1].tQ.textContent =
				wM && wM.w7 < 7 ? bq.ll.aIA(w9, 0, aWV) : "", aWO[1].tQ.textContent = "MP: " + bq.z.aIW[0] + "   SP: " + bq.z.aIW[1] + "   Lobby: " + aWU, this.aHX()
		}, this.aIf = function() {
			aWI.vK.nL()
		}, this.show = function() {
			bq.z.aGm++, aWI.show(), this.resize(), bq.message.show()
		}, this.te = function() {
			aWI.te(), bq.xE.te(), bq.wm.te(), bq.message.te()
		}, this.resize = function() {
			aWI.resize(), bq.message.resize()
		}, this.a5W = function(ek) {
			2 === ek ? bq.sP.wN ? bq.sP.select(0) : vA.p2[0].sl() : ek < 2 && bq.sP.click(0)
		}, v9 = new tu([new x(L(418), function() {
			return aWP(0), 2
		}), new x(L(26), function() {
			return aWP(1), 2
		}), new x(L(419), function() {
			return aWP(2), 2
		})], bE.qm, 0, [18, 36, 46]), vA = new tu([new x(L(28, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
				u.y(), bq.x8(), b1.z.a4o(3240), __fx.customLobby.setActive(false), u.v(5, 5)
			}),
			function() {
				u.y(), bq.x8(), b1.z.a4o(3240), __fx.customLobby.setActive(false), u.v(5, 5)
			})), new x(L(420), function() {
			return bq.sP.click(0), 2
		})], bE.qm, 0, [25, 75]), aWI = new v8(v9, vA, aIz, bq.xE.aJR, function(eJ, wv) {
			bq.f7 && bq.sP.click(eJ, wv)
		}), join = vA.p2[1].button, bD.sU.vj(join, null, function() {
			bq.f7 && bq.sP.click(0, 1)
		}), aWJ = new tP("0", v9.p2[1].button), aWK = new tP("0", vA.p2[1].button), aWL = aWQ(v9.p2[2].button), (aWM = aWQ(vA.p2[1].button)).tQ.style.right = "3em", (aWN = [new tP("", v9.p2[1].button, 1, 1), new tP("", vA.p2[1].button, 1, 1)])[0].tQ
		.style.bottom = "0em", aWN[1].tQ.style.bottom = "0em", aWN[0].tQ.translate = !1, aWN[1].tQ.translate = !1, aWR(bq.z.aGn, 1), (aWO = [new tP(L(323), aWI.vX(), 1, 0), new tP("", aWI.vX(), 1, 1)])[0].tQ.style.fontSize = "0.4em", aWO[1].tQ.style
		.fontSize = "0.4em"
}

function aSG() {
	var aSf, aSg, sP;
	this.show = function() {
		aSf.show(), this.resize()
	}, this.te = function() {
		aSf.te()
	}, this.resize = function() {
		aSf.resize(), aSg.resize()
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	}, aSf = new xn(L(421), [new x("⬅️ " + L(43), function() {
		u.v(7, u.a8c(7).a4g)
	}), new x(L(226), function() {
		bm.qy.qz(105, bJ.f1.zZ(aSg.sR[0].s8[0].e.value, 5)), bm.qy.qz(106, bJ.f1.zZ(aSg.sR[1].s8[0].e.value, 15)), u.v(8, u.a8c(7).a4g, new uh(18))
	})]), aSg = new sN(aSf.xt, ((sP = []).push(function() {
		var wM = new s7;
		return wM.sA(L(204)), wM.sL(new tH({
			value: "",
			eJ: -1
		})), wM
	}()), sP.push(function() {
		var wM = new s7,
			aTF = (wM.sA(L(207)), new tH({
				value: "",
				eJ: -1
			}));
		return aTF.e.type = "password", wM.sL(aTF), wM.sL(new tr([new x(L(208), function(e) {
			return e.textContent === L(208) ? (e.textContent = L(209), aTF.e.type = "text") : (e.textContent = L(208), aTF.e.type = "password"), !0
		}).button])), wM
	}()), sP.push(function() {
		var wM = new s7;
		return wM.sA(L(211)), wM.sC(L(422)), wM.sC(L(423)), wM.sC(L(424)), wM
	}()), sP))
}

function aSN() {
	var aSf, aW0, aW1, xo;

	function aW2(aC) {
		u.v(8, u.ug, new uh(21, {
			ux: aC,
			uy: 0,
			uz: 10
		}))
	}
	this.show = function() {
		aSf.show(), this.resize()
	}, this.te = function() {
		aSf.te()
	}, this.resize = function() {
		aSf.resize(), aW0.resize()
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	}, aW1 = [new x(L(386), function() {
		aW2(5)
	}, 0, 0, 1), new x(L(387), function() {
		aW2(6)
	}, 0, 0, 1), new x(L(388), function() {
		aW2(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aW2(12)
	}, 0, 0, 1)], xo = [new x("⬅️ " + L(43), function() {
		u.a4a()
	})], aSf = new xn(L(425), xo), aW0 = new t2(aW1, aSf.xt)
}

function aS7() {
	this.buffer = {}, this.v0 = new Array(8), this.aSL = null, this.aSI = null, this.uL = 0, this.uY = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a8L = function(aWY) {
		aWY && (aa.f3 = aWY), u.y(), aa.dk()
	}, __fx.customLobby.setJoinFunction(() => this.a8L(1)), this.aG5 = function() {
		u.v(0 === ab.a4b() ? 5 : 0)
	}, this.aUo = function() {
		if (1 === bm.buffer.data[130].value) u.v(8, u.a4f().a4g, new uh(24, {
			aUN: bm.buffer.data[125].value,
			uy: bm.buffer.data[128].value,
			uz: bm.buffer.data[129].value
		}));
		else {
			for (var h = (h = bm.buffer.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a4f().a4g, new uh(23, {
				aUN: bm.buffer.data[125].value,
				a49: h
			}))
		}
	}, this.aVt = function(a4g, target) {
		u.v(4, a4g, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aT3(
				"/privacy"), !1, [new x("⬅️ " + L(43), function() {
				u.v(a4g)
			}), new x("✅ Accept", function() {
				bm.qy.qz(140, 1), 0 === target ? u.v(2, a4g) : u.v(8, a4g, new uh(target))
			})]))
	}, this.aWZ = function() {
		for (var aC = 0; aC < 8; aC++) this.v0[aC] = bJ.zQ.zU(bK.rc(5));
		this.v0[1] = "[" + this.v0[1] + "]", 5 === u.ug && (u.a4f().aLQ.qz(this.v0), u.a4f().resize())
	}, this.aTB = function(g2, qw, aAA) {
		g2 = bD.gw.a7J(g2, 1, 1e6);
		qw = L(426, [qw]);
		return (qw += "<br>") + L(427, [__fx.utils.escapeHtml("" + aAA)]) + "<br>" + L(428, [g2 + "–" + (g2 + 2)]) + "<br>" + L(429, [g2])
	}
}

function aSQ() {
	var aTu, aTv, aWa, sP;

	function aTx() {
		b7.x8(), u.aSe()[19] = null, u.a4a()
	}

	function aWh() {
		aWk(), aWi()
	}

	function aWk() {
		aWa.s9.lastChild && u.removeChild(aWa.s9, aWa.s9.lastChild)
	}

	function aWi() {
		var aWl = bV.a8T(aE.data);
		aE.data.canvas = bV.aQ4(aWl, aE.data.mapSeed).zx, aWj()
	}

	function aWj() {
		var a6H = aE.data.canvas;
		a6H.style.width = "100%", aWa.s9.appendChild(a6H)
	}
	this.aMd = function(a6H) {
		aE.data.canvas && aWk(), aE.data.canvas = a6H, aWj()
	}, this.show = function() {
		aTu.show(), this.resize()
	}, this.te = function() {
		aTu.te()
	}, this.resize = function() {
		aTu.resize(), aTv.resize()
	}, this.a5W = function(ek) {
		2 === ek && aTu.xu[0].sl()
	}, aTu = new xn(L(351), [new x("⬅️ " + L(43), aTx)]), 2 === aE.data.mapType && b7.dk(), aTv = new sN(aTu.xt, (function(sP) {
		var wM = new s7;
		wM.sA(L(317)), wM.sI(new xj({
			oQ: [L(430), L(431), L(432)],
			value: aE.data.mapType
		}, function(eJ) {
			2 === (aE.data.mapType = eJ) ? (b7.dk(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.x8()), u.v(20)
		})), 2 <= aE.data.mapType && (wM.sL(new u2), wM.sL(new tm({
			value: aE.data.passableWater
		}, L(433), function(value) {
			aE.data.passableWater = value
		})), wM.sL(new tm({
			value: aE.data.passableMountains
		}, L(434), function(value) {
			aE.data.passableMountains = value
		})));
		sP.push(wM)
	}(sP = []), function(sP) {
		if (0 === aE.data.mapType) {
			for (var wM = new s7, oQ = (wM.sA(L(351)), []), aC = 0; aC < bV.wQ.aR0.length; aC++) oQ.push(bV.wQ.zo[bV.wQ.aR0[aC]].name);
			wM.sI(new xj({
				oQ: oQ,
				value: aE.data.mapProceduralIndex
			}, function(eJ) {
				aE.data.mapProceduralIndex = eJ, aWh()
			})), sP.push(wM)
		}
	}(sP), function(sP) {
		if (1 === aE.data.mapType) {
			for (var wM = new s7, oQ = (wM.sA(L(351)), []), aC = 0; aC < bV.wQ.aR1.length; aC++) oQ.push(bV.wQ.zo[bV.wQ.aR1[aC]].name);
			wM.sI(new xj({
				oQ: oQ,
				value: aE.data.mapRealisticIndex
			}, function(eJ) {
				aE.data.mapRealisticIndex = eJ, aWh()
			})), sP.push(wM)
		}
	}(sP), function(sP) {
		var wM;
		2 === aE.data.mapType && ((wM = new s7).sA(L(435)), wM.sL(new tH(bm.buffer.data[162], 1)), wM.sA(L(436), "0.8em"), wM.sL(new tr([new x(L(437), function() {
			return b7.aMW(), !0
		}).button])), sP.push(wM))
	}(sP), function(sP) {
		var wM, tG;
		2 === aE.data.mapType && ((wM = new s7).sA(L(438)), tG = new tH({
			eJ: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), wM.sL(tG), sP.push(wM))
	}(sP), function(sP) {
		var wM, tG, aTA;
		0 === aE.data.mapType && ((wM = new s7).sA("Seed"), tG = new tH({
			eJ: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aWh())
		}), aTA = new x(L(342), function(e) {
			var aPz = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aPz) return tG.e.value = aE.data.mapSeed = aPz, aWh(), !0
		}), wM.sL(tG), wM.sL(new tr([aTA.button])), sP.push(wM))
	}(sP), function(sP) {
		(aWa = new s7).sA(L(439)), 2 !== aE.data.mapType ? aWi() : aE.data.canvas && aWj();
		sP.push(aWa)
	}(sP), sP))
}

function w(title, sH, aWm, aW3) {
	var aSf, aVC;
	this.show = function() {
		aSf.show(), this.resize()
	}, this.te = function() {
		aSf.te()
	}, this.resize = function() {
		aSf.resize(), aVC.resize()
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	}, aW3 = aW3 || [new x("⬅️ " + L(43), function() {
		u.a4a()
	})], aSf = new xn(title, aW3), aVC = new tq(aSf.xt, sH), aWm && bD.sU.textAlign(aSf.xt.style, 1)
}

function aST() {
	var aTu, aTv, aTw, sP;

	function aTx() {
		aTz(), 2 === aE.data.playerNamesType && 1 === bD.sc.a5v(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aSe()[19] = null, u.a4a()
	}

	function aTz() {
		2 === aE.data.playerNamesType && bD.sc.a69(aTw.yI(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aTu.show(), this.resize()
	}, this.te = function() {
		aTu.te()
	}, this.resize = function() {
		aTu.resize(), aTv.resize()
	}, this.a5W = function(ek) {
		2 === ek && aTu.xu[0].sl()
	}, aTu = new xn(L(355), [new x("⬅️ " + L(43), aTx)]), aTv = new sN(aTu.xt, (function(sP) {
		var wM = new s7;
		wM.sA(L(317)), wM.sI(new xj({
			oQ: [L(356), L(357), L(320)],
			value: aE.data.playerNamesType
		}, function(eJ) {
			aTz(), aE.data.playerNamesType = eJ, u.v(23)
		})), wM.sL(new u2), wM.sL(new tm({
			value: aE.data.selectableName
		}, L(440), function(value) {
			aE.data.selectableName = value
		})), sP.push(wM)
	}(sP = []), function(sP) {
		var wM;
		2 === aE.data.playerNamesType && ((wM = new s7).sA("Data"), aTw = new yB(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fX || (aE.data.playerNamesData = new Array(aE.fX), aE.data.playerNamesData
			.fill("")), aTw.yH(bD.tR.a7k(aE.data.playerNamesData, 1, '"')), wM.sL(aTw), sP.push(wM))
	}(sP), sP))
}

function aSb() {
	var aTu, aTv, sP;

	function aWs() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.buffer.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var ft = 0; ft < 3; ft++) ft < h.length && (colors[aC][ft] = Number(h[ft]))
		}
		return colors
	}
	this.show = function() {
		aTu.show(), this.resize()
	}, this.te = function() {
		aTu.te()
	}, this.resize = function() {
		aTu.resize(), aTv.resize()
	}, this.a5W = function(ek) {
		2 === ek && aTu.xu[0].sl()
	}, aTu = new xn(L(441), [new x("⬅️ " + L(43), function() {
		u.a4a()
	})]), aTv = new sN(aTu.xt, ((sP = []).push(function() {
		var wM = new s7;
		return wM.sA(L(442)), wM.sG(b1.z.aT3("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", wM.sG("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), wM
	}()), sP.push(function() {
		var wM = new s7,
			em = (wM.sA(L(443)), bm.buffer.data[174].value),
			sD = wM.sC(em.length + " / 180"),
			aTd = (sD.style.textAlign = "center", new yB(0, 1, function(e) {
				var e = e.target.value,
					h3 = e.length;
				sD.textContent = h3 + " / 180", h3 <= 180 && bm.qy.qz(174, e)
			}));
		return aTd.e.rows = 6, aTd.e.style.fontSize = "1em", aTd.yH(em), wM.sL(aTd), wM
	}()), sP.push(function() {
		var wM = new s7;
		wM.sA(L(341));
		for (var aC = 0; aC < 11; aC++) {
			var ix = wM.sL(new tH(bm.buffer.data[163 + aC]));
			aC && (ix.e.style.marginTop = "0.6em")
		}
		return wM.sL(new tr([new x(L(444), function() {
			for (var data = bm.buffer.data, aC = 163; aC < 174; aC++) data[aC] && bm.buffer.yX(aC, data[aC].ya);
			u.a4a(), u.aSe()[31] = null, u.v(31)
		}).button])), wM
	}()), sP.push(function() {
		var wM = new s7;
		return wM.sA("Targeting"), wM.sG(L(445)), wM.sL(new tH(bm.buffer.data[175], 0, 0)), wM
	}()), sP.push(function() {
		var wM = new s7;
		return wM.sA(L(439)), wM.sL(new tr([new x(L(208), function() {
			(new el).show(bm.buffer.data[174].value, aWs(), -1)
		}).button])), wM
	}()), sP.push(function() {
		var wM = new s7,
			aWt = (wM.sA(L(446)), wM.sG(L(447)), new tH(bm.buffer.data[176], 1, 0)),
			aWu = (wM.sL(aWt), new x(L(448), function(e) {
				return aWv.button.textContent === L(196) && b1.z.eg(0) && (bD.sU.xg(e), aT9(), b1.aJf.aWw(bm.buffer.data[176].value, aWs(), bm.buffer.data[175].value, bm.buffer.data[174].value)), !0
			}, 1)),
			aT9 = function() {
				aWv.button.textContent = L(195), aWu.so(1), aWu.button.style.color = bE.pS
			},
			aWv = new x(L(195), function(e) {
				return e.textContent === L(195) ? (e.textContent = L(196), aWu.so(0), aWu.button.style.color = bE.qX) : aT9(), !0
			});
		return wM.sL(new tr([aWv.button, aWu.button])), wM
	}()), sP))
}

function aSc() {
	var aSf, aSg, sP;
	this.show = function() {
		aSf.show(), this.resize()
	}, this.te = function() {
		aSf.te()
	}, this.resize = function() {
		aSf.resize(), aSg.resize()
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	}, aSf = new xn("🔒 " + L(449), [new x("⬅️ " + L(43), function() {
		u.a4a()
	})]), aSg = new sN(aSf.xt, ((sP = []).push(function() {
		var wM = new s7,
			tG = (wM.sG(b1.z.aT3("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", wM.sA(L(204)), new tH({
				value: "",
				eJ: -1
			})),
			aTZ = (wM.sL(tG), wM.sA(L(275), "0.8em"), new tH({
				value: "",
				eJ: -1
			}, 0, 0)),
			aT8 = (aTZ.e.type = "email", aTZ.e.autocomplete = "email", aTZ.e.name = "email", aTZ.e.inputMode = "email", aTZ.e.spellcheck = !1, wM.sL(aTZ), new x(L(450), function(e) {
				return bD.sU.xg(e), b1.aJf.aTa({
					action: 4,
					sB: tG.e.value.trim() + aTZ.e.value.trim().substring(0, 63)
				}), !0
			}));
		return wM.sL(new tr([aT8.button])), wM
	}()), sP))
}

function aSE() {
	var aTu, yF;

	function aWx() {
		u.y();
		var sB = bC.aX1(yF.yI());
		(aE.a3O && 0 < sB.length && sB === bC.ro.a8H || bC.aNb.zj(sB)) && bC.aX2()
	}
	this.show = function(aWy) {
		this.aWz(aWy), aTu.show(), this.resize()
	}, this.aWz = function(aWy) {
		0 === aE.a3O ? aWy ? yF.yH(aWy) : aE.a84.length && yF.yH(aE.a84) : (aE.hj || (bC.ro.a8H = bC.a8I.a2s()), yF.yH(bC.aX0(bC.ro.a8H)))
	}, this.yH = function(sB) {
		yF.yH(sB)
	}, this.te = function() {
		aTu.te()
	}, this.resize = function() {
		aTu.resize(), yF.resize()
	}, this.a5W = function(ek) {
		2 === ek ? aTu.xu[0].sl() : aWx()
	}, aTu = new xn(L(451), [new x("⬅️ " + L(43), function() {
		u.aSd(1)
	}), new x(L(452), function() {
		yF.yJ()
	}), new x(L(453), function() {
		yF.yK()
	}), new x(L(454), function() {
		yF.clear()
	}), new x(L(455), function() {
		aWx()
	})]), yF = new yB(L(456)), aTu.xt.appendChild(yF.e)
}

function aSD() {
	var aSf, aSg, sP, wM;

	function aX3() {
		bA.aFr !== bm.buffer.data[12].value ? (bA.dk(), u.v(8, 1, new uh(30))) : u.v(1)
	}
	this.show = function() {
			aSf.show(), this.resize()
		}, this.te = function() {
			aSf.te()
		}, this.resize = function() {
			aSf.resize(), aSg.resize()
		}, this.a5W = function(ek) {
			2 === ek && aSf.xu[0].sl()
		}, aSf = new xn(L(457), [new x("⬅️ " + L(43), aX3), new x(L(458), function() {
			u.y(), bm.qy.z7(), u.v(2)
		})]), sP = [], (wM = new s7).sA(L(459)), wM.sC(L(460)), sP.push(wM),
		function(sP) {
			var wM = new s7,
				h = (wM.sA(L(445)), bA.data.aG8());
			wM.sI(new xj({
				oQ: h,
				value: bA.data.aGC(h)
			}, function(eJ) {
				return bm.qy.qz(12, h[eJ].split(":")[0]), !0
			})), sP.push(wM)
		}(sP),
		function(sP) {
			var wM = new s7,
				aX6 = (wM.sA(L(485)), []);
			wM.sL(new tr([new x(L(444), function(e) {
				ba.aX7();
				for (var aC = 0; aC < aX6.length; aC++) aX6[aC].e.value = ba.aFQ[aC];
				return bD.sU.xg(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aX8.length; aC++) {
				wM.sC(ba.aX8[aC]);
				for (var ft = 0; ft < 2; ft++) {
					var eJ = 2 * aC + ft,
						tG = new tH({
							value: ba.aFQ[eJ],
							eJ: -1
						});
					tG.e.aX9 = eJ, aX6.push(tG), tG.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aXA(e.target.aX9, code)
					}), ft && (tG.e.style.marginLeft = "4%"), tG.e.style.width = "48%", wM.sL(tG)
				}
			}
			sP.push(wM)
		}(sP), (wM = new s7).sA(L(461)), bm.buffer.data[1].oQ = [L(462), L(463), L(464), L(465)], wM.sI(new xj(bm.buffer.data[1])), sP.push(wM), (wM = new s7).sA(L(466)), bm.buffer.data[9].oQ = [L(463), L(467), L(468)], wM.sI(new xj(bm.buffer.data[
			9])), sP.push(wM), (wM = new s7).sA(L(469)), bm.buffer.data[11].oQ = [L(470), L(9), L(471)], wM.sI(new xj(bm.buffer.data[11])), sP.push(wM), (wM = new s7).sA(L(472)), wM.sL(new tm(bm.buffer.data[2])), sP.push(wM), (wM = new s7).sA(L(
		473)), wM.sL(new tm(bm.buffer.data[7])), sP.push(wM), (wM = new s7).sA(L(474)), wM.sL(new tm(bm.buffer.data[8])), sP.push(wM), (wM = new s7).sA(L(475)), wM.sL(new tH(bm.buffer.data[5])), sP.push(wM), (wM = new s7).sA(L(476)), wM.sL(new tm(bm
			.buffer.data[13], L(477))), wM.sL(new tm(bm.buffer.data[14], L(478))), sP.push(wM), (wM = new s7).sA(L(479)), wM.sI(new xj({
			oQ: [L(480), L(481), L(482)],
			value: aa.aKe
		}, function(aC) {
			aa.aKe = aC
		})), sP.push(wM), (wM = new s7).sA(L(483)), wM.sL(new tm(bm.buffer.data[15])), wM.sC(L(484)), wM.sL(new tH(bm.buffer.data[16], 1, 0, function(e) {
			e.target.value = bO.il(Math.floor(e.target.value), 0, 16)
		})), sP.push(wM), aSg = new sN(aSf.xt, sP)
}

function aSU() {
	var aTu, aTv, aTw, sP;

	function aTx() {
		aTz(), 2 !== aE.data.spawningType || bD.sc.a5v(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aSe()[19] = null, u.a4a()
	}

	function aTz() {
		2 === aE.data.spawningType && bD.sc.a67(aTw.yI(), aE.data.spawningData, bV.aMg - 1)
	}
	this.show = function() {
		aTu.show(), this.resize()
	}, this.te = function() {
		aTu.te()
	}, this.resize = function() {
		aTu.resize(), aTv.resize()
	}, this.a5W = function(ek) {
		2 === ek && aTu.xu[0].sl()
	}, aTu = new xn(L(486), [new x("⬅️ " + L(43), aTx)]), aTv = new sN(aTu.xt, (function(sP) {
		var wM = new s7,
			oQ = (wM.sA(L(317)), [L(342), L(354), L(320)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (oQ.splice(1, 1), 0 < value) && (value = 1);
		wM.sI(new xj({
			oQ: oQ,
			value: value
		}, function(eJ) {
			aTz(), aE.data.spawningType = eJ, 0 === aE.data.gameMode && 1 === eJ && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fX)), u.v(24)
		})), sP.push(wM)
	}(sP = []), function(sP) {
		var wM = new s7;
		wM.sA("My Spawn"), wM.sL(new tm({
			value: aE.data.selectableSpawn
		}, L(487), function(value) {
			aE.data.selectableSpawn = value
		})), sP.push(wM)
	}(sP), function(sP) {
		var wM = new s7,
			aXC = (wM.sA("Seed"), new tH({
				eJ: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		wM.sL(aXC), wM.sL(new tr([new x(L(342), function() {
			aXC.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), sP.push(wM)
	}(sP), function(sP) {
		var wM;
		2 === aE.data.spawningType && ((wM = new s7).sA("Data"), (aTw = new yB(0, 1, 0, 1)).yH(bD.tR.a7k(aE.data.spawningData, 2)), wM.sL(aTw), sP.push(wM))
	}(sP), sP))
}

function aSC() {
	var aSf, aW0, aW1, xo;

	function aXD(id) {
		0 !== a1.id || bm.buffer.data[140].value ? 0 === id ? u.v(8, 1, new uh(16)) : u.v(2) : u.z.aVt(u.ug, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aSf.show(), this.resize(), this.ef()
	}, this.te = function() {
		aSf.te()
	}, this.resize = function() {
		aSf.resize(), aW0.resize()
	}, this.ef = function() {
		8 === ab.a4b() && (2 <= bg.aXI ? aW1[2].sm === bE.pe && aW1[2].so(0) : aW1[2].sm !== bE.pe && aW1[2].so(bE.pe), aE.hj || aE.hk || !aN.s5(aE.fK) ? aW1[1].sm !== bE.pe && aW1[1].so(bE.pe) : aW1[1].sm === bE.pe && aW1[1].so(0), aE.hj || aE
			.hk || !ax.iQ(aE.fK) ? aW1[0].sm !== bE.pe && aW1[0].so(bE.pe) : aW1[0].sm === bE.pe && aW1[0].so(0))
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	}, aW1 = [new x(L(488), function() {
		aXD(0)
	}), new x(L(378), function() {
		u.v(16)
	}), new x(L(425), function() {
		u.v(17)
	}), new x(L(489), function() {
		u.z.aUo()
	}, 0, 0, 1), new x(L(451), function() {
		u.v(3, 1)
	}), new x(L(490), function() {
		u.v(18)
	}), new x(L(441), function() {
		u.v(31)
	}), new x(L(491), function() {
		u.z.a8L(2)
	}), new x(L(457), function() {
		aXD(1)
	}), new x("🔒 " + L(449), function() {
		u.v(32)
	}), new x(L(492), function() {
		var a6h, sY;
		(a6h = []).push(["Wiki", (sY = "https://territorial.io/") + "wiki/gold"]), a6h.push(["Team Games", sY + "log/team"]), a6h.push(["Battle Royale Games", sY + "log/br"]), a6h.push(["1v1 Games", sY + "log/1v1"]), a6h.push([
			"Zombie Games", sY + "log/zombies"
		]), a6h.push(["Transactions", sY + "log/transactions"]), a6h.push(["Changelog", sY + "changelog"]), 2 !== a1.id && a6h.push(["Android App", bN.aGO]), 1 !== a1.id && a6h.push(["iOS App", bN.a4X]), 0 === a1.id && a6h.push([
			"Patreon", bN.aTs
		]), a6h.push(["Terms", bN.aXJ]), a6h.push(["Privacy", bN.aXK]), u.v(4, 1, new w(L(492), bD.sU.a6g(a6h), !1, [new x("⬅️ " + L(43), function() {
			u.v(1)
		})]))
	}), new x(L(493), function() {
		u.v(4, 1, new w(L(493), m.e4 + "<br>" + b1.z.aT3("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(43),
				function() {
					u.v(1)
				})]))
	}), new x(L(494), function() {
		u.v(4, 1, new w(L(494), L(501) + "<br>" + L(502), !1, [new x("⬅️ " + L(43), function() {
			u.v(1)
		}), new x(L(503), function() {
			a1.a2.a4R(), u.v(1)
		})]))
	}), new x("👁️ " + L(495), function() {
		a1.a2.a4S(), u.v(4, 1, new w(L(504), L(505) + " " + b1.z.aT3("/privacy"), !1, [new x("⬅️ " + L(43), function() {
			u.v(1)
		})]))
	})], xo = [new x("⬅️ " + L(43), function() {
		u.z.aG5()
	})], 8 === ab.a4b() && (aW1.unshift(new x(L(365), function() {
		u.v(30)
	})), aW1.unshift(new x(L(498), function() {
		2 <= bg.aXI && (u.y(), bh.a5Z(), bi.ds = !0)
	}, 0, 1)), aW1.unshift(new x(L(499), function() {
		aE.hj || aE.hk || !aN.s5(aE.fK) || (bB.i1.rI(), u.y(), aN.hl && aN.a5Z())
	}, 0, 1)), aW1.unshift(new x(L(500), function() {
		aE.hj || aE.hk || !ax.iQ(aE.fK) || (bY.a8y(2), bB.i1.iM(), u.y(), aN.hl && aN.a5Z())
	}, 0, 1))), 1 === a1.id && 5 <= a1.e4 && aW1.push(new x(L(496), function() {
		a1.a2.a4T()
	})), aSf = new xn(L(497), xo), aW0 = new t2(aW1, aSf.xt)
}

function aSY() {
	var aTu, aTv, aTw, sP;

	function aTx() {
		aTz(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aSe()[19] = null, u.a4a()
	}

	function aTz() {
		2 === aE.data.sResourcesType && bD.sc.a67(aTw.yI(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aTu.show(), this.resize()
	}, this.te = function() {
		aTu.te()
	}, this.resize = function() {
		aTu.resize(), aTv.resize()
	}, this.a5W = function(ek) {
		2 === ek && aTu.xu[0].sl()
	}, aTu = new xn(L(360), [new x("⬅️ " + L(43), aTx)]), aTv = new sN(aTu.xt, (function(sP) {
		var wM = new s7;
		wM.sA(L(317)), wM.sI(new xj({
			oQ: [L(318), L(319), L(320)],
			value: aE.data.sResourcesType
		}, function(eJ) {
			aTz(), 2 !== eJ || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fX)), aE.data.sResourcesType = eJ, u.v(28)
		})), sP.push(wM)
	}(sP = []), function(sP) {
		var wM;
		1 === aE.data.sResourcesType && ((wM = new s7).sA("Value"), wM.sL(new tH({
			eJ: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.il(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), sP.push(wM))
	}(sP), function(sP) {
		var wM;
		2 === aE.data.sResourcesType && ((wM = new s7).sA("Data"), (aTw = new yB(0, 1, 0, 1)).yH(bD.tR.a7k(aE.data.sResourcesData, 2)), wM.sL(aTw), sP.push(wM))
	}(sP), sP))
}

function aSW() {
	var aTu, aTv, aTw, sP;

	function aTx() {
		aTz(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aSe()[19] = null, u.a4a()
	}

	function aTz() {
		2 === aE.data.tIncomeType && bD.sc.a67(aTw.yI(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aTu.show(), this.resize()
	}, this.te = function() {
		aTu.te()
	}, this.resize = function() {
		aTu.resize(), aTv.resize()
	}, this.a5W = function(ek) {
		2 === ek && aTu.xu[0].sl()
	}, aTu = new xn(L(358), [new x("⬅️ " + L(43), aTx)]), aTv = new sN(aTu.xt, (function(sP) {
		var wM = new s7;
		wM.sA(L(317)), wM.sI(new xj({
			oQ: [L(318), L(319), L(320)],
			value: aE.data.tIncomeType
		}, function(eJ) {
			aTz(), 2 !== eJ || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fX), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eJ, u.v(26)
		})), sP.push(wM)
	}(sP = []), function(sP) {
		var wM;
		1 === aE.data.tIncomeType && ((wM = new s7).sA("Value"), wM.sL(new tH({
			eJ: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.il(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), sP.push(wM))
	}(sP), function(sP) {
		var wM;
		2 === aE.data.tIncomeType && ((wM = new s7).sA("Data"), (aTw = new yB(0, 1, 0, 1)).yH(bD.tR.a7k(aE.data.tIncomeData, 4)), wM.sL(aTw), sP.push(wM))
	}(sP), sP))
}

function aSO() {
	var aSf, aSg, sP;
	this.show = function() {
		aSf.show(), this.resize()
	}, this.te = function() {
		aSf.te()
	}, this.resize = function() {
		aSf.resize(), aSg.resize()
	}, this.a5W = function(ek) {
		2 === ek && aSf.xu[0].sl()
	}, aSf = new xn(L(490), [new x("⬅️ " + L(43), function() {
		u.a4a()
	})]), aSg = new sN(aSf.xt, ((sP = []).push(function() {
		function aT9() {
			aWv.button.textContent = L(195), aXN.e.readOnly = !1, aXO.e.readOnly = !1, aT8.so(1), aT8.button.style.color = bE.pS
		}
		var wM = new s7,
			aXM = (wM.sG(b1.z.aT3("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", wM.sA(L(506)), new tH({
				value: bm.buffer.data[105].value,
				eJ: -1
			})),
			aXN = (aXM.e.readOnly = !0, wM.sL(aXM), wM.sA(L(403), "0.8em"), new tH(bm.buffer.data[148], 0, void 0, function(e) {
				aT7(bm.buffer.data[149].value, e.target.value)
			})),
			aXO = (wM.sL(aXN), wM.sA(L(407), "0.8em"), new tH(bm.buffer.data[149], 1, void 0, function(e) {
				aT7(e.target.value, bm.buffer.data[148].value)
			})),
			aWv = (wM.sL(aXO), new x(L(195), function(e) {
				return e.textContent === L(195) ? (e.textContent = L(196), aXN.e.readOnly = !0, aXO.e.readOnly = !0, aT8.so(0), aT8.button.style.color = bE.qX, bm.qy.qz(149, aXO.e.value), aT7(bm.buffer.data[149].value, bm
					.buffer.data[148].value)) : aT9(), !0
			})),
			aT8 = (wM.sL(new tr([aWv.button])), new x(L(14), function(e) {
				return aXN.e.readOnly && b1.z.eg(0) && (bD.sU.xg(e), aT9(), b1.aJf.aJg({
					action: 0,
					ue: bm.buffer.data[148].value,
					value: parseInt(bm.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			sD = wM.sC(),
			aT7 = (wM.sC(L(507)).style.fontWeight = "bold", function(g2, sB) {
				sD.innerHTML = u.z.aTB(g2, bm.buffer.data[105].value, sB)
			});
		return wM.sL(new tr([aT8.button])), aT7(bm.buffer.data[149].value, bm.buffer.data[148].value), wM
	}()), sP))
}

function c0() {
	"function" != typeof Math.log2 && (Math.log2 = function(fh) {
		return Math.log(fh) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fh) {
		return Math.log(fh) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fh) {
		return 0 < fh ? 1 : fh < 0 ? -1 : 0
	})
}

function cm() {
	var aD5, aXQ, aXR, aXS, aXP = !1;

	function aXT() {
		aXP = !0, aD5 = -1, aXQ = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aXQ[aC] = !1;
		var a0n = Math.floor(1 + .02 * i.min);
		aXR = new Array(4), (aXS = new Array(4))[1] = aXS[3] = aXR[0] = aXR[2] = 0, aXS[0] = aXR[3] = -a0n, aXR[1] = aXS[2] = a0n
	}

	function aXU() {
		if (-1 !== aD5)
			if (0 !== aE.a3O && aI.oH()) {
				for (var aXV = !1, aC = 3; 0 <= aC; aC--) aXQ[aC] && (aXV = !0, jF += aXR[aC], jG += aXS[aC], ag.a4y(aXR[aC], aXS[aC]), aT.aCl());
				aXV ? bi.ds = !0 : at.o7()
			} else at.o7()
	}
	this.a5U = function(eJ) {
		0 !== aE.a3O && aI.oH() && (aXP || aXT(), aXQ[eJ] = !0, -1 === aD5) && (aD5 = setInterval(aXU, 20), aXU())
	}, this.a5X = function(eJ) {
		if (0 !== aE.a3O && (aXP || aXT(), aXQ[eJ] = !1, -1 !== aD5)) {
			for (var aXV = !1, aC = 3; 0 <= aC; aC--) aXV = aXV || aXQ[aC];
			aXV || this.o7()
		}
	}, this.o7 = function() {
		if (aXP && -1 !== aD5) {
			for (var aC = 3; 0 <= aC; aC--) aXQ[aC] = !1;
			clearInterval(aD5), aD5 = -1
		}
	}
}

function cn() {
	this.z = new aXW, this.nG = new aXX, this.qw = new aXY, this.aHV = new aXZ, this.eh = new aXa, this.aJf = new aXb, this.rb = new aXc, this.aVI = new aXd, this.aAA = new aXe, this.aXf = new aXg, this.aXh = new aXi, this.aXj = new aXk, this.aXl =
		new aXm, this.dk = function() {
			this.z.dk()
		}
}

function aXW() {
	var aXo, aXp;
	this.aKi = 4, this.aXn = null, this.a4j = 0, this.f8 = 0;

	function aXy() {
		return 0 === aa.aKe ? m.e6 ? 1 : 0 : aa.aKe - 1
	}

	function aY1(oR, a4g, aY0) {
		aXp[oR].aXP = !0, aXu(oR), aXo[oR] = new aY4, aXo[oR].dk(oR, a4g, aY0)
	}

	function aY2(aC) {
		return aXp[aC].aXP && aXo[aC].aY2()
	}

	function aXu(oR) {
		aXp[oR].ea = bi.ea, aXp[oR].aXr = !1
	}
	this.dk = function() {
		this.aXn = new Array(this.aKi), this.aXn[0] = "territorial.io", this.aXn[1] = "1.territorial.io", this.aXn[2] = "4.territorial.io", this.aXn[3] = "5.territorial.io", aXo = new Array(this.aKi), aXp = new Array(this.aKi);
		for (var aC = this.aKi - 1; 0 <= aC; aC--) aXp[aC] = {
			aXP: !1,
			ea: 0,
			aXr: !1
		};
		this.aKj(0, 0, 0)
	}, this.aXs = function(aC) {
		return aXo[aC]
	}, this.ef = function() {
		for (var aC = this.aKi - 1; 0 <= aC; aC--) this.eg(aC) && bi.ea > aXp[aC].ea + 15e3 && (b1.qw.aXt(aC, aXp[aC].aXr), aXu(aC));
		!this.eg(0) && bi.ea > aXp[0].ea + 8e3 && (aXp[0].ea = bi.ea, this.aKj(0, 0, 0))
	}, this.aVF = function(id) {
		return this.aKj(0, id, 0) && this.aXv(0)
	}, this.aXw = function(aXx) {
		return aXx ? aa.aKf : aXy()
	}, this.a3p = function() {
		return aXy() ? "game.territorial.io" : "territorial.io"
	}, this.aT3 = function(aXz) {
		aXz = this.a3p() + aXz;
		return "<a href='https://" + aXz + "' target='_blank'>" + aXz + "</a>"
	}, this.aKj = function(oR, a4g, aXx) {
		aXx = this.aXw(aXx);
		if (aXp[oR].aXP) {
			if (aXo[oR].aY2()) return aXo[oR].aY3(a4g), aXo[oR].eg();
			aXo[oR].te()
		}
		return aY1(oR, a4g, aXx), !1
	}, this.aY5 = function(oR, a4g) {
		console.log("Connection to Server " + oR), b1.eh.aY6(oR)
	}, this.aXv = function(aC) {
		return this.eg(aC) && aXo[aC].aXv()
	}, this.aY7 = function(aC) {
		aXo[aC].aY7()
	}, this.eg = function(aC) {
		return aXp[aC].aXP && aXo[aC].eg()
	}, this.send = function(oR, aD) {
		0 !== oR && aXu(oR), aXo[oR].send(aD)
	}, __fx.customLobby.setSendFunction(this.send), this.a5F = function(oR) {
		8 === ab.a4b() && (aXp[oR].aXr = !0, b1.nG.aY8 = !0)
	}, this.close = function(oR, aY9) {
		aY2(oR) && aXo[oR].close(aY9)
	}, this.aYA = function(oR, aY9) {
		p.a4n(aY9), aY2(oR) && aXo[oR].close(aY9)
	}, this.a4o = function(aY9) {
		for (var aC = this.aKi - 1; 0 <= aC; aC--) this.close(aC, aY9)
	}, this.aYB = function(oR, aY9) {
		for (var aC = this.aKi - 1; 0 <= aC; aC--) aC !== oR && this.close(aC, aY9)
	}, this.a8J = function() {
		0 === this.a4j && (aE.lG || aE.hj) || this.close(this.a4j, 3246)
	}, this.aYC = function(oR, e) {
		aXo[oR].te(), p.a4Y(oR, e.code)
	}
}

function aXX() {
	this.aY8 = !1, this.ef = function() {
		bi.kt() % 250 != 249 || aE.hj || aE.hk || (b1.eh.aYD(+(this.aY8 && ah.nY[aE.fK]), am.lS + bQ.z.mm), this.aY8 = !1)
	}
}

function aXe() {
	this.aYF = function(oR, aD) {
		bK.dk(aD), 0 === bK.size ? b1.z.aYA(oR, 3205) : __fx.customLobby.isCustomMessage(aD) || ((0 === bK.rc(1) ? function(oR) {
			var aYJ = bK.rc(6);
			0 === aYJ ? function(oR) {
					if (0 === oR && 8 !== ab.a4b()) {
						u.z.aWZ();
						for (var aYa = bK.rc(12), aYb = bK.rc(6), h = new Array(aYa), aC = 0; aC < aYa; aC++) h[aC] = bK.rc(aYb);
						aU.aDB(h)
					}
				}(oR) : 2 === aYJ ? b1.aXf.aYL(oR) : 3 === aYJ || 4 === aYJ ? ay.dk() : 5 === aYJ ? b1.aXh.aYM() : 9 === aYJ ? b1.aXh.aYN(oR) : 10 === aYJ ? b1.aXj.aYO() : 11 === aYJ ? b1.aXh.aYP(oR) : 12 === aYJ ? b1.aXj.aYQ() :
				13 === aYJ ? b1.aXl.aYR() : 14 === aYJ ? b1.aXl.aYS() : 15 === aYJ ? b1.aXh.aYT() : 16 === aYJ ? b1.aXf.aYU(oR) : 17 === aYJ ? b1.aXf.aYV(oR) : 19 === aYJ ? b1.aXf.aYW(oR) : 20 === aYJ ? b1.aXh.aYX(oR) : 21 !== aYJ &&
				22 !== aYJ && (23 === aYJ ? b1.aXh.aYY(oR) : 24 === aYJ && b1.aXf.aYZ(oR))
		} : function(oR) {
			if (8 !== ab.a4b() && !ay.aLB()) return;
			if (oR !== b1.z.a4j) b1.z.aYA(oR, 3244);
			else if (0 === bK.rc(1)) bi.a3Y.aYc(bK.aD);
			else {
				var aC, oR = bK.rc(2);
				if (0 === oR) {
					var rD, qw = bK.rc(9);
					0 !== ah.nY[qw] && 0 !== ah.nY[aE.fK] && (rD = bK.rc(10), aO.rC(qw, aE.fK, rD), ag.s3(qw, 1, rD))
				} else if (1 === oR) ! function() {
					var qw = bK.rc(9);
					0 !== ah.nY[qw] && 0 !== ah.nY[aE.fK] && b6.aPZ(0, [qw], !0) && aO.rU(qw, 1)
				}();
				else if (2 === oR) ! function() {
					var qw = bK.rc(9),
						target = bK.rc(9);
					0 !== ah.nY[qw] && 0 !== ah.nY[target] && 0 !== ah.nY[aE.fK] && b6.aPZ(1, [qw], !0) && (ag.s3(qw, 3, 96), ag.s3(target, 4, 96), aO.aAG(qw, target))
				}();
				else if (m.aA && !m.aB) {
					var fa = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fa = Math.min(bB.qs.re.length, 540), aC = 0; aC < fa; aC++) bG.aYi(32, bB.qs.re[aC]);
					b1.z.send(b1.z.a4j, bG.aD)
				}
			}
		})(oR), bi.aYI())
	}
}

function aXk() {
	this.aYO = function() {
		bm.z.yx(), bm.qy.qz(105, bI.f1.ui(bI.f1.uj(5))), bm.qy.qz(106, bI.f1.ui(bI.f1.uj(15))), bm.qy.qz(109, 0), bm.qy.qz(108, bm.buffer.data[109].value), bm.qy.qz(111, bm.buffer.data[109].value + 1), bm.qy.qz(107, 0), bm.qy.qz(110, "")
	}, this.aYQ = function() {
		var data;
		bK.size < bG.aYj(29) ? b1.z.aYA(0, 3254) : ((data = {
			uf: bK.rc(30),
			zB: bK.rc(16),
			zC: bK.rc(30),
			zD: bK.rc(30),
			zE: bK.rc(30),
			zF: bK.aYk(32),
			username: bJ.zS.zj(5),
			zG: bJ.zS.zj(3),
			zH: bJ.zS.zj(3),
			zI: bK.aYk(32),
			zJ: bK.aYk(32),
			zK: bK.rc(30),
			zL: bK.aYk(32),
			zM: bK.aYk(32),
			zN: bK.aYk(32),
			zO: bK.aYk(32),
			aTL: bK.aYk(32),
			aTM: bK.aYk(30),
			aTk: bK.aYk(32),
			aTl: bJ.zS.zj(3),
			aTe: bK.aYk(2),
			aTg: bK.aYk(10),
			aTc: bJ.zS.zj(8),
			aTf: bK.aYk(5),
			aT5: bK.rc(30),
			aTI: bK.rc(30),
			a3v: bK.aYk(32),
			aTQ: bK.rc(3),
			aTP: bK.rc(8),
			aTJ: bK.rc(30),
			aTK: bK.aYk(32),
			aTO: bK.rc(1),
			aTY: bJ.zS.zj(6),
			aTR: bK.rc(1),
			aTS: bK.rc(1),
			aTT: bK.rc(1),
			aTD: bK.rc(30),
			aTm: bK.rc(1),
			aTn: bK.rc(1)
		}).aTm && (data.aTo = bK.aYk(32), data.aTp = bK.rc(30), data.aTq = bK.rc(30), data.aTr = bK.rc(1)), 8 === u.ug && (25 === u.a4f().aVE ? (data.aSh = !0, u.z.aSL = data, u.a4f().aG4(25, !1)) : (data.aSh = !1, bm.qy.qz(160, +(data
			.aTm && data.aTr)), data.ue = bm.buffer.data[105].value, u.z.aSI = data, bm.qy.zA(data), u.a4f().aG4(16, !0))))
	}
}

function aXm() {
	this.aYR = function() {
		var aC;
		if (bK.size < bG.aYj(23)) b1.z.aYA(0, 3259);
		else {
			var ux = bK.rc(6),
				fa = bK.rc(10),
				data = [];
			if (9 === ux || 10 === ux || 11 === ux || 13 === ux) {
				for (aC = 0; aC < fa; aC++) data.push([bK.rc(30), bJ.zS.zj(5), bK.aYk(32), 0, bK.rc(30)]);
				8 === u.ug && u.a4f().aG4(21, !0, {
					ux: ux,
					data: data
				})
			} else if (12 === ux) {
				for (aC = 0; aC < fa; aC++) data.push([bK.rc(20), bK.rc(30), bK.rc(30), bK.aYk(32), bK.rc(30), bJ.zS.zj(5), bJ.zS.zj(5)]);
				8 === u.ug && u.a4f().aG4(21, !0, {
					ux: ux,
					data: data
				})
			} else {
				var iY = bK.rc(16);
				if (bK.aYl(39 + 16 * iY + fa * (0 === ux ? 111 : 1 === ux ? 101 : 2 === ux || 3 === ux ? 127 : 212))) {
					if (0 === ux)
						for (aC = 0; aC < fa; aC++) data.push([bK.rc(30), bJ.zQ.zU(bK.rc(5)), bK.rc(16), bK.rc(30), bK.rc(30)]);
					else if (1 === ux)
						for (aC = 0; aC < fa; aC++) data.push([bK.rc(16), bJ.zQ.zU(bK.rc(3)), bK.rc(16), bJ.zQ.zU(bK.rc(5)), bK.rc(31), bK.rc(30)]);
					else if (2 === ux || 3 === ux)
						for (aC = 0; aC < fa; aC++) data.push([bK.rc(30), bJ.zQ.zU(bK.rc(5)), bK.aYk(32), bK.rc(30), bK.rc(30)]);
					else
						for (aC = 0; aC < fa; aC++) data.push([bK.rc(20), bK.rc(30), bK.rc(30), bK.rc(30), bK.rc(30), bK.aYk(32), bK.rc(30), bJ.zQ.zU(bK.rc(5)), bJ.zQ.zU(bK.rc(5))]);
					8 === u.ug && u.a4f().aG4(21, !0, {
						ux: ux,
						data: data
					})
				} else b1.z.aYA(0, 3260)
			}
		}
	}, this.aYS = function() {
		if (bK.size < bG.aYj(29)) b1.z.aYA(0, 3265);
		else {
			var aYm = bK.rc(4),
				aYn = bK.rc(7),
				aYo = bK.rc(11);
			if (bK.aYl(29 + 16 * aYn + 16 * aYo + 11 * aYm)) {
				for (var data = [], aC = 0; aC < aYm; aC++) {
					for (var a4A = bJ.zQ.zU(bK.rc(3)), aYp = bK.rc(8), aUO = [], ft = 0; ft < aYp; ft++) aUO.push(bK.rc(16));
					data.push({
						name: "[" + a4A + "]",
						aUO: aUO
					})
				}
				8 === u.ug && u.a4f().aG4(23, !0, data)
			} else b1.z.aYA(0, 3266)
		}
	}
}

function aXg() {
	function aYt() {
		var id = bK.rc(3);
		return 0 === id ? {
			id: id,
			ue: bK.rc(30),
			aK6: aYu(),
			s: bq.aGU.aJB(bJ.zS.zj(8))
		} : 1 === id ? {
			id: id,
			ue: bK.rc(30),
			aK6: aYu(),
			aI3: bK.rc(3),
			value: bK.rc(30),
			target: bK.rc(30),
			aK7: aYu()
		} : 2 === id ? {
			id: id,
			ue: bK.rc(30),
			aK6: aYu(),
			aI3: bK.rc(3)
		} : 3 === id ? {
			id: id,
			ue: bK.rc(30),
			aK6: aYu(),
			aI3: bK.rc(3),
			value: bK.rc(4),
			target: bK.rc(30),
			aK7: aYu()
		} : 4 === id ? {
			id: id,
			ue: bK.rc(30),
			aK6: aYu(),
			aI3: bK.rc(3),
			target: bK.rc(30),
			aK7: aYu(),
			aI4: bK.rc(1)
		} : 5 === id ? {
			id: id,
			aI3: bK.rc(6)
		} : 6 === id ? {
			id: id,
			value: bK.rc(17)
		} : null
	}

	function aYu() {
		return bK.rc(1) ? bJ.zS.zj(5) : null
	}
	this.aYL = function(oR) {
		if (oR !== b1.z.f8) b1.z.close(oR, 3239);
		else if (6 !== ab.a4b()) b1.z.close(oR, 3271);
		else {
			bq.dk(), bq.z.vU = bK.rc(10), bq.sP.aHP();
			for (var playerCount = bK.rc(16), ft = 0; ft < playerCount; ft++) bq.wo.aGo(bK.rc(30), bJ.zS.zj(5), bK.rc(4), bK.rc(30), bK.rc(7), bK.rc(16), bK.rc(18), bK.rc(11), bK.rc(12), bK.rc(6), bK.rc(13), bK.rc(1));
			u.v(29), bq.z.aIX(!0)
		}
	}, this.aYU = function(oR) {
		if (oR !== b1.z.f8) b1.z.close(oR, 3239);
		else if (bq.f7) {
			bq.z.aIW[0] = bK.rc(20), bq.z.aIW[1] = bK.rc(20);
			for (var aYq = bK.rc(20), ft = 0; ft < aYq; ft++) {
				var id = bK.rc(3);
				0 === id ? bq.wo.aGo(bK.rc(30), bJ.zS.zj(5), 0, 1234566, 127, 0, bK.rc(18), 0, bK.rc(12), 0, 0, 0) : 1 === id ? bq.wo.aH8(bK.rc(16), bK.rc(16), bK.rc(13), bK.rc(1)) : 2 === id ? bq.wo.aH4(bK.rc(16), bJ.zS.zj(5)) : 3 === id ? bq.wo
					.aH6(bK.rc(16)) : 4 === id ? bq.wo.aGx(bK.rc(16), bK.rc(4), bK.rc(30), bK.rc(7), bK.rc(16), bK.rc(11), bK.rc(18)) : 5 === id ? bq.wo.aGz(bK.rc(16), bK.rc(1)) : 6 === id && bq.wo.aGy(bK.rc(16), bK.rc(6))
			}
			bq.z.vU = bK.rc(10);
			for (var aYr = bK.rc(10), aC = 0; aC < aYr; aC++) {
				var ws = bK.rc(13),
					aWU = bK.rc(10),
					aHC = bK.rc(10),
					aGW = bq.z.aGW;
				if (aGW.aHC = aHC, aGW.a4j = bK.rc(10), aGW.aHr = bK.rc(10), aGW.fG = bK.rc(6), aGW.mapSeed = bK.rc(14), aGW.w7 = bK.rc(4), aGW.wY = bK.rc(1), aGW.spawningSeed = bK.rc(14), aGW.a3q = bK.rc(30) - 1, aGW.aHD = null, 8 === aGW.w7) {
					aGW.aHD = new Array(aHC);
					for (ft = 0; ft < aHC; ft++) aGW.aHD[ft] = bK.rc(9)
				}
				ws = bq.wo.aH9(ws);
				if (bq.aGW.dt(ws, aWU, aHC)) return;
				bq.wo.aHF(ws, aWU, aHC, aGW.aHD)
			}
			var aYs = bK.rc(13);
			aYs && bq.wo.aHI(aYs), bq.sP.aHP(), bq.z.aHf()
		} else b1.z.close(oR, 3251)
	}, this.aYZ = function(oR) {
		oR === b1.z.f8 && bq.f7 && bq.sP.aHY(bK.rc(13), bK.rc(1))
	}, this.aYV = function(oR) {
		if (oR !== b1.z.f8) b1.z.close(oR, 3272);
		else if (bq.f7) {
			for (var tU = bq.z.tU, x7 = (bq.z.tV = bK.rc(20), bK.rc(6)), aC = 0; aC < x7; aC++) {
				var aK4 = aYt();
				bq.td.aK3(aK4), bq.td.aKB(aK4), tU.push(aK4)
			}
			bq.z.aIe()
		} else b1.z.close(oR, 3273)
	}, this.aYW = function(oR) {
		var aK4;
		oR !== b1.z.f8 ? b1.z.close(oR, 3276) : bq.f7 ? (aK4 = aYt(), bq.td.aK3(aK4), bq.message.aHR(aK4)) : b1.z.close(oR, 3277)
	}
}

function aXi() {
	this.aYM = function() {
		for (var id = bK.rc(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.rc(8), bK.rc(8), bK.rc(8)]);
		var em = bJ.zS.zj(8);
		bX.eT.ej({
			id: id,
			colors: colors,
			em: em
		})
	}, this.aYX = function(oR) {
		var aYv = bK.rc(3),
			fd = bK.rc(5),
			fd = bl.aYw.aYx(fd, bK.rc(30), bK.rc(30), bK.rc(30));
		b1.eh.aYy(oR, fd, aYv, 0)
	}, this.aYN = function(oR) {
		this.aYX(oR), bm.qy.qz(183, bI.f1.ui(bI.f1.uj(15))), 0 === oR && 0 === bm.buffer.data[105].value.length ? b1.eh.ei(0) : b1.aJf.aYz(oR), 4 === b1.z.aXs(oR).aZ0() ? 6 === ab.a4b() && b1.aHV.aKk(oR) : 5 !== b1.z.aXs(oR).aZ0() || 8 !== ab
			.a4b() && 10 !== ab.a4b() || b1.qw.aL8()
	}, this.aYP = function(oR) {
		var id = bK.rc(6);
		1 === id ? (bm.qy.qz(160, bK.rc(30)), b1.z.aY7(oR), aU.aD7 || b1.eh.ei(1), bA.aG0(), 8 === u.ug && u.a4f().aVR()) : 21 === id ? 8 === u.ug && u.a4f().aG4(17) : 22 === id && (bm.qy.qz(106, bm.buffer.data[110].value), bm.qy.qz(110, ""),
			8 === u.ug) && u.a4f().aG4(15)
	}, this.aYT = function() {
		var fa = bK.rc(16),
			aZ1 = bK.rc(16);
		if (bK.aYl(55 + 10 * fa + 16 * aZ1)) {
			for (var h = [], aC = 0; aC < fa; aC++) h.push(bJ.zQ.zU(bK.rc(10)));
			bA.aG3(h)
		} else b1.z.aYA(0, 3270)
	}, this.aYY = function(oR) {
		for (var aYv = bK.rc(3), fd = bK.rc(5), aYv = {
				aYv: aYv,
				t0: bl.aYw.aYx(fd, bK.rc(30), bK.rc(30), bK.rc(30))
			}, fd = bK.aYk(32), aZ2 = [], aC = 0; aC < 17; aC++) aZ2.push(new Uint8Array(bK.rc(16)));
		for (aC = 0; aC < 17; aC++)
			for (var h = aZ2[aC], fa = h.length, iT = 0; iT < fa; iT++) h[iT] = bK.aYk(8);
		bw.show(aZ2, fd, oR, aYv)
	}
}

function aXY() {
	this.aXt = function(oR, aXr) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, aXr ? 1 : 0), bG.a9(3, 0 === aE.a3O ? bq.f7 ? 6 : 0 : aE.hj ? 1 : aE.lG ? 7 : aE.lE < 7 ? 2 : 8 === aE.lE ? 4 : 9 === aE.lE ? 5 : 3), b1.z.send(oR, bG.aD)
	}, this.aL8 = function() {
		bG.a8(59), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.f8), bG.a9(10, ay.aHr), bG.a9(10, ay.aL1), bG.a9(10, m.e8), bG.a9(14, m.dx), b1.z.send(b1.z.a4j, bG.aD)
	}, this.qx = function(fM) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fM), b1.z.send(b1.z.a4j, bG.aD)
	}, this.r0 = function(jE, k5) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, jE), bG.a9(10, k5), b1.z.send(b1.z.a4j, bG.aD)
	}, this.r4 = function(jE, r2) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, jE), bG.a9(9, r2), b1.z.send(b1.z.a4j, bG.aD)
	}, this.r6 = function(jE, r5) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, jE), bG.a9(27, r5), b1.z.send(b1.z.a4j, bG.aD)
	}, this.r8 = function(jE, nw) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, jE), bG.a9(16, nw), b1.z.send(b1.z.a4j, bG.aD)
	}, this.rB = function(k5) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, k5), b1.z.send(b1.z.a4j, bG.aD)
	}, this.rF = function(eJ) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eJ), b1.z.send(b1.z.a4j, bG.aD)
	}, this.rH = function(rG) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, rG), b1.z.send(b1.z.a4j, bG.aD)
	}, this.rJ = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a4j, bG.aD)
	}, this.rK = function(jE, fM, k5) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, jE), bG.a9(10, k5), bG.a9(22, fM), b1.z.send(b1.z.a4j, bG.aD)
	}, this.rS = function(aZ3, aZ4) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, aZ4), bG.a9(10, aZ3), b1.z.send(b1.z.a4j, bG.aD)
	}, this.rV = function(aAA) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, aAA), b1.z.send(b1.z.a4j, bG.aD)
	}, this.rZ = function(aZ5, target) {
		var aC, fa = aZ5.length;
		for (bG.a8(14 + 9 * fa), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fa; aC++) bG.a9(9, aZ5[aC]);
		b1.z.send(b1.z.a4j, bG.aD)
	}
}

function aXb() {
	this.aZ6 = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.eh.aZ7(), b1.z.send(0, bG.aD)
	}, this.aYz = function(oR) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.f1.zg(bm.buffer.data[105].value, 5), bJ.f1.zg(bm.buffer.data[106].value, 15), b1.z.send(oR, bG.aD)
	}, this.aVS = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.f1.zg(bm.buffer.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aTa = function(a7M) {
		var fa = a7M.sB.length;
		bG.a8(21 + 16 * fa), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a7M.action), bG.a9(8, fa), bI.zQ.zf(a7M.sB), b1.z.send(0, bG.aD)
	}, this.aWw = function(zF, colors, aZ9, em) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(zF, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var ft = 0; ft < 3; ft++) bH.a9(8, colors[aC][ft]);
		zF = bA.data.aG7(aZ9.trim());
		bH.a9(8, -1 === zF ? 255 : zF), bI.zS.a2s(em.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.aZA())
	}, this.aTE = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.f1.zg(data.ue, 5), b1.z.send(0, bG.aD)
	}, this.aJg = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.f1.zg(data.ue, 5), bG.aYi(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aXc() {
	this.ra = function() {
		for (var fa = aE.kw, a3D = bU.result.a3D, lr = a3D.length, a43 = (bG.a8(17 + 16 * fa + 33 * lr), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, lr), bG.a9(1, +(2 === aE.a3L)), bG.a9(1, aE.a3h % 2), ah.a43), aC = 0; aC < fa; aC++) bG.a9(16, a43[
		aC]);
		for (var hO = ah.hO, aC = 0; aC < lr; aC++) {
			var h8 = a3D[aC];
			bG.a9(9, h8), bG.a9(24, hO[h8])
		}
		b1.z.send(b1.z.a4j, bG.aD)
	}
}

function aXd() {
	this.aVJ = function(ux, uy, uz) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, ux), bG.a9(1, +(uy < 0)), bG.a9(1, +(uz < 0)), bG.a9(30, Math.abs(uy)), bG.a9(30, Math.abs(uz)), b1.z.send(0, bG.aD)
	}, this.aVK = function(ux, aVL, aVM) {
		bG.a8(18 + 16 * aVL.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, ux), b1.eh.aZB(aVL), bG.a9(30, aVM), b1.z.send(0, bG.aD)
	}, this.aVP = function(ux, aVL, aVM) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, ux), bJ.f1.zg(aVL, 5), bG.a9(30, aVM), b1.z.send(0, bG.aD)
	}, this.aVN = function(aUN, a49) {
		for (var fa = a49.length, iY = 0, aC = 0; aC < fa; aC++) iY += a49[aC].length;
		for (bG.a8(21 + 3 * fa + 16 * iY), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aUN), bG.a9(4, fa), bG.a9(7, iY), aC = 0; aC < fa; aC++) bG.a9(3, a49[aC].length), bI.zQ.zf(a49[aC]);
		b1.z.send(0, bG.aD)
	}, this.aVO = function(aUN, uy, uz) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aUN), bG.a9(1, +(uy < 0)), bG.a9(1, +(uz < 0)), bG.a9(20, Math.abs(uy)), bG.a9(20, Math.abs(uz)), b1.z.send(0, bG.aD)
	}
}

function aXZ() {
	this.aKk = function(oR) {
		var username = bm.buffer.data[122].value.slice(0, 20),
			username = (bG.a8(22 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.e8), b1.eh.aZB(username), bD.color.a6M(bm.z.z4()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.f8 = oR, b1.z.send(oR, bG.aD)
	}, this.aHW = function(aZC, a7M) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, aZC), 2 === aZC ? bH.a9(30, a7M) : 4 === aZC ? (bH.a9(13, a7M.ws), bH.a9(1, a7M.wv)) : 3 === aZC ? bI.zS.a2s(a7M, 8, bH) : 5 === aZC ? (bH.a9(3, a7M.id), bH.a9(3, a7M.value), bH.a9(30, a7M
			.ue)) : 6 === aZC && (bH.a9(2, a7M.w7), bH.a9(30, a7M.ue)), b1.z.send(b1.z.f8, bH.aZA())
	}
}

function aXa() {
	this.aY6 = function(oR) {
		var aZJ;
		bG.a8(55 + bl.aZD.rc()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.dx), bG.a9(4, a1.id), bG.a9(7, a1.e4), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), aZJ = bA.aG6(), bG.a9(8, aZJ[0]), bG.a9(8, aZJ[1]), bl.aZD
		.a2s(), b1.z.send(oR, bG.aD)
	}, this.aYy = function(oR, t0, aYv, aZF) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, aYv), bG.a9(30, t0), bG.a9(30, aZF), b1.z.send(oR, bG.aD)
	}, this.f9 = function(f4) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 6), bI.zS.a2s(f4, 16, bH), b1.z.send(b1.z.f8, bH.aZA())
	}, this.ei = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.xN = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aG2 = function(id, sB) {
		var fa = Math.min(sB.length, 63);
		bG.a8(19 + 16 * fa), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fa), bI.zQ.zf(sB), b1.z.send(0, bG.aD)
	}, this.aZG = function(aWY, sM) {
		bG.a8(7 + 26 * sM.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < sM.length; aC++) bG.a9(16, sM[aC][0]), bG.a9(10, sM[aC][1]);
		b1.z.send(aWY, bG.aD)
	}, this.aYD = function(aZH, aZI) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, aZH), bG.a9(12, aZI), b1.z.send(b1.z.a4j, bG.aD)
	}, this.aZB = function(username) {
		bG.a9(5, username.length), bI.zQ.zf(username)
	}, this.pC = function(pD, pE, oR, pow) {
		bG.a8(88), bG.a9(1, 0), bG.a9(6, 8), bG.a9(3, pow.aYv), bG.a9(30, pow.t0), bG.aYi(32, pE), bG.a9(16, pD), b1.z.send(oR, bG.aD)
	}
}

function aY4() {
	var aZK, aZL, b, aZM = ["wss://", "/s50/", "/s51/", "/s52/"],
		aZN = 0;

	function aY5() {
		b1.z.aY5(aZK, aZL)
	}

	function aZQ(e) {
		b1.aAA.aYF(aZK, new Uint8Array(e.data))
	}

	function aZR() {}

	function aYC(e) {
		b1.z.aYC(aZK, e)
	}
	this.dk = function(eJ, a4g, aY0) {
		aZK = eJ, aZL = a4g,
			function(aY0) {
				aY0 = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : m.dy ? "ws://localhost:" + (7130 + aZK) + "/" : aY0 ? aZM[0] + "game.territorial.io/x0" + aZK + "/" : aZM[0] + b1.z.aXn[aZK] + aZM[1 + m.dw];
				(b = new WebSocket(aY0)).binaryType = "arraybuffer", b.onopen = aY5, b.onmessage = aZQ, b.onclose = aYC, b.onerror = aZR
			}(aY0)
	}, this.aZP = function() {
		return b.readyState === b.CONNECTING
	}, this.eg = function() {
		return b.readyState === b.OPEN
	}, this.aXv = function() {
		return aZN
	}, this.aY7 = function() {
		aZN = 1
	}, this.aY2 = function() {
		return this.aZP() || this.eg()
	}, this.aY3 = function(a4g) {
		aZL = a4g
	}, this.aZ0 = function() {
		return aZL
	}, this.send = function(aD) {
		this.eg() && b.send(aD)
	}, this.close = function(aY9) {
		this.aY2() && (this.te(), b.close(aY9))
	}, this.te = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dQ() {
	var gap, aZS = !1,
		w8 = 0,
		j = 0,
		ul = 0,
		canvas = null,
		oy = null,
		a5w = null;

	function aZW() {
		for (var aC = aE.a0c; 0 <= aC; aC--) a5w[aC] = 0;
		for (aC = am.lS - 1; 0 <= aC; aC--) a5w[bj.fY[am.lX[aC]]] += ah.hO[am.lX[aC]];
		aZS = !0
	}

	function aZU() {
		for (var aZb, aZZ = 0, fa = 0, ek = Math.floor(j / 2), eI = Math.floor(ul / 2), aZa = 1.5 * Math.PI, aC = aE.a0c; 0 <= aC; aC--) fa += a5w[aC], 0 === a5w[aC] && aZZ++;
		if (aZS = !1, oy.clearRect(0, 0, j, j), 0 < fa)
			if (aZZ === aE.a0c) {
				for (aC = aE.a0c; 0 <= aC; aC--)
					if (0 < a5w[aC]) {
						! function(aC, ek, eI) {
							oy.fillStyle = bj.aZf[bj.lJ[aC]], oy.beginPath(), oy.arc(ek, ek, eI, 0, 2 * Math.PI), oy.fill()
						}(aC, ek, eI);
						break
					}!
				function(ek) {
					var fontSize = ek / 3;
					oy.font = bD.sU.uE(1, fontSize), oy.fillStyle = bE.pS, oy.fillText("100%", ek, ek + .1 * fontSize)
				}(ek)
			} else {
				for (aC = 0; aC <= aE.a0c; aC++) 0 < a5w[aC] && (aZb = aZa + 2 * Math.PI * a5w[aC] / fa, aZe(oy, bj.aZf[bj.lJ[aC]], ek, eI, aZa, aZb), function(ek, eI, aZa, aZb) {
					var g2 = (aZb - aZa) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eI * Math.min(g2, .37);
					fontSize < 8 || (aZa = (aZa + aZb) / 2, aZb = (__fx.settings.detailedTeamPercentage ? (100 * g2).toFixed(2) : Math.floor(100 * g2 + .5)) + "%", eI *= .525 - Math.max(.6 * (g2 - .7), 0), oy.font = bD.sU.uE(1, fontSize), oy
						.fillStyle = bE.pS, oy.fillText(aZb, ek + Math.cos(aZa) * eI, ek + Math.cos(aZa + 1.5 * Math.PI) * eI))
				}(ek, eI, aZa, aZb), 0 !== aC && aZh(oy, ek, eI, aZa), aZa = aZb);
				aZh(oy, ek, eI, 1.5 * Math.PI)
			} aZi(oy, ek, eI)
	}

	function aZe(ie, color, ek, eI, aZa, aZb) {
		ie.fillStyle = color, ie.beginPath(), ie.arc(ek, ek, eI, aZa, aZb), ie.lineTo(ek, ek), ie.fill()
	}

	function aZh(ie, ek, eI, aZj) {
		ie.beginPath(), ie.moveTo(ek, ek), ie.lineTo(ek + Math.cos(aZj) * eI, ek + Math.cos(aZj + 1.5 * Math.PI) * eI), ie.stroke()
	}

	function aZi(ie, ek, eI) {
		ie.beginPath(), ie.arc(ek, ek, eI, 0, 2 * Math.PI), ie.stroke()
	}
	this.dk = function() {
		if (aE.iV) {
			w8 = 0, a5w = new Uint32Array(aE.a0c + 1);
			for (var aC = aE.a0c; 0 <= aC; aC--) a5w[aC] = 0;
			for (aC = am.lS - 1; 0 <= aC; aC--) a5w[bj.fY[am.lX[aC]]] += 1;
			this.resize()
		} else a5w = oy = canvas = null
	}, this.aBf = function() {
		return j
	}, this.resize = function() {
		aE.iV && (j = Math.floor(.95 * (a1.a2.im() && !aE.o2 ? .18 * i.min : .13 * i.io)), j = (j *= 1 + (.5 + .2 * a1.a2.im()) * aE.o2) + j % 2, gap = Math.max(1, .015 * j), ul = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (oy = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, oy.strokeStyle = bE.pS, bD.sU.textAlign(oy, 1), bD.sU.textBaseline(oy, 1), aZU())
	}, this.lT = function(aZV) {
		aZV && aZW();
		var eb, aZV = this.lV();
		return bj.lJ[aZV] || (aZV = function() {
			for (var lU = -1, aC = aE.a0c; 1 <= aC; aC--)(-1 === lU || a5w[aC] > a5w[lU]) && (lU = aC);
			return lU
		}(), eb = ah.hO[mX[0]], -1 !== aZV && a5w[aZV] > eb) ? a5w[aZV] : eb
	}, this.a4M = function() {
		return w8 = 31, this.ef(), this.lV()
	}, this.lV = function() {
		for (var lU = 0, aC = aE.a0c; 0 < aC; aC--) a5w[aC] > a5w[lU] && (lU = aC);
		return lU
	}, this.kx = function(aZY) {
		for (var h3 = 0, lX = am.lX, fY = bj.fY, fa = am.lS, gE = bR.gE, aC = 0; aC < fa; aC++) {
			var h8 = lX[aC];
			fY[h8] === aZY && (gE[h3++] = h8)
		}
		bR.g5[0] = h3
	}, this.lW = function(aZY) {
		for (var h3 = 0, lX = am.lX, fY = bj.fY, fa = am.lS, gE = bR.gE, aC = 0; aC < fa; aC++) {
			var h8 = lX[aC];
			fY[h8] !== aZY && (gE[h3++] = h8)
		}
		bR.g5[0] = h3
	}, this.a6t = function() {
		for (var h3 = 0, aC = aE.a0c; 0 <= aC; aC--) h3 += 0 < a5w[aC];
		return h3
	}, this.ef = function() {
		aE.iV && 32 <= ++w8 && (w8 = 0, aZW())
	}, this.nL = function() {
		aE.iV && aZS && aZU()
	}, this.wc = function(ie, h3, size) {
		var ek = size >> 1,
			eI = Math.floor(.4 * size),
			aZa = 1.5 * Math.PI;
		ie.clearRect(0, 0, size, size), ie.lineWidth = .042 * size, ie.strokeStyle = bE.pS;
		for (var aC = 0; aC < h3; aC++) {
			var aZb = aZa + 2 * Math.PI / h3;
			aZe(ie, bj.aZf[aC + 1], ek, eI, aZa, aZb), 0 !== aC && aZh(ie, ek, eI, aZa), aZa = aZb
		}
		aZh(ie, ek, eI, 1.5 * Math.PI), aZi(ie, ek, eI)
	}, this.y2 = function() {
		aE.iV && (aE.o2 ? y3.drawImage(canvas, bf.gap, bf.gap) : y3.drawImage(canvas, bf.gap, aBe + 2 * bf.gap))
	}
}

function dg() {
	function aZp(fh, fa, fj, a32, aCw, g0) {
		if (!(fj < 1 || aCw < fj))
			for (var aC = 0; aC <= fa; aC++) {
				var fE = bP.jI(fh, fj);
				if (a32(fE)) return fE >> 2;
				fh += g0
			}
		return -1
	}

	function aZt(fj, fa, fh, a32, aZn, g0) {
		if (!(fh < 1 || aZn < fh)) {
			fa = Math.max(fa, 0);
			for (var aC = 0; aC <= fa; aC++) {
				var fE = bP.jI(fh, fj);
				if (a32(fE)) return fE >> 2;
				fj += g0
			}
		}
		return -1
	}

	function aZx(j5, j6, aZk) {
		return -1 !== j6 && (-1 === j5 || bP.j7(j6, aZk) < bP.j7(j5, aZk)) ? j6 : j5
	}
	this.i0 = function(aZk) {
		return this.a3S(aZk, function(fE) {
			return ad.fV(fE)
		})
	}, this.i6 = function(aZk) {
		return this.a3S(aZk, function(fE) {
			return ad.aLr(fE, aE.fK)
		})
	}, this.a3S = function(aZk, a32) {
		return function(aZk, aZl, a32) {
			for (var hq = bP.fi(aZk), hs = bP.fk(aZk), aZn = bV.fl - 2, aCw = bV.fm - 2, aZo = -1, fd = 0; fd < aZl; fd++) {
				var aCv = Math.max(hq - fd, 1),
					aQV = Math.max(hs - fd, 1),
					a1D = Math.min(hq + fd, aZn),
					a1C = Math.min(hs + fd, aCw),
					j5 = aZp(hq, a1D - hq, hs - fd, a32, aCw, 1),
					j6 = aZp(hq - 1, hq - aCv - 1, hs - fd, a32, aCw, -1),
					a1D = aZp(hq, a1D - hq, hs + fd, a32, aCw, 1),
					aCv = aZp(hq - 1, hq - aCv - 1, hs + fd, a32, aCw, -1),
					aZs = aZt(hs, a1C - hs - 1, hq - fd, a32, aZn, 1),
					aZu = aZt(hs - 1, hs - aQV - 2, hq - fd, a32, aZn, -1),
					a1C = aZt(hs, a1C - hs - 1, hq + fd, a32, aZn, 1),
					aQV = aZt(hs - 1, hs - aQV - 2, hq + fd, a32, aZn, -1);
				if (aZo = aZx(aZo, j5, aZk), aZo = aZx(aZo, j6, aZk), aZo = aZx(aZo, a1D, aZk), aZo = aZx(aZo, aCv, aZk), aZo = aZx(aZo, aZs, aZk), aZo = aZx(aZo, aZu, aZk), aZo = aZx(aZo, a1C, aZk), 0 <= (aZo = aZx(aZo, aQV, aZk)) && fd *
					fd >= bP.j7(aZo, aZk)) return aZo
			}
			return -1
		}(aZk, bP.ik(), a32)
	}
}

function d9() {
	function aZy(key, size) {
		var aWy;
		return "undefined" == typeof URLSearchParams || (aWy = window.location.search, "string" != typeof(aWy = new URLSearchParams(aWy).get(key))) || aWy.length < 1 ? null : bJ.f1.zZ(aWy, size)
	}
	this.dt = function() {
		if (0 !== a1.id) return !1;
		var a3q = aZy("r", 6);
		if (! function() {
				var value = aZy("account", 5);
				if (!value && !(value = aZy("a", 5))) return void bL.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (bL.clear(), u.v(8, u.ug, new uh(1e3, {
					action: 0,
					ue: value,
					uf: 0
				})), !0) : (bL.clear(), !1)
			}()) {
			if (!this.clear()) return !1;
			if (!a3q) return !1;
			this.aTt("r", a3q), u.v(3, 0, L(508)), bC.aa0(a3q)
		}
		return !0
	}, this.clear = function() {
		var a4W = new URL(window.location.href);
		a4W.search = "";
		try {
			return history.replaceState(null, "", a4W.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aTt = function(key, value) {
		if (0 === a1.id) try {
			var a4W = new URL(window.location.href),
				h8 = a4W.searchParams;
			h8.set(key, value), a4W.search = h8.toString(), history.replaceState(null, "", a4W.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function co() {
	var aa2, h;
	this.dk = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.g1(32768 * aC, 100);
		this.a88(0)
	}, this.value = function(h8) {
		return h[h8]
	}, this.aQ7 = function() {
		return bO.g1(aa2 - 1, 2)
	}, this.a88 = function(aPz) {
		aa2 = 2 * aPz % 32768 + 1
	}, this.random = function() {
		return aa2 = 167 * aa2 % 32768
	}, this.kD = function(nT) {
		return bO.g1(nT * this.random(), 32768)
	}, this.ko = function(h8) {
		return 0 !== h8 && this.random() < this.value(h8)
	}, this.jZ = function(ft, fu) {
		return ft + this.kD(fu - ft)
	}
}

function d5() {
	function aaA(sB) {
		3 === u.ug && u.a4f().yH(sB)
	}
	this.ro = new aa3, this.a8I = new aa4, this.aNb = new aa5, this.dk = function() {
		aE.hj || this.ro.dk()
	}, this.ef = function() {
		aE.hj || (this.ro.ef(), 3 !== u.ug) || bi.kt() % 15 != 5 && 2 !== aE.a3O || u.a4f().aWz()
	}, __fx.replay.restartReplay = () => this.aX2(), this.aX2 = function() {
		var aa7 = 0 !== aE.a3O,
			aa8 = aE.a83;
		aa7 || ab.aKu(), aE.a81.a8S(), aE.data.canvas = null, b1.z.close(b1.z.a4j, 3257), b1.z.a4j = 0, aE.data.isReplay = 1, aE.a85(), aa7 && (aE.a83 = aa8)
	}, this.aX1 = function(sB) {
		var aC = sB.indexOf("=");
		return 0 <= aC ? sB.substring(aC + 1) : sB
	}, __fx.replayHistory.load = saved => {
		saved = bC.aX1(saved), bC.aNb.zj(saved) && bC.aX2()
	}, this.aa0 = function(id) {
		var aa9 = new XMLHttpRequest;
		aa9.open("GET", "https://" + b1.z.a3p() + "/log/?r=" + id), aa9.onload = function() {
			var sB = 200 === aa9.status ? aa9.responseText : "";
			aaA(sB.length ? sB : L(509))
		}, aa9.onerror = function() {
			aaA(L(510))
		}, aa9.send()
	}, this.aX0 = function(sB) {
		return sB
	}
}

function aa3() {
	this.aaB = null, this.aaC = null, this.aaD = null, this.aaE = null, this.aaF = null, this.aaG = null, this.a8H = "";
	var aaH = 0;
	this.dk = function() {
		this.aaB = [], this.aaC = [], this.aaD = [], this.aaE = [], this.aaF = [0], this.aaG = [0], aaH = 0, this.a8H = ""
	}, this.rp = function(id, gJ, gL, gN) {
		aE.hj || 2 === aE.a3O || (0 === this.aaF[aaH] && (this.aaG[aaH] ? (this.aaF.push(1), this.aaG.push(0), aaH++) : this.aaF[aaH] = 1), this.aaB.push(id), this.aaC.push(gJ), this.aaD.push(void 0 === gL ? 0 : gL), this.aaE.push(void 0 === gN ?
			0 : gN), this.aaG[aaH]++)
	}, this.ef = function() {
		0 === this.aaF[aaH] ? this.aaG[aaH]++ : (this.aaF.push(0), this.aaG.push(0), aaH++)
	}
}

function aa5() {
	var aaI = 0;

	function aaM(sB, id) {
		console.log(sB), aaI || (id ? 1 === id ? aO.a9b = L(512) + ": " + sB : u.v(4, 3, new w(L(513), sB, 1)) : u.v(4, 3, new w("⚠️ " + L(511), sB, 1)))
	}
	this.zj = function(sB, aaJ) {
		var ix, sM;
		return aaI = aaJ, bJ.f1.zc(bJ.f1.za(bJ.f1.zY(sB))), aO.a9b = "", !! function() {
			if (bK.size < 10) aaM("File Too Small");
			else {
				var aaO = bK.rc(12),
					s = (aaO !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, aaM(s = (s += "   Found: " + aaO) + ("   Compatible at " + b1.z.a3p() + "/" + aaO), 1)), bK.rc(12)),
					aaP = bK.rc(31);
				if (aaP !== bK.size) aaM("Size Error: Stated Size " + aaP + " Actual Size " + bK.size);
				else if (function(k, aaO) {
						for (var h8 = bK.aD, fa = bK.size, aZI = aaO, aC = 3; aC < fa; aC++) aZI = aZI + h8[aC] & 4095;
						return aZI === k || (aaM("Hash Error: " + aZI + " " + k + " " + fa), !1)
					}(s, aaO)) return 1
			}
			return
		}() && (ix = bK, (sM = aE.data = new a80).mapType = ix.rc(2), sM.mapProceduralIndex = ix.rc(8), sM.mapRealisticIndex = ix.rc(8), sM.mapSeed = ix.rc(14), sM.mapName = ix.aaR(5), 2 === sM.mapType && ix.aaS(), sM.passableWater = ix.rc(
			1), sM.passableMountains = ix.rc(1), sM.playerCount = ix.rc(10), sM.humanCount = ix.rc(10), sM.selectedPlayer = ix.rc(9), sM.gameMode = ix.rc(1), sM.playerMode = ix.rc(2), sM.battleRoyaleMode = ix.rc(2), sM.numberTeams = ix.rc(4),
			sM.isZombieMode = ix.rc(1), sM.isContest = ix.rc(1), sM.isReplay = ix.rc(1), sM.elo = ix.aaT(2, 14, 2), sM.colorsType = ix.rc(1), sM.colorsPersonalized = ix.rc(1), sM.colorsData = ix.aaT(10, 18, 512), sM.selectableColor = ix.rc(
			1), sM.teamPlayerCount = ix.aaT(4, 10, 9), sM.neutralBots = ix.rc(1), sM.botDifficultyType = ix.rc(2), sM.botDifficultyValue = ix.rc(4), sM.botDifficultyTeam = ix.aaT(4, 4, 9), sM.botDifficultyData = ix.aaT(10, 4, 512), sM
			.spawningType = ix.rc(2), sM.spawningSeed = ix.rc(14), sM.spawningData = ix.aaT(11, 12, 1024), sM.selectableSpawn = ix.rc(1), sM.playerNamesType = ix.rc(2), sM.playerNamesData = ix.aaU(10, 5, 512), sM.selectableName = ix.rc(1), sM
			.aIncomeType = ix.rc(2), sM.aIncomeValue = ix.rc(8), sM.aIncomeData = ix.aaT(10, 8, 512), sM.tIncomeType = ix.rc(2), sM.tIncomeValue = ix.rc(8), sM.tIncomeData = ix.aaT(10, 8, 512), sM.iIncomeType = ix.rc(2), sM.iIncomeValue = ix
			.rc(8), sM.iIncomeData = ix.aaT(10, 8, 512), sM.sResourcesType = ix.rc(2), sM.sResourcesValue = ix.rc(11), sM.sResourcesData = ix.aaT(10, 11, 512), sM.a8Q = ix.aaT(10, 30, 0), !! function() {
				var ix = bK,
					zk = ix.rc(5),
					aaV = ix.rc(30),
					aaW = ix.rc(30);
				if (aaV + aaW > 8 * ix.size) return void aaM("Corrupted File");
				return function(fa) {
						var aaZ = new Uint8Array(fa),
							aaa = new Uint16Array(fa),
							aab = new Uint32Array(fa),
							aac = new Uint32Array(fa);
						bC.ro.aaB = aaZ, bC.ro.aaC = aaa, bC.ro.aaD = aab, bC.ro.aaE = aac;
						for (var aC = 0; aC < fa; aC++) {
							var id = bK.rc(4);
							aaZ[aC] = id, aaa[aC] = bK.rc(9), 0 === id ? aab[aC] = bK.rc(22) : 1 === id ? (aab[aC] = bK.rc(10), aac[aC] = bK.rc(10)) : 2 === id ? (aab[aC] = bK.rc(10), aac[aC] = bK.rc(9)) : 3 === id ? (aab[aC] = bK.rc(10),
								aac[aC] = bK.rc(27)) : 4 === id ? (aab[aC] = bK.rc(10), aac[aC] = bK.rc(16)) : 5 === id || 6 === id ? aab[aC] = bK.rc(10) : 7 === id ? aab[aC] = bK.rc(1) : 10 === id && (aab[aC] = bK.rc(20), aac[aC] = bK
								.rc(22))
						}
					}(aaV),
					function(fa, zk) {
						var aaF = new Uint8Array(fa),
							aaG = new Array(fa);
						aaG.fill(0), bC.ro.aaF = aaF, bC.ro.aaG = aaG;
						for (var aC = 0; aC < fa; aC++) aaF[aC] = bK.rc(1), aaG[aC] = bK.rc(zk)
					}(aaW, zk), 1
			}()) && (bK.eJ < 8 * bK.size - 13 || bK.eJ > 8 * bK.size ? (aaM("Out Of Bounds Error: " + bK.eJ + " " + 8 * bK.size), !1) : (bC.ro.a8H = sB, 2 !== aE.data.mapType || (aaM("Load base64 image...", 2), aaJ)))
	}, this.aNc = function(aMe, aaN) {
		var a6H = document.createElement("canvas"),
			ie = a6H.getContext("2d");
		if (a6H.width = aMe.width, a6H.height = aMe.height, ie.drawImage(aMe, 0, 0), aE.data.canvas = a6H, aaI || aaN) return aE.a3O ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aX2()
	}
}

function aa4() {
	this.a2s = function() {
		var zk = function() {
				for (var aaG = bC.ro.aaG, fa = aaG.length, max = 0, aC = 0; aC < fa; aC++) max = Math.max(max, aaG[aC]);
				return zq(Math.max(max, 1))
			}(),
			j = (sM = aE.data, (j = bH).dk(), j.a9(12, m.rVersion), j.eJ += 43, j.a9(2, sM.mapType), j.a9(8, sM.mapProceduralIndex), j.a9(8, sM.mapRealisticIndex), j.a9(14, sM.mapSeed), j.aaj(sM.mapName, 5), 2 === sM.mapType && j.aak(sM.canvas),
				j.a9(1, sM.passableWater), j.a9(1, sM.passableMountains), j.a9(10, sM.playerCount), j.a9(10, sM.humanCount), j.a9(9, sM.selectedPlayer), j.a9(1, sM.gameMode), j.a9(2, sM.playerMode), j.a9(2, sM.battleRoyaleMode), j.a9(4, sM
					.numberTeams), j.a9(1, sM.isZombieMode), j.a9(1, sM.isContest), j.a9(1, sM.isReplay), j.dr(sM.elo, 2, 14), j.a9(1, sM.colorsType), j.a9(1, sM.colorsPersonalized), j.dr(sM.colorsData, 10, 18), j.a9(1, sM.selectableColor), j.dr(
					sM.teamPlayerCount, 4, 10), j.a9(1, sM.neutralBots), j.a9(2, sM.botDifficultyType), j.a9(4, sM.botDifficultyValue), j.dr(sM.botDifficultyTeam, 4, 4), j.dr(sM.botDifficultyData, 10, 4), j.a9(2, sM.spawningType), j.a9(14, sM
					.spawningSeed), j.dr(sM.spawningData, 11, 12), j.a9(1, sM.selectableSpawn), j.a9(2, sM.playerNamesType), j.aal(sM.playerNamesData, 10, 5), j.a9(1, sM.selectableName), j.a9(2, sM.aIncomeType), j.a9(8, sM.aIncomeValue), j.dr(sM
					.aIncomeData, 10, 8), j.a9(2, sM.tIncomeType), j.a9(8, sM.tIncomeValue), j.dr(sM.tIncomeData, 10, 8), j.a9(2, sM.iIncomeType), j.a9(8, sM.iIncomeValue), j.dr(sM.iIncomeData, 10, 8), j.a9(2, sM.sResourcesType), j.a9(11, sM
					.sResourcesValue), j.dr(sM.sResourcesData, 10, 11), j.dr(sM.a8Q, 10, 30), ! function(zk) {
					var j = bH,
						aaB = bC.ro.aaB,
						gJ = bC.ro.aaC,
						gL = bC.ro.aaD,
						gN = bC.ro.aaE,
						fa = aaB.length;
					j.a9(5, zk), j.a9(30, fa), j.a9(30, bC.ro.aaG.length);
					for (var aC = 0; aC < fa; aC++) {
						var ek = aaB[aC];
						j.a9(4, ek), j.a9(9, gJ[aC]), 0 === ek ? j.a9(22, gL[aC]) : 1 === ek ? (j.a9(10, gL[aC]), j.a9(10, gN[aC])) : 2 === ek ? (j.a9(10, gL[aC]), j.a9(9, gN[aC])) : 3 === ek ? (j.a9(10, gL[aC]), j.a9(27, gN[aC])) : 4 === ek ? (j
							.a9(10, gL[aC]), j.a9(16, gN[aC])) : 5 === ek || 6 === ek ? j.a9(10, gL[aC]) : 7 === ek ? j.a9(1, gL[aC]) : 10 === ek && (j.a9(20, gL[aC]), j.a9(22, gN[aC]))
					}
				}(zk), ! function(zk) {
					for (var j = bH, aaF = bC.ro.aaF, aaG = bC.ro.aaG, fa = aaF.length, aC = 0; aC < fa; aC++) j.a9(1, aaF[aC]), j.a9(zk, aaG[aC])
				}(zk), bH.eJ),
			sM = bO.g1(j - 1, 6) + 1,
			zk = (bG.aYj(6 * sM) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eJ = 24, j.a9(31, j.h.length), j.eJ = 12, j.a9(12, function() {
					for (var h = bH.h, fa = h.length, aZI = m.rVersion, aC = 3; aC < fa; aC++) aZI = aZI + h[aC] & 4095;
					return aZI
				}())
			}(), bK.dk(bH.h), bI.f1.ui(bI.f1.uj(sM)));
		return bK.x8(), bH.dk(), zk
	}
}

function ct() {
	var ek, by = !1,
		aan = !1,
		aao = -1e4,
		aap = -1,
		aaq = 0;

	function resize(aau) {
		ek = 0, ac.v6() && (aas(aau) || by) && (by = !1, bf.resize(), bZ.aFc.resize(), aZ.dk(), bb.dk(), aa.resize(), aU.resize(), aP.resize(), bw.resize(), u.resize(), 1 <= aE.a3O ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(),
			aO.resize(), aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aCl()) : (ab.aKw(), ab.aKx()), bi.ds = !0)
	}

	function aar(g2) {
		return g2 && 128 < g2 ? Math.floor(g2) : 128
	}

	function aas(aau) {
		var j, k, aaw, ul, aC9;
		if (!(0 < i.uM)) return ul = aar(document.documentElement.clientWidth), aC9 = aar(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = ul, k = aC9, aaw = 0 !== a1.id || j < k ?
			700 : 1200, aaw = Math.min(aaw / ((j + k) / 2), 1), aaw = 0 === bm.buffer.data[1].value ? 2 * aaw / 3 : Math.min(aaw + (bm.buffer.data[1].value - 1) * (1 - aaw) / 2, 1), i.l = (window.devicePixelRatio || 1) * aaw, __fx.hoveringTooltip
			.canvasPixelScale = i.l, aau && !aan ? (aan = !0, u.removeChild(document.body, a4x)) : aan && (aan = !1, document.body.appendChild(a4x)), j = Math.floor(.5 + ul * i.l), k = Math.floor(.5 + aC9 * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aFE(j, k), i.max = a9r(j, k), i.io = bO.g1(j + k, 2), i.xz = j / k, a4x.width = j, a4x.height = k, a4x.style.width = ul + "px", a4x.style.height = aC9 + "px", aap = bi.ea + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.io = 0, this.xz = 1, this.l = 1, this.uM = 0, this.dl = function() {
		this.j = aar(document.documentElement.clientWidth) + 2, this.k = aar(document.documentElement.clientHeight) + 2
	}, this.dk = function() {
		ek = 1, a4x = document.getElementById("canvasA"), 2 === a1.id && (a4x.style.webkitUserSelect = "none"), (y3 = a4x.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aas(0)
	}, this.ef = function() {
		50 <= ++ek && resize(0), -1 === aap || bi.ea < aap || (aap = -1, 2e3 * ++aaq >= bi.ea + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.dv = function(kB) {
		by = !0, resize(kB)
	}, this.a5c = function() {
		aao + 1e3 > bi.ea || (aao = bi.ea, resize(0))
	}
}

function dN() {
	this.aYw = new aay, this.a4I = new aaz, this.aZD = new ab0
}

function ab0() {
	var ab1 = ab2(),
		ab3 = ab4(),
		ab5 = ab6();
	this.rc = function() {
		return 123
	}, this.a2s = function() {
		bJ.f1.zg(bm.buffer.data[183].value, 15), bG.a9(14, ab1), bG.a9(7, ab3), bG.a9(12, ab5)
	}
}

function ab2() {
	for (var ek = document.createElement("canvas"), ek = (ek.width = 24, ek.height = 24, ek.getContext("2d", {
			alpha: !1
		})), fd = (ek.fillStyle = "rgb(0,0,0)", ek.fillRect(0, 0, 24, 24), ek.font = "22px system-ui", ek.textBaseline = "middle", ek.textAlign = "center", ek.fillStyle = "rgb(255,255,255)", ek.fillText("Q", 12, 12), ek.getImageData(0, 0, 24, 24)
			.data), fa = fd.length, lr = 0, aC = 0; aC < fa; aC += 4) lr += fd[aC];
	return 16383 & lr
}

function ab4() {
	var fd = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fd + .5) / 15))
}

function ab6() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aaz() {
	this.a4J = function() {
		for (var h8, fa = am.lS, w9 = am.lX, a43 = ah.a43, aBx = this.aMN(), aC = 0; aC < fa; aC++) h8 = w9[aC], bD.gw.kJ(h8) || (a43[h8] = aBx);
		var rt = ah.rt,
			jz = ah.jz,
			k0 = ah.k0,
			a41 = ah.a41,
			fa = aE.kw;
		for (aC = 0; aC < fa; aC++)(0 === a41[aC] || k0[aC] < 1 || 2 * rt[aC] > 3 * (jz[aC] + k0[aC])) && (a43[aC] = 0);
		var a4G = 0;
		for (aC = 0; aC < fa; aC++) a4G += 0 < a43[aC];
		return a4G
	}, this.aMN = function() {
		return Math.min(65535, bi.kt())
	}
}

function aay() {
	function abA(h, g2, iT) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (g2 >> (aC + iT) % 30 & 1)) % 256
	}
	this.ef = function(ab7, ab8) {
		var h = new Uint8Array(256);
		return function(h, ab7, ab8) {
				var aC, abC = 3 + (4 + ab7) % 32768,
					abD = 12 + ab8 % 32768,
					abE = 17 + ((ab7 & ab8) + (ab7 | ab8) + ab7) % 32768;
				for (aC = 0; aC < 256; aC++) abC = 1 + abC * abD % abE, h[aC] = abC % 256
			}(h, ab7, ab8), abA(h, ab7, 2), abA(h, ab8, 7),
			function(h) {
				var aC, g2, eJ = 0;
				for (aC = 0; aC < 3e4; aC++) g2 = h[eJ], h[eJ] = (g2 + aC + h[(eJ + aC) % 256]) % 256, eJ = (g2 + aC + eJ + (g2 & eJ)) % 256
			}(h),
			function(h) {
				var aC, aC9 = 1,
					vS = 1;
				for (aC = 0; aC < 256; aC += 2) aC9 = (1 + aC9) * (h[aC] + 1) % 1073741824, vS = (1 + vS) * (h[aC + 1] + 1) % 1073741824;
				return [aC9, vS]
			}(h)
	}, this.aYx = function(abF, abG, abH, result) {
		for (var h3 = 1 << abF, aC = 0; aC < h3; aC++)
			if (this.abI(aC, abG, abH) === result) return aC;
		return 0
	}, this.abI = function(abJ, abG, abH) {
		for (var a0l = abG + abJ, a0u = abH + abJ, g2 = a0l + a0u & 2147483647, ft = 1; ft <= 16; ft++) g2 = (g2 = (g2 ^ g2 >> ft) >>> 1 + (3 & a0l)) * (7 + (1023 & (a0l | a0u))) & 1073741823, a0u >>= 1 + (1 & (a0l >>= 1 + (1 & (g2 += 65535 &
			a0u))));
		return g2 &= 1073741823
	}
}

function cq() {
	var abK, abL, is, abM;
	this.dk = function() {
		var aC, fh, fj, aV9, abN, j, k, oy, ia, a00, g2, h8, fq, ft, abQ;
		if (function() {
				if (is = !0, abM = "rgb(" + bV.zy[0] + "," + bV.zy[1] + "," + bV.zy[2] + ")", bV.aQB(bV.fG)) return 1;
				return is = !1, 0
			}()) abL = null;
		else {
			for (abK = bO.g1(96, 4), abN = 1 === bV.fG ? (aV9 = 0, 160) : (aV9 = 128, 32), abM = "rgb(" + aV9 + "," + aV9 + "," + aV9 + ")", abL = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (abL[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fl : abK, k = aC % 2 == 0 ? abK : bV.fm + 2 * abK, abL[aC].width = j, abL[aC].height = k, a00 = (ia = (oy = abL[aC].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (fj = abK - 1; 0 <= fj; fj--)
						for (g2 = abN + Math.floor((fj + 1) * (aV9 - abN) / (abK + 1)), fh = j - 1; 0 <= fh; fh--) a00[h8 = 4 * ((0 === aC ? abK - fj - 1 : fj) * j + fh)] = g2, a00[h8 + 1] = g2, a00[h8 + 2] = g2, a00[h8 + 3] = 255;
				else {
					for (fh = abK - 1; 0 <= fh; fh--)
						for (g2 = abN + Math.floor((fh + 1) * (aV9 - abN) / (abK + 1)), fj = k - 1 - abK; abK <= fj; fj--) a00[h8 = 4 * (fj * j + (3 === aC ? abK - fh - 1 : fh))] = g2, a00[h8 + 1] = g2, a00[h8 + 2] = g2, a00[h8 + 3] = 255;
					for (ft = 1; 0 <= ft; ft--)
						for (fh = abK - 1; 0 <= fh; fh--)
							for (fj = abK - 1; 0 <= fj; fj--) fq = (Math.pow(fh * fh + fj * fj, .5) + 1) / (abK + 1), g2 = abN + Math.floor((1 < fq ? 1 : fq) * (aV9 - abN)), a00[h8 = 4 * ((0 === ft ? abK - fj - 1 : fj + ft * (k - abK)) * j + (
								1 === aC ? fh : abK - fh - 1))] = g2, a00[h8 + 1] = g2, a00[h8 + 2] = g2, a00[h8 + 3] = 255
				}
				oy.putImageData(ia, 0, 0)
			}
			abQ = abN, bV.zt.fillStyle = "rgb(" + abQ + "," + abQ + "," + abQ + ")", bV.zt.fillRect(0, 0, bV.fl, 1), bV.zt.fillRect(0, bV.fm - 1, bV.fl, 1), bV.zt.fillRect(0, 0, 1, bV.fm), bV.zt.fillRect(bV.fl - 1, 0, 1, bV.fm)
		}
	}, this.a1U = function() {
		var ft = is ? 0 : -abK;
		aRu(ft, ft, bV.fl - 2 * ft, bV.fm - 2 * ft, bd.abR, bd.abS, bd.abT, bd.abU) || (y3.fillStyle = abM, y3.fillRect(0, 0, i.j, i.k))
	}, this.y2 = function() {
		is || (aRt(0, -abK, bV.fl, abK, bd.abR, bd.abS, bd.abT, bd.abU) && y3.drawImage(abL[0], bd.abV, bd.abW - abK), aRt(bV.fl, -abK, abK, bV.fm + 2 * abK, bd.abR, bd.abS, bd.abT, bd.abU) && y3.drawImage(abL[1], bd.abV + bV.fl, bd.abW - abK),
			aRt(0, bV.fm, bV.fl, abK, bd.abR, bd.abS, bd.abT, bd.abU) && y3.drawImage(abL[2], bd.abV, bd.abW + bV.fm), aRt(-abK, -abK, abK, bV.fm + 2 * abK, bd.abR, bd.abS, bd.abT, bd.abU) && y3.drawImage(abL[3], bd.abV - abK, bd.abW - abK))
	}
}

function dC() {
	this.aML = new abX, this.a1X = new abY, this.z = new abZ, this.jO = new aba, this.abQ = new abb, this.mr = new abc, this.kk = new abd, this.lj = new abe, this.abf = new abg, this.abh = new abi, this.n2 = new abj, this.iB = new abk, this.mI =
		new abl, this.ll = new abm, this.iE = new abn, this.mv = new abo, this.s1 = new abp, this.dk = function() {
			this.mI.dk(), this.a1X.dk(), this.z.dk(), this.jO.dk(), this.abQ.dk(), this.abh.dk(), this.mv.dk()
		}, this.y2 = function() {
			this.abh.y2(), this.a1X.y2()
		}
}

function abd() {
	this.ef = function(player) {
		return !!bQ.n2.n3(player) && !(bQ.z.l0[player] >= Math.max(3 * ap.performance.mA, aF.lA[aF.iK[player]]) || !bD.gw.n4(player, aF.l8[aF.iK[player]], 32, 0)) && (aX.aF1() ? function(player) {
			var abt = bQ.ll.aF4(),
				fa = abt.length;
			if (0 === fa) return !1;
			abt = abt[az.kD(fa)], fa = bQ.z.mp[abt];
			if (bQ.mv.mw(player, fa)) return !1;
			return !! function(player, my) {
				var my = bP.jM(bQ.z.n1[my]),
					hq = bP.fi(my),
					my = bP.fk(my),
					nz = ah.jU[player],
					o0 = ah.jW[player],
					oC = ah.jV[player],
					player = ah.jX[player],
					oC = Math.max(hq - oC, nz - hq),
					nz = Math.max(my - player, o0 - my);
				return oC < 100 && nz < 100
			}(player, abt) && !!bQ.iE.s0(player, fa, 1) && (bD.gw.n6(player), bQ.z.n7(player), !0)
		}(player) : !!(ap.jn.ef(player) || ap.jc.ef(player) || ap.je.ef(player)) && (function(player) {
			bR.gC[1] = 4, bD.gw.n6(player), bQ.z.n7(player)
		}(player), !0))
	}
}

function abo() {
	var abw = 0,
		abx = null;
	this.dk = function() {
		null === abx && (abx = new Uint16Array(2 * bQ.z.lA)), abw = 0
	}, this.ej = function(aby, mv) {
		var abz = abx;
		abz[abw++] = aby, abz[abw++] = mv
	}, this.mw = function(player, mu) {
		for (var abz = abx, fa = abw, aC = 0; aC < fa; aC += 2)
			if (abz[aC] === mu && bQ.ll.ac0(abz[aC + 1]) && player === bQ.z.mq[bR.gC[2]] >> 3) return !0;
		return !1
	}, this.ac1 = function(ac2) {
		var mr = bQ.z.mn[ac2];
		if (!(mr < 64)) {
			for (var mu = bQ.z.mp[ac2], abz = abx, fa = abw, aC = fa - 2; 0 <= aC; aC -= 2)
				if (abz[aC] === mu) {
					{
						ac7 = void 0;
						var ac7 = abz[aC + 1];
						bQ.ll.ac0(ac7) && bQ.mv.acF(bR.gC[2])
					}
					abz[aC] = abz[fa - 2], abz[aC + 1] = abz[fa - 1], fa -= 2
				} abw = fa
		}
	}, this.ac4 = function(ac5, ac6) {
		for (var ac7 = bQ.z.mp[ac5], mu = -1, abz = abx, fa = abw, aC = 1; aC < fa; aC += 2)
			if (abz[aC] === ac7) {
				mu = abz[aC - 1];
				break
			} if (-1 === mu) return !1;
		if (!bQ.ll.ac0(mu)) return !1;
		var ac2 = bR.gC[2],
			mH = bQ.z.mo[ac2];
		if (ac6 === mH[mH.length - 1]) bQ.z.mo[ac5] = bQ.mI.ac8(bQ.z.mo[ac5], bQ.mI.mQ(mH));
		else {
			var ac9 = bQ.ll.acA(mH, ac6);
			if (-1 === ac9) return !1;
			var acB = bQ.z.n0[ac2];
			ac9 === acB ? (ac2 = bP.jM(bQ.z.n1[ac2]), bQ.z.mo[ac5] = bQ.mI.acD(bQ.z.mo[ac5], mH, ac9, ac6, bP.j4(mH[ac9], ac6) > bP.j4(mH[ac9], ac2))) : bQ.z.mo[ac5] = bQ.mI.acD(bQ.z.mo[ac5], mH, ac9, ac6, acB < ac9)
		}
		return !0
	}, this.acF = function(acG) {
		var mH, lr = bQ.z,
			mr = lr.mn[acG];
		return mr % 64 != 5 && (mH = lr.mo[acG], lr.acH[acG] = 65535 - lr.acH[acG], lr.n0[acG] = mH.length - lr.n0[acG] - 2, lr.mo[acG] = bQ.mI.mQ(mH), lr.mn[acG] = mr - mr % 64 + 5, !0)
	}
}

function abj() {
	this.n3 = function(player) {
		return !!aE.data.passableWater && bQ.z.mm !== bQ.z.lA && bQ.z.l0[player] !== bQ.z.acI && 0 !== ah.hH[player].length
	}, this.rw = function(aZk) {
		var mr = bR.gC[1];
		return !(4 <= mr || !bQ.ll.acJ(bP.fQ(aZk))) && ad.fV(bP.fQ(bP.jQ(aZk, mr)))
	}
}

function abX() {
	this.aMM = function(player) {
		for (var aBN = bQ.z.aBN, uy = player << 3, aC = uy + bQ.z.l0[player] - 1; uy <= aC; aC--) this.acK(aBN[aC])
	}, this.acK = function(acL) {
		var z = bQ.z,
			acM = z.mm - 1,
			acN = z.mq[acL],
			acO = z.acP[acL],
			acQ = z.n1[acL];
		z.mm = acM, z.mq[acL] = z.mq[acM], z.n1[acL] = z.n1[acM], z.acH[acL] = z.acH[acM], z.aA9[acL] = z.aA9[acM], z.acP[acL] = z.acP[acM], z.mp[acL] = z.mp[acM], z.mn[acL] = z.mn[acM], z.acR[acL] = z.acR[acM], z.mo[acL] = z.mo[acM], z.n0[acL] =
			z.n0[acM], z.aBN[z.mq[acL]] = acL,
			function(aZj) {
				var player = aZj >> 3,
					z = bQ.z,
					fa = z.l0[player] - 1,
					acU = (player << 3) + fa;
				z.l0[player] = fa, acU !== aZj && (z.aBN[aZj] = z.aBN[acU], z.mq[z.aBN[aZj]] = aZj)
			}(acN), bQ.jO.jO[bP.jN(z.n1[acL])][z.acP[acL]] = acL, acM = bP.jN(acQ), acN = acO, acM = bQ.jO.jO[acM], z = acM.pop(), acN !== acM.length && (acM[acN] = z, bQ.z.acP[z] = acN)
	}
}

function abY() {
	var acW, acX = 8,
		acY = null;

	function acd(a00, fM, eJ) {
		fM *= 4;
		a00[fM] = 255, a00[1 + fM] = 255, a00[2 + fM] = eJ, a00[3 + fM] = 255
	}

	function acf(ie, abM) {
		var fh, fj, iy, fM, acg, ach, iX = acX,
			ia = bD.sU.getImageData(ie, iX, iX),
			a00 = ia.data,
			lr = (iX >> 1) - .5,
			acj = bD.sc.a5p(abM, .5);
		for (bD.sc.a5r(abM, acj, 300) || bD.sc.a5t(abM, 100), fj = 0; fj < iX; fj++)
			for (fh = 0; fh < iX; fh++) ach = (iX - 1.5) * (iX - 1.5) / 4, a00[fM = 4 * (fj * iX + fh)] = (acg = (iy = (iy = fh - lr) * iy + (iy = fj - lr) * iy) <= (iX - 4.5) * (iX - 4.5) / 4 ? acj : abM)[0], a00[1 + fM] = acg[1], a00[2 + fM] = acg[
				2], a00[3 + fM] = ach < iy ? 0 : 255;
		ie.putImageData(ia, 0, 0)
	}
	this.dk = function() {
		var eJ, iX, a6H, ie, ia, a00;
		(acW = acW || new Array(aE.fX)).fill(null), eJ = 255, iX = acX + 4, a6H = bD.sU.zp(iX, iX), ie = bD.sU.getContext(a6H, !0), ia = bD.sU.getImageData(ie, iX, iX), acd(a00 = ia.data, iX + 1, eJ), acd(a00, iX + 2, eJ), acd(a00, 2 * iX + 1,
				eJ), acd(a00, 2 * iX - 3, eJ), acd(a00, 2 * iX - 2, eJ), acd(a00, 3 * iX - 2, eJ), acd(a00, iX * (iX - 3) + 1, eJ), acd(a00, iX * (iX - 2) + 1, eJ), acd(a00, iX * (iX - 2) + 2, eJ), acd(a00, iX * (iX - 2) - 2, eJ), acd(a00, iX * (
				iX - 1) - 3, eJ), acd(a00, iX * (iX - 1) - 2, eJ), ie.putImageData(ia, 0, 0), acY = a6H,
			function() {
				if (aE.iV)
					for (var a6H = new Array(bj.lJ.length), fa = aE.fX, acb = acW, aEM = bj.aEM, aC = 0; aC < fa; aC++) {
						var a8r = aEM[aC];
						a6H[a8r] || (a6H[a8r] = function(a8r) {
							var a6H = bD.sU.zp(acX, acX),
								ie = bD.sU.getContext(a6H, !0),
								h = bR.g9;
							return h.set(bj.aVA[a8r]), acf(ie, h), a6H
						}(a8r)), acb[aC] = a6H[a8r]
					}
			}()
	}, this.y2 = function() {
		var aC, player, ack, aS2, iK, ix, acm, aco, acp, n1 = bQ.z.n1,
			mq = bQ.z.mq,
			aA9 = bQ.z.aA9,
			acR = bQ.z.acR,
			acq = acW,
			acr = aE.fK,
			fa = bQ.z.mm,
			acs = i.j,
			act = i.k,
			acu = bV.fl << 4,
			fP = ip,
			fE = fP / acX,
			nz = jF / fP,
			o0 = jG / fP,
			iy = (acs + jF) / fP - nz,
			j1 = (act + jG) / fP - o0,
			ie = y3;
		for (ie.imageSmoothingEnabled = fP < 9, bD.sU.textAlign(ie, 1), bD.sU.textBaseline(ie, 1), aC = 0; aC < fa; aC++) player = mq[aC] >> 3, iK = aA9[aC], ack = .9 + .1 * Math.log10(iK), aS2 = (ix = n1[aC]) % acu / 16 - ack, ix = act * (Math
			.floor(ix / acu) / 16 - ack - o0) / j1, acm = -2 * (acp = fP * ack) * (1 + (aco = +(player === acr)) / 8), aco = aco * acp / 4, (acp = acs * (aS2 - nz) / iy) < acm || ix < acm || acs + aco < acp || act + aco < ix || (aS2 = 2 *
			ack * fE, acm = ack * fP, null === (aco = acq[player]) && (acq[player] = aco = function(player) {
				var a6H = bD.sU.zp(acX, acX);
				return acf(bD.sU.getContext(a6H, !0), ad.aAy(player)), a6H
			}(player)), player === acr && (ie.setTransform(aS2, 0, 0, aS2, acp - 2 * aS2, ix - 2 * aS2), ie.drawImage(acY, 0, 0)), ie.setTransform(aS2, 0, 0, aS2, acp, ix), ie.drawImage(aco, 0, 0), (ack = Math.floor(function(iK) {
				if (iK < 1e3) return .42;
				if (iK < 1e4) return .34;
				if (iK < 1e6) return .26;
				if (iK < 1e8) return .19;
				return .15
			}(iK) * acm)) < 6) || (ie.setTransform(1, 0, 0, 1, 0, 0), ie.fillStyle = acR[aC] ? bE.q2 : bE.pS, ie.font = bD.sU.uE(1, ack), ie.fillText(bD.tR.a2h(iK), acp + acm, ix + acm + .1 * ack));
		ie.imageSmoothingEnabled = !1, ie.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function abi() {
	var acx;
	this.dk = function() {
		if (!acx) {
			acx = new Array(bj.acz.length);
			for (var aC = 0; aC < acx.length; aC++) acx[aC] = bS.z.ad0(20, bj.acz[aC])
		}
	}, this.y2 = function() {
		var oJ = ip;
		if (!(5 <= oJ)) {
			var acs = i.j,
				act = i.k,
				nz = jF / oJ,
				o0 = jG / oJ,
				oC = (acs + jF) / oJ,
				oD = (act + jG) / oJ,
				h9 = -20 * oJ,
				ad1 = .5 * h9,
				acu = bV.fl << 4,
				fa = bQ.z.mm,
				n1 = bQ.z.n1,
				mq = bQ.z.mq,
				aEM = bj.aEM,
				a6H = acx,
				ie = y3;
			3 < oJ && (ie.globalAlpha = .5 * (5 - oJ));
			for (var aC = 0; aC < fa; aC++) {
				var ix = n1[aC],
					fh = acs * (ix % acu / 16 - nz) / (oC - nz) + ad1,
					ix = act * (Math.floor(ix / acu) / 16 - o0) / (oD - o0) + ad1;
				acs < fh || act < ix || fh < h9 || ix < h9 || (ie.setTransform(oJ, 0, 0, oJ, fh, ix), fh = a6H[aEM[mq[aC] >> 3]], ie.drawImage(fh, 0, 0))
			}
			ie.globalAlpha = 1, ie.setTransform(oJ, 0, 0, oJ, 0, 0)
		}
	}
}

function abm() {
	this.ad4 = function(player, id) {
		for (var ad5 = ah.hH[player], fa = ad5.length, aC = 0; aC < fa; aC++)
			if (bP.iq(ad5[aC], id)) return !0;
		return !1
	}, this.ad6 = function(player, fM) {
		for (var j6, ad7, fE, ad5 = ah.hH[player], fa = ad5.length, j = bV.fl, ad9 = bP.fi(fM), adA = bP.fk(fM), fg = -1, min = bV.fl * bV.fl + bV.fm * bV.fm, id = ad.fI(bP.fQ(fM)), aC = 0; aC < fa; aC++)(ad7 = (ad7 = ad9 - (j6 = (fE = ad5[
			aC]) >> 2) % j) * ad7 + (ad7 = adA - ~~((.5 + j6) / j)) * ad7) < min && bP.iq(fE, id) && (min = ad7, fg = j6);
		return fg
	}, this.lm = function(j5, j6) {
		for (var id = ad.fI(bP.fQ(j6)), ir = bP.ii, fE = bP.fQ(j5), adB = -1, aC = 0; aC < 4; aC++) {
			var fP = fE + ir[aC];
			ad.is(fP) && ad.fI(fP) === id && (-1 === adB || bP.j7(bP.fO(fP), j6) < bP.j7(adB, j6)) && (adB = bP.fO(fP))
		}
		return adB
	}, this.mL = function(player, fM) {
		for (var ir = bP.ii, fE = bP.fQ(fM), aC = 0; aC < 4; aC++) {
			var fP = fE + ir[aC];
			if (ad.hA(fP) && ad.a1S(player, fP)) return !0
		}
		return !1
	}, this.mM = function(player, fM) {
		for (var ir = bP.ii, fE = bP.fQ(fM), aC = 0; aC < 4; aC++) {
			var fP = fE + ir[aC];
			if (ad.fR(fP)) return !0;
			if (ad.hA(fP)) {
				fP = ad.fS(fP);
				if (player !== fP && bv.fT(player, fP)) return !0
			}
		}
		return !1
	}, this.ms = function(fM) {
		for (var ir = bP.ii, fE = bP.fQ(fM), aC = 0; aC < 4; aC++) {
			var fP = fE + ir[aC];
			if (ad.hA(fP)) {
				fP = ad.fS(fP);
				if (bD.gw.kJ(fP)) return fP
			}
		}
		return -1
	}, this.acJ = function(fE) {
		if (ad.is(fE))
			for (var ir = bP.ii, aC = 0; aC < 4; aC++)
				if (ad.fV(fE + ir[aC])) return !0;
		return !1
	}, this.ny = function(player, id) {
		for (var uy = player << 3, uz = uy + bQ.z.l0[player], mp = bQ.z.mp, aBN = bQ.z.aBN, aC = uy; aC < uz; aC++) {
			var aBO = aBN[aC];
			if (mp[aBO] === id) return aBO
		}
		return -1
	}, this.o3 = function(player) {
		return 0 === bQ.z.l0[player] ? -1 : bQ.z.aBN[player << 3]
	}, this.a99 = function(mB, mC) {
		var fa = bQ.z.mm;
		if (fa < 1) return -1;
		for (var n1 = bQ.z.n1, adC = 80, aUe = -1, aC = 0; aC < fa; aC++) {
			var fq = bP.iu(mB, mC, n1[aC]);
			fq < adC && (adC = fq, aUe = aC)
		}
		return function(aC, mB, mC) {
			if (aC < 0) return;
			var adJ = bQ.z.n1[aC],
				adK = bP.j0(adJ),
				adJ = bP.j3(adJ),
				aC = 20 * (.9 + .1 * Math.log10(bQ.z.aA9[aC]));
			return aC = Math.max(aC, bP.jH(bD.sU.v3(.02, 1.7))), bO.aS1(bP.iz(mB), bP.j2(mC), adK, adJ, aC)
		}(aUe, mB, mC) ? aUe : -1
	}, this.ac0 = function(nw) {
		for (var fa = bQ.z.mm, mp = bQ.z.mp, aC = 0; aC < fa; aC++)
			if (mp[aC] === nw) return bR.gC[2] = aC, !0;
		return !1
	}, this.aMI = function(player) {
		for (var uy = player << 3, uz = uy + bQ.z.l0[player], aBN = bQ.z.aBN, aA9 = bQ.z.aA9, iK = 0, aC = uy; aC < uz; aC++) iK += aA9[aBN[aC]];
		return iK
	}, this.adE = function(player, acG) {
		acG = bQ.z.mo[acG];
		return this.mL(player, acG[acG.length - 1])
	}, this.adF = function(j5, j6, fq, adG) {
		var j9 = bP.fi(j5),
			j5 = bP.fk(j5),
			jB = bP.fi(j6),
			j6 = bP.fk(j6),
			jB = (fq = Math.max(fq, 1), jB - j9),
			j6 = j6 - j5,
			iy = bO.g1(Math.abs(jB) * adG, fq),
			adG = bO.g1(Math.abs(j6) * adG, fq);
		return bP.fx(j9 + Math.sign(jB) * iy, j5 + Math.sign(j6) * adG)
	}, this.acA = function(mH, fM) {
		for (var fa = mH.length - 1, fh = bP.fi(fM), fj = bP.fk(fM), aC = 0; aC < fa; aC++) {
			var j5 = mH[aC],
				j6 = mH[aC + 1],
				nz = bP.fi(j5),
				j5 = bP.fk(j5),
				oC = bP.fi(j6),
				j6 = bP.fk(j6);
			if (!(fh !== nz && fh !== oC && Math.sign(fh - nz) === Math.sign(fh - oC) || fj !== j5 && fj !== j6 && Math.sign(fj - j5) === Math.sign(fj - j6))) {
				if (nz === oC || j5 === j6) return aC;
				if (Math.abs(fh - nz) === Math.abs(fj - j5) && Math.abs(fh - oC) === Math.abs(fj - j6)) return aC
			}
		}
		return -1
	}, this.aF4 = function() {
		for (var adM = mX[0], mq = bQ.z.mq, mm = bQ.z.mm, h = [], aC = 0; aC < mm; aC++) bD.gw.la(adM, mq[aC] >> 3) && h.push(aC);
		return h
	}, this.mJ = function(player, mH) {
		for (var uy = player << 3, uz = uy + bQ.z.l0[player], aBN = bQ.z.aBN, mo = bQ.z.mo, i3 = mH[0], lZ = mH[mH.length - 1], aC = uy; aC < uz; aC++) {
			var h8 = mo[aBN[aC]];
			if (h8[0] === i3 && h8[h8.length - 1] === lZ) return !0
		}
		return !1
	}
}

function abn() {
	function adP(player, acG) {
		acG = bP.jM(bQ.z.n1[acG]), acG = ad.fI(bP.fQ(acG));
		return !!bQ.ll.ad4(player, acG)
	}

	function adN(player) {
		return bQ.n2.n3(player) && !bQ.mI.mO()
	}
	this.iF = function(player, fM) {
		return !!adN(player) && -1 !== (fM = function(player, fM) {
			for (var fa = bQ.z.mm, n1 = bQ.z.n1, mq = bQ.z.mq, adC = bP.ik(), aUe = -1, aC = 0; aC < fa; aC++) {
				var fq = bP.j4(fM, bP.jM(n1[aC]));
				fq < adC && bD.gw.la(player, mq[aC] >> 3) && (adC = fq, aUe = aC)
			}
			return aUe
		}(player, fM)) && !!adP(player, fM) && (bR.gC[3] = bQ.z.mp[fM], !0)
	}, this.r7 = function(player, nw) {
		return !!adN(player) && !!bQ.ll.ac0(nw) && !!adP(player, bR.gC[2])
	}, this.s0 = function(player, nw, adQ) {
		return !! function(player, nw, adQ) {
			if (adN(player) && bQ.ll.ac0(nw)) {
				nw = bR.gC[2];
				if (bD.gw.la(player, bQ.z.mq[nw] >> 3)) {
					if (function(player, acG) {
							return bQ.ll.adE(player, acG) && (bR.h[0] = bQ.mI.mQ(bQ.z.mo[acG]), bR.gC[1] = 6, !0)
						}(player, nw)) return 1;
					var abv = bP.jM(bQ.z.n1[nw]),
						adU = bQ.ll.ad6(player, abv);
					if (-1 !== adU) {
						adU = bP.j4(adU, abv);
						if (!(adQ && 120 < adU)) {
							adQ = function(acG, adV, abv) {
								var mH = bQ.z.mo[acG],
									acG = bQ.z.n0[acG],
									adX = bP.j4(abv, mH[acG + 1]);
								if (adV <= adX) return bQ.ll.adF(abv, mH[acG + 1], adX, adV);
								for (var fq = adV - adX, fa = mH.length - 1, aC = acG + 1; aC < fa; aC++) {
									var adY = bP.j4(mH[aC], mH[aC + 1]);
									if (fq <= adY) return bQ.ll.adF(mH[aC], mH[aC + 1], adY, fq);
									fq -= adY
								}
								return mH[fa]
							}(nw, adU, abv);
							if (bQ.lj.rx(player, adQ, 1)) return bR.gC[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, nw, adQ) && (player = bR.gC[2], bQ.z.mn[player] = 64 + bQ.z.mn[player] % 64, bQ.mv.ej(nw, bQ.z.n5), !0)
	}
}

function abc() {
	function add(player, iK, adb, abv) {
		var k5;
		if (ad.fR(adb)) k5 = aE.fX;
		else {
			if ((k5 = ad.fS(adb)) === player) return void bg.h0(player, iK - bD.gw.gz(player, iK), 12);
			if (!bv.fT(player, k5)) return void bB.ky.rM(player, k5, iK)
		}
		ae.kH(player, k5) || ae.ka(player) ? (ah.h2[player].push(abv << 2), ae.ej(player, iK, k5), aG.k3(player, !0)) : bg.h0(player, iK, 12)
	}
	this.ef = function() {
		for (var mn = bQ.z.mn, n1 = bQ.z.n1, acH = bQ.z.acH, aC = bQ.z.mm - 1; 0 <= aC; aC--) 65535 === acH[aC] && function(aC, abv, iS) {
			if (6 === iS) {
				if (bQ.mv.ac4(aC, abv)) return bQ.z.n0[aC]++, bQ.z.acH[aC] = 0, 0
			} else {
				var player = bQ.z.mq[aC] >> 3,
					aC = bQ.z.aA9[aC];
				bg.adc(player), iS < 4 ? add(player, aC, abv + bP.ih[iS] << 2, abv) : 4 === iS ? function(player, iK, abv) {
					var aC, fe, ir = bP.ii,
						fP = bP.fQ(abv);
					for (aC = 0; aC < 4; aC++)
						if (fe = fP + ir[aC], ad.fR(fe)) return add(player, iK, fe, abv);
					for (aC = 0; aC < 4; aC++)
						if (fe = fP + ir[aC], ad.hA(fe) && !ad.a1S(player, fe)) return add(player, iK, fe, abv);
					for (aC = 0; aC < 4; aC++)
						if (fe = fP + ir[aC], ad.hA(fe)) return add(player, iK, fe, abv)
				}(player, aC, abv) : 5 === iS && function(player, iK, abv) {
					var aC, fe, ir = bP.ii,
						fP = bP.fQ(abv);
					for (aC = 0; aC < 4; aC++)
						if (fe = fP + ir[aC], ad.hA(fe) && ad.a1S(player, fe)) return add(player, iK, fe, abv);
					for (aC = 0; aC < 4; aC++)
						if (fe = fP + ir[aC], ad.hA(fe)) return add(player, iK, fe, abv);
					for (aC = 0; aC < 4; aC++)
						if (fe = fP + ir[aC], ad.fR(fe)) return add(player, iK, fe, abv)
				}(player, aC, abv)
			}
			return 1
		}(aC, bP.jM(n1[aC]), mn[aC] % 64) && (bQ.mv.ac1(aC), bQ.aML.acK(aC))
	}, this.ada = function(player, fM, iS, nw, iK) {
		if (!(5 <= iS)) {
			var acr = aE.fK;
			if (bD.gw.hn(acr) && bv.fT(player, acr) && player !== acr && 0 !== ah.hH[acr].length && bD.gw.a6w(player, 5)) {
				for (var adb, fo = !1, aC = 0; aC < 4; aC++)
					if (adb = fM + bP.ih[aC] << 2, ad.fV(adb) && !ad.fR(adb) && ad.fS(adb) === acr) {
						fo = !0;
						break
					} fo && (aO.aAH(719, 0), iS = iK < 25e3 ? L(514) + " (" + bD.tR.a2h(iK) + ") ⛵" : L(515) + " (" + bD.tR.a2h(iK) + ") 🚢", aO.a1s(180, iS, 719, player, bE.q1, bE.pP, -1, !0, void 0, {
					fu: 1,
					nw: nw
				}))
			}
		}
	}
}

function abZ() {
	this.lA = 512, this.acI = 8, this.mm = 0, this.n5 = 0, this.mq = new Uint16Array(this.lA), this.n1 = new Uint32Array(this.lA), this.acH = new Uint16Array(this.lA), this.aA9 = new Uint32Array(this.lA), this.acP = new Uint16Array(this.lA), this
		.mp = new Uint16Array(this.lA), this.mn = new Uint8Array(this.lA), this.acR = new Uint8Array(this.lA), this.mo = new Array(this.lA), this.n0 = new Uint16Array(this.lA), this.l0 = new Uint8Array(aE.fX), this.aBN = new Uint16Array(this.acI * aE
			.fX), this.dk = function() {
			this.mm = 0, this.n5 = 0, this.l0.fill(0), this.mo.fill(null)
		}, this.n7 = function(player) {
			var iK = bR.g7[0],
				mr = bR.gC[1],
				mH = bR.h[0],
				adg = this.n5,
				fa = this.mm,
				adh = bP.jL(mH[0]),
				adi = this.l0[player],
				adj = (player << 3) + adi;
			this.mq[fa] = adj, this.n1[fa] = adh, this.acH[fa] = 0, iK < 60 && (bD.gw.gx(player, 60 - iK), iK = 60), this.aA9[fa] = iK, this.acP[fa] = bQ.jO.n7(fa, bP.jN(adh)), this.mp[fa] = adg, this.mn[fa] = mr, this.acR[fa] = 0, this.mo[fa] = mH,
				this.n0[fa] = 0, this.n5 = (adg + 1) % 65536, this.l0[player] = adi + 1, this.aBN[adj] = fa, this.mm++, bQ.mr.ada(player, mH[mH.length - 1], mr, adg, iK)
		}, this.ef = function() {
			bQ.mr.ef();
			for (var h8 = aE.fK, eb = bQ.ll.aMI(h8), tz = (! function(tz) {
					for (var ado, n1 = tz.n1, aA9 = tz.aA9, acR = tz.acR, acH = tz.acH, acP = tz.acP, mo = tz.mo, n0 = tz.n0, tz = tz.mm, acu = bV.fl << 4, aC = tz - 1; 0 <= aC; aC--) {
						var adp = n1[aC],
							mH = mo[aC],
							adq = n0[aC],
							adh = bP.jL(mH[adq]),
							adr = bP.jL(mH[adq + 1]),
							ads = adh % acu,
							adh = ~~((adh + .5) / acu),
							adu = adr % acu,
							adv = ~~((adr + .5) / acu),
							adw = adu - ads,
							adx = adv - adh,
							fd = Math.max(~~Math.sqrt(adw * adw + adx * adx + .5), 1),
							aNF = aA9[aC],
							aNF = (aNF = acR[aC] ? 4e4 : 25e4 + Math.min(20 * aNF, 3e5) + Math.min(aNF >> 3, 5e4), acH[aC] + Math.max(~~((aNF + .5) / fd), 1));
						65535 <= aNF ? adq + 2 < mH.length ? (n0[aC] = adq + 1, n1[aC] = ado = function(aC, ady, ads, adt, adq, fd, mH, acu) {
							ady = Math.min(ady - 65535, 65535);
							var mH = bP.jL(mH[adq + 2]),
								adq = mH % acu - ads,
								mH = ~~((mH + .5) / acu) - adt,
								ae1 = Math.max(~~Math.sqrt(adq * adq + mH * mH + .5), 1);
							return ady = Math.min(Math.floor((fd * ady + .5) / ae1), 65534), bQ.z.acH[aC] = ady, ads + bO.g1(ady * adq, 65535) + acu * (adt + bO.g1(ady * mH, 65535))
						}(aC, aNF, adu, adv, adq, fd, mH, acu)) : (n1[aC] = ado = adr, acH[aC] = 65535) : (acH[aC] = aNF, n1[aC] = ado = ads + bO.g1(aNF * adw, 65535) + acu * (adh + bO.g1(aNF * adx, 65535))), acP[aC] = bQ.jO.ae0(acP[aC],
							adp, ado)
					}
				}(this), ! function(tz) {
					if (bi.kt() % 2 == 1) {
						var aC, iT, lr, fu, ek, ae2, a2L, ae3, i3, nz, o0, adh, ae4, aCq, ae6, lZ, fa = tz.mm,
							n1 = tz.n1,
							mq = tz.mq,
							aA9 = tz.aA9,
							acR = tz.acR,
							jO = bQ.jO.jO,
							ae8 = jO.length,
							ae9 = bQ.jO.ae9,
							acu = bV.fl << 4,
							aeA = aE.iV,
							aZY = bj.fY,
							h9 = (fa - 1) * (bO.g1(bi.kt(), 2) % 2);
						for (aC = 0; aC < fa; aC++)
							for (iT = Math.abs(aC - h9), adh = n1[iT], lr = bP.jN(adh), i3 = mq[iT] >> 3, nz = adh % acu, o0 = ~~((adh + .5) / acu), ae6 = aA9[iT], fu = 0; fu < 9; fu++)
								if (!((ae2 = lr + ae9[fu]) < 0 || ae8 <= ae2))
									for (ae3 = jO[ae2], a2L = ae3.length, ek = 0; ek < a2L; ek++) ae4 = ae3[ek], lZ = mq[ae4] >> 3, i3 == lZ || aeA && aZY[i3] === aZY[lZ] && aZY[i3] || (lZ = n1[ae4], (aCq = nz - lZ % acu) * aCq + (aCq = o0 -
										~~((lZ + .5) / acu)) * aCq < 14400 && (lZ = aA9[ae4], aCq = lZ <= ae6 ? Math.max(1, bO.g1(lZ + bO.g1(ae6 - lZ, 10), 10)) : Math.max(1, bO.g1(ae6, 10)), aA9[ae4] = Math.max(lZ - aCq, 0), acR[
										ae4] = 4))
					}
				}(this), ! function(tz) {
					if (bi.kt() % 5 == 3)
						for (var aA9 = tz.aA9, fa = tz.mm, aC = 0; aC < fa; aC++) {
							var iK = aA9[aC];
							aA9[aC] = Math.max(iK - Math.max(1, iK >> 7), 0)
						}
				}(this), this), aA9 = tz.aA9, acR = tz.acR, aC = tz.mm - 1; 0 <= aC; aC--) acR[aC] = acR[aC] >> 1, 0 === aA9[aC] && (bQ.mv.ac1(aC), bQ.aML.acK(aC));
			bg.h0(h8, eb - bQ.ll.aMI(h8), 15)
		}
}

function aba() {
	this.aeB = 32, this.fh = 0, this.fj = 0, this.jP = 0, this.aeC = 0, this.aeD = 4, this.jO = null, this.ae9 = new Int16Array(9), this.dk = function() {
		this.jP = 1 + bO.g1(bV.fl - 1, this.aeB), this.aeC = 1 + bO.g1(bV.fm - 1, this.aeB), this.jO = new Array(this.jP * this.aeC), bD.sc.a5o(this.jO);
		var fh, fj, ae9 = this.ae9,
			j = this.jP;
		for (fh = -1; fh <= 1; fh++)
			for (fj = -1; fj <= 1; fj++) ae9[3 * (1 + fj) + 1 + fh] = fj * j + fh
	}, this.n7 = function(aeF, aC) {
		return this.jO[aC].push(aeF), this.jO[aC].length - 1
	}, this.ae0 = function(aeG, adh, adr) {
		var aeH, aeI, adh = bP.jN(adh),
			adr = bP.jN(adr);
		return adh === adr ? aeG : (aeH = this.jO[adh].pop(), this.jO[adh].length === aeG ? this.n7(aeH, adr) : (aeI = this.jO[adh][aeG], this.jO[adh][aeG] = aeH, bQ.z.acP[aeH] = aeG, this.n7(aeI, adr)))
	}
}

function abe() {
	this.lk = function(player, aeJ) {
		return -1 !== aeJ && !!bQ.ll.mM(player, aeJ) && this.rx(player, aeJ, 0)
	}, this.rx = function(player, aeJ, aeK) {
		player = function(player, aeJ, aeK) {
			var adU = bQ.ll.ad6(player, aeJ);
			if (-1 === adU) return -1;
			adU = bQ.ll.lm(adU, aeJ);
			if (-1 === adU) return -1;
			var mF = bQ.mI.mN(adU, aeJ);
			if (0 <= mF) return mF;
			if (bQ.mI.mO()) return -1;
			if (0 <= (mF = bQ.mI.mN(aeJ, adU))) return bQ.mI.mP(bQ.mI.mQ(bQ.mI.get(mF)));
			if (adU === aeJ) return bQ.mI.mP(new Uint32Array([adU, aeJ]));
			if (0 <= (mF = bQ.abf.rx(adU, aeJ))) return mF;
			return aeK ? function(aeO, player) {
				var gH = bR.gH,
					buffer = (gH.fill(0), [aeO]),
					ij = (gH[aeO] = 1, bP.ij),
					aeP = -1,
					fa = buffer.length;
				for (; - 1 === aeP && fa;) {
					for (var h = [], aC = 0; aC < fa; aC++)
						for (var fM = buffer[aC], a7i = gH[fM], fd = 0; fd < 8; fd++) {
							var zb, a4D, fg = fM + ij[fd],
								fE = 4 * fg;
							ad.is(fE) ? (zb = gH[fg], a4D = a7i + 5 + ((1 & fd) << 1), 0 === zb ? (h.push(fg), gH[fg] = a4D) : gH[fg] = Math.min(a4D, zb)) : -1 === aeP && fd % 2 == 0 && ad.a1P(player, fE) && (aeP = fM)
						}
					fa = (buffer = h).length
				}
				return -1 !== aeP ? function(j5, aeR) {
					var ij = bP.ij,
						aeS = -1,
						iS = 0,
						nU = [];
					for (; aeR !== j5;)(iS = function(fM, iS) {
						var gH = bR.gH,
							ij = bP.ij,
							a7i = gH[fM];
						if (a7i - gH[fM + ij[iS]] != 5 + ((1 & iS) << 1))
							for (var ft = 0; ft < 8; ft++) {
								var fd = ft + iS + 6 & 7;
								if (a7i - gH[fM + ij[fd]] == 5 + ((1 & fd) << 1)) return fd
							}
						return iS
					}(aeR, iS)) !== aeS && (nU.push(aeR), aeS = iS), aeR += ij[iS];
					nU.push(j5);
					var mF = bQ.mI.mN(nU[0], j5);
					if (0 <= mF) return mF;
					return bQ.mI.mP(new Uint32Array(nU))
				}(aeO, aeP) : -1
			}(aeJ, player) : -1
		}(player, aeJ, aeK);
		return -1 !== player && (bR.h[0] = bQ.mI.get(player), !0)
	}
}

function abg() {
	function aeU(hq, jA, jC) {
		for (var kC = Math.min(jA, jC), oH = Math.max(jA, jC), fj = kC + 1; fj < oH; fj++)
			if (!ad.is(bP.jI(hq, fj))) return;
		return 1
	}

	function aeV(hs, j9, jB) {
		for (var kC = Math.min(j9, jB), oH = Math.max(j9, jB), fh = kC + 1; fh < oH; fh++)
			if (!ad.is(bP.jI(fh, hs))) return;
		return 1
	}

	function aeW(j9, jA, jB, jC, aeM, aeJ) {
		for (var fa = Math.min(Math.abs(jB - j9), Math.abs(jC - jA)), iy = Math.sign(jB - j9), j1 = Math.sign(jC - jA), aC = 0; aC < fa; aC++)
			if (!ad.is(bP.jI(j9 += iy, jA += j1))) return null;
		return j9 === jB ? aeU(j9, jA, jC) ? new Uint32Array([aeM, bP.fx(j9, jA), aeJ]) : null : aeV(jA, j9, jB) ? new Uint32Array([aeM, bP.fx(j9, jA), aeJ]) : null
	}
	this.rx = function(aeM, aeJ) {
		aeM = function(aeM, aeJ) {
			var j9 = bP.fi(aeM),
				jA = bP.fk(aeM),
				jB = bP.fi(aeJ),
				jC = bP.fk(aeJ);
			if (j9 === jB) {
				if (aeU(j9, jA, jC)) return new Uint32Array([aeM, aeJ])
			} else {
				if (jA !== jC) return aeW(j9, jA, jB, jC, aeM, aeJ) || aeW(jB, jC, j9, jA, aeM, aeJ);
				if (aeV(jA, j9, jB)) return new Uint32Array([aeM, aeJ])
			}
			return null
		}(aeM, aeJ);
		return null === aeM ? -1 : bQ.mI.mP(aeM)
	}
}

function abl() {
	var aeX = [];
	this.dk = function() {
		aeX = []
	}, this.mO = function() {
		return 65536 === aeX.length
	}, this.mN = function(aeM, aeJ) {
		for (var mI = aeX, fa = mI.length, aC = 0; aC < fa; aC++) {
			var h8 = mI[aC];
			if (h8[0] === aeM && h8[h8.length - 1] === aeJ) return aC
		}
		return -1
	}, this.mQ = function(mH) {
		var aeY = new Uint32Array(mH.length);
		return aeY.set(mH), aeY.reverse()
	}, this.ac8 = function(i3, lZ) {
		var h3 = i3.length - 1,
			aeZ = new Uint32Array(h3 + lZ.length);
		return aeZ.set(i3, 0), aeZ.set(lZ, h3), aeZ
	}, this.acD = function(i3, lZ, z5, fM, aea) {
		aea && (z5 = (lZ = this.mQ(lZ)).length - z5 - 2);
		aea = lZ.subarray(z5 + 1 + (fM === lZ[z5 + 1])), fM = new Uint32Array(i3.length + aea.length);
		return fM.set(i3, 0), fM.set(aea, i3.length), fM
	}, this.mP = function(mH) {
		return aeX.push(mH), aeX.length - 1
	}, this.get = function(aC) {
		return aeX[aC]
	}, this.mK = function() {
		return aeX
	}, this.aec = function(aeM, aeJ) {
		return null
	}
}

function abp() {
	this.ef = function(player, nw) {
		player = bQ.ll.ny(player, nw);
		return !(player < 0 || !bQ.mv.acF(player) || (bQ.mv.ac1(player), 0))
	}
}

function abb() {
	var a20 = 32,
		a1z = new Array(2);

	function zp(ek) {
		var fh, fj, fM, j1, iy, iX = a20,
			a6H = bD.sU.zp(iX, iX),
			ie = bD.sU.getContext(a6H, !0),
			ia = bD.sU.getImageData(ie, iX, iX),
			a00 = ia.data,
			lr = (iX >> 1) - .5,
			ls = Math.sqrt(lr * lr);
		for (a00.fill(255), fj = 0; fj < iX; fj++)
			for (fh = 0; fh < iX; fh++) iy = fh - lr, j1 = fj - lr, fM = 4 * (fj * iX + fh), iy = 714 * (ls - Math.sqrt(iy * iy + j1 * j1)) / ls, a00[2 + fM] = ek, a00[3 + fM] = 255 < iy ? 0 : iy;
		return ie.putImageData(ia, 0, 0), a6H
	}
	this.aed = -1, this.dk = function() {
		this.aed = -1, a1z[0] || (a1z[0] = zp(255), a1z[1] = zp(0))
	}, this.aee = function(ie, fE, fh, fj, eI, aC) {
		bD.gw.hn(aE.fK) && (ie.setTransform(fE *= 4 / 3 * .625, 0, 0, fE, fh - (eI *= 4 / 3), fj - eI), ie.drawImage(a1z[+(bQ.z.mp[aC] === this.aed)], 0, 0))
	}
}

function abk() {
	function aZp(fh, fa, fj, aef, aCw, g0, player) {
		if (!(fj < 1 || aCw < fj))
			for (var aC = 0; aC <= fa; aC++) {
				var fE = bP.jI(fh, fj);
				if (bQ.ll.acJ(fE) && !bD.sc.has(aef, ad.fI(fE)) && ad.a1H(fE, player)) return fE >> 2;
				fh += g0
			}
		return -1
	}

	function aZt(fj, fa, fh, aef, aZn, g0, player) {
		if (!(fh < 1 || aZn < fh)) {
			fa = Math.max(fa, 0);
			for (var aC = 0; aC <= fa; aC++) {
				var fE = bP.jI(fh, fj);
				if (bQ.ll.acJ(fE) && !bD.sc.has(aef, ad.fI(fE)) && ad.a1H(fE, player)) return fE >> 2;
				fj += g0
			}
		}
		return -1
	}

	function aZx(j5, j6, aZk) {
		return -1 !== j6 && (-1 === j5 || bP.j7(j6, aZk) < bP.j7(j5, aZk)) ? j6 : j5
	}
	this.iC = function(player, aZk) {
		if (bQ.n2.n3(player))
			for (var aZl = bP.ik(), aef = [];;) {
				var aeP = function(aZk, aZl, aef, player) {
					for (var hq = bP.fi(aZk), hs = bP.fk(aZk), aZn = bV.fl - 2, aCw = bV.fm - 2, aZo = -1, fd = 0; fd < aZl; fd++) {
						var aCv = Math.max(hq - fd, 1),
							aQV = Math.max(hs - fd, 1),
							a1D = Math.min(hq + fd, aZn),
							a1C = Math.min(hs + fd, aCw),
							j5 = aZp(hq, a1D - hq, hs - fd, aef, aCw, 1, player),
							j6 = aZp(hq - 1, hq - aCv - 1, hs - fd, aef, aCw, -1, player),
							a1D = aZp(hq, a1D - hq, hs + fd, aef, aCw, 1, player),
							aCv = aZp(hq - 1, hq - aCv - 1, hs + fd, aef, aCw, -1, player),
							aZs = aZt(hs, a1C - hs - 1, hq - fd, aef, aZn, 1, player),
							aZu = aZt(hs - 1, hs - aQV - 2, hq - fd, aef, aZn, -1, player),
							a1C = aZt(hs, a1C - hs - 1, hq + fd, aef, aZn, 1, player),
							aQV = aZt(hs - 1, hs - aQV - 2, hq + fd, aef, aZn, -1, player);
						if (aZo = aZx(aZo, j5, aZk), aZo = aZx(aZo, j6, aZk), aZo = aZx(aZo, a1D, aZk), aZo = aZx(aZo, aCv, aZk), aZo = aZx(aZo, aZs, aZk), aZo = aZx(aZo, aZu, aZk), aZo = aZx(aZo, a1C, aZk), 0 <= (aZo = aZx(aZo, aQV, aZk)) &&
							fd * fd >= bP.j7(aZo, aZk)) return aZo
					}
					return -1
				}(aZk, aZl, aef, player);
				if (-1 === aeP) break;
				var id = ad.fI(bP.fQ(aeP));
				if (bQ.ll.ad4(player, id)) return !! function(player, aeP, aZk) {
					for (var iS = bP.jS(aeP, aZk), aC = 0; aC < 4; aC++) {
						var fM = bP.jQ(aeP, iS);
						if (ad.aLr(bP.fQ(fM), player)) return bR.gC[6] = iS, 1;
						iS = (iS + 1) % 4
					}
					return
				}(player, aeP, aZk) && (bR.gC[7] = aeP, !0);
				aef.push(id)
			}
		return !1
	}
}

function dn() {
	this.aX8 = [L(516), L(517), L(518), L(519), L(520), L(521), L(522), L(523), L(524), L(525), L(526), L(527), L(528), L(529), L(530), L(531)];
	var aei = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aFQ = new Array(aei.length), this.dk = function() {
		var h = bm.buffer.data[155].value.split(";"),
			lr = h.length;
		if (function() {
				for (var fa = aei.length, aC = 0; aC < fa; aC++) ba.aFQ[aC] = aei[aC]
			}(), !(lr > aei.length))
			for (var aC = 0; aC < lr; aC++) h[aC].length && (this.aFQ[aC] = h[aC])
	}, this.aXA = function(eJ, code) {
		for (var aFQ = this.aFQ, aek = aei, sB = (aFQ[eJ] = code, ""), fa = aFQ.length, ael = [], aC = 0; aC < fa; aC++) ael.push(aFQ[aC] === aek[aC] ? "" : aFQ[aC]);
		fa--;
		for (aC = 0; aC < fa; aC++) sB += ael[aC] + ";";
		bm.qy.qz(155, sB += ael[fa])
	}, this.aX7 = function() {
		bm.qy.qz(155, ""), this.dk()
	}, this.ek = function(code, eJ) {
		return code === this.aFQ[eJ] || code === this.aFQ[eJ + 1]
	}
}

function de() {
	var aem = new Array(1),
		aen = new Array(1),
		aeo = 20,
		eY = 0,
		aep = !1;

	function aer() {
		aeo++, bs.play()
	}
	this.dk = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				aen[aC] = 0, aem[aC] = document.createElement("audio"), aem[aC].src = src, aem[aC].setAttribute("preload", "auto"), aem[aC].setAttribute("controls", "none"), aem[aC].style.display = "none", aem[aC].onpause = function() {
					aen[aC] = 1
				}, aem[aC].oncanplaythrough = function() {
					aen[aC] = 0 === aen[aC] ? 1 : aen[aC]
				}, document.body.appendChild(aem[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aep = !0
		}
	}, this.x8 = function() {
		if (aep) {
			aep = !1;
			for (var aC = 0; 0 <= aC; aC--) aem[aC].onpause = null, aem[aC].oncanplaythrough = null, u.removeChild(document.body, aem[aC]), aem[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bs.play()
	}), this.play = function() {
		if (aep) {
			var eb = performance.now();
			if (eY + 66 < eb)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === aen[aC]) return eY = eb, aen[aC] = 2, void aem[aC].play();
			0 < aeo && (aeo--, setTimeout(aer, 66))
		}
	}
}

function ce() {
	this.aBv = function() {
		var aeu;
		return !(am.lS < 3 || ah.hO[mX[0]] >= aE.kg >> 1) && (aE.iV ? 9 !== aE.lE && (aeu = af.aNs(), !(2 * af.aNt(bk.lV()) >= aeu)) : function() {
			if (8 === aE.lE) return !1;
			var aeu = af.aNs();
			if (2 * ah.hc[mX[0]] >= aeu) return !1;
			return !0
		}())
	}
}

function cE() {
	this.dk = function() {
		if (0 === aE.data.sResourcesType) {
			for (var adi = aE.kw, hc = ah.hc, aC = 0; aC < adi; aC++) hc[aC] = 512;
			var adj = aE.a0V,
				l9 = aF.l9,
				iK = aF.iK;
			for (aC = adi; aC < adj; aC++) hc[aC] = l9[iK[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fa = aE.a0V, hc = ah.hc, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fa; aC++) hc[aC] = sResourcesValue
		} : function() {
			for (var fa = aE.a0V, hc = ah.hc, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fa; aC++) hc[aC] = sResourcesData[aC]
		})();
		bg.nU[8] = ah.hc[aE.fK]
	}
}

function dV() {
	var aIg = 501,
		af0 = (this.aez = new Uint32Array(aIg), this.a71 = new Uint32Array(aIg), this.aF5 = new Uint16Array(aIg), this.aXI = 0, 1),
		xL = 0;

	function af3(self) {
		self.max.fill(0)
	}

	function af5(self, aC) {
		self.max[0] = Math.max(self.aez[aC], self.max[0]), self.max[1] = Math.max(self.a71[aC], self.max[1]), self.max[2] = Math.max(self.aF5[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.af1 = 0, this.nU = new Array(21), this.af2 = null, this.dl = function() {
		this.af2 = [L(532), L(533), L(534), L(535), L(536), L(537), L(538), L(539), L(358), L(359), L(540), L(541), L(542), L(543), "", L(544), L(545), L(546), L(316), L(547), L(548)]
	}, this.dk = function() {
		this.aXI = 0, af0 = 1, this.af1 = 0, xL = 0, af3(this), this.nU.fill(0)
	}, this.ru = function(player, jE) {
		bD.gw.a6v(player) && (this.nU[0] += jE + 1, this.nU[1]++, this.nU[12] += bR.g7[1])
	}, this.rP = function(player, r2) {
		__fx.donationsTracker.logDonation(player, r2, bR.g7[0], aX.a8b());
		player === aE.fK && (aO.rP(bR.g7[0], bR.g7[1], r2), this.nU[12] += bR.g7[1], this.nU[16] += bR.g7[0]), r2 === aE.fK && (aO.aAL(bR.g7[0], player), this.nU[10] += bR.g7[0])
	}, this.ry = function(player) {
		bD.gw.a6v(player) && (this.nU[2]++, this.nU[12] += bR.g7[1])
	}, this.s6 = function(player) {
		bD.gw.a6v(player) && (this.nU[19]++, this.nU[12] += bR.g7[1])
	}, this.adc = function(player) {
		bD.gw.a6v(player) && this.nU[20]++
	}, this.h0 = function(player, a7i, eJ) {
		bD.gw.a6v(player) && (this.nU[eJ] += a7i)
	}, this.ef = function() {
		var self;
		this.af1 || 0 < xL-- || ((self = this).aez[self.aXI] = ah.hO[aE.fK], self.a71[self.aXI] = ah.hc[aE.fK], self.aF5[self.aXI] = af.aF6(aE.fK), af5(self, self.aXI), self.aXI++, self.aXI === aIg && function(self) {
			af3(self), af5(self, 0), self.aXI = 1 + bO.g1(aIg, 2);
			for (var aC = 1; aC < self.aXI; aC++) self.aez[aC] = self.aez[2 * aC], self.a71[aC] = self.a71[2 * aC], self.aF5[aC] = self.aF5[2 * aC], af5(self, aC);
			af0 *= 2
		}(self), xL = af0 - 1, bh.nL(), 0 === ah.nY[aE.fK] && (self.af1 = bi.kt()))
	}
}

function dW() {
	this.j = 0, this.k = 0, this.ul = 0, this.um = 0, this.af7 = 0, this.af8 = 0, this.aC9 = 0, this.vS = 0;
	var afA = this.af9 = 0;
	this.afB = 0, this.afC = 0, this.afD = 0, this.aBU = 0, this.eJ = 0, this.aEg = null, this.iN = !1, this.afE = -1, this.afF = !1, this.afG = [0, 0], this.dl = function() {
		this.aEg = [L(549), L(129, 0, "Balance"), L(128, 0, "Interest"), L(550)]
	}, this.dk = function() {
		this.iN = !1, this.afE = -1, this.afF = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fd = a1.a2.im() && i.j < i.k ? 1 : a1.a2.im() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fd * this.j), this.j -= a1.a2.im() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.aBU = Math.floor(this.k / 150), this.aBU = Math.max(this.aBU, 1.5), this.ul = Math.floor(1 + .02 * this
			.j), this.um = Math.floor(1 + .04 * this.j), this.aC9 = this.um, afA = Math.floor(.75 * this.aC9), this.vS = Math.floor(1 + .075 * this.j), this.afB = Math.floor(1 + .1125 * this.j), this.afC = Math.floor(this.j * (a1.a2.im() ? .03 :
				.029)), this.afC = Math.max(this.afC, 4), this.afD = Math.floor(.035 * this.j), this.afD = Math.max(this.afD, 4), this.af9 = this.k - 2 * this.aC9 - this.vS - this.afB, this.iN && this.afH()
	}, this.ho = function(mB, mC) {
		var a0Y, a0X;
		return !!this.iN && (a0X = mB, a0Y = mC, mB -= bO.g1(i.j - this.j, 2), mC -= bO.g1(i.k - this.k, 2), mB < 0 || mC < 0 || mB >= this.j || mC >= this.k || mB >= this.j - this.afB && mC < this.afB ? -1 !== aN.ho(a0X, a0Y) || bF.ho(a0X,
			a0Y) || this.te() : mC < this.afB || (mC < this.k - this.vS ? (this.afF = !0, this.afE = (mB - 2 * this.ul - this.af7) / this.af8, 3 !== this.eJ && (bi.ds = !0)) : (a0X = (a0X = Math.floor(mB / (this.j / this.aEg.length))) < 0 ?
				0 : a0X >= this.aEg.length ? this.aEg.length - 1 : a0X) !== this.eJ && (this.eJ = a0X, this.afH(), bi.ds = !0)), !0)
	}, this.a4y = function(mB, mC) {
		return this.afG[0] = mB, this.afG[1] = mC, !(!this.iN || !this.afF || (mB -= bO.g1(i.j - this.j, 2), mC = this.afE, this.afE = (mB - 2 * this.ul - this.af7) / this.af8, (0 <= this.afE && this.afE <= 1 || 0 <= mC && mC <= 1) && (bi.ds = !
			0), 0))
	}, this.a5N = function() {
		this.afF && (this.afF = !1)
	}, this.a5Z = function() {
		this.iN ? this.te() : this.show()
	}, this.show = function() {
		bg.aXI < 2 || (this.iN = !0, this.afH())
	}, this.te = function() {
		this.iN = !1, this.afE = -1, bi.ds = !0
	}, this.afH = function() {
		this.eJ < 2 ? this.af7 = aR.measureText(bD.tR.a2h(bg.max[this.eJ]), bD.sU.uE(0, this.afC)) : 2 === this.eJ && (this.af7 = aR.measureText(bD.tR.a7b(6, 2), bD.sU.uE(0, this.afC))), this.af8 = this.j - 2 * this.ul - this.af7 - this.um
	}, this.nL = function() {
		this.iN && this.afH()
	}, this.y2 = function() {
		this.iN && this.aCR()
	}, this.aCR = function() {
		var fh = bO.g1(i.j - this.j, 2),
			fj = bO.g1(i.k - this.k, 2);
		y3.setTransform(1, 0, 0, 1, fh, fj), y3.fillStyle = bE.pP, y3.fillRect(0, this.afB, this.j, this.k - this.afB), this.afI(), this.aVy(), y3.strokeRect(0, 0, this.j, this.k), bD.sU.textAlign(y3, 2), y3.font = bD.sU.uE(0, this.afC), 0 ===
			this.eJ ? this.afJ(bg.aez, fh, fj) : 1 === this.eJ ? this.afJ(bg.a71, fh, fj) : 2 === this.eJ ? this.afK(fh, fj) : 3 === this.eJ && (this.afL(fh, fj), this.afM(fh, fj)), aN.a9R(Math.floor(fh + this.j - .725 * this.afB), Math.floor(
				fj + .275 * this.afB), Math.floor(.45 * this.afB)), y3.setTransform(1, 0, 0, 1, 0, 0)
	}, this.afI = function() {
		var aC, eb;
		for (y3.lineWidth = this.aBU, bD.sU.textBaseline(y3, 1), bD.sU.textAlign(y3, 1), y3.strokeStyle = bE.pS, y3.font = bD.sU.uE(1, this.afD), eb = this.j / this.aEg.length, y3.fillStyle = bE.po, y3.fillRect(this.eJ * eb, this.k - this.vS, eb,
				this.vS), y3.fillStyle = bE.pS, y3.fillRect(0, this.k - this.vS - .5 * this.aBU, this.j, this.aBU), aC = 1; aC <= 3; aC++) y3.fillRect(aC * eb, this.k - this.vS, this.aBU, this.vS);
		for (aC = this.aEg.length - 1; 0 <= aC; aC--) y3.fillText(bD.oy.a6V(this.aEg[aC], 0, .9 * eb), (aC + .5) * eb, this.k - .46 * this.vS)
	}, this.aVy = function() {
		y3.fillStyle = bE.qG, y3.fillRect(0, 0, this.j, this.afB), y3.fillStyle = bE.pS, y3.fillRect(0, this.afB - .5 * this.aBU, this.j, this.aBU), y3.font = bD.sU.uE(1, .39 * this.afB), y3.fillText(bD.oy.a6V(L(551), 0, .8 * this.j), Math.floor(
			this.j / 2), Math.floor(.55 * this.afB))
	}, this.afJ = function(h, fh, fj) {
		var lr = bg.max[this.eJ],
			a5q = (y3.setTransform(1, 0, 0, 1, fh + 2 * this.ul + this.af7, fj + this.aC9 + this.afB), y3.lineWidth = 2, this.af9 / Math.sqrt(lr));
		y3.beginPath(), y3.moveTo(this.af8, this.af9 - a5q * Math.sqrt(h[bg.aXI - 1]));
		for (var aC = bg.aXI - 2; 0 <= aC; aC--) y3.lineTo(aC * this.af8 / (bg.aXI - 1), this.af9 - a5q * Math.sqrt(h[aC]));
		y3.stroke();
		fh = this.a9R(h, a5q, .5);
		fh < .95 && y3.fillText(bD.tR.a2h(lr), -this.ul, 0), .05 < Math.abs(fh - .5) && y3.fillText(bD.tR.a2h(Math.floor(lr / 4)), -this.ul, Math.floor(this.af9 / 2)), .05 < fh && y3.fillText("0", -this.ul, this.af9)
	}, this.afK = function(fh, fj) {
		y3.setTransform(1, 0, 0, 1, fh + 2 * this.ul + this.af7, fj + this.aC9 + this.afB), y3.lineWidth = 2;
		var a5q = this.af9 / Math.max(bg.max[this.eJ], 1);
		y3.beginPath(), y3.moveTo(this.af8, this.af9 - a5q * bg.aF5[bg.aXI - 1]);
		for (var aC = bg.aXI - 2; 0 <= aC; aC--) y3.lineTo(aC * this.af8 / (bg.aXI - 1), this.af9 - a5q * bg.aF5[aC]);
		y3.stroke();
		fh = this.a9R(bg.aF5, a5q, 1), fj = bg.max[this.eJ] / 100;
		fh < .95 && y3.fillText(bD.tR.a7b(fj, 2), -this.ul, 0), .05 < Math.abs(fh - .5) && y3.fillText(bD.tR.a7b(fj / 2, 2), -this.ul, Math.floor(this.af9 / 2)), .05 < fh && y3.fillText(bD.tR.a7b(0, 2), -this.ul, this.af9)
	}, this.afL = function(fh, fj) {
		y3.setTransform(1, 0, 0, 1, fh + .34 * this.j, fj + 2 * afA + this.afB), bD.sU.textAlign(y3, 2);
		for (var aEO = this.k - 4 * afA - this.vS - this.afB, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) y3.fillText(bD.oy.a6V(bg.af2[h[aC]], 0, .31 * this.j), 0, aC * aEO / 9);
		var g2 = bg.nU;
		for (y3.setTransform(1, 0, 0, 1, fh + .39 * this.j, fj + 2 * afA + this.afB), bD.sU.textAlign(y3, 0), y3.fillText(bD.tR.a7b(100 * g2[0] / (1024 * Math.max(g2[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) y3.fillText(g2[h[aC]].toString(), 0,
			aC * aEO / 9);
		y3.fillText(bD.tR.a7b(100 * (1 - ah.hO[aE.fK] / g2[7]), 0), 0, aEO)
	}, this.afM = function(fh, fj) {
		y3.setTransform(1, 0, 0, 1, fh + .79 * this.j, fj + 2 * afA + this.afB), bD.sU.textAlign(y3, 2);
		var aC, aEO = this.k - 4 * afA - this.vS - this.afB;
		for (y3.fillStyle = bE.pj, aC = 2; 0 <= aC; aC--) y3.fillText(bD.oy.a6V(bg.af2[aC + 8], 0, .31 * this.j), 0, aC * aEO / 9);
		y3.fillText(bD.oy.a6V(bg.af2[18], 0, .31 * this.j), 0, 3 * aEO / 9), y3.fillStyle = bE.pi, y3.fillText(bD.oy.a6V(bg.af2[11], 0, .31 * this.j), 0, 4 * aEO / 9), y3.fillStyle = bE.q3, y3.fillText(bD.oy.a6V(bg.af2[13], 0, .31 * this.j), 0,
				5 * aEO / 9), y3.fillText(bD.oy.a6V(bg.af2[15], 0, .31 * this.j), 0, 6 * aEO / 9), y3.fillText(bD.oy.a6V(bg.af2[16], 0, .31 * this.j), 0, 7 * aEO / 9), y3.fillText(bD.oy.a6V(bg.af2[12], 0, .31 * this.j), 0, 8 * aEO / 9), y3
			.fillStyle = bE.q2, y3.fillText(bD.oy.a6V(bg.af2[17], 0, .31 * this.j), 0, aEO), y3.fillStyle = bE.pj;
		var g2 = bg.nU,
			aJ9 = g2[8] + g2[9] + g2[10] + g2[18],
			aJ9 = bD.tR.a2h(aJ9),
			aUj = y3.measureText(aJ9).width,
			fh = (y3.setTransform(1, 0, 0, 1, fh + .83 * this.j + aUj, fj + 2 * afA + this.afB), y3.fillText(bD.tR.a2h(g2[8]), 0, 0), y3.fillText(bD.tR.a2h(g2[9]), 0, aEO / 9), y3.fillText(bD.tR.a2h(g2[10]), 0, 2 * aEO / 9), y3.fillText(bD.tR
				.a2h(g2[18]), 0, 3 * aEO / 9), y3.fillStyle = bE.pi, y3.fillText(aJ9, 0, 4 * aEO / 9), y3.fillStyle = bE.q3, y3.fillText(bD.tR.a2h(g2[13]), 0, 5 * aEO / 9), y3.fillText(bD.tR.a2h(g2[15]), 0, 6 * aEO / 9), y3.fillText(bD.tR
				.a2h(g2[16]), 0, 7 * aEO / 9), y3.fillText(bD.tR.a2h(g2[12]), 0, 8 * aEO / 9), g2[12] + g2[13] + g2[15] + g2[16]);
		y3.fillStyle = bE.q2, y3.fillText(bD.tR.a2h(fh), 0, aEO), y3.fillStyle = bE.pS
	}, this.a9R = function(h, a5q, aD4) {
		var aC, e, gJ;
		return this.afE < 0 || 1 < this.afE ? .25 : (aC = this.afE * (bg.aXI - 1), gJ = h[e = Math.floor(aC)], gJ += (aC - e) * (h[e < bg.aXI - 1 ? e + 1 : e] - gJ), y3.strokeStyle = bE.pV, .04 < this.afE && this.afO(0, this.af9 - a5q * Math.pow(
				gJ, aD4), aC * this.af8 / (bg.aXI - 1), this.af9 - a5q * Math.pow(gJ, aD4)), .04 < gJ / bg.max[this.eJ] && this.afO(aC * this.af8 / (bg.aXI - 1), this.af9, aC * this.af8 / (bg.aXI - 1), this.af9 - a5q * Math.pow(gJ, aD4)), y3
			.fillStyle = bE.q5, y3.beginPath(), y3.arc(aC * this.af8 / (bg.aXI - 1), this.af9 - a5q * Math.pow(gJ, aD4), Math.max(2, .014 * this.k), 0, 2 * Math.PI), y3.fill(), h = this.afE * bi.aF7, h = 0 === ah.nY[aE.fK] ? Math.floor(h * bg
				.af1) : Math.floor(h * bi.kt()), y3.fillStyle = bE.pS, y3.fillText(1 === aD4 ? bD.tR.a7b(gJ / 100, 2) : bD.tR.a2h(Math.floor(gJ)), -this.ul, this.af9 - a5q * Math.pow(gJ, aD4)), bD.sU.textAlign(y3, 1), y3.fillText(aX.aEu(h),
				aC * this.af8 / (bg.aXI - 1), this.af9 + this.afC - (a1.a2.im() ? 2 : 0) - this.aBU), bD.sU.textAlign(y3, 2), a5q * Math.pow(gJ, aD4) / this.af9)
	}, this.afO = function(nz, o0, oC, oD) {
		y3.beginPath(), y3.moveTo(nz, o0), y3.lineTo(oC, oD), y3.stroke()
	}
}

function c2() {
	this.afP = "https://territorial.io/changelog", this.aXJ = "https://territorial.io/terms", this.aXK = "https://territorial.io/privacy", this.afQ = "https://territorial.io/tutorial", this.afR = "https://territorial.io/players", this.afS =
		"https://territorial.io/clans", this.afT = "https://territorial.io/clan-results", this.aTs = "https://patreon.com/c/territorial", this.aGO = "https://play.google.com/store/apps/details?id=territorial.io", this.a4X =
		"https://apps.apple.com/app/id1581110913", this.aGP = "https://discord.gg/pthqvpTXmh", this.aGQ = "https://www.instagram.com/davidtschacher/", this.a2F =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dE() {
	this.z = new afU, this.a1X = new afV, this.dk = function() {
		this.z.dk()
	}, this.ef = function() {
		0 !== this.z.w8 && this.z.w8--
	}
}

function afV() {
	this.y2 = function() {
		if (0 !== bS.z.w8 && (y3.globalAlpha = Math.min(bS.z.w8 / 580, 1), y3.drawImage(bS.z.afY, 1 + aT.a1V(), 1 + aT.a1W()), y3.globalAlpha = 1, aE.hz)) {
			for (var nz = jF / ip, o0 = jG / ip, oC = (i.j + jF) / ip, oD = (i.k + jG) / ip, h9 = bS.z.afZ * ip, afa = bS.z.afa, aC = aE.kw - 1; 0 <= aC; aC--) ! function(aC, h9, nz, o0, oC, oD, afa) {
				var highlight;
				0 === ah.nY[aC] || 0 === ah.hO[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (h9 *= 2), oC = i.j * ((ah.jU[aC] + ah.jV[aC] + 1) / 2 - nz) / (oC - nz) - .5 * h9, nz = i.k * ((ah.jW[
					aC] + ah.jX[aC] + 1) / 2 - o0) / (oD - o0) - .5 * h9, oC > i.j) || nz > i.k || oC < -h9 || nz < -h9 || (highlight ? y3.setTransform(2 * ip, 0, 0, 2 * ip, oC, nz) : y3.setTransform(ip, 0, 0, ip, oC, nz), y3.drawImage(
					afa[aE.iV ? bj.fY[aC] : 1], 0, 0))
			}(aC, h9, nz, o0, oC, oD, afa);
			y3.setTransform(ip, 0, 0, ip, 0, 0)
		}
	}
}

function afU() {
	this.afZ = 28, this.w8 = 0, this.afY = null;
	var afc = this.afa = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function afg(iX, afh) {
		var fh, fj, fM, iy, a6H = bD.sU.zp(iX, iX),
			ie = bD.sU.getContext(a6H, !0),
			ia = bD.sU.getImageData(ie, iX, iX),
			a00 = ia.data,
			lr = (iX >> 1) - .5,
			afi = .5 + lr;
		for (afi *= afi, fj = 0; fj < iX; fj++)
			for (fh = 0; fh < iX; fh++) iy = (iy = fh - lr) * iy + (iy = fj - lr) * iy, a00[fM = 4 * (fj * iX + fh)] = afh[0], a00[1 + fM] = afh[1], a00[2 + fM] = afh[2], a00[3 + fM] = (afi - iy) * afh[3] / afi;
		return ie.putImageData(ia, 0, 0), a6H
	}

	function aee(aC, ie, a6H, iX) {
		var highlight, fh, fj;
		0 !== ah.nY[aC] && 0 !== ah.hO[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (iX *= 2), fh = ah.jU[aC] + ah.jV[aC] + 1 - iX - 2 >> 1, fj = ah.jW[aC] + ah.jX[aC] + 1 - iX - 2 >> 1, highlight ? ie
			.drawImage(a6H[aE.iV ? 9 === aE.lE && 5 === aF.iK[aC] ? 3 : bj.fY[aC] : aC < aE.kw ? 1 : 0], fh, fj, iX, iX) : ie.drawImage(a6H[aE.iV ? 9 === aE.lE && 5 === aF.iK[aC] ? 3 : bj.fY[aC] : aC < aE.kw ? 1 : 0], fh, fj))
	}
	this.dk = function() {
		var tz;
		this.w8 = 700,
			function(tz) {
				var iX = tz.afZ;
				if (tz.afa = [], afc = [], aE.iV) {
					for (var aC = 0; aC <= aE.a0c; aC++) tz.afa.push(afg(iX, bj.acz[bj.lJ[aC]])), afc.push(afg(iX >> 1, bj.acz[bj.lJ[aC]]));
					9 === aE.lE && afc.push(afg(iX, bj.acz[1]))
				} else tz.afa.push(afg(iX, bj.acz[7])), tz.afa.push(afg(iX, bj.acz[4])), afc.push(afg(iX >> 1, bj.acz[7]))
			}(this),
			function(tz, afm) {
				var aC, afY = tz.afY,
					ie = bD.sU.getContext(afY, !0),
					fa = aE.fX,
					iX = tz.afZ >> 1;
				ie.imageSmoothingEnabled = !1, ie.setTransform(1, 0, 0, 1, 0, 0), afm && ie.clearRect(0, 0, afY.width, afY.height);
				if (9 === aE.lE) {
					iX <<= 1;
					tz = b0.lN[5];
					for (aC = fa - tz; aC < fa; aC++) aee(aC, ie, afc, iX);
					fa -= tz, iX >>= 1
				}
				for (aC = aE.kw; aC < fa; aC++) aee(aC, ie, afc, iX)
			}(this, null !== (tz = this).afY && tz.afY.width === bV.fl - 2 && tz.afY.height === bV.fm - 2 || (tz.afY = bD.sU.zp(bV.fl - 2, bV.fm - 2), !1)), aE.hz || this.a7t()
	}, this.ad0 = afg, this.a7t = function() {
		for (var fa = aE.kw, iX = this.afZ, afa = this.afa, ie = bD.sU.getContext(this.afY, !0), aC = 0; aC < fa; aC++) aee(aC, ie, afa, iX)
	}
}

function dF() {
	function afp() {
		8 === aE.lE && 1 === aE.a3O && bU.a32.a3N()
	}

	function afo(player) {
		aE.hz ? (al.aMB(player), am.aPd(), aE.lG && aE.rq.ef()) : b4.aGo(player)
	}
	this.rI = function(player) {
		aO.a3c(player, player === aE.fK ? 21 : 22), afo(player), afp()
	}, this.rn = function(player) {
		1 === aE.a3O && 0 !== ah.nY[player] && 2 !== ah.a6r[player] && afo(player), aE.a3R--, aE.a3Q--, aO.a3c(player, 4), bD.gw.hm(2) && aX.nK(!0), afp()
	}
}

function dP() {
	this.aZf = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aEL = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.pS, "rgb(170,170,170)"
	], this.afq = [bE.pS, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.pS, bE.pJ], this.afr = [bE.pJ, bE.pS, bE.pS, bE.pS, bE.pJ, bE.pJ, bE.pJ, bE.pJ, bE.pS];
	var aPn = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aP6 = ["rgba(" + aPn[0] + ",", "rgba(" + aPn[1] + ",", "rgba(" + aPn[2] + ",", "rgba(" + aPn[3] + ",", "rgba(" + aPn[4] + ",", "rgba(" + aPn[5] + ",", "rgba(" + aPn[6] + ",", "rgba(" + aPn[7] + ",", "rgba(" + aPn[8] + ",", "rgba(" + aPn[9] +
			","
		], this.aP7 = ["rgb(" + aPn[0] + ")", "rgb(" + aPn[1] + ")", "rgb(" + aPn[2] + ")", "rgb(" + aPn[3] + ")", "rgb(" + aPn[4] + ")", "rgb(" + aPn[5] + ")", "rgb(" + aPn[6] + ")", "rgb(" + aPn[7] + ")", "rgb(" + aPn[8] + ")", "rgb(" + aPn[9] +
			")"
		], this.a3l = null, this.acz = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aVA = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lJ = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fY = new Uint8Array(aE.fX), this.aEM = new Uint8Array(aE.fX), this.a0i = new Uint16Array(aE.fX), this.a0j = new Uint16Array(this.lJ.length + 1), this.a0k = new Uint16Array(this.lJ.length), this
		.dl = function() {
			this.a3l = [L(552), L(553), L(554), L(555), L(556), L(557), L(558), L(559), L(560)]
		}, this.dk = function() {
			if (this.fY.fill(0), this.aEM.fill(0), this.afs(), aE.iV) {
				if (9 === aE.lE) {
					for (var fY = bj.fY, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fY[aC] = 1;
					var fa = aE.fX;
					for (aC = aE.data.teamPlayerCount[7]; aC < fa; aC++) fY[aC] = 2;
					bj.lJ[1] = 7, bj.lJ[2] = 8
				} else aE.lG ? function() {
					var aVA = bj.aVA,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.kw - 1; 0 <= aC; aC--) colorsData[aC] = az.kD(262144);
					var ag3 = 0,
						fq = 768,
						aV9 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fd = 0, fu = 0; fu < 3; fu++) fd += Math.abs(aVA[aC][fu] - aV9[fu]);
							fd < fq && (ag3 = aC, fq = fd)
						} var ag4 = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) ag4[aC] = teamPlayerCount[aC];
					var lJ = bj.lJ,
						ag5 = new Uint8Array(9),
						h3 = (lJ[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) ag4[aC] && (ag5[aC] = h3, lJ[h3++] = aC);
					var kC = aE.kw,
						fY = bj.fY;
					ag4[ag3] ? (ag4[ag3]--, fY[0] = ag5[ag3]) : kC = 0;
					var ek = 0;
					for (aC = kC; aC < aE.a0V; aC++) {
						var iT = lJ[ek];
						if (ag4[iT]) ag4[iT]--, fY[aC] = ag5[iT];
						else if (aC--, 9 <= ++ek) return console.log("error 325")
					}
				}() : this.ef();
				! function() {
					for (var fa = aE.fX, a0i = bj.a0i, a0j = bj.a0j, a0k = bj.a0k, fY = bj.fY, lJ = bj.lJ, a0b = lJ.length, buffer = new Array(a0b), aC = 0; aC < a0b; aC++) buffer[aC] = [];
					for (aC = 0; aC < fa; aC++) buffer[lJ[fY[aC]]].push(aC);
					for (aC = 1; aC <= a0b; aC++) a0j[aC] = a0j[aC - 1] + buffer[aC - 1].length;
					for (aC = 0; aC < a0b; aC++)
						for (var h3 = buffer[aC].length, lr = a0j[aC], iT = 0; iT < h3; iT++) a0i[iT + lr] = buffer[aC][iT];
					var kw = aE.kw;
					for (aC = 0; aC < a0b; aC++)
						for (h3 = buffer[aC].length, lr = a0j[aC], iT = 0; iT < h3; iT++)
							if (a0i[iT + lr] >= kw) {
								a0k[aC] = iT;
								break
							}
				}(), ! function() {
					for (var fa = aE.fX, fY = bj.fY, aEM = bj.aEM, lJ = bj.lJ, aC = 0; aC < fa; aC++) aEM[aC] = lJ[fY[aC]];
					9 === aE.lE && aEM.fill(1, fa - b0.lN[5])
				}()
			}
		}, this.afs = function() {
			for (var aC = this.lJ.length - 1; 0 <= aC; aC--) this.lJ[aC] = aC
		}, this.ef = function() {
			var a2W = new Uint8Array(aE.kw),
				a2X = new Uint8Array(aE.kw),
				afx = new Uint16Array(8),
				afy = new Uint16Array(this.lJ.length);
			this.afz(a2W, a2X, afx, 1), this.aLh(afx), this.ag0(afy, a2W, a2X), this.ag1(a2W, a2X, afy), this.ag2()
		}, this.afz = function(a2W, a2X, ag4, ag6) {
			for (var fu, e, ag7, fa = this.lJ.length - ag6, h = new Uint16Array(fa), aVA = this.aVA, colorsData = aE.data.colorsData, aC = aE.kw - 1; 0 <= aC; aC--) {
				for (fu = fa; ag6 <= fu; fu--) h[fu - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aVA[fu][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aVA[fu][1]) + Math.abs(4 * (63 & colorsData[aC]) - aVA[fu][2]);
				for (ag7 = 768, fu = fa - 1; 0 <= fu; fu--) h[e = (fu + aC) % fa] < ag7 && (ag7 = h[e], a2W[aC] = e);
				for (ag4[a2W[aC]] += 4, ag7 = 768, fu = fa - 1; 0 <= fu; fu--) h[e = (fu + aC) % fa] < ag7 && e !== a2W[aC] && (ag7 = h[e], a2X[aC] = e);
				ag4[a2X[aC]]++
			}
		}, this.aLh = function(ag4) {
			for (var fu, lt, fa = this.lJ.length - 1, aC = fa; 0 <= aC; aC--) this.lJ[aC] = aC;
			for (aC = fa - 1; 0 <= aC; aC--) ag4[aC]++;
			for (aC = 1; aC <= fa; aC++) {
				for (lt = 0, fu = 1; fu < fa; fu++) ag4[fu] > ag4[lt] && (lt = fu);
				ag4[lt] = 0, this.lJ[aC] = lt + 1
			}
		}, this.ag0 = function(afy, a2W, a2X) {
			var fu, a4A, ek, fd, e, oB, v2, ag8 = this.lJ.length - 1,
				sx = new Uint16Array(ag8),
				ag9 = [],
				agA = 0,
				a49 = [],
				agB = [];
			loop: for (var aC = 0; aC < aE.kw; aC++)
				if (null !== (a4A = bD.tR.a4B(ah.a48[aC]))) {
					for (fu = a49.length - 1; 0 <= fu; fu--)
						if (a4A === a49[fu]) {
							agB[fu].push(aC), agA = Math.max(agA, agB[fu].length);
							continue loop
						} a49.push(a4A), ag9.push(!1), agB.push([aC]), agA = Math.max(agA, 1)
				}
			for (; 2 < aE.a0c && agA > bO.g1(aE.kw, aE.a0c);) aE.a0c--, aE.lE--;
			for (fu = a49.length - 1; 0 <= fu; fu--) {
				for (fd = -1, ek = a49.length - 1; 0 <= ek; ek--) !ag9[ek] && (-1 === fd || agB[ek].length > agB[fd].length) && (fd = ek);
				for (ek = ag8 - 1; 0 <= ek; ek--) sx[ek] = 1;
				for (ek = agB[fd].length - 1; 0 <= ek; ek--) sx[a2W[agB[fd][ek]]] += 3, sx[a2X[agB[fd][ek]]]++;
				for (aC = ag8 - 1; 0 <= aC; aC--) {
					for (e = fd % ag8, ek = ag8 - 1; 0 <= ek; ek--) sx[ek] > sx[e] && (e = ek);
					for (oB = -1, ek = aE.a0c; 0 < ek; ek--)
						if (this.lJ[ek] === e + 1) {
							oB = ek;
							break
						} if (sx[e] = 0, -1 !== oB) {
						for (v2 = 0, ek = aE.a0c; 0 < ek; ek--) afy[oB] > afy[ek] && v2++;
						if (v2 !== aE.a0c - 1) {
							for (ek = agB[fd].length - 1; 0 <= ek; ek--) afy[oB]++, this.fY[agB[fd][ek]] = oB;
							break
						}
					}
				}
				ag9[fd] = !0
			}
		}, this.ag1 = function(a2W, a2X, afy) {
			for (var aC, ix, fa = this.lJ.length - 1, border = bO.g1(aE.kw, aE.a0c), agC = (0 < aE.kw % aE.a0c && border++, new Uint8Array(1 + fa)), fu = fa; 1 <= fu; fu--) agC[this.lJ[fu]] = fu;
			for (aC = 0; aC < aE.kw; aC++) ix = agC[a2W[aC] + 1], 0 === this.fY[aC] && ix <= aE.a0c && afy[ix] < border && (afy[ix]++, this.fY[aC] = ix);
			for (aC = 0; aC < aE.kw; aC++) ix = agC[a2X[aC] + 1], 0 === this.fY[aC] && ix <= aE.a0c && afy[ix] < border && (afy[ix]++, this.fY[aC] = ix);
			for (fu = aE.a0c; 1 <= fu; fu--)
				for (aC = aE.kw - 1; 0 <= aC && !(afy[fu] >= border); aC--) 0 === this.fY[aC] && (afy[fu]++, this.fY[aC] = fu)
		}, this.ag2 = function() {
			if (aE.a0c < 8) aE.a0c++, aE.lE++, aE.a0d = 1;
			else
				for (var aC = aE.kw; aC < aE.fX; aC++) this.fY[aC] = 1 + aC % aE.a0c
		}
}

function dh() {
	this.hP = function() {
		for (var fh, fj, aC = gW - 1; 0 <= aC; aC--) fh = bO.g1(gY[aC], 4) % bV.fl, fj = bO.g1(gY[aC], 4 * bV.fl), ah.jU[gR] = Math.min(fh, ah.jU[gR]), ah.jW[gR] = Math.min(fj, ah.jW[gR]), ah.jV[gR] = Math.max(fh, ah.jV[gR]), ah.jX[gR] = Math
			.max(fj, ah.jX[gR])
	}, this.gk = function() {
		var fd, h8, aC, fa = ah.h2[gR].length,
			fc = ad.fc;
		loop: for (aC = fa - 1; 0 <= aC; aC--) {
			for (fd = 3; 0 <= fd; fd--)
				if (h8 = ah.h2[gR][aC] + fc[fd], ad.fR(h8) || ad.hA(h8) && ad.fS(h8) !== gR) {
					ad.k8(ah.h2[gR][aC], gR);
					continue loop
				} ah.h2[gR][aC] = ah.h2[gR][fa - 1], ah.h2[gR].pop(), fa--
		}
	}, this.gl = function() {
		var player = gR,
			hG = ah.hG,
			hH = ah.hH,
			fz = ah.fz,
			fa = hG[player].length,
			fc = ad.fc;
		loop: for (var aC = fa - 1; 0 <= aC; aC--) {
			for (var agD = !1, agE = !1, fd = 3; 0 <= fd; fd--) {
				var h8 = hG[player][aC] + fc[fd];
				if (ad.aLr(h8, player)) continue loop;
				agD = agD || ad.is(h8), agE = agE || ad.aLq(h8)
			}
			agD ? hH[player].push(hG[player][aC]) : agE ? fz[player].push(hG[player][aC]) : ad.a14(hG[player][aC], player), hG[player][aC] = hG[player][fa - 1], hG[player].pop(), fa--
		}
	}, this.hE = function() {
		ah.hO[gV] -= gW
	}, this.hF = function(border) {
		for (var fa = border.length, aC = fa - 1; 0 <= aC; aC--) ad.a1P(gV, border[aC]) || (border[aC] = border[fa - 1], border.pop(), fa--)
	}, this.hI = function(border) {
		for (var fa = border.length, aC = fa - 1; 0 <= aC; aC--) !ad.a1P(gV, border[aC]) && ad.fV(border[aC]) && (border[aC] = border[fa - 1], border.pop(), fa--)
	}, this.hJ = function(border) {
		for (var fd, h8, fa = border.length, fc = ad.fc, aC = fa - 1; 0 <= aC; aC--)
			for (fd = 3; 0 <= fd; fd--)
				if (h8 = border[aC] + fc[fd], ad.aLr(h8, gV)) {
					ah.hG[gV].push(border[aC]), border[aC] = border[fa - 1], border.pop(), fa--;
					break
				}
	}, this.hK = function() {
		for (var fd, h8, fc = ad.fc, aC = gW - 1; 0 <= aC; aC--)
			for (fd = 3; 0 <= fd; fd--) h8 = gY[aC] + fc[fd], ad.a1S(gV, h8) && ad.aLx(h8) && (ah.hG[gV].push(h8), ad.h5(h8, gV))
	}, this.hL = function() {
		var fh, fj;
		loop: for (; ah.jW[gV] < ah.jX[gV];) {
			for (fh = ah.jV[gV]; fh >= ah.jU[gV]; fh--)
				if (ad.a1P(gV, 4 * (ah.jW[gV] * bV.fl + fh))) break loop;
			ah.jW[gV]++
		}
		loop: for (; ah.jW[gV] < ah.jX[gV];) {
			for (fh = ah.jV[gV]; fh >= ah.jU[gV]; fh--)
				if (ad.a1P(gV, 4 * (ah.jX[gV] * bV.fl + fh))) break loop;
			ah.jX[gV]--
		}
		loop: for (; ah.jU[gV] < ah.jV[gV];) {
			for (fj = ah.jX[gV]; fj >= ah.jW[gV]; fj--)
				if (ad.a1P(gV, 4 * (fj * bV.fl + ah.jU[gV]))) break loop;
			ah.jU[gV]++
		}
		loop: for (; ah.jU[gV] < ah.jV[gV];) {
			for (fj = ah.jX[gV]; fj >= ah.jW[gV]; fj--)
				if (ad.a1P(gV, 4 * (fj * bV.fl + ah.jV[gV]))) break loop;
			ah.jV[gV]--
		}
	}, this.fT = function(player, k5) {
		return 0 === bj.fY[player] || bj.fY[player] !== bj.fY[k5]
	}, this.i7 = function(player) {
		for (var aC, h9, fa = ah.hG[player].length, fc = ad.fc, fd = 3; 0 <= fd; fd--)
			for (h9 = fc[fd], aC = 0; aC < fa; aC++)
				if (ad.fR(ah.hG[player][aC] + h9)) return !0;
		return !1
	}, this.aM7 = function(player) {
		for (var aC, h9, fa = ah.hG[player].length, fc = ad.fc, fd = 3; 0 <= fd; fd--)
			for (h9 = fc[fd], aC = 0; aC < fa; aC++)
				if (ad.k7(ah.hG[player][aC]) && ad.fR(ah.hG[player][aC] + h9)) return !0;
		return !1
	}, this.iA = function(a6x, a6y) {
		for (var aC, eb, h9, h8, adi = ah.hG[a6x].length, adj = ah.hG[a6y].length, fc = (adj < adi && (eb = a6x, a6x = a6y, a6y = eb, eb = adi, adi = adj, 0), ad.fc), fd = 3; 0 <= fd; fd--)
			for (h9 = fc[fd], aC = 0; aC < adi; aC++)
				if (h8 = ah.hG[a6x][aC] + h9, ad.hA(h8) && ad.fS(h8) === a6y) return !0;
		return !1
	}, this.aM8 = function(a6x, a6y) {
		for (var aC, h9, h8, adi = ah.hG[a6x].length, fc = ad.fc, fd = 3; 0 <= fd; fd--)
			for (h9 = fc[fd], aC = 0; aC < adi; aC++)
				if (ad.k7(ah.hG[a6x][aC]) && (h8 = ah.hG[a6x][aC] + h9, ad.hA(h8)) && ad.fS(h8) === a6y) return !0;
		return !1
	}
}

function db() {
	this.rz = new agF
}

function agF() {
	this.iD = function(player) {
		bD.gw.a6s(player) && aO.a1s(80, L(561), 637, 0, bE.qJ, bE.pP, -1, !1)
	}, this.iG = function(player) {
		bD.gw.a6s(player) && aO.a1s(80, L(562), 637, 0, bE.qJ, bE.pP, -1, !1)
	}
}

function agG() {
	this.agH = 0, this.ef = function() {
		aP.ef(), aa.ef(), i.ef(), b1.z.ef(), ay.aLC(), bX.eT.ef(), bq.wK.ef(), bi.ds && (bi.ds = !1, ab.y2())
	}
}

function agI() {
	this.ea = bi.ea, this.eJ = 0, this.agH = 0, this.aLA = 0, this.agJ = null, this.agK = 7, this.agL = 0, this.dk = function() {
		this.aLA = 0, this.agJ = [], this.eJ = 0, this.agH = 0
	}, this.aYc = function(aD) {
		if (aE.hz) this.aF8(aD);
		else if (this.agJ.push(aD), 2 === aE.a3O) {
			for (var aC = 0; aC < this.agJ.length; aC++) bB.qs.ef(this.agJ[aC]);
			this.agJ = []
		}
	}, this.aF8 = function(aD) {
		2 !== aE.a3O && (bB.qs.ef(aD), bC.ef(), aX.aF8(this.aLA), this.aLA === aE.a7z ? (aE.rq.ef(), this.aLA = 0, this.eJ = 0, this.agH = 0, this.ea = bi.ea) : (this.aLA++, ag.a7s(), ag.nK(!0), be.render()))
	}, this.ef = function() {
		i.ef(), aE.hz ? (bi.ds = aX.aF8(-1) || bi.ds, nM()) : (0 !== this.eJ || bi.ea >= this.ea && (this.ea += bi.aF7 * Math.floor(1 + (bi.ea - this.ea) / bi.aF7), 2 === aE.a3O ? n8() : this.agM(), this.eJ++, 27 < bi.ea - this.agL)) && this
		.agN(), nH(), bi.ds && (bi.ds = !1, a1T()), this.agL = bi.ea
	}, this.agN = function() {
		bi.ds = !0, nJ(), this.eJ = 0
	}, this.agM = function() {
		var yq, aC;
		if (this.agH !== 7 * this.aLA) nC(), be.render();
		else {
			yq = !1;
			loop: for (; this.agO() && (yq = !0, nC(), 2 !== aE.a3O) && 0 < this.agJ.length;)
				for (aC = this.agK - 2; 0 <= aC; aC--)
					if (nC(), 2 === aE.a3O) break loop;
			yq ? be.render() : (n8(), be.a7v())
		}
	}, this.agO = function() {
		return 0 < this.agJ.length && (this.aLA++, bB.qs.ef(this.agJ[0]), this.agJ.shift(), !0)
	}
}

function agP() {
	var agQ, agR, agS, aLA, agT, eJ = 0,
		ea = bi.ea;

	function agW() {
		! function() {
			if (!aE.hz) return;
			if (aE.lG) return;
			if (2 !== aE.a3O)
				if (agT % 7 != 0) agT++;
				else if (aLA === aE.a7z) {
				if (!agZ()) return;
				aX.aF8(aLA), aE.rq.ef()
			} else {
				if (!agZ()) return;
				agT++, aLA++, ag.a7s(), ag.nK(!0)
			}
			return 1
		}() && agZ() && nC()
	}

	function agX() {
		eJ = 0, (aE.hz ? (bi.ds = aX.aF8(aLA - (agT % 7 == 0 ? 0 : 1) + agT % 7 / 7) || bi.ds, nM) : aN.hl || !bF.a8N ? nM : (bi.ds = !0, nJ))()
	}

	function agZ() {
		var aC, fa, aga = bC.ro.aaB,
			gJ = bC.ro.aaC,
			gL = bC.ro.aaD,
			gN = bC.ro.aaE,
			agb = bC.ro.aaF,
			agc = bC.ro.aaG;
		if (!(agQ >= agc.length)) {
			if (agc = agc[agQ], agb[agQ]) {
				for (fa = agR + agc, aC = agR; aC < fa; aC++) bB.qs.rd(aga[aC], gJ[aC], gL[aC], gN[aC]);
				agR += agc, agQ++
			} else ++agS >= agc && (agQ++, agS = 0);
			return __fx.replay.tick++, 1
		}
		aO.a4k("Replay file smaller than expected."), bF.a5a(!1), aE.a3O = 2
	}
	this.agH = 0, this.dk = function() {
		agT = aLA = agS = agR = agQ = 0, __fx.replay.registerHooks({
			advance: () => agW(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.ds = !0
			},
			isEnded: () => 2 === aE.a3O,
			getTickInterval: () => bi.aF7
		})
	}, this.ef = function() {
		var ae8;
		i.ef(), __fx.replay.frame() ? n8() : bF.aCL() < 1.7 ? 0 === eJ ? bi.ea >= ea && (ae8 = bi.aF7 / bF.aCL(), ea += ae8 * Math.floor(1 + (bi.ea - ea) / ae8), 2 === aE.a3O || aN.hl || !bF.a8N ? n8() : (agW(), be.render()), eJ++) : agX() :
			function() {
				var ae8;
				if (bi.ea >= ea)
					if (2 === aE.a3O || aN.hl || !bF.a8N) n8(), ea = bi.ea;
					else {
						for (ae8 = bi.aF7 / bF.aCL(), 16 < (bi.ea - ea) / ae8 && (ea = bi.ea - 16 * ae8); bi.ea >= ea && 2 !== aE.a3O;) ea += ae8, agW();
						be.render()
					} agX()
			}(), nH(), bi.ds && (bi.ds = !1, a1T())
	}, this.a3Z = function() {
		bC.ro.aaG.length - agQ <= 2 || aO.a4k("Replay file larger than expected.")
	}
}

function agd() {
	var eJ = 0,
		ea = bi.ea;
	this.agH = 0, this.ef = function() {
		i.ef(), aE.hz ? nM() : 0 === eJ ? bi.ea >= ea && (ea += bi.aF7 * Math.floor(1 + (bi.ea - ea) / bi.aF7), 2 === aE.a3O || aN.hl ? n8() : (nC(), be.render()), eJ++) : ((aN.hl ? nM : (bi.ds = !0, nJ))(), eJ = 0), nH(), bi.ds && (bi.ds = !1,
			a1T())
	}
}

function dX() {
	this.a3Y = null, this.ds = !1, this.ea = 0, this.aF7 = 56;
	var age = 0;

	function agf() {
		bi.ea = age = performance.now(), bi.a3Y.ef(), window.requestAnimationFrame(agf)
	}
	this.dk = function() {
		this.a8K(), window.requestAnimationFrame(agf), this.ea = performance.now()
	}, this.a8C = function() {
		aE.hj ? (this.a3Y = new agP, this.a3Y.dk()) : aE.lG ? this.a3Y = new agd : (this.a3Y = new agI, this.a3Y.dk())
	}, this.a8K = function() {
		this.a3Y = new agG, this.ds = !0
	}, this.ef = function() {
		this.a3Y.agH++
	}, this.kt = function() {
		return this.a3Y.agH
	}, this.aYI = function() {
		var eb = performance.now();
		eb < age + 1e3 || (this.ea = eb, this.a3Y.ef())
	}
}

function cx() {
	var aKZ = 0,
		agg = !0;
	this.ef = function() {
		var eb, aAm;
		bi.ea < aKZ || (aKZ = bi.ea + 3e3, aE.hj) || aE.lG || bD.gw.hn(aE.fK) || (eb = new Date, aAm = eb.getUTCSeconds(), agg ? aAm < 43 && (agg = !1) : aAm < 43 || (aKZ += 52e3, agg = !0, aAm = (eb.getUTCMinutes() + 2) % 60, eb = aE.lE < 7 ?
			0 : 8 === aE.lE ? 2 : 9 === aE.lE ? 3 : 1, aP.aAb(eb, aAm) && (aAm = eb, aAm = [L(563), L(564), L(565), L(566)][aAm], aO.aAC(aAm))))
	}
}

function cr() {
	var nz, o0, oC, oD, agi = 0,
		agj = 0;

	function agl() {
		return Math.pow(Math.pow(oC - nz, 2) + Math.pow(oD - o0, 2), .5)
	}

	function agk(e) {
		nz = i.l * e.touches[0].clientX, o0 = i.l * e.touches[0].clientY, oC = i.l * e.touches[1].clientX, oD = i.l * e.touches[1].clientY
	}
	this.a52 = function(e) {
		return 1 < e.touches.length ? (agj = bi.ea, agi = 3, agk(e), aM.te(), !0) : (agi = 0, !1)
	}, this.a53 = function(e) {
		var aN2, iv, iw;
		return 0 !== aE.a3O && 1 < e.touches.length && (agi = Math.max(agi - 1, 0), aI.oH() && (aN2 = agl(), agk(e), e = agl(), iv = Math.floor((nz + oC) / 2), iw = Math.floor((o0 + oD) / 2), aT.aCm(iv, iw, Math.max(.125, e) / Math.max(.125,
			aN2)), bi.ds = !0), !0)
	}, this.a5Q = function() {
		var fh, fj;
		return !!(agi && (agi = 0, bi.ea < agj + 500)) && (fh = (nz + oC) / 2, fj = (o0 + oD) / 2, aM.a5K(fh, fj), aM.click(fh, fj, !0) && (bi.ds = !0), !0)
	}
}

function d8() {
	this.size = 0, this.eJ = 0, this.aD = null, this.dk = function(aD) {
		this.eJ = 0, this.aD = aD, this.size = aD.length
	}, this.x8 = function() {
		this.aD = null
	}, this.rc = function(size) {
		for (var g2 = 0, aD = this.aD, oH = this.eJ + size - 1, aC = this.eJ; aC <= oH; aC++) g2 |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << oH - aC;
		return this.eJ += size, this.eJ > 8 * this.size && console.error("Unwrapper Overflow"), g2
	}, this.aYk = function(size) {
		var fu = size >> 1;
		return (1 << fu) * this.rc(size - fu) + this.rc(fu)
	}, this.aYl = function(agm) {
		return this.size === bG.aYj(agm)
	}, this.aaT = function(a0H, agn, ago) {
		var h3 = this.rc(a0H);
		if (!h3) return null;
		for (var a0H = Math.max(h3, ago), h = new(agn <= 8 ? Uint8Array : agn <= 16 ? Uint16Array : Uint32Array)(a0H), aC = 0; aC < h3; aC++) h[aC] = this.rc(agn);
		ago = h[h3 - 1];
		return ago && h.fill(ago, h3), h
	}, this.aaU = function(a0H, agp, ago) {
		var h3 = this.rc(a0H);
		if (!h3) return null;
		for (var a0H = Math.max(h3, ago), h = new Array(a0H), aC = 0; aC < h3; aC++) h[aC] = this.aaR(agp);
		return h.fill(h[h3 - 1], h3), h
	}, this.aaR = function(a0H) {
		return bJ.zQ.zU(this.rc(a0H))
	}, this.aaS = function() {
		var a2f = this.rc(30);
		if (!(6 * a2f > 8 * this.size - this.eJ)) {
			var sB = bI.f1.ui(bI.f1.uj(a2f)),
				sB = bD.tR.a7n(sB, "_", "/");
			sB = bD.tR.a7n(sB, "-", "+");
			for (var agq = "";
				(sB.length + agq.length) % 4;) agq += "=";
			sB = "data:image/png;base64," + sB + agq;
			var aMe = new Image;
			aMe.onload = function() {
				bC.aNb.aNc(aMe), aMe.onload = null, aMe = null
			}, aMe.src = sB
		}
	}
}

function dR() {
	this.abV = 0, this.abW = 0, this.abR = 0, this.abS = 0, this.abT = 0, this.abU = 0, this.aFi = [0, 0, 0, 0], this.oG = function() {
		this.abV = aT.a1V(), this.abW = aT.a1W(), this.abR = -this.abV, this.abS = -this.abW, this.abT = i.j / ip, this.abU = i.k / ip, this.aFi[0] = Math.floor(this.abR), this.aFi[1] = Math.floor(this.abS), this.aFi[2] = Math.floor(this.aFi[0] +
			this.abT + 1), this.aFi[3] = Math.floor(this.aFi[1] + this.abU + 1), be.aFg = !0
	}
}

function cs() {
	var aBQ, nl;
	this.dk = function() {
		aBQ = 1, nl = 0
	}, this.ef = function() {
		0 < aBQ && (nl = 0 === nl ? bi.ea + 16 : nl, aBQ = (aBQ -= .001 * (bi.ea - nl)) < 0 ? 0 : aBQ, nl = bi.ea, bi.ds = !0)
	}, this.y2 = function() {
		0 < aBQ && (y3.fillStyle = "rgba(0,0,0," + aBQ + ")", y3.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eJ = 0, this.aD = null, this.dk = function(aD) {
		this.eJ = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(agm) {
		return this.dk(new Uint8Array(this.aYj(agm))), this.aD
	}, this.x8 = function() {
		this.aD = null
	}, this.a9 = function(size, aAo) {
		for (var aD = this.aD, oH = this.eJ + size - 1, aC = this.eJ; aC <= oH; aC++) aD[aC >> 3] |= (aAo >> oH - aC & 1) << 7 - (7 & aC);
		this.eJ += size, this.eJ > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aYi = function(size, aAo) {
		var fu = size >> 1,
			fd = 1 << fu;
		this.a9(size - fu, bO.g1(aAo, fd)), this.a9(fu, aAo % fd)
	}, this.agt = function(size) {
		for (var aD = this.aD, oH = this.eJ + size, aC = this.eJ; aC < oH; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.aYj = function(agm) {
		return agm + 7 >> 3
	}, this.agu = function(h, kC, oH, agv) {
		for (var aC = kC; aC < oH; aC++) this.a9(agv, h[aC])
	}
}

function d7() {
	this.dk = function() {
		this.h = [], this.eJ = 0
	}, this.aZA = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(agw, value) {
		for (var h = this.h, oH = this.eJ + agw - 1, agx = 1 + (oH >> 3); h.length < agx;) h.push(0);
		for (var aC = this.eJ; aC <= oH; aC++) h[aC >> 3] |= (value >> oH - aC & 1) << 7 - (7 & aC);
		this.eJ += agw
	}, this.dr = function(h, a0H, agn) {
		var agy = bD.sc.a6B(h);
		this.a9(a0H, agy);
		for (var aC = 0; aC < agy; aC++) this.a9(agn, h[aC])
	}, this.aal = function(h, a0H, agp) {
		var agy = bD.sc.a6B(h);
		this.a9(a0H, agy);
		for (var aC = 0; aC < agy; aC++) this.aaj(h[aC], agp)
	}, this.aaj = function(sB, a0H) {
		var fa = sB.length;
		this.a9(a0H, fa);
		for (var aC = 0; aC < fa; aC++) this.a9(16, sB.charCodeAt(aC))
	}, this.aak = function(a6H) {
		var agz = (a6H = a6H.toDataURL()).split(",");
		if (agz.length < 2) console.log("error 266");
		else {
			a6H = bD.tR.a7n(a6H = agz[agz.length - 1], "/", "_"), a6H = bD.tR.a7n(a6H, "\\+", "-");
			var a6H = bD.tR.a7n(a6H, "=", ""),
				zd = bJ.f1.za(a6H),
				fa = zd.length;
			this.a9(30, fa);
			for (var aC = 0; aC < fa; aC++) this.a9(6, zd[aC])
		}
	}
}
a(), self.aiCommand746 = function(g2) {
	0 === g2 ? bx() : 1 !== g2 || !a1 || 1 !== a1.id || a1.e4 < 14 || bM.g3()
}, setTimeout(bx, 1e4), window.onload = function() {
	bx()
};