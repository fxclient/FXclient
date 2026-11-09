var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, bw, gQ, gR, gS, gT, gU, gV, gW, gX, gY, gZ, ga, gb, gc,
	io, jE, jF, aBQ, mW, kg, a4r, xz, a1U, aFV, a82, a83, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "<br>", "0.8em", "rgb(", "center", "auto", "hidden", "rgba(", "   ", "flex", "span", "1em", "0.5em", "email",
		"Data", "50%", " / ", "territorial.io", "click", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "function", "undefined", "pointer", "middle",
		"break-word", "bold", "Escape", "0.6em", "0.4em", "underline", "text", "scroll", "nowrap", "inline-block", "button", "Value", "Player ", "Enter", "20%", "1.5em", "' target='_blank'>", "🔄 Reload", "translate(-50%, -50%)", "string",
		"rgba(0,0,0,0.8)", "pre-wrap", "orange", "number", "mouseleave", "left", "keydown", "https://", "game.territorial.io", "focus", "fixed", "ellipsis", "blur", "aria-label", "Zombie", "Space", "Reload", "Redacted ", "Gold Seizure",
		"Battle Royale", "<a href='", "</a>", "1v1", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.2em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "⚠️ ", "zombie", "wheel", "userIcon", "true", "top", "tls7", "system-ui", "style",
		"right", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "oneVsOne", "noFullSending", "mouseover", "mouseout", "long", "logo", "loading", "italic ",
		"https://territorial.io/", "file", "error", "en-US", "dotted", "data:image/png;base64,", "crown", "column", "clock", "break-all", "blur(4px)", "battleRoyale", "aria-pressed", "arena", "account", "accept", "_blank", "[Redacted Message]",
		"Seed", "Remove Punishments", "Patreon", "Mare Nostrum", "Interest", "False Reporter", "Close", "Cheater", "Bot ", "Block Account", "Ban IP", "Back", "Audit Log", "Arial Black, system-ui", "30%", "255,255,255", "1px 1px 0 lightgray",
		"1px -1px 0 lightgray,", "1.3em", "1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", "/log/?r=", ". Duration: x", "-1px 1px 0 lightgray,", "-1px -1px 0 lightgray,", ",0,0.85)",
		" solid white;}", " Rank: ", " / 180", " / 160", " -> "
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
	this.dw = 2, this.dx = 1768, this.dy = 0;
	this.rVersion = 26, this.e2 = 0, this.dk = function() {
		this.o = "2.17.1", this.e4 = "8 Nov 2026 [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.e5 = 0 <= this.hostname.indexOf("github.io"), this.e6 = 0 <=
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
		var hp, hr, fM;
		aE.hj || aN.hk || (bD.gw.hl(0) || bD.gw.hl(1)) && bD.gw.hm(aE.fK) && (aS.hn(hf, hg) ? aS.ho = !1 : aQ.hn(hf, hg) || (hp = bP.hq(hf), hr = bP.hs(hg), fM = bP.fx(hp, hr), bP.ht(hp, hr) && (0 === code ? function(fM) {
			var hx, fE, fP;
			aE.hy ? -1 !== (hx = bu.hz(fM)) && bB.i0.i1(fM) : (fE = bP.fQ(fM), ad.ff(fE) ? (hx = an.fB.fD(fE)) && (fP = bP.fQ(hx), fP = ad.fR(fP) ? aE.fX : ad.fS(fP), bB.i0.i3(aS.i4(), hx, fP)) : (hx = bu.i5(fM)) < 0 || (fE = bP
				.fQ(hx), ad.fR(fE) ? bv.i6(aE.fK) ? bB.i0.i7(aS.i4(), aE.fX) : ae.gh(aE.fK) && b2.i8(aE.fX, aS.i4()) : (fP = ad.fS(fE), bv.fT(fP, aE.fK) && (bv.i9(aE.fK, fP) ? bB.i0.i7(aS.i4(), fP) : ae.gh(aE.fK) && b2.i8(
					fP, aS.i4())))))
		}(fM) : 1 === code ? function(fM) {
			bQ.iA.iB(aE.fK, fM) && bB.i0.iC(aS.i4(), bR.gC[7])
		}(fM) : 2 === code && function(fM) {
			bQ.iD.iE(aE.fK, fM) && bB.i0.iF(aS.i4())
		}(fM))))
	}, this.iG = function() {
		if (!aE.hj && !aN.hk && bD.gw.hl(1)) {
			var h8 = aE.fK;
			if (bD.gw.hm(h8)) {
				var fa = ae.gh(h8);
				if (fa < 1) ! function() {
					var h8 = aE.fK;
					if (bv.i6(h8)) bB.i0.i7(aS.i4(), aE.fX);
					else
						for (var fc = ad.fc, hG = ah.hG, fa = hG[h8].length, iQ = Math.floor(Math.random() * fa), aC = 0; aC < fa; aC++)
							for (var iR = 3; 0 <= iR; iR--) {
								var iS = hG[h8][(aC + iQ) % fa] + fc[iR];
								if (ad.hA(iS)) {
									iS = ad.fS(iS);
									if (iS !== h8 && (!aE.iU || bv.fT(h8, iS))) return bB.i0.i7(aS.i4(), iS)
								}
							}
				}();
				else {
					for (var iI = 0, iJ = ae.gn(h8, 0), aC = 1; aC < fa; aC++) {
						var iK = ae.gn(h8, aC);
						iK < iJ && (iJ = iK, iI = aC)
					}
					bB.i0.i7(aS.i4(), ae.gm(h8, iI))
				}
			}
		}
	}, this.iL = function() {
		if (!aE.hj && !aN.hk && bD.gw.hm(aE.fK) && bD.gw.hl(1)) return ax.iM ? ax.iN(aE.fK) ? void bB.i0.iO(1) : void 0 : void(ax.iP(aE.fK) && bB.i0.iL())
	}
}

function iV(iW, size, iX, iY, font) {
	var aC, ib = .2,
		canvas = document.createElement("canvas"),
		ic = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = iW, canvas.height = iW, ic.font = size + font, ic.textAlign = "center", ic.textBaseline = "middle", ic.fillStyle = "red", aC = 0; aC < iX.length; aC++) ic.fillText(iX[aC], .5 * iW, .5 * iW);
	return -1 < (canvas = function(iZ) {
		var aC, eI, fd = iZ.data;
		for (aC = fd.length - 4; 0 <= aC; aC -= 4)
			if (eI = fd[aC], iY <= eI) return Math.floor(aC / (4 * iW));
		return -1
	}(ic.getImageData(0, 0, iW, iW))) && (ib = (canvas - .5 * iW + .1 * size) / size), Math.max(ib, 0)
}

function dB() {
	this.ig = new Int16Array(4), this.ih = new Int16Array(4), this.ii = null, this.dk = function() {
		var aC;
		for (this.ig[0] = -bV.fl, this.ig[1] = 1, this.ig[2] = bV.fl, this.ig[3] = -1, this.ii = new Int16Array([-bV.fl, 1 - bV.fl, 1, bV.fl + 1, bV.fl, bV.fl - 1, -1, -bV.fl - 1]), aC = 0; aC < 4; aC++) this.ih[aC] = 4 * this.ig[aC]
	}, this.ij = function() {
		return bO.ik(Math.floor(.15 * (1 + .25 * a1.a2.il()) * i.im / io), 4, 128)
	}, this.ip = function(fE, id) {
		for (var iq = this.ih, aC = 0; aC < 4; aC++) {
			var fP = fE + iq[aC];
			if (ad.ir(fP) && ad.fI(fP) === id) return !0
		}
		return !1
	}, this.is = function(player, fE) {
		return !ad.fR(fE) && player === ad.fS(fE)
	}, this.fs = function(hp, hr, fM) {
		return (hp -= this.fi(fM)) * hp + (hr -= this.fk(fM)) * hr
	}, this.it = function(iu, iv, iw) {
		iu = this.iy(iu) - this.iz(iw), iv = this.j1(iv) - this.j2(iw);
		return Math.sqrt(iu * iu + iv * iv)
	}, this.j3 = function(j4, j5) {
		var ix = this.fi(j4) - this.fi(j5),
			j4 = this.fk(j4) - this.fk(j5);
		return ~~Math.sqrt(ix * ix + j4 * j4 + .5)
	}, this.j6 = function(j4, j5) {
		var ix = this.fi(j4) - this.fi(j5),
			j4 = this.fk(j4) - this.fk(j5);
		return ix * ix + j4 * j4
	}, this.j7 = function(j8, j9, jA, jB) {
		return (j8 -= jA) * j8 + (j9 -= jB) * j9
	}, this.jC = function(h8, jD) {
		return bO.g1(jD * ah.hc[h8], 1e3)
	}, this.iy = function(iu) {
		return 16 * (iu + jE) / io
	}, this.j1 = function(iv) {
		return 16 * (iv + jF) / io
	}, this.jG = function(fd) {
		return 16 * fd / io
	}, this.hq = function(iu) {
		return Math.floor((iu + jE) / io)
	}, this.hs = function(iv) {
		return Math.floor((iv + jF) / io)
	}, this.ht = function(hp, hr) {
		return 1 <= hp && 1 <= hr && hp < bV.fl - 1 && hr < bV.fm - 1
	}, this.fi = function(fM) {
		return fM % bV.fl
	}, this.fk = function(fM) {
		return bO.g1(fM, bV.fl)
	}, this.fx = function(hp, hr) {
		return hr * bV.fl + hp
	}, this.jH = function(hp, hr) {
		return 4 * this.fx(hp, hr)
	}, this.jI = function(fM) {
		return this.fw(this.fi(fM), this.fk(fM))
	}, this.fw = function(hp, hr) {
		return 0 < hp && hp < bV.fl - 1 && 0 < hr && hr < bV.fm - 1
	}, this.fQ = function(fM) {
		return fM << 2
	}, this.fO = function(fE) {
		return fE >> 2
	}, this.jJ = function(fM) {
		return bV.fl * this.fk(fM) * 256 + (this.fi(fM) << 4)
	}, this.jK = function(fM) {
		return this.jJ(fM) + 8 + (bV.fl << 7)
	}, this.jL = function(iw) {
		return bV.fl * (this.j2(iw) >> 4) + (this.iz(iw) >> 4)
	}, this.jM = function(iw) {
		iw = this.jL(iw);
		return (this.fi(iw) >> 5) + bQ.jN.jO * (this.fk(iw) >> 5)
	}, this.iz = function(iw) {
		return iw % (bV.fl << 4)
	}, this.j2 = function(iw) {
		return bO.g1(iw, bV.fl << 4)
	}, this.jP = function(fM, iR) {
		return fM + this.ig[iR]
	}, this.jQ = function(fE, iR) {
		return fE + this.ih[iR]
	}, this.jR = function(j4, j5) {
		var ix = this.fi(j5) - this.fi(j4),
			j5 = this.fk(j5) - this.fk(j4);
		return Math.abs(ix) >= Math.abs(j5) ? 1 + 2 * (ix < 0) : 2 * (0 < j5)
	}, this.jS = function(player) {
		return this.fx(ah.jT[player] + ah.jU[player] >> 1, ah.jV[player] + ah.jW[player] >> 1)
	}, this.jX = function(player) {
		return this.fx(az.jY(ah.jT[player], ah.jU[player]), az.jY(ah.jV[player], ah.jW[player]))
	}
}

function cp() {
	this.jZ = new ja, this.jb = new jc, this.jd = new je, this.performance = new jf, this.jg = new jh, this.ji = new jj, this.jk = new jl, this.jm = new jn, this.jo = new jp, this.dk = function() {
		this.jZ.dk(), this.jd.dk(), this.performance.dk(), this.jg.dk(), this.ji.dk()
	}, this.ef = function() {
		this.performance.ef(), this.jZ.ef(), this.jd.jq()
	}
}

function jh() {
	var jr, jt = new Uint16Array(8);

	function k1(size, player) {
		for (var aC = ah.h2[player].length - 1; size <= aC; aC--) ad.k7(ah.h2[player][aC], player)
	}
	this.dk = function() {
		jr = 0
	}, this.ju = function(player, jv) {
		return bR.fW[1] = ah.h2[player].length, bR.fW[0] === aE.fX ? ap.jg.jw(player) : this.jx(player, bR.fW[0]), (0 !== bR.fW[1] || 0 !== ah.h2[player].length) && !(!jv && bR.fW[1] === ah.h2[player].length || (bR.fW[0] === aE.fX ? ah.jy[
			player]++ : ah.jz[player]++, 0))
	}, this.k0 = function(player) {
		k1(bR.fW[1], player), ae.ej(player, bR.g7[0], bR.fW[0]), aG.k2(player, !1)
	}, this.k3 = function(player, k4, fa, iJ) {
		var k5 = bO.g1(12 * ah.hc[player], 1024);
		iJ -= iJ >= bO.g1(ah.hc[player], 2) ? k5 : 0, k1(fa, player), ae.ej(player, iJ, k4), ah.hc[player] -= iJ + k5, aG.k2(player, !1)
	}, this.jx = function(player, k4) {
		for (var iR, fc = ad.fc, aC = ah.hG[player].length - 1; 0 <= aC; aC--)
			if (ad.k6(ah.hG[player][aC]))
				for (iR = 3; 0 <= iR; iR--)
					if (ad.hA(ah.hG[player][aC] + fc[iR]) && ad.fS(ah.hG[player][aC] + fc[iR]) === k4) {
						ah.h2[player].push(ah.hG[player][aC]);
						break
					}
	}, this.jw = function(player) {
		for (var fc = ad.fc, aC = ah.hG[player].length - 1; 0 <= aC; aC--)
			if (ad.k6(ah.hG[player][aC]))
				for (var iR = 3; 0 <= iR; iR--)
					if (ad.fR(ah.hG[player][aC] + fc[iR])) {
						ah.h2[player].push(ah.hG[player][aC]);
						break
					}
	}, this.k8 = function(player, k9) {
		var aC, ft, iR, iT, fa = ah.hG[player].length,
			kA = 256 <= fa ? 12 : 32 <= fa ? 6 : 1,
			kB = fa - 1 - az.kC(kA),
			fc = ad.fc;
		jr = 0;
		loop: for (aC = kB; 0 <= aC; aC -= kA)
			for (iR = 3; 0 <= iR; iR--)
				if ((iT = ad.fR(ah.hG[player][aC] + fc[iR]) ? aE.fX : ad.fS(ah.hG[player][aC] + fc[iR])) === aE.fX || ad.hA(ah.hG[player][aC] + fc[iR]) && iT !== player && (k9 || bv.fT(player, iT))) {
					for (ft = jr - 1; 0 <= ft; ft--)
						if (jt[ft] === iT) continue loop;
					if (jt[jr] = iT, 8 <= ++jr) return !0
				}
		return 0 < jr
	}, this.kD = function(player, k9) {
		var aC, iR, iT, fc = ad.fc;
		for (jr = 0, aC = ah.hG[player].length - 1; 0 <= aC; aC--)
			for (iR = 3; 0 <= iR; iR--)
				if ((iT = ad.fR(ah.hG[player][aC] + fc[iR]) ? aE.fX : ad.fS(ah.hG[player][aC] + fc[iR])) === aE.fX || ad.hA(ah.hG[player][aC] + fc[iR]) && iT !== player && (k9 || bv.fT(player, iT))) return jt[jr++] = iT, !0;
		return !1
	}, this.kE = function() {
		for (var fu, aC = jr - 1; 0 <= aC; aC--)
			if (jt[aC] === aE.fX) {
				for (jr--, fu = aC; fu < jr; fu++) jt[fu] = jt[fu + 1];
				return !0
			} return !1
	}, this.kF = function(player) {
		for (var fu, aC = jr - 1; 0 <= aC; aC--)
			if (ae.kG(player, jt[aC]))
				for (jr--, fu = aC; fu < jr; fu++) jt[fu] = jt[fu + 1];
		return 0 === jr
	}, this.kH = function() {
		for (var aC = jr - 1; 0 <= aC; aC--)
			if (bD.gw.kI(jt[aC])) return !0;
		return !1
	}, this.kJ = function() {
		for (var aC = jr - 1; 0 <= aC; aC--) bD.gw.kI(jt[aC]) || (jt[aC] = jt[--jr]);
		return 0 < jr
	}, this.kK = function(player) {
		for (var fu, kL = jt[0], kM = ah.hc[kL] + ae.hd(kL, player), aC = jr - 1; 1 <= aC; aC--)(fu = ah.hc[jt[aC]] + ae.hd(jt[aC], player)) < kM && (kL = jt[aC], kM = fu);
		return kL
	}, this.kN = function(player) {
		var k, kO = jt[0];
		if (1 !== jr)
			for (var kP = bO.g1(ah.jU[player] + ah.jT[player], 2), kQ = bO.g1(ah.jW[player] + ah.jV[player], 2), fq = kR(kP - bO.g1(ah.jU[kO] + ah.jT[kO], 2)) + kR(kQ - bO.g1(ah.jW[kO] + ah.jV[kO], 2)), aC = jr - 1; 1 <= aC; aC--)(k = kR(kP - bO
				.g1(ah.jU[jt[aC]] + ah.jT[jt[aC]], 2)) + kR(kQ - bO.g1(ah.jW[jt[aC]] + ah.jV[jt[aC]], 2))) < fq && (fq = k, kO = jt[aC]);
		return kO
	}, this.kS = function() {
		for (var kT = jt, kU = kT[0], hc = ah.hc, kV = hc[kU], aC = jr - 1; 1 <= aC; aC--) {
			var h8 = kT[aC],
				fu = hc[h8];
			kV < fu && (kU = h8, kV = fu)
		}
		return kU
	}, this.kW = function() {
		return jt[az.kC(jr)]
	}
}

function jj() {
	function km(player, k4, kc) {
		3 <= kc && 2142 < bi.ks() && (k4 === aE.fX || ah.hc[k4] < bO.g1(ah.hc[player], 20)) && aF.kh(player, 20)
	}

	function kp(player, iJ, k4, kc) {
		3 <= kc && kc < 6 && bO.g1(ah.hc[player], 8) > ah.hc[k4] && (iJ = Math.max(bO.g1(11 * ah.hc[k4], 5), bO.g1(ah.hc[player], 10)));
		kc = ah.h2[player].length;
		ap.jg.jx(player, k4), ap.jg.k3(player, k4, kc, iJ)
	}

	function kl(player, iJ) {
		var k4 = aE.fX,
			fa = ah.h2[player].length;
		ap.jg.jw(player), ah.h2[player].length !== fa && ap.jg.k3(player, k4, fa, iJ)
	}
	this.kX = new Uint8Array(aE.fX), this.dk = function() {
		this.kX.fill(0)
	}, this.kY = function(player, iJ) {
		var ka, kc, kd, ke;
		ae.kZ(player) && (ka = af.kb(player), 3 <= (kc = aF.iJ[player]) && kc < 6 && (iJ = Math.max(ah.hc[player] - ka, iJ)), kd = ah.hH[player].length, ke = ah.hG[player].length, 30 * ah.hO[player] > aE.kf && kg[player] < 10 && 100 * ke <= kd &&
			aF.kh(player, 10), aE.iU ? function(player, iJ, kc, ka) {
				var k4;
				if (ap.jg.k8(player, !1) || ap.jg.kD(player, !1)) {
					if (!ap.jg.kF(player))
						if (ap.jg.kE()) kl(player, iJ), km(player, aE.fX, kc);
						else {
							if (az.kn(aF.ko[kc])) k4 = ap.jg.kK(player);
							else {
								if (ap.jg.kH() && az.kn(aF.kq[kc]) && ap.jg.kJ(), 6 === kc) return kp(player, iJ, ap.jg.kW(), kc);
								k4 = ap.jg.kN(player)
							}
							kp(player, iJ, k4, kc), km(player, k4, kc)
						}
				} else bQ.kj.ef(player) || ap.jk.ef(player) || ! function(player, iJ, kc, ka) {
					var kX = ap.ji.kX;
					kX[player] = 0;
					var kt = bj.fY[player];
					if (0 !== kt) {
						var ku = ah.hc[player],
							hO = ah.hO;
						if (player < aE.kv && (iJ = ku), !(ku < hO[player] || 5 === kc && ku < ka || 4 === kc && ku < bO.g1(ka, 2))) {
							bk.kw(kt);
							for (var fa = bR.g5[0], gE = bR.gE, aC = az.kC(fa), fu = 0; fu < fa; fu++) {
								var ek = gE[(fu + aC) % fa];
								if (kX[ek]) return bB.kx.ky(player, ek, iJ)
							}
							var kz = bQ.z.kz;
							for (fu = 0; fu < fa; fu++)
								if (ek = gE[(fu + aC) % fa], kz[ek] && ek !== player) return bB.kx.ky(player, ek, iJ)
						}
					}
				}(player, iJ, kc, ka)
			}(player, iJ, kc, ka) : (!ke || kd && (kd < ke && !az.kC(10) || 100 * ke <= kd && az.kC(3) || !az.kC(8))) && bQ.kj.ef(player) || function(player, iJ, kc) {
				ap.jg.k8(player, !0) || ap.jg.kD(player, !0) ? ap.jg.kF(player) || (ap.jg.kE() ? kl(player, iJ) : az.kn(aF.ko[kc]) ? kp(player, iJ, ap.jg.kK(player), kc) : 5 === kc ? kp(player, iJ, ap.jg.kS(), kc) : (ap.jg.kH() && az.kn(aF
					.kq[kc]) && ap.jg.kJ(), kp(player, iJ, 6 === kc ? ap.jg.kW() : ap.jg.kN(player), kc))) : ap.jk.ef(player)
			}(player, iJ, kc))
	}
}

function c9() {
	var l0 = new Uint8Array(aE.fX),
		l1 = new Uint16Array(aE.fX),
		l2 = new Uint16Array(aE.fX),
		l3 = new Uint8Array(aE.fX),
		l4 = (this.iJ = new Uint8Array(aE.fX), new Uint16Array(aE.fX)),
		l5 = new Uint16Array(aE.fX);

	function lK(aC) {
		l0[aC] = 1 + bO.g1(l4[aC] * az.random(), 10 * az.value(100))
	}
	this.l6 = null, this.kq = [97, 94, 70, 40, 20, 0, 100], this.l7 = [500, 450, 400, 300, 80, 50, 100], this.ko = [0, 0, 5, 25, 50, 100, 0], this.l8 = [60, 74, 112, 200, 256, 512, 512], this.l9 = [1, 2, 3, 4, 6, 8, 1], this.lA = [500, 450, 400, 300,
		80, 50, 100
	], this.lB = [100, 150, 250, 400, 600, 1e3, 100], this.dl = function() {
		this.l6 = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dk = function() {
		l0.fill(0), l1.fill(0), l2.fill(0), l3.fill(0), this.iJ.fill(0), l4.fill(0), l5.fill(0);
		var lC = aE.kv;
		if (9 === aE.lD) this.lE();
		else if (__fx.customLobby.isActive())
			for (aC = aE.lH - 1; 0 <= aC; aC--) this.iJ[aC + lC] = __fx.customLobby.gameInfo.difficulty;
		else if (aE.lF)
			if (3 === aE.data.botDifficultyType)
				for (aC = aE.lH - 1; 0 <= aC; aC--) {
					var iS = aC + lC;
					this.iJ[iS] = aE.data.botDifficultyData[iS]
				} else if (2 === aE.data.botDifficultyType)
					for (aC = aE.lH - 1; 0 <= aC; aC--) this.iJ[iS = aC + lC] = aE.data.botDifficultyTeam[bj.lI[bj.fY[iS]]];
				else if (1 === aE.data.botDifficultyType) {
			var lJ = this.l6.length;
			for (aC = aE.lH - 1; 0 <= aC; aC--) this.iJ[aC + lC] = aC % lJ
		} else
			for (lJ = aE.data.botDifficultyValue, aC = aE.lH - 1; 0 <= aC; aC--) this.iJ[aC + lC] = lJ;
		else
			for (var lG = 8 === aE.lD ? 1 : 0, aC = aE.lH - 1; 0 <= aC; aC--) this.iJ[aC + lC] = lG;
		for (aC = 0; aC < lC; aC++) this.iJ[aC] = 6;
		var fa = aE.fX;
		for (aC = 0; aC < fa; aC++) this.iJ[aC] <= 2 ? (l3[aC] = 5, l4[aC] = l5[aC] = 1040, 0 === this.iJ[aC] ? (l1[aC] = 980, l2[aC] = 980) : 1 === this.iJ[aC] ? (l1[aC] = 980, l2[aC] = 920, l4[aC] = l5[aC] = 1100) : (l1[aC] = 825, l2[aC] =
			750)) : this.iJ[aC] <= 4 ? (l3[aC] = 1 + az.kC(20), 3 === this.iJ[aC] ? (l1[aC] = l2[aC] = 500, l4[aC] = l5[aC] = 1e3) : (l5[aC] = 250 + az.kC(1501), l4[aC] = 500 + az.kC(501), l1[aC] = 300 + az.kC(201), l2[aC] = 100 + az.kC(
			201))) : this.iJ[aC] <= 5 ? (l4[aC] = 1e3, l5[aC] = 1e3, l3[aC] = 35 + az.kC(16), l1[aC] = 300 + az.kC(201), l2[aC] = 50 + az.kC(101)) : (l4[aC] = l5[aC] = 800, l3[aC] = 5, l1[aC] = 10, l2[aC] = 250), lK(aC)
	}, this.lE = function() {
		for (var fE = b0.lL, lC = aE.kv, aC = fE - 1; 0 <= aC; aC--) this.iJ[aC + lC] = 0;
		for (var fu = 0; fu < 6; fu++) {
			for (aC = fE + b0.lM[fu] - 1; fE <= aC; aC--) this.iJ[aC + lC] = fu;
			fE += b0.lM[fu]
		}
	}, this.kh = function(h8, value) {
		l0[h8] = Math.min(value, l0[h8])
	}, this.ef = function(h8) {
		0 == --l0[h8] && ! function(h8) {
			(function(h8) {
				l4[h8] !== l5[h8] && (l4[h8] += l4[h8] < l5[h8] ? 3 : -3);
				l1[h8] !== l2[h8] && (l1[h8] += l1[h8] < l2[h8] ? l3[h8] : -l3[h8], l1[h8] = (Math.abs(l1[h8] - l2[h8]) <= l3[h8] ? l2 : l1)[h8]);
				l0[h8] = bO.g1(l4[h8], 10)
			})(h8), ap.ji.kY(h8, bO.g1(l1[h8] * ah.hc[h8], 1e3))
		}(h8)
	}, this.lP = function(h8, h3) {
		l4[h8] = l5[h8] = h3
	}
}

function je() {
	var lQ = new Uint16Array(aE.fX);

	function lf(player, ld) {
		for (var fa = bR.g5[0], gD = bR.gD, lr = -1, ls = aE.fX, aC = 0; aC < fa; aC++) {
			var fq, h8 = gD[aC];
			bv.fT(player, h8) && (fq = bP.j6(ld, bP.jS(h8)), -1 === lr || fq < lr) && (lr = fq, ls = h8)
		}
		return ls
	}

	function lh(le, ld) {
		if (le === aE.fX) return 0;
		var hH = ah.hH[le],
			lq = hH.length;
		if (0 === lq) return 0;
		for (var fa = Math.min(lq, 10), ls = 0, lr = bP.j6(hH[ls] >> 2, ld), aC = 0; aC < fa; aC++) {
			var iS = az.kC(lq),
				fq = bP.j6(hH[iS] >> 2, ld);
			fq < lr && (lr = fq, ls = iS)
		}
		return hH[ls] >> 2
	}

	function lm(player, ld, k4, lu) {
		var lv;
		(lu === aE.fX || (lv = bP.jS(k4), lu = bP.jS(lu), bP.j6(ld, lv) < bP.j6(ld, lu))) && (lQ[player] = k4)
	}
	this.dk = function() {
		lQ.fill(aE.fX)
	}, this.jq = function() {
		if (bi.ks() % 109 == 9 && !(am.lR < 20) && aE.iU && !(bk.lS() < bO.g1(8 * aE.kf, 10))) {
			var lT = bk.lU();
			if (bj.lI[lT]) {
				bk.lV(lT);
				var fa = bR.g5[0];
				if (0 !== fa)
					for (var h = bR.gE, lW = am.lW, lR = am.lR, lX = lQ, iS = az.kC(fa), aC = 0; aC < lR; aC++) {
						var i2 = lW[aC],
							lY = h[iS];
						bD.gw.lZ(i2, lY) && 512 === lX[i2] && (lX[i2] = lY, iS = (iS + 1) % fa)
					}
			}
		}
	}, this.ef = function(player) {
		var ld, lg, le, la = function(player) {
			var k4 = lQ[player];
			if (k4 !== aE.fX) {
				if (bD.gw.lt(k4) && ah.hH[k4]) return k4;
				lQ[player] = aE.fX
			}
			return aE.fX
		}(player);
		return function(player) {
			for (var lp = am.lW, lq = am.lR, fa = Math.min(lq, lq < 17 && 5 === az.kC(20) ? 1 : 16), h9 = az.kC(lq), gD = bR.gD, hH = ah.hH, h3 = 0, aC = 0; aC < fa; aC++) {
				var h8 = lp[(aC + h9) % lq];
				h8 !== player && hH[h8].length && (gD[h3++] = h8)
			}
			bR.g5[0] = h3
		}(player), 0 !== bR.g5[0] && (0 < (lg = lh(le = lf(player, ld = bP.jX(player)), ld)) && bQ.li.lj(player, bQ.lk.ll(lg, ld)) ? (lm(player, ld, le, la), !0) : 0 < (le = function(player, ld) {
			for (var fa = bR.g5[0], gD = bR.gD, lX = lQ, h9 = 0, aC = 0; aC < fa; aC++) {
				var h8 = gD[aC],
					h8 = lX[h8];
				h8 !== aE.fX && bD.gw.lt(h8) && player !== h8 && bv.fT(player, h8) && (gD[h9++] = h8)
			}
			return 0 !== (bR.g5[0] = h9) ? lh(lf(player, ld), ld) : 0
		}(player, ld)) && bQ.li.lj(player, bQ.lk.ll(le, ld)) ? (lm(player, ld, ad.fS(le << 2), la), !0) : !!(0 < (lg = lh(la, ld)) && bQ.li.lj(player, bQ.lk.ll(lg, ld))))
	}
}

function jl() {
	function lz(player) {
		for (var fz = ah.fz[player], fa = fz.length, g0 = Math.max(bO.g1(fa, 12), 1), fc = ad.fc, eI = az.kC(fa), aC = 0; aC < fa; aC += g0)
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

	function m4(player, m6) {
		var iJ = bD.gw.m7(player, aF.lA[aF.iJ[player]]);
		ah.h2[player].push(m6.fE), ae.ej(player, iJ, m6.h8), aG.k2(player, !0)
	}
	this.ef = function(player) {
		return !!bV.fF(bV.fG) && !!aE.data.passableMountains && 0 !== ah.fz[player].length && function(player) {
			var ly = lz(player);
			if (null === ly) return !1;
			! function(player) {
				for (var lW = am.lW, lR = am.lR, fa = Math.min(lR, 12), h9 = az.kC(lR), gD = bR.gD, fz = ah.fz, h3 = 0, aC = 0; aC < fa; aC++) {
					var h8 = lW[(aC + h9) % lR];
					h8 !== player && fz[h8].length && bv.fT(player, h8) && (gD[h3++] = h8)
				}
				bR.g5[0] = h3
			}(player);
			var m1 = function(fH) {
				for (var fa = bR.g5[0], gD = bR.gD, aC = 0; aC < fa; aC++) {
					var m6 = lz(gD[aC]);
					if (null !== m6 && m6.id === fH) return m6
				}
				return null
			}(ly.id);
			return null !== m1 ? (m4(player, m1), !0) : function(player, fH) {
				var fa = ap.jZ.m5;
				if (0 !== fa)
					for (var fE = ap.jZ.buffer[az.kC(fa)] << 2, fc = ad.fc, fd = az.kC(4);;) {
						if (fE += fc[fd], ad.ff(fE)) {
							if (ad.fI(fE) === fH) return m4(player, {
								fE: fE,
								h8: aE.fX
							}), !0;
							break
						}
						if (!ad.fR(fE)) break
					}
				return !1
			}(player, ly.id)
		}(player)
	}
}

function jc() {
	this.ef = function(player) {
		return bQ.li.lj(player, function(player) {
			var fa = ap.jZ.m5;
			if (0 === fa) return -1;
			for (var lq = Math.min(fa, ap.performance.m9 ? fa : 10), buffer = ap.jZ.buffer, kB = bO.g1(az.random() * fa, az.value(100)), e = kB + lq, mA = az.jY(ah.jT[player], ah.jU[player]), mB = az.jY(ah.jV[player], ah.jW[player]),
					ls = -1, fq = bP.j7(0, 0, bV.fl, bV.fm), aC = kB; aC < e; aC++) {
				var h9 = aC % fa,
					mC = bP.fs(mA, mB, buffer[h9]);
				mC < fq && (fq = mC, ls = h9)
			}
			return -1 !== ls ? function(fM, mA, mB) {
				var hp = bP.fi(fM),
					hr = bP.fk(fM),
					ix = mA - hp,
					j0 = mB - hr;
				Math.abs(ix) >= Math.abs(j0) ? (j0 = 0, ix = Math.sign(ix)) : (ix = 0, j0 = Math.sign(j0));
				ix === j0 && (ix = 1);
				for (;;) {
					if (hp += ix, hr += j0, !bP.fw(hp, hr)) break;
					if (fM = bP.fx(hp, hr), ad.ir(bP.fQ(fM))) return fM
				}
				return -1
			}(buffer[ls], mA, mB) : -1
		}(player))
	}
}

function jn() {
	this.ef = function(player) {
		var mE = function(player) {
			for (var mH = bQ.mH.mJ(), fa = mH.length, lq = Math.min(fa, 32), iS = az.kC(fa), aC = 0; aC < lq; aC++) {
				var mE = (aC + iS) % fa,
					mG = mH[mE],
					j4 = mG[0],
					j5 = mG[mG.length - 1];
				if (bQ.lk.mK(player, j4) && bQ.lk.mL(player, j5)) return mE;
				if (bQ.lk.mK(player, j5) && bQ.lk.mL(player, j4)) return 0 <= (mE = bQ.mH.mM(j5, j4)) ? mE : bQ.mH.mN() ? -1 : bQ.mH.mO(bQ.mH.mP(mG))
			}
			return -1
		}(player);
		return -1 !== mE && (mE = bQ.mH.get(mE), !bQ.lk.mI(player, mE)) && (bR.h[0] = mE, !0)
	}
}

function jf() {
	this.m9 = 0, this.dk = function() {
		this.m9 = 0
	}, this.ef = function() {
		if (!this.m9 && bi.ks() % 30 == 7 && bD.gw.mS(90) && (ap.performance.m9 = 1)) {
			if (aE.iU) {
				var lT = bk.lU();
				if (bj.lI[lT]) {
					bk.kw(lT);
					var h = bR.gE,
						fa = bR.g5[0];
					if (0 !== fa)
						for (var mV = Math.min(100 + 10 * (fa - 1), 400), aC = 0; aC < fa; aC++) aF.lP(h[aC], mV)
				}
			}
			aF.lP(mW[0], 100)
		}
	}
}

function ja() {
	var mX = 0,
		mY = 0,
		mZ = 300,
		ma = 300,
		mb = 0;
	this.m5 = 0, this.buffer = new Uint32Array(512), this.dk = function() {
		mY = mX = 0, this.m5 = 0, mb = 0
	}, this.ef = function() {
		if (function() {
				var fa = ap.jZ.m5;
				if (0 === fa) return 1;
				var buffer = ap.jZ.buffer;
				if (bi.ks() % 35 == 6) {
					for (var aC = fa - 1; 0 <= aC; aC--) ad.fR(buffer[aC] << 2) || (fa--, buffer[aC] = buffer[fa]);
					ap.jZ.m5 = fa
				}
				return fa < buffer.length
			}())
			if (mZ <= mX) {
				var mf = ap.jZ.m5;
				if (mf) {
					if (bi.ks() % 350 != 1) return;
					if (mb !== mf) return void(mb = mf);
					if (!bD.gw.kI(mW[0])) return
				} else if (bi.ks() % 12 != 8) return;
				bD.gw.mg() || ap.jZ.dk()
			} else {
				var aC, j = bV.fl,
					mh = j - 2,
					mf = mh * (bV.fm - 2),
					mi = mZ,
					buffer = ap.jZ.buffer,
					lq = ap.jZ.m5,
					mj = buffer.length,
					h9 = Math.min(mY + mi * ((1 + 19 * ap.performance.m9) * ma), mf);
				for (aC = mY; aC < h9; aC += mi) {
					var fE = 4 * (aC % mh + (bO.g1(aC, mh) + 1) * j + 1);
					if (ad.fR(fE) && (buffer[lq] = fE >> 2, ++lq === mj)) {
						aC += mi;
						break
					}
				}(mY = aC) >= mf && (mY = ++mX), ap.jZ.m5 = lq
			}
	}
}

function jp() {
	this.ef = function() {
		if (bi.ks() % 51 == 45)
			for (var fa = bQ.z.ml, mm = bQ.z.mm, mn = bQ.z.mn, mo = bQ.z.mo, mp = bQ.z.mp, lB = aF.lB, iJ = aF.iJ, aC = 0; aC < fa; aC++) {
				var mG, player, mt, mq = mm[aC];
				mq % 64 == 6 || (mG = mn[aC], (player = bQ.lk.mr(mG[mG.length - 1])) < 0) || !bD.gw.lZ(player, mp[aC] >> 3) || az.kC(1e3) >= lB[iJ[player]] || ! function(mx, mG) {
					for (var fa = mG.length - 1, my = bQ.z.mz[mx], fq = 0, aC = my + 1; aC < fa; aC++) fq += bP.j3(mG[aC], mG[aC + 1]);
					return (fq += bP.j3(bP.jL(bQ.z.n0[mx]), mG[my + 1])) <= 60
				}(aC, mG) || (mt = mo[aC], 64 <= mq && bQ.mu.mv(player, mt)) || function(player, mG, mt, mx, mq) {
					bQ.n1.n2(player) && bD.gw.n3(player, aF.l7[aF.iJ[player]], 32, 0) && (bQ.z.mm[mx] = 64 + mq % 64, bQ.mu.ej(mt, bQ.z.n4), bR.h[0] = bQ.mH.mP(mG), bR.gC[1] = 6, bD.gw.n5(player), bQ.z.n6(player))
				}(player, mG, mt, aC, mq)
			}
	}
}

function n7() {
	bU.n8.n9(), aO.ef(), ag.ef(), aX.nA(), b1.z.ef()
}

function nB() {
	b2.ef(), aH.ef(), ao.ef(), af.ef(), b5.ef(), aG.ef(), ap.ef(), bQ.z.ef(), am.nC(), aW.ef(), b0.ef(), bY.ef(), ag.ef(), ag.nD(), aX.ef(), bS.ef(), aV.ef(), aQ.ef(), b9.nE(), aO.ef(), b6.ef(), aS.ef(), ax.ef(), bg.ef(), bk.ef(), b1.z.ef(), b1.nF
		.ef(), u.ef(), bX.eT.ef(), bC.ef(), bi.ef()
}

function nG() {
	aI.ef(), aY.ef(), aR.ef(), aw.ef(), bF.ef(), b8.ef(), b9.ef(), ay.nH()
}

function nI() {
	aW.nJ(!1), aQ.nJ(), aX.nJ(!1), aV.nJ(), aS.nJ(), ax.nJ(), ag.nJ(!1), bk.nK()
}

function nL() {
	ag.nJ(!1) && (bi.ds = !0), b1.z.ef()
}

function cA() {
	var nM, nN, nO;

	function nQ(nS) {
		for (var aC = nM - 1; 0 <= aC; aC--) 0 === nO[nN[aC]] && ah.hO[nN[aC]] >= nS && ge(nN[aC])
	}

	function nP(player) {
		var eb;
		64 === nO[player] ? nO[player] = 6 : (eb = ah.hO[player], nO[player] = eb < 1e3 ? 3 : eb < 1e4 ? 2 : eb < 6e4 ? 1 : 0)
	}
	this.dk = function() {
		nM = 0, nN = new Uint16Array(aE.fX), nO = new Uint8Array(aE.fX)
	}, this.ef = function() {
		for (var aC = nM - 1; 0 <= aC; aC--) 64 === nO[nN[aC]] ? nP(nN[aC]) : 0 == nO[nN[aC]]-- && (nP(nN[aC]), ge(nN[aC]));
		16e4 <= ah.hO[mW[0]] && (nQ(16e4), 3e5 <= ah.hO[mW[0]]) && nQ(3e5), bD.gw.lt(aE.fK) && (bg.nT[7] = Math.max(ah.hO[aE.fK], bg.nT[7]))
	}, this.gy = function(player) {
		for (var ft, aC = nM - 1; 0 <= aC; aC--)
			if (player === nN[aC]) {
				for (nM--, ft = aC; ft < nM; ft++) nN[ft] = nN[ft + 1];
				return
			}
	}, this.k2 = function(player, nU) {
		for (var aC = nM - 1; 0 <= aC; aC--)
			if (player === nN[aC]) return;
		nN[nM++] = player, nO[player] = nU ? 2 : 64
	}
}

function cB() {
	var size, kj;
	this.dk = function() {
		size = aE.lH, kj = new Uint16Array(aE.fX);
		for (var kv = aE.kv, aC = aE.lH - 1; 0 <= aC; aC--) kj[aC] = kv + aC
	}, this.ef = function() {
		ap.jo.ef();
		for (var aC = size - 1; 0 <= aC; aC--)
			if (0 === ah.nX[kj[aC]]) {
				ft = void 0;
				var ft = aC;
				size--, kj[ft] = kj[size]
			} else aF.ef(kj[aC])
	}, this.nW = function(h8) {
		kj[size++] = h8
	}
}

function cC() {
	var nZ, na, nb, nc, nd, ne, nf, ng, nh, ni, nj, nk, nl, nm = !1,
		nn = !1;

	function no(np) {
		nk = bi.ea, nb = nc = na = 0, nd = (nl = 33) / np, nZ = 1 / (np / nl / 4), ne = (i.j / 2 + jE) / io, nf = (i.k / 2 + jF) / io, ng = io
	}

	function nw(aC) {
		var ny; - 1 !== aC && (aC = bP.jL(bQ.z.n0[aC]), ny = bP.fi(aC) - 15, aC = bP.fk(aC) - 15, aI.ns(ny, aC, 29 + ny, 29 + aC))
	}

	function o9(eN) {
		Math.abs(Math.log(nj / ng)) < .125 && (nj = eN * ng)
	}

	function o8(ny, nz, oB, oC) {
		nh = (ny + oB + 1) / 2, ni = (nz + oC + 1) / 2;
		oB = i.j / (oB - ny + 1), ny = i.k / (oC - nz + 1);
		nj = .9 * (oB < ny ? oB : ny)
	}
	this.nq = function() {
		return nm
	}, this.nr = function() {
		no(1), this.ns(0, 0, bV.fl - 1, bV.fm - 1), aE.hy || aE.hj || this.nt(aE.fK, 3e3, !0, .3)
	}, this.nu = function(player, nv) {
		nw(bQ.lk.nx(player, nv))
	}, this.nt = function(player, np, o0, zoom) {
		aE.o1 || nm && !o0 && nn || (0 === ah.hO[player] ? nw(bQ.lk.o2(player)) : (aT.o3 = !1, nn = o0, no(np), function(player) {
			nh = (ah.jT[player] + ah.jU[player] + 1) / 2, ni = (ah.jV[player] + ah.jW[player] + 1) / 2
		}(player), function(zoom, player) {
			var ix = ah.jU[player] - ah.jT[player] + 1,
				player = ah.jW[player] - ah.jV[player] + 1,
				ft = i.j / ix,
				fu = i.k / player,
				ft = (nj = ft < fu ? ft : fu, 0 !== zoom ? zoom : ix < 20 && player < 20 ? .5 : .9);
			nj *= ft, o9(7 / 8)
		}(zoom, player), nm = !0, at.o6()))
	}, this.o7 = function(np) {
		aE.hj || aE.o1 || (aT.o3 = !1, nn = !1, no(np), o8(0, 0, bV.fl - 1, bV.fm - 1), o9(7 / 8), nm = !0, at.o6())
	}, this.ns = function(ny, nz, oB, oC) {
		nm = !1, o8(ny, nz, oB, oC), io = nj, aT.oD(nh, i.j / 2), aT.oE(ni, i.k / 2), bd.oF(), bi.ds = !0
	}, this.oG = function() {
		return !(nm && nn || (nm = !1))
	}, this.ef = function() {
		var oJ, oK, fd, oN;
		nm && (na < .5 ? nc < nd && (nc += nd * nZ, nb = na) : 1 - nb < na && (nc = (nc -= nd * nZ) < nd * nZ ? nd * nZ : nc), nk = nk >= bi.ea ? bi.ea - 1 : nk, fd = bi.ea - nk, na = 1e3 < fd || 1 < (na += nc * fd / nl) ? 1 : na, nk = bi.ea,
			fd = io, oJ = jE, oK = jF, fd = (io = ng * Math.pow(nj / ng, na)) / fd, oN = 1 - (ng * Math.pow(nj / ng, 1 - na) - ng) / (nj - ng), aT.oD(ne + oN * (nh - ne), i.j / 2), aT.oE(nf + oN * (ni - nf), i.k / 2), ag.zoom(fd, (oJ * fd -
				jE) / (1 - fd), (oK * fd - jF) / (1 - fd)), bd.oF(), 1 <= na && (nm = !1, be.oO = !0), bi.ds = !0)
	}
}

function di(oP) {
	this.oQ = -1, this.pow = -1;
	var oR = oP || {},
		oS = this,
		oT = null,
		oU = null,
		oV = null,
		oW = null,
		oX = null,
		oY = [],
		oZ = 0,
		oa = null,
		ob = null,
		oc = null,
		od = !1,
		oe = null,
		oi = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255;

	function oj(ok, ol, className) {
		ok = document.createElement(ok);
		return className && (ok.className = className), ol && ol.appendChild(ok), ok
	}

	function on(em, ol, action) {
		ol = oj("button", ol);
		return ol.type = "button", ol.textContent = em, ol.addEventListener("click", action), ol
	}

	function oo(ol) {
		ol = oj("canvas", ol);
		return ol.width = ol.height = 128, ol
	}

	function ov(canvas, ow) {
		for (var canvas = canvas.getContext("2d"), data = (ob || (ob = canvas.createImageData(128, 128), oc = new Uint32Array(ob.data.buffer)), ow), oq = oc, or = 0, position = 0, color = 0; position < 16384; or += 6, color ^= 1) {
			for (var eJ = or >> 3, oG = position + ((data[eJ] << 8 | data[1 + eJ]) >> 10 - (7 & or) & 63), ou = color ? oi : 4294967295, aC = position; aC < oG; aC++) oq[aC] = ou;
			position = oG
		}
		canvas.putImageData(ob, 0, 0)
	}

	function oy() {
		if (oT) {
			oT.setAttribute("aria-busy", String(od)), oX.disabled = od, oW.disabled = od || !oZ;
			for (var aC = 0; aC < oY.length; aC++) oY[aC].disabled = od, oY[aC].setAttribute("aria-pressed", String(Boolean(oZ & 1 << aC)))
		}
	}

	function p0(event) {
		var p2, p1;
		"Escape" === event.key && (event.preventDefault(), oS.close()), "Tab" === event.key && oT && (p2 = (p1 = oT.querySelectorAll("button:not(:disabled)"))[0], p1 = p1[p1.length - 1], event.shiftKey && document.activeElement === p2 ? (event
			.preventDefault(), p1.focus()) : event.shiftKey || document.activeElement !== p1 || (event.preventDefault(), p2.focus()))
	}

	function p4() {
		oe = document.activeElement, (oT = oj("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), oT.setAttribute("aria-modal", "true"), oT.setAttribute("aria-label", "Select all images matching the reference");
		oj("style", oT).textContent =
			".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
		var p5 = oj("div", oT, "captcha-reference-row");
		oj("span", p5, "captcha-reference-label").textContent = "Find All:", (oV = oo(p5)).className = "captcha-reference", oV.setAttribute("aria-label", "Reference image"), oU = oj("div", oT, "captcha-grid");
		for (var aC = 0; aC < 16; aC++) oY.push(function(eJ) {
			var button = on("", oU, function() {
				od || (oZ ^= 1 << eJ, oy())
			});
			return button.className = "captcha-tile", button.setAttribute("aria-label", "Select image " + (eJ + 1)), button.setAttribute("aria-pressed", "false"), oo(button).setAttribute("aria-hidden", "true"), button
		}(aC));
		var p5 = oj("div", oT, "captcha-actions"),
			p8 = on("Close", p5, function() {
				oS.close()
			});
		oX = on("Reload", p5, p9), oW = on("Verify", p5, pA), oT.addEventListener("keydown", p0), oS.resize(), oy(), p8.focus()
	}

	function p9() {
		od || (oS.close(), b1.eh.pB(0, 0, bw.oQ, bw.pow))
	}

	function pA() {
		var pC, pD;
		!od && oZ && (pC = oZ, pD = oa, oS.close(), b1.eh.pB(pC, pD, bw.oQ, bw.pow))
	}
	this.show = function(pE, pD, oQ, pow) {
		this.oQ = oQ, this.pow = pow, oa = pD, oT || p4(), ov(oV, pE[0]);
		for (var iS = 0; iS < 16; iS++) ov(oY[iS].firstChild, pE[iS + 1]);
		oZ = 0, od = !1, oy(), "function" == typeof oR.pF && oR.pF()
	}, this.resize = function() {
		var size;
		oT && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), oT.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (oT) {
			for (var pG = oT.querySelectorAll("canvas"), aC = 0; aC < pG.length; aC++) pG[aC].width = pG[aC].height = 0;
			oT.remove(), oT = oU = oV = oW = oX = null, ob = oc = oa = null, oZ = 0, od = !(oY = []), oe && document.body.contains(oe) && oe.focus(), oe = null, "function" == typeof oR.pH && oR.pH()
		}
	}
}

function c4() {
	var ek = bD.color;
	this.pI = ek.pJ(0, 0, 0), this.pK = ek.pL(0, 0, 0, .7), this.pM = ek.pL(0, 0, 0, .5), this.pN = ek.pL(0, 0, 0, .85), this.pO = ek.pL(0, 0, 0, .75), this.pP = ek.pL(0, 0, 0, .6), this.pQ = ek.pL(0, 0, 0, .35), this.pR = ek.pJ(255, 255, 255), this
		.pS = ek.pL(255, 255, 255, .3), this.pT = ek.pL(255, 255, 255, .6), this.pU = ek.pL(255, 255, 255, .4), this.pV = ek.pL(255, 255, 255, .25), this.pW = ek.pL(255, 255, 255, .85), this.pX = ek.pL(255, 255, 255, .75), this.pY = ek.pL(255, 255,
			255, .15), this.pZ = ek.pL(255, 255, 255, .11), this.pa = ek.pJ(128, 128, 128), this.pb = ek.pL(64, 64, 64, .75), this.pc = ek.pL(88, 88, 88, .83), this.pd = ek.pL(60, 60, 60, .85), this.pe = ek.pL(80, 60, 60, .85), this.pf = ek.pJ(170,
			170, 170), this.pg = ek.pJ(200, 235, 245), this.ph = ek.pJ(30, 255, 30), this.pi = ek.pJ(0, 200, 0), this.pj = ek.pJ(128, 255, 128), this.pk = ek.pL(10, 65, 10, .75), this.pl = ek.pL(0, 255, 0, .6), this.pm = ek.pL(0, 255, 0, .5), this
		.pn = ek.pL(0, 200, 0, .5), this.po = ek.pL(0, 100, 0, .75), this.pp = ek.pL(0, 60, 0, .8), this.pq = ek.pL(0, 255, 0, .3), this.pr = ek.pL(0, 180, 0, .6), this.ps = ek.pL(0, 120, 0, .85), this.pt = ek.pJ(0, 120, 0), this.pu = ek.pL(0, 70, 0,
			.85), this.pv = ek.pJ(190, 230, 190), this.pw = ek.pJ(0, 255, 0), this.px = ek.pL(10, 120, 10, .9), this.py = ek.pJ(200, 255, 200), this.pz = ek.pJ(255, 120, 120), this.q0 = ek.pJ(255, 160, 160), this.q1 = ek.pJ(255, 70, 70), this.q2 = ek
		.pJ(230, 0, 0), this.q3 = ek.pL(220, 0, 0, .6), this.q4 = ek.pL(255, 100, 100, .8), this.q5 = ek.pL(100, 0, 0, .85), this.q6 = ek.pL(60, 0, 0, .85), this.q7 = ek.pL(200, 0, 0, .6), this.q8 = ek.pL(120, 0, 0, .85), this.q9 = ek.pJ(255, 70,
		10), this.qA = ek.pJ(230, 190, 190), this.qB = ek.pJ(255, 0, 0), this.qC = ek.pJ(255, 0, 255), this.qD = ek.pL(60, 0, 60, .85), this.qE = ek.pL(0, 60, 60, .85), this.qF = ek.pL(10, 60, 60, .9), this.qG = ek.pL(0, 96, 96, .75), this.qH = ek
		.pJ(0, 255, 255), this.qI = ek.pJ(160, 160, 255), this.qJ = ek.pL(0, 40, 90, .75), this.qK = ek.pL(0, 0, 255, .6), this.qL = ek.pJ(200, 200, 255), this.qM = ek.pL(50, 50, 255, .83), this.qN = ek.pL(20, 90, 150, .75), this.qO = ek.pL(10, 10,
			120, .75), this.qP = ek.pJ(255, 120, 100), this.qQ = ek.pL(255, 255, 0, .5), this.qR = ek.pL(255, 255, 150, .2), this.qS = ek.pJ(255, 255, 0), this.qT = ek.pJ(255, 255, 200), this.qU = ek.pL(200, 200, 0, .6), this.qV = ek.pL(140, 120, 0,
			.75), this.qW = ek.pL(180, 160, 40, .75), this.qX = ek.pL(70, 50, 20, .85), this.qY = ek.pL(30, 30, 0, .85), this.qZ = ek.pL(60, 60, 0, .85), this.qa = ek.pJ(255, 255, 100), this.qb = ek.pJ(255, 255, 140), this.qc = ek.pL(255, 140, 0,
			.75), this.qd = ek.pL(70, 40, 0, .85), this.qe = ek.pJ(255, 150, 0), this.qf = ek.pL(255, 200, 80, .85), this.qg = ek.pL(0, 0, 0, 0), this.qh = ek.pL(255, 255, 255, 0), this.qi = ek.pL(254, 254, 254, 0)
}

function d4() {
	this.i0 = new qj, this.gw = new qk, this.ql = new qm, this.qn = new qo, this.kx = new qp
}

function qj() {
	this.qq = 1, this.i1 = function(fM) {
		aE.lF ? bB.ql.i1(aE.fK, fM) : b1.qr.qs(fM)
	}, this.i7 = function(jD, k4) {
		this.qq && (this.qq = 0, bm.qt.qu(182, jD)), aE.lF ? bB.ql.i7(aE.fK, jD, k4) : b1.qr.qv(jD, k4)
	}, this.qw = function(jD, qx) {
		aE.lF ? bB.ql.qy(aE.fK, jD, qx) : b1.qr.qz(jD, qx)
	}, this.iC = function(jD, fM) {
		fM = (fM << 3) + bR.gC[6];
		aE.lF ? bB.ql.iC(aE.fK, jD, fM) : bQ.n1.n2(aE.fK) && b1.qr.r1(jD, fM)
	}, this.iF = function(jD) {
		849 === jD && (jD = 850);
		var nv = bR.gC[3];
		aE.lF ? bB.ql.iF(aE.fK, jD, nv) : bQ.iD.r2(aE.fK, nv) && b1.qr.r3(jD, nv)
	}, this.r4 = function(nv) {
		aE.lF ? bB.ql.r4(aE.fK, nv) : b1.qr.r3(849, nv)
	}, this.r5 = function(k4) {
		aE.lF ? bB.ql.r5(aE.fK, k4) : b1.qr.r6(k4)
	}, this.r7 = function(r8) {
		aE.lF ? bB.ql.r9(aE.fK, r8) : b1.qr.rA(r8)
	}, this.iO = function(rB) {
		aE.lF ? bB.ql.iO(aE.fK, rB) : b1.qr.rC(rB)
	}, this.rD = function() {
		aE.lF ? bB.ql.rD(aE.fK) : b1.qr.rE()
	}, this.iL = function() {
		aE.lF ? bB.ql.iL(aE.fK) : b1.qr.r6(513)
	}, this.i3 = function(jD, fM, k4) {
		aE.lF ? bB.ql.i3(aE.fK, jD, fM, k4) : b1.qr.rF(jD, fM, k4)
	}
}

function qp() {
	this.ky = function(player, qx, iJ) {
		bD.gw.rG(player, iJ, qx) && (af.qw(player, qx), !bD.gw.kI(qx)) && ap.ji.kX[qx] && ap.ji.kX[qx]--
	}, this.rH = function(player, qx, iJ) {
		bD.gw.rI(iJ, qx) ? ao.ej(qx, bR.g7[0]) && (bt.rJ(player, qx, bR.g7[0], 1), bD.gw.gz(qx, bR.g7[0]), bg.rK(player, qx), ag.rL(qx, bR.g7[0])) : bg.h0(player, iJ, 12)
	}
}

function qk() {
	this.rM = function(r8, player) {
		aO.r7(aE.fK, player, r8), b1.qr.rN(r8, player)
	}, this.rO = function(player) {
		aO.rP(player, 0), b1.qr.rQ(player)
	}, this.rR = function(rS, player) {
		aO.rT(rS, player), b1.qr.rU(rS, player)
	}, this.rV = function() {
		aE.lF || aE.hj || b1.rW.rV()
	}
}

function qo() {
	this.ef = function(aD) {
		var id, gJ, oG;
		for (bK.dk(aD), bK.eJ += 2, oG = 8 * bK.size; bK.eJ + 8 <= oG;) id = bK.rX(4), gJ = bK.rX(9), 0 === id ? this.rY(id, gJ, bK.rX(22)) : 1 === id ? this.rY(id, gJ, bK.rX(10), bK.rX(10)) : 2 === id ? this.rY(id, gJ, bK.rX(10), bK.rX(9)) :
			3 === id ? this.rY(id, gJ, bK.rX(10), bK.rX(27)) : 4 === id ? this.rY(id, gJ, bK.rX(10), bK.rX(16)) : 5 === id || 6 === id ? this.rY(id, gJ, bK.rX(10)) : 7 === id ? this.rY(id, gJ, bK.rX(1)) : 10 === id ? this.rY(id, gJ, bK.rX(20), bK
				.rX(22)) : this.rY(id, gJ)
	}, this.rZ = [], this.ra = function() {
		for (var rc = 0, rd = 0, re = 0, rf = 0, rg = 0, rh = 0, aC = 0; aC < 512; aC++) rc += ah.nX[aC], rd += ah.hO[aC], re += ah.hc[aC], rf += bQ.z.kz[aC];
		rg += bQ.z.ml, rh += am.lR, this.rZ.push(re % 1073741824 * 4 + (rc + rd + rf + rg + rh) % 4)
	}, this.rY = function(id, gJ, gL, gN) {
		0 === id ? bB.ql.i1(gJ, gL) : 1 === id ? bB.ql.i7(gJ, gL, gN) : 2 === id ? bB.ql.qy(gJ, gL, gN) : 3 === id ? bB.ql.iC(gJ, gL, gN) : 4 === id ? bB.ql.iF(gJ, gL, gN) : 5 === id ? bB.ql.r5(gJ, gL) : 6 === id ? bB.ql.r9(gJ, gL) : 7 === id ?
			bB.ql.iO(gJ, gL) : 8 === id ? bB.ql.rD(gJ) : 9 === id ? bB.ql.ri(gJ) : 10 === id && bB.ql.i3(gJ, gL >> 10, gN, gL % 1024)
	}
}

function qm() {
	this.i1 = function(player, fM) {
		bD.gw.hl(0) && bD.gw.hm(player) && bP.jI(fM) && (bC.rj.rk(0, player, fM), aE.rl.ej(player, fM))
	}, this.i7 = function(player, jD, k4) {
		bD.gw.hl(1) && bD.gw.hm(player) && bD.gw.rm(player, k4) && bD.gw.n3(player, jD, 12, 0) && bD.gw.rn(player, k4) && ((k4 = ae.kG(player, bR.fW[0])) || ae.kZ(player)) && (ah.ro[player]++, bC.rj.rk(1, player, jD, bR.fW[0]), ap.jg.ju(player,
			k4)) && (bD.gw.n5(player), bg.rp(player, jD), ap.jg.k0(player))
	}, this.qy = function(player, jD, qx) {
		bD.gw.hl(1) && bD.gw.hm(player) && aE.iU && bD.gw.rm(player, qx) && bD.gw.rq(player, qx) && bD.gw.rG(player, bD.gw.jC(player, jD), qx) && ao.ej(qx, bR.g7[0]) && (bC.rj.rk(2, player, jD, qx), af.qw(player, qx))
	}, this.iC = function(player, jD, r0) {
		bR.gC[1] = 7 & r0;
		var fM = r0 >> 3;
		bD.gw.hl(1) && bD.gw.hm(player) && bP.jI(fM) && bQ.n1.n2(player) && bQ.n1.rr(fM) && bD.gw.n3(player, jD, 32, 0) && bQ.li.rs(player, fM, 1) && (bg.rt(player), bC.rj.rk(3, player, jD, r0), bD.gw.n5(player), bo.ru.iC(player), bQ.z.n6(
			player))
	}, this.iF = function(player, jD, nv) {
		849 === jD ? this.r4(player, nv) : bD.gw.hl(1) && bD.gw.hm(player) && bD.gw.n3(player, jD, 32, 0) && bQ.iD.rv(player, nv) && (bg.rt(player), bC.rj.rk(4, player, jD, nv), bD.gw.n5(player), bo.ru.iF(player), bQ.z.n6(player))
	}, this.r4 = function(player, nv) {
		bD.gw.hl(1) && bD.gw.hm(player) && bQ.rw.ef(player, nv) && bC.rj.rk(4, player, 849, nv)
	}, this.r5 = function(player, k4) {
		513 === k4 ? this.iL(player) : bD.gw.hl(1) && bD.gw.hm(player) && (k4 = Math.min(k4, aE.fX), ae.kG(player, k4)) && (bC.rj.rk(5, player, k4), ae.rx(player, k4))
	}, this.r9 = function(player, r8) {
		(bD.gw.hl(1) || bD.gw.hl(2)) && bD.gw.hm(player) && (r8 = bO.ik(r8, 0, 1023), bC.rj.rk(6, player, r8), ag.ry(player, 0, r8))
	}, this.iO = function(player, rB) {
		ax.iN(player) && (bC.rj.rk(7, player, rB), ax.rz(player, rB))
	}, this.rD = function(player) {
		(bD.gw.hl(0) || bD.gw.hl(1)) && bD.gw.hm(player) && aN.s0(player) && (bC.rj.rk(8, player), bT.rD(player))
	}, this.ri = function(player) {
		bC.rj.rk(9, player), bT.ri(player)
	}, this.iL = function(player) {
		ax.iP(player) && (bC.rj.rk(5, player, 513), ax.iL(player))
	}, this.i3 = function(player, jD, fM, k4) {
		bD.gw.hl(1) && bD.gw.hm(player) && bD.gw.rm(player, k4) && bD.gw.rn(player, k4) && bP.jI(fM) && an.fB.fU(player, fM) && (ae.kG(player, bR.fW[0]) || ae.kZ(player)) && (bC.rj.rk(10, player, (jD << 10) + bR.fW[0], fM), k4 = bD.gw.m7(player,
			jD), ah.h2[player].push(bR.fb[0]), ae.ej(player, k4, bR.fW[0]), aG.k2(player, !0), bg.s1(player))
	}
}

function s2() {
	var s4;
	this.s3 = [], this.s4 = document.createElement("div"), this.s5 = function(s6, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = s6, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.s4.appendChild(
			title), title
	}, this.s7 = function(s6, marginBottom) {
		var s8 = document.createElement("p");
		return s8.textContent = s6, s8.style.fontSize = "0.75em", s8.style.lineHeight = "1.2em", s8.style.marginBottom = marginBottom || "0", this.s4.appendChild(s8), s8
	}, this.s9 = function(s6) {
		var sA = document.createElement("p");
		return sA.textContent = s6, sA.style.fontSize = "1em", sA.style.marginBottom = "0", sA.style.whiteSpace = "pre-wrap", sA.style.overflowWrap = "break-word", this.s4.appendChild(sA), sA
	}, this.sB = function(sC, fontSize) {
		var s4 = document.createElement("div");
		return s4.innerHTML = sC, s4.style.fontSize = fontSize || "1em", s4.style.lineHeight = "1.2em", this.s4.appendChild(s4), s4
	}, this.sD = function(sE) {
		for (var sF = sE.sF, fa = sF.length, aC = 0; aC < fa; aC++) this.s4.appendChild(sF[aC])
	}, this.sG = function(sH) {
		return this.s3.push(sH), this.s4.appendChild(sH.e), sH
	}, this.resize = function() {
		for (var fa = this.s3.length, aC = 0; aC < fa; aC++) this.s3[aC].resize && this.s3[aC].resize()
	}, (s4 = this.s4).style.position = "absolute", s4.style.height = "auto", s4.style.padding = "0.5em"
}

function sI(sJ, sK) {
	var s4 = document.createElement("div");

	function sS() {
		var aC, sT, k, h9, fd, sO = i.l * s4.offsetWidth,
			sU = new Float64Array(function(sO) {
				var j = .25 * bD.sP.sQ(.6) * i.im;
				return Math.max(Math.floor(sO / j), 1)
			}(sO)),
			sV = bf.sV,
			sW = (sO - (sU.length + 1) * bf.gap) / (sU.length * i.l);
		for (sU.fill(sV), aC = 0; aC < sK.length; aC++) sT = (fd = sK[aC].s4).style, k = bD.sX.min(sU), h9 = sU.indexOf(k), sT.top = bD.sP.sY(k), sT.left = bD.sP.sY(sV + h9 * (sW + sV)), sT.width = bD.sP.sY(sW), bD.sP.sZ(fd, 5), sU[h9] += fd
			.offsetHeight + 3 * sV;
		s4.style.height = bD.sP.sY(bD.sX.max(sU) - 2 * sV)
	}
	this.sL = s4, this.sM = sK, this.resize = function() {
		var aC;
		for (aC = 0; aC < sK.length; aC++) sK[aC].resize();
		sS(), sS()
	}, s4.style.width = "100%", s4.style.maxWidth = "100%", sJ.style.lineHeight = "1.5em", sJ.style.overflowX = "hidden", sJ.style.overflowY = "auto";
	for (var aC = 0; aC < sK.length; aC++) s4.appendChild(sK[aC].s4);
	sJ.appendChild(s4)
}

function x(sa, sb, sc, sd, se) {
	var self, sf = document.createElement("button");

	function sm() {
		var ss;
		bM.sr() || (ss = bD.color.st(sc), !1 !== sd && 0 < ss[0] && ss[0] < 255 && ss[0] === ss[1] && ss[0] === ss[2]) || (128 < ss[0] && 128 < ss[1] && 128 < ss[2] ? sf.style.backgroundColor = bD.color.su(sc, -50) : sf.style.backgroundColor = bD
			.color.su(sc, ss[3] && ss[3] < 120 ? 150 : 50))
	}

	function sl() {
		if (sd) {
			var ss = bD.color.st(sc);
			if (ss[0] === ss[1] && ss[0] === ss[2]) return
		}
		sb && ((ss = sb(this)) ? 2 === ss && sm() : sw(this))
	}

	function so() {
		this.style.backgroundColor = sc
	}

	function sn() {
		sw(this)
	}

	function sw(fd) {
		fd.style.backgroundColor = sc, fd.blur()
	}
	this.button = sf, this.sg = sb, this.sh = sc, this.sk = function(sp) {
		sp = 1.1 - Math.min(.01 * sa.length, .6) + .2 * sp;
		sf.style.fontSize = sp.toFixed(1) + "em"
	}, this.sj = function(ek) {
		ek ? 1 === ek ? ek = bE.pd : 2 === ek && (sd = 1, ek = bE.pd) : (sd = 0, ek = bE.pN), this.sh = sc = ek, sf.style.backgroundColor = ek
	}, self = this, sf.innerHTML = sa, sf.style.color = se ? bE.qS : bE.pR, sf.style.userSelect = "none", sf.style.outline = "none", sf.style.overflowWrap = "break-word", self.sj(sc), sf.style.border = "none", sf.style.font = "inherit", self.sk(
		0), sf.style.padding = "0em 0.3em", sf.onclick = sl, sf.addEventListener("mouseover", sm), sf.addEventListener("mouseout", sn), sf.addEventListener("focus", sm), sf.addEventListener("blur", so)
}

function sx(p1, sJ) {
	var s4;
	this.resize = function() {
		for (var aC = 0; aC < p1.length; aC++) bD.sP.sZ(p1[aC].button);
		s4.style.gap = s4.style.padding = bD.sP.sY(bf.sV)
	}, (s4 = document.createElement("div")).style.display = "grid", s4.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", s4.style.overflowY = "auto", s4.style.gridAutoRows = "5.3em", s4.style.maxHeight = "100%";
	for (var aC = 0; aC < p1.length; aC++) p1[aC].sk(1), s4.appendChild(p1[aC].button);
	sJ.appendChild(s4)
}

function sz(t0, t1, t2) {
	this.fh = 0, this.fj = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.sP.sQ(t2 || .5) * t0[1] * i.im, i.k - 2 * bf.gap), this.j = Math.min(this.k * (t0[0] / t0[1]), i.j - 2 * bf.gap), this.k = t0[1] * this.j / t0[0], this.fh = bf.gap + t1[0] * (i.j - this.j - 2 * bf.gap), this.fj = bf
			.gap + t1[1] * (i.k - this.k - 2 * bf.gap)
	}, this.t3 = function() {
		return this.fh + .5 * this.j
	}
}

function t4(t5, t6) {
	var tF, self, t7 = document.createElement("div"),
		t8 = document.createElement("div"),
		t9 = document.createElement("div"),
		tA = null,
		tG = (this.tB = new tC({
			value: "",
			eJ: -1
		}, 0, tD, function(e) {
			e.target.value = bD.tN.tO(e.target.value), tA.tM.textContent = 127 - e.target.value.length
		}), 0),
		tH = 1,
		tI = 0,
		tJ = 1048575;

	function tD() {
		t5(), tA.tM.textContent = 127
	}

	function tT(tS, sH) {
		sH && (sH.tY = 1, tS.appendChild(bq.tZ.transform(sH)))
	}

	function tW(by) {
		tH ? t7.scrollTop = t7.scrollHeight : by && (t7.scrollTop = tI)
	}
	this.reset = function(tP) {
			tJ = 1048575, t8.textContent = "", tP || this.nK()
		}, this.nK = function() {
			var tQ = bq.z.tQ,
				tR = bq.z.tR,
				fa = tQ.length,
				kB = 1048575 === tJ ? 0 : fa - (tR - tJ + 1048575) % 1048575;
			if (tJ = tR, !(fa <= (kB = Math.max(kB, 0)))) {
				for (var tS = document.createDocumentFragment(), aC = kB; aC < fa; aC++) tT(tS, bq.lk.tU(tQ[aC], bq.lk.tV(tQ[aC])));
				t8.appendChild(tS), tW()
			}
		}, this.tX = function(s) {
			var tS = document.createDocumentFragment();
			tT(tS, s), t8.appendChild(tS), tW()
		}, this.show = function(sJ) {
			sJ.appendChild(t7), sJ.appendChild(t9), this.resize(sJ)
		}, this.ta = function(sJ) {
			u.removeChild(sJ, t7), u.removeChild(sJ, t9)
		}, this.resize = function(sJ) {
			tG = sJ ? sJ.offsetHeight : tG;
			var sJ = bD.sP.tc(.04, .75),
				td = Math.max(sJ, tG - sJ),
				te = i.j / i.l,
				tf = .7 * te,
				tg = bD.sP.sY(tG - sJ - td),
				td = (t9.style.height = bD.sP.sY(sJ), t7.style.height = bD.sP.sY(td), i.k > i.j || a1.a2.il() ? (t9.style.top = tg, t7.style.top = bD.sP.sY(tG - td), bD.sP.sZ(t7, 8)) : (t7.style.top = tg, t9.style.top = bD.sP.sY(tG - sJ), bD.sP.sZ(
						t7, 2)), this.tB.e.style.width = bD.sP.sY(tf), this.tB.e.style.fontSize = tF.button.style.fontSize = bD.sP.sY(.5 * sJ), bD.sP.sZ(this.tB.e, 6), tF.button.style.left = bD.sP.sY(tf), tF.button.style.width = bD.sP.sY(te - tf),
					.385 * sJ);
			a1.a2.il() && (td *= .8 - .12 * (i.j > i.k)), t8.style.marginLeft = t8.style.marginRight = bD.sP.sY(.5 * td), t8.style.fontSize = bD.sP.sY(td), tW(1)
		}, (self = this).tB.e.tK = 127, t7.style.position = "absolute", t7.style.left = "0", t7.style.width = "100%", t7.style.overflowX = "hidden", t7.style.overflowY = "auto", t7.style.font = "inherit", t7.style.backgroundColor = bE.pP, t7
		.addEventListener("scroll", function() {
			tI = t7.scrollTop, tH = tI < t7.scrollHeight - t7.clientHeight - 2 ? 0 : 1
		}), t8.style.font = "inherit", t9.style.position = "absolute", t9.style.left = "0", t9.style.width = "100%", self.tB.e.setAttribute("placeholder", L(13)), self.tB.e.style.position = "absolute", self.tB.e.style.top = "0", self.tB.e.style
		.left = "0", self.tB.e.style.height = "100%", self.tB.e.style.backgroundColor = bE.pM, self.tB.e.style.textAlign = "center", (tF = new x(L(14), tD)).button.top = "0", tF.button.style.position = "absolute", tF.button.style.height = "100%", tF
		.sj(bE.qh), tA = new tL("127", tF.button, 1, 1), t7.appendChild(t8), t9.appendChild(self.tB.e), t9.appendChild(tF.button)
}

function ti(tj, sa, tk) {
	function click() {
		var value = 1 - tj.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + sa, void 0 !== tj.eJ ? bm.qt.qu(tj.eJ, value) : tj.value = value, tk && tk(value)
	}
	var e;
	sa = sa || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (tj.value ? "🟩 " : "⬜ ") + sa, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function tl(sJ, sC) {
	var s4 = document.createElement("div");
	this.sL = s4, this.resize = function() {
		s4.style.padding = bD.sP.sY(bf.sV), s4.style.lineHeight = bD.sP.sY(bD.sP.tc(.035))
	}, sJ.style.overflowX = "hidden", sJ.style.overflowY = "auto", s4.innerHTML = sC, sJ.appendChild(s4)
}

function tm(tn) {
	var s4 = document.createElement("div");
	this.e = s4, this.tp = tn, this.resize = function() {
		for (var fa = tn.length, aC = 1; aC < fa; aC++) bD.sP.sZ(tn[aC], 4)
	};
	var aC, fa = tn.length;
	for (s4.style.width = "100%", s4.style.height = "2.7em", s4.style.marginTop = "0.6em", s4.style.border = "inherit", aC = 0; aC < fa; aC++) tn[aC].style.verticalAlign = "top", tn[aC].style.width = (100 / fa).toFixed(2) + "%", tn[aC].style.height =
		"100%", tn[aC].style.fontSize = "0.75em", s4.appendChild(tn[aC])
}

function tq(tr, sc, ts, tt) {
	this.s4 = document.createElement("div"), this.p1 = tr;
	var tu = 0;
	this.resize = function(sJ, tw) {
		var fa = tr.length;
		if (!ts)
			for (var aC = 1; aC < fa; aC++) bD.sP.sZ(tr[aC].button, 4);
		if (tt)
			for (aC = 0; aC < fa; aC++) tr[aC].button.style.width = tt[aC] + "%";
		else {
			for (var tx = 0, aC = 0; aC < fa; aC++) tx += tr[aC].button.offsetWidth;
			if (sJ && (tu = sJ.offsetWidth), tw && tx < tu)
				for (aC = 0; aC < fa; aC++) tr[aC].button.style.width = (100 * tr[aC].button.offsetWidth / tx).toFixed(2) + "%";
			else
				for (aC = 0; aC < fa; aC++) tr[aC].button.style.width = "auto";
			tw || this.resize(sJ, 1)
		}
	};
	var tv = this;
	tv.s4.style.height = tv.s4.style.maxHeight = "100%";
	for (var aC = 0; aC < tr.length; aC++) tr[aC].sj(sc), tr[aC].button.style.height = "100%", tr[aC].button.style.padding = "0.0em 0.9em", tr[aC].button.style.whiteSpace = "pre", tv.s4.appendChild(tr[aC].button)
}

function ty() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.sP.sZ(this.e, 8, bE.pa)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function tz() {
	var u4, u5, u0 = document.createElement("div"),
		u1 = document.createElement("div"),
		u2 = 0,
		u3 = 0;
	this.show = function(fh, fj, s6, u6, u7, ek) {
			if (u2) {
				if (!u6) return;
				this.ta()
			}
			fh === fj && -1 === fh ? (fh = u4, fj = u5) : (u4 = fh, u5 = fj);
			var u8 = Math.floor(bD.sP.tc(.018)),
				u7 = (fh = Math.max(u8 + 2, fh), u7 || (u3 = u6), u2 = 1, i.j / i.l),
				u6 = (u0.style.whiteSpace = "pre", u0.textContent = s6, bD.sP.sZ(u0, 5), u0.style.font = bD.sP.uA(0, bD.sP.tc(.015)), u0.style.padding = "0.3em 0.6em", u0.style.left = fh + "px", u0.style.top = "0px", document.body.appendChild(u0),
					fh + u0.offsetWidth - u7),
				s6 = (0 < u6 && (fh -= u6, fh = Math.max(u8 + 1, fh), u0.style.left = fh + "px", fh < u8 + 2) && (u0.style.whiteSpace = "pre-wrap"), u0.offsetHeight);
			u0.style.top = fj - s6 + u3 * bf.uC + "px", fh -= u8, u1.style.backgroundColor = bD.color.pJ(ek >> 12 << 2, (ek >> 6 & 63) << 2, (63 & ek) << 2), u1.style.left = fh + "px", u1.style.top = u0.style.top, u1.style.width = u8 + "px", u1.style
				.height = s6 + "px", bD.sP.sZ(u1, 4), bD.sP.sZ(u1, 8), bD.sP.sZ(u1, 2), document.body.appendChild(u1)
		}, this.ta = function(uD) {
			if (u2) {
				if (uD && u3) return 0;
				u2 = 0, u.removeChild(document.body, u0), u.removeChild(document.body, u1)
			}
			return 1
		}, u0.style.position = "absolute", u0.style.backgroundColor = bE.pN, u0.style.color = bE.pR, u0.style.pointerEvents = "none", u0.style.zIndex = "5", u0.style.maxWidth = "100%", u1.style.position = "absolute", u1.style.color = bE.pR, u1.style
		.pointerEvents = "none", u1.style.zIndex = "5"
}

function tC(uE, type, uF, uG) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.uH++, e.value = uE.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.pR, e.style.backgroundColor = bE.pK, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.uI++
		}), e.addEventListener("blur", function() {
			i.uI--, -1 !== uE.eJ && bm.qt.qu(uE.eJ, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== uE.eJ && bm.qt.qu(uE.eJ, e.value), uF ? uF() : e.blur())
		}), uG && e.addEventListener("input", function(sH) {
			uG(sH)
		})
}

function uJ(sJ, data, oP) {
	var fa = data.uK.length,
		uL = document.createElement("div"),
		uM = document.createElement("div"),
		uN = document.createElement("div"),
		uO = new Array(fa),
		sK = new Array(fa),
		uP = new Array(data.uQ.length),
		uR = bD.color.pL(70, 70, 0, .35);

	function su() {
		this.style.backgroundColor = bD.color.su(uR, 160)
	}

	function uY() {
		this.style.backgroundColor = uR
	}

	function sS() {
		var ft;
		for (sJ.style.font = bD.sP.uA(0, bD.sP.ug(.026, .5, .03)), aC = 1; aC < uP.length; aC++) bD.sP.sZ(uP[aC], 4);
		if (bD.sP.sZ(uL, 2), fa) {
			for (var i2, uh = uL.offsetWidth, ui = uN.offsetWidth, aC = 0; aC < uP.length; aC++) i2 = .01 * data.uX[aC] * ui, uP[aC].style.width = (100 * i2 / uh).toFixed(2) + "%";
			var lq = data.uK[0].length;
			for (aC = 0; aC < fa; aC++)
				for (bD.sP.sZ(uO[aC], 2), ft = 1; ft < lq; ft++) bD.sP.sZ(sK[aC][ft], 4);
			uM.uS && (uM.scrollTop = uM.uS)
		}
	}
	this.resize = function() {
			sS(), sS()
		}, sJ.style.display = "flex", sJ.style.flexDirection = "column", uM.style.overflowX = "hidden", uM.style.overflowY = "auto", uM.addEventListener("scroll", function() {
			this.uS = this.scrollTop, oP && oP.uT && (u.z.uU[oP.uT] = this.scrollTop)
		}),
		function() {
			var fd, aC, uK = data.uK,
				lq = fa ? uK[0].length : 0;
			for (aC = 0; aC < fa; aC++) {
				uO[aC] = document.createElement("div"), uO[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.pL(130, 130, 130, .35) : bE.pQ
				}(aC), uO[aC].style.width = "100%", uO[aC].style.display = "flex", sK[aC] = new Array(lq);
				for (var ft = 0; ft < lq; ft++) sK[aC][ft] = fd = document.createElement("div"), fd.style.display = "flex", fd.style.justifyContent = "center", fd.style.wordBreak = "break-all", fd.style.padding = "0.4em 0em", fd.style.width = data
					.uX[ft] + "%", fd.textContent = uK[aC][ft].g2, 1 === uK[aC][ft].eb && (fd.name = "" + aC, fd.style.color = bE.qS, fd.style.backgroundColor = uR, fd.addEventListener("mouseover", su), fd.addEventListener("mouseout", uY), function(
						fd, ua, ub) {
						2147483647 !== ub && fd.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, ua), bK.dk(bG.aD), this.style.backgroundColor = uR, u.v(8, u.uc, new ud(25, {
								action: 0,
								ua: bI.f1.ue(bI.f1.uf(5)),
								ub: ub
							}))
						})
					}(fd, uK[aC][ft].ua, uK[aC][ft].ub)), uO[aC].appendChild(fd)
			}
			for (uL.style.display = "flex", uL.style.backgroundColor = bD.color.pL(0, 120, 0, .35), aC = 0; aC < uP.length; aC++) uP[aC] = fd = document.createElement("div"), fd.style.display = "flex", fd.style.justifyContent = "center", fd.style
				.wordBreak = "break-all", fd.style.padding = "0.4em 0em", fd.style.width = data.uX[aC] + "%", fd.innerHTML = data.uQ[aC], uL.appendChild(fd)
		}();
	for (var aC = 0; aC < fa; aC++) uN.appendChild(uO[aC]);
	uM.appendChild(uN), sJ.appendChild(uL), sJ.appendChild(uM), oP && oP.uT && (uM.uS = u.z.uU[oP.uT])
}

function uj() {
	var un, uo, uk = document.createElement("div"),
		ul = document.createElement("div"),
		um = document.createElement("div"),
		uN = document.createElement("div"),
		p1 = [],
		eE = [L(16), L(17), L(18), L(19), L(20), L(21), L(22), L(23)],
		up = [1, 2, 3, 0, 9, 10, 11, 13];

	function ur(aC) {
		u.v(8, 0, new ud(21, {
			ut: up[aC],
			uu: 0,
			uv: 10
		}))
	}
	this.show = function() {
			this.qu(u.z.uw), document.body.appendChild(uk)
		}, this.ta = function() {
			u.removeChild(document.body, uk)
		}, this.qu = function(uw) {
			for (var ux = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < p1.length; aC++) {
				var j = uw[aC];
				un[ux[aC]][1].tM.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, uy = bf.gap,
				k = bD.sP.uz(.085),
				j = Math.min(4 * k, i.j - 2 * uy),
				fa = p1.length;
			for (bD.sP.v0(uk, uy, i.k - uy - k, j, k), bD.sP.sZ(uk), bD.sP.sZ(ul, 6), aC = 0; aC < fa - 1; aC++) bD.sP.sZ(p1[aC].button, 6);
			for (aC = 0; aC < fa; aC++) un[aC][0].resize(), un[aC][1].resize();
			for (p1[0].fh = 0, p1[0].button.style.left = bD.sP.sY(p1[0].fh), p1[0].button.style.width = bD.sP.v1(1.7 * k), aC = 1; aC < fa; aC++) p1[aC].fh = p1[aC - 1].fh + p1[aC - 1].button.offsetWidth, p1[aC].button.style.left = bD.sP.sY(p1[aC]
				.fh);
			if (!uo) {
				if (!ac.v2()) return;
				(uo = ac.get(14)).style.width = "24%", uo.style.position = "absolute", ul.appendChild(uo)
			}
			uo.style.left = bD.sP.sY(0), uo.style.top = "7%", um.v3 && (um.scrollLeft = um.v3)
		}, uk.style.position = "absolute", ul.style.width = "25%", ul.style.height = "100%", ul.style.backgroundColor = bE.pN, um.style.position = "absolute", um.style.width = "75%", um.style.height = "100%", um.style.backgroundColor = bE.pN, um
		.style.top = um.style.right = bD.sP.sY(0), bD.sP.uq(um), uN.style.height = uN.style.maxHeight = "100%", p1.push(new x("", function() {
			ur(0)
		}, bE.qD)), p1.push(new x("", function() {
			ur(1)
		}, bE.qE)), p1.push(new x("", function() {
			ur(2)
		}, bE.q6)), p1.push(new x("", function() {
			ur(3)
		}, bE.pp)), p1.push(new x("", function() {
			ur(4)
		}, bE.qd)), p1.push(new x("", function() {
			ur(5)
		}, bE.qZ)), p1.push(new x("", function() {
			ur(6)
		}, bE.qd)), p1.push(new x("", function() {
			ur(7)
		}, bE.pI)), un = new Array(p1.length);
	for (var aC = 0; aC < p1.length; aC++) p1[aC].button.style.position = "absolute", un[aC] = [new us(eE[aC], p1[aC].button, .25, .45), new us("", p1[aC].button, .53, .84, 1)], p1[aC].button.style.height = p1[aC].button.style.maxHeight = "100%", p1[
		aC].button.top = bD.sP.sY(0), uN.appendChild(p1[aC].button);
	um.appendChild(uN), uk.appendChild(ul), uk.appendChild(um)
}

function v4(v5, v6, t5, t6, v7) {
	var v8 = document.createElement("div"),
		v9 = document.createElement("div"),
		vA = document.createElement("div"),
		vB = document.createElement("div"),
		vC = document.createElement("div"),
		vD = document.createElement("div"),
		vE = document.createElement("span"),
		vF = document.createElement("div"),
		vL = (this.vG = new t4(t5, t6), this.vH = new vI(t6), this.vJ = new vK(v7), 2);
	this.vP = function(vQ) {
		vQ = (vQ / 10).toFixed(1) + "%";
		vD.style.width = vQ, vE.innerHTML = vQ
	}, this.vR = function(vS) {
		(0 === vL ? this.vG : 1 === vL ? this.vH : this.vJ).ta(vB), (0 === (vL = vS) ? this.vG : 1 === vS ? this.vH : this.vJ).show(vB)
	}, this.vT = function() {
		return v9
	}, this.show = function() {
		document.body.appendChild(v8)
	}, this.ta = function() {
		u.removeChild(document.body, v8)
	}, this.resize = function() {
		var vU = 1 - .4 * a1.a2.il() * (i.j > 1.6 * i.k),
			vV = bD.sP.tc(.05 * vU),
			vW = i.k > i.j,
			vX = bD.sP.tc(.06 * vU + .03 * vW),
			vW = bD.sP.tc(.02 * vU + .01 * vW),
			vZ = bD.sP.tc(.025);
		v8.style.font = bD.sP.uA(0, vZ), vA.style.font = bD.sP.uA(0, .9 * vZ), vF.style.font = bD.sP.uA(0, .9 * vZ), vU < 1 && (vU = bD.sP.uA(0, vU * vZ), vA.style.font = vU, vF.style.font = vU, vC.style.font = vU), v9.style.height = bD.sP.sY(
			vV), v9.style.font = bD.sP.uA(0, .72 * vV), bD.sP.sZ(v9, 2), vA.style.top = bD.sP.sY(vV), vA.style.height = bD.sP.sY(vX), bD.sP.sZ(vA, 2), vB.style.top = bD.sP.sY(vV + vX), vB.style.height = bD.sP.sY(i.k / i.l - vV - 2 * vX - vW), vC
			.style.top = bD.sP.sY(i.k / i.l - vX - vW), vC.style.height = bD.sP.sY(vW), bD.sP.sZ(vC, 8), vE.style.font = bD.sP.uA(0, .8 * vW), vF.style.top = bD.sP.sY(i.k / i.l - vX), vF.style.height = bD.sP.sY(vX), bD.sP.sZ(vF, 8), v5.resize(
			v8), v6.resize(v8), 0 === vL ? this.vG.resize(vB) : (1 === vL ? this.vH : this.vJ).resize()
	};
	t5 = this;
	v8.style.position = "absolute", v8.style.top = "0", v8.style.left = "0", v8.style.width = "100%", v8.style.height = "100%", v8.style.backgroundColor = bE.pQ, bM.sr() || (v8.style.backdropFilter = "blur(4px)", v8.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (v8.style.display = "none"), v9.style.position = "absolute", v9.style.top = "0", v9.style.left = "0", v9.style.width = "100%", v9.style.display = "flex", v9.style.alignItems = "center", v9.translate = !1;
	for (var h = [vA, vF], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.sP.uq(h[aC]);
	vB.style.position = "absolute", vB.style.left = "0", vB.style.width = "100%", vB.style.font = "inherit", vC.style.position = "absolute", vC.style.left = "0", vC.style.width = "100%", vD.style.position = "absolute", vD.style.top = "0", vD.style
		.left = "0", vD.style.height = "100%", vD.style.width = "50%", vD.style.backgroundColor = bE.pn, vE.innerHTML = "", vE.style.position = "absolute", vE.style.top = "50%", vE.style.left = "50%", vE.style.transform = "translate(-50%, -50%)", vE
		.translate = !1, v9.appendChild(function() {
			var vO = document.createElement("h1");
			return vO.textContent = L(24), vO.style.margin = "0 auto 0.15em auto", vO.style.fontFamily = "Arial Black, system-ui", vO.style.fontSize = "inherit", vO.style.fontWeight = "inherit", vO
		}()), vA.appendChild(v5.s4), vC.appendChild(vD), vC.appendChild(vE), vF.appendChild(v6.s4), v8.appendChild(v9), v8.appendChild(vA), v8.appendChild(vB), v8.appendChild(vC), v8.appendChild(vF), v8.className = "fx-lobby", vB.className =
		"fx-panel", vC.className = "fx-progress", t5.vJ.show(vB)
}

function vK(v7) {
	var v8 = document.createElement("div"),
		vb = [],
		vc = 96,
		vd = ["battleRoyale", "oneVsOne", "zombie", "noFullSending"];

	function vs(e) {
		e.style.position = "absolute", e.style.top = e.style.left = "0", e.style.width = e.style.height = "100%", e.style.pointerEvents = "none"
	}

	function vg(button, w6) {
		var s4 = document.createElement("div");
		return s4.style.position = "absolute", s4.style.left = "0", s4.style.width = "100%", s4.style.height = "20%", s4.style.pointerEvents = "none", s4.style.backgroundColor = bE.pK, w6 ? s4.style.top = "0" : s4.style.bottom = "0", button
			.appendChild(s4), s4
	}

	function vj(w7, w8) {
		var s4 = document.createElement("div");
		return s4.style.position = "absolute", s4.style.top = "0", s4.style.width = "20%", s4.style.height = "100%", w8 ? s4.style.left = "0" : s4.style.right = "0", w7.appendChild(s4), s4
	}

	function vu(w9) {
		var canvas = document.createElement("canvas");
		return canvas.width = canvas.height = 64, vs(canvas), canvas.style.top = canvas.style.left = "10%", canvas.style.width = canvas.style.height = "80%", w9.appendChild(canvas), canvas.getContext("2d", {
			alpha: !0
		})
	}

	function vn(w7, left, right, width) {
		var s4 = document.createElement("div");
		return s4.style.position = "absolute", s4.style.top = "50%", s4.style.transform = "translateY(-50%)", s4.style.left = left, s4.style.right = right, s4.style.width = width, s4.style.textAlign = "left", w7.appendChild(s4), {
			s4: s4,
			w1: wC(s4, 1.9),
			vq: wC(s4, 1)
		}
	}

	function wC(ol, fontSize) {
		var s4 = document.createElement("div");
		return s4.style.fontSize = fontSize + "em", s4.style.lineHeight = "1.1", s4.style.whiteSpace = "nowrap", s4.style.overflow = "hidden", s4.style.textOverflow = "ellipsis", s4.style.textShadow = "0 0 0.25em black", ol.appendChild(s4), s4
	}

	function wD(e, s6) {
		e.textContent !== s6 && (e.textContent = s6)
	}

	function wE(sH) {
		sH.canvas && (bq.wF.wX(sH.canvas), sH.canvas = null), sH.w0 = ""
	}
	this.nK = function() {
		var sK = bq.sK.sK,
			fa = sK.length;
		if (fa !== vb.length) {
			for (var aC = 0; aC < vb.length; aC++) wE(vb[aC]);
			for (v8.textContent = "", vb = new Array(fa), aC = 0; aC < fa; aC++) vb[aC] = function(eJ) {
				var button = document.createElement("button"),
					vf = (button.style.position = "absolute", button.style.backgroundColor = bE.pQ, button.style.color = bE.pR, button.style.outline = "none", button.style.userSelect = "none", button.style.cursor = "pointer", button.style
						.padding = "0", button.style.overflow = "hidden", button.onclick = function() {
							v7(eJ)
						}, bD.sP.sZ(button), vg(button, 1)),
					vh = vg(button, 0),
					vi = vj(vf, 0),
					vk = vj(vh, 1),
					vl = vj(vh, 0),
					vm = vn(vf, "3%", "", "74%"),
					vo = vn(vh, "20%", "", "30%"),
					vp = vn(vh, "", "20%", "30%"),
					vr = (vp.s4.style.textAlign = "right", vo.vq.textContent = "Starts in", document.createElement("canvas"));
				return vr.width = vr.height = vc, vs(vr), vi.appendChild(vr), (button = {
					button: button,
					vf: vf,
					vh: vh,
					vt: vu(vk),
					vv: vu(vl),
					vw: 0,
					isContest: 0,
					vx: null,
					vi: vi,
					vr: vr,
					vy: vr.getContext("2d", {
						alpha: !0
					}),
					vz: -1,
					canvas: null,
					w0: "",
					map: vm.w1,
					w2: vm.vq,
					w3: vo.w1,
					w4: vp.w1,
					w5: vp.vq,
					hk: -1
				}).map.translate = !1, button.w2.translate = !1, button.w3.translate = !1, vo.vq.translate = !1, button
			}(aC), v8.appendChild(vb[aC].button);
			this.resize()
		}
		for (aC = 0; aC < fa; aC++) vb[aC].w0 !== bq.wF.wG(sK[aC].fG, sK[aC].mapSeed) && wE(vb[aC]);
		for (aC = 0; aC < fa; aC++) {
			var wH = sK[aC],
				sH = vb[aC],
				hk = wH.id === bq.sK.wI ? 1 : 0;
			wD(sH.map, bV.wJ.wK[wH.fG]), wD(sH.w2, bq.sK.wL(wH.w2)), wD(sH.w3, bq.sK.wM(wH.wN)), wD(sH.w4, wH.h3 + (bq.sK.wO(wH) ? "/" + wH.nS : "")), wD(sH.w5, 1 === wH.h3 ? L(25) : L(26)), sH.hk !== hk && (sH.hk = hk, sH.vf.style
				.backgroundColor = sH.vh.style.backgroundColor = hk ? bE.px : bE.pK, bD.sP.sZ(sH.button, 5, hk ? bE.py : bE.pR), sH.button.classList.toggle("fx-line", !hk)), ! function(sH) {
				!sH.vw && ac.v2() && (sH.vw = 1, sH.vt.drawImage(ac.wB("clock"), 0, 0), sH.vv.drawImage(ac.wB("userIcon"), 0, 0))
			}(sH), ! function(sH, w2) {
				sH.vz === w2 || 7 <= w2 && !ac.v2() || ((sH.vz = w2) < 7 ? bk.wV(sH.vy, w2 + 2, vc) : (sH.vy.clearRect(0, 0, vc, vc), sH.vy.drawImage(ac.wB(vd[w2 - 7]), 0, 0, vc, vc)))
			}(sH, wH.w2), ! function(sH, isContest) {
				sH.isContest === isContest || isContest && !ac.v2() || ((sH.isContest = isContest) ? (sH.vx || (sH.vx = function(sH) {
					var wU = ac.wB("crown"),
						canvas = document.createElement("canvas");
					return canvas.width = wU.width, canvas.height = wU.height, canvas.getContext("2d", {
							alpha: !0
						}).drawImage(wU, 0, 0), canvas.style.position = "absolute", canvas.style.top = "50%", canvas.style.left = "50%", canvas.style.width = "55%", canvas.style.height = "auto", canvas.style.transform =
						"translate(-50%, -50%)", canvas.style.opacity = "0.5", canvas.style.pointerEvents = "none", sH.button.insertBefore(canvas, sH.vf), canvas
				}(sH)), sH.vx.hidden = !1) : sH.vx.hidden = !0)
			}(sH, wH.wR), ! function(sH, wH) {
				var canvas;
				sH.canvas || (canvas = bq.wF.wW(wH.fG, wH.mapSeed)) && (sH.canvas = canvas, sH.w0 = bq.wF.wG(wH.fG, wH.mapSeed), vs(canvas), sH.button.insertBefore(canvas, sH.button.firstChild))
			}(sH, wH)
		}
	}, this.resize = function() {
		var fa = vb.length,
			j = v8.offsetWidth,
			k = v8.offsetHeight;
		if (0 !== fa && 0 !== j && 0 !== k) {
			for (var gap = bD.sP.tc(.012), wY = 0, wZ = 1, ek = 1; ek <= fa; ek++) {
				var rows = bO.g1(fa + ek - 1, ek),
					rows = Math.min((j - (ek + 1) * gap) / ek, (k - (rows + 1) * gap) / rows);
				wY < rows && (wY = rows, wZ = ek)
			}
			for (var wa = bO.g1(fa + wZ - 1, wZ), ny = (j - wZ * wY - (wZ - 1) * gap) / 2, nz = (k - wa * wY - (wa - 1) * gap) / 2, aC = 0; aC < fa; aC++) {
				var sT = vb[aC].button.style;
				sT.left = bD.sP.sY(ny + aC % wZ * (wY + gap)), sT.top = bD.sP.sY(nz + bO.g1(aC, wZ) * (wY + gap)), sT.width = sT.height = bD.sP.sY(wY), sT.fontSize = bD.sP.sY(.05 * wY)
			}
		}
	}, this.show = function(sJ) {
		sJ.appendChild(v8), this.nK(), this.resize()
	}, this.ta = function(sJ) {
		u.removeChild(sJ, v8)
	}, v8.style.position = "absolute", v8.style.top = "0", v8.style.left = "0", v8.style.width = v8.style.height = "100%", v8.style.overflow = "hidden", v8.style.font = "inherit"
}

function vI(t6) {
	var tM, w9, v8 = document.createElement("div"),
		vB = document.createElement("div"),
		wb = null,
		wc = null;
	this.nK = function() {
			vB.textContent = "", bq.wf.wg && bq.wf.ta(1);
			for (var tS = document.createDocumentFragment(), w4 = bq.wh.w4, sK = bq.sK.sK, wi = 0, aC = 0; aC < sK.length; aC++) wi = wi || 8 === sK[aC].w2;
			for (wb.style.width = wb.style.maxWidth = wi ? "11.3em" : "10.3em", aC = 0; aC < w4.length; aC++) {
				var eJ = bq.sK.wj(w4[aC].wk);
				! function(tS, sH, eJ, wr) {
					var tM = wb.cloneNode(!0),
						w9 = tM.firstChild;
					w9.style.backgroundColor = wc[eJ < 0 ? 15 : Math.min(eJ, 14)], 0 <= eJ && (w9.textContent = "" + (eJ + 1));
					tM.lastChild.textContent = bq.lk.ws(sH, wr), tM.style.color = bq.lk.wt(sH.wu), 11 === sH.wu && (tM.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
					__fx.settings.highlightDuplicateIps && (w9 = __fx.utils.getDuplicateIpHighlightColor(sH, bq.wh.w4, "aGc")) && (tM.style.backgroundColor = w9, tM.style.borderRadius = "0.3em");
					__fx.settings.highlightSameClan && (eJ = __fx.utils.getSameClanHighlightColor(sH, bq.aGF, "username")) && (tM.style.backgroundColor ? tM.style.boxShadow = "inset 0 0 0 2px " + eJ : tM.style.backgroundColor = eJ, tM.style
						.borderRadius = "0.3em");
					bq.lk.wv(sH) && (tM.style.textDecoration = "underline"), sH.ww && (tM.style.textDecorationLine = "underline", tM.style.textDecorationStyle = "dotted");
					tM.onclick = function(e) {
						t6(e, sH)
					}, bM.sr() || (tM.onmouseover = function(e) {
						bq.wf.wx(tM, sH, 1)
					}), tS.appendChild(tM)
				}(tS, w4[aC], eJ, 0 <= eJ && 8 === sK[eJ].w2)
			}
			vB.appendChild(tS), vB.classList.toggle("fx-wide", !!wi)
		}, this.show = function(sJ) {
			sJ.appendChild(v8)
		}, this.ta = function(sJ) {
			u.removeChild(sJ, v8)
		}, this.resize = function() {
			vB.style.fontSize = bD.sP.sY(bD.sP.tc(.02, .3))
		}, v8.style.top = "0", v8.style.left = "0", v8.style.width = v8.style.height = "100%", v8.style.overflowX = "hidden", v8.style.overflowY = "auto", v8.style.font = "inherit", vB.style.font = "inherit", vB.style.margin = "0.4em", v8
		.appendChild(vB), v8.className = "fx-players-scroll", vB.className = "fx-players", (tM = document.createElement("span")).style.cursor = "pointer", tM.style.margin = "0.2em 0.2em 0.2em 0.2em", tM.style.height = tM.style.maxHeight = "1.4em", tM
		.style.whiteSpace = "nowrap", tM.style.overflow = "hidden", tM.style.textOverflow = "ellipsis", tM.style.font = "inherit", tM.style.display = "inline-block", (w9 = document.createElement("span")).style.display = "inline-block", w9.style
		.width = w9.style.height = w9.style.lineHeight = "1.3em", w9.style.marginRight = "0.4em", w9.style.fontSize = "0.8em", w9.style.fontWeight = "bold", w9.style.textAlign = "center", w9.style.color = bE.pI, w9.style.textShadow = "none", w9.style
		.textDecoration = "none", w9.style.pointerEvents = "none", w9.translate = !1, tM.appendChild(w9), tM.appendChild(document.createTextNode("")), wb = tM, wc = function() {
			for (var h = new Array(16), wm = [0, 200, 0], wn = [240, 220, 0], wo = [220, 0, 0], aC = 0; aC < 15; aC++) {
				var wp = aC < 3 ? wm : wn,
					wq = aC < 3 ? wn : wo,
					oA = aC < 3 ? aC / 3 : Math.min((aC - 3) / 2, 1);
				h[aC] = "rgb(" + Math.round(wp[0] + oA * (wq[0] - wp[0])) + "," + Math.round(wp[1] + oA * (wq[1] - wp[1])) + "," + Math.round(wp[2] + oA * (wq[2] - wp[2])) + ")"
			}
			return h[15] = "rgb(128,128,128)", h
		}()
}

function wy(wz) {
	var v8 = document.createElement("div"),
		t9 = document.createElement("div"),
		x0 = [];

	function sm() {
		bM.sr() || (this.style.backgroundColor = bD.color.su(bE.pN, 50))
	}

	function sn() {
		this.style.backgroundColor = bE.pN
	}
	this.qu = function(x2, x3) {
			x0[2].textContent = x2 + 1 + " / " + x3
		}, this.show = function(sH) {
			sH = bq.lk.tU(sH, bq.lk.tV(sH)), t9.appendChild(bq.tZ.transform(sH)), document.body.appendChild(v8)
		}, this.resize = function() {
			var k = bD.sP.tc(.03, .5);
			v8.style.width = 10 * k + "px", v8.style.font = bD.sP.uA(1, .75 * k), bD.sP.sZ(v8, 4), t9.style.top = k + "px", t9.style.font = bD.sP.uA(0, .55 * k), bD.sP.sZ(t9, 2), v8.style.height = k + t9.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.sP.sZ(x0[aC], 6), x0[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) x0[aC].style.height = k + "px", bD.sP.sZ(x0[aC], 2);
			x0[2].style.width = 4 * k + "px", x0[1].style.left = 2 * k + "px", x0[2].style.left = 4 * k + "px", x0[3].style.left = 8 * k + "px"
		}, this.x4 = function() {
			for (var aC = 0; aC < 4; aC++) x0[aC].onclick = null, x0[aC].onmouseover = null, x0[aC].onmouseout = null;
			u.removeChild(document.body, v8), v8 = t9 = x0 = null
		}, v8.style.position = "absolute", v8.style.color = bE.pR, v8.style.zIndex = "3", v8.style.right = "0", v8.style.top = "0", t9.style.position = "absolute", t9.style.height = "auto", t9.style.color = bE.pR, t9.style.backgroundColor = bE.pN, t9
		.style.left = "0", t9.style.width = "100%", t9.style.overflowWrap = "break-word", v8.appendChild(t9);
	for (var aC = 0; aC < 4; aC++) x0[aC] = document.createElement("div"), x0[aC].style.position = "absolute", x0[aC].style.backgroundColor = bE.pN, x0[aC].style.color = bE.pR, x0[aC].style.top = "0", x0[aC].style.display = "flex", x0[aC].style
		.justifyContent = "center", x0[aC].style.alignItems = "center", x0[aC].style.userSelect = "none", x0[aC].style.outline = "none", x0[aC].style.font = "inherit", 2 !== (x0[aC].x1 = aC) && (x0[aC].onclick = wz, x0[aC].onmouseover = sm, x0[aC]
			.onmouseout = sn), v8.appendChild(x0[aC]);
	x0[0].textContent = "◀", x0[1].textContent = "▶", x0[3].textContent = "✖"
}

function x5(wz) {
	var u0 = document.createElement("div");

	function sm() {
		bM.sr() || (u0.style.backgroundColor = bD.color.su(bE.pN, 50))
	}

	function sn() {
		u0.style.backgroundColor = bE.pN
	}
	this.qu = function(x3) {
			u0.textContent = x3
		}, this.show = function() {
			document.body.appendChild(u0)
		}, this.resize = function() {
			var k = bD.sP.tc(.03, .5);
			u0.style.width = 2 * k + "px", u0.style.height = k + "px", u0.style.font = bD.sP.uA(1, .75 * k), bD.sP.sZ(u0, 4), bD.sP.sZ(u0, 2)
		}, this.x4 = function() {
			u0.onclick = null, u0.onmouseover = null, u0.onmouseout = null, u.removeChild(document.body, u0), u0 = null
		}, u0.style.position = "absolute", sn(), u0.style.color = bE.pR, u0.style.zIndex = "3", u0.style.right = "0", u0.style.top = "0", u0.style.display = "flex", u0.style.justifyContent = "center", u0.style.alignItems = "center", u0.style
		.userSelect = "none", u0.style.outline = "none", u0.onclick = wz, u0.onmouseover = sm, u0.onmouseout = sn
}

function x6(tr) {
	var v8 = document.createElement("div"),
		x7 = document.createElement("div"),
		u2 = (this.fh = 0, this.fj = 0);

	function x9() {
		bq.xA.ta()
	}
	this.p1 = tr, this.show = function(fh, fj, xC) {
		if (u2) return [0, 0];
		u2 = 1, this.fh = fh, this.fj = fj,
			function(self, xC) {
				var j = bD.sP.tc(.16, .7),
					k = tr.length * j / 3,
					xE = i.j / i.l,
					xF = i.k / i.l,
					oA = Math.min(1, Math.min(xE / j, xF / k));
				j *= oA, k *= oA, xC && (self.fh += bD.sP.tc(.03, .5)), self.fh = bO.ik(self.fh, 0, xE - j), self.fj = bO.ik(self.fj, 0, xF - k), x7.style.left = self.fh + "px", x7.style.top = self.fj + "px", x7.style.width = j + "px", x7.style
					.height = k + "px", x7.style.font = bD.sP.uA(0, .3 * k / tr.length), bD.sP.sZ(x7, 5);
				for (var aC = 1; aC < tr.length; aC++) bD.sP.sZ(tr[aC].button, 8)
			}(this, xC), document.body.appendChild(v8)
	}, this.ta = function() {
		u2 && (u2 = 0, v8.removeEventListener("click", x9), u.removeChild(document.body, v8))
	};
	for (var aC = 0; aC < tr.length; aC++) new tL("" + (1 + aC), tr[aC].button, 0, 1);
	v8.style.position = "fixed", v8.style.top = "0", v8.style.left = "0", v8.style.width = "100%", v8.style.height = "100%", v8.style.zIndex = "5", x7.style.position = "absolute",
		function() {
			for (var xB = (100 / tr.length).toFixed(2) + "%", aC = 0; aC < tr.length; aC++) tr[aC].button.style.width = "100%", tr[aC].button.style.height = tr[aC].button.style.maxHeight = xB, tr[aC].button.style.padding = "0.0em 0.9em", x7
				.appendChild(tr[aC].button)
		}(), v8.appendChild(x7), v8.addEventListener("click", x9)
}

function el() {
	var xG, xH, xI;

	function xP(aC) {
		return bD.color.pJ(xH[aC][0], xH[aC][1], xH[aC][2])
	}

	function xV(ft, fu) {
		return bD.color.xe(xH[ft], xH[fu]), xP(fu)
	}

	function xN() {
		xG && (xG.remove(), xG = null)
	}
	this.show = function(em, colors, id) {
		0 <= (xI = id) && b1.z.eg(0) && b1.eh.xJ(0, id), em = (em = (em = (em = (em = (em = (em = (em = (em = (em = (em = (em = em.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			xH = colors, (xG = document.createElement("div")).style.position = "fixed", xG.style.top = "0", xG.style.left = "0", xG.style.width = "100%", xG.style.height = "100%", xG.style.backgroundColor = bD.color.pL(xH[0][0], xH[0][1], xH[0][
				2], .6), xG.style.zIndex = "6", xG.onclick = function(e) {
				e.target === xG && xN()
			},
			function(em) {
				var iW, xO = document.createElement("div");
				xO.style.position = "absolute", xO.style.display = "flex", xO.style.flexDirection = "column", xO.style.top = "50%", xO.style.left = "50%", xO.style.backgroundColor = xP(2), iW = a1.a2.il() ? bD.sP.xQ(i.min) : bD.sP.tc(.4);
				iW = Math.max(iW, 200), xO.style.width = bD.sP.sY(iW), xO.style.height = bD.sP.sY(iW), xO.style.transform = "translate(-50%, -50%)",
					function(xO, iW) {
						var xU = document.createElement("div");
						xU.style.flex = "0 0 10%", xU.style.overflow = "hidden", xU.style.backgroundColor = xP(1), xU.style.color = xV(1, 7), xU.style.font = bD.sP.uA(1, .05 * iW), xU.style.display = "flex", xU.style.alignItems = "center", xU
							.style.justifyContent = "center", xU.innerHTML = L(27), xO.appendChild(xU)
					}(xO, iW),
					function(xO, em, iW) {
						var xW = document.createElement("div");
						xW.style.flex = "0 0 70%", xW.style.overflowY = "auto", xW.style.overflowX = "hidden", xW.style.whiteSpace = "pre-wrap", xW.style.wordWrap = "break-word", xW.style.padding = bD.sP.sY(.02 * iW), xW.style.backgroundColor =
							xP(2), xW.style.color = xV(2, 8), xW.style.font = bD.sP.uA(0, .07 * iW), xW.innerHTML = em, xW.innerHTML = "<style>a { color: inherit; }</style>" + xW.innerHTML, xO.appendChild(xW)
					}(xO, em, iW),
					function(xO, iW) {
						var ol = document.createElement("div"),
							xX = (ol.style.display = "flex", ol.style.flexDirection = "row", ol.style.justifyContent = "space-between", ol.style.alignItems = "stretch", ol.style.backgroundColor = xP(3), ol.style.flex = "1", ol.style.padding = bD
								.sP.sY(.01 * iW), ol.style.gap = bD.sP.sY(.01 * iW), document.createElement("div")),
							xY = (xX.style.flex = "0 0 60%", xX.style.height = "100%", new x(L(28, 0, 0, 1), function() {
								xN()
							}, xP(4), !1)),
							xY = (xY.button.style.width = "100%", xY.button.style.height = "100%", xY.button.style.color = xV(4, 9), xY.button.style.font = bD.sP.uA(1, .05 * iW), xX.appendChild(xY.button), document.createElement("div")),
							xa = (xY.style.flex = "0 0 15%", xY.style.height = "100%", xY.style.backgroundColor = xP(5), document.createElement("div")),
							xb = (xa.style.flex = "1", xa.style.height = "100%", new x(L(29), function(e) {
								return bD.sP.xc(e), xI < 0 || b1.z.eg(0) && (b1.eh.xJ(1, xI), xI = -1), !0
							}, xP(6), !1));
						xb.button.style.width = "100%", xb.button.style.height = "100%", xb.button.style.color = xV(6, 10), xb.button.style.font = bD.sP.uA(1, .035 * iW), xa.appendChild(xb.button), ol.appendChild(xX), ol.appendChild(xY), ol
							.appendChild(xa), xO.appendChild(ol)
					}(xO, iW), xG.appendChild(xO)
			}(em), document.body.appendChild(xG)
	}
}

function xf(uE, xg) {
	this.sF = [];
	var xh = this.sF;

	function click() {
		for (var aC = 0; aC < xh.length; aC++) xh[aC].textContent = xh[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eJ = parseInt(this.name);
		void 0 !== uE.eJ && bm.qt.qu(uE.eJ, eJ), xg && xg(eJ)
	}
	for (var xi, fa = uE.oP.length, aC = 0; aC < fa; aC++)(xi = document.createElement("p")).textContent = "⚪ " + uE.oP[aC], xi.style.margin = "0", xi.name = "" + aC, xi.style.cursor = "pointer", xi.style.fontSize = "1em", xi.addEventListener(
		"click", click), xh.push(xi);
	xh[uE.value].textContent = xh[uE.value].textContent.replace("⚪", "🟢")
}

function xj(title, xk, xl) {
	var uk = document.createElement("div"),
		xm = document.createElement("div"),
		uN = document.createElement("div"),
		xn = document.createElement("div"),
		xo = document.createElement("div");
	this.xp = uN, this.xq = xk, uk.className = "fx-page", this.show = function() {
			!1 !== xl ? document.body.appendChild(uk) : (document.body.appendChild(xm), document.body.appendChild(xn))
		}, this.ta = function() {
			!1 !== xl ? u.removeChild(document.body, uk) : (u.removeChild(document.body, xm), u.removeChild(document.body, xn))
		}, this.xu = function() {
			var td = bD.sP.tc(.1),
				tb = bD.sP.tc(.08 + .04 * (i.xv < 1), .3);
			return {
				td: td,
				tb: tb,
				xw: i.k / i.l - td - tb
			}
		}, this.resize = function(tw) {
			var fa = xk.length,
				xx = this.xu(),
				td = xx.td,
				tb = xx.tb;
			for (xm.style.height = bD.sP.sY(td), bD.sP.sZ(xm, 2), xn.style.top = bD.sP.sY(i.k / i.l - tb), xn.style.height = bD.sP.sY(tb), bD.sP.sZ(xn, 8), uN.style.top = bD.sP.sY(td), uN.style.height = uN.style.maxHeight = bD.sP.sY(xx.xw), xm.style
				.font = bD.sP.uA(0, bD.sP.tc(.02, .15)), xn.style.font = bD.sP.uA(0, bD.sP.tc(.02, .7)), uN.style.font = bD.sP.uA(0, bD.sP.tc(.02, .35)), aC = 1; aC < fa; aC++) bD.sP.sZ(xk[aC].button, 4);
			for (var tx = 0, aC = 0; aC < fa; aC++) tx += xk[aC].button.offsetWidth;
			if (tw && tx < xn.offsetWidth)
				for (aC = 0; aC < fa; aC++) xk[aC].button.style.width = (100 * xk[aC].button.offsetWidth / tx).toFixed(2) + "%";
			else
				for (aC = 0; aC < fa; aC++) xk[aC].button.style.width = "auto";
			xn.v3 && (xn.scrollLeft = xn.v3), tw || this.resize(!0)
		}, this.xy = function() {
			var xx = this.xu(),
				ek = i.l;
			xz.fillStyle = bE.pN, xz.fillRect(0, ek * xx.td, i.j, ek * xx.xw)
		}, uk.style.position = "absolute", uk.style.top = "0", uk.style.left = "0", uk.style.width = "100%", uk.style.height = "100%", xm.style.position = "absolute", xm.style.top = "0", xm.style.left = "0", xm.style.width = "100%", xm.style
		.display = "flex", xm.style.backgroundColor = bE.pN, xn.style.position = "absolute", xn.style.left = "0", xn.style.width = "100%", bD.sP.uq(xn), xo.style.height = xo.style.maxHeight = "100%", uN.style.position = "absolute", uN.style.width =
		"100%", uN.style.backgroundColor = bE.pN,
		function() {
			for (var aC = 0; aC < xk.length; aC++) xk[aC].button.style.height = "100%", xk[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < xk.length; aC++) xo.appendChild(xk[aC].button);
	xm.appendChild(function() {
		var xt = document.createElement("h1");
		return xt.textContent = title, xt.style.margin = "auto", xt.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", xt.style.fontFamily = "Arial Black, system-ui", xt
	}()), xn.appendChild(xo), !1 !== xl && (uk.appendChild(uN), uk.appendChild(xm), uk.appendChild(xn))
}

function tL(y0, y1, y2, y3) {
	var self;
	this.tM = document.createElement("span"), (self = this).tM.textContent = y0, self.tM.style.color = bE.pR, self.tM.style.position = "absolute", self.tM.style.font = "inherit", y3 ? self.tM.style.bottom = "0.06em" : self.tM.style.top = "0.12em",
		y2 ? self.tM.style.left = "0.2em" : self.tM.style.right = "0.2em", self.tM.style.fontSize = "0.6em", self.tM.style.pointerEvents = "none", self.tM.style.whiteSpace = "pre", y1.style.position = "relative", y1.style.overflow = "hidden", y1
		.appendChild(self.tM)
}

function us(y0, y1, y4, y5, y6) {
	var self;
	this.tM = document.createElement("span"), this.resize = function() {
			this.tM.style.fontSize = ((y5 - y4) * y1.offsetHeight).toFixed(1) + "px"
		}, (self = this).tM.textContent = y0, self.tM.style.color = bE.pR, self.tM.style.font = "inherit", self.tM.style.margin = "0.1em 0.6em", self.tM.style.pointerEvents = "none", y6 && (self.tM.style.fontWeight = "bold"), self.tM.style
		.whiteSpace = "nowrap", self.tM.style.display = "block", y1.appendChild(self.tM)
}

function y7(y8, y9, yA, oR) {
	var yB = document.createElement("textarea"),
		yC = (this.e = yB, !0);

	function yH() {
		yB.select(), document.execCommand("copy")
	}
	this.resize = function() {
			y9 && bD.sP.sZ(yB, 5)
		}, this.yD = function(em) {
			yB.value = em
		}, this.yE = function() {
			return yB.value
		}, this.yF = function() {
			yB.select()
		}, this.clear = function() {
			yB.value = ""
		}, this.yG = function() {
			yC && navigator.clipboard ? (yB.select(), navigator.clipboard.writeText(yB.value).catch(function() {
				yC = !1, yH()
			})) : yH()
		}, yB.setAttribute("id", "textArea" + u.z.uH++), yB.setAttribute("autocomplete", "off"), y8 && yB.setAttribute("placeholder", y8), yB.style.top = "0", yB.style.left = "0", yB.style.width = "100%", yB.style.height = "100%", yB.style
		.userSelect = "none", yB.style.outline = "none", yB.style.resize = "none", yB.style.border = "none", yB.style.color = bE.pR, yB.style.backgroundColor = bE.pK, oR ? (yB.style.fontSize = "1em", yB.rows = 6, yB.style.padding = "0.25em") : (yB
			.style.padding = "0.45em", yB.style.fontSize = "1.2em"), yA && yB.addEventListener("input", function(e) {
			yA(e)
		}), yB.addEventListener("focus", function() {
			i.uI++
		}), yB.addEventListener("blur", function() {
			i.uI--
		})
}

function dO() {
	this.sg = new yI, this.buffer = new yJ, this.qt = new yK, this.z = new yL, this.yM = new yN, this.dk = function() {
		this.buffer.dk(), (new yO).dk(), this.yM.dk(), this.z.yP()
	}
}

function yJ() {
	function yQ(aC, type, yW, e4) {
		bm.buffer.data.push({
			eJ: aC,
			type: type || 0,
			value: yW || 0,
			yW: yW || 0,
			e4: e4 || 0
		})
	}

	function yR(aC, type, yW, e4) {
		bm.buffer.data.push({
			eJ: aC,
			type: type,
			value: yW || "",
			yW: yW || "",
			e4: e4 || 0
		})
	}

	function yS(oG) {
		for (var aC = bm.buffer.data.length; aC < oG; aC++) bm.buffer.data.push(null)
	}
	this.data = [], this.dk = function() {
		yQ(0, 1, 0, 5), yQ(1, 1, 1), yQ(2, 0), yR(3, 2), yQ(4, 1), yR(5, 2, "system-ui", 2), yQ(6, 0), yQ(7, 0, 0), yQ(8, 0), yQ(9, 1, 1), yQ(10, 1), yQ(11, 1, 1), yR(12, 2, navigator.language), yQ(13), yQ(14), yQ(15, 0, 1), yQ(16, 0, 3), yS(
			100), yR(100, 2), yR(101, 2), yR(102, 2), yR(103, 2), yR(104, 2), yR(105, 2), yR(106, 2), yQ(107), yQ(108), yQ(109), yR(110, 2), yQ(111), yQ(112), yQ(113), yR(114, 2), yQ(115), yR(116, 2), yQ(117, 1), yR(118, 2, "", 2), yQ(119, 1, 0,
				1), yR(120, 2), yQ(121, 1, ~~(262144 * Math.random())), yR(122, 2, "Player " + Math.floor(1e3 * Math.random())), yQ(123), yR(124), yQ(125, 1), yR(126, 2), yQ(127, 0, 1), yQ(128), yQ(129), yQ(130), yQ(131), yQ(132), yR(133, 2), yQ(
				134, 0, 5), yR(135, 2), yR(136, 2), yQ(137), yQ(138), yQ(139), yQ(140), yQ(141), yQ(142), yQ(143), yQ(144), yR(145, 2), yQ(146), yQ(147), yR(148, 2), yQ(149), yQ(150, 0, 1), yR(151, 2), yQ(152, 0, 5), yQ(153, 1), yQ(154, 1), yR(
				155, 2), yR(156, 2), yQ(157), yQ(158), yQ(159), yQ(160), yR(161, 2), yQ(162, 0, 1024), yR(163, 2, "0,0,0"), yR(164, 2, "100,100,100"), yR(165, 2, "30,30,30"), yR(166, 2, "70,70,70"), yR(167, 2, "100,100,100"), yR(168, 2,
				"85,85,85"), yR(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) yR(170 + aC, 2, "255,255,255");
		yR(174, 2), yR(175, 2), yQ(176, 0, 200), yS(180), yQ(180, 0), yQ(181, 0), yQ(182, 0, 1023), yR(183, 2), yQ(184, 0, 100), yR(185, 2)
	}, this.qu = function(eJ, value) {
		this.data[eJ].value = value
	}, this.yT = function(eJ, value) {
		this.qu(eJ, value);
		var value = String(value),
			fa = value.length;
		5e4 < fa ? console.log("storage value too large: index " + eJ + " size " + fa) : (bm.sg.save(eJ, value), bm.sg.save(eJ, String(this.data[eJ].e4), !0))
	}, this.yU = function(eJ) {
		return Number(this.data[eJ].value)
	}, this.yV = function(eJ) {
		return String(this.data[eJ].value)
	}
}

function yN() {
	var yX = [];

	function ya(ua) {
		yX.unshift(ua), bm.qt.qu(161, yX.join(";"))
	}

	function f6(ua) {
		for (var yc = yX, fa = yc.length, aC = 0; aC < fa; aC++)
			if (yc[aC] === ua) return yc.splice(aC, 1), bm.qt.qu(161, yc.join(";")), 1
	}
	this.dk = function() {
		var s6 = bm.buffer.data[161].value;
		s6.length && (yX = s6.split(";"))
	}, this.get = function() {
		return yX
	}, this.yY = function() {
		return {
			oP: yX,
			value: 0
		}
	}, this.ww = function(ua) {
		return bD.sX.has(yX, ua)
	}, this.yZ = function(ua) {
		return f6(ua) ? 0 : (ya(ua), 1)
	}, this.nK = function(ua) {
		f6(ua) && ya(ua)
	}, this.yb = function(eJ) {
		eJ < yX.length && (yX.splice(eJ, 1), bm.qt.qu(161, yX.join(";")))
	}
}

function yI() {
	this.yd = function(eJ, e4) {
		return Number(this.ye(eJ, e4))
	}, this.ye = function(eJ, e4) {
		var g2 = null;
		return 0 === a1.id ? a1.yf && (g2 = a1.yf.getItem((e4 ? "v" : "d") + eJ)) : 1 === a1.id ? g2 = a1.yg.loadString((e4 ? 1e3 : 2e3) + eJ) : 2 === a1.id && (g2 = a1.yh[(e4 ? "v" : "d") + eJ]), g2 && 0 !== g2.length ? g2 : null
	}, this.yi = function(fa, yj) {
		var h = [],
			yk = yj ? "e" : "l";
		if (0 === a1.id) {
			if (a1.yf)
				for (aC = 0; aC < fa; aC++) h.push(a1.yf.getItem(yk + aC))
		} else if (1 === a1.id)
			for (var yl = yj ? 5e3 : 3e3, aC = 0; aC < fa; aC++) h.push(a1.yg.loadString(yl + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fa; aC++) h.push(a1.yh[yk + aC]);
		return h
	}, this.save = function(eJ, value, e4) {
		var ym = (e4 ? "v" : "d") + eJ;
		if (0 === a1.id) {
			if (a1.yf && bm.buffer.data[140].value) try {
				a1.yf.setItem(ym, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.yg.saveString((e4 ? 1e3 : 2e3) + eJ, value) : 2 === a1.id && (a1.yh[ym] = value, a1.yn.postMessage(ym + " " + value))
	}, this.yo = function(h, yj) {
		var fa = h.length,
			yk = yj ? "e" : "l";
		if (0 === a1.id) {
			if (a1.yf && bm.buffer.data[140].value) try {
				for (aC = 0; aC < fa; aC++) a1.yf.setItem(yk + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var yl = yj ? 5e3 : 3e3, aC = 0; aC < fa; aC++) a1.yg.saveString(yl + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fa; aC++) a1.yh[yk + aC] = h[aC], a1.yn.postMessage(yk + aC + " " + h[aC])
	}
}

function yO() {
	this.dk = function() {
		! function() {
			var data = bm.buffer.data;
			0 === data[2].e4 && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].yW = 1);
			0 === data[100].e4 && (data[100].value = data[100].yW = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.buffer.data,
			fa = data.length;
		for (aC = 0; aC < fa; aC++) {
			var yr = bm.sg.yd(aC, !0);
			data[aC] && data[aC].e4 === yr && (null === (yr = bm.sg.ye(aC)) ? data[aC].value = data[aC].yW : 2 === data[aC].type ? data[aC].value = yr : (yr = Number(yr), isNaN(yr) ? data[aC].value = data[aC].yW : data[aC].value = yr))
		}
	}
}

function yL() {
	function yw(h) {
		if (0 === h.length) bm.qt.qu(116, "");
		else {
			for (var yz = h[0], aC = 1; aC < h.length; aC++) yz += ";" + h[aC];
			bm.qt.qu(116, yz)
		}
	}
	this.yt = function() {
		bm.buffer.data[110].value.length && (bm.buffer.data[106].value = bm.buffer.data[110].value, bm.qt.qu(110, ""), this.yu())
	}, this.yu = function() {
		var h = bm.buffer.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.buffer.data[106].value), h.unshift(bm.buffer.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var yv = [], aC = 0; aC < h.length; aC += 2) yv.push(h[aC]);
		yw(h), bm.buffer.data[117].value = 0, bm.buffer.data[117].oP = yv
	}, this.yx = function(eJ) {
		bm.buffer.data[117].oP.splice(eJ, 1), bm.buffer.data[117].value = Math.min(eJ, bm.buffer.data[117].oP.length - 1);
		var h = bm.buffer.data[116].value.split(";");
		h.splice(2 * eJ, 2), yw(h)
	}, this.yy = function(eJ) {
		var h = bm.buffer.data[116].value.split(";");
		return h.length < 2 * (eJ + 1) ? null : {
			ua: h[2 * eJ],
			password: h[2 * eJ + 1]
		}
	}, this.z0 = function() {
		var g2 = bO.ik(bm.buffer.data[121].value, -1, 262143);
		return g2 = -1 === g2 ? ~~(262144 * Math.random()) : g2
	}, this.yP = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var z1, s6 = h[aC].trim();
			0 !== s6.length && (z1 = 0 <= (z1 = s6.indexOf("=")) ? s6.substring(0, z1) : s6, document.cookie = z1 + "=;expires=0;path=/", document.cookie = z1 + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = z1 +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function yK() {
	this.qu = function(eJ, value) {
		2 !== bm.buffer.data[eJ].type && (value = Math.floor(value)), bm.buffer.data[eJ].value !== value && (bm.buffer.yT(eJ, value), 0 === eJ ? (u.y(), bA.dk(), u.v(2)) : 1 === eJ ? i.dv(1) : 2 === eJ ? i.dv(0) : 5 === eJ && (bD.sP.z2(), i.dv(
			0)))
	}, this.z3 = function() {
		for (var data = bm.buffer.data, aC = 0; aC < 100; aC++) data[aC] && bm.buffer.yT(aC, data[aC].yW);
		bD.sP.z2(), i.dv(1)
	}, this.z4 = function() {
		for (var data = bm.buffer.data, aC = 0; aC < data.length; aC++) data[aC] && bm.buffer.qu(aC, data[aC].yW)
	}, this.z5 = function() {
		for (var fu = bm.buffer, aC = 128; aC < 135; aC++) fu.yT(aC, fu.data[aC].yW)
	}, this.z6 = function(data) {
		bm.qt.qu(109, data.ub), bm.qt.qu(107, data.z7), bm.qt.qu(108, data.z8), bm.qt.qu(112, data.z9), bm.qt.qu(111, data.zA), bm.qt.qu(113, data.zB), bm.qt.qu(135, data.zC), bm.qt.qu(136, data.zD), bm.qt.qu(137, data.zE), bm.qt.qu(138, data
			.zF), bm.qt.qu(139, data.zG), bm.qt.qu(141, data.zH), bm.qt.qu(142, data.zI), bm.qt.qu(143, data.zJ), bm.qt.qu(144, data.zK)
	}
}

function c8() {
	this.f1 = new zL, this.zM = new zN, this.zO = new zP, this.dk = function() {
		this.f1.dk()
	}
}

function zN() {
	this.zQ = function(size) {
		for (var zR = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(zR.rX(16)));
		return h.join("")
	}, this.zS = function(s6) {
		return 20 < (s6 = s6.trim()).length ? s6.substring(0, 20) : s6
	}
}

function zL() {
	var zT = new Uint8Array(78);
	this.dk = function() {
		var aC;
		for (zT[50] = 37, aC = 0; aC < 10; aC++) zT[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) zT[aC + 20] = aC + 11, zT[aC + 52] = aC + 38
	}, this.zU = function(s6) {
		return s6 || (console.log("validateString error: " + s6), s6 = ""), s6.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.zV = function(s6, size) {
		if ((s6 = this.zU(s6)).length > size) return s6.substring(0, size);
		for (; s6.length < size;) s6 = "-" + s6;
		return s6
	}, this.zW = function(s6) {
		for (var zX = zT, fa = s6.length, h = new Uint8Array(fa), aC = 0; aC < fa; aC++) h[aC] = zX[s6.charCodeAt(aC) - 45];
		return h
	}, this.zY = function(zZ) {
		bG.a8(6 * zZ.length), this.za(zZ), bK.dk(bG.aD)
	}, this.za = function(zZ) {
		for (var fa = zZ.length, j = bG, aC = 0; aC < fa; aC++) j.a9(6, zZ[aC])
	}, this.zb = function(s6) {
		this.za(this.zW(s6))
	}, this.zc = function(s6, size) {
		this.za(this.zW(this.zV(s6, size)))
	}, this.f2 = function(s6, size) {
		for (var h = this.zW(this.zV(s6, size)), g2 = 0, oA = 1, aC = h.length - 1; 0 <= aC; aC--) g2 += oA * h[aC], oA *= 64;
		return g2
	}
}

function zd() {
	var j, k, ze;

	function a03(i2, fd, a01, zj, zw) {
		fd = a02(i2, fd + 1 + 2 * zj & 3);
		! function(i2, lY) {
			return 1 < Math.abs(i2 % j - lY % j) || 1 < Math.abs(a06(i2) - a06(lY))
		}(i2, fd) && 0 === zw[fd << 2] && (zw[fd << 2] = a01)
	}

	function a06(h8) {
		return Math.floor((h8 + .5) / j) % k
	}

	function a02(h8, fd) {
		return h8 + ze[fd]
	}
	this.zf = function(s6) {
		var aC, zg, fa, zh, zR = bK;
		for (bJ.f1.zY(bJ.f1.zW(s6)), bV.wJ.zk[bV.fG].j = bV.fl = j = zR.rX(12), bV.wJ.zk[bV.fG].k = bV.fm = k = zR.rX(12), ze = [-j, -1, j, 1], bV.zt = document.createElement("canvas"), bV.zt.width = bV.fl, bV.zt.height = bV.fm, bV.zp = bV.zt
			.getContext("2d", {
				alpha: !1
			}), bV.zq = bV.zu = null, bV.zq = bV.zp.getImageData(0, 0, bV.fl, bV.fm), bV.zu = bV.zq.data, bD.sX.zv(bV.zu), fa = zR.rX(12), zg = zR.rX(5), zh = zm(j * k - 1), aC = 0; aC < fa; aC++) ! function(lq, h8, zi, zj) {
			var aC, fd, zR = bK,
				zw = bV.zu,
				zx = h8,
				zy = h8,
				zz = 0,
				a00 = 1 + zi,
				a01 = 2 - zi;
			for (zw[h8 << 2] = a00, aC = 0; aC < lq; aC++) fd = zR.rX(2), h8 = a02(h8, fd), zw[h8 << 2] === a00 ? zz % 2 == 1 && a03(zy, zz + 2 * zj + 3, a01, zj, zw) : zw[h8 << 2] = a00, a03(h8, fd, a01, zj, zw), a03(zy, fd, a01, zj, zw),
				zy = h8, zz = fd;
			a02(h8, 0) === zx ? (a03(h8, 0, a01, zj, zw), a03(zx, 0, a01, zj, zw)) : a02(h8, 1) === zx && (a03(h8, 0, a01, zj, zw), a03(zx, 2, a01, zj, zw));
			0 === lq && (a03(zx, 0, a01, zj, zw), a03(zx, 2, a01, zj, zw))
		}(zR.rX(zg), zR.rX(zh), 1 === zR.rX(1), 1 === zR.rX(1));
		var fh, fj, iS, a07, a08, a09, zw = bV.zu,
			a0A = !0,
			a0B = bV.wJ.zk[bV.fG].a0B,
			a0C = bV.wJ.zk[bV.fG].a0C;
		for (fj = 0; fj < k; fj++)
			for (a07 = !0, a08 = a0A, fh = a09 = 0; fh < j; fh++) iS = 4 * fj * j + 4 * fh, a09 <= fh && 0 < zw[iS] && (a08 = 2 === zw[iS], a07) && (a07 = !1, a08 !== a0A) ? (a0A = a08, a09 = fh + 1, fh = -1) : (a08 ? (zw[iS] = a0C[0], zw[1 +
				iS] = a0C[1], zw[2 + iS] = a0C[2]) : (zw[iS] = a0B[0], zw[1 + iS] = a0B[1], zw[2 + iS] = a0B[2]), zw[3 + iS] = 255);
		bV.zp.putImageData(bV.zq, 0, 0), bV.zr = !0, bV.zs.dk(), bi.ds = !0
	}
}

function zP() {
	this.zf = function(a0D) {
		for (var zR = bK, size = zR.rX(a0D), a0E = 7 + 9 * zR.rX(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(zR.rX(a0E)));
		return h.join("")
	}
}

function cD() {
	var u4, u5, a0F, a0G, a0H, a0I, a0J, a0K, a0L, a0M;

	function a0O() {
		var a0R = aE.a0R;
		for (a0L = a0R; a0L < aE.fX; a0L++) a0N();
		for (a0L = aE.hy ? aE.kv : 0; a0L < a0R; a0L++) {
			if (!a0S()) {
				for (var fu = aE.a0W = a0L; fu < a0R; fu++) a0L = fu, a0N();
				return
			}
			a0V(a0I + u4 * a0H + bO.g1(a0H, 2), a0J + u5 * a0H + bO.g1(a0H, 2))
		}
	}

	function a0y(player) {
		for (var jT = ah.jT, jV = ah.jV, jU = ah.jU, jW = ah.jW, fj = jV[player]; fj <= jW[player]; fj++)
			for (var fh = jT[player]; fh <= jU[player]; fh++) {
				var fE = ad.a0z(fh, fj);
				ad.hA(fE) && (ad.k6(fE) ? ad.h5(fE, player) : ad.a10(fE, player))
			}
	}

	function a0x(h, uu, uv) {
		var eb = h[uu];
		h[uu] = h[uv], h[uv] = eb
	}

	function a0S() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (u4 = bO.g1(a0F * az.random(), az.value(100)), u5 = bO.g1(a0G * az.random(), az.value(100)), a15()) return 1;
			return
		}() || function() {
			var ix, j0, ft, a0U, fu, a0T;
			for (ix = bO.g1(a0F * az.random(), az.value(100)), j0 = bO.g1(a0G * az.random(), az.value(100)), ft = 40; 1 <= ft; ft--)
				for (a0U = a0G - ft; 0 <= a0U; a0U -= 40)
					for (u5 = (a0U + j0) % a0G, fu = 40; 1 <= fu; fu--)
						for (a0T = a0F - fu; 0 <= a0T; a0T -= 40)
							if (u4 = (a0T + ix) % a0F, a15()) return 1;
			return
		}()
	}

	function a15() {
		for (var h8, a17, gap = bO.g1(a0H - a0K, 2), a18 = a0J + u5 * a0H + gap, a19 = a0I + u4 * a0H + gap, a16 = a18 + a0K - 1; a18 <= a16; a16--)
			for (a17 = a19 + a0K - 1; a19 <= a17; a17--)
				if (h8 = ad.a0z(a17, a16), !ad.fV(h8) || ad.k6(h8)) return;
		return 1
	}

	function a0V(a0T, a0U) {
		a0N(), a1A(a0T - 2, a0U - 2)
	}

	function a0N() {
		ah.nX[a0L] = 0, ah.hO[a0L] = ah.a0v[a0L] = 0, ah.h2[a0L] = [], ah.hG[a0L] = [], ah.hH[a0L] = [], ah.fz[a0L] = [], ah.jT[a0L] = ah.jV[a0L] = ah.jU[a0L] = ah.jW[a0L] = 0
	}

	function a1A(a0T, a0U) {
		var h8, aC, a1B, a1C;
		for (ah.nX[a0L] = 1, ah.jT[a0L] = a0T + 10, ah.jV[a0L] = a0U + 10, ah.jW[a0L] = ah.jU[a0L] = 0, a1B = a0T; a1B < a0T + 4; a1B++)
			for (a1C = a0U; a1C < a0U + 4; a1C++)(a0T < a1B && a1B < a0T + 3 || a0U < a1C && a1C < a0U + 3) && (h8 = ad.a0z(a1B, a1C), ad.fV(h8)) && (ah.jT[a0L] = Math.min(a1B, ah.jT[a0L]), ah.jU[a0L] = Math.max(a1B, ah.jU[a0L]), ah.jV[a0L] = Math
				.min(a1C, ah.jV[a0L]), ah.jW[a0L] = Math.max(a1C, ah.jW[a0L]), a0M[ah.hO[a0L]] = h8, ah.hO[a0L]++, ad.a10(h8, a0L));
		for (ah.a0v[a0L] = ah.hO[a0L], aC = ah.hO[a0L] - 1; 0 <= aC; aC--) ad.a1D(a0M[aC], a0L) ? (ad.h5(a0M[aC], a0L), ah.hG[a0L].push(a0M[aC])) : ad.a1E(a0M[aC]) ? (ad.h5(a0M[aC], a0L), ah.hH[a0L].push(a0M[aC])) : ad.a1F(a0M[aC]) && (ad.h5(a0M[aC],
			a0L), ah.fz[a0L].push(a0M[aC]))
	}
	this.dk = function() {
		if (a0M = new Array(12), a0K = 6, a0H = 10, a0F = bO.g1(bV.fl, a0H), a0G = bO.g1(bV.fm, a0H), a0I = bO.g1(bV.fl - a0H * a0F, 2), a0J = bO.g1(bV.fm - a0H * a0G, 2), aE.hy)
			for (var aC = 0; aC < aE.kv; aC++) a0L = aC, a0N(), ah.nX[a0L] = 1;
		(0 === aE.data.spawningType ? a0O : 1 === aE.data.spawningType ? (a0O(), function() {
			var a0X = aE.a0Y;
			aE.a0Z || a0X++;
			if (!(a0X < 3)) {
				for (var data = aE.data, kB = (aE.hy ? aE.kv : 0) + data.teamPlayerCount[0], oG = aE.a0W, a0a = new Uint32Array(a0X), a0b = new Uint32Array(a0X), a0c = new Uint16Array(a0X), a0d = new Uint16Array(a0X), fY = bj.fY, jT = ah
						.jT, jV = ah.jV, jU = ah.jU, jW = ah.jW, gF = bR.gF, gG = bR.gG, aC = kB; aC < oG; aC++) gF[aC] = jT[aC] + jU[aC] >> 1, gG[aC] = jV[aC] + jW[aC] >> 1;
				for (aC = kB; aC < oG; aC++) {
					var id = fY[aC];
					a0a[id] += gF[aC], a0b[id] += gG[aC]
				}
				var lI = bj.lI;
				for (aC = 1; aC < a0X; aC++) {
					var h3 = Math.max(data.teamPlayerCount[lI[aC]], 1);
					a0c[aC] = bO.g1(a0a[aC], h3), a0d[aC] = bO.g1(a0b[aC], h3)
				}
				var a0e = bj.a0e,
					a0f = bj.a0f,
					a0g = bj.a0g,
					gE = bR.gE;
				for (aC = 0; aC < 512; aC++) gE[aC] = aC;
				for (var eI = 0; eI < 2 + (4 <= a0X); eI++)
					for (aC = kB; aC < oG; aC++) {
						for (var i2 = aC, a0h = gE[i2], a0i = 1, fq = bO.a0j(gF[a0h] - a0c[1], gG[a0h] - a0d[1]), ft = 2; ft < a0X; ft++) {
							var a0k = bO.a0j(gF[a0h] - a0c[ft], gG[a0h] - a0d[ft]);
							a0k < fq && (fq = a0k, a0i = ft)
						}
						var a0l = fY[i2];
						if (a0i !== a0l) {
							if (2 === eI && 4 <= a0X) {
								var a0m = Math.max((a0i + 1) % a0X, 1),
									a0n = bO.a0j(gF[a0h] - a0c[a0m], gG[a0h] - a0d[a0m]);
								for (ft = 1; ft < a0X; ft++) a0k = bO.a0j(gF[a0h] - a0c[ft], gG[a0h] - a0d[ft]), fq < a0k && a0k < a0n && (a0n = a0k, a0m = ft);
								a0m !== a0l && bO.a0j(a0c[a0l] - a0c[a0m], a0d[a0l] - a0d[a0m]) < bO.a0j(a0c[a0l] - a0c[a0i], a0d[a0l] - a0d[a0i]) && (a0i = a0m)
							}
							var a0o = lI[a0i],
								a0p = a0f[a0o] + (aE.hy ? 0 : a0g[a0o]),
								lY = a0e[a0p],
								a0q = gE[lY],
								a0r = a0f[a0o + 1];
							fq = bO.a0j(gF[a0q] - a0c[a0l], gG[a0q] - a0d[a0l]);
							for (var ek = a0p + 1; ek < a0r; ek++) {
								var a0s = a0e[ek],
									a0t = gE[a0s];
								(a0k = bO.a0j(gF[a0t] - a0c[a0l], gG[a0t] - a0d[a0l])) < fq && (fq = a0k, lY = a0s)
							}
							lY < kB || oG <= lY || (a0q = gE[lY], a0a[a0l] += gF[a0q] - gF[a0h], a0b[a0l] += gG[a0q] - gG[a0h], a0a[a0i] += gF[a0h] - gF[a0q], a0b[a0i] += gG[a0h] - gG[a0q], h3 = data.teamPlayerCount[lI[a0l]], a0c[a0l] =
								bO.g1(a0a[a0l], h3), a0d[a0l] = bO.g1(a0b[a0l], h3), h3 = data.teamPlayerCount[a0o], a0c[a0i] = bO.g1(a0a[a0i], h3), a0d[a0i] = bO.g1(a0b[a0i], h3), gE[i2] = a0q, gE[lY] = a0h)
						}
					}! function() {
						for (var gE = bR.gE, jT = ah.jT, jV = ah.jV, jU = ah.jU, jW = ah.jW, hO = ah.hO, a0v = ah.a0v, hG = ah.hG, hH = ah.hH, fz = ah.fz, aC = 0; aC < 512; aC++) {
							var a0w = gE[aC];
							if (a0w !== aC) {
								a0x(jT, aC, a0w), a0x(jV, aC, a0w), a0x(jU, aC, a0w), a0x(jW, aC, a0w), a0x(hO, aC, a0w), a0x(a0v, aC, a0w), a0x(hG, aC, a0w), a0x(hH, aC, a0w), a0x(fz, aC, a0w), a0y(aC), a0y(a0w), gE[aC] = aC;
								for (var k = a0w, h9 = gE[k]; h9 !== aC;) h9 = gE[k = h9];
								gE[k] = a0w
							}
						}
					}()
			}
		}) : function() {
			var a0R = aE.a0R;
			for (a0L = a0R; a0L < aE.fX; a0L++) a0N();
			for (a0L = aE.hy ? aE.kv : 0; a0L < a0R; a0L++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							a0T = spawningData[2 * a0L] + 1,
							spawningData = spawningData[2 * a0L + 1] + 1;
						if (3 < a0T && a0T < bV.fl - 5 && 3 < spawningData && spawningData < bV.fm - 5 && ad.fV(ad.a0z(a0T, spawningData)) && function(a0T, a0U) {
								var h8, a17, a16;
								for (a16 = a0U; a0U - 6 < a16; a16--)
									for (a17 = a0T; a0T - 6 < a17; a17--)
										if (h8 = ad.a0z(a17, a16), ad.k6(h8)) return;
								return 1
							}(a0T + 3, spawningData + 3)) return a0V(a0T + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a0S()) {
						for (var fu = aE.a0W = a0L; fu < a0R; fu++) a0L = fu, a0N();
						return
					}
					var a0T = a0I + u4 * a0H + bO.g1(a0H, 2),
						a0U = a0J + u5 * a0H + bO.g1(a0H, 2);
					a0V(a0T, a0U)
				}
		})(), bg.nT[7] = ah.hO[aE.fK]
	}, this.a1G = function(k4, a1H, a1I) {
		var aC, a0T, a0U, h8, u4, u5;
		for (a0L = k4, aC = 0; aC < 20; aC++)
			for (a0T = a1H + aC; a1H - aC <= a0T; a0T--)
				for (a0U = a1I + aC; a1I - aC <= a0U; a0U--)
					if ((a0T === a1H + aC || a0T === a1H - aC || a0U === a1I + aC || a0U === a1I - aC) && 3 < a0T && a0T < bV.fl - 5 && 3 < a0U && a0U < bV.fm - 5 && ad.fV(ad.a0z(a0T, a0U)) && function(a0T, a0U) {
							var h8, a17, a16;
							for (a16 = a0U; a0U - 6 < a16; a16--)
								for (a17 = a0T; a0T - 6 < a17; a17--)
									if (h8 = ad.a0z(a17, a16), ad.k6(h8) && !ad.a1O(a0L, h8)) return;
							return 1
						}(a0T + 3, a0U + 3)) {
						if (0 < ah.hO[a0L]) {
							for (u5 = u4 = h8 = void 0, u4 = ah.jU[a0L]; u4 >= ah.jT[a0L]; u4--)
								for (u5 = ah.jW[a0L]; u5 >= ah.jV[a0L]; u5--) h8 = 4 * (u5 * bV.fl + u4), ad.a1L(a0L, h8) && (ad.a1M(h8), ah.hO[a0L]--);
							a0N()
						}
						return a1A(a0T - 1, a0U - 1), !0
					} return !1
	}, this.a1N = function(k4) {
		a0L = k4, a0S() ? a0V(a0I + u4 * a0H + bO.g1(a0H, 2), a0J + u5 * a0H + bO.g1(a0H, 2)) : a0N()
	}
}

function a1P() {
	au.a1Q(), xz.setTransform(io, 0, 0, io, 0, 0), xz.imageSmoothingEnabled = io < 3, xz.drawImage(bV.zt, aT.a1R(), aT.a1S()), bS.a1T.xy(), xz.drawImage(a1U, aT.a1R(), aT.a1S()), au.xy(), bQ.xy(), ag.xy(), (aE.o1 ? (bk.xy(), bF) : (aO.xy(), aW.xy(),
		aS.xy(), bF.xy(), ax.xy(), aX.xy(), aT.xy(), aR.xy(), bk.xy(), aV.xy(), aQ.xy(), aN.xy(), aM.xy(), aY.xy(), bh.xy(), aw)).xy(), u.xy()
}

function a1V(ox, j, k) {
	ox.clearRect(0, 0, j, k), ox.fillStyle = bE.pO, ox.fillRect(0, 0, j, k)
}

function a1W(ox, j, k, a1X) {
	ox.fillStyle = bE.pR, ox.fillRect(0, 0, j, a1X), ox.fillRect(0, 0, a1X, k), ox.fillRect(j - a1X, 0, a1X, k), ox.fillRect(0, k - a1X, j, a1X)
}

function a1Y(ox, fh, fj, iW, a1X, h8, a1Z) {
	ox.fillStyle = bE.pR;
	var h8 = Math.floor(iW * h8),
		ui = (h8 += (h8 - a1X) % 2, Math.floor((h8 - a1X) / 2)),
		iW = Math.floor((iW - h8) / 2);
	ox.fillRect(fh + iW, fj + iW + ui, h8, a1X), a1Z && ox.fillRect(fh + iW + ui, fj + iW, a1X, h8)
}

function a1b() {
	this.dk = function() {
		8 === aE.lD && aO.a1c()
	}, this.a1d = function(a1e) {
		var elo = aE.data.elo,
			kA = (elo[a1e] - elo[1 - a1e]) / 10,
			kA = 8 / (1 + Math.pow(2, kA / 32)),
			kA = Math.floor(10 * kA + .5),
			a1g = elo[a1e] + kA,
			a1h = this.a1i(a1g),
			elo = this.a1i(elo[1 - a1e] - kA),
			kA = (0 === a1e ? aO.a1k(a1h, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.a1k(elo, a1h, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a1g * bO.sqrt(a1g) >> 8),
			elo = ((1 + aE.a1n) * kA / 100).toFixed(2);
		a1e === aE.fK ? aO.a1o(640, L(30, [elo]), 40, 0, bE.pR, bE.pO, -1, !1) : aO.a1o(640, L(31, [ah.a1p[a1e], elo]), 40, 0, bE.pR, bE.pO, -1, !1)
	}, this.a1i = function(elo) {
		return 16e3 === (elo = bO.ik(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cj() {
	this.tZ = new a1q, this.zw = new a1r
}

function a1r() {
	this.iM = !1;
	this.a1v = [], this.a1w = 100;
	var ny, nz, gap, iW, a1s, a1u, a1x = 0,
		a1y = new Array(9),
		a1z = [],
		a20 = [],
		a21 = 0,
		a22 = 0,
		a23 = 0,
		a24 = 0;

	function a2G() {
		a1y.sort(function(ft, fu) {
			return fu.l0 - ft.l0
		});
		for (var s6 = "" + a1y[0].r8, aC = 1; aC < 9; aC++) s6 += "," + a1y[aC].r8;
		for (aC = 0; aC < 9; aC++) s6 += "," + a1y[aC].l0;
		bm.buffer.yT(120, s6)
	}
	this.dk = function() {
		for (var a25 = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a25.length; aC++) {
			var color = 6 === a25[aC] ? bE.pr : bE.pP;
			this.a1v.push(bD.canvas.a26(ac.get(3), a25[aC], color))
		}
		for (aC = 0; aC < ak.tZ.a27; aC++) a20.push(ak.tZ.a28 - ak.tZ.a27 + aC);
		for (aC = 0; aC < ak.tZ.a29; aC++) a20.push(ak.tZ.a2A + aC);
		var a2B = ak.tZ.a2C(bN.a2B);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a2B.slice(), aC = 0; aC < a2B.length; aC++) a20.push(a2B[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a1y[q] = {
						r8: isNaN(qcode) ? 1015 + q : qcode,
						l0: 0
					}
				} else {
					var aC, h = bm.buffer.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) a1y[aC] = {
							r8: 1015 + aC,
							l0: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var g2 = parseInt(h[aC]),
								ek = (g2 = 0 <= g2 && g2 < ak.tZ.a28 ? g2 : 0, parseInt(h[aC + 9]));
							ek = 0 <= ek && ek < 1e3 ? ek : 0, a1y[aC] = {
								r8: g2,
								l0: ek
							}
						}
				}
		}()
	}, this.show = function(mA, mB, a2H) {
		var aC;
		if (a21 = mA, a22 = mB, a1x = a2H || 0, this.iM = !0, a1z = [], 0 === a1x)
			for (aC = 0; aC < 9; aC++) a1z.push(a1y[aC].r8);
		else {
			var fu = 49 * a1x,
				a2H = fu - 49;
			for (a2H >= a20.length && (a1x = 1, a2H = 0, fu = 49), aC = a2H = (fu = Math.min(fu, a20.length)) - 49; aC < fu; aC++) a1z.push(a20[aC])
		}
		a1z.push(1024);
		a2H = a1z.length, iW = Math.floor((a1.a2.il() ? .075 : .0468) * i.im), gap = Math.floor(iW / 3), (a23 = 10 * (a1s = iW + gap)) > i.j && (a23 = i.j, gap = (a1s = a23 / 10) - (iW = 3 * a1s / 4)), a1u = bO.g1(a2H, 10) + !!(a2H % 10), (a24 =
			a1u * a1s) > i.k && (a24 = i.k, gap = (a1s = a24 / a1u) - (iW = 3 * a1s / 4)), a2H = .5 * gap;
		ny = Math.min(Math.max(mA - .5 * a23 + a2H, a2H), i.j - a23 + a2H), nz = Math.min(Math.max(mB - .5 * a24 + a2H, a2H), i.k - a24 + a2H)
	}, this.hn = function(mA, mB, player) {
		if (!this.iM) return !1;
		if (this.a2J(mA, mB)) {
			mA = bO.ik(bO.g1(mA - ny + .5 * gap, a1s), 0, 9);
			if ((mA += 10 * bO.ik(bO.g1(mB - nz + .5 * gap, a1s), 0, 9)) >= a1z.length) return aM.ta(), !0;
			mB = a1z[mA];
			if (1024 === mB) return this.show(a21, a22, a1x + 1), !0;
			! function(r8) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) a1y[aC].l0 = Math.floor(.99 * a1y[aC].l0);
					for (aC = 0; aC < 9; aC++)
						if (r8 === a1y[aC].r8) return a1y[aC].l0 = Math.min(a1y[aC].l0 + 30, 999), a2G();
					a1y.splice(5, 0, {
						r8: r8,
						l0: Math.max(a1y[4].l0, 30)
					}), a1y.pop(), a2G()
				}
			}(mB), player === aE.fK ? bB.i0.r7(mB) : bB.gw.rM(mB, player)
		}
		return aM.ta(), !0
	}, this.a2J = function(mA, mB) {
		return !(mA < ny - .5 * gap || mB < nz - .5 * gap || ny + a23 - .5 * gap <= mA || nz + a24 - .5 * gap <= mB)
	}, this.xy = function() {
		xz.fillStyle = bE.pO, xz.fillRect(ny - .5 * gap, nz - .5 * gap, a23, a24);
		for (var iS = .5 * bf.a2K, fa = (xz.lineWidth = bf.a2K, xz.strokeStyle = xz.fillStyle = bE.pR, xz.strokeRect(ny - .5 * gap + iS, nz - .5 * gap + iS, a23 - 2 * iS, a24 - 2 * iS), xz.imageSmoothingEnabled = !0, a1z.length), aC = 0; aC <
			fa; aC++) this.a2L(a1z[aC], xz, ny + aC % 10 * a1s, nz + bO.g1(aC, 10) * a1s, iW);
		xz.imageSmoothingEnabled = !1
	}, this.a2L = function(r8, ic, fh, fj, iW) {
		var fE;
		r8 >= 1024 - ak.tZ.a27 ? (fE = iW / this.a1w, ic.setTransform(fE, 0, 0, fE, fh, fj), ic.drawImage(this.a1v[r8 - 1024 + ak.tZ.a27], 0, 0), ic.setTransform(1, 0, 0, 1, 0, 0)) : (bD.sP.textAlign(ic, 1), bD.sP.textBaseline(ic, 1), ic.font =
			bD.sP.uA(0, .89 * iW), ic.fillText(ak.tZ.a2M(r8), fh + .5 * iW, fj + (.35 - bD.sP.a2N + .56) * iW))
	}
}

function a1q() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a27 = 13, this.a29 = this.emojis.length, this.a2A = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a2A, this.a28 = 1024, this.a2O = this.emojis.indexOf(
		"💀"), this.a2P = this.a2O + 1, this.a2Q = this.emojis.indexOf("🥇"), this.a2R = this.emojis.indexOf("😊"), this.a2M = function(g2) {
		return g2 < this.a2A ? String.fromCharCode(55356, 56806 + bO.g1(g2, 26), 55356, 56806 + g2 % 26) : this.emojis[Math.min(g2 - this.a2A, this.a29 - 1)]
	}, this.a2C = function(s6) {
		for (var fa = s6.length - 2, h = [], aC = 0; aC < fa; aC++) {
			var wp = s6.charCodeAt(aC) - 56806,
				wq = s6.charCodeAt(aC + 2) - 56806;
			0 <= wp && wp < 26 && 0 <= wq && wq < 26 && (h.push(26 * wp + wq), aC += 3)
		}
		return h
	}, this.a2S = function(g2) {
		return g2 < this.a2A
	}, this.a2T = function(g2) {
		return g2 >= 1024 - this.a27
	}, this.a2U = function(g2) {
		return g2 >= this.a2A && g2 < this.a2A + this.a2P
	}
}

function c7() {
	this.f1 = new a2V, this.zM = new a2W, this.zO = new a2X, this.dk = function() {
		this.f1.dk()
	}
}

function a2W() {
	this.zb = function(s6) {
		for (var fa = s6.length, j = bG, aC = 0; aC < fa; aC++) j.a9(16, s6.charCodeAt(aC))
	}
}

function a2V() {
	var a2Y = new Uint8Array(64);
	this.dk = function() {
		var aC;
		for (a2Y[0] = 45, a2Y[37] = 95, aC = 0; aC < 10; aC++) a2Y[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a2Y[aC + 11] = 65 + aC, a2Y[aC + 38] = 97 + aC
	}, this.uf = function(a2Z) {
		for (var zR = bK, zZ = new Uint8Array(a2Z), aC = 0; aC < a2Z; aC++) zZ[aC] = zR.rX(6);
		return zZ
	}, this.ue = function(zZ) {
		for (var fa = zZ.length, a2a = a2Y, h = [], aC = 0; aC < fa; aC++) h.push(String.fromCharCode(a2a[zZ[aC]]));
		return h.join("")
	}, this.a2b = function(value, a2c) {
		for (var a2a = a2Y, h = [], aC = 0; aC < a2c; aC++) h.push(String.fromCharCode(a2a[value >> 6 * (a2c - 1 - aC) & 63]));
		return h.join("")
	}
}

function cF() {
	var a2d, a2e, a2f;
	a2d = [32, 65, 191, 913, 931], a2e = [64, 127, 688, 930, 1155], a2f = new Array(a2d.length + 1);
	for (var aC = 0; aC < a2f.length; aC++) {
		a2f[aC] = 0;
		for (var ft = aC - 1; 0 <= ft; ft--) a2f[aC] += a2e[ft] - a2d[ft]
	}

	function a2l(ek) {
		for (var aC = a2d.length - 1; 0 <= aC; aC--)
			if (ek >= a2d[aC] && ek < a2e[aC]) return aC;
		return -1
	}
	this.zS = function(s6) {
		return 0 !== (s6 = s6.trim()).indexOf("Bot ") && 0 !== s6.indexOf("[Bot] ") && function(s6, a2i, a2j) {
			var fa = (s6 = s6.trim()).length;
			if (fa < a2i || a2j < fa) return !1;
			for (var ek, a2k = 0, aC = 0; aC < fa; aC++)
				if (ek = s6.charCodeAt(aC), a2k += 65 <= ek && ek <= 90 || 1040 <= ek && ek <= 1071 ? 1 : 0, -1 === a2l(ek)) return !1;
			if (3 < a2k && a2k > Math.floor(fa / 2)) return !1;
			return !0
		}(s6, 3, 20)
	}, this.a2m = function(s6) {
		for (var fa = (s6 = s6.trim()).length, h = [], aC = 0; aC < fa; aC++) {
			var ek, h8 = a2l(ek = s6.charCodeAt(aC));
			h.push(a2f[h8] + ek - a2d[h8])
		}
		return h
	}, this.zf = function(h) {
		for (var ek, fu, s6 = "", fa = h.length, aC = 0; aC < fa; aC++)
			for (fu = 1; fu < a2f.length; fu++)
				if (h[aC] < a2f[fu]) {
					ek = a2d[fu - 1] + h[aC] - a2f[fu - 1], s6 += String.fromCharCode(ek);
					break
				} return s6
	}, this.a2n = function(s6) {
		for (var h = this.a2m(s6), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a2o = function(s6) {
		for (var h = new Array(Math.floor(s6.length / 3)), aC = 0; aC < s6.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(s6.substring(aC, aC + 3));
		return this.zf(h)
	}, this.a2p = function(s6) {
		for (var g2, h = [s6.length], aC = 0; aC < s6.length; aC++) h[aC] = s6.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < s6.length; aC++) aC === s6.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (g2 = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(g2 + (g2 < 26 ? 65 : 71)), aC++);
		return result
	}, this.a2q = function(s6) {
		for (var ek, result = "", aC = 0; aC < s6.length; aC++) 48 <= (ek = s6.charCodeAt(aC)) && ek < 58 ? result += String.fromCharCode(ek) : 65 <= ek && ek < 75 ? result += "0" + (ek - 65).toString() : 75 <= ek && ek < 91 ? result += (ek - 65)
			.toString() : 97 <= ek && ek < 123 && (result += (ek - 71).toString());
		return result
	}, this.a2r = function(s6) {
		for (var fa = s6.length, h = [], aC = 0; aC < fa; aC++)(ek = s6.charCodeAt(aC)) < 58 ? h.push(s6[aC]) : (ek -= ek < 91 ? 65 : 71, h.push(String(bO.g1(ek, 10))), h.push(String(ek - 10 * bO.g1(ek, 10))));
		var fa = h.length - 2,
			ek = 0,
			zZ = [];
		for (aC = 0; aC < fa; aC += 3) zZ[ek++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return zZ
	}, this.a2s = function() {
		for (var eI, a2t = "", aC = 0; aC < 6; aC++) eI = 48 + az.random() % 36, eI += 58 <= eI ? 39 : 0, a2t += String.fromCharCode(eI);
		return a2t
	}
}

function a2X() {
	this.a2m = function(s6, a0D, a2u) {
		for (var a2v = [], fa = s6.length, max = 0, aC = 0; aC < fa; aC++) {
			var g2 = s6.charCodeAt(aC);
			a2v.push(g2), max = Math.max(max, g2)
		}
		var a0E = max < 128 ? 7 : 16;
		for (a2u.a9(a0D, fa), a2u.a9(1, +(16 == a0E)), aC = 0; aC < fa; aC++) a2u.a9(a0E, a2v[aC])
	}
}

function dG() {
	this.a2w = new a2x, this.result = new a2y, this.a2z = new a30, this.n8 = new a31, this.a32 = new a33, this.a34 = new a35, this.dk = function() {
		this.result.dk()
	}
}

function a30() {
	this.a36 = function() {
		for (var fa = am.lR, w4 = am.lW, a37 = [], aC = 0; aC < fa; aC++) {
			var h8 = w4[aC];
			bD.gw.a38(h8) && a37.push(h8)
		}
		return a37
	}, this.a39 = function() {
		if (0 === bj.lI[aE.a3A]) return this.a3B();
		bk.kw(aE.a3A);
		for (var a37 = [], fa = bR.g5[0], gE = bR.gE, aC = 0; aC < fa; aC++) {
			var h8 = gE[aC];
			bD.gw.a38(h8) && a37.push(h8)
		}
		return a37
	}, this.a3B = function() {
		var h8 = mW[0];
		return bD.gw.a38(h8) ? [h8] : []
	}, this.a3C = function(a37) {
		for (var fa = a37.length, eb = 0, hO = ah.hO, aC = 0; aC < fa; aC++) eb += hO[a37[aC]];
		return eb
	}
}

function a2x() {
	function a3E() {
		if (2 === aE.a3I) return 1;
		ax.a3J(), aE.a3I = 2, aE.a3K = aE.a3L
	}

	function a3G() {
		bU.a32.a3M(), aY.show(1 === aE.a3N, !1, 2 === aE.a3N), bU.result.a3M(), bU.a34.ef(), bU.n8.ef(), bU.n8.a3O(), aO.a3P(!0), aO.a3Q(247), aO.a3Q(956), aO.a3Q(957), aW.nJ(!0), aX.nJ(!0), ax.nJ(), bF.a3R(), aE.hj && bi.a3S.a3T(), bi.ds = !0, be
			.a3U(), a1.a2.setState(0)
	}
	this.a3D = function() {
		a3E() || (aE.a3F = 2, a3G())
	}, this.a3H = function() {
		a3E() || (aE.a3F = 1, a3G())
	}
}

function a31() {
	var a3V = 0;
	this.ef = function() {
		var a3d;
		2 === aE.a3F ? (aO.a3W(0, 59), aI.o7(2700)) : aE.lD < 7 ? (a3d = bj.lI[aE.a3A], a3d = bj.a3f[a3d], aR.a3g(L(32, [a3d]), 2, 1, 12), aO.a1o(0, L(33, [a3d]), 40, 0, bE.pR, bE.pO, -1, !1), aI.o7(2700)) : 8 === aE.lD ? (aE.a3N ? aO.a3W(aE.a3b,
			2) : aO.a3W(1 - aE.fK, 3), aE.a3c.a1d(aE.a3b), aI.nt(aE.a3b, 2700, !1, 0)) : 9 === aE.lD ? (aO.a3h(), aI.o7(2700)) : (aO.a3i(aE.a3b), aI.nt(aE.a3b, 2700, !1, 0))
	}, this.a3O = function() {
		var s6;
		a3V = 0, aE.hj || aE.lF || (s6 = b1.z.a3j(), aE.lD < 7 ? s6 += "/log/team" : 8 === aE.lD ? s6 += "/log/1v1" : 9 === aE.lD ? s6 += "/log/zombies" : s6 += "/log/br", aO.a1o(720, s6, 736, 0, bE.pR, bE.pp, -1, !1), 0 <= aE.a3k && (a3V = 54))
	}, this.n9 = function() {
		var id, s6;
		0 !== a3V && 0 === --a3V && (id = bI.f1.a2b(aE.a3k, 6), s6 = L(34, ["territorial.io/log/?r=" + id]), aO.a1o(1071, s6, 737, 0, bE.pR, bE.pp, -1, !1, void 0, {
			a3m: b1.z.a3j() + "/log/?r=" + id
		}))
	}
}

function a35() {
	function a3w() {
		var uy;
		return 8 === aE.lD ? 0 : (uy = Math.floor(ah.a3x[aE.fK] / 50), (uy = Math.min(uy, 200)) / 100)
	}

	function a3o() {
		var uy = a3w();
		0 !== uy && aO.a1o(440, L(35, [uy.toFixed(2)]), 40, 0, bE.pj, bE.pO, -1, !1)
	}
	this.ef = function() {
		var a3p;
		0 === bU.result.a3n || 0 === bU.result.a37.length || 8 === aE.lD ? bD.gw.hm(aE.fK) && a3o() : (function(a3p) {
			7 !== aE.lD && 10 !== aE.lD && 9 !== aE.lD || 0 !== aE.a3N && a3p && (9 === aE.lD ? aO.a1o(600, L(39, [100 * (1 + aE.a1n)]), 40, 0, bE.pR, bE.pO, -1, !1) : aO.a1o(600, L(39, [a3p.toFixed(2)]), 40, 0, bE.pR, bE.pO, -1, !1))
		}(a3p = function() {
			aO.a1o(520, L(36), 40, 0, bE.pR, bE.pO, -1, !1);
			for (var a37 = bU.result.a37, fa = a37.length, hO = ah.hO, h = [], aC = 0; aC < fa; aC++) {
				var h8 = a37[aC];
				h.push({
					h8: h8,
					eb: hO[h8]
				})
			}
			h.sort((ft, fu) => fu.eb - ft.eb);
			var a3f = ah.a1p,
				eb = bU.result.a3y,
				uy = bU.result.a3n,
				s6 = "",
				a3p = 0;
			for (aC = 0; aC < fa; aC++) {
				var iK = h[aC].eb * uy / (100 * eb),
					a40 = a3f[h[aC].h8] + ": " + iK.toFixed(2) + "   ";
				h[aC].h8 === aE.fK && (a3p = iK, 9 === aE.lD) && 0 !== aC && (a3p = 0), 2 < aC && 4 !== fa ? 3 === aC && (s6 += "(" + L(37, [fa - 3]) + ")") : s6 += a40
			}
			aO.a1o(560, bD.tN.a41(s6), 40, 0, bE.pj, bE.pO, -1, !1), a3p ? aO.a1o(580, L(38, [a3p.toFixed(2) + " + " + a3w().toFixed(2)]), 40, 0, bE.pj, bE.pO, -1, !1) : bD.gw.hm(aE.fK) && a3o();
			return a3p
		}()), 2 === aE.a3F || 7 <= aE.lD || function(a3p) {
			var a37 = bU.result.a37,
				fa = a37.length,
				a42 = ah.a42,
				hO = ah.hO,
				a43 = [];
			loop: for (var aC = 0; aC < fa; aC++) {
				var h8 = a37[aC],
					a44 = bD.tN.a45(a42[h8]);
				if (null !== a44) {
					for (var a46 = hO[h8], fu = a43.length - 1; 0 <= fu; fu--)
						if (a44 === a43[fu].name) {
							a43[fu].eb += a46, a43[fu].h.push({
								h8: h8,
								eb: a46
							});
							continue loop
						} a43.push({
						name: a44,
						eb: a46,
						h: [{
							h8: h8,
							eb: a46
						}]
					})
				}
			}
			if (0 !== a43.length) {
				a43.sort((ft, fu) => fu.eb - ft.eb);
				var h = a43[0].h,
					a47 = (h.sort((ft, fu) => fu.eb - ft.eb), "[" + a43[0].name + "]"),
					a48 = 512 * bU.result.a3n / 26214400,
					lq = (aO.a1o(0, L(40, [a47, a48.toFixed(4)]), 40, 0, bE.pR, bE.pO, -1, !1), h.length),
					zX = a43[0].eb,
					a49 = 1e4 * a48;
				for (aC = 0; aC < lq; aC++)
					if (h[aC].h8 === aE.fK) {
						aO.a1o(600, L(41, [(a49 * h[aC].eb / (10 * zX)).toFixed(2)]), 40, 0, bE.pR, bE.pO, -1, !1), aO.a1o(640, L(42, [(.2 * a3p).toFixed(2), a47]), 40, 0, bE.pR, bE.pO, -1, !1);
						break
					}
			}
		}(a3p))
	}, this.a3t = function() {
		var a3u, zx;
		aE.lF || (a3u = ah, zx = aE.fK, 0 === a3u.a3v[zx]) || a3u.jz[zx] < 1 || 2 * a3u.ro[zx] > 3 * (a3u.jy[zx] + a3u.jz[zx]) || a3o()
	}
}

function a2y() {
	this.dk = function() {
		this.a4A = 0, this.a37 = [], this.a3y = 0, this.a3n = 0
	}, this.a3M = function() {
		var tv;
		aE.lF || (tv = this, 2 === aE.a3F ? tv.a37 = bU.a2z.a36() : aE.iU ? tv.a37 = bU.a2z.a39() : tv.a37 = bU.a2z.a3B(), tv.a4A = bl.a4C.a4D(), tv.a3y = Math.max(1, bU.a2z.a3C(tv.a37)), bB.gw.rV(), 8 === aE.lD ? bU.result.a3n = 0 : tv.a3n =
			100 * bU.result.a4A * (1 + aE.a1n))
	}
}

function a33() {
	this.a3M = function() {
		if (2 === aE.a3F) aE.a3N = 2;
		else {
			if (8 === aE.lD) bD.gw.kI(0) || 0 === ah.nX[0] ? aE.a3b = 1 : bD.gw.kI(1) || 0 === ah.nX[1] ? aE.a3b = 0 : aE.a3b = +(ah.hO[1] > ah.hO[0]);
			else {
				if (aE.iU) {
					var lT = bk.a4G();
					if (aE.a3A = lT, bj.lI[lT]) return void(aE.a3N = +(bj.fY[aE.fK] === lT))
				}
				aE.a3b = mW[0]
			}
			aE.a3N = +(aE.a3b === aE.fK)
		}
	}
}

function dL() {
	this.id = 0, this.e4 = 0, this.yf = null, this.yg = null, this.yh = null, this.yn = null, this.a2 = new a4H, this.dk = function() {
		var self, e4;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (e4 = Android.getVersion()) < 12 || (self.e4 = e4, self.id = 1, self.yg = Android),
			function(self) {
				var e4;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.yh = mwIOSdataX, self.yn = window.webkit.messageHandlers.iosCommandA, e4 = self
					.yh.version, self.e4 = e4 ? Number(e4) : 0)
			}(this),
			function(self) {
				var yf;
				try {
					if (!(yf = window.localStorage)) return;
					yf.setItem("tls7", "1"), yf.removeItem("tls7")
				} catch (error) {
					return
				}
				self.yf = yf
			}(this)
	}
}

function a4H() {
	this.a4L = function() {
		bm.qt.z3(), bm.qt.z4(), b1.z.close(0, 3255), 0 === a1.id ? a1.yf && a1.yf.clear() : 1 === a1.id ? a1.yg.saveString(199, "") : 2 === a1.id && a1.yn.postMessage("clear")
	}, this.a4M = function() {
		2 === a1.id ? a1.yn.postMessage("showConsentForm") : 1 === a1.id && a1.yg.setState(7)
	}, this.a4N = function() {
		this.setState(14)
	}, this.il = function() {
		return 1 === bm.buffer.yU(2)
	}, this.a4O = function() {
		bm.buffer.yT(102, "")
	}, this.setState = function(a4P) {
		1 === a1.id && 5 <= a1.e4 && a1.yg.setState(a4P)
	}, this.a3 = function() {
		var a4Q;
		1 === a1.id && 7 <= a1.e4 ? a1.yg.setState(5) : 2 === a1.id ? a1.yn.postMessage("reload 0") : ((a4Q = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a4Q.toString())
	}, this.eW = function() {
		0 !== a1.id && (1 === a1.id ? a1.yg.prepareAd("8646194357") : 2 === a1.id && (0 === a1.e4 ? a1.yn.postMessage("prepare ad 2904813909") : a1.yn.postMessage("loadAds 2904813909")))
	}, this.ec = function(eb) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.e4 && (a1.yg.presentAd(eb), !0) : 2 === a1.id && 0 !== a1.e4 && (a1.yn.postMessage("showAd"), !0))
	}, this.du = function() {
		2 === a1.id && a1.e4 < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a4R + "' target='_blank'>" + bN
			.a4R + "</a>", !0, [new x("⬅️ " + L(43), function() {
				u.v(0)
			}, bE.q8)]))
	}
}

function da() {
	function a4T(e) {
		mF(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(43), function() {
				u.a4U()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.po)]))
	}

	function a4g(e) {
		mF(e), u.v(4, 5, new w(L(44), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a4b(e), !0))
	}

	function a4b(e) {
		var s6 = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + s6 : 4527 === e ? "Player already in lobby" + s6 : 4577 === e ? "Your IP is banned." + s6 : 4530 === e ? "Lobby Timeout" + s6 : 4528 === e ?
			"Lobby Kick: Another login detected." + s6 : 4540 === e ? "You have been kicked." + s6 : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + s6 : 4555 === e ? "This Account is blocked." + s6 :
			4580 === e ? "More Gold needed" + s6 : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + s6 : 4591 === e ? "The algo determined you are a bot." + s6 : "Unknown error" + s6
	}

	function mF(e) {
		a4W(e), u.z.a0()
	}

	function a4W(e) {
		4540 === e && b1.z.a4i(e);
		var a4P = ab.a4V();
		bw.close(), 6 === a4P ? b1.z.a4i(e) : bq.f7 ? (u.y(), bq.x4(), b1.z.close(b1.z.f8, 3256)) : 8 === a4P && aE.a4j(!0)
	}
	this.q = [], this.a4S = function(oQ, e) {
		if (1 === oQ && __fx.customLobby.isActive() && 6 !== ab.a4V() && __fx.customLobby.setActive(!1), console.log("socket close index " + oQ + " error " + e), this.q.push(e), 4321 === e && (data = bm.z.yy(0)) && (console.log("Reset to: " +
				data.ua), bm.qt.qu(105, data.ua), bm.qt.qu(106, data.password)), 8 === u.uc && 0 === oQ)
			if (4211 === e) a4T(e);
			else {
				if (bq.f7 && (4495 === e || 4480 === e) && b1.z.f8 !== oQ) return void u.a4U();
				if (8 !== ab.a4V() && a4W(), 4480 === e) return bm.qt.z5(), void u.v(4, 0, new w(L(46), L(47), !0));
				var data = 0;
				u.a4Z() && 10 === u.a4Z().a4a && (data = u.a4Z().a4a), u.v(4, data, new w(L(44), a4b(e), !0))
			}
		else {
			data = ab.a4V();
			if (6 === data) {
				if (4211 === e) return void a4T(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a4c(oQ)
			} else if (bq.f7) {
				if (oQ !== b1.z.f8) return
			} else {
				if (8 === data) return void(oQ !== b1.z.a4d || aE.lF || 1 !== aE.a3I || aE.hj || aO.a4e(L(45, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}(4591 === e ? function(e) {
				mF(e), u.v(4, 5, new w("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new x("⬅️ " + L(43), function() {
					u.a4U()
				}), new x("🔄 Reload", function() {
					a1.a2.a3()
				}, bE.po)]))
			} : a4g)(e)
		}
	}, this.a4h = function(e) {
		this.q.push(e), 8 === ab.a4V() ? aE.lF || 1 !== aE.a3I || aO.a4e(L(45, [e])) : a4g(e)
	}, this.t = function() {
		this.q.push(3268), mF(3268)
	}
}

function dA() {
	var a4k, a4l, a4m = -15e3,
		a4n = !1;

	function hn(e) {
		a57() || (a4n = !0, a58(e, 1), b1.z.a59(b1.z.a4d), a5A(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a4w(e) {
		a4m = bi.ea, a58(e, 1), b1.z.a59(b1.z.a4d), 0 < e.touches.length && (a4k = Math.floor(i.l * e.touches[0].clientX), a4l = Math.floor(i.l * e.touches[0].clientY), av.a4w(e) || a5A(a4k, a4l))
	}

	function a5A(fh, fj) {
		u.hn(fh, fj), 0 === aE.a3I ? ab.hn(fh, fj) : bF.a5B(fh, fj) || bh.hn(fh, fj) || aY.hn(fh, fj) || aM.a5C(fh, fj) || aQ.hn(fh, fj) || 0 <= aN.hn(fh, fj) || ax.hn(fh, fj) || bM.a5D(fh, fj) || aM.a5E(fh, fj)
	}

	function a4s(e) {
		a57() || (a4n = !0, a58(e, 1), a5F(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a4x(e) {
		a4m = bi.ea, a58(e, 1), 0 < e.touches.length && (a4k = Math.floor(i.l * e.touches[0].clientX), a4l = Math.floor(i.l * e.touches[0].clientY), av.a4x(e) || a5F(a4k, a4l))
	}

	function a5F(fh, fj) {
		bM.sr() || (bM.hf = fh, bM.hg = fj), u.a4s(fh, fj), 0 === aE.a3I ? ab.a4s(fh, fj) : (bW.hh(fh, fj), bh.a4s(fh, fj) || (aN.a4s(fh, fj), aM.iM() ? aM.a4s(fh, fj) : aS.ho ? aS.a4s(fh) && (bi.ds = !0) : (aW.a4s(fh, fj), aT.o3 && aT.a4s(fh, fj) &&
			(bi.ds = !0))))
	}

	function a4u(e) {
		a57() || (a58(e, 1), a5G(), 0 === aE.a3I ? (ab.click(-1024, -1024), aU.reset()) : (aW.a5H(-1024, -1024), aN.a4s(-1024, -1024), aS.a5I(), aT.o3 = !1))
	}

	function a4t(e) {
		a57() || (a58(e, 1), a5J(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a4q && (bM.a4q = !1, e.preventDefault()))
	}

	function click(e) {
		a57() || a58(e, 1)
	}

	function a4y(e) {
		a4m = bi.ea, a58(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a3I ? aT.o3 = !1 : av.a5K() || (a5J(a4k, a4l, !1), bM.a4q && (bM.a4q = !1, e.preventDefault()))
	}

	function a4z(e) {
		a4m = bi.ea, a58(e, 1), a5J(a4k, a4l, !1), bM.a4q && (bM.a4q = !1, e.preventDefault())
	}

	function a50(e) {}

	function a51(e) {}

	function a52(e) {
		a57() || a58(e, 0)
	}

	function a5J(fh, fj, a5L) {
		a5G(), 0 === aE.a3I ? ab.click(fh, fj) : (aW.a5H(fh, fj), bh.a5H(), aS.a5I(), aT.o3 = !1, aM.click(fh, fj, a5L) ? bi.ds = !0 : aN.a4t(fh, fj))
	}

	function a5G() {
		u.a5G()
	}

	function a4v(e) {
		var fh, fj, deltaY;
		a57() || (a58(e, 1), b1.z.a59(b1.z.a4d), fh = Math.floor(i.l * e.clientX), fj = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a4v(fh, fj, deltaY), 0 === aE.a3I ? ab.a4v(fh, fj, deltaY) : aW.a4v(fh, fj,
			deltaY) || (aS.a5M(fh, fj) ? aS.a4v(deltaY) && (bi.ds = !0) : aT.a4v(fh, fj, deltaY)))
	}

	function a53(e) {
		a58(e, 0)
	}

	function a58(e, id) {
		0 === id && u.iM() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a4V() && e.preventDefault()
	}

	function a54(e) {
		if (__fx.keybindHandler(e.key)) return;
		a57() || 0 < i.uI || (e = e.code) && e.length && (ba.ek(e, 18) ? at.a5O(3) : ba.ek(e, 22) ? at.a5O(0) : ba.ek(e, 20) ? at.a5O(1) : ba.ek(e, 24) ? at.a5O(2) : ba.ek(e, 10) ? aS.a5P(31 / 32) : ba.ek(e, 8) ? aS.a5P(32 / 31) : ba.ek(e, 6) ? aS
			.a5P(7 / 8) : ba.ek(e, 4) ? aS.a5P(8 / 7) : ba.ek(e, 14) ? 0 !== aE.a3I && aT.a4v(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.ek(e, 16) ? 0 !== aE.a3I && aT.a4v(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.ek(e, 0) ?
			aE.a3I && bW.hi(0) : ba.ek(e, 2) ? aE.a3I && bW.hi(1) : ba.ek(e, 30) ? aE.a3I && bW.hi(2) : ba.ek(e, 26) ? aE.a3I && bW.iG() : ba.ek(e, 28) && aE.a3I && bW.iL())
	}

	function a55(e) {
		if (!a57() && !(0 < i.uI || bi.ea < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a5Q(1) || "Space" === code && u.a5Q(0))) return bq.f7 ? bq.xA.a5Q(code) ? void 0 : void("Escape" === code && bM.g3()) : void(8 !== ab.a4V() && ab.a5Q(e) ? bi.ds = !0 : "Escape" === code ?
				bM.g3() : ba.ek(code, 18) ? at.a5R(3) : ba.ek(code, 22) ? at.a5R(0) : ba.ek(code, 20) ? at.a5R(1) : ba.ek(code, 24) ? at.a5R(2) : ba.ek(code, 12) ? bF.a5S(!aE.o1) : "Space" === code && aE.a3I && (aN.hk && aN.a5T(), aE.hj) &&
				bF.a5U(!1))
		}
	}

	function a56() {
		"hidden" !== document.visibilityState && (bi.ds = !0)
	}

	function a57() {
		return a4m + 15e3 > bi.ea
	}

	function resize() {
		i.a5W()
	}
	this.a4o = 0, this.a4p = "", this.a4q = !1, this.hf = 0, this.hg = 0, this.dk = function() {
		a4r.addEventListener("mousedown", hn, {
			passive: !1
		}), a4r.addEventListener("mousemove", a4s, {
			passive: !1
		}), a4r.addEventListener("mouseup", a4t, {
			passive: !1
		}), a4r.addEventListener("click", click, {
			passive: !1
		}), a4r.addEventListener("mouseleave", a4u, {
			passive: !1
		}), a4r.addEventListener("wheel", a4v, {
			passive: !1
		}), a4r.addEventListener("touchstart", a4w, {
			passive: !1
		}), a4r.addEventListener("touchmove", a4x, {
			passive: !1
		}), a4r.addEventListener("touchend", a4y, {
			passive: !1
		}), a4r.addEventListener("touchcancel", a4z, {
			passive: !1
		}), a4r.addEventListener("dragover", a50), a4r.addEventListener("drop", a51), a4r.addEventListener("dblclick", a52), document.addEventListener("contextmenu", a53), document.addEventListener("keydown", a54), document.addEventListener(
			"keyup", a55), document.addEventListener("visibilitychange", a56), window.addEventListener("resize", resize)
	}, this.a5D = function(fh, fj) {
		return !!bF.hn(fh, fj) || !!(aW.hn(fh, fj) || aT.hn(fh, fj) || aS.hn(fh, fj) || aO.hn(fh, fj))
	}, this.a5V = a57, this.sr = function() {
		return !a4n || 0 < a4m
	}, this.g3 = function() {
		if (!u.iM()) return 8 === ab.a4V() ? aE.o1 ? void bF.a5S(!1) : bh.iM ? void bh.a5T() : void aN.a5T() : void(7 !== ab.a4V() && 6 === ab.a4V() && aa.a5X());
		u.a5Q(2)
	}
}

function c3() {
	this.sP = new a5Y, this.sX = new a5Z, this.gw = new a5a, this.tN = new a5b, this.ox = new a5c, this.ou = new a5d, this.canvas = new a5e, this.color = new a5f, this.a5g = new a5h, this.dk = function() {
		this.sP.z2()
	}
}

function a5Z() {
	this.zv = function(h) {
		h.fill(0)
	}, this.a5i = function(h) {
		for (var fa = h.length, aC = 0; aC < fa; aC++) h[aC] = []
	}, this.a5j = function(wp, a5k) {
		for (var wq = bR.gA, aC = 0; aC < 3; aC++) wq[aC] = a5k * wp[aC];
		return wq
	}, this.a5l = function(wp, wq, a5m) {
		for (var kA = 0, aC = 0; aC < 3; aC++) kA += Math.abs(wp[aC] - wq[aC]);
		return a5m <= kA
	}, this.a5n = function(wp, a5o) {
		for (var aC = 0; aC < 3; aC++) wp[aC] = bO.ik(wp[aC] + a5o, 0, 255);
		return wp
	}, this.a5p = function(h, uu, uv) {
		uv = uv || h.length - 1;
		for (var a5q = 0, aC = uu = uu || 0; aC <= uv; aC++) a5q += h[aC];
		return a5q
	}, this.a5r = function(h, a5s) {
		for (var aC, a5t, fa = h.length, a5u = [], ft = fa - 1; 0 <= ft; ft--) {
			for (aC = a5t = 0; aC < fa; aC++) a5s(h[aC]) < a5s(h[a5t]) && (a5t = aC);
			fa--, a5u.push(h[a5t]), h[a5t] = h[fa], h.pop()
		}
		return a5u
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
	}, this.a5v = function(h, g2) {
		for (var fa = h.length, h3 = 0, aC = 0; aC < fa; aC++) h3 += h[aC] > g2;
		return h3
	}, this.a5w = function(a5x, a5y, min) {
		for (var fa = a5y[0], aC = fa - 1; 0 <= aC; aC--) a5x[aC] < min && (a5x[aC] = a5x[--fa]);
		a5y[0] = fa
	}, this.a5z = function(h, fa, value) {
		for (var aC = 0; aC < fa; aC++) h[aC] -= value
	}, this.a60 = function(h) {
		for (var fa = h.length, aC = 0; aC < fa; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a61 = function(s6, h, a62) {
		h.fill(0);
		for (var uy = s6.split(","), fa = Math.min(uy.length, h.length), aC = 0; aC < fa; aC++) h[aC] = Math.min(parseInt(uy[aC]), a62)
	}, this.a63 = function(s6, h, tK) {
		h.fill("");
		for (var uy = s6.split('"'), fa = Math.min(uy.length, 2 * h.length), iS = 0, aC = 1; aC < fa; aC += 2) h[iS++] = uy[aC].slice(0, tK)
	}, this.a64 = function(h, h3) {
		if (0 === h3) h.fill(0);
		else {
			var a5q = this.a5p(h),
				fa = h.length;
			if (0 === a5q) h.fill(bO.g1(h3, fa));
			else
				for (var aC = 0; aC < fa; aC++) h[aC] = bO.g1(h3 * h[aC], a5q);
			if (0 === (a5q = this.a5p(h))) h[1] = h3;
			else
				for (var iS = 0; a5q++ < h3;) h[iS = (iS + 1) % fa] && h[iS]++
		}
	}, this.a65 = function(h) {
		if (!h) return 0;
		var fa = h.length;
		if (0 === fa) return 0;
		for (var g2 = h[fa - 1], aC = fa - 2; 0 <= aC; aC--)
			if (h[aC] !== g2) return aC + 2;
		return 1
	}, this.a66 = function(h) {
		for (var a5q = 0, aC = 0; aC < h.length; aC++) a5q += h[aC].length;
		return a5q
	}, this.a67 = function(a68) {
		for (var h = [], aC = 0; aC < a68.length; aC++) h = h.concat(a68[aC]);
		return h
	}, this.has = function(h, g2) {
		for (var fa = h.length, aC = 0; aC < fa; aC++)
			if (h[aC] === g2) return !0;
		return !1
	}
}

function a5e() {
	this.a26 = function(a69, eJ, a6A) {
		var iW = a69.height,
			a6B = bD.sP.zl(iW, iW),
			ic = bD.sP.getContext(a6B);
		return function(j, ic, a6A) {
			ic.fillStyle = a6A, ic.beginPath(), ic.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), ic.fill()
		}(iW, ic, a6A), ic.drawImage(a69, -eJ * iW, 0), a6B
	}, this.a6D = function(a6E) {
		var ic, iZ, iW = a6E.height;
		return a6E.width === iW && (iZ = (ic = bD.sP.getContext(a6E, !0)).getImageData(0, 0, iW, iW), bD.ou.a6F(iZ.data, iW, iW, .9), ic.putImageData(iZ, 0, 0)), a6E
	}
}

function a5f() {
	this.a6G = function(g2) {
		return [g2 >> 12 & 63, g2 >> 6 & 63, 63 & g2]
	}, this.a6H = function(g2) {
		for (var h = this.a6G(g2), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a6I = function(g2) {
		g2 = this.a6H(g2);
		return bD.color.pJ(g2[0], g2[1], g2[2])
	}, this.a6J = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.pJ = function(eI, uy, fu) {
		return "rgb(" + eI + "," + uy + "," + fu + ")"
	}, this.pL = function(eI, uy, fu, ft) {
		return "rgba(" + eI + "," + uy + "," + fu + "," + ft.toFixed(3) + ")"
	}, this.st = function(ek) {
		for (var h = ek.split("(")[1].split(","), g9 = bR.g9, aC = 0; aC < 3; aC++) g9[aC] = parseInt(h[aC]);
		return 4 === h.length ? g9[3] = 255 * parseFloat(h[3].slice(0, -1)) : g9[3] = 255, g9
	}, this.su = function(a6K, fd) {
		for (var h = a6K.slice(a6K.indexOf("(") + 1, a6K.indexOf(")")).split(","), g9 = bR.g9, aC = 0; aC < 3; aC++) g9[aC] = bO.ik(parseInt(h[aC].trim(), 10) + fd, 0, 255);
		return 3 === h.length ? this.pJ(g9[0], g9[1], g9[2]) : (a6K = parseFloat(h[3].trim()), this.pL(g9[0], g9[1], g9[2], a6K = 0 === a6K ? .3 : a6K))
	}, this.xe = function(a6L, a6M) {
		for (var kA = 0, aC = 0; aC < 3; aC++) kA += Math.abs(a6M[aC] - a6L[aC]);
		if (!(240 <= kA))
			for (aC = 0; aC < 3; aC++) a6M[aC] = a6L[aC] + (a6L[aC] < 128 ? 80 : -80)
	}, this.a6N = function(h) {
		for (var s6 = "#", aC = 0; aC < 3; aC++) {
			var eI = h[aC].toString(16);
			s6 += 1 === eI.length ? "0" + eI : eI
		}
		return s6
	}, this.a6O = function(s6) {
		var eI, uy;
		return s6.length < 7 ? bE.pI : (eI = parseInt(s6.slice(1, 3), 16), uy = parseInt(s6.slice(3, 5), 16), s6 = parseInt(s6.slice(5, 7), 16), this.pJ(eI, uy, s6))
	}
}

function a5c() {
	this.a6P = function(s6, font, maxWidth) {
		if (font && (xz.font = font), xz.measureText(s6).width <= maxWidth) return s6;
		for (var aC = s6.length - 1; 1 <= aC; aC--)
			if (s6 = s6.substring(0, aC), xz.measureText(s6 + "...").width <= maxWidth) return s6 + "...";
		return "..."
	}
}

function a5h() {
	var a6R = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a6S = function(ea) {
		var a6U, s6 = new Date(ea.getTime() - 6e4 * ea.getTimezoneOffset()).toUTCString();
		return s6.length < 12 || (s6 = s6.substring(5, s6.length), 0 === (ea = ea.getTimezoneOffset())) ? s6 : (a6U = (ea < 0 ? "+" : "-") + bO.g1(Math.abs(ea), 60), 0 == (ea = Math.abs(ea) % 60) ? s6 + a6U : s6 + a6U + ":" + (ea < 10 ? "0" :
			"") + ea)
	}, this.a6V = function(ea) {
		var s6 = ea.toUTCString();
		return s6.length < 12 ? s6 : function(ea) {
			return a6R[ea.getUTCDay()]
		}(ea) + ", " + s6.substring(5, s6.length - 4)
	}
}

function a5Y() {
	var a6X = null;
	this.a2N = 0, this.z2 = function() {
		var g2 = bm.buffer.data[5].value;
		a6X = "px " + g2, "system-ui" !== g2 && (a6X += ", system-ui"), this.a2N = iV(32, 32, ["a", "b", "m"], 200, a6X)
	}, this.zl = function(j, k) {
		var ek = document.createElement("canvas");
		return ek.width = j, ek.height = k, ek
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(ox, j, k) {
		return ox.getImageData(0, 0, j, k)
	}, this.uA = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a6X : 1 === type ? "bold " + size + a6X : 2 === type ? "lighter " + size + a6X : 3 === type ? "italic " + size + a6X : 4 === type ? "oblique " + size + a6X : 5 === type ? "small-caps " +
			size + a6X : "small-caps bold " + size + a6X
	}, this.textAlign = function(ic, id) {
		ic.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(ic, id) {
		ic.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.sZ = function(e, code, color) {
		e.classList.toggle("fx-line", !color), e.classList.toggle("fx-box", !code || 5 === code);
		color = this.sY(bf.uC) + " solid " + (color || bE.pR);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.v0 = function(e, fh, fj, j, k) {
		e = e.style;
		e.left = this.v1(fh), e.top = this.v1(fj), e.width = this.v1(j), e.height = this.v1(k)
	}, this.sQ = function(g2) {
		return 1 + g2 * a1.a2.il()
	}, this.tc = function(oA, h9) {
		return oA * this.sQ(void 0 === h9 ? .5 : h9) * i.im / i.l
	}, this.uz = function(oA, h9) {
		return oA * this.sQ(void 0 === h9 ? .5 : h9) * i.im
	}, this.ug = function(oA, h9, a6Y) {
		return this.sQ(h9) * Math.min(oA * i.im, a6Y * i.j) / i.l
	}, this.sY = function(g2) {
		return g2.toFixed(1) + "px"
	}, this.v1 = function(g2) {
		return this.xQ(g2).toFixed(1) + "px"
	}, this.xQ = function(g2) {
		return g2 / i.l
	}, this.a6a = function(a6b) {
		for (var s6 = "<ul>", fa = a6b.length, aC = 0; aC < fa; aC++) s6 += "<li>" + a6b[aC][0] + ": <a href='" + a6b[aC][1] + "' target='_blank'>" + a6b[aC][0] + "</a></li>";
		return s6 += "</ul>"
	}, this.a6c = function(a6d) {
		return "<a href='" + a6d + "' target='_blank'>" + a6d + "</a>"
	}, this.a6e = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.xc = function(e) {
		var eb = e.textContent;
		bD.tN.a6f(eb, "✔") || (1 === eb.length ? e.textContent = "✔" : e.textContent = eb + " ✔", setTimeout(function() {
			e.textContent = eb
		}, 500))
	}, this.measureText = function(s6) {
		return xz.measureText(s6).width
	}, this.uq = function(om) {
		om.style.overflowX = "auto", om.style.overflowY = "hidden", om.style.whiteSpace = "nowrap", om.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.v3 = this.scrollLeft, e.preventDefault())
		}), om.addEventListener("scroll", function() {
			this.v3 = this.scrollLeft
		})
	}
}

function a5a() {
	this.hl = function(a4P) {
		return 0 === a4P ? 1 === aE.a3I && aE.hy : 1 === a4P ? 1 === aE.a3I && !aE.hy : 2 === aE.a3I
	}, this.hm = function(player) {
		return 0 !== ah.nX[player] && 2 !== ah.a6g[player]
	}, this.a6h = function(player) {
		return player === aE.fK && 2 !== ah.a6g[player]
	}, this.lZ = function(player, k4) {
		return player !== k4 && (0 === bj.fY[player] || bj.fY[player] !== bj.fY[k4])
	}, this.mg = function() {
		return am.lR < 2 ? 0 : aE.iU ? 1 < bk.a6i() : ah.hO[mW[1]]
	}, this.a6j = function() {
		var lR = am.lR;
		if (0 !== lR) {
			if (!aE.iU) return !this.kI(mW[0]);
			for (var fY = bj.fY, lT = bk.lU(), lW = am.lW, aC = lR - 1; 0 <= aC; aC--) {
				var h8 = lW[aC];
				if (fY[h8] === lT && !this.kI(h8)) return 1
			}
		}
		return 0
	}, this.a6k = function(player) {
		return player === aE.fK
	}, this.a6l = function(k4, oA) {
		return ah.hc[aE.fK] < oA * ah.hc[k4]
	}, this.kI = function(player) {
		return player >= aE.kv || 2 === ah.a6g[player]
	}, this.lt = function(player) {
		return 0 !== ah.nX[player]
	}, this.a38 = function(player) {
		return player < aE.kv
	}, this.rm = function(a6m, a6n) {
		return a6m !== a6n
	}, this.gz = function(player, g2) {
		var min;
		return g2 = this.a6o(player, g2), ah.hc[player] += g2, ah.a6p[player] && (min = Math.min(ah.a6p[player], ah.hc[player]), ah.a6p[player] -= min, ah.hc[player] -= min), g2
	}, this.a6o = function(player, g2) {
		var a6q = ah.hc[player];
		return g2 = Math.min(g2, ah.hO[player] * aE.a6r - a6q), g2 = Math.min(g2, aE.a6s - a6q), Math.max(g2, 0)
	}, this.n3 = function(player, jD, a6t, a6u) {
		var a6q = ah.hc[player],
			jD = bO.g1(a6q * (jD + 1), 1024),
			a6t = bO.g1(a6t * a6q, 1024),
			jD = Math.min(jD, a6q - a6t);
		return jD = b5.a6w(player, jD), bR.g7[0] = jD, bR.g7[1] = a6t, a6u <= jD
	}, this.rG = function(player, qy, qx) {
		var player = ah.hc[player],
			a6v = bO.g1(64 * player, 1024);
		return qy = Math.min(qy, player - a6v), qy = this.a6o(qx, qy), bR.g7[0] = qy, bR.g7[1] = a6v, 1 <= qy
	}, this.a6x = function(player, qy, qx) {
		var player = ah.hc[player],
			a6v = bO.g1(64 * player, 1024);
		return qy = Math.min(qy, player - a6v), this.a6o(qx, qy)
	}, this.rI = function(qy, qx) {
		return qy = this.a6o(qx, qy), bR.g7[0] = qy, bR.g7[1] = 0, 1 <= qy
	}, this.jC = function(player, a6y) {
		return bO.g1(ah.hc[player] * (a6y + 1), 1024)
	}, this.a6z = function(player, a6t) {
		a6t = bO.g1(a6t * ah.hc[player], 1024);
		bR.g7[1] = a6t, ah.hc[player] -= a6t
	}, this.gx = function(player, a70) {
		var gL, gN, fu = ah.hc[player];
		return a70 <= fu ? ah.hc[player] -= a70 : (ah.hc[player] = 0, gN = ah.a6p[player] + (gL = 5 * ((fu = a70 - fu) >> 2)), bg.h0(player, gL - fu, 12), gN <= aE.a71 ? ah.a6p[player] = gN : (ah.a6p[player] = aE.a71, bg.h0(player, gN - aE.a71,
			18))), a70
	}, this.m7 = function(player, jD) {
		var hc = ah.hc,
			a6q = hc[player],
			jD = bO.g1(a6q * (jD + 1), 1024),
			a6v = Math.max(bO.g1(a6q, 10), 1e3);
		return (jD = Math.min(jD, a6q - a6v)) < 0 ? (hc[player] = 0, a6v = Math.min(1e3, a6q + aE.a71 - ah.a6p[player]), bR.g7[1] = a6v, ah.a6p[player] += a6v - a6q, 0) : (bR.g7[1] = a6v, jD = b5.a6w(player, jD), hc[player] -= a6v + jD, b5.a72(
			player, jD), jD)
	}, this.n5 = function(player) {
		var iJ = bR.g7[0];
		ah.hc[player] -= iJ + bR.g7[1], b5.a72(player, iJ)
	}, this.rn = function(player, k4) {
		return (k4 = Math.min(k4, aE.fX)) < aE.fX && 0 === ah.nX[k4] && (k4 = aE.fX), (bR.fW[0] = k4) === aE.fX || bv.fT(player, k4)
	}, this.rq = function(player, qx) {
		return 0 !== ah.nX[qx] && !bv.fT(player, qx)
	}, this.a73 = function(player, a74) {
		for (var h8, fa = am.lR, a75 = 0, a76 = mW, aC = 0; aC < fa; aC++)
			if (h8 = a76[aC], !this.kI(h8)) {
				if (player === h8) return !0;
				if (++a75 > a74) return !1
			} return !1
	}, this.mS = function(h8) {
		var a77 = aE.iU ? bk.lS() : ah.hO[mW[0]];
		return a77 >= bO.g1(h8 * aE.kf, 100)
	}, this.a78 = function(g2, min, max) {
		return Math.floor(bO.ik(isNaN(g2) ? 0 : Number(g2), min, max))
	}
}

function a5d() {
	this.a79 = function(canvas, a7A, a7B) {
		var j = canvas.width,
			k = canvas.height,
			ek = bD.sP.zl(j, k),
			ic = bD.sP.getContext(ek, !0),
			canvas = (ic.drawImage(canvas, 0, 0), ic.getImageData(0, 0, j, k));
		return a7A(canvas.data, j, k, a7B), ic.putImageData(canvas, 0, 0), ek
	}, this.a7C = function(zw, j, k) {
		for (var fh = j - 1; 0 <= fh; fh--)
			for (var fj = k - 1; 0 <= fj; fj--) {
				var aC = 4 * (fh + fj * j);
				zw[3 + aC] = zw[aC], zw[aC] = zw[1 + aC] = zw[2 + aC] = 255
			}
	}, this.a7D = function(zw, j, k) {
		for (var fh = j - 1; 0 <= fh; fh--)
			for (var fj = k - 1; 0 <= fj; fj--) {
				var aC = 4 * (fh + fj * j);
				zw[1 + aC] > zw[2 + aC] + 10 && (zw[3 + aC] = zw[aC], zw[1 + aC] = zw[2 + aC])
			}
	}, this.a7E = function(zw, j, k) {
		for (var fh = j - 1; 0 <= fh; fh--)
			for (var fj = k - 1; 0 <= fj; fj--) {
				var ft, g2, aC = 4 * (fh + fj * j);
				zw[1 + aC] > zw[2 + aC] + 10 && (g2 = 0 < (ft = 255 - zw[1 + aC] + zw[2 + aC]) ? Math.min(255, Math.round(255 * zw[2 + aC] / ft)) : 0, zw[aC] = zw[1 + aC] = zw[2 + aC] = g2, zw[3 + aC] = ft)
			}
	}, this.a7F = function(zw, j, k, a7B) {
		for (var gap = Math.floor(Math.min(j, k) * a7B), fh = 0; fh < j; fh++)
			for (var aC, fj = 0; fj < k; fj++)(fh < gap || fj < gap || j - gap <= fh || k - gap <= fj) && (zw[3 + (aC = 4 * (fh + fj * j))] = 255 - 255 * (zw[1 + aC] - zw[aC]) / (255 - zw[aC]))
	}, this.a7G = function(zw, j, k, a7B) {
		for (var fh = j - 1; 0 <= fh; fh--)
			for (var fj = k - 1; 0 <= fj; fj--) {
				var aC = 4 * (fh + fj * j);
				zw[aC] = a7B[0], zw[1 + aC] = a7B[1], zw[2 + aC] = a7B[2]
			}
	}, this.a7H = function(zw, j, k, a7B) {
		for (var gap = Math.floor(j * a7B), fh = 0; fh < j; fh++)
			for (var aC, fj = 0; fj < k; fj++)(fh < gap || fj < gap || j - gap <= fh || k - gap <= fj) && (zw[aC = 4 * (fh + fj * j)] = zw[1 + aC] = zw[2 + aC] = 0)
	}, this.a7I = function(zw, j, k) {
		for (var fj, aC, fh = j - 1; 0 <= fh; fh--)
			for (fj = k - 1; 0 <= fj; fj--) 200 < zw[1 + (aC = 4 * (fh + fj * j))] && zw[1 + aC] - 20 > zw[aC] && zw[1 + aC] - 20 > zw[2 + aC] ? zw[aC] + zw[2 + aC] < 40 ? zw[3 + aC] = 0 : (zw[3 + aC] = zw[aC], zw[aC] = 255, zw[1 + aC] = 255, zw[
				2 + aC] = 255) : zw[aC] < 50 && zw[1 + aC] < 50 && zw[2 + aC] < 50 && (zw[aC] + zw[1 + aC] + zw[2 + aC] < 50 ? zw[3 + aC] = 180 : zw[3 + aC] = 180 + Math.floor(75 * (zw[aC] + zw[1 + aC] + zw[2 + aC] - 50) / 100))
	}, this.a7J = function(zw, j, k) {
		for (var fj, aC, fh = j - 1; 0 <= fh; fh--)
			for (fj = k - 1; 0 <= fj; fj--) zw[1 + (aC = 4 * (fh + fj * j))] > zw[aC] + 20 && zw[1 + aC] > zw[2 + aC] + 20 && zw[aC] + zw[2] < 40 && (zw[3 + aC] = 255 - zw[1 + aC], zw[aC] = zw[1 + aC] = zw[2 + aC] = zw[aC])
	}, this.a6F = function(zw, j, k, a7B) {
		for (var eI = j >> 1, fh = 0; fh < j; fh++)
			for (var fj = 0; fj < k; fj++) Math.sqrt((fh - eI) * (fh - eI) + (fj - eI) * (fj - eI)) > a7B * eI && (zw[4 * (fh + fj * j) + 3] = 0)
	}
}

function a5b() {
	var a7K = {
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
		a7L = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.tO = function(em) {
		return em.replace(a7L, function(match) {
			return a7K[match] || match
		})
	}, this.a2b = function(g2) {
		var aC, a7M, a7N, a7O, a7P;
		if (g2 < 0) return "-" + this.a2b(Math.abs(g2));
		if (g2 < 1e3) return g2.toString();
		for (a7M = Math.floor(Math.log(g2 + .5) / Math.log(10)) + 1, a7N = Math.floor((a7M - 1) / 3), a7P = (a7O = g2.toString()).substring(a7M - 3, a7M), aC = 1; aC < a7N; aC++) a7P = a7O.substring(a7M - 3 * (aC + 1), a7M - 3 * aC) + " " + a7P;
		return a7O.substring(0, a7M - 3 * a7N) + " " + a7P
	}, this.a7Q = function(h8, a7M) {
		return h8.toFixed(a7M) + "%"
	}, this.a7R = function(g2, a7S) {
		return g2.toFixed(bO.ik(Math.floor((void 0 === a7S ? 3 : a7S) - Math.log10(Math.max(g2, 1))), 0, 8))
	}, this.a7T = function(g2, oA, a7M) {
		return (g2 * oA).toFixed(a7M)
	}, this.a45 = function(username) {
		var fe, fP = username.indexOf("[");
		return !(fP < 0) && 1 < (fe = username.indexOf("]")) - fP && fe - fP <= 8 ? username.substring(fP + 1, fe).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a45;
	this.a7U = function(s6) {
		for (var ft = Math.floor(.5 * s6.length + .5), oG = Math.floor(.5 * (ft - 1)), aC = 0; aC < oG; aC++)
			for (var fu = -1; fu < 2; fu += 2) {
				var ek = ft + fu * aC;
				if (" " === s6[ek]) return [this.a41(s6.substring(0, ek)), this.a7V(s6.substring(ek))]
			}
		return [s6.substring(0, ft), s6.substring(ft)]
	}, this.a7V = function(s6) {
		for (var fa = s6.length, aC = 0; aC < fa; aC++)
			if (" " !== s6[aC]) return s6.substring(aC);
		return s6
	}, this.a41 = function(s6) {
		for (var aC = s6.length - 1; 0 <= aC; aC--)
			if (" " !== s6[aC]) return s6.substring(0, aC + 1);
		return s6
	}, this.a7W = function(s6, a7X) {
		return s6.split("(")[0] + "(🧈 " + a7X.toFixed(2) + ")"
	}, this.startsWith = function(s6, a7Y) {
		return s6.substring(0, a7Y.length) === a7Y
	}, this.a6f = function(s6, a7Y) {
		var fa = s6.length;
		return s6.substring(fa - a7Y.length, fa) === a7Y
	}, this.a7Z = function(h, a7a, a7b) {
		var s6 = "",
			fa = h.length - 1;
		a7b = a7b || "";
		for (var aC = 0; aC < fa; aC++) s6 += a7b + h[aC] + a7b + ",", (aC + 1) % a7a == 0 && (s6 += "\n");
		return s6 += a7b + h[fa] + a7b
	}, this.a7c = function(s6, wp, wq) {
		return s6.replace(new RegExp(wp, "g"), wq)
	}
}

function a7d() {
	this.ej = function(player, fM) {
		aJ.a1G(player, bP.fi(fM), bP.fk(fM)) && (bi.ds = !0), aE.lF && this.ef()
	}, this.ef = function() {
		aE.hy = !1;
		for (var aC = 0; aC < aE.kv; aC++) 0 !== ah.nX[aC] && 0 === ah.hO[aC] && aJ.a1N(aC);
		0 !== ah.nX[aE.fK] ? (bg.nT[7] = ah.hO[aE.fK], bg.nT[8] = ah.hc[aE.fK], aS.a7e(), aX.a7f(), aE.hj || aI.ns(ah.jT[aE.fK] - 5, ah.jV[aE.fK] - 5, ah.jU[aE.fK] + 5, ah.jW[aE.fK] + 5), aw.dk()) : aY.show(!1, !1, !1, !0), aO.a7g(18), ag.a7h(),
			ag.nJ(!0), bS.z.a7i(), aM.ta(), aE.rl = null, be.a7j = !0, be.a7k(), aE.lF && a1.a2.setState(1)
	}
}

function c5() {
	this.fX = 512, this.a6s = 15e8, this.a7l = 1e9, this.a71 = 5e4, this.a7m = 512, this.gu = 2, this.fK = 0, this.kv = 0, this.a3L = 0, this.lH = 0, this.a3K = 0, this.a0R = 512, this.a0W = 512, this.a6r = 150, this.lF = !0, this.hj = 0, this.a3I =
		0, this.kf = 0, this.o1 = !1, this.hy = 0, this.a7n = 0, this.iU = !1, this.a0Y = 0, this.a0Z = 0, this.lD = 0, this.a1n = 0, this.rl = null, this.a3c = new a1b, this.a7o = 30, this.a3F = 0, this.a3N = 0, this.a3b = 0, this.a3A = 0, this
		.data = new a7p, this.a7q = new a7r, this.a7s = 0, this.a7t = "", this.a3k = -1, this.a7u = function() {
			this.a3k = -1, bX.turnstile.close(), bR.dk(), bU.dk(), bt.clear(), this.a3L = this.kv = this.data.humanCount, this.lF = 1 === this.a3L && !__fx.customLobby.isActive(), this.o1 = !1, this.hj = this.data.isReplay, this.lD = 0 === this.data
				.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a1n = this.data.isContest, this.iU = this.lD < 7 || 9 === this.lD, this.lD = 10 === this.lD && this.lF ? 7 : this.lD,
				this.lD = 8 === this.lD && 2 !== this.kv ? 7 : this.lD, b0.dk(), this.a0Y = this.data.numberTeams, this.data.teamPlayerCount ? this.a0Z = +(0 < this.data.teamPlayerCount[0]) : (this.a0Z = 0, this.iU && this.lF && (this.data
					.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.a0Y + 1), aE.a7q.a7v())), this.a7o = this.kv <= 2 ? 30 : this.kv <= 50 ? 40 : 50, this.a7n = this.hy = __fx.customLobby.isActive() ? __fx.customLobby
				.gameInfo.spawnSelection : this.data.selectableSpawn, this.rl = this.hy ? new a7d : null, this.a0R = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.kv) : 1 === m.dw ?
				this.a0R = this.kv : this.a0R = this.data.playerCount,
				this.a0W = this.a0R, this.lH = this.a0R - this.kv, this.a3K = 0, this.fK = this.data.selectedPlayer, this.a3F = 0, this.a3N = 0, this.a3b = 0, this.a3A = 0, az.a7w(this.data.spawningSeed), af.dk(), ah.dk(), ao.dk(), aj.a7x(), bB.qn
				.rZ = [], bB.i0.qq = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.dk(), this.a3I = 1, bg.dk(), a7y(), ad.dl(), aq.a7z(), be.dk(), ad.dk(), au.dk(),
				bP.dk(), bQ.dk(), ap.dk(), bY.a80(), aF.dk(), aj.a8(), aJ.dk(), aK.dk(), am.a81(), bC.dk(), bk.dk(), bS.dk(), bh.dk(), a82.putImageData(a83, 0, 0), aW.dk(), aT.dk(), aS.dk(), bF.dk(), ax.dk(), aV.dk(), aX.dk(), aN.dk(), aR.dk(), aO
				.dk(), aQ.dk(), aM.dk(), aY.dk(), aG.dk(), aH.dk(), gd(), ae.dk(), ag.dk(), b5.dk(), b6.dk(), b2.dk(), b8.dk(), b9.dk(), this.a3c.dk(), bi.a80(), aI.nr(), 0 === ah.nX[aE.fK] && aY.show(!1, !0), ag.nJ(!0), aw.dk(), bi.ds = !0, this
				.hj || this.lF && this.hy || a1.a2.setState(1), this.a7s = 0
		}, this.a4j = function(eZ) {
			bC.rj.a85.length ? this.a7t = bC.rj.a85 : this.a7t = bC.a86.a2m(), __fx.replayHistory.save(this.a7t), !1 === __fx.customLobby.isActive() && b1.z.a87(), bt.clear(), this.a3I = 0, bi.a88(), a1.a2.setState(0), ab.setState(0), __fx
				.customLobby.isActive() || bX.eR.show(eZ), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a7s ? u.z.a89(0) : 1 === this.a7s ? u.v(19) : u.v(5, 5)
		}, this.a8A = function() {
			return this.hj ? aN.hk || !bF.a8B : this.lF && (aN.hk || this.hy)
		}, this.a8C = function() {
			return 1 === this.a3I && !this.hy
		}
}

function a7p() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a8D = null
}

function a7r() {
	this.a7v = function() {
		var a8E = aE.data;
		bD.sX.a64(a8E.teamPlayerCount, a8E.playerCount), a8E.numberTeams = bD.sX.a5v(a8E.teamPlayerCount, 0), a8E.teamPlayerCount[0] && a8E.teamPlayerCount[7] && (a8E.teamPlayerCount[7] = 0, this.a7v())
	}, this.a8F = function() {
		var a8E = aE.data;
		a8E.mapType < 2 ? bV.a8(bV.a8G(a8E), a8E.mapSeed) : bV.a8H(a8E.canvas)
	}, this.a8I = function() {
		var a8E = aE.data;
		a8E.colorsData || (a8E.colorsData = new Uint32Array(1)), 0 === a8E.gameMode && (a8E.colorsData[0] = bm.z.z0()), a8E.selectableName && (a8E.playerNamesData || (a8E.playerNamesData = new Array(1)), a8E.playerNamesData[0] = bm.buffer.data[
			122].value), a8E.a8D = new Uint32Array(1), a8E.a8D[0] = bJ.f1.f2(bm.buffer.data[105].value, 5)
	}, this.a8J = function() {
		aE.data = new a7p
	}
}

function df() {
	var a8K = [];
	this.rJ = function(player, qx, a8L, a8M) {
		player === aE.fK || qx === aE.fK || !a8M && bD.gw.kI(player) || bD.gw.kI(qx) || this.a1o(ah.a1p[player] + " supported " + ah.a1p[qx] + " with " + bD.tN.a2b(a8L) + " ressource" + (1 === a8L ? "." : "s."))
	}, this.a1o = function(s6, r8) {
		s6 = {
			ea: aX.a8O(),
			s6: s6,
			r8: r8
		};
		a8K.push(s6), 30 === u.uc && u.a4Z().a1o(s6)
	}, this.clear = function() {
		a8K = [];
		var uy = u.a8P(30);
		uy && uy.clear()
	}, this.a8Q = function() {
		return a8K
	}
}

function dZ() {
	this.a2K = 0, this.gap = 0, this.uC = 0, this.sV = 0, this.dk = function() {
		this.resize()
	}, this.resize = function() {
		this.a2K = .0022 * bD.sP.sQ(.5) * i.im, this.uC = this.a2K / i.l, this.gap = Math.max(Math.floor((a1.a2.il() ? .0114 : .01296) * i.im), 2), this.sV = this.gap / i.l
	}
}

function dY() {
	this.a8R = function() {
		return a1.a2.il() ? 2 : 1
	}
}

function cG() {
	var p1, fh, fj, a8S, a8T, a8U, ea, a8V, a8W, a8X, a8Y, gap, zoom, rS, a8Z;

	function a8n(mA, mB, fE) {
		ad.fV(fE) || -1 === (mA = bQ.lk.a8w(mA, mB)) ? aO.a8v(fE) : aO.a8x(mA)
	}

	function a8j(a8V) {
		for (var aC = rS.length - 1; 0 <= aC; aC--)
			if (rS[aC] === a8V) return 1
	}

	function a8h(a8e) {
		var aC, fa;
		if (-1 !== a8e)
			for (fa = p1.length, aC = 0; aC < fa; aC++)
				if (p1[aC].iM && p1[aC].fh + 1 === a8e % 4 && p1[aC].fj + 1 === a8e >> 2) return aC;
		return -1
	}

	function a8f(mA, mB) {
		var uy = gap / 2;
		return mA < fh - a8S - 3 * uy || fh + 3 * a8S + 5 * uy < mA || mB < fj - a8S - 3 * uy || fj + 2 * a8S + 3 * uy < mB ? -1 : 4 * (mB < fj - uy ? 0 : mB < fj + a8S + uy ? 1 : 2) + (mA < fh - uy ? 0 : mA < fh + a8S + uy ? 1 : mA < fh + 2 * a8S +
			3 * uy ? 2 : 3)
	}
	this.a8a = function() {
		var aC, fu, a8d = [bE.pr, bE.q7, bE.pP, bE.qU, bE.qK];
		for (p1 = new Array(10), aC = 0; aC < 10; aC++) p1[aC] = {
			id: aC,
			iM: !1,
			ls: 0,
			canvas: [],
			fh: 0,
			fj: 0
		};
		for (p1[0].colors = [0, 1, 2, 3], p1[0].fh = 0, p1[0].fj = 0, p1[1].colors = [1, 4], p1[1].fh = 1, p1[1].fj = 0, p1[2].colors = [0, 1], p1[2].fh = -1, p1[2].fj = 0, p1[3].colors = [0], p1[3].fh = 0, p1[3].fj = 0, p1[4].colors = [0, 2],
			p1[4].fh = 1, p1[4].fj = 1, p1[5].colors = [3], p1[5].fh = 0, p1[5].fj = -1, p1[6].id = 20, p1[6].colors = [0], p1[6].fh = 1, p1[6].fj = -1, p1[7].id = 21, p1[7].colors = [0], p1[7].fh = 0, p1[7].fj = 1, p1[8].id = 16, p1[8]
			.colors = [0], p1[8].fh = 0, p1[8].fj = 0, p1[9].id = 10, p1[9].colors = [4], p1[9].fh = 2, p1[9].fj = 0, aC = 0; aC < 10; aC++)
			for (fu = 0; fu < p1[aC].colors.length; fu++) p1[aC].canvas.push(function(id, a6A) {
				if (id < 20) return bD.canvas.a26(ac.get(3), id, a6A);
				var a6A = ac.get(3).height,
					a6B = bD.sP.zl(a6A, a6A),
					ic = bD.sP.getContext(a6B);
				20 === id ? ic.drawImage(ac.get(18), 0, 0) : 21 === id && ak.zw.a2L(ak.tZ.a2A + ak.tZ.a2R, ic, 0, 0, a6A);
				return a6B
			}(p1[aC].id, a8d[p1[aC].colors[fu]]))
	}, this.a8c = function() {
		return p1
	}, this.dk = function() {
		rS = [], fh = fj = ea = 0, a8T = a8U = -1e3, this.resize()
	}, this.resize = function() {
		a8S = Math.floor((a1.a2.il() ? .075 : .0468) * i.im), zoom = a8S / ac.get(3).height, gap = Math.floor(a8S / 3)
	}, this.a5C = function(mA, mB) {
		return !!this.iM() && (bi.ds = !0, !!ak.zw.hn(mA, mB, a8W) || (mA = function(mA, mB) {
			a8U = a8T = -1e3;
			var a8g = a8h(a8f(mA, mB));
			if (-1 === a8g) return 0;
			if (1 !== p1[a8g].colors[p1[a8g].ls])
				if (5 === a8g) {
					if (! function() {
							var eb = performance.now();
							a8Z + 4e3 < eb && (rS = []);
							a8Z = eb
						}(), a8j(a8V)) return 1;
					rS.push(a8V), 16 < rS.length && rS.shift()
				} else if (6 === a8g) {
				for (var aC = rS.length - 1; 0 <= aC; aC--) 0 === ah.nX[rS[aC]] && rS.splice(aC, 1);
				0 < rS.length && (b6.a8k(1, rS, !0) && bB.gw.rR(rS, a8V), rS = [])
			} else if (2 === a8g) ao.iE(a8V) && bB.i0.qw(aS.i4(), a8V);
			else if (3 === a8g) aE.hy && bB.i0.i1(a8X);
			else if (0 === a8g)
				if (0 === p1[0].ls) {
					if (aE.a7n && aX.a8O() < 350) return 1;
					bY.a8l(4), bB.i0.i7(aS.i4(), a8V)
				} else b2.i8(a8V, aS.i4());
			else if (1 === a8g) bB.i0.iC(aS.i4(), a8X);
			else if (9 === a8g) bB.i0.iF(aS.i4());
			else {
				if (7 === a8g) return bY.a8l(0), ak.zw.show(mA, mB), 2;
				if (4 === a8g) b6.a8k(0, [a8V], !0) && bB.gw.rO(a8V);
				else {
					if (8 !== a8g) return 0;
					bB.i0.i3(aS.i4(), a8Y, a8V)
				}
			}
			return 1
		}(mA, mB), this.ta(), 2 === mA && (ak.zw.iM = !0), 0 < mA))
	}, this.a5E = function(mA, mB) {
		this.iM() || (a8T = mA, a8U = mB, ea = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.hq(mouseX),
			coordY = bP.hs(mouseY),
			point = bP.fQ(bP.fx(coordX, coordY));
		bP.ht(coordX, coordY) && a8n(mouseX, mouseY, point)
	}, this.click = function(mA, mB, a5L) {
		var hp = bP.hq(mA),
			hr = bP.hs(mB),
			fM = bP.fx(hp, hr),
			fE = bP.fQ(fM),
			a8m = (a1.a2.il() ? .025 : .0144) * i.im,
			eb = performance.now();
		return !(Math.abs(mA - a8T) > a8m || Math.abs(mB - a8U) > a8m || ea + 500 < eb || (ea = eb, bM.sr() && (bM.hf = mA, bM.hg = mB, b8.ef(1), b9.ef(1)), !bP.ht(hp, hr))) && (a5L ? (a8n(mA, mB, fE), !1) : aN.hk || this.iM() || !bD.gw.hm(aE
			.fK) || aE.hj ? (this.ta(), !1) : (aE.hy ? 0 <= (a8X = bu.hz(fM)) && (p1[3].iM = !0) : 2 === aE.a3I ? ad.hA(fE) && (a8V = ad.fS(fE), bD.gw.kI(a8V) || (p1[0].iM = !0, p1[0].ls = 1, p1[7].iM = !0)) : (bQ.iD.iE(aE.fK, fM) && (p1[0]
					.iM = !0, p1[0].ls = 1, p1[1].iM = !0, p1[1].ls = 0, p1[9].iM = !0, p1[9].ls = 0), bQ.iA.iB(aE.fK, fM) && (p1[0].iM = !0, p1[0].ls = 1, p1[1].iM = !0, p1[1].ls = 1, a8X = bR.gC[7]), ad.ff(fE) ? (a8Y = an.fB.fD(fE)) &&
				(a8m = bP.fQ(a8Y), p1[8].iM = !0, a8V = ad.fR(a8m) ? aE.fX : ad.fS(a8m)) : (ad.a1L(aE.fK, fE) && (a8W = aE.fK, p1[0].iM = !0, p1[0].ls = 1, p1[7].iM = !0), -1 !== (eb = bu.i5(fM)) && (ad.fR(eb << 2) ? (a8V = aE.fX, bv.i6(
					aE.fK) ? (p1[0].iM = !0, p1[0].ls = 0) : ae.gh(aE.fK) && (p1[0].iM = !0, p1[0].ls = 3)) : (a8V = ad.fS(eb << 2), p1[0].ls = 1, p1[5].iM = function(a8V) {
					return !bD.gw.kI(a8V) && !a8j(a8V) && b6.a8k(1, [a8V], !1)
				}(a8V), p1[7].iM || bD.gw.kI(a8V) || (a8W = a8V, p1[7].iM = !0), p1[4].iM = !bD.gw.kI(a8V) && !ag.a8r(a8V) && b6.a8k(0, [a8V], !1), p1[6].iM = function(a8V) {
					if (0 === rS.length) return !1;
					if (performance.now() > a8Z + 4e3) return !(rS = []);
					return !a8j(a8V) && ! function(a8V) {
						var aC;
						if (aE.iU)
							for (aC = rS.length - 1; 0 <= aC; aC--)
								if (!bv.fT(a8V, rS[aC])) return 1;
						return
					}(a8V)
				}(a8V), bv.fT(a8V, aE.fK) ? (bv.i9(aE.fK, a8V) ? (p1[0].ls = 0, p1[0].iM = !0) : ae.gh(aE.fK) && (p1[0].ls = 3, p1[0].iM = !0), p1[0].iM = this.a8t()) : (p1[2].iM = !0, ao.iE(a8V) ? p1[2].ls = 0 : p1[2].ls = 1,
					p1[0].iM = !0))))), this.a8o(mA, mB)))
	}, this.a8o = function(mA, mB) {
		return fh = mA - Math.floor(a8S / 2), fj = mB - Math.floor(a8S / 2), !!this.iM()
	}, this.a4s = function(mA, mB) {
		return !!this.iM() && (ak.zw.iM ? !ak.zw.a2J(mA, mB) && (ak.zw.iM = !1, bi.ds = !0) : function(tv, mA, mB) {
			mA = a8f(mA, mB);
			if (0 <= a8h(mA)) return !1;
			if ((1 === mA || 6 === mA) && 0 <= a8h(2)) return !1;
			if ((6 === mA || 9 === mA) && 0 <= a8h(10)) return !1;
			return tv.ta(), bi.ds = !0
		}(this, mA, mB))
	}, this.ta = function() {
		for (var aC = p1.length - 1; 0 <= aC; aC--) p1[aC].iM = !1, p1[aC].ls = 0;
		ak.zw.iM = !1
	}, this.iM = function() {
		return this.a8t() || ak.zw.iM
	}, this.a8t = function() {
		for (var fa = p1.length, aC = 0; aC < fa; aC++)
			if (p1[aC].iM) return !0;
		return !1
	}, this.xy = function() {
		if (this.iM())
			if (ak.zw.iM) ak.zw.xy();
			else {
				var aC, ic = xz,
					fu = p1,
					fa = fu.length,
					a91 = (a8S + gap) / zoom;
				for (ic.imageSmoothingEnabled = !0, ic.setTransform(zoom, 0, 0, zoom, fh, fj), aC = 0; aC < fa; aC++) fu[aC].iM && xz.drawImage(fu[aC].canvas[fu[aC].ls], fu[aC].fh * a91, fu[aC].fj * a91);
				ic.imageSmoothingEnabled = !1, ic.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cH() {
	var k, canvas, a92, a93, a94, a95 = -1;

	function a96() {
		var a97, ox = canvas.getContext("2d", {
			alpha: !0
		});
		ox.clearRect(0, 0, k, k), ox.fillStyle = bE.pN, ox.fillRect(0, 0, k, k), 9 === a93 && (ox.fillStyle = bE.pS, ox.fillRect(0, 0, k, k)), ox.fillStyle = bE.pR, __fx.utils.smoothFrame(ox, k, k) || (ox.fillRect(0, 0, k, 1), ox.fillRect(0, 0, 1,
			k), ox.fillRect(0, k - 1, k, 1), ox.fillRect(k - 1, 0, 1, k)), a97 = .9 * k / ac.get(0).width, ox.imageSmoothingEnabled = !0, ox.setTransform(a97, 0, 0, a97, Math.floor((k - a97 * ac.get(0).width) / 2), Math.floor((k - a97 * ac.get(0)
			.height) / 2)), ox.drawImage(ac.get(0), 0, 0), ox.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9A(mA, mB) {
		if (!aN.hk) return mA <= k + bf.gap && mB >= aS.fj ? 9 : -1;
		if (mA <= 4 * k + bf.gap) {
			if (mB >= aS.fj) return 0;
			if (mB >= aS.fj - k - a94 * bf.gap) return 2
		} else if (mA <= 7 * k + bf.gap && mB >= aS.fj - k - a94 * bf.gap) return 1;
		return -1
	}
	this.hk = !1, this.dk = function() {
		a93 = -1, this.hk = !1, a94 = a1.a2.il() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, a92 = bD.sP.uA(1, (a1.a2.il() ? .5 : .45) * k), a96()
	}, this.a98 = function() {
		return !(1 !== aE.a3I || aE.hy || (aE.hj ? !bF.a8B : this.hk && aE.lF))
	}, this.a5T = function() {
		this.hk = !this.hk, this.hk ? (bF.a5S(!1), aE.hj && bF.a8B && bF.a5U(!0), this.a99(), 9 === a93 && (a93 = 0)) : (a93 = -1, a96(), !aE.lF || 1 !== aE.a3I || aE.hy || aE.hj || a1.a2.setState(1)), bi.ds = !0
	}, this.a99 = function() {
		(aE.lF || aE.hj) && 1 === aE.a3I && (aW.nJ(!0), aE.hy || setTimeout(function() {
			be.a3U()
		}, 0), a1.a2.setState(0))
	}, this.hn = function(mA, mB) {
		return 0 <= (a95 = a9A(mA, mB)) || !aN.hk || aE.lF || aE.hj || bh.iM || aN.a5T(), a95
	}, this.a4s = function(mA, mB) {
		mA = a9A(mA, mB);
		mA !== a93 && (a93 = mA, this.hk || a96(), bi.ds = !0)
	}, this.a4t = function(mA, mB) {
		mA = a9A(mA, mB);
		return -1 !== mA && a95 === mA && (this.hk ? aE.o1 ? (0 <= mA && bF.a5S(!1), !aE.hj) : (0 === mA ? aE.a4j() : 1 === mA ? this.a5T() : 2 === mA && u.v(1, 0), !0) : 9 === mA && (this.a5T(), !0))
	}, this.xy = function() {
		var j;
		this.hk ? (j = Math.floor(5.5 * k), xz.setTransform(1, 0, 0, 1, bf.gap, aS.fj), xz.fillStyle = bE.pN, xz.fillRect(0, 0, j, k), 0 === a93 ? (xz.fillStyle = bE.pS, xz.fillRect(0, 0, 4 * k, k)) : 1 === a93 && (xz.fillStyle = bE.pS, xz
				.fillRect(4 * k, 0, Math.floor(1.5 * k), k)), xz.fillStyle = bE.pR, xz.fillRect(0, 0, j, 1), xz.fillRect(0, 0, 1, k), xz.fillRect(4 * k, 0, 1, k), xz.fillRect(0, k - 1, j, 1), xz.fillRect(j - 1, 0, 1, k), xz.font = a92, bD.sP
			.textBaseline(xz, 1), bD.sP.textAlign(xz, 1), xz.fillText(L(48), 2 * k, .54 * k), j = .4 * k, aN.a9E(bf.gap + 4 * k + (1.5 * k - j) / 2, aS.fj + .3 * k, j), j = 1, xz.setTransform(1, 0, 0, 1, bf.gap, aS.fj - j * a94 * bf.gap - j *
				k), xz.fillStyle = bE.pN, xz.fillRect(0, 0, 4 * k, k), a93 === j + 1 && (xz.fillStyle = bE.pS, xz.fillRect(0, 0, 4 * k, k)), xz.fillStyle = bE.pR, xz.fillRect(0, 0, 4 * k, 1), xz.fillRect(0, 0, 1, k), xz.fillRect(4 * k, 0, 1,
				k), xz.fillRect(0, k - 1, 4 * k, 1), xz.fillText(L(0 === j ? 48 : 49), 2 * k, .54 * k), xz.setTransform(1, 0, 0, 1, 0, 0)) : xz.drawImage(canvas, bf.gap, aS.fj)
	}, this.s0 = function(player) {
		return 0 !== ah.nX[player] && 2 !== aE.a3I && !bD.gw.kI(player)
	}, this.a9E = function(fh, fj, fa) {
		xz.setTransform(1, 0, 0, 1, fh, fj), xz.lineWidth = bf.a2K, xz.strokeStyle = bE.pR, xz.beginPath(), xz.moveTo(0, 0), xz.lineTo(fa, fa), xz.moveTo(0, fa), xz.lineTo(fa, 0), xz.stroke()
	}
}

function cI() {
	var a9G, k, a9H, a9I, a9J, a9K, a9L, a9M, a9N;

	function a1S() {
		return aS.a9f(aO.a9b()) ? ax.iM ? __fx.settings.keybindButtons ? aS.fj - 2 * aS.k - 3 * a9H : aS.fj - aS.k - 2 * a9H : __fx.settings.keybindButtons ? aS.fj - aS.k - 2 * a9H : aS.fj - a9H : bF.a9f(aO.a9e()) ? ax.iM ? bF.a1S() - aS.k - 2 *
			a9H : bF.a1S() - a9H : ax.iM ? i.k - aS.k - (bn.a8R() + 1) * a9H : i.k - bn.a8R() * bf.gap
	}

	function a9i(a4Q) {
		window.open(a4Q, "_blank"), aT.o3 = !1
	}

	function a9S(eb, s6, id, h8, a9V, a9W, lY, a9X, a9Y, a9Z, a9k) {
		var aC, ox, a6B, sH, a9l = void 0 !== a9Y,
			j = Math.floor(aR.measureText(s6, aO.a92) + 1.5 * a9I + (a9l ? k : 1.5 * a9I));
		if (bi.ds = !0, a9k || bt.a1o(s6, a9Y), j + 2 * a9H + aS.k > i.j && !a9l && 50 !== id && 20 < s6.length) a9S(eb, (a9k = bD.tN.a7U(s6))[0], id, h8, a9V, a9W, lY, a9X, a9Y, a9Z, !0), a9S(eb, a9k[1], id, h8, a9V, a9W, lY, a9X, a9Y, a9Z, !0);
		else if (a9k = j + (50 === id ? a9J : 0), (a6B = document.createElement("canvas")).width = j, a6B.height = k, (ox = a6B.getContext("2d", {
				alpha: !0
			})).font = aO.a92, bD.sP.textBaseline(ox, 1), bD.sP.textAlign(ox, 0), ox.clearRect(0, 0, j, k), ox.fillStyle = a9W, ox.fillRect(0, 0, j, k), __fx.utils.smoothFrame(ox, j, k, 0), ox.fillStyle = a9V, ox.fillText(s6, Math.floor(1.5 * a9I),
				Math.floor(k / 2)), a9l && (ox.imageSmoothingEnabled = !0, ak.zw.a2L(a9Y, ox, j - k, 0, k)), 0 === (sH = {
				ea: eb,
				s6: s6,
				id: id,
				player: h8,
				canvas: a6B,
				a9V: a9V,
				a9W: a9W,
				j: j,
				a9c: a9k,
				lY: lY,
				a9X: a9X,
				a9Y: a9Y,
				a9Z: a9Z
			}).ea || 0 < a9G.length && 0 < a9G[0].ea) a9G.unshift(sH);
		else {
			for (aC = 1; aC < a9G.length; aC++)
				if (0 < a9G[aC].ea) return void a9G.splice(aC, 0, sH);
			a9G.push(sH)
		}
	}

	function a9T(eI, uy, fu) {
		return "rgb(" + eI + "," + uy + "," + fu + ")"
	}

	function a9m(id, h3) {
		for (var fa = a9G.length, aC = 0; aC < fa; aC++) a9G[aC].id === id && h3-- <= 0 && (a9G.splice(aC, 1), aC--, fa--)
	}

	function a9n(id, player) {
		for (var fo = !1, aC = a9G.length - 1; 0 <= aC; aC--) a9G[aC].id !== id || player !== aE.fX && a9G[aC].player !== player || (a9G.splice(aC, 1), fo = !0);
		return fo
	}

	function aA8(s6) {
		a9S(340, s6, 6, 0, a9T(215, 245, 255), bE.pO, -1, !1)
	}
	this.a9O = "", this.dk = function() {
		var self;
		a9M = 0, a9L = a1.a2.il() ? 7 : 12, a9K = {
				w4: [0, 0, 0],
				a9P: [0, 0, 0],
				np: [220, 180, 180],
				xx: [0, 0, 0],
				ek: [0, 0, 0]
			}, a9G = [], this.resize(), aE.hy && this.a3W(0, 18), bV.wJ.zk[bV.fG].name.length && aA8(L(92, [bV.wJ.zk[bV.fG].name])), bV.wJ.zk[bV.fG].aA9 && aA8(L(93, [bV.wJ.zk[bV.fG].aA9])), aA8(L(94, [bV.fl - 2 + "x" + (bV.fm - 2)])), aA8(L(95,
				[bD.tN.a2b(aq.aAA)])), aq.aAA !== aq.aAB && aA8(L(96, [bD.tN.a2b(aq.aAB) + " (" + bD.tN.a7Q(100 * aq.aAB / aq.aAA, 1) + ")"])), 0 < aq.aAC && aA8(L(72, [bD.tN.a2b(aq.aAC) + " (" + bD.tN.a7Q(100 * aq.aAC / aq.aAA, 1) + ")"])), 0 <
			aq.aAD && aA8(L(97, [bD.tN.a2b(aq.aAD) + " (" + bD.tN.a7Q(100 * aq.aAD / aq.aAA, 1) + ")"])), 10 === aE.lD && a9S(120, L(98), 6, 0, a9T(235, 255, 120), bE.pO, -1, !1), 0 !== (self = this).a9O.length && (a9S(200, self.a9O, 0, 0, bE.pR,
				bE.pO, -1, !1), self.a9O = ""), aE.a1n && a9S(340, L(50), 6, 0, a9T(255, 200, 0), bE.pO, -1, !1)
	}, this.resize = function() {
		var a9U, aC;
		if (k = (k = Math.floor((a1.a2.il() ? .031 : .0249) * i.im)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.a92 = bD.sP.uA(1, this.fontSize), a9H = bf.gap, a9I = Math.floor(k / 5), 0 < a9G.length)
			for (a9U = a9G, a9G = [], aC = a9U.length - 1; 0 <= aC; aC--) a9S(a9U[aC].ea, a9U[aC].s6, a9U[aC].id, a9U[aC].player, a9U[aC].a9V, a9U[aC].a9W, a9U[aC].lY, a9U[aC].a9X, a9U[aC].a9Y, a9U[aC].a9Z, !0);
		this.a9a()
	}, this.a9a = function() {
		a9N = document.createElement("canvas");
		var s6 = L(51),
			ox = (a9J = aR.measureText(s6, this.a92) + 5 * a9I, a9N.height = k, a9N.width = a9J, a9N.getContext("2d", {
				alpha: !0
			}));
		ox.font = this.a92, bD.sP.textBaseline(ox, 1), bD.sP.textAlign(ox, 1), ox.clearRect(0, 0, a9J, k), ox.fillStyle = bE.po, ox.fillRect(0, 0, a9J, k), ox.fillStyle = bE.pR, ox.fillText(s6, Math.floor(a9J / 2), Math.floor(k / 2))
	}, this.a9b = function() {
		var fa;
		return ax.iM ? ax.j : 0 === (fa = a9G.length) ? 0 : 1 === fa ? a9G[0].a9c : a9d(a9G[0].a9c, a9G[1].a9c)
	}, this.a9e = function() {
		var fa = a9G.length;
		return ax.iM ? fa ? a9d(ax.j, a9G[0].a9c) : ax.j : 0 === fa ? 0 : 1 === fa ? a9G[0].a9c : 2 === fa ? a9d(a9G[0].a9c, a9G[1].a9c) : a9d(a9d(a9G[0].a9c, a9G[1].a9c), a9G[2].a9c)
	}, this.hn = function(fh, fj) {
		for (var ny, a9g, a9h = a1S(), aC = a9G.length - 1; 0 <= aC; aC--)
			if ((a9g = a9h - (aC + 1) * k) <= fj && fj < a9g + k) return 50 === a9G[aC].id ? fh >= i.j - a9J - a9H - a9G[aC].j && (fh >= i.j - a9J - a9H ? bB.gw.rO(a9G[aC].player) : aI.nt(a9G[aC].player, 800, !1, 0), !0) : fh >= i.j - a9G[aC].j -
				a9H && (736 === a9G[aC].id ? a9i("https://" + a9G[aC].s6) : 737 === a9G[aC].id ? a9i("https://" + a9G[aC].a9Z.a3m) : a9G[aC].a9X && (a9G[aC].a9Z && a9G[aC].a9Z.ft ? (a9g = a9G[aC].a9Z.fM, ny = bP.fi(a9g) - 10, a9g = bP.fk(
					a9g) - 10, aI.ns(ny, a9g, 19 + ny, 19 + a9g)) : a9G[aC].a9Z && a9G[aC].a9Z.fu ? aI.nu(a9G[aC].player, a9G[aC].a9Z.nv) : (aI.nt(a9G[aC].player, 800, !1, 0), 0 <= a9G[aC].lY && (ny = a9G[aC].lY, a9G[aC].lY = a9G[aC]
					.player, a9G[aC].player = ny))), !0);
		return !1
	}, this.a1o = function(eb, s6, id, h8, a9V, a9W, lY, a9X, a9Y, a9Z) {
		a9S(eb, s6, id, h8, a9V, a9W, lY, a9X, a9Y, a9Z)
	}, this.a9j = function(s) {
		a9S(300, s, 252, 0, bE.pR, bE.pO, -1, !1)
	}, this.a7g = function(id) {
		for (var aC = a9G.length - 1; 0 <= aC; aC--) a9G[aC].id === id && (a9G[aC].ea = 1)
	}, this.a3W = function(player, id) {
		0 === id ? (aR.ej(player, 0), a9m(423, 2), a9S(160, L(52, [ah.a1p[player]]), 423, player, "rgb(10,220,10)", bE.pO, -1, !1)) : 1 === id ? (a9n(50, aE.fX), aR.ej(player, 1), a9S(360, L(53, [ah.a1p[player]]), 0, player, bE.q9, bE.pO, -1, !
				0), aI.nt(player, 2700, !1, 0)) : 2 === id ? (aR.ej(player, 2), a9S(0, L(54), 0, player, "rgb(10,255,255)", bE.pO, -1, !0), aI.nt(player, 2700, !1, 0)) : 3 === id ? (aR.ej(player, 2), a9S(0, L(55, [ah.a1p[player]]), 0, player, bE
				.pR, bE.pO, -1, !0), aI.nt(player, 2700, !1, 0)) : 4 === id ? this.a9o(1, player, player) : 5 === id ? bD.gw.kI(aE.fK) || (function(id, nS) {
				var aC, ot = 0,
					fa = a9G.length;
				for (aC = 0; aC < fa; aC++)
					if (a9G[aC].id === id && nS <= ++ot) return a9G.splice(aC, 1)
			}(1, 5), ag.a9q(player) && a9S(180, L(56, [ah.a1p[player]]), 1, player, a9T(255, 200, 180), bE.pO, -1, !0), bD.gw.a6l(player, 10) && (a9m(573, 0), a9S(180, L(57, [ah.a1p[player]]), 573, player, bE.q9, bE.pO, -1, !0))) : 18 === id ?
			a9S(255, L(58), 18, 0, bE.pR, bE.pO, -1, !1) : 21 === id ? a9S(220, L(59), id, 0, bE.pR, bE.pO, -1, !1) : 22 === id ? this.a9o(2, player, player) : 59 === id && a9S(0, L(60), id, 0, bE.qT, bE.pO, 0, !1)
	}, this.a4e = function(s) {
		a9S(200, L(61, [s]), 94, 0, bE.pR, bE.q5, -1, !1)
	}, this.a3i = function(a9r) {
		if (aE.fK === a9r && !aE.lF && !aE.hj)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a9S(0, "Your Win Count is now " + __fx.wins.count, 3, a9r, bE.pR, bE.pO, -1, !0);
		ah.hO[a9r] && (aR.ej(a9r, 2), aE.kv < 100 ? a9S(0, L(55, [ah.a1p[a9r]]), 3, a9r, bE.pR, bE.pO, -1, !0) : a9S(0, L(62, [ah.a1p[a9r]]), 3, a9r, bE.pR, bE.pO, -1, !0))
	}, this.a8v = function(fE) {
		var s6, a9t, a9s = "(" + bP.fi(fE >> 2) + ", " + bP.fk(fE >> 2) + ")",
			a9X = !1,
			player = 0;
		ad.fV(fE) ? ad.fR(fE) ? a9s = L(63, [a9s]) : (player = ad.fS(fE), aE.hj && !1 === __fx.hoveringTooltip.active && (aE.fK = player), s6 = L(64, [bD.ox.a6P(ah.a42[player], bD.sP.uA(0, 10), 150)]) + "   ", s6 = (s6 += L(65, [bD.tN.a2b(ah.hc[
				player])]) + "   ") + L(66, [bD.tN.a2b(ah.hO[player])]) + "   ", aE.iU && (a9t = bj.a3f[bj.lI[bj.fY[player]]], s6 += L(67) + ": " + a9t + "   "), bD.gw.kI(player) && (s6 += L(68) + ": " + aF.l6[aF.iJ[player]] + "   "), a9s =
			s6 = (s6 += L(69, [player]) + "   ") + L(70, [a9s]), a9X = !0) : a9s = ad.ff(fE) ? L(71, [a9s]) + "   #" + ad.fI(fE) : L(72, [a9s]), a9m(55, 0), a9S(220, a9s, 55, player, bE.pR, bE.pO, -1, a9X, void 0, void 0, !0)
	}, this.a8x = function(a9u) {
		var lq = bQ.z,
			player = lq.mp[a9u] >> 3,
			s6 = (bi.ds = !0, a9m(55, 0), L(73, [ah.a1p[player]]) + "   ");
		a9S(220, s6 += L(65, [bD.tN.a2b(lq.a9v[a9u])]), 55, player, bE.pR, bE.pO, -1, !0)
	}, this.r7 = function(qr, a9w, r8) {
		qr === aE.fK ? a9S(175, " " + L(74, [ah.a1p[a9w]]) + ": ", 1001, a9w, a9T(200, 255, 210), bE.pO, -1, !0, r8) : this.a9x(qr, r8)
	}, this.a9x = function(qr, r8) {
		a9m(1e3, 0), a9S(175, ah.a1p[qr] + ": ", 1e3, qr, bE.pR, "rgba(5,60,25,0.9)", -1, !0, r8)
	}, this.a3h = function() {
		var s;
		aE.a3N ? (s = L(75), aR.a3g(L(76), 2, 1, 12), a9S(0, s, 40, 0, "rgb(10,220,10)", bE.pO, -1, !1)) : (s = L(77), aR.a3g(L(78), 2, 0, 16), a9S(0, s, 41, 0, bE.pR, bE.pO, -1, !1))
	}, this.a1c = function() {
		var h3 = ah.a1p,
			fd = aE.data;
		a9S(300, h3[0] + " [" + aE.a3c.a1i(fd.elo[0]) + "] vs " + h3[1] + " [" + aE.a3c.a1i(fd.elo[1]) + "]", 65, 0, bE.pI, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a9y = function(s) {
		a9S(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a9z = function(aA0) {
		a9S(0, L(aA0 ? 79 : 80), 247, 0, bE.qS, bE.pO, -1, !1)
	}, this.a1k = function(a1h, a1j, aA1) {
		var fd = aE.data,
			h3 = ah.a1p;
		a9S(0, h3[0] + ": " + aE.a3c.a1i(fd.elo[0]) + " -> " + a1h, 66, 0, bE.pR, aA1[0], -1, !1), a9S(0, h3[1] + ": " + aE.a3c.a1i(fd.elo[1]) + " -> " + a1j, 66, 1, bE.pR, aA1[1], -1, !1)
	}, this.rP = function(player, id) {
		0 === id ? a9n(50, player) ? (a9S(128, L(81, [ah.a1p[player]]), 52, player, a9T(180, 255, 180), bE.pO, -1, !0), ag.ry(player, 2, 255)) : a9S(384, L(82, [ah.a1p[player]]), 51, player, a9T(210, 210, 255), bE.pO, -1, !0) : a9n(51, player) ?
			(a9S(128, L(83, [ah.a1p[player]]), 52, player, bE.pR, "rgba(60,120,10,0.9)", -1, !0), ag.ry(player, 2, 255)) : (a9S(384, L(84, [ah.a1p[player]]), 50, player, bE.pR, "rgba(90,90,90,0.9)", -1, !0), ag.ry(player, 2, 96))
	}, this.rT = function(w4, target) {
		var color = a9T(210, 255, 210);
		1 < w4.length ? a9S(230, L(85, [w4.length, ah.a1p[target]]), 66, target, color, bE.pO, -1, !0) : a9S(230, L(86, [ah.a1p[w4[0]], ah.a1p[target]]), 66, w4[0], color, bE.pO, target, !0)
	}, this.aA2 = function(player, target) {
		a9S(230, L(87, [ah.a1p[player], ah.a1p[target]]), 66, player, bE.pR, "rgba(75,65,5,0.9)", target, !0)
	}, this.aA3 = function(id, h3) {
		a9m(id, h3)
	}, this.a3Q = function(id, player) {
		a9n(id, void 0 === player ? aE.fX : player)
	}, this.aA4 = function(id) {
		for (var aC = a9G.length - 1; 0 <= aC; aC--)
			if (a9G[aC].id === id) return a9G[aC];
		return null
	}, this.rK = function(a8L, aA5, player) {
		2 !== ah.a6g[aE.fK] && a9S(200, 1 === a8L ? L(88, [ah.a1p[player]]) : L(89, [bD.tN.a2b(a8L), ah.a1p[player]]), 30, player, "rgb(190,255,190)", bE.pO, -1, !0)
	}, this.aA7 = function(a8L, player) {
		2 !== ah.a6g[aE.fK] && (a9m(31, 0), a8L = " (" + bD.tN.a2b(a8L) + ") 💸", a9S(150, a8L = bD.gw.kI(player) ? L(90) + a8L : L(91, [ah.a1p[player]]) + a8L, 31, player, bE.pI, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a3P = function(by) {
		for (var ek = bi.ks(), aC = 2; 0 <= aC; aC--) 0 < a9K.xx[aC] && (by || a9K.ek[aC] < ek - 220) && this.aAE(aC)
	}, this.aAE = function(id) {
		var s6, fa = a9K.xx[id],
			player = a9K.w4[id];
		a9K.xx[id] = 0, 1 === fa ? (0 === id ? s6 = L(99, [ah.a1p[player], ah.a1p[a9K.a9P[0]]]) : 1 === id ? s6 = L(100, [ah.a1p[player]]) : 2 === id ? s6 = L(101, [ah.a1p[player]]) : 3 === id && (s6 = L(102, [ah.a1p[player]])), a9m(7, 0), a9S(
			a9K.np[id], s6, 7, a9K.a9P[id], bE.pR, bE.pO, -1, !0)) : (s6 = L(0 === id ? 103 : 1 === id ? 104 : 105, [fa]), a9m(7, 0), a9S(a9K.np[id], s6, 7, player, bE.pR, bE.pO, -1, !1))
	}, this.a9o = function(id, i2, lY) {
		var ek = bi.ks(),
			fa = a9K.xx[id] + 1;
		a9K.xx[id]++, a9K.w4[id] = i2, a9K.a9P[id] = lY, 1 === fa && (a9K.ek[id] = ek), (1 === fa && (aE.a3L < 32 || 2 === aE.a3I) || 1 < fa && (a9K.ek[id] < ek - 140 || 2 === aE.a3I)) && this.aAE(id)
	}, this.ef = function() {
		b3.ef();
		for (var kA = (kA = a9G.length - a9L) <= 1 ? 1 : kA * kA, aC = a9G.length - 1; 0 <= aC; aC--) 0 < a9G[aC].ea && (a9G[aC].ea -= kA, a9G[aC].ea <= 0) && (bi.ds = !0, a9G.splice(aC, 1));
		! function() {
			var h3, aC;
			if (128 !== a9M && !(++a9M < 128))
				for (h3 = 5, aC = am.lR - 1; 0 <= aC; aC--) 1 === ah.a6g[am.lW[aC]] && 0 < h3-- && a9S(240, L(102, [ah.a1p[am.lW[aC]]]), 1, am.lW[aC], bE.pI, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a3P(!1)
	}, this.xy = function() {
		for (var a0U, fj = a1S(), aC = a9G.length - 1; 0 <= aC; aC--) a0U = fj - (aC + 1) * k, 50 === a9G[aC].id ? (xz.drawImage(a9G[aC].canvas, i.j - a9G[aC].j - a9J - a9H, a0U), xz.drawImage(a9N, i.j - a9J - a9H, a0U)) : xz.drawImage(a9G[aC]
			.canvas, i.j - a9G[aC].j - a9H, a0U)
	}, this.aAG = function(id, iJ) {
		var a9s, aAH = bE.pb;
		0 === id ? a9s = L(106) : 1 === id ? (a9s = L(107), aAH = bE.qO) : 2 === id ? a9s = L(108) : 3 === id ? a9s = L(109) : (a9s = bD.tN.a2b(iJ), aAH = 5 === id ? bE.qO : bE.pO), a9m(74, 0), a9S(0, a9s, 74, 0, bE.pR, aAH, -1, !1, void 0,
			void 0, !0)
	}
}

function cJ() {
	var aAJ, aAK, y0 = "",
		a0F = 0,
		a0G = 0,
		aAI = -1,
		eE = ["Team", "BR", "1v1", "Zombie"],
		aAL = [
			[0, 15, 30, 45],
			[10, 40],
			[25],
			[55]
		],
		aAM = 10;

	function aAQ() {
		for (var aAR = aAS(), aAT = -1, aAO = 0, aC = 0; aC < aAL.length; aC++) {
			var fd = aAU(aC, aAR);
			0 <= fd && (aAT < 0 || fd < aAT) && (aAT = fd, aAO = aC)
		}
		if (!(aAT < 0)) return aAT !== aAI && (y0 = eE[aAO] + " " + aAK + ": " + aAV(aAT), aAI = aAT, a0F = aR.measureText(y0, aAJ), a0F += Math.floor(.4 * a0G), 1);
		y0 = ""
	}

	function aAS() {
		var eb = new Date;
		return 60 * eb.getUTCMinutes() + eb.getUTCSeconds()
	}

	function aAU(aAO, aAR) {
		for (var aAX = aAL[aAO], g2 = -1, ft = 0; ft < aAX.length; ft++) {
			var fd = (fd = 60 * aAX[ft] + aAM - aAR) <= 0 ? 3600 + fd : fd;
			(g2 < 0 || fd < g2) && (g2 = fd)
		}
		return g2
	}

	function aAV(aAY) {
		return aAZ(Math.floor(aAY / 60)) + ":" + aAZ(aAY % 60)
	}

	function aAZ(aAa) {
		return aAa < 10 ? "0" + aAa : String(aAa)
	}
	this.aAN = function(aAO, aAP) {
		return 0 <= aAL[aAO].indexOf(aAP)
	}, this.dk = function() {
		aAK = L(110)
	}, this.resize = function() {
		a0F = Math.floor((a1.a2.il() ? .53 : .36) * i.im), a0G = Math.floor(.065 * a0F), aAJ = bD.sP.uA(1, Math.floor(.9 * a0G)), aAI += 1e3, aAQ()
	}, this.ef = function() {
		aAQ() && (bi.ds = !0)
	}, this.aAW = function() {
		for (var aAR = aAS(), s6 = "", aC = 0; aC < aAL.length; aC++) {
			var fd = aAU(aC, aAR);
			0 <= fd && (s6 += (s6 ? "   " : "") + eE[aC] + ": " + aAV(fd))
		}
		return s6
	}, this.xy = function(fj) {
		y0 && (xz.lineWidth = 1 + Math.floor(a0G / 15), xz.translate(i.j - a0G, fj + a0F), xz.rotate(-Math.PI / 2), xz.fillStyle = bE.pR, xz.fillRect(0, 0, a0F, a0G), xz.strokeStyle = bE.pI, xz.strokeRect(0, 0, a0F, a0G + 10), xz.fillStyle = bE
			.pI, xz.font = aAJ, bD.sP.textBaseline(xz, 1), bD.sP.textAlign(xz, 1), xz.fillText(y0, Math.floor(a0F / 2), Math.floor(.59 * a0G)), xz.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cK() {
	var a8K, aAb, aAc, a0G, aAd, aAe = 0,
		aAf = 0;

	function aAh(aC) {
		var aAj = !0,
			wp = bE.pR,
			j = (1 === a8K[aC].id ? a8K[aC].ox.fillStyle = bE.qM : a8K[aC].k4 === aE.fX ? a8K[aC].ox.fillStyle = bE.pc : (ad.aAk(a8K[aC].k4), a8K[aC].ox.fillStyle = bD.color.pL(bR.g9[0], bR.g9[1], bR.g9[2], .87), 400 < bD.sX.a5p(bR.g9, 0, 2) && (
				aAj = !1, wp = bE.pI)), a8K[aC].canvas.width),
			uh = (a8K[aC].ox.clearRect(0, 0, j, a0G), a8K[aC].ox.fillRect(0, 0, j, a0G), a8K[aC].ox.fillStyle = wp, ! function(ox, j, a0G) {
				ox.fillRect(0, 0, j, 1), ox.fillRect(0, a0G - 1, j, 1), ox.fillRect(0, 0, 1, a0G), ox.fillRect(j - 1, 0, 1, a0G)
			}(a8K[aC].ox, j, a0G), aAb + 2 * a0G < j && (a8K[aC].ox.fillRect(j - aAb - a0G, 0, 1, a0G), a8K[aC].ox.fillText(ah.a1p[a8K[aC].k4], Math.floor((j - aAb) / 2), Math.floor(.57 * a0G))), 0 !== a8K[aC].id ? 0 : a0G);
		a8K[aC].ox.fillText(bD.tN.a2b(a8K[aC].iJ), Math.floor(j - aAb / 2 - uh), Math.floor(.57 * a0G)),
			function(aC, j, uh, aAj) {
				a8K[aC].ox.fillStyle = aAj ? bE.pT : bE.pP;
				aAj = Math.floor(aAb * a8K[aC].iJ / a8K[aC].aAq);
				a8K[aC].ox.fillRect(Math.floor(j - aAb - uh), a0G - aAd, aAj, aAd)
			}(aC, j, uh, aAj), 0 === a8K[aC].id ? (aAn(aC, j, aAj, wp), function(aC, j, aAj) {
				a8K[aC].ox.strokeStyle = aAj ? bE.pj : bE.pt, a8K[aC].ox.fillRect(a0G, 0, 1, a0G);
				aAj = j - a0G;
				a8K[aC].ox.beginPath(), a8K[aC].ox.moveTo(Math.floor(.3 * a0G + aAj), Math.floor(a0G / 2)), a8K[aC].ox.lineTo(Math.floor(a0G - .3 * a0G + 0 + aAj), Math.floor(a0G / 2)), a8K[aC].ox.stroke(), a8K[aC].ox.beginPath(), a8K[aC].ox
					.moveTo(Math.floor(a0G / 2 + aAj), Math.floor(.3 * a0G)), a8K[aC].ox.lineTo(Math.floor(a0G / 2 + aAj), Math.floor(a0G - .3 * a0G + 0)), a8K[aC].ox.stroke()
			}(aC, j, aAj)) : aAn(aC, 2 * a0G, aAj, wp)
	}

	function aAn(aC, j, aAj, wp) {
		a8K[aC].ox.strokeStyle = a8K[aC].aAr ? bE.pa : aAj ? bE.q1 : bE.q2, a8K[aC].ox.fillStyle = wp, a8K[aC].ox.fillRect(j - a0G, 0, 1, a0G), a8K[aC].ox.lineWidth = Math.max(Math.floor(a0G / 12), 3), a8K[aC].ox.lineCap = "round";
		aAj = .35;
		j = a0G + 1, a8K[aC].ox.beginPath(), a8K[aC].ox.moveTo(Math.floor(j - aAj * a0G + 0), Math.floor(aAj * a0G)), a8K[aC].ox.lineTo(Math.floor(j - a0G + aAj * a0G), Math.floor(a0G - aAj * a0G + 0)), a8K[aC].ox.stroke(), a8K[aC].ox.beginPath(),
			a8K[aC].ox.moveTo(Math.floor(j - a0G + aAj * a0G), Math.floor(aAj * a0G)), a8K[aC].ox.lineTo(Math.floor(j - aAj * a0G + 0), Math.floor(a0G - aAj * a0G + 0)), a8K[aC].ox.stroke()
	}

	function aB3(h, aB1) {
		for (var iJ, aC = aB1 - 1; 0 <= aC; aC--) iJ = ae.gn(aE.fK, aC), h[aC].iJ !== iJ && (h[aC].iJ = iJ, h[aC].aAq = Math.max(iJ, h[aC].aAq), h[aC].aAi = !0)
	}

	function aB7(h, aB5) {
		for (var uu = aE.fK << 3, a9v = bQ.z.a9v, mm = bQ.z.mm, aB9 = bQ.z.aB9, aC = aB5 - 1; 0 <= aC; aC--) {
			var aBA = aB9[uu + aC],
				iJ = a9v[aBA];
			h[aC].iJ !== iJ ? (h[aC].iJ = iJ, h[aC].aAq = Math.max(iJ, h[aC].aAq), h[aC].aAi = !0) : h[aC].aAr || mm[aBA] % 64 != 5 || (h[aC].aAr = !0, h[aC].aAi = !0)
		}
	}

	function aAg(a8N) {
		a8N.canvas = document.createElement("canvas"), bV.zp.font = aAc;
		var j = aAb;
		a8N.k4 < aE.fX && 0 === a8N.id && (j += Math.floor(bV.zp.measureText(ah.a1p[a8N.k4] + "000").width)), j += a0G, 0 === a8N.id && (j += a0G), a8N.canvas.width = j, a8N.canvas.height = a0G, a8N.ox = a8N.canvas.getContext("2d", {
			alpha: !0
		}), a8N.ox.font = aAc, bD.sP.textBaseline(a8N.ox, 1), bD.sP.textAlign(a8N.ox, 1)
	}

	function aAx(aC) {
		return aV.aBB() ? i.j - a8K[aC].canvas.width - bf.gap : aV.fh
	}

	function aAy(aC) {
		return Math.floor(2 * bf.gap + (aV.aBB() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * a0G))
	}
	this.dk = function() {
		aAe = aAf = 0, a8K = [], this.resize()
	}, this.resize = function() {
		aAc = aO.a92, a0G = aO.fontSize + 5, a0G = Math.floor(1.25 * a0G), a1.a2.il() && (a0G = Math.floor(1.25 * a0G)), aAd = Math.floor(.15 * a0G), bV.zp.font = aAc, aAb = Math.floor(bV.zp.measureText("02 000 000 0000").width);
		for (var aC = a8K.length - 1; 0 <= aC; aC--) aAg(a8K[aC]), aAh(aC)
	}, this.nJ = function() {
		for (var aC = a8K.length - 1; 0 <= aC; aC--) a8K[aC].aAi && (a8K[aC].aAi = !1, aAh(aC))
	}, this.hn = function(mA, mB) {
		if (2 !== aE.a3I && 0 !== ah.nX[aE.fK] && !aE.hj && !bD.gw.kI(aE.fK))
			for (var aAs, aAt, aAu, aAv = a1.a2.il() ? a0G : 0, aAw = a1.a2.il() ? Math.floor(.15 * a0G) : 0, aC = a8K.length - 1; 0 <= aC; aC--)
				if (aAs = aAx(aC), aAt = aAy(aC), aAu = a8K[aC].canvas.width, aAt - aAw <= mB && mB <= aAt + a0G + aAw) {
					if (aAs - aAv <= mA && mA <= aAs + a0G + aAv) return a8K[aC].aAr || (a8K[aC].aAi = !0, a8K[aC].aAr = !0, 0 === a8K[aC].id ? bB.i0.r5(a8K[aC].k4) : bB.i0.r4(a8K[aC].k4)), !0;
					if (0 === a8K[aC].id && aAs + aAu - a0G - aAv <= mA && mA <= aAs + aAu + aAv) return bY.a8l(3), bB.i0.i7(aS.i4(), a8K[aC].k4), !0
				} return !1
	}, this.ef = function() {
		var a5x, a5y, h, aB1;
		0 === ah.nX[aE.fK] || bD.gw.kI(aE.fK) && !aE.hj || (a5x = a8K.slice(0, aAe), a5y = a8K.slice(aAe, aAe + aAf), h = a5x, aB1 = ae.gh(aE.fK), function(h, aB1) {
			if (aAe !== aB1) return 1;
			for (var aC = aB1 - 1; 0 <= aC; aC--)
				if (h[aC].k4 !== ae.gm(aE.fK, aC)) return 1;
			return
		}(h, aB1) ? aB3(h = function(h, aB1) {
			var aC, k4, fu, iJ, a9U = [];
			loop: for (aC = 0; aC < aB1; aC++) {
				for (k4 = ae.gm(aE.fK, aC), fu = 0; fu < h.length; fu++)
					if (h[fu].k4 === k4) {
						a9U.push(h.splice(fu, 1)[0]);
						continue loop
					} iJ = ae.gn(aE.fK, aC), aAg(iJ = {
					k4: k4,
					iJ: iJ,
					aAq: iJ,
					id: 0,
					aAi: !0,
					aAr: !1,
					canvas: null,
					ox: null
				}), a9U.push(iJ)
			}
			return a9U
		}(h, aB1), aB1) : aB3(h, aB1), a5x = h, a5y = function(h) {
			var aB5 = bQ.z.kz[aE.fK];
			return function(h, aB5) {
				if (aAf !== aB5) return 1;
				for (var uu = aE.fK << 3, mo = bQ.z.mo, aB9 = bQ.z.aB9, aC = aB5 - 1; 0 <= aC; aC--) {
					var aBA = aB9[uu + aC];
					if (h[aC].k4 !== mo[aBA]) return 1
				}
				return
			}(h, aB5) ? aB7(h = function(h, aB5) {
				var aC, k4, fu, a9U = [],
					uu = aE.fK << 3,
					mo = bQ.z.mo,
					a9v = bQ.z.a9v,
					aB9 = bQ.z.aB9;
				loop: for (aC = 0; aC < aB5; aC++) {
					var aBA = aB9[uu + aC];
					for (k4 = mo[aBA], fu = 0; fu < h.length; fu++)
						if (h[fu].k4 === k4) {
							a9U.push(h.splice(fu, 1)[0]);
							continue loop
						} aBA = a9v[aBA], aAg(aBA = {
						k4: k4,
						iJ: aBA,
						aAq: aBA,
						id: 1,
						aAi: !0,
						aAr: !1,
						canvas: null,
						ox: null
					}), a9U.push(aBA)
				}
				return a9U
			}(h, aB5), aB5) : aB7(h, aB5), h
		}(a5y), aAe = a5x.length, aAf = a5y.length, a8K = a5x.concat(a5y))
	}, this.xy = function() {
		if (0 !== ah.nX[aE.fK] && (!bD.gw.kI(aE.fK) || aE.hj))
			for (var aC = a8K.length - 1; 0 <= aC; aC--) xz.drawImage(a8K[aC].canvas, aAx(aC), aAy(aC))
	}
}

function cL() {
	var a9G, l0, aBC, aBD, k, a92, fontSize, aBE, aBF, aBG, aBH, canvas, ox, nk, aBI;

	function yE(aC) {
		return L(0 === aC ? 111 : 1 === aC ? 112 : 2 === aC ? 113 : 114)
	}

	function aBP() {
		aE.iU ? aBQ + 4 * bf.gap + k + bk.aBR() > aS.fj ? xz.drawImage(canvas, 2 * bf.gap + bk.aBR(), aBQ + 2 * bf.gap) : xz.drawImage(canvas, bf.gap, aBQ + 3 * bf.gap + bk.aBR()) : xz.drawImage(canvas, bf.gap, aBQ + 2 * bf.gap)
	}

	function aBJ() {
		canvas.width = a9G[0].width + aBG, canvas.height = k + aBG, (ox = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a9G[0].width + aBG, k + aBG), ox.translate(Math.floor(aBG / 2), Math.floor(aBG / 2)), ox.lineWidth = aBG, ox.fillStyle = 1 === a9G[0].aBO ? bE.pW : bE.pO, aBS(), ox.fill(), ox.strokeStyle = 1 === a9G[0].aBO ? bE.pI :
			bE.pR, aBS(), ox.stroke(), bD.sP.textAlign(ox, 1), bD.sP.textBaseline(ox, 1), ox.fillStyle = 1 === a9G[0].aBO ? bE.pI : bE.pR, ox.font = a92[0], ox.fillText(yE(a9G[0].aBN), Math.floor(a9G[0].width / 2), Math.floor(.72 * aBE[0] * k)), ox
			.font = a92[1], ox.fillText(a9G[0].s6, Math.floor(a9G[0].width / 2), Math.floor((aBE[0] + .48 * aBE[1]) * k))
	}

	function aBS() {
		if (__fx.settings.smoothUI && ox.roundRect) return ox.beginPath(), ox.roundRect(0, 0, a9G[0].width, k, .15 * k);
		ox.beginPath(), ox.moveTo(aBH, 0), ox.lineTo(a9G[0].width - aBH, 0), ox.lineTo(a9G[0].width, aBH), ox.lineTo(a9G[0].width, k - aBH), ox.lineTo(a9G[0].width - aBH, k), ox.lineTo(aBH, k), ox.lineTo(0, k - aBH), ox.lineTo(0, aBH), ox.closePath()
	}
	this.dk = function() {
		l0 = 4, aBC = aBD = nk = 0, a9G = [], a92 = new Array(2), fontSize = new Array(2), (aBE = new Array(2))[0] = .3, aBE[1] = .7, aBF = new Array(4), canvas = document.createElement("canvas"), aBI = bi.ea + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.il() ? .062 : .047) * i.im), fontSize[0] = Math.floor(.85 * aBE[0] * k), fontSize[1] = Math.floor(.85 * aBE[1] * k), a92[0] = bD.sP.uA(1, fontSize[0]), a92[1] = bD.sP.uA(1, fontSize[1]), aC = aBF.length -
			1; 0 <= aC; aC--) aBF[aC] = this.measureText(yE(aC) + "000", a92[0]);
		if (aBG = Math.floor(1 + .05 * k), aBH = Math.floor(.2 * k), 0 < a9G.length) {
			for (aC = a9G.length - 1; 0 <= aC; aC--) j = this.measureText(a9G[aC].s6 + "00", a92[1]), a9G[aC].width = j < aBF[aC] ? aBF[aC] : j;
			aBJ()
		}
	}, this.ef = function() {
		0 !== l0 && (4 === l0 ? bi.ea > aBI && (l0 = 0, 1 === aE.a3I) && aR.a3g(bV.wJ.zk[bV.fG].name, 3, 1, 9) : (1 === l0 ? (0 === aBC && (aBJ(), aBC = 1e-4), 1 <= (aBC += .002 * (bi.ea - nk)) && (aBD = 0, l0 = 2, aBC = 1), bi.ds = !0) : 2 ===
			l0 ? ((aBD += (bi.ea - nk) / 1e3) > a9G[0].np || 1 < aBD && 1 < a9G.length) && (l0 = 3) : 3 === l0 && ((aBC -= .002 * (bi.ea - nk)) <= 0 && (aBC = 0, a9G.shift(), l0 = 0 < a9G.length ? 1 : 0), bi.ds = !0), nk = bi.ea))
	}, this.measureText = function(s6, a92) {
		return xz.font = a92, Math.floor(xz.measureText(s6).width)
	}, this.ej = function(aBM, aC) {
		this.a3g(ah.a1p[aBM], aC, 1, 0 === aC ? 3 : 7)
	}, this.a3g = function(s6, aBN, aBO, np) {
		var j;
		s6.length && (j = (j = this.measureText(s6 + "00", a92[1])) < aBF[aBN] ? aBF[aBN] : j, a9G.push({
			s6: s6,
			width: j,
			aBN: aBN,
			aBO: aBO,
			np: np
		}), 0 === l0) && (aBC = 0, l0 = 1, nk = bi.ea)
	}, this.xy = function() {
		0 !== l0 && 0 !== aBC && (aBC < 1 ? (xz.globalAlpha = aBC, aBP(), xz.globalAlpha = 1) : aBP())
	}
}

function cu() {
	var k, canvas, ox, aBT, aBU, aBV, aBW, aAi, aBX, aBY, aBZ, aBa, aA0 = !1,
		a6B = (this.iM = !1, this.j = 0, new Array(2)),
		aBb = 0;

	function nK() {
		var j = ax.j,
			lq = (aAi = !1, a1V(ox, j, k), Math.floor(j / 2));
		1 === aBT ? (ox.fillStyle = bE.pl, ox.fillRect(lq, 0, lq, k)) : -1 === aBT && (ox.fillStyle = bE.q3, ox.fillRect(0, 0, lq, k)), a1W(ox, j, k, 2);
		var lq = (lq = Math.floor(.25 * k)) < 2 ? 2 : lq,
			aAA = (ox.fillStyle = bE.pX, Math.floor((k - 4) * aBU[1] / aBV[1]));
		0 < aAA && ox.fillRect(2, k - 2 - aAA, lq, aAA), 0 < (aAA = Math.floor((k - 4) * aBU[0] / aBV[0])) && ox.fillRect(j - 2 - lq, k - 2 - aAA, lq, aAA);
		lq = (lq = Math.floor(k / 8)) < 2 ? 2 : lq, a1Y(ox, Math.floor(.4 * k), 0, k, lq, .5, !1), a1Y(ox, Math.floor(j - 1.4 * k), 0, k, lq, .5, !0), aAA = 1.1 * k / a6B[0].width;
		ox.imageSmoothingEnabled = !0, ox.setTransform(aAA, 0, 0, aAA, (j - aAA * a6B[0].width) / 2, -.05 * k), ox.drawImage(a6B[+aA0], 0, 0), ox.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aBg() {
		aBa = -1, aA0 = ai.aBh(), aO.a7g(257), aO.a9z(aA0), ax.iM = !0, aAi = !0, aBX = 360;
		for (var g2, eb = 0, aC = am.lR - 1; 0 <= aC; aC--) bD.gw.kI(am.lW[aC]) || (eb += ah.hO[am.lW[aC]]);
		aA0 ? aBV[0] = Math.max(bO.g1(3 * eb, 4), 1) : aE.iU ? (g2 = 9 === aE.lD ? 8 === bj.lI[bk.lU()] ? 80 : (g2 = bO.g1(100 * bk.lS(), aE.kf), bO.g1(bO.ik(1550 - 11 * g2, 400, 1e3), 10)) : (g2 = bO.g1(100 * bk.lS(), aE.kf), bO.g1(bO.ik(1600 - 12 *
			g2, 400, 1e3), 10)), g2 = bO.g1(g2 * eb, 100), aBV[0] = Math.max(g2, 1)) : 8 === aE.lD ? aBV[0] = Math.max(bO.g1(3 * eb, 4), 1) : aBV[0] = Math.max(bO.g1(3 * eb, 5), 1), aBV[1] = Math.max(eb - aBV[0], 1)
	}

	function aBc() {
		aBZ = bi.ks(), aAi = !0, aBX = aBT = 0, aBW = [], ax.iM = !1, aO.a3Q(247), aBU[0] = aBU[1] = 0, aO.a7g(673)
	}

	function a1S() {
		return aS.a9f(aO.a9b()) ? __fx.settings.keybindButtons ? aS.fj - 2 * (k + bf.gap) : aS.fj - k - bf.gap : bF.a9f(aO.a9e()) ? bF.a1S() - k - bf.gap : i.k - k - bn.a8R() * bf.gap
	}
	this.dl = function() {
		for (var aC = 0; aC < 2; aC++) a6B[aC] = bD.canvas.a26(ac.get(3), 8 - aC, bE.qg), a6B[aC] = bD.canvas.a6D(a6B[aC])
	}, this.dk = function() {
		aBZ = -1e4, aBY = aBb = 0, aBa = -1, this.iM = !1, aAi = aA0 = !1, aBU = [aBT = aBX = 0, 0], aBV = [1, 1], aBW = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, ox = canvas.getContext("2d", {
			alpha: !0
		}), nK()
	}, this.nJ = function() {
		aAi && nK()
	}, this.hn = function(fh, fj) {
		return !!this.iM && !(fh < i.j - this.j - bf.gap || fj < a1S() || (aE.hj || this.iN(aE.fK) && (aN.hk && aN.a5T(), bB.i0.iO(fh > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.ef = function() {
		0 < aBY ? 0 === --aBY && aBc() : this.iM ? 180 == --aBX && 3 * aBU[0] < aBV[0] ? aBc() : aBU[0] >= aBV[0] ? aA0 ? bU.a2w.a3D() : bU.a2w.a3H() : aBU[1] >= aBV[1] ? aBY = 4 : aBX <= 0 && aBc() : ! function() {
			var aBj = bi.ks();
			if (aBj % 40 == 14) {
				if (aBb) return !(aBj < aBb) && !(aBj < aBZ + 535) && (aBb = aBj + 1071, bD.gw.a6j()) ? (aBg(), 1) : 0;
				(1 === am.lR || (aE.iU ? bk.lS() : ah.hO[mW[0]]) >= bO.g1(96 * aE.kf, 100)) && (aBb = aBj + 535)
			}
			return
		}() && 0 <= aBa && (aO.a1o(250, L(115, [ah.a1p[aBa]]), 673, aBa, bE.pR, bE.pO, -1, !0), aBg())
	}, this.a3J = function() {
		this.iM && aBU[0] < aBV[0] && aBc()
	}, this.rz = function(player, aBk) {
		var aBl = L(aBk ? 116 : 117, [ah.a1p[player]]),
			aBl = (aO.a1o(450, aBl, 257, player, aBk ? bE.pj : bE.q0, bE.pO, -1, !0), aBW.push(player), aAi = !0, aE.lF ? Math.max(aBV[0], aBV[1]) : ah.hO[player]),
			aBl = Math.max(aBl, 1);
		aBk ? aBU[0] += aBl : aBU[1] += aBl, player === aE.fK && (aBT = aBk ? 1 : -1)
	}, this.xy = function() {
		var fj;
		this.iM && (fj = a1S(), xz.drawImage(canvas, i.j - this.j - bf.gap, fj))
	}, this.iP = function(player) {
		if (0 !== aBX) return !1;
		if (!bD.gw.hl(1)) return !1;
		if (!bD.gw.hm(player)) return !1;
		if (10 <= kg[player] && !bD.gw.a73(player, 9)) return !1;
		if (!(aE.lF || m.dy && m.e2)) {
			player = bi.ks();
			if (player < aBZ + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iN = function(h8) {
		if (!bD.gw.hl(1)) return !1;
		if (!bD.gw.hm(h8)) return !1;
		if (!this.iM) return !1;
		for (var aC = aBW.length - 1; 0 <= aC; aC--)
			if (aBW[aC] === h8) return !1;
		return !0
	}, this.iL = function(player) {
		aBa = player
	}
}

function cM() {
	var j, fh, aBn, canvas, ox, iM, jD, a7X, a92, aAi, aBo = 11 / 12;

	function aBq() {
		var aAp = Math.floor(jD * (j - 2 * aBn)),
			aBt = 1 + Math.floor(.0625 * aS.k),
			aBu = 1 + Math.floor(.3 * aS.k),
			aBv = Math.floor(.55 * aS.k),
			rounded = (ox.clearRect(0, 0, j, aS.k), ox.fillStyle = bE.pN, ox.fillRect(0, 0, aBn, aS.k), ox.fillRect(aBn + aAp, 0, j - aBn - aAp, aS.k), ox.fillStyle = jD < 1 / 3 ? "rgba(" + Math.floor(3 * jD * 130) + ",130,0,0.85)" : jD < 2 / 3 ?
				"rgba(130," + (130 - Math.floor(3 * (jD - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (jD - 2 / 3) * 130) + ",0.85)", ox.fillRect(aBn, 0, aAp, aS.k), ox.fillStyle = bE.pR, ox.fillStyle = __fx.utils.lineColor(bE.pR),
				__fx.utils.smoothFrame(ox, j, aS.k));
		rounded || (ox.fillRect(0, 0, j, 1), ox.fillRect(0, aS.k - 1, j, 1), ox.fillRect(0, 0, 1, aS.k)), ox.fillRect(aBn, 0, 1, aS.k), ox.fillRect(aBn + aAp, 0, 1, aS.k), ox.fillRect(j - aBn, 0, 1, aS.k), rounded || ox.fillRect(j - 1, 0, 1, aS.k),
			ox.fillStyle = bE.pR, ox.fillRect(Math.floor(.25 * aS.k) + aBu, Math.floor((aS.k - aBt) / 2), aS.k - 2 * aBu, aBt), ox.fillRect(Math.floor(j - 1.25 * aS.k) + aBu, Math.floor((aS.k - aBt) / 2), aS.k - 2 * aBu - aBu % 2, aBt), ox.fillRect(
				Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - aBt) / 2), aBu, aBt, aS.k - 2 * aBu - aBu % 2), a7X = bD.gw.jC(aE.fK, aS.i4()), ox.fillText(bD.tN.a2b(a7X) + " (" + bD.tN.a7Q(100 * jD, +(jD < .1)) + ")", Math.floor(.5 * j), aBv)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		jD = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a5P(arg1);

	function aC0(a5k) {
		return !(1 < a5k && 1 === jD || (1 < a5k && a5k * jD - jD < 1 / 1024 ? a5k = (jD + 1 / 1024) / jD : a5k < 1 && jD - a5k * jD < 1 / 1024 && (a5k = (jD - 1 / 1024) / jD), jD = bO.ik(jD * a5k, 1 / 1024, 1), aBq(), 0))
	}

	function aC1(mA) {
		return jD !== (jD = bO.ik((mA - fh - aBn) / (j - 2 * aBn), 1 / 1024, 1)) && (aBq(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aBq(), bi.ds = !0
	}, this.fj = 0, this.ho = !1, this.dk = function() {
		iM = !aE.hy && !aE.hj, aAi = !1, jD = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.buffer.data[182].value + 1) / 1024, a7X = 0, this.ho = !1, this.resize()
	}, this.resize = function() {
		a1.a2.il() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.im), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.il() ? .65 : .389) * i.im), j += 12 - j % 12, this.k = Math.floor(j / 12)), aBn = Math.floor(3 * this.k / 2), a92 =
			bD.sP.uA(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, xz), canvas.height = this.k, (ox = canvas.getContext("2d", {
				alpha: !0
			})).font = a92, bD.sP.textBaseline(ox, 1), bD.sP.textAlign(ox, 1), this.aBp(), aBq()
	}, this.aBp = function() {
		fh = a1.a2.il() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.fj = i.k - this.k - bn.a8R() * bf.gap
	}, this.nJ = function() {
		aAi && (aAi = !1, aBq())
	}, this.iM = function() {
		return !(!iM || aN.hk && fh < Math.floor(bf.gap + 5.5 * this.k))
	}, this.a9f = function(aBw) {
		return !!this.iM() && fh + j > i.j - aBw - bf.gap
	}, this.a7e = function() {
		iM = !aE.hj
	}, this.aBc = function() {
		iM = !1
	}, this.i4 = function() {
		return bO.ik(Math.floor(1024 * jD + .5) - 1, 0, 1023)
	}, this.a5M = function(mA, mB) {
		return this.iM() && fh < mA && mA < fh + j && mB > this.fj
	}, this.hn = function(mA, mB) {
		if (!this.iM()) return !1;
		if (!(__fx.settings.keybindButtons && mB > this.fj - Math.floor(bf.gap / 4) - this.k && mB < this.fj - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(mA - fh))) {
			if (!aS.a5M(mA, mB)) return !1;
			aT.o3 = !1, ! function(tv, mA, mB) {
				if (function(mA, mB) {
						return fh < mA && mA < fh + aBn && mB > aS.fj
					}(mA, mB)) return aC0(aBo);
				if (function(mA, mB) {
						return fh + j - aBn < mA && mA < fh + j && mB > aS.fj
					}(mA, mB)) return aC0(1 / aBo);
				return tv.ho = !0, aC1(mA)
			}(this, mA, mB) || (bi.ds = !0)
		}
		return !0
	}, this.a5P = function(oA) {
		0 !== aE.a3I && this.iM() && aC0(oA) && (bi.ds = !0)
	}, this.a4v = function(deltaY) {
		var oA;
		return !(0 === deltaY || !this.iM()) && aC0(oA = 0 < deltaY ? (oA = 400 / (400 + deltaY)) < aBo ? aBo : oA : 1 / aBo < (oA = (400 - deltaY) / 400) ? 1 / aBo : oA)
	}, this.a4s = function(mA) {
		return !!this.ho && aC1(mA)
	}, this.a5I = function() {
		this.ho = !1
	}, this.ef = function() {
		this.iM() && a7X !== bD.gw.jC(aE.fK, this.i4()) && (aAi = !0)
	}, this.xy = function() {
		this.iM() && (xz.drawImage(canvas, fh, this.fj), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(xz, fh, this.fj)
	}
}

function d6() {
	var canvas, ox, aC2, font, aC3 = 0,
		aC4 = !1,
		aC5 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aC6 = 5;

	function aCD() {
		if (aC4) {
			var aC, fa = aC5.length,
				aBv = Math.floor(.5 * aC2.k),
				k = fa * aBv,
				fh = Math.floor(Math.floor(aC2.fh) + .3 * aC2.j - .5),
				fj = Math.floor(Math.floor(aC2.fj) - k),
				j = Math.floor(.4 * aC2.j + 2.5);
			for (xz.fillStyle = bE.pN, xz.fillRect(fh, fj, j, k), xz.fillStyle = bE.pq, xz.fillRect(fh, fj + aC6 * aBv, j, aBv), xz.fillStyle = bE.pR, xz.fillRect(fh, fj, 2, k), xz.fillRect(fh, fj, j, 2), xz.fillRect(fh + j - 2, fj, 2, k), aC =
				1; aC < fa; aC++) xz.fillRect(fh, fj + aC * aBv, j, 2);
			for (xz.fillStyle = bE.pR, bD.sP.textAlign(xz, 1), bD.sP.textBaseline(xz, 1), xz.font = bD.sP.uA(0, .6 * aBv), fh += .5 * j, aC = 0; aC < fa; aC++) xz.fillText(aCL(aC), fh, fj + (aC + .6) * aBv)
		}
		xz.drawImage(canvas, Math.floor(aC2.fh), Math.floor(aC2.fj))
	}

	function nK(tv) {
		var fh, ny, nz, aBv;
		ox.clearRect(0, 0, Math.floor(aC2.j), Math.floor(aC2.k)), ox.fillStyle = bE.pN, ox.fillRect(0, 0, Math.floor(aC2.j), Math.floor(aC2.k)), aE.o1 && (ox.fillStyle = bE.pq, ox.fillRect(0, 0, Math.floor(.3 * aC2.j), Math.floor(aC2.k))), ox
			.fillStyle = bE.pR, ox.fillText("Hide UI", .15 * aC2.j, .5 * aC2.k), ox.fillRect(Math.floor(.3 * aC2.j - .5), 0, 2, Math.floor(aC2.k)), fh = .5 * aC2.j, ox.fillText("Replay Speed", fh, .31 * aC2.k), ox.fillText(aCL(aC6), fh, .69 * aC2.k),
			ox.fillRect(Math.floor(.7 * aC2.j - .5), 0, 2, Math.floor(aC2.k)), tv.a8B ? (fh = Math.floor(.02 * aC2.j), tv = Math.floor(.025 * aC2.j), ny = Math.floor(.85 * aC2.j - fh - .5 * tv), nz = Math.floor(.25 * aC2.k), aBv = Math.floor(aC2.k) -
				2 * nz, ox.fillRect(ny, nz, fh, aBv), ox.fillRect(ny + fh + tv, nz, fh, aBv)) : function() {
				var j = Math.floor(.46 * aC2.k),
					k = Math.floor(.23 * aC2.k),
					fh = Math.floor(.85 * aC2.j - .5 * j + j / 12),
					fj = Math.floor(.5 * aC2.k - k);
				ox.beginPath(), ox.moveTo(fh, fj), ox.lineTo(fh + j, fj + k), ox.lineTo(fh, fj + (k << 1)), ox.fill()
			}(), ox.fillRect(0, 0, Math.floor(aC2.j), 2), ox.fillRect(0, 0, 2, Math.floor(aC2.k)), ox.fillRect(0, Math.floor(aC2.k) - 2, Math.floor(aC2.j), 2), ox.fillRect(Math.floor(aC2.j - 2), 0, 2, Math.floor(aC2.k))
	}

	function aCL(aC) {
		return 5 === aC ? "Normal" : "" + aC5[aC]
	}
	this.a8B = !1, this.dk = function() {
		aE.hj && (aC6 = 5, this.a8B = !1, aC4 = !1, aC2 = new sz([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aC7 = function() {
		return aC5[aC6]
	}, this.a1S = function() {
		return aC2.fj
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a8B,
		fxGetSpeedIndex: () => aC6,
		fxSetSpeedIndex: index => {
			aC6 = index, this.resize()
		},
		fxGetPanelTop: () => aC2 && aC2.fj
	}, this.a9f = function(aBw) {
		return !!aE.hj && aC2.fh + aC2.j > i.j - aBw - bf.gap
	}, this.resize = function() {
		aE.hj && (aC2.resize(), aC2.fj -= (bn.a8R() - 1) * bf.gap, font = bD.sP.uA(0, .3 * aC2.k), (canvas = document.createElement("canvas")).width = Math.floor(aC2.j), canvas.height = Math.floor(aC2.k), (ox = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.sP.textAlign(ox, 1), bD.sP.textBaseline(ox, 1), nK(this))
	}, this.a5S = function(aC8) {
		0 === aE.a3I || u.iM() || aC8 !== aE.o1 && (aE.o1 = aC8, bk.resize(), bi.ds = !0, aE.hj) && (aC3 = bi.ea + 2e3, nK(this))
	}, this.hn = function(fh, fj) {
		if (!aE.hj) return !1;
		if (fh < aC2.fh || fj < aC2.fj || fh > aC2.fh + aC2.j) return aC4 && function(tv, fh, fj) {
			var fa = aC5.length,
				aBv = Math.floor(.5 * aC2.k),
				k = fa * aBv,
				ny = Math.floor(Math.floor(aC2.fh) + .3 * aC2.j - .5),
				k = Math.floor(Math.floor(aC2.fj) - k),
				j = Math.floor(.4 * aC2.j + 2.5);
			return aC4 = !1, bi.ds = !0, fh < ny || ny + j < fh || fj < k || (aC6 = aCC(0, Math.floor((fj - k) / aBv), fa - 1), nK(tv)), !0
		}(this, fh, fj);
		if ((fh -= aC2.fh) < .3 * aC2.j) aC4 = !1, this.a5S(!aE.o1);
		else {
			if (fh < .7 * aC2.j) return aC4 = !aC4, bi.ds = !0;
			this.a5U(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a5U(!0), this.a5U = function(aCA) {
		2 === aE.a3I ? (this.a5S(!1), u.v(3)) : (aC4 = !1, this.a8B = !this.a8B, this.a8B ? (aN.hk && aN.a5T(), a1.a2.setState(1)) : aCA || aN.a99(), bi.ds = !0, nK(this))
	}, this.aCB = function() {
		this.a8B = !1, aN.a99(), bi.ds = !0, nK(this)
	}, this.a5B = function(fh, fj) {
		return !!aE.o1 && (0 <= aN.hn(fh, fj) || (aE.hj ? ((bi.ea > aC3 || !this.hn(fh, fj)) && aT.hn(fh, fj), bi.ds = !0, aC3 = bi.ea + 2e3) : aT.hn(fh, fj)), !0)
	}, this.ef = function() {
		aE.hj && aE.o1 && bi.ea > aC3 - 1e3 && bi.ea < aC3 && (bi.ds = !0)
	}, this.a3R = function() {
		aE.hj && (this.a8B = !1, bi.ds = !0, nK(this))
	}, this.xy = function() {
		if (aE.hj) {
			if (aE.o1) {
				if (bi.ea > aC3) return;
				if (bi.ea > aC3 - 1e3) return xz.globalAlpha = aCC(0, (1e3 - (bi.ea - (aC3 - 1e3))) / 1e3, 1), aCD(), void(xz.globalAlpha = 1)
			}
			aCD()
		}
	}
}

function cN() {
	var aCM, aCN, j, fh, fj, aCO, aCP;
	this.dk = function() {
		aCM = new Array(2), aCN = new Array(2), this.o3 = !1, aCP = aCO = jF = jE = 0, io = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.il() ? .072 : .0502) * i.im)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aCM[aC] = document.createElement("canvas"), aCM[aC].width = j, aCM[aC].height = j, aCN[aC] = aCM[aC].getContext("2d", {
			alpha: !0
		});
		this.aBp(),
			function() {
				for (var aCg = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aCN[aC].clearRect(0, 0, j, j), aCN[aC].fillStyle = bE.pK, aCN[aC].beginPath(), aCN[aC].arc(j / 2, j / 2, j / 2 - aCg, 0, 2 * Math.PI), aCN[aC].fill(), aCN[aC]
					.lineWidth = aCg, aCN[aC].fillStyle = bE.pR, aCN[aC].strokeStyle = bE.pR, aCN[aC].strokeStyle = __fx.utils.lineColor(bE.pR), aCN[aC].beginPath(), aCN[aC].arc(j / 2, j / 2, j / 2 - aCg, 0, 2 * Math.PI), aCN[aC].stroke(), a1Y(
						aCN[aC], 0, 0, j, aCg, .3, 0 === aC)
			}()
	}, this.a1R = function() {
		return -jE / io
	}, this.a1S = function() {
		return -jF / io
	}, this.oD = function(aCT, iu) {
		jE = io * aCT - iu
	}, this.oE = function(aCU, iv) {
		jF = io * aCU - iv
	}, this.hn = function(aCS, a9g) {
		return aE.o1 || ! function(aCS, a9g) {
			return Math.pow(aCS - (fh + j / 2), 2) + Math.pow(a9g - (fj + j / 2), 2) < j * j / 4 || Math.pow(aCS - (fh + j / 2), 2) + Math.pow(a9g - (fj + 2 * j), 2) < j * j / 4
		}(aCS, a9g) || bm.buffer.data[8].value ? (aI.oG() && (this.o3 = !0, aCO = aCS, aCP = a9g), !1) : a9g < fj + 1.25 * j ? this.a4v(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a4v(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a4s = function(aCS, a9g) {
		var aCV, aCW, ix, j0;
		return !aI.oG() || (aCV = jE, aCW = jF, jE += ix = aCO - aCS, jF += j0 = aCP - a9g, ag.a4s(ix, j0), this.aCX(), aCO = aCS, aCP = a9g, aCV !== jE) || aCW !== jF
	}, this.a4v = function(mA, mB, deltaY) {
		var oA;
		if (aI.oG()) {
			if (0 < deltaY) oA = (oA = 500 / (500 + deltaY)) < .5 ? .5 : oA;
			else {
				if (!(deltaY < 0)) return !1;
				oA = 2 < (oA = (500 - deltaY) / 500) ? 2 : oA
			}
			this.aCY(mA, mB, oA), bi.ds = !0
		}
		return !0
	}, this.aCY = function(fh, fj, fE) {
		var a5k;
		fE = a5k = (a5k = 1024 < (a5k = fE) * io ? 1024 / io : a5k) * io < .125 ? .125 / io : a5k, ag.zoom(fE, fh, fj),
			function(a5k, mA, mB) {
				io *= a5k, jE = (jE + mA) * a5k - mA, jF = (jF + mB) * a5k - mB, aT.aCX()
			}(fE, fh, fj)
	}, this.aCX = function() {
		var aCb = i.j / 16,
			aCc = 0,
			aCd = i.k / 16,
			aCe = 0;
		jE < -i.j + aCb && (aCc = -i.j + aCb - jE), jE > io * bV.fl - aCb && (aCc = io * bV.fl - aCb - jE), jF < -i.k + aCd && (aCe = -i.k + aCd - jF), jF > io * bV.fm - aCd && (aCe = io * bV.fm - aCd - jF), jE += aCc, jF += aCe, bd.oF(), ag.aCf(
			aCc, aCe)
	}, this.aBp = function() {
		fh = i.j - j - bf.gap, fj = Math.floor(i.k / 2 - 1.25 * j)
	}, this.xy = function() {
		bm.buffer.data[8].value || (xz.drawImage(aCM[0], fh, fj), xz.drawImage(aCM[1], fh, Math.floor(fj + 3 * j / 2)))
	}
}

function cO() {
	var h, aCh, aCi, aCj, gap, aCk, aCl, aCm, aCn, aCo, a92, aCp, hf, aCq, aAp, aCr, aCs;

	function aCw() {
		aCj = Math.floor(.2 * (a1.a2.il() ? .07 : .035) * i.im), aCj = a9d(a1.a2.il() ? 3 : 1, aCj);
		var aCz = i.j / (h.length + gap);
		aCj = aCj < aCz ? aCz : aCj, aAp = Math.floor((1 - gap) * aCj), aCh = 0, aD0()
	}

	function aD0() {
		aCh = (aCh = aCh < -20 ? -20 : aCh) > (h.length - 15) * aCj ? (h.length - 15) * aCj : aCh, aCl = Math.floor(aCh / aCj), aCm = (aCm = aCl + Math.floor(i.j / aCj)) > h.length - 1 ? h.length - 1 : aCm, aCl = (aCl = aCm < aCl ? aCm : aCl) < 0 ?
			0 : aCl;
		var lq = aCm;
		aCk = aCi / h[lq];
		for (var aC = aCm - 1; aCl <= aC; aC--) h[aC] > h[lq] && (lq = aC, aCk = aCi / Math.pow(h[aC], aCq))
	}

	function aD3(fh) {
		fh = Math.floor((aCh + i.j - fh - gap * aCj) / aCj);
		return (fh = fh < -1 ? -1 : -1 === fh ? 0 : fh > h.length - 1 ? -1 : fh) !== aCn && (aCn = fh, -1 === aCr && 0 === aCn && aU.aCt && (aCr = setInterval(aD4, 100)), 1)
	}

	function aD5(aC) {
		var aD7 = Math.floor(aCk * Math.pow(h[aC], aCq));
		xz.fillRect(aCh + i.j - (aC + 1) * aCj, i.k - aD7, aAp, aD7)
	}

	function aD4() {
		var h8;
		0 !== (aCn = 8 === ab.a4V() ? -1 : aCn) ? (aCs = (new Date).getTime(), clearInterval(aCr), aCr = -1) : (h8 = h[1] / 864e3, -1 !== aCs && (h8 += ((new Date).getTime() - aCs) * h[1] / 864e5, aCs = -1), 0 < h8 && (h[0] += Math.floor(h8), bi
			.ds = !0))
	}
	this.aCt = !1, this.dk = function() {
		aCs = aCr = -1, aCn = -(aCq = 1), this.aCu = !1, hf = 0, aCp = new Date, aCh = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aCi = Math.floor(.15 * i.k), aCo = (aCo = Math.floor((a1.a2.il() ? .018 : .0137) * i.im)) < 2 ? 2 : aCo, a92 = bD.sP.uA(1, aCo), aCw()
	}, this.aCx = function(aCy) {
		var aC;
		for (this.aCt = !0, aC = 0; aC < aCy.length; aC++) h.unshift(aCy[aC]);
		aCw(), bi.ds = !0
	}, this.aD1 = function() {
		aD0()
	}, this.a4s = function(fh, fj) {
		fj > i.k - .6 * aCi ? this.aCu ? fh !== hf && (aCh += fh - hf, hf = fh, aD0(), aD3(fh), this.aCu = -1 !== aCn, bi.ds = !0) : aD3(fh) && (bi.ds = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aCn && (this.aCu = !1, aCn = -1, bi.ds = !0)
	}, this.a4v = function(fh, deltaY) {
		-1 !== aCn && (aCh += Math.floor(deltaY), aD0(), aD3(fh), bi.ds = !0)
	}, this.hn = function(fh, fj) {
		this.a4s(fh, fj), -1 !== aCn && (hf = fh, this.aCu = !0)
	}, this.a5H = function() {
		-1 !== aCn && (this.aCu = !1)
	}, this.xy = function() {
		xz.fillStyle = bE.pU;
		for (var aD8, month, eb, ui, aDB, aDC, nz, aDD, aDE, aC = aCm; aCl <= aC; aC--) aD5(aC);
		this.aCt && 0 === aCl && (xz.fillStyle = bE.q3, aD5(0)), -1 !== aCn && (xz.fillStyle = bE.pT, aD5(aCn)), -1 !== aCn && (xz.font = a92, bD.sP.textBaseline(xz, 2), (eb = new Date).setTime(aCp.getTime() - 1e3 * aCn * 60 * 60 * 24), month =
			"month", aD8 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(eb), aD8 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(eb)), aD8 = aD8 + ", " + eb.getUTCDate() + " " + month + " " + eb.getFullYear(), month = 1 === h[aCn] ? L(118) : L(119), month = bD.tN.a2b(h[aCn]) + " " + month, eb = Math.floor(xz.measureText(aD8).width), ui = Math
			.floor(xz.measureText(month).width), aDB = Math.floor(.5 * (eb + aCo)), aDC = (aDC = aCh + i.j - (aCn + 1) * aCj) < aDB ? aDB : aDC > i.j - aDB ? i.j - aDB : aDC, nz = i.k - Math.floor(aCk * Math.pow(h[aCn], aCq)), aDD = Math
			.floor(1.1 * aCo), aDE = nz > i.k - aDD ? i.k - aDD : nz, xz.fillStyle = bE.pO, xz.fillRect(i.j - ui - aCo, aDE - aDD, ui + aCo, aDD), xz.fillRect(aDC - aDB, i.k - aDD, eb + aCo, aDD), xz.fillStyle = bE.pR, bD.sP.textAlign(xz, 2),
			xz.fillText(month, Math.floor(i.j - .5 * aCo), aDE), bD.sP.textAlign(xz, 1), xz.fillText(aD8, aDC, i.k), xz.strokeStyle = bE.pV, xz.lineWidth = 1, xz.beginPath(), xz.moveTo(0, nz), xz.lineTo(i.j, nz), xz.closePath(), xz.stroke())
	}
}

function cP() {
	var a92, j, fj, aDF, aDG, aDH, canvas, ox, aAi, a6q, aDI, aDJ, aDK, aDL;
	this.fh = 0, this.k = 0, this.dk = function() {
		aDH = aE.a7m, aDJ = "rgba(0,100,0,0.8)", aDK = "rgba(150,0,0,0.8)", aAi = aDI = !0, a6q = ah.hc[aE.fK], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.il() ? .305 : .24) * i.im), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), a92 = bD.sP.uA(1, Math.floor(.8 * this.k)), aDG = bD.sP.uA(1, Math.floor(.45 * this.k)), aDL = Math.floor(.5 * this.k), bV.zp
			.font = a92, fj = bf.gap, aDF = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, ox = canvas.getContext("2d", {
				alpha: !0
			}), bD.sP.textBaseline(ox, 1), bD.sP.textAlign(ox, 1), this.aDM()
	}, this.aBB = function() {
		return a1.a2.il() && i.j < 1.2 * i.k
	}, this.aBp = function() {
		this.aBB() ? this.fh = i.j - j - bf.gap : this.fh = Math.floor(aW.aDN() + (i.j - aW.aDN() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.nJ = function() {
		aAi && (aAi = !1, this.aDM())
	}, this.aDM = function() {
		ox.font = a92, ox.clearRect(0, 0, j, this.k), ox.fillStyle = aDI ? aDJ : aDK, ox.fillRect(0, 0, j, this.k), ox.fillStyle = bE.pT;
		var ek = this.aDO(),
			aDQ = (this.aDP(), ox.fillStyle = ah.hc[aE.fK] >= af.kb(aE.fK) ? bE.q0 : bE.pR, bD.tN.a2b(a6q)),
			aDQ = (ox.fillText(aDQ, Math.floor(j / 2), aDL), ox.measureText(aDQ).width),
			aDR = (ox.font = aDG, ox.fillStyle = 9 === ek ? bE.qa : bE.pR, af.aDS),
			aDT = "+" + aDR,
			ui = ox.measureText(aDT).width,
			aDU = Math.floor(this.k / 12),
			aDQ = .5 * (j + aDQ) + aDU;
		(aDQ + ui + aDF <= j || 1e3 <= aDR && (aDT = "+" + Math.floor(aDR / 1e3) + "K", aDQ + (ui = ox.measureText(aDT).width) + aDF <= j)) && ox.fillText(aDT, Math.floor(aDQ + .5 * ui), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && ox.fillText(9 - ek, Math.floor(2 * aDF + aDU), Math.floor(.3 * this.k)), ox.fillStyle = bE.pR, __fx.utils.smoothFrame(ox, j, this.k) || (ox.fillRect(0, 0, j, 1), ox.fillRect(0, 0, 1, this.k), ox.fillRect(0, this
				.k - 1, j, 1), ox.fillRect(j - 1, 0, 1, this.k))
	}, this.aDO = function() {
		var ek = bi.ks() % 100,
			a0U = (ek = 9 - bO.g1(ek -= ek % 10, 10), Math.floor(ek * (this.k - aDF) / 9));
		return ox.fillRect(0, a0U, aDF, this.k - a0U), ox.fillRect(j - aDF, a0U, aDF, this.k - a0U), ek
	}, this.aDP = function() {
		ox.fillRect(aDF, this.k - aDF, Math.floor((j - 2 * aDF) * ah.hc[aE.fK] / aDH), aDF)
	}, this.ef = function() {
		var h8 = aE.fK;
		bD.gw.hm(h8) && (h8 = ah.hc[h8] - ah.a6p[h8], a6q !== h8 ? (aDH = a9d(h8, aDH), aDI = a6q < h8 && 10 <= h8, a6q = h8, aAi = !0) : bi.ks() % 10 == 9 && (aAi = !0))
	}, this.xy = function() {
		0 === ah.nX[aE.fK] || aE.hy || 2 === ah.a6g[aE.fK] || xz.drawImage(canvas, this.fh, fj)
	}
}

function cQ() {
	var aDV, aDW, aDX, aDY, aDZ, aDa, aDb, aDc, aDd, aDe, aDf, aDg, aDh, aDi, aDj, aDk, aDl, aDm, aDn, aDo, aDp, aDq, position, aDr, aDs, aDt, aDu, aDv, aDw = 1,
		aDx = 1,
		aDy = "";
	var leaderboardHasChanged = true;
	this.playerPos = aE.fK;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kg[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kg[aE.fK]);
	}

	function aE0() {
		aDb.clearRect(0, 0, aDV, aBQ),
			aDb.fillStyle = aDv ? bE.qN : bE.qJ,
			aDb.fillRect(0, 0, aDV, aDg),
			aDb.fillStyle = bE.pN,
			aDb.fillRect(0, aDg, aDV, aBQ - aDg);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aDZ)
				position = (rivalsCount > aDZ ? rivalsCount : aDZ) - aDZ;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kg[aE.fK]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aDq = -1;
		if (__fx.leaderboardFilter.enabled && aDq >= __fx.leaderboardFilter.filteredLeaderboard.length) aDq = -1;
		if (__fx.leaderboardFilter.showingRivals && aDq + position >= __fx.leaderboardFilter.rivalsData.length) aDq = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= position && ownClanIndex < position + aDZ) aE2(ownClanIndex - position, bE.pq);
			})() :
			(playerPos >= position && aE2(playerPos - position, bE.pq),
				0 !== kg[aE.fK] && 0 === position && aE2(0, bE.qR))
		),
		-1 !== aDq && aE2(aDq, bE.pS),
			aDb.fillStyle = bE.pN,
			//console.log("drawing", aDq),
			aDb.clearRect(0, aBQ - __fx.leaderboardFilter.tabBarOffset, aDV, __fx.leaderboardFilter.tabBarOffset);
		aDb.fillRect(0, aBQ - __fx.leaderboardFilter.tabBarOffset, aDV, __fx.leaderboardFilter.tabBarOffset);
		aDb.fillStyle = __fx.utils.lineColor(bE.pR),
			aDb.fillRect(0, aDg, aDV, 1),
			aDb.fillRect(0, aBQ - __fx.leaderboardFilter.tabBarOffset, aDV, 1),
			__fx.leaderboardFilter.drawTabs(aDb, aDV, aBQ - __fx.leaderboardFilter.tabBarOffset, bE.pq),
			__fx.utils.smoothFrame(aDb, aDV, aBQ, bf.a2K) || (
				aDb.fillRect(0, 0, aDV, bf.a2K),
				aDb.fillRect(0, 0, bf.a2K, aBQ),
				aDb.fillRect(aDV - bf.a2K, 0, bf.a2K, aBQ),
				aDb.fillRect(0, aBQ - bf.a2K, aDV, bf.a2K)),
			aDb.fillStyle = bE.pR, aDb.font = aDW, bD.sP.textBaseline(aDb, 1), bD.sP.textAlign(aDb, 1), aDb.fillText(aDy, Math.floor((aDV + aDg - 22) / 2), Math.floor(aDe + aDX / 2));
		__fx.playerList.drawButton(aDb, 12, 12, aDg - 22);
		var ft, h9 = playerPos < position + aDZ - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) h9 = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aDZ; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ah.hO[repId], ah.a1p[repId], ah.a6g[repId]]);
					ah.hO[repId] = rivalsEntry.territory;
					ah.a1p[repId] = "[" + rivalsEntry.clan + "]";
					ah.a6g[repId] = 0;
				}
				for (aDb.font = aDY, bD.sP.textAlign(aDb, 0), ft = aDZ - h9; 0 <= ft; ft--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[ft + position];
					if (rivalsEntryLeft !== undefined)
						aE3(rivalsEntryLeft.representativeId), aE4(ft, ft + position, rivalsEntryLeft.representativeId);
				}
				for (bD.sP.textAlign(aDb, 2), ft = aDZ - h9; 0 <= ft; ft--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[ft + position];
					if (rivalsEntryRight !== undefined)
						aE3(rivalsEntryRight.representativeId), aE5(ft, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hO[entry[0]] = entry[1];
					ah.a1p[entry[0]] = entry[2];
					ah.a6g[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aDZ)
				position = (result.length > aDZ ? result.length : aDZ) - aDZ;
			//if (position >= result.length) position = result.length - 1;
			for (aDb.font = aDY, bD.sP.textAlign(aDb, 0), ft = aDZ - h9; 0 <= ft; ft--) {
				const pos = result[ft + position];
				if (pos !== undefined)
					aE3(mW[pos]), aE4(ft, pos, mW[pos]);
			}
			for (bD.sP.textAlign(aDb, 2), ft = aDZ - h9; 0 <= ft; ft--) {
				const pos = result[ft + position];
				if (pos !== undefined)
					aE3(mW[pos]), aE5(ft, mW[pos]);
			}
		} else {
			for (aDb.font = aDY, bD.sP.textAlign(aDb, 0), ft = aDZ - h9; 0 <= ft; ft--)
				aE3(mW[ft + position]), aE4(ft, ft + position, mW[ft + position]);
			for (bD.sP.textAlign(aDb, 2), ft = aDZ - h9; 0 <= ft; ft--)
				aE3(mW[ft + position]), aE5(ft, mW[ft + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == h9 && (aE3(aE.fK), bD.sP.textAlign(aDb, 0), aE4(aDZ - 1, kg[aE.fK], aE.fK), bD.sP.textAlign(aDb, 2), aE5(aDZ - 1, aE.fK)), 0 === position && (h9 = .7 * aDh / ac.get(4).height, aDb.setTransform(
			h9, 0, 0, h9, Math.floor(aDi + .58 * aDh + .5 * h9 * ac.get(4).width), Math.floor(aDe + aDX + .4 * aDh)), aDb.imageSmoothingEnabled = !0, aDb.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aDb.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aE3(player) {
		aE.iU && (aDb.fillStyle = bj.aE7[bj.aE8[player]])
	}

	function aE2(aC, aE9) {
		aDb.fillStyle = aE9, aC = aDZ - 1 < aC ? aDZ - 1 : aC;
		aE9 = Math.floor((aC === aDZ - 1 ? 2 : 0 === aC ? 1.15 : 1) * aDh), aE9 = aC === aDZ - 2 ? Math.floor(aDg + 9.15 * aDh) - Math.floor(aDg + 8.15 * aDh) : aE9;
		aDb.fillRect(0, Math.floor(aDg + (aC + (0 === aC ? 0 : .15)) * aDh), aDV, aE9)
	}

	function aE4(z1, a75, aC) {
		aDb.fillText(aDm[a75], aDi, Math.floor(aDe + aDX + (z1 + .5) * aDh)), 1 === ah.a6g[aC] && (aDb.font = "italic " + aDY);
		a75 = Math.floor(aDe + aDX + (z1 + .5) * aDh);
		aDb.fillText(ah.a1p[aC], aDj, a75), 0 !== ah.a6g[aC] && (aDb.font = aDY), aC < aE.kv && 2 !== ah.a6g[aC] || aDb.fillRect(aDj, a75 + .35 * aDw, aDl[aC], Math.max(1, .1 * aDw))
	}

	function aE5(z1, aC) {
		aDb.fillText(ah.hO[aC], aDk, Math.floor(aDe + aDX + (z1 + .5) * aDh))
	}
	this.dk = function() {
		var aC;
		for (u.z.uU[0] = 0, aDu = aDt = aDr = 0, aDv = aDs = !1, aDq = -1, aDZ = a1.a2.il() ? 6 : 10, aDx = (position = 0) === (aDx = bm.buffer.data[11].value) ? 10 : 1 === aDx ? 5 : 1, aDp = !1, aDn = new Uint16Array(aDZ + 1), aDo =
			new Uint32Array(aDZ + 1), aDd = aE.fX, mW = new Uint16Array(aDd), kg = new Uint16Array(aDd), aC = aDd - 1; 0 <= aC; aC--) mW[aC] = aC, kg[aC] = aC;
		this.resize(!0), aDl = new Uint16Array(aE.fX);
		var aDz = Math.floor(aDV - aDj - aDi - aDc);
		for (aDm = new Array(aE.fX), aDb.font = aDY, aC = aE.fX - 1; 0 <= aC; aC--) aDm[aC] = aC + 1 + ".", ah.a1p[aC] = bD.ox.a6P(ah.a42[aC], aDY, aDz), aDl[aC] = Math.floor(aDb.measureText(ah.a1p[aC]).width);
		aE0()
	}, this.resize = function(dk) {
		if (aBQ = a1.a2.il() ? (aDV = Math.floor(.335 * i.im), Math.floor(aDZ * aDV / 8)) : (aDV = Math.floor(.27 * i.im), Math.floor(aDZ * aDV / 10)), aDV = Math.floor(.97 * aDV), (aDa = document.createElement("canvas")).width = aDV, aDa
			.height = aBQ, aDb = aDa.getContext("2d", {
				alpha: !0
			}), aDe = .025 * aDV, aDX = .16 * aDV, aDf = 0 * aDV, aDg = Math.floor(.45 * aDe + aDX), aDh = (aBQ - aDX - 2 * aDe - aDf) / aDZ,
			aDa.height = aBQ += aDh, __fx.leaderboardFilter.tabBarOffset = Math.floor(aDh * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aBQ - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aDV,
			aDW = bD.sP.uA(1, Math.floor(.55 * aDX)), aDw = Math.floor((a1.a2.il() ? .67 : .72) * aDh), aDY = bD.sP.uA(0, aDw), aDb.font = aDY, aDi = Math.floor(.04 * aDV), aDj = Math.floor((a1.a2.il() ? .195 : .18) * aDV), aDc = Math.floor(aDb
				.measureText("00920600").width), aDb.font = aDW, aDk = aDV - aDi, !dk) {
			aDb.font = aDY;
			for (var aC = aE.fX - 1; 0 <= aC; aC--) aDl[aC] = Math.floor(aDb.measureText(ah.a1p[aC]).width);
			aE0()
		}
		aDy = bD.ox.a6P(L(120), aDW, .96 * aDV)
	}, this.aDN = function() {
		return aDV
	}, this.nJ = function(by, aE1) {
		(aE1 || aDp && (by || bi.ks() % aDx == 0)) && (aDp = !1, aE0())
	}, this.ef = function() {
		! function() {
			for (var ft = aDd - 1; 0 <= ft; ft--) 0 === ah.nX[mW[ft]] && ! function(ft) {
				var aEH = mW[ft];
				aDd--;
				for (var aC = ft; aC < aDd; aC++) mW[aC] = mW[aC + 1], kg[mW[aC]] = aC;
				mW[aDd] = aEH, kg[mW[aDd]] = aDd
			}(ft)
		}();
		for (var aEF, oG = aDd - 1, ft = 0; ft < oG; ft++) ah.hO[mW[ft]] < ah.hO[mW[ft + 1]] && (aEF = mW[ft], mW[ft] = mW[ft + 1], mW[ft + 1] = aEF, kg[mW[ft]] = ft, kg[mW[ft + 1]] = ft + 1);
		! function() {
			for (var eb = aDp, h9 = (aDp = !0, kg[aE.fK] >= aDZ - 1 ? aDZ - 2 : aDZ - 1), aC = h9; 0 <= aC; aC--)
				if (aDn[aC] !== mW[aC] || aDo[aC] !== ah.hO[mW[aC]]) return;
			(h9 != aDZ - 2 || aDn[aDZ] === kg[aE.fK] && aDo[aDZ] === ah.hO[aE.fK]) && (aDp = eb)
		}();
		for (var aC = aDZ - 1; 0 <= aC; aC--) aDn[aC] = mW[aC], aDo[aC] = ah.hO[mW[aC]];
		aDn[aDZ] = kg[aE.fK], aDo[aDZ] = ah.hO[aE.fK];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hn = function(fh, fj) {
		if (a2J(fh, fj)) {
			if (__fx.utils.isPointInRectangle(fh, fj, bf.gap + 12, bf.gap + 12, aDg - 22, aDg - 22)) __fx.playerList.display(ah.a42);
			else {
				if (fj - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fh - bf.gap);
				fh = aEJ(fj);
				0 <= fh ? (aDr = bi.ea, aDs = !0, aDt = aDu = fh, bM.a5V() && (fh = aCC(-1, aDu, aDZ), aDq !== (fh = fh === aDZ ? -1 : fh)) && (aDq = fh, aE0(), bi.ds = !0)) : (aDv && (aDv = !1, aE0(), bi.ds = !0), u.v(10, 0, new aEK({
					aEL: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aE0(), bi.ds = !0
	};

	function aEJ(fj) {
		return (fj -= bf.gap + aDg) < 0 ? Math.floor(fj / aDh) - 1 : fj < (aDZ - 1) * aDh ? Math.floor(fj / aDh) : fj < aBQ - aDg ? aDZ - 1 : (fj -= aBQ - aDg, aDZ + Math.floor(fj / aDh))
	}

	function a2J(fh, fj) {
		return fh >= bf.gap && fh < bf.gap + aDV && fj >= bf.gap && fj < bf.gap + aBQ
	}
	this.a4s = function(fh, fj) {
		var eb, aEI;
		if (__fx.utils.isPointInRectangle(fh, fj, bf.gap + 12, bf.gap + 12, aDg - 22, aDg - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fh, fj, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fh - bf.gap)) return aEI = aEJ(fj), fh = a2J(fh, fj), fj = !(!(aEI < 0 && fh) || bM.a5V()), aDs ? (eb = position, (position = aCC(0, position += aDt - aEI, aE.fX - aDZ)) !== eb ? (aDv = fj,
			aEI = aCC(-1, aDt = aEI, aDZ), aDq = aEI = aEI !== aDZ && fh ? aEI : -1, aE0(), bi.ds = !0) : aDv !== fj && (aDv = fj, aE0(), bi.ds = !0), !0) : (aEI = (aEI = aCC(-1, aEI, aDZ)) === aDZ || !fh || bM.a5V() ? -1 : aEI, (aDq !==
			aEI || aDv !== fj) && (aDq = aEI, aDv = fj, aE0(), bi.ds = !0))
	}, this.a5H = function(fh, fj) {
		if (!aDs) return !1;
		aDs = !1;
		var aEI = aEJ(fj);
		var isEmptySpace = false;
		return bM.a5V() && -1 !== aDq && (aDq = -1, aE0(), bi.ds = !0), bi.ea - aDr < 350 && aDu === aEI && -1 !== (aEI = (aEI = aCC(-1, aEI, aDZ)) !== aDZ && a2J(fh, fj) ? aEI : -1) && (fh = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aEI + position] === undefined, __fx.leaderboardFilter.rivalsData[aEI + position]?.representativeId ?? aE.fK) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), mW[__fx.leaderboardFilter.filteredLeaderboard[aEI + position] ?? (isEmptySpace = true, kg[aE.fK])]) : mW[aEI + position]),
			aEI === aDZ - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kg[aE.fK]) >=
			position + aDZ - 1 && (fh = aE.fK), !isEmptySpace && aE.iU && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fh, ah.a42, aE.lF), 0 === ah.nX[fh] || isEmptySpace || aE.hy && !aE.lF && !aE.hj &&
			fh !== aE.fK || aI.nt(fh, 800, !1, 0)), !0
	}, this.a4v = function(fh, fj, deltaY) {
		var aEO;
		return !(aDs || aE.o1 || (aEO = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a2J(fh, fj)) || (fh = (fh = aCC(-1, aEJ(fj), aDZ)) === aDZ || bM.a5V() ? -1 : fh, 0 < deltaY ? position < aE.fX - aDZ && (position += Math.min(aE.fX - aDZ -
			position, aEO), aDq = fh, aE0(), bi.ds = !0) : 0 < position && (position -= Math.min(position, aEO), aDq = fh, aE0(), bi.ds = !0), 0))
	}, this.xy = function() {
		xz.drawImage(aDa, bf.gap, bf.gap)
	}
}

function cR() {
	var canvas, ox, fh, fj, aD7, aEP, gap, aEQ, fontSize, aER, aES, aET, aEU, aEV, aEW, aEX, aEY, aEZ;

	function aEd() {
		ox.clearRect(0, 0, aX.j, aX.k), ox.fillStyle = bE.pO, ox.fillRect(0, 0, aX.j, aX.k), ox.fillStyle = bE.pl, fE = 0 < aEX ? aEX : aEU[4] / 1e4, ox.fillRect(0, aX.k - aD7 - 1, Math.floor(fE * aX.j), aD7), ox.fillStyle = bE.pR, ox.fillStyle =
			__fx.utils.lineColor(bE.pR), __fx.utils.smoothFrame(ox, aX.j, aX.k) || (ox.fillRect(0, 0, aX.j, 1), ox.fillRect(0, 0, 1, aX.k), ox.fillRect(aX.j - 1, 0, 1, aX.k), ox.fillRect(0, aX.k - 1, aX.j, 1)), ox.fillRect(0, aX.k - aD7 - 1, aX.j,
			1), ox.fillStyle = bE.pR;
		for (var fE, aEf, eb = 0, aC = 0; aC < aET.length; aC++) aEV[aC] ? (bD.sP.textAlign(ox, 0), aEf = Math.floor((aEP - aD7 + 2 * aEQ) * (aC - eb + 1) / (aET.length + 1) - .7 * aEQ), ox.fillText(aET[aC], gap, aEf), bD.sP.textAlign(ox, 2), 5 ===
			aC && 0 !== ah.nX[aE.fK] && ah.hc[aE.fK] >= af.kb(aE.fK) ? (ox.fillStyle = bE.qP, ox.fillText(aEb(aC), aX.j - gap, aEf), ox.fillStyle = bE.pR) : ox.fillText(aEb(aC), aX.j - gap, aEf)) : eb++
	}

	function aEb(aC) {
		return aC < 3 ? aEU[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.tN.a7Q(aEU[aC] / 100, 2) : aC < 7 ? bD.tN.a2b(aEU[aC]) : aC === 7 ? aX.aEg(aEU[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hO, aE.fK) : __fx.utils.getDensity(aE.fK)
	}

	function aEa() {
		ah.hO[aE.fK] !== aEU[6] && (aEU[6] = ah.hO[aE.fK], aER++)
	}
	this.dk = function() {
		aEX = aEY = 0, (aES = new Array(8))[0] = L(121), aES[1] = aE.lF ? L(26) : L(122), aES[2] = L(123), aES[3] = L(124), aES[4] = L(125), aES[5] = L(126, 0, "Interest"), aES[6] = L(127), aES[7] = L(128),
			aES.push("Max Troops", "Density"), // add aES
			(aET = new Array(aES.length)).fill(""), (aEU = new Array(aES.length))[0] = aE.lF ? 0 : aE.kv, aEU[1] = aE.lF ? am.lR : aE.lH, aEU[2] = aE.a3K, aEU[3] = 0, aEU[4] = bO.g1(1e4 * ah.hO[0], Math.max(aE.kf, 1)), aEU[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.g1(700 * aE.data.iIncomeValue, 64) : bO.g1(700 * aE.data.iIncomeData[aE.fK], 64), aEU[6] = 0, aEa(), aEU[7] = 0, aEW = aEb(6), (aEV = new Array(aES.length)).fill(!0), aEZ = 0, aEZ =
			aE.lF ? (aEV[0] = !1, aEV[2] = !1, aEV[3] = !1, 3) : (aEV[3] = !1, 1), aER = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.il() ? .1646 : .126) * 1.25 * i.im), this.k = Math.floor(1.18 * this.j), aD7 = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aEQ = .04 * this.j, aEP = this.k, this.k -= Math.floor(aEZ * (this.k -
			2 * aD7) / aES.length), fontSize = Math.floor(.7 * (aEP - aD7) / aES.length);
		var a92 = bD.sP.uA(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(a92, j) {
				for (var aC = 0; aC < aET.length; aC++) aET[aC] = bD.ox.a6P(aES[aC], a92, j)
			}((ox = canvas.getContext("2d", {
				alpha: !0
			})).font = a92, .575 * this.j), bD.sP.textBaseline(ox, 1), ox.lineWidth = 1, this.a7f(), this.aBp(), aV.aBp(), aEd()
	}, this.aBp = function() {
		fh = i.j - this.j - bf.gap
	}, this.aEe = function() {
		fj = bf.gap
	}, this.a7f = function() {
		fj = bf.gap + (aV.aBB() && 0 !== ah.nX[aE.fK] && !aE.hy ? aV.k + bf.gap : 0)
	}, this.nJ = function(by) {
		(by || 100 <= aER) && (aER = 0, aEd())
	}, this.a8O = function() {
		return aEU[7]
	}, this.aEg = function(value) {
		var lq = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lq) / 1e3);
		return value < 10 ? lq + ":0" + value : lq + ":" + value
	}, this.ef = function() {
		var aEr, per;
		aEV[0] && aE.a3L - aE.a3K !== aEU[0] && (aEU[0] = aE.a3L - aE.a3K, aER++), am.lR - aEU[0] !== aEU[1] && (aEU[1] = am.lR - aEU[0], aER++), this.nA(), (aEr = af.aEs(aE.fK)) !== aEU[5] && (aEU[5] = aEr, aER++), aEa(), aEU[7] += bi.aEt, aEr =
			aEb(7), aEW !== aEr && (aEW = aEr, aER += 100), aEr = aE.iU ? bk.lS() : ah.hO[mW[0]], per = bO.g1(1e4 * aEr, Math.max(aE.kf, 1)), aEU[3] = aEr, aEU[4] !== per && (aER++, aEU[4] = per), 8 === aE.lD && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.gw.hm(aC)) return bU.a2w.a3H(), 1;
				return
			}() || aEU[3] < aE.kf || ! function() {
				for (var aC = am.lR - 1; 0 <= aC; aC--)
					if (0 < ah.h2[am.lW[aC]].length) return;
				return 1
			}() || bQ.lk.aEq().length || aE.iU && bk.lS(1) < aE.kf || bU.a2w.a3H()
	}, this.nA = function() {
		aEV[2] && aE.a3K !== aEU[2] && (aEU[2] = aE.a3K, aER += 2 === aE.a3I ? 100 : 1)
	}, this.aEn = function() {
		return aEU[3] === aE.kf
	}, this.aEu = function(aC) {
		var uy, aEv, eb;
		return 2 !== aE.a3I && (aC % 2 == 1 && (aW.nJ(1, 1), bi.ds = !0), aC === aE.a7o ? (aEX = 0, aEd(), !1) : (-1 !== aC || 0 !== aEY) && (aEv = aEX, aEX = aE.hj ? aC / aE.a7o : (eb = performance.now(), 0 <= aC && (uy = eb - 392 * aC, aEY =
			0 === aC || uy < aEY ? uy : aEY), 1 < (aEX = (eb - aEY) / (392 * aE.a7o)) ? 1 : aEX), aEd(), aEX !== aEv))
	}, this.xy = function() {
		xz.drawImage(canvas, fh, fj)
	}
}

function cS() {
	var iM, aEw, j, k, aBv, aEx, aEy, aBC, canvas, nk, aEz;

	function a1S() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.dk = function() {
		aEz = iM = !1, aBv = .61, aEx = .07, aEy = .09, nk = aBC = k = 0
	}, this.resize = function() {
		var ox, ny, ek, aF4, aF5, a97;
		iM && (j = aF0(j = a1.a2.il() ? Math.floor(.69 * i.im) : Math.floor(.5 * i.im), a9d(i.j - 2 * bf.gap, 10)), j = aF0(j, Math.floor(3.57 * a9d(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, ox = canvas.getContext("2d", {
				alpha: !0
			}), ny = Math.floor(1 + k / 40), ox.clearRect(0, 0, j, k), ox.fillStyle = bE.pO, ox.fillRect(ny, ny, j - 2 * ny, k - 2 * ny), ox.lineJoin = "bevel", ox.lineWidth = 2 * ny, ox.strokeStyle = bE.pR, ox.strokeRect(ny, ny, j - 2 * ny,
				k - 2 * ny), ox.imageSmoothingEnabled = !1, ek = ac.get(aEw), aF4 = ek.width, a97 = (1 === aEw ? .85 : 21 === aEw ? .666 : .9) * aBv * k / (aF5 = ek.height), ox.setTransform(a97, 0, 0, a97, Math.floor((j - a97 * aF4) / 2),
				Math.floor((k - a97 * aF5) / 2)), ox.drawImage(ek, 0, 0), ox.setTransform(1, 0, 0, 1, Math.floor(j - aEy * k - aEx * k - ny), Math.floor(ny + aEx * k)),
			function(ox, fa) {
				ox.lineWidth = Math.floor(1 + k / 80), ox.strokeStyle = bE.pR, ox.beginPath(), ox.moveTo(0, 0), ox.lineTo(fa, fa), ox.moveTo(0, fa), ox.lineTo(fa, 0), ox.stroke()
			}(ox, Math.floor(aEy * k)), ox.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(g2, aF2, aBh, aF3) {
		iM || aF3 && aEz || (aEw = aBh ? 21 : g2 ? 1 : 2, iM = aEz = !0, this.resize(), aM.ta(), aS.aBc(), nk = bi.ea, aBC = aF2 ? 1 : 0)
	}, this.ef = function() {
		!iM || 1 <= aBC || (aBC = 1 < (aBC += 5e-4 * (bi.ea - nk)) ? 1 : aBC, nk = bi.ea, bi.ds = !0)
	}, this.hn = function(fh, fj) {
		return !(!iM || aBC <= 0 || (fh -= Math.floor((i.j - j) / 2), fj -= a1S(), fh < 0) || fj < 0 || j < fh || k < fj || (j - k / 3 < fh && fj < k / 3 && (iM = !1, bi.ds = !0), 0))
	}, this.xy = function() {
		!iM || aBC <= 0 || (xz.globalAlpha = aBC, xz.drawImage(canvas, Math.floor((i.j - j) / 2), a1S()), xz.globalAlpha = 1)
	}
}

function dT() {
	var aF7, aF8 = new Uint8Array(5),
		aF9 = new Uint8Array(5);
	this.aFA = new aFB, this.dk = function() {
		for (var g2 = bm.buffer.data[119].value, aC = 0; aC < aF8.length; aC++) aF8[aC] = (g2 >> 2 * aC) % 4
	}, this.a80 = function() {
		aF7 = [L(129), "", L(130, [ba.aFC[28]]), L(131, [ba.aFC[26]]), L(132, [ba.aFC[0]])], this.aFA.dk()
	}, this.ef = function() {
		this.aFA.ef()
	}, this.a8l = function(id) {
		1 < id && bM.sr() || ! function(eJ) {
			if (3 === aF8[eJ] || 1 === aF9[eJ]) return;
			if (aF9[eJ] = 1, !(Math.random() < .6)) {
				aF8[eJ]++;
				for (var g2 = 0, aC = 0; aC < aF8.length; aC++) g2 += aF8[aC] << 2 * aC;
				bm.qt.qu(119, g2)
			}
			return 1
		}(id) || aO.a9j(aF7[id])
	}
}

function aFB() {
	var aFE;
	this.dk = function() {
		aFE = !1
	}, this.ef = function() {
		var h8;
		if (function() {
				if (!aFE) {
					if (bi.ks() % 30 != 9) return;
					if (!bD.gw.mS(90)) return;
					aFE = !0
				}
				return 1
			}() && (! function() {
				var sH = aO.aA4(956);
				if (sH) {
					if (bD.gw.lt(sH.player)) return 1;
					aO.aA3(956, 0)
				}
				return
			}() && (-1 === (h8 = (aE.iU ? function() {
				var id = bk.lU(),
					fa = am.lR;
				if (bj.lI[id])
					for (var w4 = am.lW, fY = bj.fY, aC = 0; aC < fa; aC++) {
						var h8 = w4[aC];
						if (fY[h8] !== id) return h8
					} else if (1 < fa) return mW[fa - 1];
				return -1
			} : function() {
				for (var aFM = am.lR, lp = am.lW, aFN = kg, aC = 0; aC < aFM; aC++) {
					var h8 = lp[aC];
					if (0 !== aFN[h8]) return h8
				}
				return -1
			})()) ? ! function() {
				var sH = aO.aA4(957);
				if (sH && sH.a9Z) {
					if (ad.fR(sH.a9Z.fM << 2)) return 1;
					aO.aA3(957, 0)
				}
				return
			}() : (aO.a1o(0, L(133, [ah.a1p[h8]]), 956, h8, bE.pR, bE.pO, -1, !0), 0)))) {
			var fa = ap.jZ.m5;
			if (0 !== fa)
				for (var buffer = ap.jZ.buffer, aC = 0; aC < fa; aC++) {
					var fM = buffer[aC];
					if (ad.fR(fM << 2)) return void aO.a1o(0, L(134, [bP.fi(fM), bP.fk(fM)]), 957, 0, bE.pR, bE.pO, -1, !0, void 0, {
						ft: 1,
						fM: fM
					})
				}
		}
	}
}

function dU() {
	this.aFO = new aFP, this.dk = function() {
		this.aFO.resize()
	}
}

function aFP() {
	this.resize = function() {
		var aC, aFQ = document.head.querySelector("style#ss");
		if (aFQ)
			for (aC = aFQ.sheet.cssRules.length - 1; 0 <= aC; aC--) aFQ.sheet.deleteRule(0);
		else(aFQ = document.createElement("style")).id = "ss", document.head.appendChild(aFQ);
		var aC3 = "::-webkit-scrollbar",
			aFR = bD.sP.sY(bf.uC),
			iW = bD.sP.sY(Math.max(bD.sP.tc(.012), 8));
		try {
			aFQ.sheet.insertRule(aC3 + "{width:" + iW + ";height:" + iW + ";}", aFQ.sheet.cssRules.length), aFQ.sheet.insertRule(aC3 + "-thumb{background-color:white;}", aFQ.sheet.cssRules.length), aFQ.sheet.insertRule(aC3 +
				"-track{background:" + bE.pN + ";}", aFQ.sheet.cssRules.length), aFQ.sheet.insertRule(aC3 + "-track:horizontal{border-top:" + aFR + " solid white;}", aFQ.sheet.cssRules.length), aFQ.sheet.insertRule(aC3 +
				"-track:vertical{border-left:" + aFR + " solid white;}", aFQ.sheet.cssRules.length), aFQ.sheet.insertRule(aC3 + "-button{display:none;}", aFQ.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aFQ.sheet.cssRules.length - 1; 0 <= aC; aC--) aFQ.sheet.deleteRule(0)
		}
	}
}

function dS() {
	this.aFS = !1, this.oO = !1, this.a7j = !1, this.aFT = [0, 0, 0, 0], this.render = function() {
		var ny, nz, oB, oC;
		this.a7j = this.a7j || this.oO, (this.oO || this.aFS && this.a7j) && (ny = bd.aFU[0], nz = bd.aFU[1], oB = bd.aFU[2], oC = bd.aFU[3], ny = ny < this.aFT[0] ? this.aFT[0] : ny, nz = nz < this.aFT[1] ? this.aFT[1] : nz, oB = oB > this.aFT[
				2] ? this.aFT[2] : oB, oC = oC > this.aFT[3] ? this.aFT[3] : oC, this.oO = !1, this.aFS = !1, ny === this.aFT[0] && nz === this.aFT[1] && oB === this.aFT[2] && oC === this.aFT[3] ? this.a7k() : ny <= oB && nz <= oC && a82
			.putImageData(a83, 0, 0, ny, nz, oB - ny + 1, oC - nz + 1))
	}, this.a7k = function() {
		this.a7j && this.aFT[2] >= this.aFT[0] && this.aFT[3] >= this.aFT[1] && a82.putImageData(a83, 0, 0, this.aFT[0], this.aFT[1], this.aFT[2] - this.aFT[0] + 1, this.aFT[3] - this.aFT[1] + 1), this.a7j = !1
	}, this.a3U = function() {
		this.aFT[2] >= this.aFT[0] && this.aFT[3] >= this.aFT[1] && a82.putImageData(a83, 0, 0, this.aFT[0], this.aFT[1], this.aFT[2] - this.aFT[0] + 1, this.aFT[3] - this.aFT[1] + 1), this.a7j = !1
	}, this.dk = function() {
		var fh, fj;
		this.aFS = !1, this.oO = !1, this.a7j = !1, this.aFT[0] = bV.fl, this.aFT[1] = bV.fm, this.aFT[2] = this.aFT[3] = 0;
		loop: for (fh = 1; fh < bV.fl - 1; fh++)
			for (fj = bV.fm - 2; 1 < fj; fj--)
				if (1 === aFV[ad.a0z(fh, fj) + 2]) {
					this.aFT[0] = fh;
					break loop
				} loop: for (fj = 1; fj < bV.fm - 1; fj++)
			for (fh = bV.fl - 2; 1 < fh; fh--)
				if (1 === aFV[ad.a0z(fh, fj) + 2]) {
					this.aFT[1] = fj;
					break loop
				} loop: for (fh = bV.fl - 2; 0 < fh; fh--)
			for (fj = bV.fm - 2; 1 < fj; fj--)
				if (1 === aFV[ad.a0z(fh, fj) + 2]) {
					this.aFT[2] = fh;
					break loop
				} loop: for (fj = bV.fm - 2; 0 < fj; fj--)
			for (fh = bV.fl - 2; 1 < fh; fh--)
				if (1 === aFV[ad.a0z(fh, fj) + 2]) {
					this.aFT[3] = fj;
					break loop
				}
	}
}

function L(value, aFW, yW, aFX) {
	var s6 = "number" == typeof value ? bA.aFY[value] : value;
	if (yW && bA.aFZ() && (s6 = yW), !aFW) return aFX ? s6.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : s6;
	for (var fa = aFW.length, aC = 0; aC < fa; aC++)
		for (var ft = 0; ft < 3; ft++) s6 = s6.replace("{" + (10 * ft + aC) + "}", aFW[aC]);
	return s6
}

function c6() {
	this.data = new aFa;
	var aFb = (new aFc).L84,
		aFe = (this.aFY = aFb, !(this.aFd = "en"));
	this.dk = function() {
		var s6, h;
		aFe = !1, ("en" === (s6 = bm.buffer.data[12].value).split("-")[0].toLowerCase() ? (bA.aFY = aFb, bA.aFd = s6, 1) : bm.buffer.data[12].value === bm.buffer.data[145].value && 0 < bm.buffer.data[146].value && (s6 = bm.buffer.data[146].value,
			(h = bm.sg.yi(s6, !1)).length === s6) && !!bD.sX.a60(h) && function(h) {
			for (var fa = h.length, k = 0; k < fa; k++) h[k] = h[k].replace("&#39;", "'");
			var aFk = bm.sg.yi(fa, !0);
			if (fa !== aFk.length) return !1;
			if (!bD.sX.a60(aFk)) return !1;
			for (var lq = aFb.length, aCy = new Array(lq), aFl = lq === fa, h3 = Math.min(fa, lq), aC = 0; aC < lq; aC++)
				if (aCy[aC] = aFb[aC], aC < fa && aFk[aC] === aCy[aC]) aCy[aC] = h[aC];
				else {
					aFl = !1;
					for (var fu = 0; fu < h3; fu++)
						if (aFk[fu] === aCy[aC]) {
							aCy[aC] = h[fu];
							break
						}
				} return bA.aFY = aCy, bA.aFd = bm.buffer.data[12].value, aFl
		}(h)) || (aFe = !0)
	}, this.dm = function() {
		bj.dl(), aF.dl(), bh.dl(), bg.dl(), aP.dk(), br = new e9
	}, this.aFZ = function() {
		return this.aFY === aFb || !aFb.length
	}, this.aFm = function() {
		var aFn;
		return !!aFe && (aFe = !1, 0 !== aFb.length) && (aFn = bm.buffer.data[12].value, b1.eh.aFo(0, aFn.slice(0, 20)), !0)
	}, this.aFp = function(h) {
		h.length !== aFb.length ? 8 === u.uc && u.a4Z().aFq(30, 0, 1) : (this.aFY = h, this.aFd = bm.buffer.data[12].value, bm.qt.qu(145, this.aFd), bm.qt.qu(146, h.length), bm.sg.yo(h, !1), bm.sg.yo(aFb, !0), 8 === u.uc ? u.a4Z().aFq(30) : 0 ===
			ab.a4V() && 5 === u.uc && u.z.aFr())
	}, this.aFs = function() {
		var yr, h = navigator.languages;
		return h && h.length ? (yr = Math.max(bA.data.aFt(h[0]), 0), 1 === h.length ? [yr, yr] : [yr, Math.max(bA.data.aFt(h[1]), 0)]) : [0, 0]
	}
}

function aFa() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aFu = function() {
		for (var aFv = [], h = this.h, fa = h.length, aC = 0; aC < fa; aC++) aFv.push(h[aC]);
		var aFw = bm.buffer.data[12].yW;
		for (aC = 0; aC < fa; aC++)
			if (aFv[aC] === aFw) {
				aFv.splice(aC, 1), fa--;
				break
			} aFv.sort(), fa++, aFv.unshift(aFw);
		try {
			if ("undefined" == typeof Intl) return aFv;
			for (aC = 0; aC < fa; aC++) {
				var s6 = new Intl.DisplayNames([aFv[aC]], {
					type: "language"
				}).of(aFv[aC]);
				s6 !== aFv[aC] && (aFv[aC] = aFv[aC] + ": " + s6)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aFv
	}, this.aFy = function(aFz) {
		for (var s6 = bm.buffer.data[12].value, fa = aFz.length, aC = 0; aC < fa; aC++)
			if (s6 === aFz[aC].split(":")[0]) return aC;
		return 0
	}, this.aFt = function(aG0) {
		if (aG0 && !(aG0.length < 2)) {
			aG0 = aG0.split("-")[0].toLowerCase();
			for (var h = this.h, fa = h.length, aC = 0; aC < fa; aC++)
				if (aG0 === h[aC]) return aC
		}
		return -1
	}
}

function aFc() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Lobby", "Player", "Players", "Propaganda", "Close {button}", "Report Abuse", "You earned {10} gold!",
		"{0} earned {11} gold!", "Team {0}", "Team {0} won the game!", "This game will be stored here: {0}", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more",
		"You earned {10} gold.", "You earned {10} points.", "Clan {0} gained {11} points. ✨", "You earned {10} clan points.", "You earned an additional {10} gold because you played for {1}.", "Back", "Error", "Error {10}", "Not Enough Gold!",
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
		"You are leaving Territorial.io.", "The game could not start for you. Your selection was removed.", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Loading", "{0} defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains 1",
		"Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2",
		"British Isles", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar",
		"Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Sell Account", "Asking Price:", "Account to receive the gold:", "Publish Offer", "Buy This Account", "Buy",
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
	var fh, fj, k, vV, aG1, aG2, aG3, aG4, aG5, j, a6d, a3m;
	this.iM = !1, this.dk = function(s6, aG6) {
		if (1 === a1.id && 13 <= a1.e4 && a1.e4 < 18) return aG6 ? void(a6d = s6) : a6d !== s6 ? void 0 : void a1.yg.saveString(200, s6);
		aG6 && (a6d = s6, (a3m = document.createElement("a")).appendChild(document.createTextNode(a6d)), this.iM = !0, a3m.title = a6d, a3m.target = "_blank", a3m.href = a6d, a3m.style.textAlign = "center", a3m.style.color = bE.pR, a3m.style
			.position = "absolute", a3m.style.padding = "0px", a3m.style.margin = "0px", this.resize(), document.body.appendChild(a3m), bi.ds = !0)
	}, this.ta = function() {
		return !(!this.iM || (u.removeChild(document.body, a3m), this.iM = !1))
	}, this.hn = function(iu, iv) {
		return !!this.iM && ((iu < fh || iv < fj || fh + j < iu || fj + k < iv || fh + j - vV < iu && iv < fj + vV) && (bi.ds = !0, this.iM = !1, u.removeChild(document.body, a3m)), !0)
	}, this.resize = function() {
		var a92, aG7;
		this.iM && (aG4 = Math.floor(.8 * (a1.a2.il() ? i.j > i.k ? .6 : .55 : .4) * i.im), vV = Math.floor(.15 * aG4), aG1 = Math.floor(.35 * vV), aG2 = Math.floor(.5 * vV), aG3 = Math.floor(2.5 * aG2), k = vV + aG1 + 3 * aG2, a92 = bD.sP.uA(1,
			aG1 / i.l), aG5 = Math.floor(i.l * aR.measureText(a6d, a92)), aG7 = j = (aG4 < aG5 ? aG5 : aG4) + 2 * aG3, j = Math.min(j, i.j - 2 * (a1.a2.il() ? 2 : 1) * bf.gap), a92 = bD.sP.uA(1, j / aG7 * aG1 / i.l), aG5 = Math.floor(i
			.l * aR.measureText(a6d, a92)), fh = Math.floor((i.j - j) / 2), fj = Math.floor((i.k - k) / 2), a3m.style.font = a92, a3m.style.top = Math.floor((fj + 1.4 * aG2 + vV) / i.l) + "px", a3m.style.left = Math.floor((fh + (j -
			aG5) / 2) / i.l) + "px")
	}, this.xy = function() {
		this.iM && (xz.fillStyle = bE.pO, xz.fillRect(fh, fj + vV, j, k - vV), xz.fillStyle = bE.qc, xz.fillRect(fh, fj, j, vV), xz.fillStyle = bE.pR, xz.lineWidth = bf.a2K, xz.strokeStyle = bE.pR, xz.strokeRect(fh, fj, j, k), xz.fillRect(fh,
			fj + vV, j, bf.a2K), xz.font = bD.sP.uA(1, .48 * vV), bD.sP.textAlign(xz, 1), bD.sP.textBaseline(xz, 1), xz.fillText(L(135), Math.floor(fh + (j - .5 * vV) / 2), Math.floor(fj + .55 * vV)), aN.a9E(Math.floor(fh + j - .8 * vV),
			Math.floor(fj + .25 * vV), Math.floor(.5 * vV)), xz.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dp() {
	var gap, aES, fh = [0, 0, 0, 0, 0],
		fj = [0, 0, 0, 0, 0],
		oA = [1, 1, 1, 1, 1],
		g2 = [!0, !0, !0, !1, !1],
		ek = (this.gN = [!0, !0, !0, !1, !1], null);
	this.aG8 = function(a6B, aG9) {
		ek = a6B, g2 = aG9, aES = [bN.aGA, bN.a4R, bN.aGB, bN.aGB, bN.aGC], this.dk()
	}, this.dk = function() {
		if (ac.v2()) {
			var aC, uh = Math.floor((a1.a2.il() ? .261 : .195) * i.im),
				ui = Math.floor(.9 * uh),
				aBv = Math.floor(.17 * ui);
			if (gap = a1.a2.il() ? 2 * bf.gap : bf.gap, oA[0] = uh / ek[0].width, oA[1] = ui / ek[1].width, oA[2] = aBv / ek[2].height, oA[3] = aBv / ek[3].height, oA[4] = aBv / ek[4].height, oA[2] *= 1.7, oA[3] *= 1.07, fh[0] = gap, fh[1] = gap,
				fh[2] = gap, fh[3] = gap, fh[4] = Math.floor(2 * gap + oA[3] * ek[3].width), fj[0] = gap, fj[1] = fj[0] + gap + oA[0] * ek[0].height, fj[2] = fj[1] + gap + oA[1] * ek[1].height, fj[3] = fj[2] + gap + oA[2] * ek[2].height, fj[4] =
				fj[3], !g2[0])
				for (aC = 0; aC < 5; aC++) fj[aC] -= oA[0] * ek[0].height + gap;
			if (!g2[1])
				for (aC = 2; aC < 5; aC++) fj[aC] -= oA[1] * ek[1].height + gap
		}
	}, this.iM = function() {
		return !(7 === ab.a4V() && a1.a2.il())
	}, this.hn = function(iu, iv) {
		if (ek && this.iM())
			for (var aC = g2.length - 1; 0 <= aC; aC--)
				if (g2[aC] && this.gN[aC] && fh[aC] < iu && fj[aC] < iv && iu < fh[aC] + oA[aC] * ek[aC].width && iv < fj[aC] + oA[aC] * ek[aC].height) return u.v(9, u.uc, new aGD(L(136), bD.sP.a6c(aES[aC]))), !0;
		return !1
	}, this.xy = function() {
		if (ek && this.iM()) {
			var aC;
			for (xz.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) g2[aC] && this.gN[aC] && (xz.setTransform(oA[aC], 0, 0, oA[aC], fh[aC], fj[aC]), xz.drawImage(ek[aC], 0, 0));
			xz.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dd() {
	this.aGE = 0, this.aGF = null, this.wh = null, this.sK = null, this.lk = null, this.z = null, this.xA = null, this.wf = null, this.message = null, this.aGG = null, this.tZ = null, this.aGH = null, this.aGI = new aGJ, this.wF = new aGK, this.f7 =
		0, this.aCp = 0, this.dk = function() {
			this.aCp = bi.ea, this.aGE = bJ.f1.f2(bm.buffer.data[105].value, 5), this.wh = new aGL, this.sK = new aGM, this.lk = new aGN, this.z = new aGO, this.xA = new aGP, this.wf = new aGQ, this.message = new aGR, this.aGG = new aGS, this.tZ =
				new aGT, this.aGH = new aGU, bs.dk(), this.f7 = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.f5()
		}, this.x4 = function() {
			this.wF.aGV(), this.tZ && this.tZ.x4(), this.aGF = null, this.wh = null, this.sK = null, this.lk = null, this.z = null, this.xA = null, this.wf = null, this.message = null, this.aGG = null, this.tZ = null, this.aGH = null, this.f7 = 0, bs
				.x4(), a1.a2.setState(0)
		}
}

function aGL() {
	function aGX() {
		bq.z.aGY += 29 === u.uc && 1 === bq.z.aGZ
	}
	this.w4 = [], this.aGW = [], this.aGa = function(ua, username, wu, a75, aGb, elo, color, zB, aGc, code, wk) {
		username = this.aGe(ua, username, wu, a75, aGb, elo, color, zB, aGc, code);
		username.wk = wk, this.w4.push(username), bq.aGE === ua && (bq.aGF = username), bq.aGH.aGf(ua) && (username.ww = 1), aGX()
	}, this.aGe = function(ua, username, wu, a75, aGb, elo, color, zB, aGc, code) {
		return {
			ua: ua,
			username: code ? __fx.nameFilter.filter(username) : "Player " + bI.f1.a2b(ua, 2),
			aGg: __fx.nameFilter.filter(username),
			wu: wu,
			a75: a75,
			aGb: aGb,
			elo: elo,
			color: color,
			zB: zB,
			aGc: aGc
		}
	}, this.aGh = function(eJ, wu, a75, aGb, elo, zB, color) {
		eJ = this.w4[eJ];
		eJ.wu = wu, eJ.a75 = a75, eJ.aGb = aGb, eJ.elo = elo, eJ.zB = zB, eJ.color = color, aGX()
	}, this.aGi = function(eJ, code) {
		eJ = this.w4[eJ];
		1 === code && (eJ.username = eJ.aGg), aGX()
	}, this.aGj = function(eJ, aGk) {
		var eJ = this.w4[eJ],
			aGl = eJ.username,
			aC8 = eJ.username !== eJ.aGg,
			aGm = "Redacted " + bI.f1.a2b(eJ.ua, 2);
		eJ.aGg = aGk ? "[" + bD.tN.a45(eJ.aGg) + "] " + aGm : aGm, aC8 || (eJ.username = eJ.aGg), aGl.indexOf("Redacted") < 0 && (eJ.aGn = aGl), bq.tZ.aGo(eJ.ua), aGX()
	}, this.aGp = function(eJ) {
		this.aGW.push(this.w4.splice(eJ, 1)[0]), 1e3 < this.aGW.length && this.aGW.shift(), aGX()
	}, this.aGq = function(eJ, target, wk) {
		var w4 = this.w4,
			eJ = w4.splice(eJ, 1)[0];
		w4.splice(target, 0, eJ), !eJ.wk && wk && bq.aGH.join(eJ), eJ.wk = wk, aGX()
	}, this.aGr = function(wk) {
		for (var w4 = this.w4, fa = w4.length, aC = 0; aC < fa; aC++)
			if (w4[aC].wk === wk) return aC;
		return fa
	}, this.aGs = function(kB, h3) {
		this.w4.splice(kB, h3), aGX()
	}, this.aGt = function(wk) {
		for (var w4 = this.w4, aGu = 0; aGu < w4.length && w4[aGu].wk === wk;) aGu++;
		for (var left = w4.splice(0, aGu), aC = 0; aC < aGu; aC++) left[aC].wk = 0, w4.push(left[aC]);
		aGX()
	}, this.aGv = function(ua) {
		for (var w4 = this.w4, lq = w4.length, ft = 0; ft < lq; ft++)
			if (ua === w4[ft].ua) return w4[ft];
		return null
	}
}

function aGM() {
	this.sK = [];
	var aGw = this.wI = 0,
		aGx = 0;
	this.aGy = function() {
		for (var self, fa = bK.rX(4), sK = new Array(fa), aC = 0; aC < fa; aC++) sK[aC] = {
			id: bK.rX(13),
			wN: bK.rX(12),
			h3: bK.rX(16),
			nS: bK.rX(10),
			fG: bK.rX(6),
			mapSeed: bK.rX(14),
			w2: bK.rX(4),
			wR: bK.rX(1)
		};
		this.sK = sK, __fx.lobbyReminders.setRooms(this.sK), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aH0({
				id: 7,
				s: text
			})
		}), !(self = this).wI || 0 <= self.wj(self.wI) || (self.wI = 0, bq.message.aH0({
			id: 7,
			s: L(137)
		}))
	}, this.wj = function(id) {
		for (var sK = this.sK, aC = sK.length - 1; 0 <= aC; aC--)
			if (sK[aC].id === id) return aC;
		return -1
	}, this.aH1 = function() {
		return 1 === aGw
	}, this.aH2 = function(id) {
		return 0 < id && 0 < this.sK.length && this.sK[0].id === id
	}, this.aH3 = function() {
		return this.aH2(this.wI)
	}, this.click = function(eJ) {
		eJ = this.sK[eJ];
		eJ && this.select(eJ.id === this.wI ? 0 : eJ.id)
	}, this.select = function(id) {
		this.wI = id, aGw = 1, aGx++, b1.aH4.aH5(4, id), u.a8P(29).aH6()
	}, this.aH7 = function(id) {
		0 === (aGx = Math.max(aGx - 1, 0)) && (this.wI = id)
	}, this.wL = function(w2) {
		return w2 < 7 ? w2 + 2 + " Teams" : 7 === w2 ? "Battle Royale" : 8 === w2 ? "1v1" : 9 === w2 ? "Zombie" : "No Full-Sending"
	}, this.wO = function(wH) {
		return wH.nS < (9 === wH.w2 ? 333 : 512)
	}, this.wM = function(wN) {
		var aAY = wN % 60;
		return bO.g1(wN, 60) + ":" + (aAY < 10 ? "0" : "") + aAY
	}
}

function aGU() {
	var aH8 = [],
		aH9 = [],
		aHA = 0;

	function aHB(h, aA6, aHE, aHF) {
		var fa = h.length;
		if (0 === fa) return "";
		var s6 = "@" + h[0];
		if (1 === fa) return s6 + aA6 + aHF;
		for (var aC = 1; aC < fa - 1; aC++) s6 += ", @" + h[aC];
		return s6 + " and @" + h[fa - 1] + aHE + aHF
	}
	this.dk = function() {
		var s6 = aHB(aH9, " is", " are", " in the lobby.");
		s6.length && bq.message.aH0({
			id: 7,
			s: s6
		}), aH8 = [], aH9 = [], aHA = 0
	}, this.aGf = function(aHC) {
		return bq.aGE !== aHC && (aHC = bI.f1.a2b(aHC, 5), !!bm.yM.ww(aHC)) && (aH9.push(aHC), !0)
	}, this.join = function(player) {
		bq.aGE !== player.ua && (player = bI.f1.a2b(player.ua, 5), bm.yM.ww(player)) && aH8.push(player)
	}, this.aHD = function() {
		var aA6, aHE;
		++aHA < 3 || (aHA = 0, aA6 = aHB(aH9, "", "", " entered the lobby!"), (aA6 = (aHE = aHB(aH8, "", "", " joined a game!")).length ? aA6.length ? aA6 + " " + aHE : aHE : aA6).length && bq.message.aH0({
			id: 7,
			s: aA6
		}), aH8 = [], aH9 = [])
	}
}

function aGJ() {
	this.dt = function(kB, aHG) {
		var h9, aGI = bq.z.aGI,
			kB = bq.wh.w4.slice(kB, kB + aHG),
			aHG = function(aHH) {
				if (__fx.customLobby.isActive()) return bq.aGF ? __fx.customLobby.getPlayerId() : -1;
				if (bq.aGF && bq.sK.aH1())
					for (var fa = aHH.length, ua = bq.aGF.ua, aC = 0; aC < fa; aC++)
						if (aHH[aC].ua === ua) return aC;
				return -1
			}(kB);
		return -1 === aHG ? (bq.wh.aGW = bq.wh.aGW.concat(kB), 1e3 < bq.wh.aGW.length && bq.wh.aGW.splice(0, bq.wh.aGW.length - 1e3), bq.z.aGY += 29 === u.uc && 1 === bq.z.aGZ, !1) : (8 === aGI.w2 && (aGI.aHK = (aGI.aHK + (aHG >> 1)) % 1024, 0 <=
			aGI.a3k && (aGI.a3k += aHG >> 1), h9 = aHG - aHG % 2, aHG %= 2, kB = kB.slice(h9, 2 + h9)), ay.dk(aGI, kB, aHG), !0)
	}, this.aHL = function(aGI, aHH, aHI) {
		var fd = aE.data = new a7p,
			aHO = (fd.spawningSeed = aGI.spawningSeed, aGI.w2 < 7 ? (fd.gameMode = 1, fd.numberTeams = aGI.w2 + 2) : 9 === aGI.w2 ? (fd.gameMode = fd.isZombieMode = 1, fd.numberTeams = 2) : (fd.gameMode = 0, fd.battleRoyaleMode = 7 === aGI.w2 ?
				0 : 10 === aGI.w2 ? 1 : 2), fd.selectedPlayer = aHI, fd.isContest = aGI.wR, fd.mapType = bV.aHM(aGI.fG) ? 0 : 1, bV.aHN(fd, aGI.fG), fd.mapSeed = aGI.mapSeed, fd.humanCount = aHH.length);
		fd.selectableSpawn = 1 === fd.gameMode || aHO < 100, fd.colorsData = new Uint32Array(aHO), fd.playerNamesData = new Array(aHO), fd.a8D = new Uint32Array(aHO);
		for (var aC = 0; aC < aHO; aC++) fd.colorsData[aC] = aHH[aC].color, fd.playerNamesData[aC] = aHH[aC].username, fd.a8D[aC] = aHH[aC].ua;
		if (2 === fd.battleRoyaleMode)
			for (fd.elo = new Uint16Array(aHO), aC = 0; aC < aHO; aC++) fd.elo[aC] = aHH[aC].elo;
		bw.close(), ab.setState(8), bV.a8(aGI.fG, fd.mapSeed), aE.a7u(), aE.a3k = aGI.a3k, aE.a7s = 2
	}
}

function aGN() {
	var eA = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aHP = [bE.pf, bE.pf, bE.pg, bE.qB, bE.qC, bE.pw, bE.qH, bE.pg, bE.qe, bE.qS, bE.qb, bE.pI],
		aHQ = [
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
		aHR = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aHf(tQ, ua, aHh) {
		for (var fu = tQ.length - 1; 0 <= fu; fu--) {
			var sH = tQ[fu];
			0 === sH.id && sH.ua === ua && (sH.s = "[Redacted Message]", aHh) && (sH.aHi = 1)
		}
	}
	this.tV = function(aHS) {
		var aHT, a46;
		return aHS.id < 5 && (aHT = "@" + bI.f1.a2b(aHS.ua, 5)), 0 === aHS.id ? aHT + ": " + aHS.s : 1 === aHS.id ? (a46 = "@" + bI.f1.a2b(aHS.target, 5), 0 === aHS.aHU ? 32768 <= aHS.value ? aHT + " voted with " + (aHS.value - 32768 + 1) +
				" gold against " + a46 + " to weaken the latter's admin position. 📉" : aHT + " voted with " + (aHS.value + 1) + " gold for " + a46 + " to strengthen the latter's admin position. 💪" : 1 === aHS.aHU ? aHT + " sent " + Math.floor(
					aHS.value / 100) + " 🧈 gold to " + a46 + "." : aHT + " voted with " + (aHS.value / 10).toFixed(1) + " points for " + a46 + " to acknowledge the latter as clan leader. ✅") : 2 === aHS.id ? 0 === aHS.aHU ? aHT +
			" was 🔇 muted for 1 Hour." : 1 === aHS.aHU ? "The username of " + aHT + " was ✂️ redacted. Duration: 1 Day" : aHT + " 👢 was kicked." : 3 === aHS.id ? aHT + br.eM(aHS.aHU, br.eG[aHS.aHU][aHS.value]) + "@" + bI.f1.a2b(aHS.target, 5) +
			br.eO(aHS.aHU, br.eG[aHS.aHU][aHS.value]) : 4 === aHS.id ? aHT + br.eM(5, br.eG[5][aHS.aHU]) + "@" + bI.f1.a2b(aHS.target, 5) + br.eO(5, br.eG[5][aHS.aHU]) : 5 === aHS.id ? aHR[aHS.aHU] : 6 === aHS.id ? "You are about to mention " +
			aHS.value + " player" + (1 === aHS.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aHS.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aHS.id ? aHS.s : void 0
	}, this.tU = function(aHS, aHV) {
		return {
			aHS: aHS,
			s: aHV,
			aHW: 0,
			fontSize: 1,
			tY: 0,
			aHX: aHS.id ? bE.qA : bE.pR
		}
	}, this.ws = function(player, wr) {
		return (wr ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.wt = function(wu) {
		return aHP[wu]
	}, this.aHY = function(wu, a75) {
		return wu < 3 || 7 === wu ? aHQ[wu][0] : 4 === wu ? aHQ[wu][a75 < 1 ? 0 : a75 < 10 ? 1 : 2] : aHQ[wu][a75 < 10 ? 0 : 1]
	}, this.aHZ = function(a75) {
		return 0 === a75
	}, this.wv = function(sH) {
		return !!bq.aGF && sH.ua === bq.aGF.ua
	}, this.aHa = function(wh, aHb, aHc) {
		var a43 = [];
		loop: for (var aC = aHb; aC < aHc; aC++) {
			var a44 = bD.tN.a45(wh[aC].username);
			if (a44) {
				for (var fu = a43.length - 1; 0 <= fu; fu--)
					if (a44 === a43[fu].name) {
						a43[fu].h3++;
						continue loop
					} a43.push({
					name: a44,
					h3: 1
				})
			}
		}
		if (a43.sort(function(ft, fu) {
				return fu.h3 - ft.h3
			}), 0 === a43.length) return "";
		for (var s6 = a43[0].name + ": " + a43[0].h3, aC = 1; aC < a43.length; aC++) s6 += "   " + a43[aC].name + ": " + a43[aC].h3;
		return s6
	}, this.aHd = function(wu, a75, aGb) {
		return 0 === eA[wu].length ? "Rank: " + (a75 + 1) : eA[wu] + " Rank: " + (a75 + 1) + (3 !== wu && aGb < 100 ? "   " + eA[3] + " Rank: " + (aGb + 1) : "")
	}, this.aHe = function(ua) {
		aHf(bq.z.tQ, ua), aHf(bq.message.aHg(), ua, 1), bq.tZ.aHe(ua)
	}
}

function aGQ() {
	var u2 = 0,
		aHj = 0,
		aHk = 0,
		aHl = null,
		aHm = null;

	function aHp(sH, aHq, aHr) {
		var s6 = sH.username;
		return (s6 += "   " + bq.lk.aHd(sH.wu, sH.a75, sH.aGb)) + function(sH) {
			sH = sH.zB;
			if (sH < 1e3) return "   Gold: " + sH;
			if ((sH %= 1024) < 1e3) return "   Gold: " + sH + "k";
			return "   Gold: " + (sH - 999) + "M"
		}(sH) + ("   IP: " + bI.f1.a2b(sH.aGc, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aHr ? aHj : aHo(sH, aHq)])
	}

	function aHo(sH, aHq) {
		return aHj = aHq || bq.wh.aGv(sH.ua) ? 1 : 0
	}
	this.wg = 0, this.aHn = function() {
		!u2 || aHj === aHo(aHm) && aHk === aHm.zB || (aHk = aHm.zB, aHl.show(-1, -1, aHp(aHm, 0, 1), 1, 1, aHm.color))
	}, this.wx = function(e, sH, aHq) {
		var aC2 = e.getBoundingClientRect();
		this.show(aC2.left, aC2.top, sH, 0, aHq), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.wf && bq.wf.ta(1)
		}), this.wg = aHq
	}, this.show = function(fh, fj, sH, u6, aHq) {
		aHl = aHl || new tz, aHk = (aHm = sH).zB, aHl.show(fh, fj, aHp(sH, aHq), u6, 0, aHm.color), u2 = 1
	}, this.ta = function(uD) {
		this.wg = 0, aHl && aHl.ta(uD) && (u2 = 0, aHm = null)
	}
}

function aGO() {
	function aHv() {
		var fG, mapSeed;
		u.a8P(29) && (bq.z.aGY && 1 === bq.z.aGZ && u.a8P(29).aHx(), bq.z.aGY = 0, u.a8P(29).aHy(), fG = bV.fG, mapSeed = bV.mapSeed, u.a8P(29).aHz(), fG === bV.fG && mapSeed === bV.mapSeed || bq.wF.aI0(), bq.wf.aHn())
	}
	this.vQ = 0, this.aGZ = 2, this.aGI = {
		fG: 0,
		mapSeed: 0,
		w2: 0,
		wR: 0,
		spawningSeed: 0,
		a3k: -1,
		a4d: 0,
		aHK: 0
	}, this.tQ = [], this.tR = 1048575, this.aGY = 0, this.aHt = [0, 0], this.aHu = function() {
		aHv(), bq.aGH.dk(), __fx.lobbyReminders.check()
	}, this.aHD = function() {
		bq.aGH.aHD(), aHv(), __fx.lobbyReminders.check()
	}, this.aI1 = function() {
		0 === this.aGZ && u.a8P(29).aI2()
	}
}

function aGK() {
	var aI3 = 256,
		aI4 = 18,
		aI5 = [],
		aI8 = 0;

	function ya(key, aIA, fh, fj, wY) {
		var canvas = document.createElement("canvas"),
			ox = (canvas.width = canvas.height = aI3, canvas.getContext("2d", {
				alpha: !1
			})),
			ox = (ox.imageSmoothingEnabled = !0, ox.drawImage(aIA, fh, fj, wY, wY, 0, 0, aI3, aI3), {
				key: key,
				canvas: canvas,
				iM: 0
			});
		return aI5.push(ox), aI5.length > aI4 && function(aIG) {
			for (var fa = aI5.length, aC = 0; aC < fa; aC++) {
				var h8 = aI5[aC];
				if (!h8.iM && h8 !== aIG) return h8.canvas.width = h8.canvas.height = 0, aI5.splice(aC, 1)
			}
		}(ox), ox
	}
	this.wG = function(fG, mapSeed) {
		return fG + "_" + (bV.aI9(fG) ? mapSeed : 0)
	}, this.wW = function(fG, mapSeed) {
		for (var key = this.wG(fG, mapSeed), aIA = null, aC = aI5.length - 1; 0 <= aC; aC--) {
			var h8 = aI5[aC];
			if (h8.key === key) {
				if (!h8.iM) return h8.iM = 1, aI5.splice(aC, 1), aI5.push(h8), h8.canvas;
				aIA = h8
			}
		}
		return aIA ? ((fG = ya(key, aIA.canvas, 0, 0, aI3)).iM = 1, fG.canvas) : null
	}, this.wX = function(canvas) {
		for (var aC = aI5.length - 1; 0 <= aC; aC--)
			if (aI5[aC].canvas === canvas) {
				aI5[aC].iM = 0;
				break
			} canvas.parentNode && u.removeChild(canvas.parentNode, canvas)
	}, this.aGV = function() {
		for (var aC = aI5.length - 1; 0 <= aC; aC--) this.wX(aI5[aC].canvas)
	}, this.ef = function() {
		if (bq.f7 && !(bi.ea < aI8)) {
			for (var self, fG, mapSeed, eb, sK = bq.sK.sK, fa = sK.length, aC = 0; aC < fa; aC++)
				if (! function(key) {
						for (var aC = aI5.length - 1; 0 <= aC; aC--)
							if (aI5[aC].key === key) return 1;
						return
					}(this.wG(sK[aC].fG, sK[aC].mapSeed))) return self = this, fG = sK[aC].fG, mapSeed = sK[aC].mapSeed, eb = void 0, eb = performance.now(),
					function(self, fG, mapSeed) {
						var aIA = bV.aIE(fG, mapSeed),
							wY = Math.min(aIA.width, aIA.height);
						ya(self.wG(fG, mapSeed), aIA, aIA.width - wY >> 1, aIA.height - wY >> 1, wY), aIA !== bV.zt && (aIA.width = aIA.height = 0)
					}(self, fG, mapSeed), u.a8P(29).aH6(), self = performance.now(), void(aI8 = self + Math.max(Math.min(self - eb, 500), 200));
			aI8 = bi.ea + 200
		}
	}, this.aI0 = function() {
		aI8 = performance.now() + 200
	}
}

function aGS() {
	var aIH = 0,
		aII = "",
		aIJ = 0,
		aIK = 0;

	function aIM(aHV) {
		b1.aH4.aH5(3, aHV)
	}

	function aIU(h3) {
		aIH = 1, bq.message.aH0({
			id: 6,
			value: h3
		})
	}

	function aIP(s) {
		var aIX = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aIX)
	}
	this.a3M = function(s) {
		var aIL, h, aIQ;
		if (aIH) return aIH = 0, "yes" === (aIL = s.toLowerCase()) || "y" === aIL ? void aIM(aII) : void bq.message.aH0({
			id: 5,
			aHU: 7
		});
		!(s.indexOf("@") < 0) && (aIL = aIP(s)) ? (aII = s, h = bq.wh.w4.slice(), function(aIO, aIQ, s) {
			if (!aIJ) return;
			for (var fa = aIQ.length, aC = 0; aC < fa; aC++) 2 === aIQ[aC].id && (s = s.replace(aIO[aIQ[aC].eJ], "@" + aIQ[aC].g2));
			return aIH = 1, aIM((aII = s).slice(0, 126) + "|"), 1
		}(aIL, aIQ = function(aIO) {
			for (var aIQ = [], fa = (aIK = aIJ = 0, aIO.length), aC = 0; aC < fa; aC++) {
				var j = aIO[aC],
					lq = j.length;
				bD.tN.startsWith(j, "@[") ? lq <= 9 && bD.tN.a6f(j, "]") && aIQ.push({
					id: 0,
					g2: j.substring(2, lq - 1).toUpperCase()
				}) : 6 === lq ? (aIK++, aIQ.push({
					id: 1,
					g2: bJ.f1.f2(j.substring(1), 5)
				})) : 1 < lq && lq < 5 && 0 <= (lq = bA.data.aFt(j.substring(1))) && (aIQ.push({
					id: 2,
					g2: lq,
					eJ: aC
				}), aIJ = 1)
			}
			return aIQ
		}(aIL), s) || (0 === aIQ.length ? ! function(aIO) {
			for (var fa = aIO.length, aC = 0; aC < fa; aC++) {
				var j = aIO[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return
		}(aIL) ? aIM(s) : aIU(h.length) : aIL.length === aIK ? aIM(s) : (function(h, aIQ) {
			var lq = aIQ.length;
			if (0 === lq) return;
			var fa = h.length;
			loop: for (var aC = fa - 1; 0 <= aC; aC--) {
				for (var ft = 0; ft < lq; ft++)
					if (0 === aIQ[ft].id) {
						if (aIQ[ft].g2 === bD.tN.a45(h[aC].username)) continue loop
					} else if (1 === aIQ[ft].id && aIQ[ft].g2 === h[aC].ua) continue loop;
				h[aC] = h[--fa], h.pop()
			}
		}(h, aIQ), aIU(h.length)))) : aIM(s)
	}, this.aIY = function(s) {
		var aIO = aIP(s);
		if (aIO)
			for (var a6 = new RegExp("^[0-9]+$"), fa = aIO.length, aC = 0; aC < fa; aC++) {
				var j = aIO[aC].substring(1),
					lq = j.length;
				1 <= lq && lq <= 3 && a6.test(j) && (lq = parseInt(j, 10), !isNaN(lq)) && 0 <= lq && lq < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[lq]))
			}
		return s
	}
}

function aGR() {
	var aIZ, aIa = [],
		aIb = -1,
		aIc = 0,
		aId = 0;

	function aIi() {
		aIc = bi.ea, (3 === this.x1 ? aIh : (aIb = (aIa.length + aIb + 2 * this.x1 - 1) % aIa.length, aIg))()
	}

	function aIg() {
		0 !== aIa.length && (aId = 0, aIZ && aIZ.x4(), (aIZ = new wy(aIi)).qu(aIb, aIa.length), aIZ.show(aIa[aIb]), bq.message.resize())
	}

	function aIh() {
		aId = 1, aIZ && aIZ.x4(), (aIZ = new x5(aIg)).qu(aIa.length), aIZ.show(), bq.message.resize()
	}
	this.aH0 = function(aHS) {
		var sH;
		2 === aHS.id && 3 === aHS.aHU ? bq.lk.aHe(aHS.ua) : (sH = bq.lk.tU(aHS, bq.lk.tV(aHS)), (5 !== aHS.id && 6 !== aHS.id || (u.a8P(29).aIe().tX(sH), 5 === aHS.id)) && (sH = bi.ea < aIc + 2e4, aIb !== aIa.length - 1 && sH || (aIb = aIa
			.length), __fx.pingFilter.isMuted(aHS, "s") || (aIa.push(aHS), bm.buffer.data[14].value || 7 === aHS.id || bs.play(), aIZ && (aId && (bm.buffer.data[13].value || sH) ? aIZ.qu(aIa.length) : aIg()))))
	}, this.show = function() {
		aIh()
	}, this.ta = function() {
		aIb = aIa.length - 1, aIZ && aIZ.x4(), aIZ = null
	}, this.resize = function() {
		aIZ && aIZ.resize()
	}, this.aHg = function() {
		return aIa
	}
}

function aGP() {
	var aIj = null,
		aIk = null,
		aIl = 0,
		aIm = 0,
		aIn = null;

	function aIp() {
		0 !== aIk.wu && (bq.xA.ta(), u.v(8, 29, new ud(25, {
			action: 0,
			ua: bI.f1.a2b(aIk.ua, 5),
			ub: 0
		}, 29)))
	}

	function aIr() {
		return !bq.aGF || bq.lk.wv(aIk) ? 1 : 0
	}

	function aIq() {
		var fh = aIj.fh,
			fj = aIj.fj,
			aIx = (bq.xA.ta(), aIr());
		aIj = new x6([new x(br.eG[5][0], function() {
			aIu(5, 0)
		}, aIx), new x(br.eG[5][1], function() {
			aIu(5, 1)
		}, aIx), new x(br.eG[5][2], function() {
			aIu(5, 2)
		}, aIx), new x(br.eG[5][3], function() {
			aIu(5, 3)
		}, aIx)]), aIt(fh, fj), aIm = aIl = 2
	}

	function aIs() {
		29 === u.uc && u.a4Z().aGG(bI.f1.a2b(aIk.ua, 5))
	}

	function aIu(id, value) {
		5 === id && b1.aIy.aIz({
			action: 3,
			ua: bI.f1.a2b(aIk.ua, 5),
			value: value
		})
	}

	function aIt(fh, fj, xC) {
		aIj.show(fh, fj, xC), bq.wf.show(aIj.fh, aIj.fj, aIk, 1)
	}
	this.aIo = function(e, sH) {
		aIl = 1, aIk = sH, aIj = new x6([new x(L(138), aIp, 0 === sH.wu ? 1 : 0), new x(L(139), aIq, aIr()), new x(L(140), aIs, 0)]), aIt((aIn = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aIn.clientY, 1)
	}, this.a5Q = function(code) {
		if (29 !== u.uc) return !1;
		if (!aIk) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.ta();
			else if (bD.tN.startsWith(code, "Numpad") || bD.tN.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aIl) this.aIo(aIn, aIk);
				else {
					if (!aIj) return !1;
					1 === aIl ? code <= 1 ? aIp() : 2 === code ? aIq() : (aIs(), this.ta()) : (aIu(aIm, bO.ik(code - 1, 0, br.eG[aIm].length - 1)), this.ta())
				}
		}
		return !0
	}, this.ta = function() {
		aIl = 0, aIj && aIj.ta(), aIj = null, bq.wf.ta()
	}
}

function aGT() {
	var aJ4 = [],
		un = [],
		aJ5 = [];

	function aJ7(sH) {
		for (var s = sH.s, aJ6 = [];;) {
			var ek = function aJ9(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var s6 = s.substring(position + 1, position + 6);
				if (5 !== s6.length) return aJ9(s, position + 1);
				var aJG = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aJG.test(s6)) return aJ9(s, position + 1);
				aJG = s.substring(position + 6, position + 7);
				if (1 !== aJG.length) return position;
				s6 = new RegExp("^[ :!.]+$");
				if (!s6.test(aJG)) return aJ9(s, position + 1);
				return position
			}(s, 0);
			if (-1 === ek) {
				aJ6.push(aJA(s, sH));
				break
			}
			0 === ek ? aJ6.push(aJB(s.substring(1, 6), sH, ek)) : (aJ6.push(aJA(s.substring(0, ek), sH)), aJ6.push(aJB(s.substring(ek + 1, ek + 6), sH, ek))), s = s.substring(ek + 6)
		}
		return aJ6
	}

	function aJB(s6, sH, ek) {
		var aGd = function(s6) {
				var ua = bJ.f1.f2(s6, 5),
					aGd = bq.wh.aGv(ua);
				if (aGd) {
					for (aJ4.push(aGd); 75 < aJ4.length;) aJ4.shift();
					return aGd
				}
				for (var aGW = bq.wh.aGW, aC = aGW.length - 1; 0 <= aC; aC--)
					if (aGd = aGW[aC], ua === aGd.ua) return aJ4.push(aGd), aGd;
				for (aC = aJ4.length - 1; 0 <= aC; aC--)
					if (aGd = aJ4[aC], ua === aGd.ua) return aJ4.push(aGd), aGd;
				return bq.wh.aGe(ua, s6, 1, 999999, 999999, 0, 0, 0, 0, 1)
			}(s6),
			s6 = (0 === ek && 0 === sH.aHS.id && sH.tY && (sH.fontSize = bq.lk.aHY(aGd.wu, aGd.a75), sH.aHW = bq.lk.aHZ(aGd.a75)), document.createElement("span"));
		return s6.textContent = function(aGd, sH, ek) {
				if (aGd.aJE) return aGd.aJE--, ek = 2 === sH.aHS.id || (3 === sH.aHS.id || 4 === sH.aHS.id) && 0 !== ek, aGd.username + (ek ? " (" + aGd.aGn + ")" : "");
				if (sH.aHS.aHi) return "Redacted " + bI.f1.a2b(aGd.ua, 2);
				return aGd.username
			}(aGd, sH, ek), s6.style.display = "inline-block", s6.style.color = bq.lk.wt(aGd.wu), 11 === aGd.wu && (s6.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray"), s6.style.cursor =
			"pointer", s6.style.margin = "0", s6.style.font = "inherit", s6.style.minWidth = s6.style.minHeight = "1em", bq.lk.wv(aGd) && (s6.style.textDecoration = "underline"), aGd.ww && (s6.style.textDecorationLine = "underline", s6.style
				.textDecorationStyle = "dotted"), bq.lk.aHZ(aGd.a75) && (s6.style.fontWeight = "bold"), s6.onclick = function(e) {
				bq.xA.aIo(e, aGd)
			}, bM.sr() || (s6.onmouseover = function(e) {
				bq.wf.wx(e.target, aGd)
			}), un.push(s6), s6
	}

	function aJA(s, sH) {
		var tM = document.createElement("span");
		return tM.textContent = s, tM.style.color = sH.aHX, tM.style.margin = "0", tM.style.font = "inherit", tM
	}

	function aJL(aGd, aGm, ua) {
		ua !== aGd.ua || aGd.aGn || (aGd.aGn = aGd.username, aGd.username = aGm)
	}
	this.x4 = function() {
		for (var aC = 0; aC < un.length; aC++) un[aC].onclick = un[aC].onmouseover = null;
		aJ5 = un = null
	}, this.transform = function(sH) {
		for (var s4 = document.createElement("div"), aJ6 = aJ7(sH), aC = 0; aC < aJ6.length; aC++) s4.appendChild(aJ6[aC]);
		0 === sH.aHS.id && (s4.vx143 = sH.aHS, aJ5.push(s4)), s4.style.margin = "0.6em 0.6em", sH.tY && (s4.style.marginLeft = s4.style.marginRight = "inherit"), s4.style.font = "inherit";
		var aJ8 = 0 < sH.aHS.id;
		return sH.aHW && (s4.style.fontWeight = "bold"), aJ8 && (s4.style.paddingLeft = "0.7em"), aJ8 && (s4.style.fontStyle = "italic"), s4.style.fontSize = sH.fontSize.toFixed(2) + "em", s4
	}, this.aJJ = function(aJK) {
		if (aJK && (2 === aJK.id && 1 === aJK.aHU || 3 === aJK.id && 2 === aJK.aHU)) {
			var ua = 3 === aJK.id ? aJK.target : aJK.ua;
			if (!bq.wh.aGv(ua)) {
				for (var aGm = "Redacted " + bI.f1.a2b(ua, 2), aGW = bq.wh.aGW, aC = aGW.length - 1; 0 <= aC; aC--) aJL(aGW[aC], aGm, ua);
				for (aC = aJ4.length - 1; 0 <= aC; aC--) aJL(aJ4[aC], aGm, ua)
			}
		}
	}, this.aGo = function(ua) {
		for (var aJM = aJ5, aJN = "@" + bI.f1.a2b(ua, 5), aC = aJM.length - 1; 0 <= aC; aC--) {
			var fd = aJM[aC];
			if (fd.vx143.ua === ua || 0 <= fd.vx143.s.indexOf(aJN)) {
				for (; fd.firstChild;) u.removeChild(fd, fd.firstChild);
				for (var aJ6 = aJ7(bq.lk.tU(fd.vx143, bq.lk.tV(fd.vx143))), ft = 0; ft < aJ6.length; ft++) fd.appendChild(aJ6[ft]);
				aJM.splice(aC, 1)
			}
		}
	}, this.aHe = function(ua) {
		for (var aJM = aJ5, aC = aJM.length - 1; 0 <= aC; aC--) {
			var fd = aJM[aC];
			if (fd.vx143.ua === ua) {
				for (; fd.firstChild;) u.removeChild(fd, fd.firstChild);
				fd.vx143.s = "[Redacted Message]";
				for (var aJ6 = aJ7(bq.lk.tU(fd.vx143, bq.lk.tV(fd.vx143))), ft = 0; ft < aJ6.length; ft++) fd.appendChild(aJ6[ft]);
				aJM.splice(aC, 1)
			}
		}
	}
}

function cT() {
	var aJO, aJP, aJQ;

	function aJV(aC) {
		var button = aZ.p1[aC],
			fh = button.fh,
			fj = button.fj,
			j = button.j,
			k = button.k;
		xz.fillStyle = button.aJT, xz.fillRect(fh, fj, j, k), aC === aJO && (xz.fillStyle = aJQ, xz.fillRect(fh, fj, j, k)), xz.lineWidth = bf.a2K, xz.strokeStyle = aJP, xz.strokeRect(fh, fj, j, k),
			function(button) {
				var fh = button.fh,
					fj = button.fj,
					j = button.j,
					k = button.k;
				bD.sP.textAlign(xz, 1), bD.sP.textBaseline(xz, 1), xz.font = button.font, xz.fillStyle = aJP, xz.fillText(button.aHV, Math.floor(fh + j / 2), Math.floor(fj + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.fj = 0, this.gap = 0, this.dk = function() {
		aJO = -1, aJP = bE.pR, aJQ = "rgba(255,255,255,0.16)", this.p1 = new Array(7), this.k = Math.floor((a1.a2.il() ? .123 : .093) * i.im), this.j = Math.floor((a1.a2.il() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aJR = Math.floor(.26 * this.k),
			aJS = bD.sP.uA(1, aJR);
		this.p1[0] = {
			fh: 0,
			fj: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aHV: "Multiplayer",
			font: aJS,
			aJT: "rgba(22,88,22,0.8)",
			fontSize: aJR
		}, aJR = Math.floor(.18 * this.k), aJS = bD.sP.uA(1, aJR), this.p1[1] = {
			fh: 0,
			fj: 0,
			j: this.j - this.p1[0].j - this.gap,
			k: this.k,
			aHV: "Single Player",
			font: aJS,
			aJT: "rgba(22,88,88,0.8)",
			fontSize: aJR
		}, this.p1[2] = {
			fh: 0,
			fj: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aHV: "",
			font: this.p1[1].font,
			aJT: "rgba(100,0,0,0.8)",
			fontSize: this.p1[1].fontSize
		}, this.p1[3] = {
			fh: 0,
			fj: 0,
			j: this.j,
			k: this.k,
			aHV: "Back",
			font: this.p1[0].font,
			aJT: "rgba(0,0,0,0.8)",
			fontSize: this.p1[0].fontSize
		}, this.p1[4] = {
			fh: 0,
			fj: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aHV: "The game was updated!",
			font: this.p1[1].font,
			aJT: "rgba(100,0,0,0.8)",
			fontSize: this.p1[1].fontSize
		}, this.p1[5] = {
			fh: 0,
			fj: 0,
			j: this.p1[0].j,
			k: Math.floor(.8 * this.k),
			aHV: "Reload",
			font: this.p1[0].font,
			aJT: "rgba(0,100,0,0.8)",
			fontSize: this.p1[0].fontSize
		}, this.p1[6] = {
			fh: 0,
			fj: 0,
			j: this.p1[1].j,
			k: this.p1[5].k,
			aHV: "Back",
			font: this.p1[0].font,
			aJT: "rgba(0,0,0,0.8)",
			fontSize: this.p1[0].fontSize
		}, this.aD1()
	}, this.aD1 = function() {
		this.fj = Math.floor(.54 * i.k), this.p1[0].fh = Math.floor(.5 * i.j - .5 * this.j), this.p1[1].fh = this.p1[0].fh + this.p1[0].j + this.gap, this.p1[2].fh = this.p1[3].fh = this.p1[0].fh, this.p1[4].fh = this.p1[5].fh = this.p1[0].fh,
			this.p1[6].fh = this.p1[1].fh, this.p1[0].fj = Math.floor(.54 * i.k), this.p1[1].fj = this.p1[0].fj, this.p1[2].fj = Math.floor((i.k - this.p1[2].k - this.p1[3].k - this.gap) / 2), this.p1[3].fj = this.p1[2].fj + this.p1[2].k + this
			.gap, this.p1[4].fj = Math.floor((i.k - this.p1[4].k - this.p1[5].k - this.gap) / 2), this.p1[5].fj = this.p1[6].fj = this.p1[4].fj + this.p1[4].k + this.gap
	}, this.aJU = function() {
		aJV(0), aJV(1)
	}, this.aJW = function() {
		aJV(2), aJV(3)
	}, this.aJX = function() {
		aJV(4), aJV(5), aJV(6)
	}, this.a4s = function(fh, fj, nJ) {
		var aC = -1;
		return 0 === ab.a4V() ? aC = this.a5M(fh, fj, 0, 2) : 3 === ab.a4V() ? aC = this.a5M(fh, fj, 3, 1) : 5 === ab.a4V() && (aC = this.a5M(fh, fj, 5, 2)), aJO !== aC && (aJO = aC, nJ) && (bi.ds = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a5M = function(fh, fj, aJY, size) {
		for (var aC = aJY; aC < aJY + size; aC++)
			if (fh >= this.p1[aC].fh && fj >= this.p1[aC].fj && fh <= this.p1[aC].fh + this.p1[aC].j && fj <= this.p1[aC].fj + this.p1[aC].k) return aC;
		return -1
	}
}

function cU() {
	var aJa, aJb, aAd, aJc, aJd, aJe, aJf, aJg, aJh, aAc, aJi, aJj, aJk, aJl = 1,
		aJn = 0;

	function aJq(aJr) {
		aJr ? aJk = (aJk + 1) % b1.z.aJs : (b1.z.close(aJk, 3280), aJl ? aJl = 0 : (aJk = (aJk + 1) % b1.z.aJs, b1.z.close(aJk, 3280))), aJj = bi.ea, aa.aJp = aJn, b1.z.aJt(aJk, 4, 1) && b1.aH4.aJu(aJk)
	}

	function aJv() {
		if (0 !== aJk) return 1 === aJk && __fx.customLobby.isActive() ? (p.a4h(3249), __fx.customLobby.setActive(!1)) : void aJq();
		p.a4h(3249)
	}

	function aK0(fj, aCj, vQ) {
		var ny = Math.floor((i.j - aJc) / 2) + aJf,
			oB = ny + Math.floor(vQ * (aJc - 2 * aJf));
		xz.lineWidth = aCj, xz.beginPath(), xz.moveTo(ny, fj), xz.lineTo(oB, fj), xz.lineTo(Math.floor(ny - aJf + vQ * aJc), fj + aAd), xz.lineTo(ny - aJf, fj + aAd), xz.closePath()
	}
	this.f3 = 1, this.aJo = 0, this.aJp = 0, this.dk = function() {
		bX.turnstile.ez(), ab.setState(6), aJa = 0, aJb = 1, aJg = "rgba(0,220,120,0.4)", aJh = "rgba(0,0,0,0.8)", this.resize(), bi.ds = !0, aJl = 1, aJk = this.f3 - 1, aJn = 0, aJq(1)
	}, this.resize = function() {
		aJc = Math.floor((a1.a2.il() ? .5 : .25) * i.im), aJd = aJc + 12, aAd = Math.floor(.125 * aJc), aJf = 3 * aAd, aJe = Math.floor(.225 * aJc), aJi = Math.floor(.3 * aAd), aAc = bD.sP.uA(0, aJi)
	}, this.a4c = function(oQ) {
		oQ === aJk && aJv()
	}, this.hn = function(fh, fj) {
		var ny = Math.floor((i.j - aJd) / 2),
			nz = Math.floor(.5 * (i.k - bf.gap - aAd - aJe)) + aAd + bf.gap;
		return ny < fh && fh < ny + aJd && nz < fj && fj < nz + aJe && (this.a5X(), aZ.a4s(fh, fj, !1), !0)
	}, this.a5X = function() {
		b1.z.a4i(3260), __fx.customLobby.setActive(false), u.z.a0()
	}, this.ef = function() {
		6 === ab.a4V() && (bi.ea > aJj + 12e3 && aJv(), 100 < (aJa += .07 * aJb * (aJa < 16 ? 5 + aJa : 84 < aJa ? 105 - aJa : 17)) ? (aJa = 100, aJb = -1) : aJa < 0 && (aJa = 0, aJb = 1), aJg = "rgba(0," + Math.floor(190 - 1.9 * aJa) + "," +
			Math.floor(120 - 1.2 * aJa) + "," + (.4 + .004 * aJa) + ")", aJh = "rgba(0," + Math.floor(1.9 * aJa) + "," + Math.floor(1.2 * aJa) + "," + (.8 - .004 * aJa) + ")", bi.ds = !0)
	}, this.xy = function() {
		var fh = Math.floor((i.j - aJd) / 2),
			fj = Math.floor(.5 * (i.k - bf.gap - aAd - aJe));
		! function(title, fj, aCj, vQ) {
			xz.fillStyle = aJh, aK0(fj, aCj, 1), xz.fill(), xz.fillStyle = aJg, aK0(fj, aCj, vQ), xz.fill(), xz.strokeStyle = bE.pR, __fx.settings.smoothUI && (xz.strokeStyle = "rgba(255, 255, 255, 0.3)", xz.lineJoin = "round"), aK0(fj, aCj, 1),
				xz.stroke(), xz.lineJoin = "miter",
				function(aK2, fj) {
					bD.sP.textAlign(xz, 1), bD.sP.textBaseline(xz, 1), xz.font = aAc, xz.fillStyle = bE.pR, xz.fillText(aK2, Math.floor(.5 * i.j), Math.floor(fj + .58 * aAd))
				}(title, fj)
		}(L(141), fj, 3, aJa / 100),
		function(fh, fj, j, k, aHV) {
			xz.fillStyle = bE.pM, xz.beginPath(), __fx.settings.smoothUI && xz.roundRect ? xz.roundRect(fh, fj, j, k, .1 * k) : xz.rect(fh, fj, j, k), xz.fill(), xz.lineWidth = 3, xz.strokeStyle = __fx.settings.smoothUI ?
				"rgba(255, 255, 255, 0.3)" : bE.pR, xz.stroke();
			var fa = Math.floor(.3 * k);
			bD.sP.textAlign(xz, 1), bD.sP.textBaseline(xz, 1), xz.font = bD.sP.uA(0, fa), xz.fillStyle = bE.pR, xz.fillText(aHV, Math.floor(fh + j / 2), Math.floor(fj + k / 2 + .1 * fa))
		}(fh, fj + aAd + bf.gap, aJd, aJe, L(43))
	}
}

function cV() {
	var a4P = 0;
	this.dk = function() {
		aZ.dk(), a4P = 0
	}, this.setState = function(aK3) {
		a4P = aK3
	}, this.a4V = function() {
		return a4P
	}, this.aK4 = function() {
		this.setState(8), u.y()
	}, this.a5Q = function(e) {
		if (!bV.zr) return !1;
		if (!(bi.ea < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aK5()) return !0;
				if ("Enter" === e.key) {
					if (0 === a4P) return !0;
					if (7 === a4P) return !0
				}
			}
			return !1
		}
	}, this.aK6 = function() {
		bc.resize()
	}, this.aK5 = function() {
		return !!bc.ta()
	}, this.hn = function(fh, fj) {
		!bV.zr || bc.hn(fh, fj) || 6 === a4P && aa.hn(fh, fj) || bb.hn(fh, fj) || aU.hn(fh, fj)
	}, this.a4s = function(fh, fj) {
		!aU.aCu && aZ.a4s(fh, fj, !0) || aU.a4s(fh, fj)
	}, this.click = function(fh, fj) {
		aU.a5H()
	}, this.a4v = function(fh, fj, deltaY) {}, this.aK7 = function() {
		aZ.aD1(), bi.ds = !0
	}, this.xy = function() {
		8 !== a4P && 10 !== a4P && (xz.imageSmoothingEnabled = !0, this.a1Q(), 0 !== a4P && (aU.xy(), aP.xy(), this.aK8(), bb.xy()), 0 !== a4P && 6 === a4P && aa.xy(), bc.xy(), u.xy())
	}, this.a1Q = function() {
		var aKA, aK9;
		if (__fx.makeMainMenuTransparent) xz.clearRect(0, 0, i.j, i.k);
		else bV.zr ? (aK9 = i.j / bV.fl, aKA = i.k / bV.fm, xz.setTransform(aK9 = aKA < aK9 ? aK9 : aKA, 0, 0, aK9, Math.floor((i.j - aK9 * bV.fl) / 2), Math.floor((i.k - aK9 * bV.fm) / 2)), xz.drawImage(bV.zt, 0, 0), xz.setTransform(1, 0, 0, 1,
			0, 0), xz.fillStyle = bE.pM) : xz.fillStyle = bE.pI, xz.fillRect(0, 0, i.j, i.k)
	}, this.aK8 = function() {
		var fj = Math.floor(.3 * i.k),
			canvas = ac.wB("territorial.io"),
			ib = (ib = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : ib,
			fh = (xz.globalAlpha = .15, xz.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - ib * canvas.width))),
			fh = Math.floor(fh / ib),
			fj = Math.floor(fj - .5 * canvas.height * ib),
			fj = Math.floor(fj / ib);
		xz.setTransform(ib, 0, 0, ib, fh, fj), xz.drawImage(canvas, fh, fj), xz.setTransform(1, 0, 0, 1, 0, 0), xz.globalAlpha = 1, xz.imageSmoothingEnabled = !0
	}
}

function cv() {
	this.aHK = 0;
	var aKC, aKD, aKE, aKF, aKG, aKH = this.aKB = 0;

	function aKJ() {
		aKF = aKG = null, aKH = 0
	}
	this.dk = function(aGI, aHH, aHI) {
		u.y(), bq.x4(), ab.setState(10), aKF = aGI, aKG = aHH, aKH = aHI, this.aHK = aGI.aHK, this.aKB = aHI, aKC = 0, aKD = bi.ea + 4500, b1.z.a4d = aGI.a4d, 1 === aHH.length ? (b1.z.close(b1.z.f8, 3281), aKE = 0) : b1.z.f8 === aGI.a4d ? (
			console.log("direct pass"), aKE = 0) : (console.log("delayed pass"), b1.z.close(b1.z.f8, 3247), aKE = 2, b1.z.aJt(aGI.a4d, 5, 2) && b1.qr.aKI()), xz.imageSmoothingEnabled = !0, ab.a1Q();
		aHI = ac.wB("loading"), aHH = (a1.a2.il() ? .396 : .25) * i.im / aHI.width;
		xz.setTransform(aHH, 0, 0, aHH, Math.floor((i.j - aHH * aHI.width) / 2), Math.floor((i.k - aHH * aHI.height) / 2)), xz.imageSmoothingEnabled = !1, xz.drawImage(aHI, 0, 0), xz.setTransform(1, 0, 0, 1, 0, 0)
	}, this.nH = function() {
		0 < aKE && bi.ea > aKD && (aKE--, aKD += 4500, 0 === bi.aKK) && 0 === bi.ks() && b1.z.aJt(b1.z.a4d, 5, 2)
	}, this.aKL = function() {
		return 10 === ab.a4V() && (bq.aGI.aHL(aKF, aKG, aKH), aKJ(), !0)
	}, this.aKM = function() {
		10 === ab.a4V() && 2 <= ++aKC && (bq.aGI.aHL(aKF, aKG, aKH), aKJ())
	}
}

function cW() {
	var aKO, canvas, a3f, aKP;

	function aKV(eJ, name, aKW, s6) {
		a3f[eJ] = name, canvas[eJ] = new Image, canvas[eJ].onload = function() {
			! function(eJ, aKW) {
				var a7A, a7B = null;
				7 === aKW ? a7A = bD.ou.a7D : 9 === aKW ? a7A = bD.ou.a7E : 8 === aKW ? (a7A = bD.ou.a7H, a7B = .1) : 3 === aKW ? (a7A = bD.ou.a7F, a7B = .06) : 5 === aKW ? a7A = bD.ou.a7I : 6 === aKW ? a7A = bD.ou.a7C : 4 === aKW && (a7A = bD.ou
					.a7J);
				canvas[eJ] = bD.ou.a79(canvas[eJ], a7A, a7B)
			}(eJ, aKW), aKY()
		}, canvas[eJ].onerror = function(e) {
			console.error("Error loading image at index", eJ, "Error:", e), aKY()
		}, canvas[eJ].src = "data:image/png;base64," + s6
	}

	function aKY() {
		aKO--, aKS()
	}

	function aKS() {
		0 === aKO && (aKO = -1, aKU(), bi.ds = !0, canvas[7] = aKP, canvas[8] = aKP, canvas[9] = aKP, canvas[10] = aKP, 5 === u.uc) && u.a4Z().aKa.resize()
	}

	function aKU() {
		aM.a8a(), bb.aG8([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.zw = new a1r, ak.zw.dk(), ax.dl()
	}
	this.dk = function() {
		if (void 0 === canvas) {
			aKO = 29, canvas = new Array(aKO), a3f = new Array(aKO), (aKP = document.createElement("canvas")).width = 1;
			for (var aC = aKO - (aKP.height = 1); 0 <= aC; aC--) canvas[aC] = aKP;
			aKU(), aKV(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aKV(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aKV(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aKV(3, "orders", 6,
					"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"
					), aKV(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3MC1hYTQzNmJhMTIyNWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTQ6MDQ6NDcrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWZhZDQxNzQtNzljYi01MDQ4LWFiMjItODU4ZjBhMTg1M2UxIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jNxzTQAAIABJREFUeF7snXecE0X4/5/ZknbJ3SXXC/2O3qWXoyO9VykCgkgHURRE6dKUjiKC0qX3Lr33zgHXe02vm0125/fH5nK5gALq78v39yPvV+CVnZmd5LKffWbmmWdmEWDw4eN/GMo7wYeP//v4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92/5APR8Kf64D3/X7/COTbeucf0PhbqHYbNCwc/BMw6Z3r47X47ta3pu7PEPswoEuH0lcfFcQeyE/o413AxxuAfa+3e43pp8y5NWLjzLLZtz/Ztapxv3beBXyv17581u7taPcZzJ/zuS7/AQAAJpo2rpVXYMyd8fTy994lffwNPtm9BRItSOOBDmwKefcAAAMvC/lwQA/bmckJAA7v0j7+Gp/s3hR5DsT1gZVLP+I5pjgVEaSy/bZ10uoX1mW2LE728ff4ZPdGBKRBpQ6wecdgOvQjryyCFHHydnXG/ur/Kfd0kFemj1fjk90bUakD3Ly0Um8vy3NWgpKVzEQAePm8XotXHyctlkeflsz08Sp8sns9wU9h4sjqOqY04L/swNGyUl+O7/HlnO0+2b0JPtm9njrDofXGgYA57wwPEKJoiixXKghA453n4yV8sns9HAekKMA79SV4jId/1Go57PXO8PESPtm9BtoCNaspxfJY3mnyznsJjL1TfLwSn+xeg1QDcj8pwBsJCiHkneTjVfhk9xowgjfRksOWBwDYZ+7eDJ/sXoM5EtIyXzNKQAT9hubQh4BPdq8Bk5CXb7dq70r8KwK8wu4hgrKobwnvJWK6ZKaPV+OT3evRdQRku0cGN+RYvVcWQoRV+5C1ZAAAgdB3C3dCK68iPl6BT3avptIuIFmIHwIAkNseHj0zViVPy0MaYcx7FsMcyxifI0QBgERK2z2yavwGTz72BYG+Gp/sStBmLCjiiw+rbAJ9JTj7E/zy3ZX1y0pzTgtBSt25CJBV91DQHAAsWXUopzVuOxYCXgDHAQBU2AIAQFFwfAdYQ93n+fDJrgjCCX07E1/N+L5ixWruRJPJkJmRurLzfAbb7j5KjylzTFW2n8dJyGHLEd5JJeKEZE1ENjSp12TIT2MCApTuUa1OpzN1/VgShg8dLj7zPce3lgIAoNZG2Bj7ffkyFb0zikhMfjF7xjefDG1St0YZVfkh6sRfL569/2G3NqydFQpM/HrrwqXLIiNKEQRFkFKbIR4hCghSLC+PeQfmWQDYsvmnyd+dK1Hv+4rP2gEA+K+EMgfKe6d6ULFC5fYd437bfqn+D6+QplQqqlmrQaVK1S0Wxlx4lTEkkLRCCN825ZyhpKGqMv2crHb4iAlXO53bc9z79PcQn+ygW3foObwnSf3dT4EBT54y5/HD/nceJLUtK/LKTUrOnf7ddwZtrjH7CCKlJC0vcuMhgpbzTmv+s+UB0Z2xODQ3w+vU95S/+63fBxAP4eKgHr0HF3XFEO+0WgqvFk1NEIrwVoAIwLxOp1m/cXuXju3i2pbQToC/rP/IrTt/VSKEkMeAwxNSpDQXXON5+4bf17S6NT63gXeB9433XXaxe6FuvcaC5hCijLlnOFYHiHAX0GXsB8DK0r0AwGQyliqlYq3Z7lwAeJ6QVb6sFHmcwjAMy7p8KRjjgIBA4T1BiKOUuuBL4JPd+y67skeg12whFB0b885xDgMggiAIwMDxHEEQACQAaFO3B8eM5DnbrLnLOMM5glIIp0vF9KzFxz7qU8ddocGg9wwIQAgZDHqlMojnOQDQFiardgOMcOe/p7zvsnNDiUM4VgcADgdrNpsRQgghiqIVCgXP8wSlKEz8NTh2pEols7JSo8kqnGVhWIcT+nRrotYYAcDhcLwchIIQslotEokEADiOQwVe+e8jPtm5yI9fSomD9DotIgiSdM0tcJxTr9fxPK9UqkjaX5e2KzC6+5gvNq/78WMAIAg0Y962jm0qCJozm008X2IOww3L2kUiEUEUN8TvOe+77FCR2xIRIrudQa9SBkEQLMvSNA2A9NlHU1IZEe363TgORg5tazRaESI4jnObOoSQVxCUcEhRJI70TH5Ped9lp64BKckJlavWIyi502oREkmSsFjthWqTQi4JDfG3s06LxaxUqjDGmHcIE19uWNYJAFarRdAcRRE2xrlx24Wh/ZsG+MscjhKlZVIxM8wz4T3lfZfd/amwYeDyZSv/gKKQdAKhKTMP5o2BJ6MAAPq1hzLRQYP6NDWbjHKFPwD5ycjOdx4kAwDH8f4KCcOwAGC3MwRBEATx/aqDR34CUzdYB6c6NYNflw8uLDS6Py4xOSepqvvo/eV9lx1PQUG+PiX5hT8CjnMCQF6hwdoTnhQNNnefhvYNNSMHiyxWRmgoK1YIf/r8xisddNduJe44WnxY0BvmLj04ZlhrjLHQsbtyM1HTq7jAe8v7LjsAuPQbLJ08f95XHSiScnJOACBc41QXdzZDwpW8UpEqjuNIkrQZE0mSgJJNLUEQykDZketPPROfDYBWT6QAwPMcQRAkgW7cee5Z4L3FJzvQx8DNT9VWxiFXKHR6Hc9j1r9EAW1lWNz/yh+/fKTWmAIDlSXyipCI6Wlz9hw75Z0uoFIFA+CfN53ed9Y76/3EJzsAgKRuMLPjro2LR3Ocf0GhQfLS2oncObD7wK12rap7pfv5SYQ3O/Zd37PQe/126/HgFykiSVIiphetOvhc/FK97ys+2bk4eAKM9X/ZunZ4VLhS8at3bnIPOL0wqVvH4tkIAMgv0JctHSK8N1uZQH/QemYDODXw0fjGkRER3y7845lMc3pdyez3GJ/sikmfC8Mn/P7FuHa1q0cXLM26/WWJXIkYNDpTWGjxWCK3QB8e5mpzHz3V6l6KnCofodAb2S9mry5sA9e/8859n/HJrpjkjpDcEZ6f/bNhEpRNBi/Z5XYCnd4a5hGbXlhoKB0dJLynRYBLeprLnYACtaln0OHsiyXSfYBPdi+T0QYy2gBlA1k+WMMAACgbBD8GWQHcyk4hCFFOnlarM1NOG2tUSyW04BA2tYXwO4D44ugSXSzs+bO4Wh+e+ILaXwPioXd7kMlkAIAx5jgeEQgVLZjFGLtnvQCA5/k/9jOcdxioD2981u7vCH4MdUfCngs3DBo1AGDhHnVNtrrvVyFZ+IfJfuNeNMi9MaMo08er8Mnu71AlAEWCJWObttDglpdLfIBL6A+70jWFuYy86Hwff4FPdn9HQm+QGeCTiT+tX/aZd96rsLMOKgIeTPRO9+GFr2/3euIWg/SA6z3LuiLeXXEDBPAcYAxiMQAAQnDyuqukj78F/3/ymjJnyqxZs2w2W0pKyqJFi8YvG085Kc8CcpO80eVGU+dNlZvkL5/+V6/AROjaDfq1VZmS5rarD9a8Y9vn+mXe/CTt6tD0ax8fXlHGnHsc267eOth1dL+grm0h5CGQdu9K/uolN8knLJzwyq+k1CoXLFnw5MkTnU537dq1Lxd8KWWkL9fw/+jr/41GVmqTBmmCnLQzLyzPOw8AAKYsnrLsu2XC+4CAgOHDhz9+/Fg1VzV3zlwhceKkiVWqVBk0aJCovqjW7lpPnjxZNXcVI/Z4wsRLEE5o2wQqV42pHRfbooHq7u1rrB14HlO0H0GQDp5FCDieZ+0WNt9qMtu/Gt9REaBasOLk4wcJj3pA4ev8w9OmTytXptxnX39mMBhK/1Y6Ly/v16m/qoPUABCkCVp0YNHIL0cKJStUqNCP7ldqfakpfadw4d5TcAAQrA6WMBIAyIrO8s77X8pLSvxf9RqxeMSmTZsEPwXGeN++fZMmTfIqM3PmTHcBjLHValWr1dnZ2c+fP++zrQ9gmDp1qmcBtVp9//79y5cvk07y5U+M3Q/dmsMH5eDnpZ8mX+ybcnlI6pWhCef6fTk86NHlH3Tp+y5ubZRyeXDK5SEpl4ckXxx0aWcnTequptUg6Xyv7FujUi4PfX6qHbYdWLe4b/t6ELvfu37hNWHCBK+vdO/evXPnzpVNLwsYEhISPHMNBkN+fv7t27ePHDniVU/jm40XLVrkLrlt27aJEye+/HH/217/q61dgCFg1bhVfn5+wmFBQUGbNm2qVauWczpnT/s97mKlS5d2vwcAu90OAE6n02w2t9S33At7f/jhB88CAKBUKp1O56Rpk5b96LKRABBzGOqsBkSgrxesqV1JlPBgHyJCJBLZi/j7YRExF69ovv6uDCJo4BiF1Mk6CRHNWyzOnOSr9dt+xTkgW+2fcXFbu27DMQ5LvXuwfVNZr76Hdm5bfXThGfVguOcxzvho/UerVq0qPgbgeV74K1pvap3ePD22VaxnLkJICNerUqVK86vNLze9LKR3OdWle2b3kV+5jCIANGvWrF69eiHzQ76d+a078X8h/3tlF5kXufD0Qr+hLs0JOJ1OjPGnxKeibaLtg7cDwLDNw9q0aeNVxr2moUWLFjO+mQELPPMBAJRKZW5ubqVKlQJ1gUa5vvUkYC/D8lVL6+yrn/boN4AbaQkgVYTfvXG+XuspDTr0/fPk7v4D2tO0yM4yhuAl9vCqoaGhyclJSXmZdw2xXe25nbvWs2NllxE7bKbCm8enBQZFVKlR35y9t0vLsF4dxugcFW8tu3Tk0IHcjlDQWtkvzHP/HgAAgiAwxhzHdarW6crhK1wc515GBAAsy/I8jxDS6/UNDzZ0y24yNbnNyBJ/u0KhMBqN3bt3Z+ex876d55n1v4p3JrvPVnxW3lE+PDw8MzPTjMxHuxx9XOOxZ4Fea3sNnTfUM0UAYxwcHBxzNcZ9SNO0Wq1WqVQAoNVqBdug0+k8T3ELEWMMAAaDgabppk2bfrZ8VNqtFdVr1Jp6bk7uiz9SH94TNg4ryM0syM9t3WclRZO807p18+bRY8YRBLdgze3lPy4RqgoPjwgODilbOvLrJVtWzF7cvk2bVWvKlilbrvOwbZh3XDr4RbXajQiSYu1mOXrQo3uXXn0/Hj9mWLUXMaoRKpZlRSLXbIbJZAIAQVhVq1Y9deqUTqcTiURyudzhcJjNZvfXBijelTsqJ8rrfgMAjDFBEAzDNG3Q1CsLACYvmBwpioyMjMzJyclz5q34agVPvHqp2/9t3o3svpz25YIFC2iaBoCCggKJRNL0ctMh0UN0ymKtlA0sa7VahVkpAGAYRjAAwqIsZVG4JUJIWLIl6Ey4KizLOp1OABD+12q1AQEBAGA0GoXrx7IsAPA8T2HRhs1H7JbC3Oc7ABEkKdYU5mamJcbU7FGpYTOWtY0YOhAQqAugXbc+P6w8t3RxCctJkiTGeOxnIwhxVlSUbNa3kwgC/bx+t0gsjuu57Mbx2ZhnqtRsyPOcIfcC5h2rVq958NwKACaTyd/fXzBgwnc2Go1Q9P0RQg6Hw/POyc7OBiieiwMAZEdGo9HfvzgkVVjey3EcAAjLct1E5kYO/HGgu7NhNBqzsrLEM8V7h+9NjE30LPk/wzuQ3aiVo5YscRkMAJDJZHa7vVy5cquPrz4oObi3t+txIn5+fjabzWw20zTtdDqFzo1YLNbr9TRNlytXTii26eNNZWaXmTlz5qVLlzZt2qRQKPr16xca6goUOX36NKNiAMBgMAgpAECSpHCYmJjYo3FWQeJ2ACBISl2Yl5rwuPOwrWVqqoPKVTu4bcv2HUviP4Hng2HW5Or79z8YN/5ziirenVi4xiqVKi8vb8fuh5UqVrmecff5EPzRgr78fZj0+cTG7WfIAyIeXP7Jpk8sU6EqELQh+xSyUKy4IkLIU2c2m03Q3+PHj3FzHBgYqNfr/fz8Ll++bDKZDh8+HBcXFx4eHhMTc+yTY8KnR2dEO/wdhYWFgi0Xfh+WZe12u9eC3DKpZXYV7Gr4Q0N3ilwuDwkJ6d69e7PEZtMt0x/VfuRR/H+C/2nZlUkv01zV3DNF+N1DQ0Pr169/c81N6O1KT0lJUSgUJpOJ53nhd6Rp+vnz58I659u3b0M3V0lNsGbkyJHz58/fsmWLw+HYuXPngQMHJkyY4HQ691X7LYqtLhhIoTBN08+ePaMoCgBy8zQ1qmMAIAgiIf6hKqJWlxEzOIdRq1F361g9qBkcOQ4AEH0bqlapw9iteXl5brlD0R4Awve/didnzaIlXXu1SeoKSV1BqobAgavMJl2/gSNianQ3aFPP7fu6Wt1WoeHRH8Rahi86sGd7c8GYkSRptVpzcnIEW25j+A1DNjTb3LRly1abN29u0qRJ27Zte/XqxTDMli1bTp8+/WzFM+HTUyumisViYfzkJi8vT/itPK3dsN3DGn5VrDkBsViMMS5Tpky3nd3+/5ddveP1+g7v65lis9mEK2cymVq3bv30/NNzrc4BwPbJ26v9Ua1Lly5CsZycHJvNJjRqDofDEOqyXqM3jRvfbnyl8ZWEQ5IkO3XqVL169Rs3brx48WJ+zS4H9m1d83hthw4fugsImisoKGhU7raIIhLi76vzUnqOOWozF146d2DFjytubgatx1KbUj9Av22fzVlwpGe/8MLCQqFPxrIsQRAEQWRmZgoVshazSiwDsAKALRj2/Amnn23d23MrQsG//r6+5+i9BEmf2zOhYbMOqyerv/5mYZ+e7QCAIAiEkKA5u91+6cTiY/T4nzeMe/Z8yqKF893fwWKx9OzZs2HDhpqpmm0/bgMATajmxvkbderUAQChhrS0NPe2BMePH4cipYl5setdETqdTujhMAwTGOjaGeh/kv8rsuuzu0/FvIr+Nn+McR7k/TL5F0bicsyWSihF07Rerxc6W8IIAACysrKEAizt2h8zJzLnlv5WE20Ti8WCMeZ5Xrg2BEHsP3F49czVtBnKHyc+rTWmUiWX5oRchJBIJKpVq5Zax6xZOVKp8uvdocytp/E1alSnKEpoktLTs27dutW7fsq9Gy8adfxOHhCFnabPRo22kpoTN9yVAQAgDNIXoM3OiS0flpGRERwcLPQXBaOSk5MjaI7jMY/x198s3AKT3OcaqsDesxBzWD129NBvvp0fXapMq94rzu+dWKpc1bFdqL2XZXHNmwpfCWOs1Wrv3L62cN60oYOHtew0ctinJWZ2EUI0TTMM065Wu4zVp68PLwDkPHThQOnSpaxWG8/zHCdsFAQkSZ4/f/6Hr4p9Rs2bN9doNGKxWHBFCVbWaDQKyqtevXiBCO2gh24YGuWIktlkGGMNrVkzfs3fO9X/Gf+97L76+qtFixYJ700mk06na3a02dOnT2fPmg0At7rcysnJkclkWm3xwgOTySR4PUiSNMmLH+3106SfnH+I2tKtAgMkUVHRWq2W5/HG9cuiFQkzxlVFCAWW7lu3X/FWwwCg1+sxxiqVKicnp3aNmJG99rMOnnMYWlY4mpx6OylHgTF2cmTHugkG8kh47MpydUL85IqE5y++/XHiwdOeNbkofR4aNK6MEPqoR+z4mRuXLJrNsqxEImFZNjU1VZAgQmjc4Eo2xlm2bEylyfBiRYkakrpBUjfz9YWTqx6FVWt/btl7uZ9/5Pm9EztV0xHW5xeuKzGAUsHGVcup1bsVLZLt2Ll9zopbYZ5xzABCT4Mkyfr169/fMOwibjdj2iSCuLBh1XMjV7VP7+4REREEQTx4GH/FcO3XcasdouJnkF67dq1q1ap2u92zRc7OzhZumKdPn8KHAABSq/RG0o2aY2oKBcxms9PprL6z+lcdvsoPy3ef+J/wX8pO5BCNnTZ20XKX5gBAKpUCQGRkZNmyZWfDbADQlNLcv3+/aVPX8B5jrNPp9Ho9QRASieTevXsPuz50nx4UDycVK/QrV5ABjSSB9ds0KxOskm3+7XNtTr5gI7+Yf95ztAsAwuAjMzOTJMnw8PCE9Jwopc5SeBUIeYUIU4UIEwCwrD3+0f3OI7YRiFAGhXw5+ZOMzKSDf7HWsNosmLp5NgBcPLq2epT/0aPHSJI4ceIExpiiqPbt29eoUcNms+pStpQuPZ3n+drx8MK7DgCA1OmQOh1sdcecvX5Zk53Z8MNvLuz/nEBPOjVswTmdAGB3iOwF10haIQ9tShCg1+vdzZ/QD0EIcRxnsVjKlyudl6/98qu5ACCV+kn8YPfBp7v3HiUISpO87uEQS/RZSO1Y/NFWwoZK7smCEBI0R9O01epaFdzr0141t7k0BwAkSdrt9mrVqn287OMli4uHgP8J/6XsAMOYMWO80ux2e1hYmE6n+2bmNwvmL3hR8cWuU7tq1qxJUZTgEzGZTELrYDabzjc5LbISlXfwsX9AYQFQNIwaPdjRHYaMmwLGHL3BjjHocgsEzQkQBFFYWCiRSBBCVqtVaIiF/wHAmHMq0OkE5DrEGBsN2qRn97uO3GM15t29c3nFspUp4+CZ95PYXVA28JOI5HJ/O+vAvL1WmbRzCfGNGjfbsGEDAHAcd+HChRUrVsSUlkRyT+tSYpYxZGVB5A3IaeRdlcC5e1C3TPOxkz/+5JOPOwz+LeXJscf3jtdr3MpqEWw85hxGXfo+RFQlCEKj0UilUpZlBZ+I3W53dRI84oZsNovNBu2aRffrXAFj/sZNeXp6sjnftGXaIaUS0oYCAGxpvbblwxZRUVFSqZRhGADQaDQURfE8n5eXd632NaGqNWvWuCr1QCwWd+/eXfeb7tcRLy2n+xf8l7KbtWZW9GfRnilGo1G4RxFCbpu0Y8KOmotrtm3b1rMkwzDff9Xpp6VzzVc7NOgfx/dxGgzFj7zRZ2UhRFrUd3hO6Gcgp13Dc7bmdaIzMzNVKpXghyNJEiGUnJws6Pjp06dx5ewmKw0ACCG9Tv3s0Y0PWo5r02+EWE4P6DHy2Xj9i6vuD3kFDefDiJGf2WxWqTwkL/Oe3X9gv/6DY2MrCLkmk+mDDz7w9/c3m4zMs/3a/GfygKglP3477eS8v5IdANxPhxmPN+9pu3nX3n0R5RqXrtTm7vnlTkYdU7mmMCAgKFmo0smyLELIZrMJZ1kslsLCQgBQKBSJKbmOgrMWJyHyKw1Fj2dBRGsAqFylZuUqNQCgd58hfn5ymhapC/NTUxNXrB1ZqlK/UaNGCJ4jiqL8/f03bdp0ocuFa42vAUCFFxUUMa69IgUEK4gxVigUqgSVZ9a/57+UnYgU2Ww2m82mVCrtdrvwvWma1mq1NE17jphmTvx6/WW627GRZcqW5TjOxrBjB1fbtv03AABAWnUOBrBpHzjtakFnFEmYbehpup9KwUaoeH+Zk6apjHzbhZObsg2R48eOstvtCCGdTmc0GgXNSaXSC5fu1gmlAQDz/P07F2s2GdVxyCjMcynJCbO/6nPsvPdar5eJvks0Gt0CY/z8zjaRLNomb+HWnADHcZGRkXl5RIYtNv7mpkYdZjVu2tpv1mLqa9ZZwl9bgsIacPoWDBjem3gGew4crtHkUwB87dh3Eok0tkotnuf6xWVt/G3z8GFDAAAhlJGR4T73zNlLWLNr/PTEhd/2l0rVOhPJc47nWYrK2j0ERUlFLABGBA0Y46iOGDtpsX9sxaprVy4mScTYHxw8l0BRFALYa/v29lcOu7/LbPI8r9frAUCpVDIMIxhFKDKxsbEl5oj/Pf+l7FiOFfoQnu71nJwcYcSk17sSVc+g7hCoV7/C7LldbTar0F5gAIKUOpg8J6u3ae9D0RoZhEipiNtzJapOg659hjdhGGbfvn0PHj5+cX2Jwl+19udfr93NX/rDjwP69xP6y0L7K5FIfl6//eMPCwCAJKnbN051GradsWgokszKzVqwfMbRI0L1r8HO8ARBcBxnKEzJsn7Qu08zz1zPyd8H+c3bitYBQnqdZvSYIUnnNqZ08iz7Ck79DvIc6NCu29mrf1r0hubdl9w8NS854XHFKrUdDlYpLUhOTqZp2rNHIZVKGtakP+q8kCSp3t17RFdp26RFvw8//LBzs5CMjPSzZ892rHELCCyYQEP2cQDA2Okf3paWhvG8g6bwyH6VAAHGkDgj1q/dU5kMLv0EmipAUSKJRMIwjOe1AwCCICiKSkz8j2cy/kvZ3Ym44+fnJ8whCpAk6e6xmkXWSgdAMRWGDm834c4iXXqKkEWQYs5hdjD55vxLBCUDQG7N8TwOD0ZzNkW2ahXXrFlTocIOHTrUqFFjl1g+d0o9k9nauG4oSUk3bzvQtVOLkJAQAEhMTLx4+XqfOIPSz87amTtXT/Qac4ixaJRhEd9/N/PmjfOHL7m+3mtZteY3juMwxnlpl7TMKJVKZbfbxWIxePiKXe0g5ihaZLcZaJGsVJny1WbBa2UHAOZIMI+Flo3anTl/hGGYhh/OvHpkxvOn9ypWrd3hg5ztZ/bUrd82NCxCIpE4nc7EpNTLly7MndrMyWGOc87+YUdQRJ3KlSsDAMY4JCSkT58+q9eqJ3RLQwRtsbrMFUKUKf8C7zSL/StS4iBpYE3eaQJAc+bPCgqN2L97c8D0nefGmhlJMo4oHnMIJCUlURRlt9tTq6d6Zf1L/klQe7f13co/K2/zt6U1TjvVoXgEKHKIps6a+sUXX6jVagAQ2lYAwBhLJJIJg2qcv3NNk5lBkBQAIIImKKkh87jDni/MvmOMVYFygiTW/X6GIPDR04kIQbPuS2Z+PVG40gKFhYVCL2fh4tU/Tq9hKbwGiEAIWAeRkicHgIaV1HqLSCyW3L99OTC0Uq1mY+w249rV6y5eOHfxBrzVakK7+pTFYpLIVIc3DDD5D+vR/0uEkHvWBAAQQqmpqQCweev+7tX2ckRg/bbT/BT+4z4dvmFvdom6/pYPm0Cnjm0nTvlWW5jnFxC576cuDeO6IESqFPakHIXaKJaJnZVLGS0MxbFaWVB9v+AmuebSlT0clhqNBiGkVqsPHjpxYd9rT6guAAAgAElEQVRkhoWWzUrL/SRNGlSuWjFao3O7pRDvMEkCqvqFNsKcy58SGKj8fePPDzKrjvvsI+FeUqvVglccIbRr1y6vkayYFXf7qVtEagRJkk+aP/mz51uvB3472Q3ZNqROYZ0pU6YAAMMwiYmJew/snfvdXM8y02dM79u3r9tdjjHOzc099eelNQs66Vy+OsyYkllTkpPVC0+OE9EULaJWrz/+8Gm23Q7PloDdH7SVwSmF+/fv1q5Tt7h2gMLCQoIgUlNTzWZTaXIDKhqlesJj/sWTewpl2VrNx3FOxmoxjfpp+IlXDNT+jlq/wKXOBziOsxiy85KPPMyp07zdyKAg1zYAIEypJSQInojrF7b2bKZ7eO9+406zMMZbNv30+XfnX9t39KTjYHC+gJ27dyOCsFnUV4/NaRzX2eEoMfflRmdg63be6Zmi0WgAIC0tzWKxtIhrAQCh9wEB1J8ITgfUrRURWz6yc/s6ZktRhYiQ+FeSKWvxnA0ACIJ0OCyPUsOVKpX72gFAQkLC1JZTcyNy3SmjfhlVy1lr3LhxAOBwOLRa7YoVKxYtLPaavQlvIbvBWwYvabckIiJCONTr9RzHxcfHHz19dMm84ruB4Il5i+aVK1cuJiZGJBKdPHW6agVxi4bRHIcBEbzDaC64yjutgoniODzz+4MAViPLX9wOAGBxVe/Cxtg8pxetVqvNZuN5PiMjw8/PT2WZa7F59xM4p/PpwxtB4VVrNR/jdDA8zw0b1v/oRa9Sr6fTUNg2by8A6AsTSWeClGJ+2Fd5xteThIE5QRDJycmCMwwhBAU/qxTs/ZvnW/ZeDgDKiKig1MbaYmP0RkTegMGbKs3/frXZZOQ49sqh6WERZSJKlfV0uQnsulj662/muw8xxoL7PS0tjabpPXv2zJ9XnOuXB4Ch5XjgC6BMhGLE4Dahwf48jwHzGHOkKNA/sj1gHmM4cSE9PYetVKli6dKlxGLxqVOn9rTcc7v+bXdVJE/qLDqFwjXm5Xleq9Xm5OTsPLRz4bcL3cVey1vITq1Re97rBoPB6XQmJycHBgZ2ha4JFRM8ykLdZdD4TvSPK3+x2WwYAyJEDkuWWX0dAHge6w2W/EL9hq3nTVXgzE+e55UgWEvnBdj0er1CoUAIGQwGoX+dmZnJcZxUKg1l5gn+EQGMsbYw32x11mkxieedfoqAmV+NecwlnRSGyG+DRAc1G8LJP/fSYvmRjf0bt+yOMaYpfuPpyjzniIqKEvyOer2+atWqT+KTB8U9BEAZKc8/+HCegzEBho/69zl507va16J6Di2/gC0bjjgdDkokv3bsu8KcZ01b9/C0QABw6Ga5IcMmChOMGGMhmIWmaaHvf/zc4e++LNEEedFuHDSCqK4f1i9fJtRgtCKEeM6qLNMXIRIhhAClpiZMmzL99h7Qlxi4w5KlS778ssTeMGq1WvBazDw3c/fo3Z5Zf4O3qfgrehzqEdS9WHMAIPgwAcBkMvXY3cPd/AelQe1esP/wfq43b7VaSTpQm76Ld1oRIktHBx04/mDRigvEp3D7i9c8FaRHS1AFSpMWJwUHBwuBkAghjLEw/wgANE0zxuIWViyRPrp7XeIXXKv5WIw5iUzaskm76/9088wKJ2HK1CEA2G7Th0fHCPZGJuYKCvVrV7umO/V6vcPhUKvVN+8k8xgRCEeXi715Yl7dVpMBQc3aMSchqUSlb4C2Muw/CmS7riGhkfMWrKjX5gu/gMiD6zo3ad3bUfRkHwDQmbBwH7pTRCKR4GeRyWQWDRtXEx7vA91f+D3+XAt/QvaxVdnlV0H5MqHfftG3QI0NWccQIQ4s3Z3n7GXKxh45deLu3Rs/jpyz/3zxiYMHDy4+KPLLYowNBkNHccfd8F/LjjNyGo3Gbe3UarXQ9xQOhf4NAMTNhNj4wA33LmpSXxAECUAUPF9NigIRIpWBfk07rVA1gac3gPlb72OFw1BlCXw+/ZvmzVsvWndi/NiRgnOEIAi73Z6eni4469PTUipIXb0ngiTv37pEUZI6LSdj3qlWF3w6YsyTt+7pFhM4HwY8/dyQmXF21wj/wEgAENH8ot2V166e5VmMJEmSJEcO7xFivqUxiSmSZiwakVjO2s216jRAXNI/e3r2nj+h2racu3eu1q3bxGLIadVn9aWDXzdu2cnOuLzHYzomicVit3eNoqinT5/SNI0xvn792hej6wbPu9mkZsPUbZD3QXG1XtybCPcmQvljBbcGrf1kcP1GH1Qkwa5J+l0SUEUeFme1mipWrPrpmMl+nVdsPQYA0OBW/cAaxc5Xd2yfID5hevoNeVPZiSVihJAQCezprxKmoYRHmfduA/7+IRu27dOlJxIEYSm8xloySFEAz/Nhof59h/+UvAtu1vCs9dXEfg8LflhSqlR5nU4nF1mSk5NoWgQAdrvd6XQKEpfJZGvX7/1uKAAAQkTiswe0SNGs+yK7Vbdjx69HD526cxRMJWZM3oKgeIiKlnJGHee0E5Rf9bqN7YwtVytpGecdKY4x9vPzy83Nzc0OigwyY8wZddlimZK1m3v1GoTJHV7l35yng2FFk5VjJ3KtWnYAwLG1e9y4dLhKzQYSiRQAGCd5bNeuxo1ckyEmk0lwGgQGBt69H9+nfVNdTubF66ebNWhfqxWc+sWzYm9SOoMlHA5Ou/3kWeGY4XFA+bGWTG3y5qCYkcBqGjZqbjQZ7W1/uzQXWGTBGBcWForFYofDgYv2ATebze7ZyDfkTft2nY512tVil2cIA8Y4LS1NsHl7du9Jvbd807YDNpsVEGHTPmCMiYigCIK4fD1+95HbKcPh6cce1b2KqT9MDeFCJBKZyWxGmB09qJqIprRpO689i0otDO3cyRUwBwDnzl8indm9mmVzPAkY7t44pwqLqR03DjCs+3nZ0tHXX97h8K3o3hO6Ne/Rs/dgm0Xz8OLyyjXqA8Cfd5Vd+33tHlFBkclnGCYvL2/z1v3TB6YxDlKv03AoqEKN7gihgV/1PvlHcbX/gDJnofYC2L//jMGgF4kVJ7d9XLZCzaDQcIyxjaUuvGjSoH4td8Cz0+nMe/FbrQqMLLQVRfst2/CQpMQymdTpsFv9rQsGL+D9/27lBGKhazuoVinikyFtiCKzoizdC2OOpkUH9v2x49AfK9Y+Dw4OLj4FoaysLIfDQVHU2bNnp34+1Z3197yptTve+XhuYq7gj0UIaTQad6gcSZJZL7Zv33XUaDQQpMSquWM3pyKCEovoq7dfbI2/ffqCV2WvYNLsST/MdvWZtFptQUHB+j8OhCp0beqImlQpbFKlYN1uVxwej+GT9iliEefkCHVBTlrSozpxY4Mja/I8J/X3v5b5bzUHGExpMGLn17q8rEdXfilToSoASERceh4ZGBioVquVSiUAaDQakiQJgsjOzva81yUS6f0b+2s0GWkzqxVqBG94W/8F6W0gvQ30aNZ26x/7Wbup08c7jm8ehAGHhEVKRc6ONS7tPJWuM4sIBBiDSsH2izM7ncAWnvjxULnvv18gVKLVai0Wi3St9Hr160e6/uX8DBbB4Yug+yb3wbRtP84fIKIpgkC69L3Ksv0dDrZr9z6NmzbfvGPP55PHCbaGYZiMjAzB4CGEUmwp3jX+NW8qOwD4/fffBwwYwDAMxpiiKEFzBEGcOXtl6+aNOp2BICXq5M2CKy4wwG/YuHWalnB1o3c9LzNp7qQVs4uD1HieDwoK6tat6959hwP9MvQWEQCa0tMVzI0QWBgKY6AoOjXhbqu+ayhKxPMc67B3j/vwyhN3Nf+QwBQICVE6GCsAmA05UmlVALCzRKkwTlhvJsxdClJjWdarffEPVHEc6AuTRJIAiwVHX4SsFp75/4S7g+Deveu1azdgrNp6bb64fWaJ0+EIiywFAANbpMskTsHBYrVTAAAYbzhdqW/fopB/AISQTCbr3Lmz7LzsCPyl7AQuLwDEg7TtziWzB4lFIjvr0KfvlYe3JilZUFBog5p8VlamzebSgKA5kUh05MiRX798ixCVN21k3bQ93naIeojQf0xKKxjSLSo0SEpLAtQJvyJSAgChwYHdBq/O/fwvo4m8GLVk1PJxy91rsAGgsLCQJMnU1FSM8W+b9876OMPKlLg9EEGkJjwtzEtu238dIsjAQFXblq3v7/7Lgdtb0aUpbNi0XSQSA8C1o99Uq91QGMaGBTIT1pRds3yO0Wg8f/68EPpWs2ZNmUzmcDik+rVSsatPnZ+TmfTsaudhf2i1mkmLRh/b5Vn9P6djYxj4Ud9OXfoQBEnR0gv7JtVr0oaxueYeBTCG47ejB4+Y5hl4IXiSrVZrQUHBzp07f1jqvVj9lRAO6DgK2kZV6t6xAQDwnFWiqCgLqisRi9Zvux4YUonjeADgOG5d/XX3at/zPv9vebW1G/H7iPCkcJ7nEUL5sfm/DS92fJ3pdOZZTjzrMHWcoho5rHd4SCwAVif8ikgpABaLqBETf715xNvr+zeodFGemoOieHGMMULIPyCIQMXxFwJpifFadXabfj8hggwIVH3YtvXjbf+N5gDA4YSwsEidTiOSBlSu/oGgOQDI00na1XceOnQ4MzOjf//+crk8Ozv7+PHjNputXbt2oVKHk3f1h8rGVEl8eh0BKlW6LJdaXPO/5MR1kLTaU7N2/VKlyjkdtrJVO928dLhe07aejhWFzJGSSwrRtZ4ghITYsNjYWHmhyBzi6rH8DTwNxzaBtO2LAT2b2RiWIGWsNUuqrMnY0ZiPm/cbMPbFZC1TJyQzMp0jirdlGbp1aGR8JAC8rBxPXiG7ycsnzxo+S7hdTCZTfHx88IzgEx+deFz9sVAgOzKnVyv4dNqUatVqY0A23SNBcxqdae6Sg4nj30JzygRABGW1WlmWFZyfQgSE+2LHlI8o0MfLxMV/GElSWnVO826LCJJSBCo7tGl9dxtoK7vz/y1VqpTS6TQAgAARHg0oQtCiRv6Pex78sNTljkcIjRo1KiUlZdPW/VP7FseJsHYmLKoSLZHb7Uxcq8ZZm64/GebO/FccPAeO5tNmfje3UuVq0TFxL+7+8fDWpVr1mzkcrhB2BIAxYlnWZrMJv6cQmUEQRGFhIU3THMd1mOq3d8vrZSew9wxwrTY2qhczsFdTJ8frsw4py/S3WG2jRvZYv3Tl4UvFKxAAYM7cOWPHjg0eEgwAFovlyZMnMQtjvvn6G+x+jmUR3rLreLxj65jWbhONEIqOjh42ZBjajB4vcsmOtEOL1m1r1frA4XCw5jS7KRFjZLbYvl928Mjl4qrehMbDwNHcgRDiOM5zdYUQPwcAeQUGVXWWYYXLjylSdPvan826fU+L/DDG7Vu2efjHf6k5KNpCBQCeXN8QFirhi7ziBMI7L5SZN7d4bxH3iGrcZ0P8bXONRfMlHOeUyeX6wiSZIqxV6w93J153n/IvwQiOXgG63XdfTp1VuUqN5t2XXD40Lf7RndgqtTyLvfx7uj0sBEFEU+Gd++vevOk/chycQ5L4vWho/+Z2Fow5JwOiOjdtGpebk0a0PHTwgqvYgB0Dpk+fLnwKAFit1piYGIlE8uy3Z1s/2eoqVEQJ2bU833J28OwGDRq4U4T9EPR6ff/+/S9dunQ97joAdGmnGLRplMPhYM3pVt1DjsN7Dl29fT/1gIc7+01oNQ6OXXuy/fdDGelpwSGuFStuv4xw6LQmuSckTUZDauLTinX60CI/mUy2cvmy8/ddWf8hS5dtZFm7TBGW9OhgSKvitZXXnoeOGP21Z/slXN3Q0NC8vLxLj1V1Yo0Yu752udhqWYkXKtbtX7ZcTPgsgPHuk/4DDvwJKevnbBDNq1ChSrdPDx5e31OrDlMFhwOAyUZHh/J2hoGiHxBjnJWVJczr8Dx/617qz4uXbtyw9hic8Kzzb3BK4cheuPY08djAxH2bRlqsVk3K5uCYkb37DOnUqZe9w8cnTkKrS63m1Jvj1hwACL49nueHlRtm/8O+e2CJCYwSsmt4u2GDacWagyLXlEwmYxim+/Xu1+OuN1sAB8+c1uVmsZZMi/YuQmSp6OB7j99aczU2gew+pN/4qUtdzfqTEf16thaWk5AkKWhOaGf7tjDZHSQAECSZEP9A4R9Srnon7LStWb34VvxFrzr/Pd27gXOtAwAQIiiqONoKA7B2XqvVBAQUb/4gLJUV3p+5p2xURc843I0yzk27WbFu//DwqKKZhf+Sh5/Ct42/PXH5li47o+vIfcd+HwiAVMFhAPBJ+6R5i38cN2aUTCYTHLnuacyAgIAv+hdmPN00eGDvIx+fOLG5RJ1/j6YaPN8Oq9Ye/2RwG4KUWdQ3pYHVpTL54O4Db9//o/yx8hUXV/QszxRtHhIZGRl2MAwGemaWlJ2clRsMBqFPIIAQoihKGFrStAjxIN4PmoEZtERpKdyDSLEyUP7x2I373/TOKab0Fjh64lTqk+1qo1iKE0+edNStW8d9FQFALBav37jvq/6MgyMA4M7Vs4qA0LgeSxmrdvOmtTdvXNz3qvWFLg5Go7MRYKPgrASKgkaLISTQqRAA8Ori2AoBa9Gs3dObm0m6WGFSmkvMxP0jIkwmkxB/Iaw8QkV7r5BEie6LnWE4jkeIcHJccIgI4K/7UvdV6LeS8+1FvPz1PLl0ECZ/0mPhkvVWUz4tlmWkvogqVd5ms+jMos4N9VeuXqtcqaKnc8ff33/t+j1f9rGzDmlhxhnjHQh+BOrilWKvR10DnqXl+CukRpPNpn8i8a+ICLpzl767J/6hrBjpcDg8rZ37oy0WS9OmTTdZNpn8ijuCJWSHAfM8L4y33aSnpwtVIICxQ6PnH1gFSKRJ2YJIsVQqmvTNz7tOeRZ/IwZ8SC9ZMCgzfiuJgKKgS4MsgKzUjPs3ngeJxVK73VY+wtywovbzPiBoTq8tbNRxukweYmf0v/y8bP6ka5ZZHtUZaLgciibXAwAUNhkIGQAG7AQAiPIo5sl9AADUnAYA4IzA2bB2G/azBIUeE6wsSYlCI4on1xgHWb6UKCMjIygoyP37EASRnp4u2BIxzXvqDiGkCFABQiaj/qPBQ/fZf8NWCg1vBM/8ActBHIP8WwOSACKLvioC7ABWCx4OLdSAAgDgTNh0HDgj1NbjDbdA6VKwNQxWbcpJatPl2+lzmnX93mrKv/7nojoNWmPMlwu3lEenE1Ov3UpQymQyO8MEyJh2HxRM7I55HigSA0nt/n3EipXH9vTPT2vv/sDXs/8kOLutr1e2zOB+cYbsEwhRgaW6rf1+85rtOQghT+UghHJycnieF8yW2a845hy8ZGcmzBRFCSNtAafTKYySMMaFGsN3sxZizFs1VwEQQuiLWZu3ezy19w2pcBRmTO5YoCe3nQkLDwspKChoU0dfq4KlbJilXLjrsem4aBd+ABBLpKlJT8vWGol5npKKzp69ZnHHFD4NQCPqgZoGuhyKGAqYB8CAi1cmvwahJCEFVo8CB2BQUegYxlgsVT6/vS2mWol9Q7o3ypz7y/bv504T1nQhhBISEty+nh7NdEJnwA1CgHkOAMLDI5W16+pwXSSpCKFNi9Z6YQDeve4LAAOiQBwKrBp41rXCUrhzCCkK6ANAQEomNIzGlbJhxw1QOAAAI0iYALNmztq5Z59MEVa90QiT/r5c4Q+AMIaYKHNsdNHFxkCRvMEm+fFgSGiwHAB6NExcMrfXjU4/Z7YArrg38XoOHwauafr4UTK9wYqxw2EvlMlU1/9cap1WYq1qdna2ezlfWk6ax/UE8JLdkhlLAhcGjho1iqZph8MhOBiFnlZQUFCU332JtA6Pkd2YgkhRanq+xfwWQQduqi6Bnc2q1G/QePmP3QGAZdm7d+8u3n3y20EJZluxlRZAgB7fu0ZRIgBQlatWp2y1BHfLcywKTWmD/D+EoEAQKwEXO1neDuwERABgdw0IAcbYZDQqVcVL8w0Wum6s9ezZs5GRkYKFE4ISMMYSsbhUpMlqLyG78OjyPO8kCKpx287+4VK9ozkAvP5LioKBoMGWWbJvgAE4oCJR4EDISII6AQAETjoMAIk9IegJEATJcc6yVT7ct+7nuLY93IEq7tGYiOYPXvan/OuuXTUSABwOx5kzp5d+d6Pbh1H5h7MTSmxK83rOHYJDG282b1yNIAhzwbXA6C7fz/r06PGLnTrEEQRht9tZlnUbr/j4+NODvPtD3g6U6xWv175dW6lUEgTh7t0rFIqde44O6daZ4xyY5xApClIpZn6/xz14fnOir4BKFb3g++IYaJ1OV7169c8CAlb+sX9Sj3hzyWhhWiwxGrTlqrbjOO74jlXKfmANAbgdhAY2ASRCyr7AW0Gk9DAbb49d7Rr34eK7nuOcCv8Se9IgBO3q5P6w9/7woeVYllUEhBr1+QRBiEX098t3LRhRQnMEQfDua+50Al9iLuE18A6QRIHDAJzZu2OKnUhUFiQTsO02Ks/glNMAcONb+GXmj6M+nWzSZcoVSqNeK5aUcBdTJD58NaBT78/LlXN1IkmSrFq1+qTPQo+cUNVa92VC39fdDCWxBcPPmx50bPuB1cZi3gGIbNKu24aRy6pWLs0wjKAcoaRCobj99Pbjfi7Xmxtv2R3pfeSk4+T85fPr1q0bHh5OkuSxY0dzMx+f2791dL89gCh91n6EqMUr91+f8E92ZGmzslLvT5Z5psjlcoZh7HZ7716djl0vjKuhKxr7AwDcvXEWAVflg4F+/vJVS3+5sFeBYlshv9YQVAl4KxAkiEv9K80hwn1lq8tWVqpeEwB43snzWCz1QyX3cLA7iIk9kg+c2Kq1RWXdX1S+/tdWc17fFoXzh5cYMSCE9HotEp5f8c/AHFByoAOAY4AtAFTyMvFmJK4CktqoalXsl4b3nbn88PJoYirGWB4Q/ezxnboNW3hGI/95N7hLv6mloou7qgRBCNvoDh7QeTtmAM94edz19zy+DN3jNp7c9ZnOYDHlnQXccu3ST3re/arlw1a1atUqVaqUwWC4f/9+ujX9hzmvmIvzlh0AOGjH/LHzRYxoxE8jbje+fXfMvQaDjMtWf4EQYTe8QIhSBsofvcjz3GXjDQl6ApLAmu3atfZMtFgsJEn6+/vbbLYnmdHdGhcYLMVNrZ2xVf5goIO1Xjl/2RQUDu1qItUAQGLgrYB5oAL+leYAwJ7vtigqMqlx0/YAYChMFkn8AMBmswrxbW4whr5xuTfvXIw35hU8mf7N531sLy2yYVk7AMIYm/U5/qrS3tlvDuaAoEESBazG1c8rkWsHeRvEmaGl9cFPZ1ctnzdu4nSpIsSoTbMzNlpUbLkN9lBPzQEUTwKZTCZlgCziFuR673/3GmzBIOkOj56ml4oOdtjyAIC12/hvTy84f01sFw/6bdDuwbudlZ3C8w5e5hWyAwCT3ARyWPrdUgCQZ4P1BbTq1FuXm8MY4gHg0rUnd99uoZCL2J0QEFrT00sCRSNtk8nEcVyDD6rm6Z5JRa6fWCyRiUQSf2U0xvyy7xfc0M1DwTVdFwDzII0s7rz8MxAJmHPLDgOKjCoFAIxVR5KuTezEYonQ03BjNLMLV9765rPqW44+yc43qQJL7OHA87zVahVOUec8EmQnAiMGAsE/vUNEwcAWuga8nmAWCBEK+ixnHDwq/6efXFG7+djDz3qkJDypXKOeW1s2lrJYLJ4T3zqdzh0Q3qJF3J/L31p2AHB5HvzY5sTqxcMApATlxzst5SoEXbVqNGHmVdNK7EP/Mq+WnSe12sOVZ8906U9NeecwYJqm1uy5nPupd7E3ocYTkaUsR5Kk50gbY8wWbTVMUiKZ2BXGAwC5WamR5RoHhMQAzxvFFcGvMmAnYA4kUQDuJ839C+x53hcSAAB43un28ptMRp7nAwICBSUF+PslJGXt3DDo8rnra5eOJAC6DNyw+ee+MomEIAiGsTEM45apOvdx+epdAEBG5mKO/OeyAwwiIbiSAIcWOBuUaMExrxrz0Bq9dtX8YSMmRcbEFWY/8OwbYIzsdrs7Al4gOztbcLM5nRydDpV3wvMBnvmvh6fg8EVQdtsxa1r/whdrQitPXrTkF93gfnv+fP2f+XrZNWpc2pqXDIAdTAFBSvUGi7q7d5k3RCKT1KmQkZyc7LkCzeFwZGVlkSQpkUiOnjjY+jNWbxEBAEXTSc8fVf6gN+acJEldNc8GIAA7QfrvOnNuEOFp6gSKLHEJQRMEYTDoJRJpqeiwrgPXbFg5yG2wrTbm+K5P2vXeeHDbxzqdK+7VDUm41oLb+HAEb9dt/wt4oAOB8gN7iQ4fAj7PWXvv7t+GjZhUt8WEE1uGFOZnh4S5nJZi0uzVSSUIQtjMAGN87ty5oT3KLo9Pc+e+FQUMy2NM0oGMKVHiFyGRiMsftaW4tmD9S0rIbsDOAcJihZ0DXEt/xQaIjChrtzME5UeQUgKhJ88y7k/yPOlNkWhhypiOeoN25+5jE8cPFxKNRmNeXp7Qzlos5pa1LTqzGCEMAJzTSdOiSnX72sxqp9PB8EEEyQAd+t9oDgA4m5fmEODMjNTQ0AixVMlzJZx/BEEEyEW9hq6ZPKY5SUp4vnjCy2Jz7PltQG5urkxawv2FEAoIiRHeMzjwX5i6l0A0SEqDPdvz+xu5GkopAIDDbqFoqU5T4JZd3Qr5V65cbd68mXDI83x2dragQn9/f63BgYNRyBVXPW/L3SWgIuR6o8WmfUBLQpcs29B/4yC37Hrv742sSHCJuEUFbtnVfFiz867OU6dO9fPzS09Pj5waaY2xrhuzzmmEz79dosvNsmrvAwBNU5t33PDYJvUtqLYZnLU5iuTC5Onp6emCXwcVbdtLkuTW7YdmfJRvKYroNJuMVNFkC8Y8QQHQIf+Z5gCBa8+yYtRclUsXjn9Qr0lgSAWWcTmuBVSBfsMnbR87onnt6uUVkW31GYeEdJPJGBAQSFHU3B9Oz5zaXuFXvJIcY4gq30R4/9bBtK+HA1EosIwfML8AACAASURBVIXuY4SM2X7dAYDjWLFUyTLF27RViLSsO3qrbNkydrtdUJtgrSmKOnr0eIPQ3QoxVRQ59dYYysLPc04N7N3MadcAgFQiDbgKANDhRIf61+uPHj06JCQkMzNTJpOVmlZq6ZKlwlkUxVGfz/h88eLFUBQ7ExQUNGHCBIvFEjhDGf9wIbtZT1Byq+YeQckKNAa6jKvY2xJ+FqyVWADUqGLqzYu/5xoiW8Y1VKlUer0+/llCQV7a5N7pbs0BAEEQjFXLWDQAMOubsUAd+u80B4BZ4L2tXbxtZN2E1gBA0VKKIrWFuf6BQQAg95P0G/nH6b3j1Fojx7EASFgpByD4SnQqVdDWn0cNGfPr52PiwkJc3r6UFw+iq5ScAP9vQQSIw4CzgsMAiEDgVHOVKZp2OhwYc04PHfE8jO6UlpO6Zuf5kN492qlUKozx8ZMXnfb8fk3uJSdyDMt3bhlxFIp3nHhz7IGgN5oBgKBkCJFisdjOQIhacaLjCSjydZQrV06j0YwbN040U7Rg/gIAoGrdrdW5c2ePeiAwMFAkEuXn5w8ZPPiLcwstFjNBKYTujkQievMQTi9EHuajYUwqRaZcf6yx2+0isahShLlzDaMw/SqAEJGXnQYYC3enV5/pTUEkYAyuBhFBUU8L4BUtLAAAUey4wZgvzE33DwwS0eThUw8WzmxfoDEQCIlkpRCiwaPFRAgZDAaOkx8+vL99u14//dDT4eDEUhlJUsKPxtis/1HH7lWQMiAkwBYAoCx7e4VKosvPrdV87PXjcz1LYYBwpW3B8MSdl5ysnQGADjXVwJntTonDzgACwCDRAeN6xszb8eCxy+hyDoMdBQwa0qvM5zrYUlyAIAiMsb+/f5cuXdS/qH8Z/Qs14s6IuLFxxUUAtFqtSCQiSdJms9Vv9wUAWDS3CFpOIPhu4c5z3vMcb4rcjyRJiuNczhGF3K9d3Xy3V9NTcwCAEDIadMKcJklRtpIrBv4ORIJDD8CB01LCyyqJ8nB9kcC9FI1E0ED5M06KIAjGqqvWaHjq02NisXjzrgsyiaRM6TDOYQwoPxgBIgix1xyX8EeZLfZDR/d/Mqzv6kWDL58/LRFLSUqCee7k4d2pztkESvU85b8EESCJAocO/g9t3xkYVdG2fc2csi2bnpDQe28qCKiASLMgzU6TpgKKgCJWRH1UBBFFQZCmqIiigKKIdAQEBEVQegnpPbvZvufsOTPfj7PZbJYg+jzvd/GHzM7p19xzz92GycbqXjLZqCCIoqRp1TKPEJS7Tf06Fxp/UqiOSkaIyJhOBaFl4/gmPxadGRnp/i8gm2E2S8FgiGkBJsa1ad/NI9Zw8CiKYqhSZrO5o94xpSJFNMJQbTabsT9GeXm5IAiiKOq6LooiEewAiCE2CDHJIvDfagFRIITMeXtTTr7SsU29Z6YOUNUrbKEAgDqNugGwmC0V5f+AdkSAWg6mhMVYNOcIqWFu5VeEIXEGKZnC42IZRkPrLiNOHV79xVfbyipCL0wfqKvO9DZP6qobAGraHVEljF0FWxIbDBsy7L6lKzbe0C6dcY0zPT4+Ye3nG4CXYg65OhgCBaBmELHaniinAAScxyyxq8F1iPEQ6wEFRgOp2pcnBrIsigKdt2jzX2fLPl40wlHpM67yvxijflsEu9kSDIa8ZYcSGw412zLS0yy6Ht6tz+FwRBRKXdebNm06bsU4EQDn3OPxGHVGjHstKioKJ99bRBDKND8AxrjP9z9xzut2WGzhIDbG0LUB6Xxz7yef+3jU/bd0bt/0yndqtiYCACF6rKGjNgSNcUwAAqYwfwmNbwymA4Bc7dEHALWs5uk4zGHVIZcPEwSBMeZzFTZs1fe7fd8t+M84VdVSW07SVdff3ASllDEWdJ8fMeqR66/7sm+P+qlNhgGgVFDKHdSWF3vAVUEhp0DzgKvV7yNoaF0EIDDVfJZo/K3uK4qCJIpTZq3UNCx4b9kjEycBKCnIprSGN/m/Aav5NjlIVRgiqsYkISQvL8/4DydcNCrqR7vwBEEwaisRQnRdp1RWvZcN++S/ipC5Eh6XM0I7TVOHTZzR4ca+w+8f9+jDo1Z+duDVZ4c3aZTicoc35QFwJRGvilBV3gBnzFsA6DS+aZhztZykJnuiKuSd1x6c99ZjTz39Cuesw02PsOXfaxoDGAHhV+dcBIr7vK5d361LyomzjntvbA7g6JEDNDURV0zpfwfBaqwSopqiXohSDDEOgi32KQwYqnDNn8xmucLhfen1r0wWccE7y1LTM/74ZWvAD0GU/D7Pf6k318Qvv51v0SQ8UTRtYP9xX3afPtWnpZSWlpYqiiKK4qFDh5bOWiqelk4bEbNGRF4gEDBKhwKQZXnK6HYglOl+KsYBUGv4ga4Cj4QTiQBwyY7TiaRC5ulBdKoUSHZ0L8549773vPvC6LFPzX9v8ZKEhKTJj9732zHHorlD6mZUh/WGO8f8HQOmgIUAgAjMkw2AxjerVr/EuEjH2iGnR12BVlaUGOOQVamhuuY3ag9eE4wFfT7PwNsHX/pzkz2pASXs2w3rTqvjYvtdE+Z0KDEiOQICzQfNA7lOTWoCgKOsiKBGo9VimjxzJWN4aNToQXffr6qKyWz94cuPABBA1zTDSkUIrkjv+qfQTbicUxKhndls+uuPA4Q8zDk33mRpaamRwKYoSkAOKCZFXPnEyvK15U83eppSatRqFUWRc56env7h0mUzxrc3W8O+cF3/2/v6uBl5rRHieoFYiLVG/U0CYDd8tv4et7NuoxZaSAXAODyVZR27dQt43Za4eJfL+dbbH8XZE06fPD7uiVnrVo4Pj9trIlQBFuYHc10Alai9UTXnzHWuxdkaIND/ykvdv2/Hzbf0ZUwTBALAHBeOF/obqKoiihIhIhFMANLqddRCgUAwcDzLe1EbSUisjfBaEGCuV6U2RINUjRAaVhUs9cJDDgAgCpKu60ZMZSikv/fR9zt2VJ7O+9VZmAdAVZWk1LovTrhtyIh+P7+0s7wkP2IZPZ3lOv1m5DRVWNISVcm/mHquxk9RKG8PfBv5iysqa5X+V3Z2tiHeIiom53zjxo3z35oPw1y89d6tdB0doAy48cYbGWOyLB89evT8+fPz3pr31MXq0jG//n6+NiUVAEi7uwnthPReYG6AQHfH9gACRtXgmvNn3xEvLXhi2JOvLff7vVwPej3uho2azp791JARC3t1t9+XkWX0JfwqDGRB6CoIBaHMdRFUIlJctYpDxH/AuVh96ARe/OLzaQPuutfnciYnxgH8mtK2GhzG1ZmQBODJSaNPs5f/PecAAFwHaMztcc0HwRRVN5fDnwNTnYieEJ+a7iwpAkDABw77ePFHry76bJAz5zIAEEqpvPqdqfUaJapqSJZRWpxbdR4IlKDYSua3AYBvUwAdoMTWHTScWMPf/QlgGOriC3+PHFUbiKqqHa+/dfmPH3Wr171Hjx4+n48QYrfbDx8+PO+teUYnEYBiUjaO3bgRG7v+2rXrL13Xj1lfPr6WeJXDv52rhXZ76pAJHUjaFDAfmOcq7AAAQqkoSqUFOclpmahaDrrys+xxvl9+eLlJs4bGpCaaUm7oeuuOXZvi4+PvHDhgpulQjx6962RaUVLzdAZUB4gAEObNA5XANGJKDhNFjIdgje1/JWrMsABQyVpmqzeuXDLvoVGPVrp8APmbh4oBh8ZZCEBKajohxMcS8tSe+K9VdlM6NDf06lU8Ea08WMFCHiInEFMSgPD6nYiQUwCAUL/fP27MmNvv6HP02Hu6HnLlFThzN4IzgMQnJv555PeRj97ldns4B6WCQWuTRPf8UoQta4mUCHCkhK4cjSRlMsBxwEzabOOhXH5uM4SrjUYuCOJHLy39CMtTK1KH7Rx2vvX5U41OlY+uJlWUlQE42u3o0W6x2UpcV8zxrVR/wZUXIR3ugjSMpCSB+UDEqiiJ2rEj9PVTcc+4XQ7ZbLHHJ4U/JZEGDLrtm7XfySZT3XoZAPSQuzJvM8Adurp23Sd7f95318DBnTrVtnwjojHKueIAZ2A6jasf5pAUD/oPOAdcSSkK9VBwceqmZqPHPh4IagAU32VbWrcre0ZDEEQAVLBwzk0mc0gLzX39mR3atwiVQYgtDfGPwSHaQURo1bMHMaeAUB7ycNVF7U3Cz8s1KCWAfFfvHsMfuGfjd9+6y45XZH9j3DMhAogQnxC38M0VL7052ef1u1w1piNFZTIBle1VQWUagCsVR4CAK4i7lQDo3An+o/zSNVIGy1PKVzyxIrb1n0SgcK5TKR4oYKzGYo50uQOsFRGSwHWY0kGkGLERgxBPXLfl8l296xfmXGjVIZyNy3mIs9CEKaPffHnJ40+PNnICDBMGEUzuwh03tE34cMV7z82YXlNRBoAqMUB4yAeAmOzVboZ/yjlAKYG5bsydU1J4KW7i/HmvG+t7KlgFKVEPVVdsvRKCIDCmx6XdnJScMv+tpcuWv7N40UpmJoQIUEpgqhN7wD+HYEHIhaj1JjElgYCrXua6SBObR2xuDeSvn33+pUYp5aUX1xEqA5QzhVATZwqIdPL4GUEwuys9uQUFMavXgKIXoBOkqmxNQgECpQI8gFreOwAQcwdO40kzXJN5teLatIugQd3k3MKqUXIgDQ6FpNwEAHI6SNgRFAah0IM1nFGADquxpYzZYqNClZqpK1Syu1xuixlWmzU3J8eohGqxWC0WC2OMhyoldc+DD/X/4SuhhouJUCjloAIECVwHodXX/1ffuJYxDYCcVhd3OWaOT4mTJSGoMNWXI0jxV+kMAIYFikp2Yo27fBltb3pYSl1BXGHbFagUrfj/a8jJCFWdCgBA5GSueiHIzJVFTInElMS4van5SIeGzSrdGqEywEVTmmxtxKGDCKJ2Zs2KvVNmDDKZZfWK4mjbDxbI0Y9mKMdyIkgKQs5aPDoAQInciFu6kOaSkUwEIDwACAlFJR/WimvQLtrSPW5E331vrTL+T0Z3IOnPgPlhzoy1UhIBShG4DlMN9y2BmpMbtA+Q3N5QUU4WrXrOlCYjSs8unjrr0W3f7+7W83pjE0tFCfr9Prs9XhRFUY7v2SWh2Yb1WdpQVCtKHJQA4J4cgw3EWhfMCDAnfy93AY4aMyYz/mTcAhgG6gpK9p8Vbpp9X+dFy795dMwAZ+43ddrO1NXqsI5oGFZ4zjRKpaN7t77w0m0bVz29K7iM80rOUgEBAQ81m69xUwZUBwiFnFLD/0ZlcD3avghwItu56gEVechLzMlx9FKifqDS3RAAZ5oc10yQ4hgLAuBczc8vat8pNaNe+umz5w3ORWVSQ/WHtgeOUHq2usmA4fwgEkLOmlc3QImlCw+elKuyIiVrJjgS4hPWfLrm7+uhX4N2Lzw7ed6C5eb4Fn7HH0EFNmPILWtBMl+GIIPba3KOIFQOFkKMGk4EBIuIKf249NZPB964qXN6MOjVNVZUVJCWVkdTKlKajHDkfvPHbxfi4m0t2zUzoicEQfD7faIo2Ww2TedtQu8qQmYBC4cSQfOE5T8RAA2chTnH2bU4h+iQIQapv2mimRfaqUfnqFOvHhFoSV4eBQKcdOg0Yc2aZd9v+23w7V3LLyxPqD+ECrEWc8653R4PIL7uQJNJfuXlOVsO5vdsU//+emu4CXKctVmz1ieOHTMJAFDBmm9TvqekRhp2DcgpCDkRLAQYOIE5M9zTXA9qcY0ZRU7kQSeoCIB4Lw5q8NzSdx5zVnolSz1BNtZVYbhLf/902Xcvz5vqrKiMyJEEOwwVghCU6o0oPVNzKEZBsEC0IZBfG/M0kvSQ8OmxMff3Li6ttCS2BRgRqMtRu7czAtGeh9vHgxB4vLBZ4W6Gwy+AcXgbA4Ae3mrSDq4TQmw22VSmqfObo64YK+RgpMNECxICPQDNBcDQuvK1e4tznytpYK+TYmnTPGnZh2/PnrMAAAdPrD/kudfin3rso/lLupSVlladAZoWqqx0JiYmrVr8yCOPzcqT8inJZjwhnp3snfCi7q+ABACU4Ff2uo9lBoRmV3l5USACuM6QeF/cgDr1M954aylQvd9BBIIg/PbbYa+H/fzL2UfG9C8prXQX/pjYcHhMN0mSjW/pK9n91PQvKcX6lS9t/ukbSgUWdpNUg1I6940hl06e/xE/BhFrFQcAcEiJCBaBUBBAKQY1MbFxCv21b8IEj7dax/sTz+fbByBwGiw0MG32vFdGOSu9srUhleKjOUeouOajr6c/P9bldJ+/eCmSQtGuebzXH+IcP+7L26nsjvSvHZxBSoBWI7M/DGIauC6n4obqQhNHDu9PrQcAtiIIKlqtR6NtCAQBwGrByXE4MwKipwF2L0Kn0fj+iyeWfbK90uW7aQH9+WAeBRISUKJUcs4BRqjMGH9u2vA/52w9Ed8nco2aCM9WACDGI+QAq5rjBRsASgoPalOtZ1befoulTdOE3y9Uy1oimLwe/5hHbvpp854bureLtAMghDDGRFFw+pCYvKuSdX3A0tbpRtvmXd946yujT1lZycqPFm7f+ntJ+szzoXsp/n60cSY172ebOPPZ11q36RgJiomBruvXXdf1i6++uXfYvR+v3XFn/64AdeZsSGk6KrqbzWYzJtnLuWVef+iZZ59r1/46KphDwQpViZqUOY9Laqlr/meeff34iV/dr9+53XyU4oq0MwNSHAw/OAQrigexQa27dDRbuj//ykI96AcAzp9/dkrumbkb6baQ+2y8STHUKsGUzKuM5wa0kOFPZ5Vud4RzokgVVQeQkmgqKFH/l/QiznSfH6GQDkCQkwk0znlRN/TtAkLQukViUqJNbi9OHN0vNTm++7fvGjVeRQAVbXFkM26/c/FnH03RAoVEMI15QAaQlGjbsuNYty73PT1z1KRJt10+uT85Ma7VGdefSYOqfaARxDhzqAytagRwHYIFnAH0ovZIC+due5wu+MmxYxdZZNs4rpviGrTvJJ88cZHUDPwH4PG4CSFPTO4xZb1/FG376YbdlZUOAO6qrY5Nsunxqc9PeYLHx9vHDO++TjtFUUMHrwl2j9Rjziuv1G/Q4mqci8aufT8PvK13uzYNG9RNj3GcJyQkGouJQFB9672fxo0f2aJZg6xjH4gmO42K3jNQlrtbDVQ06jCuyw29tu6886GhXddrJylq0xcFO/SgBZ4xqWNUa+NFH2w2grGdJdV+i+dfnJuUWW/EkMFaskuWRHBwpsRwjlBTHL00acbDqqo6HNUvhACD+zT0B7XVm87vUlcR6Z9wrrZZRDBDTOvaLhOApvp37/z+nfkrundLeX3gwIa3pVFKAEiSpKpqSAsOH7Pq9/3h48L099bD8S2wa/0FyawpFUwLuPI3O52sR5eWWze2+OKbPf36fb5myThdZxUeMEGNfaWExior0c9Pxcgin8B9KPhmXtETSfHyrd1TUpq0dOZcNH6yJl/nyF5/55BbU9JSCvLzr3RR6zq70zq598AhBueuBCHE4/E+PGWasKLd5/7TlNTejfH0+s2atGhzfcBboxjl1eCsKOvZq/OcudvXfDiGc27sB2kgEkLx0psbx44fdfONLUqytsiWKkvEFZAtKQXnvhEla+OOjzZv17LbmelH1VdiO4XBu5rnt+p2x7SZzzvLq7WOaDiLCr7YuGn8iHsa1JU4QGPN45yrhUuXfj5i7H1Z2TkRUUcIcvKdCbKaX+xjHi2gt6ISif18MSACQs7YLHHBBCnRgqI7+9+QkZ745nu/Korz1Rf6t2vTMBhUZUkqKCrmnFe6XMlJttff2Z0ztvrQGlH+U0fXfeOtDzVNAzgVzJricBduByGyLKmqNnnmZ0vmjyp3uLu/9iK11jQHEAGB/Gr7AmegUpQzPgFCdZIBIA0l3cY/2BzAhbIGD497PNxMSLDybMh3oay0XJKFGIEXH5/w6+/nP1z+674/DjmLwlFlVwxBDkCS5PfeefXrY61OhiZf0QEA7CTv4meCUIs1pJazGUhq1KxP5+tat7K/MOOexMZjS88u2rfnxMC7b1OC4VnysRmfrVgy01l29h8VAyCEELFpx4cfGzn4y9CB2F8BgLCgc2q7qfMWfBj018jquBI2W9yPG97o1K4xleJla8NIO6GmyqK9b7/27fP/GZmTl1fdTsi7y36ePqbVknUXj+qvFQbaAgLkqw4VwPi+eTWWFIIZYhIHv0Get2dJg7FPLGvZPO3JR+4KBFVCiD8QyMsvMIhuMolr1h36dVDgr6i1bQ3+nrEWvjrnqZdefptzMF2hoi2p0b2chSrzvuOcv/fGgzNe+rx7lyad4/7zpz7rb4xYIEYuYAQxIynkktvkF1fWTbd+smbP+Eem60YQLOeW5E5+x9E1y394+qWHK2tu42ygXgNBj3wGQn2l+zUj9BIgVLJn9qVUDoXUB0dMOH98yp/8HUouRY6NoBd7SKQbatKa6CFf4cVvI+5OKkh1WwwHwmLAkX3x+y3fDR86RFFD3tJfog4EgLTU+LEPXV9Zfi6WcwRM5wAICQd2h9s55zzkq7x8c/87vthAqIVHLhQ+TCm1C4Wv/WfBNTkHQBAEsaYdzoAWLPj917MPjrkpryA/un3XvjOZ6fKZrEqbIOUrD1GcAFeMZVZ0txrQ/TU4x3WIiQADaB22fcRj6nPTBjWqn+IPKHn5BaqmEVTvB/bX6UKntwbnEEO7nR/h4vasyhlT5r39vlEtmnMdhCY2HEapyZHz1aI3RweC6sXTX52omEBMKWETBgAwEBHXVks544lA0qnQo5ZfZg++hTw7qdGCeW/MnvO61+sGwPWgvU6frt1P/bhpx4BBvb3e2JeeWa+hFgqBUMWT5Xf8Hj3fcaa68jYDoERPzuj7+HNvHHvzpTOhcdUHG91Am7fIiOIc8VVeLMvdQwUZAIdmaJZMV3JPfaprgczmg63xTZgeDGmhocPvePnNL956ZZKxFYIBUaQr1uzpf2tLo2C+AUppSVlFjJ7AGMtIT43My8XZuwb2Su+6bfbv/scBVFsGCOEQbpae5vzzcAs4oeaQPw8gnIfM8a30UA31IK+gvH2bajkHgBDxwqlf/QFvq/Y9LlysHnsbfvhdVdTuHdMOHC78KbghVdhVHmxLaTHUckhXyaQgApQKRJRaakHVYrmjtMRMgisXT3Z7Apeyc42adJEdfACoIW2denb/FYkQNWdrIHsA1nUsmV3uslnjDT+jAcaU5CYjKy6uMpsssj3V7nB4FQZTWph5nMOcgWABYucpAIBaDlsTxqRbTRPjg388NGYUJUKnznNFUdy3b3e7duYpj01YuGixEfgvWTJ79e2x5J3PPG4/Y5pQNWgMJCenaLpembsJQDTnopGVU8gurzGbpY7KrjM0lnYA0aryNggRsk4sFQQzFWS/P+D2+QkIIdAZS4yPi7NaIVpKs3cQKjVo8xCAUaMf3bVjh655oy/t8wXXbjh9W8/mkRYARSXlQpUnJgJKaXFpeZ20FIP0lNKS4nyNV3lsoyQlZ8n1UsNGAKYHHZfXiabqSdBXfpTp/tTmE5kWHpYOZ6xpg4UKV3+4b9VXs8pLwgUYGOOMaXFWU0r91Aofhg/vdl3urKCiAThxIudn7zPFuEraveaq5hzXUVXklIUSO9vW3tr3eofTm1tVHjkaWdllW3ed2b8nphm4knYA/Bl4eOCjq9Z8lJSYHD1emeZLbPyAK2/z268+kDNtwTbnO0QpqXZFcB1EqqVCDAAqQ3V0s7772ow7ew5c5ijIiUxGQ4c9IIjitm2b5s99/iljC1RCdV0dOKjn3u377xjaP1iz8i8BBeeMqbSm5y0auq4TQiRRUHSAsiiRHEZE0LnK/zLOE9I0f1CJTFWUUp8/6PL4MtJSAHCuhZRKSU7Qdb1vv75VRwMA59zrU+7sF45wNFpKy51Xcs4ApVRRVVmSAJSUVdisscZnAz3t027uNQQAFa2VeZuiOWeACtaKi6uTGz9ohNaxGqVEAc4DnuLe/RrmZueXVtX98PmVJauOvPXy7ZWucEhL+zb1jP8kJVqDW9/+FhMIaok8QhW5AcDSIDwXc6Wp+L49ObH/rZ38gWB0dLqBpETrT3vOXa2idS20A/DzcTzV+7G589/LjCqkCoCA2FJuLK84cn2zytxTn50J3k9CjmoXspwCPRAdLhEB08ROqb+17/CYszAvRgHSNe2ddz8pKsxb8dG7k6bM1HVdNKW3amfd8cP+P4+dbt66UbSDzuOpVN2nIpzLKyhkjGmaJgiUUKFZo4YcMIaKxxu8qU+TjfvrUlIcOTwGzoJDRJCclW7DKh4DURBKK5zpKUngvOjid6kN+ljjG40aM5m7tkWki8UsPz3n2y+XjyotcwMghJQ7Kq/GOQMutzcjLYVxfuVSPQKJ+Pr0u0tXK5053xAqESC/qIgxFgpplFJBEARK62VmOLLXpTSfACA+vkaQi+a/sPTdtVOfedjpcvl9flkWP1l3KBAMvf5C/wjnotGscdrzsxrISzp97d8V+5seqQeqw1K/inNaM6xvGlrxynOPuj3+S1nZ0VWLDcye+9OPsTpwNWqnHQi+3wNy2/Q1n2+KMbWb7I19Fb8++cidp2asOo+hjInQ3BCrDO6CBeBhi52cZuRvAugRN+c/byypPgtAqMQ0X8TOVLdeoz/+OLlg/pwXZ7+FjD7OnK8feHjQ6qU/tO3YMjrrLqiEtGAxAIHScxcvGYwkhDDGwbTT5y8kxleb/jnnUaKtujliGmVMFQSpVs4ZoISUOyptVovFbCrL3V2v5T1yXOqilT89dM8tRofi0sqMVOr3h9ez/2RPVca4KAp5hSXRw+lKEEI9xTsJlQAUlpQoStWcyxhjLATkFxbVq5vhrzgWZ+1mtZiqn5SIXq/bbKacMVUNEUJWfv6LxSSOGNkjEAhvi4qaZeYBuD3BgFOBidZU0Ak0Dzgg2iDGh7VPzqGW3Ri/Yvzj/d0eP2PsSs4lJ9r+dqPp+AAAIABJREFUWBjTVgNXoR3ABeTfC7PZ7K+5mGK6As78AbXnTS1CRyb95FkJPQApEZxxCByEivZwBgqhkNOhlHBCTMRji4uLFBaloq0iay0Bjyg0nGkfLnxs0tQPnnx87Nz5HxIiZjbIpJTXrZeRfTkn8oI8bj/X3IIgnLtw8crPJgqCx+uNSBEqUIP0MRCj1mSaVmNQWcwypcTvV2w2EwCvTwHg8fpsFjMDzTu7rmnnxyMlAQDIkli/bqLRDQjnxxuIs5n8AdVilgF4fdVloAgh5U6XcfOUEJEyUAl6MMbjqYd8xrJaFEWfz3/lwyqqCsDv/IM06pmUYKtiHVc85zeu+75F66aiKDocjqTEOFVVn5821Gq1cF5dYhTApcvZ0RK3522NNx9IpaTKRkgolDJwzs0NOVDt+FFLOE9KSItr06J+UAkFahaSAkAp2bLzz6L3Yppr4Kq0A/D7VNx7yx2frv0mpt2e0ddTsvfeu286cWIN94AAzOfJtP+VTM4ICHrRIEseCrWUAiAUpjo8QDPYycgGRQApPbdYlJOjOUGoWFlRtPL98dNe+DTObmcZvd1Fe+4b2be4qFSS5IgvweEoE0Xx/OkzV34GA5H3aI8z79ubBVrLjH/ubPW06/FVD6rSMteGH04gAFGApqHMj9kzexm2D39QMZtkQTB7yk863V5JEgBQSj5YscVsDo91SiljzBC9Vov86us77FboGnRg5MguddLsakg3joqIrvNZJce0lZBUyCJCDnAO3QeAEk137RclE4DikqvKxZzc/KZNGjtyvkxOtnOAcEYFq93GHOXBEeNucjgr01MT3lm6+6OFkx1O75XqV5uWLU6fC1f9BqCqeg1Rp7mYntTCvk3CTpm43bxxvnabxiiH3M3+9pJ3Hrt8uVgUhOKScHVrA5xzURQO/xYxrNaOv6MdgB8OYNO7nw0ZOiLaKSTICYKUoIdcc18dV/jMjERL4IFBbe/s36G0TAUoIYV10tbu+eXs+i93rPFepKQYlnohzZjyAMBfcVS8inGy3OGePXPo6Afv6tr9luED6mbWz3jzpbVPPjuU0PCDuVyMUso5J4S4vYEvvj560P8qSKiP7fWevVo3bZwWWb1fzikXTQL1XgZnkTRYAATsiGlVUmqas7xMNCXCH9a4kxOtDy4f5WDtQDk4IAB2/YNlvZ+eemtIYy6311YnVWfMUXh4/y8VrzwTLlFY4fTNnX2/zxcE4HC6CCH2OPOCJfvO60P+suwDp0ag1s6vvL1Dtz/7VB9VrRauoZC+86c/OQKAAK6FFRUpAcBO9Zt5797w4qzRkiRWOJySJImUzn9/b6H1oTK90/XywpCndOYTvRnn5RWOBmYpNdnOuWayt6Tq8ddnrx4/ZTjA9/5y4sixktWLJhWW1GIBBaCGQq2aN7uQddn4s33ruhm//1TKugDcDO+ojDsmTRzeuGF6pSsASLJckmD/bsTYJZ64Dv07uy9fThdF8cy5cBhVBKXlni+OHd9yILqtFlyDdgA+XvXd+KkvOAvyohupaNNDLlXVZDW3XftGXTo3LC0LB99yzotLK1s3z+javV3FgR4/KpuiDwRArr4INfDBW2OnvrBa4q0G396lV9+mZ/86f0OPzoQQs0nWGaggUEpNJmnt6oMblJOUZYGF1jp3erb0mzWzbjAYlotuT+Csdh8AEIpQJaTq8gjl2g33D7n+yw07S62p8ZrirHQD+OXIJZUn1NQFhT/FF77a9N7wu7tUtxESs2o0pmlKqapplJAtO/4q0rqe8E6kpmoR5WUt7FbUdLvg+21/5vP2qC3VgkIpctfIs3xv2d690ha/mkoR+t4/MEE6vWvf9L692tQUhHzfrt+ogJTUJErw9easr1dPKCiuUQs6BjpjsiypagjA+axSJ28JwEKct4UGvzHnUbc3UOkKzwaqqpVVuN9bMOqZOZ8//shkh8NbXu6IEcOE4Ktvj/94ldVrNK5Nu5wluPWG7nuPHoxyScFep3fF5U8lydy6ZerE0X1iNCQAhGDYoG7H/1wnlCUwuEOWBFmWI7pdBJUul8NpBLnAarVkpKdTSn0B5ZVZ9z/5/Jcj7rnlzqEDX5y29OY+3TVNS09LUEPhibms3OMhjSmphJQKpZAS1x/CzHnvvzPt0Z4AzCZp89YzPn9niBRgYAq4HgmBpsQrQF63dvmdgx7M/nOpITsDwZCb3RCz7M3Wh5aUvpmTV9GoQYo/qJhkCcDffEVJFC6cK/vF/SWl5VA8kNNAKMABTggUVYsIY0kUiks9u9U1tPbUbU5FyR5nCSohzrlZFn1iy6CaSGHYY30u1jivwAGgtKy8UYOwLCdE+vP4uRFjB6mqmpVdsn71eH9ANZSEsvIKt8djzLOCIDSoV+/K5TZjTGEtQLy38VuWvT/e4w1c+aCEkOQk2wfLfxzzQB+nqzJmMb5h8+/+DuCxJ64F16ZdXm/Qd/jrzz8zZeq0yGWY7ren3TT58Sc/fHuir2odFwNFCb3+0gg2s8NqxXlZH+5yOS0WGwjhVbY9fyDgcFaiSiELBIKXc3JVVW3dsoXZJM2bM/zukSu+XDHm9iGd1676+oGHh7VpWd/QxASBfvX1ke2uLdTCQQBTBpSSvOCwrvICADab/NbCneeVB7KDN4JdognNwXWo5eAa5DRQE8C/CvxBvrtxxKiJ5riGqaS4tMJpjzMlCIc9rHHV7QMAhbpJPRzc1H3aEz2j22sFAc5cLF7nPERpLgCAQy0FABaCOZNzmGTRCBCqkxb/7Ks//Eh/vQrnAPAfgtvHP971s48mpyQn/Xzo9F51dbUkVssp170+JklCRGOmgiUUKOlxS8eUtOQzF/KXf7J74eujCYEkiueqvBTGe2aMZefmNm3SOJoynPNDe3OoqXSgNGjOU8MU9aoh+G++NHLo6OWDbw8LiwjqpMWfbuTbOz+67aq4Nu0A5PTD4S8OPJ/wittdHaUj2xpIkhC9RrsS/oAqpac1Kpn3lzrtlwOL+vW/C1ERHAWFRTGaAQBZljUtJIpSRnpC186pVot8U+8bD+w5rqohURCMJyWEGBVaECwGESDGQbQZ23pxzt98Z+eF0F3nfd0AAioybw611WfcTokTIScEK0Q7IRXrvBfKb8rYfnj/8Z/nZ6SmpCfH0Z0KEGte5oSW2+9IT4FS24eo9rIyRgg5dPgMpdkxZwCVMvSvPIGwmExMsL7+3o6grTsNqIhaVDGeSEn166VQysz9pr205oXpwxrWTaHQdJgAgGtgIRC6M7DsRfNGvz+8kCREtpqcGfXqiqLw8dp9qxY95vL4NV2/cCnrypdMCLGYTEFFAWBUrkhMsOqJbTOVo4LiTE9LuHL6ikBR1AF9GjC9hqwxyeIb724/VF2u8xr4R7QDcGQ69u/b3vm68A7mAABOqHQl5wghhrk/pGkAnp7c3//iW59h0ndff9Kv/10ADFuUzlj067DHmSklHm+QMX45N791i+aKoi34z8jnX/vs6ceHJCSJilItGPx+BRwACU9hmgdcB1I4w9mLxcW861n37Yjk+3AOQrpa3j7qfY8KZ6H7wXVIiZRcPJ684o5ePZcvneioKPX4lKHihI+V2HApArVA63n81Lo2LWtYzgFwxhlDeFsjSgBU+qRYzgEAGpt+GDG0k6rqVqs8Z/5PQcvNu/0roi/EQYZZu34b2BkdEXQ4+L6VTHx1/ldvvXwPvjGEHYdaZlidTMRdc75n2Vl59RrU37rjt8yMOI8vCEIuX84WRJEQEh9nBoHPr0b4VFBcnJKUJAqCPxgUKM0vdP6qPNZZenfRG6MjfSRJAufGd4wgpOk3Xt8i2gENoKDIGQiqSrX+fA38U9qVdcSCyfO//Pq7KDtILQhpWmlZmc8fIEDjBg0kWUpJtis2MS241avJ8fGJbnelLa170H0+cgjn/PBvWUf/KOAh1G1g79erZVKi7cz5C21atsgvqNh30HH/0PKHHx0R4/Jz6XaQKHc4EerJ35js2LYv72jFUyA1xiLz5PjM6c2tC7OUOwACpkCtgKlOBWt9JG7VpCcnNG+R/uQjtzp1xNGTfl43+lgA+dqQ0vLlbVrGNIMDggBuxJiAnDlfpCE6visC3hQHM9N7CyJd+dmB49qHBY42VLgEOQVVBm0bKboyvpcSx+7AijrKyUenPyBKI0Iag+aNWDoBHDmW1bRRimHAE4XQ1m8PTp814pvNf7zznwc455ezcwyP9obv/yjIc4MjNdMycdQtPp8CgEXxxmyWPvn0UBlblqJNo0IvzrgoCHmFhW63h1BaPzPDav27BFDOsXbDiS27Y9v/Bv+UdgC2/IJ7xg/pLLV87oUrq2UAQElpmc/vB2BIu7zCQgAtmjb9aOEjYx6Z/H1gw33Dhw6/9667Bz/I9aAoWhhjlNI9B84vP/O6g7WBAF5Il6+r81BCyynjbr1wKctqsez+dvKoScvnzr5nz7a9D0+4L3ItDjGmVkxhqNt6x0bmuRzDOQAA6UDWtuzcYvnv9cu0DgAB1xAsAFCJxJ/IJlxO+fAl3t90aAAZuymwi4ABPDIDUuI6vC/77gHXGYHgEXDORYFELLCnzuZtL32FsTwARI4nslHGQbzeutInZfZ/7wkOamxoTIkDLFI+DAC93XKvRMEVBzF0BUEG4+AhipIySNvxDdM5hT+ac2DBkMbMZvOyj7ePH9n31IlzCcmm7rcv2fPtI16fcjHrsiyLu/adv3iuYJ1royFEWY7VsfCOp568TVG0upkZoVAov7DIYpY/XLbry8BxjvRxE/uD43JOrjGnGe6H4tIyi9mSmVGdIR+9HCGELF657/t9Nb7FNfEvaAdg+2oI3c/HJya7q+J7jWWg8X9/IDwPmkyiJAqG7b6wpDg5uXlIBwfZ7ltMPhublt60Vf0Urvsy6tQpLStT1JAZZZw1J+AEALtUHOzwwcrd0yf183r9bq9y14B2L7yxvoEZ9uSE5CRk55VxwEqd4GaQatH792WpfX4MHj4k98yra8p+oKaavOQMahnjbFtgIYOZCqUgMkABBt1nqG9EMnI3dQCEwDD8AtVRdGaTWO4I8qpVHFfdIJTISeDqb94nj9VmtY7ARvyzX531wfsL4ah6BD16yc8BQiM6AyFgjLMg0yubN0lLTEjQdd1kkn749uCb702v0/iw2xvMyc0HyPa957OyXOscB6lQxW9ub9EyUdMY5zwUCpnNZl1XP1y9/8vAn5R6O+GxRvXTjAUvIUSWBFkWPV6FEHi8noZSPWOiM8nSxu+PPDqmR/icwKXRf/fma8W/ox2AbQfwzaoVA26/B4CiBG02c8QjadwugKUfH/RWBl+cNcDjDTqdlZVuf4cOqT+dkAKwbmefJK0a+/6KZcXZ+xPi7QWFhaPv6375zRc2KjtI1bfZ45nTL/6pxSt2TRjV0+P13j2wy469pxo1Tdnx475BA5rn5pcScIkAXIrSyKsQFUBfDS5qDF26dwuZEk3smKo1IeIVswahAChUMKA6A4gY+lO5pf3RPy63b1MfACFhtRUApcS4miDQYBAas0VGAlcqeaCcWNMJD0BMAABevYljBJzL18e9nJkxPqa9FlARTGP+Emh+EAEyMtMSDJsI56xu/ThZwHUdm5tkWVXVhHjL5ayydWUHqZATOUGSeKpZ4wxdZzpjnHN/oHLRiv0lWmfKS+B3MKspNcV+8nSx8RHXrP+9stg9aVJPQ+pHnByCQM9edHt8CgBCyXtLf/5rf+QK/xT/mnZMxEfZ6+5JmOBxVS7+8HN38VaxpgUoKcFqQvCL0i+tix/s0qVJ+zZ1Q2qIEAoQQPBz+6qK77wT7vMH1M+WTWrfpvWJU2caN0u6p+D2Ta71xhkI2E73u3WlXx2L5z4xoUfrVk2XLhivhvSZk1cPHnsLISTebr1iJRMGoSZ+ReV/cNOAO28svJi19sul5X0f2u5dxFFOLHWMomD/BJWhZqqWk5RoY4yrIdSpm2IxiclJcYQgMd7KOF+99uczyn0gNUMBqMiDDgBcMSYHXlXpsRoZ8mWbcCoUCg0Zdn/2iok7S2fFdAiDoDqVocp7q4TURg3raTpb8cFnM56fNPXZtS9Mv/Ps+QuXcyv27jv7tWt9NOdksDtMjzVv0jMlJTnebp+7aLOrwrXB/SMhPsANKrbm36jqxKCi2Kzmxav2f5vzdlBLfsjzfmK8RRAEh7MyId4OICevVJKgacxskua+t+vUy5Er/Av8a9oBOPgcXps9/dnn5+q6tnzNjinjB0b/yhjjDKD+9QULVH1W5/YN3G5Pr+5t3//TqXIrAArtK8eWDPnA/eNebdY05cUZg9PTEhd/9FP0SQj0AvWWNNt9ASXb7fJKgmQym5JSsH/34cFDevEYR8G1QTRNJwRFObktWyZvP0YBzv0lXJCprd6VEuhKZKv9tv40dd2G4wCaNkLfu+aZzVi58bw9DhNnrANgs6Ik2BJ/O9EDxMimjkbPzC9GPng/IaRNqxac7Luyw9WQIBZLkpiYYDt8tPjm1uTCpYIz58sclZVmk7Rzz9ldgXej/R+M2/omjG7YNL1tm1aapr2z5IcLFc32ut6ntDiy9A4GoaohSunJs4UuJTUIPaI967qempxkyHhK6PUdUzjHwaOXzGZk1/j4/xT/9CGjoSTg1KmTZ8/+1aZNx/IKt9Vi8gcUVCk6Hp/i8QEAg3So8pGbT23v1yvlxi4t2Lu5MDcDFQFKibs4dEPvRGzJm5g/a15qAhjoTbY3D/pejHw5SoLHfRPWfn77jGl9kpISX3z989EP37ppw94PVuxdMn+kziDRkhAssSmxRjRHTSSYzk8YO0pRVYDMmf3SJ/eWevUUEAIWYu4sUJHICUSyAfQqvCG3sanvv/82oYixkUbjiSdmbS57K8RqXcxeBXq80+G+e9AdJSWlnHORxHpxrgIKsOvi1lJ6N+eMCuh1W/d3P/zh7oHNtFDwzUW7DmsL3HrD6u6cpWlbLShzueRHZ6zUuXzMO6GYjKdCrjGBRuBye9SQtmvvma0Fn0ComUlZNb/MfX/zhJHdrRZp9/7snw7V6PLP8d/QDsDO1eBjX/jy6215BTxYFU8hy7KiKIxFIoN4ke/GHbs/GnJH1/2HznA0Zf5iAOCMxtUzCz4QJAt//eDfBD9pZ/6iielXxu2UVGvflPjO0PHvLlk9/z8PnTjle/s/HTZ+vlfVmNksd+vWrOTga0GecDYwspI1IFXkI+ZkXjPPAIBI1Dh7nLc4V/U745Mb90l95/uSN8JvnFBwxhUnV5wAiBx/pdrH9LQKjuSUxIqK2jMgDTRoVAdlVyVlbeBUdEwcf1dpmUNTPUlJKcliKaJW0LVCpr4Wtn0laisO1ElPO3jknNWCxs0auTxHxo3o++rb62VziqOyLSUBACAC9KAYzLo+bX2A1111aqrKbOB0eP1pm5wPxJ4acHs8G384lhXoEeYcF43nSYiPD+dJUMJ0xNvNs9/adXJF9KH/Dn+//rsGhvTGtz+XNEmsc3DnhGBQpZSev3iJUnrg1wtL9w8vUVoAaGT7ddKt+xWFvrLj2ZoLT21G9wXlJf5PyzdTXr3hYg1QtOcbbkj9IqsQyUkYdGe/QEAb+dAwu90OguLiEkppYVHx3Dff3VD0HrEkEnMqWIh5qhUaAIBwT+a0RQtfKc75JTMzpaiorM119zw1adLn2fN8Udtl/y30m1M/U0uOe70QRKSlwOUJG6rtNpQ7QAiCAXS9Hl9cXgkam9ZQO5j5oXqThtx7V7tm1lBIIYSnNbjJ5XL3eVwrDdW9KvO01O2vb2vbui2l1CTLCQkJlNI9e/dlZWcfPnz0wCFP9444ERh2wj2YB8qjd3eJAhuS+ewjD9/36uqS3/1TqpsJbcE/3rU47olZX3xb8gGIDsK6Jn25cHqcz6d0aNvasA6u//bggD4tn355656/L+l5LfyX0s7Adz9j1sRu778/rqCwIiXZDsBmtQaCwVCItbTvMWgXJ5QDwok/c0CiVShyS9pKxsiQYf23LPrOQVoTUxIEU82kbok5g60afXHvQ6P73taTMeZ0VhJCAsGgEVpIKRUF4bfff5clgAhcqeSBUmJKqT4DALDW8dsmT3rYWXqqbmbarUM/37b+wfycP+8bOz537rPblfk6j4rLvQpkAnfO8aOHlsuyNe/cD9Nf/vK5SU18AZ1QrP4md9qk7p3a1mvSfuiw4WN61Zm/r2xSRFuqHURHsMWgJlMeGHnfTT1uKsjaU1xamZhgcZedada6Z/ekJzfnfwE5ZuREQHftPtDzpluclZWKqpaWlQFo06ZVmzatHrjvHrPZ9NO2naGvN1hYziHl4dqfS20QL4Wuv74TX7UTVATTAc5Dbh6osCU7l6z+7bBnMggDALVeS+mIqvayWi0G5xhjPx+8FB8vxTeLOem/xv9EOwCnTmePGH/9m3NmLZk/yusLJiYmBIqD9w6+4eTJH8Mdyief/Wu4zQzUtMIn0JyuXfsOv2/45+tnbMp9g4fyAQ7RVv2yNH9m3Ok5Lz2XlJRoFFKIGAgtFrMsm/7zxjx/IFCUV/x14epwOCeVY2bY9vE7Wpi2tm+/sChr954DRa1bYP4HWx4d07tpo3ZLVrwybeosr9x0T/FzoLVkGAAAl29Lf9uqXN60e0V5hbfw0kZBMg3tm1lSoRj3MmZo/aUfH3704e7W1LLPP1myfNUay/5l24pmgqixq1oDXOiXtry+9XTfO+/ufmPX/IvbMjLSZs7ZfHvfpgNulSsqnEPv7pmya9jHl1ZBiFUVAEAsLc29/MT0mampKTd1797rlh6arhvTn9fr9Xq9XW647o6B/e6+dyIwtlba9ar3QmJ6hiAImeIvrOheyBoIha6AisfKH2904UFPKNU4sFHCVkcQnCM9LTyS69VNGXX/jeu/PfLd3uhT/jf4X2m3dT/Um6YOv7P947M+njfnIbvNls9YhcPboKEd5RJICDRIKbYVPxpzoKaz/n37XPjrl05tU49WHM4PdAR4jdUAEYo8t77++php06es+ewLh6MyGOQWMwJBWK30+ScHDRnQvEHz2z5Z85k/NL6cX/9rxaMABzRABNGa2H5pY/ryP3OeyszoWXR595E/sjdtPfXy4ze4verCpdueny6rqrZi5dtqSD99av+mbzd4vX6Hp3pqEwmvm2Gd9uR0q22CxWz+67dNZpP82ddHKl3uvj3SNS3Uuk3HC+dPBRWMu6fez/uPX9e+YYlPuf/eux96QLZalAmPPW+zBEqd1SNNIDwjzaSq0quvvGCPs+Rn7S0vPJhf5Hlx7k+TRzbYc7jgvY+KnnlCuqlrwyGD3w8+OdWvaltLXlX1RICDaOCihfoH133Rq8V/+MYrhArZZ7ffP3JaZjp1uhkBTCZQSpd88M4DIx474p0RM8jD0BMy5dxXZs8LBHzU7wfsYFFlLqgrToaihzeBSJGzht3VhnMuSzKAOKu5z+D3+/TM/H5H9RH/Nf5X2nEBZxaiY2HDH3ecFASq6XqdtNTyCkfD+inica/GTSCKQFDs7QkxWoGjItUAOEtPvPziM0cGj8v31aYViRVHKu+dOXd/psn54QdzKwqPfr/99+Qk++nzBQs+3Pb6C8NEyTRh/NhJj4nz3l6UenKSxYpz/n6NyE5NR7Pm9aY+8ZLNIhXnHkiIj9u8/dSrT3ZxeRRKSXycuOLTnyeM7FmUvQ+ct2nV6brX5goCifaKEoKQBjXo0hRnQeFZs9k8ZdbGxvXFAbfU0XVus8Vxjri4BJ/Po+n8xo7JE2esf/XZ/tbKE4Kpoa4nLXn/P4RCqAqKBkAATYcSrCzJ3eWSrBaz6ctNv/72Z97Y4fUDQb3HdSk7D5YsWPLTtEf7513a/f6iecs+Wqb88jwlEKzWi77bmpIfZAv6Dbht0J13KEFfWeFRjzdos5L772j42eacN1+4N6lur4KC/GFjFxaE7nEoTWuqNGG0TVo385lJFaUXLNZUxgBe8+vTACBpegJoAOCN6b7rOw10VvoBWC2mj9f9PHNKj9XrDrFaNcZ/if9pSRHBzR2xfOGDp8/l3dCpqc/vLyktkyWh98vdOM0AOPQkCI4aGg+XJrad/sbr84uy96bW677vwMHNG7//svDdWlRpLf2+JhPbt2t81611QUzjpm1Zs+ROl8v/w/Y/Dx5xfLRgkCmufnxSc0rFtLTE9V9vys3Le/KJSZTA7dMrCn7z+0pTkuJGTln33os3VlSGRakaUncdyj9ywjt7Rq/2bRqUOzy6FqSCmJDSJnJZxrTKslOiZE5LTdh/6NIHqw6Pu7eOxSQyxpVg8PouPQIBPyHk3NmTRi5WmVPZc7iCEixbMMrhdAeDQbMlxWKvjirggLPkhCBaEuOtF7NLP/1qf1qydPN1qf5gmB+yTPf+WtatS+tePVo7HOV1m96ekpwgW8zLlq5yezxPTX9cVUP+AKso/t3nLkpNiX9kxpeTRjTw+fWcQt+gO24FeHrDXl98OHPmlm9gzbviTTLCzXdap3z17epzJ9ZLkm3hkr3b8ocWBTtEd2pj33HGfSdICLp9dIsnJo2/ORBQGzdqeCm7cPGKfYvfHn193McVNarA/Zf4v6Fd8ll0HAFJwqSxN9/QucXFS1kA3ll+8KeS6ZzGxgsBuDPjlamPDO7UoX3W2Z1mmdVtOjAlOWH0A49eYjdd9nVz+G8AiMV0sa1tv+TYuXXre4oCR9G+ByZufOe1noSAEMI5r5MWP3bqlv690x5+sCc4DwS8hAi2hEbeyixwmCxxkig888o39TItIwa1DQRDhJCU9Lo6Y2dO/0kIEQRSUh48drry/GXdLOP22xob92a1SP5ACIDPr+z4ueiuPgmpSaY4qxjxi7Ru06E6BY7SkuJCr9dt2PPibeKpS+7NOyslCYMHNNV0JgiUAJrOAJQ7PEeOVWSmo22LxBvaJVS6w+t6i9lsLJI4hyCQRWsK7rmr2ajC8XeUAAAgAElEQVR7exSXlHDO4xIaMRYKeIs4R0ZG+povj27Ycn5QH3uLxuHZkHOs31q4ZN5D5eUOc2Kn2XPmB0haRbDlkbLJRocb0z9obf01JCV8/vG7fxxem5Kc6qz0nM4mazae2lH4PGhtoaZ64luD53Tp3CgjPY1xunjFzpdfuGfExJX7jsV2/O/wf0M7ALc+hc/uHzdx+scj7umSniZLorhg2/59R27rW/dAZqLi9eCL/MVVWjYfUW/GwkULygqO7Nh7rGnD9MYNUwXRnF6/m65refmFxgfmHGmpyRaLxePM8nsKpr/0/cszb9V1Rgiat+594cxeQgilRNN0pyvw+frfZRPq1kngHITg4mVXUMGT4ztnJotef4gAnPOktIz0OvVKK1xrvtjmD6jg4X8AZJkCCIVYpUczLp2UIEoiVdVYDYkQIslX5IJwqGqN8AJBIKJASh1hdtqtgsUicA5d57oeLnhPCOEcLRon3tA20+Gq1Koiuzjj3oB27rL3zEV/q+aJxuZHLo+/rDzUrJGpa4dkSaA1Eg8Bk0w//y7/tl4t7ho4wJbUJD7OevrsucivddLTEhISXM6SiqLf9v+atfvA+dlP3dWp6/B+t084henlamOjW6u4gz3S17sDqNCa/lz45ltDn+3SuVGr5s3mzFu/eN74/vd88NsBKEZUzf+M/zPaARg/zLzgtYf7Df/o0yXDikrKP1ixP85qnffWS2azmVKSOSygMivAqZ70yZSv+ve7tST3wIQZ3ycnYuwDN3Ru30DTeWJaB0E0C6IZYEwPAbQ0b7/ZbNq6+2Tn9nV1nRMCzli76+4O+itzsw5GAoFUVXN7AgBUTf/muz8IgdlEQhpnOoIKQJCYaDHIRwgRRarrpFXLJrf27l0nPfVvHA//n6Co6p9//rVz917OwTnXGTckqc/vV4IQBMgSCAHnUENo2yKuYaYVgMUkSFJ1XRvOYLdZgmrICECXRPrFD/mvzrpbEMTE9A6UyoJoAgjnuqYFnMUnBMrMZnnG7K87t7WXOzFnzms7d27f/N2u9fkfGlr13bbpqz9fGAqFcvPyP1y6tFnj9Ju7Nd+668xjY/v/djzrHXr496nhS//v+F+XFNEorwgWFjvnPNNr5pxNjRsmr1m9KBhUjC/tcDo5twGE6nEPNRo7dOiS7DO77HZr57b/r73zjo+qShv/c85t0zIlbdJJAiShBUjoGKpiQ+yI2FDsrr2uu6trL6y9rbuurq4VVFRABUF6J4SEIpCQHpKZJDOZfus57x93MhkCImqyn/f3+b3fD38Md+7cOzn3mec85zlP4a+YM/SHTUfe+7T87pum8vxPLIMVRWEYjDFmWdbVEXz21W8LB5rGlwwABJqmKTSrsamZEPLmvzd6OqM9JVkGhg/L1nXA+XPOOvfsM3sJ0wnz9f/7AqdjNpumTS2bPm1Kr+MYYxyXi8UyzLoNm35cu7W6BRBAm8vtbo+qT6MRBmabRhQgjFBYUpIdAgAsvDjn4aeXzZ0zcmBeMD3VTilRFI1lGYSQu6Nr8Vfbm1vD18/NDoe1iv1HPa0VZ545a9uO8jz/2rrgOADKMcAyjKIoOdlZzz/7zNp1G9967xuEACh89MO28uWx79UH9KW2K/wIit+DadPKLp97sShJCKEEi+WpZ/9WWVVrTwCPnCq73XOvnHnmGVO6XDt4jv/s611zpqV7ukQAQAhqGrva2kMCx2zd4xb46B5garJle3lQU2He3NFGgwEACIVbbrxOfzzu9vaYM+8UwZjVo+oBgGhSJOTW2zXFIEQRw245crLmJ6eC0ZwimFJ6HwVgWINgTMFMz4KQaDI9hXCEeKzWBIEXWIPh7bfe1tMNNU37dMkOCjB6BNfpVXRxESUwm1FOmsloZEYV2QMhVR+tYFidM3tWV4DYU0eu37Dhw/dWmHjYHrpvhOVvJSWDJ4wfO3P6VK+3CwBSkpP++JfHd0Pjj+8c+w1+H30pdgsvsr72yvNdXT5KaXJy0quv/ePtf+38+IM7DxyoNxgAIZh76YUut7+9ebOmiqs37N20vfbW+cUMRhYzDwDfrq9DCEIReecePyUwaFDCrNNnKArMveQ8jFFHp+f4vPbjQQj3quGvyP6QL5rkixCSIh5ZjKUrY4bpFvD/FpTq9kPP32IwO1kumu/NMILFkRffzE5Te0c2nBCEUGpKEmaYJZ9/RQglRPvHO8sBgFKYUGoGgNNKkhWNSpKiaojn8dc/uJ579FKX252UNjo7d4jP5/9h9VoAsNtt23ZUbt5S+e4/njabTaIomc3mz7/86jXT6j1xe2m/k74Uuz/fNvjWm6/nOPb9Dz9Z8+Oue26ZNjg/JRhhk9PHAkDI3xQJtkoRL2aElT9W7d7b+Jdbx/9z8b6IrNU3hcUIFBXar5w/V5a10yaNAwBZkUOhn9k8AACAWE1qWewK+ur110STpR6pAtAF8cS7k/87oURToisdAISwwZQMgAAgwTGQ4/XVKyXHlsY+IQ67HQAIJTt3VXyzbEX5nhYEMCDHaDEQjJE/qAZCzBvPz21r8wpGBwWanD6GUuJxVRLFq1F0y31fFw9PfPXF5zs6O/fu239/6IOq63vf4jfTl2KXWgGlj4BrMux+CMYsgJF+Y0dnZOqkQZPGDQYKLItfe+cHQjR3u5aWZiybPHFK2WkUaFJiIqX02MwgpE+dlBJCVIRwl3uvpkkAiBAlViQqTiX0ASefrHUrMN4W1JfMMRCKfuefpU8NSX1SRoAxG91TZliDPWU4pQR3p/PFlwiKIfA8Bejs9LS5XG+9/R+jEbvcoSQHm5frPGdGMQDUN3esWFXp9ck2G7fqaSWQDdOuBs8Y2PFo70v9HvpS7OIZ/yzcwhQv+aoqGIKyyYM1ot171x8wZsRjCwQhxCDMUKJKES8gIKrsde/FDPs7RQpjHBMCopFeVYmC4YjP19t0Qyi++GnfQyntJXgWs1mP142BMTaZDN1n0V5Jgb+WqEYkWmJGKQCwrJHlLZSSXk0EAIBlWZ7nXnn1LUmWq/YeCYUgK5Pr8CqbPoVAdq9z+4a+FztjB0w5FyQJLrxgYpoz9eKLznO5OuI1AWYEhHAk1KopkiR2RgKtCGG9dPBvAGPEMAxQoBR8fj+hBAACgVAwHJ2gMULH5yefnF/UXKcKhV4OtpNDKY1573iOS0qM5p1aEywswwIAofT4Wq2nCCUaIYpgcJisWZRSiz2XaNLxGjHR4RCMhpdfecPlbt+8udbphM9X9zqlD+h7sZsxBd57+cnMzAxXTwkqxHAGoskBzxGEcMjXoGmSLny9PvuL6O4AAOjo8OjlECVJ8QcDCBAg4I4tdKxjEFi9LpgOpVD1U6vPdyLXfDeKqvUuy/pb4Tg2bmO2NxSgaFBKujOaiaMfEiVVOTYpX1U1XVPyPGdNiJbkSXLYWY4FAEXprb1OBVUJma3ZDGsEoLbkoQghvV9PDJ7nHXbbp4u/vGHu8rAz/p0+oC/FzuCFqWfDv/+1CAAHvXWy1EUpkSMeABTvLzgVdP8IobS1Ndo1W8/AjZ89MUYMxgDg6QpvK28A3cYBcLlD4QjoWoYC8BzMmJiR4jACACHg9mtDCtI7PYEOb3jUoASB75bU49USQieVmZMhqwSg+wvFgwAAVJUc7RRlDTtTHa1tng6vmG6P3mf1lsZ2jxLTaCYjpKaYcPf8bzLz0ycOopQCivZbAoh2S8MY6w4ma4LZak2gtCfX69RARJM4gw1jjlItOWM8pSolGkLoD3c+8MWa3mf/TvpS7Ma+ADMPps6/eLKmygjrqWK/TEyMNEIQQKfHE4lIsqoABQDEMFh/8rKiUQoIo58Ouw8dcQOAomiKQhkGEAKM8ekTc5LsRgAABGYjx3E9qlRVKSEkKIJI2LIJxVv228YXdfEcrFm/OyORpRQQBnuiU++JAAAIIULoui0H122pPV4aTwWHlZl7/hiTie9lz1E5AlT1BrVUZ0ZOTsbaPUkzRnWwWNtVXmkWEACwbI+JSQgNBGX9At6AuGpjA0KgakQjoChgs7L6Qu3M6YUsgxECnmeBUkKjRiHPc0DBZDI6HHb99wlwqgsbSjRAwHJm3uBobpMf2/3ehmd7n/N76Euxu+ES823Xzex99FgQQhhjWVYUVSEaaXW54/3yRgMHAI3NXRijtVtrvF6NUmBZyM0yswy+9KwCWSFmIxsW1UBITnIYAwGREN0NFr26NSlH11sMw6empTKM/gxpQ3Or1Sz8uG/ovKvuyMjIEEXxzTffuHLqgWUrt44dXRD/MBIshuvuXJyVYV306HntnUFBOMXA9ygIgSwrmqYZDdztf/zizhsn8jwbbyp2eAJDB+cs3110y20P2e12AHjooQfvu6x12fe7spI5AEAIhcPRGE+eM8RKSmKMdbNEtzwRAoyR0cAiBGFRXbbmiKSoza1hSQFNA4GHC88uUjWSYBEcNmNEjA6RrgLTnKkCzxsEnnYry5NgNPAPPLZ09WdaqKce/e/lBMbQb4ZhgP5MAXKOYyMRUZQkRVbcHR6WZXRpYxjGYuLdncFWV4Bl0LIf6iMinDbGxjA4O9U6Z3pKTrqVUgiGZTHsMxiYHVXuj5Y1zZjsNBr4j77Y/+ozZWkpmXlDTlcVCQAoUEXqLgqLGDlYE+vcsH3X/puvnrWmZnBGRgYAiKJ4xhmz6ur3mU3GWFY5ACCErrtj8c0LSocVZbvafTWu+h/K9xmDwMfNVyQaSnri0PWQGUqKsgY4cpKTk+64YfITf9v8yP2Teb7HuAyHFc7ozMkfF3vezz773LZlCw0GQ0+5oO6JQlZ6IgwopQhAlFVBoJUHfZt3+0ePSBN4dsmy5jcfG3FmWS5C2GzidEWyfG1tTa0LALbs9mIE583KpZSqKowZmUEIdbd3UEo1TSOEZmWmE0ISHXZK6Qm3EENh6fbry+qWr/tf6rebeTsMdln+dPecLn8EI+RubyeAOjo8CCPd2EcIWcw8Qmjl2mpJljmW04iWYEBJiaYEszBsUJKikmBI0lQFM0x6Vh7CxoxB0xDCCODZ558LBTsXzCszm4z6PEQo3V7e+Pf3d5VNTD5/1qDkjPHO9AJJ7IkVVaV2VYyahnsPHAkz4wcWzysqGqL/Nvbt27fki+UXjd1qNlv0iZxS+v7izXfccIbfH5FE6R/rV7766tjgz/QI5QC1gtIAMn+cLcEAjtjl6rt8U8dOJBq96f5lLz05U+zWN5qG26WS1LyzxowZo6qqyWSSJKl85T3u1kqnlVCqa7veEa8aoRxLfqr1vbPY+/Ado8omFMTq0SIE73+2Zd/B1msvzMMYmc0JvWZSnmOMBpZSuqm8lWdoi0cOhURVoxYzP3JoRrozQZJV/WqKotqtCZjBiQ67wPOaphFKOZZ5+KmlX6+Pv+TvpS+13ZrXgL0xeNtDny68fJSsqnoBHp7nEAKeY9dsrA5HlLrGkKLCzLKsc2aVMYgm2k3bK2ojoWBKAqhgNNksyelmkzkBAFRVYTi7IoUQQh9+/Nk50wflD5i0ecehZeL8dkOJBtwk8e/zS7OnTR5YXdv26KL1BfkHr7+iOCVrGi9EN5riOVLXtPCKwi93twweXEApra+vt9ls86a1HanuGlIQXRtazIbaOk/AHzGZTP9a+93Lr/fIHIFA4p/vg0BIOdIYWr4RgCpAk4FNB247hHoVxdCAcF1s/qsW+A8AhtsXjjra2pXoiH6rpqOu6VOCh4J8dXV1QUGBKIpWq9VhY9pbT7QEAUAIQhFp0+72g7XSmGLnj1/M9/vFir21P9pfwZSGVHS6788L5k2ub2p/9Pn1T91VcPw6QlY0WaWIN40ZmXPkaOCKGUUZTnNji3d3ZfW7n+xnGEhLYew209kzijiOCUUiANDlD1BKDQbBZOBfeGvzhiW9r/k76Uttp1O4BEreZc6YMthuM5RXNh91+VWVBEOq3crNnj6QwSjFYbSk5KzbXxiSzCGRnTGyJSfJs3PPwaGFORzLGY09nT0Yzo749PsfeiYrnb/w3NKjNeXv5e4cl5X7+T4RAFQQpoefm4Y/HpiXabMlBELifY8sT0tlb1k4c2DhdMywSqQtpu0am9sMAlvRMGTYmIusCRZKacWeqrOHrV75Y8Xo4oG6evh2daUsqRecW9rY2MT/s23U7jQEQCCS8uKjjMMK4QggBAzWFKn9jj9hEm2AwQE6XvJ09v/JNXVSWWqKdemKHYWDopaRxxssHJS9Zm/B9FnzVVVNSEj48suvr5pe9eOGinRHdE6IajuEQpEIg9HXa1oWzJvmTLWyLFNRWV2TcHmb8xqJTQMABPDkGXjpS+NLC5MsZuHJF74+d3p+eoqltwMIM5zR9lN1S9agOYebTX7RxOHgrec1LltZnp8mtHsjBgP7z8/2IQR2q6Ao9OLzhgEFnmP+9fGuFUv7LMwuRt+LnU7pK5D5NTx+73nLf6hcta7xmQcnhAIhYFiOQXtr/ZJ57u13PSIIgtvtdrlcn3yy+KoZB2RZ5TheFzuMkSSr1/7h47tvHlc0OCMYirxu+p5X6R8nown/DKcn9DxjCkgDfqr06qXMC0La8CSb8c331lUd8N576zigZPCgvASzWffButu9gVBoyODspVuyB2aIg9Na1m+uHF9aGNsM+OTLbbOmDU9OSlj65rJ7lpdEQKOgOd/6a2/fCqXhNduDX/Z4Ub2gNesFwo5l4/xDly+8VBTFm+795qUnTw9HoucEQ2JSYqLVnrdxv330oGCK2b1l597MRFa/D8uy/oD3qDv4+cr2IYMT584pSUm21h/eXy/lbR7yHa/SXlrx0TJ8zscRASILvOfOLE1v7/QvemPNuJHJ08ZlxypTIcy4utRLZpdubb26qGhIWloaANxxzxOPX1O7etNem4EApRQxX3x3kOOZe24++/G/rWjJDh6ZA3W/qdbEL9KXk2w85XdC5pdgtPDnnDHSbOIeeWnbH++YCkARy5QUO9dVp+orRIRQOBxOTnUKwhGte4zsNvO3P+z++IsdtywYPbwou7rOdVgazucSACD02KJ2AAgoC9Jm4abPmLvuaL52qr/itoXTHXbzG+9s+HFTw8Ir5eFFzoz0LEVRU5LtJpOwZkNFVsKhfeXNYl52vMwBQJu7CwB8Pp9FNmLdfwOM6/bHnZ+/BkfjMqwG5Qbveiw2dBTghKoOAMYtyaubUZ+e3nsFaDEbOjs9lXsPDx6Yu2N7g9NhzHSwlAKDsSiJnd72D79pzc5I+OD1+R5vOCJp6zdVbJxQK6iE192Bx3LL9ySsAOKMi5K2Dj+S6xxU8sZzl73z4foPvvrplvnFnq6I7j3geGHF9sSiMU4A6OzsTEpKOv/cifsbO3y+sMOWAoAsZoFj+dsXzghGxAvOGnHhrb+10sQp0F9iBwDz/KMqZlYFS4RZr40cmOfkOKx7OJuaXS1HXX6/X5IkhJDBYAgERI5BGqVUI3l5qbMueuGdly4fVugEQKv2oQ3FG21hElLgiBcKE8EbQFkpxvML4dwCAIDXl9WsqWyaP4IblIgh5Yabv2v6a+dfRowYesmckRfNLs7PTZl347v33za1cGC+rKoWs2nmlLEHDtc67AkWs4HjmHix0/fQKKUGQNsgPAqMGlCkIvcFd2jgYSCJG5AuNuxjIDk2bhigFVQXKCeUu0BiZFDqCULuOI5RNE0wcK2tzUVZZoyBAlBKW1yu+pbQ2m3+txZdLIqKLyDu3rXzwcYXLp+YO0bZBwDbW2iICIuuLBBY0Ai8sB0iMvhF0tBFnWZIMkUWMPWlh7+9lt57xcWTUpItDz/5dV2T74EbigHA3e45a1SEsGxDQ8OQIUPcbrcvIOckSvv0BgcIbn1g1UdvXVT5YgP63s9xHPRdmNPx9KPYXXLQskETUyvUo2u78kucf31+6c0LpmgaCYuRghyQZamrq6uzs9Plah2TX7urqiY/Jy3daR8x6YUVH8/zdoU4jv1+1epLnvRfosILW7WQRM7MRbUhfrb4+Yav3U/L8KRMAUCwGEwC+15r9KYqjZMkBJ98uQ0h0DRNJQQAjAZh+cpNE0qLxozI9YdCq9btHTe6pzZsutMGAElJSS3OcDEw2yE0AcwqUABgIBGAKg1HGUiE7lA5FtBhEINATihzAFA5u7XYaJQkKX6WlhXtUE3LaRNGZacnEEK27q4Xg16bCWGMKSGEgtkMZpMgigpQoJRJ5IMfbI1aqACgEjpkbQVQAASCQAvSEzKswnWmsDvMbD+sfvvY+QnGc3Z+/EZ5Vc2IIbn3/+GMNrfP13FUwGxOVoosti1ZvPziC2YdOnQoOyuzeu+3wye352QlAYDVajx7ZqZ7j9+wKmAmGEvaeW+kLrstTsf3Kf1l22UfMhwYWbJd8gBAVyrKfDrnH8vWXTV3AiEUY9zY1DFxfMlPTdaqWvv86fXle37Ky3HyPGsyGZd8vbOppf36q6aYjULV/trvtWsrDfOCOIWjIgA0+Gj73WzG1e/2vh+AShlM8d8nLBo6tBAhtO+n5q++233TNWUmo8mZmgIAgsDtqjg4fOjgBnXh2DGjA4HAd0tfnDKseXfV4cKBWQBwtNX778+2PnzXOS6Xu/adQ4Vb0ghQEnXRIRaQFbAG4AONAihA8M/MrToYUOXDrdMnT7EmGFeu3TM43wkAGCOM2LZI8d66xIcevAshePKZ1x689NCmLbsFFgEAxtjd4V6/syMYoffdehZCiGHZHRU1d9c8w56ozEDEL91/bsZry/fq/+WwOimp8uLc7QUDMwHhbbtqtuyovvGyEYS1YJb1eEMTxw7xBbkvt2TNm9rQ0NgSDAUsZoMgsIte2/DK0xdvn1GRrGAAEIHkZNiKW3Yec7O+o7+03TVPZAjdO/3JbrJvUdMNT03v8vl5niWEZGcl7tpdKUpyJg/bd/Gjhufrm9+Kos2/5LQj9a6X/76aUHXh/KkPpq/fe+B9vy/8hOMnCw0PsKHMV1VJ0YS43X0AUClzpnPLRfm7hxQWdnWFF725OjXZetdN0zIzcnTlhxDaUX5gZlnhn9/NeuWFMgAQRZEKRV3hrmBIZBlG1bT8vFRFJRih7OysnePKW71e5092DEAACFAVqBgXEnxymaMA2y6vOW/KbErJlyt2T5s8UO+oGRGVIUVFa1Y577pzodlsRgg98+Qf335xoUGFzESgFAghKUkpU8YhVSH3/XXZ84/MFngYNyr/GeVPd9a9aGP80bQzAABQFG3Nk6dPuvldR5LZr5hzzO5nSv8zfEguzxceOHz0o8+3lI3JvGFusUYIxgyl4LCbN23bH4pIGey2LdvZAdlJFrMBAFxuv0o0yagmUia2XvlZHd4X9JfYycaeJ6QCEsKQaDd9tnTLnLNHU0opBWeqjWEwpaAqpK6xjePY7IwU3cTJH5D67KPzfb7wB4vXO5PNI4cPGDu60LnZ9obxg73C+RkJ0oxZQz/48VBsN8SvmM/L2HDLhAa7LafV3fXSmxumTc44beKo3IEjxWCzfo5B4I/UNQ8uKL1x4TUA0VbHY8eO/eyz+jOGR01+UVQmlA5oaO7MynBcftHcT+Vvsn5KQoDkn/EYnxAWGAHYliG+tCFpqqpazMKSr6tLR2bq77Z3+JUaduL4YlVVFUXheR4Adh9JnTXUSGlPUKDFYIhg9fLZzpf//m12VuqCy8vKxuYtM11yU/UbYWIg3RWSU03Ce19v523Jw20H7i36WOGdKUkph2vdz762dXKp7Q9XjpZkTY+84ji2yx+WZQVj5EyxWROMsqyq3QuU2sb2Qbm2zoogq0YDofpnCuyhv8Tu+X/WP/NhNgWqd9vIaiKirOyu8i+Yb+70RF3wgWBkeGHWyl2JDFKSEq3VdbvsNktWhgEhJMuq0cjfeNXUnMGz1q7fcN2d719/1Zi3xy5uOvoPb+1WZcRTb2OnFJFBNT035smSPCYzK4Njk5566dthhenPP7UwK2eULIdVqT36bRDwgoEQcCRIayv3OlMdLMt2dnaaTCZRYbzegNXEiZEwpXRySdbL72wUBNPLT116zjnTmkY0hbTI/rZD+l9xKgx25rOSYUrZtPYOz4pVeyqqmt58epqnKwSAADM8hwlgVVWampqMRmMgEHA4HIGQihBC6BhHjZFnTULC7OkGA0+vvGXJ4ncuUwsnf1P4yapdbQ/UvwQAEFGWPyBs/uYPK2ajYcOKOr1j/v3pphRb09lT85+4qxghiNWVD0lUwdr000YuWcNoamRGKVO1v552R0cjgLUbG954bu53t+wt7L57NmPE0SzKfqG/bDsAIAlTvg+28d1bl/jZTL8tVF5ZN3VyIQDIsjo4P33lwfNvu/kqn8+nadozz7+28PTyo65I3oB0/SOUyEZHif5aUZR/vvuf7TsOjS9Jm3/xpHBE4nmWwVgjhOfY1/+1mlBYeMUkMaRSSqSITwx3IcToibQIEMOyERnSs/LqO/MHjrpS0zSj0fifj7+6bfbh9Zsr0uzH7K8aDexTb+22GOHRBy5ko8EEvwKTUXjxrZX7D3luvKzAZjXE71EjBCNLRn20OmXMpAsMBgOl9IOPlv/pioZNm3fYzD2xYUjf/dM0ChQARSS5pqFj7TbP+WcNnTi2QC+toqgaz3N2q+GJF1a62jsuOD07NdEoSurxm2MpmXnf7S6YPvOC4SOKLRYLADz858dGO5fpGycIocVf7brz7jMPXnjQ6iYAoAEtM6Vc8OrBVQtP1MO9L+hHsVtWOGpqo2mHGK2A6SrljQtN23bVnD1zuEZIS6unZPT44ae/AwC6M2Xrth1mZX3Vzs8uOHea/qgokU2JYzRNoUQDhFTRf6hqVW2jZ3NF62njCyaU5nMcs2xl5aYdtQsuG5doY9VI763MeBACV5c6amTR0q2FZrPV7ZFvPe/IjxsqMhJ7DwIFMApMu0f8+Juffn0oKlAKwwYljhmRZhBOMJkcaZXOP3v8zoMJNe4sSSFXTEfT5m4AAAkNSURBVKs+cLCOVb29fNK90DS13eNdsa51+mlDJ48vQAgIgRf//v3RVvHe60doqqgoFAAoJceLXdbA0d9XjTr7rLMSExNTU1MBoKGxbcW/Ths2JEdVNYQQg7nUAdb2yfv1RoIa0FlCpqlzfcT8C8Epv5kTjEtfsXNkYHZDIuo2FBSfNmHYgKde2nbpBQafP8JznCgDpZQQojvwjAbe4+ERRp6ONk97rNPhAYgbRYTQwBxbQa79kxUHyyuqEUKyQu+8eiSlonqyeGFgWcxglJPCVB8+ctkUTlE0k1HYvK0qN5UFAEnWZEUT5W7TBkBPtZg3Ozbt/DoogChpotTz2FgWcywWeGZkvnnDlsqcrIxBxS6Gwes37U+1cTzPUEpVjfbe1OqGYdi0lJTr56a89+Wh8sojAIgQcsOlxRFRIYSyrDEWWN1L5gCAYXCaMy0YDGZmZuphLzyPKQVASP9ns5rcO/3RTHeAVCwctof6T+agX8Xu8cVH7LPZ0u+wSigFcNaoCAHCQEKdJCypilo0QG1qrHckJoui2NbWtmTp2ldvr/vsqBAncwDQPeUAUAoCzxgEhlK4/tIR+jvtnnB1vTeWsoAA9lZ3HKyJhMMQnwFj4IHjQP8N5OUdyRuQJwgcxnxz1DOFAX5d/PPvg212ucOiIolibV3t0aMqxqBqICsQH81uEMBhh2EF9uy0nkyf0ydm5GfbjYZo1z+LiQOAYFj5OXkFAIElVQeaSkpG79u3b/jw4RzHLXrhtdEpnOzvAIBDdd7TJo+mWC/hCQRgqNl6/rMHj71GH9OPYgcAf/mo5uiAsvKA6/hUljQH+8lXO46KL5WOn1VUVFRdXX3jnMDSVbVpSQYA4FhsMnIAgBGqb/EdrPNiBAyD6pp8NY2iLEEgAABAAQQesjJh8sSxyUnRopMTkmHevOyS0SN/rlNWOBwJBk82Hf/XwBgnWCwGg3C8yCCAmtq6PXv2xufahSPh9xdvCARBj1dnGHA4ABBMGJloNLAAwHPMpNEZLItBD04OyQCwZuOuu+aoi96D6WVDt2/fvnX73jPH+KArmjNV3+I7rfv6IVDPS8h85IyW7xf0l1Wn09us6XMW/DHz2s/TSU2gZggz8+0Rc2/47I2/jvUFJAAIimTEsPy69lRFkRMsZndLOVXFLbsaOBa6AtLBI6JeRYnngOfhvruvjqU5ZWSkFxUWxL65qqmhUOgkvShPEYQwIIQQ/pkIzl8LoZSA7i7qo1HGGNvtttiyOiJGdpVXxFKMI2Hxzbc/D0WAUqAAKUkwdJANAGw2U+nowtEjCqpqKKVkcDbeu3+/AEH9KgdqOqdOKUUI2i6rSXSYnniocdmt/bU5EaPfxU6n9EV4fcBZXl/o359suee60a9/WMFgUFQiyTQj3TZwQLItMXf0qBKGwWazyWG3AwJFUU8Y7ArQM+3GoJTG595RSsL+ZjHcfmxyGiWaSqh6fCucKAgBIIQQnLK75KToAgfw82KHMKvXZYo/iBFrTS46NukJxYf+6xxvw/XCYDDo12052qqqxOEwr9+4oaqy0uMNd3rCdhtDCeU49rJzihyp2WYTf+tflq7b1usa/UW/i13p65D0AQBAcXG23w9vvf64x+PVtGgGHhw7fBj3BHMQTVVkf/SRUOJxVcZO6zvJ6AFjXc/1C7Sb3m/8DuJ/ZgZjksmWo79mGJ7l4wJdKZBjawtB3M+WYRiE0HOLXvL5A4kO+56qeosZ+jxP7Hj6Xeyml8CP25ZK7e2dnV6AnkwLzPD6YxZD7ZomAiCgxN95SOvOx0EI/9o0x15gjOOVBEIgibIoS8f3jtIICYXCQb0lfF9DKVjMJo5nTYaeCNYYvMAbDb0VXvzP8tdCqUa0nlmCYXlrUhEAIEBGSzrCGCCaqh07BwA4jpMkOTkp8Z333l+7bnN/S17/ip2lCbbVPpiYmMJwvH4jv+ew/lbY36wqIYBokYC4D50qGOP4xqaaRrq6fLGlC6U0FA7HeprrxzDD4H4uOvFrIYT0KjqBECQ67Me2FjcbDMcksMUStn8Vmirq0z0nWI2WdKCUNziMFielFBBoSgQAWJa98pp7a1+AmrLeH+9D+lHs+CBcs8By09WTGMwh/OvKQQDo+XkAAIqiujuiVd7DkYjWvZOI8Qksnv9P0DSiix1CYDIZ9XGgAFnp0fx9Qn71nE40Wa80ZUlIu+dP76/Y3PuEPqQfHShnXAtDCtNZ9mSt3/Q5Vx8hBNDR6RGlaIqeLCuxgYuJFwLEsr8gwQhBnPUShVJKCFC9U/JxeLrCra5ge0cw2N0bt29hMLbbjXarITXZkuQ4sVsHRTnmIKUnXjrEq3mpu+cbAByuqdNfsCwbOyczIx0AgNLYDU54zVgZGjHSdfHskSugx5juc/pR7LAbzr2lOJYY3DOolMqKAgCiJHd0egB6yibEj/oJHgIAAMQXNAEAopGwqChKzzzV0uY7Ut8ZCB4jQIQQQiA62ggiyUCOlV6EAGGAaBJZ39MsRaAdaJxrAgGwYeC7O/thrC9rev5kSiHDmTCk0GkUemxco4E1GrhjpIZCrGZK7PdJ9D8YAADq6hv1F7EhtdusFrMJEOK56JUp7dGOlFKH3WSrB1+ufqDv6Uex41hYs2F3SpJF79xwEnieNQgsQqjN7W9pDegjX7G/xePR9NdmE9Sd2322CJEUODgPyC9c9f9FqG57xeHr3qg7ASlVkHOs7Z/5FcgyIARUg/FjnRaTAAAYw6hhmbqm9wUkhMDb5fN2neCyuqGJEHy0dK8v2l6gX+hH2w4AZpfBgrnFCONoIZNujAaOZTHD4FXralgW2jtDtfUhhEAQQOCh8iYAAMJBzfnxH/o/fh0Fn0dfjHwb/AEABITA5HFpmkaAwtRJ+QhBICj3mnDbO0PffH9458vgGhN/uI/pX7EDgLMmwqC8xEtmF4mSunlHvT73HXX5giEAgMA0qDkvembrhJ5P/R/9QXq3N7jgczBvBU2DwfkJLIM1AmXjc60Jwq7K5vKqoxtfgY5jmvP0Pf0udowEM+4FQxUgBDwHDWfBoUsAAPy5vU78P/7bsBEwuQAAzrwBZAUIAYGDz/vZY6fzP2eprGibBueQAAAAAElFTkSuQmCC"
					), aKV(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aKV(6, "territorial.io", 6,
					"iVBORw0KGgoAAAANSUhEUgAAGe4AAAMACAYAAAD286EDAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAALiMAAC4jAXilP3YAAR6vSURBVHic7N1/3Nbz/f//x3me1XmqJM6ypNGSSoW0LHqXt99qZWIzovIrkzWbUjrrLCEpP5f1A40RxjDDQjVhWCsLsWGitbSMt19LnxA5z77/7LvLZqrzPOvseRzn63r9r+NynudxO/44jo7zvLyO570gIjYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGREYeoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANieDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUlJbH11lvH1ltvnZ1CgZo4cWIsXrw4OwMA4As9//zz2QkAAAAAAAAA0GSUZgcAAAAAAAAAAEAhqKysjJYtW2ZnsB4fffRRDBkyJDujSRs7dmy89tpr2RnU0p577hn9+vXLzgCgjvr37x/z58/PzgD4p3fffTcGDBiQnQEA0KQ99NBD8eyzz2ZnAAWguro6xo0bl50BAFArTz/9dHzyySfZGQAAAAAAAADQJBjuAQAAAAAAAACg6HXv3j169eqVnUENbr311pg3b152RpN31VVXZSdQBwMGDIiysrLsDADqYNmyZTF8+PDsDIB/GjVqVCxbtiw7AwCgybvkkkuyE4AC8Ne//jX+8pe/ZGcAANRKdXV1zJ8/PzsDAAAAAAAAAJoEwz0AAAAAAAAAABS9wYMHR4sWLbIzWI8lS5bEsGHDsjOahcsvvzxmz56dnUEtdezY0ec+QBN0/fXXx8SJE7MzAOLPf/5zXHPNNdkZAADNwl133RXTp0/PzgCSjRs3LjsBAKBO3n777ewEAAAAAAAAAGgSDPcAAAAAAAAAAFDUevbsGT179szOoAY333xzLFq0KDuj2XCoXNPyy1/+Mtq2bZudAUAd9e3bN5YsWZKdARSx5cuXxxlnnJGdAQDQrFxyySXZCUCi559/Pu66667sDACAOpkzZ052AgAAAAAAAAA0CYZ7AAAAAAAAAAAoahUVFVFa6jaaQrRw4cI477zzsjOaleuvvz5mzpyZnUEtbbPNNjFmzJjsDADqaO7cuTF69OjsDKCIXX755fHCCy9kZwAANCt33XVX/OUvf8nOAJJcdtll2QkAAHX23HPPZScAAAAAAAAAQJPgxBEAAAAAAAAAAIrWUUcdFfvtt192BjW44YYbYtWqVdkZzc6ll16anUAdHHfccdG5c+fsDADq6NJLL40///nP2RlAEZo5c2YMHjw4OwMAoFkaMWJEVFdXZ2cAjezFF1+MW265JTsDAKDOJk6cGOvWrcvOAAAAAAAAAICCZ7gHAAAAAAAAAICiNXDgwCgpKcnOYD3efffdGDp0aHZGs3TrrbfG9OnTszOopTZt2sTo0aOzMwDYAKecckosWbIkOwMoIqtWrYozzjgjOwMAoNl65JFH4rHHHsvOABrZlVdemZ0AALBB5s+fH++++252BgAAAAAAAAAUPMM9AAAAAAAAAAAUpRNOOCG6du2anUENrrrqqqiqqsrOaLYuvvjiWLduXXYGtXTYYYfFvvvum50BQB29/vrrhgiBRnX55ZfH1KlTszMAAJq1IUOGxCeffJKdATSSF198Ma677rrsDACADfbKK69kJwAAAAAAAABAwTPcAwAAAAAAAABAURo4cGB2AjV466234sILL8zOaNbuvvvuePrpp7MzqKUWLVrEiBEjsjMA2ABXXXVVPPzww9kZQBGYMWNGDBo0KDsDAKDZe+655+KOO+7IzgAawbp166KysjI7AwBgozz33HPZCQAAAAAAAABQ8Az3AAAAAAAAAABQdE4//fTYbbfdsjOoweWXXx7V1dXZGc3e2LFj/XduQr773e/G4Ycfnp0BwAY45ZRTYv78+dkZQDO2fPnyOO2007IzAACKxllnnRVLlizJzgAa2JQpU+LOO+/MzgAA2CgTJ07MTgAAAAAAAACAgme4BwAAAAAAAACAolJaWhpnnHFGdgY1ePnll2PcuHHZGUXh4YcfjsmTJ2dnUEslJSVx/vnnZ2cAsAEWLFgQZ5xxRqxduzY7BWimRo8eHc8++2x2BgBA0Vi0aFFcffXV2RlAA1q7dm0MHTo0OwMAYKNNmTIl3n///ewMAAAAAAAAAChohnsAAAAAAAAAACgqAwcOjE6dOmVnUIPLLrssO6GojBkzJqqqqrIzqKVvfetb8Ytf/CI7A4ANcO+998a1116bnQE0Q48++mhccMEF2RkAAEVn2LBh8corr2RnAA3kD3/4Q0yZMiU7AwCgXsycOTM7AQAAAAAAAAAKmuEeAAAAAAAAAACKRllZWfTt2zc7gxrMnDkzrr/++uyMovL444/HY489lp1BHZx99tlRWurWP4CmqH///vG3v/0tOwNoRubPnx+9e/fOzgAAKErV1dVx7rnnRnV1dXYKUM+WLVsW5557bnYGAEC9+ctf/pKdAAAAAAAAAAAFzbP3AQAAAAAAAAAoGiNHjowddtghO4MaXHTRRdkJRamysjLWrFmTnUEtderUKc4777zsDAA2QHV1dZx00kmxZMmS7BSgGVizZk3069cv5s+fn50CAFC07r///njwwQezM4B6dtVVV8Wrr76anQEAUG8mTJgQVVVV2RkAAAAAAAAAULAM9wAAAAAAAAAAUBTKy8ujd+/e2RnUYPr06XH77bdnZxSladOmxcSJE7MzqIO+fftGeXl5dgYAG+DFF1+MAQMGOBwN2Gjjxo2L+++/PzsDAKDoDRgwwEArNCOzZ8+OIUOGZGcAANSrV199NV5++eXsDAAAAAAAAAAoWIZ7AAAAAAAAAAAoCiNGjIj27dtnZ7Ae69ati8rKyuyMojZixIhYvXp1dga1tO2228bIkSOzMwDYQDfffHNce+212RlAE/bnP/85Bg4cmJ0BAEBEzJ07Ny644ILsDKAeVFVVxaBBg6K6ujo7BQCg3k2ZMiU7AQAAAAAAAAAKluEeAAAAAAAAAACavXbt2sUJJ5yQnUENnnrqqXjooYeyM4rajBkz4sEHH8zOoA5OPPHE6NChQ3YGABuoX79+MW3atOwMoAmaN29eHH/88dkZAAB8ysUXXxxTp07NzgA20n333ef3VQBAs3XHHXdkJwAAAAAAAABAwTLcAwAAAAAAAABAszd69Oho27ZtdgbrUV1dHZWVldkZRMTw4cNj5cqV2RnUUnl5eYwZMyY7A4CNcOyxx8a8efOyM4AmZOXKldG7d29/dwAAFKDTTz89li9fnp0BbKAFCxbEGWeckZ0BANBgnnrqqXj99dezMwAAAAAAAACgIBnuAQAAAAAAAACgWevcuXMcc8wx2RnUYNKkSTFp0qTsDCJi9uzZcd9992VnUAc/+tGPomvXrtkZAGygd955J0466aRYsWJFdgrQRAwdOtT3TwAABWrWrFlx4YUXZmcAG2DdunUxaNCgWLBgQXYKAECD+uMf/5idAAAAAAAAAAAFyXAPAAAAAAAAAADN2rBhw6JNmzbZGazH2rVro7KyMjuDTxk6dGgsX748O4NaatmyZYwcOTI7A4CN8Pjjj8egQYNi3bp12SlAgbv55pvjkksuyc4AAOBzVFZWxlNPPZWdAdTRPffcEzfffHN2BgBAg7vmmmti7dq12RkAAAAAAAAAUHAM9wAAAAAAAAAA0Gx16dIljjzyyOwMavDHP/4xpk6dmp3Bp7z55ptx5513ZmdQBwcddFD06tUrOwOAjXDVVVfFddddl50BFLCpU6dG7969szMAAKiF0047LT744IPsDKCW5s2bF7/4xS+yMwAAGsWcOXPi2Wefzc4AAAAAAAAAgIJjuAcAAAAAAAAAgGarsrIyWrZsmZ3BeqxevTqGDx+encF6VFRUxNKlS7MzqKXS0tKoqKjIzgBgI5122mnxyCOPZGcABeiNN96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aKV(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aKV(8,
					"googleplay", 3,
					"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"
					), aKV(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aKV(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aKV(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aKV(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aKV(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aKV(14, "bestPlayer", 5,
					"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"
					), aKV(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aKV(16, "apple", 3,
					"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"
					), aKV(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aKV(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aKV(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aKV(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aKV(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aKV(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					), aKV(23, "clock", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAZGhkoKic1NzRYWleAgoCjpaIA/wA4/zvJzMl5/3nk5+Sq/6rI/8fm/+b///8vfxrjAAAC1UlEQVRIx4WVMYwSQRSGh+O4hFBIe901VjZUlxgb2gvF0VhcLLhGGwrKI4TDksYoiUpCLCgxxgjqxeSyxZZngVIehYYSYzRcjIfurfB882be7Oyy6CvYYfbbN/9782aeOPqPifDfF8PPw+frgZczkLZ8Hw9UPwLbt2YMUJ1AYH9igBHO++27t+89k8TXFeAVzrbzQtr1Lo7HEaCOc0+EtmQZlfZCgBTwWL5Lne7g70YF4CoEPAQ4oY8zcCgfmy5AzwKqM/CyBFyDFj232YVgB4ciBIiKdqGAGVyKCLAF8MUAGELRANoVulgYoA9zjjDt53kEcKYBlNhiQGR5kHBpDQkcgy9ibJ/WELTCzzgAZTYVMDPCAtvDKRfOCaiBn42+T7kouwS/CTgOYjBWkYnJyLJA4BG8jr5PU2a3YEnAiCWkHJ2uZJecbshsC6kxz3HpaArgE9rFVAmpUTsugZ/Te32ilUwRqIOngRsAbxTo5bTLXwg0zE7il55KkM58BmtCAiaPJRJfMWGnMU6BUV6Y9ABc5raDvVdAHwZWfgBYIS220EDZOeX9Aa3wpuMUDbAJXJPyyLR4dBECigbY4dEgWOKg0xYGUFu72+nkA8BW6dl7tqAwfwRTGQhi4DDvm0zKSi2/y9m4yuRcrLF9LCl7s2LqakrbrQNbtS5WLRYMxBQ12QZQwRxN7DgjB4Nqsm+HYVtGHi0EGutUluQdIkKHP2wuBqGP3mCNhDMFjOJTdUueGwIa1hrJvJWFKw3UrB0q+NYK53wFTfSJoewWTQzLJgO4xtsokNIXJQG4BrswQEndYfqe7BsVDKCChXXT1k3VVtRRT2BxTu3LfMTHoaDSfgeURAOgCphLIkHYHqgYrYYiG47HSTqwupawW5r/VH6/K5sWN5ygZ9WpZ/qO41LbG692vQdWVwze241V+aDWO45vzTXder/31jb32vDDp2HvX91/1f4C6yMGMx9Ja7MAAAAASUVORK5CYII="
					), aKV(24, "userIcon", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAwAODg4sLyw2ODVCREFgYl+Bg4CkpqMA/wDMz8t5/3il/6Tk5+TD/8Th/+P///8NWuTPAAACa0lEQVRIx92Vz2sTQRTHR6GI4GU0SQkEqncvXoSAl9wFm5MXIe1fkCpIEYRcQ0L8ASp42mvwkmtP1taKCIW5loLstVjq4o/YrN3k68y8t7OzWyTise8S3pvPzPu+H2xEd46JswW8ycd7wzzQj4B97zgEDn2gp8+BPQeExj3xgE0TwCw9f2JdbDigD7y6dlfhgIEIH5s3A3rCAiN8kFLWMe32Ph/tdwc41m4FcECUNHREBuiblw9HuG/cthVlgB7GJiDvgC2x7iImDAzw3Eaq+uzTawX8su4VK0JY0at8BS91boXv1pVBCjxF0wZqdLVuNRpgWgA69NJlhUYeSFOomG62qQqpTvIiK/gpOdWW+SnhNwN9KrPKxWix38ifZI264QMVAtp2GIJmtZMHTDVlNXOtHiB5IMtBlgIvZKljJfC49fx3dQd/SNdR4w4d0AtpBtygFo/kSzfTgF1t4IYFSKznRA6AhyT7PUmwDasEblih1kS5k6bt+A4Vo8wTwvSJc5eBeLX0GNxpec/UIczCcXmddGHiBl+YWSCiBZK3kWq1K2pvDDWQLlxJIV4R2hYC0mKmdqCBdOFuIVkW1hZUKlOLEG5dAjwTbHXwZqipBjZjHkCcnovzilcomGkgpCKvY9sBokUro1ungWjMipcz4AK3poWh6NJ26IXMznUOKn0pA8oYe4Do0GJ7wCLe+UCL2l3LgCrWfOASNccDalgR5zLg4ilgyS/ClLF1Crg6DxB/BY7XtXWKAEcNwFYA2P4FePvVWFQEZjZ85L7VoyIwKXzMR1j37ZH7qGZAwSbzgOILgyKwcTb/Fv8b+ANlD8k4eGaP9QAAAABJRU5ErkJggg=="
					), aKV(25, "battleRoyale", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAmMCMAcQBbXVoArAB8fnuHioaQko+cnpunqqYA/gC2uLXAwr/N0M3c39v///9qRmqPAAADUElEQVRIx7WVT0gUURjAvzezYtnlgVlZBA/xNKcR6R/rxrjsaU+Kl4SUvHQ0oVMEUUgdLfEY5jrsaa5L0MUKpEN0EBFPQnsQXcVwToGL7rzen++9mV2KLvVO8775ve99/x9Ef1nwX4HSwKAEAoCL5d/9Fj+gLADopeAMdiLVIoB7c84TAFn+MA7gtBNFBuTG0/izAlb40ashAJIi1QGA3iffOX8jAZjlPPkxry7ExcC9t8bFGpMAK8jP5OsEzeH/EPrWYiX0JRD0c7WO543LgftRi5pUelHpjvX2AFVUIa8FfA9kHMIuBJIZRwEVsoDArqMAUrcHPGXiZTzB13MSqMIK7lu+o0ycxj1fVEDE7hrBuvSUuUZjMtajgesGaPo9QuGI2Z75ZQUEF4wkeUGiivvJ8qCBSreR8H3q0Sux3Tm6HiquFbXGgMxafBeBkGzw1Myuut1sIhDBIys79Qv2O3meM8BIKlyyJvJD30MgcN9Z6WTKzqj8g4rdbWNm85kFtnXuVIqZNf29dehsSJcY6ASj7a1CagzkMn1RxBLY3UgtdNoah2k78xkLvTYghFvi9p8L1kLIdbQeI1OcP4xtvGyfGKAKffWT6dRCr715S6VoFfJLJg0H1BHNU06BUPSvuMREvDUuFDBwUoC5QhQQU5tfhkA43quv0aGeOvAdWylHhX06SN1vOhI6WfWkBgRNTF7GLR+EUzWbLHZNFqiplIaoji0QvdH0DRDI3trGNLRkwk+HF3gGCGWvJahgXaYjeWu6RHtB+22WD20XtVIjo1FiCi2ZN76aTsV6GLGNYYoreUAyoTb9KGJIsOga1MsCOCNq4Iikqc8t8LK5mMLmdaKA3DcZz+QCg7RPr0ZVarVlc2EGgkgz3OFZFZBRIC8ur9oJpVVAqiCWp3KsL1N3GkAFp9K4RZATKllOVcghphXU5GhpUBmRhnZV6FNj0MUdiIw06TkVLjyjgfOoD4R5NRD4NmArnmigGy2qwqUdH6Bw5DtFreIkc4U0aJQMg8fcx7KmlYo9PWnJa+uSKPUQRFOg65t60kI+xqCoZmGqkKSKZE5P2sCd3DHNLqky5u+4RnswkmJ5na8icycoTlqhWb6gHSvEU39+eUul8r953H8BBeY6pZneQOEAAAAASUVORK5CYII="
					), aKV(26, "oneVsOne", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAACNwBHSUYAaQB+gH0AugCIioeSlZKanZkA3ACmqaUA/wC2uLXGycXa3Nn///+iBll7AAABfUlEQVRIx+2UPU7DUAyA3aZFCBWUCDF06wmga9WFG5CoYkA9BNyAK5CBKYfoEGWIsvQGcIOiDkxISAhRVEGN7ffTvrQRGwNKhhf5e1/0bMcJFL9cUAv/TkgB4MTdMEgJfYoaiSMYJEIOfI039y0SIYYJrnqOYBELud98LQlrxEIEHSwJawQcwHVJ2EDA9ewhRyNOa5D5kp5CIsTQfJCICwMvln2NRLhrTlAJp4ifjZDWhUFK6KAWDhC/wT9DnBvkClGLV7hFfNwSXiRJKh3PYUaLQUZY7HN0yQ9PpUEGaeEZJLri45/onCUYpMsEHfUPKT/K9B0sYiEDL1JRSN35OCLJs0hafZ/EKkrp/C9qw03XIvO6VZRRBSt6B72hRa6Q+xeIM2rWuEIouNmUBk/abiGUDs69okqIWyxM25UCl0GNHlYKGU2qHq3dQsHNXsoHUiGE1Ow3r9gSUhkzLo7vbQeJkMk0Gtx1kPo2R0EQDGTeg+A4cVD9l6uFPxZ+APLvRdqXArbWAAAAAElFTkSuQmCC"
					), aKV(27, "zombie", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAANwAwMi8AdwBWWFUAqgB+gH2Ji4iTlZIA1ACfop6rraoA/wC/wr/JzMn///+1mI6XAAACOElEQVRIx9WVv24TQRDGP3w2xAGcSIguhZ8gPskVUgqXVMQUFEguXEYUEEX0+A1iihRILvIGoaTCiSwXJ6VwSZcI0UXCkRU5UaLccjs7++92eYB81Xrv59nZ2W92cerpoP3umz8DZ5y11yH16j9AloL1YhQD5PfXf+f5xWcgGUWAFNWxIN10kITAV1TngpV3sFEGps53Ie6a6JWALo6Eo2uzCAMTbApPM4w8YFgRJTXrHoC1MnDJIcArHJWBnDeigO4TEaifWCBDKwSu1BoEnGAcAvfYMsCwKiLq1A2QNmLA98QA69sxYAENTMNNqnL3GJhAREVZSuBY5Xi7c8Y12lGbam5ogMq0BCpzdkPlC23jGQPDp/SzMGNDJQdQzH5dAw0VoAihSewXg0MNdCVwDp7PaUBTNQ3Is+7TfItD4bE88YSBVAJNml9TKajFLCDjwQdkaWY1NwcDXJoIA28X0DnYJcw2j1dMDp+KvjJJmkKdyLIMaH7ubtOUmg5rof8nduVo2z2siXRcrqcLM6oUrsmUIM/KD785gBB7wBvPMGy5Xx+0EX58LFnOMe3dOGbaCUzrL1ox22e0Jmmwokd/nMYprp997UPtzxskXvNyFksqprLNltv+b7FK0+dsO3GIl/4VlIL/x7HKVxD3xr0s55npiRAoNc3DBJYQs+eCavkwgal0nQXy4MXJ5FVogVv9nthHTfaGBa4QvHpp9acFLjpJAAzhqRYA9mGWetSLvN0HbaP38dc/qn80XpfaOx2MlAAAAABJRU5ErkJggg=="
					), aKV(28, "noFullSending", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEX///8A/wD4+Pjp6ekl6yXExMSZmZkAwAAygzJZWVkgTCAXNBcQHxAIDggCBAIAAACV9pxNAAAC1ElEQVR42u2VzWsaQRTAh13Wu6cBU9q9VPC2p8Cm/8ReGkibkiWSQyGJ7ClQov4Peio0LiH00EIqEkJomkZ6EAmx9VSltenSi2LaklNcVo3T92bW1XwUL6WnzOmN7+eb970kPOGQW+AfAmt/U64JIMI2b9ZzBQB3lyrWTXp6PPuDA2kj5t4EpDOKK55okpXymm+EBsbWa2TVEk4ms3KeDVBDi4z1OPLM6Wp6axjmeyN6xj4IPWN9IOjZwFQcdwhMeer8fhlM9eIqmbbhj/mLkpR77hR8IFXZlXP1MK3GCZzohUV7be1xicx1BUDP4htmqBGOdFQEpEQheWKGvmhEObQQoEVPg+uDejJL+NFbxR15wwQpUQCAVhkoZkqSXYTf5kAO9cGnl8uLgNYBuMNqYFmyM8pHg8i2pxLlmxHz7rNzcMcFIFnT0O7MT02vEdn5bZCVrHxgRAfgkdJFYFE83KiBRunmDR0FEmsdAdAbA8qprHIw66aXjg29ife3GpFfWByQ0Z9ypG/E2m4ql1GqW3DfQ2CDA9KjDALUa5InbvqztGrjfe+1RiQOxJ8yAZzPb8m5tjZTWsB7IW8QKWdhmINDH4DshDCFlwHasNZ9gITaqpQziQC2/SewNwTQCYAs+vDKd3IMGD6R2BoPcwS0l30nE5DlWP1IE4kaAQ0I8+Q7hHnYgTL0O+pV4JcRa9oeJOoT6pxhsQIAU23oWQVS3YMAeLlbYwAvFq8KCDuidRbKIwDL7fHCExvLjYJsbwYANkzF4RaiDBsG21PvWwGALbeZ6sZVadruRdrq/C6R5pzWcC4Y86Bpob1xcFghnNyRbRAG/uiB4gLbHkyhvo6zZoYcxvaCDZOEwREj+W6frxMKg3NqBSuIwpvly7O/DqM3AmB4T69uhzem0hgCMP7b13YM/arpdQFQWCCF6wtmKlggE1fQvYcTltjENThxkd5+cf4P8Acm8L1xck3dqAAAAABJRU5ErkJggg=="
					)
		}
	}, this.get = function(eJ) {
		return canvas[eJ]
	}, this.wB = function(name) {
		for (var aC = a3f.length - 1; 0 <= aC; aC--)
			if (a3f[aC] === name) return canvas[aC];
		return aKP
	}, this.v2 = function() {
		return aKO <= 0
	}, this.aKR = function() {
		aKO = 0, aKS()
	}
}

function cX() {
	var aKb = [
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
		aKc = [
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
	this.aKd = null, this.aKe = null, this.aKf = null, this.aKg = null, this.aKh = null, this.aKi = null, this.aKj = null, this.aKk = null, this.aKl = null, this.aKm = null;

	function aKt(kB, oG) {
		for (var aKd = ad.aKd, aKe = ad.aKe, aKf = ad.aKf, aC = kB; aC < oG; aC++) aKd[aC] = bO.g1(64 * az.random(), az.value(100)) << 2, aKe[aC] = bO.g1(64 * az.random(), az.value(100)) << 2, aKf[aC] = bO.g1(64 * az.random(), az.value(100)) << 2
	}

	function aKs(kB, oG) {
		for (var colorsData = aE.data.colorsData, aKd = ad.aKd, aKe = ad.aKe, aKf = ad.aKf, aC = kB; aC < oG; aC++) {
			var g2 = colorsData[aC];
			aKd[aC] = 4 * (g2 >> 12), aKe[aC] = 4 * (g2 >> 6 & 63), aKf[aC] = 4 * (63 & g2)
		}
	}

	function aLA(fE, aLC) {
		aFV[fE] = 0, aFV[fE + 1] = 0, aFV[fE + 2] = aLC, aFV[fE + 3] = 0, aLD(fE)
	}

	function aLD(fE) {
		var fh;
		be.oO || (fh = ad.a1R(fE), fE = ad.a1S(fE), be.oO = fh >= bd.aFU[0] && fh <= bd.aFU[2] && fE >= bd.aFU[1] && fE <= bd.aFU[3])
	}
	this.fc = new Int32Array(4), this.aKq = new Int32Array(8), this.dl = function() {
		var fc = this.fc,
			fc = (fc[0] = -4 * bV.fl, fc[1] = 4, fc[2] = -fc[0], fc[3] = -fc[1], this.aKq);
		fc[0] = -4 * bV.fl - 4, fc[1] = -4 * bV.fl, fc[2] = -4 * bV.fl + 4, fc[3] = -4, fc[4] = 4, fc[5] = 4 * bV.fl - 4, fc[6] = 4 * bV.fl, fc[7] = 4 * bV.fl + 4
	}, this.dk = function() {
		if (this.aKd ? (this.aKd.fill(0), this.aKe.fill(0), this.aKf.fill(0), this.aKg.fill(0), this.aKh.fill(0), this.aKi.fill(0), this.aKj.fill(0), this.aKk.fill(0), this.aKl.fill(0), this.aKm.fill(0), this.aBs.fill(0)) : (this.aKd =
				new Uint8Array(aE.fX), this.aKe = new Uint8Array(aE.fX), this.aKf = new Uint8Array(aE.fX), this.aKg = new Uint8Array(aE.fX), this.aKh = new Uint8Array(aE.fX), this.aKi = new Uint8Array(aE.fX), this.aKj = new Uint8Array(aE.fX),
				this.aKk = new Uint8Array(aE.fX), this.aKl = new Uint8Array(aE.fX), this.aKm = new Uint8Array(aE.fX), this.aBs = new Uint8Array(aE.fX)), aE.iU)
			for (var aE8 = bj.aE8, aKd = ad.aKd, aKe = ad.aKe, aKf = ad.aKf, aC = aE.fX - 1; 0 <= aC; aC--) {
				var ek = aE8[aC],
					lq = bO.g1((aKc[ek][3] + 1) * az.random(), az.value(100));
				aKd[aC] = aKb[ek][0] + lq * aKc[ek][0], aKe[aC] = aKb[ek][1] + lq * aKc[ek][1], aKf[aC] = aKb[ek][2] + lq * aKc[ek][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aKs(0, aE.kv), aKt(aE.kv, aE.fX)) : aKt(0, aE.fX) : aKs(0, aE.fX);
		! function() {
			var aC, fd, aKd = ad.aKd,
				aKe = ad.aKe,
				aKf = ad.aKf;
			for (aC = aE.fX - 1; 0 <= aC; aC--) fd = bO.g1(aKd[aC] + aKe[aC] + aKf[aC], 3), aKd[aC] += aKz(fd - aKd[aC], 2), aKe[aC] += aKz(fd - aKe[aC], 2), aKf[aC] += aKz(fd - aKf[aC], 2), aKd[aC] -= aKd[aC] % 4, aKe[aC] -= aKe[aC] % 4, aKf[
				aC] -= aKf[aC] % 4
		}(),
		function() {
			for (var fa = aE.fX, aKd = ad.aKd, aKe = ad.aKe, aKf = ad.aKf, aKg = ad.aKg, aC = 0; aC < fa; aC++) aKd[aC] += aC >> 7, aKe[aC] += aC >> 5 & 3, aKf[aC] += aC >> 3 & 3, aKg[aC] = 7 & aC
		}(), this.aKw(),
			function() {
				for (var fa = aE.fX, aKh = ad.aKh, aKi = ad.aKi, aKj = ad.aKj, aKd = ad.aKd, aKe = ad.aKe, aKf = ad.aKf, aC = 0; aC < fa; aC++) {
					var eI = aKd[aC],
						uy = aKe[aC],
						fu = aKf[aC];
					60 <= eI + uy + fu ? (aKh[aC] = Math.max(eI - 40, 3 & eI), aKi[aC] = Math.max(uy - 40, 3 & uy), aKj[aC] = Math.max(fu - 40, 3 & fu)) : (aKh[aC] = eI + 40, aKi[aC] = uy + 40, aKj[aC] = fu + 40)
				}
			}(),
			function() {
				for (var fa = aE.fX, aKk = ad.aKk, aKl = ad.aKl, aKm = ad.aKm, aKd = ad.aKd, aKe = ad.aKe, aKf = ad.aKf, aC = 0; aC < fa; aC++) {
					var eI = aKd[aC],
						uy = aKe[aC],
						fu = aKf[aC];
					688 <= eI + uy + fu ? (aKk[aC] = eI - 88, aKl[aC] = uy - 88, aKm[aC] = fu - 88) : (aKk[aC] = Math.min(eI + 88, 252 + (3 & eI)), aKl[aC] = Math.min(uy + 88, 252 + (3 & uy)), aKm[aC] = Math.min(fu + 88, 252 + (3 & fu)))
				}
			}()
	}, this.aAk = function(player) {
		var h = bR.g9;
		return h[0] = this.aKd[player], h[1] = this.aKe[player], h[2] = this.aKf[player], h
	}, this.aKw = function() {
		for (var aC = aE.fX - 1; 0 <= aC; aC--) this.aBs[aC] = this.aKd[aC] + this.aKe[aC] + this.aKf[aC] < 280 ? 0 : 1
	}, this.a1R = function(fE) {
		return bO.g1(fE, 4) % bV.fl
	}, this.a1S = function(fE) {
		return bO.g1(fE, 4 * bV.fl)
	}, this.a0z = function(fh, fj) {
		return Math.floor(4 * (fj * bV.fl + fh))
	}, this.a1F = function(fE) {
		var fc = this.fc;
		return this.aL0(fE + fc[0]) || this.aL0(fE + fc[1]) || this.aL0(fE + fc[2]) || this.aL0(fE + fc[3])
	}, this.fy = function(fE) {
		var fc = this.fc;
		return this.ff(fE + fc[0]) || this.ff(fE + fc[1]) || this.ff(fE + fc[2]) || this.ff(fE + fc[3])
	}, this.a1D = function(fE, player) {
		var fc = this.fc;
		return this.aL1(fE + fc[0], player) || this.aL1(fE + fc[1], player) || this.aL1(fE + fc[2], player) || this.aL1(fE + fc[3], player)
	}, this.aL2 = function(aC, aL3, aL4, aL5) {
		this.aKd[aC] = aL3 >> 16, this.aKe[aC] = aL3 >> 8 & 255, this.aKf[aC] = 255 & aL3, this.aKh[aC] = aL4 >> 16, this.aKi[aC] = aL4 >> 8 & 255, this.aKj[aC] = 255 & aL4, this.aKk[aC] = aL5 >> 16, this.aKl[aC] = aL5 >> 8 & 255, this.aKm[aC] =
			255 & aL5
	}, this.aL6 = function(aC) {
		return [(this.aKd[aC] << 16) + (this.aKe[aC] << 8) + this.aKf[aC], (this.aKh[aC] << 16) + (this.aKi[aC] << 8) + this.aKj[aC], (this.aKk[aC] << 16) + (this.aKl[aC] << 8) + this.aKm[aC]]
	}, this.hA = function(fE) {
		return 208 <= aFV[fE + 3]
	}, this.a1L = function(player, fE) {
		return this.hA(fE) && this.a1O(player, fE)
	}, this.a1O = function(player, fE) {
		return player === this.fS(fE)
	}, this.aL7 = function(fE) {
		return 208 <= aFV[fE + 3] && aFV[fE + 3] < 224
	}, this.k6 = function(fE) {
		return 224 <= aFV[fE + 3] && aFV[fE + 3] < 248
	}, this.aL8 = function(fE) {
		return 248 <= aFV[fE + 3]
	}, this.a1E = function(fE) {
		for (var fc = this.fc, aC = 3; 0 <= aC; aC--)
			if (this.ir(fE + fc[aC])) return !0;
		return !1
	}, this.fV = function(fE) {
		return this.hA(fE) || this.fR(fE)
	}, this.ir = function(fE) {
		return 0 === aFV[fE + 3] && 2 === aFV[fE + 2]
	}, this.fR = function(fE) {
		return 0 === aFV[fE + 3] && 1 === aFV[fE + 2]
	}, this.a04 = function(fE) {
		return 0 === aFV[fE + 3] && 3 === aFV[fE + 2]
	}, this.ff = function(fE) {
		return 0 === aFV[fE + 3] && 5 === aFV[fE + 2]
	}, this.aL0 = function(fE) {
		return 0 === aFV[fE + 3] && 3 <= aFV[fE + 2]
	}, this.fI = function(fE) {
		return (aFV[fE] >> 1 << 8) + aFV[fE + 1]
	}, this.aL9 = function(fE) {
		return 1 & aFV[fE]
	}, this.aL1 = function(fE, player) {
		return this.fR(fE) || this.hA(fE) && player !== this.fS(fE)
	}, this.fS = function(fE) {
		return ((3 & aFV[fE]) << 7) + ((3 & aFV[fE + 1]) << 5) + ((3 & aFV[fE + 2]) << 3) + (7 & aFV[fE + 3])
	}, this.a1M = function(fE) {
		aLA(fE, 1)
	}, this.aLB = function(fE) {
		aLA(fE, 2)
	}, this.a10 = function(fE, player) {
		aFV[fE] = this.aKd[player], aFV[fE + 1] = this.aKe[player], aFV[fE + 2] = this.aKf[player], aFV[fE + 3] = 208 + this.aKg[player], aLD(fE)
	}, this.h5 = function(fE, player) {
		aFV[fE] = this.aKh[player], aFV[fE + 1] = this.aKi[player], aFV[fE + 2] = this.aKj[player], aFV[fE + 3] = 224 + this.aKg[player], aLD(fE)
	}, this.k7 = function(fE, player) {
		aFV[fE] = this.aKk[player], aFV[fE + 1] = this.aKl[player], aFV[fE + 2] = this.aKm[player], aFV[fE + 3] = 248 + this.aKg[player], aLD(fE)
	}
}

function cw() {
	var aLE = 0,
		aLF = new Uint16Array(64);

	function f6(a8e) {
		aLE -= 2;
		for (var aC = a8e; aC < aLE; aC += 2) aLF[aC] = aLF[aC + 2], aLF[aC + 1] = aLF[aC + 3]
	}
	this.dk = function() {
		aLE = 0
	}, this.ef = function() {
		var aC, k4, jD;
		if (0 !== aLE)
			if (0 === ah.nX[aE.fK]) aLE = 0;
			else if (0 === ae.gh(aE.fK)) aLE = 0;
		else
			for (aC = aLE - 2; 0 <= aC; aC -= 2)(k4 = aLF[aC]) < aE.fX && 0 === ah.nX[k4] ? f6(aC) : (jD = aLF[aC + 1], (k4 >= aE.fX && bv.aLH(aE.fK) || k4 < aE.fX && bv.aLI(aE.fK, k4)) && (bB.i0.i7(jD, k4), f6(aC)))
	}, this.i8 = function(k4, jD) {
		! function(k4, jD) {
			for (var aC = 0; aC < aLE; aC += 2)
				if (aLF[aC] === k4) return aLF[aC + 1] = Math.min(aLF[aC + 1] + jD, 1023), 1;
			return
		}(k4, jD) && 64 !== aLE && (aLF[aLE] = k4, aLF[aLE + 1] = jD, aLE += 2)
	}
}

function cY() {
	function aLQ(player) {
		var eb;
		bD.gw.a6k(player) && (eb = ah.hc[player] - ah.a6p[player] + ae.aLS(player), bg.h0(player, Math.abs(eb), eb < 0 ? 18 : 12)), ah.hc[player] = 0, ah.a6p[player] = 0
	}

	function aLZ() {
		aY.show(!1, !1, !1, !0), aX.aEe(), bU.a34.a3t()
	}

	function aLM(player, aLY) {
		for (var aC = aLY.length - 1; 0 <= aC; aC--) ae.aLb(aLY[aC], player)
	}

	function aLP(player) {
		var jT = ah.jT,
			jU = ah.jU,
			jV = ah.jV,
			jW = ah.jW,
			fl = bV.fl;
		if (ah.hO[player]) {
			ah.hO[player] = 0;
			for (var ny = jT[player], nz = jV[player], fh = jU[player]; ny <= fh; fh--)
				for (var fj = jW[player]; nz <= fj; fj--) {
					var h8 = 4 * (fj * fl + fh);
					ad.a1L(player, h8) && ad.a1M(h8)
				}
		}
		jU[player] = jW[player] = 0, jT[player] = jV[player] = Math.max(fl, bV.fm)
	}
	this.dt = function(h8) {
		var player, eb = ah.hO[h8] + ah.a0v[h8];
		bQ.z.kz[h8] ? eb && (aLM(player = h8, ae.aLN(player)), ag.aLO(player), aLP(player), aG.gy(player), ae.clear(player), aLQ(player), function(player) {
			ah.a0v[player] = 0, ah.h2[player] = [], ah.hG[player] = [], ah.hH[player] = [], ah.fz[player] = []
		}(player)) : !eb && ah.h2[h8].length || this.aLL(h8)
	}, this.aLL = function(player) {
		! function(player) {
			bD.gw.kI(player) || (ah.a3x[player] = bl.a4C.aLX(), aE.a3K++);
			var aLY = ae.aLN(player);
			0 === aLY.length ? bD.gw.a6h(player) && aLZ() : (aLM(player, aLY), function(player, aLY) {
				var aLd = aLY[function(aLY) {
					var aC, eJ = 0;
					for (aC = aLY.length - 1; 1 <= aC; aC--) ah.hO[aLY[aC]] > ah.hO[aLY[eJ]] && (eJ = aC);
					return eJ
				}(aLY)];
				9 === aE.lD && (1 === bj.fY[player] ? az.kn(8) && b0.aLe(aLd) : aF.iJ[player] && (aO.aA3(765, 0), aO.a1o(280, L(142, [ah.a1p[aLd], ah.a1p[player]]), 765, aLd, bE.pI, bE.qf, -1, !0)));
				if (bD.gw.a6h(player)) aLZ(), aO.a3W(aLd, 1);
				else {
					for (var aC = aLY.length - 1; 0 <= aC; aC--)
						if (bD.gw.a6k(aLY[aC]) && (bg.nT[4 - bD.gw.kI(player)]++, bD.gw.a6h(aLY[aC]))) return aO.a3W(player, 0);
					bD.gw.kI(player) || aO.a9o(0, player, aLd)
				}
			}(player, aLY))
		}(player), ag.aLO(player), aLP(player), aLQ(player),
			function(player) {
				ah.nX[player] = 0, ah.h2[player] = null, ah.hG[player] = null, ah.hH[player] = null, ah.fz[player] = null
			}(player), aG.gy(player), ae.clear(player), bQ.aLV.aLW(player)
	}
}

function d1() {
	var input;

	function aLf(e) {
		(e = e.target.files) && 0 < e.length && b7.aLi(e[0])
	}

	function aLm(e) {
		var ek = new Image;
		ek.onload = aLn, ek.src = e.target.result
	}

	function aLn(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aLp = bm.buffer.data[162].value,
			max = Math.min(bV.aLq, aLp),
			aLp = (max = a1.id || bM.sr() ? Math.min(1400, aLp) : max) / Math.max(j, k);
		if (aLp < 1 && (j = Math.floor(aLp * j + .125), k = Math.floor(aLp * k + .125)), max < j || max < k || j < 10 || k < 10) aLp = "Invalid Image Dimensions!", a1.yg ? a1.yg.showToast(aLp) : alert(aLp);
		else {
			for (var max = document.createElement("canvas"), aLp = (max.width = j, max.height = k, max.getContext("2d")), aLs = document.createElement("canvas"), aLt = (aLs.width = e.width, aLs.height = e.height, aLs.getContext("2d")), e = (aLt
					.drawImage(e, 0, 0), aLt.getImageData(0, 0, aLs.width, aLs.height)), aLt = aLp.createImageData(j, k), src = e.data, aLw = aLt.data, aCT = aLs.width / j, aCU = aLs.height / k, fj = 0; fj < k; fj++)
				for (var fh = 0; fh < j; fh++) {
					var aLx = Math.floor(fh * aCT),
						aLx = 4 * (Math.floor(fj * aCU) * aLs.width + aLx),
						aM0 = 4 * (fj * j + fh);
					aLw[aM0] = src[aLx], aLw[1 + aM0] = src[1 + aLx], aLw[2 + aM0] = src[2 + aLx], aLw[3 + aM0] = 255
				}
			aLp.putImageData(aLt, 0, 0), 20 === u.uc && u.a4Z().aLn(max)
		}
	}
	this.dk = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aLf
	}, this.x4 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aLg = function() {
		input.click()
	}, this.aLi = function(aLj) {
		var h = aLj.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aLm, h.readAsDataURL(aLj))
	}
}

function cz() {
	this.aM1 = new Uint32Array(aE.fX), this.dk = function() {
		10 === aE.lD && this.aM1.fill(0)
	}, this.ef = function() {
		10 === aE.lD && this.lk()
	}, this.lk = function() {
		for (var h8, target, aEr, aM1 = this.aM1, w4 = am.lW, a6q = ah.hc, aC = am.lR - 1; 0 <= aC; aC--)(h8 = w4[aC]) >= aE.kv || (target = Math.max(bO.g1(a6q[h8], 4), 2048), aEr = Math.max(af.aEs(h8), 100), aM1[h8] += bO.g1(aEr * target, 1e4),
			aM1[h8] > target && (aM1[h8] = target))
	}, this.a6w = function(player, iJ) {
		return 10 !== aE.lD || bD.gw.kI(player) ? iJ : Math.min(this.aM1[player], iJ)
	}, this.a72 = function(player, iJ) {
		10 !== aE.lD || bD.gw.kI(player) || (this.aM1[player] -= iJ)
	}
}

function d2() {
	var aM2 = -1,
		aM3 = null,
		aM4 = -1,
		xV = 4;

	function aM6() {
		aN.a98() ? be.render() : be.a3U()
	}

	function aME(ek, fd) {
		var eI = ek >> 16,
			uy = ek >> 8 & 255,
			ek = 255 & ek,
			aMF = 255 - fd,
			aMF = (aMF < eI && aMF < uy && aMF < ek && (fd = -fd), aM2 >> 7),
			aMH = aM2 >> 5 & 3,
			aMI = aM2 >> 3 & 3;
		return (Math.max(Math.min(eI + fd, 252 + aMF), aMF) << 16) + (Math.max(Math.min(uy + fd, 252 + aMH), aMH) << 8) + Math.max(Math.min(ek + fd, 252 + aMI), aMI)
	}

	function aM5() {
		return -1 !== aM2 && (ad.aL2(aM2, aM3[0], aM3[1], aM3[2]), aMB(aM2), aM2 = -1)
	}

	function aMB(player) {
		bi.ds = !0;
		for (var jT = ah.jT[player], jV = ah.jV[player], jU = ah.jU[player], jW = ah.jW[player], fj = jV; fj <= jW; fj++)
			for (var fh = jT; fh <= jU; fh++) {
				var fE = ad.a0z(fh, fj);
				ad.a1L(player, fE) && (ad.aL8(fE) ? ad.k7(fE, player) : ad.k6(fE) ? ad.h5(fE, player) : ad.a10(fE, player))
			}
	}
	this.dk = function() {
		aM3 = null, aM4 = aM2 = -1, xV = bO.ik(Math.floor(bm.buffer.data[16].value), 0, 16)
	}, this.ef = function(by) {
		if (bm.buffer.data[15].value && 0 !== xV && (by || !bM.sr())) {
			var by = bP.hq(bM.hf),
				hr = bP.hs(bM.hg);
			if (bP.ht(by, hr)) {
				by = bP.fx(by, hr), hr = bP.fQ(by);
				if (aM4 === hr)
					if (ad.hA(hr)) {
						if (aM2 === ad.fS(hr)) return
					} else if (-1 === aM2) return;
				! function(fE) {
					ad.hA(fE) ? (fE = ad.fS(fE)) !== aM2 && (aM5(), function(player) {
						aM2 = player, aM3 = ad.aL6(player);
						var aM9 = function() {
							var sH = aM3,
								aMC = xV << 2,
								aMD = aMC << 1;
							return [aME(sH[0], aMC), aME(sH[1], aMD), aME(sH[2], aMD)]
						}();
						ad.aL2(player, aM9[0], aM9[1], aM9[2]), aMB(player)
					}(fE), aM6()) : aM5() && aM6()
				}(aM4 = hr)
			} else aM5() && aM6()
		}
	}
}

function d3() {
	var xI = 0,
		aMJ = 0,
		aMK = 0,
		aML = 0,
		aM4 = -1;

	function aMO(fE) {
		if (aM4 === fE) return !1;
		if (-1 === (aM4 = fE)) xI = 0, aO.aAG(xI, 0);
		else {
			if (ad.hA(fE)) return aMK = ad.fS(fE), ku = ah.hc[aMK] - ah.a6p[aMK], (4 !== xI || ku !== aMJ) && (xI = 4, aMJ = ku, aO.aAG(xI, ku), !0);
			if (ad.fR(fE)) return 3 !== xI && (xI = 3, aO.aAG(xI, 0), !0);
			if (ad.ff(fE)) return 2 !== xI && (xI = 2, aO.aAG(xI, 0), !0);
			var ku = bQ.lk.a8w(bM.hf, bM.hg);
			if (-1 === ku) return 1 !== xI && (xI = 1, aO.aAG(xI, 0), !0);
			fE = bQ.z.a9v[ku];
			if (aMK = bQ.z.mo[ku], aML = bQ.z.mp[ku] >> 3, 5 === xI && fE === aMJ) return !1;
			xI = 5, aMJ = fE, aO.aAG(xI, fE)
		}
		return !0
	}
	this.dk = function() {
		aML = aMK = aMJ = xI = 0, aM4 = -1
	}, this.ef = function(by) {
		var hr;
		!by && bM.sr() || (by = bP.hq(bM.hf), hr = bP.hs(bM.hg), bP.ht(by, hr) ? (by = bP.fx(by, hr), aMO(bP.fQ(by))) : aMO(-1))
	}, this.nE = function() {
		var aMQ, ku, a8u, aMP;
		if (0 !== xI && 2 !== xI)
			if (bM.sr()) {
				if (1 !== xI && 3 !== xI) {
					if (4 === xI) return void(ku = ah.hc[aMK] - ah.a6p[aMK], aMJ === ku || (aMJ = ku, aO.aAG(xI, ku)));
					(a8u = bQ.lk.nx(aML, aMK)) < 0 ? (xI = 1, aO.aAG(xI, 0)) : (aMP = bQ.z.a9v[a8u]) !== aMJ && (aMJ = aMP, aO.aAG(xI, aMP))
				}
			} else if (1 === xI) - 1 !== (a8u = bQ.lk.a8w(bM.hf, bM.hg)) && (xI = 5, aMJ = bQ.z.a9v[a8u], aO.aAG(xI, aMJ));
		else if (3 === xI) ad.hA(aM4) && (xI = 4, aMQ = ad.fS(aM4), aMJ = ah.hc[aMQ] - ah.a6p[aMQ], aO.aAG(xI, aMJ));
		else if (4 === xI) {
			if (ad.hA(aM4)) return void(aMQ = ad.fS(aM4), ku = ah.hc[aMQ] - ah.a6p[aMQ], aMJ === ku || (aMJ = ku, aO.aAG(xI, ku)));
			xI = 3, aO.aAG(xI, 0)
		} else - 1 === (a8u = bQ.lk.a8w(bM.hf, bM.hg)) ? (xI = 1, aO.aAG(xI, 0)) : (aMP = bQ.z.a9v[a8u]) !== aMJ && (aMJ = aMP, aO.aAG(xI, aMP))
	}
}

function dc() {
	function aMS(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aMa, h.readAsText(e))
	}

	function aMa(e) {
		var aMd;
		aE.a3I || (e = JSON.parse(e.target.result), aMd = aE.data = new a7p, aMe(e, aMd, "mapType", 0, 2), aMe(e, aMd, "mapProceduralIndex", 0, 255), aMe(e, aMd, "mapRealisticIndex", 0, 255), aMe(e, aMd, "mapSeed", 0, 16383), function(aMc, aMd, h9,
				max) {
				aMc = aMc[h9];
				aMd[h9] = aMk(aMc) ? aMc.slice(0, max) : aMd[h9]
			}(e, aMd, "mapName", 20), function(aMc, aMd, h9) {
				var aLo;
				2 === aMd.mapType && (!aMk(aMc = aMc[h9]) || aMc.length <= 20 ? aMd.mapType = 0 : ((aLo = new Image).onload = function() {
					bC.aMl.aMm(aLo, 1), aLo.onload = null, aLo = null
				}, aLo.src = aMc))
			}(e, aMd, "canvas"), aMe(e, aMd, "passableWater", 0, 1), aMe(e, aMd, "passableMountains", 0, 1), aMe(e, aMd, "playerCount", 1, 512), aMe(e, aMd, "humanCount", 1, 1), aMe(e, aMd, "selectedPlayer", 0, 0), aMe(e, aMd, "gameMode", 0, 1),
			aMe(e, aMd, "playerMode", 0, 0), aMe(e, aMd, "battleRoyaleMode", 0, 0), aMe(e, aMd, "numberTeams", 0, 8), aMe(e, aMd, "isZombieMode", 0, 0), aMe(e, aMd, "isContest", 0, 0), aMe(e, aMd, "isReplay", 0, 0), aMh(e, aMd, "elo", 16, 2,
				16383), aMe(e, aMd, "colorsType", 0, 1), aMe(e, aMd, "colorsPersonalized", 0, 1), aMh(e, aMd, "colorsData", 32, 512, 262143), aMe(e, aMd, "selectableColor", 0, 1), aMh(e, aMd, "teamPlayerCount", 16, 9, 512), aMe(e, aMd,
				"neutralBots", 0, 1), aMe(e, aMd, "botDifficultyType", 0, 3), aMe(e, aMd, "botDifficultyValue", 0, 15), aMh(e, aMd, "botDifficultyTeam", 8, 9, 15), aMh(e, aMd, "botDifficultyData", 8, 512, 15), aMe(e, aMd, "spawningType", 0, 2),
			aMe(e, aMd, "spawningSeed", 0, 16383), aMh(e, aMd, "spawningData", 16, 1024, 4095), aMe(e, aMd, "selectableSpawn", 0, 1), aMe(e, aMd, "playerNamesType", 0, 2),
			function(aMc, aMd, h9, size, max) {
				var a5x = aMc[h9];
				if (Array.isArray(a5x)) {
					for (var a5y = new Array(size), fa = Math.min(a5x.length, size), aC = 0; aC < fa; aC++) a5y[aC] = aMk(a5x[aC]) ? a5x[aC].slice(0, max) : "";
					a5y.fill("", fa), aMd[h9] = a5y
				}
			}(e, aMd, "playerNamesData", 512, 20), aMe(e, aMd, "selectableName", 0, 1), aMe(e, aMd, "aIncomeType", 0, 2), aMe(e, aMd, "aIncomeValue", 0, 255), aMh(e, aMd, "aIncomeData", 8, 512, 255), aMe(e, aMd, "tIncomeType", 0, 2), aMe(e, aMd,
				"tIncomeValue", 0, 255), aMh(e, aMd, "tIncomeData", 8, 512, 255), aMe(e, aMd, "iIncomeType", 0, 2), aMe(e, aMd, "iIncomeValue", 0, 255), aMh(e, aMd, "iIncomeData", 8, 512, 255), aMe(e, aMd, "sResourcesType", 0, 2), aMe(e, aMd,
				"sResourcesValue", 0, 2047), aMh(e, aMd, "sResourcesData", 16, 512, 2047), u.y(), u.z.uU[0] = 0, u.v(19))
	}

	function aMe(aMc, aMd, h9, min, max) {
		aMc = aMc[h9];
		aMd[h9] = "number" == typeof aMc && min <= aMc && aMc <= max ? Math.floor(aMc) : aMd[h9]
	}

	function aMk(s6) {
		return "string" == typeof s6
	}

	function aMh(aMc, aMd, h9, aMn, size, max) {
		var a5x = aMc[h9];
		if (Array.isArray(a5x)) {
			for (var a5y = new(8 === aMn ? Uint8Array : 16 === aMn ? Uint16Array : Uint32Array)(size), fa = Math.min(a5x.length, size), aC = 0; aC < fa; aC++) a5y[aC] = bO.ik(a5x[aC], 0, max);
			aMd[h9] = a5y
		}
	}
	this.aMR = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aMS, input.click()
	}, this.aMT = function() {
		for (var aMW, a3m, a8N = aE.data, keys = Object.keys(a8N), aMU = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a8N[key] instanceof Uint8Array || a8N[key] instanceof Uint16Array || a8N[key] instanceof Uint32Array ? aMU[key] = Array.from(a8N[key]) : aMU[key] = a8N[key]
		}
		aMU.canvas = 2 === aMU.mapType && aMU.canvas ? aMU.canvas.toDataURL() : null, aMW = aMU, aMW = JSON.stringify(aMW, null, 2), aMW = new Blob([aMW], {
			type: "application/json"
		}), (a3m = document.createElement("a")).href = URL.createObjectURL(aMW), a3m.download = "tt_scenario.json", a3m.click()
	}
}

function cc() {
	var aMo, aMp, size, k4, iJ, aMq;

	function aMr(player) {
		return player < aE.kv ? aMo * player : aMo * aE.kv + aMp * (player - aE.kv)
	}
	this.dk = function() {
		aMo = aE.kv < 16 ? 12 : 8, aMp = 4;
		var fa = aMr(aE.fX);
		size = new Uint8Array(aE.fX), k4 = new Uint16Array(fa), iJ = new Uint32Array(fa), aMq = new Uint8Array(fa)
	}, this.rx = function(aBM, aMs) {
		var aMt = this.hd(aBM, aMs),
			aMs = (this.hb(aBM, aMs, 0), bD.gw.gz(aBM, aMt));
		bg.h0(aBM, aMt - aMs, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aLb = function(player, aMs) {
		var aMw, aMs = function(player, aMs) {
			var aC, lq = aMr(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (k4[lq + aC] === aMs) return aC;
			return size[player]
		}(player, aMs);
		aMs !== size[player] && (aMw = iJ[aMr(player) + aMs], this.h1(player, aMs), this.ej(player, aMw, aE.fX))
	}, this.kG = function(player, aMs) {
		for (var lq = aMr(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k4[lq + aC] === aMs) return !0;
		return !1
	}, this.kZ = function(player) {
		return player < aE.kv ? size[player] < aMo : size[player] < aMp
	}, this.gh = function(player) {
		return size[player]
	}, this.gm = function(player, aC) {
		return k4[aMr(player) + aC]
	}, this.gn = function(player, aC) {
		return iJ[aMr(player) + aC]
	}, this.hd = function(player, aMs) {
		for (var lq = aMr(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k4[lq + aC] === aMs) return iJ[lq + aC];
		return 0
	}, this.aLS = function(player) {
		for (var lq = aMr(player), g2 = 0, aC = size[player] - 1; 0 <= aC; aC--) g2 += iJ[lq + aC];
		return g2
	}, this.hb = function(player, aMs, aMw) {
		for (var lq = aMr(player), aC = size[player] - 1; 0 <= aC; aC--) k4[lq + aC] === aMs && (iJ[lq + aC] = aMw)
	}, this.hM = function(player, aC, aMw) {
		iJ[aMr(player) + aC] = Math.max(aMw, 0)
	}, this.hN = function(player, aC) {
		aMq[aMr(player) + aC] = 0
	}, this.go = function(player, aC) {
		return aMq[aMr(player) + aC]
	}, this.ej = function(player, aMw, aMs) {
		ap.ji.kX[player] = ap.ji.kX[aMs] = 8, bD.gw.a6k(aMs) && bg.nT[6 - bD.gw.kI(player)]++;
		for (var lq = aMr(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k4[lq + aC] === aMs) return iJ[lq + aC] += aMw, void(iJ[lq + aC] = iJ[lq + aC] > aE.a6s ? aE.a6s : iJ[lq + aC]);
		k4[lq + size[player]] = aMs, iJ[lq + size[player]] = aMw, aMq[lq + size[player]] = 1, size[player]++, aMs === aE.fK ? aO.a3W(player, 5) : player < aE.kv && player === aE.fK && ag.a9q(aMs)
	}, this.h1 = function(player, eJ) {
		var ft, lq;
		if (0 !== size[player])
			for (lq = aMr(player), size[player]--, ft = eJ; ft < size[player]; ft++) k4[lq + ft] = k4[lq + ft + 1], iJ[lq + ft] = iJ[lq + ft + 1], aMq[lq + ft] = aMq[lq + ft + 1]
	}, this.aLN = function(player) {
		for (var ft, lq, aLY = [], aC = am.lR - 1; 0 <= aC; aC--)
			for (lq = aMr(am.lW[aC]), ft = size[am.lW[aC]] - 1; 0 <= ft; ft--)
				if (k4[lq + ft] === player) {
					aLY.push(am.lW[aC]);
					break
				} return aLY
	}
}

function cd() {
	var aMx;

	function aMz(player) {
		var eI, ka;
		return bD.gw.kI(player) && player < aE.kv ? 0 : (eI = aMx[bO.g1((aE.fX - 1) * ah.hO[player], aE.kf)], bi.ks() < 1920 && (eI = Math.max(bO.g1(100 * (13440 - 6 * bi.ks()), 1920), eI)), ka = af.kb(player), ah.hc[player] > ka && (eI -= bO.g1(2 *
			eI * (ah.hc[player] - ka), ka)), Math.min(Math.max(eI, 0), 700))
	}

	function aNB(oA) {
		for (var hO = ah.hO, lW = am.lW, aC = am.lR - 1; 0 <= aC; aC--) {
			var h8 = lW[aC];
			bD.gw.gz(h8, bO.g1(oA * hO[h8], 32))
		}
	}

	function aN8() {
		var zx = aE.fK;
		bR.g6[0] = ah.hc[zx] - ah.a6p[zx]
	}

	function aNA(eJ) {
		var zx = aE.fK,
			zx = ah.hc[zx] - ah.a6p[zx] - bR.g6[0];
		af.aDS += zx, bg.nT[eJ] += zx
	}
	this.aDS = 0, this.dr = function() {
		for (var fa = aE.fX, aC = (aMx = new Uint16Array(fa), 0); aC < fa; aC++) aMx[aC] = 100 + aMy(bO.g1(25600 * aC, fa - 4), 9)
	}, this.dk = function() {
		(this.aDS = 0) === aE.data.iIncomeType ? this.aEs = aMz : 1 === aE.data.iIncomeType ? this.aEs = function(player) {
			return bO.g1(aE.data.iIncomeValue * aMz(player), 64)
		} : this.aEs = function(player) {
			return bO.g1(aE.data.iIncomeData[player] * aMz(player), 64)
		}
	}, this.ef = function() {
		if (bi.ks() % 10 == 9 && (af.aDS = 0, function() {
				aN8();
				for (var lW = am.lW, hc = ah.hc, aC = am.lR - 1; 0 <= aC; aC--) {
					var h8 = lW[aC],
						aN9 = bO.g1(af.aEs(h8) * hc[h8], 1e4);
					bD.gw.gz(h8, Math.max(aN9, 1))
				}
				aNA(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aN8(), 1 === aE.data.aIncomeType)
						for (var hO = ah.hO, lW = am.lW, oA = aE.data.aIncomeValue, aC = am.lR - 1; 0 <= aC; aC--) {
							var h8 = lW[aC];
							bD.gw.gz(h8, bO.g1(oA * hO[h8], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hO = ah.hO, lW = am.lW, oA = aE.data.aIncomeData, aC = am.lR - 1; 0 <= aC; aC--) {
								var h8 = lW[aC];
								bD.gw.gz(h8, bO.g1(oA[h8] * hO[h8], 128))
							}
						}();
					aNA(18)
				}
			}(), bi.ks() % 100 == 99)) {
			if (aN8(), 0 === aE.data.tIncomeType) aNB(32);
			else if (1 === aE.data.tIncomeType) aNB(aE.data.tIncomeValue);
			else
				for (var hO = ah.hO, lW = am.lW, oA = aE.data.tIncomeData, aC = am.lR - 1; 0 <= aC; aC--) {
					var h8 = lW[aC];
					bD.gw.gz(h8, bO.g1(oA[h8] * hO[h8], 32))
				}
			aNA(8)
		}
	}, this.kb = function(player) {
		return Math.min(100 * ah.hO[player], aE.a7l)
	}, this.qw = function(player, qx) {
		bt.rJ(player, qx, bR.g7[0], 0), bD.gw.gz(qx, bR.g7[0]), bg.rK(player, qx), ag.aN1(player, bR.g7[0] + bR.g7[1]), ag.rL(qx, bR.g7[0]), bD.gw.n5(player)
	}, this.aN2 = function() {
		for (var fa = am.lR, w4 = am.lW, lq = 0, a6q = ah.hc, aC = 0; aC < fa; aC++) lq += a6q[w4[aC]];
		return lq
	}, this.aN3 = function(aN4) {
		for (var h8, fa = am.lR, w4 = am.lW, lq = 0, a6q = ah.hc, fY = bj.fY, aC = 0; aC < fa; aC++) fY[h8 = w4[aC]] === aN4 && (lq += a6q[h8]);
		return lq
	}
}

function cf() {
	var aNF, aNG, aNH, aNI, aNJ, aNK, aNL, aNM, aNN, aNO, aNP, aNQ, aNR, aNS, aNT, aNU, aNV, aNW, aNY, aNZ, aFz, aNa, aNb, aNh, aNi, aNX = null,
		aNd = 0,
		aNe = !1,
		aNf = new Float32Array(4),
		aNg = 0,
		aDx = 112,
		aNj = 0;

	function sS() {
		aNN = Math.floor(+i.im), aNO = Math.floor(.5 * aNN), aNX.width = i.j, aNX.height = i.k, aNY = aNX.getContext("2d", {
			alpha: !0
		}), bD.sP.textAlign(aNY, 1), bD.sP.textBaseline(aNY, 1), aNY.imageSmoothingEnabled = !0
	}

	function aNk() {
		var aC, aNp;
		for (xz.font = bD.sP.uA(1, 100 * aNP), aNp = 80 / Math.floor(xz.measureText(bD.tN.a2b(aE.a6s)).width), xz.font = bD.sP.uA(1, 100), aC = aE.fX - 1; 0 <= aC; aC--) aNM[aC] = 100 / Math.floor(xz.measureText(ah.a1p[aC]).width), aNL[aC] = Math
			.min(aNp, aNM[aC])
	}

	function aNq(aC) {
		return !aNj || (aC = ah.hc[aC]) < 1e6 ? 1 : aC < 1e7 ? aNf[0] : aNf[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aNo(ic) {
		aNe = !1, aNd = bi.ea, aNW = !1, aNV = 1, aNT = aNU = 0, ic.clearRect(0, 0, i.j, i.k);
		for (var aNw, aNx, aC, aNy, fontSize, aNz, ny = jE / io, nz = jF / io, oB = (i.j + jE) / io, oC = (i.k + jF) / io, aO0 = 0 !== ah.nX[aE.fK] && !bD.gw.kI(aE.fK), ft = am.lR - 1; 0 <= ft; ft--) aC = am.lW[ft], (fontSize = Math.floor(aNS * io *
			aNq(aC) * aNL[aC] * aNJ[aC])) < aNR || aNN <= fontSize || aNH[aC] + aNJ[aC] > ny && aNH[aC] < oB && aNI[aC] + aNK[aC] > nz && aNI[aC] < oC && (aNw = Math.floor(i.j * (aNH[aC] + aNJ[aC] / 2 - ny) / (oB - ny)), aNx = Math.floor(i.k * (
			aNI[aC] + aNK[aC] / 2 - nz) / (oC - nz) - .1 * fontSize), aNy = ad.aBs[aC], ic.font = bD.sP.uA(1 === ah.a6g[aC] ? 4 : 1, fontSize), ic.fillStyle = aO1(fontSize, aNy % 2), aNj ? aO2(ic, aC, fontSize, aNw, aNx, aNy) : aO3(aC,
			fontSize, aNw, aNx, ic), aNW = !0, 0 < aFz[aC] ? function(aNw, aNx, fontSize, aC, ic) {
			0 === kg[aC] ? ak.tZ.a2S(aNZ[aC]) ? (function(aNw, aNx, fontSize, player, r8, ic) {
				for (var a0U = aNx, ib = (ic.globalAlpha = aOB(fontSize), aNq(player) * (aNj ? aNg : aNM[player])), a0T = aNw - .5 * fontSize / ib - .9 * fontSize, fu = 0; fu < 2; fu++) ic.fillText(ak.tZ.a2M(r8), a0T, a0U), a0T =
					aNw + .5 * fontSize / ib + .9 * fontSize;
				ic.globalAlpha = 1
			}(aNw, aNx, fontSize, aC, aNZ[aC], ic), aO5(aNw, aNx, fontSize, 0, 0, ic)) : ak.tZ.a2U(aNZ[aC]) ? (aOE(aNw, aNx, fontSize, aNZ[aC], 0, ic), aO5(aNw, aNx, fontSize, 0, 1, ic)) : (aOE(aNw, aNx, fontSize, aNZ[aC], 1, ic), aO5(
				aNw, aNx, fontSize, 1, 0, ic)) : aOE(aNw, aNx, fontSize, aNZ[aC], 0, ic)
		}(aNw, aNx, fontSize, aC, ic) : 0 === kg[aC] && aO5(aNw, aNx, fontSize, 0, 0, ic), aO0 && (0 < aFz[aC + aE.fX] || 0 < aFz[aC + 2 * aE.fX] || 0 < aFz[aC + 3 * aE.fX] || 0 < aFz[aC + 4 * aE.fX]) && function(aNw, aNx, fontSize, aC, ic) {
			var ek, h3 = -1;
			for (ek = 4; 1 <= ek; ek--) 0 < aFz[aC + ek * aE.fX] && h3++;
			for (ek = 1; ek < 5; ek++) 0 < aFz[aC + ek * aE.fX] && (! function(aNw, aNx, fontSize, ek, aC, aO9, eb, ic) {
				var a6B;
				if (1 === ek) {
					aC = aNZ[aC + aE.fX];
					if (!ak.tZ.a2T(aC)) return function(aNw, aNx, fontSize, r8, aO9, ic) {
						ic.globalAlpha = aOB(fontSize);
						aNw -= .534 * aO9 * fontSize, aO9 = aNx + 1.59 * fontSize;
						ic.font = bD.sP.uA(0, .785 * fontSize), ic.fillText(ak.tZ.a2M(r8), aNw, aO9), ic.globalAlpha = 1
					}(aNw, aNx, fontSize, aC, aO9, ic);
					a6B = ak.zw.a1v[aC - 1024 + ak.tZ.a27]
				} else a6B = 2 === ek ? aM.a8c()[4].canvas[+(eb < 255)] : (3 === ek ? aM.a8c()[5] : aM.a8c()[6]).canvas[0];
				aC = ak.zw.a1w, eb = .8 * fontSize / aC, ek = aNw - .5 * eb * aC - .534 * aO9 * fontSize, aNw = aNx + 1.4 * eb * aC;
				ic.setTransform(eb, 0, 0, eb, ek, aNw), ic.globalAlpha = aOB(fontSize), ic.drawImage(a6B, 0, 0), ic.globalAlpha = 1, ic.setTransform(1, 0, 0, 1, 0, 0)
			}(aNw, aNx, fontSize, ek, aC, h3, aFz[aC + ek * aE.fX], ic), h3 -= 2)
		}(aNw, aNx, fontSize, aC, ic), (aNz = aNP * fontSize) < aNR || (ic.font = bD.sP.uA(1, aNz), aNx += Math.floor(.78 * fontSize), aNj ? aO3(aC, aNz, aNw, aNx, ic) : aO2(ic, aC, aNz, aNw, aNx, aNy)))
	}

	function aO3(aC, fontSize, fh, fj, ic) {
		var ___id = aC;
		var showName = aC < aE.kv || !__fx.settings.hideBotNames;
		var eliminationEstimate = __fx.settings.showEstimatedEliminationAttack ?
			__fx.utils.getEstimatedEliminationAttack(___id, ah.hc[___id] - ah.a6p[___id]) :
			"";
		if (showName) ic.fillText(ah.a1p[aC], fh, fj), aC < aE.kv && 2 !== ah.a6g[aC] || (aC = fontSize / aNM[aC], ic.fillRect(fh - .5 * aC, fj + bD.sP.a2N * fontSize, aC, Math.max(1, .1 * fontSize)));
		aNj && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (ic.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			ic.fillText(__fx.utils.getDensity(___id), fh, showName ? fj + fontSize : fj),
			eliminationEstimate && ic.fillText(eliminationEstimate, fh, showName ? fj + 2 * fontSize : fj + fontSize)
		);
	}

	function aO2(ic, aC, fontSize, aNw, aNx, aNy) {
		var eb, a6p = ah.a6p[aC],
			aO8 = bD.tN.a2b(ah.hc[aC] - a6p);

		function drawDensity() {
			var eliminationEstimate;
			!aNj && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (ic.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), ic.fillText(__fx.utils.getDensity(aC), aNw, aNx + fontSize), eliminationEstimate = __fx.settings
				.showEstimatedEliminationAttack ? __fx.utils.getEstimatedEliminationAttack(aC, ah.hc[aC] - a6p) : "") && ic.fillText(eliminationEstimate, aNw, aNx + 2 * fontSize)
		}
		a6p ? (eb = ic.fillStyle, ic.fillStyle = aO1(fontSize, 2 + aNy % 2), ic.fillText(aO8, aNw, aNx), ic.fillStyle = eb) : aNy >> 1 & 1 ? (ic.lineWidth = .05 * fontSize, ic.strokeStyle = aO1(fontSize, aNy % 2), ic.strokeText(aO8, aNw, aNx)) : (1 <
			aNy && (ic.lineWidth = .12 * fontSize, ic.strokeStyle = aO1(fontSize, aNy), ic.strokeText(aO8, aNw, aNx)), ic.fillText(aO8, aNw, aNx)), drawDensity()
	}

	function aO5(aNw, aNx, fontSize, aO9, aOA, ic) {
		var a97 = .95 * fontSize / aNb,
			aNw = aNw - .5 * a97 * aNa + .8 * aO9 * fontSize,
			aO9 = aNx - 1.76 * a97 * aNb - (.35 - bD.sP.a2N + .7) * aOA * fontSize;
		ic.setTransform(a97, 0, 0, a97, aNw, aO9), ic.globalAlpha = aOB(fontSize), ic.drawImage(ac.get(4), 0, 0), ic.globalAlpha = 1, ic.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aOE(aNw, aNx, fontSize, r8, aO9, ic) {
		var iW, a0T, a97;
		ic.globalAlpha = aOB(fontSize), ak.tZ.a2T(r8) ? (iW = ak.zw.a1w, ic.setTransform(a97 = 1.1 * fontSize / iW, 0, 0, a97, a0T = aNw - .5 * a97 * iW - .8 * aO9 * fontSize, a97 = aNx - 1.55 * a97 * iW), ic.drawImage(ak.zw.a1v[r8 - 1024 + ak.tZ
			.a27], 0, 0), ic.setTransform(1, 0, 0, 1, 0, 0)) : (a0T = aNw - .8 * aO9 * fontSize, a97 = aNx - (.35 - bD.sP.a2N + 1) * fontSize, ic.fillText(ak.tZ.a2M(r8), a0T, a97)), ic.globalAlpha = 1
	}

	function aO1(fontSize, aNy) {
		return aNO <= fontSize && fontSize < aNN ? bj.aOG[aNy] + aOB(fontSize).toFixed(3) + ")" : bj.aOH[aNy]
	}

	function aOB(fontSize) {
		return aNO <= fontSize && fontSize < aNN ? 1 - (fontSize - aNO) / (aNN - aNO) : 1
	}

	function aOQ(ib, j) {
		return 1 + Math.floor(aNQ * ib * j)
	}

	function aON(aC) {
		for (var left = aNH[aC], ft = aNH[aC] - ah.jT[aC] - 1; 0 <= ft; ft--)
			if (!aOS(aC, --left, aNI[aC], aNK[aC])) {
				left++;
				break
			} var right = aNH[aC];
		for (ft = ah.jU[aC] - aNH[aC] - aNJ[aC]; 0 <= ft; ft--)
			if (!aOS(aC, ++right + aNJ[aC] - 1, aNI[aC], aNK[aC])) {
				right--;
				break
			} var fh = Math.floor((left + right) / 2),
			top = aNI[aC];
		for (ft = aNI[aC] - ah.jV[aC] - 1; 0 <= ft; ft--)
			if (!aOT(aC, fh, --top, aNJ[aC])) {
				top++;
				break
			} var bottom = aNI[aC];
		for (ft = ah.jW[aC] - aNI[aC] - aNK[aC]; 0 <= ft; ft--)
			if (!aOT(aC, fh, ++bottom + aNK[aC] - 1, aNJ[aC])) {
				bottom--;
				break
			} var fj = Math.floor((top + bottom) / 2);
		aOK(aC, fh, fj, aNJ[aC], aNK[aC]) && (aNH[aC] = fh, aNI[aC] = fj)
	}

	function aOK(player, fh, fj, j, k) {
		fd = Math.floor(.2 * j);
		for (var fd, ek = fh + j - 1; fh <= ek; ek--)
			if (!aOS(player, ek, fj, k)) return;
		for (ek = fj + k - 1 - (fd = (fd = Math.floor(.25 * k)) < 1 ? 1 : fd); fj + fd <= ek; ek--)
			if (!aOT(player, fh, ek, j)) return;
		return 1
	}

	function aOS(player, fh, fj, k) {
		return ad.a1L(player, 4 * (fj * bV.fl + fh)) && ad.a1L(player, 4 * ((fj + k - 1) * bV.fl + fh))
	}

	function aOT(player, fh, fj, j) {
		return ad.a1L(player, 4 * (fj * bV.fl + fh)) && ad.a1L(player, 4 * (fj * bV.fl + fh + j - 1))
	}
	this.dk = function() {
		if (aNj = bm.buffer.data[7].value || 8 === aE.lD, aNW = !1, aNS = .88, aNP = .5, aNQ = 1.8, aNR = 12 - 3 * bm.buffer.data[9].value, aNG = aNF = 0, aNH = new Uint16Array(aE.fX), aNI = new Uint16Array(aE.fX), aNJ = new Uint16Array(aE.fX),
			aNK = new Uint16Array(aE.fX), aNL = new Float32Array(aE.fX), aNM = new Float32Array(aE.fX), aNZ = new Uint16Array(2 * aE.fX), aFz = new Uint8Array(5 * aE.fX), aNh = new Uint8Array(aE.fX), aNi = new Uint8Array(aE.fX), aNX = aNX ||
			document.createElement("canvas"), sS(), aNU = aNT = 0, aNV = 1, aNj) {
			var aC, aNp;
			for (aNk(), xz.font = bD.sP.uA(1, 100), aNp = 100 / Math.floor(xz.measureText("900 000").width), aC = aE.fX - 1; 0 <= aC; aC--) aNL[aC] = Math.min(aNp, 2 * aNM[aC]);
			aNg = aNp, aNf[0] = 100 / (aNp * Math.floor(xz.measureText("5 000 000").width)), aNf[1] = 100 / (aNp * Math.floor(xz.measureText("50 000 000").width)), aNf[2] = 100 / (aNp * Math.floor(xz.measureText("500 000 000").width)), aNf[3] =
				100 / (aNp * Math.floor(xz.measureText("1 000 000 000").width))
		} else aNk();
		! function() {
			var aC;
			for (aC = aE.fX - 1; 0 <= aC; aC--) ah.hO[aC] < 12 ? (aNH[aC] = ah.jT[aC] + 1, aNI[aC] = ah.jV[aC] + 1, aNJ[aC] = 1, aNK[aC] = 1) : (aNH[aC] = ah.jT[aC], aNI[aC] = ah.jV[aC] + 1, aNJ[aC] = 4, aNK[aC] = 2);
			if (aE.hy)
				for (aC = 0; aC < aE.kv; aC++) aNJ[aC] = 0;
			aNa = ac.get(4).width, aNb = ac.get(4).height
		}()
	}, this.aN1 = function(h8, a8L) {
		a8L > 18 * ah.hO[h8] ? (aNi[h8] = 6, ad.aBs[h8] = 2 + ad.aBs[h8] % 2) : (aNh[h8] = 4, (ad.aBs[h8] < 2 || 3 < ad.aBs[h8]) && (ad.aBs[h8] = 6 + ad.aBs[h8] % 2))
	}, this.rL = function(h8, a8L) {
		a8L > 6 * ah.hO[h8] ? (aNi[h8] = 6, ad.aBs[h8] = 4 + ad.aBs[h8] % 2) : (aNh[h8] = 4, (ad.aBs[h8] < 4 || 5 < ad.aBs[h8]) && (ad.aBs[h8] = 8 + ad.aBs[h8] % 2))
	}, this.resize = function() {
		sS(), aNo(aNY)
	}, this.a7h = function() {
		for (var aC = 0; aC < aE.kv; aC++) ah.jU[aC] - ah.jT[aC] != 3 || ah.jW[aC] - ah.jV[aC] != 3 ? (aNH[aC] = ah.jT[aC] + (ah.jU[aC] !== ah.jT[aC] ? 1 : 0), aNI[aC] = ah.jV[aC], aNJ[aC] = 1, aNK[aC] = 1) : (aNH[aC] = ah.jT[aC], aNI[aC] = ah
			.jV[aC] + 1, aNJ[aC] = 4, aNK[aC] = 2)
	}, this.ry = function(player, eJ, aNr) {
		! function(player, eJ, aNr) {
			player += eJ * aE.fX;
			0 === eJ ? aNZ[player] === aNr && 0 < aFz[player] ? aFz[player] = 0 : (aNZ[player] = aNr, aFz[player] = ak.tZ.a2S(aNr) ? 255 : 64) : 1 === eJ ? (aFz[player] = 64, aNZ[player] = aNr) : aFz[player] = aNr
		}(player, eJ, aNr), 2 === aE.a3I && this.nJ(!0)
	}, this.xy = function() {
		aNW && (1 !== aNV ? (xz.imageSmoothingEnabled = !0, xz.setTransform(aNV, 0, 0, aNV, 0, 0), xz.drawImage(aNX, -aNT / aNV, -aNU / aNV), xz.setTransform(1, 0, 0, 1, 0, 0), xz.imageSmoothingEnabled = !1) : xz.drawImage(aNX, -aNT, -aNU))
	}, this.aCf = function(ix, j0) {
		aNT += ix, aNU += j0
	}, this.a4s = function(ix, j0) {
		ag.aCf(ix, j0)
	}, this.zoom = function(a5k, mA, mB) {
		aNV *= a5k, aNT = (aNT + mA) * a5k - mA, aNU = (aNU + mB) * a5k - mB
	}, this.aLO = function(player) {
		var jT = ah.jT[player],
			jU = ah.jU[player],
			jV = ah.jV[player],
			jW = ah.jW[player],
			j8 = bP.hq(0),
			j9 = bP.hs(0),
			jA = bP.hq(i.j),
			jB = bP.hs(i.k);
		jT < jA && j8 < jU && jV < jB && j9 < jW && (aNJ[player] = 0, aNe = !0)
	}, this.nJ = function(by) {
		return !(!aNe && !by && bi.ea < aNd + (1 === aNV && 0 === aNT && 0 === aNU && (aE.a8A() || aE.hy || 2 === aE.a3I) ? 1e3 : aDx) || (aNo(aNY), 0))
	}, this.aNu = function(aC) {
		return aNq(aC) * aNL[aC]
	}, this.aNv = function(player) {
		return aNL[player]
	}, this.ef = function() {
		bi.ks() % 10 == 9 && (aNe = aNe || aE.a8C() && !aE.a8A()), !aE.a8A() && 4 <= ++aNG && function() {
			var aC, ft, fu;
			for (aNG = 0, fu = 4; 1 <= fu; fu--)
				for (ft = am.lR - 1; 0 <= ft; ft--) aC = am.lW[ft] + fu * aE.fX, 0 < aFz[aC] && aFz[aC] < 255 && aFz[aC]--;
			if (2 !== aE.a3I)
				for (ft = am.lR - 1; 0 <= ft; ft--) aC = am.lW[ft], 0 < aFz[aC] && aFz[aC] < 255 && aFz[aC]--
		}();
		var aC, ft, fa = Math.floor(.1 * am.lR);
		for (fa = (fa = fa < 8 ? 8 : fa) > am.lR ? am.lR : fa, aC = aNF + fa - 1; aNF <= aC; aC--) ft = aC % am.lR, ! function(aC) {
			var ib = aNq(aC) * aNL[aC];
			0 < aNJ[aC] && aOK(aC, aNH[aC], aNI[aC], aNJ[aC], aNK[aC]) ? ! function(aC) {
				for (var fh, fj, j, k, fE = !1, fu = 0; fu < 8; fu++) {
					if (j = aNJ[aC] + 2, k = aNK[aC] + 2, j > ah.jU[aC] - ah.jT[aC] + 1 || k > ah.jW[aC] - ah.jV[aC] + 1) return fE;
					if (fh = aNH[aC] - 1, fj = aNI[aC] - 1, !aOK(aC, fh, fj, j, k)) return fE;
					aNH[aC] = fh, aNI[aC] = fj, aNJ[aC] = j, aNK[aC] = k, fE = !0
				}
				return fE
			}(aC) && function(aC, ib) {
				for (var fh, fj, j, k, fE = !1, aG7 = aNJ[aC], oA = 1 + Math.floor(.02 * aG7), fu = 1; fu < 5; fu++) {
					if ((j = aG7 + fu * oA) > ah.jU[aC] - ah.jT[aC] + 1) return fE;
					if ((k = aOQ(ib, j)) > ah.jW[aC] - ah.jV[aC] + 1) return fE;
					fh = ah.jT[aC] + Math.floor(Math.random() * (ah.jU[aC] - ah.jT[aC] + 2 - j)), fj = ah.jV[aC] + Math.floor(Math.random() * (ah.jW[aC] - ah.jV[aC] + 2 - k)), aOK(aC, fh, fj, j, k) && (aNH[aC] = fh, aNI[aC] = fj, aNJ[
						aC] = j, aNK[aC] = k, fE = !0)
				}
				return fE
			}(aC, ib) && aON(aC) : ! function(aC, ib) {
				var k, fh = aNH[aC] + 1,
					fj = aNI[aC] + 1,
					j = aNJ[aC] - 2;
				for (;;) {
					if (j < 1) {
						aNJ[aC] = 0;
						break
					}
					if (k = aOQ(ib, j), aOK(aC, fh, fj, j, k)) return aNH[aC] = fh, aNI[aC] = fj, aNJ[aC] = j, aNK[aC] = k, 1;
					fh++, fj++, j -= 2
				}
				return
			}(aC, ib) ? function(aC, ib) {
				var fh, fj, j, k, fu, oG, kB = ah.jU[aC] - ah.jT[aC] + 1,
					aOR = Math.floor(.02 * kB);
				for (oG = -6 * (aOR = aOR < 1 ? 1 : aOR), fu = kB; oG <= fu; fu -= aOR)
					if (k = aOQ(ib, j = 0 < fu ? fu : 1), fh = ah.jT[aC] + Math.floor(Math.random() * (ah.jU[aC] - ah.jT[aC] + 2 - j)), fj = ah.jV[aC] + Math.floor(Math.random() * (ah.jW[aC] - ah.jV[aC] + 2 - k)), aOK(aC, fh, fj, j, k))
						return aNH[aC] = fh, aNI[aC] = fj, aNJ[aC] = j, aNK[aC] = k
			}(aC, ib) : aON(aC)
		}(am.lW[ft]);
		aNF = (aNF += fa) % am.lR
	}, this.nD = function() {
		var aC, h8, wp, wq;
		if (bi.ks() % 4 == 1)
			for (aC = am.lR - 1; 0 <= aC; aC--) h8 = am.lW[aC], ad.aBs[h8] < 2 || ((wp = Math.max(aNh[h8] - 1, 0)) === (wq = Math.max(aNi[h8] - 1, 0)) ? 0 === wp && (ad.aBs[h8] %= 2) : 0 === wq && ad.aBs[h8] < 6 && (ad.aBs[h8] += 4), aNh[h8] =
				wp, aNi[h8] = wq)
	}, this.a9q = function(player) {
		var aC = player + 2 * aE.fX,
			eb = aFz[aC];
		return 0 < eb && (aO.a3Q(50, player), aFz[aC] = 0, 255 === eb)
	}, this.a8r = function(player) {
		return 255 === aFz[player + 2 * aE.fX]
	}
}

function ch() {
	var aOU, aOV, aOW;
	this.dk = function() {
		aOU =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aOV =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aOW = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aA6 = ["K ", " Y", "E ", " Z", " z", " s", "S "], aHE = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aOU.length - 1; 0 <= aC; aC--)
			for (var ft = aA6.length - 1; 0 <= ft; ft--) aOU[aC] = aOU[aC].replace(aA6[ft], aHE[ft]);
		if (__fx.settings.realisticNames) aOU = realisticNames;
	}, this.a7x = function() {
		var fa = aE.kv,
			a1p = ah.a1p,
			a42 = ah.a42,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fa)
			for (var aC = 0; aC < fa; aC++) a1p[aC] = a42[aC] = "Player " + az.kC(1e3);
		else
			for (aC = 0; aC < fa; aC++) a1p[aC] = a42[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.lD) {
			for (var eI = az.random(), aOc = aOW, aOd = aOV, iJ = aF.iJ, fa = aOc.length, lq = aE.data.teamPlayerCount[7], a1p = ah.a1p, a42 = ah.a42, aC = lq - 1; aC >= aE.kv; aC--) a1p[aC] = a42[aC] = aOc[(aC + eI) % fa];
			for (fa = aOd.length - 1, aC = lq; aC < aE.fX; aC++) a1p[aC] = a42[aC] = aOd[iJ[aC] ? fa : aC % fa]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fa = aE.fX, a1p = ah.a1p, a42 = ah.a42, playerNamesData = aE.data.playerNamesData, aC = aE.kv; aC < fa; aC++) a1p[aC] = a42[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var a1p = ah.a1p, a42 = ah.a42, aC = aE.kv; aC < aE.fX; aC++) a1p[aC] = a42[aC] = "Bot " + az.kC(1e3)
		} : function() {
			for (var aOe = aOU, fa = aOe.length, eI = az.random(), a1p = ah.a1p, a42 = ah.a42, aC = aE.kv; aC < aE.fX; aC++) a1p[aC] = a42[aC] = aOe[(aC + eI) % fa]
		})()
	}
}

function d0() {
	this.aOf = [], this.aOg = [], this.dk = function() {
		this.aOf = [], this.aOg = []
	}, this.ef = function() {
		0 <= this.aOf.length && this.aOh(this.aOf), 0 <= this.aOg.length && this.aOh(this.aOg)
	}, this.aOh = function(h) {
		for (var fu = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].ea--, h[aC].ea <= 0) {
				fu = aC;
				break
			} for (aC = fu; 0 <= aC; aC--) h.shift()
	}, this.a8k = function(id, w4, aOi) {
		return this.fv(this.aOf, id, w4, aOi)
	}, this.aOj = function(id, w4, aOi) {
		return this.fv(this.aOg, id, w4, aOi)
	}, this.fv = function(h, id, w4, aOi) {
		return ! function(h, id, w4) {
			var aC, iS;
			for (aC = w4.length - 1; 0 <= aC; aC--)
				for (iS = h.length - 1; 0 <= iS; iS--)
					if (h[iS].player === w4[aC] && id === h[iS].id) return 1;
			return
		}(h, id, w4) && (aOi && function(h, id, w4) {
			var aC;
			for (aC = w4.length - 1; 0 <= aC; aC--) h.push({
				player: w4[aC],
				id: id,
				ea: 384
			})
		}(h, id, w4), !0)
	}
}

function cg() {
	this.a42 = new Array(aE.fX), this.a1p = new Array(aE.fX), this.a6g = new Uint8Array(aE.fX), this.nX = new Uint8Array(aE.fX), this.jT = new Uint16Array(aE.fX), this.jV = new Uint16Array(aE.fX), this.jU = new Uint16Array(aE.fX), this.jW =
		new Uint16Array(aE.fX), this.hO = new Uint32Array(aE.fX), this.a0v = new Uint32Array(aE.fX), this.hc = new Uint32Array(aE.fX), this.h2 = null, this.hG = null, this.hH = null, this.fz = null, this.ro = new Uint16Array(aE.fX), this.jy =
		new Uint16Array(aE.fX), this.jz = new Uint16Array(aE.fX), this.a3x = new Uint16Array(aE.fX), this.a3v = new Uint8Array(aE.fX), this.a6p = new Uint16Array(aE.fX), this.dk = function() {
			this.a42.fill(""), this.a1p.fill(""), this.a6g.fill(0), this.nX.fill(0), this.jT.fill(0), this.jV.fill(0), this.jU.fill(0), this.jW.fill(0), this.hO.fill(0), this.a0v.fill(0), this.hc.fill(0), this.h2 = new Array(aE.fX), this.hG =
				new Array(aE.fX), this.hH = new Array(aE.fX), this.fz = new Array(aE.fX), this.ro.fill(0), this.jy.fill(0), this.jz.fill(0), this.a3x.fill(0), this.a3v.fill(0), this.a6p.fill(0)
		}
}

function cy() {
	this.aGa = function(player) {
		aH.nW(player), aE.a3K++, ah.a6g[player] = 2, ah.a3x[player] = bl.a4C.aLX(), player === aE.fK && (aY.show(!1, !1), aX.aEe(), bU.a34.a3t()), ag.a9q(player)
	}
}

function cZ() {
	this.lW = null, this.lR = 0, this.a81 = function() {
		for (this.lR = 0, aC = aE.fX - 1; 0 <= aC; aC--) 0 !== ah.nX[aC] && this.lR++;
		this.lW = new Uint16Array(this.lR);
		for (var fa = 0, aC = 0; aC < aE.fX; aC++) 0 !== ah.nX[aC] && (this.lW[fa++] = aC)
	}, this.nC = function() {
		for (var hO = ah.hO, a0v = ah.a0v, a3v = ah.a3v, lW = am.lW, aC = am.lR - 1; 0 <= aC; aC--) {
			var h8 = lW[aC],
				eb = hO[h8],
				lq = a0v[h8];
			eb <= bO.g1(lq, 4) ? al.dt(h8) : lq <= eb ? 250 <= (a0v[h8] = eb) && (a3v[h8] = 1) : a0v[h8] = lq - Math.max(1, bO.g1(lq - eb, 1e3))
		}
		this.aOn()
	}, this.aOn = function() {
		for (var nX = ah.nX, lp = this.lW, aFM = this.lR, aC = aFM - 1; 0 <= aC; aC--) 0 === nX[lp[aC]] && (lp[aC] = lp[--aFM]);
		this.lR = aFM
	}
}

function ca() {
	var aOo = new Uint16Array(aE.fX),
		aOp = 0;

	function aOt(a9w, aOr) {
		var ek = bi.ks();
		return 3213 <= ek ? 4 + bO.g1(100 * aOr, af.kb(a9w)) : (a9w = 1 + bO.g1(aE.kf, 300), ek < 357 ? 2 + bO.g1(100 * aOr, a9w) : ek < 714 ? 2 + bO.g1(100 * aOr, 4 * a9w) : ek < 1071 ? 2 + bO.g1(100 * aOr, 10 * a9w) : ek < 2142 ? 2 + bO.g1(100 *
			aOr, 30 * a9w) : 2 + bO.g1(100 * aOr, 100 * a9w))
	}

	function aOs(a9w) {
		return aE.lF || 4284 <= bi.ks() || bD.gw.kI(a9w)
	}
	this.dk = function() {
		aOo.fill(0), aOp = 15
	}, this.iE = function(qx) {
		var player = aE.fK;
		return !!bD.gw.rq(player, qx) && !(!bD.gw.rG(player, bD.gw.jC(player, aS.i4()), qx) || (player = qx, qx = bR.g7[0], !aOs(player) && aOo[player] + aOt(player, qx) > aOp))
	}, this.ej = function(a9w, aOr) {
		if (!aOs(a9w)) {
			aOr = aOt(a9w, aOr);
			if (aOo[a9w] + aOr > aOp) return !1;
			aOo[a9w] += aOr
		}
		return !0
	}, this.ef = function() {
		bi.ks() % 100 == 99 && (bi.ks() < 1071 ? aOp += 4 : bi.ks() < 2142 ? aOp += 6 : bi.ks() < 3213 ? aOp += 8 : aOp += 10)
	}
}

function ci() {
	var aOu;
	this.lM = null, this.lL = 0, this.dk = function() {
		aOu = [], 9 === aE.lD && this.aOv()
	}, this.aOv = function() {
		this.lM = [0, 0, 0, 0, 0, 0];
		for (var aOw = [254, 227, 167, 149, 102, this.lL = 0, 0, 0], aOx = [0, 8, 24, 30, 46, 80, 256, 333], aOy = [0, 0, 3, 9, 17, 25, 150, 179], k = aE.kv, aC = 1; aC < aOw.length; aC++)
			if (k <= aOx[aC]) {
				this.lL = aOw[aC - 1] - bO.g1((k - aOx[aC - 1]) * (aOw[aC - 1] - aOw[aC]), aOx[aC] - aOx[aC - 1]), this.lM[5] = aOy[aC - 1] - bO.g1((k - aOx[aC - 1]) * (aOy[aC - 1] - aOy[aC]), aOx[aC] - aOx[aC - 1]), this.lM[0] = aE.fX - k - this
					.lL - this.lM[5];
				break
			} aE.lH = aE.fX - aE.kv, aE.data.numberTeams = (0 < aE.kv) + (0 < aE.lH), aE.data.playerCount = aE.a0R = aE.kv + aE.lH, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.kv + this.lL, aE.lH - this.lL]), aE.a7q.a7v()
	}, this.aLe = function(player) {
		aOu.push({
			player: player,
			h3: 14 + az.kC(20)
		})
	}, this.ef = function() {
		if (9 === aE.lD)
			for (var aC = aOu.length - 1; 0 <= aC; aC--) --aOu[aC].h3 <= 0 && (ag.ry(aOu[aC].player, 0, ak.tZ.a2A + ak.tZ.a2O), aOu.splice(aC, 1))
	}
}

function dH() {
	this.aP0 = 25, this.aP1 = 13, this.aLq = 4096, this.fl = 0, this.fm = 0, this.zt = null, this.zp = null, this.zq = null, this.zu = null, this.fG = 0, this.mapSeed = 0, this.zr = !1, this.zs = new aP2, this.wJ = new aP3, this.aAD = new aP4;
	var aP5 = {
		aP6: function() {},
		dk: function() {}
	};

	function aPF() {
		return {
			fl: bV.fl,
			fm: bV.fm,
			zt: bV.zt,
			zp: bV.zp,
			zq: bV.zq,
			zu: bV.zu,
			fG: bV.fG,
			mapSeed: bV.mapSeed,
			zr: bV.zr
		}
	}

	function aPG(g2) {
		bV.fl = g2.fl, bV.fm = g2.fm, bV.zt = g2.zt, bV.zp = g2.zp, bV.zq = g2.zq, bV.zu = g2.zu, bV.fG = g2.fG, bV.mapSeed = g2.mapSeed, bV.zr = g2.zr
	}

	function aP8(aC) {
		return !(1 === aC || !bV.aHM(aC) || aC === bV.aPK())
	}
	this.dk = function() {
		this.wJ.dk()
	}, this.a8 = function(map, aP7) {
		((map %= this.aP0) !== this.fG || aP8(this.fG) && aP7 !== this.mapSeed) && (this.zr = !1, this.zs.aP6(), az.a7w(map), this.fG = map, this.mapSeed = aP7, aP8(map) && (bV.wJ.zk[map].aP9 = aP7), this.aHM(this.fG) ? (map = bV.wJ.zk[this.fG],
			this.fl = map.j, this.fm = map.k, az.a7w(map.aP9), ar.a8([this.fl, this.fm, map.nc, map.nZ]), aPB(), aq.aPC(), ar.aPD()) : aPA())
	}, this.aPE = function(map, aP7) {
		var gJ = aPF(),
			map = (this.a8(map, aP7), this.zs.aP6(), aPF());
		return aPG(gJ), map
	}, this.aIE = function(map, aP7) {
		var gJ = aPF(),
			aP9 = az.aPH(),
			aPI = this.wJ.zk[map].aP9,
			aPJ = this.zs,
			aP7 = (this.zs = aP5, this.a8(map, aP7), this.zt);
		return this.zs = aPJ, this.wJ.zk[map].aP9 = aPI, az.a7w(aP9), aPG(gJ), aP7
	}, this.a8H = function(canvas) {
		canvas && this.zt !== canvas && (this.fl = canvas.width, this.fm = canvas.height, this.zt = canvas, this.zp = this.zt.getContext("2d", {
			alpha: !1
		}), this.iZ = this.zp.getImageData(0, 0, this.fl, this.fm), this.zu = this.iZ.data, this.fG = this.aPK(), this.mapSeed = 0, bV.wJ.zk[this.fG].name = aE.data.mapName)
	}, this.fF = function(aC) {
		return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aPK()
	}, this.aPL = function(aC) {
		return 2 === aC || 7 === aC || 9 === aC || 20 === aC
	}, this.aPM = function(aC) {
		return 1 === aC
	}, this.aPK = function() {
		return this.aP0
	}, this.aHM = function(aC) {
		return void 0 === this.wJ.zk[aC].aPN
	}, this.aI9 = aP8, this.a8G = function(sH) {
		return 0 === sH.mapType ? sH.mapProceduralIndex < 10 ? sH.mapProceduralIndex : 10 + sH.mapProceduralIndex : 1 === sH.mapType ? 10 <= sH.mapRealisticIndex ? 22 + sH.mapRealisticIndex - 10 : sH.mapRealisticIndex + 10 : void 0
	}, this.aHN = function(sH, aPO) {
		0 === sH.mapType ? sH.mapProceduralIndex = aPO < 10 ? aPO : aPO - 10 : 1 === sH.mapType && (sH.mapRealisticIndex = aPO - (22 <= aPO ? 12 : 10))
	}
}

function aP2() {
	function aPX() {
		bV.zs.ef()
	}

	function aPc(h8, aPb) {
		0 < aPb && (bV.zu[h8] += aPb, bV.zu[h8 + 1] += aPb, bV.zu[h8 + 2] += aPb)
	}

	function ir(h8) {
		return bV.zu[h8 + 2] > bV.zu[h8] && bV.zu[h8 + 2] > bV.zu[h8 + 1]
	}
	this.aCr = -1, this.a4P = 0, this.aPP = 0, this.aPQ = 8, this.aPR = 32, this.aPS = 8, this.aPT = 32, this.aPU = [0, 0], this.aBs = [0, 0, 0, 0], this.jN = null, this.aPV = !0, this.aPW = !1, this.aP6 = function() {
		-1 !== this.aCr && clearTimeout(this.aCr), this.aCr = -1, this.jN = null, ar.aPD()
	}, this.dk = function() {
		7 === ab.a4V() || this.aPW || (this.aPV = !0, this.a4P = 0, this.aPP = 1, this.aPU = [bV.wJ.zk[bV.fG].a0B[0], bV.wJ.zk[bV.fG].a0C[0]], this.aBs = [bV.wJ.zk[bV.fG].aPN[3], bV.wJ.zk[bV.fG].aPN[4], bV.wJ.zk[bV.fG].aPN[5], bV.wJ.zk[bV.fG]
			.aPN[6]
		], this.aPQ = bV.wJ.zk[bV.fG].aPN[7], this.aPR = bV.wJ.zk[bV.fG].aPN[8], this.aPS = bV.wJ.zk[bV.fG].aPN[9], this.aPT = bV.wJ.zk[bV.fG].aPN[10], this.aPV ? this.aCr = setTimeout(aPX, 16) : this.ef())
	}, this.ef = function() {
		if (8 === ab.a4V() && aI.nq()) this.aCr = setTimeout(aPX, 16);
		else {
			if (0 === this.a4P) {
				var aP9 = az.aPH();
				if (az.a7w(bV.wJ.zk[bV.fG].aPN[2]), ar.a8([bV.fl, bV.fm, bV.wJ.zk[bV.fG].aPN[0], bV.wJ.zk[bV.fG].aPN[1]]), az.a7w(aP9), this.jN = ar.aPY(), this.a4P++, this.aPV) return void(this.aCr = setTimeout(aPX, 16))
			}
			for (var h8, fM, aP9 = this.aPV ? 10 : 1e6, aP9 = bV.fm - this.aPP - 1 < aP9 ? bV.fm - this.aPP - 1 : aP9, a18 = this.aPP + aP9, fj = this.aPP; fj < a18; fj++)
				for (var fh = 1; fh < bV.fl - 1; fh++) ir(h8 = 4 * (fM = fh + fj * bV.fl)) ? this.aPZ(h8, fM, 1) : (this.aPZ(h8, fM, 0), function(fh, fj, h8) {
					return 1 < fh && ir(h8 - 4) || fh < bV.fl - 2 && ir(h8 + 4) || 1 < fj && ir(h8 - 4 * bV.fl) || fj < bV.fm - 2 && ir(h8 + 4 * bV.fl)
				}(fh, fj, h8) && this.aPa(fh, fj));
			this.aPP = a18, this.aPP >= bV.fm - 1 ? (bV.zp.putImageData(bV.zq, 0, 0, 1, 1, bV.fl - 2, bV.fm - 2), bi.ds = !0, this.aP6()) : this.aPV && (this.aCr = setTimeout(aPX, 16))
		}
	}, this.aPZ = function(h8, fM, eJ) {
		aPc(h8, Math.floor(this.aPU[eJ] + this.aBs[eJ] * this.jN[fM] / 1e4) - bV.zu[h8])
	}, this.aPd = function(h8, eI, aPe, eJ, aBs) {
		aPc(h8, Math.floor(this.aPU[eJ] + (1 - eI / aPe) * aBs) - bV.zu[h8])
	}, this.aPa = function(mA, mB) {
		for (var h8, eI, aPe, aCh = mA - this.aPR, aPf = mB - this.aPR, a19 = mA + this.aPR, a18 = mB + this.aPR, aCh = aCh < 1 ? 1 : aCh, a19 = a19 > bV.fl - 2 ? bV.fl - 2 : a19, a18 = a18 > bV.fm - 2 ? bV.fm - 2 : a18, fj = aPf < 1 ? 1 :
			aPf; fj <= a18; fj++)
			for (var fh = aCh; fh <= a19; fh++) ir(h8 = 4 * (fh + fj * bV.fl)) ? (aPe = this.aPQ + (this.aPR - this.aPQ) * this.jN[fh + bV.fl * fj] / 1e4, Math.abs(mA - fh) > aPe || Math.abs(mB - fj) > aPe || aPe <= (eI = Math.sqrt((mA - fh) * (
				mA - fh) + (mB - fj) * (mB - fj))) || this.aPd(h8, eI, aPe, 1, this.aBs[3])) : (aPe = this.aPS + (this.aPT - this.aPS) * this.jN[fh + bV.fl * fj] / 1e4, Math.abs(mA - fh) > aPe || Math.abs(mB - fj) > aPe || aPe <= (eI = Math
				.sqrt((mA - fh) * (mA - fh) + (mB - fj) * (mB - fj))) || this.aPd(h8, eI, aPe, 0, this.aBs[2]))
	}
}

function aPB() {
	var oP = aPg(bV.fG);
	oP && aPh(oP[0], oP[1], oP[2], oP[3], oP[4])
}

function aPg(fG) {
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

function aPh(aPi, aPj, aPk, aPl, aPm) {
	for (var fh, fj, aMC, aMD, a5k, aPp, iw = aPi.length - 1, aPn = bV.fl + bV.fm, fa = (aPn *= aPn, aPk.length), aPo = Array(fa), aC = fa - 1; 0 <= aC; aC--) aPo[aC] = aPk[aC] * aPk[aC];
	var aPq = new Array(fa),
		aFw = new Array(fa),
		aPr = new Array(fa),
		g2 = ar.aPY();
	if (void 0 === aPm)
		for (aPm = new Array(fa), aC = fa - 1; 0 <= aC; aC--) aPm[aC] = 0;
	for (aC = 1; aC < fa; aC++) aPq[aC] = aPo[aC] - aPo[aC - 1], aFw[aC] = aPl[aC] - aPl[aC - 1], aPr[aC] = aPm[aC] - aPm[aC - 1];
	for (fh = bV.fl - 1; 0 <= fh; fh--)
		for (fj = bV.fm - 1; 0 <= fj; fj--) {
			for (aMC = aPn, aC = iw; 0 <= aC; aC--) aMC = (aMD = (fh - aPi[aC]) * (fh - aPi[aC]) + (fj - aPj[aC]) * (fj - aPj[aC])) < aMC ? aMD : aMC;
			for (a5k = aPl[fa - 1], aPp = aPm[fa - 1], aC = 1; aC < fa; aC++)
				if (aMC < aPo[aC]) {
					a5k = aPl[aC - 1] + aKz((aMC - aPo[aC - 1]) * aFw[aC], aPq[aC]), aPp = aPm[aC - 1] + aKz((aMC - aPo[aC - 1]) * aPr[aC], aPq[aC]);
					break
				} aPs(bV.fl * fj + fh, a5k, aPp, g2)
		}
}

function aPs(eJ, a5k, aPp, g2) {
	a5k < 500 ? g2[eJ] = bO.g1(g2[eJ] * a5k * 2, 1e3) : 500 < a5k && (g2[eJ] += bO.g1(2 * (1e4 - g2[eJ]) * (a5k - 500), 1e3)), g2[eJ] += bO.g1(aPp * (10 * a5k - g2[eJ]), 1e3)
}

function ck() {
	var aPt;

	function aQ3(a6B, ib, fh, fj, globalAlpha) {
		bV.zp.save(), bV.zp.globalAlpha = globalAlpha, bV.zp.imageSmoothingEnabled = !1, bV.zp.scale(ib, ib), bV.zp.drawImage(a6B, Math.floor(fh * (bV.fl / ib - a6B.width)), Math.floor(fj * (bV.fm / ib - a6B.height))), bV.zp.restore()
	}
	this.aAA = 0, this.aAB = 0, this.aAC = 0, this.aAD = 0, this.dk = function() {
		(aPt = new Array(bV.aP0))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eI: [220, 250, 255, 220],
			uy: [190, 220, 0, 0],
			fu: [170, 200, 0, 0]
		}, aPt[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eI: [25, 0, 100, 0, 25],
			uy: [25, 0, 0, 0, 25],
			fu: [25, 0, 0, 0, 25]
		}, aPt[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eI: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			uy: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fu: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aPt[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eI: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			uy: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fu: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aPt[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eI: [10, 10, 20, 10, 10, 170, 212],
			uy: [20, 20, 60, 100, 100, 110, 170],
			fu: [70, 70, 160, 30, 30, 60, 120]
		}, aPt[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eI: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			uy: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fu: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aPt[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eI: [10, 10, 60, 255, 255, 200, 200],
			uy: [10, 10, 60, 255, 255, 200, 200],
			fu: [80, 80, 255, 255, 255, 200, 200]
		}, aPt[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eI: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			uy: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fu: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aPt[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eI: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			uy: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fu: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aPt[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eI: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			uy: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fu: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aPt[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eI: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			uy: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fu: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aPt[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eI: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			uy: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fu: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aPC = function() {
		var aQ2, aC, ft, gJ, iZ = function() {
				var iZ;
				return bV.zt = document.createElement("canvas"), bV.zt.width = bV.fl, bV.zt.height = bV.fm, bV.zp = bV.zt.getContext("2d", {
					alpha: !1
				}), iZ = bV.zp.getImageData(0, 0, bV.fl, bV.fm), bV.zu = iZ.data, iZ
			}(),
			j = aPt[bV.fG].j,
			eI = aPt[bV.fG].eI,
			uy = aPt[bV.fG].uy,
			fu = aPt[bV.fG].fu,
			g2 = ar.aPY(),
			fa = j.length - 2,
			aPx = new Array(1 + fa),
			aPy = new Array(1 + fa),
			aPz = new Array(1 + fa),
			aQ0 = new Array(1 + fa);
		for (ft = fa; 0 <= ft; ft--) aPx[ft] = j[ft + 1] - j[ft], aPy[ft] = eI[ft + 1] - eI[ft], aPz[ft] = uy[ft + 1] - uy[ft], aQ0[ft] = fu[ft + 1] - fu[ft];
		for (aC = bV.fl * bV.fm - 1; 0 <= aC; aC--)
			for (ft = fa; 0 <= ft; ft--)
				if (g2[aC] >= j[ft]) {
					gJ = g2[aC] - j[ft], bV.zu[4 * aC] = eI[ft] + aKz(aPy[ft] * gJ, aPx[ft]), bV.zu[4 * aC + 1] = uy[ft] + aKz(aPz[ft] * gJ, aPx[ft]), bV.zu[4 * aC + 2] = fu[ft] + aKz(aQ0[ft] * gJ, aPx[ft]), bV.zu[4 * aC + 3] = 255;
					break
				} bV.zp.putImageData(iZ, 0, 0), bV.aPM(bV.fG) && ac.v2() && bV.aPM(bV.fG) && (iZ = ac.wB("arena"), aQ2 = ac.wB("territorial.io"), aQ3(iZ, 5, .5, .5, .1), aQ3(aQ2, 2, .5, .45, .1)), bV.zr = !0, bi.ds = !0
	}, this.a7z = function() {
		for (var h8, fh, fj, aQ4, iQ, gL, aAB = 0, j = bV.fl, k = bV.fm, gJ = j * k * 4, aQ5 = aFV, aQ6 = bV.zu, aC = j - 1; 0 <= aC; aC--) aQ5[(h8 = aC << 2) + 2] = aQ5[gJ - h8 - 2] = 3;
		for (gJ = 4 * j, aC = k - 1; 0 <= aC; aC--) aQ5[(h8 = aC * gJ) + 2] = aQ5[h8 + gJ - 2] = 3;
		for (aQ4 = j - 1, iQ = k - 1, fj = 1; fj < iQ; fj++)
			for (gJ = fj * j, fh = 1; fh < aQ4; fh++) gL = 1 - (aQ6[(h8 = gJ + fh << 2) + 2] > aQ6[h8 + 1] && aQ6[h8 + 2] > aQ6[h8]), aQ5[h8 + 2] = 6 - 5 * gL, aAB += gL;
		this.aAA = (j - 2) * (k - 2), this.aAD = 0, bV.fF(bV.fG) && (bV.aAD.aQ7(), bV.aAD.aQ8(4, 5)), this.aAB = aE.kf = aAB - this.aAD, this.aAC = this.aAA - this.aAB - this.aAD, this.aAC && (bV.aAD.aQ8(6, 2), bV.aAD.aQ9())
	}
}

function aPA() {
	var s6;
	10 === bV.fG ? s6 =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bV.fG ? s6 =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bV.fG ? s6 =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bV.fG ? s6 =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bV.fG ? s6 =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bV.fG ? s6 =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bV.fG ? s6 =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bV.fG ? s6 =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bV.fG ? s6 =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bV.fG ? s6 =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bV.fG ? s6 =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bV.fG ? s6 =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bV.fG && (s6 =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new zd).zf(s6)
}

function aP3() {
	this.zk = null, this.aQA = null, this.aQB = null, this.wK = ["White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East",
		"Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Mare Nostrum"
	], this.dk = function() {
		this.aQC = [L(143), L(144), L(145), L(146), L(147), L(148), L(149), L(150), L(151), L(152), L(153), L(154), L(155), L(156), L(157), L(158), L(159), L(160), L(161), L(162), L(163), L(164), L(165), L(166), "Mare Nostrum"];
		var aQD = [120, 105, 92],
			cos = [12, 12, 60],
			aQE = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aQF = [140, 130, 120],
			aQG = [12, 12, 76],
			aQH = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aQI = [130, 117, 106],
			aQJ = [12, 12, 68],
			aQK = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.zk = new Array(bV.aP0 + 1), __fx.customLobby.setMapInfo(this.zk), this.zk[0] = {
			j: 230,
			k: 230,
			nc: 1e3,
			nZ: 2e3,
			aP9: 173
		}, this.zk[1] = {
			j: 800,
			k: 800,
			nc: 100,
			nZ: 50,
			aP9: 43
		}, this.zk[2] = {
			j: 512,
			k: 512,
			nc: 128,
			nZ: 32,
			aP9: 0
		}, this.zk[3] = {
			j: 960,
			k: 960,
			nc: 60,
			nZ: 8,
			aP9: 0
		}, this.zk[4] = {
			j: 900,
			k: 900,
			nc: 100,
			nZ: 5,
			aP9: 0
		}, this.zk[5] = {
			j: 1e3,
			k: 1e3,
			nc: 100,
			nZ: 40,
			aP9: 0
		}, this.zk[6] = {
			j: 1e3,
			k: 1e3,
			nc: 100,
			nZ: 20,
			aP9: 0
		}, this.zk[7] = {
			j: 1024,
			k: 1024,
			nc: 128,
			nZ: 32,
			aP9: 0
		}, this.zk[8] = {
			j: 820,
			k: 820,
			nc: 200,
			nZ: 100,
			aP9: 0
		}, this.zk[9] = {
			j: 1024,
			k: 1024,
			nc: 128,
			nZ: 32,
			aP9: 0
		}, this.zk[10] = {
			a0B: aQF,
			a0C: aQG,
			aPN: aQH
		}, this.zk[11] = {
			a0B: aQI,
			a0C: aQJ,
			aPN: aQK
		}, this.zk[12] = {
			a0B: aQI,
			a0C: aQJ,
			aPN: aQK
		}, this.zk[13] = {
			a0B: aQD,
			a0C: cos,
			aPN: aQE
		}, this.zk[14] = {
			a0B: aQD,
			a0C: cos,
			aPN: aQE
		}, this.zk[15] = {
			a0B: aQF,
			a0C: aQG,
			aPN: aQH
		}, this.zk[16] = {
			a0B: aQF,
			a0C: aQG,
			aPN: aQH
		}, this.zk[17] = {
			a0B: aQD,
			a0C: cos,
			aPN: aQE
		}, this.zk[18] = {
			a0B: aQI,
			a0C: aQJ,
			aPN: aQK
		}, this.zk[19] = {
			a0B: aQD,
			a0C: cos,
			aPN: aQE
		}, this.zk[20] = {
			j: 1024,
			k: 1024,
			nc: 128,
			nZ: 32,
			aP9: 0
		}, this.zk[21] = {
			j: 940,
			k: 940,
			nc: 80,
			nZ: 8,
			aP9: 0
		}, this.zk[22] = {
			a0B: aQI,
			a0C: aQJ,
			aPN: aQK
		}, this.zk[23] = {
			a0B: aQF,
			a0C: aQG,
			aPN: aQH
		}, this.zk[24] = {
			a0B: [157, 136, 117],
			a0C: [16, 13, 68],
			aPN: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aA9: "[OG] Neutronian"
		};
		for (var aC = 0; aC < bV.aP0; aC++) this.zk[aC].name = this.aQC[aC];
		this.zk[bV.aP0] = {
			name: ""
		}, this.aQA = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aQA[aC] = aC;
		for (this.aQA[10] = 20, this.aQA[11] = 21, this.aQB = new Uint8Array(bV.aP1), aC = 0; aC < 10; aC++) this.aQB[aC] = 10 + aC;
		this.aQB[10] = 22, this.aQB[11] = 23, this.aQB[12] = 24
	}
}

function aP4() {
	this.aQ7 = function() {
		for (var h8, fh, gJ, aQ5 = aFV, aQ6 = bV.zu, j = bV.fl, aQ4 = j - 1, iQ = bV.fm - 1, h3 = 0, fj = 1; fj < iQ; fj++)
			for (gJ = fj * j, fh = 1; fh < aQ4; fh++) aQ6[h8 = gJ + fh << 2] === aQ6[1 + h8] && aQ6[h8] === aQ6[2 + h8] && (h3++, aQ5[2 + h8] = 4);
		aq.aAD = h3
	}, this.aQ8 = function(aQM, aQN) {
		for (var aQ5 = aFV, j = bV.fl, aQ4 = j - 1, iQ = bV.fm - 1, id = 0, fj = 1; fj < iQ; fj++)
			for (var gJ = fj * j, fh = 1; fh < aQ4; fh++) {
				var fE = 2 + (gJ + fh << 2);
				aQ5[fE] === aQM && (! function(fE, id, aQM, aQN) {
					var fa = 1,
						aQ5 = aFV,
						fc = ad.aKq,
						a5x = [fE],
						aQP = id >> 8 << 1,
						aQQ = 255 & id;
					aQ5[fE - 2] = aQP, aQ5[fE - 1] = aQQ, aQ5[fE] = 5;
					for (; fa;) {
						for (var a5y = [], aC = 0; aC < fa; aC++)
							for (var fP = a5x[aC], fd = 0; fd < 8; fd++) {
								var fe = fP + fc[fd];
								aQ5[fe] === aQM && (aQ5[fe - 2] = aQP, aQ5[fe - 1] = aQQ, aQ5[fe] = aQN, a5y.push(fe))
							}
						fa = (a5x = a5y).length
					}
				}(fE, id, aQM, aQN), id = (id + 1) % 32768)
			}
	}, this.aQ9 = function() {
		for (var aQ5 = aFV, j = bV.fl, aQ4 = j - 3, iQ = bV.fm - 3, aQS = 12 * j, fj = 3; fj < iQ; fj++)
			for (var gJ = fj * j, fh = 3; fh < aQ4; fh++) {
				var fE = 2 + (gJ + fh << 2);
				2 !== aQ5[fE] || 2 === aQ5[fE - 12] && 2 === aQ5[12 + fE] && 2 === aQ5[fE - aQS] && 2 === aQ5[fE + aQS] || (aQ5[fE - 2] = 1 | aQ5[fE - 2])
			}
	}
}

function a7y() {
	(a1U = void 0 === a1U ? document.createElement("canvas") : a1U).width = bV.fl, a1U.height = bV.fm, a82 = a1U.getContext("2d", {
		alpha: !0
	}), a83 = aFV = null, a83 = a82.getImageData(0, 0, bV.fl, bV.fm), aFV = a83.data, bD.sX.zv(aFV)
}

function cl() {
	var g2, j, k, max, aQT, nZ, aQV, aQW, aQX, aQY, aQZ, aQa, aQb, aQc, aQU = 1e4;

	function aQj(aQi, nc, fa) {
		var aC;
		for (aQV[0] = aQi, aC = 1; aC < fa; aC++) aQV[aC] = aQV[aC - 1] + nc, nc = aQV[aC] >= aQU ? (aQV[aC] = aQU - 1, -nc) : aQV[aC] < 0 ? (aQV[aC] = 0, -nc) : (nc += 16384 <= az.random() ? nZ : -nZ) < -aQT ? -aQT : aQT < nc ? aQT : nc
	}

	function aQl(fh, fj, aQm, fa) {
		(aQm ? function(fh, fj, fa) {
			var aC;
			for (aC = 0; aC < fa; aC++) g2[fj * j + fh + aC] = aQV[aC]
		} : function(fh, fj, fa) {
			var aC;
			for (aC = 0; aC < fa; aC++) g2[fj * j + fh + aC * j] = aQV[aC]
		})(fh, fj, fa)
	}

	function aQp(value, fa) {
		var aC, aOR, fE, kA = value - aQV[fa - 1];
		if (0 != kA) {
			for (aOR = 1 + bO.g1(Math.abs(kA), fa - 1), aOR = kA < 0 ? -aOR : aOR, aQV[fa - 1] = value, fE = (fE = fa - 1 - bO.g1(Math.abs(kA), Math.abs(aOR))) < 1 ? 1 : fa - 2 < fE ? fa - 2 : fE, aC = fa - 2; fE <= aC; aC--) aQV[aC] += kA - (fa -
				1 - aC) * aOR;
			(kA < 0 ? function(fa) {
				var aC;
				for (aC = fa - 2; 1 <= aC; aC--) aQV[aC] < 0 && (aQV[aC] = -aQV[aC] - 1)
			} : function(fa) {
				var aC;
				for (aC = fa - 2; 1 <= aC; aC--) aQV[aC] >= aQU && (aQV[aC] = 2 * aQU - aQV[aC] - 1)
			})(fa)
		}
	}

	function aQs(a5x, a5y, fa) {
		for (var aC = 0; aC < fa; aC++) a5x[aC] = a5y[aC]
	}

	function aQt(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aQu(a8e, gap, iR) {
		aQW.push(a8e), aQX.push(gap), aQY.push(iR)
	}
	this.a8 = function(a7B) {
		! function(a7B) {
			var aC;
			for (j = a7B[0], k = a7B[1], aQT = a7B[2], nZ = a7B[3], g2 = new Int16Array(j * k), max = k < j ? j : k, aQV = new Int16Array(max), aQW = [], aQX = [], aQY = [], aQZ = new Array(j), aQa = new Array(k), aC = j - 1; 0 <= aC; aC--) aQZ[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aQa[aC] = !1;
			aQb = new Int16Array(j), aQc = new Int16Array(k)
		}(a7B),
		function(fa) {
			var aQi = az.random() % aQU,
				nc = az.random() % (2 * aQT + 1) - aQT;
			aQj(aQi, nc, fa)
		}(max), aQs(aQc, aQV, k), aQl(0, 0, !0, j);
		var fh, fj, a7B = g2[0],
			fa = max,
			nc = az.random() % (2 * aQT + 1) - aQT;
		for (aQj(a7B, nc, fa), aQs(aQb, aQV, j), aQl(0, 0, !1, k), aQt(aQb), aQt(aQc), aQj(g2[j - 1], aQb[j - 1], k), aQl(j - 1, 0, !1, k), aQj(g2[j * (k - 1)], aQc[k - 1], j), aQp(g2[j * k - 1], j), aQl(0, k - 1, !0, j), aQZ[j - 1] = aQZ[0] = !
			0, aQa[k - 1] = aQa[0] = !0, aQu(0, j, !0), aQu(0, k, !1), ! function() {
				var aQw, a8e;
				for (;;) {
					if (aQw = function() {
							var aC, aQw = aQW.length - 1;
							for (aC = aQw - 1; 0 <= aC; aC--) aQX[aC] > aQX[aQw] && (aQw = aC);
							return aQw
						}(), aQX[aQw] < 5) return;
					a8e = aQW[aQw] + bO.g1(aQX[aQw], 2), (aQY[aQw] ? function(fh) {
						var fa, aQz, aC, aJY = 0,
							aR0 = 0;
						for (; aR0 < k - 1;) {
							for (aC = aJY + 1; aC < k; aC++)
								if (aQa[aC]) {
									aR0 = aC;
									break
								} fa = aR0 - aJY + 1, aQj(g2[fh + j * aJY], 0 === aJY ? aQb[fh] : aQV[aQz - 1] - aQV[aQz - 2], fa), aQp(g2[aR0 * j + fh], fa), aQl(fh, aJY, !1, fa), aQz = fa, aJY = aR0
						}
						aQZ[fh] = !0
					} : function(fj) {
						var fa, aQz, aC, aJY = 0,
							aR0 = 0;
						for (; aR0 < j - 1;) {
							for (aC = aJY + 1; aC < j; aC++)
								if (aQZ[aC]) {
									aR0 = aC;
									break
								} fa = aR0 - aJY + 1, aQj(g2[fj * j + aJY], 0 === aJY ? aQc[fj] : aQV[aQz - 1] - aQV[aQz - 2], fa), aQp(g2[fj * j + aR0], fa), aQl(aJY, fj, !0, fa), aQz = fa, aJY = aR0
						}
						aQa[fj] = !0
					})(a8e), aQu(a8e, aQW[aQw] + aQX[aQw] - a8e, aQY[aQw]), aQX[aQw] = a8e - aQW[aQw] + 1
				}
			}(), fh = 0; fh < j; fh++)
			if (!aQZ[fh])
				for (fj = 0; fj < k; fj++) aQa[fj] || ! function(fh, fj) {
					var value = g2[fj * j + fh - 1] + g2[(fj - 1) * j + fh],
						aAa = 2;
					aQZ[fh + 1] && (aAa++, value += g2[fj * j + fh + 1]);
					aQa[fj + 1] && (aAa++, value += g2[(fj + 1) * j + fh]);
					g2[fj * j + fh] = bO.g1(value, aAa)
				}(fh, fj)
	}, this.aPY = function() {
		return g2
	}, this.aPD = function() {
		g2 = null
	}
}

function aKz(ft, fu) {
	return 0 <= ft ? bO.g1(ft, fu) : -bO.g1(-ft, fu)
}

function kR(g2) {
	return g2 * g2
}

function a9d(ft, fu) {
	return fu < ft ? ft : fu
}

function aF0(ft, fu) {
	return ft < fu ? ft : fu
}

function aCC(ft, g2, fu) {
	return g2 < ft ? ft : fu < g2 ? fu : g2
}

function aR2(g2, fa) {
	for (var ek = bO.g1(g2 + 1, 2), aC = 0; aC < fa; aC++) ek = bO.g1(ek + bO.g1(g2, ek), 2);
	return ek
}

function aMy(g2, fa) {
	return g2 < 1 ? 0 : aR2(g2, fa)
}

function aR3(ny, nz, uh, aBv, oB, oC, ui, vO) {
	return !(ny + uh <= oB || nz + aBv <= oC || oB + ui <= ny || oC + vO <= nz)
}

function aR4(ny, nz, uh, aBv, oB, oC, ui, vO) {
	return ny <= oB && nz <= oC && oB + ui <= ny + uh && oC + vO <= nz + aBv
}

function zm(g2) {
	return Math.floor(!!g2 * (1 + Math.log2(g2 + .5)))
}

function c1() {
	this.g1 = function(ft, fu) {
		return Math.floor((ft + .5) / fu)
	}, this.aR5 = function(ft, fu) {
		return Math.floor(ft * (fu + .5))
	}, this.sqrt = function(g2) {
		return ~~Math.sqrt(g2 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.ik = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aR6 = function(gJ, gL, gN) {
		return Math.max(Math.min(gJ, gL), gN)
	}, this.aR7 = function(aR8, aR9, fh, fj) {
		fh -= aR8, aR8 = fj - aR9, fj = 0;
		return 0 == fh ? fj = 0 <= aR8 ? Math.PI : 0 : (fj = Math.atan(aR8 / fh), fj += 0 < fh ? .5 * Math.PI : 1.5 * Math.PI), fj
	}, this.log2 = function(g2) {
		return Math.floor(!!g2 * (1 + Math.log2(g2 + .5)))
	}, this.log10 = function(g2) {
		return Math.floor(Math.log10(g2 + .5))
	}, this.aRB = function(aRC, aRD, aRE, aRF, aRG) {
		return aRE - aRG < aRC && aRC < aRE + aRG && aRF - aRG < aRD && aRD < aRF + aRG
	}, this.a0j = function(aCc, aCe) {
		return aCc * aCc + aCe * aCe
	}
}

function dJ() {
	this.z = new aRH, this.uc = 0;
	var aRI = new Array(32);

	function aRL() {
		for (var fa = aRI.length, aC = 0; aC < fa; aC++) aRI[aC] = null
	}
	this.dk = function() {
		for (var aRJ, aRK = document.body.firstChild; aRK;) aRJ = aRK.nextSibling, !document.body.contains(aRK) || "DIV" !== aRK.tagName && "INPUT" !== aRK.tagName && "BUTTON" !== aRK.tagName || u.removeChild(document.body, aRK), aRK = aRJ
	}, this.v = function(eJ, a4a, a7B) {
		void 0 === a4a && (a4a = this.uc), bi.ds = !0, 0 === eJ && (0 === ab.a4V() ? eJ = 5 : a1.a2.setState(13)), this.ta(), this.uc === eJ && (a4a = aRI[eJ].a4a, aRI[eJ] = null), this.uc = eJ;
		var lq = aRI[eJ];
		if (!lq || 4 === eJ || 7 === eJ || 8 === eJ || 9 === eJ || 10 === eJ || 11 === eJ || 13 === eJ || 15 === eJ || 18 === eJ || 20 <= eJ && eJ <= 28 || 32 === eJ || 33 === eJ) {
			if (0 === eJ) return void aRL();
			1 === eJ ? lq = new aRM : 2 === eJ ? lq = new aRN : 3 === eJ ? lq = new aRO : 4 === eJ || 9 === eJ || 10 === eJ || 11 === eJ || 13 === eJ || 33 === eJ ? lq = a7B : 5 === eJ ? lq = new aRP : 6 === eJ ? lq = new aRQ : 7 === eJ ? lq =
				new aRR(u.z.aRS) : 8 === eJ ? lq = a7B : 12 === eJ ? lq = new aRT : 14 === eJ ? lq = new aRU : 15 === eJ ? lq = new aRR(u.z.aRV) : 16 === eJ ? lq = new aRW : 17 === eJ ? lq = new aRX : 18 === eJ ? lq = new aRY : 19 === eJ ? lq =
				new aRZ : 20 === eJ ? lq = new aRa : 21 === eJ ? lq = new aRb : 22 === eJ ? lq = new aRc : 23 === eJ ? lq = new aRd : 24 === eJ ? lq = new aRe : 25 === eJ ? lq = new aRf : 26 === eJ ? lq = new aRg : 27 === eJ ? lq = new aRh :
				28 === eJ ? lq = new aRi : 29 === eJ ? lq = new aRj : 30 === eJ ? lq = new aRk : 31 === eJ ? lq = new aRl : 32 === eJ && (lq = new aRm), lq.a4a = a4a, aRI[eJ] = lq
		}
		lq.show(a7B)
	}, this.a4U = function() {
		this.iM() && this.aRn(this.a4Z().a4a)
	}, this.aRn = function(eJ) {
		this.iM() && (aRI[eJ] ? (this.ta(), bi.ds = !0, this.uc = eJ, aRI[eJ].show()) : this.v(eJ))
	}, this.ta = function() {
		this.iM() && aRI[this.uc].ta()
	}, this.y = function() {
		this.iM() && (aRI[this.uc].ta(), aRL(), this.uc = 0, a1.a2.setState(13))
	}, this.xy = function() {
		var lq;
		this.iM() && (lq = aRI[this.uc]).xy && lq.xy()
	}, this.resize = function() {
		if (!this.iM()) return !1;
		aRI[this.uc].resize()
	}, this.hn = function(fh, fj) {
		var lq;
		this.iM() && (lq = aRI[this.uc]).hn && lq.hn(fh, fj)
	}, this.a4s = function(fh, fj) {
		var lq;
		this.iM() && (lq = aRI[this.uc]).a4s && lq.a4s(fh, fj)
	}, this.a5G = function() {
		var lq;
		this.iM() && (lq = aRI[this.uc]).a5G && lq.a5G()
	}, this.a4v = function(mA, mB, deltaY) {
		var lq;
		this.iM() && (lq = aRI[this.uc]).a4v && lq.a4v(mA, mB, deltaY)
	}, this.a5Q = function(code) {
		var lq;
		return !!this.iM() && ((lq = aRI[this.uc]).a5Q && lq.a5Q(code), !0)
	}, this.ef = function() {
		var lq;
		this.iM() && (lq = aRI[this.uc]) && lq.ef && lq.ef()
	}, this.iM = function() {
		return 0 < this.uc
	}, this.a4Z = function() {
		return aRI[this.uc]
	}, this.a8P = function(eJ) {
		return aRI[eJ]
	}, this.aRo = function() {
		return aRI
	}, this.removeChild = function(ol, om) {
		try {
			ol.removeChild(om)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aRR(data) {
	var aRp, aRq;

	function aRt(sK, w6) {
		if (!data.aRr) {
			if (data.aSY) {
				if (w6) return
			} else {
				if (!w6) return;
				if (data.zB < 1e4) return
			}
			var aSh, wH = new s2,
				aSf = w6 && 1e5 <= data.zB,
				aSg = wH.s5(w6 ? (aSf ? "⚠️ " : "") + L(267) : L(268)),
				aSj = (aSf && (aSg.style.color = "yellow"), w6 ? wH.s7(L(269, [bD.tN.a7T(data.zB, .01, 0)])) : ((aSh = new tC({
					value: data.aSi,
					eJ: -1
				})).e.readOnly = !0, aSh.e.type = "password", wH.sG(aSh), wH.sG(new tm([new x(L(201), function(e) {
					return e.textContent === L(201) ? (e.textContent = L(202), aSh.e.type = "text") : (e.textContent = L(201), aSh.e.type = "password"), !0
				}).button, new x(L(198), function(e) {
					return bD.sP.a6e(aSh.e), bD.sP.xc(e), !0
				}).button]))), wH.sB(L(w6 ? 268 : 270)).style.marginTop = "0.75em", new tC({
					value: "",
					eJ: -1
				}, 0, 0)),
				aSl = (aSj.e.type = "email", aSj.e.autocomplete = "email", aSj.e.name = "email", aSj.e.inputMode = "email", aSj.e.spellcheck = !1, wH.sG(aSj), wH.sG(new tm([new x(L(271), function(e) {
					return b1.aIy.aSk({
						action: 3,
						s6: aSj.e.value.trim().substring(0, 63)
					}), bD.sP.xc(e), !0
				}).button])), w6 && wH.s7(L(272)), wH.sB(L(273)).style.marginTop = "0.75em", new tC({
					value: "",
					eJ: -1
				}, 1));
			wH.sG(aSl), wH.sG(new tm([new x(L(274), function() {
				b1.aIy.aIz({
					action: 4,
					ua: "",
					value: Math.floor(+aSl.e.value)
				}), u.v(8, u.a4Z().a4a, new ud(18))
			}).button])), sK.push(wH)
		}
	}
	this.show = function() {
		data.aRr && bL.aT3("account", data.ua), aRp.show(), this.resize()
	}, this.ta = function() {
		aRp.ta()
	}, this.resize = function() {
		aRp.resize(), aRq.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	}, aRp = new xj(data.username, [new x("⬅️ " + L(43), function() {
		bL.clear(), u.a4U()
	}), new x(data.aRr ? "🔄 " + L(167) : L(168), function() {
		u.v(8, data.aRr ? u.a4Z().a4a : void 0, new ud(25, {
			action: 0,
			ua: data.ua,
			ub: data.ub
		}))
	}, 0, 0, 1)]), aRq = new sI(aRp.xp, function() {
		var sK = [];
		aRt(sK, 1), sK.push(function() {
				var wH = new s2;
				wH.s5(L(240)), data.aSY && (wH.sB("✅ " + L(241)).style.marginBottom = "0.75em");
				var a46 = data.aSZ;
				a46 < 1 ? (wH.sB(L(242)), 0 === data.aSa ? wH.s7(L(243)) : 1 === data.aSa ? wH.s7(L(244)) : 2 === data.aSa ? wH.s7(L(245)) : 3 === data.aSa ? wH.s7(L(246)) : 4 === data.aSa ? wH.s7(L(247)) : 5 === data.aSa ? wH.s7(L(
					248)) : 6 === data.aSa ? wH.s7(L(249)) : wH.s7(L(250))) : (wH.sB(L(251)), a46 = a46 < 2 ? L(252) : a46 < 61 ? 2 === a46 ? L(253) : L(254, [a46 - 1]) : a46 < 84 ? 61 === a46 ? L(255) : L(256, [a46 - 60]) : a46 <
					255 ? 84 === a46 ? L(257) : L(258, [a46 - 83]) : L(259), wH.s7(a46));
				{
					var s8, aSH;
					wH.sG(new ty), data.aRr && (s8 = wH.s7(), wH.sG(new tm([new x(bm.yM.ww(data.ua) ? L(260) : L(261), function(e) {
						return bm.yM.yZ(data.ua) ? (e.textContent = L(260), aSH(1)) : (e.textContent = L(261), aSH(0)), !0
					}).button])), aSH = function(g2) {
						s8.textContent = g2 ? L(262) : ""
					}, bm.yM.ww(data.ua) && aSH(1), wH.sG(new ty))
				}
				var sT, tB = new tC({
					value: data.username,
					eJ: -1
				});
				tB.e.readOnly = !0, wH.sG(tB), wH.sG(new tm([new x(L(198), function(e) {
					return bD.sP.a6e(tB.e), bD.sP.xc(e), !0
				}).button])), data.aRr || wH.s7(L(263));
				(data.aSb || data.aSc || data.aSd) && (wH.sG(new ty), wH.s7(L(264)), data.aSb && (wH.s7("• Account Timeout").style.color = "orange"), data.aSc && ((sT = wH.s7("• Muted")).style.color = "orange", sT.style.marginTop =
					"0.5em"), data.aSd) && ((sT = wH.s7("• Redacted")).style.color = "orange", sT.style.marginTop = "0.5em");
				data.aRr && (wH.sG(new ty), wH.sB(b1.z.aSD("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", wH.sG(new tm([new x(L(265), function(e) {
					return b1.aIy.aIz({
						action: 3,
						ua: data.ua,
						value: 0
					}), bD.sP.xc(e), !0
				}, bE.q8).button])), wH.sG(new tm([new x(L(266), function(e) {
					return b1.aIy.aIz({
						action: 3,
						ua: data.ua,
						value: 1
					}), bD.sP.xc(e), !0
				}, bE.q8).button])), wH.sG(new tm([new x("Cheater", function(e) {
					return b1.aIy.aIz({
						action: 3,
						ua: data.ua,
						value: 2
					}), bD.sP.xc(e), !0
				}, bE.q8).button])), wH.sG(new tm([new x("False Reporter", function(e) {
					return b1.aIy.aIz({
						action: 3,
						ua: data.ua,
						value: 3
					}), bD.sP.xc(e), !0
				}, bE.q8).button])), a46 = "CRTOR" === (a46 = bm.buffer.data[105].value) || "ADMIN" === a46) && (wH.sG(new tm([new x("Block Account", function(e) {
					return b1.aIy.aIz({
						action: 3,
						ua: data.ua,
						value: 4
					}), bD.sP.xc(e), !0
				}, bE.q6).button])), wH.sG(new tm([new x("Ban IP", function(e) {
					return b1.aIy.aIz({
						action: 3,
						ua: data.ua,
						value: 5
					}), bD.sP.xc(e), !0
				}, bE.q6).button])), wH.sG(new tm([new x("Gold Seizure", function(e) {
					return b1.aIy.aIz({
						action: 3,
						ua: data.ua,
						value: 6
					}), bD.sP.xc(e), !0
				}, bE.q6).button])), wH.sG(new tm([new x("Remove Punishments", function(e) {
					return b1.aIy.aIz({
						action: 3,
						ua: data.ua,
						value: 7
					}), bD.sP.xc(e), !0
				}, bE.pt).button])));
				return wH
			}()),
			function(sK) {
				var wH, tB, k, aSI, aSK, aSJ;
				data.aRr && data.aSN && ((wH = new s2).s5(L(194)), wH.s7(L(191)), (tB = new tC({
					value: data.aSN,
					eJ: -1
				})).e.readOnly = !0, wH.sG(tB), k = !1, aSI = new x(L(195), function(e) {
					return k && b1.z.eg(0) && (bD.sP.xc(e), aSJ(), b1.aIy.aSO({
						action: 9,
						ua: data.ua
					})), !0
				}, 1), aSK = new x(L(188), function(e) {
					return e.textContent === L(188) ? (k = !0, e.textContent = L(189), aSI.sj(0), aSI.button.style.color = bE.qS) : aSJ(), !0
				}), wH.sG(new tm([aSK.button])), aSJ = function() {
					k = !1, aSK.button.textContent = L(188), aSI.sj(1), aSI.button.style.color = bE.pR
				}, wH.sG(new tm([aSI.button])), wH.s7(L(196)), sK.push(wH))
			}(sK),
			function(sK) {
				var wH, s8, aFl, aSn, aSI, aSK, aSJ;
				data.aRr || ((wH = new s2).s5(L(275)), (s8 = wH.s7(data.aSm.length + " / 160")).style.textAlign = "center", aFl = !0, (aSn = new y7(0, 1, function(e) {
					e = e.target.value.length;
					s8.textContent = e + " / 160", 160 < e ? aFl && (aFl = !1, aSK.sj(1)) : aFl || (aFl = !0, aSK.sj(0))
				})).e.rows = 6, aSn.e.style.fontSize = "1em", aSn.yD(data.aSm), wH.sG(aSn), 0 !== data.aSo ? (aSK = new x(L(276), function() {
					if (!aFl) return !0;
					u.v(8, u.a4Z().a4a, new ud(29, {
						action: 1,
						s6: aSn.yE().substring(0, 160)
					}))
				}, 0, 0, 1), wH.sG(new tm([aSK.button])), wH.sG(new tm([new x(1 === data.aSo ? L(277) : L(278), function() {
					u.v(8, u.a4Z().a4a, new ud(29, {
						action: 0,
						s6: ""
					}))
				}, 0, 0, 1).button])), wH.s7(1 === data.aSo ? L(279, [data.aSp - 1]) : L(280, [data.aSp - 1])), wH.s7(L(281, [data.aSq]))) : (aSI = new x(L(195), function() {
					if (!aSn.e.readOnly) return !0;
					u.v(8, u.a4Z().a4a, new ud(29, {
						action: 1,
						s6: aSn.yE().substring(0, 160)
					}))
				}, 1), aSK = new x(L(188), function(e) {
					if (e.textContent === L(188)) {
						if (!aFl) return !0;
						e.textContent = L(189), aSn.e.readOnly = !0, aSI.sj(0), aSI.button.style.color = bE.qS
					} else aSJ();
					return !0
				}), wH.sG(new tm([aSK.button])), wH.s7(L(281, [data.aSq])), aSJ = function() {
					aSK.button.textContent = L(188), aSn.e.readOnly = !1, aSI.sj(1), aSI.button.style.color = bE.pR
				}, wH.sG(new tm([aSI.button]))), sK.push(wH))
			}(sK),
			function(sK) {
				var wH;
				data.aRr && 0 !== data.aSo && ((wH = new s2).s5(L(282)), wH.s9(data.aSm), wH.sG(new tm([new x(L(283, 0, "Report"), function(e) {
					return b1.z.eg(0) && (bD.sP.xc(e), b1.aIy.aSO({
						action: 5,
						ua: data.ua
					})), !0
				}, 0, 0, 1).button])), sK.push(wH))
			}(sK), sK.push(function() {
				var wH = new s2,
					aSE = (wH.s5(L(169)), wH.sB(b1.z.aSD("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(170), L(171), L(172), L(173), L(174), L(175), L(176), L(177), L(178), L(179), L(180), L(181), L(182), L(183)]),
					eI = data.aSF;
				return wH.sB(L(184) + bD.tN.a7T(data.zB, .01, 2) + "<br>" + L(185) + (eI + 1) + " / " + data.zA + "<br>" + L(186) + aSE[function(eI, zB) {
					if (eI < 10) return 0;
					if (eI < 30) return 1;
					if (eI < 60) return 2;
					if (3e4 <= (zB = bO.g1(zB, 100))) return 3;
					if (12e3 <= zB) return 4;
					if (7e3 <= zB) return 5;
					if (3e3 <= zB) return 6;
					if (1e3 <= zB) return 7;
					if (500 <= zB) return 8;
					if (200 <= zB) return 9;
					if (70 <= zB) return 10;
					if (20 <= zB) return 11;
					if (3 <= zB) return 12;
					return 13
				}(eI, data.zB)]), wH
			}()), data.aRr && sK.push(function() {
				var wH = new s2,
					tB = (wH.s5(L(187)), wH.sB(b1.z.aSD("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new tC({
						value: bm.buffer.data[147].value,
						eJ: -1
					}, 1, void 0, function(e) {
						bm.qt.qu(147, aSH(e.target.value))
					})),
					aSI = (wH.sG(tB), new x(L(14), function(e) {
						return tB.e.readOnly && b1.z.eg(0) && (bD.sP.xc(e), aSJ(), b1.aIy.aIz({
							action: 0,
							ua: data.ua,
							value: parseInt(bm.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					aSK = new x(L(188), function(e) {
						return e.textContent === L(188) ? (e.textContent = L(189), tB.e.readOnly = !0, aSI.sj(0), aSI.button.style.color = bE.qS, bm.qt.qu(147, tB.e.value), aSH(bm.buffer.data[147].value)) : aSJ(), !0
					}),
					s8 = (wH.sG(new tm([aSK.button])), wH.s7()),
					aSH = function(g2) {
						return s8.innerHTML = u.z.aSL(g2, bm.buffer.data[105].value, data.ua), g2
					},
					aSJ = function() {
						aSK.button.textContent = L(188), tB.e.readOnly = !1, aSI.sj(1), aSI.button.style.color = bE.pR
					};
				return aSH(bm.buffer.data[147].value), wH.sG(new tm([aSI.button])), wH
			}());
		sK.push(function() {
			var wH = new s2,
				tB = (wH.s5(L(197)), new tC({
					value: data.ua,
					eJ: -1
				})),
				aSM = (tB.e.readOnly = !0, wH.sG(tB), wH.sG(new tm([new x(L(198), function(e) {
					return bD.sP.a6e(tB.e), bD.sP.xc(e), !0
				}).button])), wH.sG(new ty), new tC({
					value: data.ua,
					eJ: -1
				}));
			return wH.sG(aSM), wH.sG(new tm([new x(L(199), function(e) {
				u.v(8, u.a4Z().a4a, new ud(25, {
					action: 0,
					ua: aSM.e.value,
					ub: 0
				}))
			}).button])), wH
		}()), data.aRr || (sK.push(function() {
			var wH = new s2,
				aSP = (wH.s5(L(200)), new tC(bm.buffer.data[106])),
				customPasswordInput = (aSP.e.readOnly = !0, aSP.e.type = "password", wH.sG(aSP), wH.sG(new tm([new x(L(201), function(e) {
					return e.textContent === L(201) ? (e.textContent = L(202), aSP.e.type = "text") : (e.textContent = L(201), aSP.e.type = "password"), !0
				}).button, new x(L(198), function(e) {
					return bD.sP.a6e(aSP.e), bD.sP.xc(e), !0
				}).button])), new tC({
					value: "",
					eJ: -1
				}));
			return customPasswordInput.e.placeholder = "Custom new password (optional)", wH.sG(customPasswordInput), wH.sG(new tm([new x(L(203), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.e.value) && u.v(8, u.a4Z().a4a, new ud(15))
			}).button])), wH.s5(L(204), "0.8em"), wH.s7(L(205)), wH.s7(L(206)), wH.s7(L(207)), wH
		}()), sK.push(function() {
			var wH = new s2;
			return wH.s5(L(208)), wH.sG(new tm([new x(L(209), function() {
				u.v(6, u.a4Z().a4a)
			}).button])), wH.sG(new tm([new x(L(210), function() {
				bm.qt.qu(105, ""), u.v(8, u.a4Z().a4a, new ud(18))
			}).button])), wH.sG(new tm([new x(L(211) + bm.buffer.data[105].value, function() {
				u.v(4, 0, new w(L(212), L(213), !0, [new x("⬅️ " + L(43), function() {
					u.v(7, u.a8P(7).a4a)
				})]))
			}, bE.q8).button])), wH
		}()), sK.push(function() {
			function aSR(eJ) {
				aSQ[0].sj(0 === eJ ? bE.pd : bE.po), aSQ[1].sj(0 === eJ ? bE.pd : bE.q8)
			}
			var sE, aSQ, wH = new s2;
			wH.s5(L(217)), wH.s7(L(218)), bm.z.yu();
			return aSQ = [new x(L(219), function() {
				var eJ = Math.min(bm.buffer.data[117].value, sE.sF.length - 1);
				eJ < 1 || (eJ = bm.z.yy(eJ)) && (bm.qt.qu(105, eJ.ua), bm.qt.qu(106, eJ.password), u.v(8, u.a4Z().a4a, new ud(18)))
			}, bE.pd, 1), new x(L(216), function() {
				var eJ = Math.min(bm.buffer.data[117].value, sE.sF.length - 1);
				if (!(eJ < 1)) {
					sE.sF[eJ].remove(), sE.sF.splice(eJ, 1);
					for (var aC = eJ; aC < sE.sF.length; aC++) sE.sF[aC].name = "" + aC;
					bm.z.yx(eJ), eJ = bm.buffer.data[117].value, sE.sF[eJ].textContent = sE.sF[eJ].textContent.replace("⚪", "🟢"), aSR(eJ)
				}
			}, bE.pd, 1)], sE = new xf(bm.buffer.data[117], aSR), __fx.savedAccounts.decorate(sE.sF, bm.buffer.data[117].oP), aSR(0), sE.sF[0].style.marginTop = "0.5em", wH.sD(sE), wH.sG(new tm([aSQ[0].button])), wH.sG(new tm(
				[new x("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(bm.buffer.data[117].value)
				}).button])), wH.sG(new tm([aSQ[1].button])), wH
		}()));
		return sK.push(function() {
				var wH = new s2,
					aSE = (wH.s5(L(223)), [L(224), L(225), L(226), L(227)]),
					eI = data.aSS;
				return wH.sB(L(228) + (data.a3p / 100).toFixed(2) + "<br>" + L(185) + (eI + 1) + " / " + data.zA + "<br>" + L(186) + aSE[eI < 10 ? 0 : eI < 50 ? 1 : eI < 200 ? 2 : 3]), wH
			}()), sK.push(function() {
				var wH = new s2;
				return wH.s5(L(220)), wH.sB(L(221) + bD.tN.a7T(data.z7, .1, 1) + "<br>" + L(185) + (data.z8 + 1) + " / " + data.zA + "<br>" + L(222) + data.z9), wH
			}()),
			function(sK) {
				var wH = new s2,
					aSr = data.zE,
					aSs = (wH.s5(L(284)), wH.sB(L(285, [data.zC.length ? "[" + data.zC + "]" : "-"])), wH.sB(L(286, [bD.tN.a7T(aSr, .01, 2)])), wH.sB(L(287, [data.zG + 1 + " / " + data.zA])), data.zH),
					aSt = (wH.sB(L(288, [bD.tN.a7T(aSs, .1, 1)])), data.zJ);
				wH.sB(L(289, [aSt])), wH.sB(L(290, [bD.tN.a7T(aSs / Math.max(aSt, 1), .1, 2)])), aSr = data.zF, wH.s5(L(291), "0.8em"), wH.sB(L(285, [data.zD.length ? "[" + data.zD + "]" : "-"])), wH.sB(L(286, [bD.tN.a7T(aSr, .01, 2)])),
					aSs = data.zI, wH.sB(L(288, [bD.tN.a7T(aSs, .1, 1)])), aSt = data.zK, wH.sB(L(289, [aSt])), wH.sB(L(290, [bD.tN.a7T(aSs / Math.max(aSt, 1), .1, 2)])), wH.sB(b1.z.aSD("/wiki/clans"), "0.75em").style.marginTop = "0.8em", sK
					.push(wH)
			}(sK),
			function(sK) {
				var wH = new s2;
				wH.s5(L(292)), wH.sB(L(228) + (data.aSu / 10).toFixed(1) + "<br>" + L(186) + (data.aSv.length ? L(293, [data.aSv]) : L(294))), data.aRr && wH.sG(new tm([new x(L(238), function(e) {
					return b1.z.eg(0) && (bD.sP.xc(e), b1.aIy.aSO({
						action: 4,
						ua: data.ua
					})), !0
				}, 0, 0, 1).button]));
				wH.sB(b1.z.aSD("/wiki/clans"), "0.75em").style.marginTop = "0.8em", sK.push(wH)
			}(sK), sK.push(function() {
				var wH = new s2;
				{
					var tB, aSK, aSX, s8, aSH, aSJ;
					wH.s5(L(236)), wH.sB(L(237) + data.aSV + "<br>" + L(185) + (data.aSW + 1) + " / " + data.zA + "<br>" + L(186) + br.eL(data.aSW)), data.aRr && ((tB = new tC({
						value: bm.buffer.data[157].value,
						eJ: -1
					}, 1, void 0, function(e) {
						bm.qt.qu(157, aSH(e.target.value))
					})).e.style.marginTop = "0.6em", wH.sG(tB), aSK = new x(L(188), function(e) {
						return e.textContent === L(188) ? (e.textContent = L(189), tB.e.readOnly = !0, aSX[0].sj(0), aSX[0].button.style.color = bE.qS, aSH(bm.buffer.data[157].value)) : aSJ(), !0
					}), wH.sG(new tm([aSK.button])), aSX = [new x(L(238), function(e) {
						return tB.e.readOnly && b1.z.eg(0) && (bD.sP.xc(e), aSJ(), b1.aIy.aIz({
							action: 1,
							ua: data.ua,
							value: bO.ik(parseInt(bm.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], s8 = wH.s7(), aSH = function(g2) {
						return g2 = bD.gw.a78(g2, 2, 3e4), s8.textContent = L(239, [g2 - 1, g2, bm.buffer.data[105].value]), g2
					}, wH.sG(new tm([aSX[0].button])), aSJ = function() {
						aSK.button.textContent = L(188), tB.e.readOnly = !1, aSX[0].sj(1), aSX[0].button.style.color = bE.pR
					}, aSH(bm.buffer.data[157].value))
				}
				return wH
			}()),
			function(sK) {
				var wH, a6d;
				data.aRr && !data.aSw || (0 === a1.id || data.aRr || data.aSw) && ((wH = new s2).s5("Patreon"), !data.aRr && data.aSx ? wH.sG(new tm([new x(L(201), function() {
					b1.aIy.aSO({
						action: 7,
						ua: data.ua
					}), data.aSx = 0, u.v(7)
				}).button])) : data.aSw ? (wH.sB(L(295, [(data.aSy / 100).toFixed(2)]) + "<br>" + L(296, [1 + data.aSz + " / " + data.aT0]) + "<br>" + L(297, [data.aT1 ? L(298) : L(299)])), data.aRr || wH.sG(new tm([new x(L(300),
					function() {
						b1.aIy.aSO({
							action: 8,
							ua: data.ua
						}), data.aSw = 0, bm.qt.qu(160, 0), u.v(7)
					}).button]))) : (wH.sB(L(301), "0.75em").style.marginBottom = "0.3em", wH.sB("  • " + L(302), "0.75em").style.whiteSpace = "pre", wH.sB("  • " + L(303), "0.75em").style.whiteSpace = "pre", wH.sB("  • " + L(304),
						"0.75em").style.whiteSpace = "pre", wH.sB(L(305), "0.75em").style.marginTop = "1.0em", wH.sB(L(306), "0.75em").style.marginTop = "1.0em", wH.sB("<a href='" + bN.aT2 +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a6d = "https://www.patreon.com/oauth2/authorize?state=" + data.ua +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a3j() + "/", wH.sB(L(307), "0.75em").style.marginTop = "1.0em", wH.sB("<a href='" +
						a6d + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aRr || (wH.sG(new ty), wH.sG(new tm([new x(L(202), function() {
						b1.aIy.aSO({
							action: 6,
							ua: data.ua
						}), data.aSx = 1, u.v(7)
					}).button])), wH.sB(L(308), "0.75em").style.marginTop = "0.75em")), sK.push(wH))
			}(sK), sK.push(function() {
				var wH = new s2,
					aSE = (wH.s5(L(229)), [L(230), L(231), L(232), L(233), "Scout", L(234)]),
					eI = data.aST;
				return wH.sB(L(235) + (data.aSU / 100).toFixed(2) + "<br>" + L(185) + (eI + 1) + " / " + data.zA + "<br>" + L(186) + aSE[eI < 3 ? 0 : eI < 20 ? 1 : eI < 100 ? 2 : eI < 500 ? 3 : eI < 2e3 ? 4 : 5]), wH.sB(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", wH
			}()),
			function(sK) {
				var wH, tB, aSM, aSI, aSK, aSJ;
				data.aRr || ((wH = new s2).s5(L(190)), wH.s7(L(191)), tB = new tC({
					value: bm.buffer.data[184].value,
					eJ: -1
				}, 1, void 0, function(e) {
					bm.qt.qu(184, e.target.value)
				}), wH.sG(tB), wH.s7(L(192)), aSM = new tC({
					value: bm.buffer.data[185].value,
					eJ: -1
				}, 0, void 0, function(e) {
					bm.qt.qu(185, e.target.value)
				}), wH.sG(aSM), aSI = new x(L(193), function(e) {
					return tB.e.readOnly && b1.z.eg(0) && (bD.sP.xc(e), aSJ(), b1.aIy.aIz({
						action: 5,
						ua: bm.buffer.data[185].value,
						value: bO.ik(parseInt(bm.buffer.data[184].value, 10), 1, 1e9)
					})), !0
				}, 1), aSK = new x(L(188), function(e) {
					return e.textContent === L(188) ? (e.textContent = L(189), tB.e.readOnly = !0, aSM.e.readOnly = !0, aSI.sj(0), aSI.button.style.color = bE.qS, bm.qt.qu(184, tB.e.value)) : aSJ(), !0
				}), wH.sG(new tm([aSK.button])), aSJ = function() {
					aSK.button.textContent = L(188), tB.e.readOnly = !1, aSM.e.readOnly = !1, aSI.sj(1), aSI.button.style.color = bE.pR
				}, wH.sG(new tm([aSI.button])), sK.push(wH))
			}(sK),
			function(sK) {
				var wH, sE, aSQ, eJ, aSR;
				data.aRr || bm.yM.get().length && ((wH = new s2).s5(L(214)), eJ = 0, aSR = function() {
					var aFQ = bm.yM.get().length;
					aSQ[0].sj(eJ === aFQ ? bE.pd : bE.po), aSQ[1].sj(eJ === aFQ ? bE.pd : bE.q8)
				}, aSQ = [new x(L(215), function() {
					u.v(8, void 0, new ud(25, {
						action: 0,
						ua: bm.yM.get()[eJ],
						ub: 0
					}))
				}, bE.pd, 1), new x(L(216), function() {
					bm.yM.yb(eJ), sE.sF[eJ].remove(), sE.sF.splice(eJ, 1);
					for (var aC = eJ; aC < sE.sF.length; aC++) sE.sF[aC].name = "" + aC;
					bm.yM.get().length && (eJ = Math.max(eJ - 1, 0), sE.sF[eJ].textContent = sE.sF[eJ].textContent.replace("⚪", "🟢")), aSR()
				}, bE.pd, 1)], aSR(), sE = new xf(bm.yM.yY(), function(aC) {
					eJ = aC, aSR()
				}), __fx.followedAccounts.decorate(sE.sF, bm.yM.get()), sE.sF[0].style.marginTop = "0.5em", wH.sD(sE), wH.sG(new tm([aSQ[0].button])), wH.sG(new tm([new x("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(eJ)
				}).button])), wH.sG(new tm([aSQ[1].button])), sK.push(wH))
			}(sK), aRt(sK, 0), sK
	}())
}

function aRc() {
	var aT4, aT5, aT6, sK;

	function aT7() {
		aT9(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aRo()[19] = null, u.a4U()
	}

	function aT9() {
		2 === aE.data.aIncomeType ? (bD.sX.a61(aT6.yE(), aE.data.aIncomeData, 255), bD.sX.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aT4.show(), this.resize()
	}, this.ta = function() {
		aT4.ta()
	}, this.resize = function() {
		aT4.resize(), aT5.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aT4.xq[0].sg()
	}, aT4 = new xj(L(309), [new x("⬅️ " + L(43), aT7)]), aT5 = new sI(aT4.xp, (function(sK) {
		var wH = new s2;
		wH.s5(L(310)), wH.sD(new xf({
			oP: [L(311), L(312), L(313)],
			value: aE.data.aIncomeType
		}, function(eJ) {
			aT9(), 2 !== eJ || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fX)), aE.data.aIncomeType = eJ, u.v(22)
		})), sK.push(wH)
	}(sK = []), function(sK) {
		var wH;
		1 === aE.data.aIncomeType && ((wH = new s2).s5("Value"), wH.sG(new tC({
			eJ: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ik(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), sK.push(wH))
	}(sK), function(sK) {
		var wH;
		2 === aE.data.aIncomeType && ((wH = new s2).s5("Data"), (aT6 = new y7(0, 1, 0, 1)).yD(bD.tN.a7Z(aE.data.aIncomeData, 4)), wH.sG(aT6), sK.push(wH))
	}(sK), sK))
}

function aRf() {
	var aT4, aT5, aT6;

	function aT7() {
		aT9(), 3 !== aE.data.botDifficultyType || bD.sX.a5p(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aRo()[19] = null, u.a4U()
	}

	function aT9() {
		3 === aE.data.botDifficultyType && bD.sX.a61(aT6.yE(), aE.data.botDifficultyData, aF.l6.length - 1)
	}

	function aTE(sK, eJ) {
		var wH = new s2,
			value = (wH.s5(eJ < 0 ? L(68) : L(67) + " " + bj.a3f[eJ % 9]), 0 <= eJ && (wH.sB(L(316) + ": " + aE.data.teamPlayerCount[eJ]).style.marginBottom = "1em"), eJ < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eJ]);
		wH.sD(new xf({
			oP: aF.l6,
			value: value
		}, function(iS) {
			eJ < 0 ? aE.data.botDifficultyValue = iS : aE.data.botDifficultyTeam[eJ] = iS
		})), sK.push(wH)
	}
	this.show = function() {
		aT4.show(), this.resize()
	}, this.ta = function() {
		aT4.ta()
	}, this.resize = function() {
		aT4.resize(), aT5.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aT4.xq[0].sg()
	}, aT4 = new xj(L(68), [new x("⬅️ " + L(43), aT7)]), aT5 = new sI(aT4.xp, function() {
		var sK = [];
		if (function(sK) {
				var wH = new s2,
					oP = (wH.s5(L(310)), [L(312), L(314), L(315), L(313)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), oP.splice(2, 1));
				wH.sD(new xf({
					oP: oP,
					value: value
				}, function(eJ) {
					aT9(), aE.data.botDifficultyType = eJ, 0 === aE.data.gameMode && 2 === eJ && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fX)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), sK.push(wH)
			}(sK), 0 === aE.data.botDifficultyType) aTE(sK, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aTE(sK, aC);
		else 3 === aE.data.botDifficultyType && ! function(sK) {
			var wH = new s2;
			wH.s5("Data"), (aT6 = new y7(0, 1, 0, 1)).yD(bD.tN.a7Z(aE.data.botDifficultyData, 8)), wH.sG(aT6), sK.push(wH)
		}(sK);
		return sK
	}())
}

function aTF(data) {
	var aRp, aTG, aTH, aTI, aTJ, aTK, aTL, colors, aTM, aTN, aTO = 0,
		aTP = 0,
		aTQ = !1,
		aTR = !1,
		aTS = [1, 5, 60, 240, 1440, 10080, 43200];

	function aTw(mA, mB) {
		! function(mA, mB) {
			return aTG < mA && mA < aTG + aTI && aTH < mB && mB < aTH + aTJ
		}(aTO = mA, aTP = mB) ? (aTQ && (bi.ds = !0), aTQ = !1) : (aTQ = !0, bi.ds = !0)
	}
	this.show = function() {
		aTR = bm.buffer.data[127].value, aRp.show(), this.resize()
	}, this.ta = function() {
		aRp.ta()
	}, this.resize = function() {
		aRp.resize();
		var ek = i.l,
			xx = aRp.xu(),
			aTb = ek * xx.xw,
			ek = ek * xx.td;
		aTK = bD.sP.uz(.06), aTL = bD.sP.uz(.04), aTG = bD.sP.uz(.06), aTH = ek + aTK, aTI = i.j - aTG - aTL, aTJ = aTb + ek - aTH - aTL
	}, this.xy = function() {
		aRp.xy(),
			function() {
				var aC, aTY, h3, fh, ft, h = data.data,
					aTf = 1,
					aTg = .125,
					aTh = aTR ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aTY = h[aC].aTY, h3 = aTY.length, aTf = Math.max(h3, aTf), ft = 0; ft < h3; ft++) aTg = Math.max(aTY[ft], aTg), aTh = Math.min(aTY[ft], aTh);
				var nz = aTH + aTJ,
					a1I = aTJ / (aTg - aTh),
					a1H = 1 / (aTf - 1);
				for (xz.lineWidth = bf.a2K, aC = 0; aC < h.length; aC++) {
					for (aTY = h[aC].aTY, h3 = aTY.length, fh = aTG, xz.beginPath(), xz.moveTo(fh + aTI, nz - a1I * (aTY[h3 - 1] - aTh)), ft = h3 - 2; 0 <= ft; ft--) xz.lineTo(fh + a1H * ft * aTI, nz - a1I * (aTY[ft] - aTh));
					xz.strokeStyle = colors[aC], xz.stroke()
				}(function(aTh, aTg, nz, a1I) {
					xz.font = bD.sP.uA(0, .25 * aTG), bD.sP.textBaseline(xz, 1), bD.sP.textAlign(xz, 2), xz.fillStyle = colors[0];
					for (var fh = .92 * aTG, aC = 0; aC < 3; aC++) {
						var g2 = aTh + aC * (aTg - aTh) / 2;
						xz.fillText((g2 / 1e3).toFixed(3), fh, nz - a1I * (g2 - aTh))
					}
				})(aTh, aTg, nz, a1I),
				function(aTf) {
					var fj = aTH + aTJ + .15 * aTL;
					xz.font = bD.sP.uA(0, Math.min(.4 * aTL, .028 * i.j)), bD.sP.textBaseline(xz, 0), bD.sP.textAlign(xz, 2), xz.fillStyle = colors[0], xz.fillText(bD.a5g.a6V(aTM), aTG + aTI, fj), bD.sP.textAlign(xz, 0), xz.fillText(bD.a5g.a6V(
						new Date(aTN.getTime() - 6e4 * (aTf - 1) * aTS[data.aTX])), aTG, fj)
				}(aTf),
				function(aTf, aTh, aTg) {
					if (aTQ && !(aTf < 2)) {
						for (var aC3, eJ = (aTO - aTG) / aTI * (aTf - 1), aTk = Math.floor(eJ), aTl = Math.floor(1 + eJ), aTm = eJ - aTk, aTn = 1e5, aTo = -1, aTp = -1, aTq = aTg - (aTg - aTh) * (aTP - aTH) / aTJ, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aFw, aTY = h[aC].aTY;
							aTY.length <= aTl || (aTY = aTY[aTk] + aTm * (aTY[aTl] - aTY[aTk]), (aFw = Math.abs(aTq - aTY)) < aTn && (aTn = aFw, aTo = aC, aTp = aTY))
						} - 1 !== aTo && (aTg = aTH + aTJ - (aTp - aTh) / (aTg - aTh) * aTJ, xz.lineWidth = .5 * bf.a2K, xz.strokeStyle = colors[aTo], xz.beginPath(), xz.moveTo(aTG, aTg), xz.lineTo(aTO, aTg), xz.lineTo(aTO, aTH + aTJ), xz
							.stroke(), xz.beginPath(), xz.arc(aTO, aTg, .1 * aTG, 0, 2 * Math.PI), xz.fillStyle = colors[aTo], xz.fill(), aTh = aTH + aTJ + .15 * aTL, bD.sP.textAlign(xz, 1), aC3 = aTf - 2 < eJ ? (aC3 = aTN.getTime() - 6e4 *
								aTS[data.aTX], new Date(aC3 + (eJ - (aTf - 2)) * (aTM.getTime() - aC3))) : new Date(aTN.getTime() - 6e4 * (aTf - eJ - 1) * aTS[data.aTX]), aTf = bD.a5g.a6V(aC3), eJ = bD.sP.measureText(aTf), aC3 = bO.ik(aTO,
								aTG + .5 * eJ, aTG + aTI - .5 * eJ), xz.fillStyle = bD.color.pJ(70, 50, 20), xz.fillRect(aC3 - .52 * eJ, aTH + aTJ, 1.04 * eJ, .55 * aTL), xz.fillStyle = colors[0], xz.fillText(aTf, aC3, aTh), xz.font = bD.sP
							.uA(0, .25 * aTG), bD.sP.textBaseline(xz, 1), bD.sP.textAlign(xz, 2), aC3 = .92 * aTG, aTf = (aTp / 1e3).toFixed(3), eJ = bD.sP.measureText(aTf), aTh = aC3 - 1.04 * eJ, xz.fillStyle = bD.color.pJ(70, 50, 20), xz
							.fillRect(aTh, aTg - .1625 * aTG, aTG - aTh, .275 * aTG), xz.fillStyle = colors[aTo], xz.fillText(aTf, aC3, aTg))
					}
				}(aTf, aTh, aTg)
			}(), xz.lineWidth = bf.a2K, xz.strokeStyle = bE.pR, xz.beginPath(), xz.moveTo(aTG, aTH), xz.lineTo(aTG, aTH + aTJ), xz.lineTo(aTG + aTI, aTH + aTJ), xz.stroke();
		var aC, fontSize = .5 * aTK,
			h = (xz.font = bD.sP.uA(0, fontSize), bD.sP.textBaseline(xz, 1), bD.sP.textAlign(xz, 0), data.data),
			fa = h.length,
			fj = aTH - .5 * aTK,
			s6 = "";
		for (aC = 0; aC < fa; aC++) s6 += h[aC].name + "  ";
		s6 = s6.trim();
		var aTt = bD.sP.measureText(s6),
			fh = .5 * (i.j - aTt);
		for (aTt > i.j && (fh = 0, xz.font = bD.sP.uA(0, i.j / aTt * fontSize)), aC = 0; aC < fa; aC++) xz.fillStyle = colors[aC], xz.fillText(h[aC].name, fh, fj), fh += bD.sP.measureText(h[aC].name + "  ")
	}, this.hn = function(mA, mB) {
		aTw(mA, mB)
	}, this.a4s = function(mA, mB) {
		aTw(mA, mB)
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	};
	var aC, eb, a6T, iS, fd = data.data,
		fa = fd.length,
		max = 1;
	for (aC = 0; aC < fa; aC++) max = Math.max(max, fd[aC].aTY.length);
	for (aC = 0; aC < fa; aC++)
		for (; fd[aC].aTY.length < max;) fd[aC].aTY.unshift(0);
	eb = new Date, a6T = 6e4 * eb.getTimezoneOffset(), iS = eb.getTime() - a6T, aTM = new Date(iS), 6 === data.aTX ? function(eb, a6T) {
		var aTa = eb.getUTCFullYear(),
			eb = eb.getUTCMonth() + 1;
		aTN = eb < 12 ? new Date(Date.UTC(aTa, eb) - a6T) : new Date(Date.UTC(aTa + 1, 0) - a6T)
	}(eb, a6T) : (a6T = 6e4 * aTS[data.aTX], aTN = data.aTX <= 4 ? new Date(iS + a6T - eb.getTime() % a6T) : new Date(iS + a6T - (eb.getTime() + 2592e5) % a6T)), iS = bD.color, colors = [bE.pR, iS.pJ(255, 0, 0), iS.pJ(0, 200, 0), iS.pJ(80, 80,
		255), iS.pJ(255, 255, 0), iS.pJ(255, 0, 255), iS.pJ(0, 255, 255), iS.pJ(255, 140, 0), iS.pJ(128, 128, 128), iS.pJ(0, 255, 140)], aRp = new xj(L(317) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aTX] + ", " + bD.a5g.a6S(aTM), [
		new x("⬅️ " + L(43), function() {
			u.v(1)
		}), new x(L(318), function() {
			u.v(14)
		})
	], !1)
}

function aRU() {
	var aRp, aRq, sK, aTx = -1;
	this.show = function() {
		aRp.show(), this.resize(), aTx = bm.buffer.data[125].value
	}, this.ta = function() {
		aRp.ta()
	}, this.resize = function() {
		aRp.resize(), aRq.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	}, aRp = new xj(L(319), [new x("⬅️ " + L(43), function() {
		aTx !== bm.buffer.data[125].value ? u.z.aTy() : u.aRn(13)
	})]), aRq = new sI(aRp.xp, ((sK = []).push(function() {
		var wH = new s2,
			aSK = (wH.s5(L(320)), wH.s7(L(321)), new x(L(322), function() {
				bm.qt.qu(130, 0), u.z.aTy()
			}, 0, 0, 1)),
			tB = new tC(bm.buffer.data[126], 0, function() {
				aSK.button.click()
			});
		return wH.sG(tB), tB.e.placeholder = "a,b,c", tB.e.style.marginTop = "0.5em", wH.sG(new tm([aSK.button])), wH
	}()), sK.push(function() {
		var wH = new s2,
			aSK = new x(L(322), function() {
				bm.qt.qu(130, 1), u.z.aTy()
			}, 0, 0, 1),
			aU3 = new tC(bm.buffer.data[129], 1, function() {
				aU3.e.focus()
			}),
			aU4 = new tC(bm.buffer.data[128], 1, function() {
				aSK.button.click()
			});
		return wH.s5(L(323)), wH.sG(aU4), aU4.e.style.marginBottom = "0.5em", wH.s5(L(324)), wH.sG(aU3), wH.sG(new tm([aSK.button])), wH
	}()), sK.push(function() {
		var wH = new s2;
		return wH.s5(L(325)), bm.buffer.data[125].oP = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], wH.sD(new xf(bm.buffer.data[125])), wH
	}()), sK.push(function() {
		var wH = new s2;
		return wH.s5(L(326)), wH.sG(new ti(bm.buffer.data[127], L(327))), wH
	}()), sK))
}

function aRT() {
	var aRp, aU5, aTI, aU6, aU7, aU8, colors = [0, 0, 0],
		aU9 = -1;

	function aUC(aC) {
		var aUD = aU5.fj + aC * (bf.gap + aU8);
		xz.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", xz.fillRect(aU6, aUD, colors[aC] * aU7, aU8), xz.strokeStyle = bE.pR, xz.strokeRect(aU6, aUD, aU7,
			aU8), xz.fillStyle = bE.pR, xz.font = bD.sP.uA(0, .32 * aU8), bD.sP.textBaseline(xz, 1), bD.sP.textAlign(xz, 0), xz.fillText(L(0 === aC ? 330 : 1 === aC ? 331 : 332) + aUA(aC), aU6 + bf.gap, aUD + .53 * aU8)
	}

	function aUA(aC, aUE) {
		return aUE = aUE || 256, bO.ik(Math.floor(aUE * colors[aC]), 0, aUE - 1)
	}

	function a5M(mA, mB) {
		return !(mA < aU6 || mB < aU5.fj || mA > aU5.fh + aU5.j || mB > aU5.fj + aU5.k)
	}
	this.show = function() {
		var g2 = bm.buffer.data[121].value;
		colors[0] = (g2 >> 12) / 63, colors[1] = (g2 >> 6 & 63) / 63, colors[2] = (63 & g2) / 63, aRp.show(), this.resize()
	}, this.ta = function() {
		bm.qt.qu(121, (aUA(0, 64) << 12) + (aUA(1, 64) << 6) + aUA(2, 64)), aRp.ta()
	}, this.resize = function() {
		aRp.resize(), aU5.resize();
		var ek = i.l,
			xx = aRp.xu(),
			aUB = (aU5.fj = Math.max(aU5.fj, ek * xx.td + bf.gap), ek * xx.xw - 2 * bf.gap);
		aU5.k = Math.min(aU5.k, aUB), aU5.j = 2 * aU5.k, aU5.fj = ek * xx.td + .5 * (ek * xx.xw - aU5.k), aU5.fh = .5 * (i.j - aU5.j), aTI = .25 * aU5.j, aU6 = aU5.fh + aTI + bf.gap, aU7 = aU5.j - aTI - bf.gap, aU8 = (aU5.k - 2 * bf.gap) / 3
	}, this.xy = function() {
		var eI, uy, fu;
		aRp.xy(), xz.lineWidth = bf.a2K, eI = aUA(0), uy = aUA(1), fu = aUA(2), xz.fillStyle = "rgb(" + eI + "," + uy + "," + fu + ")", xz.fillRect(aU5.fh, aU5.fj, aTI, aU5.k), xz.strokeStyle = bE.pR, xz.strokeRect(aU5.fh, aU5.fj, aTI, aU5.k), xz
			.fillStyle = eI + uy + fu < 306 && uy < 150 ? bE.pR : bE.pI, bD.sP.textBaseline(xz, 1), bD.sP.textAlign(xz, 1), xz.font = bD.sP.uA(0, .1 * aU5.k), xz.rotate(-Math.PI / 2), xz.fillText(L(329), -aU5.fj - .5 * aU5.k, aU5.fh + .5 * aTI),
			xz.setTransform(1, 0, 0, 1, 0, 0), aUC(0), aUC(1), aUC(2)
	}, this.hn = function(mA, mB) {
		a5M(mA, mB) && (aU9 = bO.ik(Math.floor((mB - aU5.fj) / (aU8 + .75 * bf.gap)), 0, 2), colors[aU9] = bO.ik((mA - aU6) / aU7, 0, 1), bi.ds = !0)
	}, this.a4s = function(mA) {
		-1 !== aU9 && (colors[aU9] = bO.ik((mA - aU6) / aU7, 0, 1), bi.ds = !0)
	}, this.a4v = function(mA, mB, deltaY) {
		a5M(mA, mB) && (mA = bO.ik(Math.floor((mB - aU5.fj) / (aU8 + .75 * bf.gap)), 0, 2), colors[mA] = bO.ik(colors[mA] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.ds = !0)
	}, this.a5G = function() {
		0 <= aU9 && (aU9 = -1, bi.ds = !0)
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	}, aRp = new xj(L(328), [new x("⬅️ " + L(43), function() {
		u.z.aFr()
	})], !1), aU5 = new sz([.5, .25], [.5, .5], 1)
}

function aRb() {
	var aT4, aT5, aT6, p1;

	function aT7() {
		aT9(), u.aRo()[19] = null, u.a4U()
	}

	function aUF() {
		aT9(), u.v(21)
	}

	function aT9() {
		1 === aE.data.gameMode ? aE.a7q.a7v() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.sX.a61(aT6.yE(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aT4.show(), this.resize()
	}, this.ta = function() {
		aT4.ta()
	}, this.resize = function() {
		aT4.resize(), aT5.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aT4.xq[0].sg()
	}, p1 = [new x("⬅️ " + L(43), aT7)], 1 === aE.data.gameMode && p1.push(new x(L(333), aUF, 1, 1)), aT4 = new xj(L(334), p1), aT5 = new sI(aT4.xp, (p1 = [], 0 === aE.data.gameMode ? (function(sK) {
		var wH = new s2;
		wH.s5(L(310)), wH.sD(new xf({
			oP: [L(335), L(313)],
			value: aE.data.colorsType
		}, function(eJ) {
			aT9(), aE.data.colorsType = eJ, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fX || (aE.data.colorsData = new Uint32Array(aE.fX)), u.v(21)
		})), sK.push(wH)
	}(p1), 1 === aE.data.colorsType && function(sK) {
		var wH = new s2;
		wH.s5("Data"), (aT6 = new y7(0, 1, 0, 1)).yD(bD.tN.a7Z(aE.data.colorsData, 1)), wH.sG(aT6), sK.push(wH)
	}(p1)) : (aE.a7q.a7v(), p1.push(function() {
		var wH = new s2;
		wH.s5(L(316));
		for (var aC = 0; aC < bj.a3f.length; aC++) {
			var iS = (aC + 1) % bj.a3f.length,
				e = wH.sB((0 == iS ? "" : "Team ") + bj.a3f[iS]);
			aC && (e.style.marginTop = "0.5em"), wH.sG(new tC({
				eJ: -1,
				value: aE.data.teamPlayerCount[iS]
			}, 1, 0, function(e) {
				aT4.xq[1].sj(0);
				var playerCount = bO.ik(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aUI] = playerCount
			})).e.aUI = iS
		}
		return wH
	}()), function(sK) {
		for (var wH = new s2, oP = (wH.s5(L(336)), []), aC = 0; aC < bj.a3f.length; aC++) {
			var iS = (aC + 1) % bj.a3f.length;
			oP.push(bj.a3f[iS])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		wH.sD(new xf({
			oP: oP,
			value: (aE.data.colorsData[0] % 16 + bj.a3f.length - 1) % bj.a3f.length
		}, function(eJ) {
			var eJ = (eJ + 1) % bj.a3f.length,
				aUJ = bj.aUK[eJ],
				aUJ = (aUJ[0] >> 2 << 12) + (aUJ[1] >> 2 << 6) + (aUJ[2] >> 2);
			aE.data.colorsData[0] = aUJ - (15 & aUJ) + eJ
		})), sK.push(wH)
	}(p1)), p1))
}

function ud(id, a7B, aUL) {
	var aRp, aUM;

	function aUR() {
		aUM.sL.innerHTML += "<br>" + L(339)
	}

	function aUa() {
		var fu = 1;
		u.v(4, 1, new w(L(340), L(341), !1, [new x("🔄 Reload", function() {
			fu && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), fu = 0
		}, bE.po)]))
	}

	function aUQ() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.dk(bG.aD), bm.qt.qu(110, __fx.passwordReset.getCustomPassword() || bI.f1
			.ue(bI.f1.uf(15))), b1.aIy.aUc()
	}
	this.aUN = !0, this.aUO = id, this.show = function() {
		aRp.show(), this.resize(), 15 === id ? (b1.z.aUP(id) ? aUQ : aUR)() : 16 === id ? b1.z.aUP(id) ? b1.eh.ei(2) : aUR() : 17 === id ? b1.z.aUP(id) ? b1.eh.ei(3) : aUR() : 18 === id ? (b1.z.close(0, 3253), b1.z.aJt(0, id, 0), aUR()) : 21 ===
			id ? b1.z.aUP(id) ? b1.aUS.aUT(a7B.ut, a7B.uu, a7B.uv) : aUR() : 22 === id ? b1.z.aUP(id) ? b1.aUS.aUU(a7B.ut, a7B.aUV, a7B.aUW) : aUR() : 23 === id ? b1.z.aUP(id) ? b1.aUS.aUX(a7B.aTX, a7B.a43) : aUR() : 24 === id ? b1.z.aUP(id) ? b1
			.aUS.aUY(a7B.aTX, a7B.uu, a7B.uv) : aUR() : 25 === id ? b1.z.aUP(id) ? b1.aIy.aSO(a7B) : aUR() : 28 === id ? b1.z.aUP(id) ? b1.aUS.aUZ(a7B.ut, a7B.aUV, a7B.aUW) : aUR() : 29 === id ? b1.z.aUP(id) ? b1.aIy.aSk(a7B) : aUR() : 30 ===
			id && (b1.z.aUP(id) ? bA.aFm() || aUa() : aUR())
	}, this.aUb = function() {
		15 === id ? aUQ() : 16 === id ? b1.eh.ei(2) : 17 === id ? b1.eh.ei(3) : 18 === id ? u.v(8, this.a4a, new ud(16)) : 21 === id ? b1.aUS.aUT(a7B.ut, a7B.uu, a7B.uv) : 22 === id ? b1.aUS.aUU(a7B.ut, a7B.aUV, a7B.aUW) : 23 === id ? b1.aUS.aUX(
			a7B.aTX, a7B.a43) : 24 === id ? b1.aUS.aUY(a7B.aTX, a7B.uu, a7B.uv) : 25 === id ? b1.aIy.aSO(a7B) : 28 === id ? b1.aUS.aUZ(a7B.ut, a7B.aUV, a7B.aUW) : 29 === id ? b1.aIy.aSk(a7B) : 30 === id ? bA.aFm() || aUa() : 1e3 === id && (
			this.aUO = id = 25, b1.aIy.aSO(a7B))
	}, this.aFq = function(code, by, data) {
		!by && code !== id || (15 === code || 16 === code ? u.v(7, this.a4a) : 17 === code ? (b1.z.close(0, 3252), bm.z.yx(0), bm.buffer.data[117].oP && 0 < bm.buffer.data[117].oP.length && (by = bm.z.yy(0)) ? (bm.qt.qu(105, by.ua), bm.qt.qu(106,
			by.password), u.v(8, this.a4a, new ud(16))) : (bm.qt.qu(105, ""), u.z.aFr())) : 21 === code ? u.v(10, this.a4a, new aEK(data)) : 23 === code ? u.v(13, this.a4a, new aTF({
			data: data,
			aTX: a7B.aTX
		})) : 25 === code ? (u.z.aRV.ua = a7B.ua, bm.yM.nK(a7B.ua), u.v(15, this.a4a)) : 30 === code && (data ? u.v(1) : aUa()))
	}, this.ta = function() {
		aRp.ta()
	}, this.resize = function() {
		aRp.resize(), aUM.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	}, aRp = new xj(L(337), [new x("⬅️ " + L(43), function() {
		aUL ? u.v(29) : u.z.aFr()
	})]), aUM = new tl(aRp.xp, L(338))
}

function aRZ() {
	var aT4, aT5, sK;

	function aUf() {
		var h3;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a7q.a7v()), h3 = bD.sX.a5v(aE.data.teamPlayerCount, 0), aE.data.numberTeams = h3) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aT7() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aUh(), aE.data.canvas = null, u.v(5, 5)
	}

	function aUh() {
		bC.rj.dk(), bm.qt.qu(156, bC.a86.a2m())
	}

	function aUd() {
		aE.data.isReplay = 0, aUh(), aE.a7q.a8I(), ab.aK4(), aE.a7q.a8F(), aE.data.canvas = 2 === aE.data.mapType ? bV.zt : null, aE.a7u(), aE.a7s = 1
	}

	function aUt() {
		aUf();
		for (var h = [aUk(), aUl(), aUm()], aC = 3; aC < 6; aC++) u.removeChild(aT5.sL, aT5.sM[aC].s4), aT5.sM[aC] = h[aC - 3], aT5.sL.appendChild(aT5.sM[aC].s4);
		aT5.resize()
	}

	function aUk() {
		var aUu, wH = new s2;
		return wH.s5(L(334)), aUu = 0 === aE.data.gameMode ? [L(335), L(313)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), wH.sB(aUu), wH.sG(new tm([new x(L(345), function() {
			u.v(21)
		}).button])), wH
	}

	function aUl() {
		var wH = new s2,
			h = (wH.s5(L(68)), [L(312) + ": " + aF.l6[aE.data.botDifficultyValue], L(314), L(315), L(313)]);
		return wH.sB(h[aE.data.botDifficultyType]), wH.sG(new tm([new x(L(345), function() {
			u.v(25)
		}).button])), wH
	}

	function aUm() {
		var wH = new s2,
			h = (wH.s5("Spawning"), [L(335), L(347), L(313)]);
		return wH.sB(h[aE.data.spawningType]), wH.sG(new tm([new x(L(345), function() {
			u.v(24)
		}).button])), wH
	}
	this.show = function() {
		aT4.show(), this.resize(), aT4.xp.scrollTop = u.z.uU[0]
	}, this.ta = function() {
		u.z.uU[0] = aT4.xp.scrollTop, aT4.ta()
	}, this.resize = function() {
		aT4.resize(), aT5.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aT4.xq[0].sg()
	}, aT4 = new xj("🔧 " + L(342), [new x("⬅️ " + L(43), aT7), new x(L(343), aUd)]), aUf(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.zt : 1 === aE.data.mapType ? aE.data.canvas = bV.aPE(bV.a8G(aE.data), 0).zt : (aE.data
		.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aPE(bV.a8G(aE.data), aE.data.mapSeed).zt)), aT5 = new sI(aT4.xp, (function(sK) {
		var wH = new s2,
			a6B = (wH.s5(L(344)), aE.data.canvas);
		a6B.style.width = "100%", wH.sG({
			e: a6B
		}), wH.sG(new tm([new x(L(345), function() {
			u.v(20)
		}).button])), sK.push(wH)
	}(sK = []), function(sK) {
		var wH = new s2;
		wH.s5(L(316)), wH.sG(new tC({
			eJ: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.ik(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.sX.a5v(aE.data.teamPlayerCount, 0), aE.a7q.a7v(), bD.sX.a5v(aE.data.teamPlayerCount, 0) !== e) && aUt()
		})), sK.push(wH)
	}(sK), function(sK) {
		var wH = new s2;
		wH.s5(L(346)), wH.sD(new xf({
			oP: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eJ) {
			aE.data.gameMode !== eJ && (1 === (aE.data.gameMode = eJ) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aUt())
		})), sK.push(wH)
	}(sK), sK.push(aUk()), sK.push(aUl()), sK.push(aUm()), function(sK) {
		var wH = new s2,
			h = (wH.s5(L(348)), [L(349), L(350), L(313)]);
		wH.sB(h[aE.data.playerNamesType]), wH.sG(new tm([new x(L(345), function() {
			u.v(23)
		}).button])), sK.push(wH)
	}(sK), function(sK) {
		var wH = new s2,
			h = (wH.s5(L(309)), [L(311), L(312) + ": " + aE.data.aIncomeValue, L(313)]);
		wH.sB(h[aE.data.aIncomeType]), wH.sG(new tm([new x(L(345), function() {
			u.v(22)
		}).button])), sK.push(wH)
	}(sK), function(sK) {
		var wH = new s2,
			h = (wH.s5(L(351)), [L(311), L(312) + ": " + aE.data.tIncomeValue, L(313)]);
		wH.sB(h[aE.data.tIncomeType]), wH.sG(new tm([new x(L(345), function() {
			u.v(26)
		}).button])), sK.push(wH)
	}(sK), function(sK) {
		var wH = new s2,
			h = (wH.s5(L(352)), [L(311), L(312) + ": " + aE.data.iIncomeValue, L(313)]);
		wH.sB(h[aE.data.iIncomeType]), wH.sG(new tm([new x(L(345), function() {
			u.v(27)
		}).button])), sK.push(wH)
	}(sK), function(sK) {
		var wH = new s2,
			h = (wH.s5(L(353)), [L(311), L(312) + ": " + aE.data.sResourcesValue, L(313)]);
		wH.sB(h[aE.data.sResourcesType]), wH.sG(new tm([new x(L(345), function() {
			u.v(28)
		}).button])), sK.push(wH)
	}(sK), function(sK) {
		var wH = new s2;
		wH.s5(L(354)), wH.sG(new tm([new x(L(355), function() {
			u.y(), aE.a7q.a8J(), u.z.uU[0] = 0, u.v(19)
		}).button])), wH.sG(new tm([new x(L(356), function() {
			bp.aMR()
		}).button])), wH.sG(new tm([new x(L(357), function() {
			return bp.aMT(), !0
		}).button])), sK.push(wH)
	}(sK), sK))
}

function aRk() {
	var aT4, tH = !0;

	function tT(tS, a8N) {
		var s4 = document.createElement("div"),
			aUw = document.createElement("span"),
			aUx = document.createElement("span");
		aUw.textContent = aX.aEg(a8N.ea) + ":", aUw.style.color = bE.pg, aUw.style.paddingRight = "0.4em", aUw.style.display = "table-cell", aUw.style.width = "6ch", aUw.style.textAlign = "end", s4.appendChild(aUw), aUx.textContent = a8N.s6, s4
			.appendChild(aUx), s4.style.display = "table", a8N.r8 && function(s4, r8) {
				{
					var aLo;
					r8 >= 1024 - ak.tZ.a27 ? ((aLo = document.createElement("img")).src = ak.zw.a1v[r8 - 1024 + ak.tZ.a27].toDataURL(), aLo.style.width = "1.5em", aLo.style.height = "1.5em", aLo.style.verticalAlign = "middle", s4.appendChild(aLo)) :
						((aLo = document.createElement("span")).textContent = ak.tZ.a2M(r8), aLo.style.display = "inline-block", aLo.style.fontSize = "1.5em", aLo.style.lineHeight = "1em", aLo.style.verticalAlign = "middle", s4.appendChild(aLo))
				}
			}(s4, a8N.r8), tS.appendChild(s4)
	}

	function tW() {
		tH && (aT4.xp.scrollTop = aT4.xp.scrollHeight)
	}
	this.clear = function() {
		aT4.xp.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a9G = bt.a8Q(), fa = a9G.length, tS = document.createDocumentFragment(), aC = 0; aC < fa; aC++) tT(tS, a9G[aC]);
		aT4.xp.appendChild(tS), tW(), aT4.show(), this.resize(), tH = !0, tW()
	}, this.ta = function() {
		aT4.ta()
	}, this.resize = function() {
		aT4.resize(), aT4.xp.style.padding = "0.4em " + bD.sP.sY(bf.sV)
	}, this.a5Q = function(ek) {
		2 === ek && aT4.xq[0].sg()
	}, this.a1o = function(a8N) {
		var tS = document.createDocumentFragment();
		tT(tS, a8N), aT4.xp.appendChild(tS), tW()
	}, (aT4 = new xj(L(358), [new x("⬅️ " + L(43), function() {
		u.aRn(1)
	})])).xp.style.overflowY = "auto", aT4.xp.addEventListener("scroll", function() {
		tH = aT4.xp.scrollTop >= aT4.xp.scrollHeight - aT4.xp.clientHeight - 2
	})
}

function aRh() {
	var aT4, aT5, aT6, sK;

	function aT7() {
		aT9(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aRo()[19] = null, u.a4U()
	}

	function aT9() {
		2 === aE.data.iIncomeType && bD.sX.a61(aT6.yE(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aT4.show(), this.resize()
	}, this.ta = function() {
		aT4.ta()
	}, this.resize = function() {
		aT4.resize(), aT5.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aT4.xq[0].sg()
	}, aT4 = new xj(L(352), [new x("⬅️ " + L(43), aT7)]), aT5 = new sI(aT4.xp, (function(sK) {
		var wH = new s2;
		wH.s5(L(310)), wH.sD(new xf({
			oP: [L(311), L(312), L(313)],
			value: aE.data.iIncomeType
		}, function(eJ) {
			aT9(), 2 !== eJ || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fX), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eJ, u.v(27)
		})), sK.push(wH)
	}(sK = []), function(sK) {
		var wH;
		1 === aE.data.iIncomeType && ((wH = new s2).s5("Value"), wH.sG(new tC({
			eJ: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ik(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), sK.push(wH))
	}(sK), function(sK) {
		var wH;
		2 === aE.data.iIncomeType && ((wH = new s2).s5("Data"), (aT6 = new y7(0, 1, 0, 1)).yD(bD.tN.a7Z(aE.data.iIncomeData, 4)), wH.sG(aT6), sK.push(wH))
	}(sK), sK))
}

function aRP() {
	var aUz, aV0, aU5, tB, aV1, u5 = 0;
	this.aKa = new uj, aU5 = new sz([.45, .27], [.5, .5], 2 / 3), aV0 = [new x("⚔️<br>" + L(359), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aV2(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.pu), new x("🗡️<br>" + L(342), function() {
			aV2(1)
		}, bE.qE), new x("🔑<br>" + L(360), function() {
			aV2(2)
		}, bE.qX), new x("☰<br>" + L(361), function() {
			aV2(3)
		}, bE.pe), new x("", function() {
			u.v(12)
		}, bE.pN, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], tB = new tC(bm.buffer.data[122]);
	for (var aC = 0; aC < aV0.length; aC++) aV0[aC].button.style.position = "absolute";

	function aV2(eJ) {
		a1.a2.setState(10), ac.v2() || ac.aKR(), 0 === eJ ? u.z.a89(1) : 1 === eJ ? (bC.aMl.zf(bm.buffer.data[156].value, 1) || aE.a7q.a8J(), u.v(19)) : 2 === eJ ? 0 !== a1.id || bm.buffer.data[140].value ? u.v(8, u.uc, new ud(16)) : u.z.aV3(u.uc,
			16) : 3 === eJ && u.v(1)
	}
	tB.e.style.position = "absolute", tB.e.style.textAlign = "center", tB.e.placeholder = L(362), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aKa.show(), aV0[4].sj(bD.color.a6I(bm.buffer.data[121].value)), this.resize(), document.body.appendChild(tB.e);
		for (var aC = 0; aC < aV0.length; aC++) document.body.appendChild(aV0[aC].button);
		1 !== a1.id || a1.e4 < 5 || (aV1 && bi.ea > aV1 + 144e5 ? a1.yg.setState(14) : aV1 = bi.ea)
	}, this.ta = function() {
		this.aKa.ta(), u.removeChild(document.body, tB.e);
		for (var aC = 0; aC < aV0.length; aC++) u.removeChild(document.body, aV0[aC].button)
	}, this.resize = function() {
		this.aKa.resize(), this.aKa.resize(), aU5.resize();
		var gap = .5 * bf.gap,
			vV = 10 / 99 * .84 * aU5.j,
			aV6 = .16 * aU5.k,
			aCb = .19 * aU5.j,
			fh = aU5.fh + aCb,
			vV = aU5.fj + vV + 3 * gap,
			j = .5 * (aU5.j - gap) - aCb,
			aCb = aU5.j - 2 * aCb - aV6 - gap,
			aCb = (bD.sP.v0(tB.e, fh, vV, aCb, aV6), bD.sP.v0(aV0[4].button, fh + aCb + gap, vV, aV6, aV6), u5 = vV, .5 * (aU5.fj + aU5.k - (vV += aV6 + gap) - gap));
		bD.sP.v0(aV0[0].button, fh, vV, j, aCb), bD.sP.v0(aV0[1].button, fh + j + gap, vV, j, aCb), bD.sP.v0(aV0[2].button, fh, vV + aCb + gap, j, aCb), bD.sP.v0(aV0[3].button, fh + j + gap, vV + aCb + gap, j, aCb);
		bD.sP.v0(aV0[5].button, fh, vV + aCb * 2 + gap * 2, j * 2 + gap, aCb / 3);
		bD.sP.v0(aV0[6].button, fh, vV + aCb * 2.33 + gap * 3, j * 2 + gap, aCb / 3);
		for (var aC = 0; aC < aV0.length; aC++) aV0[aC].button.style.font = bD.sP.uA(0, bD.sP.xQ(.065 * aU5.k)), bD.sP.sZ(aV0[aC].button, 5);
		tB.e.style.font = bD.sP.uA(0, bD.sP.xQ(.08 * aU5.k)), bD.sP.sZ(tB.e, 5)
	}, this.xy = function() {
		if (ab.aK8(), aU.xy(), fa = Math.floor((a1.a2.il() ? .018 : .0137) * i.im), xz.font = bD.sP.uA(0, Math.max(5, fa)), bD.sP.textBaseline(xz, 0), bD.sP.textAlign(xz, 2), xz.fillStyle = bE.pR, xz.fillText(m.e4, i.j, 0), text = "Win count: " +
			__fx.wins.count, textLength = xz.measureText(text).width, fa = Math.max(5, fa), xz.textAlign = "left", xz.textBaseline = "middle", xz.fillText(text, xz.canvas.width - textLength - fa / 2, 2 * fa), aP.xy(u5), bb.xy(), ac.v2()) {
			xz.imageSmoothingEnabled = !1;
			var text = ac.wB("territorial.io"),
				textLength = .84 * aU5.j / text.width;
			xz.setTransform(textLength, 0, 0, textLength, aU5.fh + .08 * aU5.j, aU5.fj), aUz = aUz || bD.ou.a79(text, bD.ou.a7G, [0, 0, 0]);
			for (var fh = -1; fh <= 1; fh += 2)
				for (var fj = -1; fj <= 1; fj += 2) xz.drawImage(aUz, fh, fj);
			xz.drawImage(text, 0, 0), xz.imageSmoothingEnabled = !0;
			var fa = ac.wB("logo"),
				aV9 = .6666 * textLength * text.height / fa.height,
				oB = .5 * i.j,
				oC = aU5.fj + .5 * textLength * text.height - .5 * aV9 * fa.height;
			xz.setTransform(aV9, 0, 0, aV9, oB - .6 * textLength * text.width, oC), xz.drawImage(fa, 0, 0), xz.setTransform(aV9, 0, 0, aV9, oB + .6 * textLength * text.width - aV9 * fa.width, oC), xz.drawImage(fa, 0, 0), xz.setTransform(1, 0, 0,
				1, 0, 0), xz.imageSmoothingEnabled = !0
		}
	}
}

function aRW() {
	var aRp, aVA, aVB, xk;

	function aVC(aC) {
		u.v(8, u.uc, new ud(21, {
			ut: aC,
			uu: 0,
			uv: 10
		}))
	}
	this.show = function() {
		aRp.show(), this.resize()
	}, this.ta = function() {
		aRp.ta()
	}, this.resize = function() {
		aRp.resize(), aVA.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	}, aVB = [new x(L(363), function() {
		aVC(1)
	}, 0, 0, 1), new x(L(364), function() {
		aVC(2)
	}, 0, 0, 1), new x(L(365), function() {
		aVC(3)
	}, 0, 0, 1), new x(L(366), function() {
		aVC(0)
	}, 0, 0, 1), new x(L(367), function() {
		aVC(9)
	}, 0, 0, 1), new x(L(368), function() {
		aVC(10)
	}, 0, 0, 1), new x(L(369), function() {
		aVC(11)
	}, 0, 0, 1), new x(L(370), function() {
		aVC(13)
	}, 0, 0, 1)], xk = [new x("⬅️ " + L(43), function() {
		u.a4U()
	})], aRp = new xj(L(371), xk), aVA = new sx(aVB, aRp.xp)
}

function aGD(title, sC, aVD) {
	var aRp, aUM;
	this.show = function() {
		aRp.show(), this.resize()
	}, this.ta = function() {
		aRp.ta()
	}, this.resize = function() {
		aRp.resize(), aUM.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	}, aVD = aVD || [new x("⬅️ " + L(43), function() {
		u.a4U()
	}, bE.q8)], aRp = new xj(title, aVD), aUM = new tl(aRp.xp, sC), bD.sP.textAlign(aRp.xp.style, 1)
}

function aEK(data) {
	var aRp, aVE;

	function aVN(fa) {
		return fa < 60 ? 1 === fa ? fa + " Second" : fa + " Seconds" : fa < 3600 ? 1 === (fa = Math.floor(fa / 60)) ? fa + " Minute" : fa + " Minutes" : fa < 172800 ? 1 === (fa = Math.floor(fa / 3600)) ? fa + " Hour" : fa + " Hours" : (fa = Math
			.floor(fa / 172800)) + " Days"
	}

	function aVG(kA) {
		var fa = data.data.length;
		if (fa) {
			for (var uu, max = min = parseInt(data.data[0][0]), aC = 1; aC < fa; aC++) var aIW = parseInt(data.data[aC][0]),
				min = Math.min(aIW, min),
				max = Math.max(aIW, max);
			uu = kA < 0 ? min + kA : max + 1, u.v(8, u.a4Z().a4a, new ud(21, {
				ut: data.ut,
				uu: uu,
				uv: uu + Math.abs(kA)
			}))
		}
	}
	if (this.show = function() {
			aRp.show(), this.resize()
		}, this.ta = function() {
			aRp.ta()
		}, this.resize = function() {
			aRp.resize(), aVE.resize()
		}, this.a5Q = function(ek) {
			2 === ek && aRp.xq[0].sg()
		}, data.aEL) {
		aRp = new xj(L(26), [new x("⬅️ " + L(43), function() {
			u.a4U()
		})]);
		var fd = {
				uK: [],
				uQ: [L(384), L(385), L(386) + " ↗"],
				uX: [12, 50, 38]
			},
			a8D = aE.data.a8D;
		if (a8D) {
			for (var fa = a8D.length, uK = fd.uK, a1p = ah.a1p, aC = 0; aC < fa; aC++) uK.push([{
				g2: aC + 1 + ".",
				eb: 0
			}, {
				g2: a1p[aC],
				eb: 0
			}, {
				g2: bI.f1.a2b(a8D[aC], 5),
				eb: 1,
				ua: a8D[aC],
				ub: 0
			}]);
			aVE = new uJ(aRp.xp, fd, {
				uT: 1
			})
		} else aVE = new uJ(aRp.xp, fd)
	} else {
		var fd = data.data.length ? 0 : 1,
			aVD = [new x("⬅️ " + L(43), function() {
				u.a4U()
			}), new x(L(372), function() {
				aVG(-10)
			}, fd, 0, 1), new x(L(373), function() {
				aVG(10)
			}, fd, 0, 1), new x(L(318), function() {
				u.v(11, 10, new aVH({
					ut: data.ut
				}))
			})],
			uQ = [L(374), L(375), L(376), L(377), L(378), L(379), L(380), L(381), L(382), L(383), L(368), L(369), "Audit Log", L(370)];
		aRp = new xj(uQ[data.ut], aVD), ! function() {
			var aC, fd = {
					uK: []
				},
				uK = fd.uK,
				aVJ = data.data,
				fa = aVJ.length;
			fa && 0 === aVJ[0][0] && 0 <= (eJ = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.ut]) && (u.z.uw[eJ] = aVJ[0][1]);
			var oA = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.ut],
				a7M = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.ut],
				eJ = [
					[L(387), L(25) + " ↗", L(388)],
					[L(387), L(389), L(390), L(391) + " ↗"],
					[L(387), L(25) + " ↗", L(390)],
					[L(387), L(25) + " ↗", L(390)],
					[L(384), L(392), L(393) + " ↗", L(394) + " ↗", L(125)],
					[L(384), L(392), L(395) + " ↗", L(396) + " ↗", L(397)],
					[L(384), L(392), L(398) + " ↗", L(399) + " ↗", L(400)],
					[L(384), L(392), L(395) + " ↗", L(396) + " ↗", L(401)],
					[L(384), L(392), L(393) + " ↗", L(394) + " ↗", L(125)],
					[L(387), L(25) + " ↗", L(390)],
					[L(387), L(25) + " ↗", L(402)],
					[L(387), L(25) + " ↗", L(390)],
					[L(384), L(392), L(393) + " ↗", L(394) + " ↗", L(403)],
					[L(387), L(25) + " ↗", L(390)]
				];
			if (fd.uQ = eJ[data.ut], fd.uX = [
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
				][data.ut], 0 === data.ut || 2 === data.ut || 3 === data.ut || 9 === data.ut || 10 === data.ut || 11 === data.ut || 13 === data.ut)
				for (aC = 0; aC < fa; aC++) uK.push([{
					g2: aVJ[aC][0] + 1 + ".",
					eb: 0
				}, {
					g2: aVJ[aC][1],
					eb: 1,
					ua: aVJ[aC][4],
					ub: aVJ[aC][3]
				}, {
					g2: (oA * aVJ[aC][2]).toFixed(a7M),
					eb: 0
				}]);
			else if (12 === data.ut)
				for (aC = 0; aC < fa; aC++) {
					var aVM = aVJ[aC][3];
					uK.push([{
						g2: "" + aVJ[aC][0],
						eb: 0
					}, {
						g2: aVN(aVJ[aC][4]),
						eb: 0
					}, {
						g2: aVJ[aC][5],
						eb: 1,
						ua: aVJ[aC][1],
						ub: 0
					}, {
						g2: aVJ[aC][6],
						eb: 1,
						ua: aVJ[aC][2],
						ub: 0
					}, {
						g2: br.eP(aVM, bI.f1.a2b(aVJ[aC][1], 5)),
						eb: 0
					}])
				} else if (1 === data.ut)
					for (aC = 0; aC < fa; aC++) uK.push([{
						g2: aVJ[aC][0] + 1 + ".",
						eb: 0
					}, {
						g2: aVJ[aC][1],
						eb: 0
					}, {
						g2: (oA * aVJ[aC][2]).toFixed(a7M),
						eb: 0
					}, {
						g2: aVJ[aC][3],
						eb: 1,
						ua: aVJ[aC][5],
						ub: aVJ[aC][4]
					}]);
				else if (4 === data.ut || 5 === data.ut || 6 === data.ut || 7 === data.ut || 8 === data.ut)
				for (aC = 0; aC < fa; aC++) {
					var aVO = aVJ[aC][5];
					4 === data.ut || 8 === data.ut ? "100%" === (aVO = (aVO % 64 * 100 / (aVO >> 6)).toFixed(0) + "%") && (4 === data.ut ? aVO += " (" + L(404) + ")" : aVO += " (" + L(405) + ")") : 5 === data.ut ? 32768 <= aVO && (aVO = -(aVO -
						32768)) : aVO = (oA * aVO).toFixed(a7M), uK.push([{
						g2: "" + aVJ[aC][0],
						eb: 0
					}, {
						g2: aVN(aVJ[aC][6]),
						eb: 0
					}, {
						g2: aVJ[aC][7],
						eb: 1,
						ua: aVJ[aC][1],
						ub: aVJ[aC][2]
					}, {
						g2: aVJ[aC][8],
						eb: 1,
						ua: aVJ[aC][3],
						ub: aVJ[aC][4]
					}, {
						g2: "" + aVO,
						eb: 0
					}])
				}
			aVE = new uJ(aRp.xp, fd)
		}()
	}
}

function aVH(a7B) {
	var aRp, aRq, sK;
	this.show = function() {
		aRp.show(), this.resize()
	}, this.ta = function() {
		aRp.ta()
	}, this.resize = function() {
		aRp.resize(), aRq.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	}, aRp = new xj(L(406), [new x("⬅️ " + L(43), function() {
		u.aRn(10)
	})]), aRq = new sI(aRp.xp, ((sK = []).push(function() {
		var aSK, wH = new s2,
			aU3 = new tC(bm.buffer.data[132], 1, function() {
				aSK.button.click()
			}),
			aU4 = new tC(bm.buffer.data[131], 1, function() {
				aU3.e.focus()
			});
		wH.s5(L(323)), wH.sG(aU4), aU4.e.style.marginBottom = "0.8em", wH.s5(L(324)), wH.sG(aU3);
		return aSK = new x(L(322), function() {
			uu = Math.floor(aU4.e.value), uv = Math.floor(aU3.e.value);
			var uv, uu = {
				a5t: Math.min(uu, uv),
				aQw: Math.max(uu, uv)
			};
			u.v(8, u.a8P(10).a4a, new ud(21, {
				ut: a7B.ut,
				uu: uu.a5t,
				uv: uu.aQw
			}))
		}, 0, 0, 1), wH.sG(new tm([aSK.button])), wH
	}()), sK.push(function() {
		var aSK, wH = new s2,
			aU3 = new tC(bm.buffer.data[134], 1, function() {
				aSK.button.click()
			}),
			aU4 = new tC(bm.buffer.data[133], 0, function() {
				aU3.e.focus()
			});
		return wH.s5(1 === a7B.ut ? L(407) : L(408)), wH.sG(aU4), aU4.e.style.marginBottom = "0.8em", wH.s5(L(409)), wH.sG(aU3), aSK = new x(L(322), function() {
			var aUV = aU4.e.value.slice(0, 20),
				aUW = Math.abs(Math.floor(aU3.e.value));
			u.v(8, u.a8P(10).a4a, new ud(22, {
				ut: a7B.ut,
				aUV: aUV,
				aUW: aUW
			}))
		}, 0, 0, 1), wH.sG(new tm([aSK.button])), wH
	}()), sK.push(function() {
		var aSK, wH = new s2,
			aU3 = new tC(bm.buffer.data[152], 1, function() {
				aSK.button.click()
			}),
			aU4 = new tC(bm.buffer.data[151], 0, function() {
				aU3.e.focus()
			});
		return wH.s5(L(410)), wH.sG(aU4), aU4.e.style.marginBottom = "0.8em", wH.s5(L(409)), wH.sG(aU3), aSK = new x(L(322), function() {
			var aUV = aU4.e.value.slice(0, 5),
				aUW = Math.abs(Math.floor(aU3.e.value));
			u.v(8, u.a8P(10).a4a, new ud(28, {
				ut: a7B.ut,
				aUV: aUV,
				aUW: aUW
			}))
		}, 0, 0, 1), wH.sG(new tm([aSK.button])), wH
	}()), sK))
}

function aRj() {
	var aVS, aVT, aVU, aVV, aVW, aVX, v5, v6, aVY = new Array(2);

	function aVa(button) {
		button = new tL("", button, 1, 0);
		return button.tM.style.right = "0.2em", button.tM.style.textAlign = "left", button.tM.style.overflow = "hidden", button.tM.style.textOverflow = "ellipsis", button.tM.translate = !1, button
	}

	function aIM() {
		var aHV;
		!bq.f7 || (aHV = aVS.vG.tB.e.value.trim().slice(0, 127)).length < 1 || (aVS.vG.tB.e.value = "", bq.aGG.a3M(aHV))
	}

	function aVZ(vS) {
		var aVd = bq.z.aGZ;
		aVd !== vS && (aVb(aVd, 0), aVb(vS, 1), bq.z.aGZ = vS, 0 === aVd && b1.aH4.aH5(1), 0 === vS ? (b1.aH4.aH5(0), aVS.vG.nK()) : 1 === vS && aVS.vH.nK(), aVS.vR(vS), aVS.resize())
	}

	function aVb(vS, color) {
		v5.p1[vS].sj(color ? bE.pq : bE.qh), v5.p1[vS].button.classList.toggle("fx-selected", !!color)
	}
	this.aIe = function() {
			return aVS.vG
		}, this.aGG = function(ua) {
			aVZ(0);
			var s6 = aVS.vG.tB.e.value,
				ua = "@" + ua + " ";
			s6.length && !bD.tN.a6f(s6, " ") && (ua = " " + ua), aVS.vG.tB.e.value = s6 += ua, aVS.vG.tB.e.focus()
		}, this.aHx = function() {
			aVS.vH.nK()
		}, this.aH6 = function() {
			v6.p1[1].sj(bq.sK.aH3() ? bE.pq : bE.qh), aVS.vJ.nK()
		}, this.aHz = function() {
			var wH = bq.sK.sK[0];
			bV.a8(wH.fG, wH.mapSeed)
		}, this.aHy = function() {
			aVS.vP(bq.z.vQ);
			var w4 = bq.wh.w4,
				aVe = w4.length,
				wH = bq.sK.sK[0],
				aVf = wH ? Math.min(wH.h3, aVe) : 0;
			aVT.tM.textContent = "" + aVe, aVU.tM.textContent = "" + aVf, aVV.tM.textContent = aP.aAW(), aVW.tM.textContent = wH ? bq.sK.wL(wH.w2) + "   " + bV.wJ.wK[wH.fG] : "", aVX[0].tM.textContent = bq.lk.aHa(w4, 0, aVe), aVX[1].tM.textContent =
				wH && wH.w2 < 7 ? bq.lk.aHa(w4, 0, aVf) : "", aVY[1].tM.textContent = "MP: " + bq.z.aHt[0] + "   SP: " + bq.z.aHt[1] + "   Lobby: " + aVe, this.aH6()
		}, this.aI2 = function() {
			aVS.vG.nK()
		}, this.show = function() {
			bq.z.aGY++, aVS.show(), this.resize(), bq.message.show()
		}, this.ta = function() {
			aVS.ta(), bq.xA.ta(), bq.wf.ta(), bq.message.ta()
		}, this.resize = function() {
			aVS.resize(), bq.message.resize()
		}, this.a5Q = function(ek) {
			2 === ek ? bq.sK.wI ? bq.sK.select(0) : v6.p1[0].sg() : ek < 2 && bq.sK.click(0)
		}, v5 = new tq([new x(L(411), function() {
			return aVZ(0), 2
		}), new x(L(26), function() {
			return aVZ(1), 2
		}), new x(L(412), function() {
			return aVZ(2), 2
		})], bE.qh, 0, [18, 36, 46]), v6 = new tq([new x(L(28, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
				u.y(), bq.x4(), b1.z.a4i(3240), __fx.customLobby.setActive(false), u.v(5, 5)
			}),
			function() {
				u.y(), bq.x4(), b1.z.a4i(3240), __fx.customLobby.setActive(false), u.v(5, 5)
			})), new x(L(413), function() {
			return bq.sK.click(0), 2
		})], bE.qh, 0, [25, 75]), aVS = new v4(v5, v6, aIM, bq.xA.aIo, function(eJ) {
			bq.f7 && bq.sK.click(eJ)
		}), aVT = new tL("0", v5.p1[1].button), aVU = new tL("0", v6.p1[1].button), aVV = aVa(v5.p1[2].button), (aVW = aVa(v6.p1[1].button)).tM.style.right = "3em", (aVX = [new tL("", v5.p1[1].button, 1, 1), new tL("", v6.p1[1].button, 1, 1)])[0].tM
		.style.bottom = "0em", aVX[1].tM.style.bottom = "0em", aVX[0].tM.translate = !1, aVX[1].tM.translate = !1, aVb(bq.z.aGZ, 1), (aVY = [new tL(L(316), aVS.vT(), 1, 0), new tL("", aVS.vT(), 1, 1)])[0].tM.style.fontSize = "0.4em", aVY[1].tM.style
		.fontSize = "0.4em"
}

function aRQ() {
	var aRp, aRq, sK;
	this.show = function() {
		aRp.show(), this.resize()
	}, this.ta = function() {
		aRp.ta()
	}, this.resize = function() {
		aRp.resize(), aRq.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	}, aRp = new xj(L(414), [new x("⬅️ " + L(43), function() {
		u.v(7, u.a8P(7).a4a)
	}), new x(L(219), function() {
		bm.qt.qu(105, bJ.f1.zV(aRq.sM[0].s3[0].e.value, 5)), bm.qt.qu(106, bJ.f1.zV(aRq.sM[1].s3[0].e.value, 15)), u.v(8, u.a8P(7).a4a, new ud(18))
	})]), aRq = new sI(aRp.xp, ((sK = []).push(function() {
		var wH = new s2;
		return wH.s5(L(197)), wH.sG(new tC({
			value: "",
			eJ: -1
		})), wH
	}()), sK.push(function() {
		var wH = new s2,
			aSP = (wH.s5(L(200)), new tC({
				value: "",
				eJ: -1
			}));
		return aSP.e.type = "password", wH.sG(aSP), wH.sG(new tm([new x(L(201), function(e) {
			return e.textContent === L(201) ? (e.textContent = L(202), aSP.e.type = "text") : (e.textContent = L(201), aSP.e.type = "password"), !0
		}).button])), wH
	}()), sK.push(function() {
		var wH = new s2;
		return wH.s5(L(204)), wH.s7(L(415)), wH.s7(L(416)), wH.s7(L(417)), wH
	}()), sK))
}

function aRX() {
	var aRp, aVA, aVB, xk;

	function aVC(aC) {
		u.v(8, u.uc, new ud(21, {
			ut: aC,
			uu: 0,
			uv: 10
		}))
	}
	this.show = function() {
		aRp.show(), this.resize()
	}, this.ta = function() {
		aRp.ta()
	}, this.resize = function() {
		aRp.resize(), aVA.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	}, aVB = [new x(L(379), function() {
		aVC(5)
	}, 0, 0, 1), new x(L(380), function() {
		aVC(6)
	}, 0, 0, 1), new x(L(381), function() {
		aVC(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aVC(12)
	}, 0, 0, 1)], xk = [new x("⬅️ " + L(43), function() {
		u.a4U()
	})], aRp = new xj(L(418), xk), aVA = new sx(aVB, aRp.xp)
}

function aRH() {
	this.buffer = {}, this.uw = new Array(8), this.aRV = null, this.aRS = null, this.uH = 0, this.uU = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a89 = function(aVi) {
		aVi && (aa.f3 = aVi), u.y(), aa.dk()
	}, __fx.customLobby.setJoinFunction(() => this.a89(1)), this.aFr = function() {
		u.v(0 === ab.a4V() ? 5 : 0)
	}, this.aTy = function() {
		if (1 === bm.buffer.data[130].value) u.v(8, u.a4Z().a4a, new ud(24, {
			aTX: bm.buffer.data[125].value,
			uu: bm.buffer.data[128].value,
			uv: bm.buffer.data[129].value
		}));
		else {
			for (var h = (h = bm.buffer.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a4Z().a4a, new ud(23, {
				aTX: bm.buffer.data[125].value,
				a43: h
			}))
		}
	}, this.aV3 = function(a4a, target) {
		u.v(4, a4a, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aSD(
				"/privacy"), !1, [new x("⬅️ " + L(43), function() {
				u.v(a4a)
			}), new x("✅ Accept", function() {
				bm.qt.qu(140, 1), 0 === target ? u.v(2, a4a) : u.v(8, a4a, new ud(target))
			})]))
	}, this.aVj = function() {
		for (var aC = 0; aC < 8; aC++) this.uw[aC] = bJ.zM.zQ(bK.rX(5));
		this.uw[1] = "[" + this.uw[1] + "]", 5 === u.uc && (u.a4Z().aKa.qu(this.uw), u.a4Z().resize())
	}, this.aSL = function(g2, qr, a9w) {
		g2 = bD.gw.a78(g2, 1, 1e6);
		qr = L(419, [qr]);
		return (qr += "<br>") + L(420, [__fx.utils.escapeHtml("" + a9w)]) + "<br>" + L(421, [g2 + "–" + (g2 + 2)]) + "<br>" + L(422, [g2])
	}
}

function aRa() {
	var aT4, aT5, aVk, sK;

	function aT7() {
		b7.x4(), u.aRo()[19] = null, u.a4U()
	}

	function aVr() {
		aVu(), aVs()
	}

	function aVu() {
		aVk.s4.lastChild && u.removeChild(aVk.s4, aVk.s4.lastChild)
	}

	function aVs() {
		var aVv = bV.a8G(aE.data);
		aE.data.canvas = bV.aPE(aVv, aE.data.mapSeed).zt, aVt()
	}

	function aVt() {
		var a6B = aE.data.canvas;
		a6B.style.width = "100%", aVk.s4.appendChild(a6B)
	}
	this.aLn = function(a6B) {
		aE.data.canvas && aVu(), aE.data.canvas = a6B, aVt()
	}, this.show = function() {
		aT4.show(), this.resize()
	}, this.ta = function() {
		aT4.ta()
	}, this.resize = function() {
		aT4.resize(), aT5.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aT4.xq[0].sg()
	}, aT4 = new xj(L(344), [new x("⬅️ " + L(43), aT7)]), 2 === aE.data.mapType && b7.dk(), aT5 = new sI(aT4.xp, (function(sK) {
		var wH = new s2;
		wH.s5(L(310)), wH.sD(new xf({
			oP: [L(423), L(424), L(425)],
			value: aE.data.mapType
		}, function(eJ) {
			2 === (aE.data.mapType = eJ) ? (b7.dk(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.x4()), u.v(20)
		})), 2 <= aE.data.mapType && (wH.sG(new ty), wH.sG(new ti({
			value: aE.data.passableWater
		}, L(426), function(value) {
			aE.data.passableWater = value
		})), wH.sG(new ti({
			value: aE.data.passableMountains
		}, L(427), function(value) {
			aE.data.passableMountains = value
		})));
		sK.push(wH)
	}(sK = []), function(sK) {
		if (0 === aE.data.mapType) {
			for (var wH = new s2, oP = (wH.s5(L(344)), []), aC = 0; aC < bV.wJ.aQA.length; aC++) oP.push(bV.wJ.zk[bV.wJ.aQA[aC]].name);
			wH.sD(new xf({
				oP: oP,
				value: aE.data.mapProceduralIndex
			}, function(eJ) {
				aE.data.mapProceduralIndex = eJ, aVr()
			})), sK.push(wH)
		}
	}(sK), function(sK) {
		if (1 === aE.data.mapType) {
			for (var wH = new s2, oP = (wH.s5(L(344)), []), aC = 0; aC < bV.wJ.aQB.length; aC++) oP.push(bV.wJ.zk[bV.wJ.aQB[aC]].name);
			wH.sD(new xf({
				oP: oP,
				value: aE.data.mapRealisticIndex
			}, function(eJ) {
				aE.data.mapRealisticIndex = eJ, aVr()
			})), sK.push(wH)
		}
	}(sK), function(sK) {
		var wH;
		2 === aE.data.mapType && ((wH = new s2).s5(L(428)), wH.sG(new tC(bm.buffer.data[162], 1)), wH.s5(L(429), "0.8em"), wH.sG(new tm([new x(L(430), function() {
			return b7.aLg(), !0
		}).button])), sK.push(wH))
	}(sK), function(sK) {
		var wH, tB;
		2 === aE.data.mapType && ((wH = new s2).s5(L(431)), tB = new tC({
			eJ: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), wH.sG(tB), sK.push(wH))
	}(sK), function(sK) {
		var wH, tB, aSK;
		0 === aE.data.mapType && ((wH = new s2).s5("Seed"), tB = new tC({
			eJ: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aVr())
		}), aSK = new x(L(335), function(e) {
			var aP9 = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aP9) return tB.e.value = aE.data.mapSeed = aP9, aVr(), !0
		}), wH.sG(tB), wH.sG(new tm([aSK.button])), sK.push(wH))
	}(sK), function(sK) {
		(aVk = new s2).s5(L(432)), 2 !== aE.data.mapType ? aVs() : aE.data.canvas && aVt();
		sK.push(aVk)
	}(sK), sK))
}

function w(title, sC, aVw, aVD) {
	var aRp, aUM;
	this.show = function() {
		aRp.show(), this.resize()
	}, this.ta = function() {
		aRp.ta()
	}, this.resize = function() {
		aRp.resize(), aUM.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	}, aVD = aVD || [new x("⬅️ " + L(43), function() {
		u.a4U()
	})], aRp = new xj(title, aVD), aUM = new tl(aRp.xp, sC), aVw && bD.sP.textAlign(aRp.xp.style, 1)
}

function aRd() {
	var aT4, aT5, aT6, sK;

	function aT7() {
		aT9(), 2 === aE.data.playerNamesType && 1 === bD.sX.a5p(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aRo()[19] = null, u.a4U()
	}

	function aT9() {
		2 === aE.data.playerNamesType && bD.sX.a63(aT6.yE(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aT4.show(), this.resize()
	}, this.ta = function() {
		aT4.ta()
	}, this.resize = function() {
		aT4.resize(), aT5.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aT4.xq[0].sg()
	}, aT4 = new xj(L(348), [new x("⬅️ " + L(43), aT7)]), aT5 = new sI(aT4.xp, (function(sK) {
		var wH = new s2;
		wH.s5(L(310)), wH.sD(new xf({
			oP: [L(349), L(350), L(313)],
			value: aE.data.playerNamesType
		}, function(eJ) {
			aT9(), aE.data.playerNamesType = eJ, u.v(23)
		})), wH.sG(new ty), wH.sG(new ti({
			value: aE.data.selectableName
		}, L(433), function(value) {
			aE.data.selectableName = value
		})), sK.push(wH)
	}(sK = []), function(sK) {
		var wH;
		2 === aE.data.playerNamesType && ((wH = new s2).s5("Data"), aT6 = new y7(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fX || (aE.data.playerNamesData = new Array(aE.fX), aE.data.playerNamesData
			.fill("")), aT6.yD(bD.tN.a7Z(aE.data.playerNamesData, 1, '"')), wH.sG(aT6), sK.push(wH))
	}(sK), sK))
}

function aRl() {
	var aT4, aT5, sK;

	function aW2() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.buffer.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var ft = 0; ft < 3; ft++) ft < h.length && (colors[aC][ft] = Number(h[ft]))
		}
		return colors
	}
	this.show = function() {
		aT4.show(), this.resize()
	}, this.ta = function() {
		aT4.ta()
	}, this.resize = function() {
		aT4.resize(), aT5.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aT4.xq[0].sg()
	}, aT4 = new xj(L(434), [new x("⬅️ " + L(43), function() {
		u.a4U()
	})]), aT5 = new sI(aT4.xp, ((sK = []).push(function() {
		var wH = new s2;
		return wH.s5(L(435)), wH.sB(b1.z.aSD("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", wH.sB("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), wH
	}()), sK.push(function() {
		var wH = new s2,
			em = (wH.s5(L(436)), bm.buffer.data[174].value),
			s8 = wH.s7(em.length + " / 180"),
			aSn = (s8.style.textAlign = "center", new y7(0, 1, function(e) {
				var e = e.target.value,
					h3 = e.length;
				s8.textContent = h3 + " / 180", h3 <= 180 && bm.qt.qu(174, e)
			}));
		return aSn.e.rows = 6, aSn.e.style.fontSize = "1em", aSn.yD(em), wH.sG(aSn), wH
	}()), sK.push(function() {
		var wH = new s2;
		wH.s5(L(334));
		for (var aC = 0; aC < 11; aC++) {
			var iw = wH.sG(new tC(bm.buffer.data[163 + aC]));
			aC && (iw.e.style.marginTop = "0.6em")
		}
		return wH.sG(new tm([new x(L(437), function() {
			for (var data = bm.buffer.data, aC = 163; aC < 174; aC++) data[aC] && bm.buffer.yT(aC, data[aC].yW);
			u.a4U(), u.aRo()[31] = null, u.v(31)
		}).button])), wH
	}()), sK.push(function() {
		var wH = new s2;
		return wH.s5("Targeting"), wH.sB(L(438)), wH.sG(new tC(bm.buffer.data[175], 0, 0)), wH
	}()), sK.push(function() {
		var wH = new s2;
		return wH.s5(L(432)), wH.sG(new tm([new x(L(201), function() {
			(new el).show(bm.buffer.data[174].value, aW2(), -1)
		}).button])), wH
	}()), sK.push(function() {
		var wH = new s2,
			aW3 = (wH.s5(L(439)), wH.sB(L(440)), new tC(bm.buffer.data[176], 1, 0)),
			aW4 = (wH.sG(aW3), new x(L(441), function(e) {
				return aW5.button.textContent === L(189) && b1.z.eg(0) && (bD.sP.xc(e), aSJ(), b1.aIy.aW6(bm.buffer.data[176].value, aW2(), bm.buffer.data[175].value, bm.buffer.data[174].value)), !0
			}, 1)),
			aSJ = function() {
				aW5.button.textContent = L(188), aW4.sj(1), aW4.button.style.color = bE.pR
			},
			aW5 = new x(L(188), function(e) {
				return e.textContent === L(188) ? (e.textContent = L(189), aW4.sj(0), aW4.button.style.color = bE.qS) : aSJ(), !0
			});
		return wH.sG(new tm([aW5.button, aW4.button])), wH
	}()), sK))
}

function aRm() {
	var aRp, aRq, sK;
	this.show = function() {
		aRp.show(), this.resize()
	}, this.ta = function() {
		aRp.ta()
	}, this.resize = function() {
		aRp.resize(), aRq.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	}, aRp = new xj("🔒 " + L(442), [new x("⬅️ " + L(43), function() {
		u.a4U()
	})]), aRq = new sI(aRp.xp, ((sK = []).push(function() {
		var wH = new s2,
			tB = (wH.sB(b1.z.aSD("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", wH.s5(L(197)), new tC({
				value: "",
				eJ: -1
			})),
			aSj = (wH.sG(tB), wH.s5(L(268), "0.8em"), new tC({
				value: "",
				eJ: -1
			}, 0, 0)),
			aSI = (aSj.e.type = "email", aSj.e.autocomplete = "email", aSj.e.name = "email", aSj.e.inputMode = "email", aSj.e.spellcheck = !1, wH.sG(aSj), new x(L(443), function(e) {
				return bD.sP.xc(e), b1.aIy.aSk({
					action: 4,
					s6: tB.e.value.trim() + aSj.e.value.trim().substring(0, 63)
				}), !0
			}));
		return wH.sG(new tm([aSI.button])), wH
	}()), sK))
}

function aRO() {
	var aT4, yB;

	function aW7() {
		u.y();
		var s6 = bC.aWB(yB.yE());
		(aE.a3I && 0 < s6.length && s6 === bC.rj.a85 || bC.aMl.zf(s6)) && bC.aWC()
	}
	this.show = function(aW8) {
		this.aW9(aW8), aT4.show(), this.resize()
	}, this.aW9 = function(aW8) {
		0 === aE.a3I ? aW8 ? yB.yD(aW8) : aE.a7t.length && yB.yD(aE.a7t) : (aE.hj || (bC.rj.a85 = bC.a86.a2m()), yB.yD(bC.aWA(bC.rj.a85)))
	}, this.yD = function(s6) {
		yB.yD(s6)
	}, this.ta = function() {
		aT4.ta()
	}, this.resize = function() {
		aT4.resize(), yB.resize()
	}, this.a5Q = function(ek) {
		2 === ek ? aT4.xq[0].sg() : aW7()
	}, aT4 = new xj(L(444), [new x("⬅️ " + L(43), function() {
		u.aRn(1)
	}), new x(L(445), function() {
		yB.yF()
	}), new x(L(446), function() {
		yB.yG()
	}), new x(L(447), function() {
		yB.clear()
	}), new x(L(448), function() {
		aW7()
	})]), yB = new y7(L(449)), aT4.xp.appendChild(yB.e)
}

function aRN() {
	var aRp, aRq, sK, wH;

	function aWD() {
		bA.aFd !== bm.buffer.data[12].value ? (bA.dk(), u.v(8, 1, new ud(30))) : u.v(1)
	}
	this.show = function() {
			aRp.show(), this.resize()
		}, this.ta = function() {
			aRp.ta()
		}, this.resize = function() {
			aRp.resize(), aRq.resize()
		}, this.a5Q = function(ek) {
			2 === ek && aRp.xq[0].sg()
		}, aRp = new xj(L(450), [new x("⬅️ " + L(43), aWD), new x(L(451), function() {
			u.y(), bm.qt.z3(), u.v(2)
		})]), sK = [], (wH = new s2).s5(L(452)), wH.s7(L(453)), sK.push(wH),
		function(sK) {
			var wH = new s2,
				h = (wH.s5(L(438)), bA.data.aFu());
			wH.sD(new xf({
				oP: h,
				value: bA.data.aFy(h)
			}, function(eJ) {
				return bm.qt.qu(12, h[eJ].split(":")[0]), !0
			})), sK.push(wH)
		}(sK),
		function(sK) {
			var wH = new s2,
				aWG = (wH.s5(L(478)), []);
			wH.sG(new tm([new x(L(437), function(e) {
				ba.aWH();
				for (var aC = 0; aC < aWG.length; aC++) aWG[aC].e.value = ba.aFC[aC];
				return bD.sP.xc(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aWI.length; aC++) {
				wH.s7(ba.aWI[aC]);
				for (var ft = 0; ft < 2; ft++) {
					var eJ = 2 * aC + ft,
						tB = new tC({
							value: ba.aFC[eJ],
							eJ: -1
						});
					tB.e.aWJ = eJ, aWG.push(tB), tB.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aWK(e.target.aWJ, code)
					}), ft && (tB.e.style.marginLeft = "4%"), tB.e.style.width = "48%", wH.sG(tB)
				}
			}
			sK.push(wH)
		}(sK), (wH = new s2).s5(L(454)), bm.buffer.data[1].oP = [L(455), L(456), L(457), L(458)], wH.sD(new xf(bm.buffer.data[1])), sK.push(wH), (wH = new s2).s5(L(459)), bm.buffer.data[9].oP = [L(456), L(460), L(461)], wH.sD(new xf(bm.buffer.data[
			9])), sK.push(wH), (wH = new s2).s5(L(462)), bm.buffer.data[11].oP = [L(463), L(9), L(464)], wH.sD(new xf(bm.buffer.data[11])), sK.push(wH), (wH = new s2).s5(L(465)), wH.sG(new ti(bm.buffer.data[2])), sK.push(wH), (wH = new s2).s5(L(
		466)), wH.sG(new ti(bm.buffer.data[7])), sK.push(wH), (wH = new s2).s5(L(467)), wH.sG(new ti(bm.buffer.data[8])), sK.push(wH), (wH = new s2).s5(L(468)), wH.sG(new tC(bm.buffer.data[5])), sK.push(wH), (wH = new s2).s5(L(469)), wH.sG(new ti(bm
			.buffer.data[13], L(470))), wH.sG(new ti(bm.buffer.data[14], L(471))), sK.push(wH), (wH = new s2).s5(L(472)), wH.sD(new xf({
			oP: [L(473), L(474), L(475)],
			value: aa.aJo
		}, function(aC) {
			aa.aJo = aC
		})), sK.push(wH), (wH = new s2).s5(L(476)), wH.sG(new ti(bm.buffer.data[15])), wH.s7(L(477)), wH.sG(new tC(bm.buffer.data[16], 1, 0, function(e) {
			e.target.value = bO.ik(Math.floor(e.target.value), 0, 16)
		})), sK.push(wH), aRq = new sI(aRp.xp, sK)
}

function aRe() {
	var aT4, aT5, aT6, sK;

	function aT7() {
		aT9(), 2 !== aE.data.spawningType || bD.sX.a5p(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aRo()[19] = null, u.a4U()
	}

	function aT9() {
		2 === aE.data.spawningType && bD.sX.a61(aT6.yE(), aE.data.spawningData, bV.aLq - 1)
	}
	this.show = function() {
		aT4.show(), this.resize()
	}, this.ta = function() {
		aT4.ta()
	}, this.resize = function() {
		aT4.resize(), aT5.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aT4.xq[0].sg()
	}, aT4 = new xj(L(479), [new x("⬅️ " + L(43), aT7)]), aT5 = new sI(aT4.xp, (function(sK) {
		var wH = new s2,
			oP = (wH.s5(L(310)), [L(335), L(347), L(313)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (oP.splice(1, 1), 0 < value) && (value = 1);
		wH.sD(new xf({
			oP: oP,
			value: value
		}, function(eJ) {
			aT9(), aE.data.spawningType = eJ, 0 === aE.data.gameMode && 1 === eJ && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fX)), u.v(24)
		})), sK.push(wH)
	}(sK = []), function(sK) {
		var wH = new s2;
		wH.s5("My Spawn"), wH.sG(new ti({
			value: aE.data.selectableSpawn
		}, L(480), function(value) {
			aE.data.selectableSpawn = value
		})), sK.push(wH)
	}(sK), function(sK) {
		var wH = new s2,
			aWM = (wH.s5("Seed"), new tC({
				eJ: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		wH.sG(aWM), wH.sG(new tm([new x(L(335), function() {
			aWM.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), sK.push(wH)
	}(sK), function(sK) {
		var wH;
		2 === aE.data.spawningType && ((wH = new s2).s5("Data"), (aT6 = new y7(0, 1, 0, 1)).yD(bD.tN.a7Z(aE.data.spawningData, 2)), wH.sG(aT6), sK.push(wH))
	}(sK), sK))
}

function aRM() {
	var aRp, aVA, aVB, xk;

	function aWN(id) {
		0 !== a1.id || bm.buffer.data[140].value ? 0 === id ? u.v(8, 1, new ud(16)) : u.v(2) : u.z.aV3(u.uc, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aRp.show(), this.resize(), this.ef()
	}, this.ta = function() {
		aRp.ta()
	}, this.resize = function() {
		aRp.resize(), aVA.resize()
	}, this.ef = function() {
		8 === ab.a4V() && (2 <= bg.aWS ? aVB[2].sh === bE.pd && aVB[2].sj(0) : aVB[2].sh !== bE.pd && aVB[2].sj(bE.pd), !aE.hj && aN.s0(aE.fK) ? aVB[1].sh === bE.pd && aVB[1].sj(0) : aVB[1].sh !== bE.pd && aVB[1].sj(bE.pd), !aE.hj && ax.iP(aE
			.fK) ? aVB[0].sh === bE.pd && aVB[0].sj(0) : aVB[0].sh !== bE.pd && aVB[0].sj(bE.pd))
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	}, aVB = [new x(L(481), function() {
		aWN(0)
	}), new x(L(371), function() {
		u.v(16)
	}), new x(L(418), function() {
		u.v(17)
	}), new x(L(482), function() {
		u.z.aTy()
	}, 0, 0, 1), new x(L(444), function() {
		u.v(3, 1)
	}), new x(L(483), function() {
		u.v(18)
	}), new x(L(434), function() {
		u.v(31)
	}), new x(L(484), function() {
		u.z.a89(2)
	}), new x(L(450), function() {
		aWN(1)
	}), new x("🔒 " + L(442), function() {
		u.v(32)
	}), new x(L(485), function() {
		var a6b, sT;
		(a6b = []).push(["Wiki", (sT = "https://territorial.io/") + "wiki/gold"]), a6b.push(["Team Games", sT + "log/team"]), a6b.push(["Battle Royale Games", sT + "log/br"]), a6b.push(["1v1 Games", sT + "log/1v1"]), a6b.push([
			"Zombie Games", sT + "log/zombies"
		]), a6b.push(["Transactions", sT + "log/transactions"]), a6b.push(["Changelog", sT + "changelog"]), 2 !== a1.id && a6b.push(["Android App", bN.aGA]), 1 !== a1.id && a6b.push(["iOS App", bN.a4R]), 0 === a1.id && a6b.push([
			"Patreon", bN.aT2
		]), a6b.push(["Terms", bN.aWT]), a6b.push(["Privacy", bN.aWU]), u.v(4, 1, new w(L(485), bD.sP.a6a(a6b), !1, [new x("⬅️ " + L(43), function() {
			u.v(1)
		})]))
	}), new x(L(486), function() {
		u.v(4, 1, new w(L(486), m.e4 + "<br>" + b1.z.aSD("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(43),
				function() {
					u.v(1)
				})]))
	}), new x(L(487), function() {
		u.v(4, 1, new w(L(487), L(494) + "<br>" + L(495), !1, [new x("⬅️ " + L(43), function() {
			u.v(1)
		}), new x(L(496), function() {
			a1.a2.a4L(), u.v(1)
		})]))
	}), new x("👁️ " + L(488), function() {
		a1.a2.a4M(), u.v(4, 1, new w(L(497), L(498) + " " + b1.z.aSD("/privacy"), !1, [new x("⬅️ " + L(43), function() {
			u.v(1)
		})]))
	})], xk = [new x("⬅️ " + L(43), function() {
		u.z.aFr()
	})], 8 === ab.a4V() && (aVB.unshift(new x(L(358), function() {
		u.v(30)
	})), aVB.unshift(new x(L(491), function() {
		2 <= bg.aWS && (u.y(), bh.a5T(), bi.ds = !0)
	}, 0, 1)), aVB.unshift(new x(L(492), function() {
		!aE.hj && aN.s0(aE.fK) && (bB.i0.rD(), u.y(), aN.hk) && aN.a5T()
	}, 0, 1)), aVB.unshift(new x(L(493), function() {
		!aE.hj && ax.iP(aE.fK) && (bY.a8l(2), bB.i0.iL(), u.y(), aN.hk) && aN.a5T()
	}, 0, 1))), 1 === a1.id && 5 <= a1.e4 && aVB.push(new x(L(489), function() {
		a1.a2.a4N()
	})), aRp = new xj(L(490), xk), aVA = new sx(aVB, aRp.xp)
}

function aRi() {
	var aT4, aT5, aT6, sK;

	function aT7() {
		aT9(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aRo()[19] = null, u.a4U()
	}

	function aT9() {
		2 === aE.data.sResourcesType && bD.sX.a61(aT6.yE(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aT4.show(), this.resize()
	}, this.ta = function() {
		aT4.ta()
	}, this.resize = function() {
		aT4.resize(), aT5.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aT4.xq[0].sg()
	}, aT4 = new xj(L(353), [new x("⬅️ " + L(43), aT7)]), aT5 = new sI(aT4.xp, (function(sK) {
		var wH = new s2;
		wH.s5(L(310)), wH.sD(new xf({
			oP: [L(311), L(312), L(313)],
			value: aE.data.sResourcesType
		}, function(eJ) {
			aT9(), 2 !== eJ || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fX)), aE.data.sResourcesType = eJ, u.v(28)
		})), sK.push(wH)
	}(sK = []), function(sK) {
		var wH;
		1 === aE.data.sResourcesType && ((wH = new s2).s5("Value"), wH.sG(new tC({
			eJ: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.ik(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), sK.push(wH))
	}(sK), function(sK) {
		var wH;
		2 === aE.data.sResourcesType && ((wH = new s2).s5("Data"), (aT6 = new y7(0, 1, 0, 1)).yD(bD.tN.a7Z(aE.data.sResourcesData, 2)), wH.sG(aT6), sK.push(wH))
	}(sK), sK))
}

function aRg() {
	var aT4, aT5, aT6, sK;

	function aT7() {
		aT9(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aRo()[19] = null, u.a4U()
	}

	function aT9() {
		2 === aE.data.tIncomeType && bD.sX.a61(aT6.yE(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aT4.show(), this.resize()
	}, this.ta = function() {
		aT4.ta()
	}, this.resize = function() {
		aT4.resize(), aT5.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aT4.xq[0].sg()
	}, aT4 = new xj(L(351), [new x("⬅️ " + L(43), aT7)]), aT5 = new sI(aT4.xp, (function(sK) {
		var wH = new s2;
		wH.s5(L(310)), wH.sD(new xf({
			oP: [L(311), L(312), L(313)],
			value: aE.data.tIncomeType
		}, function(eJ) {
			aT9(), 2 !== eJ || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fX), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eJ, u.v(26)
		})), sK.push(wH)
	}(sK = []), function(sK) {
		var wH;
		1 === aE.data.tIncomeType && ((wH = new s2).s5("Value"), wH.sG(new tC({
			eJ: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.ik(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), sK.push(wH))
	}(sK), function(sK) {
		var wH;
		2 === aE.data.tIncomeType && ((wH = new s2).s5("Data"), (aT6 = new y7(0, 1, 0, 1)).yD(bD.tN.a7Z(aE.data.tIncomeData, 4)), wH.sG(aT6), sK.push(wH))
	}(sK), sK))
}

function aRY() {
	var aRp, aRq, sK;
	this.show = function() {
		aRp.show(), this.resize()
	}, this.ta = function() {
		aRp.ta()
	}, this.resize = function() {
		aRp.resize(), aRq.resize()
	}, this.a5Q = function(ek) {
		2 === ek && aRp.xq[0].sg()
	}, aRp = new xj(L(483), [new x("⬅️ " + L(43), function() {
		u.a4U()
	})]), aRq = new sI(aRp.xp, ((sK = []).push(function() {
		function aSJ() {
			aW5.button.textContent = L(188), aWX.e.readOnly = !1, aWY.e.readOnly = !1, aSI.sj(1), aSI.button.style.color = bE.pR
		}
		var wH = new s2,
			aWW = (wH.sB(b1.z.aSD("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", wH.s5(L(499)), new tC({
				value: bm.buffer.data[105].value,
				eJ: -1
			})),
			aWX = (aWW.e.readOnly = !0, wH.sG(aWW), wH.s5(L(396), "0.8em"), new tC(bm.buffer.data[148], 0, void 0, function(e) {
				aSH(bm.buffer.data[149].value, e.target.value)
			})),
			aWY = (wH.sG(aWX), wH.s5(L(400), "0.8em"), new tC(bm.buffer.data[149], 1, void 0, function(e) {
				aSH(e.target.value, bm.buffer.data[148].value)
			})),
			aW5 = (wH.sG(aWY), new x(L(188), function(e) {
				return e.textContent === L(188) ? (e.textContent = L(189), aWX.e.readOnly = !0, aWY.e.readOnly = !0, aSI.sj(0), aSI.button.style.color = bE.qS, bm.qt.qu(149, aWY.e.value), aSH(bm.buffer.data[149].value, bm
					.buffer.data[148].value)) : aSJ(), !0
			})),
			aSI = (wH.sG(new tm([aW5.button])), new x(L(14), function(e) {
				return aWX.e.readOnly && b1.z.eg(0) && (bD.sP.xc(e), aSJ(), b1.aIy.aIz({
					action: 0,
					ua: bm.buffer.data[148].value,
					value: parseInt(bm.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			s8 = wH.s7(),
			aSH = (wH.s7(L(500)).style.fontWeight = "bold", function(g2, s6) {
				s8.innerHTML = u.z.aSL(g2, bm.buffer.data[105].value, s6)
			});
		return wH.sG(new tm([aSI.button])), aSH(bm.buffer.data[149].value, bm.buffer.data[148].value), wH
	}()), sK))
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
	var aCr, aWa, aWb, aWc, aWZ = !1;

	function aWd() {
		aWZ = !0, aCr = -1, aWa = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aWa[aC] = !1;
		var a0j = Math.floor(1 + .02 * i.min);
		aWb = new Array(4), (aWc = new Array(4))[1] = aWc[3] = aWb[0] = aWb[2] = 0, aWc[0] = aWb[3] = -a0j, aWb[1] = aWc[2] = a0j
	}

	function aWe() {
		if (-1 !== aCr)
			if (0 !== aE.a3I && aI.oG()) {
				for (var aWf = !1, aC = 3; 0 <= aC; aC--) aWa[aC] && (aWf = !0, jE += aWb[aC], jF += aWc[aC], ag.a4s(aWb[aC], aWc[aC]), aT.aCX());
				aWf ? bi.ds = !0 : at.o6()
			} else at.o6()
	}
	this.a5O = function(eJ) {
		0 !== aE.a3I && aI.oG() && (aWZ || aWd(), aWa[eJ] = !0, -1 === aCr) && (aCr = setInterval(aWe, 20), aWe())
	}, this.a5R = function(eJ) {
		if (0 !== aE.a3I && (aWZ || aWd(), aWa[eJ] = !1, -1 !== aCr)) {
			for (var aWf = !1, aC = 3; 0 <= aC; aC--) aWf = aWf || aWa[aC];
			aWf || this.o6()
		}
	}, this.o6 = function() {
		if (aWZ && -1 !== aCr) {
			for (var aC = 3; 0 <= aC; aC--) aWa[aC] = !1;
			clearInterval(aCr), aCr = -1
		}
	}
}

function cn() {
	this.z = new aWg, this.nF = new aWh, this.qr = new aWi, this.aH4 = new aWj, this.eh = new aWk, this.aIy = new aWl, this.rW = new aWm, this.aUS = new aWn, this.a9w = new aWo, this.aWp = new aWq, this.aWr = new aWs, this.aWt = new aWu, this.aWv =
		new aWw, this.dk = function() {
			this.z.dk()
		}
}

function aWg() {
	var aWy, aWz;
	this.aJs = 4, this.aWx = null, this.a4d = 0, this.f8 = 0;

	function aX8() {
		return 0 === aa.aJo ? m.e6 ? 1 : 0 : aa.aJo - 1
	}

	function aXB(oQ, a4a, aXA) {
		aWz[oQ].aWZ = !0, aX4(oQ), aWy[oQ] = new aXE, aWy[oQ].dk(oQ, a4a, aXA)
	}

	function aXC(aC) {
		return aWz[aC].aWZ && aWy[aC].aXC()
	}

	function aX4(oQ) {
		aWz[oQ].ea = bi.ea, aWz[oQ].aX1 = !1
	}
	this.dk = function() {
		this.aWx = new Array(this.aJs), this.aWx[0] = "territorial.io", this.aWx[1] = "1.territorial.io", this.aWx[2] = "4.territorial.io", this.aWx[3] = "5.territorial.io", aWy = new Array(this.aJs), aWz = new Array(this.aJs);
		for (var aC = this.aJs - 1; 0 <= aC; aC--) aWz[aC] = {
			aWZ: !1,
			ea: 0,
			aX1: !1
		};
		this.aJt(0, 0, 0)
	}, this.aX2 = function(aC) {
		return aWy[aC]
	}, this.ef = function() {
		for (var aC = this.aJs - 1; 0 <= aC; aC--) this.eg(aC) && bi.ea > aWz[aC].ea + 15e3 && (b1.qr.aX3(aC, aWz[aC].aX1), aX4(aC));
		!this.eg(0) && bi.ea > aWz[0].ea + 8e3 && (aWz[0].ea = bi.ea, this.aJt(0, 0, 0))
	}, this.aUP = function(id) {
		return this.aJt(0, id, 0) && this.aX5(0)
	}, this.aX6 = function(aX7) {
		return aX7 ? aa.aJp : aX8()
	}, this.a3j = function() {
		return aX8() ? "game.territorial.io" : "territorial.io"
	}, this.aSD = function(aX9) {
		aX9 = this.a3j() + aX9;
		return "<a href='https://" + aX9 + "' target='_blank'>" + aX9 + "</a>"
	}, this.aJt = function(oQ, a4a, aX7) {
		aX7 = this.aX6(aX7);
		if (aWz[oQ].aWZ) {
			if (aWy[oQ].aXC()) return aWy[oQ].aXD(a4a), aWy[oQ].eg();
			aWy[oQ].ta()
		}
		return aXB(oQ, a4a, aX7), !1
	}, this.aXF = function(oQ, a4a) {
		console.log("Connection to Server " + oQ), b1.eh.aXG(oQ)
	}, this.aX5 = function(aC) {
		return this.eg(aC) && aWy[aC].aX5()
	}, this.aXH = function(aC) {
		aWy[aC].aXH()
	}, this.eg = function(aC) {
		return aWz[aC].aWZ && aWy[aC].eg()
	}, this.send = function(oQ, aD) {
		0 !== oQ && aX4(oQ), aWy[oQ].send(aD)
	}, __fx.customLobby.setSendFunction(this.send), this.a59 = function(oQ) {
		8 === ab.a4V() && (aWz[oQ].aX1 = !0, b1.nF.aXI = !0)
	}, this.close = function(oQ, aXJ) {
		aXC(oQ) && aWy[oQ].close(aXJ)
	}, this.aXK = function(oQ, aXJ) {
		p.a4h(aXJ), aXC(oQ) && aWy[oQ].close(aXJ)
	}, this.a4i = function(aXJ) {
		for (var aC = this.aJs - 1; 0 <= aC; aC--) this.close(aC, aXJ)
	}, this.aXL = function(oQ, aXJ) {
		for (var aC = this.aJs - 1; 0 <= aC; aC--) aC !== oQ && this.close(aC, aXJ)
	}, this.a87 = function() {
		0 === this.a4d && (aE.lF || aE.hj) || this.close(this.a4d, 3246)
	}, this.aXM = function(oQ, e) {
		aWy[oQ].ta(), p.a4S(oQ, e.code)
	}
}

function aWh() {
	this.aXI = !1, this.ef = function() {
		bi.ks() % 250 != 249 || aE.hj || (b1.eh.aXN(+(this.aXI && ah.nX[aE.fK]), am.lR + bQ.z.ml), this.aXI = !1)
	}
}

function aWo() {
	this.aXP = function(oQ, aD) {
		bK.dk(aD), 0 === bK.size ? b1.z.aXK(oQ, 3205) : __fx.customLobby.isCustomMessage(aD) || ((0 === bK.rX(1) ? function(oQ) {
			var aXT = bK.rX(6);
			0 === aXT ? function(oQ) {
					if (0 === oQ && 8 !== ab.a4V()) {
						u.z.aVj();
						for (var aXk = bK.rX(12), aXl = bK.rX(6), h = new Array(aXk), aC = 0; aC < aXk; aC++) h[aC] = bK.rX(aXl);
						aU.aCx(h)
					}
				}(oQ) : 2 === aXT ? b1.aWp.aXV(oQ) : 3 === aXT || 4 === aXT ? ay.dk() : 5 === aXT ? b1.aWr.aXW() : 9 === aXT ? b1.aWr.aXX(oQ) : 10 === aXT ? b1.aWt.aXY() : 11 === aXT ? b1.aWr.aXZ(oQ) : 12 === aXT ? b1.aWt.aXa() :
				13 === aXT ? b1.aWv.aXb() : 14 === aXT ? b1.aWv.aXc() : 15 === aXT ? b1.aWr.aXd() : 16 === aXT ? b1.aWp.aXe(oQ) : 17 === aXT ? b1.aWp.aXf(oQ) : 19 === aXT ? b1.aWp.aXg(oQ) : 20 === aXT ? b1.aWr.aXh(oQ) : 21 !== aXT &&
				22 !== aXT && (23 === aXT ? b1.aWr.aXi(oQ) : 24 === aXT && b1.aWp.aXj(oQ))
		} : function(oQ) {
			if (8 !== ab.a4V() && !ay.aKL()) return;
			if (oQ !== b1.z.a4d) b1.z.aXK(oQ, 3244);
			else if (0 === bK.rX(1)) bi.a3S.aXm(bK.aD);
			else {
				var aC, oQ = bK.rX(2);
				if (0 === oQ) {
					var r8, qr = bK.rX(9);
					0 !== ah.nX[qr] && 0 !== ah.nX[aE.fK] && (r8 = bK.rX(10), aO.r7(qr, aE.fK, r8), ag.ry(qr, 1, r8))
				} else if (1 === oQ) ! function() {
					var qr = bK.rX(9);
					0 !== ah.nX[qr] && 0 !== ah.nX[aE.fK] && b6.aOj(0, [qr], !0) && aO.rP(qr, 1)
				}();
				else if (2 === oQ) ! function() {
					var qr = bK.rX(9),
						target = bK.rX(9);
					0 !== ah.nX[qr] && 0 !== ah.nX[target] && 0 !== ah.nX[aE.fK] && b6.aOj(1, [qr], !0) && (ag.ry(qr, 3, 96), ag.ry(target, 4, 96), aO.aA2(qr, target))
				}();
				else if (m.aA && !m.aB) {
					var fa = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fa = Math.min(bB.qn.rZ.length, 540), aC = 0; aC < fa; aC++) bG.aXs(32, bB.qn.rZ[aC]);
					b1.z.send(b1.z.a4d, bG.aD)
				}
			}
		})(oQ), bi.aXS())
	}
}

function aWu() {
	this.aXY = function() {
		bm.z.yt(), bm.qt.qu(105, bI.f1.ue(bI.f1.uf(5))), bm.qt.qu(106, bI.f1.ue(bI.f1.uf(15))), bm.qt.qu(109, 0), bm.qt.qu(108, bm.buffer.data[109].value), bm.qt.qu(111, bm.buffer.data[109].value + 1), bm.qt.qu(107, 0), bm.qt.qu(110, "")
	}, this.aXa = function() {
		var data;
		bK.size < bG.aXt(29) ? b1.z.aXK(0, 3254) : ((data = {
			ub: bK.rX(30),
			z7: bK.rX(16),
			z8: bK.rX(30),
			z9: bK.rX(30),
			zA: bK.rX(30),
			zB: bK.aXu(32),
			username: bJ.zO.zf(5),
			zC: bJ.zO.zf(3),
			zD: bJ.zO.zf(3),
			zE: bK.aXu(32),
			zF: bK.aXu(32),
			zG: bK.rX(30),
			zH: bK.aXu(32),
			zI: bK.aXu(32),
			zJ: bK.aXu(32),
			zK: bK.aXu(32),
			aSV: bK.aXu(32),
			aSW: bK.aXu(30),
			aSu: bK.aXu(32),
			aSv: bJ.zO.zf(3),
			aSo: bK.aXu(2),
			aSq: bK.aXu(10),
			aSm: bJ.zO.zf(8),
			aSp: bK.aXu(5),
			aSF: bK.rX(30),
			aSS: bK.rX(30),
			a3p: bK.aXu(32),
			aSa: bK.rX(3),
			aSZ: bK.rX(8),
			aST: bK.rX(30),
			aSU: bK.aXu(32),
			aSY: bK.rX(1),
			aSi: bJ.zO.zf(6),
			aSb: bK.rX(1),
			aSc: bK.rX(1),
			aSd: bK.rX(1),
			aSN: bK.rX(30),
			aSw: bK.rX(1),
			aSx: bK.rX(1)
		}).aSw && (data.aSy = bK.aXu(32), data.aSz = bK.rX(30), data.aT0 = bK.rX(30), data.aT1 = bK.rX(1)), 8 === u.uc && (25 === u.a4Z().aUO ? (data.aRr = !0, u.z.aRV = data, u.a4Z().aFq(25, !1)) : (data.aRr = !1, bm.qt.qu(160, +(data
			.aSw && data.aT1)), data.ua = bm.buffer.data[105].value, u.z.aRS = data, bm.qt.z6(data), u.a4Z().aFq(16, !0))))
	}
}

function aWw() {
	this.aXb = function() {
		var aC;
		if (bK.size < bG.aXt(23)) b1.z.aXK(0, 3259);
		else {
			var ut = bK.rX(6),
				fa = bK.rX(10),
				data = [];
			if (9 === ut || 10 === ut || 11 === ut || 13 === ut) {
				for (aC = 0; aC < fa; aC++) data.push([bK.rX(30), bJ.zO.zf(5), bK.aXu(32), 0, bK.rX(30)]);
				8 === u.uc && u.a4Z().aFq(21, !0, {
					ut: ut,
					data: data
				})
			} else if (12 === ut) {
				for (aC = 0; aC < fa; aC++) data.push([bK.rX(20), bK.rX(30), bK.rX(30), bK.aXu(32), bK.rX(30), bJ.zO.zf(5), bJ.zO.zf(5)]);
				8 === u.uc && u.a4Z().aFq(21, !0, {
					ut: ut,
					data: data
				})
			} else {
				var iX = bK.rX(16);
				if (bK.aXv(39 + 16 * iX + fa * (0 === ut ? 111 : 1 === ut ? 101 : 2 === ut || 3 === ut ? 127 : 212))) {
					if (0 === ut)
						for (aC = 0; aC < fa; aC++) data.push([bK.rX(30), bJ.zM.zQ(bK.rX(5)), bK.rX(16), bK.rX(30), bK.rX(30)]);
					else if (1 === ut)
						for (aC = 0; aC < fa; aC++) data.push([bK.rX(16), bJ.zM.zQ(bK.rX(3)), bK.rX(16), bJ.zM.zQ(bK.rX(5)), bK.rX(31), bK.rX(30)]);
					else if (2 === ut || 3 === ut)
						for (aC = 0; aC < fa; aC++) data.push([bK.rX(30), bJ.zM.zQ(bK.rX(5)), bK.aXu(32), bK.rX(30), bK.rX(30)]);
					else
						for (aC = 0; aC < fa; aC++) data.push([bK.rX(20), bK.rX(30), bK.rX(30), bK.rX(30), bK.rX(30), bK.aXu(32), bK.rX(30), bJ.zM.zQ(bK.rX(5)), bJ.zM.zQ(bK.rX(5))]);
					8 === u.uc && u.a4Z().aFq(21, !0, {
						ut: ut,
						data: data
					})
				} else b1.z.aXK(0, 3260)
			}
		}
	}, this.aXc = function() {
		if (bK.size < bG.aXt(29)) b1.z.aXK(0, 3265);
		else {
			var aXw = bK.rX(4),
				aXx = bK.rX(7),
				aXy = bK.rX(11);
			if (bK.aXv(29 + 16 * aXx + 16 * aXy + 11 * aXw)) {
				for (var data = [], aC = 0; aC < aXw; aC++) {
					for (var a44 = bJ.zM.zQ(bK.rX(3)), aXz = bK.rX(8), aTY = [], ft = 0; ft < aXz; ft++) aTY.push(bK.rX(16));
					data.push({
						name: "[" + a44 + "]",
						aTY: aTY
					})
				}
				8 === u.uc && u.a4Z().aFq(23, !0, data)
			} else b1.z.aXK(0, 3266)
		}
	}
}

function aWq() {
	function aY3() {
		var id = bK.rX(3);
		return 0 === id ? {
			id: id,
			ua: bK.rX(30),
			s: bq.aGG.aIY(bJ.zO.zf(7))
		} : 1 === id ? {
			id: id,
			ua: bK.rX(30),
			aHU: bK.rX(3),
			value: bK.rX(30),
			target: bK.rX(30)
		} : 2 === id ? {
			id: id,
			ua: bK.rX(30),
			aHU: bK.rX(3)
		} : 3 === id ? {
			id: id,
			ua: bK.rX(30),
			aHU: bK.rX(3),
			value: bK.rX(4),
			target: bK.rX(30)
		} : 4 === id ? {
			id: id,
			ua: bK.rX(30),
			aHU: bK.rX(3),
			target: bK.rX(30)
		} : 5 === id ? {
			id: id,
			aHU: bK.rX(6)
		} : 6 === id ? {
			id: id,
			value: bK.rX(17)
		} : null
	}
	this.aXV = function(oQ) {
		if (oQ !== b1.z.f8) b1.z.close(oQ, 3239);
		else if (6 !== ab.a4V()) b1.z.close(oQ, 3271);
		else {
			bq.dk(), bq.z.vQ = bK.rX(10), bq.sK.aGy();
			for (var playerCount = bK.rX(16), ft = 0; ft < playerCount; ft++) bq.wh.aGa(bK.rX(30), bJ.zO.zf(5), bK.rX(4), bK.rX(30), bK.rX(7), bK.rX(16), bK.rX(18), bK.rX(11), bK.rX(12), bK.rX(6), bK.rX(13));
			u.v(29), bq.z.aHu(!0)
		}
	}, this.aXe = function(oQ) {
		if (oQ !== b1.z.f8) b1.z.close(oQ, 3239);
		else if (bq.f7) {
			bq.z.aHt[0] = bK.rX(20), bq.z.aHt[1] = bK.rX(20);
			for (var aY0 = bK.rX(20), ft = 0; ft < aY0; ft++) {
				var id = bK.rX(3);
				0 === id ? bq.wh.aGa(bK.rX(30), bJ.zO.zf(5), 0, 1234566, 127, 0, bK.rX(18), 0, bK.rX(12), 0, 0) : 1 === id ? bq.wh.aGq(bK.rX(16), bK.rX(16), bK.rX(13)) : 3 === id ? bq.wh.aGp(bK.rX(16)) : 4 === id ? bq.wh.aGh(bK.rX(16), bK.rX(4),
					bK.rX(30), bK.rX(7), bK.rX(16), bK.rX(11), bK.rX(18)) : 5 === id ? bq.wh.aGj(bK.rX(16), bK.rX(1)) : 6 === id && bq.wh.aGi(bK.rX(16), bK.rX(6))
			}
			bq.z.vQ = bK.rX(10);
			for (var aY1 = bK.rX(10), aC = 0; aC < aY1; aC++) {
				var wk = bK.rX(13),
					aVe = bK.rX(10),
					aGI = bq.z.aGI,
					aGI = (aGI.a4d = bK.rX(10), aGI.aHK = bK.rX(10), aGI.fG = bK.rX(6), aGI.mapSeed = bK.rX(14), aGI.w2 = bK.rX(4), aGI.wR = bK.rX(1), aGI.spawningSeed = bK.rX(14), aGI.a3k = bK.rX(30) - 1, bq.wh.aGr(wk));
				if (bq.aGI.dt(aGI, aVe)) return;
				bq.wh.aGs(aGI, aVe)
			}
			var aY2 = bK.rX(13);
			aY2 && bq.wh.aGt(aY2), bq.sK.aGy(), bq.z.aHD()
		} else b1.z.close(oQ, 3251)
	}, this.aXj = function(oQ) {
		oQ === b1.z.f8 && bq.f7 && bq.sK.aH7(bK.rX(13))
	}, this.aXf = function(oQ) {
		if (oQ !== b1.z.f8) b1.z.close(oQ, 3272);
		else if (bq.f7) {
			for (var tQ = bq.z.tQ, x3 = (bq.z.tR = bK.rX(20), bK.rX(6)), aC = 0; aC < x3; aC++) {
				var aJK = aY3();
				bq.tZ.aJJ(aJK), tQ.push(aJK)
			}
			bq.z.aI1()
		} else b1.z.close(oQ, 3273)
	}, this.aXg = function(oQ) {
		oQ !== b1.z.f8 ? b1.z.close(oQ, 3276) : bq.f7 ? bq.message.aH0(aY3()) : b1.z.close(oQ, 3277)
	}
}

function aWs() {
	this.aXW = function() {
		for (var id = bK.rX(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.rX(8), bK.rX(8), bK.rX(8)]);
		var em = bJ.zO.zf(8);
		bX.eT.ej({
			id: id,
			colors: colors,
			em: em
		})
	}, this.aXh = function(oQ) {
		var aY4 = bK.rX(3),
			fd = bK.rX(5),
			fd = bl.aY5.aY6(fd, bK.rX(30), bK.rX(30), bK.rX(30));
		b1.eh.aY7(oQ, fd, aY4, 0)
	}, this.aXX = function(oQ) {
		this.aXh(oQ), bm.qt.qu(183, bI.f1.ue(bI.f1.uf(15))), 0 === oQ && 0 === bm.buffer.data[105].value.length ? b1.eh.ei(0) : b1.aIy.aY8(oQ), 4 === b1.z.aX2(oQ).aY9() ? 6 === ab.a4V() && b1.aH4.aJu(oQ) : 5 !== b1.z.aX2(oQ).aY9() || 8 !== ab
			.a4V() && 10 !== ab.a4V() || b1.qr.aKI()
	}, this.aXZ = function(oQ) {
		var id = bK.rX(6);
		1 === id ? (bm.qt.qu(160, bK.rX(30)), b1.z.aXH(oQ), aU.aCt || b1.eh.ei(1), bA.aFm(), 8 === u.uc && u.a4Z().aUb()) : 21 === id ? 8 === u.uc && u.a4Z().aFq(17) : 22 === id && (bm.qt.qu(106, bm.buffer.data[110].value), bm.qt.qu(110, ""),
			8 === u.uc) && u.a4Z().aFq(15)
	}, this.aXd = function() {
		var fa = bK.rX(16),
			aYA = bK.rX(16);
		if (bK.aXv(55 + 10 * fa + 16 * aYA)) {
			for (var h = [], aC = 0; aC < fa; aC++) h.push(bJ.zM.zQ(bK.rX(10)));
			bA.aFp(h)
		} else b1.z.aXK(0, 3270)
	}, this.aXi = function(oQ) {
		for (var aY4 = bK.rX(3), fd = bK.rX(5), aY4 = {
				aY4: aY4,
				sv: bl.aY5.aY6(fd, bK.rX(30), bK.rX(30), bK.rX(30))
			}, fd = bK.aXu(32), aYB = [], aC = 0; aC < 17; aC++) aYB.push(new Uint8Array(bK.rX(16)));
		for (aC = 0; aC < 17; aC++)
			for (var h = aYB[aC], fa = h.length, iS = 0; iS < fa; iS++) h[iS] = bK.aXu(8);
		bw.show(aYB, fd, oQ, aY4)
	}
}

function aWi() {
	this.aX3 = function(oQ, aX1) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, aX1 ? 1 : 0), bG.a9(3, 0 === aE.a3I ? bq.f7 ? 6 : 0 : aE.hj ? 1 : aE.lF ? 7 : aE.lD < 7 ? 2 : 8 === aE.lD ? 4 : 9 === aE.lD ? 5 : 3), b1.z.send(oQ, bG.aD)
	}, this.aKI = function() {
		bG.a8(58), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.f8), bG.a9(10, ay.aHK), bG.a9(9, ay.aKB), bG.a9(10, m.e8), bG.a9(14, m.dx), b1.z.send(b1.z.a4d, bG.aD)
	}, this.qs = function(fM) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fM), b1.z.send(b1.z.a4d, bG.aD)
	}, this.qv = function(jD, k4) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, jD), bG.a9(10, k4), b1.z.send(b1.z.a4d, bG.aD)
	}, this.qz = function(jD, qx) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, jD), bG.a9(9, qx), b1.z.send(b1.z.a4d, bG.aD)
	}, this.r1 = function(jD, r0) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, jD), bG.a9(27, r0), b1.z.send(b1.z.a4d, bG.aD)
	}, this.r3 = function(jD, nv) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, jD), bG.a9(16, nv), b1.z.send(b1.z.a4d, bG.aD)
	}, this.r6 = function(k4) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, k4), b1.z.send(b1.z.a4d, bG.aD)
	}, this.rA = function(eJ) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eJ), b1.z.send(b1.z.a4d, bG.aD)
	}, this.rC = function(rB) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, rB), b1.z.send(b1.z.a4d, bG.aD)
	}, this.rE = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a4d, bG.aD)
	}, this.rF = function(jD, fM, k4) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, jD), bG.a9(10, k4), bG.a9(22, fM), b1.z.send(b1.z.a4d, bG.aD)
	}, this.rN = function(aYC, aYD) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, aYD), bG.a9(10, aYC), b1.z.send(b1.z.a4d, bG.aD)
	}, this.rQ = function(a9w) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, a9w), b1.z.send(b1.z.a4d, bG.aD)
	}, this.rU = function(aYE, target) {
		var aC, fa = aYE.length;
		for (bG.a8(14 + 9 * fa), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fa; aC++) bG.a9(9, aYE[aC]);
		b1.z.send(b1.z.a4d, bG.aD)
	}
}

function aWl() {
	this.aYF = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.eh.aYG(), b1.z.send(0, bG.aD)
	}, this.aY8 = function(oQ) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.f1.zc(bm.buffer.data[105].value, 5), bJ.f1.zc(bm.buffer.data[106].value, 15), b1.z.send(oQ, bG.aD)
	}, this.aUc = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.f1.zc(bm.buffer.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aSk = function(a7B) {
		var fa = a7B.s6.length;
		bG.a8(21 + 16 * fa), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a7B.action), bG.a9(8, fa), bI.zM.zb(a7B.s6), b1.z.send(0, bG.aD)
	}, this.aW6 = function(zB, colors, aYI, em) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(zB, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var ft = 0; ft < 3; ft++) bH.a9(8, colors[aC][ft]);
		zB = bA.data.aFt(aYI.trim());
		bH.a9(8, -1 === zB ? 255 : zB), bI.zO.a2m(em.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.aYJ())
	}, this.aSO = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.f1.zc(data.ua, 5), b1.z.send(0, bG.aD)
	}, this.aIz = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.f1.zc(data.ua, 5), bG.aXs(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aWm() {
	this.rV = function() {
		for (var fa = aE.kv, a37 = bU.result.a37, lq = a37.length, a3x = (bG.a8(17 + 16 * fa + 33 * lq), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, lq), bG.a9(1, +(2 === aE.a3F)), bG.a9(1, aE.a3b % 2), ah.a3x), aC = 0; aC < fa; aC++) bG.a9(16, a3x[
		aC]);
		for (var hO = ah.hO, aC = 0; aC < lq; aC++) {
			var h8 = a37[aC];
			bG.a9(9, h8), bG.a9(24, hO[h8])
		}
		b1.z.send(b1.z.a4d, bG.aD)
	}
}

function aWn() {
	this.aUT = function(ut, uu, uv) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, ut), bG.a9(1, +(uu < 0)), bG.a9(1, +(uv < 0)), bG.a9(30, Math.abs(uu)), bG.a9(30, Math.abs(uv)), b1.z.send(0, bG.aD)
	}, this.aUU = function(ut, aUV, aUW) {
		bG.a8(18 + 16 * aUV.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, ut), b1.eh.aYK(aUV), bG.a9(30, aUW), b1.z.send(0, bG.aD)
	}, this.aUZ = function(ut, aUV, aUW) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, ut), bJ.f1.zc(aUV, 5), bG.a9(30, aUW), b1.z.send(0, bG.aD)
	}, this.aUX = function(aTX, a43) {
		for (var fa = a43.length, iX = 0, aC = 0; aC < fa; aC++) iX += a43[aC].length;
		for (bG.a8(21 + 3 * fa + 16 * iX), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aTX), bG.a9(4, fa), bG.a9(7, iX), aC = 0; aC < fa; aC++) bG.a9(3, a43[aC].length), bI.zM.zb(a43[aC]);
		b1.z.send(0, bG.aD)
	}, this.aUY = function(aTX, uu, uv) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aTX), bG.a9(1, +(uu < 0)), bG.a9(1, +(uv < 0)), bG.a9(20, Math.abs(uu)), bG.a9(20, Math.abs(uv)), b1.z.send(0, bG.aD)
	}
}

function aWj() {
	this.aJu = function(oQ) {
		var username = bm.buffer.data[122].value.slice(0, 20),
			username = (bG.a8(22 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.e8), b1.eh.aYK(username), bD.color.a6G(bm.z.z0()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.f8 = oQ, b1.z.send(oQ, bG.aD)
	}, this.aH5 = function(aYL, a7B) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, aYL), 4 === aYL ? bH.a9(13, a7B) : 3 === aYL ? bI.zO.a2m(a7B, 7, bH) : 5 === aYL && (bH.a9(3, a7B.id), bH.a9(3, a7B.value), bH.a9(30, a7B.ua)), b1.z.send(b1.z.f8, bH.aYJ())
	}
}

function aWk() {
	this.aXG = function(oQ) {
		var aYS;
		bG.a8(55 + bl.aYM.rX()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.dx), bG.a9(4, a1.id), bG.a9(7, a1.e4), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), aYS = bA.aFs(), bG.a9(8, aYS[0]), bG.a9(8, aYS[1]), bl.aYM
		.a2m(), b1.z.send(oQ, bG.aD)
	}, this.aY7 = function(oQ, sv, aY4, aYO) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, aY4), bG.a9(30, sv), bG.a9(30, aYO), b1.z.send(oQ, bG.aD)
	}, this.f9 = function(f4) {
		bH.dk(), bH.a9(1, 0), bH.a9(6, 6), bI.zO.a2m(f4, 16, bH), b1.z.send(b1.z.f8, bH.aYJ())
	}, this.ei = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.xJ = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aFo = function(id, s6) {
		var fa = Math.min(s6.length, 63);
		bG.a8(19 + 16 * fa), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fa), bI.zM.zb(s6), b1.z.send(0, bG.aD)
	}, this.aYP = function(aVi, sH) {
		bG.a8(7 + 26 * sH.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < sH.length; aC++) bG.a9(16, sH[aC][0]), bG.a9(10, sH[aC][1]);
		b1.z.send(aVi, bG.aD)
	}, this.aXN = function(aYQ, aYR) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, aYQ), bG.a9(12, aYR), b1.z.send(b1.z.a4d, bG.aD)
	}, this.aYK = function(username) {
		bG.a9(5, username.length), bI.zM.zb(username)
	}, this.pB = function(pC, pD, oQ, pow) {
		bG.a8(88), bG.a9(1, 0), bG.a9(6, 8), bG.a9(3, pow.aY4), bG.a9(30, pow.sv), bG.aXs(32, pD), bG.a9(16, pC), b1.z.send(oQ, bG.aD)
	}
}

function aXE() {
	var aYT, aYU, b, aYV = ["wss://", "/s50/", "/s51/", "/s52/"],
		aYW = 0;

	function aXF() {
		b1.z.aXF(aYT, aYU)
	}

	function aYZ(e) {
		b1.a9w.aXP(aYT, new Uint8Array(e.data))
	}

	function aYa() {}

	function aXM(e) {
		b1.z.aXM(aYT, e)
	}
	this.dk = function(eJ, a4a, aXA) {
		aYT = eJ, aYU = a4a,
			function(aXA) {
				aXA = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : m.dy ? "ws://localhost:" + (7130 + aYT) + "/" : aXA ? aYV[0] + "game.territorial.io/x0" + aYT + "/" : aYV[0] + b1.z.aWx[aYT] + aYV[1 + m.dw];
				(b = new WebSocket(aXA)).binaryType = "arraybuffer", b.onopen = aXF, b.onmessage = aYZ, b.onclose = aXM, b.onerror = aYa
			}(aXA)
	}, this.aYY = function() {
		return b.readyState === b.CONNECTING
	}, this.eg = function() {
		return b.readyState === b.OPEN
	}, this.aX5 = function() {
		return aYW
	}, this.aXH = function() {
		aYW = 1
	}, this.aXC = function() {
		return this.aYY() || this.eg()
	}, this.aXD = function(a4a) {
		aYU = a4a
	}, this.aY9 = function() {
		return aYU
	}, this.send = function(aD) {
		this.eg() && b.send(aD)
	}, this.close = function(aXJ) {
		this.aXC() && (this.ta(), b.close(aXJ))
	}, this.ta = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dQ() {
	var gap, aYb = !1,
		w3 = 0,
		j = 0,
		uh = 0,
		canvas = null,
		ox = null,
		a5q = null;

	function aYf() {
		for (var aC = aE.a0Y; 0 <= aC; aC--) a5q[aC] = 0;
		for (aC = am.lR - 1; 0 <= aC; aC--) a5q[bj.fY[am.lW[aC]]] += ah.hO[am.lW[aC]];
		aYb = !0
	}

	function aYd() {
		for (var aYk, aYi = 0, fa = 0, ek = Math.floor(j / 2), eI = Math.floor(uh / 2), aYj = 1.5 * Math.PI, aC = aE.a0Y; 0 <= aC; aC--) fa += a5q[aC], 0 === a5q[aC] && aYi++;
		if (aYb = !1, ox.clearRect(0, 0, j, j), 0 < fa)
			if (aYi === aE.a0Y) {
				for (aC = aE.a0Y; 0 <= aC; aC--)
					if (0 < a5q[aC]) {
						! function(aC, ek, eI) {
							ox.fillStyle = bj.aYo[bj.lI[aC]], ox.beginPath(), ox.arc(ek, ek, eI, 0, 2 * Math.PI), ox.fill()
						}(aC, ek, eI);
						break
					}!
				function(ek) {
					var fontSize = ek / 3;
					ox.font = bD.sP.uA(1, fontSize), ox.fillStyle = bE.pR, ox.fillText("100%", ek, ek + .1 * fontSize)
				}(ek)
			} else {
				for (aC = 0; aC <= aE.a0Y; aC++) 0 < a5q[aC] && (aYk = aYj + 2 * Math.PI * a5q[aC] / fa, aYn(ox, bj.aYo[bj.lI[aC]], ek, eI, aYj, aYk), function(ek, eI, aYj, aYk) {
					var g2 = (aYk - aYj) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eI * Math.min(g2, .37);
					fontSize < 8 || (aYj = (aYj + aYk) / 2, aYk = (__fx.settings.detailedTeamPercentage ? (100 * g2).toFixed(2) : Math.floor(100 * g2 + .5)) + "%", eI *= .525 - Math.max(.6 * (g2 - .7), 0), ox.font = bD.sP.uA(1, fontSize), ox
						.fillStyle = bE.pR, ox.fillText(aYk, ek + Math.cos(aYj) * eI, ek + Math.cos(aYj + 1.5 * Math.PI) * eI))
				}(ek, eI, aYj, aYk), 0 !== aC && aYq(ox, ek, eI, aYj), aYj = aYk);
				aYq(ox, ek, eI, 1.5 * Math.PI)
			} aYr(ox, ek, eI)
	}

	function aYn(ic, color, ek, eI, aYj, aYk) {
		ic.fillStyle = color, ic.beginPath(), ic.arc(ek, ek, eI, aYj, aYk), ic.lineTo(ek, ek), ic.fill()
	}

	function aYq(ic, ek, eI, aYs) {
		ic.beginPath(), ic.moveTo(ek, ek), ic.lineTo(ek + Math.cos(aYs) * eI, ek + Math.cos(aYs + 1.5 * Math.PI) * eI), ic.stroke()
	}

	function aYr(ic, ek, eI) {
		ic.beginPath(), ic.arc(ek, ek, eI, 0, 2 * Math.PI), ic.stroke()
	}
	this.dk = function() {
		if (aE.iU) {
			w3 = 0, a5q = new Uint32Array(aE.a0Y + 1);
			for (var aC = aE.a0Y; 0 <= aC; aC--) a5q[aC] = 0;
			for (aC = am.lR - 1; 0 <= aC; aC--) a5q[bj.fY[am.lW[aC]]] += 1;
			this.resize()
		} else a5q = ox = canvas = null
	}, this.aBR = function() {
		return j
	}, this.resize = function() {
		aE.iU && (j = Math.floor(.95 * (a1.a2.il() && !aE.o1 ? .18 * i.min : .13 * i.im)), j = (j *= 1 + (.5 + .2 * a1.a2.il()) * aE.o1) + j % 2, gap = Math.max(1, .015 * j), uh = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (ox = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, ox.strokeStyle = bE.pR, bD.sP.textAlign(ox, 1), bD.sP.textBaseline(ox, 1), aYd())
	}, this.lS = function(aYe) {
		aYe && aYf();
		var eb, aYe = this.lU();
		return bj.lI[aYe] || (aYe = function() {
			for (var lT = -1, aC = aE.a0Y; 1 <= aC; aC--)(-1 === lT || a5q[aC] > a5q[lT]) && (lT = aC);
			return lT
		}(), eb = ah.hO[mW[0]], -1 !== aYe && a5q[aYe] > eb) ? a5q[aYe] : eb
	}, this.a4G = function() {
		return w3 = 31, this.ef(), this.lU()
	}, this.lU = function() {
		for (var lT = 0, aC = aE.a0Y; 0 < aC; aC--) a5q[aC] > a5q[lT] && (lT = aC);
		return lT
	}, this.kw = function(aYh) {
		for (var h3 = 0, lW = am.lW, fY = bj.fY, fa = am.lR, gE = bR.gE, aC = 0; aC < fa; aC++) {
			var h8 = lW[aC];
			fY[h8] === aYh && (gE[h3++] = h8)
		}
		bR.g5[0] = h3
	}, this.lV = function(aYh) {
		for (var h3 = 0, lW = am.lW, fY = bj.fY, fa = am.lR, gE = bR.gE, aC = 0; aC < fa; aC++) {
			var h8 = lW[aC];
			fY[h8] !== aYh && (gE[h3++] = h8)
		}
		bR.g5[0] = h3
	}, this.a6i = function() {
		for (var h3 = 0, aC = aE.a0Y; 0 <= aC; aC--) h3 += 0 < a5q[aC];
		return h3
	}, this.ef = function() {
		aE.iU && 32 <= ++w3 && (w3 = 0, aYf())
	}, this.nK = function() {
		aE.iU && aYb && aYd()
	}, this.wV = function(ic, h3, size) {
		var ek = size >> 1,
			eI = Math.floor(.4 * size),
			aYj = 1.5 * Math.PI;
		ic.clearRect(0, 0, size, size), ic.lineWidth = .042 * size, ic.strokeStyle = bE.pR;
		for (var aC = 0; aC < h3; aC++) {
			var aYk = aYj + 2 * Math.PI / h3;
			aYn(ic, bj.aYo[aC + 1], ek, eI, aYj, aYk), 0 !== aC && aYq(ic, ek, eI, aYj), aYj = aYk
		}
		aYq(ic, ek, eI, 1.5 * Math.PI), aYr(ic, ek, eI)
	}, this.xy = function() {
		aE.iU && (aE.o1 ? xz.drawImage(canvas, bf.gap, bf.gap) : xz.drawImage(canvas, bf.gap, aBQ + 2 * bf.gap))
	}
}

function dg() {
	function aYy(fh, fa, fj, a2w, aCi, g0) {
		if (!(fj < 1 || aCi < fj))
			for (var aC = 0; aC <= fa; aC++) {
				var fE = bP.jH(fh, fj);
				if (a2w(fE)) return fE >> 2;
				fh += g0
			}
		return -1
	}

	function aZ2(fj, fa, fh, a2w, aYw, g0) {
		if (!(fh < 1 || aYw < fh)) {
			fa = Math.max(fa, 0);
			for (var aC = 0; aC <= fa; aC++) {
				var fE = bP.jH(fh, fj);
				if (a2w(fE)) return fE >> 2;
				fj += g0
			}
		}
		return -1
	}

	function aZ6(j4, j5, aYt) {
		return -1 !== j5 && (-1 === j4 || bP.j6(j5, aYt) < bP.j6(j4, aYt)) ? j5 : j4
	}
	this.hz = function(aYt) {
		return this.a3M(aYt, function(fE) {
			return ad.fV(fE)
		})
	}, this.i5 = function(aYt) {
		return this.a3M(aYt, function(fE) {
			return ad.aL1(fE, aE.fK)
		})
	}, this.a3M = function(aYt, a2w) {
		return function(aYt, aYu, a2w) {
			for (var hp = bP.fi(aYt), hr = bP.fk(aYt), aYw = bV.fl - 2, aCi = bV.fm - 2, aYx = -1, fd = 0; fd < aYu; fd++) {
				var aCh = Math.max(hp - fd, 1),
					aPf = Math.max(hr - fd, 1),
					a19 = Math.min(hp + fd, aYw),
					a18 = Math.min(hr + fd, aCi),
					j4 = aYy(hp, a19 - hp, hr - fd, a2w, aCi, 1),
					j5 = aYy(hp - 1, hp - aCh - 1, hr - fd, a2w, aCi, -1),
					a19 = aYy(hp, a19 - hp, hr + fd, a2w, aCi, 1),
					aCh = aYy(hp - 1, hp - aCh - 1, hr + fd, a2w, aCi, -1),
					aZ1 = aZ2(hr, a18 - hr - 1, hp - fd, a2w, aYw, 1),
					aZ3 = aZ2(hr - 1, hr - aPf - 2, hp - fd, a2w, aYw, -1),
					a18 = aZ2(hr, a18 - hr - 1, hp + fd, a2w, aYw, 1),
					aPf = aZ2(hr - 1, hr - aPf - 2, hp + fd, a2w, aYw, -1);
				if (aYx = aZ6(aYx, j4, aYt), aYx = aZ6(aYx, j5, aYt), aYx = aZ6(aYx, a19, aYt), aYx = aZ6(aYx, aCh, aYt), aYx = aZ6(aYx, aZ1, aYt), aYx = aZ6(aYx, aZ3, aYt), aYx = aZ6(aYx, a18, aYt), 0 <= (aYx = aZ6(aYx, aPf, aYt)) && fd *
					fd >= bP.j6(aYx, aYt)) return aYx
			}
			return -1
		}(aYt, bP.ij(), a2w)
	}
}

function d9() {
	function aZ7(key, size) {
		var aW8;
		return "undefined" == typeof URLSearchParams || (aW8 = window.location.search, "string" != typeof(aW8 = new URLSearchParams(aW8).get(key))) || aW8.length < 1 ? null : bJ.f1.zV(aW8, size)
	}
	this.dt = function() {
		if (0 !== a1.id) return !1;
		var a3k = aZ7("r", 6);
		if (! function() {
				var value = aZ7("account", 5);
				if (!value && !(value = aZ7("a", 5))) return void bL.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (bL.clear(), u.v(8, u.uc, new ud(1e3, {
					action: 0,
					ua: value,
					ub: 0
				})), !0) : (bL.clear(), !1)
			}()) {
			if (!this.clear()) return !1;
			if (!a3k) return !1;
			this.aT3("r", a3k), u.v(3, 0, L(501)), bC.aZ9(a3k)
		}
		return !0
	}, this.clear = function() {
		var a4Q = new URL(window.location.href);
		a4Q.search = "";
		try {
			return history.replaceState(null, "", a4Q.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aT3 = function(key, value) {
		if (0 === a1.id) try {
			var a4Q = new URL(window.location.href),
				h8 = a4Q.searchParams;
			h8.set(key, value), a4Q.search = h8.toString(), history.replaceState(null, "", a4Q.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function co() {
	var aZB, h;
	this.dk = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.g1(32768 * aC, 100);
		this.a7w(0)
	}, this.value = function(h8) {
		return h[h8]
	}, this.aPH = function() {
		return bO.g1(aZB - 1, 2)
	}, this.a7w = function(aP9) {
		aZB = 2 * aP9 % 32768 + 1
	}, this.random = function() {
		return aZB = 167 * aZB % 32768
	}, this.kC = function(nS) {
		return bO.g1(nS * this.random(), 32768)
	}, this.kn = function(h8) {
		return 0 !== h8 && this.random() < this.value(h8)
	}, this.jY = function(ft, fu) {
		return ft + this.kC(fu - ft)
	}
}

function d5() {
	function aZJ(s6) {
		3 === u.uc && u.a4Z().yD(s6)
	}
	this.rj = new aZC, this.a86 = new aZD, this.aMl = new aZE, this.dk = function() {
		aE.hj || this.rj.dk()
	}, this.ef = function() {
		aE.hj || (this.rj.ef(), 3 !== u.uc) || bi.ks() % 15 != 5 && 2 !== aE.a3I || u.a4Z().aW9()
	}, __fx.replay.restartReplay = () => this.aWC(), this.aWC = function() {
		var aZG = 0 !== aE.a3I,
			aZH = aE.a7s;
		aZG || ab.aK4(), aE.a7q.a8F(), aE.data.canvas = null, b1.z.close(b1.z.a4d, 3257), b1.z.a4d = 0, aE.data.isReplay = 1, aE.a7u(), aZG && (aE.a7s = aZH)
	}, this.aWB = function(s6) {
		var aC = s6.indexOf("=");
		return 0 <= aC ? s6.substring(aC + 1) : s6
	}, __fx.replayHistory.load = saved => {
		saved = bC.aWB(saved), bC.aMl.zf(saved) && bC.aWC()
	}, this.aZ9 = function(id) {
		var aZI = new XMLHttpRequest;
		aZI.open("GET", "https://" + b1.z.a3j() + "/log/?r=" + id), aZI.onload = function() {
			var s6 = 200 === aZI.status ? aZI.responseText : "";
			aZJ(s6.length ? s6 : L(502))
		}, aZI.onerror = function() {
			aZJ(L(503))
		}, aZI.send()
	}, this.aWA = function(s6) {
		return s6
	}
}

function aZC() {
	this.aZK = null, this.aZL = null, this.aZM = null, this.aZN = null, this.aZO = null, this.aZP = null, this.a85 = "";
	var aZQ = 0;
	this.dk = function() {
		this.aZK = [], this.aZL = [], this.aZM = [], this.aZN = [], this.aZO = [0], this.aZP = [0], aZQ = 0, this.a85 = ""
	}, this.rk = function(id, gJ, gL, gN) {
		aE.hj || 2 === aE.a3I || (0 === this.aZO[aZQ] && (this.aZP[aZQ] ? (this.aZO.push(1), this.aZP.push(0), aZQ++) : this.aZO[aZQ] = 1), this.aZK.push(id), this.aZL.push(gJ), this.aZM.push(void 0 === gL ? 0 : gL), this.aZN.push(void 0 === gN ?
			0 : gN), this.aZP[aZQ]++)
	}, this.ef = function() {
		0 === this.aZO[aZQ] ? this.aZP[aZQ]++ : (this.aZO.push(0), this.aZP.push(0), aZQ++)
	}
}

function aZE() {
	var aZR = 0;

	function aZV(s6, id) {
		console.log(s6), aZR || (id ? 1 === id ? aO.a9O = L(505) + ": " + s6 : u.v(4, 3, new w(L(506), s6, 1)) : u.v(4, 3, new w("⚠️ " + L(504), s6, 1)))
	}
	this.zf = function(s6, aZS) {
		var iw, sH;
		return aZR = aZS, bJ.f1.zY(bJ.f1.zW(bJ.f1.zU(s6))), aO.a9O = "", !! function() {
			if (bK.size < 10) aZV("File Too Small");
			else {
				var aZX = bK.rX(12),
					s = (aZX !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, aZV(s = (s += "   Found: " + aZX) + ("   Compatible at " + b1.z.a3j() + "/" + aZX), 1)), bK.rX(12)),
					aZY = bK.rX(31);
				if (aZY !== bK.size) aZV("Size Error: Stated Size " + aZY + " Actual Size " + bK.size);
				else if (function(k, aZX) {
						for (var h8 = bK.aD, fa = bK.size, aYR = aZX, aC = 3; aC < fa; aC++) aYR = aYR + h8[aC] & 4095;
						return aYR === k || (aZV("Hash Error: " + aYR + " " + k + " " + fa), !1)
					}(s, aZX)) return 1
			}
			return
		}() && (iw = bK, (sH = aE.data = new a7p).mapType = iw.rX(2), sH.mapProceduralIndex = iw.rX(8), sH.mapRealisticIndex = iw.rX(8), sH.mapSeed = iw.rX(14), sH.mapName = iw.aZa(5), 2 === sH.mapType && iw.aZb(), sH.passableWater = iw.rX(
			1), sH.passableMountains = iw.rX(1), sH.playerCount = iw.rX(10), sH.humanCount = iw.rX(10), sH.selectedPlayer = iw.rX(9), sH.gameMode = iw.rX(1), sH.playerMode = iw.rX(2), sH.battleRoyaleMode = iw.rX(2), sH.numberTeams = iw.rX(4),
			sH.isZombieMode = iw.rX(1), sH.isContest = iw.rX(1), sH.isReplay = iw.rX(1), sH.elo = iw.aZc(2, 14, 2), sH.colorsType = iw.rX(1), sH.colorsPersonalized = iw.rX(1), sH.colorsData = iw.aZc(10, 18, 512), sH.selectableColor = iw.rX(
			1), sH.teamPlayerCount = iw.aZc(4, 10, 9), sH.neutralBots = iw.rX(1), sH.botDifficultyType = iw.rX(2), sH.botDifficultyValue = iw.rX(4), sH.botDifficultyTeam = iw.aZc(4, 4, 9), sH.botDifficultyData = iw.aZc(10, 4, 512), sH
			.spawningType = iw.rX(2), sH.spawningSeed = iw.rX(14), sH.spawningData = iw.aZc(11, 12, 1024), sH.selectableSpawn = iw.rX(1), sH.playerNamesType = iw.rX(2), sH.playerNamesData = iw.aZd(10, 5, 512), sH.selectableName = iw.rX(1), sH
			.aIncomeType = iw.rX(2), sH.aIncomeValue = iw.rX(8), sH.aIncomeData = iw.aZc(10, 8, 512), sH.tIncomeType = iw.rX(2), sH.tIncomeValue = iw.rX(8), sH.tIncomeData = iw.aZc(10, 8, 512), sH.iIncomeType = iw.rX(2), sH.iIncomeValue = iw
			.rX(8), sH.iIncomeData = iw.aZc(10, 8, 512), sH.sResourcesType = iw.rX(2), sH.sResourcesValue = iw.rX(11), sH.sResourcesData = iw.aZc(10, 11, 512), sH.a8D = iw.aZc(10, 30, 0), !! function() {
				var iw = bK,
					zg = iw.rX(5),
					aZe = iw.rX(30),
					aZf = iw.rX(30);
				if (aZe + aZf > 8 * iw.size) return void aZV("Corrupted File");
				return function(fa) {
						var aZi = new Uint8Array(fa),
							aZj = new Uint16Array(fa),
							aZk = new Uint32Array(fa),
							aZl = new Uint32Array(fa);
						bC.rj.aZK = aZi, bC.rj.aZL = aZj, bC.rj.aZM = aZk, bC.rj.aZN = aZl;
						for (var aC = 0; aC < fa; aC++) {
							var id = bK.rX(4);
							aZi[aC] = id, aZj[aC] = bK.rX(9), 0 === id ? aZk[aC] = bK.rX(22) : 1 === id ? (aZk[aC] = bK.rX(10), aZl[aC] = bK.rX(10)) : 2 === id ? (aZk[aC] = bK.rX(10), aZl[aC] = bK.rX(9)) : 3 === id ? (aZk[aC] = bK.rX(10),
								aZl[aC] = bK.rX(27)) : 4 === id ? (aZk[aC] = bK.rX(10), aZl[aC] = bK.rX(16)) : 5 === id || 6 === id ? aZk[aC] = bK.rX(10) : 7 === id ? aZk[aC] = bK.rX(1) : 10 === id && (aZk[aC] = bK.rX(20), aZl[aC] = bK
								.rX(22))
						}
					}(aZe),
					function(fa, zg) {
						var aZO = new Uint8Array(fa),
							aZP = new Array(fa);
						aZP.fill(0), bC.rj.aZO = aZO, bC.rj.aZP = aZP;
						for (var aC = 0; aC < fa; aC++) aZO[aC] = bK.rX(1), aZP[aC] = bK.rX(zg)
					}(aZf, zg), 1
			}()) && (bK.eJ < 8 * bK.size - 13 || bK.eJ > 8 * bK.size ? (aZV("Out Of Bounds Error: " + bK.eJ + " " + 8 * bK.size), !1) : (bC.rj.a85 = s6, 2 !== aE.data.mapType || (aZV("Load base64 image...", 2), aZS)))
	}, this.aMm = function(aLo, aZW) {
		var a6B = document.createElement("canvas"),
			ic = a6B.getContext("2d");
		if (a6B.width = aLo.width, a6B.height = aLo.height, ic.drawImage(aLo, 0, 0), aE.data.canvas = a6B, aZR || aZW) return aE.a3I ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aWC()
	}
}

function aZD() {
	this.a2m = function() {
		var zg = function() {
				for (var aZP = bC.rj.aZP, fa = aZP.length, max = 0, aC = 0; aC < fa; aC++) max = Math.max(max, aZP[aC]);
				return zm(Math.max(max, 1))
			}(),
			j = (sH = aE.data, (j = bH).dk(), j.a9(12, m.rVersion), j.eJ += 43, j.a9(2, sH.mapType), j.a9(8, sH.mapProceduralIndex), j.a9(8, sH.mapRealisticIndex), j.a9(14, sH.mapSeed), j.aZs(sH.mapName, 5), 2 === sH.mapType && j.aZt(sH.canvas),
				j.a9(1, sH.passableWater), j.a9(1, sH.passableMountains), j.a9(10, sH.playerCount), j.a9(10, sH.humanCount), j.a9(9, sH.selectedPlayer), j.a9(1, sH.gameMode), j.a9(2, sH.playerMode), j.a9(2, sH.battleRoyaleMode), j.a9(4, sH
					.numberTeams), j.a9(1, sH.isZombieMode), j.a9(1, sH.isContest), j.a9(1, sH.isReplay), j.dr(sH.elo, 2, 14), j.a9(1, sH.colorsType), j.a9(1, sH.colorsPersonalized), j.dr(sH.colorsData, 10, 18), j.a9(1, sH.selectableColor), j.dr(
					sH.teamPlayerCount, 4, 10), j.a9(1, sH.neutralBots), j.a9(2, sH.botDifficultyType), j.a9(4, sH.botDifficultyValue), j.dr(sH.botDifficultyTeam, 4, 4), j.dr(sH.botDifficultyData, 10, 4), j.a9(2, sH.spawningType), j.a9(14, sH
					.spawningSeed), j.dr(sH.spawningData, 11, 12), j.a9(1, sH.selectableSpawn), j.a9(2, sH.playerNamesType), j.aZu(sH.playerNamesData, 10, 5), j.a9(1, sH.selectableName), j.a9(2, sH.aIncomeType), j.a9(8, sH.aIncomeValue), j.dr(sH
					.aIncomeData, 10, 8), j.a9(2, sH.tIncomeType), j.a9(8, sH.tIncomeValue), j.dr(sH.tIncomeData, 10, 8), j.a9(2, sH.iIncomeType), j.a9(8, sH.iIncomeValue), j.dr(sH.iIncomeData, 10, 8), j.a9(2, sH.sResourcesType), j.a9(11, sH
					.sResourcesValue), j.dr(sH.sResourcesData, 10, 11), j.dr(sH.a8D, 10, 30), ! function(zg) {
					var j = bH,
						aZK = bC.rj.aZK,
						gJ = bC.rj.aZL,
						gL = bC.rj.aZM,
						gN = bC.rj.aZN,
						fa = aZK.length;
					j.a9(5, zg), j.a9(30, fa), j.a9(30, bC.rj.aZP.length);
					for (var aC = 0; aC < fa; aC++) {
						var ek = aZK[aC];
						j.a9(4, ek), j.a9(9, gJ[aC]), 0 === ek ? j.a9(22, gL[aC]) : 1 === ek ? (j.a9(10, gL[aC]), j.a9(10, gN[aC])) : 2 === ek ? (j.a9(10, gL[aC]), j.a9(9, gN[aC])) : 3 === ek ? (j.a9(10, gL[aC]), j.a9(27, gN[aC])) : 4 === ek ? (j
							.a9(10, gL[aC]), j.a9(16, gN[aC])) : 5 === ek || 6 === ek ? j.a9(10, gL[aC]) : 7 === ek ? j.a9(1, gL[aC]) : 10 === ek && (j.a9(20, gL[aC]), j.a9(22, gN[aC]))
					}
				}(zg), ! function(zg) {
					for (var j = bH, aZO = bC.rj.aZO, aZP = bC.rj.aZP, fa = aZO.length, aC = 0; aC < fa; aC++) j.a9(1, aZO[aC]), j.a9(zg, aZP[aC])
				}(zg), bH.eJ),
			sH = bO.g1(j - 1, 6) + 1,
			zg = (bG.aXt(6 * sH) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eJ = 24, j.a9(31, j.h.length), j.eJ = 12, j.a9(12, function() {
					for (var h = bH.h, fa = h.length, aYR = m.rVersion, aC = 3; aC < fa; aC++) aYR = aYR + h[aC] & 4095;
					return aYR
				}())
			}(), bK.dk(bH.h), bI.f1.ue(bI.f1.uf(sH)));
		return bK.x4(), bH.dk(), zg
	}
}

function ct() {
	var ek, by = !1,
		aZw = !1,
		aZx = -1e4,
		aZy = -1,
		aZz = 0;

	function resize(aa3) {
		ek = 0, ac.v2() && (aa1(aa3) || by) && (by = !1, bf.resize(), bZ.aFO.resize(), aZ.dk(), bb.dk(), aa.resize(), aU.resize(), aP.resize(), bw.resize(), u.resize(), 1 <= aE.a3I ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(),
			aO.resize(), aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aCX()) : (ab.aK6(), ab.aK7()), bi.ds = !0)
	}

	function aa0(g2) {
		return g2 && 128 < g2 ? Math.floor(g2) : 128
	}

	function aa1(aa3) {
		var j, k, aa5, uh, aBv;
		if (!(0 < i.uI)) return uh = aa0(document.documentElement.clientWidth), aBv = aa0(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = uh, k = aBv, aa5 = 0 !== a1.id || j < k ?
			700 : 1200, aa5 = Math.min(aa5 / ((j + k) / 2), 1), aa5 = 0 === bm.buffer.data[1].value ? 2 * aa5 / 3 : Math.min(aa5 + (bm.buffer.data[1].value - 1) * (1 - aa5) / 2, 1), i.l = (window.devicePixelRatio || 1) * aa5, __fx.hoveringTooltip
			.canvasPixelScale = i.l, aa3 && !aZw ? (aZw = !0, u.removeChild(document.body, a4r)) : aZw && (aZw = !1, document.body.appendChild(a4r)), j = Math.floor(.5 + uh * i.l), k = Math.floor(.5 + aBv * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aF0(j, k), i.max = a9d(j, k), i.im = bO.g1(j + k, 2), i.xv = j / k, a4r.width = j, a4r.height = k, a4r.style.width = uh + "px", a4r.style.height = aBv + "px", aZy = bi.ea + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.im = 0, this.xv = 1, this.l = 1, this.uI = 0, this.dl = function() {
		this.j = aa0(document.documentElement.clientWidth) + 2, this.k = aa0(document.documentElement.clientHeight) + 2
	}, this.dk = function() {
		ek = 1, a4r = document.getElementById("canvasA"), 2 === a1.id && (a4r.style.webkitUserSelect = "none"), (xz = a4r.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aa1(0)
	}, this.ef = function() {
		50 <= ++ek && resize(0), -1 === aZy || bi.ea < aZy || (aZy = -1, 2e3 * ++aZz >= bi.ea + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.dv = function(kA) {
		by = !0, resize(kA)
	}, this.a5W = function() {
		aZx + 1e3 > bi.ea || (aZx = bi.ea, resize(0))
	}
}

function dN() {
	this.aY5 = new aa7, this.a4C = new aa8, this.aYM = new aa9
}

function aa9() {
	var aaA = aaB(),
		aaC = aaD(),
		aaE = aaF();
	this.rX = function() {
		return 123
	}, this.a2m = function() {
		bJ.f1.zc(bm.buffer.data[183].value, 15), bG.a9(14, aaA), bG.a9(7, aaC), bG.a9(12, aaE)
	}
}

function aaB() {
	for (var ek = document.createElement("canvas"), ek = (ek.width = 24, ek.height = 24, ek.getContext("2d", {
			alpha: !1
		})), fd = (ek.fillStyle = "rgb(0,0,0)", ek.fillRect(0, 0, 24, 24), ek.font = "22px system-ui", ek.textBaseline = "middle", ek.textAlign = "center", ek.fillStyle = "rgb(255,255,255)", ek.fillText("Q", 12, 12), ek.getImageData(0, 0, 24, 24)
			.data), fa = fd.length, lq = 0, aC = 0; aC < fa; aC += 4) lq += fd[aC];
	return 16383 & lq
}

function aaD() {
	var fd = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fd + .5) / 15))
}

function aaF() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aa8() {
	this.a4D = function() {
		for (var h8, fa = am.lR, w4 = am.lW, a3x = ah.a3x, aBj = this.aLX(), aC = 0; aC < fa; aC++) h8 = w4[aC], bD.gw.kI(h8) || (a3x[h8] = aBj);
		var ro = ah.ro,
			jy = ah.jy,
			jz = ah.jz,
			a3v = ah.a3v,
			fa = aE.kv;
		for (aC = 0; aC < fa; aC++)(0 === a3v[aC] || jz[aC] < 1 || 2 * ro[aC] > 3 * (jy[aC] + jz[aC])) && (a3x[aC] = 0);
		var a4A = 0;
		for (aC = 0; aC < fa; aC++) a4A += 0 < a3x[aC];
		return a4A
	}, this.aLX = function() {
		return Math.min(65535, bi.ks())
	}
}

function aa7() {
	function aaJ(h, g2, iS) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (g2 >> (aC + iS) % 30 & 1)) % 256
	}
	this.ef = function(aaG, aaH) {
		var h = new Uint8Array(256);
		return function(h, aaG, aaH) {
				var aC, aaL = 3 + (4 + aaG) % 32768,
					aaM = 12 + aaH % 32768,
					aaN = 17 + ((aaG & aaH) + (aaG | aaH) + aaG) % 32768;
				for (aC = 0; aC < 256; aC++) aaL = 1 + aaL * aaM % aaN, h[aC] = aaL % 256
			}(h, aaG, aaH), aaJ(h, aaG, 2), aaJ(h, aaH, 7),
			function(h) {
				var aC, g2, eJ = 0;
				for (aC = 0; aC < 3e4; aC++) g2 = h[eJ], h[eJ] = (g2 + aC + h[(eJ + aC) % 256]) % 256, eJ = (g2 + aC + eJ + (g2 & eJ)) % 256
			}(h),
			function(h) {
				var aC, aBv = 1,
					vO = 1;
				for (aC = 0; aC < 256; aC += 2) aBv = (1 + aBv) * (h[aC] + 1) % 1073741824, vO = (1 + vO) * (h[aC + 1] + 1) % 1073741824;
				return [aBv, vO]
			}(h)
	}, this.aY6 = function(aaO, aaP, aaQ, result) {
		for (var h3 = 1 << aaO, aC = 0; aC < h3; aC++)
			if (this.aaR(aC, aaP, aaQ) === result) return aC;
		return 0
	}, this.aaR = function(aaS, aaP, aaQ) {
		for (var a0h = aaP + aaS, a0q = aaQ + aaS, g2 = a0h + a0q & 2147483647, ft = 1; ft <= 16; ft++) g2 = (g2 = (g2 ^ g2 >> ft) >>> 1 + (3 & a0h)) * (7 + (1023 & (a0h | a0q))) & 1073741823, a0q >>= 1 + (1 & (a0h >>= 1 + (1 & (g2 += 65535 &
			a0q))));
		return g2 &= 1073741823
	}
}

function cq() {
	var aaT, aaU, ir, aaV;
	this.dk = function() {
		var aC, fh, fj, aUJ, aaW, j, k, ox, iZ, zw, g2, h8, fq, ft, aaZ;
		if (function() {
				if (ir = !0, aaV = "rgb(" + bV.zu[0] + "," + bV.zu[1] + "," + bV.zu[2] + ")", bV.aPL(bV.fG)) return 1;
				return ir = !1, 0
			}()) aaU = null;
		else {
			for (aaT = bO.g1(96, 4), aaW = 1 === bV.fG ? (aUJ = 0, 160) : (aUJ = 128, 32), aaV = "rgb(" + aUJ + "," + aUJ + "," + aUJ + ")", aaU = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (aaU[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fl : aaT, k = aC % 2 == 0 ? aaT : bV.fm + 2 * aaT, aaU[aC].width = j, aaU[aC].height = k, zw = (iZ = (ox = aaU[aC].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (fj = aaT - 1; 0 <= fj; fj--)
						for (g2 = aaW + Math.floor((fj + 1) * (aUJ - aaW) / (aaT + 1)), fh = j - 1; 0 <= fh; fh--) zw[h8 = 4 * ((0 === aC ? aaT - fj - 1 : fj) * j + fh)] = g2, zw[h8 + 1] = g2, zw[h8 + 2] = g2, zw[h8 + 3] = 255;
				else {
					for (fh = aaT - 1; 0 <= fh; fh--)
						for (g2 = aaW + Math.floor((fh + 1) * (aUJ - aaW) / (aaT + 1)), fj = k - 1 - aaT; aaT <= fj; fj--) zw[h8 = 4 * (fj * j + (3 === aC ? aaT - fh - 1 : fh))] = g2, zw[h8 + 1] = g2, zw[h8 + 2] = g2, zw[h8 + 3] = 255;
					for (ft = 1; 0 <= ft; ft--)
						for (fh = aaT - 1; 0 <= fh; fh--)
							for (fj = aaT - 1; 0 <= fj; fj--) fq = (Math.pow(fh * fh + fj * fj, .5) + 1) / (aaT + 1), g2 = aaW + Math.floor((1 < fq ? 1 : fq) * (aUJ - aaW)), zw[h8 = 4 * ((0 === ft ? aaT - fj - 1 : fj + ft * (k - aaT)) * j + (
								1 === aC ? fh : aaT - fh - 1))] = g2, zw[h8 + 1] = g2, zw[h8 + 2] = g2, zw[h8 + 3] = 255
				}
				ox.putImageData(iZ, 0, 0)
			}
			aaZ = aaW, bV.zp.fillStyle = "rgb(" + aaZ + "," + aaZ + "," + aaZ + ")", bV.zp.fillRect(0, 0, bV.fl, 1), bV.zp.fillRect(0, bV.fm - 1, bV.fl, 1), bV.zp.fillRect(0, 0, 1, bV.fm), bV.zp.fillRect(bV.fl - 1, 0, 1, bV.fm)
		}
	}, this.a1Q = function() {
		var ft = ir ? 0 : -aaT;
		aR4(ft, ft, bV.fl - 2 * ft, bV.fm - 2 * ft, bd.aaa, bd.aab, bd.aac, bd.aad) || (xz.fillStyle = aaV, xz.fillRect(0, 0, i.j, i.k))
	}, this.xy = function() {
		ir || (aR3(0, -aaT, bV.fl, aaT, bd.aaa, bd.aab, bd.aac, bd.aad) && xz.drawImage(aaU[0], bd.aae, bd.aaf - aaT), aR3(bV.fl, -aaT, aaT, bV.fm + 2 * aaT, bd.aaa, bd.aab, bd.aac, bd.aad) && xz.drawImage(aaU[1], bd.aae + bV.fl, bd.aaf - aaT),
			aR3(0, bV.fm, bV.fl, aaT, bd.aaa, bd.aab, bd.aac, bd.aad) && xz.drawImage(aaU[2], bd.aae, bd.aaf + bV.fm), aR3(-aaT, -aaT, aaT, bV.fm + 2 * aaT, bd.aaa, bd.aab, bd.aac, bd.aad) && xz.drawImage(aaU[3], bd.aae - aaT, bd.aaf - aaT))
	}
}

function dC() {
	this.aLV = new aag, this.a1T = new aah, this.z = new aai, this.jN = new aaj, this.aaZ = new aak, this.mq = new aal, this.kj = new aam, this.li = new aan, this.aao = new aap, this.aaq = new aar, this.n1 = new aas, this.iA = new aat, this.mH =
		new aau, this.lk = new aav, this.iD = new aaw, this.mu = new aax, this.rw = new aay, this.dk = function() {
			this.mH.dk(), this.a1T.dk(), this.z.dk(), this.jN.dk(), this.aaZ.dk(), this.aaq.dk(), this.mu.dk()
		}, this.xy = function() {
			this.aaq.xy(), this.a1T.xy()
		}
}

function aam() {
	this.ef = function(player) {
		return !!bQ.n1.n2(player) && !(bQ.z.kz[player] >= Math.max(3 * ap.performance.m9, aF.l9[aF.iJ[player]]) || !bD.gw.n3(player, aF.l7[aF.iJ[player]], 32, 0)) && (aX.aEn() ? function(player) {
			var ab1 = bQ.lk.aEq(),
				fa = ab1.length;
			if (0 === fa) return !1;
			ab1 = ab1[az.kC(fa)], fa = bQ.z.mo[ab1];
			if (bQ.mu.mv(player, fa)) return !1;
			return !! function(player, mx) {
				var mx = bP.jL(bQ.z.n0[mx]),
					hp = bP.fi(mx),
					mx = bP.fk(mx),
					ny = ah.jT[player],
					nz = ah.jV[player],
					oB = ah.jU[player],
					player = ah.jW[player],
					oB = Math.max(hp - oB, ny - hp),
					ny = Math.max(mx - player, nz - mx);
				return oB < 100 && ny < 100
			}(player, ab1) && !!bQ.iD.rv(player, fa, 1) && (bD.gw.n5(player), bQ.z.n6(player), !0)
		}(player) : !!(ap.jm.ef(player) || ap.jb.ef(player) || ap.jd.ef(player)) && (function(player) {
			bR.gC[1] = 4, bD.gw.n5(player), bQ.z.n6(player)
		}(player), !0))
	}
}

function aax() {
	var ab4 = 0,
		ab5 = null;
	this.dk = function() {
		null === ab5 && (ab5 = new Uint16Array(2 * bQ.z.l9)), ab4 = 0
	}, this.ej = function(ab6, mu) {
		var ab7 = ab5;
		ab7[ab4++] = ab6, ab7[ab4++] = mu
	}, this.mv = function(player, mt) {
		for (var ab7 = ab5, fa = ab4, aC = 0; aC < fa; aC += 2)
			if (ab7[aC] === mt && bQ.lk.ab8(ab7[aC + 1]) && player === bQ.z.mp[bR.gC[2]] >> 3) return !0;
		return !1
	}, this.ab9 = function(abA) {
		var mq = bQ.z.mm[abA];
		if (!(mq < 64)) {
			for (var mt = bQ.z.mo[abA], ab7 = ab5, fa = ab4, aC = fa - 2; 0 <= aC; aC -= 2)
				if (ab7[aC] === mt) {
					{
						abF = void 0;
						var abF = ab7[aC + 1];
						bQ.lk.ab8(abF) && bQ.mu.abN(bR.gC[2])
					}
					ab7[aC] = ab7[fa - 2], ab7[aC + 1] = ab7[fa - 1], fa -= 2
				} ab4 = fa
		}
	}, this.abC = function(abD, abE) {
		for (var abF = bQ.z.mo[abD], mt = -1, ab7 = ab5, fa = ab4, aC = 1; aC < fa; aC += 2)
			if (ab7[aC] === abF) {
				mt = ab7[aC - 1];
				break
			} if (-1 === mt) return !1;
		if (!bQ.lk.ab8(mt)) return !1;
		var abA = bR.gC[2],
			mG = bQ.z.mn[abA];
		if (abE === mG[mG.length - 1]) bQ.z.mn[abD] = bQ.mH.abG(bQ.z.mn[abD], bQ.mH.mP(mG));
		else {
			var abH = bQ.lk.abI(mG, abE);
			if (-1 === abH) return !1;
			var abJ = bQ.z.mz[abA];
			abH === abJ ? (abA = bP.jL(bQ.z.n0[abA]), bQ.z.mn[abD] = bQ.mH.abL(bQ.z.mn[abD], mG, abH, abE, bP.j3(mG[abH], abE) > bP.j3(mG[abH], abA))) : bQ.z.mn[abD] = bQ.mH.abL(bQ.z.mn[abD], mG, abH, abE, abJ < abH)
		}
		return !0
	}, this.abN = function(abO) {
		var mG, lq = bQ.z,
			mq = lq.mm[abO];
		return mq % 64 != 5 && (mG = lq.mn[abO], lq.abP[abO] = 65535 - lq.abP[abO], lq.mz[abO] = mG.length - lq.mz[abO] - 2, lq.mn[abO] = bQ.mH.mP(mG), lq.mm[abO] = mq - mq % 64 + 5, !0)
	}
}

function aas() {
	this.n2 = function(player) {
		return !!aE.data.passableWater && bQ.z.ml !== bQ.z.l9 && bQ.z.kz[player] !== bQ.z.abQ && 0 !== ah.hH[player].length
	}, this.rr = function(aYt) {
		var mq = bR.gC[1];
		return !(4 <= mq || !bQ.lk.abR(bP.fQ(aYt))) && ad.fV(bP.fQ(bP.jP(aYt, mq)))
	}
}

function aag() {
	this.aLW = function(player) {
		for (var aB9 = bQ.z.aB9, uu = player << 3, aC = uu + bQ.z.kz[player] - 1; uu <= aC; aC--) this.abS(aB9[aC])
	}, this.abS = function(abT) {
		var z = bQ.z,
			abU = z.ml - 1,
			abV = z.mp[abT],
			abW = z.abX[abT],
			abY = z.n0[abT];
		z.ml = abU, z.mp[abT] = z.mp[abU], z.n0[abT] = z.n0[abU], z.abP[abT] = z.abP[abU], z.a9v[abT] = z.a9v[abU], z.abX[abT] = z.abX[abU], z.mo[abT] = z.mo[abU], z.mm[abT] = z.mm[abU], z.abZ[abT] = z.abZ[abU], z.mn[abT] = z.mn[abU], z.mz[abT] =
			z.mz[abU], z.aB9[z.mp[abT]] = abT,
			function(aYs) {
				var player = aYs >> 3,
					z = bQ.z,
					fa = z.kz[player] - 1,
					abc = (player << 3) + fa;
				z.kz[player] = fa, abc !== aYs && (z.aB9[aYs] = z.aB9[abc], z.mp[z.aB9[aYs]] = aYs)
			}(abV), bQ.jN.jN[bP.jM(z.n0[abT])][z.abX[abT]] = abT, abU = bP.jM(abY), abV = abW, abU = bQ.jN.jN[abU], z = abU.pop(), abV !== abU.length && (abU[abV] = z, bQ.z.abX[z] = abV)
	}
}

function aah() {
	var abe, abf = 8,
		abg = null;

	function abl(zw, fM, eJ) {
		fM *= 4;
		zw[fM] = 255, zw[1 + fM] = 255, zw[2 + fM] = eJ, zw[3 + fM] = 255
	}

	function abn(ic, aaV) {
		var fh, fj, ix, fM, abo, abp, iW = abf,
			iZ = bD.sP.getImageData(ic, iW, iW),
			zw = iZ.data,
			lq = (iW >> 1) - .5,
			abr = bD.sX.a5j(aaV, .5);
		for (bD.sX.a5l(aaV, abr, 300) || bD.sX.a5n(aaV, 100), fj = 0; fj < iW; fj++)
			for (fh = 0; fh < iW; fh++) abp = (iW - 1.5) * (iW - 1.5) / 4, zw[fM = 4 * (fj * iW + fh)] = (abo = (ix = (ix = fh - lq) * ix + (ix = fj - lq) * ix) <= (iW - 4.5) * (iW - 4.5) / 4 ? abr : aaV)[0], zw[1 + fM] = abo[1], zw[2 + fM] = abo[2],
				zw[3 + fM] = abp < ix ? 0 : 255;
		ic.putImageData(iZ, 0, 0)
	}
	this.dk = function() {
		var eJ, iW, a6B, ic, iZ, zw;
		(abe = abe || new Array(aE.fX)).fill(null), eJ = 255, iW = abf + 4, a6B = bD.sP.zl(iW, iW), ic = bD.sP.getContext(a6B, !0), iZ = bD.sP.getImageData(ic, iW, iW), abl(zw = iZ.data, iW + 1, eJ), abl(zw, iW + 2, eJ), abl(zw, 2 * iW + 1, eJ),
			abl(zw, 2 * iW - 3, eJ), abl(zw, 2 * iW - 2, eJ), abl(zw, 3 * iW - 2, eJ), abl(zw, iW * (iW - 3) + 1, eJ), abl(zw, iW * (iW - 2) + 1, eJ), abl(zw, iW * (iW - 2) + 2, eJ), abl(zw, iW * (iW - 2) - 2, eJ), abl(zw, iW * (iW - 1) - 3, eJ),
			abl(zw, iW * (iW - 1) - 2, eJ), ic.putImageData(iZ, 0, 0), abg = a6B,
			function() {
				if (aE.iU)
					for (var a6B = new Array(bj.lI.length), fa = aE.fX, abj = abe, aE8 = bj.aE8, aC = 0; aC < fa; aC++) {
						var a8e = aE8[aC];
						a6B[a8e] || (a6B[a8e] = function(a8e) {
							var a6B = bD.sP.zl(abf, abf),
								ic = bD.sP.getContext(a6B, !0),
								h = bR.g9;
							return h.set(bj.aUK[a8e]), abn(ic, h), a6B
						}(a8e)), abj[aC] = a6B[a8e]
					}
			}()
	}, this.xy = function() {
		var aC, player, abt, aRC, iJ, iw, abv, abx, aby, n0 = bQ.z.n0,
			mp = bQ.z.mp,
			a9v = bQ.z.a9v,
			abZ = bQ.z.abZ,
			abz = abe,
			ac0 = aE.fK,
			fa = bQ.z.ml,
			ac1 = i.j,
			ac2 = i.k,
			ac3 = bV.fl << 4,
			fP = io,
			fE = fP / abf,
			ny = jE / fP,
			nz = jF / fP,
			ix = (ac1 + jE) / fP - ny,
			j0 = (ac2 + jF) / fP - nz,
			ic = xz;
		for (ic.imageSmoothingEnabled = fP < 9, bD.sP.textAlign(ic, 1), bD.sP.textBaseline(ic, 1), aC = 0; aC < fa; aC++) player = mp[aC] >> 3, iJ = a9v[aC], abt = .9 + .1 * Math.log10(iJ), aRC = (iw = n0[aC]) % ac3 / 16 - abt, iw = ac2 * (Math
			.floor(iw / ac3) / 16 - abt - nz) / j0, abv = -2 * (aby = fP * abt) * (1 + (abx = +(player === ac0)) / 8), abx = abx * aby / 4, (aby = ac1 * (aRC - ny) / ix) < abv || iw < abv || ac1 + abx < aby || ac2 + abx < iw || (aRC = 2 *
			abt * fE, abv = abt * fP, null === (abx = abz[player]) && (abz[player] = abx = function(player) {
				var a6B = bD.sP.zl(abf, abf);
				return abn(bD.sP.getContext(a6B, !0), ad.aAk(player)), a6B
			}(player)), player === ac0 && (ic.setTransform(aRC, 0, 0, aRC, aby - 2 * aRC, iw - 2 * aRC), ic.drawImage(abg, 0, 0)), ic.setTransform(aRC, 0, 0, aRC, aby, iw), ic.drawImage(abx, 0, 0), (abt = Math.floor(function(iJ) {
				if (iJ < 1e3) return .42;
				if (iJ < 1e4) return .34;
				if (iJ < 1e6) return .26;
				if (iJ < 1e8) return .19;
				return .15
			}(iJ) * abv)) < 6) || (ic.setTransform(1, 0, 0, 1, 0, 0), ic.fillStyle = abZ[aC] ? bE.q1 : bE.pR, ic.font = bD.sP.uA(1, abt), ic.fillText(bD.tN.a2b(iJ), aby + abv, iw + abv + .1 * abt));
		ic.imageSmoothingEnabled = !1, ic.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aar() {
	var ac6;
	this.dk = function() {
		if (!ac6) {
			ac6 = new Array(bj.ac8.length);
			for (var aC = 0; aC < ac6.length; aC++) ac6[aC] = bS.z.ac9(20, bj.ac8[aC])
		}
	}, this.xy = function() {
		var oI = io;
		if (!(5 <= oI)) {
			var ac1 = i.j,
				ac2 = i.k,
				ny = jE / oI,
				nz = jF / oI,
				oB = (ac1 + jE) / oI,
				oC = (ac2 + jF) / oI,
				h9 = -20 * oI,
				acA = .5 * h9,
				ac3 = bV.fl << 4,
				fa = bQ.z.ml,
				n0 = bQ.z.n0,
				mp = bQ.z.mp,
				aE8 = bj.aE8,
				a6B = ac6,
				ic = xz;
			3 < oI && (ic.globalAlpha = .5 * (5 - oI));
			for (var aC = 0; aC < fa; aC++) {
				var iw = n0[aC],
					fh = ac1 * (iw % ac3 / 16 - ny) / (oB - ny) + acA,
					iw = ac2 * (Math.floor(iw / ac3) / 16 - nz) / (oC - nz) + acA;
				ac1 < fh || ac2 < iw || fh < h9 || iw < h9 || (ic.setTransform(oI, 0, 0, oI, fh, iw), fh = a6B[aE8[mp[aC] >> 3]], ic.drawImage(fh, 0, 0))
			}
			ic.globalAlpha = 1, ic.setTransform(oI, 0, 0, oI, 0, 0)
		}
	}
}

function aav() {
	this.acD = function(player, id) {
		for (var acE = ah.hH[player], fa = acE.length, aC = 0; aC < fa; aC++)
			if (bP.ip(acE[aC], id)) return !0;
		return !1
	}, this.acF = function(player, fM) {
		for (var j5, acG, fE, acE = ah.hH[player], fa = acE.length, j = bV.fl, acI = bP.fi(fM), acJ = bP.fk(fM), fg = -1, min = bV.fl * bV.fl + bV.fm * bV.fm, id = ad.fI(bP.fQ(fM)), aC = 0; aC < fa; aC++)(acG = (acG = acI - (j5 = (fE = acE[
			aC]) >> 2) % j) * acG + (acG = acJ - ~~((.5 + j5) / j)) * acG) < min && bP.ip(fE, id) && (min = acG, fg = j5);
		return fg
	}, this.ll = function(j4, j5) {
		for (var id = ad.fI(bP.fQ(j5)), iq = bP.ih, fE = bP.fQ(j4), acK = -1, aC = 0; aC < 4; aC++) {
			var fP = fE + iq[aC];
			ad.ir(fP) && ad.fI(fP) === id && (-1 === acK || bP.j6(bP.fO(fP), j5) < bP.j6(acK, j5)) && (acK = bP.fO(fP))
		}
		return acK
	}, this.mK = function(player, fM) {
		for (var iq = bP.ih, fE = bP.fQ(fM), aC = 0; aC < 4; aC++) {
			var fP = fE + iq[aC];
			if (ad.hA(fP) && ad.a1O(player, fP)) return !0
		}
		return !1
	}, this.mL = function(player, fM) {
		for (var iq = bP.ih, fE = bP.fQ(fM), aC = 0; aC < 4; aC++) {
			var fP = fE + iq[aC];
			if (ad.fR(fP)) return !0;
			if (ad.hA(fP)) {
				fP = ad.fS(fP);
				if (player !== fP && bv.fT(player, fP)) return !0
			}
		}
		return !1
	}, this.mr = function(fM) {
		for (var iq = bP.ih, fE = bP.fQ(fM), aC = 0; aC < 4; aC++) {
			var fP = fE + iq[aC];
			if (ad.hA(fP)) {
				fP = ad.fS(fP);
				if (bD.gw.kI(fP)) return fP
			}
		}
		return -1
	}, this.abR = function(fE) {
		if (ad.ir(fE))
			for (var iq = bP.ih, aC = 0; aC < 4; aC++)
				if (ad.fV(fE + iq[aC])) return !0;
		return !1
	}, this.nx = function(player, id) {
		for (var uu = player << 3, uv = uu + bQ.z.kz[player], mo = bQ.z.mo, aB9 = bQ.z.aB9, aC = uu; aC < uv; aC++) {
			var aBA = aB9[aC];
			if (mo[aBA] === id) return aBA
		}
		return -1
	}, this.o2 = function(player) {
		return 0 === bQ.z.kz[player] ? -1 : bQ.z.aB9[player << 3]
	}, this.a8w = function(mA, mB) {
		var fa = bQ.z.ml;
		if (fa < 1) return -1;
		for (var n0 = bQ.z.n0, acL = 80, aTo = -1, aC = 0; aC < fa; aC++) {
			var fq = bP.it(mA, mB, n0[aC]);
			fq < acL && (acL = fq, aTo = aC)
		}
		return function(aC, mA, mB) {
			if (aC < 0) return;
			var acS = bQ.z.n0[aC],
				acT = bP.iz(acS),
				acS = bP.j2(acS),
				aC = 20 * (.9 + .1 * Math.log10(bQ.z.a9v[aC]));
			return aC = Math.max(aC, bP.jG(bD.sP.uz(.02, 1.7))), bO.aRB(bP.iy(mA), bP.j1(mB), acT, acS, aC)
		}(aTo, mA, mB) ? aTo : -1
	}, this.ab8 = function(nv) {
		for (var fa = bQ.z.ml, mo = bQ.z.mo, aC = 0; aC < fa; aC++)
			if (mo[aC] === nv) return bR.gC[2] = aC, !0;
		return !1
	}, this.aLS = function(player) {
		for (var uu = player << 3, uv = uu + bQ.z.kz[player], aB9 = bQ.z.aB9, a9v = bQ.z.a9v, iJ = 0, aC = uu; aC < uv; aC++) iJ += a9v[aB9[aC]];
		return iJ
	}, this.acN = function(player, abO) {
		abO = bQ.z.mn[abO];
		return this.mK(player, abO[abO.length - 1])
	}, this.acO = function(j4, j5, fq, acP) {
		var j8 = bP.fi(j4),
			j4 = bP.fk(j4),
			jA = bP.fi(j5),
			j5 = bP.fk(j5),
			jA = (fq = Math.max(fq, 1), jA - j8),
			j5 = j5 - j4,
			ix = bO.g1(Math.abs(jA) * acP, fq),
			acP = bO.g1(Math.abs(j5) * acP, fq);
		return bP.fx(j8 + Math.sign(jA) * ix, j4 + Math.sign(j5) * acP)
	}, this.abI = function(mG, fM) {
		for (var fa = mG.length - 1, fh = bP.fi(fM), fj = bP.fk(fM), aC = 0; aC < fa; aC++) {
			var j4 = mG[aC],
				j5 = mG[aC + 1],
				ny = bP.fi(j4),
				j4 = bP.fk(j4),
				oB = bP.fi(j5),
				j5 = bP.fk(j5);
			if (!(fh !== ny && fh !== oB && Math.sign(fh - ny) === Math.sign(fh - oB) || fj !== j4 && fj !== j5 && Math.sign(fj - j4) === Math.sign(fj - j5))) {
				if (ny === oB || j4 === j5) return aC;
				if (Math.abs(fh - ny) === Math.abs(fj - j4) && Math.abs(fh - oB) === Math.abs(fj - j5)) return aC
			}
		}
		return -1
	}, this.aEq = function() {
		for (var acV = mW[0], mp = bQ.z.mp, ml = bQ.z.ml, h = [], aC = 0; aC < ml; aC++) bD.gw.lZ(acV, mp[aC] >> 3) && h.push(aC);
		return h
	}, this.mI = function(player, mG) {
		for (var uu = player << 3, uv = uu + bQ.z.kz[player], aB9 = bQ.z.aB9, mn = bQ.z.mn, i2 = mG[0], lY = mG[mG.length - 1], aC = uu; aC < uv; aC++) {
			var h8 = mn[aB9[aC]];
			if (h8[0] === i2 && h8[h8.length - 1] === lY) return !0
		}
		return !1
	}
}

function aaw() {
	function acY(player, abO) {
		abO = bP.jL(bQ.z.n0[abO]), abO = ad.fI(bP.fQ(abO));
		return !!bQ.lk.acD(player, abO)
	}

	function acW(player) {
		return bQ.n1.n2(player) && !bQ.mH.mN()
	}
	this.iE = function(player, fM) {
		return !!acW(player) && -1 !== (fM = function(player, fM) {
			for (var fa = bQ.z.ml, n0 = bQ.z.n0, mp = bQ.z.mp, acL = bP.ij(), aTo = -1, aC = 0; aC < fa; aC++) {
				var fq = bP.j3(fM, bP.jL(n0[aC]));
				fq < acL && bD.gw.lZ(player, mp[aC] >> 3) && (acL = fq, aTo = aC)
			}
			return aTo
		}(player, fM)) && !!acY(player, fM) && (bR.gC[3] = bQ.z.mo[fM], !0)
	}, this.r2 = function(player, nv) {
		return !!acW(player) && !!bQ.lk.ab8(nv) && !!acY(player, bR.gC[2])
	}, this.rv = function(player, nv, acZ) {
		return !! function(player, nv, acZ) {
			if (acW(player) && bQ.lk.ab8(nv)) {
				nv = bR.gC[2];
				if (bD.gw.lZ(player, bQ.z.mp[nv] >> 3)) {
					if (function(player, abO) {
							return bQ.lk.acN(player, abO) && (bR.h[0] = bQ.mH.mP(bQ.z.mn[abO]), bR.gC[1] = 6, !0)
						}(player, nv)) return 1;
					var ab3 = bP.jL(bQ.z.n0[nv]),
						acd = bQ.lk.acF(player, ab3);
					if (-1 !== acd) {
						acd = bP.j3(acd, ab3);
						if (!(acZ && 120 < acd)) {
							acZ = function(abO, ace, ab3) {
								var mG = bQ.z.mn[abO],
									abO = bQ.z.mz[abO],
									acg = bP.j3(ab3, mG[abO + 1]);
								if (ace <= acg) return bQ.lk.acO(ab3, mG[abO + 1], acg, ace);
								for (var fq = ace - acg, fa = mG.length - 1, aC = abO + 1; aC < fa; aC++) {
									var ach = bP.j3(mG[aC], mG[aC + 1]);
									if (fq <= ach) return bQ.lk.acO(mG[aC], mG[aC + 1], ach, fq);
									fq -= ach
								}
								return mG[fa]
							}(nv, acd, ab3);
							if (bQ.li.rs(player, acZ, 1)) return bR.gC[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, nv, acZ) && (player = bR.gC[2], bQ.z.mm[player] = 64 + bQ.z.mm[player] % 64, bQ.mu.ej(nv, bQ.z.n4), !0)
	}
}

function aal() {
	function acm(player, iJ, ack, ab3) {
		var k4;
		if (ad.fR(ack)) k4 = aE.fX;
		else {
			if ((k4 = ad.fS(ack)) === player) return void bg.h0(player, iJ - bD.gw.gz(player, iJ), 12);
			if (!bv.fT(player, k4)) return void bB.kx.rH(player, k4, iJ)
		}
		ae.kG(player, k4) || ae.kZ(player) ? (ah.h2[player].push(ab3 << 2), ae.ej(player, iJ, k4), aG.k2(player, !0)) : bg.h0(player, iJ, 12)
	}
	this.ef = function() {
		for (var mm = bQ.z.mm, n0 = bQ.z.n0, abP = bQ.z.abP, aC = bQ.z.ml - 1; 0 <= aC; aC--) 65535 === abP[aC] && function(aC, ab3, iR) {
			if (6 === iR) {
				if (bQ.mu.abC(aC, ab3)) return bQ.z.mz[aC]++, bQ.z.abP[aC] = 0, 0
			} else {
				var player = bQ.z.mp[aC] >> 3,
					aC = bQ.z.a9v[aC];
				bg.acl(player), iR < 4 ? acm(player, aC, ab3 + bP.ig[iR] << 2, ab3) : 4 === iR ? function(player, iJ, ab3) {
					var aC, fe, iq = bP.ih,
						fP = bP.fQ(ab3);
					for (aC = 0; aC < 4; aC++)
						if (fe = fP + iq[aC], ad.fR(fe)) return acm(player, iJ, fe, ab3);
					for (aC = 0; aC < 4; aC++)
						if (fe = fP + iq[aC], ad.hA(fe) && !ad.a1O(player, fe)) return acm(player, iJ, fe, ab3);
					for (aC = 0; aC < 4; aC++)
						if (fe = fP + iq[aC], ad.hA(fe)) return acm(player, iJ, fe, ab3)
				}(player, aC, ab3) : 5 === iR && function(player, iJ, ab3) {
					var aC, fe, iq = bP.ih,
						fP = bP.fQ(ab3);
					for (aC = 0; aC < 4; aC++)
						if (fe = fP + iq[aC], ad.hA(fe) && ad.a1O(player, fe)) return acm(player, iJ, fe, ab3);
					for (aC = 0; aC < 4; aC++)
						if (fe = fP + iq[aC], ad.hA(fe)) return acm(player, iJ, fe, ab3);
					for (aC = 0; aC < 4; aC++)
						if (fe = fP + iq[aC], ad.fR(fe)) return acm(player, iJ, fe, ab3)
				}(player, aC, ab3)
			}
			return 1
		}(aC, bP.jL(n0[aC]), mm[aC] % 64) && (bQ.mu.ab9(aC), bQ.aLV.abS(aC))
	}, this.acj = function(player, fM, iR, nv, iJ) {
		if (!(5 <= iR)) {
			var ac0 = aE.fK;
			if (bD.gw.hm(ac0) && bv.fT(player, ac0) && player !== ac0 && 0 !== ah.hH[ac0].length && bD.gw.a6l(player, 5)) {
				for (var ack, fo = !1, aC = 0; aC < 4; aC++)
					if (ack = fM + bP.ig[aC] << 2, ad.fV(ack) && !ad.fR(ack) && ad.fS(ack) === ac0) {
						fo = !0;
						break
					} fo && (aO.aA3(719, 0), iR = iJ < 25e3 ? L(507) + " (" + bD.tN.a2b(iJ) + ") ⛵" : L(508) + " (" + bD.tN.a2b(iJ) + ") 🚢", aO.a1o(180, iR, 719, player, bE.q0, bE.pO, -1, !0, void 0, {
					fu: 1,
					nv: nv
				}))
			}
		}
	}
}

function aai() {
	this.l9 = 512, this.abQ = 8, this.ml = 0, this.n4 = 0, this.mp = new Uint16Array(this.l9), this.n0 = new Uint32Array(this.l9), this.abP = new Uint16Array(this.l9), this.a9v = new Uint32Array(this.l9), this.abX = new Uint16Array(this.l9), this
		.mo = new Uint16Array(this.l9), this.mm = new Uint8Array(this.l9), this.abZ = new Uint8Array(this.l9), this.mn = new Array(this.l9), this.mz = new Uint16Array(this.l9), this.kz = new Uint8Array(aE.fX), this.aB9 = new Uint16Array(this.abQ * aE
			.fX), this.dk = function() {
			this.ml = 0, this.n4 = 0, this.kz.fill(0), this.mn.fill(null)
		}, this.n6 = function(player) {
			var iJ = bR.g7[0],
				mq = bR.gC[1],
				mG = bR.h[0],
				acp = this.n4,
				fa = this.ml,
				acq = bP.jK(mG[0]),
				acr = this.kz[player],
				acs = (player << 3) + acr;
			this.mp[fa] = acs, this.n0[fa] = acq, this.abP[fa] = 0, iJ < 60 && (bD.gw.gx(player, 60 - iJ), iJ = 60), this.a9v[fa] = iJ, this.abX[fa] = bQ.jN.n6(fa, bP.jM(acq)), this.mo[fa] = acp, this.mm[fa] = mq, this.abZ[fa] = 0, this.mn[fa] = mG,
				this.mz[fa] = 0, this.n4 = (acp + 1) % 65536, this.kz[player] = acr + 1, this.aB9[acs] = fa, this.ml++, bQ.mq.acj(player, mG[mG.length - 1], mq, acp, iJ)
		}, this.ef = function() {
			bQ.mq.ef();
			for (var h8 = aE.fK, eb = bQ.lk.aLS(h8), tv = (! function(tv) {
					for (var acx, n0 = tv.n0, a9v = tv.a9v, abZ = tv.abZ, abP = tv.abP, abX = tv.abX, mn = tv.mn, mz = tv.mz, tv = tv.ml, ac3 = bV.fl << 4, aC = tv - 1; 0 <= aC; aC--) {
						var acy = n0[aC],
							mG = mn[aC],
							acz = mz[aC],
							acq = bP.jK(mG[acz]),
							ad0 = bP.jK(mG[acz + 1]),
							ad1 = acq % ac3,
							acq = ~~((acq + .5) / ac3),
							ad3 = ad0 % ac3,
							ad4 = ~~((ad0 + .5) / ac3),
							ad5 = ad3 - ad1,
							ad6 = ad4 - acq,
							fd = Math.max(~~Math.sqrt(ad5 * ad5 + ad6 * ad6 + .5), 1),
							aMP = a9v[aC],
							aMP = (aMP = abZ[aC] ? 4e4 : 25e4 + Math.min(20 * aMP, 3e5) + Math.min(aMP >> 3, 5e4), abP[aC] + Math.max(~~((aMP + .5) / fd), 1));
						65535 <= aMP ? acz + 2 < mG.length ? (mz[aC] = acz + 1, n0[aC] = acx = function(aC, ad7, ad1, ad2, acz, fd, mG, ac3) {
							ad7 = Math.min(ad7 - 65535, 65535);
							var mG = bP.jK(mG[acz + 2]),
								acz = mG % ac3 - ad1,
								mG = ~~((mG + .5) / ac3) - ad2,
								adA = Math.max(~~Math.sqrt(acz * acz + mG * mG + .5), 1);
							return ad7 = Math.min(Math.floor((fd * ad7 + .5) / adA), 65534), bQ.z.abP[aC] = ad7, ad1 + bO.g1(ad7 * acz, 65535) + ac3 * (ad2 + bO.g1(ad7 * mG, 65535))
						}(aC, aMP, ad3, ad4, acz, fd, mG, ac3)) : (n0[aC] = acx = ad0, abP[aC] = 65535) : (abP[aC] = aMP, n0[aC] = acx = ad1 + bO.g1(aMP * ad5, 65535) + ac3 * (acq + bO.g1(aMP * ad6, 65535))), abX[aC] = bQ.jN.ad9(abX[aC],
							acy, acx)
					}
				}(this), ! function(tv) {
					if (bi.ks() % 2 == 1) {
						var aC, iS, lq, fu, ek, adB, a2H, adC, i2, ny, nz, acq, adD, aCc, adF, lY, fa = tv.ml,
							n0 = tv.n0,
							mp = tv.mp,
							a9v = tv.a9v,
							abZ = tv.abZ,
							jN = bQ.jN.jN,
							adH = jN.length,
							adI = bQ.jN.adI,
							ac3 = bV.fl << 4,
							adJ = aE.iU,
							aYh = bj.fY,
							h9 = (fa - 1) * (bO.g1(bi.ks(), 2) % 2);
						for (aC = 0; aC < fa; aC++)
							for (iS = Math.abs(aC - h9), acq = n0[iS], lq = bP.jM(acq), i2 = mp[iS] >> 3, ny = acq % ac3, nz = ~~((acq + .5) / ac3), adF = a9v[iS], fu = 0; fu < 9; fu++)
								if (!((adB = lq + adI[fu]) < 0 || adH <= adB))
									for (adC = jN[adB], a2H = adC.length, ek = 0; ek < a2H; ek++) adD = adC[ek], lY = mp[adD] >> 3, i2 == lY || adJ && aYh[i2] === aYh[lY] && aYh[i2] || (lY = n0[adD], (aCc = ny - lY % ac3) * aCc + (aCc = nz -
										~~((lY + .5) / ac3)) * aCc < 14400 && (lY = a9v[adD], aCc = lY <= adF ? Math.max(1, bO.g1(lY + bO.g1(adF - lY, 10), 10)) : Math.max(1, bO.g1(adF, 10)), a9v[adD] = Math.max(lY - aCc, 0), abZ[
										adD] = 4))
					}
				}(this), ! function(tv) {
					if (bi.ks() % 5 == 3)
						for (var a9v = tv.a9v, fa = tv.ml, aC = 0; aC < fa; aC++) {
							var iJ = a9v[aC];
							a9v[aC] = Math.max(iJ - Math.max(1, iJ >> 7), 0)
						}
				}(this), this), a9v = tv.a9v, abZ = tv.abZ, aC = tv.ml - 1; 0 <= aC; aC--) abZ[aC] = abZ[aC] >> 1, 0 === a9v[aC] && (bQ.mu.ab9(aC), bQ.aLV.abS(aC));
			bg.h0(h8, eb - bQ.lk.aLS(h8), 15)
		}
}

function aaj() {
	this.adK = 32, this.fh = 0, this.fj = 0, this.jO = 0, this.adL = 0, this.adM = 4, this.jN = null, this.adI = new Int16Array(9), this.dk = function() {
		this.jO = 1 + bO.g1(bV.fl - 1, this.adK), this.adL = 1 + bO.g1(bV.fm - 1, this.adK), this.jN = new Array(this.jO * this.adL), bD.sX.a5i(this.jN);
		var fh, fj, adI = this.adI,
			j = this.jO;
		for (fh = -1; fh <= 1; fh++)
			for (fj = -1; fj <= 1; fj++) adI[3 * (1 + fj) + 1 + fh] = fj * j + fh
	}, this.n6 = function(adO, aC) {
		return this.jN[aC].push(adO), this.jN[aC].length - 1
	}, this.ad9 = function(adP, acq, ad0) {
		var adQ, adR, acq = bP.jM(acq),
			ad0 = bP.jM(ad0);
		return acq === ad0 ? adP : (adQ = this.jN[acq].pop(), this.jN[acq].length === adP ? this.n6(adQ, ad0) : (adR = this.jN[acq][adP], this.jN[acq][adP] = adQ, bQ.z.abX[adQ] = adP, this.n6(adR, ad0)))
	}
}

function aan() {
	this.lj = function(player, adS) {
		return -1 !== adS && !!bQ.lk.mL(player, adS) && this.rs(player, adS, 0)
	}, this.rs = function(player, adS, adT) {
		player = function(player, adS, adT) {
			var acd = bQ.lk.acF(player, adS);
			if (-1 === acd) return -1;
			acd = bQ.lk.ll(acd, adS);
			if (-1 === acd) return -1;
			var mE = bQ.mH.mM(acd, adS);
			if (0 <= mE) return mE;
			if (bQ.mH.mN()) return -1;
			if (0 <= (mE = bQ.mH.mM(adS, acd))) return bQ.mH.mO(bQ.mH.mP(bQ.mH.get(mE)));
			if (acd === adS) return bQ.mH.mO(new Uint32Array([acd, adS]));
			if (0 <= (mE = bQ.aao.rs(acd, adS))) return mE;
			return adT ? function(adX, player) {
				var gH = bR.gH,
					buffer = (gH.fill(0), [adX]),
					ii = (gH[adX] = 1, bP.ii),
					adY = -1,
					fa = buffer.length;
				for (; - 1 === adY && fa;) {
					for (var h = [], aC = 0; aC < fa; aC++)
						for (var fM = buffer[aC], a7X = gH[fM], fd = 0; fd < 8; fd++) {
							var zX, a47, fg = fM + ii[fd],
								fE = 4 * fg;
							ad.ir(fE) ? (zX = gH[fg], a47 = a7X + 5 + ((1 & fd) << 1), 0 === zX ? (h.push(fg), gH[fg] = a47) : gH[fg] = Math.min(a47, zX)) : -1 === adY && fd % 2 == 0 && ad.a1L(player, fE) && (adY = fM)
						}
					fa = (buffer = h).length
				}
				return -1 !== adY ? function(j4, ada) {
					var ii = bP.ii,
						adb = -1,
						iR = 0,
						nT = [];
					for (; ada !== j4;)(iR = function(fM, iR) {
						var gH = bR.gH,
							ii = bP.ii,
							a7X = gH[fM];
						if (a7X - gH[fM + ii[iR]] != 5 + ((1 & iR) << 1))
							for (var ft = 0; ft < 8; ft++) {
								var fd = ft + iR + 6 & 7;
								if (a7X - gH[fM + ii[fd]] == 5 + ((1 & fd) << 1)) return fd
							}
						return iR
					}(ada, iR)) !== adb && (nT.push(ada), adb = iR), ada += ii[iR];
					nT.push(j4);
					var mE = bQ.mH.mM(nT[0], j4);
					if (0 <= mE) return mE;
					return bQ.mH.mO(new Uint32Array(nT))
				}(adX, adY) : -1
			}(adS, player) : -1
		}(player, adS, adT);
		return -1 !== player && (bR.h[0] = bQ.mH.get(player), !0)
	}
}

function aap() {
	function add(hp, j9, jB) {
		for (var kB = Math.min(j9, jB), oG = Math.max(j9, jB), fj = kB + 1; fj < oG; fj++)
			if (!ad.ir(bP.jH(hp, fj))) return;
		return 1
	}

	function ade(hr, j8, jA) {
		for (var kB = Math.min(j8, jA), oG = Math.max(j8, jA), fh = kB + 1; fh < oG; fh++)
			if (!ad.ir(bP.jH(fh, hr))) return;
		return 1
	}

	function adf(j8, j9, jA, jB, adV, adS) {
		for (var fa = Math.min(Math.abs(jA - j8), Math.abs(jB - j9)), ix = Math.sign(jA - j8), j0 = Math.sign(jB - j9), aC = 0; aC < fa; aC++)
			if (!ad.ir(bP.jH(j8 += ix, j9 += j0))) return null;
		return j8 === jA ? add(j8, j9, jB) ? new Uint32Array([adV, bP.fx(j8, j9), adS]) : null : ade(j9, j8, jA) ? new Uint32Array([adV, bP.fx(j8, j9), adS]) : null
	}
	this.rs = function(adV, adS) {
		adV = function(adV, adS) {
			var j8 = bP.fi(adV),
				j9 = bP.fk(adV),
				jA = bP.fi(adS),
				jB = bP.fk(adS);
			if (j8 === jA) {
				if (add(j8, j9, jB)) return new Uint32Array([adV, adS])
			} else {
				if (j9 !== jB) return adf(j8, j9, jA, jB, adV, adS) || adf(jA, jB, j8, j9, adV, adS);
				if (ade(j9, j8, jA)) return new Uint32Array([adV, adS])
			}
			return null
		}(adV, adS);
		return null === adV ? -1 : bQ.mH.mO(adV)
	}
}

function aau() {
	var adg = [];
	this.dk = function() {
		adg = []
	}, this.mN = function() {
		return 65536 === adg.length
	}, this.mM = function(adV, adS) {
		for (var mH = adg, fa = mH.length, aC = 0; aC < fa; aC++) {
			var h8 = mH[aC];
			if (h8[0] === adV && h8[h8.length - 1] === adS) return aC
		}
		return -1
	}, this.mP = function(mG) {
		var adh = new Uint32Array(mG.length);
		return adh.set(mG), adh.reverse()
	}, this.abG = function(i2, lY) {
		var h3 = i2.length - 1,
			adi = new Uint32Array(h3 + lY.length);
		return adi.set(i2, 0), adi.set(lY, h3), adi
	}, this.abL = function(i2, lY, z1, fM, adj) {
		adj && (z1 = (lY = this.mP(lY)).length - z1 - 2);
		adj = lY.subarray(z1 + 1 + (fM === lY[z1 + 1])), fM = new Uint32Array(i2.length + adj.length);
		return fM.set(i2, 0), fM.set(adj, i2.length), fM
	}, this.mO = function(mG) {
		return adg.push(mG), adg.length - 1
	}, this.get = function(aC) {
		return adg[aC]
	}, this.mJ = function() {
		return adg
	}, this.adl = function(adV, adS) {
		return null
	}
}

function aay() {
	this.ef = function(player, nv) {
		player = bQ.lk.nx(player, nv);
		return !(player < 0 || !bQ.mu.abN(player) || (bQ.mu.ab9(player), 0))
	}
}

function aak() {
	var a1w = 32,
		a1v = new Array(2);

	function zl(ek) {
		var fh, fj, fM, j0, ix, iW = a1w,
			a6B = bD.sP.zl(iW, iW),
			ic = bD.sP.getContext(a6B, !0),
			iZ = bD.sP.getImageData(ic, iW, iW),
			zw = iZ.data,
			lq = (iW >> 1) - .5,
			lr = Math.sqrt(lq * lq);
		for (zw.fill(255), fj = 0; fj < iW; fj++)
			for (fh = 0; fh < iW; fh++) ix = fh - lq, j0 = fj - lq, fM = 4 * (fj * iW + fh), ix = 714 * (lr - Math.sqrt(ix * ix + j0 * j0)) / lr, zw[2 + fM] = ek, zw[3 + fM] = 255 < ix ? 0 : ix;
		return ic.putImageData(iZ, 0, 0), a6B
	}
	this.adm = -1, this.dk = function() {
		this.adm = -1, a1v[0] || (a1v[0] = zl(255), a1v[1] = zl(0))
	}, this.adn = function(ic, fE, fh, fj, eI, aC) {
		bD.gw.hm(aE.fK) && (ic.setTransform(fE *= 4 / 3 * .625, 0, 0, fE, fh - (eI *= 4 / 3), fj - eI), ic.drawImage(a1v[+(bQ.z.mo[aC] === this.adm)], 0, 0))
	}
}

function aat() {
	function aYy(fh, fa, fj, ado, aCi, g0, player) {
		if (!(fj < 1 || aCi < fj))
			for (var aC = 0; aC <= fa; aC++) {
				var fE = bP.jH(fh, fj);
				if (bQ.lk.abR(fE) && !bD.sX.has(ado, ad.fI(fE)) && ad.a1D(fE, player)) return fE >> 2;
				fh += g0
			}
		return -1
	}

	function aZ2(fj, fa, fh, ado, aYw, g0, player) {
		if (!(fh < 1 || aYw < fh)) {
			fa = Math.max(fa, 0);
			for (var aC = 0; aC <= fa; aC++) {
				var fE = bP.jH(fh, fj);
				if (bQ.lk.abR(fE) && !bD.sX.has(ado, ad.fI(fE)) && ad.a1D(fE, player)) return fE >> 2;
				fj += g0
			}
		}
		return -1
	}

	function aZ6(j4, j5, aYt) {
		return -1 !== j5 && (-1 === j4 || bP.j6(j5, aYt) < bP.j6(j4, aYt)) ? j5 : j4
	}
	this.iB = function(player, aYt) {
		if (bQ.n1.n2(player))
			for (var aYu = bP.ij(), ado = [];;) {
				var adY = function(aYt, aYu, ado, player) {
					for (var hp = bP.fi(aYt), hr = bP.fk(aYt), aYw = bV.fl - 2, aCi = bV.fm - 2, aYx = -1, fd = 0; fd < aYu; fd++) {
						var aCh = Math.max(hp - fd, 1),
							aPf = Math.max(hr - fd, 1),
							a19 = Math.min(hp + fd, aYw),
							a18 = Math.min(hr + fd, aCi),
							j4 = aYy(hp, a19 - hp, hr - fd, ado, aCi, 1, player),
							j5 = aYy(hp - 1, hp - aCh - 1, hr - fd, ado, aCi, -1, player),
							a19 = aYy(hp, a19 - hp, hr + fd, ado, aCi, 1, player),
							aCh = aYy(hp - 1, hp - aCh - 1, hr + fd, ado, aCi, -1, player),
							aZ1 = aZ2(hr, a18 - hr - 1, hp - fd, ado, aYw, 1, player),
							aZ3 = aZ2(hr - 1, hr - aPf - 2, hp - fd, ado, aYw, -1, player),
							a18 = aZ2(hr, a18 - hr - 1, hp + fd, ado, aYw, 1, player),
							aPf = aZ2(hr - 1, hr - aPf - 2, hp + fd, ado, aYw, -1, player);
						if (aYx = aZ6(aYx, j4, aYt), aYx = aZ6(aYx, j5, aYt), aYx = aZ6(aYx, a19, aYt), aYx = aZ6(aYx, aCh, aYt), aYx = aZ6(aYx, aZ1, aYt), aYx = aZ6(aYx, aZ3, aYt), aYx = aZ6(aYx, a18, aYt), 0 <= (aYx = aZ6(aYx, aPf, aYt)) &&
							fd * fd >= bP.j6(aYx, aYt)) return aYx
					}
					return -1
				}(aYt, aYu, ado, player);
				if (-1 === adY) break;
				var id = ad.fI(bP.fQ(adY));
				if (bQ.lk.acD(player, id)) return !! function(player, adY, aYt) {
					for (var iR = bP.jR(adY, aYt), aC = 0; aC < 4; aC++) {
						var fM = bP.jP(adY, iR);
						if (ad.aL1(bP.fQ(fM), player)) return bR.gC[6] = iR, 1;
						iR = (iR + 1) % 4
					}
					return
				}(player, adY, aYt) && (bR.gC[7] = adY, !0);
				ado.push(id)
			}
		return !1
	}
}

function dn() {
	this.aWI = [L(509), L(510), L(511), L(512), L(513), L(514), L(515), L(516), L(517), L(518), L(519), L(520), L(521), L(522), L(523), L(524)];
	var adr = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aFC = new Array(adr.length), this.dk = function() {
		var h = bm.buffer.data[155].value.split(";"),
			lq = h.length;
		if (function() {
				for (var fa = adr.length, aC = 0; aC < fa; aC++) ba.aFC[aC] = adr[aC]
			}(), !(lq > adr.length))
			for (var aC = 0; aC < lq; aC++) h[aC].length && (this.aFC[aC] = h[aC])
	}, this.aWK = function(eJ, code) {
		for (var aFC = this.aFC, adt = adr, s6 = (aFC[eJ] = code, ""), fa = aFC.length, adu = [], aC = 0; aC < fa; aC++) adu.push(aFC[aC] === adt[aC] ? "" : aFC[aC]);
		fa--;
		for (aC = 0; aC < fa; aC++) s6 += adu[aC] + ";";
		bm.qt.qu(155, s6 += adu[fa])
	}, this.aWH = function() {
		bm.qt.qu(155, ""), this.dk()
	}, this.ek = function(code, eJ) {
		return code === this.aFC[eJ] || code === this.aFC[eJ + 1]
	}
}

function de() {
	var adv = new Array(1),
		adw = new Array(1),
		adx = 20,
		eY = 0,
		ady = !1;

	function ae0() {
		adx++, bs.play()
	}
	this.dk = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				adw[aC] = 0, adv[aC] = document.createElement("audio"), adv[aC].src = src, adv[aC].setAttribute("preload", "auto"), adv[aC].setAttribute("controls", "none"), adv[aC].style.display = "none", adv[aC].onpause = function() {
					adw[aC] = 1
				}, adv[aC].oncanplaythrough = function() {
					adw[aC] = 0 === adw[aC] ? 1 : adw[aC]
				}, document.body.appendChild(adv[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			ady = !0
		}
	}, this.x4 = function() {
		if (ady) {
			ady = !1;
			for (var aC = 0; 0 <= aC; aC--) adv[aC].onpause = null, adv[aC].oncanplaythrough = null, u.removeChild(document.body, adv[aC]), adv[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bs.play()
	}), this.play = function() {
		if (ady) {
			var eb = performance.now();
			if (eY + 66 < eb)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === adw[aC]) return eY = eb, adw[aC] = 2, void adv[aC].play();
			0 < adx && (adx--, setTimeout(ae0, 66))
		}
	}
}

function ce() {
	this.aBh = function() {
		var ae3;
		return !(am.lR < 3 || ah.hO[mW[0]] >= aE.kf >> 1) && (aE.iU ? 9 !== aE.lD && (ae3 = af.aN2(), !(2 * af.aN3(bk.lU()) >= ae3)) : function() {
			if (8 === aE.lD) return !1;
			var ae3 = af.aN2();
			if (2 * ah.hc[mW[0]] >= ae3) return !1;
			return !0
		}())
	}
}

function cE() {
	this.dk = function() {
		if (0 === aE.data.sResourcesType) {
			for (var acr = aE.kv, hc = ah.hc, aC = 0; aC < acr; aC++) hc[aC] = 512;
			var acs = aE.a0R,
				l8 = aF.l8,
				iJ = aF.iJ;
			for (aC = acr; aC < acs; aC++) hc[aC] = l8[iJ[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fa = aE.a0R, hc = ah.hc, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fa; aC++) hc[aC] = sResourcesValue
		} : function() {
			for (var fa = aE.a0R, hc = ah.hc, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fa; aC++) hc[aC] = sResourcesData[aC]
		})();
		bg.nT[8] = ah.hc[aE.fK]
	}
}

function dV() {
	var aI3 = 501,
		ae9 = (this.ae8 = new Uint32Array(aI3), this.a6q = new Uint32Array(aI3), this.aEr = new Uint16Array(aI3), this.aWS = 0, 1),
		xH = 0;

	function aeC(self) {
		self.max.fill(0)
	}

	function aeE(self, aC) {
		self.max[0] = Math.max(self.ae8[aC], self.max[0]), self.max[1] = Math.max(self.a6q[aC], self.max[1]), self.max[2] = Math.max(self.aEr[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.aeA = 0, this.nT = new Array(21), this.aeB = null, this.dl = function() {
		this.aeB = [L(525), L(526), L(527), L(528), L(529), L(530), L(531), L(532), L(351), L(352), L(533), L(534), L(535), L(536), "", L(537), L(538), L(539), L(309), L(540), L(541)]
	}, this.dk = function() {
		this.aWS = 0, ae9 = 1, this.aeA = 0, xH = 0, aeC(this), this.nT.fill(0)
	}, this.rp = function(player, jD) {
		bD.gw.a6k(player) && (this.nT[0] += jD + 1, this.nT[1]++, this.nT[12] += bR.g7[1])
	}, this.rK = function(player, qx) {
		__fx.donationsTracker.logDonation(player, qx, bR.g7[0], aX.a8O());
		player === aE.fK && (aO.rK(bR.g7[0], bR.g7[1], qx), this.nT[12] += bR.g7[1], this.nT[16] += bR.g7[0]), qx === aE.fK && (aO.aA7(bR.g7[0], player), this.nT[10] += bR.g7[0])
	}, this.rt = function(player) {
		bD.gw.a6k(player) && (this.nT[2]++, this.nT[12] += bR.g7[1])
	}, this.s1 = function(player) {
		bD.gw.a6k(player) && (this.nT[19]++, this.nT[12] += bR.g7[1])
	}, this.acl = function(player) {
		bD.gw.a6k(player) && this.nT[20]++
	}, this.h0 = function(player, a7X, eJ) {
		bD.gw.a6k(player) && (this.nT[eJ] += a7X)
	}, this.ef = function() {
		var self;
		this.aeA || 0 < xH-- || ((self = this).ae8[self.aWS] = ah.hO[aE.fK], self.a6q[self.aWS] = ah.hc[aE.fK], self.aEr[self.aWS] = af.aEs(aE.fK), aeE(self, self.aWS), self.aWS++, self.aWS === aI3 && function(self) {
			aeC(self), aeE(self, 0), self.aWS = 1 + bO.g1(aI3, 2);
			for (var aC = 1; aC < self.aWS; aC++) self.ae8[aC] = self.ae8[2 * aC], self.a6q[aC] = self.a6q[2 * aC], self.aEr[aC] = self.aEr[2 * aC], aeE(self, aC);
			ae9 *= 2
		}(self), xH = ae9 - 1, bh.nK(), 0 === ah.nX[aE.fK] && (self.aeA = bi.ks()))
	}
}

function dW() {
	this.j = 0, this.k = 0, this.uh = 0, this.ui = 0, this.aeG = 0, this.aeH = 0, this.aBv = 0, this.vO = 0;
	var aeJ = this.aeI = 0;
	this.aeK = 0, this.aeL = 0, this.aeM = 0, this.aBG = 0, this.eJ = 0, this.aES = null, this.iM = !1, this.aeN = -1, this.aeO = !1, this.aeP = [0, 0], this.dl = function() {
		this.aES = [L(542), L(127, 0, "Balance"), L(126, 0, "Interest"), L(543)]
	}, this.dk = function() {
		this.iM = !1, this.aeN = -1, this.aeO = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fd = a1.a2.il() && i.j < i.k ? 1 : a1.a2.il() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fd * this.j), this.j -= a1.a2.il() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.aBG = Math.floor(this.k / 150), this.aBG = Math.max(this.aBG, 1.5), this.uh = Math.floor(1 + .02 * this
			.j), this.ui = Math.floor(1 + .04 * this.j), this.aBv = this.ui, aeJ = Math.floor(.75 * this.aBv), this.vO = Math.floor(1 + .075 * this.j), this.aeK = Math.floor(1 + .1125 * this.j), this.aeL = Math.floor(this.j * (a1.a2.il() ? .03 :
				.029)), this.aeL = Math.max(this.aeL, 4), this.aeM = Math.floor(.035 * this.j), this.aeM = Math.max(this.aeM, 4), this.aeI = this.k - 2 * this.aBv - this.vO - this.aeK, this.iM && this.aeQ()
	}, this.hn = function(mA, mB) {
		var a0U, a0T;
		return !!this.iM && (a0T = mA, a0U = mB, mA -= bO.g1(i.j - this.j, 2), mB -= bO.g1(i.k - this.k, 2), mA < 0 || mB < 0 || mA >= this.j || mB >= this.k || mA >= this.j - this.aeK && mB < this.aeK ? -1 !== aN.hn(a0T, a0U) || bF.hn(a0T,
			a0U) || this.ta() : mB < this.aeK || (mB < this.k - this.vO ? (this.aeO = !0, this.aeN = (mA - 2 * this.uh - this.aeG) / this.aeH, 3 !== this.eJ && (bi.ds = !0)) : (a0T = (a0T = Math.floor(mA / (this.j / this.aES.length))) < 0 ?
				0 : a0T >= this.aES.length ? this.aES.length - 1 : a0T) !== this.eJ && (this.eJ = a0T, this.aeQ(), bi.ds = !0)), !0)
	}, this.a4s = function(mA, mB) {
		return this.aeP[0] = mA, this.aeP[1] = mB, !(!this.iM || !this.aeO || (mA -= bO.g1(i.j - this.j, 2), mB = this.aeN, this.aeN = (mA - 2 * this.uh - this.aeG) / this.aeH, (0 <= this.aeN && this.aeN <= 1 || 0 <= mB && mB <= 1) && (bi.ds = !
			0), 0))
	}, this.a5H = function() {
		this.aeO && (this.aeO = !1)
	}, this.a5T = function() {
		this.iM ? this.ta() : this.show()
	}, this.show = function() {
		bg.aWS < 2 || (this.iM = !0, this.aeQ())
	}, this.ta = function() {
		this.iM = !1, this.aeN = -1, bi.ds = !0
	}, this.aeQ = function() {
		this.eJ < 2 ? this.aeG = aR.measureText(bD.tN.a2b(bg.max[this.eJ]), bD.sP.uA(0, this.aeL)) : 2 === this.eJ && (this.aeG = aR.measureText(bD.tN.a7Q(6, 2), bD.sP.uA(0, this.aeL))), this.aeH = this.j - 2 * this.uh - this.aeG - this.ui
	}, this.nK = function() {
		this.iM && this.aeQ()
	}, this.xy = function() {
		this.iM && this.aCD()
	}, this.aCD = function() {
		var fh = bO.g1(i.j - this.j, 2),
			fj = bO.g1(i.k - this.k, 2);
		xz.setTransform(1, 0, 0, 1, fh, fj), xz.fillStyle = bE.pO, xz.fillRect(0, this.aeK, this.j, this.k - this.aeK), this.aeR(), this.aV8(), xz.strokeRect(0, 0, this.j, this.k), bD.sP.textAlign(xz, 2), xz.font = bD.sP.uA(0, this.aeL), 0 ===
			this.eJ ? this.aeS(bg.ae8, fh, fj) : 1 === this.eJ ? this.aeS(bg.a6q, fh, fj) : 2 === this.eJ ? this.aeT(fh, fj) : 3 === this.eJ && (this.aeU(fh, fj), this.aeV(fh, fj)), aN.a9E(Math.floor(fh + this.j - .725 * this.aeK), Math.floor(
				fj + .275 * this.aeK), Math.floor(.45 * this.aeK)), xz.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aeR = function() {
		var aC, eb;
		for (xz.lineWidth = this.aBG, bD.sP.textBaseline(xz, 1), bD.sP.textAlign(xz, 1), xz.strokeStyle = bE.pR, xz.font = bD.sP.uA(1, this.aeM), eb = this.j / this.aES.length, xz.fillStyle = bE.pn, xz.fillRect(this.eJ * eb, this.k - this.vO, eb,
				this.vO), xz.fillStyle = bE.pR, xz.fillRect(0, this.k - this.vO - .5 * this.aBG, this.j, this.aBG), aC = 1; aC <= 3; aC++) xz.fillRect(aC * eb, this.k - this.vO, this.aBG, this.vO);
		for (aC = this.aES.length - 1; 0 <= aC; aC--) xz.fillText(bD.ox.a6P(this.aES[aC], 0, .9 * eb), (aC + .5) * eb, this.k - .46 * this.vO)
	}, this.aV8 = function() {
		xz.fillStyle = bE.qF, xz.fillRect(0, 0, this.j, this.aeK), xz.fillStyle = bE.pR, xz.fillRect(0, this.aeK - .5 * this.aBG, this.j, this.aBG), xz.font = bD.sP.uA(1, .39 * this.aeK), xz.fillText(bD.ox.a6P(L(544), 0, .8 * this.j), Math.floor(
			this.j / 2), Math.floor(.55 * this.aeK))
	}, this.aeS = function(h, fh, fj) {
		var lq = bg.max[this.eJ],
			a5k = (xz.setTransform(1, 0, 0, 1, fh + 2 * this.uh + this.aeG, fj + this.aBv + this.aeK), xz.lineWidth = 2, this.aeI / Math.sqrt(lq));
		xz.beginPath(), xz.moveTo(this.aeH, this.aeI - a5k * Math.sqrt(h[bg.aWS - 1]));
		for (var aC = bg.aWS - 2; 0 <= aC; aC--) xz.lineTo(aC * this.aeH / (bg.aWS - 1), this.aeI - a5k * Math.sqrt(h[aC]));
		xz.stroke();
		fh = this.a9E(h, a5k, .5);
		fh < .95 && xz.fillText(bD.tN.a2b(lq), -this.uh, 0), .05 < Math.abs(fh - .5) && xz.fillText(bD.tN.a2b(Math.floor(lq / 4)), -this.uh, Math.floor(this.aeI / 2)), .05 < fh && xz.fillText("0", -this.uh, this.aeI)
	}, this.aeT = function(fh, fj) {
		xz.setTransform(1, 0, 0, 1, fh + 2 * this.uh + this.aeG, fj + this.aBv + this.aeK), xz.lineWidth = 2;
		var a5k = this.aeI / Math.max(bg.max[this.eJ], 1);
		xz.beginPath(), xz.moveTo(this.aeH, this.aeI - a5k * bg.aEr[bg.aWS - 1]);
		for (var aC = bg.aWS - 2; 0 <= aC; aC--) xz.lineTo(aC * this.aeH / (bg.aWS - 1), this.aeI - a5k * bg.aEr[aC]);
		xz.stroke();
		fh = this.a9E(bg.aEr, a5k, 1), fj = bg.max[this.eJ] / 100;
		fh < .95 && xz.fillText(bD.tN.a7Q(fj, 2), -this.uh, 0), .05 < Math.abs(fh - .5) && xz.fillText(bD.tN.a7Q(fj / 2, 2), -this.uh, Math.floor(this.aeI / 2)), .05 < fh && xz.fillText(bD.tN.a7Q(0, 2), -this.uh, this.aeI)
	}, this.aeU = function(fh, fj) {
		xz.setTransform(1, 0, 0, 1, fh + .34 * this.j, fj + 2 * aeJ + this.aeK), bD.sP.textAlign(xz, 2);
		for (var aEA = this.k - 4 * aeJ - this.vO - this.aeK, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) xz.fillText(bD.ox.a6P(bg.aeB[h[aC]], 0, .31 * this.j), 0, aC * aEA / 9);
		var g2 = bg.nT;
		for (xz.setTransform(1, 0, 0, 1, fh + .39 * this.j, fj + 2 * aeJ + this.aeK), bD.sP.textAlign(xz, 0), xz.fillText(bD.tN.a7Q(100 * g2[0] / (1024 * Math.max(g2[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) xz.fillText(g2[h[aC]].toString(), 0,
			aC * aEA / 9);
		xz.fillText(bD.tN.a7Q(100 * (1 - ah.hO[aE.fK] / g2[7]), 0), 0, aEA)
	}, this.aeV = function(fh, fj) {
		xz.setTransform(1, 0, 0, 1, fh + .79 * this.j, fj + 2 * aeJ + this.aeK), bD.sP.textAlign(xz, 2);
		var aC, aEA = this.k - 4 * aeJ - this.vO - this.aeK;
		for (xz.fillStyle = bE.pi, aC = 2; 0 <= aC; aC--) xz.fillText(bD.ox.a6P(bg.aeB[aC + 8], 0, .31 * this.j), 0, aC * aEA / 9);
		xz.fillText(bD.ox.a6P(bg.aeB[18], 0, .31 * this.j), 0, 3 * aEA / 9), xz.fillStyle = bE.ph, xz.fillText(bD.ox.a6P(bg.aeB[11], 0, .31 * this.j), 0, 4 * aEA / 9), xz.fillStyle = bE.q2, xz.fillText(bD.ox.a6P(bg.aeB[13], 0, .31 * this.j), 0,
				5 * aEA / 9), xz.fillText(bD.ox.a6P(bg.aeB[15], 0, .31 * this.j), 0, 6 * aEA / 9), xz.fillText(bD.ox.a6P(bg.aeB[16], 0, .31 * this.j), 0, 7 * aEA / 9), xz.fillText(bD.ox.a6P(bg.aeB[12], 0, .31 * this.j), 0, 8 * aEA / 9), xz
			.fillStyle = bE.q1, xz.fillText(bD.ox.a6P(bg.aeB[17], 0, .31 * this.j), 0, aEA), xz.fillStyle = bE.pi;
		var g2 = bg.nT,
			aIW = g2[8] + g2[9] + g2[10] + g2[18],
			aIW = bD.tN.a2b(aIW),
			aTt = xz.measureText(aIW).width,
			fh = (xz.setTransform(1, 0, 0, 1, fh + .83 * this.j + aTt, fj + 2 * aeJ + this.aeK), xz.fillText(bD.tN.a2b(g2[8]), 0, 0), xz.fillText(bD.tN.a2b(g2[9]), 0, aEA / 9), xz.fillText(bD.tN.a2b(g2[10]), 0, 2 * aEA / 9), xz.fillText(bD.tN
				.a2b(g2[18]), 0, 3 * aEA / 9), xz.fillStyle = bE.ph, xz.fillText(aIW, 0, 4 * aEA / 9), xz.fillStyle = bE.q2, xz.fillText(bD.tN.a2b(g2[13]), 0, 5 * aEA / 9), xz.fillText(bD.tN.a2b(g2[15]), 0, 6 * aEA / 9), xz.fillText(bD.tN
				.a2b(g2[16]), 0, 7 * aEA / 9), xz.fillText(bD.tN.a2b(g2[12]), 0, 8 * aEA / 9), g2[12] + g2[13] + g2[15] + g2[16]);
		xz.fillStyle = bE.q1, xz.fillText(bD.tN.a2b(fh), 0, aEA), xz.fillStyle = bE.pR
	}, this.a9E = function(h, a5k, aCq) {
		var aC, e, gJ;
		return this.aeN < 0 || 1 < this.aeN ? .25 : (aC = this.aeN * (bg.aWS - 1), gJ = h[e = Math.floor(aC)], gJ += (aC - e) * (h[e < bg.aWS - 1 ? e + 1 : e] - gJ), xz.strokeStyle = bE.pU, .04 < this.aeN && this.aeX(0, this.aeI - a5k * Math.pow(
				gJ, aCq), aC * this.aeH / (bg.aWS - 1), this.aeI - a5k * Math.pow(gJ, aCq)), .04 < gJ / bg.max[this.eJ] && this.aeX(aC * this.aeH / (bg.aWS - 1), this.aeI, aC * this.aeH / (bg.aWS - 1), this.aeI - a5k * Math.pow(gJ, aCq)), xz
			.fillStyle = bE.q4, xz.beginPath(), xz.arc(aC * this.aeH / (bg.aWS - 1), this.aeI - a5k * Math.pow(gJ, aCq), Math.max(2, .014 * this.k), 0, 2 * Math.PI), xz.fill(), h = this.aeN * bi.aEt, h = 0 === ah.nX[aE.fK] ? Math.floor(h * bg
				.aeA) : Math.floor(h * bi.ks()), xz.fillStyle = bE.pR, xz.fillText(1 === aCq ? bD.tN.a7Q(gJ / 100, 2) : bD.tN.a2b(Math.floor(gJ)), -this.uh, this.aeI - a5k * Math.pow(gJ, aCq)), bD.sP.textAlign(xz, 1), xz.fillText(aX.aEg(h),
				aC * this.aeH / (bg.aWS - 1), this.aeI + this.aeL - (a1.a2.il() ? 2 : 0) - this.aBG), bD.sP.textAlign(xz, 2), a5k * Math.pow(gJ, aCq) / this.aeI)
	}, this.aeX = function(ny, nz, oB, oC) {
		xz.beginPath(), xz.moveTo(ny, nz), xz.lineTo(oB, oC), xz.stroke()
	}
}

function c2() {
	this.aeY = "https://territorial.io/changelog", this.aWT = "https://territorial.io/terms", this.aWU = "https://territorial.io/privacy", this.aeZ = "https://territorial.io/tutorial", this.aea = "https://territorial.io/players", this.aeb =
		"https://territorial.io/clans", this.aec = "https://territorial.io/clan-results", this.aT2 = "https://patreon.com/c/territorial", this.aGA = "https://play.google.com/store/apps/details?id=territorial.io", this.a4R =
		"https://apps.apple.com/app/id1581110913", this.aGB = "https://discord.gg/pthqvpTXmh", this.aGC = "https://www.instagram.com/davidtschacher/", this.a2B =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dE() {
	this.z = new aed, this.a1T = new aee, this.dk = function() {
		this.z.dk()
	}, this.ef = function() {
		0 !== this.z.w3 && this.z.w3--
	}
}

function aee() {
	this.xy = function() {
		if (0 !== bS.z.w3 && (xz.globalAlpha = Math.min(bS.z.w3 / 580, 1), xz.drawImage(bS.z.aeh, 1 + aT.a1R(), 1 + aT.a1S()), xz.globalAlpha = 1, aE.hy)) {
			for (var ny = jE / io, nz = jF / io, oB = (i.j + jE) / io, oC = (i.k + jF) / io, h9 = bS.z.aei * io, aej = bS.z.aej, aC = aE.kv - 1; 0 <= aC; aC--) ! function(aC, h9, ny, nz, oB, oC, aej) {
				var highlight;
				0 === ah.nX[aC] || 0 === ah.hO[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (h9 *= 2), oB = i.j * ((ah.jT[aC] + ah.jU[aC] + 1) / 2 - ny) / (oB - ny) - .5 * h9, ny = i.k * ((ah.jV[
					aC] + ah.jW[aC] + 1) / 2 - nz) / (oC - nz) - .5 * h9, oB > i.j) || ny > i.k || oB < -h9 || ny < -h9 || (highlight ? xz.setTransform(2 * io, 0, 0, 2 * io, oB, ny) : xz.setTransform(io, 0, 0, io, oB, ny), xz.drawImage(
					aej[aE.iU ? bj.fY[aC] : 1], 0, 0))
			}(aC, h9, ny, nz, oB, oC, aej);
			xz.setTransform(io, 0, 0, io, 0, 0)
		}
	}
}

function aed() {
	this.aei = 28, this.w3 = 0, this.aeh = null;
	var ael = this.aej = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function aep(iW, aeq) {
		var fh, fj, fM, ix, a6B = bD.sP.zl(iW, iW),
			ic = bD.sP.getContext(a6B, !0),
			iZ = bD.sP.getImageData(ic, iW, iW),
			zw = iZ.data,
			lq = (iW >> 1) - .5,
			aer = .5 + lq;
		for (aer *= aer, fj = 0; fj < iW; fj++)
			for (fh = 0; fh < iW; fh++) ix = (ix = fh - lq) * ix + (ix = fj - lq) * ix, zw[fM = 4 * (fj * iW + fh)] = aeq[0], zw[1 + fM] = aeq[1], zw[2 + fM] = aeq[2], zw[3 + fM] = (aer - ix) * aeq[3] / aer;
		return ic.putImageData(iZ, 0, 0), a6B
	}

	function adn(aC, ic, a6B, iW) {
		var highlight, fh, fj;
		0 !== ah.nX[aC] && 0 !== ah.hO[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (iW *= 2), fh = ah.jT[aC] + ah.jU[aC] + 1 - iW - 2 >> 1, fj = ah.jV[aC] + ah.jW[aC] + 1 - iW - 2 >> 1, highlight ? ic
			.drawImage(a6B[aE.iU ? 9 === aE.lD && 5 === aF.iJ[aC] ? 3 : bj.fY[aC] : aC < aE.kv ? 1 : 0], fh, fj, iW, iW) : ic.drawImage(a6B[aE.iU ? 9 === aE.lD && 5 === aF.iJ[aC] ? 3 : bj.fY[aC] : aC < aE.kv ? 1 : 0], fh, fj))
	}
	this.dk = function() {
		var tv;
		this.w3 = 700,
			function(tv) {
				var iW = tv.aei;
				if (tv.aej = [], ael = [], aE.iU) {
					for (var aC = 0; aC <= aE.a0Y; aC++) tv.aej.push(aep(iW, bj.ac8[bj.lI[aC]])), ael.push(aep(iW >> 1, bj.ac8[bj.lI[aC]]));
					9 === aE.lD && ael.push(aep(iW, bj.ac8[1]))
				} else tv.aej.push(aep(iW, bj.ac8[7])), tv.aej.push(aep(iW, bj.ac8[4])), ael.push(aep(iW >> 1, bj.ac8[7]))
			}(this),
			function(tv, aev) {
				var aC, aeh = tv.aeh,
					ic = bD.sP.getContext(aeh, !0),
					fa = aE.fX,
					iW = tv.aei >> 1;
				ic.imageSmoothingEnabled = !1, ic.setTransform(1, 0, 0, 1, 0, 0), aev && ic.clearRect(0, 0, aeh.width, aeh.height);
				if (9 === aE.lD) {
					iW <<= 1;
					tv = b0.lM[5];
					for (aC = fa - tv; aC < fa; aC++) adn(aC, ic, ael, iW);
					fa -= tv, iW >>= 1
				}
				for (aC = aE.kv; aC < fa; aC++) adn(aC, ic, ael, iW)
			}(this, null !== (tv = this).aeh && tv.aeh.width === bV.fl - 2 && tv.aeh.height === bV.fm - 2 || (tv.aeh = bD.sP.zl(bV.fl - 2, bV.fm - 2), !1)), aE.hy || this.a7i()
	}, this.ac9 = aep, this.a7i = function() {
		for (var fa = aE.kv, iW = this.aei, aej = this.aej, ic = bD.sP.getContext(this.aeh, !0), aC = 0; aC < fa; aC++) adn(aC, ic, aej, iW)
	}
}

function dF() {
	function aey() {
		8 === aE.lD && 1 === aE.a3I && bU.a2w.a3H()
	}

	function aex(player) {
		aE.hy ? (al.aLL(player), am.aOn(), aE.lF && aE.rl.ef()) : b4.aGa(player)
	}
	this.rD = function(player) {
		aO.a3W(player, player === aE.fK ? 21 : 22), aex(player), aey()
	}, this.ri = function(player) {
		1 === aE.a3I && 0 !== ah.nX[player] && 2 !== ah.a6g[player] && aex(player), aE.a3L--, aE.a3K--, aO.a3W(player, 4), bD.gw.hl(2) && aX.nJ(!0), aey()
	}
}

function dP() {
	this.aYo = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aE7 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.pR, "rgb(170,170,170)"
	], this.aez = [bE.pR, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.pR, bE.pI], this.af0 = [bE.pI, bE.pR, bE.pR, bE.pR, bE.pI, bE.pI, bE.pI, bE.pI, bE.pR];
	var aOx = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aOG = ["rgba(" + aOx[0] + ",", "rgba(" + aOx[1] + ",", "rgba(" + aOx[2] + ",", "rgba(" + aOx[3] + ",", "rgba(" + aOx[4] + ",", "rgba(" + aOx[5] + ",", "rgba(" + aOx[6] + ",", "rgba(" + aOx[7] + ",", "rgba(" + aOx[8] + ",", "rgba(" + aOx[9] +
			","
		], this.aOH = ["rgb(" + aOx[0] + ")", "rgb(" + aOx[1] + ")", "rgb(" + aOx[2] + ")", "rgb(" + aOx[3] + ")", "rgb(" + aOx[4] + ")", "rgb(" + aOx[5] + ")", "rgb(" + aOx[6] + ")", "rgb(" + aOx[7] + ")", "rgb(" + aOx[8] + ")", "rgb(" + aOx[9] +
			")"
		], this.a3f = null, this.ac8 = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aUK = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lI = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fY = new Uint8Array(aE.fX), this.aE8 = new Uint8Array(aE.fX), this.a0e = new Uint16Array(aE.fX), this.a0f = new Uint16Array(this.lI.length + 1), this.a0g = new Uint16Array(this.lI.length), this
		.dl = function() {
			this.a3f = [L(545), L(546), L(547), L(548), L(549), L(550), L(551), L(552), L(553)]
		}, this.dk = function() {
			if (this.fY.fill(0), this.aE8.fill(0), this.af1(), aE.iU) {
				if (9 === aE.lD) {
					for (var fY = bj.fY, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fY[aC] = 1;
					var fa = aE.fX;
					for (aC = aE.data.teamPlayerCount[7]; aC < fa; aC++) fY[aC] = 2;
					bj.lI[1] = 7, bj.lI[2] = 8
				} else aE.lF ? function() {
					var aUK = bj.aUK,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.kv - 1; 0 <= aC; aC--) colorsData[aC] = az.kC(262144);
					var afC = 0,
						fq = 768,
						aUJ = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fd = 0, fu = 0; fu < 3; fu++) fd += Math.abs(aUK[aC][fu] - aUJ[fu]);
							fd < fq && (afC = aC, fq = fd)
						} var afD = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) afD[aC] = teamPlayerCount[aC];
					var lI = bj.lI,
						afE = new Uint8Array(9),
						h3 = (lI[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) afD[aC] && (afE[aC] = h3, lI[h3++] = aC);
					var kB = aE.kv,
						fY = bj.fY;
					afD[afC] ? (afD[afC]--, fY[0] = afE[afC]) : kB = 0;
					var ek = 0;
					for (aC = kB; aC < aE.a0R; aC++) {
						var iS = lI[ek];
						if (afD[iS]) afD[iS]--, fY[aC] = afE[iS];
						else if (aC--, 9 <= ++ek) return console.log("error 325")
					}
				}() : this.ef();
				! function() {
					for (var fa = aE.fX, a0e = bj.a0e, a0f = bj.a0f, a0g = bj.a0g, fY = bj.fY, lI = bj.lI, a0X = lI.length, buffer = new Array(a0X), aC = 0; aC < a0X; aC++) buffer[aC] = [];
					for (aC = 0; aC < fa; aC++) buffer[lI[fY[aC]]].push(aC);
					for (aC = 1; aC <= a0X; aC++) a0f[aC] = a0f[aC - 1] + buffer[aC - 1].length;
					for (aC = 0; aC < a0X; aC++)
						for (var h3 = buffer[aC].length, lq = a0f[aC], iS = 0; iS < h3; iS++) a0e[iS + lq] = buffer[aC][iS];
					var kv = aE.kv;
					for (aC = 0; aC < a0X; aC++)
						for (h3 = buffer[aC].length, lq = a0f[aC], iS = 0; iS < h3; iS++)
							if (a0e[iS + lq] >= kv) {
								a0g[aC] = iS;
								break
							}
				}(), ! function() {
					for (var fa = aE.fX, fY = bj.fY, aE8 = bj.aE8, lI = bj.lI, aC = 0; aC < fa; aC++) aE8[aC] = lI[fY[aC]];
					9 === aE.lD && aE8.fill(1, fa - b0.lM[5])
				}()
			}
		}, this.af1 = function() {
			for (var aC = this.lI.length - 1; 0 <= aC; aC--) this.lI[aC] = aC
		}, this.ef = function() {
			var wp = new Uint8Array(aE.kv),
				wq = new Uint8Array(aE.kv),
				af6 = new Uint16Array(8),
				af7 = new Uint16Array(this.lI.length);
			this.af8(wp, wq, af6, 1), this.aKr(af6), this.af9(af7, wp, wq), this.afA(wp, wq, af7), this.afB()
		}, this.af8 = function(wp, wq, afD, afF) {
			for (var fu, e, afG, fa = this.lI.length - afF, h = new Uint16Array(fa), aUK = this.aUK, colorsData = aE.data.colorsData, aC = aE.kv - 1; 0 <= aC; aC--) {
				for (fu = fa; afF <= fu; fu--) h[fu - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aUK[fu][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aUK[fu][1]) + Math.abs(4 * (63 & colorsData[aC]) - aUK[fu][2]);
				for (afG = 768, fu = fa - 1; 0 <= fu; fu--) h[e = (fu + aC) % fa] < afG && (afG = h[e], wp[aC] = e);
				for (afD[wp[aC]] += 4, afG = 768, fu = fa - 1; 0 <= fu; fu--) h[e = (fu + aC) % fa] < afG && e !== wp[aC] && (afG = h[e], wq[aC] = e);
				afD[wq[aC]]++
			}
		}, this.aKr = function(afD) {
			for (var fu, ls, fa = this.lI.length - 1, aC = fa; 0 <= aC; aC--) this.lI[aC] = aC;
			for (aC = fa - 1; 0 <= aC; aC--) afD[aC]++;
			for (aC = 1; aC <= fa; aC++) {
				for (ls = 0, fu = 1; fu < fa; fu++) afD[fu] > afD[ls] && (ls = fu);
				afD[ls] = 0, this.lI[aC] = ls + 1
			}
		}, this.af9 = function(af7, wp, wq) {
			var fu, a44, ek, fd, e, oA, uy, afH = this.lI.length - 1,
				ss = new Uint16Array(afH),
				afI = [],
				afJ = 0,
				a43 = [],
				afK = [];
			loop: for (var aC = 0; aC < aE.kv; aC++)
				if (null !== (a44 = bD.tN.a45(ah.a42[aC]))) {
					for (fu = a43.length - 1; 0 <= fu; fu--)
						if (a44 === a43[fu]) {
							afK[fu].push(aC), afJ = Math.max(afJ, afK[fu].length);
							continue loop
						} a43.push(a44), afI.push(!1), afK.push([aC]), afJ = Math.max(afJ, 1)
				}
			for (; 2 < aE.a0Y && afJ > bO.g1(aE.kv, aE.a0Y);) aE.a0Y--, aE.lD--;
			for (fu = a43.length - 1; 0 <= fu; fu--) {
				for (fd = -1, ek = a43.length - 1; 0 <= ek; ek--) !afI[ek] && (-1 === fd || afK[ek].length > afK[fd].length) && (fd = ek);
				for (ek = afH - 1; 0 <= ek; ek--) ss[ek] = 1;
				for (ek = afK[fd].length - 1; 0 <= ek; ek--) ss[wp[afK[fd][ek]]] += 3, ss[wq[afK[fd][ek]]]++;
				for (aC = afH - 1; 0 <= aC; aC--) {
					for (e = fd % afH, ek = afH - 1; 0 <= ek; ek--) ss[ek] > ss[e] && (e = ek);
					for (oA = -1, ek = aE.a0Y; 0 < ek; ek--)
						if (this.lI[ek] === e + 1) {
							oA = ek;
							break
						} if (ss[e] = 0, -1 !== oA) {
						for (uy = 0, ek = aE.a0Y; 0 < ek; ek--) af7[oA] > af7[ek] && uy++;
						if (uy !== aE.a0Y - 1) {
							for (ek = afK[fd].length - 1; 0 <= ek; ek--) af7[oA]++, this.fY[afK[fd][ek]] = oA;
							break
						}
					}
				}
				afI[fd] = !0
			}
		}, this.afA = function(wp, wq, af7) {
			for (var aC, iw, fa = this.lI.length - 1, border = bO.g1(aE.kv, aE.a0Y), afL = (0 < aE.kv % aE.a0Y && border++, new Uint8Array(1 + fa)), fu = fa; 1 <= fu; fu--) afL[this.lI[fu]] = fu;
			for (aC = 0; aC < aE.kv; aC++) iw = afL[wp[aC] + 1], 0 === this.fY[aC] && iw <= aE.a0Y && af7[iw] < border && (af7[iw]++, this.fY[aC] = iw);
			for (aC = 0; aC < aE.kv; aC++) iw = afL[wq[aC] + 1], 0 === this.fY[aC] && iw <= aE.a0Y && af7[iw] < border && (af7[iw]++, this.fY[aC] = iw);
			for (fu = aE.a0Y; 1 <= fu; fu--)
				for (aC = aE.kv - 1; 0 <= aC && !(af7[fu] >= border); aC--) 0 === this.fY[aC] && (af7[fu]++, this.fY[aC] = fu)
		}, this.afB = function() {
			if (aE.a0Y < 8) aE.a0Y++, aE.lD++, aE.a0Z = 1;
			else
				for (var aC = aE.kv; aC < aE.fX; aC++) this.fY[aC] = 1 + aC % aE.a0Y
		}
}

function dh() {
	this.hP = function() {
		for (var fh, fj, aC = gW - 1; 0 <= aC; aC--) fh = bO.g1(gY[aC], 4) % bV.fl, fj = bO.g1(gY[aC], 4 * bV.fl), ah.jT[gR] = Math.min(fh, ah.jT[gR]), ah.jV[gR] = Math.min(fj, ah.jV[gR]), ah.jU[gR] = Math.max(fh, ah.jU[gR]), ah.jW[gR] = Math
			.max(fj, ah.jW[gR])
	}, this.gk = function() {
		var fd, h8, aC, fa = ah.h2[gR].length,
			fc = ad.fc;
		loop: for (aC = fa - 1; 0 <= aC; aC--) {
			for (fd = 3; 0 <= fd; fd--)
				if (h8 = ah.h2[gR][aC] + fc[fd], ad.fR(h8) || ad.hA(h8) && ad.fS(h8) !== gR) {
					ad.k7(ah.h2[gR][aC], gR);
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
			for (var afM = !1, afN = !1, fd = 3; 0 <= fd; fd--) {
				var h8 = hG[player][aC] + fc[fd];
				if (ad.aL1(h8, player)) continue loop;
				afM = afM || ad.ir(h8), afN = afN || ad.aL0(h8)
			}
			afM ? hH[player].push(hG[player][aC]) : afN ? fz[player].push(hG[player][aC]) : ad.a10(hG[player][aC], player), hG[player][aC] = hG[player][fa - 1], hG[player].pop(), fa--
		}
	}, this.hE = function() {
		ah.hO[gV] -= gW
	}, this.hF = function(border) {
		for (var fa = border.length, aC = fa - 1; 0 <= aC; aC--) ad.a1L(gV, border[aC]) || (border[aC] = border[fa - 1], border.pop(), fa--)
	}, this.hI = function(border) {
		for (var fa = border.length, aC = fa - 1; 0 <= aC; aC--) !ad.a1L(gV, border[aC]) && ad.fV(border[aC]) && (border[aC] = border[fa - 1], border.pop(), fa--)
	}, this.hJ = function(border) {
		for (var fd, h8, fa = border.length, fc = ad.fc, aC = fa - 1; 0 <= aC; aC--)
			for (fd = 3; 0 <= fd; fd--)
				if (h8 = border[aC] + fc[fd], ad.aL1(h8, gV)) {
					ah.hG[gV].push(border[aC]), border[aC] = border[fa - 1], border.pop(), fa--;
					break
				}
	}, this.hK = function() {
		for (var fd, h8, fc = ad.fc, aC = gW - 1; 0 <= aC; aC--)
			for (fd = 3; 0 <= fd; fd--) h8 = gY[aC] + fc[fd], ad.a1O(gV, h8) && ad.aL7(h8) && (ah.hG[gV].push(h8), ad.h5(h8, gV))
	}, this.hL = function() {
		var fh, fj;
		loop: for (; ah.jV[gV] < ah.jW[gV];) {
			for (fh = ah.jU[gV]; fh >= ah.jT[gV]; fh--)
				if (ad.a1L(gV, 4 * (ah.jV[gV] * bV.fl + fh))) break loop;
			ah.jV[gV]++
		}
		loop: for (; ah.jV[gV] < ah.jW[gV];) {
			for (fh = ah.jU[gV]; fh >= ah.jT[gV]; fh--)
				if (ad.a1L(gV, 4 * (ah.jW[gV] * bV.fl + fh))) break loop;
			ah.jW[gV]--
		}
		loop: for (; ah.jT[gV] < ah.jU[gV];) {
			for (fj = ah.jW[gV]; fj >= ah.jV[gV]; fj--)
				if (ad.a1L(gV, 4 * (fj * bV.fl + ah.jT[gV]))) break loop;
			ah.jT[gV]++
		}
		loop: for (; ah.jT[gV] < ah.jU[gV];) {
			for (fj = ah.jW[gV]; fj >= ah.jV[gV]; fj--)
				if (ad.a1L(gV, 4 * (fj * bV.fl + ah.jU[gV]))) break loop;
			ah.jU[gV]--
		}
	}, this.fT = function(player, k4) {
		return 0 === bj.fY[player] || bj.fY[player] !== bj.fY[k4]
	}, this.i6 = function(player) {
		for (var aC, h9, fa = ah.hG[player].length, fc = ad.fc, fd = 3; 0 <= fd; fd--)
			for (h9 = fc[fd], aC = 0; aC < fa; aC++)
				if (ad.fR(ah.hG[player][aC] + h9)) return !0;
		return !1
	}, this.aLH = function(player) {
		for (var aC, h9, fa = ah.hG[player].length, fc = ad.fc, fd = 3; 0 <= fd; fd--)
			for (h9 = fc[fd], aC = 0; aC < fa; aC++)
				if (ad.k6(ah.hG[player][aC]) && ad.fR(ah.hG[player][aC] + h9)) return !0;
		return !1
	}, this.i9 = function(a6m, a6n) {
		for (var aC, eb, h9, h8, acr = ah.hG[a6m].length, acs = ah.hG[a6n].length, fc = (acs < acr && (eb = a6m, a6m = a6n, a6n = eb, eb = acr, acr = acs, 0), ad.fc), fd = 3; 0 <= fd; fd--)
			for (h9 = fc[fd], aC = 0; aC < acr; aC++)
				if (h8 = ah.hG[a6m][aC] + h9, ad.hA(h8) && ad.fS(h8) === a6n) return !0;
		return !1
	}, this.aLI = function(a6m, a6n) {
		for (var aC, h9, h8, acr = ah.hG[a6m].length, fc = ad.fc, fd = 3; 0 <= fd; fd--)
			for (h9 = fc[fd], aC = 0; aC < acr; aC++)
				if (ad.k6(ah.hG[a6m][aC]) && (h8 = ah.hG[a6m][aC] + h9, ad.hA(h8)) && ad.fS(h8) === a6n) return !0;
		return !1
	}
}

function db() {
	this.ru = new afO
}

function afO() {
	this.iC = function(player) {
		bD.gw.a6h(player) && aO.a1o(80, L(554), 637, 0, bE.qI, bE.pO, -1, !1)
	}, this.iF = function(player) {
		bD.gw.a6h(player) && aO.a1o(80, L(555), 637, 0, bE.qI, bE.pO, -1, !1)
	}
}

function afP() {
	this.afQ = 0, this.ef = function() {
		aP.ef(), aa.ef(), i.ef(), b1.z.ef(), ay.aKM(), bX.eT.ef(), bq.wF.ef(), bi.ds && (bi.ds = !1, ab.xy())
	}
}

function afR() {
	this.ea = bi.ea, this.eJ = 0, this.afQ = 0, this.aKK = 0, this.afS = null, this.afT = 7, this.afU = 0, this.dk = function() {
		this.aKK = 0, this.afS = [], this.eJ = 0, this.afQ = 0
	}, this.aXm = function(aD) {
		if (aE.hy) this.aEu(aD);
		else if (this.afS.push(aD), 2 === aE.a3I) {
			for (var aC = 0; aC < this.afS.length; aC++) bB.qn.ef(this.afS[aC]);
			this.afS = []
		}
	}, this.aEu = function(aD) {
		2 !== aE.a3I && (bB.qn.ef(aD), bC.ef(), aX.aEu(this.aKK), this.aKK === aE.a7o ? (aE.rl.ef(), this.aKK = 0, this.eJ = 0, this.afQ = 0, this.ea = bi.ea) : (this.aKK++, ag.a7h(), ag.nJ(!0), be.render()))
	}, this.ef = function() {
		i.ef(), aE.hy ? (bi.ds = aX.aEu(-1) || bi.ds, nL()) : (0 !== this.eJ || bi.ea >= this.ea && (this.ea += bi.aEt * Math.floor(1 + (bi.ea - this.ea) / bi.aEt), 2 === aE.a3I ? n7() : this.afV(), this.eJ++, 27 < bi.ea - this.afU)) && this
		.afW(), nG(), bi.ds && (bi.ds = !1, a1P()), this.afU = bi.ea
	}, this.afW = function() {
		bi.ds = !0, nI(), this.eJ = 0
	}, this.afV = function() {
		var ym, aC;
		if (this.afQ !== 7 * this.aKK) nB(), be.render();
		else {
			ym = !1;
			loop: for (; this.afX() && (ym = !0, nB(), 2 !== aE.a3I) && 0 < this.afS.length;)
				for (aC = this.afT - 2; 0 <= aC; aC--)
					if (nB(), 2 === aE.a3I) break loop;
			ym ? be.render() : (n7(), be.a7k())
		}
	}, this.afX = function() {
		return 0 < this.afS.length && (this.aKK++, bB.qn.ef(this.afS[0]), this.afS.shift(), !0)
	}
}

function afY() {
	var afZ, afa, afb, aKK, afc, eJ = 0,
		ea = bi.ea;

	function aff() {
		! function() {
			if (!aE.hy) return;
			if (aE.lF) return;
			if (2 !== aE.a3I)
				if (afc % 7 != 0) afc++;
				else if (aKK === aE.a7o) {
				if (!afi()) return;
				aX.aEu(aKK), aE.rl.ef()
			} else {
				if (!afi()) return;
				afc++, aKK++, ag.a7h(), ag.nJ(!0)
			}
			return 1
		}() && afi() && nB()
	}

	function afg() {
		eJ = 0, (aE.hy ? (bi.ds = aX.aEu(aKK - (afc % 7 == 0 ? 0 : 1) + afc % 7 / 7) || bi.ds, nL) : aN.hk || !bF.a8B ? nL : (bi.ds = !0, nI))()
	}

	function afi() {
		var aC, fa, afj = bC.rj.aZK,
			gJ = bC.rj.aZL,
			gL = bC.rj.aZM,
			gN = bC.rj.aZN,
			afk = bC.rj.aZO,
			afl = bC.rj.aZP;
		if (!(afZ >= afl.length)) {
			if (afl = afl[afZ], afk[afZ]) {
				for (fa = afa + afl, aC = afa; aC < fa; aC++) bB.qn.rY(afj[aC], gJ[aC], gL[aC], gN[aC]);
				afa += afl, afZ++
			} else ++afb >= afl && (afZ++, afb = 0);
			return __fx.replay.tick++, 1
		}
		aO.a4e("Replay file smaller than expected."), bF.a5U(!1), aE.a3I = 2
	}
	this.afQ = 0, this.dk = function() {
		afc = aKK = afb = afa = afZ = 0, __fx.replay.registerHooks({
			advance: () => aff(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.ds = !0
			},
			isEnded: () => 2 === aE.a3I,
			getTickInterval: () => bi.aEt
		})
	}, this.ef = function() {
		var adH;
		i.ef(), __fx.replay.frame() ? n7() : bF.aC7() < 1.7 ? 0 === eJ ? bi.ea >= ea && (adH = bi.aEt / bF.aC7(), ea += adH * Math.floor(1 + (bi.ea - ea) / adH), 2 === aE.a3I || aN.hk || !bF.a8B ? n7() : (aff(), be.render()), eJ++) : afg() :
			function() {
				var adH;
				if (bi.ea >= ea)
					if (2 === aE.a3I || aN.hk || !bF.a8B) n7(), ea = bi.ea;
					else {
						for (adH = bi.aEt / bF.aC7(), 16 < (bi.ea - ea) / adH && (ea = bi.ea - 16 * adH); bi.ea >= ea && 2 !== aE.a3I;) ea += adH, aff();
						be.render()
					} afg()
			}(), nG(), bi.ds && (bi.ds = !1, a1P())
	}, this.a3T = function() {
		bC.rj.aZP.length - afZ <= 2 || aO.a4e("Replay file larger than expected.")
	}
}

function afm() {
	var eJ = 0,
		ea = bi.ea;
	this.afQ = 0, this.ef = function() {
		i.ef(), aE.hy ? nL() : 0 === eJ ? bi.ea >= ea && (ea += bi.aEt * Math.floor(1 + (bi.ea - ea) / bi.aEt), 2 === aE.a3I || aN.hk ? n7() : (nB(), be.render()), eJ++) : ((aN.hk ? nL : (bi.ds = !0, nI))(), eJ = 0), nG(), bi.ds && (bi.ds = !1,
			a1P())
	}
}

function dX() {
	this.a3S = null, this.ds = !1, this.ea = 0, this.aEt = 56;
	var afn = 0;

	function afo() {
		bi.ea = afn = performance.now(), bi.a3S.ef(), window.requestAnimationFrame(afo)
	}
	this.dk = function() {
		this.a88(), window.requestAnimationFrame(afo), this.ea = performance.now()
	}, this.a80 = function() {
		aE.hj ? (this.a3S = new afY, this.a3S.dk()) : aE.lF ? this.a3S = new afm : (this.a3S = new afR, this.a3S.dk())
	}, this.a88 = function() {
		this.a3S = new afP, this.ds = !0
	}, this.ef = function() {
		this.a3S.afQ++
	}, this.ks = function() {
		return this.a3S.afQ
	}, this.aXS = function() {
		var eb = performance.now();
		eb < afn + 1e3 || (this.ea = eb, this.a3S.ef())
	}
}

function cx() {
	var aJj = 0,
		afp = !0;
	this.ef = function() {
		var eb, aAY;
		bi.ea < aJj || (aJj = bi.ea + 3e3, aE.hj) || aE.lF || bD.gw.hm(aE.fK) || (eb = new Date, aAY = eb.getUTCSeconds(), afp ? aAY < 43 && (afp = !1) : aAY < 43 || (aJj += 52e3, afp = !0, aAY = (eb.getUTCMinutes() + 2) % 60, eb = aE.lD < 7 ?
			0 : 8 === aE.lD ? 2 : 9 === aE.lD ? 3 : 1, aP.aAN(eb, aAY) && (aAY = eb, aAY = [L(556), L(557), L(558), L(559)][aAY], aO.a9y(aAY))))
	}
}

function cr() {
	var ny, nz, oB, oC, afr = 0,
		afs = 0;

	function afu() {
		return Math.pow(Math.pow(oB - ny, 2) + Math.pow(oC - nz, 2), .5)
	}

	function aft(e) {
		ny = i.l * e.touches[0].clientX, nz = i.l * e.touches[0].clientY, oB = i.l * e.touches[1].clientX, oC = i.l * e.touches[1].clientY
	}
	this.a4w = function(e) {
		return 1 < e.touches.length ? (afs = bi.ea, afr = 3, aft(e), aM.ta(), !0) : (afr = 0, !1)
	}, this.a4x = function(e) {
		var aMC, iu, iv;
		return 0 !== aE.a3I && 1 < e.touches.length && (afr = Math.max(afr - 1, 0), aI.oG() && (aMC = afu(), aft(e), e = afu(), iu = Math.floor((ny + oB) / 2), iv = Math.floor((nz + oC) / 2), aT.aCY(iu, iv, Math.max(.125, e) / Math.max(.125,
			aMC)), bi.ds = !0), !0)
	}, this.a5K = function() {
		var fh, fj;
		return !!(afr && (afr = 0, bi.ea < afs + 500)) && (fh = (ny + oB) / 2, fj = (nz + oC) / 2, aM.a5E(fh, fj), aM.click(fh, fj, !0) && (bi.ds = !0), !0)
	}
}

function d8() {
	this.size = 0, this.eJ = 0, this.aD = null, this.dk = function(aD) {
		this.eJ = 0, this.aD = aD, this.size = aD.length
	}, this.x4 = function() {
		this.aD = null
	}, this.rX = function(size) {
		for (var g2 = 0, aD = this.aD, oG = this.eJ + size - 1, aC = this.eJ; aC <= oG; aC++) g2 |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << oG - aC;
		return this.eJ += size, this.eJ > 8 * this.size && console.error("Unwrapper Overflow"), g2
	}, this.aXu = function(size) {
		var fu = size >> 1;
		return (1 << fu) * this.rX(size - fu) + this.rX(fu)
	}, this.aXv = function(afv) {
		return this.size === bG.aXt(afv)
	}, this.aZc = function(a0D, afw, afx) {
		var h3 = this.rX(a0D);
		if (!h3) return null;
		for (var a0D = Math.max(h3, afx), h = new(afw <= 8 ? Uint8Array : afw <= 16 ? Uint16Array : Uint32Array)(a0D), aC = 0; aC < h3; aC++) h[aC] = this.rX(afw);
		afx = h[h3 - 1];
		return afx && h.fill(afx, h3), h
	}, this.aZd = function(a0D, afy, afx) {
		var h3 = this.rX(a0D);
		if (!h3) return null;
		for (var a0D = Math.max(h3, afx), h = new Array(a0D), aC = 0; aC < h3; aC++) h[aC] = this.aZa(afy);
		return h.fill(h[h3 - 1], h3), h
	}, this.aZa = function(a0D) {
		return bJ.zM.zQ(this.rX(a0D))
	}, this.aZb = function() {
		var a2Z = this.rX(30);
		if (!(6 * a2Z > 8 * this.size - this.eJ)) {
			var s6 = bI.f1.ue(bI.f1.uf(a2Z)),
				s6 = bD.tN.a7c(s6, "_", "/");
			s6 = bD.tN.a7c(s6, "-", "+");
			for (var afz = "";
				(s6.length + afz.length) % 4;) afz += "=";
			s6 = "data:image/png;base64," + s6 + afz;
			var aLo = new Image;
			aLo.onload = function() {
				bC.aMl.aMm(aLo), aLo.onload = null, aLo = null
			}, aLo.src = s6
		}
	}
}

function dR() {
	this.aae = 0, this.aaf = 0, this.aaa = 0, this.aab = 0, this.aac = 0, this.aad = 0, this.aFU = [0, 0, 0, 0], this.oF = function() {
		this.aae = aT.a1R(), this.aaf = aT.a1S(), this.aaa = -this.aae, this.aab = -this.aaf, this.aac = i.j / io, this.aad = i.k / io, this.aFU[0] = Math.floor(this.aaa), this.aFU[1] = Math.floor(this.aab), this.aFU[2] = Math.floor(this.aFU[0] +
			this.aac + 1), this.aFU[3] = Math.floor(this.aFU[1] + this.aad + 1), be.aFS = !0
	}
}

function cs() {
	var aBC, nk;
	this.dk = function() {
		aBC = 1, nk = 0
	}, this.ef = function() {
		0 < aBC && (nk = 0 === nk ? bi.ea + 16 : nk, aBC = (aBC -= .001 * (bi.ea - nk)) < 0 ? 0 : aBC, nk = bi.ea, bi.ds = !0)
	}, this.xy = function() {
		0 < aBC && (xz.fillStyle = "rgba(0,0,0," + aBC + ")", xz.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eJ = 0, this.aD = null, this.dk = function(aD) {
		this.eJ = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(afv) {
		return this.dk(new Uint8Array(this.aXt(afv))), this.aD
	}, this.x4 = function() {
		this.aD = null
	}, this.a9 = function(size, aAa) {
		for (var aD = this.aD, oG = this.eJ + size - 1, aC = this.eJ; aC <= oG; aC++) aD[aC >> 3] |= (aAa >> oG - aC & 1) << 7 - (7 & aC);
		this.eJ += size, this.eJ > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aXs = function(size, aAa) {
		var fu = size >> 1,
			fd = 1 << fu;
		this.a9(size - fu, bO.g1(aAa, fd)), this.a9(fu, aAa % fd)
	}, this.ag2 = function(size) {
		for (var aD = this.aD, oG = this.eJ + size, aC = this.eJ; aC < oG; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.aXt = function(afv) {
		return afv + 7 >> 3
	}, this.ag3 = function(h, kB, oG, ag4) {
		for (var aC = kB; aC < oG; aC++) this.a9(ag4, h[aC])
	}
}

function d7() {
	this.dk = function() {
		this.h = [], this.eJ = 0
	}, this.aYJ = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(ag5, value) {
		for (var h = this.h, oG = this.eJ + ag5 - 1, ag6 = 1 + (oG >> 3); h.length < ag6;) h.push(0);
		for (var aC = this.eJ; aC <= oG; aC++) h[aC >> 3] |= (value >> oG - aC & 1) << 7 - (7 & aC);
		this.eJ += ag5
	}, this.dr = function(h, a0D, afw) {
		var ag7 = bD.sX.a65(h);
		this.a9(a0D, ag7);
		for (var aC = 0; aC < ag7; aC++) this.a9(afw, h[aC])
	}, this.aZu = function(h, a0D, afy) {
		var ag7 = bD.sX.a65(h);
		this.a9(a0D, ag7);
		for (var aC = 0; aC < ag7; aC++) this.aZs(h[aC], afy)
	}, this.aZs = function(s6, a0D) {
		var fa = s6.length;
		this.a9(a0D, fa);
		for (var aC = 0; aC < fa; aC++) this.a9(16, s6.charCodeAt(aC))
	}, this.aZt = function(a6B) {
		var ag8 = (a6B = a6B.toDataURL()).split(",");
		if (ag8.length < 2) console.log("error 266");
		else {
			a6B = bD.tN.a7c(a6B = ag8[ag8.length - 1], "/", "_"), a6B = bD.tN.a7c(a6B, "\\+", "-");
			var a6B = bD.tN.a7c(a6B, "=", ""),
				zZ = bJ.f1.zW(a6B),
				fa = zZ.length;
			this.a9(30, fa);
			for (var aC = 0; aC < fa; aC++) this.a9(6, zZ[aC])
		}
	}
}
a(), self.aiCommand746 = function(g2) {
	0 === g2 ? bx() : 1 !== g2 || !a1 || 1 !== a1.id || a1.e4 < 14 || bM.g3()
}, setTimeout(bx, 1e4), window.onload = function() {
	bx()
};