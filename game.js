var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, gS, gT, gU, gV, gW, gX, gY, gZ, ga, gb, gc, gd,
	ge, ir, jH, jI, aBv, mZ, kj, a5D, yJ, a1p, aG0, a8U, a8V, S = ["div", "100%", "⬅️ ", "absolute", "none", "canvas", "0.75em", "<br>", "inherit", "center", "0.8em", "rgb(", "auto", "hidden", "rgba(", "   ", "flex", "span", "1em", "50%", "0.5em",
		"email", "Data", " / ", "territorial.io", "click", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "function", "undefined", "pointer", "middle",
		"break-word", "bold", "Player ", "Escape", "0.6em", "0.4em", "underline", "text", "scroll", "nowrap", "inline-block", "fixed", "button", "Value", "Enter", "20%", "1.5em", "' target='_blank'>", "🔄 Reload", "translate(-50%, -50%)", "string",
		"rgba(0,0,0,0.8)", "pre-wrap", "number", "mouseleave", "left", "keydown", "game.territorial.io", "focus", "ellipsis", "blur", "aria-label", "Zombie", "Space", "Reload", "Redacted ", "Battle Royale", "<a href='", "</a>", "1v1", "100,100,100",
		"1.2em", "1.0em", "0px", "0.3em", "0.2em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "⚠️ ", "zombie", "wheel", "userIcon", "true", "touchstart", "top", "tls7", "system-ui", "style", "right", "rgba(140,10,10,0.75)",
		"rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "px ", "placeholder", "orange", "oneVsOne", "noFullSending", "mouseover", "mouseout", "long", "logo", "loading", "italic ",
		"https://territorial.io/", "https://", "file", "error", "en-US", "dotted", "data:image/png;base64,", "crown", "contextmenu", "column", "clock", "break-all", "blur(4px)", "battleRoyale", "aria-pressed", "arena", "account", "accept", "_blank",
		"[Redacted Message]", "Seed", "Report", "Patreon", "Mare Nostrum", "Interest", "Gold Seizure", "Close", "Bot ", "Back", "Audit Log", "Arial Black, system-ui", "30%", "255,255,255", "1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1.3em",
		"1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", "/log/?r=", ". Duration: x", "-1px 1px 0 lightgray,", "-1px -1px 0 lightgray,", ",0,0.85)", " solid white;}", " Rank: ",
		" / 180", " / 160", " -> "
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

function by(bz) {
	m && !bz || (c1(), bO = new c2, bN = new c3, bD = new c4, bE = new c5, aE = new c6, bA = new c7, bI = new c8, bJ = new c9, aF = new cA, aG = new cB, aH = new cC, aI = new cD, aJ = new cE, aK = new cF, aL = new cG, aM = new cH, aN = new cI, aO =
		new cJ, aP = new cK, aQ = new cL, aR = new cM, aS = new cN, aT = new cO, aU = new cP, aV = new cQ, aW = new cR, aX = new cS, aY = new cT, aZ = new cU, aa = new cV, ab = new cW, ac = new cX, ad = new cY, al = new cZ, am = new ca, ao =
		new cb, an = new cc, ae = new cd, af = new ce, ai = new cf, ag = new cg, ah = new ch, aj = new ci, b0 = new cj, ak = new ck, aq = new cl, ar = new cm, at = new cn, b1 = new co, az = new cp, ap = new cq, au = new cr, av = new cs, aw =
		new ct, i = new cu, ax = new cv, ay = new cw, b2 = new cx, b3 = new cy, b4 = new cz, b5 = new d0, b6 = new d1, b7 = new d2, b8 = new d3, b9 = new d4, bB = new d5, bC = new d6, bF = new d7, bG = new a7, bH = new d8, bK = new d9, bL =
		new dA, bM = new dB, bP = new dC, bQ = new dD, bR = new dE, bS = new dF, bT = new dG, bU = new dH, bV = new dI, bW = new dJ, u = new dK, bX = new dL, a1 = new dM, m = new dN, bl = new dO, bm = new dP, bj = new dQ, bk = new dR, bd =
		new dS, be = new dT, bY = new dU, bZ = new dV, bg = new dW, bh = new dX, bi = new dY, bn = new dZ, bf = new da, p = new db, bo = new dc, bp = new dd, bq = new de, bs = new df, bt = new dg, bu = new dh, bv = new di, bw = new dj, bx =
		new dk, m.dm(), a1.dm(), i.dn(), bm.dm(), bA.dm(), bA.dp(), (ba = new dq).dm(), bD.dm(), bY.dm(), b1.dm(), bI.dm(), bJ.dm(), bV.dm(), u.dm(), bb = new dr, i.dm(), bi.dm(), bf.dm(), bZ.dm(), bc = new ds, az.dm(), af.dt(), bX.dm(), aq.dm(),
		ab.dm(), aU.dm(), aj.dm(), bM.dm(), ac.dm(), bi.du = !0, setTimeout(function() {
			bV.a8(2, 14071)
		}, 0), u.v(5, 5), bL.dv() || a1.a2.dw(), i.dx(), m.n = 1)
}

function dN() {
	this.dy = 2, this.dz = 1772, this.e0 = 0;
	this.rVersion = 26, this.e4 = 0, this.dm = function() {
		this.o = "2.17.5", this.e6 = "10 Nov 2026 [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.e7 = 0 <= this.hostname.indexOf("github.io"), this.e8 = 0 <=
			this.hostname.indexOf("game.territorial.io"), this.aB = function() {
				try {
					return window.self !== window.top
				} catch (e) {
					return !0
				}
			}(), this.eA = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.aA + " validMod: " + +this.e7)
	}, this.n = 0
}

function eB() {
	var eC = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		eD = [100, 60, 30, 15, 6, 1],
		eE = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		eF = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		eH = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.eI = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments", "Report", "Vouch"]
	], this.eJ = function(id, eK, eL) {
		eK = this.eM(eK);
		return +(eE[eK][id] > eL)
	}, this.eM = function(eK) {
		for (var aC = 0; aC < eD.length; aC++)
			if (eD[aC] <= eK) return aC;
		return eD.length
	}, this.eN = function(eK) {
		return eC[this.eM(eK)]
	}, this.eO = function(id, eP) {
		return eF[id].replace(new RegExp("x", "g"), eP)
	}, this.eQ = function(id, eP) {
		return eH[id].replace(new RegExp("x", "g"), eP)
	}, this.eR = function(id, eS) {
		return this.eI[5][id]
	}
}

function dL() {
	this.eT = new eU, this.eV = new eW, this.turnstile = new eX, this.dm = function() {
		a1.a2.eY(), this.turnstile.dm()
	}, this.eZ = function() {
		return bm.buffer.data[160].value
	}
}

function eU() {
	var ea = 12e3;
	this.show = function(eb) {
		return !eb && !bX.eZ() && (0 === a1.id ? bX.eV.show() : !(bi.ec < ea) && (eb = 1 === a1.id ? 72e4 : 108e4, ea = bi.ec + eb, 2 === m.dy) && a1.a2.ee(Math.floor(eb)))
	}
}

function eW() {
	var ef = null,
		ea = 2e4,
		eg = 0;
	this.eh = function() {
		bi.ec < ea || (ea = bi.ec + 1e4, 0 !== a1.id) || ef || bX.eZ() || (b1.z.ei(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b1.ej.ek(5) : ea = bi.ec + 1e3)
	}, this.el = function(em) {
		ef = em
	}, this.show = function() {
		return !(!ef || bi.ec < eg) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (eg = bi.ec + 6e4, (new en).show(ef.eo, ef.colors, ef.id), !(ef = null)))
	}
}

function eX() {
	this.ep = 0;
	var es, eq = null,
		er = 0,
		et = "",
		eu = 0,
		ev = null,
		ew = -1,
		ex = -1,
		ey = 0;

	function f8() {
		if (null !== ev && null !== eq) {
			er = 0;
			try {
				window.turnstile.remove(eq), ev.remove()
			} catch (e) {
				console.log("turnstile remove failed " + e)
			}
			eq = ev = null
		}
	}

	function f2(fC) {
		return "" !== et && eu + 1e3 * (300 - fC) > performance.now()
	}
	this.dm = function() {
		var f0;
		m.e0 || !m.aA && !m.e7 ? (console.log("turnstile cannot be loaded"), this.ep = -1) : ((f0 = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", f0.async = !0, f0.onload =
			function() {
				bX.turnstile.ep = 1, console.log("turnstile onload"), bX.turnstile.f1()
			}, f0.onerror = function() {
				bX.turnstile.ep = -1, console.log("turnstile onerror")
			}, document.head.appendChild(f0))
	}, this.f1 = function() {
		var ed;
		return !(1 !== this.ep || (window.turnstile ? er ? (console.log("turnstile error 246"), 1) : f2(30) || (ed = performance.now()) < ey && ew === bJ.f3.f4(bm.buffer.data[105].value, 5) && ex === aa.f5 || (et = "", er = 1, es = ed, (ev =
			document.createElement("div")).style.position = "fixed", ev.style.left = "0", ev.style.top = "0", ev.style.zIndex = "100", document.body.appendChild(ev), console.log("turnstile render"), eq = window.turnstile.render(
			ev, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(f6) {
					console.log("turnstile success " + Math.floor(performance.now() - es)), et = f6, eu = performance.now(), bX.turnstile.f7(), f8()
				},
				"expired-callback": function() {
					f8(), console.log("turnstile expired " + Math.floor(performance.now() - es))
				},
				"error-callback": function() {
					f8(), console.log("turnstile callback error " + Math.floor(performance.now() - es)), bX.turnstile.ep = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		f8()
	}, this.f7 = function() {
		f2(8) && bq.f9 && b1.z.ei(b1.z.fA) && (ey = performance.now() + 36e5 - 1e4, ew = bJ.f3.f4(bm.buffer.data[105].value, 5), ex = aa.f5, b1.ej.fB(et), et = "", console.log("sendTokenToLobby success"))
	}
}

function cc() {
	this.fD = new fE
}

function fE() {
	this.fF = function(fG) {
		var fJ;
		return bV.fH(bV.fI) && aE.data.passableMountains && (fJ = ad.fK(fG), this.fL(aE.fM, fJ) || this.fN(aE.fM, fJ)) && 0 !== (fJ = function(fi) {
			for (var fj = bP.fk(fi), fl = bP.fm(fi), max = Math.max(bV.fn, bV.fo) - 2, fp = max * max, fq = !1, fr = 0, fs = 0; fs < max; fs++) {
				var ft, fO = function(fj, fl, fs) {
					for (var aC = 0; aC <= fs; aC++)
						for (var fv = -1; fv < 2; fv += 2)
							for (var fw = -1; fw < 2; fw += 2)
								for (var em = 0; em < 2; em++) {
									var fG = function(fj, fl) {
										if (bP.fy(fj, fl)) {
											fj = bP.fz(fj, fl), fl = bP.fS(fj);
											if (ad.fX(fl) && ad.g0(fl)) return fj
										}
										return 0
									}(fj + em * fv * aC + (1 - em) * fw * fs, fl + em * fw * fs + (1 - em) * fv * aC);
									if (fG) return fG
								}
					return 0
				}(fj, fl, fs);
				fO && (ft = bP.fu(fj, fl, fO)) < fp && (fr = fO, fp = ft, fq || (fq = !0, max = Math.floor(Math.sqrt(ft)) + 1))
			}
			return fr
		}(bP.fQ(fG))) && (fG = bP.fS(fJ), ad.fT(fG) || (fG = ad.fU(fG)) !== aE.fM && bw.fV(fG, aE.fM)) ? fJ : 0
	}, this.fW = function(player, fO) {
		fO = bP.fS(fO);
		if (ad.fX(fO)) {
			if (ad.fT(fO)) bR.fY[0] = aE.fZ;
			else if (ad.fU(fO) !== bR.fY[0]) return !1;
			for (var fa = function(fG) {
					var fe = ad.fe,
						fa = [];
					loop: for (var ff = 3; 0 <= ff; ff--) {
						var fg = fG + fe[ff];
						if (ad.fh(fg)) {
							for (var id = ad.fK(fg), aC = 0; aC < fa.length; aC++)
								if (id === fa[aC]) continue loop;
							bR.fd[fa.length] = fg, fa.push(id)
						}
					}
					return fa
				}(fO), fc = fa.length, aC = 0; aC < fc; aC++)
				if (this.fL(player, fa[aC]) || this.fN(player, fa[aC])) return bR.fd[0] = bR.fd[aC], !0
		}
		return !1
	}, this.fL = function(player, fJ) {
		for (var g1 = ah.g1[player], fc = g1.length, g2 = Math.max(bO.g3(fc, 12), 1), fe = ad.fe, aC = 0; aC < fc; aC += g2)
			for (var fR = g1[aC], ff = 3; 0 <= ff; ff--) {
				var fg = fR + fe[ff];
				if (ad.fh(fg) && fJ === ad.fK(fg)) return !0
			}
		return !1
	}, this.fN = function(player, fJ) {
		for (var g1 = ah.g1[player], fc = g1.length, fe = ad.fe, aC = 0; aC < fc; aC++)
			for (var fR = g1[aC], ff = 3; 0 <= ff; ff--) {
				var fg = fR + fe[ff];
				if (ad.fh(fg) && fJ === ad.fK(fg)) return !0
			}
		return !1
	}
}

function dE() {
	this.h = new Array(4), this.g6 = new Uint16Array(2), this.g7 = new Uint16Array(2), this.g8 = new Int32Array(2), this.g9 = new Uint32Array(2), this.gA = new Uint32Array(2), this.gB = new Uint8Array(4), this.gC = new Uint8Array(4), this.fd =
		new Uint32Array(4), this.gD = new Uint32Array(5), this.fY = new Uint32Array(8), this.gE = new Uint32Array(8), this.gF = new Uint16Array(16), this.gG = new Uint16Array(512), this.gH = new Uint16Array(512), this.gI = new Uint16Array(512), this
		.gJ = new Uint16Array(0), this.dm = function() {
			var fc = bV.fn * bV.fo;
			this.gJ.length !== fc && (this.gJ = new Uint16Array(fc))
		}, this.gK = function(h, gL) {
			return h[0] = gL, h
		}, this.gM = function(h, gL, gN) {
			return h[0] = gL, h[1] = gN, h
		}, this.gO = function(h, gL, gN, gP) {
			return h[0] = gL, h[1] = gN, h[2] = gP, h
		}, this.gQ = function(h, gL, gN, gP, gR) {
			return h[0] = gL, h[1] = gN, h[2] = gP, h[3] = gR, h
		}
}

function gf() {
	gY = 0, gZ = 2048, ga = new Uint32Array(4 * gZ), gb = 0, gc = new Uint32Array(gZ), gd = new Uint8Array(bV.fn * bV.fo)
}

function gg(player) {
	gT = player, ge = !1, gh(), gi();
	for (var aC = ae.gj(gT) - 1; 0 <= aC; aC--) gS = aC, gk();
	ge && gl()
}

function gl() {
	bw.gm(), bw.gn()
}

function gk() {
	gX = ae.go(gT, gS), gU = ae.gp(gT, gS), gV = ae.gq(gT, gS), gr(), (0 !== gY && (gt(), gu()) ? gv : gs)()
}

function gu() {
	if (!((gW = bO.g3(gU, gY)) > aE.gw)) {
		if (!gV) return !1;
		var gx = gY * (1 + aE.gw);
		gU += bD.gy.gz(gT, gx - gU), gW = bO.g3(gU, gY)
	}
	return !0
}

function gt() {
	for (var aC = gY - 1; 0 <= aC; aC--) gd[bO.g3(ga[aC], 4)] = 0
}

function gs() {
	1 === ae.gj(gT) && aG.h0(gT);
	var ed = bD.gy.h1(gT, gU);
	bg.h2(gT, gU - ed, 12), ae.h3(gT, gS)
}

function gh() {
	for (var player = gT, h4 = ah.h4, fc = Math.min(h4[player].length, gZ), h5 = 0, h6 = gc, aC = fc - 1; 0 <= aC; aC--) h6[h5++] = h4[player][aC];
	gb = h5
}

function gi() {
	for (var aC = ah.h4[gT].length - 1; 0 <= aC; aC--) ad.fX(ah.h4[gT][aC]) && ad.h7(ah.h4[gT][aC], gT);
	ah.h4[gT] = []
}

function gr() {
	gY = 0, (gX === aE.fZ ? h8 : h9)()
}

function h9() {
	for (var hA, hB, aC, fe = ad.fe, ff = 3; 0 <= ff; ff--)
		for (aC = gb - 1; 0 <= aC; aC--) hA = gc[aC] + fe[ff], hB = bO.g3(hA, 4), 0 === gd[hB] && ad.hC(hA) && ad.fU(hA) === gX && (gd[hB] = 1, ga[gY++] = hA)
}

function h8() {
	for (var hA, hB, aC, fe = ad.fe, ff = 3; 0 <= ff; ff--)
		for (aC = gb - 1; 0 <= aC; aC--) hA = gc[aC] + fe[ff], hB = bO.g3(hA, 4), 0 === gd[hB] && ad.fT(hA) && (gd[hB] = 1, ga[gY++] = hA)
}

function gv() {
	hD() ? (hE(), gX !== aE.fZ && hF()) : gs()
}

function hF() {
	bw.hG(), bw.hH(ah.hI[gX]), bw.hH(ah.hJ[gX]), bV.fH(bV.fI) && bw.hH(ah.g1[gX]), bw.hK(ah.h4[gX]), bw.hL(ah.hJ[gX]), bw.hL(ah.g1[gX]), bw.hM(), bw.hN()
}

function hE() {
	ge = !0, ae.hO(gT, gS, gU), ae.hP(gT, gS), ah.hQ[gT] += gY, bw.hR(), hS()
}

function hD() {
	return (gX === aE.fZ ? hT : hU)()
}

function hU() {
	var hV = gY * aE.gw,
		hW = hX(),
		hY = hZ(),
		hW = hV + 2 * hW + hY,
		hb = gW * gY;
	return hW < hb ? (gU -= hW, bg.h2(gT, hW, 13), hc(hW - hV, hY), !0) : gV && 0 === hY ? (gU -= hb, hb += bD.gy.gz(gT, hW - hb + 1), bg.h2(gT, hb, 13), hc(hb - hV, 0), !0) : (gU -= hb, bg.h2(gT, hb, 13), hc(hb - hV, hY), !1)
}

function hc(hb, hY) {
	if (0 < hY) {
		if (hb <= hY) return bg.h2(gX, hb, 13), void ae.hd(gX, gT, hY - hb);
		ae.hd(gX, gT, 0), hb -= hY
	}
	hb = bO.g3(hb, 2), hb = Math.min(ah.he[gX], hb), bg.h2(gX, hb, 13), ah.he[gX] -= hb
}

function hZ() {
	return ae.hf(gX, gT)
}

function hX() {
	return bO.g3(gY * ah.he[gX], 1 + bO.g3(10 * ah.hQ[gX], 16))
}

function hT() {
	var hg = gY * aE.gw;
	return gU -= hg, bg.h2(gT, hg, 13), !0
}

function hS() {
	for (var aC = gY - 1; 0 <= aC; aC--) ah.h4[gT].push(ga[aC]), ah.hI[gT].push(ga[aC]), ad.h7(ga[aC], gT)
}

function dJ() {
	var hh = 0,
		hi = 0;
	this.hj = function(fj, fl) {
		hh = fj, hi = fl
	}, this.hk = function(code) {
		var hs, hu, fO;
		aE.hl || aE.hm || aN.hn || (bD.gy.ho(0) || bD.gy.ho(1)) && bD.gy.hp(aE.fM) && (aS.hq(hh, hi) ? aS.hr = !1 : aQ.hq(hh, hi) || (hs = bP.ht(hh), hu = bP.hv(hi), fO = bP.fz(hs, hu), bP.hw(hs, hu) && (0 === code ? function(fO) {
			var i0, fG, fR;
			aE.i1 ? -1 !== (i0 = bv.i2(fO)) && bB.i3.i4(fO) : (fG = bP.fS(fO), ad.fh(fG) ? (i0 = an.fD.fF(fG)) && (fR = bP.fS(i0), fR = ad.fT(fR) ? aE.fZ : ad.fU(fR), bB.i3.i6(aS.i7(), i0, fR)) : (i0 = bv.i8(fO)) < 0 || (fG = bP
				.fS(i0), ad.fT(fG) ? bw.i9(aE.fM) ? bB.i3.iA(aS.i7(), aE.fZ) : ae.gj(aE.fM) && b2.iB(aE.fZ, aS.i7()) : (fR = ad.fU(fG), bw.fV(fR, aE.fM) && (bw.iC(aE.fM, fR) ? bB.i3.iA(aS.i7(), fR) : ae.gj(aE.fM) && b2.iB(
					fR, aS.i7())))))
		}(fO) : 1 === code ? function(fO) {
			bQ.iD.iE(aE.fM, fO) && bB.i3.iF(aS.i7(), bR.gE[7])
		}(fO) : 2 === code && function(fO) {
			bQ.iG.iH(aE.fM, fO) && bB.i3.iI(aS.i7())
		}(fO))))
	}, this.iJ = function() {
		if (!(aE.hl || aE.hm || aN.hn) && bD.gy.ho(1)) {
			var hA = aE.fM;
			if (bD.gy.hp(hA)) {
				var fc = ae.gj(hA);
				if (fc < 1) ! function() {
					var hA = aE.fM;
					if (bw.i9(hA)) bB.i3.iA(aS.i7(), aE.fZ);
					else
						for (var fe = ad.fe, hI = ah.hI, fc = hI[hA].length, iT = Math.floor(Math.random() * fc), aC = 0; aC < fc; aC++)
							for (var iU = 3; 0 <= iU; iU--) {
								var iV = hI[hA][(aC + iT) % fc] + fe[iU];
								if (ad.hC(iV)) {
									iV = ad.fU(iV);
									if (iV !== hA && (!aE.iX || bw.fV(hA, iV))) return bB.i3.iA(aS.i7(), iV)
								}
							}
				}();
				else {
					for (var iL = 0, iM = ae.gp(hA, 0), aC = 1; aC < fc; aC++) {
						var iN = ae.gp(hA, aC);
						iN < iM && (iM = iN, iL = aC)
					}
					bB.i3.iA(aS.i7(), ae.go(hA, iL))
				}
			}
		}
	}, this.iO = function() {
		if (!(aE.hl || aE.hm || aN.hn) && bD.gy.hp(aE.fM) && bD.gy.ho(1)) return ax.iP ? ax.iQ(aE.fM) ? void bB.i3.iR(1) : void 0 : void(ax.iS(aE.fM) && bB.i3.iO())
	}
}

function iY(iZ, size, ia, ib, font) {
	var aC, ig = .2,
		canvas = document.createElement("canvas"),
		ih = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = iZ, canvas.height = iZ, ih.font = size + font, ih.textAlign = "center", ih.textBaseline = "middle", ih.fillStyle = "red", aC = 0; aC < ia.length; aC++) ih.fillText(ia[aC], .5 * iZ, .5 * iZ);
	return -1 < (canvas = function(ic) {
		var aC, eK, ff = ic.data;
		for (aC = ff.length - 4; 0 <= aC; aC -= 4)
			if (eK = ff[aC], ib <= eK) return Math.floor(aC / (4 * iZ));
		return -1
	}(ih.getImageData(0, 0, iZ, iZ))) && (ig = (canvas - .5 * iZ + .1 * size) / size), Math.max(ig, 0)
}

function dC() {
	this.ij = new Int16Array(4), this.ik = new Int16Array(4), this.il = null, this.dm = function() {
		var aC;
		for (this.ij[0] = -bV.fn, this.ij[1] = 1, this.ij[2] = bV.fn, this.ij[3] = -1, this.il = new Int16Array([-bV.fn, 1 - bV.fn, 1, bV.fn + 1, bV.fn, bV.fn - 1, -1, -bV.fn - 1]), aC = 0; aC < 4; aC++) this.ik[aC] = 4 * this.ij[aC]
	}, this.im = function() {
		return bO.io(Math.floor(.15 * (1 + .25 * a1.a2.ip()) * i.iq / ir), 4, 128)
	}, this.is = function(fG, id) {
		for (var it = this.ik, aC = 0; aC < 4; aC++) {
			var fR = fG + it[aC];
			if (ad.iu(fR) && ad.fK(fR) === id) return !0
		}
		return !1
	}, this.iv = function(player, fG) {
		return !ad.fT(fG) && player === ad.fU(fG)
	}, this.fu = function(hs, hu, fO) {
		return (hs -= this.fk(fO)) * hs + (hu -= this.fm(fO)) * hu
	}, this.iw = function(ix, iy, iz) {
		ix = this.j1(ix) - this.j2(iz), iy = this.j4(iy) - this.j5(iz);
		return Math.sqrt(ix * ix + iy * iy)
	}, this.j6 = function(j7, j8) {
		var j0 = this.fk(j7) - this.fk(j8),
			j7 = this.fm(j7) - this.fm(j8);
		return ~~Math.sqrt(j0 * j0 + j7 * j7 + .5)
	}, this.j9 = function(j7, j8) {
		var j0 = this.fk(j7) - this.fk(j8),
			j7 = this.fm(j7) - this.fm(j8);
		return j0 * j0 + j7 * j7
	}, this.jA = function(jB, jC, jD, jE) {
		return (jB -= jD) * jB + (jC -= jE) * jC
	}, this.jF = function(hA, jG) {
		return bO.g3(jG * ah.he[hA], 1e3)
	}, this.j1 = function(ix) {
		return 16 * (ix + jH) / ir
	}, this.j4 = function(iy) {
		return 16 * (iy + jI) / ir
	}, this.jJ = function(ff) {
		return 16 * ff / ir
	}, this.ht = function(ix) {
		return Math.floor((ix + jH) / ir)
	}, this.hv = function(iy) {
		return Math.floor((iy + jI) / ir)
	}, this.hw = function(hs, hu) {
		return 1 <= hs && 1 <= hu && hs < bV.fn - 1 && hu < bV.fo - 1
	}, this.fk = function(fO) {
		return fO % bV.fn
	}, this.fm = function(fO) {
		return bO.g3(fO, bV.fn)
	}, this.fz = function(hs, hu) {
		return hu * bV.fn + hs
	}, this.jK = function(hs, hu) {
		return 4 * this.fz(hs, hu)
	}, this.jL = function(fO) {
		return this.fy(this.fk(fO), this.fm(fO))
	}, this.fy = function(hs, hu) {
		return 0 < hs && hs < bV.fn - 1 && 0 < hu && hu < bV.fo - 1
	}, this.fS = function(fO) {
		return fO << 2
	}, this.fQ = function(fG) {
		return fG >> 2
	}, this.jM = function(fO) {
		return bV.fn * this.fm(fO) * 256 + (this.fk(fO) << 4)
	}, this.jN = function(fO) {
		return this.jM(fO) + 8 + (bV.fn << 7)
	}, this.jO = function(iz) {
		return bV.fn * (this.j5(iz) >> 4) + (this.j2(iz) >> 4)
	}, this.jP = function(iz) {
		iz = this.jO(iz);
		return (this.fk(iz) >> 5) + bQ.jQ.jR * (this.fm(iz) >> 5)
	}, this.j2 = function(iz) {
		return iz % (bV.fn << 4)
	}, this.j5 = function(iz) {
		return bO.g3(iz, bV.fn << 4)
	}, this.jS = function(fO, iU) {
		return fO + this.ij[iU]
	}, this.jT = function(fG, iU) {
		return fG + this.ik[iU]
	}, this.jU = function(j7, j8) {
		var j0 = this.fk(j8) - this.fk(j7),
			j8 = this.fm(j8) - this.fm(j7);
		return Math.abs(j0) >= Math.abs(j8) ? 1 + 2 * (j0 < 0) : 2 * (0 < j8)
	}, this.jV = function(player) {
		return this.fz(ah.jW[player] + ah.jX[player] >> 1, ah.jY[player] + ah.jZ[player] >> 1)
	}, this.ja = function(player) {
		return this.fz(az.jb(ah.jW[player], ah.jX[player]), az.jb(ah.jY[player], ah.jZ[player]))
	}
}

function cq() {
	this.jc = new jd, this.je = new jf, this.jg = new jh, this.performance = new ji, this.jj = new jk, this.jl = new jm, this.jn = new jo, this.jp = new jq, this.jr = new js, this.dm = function() {
		this.jc.dm(), this.jg.dm(), this.performance.dm(), this.jj.dm(), this.jl.dm()
	}, this.eh = function() {
		this.performance.eh(), this.jc.eh(), this.jg.jt()
	}
}

function jk() {
	var ju, jw = new Uint16Array(8);

	function k4(size, player) {
		for (var aC = ah.h4[player].length - 1; size <= aC; aC--) ad.kA(ah.h4[player][aC], player)
	}
	this.dm = function() {
		ju = 0
	}, this.jx = function(player, jy) {
		return bR.fY[1] = ah.h4[player].length, bR.fY[0] === aE.fZ ? ap.jj.jz(player) : this.k0(player, bR.fY[0]), (0 !== bR.fY[1] || 0 !== ah.h4[player].length) && !(!jy && bR.fY[1] === ah.h4[player].length || (bR.fY[0] === aE.fZ ? ah.k1[
			player]++ : ah.k2[player]++, 0))
	}, this.k3 = function(player) {
		k4(bR.fY[1], player), ae.el(player, bR.g9[0], bR.fY[0]), aG.k5(player, !1)
	}, this.k6 = function(player, k7, fc, iM) {
		var k8 = bO.g3(12 * ah.he[player], 1024);
		iM -= iM >= bO.g3(ah.he[player], 2) ? k8 : 0, k4(fc, player), ae.el(player, iM, k7), ah.he[player] -= iM + k8, aG.k5(player, !1)
	}, this.k0 = function(player, k7) {
		for (var iU, fe = ad.fe, aC = ah.hI[player].length - 1; 0 <= aC; aC--)
			if (ad.k9(ah.hI[player][aC]))
				for (iU = 3; 0 <= iU; iU--)
					if (ad.hC(ah.hI[player][aC] + fe[iU]) && ad.fU(ah.hI[player][aC] + fe[iU]) === k7) {
						ah.h4[player].push(ah.hI[player][aC]);
						break
					}
	}, this.jz = function(player) {
		for (var fe = ad.fe, aC = ah.hI[player].length - 1; 0 <= aC; aC--)
			if (ad.k9(ah.hI[player][aC]))
				for (var iU = 3; 0 <= iU; iU--)
					if (ad.fT(ah.hI[player][aC] + fe[iU])) {
						ah.h4[player].push(ah.hI[player][aC]);
						break
					}
	}, this.kB = function(player, kC) {
		var aC, fv, iU, iW, fc = ah.hI[player].length,
			kD = 256 <= fc ? 12 : 32 <= fc ? 6 : 1,
			kE = fc - 1 - az.kF(kD),
			fe = ad.fe;
		ju = 0;
		loop: for (aC = kE; 0 <= aC; aC -= kD)
			for (iU = 3; 0 <= iU; iU--)
				if ((iW = ad.fT(ah.hI[player][aC] + fe[iU]) ? aE.fZ : ad.fU(ah.hI[player][aC] + fe[iU])) === aE.fZ || ad.hC(ah.hI[player][aC] + fe[iU]) && iW !== player && (kC || bw.fV(player, iW))) {
					for (fv = ju - 1; 0 <= fv; fv--)
						if (jw[fv] === iW) continue loop;
					if (jw[ju] = iW, 8 <= ++ju) return !0
				}
		return 0 < ju
	}, this.kG = function(player, kC) {
		var aC, iU, iW, fe = ad.fe;
		for (ju = 0, aC = ah.hI[player].length - 1; 0 <= aC; aC--)
			for (iU = 3; 0 <= iU; iU--)
				if ((iW = ad.fT(ah.hI[player][aC] + fe[iU]) ? aE.fZ : ad.fU(ah.hI[player][aC] + fe[iU])) === aE.fZ || ad.hC(ah.hI[player][aC] + fe[iU]) && iW !== player && (kC || bw.fV(player, iW))) return jw[ju++] = iW, !0;
		return !1
	}, this.kH = function() {
		for (var fw, aC = ju - 1; 0 <= aC; aC--)
			if (jw[aC] === aE.fZ) {
				for (ju--, fw = aC; fw < ju; fw++) jw[fw] = jw[fw + 1];
				return !0
			} return !1
	}, this.kI = function(player) {
		for (var fw, aC = ju - 1; 0 <= aC; aC--)
			if (ae.kJ(player, jw[aC]))
				for (ju--, fw = aC; fw < ju; fw++) jw[fw] = jw[fw + 1];
		return 0 === ju
	}, this.kK = function() {
		for (var aC = ju - 1; 0 <= aC; aC--)
			if (bD.gy.kL(jw[aC])) return !0;
		return !1
	}, this.kM = function() {
		for (var aC = ju - 1; 0 <= aC; aC--) bD.gy.kL(jw[aC]) || (jw[aC] = jw[--ju]);
		return 0 < ju
	}, this.kN = function(player) {
		for (var fw, kO = jw[0], kP = ah.he[kO] + ae.hf(kO, player), aC = ju - 1; 1 <= aC; aC--)(fw = ah.he[jw[aC]] + ae.hf(jw[aC], player)) < kP && (kO = jw[aC], kP = fw);
		return kO
	}, this.kQ = function(player) {
		var k, kR = jw[0];
		if (1 !== ju)
			for (var kS = bO.g3(ah.jX[player] + ah.jW[player], 2), kT = bO.g3(ah.jZ[player] + ah.jY[player], 2), fs = kU(kS - bO.g3(ah.jX[kR] + ah.jW[kR], 2)) + kU(kT - bO.g3(ah.jZ[kR] + ah.jY[kR], 2)), aC = ju - 1; 1 <= aC; aC--)(k = kU(kS - bO
				.g3(ah.jX[jw[aC]] + ah.jW[jw[aC]], 2)) + kU(kT - bO.g3(ah.jZ[jw[aC]] + ah.jY[jw[aC]], 2))) < fs && (fs = k, kR = jw[aC]);
		return kR
	}, this.kV = function() {
		for (var kW = jw, kX = kW[0], he = ah.he, kY = he[kX], aC = ju - 1; 1 <= aC; aC--) {
			var hA = kW[aC],
				fw = he[hA];
			kY < fw && (kX = hA, kY = fw)
		}
		return kX
	}, this.kZ = function() {
		return jw[az.kF(ju)]
	}
}

function jm() {
	function kp(player, k7, kf) {
		3 <= kf && 2142 < bi.kv() && (k7 === aE.fZ || ah.he[k7] < bO.g3(ah.he[player], 20)) && aF.kk(player, 20)
	}

	function ks(player, iM, k7, kf) {
		3 <= kf && kf < 6 && bO.g3(ah.he[player], 8) > ah.he[k7] && (iM = Math.max(bO.g3(11 * ah.he[k7], 5), bO.g3(ah.he[player], 10)));
		kf = ah.h4[player].length;
		ap.jj.k0(player, k7), ap.jj.k6(player, k7, kf, iM)
	}

	function ko(player, iM) {
		var k7 = aE.fZ,
			fc = ah.h4[player].length;
		ap.jj.jz(player), ah.h4[player].length !== fc && ap.jj.k6(player, k7, fc, iM)
	}
	this.ka = new Uint8Array(aE.fZ), this.dm = function() {
		this.ka.fill(0)
	}, this.kb = function(player, iM) {
		var kd, kf, kg, kh;
		ae.kc(player) && (kd = af.ke(player), 3 <= (kf = aF.iM[player]) && kf < 6 && (iM = Math.max(ah.he[player] - kd, iM)), kg = ah.hJ[player].length, kh = ah.hI[player].length, 30 * ah.hQ[player] > aE.ki && kj[player] < 10 && 100 * kh <= kg &&
			aF.kk(player, 10), aE.iX ? function(player, iM, kf, kd) {
				var k7;
				if (ap.jj.kB(player, !1) || ap.jj.kG(player, !1)) {
					if (!ap.jj.kI(player))
						if (ap.jj.kH()) ko(player, iM), kp(player, aE.fZ, kf);
						else {
							if (az.kq(aF.kr[kf])) k7 = ap.jj.kN(player);
							else {
								if (ap.jj.kK() && az.kq(aF.kt[kf]) && ap.jj.kM(), 6 === kf) return ks(player, iM, ap.jj.kZ(), kf);
								k7 = ap.jj.kQ(player)
							}
							ks(player, iM, k7, kf), kp(player, k7, kf)
						}
				} else bQ.km.eh(player) || ap.jn.eh(player) || ! function(player, iM, kf, kd) {
					var ka = ap.jl.ka;
					ka[player] = 0;
					var kw = bj.fa[player];
					if (0 !== kw) {
						var kx = ah.he[player],
							hQ = ah.hQ;
						if (player < aE.ky && (iM = kx), !(kx < hQ[player] || 5 === kf && kx < kd || 4 === kf && kx < bO.g3(kd, 2))) {
							bk.kz(kw);
							for (var fc = bR.g7[0], gG = bR.gG, aC = az.kF(fc), fw = 0; fw < fc; fw++) {
								var em = gG[(fw + aC) % fc];
								if (ka[em]) return bB.l0.l1(player, em, iM)
							}
							var l2 = bQ.z.l2;
							for (fw = 0; fw < fc; fw++)
								if (em = gG[(fw + aC) % fc], l2[em] && em !== player) return bB.l0.l1(player, em, iM)
						}
					}
				}(player, iM, kf, kd)
			}(player, iM, kf, kd) : (!kh || kg && (kg < kh && !az.kF(10) || 100 * kh <= kg && az.kF(3) || !az.kF(8))) && bQ.km.eh(player) || function(player, iM, kf) {
				ap.jj.kB(player, !0) || ap.jj.kG(player, !0) ? ap.jj.kI(player) || (ap.jj.kH() ? ko(player, iM) : az.kq(aF.kr[kf]) ? ks(player, iM, ap.jj.kN(player), kf) : 5 === kf ? ks(player, iM, ap.jj.kV(), kf) : (ap.jj.kK() && az.kq(aF
					.kt[kf]) && ap.jj.kM(), ks(player, iM, 6 === kf ? ap.jj.kZ() : ap.jj.kQ(player), kf))) : ap.jn.eh(player)
			}(player, iM, kf))
	}
}

function cA() {
	var l3 = new Uint8Array(aE.fZ),
		l4 = new Uint16Array(aE.fZ),
		l5 = new Uint16Array(aE.fZ),
		l6 = new Uint8Array(aE.fZ),
		l7 = (this.iM = new Uint8Array(aE.fZ), new Uint16Array(aE.fZ)),
		l8 = new Uint16Array(aE.fZ);

	function lN(aC) {
		l3[aC] = 1 + bO.g3(l7[aC] * az.random(), 10 * az.value(100))
	}
	this.l9 = null, this.kt = [97, 94, 70, 40, 20, 0, 100], this.lA = [500, 450, 400, 300, 80, 50, 100], this.kr = [0, 0, 5, 25, 50, 100, 0], this.lB = [60, 74, 112, 200, 256, 512, 512], this.lC = [1, 2, 3, 4, 6, 8, 1], this.lD = [500, 450, 400, 300,
		80, 50, 100
	], this.lE = [100, 150, 250, 400, 600, 1e3, 100], this.dn = function() {
		this.l9 = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dm = function() {
		l3.fill(0), l4.fill(0), l5.fill(0), l6.fill(0), this.iM.fill(0), l7.fill(0), l8.fill(0);
		var lF = aE.ky;
		if (9 === aE.lG) this.lH();
		else if (__fx.customLobby.isActive())
			for (aC = aE.lK - 1; 0 <= aC; aC--) this.iM[aC + lF] = __fx.customLobby.gameInfo.difficulty;
		else if (aE.lI)
			if (3 === aE.data.botDifficultyType)
				for (aC = aE.lK - 1; 0 <= aC; aC--) {
					var iV = aC + lF;
					this.iM[iV] = aE.data.botDifficultyData[iV]
				} else if (2 === aE.data.botDifficultyType)
					for (aC = aE.lK - 1; 0 <= aC; aC--) this.iM[iV = aC + lF] = aE.data.botDifficultyTeam[bj.lL[bj.fa[iV]]];
				else if (1 === aE.data.botDifficultyType) {
			var lM = this.l9.length;
			for (aC = aE.lK - 1; 0 <= aC; aC--) this.iM[aC + lF] = aC % lM
		} else
			for (lM = aE.data.botDifficultyValue, aC = aE.lK - 1; 0 <= aC; aC--) this.iM[aC + lF] = lM;
		else
			for (var lJ = 8 === aE.lG ? 1 : 0, aC = aE.lK - 1; 0 <= aC; aC--) this.iM[aC + lF] = lJ;
		for (aC = 0; aC < lF; aC++) this.iM[aC] = 6;
		var fc = aE.fZ;
		for (aC = 0; aC < fc; aC++) this.iM[aC] <= 2 ? (l6[aC] = 5, l7[aC] = l8[aC] = 1040, 0 === this.iM[aC] ? (l4[aC] = 980, l5[aC] = 980) : 1 === this.iM[aC] ? (l4[aC] = 980, l5[aC] = 920, l7[aC] = l8[aC] = 1100) : (l4[aC] = 825, l5[aC] =
			750)) : this.iM[aC] <= 4 ? (l6[aC] = 1 + az.kF(20), 3 === this.iM[aC] ? (l4[aC] = l5[aC] = 500, l7[aC] = l8[aC] = 1e3) : (l8[aC] = 250 + az.kF(1501), l7[aC] = 500 + az.kF(501), l4[aC] = 300 + az.kF(201), l5[aC] = 100 + az.kF(
			201))) : this.iM[aC] <= 5 ? (l7[aC] = 1e3, l8[aC] = 1e3, l6[aC] = 35 + az.kF(16), l4[aC] = 300 + az.kF(201), l5[aC] = 50 + az.kF(101)) : (l7[aC] = l8[aC] = 800, l6[aC] = 5, l4[aC] = 10, l5[aC] = 250), lN(aC)
	}, this.lH = function() {
		for (var fG = b0.lO, lF = aE.ky, aC = fG - 1; 0 <= aC; aC--) this.iM[aC + lF] = 0;
		for (var fw = 0; fw < 6; fw++) {
			for (aC = fG + b0.lP[fw] - 1; fG <= aC; aC--) this.iM[aC + lF] = fw;
			fG += b0.lP[fw]
		}
	}, this.kk = function(hA, value) {
		l3[hA] = Math.min(value, l3[hA])
	}, this.eh = function(hA) {
		0 == --l3[hA] && ! function(hA) {
			(function(hA) {
				l7[hA] !== l8[hA] && (l7[hA] += l7[hA] < l8[hA] ? 3 : -3);
				l4[hA] !== l5[hA] && (l4[hA] += l4[hA] < l5[hA] ? l6[hA] : -l6[hA], l4[hA] = (Math.abs(l4[hA] - l5[hA]) <= l6[hA] ? l5 : l4)[hA]);
				l3[hA] = bO.g3(l7[hA], 10)
			})(hA), ap.jl.kb(hA, bO.g3(l4[hA] * ah.he[hA], 1e3))
		}(hA)
	}, this.lS = function(hA, h5) {
		l7[hA] = l8[hA] = h5
	}
}

function jh() {
	var lT = new Uint16Array(aE.fZ);

	function li(player, lg) {
		for (var fc = bR.g7[0], gF = bR.gF, lu = -1, lv = aE.fZ, aC = 0; aC < fc; aC++) {
			var fs, hA = gF[aC];
			bw.fV(player, hA) && (fs = bP.j9(lg, bP.jV(hA)), -1 === lu || fs < lu) && (lu = fs, lv = hA)
		}
		return lv
	}

	function lk(lh, lg) {
		if (lh === aE.fZ) return 0;
		var hJ = ah.hJ[lh],
			lt = hJ.length;
		if (0 === lt) return 0;
		for (var fc = Math.min(lt, 10), lv = 0, lu = bP.j9(hJ[lv] >> 2, lg), aC = 0; aC < fc; aC++) {
			var iV = az.kF(lt),
				fs = bP.j9(hJ[iV] >> 2, lg);
			fs < lu && (lu = fs, lv = iV)
		}
		return hJ[lv] >> 2
	}

	function lp(player, lg, k7, lx) {
		var ly;
		(lx === aE.fZ || (ly = bP.jV(k7), lx = bP.jV(lx), bP.j9(lg, ly) < bP.j9(lg, lx))) && (lT[player] = k7)
	}
	this.dm = function() {
		lT.fill(aE.fZ)
	}, this.jt = function() {
		if (bi.kv() % 109 == 9 && !(am.lU < 20) && aE.iX && !(bk.lV() < bO.g3(8 * aE.ki, 10))) {
			var lW = bk.lX();
			if (bj.lL[lW]) {
				bk.lY(lW);
				var fc = bR.g7[0];
				if (0 !== fc)
					for (var h = bR.gG, lZ = am.lZ, lU = am.lU, la = lT, iV = az.kF(fc), aC = 0; aC < lU; aC++) {
						var i5 = lZ[aC],
							lb = h[iV];
						bD.gy.lc(i5, lb) && 512 === la[i5] && (la[i5] = lb, iV = (iV + 1) % fc)
					}
			}
		}
	}, this.eh = function(player) {
		var lg, lj, lh, ld = function(player) {
			var k7 = lT[player];
			if (k7 !== aE.fZ) {
				if (bD.gy.lw(k7) && ah.hJ[k7]) return k7;
				lT[player] = aE.fZ
			}
			return aE.fZ
		}(player);
		return function(player) {
			for (var ls = am.lZ, lt = am.lU, fc = Math.min(lt, lt < 17 && 5 === az.kF(20) ? 1 : 16), hB = az.kF(lt), gF = bR.gF, hJ = ah.hJ, h5 = 0, aC = 0; aC < fc; aC++) {
				var hA = ls[(aC + hB) % lt];
				hA !== player && hJ[hA].length && (gF[h5++] = hA)
			}
			bR.g7[0] = h5
		}(player), 0 !== bR.g7[0] && (0 < (lj = lk(lh = li(player, lg = bP.ja(player)), lg)) && bQ.ll.lm(player, bQ.ln.lo(lj, lg)) ? (lp(player, lg, lh, ld), !0) : 0 < (lh = function(player, lg) {
			for (var fc = bR.g7[0], gF = bR.gF, la = lT, hB = 0, aC = 0; aC < fc; aC++) {
				var hA = gF[aC],
					hA = la[hA];
				hA !== aE.fZ && bD.gy.lw(hA) && player !== hA && bw.fV(player, hA) && (gF[hB++] = hA)
			}
			return 0 !== (bR.g7[0] = hB) ? lk(li(player, lg), lg) : 0
		}(player, lg)) && bQ.ll.lm(player, bQ.ln.lo(lh, lg)) ? (lp(player, lg, ad.fU(lh << 2), ld), !0) : !!(0 < (lj = lk(ld, lg)) && bQ.ll.lm(player, bQ.ln.lo(lj, lg))))
	}
}

function jo() {
	function m2(player) {
		for (var g1 = ah.g1[player], fc = g1.length, g2 = Math.max(bO.g3(fc, 12), 1), fe = ad.fe, eK = az.kF(fc), aC = 0; aC < fc; aC += g2)
			for (var fR = g1[(aC + eK) % fc], ff = 3; 0 <= ff; ff--) {
				var fg = fR + fe[ff];
				if (ad.fh(fg)) return {
					fG: fg,
					id: ad.fK(fg),
					hA: player
				}
			}
		return null
	}

	function m7(player, m9) {
		var iM = bD.gy.mA(player, aF.lD[aF.iM[player]]);
		ah.h4[player].push(m9.fG), ae.el(player, iM, m9.hA), aG.k5(player, !0)
	}
	this.eh = function(player) {
		return !!bV.fH(bV.fI) && !!aE.data.passableMountains && 0 !== ah.g1[player].length && function(player) {
			var m1 = m2(player);
			if (null === m1) return !1;
			! function(player) {
				for (var lZ = am.lZ, lU = am.lU, fc = Math.min(lU, 12), hB = az.kF(lU), gF = bR.gF, g1 = ah.g1, h5 = 0, aC = 0; aC < fc; aC++) {
					var hA = lZ[(aC + hB) % lU];
					hA !== player && g1[hA].length && bw.fV(player, hA) && (gF[h5++] = hA)
				}
				bR.g7[0] = h5
			}(player);
			var m4 = function(fJ) {
				for (var fc = bR.g7[0], gF = bR.gF, aC = 0; aC < fc; aC++) {
					var m9 = m2(gF[aC]);
					if (null !== m9 && m9.id === fJ) return m9
				}
				return null
			}(m1.id);
			return null !== m4 ? (m7(player, m4), !0) : function(player, fJ) {
				var fc = ap.jc.m8;
				if (0 !== fc)
					for (var fG = ap.jc.buffer[az.kF(fc)] << 2, fe = ad.fe, ff = az.kF(4);;) {
						if (fG += fe[ff], ad.fh(fG)) {
							if (ad.fK(fG) === fJ) return m7(player, {
								fG: fG,
								hA: aE.fZ
							}), !0;
							break
						}
						if (!ad.fT(fG)) break
					}
				return !1
			}(player, m1.id)
		}(player)
	}
}

function jf() {
	this.eh = function(player) {
		return bQ.ll.lm(player, function(player) {
			var fc = ap.jc.m8;
			if (0 === fc) return -1;
			for (var lt = Math.min(fc, ap.performance.mC ? fc : 10), buffer = ap.jc.buffer, kE = bO.g3(az.random() * fc, az.value(100)), e = kE + lt, mD = az.jb(ah.jW[player], ah.jX[player]), mE = az.jb(ah.jY[player], ah.jZ[player]),
					lv = -1, fs = bP.jA(0, 0, bV.fn, bV.fo), aC = kE; aC < e; aC++) {
				var hB = aC % fc,
					mF = bP.fu(mD, mE, buffer[hB]);
				mF < fs && (fs = mF, lv = hB)
			}
			return -1 !== lv ? function(fO, mD, mE) {
				var hs = bP.fk(fO),
					hu = bP.fm(fO),
					j0 = mD - hs,
					j3 = mE - hu;
				Math.abs(j0) >= Math.abs(j3) ? (j3 = 0, j0 = Math.sign(j0)) : (j0 = 0, j3 = Math.sign(j3));
				j0 === j3 && (j0 = 1);
				for (;;) {
					if (hs += j0, hu += j3, !bP.fy(hs, hu)) break;
					if (fO = bP.fz(hs, hu), ad.iu(bP.fS(fO))) return fO
				}
				return -1
			}(buffer[lv], mD, mE) : -1
		}(player))
	}
}

function jq() {
	this.eh = function(player) {
		var mH = function(player) {
			for (var mK = bQ.mK.mM(), fc = mK.length, lt = Math.min(fc, 32), iV = az.kF(fc), aC = 0; aC < lt; aC++) {
				var mH = (aC + iV) % fc,
					mJ = mK[mH],
					j7 = mJ[0],
					j8 = mJ[mJ.length - 1];
				if (bQ.ln.mN(player, j7) && bQ.ln.mO(player, j8)) return mH;
				if (bQ.ln.mN(player, j8) && bQ.ln.mO(player, j7)) return 0 <= (mH = bQ.mK.mP(j8, j7)) ? mH : bQ.mK.mQ() ? -1 : bQ.mK.mR(bQ.mK.mS(mJ))
			}
			return -1
		}(player);
		return -1 !== mH && (mH = bQ.mK.get(mH), !bQ.ln.mL(player, mH)) && (bR.h[0] = mH, !0)
	}
}

function ji() {
	this.mC = 0, this.dm = function() {
		this.mC = 0
	}, this.eh = function() {
		if (!this.mC && bi.kv() % 30 == 7 && bD.gy.mV(90) && (ap.performance.mC = 1)) {
			if (aE.iX) {
				var lW = bk.lX();
				if (bj.lL[lW]) {
					bk.kz(lW);
					var h = bR.gG,
						fc = bR.g7[0];
					if (0 !== fc)
						for (var mY = Math.min(100 + 10 * (fc - 1), 400), aC = 0; aC < fc; aC++) aF.lS(h[aC], mY)
				}
			}
			aF.lS(mZ[0], 100)
		}
	}
}

function jd() {
	var ma = 0,
		mb = 0,
		mc = 300,
		md = 300,
		me = 0;
	this.m8 = 0, this.buffer = new Uint32Array(512), this.dm = function() {
		mb = ma = 0, this.m8 = 0, me = 0
	}, this.eh = function() {
		if (function() {
				var fc = ap.jc.m8;
				if (0 === fc) return 1;
				var buffer = ap.jc.buffer;
				if (bi.kv() % 35 == 6) {
					for (var aC = fc - 1; 0 <= aC; aC--) ad.fT(buffer[aC] << 2) || (fc--, buffer[aC] = buffer[fc]);
					ap.jc.m8 = fc
				}
				return fc < buffer.length
			}())
			if (mc <= ma) {
				var mi = ap.jc.m8;
				if (mi) {
					if (bi.kv() % 350 != 1) return;
					if (me !== mi) return void(me = mi);
					if (!bD.gy.kL(mZ[0])) return
				} else if (bi.kv() % 12 != 8) return;
				bD.gy.mj() || ap.jc.dm()
			} else {
				var aC, j = bV.fn,
					mk = j - 2,
					mi = mk * (bV.fo - 2),
					ml = mc,
					buffer = ap.jc.buffer,
					lt = ap.jc.m8,
					mm = buffer.length,
					hB = Math.min(mb + ml * ((1 + 19 * ap.performance.mC) * md), mi);
				for (aC = mb; aC < hB; aC += ml) {
					var fG = 4 * (aC % mk + (bO.g3(aC, mk) + 1) * j + 1);
					if (ad.fT(fG) && (buffer[lt] = fG >> 2, ++lt === mm)) {
						aC += ml;
						break
					}
				}(mb = aC) >= mi && (mb = ++ma), ap.jc.m8 = lt
			}
	}
}

function js() {
	this.eh = function() {
		if (bi.kv() % 51 == 45)
			for (var fc = bQ.z.mo, mp = bQ.z.mp, mq = bQ.z.mq, mr = bQ.z.mr, ms = bQ.z.ms, lE = aF.lE, iM = aF.iM, aC = 0; aC < fc; aC++) {
				var mJ, player, mw, mt = mp[aC];
				mt % 64 == 6 || (mJ = mq[aC], (player = bQ.ln.mu(mJ[mJ.length - 1])) < 0) || !bD.gy.lc(player, ms[aC] >> 3) || az.kF(1e3) >= lE[iM[player]] || ! function(n0, mJ) {
					for (var fc = mJ.length - 1, n1 = bQ.z.n2[n0], fs = 0, aC = n1 + 1; aC < fc; aC++) fs += bP.j6(mJ[aC], mJ[aC + 1]);
					return (fs += bP.j6(bP.jO(bQ.z.n3[n0]), mJ[n1 + 1])) <= 60
				}(aC, mJ) || (mw = mr[aC], 64 <= mt && bQ.mx.my(player, mw)) || function(player, mJ, mw, n0, mt) {
					bQ.n4.n5(player) && bD.gy.n6(player, aF.lA[aF.iM[player]], 32, 0) && (bQ.z.mp[n0] = 64 + mt % 64, bQ.mx.el(mw, bQ.z.n7), bR.h[0] = bQ.mK.mS(mJ), bR.gE[1] = 6, bD.gy.n8(player), bQ.z.n9(player))
				}(player, mJ, mw, aC, mt)
			}
	}
}

function nA() {
	bU.nB.nC(), aO.eh(), ag.eh(), aX.nD(), b1.z.eh()
}

function nE() {
	b2.eh(), aH.eh(), ao.eh(), af.eh(), b5.eh(), aG.eh(), ap.eh(), bQ.z.eh(), am.nF(), aW.eh(), b0.eh(), bY.eh(), ag.eh(), ag.nG(), aX.eh(), bS.eh(), aV.eh(), aQ.eh(), b9.nH(), aO.eh(), b6.eh(), aS.eh(), ax.eh(), bg.eh(), bk.eh(), b1.z.eh(), b1.nI
		.eh(), u.eh(), bX.eV.eh(), bC.eh(), bi.eh()
}

function nJ() {
	aI.eh(), aY.eh(), aR.eh(), aw.eh(), bF.eh(), b8.eh(), b9.eh(), ay.nK()
}

function nL() {
	aW.nM(!1), aQ.nM(), aX.nM(!1), aV.nM(), aS.nM(), ax.nM(), ag.nM(!1), bk.nN()
}

function nO() {
	ag.nM(!1) && (bi.du = !0), b1.z.eh()
}

function cB() {
	var nP, nQ, nR;

	function nT(nV) {
		for (var aC = nP - 1; 0 <= aC; aC--) 0 === nR[nQ[aC]] && ah.hQ[nQ[aC]] >= nV && gg(nQ[aC])
	}

	function nS(player) {
		var ed;
		64 === nR[player] ? nR[player] = 6 : (ed = ah.hQ[player], nR[player] = ed < 1e3 ? 3 : ed < 1e4 ? 2 : ed < 6e4 ? 1 : 0)
	}
	this.dm = function() {
		nP = 0, nQ = new Uint16Array(aE.fZ), nR = new Uint8Array(aE.fZ)
	}, this.eh = function() {
		for (var aC = nP - 1; 0 <= aC; aC--) 64 === nR[nQ[aC]] ? nS(nQ[aC]) : 0 == nR[nQ[aC]]-- && (nS(nQ[aC]), gg(nQ[aC]));
		16e4 <= ah.hQ[mZ[0]] && (nT(16e4), 3e5 <= ah.hQ[mZ[0]]) && nT(3e5), bD.gy.lw(aE.fM) && (bg.nW[7] = Math.max(ah.hQ[aE.fM], bg.nW[7]))
	}, this.h0 = function(player) {
		for (var fv, aC = nP - 1; 0 <= aC; aC--)
			if (player === nQ[aC]) {
				for (nP--, fv = aC; fv < nP; fv++) nQ[fv] = nQ[fv + 1];
				return
			}
	}, this.k5 = function(player, nX) {
		for (var aC = nP - 1; 0 <= aC; aC--)
			if (player === nQ[aC]) return;
		nQ[nP++] = player, nR[player] = nX ? 2 : 64
	}
}

function cC() {
	var size, km;
	this.dm = function() {
		size = aE.lK, km = new Uint16Array(aE.fZ);
		for (var ky = aE.ky, aC = aE.lK - 1; 0 <= aC; aC--) km[aC] = ky + aC
	}, this.eh = function() {
		ap.jr.eh();
		for (var aC = size - 1; 0 <= aC; aC--)
			if (0 === ah.na[km[aC]]) {
				fv = void 0;
				var fv = aC;
				size--, km[fv] = km[size]
			} else aF.eh(km[aC])
	}, this.nZ = function(hA) {
		km[size++] = hA
	}
}

function cD() {
	var nc, nd, ne, nf, ng, nh, ni, nj, nk, nl, nm, nn, no, np = !1,
		nq = !1;

	function nr(ns) {
		nn = bi.ec, ne = nf = nd = 0, ng = (no = 33) / ns, nc = 1 / (ns / no / 4), nh = (i.j / 2 + jH) / ir, ni = (i.k / 2 + jI) / ir, nj = ir
	}

	function nz(aC) {
		var o1; - 1 !== aC && (aC = bP.jO(bQ.z.n3[aC]), o1 = bP.fk(aC) - 15, aC = bP.fm(aC) - 15, aI.nv(o1, aC, 29 + o1, 29 + aC))
	}

	function oC(eP) {
		Math.abs(Math.log(nm / nj)) < .125 && (nm = eP * nj)
	}

	function oB(o1, o2, oE, oF) {
		nk = (o1 + oE + 1) / 2, nl = (o2 + oF + 1) / 2;
		oE = i.j / (oE - o1 + 1), o1 = i.k / (oF - o2 + 1);
		nm = .9 * (oE < o1 ? oE : o1)
	}
	this.nt = function() {
		return np
	}, this.nu = function() {
		nr(1), this.nv(0, 0, bV.fn - 1, bV.fo - 1), aE.i1 || aE.hl || aE.hm || this.nw(aE.fM, 3e3, !0, .3)
	}, this.nx = function(player, ny) {
		nz(bQ.ln.o0(player, ny))
	}, this.nw = function(player, ns, o3, zoom) {
		aE.o4 || np && !o3 && nq || (0 === ah.hQ[player] ? nz(bQ.ln.o5(player)) : (aT.o6 = !1, nq = o3, nr(ns), function(player) {
			nk = (ah.jW[player] + ah.jX[player] + 1) / 2, nl = (ah.jY[player] + ah.jZ[player] + 1) / 2
		}(player), function(zoom, player) {
			var j0 = ah.jX[player] - ah.jW[player] + 1,
				player = ah.jZ[player] - ah.jY[player] + 1,
				fv = i.j / j0,
				fw = i.k / player,
				fv = (nm = fv < fw ? fv : fw, 0 !== zoom ? zoom : j0 < 20 && player < 20 ? .5 : .9);
			nm *= fv, oC(7 / 8)
		}(zoom, player), np = !0, at.o9()))
	}, this.oA = function(ns) {
		aE.hl || aE.o4 || (aT.o6 = !1, nq = !1, nr(ns), oB(0, 0, bV.fn - 1, bV.fo - 1), oC(7 / 8), np = !0, at.o9())
	}, this.nv = function(o1, o2, oE, oF) {
		np = !1, oB(o1, o2, oE, oF), ir = nm, aT.oG(nk, i.j / 2), aT.oH(nl, i.k / 2), bd.oI(), bi.du = !0
	}, this.oJ = function() {
		return !(np && nq || (np = !1))
	}, this.eh = function() {
		var oM, oN, ff, oQ;
		np && (nd < .5 ? nf < ng && (nf += ng * nc, ne = nd) : 1 - ne < nd && (nf = (nf -= ng * nc) < ng * nc ? ng * nc : nf), nn = nn >= bi.ec ? bi.ec - 1 : nn, ff = bi.ec - nn, nd = 1e3 < ff || 1 < (nd += nf * ff / no) ? 1 : nd, nn = bi.ec,
			ff = ir, oM = jH, oN = jI, ff = (ir = nj * Math.pow(nm / nj, nd)) / ff, oQ = 1 - (nj * Math.pow(nm / nj, 1 - nd) - nj) / (nm - nj), aT.oG(nh + oQ * (nk - nh), i.j / 2), aT.oH(ni + oQ * (nl - ni), i.k / 2), ag.zoom(ff, (oM * ff -
				jH) / (1 - ff), (oN * ff - jI) / (1 - ff)), bd.oI(), 1 <= nd && (np = !1, be.oR = !0), bi.du = !0)
	}
}

function dk(oS) {
	this.oT = -1, this.pow = -1;
	var oU = oS || {},
		oV = this,
		oW = null,
		oX = null,
		oY = null,
		oZ = null,
		oa = null,
		ob = [],
		oc = 0,
		od = null,
		oe = null,
		og = null,
		oh = !1,
		oi = null,
		ol = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255;

	function om(on, oo, className) {
		on = document.createElement(on);
		return className && (on.className = className), oo && oo.appendChild(on), on
	}

	function oq(eo, oo, action) {
		oo = om("button", oo);
		return oo.type = "button", oo.textContent = eo, oo.addEventListener("click", action), oo
	}

	function or(oo) {
		oo = om("canvas", oo);
		return oo.width = oo.height = 128, oo
	}

	function oy(canvas, oz) {
		for (var canvas = canvas.getContext("2d"), data = (oe || (oe = canvas.createImageData(128, 128), og = new Uint32Array(oe.data.buffer)), oz), ot = og, ou = 0, position = 0, color = 0; position < 16384; ou += 6, color ^= 1) {
			for (var eL = ou >> 3, oJ = position + ((data[eL] << 8 | data[1 + eL]) >> 10 - (7 & ou) & 63), ox = color ? ol : 4294967295, aC = position; aC < oJ; aC++) ot[aC] = ox;
			position = oJ
		}
		canvas.putImageData(oe, 0, 0)
	}

	function p1() {
		if (oW) {
			oW.setAttribute("aria-busy", String(oh)), oa.disabled = oh, oZ.disabled = oh || !oc;
			for (var aC = 0; aC < ob.length; aC++) ob[aC].disabled = oh, ob[aC].setAttribute("aria-pressed", String(Boolean(oc & 1 << aC)))
		}
	}

	function p3(event) {
		var p5, p4;
		"Escape" === event.key && (event.preventDefault(), oV.close()), "Tab" === event.key && oW && (p5 = (p4 = oW.querySelectorAll("button:not(:disabled)"))[0], p4 = p4[p4.length - 1], event.shiftKey && document.activeElement === p5 ? (event
			.preventDefault(), p4.focus()) : event.shiftKey || document.activeElement !== p4 || (event.preventDefault(), p5.focus()))
	}

	function p7() {
		oi = document.activeElement, (oW = om("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), oW.setAttribute("aria-modal", "true"), oW.setAttribute("aria-label", "Select all images matching the reference");
		om("style", oW).textContent =
			".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
		var p8 = om("div", oW, "captcha-reference-row");
		om("span", p8, "captcha-reference-label").textContent = "Find All:", (oY = or(p8)).className = "captcha-reference", oY.setAttribute("aria-label", "Reference image"), oX = om("div", oW, "captcha-grid");
		for (var aC = 0; aC < 16; aC++) ob.push(function(eL) {
			var button = oq("", oX, function() {
				oh || (oc ^= 1 << eL, p1())
			});
			return button.className = "captcha-tile", button.setAttribute("aria-label", "Select image " + (eL + 1)), button.setAttribute("aria-pressed", "false"), or(button).setAttribute("aria-hidden", "true"), button
		}(aC));
		var p8 = om("div", oW, "captcha-actions"),
			pB = oq("Close", p8, function() {
				oV.close()
			});
		oa = oq("Reload", p8, pC), oZ = oq("Verify", p8, pD), oW.addEventListener("keydown", p3), oV.resize(), p1(), pB.focus()
	}

	function pC() {
		oh || (oV.close(), b1.ej.pE(0, 0, bx.oT, bx.pow))
	}

	function pD() {
		var pF, pG;
		!oh && oc && (pF = oc, pG = od, oV.close(), b1.ej.pE(pF, pG, bx.oT, bx.pow))
	}
	this.show = function(pH, pG, oT, pow) {
		this.oT = oT, this.pow = pow, od = pG, oW || p7(), oy(oY, pH[0]);
		for (var iV = 0; iV < 16; iV++) oy(ob[iV].firstChild, pH[iV + 1]);
		oc = 0, oh = !1, p1(), "function" == typeof oU.pI && oU.pI()
	}, this.resize = function() {
		var size;
		oW && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), oW.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (oW) {
			for (var pJ = oW.querySelectorAll("canvas"), aC = 0; aC < pJ.length; aC++) pJ[aC].width = pJ[aC].height = 0;
			oW.remove(), oW = oX = oY = oZ = oa = null, oe = og = od = null, oc = 0, oh = !(ob = []), oi && document.body.contains(oi) && oi.focus(), oi = null, "function" == typeof oU.pK && oU.pK()
		}
	}
}

function c5() {
	var em = bD.color;
	this.pL = em.pM(0, 0, 0), this.pN = em.pO(0, 0, 0, .7), this.pP = em.pO(0, 0, 0, .5), this.pQ = em.pO(0, 0, 0, .85), this.pR = em.pO(0, 0, 0, .75), this.pS = em.pO(0, 0, 0, .6), this.pT = em.pO(0, 0, 0, .35), this.pU = em.pM(255, 255, 255), this
		.pV = em.pO(255, 255, 255, .3), this.pW = em.pO(255, 255, 255, .6), this.pX = em.pO(255, 255, 255, .4), this.pY = em.pO(255, 255, 255, .25), this.pZ = em.pO(255, 255, 255, .85), this.pa = em.pO(255, 255, 255, .75), this.pb = em.pO(255, 255,
			255, .15), this.pc = em.pO(255, 255, 255, .11), this.pd = em.pM(128, 128, 128), this.pe = em.pO(64, 64, 64, .75), this.pf = em.pO(88, 88, 88, .83), this.pg = em.pO(60, 60, 60, .85), this.ph = em.pO(80, 60, 60, .85), this.pi = em.pM(170,
			170, 170), this.pj = em.pM(200, 235, 245), this.pk = em.pM(30, 255, 30), this.pl = em.pM(0, 200, 0), this.pm = em.pM(128, 255, 128), this.pn = em.pO(10, 65, 10, .75), this.po = em.pO(0, 255, 0, .6), this.pp = em.pO(0, 255, 0, .5), this
		.pq = em.pO(0, 200, 0, .5), this.pr = em.pO(0, 100, 0, .75), this.ps = em.pO(0, 60, 0, .8), this.pt = em.pO(0, 255, 0, .3), this.pu = em.pO(0, 180, 0, .6), this.pv = em.pO(0, 120, 0, .85), this.pw = em.pM(0, 120, 0), this.px = em.pO(0, 70, 0,
			.85), this.py = em.pM(190, 230, 190), this.pz = em.pM(0, 255, 0), this.q0 = em.pO(10, 120, 10, .9), this.q1 = em.pM(200, 255, 200), this.q2 = em.pM(255, 120, 120), this.q3 = em.pM(255, 160, 160), this.q4 = em.pM(255, 70, 70), this.q5 = em
		.pM(230, 0, 0), this.q6 = em.pO(220, 0, 0, .6), this.q7 = em.pO(255, 100, 100, .8), this.q8 = em.pO(100, 0, 0, .85), this.q9 = em.pO(60, 0, 0, .85), this.qA = em.pO(200, 0, 0, .6), this.qB = em.pO(120, 0, 0, .85), this.qC = em.pM(255, 70,
		10), this.qD = em.pM(230, 190, 190), this.qE = em.pM(255, 0, 0), this.qF = em.pM(255, 0, 255), this.qG = em.pO(60, 0, 60, .85), this.qH = em.pO(0, 60, 60, .85), this.qI = em.pO(10, 60, 60, .9), this.qJ = em.pO(0, 96, 96, .75), this.qK = em
		.pM(0, 255, 255), this.qL = em.pM(160, 160, 255), this.qM = em.pO(0, 40, 90, .75), this.qN = em.pO(0, 0, 255, .6), this.qO = em.pM(200, 200, 255), this.qP = em.pO(50, 50, 255, .83), this.qQ = em.pO(20, 90, 150, .75), this.qR = em.pO(10, 10,
			120, .75), this.qS = em.pO(10, 60, 160, .9), this.qT = em.pM(200, 220, 255), this.qU = em.pO(0, 120, 255, .35), this.qV = em.pM(70, 150, 255), this.qW = em.pM(255, 120, 100), this.qX = em.pO(255, 255, 0, .5), this.qY = em.pO(255, 255,
			150, .2), this.qZ = em.pM(255, 255, 0), this.qa = em.pM(255, 255, 200), this.qb = em.pO(200, 200, 0, .6), this.qc = em.pO(140, 120, 0, .75), this.qd = em.pO(180, 160, 40, .75), this.qe = em.pO(70, 50, 20, .85), this.qf = em.pO(30, 30, 0,
			.85), this.qg = em.pO(60, 60, 0, .85), this.qh = em.pM(255, 255, 100), this.qi = em.pM(255, 255, 140), this.qj = em.pO(255, 140, 0, .75), this.qk = em.pO(70, 40, 0, .85), this.ql = em.pM(255, 150, 0), this.qm = em.pO(255, 200, 80, .85),
		this.qn = em.pO(0, 0, 0, 0), this.qo = em.pO(255, 255, 255, 0), this.qp = em.pO(254, 254, 254, 0)
}

function d5() {
	this.i3 = new qq, this.gy = new qr, this.qs = new qt, this.qu = new qv, this.l0 = new qw
}

function qq() {
	this.qx = 1, this.i4 = function(fO) {
		aE.hm || (aE.lI ? bB.qs.i4(aE.fM, fO) : b1.qy.qz(fO))
	}, this.iA = function(jG, k7) {
		aE.hm || (this.qx && (this.qx = 0, bm.r0.r1(182, jG)), aE.lI ? bB.qs.iA(aE.fM, jG, k7) : b1.qy.r2(jG, k7))
	}, this.r3 = function(jG, r4) {
		aE.hm || (aE.lI ? bB.qs.r5(aE.fM, jG, r4) : b1.qy.r6(jG, r4))
	}, this.iF = function(jG, fO) {
		aE.hm || (fO = (fO << 3) + bR.gE[6], aE.lI ? bB.qs.iF(aE.fM, jG, fO) : bQ.n4.n5(aE.fM) && b1.qy.r8(jG, fO))
	}, this.iI = function(jG) {
		var ny;
		aE.hm || (849 === jG && (jG = 850), ny = bR.gE[3], aE.lI ? bB.qs.iI(aE.fM, jG, ny) : bQ.iG.r9(aE.fM, ny) && b1.qy.rA(jG, ny))
	}, this.rB = function(ny) {
		aE.hm || (aE.lI ? bB.qs.rB(aE.fM, ny) : b1.qy.rA(849, ny))
	}, this.rC = function(k7) {
		aE.hm || (aE.lI ? bB.qs.rC(aE.fM, k7) : b1.qy.rD(k7))
	}, this.rE = function(rF) {
		aE.hm || (aE.lI ? bB.qs.rG(aE.fM, rF) : b1.qy.rH(rF))
	}, this.iR = function(rI) {
		aE.hm || (aE.lI ? bB.qs.iR(aE.fM, rI) : b1.qy.rJ(rI))
	}, this.rK = function() {
		aE.hm || (aE.lI ? bB.qs.rK(aE.fM) : b1.qy.rL())
	}, this.iO = function() {
		aE.hm || (aE.lI ? bB.qs.iO(aE.fM) : b1.qy.rD(513))
	}, this.i6 = function(jG, fO, k7) {
		aE.hm || (aE.lI ? bB.qs.i6(aE.fM, jG, fO, k7) : b1.qy.rM(jG, fO, k7))
	}
}

function qw() {
	this.l1 = function(player, r4, iM) {
		bD.gy.rN(player, iM, r4) && (af.r3(player, r4), !bD.gy.kL(r4)) && ap.jl.ka[r4] && ap.jl.ka[r4]--
	}, this.rO = function(player, r4, iM) {
		bD.gy.rP(iM, r4) ? ao.el(r4, bR.g9[0]) && (bu.rQ(player, r4, bR.g9[0], 1), bD.gy.h1(r4, bR.g9[0]), bg.rR(player, r4), ag.rS(r4, bR.g9[0])) : bg.h2(player, iM, 12)
	}
}

function qr() {
	this.rT = function(rF, player) {
		aE.hm || (aO.rE(aE.fM, player, rF), b1.qy.rU(rF, player))
	}, this.rV = function(player) {
		aE.hm || (aO.rW(player, 0), b1.qy.rX(player))
	}, this.rY = function(rZ, player) {
		aE.hm || (aO.ra(rZ, player), b1.qy.rb(rZ, player))
	}, this.rc = function() {
		aE.lI || aE.hl || aE.hm || b1.rd.rc()
	}
}

function qv() {
	this.eh = function(aD) {
		var id, gL, oJ;
		for (bK.dm(aD), bK.eL += 2, oJ = 8 * bK.size; bK.eL + 8 <= oJ;) id = bK.re(4), gL = bK.re(9), 0 === id ? this.rf(id, gL, bK.re(22)) : 1 === id ? this.rf(id, gL, bK.re(10), bK.re(10)) : 2 === id ? this.rf(id, gL, bK.re(10), bK.re(9)) :
			3 === id ? this.rf(id, gL, bK.re(10), bK.re(27)) : 4 === id ? this.rf(id, gL, bK.re(10), bK.re(16)) : 5 === id || 6 === id ? this.rf(id, gL, bK.re(10)) : 7 === id ? this.rf(id, gL, bK.re(1)) : 10 === id ? this.rf(id, gL, bK.re(20), bK
				.re(22)) : this.rf(id, gL)
	}, this.rg = [], this.rh = function() {
		for (var rj = 0, rk = 0, rl = 0, rm = 0, rn = 0, ro = 0, aC = 0; aC < 512; aC++) rj += ah.na[aC], rk += ah.hQ[aC], rl += ah.he[aC], rm += bQ.z.l2[aC];
		rn += bQ.z.mo, ro += am.lU, this.rg.push(rl % 1073741824 * 4 + (rj + rk + rm + rn + ro) % 4)
	}, this.rf = function(id, gL, gN, gP) {
		0 === id ? bB.qs.i4(gL, gN) : 1 === id ? bB.qs.iA(gL, gN, gP) : 2 === id ? bB.qs.r5(gL, gN, gP) : 3 === id ? bB.qs.iF(gL, gN, gP) : 4 === id ? bB.qs.iI(gL, gN, gP) : 5 === id ? bB.qs.rC(gL, gN) : 6 === id ? bB.qs.rG(gL, gN) : 7 === id ?
			bB.qs.iR(gL, gN) : 8 === id ? bB.qs.rK(gL) : 9 === id ? bB.qs.rp(gL) : 10 === id && bB.qs.i6(gL, gN >> 10, gP, gN % 1024)
	}
}

function qt() {
	this.i4 = function(player, fO) {
		bD.gy.ho(0) && bD.gy.hp(player) && bP.jL(fO) && (bC.rq.rr(0, player, fO), aE.rs.el(player, fO))
	}, this.iA = function(player, jG, k7) {
		bD.gy.ho(1) && bD.gy.hp(player) && bD.gy.rt(player, k7) && bD.gy.n6(player, jG, 12, 0) && bD.gy.ru(player, k7) && ((k7 = ae.kJ(player, bR.fY[0])) || ae.kc(player)) && (ah.rv[player]++, bC.rq.rr(1, player, jG, bR.fY[0]), ap.jj.jx(player,
			k7)) && (bD.gy.n8(player), bg.rw(player, jG), ap.jj.k3(player))
	}, this.r5 = function(player, jG, r4) {
		bD.gy.ho(1) && bD.gy.hp(player) && aE.iX && bD.gy.rt(player, r4) && bD.gy.rx(player, r4) && bD.gy.rN(player, bD.gy.jF(player, jG), r4) && ao.el(r4, bR.g9[0]) && (bC.rq.rr(2, player, jG, r4), af.r3(player, r4))
	}, this.iF = function(player, jG, r7) {
		bR.gE[1] = 7 & r7;
		var fO = r7 >> 3;
		bD.gy.ho(1) && bD.gy.hp(player) && bP.jL(fO) && bQ.n4.n5(player) && bQ.n4.ry(fO) && bD.gy.n6(player, jG, 32, 0) && bQ.ll.rz(player, fO, 1) && (bg.s0(player), bC.rq.rr(3, player, jG, r7), bD.gy.n8(player), bo.s1.iF(player), bQ.z.n9(
			player))
	}, this.iI = function(player, jG, ny) {
		849 === jG ? this.rB(player, ny) : bD.gy.ho(1) && bD.gy.hp(player) && bD.gy.n6(player, jG, 32, 0) && bQ.iG.s2(player, ny) && (bg.s0(player), bC.rq.rr(4, player, jG, ny), bD.gy.n8(player), bo.s1.iI(player), bQ.z.n9(player))
	}, this.rB = function(player, ny) {
		bD.gy.ho(1) && bD.gy.hp(player) && bQ.s3.eh(player, ny) && bC.rq.rr(4, player, 849, ny)
	}, this.rC = function(player, k7) {
		513 === k7 ? this.iO(player) : bD.gy.ho(1) && bD.gy.hp(player) && (k7 = Math.min(k7, aE.fZ), ae.kJ(player, k7)) && (bC.rq.rr(5, player, k7), ae.s4(player, k7))
	}, this.rG = function(player, rF) {
		(bD.gy.ho(1) || bD.gy.ho(2)) && bD.gy.hp(player) && (rF = bO.io(rF, 0, 1023), bC.rq.rr(6, player, rF), ag.s5(player, 0, rF))
	}, this.iR = function(player, rI) {
		ax.iQ(player) && (bC.rq.rr(7, player, rI), ax.s6(player, rI))
	}, this.rK = function(player) {
		(bD.gy.ho(0) || bD.gy.ho(1)) && bD.gy.hp(player) && aN.s7(player) && (bC.rq.rr(8, player), bT.rK(player))
	}, this.rp = function(player) {
		bC.rq.rr(9, player), bT.rp(player)
	}, this.iO = function(player) {
		ax.iS(player) && (bC.rq.rr(5, player, 513), ax.iO(player))
	}, this.i6 = function(player, jG, fO, k7) {
		bD.gy.ho(1) && bD.gy.hp(player) && bD.gy.rt(player, k7) && bD.gy.ru(player, k7) && bP.jL(fO) && an.fD.fW(player, fO) && (ae.kJ(player, bR.fY[0]) || ae.kc(player)) && (bC.rq.rr(10, player, (jG << 10) + bR.fY[0], fO), k7 = bD.gy.mA(player,
			jG), ah.h4[player].push(bR.fd[0]), ae.el(player, k7, bR.fY[0]), aG.k5(player, !0), bg.s8(player))
	}
}

function s9(sA) {
	var k, sB = new sC,
		sD = document.createElement("div");

	function sL() {
		sD.style.opacity = "0", setTimeout(sN, sB.sJ)
	}

	function sN() {
		u.removeChild(document.body, sD), sB = sD = null
	}
	k = bD.sF.sG(sB.sH, .5), sD.textContent = sA, sD.style.position = "fixed", sD.style.zIndex = sB.zIndex, sD.style.left = "50%", sD.style.top = .5 * k + "px", sD.style.transform = "translateX(-50%)", sD.style.maxWidth = "90%", sD.style.boxSizing =
		"border-box", sD.style.padding = .3 * k + "px " + .6 * k + "px", sD.style.backgroundColor = bE.pQ, sD.style.color = bE.pU, sD.style.font = bD.sF.sI(0, .6 * k), sD.style.textAlign = "center", sD.style.userSelect = "none", sD.style
		.pointerEvents = "none", sD.style.transition = "opacity " + sB.sJ + "ms", bD.sF.sK(sD), document.body.appendChild(sD), setTimeout(sL, sB.sM)
}

function sC() {
	this.sM = 5e3, this.sJ = 600, this.zIndex = "1000", this.sH = .03
}

function sO() {
	var sQ;
	this.sP = [], this.sQ = document.createElement("div"), this.sR = function(sA, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = sA, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.sQ.appendChild(
			title), title
	}, this.sS = function(sA, marginBottom) {
		var sT = document.createElement("p");
		return sT.textContent = sA, sT.style.fontSize = "0.75em", sT.style.lineHeight = "1.2em", sT.style.marginBottom = marginBottom || "0", this.sQ.appendChild(sT), sT
	}, this.sU = function(sA) {
		var sV = document.createElement("p");
		return sV.textContent = sA, sV.style.fontSize = "1em", sV.style.marginBottom = "0", sV.style.whiteSpace = "pre-wrap", sV.style.overflowWrap = "break-word", this.sQ.appendChild(sV), sV
	}, this.sW = function(sX, fontSize) {
		var sQ = document.createElement("div");
		return sQ.innerHTML = sX, sQ.style.fontSize = fontSize || "1em", sQ.style.lineHeight = "1.2em", this.sQ.appendChild(sQ), sQ
	}, this.sY = function(sZ) {
		for (var sa = sZ.sa, fc = sa.length, aC = 0; aC < fc; aC++) this.sQ.appendChild(sa[aC])
	}, this.sb = function(sc) {
		return this.sP.push(sc), this.sQ.appendChild(sc.e), sc
	}, this.resize = function() {
		for (var fc = this.sP.length, aC = 0; aC < fc; aC++) this.sP[aC].resize && this.sP[aC].resize()
	}, (sQ = this.sQ).style.position = "absolute", sQ.style.height = "auto", sQ.style.padding = "0.5em"
}

function sd(se, sf) {
	var sQ = document.createElement("div");

	function sm() {
		var aC, sn, k, hB, ff, sj = i.l * sQ.offsetWidth,
			so = new Float64Array(function(sj) {
				var j = .25 * bD.sF.sk(.6) * i.iq;
				return Math.max(Math.floor(sj / j), 1)
			}(sj)),
			sp = bf.sp,
			sq = (sj - (so.length + 1) * bf.gap) / (so.length * i.l);
		for (so.fill(sp), aC = 0; aC < sf.length; aC++) sn = (ff = sf[aC].sQ).style, k = bD.sr.min(so), hB = so.indexOf(k), sn.top = bD.sF.ss(k), sn.left = bD.sF.ss(sp + hB * (sq + sp)), sn.width = bD.sF.ss(sq), bD.sF.sK(ff, 5), so[hB] += ff
			.offsetHeight + 3 * sp;
		sQ.style.height = bD.sF.ss(bD.sr.max(so) - 2 * sp)
	}
	this.sg = sQ, this.sh = sf, this.resize = function() {
		var aC;
		for (aC = 0; aC < sf.length; aC++) sf[aC].resize();
		sm(), sm()
	}, sQ.style.width = "100%", sQ.style.maxWidth = "100%", se.style.lineHeight = "1.5em", se.style.overflowX = "hidden", se.style.overflowY = "auto";
	for (var aC = 0; aC < sf.length; aC++) sQ.appendChild(sf[aC].sQ);
	se.appendChild(sQ)
}

function x(st, su, sv, sw, sx) {
	var self, sy = document.createElement("button");

	function t4() {
		var tA;
		bM.t9() || (tA = bD.color.tB(sv), !1 !== sw && 0 < tA[0] && tA[0] < 255 && tA[0] === tA[1] && tA[0] === tA[2]) || (128 < tA[0] && 128 < tA[1] && 128 < tA[2] ? sy.style.backgroundColor = bD.color.tC(sv, -50) : sy.style.backgroundColor = bD
			.color.tC(sv, tA[3] && tA[3] < 120 ? 150 : 50))
	}

	function t3() {
		if (sw) {
			var tA = bD.color.tB(sv);
			if (tA[0] === tA[1] && tA[0] === tA[2]) return
		}
		su && ((tA = su(this)) ? 2 === tA && t4() : tE(this))
	}

	function t6() {
		this.style.backgroundColor = sv
	}

	function t5() {
		tE(this)
	}

	function tE(ff) {
		ff.style.backgroundColor = sv, ff.blur()
	}
	this.button = sy, this.sz = su, this.t0 = sv, this.t2 = function(t7) {
		t7 = 1.1 - Math.min(.01 * st.length, .6) + .2 * t7;
		sy.style.fontSize = t7.toFixed(1) + "em"
	}, this.t1 = function(em) {
		em ? 1 === em ? em = bE.pg : 2 === em && (sw = 1, em = bE.pg) : (sw = 0, em = bE.pQ), this.t0 = sv = em, sy.style.backgroundColor = em
	}, self = this, sy.innerHTML = st, sy.style.color = sx ? bE.qZ : bE.pU, sy.style.userSelect = "none", sy.style.outline = "none", sy.style.overflowWrap = "break-word", self.t1(sv), sy.style.border = "none", sy.style.font = "inherit", self.t2(
		0), sy.style.padding = "0em 0.3em", sy.onclick = t3, sy.addEventListener("mouseover", t4), sy.addEventListener("mouseout", t5), sy.addEventListener("focus", t4), sy.addEventListener("blur", t6)
}

function tF(p4, se) {
	var sQ;
	this.resize = function() {
		for (var aC = 0; aC < p4.length; aC++) bD.sF.sK(p4[aC].button);
		sQ.style.gap = sQ.style.padding = bD.sF.ss(bf.sp)
	}, (sQ = document.createElement("div")).style.display = "grid", sQ.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", sQ.style.overflowY = "auto", sQ.style.gridAutoRows = "5.3em", sQ.style.maxHeight = "100%";
	for (var aC = 0; aC < p4.length; aC++) p4[aC].t2(1), sQ.appendChild(p4[aC].button);
	se.appendChild(sQ)
}

function tH(tI, tJ, tK) {
	this.fj = 0, this.fl = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.sF.sk(tK || .5) * tI[1] * i.iq, i.k - 2 * bf.gap), this.j = Math.min(this.k * (tI[0] / tI[1]), i.j - 2 * bf.gap), this.k = tI[1] * this.j / tI[0], this.fj = bf.gap + tJ[0] * (i.j - this.j - 2 * bf.gap), this.fl = bf
			.gap + tJ[1] * (i.k - this.k - 2 * bf.gap)
	}, this.tL = function() {
		return this.fj + .5 * this.j
	}
}

function tM(tN, tO) {
	var tX, self, tP = document.createElement("div"),
		tQ = document.createElement("div"),
		tR = document.createElement("div"),
		tS = null,
		tY = (this.tT = new tU({
			value: "",
			eL: -1
		}, 0, tV, function(e) {
			e.target.value = bD.tg.th(e.target.value), tS.tf.textContent = 255 - e.target.value.length
		}), 0),
		tZ = 1,
		ta = null,
		tb = 0,
		tc = 1048575;

	function tV() {
		tN(), tS.tf.textContent = 255
	}

	function tq() {
		var h5 = tQ.childNodes.length - bq.z.tt;
		if (!(h5 <= 0)) {
			for (var aC = 0; aC < h5; aC++) tQ.removeChild(tQ.firstChild);
			tZ || tu()
		}
	}

	function tu() {
		ta && ta.parentNode === tQ || (ta = tQ.firstChild, tb = 0), ta && (tP.scrollTop = ta.offsetTop + tb)
	}

	function tm(tl, sc) {
		sc && (sc.tw = 1, tl.appendChild(bq.tx.transform(sc)))
	}

	function tr(bz) {
		tZ ? tP.scrollTop = tP.scrollHeight : bz && tu()
	}
	this.reset = function(ti) {
			tc = 1048575, tQ.textContent = "", ti || this.nN()
		}, this.nN = function() {
			var tj = bq.z.tj,
				tk = bq.z.tk,
				fc = tj.length,
				kE = 1048575 === tc ? 0 : fc - (tk - tc + 1048575) % 1048575;
			if (tc = tk, !(fc <= (kE = Math.max(kE, 0)))) {
				for (var tl = document.createDocumentFragment(), aC = kE; aC < fc; aC++) tm(tl, bq.ln.tn(tj[aC], bq.ln.tp(tj[aC])));
				tQ.appendChild(tl), tq(), tr()
			}
		}, this.ts = function(s) {
			var tl = document.createDocumentFragment();
			tm(tl, s), tQ.appendChild(tl), tq(), tr()
		}, this.show = function(se) {
			se.appendChild(tP), se.appendChild(tR), this.resize(se)
		}, this.ty = function(se) {
			u.removeChild(se, tP), u.removeChild(se, tR)
		}, this.resize = function(se) {
			tY = se ? se.offsetHeight : tY;
			var se = bD.sF.sG(.04, .75),
				u0 = Math.max(se, tY - se),
				u1 = i.j / i.l,
				u2 = .7 * u1,
				u3 = bD.sF.ss(tY - se - u0),
				u0 = (tR.style.height = bD.sF.ss(se), tP.style.height = bD.sF.ss(u0), i.k > i.j || a1.a2.ip() ? (tR.style.top = u3, tP.style.top = bD.sF.ss(tY - u0), bD.sF.sK(tP, 8)) : (tP.style.top = u3, tR.style.top = bD.sF.ss(tY - se), bD.sF.sK(
						tP, 2)), this.tT.e.style.width = bD.sF.ss(u2), this.tT.e.style.fontSize = tX.button.style.fontSize = bD.sF.ss(.5 * se), bD.sF.sK(this.tT.e, 6), tX.button.style.left = bD.sF.ss(u2), tX.button.style.width = bD.sF.ss(u1 - u2),
					.385 * se);
			a1.a2.ip() && (u0 *= .8 - .12 * (i.j > i.k)), tQ.style.marginLeft = tQ.style.marginRight = bD.sF.ss(.5 * u0), tQ.style.fontSize = bD.sF.ss(u0), tr(1)
		}, (self = this).tT.e.maxLength = 255, tP.style.position = "absolute", tP.style.left = "0", tP.style.width = "100%", tP.style.overflowX = "hidden", tP.style.overflowY = "auto", tP.style.font = "inherit", tP.style.backgroundColor = bE.pS, tP
		.addEventListener("scroll", function() {
			if (tP.scrollTop < tP.scrollHeight - tP.clientHeight - 2) {
				tZ = 0;
				for (var tv = tQ.childNodes, sn = tP.scrollTop, aC = 0; aC < tv.length; aC++)
					if (tv[aC].offsetTop + tv[aC].offsetHeight > sn) return void(ta = tv[aC], tb = sn - tv[aC].offsetTop);
				ta = null
			} else tZ = 1
		}), tQ.style.font = "inherit", tR.style.position = "absolute", tR.style.left = "0", tR.style.width = "100%", self.tT.e.setAttribute("placeholder", L(13)), self.tT.e.style.position = "absolute", self.tT.e.style.top = "0", self.tT.e.style
		.left = "0", self.tT.e.style.height = "100%", self.tT.e.style.backgroundColor = bE.pP, self.tT.e.style.textAlign = "center", (tX = new x(L(14), tV)).button.top = "0", tX.button.style.position = "absolute", tX.button.style.height = "100%", tX
		.t1(bE.qo), tS = new te("255", tX.button, 1, 1), tP.appendChild(tQ), tR.appendChild(self.tT.e), tR.appendChild(tX.button)
}

function u5(u6, st, u7) {
	function click() {
		var value = 1 - u6.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + st, void 0 !== u6.eL ? bm.r0.r1(u6.eL, value) : u6.value = value, u7 && u7(value)
	}
	var e;
	st = st || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (u6.value ? "🟩 " : "⬜ ") + st, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function u8(se, sX) {
	var sQ = document.createElement("div");
	this.sg = sQ, this.resize = function() {
		sQ.style.padding = bD.sF.ss(bf.sp), sQ.style.lineHeight = bD.sF.ss(bD.sF.sG(.035))
	}, se.style.overflowX = "hidden", se.style.overflowY = "auto", sQ.innerHTML = sX, se.appendChild(sQ)
}

function u9(uA) {
	var sQ = document.createElement("div");
	this.e = sQ, this.uB = uA, this.resize = function() {
		for (var fc = uA.length, aC = 1; aC < fc; aC++) bD.sF.sK(uA[aC], 4)
	};
	var aC, fc = uA.length;
	for (sQ.style.width = "100%", sQ.style.height = "2.7em", sQ.style.marginTop = "0.6em", sQ.style.border = "inherit", aC = 0; aC < fc; aC++) uA[aC].style.verticalAlign = "top", uA[aC].style.width = (100 / fc).toFixed(2) + "%", uA[aC].style.height =
		"100%", uA[aC].style.fontSize = "0.75em", sQ.appendChild(uA[aC])
}

function uC(uD, sv, uE, uF) {
	this.sQ = document.createElement("div"), this.p4 = uD;
	var uG = 0;
	this.resize = function(se, uI) {
		var fc = uD.length;
		if (!uE)
			for (var aC = 1; aC < fc; aC++) bD.sF.sK(uD[aC].button, 4);
		if (uF)
			for (aC = 0; aC < fc; aC++) uD[aC].button.style.width = uF[aC] + "%";
		else {
			for (var uJ = 0, aC = 0; aC < fc; aC++) uJ += uD[aC].button.offsetWidth;
			if (se && (uG = se.offsetWidth), uI && uJ < uG)
				for (aC = 0; aC < fc; aC++) uD[aC].button.style.width = (100 * uD[aC].button.offsetWidth / uJ).toFixed(2) + "%";
			else
				for (aC = 0; aC < fc; aC++) uD[aC].button.style.width = "auto";
			uI || this.resize(se, 1)
		}
	};
	var uH = this;
	uH.sQ.style.height = uH.sQ.style.maxHeight = "100%";
	for (var aC = 0; aC < uD.length; aC++) uD[aC].t1(sv), uD[aC].button.style.height = "100%", uD[aC].button.style.padding = "0.0em 0.9em", uD[aC].button.style.whiteSpace = "pre", uH.sQ.appendChild(uD[aC].button)
}

function uK() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.sF.sK(this.e, 8, bE.pd)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function uL() {
	var uP, uQ, sD = document.createElement("div"),
		uM = document.createElement("div"),
		uN = 0,
		uO = 0;
	this.show = function(fj, fl, sA, uR, uS, em) {
			if (uN) {
				if (!uR) return;
				this.ty()
			}
			fj === fl && -1 === fj ? (fj = uP, fl = uQ) : (uP = fj, uQ = fl);
			var uT = Math.floor(bD.sF.sG(.018)),
				uS = (fj = Math.max(uT + 2, fj), uS || (uO = uR), uN = 1, i.j / i.l),
				uR = (sD.style.whiteSpace = "pre", sD.textContent = sA, bD.sF.sK(sD, 5), sD.style.font = bD.sF.sI(0, bD.sF.sG(.015)), sD.style.padding = "0.3em 0.6em", sD.style.left = fj + "px", sD.style.top = "0px", document.body.appendChild(sD),
					fj + sD.offsetWidth - uS),
				sA = (0 < uR && (fj -= uR, fj = Math.max(uT + 1, fj), sD.style.left = fj + "px", fj < uT + 2) && (sD.style.whiteSpace = "pre-wrap"), sD.offsetHeight);
			sD.style.top = fl - sA + uO * bf.uW + "px", fj -= uT, uM.style.backgroundColor = bD.color.pM(em >> 12 << 2, (em >> 6 & 63) << 2, (63 & em) << 2), uM.style.left = fj + "px", uM.style.top = sD.style.top, uM.style.width = uT + "px", uM.style
				.height = sA + "px", bD.sF.sK(uM, 4), bD.sF.sK(uM, 8), bD.sF.sK(uM, 2), document.body.appendChild(uM)
		}, this.ty = function(uX) {
			if (uN) {
				if (uX && uO) return 0;
				uN = 0, u.removeChild(document.body, sD), u.removeChild(document.body, uM)
			}
			return 1
		}, sD.style.position = "absolute", sD.style.backgroundColor = bE.pQ, sD.style.color = bE.pU, sD.style.pointerEvents = "none", sD.style.zIndex = "5", sD.style.maxWidth = "100%", uM.style.position = "absolute", uM.style.color = bE.pU, uM.style
		.pointerEvents = "none", uM.style.zIndex = "5"
}

function tU(uY, type, uZ, ua) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.ub++, e.value = uY.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.pU, e.style.backgroundColor = bE.pN, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.uc++
		}), e.addEventListener("blur", function() {
			i.uc--, -1 !== uY.eL && bm.r0.r1(uY.eL, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== uY.eL && bm.r0.r1(uY.eL, e.value), uZ ? uZ() : e.blur())
		}), ua && e.addEventListener("input", function(sc) {
			ua(sc)
		})
}

function ud(se, data, oS) {
	var fc = data.ue.length,
		uf = document.createElement("div"),
		ug = document.createElement("div"),
		uh = document.createElement("div"),
		ui = new Array(fc),
		sf = new Array(fc),
		uj = new Array(data.uk.length),
		ul = bD.color.pO(70, 70, 0, .35);

	function tC() {
		this.style.backgroundColor = bD.color.tC(ul, 160)
	}

	function us() {
		this.style.backgroundColor = ul
	}

	function sm() {
		var fv;
		for (se.style.font = bD.sF.sI(0, bD.sF.v0(.026, .5, .03)), aC = 1; aC < uj.length; aC++) bD.sF.sK(uj[aC], 4);
		if (bD.sF.sK(uf, 2), fc) {
			for (var i5, v1 = uf.offsetWidth, v2 = uh.offsetWidth, aC = 0; aC < uj.length; aC++) i5 = .01 * data.ur[aC] * v2, uj[aC].style.width = (100 * i5 / v1).toFixed(2) + "%";
			var lt = data.ue[0].length;
			for (aC = 0; aC < fc; aC++)
				for (bD.sF.sK(ui[aC], 2), fv = 1; fv < lt; fv++) bD.sF.sK(sf[aC][fv], 4);
			ug.um && (ug.scrollTop = ug.um)
		}
	}
	this.resize = function() {
			sm(), sm()
		}, se.style.display = "flex", se.style.flexDirection = "column", ug.style.overflowX = "hidden", ug.style.overflowY = "auto", ug.addEventListener("scroll", function() {
			this.um = this.scrollTop, oS && oS.un && (u.z.uo[oS.un] = this.scrollTop)
		}),
		function() {
			var ff, aC, ue = data.ue,
				lt = fc ? ue[0].length : 0;
			for (aC = 0; aC < fc; aC++) {
				ui[aC] = document.createElement("div"), ui[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.pO(130, 130, 130, .35) : bE.pT
				}(aC), ui[aC].style.width = "100%", ui[aC].style.display = "flex", sf[aC] = new Array(lt);
				for (var fv = 0; fv < lt; fv++) sf[aC][fv] = ff = document.createElement("div"), ff.style.display = "flex", ff.style.justifyContent = "center", ff.style.wordBreak = "break-all", ff.style.padding = "0.4em 0em", ff.style.width = data
					.ur[fv] + "%", ff.textContent = ue[aC][fv].g4, 1 === ue[aC][fv].ed && (ff.name = "" + aC, ff.style.color = bE.qZ, ff.style.backgroundColor = ul, ff.addEventListener("mouseover", tC), ff.addEventListener("mouseout", us), function(
						ff, uu, uv) {
						2147483647 !== uv && ff.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, uu), bK.dm(bG.aD), this.style.backgroundColor = ul, u.v(8, u.uw, new ux(25, {
								action: 0,
								uu: bI.f3.uy(bI.f3.uz(5)),
								uv: uv
							}))
						})
					}(ff, ue[aC][fv].uu, ue[aC][fv].uv)), ui[aC].appendChild(ff)
			}
			for (uf.style.display = "flex", uf.style.backgroundColor = bD.color.pO(0, 120, 0, .35), aC = 0; aC < uj.length; aC++) uj[aC] = ff = document.createElement("div"), ff.style.display = "flex", ff.style.justifyContent = "center", ff.style
				.wordBreak = "break-all", ff.style.padding = "0.4em 0em", ff.style.width = data.ur[aC] + "%", ff.innerHTML = data.uk[aC], uf.appendChild(ff)
		}();
	for (var aC = 0; aC < fc; aC++) uh.appendChild(ui[aC]);
	ug.appendChild(uh), se.appendChild(uf), se.appendChild(ug), oS && oS.un && (ug.um = u.z.uo[oS.un])
}

function v3() {
	var v7, v8, v4 = document.createElement("div"),
		v5 = document.createElement("div"),
		v6 = document.createElement("div"),
		uh = document.createElement("div"),
		p4 = [],
		eG = [L(16), L(17), L(18), L(19), L(20), L(21), L(22), L(23)],
		v9 = [1, 2, 3, 0, 9, 10, 11, 13];

	function vB(aC) {
		u.v(8, 0, new ux(21, {
			vD: v9[aC],
			vE: 0,
			vF: 10
		}))
	}
	this.show = function() {
			this.r1(u.z.vG), document.body.appendChild(v4)
		}, this.ty = function() {
			u.removeChild(document.body, v4)
		}, this.r1 = function(vG) {
			for (var vH = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < p4.length; aC++) {
				var j = vG[aC];
				v7[vH[aC]][1].tf.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, vI = bf.gap,
				k = bD.sF.vJ(.085),
				j = Math.min(4 * k, i.j - 2 * vI),
				fc = p4.length;
			for (bD.sF.vK(v4, vI, i.k - vI - k, j, k), bD.sF.sK(v4), bD.sF.sK(v5, 6), aC = 0; aC < fc - 1; aC++) bD.sF.sK(p4[aC].button, 6);
			for (aC = 0; aC < fc; aC++) v7[aC][0].resize(), v7[aC][1].resize();
			for (p4[0].fj = 0, p4[0].button.style.left = bD.sF.ss(p4[0].fj), p4[0].button.style.width = bD.sF.vL(1.7 * k), aC = 1; aC < fc; aC++) p4[aC].fj = p4[aC - 1].fj + p4[aC - 1].button.offsetWidth, p4[aC].button.style.left = bD.sF.ss(p4[aC]
				.fj);
			if (!v8) {
				if (!ac.vM()) return;
				(v8 = ac.get(14)).style.width = "24%", v8.style.position = "absolute", v5.appendChild(v8)
			}
			v8.style.left = bD.sF.ss(0), v8.style.top = "7%", v6.vN && (v6.scrollLeft = v6.vN)
		}, v4.style.position = "absolute", v5.style.width = "25%", v5.style.height = "100%", v5.style.backgroundColor = bE.pQ, v6.style.position = "absolute", v6.style.width = "75%", v6.style.height = "100%", v6.style.backgroundColor = bE.pQ, v6
		.style.top = v6.style.right = bD.sF.ss(0), bD.sF.vA(v6), uh.style.height = uh.style.maxHeight = "100%", p4.push(new x("", function() {
			vB(0)
		}, bE.qG)), p4.push(new x("", function() {
			vB(1)
		}, bE.qH)), p4.push(new x("", function() {
			vB(2)
		}, bE.q9)), p4.push(new x("", function() {
			vB(3)
		}, bE.ps)), p4.push(new x("", function() {
			vB(4)
		}, bE.qk)), p4.push(new x("", function() {
			vB(5)
		}, bE.qg)), p4.push(new x("", function() {
			vB(6)
		}, bE.qk)), p4.push(new x("", function() {
			vB(7)
		}, bE.pL)), v7 = new Array(p4.length);
	for (var aC = 0; aC < p4.length; aC++) p4[aC].button.style.position = "absolute", v7[aC] = [new vC(eG[aC], p4[aC].button, .25, .45), new vC("", p4[aC].button, .53, .84, 1)], p4[aC].button.style.height = p4[aC].button.style.maxHeight = "100%", p4[
		aC].button.top = bD.sF.ss(0), uh.appendChild(p4[aC].button);
	v6.appendChild(uh), v4.appendChild(v5), v4.appendChild(v6)
}

function vO(vP, vQ, tN, tO, vR) {
	var vS = document.createElement("div"),
		vT = document.createElement("div"),
		vU = document.createElement("div"),
		vV = document.createElement("div"),
		vW = document.createElement("div"),
		vX = document.createElement("div"),
		vY = document.createElement("span"),
		vZ = document.createElement("div"),
		vf = (this.va = new tM(tN, tO), this.vb = new vc(tO), this.vd = new ve(vR), 2);
	this.vj = function(vk) {
		vk = (vk / 10).toFixed(1) + "%";
		vX.style.width = vk, vY.innerHTML = vk
	}, this.vl = function(vm) {
		(0 === vf ? this.va : 1 === vf ? this.vb : this.vd).ty(vV), (0 === (vf = vm) ? this.va : 1 === vm ? this.vb : this.vd).show(vV)
	}, this.vn = function() {
		return vT
	}, this.show = function() {
		document.body.appendChild(vS)
	}, this.ty = function() {
		u.removeChild(document.body, vS)
	}, this.resize = function() {
		var vo = 1 - .4 * a1.a2.ip() * (i.j > 1.6 * i.k),
			vp = bD.sF.sG(.05 * vo),
			vq = i.k > i.j,
			vr = bD.sF.sG(.06 * vo + .03 * vq),
			vq = bD.sF.sG(.02 * vo + .01 * vq),
			vt = bD.sF.sG(.025);
		vS.style.font = bD.sF.sI(0, vt), vU.style.font = bD.sF.sI(0, .9 * vt), vZ.style.font = bD.sF.sI(0, .9 * vt), vo < 1 && (vo = bD.sF.sI(0, vo * vt), vU.style.font = vo, vZ.style.font = vo, vW.style.font = vo), vT.style.height = bD.sF.ss(
			vp), vT.style.font = bD.sF.sI(0, .72 * vp), bD.sF.sK(vT, 2), vU.style.top = bD.sF.ss(vp), vU.style.height = bD.sF.ss(vr), bD.sF.sK(vU, 2), vV.style.top = bD.sF.ss(vp + vr), vV.style.height = bD.sF.ss(i.k / i.l - vp - 2 * vr - vq), vW
			.style.top = bD.sF.ss(i.k / i.l - vr - vq), vW.style.height = bD.sF.ss(vq), bD.sF.sK(vW, 8), vY.style.font = bD.sF.sI(0, .8 * vq), vZ.style.top = bD.sF.ss(i.k / i.l - vr), vZ.style.height = bD.sF.ss(vr), bD.sF.sK(vZ, 8), vP.resize(
			vS), vQ.resize(vS), 0 === vf ? this.va.resize(vV) : (1 === vf ? this.vb : this.vd).resize()
	};
	tN = this;
	vS.style.position = "absolute", vS.style.top = "0", vS.style.left = "0", vS.style.width = "100%", vS.style.height = "100%", vS.style.backgroundColor = bE.pT, bM.t9() || (vS.style.backdropFilter = "blur(4px)", vS.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (vS.style.display = "none"), vT.style.position = "absolute", vT.style.top = "0", vT.style.left = "0", vT.style.width = "100%", vT.style.display = "flex", vT.style.alignItems = "center", vT.translate = !1;
	for (var h = [vU, vZ], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.sF.vA(h[aC]);
	vV.style.position = "absolute", vV.style.left = "0", vV.style.width = "100%", vV.style.font = "inherit", vW.style.position = "absolute", vW.style.left = "0", vW.style.width = "100%", vX.style.position = "absolute", vX.style.top = "0", vX.style
		.left = "0", vX.style.height = "100%", vX.style.width = "50%", vX.style.backgroundColor = bE.pq, vY.innerHTML = "", vY.style.position = "absolute", vY.style.top = "50%", vY.style.left = "50%", vY.style.transform = "translate(-50%, -50%)", vY
		.translate = !1, vT.appendChild(function() {
			var vi = document.createElement("h1");
			return vi.textContent = L(24), vi.style.margin = "0 auto 0.15em auto", vi.style.fontFamily = "Arial Black, system-ui", vi.style.fontSize = "inherit", vi.style.fontWeight = "inherit", vi
		}()), vU.appendChild(vP.sQ), vW.appendChild(vX), vW.appendChild(vY), vZ.appendChild(vQ.sQ), vS.appendChild(vT), vS.appendChild(vU), vS.appendChild(vV), vS.appendChild(vW), vS.appendChild(vZ), vS.className = "fx-lobby", vV.className =
		"fx-panel", vW.className = "fx-progress", tN.vd.show(vV)
}

function ve(vR) {
	var vS = document.createElement("div"),
		vv = [],
		vw = 96,
		vx = ["battleRoyale", "oneVsOne", "zombie", "noFullSending"];

	function wD(e) {
		e.style.position = "absolute", e.style.top = e.style.left = "0", e.style.width = e.style.height = "100%", e.style.pointerEvents = "none"
	}

	function w1(button, wR) {
		var sQ = document.createElement("div");
		return sQ.style.position = "absolute", sQ.style.left = "0", sQ.style.width = "100%", sQ.style.height = "20%", sQ.style.pointerEvents = "none", sQ.style.backgroundColor = bE.pN, wR ? sQ.style.top = "0" : sQ.style.bottom = "0", button
			.appendChild(sQ), sQ
	}

	function w4(wS, wT) {
		var sQ = document.createElement("div");
		return sQ.style.position = "absolute", sQ.style.top = "0", sQ.style.width = "20%", sQ.style.height = "100%", wT ? sQ.style.left = "0" : sQ.style.right = "0", wS.appendChild(sQ), sQ
	}

	function wF(wU) {
		var canvas = document.createElement("canvas");
		return canvas.width = canvas.height = 64, wD(canvas), canvas.style.top = canvas.style.left = "10%", canvas.style.width = canvas.style.height = "80%", wU.appendChild(canvas), canvas.getContext("2d", {
			alpha: !0
		})
	}

	function w8(wS, left, right, width) {
		var sQ = document.createElement("div");
		return sQ.style.position = "absolute", sQ.style.top = "50%", sQ.style.transform = "translateY(-50%)", sQ.style.left = left, sQ.style.right = right, sQ.style.width = width, sQ.style.textAlign = "left", wS.appendChild(sQ), {
			sQ: sQ,
			wM: wX(sQ, 1.9),
			wB: wX(sQ, 1)
		}
	}

	function wX(oo, fontSize) {
		var sQ = document.createElement("div");
		return sQ.style.fontSize = fontSize + "em", sQ.style.lineHeight = "1.1", sQ.style.whiteSpace = "nowrap", sQ.style.overflow = "hidden", sQ.style.textOverflow = "ellipsis", sQ.style.textShadow = "0 0 0.25em black", oo.appendChild(sQ), sQ
	}

	function wY(e, sA) {
		e.textContent !== sA && (e.textContent = sA)
	}

	function wZ(sc) {
		sc.canvas && (bq.wa.wu(sc.canvas), sc.canvas = null), sc.wL = ""
	}
	this.nN = function() {
		var sf = bq.sf.sf,
			fc = sf.length;
		if (fc !== vv.length) {
			for (var aC = 0; aC < vv.length; aC++) wZ(vv[aC]);
			for (vS.textContent = "", vv = new Array(fc), aC = 0; aC < fc; aC++) vv[aC] = function(eL) {
				var button = document.createElement("button"),
					w0 = (button.style.position = "absolute", button.style.backgroundColor = bE.pT, button.style.color = bE.pU, button.style.outline = "none", button.style.userSelect = "none", button.style.cursor = "pointer", button.style
						.padding = "0", button.style.overflow = "hidden", bD.sF.vz(button, function() {
							vR(eL, 0)
						}, function() {
							vR(eL, 1)
						}), bD.sF.sK(button), w1(button, 1)),
					w2 = w1(button, 0),
					w3 = w4(w0, 0),
					w5 = w4(w2, 1),
					w6 = w4(w2, 0),
					w7 = w8(w0, "3%", "", "74%"),
					w9 = w8(w2, "20%", "", "30%"),
					wA = w8(w2, "", "20%", "30%"),
					wC = (wA.sQ.style.textAlign = "right", w9.wB.textContent = "Starts in", document.createElement("canvas"));
				return wC.width = wC.height = vw, wD(wC), w3.appendChild(wC), (button = {
					button: button,
					w0: w0,
					w2: w2,
					wE: wF(w5),
					wG: wF(w6),
					wH: 0,
					isContest: 0,
					wI: null,
					w3: w3,
					wC: wC,
					wJ: wC.getContext("2d", {
						alpha: !0
					}),
					wK: -1,
					canvas: null,
					wL: "",
					map: w7.wM,
					wN: w7.wB,
					wO: w9.wM,
					wP: wA.wM,
					wQ: wA.wB,
					hn: -1
				}).map.translate = !1, button.wN.translate = !1, button.wO.translate = !1, w9.wB.translate = !1, button
			}(aC), vS.appendChild(vv[aC].button);
			this.resize()
		}
		for (aC = 0; aC < fc; aC++) vv[aC].wL !== bq.wa.wb(sf[aC].fI, sf[aC].mapSeed) && wZ(vv[aC]);
		for (aC = 0; aC < fc; aC++) {
			var wc = sf[aC],
				sc = vv[aC],
				hn = wc.id === bq.sf.wd ? 1 + bq.sf.we : 0,
				h5 = bq.sf.wf(wc);
			wY(sc.map, bV.wg.wh[wc.fI]), wY(sc.wN, bq.sf.wi(wc.wN)), wY(sc.wO, bq.sf.wj(wc.wk)), wY(sc.wP, h5 + (bq.sf.wl(wc) ? "/" + wc.nV : "")), wY(sc.wQ, L(1 === h5 ? 25 : 26)), sc.hn !== hn && (sc.hn = hn, sc.w0.style.backgroundColor = sc.w2
				.style.backgroundColor = [bE.pN, bE.q0, bE.qS][hn], bD.sF.sK(sc.button, 5, [bE.pU, bE.q1, bE.qT][hn]), sc.button.classList.toggle("fx-line", !hn)), ! function(sc) {
				!sc.wH && ac.vM() && (sc.wH = 1, sc.wE.drawImage(ac.wW("clock"), 0, 0), sc.wG.drawImage(ac.wW("userIcon"), 0, 0))
			}(sc), ! function(sc, wN) {
				sc.wK === wN || 7 <= wN && !ac.vM() || ((sc.wK = wN) < 7 ? bk.ws(sc.wJ, wN + 2, vw) : (sc.wJ.clearRect(0, 0, vw, vw), sc.wJ.drawImage(ac.wW(vx[wN - 7]), 0, 0, vw, vw)))
			}(sc, wc.wN), ! function(sc, isContest) {
				sc.isContest === isContest || isContest && !ac.vM() || ((sc.isContest = isContest) ? (sc.wI || (sc.wI = function(sc) {
					var wr = ac.wW("crown"),
						canvas = document.createElement("canvas");
					return canvas.width = wr.width, canvas.height = wr.height, canvas.getContext("2d", {
							alpha: !0
						}).drawImage(wr, 0, 0), canvas.style.position = "absolute", canvas.style.top = "50%", canvas.style.left = "50%", canvas.style.width = "55%", canvas.style.height = "auto", canvas.style.transform =
						"translate(-50%, -50%)", canvas.style.opacity = "0.5", canvas.style.pointerEvents = "none", sc.button.insertBefore(canvas, sc.w0), canvas
				}(sc)), sc.wI.hidden = !1) : sc.wI.hidden = !0)
			}(sc, wc.wo), ! function(sc, wc) {
				var canvas;
				sc.canvas || (canvas = bq.wa.wt(wc.fI, wc.mapSeed)) && (sc.canvas = canvas, sc.wL = bq.wa.wb(wc.fI, wc.mapSeed), wD(canvas), sc.button.insertBefore(canvas, sc.button.firstChild))
			}(sc, wc)
		}
	}, this.resize = function() {
		var fc = vv.length,
			j = vS.offsetWidth,
			k = vS.offsetHeight;
		if (0 !== fc && 0 !== j && 0 !== k) {
			for (var gap = bD.sF.sG(.012), wv = 0, ww = 1, em = 1; em <= fc; em++) {
				var rows = bO.g3(fc + em - 1, em),
					rows = Math.min((j - (em + 1) * gap) / em, (k - (rows + 1) * gap) / rows);
				wv < rows && (wv = rows, ww = em)
			}
			for (var wx = bO.g3(fc + ww - 1, ww), o1 = (j - ww * wv - (ww - 1) * gap) / 2, o2 = (k - wx * wv - (wx - 1) * gap) / 2, aC = 0; aC < fc; aC++) {
				var sn = vv[aC].button.style;
				sn.left = bD.sF.ss(o1 + aC % ww * (wv + gap)), sn.top = bD.sF.ss(o2 + bO.g3(aC, ww) * (wv + gap)), sn.width = sn.height = bD.sF.ss(wv), sn.fontSize = bD.sF.ss(.05 * wv)
			}
		}
	}, this.show = function(se) {
		se.appendChild(vS), this.nN(), this.resize()
	}, this.ty = function(se) {
		u.removeChild(se, vS)
	}, vS.style.position = "absolute", vS.style.top = "0", vS.style.left = "0", vS.style.width = vS.style.height = "100%", vS.style.overflow = "hidden", vS.style.font = "inherit"
}

function vc(tO) {
	var tf, wU, vS = document.createElement("div"),
		vV = document.createElement("div"),
		wy = null,
		wz = null;
	this.nN = function() {
			vV.textContent = "", bq.x2.x3 && bq.x2.ty(1);
			for (var tl = document.createDocumentFragment(), wP = bq.x4.x5, sf = bq.sf.sf, x6 = 0, aC = 0; aC < sf.length; aC++) x6 = x6 || 8 === sf[aC].wN;
			for (wy.style.width = wy.style.maxWidth = x6 ? "11.3em" : "10.3em", aC = 0; aC < wP.length; aC++) {
				var eL = bq.sf.x7(wP[aC].x8);
				! function(tl, sc, eL, xA) {
					var tf = wy.cloneNode(!0),
						wU = tf.firstChild;
					wU.style.backgroundColor = 0 <= eL && sc.xB ? bE.qV : wz[eL < 0 ? 15 : Math.min(eL, 14)], 0 <= eL && (wU.textContent = "" + (eL + 1));
					tf.lastChild.textContent = bq.ln.xC(sc, xA), tf.style.color = bq.ln.xD(sc.xE), 11 === sc.xE && (tf.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
					__fx.settings.highlightDuplicateIps && (wU = __fx.utils.getDuplicateIpHighlightColor(sc, bq.x4.x5, "aH8")) && (tf.style.backgroundColor = wU, tf.style.borderRadius = "0.3em");
					__fx.settings.highlightSameClan && (eL = __fx.utils.getSameClanHighlightColor(sc, bq.aGl, "username")) && (tf.style.backgroundColor ? tf.style.boxShadow = "inset 0 0 0 2px " + eL : tf.style.backgroundColor = eL, tf.style
						.borderRadius = "0.3em");
					bq.ln.xF(sc) && (tf.style.textDecoration = "underline"), sc.xG && (tf.style.textDecorationLine = "underline", tf.style.textDecorationStyle = "dotted");
					tf.onclick = function(e) {
						tO(e, sc)
					}, bM.t9() || (tf.onmouseover = function(e) {
						bq.x2.xH(tf, sc, 1)
					}), tl.appendChild(tf)
				}(tl, wP[aC], eL, 0 <= eL && 8 === sf[eL].wN)
			}
			vV.appendChild(tl), vV.classList.toggle("fx-wide", !!x6)
		}, this.show = function(se) {
			se.appendChild(vS)
		}, this.ty = function(se) {
			u.removeChild(se, vS)
		}, this.resize = function() {
			vV.style.fontSize = bD.sF.ss(bD.sF.sG(.02, .3))
		}, vS.style.top = "0", vS.style.left = "0", vS.style.width = vS.style.height = "100%", vS.style.overflowX = "hidden", vS.style.overflowY = "auto", vS.style.font = "inherit", vV.style.font = "inherit", vV.style.margin = "0.4em", vS
		.appendChild(vV), vS.className = "fx-players-scroll", vV.className = "fx-players", (tf = document.createElement("span")).style.cursor = "pointer", tf.style.margin = "0.2em 0.2em 0.2em 0.2em", tf.style.height = tf.style.maxHeight = "1.4em", tf
		.style.whiteSpace = "nowrap", tf.style.overflow = "hidden", tf.style.textOverflow = "ellipsis", tf.style.font = "inherit", tf.style.display = "inline-block", (wU = document.createElement("span")).style.display = "inline-block", wU.style
		.width = wU.style.height = wU.style.lineHeight = "1.3em", wU.style.marginRight = "0.4em", wU.style.fontSize = "0.8em", wU.style.fontWeight = "bold", wU.style.textAlign = "center", wU.style.color = bE.pL, wU.style.textShadow = "none", wU.style
		.textDecoration = "none", wU.style.pointerEvents = "none", wU.translate = !1, tf.appendChild(wU), tf.appendChild(document.createTextNode("")), wy = tf, wz = function() {
			for (var h = ["rgb(0,200,0)", "rgb(150,220,0)", "rgb(250,225,0)", "rgb(255,150,0)", "rgb(240,85,0)"], aC = h.length; aC < 15; aC++) h.push("rgb(210,0,0)");
			return h.push("rgb(128,128,128)"), h
		}()
}

function xI(xJ) {
	var vS = document.createElement("div"),
		tR = document.createElement("div"),
		xK = [];

	function t4() {
		bM.t9() || (this.style.backgroundColor = bD.color.tC(bE.pQ, 50))
	}

	function t5() {
		this.style.backgroundColor = bE.pQ
	}
	this.r1 = function(xM, xN) {
			xK[2].textContent = xM + 1 + " / " + xN
		}, this.show = function(sc) {
			sc = bq.ln.tn(sc, bq.ln.tp(sc)), tR.appendChild(bq.tx.transform(sc)), document.body.appendChild(vS)
		}, this.resize = function() {
			var k = bD.sF.sG(.03, .5);
			vS.style.width = 10 * k + "px", vS.style.font = bD.sF.sI(1, .75 * k), bD.sF.sK(vS, 4), tR.style.top = k + "px", tR.style.font = bD.sF.sI(0, .55 * k), bD.sF.sK(tR, 2), vS.style.height = k + tR.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.sF.sK(xK[aC], 6), xK[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) xK[aC].style.height = k + "px", bD.sF.sK(xK[aC], 2);
			xK[2].style.width = 4 * k + "px", xK[1].style.left = 2 * k + "px", xK[2].style.left = 4 * k + "px", xK[3].style.left = 8 * k + "px"
		}, this.xO = function() {
			for (var aC = 0; aC < 4; aC++) xK[aC].onclick = null, xK[aC].onmouseover = null, xK[aC].onmouseout = null;
			u.removeChild(document.body, vS), vS = tR = xK = null
		}, vS.style.position = "absolute", vS.style.color = bE.pU, vS.style.zIndex = "3", vS.style.right = "0", vS.style.top = "0", tR.style.position = "absolute", tR.style.height = "auto", tR.style.color = bE.pU, tR.style.backgroundColor = bE.pQ, tR
		.style.left = "0", tR.style.width = "100%", tR.style.overflowWrap = "break-word", vS.appendChild(tR);
	for (var aC = 0; aC < 4; aC++) xK[aC] = document.createElement("div"), xK[aC].style.position = "absolute", xK[aC].style.backgroundColor = bE.pQ, xK[aC].style.color = bE.pU, xK[aC].style.top = "0", xK[aC].style.display = "flex", xK[aC].style
		.justifyContent = "center", xK[aC].style.alignItems = "center", xK[aC].style.userSelect = "none", xK[aC].style.outline = "none", xK[aC].style.font = "inherit", 2 !== (xK[aC].xL = aC) && (xK[aC].onclick = xJ, xK[aC].onmouseover = t4, xK[aC]
			.onmouseout = t5), vS.appendChild(xK[aC]);
	xK[0].textContent = "◀", xK[1].textContent = "▶", xK[3].textContent = "✖"
}

function xP(xJ) {
	var sD = document.createElement("div");

	function t4() {
		bM.t9() || (sD.style.backgroundColor = bD.color.tC(bE.pQ, 50))
	}

	function t5() {
		sD.style.backgroundColor = bE.pQ
	}
	this.r1 = function(xN) {
			sD.textContent = xN
		}, this.show = function() {
			document.body.appendChild(sD)
		}, this.resize = function() {
			var k = bD.sF.sG(.03, .5);
			sD.style.width = 2 * k + "px", sD.style.height = k + "px", sD.style.font = bD.sF.sI(1, .75 * k), bD.sF.sK(sD, 4), bD.sF.sK(sD, 2)
		}, this.xO = function() {
			sD.onclick = null, sD.onmouseover = null, sD.onmouseout = null, u.removeChild(document.body, sD), sD = null
		}, sD.style.position = "absolute", t5(), sD.style.color = bE.pU, sD.style.zIndex = "3", sD.style.right = "0", sD.style.top = "0", sD.style.display = "flex", sD.style.justifyContent = "center", sD.style.alignItems = "center", sD.style
		.userSelect = "none", sD.style.outline = "none", sD.onclick = xJ, sD.onmouseover = t4, sD.onmouseout = t5
}

function xQ(uD) {
	var vS = document.createElement("div"),
		xR = document.createElement("div"),
		uN = (this.fj = 0, this.fl = 0);

	function xT() {
		bq.xU.ty()
	}
	this.p4 = uD, this.show = function(fj, fl, xW) {
		if (uN) return [0, 0];
		uN = 1, this.fj = fj, this.fl = fl,
			function(self, xW) {
				var j = bD.sF.sG(.16, .7),
					k = uD.length * j / 3,
					xY = i.j / i.l,
					xZ = i.k / i.l,
					oD = Math.min(1, Math.min(xY / j, xZ / k));
				j *= oD, k *= oD, xW && (self.fj += bD.sF.sG(.03, .5)), self.fj = bO.io(self.fj, 0, xY - j), self.fl = bO.io(self.fl, 0, xZ - k), xR.style.left = self.fj + "px", xR.style.top = self.fl + "px", xR.style.width = j + "px", xR.style
					.height = k + "px", xR.style.font = bD.sF.sI(0, .3 * k / uD.length), bD.sF.sK(xR, 5);
				for (var aC = 1; aC < uD.length; aC++) bD.sF.sK(uD[aC].button, 8)
			}(this, xW), document.body.appendChild(vS)
	}, this.ty = function() {
		uN && (uN = 0, vS.removeEventListener("click", xT), u.removeChild(document.body, vS))
	};
	for (var aC = 0; aC < uD.length; aC++) new te("" + (1 + aC), uD[aC].button, 0, 1);
	vS.style.position = "fixed", vS.style.top = "0", vS.style.left = "0", vS.style.width = "100%", vS.style.height = "100%", vS.style.zIndex = "5", xR.style.position = "absolute",
		function() {
			for (var xV = (100 / uD.length).toFixed(2) + "%", aC = 0; aC < uD.length; aC++) uD[aC].button.style.width = "100%", uD[aC].button.style.height = uD[aC].button.style.maxHeight = xV, uD[aC].button.style.padding = "0.0em 0.9em", xR
				.appendChild(uD[aC].button)
		}(), vS.appendChild(xR), vS.addEventListener("click", xT)
}

function en() {
	var xa, xb, xc;

	function xj(aC) {
		return bD.color.pM(xb[aC][0], xb[aC][1], xb[aC][2])
	}

	function xp(fv, fw) {
		return bD.color.xy(xb[fv], xb[fw]), xj(fw)
	}

	function xh() {
		xa && (xa.remove(), xa = null)
	}
	this.show = function(eo, colors, id) {
		0 <= (xc = id) && b1.z.ei(0) && b1.ej.xd(0, id), eo = (eo = (eo = (eo = (eo = (eo = (eo = (eo = (eo = (eo = (eo = (eo = eo.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			xb = colors, (xa = document.createElement("div")).style.position = "fixed", xa.style.top = "0", xa.style.left = "0", xa.style.width = "100%", xa.style.height = "100%", xa.style.backgroundColor = bD.color.pO(xb[0][0], xb[0][1], xb[0][
				2], .6), xa.style.zIndex = "6", xa.onclick = function(e) {
				e.target === xa && xh()
			},
			function(eo) {
				var iZ, xi = document.createElement("div");
				xi.style.position = "absolute", xi.style.display = "flex", xi.style.flexDirection = "column", xi.style.top = "50%", xi.style.left = "50%", xi.style.backgroundColor = xj(2), iZ = a1.a2.ip() ? bD.sF.xk(i.min) : bD.sF.sG(.4);
				iZ = Math.max(iZ, 200), xi.style.width = bD.sF.ss(iZ), xi.style.height = bD.sF.ss(iZ), xi.style.transform = "translate(-50%, -50%)",
					function(xi, iZ) {
						var xo = document.createElement("div");
						xo.style.flex = "0 0 10%", xo.style.overflow = "hidden", xo.style.backgroundColor = xj(1), xo.style.color = xp(1, 7), xo.style.font = bD.sF.sI(1, .05 * iZ), xo.style.display = "flex", xo.style.alignItems = "center", xo
							.style.justifyContent = "center", xo.innerHTML = L(27), xi.appendChild(xo)
					}(xi, iZ),
					function(xi, eo, iZ) {
						var xq = document.createElement("div");
						xq.style.flex = "0 0 70%", xq.style.overflowY = "auto", xq.style.overflowX = "hidden", xq.style.whiteSpace = "pre-wrap", xq.style.wordWrap = "break-word", xq.style.padding = bD.sF.ss(.02 * iZ), xq.style.backgroundColor =
							xj(2), xq.style.color = xp(2, 8), xq.style.font = bD.sF.sI(0, .07 * iZ), xq.innerHTML = eo, xq.innerHTML = "<style>a { color: inherit; }</style>" + xq.innerHTML, xi.appendChild(xq)
					}(xi, eo, iZ),
					function(xi, iZ) {
						var oo = document.createElement("div"),
							xr = (oo.style.display = "flex", oo.style.flexDirection = "row", oo.style.justifyContent = "space-between", oo.style.alignItems = "stretch", oo.style.backgroundColor = xj(3), oo.style.flex = "1", oo.style.padding = bD
								.sF.ss(.01 * iZ), oo.style.gap = bD.sF.ss(.01 * iZ), document.createElement("div")),
							xs = (xr.style.flex = "0 0 60%", xr.style.height = "100%", new x(L(28, 0, 0, 1), function() {
								xh()
							}, xj(4), !1)),
							xs = (xs.button.style.width = "100%", xs.button.style.height = "100%", xs.button.style.color = xp(4, 9), xs.button.style.font = bD.sF.sI(1, .05 * iZ), xr.appendChild(xs.button), document.createElement("div")),
							xu = (xs.style.flex = "0 0 15%", xs.style.height = "100%", xs.style.backgroundColor = xj(5), document.createElement("div")),
							xv = (xu.style.flex = "1", xu.style.height = "100%", new x(L(29), function(e) {
								return bD.sF.xw(e), xc < 0 || b1.z.ei(0) && (b1.ej.xd(1, xc), xc = -1), !0
							}, xj(6), !1));
						xv.button.style.width = "100%", xv.button.style.height = "100%", xv.button.style.color = xp(6, 10), xv.button.style.font = bD.sF.sI(1, .035 * iZ), xu.appendChild(xv.button), oo.appendChild(xr), oo.appendChild(xs), oo
							.appendChild(xu), xi.appendChild(oo)
					}(xi, iZ), xa.appendChild(xi)
			}(eo), document.body.appendChild(xa)
	}
}

function xz(uY, y0) {
	this.sa = [];
	var y1 = this.sa;

	function click() {
		for (var aC = 0; aC < y1.length; aC++) y1[aC].textContent = y1[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eL = parseInt(this.name);
		void 0 !== uY.eL && bm.r0.r1(uY.eL, eL), y0 && y0(eL)
	}
	for (var y2, fc = uY.oS.length, aC = 0; aC < fc; aC++)(y2 = document.createElement("p")).textContent = "⚪ " + uY.oS[aC], y2.style.margin = "0", y2.name = "" + aC, y2.style.cursor = "pointer", y2.style.fontSize = "1em", y2.addEventListener(
		"click", click), y1.push(y2);
	y1[uY.value].textContent = y1[uY.value].textContent.replace("⚪", "🟢")
}

function y3(title, y4, y5) {
	var v4 = document.createElement("div"),
		y6 = document.createElement("div"),
		uh = document.createElement("div"),
		y7 = document.createElement("div"),
		y8 = document.createElement("div");
	this.y9 = uh, this.yA = y4, v4.className = "fx-page", this.show = function() {
			!1 !== y5 ? document.body.appendChild(v4) : (document.body.appendChild(y6), document.body.appendChild(y7))
		}, this.ty = function() {
			!1 !== y5 ? u.removeChild(document.body, v4) : (u.removeChild(document.body, y6), u.removeChild(document.body, y7))
		}, this.yE = function() {
			var u0 = bD.sF.sG(.1),
				tz = bD.sF.sG(.08 + .04 * (i.yF < 1), .3);
			return {
				u0: u0,
				tz: tz,
				yG: i.k / i.l - u0 - tz
			}
		}, this.resize = function(uI) {
			var fc = y4.length,
				yH = this.yE(),
				u0 = yH.u0,
				tz = yH.tz;
			for (y6.style.height = bD.sF.ss(u0), bD.sF.sK(y6, 2), y7.style.top = bD.sF.ss(i.k / i.l - tz), y7.style.height = bD.sF.ss(tz), bD.sF.sK(y7, 8), uh.style.top = bD.sF.ss(u0), uh.style.height = uh.style.maxHeight = bD.sF.ss(yH.yG), y6.style
				.font = bD.sF.sI(0, bD.sF.sG(.02, .15)), y7.style.font = bD.sF.sI(0, bD.sF.sG(.02, .7)), uh.style.font = bD.sF.sI(0, bD.sF.sG(.02, .35)), aC = 1; aC < fc; aC++) bD.sF.sK(y4[aC].button, 4);
			for (var uJ = 0, aC = 0; aC < fc; aC++) uJ += y4[aC].button.offsetWidth;
			if (uI && uJ < y7.offsetWidth)
				for (aC = 0; aC < fc; aC++) y4[aC].button.style.width = (100 * y4[aC].button.offsetWidth / uJ).toFixed(2) + "%";
			else
				for (aC = 0; aC < fc; aC++) y4[aC].button.style.width = "auto";
			y7.vN && (y7.scrollLeft = y7.vN), uI || this.resize(!0)
		}, this.yI = function() {
			var yH = this.yE(),
				em = i.l;
			yJ.fillStyle = bE.pQ, yJ.fillRect(0, em * yH.u0, i.j, em * yH.yG)
		}, v4.style.position = "absolute", v4.style.top = "0", v4.style.left = "0", v4.style.width = "100%", v4.style.height = "100%", y6.style.position = "absolute", y6.style.top = "0", y6.style.left = "0", y6.style.width = "100%", y6.style
		.display = "flex", y6.style.backgroundColor = bE.pQ, y7.style.position = "absolute", y7.style.left = "0", y7.style.width = "100%", bD.sF.vA(y7), y8.style.height = y8.style.maxHeight = "100%", uh.style.position = "absolute", uh.style.width =
		"100%", uh.style.backgroundColor = bE.pQ,
		function() {
			for (var aC = 0; aC < y4.length; aC++) y4[aC].button.style.height = "100%", y4[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < y4.length; aC++) y8.appendChild(y4[aC].button);
	y6.appendChild(function() {
		var yD = document.createElement("h1");
		return yD.textContent = title, yD.style.margin = "auto", yD.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", yD.style.fontFamily = "Arial Black, system-ui", yD
	}()), y7.appendChild(y8), !1 !== y5 && (v4.appendChild(uh), v4.appendChild(y6), v4.appendChild(y7))
}

function te(yK, yL, yM, yN) {
	var self;
	this.tf = document.createElement("span"), (self = this).tf.textContent = yK, self.tf.style.color = bE.pU, self.tf.style.position = "absolute", self.tf.style.font = "inherit", yN ? self.tf.style.bottom = "0.06em" : self.tf.style.top = "0.12em",
		yM ? self.tf.style.left = "0.2em" : self.tf.style.right = "0.2em", self.tf.style.fontSize = "0.6em", self.tf.style.pointerEvents = "none", self.tf.style.whiteSpace = "pre", yL.style.position = "relative", yL.style.overflow = "hidden", yL
		.appendChild(self.tf)
}

function vC(yK, yL, yO, yP, yQ) {
	var self;
	this.tf = document.createElement("span"), this.resize = function() {
			this.tf.style.fontSize = ((yP - yO) * yL.offsetHeight).toFixed(1) + "px"
		}, (self = this).tf.textContent = yK, self.tf.style.color = bE.pU, self.tf.style.font = "inherit", self.tf.style.margin = "0.1em 0.6em", self.tf.style.pointerEvents = "none", yQ && (self.tf.style.fontWeight = "bold"), self.tf.style
		.whiteSpace = "nowrap", self.tf.style.display = "block", yL.appendChild(self.tf)
}

function yR(yS, yT, yU, oU) {
	var yV = document.createElement("textarea"),
		yW = (this.e = yV, !0);

	function yb() {
		yV.select(), document.execCommand("copy")
	}
	this.resize = function() {
			yT && bD.sF.sK(yV, 5)
		}, this.yX = function(eo) {
			yV.value = eo
		}, this.yY = function() {
			return yV.value
		}, this.yZ = function() {
			yV.select()
		}, this.clear = function() {
			yV.value = ""
		}, this.ya = function() {
			yW && navigator.clipboard ? (yV.select(), navigator.clipboard.writeText(yV.value).catch(function() {
				yW = !1, yb()
			})) : yb()
		}, yV.setAttribute("id", "textArea" + u.z.ub++), yV.setAttribute("autocomplete", "off"), yS && yV.setAttribute("placeholder", yS), yV.style.top = "0", yV.style.left = "0", yV.style.width = "100%", yV.style.height = "100%", yV.style
		.userSelect = "none", yV.style.outline = "none", yV.style.resize = "none", yV.style.border = "none", yV.style.color = bE.pU, yV.style.backgroundColor = bE.pN, oU ? (yV.style.fontSize = "1em", yV.rows = 6, yV.style.padding = "0.25em") : (yV
			.style.padding = "0.45em", yV.style.fontSize = "1.2em"), yU && yV.addEventListener("input", function(e) {
			yU(e)
		}), yV.addEventListener("focus", function() {
			i.uc++
		}), yV.addEventListener("blur", function() {
			i.uc--
		})
}

function dP() {
	this.sz = new yc, this.buffer = new yd, this.r0 = new ye, this.z = new yf, this.yg = new yh, this.dm = function() {
		this.buffer.dm(), (new yi).dm(), this.yg.dm(), this.z.yj()
	}
}

function yd() {
	function yk(aC, type, yq, e6) {
		bm.buffer.data.push({
			eL: aC,
			type: type || 0,
			value: yq || 0,
			yq: yq || 0,
			e6: e6 || 0
		})
	}

	function yl(aC, type, yq, e6) {
		bm.buffer.data.push({
			eL: aC,
			type: type,
			value: yq || "",
			yq: yq || "",
			e6: e6 || 0
		})
	}

	function ym(oJ) {
		for (var aC = bm.buffer.data.length; aC < oJ; aC++) bm.buffer.data.push(null)
	}
	this.data = [], this.dm = function() {
		yk(0, 1, 0, 5), yk(1, 1, 1), yk(2, 0), yl(3, 2), yk(4, 1), yl(5, 2, "system-ui", 2), yk(6, 0), yk(7, 0, 0), yk(8, 0), yk(9, 1, 1), yk(10, 1), yk(11, 1, 1), yl(12, 2, navigator.language), yk(13), yk(14), yk(15, 0, 1), yk(16, 0, 3), ym(
			100), yl(100, 2), yl(101, 2), yl(102, 2), yl(103, 2), yl(104, 2), yl(105, 2), yl(106, 2), yk(107), yk(108), yk(109), yl(110, 2), yk(111), yk(112), yk(113), yl(114, 2), yk(115), yl(116, 2), yk(117, 1), yl(118, 2, "", 2), yk(119, 1, 0,
				1), yl(120, 2), yk(121, 1, ~~(262144 * Math.random())), yl(122, 2, "Player " + Math.floor(1e3 * Math.random())), yk(123), yl(124), yk(125, 1), yl(126, 2), yk(127, 0, 1), yk(128), yk(129), yk(130), yk(131), yk(132), yl(133, 2), yk(
				134, 0, 5), yl(135, 2), yl(136, 2), yk(137), yk(138), yk(139), yk(140), yk(141), yk(142), yk(143), yk(144), yl(145, 2), yk(146), yk(147), yl(148, 2), yk(149), yk(150, 0, 1), yl(151, 2), yk(152, 0, 5), yk(153, 1), yk(154, 1), yl(
				155, 2), yl(156, 2), yk(157), yk(158), yk(159), yk(160), yl(161, 2), yk(162, 0, 1024), yl(163, 2, "0,0,0"), yl(164, 2, "100,100,100"), yl(165, 2, "30,30,30"), yl(166, 2, "70,70,70"), yl(167, 2, "100,100,100"), yl(168, 2,
				"85,85,85"), yl(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) yl(170 + aC, 2, "255,255,255");
		yl(174, 2), yl(175, 2), yk(176, 0, 200), ym(180), yk(180, 0), yk(181, 0), yk(182, 0, 1023), yl(183, 2), yk(184, 0, 100), yl(185, 2)
	}, this.r1 = function(eL, value) {
		this.data[eL].value = value
	}, this.yn = function(eL, value) {
		this.r1(eL, value);
		var value = String(value),
			fc = value.length;
		5e4 < fc ? console.log("storage value too large: index " + eL + " size " + fc) : (bm.sz.save(eL, value), bm.sz.save(eL, String(this.data[eL].e6), !0))
	}, this.yo = function(eL) {
		return Number(this.data[eL].value)
	}, this.yp = function(eL) {
		return String(this.data[eL].value)
	}
}

function yh() {
	var yr = [];

	function yu(uu) {
		yr.unshift(uu), bm.r0.r1(161, yr.join(";"))
	}

	function f8(uu) {
		for (var yw = yr, fc = yw.length, aC = 0; aC < fc; aC++)
			if (yw[aC] === uu) return yw.splice(aC, 1), bm.r0.r1(161, yw.join(";")), 1
	}
	this.dm = function() {
		var sA = bm.buffer.data[161].value;
		sA.length && (yr = sA.split(";"))
	}, this.get = function() {
		return yr
	}, this.ys = function() {
		return {
			oS: yr,
			value: 0
		}
	}, this.xG = function(uu) {
		return bD.sr.has(yr, uu)
	}, this.yt = function(uu) {
		return f8(uu) ? 0 : (yu(uu), 1)
	}, this.nN = function(uu) {
		f8(uu) && yu(uu)
	}, this.yv = function(eL) {
		eL < yr.length && (yr.splice(eL, 1), bm.r0.r1(161, yr.join(";")))
	}
}

function yc() {
	this.yx = function(eL, e6) {
		return Number(this.yy(eL, e6))
	}, this.yy = function(eL, e6) {
		var g4 = null;
		return 0 === a1.id ? a1.yz && (g4 = a1.yz.getItem((e6 ? "v" : "d") + eL)) : 1 === a1.id ? g4 = a1.z0.loadString((e6 ? 1e3 : 2e3) + eL) : 2 === a1.id && (g4 = a1.z1[(e6 ? "v" : "d") + eL]), g4 && 0 !== g4.length ? g4 : null
	}, this.z2 = function(fc, z3) {
		var h = [],
			z4 = z3 ? "e" : "l";
		if (0 === a1.id) {
			if (a1.yz)
				for (aC = 0; aC < fc; aC++) h.push(a1.yz.getItem(z4 + aC))
		} else if (1 === a1.id)
			for (var z5 = z3 ? 5e3 : 3e3, aC = 0; aC < fc; aC++) h.push(a1.z0.loadString(z5 + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fc; aC++) h.push(a1.z1[z4 + aC]);
		return h
	}, this.save = function(eL, value, e6) {
		var z6 = (e6 ? "v" : "d") + eL;
		if (0 === a1.id) {
			if (a1.yz && bm.buffer.data[140].value) try {
				a1.yz.setItem(z6, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.z0.saveString((e6 ? 1e3 : 2e3) + eL, value) : 2 === a1.id && (a1.z1[z6] = value, a1.z7.postMessage(z6 + " " + value))
	}, this.z8 = function(h, z3) {
		var fc = h.length,
			z4 = z3 ? "e" : "l";
		if (0 === a1.id) {
			if (a1.yz && bm.buffer.data[140].value) try {
				for (aC = 0; aC < fc; aC++) a1.yz.setItem(z4 + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var z5 = z3 ? 5e3 : 3e3, aC = 0; aC < fc; aC++) a1.z0.saveString(z5 + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fc; aC++) a1.z1[z4 + aC] = h[aC], a1.z7.postMessage(z4 + aC + " " + h[aC])
	}
}

function yi() {
	this.dm = function() {
		! function() {
			var data = bm.buffer.data;
			0 === data[2].e6 && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].yq = 1);
			0 === data[100].e6 && (data[100].value = data[100].yq = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.buffer.data,
			fc = data.length;
		for (aC = 0; aC < fc; aC++) {
			var zB = bm.sz.yx(aC, !0);
			data[aC] && data[aC].e6 === zB && (null === (zB = bm.sz.yy(aC)) ? data[aC].value = data[aC].yq : 2 === data[aC].type ? data[aC].value = zB : (zB = Number(zB), isNaN(zB) ? data[aC].value = data[aC].yq : data[aC].value = zB))
		}
	}
}

function yf() {
	function zG(h) {
		if (0 === h.length) bm.r0.r1(116, "");
		else {
			for (var zK = h[0], aC = 1; aC < h.length; aC++) zK += ";" + h[aC];
			bm.r0.r1(116, zK)
		}
	}
	this.zD = function() {
		bm.buffer.data[110].value.length && (bm.buffer.data[106].value = bm.buffer.data[110].value, bm.r0.r1(110, ""), this.zE())
	}, this.zE = function() {
		var h = bm.buffer.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.buffer.data[106].value), h.unshift(bm.buffer.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var zF = [], aC = 0; aC < h.length; aC += 2) zF.push(h[aC]);
		zG(h), bm.buffer.data[117].value = 0, bm.buffer.data[117].oS = zF
	}, this.zH = function(eL) {
		bm.buffer.data[117].oS.splice(eL, 1), bm.buffer.data[117].value = Math.min(eL, bm.buffer.data[117].oS.length - 1);
		var h = bm.buffer.data[116].value.split(";");
		h.splice(2 * eL, 2), zG(h)
	}, this.zI = function(uu, password) {
		var h = bm.buffer.data[116].value.split(";");
		h.length % 2 == 1 && h.pop();
		for (var aC = 0; aC < h.length; aC += 2)
			if (h[aC] === uu) return h[aC + 1] = password, void zG(h);
		h.push(uu, password), zG(h)
	}, this.zJ = function(eL) {
		var h = bm.buffer.data[116].value.split(";");
		return h.length < 2 * (eL + 1) ? null : {
			uu: h[2 * eL],
			password: h[2 * eL + 1]
		}
	}, this.zL = function() {
		var g4 = bO.io(bm.buffer.data[121].value, -1, 262143);
		return g4 = -1 === g4 ? ~~(262144 * Math.random()) : g4
	}, this.yj = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var zM, sA = h[aC].trim();
			0 !== sA.length && (zM = 0 <= (zM = sA.indexOf("=")) ? sA.substring(0, zM) : sA, document.cookie = zM + "=;expires=0;path=/", document.cookie = zM + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = zM +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function ye() {
	this.r1 = function(eL, value) {
		2 !== bm.buffer.data[eL].type && (value = Math.floor(value)), bm.buffer.data[eL].value !== value && (bm.buffer.yn(eL, value), 0 === eL ? (u.y(), bA.dm(), u.v(2)) : 1 === eL ? i.dx(1) : 2 === eL ? i.dx(0) : 5 === eL && (bD.sF.zN(), i.dx(
			0)))
	}, this.zO = function() {
		for (var data = bm.buffer.data, aC = 0; aC < 100; aC++) data[aC] && bm.buffer.yn(aC, data[aC].yq);
		bD.sF.zN(), i.dx(1)
	}, this.zP = function() {
		for (var data = bm.buffer.data, aC = 0; aC < data.length; aC++) data[aC] && bm.buffer.r1(aC, data[aC].yq)
	}, this.zQ = function() {
		for (var fw = bm.buffer, aC = 128; aC < 135; aC++) fw.yn(aC, fw.data[aC].yq)
	}, this.zR = function(data) {
		bm.r0.r1(109, data.uv), bm.r0.r1(107, data.zS), bm.r0.r1(108, data.zT), bm.r0.r1(112, data.zU), bm.r0.r1(111, data.zV), bm.r0.r1(113, data.zW), bm.r0.r1(135, data.zX), bm.r0.r1(136, data.zY), bm.r0.r1(137, data.zZ), bm.r0.r1(138, data
			.za), bm.r0.r1(139, data.zb), bm.r0.r1(141, data.zc), bm.r0.r1(142, data.zd), bm.r0.r1(143, data.ze), bm.r0.r1(144, data.zf)
	}
}

function c9() {
	this.f3 = new zg, this.zh = new zi, this.zj = new zk, this.dm = function() {
		this.f3.dm()
	}
}

function zi() {
	this.zl = function(size) {
		for (var zm = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(zm.re(16)));
		return h.join("")
	}, this.zn = function(sA) {
		return 20 < (sA = sA.trim()).length ? sA.substring(0, 20) : sA
	}
}

function zg() {
	var zo = new Uint8Array(78);
	this.dm = function() {
		var aC;
		for (zo[50] = 37, aC = 0; aC < 10; aC++) zo[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) zo[aC + 20] = aC + 11, zo[aC + 52] = aC + 38
	}, this.zp = function(sA) {
		return sA || (console.log("validateString error: " + sA), sA = ""), sA.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.zq = function(sA, size) {
		if ((sA = this.zp(sA)).length > size) return sA.substring(0, size);
		for (; sA.length < size;) sA = "-" + sA;
		return sA
	}, this.zr = function(sA) {
		for (var zs = zo, fc = sA.length, h = new Uint8Array(fc), aC = 0; aC < fc; aC++) h[aC] = zs[sA.charCodeAt(aC) - 45];
		return h
	}, this.zt = function(zu) {
		bG.a8(6 * zu.length), this.zv(zu), bK.dm(bG.aD)
	}, this.zv = function(zu) {
		for (var fc = zu.length, j = bG, aC = 0; aC < fc; aC++) j.a9(6, zu[aC])
	}, this.zw = function(sA) {
		this.zv(this.zr(sA))
	}, this.zx = function(sA, size) {
		this.zv(this.zr(this.zq(sA, size)))
	}, this.f4 = function(sA, size) {
		for (var h = this.zr(this.zq(sA, size)), g4 = 0, oD = 1, aC = h.length - 1; 0 <= aC; aC--) g4 += oD * h[aC], oD *= 64;
		return g4
	}
}

function zy() {
	var j, k, zz;

	function a0O(i5, ff, a0M, a04, a0H) {
		ff = a0N(i5, ff + 1 + 2 * a04 & 3);
		! function(i5, lb) {
			return 1 < Math.abs(i5 % j - lb % j) || 1 < Math.abs(a0R(i5) - a0R(lb))
		}(i5, ff) && 0 === a0H[ff << 2] && (a0H[ff << 2] = a0M)
	}

	function a0R(hA) {
		return Math.floor((hA + .5) / j) % k
	}

	function a0N(hA, ff) {
		return hA + zz[ff]
	}
	this.a00 = function(sA) {
		var aC, a01, fc, a02, zm = bK;
		for (bJ.f3.zt(bJ.f3.zr(sA)), bV.wg.a05[bV.fI].j = bV.fn = j = zm.re(12), bV.wg.a05[bV.fI].k = bV.fo = k = zm.re(12), zz = [-j, -1, j, 1], bV.a0E = document.createElement("canvas"), bV.a0E.width = bV.fn, bV.a0E.height = bV.fo, bV.a0A = bV
			.a0E.getContext("2d", {
				alpha: !1
			}), bV.a0B = bV.a0F = null, bV.a0B = bV.a0A.getImageData(0, 0, bV.fn, bV.fo), bV.a0F = bV.a0B.data, bD.sr.a0G(bV.a0F), fc = zm.re(12), a01 = zm.re(5), a02 = a07(j * k - 1), aC = 0; aC < fc; aC++) ! function(lt, hA, a03, a04) {
			var aC, ff, zm = bK,
				a0H = bV.a0F,
				a0I = hA,
				a0J = hA,
				a0K = 0,
				a0L = 1 + a03,
				a0M = 2 - a03;
			for (a0H[hA << 2] = a0L, aC = 0; aC < lt; aC++) ff = zm.re(2), hA = a0N(hA, ff), a0H[hA << 2] === a0L ? a0K % 2 == 1 && a0O(a0J, a0K + 2 * a04 + 3, a0M, a04, a0H) : a0H[hA << 2] = a0L, a0O(hA, ff, a0M, a04, a0H), a0O(a0J, ff, a0M,
				a04, a0H), a0J = hA, a0K = ff;
			a0N(hA, 0) === a0I ? (a0O(hA, 0, a0M, a04, a0H), a0O(a0I, 0, a0M, a04, a0H)) : a0N(hA, 1) === a0I && (a0O(hA, 0, a0M, a04, a0H), a0O(a0I, 2, a0M, a04, a0H));
			0 === lt && (a0O(a0I, 0, a0M, a04, a0H), a0O(a0I, 2, a0M, a04, a0H))
		}(zm.re(a01), zm.re(a02), 1 === zm.re(1), 1 === zm.re(1));
		var fj, fl, iV, a0S, a0T, a0U, a0H = bV.a0F,
			a0V = !0,
			a0W = bV.wg.a05[bV.fI].a0W,
			a0X = bV.wg.a05[bV.fI].a0X;
		for (fl = 0; fl < k; fl++)
			for (a0S = !0, a0T = a0V, fj = a0U = 0; fj < j; fj++) iV = 4 * fl * j + 4 * fj, a0U <= fj && 0 < a0H[iV] && (a0T = 2 === a0H[iV], a0S) && (a0S = !1, a0T !== a0V) ? (a0V = a0T, a0U = fj + 1, fj = -1) : (a0T ? (a0H[iV] = a0X[0], a0H[1 +
				iV] = a0X[1], a0H[2 + iV] = a0X[2]) : (a0H[iV] = a0W[0], a0H[1 + iV] = a0W[1], a0H[2 + iV] = a0W[2]), a0H[3 + iV] = 255);
		bV.a0A.putImageData(bV.a0B, 0, 0), bV.a0C = !0, bV.a0D.dm(), bi.du = !0
	}
}

function zk() {
	this.a00 = function(a0Y) {
		for (var zm = bK, size = zm.re(a0Y), a0Z = 7 + 9 * zm.re(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(zm.re(a0Z)));
		return h.join("")
	}
}

function cE() {
	var uP, uQ, a0a, a0b, a0c, a0d, a0e, a0f, a0g, a0h;

	function a0j() {
		var a0m = aE.a0m;
		for (a0g = a0m; a0g < aE.fZ; a0g++) a0i();
		for (a0g = aE.i1 ? aE.ky : 0; a0g < a0m; a0g++) {
			if (!a0n()) {
				for (var fw = aE.a0r = a0g; fw < a0m; fw++) a0g = fw, a0i();
				return
			}
			a0q(a0d + uP * a0c + bO.g3(a0c, 2), a0e + uQ * a0c + bO.g3(a0c, 2))
		}
	}

	function a1J(player) {
		for (var jW = ah.jW, jY = ah.jY, jX = ah.jX, jZ = ah.jZ, fl = jY[player]; fl <= jZ[player]; fl++)
			for (var fj = jW[player]; fj <= jX[player]; fj++) {
				var fG = ad.a1K(fj, fl);
				ad.hC(fG) && (ad.k9(fG) ? ad.h7(fG, player) : ad.a1L(fG, player))
			}
	}

	function a1I(h, vE, vF) {
		var ed = h[vE];
		h[vE] = h[vF], h[vF] = ed
	}

	function a0n() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (uP = bO.g3(a0a * az.random(), az.value(100)), uQ = bO.g3(a0b * az.random(), az.value(100)), a1Q()) return 1;
			return
		}() || function() {
			var j0, j3, fv, a0p, fw, a0o;
			for (j0 = bO.g3(a0a * az.random(), az.value(100)), j3 = bO.g3(a0b * az.random(), az.value(100)), fv = 40; 1 <= fv; fv--)
				for (a0p = a0b - fv; 0 <= a0p; a0p -= 40)
					for (uQ = (a0p + j3) % a0b, fw = 40; 1 <= fw; fw--)
						for (a0o = a0a - fw; 0 <= a0o; a0o -= 40)
							if (uP = (a0o + j0) % a0a, a1Q()) return 1;
			return
		}()
	}

	function a1Q() {
		for (var hA, a1S, gap = bO.g3(a0c - a0f, 2), a1T = a0e + uQ * a0c + gap, a1U = a0d + uP * a0c + gap, a1R = a1T + a0f - 1; a1T <= a1R; a1R--)
			for (a1S = a1U + a0f - 1; a1U <= a1S; a1S--)
				if (hA = ad.a1K(a1S, a1R), !ad.fX(hA) || ad.k9(hA)) return;
		return 1
	}

	function a0q(a0o, a0p) {
		a0i(), a1V(a0o - 2, a0p - 2)
	}

	function a0i() {
		ah.na[a0g] = 0, ah.hQ[a0g] = ah.a1G[a0g] = 0, ah.h4[a0g] = [], ah.hI[a0g] = [], ah.hJ[a0g] = [], ah.g1[a0g] = [], ah.jW[a0g] = ah.jY[a0g] = ah.jX[a0g] = ah.jZ[a0g] = 0
	}

	function a1V(a0o, a0p) {
		var hA, aC, a1W, a1X;
		for (ah.na[a0g] = 1, ah.jW[a0g] = a0o + 10, ah.jY[a0g] = a0p + 10, ah.jZ[a0g] = ah.jX[a0g] = 0, a1W = a0o; a1W < a0o + 4; a1W++)
			for (a1X = a0p; a1X < a0p + 4; a1X++)(a0o < a1W && a1W < a0o + 3 || a0p < a1X && a1X < a0p + 3) && (hA = ad.a1K(a1W, a1X), ad.fX(hA)) && (ah.jW[a0g] = Math.min(a1W, ah.jW[a0g]), ah.jX[a0g] = Math.max(a1W, ah.jX[a0g]), ah.jY[a0g] = Math
				.min(a1X, ah.jY[a0g]), ah.jZ[a0g] = Math.max(a1X, ah.jZ[a0g]), a0h[ah.hQ[a0g]] = hA, ah.hQ[a0g]++, ad.a1L(hA, a0g));
		for (ah.a1G[a0g] = ah.hQ[a0g], aC = ah.hQ[a0g] - 1; 0 <= aC; aC--) ad.a1Y(a0h[aC], a0g) ? (ad.h7(a0h[aC], a0g), ah.hI[a0g].push(a0h[aC])) : ad.a1Z(a0h[aC]) ? (ad.h7(a0h[aC], a0g), ah.hJ[a0g].push(a0h[aC])) : ad.a1a(a0h[aC]) && (ad.h7(a0h[aC],
			a0g), ah.g1[a0g].push(a0h[aC]))
	}
	this.dm = function() {
		if (a0h = new Array(12), a0f = 6, a0c = 10, a0a = bO.g3(bV.fn, a0c), a0b = bO.g3(bV.fo, a0c), a0d = bO.g3(bV.fn - a0c * a0a, 2), a0e = bO.g3(bV.fo - a0c * a0b, 2), aE.i1)
			for (var aC = 0; aC < aE.ky; aC++) a0g = aC, a0i(), ah.na[a0g] = 1;
		(0 === aE.data.spawningType ? a0j : 1 === aE.data.spawningType ? (a0j(), function() {
			var a0s = aE.a0t;
			aE.a0u || a0s++;
			if (!(a0s < 3)) {
				for (var data = aE.data, kE = (aE.i1 ? aE.ky : 0) + data.teamPlayerCount[0], oJ = aE.a0r, a0v = new Uint32Array(a0s), a0w = new Uint32Array(a0s), a0x = new Uint16Array(a0s), a0y = new Uint16Array(a0s), fa = bj.fa, jW = ah
						.jW, jY = ah.jY, jX = ah.jX, jZ = ah.jZ, gH = bR.gH, gI = bR.gI, aC = kE; aC < oJ; aC++) gH[aC] = jW[aC] + jX[aC] >> 1, gI[aC] = jY[aC] + jZ[aC] >> 1;
				for (aC = kE; aC < oJ; aC++) {
					var id = fa[aC];
					a0v[id] += gH[aC], a0w[id] += gI[aC]
				}
				var lL = bj.lL;
				for (aC = 1; aC < a0s; aC++) {
					var h5 = Math.max(data.teamPlayerCount[lL[aC]], 1);
					a0x[aC] = bO.g3(a0v[aC], h5), a0y[aC] = bO.g3(a0w[aC], h5)
				}
				var a0z = bj.a0z,
					a10 = bj.a10,
					a11 = bj.a11,
					gG = bR.gG;
				for (aC = 0; aC < 512; aC++) gG[aC] = aC;
				for (var eK = 0; eK < 2 + (4 <= a0s); eK++)
					for (aC = kE; aC < oJ; aC++) {
						for (var i5 = aC, a12 = gG[i5], a13 = 1, fs = bO.a14(gH[a12] - a0x[1], gI[a12] - a0y[1]), fv = 2; fv < a0s; fv++) {
							var a15 = bO.a14(gH[a12] - a0x[fv], gI[a12] - a0y[fv]);
							a15 < fs && (fs = a15, a13 = fv)
						}
						var a16 = fa[i5];
						if (a13 !== a16) {
							if (2 === eK && 4 <= a0s) {
								var a17 = Math.max((a13 + 1) % a0s, 1),
									a18 = bO.a14(gH[a12] - a0x[a17], gI[a12] - a0y[a17]);
								for (fv = 1; fv < a0s; fv++) a15 = bO.a14(gH[a12] - a0x[fv], gI[a12] - a0y[fv]), fs < a15 && a15 < a18 && (a18 = a15, a17 = fv);
								a17 !== a16 && bO.a14(a0x[a16] - a0x[a17], a0y[a16] - a0y[a17]) < bO.a14(a0x[a16] - a0x[a13], a0y[a16] - a0y[a13]) && (a13 = a17)
							}
							var a19 = lL[a13],
								a1A = a10[a19] + (aE.i1 ? 0 : a11[a19]),
								lb = a0z[a1A],
								a1B = gG[lb],
								a1C = a10[a19 + 1];
							fs = bO.a14(gH[a1B] - a0x[a16], gI[a1B] - a0y[a16]);
							for (var em = a1A + 1; em < a1C; em++) {
								var a1D = a0z[em],
									a1E = gG[a1D];
								(a15 = bO.a14(gH[a1E] - a0x[a16], gI[a1E] - a0y[a16])) < fs && (fs = a15, lb = a1D)
							}
							lb < kE || oJ <= lb || (a1B = gG[lb], a0v[a16] += gH[a1B] - gH[a12], a0w[a16] += gI[a1B] - gI[a12], a0v[a13] += gH[a12] - gH[a1B], a0w[a13] += gI[a12] - gI[a1B], h5 = data.teamPlayerCount[lL[a16]], a0x[a16] =
								bO.g3(a0v[a16], h5), a0y[a16] = bO.g3(a0w[a16], h5), h5 = data.teamPlayerCount[a19], a0x[a13] = bO.g3(a0v[a13], h5), a0y[a13] = bO.g3(a0w[a13], h5), gG[i5] = a1B, gG[lb] = a12)
						}
					}! function() {
						for (var gG = bR.gG, jW = ah.jW, jY = ah.jY, jX = ah.jX, jZ = ah.jZ, hQ = ah.hQ, a1G = ah.a1G, hI = ah.hI, hJ = ah.hJ, g1 = ah.g1, aC = 0; aC < 512; aC++) {
							var a1H = gG[aC];
							if (a1H !== aC) {
								a1I(jW, aC, a1H), a1I(jY, aC, a1H), a1I(jX, aC, a1H), a1I(jZ, aC, a1H), a1I(hQ, aC, a1H), a1I(a1G, aC, a1H), a1I(hI, aC, a1H), a1I(hJ, aC, a1H), a1I(g1, aC, a1H), a1J(aC), a1J(a1H), gG[aC] = aC;
								for (var k = a1H, hB = gG[k]; hB !== aC;) hB = gG[k = hB];
								gG[k] = a1H
							}
						}
					}()
			}
		}) : function() {
			var a0m = aE.a0m;
			for (a0g = a0m; a0g < aE.fZ; a0g++) a0i();
			for (a0g = aE.i1 ? aE.ky : 0; a0g < a0m; a0g++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							a0o = spawningData[2 * a0g] + 1,
							spawningData = spawningData[2 * a0g + 1] + 1;
						if (3 < a0o && a0o < bV.fn - 5 && 3 < spawningData && spawningData < bV.fo - 5 && ad.fX(ad.a1K(a0o, spawningData)) && function(a0o, a0p) {
								var hA, a1S, a1R;
								for (a1R = a0p; a0p - 6 < a1R; a1R--)
									for (a1S = a0o; a0o - 6 < a1S; a1S--)
										if (hA = ad.a1K(a1S, a1R), ad.k9(hA)) return;
								return 1
							}(a0o + 3, spawningData + 3)) return a0q(a0o + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a0n()) {
						for (var fw = aE.a0r = a0g; fw < a0m; fw++) a0g = fw, a0i();
						return
					}
					var a0o = a0d + uP * a0c + bO.g3(a0c, 2),
						a0p = a0e + uQ * a0c + bO.g3(a0c, 2);
					a0q(a0o, a0p)
				}
		})(), bg.nW[7] = ah.hQ[aE.fM]
	}, this.a1b = function(k7, a1c, a1d) {
		var aC, a0o, a0p, hA, uP, uQ;
		for (a0g = k7, aC = 0; aC < 20; aC++)
			for (a0o = a1c + aC; a1c - aC <= a0o; a0o--)
				for (a0p = a1d + aC; a1d - aC <= a0p; a0p--)
					if ((a0o === a1c + aC || a0o === a1c - aC || a0p === a1d + aC || a0p === a1d - aC) && 3 < a0o && a0o < bV.fn - 5 && 3 < a0p && a0p < bV.fo - 5 && ad.fX(ad.a1K(a0o, a0p)) && function(a0o, a0p) {
							var hA, a1S, a1R;
							for (a1R = a0p; a0p - 6 < a1R; a1R--)
								for (a1S = a0o; a0o - 6 < a1S; a1S--)
									if (hA = ad.a1K(a1S, a1R), ad.k9(hA) && !ad.a1j(a0g, hA)) return;
							return 1
						}(a0o + 3, a0p + 3)) {
						if (0 < ah.hQ[a0g]) {
							for (uQ = uP = hA = void 0, uP = ah.jX[a0g]; uP >= ah.jW[a0g]; uP--)
								for (uQ = ah.jZ[a0g]; uQ >= ah.jY[a0g]; uQ--) hA = 4 * (uQ * bV.fn + uP), ad.a1g(a0g, hA) && (ad.a1h(hA), ah.hQ[a0g]--);
							a0i()
						}
						return a1V(a0o - 1, a0p - 1), !0
					} return !1
	}, this.a1i = function(k7) {
		a0g = k7, a0n() ? a0q(a0d + uP * a0c + bO.g3(a0c, 2), a0e + uQ * a0c + bO.g3(a0c, 2)) : a0i()
	}
}

function a1k() {
	au.a1l(), yJ.setTransform(ir, 0, 0, ir, 0, 0), yJ.imageSmoothingEnabled = ir < 3, yJ.drawImage(bV.a0E, aT.a1m(), aT.a1n()), bS.a1o.yI(), yJ.drawImage(a1p, aT.a1m(), aT.a1n()), au.yI(), bQ.yI(), ag.yI(), (aE.o4 ? (bk.yI(), bF) : (aO.yI(), aW.yI(),
		aS.yI(), bF.yI(), ax.yI(), aX.yI(), aT.yI(), aR.yI(), bk.yI(), aV.yI(), aQ.yI(), aN.yI(), aM.yI(), aY.yI(), bh.yI(), aw)).yI(), u.yI()
}

function a1q(p0, j, k) {
	p0.clearRect(0, 0, j, k), p0.fillStyle = bE.pR, p0.fillRect(0, 0, j, k)
}

function a1r(p0, j, k, a1s) {
	p0.fillStyle = bE.pU, p0.fillRect(0, 0, j, a1s), p0.fillRect(0, 0, a1s, k), p0.fillRect(j - a1s, 0, a1s, k), p0.fillRect(0, k - a1s, j, a1s)
}

function a1t(p0, fj, fl, iZ, a1s, hA, a1u) {
	p0.fillStyle = bE.pU;
	var hA = Math.floor(iZ * hA),
		v2 = (hA += (hA - a1s) % 2, Math.floor((hA - a1s) / 2)),
		iZ = Math.floor((iZ - hA) / 2);
	p0.fillRect(fj + iZ, fl + iZ + v2, hA, a1s), a1u && p0.fillRect(fj + iZ + v2, fl + iZ, a1s, hA)
}

function a1w() {
	this.dm = function() {
		8 === aE.lG && aO.a1x()
	}, this.a1y = function(a1z) {
		var elo = aE.data.elo,
			kD = (elo[a1z] - elo[1 - a1z]) / 10,
			kD = 8 / (1 + Math.pow(2, kD / 32)),
			kD = Math.floor(10 * kD + .5),
			a21 = elo[a1z] + kD,
			a22 = this.a23(a21),
			elo = this.a23(elo[1 - a1z] - kD),
			kD = (0 === a1z ? aO.a25(a22, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.a25(elo, a22, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a21 * bO.sqrt(a21) >> 8),
			elo = ((1 + aE.a28) * kD / 100).toFixed(2);
		a1z !== aE.fM || aE.hm ? aO.a29(640, L(31, [ah.a2A[a1z], elo]), 40, 0, bE.pU, bE.pR, -1, !1) : aO.a29(640, L(30, [elo]), 40, 0, bE.pU, bE.pR, -1, !1)
	}, this.a23 = function(elo) {
		return 16e3 === (elo = bO.io(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function ck() {
	this.tx = new a2B, this.a0H = new a2C
}

function a2C() {
	this.iP = !1;
	this.a2G = [], this.a2H = 100;
	var o1, o2, gap, iZ, a2D, a2F, a2I = 0,
		a2J = new Array(9),
		a2K = [],
		a2L = [],
		a2M = 0,
		a2N = 0,
		a2O = 0,
		a2P = 0;

	function a2b() {
		a2J.sort(function(fv, fw) {
			return fw.l3 - fv.l3
		});
		for (var sA = "" + a2J[0].rF, aC = 1; aC < 9; aC++) sA += "," + a2J[aC].rF;
		for (aC = 0; aC < 9; aC++) sA += "," + a2J[aC].l3;
		bm.buffer.yn(120, sA)
	}
	this.dm = function() {
		for (var a2Q = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a2Q.length; aC++) {
			var color = 6 === a2Q[aC] ? bE.pu : bE.pS;
			this.a2G.push(bD.canvas.a2R(ac.get(3), a2Q[aC], color))
		}
		for (aC = 0; aC < ak.tx.a2S; aC++) a2L.push(ak.tx.a2T - ak.tx.a2S + aC);
		for (aC = 0; aC < ak.tx.a2U; aC++) a2L.push(ak.tx.a2V + aC);
		var a2W = ak.tx.a2X(bN.a2W);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a2W.slice(), aC = 0; aC < a2W.length; aC++) a2L.push(a2W[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a2J[q] = {
						rF: isNaN(qcode) ? 1015 + q : qcode,
						l3: 0
					}
				} else {
					var aC, h = bm.buffer.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) a2J[aC] = {
							rF: 1015 + aC,
							l3: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var g4 = parseInt(h[aC]),
								em = (g4 = 0 <= g4 && g4 < ak.tx.a2T ? g4 : 0, parseInt(h[aC + 9]));
							em = 0 <= em && em < 1e3 ? em : 0, a2J[aC] = {
								rF: g4,
								l3: em
							}
						}
				}
		}()
	}, this.show = function(mD, mE, a2c) {
		var aC;
		if (a2M = mD, a2N = mE, a2I = a2c || 0, this.iP = !0, a2K = [], 0 === a2I)
			for (aC = 0; aC < 9; aC++) a2K.push(a2J[aC].rF);
		else {
			var fw = 49 * a2I,
				a2c = fw - 49;
			for (a2c >= a2L.length && (a2I = 1, a2c = 0, fw = 49), aC = a2c = (fw = Math.min(fw, a2L.length)) - 49; aC < fw; aC++) a2K.push(a2L[aC])
		}
		a2K.push(1024);
		a2c = a2K.length, iZ = Math.floor((a1.a2.ip() ? .075 : .0468) * i.iq), gap = Math.floor(iZ / 3), (a2O = 10 * (a2D = iZ + gap)) > i.j && (a2O = i.j, gap = (a2D = a2O / 10) - (iZ = 3 * a2D / 4)), a2F = bO.g3(a2c, 10) + !!(a2c % 10), (a2P =
			a2F * a2D) > i.k && (a2P = i.k, gap = (a2D = a2P / a2F) - (iZ = 3 * a2D / 4)), a2c = .5 * gap;
		o1 = Math.min(Math.max(mD - .5 * a2O + a2c, a2c), i.j - a2O + a2c), o2 = Math.min(Math.max(mE - .5 * a2P + a2c, a2c), i.k - a2P + a2c)
	}, this.hq = function(mD, mE, player) {
		if (!this.iP) return !1;
		if (this.a2e(mD, mE)) {
			mD = bO.io(bO.g3(mD - o1 + .5 * gap, a2D), 0, 9);
			if ((mD += 10 * bO.io(bO.g3(mE - o2 + .5 * gap, a2D), 0, 9)) >= a2K.length) return aM.ty(), !0;
			mE = a2K[mD];
			if (1024 === mE) return this.show(a2M, a2N, a2I + 1), !0;
			! function(rF) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) a2J[aC].l3 = Math.floor(.99 * a2J[aC].l3);
					for (aC = 0; aC < 9; aC++)
						if (rF === a2J[aC].rF) return a2J[aC].l3 = Math.min(a2J[aC].l3 + 30, 999), a2b();
					a2J.splice(5, 0, {
						rF: rF,
						l3: Math.max(a2J[4].l3, 30)
					}), a2J.pop(), a2b()
				}
			}(mE), player === aE.fM ? bB.i3.rE(mE) : bB.gy.rT(mE, player)
		}
		return aM.ty(), !0
	}, this.a2e = function(mD, mE) {
		return !(mD < o1 - .5 * gap || mE < o2 - .5 * gap || o1 + a2O - .5 * gap <= mD || o2 + a2P - .5 * gap <= mE)
	}, this.yI = function() {
		yJ.fillStyle = bE.pR, yJ.fillRect(o1 - .5 * gap, o2 - .5 * gap, a2O, a2P);
		for (var iV = .5 * bf.a2f, fc = (yJ.lineWidth = bf.a2f, yJ.strokeStyle = yJ.fillStyle = bE.pU, yJ.strokeRect(o1 - .5 * gap + iV, o2 - .5 * gap + iV, a2O - 2 * iV, a2P - 2 * iV), yJ.imageSmoothingEnabled = !0, a2K.length), aC = 0; aC <
			fc; aC++) this.a2g(a2K[aC], yJ, o1 + aC % 10 * a2D, o2 + bO.g3(aC, 10) * a2D, iZ);
		yJ.imageSmoothingEnabled = !1
	}, this.a2g = function(rF, ih, fj, fl, iZ) {
		var fG;
		rF >= 1024 - ak.tx.a2S ? (fG = iZ / this.a2H, ih.setTransform(fG, 0, 0, fG, fj, fl), ih.drawImage(this.a2G[rF - 1024 + ak.tx.a2S], 0, 0), ih.setTransform(1, 0, 0, 1, 0, 0)) : (bD.sF.textAlign(ih, 1), bD.sF.textBaseline(ih, 1), ih.font =
			bD.sF.sI(0, .89 * iZ), ih.fillText(ak.tx.a2h(rF), fj + .5 * iZ, fl + (.35 - bD.sF.a2i + .56) * iZ))
	}
}

function a2B() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a2S = 13, this.a2U = this.emojis.length, this.a2V = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a2V, this.a2T = 1024, this.a2j = this.emojis.indexOf(
		"💀"), this.a2k = this.a2j + 1, this.a2l = this.emojis.indexOf("🥇"), this.a2m = this.emojis.indexOf("😊"), this.a2h = function(g4) {
		return g4 < this.a2V ? String.fromCharCode(55356, 56806 + bO.g3(g4, 26), 55356, 56806 + g4 % 26) : this.emojis[Math.min(g4 - this.a2V, this.a2U - 1)]
	}, this.a2X = function(sA) {
		for (var fc = sA.length - 2, h = [], aC = 0; aC < fc; aC++) {
			var a2n = sA.charCodeAt(aC) - 56806,
				a2o = sA.charCodeAt(aC + 2) - 56806;
			0 <= a2n && a2n < 26 && 0 <= a2o && a2o < 26 && (h.push(26 * a2n + a2o), aC += 3)
		}
		return h
	}, this.a2p = function(g4) {
		return g4 < this.a2V
	}, this.a2q = function(g4) {
		return g4 >= 1024 - this.a2S
	}, this.a2r = function(g4) {
		return g4 >= this.a2V && g4 < this.a2V + this.a2k
	}
}

function c8() {
	this.f3 = new a2s, this.zh = new a2t, this.zj = new a2u, this.dm = function() {
		this.f3.dm()
	}
}

function a2t() {
	this.zw = function(sA) {
		for (var fc = sA.length, j = bG, aC = 0; aC < fc; aC++) j.a9(16, sA.charCodeAt(aC))
	}
}

function a2s() {
	var a2v = new Uint8Array(64);
	this.dm = function() {
		var aC;
		for (a2v[0] = 45, a2v[37] = 95, aC = 0; aC < 10; aC++) a2v[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a2v[aC + 11] = 65 + aC, a2v[aC + 38] = 97 + aC
	}, this.uz = function(a2w) {
		for (var zm = bK, zu = new Uint8Array(a2w), aC = 0; aC < a2w; aC++) zu[aC] = zm.re(6);
		return zu
	}, this.uy = function(zu) {
		for (var fc = zu.length, a2x = a2v, h = [], aC = 0; aC < fc; aC++) h.push(String.fromCharCode(a2x[zu[aC]]));
		return h.join("")
	}, this.a2y = function(value, a2z) {
		for (var a2x = a2v, h = [], aC = 0; aC < a2z; aC++) h.push(String.fromCharCode(a2x[value >> 6 * (a2z - 1 - aC) & 63]));
		return h.join("")
	}
}

function cG() {
	var a30, a31, a32;
	a30 = [32, 65, 191, 913, 931], a31 = [64, 127, 688, 930, 1155], a32 = new Array(a30.length + 1);
	for (var aC = 0; aC < a32.length; aC++) {
		a32[aC] = 0;
		for (var fv = aC - 1; 0 <= fv; fv--) a32[aC] += a31[fv] - a30[fv]
	}

	function a38(em) {
		for (var aC = a30.length - 1; 0 <= aC; aC--)
			if (em >= a30[aC] && em < a31[aC]) return aC;
		return -1
	}
	this.zn = function(sA) {
		return 0 !== (sA = sA.trim()).indexOf("Bot ") && 0 !== sA.indexOf("[Bot] ") && function(sA, a35, a36) {
			var fc = (sA = sA.trim()).length;
			if (fc < a35 || a36 < fc) return !1;
			for (var em, a37 = 0, aC = 0; aC < fc; aC++)
				if (em = sA.charCodeAt(aC), a37 += 65 <= em && em <= 90 || 1040 <= em && em <= 1071 ? 1 : 0, -1 === a38(em)) return !1;
			if (3 < a37 && a37 > Math.floor(fc / 2)) return !1;
			return !0
		}(sA, 3, 20)
	}, this.a39 = function(sA) {
		for (var fc = (sA = sA.trim()).length, h = [], aC = 0; aC < fc; aC++) {
			var em, hA = a38(em = sA.charCodeAt(aC));
			h.push(a32[hA] + em - a30[hA])
		}
		return h
	}, this.a00 = function(h) {
		for (var em, fw, sA = "", fc = h.length, aC = 0; aC < fc; aC++)
			for (fw = 1; fw < a32.length; fw++)
				if (h[aC] < a32[fw]) {
					em = a30[fw - 1] + h[aC] - a32[fw - 1], sA += String.fromCharCode(em);
					break
				} return sA
	}, this.a3A = function(sA) {
		for (var h = this.a39(sA), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a3B = function(sA) {
		for (var h = new Array(Math.floor(sA.length / 3)), aC = 0; aC < sA.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(sA.substring(aC, aC + 3));
		return this.a00(h)
	}, this.a3C = function(sA) {
		for (var g4, h = [sA.length], aC = 0; aC < sA.length; aC++) h[aC] = sA.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < sA.length; aC++) aC === sA.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (g4 = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(g4 + (g4 < 26 ? 65 : 71)), aC++);
		return result
	}, this.a3D = function(sA) {
		for (var em, result = "", aC = 0; aC < sA.length; aC++) 48 <= (em = sA.charCodeAt(aC)) && em < 58 ? result += String.fromCharCode(em) : 65 <= em && em < 75 ? result += "0" + (em - 65).toString() : 75 <= em && em < 91 ? result += (em - 65)
			.toString() : 97 <= em && em < 123 && (result += (em - 71).toString());
		return result
	}, this.a3E = function(sA) {
		for (var fc = sA.length, h = [], aC = 0; aC < fc; aC++)(em = sA.charCodeAt(aC)) < 58 ? h.push(sA[aC]) : (em -= em < 91 ? 65 : 71, h.push(String(bO.g3(em, 10))), h.push(String(em - 10 * bO.g3(em, 10))));
		var fc = h.length - 2,
			em = 0,
			zu = [];
		for (aC = 0; aC < fc; aC += 3) zu[em++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return zu
	}, this.a3F = function() {
		for (var eK, a3G = "", aC = 0; aC < 6; aC++) eK = 48 + az.random() % 36, eK += 58 <= eK ? 39 : 0, a3G += String.fromCharCode(eK);
		return a3G
	}
}

function a2u() {
	this.a39 = function(sA, a0Y, a3H) {
		for (var a3I = [], fc = sA.length, max = 0, aC = 0; aC < fc; aC++) {
			var g4 = sA.charCodeAt(aC);
			a3I.push(g4), max = Math.max(max, g4)
		}
		var a0Z = max < 128 ? 7 : 16;
		for (a3H.a9(a0Y, fc), a3H.a9(1, +(16 == a0Z)), aC = 0; aC < fc; aC++) a3H.a9(a0Z, a3I[aC])
	}
}

function dH() {
	this.a3J = new a3K, this.result = new a3L, this.a3M = new a3N, this.nB = new a3O, this.a3P = new a3Q, this.a3R = new a3S, this.dm = function() {
		this.result.dm()
	}
}

function a3N() {
	this.a3T = function() {
		for (var fc = am.lU, wP = am.lZ, a3U = [], aC = 0; aC < fc; aC++) {
			var hA = wP[aC];
			bD.gy.a3V(hA) && a3U.push(hA)
		}
		return a3U
	}, this.a3W = function() {
		if (0 === bj.lL[aE.a3X]) return this.a3Y();
		bk.kz(aE.a3X);
		for (var a3U = [], fc = bR.g7[0], gG = bR.gG, aC = 0; aC < fc; aC++) {
			var hA = gG[aC];
			bD.gy.a3V(hA) && a3U.push(hA)
		}
		return a3U
	}, this.a3Y = function() {
		var hA = mZ[0];
		return bD.gy.a3V(hA) ? [hA] : []
	}, this.a3Z = function(a3U) {
		for (var fc = a3U.length, ed = 0, hQ = ah.hQ, aC = 0; aC < fc; aC++) ed += hQ[a3U[aC]];
		return ed
	}
}

function a3K() {
	function a3b() {
		if (2 === aE.a3f) return 1;
		ax.a3g(), aE.a3f = 2, aE.a3h = aE.a3i
	}

	function a3d() {
		bU.a3P.a3j(), aY.show(1 === aE.a3k, !1, 2 === aE.a3k), bU.result.a3j(), bU.a3R.eh(), bU.nB.eh(), bU.nB.a3l(), aO.a3m(!0), aO.a3n(247), aO.a3n(956), aO.a3n(957), aW.nM(!0), aX.nM(!0), ax.nM(), bF.a3o(), aE.hl && bi.a3p.a3q(), bi.du = !0, be
			.a3r(), a1.a2.setState(0)
	}
	this.a3a = function() {
		a3b() || (aE.a3c = 2, a3d())
	}, this.a3e = function() {
		a3b() || (aE.a3c = 1, a3d())
	}
}

function a3O() {
	var a3s = 0;
	this.eh = function() {
		var a40;
		2 === aE.a3c ? (aO.a3t(0, 59), aI.oA(2700)) : aE.lG < 7 ? (a40 = bj.lL[aE.a3X], a40 = bj.a42[a40], aR.a43(L(32, [a40]), 2, 1, 12), aO.a29(0, L(33, [a40]), 40, 0, bE.pU, bE.pR, -1, !1), aI.oA(2700)) : 8 === aE.lG ? (aE.hm ? aO.a3t(aE.a3y,
			3) : aE.a3k ? aO.a3t(aE.a3y, 2) : aO.a3t(1 - aE.fM, 3), aE.a3z.a1y(aE.a3y), aI.nw(aE.a3y, 2700, !1, 0)) : 9 === aE.lG ? (aO.a44(), aI.oA(2700)) : (aO.a45(aE.a3y), aI.nw(aE.a3y, 2700, !1, 0))
	}, this.a3l = function() {
		a3s = 0, aE.hl || aE.lI || (a3s = 54)
	}, this.nC = function() {
		var sA;
		0 !== a3s && 0 === --a3s && (sA = b1.z.a47(), aE.lG < 7 ? sA += "/log/team" : 8 === aE.lG ? sA += "/log/1v1" : 9 === aE.lG ? sA += "/log/zombies" : sA += "/log/br", aO.a29(720, sA, 736, 0, bE.pU, bE.ps, -1, !1), aE.a48 < 0 || (sA = b1.z
			.a47() + "/log/?r=" + bI.f3.a2y(aE.a48, 6), aO.a29(1071, sA, 736, 0, bE.pU, bE.ps, -1, !1)))
	}
}

function a3S() {
	function a4I() {
		var vI;
		return 8 === aE.lG ? 0 : (vI = Math.floor(ah.a4J[aE.fM] / 50), (vI = Math.min(vI, 200)) / 100)
	}

	function a4A() {
		var vI = a4I();
		0 === vI || aE.hm || aO.a29(440, L(34, [vI.toFixed(2)]), 40, 0, bE.pm, bE.pR, -1, !1)
	}
	this.eh = function() {
		var a4B;
		0 === bU.result.a49 || 0 === bU.result.a3U.length || 8 === aE.lG ? bD.gy.hp(aE.fM) && a4A() : (function(a4B) {
			7 !== aE.lG && 10 !== aE.lG && 9 !== aE.lG || 0 !== aE.a3k && a4B && (9 === aE.lG ? aO.a29(600, L(38, [100 * (1 + aE.a28)]), 40, 0, bE.pU, bE.pR, -1, !1) : aO.a29(600, L(38, [a4B.toFixed(2)]), 40, 0, bE.pU, bE.pR, -1, !1))
		}(a4B = function() {
			aO.a29(520, L(35), 40, 0, bE.pU, bE.pR, -1, !1);
			for (var a3U = bU.result.a3U, fc = a3U.length, hQ = ah.hQ, h = [], aC = 0; aC < fc; aC++) {
				var hA = a3U[aC];
				h.push({
					hA: hA,
					ed: hQ[hA]
				})
			}
			h.sort((fv, fw) => fw.ed - fv.ed);
			var a42 = ah.a2A,
				ed = bU.result.a4K,
				vI = bU.result.a49,
				sA = "",
				a4B = 0;
			for (aC = 0; aC < fc; aC++) {
				var iN = h[aC].ed * vI / (100 * ed),
					a4M = a42[h[aC].hA] + ": " + iN.toFixed(2) + "   ";
				h[aC].hA !== aE.fM || aE.hm || (a4B = iN, 9 === aE.lG && 0 !== aC && (a4B = 0)), 2 < aC && 4 !== fc ? 3 === aC && (sA += "(" + L(36, [fc - 3]) + ")") : sA += a4M
			}
			aO.a29(560, bD.tg.a4N(sA), 40, 0, bE.pm, bE.pR, -1, !1), a4B ? aO.a29(580, L(37, [a4B.toFixed(2) + " + " + a4I().toFixed(2)]), 40, 0, bE.pm, bE.pR, -1, !1) : bD.gy.hp(aE.fM) && a4A();
			return a4B
		}()), 2 === aE.a3c || 7 <= aE.lG || function(a4B) {
			var a3U = bU.result.a3U,
				fc = a3U.length,
				a4O = ah.a4O,
				hQ = ah.hQ,
				a4P = [];
			loop: for (var aC = 0; aC < fc; aC++) {
				var hA = a3U[aC],
					a4Q = bD.tg.a4R(a4O[hA]);
				if (null !== a4Q) {
					for (var a4S = hQ[hA], fw = a4P.length - 1; 0 <= fw; fw--)
						if (a4Q === a4P[fw].name) {
							a4P[fw].ed += a4S, a4P[fw].h.push({
								hA: hA,
								ed: a4S
							});
							continue loop
						} a4P.push({
						name: a4Q,
						ed: a4S,
						h: [{
							hA: hA,
							ed: a4S
						}]
					})
				}
			}
			if (0 !== a4P.length) {
				a4P.sort((fv, fw) => fw.ed - fv.ed);
				var h = a4P[0].h,
					a4T = (h.sort((fv, fw) => fw.ed - fv.ed), "[" + a4P[0].name + "]"),
					a4U = 512 * bU.result.a49 / 26214400,
					lt = (aO.a29(0, L(39, [a4T, a4U.toFixed(4)]), 40, 0, bE.pU, bE.pR, -1, !1), h.length),
					zs = a4P[0].ed,
					a4V = 1e4 * a4U;
				for (aC = 0; aC < lt; aC++)
					if (h[aC].hA === aE.fM && !aE.hm) {
						aO.a29(600, L(40, [(a4V * h[aC].ed / (10 * zs)).toFixed(2)]), 40, 0, bE.pU, bE.pR, -1, !1), aO.a29(640, L(41, [(.2 * a4B).toFixed(2), a4T]), 40, 0, bE.pU, bE.pR, -1, !1);
						break
					}
			}
		}(a4B))
	}, this.a4F = function() {
		var a4G, a0I;
		aE.lI || (a4G = ah, a0I = aE.fM, 0 === a4G.a4H[a0I]) || a4G.k2[a0I] < 1 || 2 * a4G.rv[a0I] > 3 * (a4G.k1[a0I] + a4G.k2[a0I]) || a4A()
	}
}

function a3L() {
	this.dm = function() {
		this.a4W = 0, this.a3U = [], this.a4K = 0, this.a49 = 0
	}, this.a3j = function() {
		var uH;
		aE.lI || (uH = this, 2 === aE.a3c ? uH.a3U = bU.a3M.a3T() : aE.iX ? uH.a3U = bU.a3M.a3W() : uH.a3U = bU.a3M.a3Y(), uH.a4W = bl.a4Y.a4Z(), uH.a4K = Math.max(1, bU.a3M.a3Z(uH.a3U)), bB.gy.rc(), 8 === aE.lG ? bU.result.a49 = 0 : uH.a49 =
			100 * bU.result.a4W * (1 + aE.a28))
	}
}

function a3Q() {
	this.a3j = function() {
		if (2 === aE.a3c) aE.a3k = 2;
		else {
			if (8 === aE.lG) bD.gy.kL(0) || 0 === ah.na[0] ? aE.a3y = 1 : bD.gy.kL(1) || 0 === ah.na[1] ? aE.a3y = 0 : aE.a3y = +(ah.hQ[1] > ah.hQ[0]);
			else {
				if (aE.iX) {
					var lW = bk.a4c();
					if (aE.a3X = lW, bj.lL[lW]) return void(aE.a3k = +(bj.fa[aE.fM] === lW))
				}
				aE.a3y = mZ[0]
			}
			aE.a3k = +(aE.a3y === aE.fM)
		}
	}
}

function dM() {
	this.id = 0, this.e6 = 0, this.yz = null, this.z0 = null, this.z1 = null, this.z7 = null, this.a2 = new a4d, this.dm = function() {
		var self, e6;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (e6 = Android.getVersion()) < 12 || (self.e6 = e6, self.id = 1, self.z0 = Android),
			function(self) {
				var e6;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.z1 = mwIOSdataX, self.z7 = window.webkit.messageHandlers.iosCommandA, e6 = self
					.z1.version, self.e6 = e6 ? Number(e6) : 0)
			}(this),
			function(self) {
				var yz;
				try {
					if (!(yz = window.localStorage)) return;
					yz.setItem("tls7", "1"), yz.removeItem("tls7")
				} catch (error) {
					return
				}
				self.yz = yz
			}(this)
	}
}

function a4d() {
	this.a4h = function() {
		bm.r0.zO(), bm.r0.zP(), b1.z.close(0, 3255), 0 === a1.id ? a1.yz && a1.yz.clear() : 1 === a1.id ? a1.z0.saveString(199, "") : 2 === a1.id && a1.z7.postMessage("clear")
	}, this.a4i = function() {
		2 === a1.id ? a1.z7.postMessage("showConsentForm") : 1 === a1.id && a1.z0.setState(7)
	}, this.a4j = function() {
		this.setState(14)
	}, this.ip = function() {
		return 1 === bm.buffer.yo(2)
	}, this.a4k = function() {
		bm.buffer.yn(102, "")
	}, this.setState = function(a4l) {
		1 === a1.id && 5 <= a1.e6 && a1.z0.setState(a4l)
	}, this.a3 = function() {
		var a4m;
		1 === a1.id && 7 <= a1.e6 ? a1.z0.setState(5) : 2 === a1.id ? a1.z7.postMessage("reload 0") : ((a4m = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a4m.toString())
	}, this.eY = function() {
		0 !== a1.id && (1 === a1.id ? a1.z0.prepareAd("8646194357") : 2 === a1.id && (0 === a1.e6 ? a1.z7.postMessage("prepare ad 2904813909") : a1.z7.postMessage("loadAds 2904813909")))
	}, this.ee = function(ed) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.e6 && (a1.z0.presentAd(ed), !0) : 2 === a1.id && 0 !== a1.e6 && (a1.z7.postMessage("showAd"), !0))
	}, this.dw = function() {
		2 === a1.id && a1.e6 < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a4n + "' target='_blank'>" + bN
			.a4n + "</a>", !0, [new x("⬅️ " + L(42), function() {
				u.v(0)
			}, bE.qB)]))
	}
}

function db() {
	function a4p(e) {
		mI(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(42), function() {
				u.a4q()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.pr)]))
	}

	function a52(e) {
		mI(e), u.v(4, 5, new w(L(43), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a4x(e), !0))
	}

	function a4x(e) {
		var sA = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + sA : 4527 === e ? "Player already in lobby" + sA : 4577 === e ? "Your IP is banned." + sA : 4530 === e ? "Lobby Timeout" + sA : 4528 === e ?
			"Lobby Kick: Another login detected." + sA : 4540 === e ? "You have been kicked." + sA : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + sA : 4555 === e ? "This Account is blocked." + sA :
			4580 === e ? "More Gold needed" + sA : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + sA : 4591 === e ? "The algo determined you are a bot." + sA : "Unknown error" + sA
	}

	function mI(e) {
		a4s(e), u.z.a0()
	}

	function a4s(e) {
		4540 === e && b1.z.a54(e);
		var a4l = ab.a4r();
		bx.close(), 6 === a4l ? b1.z.a54(e) : bq.f9 ? (u.y(), bq.xO(), b1.z.close(b1.z.fA, 3256)) : 8 === a4l && aE.a55(!0)
	}
	this.q = [], this.a4o = function(oT, e) {
		if (1 === oT && __fx.customLobby.isActive() && 6 !== ab.a4r() && __fx.customLobby.setActive(!1), console.log("socket close index " + oT + " error " + e), this.q.push(e), 4321 === e && (data = bm.z.zJ(0)) && (console.log("Reset to: " +
				data.uu), bm.r0.r1(105, data.uu), bm.r0.r1(106, data.password)), 8 === u.uw && 0 === oT)
			if (4211 === e) a4p(e);
			else {
				if (bq.f9 && (4495 === e || 4480 === e) && b1.z.fA !== oT) return void u.a4q();
				if (8 !== ab.a4r() && a4s(), 4480 === e) return bm.r0.zQ(), void u.v(4, 0, new w(L(45), L(46), !0));
				var data = 0;
				u.a4v() && 10 === u.a4v().a4w && (data = u.a4v().a4w), u.v(4, data, new w(L(43), a4x(e), !0))
			}
		else {
			data = ab.a4r();
			if (6 === data) {
				if (4211 === e) return void a4p(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a4y(oT)
			} else if (bq.f9) {
				if (oT !== b1.z.fA) return
			} else {
				if (8 === data) return void(oT !== b1.z.a4z || aE.lI || 1 !== aE.a3f || aE.hl || aO.a50(L(44, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}(4591 === e ? function(e) {
				mI(e), u.v(4, 5, new w("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new x("⬅️ " + L(42), function() {
					u.a4q()
				}), new x("🔄 Reload", function() {
					a1.a2.a3()
				}, bE.pr)]))
			} : a52)(e)
		}
	}, this.a53 = function(e) {
		this.q.push(e), 8 === ab.a4r() ? aE.lI || 1 !== aE.a3f || aO.a50(L(44, [e])) : a52(e)
	}, this.t = function() {
		this.q.push(3268), mI(3268)
	}
}

function dB() {
	var a56, a57, a58 = -15e3,
		a59 = !1;

	function hq(e) {
		a5T() || (a59 = !0, a5U(e, 1), b1.z.a5V(b1.z.a4z), a5W(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5I(e) {
		a58 = bi.ec, a5U(e, 1), b1.z.a5V(b1.z.a4z), 0 < e.touches.length && (a56 = Math.floor(i.l * e.touches[0].clientX), a57 = Math.floor(i.l * e.touches[0].clientY), av.a5I(e) || a5W(a56, a57))
	}

	function a5W(fj, fl) {
		u.hq(fj, fl), 0 === aE.a3f ? ab.hq(fj, fl) : bF.a5X(fj, fl) || bh.hq(fj, fl) || aY.hq(fj, fl) || aM.a5Y(fj, fl) || aQ.hq(fj, fl) || 0 <= aN.hq(fj, fl) || ax.hq(fj, fl) || bM.a5Z(fj, fl) || aM.a5a(fj, fl)
	}

	function a5E(e) {
		a5T() || (a59 = !0, a5U(e, 1), a5b(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5J(e) {
		a58 = bi.ec, a5U(e, 1), 0 < e.touches.length && (a56 = Math.floor(i.l * e.touches[0].clientX), a57 = Math.floor(i.l * e.touches[0].clientY), av.a5J(e) || a5b(a56, a57))
	}

	function a5b(fj, fl) {
		bM.t9() || (bM.hh = fj, bM.hi = fl), u.a5E(fj, fl), 0 === aE.a3f ? ab.a5E(fj, fl) : (bW.hj(fj, fl), bh.a5E(fj, fl) || (aN.a5E(fj, fl), aM.iP() ? aM.a5E(fj, fl) : aS.hr ? aS.a5E(fj) && (bi.du = !0) : (aW.a5E(fj, fl), aT.o6 && aT.a5E(fj, fl) &&
			(bi.du = !0))))
	}

	function a5G(e) {
		a5T() || (a5U(e, 1), a5c(), 0 === aE.a3f ? (ab.click(-1024, -1024), aU.reset()) : (aW.a5d(-1024, -1024), aN.a5E(-1024, -1024), aS.a5e(), aT.o6 = !1))
	}

	function a5F(e) {
		a5T() || (a5U(e, 1), a5f(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a5C && (bM.a5C = !1, e.preventDefault()))
	}

	function click(e) {
		a5T() || a5U(e, 1)
	}

	function a5K(e) {
		a58 = bi.ec, a5U(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a3f ? aT.o6 = !1 : av.a5g() || (a5f(a56, a57, !1), bM.a5C && (bM.a5C = !1, e.preventDefault()))
	}

	function a5L(e) {
		a58 = bi.ec, a5U(e, 1), a5f(a56, a57, !1), bM.a5C && (bM.a5C = !1, e.preventDefault())
	}

	function a5M(e) {}

	function a5N(e) {}

	function a5O(e) {
		a5T() || a5U(e, 0)
	}

	function a5f(fj, fl, a5h) {
		a5c(), 0 === aE.a3f ? ab.click(fj, fl) : (aW.a5d(fj, fl), bh.a5d(), aS.a5e(), aT.o6 = !1, aM.click(fj, fl, a5h) ? bi.du = !0 : aN.a5F(fj, fl))
	}

	function a5c() {
		u.a5c()
	}

	function a5H(e) {
		var fj, fl, deltaY;
		a5T() || (a5U(e, 1), b1.z.a5V(b1.z.a4z), fj = Math.floor(i.l * e.clientX), fl = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a5H(fj, fl, deltaY), 0 === aE.a3f ? ab.a5H(fj, fl, deltaY) : aW.a5H(fj, fl,
			deltaY) || (aS.a5i(fj, fl) ? aS.a5H(deltaY) && (bi.du = !0) : aT.a5H(fj, fl, deltaY)))
	}

	function a5P(e) {
		a5U(e, 0)
	}

	function a5U(e, id) {
		0 === id && u.iP() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a4r() && e.preventDefault()
	}

	function a5Q(e) {
		if (__fx.keybindHandler(e.key)) return;
		a5T() || 0 < i.uc || (e = e.code) && e.length && (ba.em(e, 18) ? at.a5k(3) : ba.em(e, 22) ? at.a5k(0) : ba.em(e, 20) ? at.a5k(1) : ba.em(e, 24) ? at.a5k(2) : ba.em(e, 10) ? aS.a5l(31 / 32) : ba.em(e, 8) ? aS.a5l(32 / 31) : ba.em(e, 6) ? aS
			.a5l(7 / 8) : ba.em(e, 4) ? aS.a5l(8 / 7) : ba.em(e, 14) ? 0 !== aE.a3f && aT.a5H(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.em(e, 16) ? 0 !== aE.a3f && aT.a5H(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.em(e, 0) ?
			aE.a3f && bW.hk(0) : ba.em(e, 2) ? aE.a3f && bW.hk(1) : ba.em(e, 30) ? aE.a3f && bW.hk(2) : ba.em(e, 26) ? aE.a3f && bW.iJ() : ba.em(e, 28) && aE.a3f && bW.iO())
	}

	function a5R(e) {
		if (!a5T() && !(0 < i.uc || bi.ec < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a5m(1) || "Space" === code && u.a5m(0))) return bq.f9 ? bq.xU.a5m(code) ? void 0 : void("Escape" === code && bM.g5()) : void(8 !== ab.a4r() && ab.a5m(e) ? bi.du = !0 : "Escape" === code ?
				bM.g5() : ba.em(code, 18) ? at.a5n(3) : ba.em(code, 22) ? at.a5n(0) : ba.em(code, 20) ? at.a5n(1) : ba.em(code, 24) ? at.a5n(2) : ba.em(code, 12) ? bF.a5o(!aE.o4) : "Space" === code && aE.a3f && (aN.hn && aN.a5p(), aE.hl) &&
				bF.a5q(!1))
		}
	}

	function a5S() {
		"hidden" !== document.visibilityState && (bi.du = !0)
	}

	function a5T() {
		return a58 + 15e3 > bi.ec
	}

	function resize() {
		i.a5s()
	}
	this.a5A = 0, this.a5B = "", this.a5C = !1, this.hh = 0, this.hi = 0, this.dm = function() {
		a5D.addEventListener("mousedown", hq, {
			passive: !1
		}), a5D.addEventListener("mousemove", a5E, {
			passive: !1
		}), a5D.addEventListener("mouseup", a5F, {
			passive: !1
		}), a5D.addEventListener("click", click, {
			passive: !1
		}), a5D.addEventListener("mouseleave", a5G, {
			passive: !1
		}), a5D.addEventListener("wheel", a5H, {
			passive: !1
		}), a5D.addEventListener("touchstart", a5I, {
			passive: !1
		}), a5D.addEventListener("touchmove", a5J, {
			passive: !1
		}), a5D.addEventListener("touchend", a5K, {
			passive: !1
		}), a5D.addEventListener("touchcancel", a5L, {
			passive: !1
		}), a5D.addEventListener("dragover", a5M), a5D.addEventListener("drop", a5N), a5D.addEventListener("dblclick", a5O), document.addEventListener("contextmenu", a5P), document.addEventListener("keydown", a5Q), document.addEventListener(
			"keyup", a5R), document.addEventListener("visibilitychange", a5S), window.addEventListener("resize", resize)
	}, this.a5Z = function(fj, fl) {
		return !!bF.hq(fj, fl) || !!(aW.hq(fj, fl) || aT.hq(fj, fl) || aS.hq(fj, fl) || aO.hq(fj, fl))
	}, this.a5r = a5T, this.t9 = function() {
		return !a59 || 0 < a58
	}, this.g5 = function() {
		if (!u.iP()) return 8 === ab.a4r() ? aE.o4 ? void bF.a5o(!1) : bh.iP ? void bh.a5p() : void aN.a5p() : void(7 !== ab.a4r() && 6 === ab.a4r() && aa.a5t());
		u.a5m(2)
	}
}

function c4() {
	this.sF = new a5u, this.sr = new a5v, this.gy = new a5w, this.tg = new a5x, this.p0 = new a5y, this.ox = new a5z, this.canvas = new a60, this.color = new a61, this.a62 = new a63, this.dm = function() {
		this.sF.zN()
	}
}

function a5v() {
	this.a0G = function(h) {
		h.fill(0)
	}, this.a64 = function(h) {
		for (var fc = h.length, aC = 0; aC < fc; aC++) h[aC] = []
	}, this.a65 = function(a2n, a66) {
		for (var a2o = bR.gC, aC = 0; aC < 3; aC++) a2o[aC] = a66 * a2n[aC];
		return a2o
	}, this.a67 = function(a2n, a2o, a68) {
		for (var kD = 0, aC = 0; aC < 3; aC++) kD += Math.abs(a2n[aC] - a2o[aC]);
		return a68 <= kD
	}, this.a69 = function(a2n, a6A) {
		for (var aC = 0; aC < 3; aC++) a2n[aC] = bO.io(a2n[aC] + a6A, 0, 255);
		return a2n
	}, this.a6B = function(h, vE, vF) {
		vF = vF || h.length - 1;
		for (var a6C = 0, aC = vE = vE || 0; aC <= vF; aC++) a6C += h[aC];
		return a6C
	}, this.a6D = function(h, a6E) {
		for (var aC, a6F, fc = h.length, a6G = [], fv = fc - 1; 0 <= fv; fv--) {
			for (aC = a6F = 0; aC < fc; aC++) a6E(h[aC]) < a6E(h[a6F]) && (a6F = aC);
			fc--, a6G.push(h[a6F]), h[a6F] = h[fc], h.pop()
		}
		return a6G
	}, this.min = function(h) {
		var aC, g4, fc = h.length;
		if (0 === fc) return 0;
		for (g4 = h[0], aC = 1; aC < fc; aC++) g4 = Math.min(g4, h[aC]);
		return g4
	}, this.max = function(h) {
		var fc = h.length;
		if (0 === fc) return 0;
		for (var g4 = h[0], aC = 1; aC < fc; aC++) g4 = Math.max(g4, h[aC]);
		return g4
	}, this.a6H = function(h, g4) {
		for (var fc = h.length, h5 = 0, aC = 0; aC < fc; aC++) h5 += h[aC] > g4;
		return h5
	}, this.a6I = function(a6J, a6K, min) {
		for (var fc = a6K[0], aC = fc - 1; 0 <= aC; aC--) a6J[aC] < min && (a6J[aC] = a6J[--fc]);
		a6K[0] = fc
	}, this.a6L = function(h, fc, value) {
		for (var aC = 0; aC < fc; aC++) h[aC] -= value
	}, this.a6M = function(h) {
		for (var fc = h.length, aC = 0; aC < fc; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a6N = function(sA, h, a6O) {
		h.fill(0);
		for (var vI = sA.split(","), fc = Math.min(vI.length, h.length), aC = 0; aC < fc; aC++) h[aC] = Math.min(parseInt(vI[aC]), a6O)
	}, this.a6P = function(sA, h, maxLength) {
		h.fill("");
		for (var vI = sA.split('"'), fc = Math.min(vI.length, 2 * h.length), iV = 0, aC = 1; aC < fc; aC += 2) h[iV++] = vI[aC].slice(0, maxLength)
	}, this.a6Q = function(h, h5) {
		if (0 === h5) h.fill(0);
		else {
			var a6C = this.a6B(h),
				fc = h.length;
			if (0 === a6C) h.fill(bO.g3(h5, fc));
			else
				for (var aC = 0; aC < fc; aC++) h[aC] = bO.g3(h5 * h[aC], a6C);
			if (0 === (a6C = this.a6B(h))) h[1] = h5;
			else
				for (var iV = 0; a6C++ < h5;) h[iV = (iV + 1) % fc] && h[iV]++
		}
	}, this.a6R = function(h) {
		if (!h) return 0;
		var fc = h.length;
		if (0 === fc) return 0;
		for (var g4 = h[fc - 1], aC = fc - 2; 0 <= aC; aC--)
			if (h[aC] !== g4) return aC + 2;
		return 1
	}, this.a6S = function(h) {
		for (var a6C = 0, aC = 0; aC < h.length; aC++) a6C += h[aC].length;
		return a6C
	}, this.a6T = function(a6U) {
		for (var h = [], aC = 0; aC < a6U.length; aC++) h = h.concat(a6U[aC]);
		return h
	}, this.has = function(h, g4) {
		for (var fc = h.length, aC = 0; aC < fc; aC++)
			if (h[aC] === g4) return !0;
		return !1
	}
}

function a60() {
	this.a2R = function(a6V, eL, a6W) {
		var iZ = a6V.height,
			a6X = bD.sF.a06(iZ, iZ),
			ih = bD.sF.getContext(a6X);
		return function(j, ih, a6W) {
			ih.fillStyle = a6W, ih.beginPath(), ih.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), ih.fill()
		}(iZ, ih, a6W), ih.drawImage(a6V, -eL * iZ, 0), a6X
	}, this.a6Z = function(a6a) {
		var ih, ic, iZ = a6a.height;
		return a6a.width === iZ && (ic = (ih = bD.sF.getContext(a6a, !0)).getImageData(0, 0, iZ, iZ), bD.ox.a6b(ic.data, iZ, iZ, .9), ih.putImageData(ic, 0, 0)), a6a
	}
}

function a61() {
	this.a6c = function(g4) {
		return [g4 >> 12 & 63, g4 >> 6 & 63, 63 & g4]
	}, this.a6d = function(g4) {
		for (var h = this.a6c(g4), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a6e = function(g4) {
		g4 = this.a6d(g4);
		return bD.color.pM(g4[0], g4[1], g4[2])
	}, this.a6f = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.pM = function(eK, vI, fw) {
		return "rgb(" + eK + "," + vI + "," + fw + ")"
	}, this.pO = function(eK, vI, fw, fv) {
		return "rgba(" + eK + "," + vI + "," + fw + "," + fv.toFixed(3) + ")"
	}, this.tB = function(em) {
		for (var h = em.split("(")[1].split(","), gB = bR.gB, aC = 0; aC < 3; aC++) gB[aC] = parseInt(h[aC]);
		return 4 === h.length ? gB[3] = 255 * parseFloat(h[3].slice(0, -1)) : gB[3] = 255, gB
	}, this.tC = function(a6g, ff) {
		for (var h = a6g.slice(a6g.indexOf("(") + 1, a6g.indexOf(")")).split(","), gB = bR.gB, aC = 0; aC < 3; aC++) gB[aC] = bO.io(parseInt(h[aC].trim(), 10) + ff, 0, 255);
		return 3 === h.length ? this.pM(gB[0], gB[1], gB[2]) : (a6g = parseFloat(h[3].trim()), this.pO(gB[0], gB[1], gB[2], a6g = 0 === a6g ? .3 : a6g))
	}, this.xy = function(a6h, a6i) {
		for (var kD = 0, aC = 0; aC < 3; aC++) kD += Math.abs(a6i[aC] - a6h[aC]);
		if (!(240 <= kD))
			for (aC = 0; aC < 3; aC++) a6i[aC] = a6h[aC] + (a6h[aC] < 128 ? 80 : -80)
	}, this.a6j = function(h) {
		for (var sA = "#", aC = 0; aC < 3; aC++) {
			var eK = h[aC].toString(16);
			sA += 1 === eK.length ? "0" + eK : eK
		}
		return sA
	}, this.a6k = function(sA) {
		var eK, vI;
		return sA.length < 7 ? bE.pL : (eK = parseInt(sA.slice(1, 3), 16), vI = parseInt(sA.slice(3, 5), 16), sA = parseInt(sA.slice(5, 7), 16), this.pM(eK, vI, sA))
	}
}

function a5y() {
	this.a6l = function(sA, font, maxWidth) {
		if (font && (yJ.font = font), yJ.measureText(sA).width <= maxWidth) return sA;
		for (var aC = sA.length - 1; 1 <= aC; aC--)
			if (sA = sA.substring(0, aC), yJ.measureText(sA + "...").width <= maxWidth) return sA + "...";
		return "..."
	}
}

function a63() {
	var a6n = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a6o = function(ec) {
		var a6q, sA = new Date(ec.getTime() - 6e4 * ec.getTimezoneOffset()).toUTCString();
		return sA.length < 12 || (sA = sA.substring(5, sA.length), 0 === (ec = ec.getTimezoneOffset())) ? sA : (a6q = (ec < 0 ? "+" : "-") + bO.g3(Math.abs(ec), 60), 0 == (ec = Math.abs(ec) % 60) ? sA + a6q : sA + a6q + ":" + (ec < 10 ? "0" :
			"") + ec)
	}, this.a6r = function(ec) {
		var sA = ec.toUTCString();
		return sA.length < 12 ? sA : function(ec) {
			return a6n[ec.getUTCDay()]
		}(ec) + ", " + sA.substring(5, sA.length - 4)
	}
}

function a5u() {
	var a6t = null,
		a72 = (this.a2i = 0, this.zN = function() {
			var g4 = bm.buffer.data[5].value;
			a6t = "px " + g4, "system-ui" !== g4 && (a6t += ", system-ui"), this.a2i = iY(32, 32, ["a", "b", "m"], 200, a6t)
		}, this.a06 = function(j, k) {
			var em = document.createElement("canvas");
			return em.width = j, em.height = k, em
		}, this.getContext = function(canvas, alpha) {
			return canvas.getContext("2d", {
				alpha: alpha
			})
		}, this.getImageData = function(p0, j, k) {
			return p0.getImageData(0, 0, j, k)
		}, this.sI = function(type, size) {
			return size = size.toFixed(2), 0 === type ? size + a6t : 1 === type ? "bold " + size + a6t : 2 === type ? "lighter " + size + a6t : 3 === type ? "italic " + size + a6t : 4 === type ? "oblique " + size + a6t : 5 === type ?
				"small-caps " + size + a6t : "small-caps bold " + size + a6t
		}, this.textAlign = function(ih, id) {
			ih.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
		}, this.textBaseline = function(ih, id) {
			ih.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
		}, this.sK = function(e, code, color) {
			e.classList.toggle("fx-line", !color), e.classList.toggle("fx-box", !code || 5 === code);
			color = this.ss(bf.uW) + " solid " + (color || bE.pU);
			5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
		}, this.vK = function(e, fj, fl, j, k) {
			e = e.style;
			e.left = this.vL(fj), e.top = this.vL(fl), e.width = this.vL(j), e.height = this.vL(k)
		}, this.sk = function(g4) {
			return 1 + g4 * a1.a2.ip()
		}, this.sG = function(oD, hB) {
			return oD * this.sk(void 0 === hB ? .5 : hB) * i.iq / i.l
		}, this.vJ = function(oD, hB) {
			return oD * this.sk(void 0 === hB ? .5 : hB) * i.iq
		}, this.v0 = function(oD, hB, a6u) {
			return this.sk(hB) * Math.min(oD * i.iq, a6u * i.j) / i.l
		}, this.ss = function(g4) {
			return g4.toFixed(1) + "px"
		}, this.vL = function(g4) {
			return this.xk(g4).toFixed(1) + "px"
		}, this.xk = function(g4) {
			return g4 / i.l
		}, this.a6w = function(a6x) {
			for (var sA = "<ul>", fc = a6x.length, aC = 0; aC < fc; aC++) sA += "<li>" + a6x[aC][0] + ": <a href='" + a6x[aC][1] + "' target='_blank'>" + a6x[aC][0] + "</a></li>";
			return sA += "</ul>"
		}, this.a6y = function(a6z) {
			return "<a href='" + a6z + "' target='_blank'>" + a6z + "</a>"
		}, this.a70 = function(e) {
			navigator.clipboard && navigator.clipboard.writeText(e.value)
		}, this.xw = function(e) {
			var ed = e.textContent;
			bD.tg.a71(ed, "✔") || (1 === ed.length ? e.textContent = "✔" : e.textContent = ed + " ✔", setTimeout(function() {
				e.textContent = ed
			}, 500))
		}, this.measureText = function(sA) {
			return yJ.measureText(sA).width
		}, this.vA = function(op) {
			op.style.overflowX = "auto", op.style.overflowY = "hidden", op.style.whiteSpace = "nowrap", op.addEventListener("wheel", function(e) {
				Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.vN = this.scrollLeft, e.preventDefault())
			}), op.addEventListener("scroll", function() {
				this.vN = this.scrollLeft
			})
		}, -1e4);

	function a76(a74) {
		performance.now() - a72 < 600 || (a72 = performance.now(), a74())
	}
	this.vz = function(e, a73, a74) {
		a73 && (e.onclick = function() {
			performance.now() - a72 < 600 || a73()
		}), e.addEventListener("contextmenu", function(a75) {
			a75.preventDefault(), a76(a74)
		}), e.addEventListener("touchstart", function(a75) {
			2 === a75.touches.length && (a75.preventDefault(), a76(a74))
		}, {
			passive: !1
		})
	}
}

function a5w() {
	this.ho = function(a4l) {
		return 0 === a4l ? 1 === aE.a3f && aE.i1 : 1 === a4l ? 1 === aE.a3f && !aE.i1 : 2 === aE.a3f
	}, this.hp = function(player) {
		return 0 !== ah.na[player] && 2 !== ah.a77[player]
	}, this.a78 = function(player) {
		return player === aE.fM && 2 !== ah.a77[player]
	}, this.lc = function(player, k7) {
		return player !== k7 && (0 === bj.fa[player] || bj.fa[player] !== bj.fa[k7])
	}, this.mj = function() {
		return am.lU < 2 ? 0 : aE.iX ? 1 < bk.a79() : ah.hQ[mZ[1]]
	}, this.a7A = function() {
		var lU = am.lU;
		if (0 !== lU) {
			if (!aE.iX) return !this.kL(mZ[0]);
			for (var fa = bj.fa, lW = bk.lX(), lZ = am.lZ, aC = lU - 1; 0 <= aC; aC--) {
				var hA = lZ[aC];
				if (fa[hA] === lW && !this.kL(hA)) return 1
			}
		}
		return 0
	}, this.a7B = function(player) {
		return player === aE.fM
	}, this.a7C = function(k7, oD) {
		return ah.he[aE.fM] < oD * ah.he[k7]
	}, this.kL = function(player) {
		return player >= aE.ky || 2 === ah.a77[player]
	}, this.lw = function(player) {
		return 0 !== ah.na[player]
	}, this.a3V = function(player) {
		return player < aE.ky
	}, this.rt = function(a7D, a7E) {
		return a7D !== a7E
	}, this.h1 = function(player, g4) {
		var min;
		return g4 = this.a7F(player, g4), ah.he[player] += g4, ah.a7G[player] && (min = Math.min(ah.a7G[player], ah.he[player]), ah.a7G[player] -= min, ah.he[player] -= min), g4
	}, this.a7F = function(player, g4) {
		var a7H = ah.he[player];
		return g4 = Math.min(g4, ah.hQ[player] * aE.a7I - a7H), g4 = Math.min(g4, aE.a7J - a7H), Math.max(g4, 0)
	}, this.n6 = function(player, jG, a7K, a7L) {
		var a7H = ah.he[player],
			jG = bO.g3(a7H * (jG + 1), 1024),
			a7K = bO.g3(a7K * a7H, 1024),
			jG = Math.min(jG, a7H - a7K);
		return jG = b5.a7N(player, jG), bR.g9[0] = jG, bR.g9[1] = a7K, a7L <= jG
	}, this.rN = function(player, r5, r4) {
		var player = ah.he[player],
			a7M = bO.g3(64 * player, 1024);
		return r5 = Math.min(r5, player - a7M), r5 = this.a7F(r4, r5), bR.g9[0] = r5, bR.g9[1] = a7M, 1 <= r5
	}, this.a7O = function(player, r5, r4) {
		var player = ah.he[player],
			a7M = bO.g3(64 * player, 1024);
		return r5 = Math.min(r5, player - a7M), this.a7F(r4, r5)
	}, this.rP = function(r5, r4) {
		return r5 = this.a7F(r4, r5), bR.g9[0] = r5, bR.g9[1] = 0, 1 <= r5
	}, this.jF = function(player, a7P) {
		return bO.g3(ah.he[player] * (a7P + 1), 1024)
	}, this.a7Q = function(player, a7K) {
		a7K = bO.g3(a7K * ah.he[player], 1024);
		bR.g9[1] = a7K, ah.he[player] -= a7K
	}, this.gz = function(player, a7R) {
		var gN, gP, fw = ah.he[player];
		return a7R <= fw ? ah.he[player] -= a7R : (ah.he[player] = 0, gP = ah.a7G[player] + (gN = 5 * ((fw = a7R - fw) >> 2)), bg.h2(player, gN - fw, 12), gP <= aE.a7S ? ah.a7G[player] = gP : (ah.a7G[player] = aE.a7S, bg.h2(player, gP - aE.a7S,
			18))), a7R
	}, this.mA = function(player, jG) {
		var he = ah.he,
			a7H = he[player],
			jG = bO.g3(a7H * (jG + 1), 1024),
			a7M = Math.max(bO.g3(a7H, 10), 1e3);
		return (jG = Math.min(jG, a7H - a7M)) < 0 ? (he[player] = 0, a7M = Math.min(1e3, a7H + aE.a7S - ah.a7G[player]), bR.g9[1] = a7M, ah.a7G[player] += a7M - a7H, 0) : (bR.g9[1] = a7M, jG = b5.a7N(player, jG), he[player] -= a7M + jG, b5.a7T(
			player, jG), jG)
	}, this.n8 = function(player) {
		var iM = bR.g9[0];
		ah.he[player] -= iM + bR.g9[1], b5.a7T(player, iM)
	}, this.ru = function(player, k7) {
		return (k7 = Math.min(k7, aE.fZ)) < aE.fZ && 0 === ah.na[k7] && (k7 = aE.fZ), (bR.fY[0] = k7) === aE.fZ || bw.fV(player, k7)
	}, this.rx = function(player, r4) {
		return 0 !== ah.na[r4] && !bw.fV(player, r4)
	}, this.a7U = function(player, a7V) {
		for (var hA, fc = am.lU, a7W = 0, a7X = mZ, aC = 0; aC < fc; aC++)
			if (hA = a7X[aC], !this.kL(hA)) {
				if (player === hA) return !0;
				if (++a7W > a7V) return !1
			} return !1
	}, this.mV = function(hA) {
		var a7Y = aE.iX ? bk.lV() : ah.hQ[mZ[0]];
		return a7Y >= bO.g3(hA * aE.ki, 100)
	}, this.a7Z = function(g4, min, max) {
		return Math.floor(bO.io(isNaN(g4) ? 0 : Number(g4), min, max))
	}
}

function a5z() {
	this.a7a = function(canvas, a7b, a7c) {
		var j = canvas.width,
			k = canvas.height,
			em = bD.sF.a06(j, k),
			ih = bD.sF.getContext(em, !0),
			canvas = (ih.drawImage(canvas, 0, 0), ih.getImageData(0, 0, j, k));
		return a7b(canvas.data, j, k, a7c), ih.putImageData(canvas, 0, 0), em
	}, this.a7d = function(a0H, j, k) {
		for (var fj = j - 1; 0 <= fj; fj--)
			for (var fl = k - 1; 0 <= fl; fl--) {
				var aC = 4 * (fj + fl * j);
				a0H[3 + aC] = a0H[aC], a0H[aC] = a0H[1 + aC] = a0H[2 + aC] = 255
			}
	}, this.a7e = function(a0H, j, k) {
		for (var fj = j - 1; 0 <= fj; fj--)
			for (var fl = k - 1; 0 <= fl; fl--) {
				var aC = 4 * (fj + fl * j);
				a0H[1 + aC] > a0H[2 + aC] + 10 && (a0H[3 + aC] = a0H[aC], a0H[1 + aC] = a0H[2 + aC])
			}
	}, this.a7f = function(a0H, j, k) {
		for (var fj = j - 1; 0 <= fj; fj--)
			for (var fl = k - 1; 0 <= fl; fl--) {
				var fv, g4, aC = 4 * (fj + fl * j);
				a0H[1 + aC] > a0H[2 + aC] + 10 && (g4 = 0 < (fv = 255 - a0H[1 + aC] + a0H[2 + aC]) ? Math.min(255, Math.round(255 * a0H[2 + aC] / fv)) : 0, a0H[aC] = a0H[1 + aC] = a0H[2 + aC] = g4, a0H[3 + aC] = fv)
			}
	}, this.a7g = function(a0H, j, k, a7c) {
		for (var gap = Math.floor(Math.min(j, k) * a7c), fj = 0; fj < j; fj++)
			for (var aC, fl = 0; fl < k; fl++)(fj < gap || fl < gap || j - gap <= fj || k - gap <= fl) && (a0H[3 + (aC = 4 * (fj + fl * j))] = 255 - 255 * (a0H[1 + aC] - a0H[aC]) / (255 - a0H[aC]))
	}, this.a7h = function(a0H, j, k, a7c) {
		for (var fj = j - 1; 0 <= fj; fj--)
			for (var fl = k - 1; 0 <= fl; fl--) {
				var aC = 4 * (fj + fl * j);
				a0H[aC] = a7c[0], a0H[1 + aC] = a7c[1], a0H[2 + aC] = a7c[2]
			}
	}, this.a7i = function(a0H, j, k, a7c) {
		for (var gap = Math.floor(j * a7c), fj = 0; fj < j; fj++)
			for (var aC, fl = 0; fl < k; fl++)(fj < gap || fl < gap || j - gap <= fj || k - gap <= fl) && (a0H[aC = 4 * (fj + fl * j)] = a0H[1 + aC] = a0H[2 + aC] = 0)
	}, this.a7j = function(a0H, j, k) {
		for (var fl, aC, fj = j - 1; 0 <= fj; fj--)
			for (fl = k - 1; 0 <= fl; fl--) 200 < a0H[1 + (aC = 4 * (fj + fl * j))] && a0H[1 + aC] - 20 > a0H[aC] && a0H[1 + aC] - 20 > a0H[2 + aC] ? a0H[aC] + a0H[2 + aC] < 40 ? a0H[3 + aC] = 0 : (a0H[3 + aC] = a0H[aC], a0H[aC] = 255, a0H[1 +
				aC] = 255, a0H[2 + aC] = 255) : a0H[aC] < 50 && a0H[1 + aC] < 50 && a0H[2 + aC] < 50 && (a0H[aC] + a0H[1 + aC] + a0H[2 + aC] < 50 ? a0H[3 + aC] = 180 : a0H[3 + aC] = 180 + Math.floor(75 * (a0H[aC] + a0H[1 + aC] + a0H[2 + aC] -
				50) / 100))
	}, this.a7k = function(a0H, j, k) {
		for (var fl, aC, fj = j - 1; 0 <= fj; fj--)
			for (fl = k - 1; 0 <= fl; fl--) a0H[1 + (aC = 4 * (fj + fl * j))] > a0H[aC] + 20 && a0H[1 + aC] > a0H[2 + aC] + 20 && a0H[aC] + a0H[2] < 40 && (a0H[3 + aC] = 255 - a0H[1 + aC], a0H[aC] = a0H[1 + aC] = a0H[2 + aC] = a0H[aC])
	}, this.a6b = function(a0H, j, k, a7c) {
		for (var eK = j >> 1, fj = 0; fj < j; fj++)
			for (var fl = 0; fl < k; fl++) Math.sqrt((fj - eK) * (fj - eK) + (fl - eK) * (fl - eK)) > a7c * eK && (a0H[4 * (fj + fl * j) + 3] = 0)
	}
}

function a5x() {
	var a7l = {
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
		a7m = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.th = function(eo) {
		return eo.replace(a7m, function(match) {
			return a7l[match] || match
		})
	}, this.a2y = function(g4) {
		var aC, a7n, a7o, a7p, a7q;
		if (g4 < 0) return "-" + this.a2y(Math.abs(g4));
		if (g4 < 1e3) return g4.toString();
		for (a7n = Math.floor(Math.log(g4 + .5) / Math.log(10)) + 1, a7o = Math.floor((a7n - 1) / 3), a7q = (a7p = g4.toString()).substring(a7n - 3, a7n), aC = 1; aC < a7o; aC++) a7q = a7p.substring(a7n - 3 * (aC + 1), a7n - 3 * aC) + " " + a7q;
		return a7p.substring(0, a7n - 3 * a7o) + " " + a7q
	}, this.a7r = function(hA, a7n) {
		return hA.toFixed(a7n) + "%"
	}, this.a7s = function(g4, a7t) {
		return g4.toFixed(bO.io(Math.floor((void 0 === a7t ? 3 : a7t) - Math.log10(Math.max(g4, 1))), 0, 8))
	}, this.a7u = function(g4, oD, a7n) {
		return (g4 * oD).toFixed(a7n)
	}, this.a4R = function(username) {
		var fg, fR = username.indexOf("[");
		return !(fR < 0) && 1 < (fg = username.indexOf("]")) - fR && fg - fR <= 8 ? username.substring(fR + 1, fg).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a4R;
	this.a7v = function(sA) {
		for (var fv = Math.floor(.5 * sA.length + .5), oJ = Math.floor(.5 * (fv - 1)), aC = 0; aC < oJ; aC++)
			for (var fw = -1; fw < 2; fw += 2) {
				var em = fv + fw * aC;
				if (" " === sA[em]) return [this.a4N(sA.substring(0, em)), this.a7w(sA.substring(em))]
			}
		return [sA.substring(0, fv), sA.substring(fv)]
	}, this.a7w = function(sA) {
		for (var fc = sA.length, aC = 0; aC < fc; aC++)
			if (" " !== sA[aC]) return sA.substring(aC);
		return sA
	}, this.a4N = function(sA) {
		for (var aC = sA.length - 1; 0 <= aC; aC--)
			if (" " !== sA[aC]) return sA.substring(0, aC + 1);
		return sA
	}, this.a7x = function(sA, a7y) {
		return sA.split("(")[0] + "(🧈 " + a7y.toFixed(2) + ")"
	}, this.startsWith = function(sA, a7z) {
		return sA.substring(0, a7z.length) === a7z
	}, this.a71 = function(sA, a7z) {
		var fc = sA.length;
		return sA.substring(fc - a7z.length, fc) === a7z
	}, this.a80 = function(h, a81, a82) {
		var sA = "",
			fc = h.length - 1;
		a82 = a82 || "";
		for (var aC = 0; aC < fc; aC++) sA += a82 + h[aC] + a82 + ",", (aC + 1) % a81 == 0 && (sA += "\n");
		return sA += a82 + h[fc] + a82
	}, this.a83 = function(sA, a2n, a2o) {
		return sA.replace(new RegExp(a2n, "g"), a2o)
	}
}

function a84() {
	this.el = function(player, fO) {
		aJ.a1b(player, bP.fk(fO), bP.fm(fO)) && (bi.du = !0), aE.lI && this.eh()
	}, this.eh = function() {
		aE.i1 = !1;
		for (var aC = 0; aC < aE.ky; aC++) 0 !== ah.na[aC] && 0 === ah.hQ[aC] && aJ.a1i(aC);
		0 !== ah.na[aE.fM] ? (bg.nW[7] = ah.hQ[aE.fM], bg.nW[8] = ah.he[aE.fM], aS.a85(), aX.a86(), aE.hl || aE.hm || aI.nv(ah.jW[aE.fM] - 5, ah.jY[aE.fM] - 5, ah.jX[aE.fM] + 5, ah.jZ[aE.fM] + 5), aw.dm()) : aY.show(!1, !1, !1, !0), aO.a87(18),
			ag.a88(), ag.nM(!0), bS.z.a89(), aM.ty(), aE.rs = null, be.a8A = !0, be.a8B(), aE.lI && a1.a2.setState(1)
	}
}

function c6() {
	this.fZ = 512, this.a7J = 15e8, this.a8C = 1e9, this.a7S = 5e4, this.a8D = 512, this.gw = 2, this.fM = 0, this.ky = 0, this.a3i = 0, this.lK = 0, this.a3h = 0, this.a0m = 512, this.a0r = 512, this.a7I = 150, this.lI = !0, this.hl = 0, this.hm =
		0, this.a3f = 0, this.ki = 0, this.o4 = !1, this.i1 = 0, this.a8E = 0, this.iX = !1, this.a0t = 0, this.a0u = 0, this.lG = 0, this.a28 = 0, this.rs = null, this.a3z = new a1w, this.a8F = 30, this.a3c = 0, this.a3k = 0, this.a3y = 0, this
		.a3X = 0, this.data = new a8G, this.a8H = new a8I, this.a8J = 0, this.a8K = "", this.a48 = -1, this.a8L = function() {
			this.a48 = -1, bX.turnstile.close(), bR.dm(), bU.dm(), bu.clear(), this.a3i = this.ky = this.data.humanCount, this.lI = 1 === this.a3i && !__fx.customLobby.isActive(), this.o4 = !1, this.hl = this.data.isReplay, this.hm = this.data.a8M,
				this.lG = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a28 = this.data.isContest, this.iX = this.lG < 7 || 9 === this.lG, this.lG = 10 === this.lG &&
				this.lI ? 7 : this.lG, this.lG = 8 === this.lG && 2 !== this.ky ? 7 : this.lG, b0.dm(), this.a0t = this.data.numberTeams, this.data.teamPlayerCount ? this.a0u = +(0 < this.data.teamPlayerCount[0]) : (this.a0u = 0, this.iX && this
					.lI && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.a0t + 1), aE.a8H.a8N())), this.a8F = this.ky <= 2 ? 30 : this.ky <= 50 ? 40 : 50, this.a8E = this.i1 = __fx.customLobby.isActive() ?
				__fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.rs = this.i1 ? new a84 : null, this.a0m = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this
				.ky) : 1 === m.dy ? this.a0m = this.ky : this.a0m = this.data.playerCount,
				this.a0r = this.a0m, this.lK = this.a0m - this.ky, this.a3h = 0, this.fM = this.data.selectedPlayer, this.a3c = 0, this.a3k = 0, this.a3y = 0, this.a3X = 0, az.a8O(this.data.spawningSeed), af.dm(), ah.dm(), ao.dm(), aj.a8P(), bB.qu
				.rg = [], bB.i3.qx = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.dm(), this.a3f = 1, bg.dm(), a8Q(), ad.dn(), aq.a8R(), be.dm(), ad.dm(), au.dm(),
				bP.dm(), bQ.dm(), ap.dm(), bY.a8S(), aF.dm(), aj.a8(), aJ.dm(), aK.dm(), am.a8T(), bC.dm(), bk.dm(), bS.dm(), bh.dm(), a8U.putImageData(a8V, 0, 0), aW.dm(), aT.dm(), aS.dm(), bF.dm(), ax.dm(), aV.dm(), aX.dm(), aN.dm(), aR.dm(), aO
				.dm(), aQ.dm(), aM.dm(), aY.dm(), aG.dm(), aH.dm(), gf(), ae.dm(), ag.dm(), b5.dm(), b6.dm(), b2.dm(), b8.dm(), b9.dm(), this.a3z.dm(), bi.a8S(), aI.nu(), 0 === ah.na[aE.fM] && aY.show(!1, !0), ag.nM(!0), aw.dm(), bi.du = !0, this
				.hl || this.lI && this.i1 || a1.a2.setState(1), this.a8J = 0
		}, this.a55 = function(eb) {
			bC.rq.a8X.length ? this.a8K = bC.rq.a8X : this.a8K = bC.a8Y.a39(), __fx.replayHistory.save(this.a8K), !1 === __fx.customLobby.isActive() && b1.z.a8Z(), bu.clear(), this.a3f = 0, bi.a8a(), a1.a2.setState(0), ab.setState(0), __fx
				.customLobby.isActive() || bX.eT.show(eb), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a8J ? u.z.a8b(0) : 1 === this.a8J ? u.v(19) : u.v(5, 5)
		}, this.a8c = function() {
			return this.hl ? aN.hn || !bF.a8d : this.lI && (aN.hn || this.i1)
		}, this.a8e = function() {
			return 1 === this.a3f && !this.i1
		}
}

function a8G() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.a8M = 0, this.a8f = 0, this.elo = null, this.colorsType = 0, this
		.colorsPersonalized = 1, this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData =
		null, this.spawningType = 0, this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this
		.aIncomeData = null, this.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null,
		this.a8g = null
}

function a8I() {
	this.a8N = function() {
		var a8h = aE.data;
		bD.sr.a6Q(a8h.teamPlayerCount, a8h.playerCount), a8h.numberTeams = bD.sr.a6H(a8h.teamPlayerCount, 0), a8h.teamPlayerCount[0] && a8h.teamPlayerCount[7] && (a8h.teamPlayerCount[7] = 0, this.a8N())
	}, this.a8i = function() {
		var a8h = aE.data;
		a8h.mapType < 2 ? bV.a8(bV.a8j(a8h), a8h.mapSeed) : bV.a8k(a8h.canvas)
	}, this.a8l = function() {
		var a8h = aE.data;
		a8h.colorsData || (a8h.colorsData = new Uint32Array(1)), 0 === a8h.gameMode && (a8h.colorsData[0] = bm.z.zL()), a8h.selectableName && (a8h.playerNamesData || (a8h.playerNamesData = new Array(1)), a8h.playerNamesData[0] = bm.buffer.data[
			122].value), a8h.a8g = new Uint32Array(1), a8h.a8g[0] = bJ.f3.f4(bm.buffer.data[105].value, 5)
	}, this.a8m = function() {
		aE.data = new a8G
	}
}

function dh() {
	var a8n = [];
	this.rQ = function(player, r4, a8o, a8p) {
		player === aE.fM || r4 === aE.fM || !a8p && bD.gy.kL(player) || bD.gy.kL(r4) || this.a29(ah.a2A[player] + " supported " + ah.a2A[r4] + " with " + bD.tg.a2y(a8o) + " ressource" + (1 === a8o ? "." : "s."))
	}, this.a29 = function(sA, rF) {
		sA = {
			ec: aX.a8r(),
			sA: sA,
			rF: rF
		};
		a8n.push(sA), 30 === u.uw && u.a4v().a29(sA)
	}, this.clear = function() {
		a8n = [];
		var vI = u.a8s(30);
		vI && vI.clear()
	}, this.a8t = function() {
		return a8n
	}
}

function da() {
	this.a2f = 0, this.gap = 0, this.uW = 0, this.sp = 0, this.dm = function() {
		this.resize()
	}, this.resize = function() {
		this.a2f = .0022 * bD.sF.sk(.5) * i.iq, this.uW = this.a2f / i.l, this.gap = Math.max(Math.floor((a1.a2.ip() ? .0114 : .01296) * i.iq), 2), this.sp = this.gap / i.l
	}
}

function dZ() {
	this.a8u = function() {
		return a1.a2.ip() ? 2 : 1
	}
}

function cH() {
	var p4, fj, fl, a8v, a8w, a8x, ec, a8y, a8z, a90, a91, gap, zoom, rZ, a92;

	function a9G(mD, mE, fG) {
		ad.fX(fG) || -1 === (mD = bQ.ln.a9P(mD, mE)) ? aO.a9O(fG) : aO.a9Q(mD)
	}

	function a9C(a8y) {
		for (var aC = rZ.length - 1; 0 <= aC; aC--)
			if (rZ[aC] === a8y) return 1
	}

	function a9A(a97) {
		var aC, fc;
		if (-1 !== a97)
			for (fc = p4.length, aC = 0; aC < fc; aC++)
				if (p4[aC].iP && p4[aC].fj + 1 === a97 % 4 && p4[aC].fl + 1 === a97 >> 2) return aC;
		return -1
	}

	function a98(mD, mE) {
		var vI = gap / 2;
		return mD < fj - a8v - 3 * vI || fj + 3 * a8v + 5 * vI < mD || mE < fl - a8v - 3 * vI || fl + 2 * a8v + 3 * vI < mE ? -1 : 4 * (mE < fl - vI ? 0 : mE < fl + a8v + vI ? 1 : 2) + (mD < fj - vI ? 0 : mD < fj + a8v + vI ? 1 : mD < fj + 2 * a8v +
			3 * vI ? 2 : 3)
	}
	this.a93 = function() {
		var aC, fw, a96 = [bE.pu, bE.qA, bE.pS, bE.qb, bE.qN];
		for (p4 = new Array(10), aC = 0; aC < 10; aC++) p4[aC] = {
			id: aC,
			iP: !1,
			lv: 0,
			canvas: [],
			fj: 0,
			fl: 0
		};
		for (p4[0].colors = [0, 1, 2, 3], p4[0].fj = 0, p4[0].fl = 0, p4[1].colors = [1, 4], p4[1].fj = 1, p4[1].fl = 0, p4[2].colors = [0, 1], p4[2].fj = -1, p4[2].fl = 0, p4[3].colors = [0], p4[3].fj = 0, p4[3].fl = 0, p4[4].colors = [0, 2],
			p4[4].fj = 1, p4[4].fl = 1, p4[5].colors = [3], p4[5].fj = 0, p4[5].fl = -1, p4[6].id = 20, p4[6].colors = [0], p4[6].fj = 1, p4[6].fl = -1, p4[7].id = 21, p4[7].colors = [0], p4[7].fj = 0, p4[7].fl = 1, p4[8].id = 16, p4[8]
			.colors = [0], p4[8].fj = 0, p4[8].fl = 0, p4[9].id = 10, p4[9].colors = [4], p4[9].fj = 2, p4[9].fl = 0, aC = 0; aC < 10; aC++)
			for (fw = 0; fw < p4[aC].colors.length; fw++) p4[aC].canvas.push(function(id, a6W) {
				if (id < 20) return bD.canvas.a2R(ac.get(3), id, a6W);
				var a6W = ac.get(3).height,
					a6X = bD.sF.a06(a6W, a6W),
					ih = bD.sF.getContext(a6X);
				20 === id ? ih.drawImage(ac.get(18), 0, 0) : 21 === id && ak.a0H.a2g(ak.tx.a2V + ak.tx.a2m, ih, 0, 0, a6W);
				return a6X
			}(p4[aC].id, a96[p4[aC].colors[fw]]))
	}, this.a95 = function() {
		return p4
	}, this.dm = function() {
		rZ = [], fj = fl = ec = 0, a8w = a8x = -1e3, this.resize()
	}, this.resize = function() {
		a8v = Math.floor((a1.a2.ip() ? .075 : .0468) * i.iq), zoom = a8v / ac.get(3).height, gap = Math.floor(a8v / 3)
	}, this.a5Y = function(mD, mE) {
		return !!this.iP() && (bi.du = !0, !!ak.a0H.hq(mD, mE, a8z) || (mD = function(mD, mE) {
			a8x = a8w = -1e3;
			var a99 = a9A(a98(mD, mE));
			if (-1 === a99) return 0;
			if (1 !== p4[a99].colors[p4[a99].lv])
				if (5 === a99) {
					if (! function() {
							var ed = performance.now();
							a92 + 4e3 < ed && (rZ = []);
							a92 = ed
						}(), a9C(a8y)) return 1;
					rZ.push(a8y), 16 < rZ.length && rZ.shift()
				} else if (6 === a99) {
				for (var aC = rZ.length - 1; 0 <= aC; aC--) 0 === ah.na[rZ[aC]] && rZ.splice(aC, 1);
				0 < rZ.length && (b6.a9D(1, rZ, !0) && bB.gy.rY(rZ, a8y), rZ = [])
			} else if (2 === a99) ao.iH(a8y) && bB.i3.r3(aS.i7(), a8y);
			else if (3 === a99) aE.i1 && bB.i3.i4(a90);
			else if (0 === a99)
				if (0 === p4[0].lv) {
					if (aE.a8E && aX.a8r() < 350) return 1;
					bY.a9E(4), bB.i3.iA(aS.i7(), a8y)
				} else b2.iB(a8y, aS.i7());
			else if (1 === a99) bB.i3.iF(aS.i7(), a90);
			else if (9 === a99) bB.i3.iI(aS.i7());
			else {
				if (7 === a99) return bY.a9E(0), ak.a0H.show(mD, mE), 2;
				if (4 === a99) b6.a9D(0, [a8y], !0) && bB.gy.rV(a8y);
				else {
					if (8 !== a99) return 0;
					bB.i3.i6(aS.i7(), a91, a8y)
				}
			}
			return 1
		}(mD, mE), this.ty(), 2 === mD && (ak.a0H.iP = !0), 0 < mD))
	}, this.a5a = function(mD, mE) {
		this.iP() || (a8w = mD, a8x = mE, ec = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.ht(mouseX),
			coordY = bP.hv(mouseY),
			point = bP.fS(bP.fz(coordX, coordY));
		bP.hw(coordX, coordY) && a9G(mouseX, mouseY, point)
	}, this.click = function(mD, mE, a5h) {
		var hs = bP.ht(mD),
			hu = bP.hv(mE),
			fO = bP.fz(hs, hu),
			fG = bP.fS(fO),
			a9F = (a1.a2.ip() ? .025 : .0144) * i.iq,
			ed = performance.now();
		return !(Math.abs(mD - a8w) > a9F || Math.abs(mE - a8x) > a9F || ec + 500 < ed || (ec = ed, bM.t9() && (bM.hh = mD, bM.hi = mE, b8.eh(1), b9.eh(1)), !bP.hw(hs, hu))) && (a5h ? (a9G(mD, mE, fG), !1) : aN.hn || this.iP() || !bD.gy.hp(aE
			.fM) || aE.hl || aE.hm ? (this.ty(), !1) : (aE.i1 ? 0 <= (a90 = bv.i2(fO)) && (p4[3].iP = !0) : 2 === aE.a3f ? ad.hC(fG) && (a8y = ad.fU(fG), bD.gy.kL(a8y) || (p4[0].iP = !0, p4[0].lv = 1, p4[7].iP = !0)) : (bQ.iG.iH(aE.fM, fO) &&
				(p4[0].iP = !0, p4[0].lv = 1, p4[1].iP = !0, p4[1].lv = 0, p4[9].iP = !0, p4[9].lv = 0), bQ.iD.iE(aE.fM, fO) && (p4[0].iP = !0, p4[0].lv = 1, p4[1].iP = !0, p4[1].lv = 1, a90 = bR.gE[7]), ad.fh(fG) ? (a91 = an.fD.fF(
				fG)) && (a9F = bP.fS(a91), p4[8].iP = !0, a8y = ad.fT(a9F) ? aE.fZ : ad.fU(a9F)) : (ad.a1g(aE.fM, fG) && (a8z = aE.fM, p4[0].iP = !0, p4[0].lv = 1, p4[7].iP = !0), -1 !== (ed = bv.i8(fO)) && (ad.fT(ed << 2) ? (a8y = aE.fZ,
					bw.i9(aE.fM) ? (p4[0].iP = !0, p4[0].lv = 0) : ae.gj(aE.fM) && (p4[0].iP = !0, p4[0].lv = 3)) : (a8y = ad.fU(ed << 2), p4[0].lv = 1, p4[5].iP = function(a8y) {
					return !bD.gy.kL(a8y) && !a9C(a8y) && b6.a9D(1, [a8y], !1)
				}(a8y), p4[7].iP || bD.gy.kL(a8y) || (a8z = a8y, p4[7].iP = !0), p4[4].iP = !bD.gy.kL(a8y) && !ag.a9K(a8y) && b6.a9D(0, [a8y], !1), p4[6].iP = function(a8y) {
					if (0 === rZ.length) return !1;
					if (performance.now() > a92 + 4e3) return !(rZ = []);
					return !a9C(a8y) && ! function(a8y) {
						var aC;
						if (aE.iX)
							for (aC = rZ.length - 1; 0 <= aC; aC--)
								if (!bw.fV(a8y, rZ[aC])) return 1;
						return
					}(a8y)
				}(a8y), bw.fV(a8y, aE.fM) ? (bw.iC(aE.fM, a8y) ? (p4[0].lv = 0, p4[0].iP = !0) : ae.gj(aE.fM) && (p4[0].lv = 3, p4[0].iP = !0), p4[0].iP = this.a9M()) : (p4[2].iP = !0, ao.iH(a8y) ? p4[2].lv = 0 : p4[2].lv = 1,
					p4[0].iP = !0))))), this.a9H(mD, mE)))
	}, this.a9H = function(mD, mE) {
		return fj = mD - Math.floor(a8v / 2), fl = mE - Math.floor(a8v / 2), !!this.iP()
	}, this.a5E = function(mD, mE) {
		return !!this.iP() && (ak.a0H.iP ? !ak.a0H.a2e(mD, mE) && (ak.a0H.iP = !1, bi.du = !0) : function(uH, mD, mE) {
			mD = a98(mD, mE);
			if (0 <= a9A(mD)) return !1;
			if ((1 === mD || 6 === mD) && 0 <= a9A(2)) return !1;
			if ((6 === mD || 9 === mD) && 0 <= a9A(10)) return !1;
			return uH.ty(), bi.du = !0
		}(this, mD, mE))
	}, this.ty = function() {
		for (var aC = p4.length - 1; 0 <= aC; aC--) p4[aC].iP = !1, p4[aC].lv = 0;
		ak.a0H.iP = !1
	}, this.iP = function() {
		return this.a9M() || ak.a0H.iP
	}, this.a9M = function() {
		for (var fc = p4.length, aC = 0; aC < fc; aC++)
			if (p4[aC].iP) return !0;
		return !1
	}, this.yI = function() {
		if (this.iP())
			if (ak.a0H.iP) ak.a0H.yI();
			else {
				var aC, ih = yJ,
					fw = p4,
					fc = fw.length,
					a9U = (a8v + gap) / zoom;
				for (ih.imageSmoothingEnabled = !0, ih.setTransform(zoom, 0, 0, zoom, fj, fl), aC = 0; aC < fc; aC++) fw[aC].iP && yJ.drawImage(fw[aC].canvas[fw[aC].lv], fw[aC].fj * a9U, fw[aC].fl * a9U);
				ih.imageSmoothingEnabled = !1, ih.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cI() {
	var k, canvas, a9V, a9W, a9X, a9Y = -1;

	function a9Z() {
		var a9a, p0 = canvas.getContext("2d", {
			alpha: !0
		});
		p0.clearRect(0, 0, k, k), p0.fillStyle = bE.pQ, p0.fillRect(0, 0, k, k), 9 === a9W && (p0.fillStyle = bE.pV, p0.fillRect(0, 0, k, k)), p0.fillStyle = bE.pU, __fx.utils.smoothFrame(p0, k, k) || (p0.fillRect(0, 0, k, 1), p0.fillRect(0, 0, 1,
			k), p0.fillRect(0, k - 1, k, 1), p0.fillRect(k - 1, 0, 1, k)), a9a = .9 * k / ac.get(0).width, p0.imageSmoothingEnabled = !0, p0.setTransform(a9a, 0, 0, a9a, Math.floor((k - a9a * ac.get(0).width) / 2), Math.floor((k - a9a * ac.get(0)
			.height) / 2)), p0.drawImage(ac.get(0), 0, 0), p0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9d(mD, mE) {
		if (!aN.hn) return mD <= k + bf.gap && mE >= aS.fl ? 9 : -1;
		if (mD <= 4 * k + bf.gap) {
			if (mE >= aS.fl) return 0;
			if (mE >= aS.fl - k - a9X * bf.gap) return 2
		} else if (mD <= 7 * k + bf.gap && mE >= aS.fl - k - a9X * bf.gap) return 1;
		return -1
	}
	this.hn = !1, this.dm = function() {
		a9W = -1, this.hn = !1, a9X = a1.a2.ip() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, a9V = bD.sF.sI(1, (a1.a2.ip() ? .5 : .45) * k), a9Z()
	}, this.a9b = function() {
		return !(1 !== aE.a3f || aE.i1 || (aE.hl ? !bF.a8d : this.hn && aE.lI))
	}, this.a5p = function() {
		this.hn = !this.hn, this.hn ? (bF.a5o(!1), aE.hl && bF.a8d && bF.a5q(!0), this.a9c(), 9 === a9W && (a9W = 0)) : (a9W = -1, a9Z(), !aE.lI || 1 !== aE.a3f || aE.i1 || aE.hl || a1.a2.setState(1)), bi.du = !0
	}, this.a9c = function() {
		(aE.lI || aE.hl) && 1 === aE.a3f && (aW.nM(!0), aE.i1 || setTimeout(function() {
			be.a3r()
		}, 0), a1.a2.setState(0))
	}, this.hq = function(mD, mE) {
		return 0 <= (a9Y = a9d(mD, mE)) || !aN.hn || aE.lI || aE.hl || bh.iP || aN.a5p(), a9Y
	}, this.a5E = function(mD, mE) {
		mD = a9d(mD, mE);
		mD !== a9W && (a9W = mD, this.hn || a9Z(), bi.du = !0)
	}, this.a5F = function(mD, mE) {
		mD = a9d(mD, mE);
		return -1 !== mD && a9Y === mD && (this.hn ? aE.o4 ? (0 <= mD && bF.a5o(!1), !aE.hl) : (0 === mD ? aE.a55() : 1 === mD ? this.a5p() : 2 === mD && u.v(1, 0), !0) : 9 === mD && (this.a5p(), !0))
	}, this.yI = function() {
		var j;
		this.hn ? (j = Math.floor(5.5 * k), yJ.setTransform(1, 0, 0, 1, bf.gap, aS.fl), yJ.fillStyle = bE.pQ, yJ.fillRect(0, 0, j, k), 0 === a9W ? (yJ.fillStyle = bE.pV, yJ.fillRect(0, 0, 4 * k, k)) : 1 === a9W && (yJ.fillStyle = bE.pV, yJ
				.fillRect(4 * k, 0, Math.floor(1.5 * k), k)), yJ.fillStyle = bE.pU, yJ.fillRect(0, 0, j, 1), yJ.fillRect(0, 0, 1, k), yJ.fillRect(4 * k, 0, 1, k), yJ.fillRect(0, k - 1, j, 1), yJ.fillRect(j - 1, 0, 1, k), yJ.font = a9V, bD.sF
			.textBaseline(yJ, 1), bD.sF.textAlign(yJ, 1), yJ.fillText(L(47), 2 * k, .54 * k), j = .4 * k, aN.a9h(bf.gap + 4 * k + (1.5 * k - j) / 2, aS.fl + .3 * k, j), j = 1, yJ.setTransform(1, 0, 0, 1, bf.gap, aS.fl - j * a9X * bf.gap - j *
				k), yJ.fillStyle = bE.pQ, yJ.fillRect(0, 0, 4 * k, k), a9W === j + 1 && (yJ.fillStyle = bE.pV, yJ.fillRect(0, 0, 4 * k, k)), yJ.fillStyle = bE.pU, yJ.fillRect(0, 0, 4 * k, 1), yJ.fillRect(0, 0, 1, k), yJ.fillRect(4 * k, 0, 1,
				k), yJ.fillRect(0, k - 1, 4 * k, 1), yJ.fillText(L(0 === j ? 47 : 48), 2 * k, .54 * k), yJ.setTransform(1, 0, 0, 1, 0, 0)) : yJ.drawImage(canvas, bf.gap, aS.fl)
	}, this.s7 = function(player) {
		return 0 !== ah.na[player] && 2 !== aE.a3f && !bD.gy.kL(player)
	}, this.a9h = function(fj, fl, fc) {
		yJ.setTransform(1, 0, 0, 1, fj, fl), yJ.lineWidth = bf.a2f, yJ.strokeStyle = bE.pU, yJ.beginPath(), yJ.moveTo(0, 0), yJ.lineTo(fc, fc), yJ.moveTo(0, fc), yJ.lineTo(fc, 0), yJ.stroke()
	}
}

function cJ() {
	var a9j, k, a9k, a9l, a9m, a9n, a9o, a9p, a9q;

	function a1n() {
		return aS.aA9(aO.aA5()) ? ax.iP ? __fx.settings.keybindButtons ? aS.fl - 2 * aS.k - 3 * a9k : aS.fl - aS.k - 2 * a9k : __fx.settings.keybindButtons ? aS.fl - aS.k - 2 * a9k : aS.fl - a9k : bF.aA9(aO.aA8()) ? ax.iP ? bF.a1n() - aS.k - 2 *
			a9k : bF.a1n() - a9k : ax.iP ? i.k - aS.k - (bn.a8u() + 1) * a9k : i.k - bn.a8u() * bf.gap
	}

	function a9v(ed, sA, id, hA, a9z, aA0, lb, aA1, aA2, aA3, aAE) {
		var aC, p0, a6X, sc, aAF = void 0 !== aA2,
			j = Math.floor(aR.measureText(sA, aO.a9V) + 1.5 * a9l + (aAF ? k : 1.5 * a9l));
		if (bi.du = !0, aAE || bu.a29(sA, aA2), j + 2 * a9k + aS.k > i.j && !aAF && 50 !== id && 20 < sA.length) a9v(ed, (aAE = bD.tg.a7v(sA))[0], id, hA, a9z, aA0, lb, aA1, aA2, aA3, !0), a9v(ed, aAE[1], id, hA, a9z, aA0, lb, aA1, aA2, aA3, !0);
		else if (aAE = j + (50 === id ? a9m : 0), (a6X = document.createElement("canvas")).width = j, a6X.height = k, (p0 = a6X.getContext("2d", {
				alpha: !0
			})).font = aO.a9V, bD.sF.textBaseline(p0, 1), bD.sF.textAlign(p0, 0), p0.clearRect(0, 0, j, k), p0.fillStyle = aA0, p0.fillRect(0, 0, j, k), __fx.utils.smoothFrame(p0, j, k, 0), p0.fillStyle = a9z, p0.fillText(sA, Math.floor(1.5 * a9l),
				Math.floor(k / 2)), aAF && (p0.imageSmoothingEnabled = !0, ak.a0H.a2g(aA2, p0, j - k, 0, k)), 0 === (sc = {
				ec: ed,
				sA: sA,
				id: id,
				player: hA,
				canvas: a6X,
				a9z: a9z,
				aA0: aA0,
				j: j,
				aA6: aAE,
				lb: lb,
				aA1: aA1,
				aA2: aA2,
				aA3: aA3
			}).ec || 0 < a9j.length && 0 < a9j[0].ec) a9j.unshift(sc);
		else {
			for (aC = 1; aC < a9j.length; aC++)
				if (0 < a9j[aC].ec) return void a9j.splice(aC, 0, sc);
			a9j.push(sc)
		}
	}

	function a9w(eK, vI, fw) {
		return "rgb(" + eK + "," + vI + "," + fw + ")"
	}

	function aAG(id, h5) {
		for (var fc = a9j.length, aC = 0; aC < fc; aC++) a9j[aC].id === id && h5-- <= 0 && (a9j.splice(aC, 1), aC--, fc--)
	}

	function aAH(id, player) {
		for (var fq = !1, aC = a9j.length - 1; 0 <= aC; aC--) a9j[aC].id !== id || player !== aE.fZ && a9j[aC].player !== player || (a9j.splice(aC, 1), fq = !0);
		return fq
	}

	function aAd(sA) {
		a9v(340, sA, 6, 0, a9w(215, 245, 255), bE.pR, -1, !1)
	}
	this.a9r = "", this.dm = function() {
		var self;
		a9p = 0, a9o = a1.a2.ip() ? 7 : 12, a9n = {
				wP: [0, 0, 0],
				a9s: [0, 0, 0],
				ns: [220, 180, 180],
				yH: [0, 0, 0],
				em: [0, 0, 0]
			}, a9j = [], this.resize(), aE.i1 && this.a3t(0, 18), bV.wg.a05[bV.fI].name.length && aAd(L(93, [bV.wg.a05[bV.fI].name])), bV.wg.a05[bV.fI].aAe && aAd(L(94, [bV.wg.a05[bV.fI].aAe])), aAd(L(95, [bV.fn - 2 + "x" + (bV.fo - 2)])), aAd(L(
				96, [bD.tg.a2y(aq.aAf)])), aq.aAf !== aq.aAg && aAd(L(97, [bD.tg.a2y(aq.aAg) + " (" + bD.tg.a7r(100 * aq.aAg / aq.aAf, 1) + ")"])), 0 < aq.aAh && aAd(L(73, [bD.tg.a2y(aq.aAh) + " (" + bD.tg.a7r(100 * aq.aAh / aq.aAf, 1) + ")"])),
			0 < aq.aAi && aAd(L(98, [bD.tg.a2y(aq.aAi) + " (" + bD.tg.a7r(100 * aq.aAi / aq.aAf, 1) + ")"])), 10 === aE.lG && a9v(120, L(99), 6, 0, a9w(235, 255, 120), bE.pR, -1, !1), 0 !== (self = this).a9r.length && (a9v(200, self.a9r, 0, 0, bE
				.pU, bE.pR, -1, !1), self.a9r = ""), aE.a28 && a9v(340, L(49), 6, 0, a9w(255, 200, 0), bE.pR, -1, !1), (self = aE.data.a8f) && a9v(340, 1 === self ? L(51) : L(52, [self]), 10, 0, bE.pU, bE.pR, -1, !1)
	}, this.resize = function() {
		var a9y, aC;
		if (k = (k = Math.floor((a1.a2.ip() ? .031 : .0249) * i.iq)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.a9V = bD.sF.sI(1, this.fontSize), a9k = bf.gap, a9l = Math.floor(k / 5), 0 < a9j.length)
			for (a9y = a9j, a9j = [], aC = a9y.length - 1; 0 <= aC; aC--) a9v(a9y[aC].ec, a9y[aC].sA, a9y[aC].id, a9y[aC].player, a9y[aC].a9z, a9y[aC].aA0, a9y[aC].lb, a9y[aC].aA1, a9y[aC].aA2, a9y[aC].aA3, !0);
		this.aA4()
	}, this.aA4 = function() {
		a9q = document.createElement("canvas");
		var sA = L(50),
			p0 = (a9m = aR.measureText(sA, this.a9V) + 5 * a9l, a9q.height = k, a9q.width = a9m, a9q.getContext("2d", {
				alpha: !0
			}));
		p0.font = this.a9V, bD.sF.textBaseline(p0, 1), bD.sF.textAlign(p0, 1), p0.clearRect(0, 0, a9m, k), p0.fillStyle = bE.pr, p0.fillRect(0, 0, a9m, k), p0.fillStyle = bE.pU, p0.fillText(sA, Math.floor(a9m / 2), Math.floor(k / 2))
	}, this.aA5 = function() {
		var fc;
		return ax.iP ? ax.j : 0 === (fc = a9j.length) ? 0 : 1 === fc ? a9j[0].aA6 : aA7(a9j[0].aA6, a9j[1].aA6)
	}, this.aA8 = function() {
		var fc = a9j.length;
		return ax.iP ? fc ? aA7(ax.j, a9j[0].aA6) : ax.j : 0 === fc ? 0 : 1 === fc ? a9j[0].aA6 : 2 === fc ? aA7(a9j[0].aA6, a9j[1].aA6) : aA7(aA7(a9j[0].aA6, a9j[1].aA6), a9j[2].aA6)
	}, this.hq = function(fj, fl) {
		for (var o1, aAA, aAB = a1n(), aC = a9j.length - 1; 0 <= aC; aC--)
			if ((aAA = aAB - (aC + 1) * k) <= fl && fl < aAA + k) return 50 === a9j[aC].id ? fj >= i.j - a9m - a9k - a9j[aC].j && (fj >= i.j - a9m - a9k ? bB.gy.rV(a9j[aC].player) : aI.nw(a9j[aC].player, 800, !1, 0), !0) : fj >= i.j - a9j[aC].j -
				a9k && (736 === a9j[aC].id ? (aAA = "https://" + a9j[aC].sA, window.open(aAA, "_blank"), aT.o6 = !1) : a9j[aC].aA1 && (a9j[aC].aA3 && a9j[aC].aA3.fv ? (aAA = a9j[aC].aA3.fO, o1 = bP.fk(aAA) - 10, aAA = bP.fm(aAA) - 10, aI.nv(
					o1, aAA, 19 + o1, 19 + aAA)) : a9j[aC].aA3 && a9j[aC].aA3.fw ? aI.nx(a9j[aC].player, a9j[aC].aA3.ny) : (aI.nw(a9j[aC].player, 800, !1, 0), 0 <= a9j[aC].lb && (o1 = a9j[aC].lb, a9j[aC].lb = a9j[aC].player, a9j[aC]
					.player = o1))), !0);
		return !1
	}, this.a29 = function(ed, sA, id, hA, a9z, aA0, lb, aA1, aA2, aA3) {
		a9v(ed, sA, id, hA, a9z, aA0, lb, aA1, aA2, aA3)
	}, this.aAD = function(s) {
		a9v(300, s, 252, 0, bE.pU, bE.pR, -1, !1)
	}, this.a87 = function(id) {
		for (var aC = a9j.length - 1; 0 <= aC; aC--) a9j[aC].id === id && (a9j[aC].ec = 1)
	}, this.a3t = function(player, id) {
		0 === id ? (aR.el(player, 0), aAG(423, 2), a9v(160, L(53, [ah.a2A[player]]), 423, player, "rgb(10,220,10)", bE.pR, -1, !1)) : 1 === id ? (aAH(50, aE.fZ), aR.el(player, 1), a9v(360, L(54, [ah.a2A[player]]), 0, player, bE.qC, bE.pR, -1, !
				0), aI.nw(player, 2700, !1, 0)) : 2 === id ? (aR.el(player, 2), a9v(0, L(55), 0, player, "rgb(10,255,255)", bE.pR, -1, !0), aI.nw(player, 2700, !1, 0)) : 3 === id ? (aR.el(player, 2), a9v(0, L(56, [ah.a2A[player]]), 0, player, bE
				.pU, bE.pR, -1, !0), aI.nw(player, 2700, !1, 0)) : 4 === id ? this.aAI(1, player, player) : 5 === id ? bD.gy.kL(aE.fM) || (function(id, nV) {
				var aC, ow = 0,
					fc = a9j.length;
				for (aC = 0; aC < fc; aC++)
					if (a9j[aC].id === id && nV <= ++ow) return a9j.splice(aC, 1)
			}(1, 5), ag.aAK(player) && a9v(180, L(57, [ah.a2A[player]]), 1, player, a9w(255, 200, 180), bE.pR, -1, !0), bD.gy.a7C(player, 10) && (aAG(573, 0), a9v(180, L(58, [ah.a2A[player]]), 573, player, bE.qC, bE.pR, -1, !0))) : 18 === id ?
			a9v(255, L(59), 18, 0, bE.pU, bE.pR, -1, !1) : 21 === id ? a9v(220, L(60), id, 0, bE.pU, bE.pR, -1, !1) : 22 === id ? this.aAI(2, player, player) : 59 === id && a9v(0, L(61), id, 0, bE.qa, bE.pR, 0, !1)
	}, this.a50 = function(s) {
		a9v(200, L(62, [s]), 94, 0, bE.pU, bE.q8, -1, !1)
	}, this.a45 = function(aAL) {
		if (aE.fM === aAL && !aE.lI && !aE.hl)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a9v(0, "Your Win Count is now " + __fx.wins.count, 3, aAL, bE.pU, bE.pR, -1, !0);
		ah.hQ[aAL] && (aR.el(aAL, 2), aE.ky < 100 ? a9v(0, L(56, [ah.a2A[aAL]]), 3, aAL, bE.pU, bE.pR, -1, !0) : a9v(0, L(63, [ah.a2A[aAL]]), 3, aAL, bE.pU, bE.pR, -1, !0))
	}, this.a9O = function(fG) {
		var sA, aAO, aAM = "(" + bP.fk(fG >> 2) + ", " + bP.fm(fG >> 2) + ")",
			aA1 = !1,
			player = 0;
		ad.fX(fG) ? ad.fT(fG) ? aAM = L(64, [aAM]) : (player = ad.fU(fG), (aE.hl || aE.hm) && !1 === __fx.hoveringTooltip.active && player !== aE.fM && (aE.fM = player, bg.aAN()), sA = L(65, [bD.p0.a6l(ah.a4O[player], bD.sF.sI(0, 10), 150)]) +
			"   ", sA = (sA += L(66, [bD.tg.a2y(ah.he[player])]) + "   ") + L(67, [bD.tg.a2y(ah.hQ[player])]) + "   ", aE.iX && (aAO = bj.a42[bj.lL[bj.fa[player]]], sA += L(68) + ": " + aAO + "   "), bD.gy.kL(player) && (sA += L(69) + ": " +
				aF.l9[aF.iM[player]] + "   "), aAM = sA = (sA += L(70, [player]) + "   ") + L(71, [aAM]), aA1 = !0) : aAM = ad.fh(fG) ? L(72, [aAM]) + "   #" + ad.fK(fG) : L(73, [aAM]), aAG(55, 0), a9v(220, aAM, 55, player, bE.pU, bE.pR, -1,
			aA1, void 0, void 0, !0)
	}, this.a9Q = function(aAP) {
		var lt = bQ.z,
			player = lt.ms[aAP] >> 3,
			sA = (bi.du = !0, aAG(55, 0), L(74, [ah.a2A[player]]) + "   ");
		a9v(220, sA += L(66, [bD.tg.a2y(lt.aAQ[aAP])]), 55, player, bE.pU, bE.pR, -1, !0)
	}, this.rE = function(qy, aAR, rF) {
		qy === aE.fM ? a9v(175, " " + L(75, [ah.a2A[aAR]]) + ": ", 1001, aAR, a9w(200, 255, 210), bE.pR, -1, !0, rF) : this.aAS(qy, rF)
	}, this.aAS = function(qy, rF) {
		aAG(1e3, 0), a9v(175, ah.a2A[qy] + ": ", 1e3, qy, bE.pU, "rgba(5,60,25,0.9)", -1, !0, rF)
	}, this.a44 = function() {
		var s;
		aE.a3k ? (s = L(76), aR.a43(L(77), 2, 1, 12), a9v(0, s, 40, 0, "rgb(10,220,10)", bE.pR, -1, !1)) : (s = L(78), aR.a43(L(79), 2, 0, 16), a9v(0, s, 41, 0, bE.pU, bE.pR, -1, !1))
	}, this.a1x = function() {
		var h5 = ah.a2A,
			ff = aE.data;
		a9v(300, h5[0] + " [" + aE.a3z.a23(ff.elo[0]) + "] vs " + h5[1] + " [" + aE.a3z.a23(ff.elo[1]) + "]", 65, 0, bE.pL, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aAT = function(s) {
		a9v(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aAU = function(aAV) {
		a9v(0, L(aAV ? 80 : 81), 247, 0, bE.qZ, bE.pR, -1, !1)
	}, this.a25 = function(a22, a24, aAW) {
		var ff = aE.data,
			h5 = ah.a2A;
		a9v(0, h5[0] + ": " + aE.a3z.a23(ff.elo[0]) + " -> " + a22, 66, 0, bE.pU, aAW[0], -1, !1), a9v(0, h5[1] + ": " + aE.a3z.a23(ff.elo[1]) + " -> " + a24, 66, 1, bE.pU, aAW[1], -1, !1)
	}, this.rW = function(player, id) {
		0 === id ? aAH(50, player) ? (a9v(128, L(82, [ah.a2A[player]]), 52, player, a9w(180, 255, 180), bE.pR, -1, !0), ag.s5(player, 2, 255)) : a9v(384, L(83, [ah.a2A[player]]), 51, player, a9w(210, 210, 255), bE.pR, -1, !0) : aAH(51, player) ?
			(a9v(128, L(84, [ah.a2A[player]]), 52, player, bE.pU, "rgba(60,120,10,0.9)", -1, !0), ag.s5(player, 2, 255)) : (a9v(384, L(85, [ah.a2A[player]]), 50, player, bE.pU, "rgba(90,90,90,0.9)", -1, !0), ag.s5(player, 2, 96))
	}, this.ra = function(wP, target) {
		var color = a9w(210, 255, 210);
		1 < wP.length ? a9v(230, L(86, [wP.length, ah.a2A[target]]), 66, target, color, bE.pR, -1, !0) : a9v(230, L(87, [ah.a2A[wP[0]], ah.a2A[target]]), 66, wP[0], color, bE.pR, target, !0)
	}, this.aAX = function(player, target) {
		a9v(230, L(88, [ah.a2A[player], ah.a2A[target]]), 66, player, bE.pU, "rgba(75,65,5,0.9)", target, !0)
	}, this.aAY = function(id, h5) {
		aAG(id, h5)
	}, this.a3n = function(id, player) {
		aAH(id, void 0 === player ? aE.fZ : player)
	}, this.aAZ = function(id) {
		for (var aC = a9j.length - 1; 0 <= aC; aC--)
			if (a9j[aC].id === id) return a9j[aC];
		return null
	}, this.rR = function(a8o, aAa, player) {
		2 !== ah.a77[aE.fM] && a9v(200, 1 === a8o ? L(89, [ah.a2A[player]]) : L(90, [bD.tg.a2y(a8o), ah.a2A[player]]), 30, player, "rgb(190,255,190)", bE.pR, -1, !0)
	}, this.aAc = function(a8o, player) {
		2 !== ah.a77[aE.fM] && (aAG(31, 0), a8o = " (" + bD.tg.a2y(a8o) + ") 💸", a9v(150, a8o = bD.gy.kL(player) ? L(91) + a8o : L(92, [ah.a2A[player]]) + a8o, 31, player, bE.pL, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a3m = function(bz) {
		for (var em = bi.kv(), aC = 2; 0 <= aC; aC--) 0 < a9n.yH[aC] && (bz || a9n.em[aC] < em - 220) && this.aAj(aC)
	}, this.aAj = function(id) {
		var sA, fc = a9n.yH[id],
			player = a9n.wP[id];
		a9n.yH[id] = 0, 1 === fc ? (0 === id ? sA = L(100, [ah.a2A[player], ah.a2A[a9n.a9s[0]]]) : 1 === id ? sA = L(101, [ah.a2A[player]]) : 2 === id ? sA = L(102, [ah.a2A[player]]) : 3 === id && (sA = L(103, [ah.a2A[player]])), aAG(7, 0), a9v(
			a9n.ns[id], sA, 7, a9n.a9s[id], bE.pU, bE.pR, -1, !0)) : (sA = L(0 === id ? 104 : 1 === id ? 105 : 106, [fc]), aAG(7, 0), a9v(a9n.ns[id], sA, 7, player, bE.pU, bE.pR, -1, !1))
	}, this.aAI = function(id, i5, lb) {
		var em = bi.kv(),
			fc = a9n.yH[id] + 1;
		a9n.yH[id]++, a9n.wP[id] = i5, a9n.a9s[id] = lb, 1 === fc && (a9n.em[id] = em), (1 === fc && (aE.a3i < 32 || 2 === aE.a3f) || 1 < fc && (a9n.em[id] < em - 140 || 2 === aE.a3f)) && this.aAj(id)
	}, this.eh = function() {
		b3.eh();
		for (var kD = (kD = a9j.length - a9o) <= 1 ? 1 : kD * kD, aC = a9j.length - 1; 0 <= aC; aC--) 0 < a9j[aC].ec && (a9j[aC].ec -= kD, a9j[aC].ec <= 0) && (bi.du = !0, a9j.splice(aC, 1));
		! function() {
			var h5, aC;
			if (128 !== a9p && !(++a9p < 128))
				for (h5 = 5, aC = am.lU - 1; 0 <= aC; aC--) 1 === ah.a77[am.lZ[aC]] && 0 < h5-- && a9v(240, L(103, [ah.a2A[am.lZ[aC]]]), 1, am.lZ[aC], bE.pL, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a3m(!1)
	}, this.yI = function() {
		for (var a0p, fl = a1n(), aC = a9j.length - 1; 0 <= aC; aC--) a0p = fl - (aC + 1) * k, 50 === a9j[aC].id ? (yJ.drawImage(a9j[aC].canvas, i.j - a9j[aC].j - a9m - a9k, a0p), yJ.drawImage(a9q, i.j - a9m - a9k, a0p)) : yJ.drawImage(a9j[aC]
			.canvas, i.j - a9j[aC].j - a9k, a0p)
	}, this.aAl = function(id, iM) {
		var aAM, aAm = bE.pe;
		0 === id ? aAM = L(107) : 1 === id ? (aAM = L(108), aAm = bE.qR) : 2 === id ? aAM = L(109) : 3 === id ? aAM = L(110) : (aAM = bD.tg.a2y(iM), aAm = 5 === id ? bE.qR : bE.pR), aAG(74, 0), a9v(0, aAM, 74, 0, bE.pU, aAm, -1, !1, void 0,
			void 0, !0)
	}
}

function cK() {
	var aAo, aAp, yK = "",
		a0a = 0,
		a0b = 0,
		aAn = -1,
		eG = ["Team", "BR", "1v1", "Zombie"],
		aAq = [
			[0, 15, 30, 45],
			[10, 40],
			[25],
			[55]
		],
		aAr = 10;

	function aAv() {
		for (var aAw = aAx(), aAy = -1, aAt = 0, aC = 0; aC < aAq.length; aC++) {
			var ff = aAz(aC, aAw);
			0 <= ff && (aAy < 0 || ff < aAy) && (aAy = ff, aAt = aC)
		}
		if (!(aAy < 0)) return aAy !== aAn && (yK = eG[aAt] + " " + aAp + ": " + aB0(aAy), aAn = aAy, a0a = aR.measureText(yK, aAo), a0a += Math.floor(.4 * a0b), 1);
		yK = ""
	}

	function aAx() {
		var ed = new Date;
		return 60 * ed.getUTCMinutes() + ed.getUTCSeconds()
	}

	function aAz(aAt, aAw) {
		for (var aB2 = aAq[aAt], g4 = -1, fv = 0; fv < aB2.length; fv++) {
			var ff = (ff = 60 * aB2[fv] + aAr - aAw) <= 0 ? 3600 + ff : ff;
			(g4 < 0 || ff < g4) && (g4 = ff)
		}
		return g4
	}

	function aB0(aB3) {
		return aB4(Math.floor(aB3 / 60)) + ":" + aB4(aB3 % 60)
	}

	function aB4(aB5) {
		return aB5 < 10 ? "0" + aB5 : String(aB5)
	}
	this.aAs = function(aAt, aAu) {
		return 0 <= aAq[aAt].indexOf(aAu)
	}, this.dm = function() {
		aAp = L(111)
	}, this.resize = function() {
		a0a = Math.floor((a1.a2.ip() ? .53 : .36) * i.iq), a0b = Math.floor(.065 * a0a), aAo = bD.sF.sI(1, Math.floor(.9 * a0b)), aAn += 1e3, aAv()
	}, this.eh = function() {
		aAv() && (bi.du = !0)
	}, this.aB1 = function() {
		for (var aAw = aAx(), sA = "", aC = 0; aC < aAq.length; aC++) {
			var ff = aAz(aC, aAw);
			0 <= ff && (sA += (sA ? "   " : "") + eG[aC] + ": " + aB0(ff))
		}
		return sA
	}, this.yI = function(fl) {
		yK && (yJ.lineWidth = 1 + Math.floor(a0b / 15), yJ.translate(i.j - a0b, fl + a0a), yJ.rotate(-Math.PI / 2), yJ.fillStyle = bE.pU, yJ.fillRect(0, 0, a0a, a0b), yJ.strokeStyle = bE.pL, yJ.strokeRect(0, 0, a0a, a0b + 10), yJ.fillStyle = bE
			.pL, yJ.font = aAo, bD.sF.textBaseline(yJ, 1), bD.sF.textAlign(yJ, 1), yJ.fillText(yK, Math.floor(a0a / 2), Math.floor(.59 * a0b)), yJ.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cL() {
	var a8n, aB6, aB7, a0b, aB8, aB9 = 0,
		aBA = 0;

	function aBC(aC) {
		var aBE = !0,
			a2n = bE.pU,
			j = (1 === a8n[aC].id ? a8n[aC].p0.fillStyle = bE.qP : a8n[aC].k7 === aE.fZ ? a8n[aC].p0.fillStyle = bE.pf : (ad.aBF(a8n[aC].k7), a8n[aC].p0.fillStyle = bD.color.pO(bR.gB[0], bR.gB[1], bR.gB[2], .87), 400 < bD.sr.a6B(bR.gB, 0, 2) && (
				aBE = !1, a2n = bE.pL)), a8n[aC].canvas.width),
			v1 = (a8n[aC].p0.clearRect(0, 0, j, a0b), a8n[aC].p0.fillRect(0, 0, j, a0b), a8n[aC].p0.fillStyle = a2n, ! function(p0, j, a0b) {
				p0.fillRect(0, 0, j, 1), p0.fillRect(0, a0b - 1, j, 1), p0.fillRect(0, 0, 1, a0b), p0.fillRect(j - 1, 0, 1, a0b)
			}(a8n[aC].p0, j, a0b), aB6 + 2 * a0b < j && (a8n[aC].p0.fillRect(j - aB6 - a0b, 0, 1, a0b), a8n[aC].p0.fillText(ah.a2A[a8n[aC].k7], Math.floor((j - aB6) / 2), Math.floor(.57 * a0b))), 0 !== a8n[aC].id ? 0 : a0b);
		a8n[aC].p0.fillText(bD.tg.a2y(a8n[aC].iM), Math.floor(j - aB6 / 2 - v1), Math.floor(.57 * a0b)),
			function(aC, j, v1, aBE) {
				a8n[aC].p0.fillStyle = aBE ? bE.pW : bE.pS;
				aBE = Math.floor(aB6 * a8n[aC].iM / a8n[aC].aBL);
				a8n[aC].p0.fillRect(Math.floor(j - aB6 - v1), a0b - aB8, aBE, aB8)
			}(aC, j, v1, aBE), 0 === a8n[aC].id ? (aBI(aC, j, aBE, a2n), function(aC, j, aBE) {
				a8n[aC].p0.strokeStyle = aBE ? bE.pm : bE.pw, a8n[aC].p0.fillRect(a0b, 0, 1, a0b);
				aBE = j - a0b;
				a8n[aC].p0.beginPath(), a8n[aC].p0.moveTo(Math.floor(.3 * a0b + aBE), Math.floor(a0b / 2)), a8n[aC].p0.lineTo(Math.floor(a0b - .3 * a0b + 0 + aBE), Math.floor(a0b / 2)), a8n[aC].p0.stroke(), a8n[aC].p0.beginPath(), a8n[aC].p0
					.moveTo(Math.floor(a0b / 2 + aBE), Math.floor(.3 * a0b)), a8n[aC].p0.lineTo(Math.floor(a0b / 2 + aBE), Math.floor(a0b - .3 * a0b + 0)), a8n[aC].p0.stroke()
			}(aC, j, aBE)) : aBI(aC, 2 * a0b, aBE, a2n)
	}

	function aBI(aC, j, aBE, a2n) {
		a8n[aC].p0.strokeStyle = a8n[aC].aBM ? bE.pd : aBE ? bE.q4 : bE.q5, a8n[aC].p0.fillStyle = a2n, a8n[aC].p0.fillRect(j - a0b, 0, 1, a0b), a8n[aC].p0.lineWidth = Math.max(Math.floor(a0b / 12), 3), a8n[aC].p0.lineCap = "round";
		aBE = .35;
		j = a0b + 1, a8n[aC].p0.beginPath(), a8n[aC].p0.moveTo(Math.floor(j - aBE * a0b + 0), Math.floor(aBE * a0b)), a8n[aC].p0.lineTo(Math.floor(j - a0b + aBE * a0b), Math.floor(a0b - aBE * a0b + 0)), a8n[aC].p0.stroke(), a8n[aC].p0.beginPath(),
			a8n[aC].p0.moveTo(Math.floor(j - a0b + aBE * a0b), Math.floor(aBE * a0b)), a8n[aC].p0.lineTo(Math.floor(j - aBE * a0b + 0), Math.floor(a0b - aBE * a0b + 0)), a8n[aC].p0.stroke()
	}

	function aBY(h, aBW) {
		for (var iM, aC = aBW - 1; 0 <= aC; aC--) iM = ae.gp(aE.fM, aC), h[aC].iM !== iM && (h[aC].iM = iM, h[aC].aBL = Math.max(iM, h[aC].aBL), h[aC].aBD = !0)
	}

	function aBc(h, aBa) {
		for (var vE = aE.fM << 3, aAQ = bQ.z.aAQ, mp = bQ.z.mp, aBe = bQ.z.aBe, aC = aBa - 1; 0 <= aC; aC--) {
			var aBf = aBe[vE + aC],
				iM = aAQ[aBf];
			h[aC].iM !== iM ? (h[aC].iM = iM, h[aC].aBL = Math.max(iM, h[aC].aBL), h[aC].aBD = !0) : h[aC].aBM || mp[aBf] % 64 != 5 || (h[aC].aBM = !0, h[aC].aBD = !0)
		}
	}

	function aBB(a8q) {
		a8q.canvas = document.createElement("canvas"), bV.a0A.font = aB7;
		var j = aB6;
		a8q.k7 < aE.fZ && 0 === a8q.id && (j += Math.floor(bV.a0A.measureText(ah.a2A[a8q.k7] + "000").width)), j += a0b, 0 === a8q.id && (j += a0b), a8q.canvas.width = j, a8q.canvas.height = a0b, a8q.p0 = a8q.canvas.getContext("2d", {
			alpha: !0
		}), a8q.p0.font = aB7, bD.sF.textBaseline(a8q.p0, 1), bD.sF.textAlign(a8q.p0, 1)
	}

	function aBS(aC) {
		return aV.aBg() ? i.j - a8n[aC].canvas.width - bf.gap : aV.fj
	}

	function aBT(aC) {
		return Math.floor(2 * bf.gap + (aV.aBg() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * a0b))
	}
	this.dm = function() {
		aB9 = aBA = 0, a8n = [], this.resize()
	}, this.resize = function() {
		aB7 = aO.a9V, a0b = aO.fontSize + 5, a0b = Math.floor(1.25 * a0b), a1.a2.ip() && (a0b = Math.floor(1.25 * a0b)), aB8 = Math.floor(.15 * a0b), bV.a0A.font = aB7, aB6 = Math.floor(bV.a0A.measureText("02 000 000 0000").width);
		for (var aC = a8n.length - 1; 0 <= aC; aC--) aBB(a8n[aC]), aBC(aC)
	}, this.nM = function() {
		for (var aC = a8n.length - 1; 0 <= aC; aC--) a8n[aC].aBD && (a8n[aC].aBD = !1, aBC(aC))
	}, this.hq = function(mD, mE) {
		if (!(2 === aE.a3f || 0 === ah.na[aE.fM] || aE.hl || aE.hm || bD.gy.kL(aE.fM)))
			for (var aBN, aBO, aBP, aBQ = a1.a2.ip() ? a0b : 0, aBR = a1.a2.ip() ? Math.floor(.15 * a0b) : 0, aC = a8n.length - 1; 0 <= aC; aC--)
				if (aBN = aBS(aC), aBO = aBT(aC), aBP = a8n[aC].canvas.width, aBO - aBR <= mE && mE <= aBO + a0b + aBR) {
					if (aBN - aBQ <= mD && mD <= aBN + a0b + aBQ) return a8n[aC].aBM || (a8n[aC].aBD = !0, a8n[aC].aBM = !0, 0 === a8n[aC].id ? bB.i3.rC(a8n[aC].k7) : bB.i3.rB(a8n[aC].k7)), !0;
					if (0 === a8n[aC].id && aBN + aBP - a0b - aBQ <= mD && mD <= aBN + aBP + aBQ) return bY.a9E(3), bB.i3.iA(aS.i7(), a8n[aC].k7), !0
				} return !1
	}, this.eh = function() {
		var a6J, a6K, h, aBW;
		0 === ah.na[aE.fM] || bD.gy.kL(aE.fM) && !aE.hl && !aE.hm || (a6J = a8n.slice(0, aB9), a6K = a8n.slice(aB9, aB9 + aBA), h = a6J, aBW = ae.gj(aE.fM), function(h, aBW) {
			if (aB9 !== aBW) return 1;
			for (var aC = aBW - 1; 0 <= aC; aC--)
				if (h[aC].k7 !== ae.go(aE.fM, aC)) return 1;
			return
		}(h, aBW) ? aBY(h = function(h, aBW) {
			var aC, k7, fw, iM, a9y = [];
			loop: for (aC = 0; aC < aBW; aC++) {
				for (k7 = ae.go(aE.fM, aC), fw = 0; fw < h.length; fw++)
					if (h[fw].k7 === k7) {
						a9y.push(h.splice(fw, 1)[0]);
						continue loop
					} iM = ae.gp(aE.fM, aC), aBB(iM = {
					k7: k7,
					iM: iM,
					aBL: iM,
					id: 0,
					aBD: !0,
					aBM: !1,
					canvas: null,
					p0: null
				}), a9y.push(iM)
			}
			return a9y
		}(h, aBW), aBW) : aBY(h, aBW), a6J = h, a6K = function(h) {
			var aBa = bQ.z.l2[aE.fM];
			return function(h, aBa) {
				if (aBA !== aBa) return 1;
				for (var vE = aE.fM << 3, mr = bQ.z.mr, aBe = bQ.z.aBe, aC = aBa - 1; 0 <= aC; aC--) {
					var aBf = aBe[vE + aC];
					if (h[aC].k7 !== mr[aBf]) return 1
				}
				return
			}(h, aBa) ? aBc(h = function(h, aBa) {
				var aC, k7, fw, a9y = [],
					vE = aE.fM << 3,
					mr = bQ.z.mr,
					aAQ = bQ.z.aAQ,
					aBe = bQ.z.aBe;
				loop: for (aC = 0; aC < aBa; aC++) {
					var aBf = aBe[vE + aC];
					for (k7 = mr[aBf], fw = 0; fw < h.length; fw++)
						if (h[fw].k7 === k7) {
							a9y.push(h.splice(fw, 1)[0]);
							continue loop
						} aBf = aAQ[aBf], aBB(aBf = {
						k7: k7,
						iM: aBf,
						aBL: aBf,
						id: 1,
						aBD: !0,
						aBM: !1,
						canvas: null,
						p0: null
					}), a9y.push(aBf)
				}
				return a9y
			}(h, aBa), aBa) : aBc(h, aBa), h
		}(a6K), aB9 = a6J.length, aBA = a6K.length, a8n = a6J.concat(a6K))
	}, this.yI = function() {
		if (0 !== ah.na[aE.fM] && (!bD.gy.kL(aE.fM) || aE.hl || aE.hm))
			for (var aC = a8n.length - 1; 0 <= aC; aC--) yJ.drawImage(a8n[aC].canvas, aBS(aC), aBT(aC))
	}
}

function cM() {
	var a9j, l3, aBh, aBi, k, a9V, fontSize, aBj, aBk, aBl, aBm, canvas, p0, nn, aBn;

	function yY(aC) {
		return L(0 === aC ? 112 : 1 === aC ? 113 : 2 === aC ? 114 : 115)
	}

	function aBu() {
		aE.iX ? aBv + 4 * bf.gap + k + bk.aBw() > aS.fl ? yJ.drawImage(canvas, 2 * bf.gap + bk.aBw(), aBv + 2 * bf.gap) : yJ.drawImage(canvas, bf.gap, aBv + 3 * bf.gap + bk.aBw()) : yJ.drawImage(canvas, bf.gap, aBv + 2 * bf.gap)
	}

	function aBo() {
		canvas.width = a9j[0].width + aBl, canvas.height = k + aBl, (p0 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a9j[0].width + aBl, k + aBl), p0.translate(Math.floor(aBl / 2), Math.floor(aBl / 2)), p0.lineWidth = aBl, p0.fillStyle = 1 === a9j[0].aBt ? bE.pZ : bE.pR, aBx(), p0.fill(), p0.strokeStyle = 1 === a9j[0].aBt ? bE.pL :
			bE.pU, aBx(), p0.stroke(), bD.sF.textAlign(p0, 1), bD.sF.textBaseline(p0, 1), p0.fillStyle = 1 === a9j[0].aBt ? bE.pL : bE.pU, p0.font = a9V[0], p0.fillText(yY(a9j[0].aBs), Math.floor(a9j[0].width / 2), Math.floor(.72 * aBj[0] * k)), p0
			.font = a9V[1], p0.fillText(a9j[0].sA, Math.floor(a9j[0].width / 2), Math.floor((aBj[0] + .48 * aBj[1]) * k))
	}

	function aBx() {
		if (__fx.settings.smoothUI && p0.roundRect) return p0.beginPath(), p0.roundRect(0, 0, a9j[0].width, k, .15 * k);
		p0.beginPath(), p0.moveTo(aBm, 0), p0.lineTo(a9j[0].width - aBm, 0), p0.lineTo(a9j[0].width, aBm), p0.lineTo(a9j[0].width, k - aBm), p0.lineTo(a9j[0].width - aBm, k), p0.lineTo(aBm, k), p0.lineTo(0, k - aBm), p0.lineTo(0, aBm), p0.closePath()
	}
	this.dm = function() {
		l3 = 4, aBh = aBi = nn = 0, a9j = [], a9V = new Array(2), fontSize = new Array(2), (aBj = new Array(2))[0] = .3, aBj[1] = .7, aBk = new Array(4), canvas = document.createElement("canvas"), aBn = bi.ec + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.ip() ? .062 : .047) * i.iq), fontSize[0] = Math.floor(.85 * aBj[0] * k), fontSize[1] = Math.floor(.85 * aBj[1] * k), a9V[0] = bD.sF.sI(1, fontSize[0]), a9V[1] = bD.sF.sI(1, fontSize[1]), aC = aBk.length -
			1; 0 <= aC; aC--) aBk[aC] = this.measureText(yY(aC) + "000", a9V[0]);
		if (aBl = Math.floor(1 + .05 * k), aBm = Math.floor(.2 * k), 0 < a9j.length) {
			for (aC = a9j.length - 1; 0 <= aC; aC--) j = this.measureText(a9j[aC].sA + "00", a9V[1]), a9j[aC].width = j < aBk[aC] ? aBk[aC] : j;
			aBo()
		}
	}, this.eh = function() {
		0 !== l3 && (4 === l3 ? bi.ec > aBn && (l3 = 0, 1 === aE.a3f) && aR.a43(bV.wg.a05[bV.fI].name, 3, 1, 9) : (1 === l3 ? (0 === aBh && (aBo(), aBh = 1e-4), 1 <= (aBh += .002 * (bi.ec - nn)) && (aBi = 0, l3 = 2, aBh = 1), bi.du = !0) : 2 ===
			l3 ? ((aBi += (bi.ec - nn) / 1e3) > a9j[0].ns || 1 < aBi && 1 < a9j.length) && (l3 = 3) : 3 === l3 && ((aBh -= .002 * (bi.ec - nn)) <= 0 && (aBh = 0, a9j.shift(), l3 = 0 < a9j.length ? 1 : 0), bi.du = !0), nn = bi.ec))
	}, this.measureText = function(sA, a9V) {
		return yJ.font = a9V, Math.floor(yJ.measureText(sA).width)
	}, this.el = function(aBr, aC) {
		this.a43(ah.a2A[aBr], aC, 1, 0 === aC ? 3 : 7)
	}, this.a43 = function(sA, aBs, aBt, ns) {
		var j;
		sA.length && (j = (j = this.measureText(sA + "00", a9V[1])) < aBk[aBs] ? aBk[aBs] : j, a9j.push({
			sA: sA,
			width: j,
			aBs: aBs,
			aBt: aBt,
			ns: ns
		}), 0 === l3) && (aBh = 0, l3 = 1, nn = bi.ec)
	}, this.yI = function() {
		0 !== l3 && 0 !== aBh && (aBh < 1 ? (yJ.globalAlpha = aBh, aBu(), yJ.globalAlpha = 1) : aBu())
	}
}

function cv() {
	var k, canvas, p0, aBy, aBz, aC0, aC1, aBD, aC2, aC3, aC4, aC5, aAV = !1,
		a6X = (this.iP = !1, this.j = 0, new Array(2)),
		aC6 = 0;

	function nN() {
		var j = ax.j,
			lt = (aBD = !1, a1q(p0, j, k), Math.floor(j / 2));
		1 === aBy ? (p0.fillStyle = bE.po, p0.fillRect(lt, 0, lt, k)) : -1 === aBy && (p0.fillStyle = bE.q6, p0.fillRect(0, 0, lt, k)), a1r(p0, j, k, 2);
		var lt = (lt = Math.floor(.25 * k)) < 2 ? 2 : lt,
			aAf = (p0.fillStyle = bE.pa, Math.floor((k - 4) * aBz[1] / aC0[1]));
		0 < aAf && p0.fillRect(2, k - 2 - aAf, lt, aAf), 0 < (aAf = Math.floor((k - 4) * aBz[0] / aC0[0])) && p0.fillRect(j - 2 - lt, k - 2 - aAf, lt, aAf);
		lt = (lt = Math.floor(k / 8)) < 2 ? 2 : lt, a1t(p0, Math.floor(.4 * k), 0, k, lt, .5, !1), a1t(p0, Math.floor(j - 1.4 * k), 0, k, lt, .5, !0), aAf = 1.1 * k / a6X[0].width;
		p0.imageSmoothingEnabled = !0, p0.setTransform(aAf, 0, 0, aAf, (j - aAf * a6X[0].width) / 2, -.05 * k), p0.drawImage(a6X[+aAV], 0, 0), p0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aCB() {
		aC5 = -1, aAV = ai.aCC(), aO.a87(257), aO.aAU(aAV), ax.iP = !0, aBD = !0, aC2 = 360;
		for (var g4, ed = 0, aC = am.lU - 1; 0 <= aC; aC--) bD.gy.kL(am.lZ[aC]) || (ed += ah.hQ[am.lZ[aC]]);
		aAV ? aC0[0] = Math.max(bO.g3(3 * ed, 4), 1) : aE.iX ? (g4 = 9 === aE.lG ? 8 === bj.lL[bk.lX()] ? 80 : (g4 = bO.g3(100 * bk.lV(), aE.ki), bO.g3(bO.io(1550 - 11 * g4, 400, 1e3), 10)) : (g4 = bO.g3(100 * bk.lV(), aE.ki), bO.g3(bO.io(1600 - 12 *
			g4, 400, 1e3), 10)), g4 = bO.g3(g4 * ed, 100), aC0[0] = Math.max(g4, 1)) : 8 === aE.lG ? aC0[0] = Math.max(bO.g3(3 * ed, 4), 1) : aC0[0] = Math.max(bO.g3(3 * ed, 5), 1), aC0[1] = Math.max(ed - aC0[0], 1)
	}

	function aC7() {
		aC4 = bi.kv(), aBD = !0, aC2 = aBy = 0, aC1 = [], ax.iP = !1, aO.a3n(247), aBz[0] = aBz[1] = 0, aO.a87(673)
	}

	function a1n() {
		return aS.aA9(aO.aA5()) ? __fx.settings.keybindButtons ? aS.fl - 2 * (k + bf.gap) : aS.fl - k - bf.gap : bF.aA9(aO.aA8()) ? bF.a1n() - k - bf.gap : i.k - k - bn.a8u() * bf.gap
	}
	this.dn = function() {
		for (var aC = 0; aC < 2; aC++) a6X[aC] = bD.canvas.a2R(ac.get(3), 8 - aC, bE.qn), a6X[aC] = bD.canvas.a6Z(a6X[aC])
	}, this.dm = function() {
		aC4 = -1e4, aC3 = aC6 = 0, aC5 = -1, this.iP = !1, aBD = aAV = !1, aBz = [aBy = aC2 = 0, 0], aC0 = [1, 1], aC1 = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, p0 = canvas.getContext("2d", {
			alpha: !0
		}), nN()
	}, this.nM = function() {
		aBD && nN()
	}, this.hq = function(fj, fl) {
		return !!this.iP && !(fj < i.j - this.j - bf.gap || fl < a1n() || (aE.hl || aE.hm || this.iQ(aE.fM) && (aN.hn && aN.a5p(), bB.i3.iR(fj > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.eh = function() {
		0 < aC3 ? 0 === --aC3 && aC7() : this.iP ? 180 == --aC2 && 3 * aBz[0] < aC0[0] ? aC7() : aBz[0] >= aC0[0] ? aAV ? bU.a3J.a3a() : bU.a3J.a3e() : aBz[1] >= aC0[1] ? aC3 = 4 : aC2 <= 0 && aC7() : ! function() {
			var aCE = bi.kv();
			if (aCE % 40 == 14) {
				if (aC6) return !(aCE < aC6) && !(aCE < aC4 + 535) && (aC6 = aCE + 1071, bD.gy.a7A()) ? (aCB(), 1) : 0;
				(1 === am.lU || (aE.iX ? bk.lV() : ah.hQ[mZ[0]]) >= bO.g3(96 * aE.ki, 100)) && (aC6 = aCE + 535)
			}
			return
		}() && 0 <= aC5 && (aO.a29(250, L(116, [ah.a2A[aC5]]), 673, aC5, bE.pU, bE.pR, -1, !0), aCB())
	}, this.a3g = function() {
		this.iP && aBz[0] < aC0[0] && aC7()
	}, this.s6 = function(player, aCF) {
		var aCG = L(aCF ? 117 : 118, [ah.a2A[player]]),
			aCG = (aO.a29(450, aCG, 257, player, aCF ? bE.pm : bE.q3, bE.pR, -1, !0), aC1.push(player), aBD = !0, aE.lI ? Math.max(aC0[0], aC0[1]) : ah.hQ[player]),
			aCG = Math.max(aCG, 1);
		aCF ? aBz[0] += aCG : aBz[1] += aCG, player === aE.fM && (aBy = aCF ? 1 : -1)
	}, this.yI = function() {
		var fl;
		this.iP && (fl = a1n(), yJ.drawImage(canvas, i.j - this.j - bf.gap, fl))
	}, this.iS = function(player) {
		if (0 !== aC2) return !1;
		if (!bD.gy.ho(1)) return !1;
		if (!bD.gy.hp(player)) return !1;
		if (10 <= kj[player] && !bD.gy.a7U(player, 9)) return !1;
		if (!(aE.lI || m.e0 && m.e4)) {
			player = bi.kv();
			if (player < aC4 + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iQ = function(hA) {
		if (!bD.gy.ho(1)) return !1;
		if (!bD.gy.hp(hA)) return !1;
		if (!this.iP) return !1;
		for (var aC = aC1.length - 1; 0 <= aC; aC--)
			if (aC1[aC] === hA) return !1;
		return !0
	}, this.iO = function(player) {
		aC5 = player
	}
}

function cN() {
	var j, fj, aCI, canvas, p0, iP, jG, a7y, a9V, aBD, aCJ = 11 / 12;

	function aCL() {
		var aBK = Math.floor(jG * (j - 2 * aCI)),
			aCO = 1 + Math.floor(.0625 * aS.k),
			aCP = 1 + Math.floor(.3 * aS.k),
			aCQ = Math.floor(.55 * aS.k),
			rounded = (p0.clearRect(0, 0, j, aS.k), p0.fillStyle = bE.pQ, p0.fillRect(0, 0, aCI, aS.k), p0.fillRect(aCI + aBK, 0, j - aCI - aBK, aS.k), p0.fillStyle = jG < 1 / 3 ? "rgba(" + Math.floor(3 * jG * 130) + ",130,0,0.85)" : jG < 2 / 3 ?
				"rgba(130," + (130 - Math.floor(3 * (jG - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (jG - 2 / 3) * 130) + ",0.85)", p0.fillRect(aCI, 0, aBK, aS.k), p0.fillStyle = bE.pU, p0.fillStyle = __fx.utils.lineColor(bE.pU),
				__fx.utils.smoothFrame(p0, j, aS.k));
		rounded || (p0.fillRect(0, 0, j, 1), p0.fillRect(0, aS.k - 1, j, 1), p0.fillRect(0, 0, 1, aS.k)), p0.fillRect(aCI, 0, 1, aS.k), p0.fillRect(aCI + aBK, 0, 1, aS.k), p0.fillRect(j - aCI, 0, 1, aS.k), rounded || p0.fillRect(j - 1, 0, 1, aS.k),
			p0.fillStyle = bE.pU, p0.fillRect(Math.floor(.25 * aS.k) + aCP, Math.floor((aS.k - aCO) / 2), aS.k - 2 * aCP, aCO), p0.fillRect(Math.floor(j - 1.25 * aS.k) + aCP, Math.floor((aS.k - aCO) / 2), aS.k - 2 * aCP - aCP % 2, aCO), p0.fillRect(
				Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - aCO) / 2), aCP, aCO, aS.k - 2 * aCP - aCP % 2), a7y = bD.gy.jF(aE.fM, aS.i7()), p0.fillText(bD.tg.a2y(a7y) + " (" + bD.tg.a7r(100 * jG, +(jG < .1)) + ")", Math.floor(.5 * j), aCQ)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		jG = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a5l(arg1);

	function aCV(a66) {
		return !(1 < a66 && 1 === jG || (1 < a66 && a66 * jG - jG < 1 / 1024 ? a66 = (jG + 1 / 1024) / jG : a66 < 1 && jG - a66 * jG < 1 / 1024 && (a66 = (jG - 1 / 1024) / jG), jG = bO.io(jG * a66, 1 / 1024, 1), aCL(), 0))
	}

	function aCW(mD) {
		return jG !== (jG = bO.io((mD - fj - aCI) / (j - 2 * aCI), 1 / 1024, 1)) && (aCL(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aCL(), bi.du = !0
	}, this.fl = 0, this.hr = !1, this.dm = function() {
		iP = !aE.i1 && !aE.hl && !aE.hm, aBD = !1, jG = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.buffer.data[182].value + 1) / 1024, a7y = 0, this.hr = !1, this.resize()
	}, this.resize = function() {
		a1.a2.ip() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.iq), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.ip() ? .65 : .389) * i.iq), j += 12 - j % 12, this.k = Math.floor(j / 12)), aCI = Math.floor(3 * this.k / 2), a9V =
			bD.sF.sI(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, yJ), canvas.height = this.k, (p0 = canvas.getContext("2d", {
				alpha: !0
			})).font = a9V, bD.sF.textBaseline(p0, 1), bD.sF.textAlign(p0, 1), this.aCK(), aCL()
	}, this.aCK = function() {
		fj = a1.a2.ip() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.fl = i.k - this.k - bn.a8u() * bf.gap
	}, this.nM = function() {
		aBD && (aBD = !1, aCL())
	}, this.iP = function() {
		return !(!iP || aN.hn && fj < Math.floor(bf.gap + 5.5 * this.k))
	}, this.aA9 = function(aCR) {
		return !!this.iP() && fj + j > i.j - aCR - bf.gap
	}, this.a85 = function() {
		iP = !aE.hl && !aE.hm
	}, this.aC7 = function() {
		iP = !1
	}, this.i7 = function() {
		return bO.io(Math.floor(1024 * jG + .5) - 1, 0, 1023)
	}, this.a5i = function(mD, mE) {
		return this.iP() && fj < mD && mD < fj + j && mE > this.fl
	}, this.hq = function(mD, mE) {
		if (!this.iP()) return !1;
		if (!(__fx.settings.keybindButtons && mE > this.fl - Math.floor(bf.gap / 4) - this.k && mE < this.fl - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(mD - fj))) {
			if (!aS.a5i(mD, mE)) return !1;
			aT.o6 = !1, ! function(uH, mD, mE) {
				if (function(mD, mE) {
						return fj < mD && mD < fj + aCI && mE > aS.fl
					}(mD, mE)) return aCV(aCJ);
				if (function(mD, mE) {
						return fj + j - aCI < mD && mD < fj + j && mE > aS.fl
					}(mD, mE)) return aCV(1 / aCJ);
				return uH.hr = !0, aCW(mD)
			}(this, mD, mE) || (bi.du = !0)
		}
		return !0
	}, this.a5l = function(oD) {
		0 !== aE.a3f && this.iP() && aCV(oD) && (bi.du = !0)
	}, this.a5H = function(deltaY) {
		var oD;
		return !(0 === deltaY || !this.iP()) && aCV(oD = 0 < deltaY ? (oD = 400 / (400 + deltaY)) < aCJ ? aCJ : oD : 1 / aCJ < (oD = (400 - deltaY) / 400) ? 1 / aCJ : oD)
	}, this.a5E = function(mD) {
		return !!this.hr && aCW(mD)
	}, this.a5e = function() {
		this.hr = !1
	}, this.eh = function() {
		this.iP() && a7y !== bD.gy.jF(aE.fM, this.i7()) && (aBD = !0)
	}, this.yI = function() {
		this.iP() && (yJ.drawImage(canvas, fj, this.fl), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(yJ, fj, this.fl)
	}
}

function d7() {
	var canvas, p0, aCX, font, aCY = 0,
		aCZ = !1,
		aCa = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aCb = 5;

	function aCi() {
		if (aCZ) {
			var aC, fc = aCa.length,
				aCQ = Math.floor(.5 * aCX.k),
				k = fc * aCQ,
				fj = Math.floor(Math.floor(aCX.fj) + .3 * aCX.j - .5),
				fl = Math.floor(Math.floor(aCX.fl) - k),
				j = Math.floor(.4 * aCX.j + 2.5);
			for (yJ.fillStyle = bE.pQ, yJ.fillRect(fj, fl, j, k), yJ.fillStyle = bE.pt, yJ.fillRect(fj, fl + aCb * aCQ, j, aCQ), yJ.fillStyle = bE.pU, yJ.fillRect(fj, fl, 2, k), yJ.fillRect(fj, fl, j, 2), yJ.fillRect(fj + j - 2, fl, 2, k), aC =
				1; aC < fc; aC++) yJ.fillRect(fj, fl + aC * aCQ, j, 2);
			for (yJ.fillStyle = bE.pU, bD.sF.textAlign(yJ, 1), bD.sF.textBaseline(yJ, 1), yJ.font = bD.sF.sI(0, .6 * aCQ), fj += .5 * j, aC = 0; aC < fc; aC++) yJ.fillText(aCq(aC), fj, fl + (aC + .6) * aCQ)
		}
		yJ.drawImage(canvas, Math.floor(aCX.fj), Math.floor(aCX.fl))
	}

	function nN(uH) {
		var fj, o1, o2, aCQ;
		p0.clearRect(0, 0, Math.floor(aCX.j), Math.floor(aCX.k)), p0.fillStyle = bE.pQ, p0.fillRect(0, 0, Math.floor(aCX.j), Math.floor(aCX.k)), aE.o4 && (p0.fillStyle = bE.pt, p0.fillRect(0, 0, Math.floor(.3 * aCX.j), Math.floor(aCX.k))), p0
			.fillStyle = bE.pU, p0.fillText("Hide UI", .15 * aCX.j, .5 * aCX.k), p0.fillRect(Math.floor(.3 * aCX.j - .5), 0, 2, Math.floor(aCX.k)), fj = .5 * aCX.j, p0.fillText("Replay Speed", fj, .31 * aCX.k), p0.fillText(aCq(aCb), fj, .69 * aCX.k),
			p0.fillRect(Math.floor(.7 * aCX.j - .5), 0, 2, Math.floor(aCX.k)), uH.a8d ? (fj = Math.floor(.02 * aCX.j), uH = Math.floor(.025 * aCX.j), o1 = Math.floor(.85 * aCX.j - fj - .5 * uH), o2 = Math.floor(.25 * aCX.k), aCQ = Math.floor(aCX.k) -
				2 * o2, p0.fillRect(o1, o2, fj, aCQ), p0.fillRect(o1 + fj + uH, o2, fj, aCQ)) : function() {
				var j = Math.floor(.46 * aCX.k),
					k = Math.floor(.23 * aCX.k),
					fj = Math.floor(.85 * aCX.j - .5 * j + j / 12),
					fl = Math.floor(.5 * aCX.k - k);
				p0.beginPath(), p0.moveTo(fj, fl), p0.lineTo(fj + j, fl + k), p0.lineTo(fj, fl + (k << 1)), p0.fill()
			}(), p0.fillRect(0, 0, Math.floor(aCX.j), 2), p0.fillRect(0, 0, 2, Math.floor(aCX.k)), p0.fillRect(0, Math.floor(aCX.k) - 2, Math.floor(aCX.j), 2), p0.fillRect(Math.floor(aCX.j - 2), 0, 2, Math.floor(aCX.k))
	}

	function aCq(aC) {
		return 5 === aC ? "Normal" : "" + aCa[aC]
	}
	this.a8d = !1, this.dm = function() {
		aE.hl && (aCb = 5, this.a8d = !1, aCZ = !1, aCX = new tH([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aCc = function() {
		return aCa[aCb]
	}, this.a1n = function() {
		return aCX.fl
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a8d,
		fxGetSpeedIndex: () => aCb,
		fxSetSpeedIndex: index => {
			aCb = index, this.resize()
		},
		fxGetPanelTop: () => aCX && aCX.fl
	}, this.aA9 = function(aCR) {
		return !!aE.hl && aCX.fj + aCX.j > i.j - aCR - bf.gap
	}, this.resize = function() {
		aE.hl && (aCX.resize(), aCX.fl -= (bn.a8u() - 1) * bf.gap, font = bD.sF.sI(0, .3 * aCX.k), (canvas = document.createElement("canvas")).width = Math.floor(aCX.j), canvas.height = Math.floor(aCX.k), (p0 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.sF.textAlign(p0, 1), bD.sF.textBaseline(p0, 1), nN(this))
	}, this.a5o = function(aCd) {
		0 === aE.a3f || u.iP() || aCd !== aE.o4 && (aE.o4 = aCd, bk.resize(), bi.du = !0, aE.hl) && (aCY = bi.ec + 2e3, nN(this))
	}, this.hq = function(fj, fl) {
		if (!aE.hl) return !1;
		if (fj < aCX.fj || fl < aCX.fl || fj > aCX.fj + aCX.j) return aCZ && function(uH, fj, fl) {
			var fc = aCa.length,
				aCQ = Math.floor(.5 * aCX.k),
				k = fc * aCQ,
				o1 = Math.floor(Math.floor(aCX.fj) + .3 * aCX.j - .5),
				k = Math.floor(Math.floor(aCX.fl) - k),
				j = Math.floor(.4 * aCX.j + 2.5);
			return aCZ = !1, bi.du = !0, fj < o1 || o1 + j < fj || fl < k || (aCb = aCh(0, Math.floor((fl - k) / aCQ), fc - 1), nN(uH)), !0
		}(this, fj, fl);
		if ((fj -= aCX.fj) < .3 * aCX.j) aCZ = !1, this.a5o(!aE.o4);
		else {
			if (fj < .7 * aCX.j) return aCZ = !aCZ, bi.du = !0;
			this.a5q(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a5q(!0), this.a5q = function(aCf) {
		2 === aE.a3f ? (this.a5o(!1), u.v(3)) : (aCZ = !1, this.a8d = !this.a8d, this.a8d ? (aN.hn && aN.a5p(), a1.a2.setState(1)) : aCf || aN.a9c(), bi.du = !0, nN(this))
	}, this.aCg = function() {
		this.a8d = !1, aN.a9c(), bi.du = !0, nN(this)
	}, this.a5X = function(fj, fl) {
		return !!aE.o4 && (0 <= aN.hq(fj, fl) || (aE.hl ? ((bi.ec > aCY || !this.hq(fj, fl)) && aT.hq(fj, fl), bi.du = !0, aCY = bi.ec + 2e3) : aT.hq(fj, fl)), !0)
	}, this.eh = function() {
		aE.hl && aE.o4 && bi.ec > aCY - 1e3 && bi.ec < aCY && (bi.du = !0)
	}, this.a3o = function() {
		aE.hl && (this.a8d = !1, bi.du = !0, nN(this))
	}, this.yI = function() {
		if (aE.hl) {
			if (aE.o4) {
				if (bi.ec > aCY) return;
				if (bi.ec > aCY - 1e3) return yJ.globalAlpha = aCh(0, (1e3 - (bi.ec - (aCY - 1e3))) / 1e3, 1), aCi(), void(yJ.globalAlpha = 1)
			}
			aCi()
		}
	}
}

function cO() {
	var aCr, aCs, j, fj, fl, aCt, aCu;
	this.dm = function() {
		aCr = new Array(2), aCs = new Array(2), this.o6 = !1, aCu = aCt = jI = jH = 0, ir = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.ip() ? .072 : .0502) * i.iq)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aCr[aC] = document.createElement("canvas"), aCr[aC].width = j, aCr[aC].height = j, aCs[aC] = aCr[aC].getContext("2d", {
			alpha: !0
		});
		this.aCK(),
			function() {
				for (var aDB = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aCs[aC].clearRect(0, 0, j, j), aCs[aC].fillStyle = bE.pN, aCs[aC].beginPath(), aCs[aC].arc(j / 2, j / 2, j / 2 - aDB, 0, 2 * Math.PI), aCs[aC].fill(), aCs[aC]
					.lineWidth = aDB, aCs[aC].fillStyle = bE.pU, aCs[aC].strokeStyle = bE.pU, aCs[aC].strokeStyle = __fx.utils.lineColor(bE.pU), aCs[aC].beginPath(), aCs[aC].arc(j / 2, j / 2, j / 2 - aDB, 0, 2 * Math.PI), aCs[aC].stroke(), a1t(
						aCs[aC], 0, 0, j, aDB, .3, 0 === aC)
			}()
	}, this.a1m = function() {
		return -jH / ir
	}, this.a1n = function() {
		return -jI / ir
	}, this.oG = function(aCy, ix) {
		jH = ir * aCy - ix
	}, this.oH = function(aCz, iy) {
		jI = ir * aCz - iy
	}, this.hq = function(aCx, aAA) {
		return aE.o4 || ! function(aCx, aAA) {
			return Math.pow(aCx - (fj + j / 2), 2) + Math.pow(aAA - (fl + j / 2), 2) < j * j / 4 || Math.pow(aCx - (fj + j / 2), 2) + Math.pow(aAA - (fl + 2 * j), 2) < j * j / 4
		}(aCx, aAA) || bm.buffer.data[8].value ? (aI.oJ() && (this.o6 = !0, aCt = aCx, aCu = aAA), !1) : aAA < fl + 1.25 * j ? this.a5H(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a5H(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a5E = function(aCx, aAA) {
		var aD0, aD1, j0, j3;
		return !aI.oJ() || (aD0 = jH, aD1 = jI, jH += j0 = aCt - aCx, jI += j3 = aCu - aAA, ag.a5E(j0, j3), this.aD2(), aCt = aCx, aCu = aAA, aD0 !== jH) || aD1 !== jI
	}, this.a5H = function(mD, mE, deltaY) {
		var oD;
		if (aI.oJ()) {
			if (0 < deltaY) oD = (oD = 500 / (500 + deltaY)) < .5 ? .5 : oD;
			else {
				if (!(deltaY < 0)) return !1;
				oD = 2 < (oD = (500 - deltaY) / 500) ? 2 : oD
			}
			this.aD3(mD, mE, oD), bi.du = !0
		}
		return !0
	}, this.aD3 = function(fj, fl, fG) {
		var a66;
		fG = a66 = (a66 = 1024 < (a66 = fG) * ir ? 1024 / ir : a66) * ir < .125 ? .125 / ir : a66, ag.zoom(fG, fj, fl),
			function(a66, mD, mE) {
				ir *= a66, jH = (jH + mD) * a66 - mD, jI = (jI + mE) * a66 - mE, aT.aD2()
			}(fG, fj, fl)
	}, this.aD2 = function() {
		var aD6 = i.j / 16,
			aD7 = 0,
			aD8 = i.k / 16,
			aD9 = 0;
		jH < -i.j + aD6 && (aD7 = -i.j + aD6 - jH), jH > ir * bV.fn - aD6 && (aD7 = ir * bV.fn - aD6 - jH), jI < -i.k + aD8 && (aD9 = -i.k + aD8 - jI), jI > ir * bV.fo - aD8 && (aD9 = ir * bV.fo - aD8 - jI), jH += aD7, jI += aD9, bd.oI(), ag.aDA(
			aD7, aD9)
	}, this.aCK = function() {
		fj = i.j - j - bf.gap, fl = Math.floor(i.k / 2 - 1.25 * j)
	}, this.yI = function() {
		bm.buffer.data[8].value || (yJ.drawImage(aCr[0], fj, fl), yJ.drawImage(aCr[1], fj, Math.floor(fl + 3 * j / 2)))
	}
}

function cP() {
	var h, aDC, aDD, aDE, gap, aDF, aDG, aDH, aDI, aDJ, a9V, aDK, hh, aDL, aBK, aDM, aDN;

	function aDR() {
		aDE = Math.floor(.2 * (a1.a2.ip() ? .07 : .035) * i.iq), aDE = aA7(a1.a2.ip() ? 3 : 1, aDE);
		var aDU = i.j / (h.length + gap);
		aDE = aDE < aDU ? aDU : aDE, aBK = Math.floor((1 - gap) * aDE), aDC = 0, aDV()
	}

	function aDV() {
		aDC = (aDC = aDC < -20 ? -20 : aDC) > (h.length - 15) * aDE ? (h.length - 15) * aDE : aDC, aDG = Math.floor(aDC / aDE), aDH = (aDH = aDG + Math.floor(i.j / aDE)) > h.length - 1 ? h.length - 1 : aDH, aDG = (aDG = aDH < aDG ? aDH : aDG) < 0 ?
			0 : aDG;
		var lt = aDH;
		aDF = aDD / h[lt];
		for (var aC = aDH - 1; aDG <= aC; aC--) h[aC] > h[lt] && (lt = aC, aDF = aDD / Math.pow(h[aC], aDL))
	}

	function aDY(fj) {
		fj = Math.floor((aDC + i.j - fj - gap * aDE) / aDE);
		return (fj = fj < -1 ? -1 : -1 === fj ? 0 : fj > h.length - 1 ? -1 : fj) !== aDI && (aDI = fj, -1 === aDM && 0 === aDI && aU.aDO && (aDM = setInterval(aDZ, 100)), 1)
	}

	function aDa(aC) {
		var aDc = Math.floor(aDF * Math.pow(h[aC], aDL));
		yJ.fillRect(aDC + i.j - (aC + 1) * aDE, i.k - aDc, aBK, aDc)
	}

	function aDZ() {
		var hA;
		0 !== (aDI = 8 === ab.a4r() ? -1 : aDI) ? (aDN = (new Date).getTime(), clearInterval(aDM), aDM = -1) : (hA = h[1] / 864e3, -1 !== aDN && (hA += ((new Date).getTime() - aDN) * h[1] / 864e5, aDN = -1), 0 < hA && (h[0] += Math.floor(hA), bi
			.du = !0))
	}
	this.aDO = !1, this.dm = function() {
		aDN = aDM = -1, aDI = -(aDL = 1), this.aDP = !1, hh = 0, aDK = new Date, aDC = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aDD = Math.floor(.15 * i.k), aDJ = (aDJ = Math.floor((a1.a2.ip() ? .018 : .0137) * i.iq)) < 2 ? 2 : aDJ, a9V = bD.sF.sI(1, aDJ), aDR()
	}, this.aDS = function(aDT) {
		var aC;
		for (this.aDO = !0, aC = 0; aC < aDT.length; aC++) h.unshift(aDT[aC]);
		aDR(), bi.du = !0
	}, this.aDW = function() {
		aDV()
	}, this.a5E = function(fj, fl) {
		fl > i.k - .6 * aDD ? this.aDP ? fj !== hh && (aDC += fj - hh, hh = fj, aDV(), aDY(fj), this.aDP = -1 !== aDI, bi.du = !0) : aDY(fj) && (bi.du = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aDI && (this.aDP = !1, aDI = -1, bi.du = !0)
	}, this.a5H = function(fj, deltaY) {
		-1 !== aDI && (aDC += Math.floor(deltaY), aDV(), aDY(fj), bi.du = !0)
	}, this.hq = function(fj, fl) {
		this.a5E(fj, fl), -1 !== aDI && (hh = fj, this.aDP = !0)
	}, this.a5d = function() {
		-1 !== aDI && (this.aDP = !1)
	}, this.yI = function() {
		yJ.fillStyle = bE.pX;
		for (var aDd, month, ed, v2, aDg, aDh, o2, aDi, aDj, aC = aDH; aDG <= aC; aC--) aDa(aC);
		this.aDO && 0 === aDG && (yJ.fillStyle = bE.q6, aDa(0)), -1 !== aDI && (yJ.fillStyle = bE.pW, aDa(aDI)), -1 !== aDI && (yJ.font = a9V, bD.sF.textBaseline(yJ, 2), (ed = new Date).setTime(aDK.getTime() - 1e3 * aDI * 60 * 60 * 24), month =
			"month", aDd = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(ed), aDd = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(ed)), aDd = aDd + ", " + ed.getUTCDate() + " " + month + " " + ed.getFullYear(), month = 1 === h[aDI] ? L(119) : L(120), month = bD.tg.a2y(h[aDI]) + " " + month, ed = Math.floor(yJ.measureText(aDd).width), v2 = Math
			.floor(yJ.measureText(month).width), aDg = Math.floor(.5 * (ed + aDJ)), aDh = (aDh = aDC + i.j - (aDI + 1) * aDE) < aDg ? aDg : aDh > i.j - aDg ? i.j - aDg : aDh, o2 = i.k - Math.floor(aDF * Math.pow(h[aDI], aDL)), aDi = Math
			.floor(1.1 * aDJ), aDj = o2 > i.k - aDi ? i.k - aDi : o2, yJ.fillStyle = bE.pR, yJ.fillRect(i.j - v2 - aDJ, aDj - aDi, v2 + aDJ, aDi), yJ.fillRect(aDh - aDg, i.k - aDi, ed + aDJ, aDi), yJ.fillStyle = bE.pU, bD.sF.textAlign(yJ, 2),
			yJ.fillText(month, Math.floor(i.j - .5 * aDJ), aDj), bD.sF.textAlign(yJ, 1), yJ.fillText(aDd, aDh, i.k), yJ.strokeStyle = bE.pY, yJ.lineWidth = 1, yJ.beginPath(), yJ.moveTo(0, o2), yJ.lineTo(i.j, o2), yJ.closePath(), yJ.stroke())
	}
}

function cQ() {
	var a9V, j, fl, aDk, aDl, aDm, canvas, p0, aBD, a7H, aDn, aDo, aDp, aDq;
	this.fj = 0, this.k = 0, this.dm = function() {
		aDm = aE.a8D, aDo = "rgba(0,100,0,0.8)", aDp = "rgba(150,0,0,0.8)", aBD = aDn = !0, a7H = ah.he[aE.fM], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.ip() ? .305 : .24) * i.iq), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), a9V = bD.sF.sI(1, Math.floor(.8 * this.k)), aDl = bD.sF.sI(1, Math.floor(.45 * this.k)), aDq = Math.floor(.5 * this.k), bV
			.a0A.font = a9V, fl = bf.gap, aDk = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, p0 = canvas.getContext("2d", {
				alpha: !0
			}), bD.sF.textBaseline(p0, 1), bD.sF.textAlign(p0, 1), this.aDr()
	}, this.aBg = function() {
		return a1.a2.ip() && i.j < 1.2 * i.k
	}, this.aCK = function() {
		this.aBg() ? this.fj = i.j - j - bf.gap : this.fj = Math.floor(aW.aDs() + (i.j - aW.aDs() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.nM = function() {
		aBD && (aBD = !1, this.aDr())
	}, this.aDr = function() {
		p0.font = a9V, p0.clearRect(0, 0, j, this.k), p0.fillStyle = aDn ? aDo : aDp, p0.fillRect(0, 0, j, this.k), p0.fillStyle = bE.pW;
		var em = this.aDt(),
			aDv = (this.aDu(), p0.fillStyle = ah.he[aE.fM] >= af.ke(aE.fM) ? bE.q3 : bE.pU, bD.tg.a2y(a7H)),
			aDv = (p0.fillText(aDv, Math.floor(j / 2), aDq), p0.measureText(aDv).width),
			aDw = (p0.font = aDl, p0.fillStyle = 9 === em ? bE.qh : bE.pU, af.aDx),
			aDy = "+" + aDw,
			v2 = p0.measureText(aDy).width,
			aDz = Math.floor(this.k / 12),
			aDv = .5 * (j + aDv) + aDz;
		(aDv + v2 + aDk <= j || 1e3 <= aDw && (aDy = "+" + Math.floor(aDw / 1e3) + "K", aDv + (v2 = p0.measureText(aDy).width) + aDk <= j)) && p0.fillText(aDy, Math.floor(aDv + .5 * v2), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && p0.fillText(9 - em, Math.floor(2 * aDk + aDz), Math.floor(.3 * this.k)), p0.fillStyle = bE.pU, __fx.utils.smoothFrame(p0, j, this.k) || (p0.fillRect(0, 0, j, 1), p0.fillRect(0, 0, 1, this.k), p0.fillRect(0, this
				.k - 1, j, 1), p0.fillRect(j - 1, 0, 1, this.k))
	}, this.aDt = function() {
		var em = bi.kv() % 100,
			a0p = (em = 9 - bO.g3(em -= em % 10, 10), Math.floor(em * (this.k - aDk) / 9));
		return p0.fillRect(0, a0p, aDk, this.k - a0p), p0.fillRect(j - aDk, a0p, aDk, this.k - a0p), em
	}, this.aDu = function() {
		p0.fillRect(aDk, this.k - aDk, Math.floor((j - 2 * aDk) * ah.he[aE.fM] / aDm), aDk)
	}, this.eh = function() {
		var hA = aE.fM;
		bD.gy.hp(hA) && (hA = ah.he[hA] - ah.a7G[hA], a7H !== hA ? (aDm = aA7(hA, aDm), aDn = a7H < hA && 10 <= hA, a7H = hA, aBD = !0) : bi.kv() % 10 == 9 && (aBD = !0))
	}, this.yI = function() {
		0 === ah.na[aE.fM] || aE.i1 || 2 === ah.a77[aE.fM] || yJ.drawImage(canvas, this.fj, fl)
	}
}

function cR() {
	var aE0, aE1, aE2, aE3, aE4, aE5, aE6, aE7, aE8, aE9, aEA, aEB, aEC, aED, aEE, aEF, aEG, aEH, aEI, aEJ, aEK, aEL, position, aEM, aEN, aEO, aEP, aEQ, aER = 1,
		aES = 1,
		aET = "";
	var leaderboardHasChanged = true;
	this.playerPos = aE.fM;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kj[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kj[aE.fM]);
	}

	function aEV() {
		aE6.clearRect(0, 0, aE0, aBv),
			aE6.fillStyle = aEQ ? bE.qQ : bE.qM,
			aE6.fillRect(0, 0, aE0, aEB),
			aE6.fillStyle = bE.pQ,
			aE6.fillRect(0, aEB, aE0, aBv - aEB);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aE4)
				position = (rivalsCount > aE4 ? rivalsCount : aE4) - aE4;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kj[aE.fM]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aEL = -1;
		if (__fx.leaderboardFilter.enabled && aEL >= __fx.leaderboardFilter.filteredLeaderboard.length) aEL = -1;
		if (__fx.leaderboardFilter.showingRivals && aEL + position >= __fx.leaderboardFilter.rivalsData.length) aEL = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= position && ownClanIndex < position + aE4) aEX(ownClanIndex - position, bE.pt);
			})() :
			(playerPos >= position && aEX(playerPos - position, bE.pt),
				0 !== kj[aE.fM] && 0 === position && aEX(0, bE.qY))
		),
		-1 !== aEL && aEX(aEL, bE.pV),
			aE6.fillStyle = bE.pQ,
			//console.log("drawing", aEL),
			aE6.clearRect(0, aBv - __fx.leaderboardFilter.tabBarOffset, aE0, __fx.leaderboardFilter.tabBarOffset);
		aE6.fillRect(0, aBv - __fx.leaderboardFilter.tabBarOffset, aE0, __fx.leaderboardFilter.tabBarOffset);
		aE6.fillStyle = __fx.utils.lineColor(bE.pU),
			aE6.fillRect(0, aEB, aE0, 1),
			aE6.fillRect(0, aBv - __fx.leaderboardFilter.tabBarOffset, aE0, 1),
			__fx.leaderboardFilter.drawTabs(aE6, aE0, aBv - __fx.leaderboardFilter.tabBarOffset, bE.pt),
			__fx.utils.smoothFrame(aE6, aE0, aBv, bf.a2f) || (
				aE6.fillRect(0, 0, aE0, bf.a2f),
				aE6.fillRect(0, 0, bf.a2f, aBv),
				aE6.fillRect(aE0 - bf.a2f, 0, bf.a2f, aBv),
				aE6.fillRect(0, aBv - bf.a2f, aE0, bf.a2f)),
			aE6.fillStyle = bE.pU, aE6.font = aE1, bD.sF.textBaseline(aE6, 1), bD.sF.textAlign(aE6, 1), aE6.fillText(aET, Math.floor((aE0 + aEB - 22) / 2), Math.floor(aE9 + aE2 / 2));
		__fx.playerList.drawButton(aE6, 12, 12, aEB - 22);
		var fv, hB = playerPos < position + aE4 - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) hB = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aE4; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ah.hQ[repId], ah.a2A[repId], ah.a77[repId]]);
					ah.hQ[repId] = rivalsEntry.territory;
					ah.a2A[repId] = "[" + rivalsEntry.clan + "]";
					ah.a77[repId] = 0;
				}
				for (aE6.font = aE3, bD.sF.textAlign(aE6, 0), fv = aE4 - hB; 0 <= fv; fv--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[fv + position];
					if (rivalsEntryLeft !== undefined)
						aEY(rivalsEntryLeft.representativeId), aEZ(fv, fv + position, rivalsEntryLeft.representativeId);
				}
				for (bD.sF.textAlign(aE6, 2), fv = aE4 - hB; 0 <= fv; fv--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[fv + position];
					if (rivalsEntryRight !== undefined)
						aEY(rivalsEntryRight.representativeId), aEa(fv, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hQ[entry[0]] = entry[1];
					ah.a2A[entry[0]] = entry[2];
					ah.a77[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aE4)
				position = (result.length > aE4 ? result.length : aE4) - aE4;
			//if (position >= result.length) position = result.length - 1;
			for (aE6.font = aE3, bD.sF.textAlign(aE6, 0), fv = aE4 - hB; 0 <= fv; fv--) {
				const pos = result[fv + position];
				if (pos !== undefined)
					aEY(mZ[pos]), aEZ(fv, pos, mZ[pos]);
			}
			for (bD.sF.textAlign(aE6, 2), fv = aE4 - hB; 0 <= fv; fv--) {
				const pos = result[fv + position];
				if (pos !== undefined)
					aEY(mZ[pos]), aEa(fv, mZ[pos]);
			}
		} else {
			for (aE6.font = aE3, bD.sF.textAlign(aE6, 0), fv = aE4 - hB; 0 <= fv; fv--)
				aEY(mZ[fv + position]), aEZ(fv, fv + position, mZ[fv + position]);
			for (bD.sF.textAlign(aE6, 2), fv = aE4 - hB; 0 <= fv; fv--)
				aEY(mZ[fv + position]), aEa(fv, mZ[fv + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == hB && (aEY(aE.fM), bD.sF.textAlign(aE6, 0), aEZ(aE4 - 1, kj[aE.fM], aE.fM), bD.sF.textAlign(aE6, 2), aEa(aE4 - 1, aE.fM)), 0 === position && (hB = .7 * aEC / ac.get(4).height, aE6.setTransform(
			hB, 0, 0, hB, Math.floor(aED + .58 * aEC + .5 * hB * ac.get(4).width), Math.floor(aE9 + aE2 + .4 * aEC)), aE6.imageSmoothingEnabled = !0, aE6.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aE6.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aEY(player) {
		aE.iX && (aE6.fillStyle = bj.aEc[bj.aEd[player]])
	}

	function aEX(aC, aEe) {
		aE6.fillStyle = aEe, aC = aE4 - 1 < aC ? aE4 - 1 : aC;
		aEe = Math.floor((aC === aE4 - 1 ? 2 : 0 === aC ? 1.15 : 1) * aEC), aEe = aC === aE4 - 2 ? Math.floor(aEB + 9.15 * aEC) - Math.floor(aEB + 8.15 * aEC) : aEe;
		aE6.fillRect(0, Math.floor(aEB + (aC + (0 === aC ? 0 : .15)) * aEC), aE0, aEe)
	}

	function aEZ(zM, a7W, aC) {
		aE6.fillText(aEH[a7W], aED, Math.floor(aE9 + aE2 + (zM + .5) * aEC)), 1 === ah.a77[aC] && (aE6.font = "italic " + aE3);
		a7W = Math.floor(aE9 + aE2 + (zM + .5) * aEC);
		aE6.fillText(ah.a2A[aC], aEE, a7W), 0 !== ah.a77[aC] && (aE6.font = aE3), aC < aE.ky && 2 !== ah.a77[aC] || aE6.fillRect(aEE, a7W + .35 * aER, aEG[aC], Math.max(1, .1 * aER))
	}

	function aEa(zM, aC) {
		aE6.fillText(ah.hQ[aC], aEF, Math.floor(aE9 + aE2 + (zM + .5) * aEC))
	}
	this.dm = function() {
		var aC;
		for (u.z.uo[0] = 0, aEP = aEO = aEM = 0, aEQ = aEN = !1, aEL = -1, aE4 = a1.a2.ip() ? 6 : 10, aES = (position = 0) === (aES = bm.buffer.data[11].value) ? 10 : 1 === aES ? 5 : 1, aEK = !1, aEI = new Uint16Array(aE4 + 1), aEJ =
			new Uint32Array(aE4 + 1), aE8 = aE.fZ, mZ = new Uint16Array(aE8), kj = new Uint16Array(aE8), aC = aE8 - 1; 0 <= aC; aC--) mZ[aC] = aC, kj[aC] = aC;
		this.resize(!0), aEG = new Uint16Array(aE.fZ);
		var aEU = Math.floor(aE0 - aEE - aED - aE7);
		for (aEH = new Array(aE.fZ), aE6.font = aE3, aC = aE.fZ - 1; 0 <= aC; aC--) aEH[aC] = aC + 1 + ".", ah.a2A[aC] = bD.p0.a6l(ah.a4O[aC], aE3, aEU), aEG[aC] = Math.floor(aE6.measureText(ah.a2A[aC]).width);
		aEV()
	}, this.resize = function(dm) {
		if (aBv = a1.a2.ip() ? (aE0 = Math.floor(.335 * i.iq), Math.floor(aE4 * aE0 / 8)) : (aE0 = Math.floor(.27 * i.iq), Math.floor(aE4 * aE0 / 10)), aE0 = Math.floor(.97 * aE0), (aE5 = document.createElement("canvas")).width = aE0, aE5
			.height = aBv, aE6 = aE5.getContext("2d", {
				alpha: !0
			}), aE9 = .025 * aE0, aE2 = .16 * aE0, aEA = 0 * aE0, aEB = Math.floor(.45 * aE9 + aE2), aEC = (aBv - aE2 - 2 * aE9 - aEA) / aE4,
			aE5.height = aBv += aEC, __fx.leaderboardFilter.tabBarOffset = Math.floor(aEC * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aBv - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aE0,
			aE1 = bD.sF.sI(1, Math.floor(.55 * aE2)), aER = Math.floor((a1.a2.ip() ? .67 : .72) * aEC), aE3 = bD.sF.sI(0, aER), aE6.font = aE3, aED = Math.floor(.04 * aE0), aEE = Math.floor((a1.a2.ip() ? .195 : .18) * aE0), aE7 = Math.floor(aE6
				.measureText("00920600").width), aE6.font = aE1, aEF = aE0 - aED, !dm) {
			aE6.font = aE3;
			for (var aC = aE.fZ - 1; 0 <= aC; aC--) aEG[aC] = Math.floor(aE6.measureText(ah.a2A[aC]).width);
			aEV()
		}
		aET = bD.p0.a6l(L(121), aE1, .96 * aE0)
	}, this.aDs = function() {
		return aE0
	}, this.nM = function(bz, aEW) {
		(aEW || aEK && (bz || bi.kv() % aES == 0)) && (aEK = !1, aEV())
	}, this.eh = function() {
		! function() {
			for (var fv = aE8 - 1; 0 <= fv; fv--) 0 === ah.na[mZ[fv]] && ! function(fv) {
				var aEm = mZ[fv];
				aE8--;
				for (var aC = fv; aC < aE8; aC++) mZ[aC] = mZ[aC + 1], kj[mZ[aC]] = aC;
				mZ[aE8] = aEm, kj[mZ[aE8]] = aE8
			}(fv)
		}();
		for (var aEk, oJ = aE8 - 1, fv = 0; fv < oJ; fv++) ah.hQ[mZ[fv]] < ah.hQ[mZ[fv + 1]] && (aEk = mZ[fv], mZ[fv] = mZ[fv + 1], mZ[fv + 1] = aEk, kj[mZ[fv]] = fv, kj[mZ[fv + 1]] = fv + 1);
		! function() {
			for (var ed = aEK, hB = (aEK = !0, kj[aE.fM] >= aE4 - 1 ? aE4 - 2 : aE4 - 1), aC = hB; 0 <= aC; aC--)
				if (aEI[aC] !== mZ[aC] || aEJ[aC] !== ah.hQ[mZ[aC]]) return;
			(hB != aE4 - 2 || aEI[aE4] === kj[aE.fM] && aEJ[aE4] === ah.hQ[aE.fM]) && (aEK = ed)
		}();
		for (var aC = aE4 - 1; 0 <= aC; aC--) aEI[aC] = mZ[aC], aEJ[aC] = ah.hQ[mZ[aC]];
		aEI[aE4] = kj[aE.fM], aEJ[aE4] = ah.hQ[aE.fM];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hq = function(fj, fl) {
		if (a2e(fj, fl)) {
			if (__fx.utils.isPointInRectangle(fj, fl, bf.gap + 12, bf.gap + 12, aEB - 22, aEB - 22)) __fx.playerList.display(ah.a4O);
			else {
				if (fl - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fj - bf.gap);
				fj = aEo(fl);
				0 <= fj ? (aEM = bi.ec, aEN = !0, aEO = aEP = fj, bM.a5r() && (fj = aCh(-1, aEP, aE4), aEL !== (fj = fj === aE4 ? -1 : fj)) && (aEL = fj, aEV(), bi.du = !0)) : (aEQ && (aEQ = !1, aEV(), bi.du = !0), u.v(10, 0, new aEp({
					aEq: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aEV(), bi.du = !0
	};

	function aEo(fl) {
		return (fl -= bf.gap + aEB) < 0 ? Math.floor(fl / aEC) - 1 : fl < (aE4 - 1) * aEC ? Math.floor(fl / aEC) : fl < aBv - aEB ? aE4 - 1 : (fl -= aBv - aEB, aE4 + Math.floor(fl / aEC))
	}

	function a2e(fj, fl) {
		return fj >= bf.gap && fj < bf.gap + aE0 && fl >= bf.gap && fl < bf.gap + aBv
	}
	this.a5E = function(fj, fl) {
		var ed, aEn;
		if (__fx.utils.isPointInRectangle(fj, fl, bf.gap + 12, bf.gap + 12, aEB - 22, aEB - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fj, fl, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fj - bf.gap)) return aEn = aEo(fl), fj = a2e(fj, fl), fl = !(!(aEn < 0 && fj) || bM.a5r()), aEN ? (ed = position, (position = aCh(0, position += aEO - aEn, aE.fZ - aE4)) !== ed ? (aEQ = fl,
			aEn = aCh(-1, aEO = aEn, aE4), aEL = aEn = aEn !== aE4 && fj ? aEn : -1, aEV(), bi.du = !0) : aEQ !== fl && (aEQ = fl, aEV(), bi.du = !0), !0) : (aEn = (aEn = aCh(-1, aEn, aE4)) === aE4 || !fj || bM.a5r() ? -1 : aEn, (aEL !==
			aEn || aEQ !== fl) && (aEL = aEn, aEQ = fl, aEV(), bi.du = !0))
	}, this.a5d = function(fj, fl) {
		if (!aEN) return !1;
		aEN = !1;
		var aEn = aEo(fl);
		var isEmptySpace = false;
		return bM.a5r() && -1 !== aEL && (aEL = -1, aEV(), bi.du = !0), bi.ec - aEM < 350 && aEP === aEn && -1 !== (aEn = (aEn = aCh(-1, aEn, aE4)) !== aE4 && a2e(fj, fl) ? aEn : -1) && (fj = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aEn + position] === undefined, __fx.leaderboardFilter.rivalsData[aEn + position]?.representativeId ?? aE.fM) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), mZ[__fx.leaderboardFilter.filteredLeaderboard[aEn + position] ?? (isEmptySpace = true, kj[aE.fM])]) : mZ[aEn + position]),
			aEn === aE4 - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kj[aE.fM]) >=
			position + aE4 - 1 && (fj = aE.fM), !isEmptySpace && aE.iX && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fj, ah.a4O, aE.lI), 0 === ah.na[fj] || isEmptySpace || aE.i1 && !aE.lI && !aE.hl && !aE
			.hm && fj !== aE.fM || aI.nw(fj, 800, !1, 0)), !0
	}, this.a5H = function(fj, fl, deltaY) {
		var aEt;
		return !(aEN || aE.o4 || (aEt = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a2e(fj, fl)) || (fj = (fj = aCh(-1, aEo(fl), aE4)) === aE4 || bM.a5r() ? -1 : fj, 0 < deltaY ? position < aE.fZ - aE4 && (position += Math.min(aE.fZ - aE4 -
			position, aEt), aEL = fj, aEV(), bi.du = !0) : 0 < position && (position -= Math.min(position, aEt), aEL = fj, aEV(), bi.du = !0), 0))
	}, this.yI = function() {
		yJ.drawImage(aE5, bf.gap, bf.gap)
	}
}

function cS() {
	var canvas, p0, fj, fl, aDc, aEu, gap, aEv, fontSize, aEw, aEx, aEy, aEz, aF0, aF1, aF2, aF3, aF4;

	function aF8() {
		p0.clearRect(0, 0, aX.j, aX.k), p0.fillStyle = bE.pR, p0.fillRect(0, 0, aX.j, aX.k), p0.fillStyle = bE.po, fG = 0 < aF2 ? aF2 : aEz[4] / 1e4, p0.fillRect(0, aX.k - aDc - 1, Math.floor(fG * aX.j), aDc), p0.fillStyle = bE.pU, p0.fillStyle =
			__fx.utils.lineColor(bE.pU), __fx.utils.smoothFrame(p0, aX.j, aX.k) || (p0.fillRect(0, 0, aX.j, 1), p0.fillRect(0, 0, 1, aX.k), p0.fillRect(aX.j - 1, 0, 1, aX.k), p0.fillRect(0, aX.k - 1, aX.j, 1)), p0.fillRect(0, aX.k - aDc - 1, aX.j,
			1), p0.fillStyle = bE.pU;
		for (var fG, aFA, ed = 0, aC = 0; aC < aEy.length; aC++) aF0[aC] ? (bD.sF.textAlign(p0, 0), aFA = Math.floor((aEu - aDc + 2 * aEv) * (aC - ed + 1) / (aEy.length + 1) - .7 * aEv), p0.fillText(aEy[aC], gap, aFA), bD.sF.textAlign(p0, 2), 5 ===
			aC && 0 !== ah.na[aE.fM] && ah.he[aE.fM] >= af.ke(aE.fM) ? (p0.fillStyle = bE.qW, p0.fillText(aF6(aC), aX.j - gap, aFA), p0.fillStyle = bE.pU) : p0.fillText(aF6(aC), aX.j - gap, aFA)) : ed++
	}

	function aF6(aC) {
		return aC < 3 ? aEz[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.tg.a7r(aEz[aC] / 100, 2) : aC < 7 ? bD.tg.a2y(aEz[aC]) : aC === 7 ? aX.aFB(aEz[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hQ, aE.fM) : __fx.utils.getDensity(aE.fM)
	}

	function aF5() {
		ah.hQ[aE.fM] !== aEz[6] && (aEz[6] = ah.hQ[aE.fM], aEw++)
	}
	this.dm = function() {
		aF2 = aF3 = 0, (aEx = new Array(8))[0] = L(122), aEx[1] = aE.lI ? L(26) : L(123), aEx[2] = L(124), aEx[3] = L(125), aEx[4] = L(126), aEx[5] = L(127, 0, "Interest"), aEx[6] = L(128), aEx[7] = L(129),
			aEx.push("Max Troops", "Density"), // add aEx
			(aEy = new Array(aEx.length)).fill(""), (aEz = new Array(aEx.length))[0] = aE.lI ? 0 : aE.ky, aEz[1] = aE.lI ? am.lU : aE.lK, aEz[2] = aE.a3h, aEz[3] = 0, aEz[4] = bO.g3(1e4 * ah.hQ[0], Math.max(aE.ki, 1)), aEz[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.g3(700 * aE.data.iIncomeValue, 64) : bO.g3(700 * aE.data.iIncomeData[aE.fM], 64), aEz[6] = 0, aF5(), aEz[7] = 0, aF1 = aF6(6), (aF0 = new Array(aEx.length)).fill(!0), aF4 = 0, aF4 =
			aE.lI ? (aF0[0] = !1, aF0[2] = !1, aF0[3] = !1, 3) : (aF0[3] = !1, 1), aEw = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.ip() ? .1646 : .126) * 1.25 * i.iq), this.k = Math.floor(1.18 * this.j), aDc = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aEv = .04 * this.j, aEu = this.k, this.k -= Math.floor(aF4 * (this.k -
			2 * aDc) / aEx.length), fontSize = Math.floor(.7 * (aEu - aDc) / aEx.length);
		var a9V = bD.sF.sI(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(a9V, j) {
				for (var aC = 0; aC < aEy.length; aC++) aEy[aC] = bD.p0.a6l(aEx[aC], a9V, j)
			}((p0 = canvas.getContext("2d", {
				alpha: !0
			})).font = a9V, .575 * this.j), bD.sF.textBaseline(p0, 1), p0.lineWidth = 1, this.a86(), this.aCK(), aV.aCK(), aF8()
	}, this.aCK = function() {
		fj = i.j - this.j - bf.gap
	}, this.aF9 = function() {
		fl = bf.gap
	}, this.a86 = function() {
		fl = bf.gap + (aV.aBg() && 0 !== ah.na[aE.fM] && !aE.i1 ? aV.k + bf.gap : 0)
	}, this.nM = function(bz) {
		(bz || 100 <= aEw) && (aEw = 0, aF8())
	}, this.a8r = function() {
		return aEz[7]
	}, this.aFB = function(value) {
		var lt = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lt) / 1e3);
		return value < 10 ? lt + ":0" + value : lt + ":" + value
	}, this.eh = function() {
		var aFM, per;
		aF0[0] && aE.a3i - aE.a3h !== aEz[0] && (aEz[0] = aE.a3i - aE.a3h, aEw++), am.lU - aEz[0] !== aEz[1] && (aEz[1] = am.lU - aEz[0], aEw++), this.nD(), (aFM = af.aFN(aE.fM)) !== aEz[5] && (aEz[5] = aFM, aEw++), aF5(), aEz[7] += bi.aFO, aFM =
			aF6(7), aF1 !== aFM && (aF1 = aFM, aEw += 100), aFM = aE.iX ? bk.lV() : ah.hQ[mZ[0]], per = bO.g3(1e4 * aFM, Math.max(aE.ki, 1)), aEz[3] = aFM, aEz[4] !== per && (aEw++, aEz[4] = per), 8 === aE.lG && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.gy.hp(aC)) return bU.a3J.a3e(), 1;
				return
			}() || aEz[3] < aE.ki || ! function() {
				for (var aC = am.lU - 1; 0 <= aC; aC--)
					if (0 < ah.h4[am.lZ[aC]].length) return;
				return 1
			}() || bQ.ln.aFL().length || aE.iX && bk.lV(1) < aE.ki || bU.a3J.a3e()
	}, this.nD = function() {
		aF0[2] && aE.a3h !== aEz[2] && (aEz[2] = aE.a3h, aEw += 2 === aE.a3f ? 100 : 1)
	}, this.aFI = function() {
		return aEz[3] === aE.ki
	}, this.aFP = function(aC) {
		var vI, aFQ, ed;
		return 2 !== aE.a3f && (aC % 2 == 1 && (aW.nM(1, 1), bi.du = !0), aC === aE.a8F ? (aF2 = 0, aF8(), !1) : (-1 !== aC || 0 !== aF3) && (aFQ = aF2, aF2 = aE.hl ? aC / aE.a8F : (ed = performance.now(), 0 <= aC && (vI = ed - 392 * aC, aF3 =
			0 === aC || vI < aF3 ? vI : aF3), 1 < (aF2 = (ed - aF3) / (392 * aE.a8F)) ? 1 : aF2), aF8(), aF2 !== aFQ))
	}, this.yI = function() {
		yJ.drawImage(canvas, fj, fl)
	}
}

function cT() {
	var iP, aFR, j, k, aCQ, aFS, aFT, aBh, canvas, nn, aFU;

	function a1n() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.dm = function() {
		aFU = iP = !1, aCQ = .61, aFS = .07, aFT = .09, nn = aBh = k = 0
	}, this.resize = function() {
		var p0, o1, em, aFZ, aFa, a9a;
		iP && (j = aFV(j = a1.a2.ip() ? Math.floor(.69 * i.iq) : Math.floor(.5 * i.iq), aA7(i.j - 2 * bf.gap, 10)), j = aFV(j, Math.floor(3.57 * aA7(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, p0 = canvas.getContext("2d", {
				alpha: !0
			}), o1 = Math.floor(1 + k / 40), p0.clearRect(0, 0, j, k), p0.fillStyle = bE.pR, p0.fillRect(o1, o1, j - 2 * o1, k - 2 * o1), p0.lineJoin = "bevel", p0.lineWidth = 2 * o1, p0.strokeStyle = bE.pU, p0.strokeRect(o1, o1, j - 2 * o1,
				k - 2 * o1), p0.imageSmoothingEnabled = !1, em = ac.get(aFR), aFZ = em.width, a9a = (1 === aFR ? .85 : 21 === aFR ? .666 : .9) * aCQ * k / (aFa = em.height), p0.setTransform(a9a, 0, 0, a9a, Math.floor((j - a9a * aFZ) / 2),
				Math.floor((k - a9a * aFa) / 2)), p0.drawImage(em, 0, 0), p0.setTransform(1, 0, 0, 1, Math.floor(j - aFT * k - aFS * k - o1), Math.floor(o1 + aFS * k)),
			function(p0, fc) {
				p0.lineWidth = Math.floor(1 + k / 80), p0.strokeStyle = bE.pU, p0.beginPath(), p0.moveTo(0, 0), p0.lineTo(fc, fc), p0.moveTo(0, fc), p0.lineTo(fc, 0), p0.stroke()
			}(p0, Math.floor(aFT * k)), p0.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(g4, aFX, aCC, aFY) {
		iP || aE.hm || aFY && aFU || (aFR = aCC ? 21 : g4 ? 1 : 2, iP = aFU = !0, this.resize(), aM.ty(), aS.aC7(), nn = bi.ec, aBh = aFX ? 1 : 0)
	}, this.eh = function() {
		!iP || 1 <= aBh || (aBh = 1 < (aBh += 5e-4 * (bi.ec - nn)) ? 1 : aBh, nn = bi.ec, bi.du = !0)
	}, this.hq = function(fj, fl) {
		return !(!iP || aBh <= 0 || (fj -= Math.floor((i.j - j) / 2), fl -= a1n(), fj < 0) || fl < 0 || j < fj || k < fl || (j - k / 3 < fj && fl < k / 3 && (iP = !1, bi.du = !0), 0))
	}, this.yI = function() {
		!iP || aBh <= 0 || (yJ.globalAlpha = aBh, yJ.drawImage(canvas, Math.floor((i.j - j) / 2), a1n()), yJ.globalAlpha = 1)
	}
}

function dU() {
	var aFc, aFd = new Uint8Array(5),
		aFe = new Uint8Array(5);
	this.aFf = new aFg, this.dm = function() {
		for (var g4 = bm.buffer.data[119].value, aC = 0; aC < aFd.length; aC++) aFd[aC] = (g4 >> 2 * aC) % 4
	}, this.a8S = function() {
		aFc = [L(130), "", L(131, [ba.aFh[28]]), L(132, [ba.aFh[26]]), L(133, [ba.aFh[0]])], this.aFf.dm()
	}, this.eh = function() {
		this.aFf.eh()
	}, this.a9E = function(id) {
		1 < id && bM.t9() || ! function(eL) {
			if (3 === aFd[eL] || 1 === aFe[eL]) return;
			if (aFe[eL] = 1, !(Math.random() < .6)) {
				aFd[eL]++;
				for (var g4 = 0, aC = 0; aC < aFd.length; aC++) g4 += aFd[aC] << 2 * aC;
				bm.r0.r1(119, g4)
			}
			return 1
		}(id) || aO.aAD(aFc[id])
	}
}

function aFg() {
	var aFj;
	this.dm = function() {
		aFj = !1
	}, this.eh = function() {
		var hA;
		if (function() {
				if (!aFj) {
					if (bi.kv() % 30 != 9) return;
					if (!bD.gy.mV(90)) return;
					aFj = !0
				}
				return 1
			}() && (! function() {
				var sc = aO.aAZ(956);
				if (sc) {
					if (bD.gy.lw(sc.player)) return 1;
					aO.aAY(956, 0)
				}
				return
			}() && (-1 === (hA = (aE.iX ? function() {
				var id = bk.lX(),
					fc = am.lU;
				if (bj.lL[id])
					for (var wP = am.lZ, fa = bj.fa, aC = 0; aC < fc; aC++) {
						var hA = wP[aC];
						if (fa[hA] !== id) return hA
					} else if (1 < fc) return mZ[fc - 1];
				return -1
			} : function() {
				for (var aFr = am.lU, ls = am.lZ, aFs = kj, aC = 0; aC < aFr; aC++) {
					var hA = ls[aC];
					if (0 !== aFs[hA]) return hA
				}
				return -1
			})()) ? ! function() {
				var sc = aO.aAZ(957);
				if (sc && sc.aA3) {
					if (ad.fT(sc.aA3.fO << 2)) return 1;
					aO.aAY(957, 0)
				}
				return
			}() : (aO.a29(0, L(134, [ah.a2A[hA]]), 956, hA, bE.pU, bE.pR, -1, !0), 0)))) {
			var fc = ap.jc.m8;
			if (0 !== fc)
				for (var buffer = ap.jc.buffer, aC = 0; aC < fc; aC++) {
					var fO = buffer[aC];
					if (ad.fT(fO << 2)) return void aO.a29(0, L(135, [bP.fk(fO), bP.fm(fO)]), 957, 0, bE.pU, bE.pR, -1, !0, void 0, {
						fv: 1,
						fO: fO
					})
				}
		}
	}
}

function dV() {
	this.aFt = new aFu, this.dm = function() {
		this.aFt.resize()
	}
}

function aFu() {
	this.resize = function() {
		var aC, aFv = document.head.querySelector("style#ss");
		if (aFv)
			for (aC = aFv.sheet.cssRules.length - 1; 0 <= aC; aC--) aFv.sheet.deleteRule(0);
		else(aFv = document.createElement("style")).id = "ss", document.head.appendChild(aFv);
		var aCY = "::-webkit-scrollbar",
			aFw = bD.sF.ss(bf.uW),
			iZ = bD.sF.ss(Math.max(bD.sF.sG(.012), 8));
		try {
			aFv.sheet.insertRule(aCY + "{width:" + iZ + ";height:" + iZ + ";}", aFv.sheet.cssRules.length), aFv.sheet.insertRule(aCY + "-thumb{background-color:white;}", aFv.sheet.cssRules.length), aFv.sheet.insertRule(aCY +
				"-track{background:" + bE.pQ + ";}", aFv.sheet.cssRules.length), aFv.sheet.insertRule(aCY + "-track:horizontal{border-top:" + aFw + " solid white;}", aFv.sheet.cssRules.length), aFv.sheet.insertRule(aCY +
				"-track:vertical{border-left:" + aFw + " solid white;}", aFv.sheet.cssRules.length), aFv.sheet.insertRule(aCY + "-button{display:none;}", aFv.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aFv.sheet.cssRules.length - 1; 0 <= aC; aC--) aFv.sheet.deleteRule(0)
		}
	}
}

function dT() {
	this.aFx = !1, this.oR = !1, this.a8A = !1, this.aFy = [0, 0, 0, 0], this.render = function() {
		var o1, o2, oE, oF;
		this.a8A = this.a8A || this.oR, (this.oR || this.aFx && this.a8A) && (o1 = bd.aFz[0], o2 = bd.aFz[1], oE = bd.aFz[2], oF = bd.aFz[3], o1 = o1 < this.aFy[0] ? this.aFy[0] : o1, o2 = o2 < this.aFy[1] ? this.aFy[1] : o2, oE = oE > this.aFy[
				2] ? this.aFy[2] : oE, oF = oF > this.aFy[3] ? this.aFy[3] : oF, this.oR = !1, this.aFx = !1, o1 === this.aFy[0] && o2 === this.aFy[1] && oE === this.aFy[2] && oF === this.aFy[3] ? this.a8B() : o1 <= oE && o2 <= oF && a8U
			.putImageData(a8V, 0, 0, o1, o2, oE - o1 + 1, oF - o2 + 1))
	}, this.a8B = function() {
		this.a8A && this.aFy[2] >= this.aFy[0] && this.aFy[3] >= this.aFy[1] && a8U.putImageData(a8V, 0, 0, this.aFy[0], this.aFy[1], this.aFy[2] - this.aFy[0] + 1, this.aFy[3] - this.aFy[1] + 1), this.a8A = !1
	}, this.a3r = function() {
		this.aFy[2] >= this.aFy[0] && this.aFy[3] >= this.aFy[1] && a8U.putImageData(a8V, 0, 0, this.aFy[0], this.aFy[1], this.aFy[2] - this.aFy[0] + 1, this.aFy[3] - this.aFy[1] + 1), this.a8A = !1
	}, this.dm = function() {
		var fj, fl;
		this.aFx = !1, this.oR = !1, this.a8A = !1, this.aFy[0] = bV.fn, this.aFy[1] = bV.fo, this.aFy[2] = this.aFy[3] = 0;
		loop: for (fj = 1; fj < bV.fn - 1; fj++)
			for (fl = bV.fo - 2; 1 < fl; fl--)
				if (1 === aG0[ad.a1K(fj, fl) + 2]) {
					this.aFy[0] = fj;
					break loop
				} loop: for (fl = 1; fl < bV.fo - 1; fl++)
			for (fj = bV.fn - 2; 1 < fj; fj--)
				if (1 === aG0[ad.a1K(fj, fl) + 2]) {
					this.aFy[1] = fl;
					break loop
				} loop: for (fj = bV.fn - 2; 0 < fj; fj--)
			for (fl = bV.fo - 2; 1 < fl; fl--)
				if (1 === aG0[ad.a1K(fj, fl) + 2]) {
					this.aFy[2] = fj;
					break loop
				} loop: for (fl = bV.fo - 2; 0 < fl; fl--)
			for (fj = bV.fn - 2; 1 < fj; fj--)
				if (1 === aG0[ad.a1K(fj, fl) + 2]) {
					this.aFy[3] = fl;
					break loop
				}
	}
}

function L(value, aG1, yq, aG2) {
	var sA = "number" == typeof value ? bA.aG3[value] : value;
	if (yq && bA.aG4() && (sA = yq), !aG1) return aG2 ? sA.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : sA;
	for (var fc = aG1.length, aC = 0; aC < fc; aC++)
		for (var fv = 0; fv < 3; fv++) sA = sA.replace("{" + (10 * fv + aC) + "}", aG1[aC]);
	return sA
}

function c7() {
	this.data = new aG5;
	var aG6 = (new aG7).L84,
		aG9 = (this.aG3 = aG6, !(this.aG8 = "en"));
	this.dm = function() {
		var sA, h;
		aG9 = !1, ("en" === (sA = bm.buffer.data[12].value).split("-")[0].toLowerCase() ? (bA.aG3 = aG6, bA.aG8 = sA, 1) : bm.buffer.data[12].value === bm.buffer.data[145].value && 0 < bm.buffer.data[146].value && (sA = bm.buffer.data[146].value,
			(h = bm.sz.z2(sA, !1)).length === sA) && !!bD.sr.a6M(h) && function(h) {
			for (var fc = h.length, k = 0; k < fc; k++) h[k] = h[k].replace("&#39;", "'");
			var aGF = bm.sz.z2(fc, !0);
			if (fc !== aGF.length) return !1;
			if (!bD.sr.a6M(aGF)) return !1;
			for (var lt = aG6.length, aDT = new Array(lt), aGG = lt === fc, h5 = Math.min(fc, lt), aC = 0; aC < lt; aC++)
				if (aDT[aC] = aG6[aC], aC < fc && aGF[aC] === aDT[aC]) aDT[aC] = h[aC];
				else {
					aGG = !1;
					for (var fw = 0; fw < h5; fw++)
						if (aGF[fw] === aDT[aC]) {
							aDT[aC] = h[fw];
							break
						}
				} return bA.aG3 = aDT, bA.aG8 = bm.buffer.data[12].value, aGG
		}(h)) || (aG9 = !0)
	}, this.dp = function() {
		bj.dn(), aF.dn(), bh.dn(), bg.dn(), aP.dm(), br = new eB
	}, this.aG4 = function() {
		return this.aG3 === aG6 || !aG6.length
	}, this.aGH = function() {
		var aGI;
		return !!aG9 && (aG9 = !1, 0 !== aG6.length) && (aGI = bm.buffer.data[12].value, b1.ej.aGJ(0, aGI.slice(0, 20)), !0)
	}, this.aGK = function(h) {
		h.length !== aG6.length ? 8 === u.uw && u.a4v().aGL(30, 0, 1) : (this.aG3 = h, this.aG8 = bm.buffer.data[12].value, bm.r0.r1(145, this.aG8), bm.r0.r1(146, h.length), bm.sz.z8(h, !1), bm.sz.z8(aG6, !0), 8 === u.uw ? u.a4v().aGL(30) : 0 ===
			ab.a4r() && 5 === u.uw && u.z.aGM())
	}, this.aGN = function() {
		var zB, h = navigator.languages;
		return h && h.length ? (zB = Math.max(bA.data.aGO(h[0]), 0), 1 === h.length ? [zB, zB] : [zB, Math.max(bA.data.aGO(h[1]), 0)]) : [0, 0]
	}
}

function aG5() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aGP = function() {
		for (var aGQ = [], h = this.h, fc = h.length, aC = 0; aC < fc; aC++) aGQ.push(h[aC]);
		var aGR = bm.buffer.data[12].yq;
		for (aC = 0; aC < fc; aC++)
			if (aGQ[aC] === aGR) {
				aGQ.splice(aC, 1), fc--;
				break
			} aGQ.sort(), fc++, aGQ.unshift(aGR);
		try {
			if ("undefined" == typeof Intl) return aGQ;
			for (aC = 0; aC < fc; aC++) {
				var sA = new Intl.DisplayNames([aGQ[aC]], {
					type: "language"
				}).of(aGQ[aC]);
				sA !== aGQ[aC] && (aGQ[aC] = aGQ[aC] + ": " + sA)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aGQ
	}, this.aGT = function(aGU) {
		for (var sA = bm.buffer.data[12].value, fc = aGU.length, aC = 0; aC < fc; aC++)
			if (sA === aGU[aC].split(":")[0]) return aC;
		return 0
	}, this.aGO = function(aGV) {
		if (aGV && !(aGV.length < 2)) {
			aGV = aGV.split("-")[0].toLowerCase();
			for (var h = this.h, fc = h.length, aC = 0; aC < fc; aC++)
				if (aGV === h[aC]) return aC
		}
		return -1
	}
}

function aG7() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Lobby", "Player", "Players", "Propaganda", "Close {button}", "Report Abuse", "You earned {10} gold!",
		"{0} earned {11} gold!", "Team {0}", "Team {0} won the game!", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} points.",
		"Clan {0} gained {11} points. ✨", "You earned {10} clan points.", "You earned an additional {10} gold because you played for {1}.", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.",
		"Quit Game", "More", "This is a contest!", "Accept", "1 spectator joined the game.", "{10} spectators joined the game.", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.",
		"{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}",
		"Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humans won.", "The Resistance", "The zombies won.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.",
		"{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.",
		"You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.",
		"{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land",
		"Contest", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Bots",
		"Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.",
		"Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!",
		"You are leaving Territorial.io.", "The game could not start for you. Your selection was removed.", "🔑 Show Account", "✅ Vouch", "🚩 Report", "💬 Mention", "👁 Stop Observing", "👁 Observe", "🤝 Stop Joining With", "🤝 Join With",
		"🛡 Join Clan", "Loading", "{0} defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia",
		"North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person",
		"Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Sell Account", "Asking Price:",
		"Account to receive the gold:", "Publish Offer", "Buy This Account", "Buy", "If you successfully buy this account, it will be assigned the same password as your currently logged-in account.", "Account Name", "Copy", "Search", "Password",
		"Show", "Hide", "Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist",
		"Soldier", "Recruit", "Rating: ", "Report Power", "Power: {10}", "Remaining Reports: {10}", "Current Standing: {10}", "Vouch", "Report", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee", "Win Streak: ",
		"Admin Statistics", "Votes: ", "Elect", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "Email Verified", "🟢 Online", "Browsing the menus.", "Watching a replay.", "Playing a team game.",
		"Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.", "Last active {10} minutes ago.",
		"Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "🚫 Unfollow", "📥 Follow", "You are following this user. ✅",
		"Please choose a respectful username.", "Active punishments:", "Email Verification", "Email", "You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code",
		"Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).",
		"Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}",
		"Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:",
		"No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
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
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!",
		"Account {0} successfully bought and stored in account list.", "fetching data...", "This replay does not exist.", "The replay could not be loaded.", "Replay Error", "Warning", "Loading...", "Incoming Boat!", "Incoming Ship!",
		"Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In",
		"Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered",
		"Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks",
		"Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship intercepted!", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!",
		"Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function ds() {
	var fj, fl, k, vp, aGW, aGX, aGY, aGZ, aGa, j, a6z, aGb;
	this.iP = !1, this.dm = function(sA, aGc) {
		if (1 === a1.id && 13 <= a1.e6 && a1.e6 < 18) return aGc ? void(a6z = sA) : a6z !== sA ? void 0 : void a1.z0.saveString(200, sA);
		aGc && (a6z = sA, (aGb = document.createElement("a")).appendChild(document.createTextNode(a6z)), this.iP = !0, aGb.title = a6z, aGb.target = "_blank", aGb.href = a6z, aGb.style.textAlign = "center", aGb.style.color = bE.pU, aGb.style
			.position = "absolute", aGb.style.padding = "0px", aGb.style.margin = "0px", this.resize(), document.body.appendChild(aGb), bi.du = !0)
	}, this.ty = function() {
		return !(!this.iP || (u.removeChild(document.body, aGb), this.iP = !1))
	}, this.hq = function(ix, iy) {
		return !!this.iP && ((ix < fj || iy < fl || fj + j < ix || fl + k < iy || fj + j - vp < ix && iy < fl + vp) && (bi.du = !0, this.iP = !1, u.removeChild(document.body, aGb)), !0)
	}, this.resize = function() {
		var a9V, aGd;
		this.iP && (aGZ = Math.floor(.8 * (a1.a2.ip() ? i.j > i.k ? .6 : .55 : .4) * i.iq), vp = Math.floor(.15 * aGZ), aGW = Math.floor(.35 * vp), aGX = Math.floor(.5 * vp), aGY = Math.floor(2.5 * aGX), k = vp + aGW + 3 * aGX, a9V = bD.sF.sI(1,
			aGW / i.l), aGa = Math.floor(i.l * aR.measureText(a6z, a9V)), aGd = j = (aGZ < aGa ? aGa : aGZ) + 2 * aGY, j = Math.min(j, i.j - 2 * (a1.a2.ip() ? 2 : 1) * bf.gap), a9V = bD.sF.sI(1, j / aGd * aGW / i.l), aGa = Math.floor(i
			.l * aR.measureText(a6z, a9V)), fj = Math.floor((i.j - j) / 2), fl = Math.floor((i.k - k) / 2), aGb.style.font = a9V, aGb.style.top = Math.floor((fl + 1.4 * aGX + vp) / i.l) + "px", aGb.style.left = Math.floor((fj + (j -
			aGa) / 2) / i.l) + "px")
	}, this.yI = function() {
		this.iP && (yJ.fillStyle = bE.pR, yJ.fillRect(fj, fl + vp, j, k - vp), yJ.fillStyle = bE.qj, yJ.fillRect(fj, fl, j, vp), yJ.fillStyle = bE.pU, yJ.lineWidth = bf.a2f, yJ.strokeStyle = bE.pU, yJ.strokeRect(fj, fl, j, k), yJ.fillRect(fj,
			fl + vp, j, bf.a2f), yJ.font = bD.sF.sI(1, .48 * vp), bD.sF.textAlign(yJ, 1), bD.sF.textBaseline(yJ, 1), yJ.fillText(L(136), Math.floor(fj + (j - .5 * vp) / 2), Math.floor(fl + .55 * vp)), aN.a9h(Math.floor(fj + j - .8 * vp),
			Math.floor(fl + .25 * vp), Math.floor(.5 * vp)), yJ.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dr() {
	var gap, aEx, fj = [0, 0, 0, 0, 0],
		fl = [0, 0, 0, 0, 0],
		oD = [1, 1, 1, 1, 1],
		g4 = [!0, !0, !0, !1, !1],
		em = (this.gP = [!0, !0, !0, !1, !1], null);
	this.aGe = function(a6X, aGf) {
		em = a6X, g4 = aGf, aEx = [bN.aGg, bN.a4n, bN.aGh, bN.aGh, bN.aGi], this.dm()
	}, this.dm = function() {
		if (ac.vM()) {
			var aC, v1 = Math.floor((a1.a2.ip() ? .261 : .195) * i.iq),
				v2 = Math.floor(.9 * v1),
				aCQ = Math.floor(.17 * v2);
			if (gap = a1.a2.ip() ? 2 * bf.gap : bf.gap, oD[0] = v1 / em[0].width, oD[1] = v2 / em[1].width, oD[2] = aCQ / em[2].height, oD[3] = aCQ / em[3].height, oD[4] = aCQ / em[4].height, oD[2] *= 1.7, oD[3] *= 1.07, fj[0] = gap, fj[1] = gap,
				fj[2] = gap, fj[3] = gap, fj[4] = Math.floor(2 * gap + oD[3] * em[3].width), fl[0] = gap, fl[1] = fl[0] + gap + oD[0] * em[0].height, fl[2] = fl[1] + gap + oD[1] * em[1].height, fl[3] = fl[2] + gap + oD[2] * em[2].height, fl[4] =
				fl[3], !g4[0])
				for (aC = 0; aC < 5; aC++) fl[aC] -= oD[0] * em[0].height + gap;
			if (!g4[1])
				for (aC = 2; aC < 5; aC++) fl[aC] -= oD[1] * em[1].height + gap
		}
	}, this.iP = function() {
		return !(7 === ab.a4r() && a1.a2.ip())
	}, this.hq = function(ix, iy) {
		if (em && this.iP())
			for (var aC = g4.length - 1; 0 <= aC; aC--)
				if (g4[aC] && this.gP[aC] && fj[aC] < ix && fl[aC] < iy && ix < fj[aC] + oD[aC] * em[aC].width && iy < fl[aC] + oD[aC] * em[aC].height) return u.v(9, u.uw, new aGj(L(137), bD.sF.a6y(aEx[aC]))), !0;
		return !1
	}, this.yI = function() {
		if (em && this.iP()) {
			var aC;
			for (yJ.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) g4[aC] && this.gP[aC] && (yJ.setTransform(oD[aC], 0, 0, oD[aC], fj[aC], fl[aC]), yJ.drawImage(em[aC], 0, 0));
			yJ.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function de() {
	this.aGk = 0, this.aGl = null, this.x4 = null, this.sf = null, this.ln = null, this.z = null, this.xU = null, this.x2 = null, this.message = null, this.aGm = null, this.tx = null, this.aGn = null, this.aGo = new aGp, this.wa = new aGq, this.f9 =
		0, this.aDK = 0, this.dm = function() {
			this.aDK = bi.ec, this.aGk = bJ.f3.f4(bm.buffer.data[105].value, 5), this.x4 = new aGr, this.sf = new aGs, this.ln = new aGt, this.z = new aGu, this.xU = new aGv, this.x2 = new aGw, this.message = new aGx, this.aGm = new aGy, this.tx =
				new aGz, this.aGn = new aH0, bt.dm(), this.f9 = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.f7()
		}, this.xO = function() {
			this.wa.aH1(), this.tx && this.tx.xO(), this.aGl = null, this.x4 = null, this.sf = null, this.ln = null, this.z = null, this.xU = null, this.x2 = null, this.message = null, this.aGm = null, this.tx = null, this.aGn = null, this.f9 = 0, bt
				.xO(), a1.a2.setState(0)
		}
}

function aGr() {
	function aH3() {
		bq.z.aH4 += 29 === u.uw && 1 === bq.z.aH5
	}

	function aHZ(self, kE, h5) {
		for (var h = self.wP.splice(kE, h5), aC = 0; aC < h.length; aC++) aHP(self, h[aC]);
		aH3()
	}

	function aHP(self, hA) {
		var self = self.x5,
			p6 = self.pop();
		p6 !== hA && ((self[hA.aHB] = p6).aHB = hA.aHB)
	}
	this.wP = [], this.x5 = [], this.aH2 = [], this.aH6 = function(uu, username, xE, a7W, aH7, elo, color, zW, aH8, code, x8, xB) {
		username = this.aHA(uu, username, xE, a7W, aH7, elo, color, zW, aH8, code);
		username.x8 = x8, username.xB = xB, this.wP.push(username), username.aHB = this.x5.length, this.x5.push(username), bq.aGk === uu && (bq.aGl = username), bq.aGn.aHC(uu) && (username.xG = 1), bq.tx.aHD(uu), aH3()
	}, this.aHA = function(uu, username, xE, a7W, aH7, elo, color, zW, aH8, code) {
		return {
			uu: uu,
			username: code ? __fx.nameFilter.filter(username) : "Player " + bI.f3.a2y(uu, 2),
			aHE: __fx.nameFilter.filter(username),
			xE: xE,
			a7W: a7W,
			aH7: aH7,
			elo: elo,
			color: color,
			zW: zW,
			aH8: aH8
		}
	}, this.aHF = function(eL, xE, a7W, aH7, elo, zW, color) {
		eL = this.wP[eL];
		eL.xE = xE, eL.a7W = a7W, eL.aH7 = aH7, eL.elo = elo, eL.zW = zW, eL.color = color, bq.tx.aHD(eL.uu), aH3()
	}, this.aHG = function(eL, code) {
		eL = this.wP[eL];
		1 === code && (eL.username = eL.aHE), bq.tx.aHD(eL.uu), aH3()
	}, this.aHH = function(eL, aHI) {
		var eL = this.wP[eL],
			aHJ = eL.username,
			aCd = eL.username !== eL.aHE,
			aHK = "Redacted " + bI.f3.a2y(eL.uu, 2);
		eL.aHE = aHI ? "[" + bD.tg.a4R(eL.aHE) + "] " + aHK : aHK, aCd || (eL.username = eL.aHE), aHJ.indexOf("Redacted") < 0 && (eL.aHL = aHJ), bq.tx.aHD(eL.uu), aH3()
	}, this.aHM = function(eL, username) {
		var eL = this.wP[eL],
			aCd = eL.username !== eL.aHE;
		eL.aHE = username, aCd || (eL.username = username), eL.uu === bq.aGk && bq.ln.aHN(username), bq.tx.aHD(eL.uu), aH3()
	}, this.aHO = function(eL) {
		eL = this.wP.splice(eL, 1)[0];
		aHP(this, eL), this.aH2.push(eL), 1e3 < this.aH2.length && this.aH2.shift(), aH3()
	}, this.aHQ = function(eL, target, x8, xB) {
		var wP = this.wP,
			eL = wP.splice(eL, 1)[0];
		wP.splice(target, 0, eL), !eL.x8 && x8 && bq.aGn.join(eL), eL.x8 = x8, eL.xB = xB, aH3()
	}, this.aHR = function(x8) {
		for (var wP = this.wP, fc = wP.length, aC = 0; aC < fc; aC++)
			if (wP[aC].x8 === x8) return aC;
		return fc
	}, this.aHS = function(kE) {
		for (var wP = this.wP, fc = wP.length, x8 = kE < fc ? wP[kE].x8 : 0, aC = kE; aC < fc && wP[aC].x8 === x8 && !wP[aC].xB;) aC++;
		return aC
	}, this.aHT = function(kE, aHU, aHV) {
		for (var aHW = this.aHS(kE), h = [], aC = 0; aC < aHU; aC++) aHV && 511 === aHV[aC] || h.push(this.wP[aHW + aC]);
		return h
	}, this.aHX = function(kE, h5, aHU, aHV) {
		for (var aHY = this.aHT(kE, aHU, aHV), aC = aHY.length - 1; 0 <= aC; aC--) aHZ(this, this.wP.indexOf(aHY[aC], kE), 1);
		aHZ(this, kE, h5)
	}, this.aHa = function(x8) {
		for (var wP = this.wP, aHb = 0; aHb < wP.length && wP[aHb].x8 === x8;) aHb++;
		for (var left = wP.splice(0, aHb), aC = 0; aC < aHb; aC++) left[aC].x8 = 0, left[aC].xB = 0, wP.push(left[aC]);
		aH3()
	}, this.aHc = function(uu) {
		for (var wP = this.wP, lt = wP.length, fv = 0; fv < lt; fv++)
			if (uu === wP[fv].uu) return wP[fv];
		return null
	}
}

function aGs() {
	this.sf = [], this.wd = 0, this.we = 0, this.aHd = 0;
	var aHf = this.aHe = 0,
		aHg = 0;
	this.aHh = function() {
		for (var self, fc = bK.re(4), sf = new Array(fc), aC = 0; aC < fc; aC++) sf[aC] = {
			id: bK.re(13),
			wk: bK.re(12),
			h5: bK.re(16),
			aHU: bK.re(16),
			nV: bK.re(10),
			fI: bK.re(6),
			mapSeed: bK.re(14),
			wN: bK.re(4),
			wo: bK.re(1)
		};
		this.sf = sf, __fx.lobbyReminders.setRooms(this.sf), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aHj({
				id: 7,
				s: text
			})
		}), !(self = this).wd || 0 <= self.x7(self.wd) || (self.wd = 0, self.we = 0, bq.message.aHj({
			id: 7,
			s: L(138)
		}))
	}, this.x7 = function(id) {
		for (var sf = this.sf, aC = sf.length - 1; 0 <= aC; aC--)
			if (sf[aC].id === id) return aC;
		return -1
	}, this.aHk = function() {
		return 1 === aHf
	}, this.aHl = function(id) {
		return 0 < id && 0 < this.sf.length && this.sf[0].id === id
	}, this.aHm = function() {
		return this.aHl(this.wd)
	}, this.click = function(eL, xB) {
		eL = this.sf[eL];
		xB = xB ? 1 : 0, eL && (eL.id === this.wd && xB === this.we ? this.select(0, 0) : this.select(eL.id, xB))
	}, this.select = function(id, xB) {
		this.wd = id, this.we = id ? xB : 0, this.aHd = this.aHe = 0, aHf = 1, aHg++, b1.aHn.aHo(4, {
			x8: id,
			xB: this.we
		}), u.a8s(29).aHp()
	}, this.aHq = function(id, xB) {
		0 === (aHg = Math.max(aHg - 1, 0)) && (this.wd = id, this.we = xB)
	}, this.yg = function(uu, wN) {
		this.aHd = wN ? uu : 0, this.aHe = wN, aHf = 1, b1.aHn.aHo(6, {
			wN: wN,
			uu: uu
		})
	}, this.aHr = function(uu, wN) {
		return this.aHe === wN && this.aHd === uu
	}, this.wf = function(wc) {
		return wc.h5 - wc.aHU
	}, this.wi = function(wN) {
		return wN < 7 ? wN + 2 + " Teams" : 7 === wN ? "Battle Royale" : 8 === wN ? "1v1" : 9 === wN ? "Zombie" : "No Full-Sending"
	}, this.wl = function(wc) {
		return wc.nV < (9 === wc.wN ? 333 : 512)
	}, this.wj = function(wk) {
		var aB3 = wk % 60;
		return bO.g3(wk, 60) + ":" + (aB3 < 10 ? "0" : "") + aB3
	}
}

function aH0() {
	var aHs = [],
		aHt = [],
		aHu = 0;

	function aHv(h, aAb, aHy, aHz) {
		var fc = h.length;
		if (0 === fc) return "";
		var sA = "@" + h[0];
		if (1 === fc) return sA + aAb + aHz;
		for (var aC = 1; aC < fc - 1; aC++) sA += ", @" + h[aC];
		return sA + " and @" + h[fc - 1] + aHy + aHz
	}
	this.dm = function() {
		var sA = aHv(aHt, " is", " are", " in the lobby.");
		sA.length && bq.message.aHj({
			id: 7,
			s: sA
		}), aHs = [], aHt = [], aHu = 0
	}, this.aHC = function(aHw) {
		return bq.aGk !== aHw && (aHw = bI.f3.a2y(aHw, 5), !!bm.yg.xG(aHw)) && (aHt.push(aHw), !0)
	}, this.join = function(player) {
		bq.aGk !== player.uu && (player = bI.f3.a2y(player.uu, 5), bm.yg.xG(player)) && aHs.push(player)
	}, this.aHx = function() {
		var aAb, aHy;
		++aHu < 3 || (aHu = 0, aAb = aHv(aHt, "", "", " entered the lobby!"), (aAb = (aHy = aHv(aHs, "", "", " joined a game!")).length ? aAb.length ? aAb + " " + aHy : aHy : aAb).length && bq.message.aHj({
			id: 7,
			s: aAb
		}), aHs = [], aHt = [])
	}
}

function aGp() {
	this.dv = function(kE, aI0, aHU) {
		var x4, aGo = bq.z.aGo,
			aI1 = bq.x4.wP.slice(kE, kE + aI0),
			kE = bq.x4.aHT(kE, aHU, aGo.aHV),
			aHU = function(aI1) {
				if (__fx.customLobby.isActive()) return bq.aGl ? __fx.customLobby.getPlayerId() : -1;
				if (bq.aGl && bq.sf.aHk())
					for (var fc = aI1.length, uu = bq.aGl.uu, aC = 0; aC < fc; aC++)
						if (aI1[aC].uu === uu) return aC;
				return -1
			}(aI1.concat(kE));
		if (-1 === aHU) return (x4 = bq.x4).aH2 = x4.aH2.concat(aI1, kE), 1e3 < bq.x4.aH2.length && bq.x4.aH2.splice(0, bq.x4.aH2.length - 1e3), bq.z.aH4 += 29 === u.uw && 1 === bq.z.aH5, !1;
		if (aGo.a8M = aI0 <= aHU ? 1 : 0, aGo.a8f = kE.length, 8 === aGo.wN) {
			for (var aI5 = function(aHV) {
					for (var h = [], aC = 0; aC < aHV.length; aC++) 511 !== aHV[aC] && h.push(aHV[aC]);
					return h
				}(aGo.aHV), iV = aHU - aI0, aI7 = aGo.a8M ? aI5[iV] : aHU >> 1, aI8 = 0, aC = aGo.a8f = 0; aC < aI5.length; aC++) aI5[aC] === aI7 && (aI8 += aC < iV ? 1 : 0, aGo.a8f++);
			aGo.aI9 = (aGo.aI9 + aI7) % 1024, 0 <= aGo.a48 && (aGo.a48 += aI7), aHU = aGo.a8M ? 2 + aI8 : aHU % 2, aI1 = aI1.slice(2 * aI7, 2 * aI7 + 2)
		}
		return aGo.aIA = aGo.a8M ? function(aI1) {
			var sf = bq.sf;
			if (sf.aHe)
				for (var aC = 0; aC < aI1.length; aC++)
					if (aI1[aC].uu === sf.aHd) return aC;
			return 0
		}(aI1) : 0, ay.dm(aGo, aI1, aHU), !0
	}, this.aIC = function(aGo, aI1, aI3) {
		var ff = aE.data = new a8G,
			aIF = (ff.spawningSeed = aGo.spawningSeed, aGo.wN < 7 ? (ff.gameMode = 1, ff.numberTeams = aGo.wN + 2) : 9 === aGo.wN ? (ff.gameMode = ff.isZombieMode = 1, ff.numberTeams = 2) : (ff.gameMode = 0, ff.battleRoyaleMode = 7 === aGo.wN ?
					0 : 10 === aGo.wN ? 1 : 2), ff.selectedPlayer = aGo.a8M ? aGo.aIA : aI3, ff.a8M = aGo.a8M, ff.a8f = aGo.a8f, ff.isContest = aGo.wo, ff.mapType = bV.aID(aGo.fI) ? 0 : 1, bV.aIE(ff, aGo.fI), ff.mapSeed = aGo.mapSeed, ff
				.humanCount = aI1.length);
		ff.selectableSpawn = 1 === ff.gameMode || aIF < 100, ff.colorsData = new Uint32Array(aIF), ff.playerNamesData = new Array(aIF), ff.a8g = new Uint32Array(aIF);
		for (var aC = 0; aC < aIF; aC++) ff.colorsData[aC] = aI1[aC].color, ff.playerNamesData[aC] = aI1[aC].username, ff.a8g[aC] = aI1[aC].uu;
		if (2 === ff.battleRoyaleMode)
			for (ff.elo = new Uint16Array(aIF), aC = 0; aC < aIF; aC++) ff.elo[aC] = aI1[aC].elo;
		bx.close(), ab.setState(8), bV.a8(aGo.fI, ff.mapSeed), aE.a8L(), aE.a48 = aGo.a48, aE.a8J = 2
	}
}

function aGt() {
	var eC = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aIG = [bE.pi, bE.pi, bE.pj, bE.qE, bE.qF, bE.pz, bE.qK, bE.pj, bE.ql, bE.qZ, bE.qi, bE.pL],
		aIH = [
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
		aII = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aIY(tj, uu, aIa) {
		for (var fw = tj.length - 1; 0 <= fw; fw--) {
			var sc = tj[fw];
			0 === sc.id && sc.uu === uu && (sc.s = "[Redacted Message]", aIa) && (sc.aIb = 1)
		}
	}
	this.tp = function(aIJ) {
		var aIK, a4S;
		return aIJ.id < 5 && (aIK = "@" + bI.f3.a2y(aIJ.uu, 5)), 0 === aIJ.id ? aIK + ": " + aIJ.s : 1 === aIJ.id ? (a4S = "@" + bI.f3.a2y(aIJ.target, 5), 0 === aIJ.aIL ? 32768 <= aIJ.value ? aIK + " voted with " + (aIJ.value - 32768 + 1) +
				" gold against " + a4S + " to weaken the latter's admin position. 📉" : aIK + " voted with " + (aIJ.value + 1) + " gold for " + a4S + " to strengthen the latter's admin position. 💪" : 1 === aIJ.aIL ? aIK + " sent " + Math.floor(
					aIJ.value / 100) + " 🧈 gold to " + a4S + "." : aIK + " voted with " + (aIJ.value / 10).toFixed(1) + " points for " + a4S + " to acknowledge the latter as clan leader. ✅") : 2 === aIJ.id ? 0 === aIJ.aIL ? aIK +
			" was 🔇 muted for 1 Hour." : 1 === aIJ.aIL ? "The username of " + aIK + " was ✂️ redacted. Duration: 1 Day" : aIK + " 👢 was kicked." : 3 === aIJ.id ? aIK + br.eO(aIJ.aIL, br.eI[aIJ.aIL][aIJ.value]) + "@" + bI.f3.a2y(aIJ.target, 5) +
			br.eQ(aIJ.aIL, br.eI[aIJ.aIL][aIJ.value]) : 4 === aIJ.id ? (a4S = "@" + bI.f3.a2y(aIJ.target, 5), 1 === aIJ.aIL ? "✅ " + aIK + " vouched for " + a4S + "." + (aIJ.aIN ? " ⚖️ The punishment of " + a4S + " was refunded." : "") : "🚩 " +
				aIK + " reported " + a4S + "." + (aIJ.aIN ? " ⚖️ " + a4S + " was punished." : "")) : 5 === aIJ.id ? aII[aIJ.aIL] : 6 === aIJ.id ? "You are about to mention " + aIJ.value + " player" + (1 === aIJ.value ? "" : "s") +
			". This action will cost " + (Math.max(10 * aIJ.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aIJ.id ? aIJ.s : void 0
	}, this.tn = function(aIJ, aIO) {
		return {
			aIJ: aIJ,
			s: aIO,
			aIP: 0,
			fontSize: 4 === aIJ.id ? .8 : 1,
			tw: 0,
			aIQ: aIJ.id ? bE.qD : bE.pU
		}
	}, this.xC = function(player, xA) {
		return (xA ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.xD = function(xE) {
		return aIG[xE]
	}, this.aIR = function(xE, a7W) {
		return xE < 3 || 7 === xE ? aIH[xE][0] : 4 === xE ? aIH[xE][a7W < 1 ? 0 : a7W < 10 ? 1 : 2] : aIH[xE][a7W < 10 ? 0 : 1]
	}, this.aIS = function(a7W) {
		return 0 === a7W
	}, this.xF = function(sc) {
		return !!bq.aGl && sc.uu === bq.aGl.uu
	}, this.aIT = function(x4, aIU, aIV) {
		var a4P = [];
		loop: for (var aC = aIU; aC < aIV; aC++) {
			var a4Q = bD.tg.a4R(x4[aC].username);
			if (a4Q) {
				for (var fw = a4P.length - 1; 0 <= fw; fw--)
					if (a4Q === a4P[fw].name) {
						a4P[fw].h5++;
						continue loop
					} a4P.push({
					name: a4Q,
					h5: 1
				})
			}
		}
		if (a4P.sort(function(fv, fw) {
				return fw.h5 - fv.h5
			}), 0 === a4P.length) return "";
		for (var sA = a4P[0].name + ": " + a4P[0].h5, aC = 1; aC < a4P.length; aC++) sA += "   " + a4P[aC].name + ": " + a4P[aC].h5;
		return sA
	}, this.aIW = function(xE, a7W, aH7) {
		return 0 === eC[xE].length ? "Rank: " + (a7W + 1) : eC[xE] + " Rank: " + (a7W + 1) + (3 !== xE && aH7 < 100 ? "   " + eC[3] + " Rank: " + (aH7 + 1) : "")
	}, this.aIX = function(uu) {
		aIY(bq.z.tj, uu), aIY(bq.message.aIZ(), uu, 1), bq.tx.aIX(uu)
	}, this.aHN = function(username) {
		var username = this.aIc(username);
		username && (username = "[" + username + "] " + function(username) {
			var fR = username.indexOf("["),
				fg = username.indexOf("]", fR);
			for (; 0 <= fR && fR < fg;) username = username.substring(0, fR) + username.substring(fg + 1), fR = username.indexOf("["), fg = username.indexOf("]", fR);
			return (username = username.replace(new RegExp("[\\[\\]]", "g"), "")).replace(new RegExp("\\s+", "g"), " ").trim()
		}(String(bm.buffer.data[122].value)), bm.r0.r1(122, username.trim().slice(0, 20)))
	}, this.aIc = function(username) {
		var fR = username.indexOf("["),
			fg = username.indexOf("]");
		return !(fR < 0 || fg - fR <= 1 || 8 < fg - fR) && (username = username.substring(fR + 1, fg).trim()).length ? username : null
	}
}

function aGw() {
	var uN = 0,
		aIf = 0,
		aIg = 0,
		aIh = null,
		aIi = null;

	function aIl(sc, aIm, aIn) {
		var sA = sc.username;
		return (sA += "   " + bq.ln.aIW(sc.xE, sc.a7W, sc.aH7)) + function(sc) {
			sc = sc.zW;
			if (sc < 1e3) return "   Gold: " + sc;
			if ((sc %= 1024) < 1e3) return "   Gold: " + sc + "k";
			return "   Gold: " + (sc - 999) + "M"
		}(sc) + ("   IP: " + bI.f3.a2y(sc.aH8, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aIn ? aIf : aIk(sc, aIm)])
	}

	function aIk(sc, aIm) {
		return aIf = aIm || bq.x4.aHc(sc.uu) ? 1 : 0
	}
	this.x3 = 0, this.aIj = function() {
		!uN || aIf === aIk(aIi) && aIg === aIi.zW || (aIg = aIi.zW, aIh.show(-1, -1, aIl(aIi, 0, 1), 1, 1, aIi.color))
	}, this.xH = function(e, sc, aIm) {
		var aCX = e.getBoundingClientRect();
		this.show(aCX.left, aCX.top, sc, 0, aIm), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.x2 && bq.x2.ty(1)
		}), this.x3 = aIm
	}, this.show = function(fj, fl, sc, uR, aIm) {
		aIh = aIh || new uL, aIg = (aIi = sc).zW, aIh.show(fj, fl, aIl(sc, aIm), uR, 0, aIi.color), uN = 1
	}, this.ty = function(uX) {
		this.x3 = 0, aIh && aIh.ty(uX) && (uN = 0, aIi = null)
	}
}

function aGu() {
	function aIr() {
		var fI, mapSeed;
		u.a8s(29) && (bq.z.aH4 && 1 === bq.z.aH5 && u.a8s(29).aIt(), bq.z.aH4 = 0, u.a8s(29).aIu(), fI = bV.fI, mapSeed = bV.mapSeed, u.a8s(29).aIv(), fI === bV.fI && mapSeed === bV.mapSeed || bq.wa.aIw(), bq.x2.aIj())
	}
	this.vk = 0, this.aH5 = 2, this.aGo = {
		fI: 0,
		mapSeed: 0,
		wN: 0,
		wo: 0,
		spawningSeed: 0,
		a48: -1,
		a4z: 0,
		aI9: 0,
		aHU: 0,
		aHV: null,
		a8f: 0,
		a8M: 0,
		aIA: 0
	}, this.tj = [], this.tt = 300, this.tk = 1048575, this.aH4 = 0, this.aIp = [0, 0], this.aIq = function() {
		aIr(), bq.aGn.dm(), __fx.lobbyReminders.check()
	}, this.aHx = function() {
		bq.aGn.aHx(), aIr(), __fx.lobbyReminders.check()
	}, this.aIx = function() {
		0 === this.aH5 && u.a8s(29).aIy()
	}
}

function aGq() {
	var aIz = 256,
		aJ0 = 18,
		aJ1 = [],
		aJ4 = 0;

	function yu(key, aJ6, fj, fl, wv) {
		var canvas = document.createElement("canvas"),
			p0 = (canvas.width = canvas.height = aIz, canvas.getContext("2d", {
				alpha: !1
			})),
			p0 = (p0.imageSmoothingEnabled = !0, p0.drawImage(aJ6, fj, fl, wv, wv, 0, 0, aIz, aIz), {
				key: key,
				canvas: canvas,
				iP: 0
			});
		return aJ1.push(p0), aJ1.length > aJ0 && function(aJC) {
			for (var fc = aJ1.length, aC = 0; aC < fc; aC++) {
				var hA = aJ1[aC];
				if (!hA.iP && hA !== aJC) return hA.canvas.width = hA.canvas.height = 0, aJ1.splice(aC, 1)
			}
		}(p0), p0
	}
	this.wb = function(fI, mapSeed) {
		return fI + "_" + (bV.aJ5(fI) ? mapSeed : 0)
	}, this.wt = function(fI, mapSeed) {
		for (var key = this.wb(fI, mapSeed), aJ6 = null, aC = aJ1.length - 1; 0 <= aC; aC--) {
			var hA = aJ1[aC];
			if (hA.key === key) {
				if (!hA.iP) return hA.iP = 1, aJ1.splice(aC, 1), aJ1.push(hA), hA.canvas;
				aJ6 = hA
			}
		}
		return aJ6 ? ((fI = yu(key, aJ6.canvas, 0, 0, aIz)).iP = 1, fI.canvas) : null
	}, this.wu = function(canvas) {
		for (var aC = aJ1.length - 1; 0 <= aC; aC--)
			if (aJ1[aC].canvas === canvas) {
				aJ1[aC].iP = 0;
				break
			} canvas.parentNode && u.removeChild(canvas.parentNode, canvas)
	}, this.aH1 = function() {
		for (var aC = aJ1.length - 1; 0 <= aC; aC--) this.wu(aJ1[aC].canvas)
	}, this.eh = function() {
		if (bq.f9 && !(bi.ec < aJ4)) {
			for (var self, fI, mapSeed, ed, sf = bq.sf.sf, fc = sf.length, aC = 0; aC < fc; aC++)
				if (! function(key) {
						for (var aC = aJ1.length - 1; 0 <= aC; aC--)
							if (aJ1[aC].key === key) return 1;
						return
					}(this.wb(sf[aC].fI, sf[aC].mapSeed))) return self = this, fI = sf[aC].fI, mapSeed = sf[aC].mapSeed, ed = void 0, ed = performance.now(),
					function(self, fI, mapSeed) {
						var aJ6 = bV.aJA(fI, mapSeed),
							wv = Math.min(aJ6.width, aJ6.height);
						yu(self.wb(fI, mapSeed), aJ6, aJ6.width - wv >> 1, aJ6.height - wv >> 1, wv), aJ6 !== bV.a0E && (aJ6.width = aJ6.height = 0)
					}(self, fI, mapSeed), u.a8s(29).aHp(), self = performance.now(), void(aJ4 = self + Math.max(Math.min(self - ed, 500), 200));
			aJ4 = bi.ec + 200
		}
	}, this.aIw = function() {
		aJ4 = performance.now() + 200
	}
}

function aGy() {
	var aJD = 0,
		aJE = "",
		aJF = 0,
		aJG = 0;

	function aJI(aIO) {
		b1.aHn.aHo(3, aIO)
	}

	function aJQ(h5) {
		aJD = 1, bq.message.aHj({
			id: 6,
			value: h5
		})
	}

	function aJL(s) {
		var aJU = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aJU)
	}
	this.a3j = function(s) {
		var aJH, h, aJM;
		if (aJD) return aJD = 0, "yes" === (aJH = s.toLowerCase()) || "y" === aJH ? void aJI(aJE) : void bq.message.aHj({
			id: 5,
			aIL: 7
		});
		!(s.indexOf("@") < 0) && (aJH = aJL(s)) ? (aJE = s, h = bq.x4.wP.slice(), function(aJK, aJM, s) {
			if (!aJF) return;
			for (var fc = aJM.length, aC = 0; aC < fc; aC++) 2 === aJM[aC].id && (s = s.replace(aJK[aJM[aC].eL], "@" + aJM[aC].g4));
			return aJD = 1, aJI((aJE = s).slice(0, 126) + "|"), 1
		}(aJH, aJM = function(aJK) {
			for (var aJM = [], fc = (aJG = aJF = 0, aJK.length), aC = 0; aC < fc; aC++) {
				var j = aJK[aC],
					lt = j.length;
				bD.tg.startsWith(j, "@[") ? lt <= 9 && bD.tg.a71(j, "]") && aJM.push({
					id: 0,
					g4: j.substring(2, lt - 1).toUpperCase()
				}) : 6 === lt ? (aJG++, aJM.push({
					id: 1,
					g4: bJ.f3.f4(j.substring(1), 5)
				})) : 1 < lt && lt < 5 && 0 <= (lt = bA.data.aGO(j.substring(1))) && (aJM.push({
					id: 2,
					g4: lt,
					eL: aC
				}), aJF = 1)
			}
			return aJM
		}(aJH), s) || (0 === aJM.length ? ! function(aJK) {
			for (var fc = aJK.length, aC = 0; aC < fc; aC++) {
				var j = aJK[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return
		}(aJH) ? aJI(s) : aJQ(h.length) : aJH.length === aJG ? aJI(s) : (function(h, aJM) {
			var lt = aJM.length;
			if (0 === lt) return;
			var fc = h.length;
			loop: for (var aC = fc - 1; 0 <= aC; aC--) {
				for (var fv = 0; fv < lt; fv++)
					if (0 === aJM[fv].id) {
						if (aJM[fv].g4 === bD.tg.a4R(h[aC].username)) continue loop
					} else if (1 === aJM[fv].id && aJM[fv].g4 === h[aC].uu) continue loop;
				h[aC] = h[--fc], h.pop()
			}
		}(h, aJM), aJQ(h.length)))) : aJI(s)
	}, this.aJS = function() {
		return aJD
	}, this.aJV = function(s) {
		var aJK = aJL(s);
		if (aJK)
			for (var a6 = new RegExp("^[0-9]+$"), fc = aJK.length, aC = 0; aC < fc; aC++) {
				var j = aJK[aC].substring(1),
					lt = j.length;
				1 <= lt && lt <= 3 && a6.test(j) && (lt = parseInt(j, 10), !isNaN(lt)) && 0 <= lt && lt < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[lt]))
			}
		return s
	}
}

function aGx() {
	var aJW, aJX = [],
		aJY = -1,
		aJZ = 0,
		aJa = 0;

	function aJf() {
		aJZ = bi.ec, (3 === this.xL ? aJe : (aJY = (aJX.length + aJY + 2 * this.xL - 1) % aJX.length, aJd))()
	}

	function aJd() {
		0 !== aJX.length && (aJa = 0, aJW && aJW.xO(), (aJW = new xI(aJf)).r1(aJY, aJX.length), aJW.show(aJX[aJY]), bq.message.resize())
	}

	function aJe() {
		aJa = 1, aJW && aJW.xO(), (aJW = new xP(aJd)).r1(aJX.length), aJW.show(), bq.message.resize()
	}
	this.aHj = function(aIJ) {
		var sc;
		2 === aIJ.id && 3 === aIJ.aIL ? bq.ln.aIX(aIJ.uu) : (sc = bq.ln.tn(aIJ, bq.ln.tp(aIJ)), (5 !== aIJ.id && 6 !== aIJ.id || (u.a8s(29).aJb().ts(sc), 5 === aIJ.id)) && (sc = bi.ec < aJZ + 2e4, aJY !== aJX.length - 1 && sc || (aJY = aJX
			.length), __fx.pingFilter.isMuted(aIJ, "s") || (aJX.push(aIJ), bm.buffer.data[14].value || 7 === aIJ.id || bt.play(), aJW && (aJa && (bm.buffer.data[13].value || sc) ? aJW.r1(aJX.length) : aJd()))))
	}, this.show = function() {
		aJe()
	}, this.ty = function() {
		aJY = aJX.length - 1, aJW && aJW.xO(), aJW = null
	}, this.resize = function() {
		aJW && aJW.resize()
	}, this.aIZ = function() {
		return aJX
	}
}

function aGv() {
	var aJg = null,
		aJh = null,
		aJi = 0,
		aJj = null;

	function aJl() {
		0 !== aJh.xE && (bq.xU.ty(), u.v(8, 29, new ux(25, {
			action: 0,
			uu: bI.f3.a2y(aJh.uu, 5),
			uv: 0
		}, 29)))
	}

	function aJr() {
		return !bq.aGl || bq.ln.xF(aJh) ? 1 : 0
	}

	function aJn() {
		return aJr() ? 1 : +bs.aJv(bI.f3.a2y(aJh.uu, 5))
	}

	function aJm(aJw) {
		aJn() || (bs.aJx(bI.f3.a2y(aJh.uu, 5), aJw), bq.xU.ty())
	}

	function aJp(wN) {
		return bq.sf.aHr(aJh.uu, wN)
	}

	function aJq(wN) {
		aJr() || (bq.sf.yg(aJh.uu, aJp(wN) ? 0 : wN), bq.xU.ty())
	}

	function aJt() {
		var on;
		return !aJr() && (on = bD.tg.a4R(aJh.username)) ? +(on === bD.tg.a4R(bq.aGl.aHE)) : 1
	}

	function aJs() {
		aJt() || (b1.aHn.aHo(2, aJh.uu), bq.xU.ty())
	}

	function aJo() {
		29 === u.uw && u.a4v().aGm(bI.f3.a2y(aJh.uu, 5))
	}
	this.aJk = function(e, sc) {
		var xW;
		aJi = 1, aJh = sc, aJg = new xQ([new x(L(139), aJl, 0 === sc.xE ? 1 : 0), new x(L(140), function() {
			aJm(1)
		}, aJn()), new x(L(141), function() {
			aJm(0)
		}, aJn()), new x(L(142), aJo, 0), new x(aJp(1) ? L(143) : L(144), function() {
			aJq(1)
		}, aJr()), new x(aJp(2) ? L(145) : L(146), function() {
			aJq(2)
		}, aJr()), new x(L(147), aJs, aJt())]), aJj = {
			clientX: e.clientX,
			clientY: e.clientY
		}, sc = aJj.clientX, e = aJj.clientY, xW = 1, aJg.show(sc, e, xW), bq.x2.show(aJg.fj, aJg.fl, aJh, 1)
	}, this.a5m = function(code) {
		if (29 !== u.uw) return !1;
		if (!aJh) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.ty();
			else if (bD.tg.startsWith(code, "Numpad") || bD.tg.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aJi) this.aJk(aJj, aJh);
				else {
					if (!aJg) return !1;
					code <= 1 ? aJl() : code <= 3 ? aJm(+(2 === code)) : 4 === code ? (aJo(), this.ty()) : code <= 6 ? aJq(5 === code ? 1 : 2) : aJs()
				}
		}
		return !0
	}, this.ty = function() {
		aJi = 0, aJg && aJg.ty(), aJg = null, bq.x2.ty()
	}
}

function aGz() {
	var aJy = [],
		v7 = [],
		aJz = [],
		aK0 = {},
		aK1 = {};

	function aK3(sc) {
		for (var s = sc.s, aK2 = [];;) {
			var em = function aK5(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var sA = s.substring(position + 1, position + 6);
				if (5 !== sA.length) return aK5(s, position + 1);
				var aKL = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aKL.test(sA)) return aK5(s, position + 1);
				aKL = s.substring(position + 6, position + 7);
				if (1 !== aKL.length) return position;
				sA = new RegExp("^[ :!.]+$");
				if (!sA.test(aKL)) return aK5(s, position + 1);
				return position
			}(s, 0);
			if (-1 === em) {
				aK2.push(aK6(s, sc));
				break
			}
			0 === em ? aK2.push(aK7(s.substring(1, 6), sc, em)) : (aK2.push(aK6(s.substring(0, em), sc)), aK2.push(aK7(s.substring(em + 1, em + 6), sc, em))), s = s.substring(em + 6)
		}
		return aK2
	}

	function aK7(sA, sc, em) {
		var sA = aK8(sA),
			tf = (0 === em && 0 === sc.aIJ.id && sc.tw && (sc.fontSize = bq.ln.aIR(sA.xE, sA.a7W), sc.aIP = bq.ln.aIS(sA.a7W)), document.createElement("span"));
		return tf.style.display = "inline-block", tf.style.cursor = "pointer", tf.style.margin = "0", tf.style.font = "inherit", tf.style.minWidth = tf.style.minHeight = "1em", tf.aK9 = {
			sc: sc,
			em: em
		}, aKA(tf, sA), v7.push(tf), (aK0[sA.uu] || (aK0[sA.uu] = [])).push(tf), tf
	}

	function aKA(tf, aH9) {
		var sc = tf.aK9.sc;
		tf.textContent = function(aH9, sc, em) {
				if (aH9.aKC) return aH9.aKC--, em = 2 === sc.aIJ.id || (3 === sc.aIJ.id || 4 === sc.aIJ.id) && 0 !== em, aH9.username + (em ? " (" + aH9.aHL + ")" : "");
				if (sc.aIJ.aIb) return "Redacted " + bI.f3.a2y(aH9.uu, 2);
				return aH9.username
			}(aH9, sc, tf.aK9.em), tf.style.color = bq.ln.xD(aH9.xE), tf.style.textShadow = 11 !== aH9.xE ? "none" : "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray", tf.style.textDecoration = bq.ln.xF(aH9) ?
			"underline" : "none", aH9.xG && (tf.style.textDecorationLine = "underline", tf.style.textDecorationStyle = "dotted"), tf.style.fontWeight = bq.ln.aIS(aH9.a7W) ? "bold" : "inherit", tf.onclick = function(e) {
				bq.xU.aJk(e, aH9)
			}, bM.t9() || (tf.onmouseover = function(e) {
				bq.x2.xH(e.target, aH9)
			})
	}

	function aK6(s, sc) {
		var tf = document.createElement("span");
		return tf.textContent = s, tf.style.color = sc.aIQ, tf.style.margin = "0", tf.style.font = "inherit", tf
	}

	function aK8(sA) {
		var uu = bJ.f3.f4(sA, 5),
			aH9 = bq.x4.aHc(uu);
		if (aH9) {
			for (aJy.push(aH9); 75 < aJy.length;) aJy.shift();
			return aH9
		}
		for (var aH2 = bq.x4.aH2, aC = aH2.length - 1; 0 <= aC; aC--)
			if (uu === (aH9 = aH2[aC]).uu) return aJy.push(aH9), aH9;
		for (aC = aJy.length - 1; 0 <= aC; aC--)
			if (uu === (aH9 = aJy[aC]).uu) return aJy.push(aH9), aH9;
		return aKE(uu, null)
	}

	function aKE(uu, name) {
		return aK1[uu] || (aK1[uu] = bq.x4.aHA(uu, name || "Player " + bI.f3.a2y(uu, 2), 1, 999999, 999999, 0, 0, 0, 0, 1))
	}

	function aKI(uu, name) {
		var aH9;
		name && !bq.x4.aHc(uu) && ((aH9 = function(uu) {
			for (var aH2 = bq.x4.aH2, aC = aH2.length - 1; 0 <= aC; aC--)
				if (uu === aH2[aC].uu) return aH2[aC];
			for (aC = aJy.length - 1; 0 <= aC; aC--)
				if (uu === aJy[aC].uu) return aJy[aC];
			return aK1[uu] || null
		}(uu)) ? aH9.username !== name && (aH9.username = aH9.aHE = name, bq.tx.aHD(uu)) : aKE(uu, name))
	}

	function aKP(aH9, aHK, uu) {
		uu === aH9.uu && (aH9.aHL || (aH9.aHL = aH9.username), aH9.username = aH9.aHE = aHK)
	}
	this.xO = function() {
		for (var aC = 0; aC < v7.length; aC++) v7[aC].onclick = v7[aC].onmouseover = null;
		aK1 = aK0 = aJz = v7 = null
	}, this.transform = function(sc) {
		for (var sQ = document.createElement("div"), aK2 = aK3(sc), aC = 0; aC < aK2.length; aC++) sQ.appendChild(aK2[aC]);
		0 === sc.aIJ.id && (sQ.vx143 = sc.aIJ, aJz.push(sQ)), sQ.style.margin = "0.6em 0.6em", sc.tw && (sQ.style.marginLeft = sQ.style.marginRight = "inherit"), sQ.style.font = "inherit";
		var aK4 = 0 < sc.aIJ.id;
		return sc.aIP && (sQ.style.fontWeight = "bold"), aK4 && (sQ.style.paddingLeft = "0.7em"), aK4 && (sQ.style.fontStyle = "italic"), sQ.style.fontSize = sc.fontSize.toFixed(2) + "em", sQ
	}, this.aHD = function(uu) {
		var h = aK0 && aK0[uu];
		if (h)
			for (var aH9 = aK8(bI.f3.a2y(uu, 5)), aC = h.length - 1; 0 <= aC; aC--) h[aC].parentNode ? aKA(h[aC], aH9) : h.splice(aC, 1)
	}, this.aKG = function(aKH) {
		!aKH || 4 < aKH.id || (aKI(aKH.uu, aKH.aKJ), aKH.aKK && aKI(aKH.target, aKH.aKK))
	}, this.aKO = function(aKH) {
		if (aKH && (2 === aKH.id && 1 === aKH.aIL || 3 === aKH.id && 2 === aKH.aIL)) {
			var uu = 3 === aKH.id ? aKH.target : aKH.uu;
			if (!bq.x4.aHc(uu)) {
				for (var aHK = (3 === aKH.id ? aKH.aKK : aKH.aKJ) || "Redacted " + bI.f3.a2y(uu, 2), aH2 = bq.x4.aH2, aC = aH2.length - 1; 0 <= aC; aC--) aKP(aH2[aC], aHK, uu);
				for (aC = aJy.length - 1; 0 <= aC; aC--) aKP(aJy[aC], aHK, uu);
				aK1[uu] && aKP(aK1[uu], aHK, uu), this.aHD(uu)
			}
		}
	}, this.aIX = function(uu) {
		for (var aKQ = aJz, aC = aKQ.length - 1; 0 <= aC; aC--) {
			var ff = aKQ[aC];
			if (ff.vx143.uu === uu) {
				for (; ff.firstChild;) u.removeChild(ff, ff.firstChild);
				ff.vx143.s = "[Redacted Message]";
				for (var aK2 = aK3(bq.ln.tn(ff.vx143, bq.ln.tp(ff.vx143))), fv = 0; fv < aK2.length; fv++) ff.appendChild(aK2[fv]);
				aKQ.splice(aC, 1)
			}
		}
	}
}

function cU() {
	var aKR, aKS, aKT;

	function aKY(aC) {
		var button = aZ.p4[aC],
			fj = button.fj,
			fl = button.fl,
			j = button.j,
			k = button.k;
		yJ.fillStyle = button.aKW, yJ.fillRect(fj, fl, j, k), aC === aKR && (yJ.fillStyle = aKT, yJ.fillRect(fj, fl, j, k)), yJ.lineWidth = bf.a2f, yJ.strokeStyle = aKS, yJ.strokeRect(fj, fl, j, k),
			function(button) {
				var fj = button.fj,
					fl = button.fl,
					j = button.j,
					k = button.k;
				bD.sF.textAlign(yJ, 1), bD.sF.textBaseline(yJ, 1), yJ.font = button.font, yJ.fillStyle = aKS, yJ.fillText(button.aIO, Math.floor(fj + j / 2), Math.floor(fl + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.fl = 0, this.gap = 0, this.dm = function() {
		aKR = -1, aKS = bE.pU, aKT = "rgba(255,255,255,0.16)", this.p4 = new Array(7), this.k = Math.floor((a1.a2.ip() ? .123 : .093) * i.iq), this.j = Math.floor((a1.a2.ip() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aKU = Math.floor(.26 * this.k),
			aKV = bD.sF.sI(1, aKU);
		this.p4[0] = {
			fj: 0,
			fl: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aIO: "Multiplayer",
			font: aKV,
			aKW: "rgba(22,88,22,0.8)",
			fontSize: aKU
		}, aKU = Math.floor(.18 * this.k), aKV = bD.sF.sI(1, aKU), this.p4[1] = {
			fj: 0,
			fl: 0,
			j: this.j - this.p4[0].j - this.gap,
			k: this.k,
			aIO: "Single Player",
			font: aKV,
			aKW: "rgba(22,88,88,0.8)",
			fontSize: aKU
		}, this.p4[2] = {
			fj: 0,
			fl: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aIO: "",
			font: this.p4[1].font,
			aKW: "rgba(100,0,0,0.8)",
			fontSize: this.p4[1].fontSize
		}, this.p4[3] = {
			fj: 0,
			fl: 0,
			j: this.j,
			k: this.k,
			aIO: "Back",
			font: this.p4[0].font,
			aKW: "rgba(0,0,0,0.8)",
			fontSize: this.p4[0].fontSize
		}, this.p4[4] = {
			fj: 0,
			fl: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aIO: "The game was updated!",
			font: this.p4[1].font,
			aKW: "rgba(100,0,0,0.8)",
			fontSize: this.p4[1].fontSize
		}, this.p4[5] = {
			fj: 0,
			fl: 0,
			j: this.p4[0].j,
			k: Math.floor(.8 * this.k),
			aIO: "Reload",
			font: this.p4[0].font,
			aKW: "rgba(0,100,0,0.8)",
			fontSize: this.p4[0].fontSize
		}, this.p4[6] = {
			fj: 0,
			fl: 0,
			j: this.p4[1].j,
			k: this.p4[5].k,
			aIO: "Back",
			font: this.p4[0].font,
			aKW: "rgba(0,0,0,0.8)",
			fontSize: this.p4[0].fontSize
		}, this.aDW()
	}, this.aDW = function() {
		this.fl = Math.floor(.54 * i.k), this.p4[0].fj = Math.floor(.5 * i.j - .5 * this.j), this.p4[1].fj = this.p4[0].fj + this.p4[0].j + this.gap, this.p4[2].fj = this.p4[3].fj = this.p4[0].fj, this.p4[4].fj = this.p4[5].fj = this.p4[0].fj,
			this.p4[6].fj = this.p4[1].fj, this.p4[0].fl = Math.floor(.54 * i.k), this.p4[1].fl = this.p4[0].fl, this.p4[2].fl = Math.floor((i.k - this.p4[2].k - this.p4[3].k - this.gap) / 2), this.p4[3].fl = this.p4[2].fl + this.p4[2].k + this
			.gap, this.p4[4].fl = Math.floor((i.k - this.p4[4].k - this.p4[5].k - this.gap) / 2), this.p4[5].fl = this.p4[6].fl = this.p4[4].fl + this.p4[4].k + this.gap
	}, this.aKX = function() {
		aKY(0), aKY(1)
	}, this.aKZ = function() {
		aKY(2), aKY(3)
	}, this.aKa = function() {
		aKY(4), aKY(5), aKY(6)
	}, this.a5E = function(fj, fl, nM) {
		var aC = -1;
		return 0 === ab.a4r() ? aC = this.a5i(fj, fl, 0, 2) : 3 === ab.a4r() ? aC = this.a5i(fj, fl, 3, 1) : 5 === ab.a4r() && (aC = this.a5i(fj, fl, 5, 2)), aKR !== aC && (aKR = aC, nM) && (bi.du = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a5i = function(fj, fl, aKb, size) {
		for (var aC = aKb; aC < aKb + size; aC++)
			if (fj >= this.p4[aC].fj && fl >= this.p4[aC].fl && fj <= this.p4[aC].fj + this.p4[aC].j && fl <= this.p4[aC].fl + this.p4[aC].k) return aC;
		return -1
	}
}

function cV() {
	var aKd, aKe, aB8, aKf, aKg, aKh, aKi, aKj, aKk, aB7, aKl, aKm, aKn, aKo = 1,
		aKq = 0;

	function aKt(aKu) {
		aKu ? aKn = (aKn + 1) % b1.z.aKv : (b1.z.close(aKn, 3280), aKo ? aKo = 0 : (aKn = (aKn + 1) % b1.z.aKv, b1.z.close(aKn, 3280))), aKm = bi.ec, aa.aKs = aKq, b1.z.aKw(aKn, 4, 1) && b1.aHn.aKx(aKn)
	}

	function aKy() {
		if (0 !== aKn) return 1 === aKn && __fx.customLobby.isActive() ? (p.a53(3249), __fx.customLobby.setActive(!1)) : void aKt();
		p.a53(3249)
	}

	function aL3(fl, aDE, vk) {
		var o1 = Math.floor((i.j - aKf) / 2) + aKi,
			oE = o1 + Math.floor(vk * (aKf - 2 * aKi));
		yJ.lineWidth = aDE, yJ.beginPath(), yJ.moveTo(o1, fl), yJ.lineTo(oE, fl), yJ.lineTo(Math.floor(o1 - aKi + vk * aKf), fl + aB8), yJ.lineTo(o1 - aKi, fl + aB8), yJ.closePath()
	}
	this.f5 = 1, this.aKr = 0, this.aKs = 0, this.dm = function() {
		bX.turnstile.f1(), ab.setState(6), aKd = 0, aKe = 1, aKj = "rgba(0,220,120,0.4)", aKk = "rgba(0,0,0,0.8)", this.resize(), bi.du = !0, aKo = 1, aKn = this.f5 - 1, aKq = 0, aKt(1)
	}, this.resize = function() {
		aKf = Math.floor((a1.a2.ip() ? .5 : .25) * i.iq), aKg = aKf + 12, aB8 = Math.floor(.125 * aKf), aKi = 3 * aB8, aKh = Math.floor(.225 * aKf), aKl = Math.floor(.3 * aB8), aB7 = bD.sF.sI(0, aKl)
	}, this.a4y = function(oT) {
		oT === aKn && aKy()
	}, this.hq = function(fj, fl) {
		var o1 = Math.floor((i.j - aKg) / 2),
			o2 = Math.floor(.5 * (i.k - bf.gap - aB8 - aKh)) + aB8 + bf.gap;
		return o1 < fj && fj < o1 + aKg && o2 < fl && fl < o2 + aKh && (this.a5t(), aZ.a5E(fj, fl, !1), !0)
	}, this.a5t = function() {
		b1.z.a54(3260), __fx.customLobby.setActive(false), u.z.a0()
	}, this.eh = function() {
		6 === ab.a4r() && (bi.ec > aKm + 12e3 && aKy(), 100 < (aKd += .07 * aKe * (aKd < 16 ? 5 + aKd : 84 < aKd ? 105 - aKd : 17)) ? (aKd = 100, aKe = -1) : aKd < 0 && (aKd = 0, aKe = 1), aKj = "rgba(0," + Math.floor(190 - 1.9 * aKd) + "," +
			Math.floor(120 - 1.2 * aKd) + "," + (.4 + .004 * aKd) + ")", aKk = "rgba(0," + Math.floor(1.9 * aKd) + "," + Math.floor(1.2 * aKd) + "," + (.8 - .004 * aKd) + ")", bi.du = !0)
	}, this.yI = function() {
		var fj = Math.floor((i.j - aKg) / 2),
			fl = Math.floor(.5 * (i.k - bf.gap - aB8 - aKh));
		! function(title, fl, aDE, vk) {
			yJ.fillStyle = aKk, aL3(fl, aDE, 1), yJ.fill(), yJ.fillStyle = aKj, aL3(fl, aDE, vk), yJ.fill(), yJ.strokeStyle = bE.pU, __fx.settings.smoothUI && (yJ.strokeStyle = "rgba(255, 255, 255, 0.3)", yJ.lineJoin = "round"), aL3(fl, aDE, 1),
				yJ.stroke(), yJ.lineJoin = "miter",
				function(aL5, fl) {
					bD.sF.textAlign(yJ, 1), bD.sF.textBaseline(yJ, 1), yJ.font = aB7, yJ.fillStyle = bE.pU, yJ.fillText(aL5, Math.floor(.5 * i.j), Math.floor(fl + .58 * aB8))
				}(title, fl)
		}(L(148), fl, 3, aKd / 100),
		function(fj, fl, j, k, aIO) {
			yJ.fillStyle = bE.pP, yJ.beginPath(), __fx.settings.smoothUI && yJ.roundRect ? yJ.roundRect(fj, fl, j, k, .1 * k) : yJ.rect(fj, fl, j, k), yJ.fill(), yJ.lineWidth = 3, yJ.strokeStyle = __fx.settings.smoothUI ?
				"rgba(255, 255, 255, 0.3)" : bE.pU, yJ.stroke();
			var fc = Math.floor(.3 * k);
			bD.sF.textAlign(yJ, 1), bD.sF.textBaseline(yJ, 1), yJ.font = bD.sF.sI(0, fc), yJ.fillStyle = bE.pU, yJ.fillText(aIO, Math.floor(fj + j / 2), Math.floor(fl + k / 2 + .1 * fc))
		}(fj, fl + aB8 + bf.gap, aKg, aKh, L(42))
	}
}

function cW() {
	var a4l = 0;
	this.dm = function() {
		aZ.dm(), a4l = 0
	}, this.setState = function(aL6) {
		a4l = aL6
	}, this.a4r = function() {
		return a4l
	}, this.aL7 = function() {
		this.setState(8), u.y()
	}, this.a5m = function(e) {
		if (!bV.a0C) return !1;
		if (!(bi.ec < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aL8()) return !0;
				if ("Enter" === e.key) {
					if (0 === a4l) return !0;
					if (7 === a4l) return !0
				}
			}
			return !1
		}
	}, this.aL9 = function() {
		bc.resize()
	}, this.aL8 = function() {
		return !!bc.ty()
	}, this.hq = function(fj, fl) {
		!bV.a0C || bc.hq(fj, fl) || 6 === a4l && aa.hq(fj, fl) || bb.hq(fj, fl) || aU.hq(fj, fl)
	}, this.a5E = function(fj, fl) {
		!aU.aDP && aZ.a5E(fj, fl, !0) || aU.a5E(fj, fl)
	}, this.click = function(fj, fl) {
		aU.a5d()
	}, this.a5H = function(fj, fl, deltaY) {}, this.aLA = function() {
		aZ.aDW(), bi.du = !0
	}, this.yI = function() {
		8 !== a4l && 10 !== a4l && (yJ.imageSmoothingEnabled = !0, this.a1l(), 0 !== a4l && (aU.yI(), aP.yI(), this.aLB(), bb.yI()), 0 !== a4l && 6 === a4l && aa.yI(), bc.yI(), u.yI())
	}, this.a1l = function() {
		var aLD, aLC;
		if (__fx.makeMainMenuTransparent) yJ.clearRect(0, 0, i.j, i.k);
		else bV.a0C ? (aLC = i.j / bV.fn, aLD = i.k / bV.fo, yJ.setTransform(aLC = aLD < aLC ? aLC : aLD, 0, 0, aLC, Math.floor((i.j - aLC * bV.fn) / 2), Math.floor((i.k - aLC * bV.fo) / 2)), yJ.drawImage(bV.a0E, 0, 0), yJ.setTransform(1, 0, 0,
			1, 0, 0), yJ.fillStyle = bE.pP) : yJ.fillStyle = bE.pL, yJ.fillRect(0, 0, i.j, i.k)
	}, this.aLB = function() {
		var fl = Math.floor(.3 * i.k),
			canvas = ac.wW("territorial.io"),
			ig = (ig = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : ig,
			fj = (yJ.globalAlpha = .15, yJ.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - ig * canvas.width))),
			fj = Math.floor(fj / ig),
			fl = Math.floor(fl - .5 * canvas.height * ig),
			fl = Math.floor(fl / ig);
		yJ.setTransform(ig, 0, 0, ig, fj, fl), yJ.drawImage(canvas, fj, fl), yJ.setTransform(1, 0, 0, 1, 0, 0), yJ.globalAlpha = 1, yJ.imageSmoothingEnabled = !0
	}
}

function cw() {
	this.aI9 = 0;
	var aLF, aLG, aLH, aLI, aLJ, aLK = this.aLE = 0;

	function sN() {
		aLI = aLJ = null, aLK = 0
	}
	this.dm = function(aGo, aI1, aI3) {
		u.y(), bq.xO(), ab.setState(10), aLI = aGo, aLJ = aI1, aLK = aI3, this.aI9 = aGo.aI9, this.aLE = aI3, aLF = 0, aLG = bi.ec + 4500, b1.z.a4z = aGo.a4z, 1 === aI1.length ? (b1.z.close(b1.z.fA, 3281), aLH = 0) : b1.z.fA === aGo.a4z ? (
			console.log("direct pass"), aLH = 0) : (console.log("delayed pass"), b1.z.close(b1.z.fA, 3247), aLH = 2, b1.z.aKw(aGo.a4z, 5, 2) && b1.qy.aLL()), yJ.imageSmoothingEnabled = !0, ab.a1l();
		aI3 = ac.wW("loading"), aI1 = (a1.a2.ip() ? .396 : .25) * i.iq / aI3.width;
		yJ.setTransform(aI1, 0, 0, aI1, Math.floor((i.j - aI1 * aI3.width) / 2), Math.floor((i.k - aI1 * aI3.height) / 2)), yJ.imageSmoothingEnabled = !1, yJ.drawImage(aI3, 0, 0), yJ.setTransform(1, 0, 0, 1, 0, 0)
	}, this.nK = function() {
		0 < aLH && bi.ec > aLG && (aLH--, aLG += 4500, 0 === bi.aLM) && 0 === bi.kv() && b1.z.aKw(b1.z.a4z, 5, 2)
	}, this.aLN = function() {
		return 10 === ab.a4r() && (bq.aGo.aIC(aLI, aLJ, aLK), sN(), !0)
	}, this.aLO = function() {
		10 === ab.a4r() && 2 <= ++aLF && (bq.aGo.aIC(aLI, aLJ, aLK), sN())
	}
}

function cX() {
	var aLQ, canvas, a42, aLR;

	function aLX(eL, name, aLY, sA) {
		a42[eL] = name, canvas[eL] = new Image, canvas[eL].onload = function() {
			! function(eL, aLY) {
				var a7b, a7c = null;
				7 === aLY ? a7b = bD.ox.a7e : 9 === aLY ? a7b = bD.ox.a7f : 8 === aLY ? (a7b = bD.ox.a7i, a7c = .1) : 3 === aLY ? (a7b = bD.ox.a7g, a7c = .06) : 5 === aLY ? a7b = bD.ox.a7j : 6 === aLY ? a7b = bD.ox.a7d : 4 === aLY && (a7b = bD.ox
					.a7k);
				canvas[eL] = bD.ox.a7a(canvas[eL], a7b, a7c)
			}(eL, aLY), aLa()
		}, canvas[eL].onerror = function(e) {
			console.error("Error loading image at index", eL, "Error:", e), aLa()
		}, canvas[eL].src = "data:image/png;base64," + sA
	}

	function aLa() {
		aLQ--, aLU()
	}

	function aLU() {
		0 === aLQ && (aLQ = -1, aLW(), bi.du = !0, canvas[7] = aLR, canvas[8] = aLR, canvas[9] = aLR, canvas[10] = aLR, 5 === u.uw) && u.a4v().aLc.resize()
	}

	function aLW() {
		aM.a93(), bb.aGe([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.a0H = new a2C, ak.a0H.dm(), ax.dn()
	}
	this.dm = function() {
		if (void 0 === canvas) {
			aLQ = 29, canvas = new Array(aLQ), a42 = new Array(aLQ), (aLR = document.createElement("canvas")).width = 1;
			for (var aC = aLQ - (aLR.height = 1); 0 <= aC; aC--) canvas[aC] = aLR;
			aLW(), aLX(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aLX(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aLX(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLX(3, "orders", 6,
					"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"
					), aLX(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aLX(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aLX(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2jdGjR2dnAFBPLrjgghgzZkx2BtAIJk6cGMcdd1x2BgAADaCqqiqOPvromD9/fnYKFK0XXnghjjrqqOwMAICCMnz48Fi5cmV2BgAAAAAAAACkM9wDAAAAAAAAAECzMXDgwOwEarBw4cIYMmRIdgYbYOTIkTF37tzsDOrg6KOPjj322CM7A4B6Mnjw4Bg3blx2BtCAHn/88Tj00EOzMwAAaEBz586NPn36xIoVK7JToOgsWLAgfvzjH8eqVauyUwAACsrs2bPj3nvvzc4AAAAAAAAAgHSGewAAAAAAAAAAaBZOP/302G233bIzqMHvfvc7BxI2UdXV1XHttddmZ1AHrVq1ilGjRmVnAFCPfv3rX/v3GJqpKVOmxMEHHxzV1dXZKQAANLBHHnkkBgwYEFVVVdkpUDRWrlwZffr0iVdffTU7BQCgIA0cODDef//97AwAAAAAAAAASGW4BwAAAAAAAACAJq+0tDTOOOOM7Axq8O6770ZFRUV2Bhth7Nix8dprr2VnUAe9evWKnj17ZmcAUI9OO+20+N3vfpedAdSjKVOmxEEHHRRr1qzJTgEAoJFcf/31MXbs2OwMKApr166NX/3qVzFx4sTsFACAgrVgwYL4zW9+k50BAAAAAAAAAKkM9wAAAAAAAAAA0OQNHDgwOnXqlJ1BDa6++uqoqqrKzmAjXXXVVdkJ1EFZWVkMHTo0OwOAenbyyScb74FmwmgPAEDxGjx4cNx8883ZGdCsrVu3LoYNGxbjx4/PTgEAKHhjxoyJmTNnZmcAAAAAAAAAQBrDPQAAAAAAAAAANGllZWXRt2/f7AxqMHfu3Bg7dmx2BvXg8ssvj9mzZ2dnUAf77bdfHHvssdkZANSzk08+OW644YbsDGAjGO0BAODnP/95PPTQQ9kZ0GxdeumlMXr06OwMAIAmY+DAgfHJJ59kZwAAAAAAAABACsM9AAAAAAAAAAA0aSNHjowddtghO4MajBs3Lqqrq7MzqCfjxo3LTqCOzj333OwEABrAKaec4t9laKIeffRRoz0AAERExBFHHBFPP/10dgY0O9ddd12cffbZ2RkAAE3KpEmT4pprrsnOAAAAAAAAAIAUhnsAAAAAAAAAAGiyysvLo3fv3tkZ1GDOnDkOlG9mrr/++pg5c2Z2BnWw++67x4ABA7IzAGgAv/71r2Ps2LGxbt267BSglu655544+OCDjfYAABAREVVVVXHIIYfEc889l50Czcbvfve7OPXUU7MzAACapAEDBsTzzz+fnQEAAAAAAAAAjc5wDwAAAAAAAAAATdaIESOiffv22RnU4LLLLstOoAFceuml2QnUUf/+/aOsrCw7A4AGcO6558b5558fVVVV2SnAF/j9738fP/7xj6O6ujo7BQCAArJs2bL43ve+Fy+++GJ2CjR5t9xyS5x88snZGQAATVZ1dXWceuqpsXz58uwUAAAAAAAAAGhUhnsAAAAAAAAAAGiS2rVrFyeccEJ2BjWYOXNmXHfdddkZNIBbb701pk+fnp1BHey0005RWVmZnQFAA7ngggvi9NNPj1WrVmWnAOtRXV0dF154YfTp0yc7BQCAArV06VLjPbCRbrrppjjxxBOzMwAAmrxnn302hg8fnp0BAAAAAAAAAI3KcA8AAAAAAAAAAE3S6NGjo23bttkZ1ODiiy/OTqABXXzxxbFu3brsDOrglFNOiXbt2mVnANBArrnmmvj5z38eS5cuzU4BPuWTTz6Js846KwYNGpSdAgBAgVuwYIHxHthAN9xwQ5x00knZGQAAzcYll1wS//3f/52dAQAAAAAAAACNxnAPAAAAAAAAAABNTufOneOYY47JzqAG06dPj9tuuy07gwZ09913x9NPP52dQR1stdVWMXr06OwMABrQnXfeGYcddli8++672SlARHz44Ydx0kknxWWXXZadAgBAE/H/H+95/vnns1OgSVi3bl1cdNFFccopp2SnAAA0O8cff3w8++yz2RkAAAAAAAAA0CgM9wAAAAAAAAAA0OQMGzYs2rRpk53Beqxbty5GjRqVnUEjGDt2bFRXV2dnUAc//elPY9ddd83OAKABPfXUU3HAAQfE7Nmzs1OgqL3zzjvxwx/+MG6//fbsFAAAmpgFCxbEAQccEM8880x2ChS0Tz75JM4555w455xzslMAAJqlqqqqOPLII2Pu3LnZKQAAAAAAAADQ4Az3AAAAAAAAAADQpHTp0iWOPPLI7Axq8NRTT8Uf/vCH7AwawcMPPxyTJ0/OzqAOWrdubVgLoAi8/vrr0a1bt5g0aVJ2ChSlv/3tb9GjR4946qmnslMAAGiili1bFj169IjHHnssOwUK0vLly+PUU0+Niy++ODsFAKBZmzdvXhx99NHx/vvvZ6cAAAAAAAAAQIMy3AMAAAAAAAAAQJNSWVkZLVu2zM5gPaqrq6OysjI7g0Y0ZsyYqKqqys6gDg499NDo0aNHdgYADWzZsmXxve99L6655ppYt25ddg4Ujfvuuy+6desW77zzTnYKAABN3Jo1a6JXr15x5513ZqdAQXn//ffjmGOOiRtvvDE7BQCgKDz33HNx7LHHxgcffJCdAgAAAAAAAAANxnAPAAAAAAAAAABNRvfu3aNXr17ZGdRg0qRJMWnSpOwMGtHjjz8ejz32WHYGdbDJJpvE8OHDszMAaCT/9V//Fb/+9a9j5cqV2SnQrH3yyScxcuTIOPLII2PNmjXZOQAANBPV1dXxk5/8JH7zm98YZYWImDNnTnz/+9+PiRMnZqcAABSVSZMmRZ8+feKjjz7KTgEAAAAAAACABmG4BwAAAAAAAACAJmPw4MHRokWL7AzWY+3atVFZWZmdQYLKykqHkzcxPXr0iKOOOio7A4BGcvnll8cRRxwRf//737NToFlatGhR/OxnP4uhQ4dmpwAA0EydeeaZMWDAgFi1alV2CqR55JFH4t///d/j+eefz04BAChK999/f5x44onxwQcfZKcAAAAAAAAAQL0z3AMAAAAAAAAAQJPQs2fP6NmzZ3YGNfjjH/8YU6dOzc4gwbRp02LixInZGdRBSUlJDB48ODsDgEb02GOPxb777ht//vOfs1OgWXnuuefiO9/5Ttx9993ZKQAANHPjxo2LY489NhYtWpSdAo2qqqoqLr/88ujVq1csW7YsOwcAoKjdf//9ccwxx8R7772XnQIAAAAAAAAA9cpwDwAAAAAAAAAATUJFRUWUlrrdpRCtXr06RowYkZ1BohEjRsTq1auzM6iDPffcM/r27ZudAUAjmj9/fhxwwAFxxRVXRFVVVXYONGnV1dUxfvz4+Pd///d49dVXs3MAACgS999/fxxwwAHx4osvZqdAo/jwww+jb9++8atf/So7BQCA/zVp0qQ4+OCDY+7cudkpAAAAAAAAAFBvnGQCAAAAAAAAAEDBO+qoo2K//fbLzqAGDz74YMyYMSM7g0QzZsyIBx98MDuDOjrzzDOjrKwsOwOARta/f//42c9+FgsXLsxOgSbp/fffj1/84hfxi1/8Iqqrq7NzAAAoMrNnz47/9//+n5/H0uzNmjUrvvvd78Z1112XnQIAwGfMmDEjunfvHtOnT89OAQAAAAAAAIB6YbgHAAAAAAAAAICCN3DgwCgpKcnOYD1WrlwZ559/fnYGBWDo0KGxcuXK7AzqoGPHjjF06NDsDAAS3HHHHfHtb387/vznP2enQJMybdq06N69e/zud7/LTgEAoIitWrUqDj/88BgyZEisWrUqOwfqVXV1dfz+97+Prl27xvPPP5+dAwBADebPnx/77bdfTJgwITsFAAAAAAAAADaa4R4AAAAAAAAAAAraCSecEF27ds3OoAZ33313vP7669kZFIA5c+bEfffdl51BHf3yl7+M8vLy7AwAErzzzjtxwAEHxJgxYxz0DF9g9erVcfHFF0f37t3j1Vdfzc4BAICIiBg1alQcdthh8c4772SnQL1YvHhxnHLKKdGnT5+oqqrKzgEA4AtUVVXF8ccfH2eeeWYsW7YsOwcAAAAAAAAANpjhHgAAAAAAAAAACtrAgQOzE6jB8uXLY/DgwdkZFJAhQ4bE8uXLszOog3bt2sXYsWOzMwBIdP7558fBBx8cs2fPzk6BgjRnzpzo1auX700BAChIjz32WHzzm9+MBx98MDsFNsoTTzwR++67b/z+97/PTgEAoI5+85vfxAEHHBDPP/98dgoAAAAAAAAAbBDDPQAAAAAAAAAAFKzTTz89dtttt+wManDrrbfGvHnzsjMoIHPnzo0777wzO4M6Ou6446Jz587ZGQAkmjx5cnzjG9+Ia6+9NtauXZudAwVh7dq1cf3118cee+wRkydPzs4BAIAaLV26NA4//PAYMGBAfPjhh9k5UCcffPBBnHXWWdGzZ894/fXXs3MAANhAzz//fOyzzz5x9dVX+10TAAAAAAAAAE2O4R4AAAAAAAAAAApSaWlpnHHGGdkZ1OCDDz6IoUOHZmdQgAYPHhxLly7NzqAO2rRpE5WVldkZACSrqqqK0047LY444oh47bXXsnMg1Zw5c+Kwww6LX/7yl1FVVZWdAwAAtXLZZZfFfvvtF3/5y1+yU6BWnnjiifj2t78dl156aXYKAAD1oLq6Ovr16xe9evWKWbNmZecAAAAAAAAAQK0Z7gEAAAAAAAAAoCANHDgwOnXqlJ1BDW666aZYtGhRdgYFaMGCBXH77bdnZ1BHRxxxROy7777ZGQAUgIcffjh22223uPrqq2P16tXZOdCoVq1aFVdccUXsscceMXHixOwcAACos9mzZ8d+++0XFRUV8dFHH2XnwHq99957MWDAgOjZs2e8/vrr2TkAANSzxx9/PPbaa68YPnx4fPjhh9k5AAAAAAAAAPCFDPcAAAAAAAAAAFBwysrKom/fvtkZ1GDhwoUxbNiw7AwK2Pnnnx+LFy/OzqAOWrRoEcOHD8/OAKBAVFVVRb9+/eJ73/tezJw5MzsHGsUzzzwTPXv2jP79+0dVVVV2DgAAbJTKysrYb7/94sknn8xOgX9au3Zt3HbbbbH77rvHZZddlp0DAEADGz58eHzrW9+Ke+65J9asWZOdAwAAAAAAAAA1MtwDAAAAAAAAAEDBGTlyZOywww7ZGdTg97//fSxbtiw7gwK2dOnSuOWWW7IzqKMDDzwwDjvssOwMAArIU089FXvvvXdUVFTEkiVLsnOgQbz33ntx1llnxb777hvTpk3LzgEAgHrz4osvxoEHHhinn356LFiwIDuHIjdjxozo1atX/OxnP4vFixdn5wAA0EjefPPN+PGPfxw9evSIxx57LKqrq7OTAAAAAAAAAOD/MNwDAAAAAAAAAEBBKS8vj969e2dnUIN33303hgwZkp1BE3DeeefFwoULszOog5KSkhg8eHB2BgAFqLKyMvbcc8+46667oqqqKjsH6sWaNWtiwoQJsccee8Sll16anQMAAA3mqquuit122y1+//vfxyeffJKdQ5GZP39+DBo0KLp27RqPP/54dg4AAEmeeeaZ+P73vx+HHXZYTJkyxYAPAAAAAAAAAAXFcA8AAAAAAAAAAAVlxIgR0b59++wMavDb3/7WYe3UyqpVq+LGG2/MzqCOvvWtb8XJJ5+cnQFAAZo/f34cc8wx8cMf/jBmzJiRnQMbZerUqXHggQfG8ccfH4sWLcrOAQCABrd06dLo06dPfPe7342pU6dm51AEli5dGpdeeml07tw5LrzwwuwcAAAKxMMPPxz7779/fPe7342HHnrIuCgAAAAAAAAABcFwDwAAAAAAAAAABaNdu3ZxwgknZGdQg7lz58YFF1yQnUETMnjw4Hj33XezM6ijc845J0pL3V4IwPpNnDgxunbtGqeffnq888472TlQJ6+99lqcfPLJ0aNHD4eVAwBQlKZNmxY9evSIn/3sZzFnzpzsHJqhVatWxc033xxdunSJs846K1atWpWdBABAAZoyZUr88Ic/jK5du8ZNN90U77//fnYSAAAAAAAAAEXMM+sBAAAAAAAAACgYo0eP/v+1d7+xVdZ3H8e/lH/lXynyR0qIg9IBxREKI0NhcwQnGsxmdInzwRxOnTP4ZBuJ0WWOEBY3DIpmGhCcLhIwmVnGpixTt2kIgjABp4XBWkFrQRhtaWsLBfrnfnLH3N6Zu2X38Nf293o9O9dJzvXJyXlwnZyT6x3FxcWpZ/AxHnnkkejs7Ew9gx6ko6Mj1q9fn3oG52nSpEnxwx/+MPUMALq5xx57LCZNmhSrVq2KkydPpp4D/9KxY8fiRz/6UZSXl8eTTz6Zeg4AACS3adOmmDZtWtxzzz3x3nvvpZ5DL3DmzJl49tln4wtf+ELccsstcfTo0dSTAADoASorK+Pb3/52lJSUxNKlS+O1116Ljo6O1LMAAAAAAAAAyIxwDwAAAAAAAAAA3UJZWVncdNNNqWfwMQ4ePBiPPPJI6hn0QD/5yU/inXfeST2D87RkyZIYMmRI6hkAdHMdHR1x9913x9SpU2PdunXR0tKSehJ8RH19fTz88MNRWloa999/vxApAAD8Lw888ECUlpbG8uXL49ixY6nn0AOdOnUqNm7cGDNnzoxvfOMbUVlZmXoSAAA9UEdHR6xevTrmzp0bc+bMibVr10ZVVVXqWQAAAAAAAABkQrgHAAAAAAAAAIBuYfny5SIR3djq1atTT6CH6uzsjLVr16aewXkaO3Zs3H///alnANBDnDhxIu6888743Oc+Fxs3boxTp06lnkTmGhsbY82aNTF16tT4wQ9+EG1tbaknAQBAt9XR0RHLly+P0tLSWLFiRdTW1qaeRA/Q3NwcTz31VFRUVMTNN98cBw4cSD0JAIBeYs+ePbFkyZKYMmVKXHHFFbF+/fo4dOhQ6lkAAAAAAAAA9GLCPQAAAAAAAAAAJDd9+vS44YYbUs/gY/z1r3+NdevWpZ5BD/bAAw9EVVVV6hmcp8WLF8f48eNTzwCgB6mpqYmbb745KioqYsOGDdHS0pJ6EplpaGiINWvWxJQpU+Kuu+6K+vr61JMAAKDHaGtri2XLlsWECRPi3nvvjerq6tST6IZqampi5cqVMWnSpLjtttt8TgAAuKC2bdsW3/3ud6OsrCxmz54dK1eujB07dsSpU6dSTwMAAAAAAACgFxHuAQAAAAAAAAAguRUrVsTAgQNTz+BjrFq1KvUEeoFHH3009QTOU1FRUfzsZz9LPQOAHqi6ujoWL14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aLX(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLX(8,
					"googleplay", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAQ4AAABQCAMAAADfnGukAAAASFBMVEUAAABZFxMoKidGSEWjLiQeaDJwVQAuZLfsQTFkZ2TMTltEhfM3krZ/gX4yqFSNj4ykpqOQw44D/hN02Xr2uwC+wL3e4N3///8++cywAAAGlElEQVR42u2ci3biKhSGEVqnOIOhpwHe/00Plw1sEshVm66avdaMVgnKl335IRHyH9jXaxtQIIGFfHn7zDg+pewYfWFj3AL5AhwWBiWvbsw7CHG+wclphDr/IDZvdCcL4GFxSHmSiPHySb7OUElmPeNTnmk0Gnc4Tgw5Wk4cJ44Tx4njsTjonopDpTZGiZCvVTBC4YkKuo/ax/ieStWeK2M0VLsOWtpjj8VB3+/W3rcS4dpo5cbF7B/CBCMMnpgwOmYf43tGwJH2IKU0/G3/cB0Qe+yhOOgd7H1bt0bzcHaJxyHyWyoMMOIYDlYZ7xgWJw849E/Acc+2BYjOY16HQ8BLhBpDPRx/7ME43u/3PUC4KfpcgUObGJ7SuYcy1L9yMI5/95LHyhTih4JxSGaNzuOgITbSmxYHd48H4/gz4LHSQcKQIXGmVCrmccRXMg7m/x2N4++QxyogwTt8WQ04lLDGtngHc2nZPh6MY8zjTrfkDje+PbnDNu5MdzyOCo/lDpIqi3Bg9lQW5nvTx+Oo8FgMJOoOYTTdqjtEasyN+QE4ajyWAkmqlGJVugDHUJUyeO0H4KjyWJhCqnOWIFRTB7Q6IwlzFoYb04PnLICjzuOd/FqbwVHn8XuBzOFo8LhfXxRHnUff9/Q1cdR49M6ur4ljzKMHu74kjiGPPtv1FXGUPHps1+kUQpmdunH2y3BgHv3AJhzECapgci8RlmbENegiWzw97vnTcGQe/djaOh2Z2leJBFpcrsyQkGkGwn+LsF+KI/Ko0Gj4hzSlafY9OExYXHgyjsCjr1p9QcwzkM5pFbqY8A04PI9n43A86jRq7uEJaJHmcztpzONQzFuIUPYNOP7+6xfjEMN0wXdOSedx4BOhvgPH7WMpDro7OLbjYAHE03HcPj4aPGgtjWp6DA6ifbQ8G4ejUecxjhUz9eWfjUN9B45Ao8qjnunJnDxT6NIU7bTJa2ChkXexjnCvpzIO5pbZTHF739g7aMYRPkz7+4ixTmM1obYUR6RR4VE/le3MwZI8S/HUlZrBLwfGNjpduRKFnFENHG6dWafckfrxa9m6vFPAyI04Mo0hj2tDc4iaghbwdZOxkWILw6KFokU41LDlEAcHqIAD98MjqpTt2TYcmEbBoy5ICxysHD4NQxE+OoJ/BN+QwkdBGBc4OAi4jKOD1z3ADn+E9rg7FXsNh0ncjw50eHJIvS13lDQyj9bsbQqHSnqdw+Bp1igSTplIuThEVsRBUzz5XmlDlfKsSuF6TeiHozDOYNbiGNKIPJqVVOKwLHFgH+VhSBKdJwhoFOMc4+jiaJjEiYZVJkcplVqHdDcPcN+eRoq86hxLcIxpeB7X6aqoR7nD6wGBSSl/hvB58l/X/69xoYg4Qg1Nc+UajjgxiDgoRKUMJCUEmaoX7nkcNRofH5PLYIUnFwXQfx1eiomiKntmHDPrEA7fb0gxUDqHc5ZC+hRlLEemJtlL1uKo0nibUTO6UsRC+lc4n1dwqOhCAjfCTWFkbd2BcZRhpJJHilqVXYCjRuPtskRDDquY8m6qZrxDjbyjhmPwo4I2Dp+4nfJiECw+aSgQ8qtx1GhcFohdPZq0QN5s5A5W5A6Gc4ca5A64N2AZjhwTqY1P0y2dOI3jtg0GOCn+3rES4LTCcmVRqJkqqiAbVpbIqWPzONAbKj7lqBqvw3FbnTQIKWS3YnjZVJd+47OcggHLDI1DsPEsT8e6w70gV3iHNIXiqFbZGRy39UljvFQa7g/LMxQGEhQEJyVZOnZZlYZnQsiGKvVVuyi07dxhPyz0DG06055wT+C4bYuT+kJ6TiV8qB+LiQictSVzlnLFZ2llgfxk1k7wb1vjhKAF0mxdhVNaXJejISYezRktKpRtHBk+L9OIXInjthNGUIQqqgRKhosbeWE5ie5iFQPigYbKwtNvGmJTVCdp+g0Equtwt1FobpNYbqPrEmwKx21PnJSXJVntoxkbN6TVRmrs2ZStWngc/BCFT6zGNHC8PQjGZuMSeb1+aNctCTaBg+yNk50wdEr9XTvQN17tneLbwnE5EAYkwC5VxYfeAaBaEmwKR+RxIYcYXMZ8wNXMVc4x+Vu4y+UgGK010UeYLIr+GhyHmhzLi0dYa6Hjp+MgVDjpIB59gyJjU1X6/B3tiePEsQbHuX8HEsPn7i6onslz7x8cK59uZyhxkggrNG5nKOseZ7iQtG+Y43H6R95Vzu85yF96z0HKurAJ47kjZdyR0u/R+T/YMVr2IqN1wwAAAABJRU5ErkJggg=="
					), aLX(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aLX(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLX(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLX(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLX(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aLX(14, "bestPlayer", 5,
					"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"
					), aLX(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aLX(16, "apple", 3,
					"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"
					), aLX(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aLX(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aLX(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aLX(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aLX(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aLX(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					), aLX(23, "clock", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAZGhkoKic1NzRYWleAgoCjpaIA/wA4/zvJzMl5/3nk5+Sq/6rI/8fm/+b///8vfxrjAAAC1UlEQVRIx4WVMYwSQRSGh+O4hFBIe901VjZUlxgb2gvF0VhcLLhGGwrKI4TDksYoiUpCLCgxxgjqxeSyxZZngVIehYYSYzRcjIfurfB882be7Oyy6CvYYfbbN/9782aeOPqPifDfF8PPw+frgZczkLZ8Hw9UPwLbt2YMUJ1AYH9igBHO++27t+89k8TXFeAVzrbzQtr1Lo7HEaCOc0+EtmQZlfZCgBTwWL5Lne7g70YF4CoEPAQ4oY8zcCgfmy5AzwKqM/CyBFyDFj232YVgB4ciBIiKdqGAGVyKCLAF8MUAGELRANoVulgYoA9zjjDt53kEcKYBlNhiQGR5kHBpDQkcgy9ibJ/WELTCzzgAZTYVMDPCAtvDKRfOCaiBn42+T7kouwS/CTgOYjBWkYnJyLJA4BG8jr5PU2a3YEnAiCWkHJ2uZJecbshsC6kxz3HpaArgE9rFVAmpUTsugZ/Te32ilUwRqIOngRsAbxTo5bTLXwg0zE7il55KkM58BmtCAiaPJRJfMWGnMU6BUV6Y9ABc5raDvVdAHwZWfgBYIS220EDZOeX9Aa3wpuMUDbAJXJPyyLR4dBECigbY4dEgWOKg0xYGUFu72+nkA8BW6dl7tqAwfwRTGQhi4DDvm0zKSi2/y9m4yuRcrLF9LCl7s2LqakrbrQNbtS5WLRYMxBQ12QZQwRxN7DgjB4Nqsm+HYVtGHi0EGutUluQdIkKHP2wuBqGP3mCNhDMFjOJTdUueGwIa1hrJvJWFKw3UrB0q+NYK53wFTfSJoewWTQzLJgO4xtsokNIXJQG4BrswQEndYfqe7BsVDKCChXXT1k3VVtRRT2BxTu3LfMTHoaDSfgeURAOgCphLIkHYHqgYrYYiG47HSTqwupawW5r/VH6/K5sWN5ygZ9WpZ/qO41LbG692vQdWVwze241V+aDWO45vzTXder/31jb32vDDp2HvX91/1f4C6yMGMx9Ja7MAAAAASUVORK5CYII="
					), aLX(24, "userIcon", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAwAODg4sLyw2ODVCREFgYl+Bg4CkpqMA/wDMz8t5/3il/6Tk5+TD/8Th/+P///8NWuTPAAACa0lEQVRIx92Vz2sTQRTHR6GI4GU0SQkEqncvXoSAl9wFm5MXIe1fkCpIEYRcQ0L8ASp42mvwkmtP1taKCIW5loLstVjq4o/YrN3k68y8t7OzWyTise8S3pvPzPu+H2xEd46JswW8ycd7wzzQj4B97zgEDn2gp8+BPQeExj3xgE0TwCw9f2JdbDigD7y6dlfhgIEIH5s3A3rCAiN8kFLWMe32Ph/tdwc41m4FcECUNHREBuiblw9HuG/cthVlgB7GJiDvgC2x7iImDAzw3Eaq+uzTawX8su4VK0JY0at8BS91boXv1pVBCjxF0wZqdLVuNRpgWgA69NJlhUYeSFOomG62qQqpTvIiK/gpOdWW+SnhNwN9KrPKxWix38ifZI264QMVAtp2GIJmtZMHTDVlNXOtHiB5IMtBlgIvZKljJfC49fx3dQd/SNdR4w4d0AtpBtygFo/kSzfTgF1t4IYFSKznRA6AhyT7PUmwDasEblih1kS5k6bt+A4Vo8wTwvSJc5eBeLX0GNxpec/UIczCcXmddGHiBl+YWSCiBZK3kWq1K2pvDDWQLlxJIV4R2hYC0mKmdqCBdOFuIVkW1hZUKlOLEG5dAjwTbHXwZqipBjZjHkCcnovzilcomGkgpCKvY9sBokUro1ungWjMipcz4AK3poWh6NJ26IXMznUOKn0pA8oYe4Do0GJ7wCLe+UCL2l3LgCrWfOASNccDalgR5zLg4ilgyS/ClLF1Crg6DxB/BY7XtXWKAEcNwFYA2P4FePvVWFQEZjZ85L7VoyIwKXzMR1j37ZH7qGZAwSbzgOILgyKwcTb/Fv8b+ANlD8k4eGaP9QAAAABJRU5ErkJggg=="
					), aLX(25, "battleRoyale", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAmMCMAcQBbXVoArAB8fnuHioaQko+cnpunqqYA/gC2uLXAwr/N0M3c39v///9qRmqPAAADUElEQVRIx7WVT0gUURjAvzezYtnlgVlZBA/xNKcR6R/rxrjsaU+Kl4SUvHQ0oVMEUUgdLfEY5jrsaa5L0MUKpEN0EBFPQnsQXcVwToGL7rzen++9mV2KLvVO8775ve99/x9Ef1nwX4HSwKAEAoCL5d/9Fj+gLADopeAMdiLVIoB7c84TAFn+MA7gtBNFBuTG0/izAlb40ashAJIi1QGA3iffOX8jAZjlPPkxry7ExcC9t8bFGpMAK8jP5OsEzeH/EPrWYiX0JRD0c7WO543LgftRi5pUelHpjvX2AFVUIa8FfA9kHMIuBJIZRwEVsoDArqMAUrcHPGXiZTzB13MSqMIK7lu+o0ycxj1fVEDE7hrBuvSUuUZjMtajgesGaPo9QuGI2Z75ZQUEF4wkeUGiivvJ8qCBSreR8H3q0Sux3Tm6HiquFbXGgMxafBeBkGzw1Myuut1sIhDBIys79Qv2O3meM8BIKlyyJvJD30MgcN9Z6WTKzqj8g4rdbWNm85kFtnXuVIqZNf29dehsSJcY6ASj7a1CagzkMn1RxBLY3UgtdNoah2k78xkLvTYghFvi9p8L1kLIdbQeI1OcP4xtvGyfGKAKffWT6dRCr715S6VoFfJLJg0H1BHNU06BUPSvuMREvDUuFDBwUoC5QhQQU5tfhkA43quv0aGeOvAdWylHhX06SN1vOhI6WfWkBgRNTF7GLR+EUzWbLHZNFqiplIaoji0QvdH0DRDI3trGNLRkwk+HF3gGCGWvJahgXaYjeWu6RHtB+22WD20XtVIjo1FiCi2ZN76aTsV6GLGNYYoreUAyoTb9KGJIsOga1MsCOCNq4Iikqc8t8LK5mMLmdaKA3DcZz+QCg7RPr0ZVarVlc2EGgkgz3OFZFZBRIC8ur9oJpVVAqiCWp3KsL1N3GkAFp9K4RZATKllOVcghphXU5GhpUBmRhnZV6FNj0MUdiIw06TkVLjyjgfOoD4R5NRD4NmArnmigGy2qwqUdH6Bw5DtFreIkc4U0aJQMg8fcx7KmlYo9PWnJa+uSKPUQRFOg65t60kI+xqCoZmGqkKSKZE5P2sCd3DHNLqky5u+4RnswkmJ5na8icycoTlqhWb6gHSvEU39+eUul8r953H8BBeY6pZneQOEAAAAASUVORK5CYII="
					), aLX(26, "oneVsOne", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAACNwBHSUYAaQB+gH0AugCIioeSlZKanZkA3ACmqaUA/wC2uLXGycXa3Nn///+iBll7AAABfUlEQVRIx+2UPU7DUAyA3aZFCBWUCDF06wmga9WFG5CoYkA9BNyAK5CBKYfoEGWIsvQGcIOiDkxISAhRVEGN7ffTvrQRGwNKhhf5e1/0bMcJFL9cUAv/TkgB4MTdMEgJfYoaiSMYJEIOfI039y0SIYYJrnqOYBELud98LQlrxEIEHSwJawQcwHVJ2EDA9ewhRyNOa5D5kp5CIsTQfJCICwMvln2NRLhrTlAJp4ifjZDWhUFK6KAWDhC/wT9DnBvkClGLV7hFfNwSXiRJKh3PYUaLQUZY7HN0yQ9PpUEGaeEZJLri45/onCUYpMsEHfUPKT/K9B0sYiEDL1JRSN35OCLJs0hafZ/EKkrp/C9qw03XIvO6VZRRBSt6B72hRa6Q+xeIM2rWuEIouNmUBk/abiGUDs69okqIWyxM25UCl0GNHlYKGU2qHq3dQsHNXsoHUiGE1Ow3r9gSUhkzLo7vbQeJkMk0Gtx1kPo2R0EQDGTeg+A4cVD9l6uFPxZ+APLvRdqXArbWAAAAAElFTkSuQmCC"
					), aLX(27, "zombie", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAANwAwMi8AdwBWWFUAqgB+gH2Ji4iTlZIA1ACfop6rraoA/wC/wr/JzMn///+1mI6XAAACOElEQVRIx9WVv24TQRDGP3w2xAGcSIguhZ8gPskVUgqXVMQUFEguXEYUEEX0+A1iihRILvIGoaTCiSwXJ6VwSZcI0UXCkRU5UaLccjs7++92eYB81Xrv59nZ2W92cerpoP3umz8DZ5y11yH16j9AloL1YhQD5PfXf+f5xWcgGUWAFNWxIN10kITAV1TngpV3sFEGps53Ie6a6JWALo6Eo2uzCAMTbApPM4w8YFgRJTXrHoC1MnDJIcArHJWBnDeigO4TEaifWCBDKwSu1BoEnGAcAvfYMsCwKiLq1A2QNmLA98QA69sxYAENTMNNqnL3GJhAREVZSuBY5Xi7c8Y12lGbam5ogMq0BCpzdkPlC23jGQPDp/SzMGNDJQdQzH5dAw0VoAihSewXg0MNdCVwDp7PaUBTNQ3Is+7TfItD4bE88YSBVAJNml9TKajFLCDjwQdkaWY1NwcDXJoIA28X0DnYJcw2j1dMDp+KvjJJmkKdyLIMaH7ubtOUmg5rof8nduVo2z2siXRcrqcLM6oUrsmUIM/KD785gBB7wBvPMGy5Xx+0EX58LFnOMe3dOGbaCUzrL1ox22e0Jmmwokd/nMYprp997UPtzxskXvNyFksqprLNltv+b7FK0+dsO3GIl/4VlIL/x7HKVxD3xr0s55npiRAoNc3DBJYQs+eCavkwgal0nQXy4MXJ5FVogVv9nthHTfaGBa4QvHpp9acFLjpJAAzhqRYA9mGWetSLvN0HbaP38dc/qn80XpfaOx2MlAAAAABJRU5ErkJggg=="
					), aLX(28, "noFullSending", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEX///8A/wD4+Pjp6ekl6yXExMSZmZkAwAAygzJZWVkgTCAXNBcQHxAIDggCBAIAAACV9pxNAAAC1ElEQVR42u2VzWsaQRTAh13Wu6cBU9q9VPC2p8Cm/8ReGkibkiWSQyGJ7ClQov4Peio0LiH00EIqEkJomkZ6EAmx9VSltenSi2LaklNcVo3T92bW1XwUL6WnzOmN7+eb970kPOGQW+AfAmt/U64JIMI2b9ZzBQB3lyrWTXp6PPuDA2kj5t4EpDOKK55okpXymm+EBsbWa2TVEk4ms3KeDVBDi4z1OPLM6Wp6axjmeyN6xj4IPWN9IOjZwFQcdwhMeer8fhlM9eIqmbbhj/mLkpR77hR8IFXZlXP1MK3GCZzohUV7be1xicx1BUDP4htmqBGOdFQEpEQheWKGvmhEObQQoEVPg+uDejJL+NFbxR15wwQpUQCAVhkoZkqSXYTf5kAO9cGnl8uLgNYBuMNqYFmyM8pHg8i2pxLlmxHz7rNzcMcFIFnT0O7MT02vEdn5bZCVrHxgRAfgkdJFYFE83KiBRunmDR0FEmsdAdAbA8qprHIw66aXjg29ife3GpFfWByQ0Z9ypG/E2m4ql1GqW3DfQ2CDA9KjDALUa5InbvqztGrjfe+1RiQOxJ8yAZzPb8m5tjZTWsB7IW8QKWdhmINDH4DshDCFlwHasNZ9gITaqpQziQC2/SewNwTQCYAs+vDKd3IMGD6R2BoPcwS0l30nE5DlWP1IE4kaAQ0I8+Q7hHnYgTL0O+pV4JcRa9oeJOoT6pxhsQIAU23oWQVS3YMAeLlbYwAvFq8KCDuidRbKIwDL7fHCExvLjYJsbwYANkzF4RaiDBsG21PvWwGALbeZ6sZVadruRdrq/C6R5pzWcC4Y86Bpob1xcFghnNyRbRAG/uiB4gLbHkyhvo6zZoYcxvaCDZOEwREj+W6frxMKg3NqBSuIwpvly7O/DqM3AmB4T69uhzem0hgCMP7b13YM/arpdQFQWCCF6wtmKlggE1fQvYcTltjENThxkd5+cf4P8Acm8L1xck3dqAAAAABJRU5ErkJggg=="
					)
		}
	}, this.get = function(eL) {
		return canvas[eL]
	}, this.wW = function(name) {
		for (var aC = a42.length - 1; 0 <= aC; aC--)
			if (a42[aC] === name) return canvas[aC];
		return aLR
	}, this.vM = function() {
		return aLQ <= 0
	}, this.aLT = function() {
		aLQ = 0, aLU()
	}
}

function cY() {
	var aLd = [
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
		aLe = [
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
	this.aLf = null, this.aLg = null, this.aLh = null, this.aLi = null, this.aLj = null, this.aLk = null, this.aLl = null, this.aLm = null, this.aLn = null, this.aLo = null;

	function aLv(kE, oJ) {
		for (var aLf = ad.aLf, aLg = ad.aLg, aLh = ad.aLh, aC = kE; aC < oJ; aC++) aLf[aC] = bO.g3(64 * az.random(), az.value(100)) << 2, aLg[aC] = bO.g3(64 * az.random(), az.value(100)) << 2, aLh[aC] = bO.g3(64 * az.random(), az.value(100)) << 2
	}

	function aLu(kE, oJ) {
		for (var colorsData = aE.data.colorsData, aLf = ad.aLf, aLg = ad.aLg, aLh = ad.aLh, aC = kE; aC < oJ; aC++) {
			var g4 = colorsData[aC];
			aLf[aC] = 4 * (g4 >> 12), aLg[aC] = 4 * (g4 >> 6 & 63), aLh[aC] = 4 * (63 & g4)
		}
	}

	function aMC(fG, aME) {
		aG0[fG] = 0, aG0[fG + 1] = 0, aG0[fG + 2] = aME, aG0[fG + 3] = 0, aMF(fG)
	}

	function aMF(fG) {
		var fj;
		be.oR || (fj = ad.a1m(fG), fG = ad.a1n(fG), be.oR = fj >= bd.aFz[0] && fj <= bd.aFz[2] && fG >= bd.aFz[1] && fG <= bd.aFz[3])
	}
	this.fe = new Int32Array(4), this.aLs = new Int32Array(8), this.dn = function() {
		var fe = this.fe,
			fe = (fe[0] = -4 * bV.fn, fe[1] = 4, fe[2] = -fe[0], fe[3] = -fe[1], this.aLs);
		fe[0] = -4 * bV.fn - 4, fe[1] = -4 * bV.fn, fe[2] = -4 * bV.fn + 4, fe[3] = -4, fe[4] = 4, fe[5] = 4 * bV.fn - 4, fe[6] = 4 * bV.fn, fe[7] = 4 * bV.fn + 4
	}, this.dm = function() {
		if (this.aLf ? (this.aLf.fill(0), this.aLg.fill(0), this.aLh.fill(0), this.aLi.fill(0), this.aLj.fill(0), this.aLk.fill(0), this.aLl.fill(0), this.aLm.fill(0), this.aLn.fill(0), this.aLo.fill(0), this.aCN.fill(0)) : (this.aLf =
				new Uint8Array(aE.fZ), this.aLg = new Uint8Array(aE.fZ), this.aLh = new Uint8Array(aE.fZ), this.aLi = new Uint8Array(aE.fZ), this.aLj = new Uint8Array(aE.fZ), this.aLk = new Uint8Array(aE.fZ), this.aLl = new Uint8Array(aE.fZ),
				this.aLm = new Uint8Array(aE.fZ), this.aLn = new Uint8Array(aE.fZ), this.aLo = new Uint8Array(aE.fZ), this.aCN = new Uint8Array(aE.fZ)), aE.iX)
			for (var aEd = bj.aEd, aLf = ad.aLf, aLg = ad.aLg, aLh = ad.aLh, aC = aE.fZ - 1; 0 <= aC; aC--) {
				var em = aEd[aC],
					lt = bO.g3((aLe[em][3] + 1) * az.random(), az.value(100));
				aLf[aC] = aLd[em][0] + lt * aLe[em][0], aLg[aC] = aLd[em][1] + lt * aLe[em][1], aLh[aC] = aLd[em][2] + lt * aLe[em][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aLu(0, aE.ky), aLv(aE.ky, aE.fZ)) : aLv(0, aE.fZ) : aLu(0, aE.fZ);
		! function() {
			var aC, ff, aLf = ad.aLf,
				aLg = ad.aLg,
				aLh = ad.aLh;
			for (aC = aE.fZ - 1; 0 <= aC; aC--) ff = bO.g3(aLf[aC] + aLg[aC] + aLh[aC], 3), aLf[aC] += aM1(ff - aLf[aC], 2), aLg[aC] += aM1(ff - aLg[aC], 2), aLh[aC] += aM1(ff - aLh[aC], 2), aLf[aC] -= aLf[aC] % 4, aLg[aC] -= aLg[aC] % 4, aLh[
				aC] -= aLh[aC] % 4
		}(),
		function() {
			for (var fc = aE.fZ, aLf = ad.aLf, aLg = ad.aLg, aLh = ad.aLh, aLi = ad.aLi, aC = 0; aC < fc; aC++) aLf[aC] += aC >> 7, aLg[aC] += aC >> 5 & 3, aLh[aC] += aC >> 3 & 3, aLi[aC] = 7 & aC
		}(), this.aLy(),
			function() {
				for (var fc = aE.fZ, aLj = ad.aLj, aLk = ad.aLk, aLl = ad.aLl, aLf = ad.aLf, aLg = ad.aLg, aLh = ad.aLh, aC = 0; aC < fc; aC++) {
					var eK = aLf[aC],
						vI = aLg[aC],
						fw = aLh[aC];
					60 <= eK + vI + fw ? (aLj[aC] = Math.max(eK - 40, 3 & eK), aLk[aC] = Math.max(vI - 40, 3 & vI), aLl[aC] = Math.max(fw - 40, 3 & fw)) : (aLj[aC] = eK + 40, aLk[aC] = vI + 40, aLl[aC] = fw + 40)
				}
			}(),
			function() {
				for (var fc = aE.fZ, aLm = ad.aLm, aLn = ad.aLn, aLo = ad.aLo, aLf = ad.aLf, aLg = ad.aLg, aLh = ad.aLh, aC = 0; aC < fc; aC++) {
					var eK = aLf[aC],
						vI = aLg[aC],
						fw = aLh[aC];
					688 <= eK + vI + fw ? (aLm[aC] = eK - 88, aLn[aC] = vI - 88, aLo[aC] = fw - 88) : (aLm[aC] = Math.min(eK + 88, 252 + (3 & eK)), aLn[aC] = Math.min(vI + 88, 252 + (3 & vI)), aLo[aC] = Math.min(fw + 88, 252 + (3 & fw)))
				}
			}()
	}, this.aBF = function(player) {
		var h = bR.gB;
		return h[0] = this.aLf[player], h[1] = this.aLg[player], h[2] = this.aLh[player], h
	}, this.aLy = function() {
		for (var aC = aE.fZ - 1; 0 <= aC; aC--) this.aCN[aC] = this.aLf[aC] + this.aLg[aC] + this.aLh[aC] < 280 ? 0 : 1
	}, this.a1m = function(fG) {
		return bO.g3(fG, 4) % bV.fn
	}, this.a1n = function(fG) {
		return bO.g3(fG, 4 * bV.fn)
	}, this.a1K = function(fj, fl) {
		return Math.floor(4 * (fl * bV.fn + fj))
	}, this.a1a = function(fG) {
		var fe = this.fe;
		return this.aM2(fG + fe[0]) || this.aM2(fG + fe[1]) || this.aM2(fG + fe[2]) || this.aM2(fG + fe[3])
	}, this.g0 = function(fG) {
		var fe = this.fe;
		return this.fh(fG + fe[0]) || this.fh(fG + fe[1]) || this.fh(fG + fe[2]) || this.fh(fG + fe[3])
	}, this.a1Y = function(fG, player) {
		var fe = this.fe;
		return this.aM3(fG + fe[0], player) || this.aM3(fG + fe[1], player) || this.aM3(fG + fe[2], player) || this.aM3(fG + fe[3], player)
	}, this.aM4 = function(aC, aM5, aM6, aM7) {
		this.aLf[aC] = aM5 >> 16, this.aLg[aC] = aM5 >> 8 & 255, this.aLh[aC] = 255 & aM5, this.aLj[aC] = aM6 >> 16, this.aLk[aC] = aM6 >> 8 & 255, this.aLl[aC] = 255 & aM6, this.aLm[aC] = aM7 >> 16, this.aLn[aC] = aM7 >> 8 & 255, this.aLo[aC] =
			255 & aM7
	}, this.aM8 = function(aC) {
		return [(this.aLf[aC] << 16) + (this.aLg[aC] << 8) + this.aLh[aC], (this.aLj[aC] << 16) + (this.aLk[aC] << 8) + this.aLl[aC], (this.aLm[aC] << 16) + (this.aLn[aC] << 8) + this.aLo[aC]]
	}, this.hC = function(fG) {
		return 208 <= aG0[fG + 3]
	}, this.a1g = function(player, fG) {
		return this.hC(fG) && this.a1j(player, fG)
	}, this.a1j = function(player, fG) {
		return player === this.fU(fG)
	}, this.aM9 = function(fG) {
		return 208 <= aG0[fG + 3] && aG0[fG + 3] < 224
	}, this.k9 = function(fG) {
		return 224 <= aG0[fG + 3] && aG0[fG + 3] < 248
	}, this.aMA = function(fG) {
		return 248 <= aG0[fG + 3]
	}, this.a1Z = function(fG) {
		for (var fe = this.fe, aC = 3; 0 <= aC; aC--)
			if (this.iu(fG + fe[aC])) return !0;
		return !1
	}, this.fX = function(fG) {
		return this.hC(fG) || this.fT(fG)
	}, this.iu = function(fG) {
		return 0 === aG0[fG + 3] && 2 === aG0[fG + 2]
	}, this.fT = function(fG) {
		return 0 === aG0[fG + 3] && 1 === aG0[fG + 2]
	}, this.a0P = function(fG) {
		return 0 === aG0[fG + 3] && 3 === aG0[fG + 2]
	}, this.fh = function(fG) {
		return 0 === aG0[fG + 3] && 5 === aG0[fG + 2]
	}, this.aM2 = function(fG) {
		return 0 === aG0[fG + 3] && 3 <= aG0[fG + 2]
	}, this.fK = function(fG) {
		return (aG0[fG] >> 1 << 8) + aG0[fG + 1]
	}, this.aMB = function(fG) {
		return 1 & aG0[fG]
	}, this.aM3 = function(fG, player) {
		return this.fT(fG) || this.hC(fG) && player !== this.fU(fG)
	}, this.fU = function(fG) {
		return ((3 & aG0[fG]) << 7) + ((3 & aG0[fG + 1]) << 5) + ((3 & aG0[fG + 2]) << 3) + (7 & aG0[fG + 3])
	}, this.a1h = function(fG) {
		aMC(fG, 1)
	}, this.aMD = function(fG) {
		aMC(fG, 2)
	}, this.a1L = function(fG, player) {
		aG0[fG] = this.aLf[player], aG0[fG + 1] = this.aLg[player], aG0[fG + 2] = this.aLh[player], aG0[fG + 3] = 208 + this.aLi[player], aMF(fG)
	}, this.h7 = function(fG, player) {
		aG0[fG] = this.aLj[player], aG0[fG + 1] = this.aLk[player], aG0[fG + 2] = this.aLl[player], aG0[fG + 3] = 224 + this.aLi[player], aMF(fG)
	}, this.kA = function(fG, player) {
		aG0[fG] = this.aLm[player], aG0[fG + 1] = this.aLn[player], aG0[fG + 2] = this.aLo[player], aG0[fG + 3] = 248 + this.aLi[player], aMF(fG)
	}
}

function cx() {
	var aMG = 0,
		aMH = new Uint16Array(64);

	function f8(a97) {
		aMG -= 2;
		for (var aC = a97; aC < aMG; aC += 2) aMH[aC] = aMH[aC + 2], aMH[aC + 1] = aMH[aC + 3]
	}
	this.dm = function() {
		aMG = 0
	}, this.eh = function() {
		var aC, k7, jG;
		if (0 !== aMG)
			if (0 === ah.na[aE.fM]) aMG = 0;
			else if (0 === ae.gj(aE.fM)) aMG = 0;
		else
			for (aC = aMG - 2; 0 <= aC; aC -= 2)(k7 = aMH[aC]) < aE.fZ && 0 === ah.na[k7] ? f8(aC) : (jG = aMH[aC + 1], (k7 >= aE.fZ && bw.aMJ(aE.fM) || k7 < aE.fZ && bw.aMK(aE.fM, k7)) && (bB.i3.iA(jG, k7), f8(aC)))
	}, this.iB = function(k7, jG) {
		! function(k7, jG) {
			for (var aC = 0; aC < aMG; aC += 2)
				if (aMH[aC] === k7) return aMH[aC + 1] = Math.min(aMH[aC + 1] + jG, 1023), 1;
			return
		}(k7, jG) && 64 !== aMG && (aMH[aMG] = k7, aMH[aMG + 1] = jG, aMG += 2)
	}
}

function cZ() {
	function aMS(player) {
		var ed;
		bD.gy.a7B(player) && (ed = ah.he[player] - ah.a7G[player] + ae.aMU(player), bg.h2(player, Math.abs(ed), ed < 0 ? 18 : 12)), ah.he[player] = 0, ah.a7G[player] = 0
	}

	function aMb() {
		aY.show(!1, !1, !1, !0), aX.aF9(), bU.a3R.a4F()
	}

	function aMO(player, aMa) {
		for (var aC = aMa.length - 1; 0 <= aC; aC--) ae.aMd(aMa[aC], player)
	}

	function aMR(player) {
		var jW = ah.jW,
			jX = ah.jX,
			jY = ah.jY,
			jZ = ah.jZ,
			fn = bV.fn;
		if (ah.hQ[player]) {
			ah.hQ[player] = 0;
			for (var o1 = jW[player], o2 = jY[player], fj = jX[player]; o1 <= fj; fj--)
				for (var fl = jZ[player]; o2 <= fl; fl--) {
					var hA = 4 * (fl * fn + fj);
					ad.a1g(player, hA) && ad.a1h(hA)
				}
		}
		jX[player] = jZ[player] = 0, jW[player] = jY[player] = Math.max(fn, bV.fo)
	}
	this.dv = function(hA) {
		var player, ed = ah.hQ[hA] + ah.a1G[hA];
		bQ.z.l2[hA] ? ed && (aMO(player = hA, ae.aMP(player)), ag.aMQ(player), aMR(player), aG.h0(player), ae.clear(player), aMS(player), function(player) {
			ah.a1G[player] = 0, ah.h4[player] = [], ah.hI[player] = [], ah.hJ[player] = [], ah.g1[player] = []
		}(player)) : !ed && ah.h4[hA].length || this.aMN(hA)
	}, this.aMN = function(player) {
		! function(player) {
			bD.gy.kL(player) || (ah.a4J[player] = bl.a4Y.aMZ(), aE.a3h++);
			var aMa = ae.aMP(player);
			0 === aMa.length ? bD.gy.a78(player) && aMb() : (aMO(player, aMa), function(player, aMa) {
				var aMf = aMa[function(aMa) {
					var aC, eL = 0;
					for (aC = aMa.length - 1; 1 <= aC; aC--) ah.hQ[aMa[aC]] > ah.hQ[aMa[eL]] && (eL = aC);
					return eL
				}(aMa)];
				9 === aE.lG && (1 === bj.fa[player] ? az.kq(8) && b0.aMg(aMf) : aF.iM[player] && (aO.aAY(765, 0), aO.a29(280, L(149, [ah.a2A[aMf], ah.a2A[player]]), 765, aMf, bE.pL, bE.qm, -1, !0)));
				if (bD.gy.a78(player)) aMb(), aO.a3t(aMf, 1);
				else {
					for (var aC = aMa.length - 1; 0 <= aC; aC--)
						if (bD.gy.a7B(aMa[aC]) && (bg.nW[4 - bD.gy.kL(player)]++, bD.gy.a78(aMa[aC]))) return aO.a3t(player, 0);
					bD.gy.kL(player) || aO.aAI(0, player, aMf)
				}
			}(player, aMa))
		}(player), ag.aMQ(player), aMR(player), aMS(player),
			function(player) {
				ah.na[player] = 0, ah.h4[player] = null, ah.hI[player] = null, ah.hJ[player] = null, ah.g1[player] = null
			}(player), aG.h0(player), ae.clear(player), bQ.aMX.aMY(player)
	}
}

function d2() {
	var input;

	function aMh(e) {
		(e = e.target.files) && 0 < e.length && b7.aMk(e[0])
	}

	function aMo(e) {
		var em = new Image;
		em.onload = aMp, em.src = e.target.result
	}

	function aMp(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aMr = bm.buffer.data[162].value,
			max = Math.min(bV.aMs, aMr),
			aMr = (max = a1.id || bM.t9() ? Math.min(1400, aMr) : max) / Math.max(j, k);
		if (aMr < 1 && (j = Math.floor(aMr * j + .125), k = Math.floor(aMr * k + .125)), max < j || max < k || j < 10 || k < 10) aMr = "Invalid Image Dimensions!", a1.z0 ? a1.z0.showToast(aMr) : alert(aMr);
		else {
			for (var max = document.createElement("canvas"), aMr = (max.width = j, max.height = k, max.getContext("2d")), aMu = document.createElement("canvas"), aMv = (aMu.width = e.width, aMu.height = e.height, aMu.getContext("2d")), e = (aMv
					.drawImage(e, 0, 0), aMv.getImageData(0, 0, aMu.width, aMu.height)), aMv = aMr.createImageData(j, k), src = e.data, aMy = aMv.data, aCy = aMu.width / j, aCz = aMu.height / k, fl = 0; fl < k; fl++)
				for (var fj = 0; fj < j; fj++) {
					var aMz = Math.floor(fj * aCy),
						aMz = 4 * (Math.floor(fl * aCz) * aMu.width + aMz),
						aN2 = 4 * (fl * j + fj);
					aMy[aN2] = src[aMz], aMy[1 + aN2] = src[1 + aMz], aMy[2 + aN2] = src[2 + aMz], aMy[3 + aN2] = 255
				}
			aMr.putImageData(aMv, 0, 0), 20 === u.uw && u.a4v().aMp(max)
		}
	}
	this.dm = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aMh
	}, this.xO = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aMi = function() {
		input.click()
	}, this.aMk = function(aMl) {
		var h = aMl.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aMo, h.readAsDataURL(aMl))
	}
}

function d0() {
	this.aN3 = new Uint32Array(aE.fZ), this.dm = function() {
		10 === aE.lG && this.aN3.fill(0)
	}, this.eh = function() {
		10 === aE.lG && this.ln()
	}, this.ln = function() {
		for (var hA, target, aFM, aN3 = this.aN3, wP = am.lZ, a7H = ah.he, aC = am.lU - 1; 0 <= aC; aC--)(hA = wP[aC]) >= aE.ky || (target = Math.max(bO.g3(a7H[hA], 4), 2048), aFM = Math.max(af.aFN(hA), 100), aN3[hA] += bO.g3(aFM * target, 1e4),
			aN3[hA] > target && (aN3[hA] = target))
	}, this.a7N = function(player, iM) {
		return 10 !== aE.lG || bD.gy.kL(player) ? iM : Math.min(this.aN3[player], iM)
	}, this.a7T = function(player, iM) {
		10 !== aE.lG || bD.gy.kL(player) || (this.aN3[player] -= iM)
	}
}

function d3() {
	var aN4 = -1,
		aN5 = null,
		aN6 = -1,
		xp = 4;

	function aN8() {
		aN.a9b() ? be.render() : be.a3r()
	}

	function aNG(em, ff) {
		var eK = em >> 16,
			vI = em >> 8 & 255,
			em = 255 & em,
			aNH = 255 - ff,
			aNH = (aNH < eK && aNH < vI && aNH < em && (ff = -ff), aN4 >> 7),
			aNJ = aN4 >> 5 & 3,
			aNK = aN4 >> 3 & 3;
		return (Math.max(Math.min(eK + ff, 252 + aNH), aNH) << 16) + (Math.max(Math.min(vI + ff, 252 + aNJ), aNJ) << 8) + Math.max(Math.min(em + ff, 252 + aNK), aNK)
	}

	function aN7() {
		return -1 !== aN4 && (ad.aM4(aN4, aN5[0], aN5[1], aN5[2]), aND(aN4), aN4 = -1)
	}

	function aND(player) {
		bi.du = !0;
		for (var jW = ah.jW[player], jY = ah.jY[player], jX = ah.jX[player], jZ = ah.jZ[player], fl = jY; fl <= jZ; fl++)
			for (var fj = jW; fj <= jX; fj++) {
				var fG = ad.a1K(fj, fl);
				ad.a1g(player, fG) && (ad.aMA(fG) ? ad.kA(fG, player) : ad.k9(fG) ? ad.h7(fG, player) : ad.a1L(fG, player))
			}
	}
	this.dm = function() {
		aN5 = null, aN6 = aN4 = -1, xp = bO.io(Math.floor(bm.buffer.data[16].value), 0, 16)
	}, this.eh = function(bz) {
		if (bm.buffer.data[15].value && 0 !== xp && (bz || !bM.t9())) {
			var bz = bP.ht(bM.hh),
				hu = bP.hv(bM.hi);
			if (bP.hw(bz, hu)) {
				bz = bP.fz(bz, hu), hu = bP.fS(bz);
				if (aN6 === hu)
					if (ad.hC(hu)) {
						if (aN4 === ad.fU(hu)) return
					} else if (-1 === aN4) return;
				! function(fG) {
					ad.hC(fG) ? (fG = ad.fU(fG)) !== aN4 && (aN7(), function(player) {
						aN4 = player, aN5 = ad.aM8(player);
						var aNB = function() {
							var sc = aN5,
								aNE = xp << 2,
								aNF = aNE << 1;
							return [aNG(sc[0], aNE), aNG(sc[1], aNF), aNG(sc[2], aNF)]
						}();
						ad.aM4(player, aNB[0], aNB[1], aNB[2]), aND(player)
					}(fG), aN8()) : aN7() && aN8()
				}(aN6 = hu)
			} else aN7() && aN8()
		}
	}
}

function d4() {
	var xc = 0,
		aNL = 0,
		aNM = 0,
		aNN = 0,
		aN6 = -1;

	function aNQ(fG) {
		if (aN6 === fG) return !1;
		if (-1 === (aN6 = fG)) xc = 0, aO.aAl(xc, 0);
		else {
			if (ad.hC(fG)) return aNM = ad.fU(fG), kx = ah.he[aNM] - ah.a7G[aNM], (4 !== xc || kx !== aNL) && (xc = 4, aNL = kx, aO.aAl(xc, kx), !0);
			if (ad.fT(fG)) return 3 !== xc && (xc = 3, aO.aAl(xc, 0), !0);
			if (ad.fh(fG)) return 2 !== xc && (xc = 2, aO.aAl(xc, 0), !0);
			var kx = bQ.ln.a9P(bM.hh, bM.hi);
			if (-1 === kx) return 1 !== xc && (xc = 1, aO.aAl(xc, 0), !0);
			fG = bQ.z.aAQ[kx];
			if (aNM = bQ.z.mr[kx], aNN = bQ.z.ms[kx] >> 3, 5 === xc && fG === aNL) return !1;
			xc = 5, aNL = fG, aO.aAl(xc, fG)
		}
		return !0
	}
	this.dm = function() {
		aNN = aNM = aNL = xc = 0, aN6 = -1
	}, this.eh = function(bz) {
		var hu;
		!bz && bM.t9() || (bz = bP.ht(bM.hh), hu = bP.hv(bM.hi), bP.hw(bz, hu) ? (bz = bP.fz(bz, hu), aNQ(bP.fS(bz))) : aNQ(-1))
	}, this.nH = function() {
		var aNS, kx, a9N, aNR;
		if (0 !== xc && 2 !== xc)
			if (bM.t9()) {
				if (1 !== xc && 3 !== xc) {
					if (4 === xc) return void(kx = ah.he[aNM] - ah.a7G[aNM], aNL === kx || (aNL = kx, aO.aAl(xc, kx)));
					(a9N = bQ.ln.o0(aNN, aNM)) < 0 ? (xc = 1, aO.aAl(xc, 0)) : (aNR = bQ.z.aAQ[a9N]) !== aNL && (aNL = aNR, aO.aAl(xc, aNR))
				}
			} else if (1 === xc) - 1 !== (a9N = bQ.ln.a9P(bM.hh, bM.hi)) && (xc = 5, aNL = bQ.z.aAQ[a9N], aO.aAl(xc, aNL));
		else if (3 === xc) ad.hC(aN6) && (xc = 4, aNS = ad.fU(aN6), aNL = ah.he[aNS] - ah.a7G[aNS], aO.aAl(xc, aNL));
		else if (4 === xc) {
			if (ad.hC(aN6)) return void(aNS = ad.fU(aN6), kx = ah.he[aNS] - ah.a7G[aNS], aNL === kx || (aNL = kx, aO.aAl(xc, kx)));
			xc = 3, aO.aAl(xc, 0)
		} else - 1 === (a9N = bQ.ln.a9P(bM.hh, bM.hi)) ? (xc = 1, aO.aAl(xc, 0)) : (aNR = bQ.z.aAQ[a9N]) !== aNL && (aNL = aNR, aO.aAl(xc, aNR))
	}
}

function dd() {
	function aNU(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aNc, h.readAsText(e))
	}

	function aNc(e) {
		var aNf;
		aE.a3f || (e = JSON.parse(e.target.result), aNf = aE.data = new a8G, aNg(e, aNf, "mapType", 0, 2), aNg(e, aNf, "mapProceduralIndex", 0, 255), aNg(e, aNf, "mapRealisticIndex", 0, 255), aNg(e, aNf, "mapSeed", 0, 16383), function(aNe, aNf, hB,
				max) {
				aNe = aNe[hB];
				aNf[hB] = aNm(aNe) ? aNe.slice(0, max) : aNf[hB]
			}(e, aNf, "mapName", 20), function(aNe, aNf, hB) {
				var aMq;
				2 === aNf.mapType && (!aNm(aNe = aNe[hB]) || aNe.length <= 20 ? aNf.mapType = 0 : ((aMq = new Image).onload = function() {
					bC.aNn.aNo(aMq, 1), aMq.onload = null, aMq = null
				}, aMq.src = aNe))
			}(e, aNf, "canvas"), aNg(e, aNf, "passableWater", 0, 1), aNg(e, aNf, "passableMountains", 0, 1), aNg(e, aNf, "playerCount", 1, 512), aNg(e, aNf, "humanCount", 1, 1), aNg(e, aNf, "selectedPlayer", 0, 0), aNg(e, aNf, "gameMode", 0, 1),
			aNg(e, aNf, "playerMode", 0, 0), aNg(e, aNf, "battleRoyaleMode", 0, 0), aNg(e, aNf, "numberTeams", 0, 8), aNg(e, aNf, "isZombieMode", 0, 0), aNg(e, aNf, "isContest", 0, 0), aNg(e, aNf, "isReplay", 0, 0), aNj(e, aNf, "elo", 16, 2,
				16383), aNg(e, aNf, "colorsType", 0, 1), aNg(e, aNf, "colorsPersonalized", 0, 1), aNj(e, aNf, "colorsData", 32, 512, 262143), aNg(e, aNf, "selectableColor", 0, 1), aNj(e, aNf, "teamPlayerCount", 16, 9, 512), aNg(e, aNf,
				"neutralBots", 0, 1), aNg(e, aNf, "botDifficultyType", 0, 3), aNg(e, aNf, "botDifficultyValue", 0, 15), aNj(e, aNf, "botDifficultyTeam", 8, 9, 15), aNj(e, aNf, "botDifficultyData", 8, 512, 15), aNg(e, aNf, "spawningType", 0, 2),
			aNg(e, aNf, "spawningSeed", 0, 16383), aNj(e, aNf, "spawningData", 16, 1024, 4095), aNg(e, aNf, "selectableSpawn", 0, 1), aNg(e, aNf, "playerNamesType", 0, 2),
			function(aNe, aNf, hB, size, max) {
				var a6J = aNe[hB];
				if (Array.isArray(a6J)) {
					for (var a6K = new Array(size), fc = Math.min(a6J.length, size), aC = 0; aC < fc; aC++) a6K[aC] = aNm(a6J[aC]) ? a6J[aC].slice(0, max) : "";
					a6K.fill("", fc), aNf[hB] = a6K
				}
			}(e, aNf, "playerNamesData", 512, 20), aNg(e, aNf, "selectableName", 0, 1), aNg(e, aNf, "aIncomeType", 0, 2), aNg(e, aNf, "aIncomeValue", 0, 255), aNj(e, aNf, "aIncomeData", 8, 512, 255), aNg(e, aNf, "tIncomeType", 0, 2), aNg(e, aNf,
				"tIncomeValue", 0, 255), aNj(e, aNf, "tIncomeData", 8, 512, 255), aNg(e, aNf, "iIncomeType", 0, 2), aNg(e, aNf, "iIncomeValue", 0, 255), aNj(e, aNf, "iIncomeData", 8, 512, 255), aNg(e, aNf, "sResourcesType", 0, 2), aNg(e, aNf,
				"sResourcesValue", 0, 2047), aNj(e, aNf, "sResourcesData", 16, 512, 2047), u.y(), u.z.uo[0] = 0, u.v(19))
	}

	function aNg(aNe, aNf, hB, min, max) {
		aNe = aNe[hB];
		aNf[hB] = "number" == typeof aNe && min <= aNe && aNe <= max ? Math.floor(aNe) : aNf[hB]
	}

	function aNm(sA) {
		return "string" == typeof sA
	}

	function aNj(aNe, aNf, hB, aNp, size, max) {
		var a6J = aNe[hB];
		if (Array.isArray(a6J)) {
			for (var a6K = new(8 === aNp ? Uint8Array : 16 === aNp ? Uint16Array : Uint32Array)(size), fc = Math.min(a6J.length, size), aC = 0; aC < fc; aC++) a6K[aC] = bO.io(a6J[aC], 0, max);
			aNf[hB] = a6K
		}
	}
	this.aNT = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aNU, input.click()
	}, this.aNV = function() {
		for (var aNY, aGb, a8q = aE.data, keys = Object.keys(a8q), aNW = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a8q[key] instanceof Uint8Array || a8q[key] instanceof Uint16Array || a8q[key] instanceof Uint32Array ? aNW[key] = Array.from(a8q[key]) : aNW[key] = a8q[key]
		}
		aNW.canvas = 2 === aNW.mapType && aNW.canvas ? aNW.canvas.toDataURL() : null, aNY = aNW, aNY = JSON.stringify(aNY, null, 2), aNY = new Blob([aNY], {
			type: "application/json"
		}), (aGb = document.createElement("a")).href = URL.createObjectURL(aNY), aGb.download = "tt_scenario.json", aGb.click()
	}
}

function cd() {
	var aNq, aNr, size, k7, iM, aNs;

	function aNt(player) {
		return player < aE.ky ? aNq * player : aNq * aE.ky + aNr * (player - aE.ky)
	}
	this.dm = function() {
		aNq = aE.ky < 16 ? 12 : 8, aNr = 4;
		var fc = aNt(aE.fZ);
		size = new Uint8Array(aE.fZ), k7 = new Uint16Array(fc), iM = new Uint32Array(fc), aNs = new Uint8Array(fc)
	}, this.s4 = function(aBr, aNu) {
		var aNv = this.hf(aBr, aNu),
			aNu = (this.hd(aBr, aNu, 0), bD.gy.h1(aBr, aNv));
		bg.h2(aBr, aNv - aNu, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aMd = function(player, aNu) {
		var aNy, aNu = function(player, aNu) {
			var aC, lt = aNt(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (k7[lt + aC] === aNu) return aC;
			return size[player]
		}(player, aNu);
		aNu !== size[player] && (aNy = iM[aNt(player) + aNu], this.h3(player, aNu), this.el(player, aNy, aE.fZ))
	}, this.kJ = function(player, aNu) {
		for (var lt = aNt(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k7[lt + aC] === aNu) return !0;
		return !1
	}, this.kc = function(player) {
		return player < aE.ky ? size[player] < aNq : size[player] < aNr
	}, this.gj = function(player) {
		return size[player]
	}, this.go = function(player, aC) {
		return k7[aNt(player) + aC]
	}, this.gp = function(player, aC) {
		return iM[aNt(player) + aC]
	}, this.hf = function(player, aNu) {
		for (var lt = aNt(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k7[lt + aC] === aNu) return iM[lt + aC];
		return 0
	}, this.aMU = function(player) {
		for (var lt = aNt(player), g4 = 0, aC = size[player] - 1; 0 <= aC; aC--) g4 += iM[lt + aC];
		return g4
	}, this.hd = function(player, aNu, aNy) {
		for (var lt = aNt(player), aC = size[player] - 1; 0 <= aC; aC--) k7[lt + aC] === aNu && (iM[lt + aC] = aNy)
	}, this.hO = function(player, aC, aNy) {
		iM[aNt(player) + aC] = Math.max(aNy, 0)
	}, this.hP = function(player, aC) {
		aNs[aNt(player) + aC] = 0
	}, this.gq = function(player, aC) {
		return aNs[aNt(player) + aC]
	}, this.el = function(player, aNy, aNu) {
		ap.jl.ka[player] = ap.jl.ka[aNu] = 8, bD.gy.a7B(aNu) && bg.nW[6 - bD.gy.kL(player)]++;
		for (var lt = aNt(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (k7[lt + aC] === aNu) return iM[lt + aC] += aNy, void(iM[lt + aC] = iM[lt + aC] > aE.a7J ? aE.a7J : iM[lt + aC]);
		k7[lt + size[player]] = aNu, iM[lt + size[player]] = aNy, aNs[lt + size[player]] = 1, size[player]++, aNu === aE.fM ? aO.a3t(player, 5) : player < aE.ky && player === aE.fM && ag.aAK(aNu)
	}, this.h3 = function(player, eL) {
		var fv, lt;
		if (0 !== size[player])
			for (lt = aNt(player), size[player]--, fv = eL; fv < size[player]; fv++) k7[lt + fv] = k7[lt + fv + 1], iM[lt + fv] = iM[lt + fv + 1], aNs[lt + fv] = aNs[lt + fv + 1]
	}, this.aMP = function(player) {
		for (var fv, lt, aMa = [], aC = am.lU - 1; 0 <= aC; aC--)
			for (lt = aNt(am.lZ[aC]), fv = size[am.lZ[aC]] - 1; 0 <= fv; fv--)
				if (k7[lt + fv] === player) {
					aMa.push(am.lZ[aC]);
					break
				} return aMa
	}
}

function ce() {
	var aNz;

	function aO1(player) {
		var eK, kd;
		return bD.gy.kL(player) && player < aE.ky ? 0 : (eK = aNz[bO.g3((aE.fZ - 1) * ah.hQ[player], aE.ki)], bi.kv() < 1920 && (eK = Math.max(bO.g3(100 * (13440 - 6 * bi.kv()), 1920), eK)), kd = af.ke(player), ah.he[player] > kd && (eK -= bO.g3(2 *
			eK * (ah.he[player] - kd), kd)), Math.min(Math.max(eK, 0), 700))
	}

	function aOD(oD) {
		for (var hQ = ah.hQ, lZ = am.lZ, aC = am.lU - 1; 0 <= aC; aC--) {
			var hA = lZ[aC];
			bD.gy.h1(hA, bO.g3(oD * hQ[hA], 32))
		}
	}

	function aOA() {
		var a0I = aE.fM;
		bR.g8[0] = ah.he[a0I] - ah.a7G[a0I]
	}

	function aOC(eL) {
		var a0I = aE.fM,
			a0I = ah.he[a0I] - ah.a7G[a0I] - bR.g8[0];
		af.aDx += a0I, bg.nW[eL] += a0I
	}
	this.aDx = 0, this.dt = function() {
		for (var fc = aE.fZ, aC = (aNz = new Uint16Array(fc), 0); aC < fc; aC++) aNz[aC] = 100 + aO0(bO.g3(25600 * aC, fc - 4), 9)
	}, this.dm = function() {
		(this.aDx = 0) === aE.data.iIncomeType ? this.aFN = aO1 : 1 === aE.data.iIncomeType ? this.aFN = function(player) {
			return bO.g3(aE.data.iIncomeValue * aO1(player), 64)
		} : this.aFN = function(player) {
			return bO.g3(aE.data.iIncomeData[player] * aO1(player), 64)
		}
	}, this.eh = function() {
		if (bi.kv() % 10 == 9 && (af.aDx = 0, function() {
				aOA();
				for (var lZ = am.lZ, he = ah.he, aC = am.lU - 1; 0 <= aC; aC--) {
					var hA = lZ[aC],
						aOB = bO.g3(af.aFN(hA) * he[hA], 1e4);
					bD.gy.h1(hA, Math.max(aOB, 1))
				}
				aOC(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aOA(), 1 === aE.data.aIncomeType)
						for (var hQ = ah.hQ, lZ = am.lZ, oD = aE.data.aIncomeValue, aC = am.lU - 1; 0 <= aC; aC--) {
							var hA = lZ[aC];
							bD.gy.h1(hA, bO.g3(oD * hQ[hA], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hQ = ah.hQ, lZ = am.lZ, oD = aE.data.aIncomeData, aC = am.lU - 1; 0 <= aC; aC--) {
								var hA = lZ[aC];
								bD.gy.h1(hA, bO.g3(oD[hA] * hQ[hA], 128))
							}
						}();
					aOC(18)
				}
			}(), bi.kv() % 100 == 99)) {
			if (aOA(), 0 === aE.data.tIncomeType) aOD(32);
			else if (1 === aE.data.tIncomeType) aOD(aE.data.tIncomeValue);
			else
				for (var hQ = ah.hQ, lZ = am.lZ, oD = aE.data.tIncomeData, aC = am.lU - 1; 0 <= aC; aC--) {
					var hA = lZ[aC];
					bD.gy.h1(hA, bO.g3(oD[hA] * hQ[hA], 32))
				}
			aOC(8)
		}
	}, this.ke = function(player) {
		return Math.min(100 * ah.hQ[player], aE.a8C)
	}, this.r3 = function(player, r4) {
		bu.rQ(player, r4, bR.g9[0], 0), bD.gy.h1(r4, bR.g9[0]), bg.rR(player, r4), ag.aO3(player, bR.g9[0] + bR.g9[1]), ag.rS(r4, bR.g9[0]), bD.gy.n8(player)
	}, this.aO4 = function() {
		for (var fc = am.lU, wP = am.lZ, lt = 0, a7H = ah.he, aC = 0; aC < fc; aC++) lt += a7H[wP[aC]];
		return lt
	}, this.aO5 = function(aO6) {
		for (var hA, fc = am.lU, wP = am.lZ, lt = 0, a7H = ah.he, fa = bj.fa, aC = 0; aC < fc; aC++) fa[hA = wP[aC]] === aO6 && (lt += a7H[hA]);
		return lt
	}
}

function cg() {
	var aOH, aOI, aOJ, aOK, aOL, aOM, aON, aOO, aOP, aOQ, aOR, aOS, aOT, aOU, aOV, aOW, aOX, aOY, aOa, aOb, aGU, aOc, aOd, aOj, aOk, aOZ = null,
		aOf = 0,
		aOg = !1,
		aOh = new Float32Array(4),
		aOi = 0,
		aES = 112,
		aOl = 0;

	function sm() {
		aOP = Math.floor(+i.iq), aOQ = Math.floor(.5 * aOP), aOZ.width = i.j, aOZ.height = i.k, aOa = aOZ.getContext("2d", {
			alpha: !0
		}), bD.sF.textAlign(aOa, 1), bD.sF.textBaseline(aOa, 1), aOa.imageSmoothingEnabled = !0
	}

	function aOm() {
		var aC, aOr;
		for (yJ.font = bD.sF.sI(1, 100 * aOR), aOr = 80 / Math.floor(yJ.measureText(bD.tg.a2y(aE.a7J)).width), yJ.font = bD.sF.sI(1, 100), aC = aE.fZ - 1; 0 <= aC; aC--) aOO[aC] = 100 / Math.floor(yJ.measureText(ah.a2A[aC]).width), aON[aC] = Math
			.min(aOr, aOO[aC])
	}

	function aOs(aC) {
		return !aOl || (aC = ah.he[aC]) < 1e6 ? 1 : aC < 1e7 ? aOh[0] : aOh[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aOq(ih) {
		aOg = !1, aOf = bi.ec, aOY = !1, aOX = 1, aOV = aOW = 0, ih.clearRect(0, 0, i.j, i.k);
		for (var aOy, aOz, aC, aP0, fontSize, aP1, o1 = jH / ir, o2 = jI / ir, oE = (i.j + jH) / ir, oF = (i.k + jI) / ir, aP2 = 0 !== ah.na[aE.fM] && !bD.gy.kL(aE.fM), fv = am.lU - 1; 0 <= fv; fv--) aC = am.lZ[fv], (fontSize = Math.floor(aOU * ir *
			aOs(aC) * aON[aC] * aOL[aC])) < aOT || aOP <= fontSize || aOJ[aC] + aOL[aC] > o1 && aOJ[aC] < oE && aOK[aC] + aOM[aC] > o2 && aOK[aC] < oF && (aOy = Math.floor(i.j * (aOJ[aC] + aOL[aC] / 2 - o1) / (oE - o1)), aOz = Math.floor(i.k * (
			aOK[aC] + aOM[aC] / 2 - o2) / (oF - o2) - .1 * fontSize), aP0 = ad.aCN[aC], ih.font = bD.sF.sI(1 === ah.a77[aC] ? 4 : 1, fontSize), ih.fillStyle = aP3(fontSize, aP0 % 2), aOl ? aP4(ih, aC, fontSize, aOy, aOz, aP0) : aP5(aC,
			fontSize, aOy, aOz, ih), aOY = !0, 0 < aGU[aC] ? function(aOy, aOz, fontSize, aC, ih) {
			0 === kj[aC] ? ak.tx.a2p(aOb[aC]) ? (function(aOy, aOz, fontSize, player, rF, ih) {
				for (var a0p = aOz, ig = (ih.globalAlpha = aPD(fontSize), aOs(player) * (aOl ? aOi : aOO[player])), a0o = aOy - .5 * fontSize / ig - .9 * fontSize, fw = 0; fw < 2; fw++) ih.fillText(ak.tx.a2h(rF), a0o, a0p), a0o =
					aOy + .5 * fontSize / ig + .9 * fontSize;
				ih.globalAlpha = 1
			}(aOy, aOz, fontSize, aC, aOb[aC], ih), aP7(aOy, aOz, fontSize, 0, 0, ih)) : ak.tx.a2r(aOb[aC]) ? (aPG(aOy, aOz, fontSize, aOb[aC], 0, ih), aP7(aOy, aOz, fontSize, 0, 1, ih)) : (aPG(aOy, aOz, fontSize, aOb[aC], 1, ih), aP7(
				aOy, aOz, fontSize, 1, 0, ih)) : aPG(aOy, aOz, fontSize, aOb[aC], 0, ih)
		}(aOy, aOz, fontSize, aC, ih) : 0 === kj[aC] && aP7(aOy, aOz, fontSize, 0, 0, ih), aP2 && (0 < aGU[aC + aE.fZ] || 0 < aGU[aC + 2 * aE.fZ] || 0 < aGU[aC + 3 * aE.fZ] || 0 < aGU[aC + 4 * aE.fZ]) && function(aOy, aOz, fontSize, aC, ih) {
			var em, h5 = -1;
			for (em = 4; 1 <= em; em--) 0 < aGU[aC + em * aE.fZ] && h5++;
			for (em = 1; em < 5; em++) 0 < aGU[aC + em * aE.fZ] && (! function(aOy, aOz, fontSize, em, aC, aPB, ed, ih) {
				var a6X;
				if (1 === em) {
					aC = aOb[aC + aE.fZ];
					if (!ak.tx.a2q(aC)) return function(aOy, aOz, fontSize, rF, aPB, ih) {
						ih.globalAlpha = aPD(fontSize);
						aOy -= .534 * aPB * fontSize, aPB = aOz + 1.59 * fontSize;
						ih.font = bD.sF.sI(0, .785 * fontSize), ih.fillText(ak.tx.a2h(rF), aOy, aPB), ih.globalAlpha = 1
					}(aOy, aOz, fontSize, aC, aPB, ih);
					a6X = ak.a0H.a2G[aC - 1024 + ak.tx.a2S]
				} else a6X = 2 === em ? aM.a95()[4].canvas[+(ed < 255)] : (3 === em ? aM.a95()[5] : aM.a95()[6]).canvas[0];
				aC = ak.a0H.a2H, ed = .8 * fontSize / aC, em = aOy - .5 * ed * aC - .534 * aPB * fontSize, aOy = aOz + 1.4 * ed * aC;
				ih.setTransform(ed, 0, 0, ed, em, aOy), ih.globalAlpha = aPD(fontSize), ih.drawImage(a6X, 0, 0), ih.globalAlpha = 1, ih.setTransform(1, 0, 0, 1, 0, 0)
			}(aOy, aOz, fontSize, em, aC, h5, aGU[aC + em * aE.fZ], ih), h5 -= 2)
		}(aOy, aOz, fontSize, aC, ih), (aP1 = aOR * fontSize) < aOT || (ih.font = bD.sF.sI(1, aP1), aOz += Math.floor(.78 * fontSize), aOl ? aP5(aC, aP1, aOy, aOz, ih) : aP4(ih, aC, aP1, aOy, aOz, aP0)))
	}

	function aP5(aC, fontSize, fj, fl, ih) {
		var ___id = aC;
		var showName = aC < aE.ky || !__fx.settings.hideBotNames;
		var eliminationEstimate = __fx.settings.showEstimatedEliminationAttack ?
			__fx.utils.getEstimatedEliminationAttack(___id, ah.he[___id] - ah.a7G[___id]) :
			"";
		if (showName) ih.fillText(ah.a2A[aC], fj, fl), aC < aE.ky && 2 !== ah.a77[aC] || (aC = fontSize / aOO[aC], ih.fillRect(fj - .5 * aC, fl + bD.sF.a2i * fontSize, aC, Math.max(1, .1 * fontSize)));
		aOl && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (ih.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			ih.fillText(__fx.utils.getDensity(___id), fj, showName ? fl + fontSize : fl),
			eliminationEstimate && ih.fillText(eliminationEstimate, fj, showName ? fl + 2 * fontSize : fl + fontSize)
		);
	}

	function aP4(ih, aC, fontSize, aOy, aOz, aP0) {
		var ed, a7G = ah.a7G[aC],
			aPA = bD.tg.a2y(ah.he[aC] - a7G);

		function drawDensity() {
			var eliminationEstimate;
			!aOl && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (ih.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), ih.fillText(__fx.utils.getDensity(aC), aOy, aOz + fontSize), eliminationEstimate = __fx.settings
				.showEstimatedEliminationAttack ? __fx.utils.getEstimatedEliminationAttack(aC, ah.he[aC] - a7G) : "") && ih.fillText(eliminationEstimate, aOy, aOz + 2 * fontSize)
		}
		a7G ? (ed = ih.fillStyle, ih.fillStyle = aP3(fontSize, 2 + aP0 % 2), ih.fillText(aPA, aOy, aOz), ih.fillStyle = ed) : aP0 >> 1 & 1 ? (ih.lineWidth = .05 * fontSize, ih.strokeStyle = aP3(fontSize, aP0 % 2), ih.strokeText(aPA, aOy, aOz)) : (1 <
			aP0 && (ih.lineWidth = .12 * fontSize, ih.strokeStyle = aP3(fontSize, aP0), ih.strokeText(aPA, aOy, aOz)), ih.fillText(aPA, aOy, aOz)), drawDensity()
	}

	function aP7(aOy, aOz, fontSize, aPB, aPC, ih) {
		var a9a = .95 * fontSize / aOd,
			aOy = aOy - .5 * a9a * aOc + .8 * aPB * fontSize,
			aPB = aOz - 1.76 * a9a * aOd - (.35 - bD.sF.a2i + .7) * aPC * fontSize;
		ih.setTransform(a9a, 0, 0, a9a, aOy, aPB), ih.globalAlpha = aPD(fontSize), ih.drawImage(ac.get(4), 0, 0), ih.globalAlpha = 1, ih.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aPG(aOy, aOz, fontSize, rF, aPB, ih) {
		var iZ, a0o, a9a;
		ih.globalAlpha = aPD(fontSize), ak.tx.a2q(rF) ? (iZ = ak.a0H.a2H, ih.setTransform(a9a = 1.1 * fontSize / iZ, 0, 0, a9a, a0o = aOy - .5 * a9a * iZ - .8 * aPB * fontSize, a9a = aOz - 1.55 * a9a * iZ), ih.drawImage(ak.a0H.a2G[rF - 1024 + ak.tx
			.a2S], 0, 0), ih.setTransform(1, 0, 0, 1, 0, 0)) : (a0o = aOy - .8 * aPB * fontSize, a9a = aOz - (.35 - bD.sF.a2i + 1) * fontSize, ih.fillText(ak.tx.a2h(rF), a0o, a9a)), ih.globalAlpha = 1
	}

	function aP3(fontSize, aP0) {
		return aOQ <= fontSize && fontSize < aOP ? bj.aPI[aP0] + aPD(fontSize).toFixed(3) + ")" : bj.aPJ[aP0]
	}

	function aPD(fontSize) {
		return aOQ <= fontSize && fontSize < aOP ? 1 - (fontSize - aOQ) / (aOP - aOQ) : 1
	}

	function aPS(ig, j) {
		return 1 + Math.floor(aOS * ig * j)
	}

	function aPP(aC) {
		for (var left = aOJ[aC], fv = aOJ[aC] - ah.jW[aC] - 1; 0 <= fv; fv--)
			if (!aPU(aC, --left, aOK[aC], aOM[aC])) {
				left++;
				break
			} var right = aOJ[aC];
		for (fv = ah.jX[aC] - aOJ[aC] - aOL[aC]; 0 <= fv; fv--)
			if (!aPU(aC, ++right + aOL[aC] - 1, aOK[aC], aOM[aC])) {
				right--;
				break
			} var fj = Math.floor((left + right) / 2),
			top = aOK[aC];
		for (fv = aOK[aC] - ah.jY[aC] - 1; 0 <= fv; fv--)
			if (!aPV(aC, fj, --top, aOL[aC])) {
				top++;
				break
			} var bottom = aOK[aC];
		for (fv = ah.jZ[aC] - aOK[aC] - aOM[aC]; 0 <= fv; fv--)
			if (!aPV(aC, fj, ++bottom + aOM[aC] - 1, aOL[aC])) {
				bottom--;
				break
			} var fl = Math.floor((top + bottom) / 2);
		aPM(aC, fj, fl, aOL[aC], aOM[aC]) && (aOJ[aC] = fj, aOK[aC] = fl)
	}

	function aPM(player, fj, fl, j, k) {
		ff = Math.floor(.2 * j);
		for (var ff, em = fj + j - 1; fj <= em; em--)
			if (!aPU(player, em, fl, k)) return;
		for (em = fl + k - 1 - (ff = (ff = Math.floor(.25 * k)) < 1 ? 1 : ff); fl + ff <= em; em--)
			if (!aPV(player, fj, em, j)) return;
		return 1
	}

	function aPU(player, fj, fl, k) {
		return ad.a1g(player, 4 * (fl * bV.fn + fj)) && ad.a1g(player, 4 * ((fl + k - 1) * bV.fn + fj))
	}

	function aPV(player, fj, fl, j) {
		return ad.a1g(player, 4 * (fl * bV.fn + fj)) && ad.a1g(player, 4 * (fl * bV.fn + fj + j - 1))
	}
	this.dm = function() {
		if (aOl = bm.buffer.data[7].value || 8 === aE.lG, aOY = !1, aOU = .88, aOR = .5, aOS = 1.8, aOT = 12 - 3 * bm.buffer.data[9].value, aOI = aOH = 0, aOJ = new Uint16Array(aE.fZ), aOK = new Uint16Array(aE.fZ), aOL = new Uint16Array(aE.fZ),
			aOM = new Uint16Array(aE.fZ), aON = new Float32Array(aE.fZ), aOO = new Float32Array(aE.fZ), aOb = new Uint16Array(2 * aE.fZ), aGU = new Uint8Array(5 * aE.fZ), aOj = new Uint8Array(aE.fZ), aOk = new Uint8Array(aE.fZ), aOZ = aOZ ||
			document.createElement("canvas"), sm(), aOW = aOV = 0, aOX = 1, aOl) {
			var aC, aOr;
			for (aOm(), yJ.font = bD.sF.sI(1, 100), aOr = 100 / Math.floor(yJ.measureText("900 000").width), aC = aE.fZ - 1; 0 <= aC; aC--) aON[aC] = Math.min(aOr, 2 * aOO[aC]);
			aOi = aOr, aOh[0] = 100 / (aOr * Math.floor(yJ.measureText("5 000 000").width)), aOh[1] = 100 / (aOr * Math.floor(yJ.measureText("50 000 000").width)), aOh[2] = 100 / (aOr * Math.floor(yJ.measureText("500 000 000").width)), aOh[3] =
				100 / (aOr * Math.floor(yJ.measureText("1 000 000 000").width))
		} else aOm();
		! function() {
			var aC;
			for (aC = aE.fZ - 1; 0 <= aC; aC--) ah.hQ[aC] < 12 ? (aOJ[aC] = ah.jW[aC] + 1, aOK[aC] = ah.jY[aC] + 1, aOL[aC] = 1, aOM[aC] = 1) : (aOJ[aC] = ah.jW[aC], aOK[aC] = ah.jY[aC] + 1, aOL[aC] = 4, aOM[aC] = 2);
			if (aE.i1)
				for (aC = 0; aC < aE.ky; aC++) aOL[aC] = 0;
			aOc = ac.get(4).width, aOd = ac.get(4).height
		}()
	}, this.aO3 = function(hA, a8o) {
		a8o > 18 * ah.hQ[hA] ? (aOk[hA] = 6, ad.aCN[hA] = 2 + ad.aCN[hA] % 2) : (aOj[hA] = 4, (ad.aCN[hA] < 2 || 3 < ad.aCN[hA]) && (ad.aCN[hA] = 6 + ad.aCN[hA] % 2))
	}, this.rS = function(hA, a8o) {
		a8o > 6 * ah.hQ[hA] ? (aOk[hA] = 6, ad.aCN[hA] = 4 + ad.aCN[hA] % 2) : (aOj[hA] = 4, (ad.aCN[hA] < 4 || 5 < ad.aCN[hA]) && (ad.aCN[hA] = 8 + ad.aCN[hA] % 2))
	}, this.resize = function() {
		sm(), aOq(aOa)
	}, this.a88 = function() {
		for (var aC = 0; aC < aE.ky; aC++) ah.jX[aC] - ah.jW[aC] != 3 || ah.jZ[aC] - ah.jY[aC] != 3 ? (aOJ[aC] = ah.jW[aC] + (ah.jX[aC] !== ah.jW[aC] ? 1 : 0), aOK[aC] = ah.jY[aC], aOL[aC] = 1, aOM[aC] = 1) : (aOJ[aC] = ah.jW[aC], aOK[aC] = ah
			.jY[aC] + 1, aOL[aC] = 4, aOM[aC] = 2)
	}, this.s5 = function(player, eL, aOt) {
		! function(player, eL, aOt) {
			player += eL * aE.fZ;
			0 === eL ? aOb[player] === aOt && 0 < aGU[player] ? aGU[player] = 0 : (aOb[player] = aOt, aGU[player] = ak.tx.a2p(aOt) ? 255 : 64) : 1 === eL ? (aGU[player] = 64, aOb[player] = aOt) : aGU[player] = aOt
		}(player, eL, aOt), 2 === aE.a3f && this.nM(!0)
	}, this.yI = function() {
		aOY && (1 !== aOX ? (yJ.imageSmoothingEnabled = !0, yJ.setTransform(aOX, 0, 0, aOX, 0, 0), yJ.drawImage(aOZ, -aOV / aOX, -aOW / aOX), yJ.setTransform(1, 0, 0, 1, 0, 0), yJ.imageSmoothingEnabled = !1) : yJ.drawImage(aOZ, -aOV, -aOW))
	}, this.aDA = function(j0, j3) {
		aOV += j0, aOW += j3
	}, this.a5E = function(j0, j3) {
		ag.aDA(j0, j3)
	}, this.zoom = function(a66, mD, mE) {
		aOX *= a66, aOV = (aOV + mD) * a66 - mD, aOW = (aOW + mE) * a66 - mE
	}, this.aMQ = function(player) {
		var jW = ah.jW[player],
			jX = ah.jX[player],
			jY = ah.jY[player],
			jZ = ah.jZ[player],
			jB = bP.ht(0),
			jC = bP.hv(0),
			jD = bP.ht(i.j),
			jE = bP.hv(i.k);
		jW < jD && jB < jX && jY < jE && jC < jZ && (aOL[player] = 0, aOg = !0)
	}, this.nM = function(bz) {
		return !(!aOg && !bz && bi.ec < aOf + (1 === aOX && 0 === aOV && 0 === aOW && (aE.a8c() || aE.i1 || 2 === aE.a3f) ? 1e3 : aES) || (aOq(aOa), 0))
	}, this.aOw = function(aC) {
		return aOs(aC) * aON[aC]
	}, this.aOx = function(player) {
		return aON[player]
	}, this.eh = function() {
		bi.kv() % 10 == 9 && (aOg = aOg || aE.a8e() && !aE.a8c()), !aE.a8c() && 4 <= ++aOI && function() {
			var aC, fv, fw;
			for (aOI = 0, fw = 4; 1 <= fw; fw--)
				for (fv = am.lU - 1; 0 <= fv; fv--) aC = am.lZ[fv] + fw * aE.fZ, 0 < aGU[aC] && aGU[aC] < 255 && aGU[aC]--;
			if (2 !== aE.a3f)
				for (fv = am.lU - 1; 0 <= fv; fv--) aC = am.lZ[fv], 0 < aGU[aC] && aGU[aC] < 255 && aGU[aC]--
		}();
		var aC, fv, fc = Math.floor(.1 * am.lU);
		for (fc = (fc = fc < 8 ? 8 : fc) > am.lU ? am.lU : fc, aC = aOH + fc - 1; aOH <= aC; aC--) fv = aC % am.lU, ! function(aC) {
			var ig = aOs(aC) * aON[aC];
			0 < aOL[aC] && aPM(aC, aOJ[aC], aOK[aC], aOL[aC], aOM[aC]) ? ! function(aC) {
				for (var fj, fl, j, k, fG = !1, fw = 0; fw < 8; fw++) {
					if (j = aOL[aC] + 2, k = aOM[aC] + 2, j > ah.jX[aC] - ah.jW[aC] + 1 || k > ah.jZ[aC] - ah.jY[aC] + 1) return fG;
					if (fj = aOJ[aC] - 1, fl = aOK[aC] - 1, !aPM(aC, fj, fl, j, k)) return fG;
					aOJ[aC] = fj, aOK[aC] = fl, aOL[aC] = j, aOM[aC] = k, fG = !0
				}
				return fG
			}(aC) && function(aC, ig) {
				for (var fj, fl, j, k, fG = !1, aGd = aOL[aC], oD = 1 + Math.floor(.02 * aGd), fw = 1; fw < 5; fw++) {
					if ((j = aGd + fw * oD) > ah.jX[aC] - ah.jW[aC] + 1) return fG;
					if ((k = aPS(ig, j)) > ah.jZ[aC] - ah.jY[aC] + 1) return fG;
					fj = ah.jW[aC] + Math.floor(Math.random() * (ah.jX[aC] - ah.jW[aC] + 2 - j)), fl = ah.jY[aC] + Math.floor(Math.random() * (ah.jZ[aC] - ah.jY[aC] + 2 - k)), aPM(aC, fj, fl, j, k) && (aOJ[aC] = fj, aOK[aC] = fl, aOL[
						aC] = j, aOM[aC] = k, fG = !0)
				}
				return fG
			}(aC, ig) && aPP(aC) : ! function(aC, ig) {
				var k, fj = aOJ[aC] + 1,
					fl = aOK[aC] + 1,
					j = aOL[aC] - 2;
				for (;;) {
					if (j < 1) {
						aOL[aC] = 0;
						break
					}
					if (k = aPS(ig, j), aPM(aC, fj, fl, j, k)) return aOJ[aC] = fj, aOK[aC] = fl, aOL[aC] = j, aOM[aC] = k, 1;
					fj++, fl++, j -= 2
				}
				return
			}(aC, ig) ? function(aC, ig) {
				var fj, fl, j, k, fw, oJ, kE = ah.jX[aC] - ah.jW[aC] + 1,
					aPT = Math.floor(.02 * kE);
				for (oJ = -6 * (aPT = aPT < 1 ? 1 : aPT), fw = kE; oJ <= fw; fw -= aPT)
					if (k = aPS(ig, j = 0 < fw ? fw : 1), fj = ah.jW[aC] + Math.floor(Math.random() * (ah.jX[aC] - ah.jW[aC] + 2 - j)), fl = ah.jY[aC] + Math.floor(Math.random() * (ah.jZ[aC] - ah.jY[aC] + 2 - k)), aPM(aC, fj, fl, j, k))
						return aOJ[aC] = fj, aOK[aC] = fl, aOL[aC] = j, aOM[aC] = k
			}(aC, ig) : aPP(aC)
		}(am.lZ[fv]);
		aOH = (aOH += fc) % am.lU
	}, this.nG = function() {
		var aC, hA, a2n, a2o;
		if (bi.kv() % 4 == 1)
			for (aC = am.lU - 1; 0 <= aC; aC--) hA = am.lZ[aC], ad.aCN[hA] < 2 || ((a2n = Math.max(aOj[hA] - 1, 0)) === (a2o = Math.max(aOk[hA] - 1, 0)) ? 0 === a2n && (ad.aCN[hA] %= 2) : 0 === a2o && ad.aCN[hA] < 6 && (ad.aCN[hA] += 4), aOj[
				hA] = a2n, aOk[hA] = a2o)
	}, this.aAK = function(player) {
		var aC = player + 2 * aE.fZ,
			ed = aGU[aC];
		return 0 < ed && (aO.a3n(50, player), aGU[aC] = 0, 255 === ed)
	}, this.a9K = function(player) {
		return 255 === aGU[player + 2 * aE.fZ]
	}
}

function ci() {
	var aPW, aPX, aPY;
	this.dm = function() {
		aPW =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aPX =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aPY = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aAb = ["K ", " Y", "E ", " Z", " z", " s", "S "], aHy = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aPW.length - 1; 0 <= aC; aC--)
			for (var fv = aAb.length - 1; 0 <= fv; fv--) aPW[aC] = aPW[aC].replace(aAb[fv], aHy[fv]);
		if (__fx.settings.realisticNames) aPW = realisticNames;
	}, this.a8P = function() {
		var fc = aE.ky,
			a2A = ah.a2A,
			a4O = ah.a4O,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fc)
			for (var aC = 0; aC < fc; aC++) a2A[aC] = a4O[aC] = "Player " + az.kF(1e3);
		else
			for (aC = 0; aC < fc; aC++) a2A[aC] = a4O[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.lG) {
			for (var eK = az.random(), aPe = aPY, aPf = aPX, iM = aF.iM, fc = aPe.length, lt = aE.data.teamPlayerCount[7], a2A = ah.a2A, a4O = ah.a4O, aC = lt - 1; aC >= aE.ky; aC--) a2A[aC] = a4O[aC] = aPe[(aC + eK) % fc];
			for (fc = aPf.length - 1, aC = lt; aC < aE.fZ; aC++) a2A[aC] = a4O[aC] = aPf[iM[aC] ? fc : aC % fc]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fc = aE.fZ, a2A = ah.a2A, a4O = ah.a4O, playerNamesData = aE.data.playerNamesData, aC = aE.ky; aC < fc; aC++) a2A[aC] = a4O[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var a2A = ah.a2A, a4O = ah.a4O, aC = aE.ky; aC < aE.fZ; aC++) a2A[aC] = a4O[aC] = "Bot " + az.kF(1e3)
		} : function() {
			for (var aPg = aPW, fc = aPg.length, eK = az.random(), a2A = ah.a2A, a4O = ah.a4O, aC = aE.ky; aC < aE.fZ; aC++) a2A[aC] = a4O[aC] = aPg[(aC + eK) % fc]
		})()
	}
}

function d1() {
	this.aPh = [], this.aPi = [], this.dm = function() {
		this.aPh = [], this.aPi = []
	}, this.eh = function() {
		0 <= this.aPh.length && this.aPj(this.aPh), 0 <= this.aPi.length && this.aPj(this.aPi)
	}, this.aPj = function(h) {
		for (var fw = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].ec--, h[aC].ec <= 0) {
				fw = aC;
				break
			} for (aC = fw; 0 <= aC; aC--) h.shift()
	}, this.a9D = function(id, wP, aPk) {
		return this.fx(this.aPh, id, wP, aPk)
	}, this.aPl = function(id, wP, aPk) {
		return this.fx(this.aPi, id, wP, aPk)
	}, this.fx = function(h, id, wP, aPk) {
		return ! function(h, id, wP) {
			var aC, iV;
			for (aC = wP.length - 1; 0 <= aC; aC--)
				for (iV = h.length - 1; 0 <= iV; iV--)
					if (h[iV].player === wP[aC] && id === h[iV].id) return 1;
			return
		}(h, id, wP) && (aPk && function(h, id, wP) {
			var aC;
			for (aC = wP.length - 1; 0 <= aC; aC--) h.push({
				player: wP[aC],
				id: id,
				ec: 384
			})
		}(h, id, wP), !0)
	}
}

function ch() {
	this.a4O = new Array(aE.fZ), this.a2A = new Array(aE.fZ), this.a77 = new Uint8Array(aE.fZ), this.na = new Uint8Array(aE.fZ), this.jW = new Uint16Array(aE.fZ), this.jY = new Uint16Array(aE.fZ), this.jX = new Uint16Array(aE.fZ), this.jZ =
		new Uint16Array(aE.fZ), this.hQ = new Uint32Array(aE.fZ), this.a1G = new Uint32Array(aE.fZ), this.he = new Uint32Array(aE.fZ), this.h4 = null, this.hI = null, this.hJ = null, this.g1 = null, this.rv = new Uint16Array(aE.fZ), this.k1 =
		new Uint16Array(aE.fZ), this.k2 = new Uint16Array(aE.fZ), this.a4J = new Uint16Array(aE.fZ), this.a4H = new Uint8Array(aE.fZ), this.a7G = new Uint16Array(aE.fZ), this.dm = function() {
			this.a4O.fill(""), this.a2A.fill(""), this.a77.fill(0), this.na.fill(0), this.jW.fill(0), this.jY.fill(0), this.jX.fill(0), this.jZ.fill(0), this.hQ.fill(0), this.a1G.fill(0), this.he.fill(0), this.h4 = new Array(aE.fZ), this.hI =
				new Array(aE.fZ), this.hJ = new Array(aE.fZ), this.g1 = new Array(aE.fZ), this.rv.fill(0), this.k1.fill(0), this.k2.fill(0), this.a4J.fill(0), this.a4H.fill(0), this.a7G.fill(0)
		}
}

function cz() {
	this.aH6 = function(player) {
		aH.nZ(player), aE.a3h++, ah.a77[player] = 2, ah.a4J[player] = bl.a4Y.aMZ(), player === aE.fM && (aY.show(!1, !1), aX.aF9(), bU.a3R.a4F()), ag.aAK(player)
	}
}

function ca() {
	this.lZ = null, this.lU = 0, this.a8T = function() {
		for (this.lU = 0, aC = aE.fZ - 1; 0 <= aC; aC--) 0 !== ah.na[aC] && this.lU++;
		this.lZ = new Uint16Array(this.lU);
		for (var fc = 0, aC = 0; aC < aE.fZ; aC++) 0 !== ah.na[aC] && (this.lZ[fc++] = aC)
	}, this.nF = function() {
		for (var hQ = ah.hQ, a1G = ah.a1G, a4H = ah.a4H, lZ = am.lZ, aC = am.lU - 1; 0 <= aC; aC--) {
			var hA = lZ[aC],
				ed = hQ[hA],
				lt = a1G[hA];
			ed <= bO.g3(lt, 4) ? al.dv(hA) : lt <= ed ? 250 <= (a1G[hA] = ed) && (a4H[hA] = 1) : a1G[hA] = lt - Math.max(1, bO.g3(lt - ed, 1e3))
		}
		this.aPp()
	}, this.aPp = function() {
		for (var na = ah.na, ls = this.lZ, aFr = this.lU, aC = aFr - 1; 0 <= aC; aC--) 0 === na[ls[aC]] && (ls[aC] = ls[--aFr]);
		this.lU = aFr
	}
}

function cb() {
	var aPq = new Uint16Array(aE.fZ),
		aPr = 0;

	function aPv(aAR, aPt) {
		var em = bi.kv();
		return 3213 <= em ? 4 + bO.g3(100 * aPt, af.ke(aAR)) : (aAR = 1 + bO.g3(aE.ki, 300), em < 357 ? 2 + bO.g3(100 * aPt, aAR) : em < 714 ? 2 + bO.g3(100 * aPt, 4 * aAR) : em < 1071 ? 2 + bO.g3(100 * aPt, 10 * aAR) : em < 2142 ? 2 + bO.g3(100 *
			aPt, 30 * aAR) : 2 + bO.g3(100 * aPt, 100 * aAR))
	}

	function aPu(aAR) {
		return aE.lI || 4284 <= bi.kv() || bD.gy.kL(aAR)
	}
	this.dm = function() {
		aPq.fill(0), aPr = 15
	}, this.iH = function(r4) {
		var player = aE.fM;
		return !!bD.gy.rx(player, r4) && !(!bD.gy.rN(player, bD.gy.jF(player, aS.i7()), r4) || (player = r4, r4 = bR.g9[0], !aPu(player) && aPq[player] + aPv(player, r4) > aPr))
	}, this.el = function(aAR, aPt) {
		if (!aPu(aAR)) {
			aPt = aPv(aAR, aPt);
			if (aPq[aAR] + aPt > aPr) return !1;
			aPq[aAR] += aPt
		}
		return !0
	}, this.eh = function() {
		bi.kv() % 100 == 99 && (bi.kv() < 1071 ? aPr += 4 : bi.kv() < 2142 ? aPr += 6 : bi.kv() < 3213 ? aPr += 8 : aPr += 10)
	}
}

function cj() {
	var aPw;
	this.lP = null, this.lO = 0, this.dm = function() {
		aPw = [], 9 === aE.lG && this.aPx()
	}, this.aPx = function() {
		this.lP = [0, 0, 0, 0, 0, 0];
		for (var aPy = [254, 227, 167, 149, 102, this.lO = 0, 0, 0], aPz = [0, 8, 24, 30, 46, 80, 256, 333], aQ0 = [0, 0, 3, 9, 17, 25, 150, 179], k = aE.ky, aC = 1; aC < aPy.length; aC++)
			if (k <= aPz[aC]) {
				this.lO = aPy[aC - 1] - bO.g3((k - aPz[aC - 1]) * (aPy[aC - 1] - aPy[aC]), aPz[aC] - aPz[aC - 1]), this.lP[5] = aQ0[aC - 1] - bO.g3((k - aPz[aC - 1]) * (aQ0[aC - 1] - aQ0[aC]), aPz[aC] - aPz[aC - 1]), this.lP[0] = aE.fZ - k - this
					.lO - this.lP[5];
				break
			} aE.lK = aE.fZ - aE.ky, aE.data.numberTeams = (0 < aE.ky) + (0 < aE.lK), aE.data.playerCount = aE.a0m = aE.ky + aE.lK, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.ky + this.lO, aE.lK - this.lO]), aE.a8H.a8N()
	}, this.aMg = function(player) {
		aPw.push({
			player: player,
			h5: 14 + az.kF(20)
		})
	}, this.eh = function() {
		if (9 === aE.lG)
			for (var aC = aPw.length - 1; 0 <= aC; aC--) --aPw[aC].h5 <= 0 && (ag.s5(aPw[aC].player, 0, ak.tx.a2V + ak.tx.a2j), aPw.splice(aC, 1))
	}
}

function dI() {
	this.aQ2 = 25, this.aQ3 = 13, this.aMs = 4096, this.fn = 0, this.fo = 0, this.a0E = null, this.a0A = null, this.a0B = null, this.a0F = null, this.fI = 0, this.mapSeed = 0, this.a0C = !1, this.a0D = new aQ4, this.wg = new aQ5, this.aAi = new aQ6;
	var aQ7 = {
		aQ8: function() {},
		dm: function() {}
	};

	function aQH() {
		return {
			fn: bV.fn,
			fo: bV.fo,
			a0E: bV.a0E,
			a0A: bV.a0A,
			a0B: bV.a0B,
			a0F: bV.a0F,
			fI: bV.fI,
			mapSeed: bV.mapSeed,
			a0C: bV.a0C
		}
	}

	function aQI(g4) {
		bV.fn = g4.fn, bV.fo = g4.fo, bV.a0E = g4.a0E, bV.a0A = g4.a0A, bV.a0B = g4.a0B, bV.a0F = g4.a0F, bV.fI = g4.fI, bV.mapSeed = g4.mapSeed, bV.a0C = g4.a0C
	}

	function aQA(aC) {
		return !(1 === aC || !bV.aID(aC) || aC === bV.aQM())
	}
	this.dm = function() {
		this.wg.dm()
	}, this.a8 = function(map, aQ9) {
		((map %= this.aQ2) !== this.fI || aQA(this.fI) && aQ9 !== this.mapSeed) && (this.a0C = !1, this.a0D.aQ8(), az.a8O(map), this.fI = map, this.mapSeed = aQ9, aQA(map) && (bV.wg.a05[map].aQB = aQ9), this.aID(this.fI) ? (map = bV.wg.a05[this
			.fI], this.fn = map.j, this.fo = map.k, az.a8O(map.aQB), ar.a8([this.fn, this.fo, map.nf, map.nc]), aQD(), aq.aQE(), ar.aQF()) : aQC())
	}, this.aQG = function(map, aQ9) {
		var gL = aQH(),
			map = (this.a8(map, aQ9), this.a0D.aQ8(), aQH());
		return aQI(gL), map
	}, this.aJA = function(map, aQ9) {
		var gL = aQH(),
			aQB = az.aQJ(),
			aQK = this.wg.a05[map].aQB,
			aQL = this.a0D,
			aQ9 = (this.a0D = aQ7, this.a8(map, aQ9), this.a0E);
		return this.a0D = aQL, this.wg.a05[map].aQB = aQK, az.a8O(aQB), aQI(gL), aQ9
	}, this.a8k = function(canvas) {
		canvas && this.a0E !== canvas && (this.fn = canvas.width, this.fo = canvas.height, this.a0E = canvas, this.a0A = this.a0E.getContext("2d", {
			alpha: !1
		}), this.ic = this.a0A.getImageData(0, 0, this.fn, this.fo), this.a0F = this.ic.data, this.fI = this.aQM(), this.mapSeed = 0, bV.wg.a05[this.fI].name = aE.data.mapName)
	}, this.fH = function(aC) {
		return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aQM()
	}, this.aQN = function(aC) {
		return 2 === aC || 7 === aC || 9 === aC || 20 === aC
	}, this.aQO = function(aC) {
		return 1 === aC
	}, this.aQM = function() {
		return this.aQ2
	}, this.aID = function(aC) {
		return void 0 === this.wg.a05[aC].aQP
	}, this.aJ5 = aQA, this.a8j = function(sc) {
		return 0 === sc.mapType ? sc.mapProceduralIndex < 10 ? sc.mapProceduralIndex : 10 + sc.mapProceduralIndex : 1 === sc.mapType ? 10 <= sc.mapRealisticIndex ? 22 + sc.mapRealisticIndex - 10 : sc.mapRealisticIndex + 10 : void 0
	}, this.aIE = function(sc, aQQ) {
		0 === sc.mapType ? sc.mapProceduralIndex = aQQ < 10 ? aQQ : aQQ - 10 : 1 === sc.mapType && (sc.mapRealisticIndex = aQQ - (22 <= aQQ ? 12 : 10))
	}
}

function aQ4() {
	function aQZ() {
		bV.a0D.eh()
	}

	function aQe(hA, aQd) {
		0 < aQd && (bV.a0F[hA] += aQd, bV.a0F[hA + 1] += aQd, bV.a0F[hA + 2] += aQd)
	}

	function iu(hA) {
		return bV.a0F[hA + 2] > bV.a0F[hA] && bV.a0F[hA + 2] > bV.a0F[hA + 1]
	}
	this.aDM = -1, this.a4l = 0, this.aQR = 0, this.aQS = 8, this.aQT = 32, this.aQU = 8, this.aQV = 32, this.aQW = [0, 0], this.aCN = [0, 0, 0, 0], this.jQ = null, this.aQX = !0, this.aQY = !1, this.aQ8 = function() {
		-1 !== this.aDM && clearTimeout(this.aDM), this.aDM = -1, this.jQ = null, ar.aQF()
	}, this.dm = function() {
		7 === ab.a4r() || this.aQY || (this.aQX = !0, this.a4l = 0, this.aQR = 1, this.aQW = [bV.wg.a05[bV.fI].a0W[0], bV.wg.a05[bV.fI].a0X[0]], this.aCN = [bV.wg.a05[bV.fI].aQP[3], bV.wg.a05[bV.fI].aQP[4], bV.wg.a05[bV.fI].aQP[5], bV.wg.a05[bV
			.fI].aQP[6]], this.aQS = bV.wg.a05[bV.fI].aQP[7], this.aQT = bV.wg.a05[bV.fI].aQP[8], this.aQU = bV.wg.a05[bV.fI].aQP[9], this.aQV = bV.wg.a05[bV.fI].aQP[10], this.aQX ? this.aDM = setTimeout(aQZ, 16) : this.eh())
	}, this.eh = function() {
		if (8 === ab.a4r() && aI.nt()) this.aDM = setTimeout(aQZ, 16);
		else {
			if (0 === this.a4l) {
				var aQB = az.aQJ();
				if (az.a8O(bV.wg.a05[bV.fI].aQP[2]), ar.a8([bV.fn, bV.fo, bV.wg.a05[bV.fI].aQP[0], bV.wg.a05[bV.fI].aQP[1]]), az.a8O(aQB), this.jQ = ar.aQa(), this.a4l++, this.aQX) return void(this.aDM = setTimeout(aQZ, 16))
			}
			for (var hA, fO, aQB = this.aQX ? 10 : 1e6, aQB = bV.fo - this.aQR - 1 < aQB ? bV.fo - this.aQR - 1 : aQB, a1T = this.aQR + aQB, fl = this.aQR; fl < a1T; fl++)
				for (var fj = 1; fj < bV.fn - 1; fj++) iu(hA = 4 * (fO = fj + fl * bV.fn)) ? this.aQb(hA, fO, 1) : (this.aQb(hA, fO, 0), function(fj, fl, hA) {
					return 1 < fj && iu(hA - 4) || fj < bV.fn - 2 && iu(hA + 4) || 1 < fl && iu(hA - 4 * bV.fn) || fl < bV.fo - 2 && iu(hA + 4 * bV.fn)
				}(fj, fl, hA) && this.aQc(fj, fl));
			this.aQR = a1T, this.aQR >= bV.fo - 1 ? (bV.a0A.putImageData(bV.a0B, 0, 0, 1, 1, bV.fn - 2, bV.fo - 2), bi.du = !0, this.aQ8()) : this.aQX && (this.aDM = setTimeout(aQZ, 16))
		}
	}, this.aQb = function(hA, fO, eL) {
		aQe(hA, Math.floor(this.aQW[eL] + this.aCN[eL] * this.jQ[fO] / 1e4) - bV.a0F[hA])
	}, this.aQf = function(hA, eK, aQg, eL, aCN) {
		aQe(hA, Math.floor(this.aQW[eL] + (1 - eK / aQg) * aCN) - bV.a0F[hA])
	}, this.aQc = function(mD, mE) {
		for (var hA, eK, aQg, aDC = mD - this.aQT, aQh = mE - this.aQT, a1U = mD + this.aQT, a1T = mE + this.aQT, aDC = aDC < 1 ? 1 : aDC, a1U = a1U > bV.fn - 2 ? bV.fn - 2 : a1U, a1T = a1T > bV.fo - 2 ? bV.fo - 2 : a1T, fl = aQh < 1 ? 1 :
			aQh; fl <= a1T; fl++)
			for (var fj = aDC; fj <= a1U; fj++) iu(hA = 4 * (fj + fl * bV.fn)) ? (aQg = this.aQS + (this.aQT - this.aQS) * this.jQ[fj + bV.fn * fl] / 1e4, Math.abs(mD - fj) > aQg || Math.abs(mE - fl) > aQg || aQg <= (eK = Math.sqrt((mD - fj) * (
				mD - fj) + (mE - fl) * (mE - fl))) || this.aQf(hA, eK, aQg, 1, this.aCN[3])) : (aQg = this.aQU + (this.aQV - this.aQU) * this.jQ[fj + bV.fn * fl] / 1e4, Math.abs(mD - fj) > aQg || Math.abs(mE - fl) > aQg || aQg <= (eK = Math
				.sqrt((mD - fj) * (mD - fj) + (mE - fl) * (mE - fl))) || this.aQf(hA, eK, aQg, 0, this.aCN[2]))
	}
}

function aQD() {
	var oS = aQi(bV.fI);
	oS && aQj(oS[0], oS[1], oS[2], oS[3], oS[4])
}

function aQi(fI) {
	return 2 === fI ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === fI ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === fI ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === fI ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === fI ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aQj(aQk, aQl, aQm, aQn, aQo) {
	for (var fj, fl, aNE, aNF, a66, aQr, iz = aQk.length - 1, aQp = bV.fn + bV.fo, fc = (aQp *= aQp, aQm.length), aQq = Array(fc), aC = fc - 1; 0 <= aC; aC--) aQq[aC] = aQm[aC] * aQm[aC];
	var aQs = new Array(fc),
		aGR = new Array(fc),
		aQt = new Array(fc),
		g4 = ar.aQa();
	if (void 0 === aQo)
		for (aQo = new Array(fc), aC = fc - 1; 0 <= aC; aC--) aQo[aC] = 0;
	for (aC = 1; aC < fc; aC++) aQs[aC] = aQq[aC] - aQq[aC - 1], aGR[aC] = aQn[aC] - aQn[aC - 1], aQt[aC] = aQo[aC] - aQo[aC - 1];
	for (fj = bV.fn - 1; 0 <= fj; fj--)
		for (fl = bV.fo - 1; 0 <= fl; fl--) {
			for (aNE = aQp, aC = iz; 0 <= aC; aC--) aNE = (aNF = (fj - aQk[aC]) * (fj - aQk[aC]) + (fl - aQl[aC]) * (fl - aQl[aC])) < aNE ? aNF : aNE;
			for (a66 = aQn[fc - 1], aQr = aQo[fc - 1], aC = 1; aC < fc; aC++)
				if (aNE < aQq[aC]) {
					a66 = aQn[aC - 1] + aM1((aNE - aQq[aC - 1]) * aGR[aC], aQs[aC]), aQr = aQo[aC - 1] + aM1((aNE - aQq[aC - 1]) * aQt[aC], aQs[aC]);
					break
				} aQu(bV.fn * fl + fj, a66, aQr, g4)
		}
}

function aQu(eL, a66, aQr, g4) {
	a66 < 500 ? g4[eL] = bO.g3(g4[eL] * a66 * 2, 1e3) : 500 < a66 && (g4[eL] += bO.g3(2 * (1e4 - g4[eL]) * (a66 - 500), 1e3)), g4[eL] += bO.g3(aQr * (10 * a66 - g4[eL]), 1e3)
}

function cl() {
	var aQv;

	function aR5(a6X, ig, fj, fl, globalAlpha) {
		bV.a0A.save(), bV.a0A.globalAlpha = globalAlpha, bV.a0A.imageSmoothingEnabled = !1, bV.a0A.scale(ig, ig), bV.a0A.drawImage(a6X, Math.floor(fj * (bV.fn / ig - a6X.width)), Math.floor(fl * (bV.fo / ig - a6X.height))), bV.a0A.restore()
	}
	this.aAf = 0, this.aAg = 0, this.aAh = 0, this.aAi = 0, this.dm = function() {
		(aQv = new Array(bV.aQ2))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eK: [220, 250, 255, 220],
			vI: [190, 220, 0, 0],
			fw: [170, 200, 0, 0]
		}, aQv[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eK: [25, 0, 100, 0, 25],
			vI: [25, 0, 0, 0, 25],
			fw: [25, 0, 0, 0, 25]
		}, aQv[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eK: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			vI: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fw: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aQv[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eK: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			vI: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fw: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aQv[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eK: [10, 10, 20, 10, 10, 170, 212],
			vI: [20, 20, 60, 100, 100, 110, 170],
			fw: [70, 70, 160, 30, 30, 60, 120]
		}, aQv[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eK: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			vI: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fw: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aQv[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eK: [10, 10, 60, 255, 255, 200, 200],
			vI: [10, 10, 60, 255, 255, 200, 200],
			fw: [80, 80, 255, 255, 255, 200, 200]
		}, aQv[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eK: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			vI: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fw: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aQv[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eK: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			vI: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fw: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aQv[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eK: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			vI: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fw: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aQv[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eK: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			vI: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fw: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aQv[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eK: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			vI: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fw: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aQE = function() {
		var aR4, aC, fv, gL, ic = function() {
				var ic;
				return bV.a0E = document.createElement("canvas"), bV.a0E.width = bV.fn, bV.a0E.height = bV.fo, bV.a0A = bV.a0E.getContext("2d", {
					alpha: !1
				}), ic = bV.a0A.getImageData(0, 0, bV.fn, bV.fo), bV.a0F = ic.data, ic
			}(),
			j = aQv[bV.fI].j,
			eK = aQv[bV.fI].eK,
			vI = aQv[bV.fI].vI,
			fw = aQv[bV.fI].fw,
			g4 = ar.aQa(),
			fc = j.length - 2,
			aQz = new Array(1 + fc),
			aR0 = new Array(1 + fc),
			aR1 = new Array(1 + fc),
			aR2 = new Array(1 + fc);
		for (fv = fc; 0 <= fv; fv--) aQz[fv] = j[fv + 1] - j[fv], aR0[fv] = eK[fv + 1] - eK[fv], aR1[fv] = vI[fv + 1] - vI[fv], aR2[fv] = fw[fv + 1] - fw[fv];
		for (aC = bV.fn * bV.fo - 1; 0 <= aC; aC--)
			for (fv = fc; 0 <= fv; fv--)
				if (g4[aC] >= j[fv]) {
					gL = g4[aC] - j[fv], bV.a0F[4 * aC] = eK[fv] + aM1(aR0[fv] * gL, aQz[fv]), bV.a0F[4 * aC + 1] = vI[fv] + aM1(aR1[fv] * gL, aQz[fv]), bV.a0F[4 * aC + 2] = fw[fv] + aM1(aR2[fv] * gL, aQz[fv]), bV.a0F[4 * aC + 3] = 255;
					break
				} bV.a0A.putImageData(ic, 0, 0), bV.aQO(bV.fI) && ac.vM() && bV.aQO(bV.fI) && (ic = ac.wW("arena"), aR4 = ac.wW("territorial.io"), aR5(ic, 5, .5, .5, .1), aR5(aR4, 2, .5, .45, .1)), bV.a0C = !0, bi.du = !0
	}, this.a8R = function() {
		for (var hA, fj, fl, aR6, iT, gN, aAg = 0, j = bV.fn, k = bV.fo, gL = j * k * 4, aR7 = aG0, aR8 = bV.a0F, aC = j - 1; 0 <= aC; aC--) aR7[(hA = aC << 2) + 2] = aR7[gL - hA - 2] = 3;
		for (gL = 4 * j, aC = k - 1; 0 <= aC; aC--) aR7[(hA = aC * gL) + 2] = aR7[hA + gL - 2] = 3;
		for (aR6 = j - 1, iT = k - 1, fl = 1; fl < iT; fl++)
			for (gL = fl * j, fj = 1; fj < aR6; fj++) gN = 1 - (aR8[(hA = gL + fj << 2) + 2] > aR8[hA + 1] && aR8[hA + 2] > aR8[hA]), aR7[hA + 2] = 6 - 5 * gN, aAg += gN;
		this.aAf = (j - 2) * (k - 2), this.aAi = 0, bV.fH(bV.fI) && (bV.aAi.aR9(), bV.aAi.aRA(4, 5)), this.aAg = aE.ki = aAg - this.aAi, this.aAh = this.aAf - this.aAg - this.aAi, this.aAh && (bV.aAi.aRA(6, 2), bV.aAi.aRB())
	}
}

function aQC() {
	var sA;
	10 === bV.fI ? sA =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bV.fI ? sA =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bV.fI ? sA =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bV.fI ? sA =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bV.fI ? sA =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bV.fI ? sA =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bV.fI ? sA =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bV.fI ? sA =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bV.fI ? sA =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bV.fI ? sA =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bV.fI ? sA =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bV.fI ? sA =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bV.fI && (sA =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new zy).a00(sA)
}

function aQ5() {
	this.a05 = null, this.aRC = null, this.aRD = null, this.wh = ["White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East",
		"Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Mare Nostrum"
	], this.dm = function() {
		this.aRE = [L(150), L(151), L(152), L(153), L(154), L(155), L(156), L(157), L(158), L(159), L(160), L(161), L(162), L(163), L(164), L(165), L(166), L(167), L(168), L(169), L(170), L(171), L(172), L(173), "Mare Nostrum"];
		var aRF = [120, 105, 92],
			cos = [12, 12, 60],
			aRG = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aRH = [140, 130, 120],
			aRI = [12, 12, 76],
			aRJ = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aRK = [130, 117, 106],
			aRL = [12, 12, 68],
			aRM = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.a05 = new Array(bV.aQ2 + 1), __fx.customLobby.setMapInfo(this.a05), this.a05[0] = {
			j: 230,
			k: 230,
			nf: 1e3,
			nc: 2e3,
			aQB: 173
		}, this.a05[1] = {
			j: 800,
			k: 800,
			nf: 100,
			nc: 50,
			aQB: 43
		}, this.a05[2] = {
			j: 512,
			k: 512,
			nf: 128,
			nc: 32,
			aQB: 0
		}, this.a05[3] = {
			j: 960,
			k: 960,
			nf: 60,
			nc: 8,
			aQB: 0
		}, this.a05[4] = {
			j: 900,
			k: 900,
			nf: 100,
			nc: 5,
			aQB: 0
		}, this.a05[5] = {
			j: 1e3,
			k: 1e3,
			nf: 100,
			nc: 40,
			aQB: 0
		}, this.a05[6] = {
			j: 1e3,
			k: 1e3,
			nf: 100,
			nc: 20,
			aQB: 0
		}, this.a05[7] = {
			j: 1024,
			k: 1024,
			nf: 128,
			nc: 32,
			aQB: 0
		}, this.a05[8] = {
			j: 820,
			k: 820,
			nf: 200,
			nc: 100,
			aQB: 0
		}, this.a05[9] = {
			j: 1024,
			k: 1024,
			nf: 128,
			nc: 32,
			aQB: 0
		}, this.a05[10] = {
			a0W: aRH,
			a0X: aRI,
			aQP: aRJ
		}, this.a05[11] = {
			a0W: aRK,
			a0X: aRL,
			aQP: aRM
		}, this.a05[12] = {
			a0W: aRK,
			a0X: aRL,
			aQP: aRM
		}, this.a05[13] = {
			a0W: aRF,
			a0X: cos,
			aQP: aRG
		}, this.a05[14] = {
			a0W: aRF,
			a0X: cos,
			aQP: aRG
		}, this.a05[15] = {
			a0W: aRH,
			a0X: aRI,
			aQP: aRJ
		}, this.a05[16] = {
			a0W: aRH,
			a0X: aRI,
			aQP: aRJ
		}, this.a05[17] = {
			a0W: aRF,
			a0X: cos,
			aQP: aRG
		}, this.a05[18] = {
			a0W: aRK,
			a0X: aRL,
			aQP: aRM
		}, this.a05[19] = {
			a0W: aRF,
			a0X: cos,
			aQP: aRG
		}, this.a05[20] = {
			j: 1024,
			k: 1024,
			nf: 128,
			nc: 32,
			aQB: 0
		}, this.a05[21] = {
			j: 940,
			k: 940,
			nf: 80,
			nc: 8,
			aQB: 0
		}, this.a05[22] = {
			a0W: aRK,
			a0X: aRL,
			aQP: aRM
		}, this.a05[23] = {
			a0W: aRH,
			a0X: aRI,
			aQP: aRJ
		}, this.a05[24] = {
			a0W: [157, 136, 117],
			a0X: [16, 13, 68],
			aQP: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aAe: "[OG] Neutronian"
		};
		for (var aC = 0; aC < bV.aQ2; aC++) this.a05[aC].name = this.aRE[aC];
		this.a05[bV.aQ2] = {
			name: ""
		}, this.aRC = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aRC[aC] = aC;
		for (this.aRC[10] = 20, this.aRC[11] = 21, this.aRD = new Uint8Array(bV.aQ3), aC = 0; aC < 10; aC++) this.aRD[aC] = 10 + aC;
		this.aRD[10] = 22, this.aRD[11] = 23, this.aRD[12] = 24
	}
}

function aQ6() {
	this.aR9 = function() {
		for (var hA, fj, gL, aR7 = aG0, aR8 = bV.a0F, j = bV.fn, aR6 = j - 1, iT = bV.fo - 1, h5 = 0, fl = 1; fl < iT; fl++)
			for (gL = fl * j, fj = 1; fj < aR6; fj++) aR8[hA = gL + fj << 2] === aR8[1 + hA] && aR8[hA] === aR8[2 + hA] && (h5++, aR7[2 + hA] = 4);
		aq.aAi = h5
	}, this.aRA = function(aRO, aRP) {
		for (var aR7 = aG0, j = bV.fn, aR6 = j - 1, iT = bV.fo - 1, id = 0, fl = 1; fl < iT; fl++)
			for (var gL = fl * j, fj = 1; fj < aR6; fj++) {
				var fG = 2 + (gL + fj << 2);
				aR7[fG] === aRO && (! function(fG, id, aRO, aRP) {
					var fc = 1,
						aR7 = aG0,
						fe = ad.aLs,
						a6J = [fG],
						aRR = id >> 8 << 1,
						aRS = 255 & id;
					aR7[fG - 2] = aRR, aR7[fG - 1] = aRS, aR7[fG] = 5;
					for (; fc;) {
						for (var a6K = [], aC = 0; aC < fc; aC++)
							for (var fR = a6J[aC], ff = 0; ff < 8; ff++) {
								var fg = fR + fe[ff];
								aR7[fg] === aRO && (aR7[fg - 2] = aRR, aR7[fg - 1] = aRS, aR7[fg] = aRP, a6K.push(fg))
							}
						fc = (a6J = a6K).length
					}
				}(fG, id, aRO, aRP), id = (id + 1) % 32768)
			}
	}, this.aRB = function() {
		for (var aR7 = aG0, j = bV.fn, aR6 = j - 3, iT = bV.fo - 3, aRU = 12 * j, fl = 3; fl < iT; fl++)
			for (var gL = fl * j, fj = 3; fj < aR6; fj++) {
				var fG = 2 + (gL + fj << 2);
				2 !== aR7[fG] || 2 === aR7[fG - 12] && 2 === aR7[12 + fG] && 2 === aR7[fG - aRU] && 2 === aR7[fG + aRU] || (aR7[fG - 2] = 1 | aR7[fG - 2])
			}
	}
}

function a8Q() {
	(a1p = void 0 === a1p ? document.createElement("canvas") : a1p).width = bV.fn, a1p.height = bV.fo, a8U = a1p.getContext("2d", {
		alpha: !0
	}), a8V = aG0 = null, a8V = a8U.getImageData(0, 0, bV.fn, bV.fo), aG0 = a8V.data, bD.sr.a0G(aG0)
}

function cm() {
	var g4, j, k, max, aRV, nc, aRX, aRY, aRZ, aRa, aRb, aRc, aRd, aRe, aRW = 1e4;

	function aRl(aRk, nf, fc) {
		var aC;
		for (aRX[0] = aRk, aC = 1; aC < fc; aC++) aRX[aC] = aRX[aC - 1] + nf, nf = aRX[aC] >= aRW ? (aRX[aC] = aRW - 1, -nf) : aRX[aC] < 0 ? (aRX[aC] = 0, -nf) : (nf += 16384 <= az.random() ? nc : -nc) < -aRV ? -aRV : aRV < nf ? aRV : nf
	}

	function aRn(fj, fl, aRo, fc) {
		(aRo ? function(fj, fl, fc) {
			var aC;
			for (aC = 0; aC < fc; aC++) g4[fl * j + fj + aC] = aRX[aC]
		} : function(fj, fl, fc) {
			var aC;
			for (aC = 0; aC < fc; aC++) g4[fl * j + fj + aC * j] = aRX[aC]
		})(fj, fl, fc)
	}

	function aRr(value, fc) {
		var aC, aPT, fG, kD = value - aRX[fc - 1];
		if (0 != kD) {
			for (aPT = 1 + bO.g3(Math.abs(kD), fc - 1), aPT = kD < 0 ? -aPT : aPT, aRX[fc - 1] = value, fG = (fG = fc - 1 - bO.g3(Math.abs(kD), Math.abs(aPT))) < 1 ? 1 : fc - 2 < fG ? fc - 2 : fG, aC = fc - 2; fG <= aC; aC--) aRX[aC] += kD - (fc -
				1 - aC) * aPT;
			(kD < 0 ? function(fc) {
				var aC;
				for (aC = fc - 2; 1 <= aC; aC--) aRX[aC] < 0 && (aRX[aC] = -aRX[aC] - 1)
			} : function(fc) {
				var aC;
				for (aC = fc - 2; 1 <= aC; aC--) aRX[aC] >= aRW && (aRX[aC] = 2 * aRW - aRX[aC] - 1)
			})(fc)
		}
	}

	function aRu(a6J, a6K, fc) {
		for (var aC = 0; aC < fc; aC++) a6J[aC] = a6K[aC]
	}

	function aRv(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aRw(a97, gap, iU) {
		aRY.push(a97), aRZ.push(gap), aRa.push(iU)
	}
	this.a8 = function(a7c) {
		! function(a7c) {
			var aC;
			for (j = a7c[0], k = a7c[1], aRV = a7c[2], nc = a7c[3], g4 = new Int16Array(j * k), max = k < j ? j : k, aRX = new Int16Array(max), aRY = [], aRZ = [], aRa = [], aRb = new Array(j), aRc = new Array(k), aC = j - 1; 0 <= aC; aC--) aRb[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aRc[aC] = !1;
			aRd = new Int16Array(j), aRe = new Int16Array(k)
		}(a7c),
		function(fc) {
			var aRk = az.random() % aRW,
				nf = az.random() % (2 * aRV + 1) - aRV;
			aRl(aRk, nf, fc)
		}(max), aRu(aRe, aRX, k), aRn(0, 0, !0, j);
		var fj, fl, a7c = g4[0],
			fc = max,
			nf = az.random() % (2 * aRV + 1) - aRV;
		for (aRl(a7c, nf, fc), aRu(aRd, aRX, j), aRn(0, 0, !1, k), aRv(aRd), aRv(aRe), aRl(g4[j - 1], aRd[j - 1], k), aRn(j - 1, 0, !1, k), aRl(g4[j * (k - 1)], aRe[k - 1], j), aRr(g4[j * k - 1], j), aRn(0, k - 1, !0, j), aRb[j - 1] = aRb[0] = !
			0, aRc[k - 1] = aRc[0] = !0, aRw(0, j, !0), aRw(0, k, !1), ! function() {
				var aRy, a97;
				for (;;) {
					if (aRy = function() {
							var aC, aRy = aRY.length - 1;
							for (aC = aRy - 1; 0 <= aC; aC--) aRZ[aC] > aRZ[aRy] && (aRy = aC);
							return aRy
						}(), aRZ[aRy] < 5) return;
					a97 = aRY[aRy] + bO.g3(aRZ[aRy], 2), (aRa[aRy] ? function(fj) {
						var fc, aS1, aC, aKb = 0,
							aS2 = 0;
						for (; aS2 < k - 1;) {
							for (aC = aKb + 1; aC < k; aC++)
								if (aRc[aC]) {
									aS2 = aC;
									break
								} fc = aS2 - aKb + 1, aRl(g4[fj + j * aKb], 0 === aKb ? aRd[fj] : aRX[aS1 - 1] - aRX[aS1 - 2], fc), aRr(g4[aS2 * j + fj], fc), aRn(fj, aKb, !1, fc), aS1 = fc, aKb = aS2
						}
						aRb[fj] = !0
					} : function(fl) {
						var fc, aS1, aC, aKb = 0,
							aS2 = 0;
						for (; aS2 < j - 1;) {
							for (aC = aKb + 1; aC < j; aC++)
								if (aRb[aC]) {
									aS2 = aC;
									break
								} fc = aS2 - aKb + 1, aRl(g4[fl * j + aKb], 0 === aKb ? aRe[fl] : aRX[aS1 - 1] - aRX[aS1 - 2], fc), aRr(g4[fl * j + aS2], fc), aRn(aKb, fl, !0, fc), aS1 = fc, aKb = aS2
						}
						aRc[fl] = !0
					})(a97), aRw(a97, aRY[aRy] + aRZ[aRy] - a97, aRa[aRy]), aRZ[aRy] = a97 - aRY[aRy] + 1
				}
			}(), fj = 0; fj < j; fj++)
			if (!aRb[fj])
				for (fl = 0; fl < k; fl++) aRc[fl] || ! function(fj, fl) {
					var value = g4[fl * j + fj - 1] + g4[(fl - 1) * j + fj],
						aB5 = 2;
					aRb[fj + 1] && (aB5++, value += g4[fl * j + fj + 1]);
					aRc[fl + 1] && (aB5++, value += g4[(fl + 1) * j + fj]);
					g4[fl * j + fj] = bO.g3(value, aB5)
				}(fj, fl)
	}, this.aQa = function() {
		return g4
	}, this.aQF = function() {
		g4 = null
	}
}

function aM1(fv, fw) {
	return 0 <= fv ? bO.g3(fv, fw) : -bO.g3(-fv, fw)
}

function kU(g4) {
	return g4 * g4
}

function aA7(fv, fw) {
	return fw < fv ? fv : fw
}

function aFV(fv, fw) {
	return fv < fw ? fv : fw
}

function aCh(fv, g4, fw) {
	return g4 < fv ? fv : fw < g4 ? fw : g4
}

function aS4(g4, fc) {
	for (var em = bO.g3(g4 + 1, 2), aC = 0; aC < fc; aC++) em = bO.g3(em + bO.g3(g4, em), 2);
	return em
}

function aO0(g4, fc) {
	return g4 < 1 ? 0 : aS4(g4, fc)
}

function aS5(o1, o2, v1, aCQ, oE, oF, v2, vi) {
	return !(o1 + v1 <= oE || o2 + aCQ <= oF || oE + v2 <= o1 || oF + vi <= o2)
}

function aS6(o1, o2, v1, aCQ, oE, oF, v2, vi) {
	return o1 <= oE && o2 <= oF && oE + v2 <= o1 + v1 && oF + vi <= o2 + aCQ
}

function a07(g4) {
	return Math.floor(!!g4 * (1 + Math.log2(g4 + .5)))
}

function c2() {
	this.g3 = function(fv, fw) {
		return Math.floor((fv + .5) / fw)
	}, this.aS7 = function(fv, fw) {
		return Math.floor(fv * (fw + .5))
	}, this.sqrt = function(g4) {
		return ~~Math.sqrt(g4 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.io = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aS8 = function(gL, gN, gP) {
		return Math.max(Math.min(gL, gN), gP)
	}, this.aS9 = function(aSA, aSB, fj, fl) {
		fj -= aSA, aSA = fl - aSB, fl = 0;
		return 0 == fj ? fl = 0 <= aSA ? Math.PI : 0 : (fl = Math.atan(aSA / fj), fl += 0 < fj ? .5 * Math.PI : 1.5 * Math.PI), fl
	}, this.log2 = function(g4) {
		return Math.floor(!!g4 * (1 + Math.log2(g4 + .5)))
	}, this.log10 = function(g4) {
		return Math.floor(Math.log10(g4 + .5))
	}, this.aSD = function(aSE, aSF, aSG, aSH, aSI) {
		return aSG - aSI < aSE && aSE < aSG + aSI && aSH - aSI < aSF && aSF < aSH + aSI
	}, this.a14 = function(aD7, aD9) {
		return aD7 * aD7 + aD9 * aD9
	}
}

function dK() {
	this.z = new aSJ, this.uw = 0;
	var aSK = new Array(32);

	function aSN() {
		for (var fc = aSK.length, aC = 0; aC < fc; aC++) aSK[aC] = null
	}
	this.dm = function() {
		for (var aSL, aSM = document.body.firstChild; aSM;) aSL = aSM.nextSibling, !document.body.contains(aSM) || "DIV" !== aSM.tagName && "INPUT" !== aSM.tagName && "BUTTON" !== aSM.tagName || u.removeChild(document.body, aSM), aSM = aSL
	}, this.v = function(eL, a4w, a7c) {
		void 0 === a4w && (a4w = this.uw), bi.du = !0, 0 === eL && (0 === ab.a4r() ? eL = 5 : a1.a2.setState(13)), this.ty(), this.uw === eL && (a4w = aSK[eL].a4w, aSK[eL] = null), this.uw = eL;
		var lt = aSK[eL];
		if (!lt || 4 === eL || 7 === eL || 8 === eL || 9 === eL || 10 === eL || 11 === eL || 13 === eL || 15 === eL || 18 === eL || 20 <= eL && eL <= 28 || 32 === eL || 33 === eL) {
			if (0 === eL) return void aSN();
			1 === eL ? lt = new aSO : 2 === eL ? lt = new aSP : 3 === eL ? lt = new aSQ : 4 === eL || 9 === eL || 10 === eL || 11 === eL || 13 === eL || 33 === eL ? lt = a7c : 5 === eL ? lt = new aSR : 6 === eL ? lt = new aSS : 7 === eL ? lt =
				new aST(u.z.aSU) : 8 === eL ? lt = a7c : 12 === eL ? lt = new aSV : 14 === eL ? lt = new aSW : 15 === eL ? lt = new aST(u.z.aSX) : 16 === eL ? lt = new aSY : 17 === eL ? lt = new aSZ : 18 === eL ? lt = new aSa : 19 === eL ? lt =
				new aSb : 20 === eL ? lt = new aSc : 21 === eL ? lt = new aSd : 22 === eL ? lt = new aSe : 23 === eL ? lt = new aSf : 24 === eL ? lt = new aSg : 25 === eL ? lt = new aSh : 26 === eL ? lt = new aSi : 27 === eL ? lt = new aSj :
				28 === eL ? lt = new aSk : 29 === eL ? lt = new aSl : 30 === eL ? lt = new aSm : 31 === eL ? lt = new aSn : 32 === eL && (lt = new aSo), lt.a4w = a4w, aSK[eL] = lt
		}
		lt.show(a7c)
	}, this.a4q = function() {
		this.iP() && this.aSp(this.a4v().a4w)
	}, this.aSp = function(eL) {
		this.iP() && (aSK[eL] ? (this.ty(), bi.du = !0, this.uw = eL, aSK[eL].show()) : this.v(eL))
	}, this.ty = function() {
		this.iP() && aSK[this.uw].ty()
	}, this.y = function() {
		this.iP() && (aSK[this.uw].ty(), aSN(), this.uw = 0, a1.a2.setState(13))
	}, this.yI = function() {
		var lt;
		this.iP() && (lt = aSK[this.uw]).yI && lt.yI()
	}, this.resize = function() {
		if (!this.iP()) return !1;
		aSK[this.uw].resize()
	}, this.hq = function(fj, fl) {
		var lt;
		this.iP() && (lt = aSK[this.uw]).hq && lt.hq(fj, fl)
	}, this.a5E = function(fj, fl) {
		var lt;
		this.iP() && (lt = aSK[this.uw]).a5E && lt.a5E(fj, fl)
	}, this.a5c = function() {
		var lt;
		this.iP() && (lt = aSK[this.uw]).a5c && lt.a5c()
	}, this.a5H = function(mD, mE, deltaY) {
		var lt;
		this.iP() && (lt = aSK[this.uw]).a5H && lt.a5H(mD, mE, deltaY)
	}, this.a5m = function(code) {
		var lt;
		return !!this.iP() && ((lt = aSK[this.uw]).a5m && lt.a5m(code), !0)
	}, this.eh = function() {
		var lt;
		this.iP() && (lt = aSK[this.uw]) && lt.eh && lt.eh()
	}, this.iP = function() {
		return 0 < this.uw
	}, this.a4v = function() {
		return aSK[this.uw]
	}, this.a8s = function(eL) {
		return aSK[eL]
	}, this.aSq = function() {
		return aSK
	}, this.removeChild = function(oo, op) {
		try {
			oo.removeChild(op)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aST(data) {
	var aSr, aSs;

	function aSv(sf, wR) {
		if (!data.aSt) {
			if (data.aTi) {
				if (wR) return
			} else {
				if (!wR) return;
				if (data.zW < 1e4) return
			}
			var aTp, wc = new sO,
				aTn = wR && 1e5 <= data.zW,
				aTo = wc.sR(wR ? (aTn ? "⚠️ " : "") + L(278) : L(279)),
				aTr = (aTn && (aTo.style.color = "yellow"), wR ? wc.sS(L(280, [bD.tg.a7u(data.zW, .01, 0)])) : ((aTp = new tU({
					value: data.aTq,
					eL: -1
				})).e.readOnly = !0, aTp.e.type = "password", wc.sb(aTp), wc.sb(new u9([new x(L(208), function(e) {
					return e.textContent === L(208) ? (e.textContent = L(209), aTp.e.type = "text") : (e.textContent = L(208), aTp.e.type = "password"), !0
				}).button, new x(L(205), function(e) {
					return bD.sF.a70(aTp.e), bD.sF.xw(e), !0
				}).button]))), wc.sW(L(wR ? 279 : 281)).style.marginTop = "0.75em", new tU({
					value: "",
					eL: -1
				}, 0, 0)),
				aTt = (aTr.e.type = "email", aTr.e.autocomplete = "email", aTr.e.name = "email", aTr.e.inputMode = "email", aTr.e.spellcheck = !1, wc.sb(aTr), wc.sb(new u9([new x(L(282), function(e) {
					return b1.aTN.aTs({
						action: 3,
						sA: aTr.e.value.trim().substring(0, 63)
					}), bD.sF.xw(e), !0
				}).button])), wR && wc.sS(L(283)), wc.sW(L(284)).style.marginTop = "0.75em", new tU({
					value: "",
					eL: -1
				}, 1));
			wc.sb(aTt), wc.sb(new u9([new x(L(285), function() {
				b1.aTN.aTO({
					action: 4,
					uu: "",
					value: Math.floor(+aTt.e.value)
				}), u.v(8, u.a4v().a4w, new ux(18))
			}).button])), sf.push(wc)
		}
	}
	this.show = function() {
		data.aSt && bL.aUB("account", data.uu), aSr.show(), this.resize()
	}, this.ty = function() {
		aSr.ty()
	}, this.resize = function() {
		aSr.resize(), aSs.resize()
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	}, aSr = new y3(data.username, [new x("⬅️ " + L(42), function() {
		bL.clear(), u.a4q()
	}), new x(data.aSt ? "🔄 " + L(174) : L(175), function() {
		u.v(8, data.aSt ? u.a4v().a4w : void 0, new ux(25, {
			action: 0,
			uu: data.uu,
			uv: data.uv
		}))
	}, 0, 0, 1)]), aSs = new sd(aSr.y9, function() {
		var sf = [];
		aSv(sf, 1), sf.push(function() {
				var wc = new sO;
				wc.sR(L(253)), data.aTi && (wc.sW("✅ " + L(254)).style.marginBottom = "0.75em");
				var a4S = data.aTj;
				a4S < 1 ? (wc.sW(L(255)), 0 === data.aTk ? wc.sS(L(256)) : 1 === data.aTk ? wc.sS(L(257)) : 2 === data.aTk ? wc.sS(L(258)) : 3 === data.aTk ? wc.sS(L(259)) : 4 === data.aTk ? wc.sS(L(260)) : 5 === data.aTk ? wc.sS(L(
					261)) : 6 === data.aTk ? wc.sS(L(262)) : wc.sS(L(263))) : (wc.sW(L(264)), a4S = a4S < 2 ? L(265) : a4S < 61 ? 2 === a4S ? L(266) : L(267, [a4S - 1]) : a4S < 84 ? 61 === a4S ? L(268) : L(269, [a4S - 60]) : a4S <
					255 ? 84 === a4S ? L(270) : L(271, [a4S - 83]) : L(272), wc.sS(a4S));
				{
					var sT, aTK;
					wc.sb(new uK), data.aSt && (sT = wc.sS(), wc.sb(new u9([new x(bm.yg.xG(data.uu) ? L(273) : L(274), function(e) {
						return bm.yg.yt(data.uu) ? (e.textContent = L(273), aTK(1)) : (e.textContent = L(274), aTK(0)), !0
					}).button])), aTK = function(g4) {
						sT.textContent = g4 ? L(275) : ""
					}, bm.yg.xG(data.uu) && aTK(1), wc.sb(new uK))
				}
				var sn, tT = new tU({
					value: data.username,
					eL: -1
				});
				tT.e.readOnly = !0, wc.sb(tT), wc.sb(new u9([new x(L(205), function(e) {
					return bD.sF.a70(tT.e), bD.sF.xw(e), !0
				}).button])), data.aSt || wc.sS(L(276));
				(data.aTl || data.aTm) && (wc.sb(new uK), wc.sS(L(277)), data.aTl && ((sn = wc.sS("• Muted")).style.color = "orange", sn.style.marginTop = "0.5em"), data.aTm) && ((sn = wc.sS("• Redacted")).style.color = "orange", sn.style
					.marginTop = "0.5em");
				data.aSt && (wc.sb(new uK), wc.sW(b1.z.aTG("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", function(wc) {
					function click(e, aJw) {
						return bs.aJx(data.uu, aJw) && (bD.sF.xw(e), p4[0].t1(1), p4[1].t1(1)), !0
					}
					var color = bs.aJv(data.uu) ? 1 : 0,
						p4 = [];
					p4.push(new x(L(240), function(e) {
						return click(e, 1)
					}, color || bE.pw)), p4.push(new x(L(241), function(e) {
						return click(e, 0)
					}, color || bE.qB)), wc.sb(new u9([p4[0].button])), wc.sb(new u9([p4[1].button]))
				}(wc));
				return wc
			}()),
			function(sf) {
				var wc, tT, k, aTL, aTP, aTM;
				data.aSt && data.aTS && ((wc = new sO).sR(L(201)), wc.sS(L(198)), (tT = new tU({
					value: data.aTS,
					eL: -1
				})).e.readOnly = !0, wc.sb(tT), k = !1, aTL = new x(L(202), function(e) {
					return k && b1.z.ei(0) && (bD.sF.xw(e), aTM(), b1.aTN.aTT({
						action: 9,
						uu: data.uu
					})), !0
				}, 1), aTP = new x(L(195), function(e) {
					return e.textContent === L(195) ? (k = !0, e.textContent = L(196), aTL.t1(0), aTL.button.style.color = bE.qZ) : aTM(), !0
				}), wc.sb(new u9([aTP.button])), aTM = function() {
					k = !1, aTP.button.textContent = L(195), aTL.t1(1), aTL.button.style.color = bE.pU
				}, wc.sb(new u9([aTL.button])), wc.sS(L(203)), sf.push(wc))
			}(sf),
			function(sf) {
				var wc, sT, aGG, aTv, aTL, aTP, aTM;
				data.aSt || ((wc = new sO).sR(L(286)), (sT = wc.sS(data.aTu.length + " / 160")).style.textAlign = "center", aGG = !0, (aTv = new yR(0, 1, function(e) {
					e = e.target.value.length;
					sT.textContent = e + " / 160", 160 < e ? aGG && (aGG = !1, aTP.t1(1)) : aGG || (aGG = !0, aTP.t1(0))
				})).e.rows = 6, aTv.e.style.fontSize = "1em", aTv.yX(data.aTu), wc.sb(aTv), 0 !== data.aTw ? (aTP = new x(L(287), function() {
					if (!aGG) return !0;
					u.v(8, u.a4v().a4w, new ux(29, {
						action: 1,
						sA: aTv.yY().substring(0, 160)
					}))
				}, 0, 0, 1), wc.sb(new u9([aTP.button])), wc.sb(new u9([new x(1 === data.aTw ? L(288) : L(289), function() {
					u.v(8, u.a4v().a4w, new ux(29, {
						action: 0,
						sA: ""
					}))
				}, 0, 0, 1).button])), wc.sS(1 === data.aTw ? L(290, [data.aTx - 1]) : L(291, [data.aTx - 1])), wc.sS(L(292, [data.aTy]))) : (aTL = new x(L(202), function() {
					if (!aTv.e.readOnly) return !0;
					u.v(8, u.a4v().a4w, new ux(29, {
						action: 1,
						sA: aTv.yY().substring(0, 160)
					}))
				}, 1), aTP = new x(L(195), function(e) {
					if (e.textContent === L(195)) {
						if (!aGG) return !0;
						e.textContent = L(196), aTv.e.readOnly = !0, aTL.t1(0), aTL.button.style.color = bE.qZ
					} else aTM();
					return !0
				}), wc.sb(new u9([aTP.button])), wc.sS(L(292, [data.aTy])), aTM = function() {
					aTP.button.textContent = L(195), aTv.e.readOnly = !1, aTL.t1(1), aTL.button.style.color = bE.pU
				}, wc.sb(new u9([aTL.button]))), sf.push(wc))
			}(sf),
			function(sf) {
				var wc;
				data.aSt && 0 !== data.aTw && ((wc = new sO).sR(L(293)), wc.sU(data.aTu), wc.sb(new u9([new x(L(294, 0, "Report"), function(e) {
					return b1.z.ei(0) && (bD.sF.xw(e), b1.aTN.aTT({
						action: 5,
						uu: data.uu
					})), !0
				}, 0, 0, 1).button])), sf.push(wc))
			}(sf), sf.push(function() {
				var wc = new sO,
					aTH = (wc.sR(L(176)), wc.sW(b1.z.aTG("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(177), L(178), L(179), L(180), L(181), L(182), L(183), L(184), L(185), L(186), L(187), L(188), L(189), L(190)]),
					eK = data.aTI;
				return wc.sW(L(191) + bD.tg.a7u(data.zW, .01, 2) + "<br>" + L(192) + (eK + 1) + " / " + data.zV + "<br>" + L(193) + aTH[function(eK, zW) {
					if (eK < 10) return 0;
					if (eK < 30) return 1;
					if (eK < 60) return 2;
					if (3e4 <= (zW = bO.g3(zW, 100))) return 3;
					if (12e3 <= zW) return 4;
					if (7e3 <= zW) return 5;
					if (3e3 <= zW) return 6;
					if (1e3 <= zW) return 7;
					if (500 <= zW) return 8;
					if (200 <= zW) return 9;
					if (70 <= zW) return 10;
					if (20 <= zW) return 11;
					if (3 <= zW) return 12;
					return 13
				}(eK, data.zW)]), wc
			}()), data.aSt && sf.push(function() {
				var wc = new sO,
					tT = (wc.sR(L(194)), wc.sW(b1.z.aTG("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new tU({
						value: bm.buffer.data[147].value,
						eL: -1
					}, 1, void 0, function(e) {
						bm.r0.r1(147, aTK(e.target.value))
					})),
					aTL = (wc.sb(tT), new x(L(14), function(e) {
						return tT.e.readOnly && b1.z.ei(0) && (bD.sF.xw(e), aTM(), b1.aTN.aTO({
							action: 0,
							uu: data.uu,
							value: parseInt(bm.buffer.data[147].value, 10)
						})), !0
					}, 1)),
					aTP = new x(L(195), function(e) {
						return e.textContent === L(195) ? (e.textContent = L(196), tT.e.readOnly = !0, aTL.t1(0), aTL.button.style.color = bE.qZ, bm.r0.r1(147, tT.e.value), aTK(bm.buffer.data[147].value)) : aTM(), !0
					}),
					sT = (wc.sb(new u9([aTP.button])), wc.sS()),
					aTK = function(g4) {
						return sT.innerHTML = u.z.aTQ(g4, bm.buffer.data[105].value, data.uu), g4
					},
					aTM = function() {
						aTP.button.textContent = L(195), tT.e.readOnly = !1, aTL.t1(1), aTL.button.style.color = bE.pU
					};
				return aTK(bm.buffer.data[147].value), wc.sb(new u9([aTL.button])), wc
			}());
		sf.push(function() {
			var wc = new sO,
				tT = (wc.sR(L(204)), new tU({
					value: data.uu,
					eL: -1
				})),
				aTR = (tT.e.readOnly = !0, wc.sb(tT), wc.sb(new u9([new x(L(205), function(e) {
					return bD.sF.a70(tT.e), bD.sF.xw(e), !0
				}).button])), wc.sb(new uK), new tU({
					value: data.uu,
					eL: -1
				}));
			return wc.sb(aTR), wc.sb(new u9([new x(L(206), function(e) {
				u.v(8, u.a4v().a4w, new ux(25, {
					action: 0,
					uu: aTR.e.value,
					uv: 0
				}))
			}).button])), wc
		}()), data.aSt || (sf.push(function() {
			var wc = new sO,
				aTU = (wc.sR(L(207)), new tU(bm.buffer.data[106])),
				customPasswordInput = (aTU.e.readOnly = !0, aTU.e.type = "password", wc.sb(aTU), wc.sb(new u9([new x(L(208), function(e) {
					return e.textContent === L(208) ? (e.textContent = L(209), aTU.e.type = "text") : (e.textContent = L(208), aTU.e.type = "password"), !0
				}).button, new x(L(205), function(e) {
					return bD.sF.a70(aTU.e), bD.sF.xw(e), !0
				}).button])), new tU({
					value: "",
					eL: -1
				}));
			return customPasswordInput.e.placeholder = "Custom new password (optional)", wc.sb(customPasswordInput), wc.sb(new u9([new x(L(210), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.e.value) && u.v(8, u.a4v().a4w, new ux(15))
			}).button])), wc.sR(L(211), "0.8em"), wc.sS(L(212)), wc.sS(L(213)), wc.sS(L(214)), wc
		}()), sf.push(function() {
			var wc = new sO;
			return wc.sR(L(215)), wc.sb(new u9([new x(L(216), function() {
				u.v(6, u.a4v().a4w)
			}).button])), wc.sb(new u9([new x(L(217), function() {
				bm.r0.r1(105, ""), u.v(8, u.a4v().a4w, new ux(18))
			}).button])), wc.sb(new u9([new x(L(218) + bm.buffer.data[105].value, function() {
				u.v(4, 0, new w(L(219), L(220), !0, [new x("⬅️ " + L(42), function() {
					u.v(7, u.a8s(7).a4w)
				})]))
			}, bE.qB).button])), wc
		}()), sf.push(function() {
			function aTW(eL) {
				aTV[0].t1(0 === eL ? bE.pg : bE.pr), aTV[1].t1(0 === eL ? bE.pg : bE.qB)
			}
			var sZ, aTV, wc = new sO;
			wc.sR(L(224)), wc.sS(L(225)), bm.z.zE();
			return aTV = [new x(L(226), function() {
				var eL = Math.min(bm.buffer.data[117].value, sZ.sa.length - 1);
				eL < 1 || (eL = bm.z.zJ(eL)) && (bm.r0.r1(105, eL.uu), bm.r0.r1(106, eL.password), u.v(8, u.a4v().a4w, new ux(18)))
			}, bE.pg, 1), new x(L(223), function() {
				var eL = Math.min(bm.buffer.data[117].value, sZ.sa.length - 1);
				if (!(eL < 1)) {
					sZ.sa[eL].remove(), sZ.sa.splice(eL, 1);
					for (var aC = eL; aC < sZ.sa.length; aC++) sZ.sa[aC].name = "" + aC;
					bm.z.zH(eL), eL = bm.buffer.data[117].value, sZ.sa[eL].textContent = sZ.sa[eL].textContent.replace("⚪", "🟢"), aTW(eL)
				}
			}, bE.pg, 1)], sZ = new xz(bm.buffer.data[117], aTW), __fx.savedAccounts.decorate(sZ.sa, bm.buffer.data[117].oS), aTW(0), sZ.sa[0].style.marginTop = "0.5em", wc.sY(sZ), wc.sb(new u9([aTV[0].button])), wc.sb(new u9(
				[new x("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(bm.buffer.data[117].value)
				}).button])), wc.sb(new u9([aTV[1].button])), wc
		}()));
		return sf.push(function() {
				var wc = new sO,
					sA = (wc.sR(L(236)), L(237, [(data.aTY / 1e3).toFixed(3)]) + "<br>" + L(238, [data.aTZ]));
				data.aTa && (sA += "<br>" + L(239, [(data.aTb / 1e3).toFixed(3)]));
				return wc.sW(sA), wc
			}()), sf.push(function() {
				var wc = new sO,
					aTH = (wc.sR(L(230)), [L(231), L(232), L(233), L(234)]),
					eK = data.aTX;
				return wc.sW(L(235) + (data.a4B / 100).toFixed(2) + "<br>" + L(192) + (eK + 1) + " / " + data.zV + "<br>" + L(193) + aTH[eK < 10 ? 0 : eK < 50 ? 1 : eK < 200 ? 2 : 3]), wc
			}()), sf.push(function() {
				var wc = new sO;
				return wc.sR(L(227)), wc.sW(L(228) + bD.tg.a7u(data.zS, .1, 1) + "<br>" + L(192) + (data.zT + 1) + " / " + data.zV + "<br>" + L(229) + data.zU), wc
			}()),
			function(sf) {
				var wc = new sO,
					aTz = data.zZ,
					aU0 = (wc.sR(L(295)), wc.sW(L(296, [data.zX.length ? "[" + data.zX + "]" : "-"])), wc.sW(L(297, [bD.tg.a7u(aTz, .01, 2)])), wc.sW(L(298, [data.zb + 1 + " / " + data.zV])), data.zc),
					aU1 = (wc.sW(L(299, [bD.tg.a7u(aU0, .1, 1)])), data.ze);
				wc.sW(L(300, [aU1])), wc.sW(L(301, [bD.tg.a7u(aU0 / Math.max(aU1, 1), .1, 2)])), aTz = data.za, wc.sR(L(302), "0.8em"), wc.sW(L(296, [data.zY.length ? "[" + data.zY + "]" : "-"])), wc.sW(L(297, [bD.tg.a7u(aTz, .01, 2)])),
					aU0 = data.zd, wc.sW(L(299, [bD.tg.a7u(aU0, .1, 1)])), aU1 = data.zf, wc.sW(L(300, [aU1])), wc.sW(L(301, [bD.tg.a7u(aU0 / Math.max(aU1, 1), .1, 2)])), wc.sW(b1.z.aTG("/wiki/clans"), "0.75em").style.marginTop = "0.8em", sf
					.push(wc)
			}(sf),
			function(sf) {
				var wc = new sO;
				wc.sR(L(303)), wc.sW(L(235) + (data.aU2 / 10).toFixed(1) + "<br>" + L(193) + (data.aU3.length ? L(304, [data.aU3]) : L(305))), data.aSt && wc.sb(new u9([new x(L(251), function(e) {
					return b1.z.ei(0) && (bD.sF.xw(e), b1.aTN.aTT({
						action: 4,
						uu: data.uu
					})), !0
				}, 0, 0, 1).button]));
				wc.sW(b1.z.aTG("/wiki/clans"), "0.75em").style.marginTop = "0.8em", sf.push(wc)
			}(sf), sf.push(function() {
				var wc = new sO;
				{
					var tT, aTP, aTh, sT, aTK, aTM;
					wc.sR(L(249)), wc.sW(L(250) + data.aTf + "<br>" + L(192) + (data.aTg + 1) + " / " + data.zV + "<br>" + L(193) + br.eN(data.aTg)), data.aSt && ((tT = new tU({
						value: bm.buffer.data[157].value,
						eL: -1
					}, 1, void 0, function(e) {
						bm.r0.r1(157, aTK(e.target.value))
					})).e.style.marginTop = "0.6em", wc.sb(tT), aTP = new x(L(195), function(e) {
						return e.textContent === L(195) ? (e.textContent = L(196), tT.e.readOnly = !0, aTh[0].t1(0), aTh[0].button.style.color = bE.qZ, aTK(bm.buffer.data[157].value)) : aTM(), !0
					}), wc.sb(new u9([aTP.button])), aTh = [new x(L(251), function(e) {
						return tT.e.readOnly && b1.z.ei(0) && (bD.sF.xw(e), aTM(), b1.aTN.aTO({
							action: 1,
							uu: data.uu,
							value: bO.io(parseInt(bm.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], sT = wc.sS(), aTK = function(g4) {
						return g4 = bD.gy.a7Z(g4, 2, 3e4), sT.textContent = L(252, [g4 - 1, g4, bm.buffer.data[105].value]), g4
					}, wc.sb(new u9([aTh[0].button])), aTM = function() {
						aTP.button.textContent = L(195), tT.e.readOnly = !1, aTh[0].t1(1), aTh[0].button.style.color = bE.pU
					}, aTK(bm.buffer.data[157].value))
				}
				return wc
			}()),
			function(sf) {
				var wc, a6z;
				data.aSt && !data.aU4 || (0 === a1.id || data.aSt || data.aU4) && ((wc = new sO).sR("Patreon"), !data.aSt && data.aU5 ? wc.sb(new u9([new x(L(208), function() {
					b1.aTN.aTT({
						action: 7,
						uu: data.uu
					}), data.aU5 = 0, u.v(7)
				}).button])) : data.aU4 ? (wc.sW(L(306, [(data.aU6 / 100).toFixed(2)]) + "<br>" + L(307, [1 + data.aU7 + " / " + data.aU8]) + "<br>" + L(308, [data.aU9 ? L(309) : L(310)])), data.aSt || wc.sb(new u9([new x(L(311),
					function() {
						b1.aTN.aTT({
							action: 8,
							uu: data.uu
						}), data.aU4 = 0, bm.r0.r1(160, 0), u.v(7)
					}).button]))) : (wc.sW(L(312), "0.75em").style.marginBottom = "0.3em", wc.sW("  • " + L(313), "0.75em").style.whiteSpace = "pre", wc.sW("  • " + L(314), "0.75em").style.whiteSpace = "pre", wc.sW("  • " + L(315),
						"0.75em").style.whiteSpace = "pre", wc.sW(L(316), "0.75em").style.marginTop = "1.0em", wc.sW(L(317), "0.75em").style.marginTop = "1.0em", wc.sW("<a href='" + bN.aUA +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a6z = "https://www.patreon.com/oauth2/authorize?state=" + data.uu +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a47() + "/", wc.sW(L(318), "0.75em").style.marginTop = "1.0em", wc.sW("<a href='" +
						a6z + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aSt || (wc.sb(new uK), wc.sb(new u9([new x(L(209), function() {
						b1.aTN.aTT({
							action: 6,
							uu: data.uu
						}), data.aU5 = 1, u.v(7)
					}).button])), wc.sW(L(319), "0.75em").style.marginTop = "0.75em")), sf.push(wc))
			}(sf), sf.push(function() {
				var wc = new sO,
					aTH = (wc.sR(L(242)), [L(243), L(244), L(245), L(246), "Scout", L(247)]),
					eK = data.aTd;
				return wc.sW(L(248) + (data.aTe / 100).toFixed(2) + "<br>" + L(192) + (eK + 1) + " / " + data.zV + "<br>" + L(193) + aTH[eK < 3 ? 0 : eK < 20 ? 1 : eK < 100 ? 2 : eK < 500 ? 3 : eK < 2e3 ? 4 : 5]), wc.sW(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", wc
			}()),
			function(sf) {
				var wc, tT, aTR, aTL, aTP, aTM;
				data.aSt || ((wc = new sO).sR(L(197)), wc.sS(L(198)), tT = new tU({
					value: bm.buffer.data[184].value,
					eL: -1
				}, 1, void 0, function(e) {
					bm.r0.r1(184, e.target.value)
				}), wc.sb(tT), wc.sS(L(199)), aTR = new tU({
					value: bm.buffer.data[185].value,
					eL: -1
				}, 0, void 0, function(e) {
					bm.r0.r1(185, e.target.value)
				}), wc.sb(aTR), aTL = new x(L(200), function(e) {
					return tT.e.readOnly && b1.z.ei(0) && (bD.sF.xw(e), aTM(), b1.aTN.aTO({
						action: 5,
						uu: bm.buffer.data[185].value,
						value: bO.io(parseInt(bm.buffer.data[184].value, 10), 1, 1e9)
					})), !0
				}, 1), aTP = new x(L(195), function(e) {
					return e.textContent === L(195) ? (e.textContent = L(196), tT.e.readOnly = !0, aTR.e.readOnly = !0, aTL.t1(0), aTL.button.style.color = bE.qZ, bm.r0.r1(184, tT.e.value)) : aTM(), !0
				}), wc.sb(new u9([aTP.button])), aTM = function() {
					aTP.button.textContent = L(195), tT.e.readOnly = !1, aTR.e.readOnly = !1, aTL.t1(1), aTL.button.style.color = bE.pU
				}, wc.sb(new u9([aTL.button])), sf.push(wc))
			}(sf),
			function(sf) {
				var wc, sZ, aTV, eL, aTW;
				data.aSt || bm.yg.get().length && ((wc = new sO).sR(L(221)), eL = 0, aTW = function() {
					var aFv = bm.yg.get().length;
					aTV[0].t1(eL === aFv ? bE.pg : bE.pr), aTV[1].t1(eL === aFv ? bE.pg : bE.qB)
				}, aTV = [new x(L(222), function() {
					u.v(8, void 0, new ux(25, {
						action: 0,
						uu: bm.yg.get()[eL],
						uv: 0
					}))
				}, bE.pg, 1), new x(L(223), function() {
					bm.yg.yv(eL), sZ.sa[eL].remove(), sZ.sa.splice(eL, 1);
					for (var aC = eL; aC < sZ.sa.length; aC++) sZ.sa[aC].name = "" + aC;
					bm.yg.get().length && (eL = Math.max(eL - 1, 0), sZ.sa[eL].textContent = sZ.sa[eL].textContent.replace("⚪", "🟢")), aTW()
				}, bE.pg, 1)], aTW(), sZ = new xz(bm.yg.ys(), function(aC) {
					eL = aC, aTW()
				}), __fx.followedAccounts.decorate(sZ.sa, bm.yg.get()), sZ.sa[0].style.marginTop = "0.5em", wc.sY(sZ), wc.sb(new u9([aTV[0].button])), wc.sb(new u9([new x("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(eL)
				}).button])), wc.sb(new u9([aTV[1].button])), sf.push(wc))
			}(sf), aSv(sf, 0), sf
	}())
}

function aSe() {
	var aUC, aUD, aUE, sf;

	function aUF() {
		aUH(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aSq()[19] = null, u.a4q()
	}

	function aUH() {
		2 === aE.data.aIncomeType ? (bD.sr.a6N(aUE.yY(), aE.data.aIncomeData, 255), bD.sr.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aUC.show(), this.resize()
	}, this.ty = function() {
		aUC.ty()
	}, this.resize = function() {
		aUC.resize(), aUD.resize()
	}, this.a5m = function(em) {
		2 === em && aUC.yA[0].sz()
	}, aUC = new y3(L(320), [new x("⬅️ " + L(42), aUF)]), aUD = new sd(aUC.y9, (function(sf) {
		var wc = new sO;
		wc.sR(L(321)), wc.sY(new xz({
			oS: [L(322), L(323), L(324)],
			value: aE.data.aIncomeType
		}, function(eL) {
			aUH(), 2 !== eL || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fZ)), aE.data.aIncomeType = eL, u.v(22)
		})), sf.push(wc)
	}(sf = []), function(sf) {
		var wc;
		1 === aE.data.aIncomeType && ((wc = new sO).sR("Value"), wc.sb(new tU({
			eL: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.io(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), sf.push(wc))
	}(sf), function(sf) {
		var wc;
		2 === aE.data.aIncomeType && ((wc = new sO).sR("Data"), (aUE = new yR(0, 1, 0, 1)).yX(bD.tg.a80(aE.data.aIncomeData, 4)), wc.sb(aUE), sf.push(wc))
	}(sf), sf))
}

function aSh() {
	var aUC, aUD, aUE;

	function aUF() {
		aUH(), 3 !== aE.data.botDifficultyType || bD.sr.a6B(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aSq()[19] = null, u.a4q()
	}

	function aUH() {
		3 === aE.data.botDifficultyType && bD.sr.a6N(aUE.yY(), aE.data.botDifficultyData, aF.l9.length - 1)
	}

	function aUM(sf, eL) {
		var wc = new sO,
			value = (wc.sR(eL < 0 ? L(69) : L(68) + " " + bj.a42[eL % 9]), 0 <= eL && (wc.sW(L(327) + ": " + aE.data.teamPlayerCount[eL]).style.marginBottom = "1em"), eL < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eL]);
		wc.sY(new xz({
			oS: aF.l9,
			value: value
		}, function(iV) {
			eL < 0 ? aE.data.botDifficultyValue = iV : aE.data.botDifficultyTeam[eL] = iV
		})), sf.push(wc)
	}
	this.show = function() {
		aUC.show(), this.resize()
	}, this.ty = function() {
		aUC.ty()
	}, this.resize = function() {
		aUC.resize(), aUD.resize()
	}, this.a5m = function(em) {
		2 === em && aUC.yA[0].sz()
	}, aUC = new y3(L(69), [new x("⬅️ " + L(42), aUF)]), aUD = new sd(aUC.y9, function() {
		var sf = [];
		if (function(sf) {
				var wc = new sO,
					oS = (wc.sR(L(321)), [L(323), L(325), L(326), L(324)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), oS.splice(2, 1));
				wc.sY(new xz({
					oS: oS,
					value: value
				}, function(eL) {
					aUH(), aE.data.botDifficultyType = eL, 0 === aE.data.gameMode && 2 === eL && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fZ)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), sf.push(wc)
			}(sf), 0 === aE.data.botDifficultyType) aUM(sf, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aUM(sf, aC);
		else 3 === aE.data.botDifficultyType && ! function(sf) {
			var wc = new sO;
			wc.sR("Data"), (aUE = new yR(0, 1, 0, 1)).yX(bD.tg.a80(aE.data.botDifficultyData, 8)), wc.sb(aUE), sf.push(wc)
		}(sf);
		return sf
	}())
}

function aUN(data) {
	var aSr, aUO, aUP, aUQ, aUR, aUS, aUT, colors, aUU, aUV, aUW = 0,
		aUX = 0,
		aUY = !1,
		aUZ = !1,
		aUa = [1, 5, 60, 240, 1440, 10080, 43200];

	function aV4(mD, mE) {
		! function(mD, mE) {
			return aUO < mD && mD < aUO + aUQ && aUP < mE && mE < aUP + aUR
		}(aUW = mD, aUX = mE) ? (aUY && (bi.du = !0), aUY = !1) : (aUY = !0, bi.du = !0)
	}
	this.show = function() {
		aUZ = bm.buffer.data[127].value, aSr.show(), this.resize()
	}, this.ty = function() {
		aSr.ty()
	}, this.resize = function() {
		aSr.resize();
		var em = i.l,
			yH = aSr.yE(),
			aUj = em * yH.yG,
			em = em * yH.u0;
		aUS = bD.sF.vJ(.06), aUT = bD.sF.vJ(.04), aUO = bD.sF.vJ(.06), aUP = em + aUS, aUQ = i.j - aUO - aUT, aUR = aUj + em - aUP - aUT
	}, this.yI = function() {
		aSr.yI(),
			function() {
				var aC, aUg, h5, fj, fv, h = data.data,
					aUn = 1,
					aUo = .125,
					aUp = aUZ ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aUg = h[aC].aUg, h5 = aUg.length, aUn = Math.max(h5, aUn), fv = 0; fv < h5; fv++) aUo = Math.max(aUg[fv], aUo), aUp = Math.min(aUg[fv], aUp);
				var o2 = aUP + aUR,
					a1d = aUR / (aUo - aUp),
					a1c = 1 / (aUn - 1);
				for (yJ.lineWidth = bf.a2f, aC = 0; aC < h.length; aC++) {
					for (aUg = h[aC].aUg, h5 = aUg.length, fj = aUO, yJ.beginPath(), yJ.moveTo(fj + aUQ, o2 - a1d * (aUg[h5 - 1] - aUp)), fv = h5 - 2; 0 <= fv; fv--) yJ.lineTo(fj + a1c * fv * aUQ, o2 - a1d * (aUg[fv] - aUp));
					yJ.strokeStyle = colors[aC], yJ.stroke()
				}(function(aUp, aUo, o2, a1d) {
					yJ.font = bD.sF.sI(0, .25 * aUO), bD.sF.textBaseline(yJ, 1), bD.sF.textAlign(yJ, 2), yJ.fillStyle = colors[0];
					for (var fj = .92 * aUO, aC = 0; aC < 3; aC++) {
						var g4 = aUp + aC * (aUo - aUp) / 2;
						yJ.fillText((g4 / 1e3).toFixed(3), fj, o2 - a1d * (g4 - aUp))
					}
				})(aUp, aUo, o2, a1d),
				function(aUn) {
					var fl = aUP + aUR + .15 * aUT;
					yJ.font = bD.sF.sI(0, Math.min(.4 * aUT, .028 * i.j)), bD.sF.textBaseline(yJ, 0), bD.sF.textAlign(yJ, 2), yJ.fillStyle = colors[0], yJ.fillText(bD.a62.a6r(aUU), aUO + aUQ, fl), bD.sF.textAlign(yJ, 0), yJ.fillText(bD.a62.a6r(
						new Date(aUV.getTime() - 6e4 * (aUn - 1) * aUa[data.aUf])), aUO, fl)
				}(aUn),
				function(aUn, aUp, aUo) {
					if (aUY && !(aUn < 2)) {
						for (var aCY, eL = (aUW - aUO) / aUQ * (aUn - 1), aUs = Math.floor(eL), aUt = Math.floor(1 + eL), aUu = eL - aUs, aUv = 1e5, aUw = -1, aUx = -1, aUy = aUo - (aUo - aUp) * (aUX - aUP) / aUR, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aGR, aUg = h[aC].aUg;
							aUg.length <= aUt || (aUg = aUg[aUs] + aUu * (aUg[aUt] - aUg[aUs]), (aGR = Math.abs(aUy - aUg)) < aUv && (aUv = aGR, aUw = aC, aUx = aUg))
						} - 1 !== aUw && (aUo = aUP + aUR - (aUx - aUp) / (aUo - aUp) * aUR, yJ.lineWidth = .5 * bf.a2f, yJ.strokeStyle = colors[aUw], yJ.beginPath(), yJ.moveTo(aUO, aUo), yJ.lineTo(aUW, aUo), yJ.lineTo(aUW, aUP + aUR), yJ
							.stroke(), yJ.beginPath(), yJ.arc(aUW, aUo, .1 * aUO, 0, 2 * Math.PI), yJ.fillStyle = colors[aUw], yJ.fill(), aUp = aUP + aUR + .15 * aUT, bD.sF.textAlign(yJ, 1), aCY = aUn - 2 < eL ? (aCY = aUV.getTime() - 6e4 *
								aUa[data.aUf], new Date(aCY + (eL - (aUn - 2)) * (aUU.getTime() - aCY))) : new Date(aUV.getTime() - 6e4 * (aUn - eL - 1) * aUa[data.aUf]), aUn = bD.a62.a6r(aCY), eL = bD.sF.measureText(aUn), aCY = bO.io(aUW,
								aUO + .5 * eL, aUO + aUQ - .5 * eL), yJ.fillStyle = bD.color.pM(70, 50, 20), yJ.fillRect(aCY - .52 * eL, aUP + aUR, 1.04 * eL, .55 * aUT), yJ.fillStyle = colors[0], yJ.fillText(aUn, aCY, aUp), yJ.font = bD.sF
							.sI(0, .25 * aUO), bD.sF.textBaseline(yJ, 1), bD.sF.textAlign(yJ, 2), aCY = .92 * aUO, aUn = (aUx / 1e3).toFixed(3), eL = bD.sF.measureText(aUn), aUp = aCY - 1.04 * eL, yJ.fillStyle = bD.color.pM(70, 50, 20), yJ
							.fillRect(aUp, aUo - .1625 * aUO, aUO - aUp, .275 * aUO), yJ.fillStyle = colors[aUw], yJ.fillText(aUn, aCY, aUo))
					}
				}(aUn, aUp, aUo)
			}(), yJ.lineWidth = bf.a2f, yJ.strokeStyle = bE.pU, yJ.beginPath(), yJ.moveTo(aUO, aUP), yJ.lineTo(aUO, aUP + aUR), yJ.lineTo(aUO + aUQ, aUP + aUR), yJ.stroke();
		var aC, fontSize = .5 * aUS,
			h = (yJ.font = bD.sF.sI(0, fontSize), bD.sF.textBaseline(yJ, 1), bD.sF.textAlign(yJ, 0), data.data),
			fc = h.length,
			fl = aUP - .5 * aUS,
			sA = "";
		for (aC = 0; aC < fc; aC++) sA += h[aC].name + "  ";
		sA = sA.trim();
		var aV1 = bD.sF.measureText(sA),
			fj = .5 * (i.j - aV1);
		for (aV1 > i.j && (fj = 0, yJ.font = bD.sF.sI(0, i.j / aV1 * fontSize)), aC = 0; aC < fc; aC++) yJ.fillStyle = colors[aC], yJ.fillText(h[aC].name, fj, fl), fj += bD.sF.measureText(h[aC].name + "  ")
	}, this.hq = function(mD, mE) {
		aV4(mD, mE)
	}, this.a5E = function(mD, mE) {
		aV4(mD, mE)
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	};
	var aC, ed, a6p, iV, ff = data.data,
		fc = ff.length,
		max = 1;
	for (aC = 0; aC < fc; aC++) max = Math.max(max, ff[aC].aUg.length);
	for (aC = 0; aC < fc; aC++)
		for (; ff[aC].aUg.length < max;) ff[aC].aUg.unshift(0);
	ed = new Date, a6p = 6e4 * ed.getTimezoneOffset(), iV = ed.getTime() - a6p, aUU = new Date(iV), 6 === data.aUf ? function(ed, a6p) {
		var aUi = ed.getUTCFullYear(),
			ed = ed.getUTCMonth() + 1;
		aUV = ed < 12 ? new Date(Date.UTC(aUi, ed) - a6p) : new Date(Date.UTC(aUi + 1, 0) - a6p)
	}(ed, a6p) : (a6p = 6e4 * aUa[data.aUf], aUV = data.aUf <= 4 ? new Date(iV + a6p - ed.getTime() % a6p) : new Date(iV + a6p - (ed.getTime() + 2592e5) % a6p)), iV = bD.color, colors = [bE.pU, iV.pM(255, 0, 0), iV.pM(0, 200, 0), iV.pM(80, 80,
		255), iV.pM(255, 255, 0), iV.pM(255, 0, 255), iV.pM(0, 255, 255), iV.pM(255, 140, 0), iV.pM(128, 128, 128), iV.pM(0, 255, 140)], aSr = new y3(L(328) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aUf] + ", " + bD.a62.a6o(aUU), [
		new x("⬅️ " + L(42), function() {
			u.v(1)
		}), new x(L(329), function() {
			u.v(14)
		})
	], !1)
}

function aSW() {
	var aSr, aSs, sf, aV5 = -1;
	this.show = function() {
		aSr.show(), this.resize(), aV5 = bm.buffer.data[125].value
	}, this.ty = function() {
		aSr.ty()
	}, this.resize = function() {
		aSr.resize(), aSs.resize()
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	}, aSr = new y3(L(330), [new x("⬅️ " + L(42), function() {
		aV5 !== bm.buffer.data[125].value ? u.z.aV6() : u.aSp(13)
	})]), aSs = new sd(aSr.y9, ((sf = []).push(function() {
		var wc = new sO,
			aTP = (wc.sR(L(331)), wc.sS(L(332)), new x(L(333), function() {
				bm.r0.r1(130, 0), u.z.aV6()
			}, 0, 0, 1)),
			tT = new tU(bm.buffer.data[126], 0, function() {
				aTP.button.click()
			});
		return wc.sb(tT), tT.e.placeholder = "a,b,c", tT.e.style.marginTop = "0.5em", wc.sb(new u9([aTP.button])), wc
	}()), sf.push(function() {
		var wc = new sO,
			aTP = new x(L(333), function() {
				bm.r0.r1(130, 1), u.z.aV6()
			}, 0, 0, 1),
			aVB = new tU(bm.buffer.data[129], 1, function() {
				aVB.e.focus()
			}),
			aVC = new tU(bm.buffer.data[128], 1, function() {
				aTP.button.click()
			});
		return wc.sR(L(334)), wc.sb(aVC), aVC.e.style.marginBottom = "0.5em", wc.sR(L(335)), wc.sb(aVB), wc.sb(new u9([aTP.button])), wc
	}()), sf.push(function() {
		var wc = new sO;
		return wc.sR(L(336)), bm.buffer.data[125].oS = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], wc.sY(new xz(bm.buffer.data[125])), wc
	}()), sf.push(function() {
		var wc = new sO;
		return wc.sR(L(337)), wc.sb(new u5(bm.buffer.data[127], L(338))), wc
	}()), sf))
}

function aSV() {
	var aSr, aVD, aUQ, aVE, aVF, aVG, colors = [0, 0, 0],
		aVH = -1;

	function aVK(aC) {
		var aVL = aVD.fl + aC * (bf.gap + aVG);
		yJ.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", yJ.fillRect(aVE, aVL, colors[aC] * aVF, aVG), yJ.strokeStyle = bE.pU, yJ.strokeRect(aVE, aVL, aVF,
			aVG), yJ.fillStyle = bE.pU, yJ.font = bD.sF.sI(0, .32 * aVG), bD.sF.textBaseline(yJ, 1), bD.sF.textAlign(yJ, 0), yJ.fillText(L(0 === aC ? 341 : 1 === aC ? 342 : 343) + aVI(aC), aVE + bf.gap, aVL + .53 * aVG)
	}

	function aVI(aC, aVM) {
		return aVM = aVM || 256, bO.io(Math.floor(aVM * colors[aC]), 0, aVM - 1)
	}

	function a5i(mD, mE) {
		return !(mD < aVE || mE < aVD.fl || mD > aVD.fj + aVD.j || mE > aVD.fl + aVD.k)
	}
	this.show = function() {
		var g4 = bm.buffer.data[121].value;
		colors[0] = (g4 >> 12) / 63, colors[1] = (g4 >> 6 & 63) / 63, colors[2] = (63 & g4) / 63, aSr.show(), this.resize()
	}, this.ty = function() {
		bm.r0.r1(121, (aVI(0, 64) << 12) + (aVI(1, 64) << 6) + aVI(2, 64)), aSr.ty()
	}, this.resize = function() {
		aSr.resize(), aVD.resize();
		var em = i.l,
			yH = aSr.yE(),
			aVJ = (aVD.fl = Math.max(aVD.fl, em * yH.u0 + bf.gap), em * yH.yG - 2 * bf.gap);
		aVD.k = Math.min(aVD.k, aVJ), aVD.j = 2 * aVD.k, aVD.fl = em * yH.u0 + .5 * (em * yH.yG - aVD.k), aVD.fj = .5 * (i.j - aVD.j), aUQ = .25 * aVD.j, aVE = aVD.fj + aUQ + bf.gap, aVF = aVD.j - aUQ - bf.gap, aVG = (aVD.k - 2 * bf.gap) / 3
	}, this.yI = function() {
		var eK, vI, fw;
		aSr.yI(), yJ.lineWidth = bf.a2f, eK = aVI(0), vI = aVI(1), fw = aVI(2), yJ.fillStyle = "rgb(" + eK + "," + vI + "," + fw + ")", yJ.fillRect(aVD.fj, aVD.fl, aUQ, aVD.k), yJ.strokeStyle = bE.pU, yJ.strokeRect(aVD.fj, aVD.fl, aUQ, aVD.k), yJ
			.fillStyle = eK + vI + fw < 306 && vI < 150 ? bE.pU : bE.pL, bD.sF.textBaseline(yJ, 1), bD.sF.textAlign(yJ, 1), yJ.font = bD.sF.sI(0, .1 * aVD.k), yJ.rotate(-Math.PI / 2), yJ.fillText(L(340), -aVD.fl - .5 * aVD.k, aVD.fj + .5 * aUQ),
			yJ.setTransform(1, 0, 0, 1, 0, 0), aVK(0), aVK(1), aVK(2)
	}, this.hq = function(mD, mE) {
		a5i(mD, mE) && (aVH = bO.io(Math.floor((mE - aVD.fl) / (aVG + .75 * bf.gap)), 0, 2), colors[aVH] = bO.io((mD - aVE) / aVF, 0, 1), bi.du = !0)
	}, this.a5E = function(mD) {
		-1 !== aVH && (colors[aVH] = bO.io((mD - aVE) / aVF, 0, 1), bi.du = !0)
	}, this.a5H = function(mD, mE, deltaY) {
		a5i(mD, mE) && (mD = bO.io(Math.floor((mE - aVD.fl) / (aVG + .75 * bf.gap)), 0, 2), colors[mD] = bO.io(colors[mD] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.du = !0)
	}, this.a5c = function() {
		0 <= aVH && (aVH = -1, bi.du = !0)
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	}, aSr = new y3(L(339), [new x("⬅️ " + L(42), function() {
		u.z.aGM()
	})], !1), aVD = new tH([.5, .25], [.5, .5], 1)
}

function aSd() {
	var aUC, aUD, aUE, p4;

	function aUF() {
		aUH(), u.aSq()[19] = null, u.a4q()
	}

	function aVN() {
		aUH(), u.v(21)
	}

	function aUH() {
		1 === aE.data.gameMode ? aE.a8H.a8N() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.sr.a6N(aUE.yY(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aUC.show(), this.resize()
	}, this.ty = function() {
		aUC.ty()
	}, this.resize = function() {
		aUC.resize(), aUD.resize()
	}, this.a5m = function(em) {
		2 === em && aUC.yA[0].sz()
	}, p4 = [new x("⬅️ " + L(42), aUF)], 1 === aE.data.gameMode && p4.push(new x(L(344), aVN, 1, 1)), aUC = new y3(L(345), p4), aUD = new sd(aUC.y9, (p4 = [], 0 === aE.data.gameMode ? (function(sf) {
		var wc = new sO;
		wc.sR(L(321)), wc.sY(new xz({
			oS: [L(346), L(324)],
			value: aE.data.colorsType
		}, function(eL) {
			aUH(), aE.data.colorsType = eL, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fZ || (aE.data.colorsData = new Uint32Array(aE.fZ)), u.v(21)
		})), sf.push(wc)
	}(p4), 1 === aE.data.colorsType && function(sf) {
		var wc = new sO;
		wc.sR("Data"), (aUE = new yR(0, 1, 0, 1)).yX(bD.tg.a80(aE.data.colorsData, 1)), wc.sb(aUE), sf.push(wc)
	}(p4)) : (aE.a8H.a8N(), p4.push(function() {
		var wc = new sO;
		wc.sR(L(327));
		for (var aC = 0; aC < bj.a42.length; aC++) {
			var iV = (aC + 1) % bj.a42.length,
				e = wc.sW((0 == iV ? "" : "Team ") + bj.a42[iV]);
			aC && (e.style.marginTop = "0.5em"), wc.sb(new tU({
				eL: -1,
				value: aE.data.teamPlayerCount[iV]
			}, 1, 0, function(e) {
				aUC.yA[1].t1(0);
				var playerCount = bO.io(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aVQ] = playerCount
			})).e.aVQ = iV
		}
		return wc
	}()), function(sf) {
		for (var wc = new sO, oS = (wc.sR(L(347)), []), aC = 0; aC < bj.a42.length; aC++) {
			var iV = (aC + 1) % bj.a42.length;
			oS.push(bj.a42[iV])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		wc.sY(new xz({
			oS: oS,
			value: (aE.data.colorsData[0] % 16 + bj.a42.length - 1) % bj.a42.length
		}, function(eL) {
			var eL = (eL + 1) % bj.a42.length,
				aVR = bj.aVS[eL],
				aVR = (aVR[0] >> 2 << 12) + (aVR[1] >> 2 << 6) + (aVR[2] >> 2);
			aE.data.colorsData[0] = aVR - (15 & aVR) + eL
		})), sf.push(wc)
	}(p4)), p4))
}

function ux(id, a7c, aVT) {
	var aSr, aVU;

	function aVZ() {
		aVU.sg.innerHTML += "<br>" + L(350)
	}

	function aVi() {
		var fw = 1;
		u.v(4, 1, new w(L(351), L(352), !1, [new x("🔄 Reload", function() {
			fw && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), fw = 0
		}, bE.pr)]))
	}

	function aVY() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.dm(bG.aD), bm.r0.r1(110, __fx.passwordReset.getCustomPassword() || bI.f3
			.uy(bI.f3.uz(15))), b1.aTN.aVk()
	}
	this.aVV = !0, this.aVW = id, this.show = function() {
		aSr.show(), this.resize(), 15 === id ? (b1.z.aVX(id) ? aVY : aVZ)() : 16 === id ? b1.z.aVX(id) ? b1.ej.ek(2) : aVZ() : 17 === id ? b1.z.aVX(id) ? b1.ej.ek(3) : aVZ() : 18 === id ? (b1.z.close(0, 3253), b1.z.aKw(0, id, 0), aVZ()) : 21 ===
			id ? b1.z.aVX(id) ? b1.aVa.aVb(a7c.vD, a7c.vE, a7c.vF) : aVZ() : 22 === id ? b1.z.aVX(id) ? b1.aVa.aVc(a7c.vD, a7c.aVd, a7c.aVe) : aVZ() : 23 === id ? b1.z.aVX(id) ? b1.aVa.aVf(a7c.aUf, a7c.a4P) : aVZ() : 24 === id ? b1.z.aVX(id) ? b1
			.aVa.aVg(a7c.aUf, a7c.vE, a7c.vF) : aVZ() : 25 === id ? b1.z.aVX(id) ? b1.aTN.aTT(a7c) : aVZ() : 28 === id ? b1.z.aVX(id) ? b1.aVa.aVh(a7c.vD, a7c.aVd, a7c.aVe) : aVZ() : 29 === id ? b1.z.aVX(id) ? b1.aTN.aTs(a7c) : aVZ() : 30 ===
			id && (b1.z.aVX(id) ? bA.aGH() || aVi() : aVZ())
	}, this.aVj = function() {
		15 === id ? aVY() : 16 === id ? b1.ej.ek(2) : 17 === id ? b1.ej.ek(3) : 18 === id ? u.v(8, this.a4w, new ux(16)) : 21 === id ? b1.aVa.aVb(a7c.vD, a7c.vE, a7c.vF) : 22 === id ? b1.aVa.aVc(a7c.vD, a7c.aVd, a7c.aVe) : 23 === id ? b1.aVa.aVf(
			a7c.aUf, a7c.a4P) : 24 === id ? b1.aVa.aVg(a7c.aUf, a7c.vE, a7c.vF) : 25 === id ? b1.aTN.aTT(a7c) : 28 === id ? b1.aVa.aVh(a7c.vD, a7c.aVd, a7c.aVe) : 29 === id ? b1.aTN.aTs(a7c) : 30 === id ? bA.aGH() || aVi() : 1e3 === id && (
			this.aVW = id = 25, b1.aTN.aTT(a7c))
	}, this.aGL = function(code, bz, data) {
		!bz && code !== id || (15 === code || 16 === code ? u.v(7, this.a4w) : 17 === code ? (b1.z.close(0, 3252), bm.z.zH(0), bm.buffer.data[117].oS && 0 < bm.buffer.data[117].oS.length && (bz = bm.z.zJ(0)) ? (bm.r0.r1(105, bz.uu), bm.r0.r1(106,
			bz.password), u.v(8, this.a4w, new ux(16))) : (bm.r0.r1(105, ""), u.z.aGM())) : 21 === code ? u.v(10, this.a4w, new aEp(data)) : 23 === code ? u.v(13, this.a4w, new aUN({
			data: data,
			aUf: a7c.aUf
		})) : 25 === code ? (u.z.aSX.uu = a7c.uu, bm.yg.nN(a7c.uu), u.v(15, this.a4w)) : 30 === code && (data ? u.v(1) : aVi()))
	}, this.ty = function() {
		aSr.ty()
	}, this.resize = function() {
		aSr.resize(), aVU.resize()
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	}, aSr = new y3(L(348), [new x("⬅️ " + L(42), function() {
		aVT ? u.v(29) : u.z.aGM()
	})]), aVU = new u8(aSr.y9, L(349))
}

function aSb() {
	var aUC, aUD, sf;

	function aVn() {
		var h5;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a8H.a8N()), h5 = bD.sr.a6H(aE.data.teamPlayerCount, 0), aE.data.numberTeams = h5) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aUF() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aVp(), aE.data.canvas = null, u.v(5, 5)
	}

	function aVp() {
		bC.rq.dm(), bm.r0.r1(156, bC.a8Y.a39())
	}

	function aVl() {
		aE.data.isReplay = 0, aVp(), aE.a8H.a8l(), ab.aL7(), aE.a8H.a8i(), aE.data.canvas = 2 === aE.data.mapType ? bV.a0E : null, aE.a8L(), aE.a8J = 1
	}

	function aW1() {
		aVn();
		for (var h = [aVs(), aVt(), aVu()], aC = 3; aC < 6; aC++) u.removeChild(aUD.sg, aUD.sh[aC].sQ), aUD.sh[aC] = h[aC - 3], aUD.sg.appendChild(aUD.sh[aC].sQ);
		aUD.resize()
	}

	function aVs() {
		var aW2, wc = new sO;
		return wc.sR(L(345)), aW2 = 0 === aE.data.gameMode ? [L(346), L(324)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), wc.sW(aW2), wc.sb(new u9([new x(L(356), function() {
			u.v(21)
		}).button])), wc
	}

	function aVt() {
		var wc = new sO,
			h = (wc.sR(L(69)), [L(323) + ": " + aF.l9[aE.data.botDifficultyValue], L(325), L(326), L(324)]);
		return wc.sW(h[aE.data.botDifficultyType]), wc.sb(new u9([new x(L(356), function() {
			u.v(25)
		}).button])), wc
	}

	function aVu() {
		var wc = new sO,
			h = (wc.sR("Spawning"), [L(346), L(358), L(324)]);
		return wc.sW(h[aE.data.spawningType]), wc.sb(new u9([new x(L(356), function() {
			u.v(24)
		}).button])), wc
	}
	this.show = function() {
		aUC.show(), this.resize(), aUC.y9.scrollTop = u.z.uo[0]
	}, this.ty = function() {
		u.z.uo[0] = aUC.y9.scrollTop, aUC.ty()
	}, this.resize = function() {
		aUC.resize(), aUD.resize()
	}, this.a5m = function(em) {
		2 === em && aUC.yA[0].sz()
	}, aUC = new y3("🔧 " + L(353), [new x("⬅️ " + L(42), aUF), new x(L(354), aVl)]), aVn(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.a0E : 1 === aE.data.mapType ? aE.data.canvas = bV.aQG(bV.a8j(aE.data), 0).a0E : (aE.data
		.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aQG(bV.a8j(aE.data), aE.data.mapSeed).a0E)), aUD = new sd(aUC.y9, (function(sf) {
		var wc = new sO,
			a6X = (wc.sR(L(355)), aE.data.canvas);
		a6X.style.width = "100%", wc.sb({
			e: a6X
		}), wc.sb(new u9([new x(L(356), function() {
			u.v(20)
		}).button])), sf.push(wc)
	}(sf = []), function(sf) {
		var wc = new sO;
		wc.sR(L(327)), wc.sb(new tU({
			eL: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.io(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.sr.a6H(aE.data.teamPlayerCount, 0), aE.a8H.a8N(), bD.sr.a6H(aE.data.teamPlayerCount, 0) !== e) && aW1()
		})), sf.push(wc)
	}(sf), function(sf) {
		var wc = new sO;
		wc.sR(L(357)), wc.sY(new xz({
			oS: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eL) {
			aE.data.gameMode !== eL && (1 === (aE.data.gameMode = eL) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aW1())
		})), sf.push(wc)
	}(sf), sf.push(aVs()), sf.push(aVt()), sf.push(aVu()), function(sf) {
		var wc = new sO,
			h = (wc.sR(L(359)), [L(360), L(361), L(324)]);
		wc.sW(h[aE.data.playerNamesType]), wc.sb(new u9([new x(L(356), function() {
			u.v(23)
		}).button])), sf.push(wc)
	}(sf), function(sf) {
		var wc = new sO,
			h = (wc.sR(L(320)), [L(322), L(323) + ": " + aE.data.aIncomeValue, L(324)]);
		wc.sW(h[aE.data.aIncomeType]), wc.sb(new u9([new x(L(356), function() {
			u.v(22)
		}).button])), sf.push(wc)
	}(sf), function(sf) {
		var wc = new sO,
			h = (wc.sR(L(362)), [L(322), L(323) + ": " + aE.data.tIncomeValue, L(324)]);
		wc.sW(h[aE.data.tIncomeType]), wc.sb(new u9([new x(L(356), function() {
			u.v(26)
		}).button])), sf.push(wc)
	}(sf), function(sf) {
		var wc = new sO,
			h = (wc.sR(L(363)), [L(322), L(323) + ": " + aE.data.iIncomeValue, L(324)]);
		wc.sW(h[aE.data.iIncomeType]), wc.sb(new u9([new x(L(356), function() {
			u.v(27)
		}).button])), sf.push(wc)
	}(sf), function(sf) {
		var wc = new sO,
			h = (wc.sR(L(364)), [L(322), L(323) + ": " + aE.data.sResourcesValue, L(324)]);
		wc.sW(h[aE.data.sResourcesType]), wc.sb(new u9([new x(L(356), function() {
			u.v(28)
		}).button])), sf.push(wc)
	}(sf), function(sf) {
		var wc = new sO;
		wc.sR(L(365)), wc.sb(new u9([new x(L(366), function() {
			u.y(), aE.a8H.a8m(), u.z.uo[0] = 0, u.v(19)
		}).button])), wc.sb(new u9([new x(L(367), function() {
			bp.aNT()
		}).button])), wc.sb(new u9([new x(L(368), function() {
			return bp.aNV(), !0
		}).button])), sf.push(wc)
	}(sf), sf))
}

function aSm() {
	var aUC, tZ = !0;

	function tm(tl, a8q) {
		var sQ = document.createElement("div"),
			aW4 = document.createElement("span"),
			aW5 = document.createElement("span");
		aW4.textContent = aX.aFB(a8q.ec) + ":", aW4.style.color = bE.pj, aW4.style.paddingRight = "0.4em", aW4.style.display = "table-cell", aW4.style.width = "6ch", aW4.style.textAlign = "end", sQ.appendChild(aW4), aW5.textContent = a8q.sA, sQ
			.appendChild(aW5), sQ.style.display = "table", a8q.rF && function(sQ, rF) {
				{
					var aMq;
					rF >= 1024 - ak.tx.a2S ? ((aMq = document.createElement("img")).src = ak.a0H.a2G[rF - 1024 + ak.tx.a2S].toDataURL(), aMq.style.width = "1.5em", aMq.style.height = "1.5em", aMq.style.verticalAlign = "middle", sQ.appendChild(aMq)) :
						((aMq = document.createElement("span")).textContent = ak.tx.a2h(rF), aMq.style.display = "inline-block", aMq.style.fontSize = "1.5em", aMq.style.lineHeight = "1em", aMq.style.verticalAlign = "middle", sQ.appendChild(aMq))
				}
			}(sQ, a8q.rF), tl.appendChild(sQ)
	}

	function tr() {
		tZ && (aUC.y9.scrollTop = aUC.y9.scrollHeight)
	}
	this.clear = function() {
		aUC.y9.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a9j = bu.a8t(), fc = a9j.length, tl = document.createDocumentFragment(), aC = 0; aC < fc; aC++) tm(tl, a9j[aC]);
		aUC.y9.appendChild(tl), tr(), aUC.show(), this.resize(), tZ = !0, tr()
	}, this.ty = function() {
		aUC.ty()
	}, this.resize = function() {
		aUC.resize(), aUC.y9.style.padding = "0.4em " + bD.sF.ss(bf.sp)
	}, this.a5m = function(em) {
		2 === em && aUC.yA[0].sz()
	}, this.a29 = function(a8q) {
		var tl = document.createDocumentFragment();
		tm(tl, a8q), aUC.y9.appendChild(tl), tr()
	}, (aUC = new y3(L(369), [new x("⬅️ " + L(42), function() {
		u.aSp(1)
	})])).y9.style.overflowY = "auto", aUC.y9.addEventListener("scroll", function() {
		tZ = aUC.y9.scrollTop >= aUC.y9.scrollHeight - aUC.y9.clientHeight - 2
	})
}

function aSj() {
	var aUC, aUD, aUE, sf;

	function aUF() {
		aUH(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aSq()[19] = null, u.a4q()
	}

	function aUH() {
		2 === aE.data.iIncomeType && bD.sr.a6N(aUE.yY(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aUC.show(), this.resize()
	}, this.ty = function() {
		aUC.ty()
	}, this.resize = function() {
		aUC.resize(), aUD.resize()
	}, this.a5m = function(em) {
		2 === em && aUC.yA[0].sz()
	}, aUC = new y3(L(363), [new x("⬅️ " + L(42), aUF)]), aUD = new sd(aUC.y9, (function(sf) {
		var wc = new sO;
		wc.sR(L(321)), wc.sY(new xz({
			oS: [L(322), L(323), L(324)],
			value: aE.data.iIncomeType
		}, function(eL) {
			aUH(), 2 !== eL || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fZ), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eL, u.v(27)
		})), sf.push(wc)
	}(sf = []), function(sf) {
		var wc;
		1 === aE.data.iIncomeType && ((wc = new sO).sR("Value"), wc.sb(new tU({
			eL: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.io(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), sf.push(wc))
	}(sf), function(sf) {
		var wc;
		2 === aE.data.iIncomeType && ((wc = new sO).sR("Data"), (aUE = new yR(0, 1, 0, 1)).yX(bD.tg.a80(aE.data.iIncomeData, 4)), wc.sb(aUE), sf.push(wc))
	}(sf), sf))
}

function aSR() {
	var aW7, aW8, aVD, tT, aW9, uQ = 0;
	this.aLc = new v3, aVD = new tH([.45, .27], [.5, .5], 2 / 3), aW8 = [new x("⚔️<br>" + L(370), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aWA(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.px), new x("🗡️<br>" + L(353), function() {
			aWA(1)
		}, bE.qH), new x("🔑<br>" + L(371), function() {
			aWA(2)
		}, bE.qe), new x("☰<br>" + L(372), function() {
			aWA(3)
		}, bE.ph), new x("", function() {
			u.v(12)
		}, bE.pQ, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], tT = new tU(bm.buffer.data[122]);
	for (var aC = 0; aC < aW8.length; aC++) aW8[aC].button.style.position = "absolute";

	function aWA(eL) {
		a1.a2.setState(10), ac.vM() || ac.aLT(), 0 === eL ? u.z.a8b(1) : 1 === eL ? (bC.aNn.a00(bm.buffer.data[156].value, 1) || aE.a8H.a8m(), u.v(19)) : 2 === eL ? 0 !== a1.id || bm.buffer.data[140].value ? u.v(8, u.uw, new ux(16)) : u.z.aWB(u.uw,
			16) : 3 === eL && u.v(1)
	}
	tT.e.style.position = "absolute", tT.e.style.textAlign = "center", tT.e.placeholder = L(373), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aLc.show(), aW8[4].t1(bD.color.a6e(bm.buffer.data[121].value)), this.resize(), document.body.appendChild(tT.e);
		for (var aC = 0; aC < aW8.length; aC++) document.body.appendChild(aW8[aC].button);
		1 !== a1.id || a1.e6 < 5 || (aW9 && bi.ec > aW9 + 144e5 ? a1.z0.setState(14) : aW9 = bi.ec)
	}, this.ty = function() {
		this.aLc.ty(), u.removeChild(document.body, tT.e);
		for (var aC = 0; aC < aW8.length; aC++) u.removeChild(document.body, aW8[aC].button)
	}, this.resize = function() {
		this.aLc.resize(), this.aLc.resize(), aVD.resize();
		var gap = .5 * bf.gap,
			vp = 10 / 99 * .84 * aVD.j,
			aWE = .16 * aVD.k,
			aD6 = .19 * aVD.j,
			fj = aVD.fj + aD6,
			vp = aVD.fl + vp + 3 * gap,
			j = .5 * (aVD.j - gap) - aD6,
			aD6 = aVD.j - 2 * aD6 - aWE - gap,
			aD6 = (bD.sF.vK(tT.e, fj, vp, aD6, aWE), bD.sF.vK(aW8[4].button, fj + aD6 + gap, vp, aWE, aWE), uQ = vp, .5 * (aVD.fl + aVD.k - (vp += aWE + gap) - gap));
		bD.sF.vK(aW8[0].button, fj, vp, j, aD6), bD.sF.vK(aW8[1].button, fj + j + gap, vp, j, aD6), bD.sF.vK(aW8[2].button, fj, vp + aD6 + gap, j, aD6), bD.sF.vK(aW8[3].button, fj + j + gap, vp + aD6 + gap, j, aD6);
		bD.sF.vK(aW8[5].button, fj, vp + aD6 * 2 + gap * 2, j * 2 + gap, aD6 / 3);
		bD.sF.vK(aW8[6].button, fj, vp + aD6 * 2.33 + gap * 3, j * 2 + gap, aD6 / 3);
		for (var aC = 0; aC < aW8.length; aC++) aW8[aC].button.style.font = bD.sF.sI(0, bD.sF.xk(.065 * aVD.k)), bD.sF.sK(aW8[aC].button, 5);
		tT.e.style.font = bD.sF.sI(0, bD.sF.xk(.08 * aVD.k)), bD.sF.sK(tT.e, 5)
	}, this.yI = function() {
		if (ab.aLB(), aU.yI(), fc = Math.floor((a1.a2.ip() ? .018 : .0137) * i.iq), yJ.font = bD.sF.sI(0, Math.max(5, fc)), bD.sF.textBaseline(yJ, 0), bD.sF.textAlign(yJ, 2), yJ.fillStyle = bE.pU, yJ.fillText(m.e6, i.j, 0), text = "Win count: " +
			__fx.wins.count, textLength = yJ.measureText(text).width, fc = Math.max(5, fc), yJ.textAlign = "left", yJ.textBaseline = "middle", yJ.fillText(text, yJ.canvas.width - textLength - fc / 2, 2 * fc), aP.yI(uQ), bb.yI(), ac.vM()) {
			yJ.imageSmoothingEnabled = !1;
			var text = ac.wW("territorial.io"),
				textLength = .84 * aVD.j / text.width;
			yJ.setTransform(textLength, 0, 0, textLength, aVD.fj + .08 * aVD.j, aVD.fl), aW7 = aW7 || bD.ox.a7a(text, bD.ox.a7h, [0, 0, 0]);
			for (var fj = -1; fj <= 1; fj += 2)
				for (var fl = -1; fl <= 1; fl += 2) yJ.drawImage(aW7, fj, fl);
			yJ.drawImage(text, 0, 0), yJ.imageSmoothingEnabled = !0;
			var fc = ac.wW("logo"),
				aWH = .6666 * textLength * text.height / fc.height,
				oE = .5 * i.j,
				oF = aVD.fl + .5 * textLength * text.height - .5 * aWH * fc.height;
			yJ.setTransform(aWH, 0, 0, aWH, oE - .6 * textLength * text.width, oF), yJ.drawImage(fc, 0, 0), yJ.setTransform(aWH, 0, 0, aWH, oE + .6 * textLength * text.width - aWH * fc.width, oF), yJ.drawImage(fc, 0, 0), yJ.setTransform(1, 0, 0,
				1, 0, 0), yJ.imageSmoothingEnabled = !0
		}
	}
}

function aSY() {
	var aSr, aWI, aWJ, y4;

	function aWK(aC) {
		u.v(8, u.uw, new ux(21, {
			vD: aC,
			vE: 0,
			vF: 10
		}))
	}
	this.show = function() {
		aSr.show(), this.resize()
	}, this.ty = function() {
		aSr.ty()
	}, this.resize = function() {
		aSr.resize(), aWI.resize()
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	}, aWJ = [new x(L(374), function() {
		aWK(1)
	}, 0, 0, 1), new x(L(375), function() {
		aWK(2)
	}, 0, 0, 1), new x(L(376), function() {
		aWK(3)
	}, 0, 0, 1), new x(L(377), function() {
		aWK(0)
	}, 0, 0, 1), new x(L(378), function() {
		aWK(9)
	}, 0, 0, 1), new x(L(379), function() {
		aWK(10)
	}, 0, 0, 1), new x(L(380), function() {
		aWK(11)
	}, 0, 0, 1), new x(L(381), function() {
		aWK(13)
	}, 0, 0, 1)], y4 = [new x("⬅️ " + L(42), function() {
		u.a4q()
	})], aSr = new y3(L(382), y4), aWI = new tF(aWJ, aSr.y9)
}

function aGj(title, sX, aWL) {
	var aSr, aVU;
	this.show = function() {
		aSr.show(), this.resize()
	}, this.ty = function() {
		aSr.ty()
	}, this.resize = function() {
		aSr.resize(), aVU.resize()
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	}, aWL = aWL || [new x("⬅️ " + L(42), function() {
		u.a4q()
	}, bE.qB)], aSr = new y3(title, aWL), aVU = new u8(aSr.y9, sX), bD.sF.textAlign(aSr.y9.style, 1)
}

function aEp(data) {
	var aSr, aWM;

	function aWV(fc) {
		return fc < 60 ? 1 === fc ? fc + " Second" : fc + " Seconds" : fc < 3600 ? 1 === (fc = Math.floor(fc / 60)) ? fc + " Minute" : fc + " Minutes" : fc < 172800 ? 1 === (fc = Math.floor(fc / 3600)) ? fc + " Hour" : fc + " Hours" : (fc = Math
			.floor(fc / 172800)) + " Days"
	}

	function aWO(kD) {
		var fc = data.data.length;
		if (fc) {
			for (var vE, max = min = parseInt(data.data[0][0]), aC = 1; aC < fc; aC++) var aJT = parseInt(data.data[aC][0]),
				min = Math.min(aJT, min),
				max = Math.max(aJT, max);
			vE = kD < 0 ? min + kD : max + 1, u.v(8, u.a4v().a4w, new ux(21, {
				vD: data.vD,
				vE: vE,
				vF: vE + Math.abs(kD)
			}))
		}
	}
	if (this.show = function() {
			aSr.show(), this.resize()
		}, this.ty = function() {
			aSr.ty()
		}, this.resize = function() {
			aSr.resize(), aWM.resize()
		}, this.a5m = function(em) {
			2 === em && aSr.yA[0].sz()
		}, data.aEq) {
		aSr = new y3(L(26), [new x("⬅️ " + L(42), function() {
			u.a4q()
		})]);
		var ff = {
				ue: [],
				uk: [L(395), L(396), L(397) + " ↗"],
				ur: [12, 50, 38]
			},
			a8g = aE.data.a8g;
		if (a8g) {
			for (var fc = a8g.length, ue = ff.ue, a2A = ah.a2A, aC = 0; aC < fc; aC++) ue.push([{
				g4: aC + 1 + ".",
				ed: 0
			}, {
				g4: a2A[aC],
				ed: 0
			}, {
				g4: bI.f3.a2y(a8g[aC], 5),
				ed: 1,
				uu: a8g[aC],
				uv: 0
			}]);
			aWM = new ud(aSr.y9, ff, {
				un: 1
			})
		} else aWM = new ud(aSr.y9, ff)
	} else {
		var ff = data.data.length ? 0 : 1,
			aWL = [new x("⬅️ " + L(42), function() {
				u.a4q()
			}), new x(L(383), function() {
				aWO(-10)
			}, ff, 0, 1), new x(L(384), function() {
				aWO(10)
			}, ff, 0, 1), new x(L(329), function() {
				u.v(11, 10, new aWP({
					vD: data.vD
				}))
			})],
			uk = [L(385), L(386), L(387), L(388), L(389), L(390), L(391), L(392), L(393), L(394), L(379), L(380), "Audit Log", L(381)];
		aSr = new y3(uk[data.vD], aWL), ! function() {
			var aC, ff = {
					ue: []
				},
				ue = ff.ue,
				aWR = data.data,
				fc = aWR.length;
			fc && 0 === aWR[0][0] && 0 <= (eL = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.vD]) && (u.z.vG[eL] = aWR[0][1]);
			var oD = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.vD],
				a7n = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.vD],
				eL = [
					[L(398), L(25) + " ↗", L(399)],
					[L(398), L(400), L(401), L(402) + " ↗"],
					[L(398), L(25) + " ↗", L(401)],
					[L(398), L(25) + " ↗", L(401)],
					[L(395), L(403), L(404) + " ↗", L(405) + " ↗", L(126)],
					[L(395), L(403), L(406) + " ↗", L(407) + " ↗", L(408)],
					[L(395), L(403), L(409) + " ↗", L(410) + " ↗", L(411)],
					[L(395), L(403), L(406) + " ↗", L(407) + " ↗", L(412)],
					[L(395), L(403), L(404) + " ↗", L(405) + " ↗", L(126)],
					[L(398), L(25) + " ↗", L(401)],
					[L(398), L(25) + " ↗", L(413)],
					[L(398), L(25) + " ↗", L(401)],
					[L(395), L(403), L(404) + " ↗", L(405) + " ↗", L(414)],
					[L(398), L(25) + " ↗", L(401)]
				];
			if (ff.uk = eL[data.vD], ff.ur = [
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
				][data.vD], 0 === data.vD || 2 === data.vD || 3 === data.vD || 9 === data.vD || 10 === data.vD || 11 === data.vD || 13 === data.vD)
				for (aC = 0; aC < fc; aC++) ue.push([{
					g4: aWR[aC][0] + 1 + ".",
					ed: 0
				}, {
					g4: aWR[aC][1],
					ed: 1,
					uu: aWR[aC][4],
					uv: aWR[aC][3]
				}, {
					g4: (oD * aWR[aC][2]).toFixed(a7n),
					ed: 0
				}]);
			else if (12 === data.vD)
				for (aC = 0; aC < fc; aC++) {
					var aWU = aWR[aC][3];
					ue.push([{
						g4: "" + aWR[aC][0],
						ed: 0
					}, {
						g4: aWV(aWR[aC][4]),
						ed: 0
					}, {
						g4: aWR[aC][5],
						ed: 1,
						uu: aWR[aC][1],
						uv: 0
					}, {
						g4: aWR[aC][6],
						ed: 1,
						uu: aWR[aC][2],
						uv: 0
					}, {
						g4: br.eR(aWU, bI.f3.a2y(aWR[aC][1], 5)),
						ed: 0
					}])
				} else if (1 === data.vD)
					for (aC = 0; aC < fc; aC++) ue.push([{
						g4: aWR[aC][0] + 1 + ".",
						ed: 0
					}, {
						g4: aWR[aC][1],
						ed: 0
					}, {
						g4: (oD * aWR[aC][2]).toFixed(a7n),
						ed: 0
					}, {
						g4: aWR[aC][3],
						ed: 1,
						uu: aWR[aC][5],
						uv: aWR[aC][4]
					}]);
				else if (4 === data.vD || 5 === data.vD || 6 === data.vD || 7 === data.vD || 8 === data.vD)
				for (aC = 0; aC < fc; aC++) {
					var aWW = aWR[aC][5];
					4 === data.vD || 8 === data.vD ? "100%" === (aWW = (aWW % 64 * 100 / (aWW >> 6)).toFixed(0) + "%") && (4 === data.vD ? aWW += " (" + L(415) + ")" : aWW += " (" + L(416) + ")") : 5 === data.vD ? 32768 <= aWW && (aWW = -(aWW -
						32768)) : aWW = (oD * aWW).toFixed(a7n), ue.push([{
						g4: "" + aWR[aC][0],
						ed: 0
					}, {
						g4: aWV(aWR[aC][6]),
						ed: 0
					}, {
						g4: aWR[aC][7],
						ed: 1,
						uu: aWR[aC][1],
						uv: aWR[aC][2]
					}, {
						g4: aWR[aC][8],
						ed: 1,
						uu: aWR[aC][3],
						uv: aWR[aC][4]
					}, {
						g4: "" + aWW,
						ed: 0
					}])
				}
			aWM = new ud(aSr.y9, ff)
		}()
	}
}

function aWP(a7c) {
	var aSr, aSs, sf;
	this.show = function() {
		aSr.show(), this.resize()
	}, this.ty = function() {
		aSr.ty()
	}, this.resize = function() {
		aSr.resize(), aSs.resize()
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	}, aSr = new y3(L(417), [new x("⬅️ " + L(42), function() {
		u.aSp(10)
	})]), aSs = new sd(aSr.y9, ((sf = []).push(function() {
		var aTP, wc = new sO,
			aVB = new tU(bm.buffer.data[132], 1, function() {
				aTP.button.click()
			}),
			aVC = new tU(bm.buffer.data[131], 1, function() {
				aVB.e.focus()
			});
		wc.sR(L(334)), wc.sb(aVC), aVC.e.style.marginBottom = "0.8em", wc.sR(L(335)), wc.sb(aVB);
		return aTP = new x(L(333), function() {
			vE = Math.floor(aVC.e.value), vF = Math.floor(aVB.e.value);
			var vF, vE = {
				a6F: Math.min(vE, vF),
				aRy: Math.max(vE, vF)
			};
			u.v(8, u.a8s(10).a4w, new ux(21, {
				vD: a7c.vD,
				vE: vE.a6F,
				vF: vE.aRy
			}))
		}, 0, 0, 1), wc.sb(new u9([aTP.button])), wc
	}()), sf.push(function() {
		var aTP, wc = new sO,
			aVB = new tU(bm.buffer.data[134], 1, function() {
				aTP.button.click()
			}),
			aVC = new tU(bm.buffer.data[133], 0, function() {
				aVB.e.focus()
			});
		return wc.sR(1 === a7c.vD ? L(418) : L(419)), wc.sb(aVC), aVC.e.style.marginBottom = "0.8em", wc.sR(L(420)), wc.sb(aVB), aTP = new x(L(333), function() {
			var aVd = aVC.e.value.slice(0, 20),
				aVe = Math.abs(Math.floor(aVB.e.value));
			u.v(8, u.a8s(10).a4w, new ux(22, {
				vD: a7c.vD,
				aVd: aVd,
				aVe: aVe
			}))
		}, 0, 0, 1), wc.sb(new u9([aTP.button])), wc
	}()), sf.push(function() {
		var aTP, wc = new sO,
			aVB = new tU(bm.buffer.data[152], 1, function() {
				aTP.button.click()
			}),
			aVC = new tU(bm.buffer.data[151], 0, function() {
				aVB.e.focus()
			});
		return wc.sR(L(421)), wc.sb(aVC), aVC.e.style.marginBottom = "0.8em", wc.sR(L(420)), wc.sb(aVB), aTP = new x(L(333), function() {
			var aVd = aVC.e.value.slice(0, 5),
				aVe = Math.abs(Math.floor(aVB.e.value));
			u.v(8, u.a8s(10).a4w, new ux(28, {
				vD: a7c.vD,
				aVd: aVd,
				aVe: aVe
			}))
		}, 0, 0, 1), wc.sb(new u9([aTP.button])), wc
	}()), sf))
}

function aSl() {
	var aWa, aWb, aWc, aWd, aWe, aWf, vP, vQ, join, aWg = new Array(2);

	function aWi(button) {
		button = new te("", button, 1, 0);
		return button.tf.style.right = "0.2em", button.tf.style.textAlign = "left", button.tf.style.overflow = "hidden", button.tf.style.textOverflow = "ellipsis", button.tf.translate = !1, button
	}

	function aJI() {
		var input, aIO, lt;
		!bq.f9 || (aIO = (input = aWa.va.tT.e).value.trim().slice(0, 255)).length < 1 || (input.value = "", bq.aGm.a3j(aIO), (lt = aIO.match(new RegExp("^@[-0-9A-Za-z_]{5}\\s"))) && 2 === aIO.split("@").length && !bq.aGm.aJS() && (input.value = lt[0]
			.substring(0, 6) + " "), bM.t9()) || input.focus()
	}

	function aWh(vm) {
		var aWl = bq.z.aH5;
		aWl !== vm && (aWj(aWl, 0), aWj(vm, 1), bq.z.aH5 = vm, 0 === aWl && b1.aHn.aHo(1), 0 === vm ? (b1.aHn.aHo(0), aWa.va.nN()) : 1 === vm && aWa.vb.nN(), aWa.vl(vm), aWa.resize())
	}

	function aWj(vm, color) {
		vP.p4[vm].t1(color ? bE.pt : bE.qo), vP.p4[vm].button.classList.toggle("fx-selected", !!color)
	}
	this.aJb = function() {
			return aWa.va
		}, this.aGm = function(uu) {
			aWh(0);
			var sA = aWa.va.tT.e.value,
				uu = "@" + uu + " ";
			sA.length && !bD.tg.a71(sA, " ") && (uu = " " + uu), aWa.va.tT.e.value = sA += uu, aWa.va.tT.e.focus()
		}, this.aIt = function() {
			aWa.vb.nN()
		}, this.aHp = function() {
			var sf = bq.sf,
				sf = sf.aHm() ? sf.we ? bE.qU : bE.pt : bE.qo;
			vQ.p4[1].t1(sf), aWa.vd.nN()
		}, this.aIv = function() {
			var wc = bq.sf.sf[0];
			bV.a8(wc.fI, wc.mapSeed)
		}, this.aIu = function() {
			aWa.vj(bq.z.vk);
			var wP = bq.x4.wP,
				aWm = wP.length,
				wc = bq.sf.sf[0],
				aWn = wc ? Math.min(bq.sf.wf(wc), aWm) : 0;
			aWb.tf.textContent = "" + aWm, aWc.tf.textContent = "" + aWn, aWd.tf.textContent = aP.aB1(), aWe.tf.textContent = wc ? bq.sf.wi(wc.wN) + "   " + bV.wg.wh[wc.fI] : "", aWf[0].tf.textContent = bq.ln.aIT(wP, 0, aWm), aWf[1].tf.textContent =
				wc && wc.wN < 7 ? bq.ln.aIT(wP, 0, aWn) : "", aWg[1].tf.textContent = "MP: " + bq.z.aIp[0] + "   SP: " + bq.z.aIp[1] + "   Lobby: " + aWm, this.aHp()
		}, this.aIy = function() {
			aWa.va.nN()
		}, this.show = function() {
			bq.z.aH4++, aWa.show(), this.resize(), bq.message.show()
		}, this.ty = function() {
			aWa.ty(), bq.xU.ty(), bq.x2.ty(), bq.message.ty()
		}, this.resize = function() {
			aWa.resize(), bq.message.resize()
		}, this.a5m = function(em) {
			2 === em ? bq.sf.wd ? bq.sf.select(0) : vQ.p4[0].sz() : em < 2 && bq.sf.click(0)
		}, vP = new uC([new x(L(422), function() {
			return aWh(0), 2
		}), new x(L(26), function() {
			return aWh(1), 2
		}), new x(L(423), function() {
			return aWh(2), 2
		})], bE.qo, 0, [18, 36, 46]), vQ = new uC([new x(L(28, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
				u.y(), bq.xO(), b1.z.a54(3240), __fx.customLobby.setActive(false), u.v(5, 5)
			}),
			function() {
				u.y(), bq.xO(), b1.z.a54(3240), __fx.customLobby.setActive(false), u.v(5, 5)
			})), new x(L(424), function() {
			return bq.sf.click(0), 2
		})], bE.qo, 0, [25, 75]), aWa = new vO(vP, vQ, aJI, bq.xU.aJk, function(eL, xB) {
			bq.f9 && bq.sf.click(eL, xB)
		}), join = vQ.p4[1].button, bD.sF.vz(join, null, function() {
			bq.f9 && bq.sf.click(0, 1)
		}), aWb = new te("0", vP.p4[1].button), aWc = new te("0", vQ.p4[1].button), aWd = aWi(vP.p4[2].button), (aWe = aWi(vQ.p4[1].button)).tf.style.right = "3em", (aWf = [new te("", vP.p4[1].button, 1, 1), new te("", vQ.p4[1].button, 1, 1)])[0].tf
		.style.bottom = "0em", aWf[1].tf.style.bottom = "0em", aWf[0].tf.translate = !1, aWf[1].tf.translate = !1, aWj(bq.z.aH5, 1), (aWg = [new te(L(327), aWa.vn(), 1, 0), new te("", aWa.vn(), 1, 1)])[0].tf.style.fontSize = "0.4em", aWg[1].tf.style
		.fontSize = "0.4em"
}

function aSS() {
	var aSr, aSs, sf;
	this.show = function() {
		aSr.show(), this.resize()
	}, this.ty = function() {
		aSr.ty()
	}, this.resize = function() {
		aSr.resize(), aSs.resize()
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	}, aSr = new y3(L(425), [new x("⬅️ " + L(42), function() {
		u.v(7, u.a8s(7).a4w)
	}), new x(L(226), function() {
		bm.r0.r1(105, bJ.f3.zq(aSs.sh[0].sP[0].e.value, 5)), bm.r0.r1(106, bJ.f3.zq(aSs.sh[1].sP[0].e.value, 15)), u.v(8, u.a8s(7).a4w, new ux(18))
	})]), aSs = new sd(aSr.y9, ((sf = []).push(function() {
		var wc = new sO;
		return wc.sR(L(204)), wc.sb(new tU({
			value: "",
			eL: -1
		})), wc
	}()), sf.push(function() {
		var wc = new sO,
			aTU = (wc.sR(L(207)), new tU({
				value: "",
				eL: -1
			}));
		return aTU.e.type = "password", wc.sb(aTU), wc.sb(new u9([new x(L(208), function(e) {
			return e.textContent === L(208) ? (e.textContent = L(209), aTU.e.type = "text") : (e.textContent = L(208), aTU.e.type = "password"), !0
		}).button])), wc
	}()), sf.push(function() {
		var wc = new sO;
		return wc.sR(L(211)), wc.sS(L(426)), wc.sS(L(427)), wc.sS(L(428)), wc
	}()), sf))
}

function aSZ() {
	var aSr, aWI, aWJ, y4;

	function aWK(aC) {
		u.v(8, u.uw, new ux(21, {
			vD: aC,
			vE: 0,
			vF: 10
		}))
	}
	this.show = function() {
		aSr.show(), this.resize()
	}, this.ty = function() {
		aSr.ty()
	}, this.resize = function() {
		aSr.resize(), aWI.resize()
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	}, aWJ = [new x(L(390), function() {
		aWK(5)
	}, 0, 0, 1), new x(L(391), function() {
		aWK(6)
	}, 0, 0, 1), new x(L(392), function() {
		aWK(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aWK(12)
	}, 0, 0, 1)], y4 = [new x("⬅️ " + L(42), function() {
		u.a4q()
	})], aSr = new y3(L(429), y4), aWI = new tF(aWJ, aSr.y9)
}

function aSJ() {
	this.buffer = {}, this.vG = new Array(8), this.aSX = null, this.aSU = null, this.ub = 0, this.uo = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a8b = function(aWq) {
		aWq && (aa.f5 = aWq), u.y(), aa.dm()
	}, __fx.customLobby.setJoinFunction(() => this.a8b(1)), this.aGM = function() {
		u.v(0 === ab.a4r() ? 5 : 0)
	}, this.aV6 = function() {
		if (1 === bm.buffer.data[130].value) u.v(8, u.a4v().a4w, new ux(24, {
			aUf: bm.buffer.data[125].value,
			vE: bm.buffer.data[128].value,
			vF: bm.buffer.data[129].value
		}));
		else {
			for (var h = (h = bm.buffer.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a4v().a4w, new ux(23, {
				aUf: bm.buffer.data[125].value,
				a4P: h
			}))
		}
	}, this.aWB = function(a4w, target) {
		u.v(4, a4w, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aTG(
				"/privacy"), !1, [new x("⬅️ " + L(42), function() {
				u.v(a4w)
			}), new x("✅ Accept", function() {
				bm.r0.r1(140, 1), 0 === target ? u.v(2, a4w) : u.v(8, a4w, new ux(target))
			})]))
	}, this.aWr = function() {
		for (var aC = 0; aC < 8; aC++) this.vG[aC] = bJ.zh.zl(bK.re(5));
		this.vG[1] = "[" + this.vG[1] + "]", 5 === u.uw && (u.a4v().aLc.r1(this.vG), u.a4v().resize())
	}, this.aTQ = function(g4, qy, aAR) {
		g4 = bD.gy.a7Z(g4, 1, 1e6);
		qy = L(430, [qy]);
		return (qy += "<br>") + L(431, [__fx.utils.escapeHtml("" + aAR)]) + "<br>" + L(432, [g4 + "–" + (g4 + 2)]) + "<br>" + L(433, [g4])
	}
}

function aSc() {
	var aUC, aUD, aWs, sf;

	function aUF() {
		b7.xO(), u.aSq()[19] = null, u.a4q()
	}

	function aWz() {
		aX2(), aX0()
	}

	function aX2() {
		aWs.sQ.lastChild && u.removeChild(aWs.sQ, aWs.sQ.lastChild)
	}

	function aX0() {
		var aX3 = bV.a8j(aE.data);
		aE.data.canvas = bV.aQG(aX3, aE.data.mapSeed).a0E, aX1()
	}

	function aX1() {
		var a6X = aE.data.canvas;
		a6X.style.width = "100%", aWs.sQ.appendChild(a6X)
	}
	this.aMp = function(a6X) {
		aE.data.canvas && aX2(), aE.data.canvas = a6X, aX1()
	}, this.show = function() {
		aUC.show(), this.resize()
	}, this.ty = function() {
		aUC.ty()
	}, this.resize = function() {
		aUC.resize(), aUD.resize()
	}, this.a5m = function(em) {
		2 === em && aUC.yA[0].sz()
	}, aUC = new y3(L(355), [new x("⬅️ " + L(42), aUF)]), 2 === aE.data.mapType && b7.dm(), aUD = new sd(aUC.y9, (function(sf) {
		var wc = new sO;
		wc.sR(L(321)), wc.sY(new xz({
			oS: [L(434), L(435), L(436)],
			value: aE.data.mapType
		}, function(eL) {
			2 === (aE.data.mapType = eL) ? (b7.dm(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.xO()), u.v(20)
		})), 2 <= aE.data.mapType && (wc.sb(new uK), wc.sb(new u5({
			value: aE.data.passableWater
		}, L(437), function(value) {
			aE.data.passableWater = value
		})), wc.sb(new u5({
			value: aE.data.passableMountains
		}, L(438), function(value) {
			aE.data.passableMountains = value
		})));
		sf.push(wc)
	}(sf = []), function(sf) {
		if (0 === aE.data.mapType) {
			for (var wc = new sO, oS = (wc.sR(L(355)), []), aC = 0; aC < bV.wg.aRC.length; aC++) oS.push(bV.wg.a05[bV.wg.aRC[aC]].name);
			wc.sY(new xz({
				oS: oS,
				value: aE.data.mapProceduralIndex
			}, function(eL) {
				aE.data.mapProceduralIndex = eL, aWz()
			})), sf.push(wc)
		}
	}(sf), function(sf) {
		if (1 === aE.data.mapType) {
			for (var wc = new sO, oS = (wc.sR(L(355)), []), aC = 0; aC < bV.wg.aRD.length; aC++) oS.push(bV.wg.a05[bV.wg.aRD[aC]].name);
			wc.sY(new xz({
				oS: oS,
				value: aE.data.mapRealisticIndex
			}, function(eL) {
				aE.data.mapRealisticIndex = eL, aWz()
			})), sf.push(wc)
		}
	}(sf), function(sf) {
		var wc;
		2 === aE.data.mapType && ((wc = new sO).sR(L(439)), wc.sb(new tU(bm.buffer.data[162], 1)), wc.sR(L(440), "0.8em"), wc.sb(new u9([new x(L(441), function() {
			return b7.aMi(), !0
		}).button])), sf.push(wc))
	}(sf), function(sf) {
		var wc, tT;
		2 === aE.data.mapType && ((wc = new sO).sR(L(442)), tT = new tU({
			eL: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), wc.sb(tT), sf.push(wc))
	}(sf), function(sf) {
		var wc, tT, aTP;
		0 === aE.data.mapType && ((wc = new sO).sR("Seed"), tT = new tU({
			eL: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aWz())
		}), aTP = new x(L(346), function(e) {
			var aQB = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aQB) return tT.e.value = aE.data.mapSeed = aQB, aWz(), !0
		}), wc.sb(tT), wc.sb(new u9([aTP.button])), sf.push(wc))
	}(sf), function(sf) {
		(aWs = new sO).sR(L(443)), 2 !== aE.data.mapType ? aX0() : aE.data.canvas && aX1();
		sf.push(aWs)
	}(sf), sf))
}

function w(title, sX, aX4, aWL) {
	var aSr, aVU;
	this.show = function() {
		aSr.show(), this.resize()
	}, this.ty = function() {
		aSr.ty()
	}, this.resize = function() {
		aSr.resize(), aVU.resize()
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	}, aWL = aWL || [new x("⬅️ " + L(42), function() {
		u.a4q()
	})], aSr = new y3(title, aWL), aVU = new u8(aSr.y9, sX), aX4 && bD.sF.textAlign(aSr.y9.style, 1)
}

function aSf() {
	var aUC, aUD, aUE, sf;

	function aUF() {
		aUH(), 2 === aE.data.playerNamesType && 1 === bD.sr.a6B(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aSq()[19] = null, u.a4q()
	}

	function aUH() {
		2 === aE.data.playerNamesType && bD.sr.a6P(aUE.yY(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aUC.show(), this.resize()
	}, this.ty = function() {
		aUC.ty()
	}, this.resize = function() {
		aUC.resize(), aUD.resize()
	}, this.a5m = function(em) {
		2 === em && aUC.yA[0].sz()
	}, aUC = new y3(L(359), [new x("⬅️ " + L(42), aUF)]), aUD = new sd(aUC.y9, (function(sf) {
		var wc = new sO;
		wc.sR(L(321)), wc.sY(new xz({
			oS: [L(360), L(361), L(324)],
			value: aE.data.playerNamesType
		}, function(eL) {
			aUH(), aE.data.playerNamesType = eL, u.v(23)
		})), wc.sb(new uK), wc.sb(new u5({
			value: aE.data.selectableName
		}, L(444), function(value) {
			aE.data.selectableName = value
		})), sf.push(wc)
	}(sf = []), function(sf) {
		var wc;
		2 === aE.data.playerNamesType && ((wc = new sO).sR("Data"), aUE = new yR(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fZ || (aE.data.playerNamesData = new Array(aE.fZ), aE.data.playerNamesData
			.fill("")), aUE.yX(bD.tg.a80(aE.data.playerNamesData, 1, '"')), wc.sb(aUE), sf.push(wc))
	}(sf), sf))
}

function aSn() {
	var aUC, aUD, sf;

	function aXA() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.buffer.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var fv = 0; fv < 3; fv++) fv < h.length && (colors[aC][fv] = Number(h[fv]))
		}
		return colors
	}
	this.show = function() {
		aUC.show(), this.resize()
	}, this.ty = function() {
		aUC.ty()
	}, this.resize = function() {
		aUC.resize(), aUD.resize()
	}, this.a5m = function(em) {
		2 === em && aUC.yA[0].sz()
	}, aUC = new y3(L(445), [new x("⬅️ " + L(42), function() {
		u.a4q()
	})]), aUD = new sd(aUC.y9, ((sf = []).push(function() {
		var wc = new sO;
		return wc.sR(L(446)), wc.sW(b1.z.aTG("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", wc.sW("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), wc
	}()), sf.push(function() {
		var wc = new sO,
			eo = (wc.sR(L(447)), bm.buffer.data[174].value),
			sT = wc.sS(eo.length + " / 180"),
			aTv = (sT.style.textAlign = "center", new yR(0, 1, function(e) {
				var e = e.target.value,
					h5 = e.length;
				sT.textContent = h5 + " / 180", h5 <= 180 && bm.r0.r1(174, e)
			}));
		return aTv.e.rows = 6, aTv.e.style.fontSize = "1em", aTv.yX(eo), wc.sb(aTv), wc
	}()), sf.push(function() {
		var wc = new sO;
		wc.sR(L(345));
		for (var aC = 0; aC < 11; aC++) {
			var iz = wc.sb(new tU(bm.buffer.data[163 + aC]));
			aC && (iz.e.style.marginTop = "0.6em")
		}
		return wc.sb(new u9([new x(L(448), function() {
			for (var data = bm.buffer.data, aC = 163; aC < 174; aC++) data[aC] && bm.buffer.yn(aC, data[aC].yq);
			u.a4q(), u.aSq()[31] = null, u.v(31)
		}).button])), wc
	}()), sf.push(function() {
		var wc = new sO;
		return wc.sR("Targeting"), wc.sW(L(449)), wc.sb(new tU(bm.buffer.data[175], 0, 0)), wc
	}()), sf.push(function() {
		var wc = new sO;
		return wc.sR(L(443)), wc.sb(new u9([new x(L(208), function() {
			(new en).show(bm.buffer.data[174].value, aXA(), -1)
		}).button])), wc
	}()), sf.push(function() {
		var wc = new sO,
			aXB = (wc.sR(L(450)), wc.sW(L(451)), new tU(bm.buffer.data[176], 1, 0)),
			aXC = (wc.sb(aXB), new x(L(452), function(e) {
				return aXD.button.textContent === L(196) && b1.z.ei(0) && (bD.sF.xw(e), aTM(), b1.aTN.aXE(bm.buffer.data[176].value, aXA(), bm.buffer.data[175].value, bm.buffer.data[174].value)), !0
			}, 1)),
			aTM = function() {
				aXD.button.textContent = L(195), aXC.t1(1), aXC.button.style.color = bE.pU
			},
			aXD = new x(L(195), function(e) {
				return e.textContent === L(195) ? (e.textContent = L(196), aXC.t1(0), aXC.button.style.color = bE.qZ) : aTM(), !0
			});
		return wc.sb(new u9([aXD.button, aXC.button])), wc
	}()), sf))
}

function aSo() {
	var aSr, aSs, sf;
	this.show = function() {
		aSr.show(), this.resize()
	}, this.ty = function() {
		aSr.ty()
	}, this.resize = function() {
		aSr.resize(), aSs.resize()
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	}, aSr = new y3("🔒 " + L(453), [new x("⬅️ " + L(42), function() {
		u.a4q()
	})]), aSs = new sd(aSr.y9, ((sf = []).push(function() {
		var wc = new sO,
			tT = (wc.sW(b1.z.aTG("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", wc.sR(L(204)), new tU({
				value: "",
				eL: -1
			})),
			aTr = (wc.sb(tT), wc.sR(L(279), "0.8em"), new tU({
				value: "",
				eL: -1
			}, 0, 0)),
			aTL = (aTr.e.type = "email", aTr.e.autocomplete = "email", aTr.e.name = "email", aTr.e.inputMode = "email", aTr.e.spellcheck = !1, wc.sb(aTr), new x(L(454), function(e) {
				return bD.sF.xw(e), b1.aTN.aTs({
					action: 4,
					sA: tT.e.value.trim() + aTr.e.value.trim().substring(0, 63)
				}), !0
			}));
		return wc.sb(new u9([aTL.button])), wc
	}()), sf))
}

function aSQ() {
	var aUC, yV;

	function aXF() {
		u.y();
		var sA = bC.aXJ(yV.yY());
		(aE.a3f && 0 < sA.length && sA === bC.rq.a8X || bC.aNn.a00(sA)) && bC.aXK()
	}
	this.show = function(aXG) {
		this.aXH(aXG), aUC.show(), this.resize()
	}, this.aXH = function(aXG) {
		0 === aE.a3f ? aXG ? yV.yX(aXG) : aE.a8K.length && yV.yX(aE.a8K) : (aE.hl || (bC.rq.a8X = bC.a8Y.a39()), yV.yX(bC.aXI(bC.rq.a8X)))
	}, this.yX = function(sA) {
		yV.yX(sA)
	}, this.ty = function() {
		aUC.ty()
	}, this.resize = function() {
		aUC.resize(), yV.resize()
	}, this.a5m = function(em) {
		2 === em ? aUC.yA[0].sz() : aXF()
	}, aUC = new y3(L(455), [new x("⬅️ " + L(42), function() {
		u.aSp(1)
	}), new x(L(456), function() {
		yV.yZ()
	}), new x(L(457), function() {
		yV.ya()
	}), new x(L(458), function() {
		yV.clear()
	}), new x(L(459), function() {
		aXF()
	})]), yV = new yR(L(460)), aUC.y9.appendChild(yV.e)
}

function aSP() {
	var aSr, aSs, sf, wc;

	function aXL() {
		bA.aG8 !== bm.buffer.data[12].value ? (bA.dm(), u.v(8, 1, new ux(30))) : u.v(1)
	}
	this.show = function() {
			aSr.show(), this.resize()
		}, this.ty = function() {
			aSr.ty()
		}, this.resize = function() {
			aSr.resize(), aSs.resize()
		}, this.a5m = function(em) {
			2 === em && aSr.yA[0].sz()
		}, aSr = new y3(L(461), [new x("⬅️ " + L(42), aXL), new x(L(462), function() {
			u.y(), bm.r0.zO(), u.v(2)
		})]), sf = [], (wc = new sO).sR(L(463)), wc.sS(L(464)), sf.push(wc),
		function(sf) {
			var wc = new sO,
				h = (wc.sR(L(449)), bA.data.aGP());
			wc.sY(new xz({
				oS: h,
				value: bA.data.aGT(h)
			}, function(eL) {
				return bm.r0.r1(12, h[eL].split(":")[0]), !0
			})), sf.push(wc)
		}(sf),
		function(sf) {
			var wc = new sO,
				aXO = (wc.sR(L(489)), []);
			wc.sb(new u9([new x(L(448), function(e) {
				ba.aXP();
				for (var aC = 0; aC < aXO.length; aC++) aXO[aC].e.value = ba.aFh[aC];
				return bD.sF.xw(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aXQ.length; aC++) {
				wc.sS(ba.aXQ[aC]);
				for (var fv = 0; fv < 2; fv++) {
					var eL = 2 * aC + fv,
						tT = new tU({
							value: ba.aFh[eL],
							eL: -1
						});
					tT.e.aXR = eL, aXO.push(tT), tT.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aXS(e.target.aXR, code)
					}), fv && (tT.e.style.marginLeft = "4%"), tT.e.style.width = "48%", wc.sb(tT)
				}
			}
			sf.push(wc)
		}(sf), (wc = new sO).sR(L(465)), bm.buffer.data[1].oS = [L(466), L(467), L(468), L(469)], wc.sY(new xz(bm.buffer.data[1])), sf.push(wc), (wc = new sO).sR(L(470)), bm.buffer.data[9].oS = [L(467), L(471), L(472)], wc.sY(new xz(bm.buffer.data[
			9])), sf.push(wc), (wc = new sO).sR(L(473)), bm.buffer.data[11].oS = [L(474), L(9), L(475)], wc.sY(new xz(bm.buffer.data[11])), sf.push(wc), (wc = new sO).sR(L(476)), wc.sb(new u5(bm.buffer.data[2])), sf.push(wc), (wc = new sO).sR(L(
		477)), wc.sb(new u5(bm.buffer.data[7])), sf.push(wc), (wc = new sO).sR(L(478)), wc.sb(new u5(bm.buffer.data[8])), sf.push(wc), (wc = new sO).sR(L(479)), wc.sb(new tU(bm.buffer.data[5])), sf.push(wc), (wc = new sO).sR(L(480)), wc.sb(new u5(bm
			.buffer.data[13], L(481))), wc.sb(new u5(bm.buffer.data[14], L(482))), sf.push(wc), (wc = new sO).sR(L(483)), wc.sY(new xz({
			oS: [L(484), L(485), L(486)],
			value: aa.aKr
		}, function(aC) {
			aa.aKr = aC
		})), sf.push(wc), (wc = new sO).sR(L(487)), wc.sb(new u5(bm.buffer.data[15])), wc.sS(L(488)), wc.sb(new tU(bm.buffer.data[16], 1, 0, function(e) {
			e.target.value = bO.io(Math.floor(e.target.value), 0, 16)
		})), sf.push(wc), aSs = new sd(aSr.y9, sf)
}

function aSg() {
	var aUC, aUD, aUE, sf;

	function aUF() {
		aUH(), 2 !== aE.data.spawningType || bD.sr.a6B(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aSq()[19] = null, u.a4q()
	}

	function aUH() {
		2 === aE.data.spawningType && bD.sr.a6N(aUE.yY(), aE.data.spawningData, bV.aMs - 1)
	}
	this.show = function() {
		aUC.show(), this.resize()
	}, this.ty = function() {
		aUC.ty()
	}, this.resize = function() {
		aUC.resize(), aUD.resize()
	}, this.a5m = function(em) {
		2 === em && aUC.yA[0].sz()
	}, aUC = new y3(L(490), [new x("⬅️ " + L(42), aUF)]), aUD = new sd(aUC.y9, (function(sf) {
		var wc = new sO,
			oS = (wc.sR(L(321)), [L(346), L(358), L(324)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (oS.splice(1, 1), 0 < value) && (value = 1);
		wc.sY(new xz({
			oS: oS,
			value: value
		}, function(eL) {
			aUH(), aE.data.spawningType = eL, 0 === aE.data.gameMode && 1 === eL && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fZ)), u.v(24)
		})), sf.push(wc)
	}(sf = []), function(sf) {
		var wc = new sO;
		wc.sR("My Spawn"), wc.sb(new u5({
			value: aE.data.selectableSpawn
		}, L(491), function(value) {
			aE.data.selectableSpawn = value
		})), sf.push(wc)
	}(sf), function(sf) {
		var wc = new sO,
			aXU = (wc.sR("Seed"), new tU({
				eL: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		wc.sb(aXU), wc.sb(new u9([new x(L(346), function() {
			aXU.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), sf.push(wc)
	}(sf), function(sf) {
		var wc;
		2 === aE.data.spawningType && ((wc = new sO).sR("Data"), (aUE = new yR(0, 1, 0, 1)).yX(bD.tg.a80(aE.data.spawningData, 2)), wc.sb(aUE), sf.push(wc))
	}(sf), sf))
}

function aSO() {
	var aSr, aWI, aWJ, y4;

	function aXV(id) {
		0 !== a1.id || bm.buffer.data[140].value ? 0 === id ? u.v(8, 1, new ux(16)) : u.v(2) : u.z.aWB(u.uw, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aSr.show(), this.resize(), this.eh()
	}, this.ty = function() {
		aSr.ty()
	}, this.resize = function() {
		aSr.resize(), aWI.resize()
	}, this.eh = function() {
		8 === ab.a4r() && (bg.aXa() ? aWJ[2].t0 === bE.pg && aWJ[2].t1(0) : aWJ[2].t0 !== bE.pg && aWJ[2].t1(bE.pg), aE.hl || aE.hm || !aN.s7(aE.fM) ? aWJ[1].t0 !== bE.pg && aWJ[1].t1(bE.pg) : aWJ[1].t0 === bE.pg && aWJ[1].t1(0), aE.hl || aE
			.hm || !ax.iS(aE.fM) ? aWJ[0].t0 !== bE.pg && aWJ[0].t1(bE.pg) : aWJ[0].t0 === bE.pg && aWJ[0].t1(0))
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	}, aWJ = [new x(L(492), function() {
		aXV(0)
	}), new x(L(382), function() {
		u.v(16)
	}), new x(L(429), function() {
		u.v(17)
	}), new x(L(493), function() {
		u.z.aV6()
	}, 0, 0, 1), new x(L(455), function() {
		u.v(3, 1)
	}), new x(L(494), function() {
		u.v(18)
	}), new x(L(445), function() {
		u.v(31)
	}), new x(L(495), function() {
		u.z.a8b(2)
	}), new x(L(461), function() {
		aXV(1)
	}), new x("🔒 " + L(453), function() {
		u.v(32)
	}), new x(L(496), function() {
		var a6x, sn;
		(a6x = []).push(["Wiki", (sn = "https://territorial.io/") + "wiki/gold"]), a6x.push(["Team Games", sn + "log/team"]), a6x.push(["Battle Royale Games", sn + "log/br"]), a6x.push(["1v1 Games", sn + "log/1v1"]), a6x.push([
			"Zombie Games", sn + "log/zombies"
		]), a6x.push(["Transactions", sn + "log/transactions"]), a6x.push(["Changelog", sn + "changelog"]), 2 !== a1.id && a6x.push(["Android App", bN.aGg]), 1 !== a1.id && a6x.push(["iOS App", bN.a4n]), 0 === a1.id && a6x.push([
			"Patreon", bN.aUA
		]), a6x.push(["Terms", bN.aXb]), a6x.push(["Privacy", bN.aXc]), u.v(4, 1, new w(L(496), bD.sF.a6w(a6x), !1, [new x("⬅️ " + L(42), function() {
			u.v(1)
		})]))
	}), new x(L(497), function() {
		u.v(4, 1, new w(L(497), m.e6 + "<br>" + b1.z.aTG("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(42),
				function() {
					u.v(1)
				})]))
	}), new x(L(498), function() {
		u.v(4, 1, new w(L(498), L(505) + "<br>" + L(506), !1, [new x("⬅️ " + L(42), function() {
			u.v(1)
		}), new x(L(507), function() {
			a1.a2.a4h(), u.v(1)
		})]))
	}), new x("👁️ " + L(499), function() {
		a1.a2.a4i(), u.v(4, 1, new w(L(508), L(509) + " " + b1.z.aTG("/privacy"), !1, [new x("⬅️ " + L(42), function() {
			u.v(1)
		})]))
	})], y4 = [new x("⬅️ " + L(42), function() {
		u.z.aGM()
	})], 8 === ab.a4r() && (aWJ.unshift(new x(L(369), function() {
		u.v(30)
	})), aWJ.unshift(new x(L(502), function() {
		bg.aXa() && (u.y(), bh.a5p(), bi.du = !0)
	}, 0, 1)), aWJ.unshift(new x(L(503), function() {
		aE.hl || aE.hm || !aN.s7(aE.fM) || (bB.i3.rK(), u.y(), aN.hn && aN.a5p())
	}, 0, 1)), aWJ.unshift(new x(L(504), function() {
		aE.hl || aE.hm || !ax.iS(aE.fM) || (bY.a9E(2), bB.i3.iO(), u.y(), aN.hn && aN.a5p())
	}, 0, 1))), 1 === a1.id && 5 <= a1.e6 && aWJ.push(new x(L(500), function() {
		a1.a2.a4j()
	})), aSr = new y3(L(501), y4), aWI = new tF(aWJ, aSr.y9)
}

function aSk() {
	var aUC, aUD, aUE, sf;

	function aUF() {
		aUH(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aSq()[19] = null, u.a4q()
	}

	function aUH() {
		2 === aE.data.sResourcesType && bD.sr.a6N(aUE.yY(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aUC.show(), this.resize()
	}, this.ty = function() {
		aUC.ty()
	}, this.resize = function() {
		aUC.resize(), aUD.resize()
	}, this.a5m = function(em) {
		2 === em && aUC.yA[0].sz()
	}, aUC = new y3(L(364), [new x("⬅️ " + L(42), aUF)]), aUD = new sd(aUC.y9, (function(sf) {
		var wc = new sO;
		wc.sR(L(321)), wc.sY(new xz({
			oS: [L(322), L(323), L(324)],
			value: aE.data.sResourcesType
		}, function(eL) {
			aUH(), 2 !== eL || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fZ)), aE.data.sResourcesType = eL, u.v(28)
		})), sf.push(wc)
	}(sf = []), function(sf) {
		var wc;
		1 === aE.data.sResourcesType && ((wc = new sO).sR("Value"), wc.sb(new tU({
			eL: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.io(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), sf.push(wc))
	}(sf), function(sf) {
		var wc;
		2 === aE.data.sResourcesType && ((wc = new sO).sR("Data"), (aUE = new yR(0, 1, 0, 1)).yX(bD.tg.a80(aE.data.sResourcesData, 2)), wc.sb(aUE), sf.push(wc))
	}(sf), sf))
}

function aSi() {
	var aUC, aUD, aUE, sf;

	function aUF() {
		aUH(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aSq()[19] = null, u.a4q()
	}

	function aUH() {
		2 === aE.data.tIncomeType && bD.sr.a6N(aUE.yY(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aUC.show(), this.resize()
	}, this.ty = function() {
		aUC.ty()
	}, this.resize = function() {
		aUC.resize(), aUD.resize()
	}, this.a5m = function(em) {
		2 === em && aUC.yA[0].sz()
	}, aUC = new y3(L(362), [new x("⬅️ " + L(42), aUF)]), aUD = new sd(aUC.y9, (function(sf) {
		var wc = new sO;
		wc.sR(L(321)), wc.sY(new xz({
			oS: [L(322), L(323), L(324)],
			value: aE.data.tIncomeType
		}, function(eL) {
			aUH(), 2 !== eL || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fZ), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eL, u.v(26)
		})), sf.push(wc)
	}(sf = []), function(sf) {
		var wc;
		1 === aE.data.tIncomeType && ((wc = new sO).sR("Value"), wc.sb(new tU({
			eL: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.io(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), sf.push(wc))
	}(sf), function(sf) {
		var wc;
		2 === aE.data.tIncomeType && ((wc = new sO).sR("Data"), (aUE = new yR(0, 1, 0, 1)).yX(bD.tg.a80(aE.data.tIncomeData, 4)), wc.sb(aUE), sf.push(wc))
	}(sf), sf))
}

function aSa() {
	var aSr, aSs, sf;
	this.show = function() {
		aSr.show(), this.resize()
	}, this.ty = function() {
		aSr.ty()
	}, this.resize = function() {
		aSr.resize(), aSs.resize()
	}, this.a5m = function(em) {
		2 === em && aSr.yA[0].sz()
	}, aSr = new y3(L(494), [new x("⬅️ " + L(42), function() {
		u.a4q()
	})]), aSs = new sd(aSr.y9, ((sf = []).push(function() {
		function aTM() {
			aXD.button.textContent = L(195), aXf.e.readOnly = !1, aXg.e.readOnly = !1, aTL.t1(1), aTL.button.style.color = bE.pU
		}
		var wc = new sO,
			aXe = (wc.sW(b1.z.aTG("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", wc.sR(L(510)), new tU({
				value: bm.buffer.data[105].value,
				eL: -1
			})),
			aXf = (aXe.e.readOnly = !0, wc.sb(aXe), wc.sR(L(407), "0.8em"), new tU(bm.buffer.data[148], 0, void 0, function(e) {
				aTK(bm.buffer.data[149].value, e.target.value)
			})),
			aXg = (wc.sb(aXf), wc.sR(L(411), "0.8em"), new tU(bm.buffer.data[149], 1, void 0, function(e) {
				aTK(e.target.value, bm.buffer.data[148].value)
			})),
			aXD = (wc.sb(aXg), new x(L(195), function(e) {
				return e.textContent === L(195) ? (e.textContent = L(196), aXf.e.readOnly = !0, aXg.e.readOnly = !0, aTL.t1(0), aTL.button.style.color = bE.qZ, bm.r0.r1(149, aXg.e.value), aTK(bm.buffer.data[149].value, bm
					.buffer.data[148].value)) : aTM(), !0
			})),
			aTL = (wc.sb(new u9([aXD.button])), new x(L(14), function(e) {
				return aXf.e.readOnly && b1.z.ei(0) && (bD.sF.xw(e), aTM(), b1.aTN.aTO({
					action: 0,
					uu: bm.buffer.data[148].value,
					value: parseInt(bm.buffer.data[149].value, 10)
				})), !0
			}, 1)),
			sT = wc.sS(),
			aTK = (wc.sS(L(511)).style.fontWeight = "bold", function(g4, sA) {
				sT.innerHTML = u.z.aTQ(g4, bm.buffer.data[105].value, sA)
			});
		return wc.sb(new u9([aTL.button])), aTK(bm.buffer.data[149].value, bm.buffer.data[148].value), wc
	}()), sf))
}

function c1() {
	"function" != typeof Math.log2 && (Math.log2 = function(fj) {
		return Math.log(fj) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fj) {
		return Math.log(fj) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fj) {
		return 0 < fj ? 1 : fj < 0 ? -1 : 0
	})
}

function cn() {
	var aDM, aXi, aXj, aXk, aXh = !1;

	function aXl() {
		aXh = !0, aDM = -1, aXi = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aXi[aC] = !1;
		var a14 = Math.floor(1 + .02 * i.min);
		aXj = new Array(4), (aXk = new Array(4))[1] = aXk[3] = aXj[0] = aXj[2] = 0, aXk[0] = aXj[3] = -a14, aXj[1] = aXk[2] = a14
	}

	function aXm() {
		if (-1 !== aDM)
			if (0 !== aE.a3f && aI.oJ()) {
				for (var aXn = !1, aC = 3; 0 <= aC; aC--) aXi[aC] && (aXn = !0, jH += aXj[aC], jI += aXk[aC], ag.a5E(aXj[aC], aXk[aC]), aT.aD2());
				aXn ? bi.du = !0 : at.o9()
			} else at.o9()
	}
	this.a5k = function(eL) {
		0 !== aE.a3f && aI.oJ() && (aXh || aXl(), aXi[eL] = !0, -1 === aDM) && (aDM = setInterval(aXm, 20), aXm())
	}, this.a5n = function(eL) {
		if (0 !== aE.a3f && (aXh || aXl(), aXi[eL] = !1, -1 !== aDM)) {
			for (var aXn = !1, aC = 3; 0 <= aC; aC--) aXn = aXn || aXi[aC];
			aXn || this.o9()
		}
	}, this.o9 = function() {
		if (aXh && -1 !== aDM) {
			for (var aC = 3; 0 <= aC; aC--) aXi[aC] = !1;
			clearInterval(aDM), aDM = -1
		}
	}
}

function co() {
	this.z = new aXo, this.nI = new aXp, this.qy = new aXq, this.aHn = new aXr, this.ej = new aXs, this.aTN = new aXt, this.rd = new aXu, this.aVa = new aXv, this.aAR = new aXw, this.aXx = new aXy, this.aXz = new aY0, this.aY1 = new aY2, this.aY3 =
		new aY4, this.dm = function() {
			this.z.dm()
		}
}

function aXo() {
	var aY6, aY7;
	this.aKv = 4, this.aY5 = null, this.a4z = 0, this.fA = 0;

	function aYG() {
		return 0 === aa.aKr ? m.e8 ? 1 : 0 : aa.aKr - 1
	}

	function aYJ(oT, a4w, aYI) {
		aY7[oT].aXh = !0, aYC(oT), aY6[oT] = new aYM, aY6[oT].dm(oT, a4w, aYI)
	}

	function aYK(aC) {
		return aY7[aC].aXh && aY6[aC].aYK()
	}

	function aYC(oT) {
		aY7[oT].ec = bi.ec, aY7[oT].aY9 = !1
	}
	this.dm = function() {
		this.aY5 = new Array(this.aKv), this.aY5[0] = "territorial.io", this.aY5[1] = "1.territorial.io", this.aY5[2] = "4.territorial.io", this.aY5[3] = "5.territorial.io", aY6 = new Array(this.aKv), aY7 = new Array(this.aKv);
		for (var aC = this.aKv - 1; 0 <= aC; aC--) aY7[aC] = {
			aXh: !1,
			ec: 0,
			aY9: !1
		};
		this.aKw(0, 0, 0)
	}, this.aYA = function(aC) {
		return aY6[aC]
	}, this.eh = function() {
		for (var aC = this.aKv - 1; 0 <= aC; aC--) this.ei(aC) && bi.ec > aY7[aC].ec + 15e3 && (b1.qy.aYB(aC, aY7[aC].aY9), aYC(aC));
		!this.ei(0) && bi.ec > aY7[0].ec + 8e3 && (aY7[0].ec = bi.ec, this.aKw(0, 0, 0))
	}, this.aVX = function(id) {
		return this.aKw(0, id, 0) && this.aYD(0)
	}, this.aYE = function(aYF) {
		return aYF ? aa.aKs : aYG()
	}, this.a47 = function() {
		return aYG() ? "game.territorial.io" : "territorial.io"
	}, this.aTG = function(aYH) {
		aYH = this.a47() + aYH;
		return "<a href='https://" + aYH + "' target='_blank'>" + aYH + "</a>"
	}, this.aKw = function(oT, a4w, aYF) {
		aYF = this.aYE(aYF);
		if (aY7[oT].aXh) {
			if (aY6[oT].aYK()) return aY6[oT].aYL(a4w), aY6[oT].ei();
			aY6[oT].ty()
		}
		return aYJ(oT, a4w, aYF), !1
	}, this.aYN = function(oT, a4w) {
		console.log("Connection to Server " + oT), b1.ej.aYO(oT)
	}, this.aYD = function(aC) {
		return this.ei(aC) && aY6[aC].aYD()
	}, this.aYP = function(aC) {
		aY6[aC].aYP()
	}, this.ei = function(aC) {
		return aY7[aC].aXh && aY6[aC].ei()
	}, this.send = function(oT, aD) {
		0 !== oT && aYC(oT), aY6[oT].send(aD)
	}, __fx.customLobby.setSendFunction(this.send), this.a5V = function(oT) {
		8 === ab.a4r() && (aY7[oT].aY9 = !0, b1.nI.aYQ = !0)
	}, this.close = function(oT, aYR) {
		aYK(oT) && aY6[oT].close(aYR)
	}, this.aYS = function(oT, aYR) {
		p.a53(aYR), aYK(oT) && aY6[oT].close(aYR)
	}, this.a54 = function(aYR) {
		for (var aC = this.aKv - 1; 0 <= aC; aC--) this.close(aC, aYR)
	}, this.aYT = function(oT, aYR) {
		for (var aC = this.aKv - 1; 0 <= aC; aC--) aC !== oT && this.close(aC, aYR)
	}, this.a8Z = function() {
		0 === this.a4z && (aE.lI || aE.hl) || this.close(this.a4z, 3246)
	}, this.aYU = function(oT, e) {
		aY6[oT].ty(), p.a4o(oT, e.code)
	}
}

function aXp() {
	this.aYQ = !1, this.eh = function() {
		bi.kv() % 250 != 249 || aE.hl || aE.hm || (b1.ej.aYV(+(this.aYQ && ah.na[aE.fM]), am.lU + bQ.z.mo), this.aYQ = !1)
	}
}

function aXw() {
	this.aYX = function(oT, aD) {
		bK.dm(aD), 0 === bK.size ? b1.z.aYS(oT, 3205) : __fx.customLobby.isCustomMessage(aD) || ((0 === bK.re(1) ? function(oT) {
			var aYb = bK.re(6);
			0 === aYb ? function(oT) {
					if (0 === oT && 8 !== ab.a4r()) {
						u.z.aWr();
						for (var aYt = bK.re(12), aYu = bK.re(6), h = new Array(aYt), aC = 0; aC < aYt; aC++) h[aC] = bK.re(aYu);
						aU.aDS(h)
					}
				}(oT) : 2 === aYb ? b1.aXx.aYd(oT) : 3 === aYb || 4 === aYb ? ay.dm() : 5 === aYb ? b1.aXz.aYe() : 9 === aYb ? b1.aXz.aYf(oT) : 10 === aYb ? b1.aY1.aYg() : 11 === aYb ? b1.aXz.aYh(oT) : 12 === aYb ? b1.aY1.aYi() :
				13 === aYb ? b1.aY3.aYj() : 14 === aYb ? b1.aY3.aYk() : 15 === aYb ? b1.aXz.aYl() : 16 === aYb ? b1.aXx.aYm(oT) : 17 === aYb ? b1.aXx.aYn(oT) : 19 === aYb ? b1.aXx.aYo(oT) : 20 === aYb ? b1.aXz.aYp(oT) : 21 !== aYb &&
				22 !== aYb && (23 === aYb ? b1.aXz.aYq(oT) : 24 === aYb ? b1.aXx.aYr(oT) : 25 === aYb && b1.aY1.aYs())
		} : function(oT) {
			if (8 !== ab.a4r() && !ay.aLN()) return;
			if (oT !== b1.z.a4z) b1.z.aYS(oT, 3244);
			else if (0 === bK.re(1)) bi.a3p.aYv(bK.aD);
			else {
				var aC, oT = bK.re(2);
				if (0 === oT) {
					var rF, qy = bK.re(9);
					0 !== ah.na[qy] && 0 !== ah.na[aE.fM] && (rF = bK.re(10), aO.rE(qy, aE.fM, rF), ag.s5(qy, 1, rF))
				} else if (1 === oT) ! function() {
					var qy = bK.re(9);
					0 !== ah.na[qy] && 0 !== ah.na[aE.fM] && b6.aPl(0, [qy], !0) && aO.rW(qy, 1)
				}();
				else if (2 === oT) ! function() {
					var qy = bK.re(9),
						target = bK.re(9);
					0 !== ah.na[qy] && 0 !== ah.na[target] && 0 !== ah.na[aE.fM] && b6.aPl(1, [qy], !0) && (ag.s5(qy, 3, 96), ag.s5(target, 4, 96), aO.aAX(qy, target))
				}();
				else if (m.aA && !m.aB) {
					var fc = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fc = Math.min(bB.qu.rg.length, 540), aC = 0; aC < fc; aC++) bG.aZ1(32, bB.qu.rg[aC]);
					b1.z.send(b1.z.a4z, bG.aD)
				}
			}
		})(oT), bi.aYa())
	}
}

function aY2() {
	this.aYg = function() {
		bm.z.zD(), bm.r0.r1(105, bI.f3.uy(bI.f3.uz(5))), bm.r0.r1(106, bI.f3.uy(bI.f3.uz(15))), bm.r0.r1(109, 0), bm.r0.r1(108, bm.buffer.data[109].value), bm.r0.r1(111, bm.buffer.data[109].value + 1), bm.r0.r1(107, 0), bm.r0.r1(110, "")
	}, this.aYs = function() {
		var id = bK.re(8),
			sA = bJ.zj.a00(7);
		0 === id && (bm.z.zI(sA, bm.buffer.data[106].value), new s9(L(512, [sA])))
	}, this.aYi = function() {
		var data;
		bK.size < bG.aZ2(29) ? b1.z.aYS(0, 3254) : ((data = {
			uv: bK.re(30),
			zS: bK.re(16),
			zT: bK.re(30),
			zU: bK.re(30),
			zV: bK.re(30),
			zW: bK.aZ3(32),
			username: bJ.zj.a00(5),
			zX: bJ.zj.a00(3),
			zY: bJ.zj.a00(3),
			zZ: bK.aZ3(32),
			za: bK.aZ3(32),
			zb: bK.re(30),
			zc: bK.aZ3(32),
			zd: bK.aZ3(32),
			ze: bK.aZ3(32),
			zf: bK.aZ3(32),
			aTf: bK.aZ3(32),
			aTg: bK.aZ3(30),
			aU2: bK.aZ3(32),
			aU3: bJ.zj.a00(3),
			aTw: bK.aZ3(2),
			aTy: bK.aZ3(10),
			aTu: bJ.zj.a00(8),
			aTx: bK.aZ3(5),
			aTI: bK.re(30),
			aTX: bK.re(30),
			a4B: bK.aZ3(32),
			aTk: bK.re(3),
			aTj: bK.re(8),
			aTd: bK.re(30),
			aTe: bK.aZ3(32),
			aTi: bK.re(1),
			aTq: bJ.zj.a00(6),
			aTl: bK.re(1),
			aTm: bK.re(1),
			aTY: bK.re(16),
			aTZ: bK.re(5),
			aTa: bK.re(1),
			aZ4: bK.re(1),
			aTb: bK.re(23),
			aTS: bK.re(30),
			aU4: bK.re(1),
			aU5: bK.re(1)
		}).aU4 && (data.aU6 = bK.aZ3(32), data.aU7 = bK.re(30), data.aU8 = bK.re(30), data.aU9 = bK.re(1)), data.aZ4 && (data.aTb = -data.aTb), 8 === u.uw && (25 === u.a4v().aVW ? (data.aSt = !0, u.z.aSX = data, u.a4v().aGL(25, !1)) : (
			data.aSt = !1, bm.r0.r1(160, +(data.aU4 && data.aU9)), data.uu = bm.buffer.data[105].value, u.z.aSU = data, bm.r0.zR(data), u.a4v().aGL(16, !0))))
	}
}

function aY4() {
	this.aYj = function() {
		var aC;
		if (bK.size < bG.aZ2(23)) b1.z.aYS(0, 3259);
		else {
			var vD = bK.re(6),
				fc = bK.re(10),
				data = [];
			if (9 === vD || 10 === vD || 11 === vD || 13 === vD) {
				for (aC = 0; aC < fc; aC++) data.push([bK.re(30), bJ.zj.a00(5), bK.aZ3(32), 0, bK.re(30)]);
				8 === u.uw && u.a4v().aGL(21, !0, {
					vD: vD,
					data: data
				})
			} else if (12 === vD) {
				for (aC = 0; aC < fc; aC++) data.push([bK.re(20), bK.re(30), bK.re(30), bK.aZ3(32), bK.re(30), bJ.zj.a00(5), bJ.zj.a00(5)]);
				8 === u.uw && u.a4v().aGL(21, !0, {
					vD: vD,
					data: data
				})
			} else {
				var ia = bK.re(16);
				if (bK.aZ5(39 + 16 * ia + fc * (0 === vD ? 111 : 1 === vD ? 101 : 2 === vD || 3 === vD ? 127 : 212))) {
					if (0 === vD)
						for (aC = 0; aC < fc; aC++) data.push([bK.re(30), bJ.zh.zl(bK.re(5)), bK.re(16), bK.re(30), bK.re(30)]);
					else if (1 === vD)
						for (aC = 0; aC < fc; aC++) data.push([bK.re(16), bJ.zh.zl(bK.re(3)), bK.re(16), bJ.zh.zl(bK.re(5)), bK.re(31), bK.re(30)]);
					else if (2 === vD || 3 === vD)
						for (aC = 0; aC < fc; aC++) data.push([bK.re(30), bJ.zh.zl(bK.re(5)), bK.aZ3(32), bK.re(30), bK.re(30)]);
					else
						for (aC = 0; aC < fc; aC++) data.push([bK.re(20), bK.re(30), bK.re(30), bK.re(30), bK.re(30), bK.aZ3(32), bK.re(30), bJ.zh.zl(bK.re(5)), bJ.zh.zl(bK.re(5))]);
					8 === u.uw && u.a4v().aGL(21, !0, {
						vD: vD,
						data: data
					})
				} else b1.z.aYS(0, 3260)
			}
		}
	}, this.aYk = function() {
		if (bK.size < bG.aZ2(29)) b1.z.aYS(0, 3265);
		else {
			var aZ6 = bK.re(4),
				aZ7 = bK.re(7),
				aZ8 = bK.re(11);
			if (bK.aZ5(29 + 16 * aZ7 + 16 * aZ8 + 11 * aZ6)) {
				for (var data = [], aC = 0; aC < aZ6; aC++) {
					for (var a4Q = bJ.zh.zl(bK.re(3)), aZ9 = bK.re(8), aUg = [], fv = 0; fv < aZ9; fv++) aUg.push(bK.re(16));
					data.push({
						name: "[" + a4Q + "]",
						aUg: aUg
					})
				}
				8 === u.uw && u.a4v().aGL(23, !0, data)
			} else b1.z.aYS(0, 3266)
		}
	}
}

function aXy() {
	function aZD() {
		var id = bK.re(3);
		return 0 === id ? {
			id: id,
			uu: bK.re(30),
			aKJ: aZE(),
			s: bq.aGm.aJV(bJ.zj.a00(8))
		} : 1 === id ? {
			id: id,
			uu: bK.re(30),
			aKJ: aZE(),
			aIL: bK.re(3),
			value: bK.re(30),
			target: bK.re(30),
			aKK: aZE()
		} : 2 === id ? {
			id: id,
			uu: bK.re(30),
			aKJ: aZE(),
			aIL: bK.re(3)
		} : 3 === id ? {
			id: id,
			uu: bK.re(30),
			aKJ: aZE(),
			aIL: bK.re(3),
			value: bK.re(4),
			target: bK.re(30),
			aKK: aZE()
		} : 4 === id ? {
			id: id,
			uu: bK.re(30),
			aKJ: aZE(),
			aIL: bK.re(3),
			target: bK.re(30),
			aKK: aZE(),
			aIN: bK.re(1)
		} : 5 === id ? {
			id: id,
			aIL: bK.re(6)
		} : 6 === id ? {
			id: id,
			value: bK.re(17)
		} : null
	}

	function aZE() {
		return bK.re(1) ? bJ.zj.a00(5) : null
	}
	this.aYd = function(oT) {
		if (oT !== b1.z.fA) b1.z.close(oT, 3239);
		else if (6 !== ab.a4r()) b1.z.close(oT, 3271);
		else {
			bq.dm(), bq.z.vk = bK.re(10), bq.sf.aHh();
			for (var playerCount = bK.re(16), fv = 0; fv < playerCount; fv++) bq.x4.aH6(bK.re(30), bJ.zj.a00(5), bK.re(4), bK.re(30), bK.re(7), bK.re(16), bK.re(18), bK.re(11), bK.re(12), bK.re(6), bK.re(13), bK.re(1));
			u.v(29), bq.z.aIq(!0)
		}
	}, this.aYm = function(oT) {
		if (oT !== b1.z.fA) b1.z.close(oT, 3239);
		else if (bq.f9) {
			bq.z.aIp[0] = bK.re(20), bq.z.aIp[1] = bK.re(20);
			for (var aZA = bK.re(20), fv = 0; fv < aZA; fv++) {
				var id = bK.re(3);
				0 === id ? bq.x4.aH6(bK.re(30), bJ.zj.a00(5), 0, 1234566, 127, 0, bK.re(18), 0, bK.re(12), 0, 0, 0) : 1 === id ? bq.x4.aHQ(bK.re(16), bK.re(16), bK.re(13), bK.re(1)) : 2 === id ? bq.x4.aHM(bK.re(16), bJ.zj.a00(5)) : 3 === id ? bq
					.x4.aHO(bK.re(16)) : 4 === id ? bq.x4.aHF(bK.re(16), bK.re(4), bK.re(30), bK.re(7), bK.re(16), bK.re(11), bK.re(18)) : 5 === id ? bq.x4.aHH(bK.re(16), bK.re(1)) : 6 === id && bq.x4.aHG(bK.re(16), bK.re(6))
			}
			bq.z.vk = bK.re(10);
			for (var aZB = bK.re(10), aC = 0; aC < aZB; aC++) {
				var x8 = bK.re(13),
					aWm = bK.re(10),
					aHU = bK.re(10),
					aGo = bq.z.aGo;
				if (aGo.aHU = aHU, aGo.a4z = bK.re(10), aGo.aI9 = bK.re(10), aGo.fI = bK.re(6), aGo.mapSeed = bK.re(14), aGo.wN = bK.re(4), aGo.wo = bK.re(1), aGo.spawningSeed = bK.re(14), aGo.a48 = bK.re(30) - 1, aGo.aHV = null, 8 === aGo.wN) {
					aGo.aHV = new Array(aHU);
					for (fv = 0; fv < aHU; fv++) aGo.aHV[fv] = bK.re(9)
				}
				x8 = bq.x4.aHR(x8);
				if (bq.aGo.dv(x8, aWm, aHU)) return;
				bq.x4.aHX(x8, aWm, aHU, aGo.aHV)
			}
			var aZC = bK.re(13);
			aZC && bq.x4.aHa(aZC), bq.sf.aHh(), bq.z.aHx()
		} else b1.z.close(oT, 3251)
	}, this.aYr = function(oT) {
		oT === b1.z.fA && bq.f9 && bq.sf.aHq(bK.re(13), bK.re(1))
	}, this.aYn = function(oT) {
		if (oT !== b1.z.fA) b1.z.close(oT, 3272);
		else if (bq.f9) {
			for (var tj = bq.z.tj, xN = (bq.z.tk = bK.re(20), bK.re(6)), aC = 0; aC < xN; aC++) {
				var aKH = aZD();
				bq.tx.aKG(aKH), bq.tx.aKO(aKH), tj.push(aKH)
			}
			tj.length > bq.z.tt && tj.splice(0, tj.length - bq.z.tt), bq.z.aIx()
		} else b1.z.close(oT, 3273)
	}, this.aYo = function(oT) {
		var aKH;
		oT !== b1.z.fA ? b1.z.close(oT, 3276) : bq.f9 ? (aKH = aZD(), bq.tx.aKG(aKH), bq.message.aHj(aKH)) : b1.z.close(oT, 3277)
	}
}

function aY0() {
	this.aYe = function() {
		for (var id = bK.re(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.re(8), bK.re(8), bK.re(8)]);
		var eo = bJ.zj.a00(8);
		bX.eV.el({
			id: id,
			colors: colors,
			eo: eo
		})
	}, this.aYp = function(oT) {
		var aZF = bK.re(3),
			ff = bK.re(5),
			ff = bl.aZG.aZH(ff, bK.re(30), bK.re(30), bK.re(30));
		b1.ej.aZI(oT, ff, aZF, 0)
	}, this.aYf = function(oT) {
		this.aYp(oT), bm.r0.r1(183, bI.f3.uy(bI.f3.uz(15))), 0 === oT && 0 === bm.buffer.data[105].value.length ? b1.ej.ek(0) : b1.aTN.aZJ(oT), 4 === b1.z.aYA(oT).aZK() ? 6 === ab.a4r() && b1.aHn.aKx(oT) : 5 !== b1.z.aYA(oT).aZK() || 8 !== ab
			.a4r() && 10 !== ab.a4r() || b1.qy.aLL()
	}, this.aYh = function(oT) {
		var id = bK.re(6);
		1 === id ? (bm.r0.r1(160, bK.re(30)), b1.z.aYP(oT), aU.aDO || b1.ej.ek(1), bA.aGH(), 8 === u.uw && u.a4v().aVj()) : 21 === id ? 8 === u.uw && u.a4v().aGL(17) : 22 === id && (bm.r0.r1(106, bm.buffer.data[110].value), bm.r0.r1(110, ""),
			8 === u.uw) && u.a4v().aGL(15)
	}, this.aYl = function() {
		var fc = bK.re(16),
			aZL = bK.re(16);
		if (bK.aZ5(55 + 10 * fc + 16 * aZL)) {
			for (var h = [], aC = 0; aC < fc; aC++) h.push(bJ.zh.zl(bK.re(10)));
			bA.aGK(h)
		} else b1.z.aYS(0, 3270)
	}, this.aYq = function(oT) {
		for (var aZF = bK.re(3), ff = bK.re(5), aZF = {
				aZF: aZF,
				tD: bl.aZG.aZH(ff, bK.re(30), bK.re(30), bK.re(30))
			}, ff = bK.aZ3(32), aZM = [], aC = 0; aC < 17; aC++) aZM.push(new Uint8Array(bK.re(16)));
		for (aC = 0; aC < 17; aC++)
			for (var h = aZM[aC], fc = h.length, iV = 0; iV < fc; iV++) h[iV] = bK.aZ3(8);
		bx.show(aZM, ff, oT, aZF)
	}
}

function aXq() {
	this.aYB = function(oT, aY9) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, aY9 ? 1 : 0), bG.a9(3, 0 === aE.a3f ? bq.f9 ? 6 : 0 : aE.hl ? 1 : aE.lI ? 7 : aE.lG < 7 ? 2 : 8 === aE.lG ? 4 : 9 === aE.lG ? 5 : 3), b1.z.send(oT, bG.aD)
	}, this.aLL = function() {
		bG.a8(59), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.fA), bG.a9(10, ay.aI9), bG.a9(10, ay.aLE), bG.a9(10, m.eA), bG.a9(14, m.dz), b1.z.send(b1.z.a4z, bG.aD)
	}, this.qz = function(fO) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fO), b1.z.send(b1.z.a4z, bG.aD)
	}, this.r2 = function(jG, k7) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, jG), bG.a9(10, k7), b1.z.send(b1.z.a4z, bG.aD)
	}, this.r6 = function(jG, r4) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, jG), bG.a9(9, r4), b1.z.send(b1.z.a4z, bG.aD)
	}, this.r8 = function(jG, r7) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, jG), bG.a9(27, r7), b1.z.send(b1.z.a4z, bG.aD)
	}, this.rA = function(jG, ny) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, jG), bG.a9(16, ny), b1.z.send(b1.z.a4z, bG.aD)
	}, this.rD = function(k7) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, k7), b1.z.send(b1.z.a4z, bG.aD)
	}, this.rH = function(eL) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eL), b1.z.send(b1.z.a4z, bG.aD)
	}, this.rJ = function(rI) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, rI), b1.z.send(b1.z.a4z, bG.aD)
	}, this.rL = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a4z, bG.aD)
	}, this.rM = function(jG, fO, k7) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, jG), bG.a9(10, k7), bG.a9(22, fO), b1.z.send(b1.z.a4z, bG.aD)
	}, this.rU = function(aZN, aZO) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, aZO), bG.a9(10, aZN), b1.z.send(b1.z.a4z, bG.aD)
	}, this.rX = function(aAR) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, aAR), b1.z.send(b1.z.a4z, bG.aD)
	}, this.rb = function(aZP, target) {
		var aC, fc = aZP.length;
		for (bG.a8(14 + 9 * fc), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fc; aC++) bG.a9(9, aZP[aC]);
		b1.z.send(b1.z.a4z, bG.aD)
	}
}

function aXt() {
	this.aZQ = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.ej.aZR(), b1.z.send(0, bG.aD)
	}, this.aZJ = function(oT) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.f3.zx(bm.buffer.data[105].value, 5), bJ.f3.zx(bm.buffer.data[106].value, 15), b1.z.send(oT, bG.aD)
	}, this.aVk = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.f3.zx(bm.buffer.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aTs = function(a7c) {
		var fc = a7c.sA.length;
		bG.a8(21 + 16 * fc), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a7c.action), bG.a9(8, fc), bI.zh.zw(a7c.sA), b1.z.send(0, bG.aD)
	}, this.aXE = function(zW, colors, aZT, eo) {
		bH.dm(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(zW, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var fv = 0; fv < 3; fv++) bH.a9(8, colors[aC][fv]);
		zW = bA.data.aGO(aZT.trim());
		bH.a9(8, -1 === zW ? 255 : zW), bI.zj.a39(eo.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.aZU())
	}, this.aTT = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.f3.zx(data.uu, 5), b1.z.send(0, bG.aD)
	}, this.aTO = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.f3.zx(data.uu, 5), bG.aZ1(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aXu() {
	this.rc = function() {
		for (var fc = aE.ky, a3U = bU.result.a3U, lt = a3U.length, a4J = (bG.a8(17 + 16 * fc + 33 * lt), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, lt), bG.a9(1, +(2 === aE.a3c)), bG.a9(1, aE.a3y % 2), ah.a4J), aC = 0; aC < fc; aC++) bG.a9(16, a4J[
		aC]);
		for (var hQ = ah.hQ, aC = 0; aC < lt; aC++) {
			var hA = a3U[aC];
			bG.a9(9, hA), bG.a9(24, hQ[hA])
		}
		b1.z.send(b1.z.a4z, bG.aD)
	}
}

function aXv() {
	this.aVb = function(vD, vE, vF) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, vD), bG.a9(1, +(vE < 0)), bG.a9(1, +(vF < 0)), bG.a9(30, Math.abs(vE)), bG.a9(30, Math.abs(vF)), b1.z.send(0, bG.aD)
	}, this.aVc = function(vD, aVd, aVe) {
		bG.a8(18 + 16 * aVd.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, vD), b1.ej.aZV(aVd), bG.a9(30, aVe), b1.z.send(0, bG.aD)
	}, this.aVh = function(vD, aVd, aVe) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, vD), bJ.f3.zx(aVd, 5), bG.a9(30, aVe), b1.z.send(0, bG.aD)
	}, this.aVf = function(aUf, a4P) {
		for (var fc = a4P.length, ia = 0, aC = 0; aC < fc; aC++) ia += a4P[aC].length;
		for (bG.a8(21 + 3 * fc + 16 * ia), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aUf), bG.a9(4, fc), bG.a9(7, ia), aC = 0; aC < fc; aC++) bG.a9(3, a4P[aC].length), bI.zh.zw(a4P[aC]);
		b1.z.send(0, bG.aD)
	}, this.aVg = function(aUf, vE, vF) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aUf), bG.a9(1, +(vE < 0)), bG.a9(1, +(vF < 0)), bG.a9(20, Math.abs(vE)), bG.a9(20, Math.abs(vF)), b1.z.send(0, bG.aD)
	}
}

function aXr() {
	this.aKx = function(oT) {
		var username = bm.buffer.data[122].value.slice(0, 20),
			username = (bG.a8(22 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.eA), b1.ej.aZV(username), bD.color.a6c(bm.z.zL()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.fA = oT, b1.z.send(oT, bG.aD)
	}, this.aHo = function(aZW, a7c) {
		bH.dm(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, aZW), 2 === aZW ? bH.a9(30, a7c) : 4 === aZW ? (bH.a9(13, a7c.x8), bH.a9(1, a7c.xB)) : 3 === aZW ? bI.zj.a39(a7c, 8, bH) : 5 === aZW ? (bH.a9(3, a7c.id), bH.a9(3, a7c.value), bH.a9(30, a7c
			.uu)) : 6 === aZW && (bH.a9(2, a7c.wN), bH.a9(30, a7c.uu)), b1.z.send(b1.z.fA, bH.aZU())
	}
}

function aXs() {
	this.aYO = function(oT) {
		var aZd;
		bG.a8(55 + bl.aZX.re()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.dz), bG.a9(4, a1.id), bG.a9(7, a1.e6), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), aZd = bA.aGN(), bG.a9(8, aZd[0]), bG.a9(8, aZd[1]), bl.aZX
		.a39(), b1.z.send(oT, bG.aD)
	}, this.aZI = function(oT, tD, aZF, aZZ) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, aZF), bG.a9(30, tD), bG.a9(30, aZZ), b1.z.send(oT, bG.aD)
	}, this.fB = function(f6) {
		bH.dm(), bH.a9(1, 0), bH.a9(6, 6), bI.zj.a39(f6, 16, bH), b1.z.send(b1.z.fA, bH.aZU())
	}, this.ek = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.xd = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aGJ = function(id, sA) {
		var fc = Math.min(sA.length, 63);
		bG.a8(19 + 16 * fc), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fc), bI.zh.zw(sA), b1.z.send(0, bG.aD)
	}, this.aZa = function(aWq, sc) {
		bG.a8(7 + 26 * sc.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < sc.length; aC++) bG.a9(16, sc[aC][0]), bG.a9(10, sc[aC][1]);
		b1.z.send(aWq, bG.aD)
	}, this.aYV = function(aZb, aZc) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, aZb), bG.a9(12, aZc), b1.z.send(b1.z.a4z, bG.aD)
	}, this.aZV = function(username) {
		bG.a9(5, username.length), bI.zh.zw(username)
	}, this.pE = function(pF, pG, oT, pow) {
		bG.a8(88), bG.a9(1, 0), bG.a9(6, 8), bG.a9(3, pow.aZF), bG.a9(30, pow.tD), bG.aZ1(32, pG), bG.a9(16, pF), b1.z.send(oT, bG.aD)
	}
}

function aYM() {
	var aZe, aZf, b, aZg = ["wss://", "/s50/", "/s51/", "/s52/"],
		aZh = 0;

	function aYN() {
		b1.z.aYN(aZe, aZf)
	}

	function aZk(e) {
		b1.aAR.aYX(aZe, new Uint8Array(e.data))
	}

	function aZl() {}

	function aYU(e) {
		b1.z.aYU(aZe, e)
	}
	this.dm = function(eL, a4w, aYI) {
		aZe = eL, aZf = a4w,
			function(aYI) {
				aYI = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : m.e0 ? "ws://localhost:" + (7130 + aZe) + "/" : aYI ? aZg[0] + "game.territorial.io/x0" + aZe + "/" : aZg[0] + b1.z.aY5[aZe] + aZg[1 + m.dy];
				(b = new WebSocket(aYI)).binaryType = "arraybuffer", b.onopen = aYN, b.onmessage = aZk, b.onclose = aYU, b.onerror = aZl
			}(aYI)
	}, this.aZj = function() {
		return b.readyState === b.CONNECTING
	}, this.ei = function() {
		return b.readyState === b.OPEN
	}, this.aYD = function() {
		return aZh
	}, this.aYP = function() {
		aZh = 1
	}, this.aYK = function() {
		return this.aZj() || this.ei()
	}, this.aYL = function(a4w) {
		aZf = a4w
	}, this.aZK = function() {
		return aZf
	}, this.send = function(aD) {
		this.ei() && b.send(aD)
	}, this.close = function(aYR) {
		this.aYK() && (this.ty(), b.close(aYR))
	}, this.ty = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dR() {
	var gap, aZm = !1,
		wO = 0,
		j = 0,
		v1 = 0,
		canvas = null,
		p0 = null,
		a6C = null;

	function aZq() {
		for (var aC = aE.a0t; 0 <= aC; aC--) a6C[aC] = 0;
		for (aC = am.lU - 1; 0 <= aC; aC--) a6C[bj.fa[am.lZ[aC]]] += ah.hQ[am.lZ[aC]];
		aZm = !0
	}

	function aZo() {
		for (var aZv, aZt = 0, fc = 0, em = Math.floor(j / 2), eK = Math.floor(v1 / 2), aZu = 1.5 * Math.PI, aC = aE.a0t; 0 <= aC; aC--) fc += a6C[aC], 0 === a6C[aC] && aZt++;
		if (aZm = !1, p0.clearRect(0, 0, j, j), 0 < fc)
			if (aZt === aE.a0t) {
				for (aC = aE.a0t; 0 <= aC; aC--)
					if (0 < a6C[aC]) {
						! function(aC, em, eK) {
							p0.fillStyle = bj.aZz[bj.lL[aC]], p0.beginPath(), p0.arc(em, em, eK, 0, 2 * Math.PI), p0.fill()
						}(aC, em, eK);
						break
					}!
				function(em) {
					var fontSize = em / 3;
					p0.font = bD.sF.sI(1, fontSize), p0.fillStyle = bE.pU, p0.fillText("100%", em, em + .1 * fontSize)
				}(em)
			} else {
				for (aC = 0; aC <= aE.a0t; aC++) 0 < a6C[aC] && (aZv = aZu + 2 * Math.PI * a6C[aC] / fc, aZy(p0, bj.aZz[bj.lL[aC]], em, eK, aZu, aZv), function(em, eK, aZu, aZv) {
					var g4 = (aZv - aZu) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eK * Math.min(g4, .37);
					fontSize < 8 || (aZu = (aZu + aZv) / 2, aZv = (__fx.settings.detailedTeamPercentage ? (100 * g4).toFixed(2) : Math.floor(100 * g4 + .5)) + "%", eK *= .525 - Math.max(.6 * (g4 - .7), 0), p0.font = bD.sF.sI(1, fontSize), p0
						.fillStyle = bE.pU, p0.fillText(aZv, em + Math.cos(aZu) * eK, em + Math.cos(aZu + 1.5 * Math.PI) * eK))
				}(em, eK, aZu, aZv), 0 !== aC && aa1(p0, em, eK, aZu), aZu = aZv);
				aa1(p0, em, eK, 1.5 * Math.PI)
			} aa2(p0, em, eK)
	}

	function aZy(ih, color, em, eK, aZu, aZv) {
		ih.fillStyle = color, ih.beginPath(), ih.arc(em, em, eK, aZu, aZv), ih.lineTo(em, em), ih.fill()
	}

	function aa1(ih, em, eK, aa3) {
		ih.beginPath(), ih.moveTo(em, em), ih.lineTo(em + Math.cos(aa3) * eK, em + Math.cos(aa3 + 1.5 * Math.PI) * eK), ih.stroke()
	}

	function aa2(ih, em, eK) {
		ih.beginPath(), ih.arc(em, em, eK, 0, 2 * Math.PI), ih.stroke()
	}
	this.dm = function() {
		if (aE.iX) {
			wO = 0, a6C = new Uint32Array(aE.a0t + 1);
			for (var aC = aE.a0t; 0 <= aC; aC--) a6C[aC] = 0;
			for (aC = am.lU - 1; 0 <= aC; aC--) a6C[bj.fa[am.lZ[aC]]] += 1;
			this.resize()
		} else a6C = p0 = canvas = null
	}, this.aBw = function() {
		return j
	}, this.resize = function() {
		aE.iX && (j = Math.floor(.95 * (a1.a2.ip() && !aE.o4 ? .18 * i.min : .13 * i.iq)), j = (j *= 1 + (.5 + .2 * a1.a2.ip()) * aE.o4) + j % 2, gap = Math.max(1, .015 * j), v1 = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (p0 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, p0.strokeStyle = bE.pU, bD.sF.textAlign(p0, 1), bD.sF.textBaseline(p0, 1), aZo())
	}, this.lV = function(aZp) {
		aZp && aZq();
		var ed, aZp = this.lX();
		return bj.lL[aZp] || (aZp = function() {
			for (var lW = -1, aC = aE.a0t; 1 <= aC; aC--)(-1 === lW || a6C[aC] > a6C[lW]) && (lW = aC);
			return lW
		}(), ed = ah.hQ[mZ[0]], -1 !== aZp && a6C[aZp] > ed) ? a6C[aZp] : ed
	}, this.a4c = function() {
		return wO = 31, this.eh(), this.lX()
	}, this.lX = function() {
		for (var lW = 0, aC = aE.a0t; 0 < aC; aC--) a6C[aC] > a6C[lW] && (lW = aC);
		return lW
	}, this.kz = function(aZs) {
		for (var h5 = 0, lZ = am.lZ, fa = bj.fa, fc = am.lU, gG = bR.gG, aC = 0; aC < fc; aC++) {
			var hA = lZ[aC];
			fa[hA] === aZs && (gG[h5++] = hA)
		}
		bR.g7[0] = h5
	}, this.lY = function(aZs) {
		for (var h5 = 0, lZ = am.lZ, fa = bj.fa, fc = am.lU, gG = bR.gG, aC = 0; aC < fc; aC++) {
			var hA = lZ[aC];
			fa[hA] !== aZs && (gG[h5++] = hA)
		}
		bR.g7[0] = h5
	}, this.a79 = function() {
		for (var h5 = 0, aC = aE.a0t; 0 <= aC; aC--) h5 += 0 < a6C[aC];
		return h5
	}, this.eh = function() {
		aE.iX && 32 <= ++wO && (wO = 0, aZq())
	}, this.nN = function() {
		aE.iX && aZm && aZo()
	}, this.ws = function(ih, h5, size) {
		var em = size >> 1,
			eK = Math.floor(.4 * size),
			aZu = 1.5 * Math.PI;
		ih.clearRect(0, 0, size, size), ih.lineWidth = .042 * size, ih.strokeStyle = bE.pU;
		for (var aC = 0; aC < h5; aC++) {
			var aZv = aZu + 2 * Math.PI / h5;
			aZy(ih, bj.aZz[aC + 1], em, eK, aZu, aZv), 0 !== aC && aa1(ih, em, eK, aZu), aZu = aZv
		}
		aa1(ih, em, eK, 1.5 * Math.PI), aa2(ih, em, eK)
	}, this.yI = function() {
		aE.iX && (aE.o4 ? yJ.drawImage(canvas, bf.gap, bf.gap) : yJ.drawImage(canvas, bf.gap, aBv + 2 * bf.gap))
	}
}

function di() {
	function aa9(fj, fc, fl, a3J, aDD, g2) {
		if (!(fl < 1 || aDD < fl))
			for (var aC = 0; aC <= fc; aC++) {
				var fG = bP.jK(fj, fl);
				if (a3J(fG)) return fG >> 2;
				fj += g2
			}
		return -1
	}

	function aaD(fl, fc, fj, a3J, aa7, g2) {
		if (!(fj < 1 || aa7 < fj)) {
			fc = Math.max(fc, 0);
			for (var aC = 0; aC <= fc; aC++) {
				var fG = bP.jK(fj, fl);
				if (a3J(fG)) return fG >> 2;
				fl += g2
			}
		}
		return -1
	}

	function aaH(j7, j8, aa4) {
		return -1 !== j8 && (-1 === j7 || bP.j9(j8, aa4) < bP.j9(j7, aa4)) ? j8 : j7
	}
	this.i2 = function(aa4) {
		return this.a3j(aa4, function(fG) {
			return ad.fX(fG)
		})
	}, this.i8 = function(aa4) {
		return this.a3j(aa4, function(fG) {
			return ad.aM3(fG, aE.fM)
		})
	}, this.a3j = function(aa4, a3J) {
		return function(aa4, aa5, a3J) {
			for (var hs = bP.fk(aa4), hu = bP.fm(aa4), aa7 = bV.fn - 2, aDD = bV.fo - 2, aa8 = -1, ff = 0; ff < aa5; ff++) {
				var aDC = Math.max(hs - ff, 1),
					aQh = Math.max(hu - ff, 1),
					a1U = Math.min(hs + ff, aa7),
					a1T = Math.min(hu + ff, aDD),
					j7 = aa9(hs, a1U - hs, hu - ff, a3J, aDD, 1),
					j8 = aa9(hs - 1, hs - aDC - 1, hu - ff, a3J, aDD, -1),
					a1U = aa9(hs, a1U - hs, hu + ff, a3J, aDD, 1),
					aDC = aa9(hs - 1, hs - aDC - 1, hu + ff, a3J, aDD, -1),
					aaC = aaD(hu, a1T - hu - 1, hs - ff, a3J, aa7, 1),
					aaE = aaD(hu - 1, hu - aQh - 2, hs - ff, a3J, aa7, -1),
					a1T = aaD(hu, a1T - hu - 1, hs + ff, a3J, aa7, 1),
					aQh = aaD(hu - 1, hu - aQh - 2, hs + ff, a3J, aa7, -1);
				if (aa8 = aaH(aa8, j7, aa4), aa8 = aaH(aa8, j8, aa4), aa8 = aaH(aa8, a1U, aa4), aa8 = aaH(aa8, aDC, aa4), aa8 = aaH(aa8, aaC, aa4), aa8 = aaH(aa8, aaE, aa4), aa8 = aaH(aa8, a1T, aa4), 0 <= (aa8 = aaH(aa8, aQh, aa4)) && ff *
					ff >= bP.j9(aa8, aa4)) return aa8
			}
			return -1
		}(aa4, bP.im(), a3J)
	}
}

function dA() {
	function aaI(key, size) {
		var aXG;
		return "undefined" == typeof URLSearchParams || (aXG = window.location.search, "string" != typeof(aXG = new URLSearchParams(aXG).get(key))) || aXG.length < 1 ? null : bJ.f3.zq(aXG, size)
	}
	this.dv = function() {
		if (0 !== a1.id) return !1;
		var a48 = aaI("r", 6);
		if (! function() {
				var value = aaI("account", 5);
				if (!value && !(value = aaI("a", 5))) return void bL.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (bL.clear(), u.v(8, u.uw, new ux(1e3, {
					action: 0,
					uu: value,
					uv: 0
				})), !0) : (bL.clear(), !1)
			}()) {
			if (!this.clear()) return !1;
			if (!a48) return !1;
			this.aUB("r", a48), u.v(3, 0, L(513)), bC.aaK(a48)
		}
		return !0
	}, this.clear = function() {
		var a4m = new URL(window.location.href);
		a4m.search = "";
		try {
			return history.replaceState(null, "", a4m.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aUB = function(key, value) {
		if (0 === a1.id) try {
			var a4m = new URL(window.location.href),
				hA = a4m.searchParams;
			hA.set(key, value), a4m.search = hA.toString(), history.replaceState(null, "", a4m.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cp() {
	var aaM, h;
	this.dm = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.g3(32768 * aC, 100);
		this.a8O(0)
	}, this.value = function(hA) {
		return h[hA]
	}, this.aQJ = function() {
		return bO.g3(aaM - 1, 2)
	}, this.a8O = function(aQB) {
		aaM = 2 * aQB % 32768 + 1
	}, this.random = function() {
		return aaM = 167 * aaM % 32768
	}, this.kF = function(nV) {
		return bO.g3(nV * this.random(), 32768)
	}, this.kq = function(hA) {
		return 0 !== hA && this.random() < this.value(hA)
	}, this.jb = function(fv, fw) {
		return fv + this.kF(fw - fv)
	}
}

function d6() {
	function aaU(sA) {
		3 === u.uw && u.a4v().yX(sA)
	}
	this.rq = new aaN, this.a8Y = new aaO, this.aNn = new aaP, this.dm = function() {
		aE.hl || this.rq.dm()
	}, this.eh = function() {
		aE.hl || (this.rq.eh(), 3 !== u.uw) || bi.kv() % 15 != 5 && 2 !== aE.a3f || u.a4v().aXH()
	}, __fx.replay.restartReplay = () => this.aXK(), this.aXK = function() {
		var aaR = 0 !== aE.a3f,
			aaS = aE.a8J;
		aaR || ab.aL7(), aE.a8H.a8i(), aE.data.canvas = null, b1.z.close(b1.z.a4z, 3257), b1.z.a4z = 0, aE.data.isReplay = 1, aE.a8L(), aaR && (aE.a8J = aaS)
	}, this.aXJ = function(sA) {
		var aC = sA.indexOf("=");
		return 0 <= aC ? sA.substring(aC + 1) : sA
	}, __fx.replayHistory.load = saved => {
		saved = bC.aXJ(saved), bC.aNn.a00(saved) && bC.aXK()
	}, this.aaK = function(id) {
		var aaT = new XMLHttpRequest;
		aaT.open("GET", "https://" + b1.z.a47() + "/log/?r=" + id), aaT.onload = function() {
			var sA = 200 === aaT.status ? aaT.responseText : "";
			aaU(sA.length ? sA : L(514))
		}, aaT.onerror = function() {
			aaU(L(515))
		}, aaT.send()
	}, this.aXI = function(sA) {
		return sA
	}
}

function aaN() {
	this.aaV = null, this.aaW = null, this.aaX = null, this.aaY = null, this.aaZ = null, this.aaa = null, this.a8X = "";
	var aab = 0;
	this.dm = function() {
		this.aaV = [], this.aaW = [], this.aaX = [], this.aaY = [], this.aaZ = [0], this.aaa = [0], aab = 0, this.a8X = ""
	}, this.rr = function(id, gL, gN, gP) {
		aE.hl || 2 === aE.a3f || (0 === this.aaZ[aab] && (this.aaa[aab] ? (this.aaZ.push(1), this.aaa.push(0), aab++) : this.aaZ[aab] = 1), this.aaV.push(id), this.aaW.push(gL), this.aaX.push(void 0 === gN ? 0 : gN), this.aaY.push(void 0 === gP ?
			0 : gP), this.aaa[aab]++)
	}, this.eh = function() {
		0 === this.aaZ[aab] ? this.aaa[aab]++ : (this.aaZ.push(0), this.aaa.push(0), aab++)
	}
}

function aaP() {
	var aac = 0;

	function aag(sA, id) {
		console.log(sA), aac || (id ? 1 === id ? aO.a9r = L(517) + ": " + sA : u.v(4, 3, new w(L(518), sA, 1)) : u.v(4, 3, new w("⚠️ " + L(516), sA, 1)))
	}
	this.a00 = function(sA, aad) {
		var iz, sc;
		return aac = aad, bJ.f3.zt(bJ.f3.zr(bJ.f3.zp(sA))), aO.a9r = "", !! function() {
			if (bK.size < 10) aag("File Too Small");
			else {
				var aai = bK.re(12),
					s = (aai !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, aag(s = (s += "   Found: " + aai) + ("   Compatible at " + b1.z.a47() + "/" + aai), 1)), bK.re(12)),
					aaj = bK.re(31);
				if (aaj !== bK.size) aag("Size Error: Stated Size " + aaj + " Actual Size " + bK.size);
				else if (function(k, aai) {
						for (var hA = bK.aD, fc = bK.size, aZc = aai, aC = 3; aC < fc; aC++) aZc = aZc + hA[aC] & 4095;
						return aZc === k || (aag("Hash Error: " + aZc + " " + k + " " + fc), !1)
					}(s, aai)) return 1
			}
			return
		}() && (iz = bK, (sc = aE.data = new a8G).mapType = iz.re(2), sc.mapProceduralIndex = iz.re(8), sc.mapRealisticIndex = iz.re(8), sc.mapSeed = iz.re(14), sc.mapName = iz.aal(5), 2 === sc.mapType && iz.aam(), sc.passableWater = iz.re(
			1), sc.passableMountains = iz.re(1), sc.playerCount = iz.re(10), sc.humanCount = iz.re(10), sc.selectedPlayer = iz.re(9), sc.gameMode = iz.re(1), sc.playerMode = iz.re(2), sc.battleRoyaleMode = iz.re(2), sc.numberTeams = iz.re(4),
			sc.isZombieMode = iz.re(1), sc.isContest = iz.re(1), sc.isReplay = iz.re(1), sc.elo = iz.aan(2, 14, 2), sc.colorsType = iz.re(1), sc.colorsPersonalized = iz.re(1), sc.colorsData = iz.aan(10, 18, 512), sc.selectableColor = iz.re(
			1), sc.teamPlayerCount = iz.aan(4, 10, 9), sc.neutralBots = iz.re(1), sc.botDifficultyType = iz.re(2), sc.botDifficultyValue = iz.re(4), sc.botDifficultyTeam = iz.aan(4, 4, 9), sc.botDifficultyData = iz.aan(10, 4, 512), sc
			.spawningType = iz.re(2), sc.spawningSeed = iz.re(14), sc.spawningData = iz.aan(11, 12, 1024), sc.selectableSpawn = iz.re(1), sc.playerNamesType = iz.re(2), sc.playerNamesData = iz.aao(10, 5, 512), sc.selectableName = iz.re(1), sc
			.aIncomeType = iz.re(2), sc.aIncomeValue = iz.re(8), sc.aIncomeData = iz.aan(10, 8, 512), sc.tIncomeType = iz.re(2), sc.tIncomeValue = iz.re(8), sc.tIncomeData = iz.aan(10, 8, 512), sc.iIncomeType = iz.re(2), sc.iIncomeValue = iz
			.re(8), sc.iIncomeData = iz.aan(10, 8, 512), sc.sResourcesType = iz.re(2), sc.sResourcesValue = iz.re(11), sc.sResourcesData = iz.aan(10, 11, 512), sc.a8g = iz.aan(10, 30, 0), !! function() {
				var iz = bK,
					a01 = iz.re(5),
					aap = iz.re(30),
					aaq = iz.re(30);
				if (aap + aaq > 8 * iz.size) return void aag("Corrupted File");
				return function(fc) {
						var aat = new Uint8Array(fc),
							aau = new Uint16Array(fc),
							aav = new Uint32Array(fc),
							aaw = new Uint32Array(fc);
						bC.rq.aaV = aat, bC.rq.aaW = aau, bC.rq.aaX = aav, bC.rq.aaY = aaw;
						for (var aC = 0; aC < fc; aC++) {
							var id = bK.re(4);
							aat[aC] = id, aau[aC] = bK.re(9), 0 === id ? aav[aC] = bK.re(22) : 1 === id ? (aav[aC] = bK.re(10), aaw[aC] = bK.re(10)) : 2 === id ? (aav[aC] = bK.re(10), aaw[aC] = bK.re(9)) : 3 === id ? (aav[aC] = bK.re(10),
								aaw[aC] = bK.re(27)) : 4 === id ? (aav[aC] = bK.re(10), aaw[aC] = bK.re(16)) : 5 === id || 6 === id ? aav[aC] = bK.re(10) : 7 === id ? aav[aC] = bK.re(1) : 10 === id && (aav[aC] = bK.re(20), aaw[aC] = bK
								.re(22))
						}
					}(aap),
					function(fc, a01) {
						var aaZ = new Uint8Array(fc),
							aaa = new Array(fc);
						aaa.fill(0), bC.rq.aaZ = aaZ, bC.rq.aaa = aaa;
						for (var aC = 0; aC < fc; aC++) aaZ[aC] = bK.re(1), aaa[aC] = bK.re(a01)
					}(aaq, a01), 1
			}()) && (bK.eL < 8 * bK.size - 13 || bK.eL > 8 * bK.size ? (aag("Out Of Bounds Error: " + bK.eL + " " + 8 * bK.size), !1) : (bC.rq.a8X = sA, 2 !== aE.data.mapType || (aag("Load base64 image...", 2), aad)))
	}, this.aNo = function(aMq, aah) {
		var a6X = document.createElement("canvas"),
			ih = a6X.getContext("2d");
		if (a6X.width = aMq.width, a6X.height = aMq.height, ih.drawImage(aMq, 0, 0), aE.data.canvas = a6X, aac || aah) return aE.a3f ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aXK()
	}
}

function aaO() {
	this.a39 = function() {
		var a01 = function() {
				for (var aaa = bC.rq.aaa, fc = aaa.length, max = 0, aC = 0; aC < fc; aC++) max = Math.max(max, aaa[aC]);
				return a07(Math.max(max, 1))
			}(),
			j = (sc = aE.data, (j = bH).dm(), j.a9(12, m.rVersion), j.eL += 43, j.a9(2, sc.mapType), j.a9(8, sc.mapProceduralIndex), j.a9(8, sc.mapRealisticIndex), j.a9(14, sc.mapSeed), j.ab3(sc.mapName, 5), 2 === sc.mapType && j.ab4(sc.canvas),
				j.a9(1, sc.passableWater), j.a9(1, sc.passableMountains), j.a9(10, sc.playerCount), j.a9(10, sc.humanCount), j.a9(9, sc.selectedPlayer), j.a9(1, sc.gameMode), j.a9(2, sc.playerMode), j.a9(2, sc.battleRoyaleMode), j.a9(4, sc
					.numberTeams), j.a9(1, sc.isZombieMode), j.a9(1, sc.isContest), j.a9(1, sc.isReplay), j.dt(sc.elo, 2, 14), j.a9(1, sc.colorsType), j.a9(1, sc.colorsPersonalized), j.dt(sc.colorsData, 10, 18), j.a9(1, sc.selectableColor), j.dt(
					sc.teamPlayerCount, 4, 10), j.a9(1, sc.neutralBots), j.a9(2, sc.botDifficultyType), j.a9(4, sc.botDifficultyValue), j.dt(sc.botDifficultyTeam, 4, 4), j.dt(sc.botDifficultyData, 10, 4), j.a9(2, sc.spawningType), j.a9(14, sc
					.spawningSeed), j.dt(sc.spawningData, 11, 12), j.a9(1, sc.selectableSpawn), j.a9(2, sc.playerNamesType), j.ab5(sc.playerNamesData, 10, 5), j.a9(1, sc.selectableName), j.a9(2, sc.aIncomeType), j.a9(8, sc.aIncomeValue), j.dt(sc
					.aIncomeData, 10, 8), j.a9(2, sc.tIncomeType), j.a9(8, sc.tIncomeValue), j.dt(sc.tIncomeData, 10, 8), j.a9(2, sc.iIncomeType), j.a9(8, sc.iIncomeValue), j.dt(sc.iIncomeData, 10, 8), j.a9(2, sc.sResourcesType), j.a9(11, sc
					.sResourcesValue), j.dt(sc.sResourcesData, 10, 11), j.dt(sc.a8g, 10, 30), ! function(a01) {
					var j = bH,
						aaV = bC.rq.aaV,
						gL = bC.rq.aaW,
						gN = bC.rq.aaX,
						gP = bC.rq.aaY,
						fc = aaV.length;
					j.a9(5, a01), j.a9(30, fc), j.a9(30, bC.rq.aaa.length);
					for (var aC = 0; aC < fc; aC++) {
						var em = aaV[aC];
						j.a9(4, em), j.a9(9, gL[aC]), 0 === em ? j.a9(22, gN[aC]) : 1 === em ? (j.a9(10, gN[aC]), j.a9(10, gP[aC])) : 2 === em ? (j.a9(10, gN[aC]), j.a9(9, gP[aC])) : 3 === em ? (j.a9(10, gN[aC]), j.a9(27, gP[aC])) : 4 === em ? (j
							.a9(10, gN[aC]), j.a9(16, gP[aC])) : 5 === em || 6 === em ? j.a9(10, gN[aC]) : 7 === em ? j.a9(1, gN[aC]) : 10 === em && (j.a9(20, gN[aC]), j.a9(22, gP[aC]))
					}
				}(a01), ! function(a01) {
					for (var j = bH, aaZ = bC.rq.aaZ, aaa = bC.rq.aaa, fc = aaZ.length, aC = 0; aC < fc; aC++) j.a9(1, aaZ[aC]), j.a9(a01, aaa[aC])
				}(a01), bH.eL),
			sc = bO.g3(j - 1, 6) + 1,
			a01 = (bG.aZ2(6 * sc) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eL = 24, j.a9(31, j.h.length), j.eL = 12, j.a9(12, function() {
					for (var h = bH.h, fc = h.length, aZc = m.rVersion, aC = 3; aC < fc; aC++) aZc = aZc + h[aC] & 4095;
					return aZc
				}())
			}(), bK.dm(bH.h), bI.f3.uy(bI.f3.uz(sc)));
		return bK.xO(), bH.dm(), a01
	}
}

function cu() {
	var em, bz = !1,
		ab7 = !1,
		ab8 = -1e4,
		ab9 = -1,
		abA = 0;

	function resize(abE) {
		em = 0, ac.vM() && (abC(abE) || bz) && (bz = !1, bf.resize(), bZ.aFt.resize(), aZ.dm(), bb.dm(), aa.resize(), aU.resize(), aP.resize(), bx.resize(), u.resize(), 1 <= aE.a3f ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(),
			aO.resize(), aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aD2()) : (ab.aL9(), ab.aLA()), bi.du = !0)
	}

	function abB(g4) {
		return g4 && 128 < g4 ? Math.floor(g4) : 128
	}

	function abC(abE) {
		var j, k, abG, v1, aCQ;
		if (!(0 < i.uc)) return v1 = abB(document.documentElement.clientWidth), aCQ = abB(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = v1, k = aCQ, abG = 0 !== a1.id || j < k ?
			700 : 1200, abG = Math.min(abG / ((j + k) / 2), 1), abG = 0 === bm.buffer.data[1].value ? 2 * abG / 3 : Math.min(abG + (bm.buffer.data[1].value - 1) * (1 - abG) / 2, 1), i.l = (window.devicePixelRatio || 1) * abG, __fx.hoveringTooltip
			.canvasPixelScale = i.l, abE && !ab7 ? (ab7 = !0, u.removeChild(document.body, a5D)) : ab7 && (ab7 = !1, document.body.appendChild(a5D)), j = Math.floor(.5 + v1 * i.l), k = Math.floor(.5 + aCQ * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aFV(j, k), i.max = aA7(j, k), i.iq = bO.g3(j + k, 2), i.yF = j / k, a5D.width = j, a5D.height = k, a5D.style.width = v1 + "px", a5D.style.height = aCQ + "px", ab9 = bi.ec + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.iq = 0, this.yF = 1, this.l = 1, this.uc = 0, this.dn = function() {
		this.j = abB(document.documentElement.clientWidth) + 2, this.k = abB(document.documentElement.clientHeight) + 2
	}, this.dm = function() {
		em = 1, a5D = document.getElementById("canvasA"), 2 === a1.id && (a5D.style.webkitUserSelect = "none"), (yJ = a5D.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, abC(0)
	}, this.eh = function() {
		50 <= ++em && resize(0), -1 === ab9 || bi.ec < ab9 || (ab9 = -1, 2e3 * ++abA >= bi.ec + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.dx = function(kD) {
		bz = !0, resize(kD)
	}, this.a5s = function() {
		ab8 + 1e3 > bi.ec || (ab8 = bi.ec, resize(0))
	}
}

function df() {
	var abI = [];
	this.aJv = function(uu) {
		for (var ed = (new Date).getTime() - 36e5, aC = abI.length - 1; 0 <= aC; aC--)
			if (abI[aC].ed < ed) abI.splice(aC, 1);
			else if (abI[aC].uu === uu) return !0;
		return !1
	}, this.aJx = function(uu, aJw) {
		return !(this.aJv(uu) || !b1.z.ei(0) || (b1.aTN.aTO({
			action: 6,
			uu: uu,
			value: aJw
		}), abI.push({
			uu: uu,
			ed: (new Date).getTime()
		}), 0))
	}
}

function dO() {
	this.aZG = new abJ, this.a4Y = new abK, this.aZX = new abL
}

function abL() {
	var abM = abN(),
		abO = abP(),
		abQ = abR();
	this.re = function() {
		return 123
	}, this.a39 = function() {
		bJ.f3.zx(bm.buffer.data[183].value, 15), bG.a9(14, abM), bG.a9(7, abO), bG.a9(12, abQ)
	}
}

function abN() {
	for (var em = document.createElement("canvas"), em = (em.width = 24, em.height = 24, em.getContext("2d", {
			alpha: !1
		})), ff = (em.fillStyle = "rgb(0,0,0)", em.fillRect(0, 0, 24, 24), em.font = "22px system-ui", em.textBaseline = "middle", em.textAlign = "center", em.fillStyle = "rgb(255,255,255)", em.fillText("Q", 12, 12), em.getImageData(0, 0, 24, 24)
			.data), fc = ff.length, lt = 0, aC = 0; aC < fc; aC += 4) lt += ff[aC];
	return 16383 & lt
}

function abP() {
	var ff = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + ff + .5) / 15))
}

function abR() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function abK() {
	this.a4Z = function() {
		for (var hA, fc = am.lU, wP = am.lZ, a4J = ah.a4J, aCE = this.aMZ(), aC = 0; aC < fc; aC++) hA = wP[aC], bD.gy.kL(hA) || (a4J[hA] = aCE);
		var rv = ah.rv,
			k1 = ah.k1,
			k2 = ah.k2,
			a4H = ah.a4H,
			fc = aE.ky;
		for (aC = 0; aC < fc; aC++)(0 === a4H[aC] || k2[aC] < 1 || 2 * rv[aC] > 3 * (k1[aC] + k2[aC])) && (a4J[aC] = 0);
		var a4W = 0;
		for (aC = 0; aC < fc; aC++) a4W += 0 < a4J[aC];
		return a4W
	}, this.aMZ = function() {
		return Math.min(65535, bi.kv())
	}
}

function abJ() {
	function abV(h, g4, iV) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (g4 >> (aC + iV) % 30 & 1)) % 256
	}
	this.eh = function(abS, abT) {
		var h = new Uint8Array(256);
		return function(h, abS, abT) {
				var aC, abX = 3 + (4 + abS) % 32768,
					abY = 12 + abT % 32768,
					abZ = 17 + ((abS & abT) + (abS | abT) + abS) % 32768;
				for (aC = 0; aC < 256; aC++) abX = 1 + abX * abY % abZ, h[aC] = abX % 256
			}(h, abS, abT), abV(h, abS, 2), abV(h, abT, 7),
			function(h) {
				var aC, g4, eL = 0;
				for (aC = 0; aC < 3e4; aC++) g4 = h[eL], h[eL] = (g4 + aC + h[(eL + aC) % 256]) % 256, eL = (g4 + aC + eL + (g4 & eL)) % 256
			}(h),
			function(h) {
				var aC, aCQ = 1,
					vi = 1;
				for (aC = 0; aC < 256; aC += 2) aCQ = (1 + aCQ) * (h[aC] + 1) % 1073741824, vi = (1 + vi) * (h[aC + 1] + 1) % 1073741824;
				return [aCQ, vi]
			}(h)
	}, this.aZH = function(aba, abb, abc, result) {
		for (var h5 = 1 << aba, aC = 0; aC < h5; aC++)
			if (this.abd(aC, abb, abc) === result) return aC;
		return 0
	}, this.abd = function(abe, abb, abc) {
		for (var a12 = abb + abe, a1B = abc + abe, g4 = a12 + a1B & 2147483647, fv = 1; fv <= 16; fv++) g4 = (g4 = (g4 ^ g4 >> fv) >>> 1 + (3 & a12)) * (7 + (1023 & (a12 | a1B))) & 1073741823, a1B >>= 1 + (1 & (a12 >>= 1 + (1 & (g4 += 65535 &
			a1B))));
		return g4 &= 1073741823
	}
}

function cr() {
	var abf, abg, iu, abh;
	this.dm = function() {
		var aC, fj, fl, aVR, abi, j, k, p0, ic, a0H, g4, hA, fs, fv, abl;
		if (function() {
				if (iu = !0, abh = "rgb(" + bV.a0F[0] + "," + bV.a0F[1] + "," + bV.a0F[2] + ")", bV.aQN(bV.fI)) return 1;
				return iu = !1, 0
			}()) abg = null;
		else {
			for (abf = bO.g3(96, 4), abi = 1 === bV.fI ? (aVR = 0, 160) : (aVR = 128, 32), abh = "rgb(" + aVR + "," + aVR + "," + aVR + ")", abg = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (abg[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fn : abf, k = aC % 2 == 0 ? abf : bV.fo + 2 * abf, abg[aC].width = j, abg[aC].height = k, a0H = (ic = (p0 = abg[aC].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (fl = abf - 1; 0 <= fl; fl--)
						for (g4 = abi + Math.floor((fl + 1) * (aVR - abi) / (abf + 1)), fj = j - 1; 0 <= fj; fj--) a0H[hA = 4 * ((0 === aC ? abf - fl - 1 : fl) * j + fj)] = g4, a0H[hA + 1] = g4, a0H[hA + 2] = g4, a0H[hA + 3] = 255;
				else {
					for (fj = abf - 1; 0 <= fj; fj--)
						for (g4 = abi + Math.floor((fj + 1) * (aVR - abi) / (abf + 1)), fl = k - 1 - abf; abf <= fl; fl--) a0H[hA = 4 * (fl * j + (3 === aC ? abf - fj - 1 : fj))] = g4, a0H[hA + 1] = g4, a0H[hA + 2] = g4, a0H[hA + 3] = 255;
					for (fv = 1; 0 <= fv; fv--)
						for (fj = abf - 1; 0 <= fj; fj--)
							for (fl = abf - 1; 0 <= fl; fl--) fs = (Math.pow(fj * fj + fl * fl, .5) + 1) / (abf + 1), g4 = abi + Math.floor((1 < fs ? 1 : fs) * (aVR - abi)), a0H[hA = 4 * ((0 === fv ? abf - fl - 1 : fl + fv * (k - abf)) * j + (
								1 === aC ? fj : abf - fj - 1))] = g4, a0H[hA + 1] = g4, a0H[hA + 2] = g4, a0H[hA + 3] = 255
				}
				p0.putImageData(ic, 0, 0)
			}
			abl = abi, bV.a0A.fillStyle = "rgb(" + abl + "," + abl + "," + abl + ")", bV.a0A.fillRect(0, 0, bV.fn, 1), bV.a0A.fillRect(0, bV.fo - 1, bV.fn, 1), bV.a0A.fillRect(0, 0, 1, bV.fo), bV.a0A.fillRect(bV.fn - 1, 0, 1, bV.fo)
		}
	}, this.a1l = function() {
		var fv = iu ? 0 : -abf;
		aS6(fv, fv, bV.fn - 2 * fv, bV.fo - 2 * fv, bd.abm, bd.abn, bd.abo, bd.abp) || (yJ.fillStyle = abh, yJ.fillRect(0, 0, i.j, i.k))
	}, this.yI = function() {
		iu || (aS5(0, -abf, bV.fn, abf, bd.abm, bd.abn, bd.abo, bd.abp) && yJ.drawImage(abg[0], bd.abq, bd.abr - abf), aS5(bV.fn, -abf, abf, bV.fo + 2 * abf, bd.abm, bd.abn, bd.abo, bd.abp) && yJ.drawImage(abg[1], bd.abq + bV.fn, bd.abr - abf),
			aS5(0, bV.fo, bV.fn, abf, bd.abm, bd.abn, bd.abo, bd.abp) && yJ.drawImage(abg[2], bd.abq, bd.abr + bV.fo), aS5(-abf, -abf, abf, bV.fo + 2 * abf, bd.abm, bd.abn, bd.abo, bd.abp) && yJ.drawImage(abg[3], bd.abq - abf, bd.abr - abf))
	}
}

function dD() {
	this.aMX = new abt, this.a1o = new abu, this.z = new abv, this.jQ = new abw, this.abl = new abx, this.mt = new aby, this.km = new abz, this.ll = new ac0, this.ac1 = new ac2, this.ac3 = new ac4, this.n4 = new ac5, this.iD = new ac6, this.mK =
		new ac7, this.ln = new ac8, this.iG = new ac9, this.mx = new acA, this.s3 = new acB, this.dm = function() {
			this.mK.dm(), this.a1o.dm(), this.z.dm(), this.jQ.dm(), this.abl.dm(), this.ac3.dm(), this.mx.dm()
		}, this.yI = function() {
			this.ac3.yI(), this.a1o.yI()
		}
}

function abz() {
	this.eh = function(player) {
		return !!bQ.n4.n5(player) && !(bQ.z.l2[player] >= Math.max(3 * ap.performance.mC, aF.lC[aF.iM[player]]) || !bD.gy.n6(player, aF.lA[aF.iM[player]], 32, 0)) && (aX.aFI() ? function(player) {
			var acE = bQ.ln.aFL(),
				fc = acE.length;
			if (0 === fc) return !1;
			acE = acE[az.kF(fc)], fc = bQ.z.mr[acE];
			if (bQ.mx.my(player, fc)) return !1;
			return !! function(player, n0) {
				var n0 = bP.jO(bQ.z.n3[n0]),
					hs = bP.fk(n0),
					n0 = bP.fm(n0),
					o1 = ah.jW[player],
					o2 = ah.jY[player],
					oE = ah.jX[player],
					player = ah.jZ[player],
					oE = Math.max(hs - oE, o1 - hs),
					o1 = Math.max(n0 - player, o2 - n0);
				return oE < 100 && o1 < 100
			}(player, acE) && !!bQ.iG.s2(player, fc, 1) && (bD.gy.n8(player), bQ.z.n9(player), !0)
		}(player) : !!(ap.jp.eh(player) || ap.je.eh(player) || ap.jg.eh(player)) && (function(player) {
			bR.gE[1] = 4, bD.gy.n8(player), bQ.z.n9(player)
		}(player), !0))
	}
}

function acA() {
	var acH = 0,
		acI = null;
	this.dm = function() {
		null === acI && (acI = new Uint16Array(2 * bQ.z.lC)), acH = 0
	}, this.el = function(acJ, mx) {
		var acK = acI;
		acK[acH++] = acJ, acK[acH++] = mx
	}, this.my = function(player, mw) {
		for (var acK = acI, fc = acH, aC = 0; aC < fc; aC += 2)
			if (acK[aC] === mw && bQ.ln.acL(acK[aC + 1]) && player === bQ.z.ms[bR.gE[2]] >> 3) return !0;
		return !1
	}, this.acM = function(acN) {
		var mt = bQ.z.mp[acN];
		if (!(mt < 64)) {
			for (var mw = bQ.z.mr[acN], acK = acI, fc = acH, aC = fc - 2; 0 <= aC; aC -= 2)
				if (acK[aC] === mw) {
					{
						acS = void 0;
						var acS = acK[aC + 1];
						bQ.ln.acL(acS) && bQ.mx.aca(bR.gE[2])
					}
					acK[aC] = acK[fc - 2], acK[aC + 1] = acK[fc - 1], fc -= 2
				} acH = fc
		}
	}, this.acP = function(acQ, acR) {
		for (var acS = bQ.z.mr[acQ], mw = -1, acK = acI, fc = acH, aC = 1; aC < fc; aC += 2)
			if (acK[aC] === acS) {
				mw = acK[aC - 1];
				break
			} if (-1 === mw) return !1;
		if (!bQ.ln.acL(mw)) return !1;
		var acN = bR.gE[2],
			mJ = bQ.z.mq[acN];
		if (acR === mJ[mJ.length - 1]) bQ.z.mq[acQ] = bQ.mK.acT(bQ.z.mq[acQ], bQ.mK.mS(mJ));
		else {
			var acU = bQ.ln.acV(mJ, acR);
			if (-1 === acU) return !1;
			var acW = bQ.z.n2[acN];
			acU === acW ? (acN = bP.jO(bQ.z.n3[acN]), bQ.z.mq[acQ] = bQ.mK.acY(bQ.z.mq[acQ], mJ, acU, acR, bP.j6(mJ[acU], acR) > bP.j6(mJ[acU], acN))) : bQ.z.mq[acQ] = bQ.mK.acY(bQ.z.mq[acQ], mJ, acU, acR, acW < acU)
		}
		return !0
	}, this.aca = function(acb) {
		var mJ, lt = bQ.z,
			mt = lt.mp[acb];
		return mt % 64 != 5 && (mJ = lt.mq[acb], lt.acc[acb] = 65535 - lt.acc[acb], lt.n2[acb] = mJ.length - lt.n2[acb] - 2, lt.mq[acb] = bQ.mK.mS(mJ), lt.mp[acb] = mt - mt % 64 + 5, !0)
	}
}

function ac5() {
	this.n5 = function(player) {
		return !!aE.data.passableWater && bQ.z.mo !== bQ.z.lC && bQ.z.l2[player] !== bQ.z.acd && 0 !== ah.hJ[player].length
	}, this.ry = function(aa4) {
		var mt = bR.gE[1];
		return !(4 <= mt || !bQ.ln.ace(bP.fS(aa4))) && ad.fX(bP.fS(bP.jS(aa4, mt)))
	}
}

function abt() {
	this.aMY = function(player) {
		for (var aBe = bQ.z.aBe, vE = player << 3, aC = vE + bQ.z.l2[player] - 1; vE <= aC; aC--) this.acf(aBe[aC])
	}, this.acf = function(acg) {
		var z = bQ.z,
			ach = z.mo - 1,
			aci = z.ms[acg],
			acj = z.ack[acg],
			acl = z.n3[acg];
		z.mo = ach, z.ms[acg] = z.ms[ach], z.n3[acg] = z.n3[ach], z.acc[acg] = z.acc[ach], z.aAQ[acg] = z.aAQ[ach], z.ack[acg] = z.ack[ach], z.mr[acg] = z.mr[ach], z.mp[acg] = z.mp[ach], z.acm[acg] = z.acm[ach], z.mq[acg] = z.mq[ach], z.n2[acg] =
			z.n2[ach], z.aBe[z.ms[acg]] = acg,
			function(aa3) {
				var player = aa3 >> 3,
					z = bQ.z,
					fc = z.l2[player] - 1,
					acp = (player << 3) + fc;
				z.l2[player] = fc, acp !== aa3 && (z.aBe[aa3] = z.aBe[acp], z.ms[z.aBe[aa3]] = aa3)
			}(aci), bQ.jQ.jQ[bP.jP(z.n3[acg])][z.ack[acg]] = acg, ach = bP.jP(acl), aci = acj, ach = bQ.jQ.jQ[ach], z = ach.pop(), aci !== ach.length && (ach[aci] = z, bQ.z.ack[z] = aci)
	}
}

function abu() {
	var acr, acs = 8,
		act = null;

	function acy(a0H, fO, eL) {
		fO *= 4;
		a0H[fO] = 255, a0H[1 + fO] = 255, a0H[2 + fO] = eL, a0H[3 + fO] = 255
	}

	function ad0(ih, abh) {
		var fj, fl, j0, fO, ad1, ad2, iZ = acs,
			ic = bD.sF.getImageData(ih, iZ, iZ),
			a0H = ic.data,
			lt = (iZ >> 1) - .5,
			ad4 = bD.sr.a65(abh, .5);
		for (bD.sr.a67(abh, ad4, 300) || bD.sr.a69(abh, 100), fl = 0; fl < iZ; fl++)
			for (fj = 0; fj < iZ; fj++) ad2 = (iZ - 1.5) * (iZ - 1.5) / 4, a0H[fO = 4 * (fl * iZ + fj)] = (ad1 = (j0 = (j0 = fj - lt) * j0 + (j0 = fl - lt) * j0) <= (iZ - 4.5) * (iZ - 4.5) / 4 ? ad4 : abh)[0], a0H[1 + fO] = ad1[1], a0H[2 + fO] = ad1[
				2], a0H[3 + fO] = ad2 < j0 ? 0 : 255;
		ih.putImageData(ic, 0, 0)
	}
	this.dm = function() {
		var eL, iZ, a6X, ih, ic, a0H;
		(acr = acr || new Array(aE.fZ)).fill(null), eL = 255, iZ = acs + 4, a6X = bD.sF.a06(iZ, iZ), ih = bD.sF.getContext(a6X, !0), ic = bD.sF.getImageData(ih, iZ, iZ), acy(a0H = ic.data, iZ + 1, eL), acy(a0H, iZ + 2, eL), acy(a0H, 2 * iZ + 1,
				eL), acy(a0H, 2 * iZ - 3, eL), acy(a0H, 2 * iZ - 2, eL), acy(a0H, 3 * iZ - 2, eL), acy(a0H, iZ * (iZ - 3) + 1, eL), acy(a0H, iZ * (iZ - 2) + 1, eL), acy(a0H, iZ * (iZ - 2) + 2, eL), acy(a0H, iZ * (iZ - 2) - 2, eL), acy(a0H, iZ * (
				iZ - 1) - 3, eL), acy(a0H, iZ * (iZ - 1) - 2, eL), ih.putImageData(ic, 0, 0), act = a6X,
			function() {
				if (aE.iX)
					for (var a6X = new Array(bj.lL.length), fc = aE.fZ, acw = acr, aEd = bj.aEd, aC = 0; aC < fc; aC++) {
						var a97 = aEd[aC];
						a6X[a97] || (a6X[a97] = function(a97) {
							var a6X = bD.sF.a06(acs, acs),
								ih = bD.sF.getContext(a6X, !0),
								h = bR.gB;
							return h.set(bj.aVS[a97]), ad0(ih, h), a6X
						}(a97)), acw[aC] = a6X[a97]
					}
			}()
	}, this.yI = function() {
		var aC, player, ad5, aSE, iM, iz, ad7, ad9, adA, n3 = bQ.z.n3,
			ms = bQ.z.ms,
			aAQ = bQ.z.aAQ,
			acm = bQ.z.acm,
			adB = acr,
			adC = aE.fM,
			fc = bQ.z.mo,
			adD = i.j,
			adE = i.k,
			adF = bV.fn << 4,
			fR = ir,
			fG = fR / acs,
			o1 = jH / fR,
			o2 = jI / fR,
			j0 = (adD + jH) / fR - o1,
			j3 = (adE + jI) / fR - o2,
			ih = yJ;
		for (ih.imageSmoothingEnabled = fR < 9, bD.sF.textAlign(ih, 1), bD.sF.textBaseline(ih, 1), aC = 0; aC < fc; aC++) player = ms[aC] >> 3, iM = aAQ[aC], ad5 = .9 + .1 * Math.log10(iM), aSE = (iz = n3[aC]) % adF / 16 - ad5, iz = adE * (Math
			.floor(iz / adF) / 16 - ad5 - o2) / j3, ad7 = -2 * (adA = fR * ad5) * (1 + (ad9 = +(player === adC)) / 8), ad9 = ad9 * adA / 4, (adA = adD * (aSE - o1) / j0) < ad7 || iz < ad7 || adD + ad9 < adA || adE + ad9 < iz || (aSE = 2 *
			ad5 * fG, ad7 = ad5 * fR, null === (ad9 = adB[player]) && (adB[player] = ad9 = function(player) {
				var a6X = bD.sF.a06(acs, acs);
				return ad0(bD.sF.getContext(a6X, !0), ad.aBF(player)), a6X
			}(player)), player === adC && (ih.setTransform(aSE, 0, 0, aSE, adA - 2 * aSE, iz - 2 * aSE), ih.drawImage(act, 0, 0)), ih.setTransform(aSE, 0, 0, aSE, adA, iz), ih.drawImage(ad9, 0, 0), (ad5 = Math.floor(function(iM) {
				if (iM < 1e3) return .42;
				if (iM < 1e4) return .34;
				if (iM < 1e6) return .26;
				if (iM < 1e8) return .19;
				return .15
			}(iM) * ad7)) < 6) || (ih.setTransform(1, 0, 0, 1, 0, 0), ih.fillStyle = acm[aC] ? bE.q4 : bE.pU, ih.font = bD.sF.sI(1, ad5), ih.fillText(bD.tg.a2y(iM), adA + ad7, iz + ad7 + .1 * ad5));
		ih.imageSmoothingEnabled = !1, ih.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function ac4() {
	var adI;
	this.dm = function() {
		if (!adI) {
			adI = new Array(bj.adK.length);
			for (var aC = 0; aC < adI.length; aC++) adI[aC] = bS.z.adL(20, bj.adK[aC])
		}
	}, this.yI = function() {
		var oL = ir;
		if (!(5 <= oL)) {
			var adD = i.j,
				adE = i.k,
				o1 = jH / oL,
				o2 = jI / oL,
				oE = (adD + jH) / oL,
				oF = (adE + jI) / oL,
				hB = -20 * oL,
				adM = .5 * hB,
				adF = bV.fn << 4,
				fc = bQ.z.mo,
				n3 = bQ.z.n3,
				ms = bQ.z.ms,
				aEd = bj.aEd,
				a6X = adI,
				ih = yJ;
			3 < oL && (ih.globalAlpha = .5 * (5 - oL));
			for (var aC = 0; aC < fc; aC++) {
				var iz = n3[aC],
					fj = adD * (iz % adF / 16 - o1) / (oE - o1) + adM,
					iz = adE * (Math.floor(iz / adF) / 16 - o2) / (oF - o2) + adM;
				adD < fj || adE < iz || fj < hB || iz < hB || (ih.setTransform(oL, 0, 0, oL, fj, iz), fj = a6X[aEd[ms[aC] >> 3]], ih.drawImage(fj, 0, 0))
			}
			ih.globalAlpha = 1, ih.setTransform(oL, 0, 0, oL, 0, 0)
		}
	}
}

function ac8() {
	this.adP = function(player, id) {
		for (var adQ = ah.hJ[player], fc = adQ.length, aC = 0; aC < fc; aC++)
			if (bP.is(adQ[aC], id)) return !0;
		return !1
	}, this.adR = function(player, fO) {
		for (var j8, adS, fG, adQ = ah.hJ[player], fc = adQ.length, j = bV.fn, adU = bP.fk(fO), adV = bP.fm(fO), fi = -1, min = bV.fn * bV.fn + bV.fo * bV.fo, id = ad.fK(bP.fS(fO)), aC = 0; aC < fc; aC++)(adS = (adS = adU - (j8 = (fG = adQ[
			aC]) >> 2) % j) * adS + (adS = adV - ~~((.5 + j8) / j)) * adS) < min && bP.is(fG, id) && (min = adS, fi = j8);
		return fi
	}, this.lo = function(j7, j8) {
		for (var id = ad.fK(bP.fS(j8)), it = bP.ik, fG = bP.fS(j7), adW = -1, aC = 0; aC < 4; aC++) {
			var fR = fG + it[aC];
			ad.iu(fR) && ad.fK(fR) === id && (-1 === adW || bP.j9(bP.fQ(fR), j8) < bP.j9(adW, j8)) && (adW = bP.fQ(fR))
		}
		return adW
	}, this.mN = function(player, fO) {
		for (var it = bP.ik, fG = bP.fS(fO), aC = 0; aC < 4; aC++) {
			var fR = fG + it[aC];
			if (ad.hC(fR) && ad.a1j(player, fR)) return !0
		}
		return !1
	}, this.mO = function(player, fO) {
		for (var it = bP.ik, fG = bP.fS(fO), aC = 0; aC < 4; aC++) {
			var fR = fG + it[aC];
			if (ad.fT(fR)) return !0;
			if (ad.hC(fR)) {
				fR = ad.fU(fR);
				if (player !== fR && bw.fV(player, fR)) return !0
			}
		}
		return !1
	}, this.mu = function(fO) {
		for (var it = bP.ik, fG = bP.fS(fO), aC = 0; aC < 4; aC++) {
			var fR = fG + it[aC];
			if (ad.hC(fR)) {
				fR = ad.fU(fR);
				if (bD.gy.kL(fR)) return fR
			}
		}
		return -1
	}, this.ace = function(fG) {
		if (ad.iu(fG))
			for (var it = bP.ik, aC = 0; aC < 4; aC++)
				if (ad.fX(fG + it[aC])) return !0;
		return !1
	}, this.o0 = function(player, id) {
		for (var vE = player << 3, vF = vE + bQ.z.l2[player], mr = bQ.z.mr, aBe = bQ.z.aBe, aC = vE; aC < vF; aC++) {
			var aBf = aBe[aC];
			if (mr[aBf] === id) return aBf
		}
		return -1
	}, this.o5 = function(player) {
		return 0 === bQ.z.l2[player] ? -1 : bQ.z.aBe[player << 3]
	}, this.a9P = function(mD, mE) {
		var fc = bQ.z.mo;
		if (fc < 1) return -1;
		for (var n3 = bQ.z.n3, adX = 80, aUw = -1, aC = 0; aC < fc; aC++) {
			var fs = bP.iw(mD, mE, n3[aC]);
			fs < adX && (adX = fs, aUw = aC)
		}
		return function(aC, mD, mE) {
			if (aC < 0) return;
			var ade = bQ.z.n3[aC],
				adf = bP.j2(ade),
				ade = bP.j5(ade),
				aC = 20 * (.9 + .1 * Math.log10(bQ.z.aAQ[aC]));
			return aC = Math.max(aC, bP.jJ(bD.sF.vJ(.02, 1.7))), bO.aSD(bP.j1(mD), bP.j4(mE), adf, ade, aC)
		}(aUw, mD, mE) ? aUw : -1
	}, this.acL = function(ny) {
		for (var fc = bQ.z.mo, mr = bQ.z.mr, aC = 0; aC < fc; aC++)
			if (mr[aC] === ny) return bR.gE[2] = aC, !0;
		return !1
	}, this.aMU = function(player) {
		for (var vE = player << 3, vF = vE + bQ.z.l2[player], aBe = bQ.z.aBe, aAQ = bQ.z.aAQ, iM = 0, aC = vE; aC < vF; aC++) iM += aAQ[aBe[aC]];
		return iM
	}, this.adZ = function(player, acb) {
		acb = bQ.z.mq[acb];
		return this.mN(player, acb[acb.length - 1])
	}, this.ada = function(j7, j8, fs, adb) {
		var jB = bP.fk(j7),
			j7 = bP.fm(j7),
			jD = bP.fk(j8),
			j8 = bP.fm(j8),
			jD = (fs = Math.max(fs, 1), jD - jB),
			j8 = j8 - j7,
			j0 = bO.g3(Math.abs(jD) * adb, fs),
			adb = bO.g3(Math.abs(j8) * adb, fs);
		return bP.fz(jB + Math.sign(jD) * j0, j7 + Math.sign(j8) * adb)
	}, this.acV = function(mJ, fO) {
		for (var fc = mJ.length - 1, fj = bP.fk(fO), fl = bP.fm(fO), aC = 0; aC < fc; aC++) {
			var j7 = mJ[aC],
				j8 = mJ[aC + 1],
				o1 = bP.fk(j7),
				j7 = bP.fm(j7),
				oE = bP.fk(j8),
				j8 = bP.fm(j8);
			if (!(fj !== o1 && fj !== oE && Math.sign(fj - o1) === Math.sign(fj - oE) || fl !== j7 && fl !== j8 && Math.sign(fl - j7) === Math.sign(fl - j8))) {
				if (o1 === oE || j7 === j8) return aC;
				if (Math.abs(fj - o1) === Math.abs(fl - j7) && Math.abs(fj - oE) === Math.abs(fl - j8)) return aC
			}
		}
		return -1
	}, this.aFL = function() {
		for (var adh = mZ[0], ms = bQ.z.ms, mo = bQ.z.mo, h = [], aC = 0; aC < mo; aC++) bD.gy.lc(adh, ms[aC] >> 3) && h.push(aC);
		return h
	}, this.mL = function(player, mJ) {
		for (var vE = player << 3, vF = vE + bQ.z.l2[player], aBe = bQ.z.aBe, mq = bQ.z.mq, i5 = mJ[0], lb = mJ[mJ.length - 1], aC = vE; aC < vF; aC++) {
			var hA = mq[aBe[aC]];
			if (hA[0] === i5 && hA[hA.length - 1] === lb) return !0
		}
		return !1
	}
}

function ac9() {
	function adk(player, acb) {
		acb = bP.jO(bQ.z.n3[acb]), acb = ad.fK(bP.fS(acb));
		return !!bQ.ln.adP(player, acb)
	}

	function adi(player) {
		return bQ.n4.n5(player) && !bQ.mK.mQ()
	}
	this.iH = function(player, fO) {
		return !!adi(player) && -1 !== (fO = function(player, fO) {
			for (var fc = bQ.z.mo, n3 = bQ.z.n3, ms = bQ.z.ms, adX = bP.im(), aUw = -1, aC = 0; aC < fc; aC++) {
				var fs = bP.j6(fO, bP.jO(n3[aC]));
				fs < adX && bD.gy.lc(player, ms[aC] >> 3) && (adX = fs, aUw = aC)
			}
			return aUw
		}(player, fO)) && !!adk(player, fO) && (bR.gE[3] = bQ.z.mr[fO], !0)
	}, this.r9 = function(player, ny) {
		return !!adi(player) && !!bQ.ln.acL(ny) && !!adk(player, bR.gE[2])
	}, this.s2 = function(player, ny, adl) {
		return !! function(player, ny, adl) {
			if (adi(player) && bQ.ln.acL(ny)) {
				ny = bR.gE[2];
				if (bD.gy.lc(player, bQ.z.ms[ny] >> 3)) {
					if (function(player, acb) {
							return bQ.ln.adZ(player, acb) && (bR.h[0] = bQ.mK.mS(bQ.z.mq[acb]), bR.gE[1] = 6, !0)
						}(player, ny)) return 1;
					var acG = bP.jO(bQ.z.n3[ny]),
						adp = bQ.ln.adR(player, acG);
					if (-1 !== adp) {
						adp = bP.j6(adp, acG);
						if (!(adl && 120 < adp)) {
							adl = function(acb, adq, acG) {
								var mJ = bQ.z.mq[acb],
									acb = bQ.z.n2[acb],
									ads = bP.j6(acG, mJ[acb + 1]);
								if (adq <= ads) return bQ.ln.ada(acG, mJ[acb + 1], ads, adq);
								for (var fs = adq - ads, fc = mJ.length - 1, aC = acb + 1; aC < fc; aC++) {
									var adt = bP.j6(mJ[aC], mJ[aC + 1]);
									if (fs <= adt) return bQ.ln.ada(mJ[aC], mJ[aC + 1], adt, fs);
									fs -= adt
								}
								return mJ[fc]
							}(ny, adp, acG);
							if (bQ.ll.rz(player, adl, 1)) return bR.gE[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, ny, adl) && (player = bR.gE[2], bQ.z.mp[player] = 64 + bQ.z.mp[player] % 64, bQ.mx.el(ny, bQ.z.n7), !0)
	}
}

function aby() {
	function ady(player, iM, adw, acG) {
		var k7;
		if (ad.fT(adw)) k7 = aE.fZ;
		else {
			if ((k7 = ad.fU(adw)) === player) return void bg.h2(player, iM - bD.gy.h1(player, iM), 12);
			if (!bw.fV(player, k7)) return void bB.l0.rO(player, k7, iM)
		}
		ae.kJ(player, k7) || ae.kc(player) ? (ah.h4[player].push(acG << 2), ae.el(player, iM, k7), aG.k5(player, !0)) : bg.h2(player, iM, 12)
	}
	this.eh = function() {
		for (var mp = bQ.z.mp, n3 = bQ.z.n3, acc = bQ.z.acc, aC = bQ.z.mo - 1; 0 <= aC; aC--) 65535 === acc[aC] && function(aC, acG, iU) {
			if (6 === iU) {
				if (bQ.mx.acP(aC, acG)) return bQ.z.n2[aC]++, bQ.z.acc[aC] = 0, 0
			} else {
				var player = bQ.z.ms[aC] >> 3,
					aC = bQ.z.aAQ[aC];
				bg.adx(player), iU < 4 ? ady(player, aC, acG + bP.ij[iU] << 2, acG) : 4 === iU ? function(player, iM, acG) {
					var aC, fg, it = bP.ik,
						fR = bP.fS(acG);
					for (aC = 0; aC < 4; aC++)
						if (fg = fR + it[aC], ad.fT(fg)) return ady(player, iM, fg, acG);
					for (aC = 0; aC < 4; aC++)
						if (fg = fR + it[aC], ad.hC(fg) && !ad.a1j(player, fg)) return ady(player, iM, fg, acG);
					for (aC = 0; aC < 4; aC++)
						if (fg = fR + it[aC], ad.hC(fg)) return ady(player, iM, fg, acG)
				}(player, aC, acG) : 5 === iU && function(player, iM, acG) {
					var aC, fg, it = bP.ik,
						fR = bP.fS(acG);
					for (aC = 0; aC < 4; aC++)
						if (fg = fR + it[aC], ad.hC(fg) && ad.a1j(player, fg)) return ady(player, iM, fg, acG);
					for (aC = 0; aC < 4; aC++)
						if (fg = fR + it[aC], ad.hC(fg)) return ady(player, iM, fg, acG);
					for (aC = 0; aC < 4; aC++)
						if (fg = fR + it[aC], ad.fT(fg)) return ady(player, iM, fg, acG)
				}(player, aC, acG)
			}
			return 1
		}(aC, bP.jO(n3[aC]), mp[aC] % 64) && (bQ.mx.acM(aC), bQ.aMX.acf(aC))
	}, this.adv = function(player, fO, iU, ny, iM) {
		if (!(5 <= iU)) {
			var adC = aE.fM;
			if (bD.gy.hp(adC) && bw.fV(player, adC) && player !== adC && 0 !== ah.hJ[adC].length && bD.gy.a7C(player, 5)) {
				for (var adw, fq = !1, aC = 0; aC < 4; aC++)
					if (adw = fO + bP.ij[aC] << 2, ad.fX(adw) && !ad.fT(adw) && ad.fU(adw) === adC) {
						fq = !0;
						break
					} fq && (aO.aAY(719, 0), iU = iM < 25e3 ? L(519) + " (" + bD.tg.a2y(iM) + ") ⛵" : L(520) + " (" + bD.tg.a2y(iM) + ") 🚢", aO.a29(180, iU, 719, player, bE.q3, bE.pR, -1, !0, void 0, {
					fw: 1,
					ny: ny
				}))
			}
		}
	}
}

function abv() {
	this.lC = 512, this.acd = 8, this.mo = 0, this.n7 = 0, this.ms = new Uint16Array(this.lC), this.n3 = new Uint32Array(this.lC), this.acc = new Uint16Array(this.lC), this.aAQ = new Uint32Array(this.lC), this.ack = new Uint16Array(this.lC), this
		.mr = new Uint16Array(this.lC), this.mp = new Uint8Array(this.lC), this.acm = new Uint8Array(this.lC), this.mq = new Array(this.lC), this.n2 = new Uint16Array(this.lC), this.l2 = new Uint8Array(aE.fZ), this.aBe = new Uint16Array(this.acd * aE
			.fZ), this.dm = function() {
			this.mo = 0, this.n7 = 0, this.l2.fill(0), this.mq.fill(null)
		}, this.n9 = function(player) {
			var iM = bR.g9[0],
				mt = bR.gE[1],
				mJ = bR.h[0],
				ae1 = this.n7,
				fc = this.mo,
				ae2 = bP.jN(mJ[0]),
				ae3 = this.l2[player],
				ae4 = (player << 3) + ae3;
			this.ms[fc] = ae4, this.n3[fc] = ae2, this.acc[fc] = 0, iM < 60 && (bD.gy.gz(player, 60 - iM), iM = 60), this.aAQ[fc] = iM, this.ack[fc] = bQ.jQ.n9(fc, bP.jP(ae2)), this.mr[fc] = ae1, this.mp[fc] = mt, this.acm[fc] = 0, this.mq[fc] = mJ,
				this.n2[fc] = 0, this.n7 = (ae1 + 1) % 65536, this.l2[player] = ae3 + 1, this.aBe[ae4] = fc, this.mo++, bQ.mt.adv(player, mJ[mJ.length - 1], mt, ae1, iM)
		}, this.eh = function() {
			bQ.mt.eh();
			for (var hA = aE.fM, ed = bQ.ln.aMU(hA), uH = (! function(uH) {
					for (var ae9, n3 = uH.n3, aAQ = uH.aAQ, acm = uH.acm, acc = uH.acc, ack = uH.ack, mq = uH.mq, n2 = uH.n2, uH = uH.mo, adF = bV.fn << 4, aC = uH - 1; 0 <= aC; aC--) {
						var aeA = n3[aC],
							mJ = mq[aC],
							aeB = n2[aC],
							ae2 = bP.jN(mJ[aeB]),
							aeC = bP.jN(mJ[aeB + 1]),
							aeD = ae2 % adF,
							ae2 = ~~((ae2 + .5) / adF),
							aeF = aeC % adF,
							aeG = ~~((aeC + .5) / adF),
							aeH = aeF - aeD,
							aeI = aeG - ae2,
							ff = Math.max(~~Math.sqrt(aeH * aeH + aeI * aeI + .5), 1),
							aNR = aAQ[aC],
							aNR = (aNR = acm[aC] ? 4e4 : 25e4 + Math.min(20 * aNR, 3e5) + Math.min(aNR >> 3, 5e4), acc[aC] + Math.max(~~((aNR + .5) / ff), 1));
						65535 <= aNR ? aeB + 2 < mJ.length ? (n2[aC] = aeB + 1, n3[aC] = ae9 = function(aC, aeJ, aeD, aeE, aeB, ff, mJ, adF) {
							aeJ = Math.min(aeJ - 65535, 65535);
							var mJ = bP.jN(mJ[aeB + 2]),
								aeB = mJ % adF - aeD,
								mJ = ~~((mJ + .5) / adF) - aeE,
								aeM = Math.max(~~Math.sqrt(aeB * aeB + mJ * mJ + .5), 1);
							return aeJ = Math.min(Math.floor((ff * aeJ + .5) / aeM), 65534), bQ.z.acc[aC] = aeJ, aeD + bO.g3(aeJ * aeB, 65535) + adF * (aeE + bO.g3(aeJ * mJ, 65535))
						}(aC, aNR, aeF, aeG, aeB, ff, mJ, adF)) : (n3[aC] = ae9 = aeC, acc[aC] = 65535) : (acc[aC] = aNR, n3[aC] = ae9 = aeD + bO.g3(aNR * aeH, 65535) + adF * (ae2 + bO.g3(aNR * aeI, 65535))), ack[aC] = bQ.jQ.aeL(ack[aC],
							aeA, ae9)
					}
				}(this), ! function(uH) {
					if (bi.kv() % 2 == 1) {
						var aC, iV, lt, fw, em, aeN, a2c, aeO, i5, o1, o2, ae2, aeP, aD7, aeR, lb, fc = uH.mo,
							n3 = uH.n3,
							ms = uH.ms,
							aAQ = uH.aAQ,
							acm = uH.acm,
							jQ = bQ.jQ.jQ,
							aeT = jQ.length,
							aeU = bQ.jQ.aeU,
							adF = bV.fn << 4,
							aeV = aE.iX,
							aZs = bj.fa,
							hB = (fc - 1) * (bO.g3(bi.kv(), 2) % 2);
						for (aC = 0; aC < fc; aC++)
							for (iV = Math.abs(aC - hB), ae2 = n3[iV], lt = bP.jP(ae2), i5 = ms[iV] >> 3, o1 = ae2 % adF, o2 = ~~((ae2 + .5) / adF), aeR = aAQ[iV], fw = 0; fw < 9; fw++)
								if (!((aeN = lt + aeU[fw]) < 0 || aeT <= aeN))
									for (aeO = jQ[aeN], a2c = aeO.length, em = 0; em < a2c; em++) aeP = aeO[em], lb = ms[aeP] >> 3, i5 == lb || aeV && aZs[i5] === aZs[lb] && aZs[i5] || (lb = n3[aeP], (aD7 = o1 - lb % adF) * aD7 + (aD7 = o2 -
										~~((lb + .5) / adF)) * aD7 < 14400 && (lb = aAQ[aeP], aD7 = lb <= aeR ? Math.max(1, bO.g3(lb + bO.g3(aeR - lb, 10), 10)) : Math.max(1, bO.g3(aeR, 10)), aAQ[aeP] = Math.max(lb - aD7, 0), acm[
										aeP] = 4))
					}
				}(this), ! function(uH) {
					if (bi.kv() % 5 == 3)
						for (var aAQ = uH.aAQ, fc = uH.mo, aC = 0; aC < fc; aC++) {
							var iM = aAQ[aC];
							aAQ[aC] = Math.max(iM - Math.max(1, iM >> 7), 0)
						}
				}(this), this), aAQ = uH.aAQ, acm = uH.acm, aC = uH.mo - 1; 0 <= aC; aC--) acm[aC] = acm[aC] >> 1, 0 === aAQ[aC] && (bQ.mx.acM(aC), bQ.aMX.acf(aC));
			bg.h2(hA, ed - bQ.ln.aMU(hA), 15)
		}
}

function abw() {
	this.aeW = 32, this.fj = 0, this.fl = 0, this.jR = 0, this.aeX = 0, this.aeY = 4, this.jQ = null, this.aeU = new Int16Array(9), this.dm = function() {
		this.jR = 1 + bO.g3(bV.fn - 1, this.aeW), this.aeX = 1 + bO.g3(bV.fo - 1, this.aeW), this.jQ = new Array(this.jR * this.aeX), bD.sr.a64(this.jQ);
		var fj, fl, aeU = this.aeU,
			j = this.jR;
		for (fj = -1; fj <= 1; fj++)
			for (fl = -1; fl <= 1; fl++) aeU[3 * (1 + fl) + 1 + fj] = fl * j + fj
	}, this.n9 = function(aea, aC) {
		return this.jQ[aC].push(aea), this.jQ[aC].length - 1
	}, this.aeL = function(aeb, ae2, aeC) {
		var aec, aed, ae2 = bP.jP(ae2),
			aeC = bP.jP(aeC);
		return ae2 === aeC ? aeb : (aec = this.jQ[ae2].pop(), this.jQ[ae2].length === aeb ? this.n9(aec, aeC) : (aed = this.jQ[ae2][aeb], this.jQ[ae2][aeb] = aec, bQ.z.ack[aec] = aeb, this.n9(aed, aeC)))
	}
}

function ac0() {
	this.lm = function(player, aee) {
		return -1 !== aee && !!bQ.ln.mO(player, aee) && this.rz(player, aee, 0)
	}, this.rz = function(player, aee, aef) {
		player = function(player, aee, aef) {
			var adp = bQ.ln.adR(player, aee);
			if (-1 === adp) return -1;
			adp = bQ.ln.lo(adp, aee);
			if (-1 === adp) return -1;
			var mH = bQ.mK.mP(adp, aee);
			if (0 <= mH) return mH;
			if (bQ.mK.mQ()) return -1;
			if (0 <= (mH = bQ.mK.mP(aee, adp))) return bQ.mK.mR(bQ.mK.mS(bQ.mK.get(mH)));
			if (adp === aee) return bQ.mK.mR(new Uint32Array([adp, aee]));
			if (0 <= (mH = bQ.ac1.rz(adp, aee))) return mH;
			return aef ? function(aej, player) {
				var gJ = bR.gJ,
					buffer = (gJ.fill(0), [aej]),
					il = (gJ[aej] = 1, bP.il),
					aek = -1,
					fc = buffer.length;
				for (; - 1 === aek && fc;) {
					for (var h = [], aC = 0; aC < fc; aC++)
						for (var fO = buffer[aC], a7y = gJ[fO], ff = 0; ff < 8; ff++) {
							var zs, a4T, fi = fO + il[ff],
								fG = 4 * fi;
							ad.iu(fG) ? (zs = gJ[fi], a4T = a7y + 5 + ((1 & ff) << 1), 0 === zs ? (h.push(fi), gJ[fi] = a4T) : gJ[fi] = Math.min(a4T, zs)) : -1 === aek && ff % 2 == 0 && ad.a1g(player, fG) && (aek = fO)
						}
					fc = (buffer = h).length
				}
				return -1 !== aek ? function(j7, aem) {
					var il = bP.il,
						aen = -1,
						iU = 0,
						nW = [];
					for (; aem !== j7;)(iU = function(fO, iU) {
						var gJ = bR.gJ,
							il = bP.il,
							a7y = gJ[fO];
						if (a7y - gJ[fO + il[iU]] != 5 + ((1 & iU) << 1))
							for (var fv = 0; fv < 8; fv++) {
								var ff = fv + iU + 6 & 7;
								if (a7y - gJ[fO + il[ff]] == 5 + ((1 & ff) << 1)) return ff
							}
						return iU
					}(aem, iU)) !== aen && (nW.push(aem), aen = iU), aem += il[iU];
					nW.push(j7);
					var mH = bQ.mK.mP(nW[0], j7);
					if (0 <= mH) return mH;
					return bQ.mK.mR(new Uint32Array(nW))
				}(aej, aek) : -1
			}(aee, player) : -1
		}(player, aee, aef);
		return -1 !== player && (bR.h[0] = bQ.mK.get(player), !0)
	}
}

function ac2() {
	function aep(hs, jC, jE) {
		for (var kE = Math.min(jC, jE), oJ = Math.max(jC, jE), fl = kE + 1; fl < oJ; fl++)
			if (!ad.iu(bP.jK(hs, fl))) return;
		return 1
	}

	function aeq(hu, jB, jD) {
		for (var kE = Math.min(jB, jD), oJ = Math.max(jB, jD), fj = kE + 1; fj < oJ; fj++)
			if (!ad.iu(bP.jK(fj, hu))) return;
		return 1
	}

	function aer(jB, jC, jD, jE, aeh, aee) {
		for (var fc = Math.min(Math.abs(jD - jB), Math.abs(jE - jC)), j0 = Math.sign(jD - jB), j3 = Math.sign(jE - jC), aC = 0; aC < fc; aC++)
			if (!ad.iu(bP.jK(jB += j0, jC += j3))) return null;
		return jB === jD ? aep(jB, jC, jE) ? new Uint32Array([aeh, bP.fz(jB, jC), aee]) : null : aeq(jC, jB, jD) ? new Uint32Array([aeh, bP.fz(jB, jC), aee]) : null
	}
	this.rz = function(aeh, aee) {
		aeh = function(aeh, aee) {
			var jB = bP.fk(aeh),
				jC = bP.fm(aeh),
				jD = bP.fk(aee),
				jE = bP.fm(aee);
			if (jB === jD) {
				if (aep(jB, jC, jE)) return new Uint32Array([aeh, aee])
			} else {
				if (jC !== jE) return aer(jB, jC, jD, jE, aeh, aee) || aer(jD, jE, jB, jC, aeh, aee);
				if (aeq(jC, jB, jD)) return new Uint32Array([aeh, aee])
			}
			return null
		}(aeh, aee);
		return null === aeh ? -1 : bQ.mK.mR(aeh)
	}
}

function ac7() {
	var aes = [];
	this.dm = function() {
		aes = []
	}, this.mQ = function() {
		return 65536 === aes.length
	}, this.mP = function(aeh, aee) {
		for (var mK = aes, fc = mK.length, aC = 0; aC < fc; aC++) {
			var hA = mK[aC];
			if (hA[0] === aeh && hA[hA.length - 1] === aee) return aC
		}
		return -1
	}, this.mS = function(mJ) {
		var aet = new Uint32Array(mJ.length);
		return aet.set(mJ), aet.reverse()
	}, this.acT = function(i5, lb) {
		var h5 = i5.length - 1,
			aeu = new Uint32Array(h5 + lb.length);
		return aeu.set(i5, 0), aeu.set(lb, h5), aeu
	}, this.acY = function(i5, lb, zM, fO, aev) {
		aev && (zM = (lb = this.mS(lb)).length - zM - 2);
		aev = lb.subarray(zM + 1 + (fO === lb[zM + 1])), fO = new Uint32Array(i5.length + aev.length);
		return fO.set(i5, 0), fO.set(aev, i5.length), fO
	}, this.mR = function(mJ) {
		return aes.push(mJ), aes.length - 1
	}, this.get = function(aC) {
		return aes[aC]
	}, this.mM = function() {
		return aes
	}, this.aex = function(aeh, aee) {
		return null
	}
}

function acB() {
	this.eh = function(player, ny) {
		player = bQ.ln.o0(player, ny);
		return !(player < 0 || !bQ.mx.aca(player) || (bQ.mx.acM(player), 0))
	}
}

function abx() {
	var a2H = 32,
		a2G = new Array(2);

	function a06(em) {
		var fj, fl, fO, j3, j0, iZ = a2H,
			a6X = bD.sF.a06(iZ, iZ),
			ih = bD.sF.getContext(a6X, !0),
			ic = bD.sF.getImageData(ih, iZ, iZ),
			a0H = ic.data,
			lt = (iZ >> 1) - .5,
			lu = Math.sqrt(lt * lt);
		for (a0H.fill(255), fl = 0; fl < iZ; fl++)
			for (fj = 0; fj < iZ; fj++) j0 = fj - lt, j3 = fl - lt, fO = 4 * (fl * iZ + fj), j0 = 714 * (lu - Math.sqrt(j0 * j0 + j3 * j3)) / lu, a0H[2 + fO] = em, a0H[3 + fO] = 255 < j0 ? 0 : j0;
		return ih.putImageData(ic, 0, 0), a6X
	}
	this.aey = -1, this.dm = function() {
		this.aey = -1, a2G[0] || (a2G[0] = a06(255), a2G[1] = a06(0))
	}, this.aez = function(ih, fG, fj, fl, eK, aC) {
		bD.gy.hp(aE.fM) && (ih.setTransform(fG *= 4 / 3 * .625, 0, 0, fG, fj - (eK *= 4 / 3), fl - eK), ih.drawImage(a2G[+(bQ.z.mr[aC] === this.aey)], 0, 0))
	}
}

function ac6() {
	function aa9(fj, fc, fl, af0, aDD, g2, player) {
		if (!(fl < 1 || aDD < fl))
			for (var aC = 0; aC <= fc; aC++) {
				var fG = bP.jK(fj, fl);
				if (bQ.ln.ace(fG) && !bD.sr.has(af0, ad.fK(fG)) && ad.a1Y(fG, player)) return fG >> 2;
				fj += g2
			}
		return -1
	}

	function aaD(fl, fc, fj, af0, aa7, g2, player) {
		if (!(fj < 1 || aa7 < fj)) {
			fc = Math.max(fc, 0);
			for (var aC = 0; aC <= fc; aC++) {
				var fG = bP.jK(fj, fl);
				if (bQ.ln.ace(fG) && !bD.sr.has(af0, ad.fK(fG)) && ad.a1Y(fG, player)) return fG >> 2;
				fl += g2
			}
		}
		return -1
	}

	function aaH(j7, j8, aa4) {
		return -1 !== j8 && (-1 === j7 || bP.j9(j8, aa4) < bP.j9(j7, aa4)) ? j8 : j7
	}
	this.iE = function(player, aa4) {
		if (bQ.n4.n5(player))
			for (var aa5 = bP.im(), af0 = [];;) {
				var aek = function(aa4, aa5, af0, player) {
					for (var hs = bP.fk(aa4), hu = bP.fm(aa4), aa7 = bV.fn - 2, aDD = bV.fo - 2, aa8 = -1, ff = 0; ff < aa5; ff++) {
						var aDC = Math.max(hs - ff, 1),
							aQh = Math.max(hu - ff, 1),
							a1U = Math.min(hs + ff, aa7),
							a1T = Math.min(hu + ff, aDD),
							j7 = aa9(hs, a1U - hs, hu - ff, af0, aDD, 1, player),
							j8 = aa9(hs - 1, hs - aDC - 1, hu - ff, af0, aDD, -1, player),
							a1U = aa9(hs, a1U - hs, hu + ff, af0, aDD, 1, player),
							aDC = aa9(hs - 1, hs - aDC - 1, hu + ff, af0, aDD, -1, player),
							aaC = aaD(hu, a1T - hu - 1, hs - ff, af0, aa7, 1, player),
							aaE = aaD(hu - 1, hu - aQh - 2, hs - ff, af0, aa7, -1, player),
							a1T = aaD(hu, a1T - hu - 1, hs + ff, af0, aa7, 1, player),
							aQh = aaD(hu - 1, hu - aQh - 2, hs + ff, af0, aa7, -1, player);
						if (aa8 = aaH(aa8, j7, aa4), aa8 = aaH(aa8, j8, aa4), aa8 = aaH(aa8, a1U, aa4), aa8 = aaH(aa8, aDC, aa4), aa8 = aaH(aa8, aaC, aa4), aa8 = aaH(aa8, aaE, aa4), aa8 = aaH(aa8, a1T, aa4), 0 <= (aa8 = aaH(aa8, aQh, aa4)) &&
							ff * ff >= bP.j9(aa8, aa4)) return aa8
					}
					return -1
				}(aa4, aa5, af0, player);
				if (-1 === aek) break;
				var id = ad.fK(bP.fS(aek));
				if (bQ.ln.adP(player, id)) return !! function(player, aek, aa4) {
					for (var iU = bP.jU(aek, aa4), aC = 0; aC < 4; aC++) {
						var fO = bP.jS(aek, iU);
						if (ad.aM3(bP.fS(fO), player)) return bR.gE[6] = iU, 1;
						iU = (iU + 1) % 4
					}
					return
				}(player, aek, aa4) && (bR.gE[7] = aek, !0);
				af0.push(id)
			}
		return !1
	}
}

function dq() {
	this.aXQ = [L(521), L(522), L(523), L(524), L(525), L(526), L(527), L(528), L(529), L(530), L(531), L(532), L(533), L(534), L(535), L(536)];
	var af3 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aFh = new Array(af3.length), this.dm = function() {
		var h = bm.buffer.data[155].value.split(";"),
			lt = h.length;
		if (function() {
				for (var fc = af3.length, aC = 0; aC < fc; aC++) ba.aFh[aC] = af3[aC]
			}(), !(lt > af3.length))
			for (var aC = 0; aC < lt; aC++) h[aC].length && (this.aFh[aC] = h[aC])
	}, this.aXS = function(eL, code) {
		for (var aFh = this.aFh, af5 = af3, sA = (aFh[eL] = code, ""), fc = aFh.length, af6 = [], aC = 0; aC < fc; aC++) af6.push(aFh[aC] === af5[aC] ? "" : aFh[aC]);
		fc--;
		for (aC = 0; aC < fc; aC++) sA += af6[aC] + ";";
		bm.r0.r1(155, sA += af6[fc])
	}, this.aXP = function() {
		bm.r0.r1(155, ""), this.dm()
	}, this.em = function(code, eL) {
		return code === this.aFh[eL] || code === this.aFh[eL + 1]
	}
}

function dg() {
	var af7 = new Array(1),
		af8 = new Array(1),
		af9 = 20,
		ea = 0,
		afA = !1;

	function afC() {
		af9++, bt.play()
	}
	this.dm = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				af8[aC] = 0, af7[aC] = document.createElement("audio"), af7[aC].src = src, af7[aC].setAttribute("preload", "auto"), af7[aC].setAttribute("controls", "none"), af7[aC].style.display = "none", af7[aC].onpause = function() {
					af8[aC] = 1
				}, af7[aC].oncanplaythrough = function() {
					af8[aC] = 0 === af8[aC] ? 1 : af8[aC]
				}, document.body.appendChild(af7[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			afA = !0
		}
	}, this.xO = function() {
		if (afA) {
			afA = !1;
			for (var aC = 0; 0 <= aC; aC--) af7[aC].onpause = null, af7[aC].oncanplaythrough = null, u.removeChild(document.body, af7[aC]), af7[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bt.play()
	}), this.play = function() {
		if (afA) {
			var ed = performance.now();
			if (ea + 66 < ed)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === af8[aC]) return ea = ed, af8[aC] = 2, void af7[aC].play();
			0 < af9 && (af9--, setTimeout(afC, 66))
		}
	}
}

function cf() {
	this.aCC = function() {
		var afF;
		return !(am.lU < 3 || ah.hQ[mZ[0]] >= aE.ki >> 1) && (aE.iX ? 9 !== aE.lG && (afF = af.aO4(), !(2 * af.aO5(bk.lX()) >= afF)) : function() {
			if (8 === aE.lG) return !1;
			var afF = af.aO4();
			if (2 * ah.he[mZ[0]] >= afF) return !1;
			return !0
		}())
	}
}

function cF() {
	this.dm = function() {
		if (0 === aE.data.sResourcesType) {
			for (var ae3 = aE.ky, he = ah.he, aC = 0; aC < ae3; aC++) he[aC] = 512;
			var ae4 = aE.a0m,
				lB = aF.lB,
				iM = aF.iM;
			for (aC = ae3; aC < ae4; aC++) he[aC] = lB[iM[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fc = aE.a0m, he = ah.he, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fc; aC++) he[aC] = sResourcesValue
		} : function() {
			for (var fc = aE.a0m, he = ah.he, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fc; aC++) he[aC] = sResourcesData[aC]
		})();
		bg.nW[8] = ah.he[aE.fM]
	}
}

function dW() {
	var aIz = 501,
		afN = (this.afK = new Uint32Array(aIz), this.a7H = new Uint32Array(aIz), this.aFM = new Uint16Array(aIz), this.afL = 0, this.afM = 0, 1),
		xb = 0;

	function afQ(self) {
		self.max.fill(0)
	}

	function afS(self, aC) {
		self.max[0] = Math.max(self.afK[aC], self.max[0]), self.max[1] = Math.max(self.a7H[aC], self.max[1]), self.max[2] = Math.max(self.aFM[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.afO = 0, this.nW = new Array(21), this.afP = null, this.dn = function() {
		this.afP = [L(537), L(538), L(539), L(540), L(541), L(542), L(543), L(544), L(362), L(363), L(545), L(546), L(547), L(548), "", L(549), L(550), L(551), L(320), L(552), L(553)]
	}, this.dm = function() {
		this.afL = 0, this.afM = 0, afN = 1, this.afO = 0, xb = 0, afQ(this), this.nW.fill(0)
	}, this.aXa = function() {
		return 2 <= this.afL && !this.afM
	}, this.aAN = function() {
		0 !== bi.kv() && (this.afM = 1, bh.iP) && bh.ty()
	}, this.rw = function(player, jG) {
		bD.gy.a7B(player) && (this.nW[0] += jG + 1, this.nW[1]++, this.nW[12] += bR.g9[1])
	}, this.rR = function(player, r4) {
		__fx.donationsTracker.logDonation(player, r4, bR.g9[0], aX.a8r());
		player === aE.fM && (aO.rR(bR.g9[0], bR.g9[1], r4), this.nW[12] += bR.g9[1], this.nW[16] += bR.g9[0]), r4 === aE.fM && (aO.aAc(bR.g9[0], player), this.nW[10] += bR.g9[0])
	}, this.s0 = function(player) {
		bD.gy.a7B(player) && (this.nW[2]++, this.nW[12] += bR.g9[1])
	}, this.s8 = function(player) {
		bD.gy.a7B(player) && (this.nW[19]++, this.nW[12] += bR.g9[1])
	}, this.adx = function(player) {
		bD.gy.a7B(player) && this.nW[20]++
	}, this.h2 = function(player, a7y, eL) {
		bD.gy.a7B(player) && (this.nW[eL] += a7y)
	}, this.eh = function() {
		var self;
		this.afO || 0 < xb-- || ((self = this).afK[self.afL] = ah.hQ[aE.fM], self.a7H[self.afL] = ah.he[aE.fM], self.aFM[self.afL] = af.aFN(aE.fM), afS(self, self.afL), self.afL++, self.afL === aIz && function(self) {
			afQ(self), afS(self, 0), self.afL = 1 + bO.g3(aIz, 2);
			for (var aC = 1; aC < self.afL; aC++) self.afK[aC] = self.afK[2 * aC], self.a7H[aC] = self.a7H[2 * aC], self.aFM[aC] = self.aFM[2 * aC], afS(self, aC);
			afN *= 2
		}(self), xb = afN - 1, bh.nN(), 0 === ah.na[aE.fM] && (self.afO = bi.kv()))
	}
}

function dX() {
	this.j = 0, this.k = 0, this.v1 = 0, this.v2 = 0, this.afU = 0, this.afV = 0, this.aCQ = 0, this.vi = 0;
	var afX = this.afW = 0;
	this.afY = 0, this.afZ = 0, this.afa = 0, this.aBl = 0, this.eL = 0, this.aEx = null, this.iP = !1, this.afb = -1, this.afc = !1, this.afd = [0, 0], this.dn = function() {
		this.aEx = [L(554), L(128, 0, "Balance"), L(127, 0, "Interest"), L(555)]
	}, this.dm = function() {
		this.iP = !1, this.afb = -1, this.afc = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var ff = a1.a2.ip() && i.j < i.k ? 1 : a1.a2.ip() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(ff * this.j), this.j -= a1.a2.ip() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.aBl = Math.floor(this.k / 150), this.aBl = Math.max(this.aBl, 1.5), this.v1 = Math.floor(1 + .02 * this
			.j), this.v2 = Math.floor(1 + .04 * this.j), this.aCQ = this.v2, afX = Math.floor(.75 * this.aCQ), this.vi = Math.floor(1 + .075 * this.j), this.afY = Math.floor(1 + .1125 * this.j), this.afZ = Math.floor(this.j * (a1.a2.ip() ? .03 :
				.029)), this.afZ = Math.max(this.afZ, 4), this.afa = Math.floor(.035 * this.j), this.afa = Math.max(this.afa, 4), this.afW = this.k - 2 * this.aCQ - this.vi - this.afY, this.iP && this.afe()
	}, this.hq = function(mD, mE) {
		var a0p, a0o;
		return !!this.iP && (a0o = mD, a0p = mE, mD -= bO.g3(i.j - this.j, 2), mE -= bO.g3(i.k - this.k, 2), mD < 0 || mE < 0 || mD >= this.j || mE >= this.k || mD >= this.j - this.afY && mE < this.afY ? -1 !== aN.hq(a0o, a0p) || bF.hq(a0o,
			a0p) || this.ty() : mE < this.afY || (mE < this.k - this.vi ? (this.afc = !0, this.afb = (mD - 2 * this.v1 - this.afU) / this.afV, 3 !== this.eL && (bi.du = !0)) : (a0o = (a0o = Math.floor(mD / (this.j / this.aEx.length))) < 0 ?
				0 : a0o >= this.aEx.length ? this.aEx.length - 1 : a0o) !== this.eL && (this.eL = a0o, this.afe(), bi.du = !0)), !0)
	}, this.a5E = function(mD, mE) {
		return this.afd[0] = mD, this.afd[1] = mE, !(!this.iP || !this.afc || (mD -= bO.g3(i.j - this.j, 2), mE = this.afb, this.afb = (mD - 2 * this.v1 - this.afU) / this.afV, (0 <= this.afb && this.afb <= 1 || 0 <= mE && mE <= 1) && (bi.du = !
			0), 0))
	}, this.a5d = function() {
		this.afc && (this.afc = !1)
	}, this.a5p = function() {
		this.iP ? this.ty() : this.show()
	}, this.show = function() {
		bg.aXa() && (this.iP = !0, this.afe())
	}, this.ty = function() {
		this.iP = !1, this.afb = -1, bi.du = !0
	}, this.afe = function() {
		this.eL < 2 ? this.afU = aR.measureText(bD.tg.a2y(bg.max[this.eL]), bD.sF.sI(0, this.afZ)) : 2 === this.eL && (this.afU = aR.measureText(bD.tg.a7r(6, 2), bD.sF.sI(0, this.afZ))), this.afV = this.j - 2 * this.v1 - this.afU - this.v2
	}, this.nN = function() {
		this.iP && this.afe()
	}, this.yI = function() {
		this.iP && this.aCi()
	}, this.aCi = function() {
		var fj = bO.g3(i.j - this.j, 2),
			fl = bO.g3(i.k - this.k, 2);
		yJ.setTransform(1, 0, 0, 1, fj, fl), yJ.fillStyle = bE.pR, yJ.fillRect(0, this.afY, this.j, this.k - this.afY), this.aff(), this.aWG(), yJ.strokeRect(0, 0, this.j, this.k), bD.sF.textAlign(yJ, 2), yJ.font = bD.sF.sI(0, this.afZ), 0 ===
			this.eL ? this.afg(bg.afK, fj, fl) : 1 === this.eL ? this.afg(bg.a7H, fj, fl) : 2 === this.eL ? this.afh(fj, fl) : 3 === this.eL && (this.afi(fj, fl), this.afj(fj, fl)), aN.a9h(Math.floor(fj + this.j - .725 * this.afY), Math.floor(
				fl + .275 * this.afY), Math.floor(.45 * this.afY)), yJ.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aff = function() {
		var aC, ed;
		for (yJ.lineWidth = this.aBl, bD.sF.textBaseline(yJ, 1), bD.sF.textAlign(yJ, 1), yJ.strokeStyle = bE.pU, yJ.font = bD.sF.sI(1, this.afa), ed = this.j / this.aEx.length, yJ.fillStyle = bE.pq, yJ.fillRect(this.eL * ed, this.k - this.vi, ed,
				this.vi), yJ.fillStyle = bE.pU, yJ.fillRect(0, this.k - this.vi - .5 * this.aBl, this.j, this.aBl), aC = 1; aC <= 3; aC++) yJ.fillRect(aC * ed, this.k - this.vi, this.aBl, this.vi);
		for (aC = this.aEx.length - 1; 0 <= aC; aC--) yJ.fillText(bD.p0.a6l(this.aEx[aC], 0, .9 * ed), (aC + .5) * ed, this.k - .46 * this.vi)
	}, this.aWG = function() {
		yJ.fillStyle = bE.qI, yJ.fillRect(0, 0, this.j, this.afY), yJ.fillStyle = bE.pU, yJ.fillRect(0, this.afY - .5 * this.aBl, this.j, this.aBl), yJ.font = bD.sF.sI(1, .39 * this.afY), yJ.fillText(bD.p0.a6l(L(556), 0, .8 * this.j), Math.floor(
			this.j / 2), Math.floor(.55 * this.afY))
	}, this.afg = function(h, fj, fl) {
		var lt = bg.max[this.eL],
			a66 = (yJ.setTransform(1, 0, 0, 1, fj + 2 * this.v1 + this.afU, fl + this.aCQ + this.afY), yJ.lineWidth = 2, this.afW / Math.sqrt(lt));
		yJ.beginPath(), yJ.moveTo(this.afV, this.afW - a66 * Math.sqrt(h[bg.afL - 1]));
		for (var aC = bg.afL - 2; 0 <= aC; aC--) yJ.lineTo(aC * this.afV / (bg.afL - 1), this.afW - a66 * Math.sqrt(h[aC]));
		yJ.stroke();
		fj = this.a9h(h, a66, .5);
		fj < .95 && yJ.fillText(bD.tg.a2y(lt), -this.v1, 0), .05 < Math.abs(fj - .5) && yJ.fillText(bD.tg.a2y(Math.floor(lt / 4)), -this.v1, Math.floor(this.afW / 2)), .05 < fj && yJ.fillText("0", -this.v1, this.afW)
	}, this.afh = function(fj, fl) {
		yJ.setTransform(1, 0, 0, 1, fj + 2 * this.v1 + this.afU, fl + this.aCQ + this.afY), yJ.lineWidth = 2;
		var a66 = this.afW / Math.max(bg.max[this.eL], 1);
		yJ.beginPath(), yJ.moveTo(this.afV, this.afW - a66 * bg.aFM[bg.afL - 1]);
		for (var aC = bg.afL - 2; 0 <= aC; aC--) yJ.lineTo(aC * this.afV / (bg.afL - 1), this.afW - a66 * bg.aFM[aC]);
		yJ.stroke();
		fj = this.a9h(bg.aFM, a66, 1), fl = bg.max[this.eL] / 100;
		fj < .95 && yJ.fillText(bD.tg.a7r(fl, 2), -this.v1, 0), .05 < Math.abs(fj - .5) && yJ.fillText(bD.tg.a7r(fl / 2, 2), -this.v1, Math.floor(this.afW / 2)), .05 < fj && yJ.fillText(bD.tg.a7r(0, 2), -this.v1, this.afW)
	}, this.afi = function(fj, fl) {
		yJ.setTransform(1, 0, 0, 1, fj + .34 * this.j, fl + 2 * afX + this.afY), bD.sF.textAlign(yJ, 2);
		for (var aEf = this.k - 4 * afX - this.vi - this.afY, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) yJ.fillText(bD.p0.a6l(bg.afP[h[aC]], 0, .31 * this.j), 0, aC * aEf / 9);
		var g4 = bg.nW;
		for (yJ.setTransform(1, 0, 0, 1, fj + .39 * this.j, fl + 2 * afX + this.afY), bD.sF.textAlign(yJ, 0), yJ.fillText(bD.tg.a7r(100 * g4[0] / (1024 * Math.max(g4[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) yJ.fillText(g4[h[aC]].toString(), 0,
			aC * aEf / 9);
		yJ.fillText(bD.tg.a7r(100 * (1 - ah.hQ[aE.fM] / g4[7]), 0), 0, aEf)
	}, this.afj = function(fj, fl) {
		yJ.setTransform(1, 0, 0, 1, fj + .79 * this.j, fl + 2 * afX + this.afY), bD.sF.textAlign(yJ, 2);
		var aC, aEf = this.k - 4 * afX - this.vi - this.afY;
		for (yJ.fillStyle = bE.pl, aC = 2; 0 <= aC; aC--) yJ.fillText(bD.p0.a6l(bg.afP[aC + 8], 0, .31 * this.j), 0, aC * aEf / 9);
		yJ.fillText(bD.p0.a6l(bg.afP[18], 0, .31 * this.j), 0, 3 * aEf / 9), yJ.fillStyle = bE.pk, yJ.fillText(bD.p0.a6l(bg.afP[11], 0, .31 * this.j), 0, 4 * aEf / 9), yJ.fillStyle = bE.q5, yJ.fillText(bD.p0.a6l(bg.afP[13], 0, .31 * this.j), 0,
				5 * aEf / 9), yJ.fillText(bD.p0.a6l(bg.afP[15], 0, .31 * this.j), 0, 6 * aEf / 9), yJ.fillText(bD.p0.a6l(bg.afP[16], 0, .31 * this.j), 0, 7 * aEf / 9), yJ.fillText(bD.p0.a6l(bg.afP[12], 0, .31 * this.j), 0, 8 * aEf / 9), yJ
			.fillStyle = bE.q4, yJ.fillText(bD.p0.a6l(bg.afP[17], 0, .31 * this.j), 0, aEf), yJ.fillStyle = bE.pl;
		var g4 = bg.nW,
			aJT = g4[8] + g4[9] + g4[10] + g4[18],
			aJT = bD.tg.a2y(aJT),
			aV1 = yJ.measureText(aJT).width,
			fj = (yJ.setTransform(1, 0, 0, 1, fj + .83 * this.j + aV1, fl + 2 * afX + this.afY), yJ.fillText(bD.tg.a2y(g4[8]), 0, 0), yJ.fillText(bD.tg.a2y(g4[9]), 0, aEf / 9), yJ.fillText(bD.tg.a2y(g4[10]), 0, 2 * aEf / 9), yJ.fillText(bD.tg
				.a2y(g4[18]), 0, 3 * aEf / 9), yJ.fillStyle = bE.pk, yJ.fillText(aJT, 0, 4 * aEf / 9), yJ.fillStyle = bE.q5, yJ.fillText(bD.tg.a2y(g4[13]), 0, 5 * aEf / 9), yJ.fillText(bD.tg.a2y(g4[15]), 0, 6 * aEf / 9), yJ.fillText(bD.tg
				.a2y(g4[16]), 0, 7 * aEf / 9), yJ.fillText(bD.tg.a2y(g4[12]), 0, 8 * aEf / 9), g4[12] + g4[13] + g4[15] + g4[16]);
		yJ.fillStyle = bE.q4, yJ.fillText(bD.tg.a2y(fj), 0, aEf), yJ.fillStyle = bE.pU
	}, this.a9h = function(h, a66, aDL) {
		var aC, e, gL;
		return this.afb < 0 || 1 < this.afb ? .25 : (aC = this.afb * (bg.afL - 1), gL = h[e = Math.floor(aC)], gL += (aC - e) * (h[e < bg.afL - 1 ? e + 1 : e] - gL), yJ.strokeStyle = bE.pX, .04 < this.afb && this.afl(0, this.afW - a66 * Math.pow(
				gL, aDL), aC * this.afV / (bg.afL - 1), this.afW - a66 * Math.pow(gL, aDL)), .04 < gL / bg.max[this.eL] && this.afl(aC * this.afV / (bg.afL - 1), this.afW, aC * this.afV / (bg.afL - 1), this.afW - a66 * Math.pow(gL, aDL)), yJ
			.fillStyle = bE.q7, yJ.beginPath(), yJ.arc(aC * this.afV / (bg.afL - 1), this.afW - a66 * Math.pow(gL, aDL), Math.max(2, .014 * this.k), 0, 2 * Math.PI), yJ.fill(), h = this.afb * bi.aFO, h = 0 === ah.na[aE.fM] ? Math.floor(h * bg
				.afO) : Math.floor(h * bi.kv()), yJ.fillStyle = bE.pU, yJ.fillText(1 === aDL ? bD.tg.a7r(gL / 100, 2) : bD.tg.a2y(Math.floor(gL)), -this.v1, this.afW - a66 * Math.pow(gL, aDL)), bD.sF.textAlign(yJ, 1), yJ.fillText(aX.aFB(h),
				aC * this.afV / (bg.afL - 1), this.afW + this.afZ - (a1.a2.ip() ? 2 : 0) - this.aBl), bD.sF.textAlign(yJ, 2), a66 * Math.pow(gL, aDL) / this.afW)
	}, this.afl = function(o1, o2, oE, oF) {
		yJ.beginPath(), yJ.moveTo(o1, o2), yJ.lineTo(oE, oF), yJ.stroke()
	}
}

function c3() {
	this.afm = "https://territorial.io/changelog", this.aXb = "https://territorial.io/terms", this.aXc = "https://territorial.io/privacy", this.afn = "https://territorial.io/tutorial", this.afo = "https://territorial.io/players", this.afp =
		"https://territorial.io/clans", this.afq = "https://territorial.io/clan-results", this.aUA = "https://patreon.com/c/territorial", this.aGg = "https://play.google.com/store/apps/details?id=territorial.io", this.a4n =
		"https://apps.apple.com/app/id1581110913", this.aGh = "https://discord.gg/pthqvpTXmh", this.aGi = "https://www.instagram.com/davidtschacher/", this.a2W =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dF() {
	this.z = new afr, this.a1o = new afs, this.dm = function() {
		this.z.dm()
	}, this.eh = function() {
		0 !== this.z.wO && this.z.wO--
	}
}

function afs() {
	this.yI = function() {
		if (0 !== bS.z.wO && (yJ.globalAlpha = Math.min(bS.z.wO / 580, 1), yJ.drawImage(bS.z.afv, 1 + aT.a1m(), 1 + aT.a1n()), yJ.globalAlpha = 1, aE.i1)) {
			for (var o1 = jH / ir, o2 = jI / ir, oE = (i.j + jH) / ir, oF = (i.k + jI) / ir, hB = bS.z.afw * ir, afx = bS.z.afx, aC = aE.ky - 1; 0 <= aC; aC--) ! function(aC, hB, o1, o2, oE, oF, afx) {
				var highlight;
				0 === ah.na[aC] || 0 === ah.hQ[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (hB *= 2), oE = i.j * ((ah.jW[aC] + ah.jX[aC] + 1) / 2 - o1) / (oE - o1) - .5 * hB, o1 = i.k * ((ah.jY[
					aC] + ah.jZ[aC] + 1) / 2 - o2) / (oF - o2) - .5 * hB, oE > i.j) || o1 > i.k || oE < -hB || o1 < -hB || (highlight ? yJ.setTransform(2 * ir, 0, 0, 2 * ir, oE, o1) : yJ.setTransform(ir, 0, 0, ir, oE, o1), yJ.drawImage(
					afx[aE.iX ? bj.fa[aC] : 1], 0, 0))
			}(aC, hB, o1, o2, oE, oF, afx);
			yJ.setTransform(ir, 0, 0, ir, 0, 0)
		}
	}
}

function afr() {
	this.afw = 28, this.wO = 0, this.afv = null;
	var afz = this.afx = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function ag3(iZ, ag4) {
		var fj, fl, fO, j0, a6X = bD.sF.a06(iZ, iZ),
			ih = bD.sF.getContext(a6X, !0),
			ic = bD.sF.getImageData(ih, iZ, iZ),
			a0H = ic.data,
			lt = (iZ >> 1) - .5,
			ag5 = .5 + lt;
		for (ag5 *= ag5, fl = 0; fl < iZ; fl++)
			for (fj = 0; fj < iZ; fj++) j0 = (j0 = fj - lt) * j0 + (j0 = fl - lt) * j0, a0H[fO = 4 * (fl * iZ + fj)] = ag4[0], a0H[1 + fO] = ag4[1], a0H[2 + fO] = ag4[2], a0H[3 + fO] = (ag5 - j0) * ag4[3] / ag5;
		return ih.putImageData(ic, 0, 0), a6X
	}

	function aez(aC, ih, a6X, iZ) {
		var highlight, fj, fl;
		0 !== ah.na[aC] && 0 !== ah.hQ[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (iZ *= 2), fj = ah.jW[aC] + ah.jX[aC] + 1 - iZ - 2 >> 1, fl = ah.jY[aC] + ah.jZ[aC] + 1 - iZ - 2 >> 1, highlight ? ih
			.drawImage(a6X[aE.iX ? 9 === aE.lG && 5 === aF.iM[aC] ? 3 : bj.fa[aC] : aC < aE.ky ? 1 : 0], fj, fl, iZ, iZ) : ih.drawImage(a6X[aE.iX ? 9 === aE.lG && 5 === aF.iM[aC] ? 3 : bj.fa[aC] : aC < aE.ky ? 1 : 0], fj, fl))
	}
	this.dm = function() {
		var uH;
		this.wO = 700,
			function(uH) {
				var iZ = uH.afw;
				if (uH.afx = [], afz = [], aE.iX) {
					for (var aC = 0; aC <= aE.a0t; aC++) uH.afx.push(ag3(iZ, bj.adK[bj.lL[aC]])), afz.push(ag3(iZ >> 1, bj.adK[bj.lL[aC]]));
					9 === aE.lG && afz.push(ag3(iZ, bj.adK[1]))
				} else uH.afx.push(ag3(iZ, bj.adK[7])), uH.afx.push(ag3(iZ, bj.adK[4])), afz.push(ag3(iZ >> 1, bj.adK[7]))
			}(this),
			function(uH, ag9) {
				var aC, afv = uH.afv,
					ih = bD.sF.getContext(afv, !0),
					fc = aE.fZ,
					iZ = uH.afw >> 1;
				ih.imageSmoothingEnabled = !1, ih.setTransform(1, 0, 0, 1, 0, 0), ag9 && ih.clearRect(0, 0, afv.width, afv.height);
				if (9 === aE.lG) {
					iZ <<= 1;
					uH = b0.lP[5];
					for (aC = fc - uH; aC < fc; aC++) aez(aC, ih, afz, iZ);
					fc -= uH, iZ >>= 1
				}
				for (aC = aE.ky; aC < fc; aC++) aez(aC, ih, afz, iZ)
			}(this, null !== (uH = this).afv && uH.afv.width === bV.fn - 2 && uH.afv.height === bV.fo - 2 || (uH.afv = bD.sF.a06(bV.fn - 2, bV.fo - 2), !1)), aE.i1 || this.a89()
	}, this.adL = ag3, this.a89 = function() {
		for (var fc = aE.ky, iZ = this.afw, afx = this.afx, ih = bD.sF.getContext(this.afv, !0), aC = 0; aC < fc; aC++) aez(aC, ih, afx, iZ)
	}
}

function dG() {
	function agC() {
		8 === aE.lG && 1 === aE.a3f && bU.a3J.a3e()
	}

	function agB(player) {
		aE.i1 ? (al.aMN(player), am.aPp(), aE.lI && aE.rs.eh()) : b4.aH6(player)
	}
	this.rK = function(player) {
		aO.a3t(player, player === aE.fM ? 21 : 22), agB(player), agC()
	}, this.rp = function(player) {
		1 === aE.a3f && 0 !== ah.na[player] && 2 !== ah.a77[player] && agB(player), aE.a3i--, aE.a3h--, aO.a3t(player, 4), bD.gy.ho(2) && aX.nM(!0), agC()
	}
}

function dQ() {
	this.aZz = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aEc = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.pU, "rgb(170,170,170)"
	], this.agD = [bE.pU, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.pU, bE.pL], this.agE = [bE.pL, bE.pU, bE.pU, bE.pU, bE.pL, bE.pL, bE.pL, bE.pL, bE.pU];
	var aPz = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aPI = ["rgba(" + aPz[0] + ",", "rgba(" + aPz[1] + ",", "rgba(" + aPz[2] + ",", "rgba(" + aPz[3] + ",", "rgba(" + aPz[4] + ",", "rgba(" + aPz[5] + ",", "rgba(" + aPz[6] + ",", "rgba(" + aPz[7] + ",", "rgba(" + aPz[8] + ",", "rgba(" + aPz[9] +
			","
		], this.aPJ = ["rgb(" + aPz[0] + ")", "rgb(" + aPz[1] + ")", "rgb(" + aPz[2] + ")", "rgb(" + aPz[3] + ")", "rgb(" + aPz[4] + ")", "rgb(" + aPz[5] + ")", "rgb(" + aPz[6] + ")", "rgb(" + aPz[7] + ")", "rgb(" + aPz[8] + ")", "rgb(" + aPz[9] +
			")"
		], this.a42 = null, this.adK = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aVS = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lL = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fa = new Uint8Array(aE.fZ), this.aEd = new Uint8Array(aE.fZ), this.a0z = new Uint16Array(aE.fZ), this.a10 = new Uint16Array(this.lL.length + 1), this.a11 = new Uint16Array(this.lL.length), this
		.dn = function() {
			this.a42 = [L(557), L(558), L(559), L(560), L(561), L(562), L(563), L(564), L(565)]
		}, this.dm = function() {
			if (this.fa.fill(0), this.aEd.fill(0), this.agF(), aE.iX) {
				if (9 === aE.lG) {
					for (var fa = bj.fa, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fa[aC] = 1;
					var fc = aE.fZ;
					for (aC = aE.data.teamPlayerCount[7]; aC < fc; aC++) fa[aC] = 2;
					bj.lL[1] = 7, bj.lL[2] = 8
				} else aE.lI ? function() {
					var aVS = bj.aVS,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.ky - 1; 0 <= aC; aC--) colorsData[aC] = az.kF(262144);
					var agQ = 0,
						fs = 768,
						aVR = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var ff = 0, fw = 0; fw < 3; fw++) ff += Math.abs(aVS[aC][fw] - aVR[fw]);
							ff < fs && (agQ = aC, fs = ff)
						} var agR = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) agR[aC] = teamPlayerCount[aC];
					var lL = bj.lL,
						agS = new Uint8Array(9),
						h5 = (lL[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) agR[aC] && (agS[aC] = h5, lL[h5++] = aC);
					var kE = aE.ky,
						fa = bj.fa;
					agR[agQ] ? (agR[agQ]--, fa[0] = agS[agQ]) : kE = 0;
					var em = 0;
					for (aC = kE; aC < aE.a0m; aC++) {
						var iV = lL[em];
						if (agR[iV]) agR[iV]--, fa[aC] = agS[iV];
						else if (aC--, 9 <= ++em) return console.log("error 325")
					}
				}() : this.eh();
				! function() {
					for (var fc = aE.fZ, a0z = bj.a0z, a10 = bj.a10, a11 = bj.a11, fa = bj.fa, lL = bj.lL, a0s = lL.length, buffer = new Array(a0s), aC = 0; aC < a0s; aC++) buffer[aC] = [];
					for (aC = 0; aC < fc; aC++) buffer[lL[fa[aC]]].push(aC);
					for (aC = 1; aC <= a0s; aC++) a10[aC] = a10[aC - 1] + buffer[aC - 1].length;
					for (aC = 0; aC < a0s; aC++)
						for (var h5 = buffer[aC].length, lt = a10[aC], iV = 0; iV < h5; iV++) a0z[iV + lt] = buffer[aC][iV];
					var ky = aE.ky;
					for (aC = 0; aC < a0s; aC++)
						for (h5 = buffer[aC].length, lt = a10[aC], iV = 0; iV < h5; iV++)
							if (a0z[iV + lt] >= ky) {
								a11[aC] = iV;
								break
							}
				}(), ! function() {
					for (var fc = aE.fZ, fa = bj.fa, aEd = bj.aEd, lL = bj.lL, aC = 0; aC < fc; aC++) aEd[aC] = lL[fa[aC]];
					9 === aE.lG && aEd.fill(1, fc - b0.lP[5])
				}()
			}
		}, this.agF = function() {
			for (var aC = this.lL.length - 1; 0 <= aC; aC--) this.lL[aC] = aC
		}, this.eh = function() {
			var a2n = new Uint8Array(aE.ky),
				a2o = new Uint8Array(aE.ky),
				agK = new Uint16Array(8),
				agL = new Uint16Array(this.lL.length);
			this.agM(a2n, a2o, agK, 1), this.aLt(agK), this.agN(agL, a2n, a2o), this.agO(a2n, a2o, agL), this.agP()
		}, this.agM = function(a2n, a2o, agR, agT) {
			for (var fw, e, agU, fc = this.lL.length - agT, h = new Uint16Array(fc), aVS = this.aVS, colorsData = aE.data.colorsData, aC = aE.ky - 1; 0 <= aC; aC--) {
				for (fw = fc; agT <= fw; fw--) h[fw - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aVS[fw][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aVS[fw][1]) + Math.abs(4 * (63 & colorsData[aC]) - aVS[fw][2]);
				for (agU = 768, fw = fc - 1; 0 <= fw; fw--) h[e = (fw + aC) % fc] < agU && (agU = h[e], a2n[aC] = e);
				for (agR[a2n[aC]] += 4, agU = 768, fw = fc - 1; 0 <= fw; fw--) h[e = (fw + aC) % fc] < agU && e !== a2n[aC] && (agU = h[e], a2o[aC] = e);
				agR[a2o[aC]]++
			}
		}, this.aLt = function(agR) {
			for (var fw, lv, fc = this.lL.length - 1, aC = fc; 0 <= aC; aC--) this.lL[aC] = aC;
			for (aC = fc - 1; 0 <= aC; aC--) agR[aC]++;
			for (aC = 1; aC <= fc; aC++) {
				for (lv = 0, fw = 1; fw < fc; fw++) agR[fw] > agR[lv] && (lv = fw);
				agR[lv] = 0, this.lL[aC] = lv + 1
			}
		}, this.agN = function(agL, a2n, a2o) {
			var fw, a4Q, em, ff, e, oD, vI, agV = this.lL.length - 1,
				tA = new Uint16Array(agV),
				agW = [],
				agX = 0,
				a4P = [],
				agY = [];
			loop: for (var aC = 0; aC < aE.ky; aC++)
				if (null !== (a4Q = bD.tg.a4R(ah.a4O[aC]))) {
					for (fw = a4P.length - 1; 0 <= fw; fw--)
						if (a4Q === a4P[fw]) {
							agY[fw].push(aC), agX = Math.max(agX, agY[fw].length);
							continue loop
						} a4P.push(a4Q), agW.push(!1), agY.push([aC]), agX = Math.max(agX, 1)
				}
			for (; 2 < aE.a0t && agX > bO.g3(aE.ky, aE.a0t);) aE.a0t--, aE.lG--;
			for (fw = a4P.length - 1; 0 <= fw; fw--) {
				for (ff = -1, em = a4P.length - 1; 0 <= em; em--) !agW[em] && (-1 === ff || agY[em].length > agY[ff].length) && (ff = em);
				for (em = agV - 1; 0 <= em; em--) tA[em] = 1;
				for (em = agY[ff].length - 1; 0 <= em; em--) tA[a2n[agY[ff][em]]] += 3, tA[a2o[agY[ff][em]]]++;
				for (aC = agV - 1; 0 <= aC; aC--) {
					for (e = ff % agV, em = agV - 1; 0 <= em; em--) tA[em] > tA[e] && (e = em);
					for (oD = -1, em = aE.a0t; 0 < em; em--)
						if (this.lL[em] === e + 1) {
							oD = em;
							break
						} if (tA[e] = 0, -1 !== oD) {
						for (vI = 0, em = aE.a0t; 0 < em; em--) agL[oD] > agL[em] && vI++;
						if (vI !== aE.a0t - 1) {
							for (em = agY[ff].length - 1; 0 <= em; em--) agL[oD]++, this.fa[agY[ff][em]] = oD;
							break
						}
					}
				}
				agW[ff] = !0
			}
		}, this.agO = function(a2n, a2o, agL) {
			for (var aC, iz, fc = this.lL.length - 1, border = bO.g3(aE.ky, aE.a0t), agZ = (0 < aE.ky % aE.a0t && border++, new Uint8Array(1 + fc)), fw = fc; 1 <= fw; fw--) agZ[this.lL[fw]] = fw;
			for (aC = 0; aC < aE.ky; aC++) iz = agZ[a2n[aC] + 1], 0 === this.fa[aC] && iz <= aE.a0t && agL[iz] < border && (agL[iz]++, this.fa[aC] = iz);
			for (aC = 0; aC < aE.ky; aC++) iz = agZ[a2o[aC] + 1], 0 === this.fa[aC] && iz <= aE.a0t && agL[iz] < border && (agL[iz]++, this.fa[aC] = iz);
			for (fw = aE.a0t; 1 <= fw; fw--)
				for (aC = aE.ky - 1; 0 <= aC && !(agL[fw] >= border); aC--) 0 === this.fa[aC] && (agL[fw]++, this.fa[aC] = fw)
		}, this.agP = function() {
			if (aE.a0t < 8) aE.a0t++, aE.lG++, aE.a0u = 1;
			else
				for (var aC = aE.ky; aC < aE.fZ; aC++) this.fa[aC] = 1 + aC % aE.a0t
		}
}

function dj() {
	this.hR = function() {
		for (var fj, fl, aC = gY - 1; 0 <= aC; aC--) fj = bO.g3(ga[aC], 4) % bV.fn, fl = bO.g3(ga[aC], 4 * bV.fn), ah.jW[gT] = Math.min(fj, ah.jW[gT]), ah.jY[gT] = Math.min(fl, ah.jY[gT]), ah.jX[gT] = Math.max(fj, ah.jX[gT]), ah.jZ[gT] = Math
			.max(fl, ah.jZ[gT])
	}, this.gm = function() {
		var ff, hA, aC, fc = ah.h4[gT].length,
			fe = ad.fe;
		loop: for (aC = fc - 1; 0 <= aC; aC--) {
			for (ff = 3; 0 <= ff; ff--)
				if (hA = ah.h4[gT][aC] + fe[ff], ad.fT(hA) || ad.hC(hA) && ad.fU(hA) !== gT) {
					ad.kA(ah.h4[gT][aC], gT);
					continue loop
				} ah.h4[gT][aC] = ah.h4[gT][fc - 1], ah.h4[gT].pop(), fc--
		}
	}, this.gn = function() {
		var player = gT,
			hI = ah.hI,
			hJ = ah.hJ,
			g1 = ah.g1,
			fc = hI[player].length,
			fe = ad.fe;
		loop: for (var aC = fc - 1; 0 <= aC; aC--) {
			for (var aga = !1, agb = !1, ff = 3; 0 <= ff; ff--) {
				var hA = hI[player][aC] + fe[ff];
				if (ad.aM3(hA, player)) continue loop;
				aga = aga || ad.iu(hA), agb = agb || ad.aM2(hA)
			}
			aga ? hJ[player].push(hI[player][aC]) : agb ? g1[player].push(hI[player][aC]) : ad.a1L(hI[player][aC], player), hI[player][aC] = hI[player][fc - 1], hI[player].pop(), fc--
		}
	}, this.hG = function() {
		ah.hQ[gX] -= gY
	}, this.hH = function(border) {
		for (var fc = border.length, aC = fc - 1; 0 <= aC; aC--) ad.a1g(gX, border[aC]) || (border[aC] = border[fc - 1], border.pop(), fc--)
	}, this.hK = function(border) {
		for (var fc = border.length, aC = fc - 1; 0 <= aC; aC--) !ad.a1g(gX, border[aC]) && ad.fX(border[aC]) && (border[aC] = border[fc - 1], border.pop(), fc--)
	}, this.hL = function(border) {
		for (var ff, hA, fc = border.length, fe = ad.fe, aC = fc - 1; 0 <= aC; aC--)
			for (ff = 3; 0 <= ff; ff--)
				if (hA = border[aC] + fe[ff], ad.aM3(hA, gX)) {
					ah.hI[gX].push(border[aC]), border[aC] = border[fc - 1], border.pop(), fc--;
					break
				}
	}, this.hM = function() {
		for (var ff, hA, fe = ad.fe, aC = gY - 1; 0 <= aC; aC--)
			for (ff = 3; 0 <= ff; ff--) hA = ga[aC] + fe[ff], ad.a1j(gX, hA) && ad.aM9(hA) && (ah.hI[gX].push(hA), ad.h7(hA, gX))
	}, this.hN = function() {
		var fj, fl;
		loop: for (; ah.jY[gX] < ah.jZ[gX];) {
			for (fj = ah.jX[gX]; fj >= ah.jW[gX]; fj--)
				if (ad.a1g(gX, 4 * (ah.jY[gX] * bV.fn + fj))) break loop;
			ah.jY[gX]++
		}
		loop: for (; ah.jY[gX] < ah.jZ[gX];) {
			for (fj = ah.jX[gX]; fj >= ah.jW[gX]; fj--)
				if (ad.a1g(gX, 4 * (ah.jZ[gX] * bV.fn + fj))) break loop;
			ah.jZ[gX]--
		}
		loop: for (; ah.jW[gX] < ah.jX[gX];) {
			for (fl = ah.jZ[gX]; fl >= ah.jY[gX]; fl--)
				if (ad.a1g(gX, 4 * (fl * bV.fn + ah.jW[gX]))) break loop;
			ah.jW[gX]++
		}
		loop: for (; ah.jW[gX] < ah.jX[gX];) {
			for (fl = ah.jZ[gX]; fl >= ah.jY[gX]; fl--)
				if (ad.a1g(gX, 4 * (fl * bV.fn + ah.jX[gX]))) break loop;
			ah.jX[gX]--
		}
	}, this.fV = function(player, k7) {
		return 0 === bj.fa[player] || bj.fa[player] !== bj.fa[k7]
	}, this.i9 = function(player) {
		for (var aC, hB, fc = ah.hI[player].length, fe = ad.fe, ff = 3; 0 <= ff; ff--)
			for (hB = fe[ff], aC = 0; aC < fc; aC++)
				if (ad.fT(ah.hI[player][aC] + hB)) return !0;
		return !1
	}, this.aMJ = function(player) {
		for (var aC, hB, fc = ah.hI[player].length, fe = ad.fe, ff = 3; 0 <= ff; ff--)
			for (hB = fe[ff], aC = 0; aC < fc; aC++)
				if (ad.k9(ah.hI[player][aC]) && ad.fT(ah.hI[player][aC] + hB)) return !0;
		return !1
	}, this.iC = function(a7D, a7E) {
		for (var aC, ed, hB, hA, ae3 = ah.hI[a7D].length, ae4 = ah.hI[a7E].length, fe = (ae4 < ae3 && (ed = a7D, a7D = a7E, a7E = ed, ed = ae3, ae3 = ae4, 0), ad.fe), ff = 3; 0 <= ff; ff--)
			for (hB = fe[ff], aC = 0; aC < ae3; aC++)
				if (hA = ah.hI[a7D][aC] + hB, ad.hC(hA) && ad.fU(hA) === a7E) return !0;
		return !1
	}, this.aMK = function(a7D, a7E) {
		for (var aC, hB, hA, ae3 = ah.hI[a7D].length, fe = ad.fe, ff = 3; 0 <= ff; ff--)
			for (hB = fe[ff], aC = 0; aC < ae3; aC++)
				if (ad.k9(ah.hI[a7D][aC]) && (hA = ah.hI[a7D][aC] + hB, ad.hC(hA)) && ad.fU(hA) === a7E) return !0;
		return !1
	}
}

function dc() {
	this.s1 = new agc
}

function agc() {
	this.iF = function(player) {
		bD.gy.a78(player) && aO.a29(80, L(566), 637, 0, bE.qL, bE.pR, -1, !1)
	}, this.iI = function(player) {
		bD.gy.a78(player) && aO.a29(80, L(567), 637, 0, bE.qL, bE.pR, -1, !1)
	}
}

function agd() {
	this.age = 0, this.eh = function() {
		aP.eh(), aa.eh(), i.eh(), b1.z.eh(), ay.aLO(), bX.eV.eh(), bq.wa.eh(), bi.du && (bi.du = !1, ab.yI())
	}
}

function agf() {
	this.ec = bi.ec, this.eL = 0, this.age = 0, this.aLM = 0, this.agg = null, this.agh = 7, this.agi = 0, this.dm = function() {
		this.aLM = 0, this.agg = [], this.eL = 0, this.age = 0
	}, this.aYv = function(aD) {
		if (aE.i1) this.aFP(aD);
		else if (this.agg.push(aD), 2 === aE.a3f) {
			for (var aC = 0; aC < this.agg.length; aC++) bB.qu.eh(this.agg[aC]);
			this.agg = []
		}
	}, this.aFP = function(aD) {
		2 !== aE.a3f && (bB.qu.eh(aD), bC.eh(), aX.aFP(this.aLM), this.aLM === aE.a8F ? (aE.rs.eh(), this.aLM = 0, this.eL = 0, this.age = 0, this.ec = bi.ec) : (this.aLM++, ag.a88(), ag.nM(!0), be.render()))
	}, this.eh = function() {
		i.eh(), aE.i1 ? (bi.du = aX.aFP(-1) || bi.du, nO()) : (0 !== this.eL || bi.ec >= this.ec && (this.ec += bi.aFO * Math.floor(1 + (bi.ec - this.ec) / bi.aFO), 2 === aE.a3f ? nA() : this.agj(), this.eL++, 27 < bi.ec - this.agi)) && this
		.agk(), nJ(), bi.du && (bi.du = !1, a1k()), this.agi = bi.ec
	}, this.agk = function() {
		bi.du = !0, nL(), this.eL = 0
	}, this.agj = function() {
		var z6, aC;
		if (this.age !== 7 * this.aLM) nE(), be.render();
		else {
			z6 = !1;
			loop: for (; this.agl() && (z6 = !0, nE(), 2 !== aE.a3f) && 0 < this.agg.length;)
				for (aC = this.agh - 2; 0 <= aC; aC--)
					if (nE(), 2 === aE.a3f) break loop;
			z6 ? be.render() : (nA(), be.a8B())
		}
	}, this.agl = function() {
		return 0 < this.agg.length && (this.aLM++, bB.qu.eh(this.agg[0]), this.agg.shift(), !0)
	}
}

function agm() {
	var agn, ago, agp, aLM, agq, eL = 0,
		ec = bi.ec;

	function agt() {
		! function() {
			if (!aE.i1) return;
			if (aE.lI) return;
			if (2 !== aE.a3f)
				if (agq % 7 != 0) agq++;
				else if (aLM === aE.a8F) {
				if (!agw()) return;
				aX.aFP(aLM), aE.rs.eh()
			} else {
				if (!agw()) return;
				agq++, aLM++, ag.a88(), ag.nM(!0)
			}
			return 1
		}() && agw() && nE()
	}

	function agu() {
		eL = 0, (aE.i1 ? (bi.du = aX.aFP(aLM - (agq % 7 == 0 ? 0 : 1) + agq % 7 / 7) || bi.du, nO) : aN.hn || !bF.a8d ? nO : (bi.du = !0, nL))()
	}

	function agw() {
		var aC, fc, agx = bC.rq.aaV,
			gL = bC.rq.aaW,
			gN = bC.rq.aaX,
			gP = bC.rq.aaY,
			agy = bC.rq.aaZ,
			agz = bC.rq.aaa;
		if (!(agn >= agz.length)) {
			if (agz = agz[agn], agy[agn]) {
				for (fc = ago + agz, aC = ago; aC < fc; aC++) bB.qu.rf(agx[aC], gL[aC], gN[aC], gP[aC]);
				ago += agz, agn++
			} else ++agp >= agz && (agn++, agp = 0);
			return __fx.replay.tick++, 1
		}
		aO.a50("Replay file smaller than expected."), bF.a5q(!1), aE.a3f = 2
	}
	this.age = 0, this.dm = function() {
		agq = aLM = agp = ago = agn = 0, __fx.replay.registerHooks({
			advance: () => agt(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.du = !0
			},
			isEnded: () => 2 === aE.a3f,
			getTickInterval: () => bi.aFO
		})
	}, this.eh = function() {
		var aeT;
		i.eh(), __fx.replay.frame() ? nA() : bF.aCc() < 1.7 ? 0 === eL ? bi.ec >= ec && (aeT = bi.aFO / bF.aCc(), ec += aeT * Math.floor(1 + (bi.ec - ec) / aeT), 2 === aE.a3f || aN.hn || !bF.a8d ? nA() : (agt(), be.render()), eL++) : agu() :
			function() {
				var aeT;
				if (bi.ec >= ec)
					if (2 === aE.a3f || aN.hn || !bF.a8d) nA(), ec = bi.ec;
					else {
						for (aeT = bi.aFO / bF.aCc(), 16 < (bi.ec - ec) / aeT && (ec = bi.ec - 16 * aeT); bi.ec >= ec && 2 !== aE.a3f;) ec += aeT, agt();
						be.render()
					} agu()
			}(), nJ(), bi.du && (bi.du = !1, a1k())
	}, this.a3q = function() {
		bC.rq.aaa.length - agn <= 2 || aO.a50("Replay file larger than expected.")
	}
}

function ah0() {
	var eL = 0,
		ec = bi.ec;
	this.age = 0, this.eh = function() {
		i.eh(), aE.i1 ? nO() : 0 === eL ? bi.ec >= ec && (ec += bi.aFO * Math.floor(1 + (bi.ec - ec) / bi.aFO), 2 === aE.a3f || aN.hn ? nA() : (nE(), be.render()), eL++) : ((aN.hn ? nO : (bi.du = !0, nL))(), eL = 0), nJ(), bi.du && (bi.du = !1,
			a1k())
	}
}

function dY() {
	this.a3p = null, this.du = !1, this.ec = 0, this.aFO = 56;
	var ah1 = 0;

	function ah2() {
		bi.ec = ah1 = performance.now(), bi.a3p.eh(), window.requestAnimationFrame(ah2)
	}
	this.dm = function() {
		this.a8a(), window.requestAnimationFrame(ah2), this.ec = performance.now()
	}, this.a8S = function() {
		aE.hl ? (this.a3p = new agm, this.a3p.dm()) : aE.lI ? this.a3p = new ah0 : (this.a3p = new agf, this.a3p.dm())
	}, this.a8a = function() {
		this.a3p = new agd, this.du = !0
	}, this.eh = function() {
		this.a3p.age++
	}, this.kv = function() {
		return this.a3p.age
	}, this.aYa = function() {
		var ed = performance.now();
		ed < ah1 + 1e3 || (this.ec = ed, this.a3p.eh())
	}
}

function cy() {
	var aKm = 0,
		ah3 = !0;
	this.eh = function() {
		var ed, aB3;
		bi.ec < aKm || (aKm = bi.ec + 3e3, aE.hl) || aE.lI || bD.gy.hp(aE.fM) || (ed = new Date, aB3 = ed.getUTCSeconds(), ah3 ? aB3 < 43 && (ah3 = !1) : aB3 < 43 || (aKm += 52e3, ah3 = !0, aB3 = (ed.getUTCMinutes() + 2) % 60, ed = aE.lG < 7 ?
			0 : 8 === aE.lG ? 2 : 9 === aE.lG ? 3 : 1, aP.aAs(ed, aB3) && (aB3 = ed, aB3 = [L(568), L(569), L(570), L(571)][aB3], aO.aAT(aB3))))
	}
}

function cs() {
	var o1, o2, oE, oF, ah5 = 0,
		ah6 = 0;

	function ah8() {
		return Math.pow(Math.pow(oE - o1, 2) + Math.pow(oF - o2, 2), .5)
	}

	function ah7(e) {
		o1 = i.l * e.touches[0].clientX, o2 = i.l * e.touches[0].clientY, oE = i.l * e.touches[1].clientX, oF = i.l * e.touches[1].clientY
	}
	this.a5I = function(e) {
		return 1 < e.touches.length ? (ah6 = bi.ec, ah5 = 3, ah7(e), aM.ty(), !0) : (ah5 = 0, !1)
	}, this.a5J = function(e) {
		var aNE, ix, iy;
		return 0 !== aE.a3f && 1 < e.touches.length && (ah5 = Math.max(ah5 - 1, 0), aI.oJ() && (aNE = ah8(), ah7(e), e = ah8(), ix = Math.floor((o1 + oE) / 2), iy = Math.floor((o2 + oF) / 2), aT.aD3(ix, iy, Math.max(.125, e) / Math.max(.125,
			aNE)), bi.du = !0), !0)
	}, this.a5g = function() {
		var fj, fl;
		return !!(ah5 && (ah5 = 0, bi.ec < ah6 + 500)) && (fj = (o1 + oE) / 2, fl = (o2 + oF) / 2, aM.a5a(fj, fl), aM.click(fj, fl, !0) && (bi.du = !0), !0)
	}
}

function d9() {
	this.size = 0, this.eL = 0, this.aD = null, this.dm = function(aD) {
		this.eL = 0, this.aD = aD, this.size = aD.length
	}, this.xO = function() {
		this.aD = null
	}, this.re = function(size) {
		for (var g4 = 0, aD = this.aD, oJ = this.eL + size - 1, aC = this.eL; aC <= oJ; aC++) g4 |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << oJ - aC;
		return this.eL += size, this.eL > 8 * this.size && console.error("Unwrapper Overflow"), g4
	}, this.aZ3 = function(size) {
		var fw = size >> 1;
		return (1 << fw) * this.re(size - fw) + this.re(fw)
	}, this.aZ5 = function(ah9) {
		return this.size === bG.aZ2(ah9)
	}, this.aan = function(a0Y, ahA, ahB) {
		var h5 = this.re(a0Y);
		if (!h5) return null;
		for (var a0Y = Math.max(h5, ahB), h = new(ahA <= 8 ? Uint8Array : ahA <= 16 ? Uint16Array : Uint32Array)(a0Y), aC = 0; aC < h5; aC++) h[aC] = this.re(ahA);
		ahB = h[h5 - 1];
		return ahB && h.fill(ahB, h5), h
	}, this.aao = function(a0Y, ahC, ahB) {
		var h5 = this.re(a0Y);
		if (!h5) return null;
		for (var a0Y = Math.max(h5, ahB), h = new Array(a0Y), aC = 0; aC < h5; aC++) h[aC] = this.aal(ahC);
		return h.fill(h[h5 - 1], h5), h
	}, this.aal = function(a0Y) {
		return bJ.zh.zl(this.re(a0Y))
	}, this.aam = function() {
		var a2w = this.re(30);
		if (!(6 * a2w > 8 * this.size - this.eL)) {
			var sA = bI.f3.uy(bI.f3.uz(a2w)),
				sA = bD.tg.a83(sA, "_", "/");
			sA = bD.tg.a83(sA, "-", "+");
			for (var ahD = "";
				(sA.length + ahD.length) % 4;) ahD += "=";
			sA = "data:image/png;base64," + sA + ahD;
			var aMq = new Image;
			aMq.onload = function() {
				bC.aNn.aNo(aMq), aMq.onload = null, aMq = null
			}, aMq.src = sA
		}
	}
}

function dS() {
	this.abq = 0, this.abr = 0, this.abm = 0, this.abn = 0, this.abo = 0, this.abp = 0, this.aFz = [0, 0, 0, 0], this.oI = function() {
		this.abq = aT.a1m(), this.abr = aT.a1n(), this.abm = -this.abq, this.abn = -this.abr, this.abo = i.j / ir, this.abp = i.k / ir, this.aFz[0] = Math.floor(this.abm), this.aFz[1] = Math.floor(this.abn), this.aFz[2] = Math.floor(this.aFz[0] +
			this.abo + 1), this.aFz[3] = Math.floor(this.aFz[1] + this.abp + 1), be.aFx = !0
	}
}

function ct() {
	var aBh, nn;
	this.dm = function() {
		aBh = 1, nn = 0
	}, this.eh = function() {
		0 < aBh && (nn = 0 === nn ? bi.ec + 16 : nn, aBh = (aBh -= .001 * (bi.ec - nn)) < 0 ? 0 : aBh, nn = bi.ec, bi.du = !0)
	}, this.yI = function() {
		0 < aBh && (yJ.fillStyle = "rgba(0,0,0," + aBh + ")", yJ.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eL = 0, this.aD = null, this.dm = function(aD) {
		this.eL = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(ah9) {
		return this.dm(new Uint8Array(this.aZ2(ah9))), this.aD
	}, this.xO = function() {
		this.aD = null
	}, this.a9 = function(size, aB5) {
		for (var aD = this.aD, oJ = this.eL + size - 1, aC = this.eL; aC <= oJ; aC++) aD[aC >> 3] |= (aB5 >> oJ - aC & 1) << 7 - (7 & aC);
		this.eL += size, this.eL > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aZ1 = function(size, aB5) {
		var fw = size >> 1,
			ff = 1 << fw;
		this.a9(size - fw, bO.g3(aB5, ff)), this.a9(fw, aB5 % ff)
	}, this.ahG = function(size) {
		for (var aD = this.aD, oJ = this.eL + size, aC = this.eL; aC < oJ; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.aZ2 = function(ah9) {
		return ah9 + 7 >> 3
	}, this.ahH = function(h, kE, oJ, ahI) {
		for (var aC = kE; aC < oJ; aC++) this.a9(ahI, h[aC])
	}
}

function d8() {
	this.dm = function() {
		this.h = [], this.eL = 0
	}, this.aZU = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(ahJ, value) {
		for (var h = this.h, oJ = this.eL + ahJ - 1, ahK = 1 + (oJ >> 3); h.length < ahK;) h.push(0);
		for (var aC = this.eL; aC <= oJ; aC++) h[aC >> 3] |= (value >> oJ - aC & 1) << 7 - (7 & aC);
		this.eL += ahJ
	}, this.dt = function(h, a0Y, ahA) {
		var ahL = bD.sr.a6R(h);
		this.a9(a0Y, ahL);
		for (var aC = 0; aC < ahL; aC++) this.a9(ahA, h[aC])
	}, this.ab5 = function(h, a0Y, ahC) {
		var ahL = bD.sr.a6R(h);
		this.a9(a0Y, ahL);
		for (var aC = 0; aC < ahL; aC++) this.ab3(h[aC], ahC)
	}, this.ab3 = function(sA, a0Y) {
		var fc = sA.length;
		this.a9(a0Y, fc);
		for (var aC = 0; aC < fc; aC++) this.a9(16, sA.charCodeAt(aC))
	}, this.ab4 = function(a6X) {
		var ahM = (a6X = a6X.toDataURL()).split(",");
		if (ahM.length < 2) console.log("error 266");
		else {
			a6X = bD.tg.a83(a6X = ahM[ahM.length - 1], "/", "_"), a6X = bD.tg.a83(a6X, "\\+", "-");
			var a6X = bD.tg.a83(a6X, "=", ""),
				zu = bJ.f3.zr(a6X),
				fc = zu.length;
			this.a9(30, fc);
			for (var aC = 0; aC < fc; aC++) this.a9(6, zu[aC])
		}
	}
}
a(), self.aiCommand746 = function(g4) {
	0 === g4 ? by() : 1 !== g4 || !a1 || 1 !== a1.id || a1.e6 < 14 || bM.g5()
}, setTimeout(by, 1e4), window.onload = function() {
	by()
};