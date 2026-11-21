var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, by, bz, c0, c1, ga, gb, gc, gd, ge, gf, gg, gh,
	gi, gj, gk, gl, gm, iw, jM, jN, aCM, me, ko, a5V, z7, a26, aGX, a8p, a8q, S = ["div", "100%", "⬅️ ", "absolute", "none", "canvas", "0.75em", "<br>", "inherit", "center", "0.8em", "rgb(", "auto", "rgba(", "hidden", "   ", "flex", "span", "1em",
		"50%", "0.5em", "email", "click", "Data", " / ", "territorial.io", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "undefined", "pointer", "middle", "fixed", "break-word",
		"bold", "Player ", "Escape", "0.6em", "0.4em", "underline", "text", "scroll", "nowrap", "inline-block", "function", "button", "Value", "Enter", "20%", "1.5em", "0.0em 0.9em", "' target='_blank'>", "🔄 Reload", "translate(-50%, -50%)",
		"string", "round", "rgba(0,0,0,0.8)", "pre-wrap", "number", "mouseover", "mouseout", "mouseleave", "left", "keydown", "https://", "game.territorial.io", "focus", "ellipsis", "blur", "aria-label", "Zombie", "Space", "Redacted ",
		"Battle Royale", "<a href='", "</a>", "1v1", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.2em", " voted with ", "  • ", "   Gold: ", "✅ OK", "⚠️ ", "zombie", "wheel", "userIcon", "true", "touchstart", "top", "tls7", "system-ui",
		"style", "right", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "repeat(", "px ", "placeholder", "orange", "oneVsOne", "noFullSending", "mousemove", "long", "logo",
		"loading", "italic ", "https://territorial.io/", "grid", "file", "error", "en-US", "dotted", "data:image/png;base64,", "crown", "contextmenu", "column", "clock", "break-all", "blur(4px)", "block", "battleRoyale", "arraybuffer",
		"aria-pressed", "arena", "account", "accept", "_blank", "^[0-9]+$", "[Redacted Message]", "Seed", "Report", "Reload", "Patreon", "Mare Nostrum", "Interest", "Gold Seizure", "GET", "Bot ", "Back", "Audit Log", "Arial Black, system-ui", "30%",
		"255,255,255", "1px 1px 0 lightgray", "1px -1px 0 lightgray,", "1.3em", "1 Minute", "1 Hour", "1 Day", "0em", "000", "0.4em 0em", "0,0,0", "/wiki/transactions", "/wiki/clans", "/privacy", "/log/?r=", ". Duration: x", "-1px 1px 0 lightgray,",
		"-1px -1px 0 lightgray,", ",0,0.85)", ", 1fr)", " solid white;}", " Rank: ", " / 180", " / 160", " -> "
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

function c2(c3) {
	m && !c3 || (c5(), bO = new c6, bN = new c7, bD = new c8, bE = new c9, aE = new cA, bA = new cB, bI = new cC, bJ = new cD, aF = new cE, aG = new cF, aH = new cG, aI = new cH, aJ = new cI, aK = new cJ, aL = new cK, aM = new cL, aN = new cM, aO =
		new cN, aP = new cO, aQ = new cP, aR = new cQ, aS = new cR, aT = new cS, aU = new cT, aV = new cU, aW = new cV, aX = new cW, aY = new cX, aZ = new cY, aa = new cZ, ab = new ca, ac = new cb, ad = new cc, al = new cd, am = new ce, ao =
		new cf, an = new cg, ae = new ch, af = new ci, ai = new cj, ag = new ck, ah = new cl, aj = new cm, b0 = new cn, ak = new co, aq = new cp, ar = new cq, at = new cr, b1 = new cs, az = new ct, ap = new cu, au = new cv, av = new cw, aw =
		new cx, i = new cy, ax = new cz, ay = new d0, b2 = new d1, b3 = new d2, b4 = new d3, b5 = new d4, b6 = new d5, b7 = new d6, b8 = new d7, b9 = new d8, bB = new d9, bC = new dA, bF = new dB, bG = new a7, bH = new dC, bK = new dD, bL =
		new dE, bM = new dF, bP = new dG, bQ = new dH, bR = new dI, bS = new dJ, bT = new dK, bU = new dL, bV = new dM, bW = new dN, u = new dO, bX = new dP, a1 = new dQ, m = new dR, bl = new dS, bm = new dT, bj = new dU, bk = new dV, bd =
		new dW, be = new dX, bY = new dY, bZ = new dZ, bg = new da, bh = new db, bi = new dc, bn = new dd, bf = new de, p = new df, bo = new dg, bp = new dh, bq = new di, bs = new dj, bt = new dk, bu = new dl, bv = new dm, bw = new dn, bx =
		new dp, by = new dq, bz = new dr, c0 = new ds, c1 = new dt, m.dv(), a1.dv(), i.dw(), bm.dv(), bA.dv(), bA.dx(), (ba = new dy).dv(), bD.dv(), bY.dv(), b1.dv(), bI.dv(), bJ.dv(), bV.dv(), u.dv(), bb = new dz, i.dv(), bi.dv(), bf.dv(), bZ
		.dv(), bc = new e0, az.dv(), af.e1(), bX.dv(), aq.dv(), ab.dv(), aU.dv(), aj.dv(), bM.dv(), ac.dv(), bi.e2 = !0, setTimeout(function() {
			bV.a8(2, 14071)
		}, 0), u.v(5, 5), bL.e3() || a1.a2.e4(), i.e5(), m.n = 1)
}

function dR() {
	this.e6 = 2, this.e7 = 1777, this.e8 = 0;
	this.rVersion = 27, this.eC = "21 Nov 2026", this.eD = 0, this.dv = function() {
		this.o = "2.17.15", this.eC = this.eC + " [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.eF = 0 <= this.hostname.indexOf("github.io"), this.eG = 0 <=
			this.hostname.indexOf("game.territorial.io"), this.aB = function() {
				try {
					return window.self !== window.top
				} catch (e) {
					return !0
				}
			}(), this.eI = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.aA + " validMod: " + +this.eF)
	}, this.n = 0
}

function eJ() {
	var eK = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		eL = [100, 60, 30, 15, 6, 1],
		eM = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		eN = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		eP = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.eQ = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments", "Report", "Vouch"]
	], this.eR = function(id, eS, eT) {
		eS = this.eU(eS);
		return +(eM[eS][id] > eT)
	}, this.eU = function(eS) {
		for (var aC = 0; aC < eL.length; aC++)
			if (eL[aC] <= eS) return aC;
		return eL.length
	}, this.eV = function(eS) {
		return eK[this.eU(eS)]
	}, this.eW = function(id, eX) {
		return eN[id].replace(new RegExp("x", "g"), eX)
	}, this.eY = function(id, eX) {
		return eP[id].replace(new RegExp("x", "g"), eX)
	}, this.eZ = function(id, ea) {
		return this.eQ[5][id]
	}
}

function dP() {
	this.eb = new ec, this.ed = new ee, this.turnstile = new ef, this.dv = function() {
		a1.a2.eg(), this.turnstile.dv()
	}, this.eh = function() {
		return bm.buffer.data[160].value
	}
}

function ec() {
	var ei = 12e3;
	this.show = function(ej) {
		return !ej && !bX.eh() && (0 === a1.id ? bX.ed.show() : !(bi.ek < ei) && (ej = 1 === a1.id ? 72e4 : 108e4, ei = bi.ek + ej, 2 === m.e6) && a1.a2.em(Math.floor(ej)))
	}
}

function ee() {
	var en = null,
		ei = 2e4,
		eo = 0;
	this.ep = function() {
		bi.ek < ei || (ei = bi.ek + 1e4, 0 !== a1.id) || en || bX.eh() || (b1.z.eq(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b1.er.es(5) : ei = bi.ek + 1e3)
	}, this.et = function(eu) {
		en = eu
	}, this.show = function() {
		return !(!en || bi.ek < eo) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (eo = bi.ek + 6e4, (new ev).show(en.ew, en.colors, en.id), !(en = null)))
	}
}

function ef() {
	this.ex = 0;
	var f0, ey = null,
		ez = 0,
		f1 = "",
		f2 = 0,
		f3 = null,
		f4 = -1,
		f5 = -1,
		f6 = 0;

	function fG() {
		if (null !== f3 && null !== ey) {
			ez = 0;
			try {
				window.turnstile.remove(ey), f3.remove()
			} catch (e) {
				console.log("turnstile remove failed " + e)
			}
			ey = f3 = null
		}
	}

	function fA(fK) {
		return "" !== f1 && f2 + 1e3 * (300 - fK) > performance.now()
	}
	this.dv = function() {
		var f8;
		m.e8 || !m.aA && !m.eF ? (console.log("turnstile cannot be loaded"), this.ex = -1) : ((f8 = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", f8.async = !0, f8.onload =
			function() {
				bX.turnstile.ex = 1, console.log("turnstile onload"), bX.turnstile.f9()
			}, f8.onerror = function() {
				bX.turnstile.ex = -1, console.log("turnstile onerror")
			}, document.head.appendChild(f8))
	}, this.f9 = function() {
		var el;
		return !(1 !== this.ex || (window.turnstile ? ez ? (console.log("turnstile error 246"), 1) : fA(30) || (el = performance.now()) < f6 && f4 === bJ.fB.fC(bm.buffer.data[105].value, 5) && f5 === aa.fD || (f1 = "", ez = 1, f0 = el, (f3 =
			document.createElement("div")).style.position = "fixed", f3.style.left = "0", f3.style.top = "0", f3.style.zIndex = "100", document.body.appendChild(f3), console.log("turnstile render"), ey = window.turnstile.render(
			f3, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(fE) {
					console.log("turnstile success " + Math.floor(performance.now() - f0)), f1 = fE, f2 = performance.now(), bX.turnstile.fF(), fG()
				},
				"expired-callback": function() {
					fG(), console.log("turnstile expired " + Math.floor(performance.now() - f0))
				},
				"error-callback": function() {
					fG(), console.log("turnstile callback error " + Math.floor(performance.now() - f0)), bX.turnstile.ex = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		fG()
	}, this.fF = function() {
		fA(8) && bq.fH && b1.z.eq(b1.z.fI) && (f6 = performance.now() + 36e5 - 1e4, f4 = bJ.fB.fC(bm.buffer.data[105].value, 5), f5 = aa.fD, b1.er.fJ(f1), f1 = "", console.log("sendTokenToLobby success"))
	}
}

function cg() {
	this.fL = new fM
}

function fM() {
	this.fN = function(fO) {
		var fR;
		return bV.fP(bV.fQ) && aE.data.passableMountains && (fR = ad.fS(fO), this.fT(aE.fU, fR) || this.fV(aE.fU, fR)) && 0 !== (fR = function(fq) {
			for (var fr = bP.fs(fq), ft = bP.fu(fq), max = Math.max(bV.fv, bV.fw) - 2, fx = max * max, fy = !1, fz = 0, g0 = 0; g0 < max; g0++) {
				var g1, fW = function(fr, ft, g0) {
					for (var aC = 0; aC <= g0; aC++)
						for (var g3 = -1; g3 < 2; g3 += 2)
							for (var g4 = -1; g4 < 2; g4 += 2)
								for (var eu = 0; eu < 2; eu++) {
									var fO = function(fr, ft) {
										if (bP.g6(fr, ft)) {
											fr = bP.g7(fr, ft), ft = bP.fa(fr);
											if (ad.ff(ft) && ad.g8(ft)) return fr
										}
										return 0
									}(fr + eu * g3 * aC + (1 - eu) * g4 * g0, ft + eu * g4 * g0 + (1 - eu) * g3 * aC);
									if (fO) return fO
								}
					return 0
				}(fr, ft, g0);
				fW && (g1 = bP.g2(fr, ft, fW)) < fx && (fz = fW, fx = g1, fy || (fy = !0, max = Math.floor(Math.sqrt(g1)) + 1))
			}
			return fz
		}(bP.fY(fO))) && (fO = bP.fa(fR), ad.fb(fO) || (fO = ad.fc(fO)) !== aE.fU && bw.fd(fO, aE.fU)) ? fR : 0
	}, this.fe = function(player, fW) {
		fW = bP.fa(fW);
		if (ad.ff(fW)) {
			if (ad.fb(fW)) bR.fg[0] = aE.fh;
			else if (ad.fc(fW) !== bR.fg[0]) return !1;
			for (var fi = function(fO) {
					var fm = ad.fm,
						fi = [];
					loop: for (var fn = 3; 0 <= fn; fn--) {
						var fo = fO + fm[fn];
						if (ad.fp(fo)) {
							for (var id = ad.fS(fo), aC = 0; aC < fi.length; aC++)
								if (id === fi[aC]) continue loop;
							bR.fl[fi.length] = fo, fi.push(id)
						}
					}
					return fi
				}(fW), fk = fi.length, aC = 0; aC < fk; aC++)
				if (this.fT(player, fi[aC]) || this.fV(player, fi[aC])) return bR.fl[0] = bR.fl[aC], !0
		}
		return !1
	}, this.fT = function(player, fR) {
		for (var g9 = ah.g9[player], fk = g9.length, gA = Math.max(bO.gB(fk, 12), 1), fm = ad.fm, aC = 0; aC < fk; aC += gA)
			for (var fZ = g9[aC], fn = 3; 0 <= fn; fn--) {
				var fo = fZ + fm[fn];
				if (ad.fp(fo) && fR === ad.fS(fo)) return !0
			}
		return !1
	}, this.fV = function(player, fR) {
		for (var g9 = ah.g9[player], fk = g9.length, fm = ad.fm, aC = 0; aC < fk; aC++)
			for (var fZ = g9[aC], fn = 3; 0 <= fn; fn--) {
				var fo = fZ + fm[fn];
				if (ad.fp(fo) && fR === ad.fS(fo)) return !0
			}
		return !1
	}
}

function dI() {
	this.h = new Array(4), this.gE = new Uint16Array(2), this.gF = new Uint16Array(2), this.gG = new Int32Array(2), this.gH = new Uint32Array(2), this.gI = new Uint32Array(2), this.gJ = new Uint8Array(4), this.gK = new Uint8Array(4), this.fl =
		new Uint32Array(4), this.gL = new Uint32Array(5), this.fg = new Uint32Array(8), this.gM = new Uint32Array(8), this.gN = new Uint16Array(16), this.gO = new Uint16Array(512), this.gP = new Uint16Array(512), this.gQ = new Uint16Array(512), this
		.gR = new Uint16Array(0), this.dv = function() {
			var fk = bV.fv * bV.fw;
			this.gR.length !== fk && (this.gR = new Uint16Array(fk))
		}, this.gS = function(h, gT) {
			return h[0] = gT, h
		}, this.gU = function(h, gT, gV) {
			return h[0] = gT, h[1] = gV, h
		}, this.gW = function(h, gT, gV, gX) {
			return h[0] = gT, h[1] = gV, h[2] = gX, h
		}, this.gY = function(h, gT, gV, gX, gZ) {
			return h[0] = gT, h[1] = gV, h[2] = gX, h[3] = gZ, h
		}
}

function gn() {
	gg = 0, gh = 2048, gi = new Uint32Array(4 * gh), gj = 0, gk = new Uint32Array(gh), gl = new Uint8Array(bV.fv * bV.fw)
}

function go(player) {
	gb = player, gm = !1, gp(), gq();
	for (var aC = ae.gr(gb) - 1; 0 <= aC; aC--) ga = aC, gs();
	gm && gt()
}

function gt() {
	bw.gu(), bw.gv()
}

function gs() {
	gf = ae.gw(gb, ga), gc = ae.gx(gb, ga), gd = ae.gy(gb, ga), gz(), (0 !== gg && (h1(), h2()) ? h3 : h0)()
}

function h2() {
	if (!((ge = bO.gB(gc, gg)) > aE.h4)) {
		if (!gd) return !1;
		var h5 = gg * (1 + aE.h4);
		gc += bD.h6.h7(gb, h5 - gc), ge = bO.gB(gc, gg)
	}
	return !0
}

function h1() {
	for (var aC = gg - 1; 0 <= aC; aC--) gl[bO.gB(gi[aC], 4)] = 0
}

function h0() {
	1 === ae.gr(gb) && aG.h8(gb);
	var el = bD.h6.h9(gb, gc);
	bg.hA(gb, gc - el, 12), ae.hB(gb, ga)
}

function gp() {
	for (var player = gb, hC = ah.hC, fk = Math.min(hC[player].length, gh), hD = 0, hE = gk, aC = fk - 1; 0 <= aC; aC--) hE[hD++] = hC[player][aC];
	gj = hD
}

function gq() {
	for (var aC = ah.hC[gb].length - 1; 0 <= aC; aC--) ad.ff(ah.hC[gb][aC]) && ad.hF(ah.hC[gb][aC], gb);
	ah.hC[gb] = []
}

function gz() {
	gg = 0, (gf === aE.fh ? hG : hH)()
}

function hH() {
	for (var hI, hJ, aC, fm = ad.fm, fn = 3; 0 <= fn; fn--)
		for (aC = gj - 1; 0 <= aC; aC--) hI = gk[aC] + fm[fn], hJ = bO.gB(hI, 4), 0 === gl[hJ] && ad.hK(hI) && ad.fc(hI) === gf && (gl[hJ] = 1, gi[gg++] = hI)
}

function hG() {
	for (var hI, hJ, aC, fm = ad.fm, fn = 3; 0 <= fn; fn--)
		for (aC = gj - 1; 0 <= aC; aC--) hI = gk[aC] + fm[fn], hJ = bO.gB(hI, 4), 0 === gl[hJ] && ad.fb(hI) && (gl[hJ] = 1, gi[gg++] = hI)
}

function h3() {
	hL() ? (hM(), gf !== aE.fh && hN()) : h0()
}

function hN() {
	bw.hO(), bw.hP(ah.hQ[gf]), bw.hP(ah.hR[gf]), bV.fP(bV.fQ) && bw.hP(ah.g9[gf]), bw.hS(ah.hC[gf]), bw.hT(ah.hR[gf]), bw.hT(ah.g9[gf]), bw.hU(), bw.hV()
}

function hM() {
	gm = !0, ae.hW(gb, ga, gc), ae.hX(gb, ga), ah.hY[gb] += gg, bw.hZ(), ha()
}

function hL() {
	return (gf === aE.fh ? hb : hc)()
}

function hc() {
	var hd = gg * aE.h4,
		he = hf(),
		hg = hh(),
		he = hd + 2 * he + hg,
		hj = ge * gg;
	return he < hj ? (gc -= he, bg.hA(gb, he, 13), hk(he - hd, hg), !0) : gd && 0 === hg ? (gc -= hj, hj += bD.h6.h7(gb, he - hj + 1), bg.hA(gb, hj, 13), hk(hj - hd, 0), !0) : (gc -= hj, bg.hA(gb, hj, 13), hk(hj - hd, hg), !1)
}

function hk(hj, hg) {
	if (0 < hg) {
		if (hj <= hg) return bg.hA(gf, hj, 13), void ae.hl(gf, gb, hg - hj);
		ae.hl(gf, gb, 0), hj -= hg
	}
	hj = bO.gB(hj, 2), hj = Math.min(ah.hm[gf], hj), bg.hA(gf, hj, 13), ah.hm[gf] -= hj
}

function hh() {
	return ae.hn(gf, gb)
}

function hf() {
	return bO.gB(gg * ah.hm[gf], 1 + bO.gB(10 * ah.hY[gf], 16))
}

function hb() {
	var ho = gg * aE.h4;
	return gc -= ho, bg.hA(gb, ho, 13), !0
}

function ha() {
	for (var aC = gg - 1; 0 <= aC; aC--) ah.hC[gb].push(gi[aC]), ah.hQ[gb].push(gi[aC]), ad.hF(gi[aC], gb)
}

function dN() {
	var hp = 0,
		hq = 0;
	this.hr = function(fr, ft) {
		hp = fr, hq = ft
	}, this.hs = function(code) {
		var i0, i2, fW;
		aE.ht || aE.hu || aN.hv || (bD.h6.hw(0) || bD.h6.hw(1)) && bD.h6.hx(aE.fU) && (aS.hy(hp, hq) ? aS.hz = !1 : aQ.hy(hp, hq) || (i0 = bP.i1(hp), i2 = bP.i3(hq), fW = bP.g7(i0, i2), bP.i4(i0, i2) && (0 === code ? function(fW) {
			var i8, fO, fZ;
			aE.i9 ? -1 !== (i8 = bv.iA(fW)) && bB.iB.iC(fW) : (fO = bP.fa(fW), ad.fp(fO) ? (i8 = an.fL.fN(fO)) && (fZ = bP.fa(i8), fZ = ad.fb(fZ) ? aE.fh : ad.fc(fZ), bB.iB.iE(aS.iF(), i8, fZ)) : (i8 = bv.iG(fW)) < 0 || (fO = bP
				.fa(i8), ad.fb(fO) ? bw.iH(aE.fU) ? bB.iB.iI(aS.iF(), aE.fh) : ae.gr(aE.fU) && b2.iJ(aE.fh, aS.iF()) : (fZ = ad.fc(fO), bw.fd(fZ, aE.fU) && (bw.iK(aE.fU, fZ) ? bB.iB.iI(aS.iF(), fZ) : ae.gr(aE.fU) && b2.iJ(
					fZ, aS.iF())))))
		}(fW) : 1 === code && function(fW) {
			bQ.iL.iM(aE.fU, fW) && bB.iB.iN(aS.iF(), bR.gM[7])
		}(fW))))
	}, this.iO = function() {
		if (!(aE.ht || aE.hu || aN.hv) && bD.h6.hw(1)) {
			var hI = aE.fU;
			if (bD.h6.hx(hI)) {
				var fk = ae.gr(hI);
				if (fk < 1) ! function() {
					var hI = aE.fU;
					if (bw.iH(hI)) bB.iB.iI(aS.iF(), aE.fh);
					else
						for (var fm = ad.fm, hQ = ah.hQ, fk = hQ[hI].length, iY = Math.floor(Math.random() * fk), aC = 0; aC < fk; aC++)
							for (var iZ = 3; 0 <= iZ; iZ--) {
								var ia = hQ[hI][(aC + iY) % fk] + fm[iZ];
								if (ad.hK(ia)) {
									ia = ad.fc(ia);
									if (ia !== hI && (!aE.ic || bw.fd(hI, ia))) return bB.iB.iI(aS.iF(), ia)
								}
							}
				}();
				else {
					for (var iQ = 0, iR = ae.gx(hI, 0), aC = 1; aC < fk; aC++) {
						var iS = ae.gx(hI, aC);
						iS < iR && (iR = iS, iQ = aC)
					}
					bB.iB.iI(aS.iF(), ae.gw(hI, iQ))
				}
			}
		}
	}, this.iT = function() {
		if (!(aE.ht || aE.hu || aN.hv) && bD.h6.hx(aE.fU) && bD.h6.hw(1)) return ax.iU ? ax.iV(aE.fU) ? void bB.iB.iW(1) : void 0 : void(ax.iX(aE.fU) && bB.iB.iT())
	}
}

function ie(ig, size, ih, ii, font) {
	var aC, il = .2,
		canvas = document.createElement("canvas"),
		im = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = ig, canvas.height = ig, im.font = size + font, im.textAlign = "center", im.textBaseline = "middle", im.fillStyle = "red", aC = 0; aC < ih.length; aC++) im.fillText(ih[aC], .5 * ig, .5 * ig);
	return -1 < (canvas = function(ij) {
		var aC, eS, fn = ij.data;
		for (aC = fn.length - 4; 0 <= aC; aC -= 4)
			if (eS = fn[aC], ii <= eS) return Math.floor(aC / (4 * ig));
		return -1
	}(im.getImageData(0, 0, ig, ig))) && (il = (canvas - .5 * ig + .1 * size) / size), Math.max(il, 0)
}

function dG() {
	this.ip = new Int16Array(4), this.iq = new Int16Array(4), this.ir = null, this.dv = function() {
		var aC;
		for (this.ip[0] = -bV.fv, this.ip[1] = 1, this.ip[2] = bV.fv, this.ip[3] = -1, this.ir = new Int16Array([-bV.fv, 1 - bV.fv, 1, bV.fv + 1, bV.fv, bV.fv - 1, -1, -bV.fv - 1]), aC = 0; aC < 4; aC++) this.iq[aC] = 4 * this.ip[aC]
	}, this.is = function() {
		return bO.it(Math.floor(.15 * (1 + .25 * a1.a2.iu()) * i.iv / iw), 4, 128)
	}, this.ix = function(fO, id) {
		for (var iy = this.iq, aC = 0; aC < 4; aC++) {
			var fZ = fO + iy[aC];
			if (ad.iz(fZ) && ad.fS(fZ) === id) return !0
		}
		return !1
	}, this.j0 = function(player, fO) {
		return !ad.fb(fO) && player === ad.fc(fO)
	}, this.g2 = function(i0, i2, fW) {
		return (i0 -= this.fs(fW)) * i0 + (i2 -= this.fu(fW)) * i2
	}, this.j1 = function(j2, j3, j4) {
		j2 = this.j6(j2) - this.j7(j4), j3 = this.j9(j3) - this.jA(j4);
		return Math.sqrt(j2 * j2 + j3 * j3)
	}, this.jB = function(jC, jD) {
		var j5 = this.fs(jC) - this.fs(jD),
			jC = this.fu(jC) - this.fu(jD);
		return ~~Math.sqrt(j5 * j5 + jC * jC + .5)
	}, this.jE = function(jC, jD) {
		var j5 = this.fs(jC) - this.fs(jD),
			jC = this.fu(jC) - this.fu(jD);
		return j5 * j5 + jC * jC
	}, this.jF = function(jG, jH, jI, jJ) {
		return (jG -= jI) * jG + (jH -= jJ) * jH
	}, this.jK = function(hI, jL) {
		return bO.gB(jL * ah.hm[hI], 1e3)
	}, this.j6 = function(j2) {
		return 16 * (j2 + jM) / iw
	}, this.j9 = function(j3) {
		return 16 * (j3 + jN) / iw
	}, this.jO = function(fn) {
		return 16 * fn / iw
	}, this.i1 = function(j2) {
		return Math.floor((j2 + jM) / iw)
	}, this.i3 = function(j3) {
		return Math.floor((j3 + jN) / iw)
	}, this.i4 = function(i0, i2) {
		return 1 <= i0 && 1 <= i2 && i0 < bV.fv - 1 && i2 < bV.fw - 1
	}, this.fs = function(fW) {
		return fW % bV.fv
	}, this.fu = function(fW) {
		return bO.gB(fW, bV.fv)
	}, this.g7 = function(i0, i2) {
		return i2 * bV.fv + i0
	}, this.jP = function(i0, i2) {
		return 4 * this.g7(i0, i2)
	}, this.jQ = function(fW) {
		return this.g6(this.fs(fW), this.fu(fW))
	}, this.g6 = function(i0, i2) {
		return 0 < i0 && i0 < bV.fv - 1 && 0 < i2 && i2 < bV.fw - 1
	}, this.fa = function(fW) {
		return fW << 2
	}, this.fY = function(fO) {
		return fO >> 2
	}, this.jR = function(fW) {
		return bV.fv * this.fu(fW) * 256 + (this.fs(fW) << 4)
	}, this.jS = function(fW) {
		return this.jR(fW) + 8 + (bV.fv << 7)
	}, this.jT = function(j4) {
		return bV.fv * (this.jA(j4) >> 4) + (this.j7(j4) >> 4)
	}, this.jU = function(j4) {
		var j4 = this.jT(j4),
			shift = bQ.jV.shift,
			j = bQ.jV.jW;
		return (this.fs(j4) >> shift) + j * (this.fu(j4) >> shift)
	}, this.j7 = function(j4) {
		return j4 % (bV.fv << 4)
	}, this.jA = function(j4) {
		return bO.gB(j4, bV.fv << 4)
	}, this.jX = function(fW, iZ) {
		return fW + this.ip[iZ]
	}, this.jY = function(fO, iZ) {
		return fO + this.iq[iZ]
	}, this.jZ = function(jC, jD) {
		var j5 = this.fs(jD) - this.fs(jC),
			jD = this.fu(jD) - this.fu(jC);
		return Math.abs(j5) >= Math.abs(jD) ? 1 + 2 * (j5 < 0) : 2 * (0 < jD)
	}, this.ja = function(player) {
		return this.g7(ah.jb[player] + ah.jc[player] >> 1, ah.jd[player] + ah.je[player] >> 1)
	}, this.jf = function(player) {
		return this.g7(az.jg(ah.jb[player], ah.jc[player]), az.jg(ah.jd[player], ah.je[player]))
	}
}

function cu() {
	this.jh = new ji, this.jj = new jk, this.jl = new jm, this.performance = new jn, this.jo = new jp, this.jq = new jr, this.js = new jt, this.ju = new jv, this.jw = new jx, this.dv = function() {
		this.jh.dv(), this.jl.dv(), this.performance.dv(), this.jo.dv(), this.jq.dv()
	}, this.ep = function() {
		this.performance.ep(), this.jh.ep(), this.jl.jy()
	}
}

function jp() {
	var jz, k1 = new Uint16Array(8);

	function k9(size, player) {
		for (var aC = ah.hC[player].length - 1; size <= aC; aC--) ad.kF(ah.hC[player][aC], player)
	}
	this.dv = function() {
		jz = 0
	}, this.k2 = function(player, k3) {
		return bR.fg[1] = ah.hC[player].length, bR.fg[0] === aE.fh ? ap.jo.k4(player) : this.k5(player, bR.fg[0]), (0 !== bR.fg[1] || 0 !== ah.hC[player].length) && !(!k3 && bR.fg[1] === ah.hC[player].length || (bR.fg[0] === aE.fh ? ah.k6[
			player]++ : ah.k7[player]++, 0))
	}, this.k8 = function(player) {
		k9(bR.fg[1], player), ae.et(player, bR.gH[0], bR.fg[0]), aG.kA(player, !1)
	}, this.kB = function(player, kC, fk, iR) {
		var kD = bO.gB(12 * ah.hm[player], 1024);
		iR -= iR >= bO.gB(ah.hm[player], 2) ? kD : 0, k9(fk, player), ae.et(player, iR, kC), ah.hm[player] -= iR + kD, aG.kA(player, !1)
	}, this.k5 = function(player, kC) {
		for (var iZ, fm = ad.fm, aC = ah.hQ[player].length - 1; 0 <= aC; aC--)
			if (ad.kE(ah.hQ[player][aC]))
				for (iZ = 3; 0 <= iZ; iZ--)
					if (ad.hK(ah.hQ[player][aC] + fm[iZ]) && ad.fc(ah.hQ[player][aC] + fm[iZ]) === kC) {
						ah.hC[player].push(ah.hQ[player][aC]);
						break
					}
	}, this.k4 = function(player) {
		for (var fm = ad.fm, aC = ah.hQ[player].length - 1; 0 <= aC; aC--)
			if (ad.kE(ah.hQ[player][aC]))
				for (var iZ = 3; 0 <= iZ; iZ--)
					if (ad.fb(ah.hQ[player][aC] + fm[iZ])) {
						ah.hC[player].push(ah.hQ[player][aC]);
						break
					}
	}, this.kG = function(player, kH) {
		var aC, g3, iZ, ib, fk = ah.hQ[player].length,
			kI = 256 <= fk ? 12 : 32 <= fk ? 6 : 1,
			kJ = fk - 1 - az.kK(kI),
			fm = ad.fm;
		jz = 0;
		loop: for (aC = kJ; 0 <= aC; aC -= kI)
			for (iZ = 3; 0 <= iZ; iZ--)
				if ((ib = ad.fb(ah.hQ[player][aC] + fm[iZ]) ? aE.fh : ad.fc(ah.hQ[player][aC] + fm[iZ])) === aE.fh || ad.hK(ah.hQ[player][aC] + fm[iZ]) && ib !== player && (kH || bw.fd(player, ib))) {
					for (g3 = jz - 1; 0 <= g3; g3--)
						if (k1[g3] === ib) continue loop;
					if (k1[jz] = ib, 8 <= ++jz) return !0
				}
		return 0 < jz
	}, this.kL = function(player, kH) {
		var aC, iZ, ib, fm = ad.fm;
		for (jz = 0, aC = ah.hQ[player].length - 1; 0 <= aC; aC--)
			for (iZ = 3; 0 <= iZ; iZ--)
				if ((ib = ad.fb(ah.hQ[player][aC] + fm[iZ]) ? aE.fh : ad.fc(ah.hQ[player][aC] + fm[iZ])) === aE.fh || ad.hK(ah.hQ[player][aC] + fm[iZ]) && ib !== player && (kH || bw.fd(player, ib))) return k1[jz++] = ib, !0;
		return !1
	}, this.kM = function() {
		for (var g4, aC = jz - 1; 0 <= aC; aC--)
			if (k1[aC] === aE.fh) {
				for (jz--, g4 = aC; g4 < jz; g4++) k1[g4] = k1[g4 + 1];
				return !0
			} return !1
	}, this.kN = function(player) {
		for (var g4, aC = jz - 1; 0 <= aC; aC--)
			if (ae.kO(player, k1[aC]))
				for (jz--, g4 = aC; g4 < jz; g4++) k1[g4] = k1[g4 + 1];
		return 0 === jz
	}, this.kP = function() {
		for (var aC = jz - 1; 0 <= aC; aC--)
			if (bD.h6.kQ(k1[aC])) return !0;
		return !1
	}, this.kR = function() {
		for (var aC = jz - 1; 0 <= aC; aC--) bD.h6.kQ(k1[aC]) || (k1[aC] = k1[--jz]);
		return 0 < jz
	}, this.kS = function(player) {
		for (var g4, kT = k1[0], kU = ah.hm[kT] + ae.hn(kT, player), aC = jz - 1; 1 <= aC; aC--)(g4 = ah.hm[k1[aC]] + ae.hn(k1[aC], player)) < kU && (kT = k1[aC], kU = g4);
		return kT
	}, this.kV = function(player) {
		var k, kW = k1[0];
		if (1 !== jz)
			for (var kX = bO.gB(ah.jc[player] + ah.jb[player], 2), kY = bO.gB(ah.je[player] + ah.jd[player], 2), g0 = kZ(kX - bO.gB(ah.jc[kW] + ah.jb[kW], 2)) + kZ(kY - bO.gB(ah.je[kW] + ah.jd[kW], 2)), aC = jz - 1; 1 <= aC; aC--)(k = kZ(kX - bO
				.gB(ah.jc[k1[aC]] + ah.jb[k1[aC]], 2)) + kZ(kY - bO.gB(ah.je[k1[aC]] + ah.jd[k1[aC]], 2))) < g0 && (g0 = k, kW = k1[aC]);
		return kW
	}, this.ka = function() {
		for (var kb = k1, kc = kb[0], hm = ah.hm, kd = hm[kc], aC = jz - 1; 1 <= aC; aC--) {
			var hI = kb[aC],
				g4 = hm[hI];
			kd < g4 && (kc = hI, kd = g4)
		}
		return kc
	}, this.ke = function() {
		return k1[az.kK(jz)]
	}
}

function jr() {
	function ku(player, kC, kk) {
		3 <= kk && 2142 < bi.l0() && (kC === aE.fh || ah.hm[kC] < bO.gB(ah.hm[player], 20)) && aF.kp(player, 20)
	}

	function kx(player, iR, kC, kk) {
		3 <= kk && kk < 6 && bO.gB(ah.hm[player], 8) > ah.hm[kC] && (iR = Math.max(bO.gB(11 * ah.hm[kC], 5), bO.gB(ah.hm[player], 10)));
		kk = ah.hC[player].length;
		ap.jo.k5(player, kC), ap.jo.kB(player, kC, kk, iR)
	}

	function kt(player, iR) {
		var kC = aE.fh,
			fk = ah.hC[player].length;
		ap.jo.k4(player), ah.hC[player].length !== fk && ap.jo.kB(player, kC, fk, iR)
	}
	this.kf = new Uint8Array(aE.fh), this.dv = function() {
		this.kf.fill(0)
	}, this.kg = function(player, iR) {
		var ki, kk, kl, km;
		ae.kh(player) && (ki = af.kj(player), 3 <= (kk = aF.iR[player]) && kk < 6 && (iR = Math.max(ah.hm[player] - ki, iR)), kl = ah.hR[player].length, km = ah.hQ[player].length, 30 * ah.hY[player] > aE.kn && ko[player] < 10 && 100 * km <= kl &&
			aF.kp(player, 10), aE.ic ? function(player, iR, kk, ki) {
				var kC;
				if (ap.jo.kG(player, !1) || ap.jo.kL(player, !1)) {
					if (!ap.jo.kN(player))
						if (ap.jo.kM()) kt(player, iR), ku(player, aE.fh, kk);
						else {
							if (az.kv(aF.kw[kk])) kC = ap.jo.kS(player);
							else {
								if (ap.jo.kP() && az.kv(aF.ky[kk]) && ap.jo.kR(), 6 === kk) return kx(player, iR, ap.jo.ke(), kk);
								kC = ap.jo.kV(player)
							}
							kx(player, iR, kC, kk), ku(player, kC, kk)
						}
				} else bQ.kr.ep(player) || ap.js.ep(player) || ! function(player, iR, kk, ki) {
					var kf = ap.jq.kf;
					kf[player] = 0;
					var l1 = bj.fi[player];
					if (0 !== l1) {
						var l2 = ah.hm[player],
							hY = ah.hY;
						if (player < aE.l3 && (iR = l2), !(l2 < hY[player] || 5 === kk && l2 < ki || 4 === kk && l2 < bO.gB(ki, 2))) {
							bk.l4(l1);
							for (var fk = bR.gF[0], gO = bR.gO, aC = az.kK(fk), g4 = 0; g4 < fk; g4++) {
								var eu = gO[(g4 + aC) % fk];
								if (kf[eu]) return bB.l5.l6(player, eu, iR)
							}
							var l7 = bQ.z.l7;
							for (g4 = 0; g4 < fk; g4++)
								if (eu = gO[(g4 + aC) % fk], l7[eu] && eu !== player) return bB.l5.l6(player, eu, iR)
						}
					}
				}(player, iR, kk, ki)
			}(player, iR, kk, ki) : (!km || kl && (kl < km && !az.kK(10) || 100 * km <= kl && az.kK(3) || !az.kK(8))) && bQ.kr.ep(player) || function(player, iR, kk) {
				ap.jo.kG(player, !0) || ap.jo.kL(player, !0) ? ap.jo.kN(player) || (ap.jo.kM() ? kt(player, iR) : az.kv(aF.kw[kk]) ? kx(player, iR, ap.jo.kS(player), kk) : 5 === kk ? kx(player, iR, ap.jo.ka(), kk) : (ap.jo.kP() && az.kv(aF
					.ky[kk]) && ap.jo.kR(), kx(player, iR, 6 === kk ? ap.jo.ke() : ap.jo.kV(player), kk))) : ap.js.ep(player)
			}(player, iR, kk))
	}
}

function cE() {
	var l8 = new Uint8Array(aE.fh),
		l9 = new Uint16Array(aE.fh),
		lA = new Uint16Array(aE.fh),
		lB = new Uint8Array(aE.fh),
		lC = (this.iR = new Uint8Array(aE.fh), new Uint16Array(aE.fh)),
		lD = new Uint16Array(aE.fh);

	function lS(aC) {
		l8[aC] = 1 + bO.gB(lC[aC] * az.random(), 10 * az.value(100))
	}
	this.lE = null, this.ky = [97, 94, 70, 40, 20, 0, 100], this.lF = [500, 450, 400, 300, 80, 50, 100], this.kw = [0, 0, 5, 25, 50, 100, 0], this.lG = [60, 74, 112, 200, 256, 512, 512], this.lH = [1, 2, 3, 4, 6, 8, 1], this.lI = [500, 450, 400, 300,
		80, 50, 100
	], this.lJ = [100, 150, 250, 400, 600, 1e3, 100], this.dw = function() {
		this.lE = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dv = function() {
		l8.fill(0), l9.fill(0), lA.fill(0), lB.fill(0), this.iR.fill(0), lC.fill(0), lD.fill(0);
		var lK = aE.l3;
		if (9 === aE.lL) this.lM();
		else if (__fx.customLobby.isActive())
			for (aC = aE.lP - 1; 0 <= aC; aC--) this.iR[aC + lK] = __fx.customLobby.gameInfo.difficulty;
		else if (aE.lN)
			if (3 === aE.data.botDifficultyType)
				for (aC = aE.lP - 1; 0 <= aC; aC--) {
					var ia = aC + lK;
					this.iR[ia] = aE.data.botDifficultyData[ia]
				} else if (2 === aE.data.botDifficultyType)
					for (aC = aE.lP - 1; 0 <= aC; aC--) this.iR[ia = aC + lK] = aE.data.botDifficultyTeam[bj.lQ[bj.fi[ia]]];
				else if (1 === aE.data.botDifficultyType) {
			var lR = this.lE.length;
			for (aC = aE.lP - 1; 0 <= aC; aC--) this.iR[aC + lK] = aC % lR
		} else
			for (lR = aE.data.botDifficultyValue, aC = aE.lP - 1; 0 <= aC; aC--) this.iR[aC + lK] = lR;
		else
			for (var lO = 8 === aE.lL ? 1 : 0, aC = aE.lP - 1; 0 <= aC; aC--) this.iR[aC + lK] = lO;
		for (aC = 0; aC < lK; aC++) this.iR[aC] = 6;
		var fk = aE.fh;
		for (aC = 0; aC < fk; aC++) this.iR[aC] <= 2 ? (lB[aC] = 5, lC[aC] = lD[aC] = 1040, 0 === this.iR[aC] ? (l9[aC] = 980, lA[aC] = 980) : 1 === this.iR[aC] ? (l9[aC] = 980, lA[aC] = 920, lC[aC] = lD[aC] = 1100) : (l9[aC] = 825, lA[aC] =
			750)) : this.iR[aC] <= 4 ? (lB[aC] = 1 + az.kK(20), 3 === this.iR[aC] ? (l9[aC] = lA[aC] = 500, lC[aC] = lD[aC] = 1e3) : (lD[aC] = 250 + az.kK(1501), lC[aC] = 500 + az.kK(501), l9[aC] = 300 + az.kK(201), lA[aC] = 100 + az.kK(
			201))) : this.iR[aC] <= 5 ? (lC[aC] = 1e3, lD[aC] = 1e3, lB[aC] = 35 + az.kK(16), l9[aC] = 300 + az.kK(201), lA[aC] = 50 + az.kK(101)) : (lC[aC] = lD[aC] = 800, lB[aC] = 5, l9[aC] = 10, lA[aC] = 250), lS(aC)
	}, this.lM = function() {
		for (var fO = b0.lT, lK = aE.l3, aC = fO - 1; 0 <= aC; aC--) this.iR[aC + lK] = 0;
		for (var g4 = 0; g4 < 6; g4++) {
			for (aC = fO + b0.lU[g4] - 1; fO <= aC; aC--) this.iR[aC + lK] = g4;
			fO += b0.lU[g4]
		}
	}, this.kp = function(hI, value) {
		l8[hI] = Math.min(value, l8[hI])
	}, this.ep = function(hI) {
		0 == --l8[hI] && ! function(hI) {
			(function(hI) {
				lC[hI] !== lD[hI] && (lC[hI] += lC[hI] < lD[hI] ? 3 : -3);
				l9[hI] !== lA[hI] && (l9[hI] += l9[hI] < lA[hI] ? lB[hI] : -lB[hI], l9[hI] = (Math.abs(l9[hI] - lA[hI]) <= lB[hI] ? lA : l9)[hI]);
				l8[hI] = bO.gB(lC[hI], 10)
			})(hI), ap.jq.kg(hI, bO.gB(l9[hI] * ah.hm[hI], 1e3))
		}(hI)
	}, this.lX = function(hI, hD) {
		lC[hI] = lD[hI] = hD
	}
}

function jm() {
	var lY = new Uint16Array(aE.fh);

	function ln(player, ll) {
		for (var fk = bR.gF[0], gN = bR.gN, lz = -1, m0 = aE.fh, aC = 0; aC < fk; aC++) {
			var g0, hI = gN[aC];
			bw.fd(player, hI) && (g0 = bP.jE(ll, bP.ja(hI)), -1 === lz || g0 < lz) && (lz = g0, m0 = hI)
		}
		return m0
	}

	function lp(lm, ll) {
		if (lm === aE.fh) return 0;
		var hR = ah.hR[lm],
			ly = hR.length;
		if (0 === ly) return 0;
		for (var fk = Math.min(ly, 10), m0 = 0, lz = bP.jE(hR[m0] >> 2, ll), aC = 0; aC < fk; aC++) {
			var ia = az.kK(ly),
				g0 = bP.jE(hR[ia] >> 2, ll);
			g0 < lz && (lz = g0, m0 = ia)
		}
		return hR[m0] >> 2
	}

	function lu(player, ll, kC, m2) {
		var m3;
		(m2 === aE.fh || (m3 = bP.ja(kC), m2 = bP.ja(m2), bP.jE(ll, m3) < bP.jE(ll, m2))) && (lY[player] = kC)
	}
	this.dv = function() {
		lY.fill(aE.fh)
	}, this.jy = function() {
		if (bi.l0() % 109 == 9 && !(am.lZ < 20) && aE.ic && !(bk.la() < bO.gB(8 * aE.kn, 10))) {
			var lb = bk.lc();
			if (bj.lQ[lb]) {
				bk.ld(lb);
				var fk = bR.gF[0];
				if (0 !== fk)
					for (var h = bR.gO, le = am.le, lZ = am.lZ, lf = lY, ia = az.kK(fk), aC = 0; aC < lZ; aC++) {
						var iD = le[aC],
							lg = h[ia];
						bD.h6.lh(iD, lg) && 512 === lf[iD] && (lf[iD] = lg, ia = (ia + 1) % fk)
					}
			}
		}
	}, this.ep = function(player) {
		var ll, lo, lm, li = function(player) {
			var kC = lY[player];
			if (kC !== aE.fh) {
				if (bD.h6.m1(kC) && ah.hR[kC]) return kC;
				lY[player] = aE.fh
			}
			return aE.fh
		}(player);
		return function(player) {
			for (var lx = am.le, ly = am.lZ, fk = Math.min(ly, ly < 17 && 5 === az.kK(20) ? 1 : 16), hJ = az.kK(ly), gN = bR.gN, hR = ah.hR, hD = 0, aC = 0; aC < fk; aC++) {
				var hI = lx[(aC + hJ) % ly];
				hI !== player && hR[hI].length && (gN[hD++] = hI)
			}
			bR.gF[0] = hD
		}(player), 0 !== bR.gF[0] && (0 < (lo = lp(lm = ln(player, ll = bP.jf(player)), ll)) && bQ.lq.lr(player, bQ.ls.lt(lo, ll)) ? (lu(player, ll, lm, li), !0) : 0 < (lm = function(player, ll) {
			for (var fk = bR.gF[0], gN = bR.gN, lf = lY, hJ = 0, aC = 0; aC < fk; aC++) {
				var hI = gN[aC],
					hI = lf[hI];
				hI !== aE.fh && bD.h6.m1(hI) && player !== hI && bw.fd(player, hI) && (gN[hJ++] = hI)
			}
			return 0 !== (bR.gF[0] = hJ) ? lp(ln(player, ll), ll) : 0
		}(player, ll)) && bQ.lq.lr(player, bQ.ls.lt(lm, ll)) ? (lu(player, ll, ad.fc(lm << 2), li), !0) : !!(0 < (lo = lp(li, ll)) && bQ.lq.lr(player, bQ.ls.lt(lo, ll))))
	}
}

function jt() {
	function m7(player) {
		for (var g9 = ah.g9[player], fk = g9.length, gA = Math.max(bO.gB(fk, 12), 1), fm = ad.fm, eS = az.kK(fk), aC = 0; aC < fk; aC += gA)
			for (var fZ = g9[(aC + eS) % fk], fn = 3; 0 <= fn; fn--) {
				var fo = fZ + fm[fn];
				if (ad.fp(fo)) return {
					fO: fo,
					id: ad.fS(fo),
					hI: player
				}
			}
		return null
	}

	function mC(player, mE) {
		var iR = bD.h6.mF(player, aF.lI[aF.iR[player]]);
		ah.hC[player].push(mE.fO), ae.et(player, iR, mE.hI), aG.kA(player, !0)
	}
	this.ep = function(player) {
		return !!bV.fP(bV.fQ) && !!aE.data.passableMountains && 0 !== ah.g9[player].length && function(player) {
			var m6 = m7(player);
			if (null === m6) return !1;
			! function(player) {
				for (var le = am.le, lZ = am.lZ, fk = Math.min(lZ, 12), hJ = az.kK(lZ), gN = bR.gN, g9 = ah.g9, hD = 0, aC = 0; aC < fk; aC++) {
					var hI = le[(aC + hJ) % lZ];
					hI !== player && g9[hI].length && bw.fd(player, hI) && (gN[hD++] = hI)
				}
				bR.gF[0] = hD
			}(player);
			var m9 = function(fR) {
				for (var fk = bR.gF[0], gN = bR.gN, aC = 0; aC < fk; aC++) {
					var mE = m7(gN[aC]);
					if (null !== mE && mE.id === fR) return mE
				}
				return null
			}(m6.id);
			return null !== m9 ? (mC(player, m9), !0) : function(player, fR) {
				var fk = ap.jh.mD;
				if (0 !== fk)
					for (var fO = ap.jh.buffer[az.kK(fk)] << 2, fm = ad.fm, fn = az.kK(4);;) {
						if (fO += fm[fn], ad.fp(fO)) {
							if (ad.fS(fO) === fR) return mC(player, {
								fO: fO,
								hI: aE.fh
							}), !0;
							break
						}
						if (!ad.fb(fO)) break
					}
				return !1
			}(player, m6.id)
		}(player)
	}
}

function jk() {
	this.ep = function(player) {
		return bQ.lq.lr(player, function(player) {
			var fk = ap.jh.mD;
			if (0 === fk) return -1;
			for (var ly = Math.min(fk, ap.performance.mH ? fk : 10), buffer = ap.jh.buffer, kJ = bO.gB(az.random() * fk, az.value(100)), e = kJ + ly, mI = az.jg(ah.jb[player], ah.jc[player]), mJ = az.jg(ah.jd[player], ah.je[player]),
					m0 = -1, g0 = bP.jF(0, 0, bV.fv, bV.fw), aC = kJ; aC < e; aC++) {
				var hJ = aC % fk,
					mK = bP.g2(mI, mJ, buffer[hJ]);
				mK < g0 && (g0 = mK, m0 = hJ)
			}
			return -1 !== m0 ? function(fW, mI, mJ) {
				var i0 = bP.fs(fW),
					i2 = bP.fu(fW),
					j5 = mI - i0,
					j8 = mJ - i2;
				Math.abs(j5) >= Math.abs(j8) ? (j8 = 0, j5 = Math.sign(j5)) : (j5 = 0, j8 = Math.sign(j8));
				j5 === j8 && (j5 = 1);
				for (;;) {
					if (i0 += j5, i2 += j8, !bP.g6(i0, i2)) break;
					if (fW = bP.g7(i0, i2), ad.iz(bP.fa(fW))) return fW
				}
				return -1
			}(buffer[m0], mI, mJ) : -1
		}(player))
	}
}

function jv() {
	this.ep = function(player) {
		var mM = function(player) {
			for (var mP = bQ.mP.mR(), fk = mP.length, ly = Math.min(fk, 32), ia = az.kK(fk), aC = 0; aC < ly; aC++) {
				var mM = (aC + ia) % fk,
					mO = mP[mM],
					jC = mO[0],
					jD = mO[mO.length - 1];
				if (bQ.ls.mS(player, jC) && bQ.ls.mT(player, jD)) return mM;
				if (bQ.ls.mS(player, jD) && bQ.ls.mT(player, jC)) return 0 <= (mM = bQ.mP.mU(jD, jC)) ? mM : bQ.mP.mV() ? -1 : bQ.mP.mW(bQ.mP.mX(mO))
			}
			return -1
		}(player);
		return -1 !== mM && (mM = bQ.mP.get(mM), !bQ.ls.mQ(player, mM)) && (bR.h[0] = mM, !0)
	}
}

function jn() {
	this.mH = 0, this.dv = function() {
		this.mH = 0
	}, this.ep = function() {
		if (!this.mH && bi.l0() % 30 == 7 && bD.h6.ma(90) && (ap.performance.mH = 1)) {
			if (aE.ic) {
				var lb = bk.lc();
				if (bj.lQ[lb]) {
					bk.l4(lb);
					var h = bR.gO,
						fk = bR.gF[0];
					if (0 !== fk)
						for (var md = Math.min(100 + 10 * (fk - 1), 400), aC = 0; aC < fk; aC++) aF.lX(h[aC], md)
				}
			}
			aF.lX(me[0], 100)
		}
	}
}

function ji() {
	var mf = 0,
		mg = 0,
		mh = 300,
		mi = 300,
		mj = 0;
	this.mD = 0, this.buffer = new Uint32Array(512), this.dv = function() {
		mg = mf = 0, this.mD = 0, mj = 0
	}, this.ep = function() {
		if (function() {
				var fk = ap.jh.mD;
				if (0 === fk) return 1;
				var buffer = ap.jh.buffer;
				if (bi.l0() % 35 == 6) {
					for (var aC = fk - 1; 0 <= aC; aC--) ad.fb(buffer[aC] << 2) || (fk--, buffer[aC] = buffer[fk]);
					ap.jh.mD = fk
				}
				return fk < buffer.length
			}())
			if (mh <= mf) {
				var mn = ap.jh.mD;
				if (mn) {
					if (bi.l0() % 350 != 1) return;
					if (mj !== mn) return void(mj = mn);
					if (!bD.h6.kQ(me[0])) return
				} else if (bi.l0() % 12 != 8) return;
				bD.h6.mo() || ap.jh.dv()
			} else {
				var aC, j = bV.fv,
					mp = j - 2,
					mn = mp * (bV.fw - 2),
					mq = mh,
					buffer = ap.jh.buffer,
					ly = ap.jh.mD,
					mr = buffer.length,
					hJ = Math.min(mg + mq * ((1 + 19 * ap.performance.mH) * mi), mn);
				for (aC = mg; aC < hJ; aC += mq) {
					var fO = 4 * (aC % mp + (bO.gB(aC, mp) + 1) * j + 1);
					if (ad.fb(fO) && (buffer[ly] = fO >> 2, ++ly === mr)) {
						aC += mq;
						break
					}
				}(mg = aC) >= mn && (mg = ++mf), ap.jh.mD = ly
			}
	}
}

function jx() {
	this.ep = function() {
		if (bi.l0() % 51 == 45)
			for (var fk = bQ.z.mt, mu = bQ.z.mu, mv = bQ.z.mv, mw = bQ.z.mw, mx = bQ.z.mx, lJ = aF.lJ, iR = aF.iR, aC = 0; aC < fk; aC++) {
				var mO, player, n1, my = mu[aC];
				my % 64 == 6 || (mO = mv[aC], (player = bQ.ls.mz(mO[mO.length - 1])) < 0) || !bD.h6.lh(player, mx[aC] >> 3) || az.kK(1e3) >= lJ[iR[player]] || ! function(n5, mO) {
					for (var fk = mO.length - 1, n6 = bQ.z.n7[n5], g0 = 0, aC = n6 + 1; aC < fk; aC++) g0 += bP.jB(mO[aC], mO[aC + 1]);
					return (g0 += bP.jB(bP.jT(bQ.z.n8[n5]), mO[n6 + 1])) <= 60
				}(aC, mO) || (n1 = mw[aC], 64 <= my && bQ.n2.n3(player, n1)) || function(player, mO, n1, n5, my) {
					bQ.n9.nA(player) && bD.h6.nB(player, aF.lF[aF.iR[player]], 32, 0) && (bQ.z.mu[n5] = 64 + my % 64, bQ.n2.et(n1, bQ.z.nC), bR.h[0] = bQ.mP.mX(mO), bR.gM[1] = 6, bD.h6.nD(player), n5 = aF.lF[aF.iR[player]], bQ.z.nE(player,
						n5))
				}(player, mO, n1, aC, my)
			}
	}
}

function nF() {
	bU.nG.nH(), aO.ep(), ag.ep(), aX.nI(), b1.z.ep()
}

function nJ() {
	b2.ep(), aH.ep(), ao.ep(), af.ep(), b5.ep(), aG.ep(), ap.ep(), bQ.z.ep(), am.nK(), aW.ep(), b0.ep(), bY.ep(), ag.ep(), ag.nL(), aX.ep(), bS.ep(), aV.ep(), aQ.ep(), b9.nM(), aO.ep(), b6.ep(), aS.ep(), ax.ep(), bg.ep(), bk.ep(), b1.z.ep(), b1.nN
		.ep(), u.ep(), bX.ed.ep(), bC.ep(), bi.ep()
}

function nO() {
	aI.ep(), aY.ep(), aR.ep(), aw.ep(), bF.ep(), b8.ep(), b9.ep(), ay.nP()
}

function nQ() {
	aW.nR(!1), aQ.nR(), aX.nR(!1), aV.nR(), aS.nR(), ax.nR(), ag.nR(!1), bk.nS()
}

function nT() {
	ag.nR(!1) && (bi.e2 = !0), b1.z.ep()
}

function cF() {
	var nU, nV, nW;

	function nY(na) {
		for (var aC = nU - 1; 0 <= aC; aC--) 0 === nW[nV[aC]] && ah.hY[nV[aC]] >= na && go(nV[aC])
	}

	function nX(player) {
		var el;
		64 === nW[player] ? nW[player] = 6 : (el = ah.hY[player], nW[player] = el < 1e3 ? 3 : el < 1e4 ? 2 : el < 6e4 ? 1 : 0)
	}
	this.dv = function() {
		nU = 0, nV = new Uint16Array(aE.fh), nW = new Uint8Array(aE.fh)
	}, this.ep = function() {
		for (var aC = nU - 1; 0 <= aC; aC--) 64 === nW[nV[aC]] ? nX(nV[aC]) : 0 == nW[nV[aC]]-- && (nX(nV[aC]), go(nV[aC]));
		16e4 <= ah.hY[me[0]] && (nY(16e4), 3e5 <= ah.hY[me[0]]) && nY(3e5), bD.h6.m1(aE.fU) && (bg.nb[7] = Math.max(ah.hY[aE.fU], bg.nb[7]))
	}, this.h8 = function(player) {
		for (var g3, aC = nU - 1; 0 <= aC; aC--)
			if (player === nV[aC]) {
				for (nU--, g3 = aC; g3 < nU; g3++) nV[g3] = nV[g3 + 1];
				return
			}
	}, this.kA = function(player, nc) {
		for (var aC = nU - 1; 0 <= aC; aC--)
			if (player === nV[aC]) return;
		nV[nU++] = player, nW[player] = nc ? 2 : 64
	}
}

function cG() {
	var size, kr;
	this.dv = function() {
		size = aE.lP, kr = new Uint16Array(aE.fh);
		for (var l3 = aE.l3, aC = aE.lP - 1; 0 <= aC; aC--) kr[aC] = l3 + aC
	}, this.ep = function() {
		for (var aC = size - 1; 0 <= aC; aC--)
			if (0 === ah.nf[kr[aC]]) {
				g3 = void 0;
				var g3 = aC;
				size--, kr[g3] = kr[size]
			} else aF.ep(kr[aC])
	}, this.ne = function(hI) {
		kr[size++] = hI
	}
}

function cH() {
	var nh, ni, nj, nk, nl, nm, nn, no, np, nq, nr, ns, nt, nu = !1,
		nv = !1;

	function nw(nx) {
		ns = bi.ek, nj = nk = ni = 0, nl = (nt = 33) / nx, nh = 1 / (nx / nt / 4), nm = (i.j / 2 + jM) / iw, nn = (i.k / 2 + jN) / iw, no = iw
	}

	function o4(aC) {
		var o6; - 1 !== aC && (aC = bP.jT(bQ.z.n8[aC]), o6 = bP.fs(aC) - 15, aC = bP.fu(aC) - 15, aI.o0(o6, aC, 29 + o6, 29 + aC))
	}

	function oH(eX) {
		Math.abs(Math.log(nr / no)) < .125 && (nr = eX * no)
	}

	function oG(o6, o7, oJ, oK) {
		np = (o6 + oJ + 1) / 2, nq = (o7 + oK + 1) / 2;
		oJ = i.j / (oJ - o6 + 1), o6 = i.k / (oK - o7 + 1);
		nr = .9 * (oJ < o6 ? oJ : o6)
	}
	this.ny = function() {
		return nu
	}, this.nz = function() {
		nw(1), this.o0(0, 0, bV.fv - 1, bV.fw - 1), aE.i9 || aE.ht || aE.hu || this.o1(aE.fU, 3e3, !0, .3)
	}, this.o2 = function(player, o3) {
		o4(bQ.ls.o5(player, o3))
	}, this.o1 = function(player, nx, o8, zoom) {
		aE.o9 || nu && !o8 && nv || (0 === ah.hY[player] ? o4(bQ.ls.oA(player)) : (aT.oB = !1, nv = o8, nw(nx), function(player) {
			np = (ah.jb[player] + ah.jc[player] + 1) / 2, nq = (ah.jd[player] + ah.je[player] + 1) / 2
		}(player), function(zoom, player) {
			var j5 = ah.jc[player] - ah.jb[player] + 1,
				player = ah.je[player] - ah.jd[player] + 1,
				g3 = i.j / j5,
				g4 = i.k / player,
				g3 = (nr = g3 < g4 ? g3 : g4, 0 !== zoom ? zoom : j5 < 20 && player < 20 ? .5 : .9);
			nr *= g3, oH(7 / 8)
		}(zoom, player), nu = !0, at.oE()))
	}, this.oF = function(nx) {
		aE.ht || aE.o9 || (aT.oB = !1, nv = !1, nw(nx), oG(0, 0, bV.fv - 1, bV.fw - 1), oH(7 / 8), nu = !0, at.oE())
	}, this.o0 = function(o6, o7, oJ, oK) {
		nu = !1, oG(o6, o7, oJ, oK), iw = nr, aT.oL(np, i.j / 2), aT.oM(nq, i.k / 2), bd.oN(), bi.e2 = !0
	}, this.oO = function() {
		return !(nu && nv || (nu = !1))
	}, this.ep = function() {
		var oR, oS, fn, oV;
		nu && (ni < .5 ? nk < nl && (nk += nl * nh, nj = ni) : 1 - nj < ni && (nk = (nk -= nl * nh) < nl * nh ? nl * nh : nk), ns = ns >= bi.ek ? bi.ek - 1 : ns, fn = bi.ek - ns, ni = 1e3 < fn || 1 < (ni += nk * fn / nt) ? 1 : ni, ns = bi.ek,
			fn = iw, oR = jM, oS = jN, fn = (iw = no * Math.pow(nr / no, ni)) / fn, oV = 1 - (no * Math.pow(nr / no, 1 - ni) - no) / (nr - no), aT.oL(nm + oV * (np - nm), i.j / 2), aT.oM(nn + oV * (nq - nn), i.k / 2), ag.zoom(fn, (oR * fn -
				jM) / (1 - fn), (oS * fn - jN) / (1 - fn)), bd.oN(), 1 <= ni && (nu = !1, be.oW = !0), bi.e2 = !0)
	}
}

function dp() {
	this.oX = -1, this.pow = -1;
	var oY = null,
		oZ = null,
		oa = null,
		ob = null,
		od = [],
		oe = 0,
		og = null,
		oh = null,
		oi = null,
		oj = null,
		ok = this,
		ol = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255,
		om = 4294967295;

	function ot(ou, ov, className) {
		ou = document.createElement(ou);
		return className && (ou.className = className), ov && ov.appendChild(ou), ou
	}

	function ow(ew, ov, action) {
		ov = ot("button", ov);
		return ov.type = "button", ov.textContent = ew, ov.addEventListener("click", action), ov
	}

	function ox(ov) {
		ov = ot("canvas", ov);
		return ov.width = 128, ov.height = 128, ov
	}

	function oq(canvas, data) {
		canvas = canvas.getContext("2d");
		oh || (oh = canvas.createImageData(128, 128), oi = new Uint32Array(oh.data.buffer)),
			function(data, oz) {
				for (var fk = data.length, p0 = 0, position = 0, color = 0; position < 16384;) {
					var eT = p0 >> 3;
					if (fk <= eT) break;
					for (var eT = data[eT] << 8 | (1 + eT < fk ? data[1 + eT] : 0), oO = Math.min(16384, position + (eT >> 10 - (7 & p0) & 63)), p2 = color ? ol : om, aC = position; aC < oO; aC++) oz[aC] = p2;
					position = oO, p0 += 6, color ^= 1
				}
				for (aC = position; aC < 16384; aC++) oz[aC] = om
			}(data, oi), canvas.putImageData(oh, 0, 0)
	}

	function or() {
		if (oY) {
			ob.disabled = !oe;
			for (var aC = 0; aC < od.length; aC++) od[aC].setAttribute("aria-pressed", String(Boolean(oe & 1 << aC)))
		}
	}

	function p5(e) {
		var p7, p6;
		"Escape" === e.key ? (e.preventDefault(), ok.close()) : "Tab" === e.key && oY && (p7 = (p6 = oY.querySelectorAll("button:not(:disabled)"))[0], p6 = p6[p6.length - 1], e.shiftKey && document.activeElement === p7 ? (e.preventDefault(), p6
			.focus()) : e.shiftKey || document.activeElement !== p6 || (e.preventDefault(), p7.focus()))
	}

	function pE() {
		ok.close(), b1.er.pG(0, 0, ok.oX, ok.pow)
	}

	function pF() {
		var pH, oo;
		oe && (pH = oe, oo = og, ok.close(), b1.er.pG(pH, oo, ok.oX, ok.pow))
	}
	this.show = function(on, oo, oX, pow) {
		this.oX = oX, this.pow = pow, og = oo, oY || function() {
			oj = document.activeElement, (oY = ot("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), oY.setAttribute("aria-modal", "true"), oY.setAttribute("aria-label", L(14)), ot("style", oY).textContent =
				".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
			var pA = ot("div", oY, "captcha-reference-row");
			ot("span", pA, "captcha-reference-label").textContent = L(15), (oa = ox(pA)).className = "captcha-reference", oa.setAttribute("aria-label", L(16)), oZ = ot("div", oY, "captcha-grid");
			for (var aC = 0; aC < 16; aC++) od.push(function(eT) {
				var e = ow("", oZ, function() {
					oe ^= 1 << eT, or()
				});
				return e.className = "captcha-tile", e.setAttribute("aria-label", L(13, [eT + 1])), e.setAttribute("aria-pressed", "false"), ox(e).setAttribute("aria-hidden", "true"), e
			}(aC));
			var pA = ot("div", oY, "captcha-actions"),
				pD = ow(L(17), pA, function() {
					ok.close()
				});
			ow(L(18), pA, pE), ob = ow(L(19), pA, pF), oY.addEventListener("keydown", p5), ok.resize(), or(), pD.focus()
		}(), oq(oa, on[0]);
		for (var aC = 0; aC < 16; aC++) oq(od[aC].firstChild, on[aC + 1]);
		oe = 0, or()
	}, this.resize = function() {
		var size;
		oY && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), oY.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (oY) {
			for (var os = oY.querySelectorAll("canvas"), aC = 0; aC < os.length; aC++) os[aC].width = 0, os[aC].height = 0;
			oY.remove(), od = [], oi = oh = og = ob = oa = oZ = oY = null, oe = 0, oj && document.body.contains(oj) && oj.focus(), oj = null
		}
	}
}

function ds() {
	this.nG = new pI, this.pJ = new pK, this.pL = new pM, this.dv = function(pN, pO) {
		this.pJ.dv(pN, pO), this.nG.dv(pO), this.pL.dv()
	}
}

function pM() {
	var pP = 0,
		pQ = [],
		pR = [],
		pS = "";

	function pc(pd, name) {
		var pi = bq.pj;
		return pi && pd === pi.pd || 0 <= pQ.indexOf(pd) || (pR.length && (pi = function(pd, name) {
			pd = bq.pl.pm(pd), pd = pd ? pd.username : name;
			return pd ? bD.pZ.pn(pd) : null
		}(pd, name)) ? 0 <= pR.indexOf(pi) : void 0)
	}
	this.dv = function() {
		pP = 0, pQ = [], pR = [], pS = ""
	}, this.pT = function() {
		return pP
	}, this.pU = function(pV) {
		pP = 1 - pP, pS = "", pQ = [], pR = [], this.pW(pV), c0.nG.reset()
	}, this.pW = function(pV) {
		if (pP && bq.fH) {
			var h = bq.pX.pY(pV),
				pV = h.join(" ");
			if (pV !== pS) {
				pS = pV, pQ = [], pR = [];
				for (var aC = 0; aC < h.length; aC++) bD.pZ.startsWith(h[aC], "@[") ? pR.push(h[aC].substring(2, h[aC].length - 1).toUpperCase()) : pQ.push(bJ.fB.fC(h[aC].substring(1), 5));
				c0.nG.reset()
			}
		}
	}, this.pa = function(pb) {
		if (!pP || !pQ.length && !pR.length || 4 < pb.id) return 1;
		if (pc(pb.pd, pb.pe)) return 1;
		if (void 0 !== pb.target && pc(pb.target, pb.pf)) return 1;
		if (0 === pb.id)
			for (var h = bq.pX.pY(pb.s), aC = 0; aC < h.length; aC++)
				if (bD.pZ.startsWith(h[aC], "@[")) {
					var pg = h[aC].substring(2, h[aC].length - 1).toUpperCase();
					if (0 <= pR.indexOf(pg) || pg === (pg = void 0, (pg = bq.pj) ? bD.pZ.pn(pg.username) : null)) return 1
				} else if (pc(bJ.fB.fC(h[aC].substring(1), 5), null)) return 1;
		return 0
	}
}

function pI() {
	var po = null,
		pp = 1048575;

	function pz() {
		var hD = po.childNodes.length - bq.z.q2;
		if (!(hD <= 0)) {
			for (var aC = 0; aC < hD; aC++) bq.pr.ps(po.firstChild), po.removeChild(po.firstChild);
			c0.pJ.q3()
		}
	}

	function pw(pv, q4) {
		q4 && (q4.q5 = 1, pv.appendChild(bq.pr.transform(q4)))
	}
	this.dv = function(pO) {
		po = pO, pp = 1048575
	}, this.reset = function(pq) {
		if (pp = 1048575, bq.pr)
			for (var e = po.firstChild; e; e = e.nextSibling) bq.pr.ps(e);
		po.textContent = "", pq || this.nS()
	}, this.nS = function() {
		var pt = bq.z.pt,
			pu = bq.z.pu,
			fk = pt.length,
			kJ = 1048575 === pp ? 0 : fk - (pu - pp + 1048575) % 1048575;
		if (pp = pu, !(fk <= (kJ = Math.max(kJ, 0)))) {
			for (var pv = document.createDocumentFragment(), aC = kJ; aC < fk; aC++) c0.pL.pa(pt[aC]) && pw(pv, bq.ls.px(pt[aC], bq.ls.py(pt[aC])));
			po.appendChild(pv), pz(), c0.pJ.q0()
		}
	}, this.q1 = function(s) {
		var pv = document.createDocumentFragment();
		pw(pv, s), po.appendChild(pv), pz(), c0.pJ.q0()
	}
}

function pK() {
	var q6 = null,
		po = null,
		q7 = 1,
		q8 = null,
		q9 = 0;

	function qB() {
		q8 && q8.parentNode === po || (q8 = po.firstChild, q9 = 0), q8 && (q6.scrollTop = q8.offsetTop + q9)
	}
	this.dv = function(pN, pO) {
		po = pO, q7 = 1, q8 = null, q9 = 0, (q6 = pN).addEventListener("scroll", function() {
			if (q6.scrollTop < q6.scrollHeight - q6.clientHeight - 2) {
				q7 = 0;
				for (var qC = po.childNodes, qD = q6.scrollTop, aC = 0; aC < qC.length; aC++)
					if (qC[aC].offsetTop + qC[aC].offsetHeight > qD) return void(q8 = qC[aC], q9 = qD - qC[aC].offsetTop);
				q8 = null
			} else q7 = 1
		})
	}, this.q3 = function() {
		q7 || qB()
	}, this.q0 = function(c3) {
		q7 ? q6.scrollTop = q6.scrollHeight : c3 && qB()
	}
}

function c9() {
	var eu = bD.color;
	this.qE = eu.qF(0, 0, 0), this.qG = eu.qH(0, 0, 0, .7), this.qI = eu.qH(0, 0, 0, .5), this.qJ = eu.qH(0, 0, 0, .85), this.qK = eu.qH(0, 0, 0, .75), this.qL = eu.qH(0, 0, 0, .6), this.qM = eu.qH(0, 0, 0, .35), this.qN = eu.qF(255, 255, 255), this
		.qO = eu.qH(255, 255, 255, .3), this.qP = eu.qH(255, 255, 255, .6), this.qQ = eu.qH(255, 255, 255, .4), this.qR = eu.qH(255, 255, 255, .25), this.qS = eu.qH(255, 255, 255, .85), this.qT = eu.qH(255, 255, 255, .75), this.qU = eu.qH(255, 255,
			255, .15), this.qV = eu.qH(255, 255, 255, .11), this.qW = eu.qF(128, 128, 128), this.qX = eu.qH(64, 64, 64, .75), this.qY = eu.qH(88, 88, 88, .83), this.qZ = eu.qH(60, 60, 60, .85), this.qa = eu.qH(80, 60, 60, .85), this.qb = eu.qF(170,
			170, 170), this.qc = eu.qF(200, 235, 245), this.qd = eu.qF(30, 255, 30), this.qe = eu.qF(0, 200, 0), this.qf = eu.qF(128, 255, 128), this.qg = eu.qH(10, 65, 10, .75), this.qh = eu.qH(0, 255, 0, .6), this.qi = eu.qH(0, 255, 0, .5), this
		.qj = eu.qH(0, 200, 0, .5), this.qk = eu.qH(0, 100, 0, .75), this.ql = eu.qH(0, 60, 0, .8), this.qm = eu.qH(0, 255, 0, .3), this.qn = eu.qH(0, 180, 0, .6), this.qo = eu.qH(0, 120, 0, .85), this.qp = eu.qF(0, 120, 0), this.qq = eu.qH(0, 70, 0,
			.85), this.qr = eu.qF(190, 230, 190), this.qs = eu.qF(0, 255, 0), this.qt = eu.qH(10, 120, 10, .9), this.qu = eu.qF(200, 255, 200), this.qv = eu.qF(255, 120, 120), this.qw = eu.qF(255, 160, 160), this.qx = eu.qF(255, 70, 70), this.qy = eu
		.qF(230, 0, 0), this.qz = eu.qH(220, 0, 0, .6), this.r0 = eu.qH(255, 100, 100, .8), this.r1 = eu.qH(100, 0, 0, .85), this.r2 = eu.qH(60, 0, 0, .85), this.r3 = eu.qH(200, 0, 0, .6), this.r4 = eu.qH(120, 0, 0, .85), this.r5 = eu.qF(255, 70,
		10), this.r6 = eu.qF(230, 190, 190), this.r7 = eu.qF(255, 0, 0), this.r8 = eu.qF(255, 0, 255), this.r9 = eu.qH(60, 0, 60, .85), this.rA = eu.qH(0, 60, 60, .85), this.rB = eu.qH(10, 60, 60, .9), this.rC = eu.qH(0, 96, 96, .75), this.rD = eu
		.qF(0, 255, 255), this.rE = eu.qF(160, 160, 255), this.rF = eu.qH(0, 40, 90, .75), this.rG = eu.qH(0, 0, 255, .6), this.rH = eu.qF(200, 200, 255), this.rI = eu.qH(50, 50, 255, .83), this.rJ = eu.qH(20, 90, 150, .75), this.rK = eu.qH(10, 10,
			120, .75), this.rL = eu.qH(10, 60, 160, .9), this.rM = eu.qF(200, 220, 255), this.rN = eu.qH(0, 120, 255, .35), this.rO = eu.qF(70, 150, 255), this.rP = eu.qF(255, 120, 100), this.rQ = eu.qH(255, 255, 0, .5), this.rR = eu.qH(255, 255,
			150, .2), this.rS = eu.qF(255, 255, 0), this.rT = eu.qF(255, 255, 200), this.rU = eu.qH(200, 200, 0, .6), this.rV = eu.qH(140, 120, 0, .75), this.rW = eu.qH(180, 160, 40, .75), this.rX = eu.qH(70, 50, 20, .85), this.rY = eu.qH(30, 30, 0,
			.85), this.rZ = eu.qH(60, 60, 0, .85), this.ra = eu.qF(255, 255, 100), this.rb = eu.qF(255, 255, 140), this.rc = eu.qH(255, 140, 0, .75), this.rd = eu.qH(70, 40, 0, .85), this.re = eu.qF(255, 150, 0), this.rf = eu.qH(255, 200, 80, .85),
		this.rg = eu.qH(0, 0, 0, 0), this.rh = eu.qH(255, 255, 255, 0), this.ri = eu.qH(254, 254, 254, 0)
}

function d9() {
	this.iB = new rj, this.h6 = new rk, this.rl = new rm, this.rn = new ro, this.l5 = new rp
}

function rj() {
	this.rq = 1, this.iC = function(fW) {
		aE.hu || (aE.lN ? bB.rl.iC(aE.fU, fW) : b1.rr.rs(fW))
	}, this.iI = function(jL, kC) {
		aE.hu || (this.rq && (this.rq = 0, bm.rt.q0(182, jL)), aE.lN ? bB.rl.iI(aE.fU, jL, kC) : b1.rr.ru(jL, kC))
	}, this.rv = function(jL, rw) {
		aE.hu || (aE.lN ? bB.rl.rx(aE.fU, jL, rw) : b1.rr.ry(jL, rw))
	}, this.iN = function(jL, fW) {
		aE.hu || (fW = (fW << 3) + bR.gM[6], aE.lN ? bB.rl.iN(aE.fU, jL, fW) : bQ.n9.nA(aE.fU) && b1.rr.s0(jL, fW))
	}, this.s1 = function(jL) {
		var o3;
		aE.hu || (849 === jL && (jL = 850), o3 = bR.gM[3], aE.lN ? bB.rl.s1(aE.fU, jL, o3) : bQ.s2.s3(aE.fU, o3) && b1.rr.s4(jL, o3))
	}, this.s5 = function(o3) {
		aE.hu || bQ.s6.s7(aE.fU, o3, 0) && (aE.lN ? bB.rl.s5(aE.fU, o3) : b1.rr.s4(849, o3))
	}, this.s8 = function(jL, o3) {
		var player;
		aE.hu || (player = aE.fU, bQ.s6.s7(player, o3, (jL = 849 === jL ? 850 : jL) + 1) && (aE.lN ? bB.rl.s1(aE.fU, jL, o3) : b1.rr.s4(jL, o3)))
	}, this.s9 = function(o3, rz) {
		aE.hu || (aE.lN ? bB.rl.s9(aE.fU, o3, rz) : b1.rr.sA(o3, rz))
	}, this.sB = function(kC) {
		aE.hu || (aE.lN ? bB.rl.sB(aE.fU, kC) : b1.rr.sC(kC))
	}, this.sD = function(sE) {
		aE.hu || (aE.lN ? bB.rl.sF(aE.fU, sE) : b1.rr.sG(sE))
	}, this.iW = function(sH) {
		aE.hu || (aE.lN ? bB.rl.iW(aE.fU, sH) : b1.rr.sI(sH))
	}, this.sJ = function() {
		aE.hu || (aE.lN ? bB.rl.sJ(aE.fU) : b1.rr.sK())
	}, this.iT = function() {
		aE.hu || (aE.lN ? bB.rl.iT(aE.fU) : b1.rr.sC(513))
	}, this.iE = function(jL, fW, kC) {
		aE.hu || (aE.lN ? bB.rl.iE(aE.fU, jL, fW, kC) : b1.rr.sL(jL, fW, kC))
	}
}

function rp() {
	this.l6 = function(player, rw, iR) {
		bD.h6.sM(player, iR, rw) && (af.rv(player, rw), !bD.h6.kQ(rw)) && ap.jq.kf[rw] && ap.jq.kf[rw]--
	}, this.sN = function(player, rw, iR) {
		bD.h6.sO(iR, rw) ? ao.et(rw, bR.gH[0]) && (bu.sP(player, rw, bR.gH[0], 1), bD.h6.h9(rw, bR.gH[0]), bg.sQ(player, rw), ag.sR(rw, bR.gH[0])) : bg.hA(player, iR, 12)
	}
}

function rk() {
	this.sS = function(sE, player) {
		aE.hu || (aO.sD(aE.fU, player, sE), b1.rr.sT(sE, player))
	}, this.sU = function(player) {
		aE.hu || (aO.sV(player, 0), b1.rr.sW(player))
	}, this.sX = function(sY, player) {
		aE.hu || (aO.sZ(sY, player), b1.rr.sa(sY, player))
	}, this.sb = function() {
		aE.lN || aE.ht || aE.hu || b1.sc.sb()
	}
}

function ro() {
	this.ep = function(aD) {
		var id, gT, oO;
		for (bK.dv(aD), bK.eT += 2, oO = 8 * bK.size; bK.eT + 8 <= oO;) id = bK.sd(4), gT = bK.sd(9), 0 === id ? this.se(id, gT, bK.sd(22)) : 1 === id ? this.se(id, gT, bK.sd(10), bK.sd(10)) : 2 === id ? this.se(id, gT, bK.sd(10), bK.sd(9)) :
			3 === id ? this.se(id, gT, bK.sd(10), bK.sd(27)) : 4 === id ? this.se(id, gT, bK.sd(10), bK.sd(16)) : 5 === id || 6 === id ? this.se(id, gT, bK.sd(10)) : 7 === id ? this.se(id, gT, bK.sd(1)) : 10 === id ? this.se(id, gT, bK.sd(20), bK
				.sd(22)) : 11 === id ? this.se(id, gT, bK.sd(16), bK.sd(27)) : this.se(id, gT)
	}, this.sf = [], this.sg = function() {
		for (var si = 0, sj = 0, sk = 0, sl = 0, sm = 0, sn = 0, aC = 0; aC < 512; aC++) si += ah.nf[aC], sj += ah.hY[aC], sk += ah.hm[aC], sl += bQ.z.l7[aC];
		sm += bQ.z.mt, sn += am.lZ, this.sf.push(sk % 1073741824 * 4 + (si + sj + sl + sm + sn) % 4)
	}, this.se = function(id, gT, gV, gX) {
		0 === id ? bB.rl.iC(gT, gV) : 1 === id ? bB.rl.iI(gT, gV, gX) : 2 === id ? bB.rl.rx(gT, gV, gX) : 3 === id ? bB.rl.iN(gT, gV, gX) : 4 === id ? bB.rl.s1(gT, gV, gX) : 5 === id ? bB.rl.sB(gT, gV) : 6 === id ? bB.rl.sF(gT, gV) : 7 === id ?
			bB.rl.iW(gT, gV) : 8 === id ? bB.rl.sJ(gT) : 9 === id ? bB.rl.so(gT) : 10 === id ? bB.rl.iE(gT, gV >> 10, gX, gV % 1024) : 11 === id && bB.rl.s9(gT, gV, gX)
	}
}

function rm() {
	this.iC = function(player, fW) {
		bD.h6.hw(0) && bD.h6.hx(player) && bP.jQ(fW) && (bC.sp.sq(0, player, fW), aE.sr.et(player, fW))
	}, this.iI = function(player, jL, kC) {
		bD.h6.hw(1) && bD.h6.hx(player) && bD.h6.ss(player, kC) && bD.h6.nB(player, jL, 12, 0) && bD.h6.st(player, kC) && ((kC = ae.kO(player, bR.fg[0])) || ae.kh(player)) && (ah.su[player]++, bC.sp.sq(1, player, jL, bR.fg[0]), ap.jo.k2(player,
			kC)) && (bD.h6.nD(player), bg.sv(player, jL), ap.jo.k8(player))
	}, this.rx = function(player, jL, rw) {
		bD.h6.hw(1) && bD.h6.hx(player) && aE.ic && bD.h6.ss(player, rw) && bD.h6.sw(player, rw) && bD.h6.sM(player, bD.h6.jK(player, jL), rw) && ao.et(rw, bR.gH[0]) && (bC.sp.sq(2, player, jL, rw), af.rv(player, rw))
	}, this.iN = function(player, jL, rz) {
		bR.gM[1] = 7 & rz;
		var fW = rz >> 3;
		bD.h6.hw(1) && bD.h6.hx(player) && bP.jQ(fW) && bQ.n9.nA(player) && bQ.n9.sx(fW) && bD.h6.nB(player, jL, 32, 0) && bQ.lq.sy(player, fW, 1, bR.gM[1] < 4) && (bg.sz(player), bC.sp.sq(3, player, jL, rz), bD.h6.nD(player), bo.t0.iN(player),
			bQ.z.nE(player, jL))
	}, this.s1 = function(player, jL, o3) {
		849 === jL ? this.s5(player, o3) : bD.h6.hw(1) && bD.h6.hx(player) && bQ.s6.t1(player, o3, jL) && bC.sp.sq(4, player, jL, o3)
	}, this.s5 = function(player, o3) {
		bD.h6.hw(1) && bD.h6.hx(player) && bQ.t2.ep(player, o3) && bC.sp.sq(4, player, 849, o3)
	}, this.s9 = function(player, o3, rz) {
		var n5;
		bD.h6.hw(1) && bD.h6.hx(player) && bQ.t3.has(player) && !((n5 = bQ.s6.e3(player, o3, rz)) < 0) && bQ.s6.t4(player, n5, rz) && (bQ.t3.t5(player), n5 = ah.hm[player], n5 = bO.gB(bQ.t8.t9 * n5, 1e4), ah.hm[player] -= n5, bC.sp.sq(11, player,
			o3, rz))
	}, this.sB = function(player, kC) {
		513 === kC ? this.iT(player) : bD.h6.hw(1) && bD.h6.hx(player) && (kC = Math.min(kC, aE.fh), ae.kO(player, kC)) && (bC.sp.sq(5, player, kC), ae.tA(player, kC))
	}, this.sF = function(player, sE) {
		(bD.h6.hw(1) || bD.h6.hw(2)) && bD.h6.hx(player) && (sE = bO.it(sE, 0, 1023), bC.sp.sq(6, player, sE), ag.tB(player, 0, sE))
	}, this.iW = function(player, sH) {
		ax.iV(player) && (bC.sp.sq(7, player, sH), ax.tC(player, sH))
	}, this.sJ = function(player) {
		(bD.h6.hw(0) || bD.h6.hw(1)) && bD.h6.hx(player) && aN.tD(player) && (bC.sp.sq(8, player), bT.sJ(player))
	}, this.so = function(player) {
		bC.sp.sq(9, player), bT.so(player)
	}, this.iT = function(player) {
		ax.iX(player) && (bC.sp.sq(5, player, 513), ax.iT(player))
	}, this.iE = function(player, jL, fW, kC) {
		bD.h6.hw(1) && bD.h6.hx(player) && bD.h6.ss(player, kC) && bD.h6.st(player, kC) && bP.jQ(fW) && an.fL.fe(player, fW) && (ae.kO(player, bR.fg[0]) || ae.kh(player)) && (bC.sp.sq(10, player, (jL << 10) + bR.fg[0], fW), kC = bD.h6.mF(player,
			jL), ah.hC[player].push(bR.fl[0]), ae.et(player, kC, bR.fg[0]), aG.kA(player, !0), bg.tE(player))
	}
}

function tF() {
	var tH;
	this.tG = [], this.tH = document.createElement("div"), this.tI = function(pV, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pV, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.tH.appendChild(
			title), title
	}, this.tJ = function(pV, marginBottom) {
		var tK = document.createElement("p");
		return tK.textContent = pV, tK.style.fontSize = "0.75em", tK.style.lineHeight = "1.2em", tK.style.marginBottom = marginBottom || "0", this.tH.appendChild(tK), tK
	}, this.tL = function(pV) {
		var tM = document.createElement("p");
		return tM.textContent = pV, tM.style.fontSize = "1em", tM.style.marginBottom = "0", tM.style.whiteSpace = "pre-wrap", tM.style.overflowWrap = "break-word", this.tH.appendChild(tM), tM
	}, this.tN = function(tO, fontSize) {
		var tH = document.createElement("div");
		return tH.innerHTML = tO, tH.style.fontSize = fontSize || "1em", tH.style.lineHeight = "1.2em", this.tH.appendChild(tH), tH
	}, this.tP = function(tQ) {
		for (var tR = tQ.tR, fk = tR.length, aC = 0; aC < fk; aC++) this.tH.appendChild(tR[aC])
	}, this.tS = function(q4) {
		return this.tG.push(q4), this.tH.appendChild(q4.e), q4
	}, this.resize = function() {
		for (var fk = this.tG.length, aC = 0; aC < fk; aC++) this.tG[aC].resize && this.tG[aC].resize()
	}, (tH = this.tH).style.position = "absolute", tH.style.height = "auto", tH.style.padding = "0.5em"
}

function tT(tU, tV) {
	var tH = document.createElement("div");

	function td() {
		var aC, qD, k, hJ, fn, tZ = i.l * tH.offsetWidth,
			te = new Float64Array(function(tZ) {
				var j = .25 * bD.ta.tb(.6) * i.iv;
				return Math.max(Math.floor(tZ / j), 1)
			}(tZ)),
			tf = bf.tf,
			tg = (tZ - (te.length + 1) * bf.gap) / (te.length * i.l);
		for (te.fill(tf), aC = 0; aC < tV.length; aC++) qD = (fn = tV[aC].tH).style, k = bD.th.min(te), hJ = te.indexOf(k), qD.top = bD.ta.ti(k), qD.left = bD.ta.ti(tf + hJ * (tg + tf)), qD.width = bD.ta.ti(tg), bD.ta.tj(fn, 5), te[hJ] += fn
			.offsetHeight + 3 * tf;
		tH.style.height = bD.ta.ti(bD.th.max(te) - 2 * tf)
	}
	this.tW = tH, this.tX = tV, this.resize = function() {
		var aC;
		for (aC = 0; aC < tV.length; aC++) tV[aC].resize();
		td(), td()
	}, tH.style.width = "100%", tH.style.maxWidth = "100%", tU.style.lineHeight = "1.5em", tU.style.overflowX = "hidden", tU.style.overflowY = "auto";
	for (var aC = 0; aC < tV.length; aC++) tH.appendChild(tV[aC].tH);
	tU.appendChild(tH)
}

function x(tk, tl, tm, tn, tp) {
	var self, tq = document.createElement("button"),
		tt = (this.button = tq, this.tr = tl, this.ts = tm, 0);

	function ty() {
		var u4;
		bM.u3() || (tt = 1, u4 = bD.color.u5(tm), !1 !== tn && 0 < u4[0] && u4[0] < 255 && u4[0] === u4[1] && u4[0] === u4[2]) || (128 < u4[0] && 128 < u4[1] && 128 < u4[2] ? tq.style.backgroundColor = bD.color.u6(tm, -50) : tq.style
			.backgroundColor = bD.color.u6(tm, u4[3] && u4[3] < 120 ? 150 : 50))
	}

	function tx() {
		if (tn) {
			var u4 = bD.color.u5(tm);
			if (u4[0] === u4[1] && u4[0] === u4[2]) return
		}
		tl && ((u4 = tl(this)) ? 2 === u4 && ty() : u8(this))
	}

	function u0() {
		tt = 0, this.style.backgroundColor = tm
	}

	function tz() {
		u8(this)
	}

	function u8(fn) {
		tt = 0, fn.style.backgroundColor = tm, fn.blur()
	}
	this.tw = function(u1) {
		u1 = 1.1 - Math.min(.01 * tk.length, .6) + .2 * u1;
		tq.style.fontSize = u1.toFixed(1) + "em"
	}, this.tv = function(eu) {
		eu ? 1 === eu ? eu = bE.qZ : 2 === eu && (tn = 1, eu = bE.qZ) : (tn = 0, eu = bE.qJ), this.ts = tm = eu, tq.style.backgroundColor = eu, tt && ty()
	}, self = this, tq.innerHTML = tk, tq.style.color = tp ? bE.rS : bE.qN, tq.style.userSelect = "none", tq.style.outline = "none", tq.style.overflowWrap = "break-word", self.tv(tm), tq.style.border = "none", tq.style.font = "inherit", self.tw(
		0), tq.style.padding = "0em 0.3em", tq.onclick = tx, tq.addEventListener("mouseover", ty), tq.addEventListener("mouseout", tz), tq.addEventListener("focus", ty), tq.addEventListener("blur", u0)
}

function u9(p6, tU) {
	var tH;
	this.resize = function() {
		for (var aC = 0; aC < p6.length; aC++) bD.ta.tj(p6[aC].button);
		tH.style.gap = tH.style.padding = bD.ta.ti(bf.tf)
	}, (tH = document.createElement("div")).style.display = "grid", tH.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", tH.style.overflowY = "auto", tH.style.gridAutoRows = "5.3em", tH.style.maxHeight = "100%";
	for (var aC = 0; aC < p6.length; aC++) p6[aC].tw(1), tH.appendChild(p6[aC].button);
	tU.appendChild(tH)
}

function uB(uC, uD, uE) {
	this.fr = 0, this.ft = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.ta.tb(uE || .5) * uC[1] * i.iv, i.k - 2 * bf.gap), this.j = Math.min(this.k * (uC[0] / uC[1]), i.j - 2 * bf.gap), this.k = uC[1] * this.j / uC[0], this.fr = bf.gap + uD[0] * (i.j - this.j - 2 * bf.gap), this.ft = bf
			.gap + uD[1] * (i.k - this.k - 2 * bf.gap)
	}, this.uF = function() {
		return this.fr + .5 * this.j
	}
}

function uG(uH, uI) {
	var uQ, uR, self, q6 = document.createElement("div"),
		uJ = document.createElement("div"),
		uK = document.createElement("div"),
		uL = null,
		uS = (this.uM = new uN({
			value: "",
			eT: -1
		}, 0, uO, function(e) {
			e.target.value = bD.pZ.uY(e.target.value), uL.uX.textContent = 255 - e.target.value.length, c0.pL.pW(e.target.value)
		}), new uT(0)),
		uU = 0;

	function uO() {
		uH()
	}
	this.uW = function() {
			uL.uX.textContent = 255 - this.uM.e.value.length, c0.pL.pW(this.uM.e.value)
		}, this.show = function(tU) {
			tU.appendChild(q6), tU.appendChild(uK), this.resize(tU)
		}, this.uZ = function(tU) {
			u.removeChild(tU, q6), u.removeChild(tU, uK)
		}, this.resize = function(tU) {
			uU = tU ? tU.offsetHeight : uU;
			var tU = bD.ta.ub(.04, .75),
				uc = Math.max(tU, uU - tU),
				ud = i.j / i.l,
				ue = .7 * ud,
				uf = bD.ta.ti(uU - tU - uc),
				uc = (uK.style.height = bD.ta.ti(tU), q6.style.height = bD.ta.ti(uc), i.k > i.j || a1.a2.iu() ? (uK.style.top = uf, q6.style.top = bD.ta.ti(uU - uc), bD.ta.tj(q6, 8)) : (q6.style.top = uf, uK.style.top = bD.ta.ti(uU - tU), bD.ta.tj(
						q6, 2)), uR.button.style.width = bD.ta.ti(tU), uS.resize(.6 * tU), this.uM.e.style.left = bD.ta.ti(tU), this.uM.e.style.width = bD.ta.ti(ue - tU), this.uM.e.style.fontSize = uQ.button.style.fontSize = bD.ta.ti(.5 * tU), bD.ta
					.tj(this.uM.e, 6), uQ.button.style.left = bD.ta.ti(ue), uQ.button.style.width = bD.ta.ti(ud - ue), .385 * tU);
			a1.a2.iu() && (uc *= .8 - .12 * (i.j > i.k)), uJ.style.marginLeft = uJ.style.marginRight = bD.ta.ti(.5 * uc), uJ.style.fontSize = bD.ta.ti(uc), c0.pJ.q0(1)
		}, (self = this).uM.e.maxLength = 255, q6.style.position = "absolute", q6.style.left = "0", q6.style.width = "100%", q6.style.overflowX = "hidden", q6.style.overflowY = "auto", q6.style.font = "inherit", q6.style.backgroundColor = bE.qL, uJ
		.style.font = "inherit", uK.style.position = "absolute", uK.style.left = "0", uK.style.width = "100%", self.uM.e.setAttribute("placeholder", L(20)), self.uM.e.style.position = "absolute", self.uM.e.style.top = "0", self.uM.e.style.height =
		"100%", self.uM.e.style.backgroundColor = bE.qI, self.uM.e.style.textAlign = "center", (uQ = new x(L(21), uO)).button.top = "0", uQ.button.style.position = "absolute", uQ.button.style.height = "100%", uQ.tv(bE.rh), uL = new uV("255", uQ
			.button, 1, 1), (uR = new x("", function() {
			return c0.pL.pU(self.uM.e.value), uR.tv(c0.pL.pT() ? bE.qm : bE.rh), 0
		})).button.style.position = "absolute", uR.button.style.top = "0", uR.button.style.left = "0", uR.button.style.height = "100%", uR.button.style.padding = "0", uR.tv(bE.rh), uS.canvas.style.display = "block", uS.canvas.style.margin = "auto",
		uR.button.appendChild(uS.canvas), q6.appendChild(uJ), uK.appendChild(uR.button), uK.appendChild(self.uM.e), uK.appendChild(uQ.button), c0.dv(q6, uJ)
}

function uh(ui, tk, uj) {
	function click() {
		var value = 1 - ui.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + tk, void 0 !== ui.eT ? bm.rt.q0(ui.eT, value) : ui.value = value, uj && uj(value)
	}
	var e;
	tk = tk || L(22), this.e = document.createElement("p"), (e = this.e).textContent = (ui.value ? "🟩 " : "⬜ ") + tk, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function uk(tU, tO) {
	var tH = document.createElement("div");
	this.tW = tH, this.resize = function() {
		tH.style.padding = bD.ta.ti(bf.tf), tH.style.lineHeight = bD.ta.ti(bD.ta.ub(.035))
	}, tU.style.overflowX = "hidden", tU.style.overflowY = "auto", tH.innerHTML = tO, tU.appendChild(tH)
}

function ul(um) {
	var tH = document.createElement("div");
	this.e = tH, this.un = um, this.resize = function() {
		for (var fk = um.length, aC = 1; aC < fk; aC++) bD.ta.tj(um[aC], 4)
	};
	var aC, fk = um.length;
	for (tH.style.width = "100%", tH.style.height = "2.7em", tH.style.marginTop = "0.6em", tH.style.border = "inherit", aC = 0; aC < fk; aC++) um[aC].style.verticalAlign = "top", um[aC].style.width = (100 / fk).toFixed(2) + "%", um[aC].style.height =
		"100%", um[aC].style.fontSize = "0.75em", tH.appendChild(um[aC])
}

function uo(up, tm, uq, ur) {
	this.tH = document.createElement("div"), this.p6 = up;
	var us = 0;
	this.resize = function(tU, uu) {
		var fk = up.length;
		if (!uq)
			for (var aC = 1; aC < fk; aC++) bD.ta.tj(up[aC].button, 4);
		if (ur)
			for (aC = 0; aC < fk; aC++) up[aC].button.style.width = ur[aC] + "%";
		else {
			for (var uv = 0, aC = 0; aC < fk; aC++) uv += up[aC].button.offsetWidth;
			if (tU && (us = tU.offsetWidth), uu && uv < us)
				for (aC = 0; aC < fk; aC++) up[aC].button.style.width = (100 * up[aC].button.offsetWidth / uv).toFixed(2) + "%";
			else
				for (aC = 0; aC < fk; aC++) up[aC].button.style.width = "auto";
			uu || this.resize(tU, 1)
		}
	};
	var ut = this;
	ut.tH.style.height = ut.tH.style.maxHeight = "100%";
	for (var aC = 0; aC < up.length; aC++) up[aC].tv(tm), up[aC].button.style.height = "100%", up[aC].button.style.padding = "0.0em 0.9em", up[aC].button.style.whiteSpace = "pre", ut.tH.appendChild(up[aC].button)
}

function dq() {
	var uw = 2e3,
		ux = 2,
		uy = document.createElement("div"),
		uz = 0,
		v0 = "",
		v1 = 0,
		v2 = 0,
		v3 = 0;

	function v6(v5) {
		clearTimeout(v3), v1 = v5.clientX, v2 = v5.clientY, v3 = setTimeout(v8, uw)
	}

	function v7(v5) {
		var j5;
		!v0 || (j5 = v5.clientX - v1) * j5 + (j5 = v5.clientY - v2) * j5 < ux * ux || (fG(), v6(v5))
	}

	function v8() {
		var j, gap, vA, k;
		v0 && !bM.u3() && (uy.textContent = v0, uy.style.font = bD.ta.v9(0, bD.ta.ub(.014)), uy.style.maxWidth = bD.ta.ub(.3) + "px", bD.ta.tj(uy, 5), uz = 1, document.body.appendChild(uy), j = uy.offsetWidth, k = uy.offsetHeight, gap = bD.ta.ub(
			.012), vA = i.j / i.l, (k = v2 - k - gap) < 0 && (k = v2 + 2 * gap), uy.style.left = bO.it(v1 - j / 2, 0, Math.max(0, vA - j)) + "px", uy.style.top = k + "px")
	}

	function fG() {
		uz && (uz = 0, u.removeChild(document.body, uy))
	}
	this.v4 = function(e, pV) {
		e.addEventListener("mouseover", function(v5) {
			v0 = pV, v6(v5)
		}), e.addEventListener("mousemove", v7), e.addEventListener("mouseout", by.uZ), e.addEventListener("click", by.uZ)
	}, this.uZ = function() {
		clearTimeout(v3), v0 = "", fG()
	}, uy.style.position = "fixed", uy.style.backgroundColor = bE.qJ, uy.style.color = bE.qN, uy.style.pointerEvents = "none", uy.style.zIndex = "6", uy.style.padding = "0.2em 0.5em"
}

function vB() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.ta.tj(this.e, 8, bE.qW)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function vC() {
	var v1, v2, uy = document.createElement("div"),
		vD = document.createElement("div"),
		uz = 0,
		vE = 0;
	this.show = function(fr, ft, pV, vF, vG, eu) {
			if (uz) {
				if (!vF) return;
				this.uZ()
			}
			fr === ft && -1 === fr ? (fr = v1, ft = v2) : (v1 = fr, v2 = ft);
			var vH = Math.floor(bD.ta.ub(.018)),
				vG = (fr = Math.max(vH + 2, fr), vG || (vE = vF), uz = 1, i.j / i.l),
				vF = (uy.style.whiteSpace = "pre", uy.textContent = pV, bD.ta.tj(uy, 5), uy.style.font = bD.ta.v9(0, bD.ta.ub(.015)), uy.style.padding = "0.3em 0.6em", uy.style.left = fr + "px", uy.style.top = "0px", document.body.appendChild(uy),
					fr + uy.offsetWidth - vG),
				pV = (0 < vF && (fr -= vF, fr = Math.max(vH + 1, fr), uy.style.left = fr + "px", fr < vH + 2) && (uy.style.whiteSpace = "pre-wrap"), uy.offsetHeight);
			uy.style.top = ft - pV + vE * bf.vK + "px", fr -= vH, vD.style.backgroundColor = bD.color.qF(eu >> 12 << 2, (eu >> 6 & 63) << 2, (63 & eu) << 2), vD.style.left = fr + "px", vD.style.top = uy.style.top, vD.style.width = vH + "px", vD.style
				.height = pV + "px", bD.ta.tj(vD, 4), bD.ta.tj(vD, 8), bD.ta.tj(vD, 2), document.body.appendChild(vD)
		}, this.uZ = function(vL) {
			if (uz) {
				if (vL && vE) return 0;
				uz = 0, u.removeChild(document.body, uy), u.removeChild(document.body, vD)
			}
			return 1
		}, uy.style.position = "absolute", uy.style.backgroundColor = bE.qJ, uy.style.color = bE.qN, uy.style.pointerEvents = "none", uy.style.zIndex = "5", uy.style.maxWidth = "100%", vD.style.position = "absolute", vD.style.color = bE.qN, vD.style
		.pointerEvents = "none", vD.style.zIndex = "5"
}

function uN(vM, type, vN, vO) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.vP++, e.value = vM.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.qN, e.style.backgroundColor = bE.qG, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.vQ++
		}), e.addEventListener("blur", function() {
			i.vQ--, -1 !== vM.eT && bm.rt.q0(vM.eT, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== vM.eT && bm.rt.q0(vM.eT, e.value), vN ? vN() : e.blur())
		}), vO && e.addEventListener("input", function(q4) {
			vO(q4)
		})
}

function vR(tU, data, vS) {
	var fk = data.vT.length,
		vU = document.createElement("div"),
		vV = document.createElement("div"),
		pO = document.createElement("div"),
		vW = new Array(fk),
		tV = new Array(fk),
		vX = new Array(data.vY.length),
		vZ = bD.color.qH(70, 70, 0, .35);

	function u6() {
		this.style.backgroundColor = bD.color.u6(vZ, 160)
	}

	function vg() {
		this.style.backgroundColor = vZ
	}

	function td() {
		var g3;
		for (tU.style.font = bD.ta.v9(0, bD.ta.vn(.026, .5, .03)), aC = 1; aC < vX.length; aC++) bD.ta.tj(vX[aC], 4);
		if (bD.ta.tj(vU, 2), fk) {
			for (var iD, vo = vU.offsetWidth, vp = pO.offsetWidth, aC = 0; aC < vX.length; aC++) iD = .01 * data.vf[aC] * vp, vX[aC].style.width = (100 * iD / vo).toFixed(2) + "%";
			var ly = data.vT[0].length;
			for (aC = 0; aC < fk; aC++)
				for (bD.ta.tj(vW[aC], 2), g3 = 1; g3 < ly; g3++) bD.ta.tj(tV[aC][g3], 4);
			vV.va && (vV.scrollTop = vV.va)
		}
	}
	this.resize = function() {
			td(), td()
		}, tU.style.display = "flex", tU.style.flexDirection = "column", vV.style.overflowX = "hidden", vV.style.overflowY = "auto", vV.addEventListener("scroll", function() {
			this.va = this.scrollTop, vS && vS.vb && (u.z.vc[vS.vb] = this.scrollTop)
		}),
		function() {
			var fn, aC, vT = data.vT,
				ly = fk ? vT[0].length : 0;
			for (aC = 0; aC < fk; aC++) {
				vW[aC] = document.createElement("div"), vW[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.qH(130, 130, 130, .35) : bE.qM
				}(aC), vW[aC].style.width = "100%", vW[aC].style.display = "flex", tV[aC] = new Array(ly);
				for (var g3 = 0; g3 < ly; g3++) tV[aC][g3] = fn = document.createElement("div"), fn.style.display = "flex", fn.style.justifyContent = "center", fn.style.wordBreak = "break-all", fn.style.padding = "0.4em 0em", fn.style.width = data
					.vf[g3] + "%", fn.textContent = vT[aC][g3].gC, 1 === vT[aC][g3].el && (fn.name = "" + aC, fn.style.color = bE.rS, fn.style.backgroundColor = vZ, fn.addEventListener("mouseover", u6), fn.addEventListener("mouseout", vg), function(
						fn, pd, vi) {
						2147483647 !== vi && fn.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, pd), bK.dv(bG.aD), this.style.backgroundColor = vZ, u.v(8, u.vj, new vk(25, {
								action: 0,
								pd: bI.fB.vl(bI.fB.vm(5)),
								vi: vi
							}))
						})
					}(fn, vT[aC][g3].pd, vT[aC][g3].vi)), vW[aC].appendChild(fn)
			}
			for (vU.style.display = "flex", vU.style.backgroundColor = bD.color.qH(0, 120, 0, .35), aC = 0; aC < vX.length; aC++) vX[aC] = fn = document.createElement("div"), fn.style.display = "flex", fn.style.justifyContent = "center", fn.style
				.wordBreak = "break-all", fn.style.padding = "0.4em 0em", fn.style.width = data.vf[aC] + "%", fn.innerHTML = data.vY[aC], vU.appendChild(fn)
		}();
	for (var aC = 0; aC < fk; aC++) pO.appendChild(vW[aC]);
	vV.appendChild(pO), tU.appendChild(vU), tU.appendChild(vV), vS && vS.vb && (vV.va = u.z.vc[vS.vb])
}

function vq() {
	var vu, vv, vr = document.createElement("div"),
		vs = document.createElement("div"),
		vt = document.createElement("div"),
		pO = document.createElement("div"),
		p6 = [],
		eO = [L(23), L(24), L(25), L(26), L(27), L(28), L(29), L(30)],
		vw = [1, 2, 3, 0, 9, 10, 11, 13];

	function vy(aC) {
		u.v(8, 0, new vk(21, {
			w0: vw[aC],
			w1: 0,
			w2: 10
		}))
	}
	this.show = function() {
			this.q0(u.z.w3), document.body.appendChild(vr)
		}, this.uZ = function() {
			u.removeChild(document.body, vr)
		}, this.q0 = function(w3) {
			for (var w4 = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < p6.length; aC++) {
				var j = w3[aC];
				vu[w4[aC]][1].uX.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, w5 = bf.gap,
				k = bD.ta.w6(.085),
				j = Math.min(4 * k, i.j - 2 * w5),
				fk = p6.length;
			for (bD.ta.w7(vr, w5, i.k - w5 - k, j, k), bD.ta.tj(vr), bD.ta.tj(vs, 6), aC = 0; aC < fk - 1; aC++) bD.ta.tj(p6[aC].button, 6);
			for (aC = 0; aC < fk; aC++) vu[aC][0].resize(), vu[aC][1].resize();
			for (p6[0].fr = 0, p6[0].button.style.left = bD.ta.ti(p6[0].fr), p6[0].button.style.width = bD.ta.w8(1.7 * k), aC = 1; aC < fk; aC++) p6[aC].fr = p6[aC - 1].fr + p6[aC - 1].button.offsetWidth, p6[aC].button.style.left = bD.ta.ti(p6[aC]
				.fr);
			if (!vv) {
				if (!ac.w9()) return;
				(vv = ac.get(14)).style.width = "24%", vv.style.position = "absolute", vs.appendChild(vv)
			}
			vv.style.left = bD.ta.ti(0), vv.style.top = "7%", vt.wA && (vt.scrollLeft = vt.wA)
		}, vr.style.position = "absolute", vs.style.width = "25%", vs.style.height = "100%", vs.style.backgroundColor = bE.qJ, vt.style.position = "absolute", vt.style.width = "75%", vt.style.height = "100%", vt.style.backgroundColor = bE.qJ, vt
		.style.top = vt.style.right = bD.ta.ti(0), bD.ta.vx(vt), pO.style.height = pO.style.maxHeight = "100%", p6.push(new x("", function() {
			vy(0)
		}, bE.r9)), p6.push(new x("", function() {
			vy(1)
		}, bE.rA)), p6.push(new x("", function() {
			vy(2)
		}, bE.r2)), p6.push(new x("", function() {
			vy(3)
		}, bE.ql)), p6.push(new x("", function() {
			vy(4)
		}, bE.rd)), p6.push(new x("", function() {
			vy(5)
		}, bE.rZ)), p6.push(new x("", function() {
			vy(6)
		}, bE.rd)), p6.push(new x("", function() {
			vy(7)
		}, bE.qE)), vu = new Array(p6.length);
	for (var aC = 0; aC < p6.length; aC++) p6[aC].button.style.position = "absolute", vu[aC] = [new vz(eO[aC], p6[aC].button, .25, .45), new vz("", p6[aC].button, .53, .84, 1)], p6[aC].button.style.height = p6[aC].button.style.maxHeight = "100%", p6[
		aC].button.top = bD.ta.ti(0), pO.appendChild(p6[aC].button);
	vt.appendChild(pO), vr.appendChild(vs), vr.appendChild(vt)
}

function wB(wC, wD, uH, uI, wE) {
	var wF = document.createElement("div"),
		wG = document.createElement("div"),
		wH = document.createElement("div"),
		po = document.createElement("div"),
		wI = document.createElement("div"),
		wJ = document.createElement("div"),
		wK = document.createElement("span"),
		wL = document.createElement("div"),
		wR = (this.wM = new uG(uH, uI), this.wN = new wO(uI), this.wP = new wQ(wE), 2);
	this.wV = function(wW) {
		wW = (wW / 10).toFixed(1) + "%";
		wJ.style.width = wW, wK.innerHTML = wW
	}, this.wX = function(wY) {
		(0 === wR ? this.wM : 1 === wR ? this.wN : this.wP).uZ(po), (0 === (wR = wY) ? this.wM : 1 === wY ? this.wN : this.wP).show(po)
	}, this.wZ = function() {
		return wG
	}, this.show = function() {
		document.body.appendChild(wF)
	}, this.uZ = function() {
		u.removeChild(document.body, wF)
	}, this.resize = function() {
		var wa = 1 - .4 * a1.a2.iu() * (i.j > 1.6 * i.k),
			wb = bD.ta.ub(.05 * wa),
			wc = 1.3 * wb,
			wd = i.k > i.j,
			we = bD.ta.ub(.06 * wa + .03 * wd),
			wd = bD.ta.ub(.02 * wa + .01 * wd),
			wg = bD.ta.ub(.025);
		wF.style.font = bD.ta.v9(0, wg), wH.style.font = bD.ta.v9(0, .9 * wg), wL.style.font = bD.ta.v9(0, .9 * wg), wa < 1 && (wa = bD.ta.v9(0, wa * wg), wH.style.font = wa, wL.style.font = wa, wI.style.font = wa), wG.style.height = bD.ta.ti(
			wc), wG.style.font = bD.ta.v9(0, .72 * wb), bD.ta.tj(wG, 2), wH.style.top = bD.ta.ti(wc), wH.style.height = bD.ta.ti(we), bD.ta.tj(wH, 2), po.style.top = bD.ta.ti(wc + we), po.style.height = bD.ta.ti(i.k / i.l - wc - 2 * we - wd), wI
			.style.top = bD.ta.ti(i.k / i.l - we - wd), wI.style.height = bD.ta.ti(wd), bD.ta.tj(wI, 8), wK.style.font = bD.ta.v9(0, .8 * wd), wL.style.top = bD.ta.ti(i.k / i.l - we), wL.style.height = bD.ta.ti(we), bD.ta.tj(wL, 8), wC.resize(
			wF), wD.resize(wF), 0 === wR ? this.wM.resize(po) : (1 === wR ? this.wN : this.wP).resize()
	};
	uH = this;
	wF.style.position = "absolute", wF.style.top = "0", wF.style.left = "0", wF.style.width = "100%", wF.style.height = "100%", wF.style.backgroundColor = bE.qM, bM.u3() || (wF.style.backdropFilter = "blur(4px)", wF.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (wF.style.display = "none"), wG.style.position = "absolute", wG.style.top = "0", wG.style.left = "0", wG.style.width = "100%", wG.style.display = "flex", wG.style.alignItems = "center", wG.translate = !1;
	for (var h = [wH, wL], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.ta.vx(h[aC]);
	po.style.position = "absolute", po.style.left = "0", po.style.width = "100%", po.style.font = "inherit", wI.style.position = "absolute", wI.style.left = "0", wI.style.width = "100%", wJ.style.position = "absolute", wJ.style.top = "0", wJ.style
		.left = "0", wJ.style.height = "100%", wJ.style.width = "50%", wJ.style.backgroundColor = bE.qj, wK.innerHTML = "", wK.style.position = "absolute", wK.style.top = "50%", wK.style.left = "50%", wK.style.transform = "translate(-50%, -50%)", wK
		.translate = !1, wG.appendChild(function() {
			var wU = document.createElement("h1");
			return wU.textContent = L(31), wU.style.margin = "0 auto 0.55em auto", wU.style.fontFamily = "Arial Black, system-ui", wU.style.fontSize = "inherit", wU.style.fontWeight = "inherit", wU
		}()), wH.appendChild(wC.tH), wI.appendChild(wJ), wI.appendChild(wK), wL.appendChild(wD.tH), wF.appendChild(wG), wF.appendChild(wH), wF.appendChild(po), wF.appendChild(wI), wF.appendChild(wL), wF.className = "fx-lobby", po.className =
		"fx-panel", wI.className = "fx-progress", uH.wP.show(po)
}

function wQ(wE) {
	var wF = document.createElement("div"),
		wi = [],
		wj = 96,
		wk = ["battleRoyale", "oneVsOne", "zombie", "noFullSending"];

	function x0(e) {
		e.style.position = "absolute", e.style.top = e.style.left = "0", e.style.width = e.style.height = "100%", e.style.pointerEvents = "none"
	}

	function wo(button, xE) {
		var tH = document.createElement("div");
		return tH.style.position = "absolute", tH.style.left = "0", tH.style.width = "100%", tH.style.height = "20%", tH.style.pointerEvents = "none", tH.style.backgroundColor = bE.qG, xE ? tH.style.top = "0" : tH.style.bottom = "0", button
			.appendChild(tH), tH
	}

	function wr(xF, xG) {
		var tH = document.createElement("div");
		return tH.style.position = "absolute", tH.style.top = "0", tH.style.width = "20%", tH.style.height = "100%", xG ? tH.style.left = "0" : tH.style.right = "0", xF.appendChild(tH), tH
	}

	function x2(xH) {
		var canvas = document.createElement("canvas");
		return canvas.width = canvas.height = 64, x0(canvas), canvas.style.top = canvas.style.left = "10%", canvas.style.width = canvas.style.height = "80%", xH.appendChild(canvas), canvas.getContext("2d", {
			alpha: !0
		})
	}

	function wv(xF, left, right, width) {
		var tH = document.createElement("div");
		return tH.style.position = "absolute", tH.style.top = "50%", tH.style.transform = "translateY(-50%)", tH.style.left = left, tH.style.right = right, tH.style.width = width, tH.style.textAlign = "left", xF.appendChild(tH), {
			tH: tH,
			x9: xK(tH, 1.9),
			wy: xK(tH, 1)
		}
	}

	function xK(ov, fontSize) {
		var tH = document.createElement("div");
		return tH.style.fontSize = fontSize + "em", tH.style.lineHeight = "1.1", tH.style.whiteSpace = "nowrap", tH.style.overflow = "hidden", tH.style.textOverflow = "ellipsis", tH.style.textShadow = "0 0 0.25em black", ov.appendChild(tH), tH
	}

	function xL(e, pV) {
		e.textContent !== pV && (e.textContent = pV)
	}

	function xM(q4) {
		q4.canvas && (bq.xN.ps(q4.canvas), q4.canvas = null), q4.x8 = ""
	}
	this.nS = function() {
		var tV = bq.tV.tV,
			fk = tV.length;
		if (fk !== wi.length) {
			for (var aC = 0; aC < wi.length; aC++) xM(wi[aC]);
			for (wF.textContent = "", wi = new Array(fk), aC = 0; aC < fk; aC++) wi[aC] = function(eT) {
				var button = document.createElement("button"),
					wn = (button.style.position = "absolute", button.style.backgroundColor = bE.qM, button.style.color = bE.qN, button.style.outline = "none", button.style.userSelect = "none", button.style.cursor = "pointer", button.style
						.padding = "0", button.style.overflow = "hidden", bD.ta.wm(button, function() {
							wE(eT, 0)
						}, function() {
							wE(eT, 1)
						}), bD.ta.tj(button), wo(button, 1)),
					wp = wo(button, 0),
					wq = wr(wn, 0),
					ws = wr(wp, 1),
					wt = wr(wp, 0),
					wu = wv(wn, "3%", "", "74%"),
					ww = wv(wp, "20%", "", "30%"),
					wx = wv(wp, "", "20%", "30%"),
					wz = (wx.tH.style.textAlign = "right", ww.wy.textContent = "Starts in", document.createElement("canvas"));
				return wz.width = wz.height = wj, x0(wz), wq.appendChild(wz), (button = {
					button: button,
					wn: wn,
					wp: wp,
					x1: x2(ws),
					x3: x2(wt),
					x4: 0,
					isContest: 0,
					x5: null,
					wq: wq,
					wz: wz,
					x6: wz.getContext("2d", {
						alpha: !0
					}),
					x7: -1,
					canvas: null,
					x8: "",
					map: wu.x9,
					xA: wu.wy,
					xB: ww.x9,
					xC: wx.x9,
					xD: wx.wy,
					hv: -1
				}).map.translate = !1, button.xA.translate = !1, button.xB.translate = !1, ww.wy.translate = !1, button
			}(aC), wF.appendChild(wi[aC].button);
			this.resize()
		}
		for (aC = 0; aC < fk; aC++) wi[aC].x8 !== bq.xN.xO(tV[aC].fQ, tV[aC].mapSeed) && xM(wi[aC]);
		for (aC = 0; aC < fk; aC++) {
			var xP = tV[aC],
				q4 = wi[aC],
				hv = xP.id === bq.tV.xQ ? 1 + bq.tV.xR : 0,
				hD = bq.tV.xS(xP);
			xL(q4.map, bV.xT.xU[xP.fQ]), xL(q4.xA, bq.tV.xV(xP.xA)), xL(q4.xB, bq.tV.xW(xP.xX)), xL(q4.xC, hD + (bq.tV.xY(xP) ? "/" + xP.na : "")), xL(q4.xD, L(1 === hD ? 32 : 33)), q4.hv !== hv && (q4.hv = hv, q4.wn.style.backgroundColor = q4.wp
				.style.backgroundColor = [bE.qG, bE.qt, bE.rL][hv], bD.ta.tj(q4.button, 5, [bE.qN, bE.qu, bE.rM][hv]), q4.button.classList.toggle("fx-line", !hv)), ! function(q4) {
				!q4.x4 && ac.w9() && (q4.x4 = 1, q4.x1.drawImage(ac.xJ("clock"), 0, 0), q4.x3.drawImage(ac.xJ("userIcon"), 0, 0))
			}(q4), ! function(q4, xA) {
				q4.x7 === xA || 7 <= xA && !ac.w9() || ((q4.x7 = xA) < 7 ? bk.xf(q4.x6, xA + 2, wj) : (q4.x6.clearRect(0, 0, wj, wj), q4.x6.drawImage(ac.xJ(wk[xA - 7]), 0, 0, wj, wj)))
			}(q4, xP.xA), ! function(q4, isContest) {
				q4.isContest === isContest || isContest && !ac.w9() || ((q4.isContest = isContest) ? (q4.x5 || (q4.x5 = function(q4) {
					var xe = ac.xJ("crown"),
						canvas = document.createElement("canvas");
					return canvas.width = xe.width, canvas.height = xe.height, canvas.getContext("2d", {
							alpha: !0
						}).drawImage(xe, 0, 0), canvas.style.position = "absolute", canvas.style.top = "50%", canvas.style.left = "50%", canvas.style.width = "55%", canvas.style.height = "auto", canvas.style.transform =
						"translate(-50%, -50%)", canvas.style.opacity = "0.5", canvas.style.pointerEvents = "none", q4.button.insertBefore(canvas, q4.wn), canvas
				}(q4)), q4.x5.hidden = !1) : q4.x5.hidden = !0)
			}(q4, xP.xb), ! function(q4, xP) {
				var canvas;
				q4.canvas || (canvas = bq.xN.xg(xP.fQ, xP.mapSeed)) && (q4.canvas = canvas, q4.x8 = bq.xN.xO(xP.fQ, xP.mapSeed), x0(canvas), q4.button.insertBefore(canvas, q4.button.firstChild))
			}(q4, xP)
		}
	}, this.resize = function() {
		var fk = wi.length,
			j = wF.offsetWidth,
			k = wF.offsetHeight;
		if (0 !== fk && 0 !== j && 0 !== k) {
			for (var gap = bD.ta.ub(.012), xh = 0, xi = 1, eu = 1; eu <= fk; eu++) {
				var rows = bO.gB(fk + eu - 1, eu),
					rows = Math.min((j - (eu + 1) * gap) / eu, (k - (rows + 1) * gap) / rows);
				xh < rows && (xh = rows, xi = eu)
			}
			for (var xj = bO.gB(fk + xi - 1, xi), o6 = (j - xi * xh - (xi - 1) * gap) / 2, o7 = (k - xj * xh - (xj - 1) * gap) / 2, aC = 0; aC < fk; aC++) {
				var qD = wi[aC].button.style;
				qD.left = bD.ta.ti(o6 + aC % xi * (xh + gap)), qD.top = bD.ta.ti(o7 + bO.gB(aC, xi) * (xh + gap)), qD.width = qD.height = bD.ta.ti(xh), qD.fontSize = bD.ta.ti(.05 * xh)
			}
		}
	}, this.show = function(tU) {
		tU.appendChild(wF), this.nS(), this.resize()
	}, this.uZ = function(tU) {
		u.removeChild(tU, wF)
	}, wF.style.position = "absolute", wF.style.top = "0", wF.style.left = "0", wF.style.width = wF.style.height = "100%", wF.style.overflow = "hidden", wF.style.font = "inherit"
}

function wO(uI) {
	var uX, xH, wF = document.createElement("div"),
		po = document.createElement("div"),
		xk = null,
		xl = null;
	this.nS = function() {
			po.textContent = "", bq.xo.xp && bq.xo.uZ(1);
			for (var pv = document.createDocumentFragment(), xC = bq.pl.xq, tV = bq.tV.tV, xr = 0, aC = 0; aC < tV.length; aC++) xr = xr || 8 === tV[aC].xA;
			for (xk.style.width = xk.style.maxWidth = xr ? "11.3em" : "10.3em", aC = 0; aC < xC.length; aC++) {
				var eT = bq.tV.xs(xC[aC].xt);
				! function(pv, q4, eT, xv) {
					var uX = xk.cloneNode(!0),
						xH = uX.firstChild;
					xH.style.backgroundColor = 0 <= eT && q4.xw ? bE.rO : xl[eT < 0 ? 15 : Math.min(eT, 14)], 0 <= eT && (xH.textContent = "" + (eT + 1));
					uX.lastChild.textContent = bq.ls.xx(q4, xv), uX.style.color = bq.ls.xy(q4.xz), 11 === q4.xz && (uX.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
					__fx.settings.highlightDuplicateIps && (xH = __fx.utils.getDuplicateIpHighlightColor(q4, bq.pl.xq, "aHd")) && (uX.style.backgroundColor = xH, uX.style.borderRadius = "0.3em");
					__fx.settings.highlightSameClan && (eT = __fx.utils.getSameClanHighlightColor(q4, bq.pj, "username")) && (uX.style.backgroundColor ? uX.style.boxShadow = "inset 0 0 0 2px " + eT : uX.style.backgroundColor = eT, uX.style
						.borderRadius = "0.3em");
					bq.ls.y0(q4) && (uX.style.textDecoration = "underline"), q4.y1 && (uX.style.textDecorationLine = "underline", uX.style.textDecorationStyle = "dotted");
					uX.onclick = function(e) {
						uI(e, q4)
					}, bM.u3() || (uX.onmouseover = function(e) {
						bq.xo.y2(uX, q4, 1)
					}), pv.appendChild(uX)
				}(pv, xC[aC], eT, 0 <= eT && 8 === tV[eT].xA)
			}
			po.appendChild(pv), po.classList.toggle("fx-wide", !!xr)
		}, this.show = function(tU) {
			tU.appendChild(wF)
		}, this.uZ = function(tU) {
			u.removeChild(tU, wF)
		}, this.resize = function() {
			po.style.fontSize = bD.ta.ti(bD.ta.ub(.02, .3))
		}, wF.style.top = "0", wF.style.left = "0", wF.style.width = wF.style.height = "100%", wF.style.overflowX = "hidden", wF.style.overflowY = "auto", wF.style.font = "inherit", po.style.font = "inherit", po.style.margin = "0.4em", wF
		.appendChild(po), wF.className = "fx-players-scroll", po.className = "fx-players", (uX = document.createElement("span")).style.cursor = "pointer", uX.style.margin = "0.2em 0.2em 0.2em 0.2em", uX.style.height = uX.style.maxHeight = "1.4em", uX
		.style.whiteSpace = "nowrap", uX.style.overflow = "hidden", uX.style.textOverflow = "ellipsis", uX.style.font = "inherit", uX.style.display = "inline-block", (xH = document.createElement("span")).style.display = "inline-block", xH.style
		.width = xH.style.height = xH.style.lineHeight = "1.3em", xH.style.marginRight = "0.4em", xH.style.fontSize = "0.8em", xH.style.fontWeight = "bold", xH.style.textAlign = "center", xH.style.color = bE.qE, xH.style.textShadow = "none", xH.style
		.textDecoration = "none", xH.style.pointerEvents = "none", xH.translate = !1, uX.appendChild(xH), uX.appendChild(document.createTextNode("")), xk = uX, xl = function() {
			for (var h = ["rgb(0,200,0)", "rgb(150,220,0)", "rgb(250,225,0)", "rgb(255,150,0)", "rgb(240,85,0)"], aC = h.length; aC < 15; aC++) h.push("rgb(210,0,0)");
			return h.push("rgb(128,128,128)"), h
		}()
}

function y3(y4) {
	var wF = document.createElement("div"),
		uK = document.createElement("div"),
		y5 = [];

	function ty() {
		bM.u3() || (this.style.backgroundColor = bD.color.u6(bE.qJ, 50))
	}

	function tz() {
		this.style.backgroundColor = bE.qJ
	}
	this.q0 = function(y7, y8) {
			y5[2].textContent = y7 + 1 + " / " + y8
		}, this.show = function(q4) {
			q4 = bq.ls.px(q4, bq.ls.py(q4)), uK.appendChild(bq.pr.transform(q4)), document.body.appendChild(wF)
		}, this.resize = function() {
			var k = bD.ta.ub(.03, .5);
			wF.style.width = 10 * k + "px", wF.style.font = bD.ta.v9(1, .75 * k), bD.ta.tj(wF, 4), uK.style.top = k + "px", uK.style.font = bD.ta.v9(0, .55 * k), bD.ta.tj(uK, 2), wF.style.height = k + uK.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.ta.tj(y5[aC], 6), y5[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) y5[aC].style.height = k + "px", bD.ta.tj(y5[aC], 2);
			y5[2].style.width = 4 * k + "px", y5[1].style.left = 2 * k + "px", y5[2].style.left = 4 * k + "px", y5[3].style.left = 8 * k + "px"
		}, this.y9 = function() {
			for (var aC = 0; aC < 4; aC++) y5[aC].onclick = null, y5[aC].onmouseover = null, y5[aC].onmouseout = null;
			bq.pr && uK.firstChild && bq.pr.ps(uK.firstChild), u.removeChild(document.body, wF), wF = uK = y5 = null
		}, wF.style.position = "absolute", wF.style.color = bE.qN, wF.style.zIndex = "3", wF.style.right = "0", wF.style.top = "0", uK.style.position = "absolute", uK.style.height = "auto", uK.style.color = bE.qN, uK.style.backgroundColor = bE.qJ, uK
		.style.left = "0", uK.style.width = "100%", uK.style.overflowWrap = "break-word", wF.appendChild(uK);
	for (var aC = 0; aC < 4; aC++) y5[aC] = document.createElement("div"), y5[aC].style.position = "absolute", y5[aC].style.backgroundColor = bE.qJ, y5[aC].style.color = bE.qN, y5[aC].style.top = "0", y5[aC].style.display = "flex", y5[aC].style
		.justifyContent = "center", y5[aC].style.alignItems = "center", y5[aC].style.userSelect = "none", y5[aC].style.outline = "none", y5[aC].style.font = "inherit", 2 !== (y5[aC].y6 = aC) && (y5[aC].onclick = y4, y5[aC].onmouseover = ty, y5[aC]
			.onmouseout = tz), wF.appendChild(y5[aC]);
	y5[0].textContent = "◀", y5[1].textContent = "▶", y5[3].textContent = "✖"
}

function yA(y4) {
	var uy = document.createElement("div");

	function ty() {
		bM.u3() || (uy.style.backgroundColor = bD.color.u6(bE.qJ, 50))
	}

	function tz() {
		uy.style.backgroundColor = bE.qJ
	}
	this.q0 = function(y8) {
			uy.textContent = y8
		}, this.show = function() {
			document.body.appendChild(uy)
		}, this.resize = function() {
			var k = bD.ta.ub(.03, .5);
			uy.style.width = 2 * k + "px", uy.style.height = k + "px", uy.style.font = bD.ta.v9(1, .75 * k), bD.ta.tj(uy, 4), bD.ta.tj(uy, 2)
		}, this.y9 = function() {
			uy.onclick = null, uy.onmouseover = null, uy.onmouseout = null, u.removeChild(document.body, uy), uy = null
		}, uy.style.position = "absolute", tz(), uy.style.color = bE.qN, uy.style.zIndex = "3", uy.style.right = "0", uy.style.top = "0", uy.style.display = "flex", uy.style.justifyContent = "center", uy.style.alignItems = "center", uy.style
		.userSelect = "none", uy.style.outline = "none", uy.onclick = y4, uy.onmouseover = ty, uy.onmouseout = tz
}

function yB(up, yC) {
	var wF = document.createElement("div"),
		yD = document.createElement("div"),
		yE = (yC = yC || 1, Math.floor((up.length + yC - 1) / yC)),
		yF = [],
		yG = [],
		uz = (this.fr = 0, this.ft = 0);

	function yJ() {
		bq.yK.uZ()
	}
	this.p6 = up, this.show = function(fr, ft, yN) {
			if (uz) return [0, 0];
			uz = 1, this.fr = fr, this.ft = ft,
				function(self, yN) {
					var j = bD.ta.ub(.16, .7),
						k = yE * j / 3,
						vA = (j *= yC, i.j / i.l),
						yP = i.k / i.l,
						oI = Math.min(1, Math.min(vA / j, yP / k));
					j *= oI, k *= oI, yN && (self.fr += bD.ta.ub(.03, .5)), self.fr = bO.it(self.fr, 0, vA - j), self.ft = bO.it(self.ft, 0, yP - k), yD.style.left = self.fr + "px", yD.style.top = self.ft + "px", yD.style.width = j + "px", yD.style
						.height = k + "px", yD.style.font = bD.ta.v9(0, .3 * k / yE), bD.ta.tj(yD, 5);
					for (var aC = 1; aC < yF.length; aC++) yG[aC][0] && bD.ta.tj(yF[aC], 8), yG[aC][1] && bD.ta.tj(yF[aC], 4)
				}(this, yN), document.body.appendChild(wF)
		}, this.uZ = function() {
			uz && (uz = 0, wF.removeEventListener("click", yJ), u.removeChild(document.body, wF))
		},
		function() {
			var aC, fk = up.length;
			for (aC = 0; aC < fk; aC++) yF.push(up[aC].button);
			for (aC = fk; 1 < yC && aC < yE * yC; aC++) {
				var e = document.createElement("div");
				e.style.backgroundColor = bE.qJ, yF.push(e)
			}
			for (aC = 0; aC < yF.length; aC++) yG.push([aC % yE, Math.floor(aC / yE)])
		}();
	for (var aC = 0; aC < up.length; aC++) new uV("" + (1 + aC), up[aC].button, 0, 1);
	wF.style.position = "fixed", wF.style.top = "0", wF.style.left = "0", wF.style.width = "100%", wF.style.height = "100%", wF.style.zIndex = "5", yD.style.position = "absolute",
		function() {
			if (1 < yC) ! function() {
				yD.style.display = "grid", yD.style.gridTemplateColumns = "repeat(" + yC + ", 1fr)", yD.style.gridTemplateRows = "repeat(" + yE + ", 1fr)";
				for (var aC = 0; aC < yF.length; aC++) {
					var qD = yF[aC].style;
					qD.width = qD.height = qD.maxHeight = "100%", qD.padding = "0.0em 0.9em", qD.gridRow = "" + (yG[aC][0] + 1), qD.gridColumn = "" + (yG[aC][1] + 1), yD.appendChild(yF[aC])
				}
			}();
			else
				for (var yM = (100 / up.length).toFixed(2) + "%", aC = 0; aC < up.length; aC++) up[aC].button.style.width = "100%", up[aC].button.style.height = up[aC].button.style.maxHeight = yM, up[aC].button.style.padding = "0.0em 0.9em", yD
					.appendChild(up[aC].button)
		}(), wF.appendChild(yD), wF.addEventListener("click", yJ)
}

function ev() {
	var yQ, yR, yS;

	function yY(aC) {
		return bD.color.qF(yR[aC][0], yR[aC][1], yR[aC][2])
	}

	function ye(g3, g4) {
		return bD.color.yn(yR[g3], yR[g4]), yY(g4)
	}

	function yW() {
		yQ && (yQ.remove(), yQ = null)
	}
	this.show = function(ew, colors, id) {
		0 <= (yS = id) && b1.z.eq(0) && b1.er.yT(0, id), ew = (ew = (ew = (ew = (ew = (ew = (ew = (ew = (ew = (ew = (ew = (ew = ew.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			yR = colors, (yQ = document.createElement("div")).style.position = "fixed", yQ.style.top = "0", yQ.style.left = "0", yQ.style.width = "100%", yQ.style.height = "100%", yQ.style.backgroundColor = bD.color.qH(yR[0][0], yR[0][1], yR[0][
				2], .6), yQ.style.zIndex = "6", yQ.onclick = function(e) {
				e.target === yQ && yW()
			},
			function(ew) {
				var ig, yX = document.createElement("div");
				yX.style.position = "absolute", yX.style.display = "flex", yX.style.flexDirection = "column", yX.style.top = "50%", yX.style.left = "50%", yX.style.backgroundColor = yY(2), ig = a1.a2.iu() ? bD.ta.yZ(i.min) : bD.ta.ub(.4);
				ig = Math.max(ig, 200), yX.style.width = bD.ta.ti(ig), yX.style.height = bD.ta.ti(ig), yX.style.transform = "translate(-50%, -50%)",
					function(yX, ig) {
						var yd = document.createElement("div");
						yd.style.flex = "0 0 10%", yd.style.overflow = "hidden", yd.style.backgroundColor = yY(1), yd.style.color = ye(1, 7), yd.style.font = bD.ta.v9(1, .05 * ig), yd.style.display = "flex", yd.style.alignItems = "center", yd
							.style.justifyContent = "center", yd.innerHTML = L(34), yX.appendChild(yd)
					}(yX, ig),
					function(yX, ew, ig) {
						var yf = document.createElement("div");
						yf.style.flex = "0 0 70%", yf.style.overflowY = "auto", yf.style.overflowX = "hidden", yf.style.whiteSpace = "pre-wrap", yf.style.wordWrap = "break-word", yf.style.padding = bD.ta.ti(.02 * ig), yf.style.backgroundColor =
							yY(2), yf.style.color = ye(2, 8), yf.style.font = bD.ta.v9(0, .07 * ig), yf.innerHTML = ew, yf.innerHTML = "<style>a { color: inherit; }</style>" + yf.innerHTML, yX.appendChild(yf)
					}(yX, ew, ig),
					function(yX, ig) {
						var ov = document.createElement("div"),
							yg = (ov.style.display = "flex", ov.style.flexDirection = "row", ov.style.justifyContent = "space-between", ov.style.alignItems = "stretch", ov.style.backgroundColor = yY(3), ov.style.flex = "1", ov.style.padding = bD
								.ta.ti(.01 * ig), ov.style.gap = bD.ta.ti(.01 * ig), document.createElement("div")),
							yh = (yg.style.flex = "0 0 60%", yg.style.height = "100%", new x(L(35, 0, 0, 1), function() {
								yW()
							}, yY(4), !1)),
							yh = (yh.button.style.width = "100%", yh.button.style.height = "100%", yh.button.style.color = ye(4, 9), yh.button.style.font = bD.ta.v9(1, .05 * ig), yg.appendChild(yh.button), document.createElement("div")),
							yj = (yh.style.flex = "0 0 15%", yh.style.height = "100%", yh.style.backgroundColor = yY(5), document.createElement("div")),
							yk = (yj.style.flex = "1", yj.style.height = "100%", new x(L(36), function(e) {
								return bD.ta.yl(e), yS < 0 || b1.z.eq(0) && (b1.er.yT(1, yS), yS = -1), !0
							}, yY(6), !1));
						yk.button.style.width = "100%", yk.button.style.height = "100%", yk.button.style.color = ye(6, 10), yk.button.style.font = bD.ta.v9(1, .035 * ig), yj.appendChild(yk.button), ov.appendChild(yg), ov.appendChild(yh), ov
							.appendChild(yj), yX.appendChild(ov)
					}(yX, ig), yQ.appendChild(yX)
			}(ew), document.body.appendChild(yQ)
	}
}

function yo(vM, yp) {
	this.tR = [];
	var yq = this.tR;

	function click() {
		for (var aC = 0; aC < yq.length; aC++) yq[aC].textContent = yq[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eT = parseInt(this.name);
		void 0 !== vM.eT && bm.rt.q0(vM.eT, eT), yp && yp(eT)
	}
	for (var yr, fk = vM.vS.length, aC = 0; aC < fk; aC++)(yr = document.createElement("p")).textContent = "⚪ " + vM.vS[aC], yr.style.margin = "0", yr.name = "" + aC, yr.style.cursor = "pointer", yr.style.fontSize = "1em", yr.addEventListener(
		"click", click), yq.push(yr);
	yq[vM.value].textContent = yq[vM.value].textContent.replace("⚪", "🟢")
}

function ys(title, yt, yu) {
	var vr = document.createElement("div"),
		pN = document.createElement("div"),
		pO = document.createElement("div"),
		yv = document.createElement("div"),
		yw = document.createElement("div");
	this.yx = pO, this.yy = yt, vr.className = "fx-page", this.show = function() {
			!1 !== yu ? document.body.appendChild(vr) : (document.body.appendChild(pN), document.body.appendChild(yv))
		}, this.uZ = function() {
			!1 !== yu ? u.removeChild(document.body, vr) : (u.removeChild(document.body, pN), u.removeChild(document.body, yv))
		}, this.z2 = function() {
			var uc = bD.ta.ub(.1),
				ua = bD.ta.ub(.08 + .04 * (i.z3 < 1), .3);
			return {
				uc: uc,
				ua: ua,
				z4: i.k / i.l - uc - ua
			}
		}, this.resize = function(uu) {
			var fk = yt.length,
				z5 = this.z2(),
				uc = z5.uc,
				ua = z5.ua;
			for (pN.style.height = bD.ta.ti(uc), bD.ta.tj(pN, 2), yv.style.top = bD.ta.ti(i.k / i.l - ua), yv.style.height = bD.ta.ti(ua), bD.ta.tj(yv, 8), pO.style.top = bD.ta.ti(uc), pO.style.height = pO.style.maxHeight = bD.ta.ti(z5.z4), pN.style
				.font = bD.ta.v9(0, bD.ta.ub(.02, .15)), yv.style.font = bD.ta.v9(0, bD.ta.ub(.02, .7)), pO.style.font = bD.ta.v9(0, bD.ta.ub(.02, .35)), aC = 1; aC < fk; aC++) bD.ta.tj(yt[aC].button, 4);
			for (var uv = 0, aC = 0; aC < fk; aC++) uv += yt[aC].button.offsetWidth;
			if (uu && uv < yv.offsetWidth)
				for (aC = 0; aC < fk; aC++) yt[aC].button.style.width = (100 * yt[aC].button.offsetWidth / uv).toFixed(2) + "%";
			else
				for (aC = 0; aC < fk; aC++) yt[aC].button.style.width = "auto";
			yv.wA && (yv.scrollLeft = yv.wA), uu || this.resize(!0)
		}, this.z6 = function() {
			var z5 = this.z2(),
				eu = i.l;
			z7.fillStyle = bE.qJ, z7.fillRect(0, eu * z5.uc, i.j, eu * z5.z4)
		}, vr.style.position = "absolute", vr.style.top = "0", vr.style.left = "0", vr.style.width = "100%", vr.style.height = "100%", pN.style.position = "absolute", pN.style.top = "0", pN.style.left = "0", pN.style.width = "100%", pN.style
		.display = "flex", pN.style.backgroundColor = bE.qJ, yv.style.position = "absolute", yv.style.left = "0", yv.style.width = "100%", bD.ta.vx(yv), yw.style.height = yw.style.maxHeight = "100%", pO.style.position = "absolute", pO.style.width =
		"100%", pO.style.backgroundColor = bE.qJ,
		function() {
			for (var aC = 0; aC < yt.length; aC++) yt[aC].button.style.height = "100%", yt[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < yt.length; aC++) yw.appendChild(yt[aC].button);
	pN.appendChild(function() {
		var z1 = document.createElement("h1");
		return z1.textContent = title, z1.style.margin = "auto", z1.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", z1.style.fontFamily = "Arial Black, system-ui", z1
	}()), yv.appendChild(yw), !1 !== yu && (vr.appendChild(pO), vr.appendChild(pN), vr.appendChild(yv))
}

function uV(z8, z9, zA, zB) {
	var self;
	this.uX = document.createElement("span"), (self = this).uX.textContent = z8, self.uX.style.color = bE.qN, self.uX.style.position = "absolute", self.uX.style.font = "inherit", zB ? self.uX.style.bottom = "0.06em" : self.uX.style.top = "0.12em",
		zA ? self.uX.style.left = "0.2em" : self.uX.style.right = "0.2em", self.uX.style.fontSize = "0.6em", self.uX.style.pointerEvents = "none", self.uX.style.whiteSpace = "pre", z9.style.position = "relative", z9.style.overflow = "hidden", z9
		.appendChild(self.uX)
}

function vz(z8, z9, zC, zD, zE) {
	var self;
	this.uX = document.createElement("span"), this.resize = function() {
			this.uX.style.fontSize = ((zD - zC) * z9.offsetHeight).toFixed(1) + "px"
		}, (self = this).uX.textContent = z8, self.uX.style.color = bE.qN, self.uX.style.font = "inherit", self.uX.style.margin = "0.1em 0.6em", self.uX.style.pointerEvents = "none", zE && (self.uX.style.fontWeight = "bold"), self.uX.style
		.whiteSpace = "nowrap", self.uX.style.display = "block", z9.appendChild(self.uX)
}

function zF(zG, zH, zI, zJ) {
	var zK = document.createElement("textarea"),
		zL = (this.e = zK, !0);

	function zQ() {
		zK.select(), document.execCommand("copy")
	}
	this.resize = function() {
			zH && bD.ta.tj(zK, 5)
		}, this.zM = function(ew) {
			zK.value = ew
		}, this.zN = function() {
			return zK.value
		}, this.zO = function() {
			zK.select()
		}, this.clear = function() {
			zK.value = ""
		}, this.zP = function() {
			zL && navigator.clipboard ? (zK.select(), navigator.clipboard.writeText(zK.value).catch(function() {
				zL = !1, zQ()
			})) : zQ()
		}, zK.setAttribute("id", "textArea" + u.z.vP++), zK.setAttribute("autocomplete", "off"), zG && zK.setAttribute("placeholder", zG), zK.style.top = "0", zK.style.left = "0", zK.style.width = "100%", zK.style.height = "100%", zK.style
		.userSelect = "none", zK.style.outline = "none", zK.style.resize = "none", zK.style.border = "none", zK.style.color = bE.qN, zK.style.backgroundColor = bE.qG, zJ ? (zK.style.fontSize = "1em", zK.rows = 6, zK.style.padding = "0.25em") : (zK
			.style.padding = "0.45em", zK.style.fontSize = "1.2em"), zI && zK.addEventListener("input", function(e) {
			zI(e)
		}), zK.addEventListener("focus", function() {
			i.vQ++
		}), zK.addEventListener("blur", function() {
			i.vQ--
		})
}

function dT() {
	this.tr = new zR, this.buffer = new zS, this.rt = new zT, this.z = new zU, this.zV = new zW, this.dv = function() {
		this.buffer.dv(), (new zX).dv(), this.zV.dv(), this.z.zY(), __fx.settings.applyRecommendedTerritorialSettings && (bm.buffer.data[1].value = 3, bm.buffer.data[9].value = 2, bm.buffer.data[11].value = 2, bm.buffer.data[7].value = 1)
	}
}

function zS() {
	function zZ(aC, type, zf, eC) {
		bm.buffer.data.push({
			eT: aC,
			type: type || 0,
			value: zf || 0,
			zf: zf || 0,
			eC: eC || 0
		})
	}

	function za(aC, type, zf, eC) {
		bm.buffer.data.push({
			eT: aC,
			type: type,
			value: zf || "",
			zf: zf || "",
			eC: eC || 0
		})
	}

	function zb(oO) {
		for (var aC = bm.buffer.data.length; aC < oO; aC++) bm.buffer.data.push(null)
	}
	this.data = [], this.dv = function() {
		zZ(0, 1, 0, 5), zZ(1, 1, 1), zZ(2, 0), za(3, 2), zZ(4, 1), za(5, 2, "system-ui", 2), zZ(6, 0), zZ(7, 0, 0), zZ(8, 0), zZ(9, 1, 1), zZ(10, 1), zZ(11, 1, 1), za(12, 2, navigator.language), zZ(13), zZ(14), zZ(15, 0, 1), zZ(16, 0, 3), zb(
			100), za(100, 2), za(101, 2), za(102, 2), za(103, 2), za(104, 2), za(105, 2), za(106, 2), zZ(107), zZ(108), zZ(109), za(110, 2), zZ(111), zZ(112), zZ(113), za(114, 2), zZ(115), za(116, 2), zZ(117, 1), za(118, 2, "", 2), zZ(119, 1, 0,
				1), za(120, 2), zZ(121, 1, ~~(262144 * Math.random())), za(122, 2, "Player " + Math.floor(1e3 * Math.random())), zZ(123), za(124), zZ(125, 1), za(126, 2), zZ(127, 0, 1), zZ(128), zZ(129), zZ(130), zZ(131), zZ(132), za(133, 2), zZ(
				134, 0, 5), za(135, 2), za(136, 2), zZ(137), zZ(138), zZ(139), zZ(140), zZ(141), zZ(142), zZ(143), zZ(144), za(145, 2), zZ(146), zZ(147), za(148, 2), zZ(149), zZ(150, 0, 1), za(151, 2), zZ(152, 0, 5), zZ(153, 1), zZ(154, 1), za(
				155, 2), za(156, 2), zZ(157), zZ(158), zZ(159), zZ(160), za(161, 2), zZ(162, 0, 1024), za(163, 2, "0,0,0"), za(164, 2, "100,100,100"), za(165, 2, "30,30,30"), za(166, 2, "70,70,70"), za(167, 2, "100,100,100"), za(168, 2,
				"85,85,85"), za(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) za(170 + aC, 2, "255,255,255");
		za(174, 2), za(175, 2), zZ(176, 0, 200), zb(180), zZ(180, 0), zZ(181, 0), zZ(182, 0, 1023), za(183, 2), zZ(184, 0, 100), za(185, 2)
	}, this.q0 = function(eT, value) {
		this.data[eT].value = value
	}, this.zc = function(eT, value) {
		this.q0(eT, value);
		var value = String(value),
			fk = value.length;
		5e4 < fk ? console.log("storage value too large: index " + eT + " size " + fk) : (bm.tr.save(eT, value), bm.tr.save(eT, String(this.data[eT].eC), !0))
	}, this.zd = function(eT) {
		return Number(this.data[eT].value)
	}, this.ze = function(eT) {
		return String(this.data[eT].value)
	}
}

function zW() {
	var zg = [];

	function zj(pd) {
		zg.unshift(pd), bm.rt.q0(161, zg.join(";"))
	}

	function fG(pd) {
		for (var zl = zg, fk = zl.length, aC = 0; aC < fk; aC++)
			if (zl[aC] === pd) return zl.splice(aC, 1), bm.rt.q0(161, zl.join(";")), 1
	}
	this.dv = function() {
		var pV = bm.buffer.data[161].value;
		pV.length && (zg = pV.split(";"))
	}, this.get = function() {
		return zg
	}, this.zh = function() {
		return {
			vS: zg,
			value: 0
		}
	}, this.y1 = function(pd) {
		return bD.th.has(zg, pd)
	}, this.zi = function(pd) {
		return fG(pd) ? 0 : (zj(pd), 1)
	}, this.nS = function(pd) {
		fG(pd) && zj(pd)
	}, this.zk = function(eT) {
		eT < zg.length && (zg.splice(eT, 1), bm.rt.q0(161, zg.join(";")))
	}
}

function zR() {
	this.zm = function(eT, eC) {
		return Number(this.zn(eT, eC))
	}, this.zn = function(eT, eC) {
		var gC = null;
		return 0 === a1.id ? a1.zo && (gC = a1.zo.getItem((eC ? "v" : "d") + eT)) : 1 === a1.id ? gC = a1.zp.loadString((eC ? 1e3 : 2e3) + eT) : 2 === a1.id && (gC = a1.zq[(eC ? "v" : "d") + eT]), gC && 0 !== gC.length ? gC : null
	}, this.zr = function(fk, zs) {
		var h = [],
			zt = zs ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zo)
				for (aC = 0; aC < fk; aC++) h.push(a1.zo.getItem(zt + aC))
		} else if (1 === a1.id)
			for (var zu = zs ? 5e3 : 3e3, aC = 0; aC < fk; aC++) h.push(a1.zp.loadString(zu + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fk; aC++) h.push(a1.zq[zt + aC]);
		return h
	}, this.save = function(eT, value, eC) {
		var zv = (eC ? "v" : "d") + eT;
		if (0 === a1.id) {
			if (a1.zo && bm.buffer.data[140].value) try {
				a1.zo.setItem(zv, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.zp.saveString((eC ? 1e3 : 2e3) + eT, value) : 2 === a1.id && (a1.zq[zv] = value, a1.zw.postMessage(zv + " " + value))
	}, this.zx = function(h, zs) {
		var fk = h.length,
			zt = zs ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zo && bm.buffer.data[140].value) try {
				for (aC = 0; aC < fk; aC++) a1.zo.setItem(zt + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var zu = zs ? 5e3 : 3e3, aC = 0; aC < fk; aC++) a1.zp.saveString(zu + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fk; aC++) a1.zq[zt + aC] = h[aC], a1.zw.postMessage(zt + aC + " " + h[aC])
	}
}

function zX() {
	this.dv = function() {
		! function() {
			var data = bm.buffer.data;
			0 === data[2].eC && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].zf = 1);
			0 === data[100].eC && (data[100].value = data[100].zf = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.buffer.data,
			fk = data.length;
		for (aC = 0; aC < fk; aC++) {
			var a00 = bm.tr.zm(aC, !0);
			data[aC] && data[aC].eC === a00 && (null === (a00 = bm.tr.zn(aC)) ? data[aC].value = data[aC].zf : 2 === data[aC].type ? data[aC].value = a00 : (a00 = Number(a00), isNaN(a00) ? data[aC].value = data[aC].zf : data[aC].value = a00))
		}
	}
}

function zU() {
	function a05(h) {
		if (0 === h.length) bm.rt.q0(116, "");
		else {
			for (var a09 = h[0], aC = 1; aC < h.length; aC++) a09 += ";" + h[aC];
			bm.rt.q0(116, a09)
		}
	}
	this.a02 = function() {
		bm.buffer.data[110].value.length && (bm.buffer.data[106].value = bm.buffer.data[110].value, bm.rt.q0(110, ""), this.a03())
	}, this.a03 = function() {
		var h = bm.buffer.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.buffer.data[106].value), h.unshift(bm.buffer.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var a04 = [], aC = 0; aC < h.length; aC += 2) a04.push(h[aC]);
		a05(h), bm.buffer.data[117].value = 0, bm.buffer.data[117].vS = a04
	}, this.a06 = function(eT) {
		bm.buffer.data[117].vS.splice(eT, 1), bm.buffer.data[117].value = Math.min(eT, bm.buffer.data[117].vS.length - 1);
		var h = bm.buffer.data[116].value.split(";");
		h.splice(2 * eT, 2), a05(h)
	}, this.a07 = function(pd, password) {
		var h = bm.buffer.data[116].value.split(";");
		h.length % 2 == 1 && h.pop();
		for (var aC = 0; aC < h.length; aC += 2)
			if (h[aC] === pd) return h[aC + 1] = password, void a05(h);
		h.push(pd, password), a05(h)
	}, this.a08 = function(eT) {
		var h = bm.buffer.data[116].value.split(";");
		return h.length < 2 * (eT + 1) ? null : {
			pd: h[2 * eT],
			password: h[2 * eT + 1]
		}
	}, this.a0A = function() {
		var gC = bO.it(bm.buffer.data[121].value, -1, 262143);
		return gC = -1 === gC ? ~~(262144 * Math.random()) : gC
	}, this.zY = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var a0B, pV = h[aC].trim();
			0 !== pV.length && (a0B = 0 <= (a0B = pV.indexOf("=")) ? pV.substring(0, a0B) : pV, document.cookie = a0B + "=;expires=0;path=/", document.cookie = a0B + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = a0B +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function zT() {
	this.q0 = function(eT, value) {
		2 !== bm.buffer.data[eT].type && (value = Math.floor(value)), bm.buffer.data[eT].value !== value && (bm.buffer.zc(eT, value), 0 === eT ? (u.y(), bA.dv(), u.v(2)) : 1 === eT ? i.e5(1) : 2 === eT ? i.e5(0) : 5 === eT && (bD.ta.a0C(), i.e5(
			0)))
	}, this.a0D = function() {
		for (var data = bm.buffer.data, aC = 0; aC < 100; aC++) data[aC] && bm.buffer.zc(aC, data[aC].zf);
		bD.ta.a0C(), i.e5(1)
	}, this.a0E = function() {
		for (var data = bm.buffer.data, aC = 0; aC < data.length; aC++) data[aC] && bm.buffer.q0(aC, data[aC].zf)
	}, this.a0F = function() {
		for (var g4 = bm.buffer, aC = 128; aC < 135; aC++) g4.zc(aC, g4.data[aC].zf)
	}, this.a0G = function(data) {
		bm.rt.q0(109, data.vi), bm.rt.q0(107, data.a0H), bm.rt.q0(108, data.a0I), bm.rt.q0(112, data.a0J), bm.rt.q0(111, data.a0K), bm.rt.q0(113, data.a0L), bm.rt.q0(135, data.a0M), bm.rt.q0(136, data.a0N), bm.rt.q0(137, data.a0O), bm.rt.q0(138,
			data.a0P), bm.rt.q0(139, data.a0Q), bm.rt.q0(141, data.a0R), bm.rt.q0(142, data.a0S), bm.rt.q0(143, data.a0T), bm.rt.q0(144, data.a0U)
	}
}

function cD() {
	this.fB = new a0V, this.a0W = new a0X, this.a0Y = new a0Z, this.dv = function() {
		this.fB.dv()
	}
}

function a0X() {
	this.a0a = function(size) {
		for (var a0b = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0b.sd(16)));
		return h.join("")
	}, this.a0c = function(pV) {
		return 20 < (pV = pV.trim()).length ? pV.substring(0, 20) : pV
	}
}

function a0V() {
	var a0d = new Uint8Array(78);
	this.dv = function() {
		var aC;
		for (a0d[50] = 37, aC = 0; aC < 10; aC++) a0d[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) a0d[aC + 20] = aC + 11, a0d[aC + 52] = aC + 38
	}, this.a0e = function(pV) {
		return pV || (console.log("validateString error: " + pV), pV = ""), pV.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a0f = function(pV, size) {
		if ((pV = this.a0e(pV)).length > size) return pV.substring(0, size);
		for (; pV.length < size;) pV = "-" + pV;
		return pV
	}, this.a0g = function(pV) {
		for (var a0h = a0d, fk = pV.length, h = new Uint8Array(fk), aC = 0; aC < fk; aC++) h[aC] = a0h[pV.charCodeAt(aC) - 45];
		return h
	}, this.a0i = function(a0j) {
		bG.a8(6 * a0j.length), this.a0k(a0j), bK.dv(bG.aD)
	}, this.a0k = function(a0j) {
		for (var fk = a0j.length, j = bG, aC = 0; aC < fk; aC++) j.a9(6, a0j[aC])
	}, this.a0l = function(pV) {
		this.a0k(this.a0g(pV))
	}, this.a0m = function(pV, size) {
		this.a0k(this.a0g(this.a0f(pV, size)))
	}, this.fC = function(pV, size) {
		for (var h = this.a0g(this.a0f(pV, size)), gC = 0, oI = 1, aC = h.length - 1; 0 <= aC; aC--) gC += oI * h[aC], oI *= 64;
		return gC
	}
}

function a0Z() {
	this.a0n = function(a0o) {
		for (var a0b = bK, size = a0b.sd(a0o), a0p = 7 + 9 * a0b.sd(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0b.sd(a0p)));
		return h.join("")
	}
}

function cI() {
	var v1, v2, a0q, a0r, a0s, a0t, a0u, a0v, a0w, a0x;

	function a0z() {
		var a12 = aE.a12;
		for (a0w = a12; a0w < aE.fh; a0w++) a0y();
		for (a0w = aE.i9 ? aE.l3 : 0; a0w < a12; a0w++) {
			if (!a13()) {
				for (var g4 = aE.a17 = a0w; g4 < a12; g4++) a0w = g4, a0y();
				return
			}
			a16(a0t + v1 * a0s + bO.gB(a0s, 2), a0u + v2 * a0s + bO.gB(a0s, 2))
		}
	}

	function a1Z(player) {
		for (var jb = ah.jb, jd = ah.jd, jc = ah.jc, je = ah.je, ft = jd[player]; ft <= je[player]; ft++)
			for (var fr = jb[player]; fr <= jc[player]; fr++) {
				var fO = ad.a1a(fr, ft);
				ad.hK(fO) && (ad.kE(fO) ? ad.hF(fO, player) : ad.a1b(fO, player))
			}
	}

	function a1Y(h, w1, w2) {
		var el = h[w1];
		h[w1] = h[w2], h[w2] = el
	}

	function a13() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (v1 = bO.gB(a0q * az.random(), az.value(100)), v2 = bO.gB(a0r * az.random(), az.value(100)), a1g()) return 1;
			return
		}() || function() {
			var j5, j8, g3, a15, g4, a14;
			for (j5 = bO.gB(a0q * az.random(), az.value(100)), j8 = bO.gB(a0r * az.random(), az.value(100)), g3 = 40; 1 <= g3; g3--)
				for (a15 = a0r - g3; 0 <= a15; a15 -= 40)
					for (v2 = (a15 + j8) % a0r, g4 = 40; 1 <= g4; g4--)
						for (a14 = a0q - g4; 0 <= a14; a14 -= 40)
							if (v1 = (a14 + j5) % a0q, a1g()) return 1;
			return
		}()
	}

	function a1g() {
		for (var hI, a1i, gap = bO.gB(a0s - a0v, 2), a1j = a0u + v2 * a0s + gap, a1k = a0t + v1 * a0s + gap, a1h = a1j + a0v - 1; a1j <= a1h; a1h--)
			for (a1i = a1k + a0v - 1; a1k <= a1i; a1i--)
				if (hI = ad.a1a(a1i, a1h), !ad.ff(hI) || ad.kE(hI)) return;
		return 1
	}

	function a16(a14, a15) {
		a0y(), a1l(a14 - 2, a15 - 2)
	}

	function a0y() {
		ah.nf[a0w] = 0, ah.hY[a0w] = ah.a1W[a0w] = 0, ah.hC[a0w] = [], ah.hQ[a0w] = [], ah.hR[a0w] = [], ah.g9[a0w] = [], ah.jb[a0w] = ah.jd[a0w] = ah.jc[a0w] = ah.je[a0w] = 0
	}

	function a1l(a14, a15) {
		var hI, aC, a1m, a1n;
		for (ah.nf[a0w] = 1, ah.jb[a0w] = a14 + 10, ah.jd[a0w] = a15 + 10, ah.je[a0w] = ah.jc[a0w] = 0, a1m = a14; a1m < a14 + 4; a1m++)
			for (a1n = a15; a1n < a15 + 4; a1n++)(a14 < a1m && a1m < a14 + 3 || a15 < a1n && a1n < a15 + 3) && (hI = ad.a1a(a1m, a1n), ad.ff(hI)) && (ah.jb[a0w] = Math.min(a1m, ah.jb[a0w]), ah.jc[a0w] = Math.max(a1m, ah.jc[a0w]), ah.jd[a0w] = Math
				.min(a1n, ah.jd[a0w]), ah.je[a0w] = Math.max(a1n, ah.je[a0w]), a0x[ah.hY[a0w]] = hI, ah.hY[a0w]++, ad.a1b(hI, a0w));
		for (ah.a1W[a0w] = ah.hY[a0w], aC = ah.hY[a0w] - 1; 0 <= aC; aC--) ad.a1o(a0x[aC], a0w) ? (ad.hF(a0x[aC], a0w), ah.hQ[a0w].push(a0x[aC])) : ad.a1p(a0x[aC]) ? (ad.hF(a0x[aC], a0w), ah.hR[a0w].push(a0x[aC])) : ad.a1q(a0x[aC]) && (ad.hF(a0x[aC],
			a0w), ah.g9[a0w].push(a0x[aC]))
	}
	this.dv = function() {
		if (a0x = new Array(12), a0v = 6, a0s = 10, a0q = bO.gB(bV.fv, a0s), a0r = bO.gB(bV.fw, a0s), a0t = bO.gB(bV.fv - a0s * a0q, 2), a0u = bO.gB(bV.fw - a0s * a0r, 2), aE.i9)
			for (var aC = 0; aC < aE.l3; aC++) a0w = aC, a0y(), ah.nf[a0w] = 1;
		(0 === aE.data.spawningType ? a0z : 1 === aE.data.spawningType ? (a0z(), function() {
			var a18 = aE.a19;
			aE.a1A || a18++;
			if (!(a18 < 3)) {
				for (var data = aE.data, kJ = (aE.i9 ? aE.l3 : 0) + data.teamPlayerCount[0], oO = aE.a17, a1B = new Uint32Array(a18), a1C = new Uint32Array(a18), a1D = new Uint16Array(a18), a1E = new Uint16Array(a18), fi = bj.fi, jb = ah
						.jb, jd = ah.jd, jc = ah.jc, je = ah.je, gP = bR.gP, gQ = bR.gQ, aC = kJ; aC < oO; aC++) gP[aC] = jb[aC] + jc[aC] >> 1, gQ[aC] = jd[aC] + je[aC] >> 1;
				for (aC = kJ; aC < oO; aC++) {
					var id = fi[aC];
					a1B[id] += gP[aC], a1C[id] += gQ[aC]
				}
				var lQ = bj.lQ;
				for (aC = 1; aC < a18; aC++) {
					var hD = Math.max(data.teamPlayerCount[lQ[aC]], 1);
					a1D[aC] = bO.gB(a1B[aC], hD), a1E[aC] = bO.gB(a1C[aC], hD)
				}
				var a1F = bj.a1F,
					a1G = bj.a1G,
					a1H = bj.a1H,
					gO = bR.gO;
				for (aC = 0; aC < 512; aC++) gO[aC] = aC;
				for (var eS = 0; eS < 2 + (4 <= a18); eS++)
					for (aC = kJ; aC < oO; aC++) {
						for (var iD = aC, a1I = gO[iD], a1J = 1, g0 = bO.a1K(gP[a1I] - a1D[1], gQ[a1I] - a1E[1]), g3 = 2; g3 < a18; g3++) {
							var a1L = bO.a1K(gP[a1I] - a1D[g3], gQ[a1I] - a1E[g3]);
							a1L < g0 && (g0 = a1L, a1J = g3)
						}
						var a1M = fi[iD];
						if (a1J !== a1M) {
							if (2 === eS && 4 <= a18) {
								var a1N = Math.max((a1J + 1) % a18, 1),
									a1O = bO.a1K(gP[a1I] - a1D[a1N], gQ[a1I] - a1E[a1N]);
								for (g3 = 1; g3 < a18; g3++) a1L = bO.a1K(gP[a1I] - a1D[g3], gQ[a1I] - a1E[g3]), g0 < a1L && a1L < a1O && (a1O = a1L, a1N = g3);
								a1N !== a1M && bO.a1K(a1D[a1M] - a1D[a1N], a1E[a1M] - a1E[a1N]) < bO.a1K(a1D[a1M] - a1D[a1J], a1E[a1M] - a1E[a1J]) && (a1J = a1N)
							}
							var a1P = lQ[a1J],
								a1Q = a1G[a1P] + (aE.i9 ? 0 : a1H[a1P]),
								lg = a1F[a1Q],
								a1R = gO[lg],
								a1S = a1G[a1P + 1];
							g0 = bO.a1K(gP[a1R] - a1D[a1M], gQ[a1R] - a1E[a1M]);
							for (var eu = a1Q + 1; eu < a1S; eu++) {
								var a1T = a1F[eu],
									a1U = gO[a1T];
								(a1L = bO.a1K(gP[a1U] - a1D[a1M], gQ[a1U] - a1E[a1M])) < g0 && (g0 = a1L, lg = a1T)
							}
							lg < kJ || oO <= lg || (a1R = gO[lg], a1B[a1M] += gP[a1R] - gP[a1I], a1C[a1M] += gQ[a1R] - gQ[a1I], a1B[a1J] += gP[a1I] - gP[a1R], a1C[a1J] += gQ[a1I] - gQ[a1R], hD = data.teamPlayerCount[lQ[a1M]], a1D[a1M] =
								bO.gB(a1B[a1M], hD), a1E[a1M] = bO.gB(a1C[a1M], hD), hD = data.teamPlayerCount[a1P], a1D[a1J] = bO.gB(a1B[a1J], hD), a1E[a1J] = bO.gB(a1C[a1J], hD), gO[iD] = a1R, gO[lg] = a1I)
						}
					}! function() {
						for (var gO = bR.gO, jb = ah.jb, jd = ah.jd, jc = ah.jc, je = ah.je, hY = ah.hY, a1W = ah.a1W, hQ = ah.hQ, hR = ah.hR, g9 = ah.g9, aC = 0; aC < 512; aC++) {
							var a1X = gO[aC];
							if (a1X !== aC) {
								a1Y(jb, aC, a1X), a1Y(jd, aC, a1X), a1Y(jc, aC, a1X), a1Y(je, aC, a1X), a1Y(hY, aC, a1X), a1Y(a1W, aC, a1X), a1Y(hQ, aC, a1X), a1Y(hR, aC, a1X), a1Y(g9, aC, a1X), a1Z(aC), a1Z(a1X), gO[aC] = aC;
								for (var k = a1X, hJ = gO[k]; hJ !== aC;) hJ = gO[k = hJ];
								gO[k] = a1X
							}
						}
					}()
			}
		}) : function() {
			var a12 = aE.a12;
			for (a0w = a12; a0w < aE.fh; a0w++) a0y();
			for (a0w = aE.i9 ? aE.l3 : 0; a0w < a12; a0w++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							a14 = spawningData[2 * a0w] + 1,
							spawningData = spawningData[2 * a0w + 1] + 1;
						if (3 < a14 && a14 < bV.fv - 5 && 3 < spawningData && spawningData < bV.fw - 5 && ad.ff(ad.a1a(a14, spawningData)) && function(a14, a15) {
								var hI, a1i, a1h;
								for (a1h = a15; a15 - 6 < a1h; a1h--)
									for (a1i = a14; a14 - 6 < a1i; a1i--)
										if (hI = ad.a1a(a1i, a1h), ad.kE(hI)) return;
								return 1
							}(a14 + 3, spawningData + 3)) return a16(a14 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a13()) {
						for (var g4 = aE.a17 = a0w; g4 < a12; g4++) a0w = g4, a0y();
						return
					}
					var a14 = a0t + v1 * a0s + bO.gB(a0s, 2),
						a15 = a0u + v2 * a0s + bO.gB(a0s, 2);
					a16(a14, a15)
				}
		})(), bg.nb[7] = ah.hY[aE.fU]
	}, this.a1r = function(kC, a1s, a1t) {
		var aC, a14, a15, hI, v1, v2;
		for (a0w = kC, aC = 0; aC < 20; aC++)
			for (a14 = a1s + aC; a1s - aC <= a14; a14--)
				for (a15 = a1t + aC; a1t - aC <= a15; a15--)
					if ((a14 === a1s + aC || a14 === a1s - aC || a15 === a1t + aC || a15 === a1t - aC) && 3 < a14 && a14 < bV.fv - 5 && 3 < a15 && a15 < bV.fw - 5 && ad.ff(ad.a1a(a14, a15)) && function(a14, a15) {
							var hI, a1i, a1h;
							for (a1h = a15; a15 - 6 < a1h; a1h--)
								for (a1i = a14; a14 - 6 < a1i; a1i--)
									if (hI = ad.a1a(a1i, a1h), ad.kE(hI) && !ad.a1z(a0w, hI)) return;
							return 1
						}(a14 + 3, a15 + 3)) {
						if (0 < ah.hY[a0w]) {
							for (v2 = v1 = hI = void 0, v1 = ah.jc[a0w]; v1 >= ah.jb[a0w]; v1--)
								for (v2 = ah.je[a0w]; v2 >= ah.jd[a0w]; v2--) hI = 4 * (v2 * bV.fv + v1), ad.a1w(a0w, hI) && (ad.a1x(hI), ah.hY[a0w]--);
							a0y()
						}
						return a1l(a14 - 1, a15 - 1), !0
					} return !1
	}, this.a1y = function(kC) {
		a0w = kC, a13() ? a16(a0t + v1 * a0s + bO.gB(a0s, 2), a0u + v2 * a0s + bO.gB(a0s, 2)) : a0y()
	}
}

function a20() {
	au.a21(), z7.setTransform(iw, 0, 0, iw, 0, 0), z7.imageSmoothingEnabled = iw < 3, z7.drawImage(bV.a22, aT.a23(), aT.a24()), bS.a25.z6(), z7.drawImage(a26, aT.a23(), aT.a24()), au.z6(), bQ.z6(), ag.z6(), (aE.o9 ? (bk.z6(), bF) : (aO.z6(), aW.z6(),
		aS.z6(), bF.z6(), ax.z6(), aX.z6(), aT.z6(), aR.z6(), bk.z6(), aV.z6(), aQ.z6(), aN.z6(), aM.z6(), aY.z6(), bh.z6(), aw)).z6(), u.z6()
}

function a27(p3, j, k) {
	p3.clearRect(0, 0, j, k), p3.fillStyle = bE.qK, p3.fillRect(0, 0, j, k)
}

function a28(p3, j, k, a29) {
	p3.fillStyle = bE.qN, p3.fillRect(0, 0, j, a29), p3.fillRect(0, 0, a29, k), p3.fillRect(j - a29, 0, a29, k), p3.fillRect(0, k - a29, j, a29)
}

function a2A(p3, fr, ft, ig, a29, hI, a2B) {
	p3.fillStyle = bE.qN;
	var hI = Math.floor(ig * hI),
		vp = (hI += (hI - a29) % 2, Math.floor((hI - a29) / 2)),
		ig = Math.floor((ig - hI) / 2);
	p3.fillRect(fr + ig, ft + ig + vp, hI, a29), a2B && p3.fillRect(fr + ig + vp, ft + ig, a29, hI)
}

function a2D() {
	this.dv = function() {
		8 === aE.lL && aO.a2E()
	}, this.a2F = function(a2G) {
		var elo = aE.data.elo,
			kI = (elo[a2G] - elo[1 - a2G]) / 10,
			kI = 8 / (1 + Math.pow(2, kI / 32)),
			kI = Math.floor(10 * kI + .5),
			a2I = elo[a2G] + kI,
			a2J = this.a2K(a2I),
			elo = this.a2K(elo[1 - a2G] - kI),
			kI = (0 === a2G ? aO.a2M(a2J, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.a2M(elo, a2J, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a2I * bO.sqrt(a2I) >> 8),
			elo = ((1 + aE.a2P) * kI / 100).toFixed(2);
		a2G !== aE.fU || aE.hu ? aO.a2Q(640, L(38, [ah.a2R[a2G], elo]), 40, 0, bE.qN, bE.qK, -1, !1) : aO.a2Q(640, L(37, [elo]), 40, 0, bE.qN, bE.qK, -1, !1)
	}, this.a2K = function(elo) {
		return 16e3 === (elo = bO.it(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function co() {
	this.pr = new a2S, this.a2T = new a2U
}

function a2U() {
	this.iU = !1;
	this.a2Y = [], this.a2Z = 100;
	var o6, o7, gap, ig, a2V, a2X, a2a = 0,
		a2b = new Array(9),
		a2c = [],
		a2d = [],
		a2e = 0,
		a2f = 0,
		a2g = 0,
		a2h = 0;

	function a2t() {
		a2b.sort(function(g3, g4) {
			return g4.l8 - g3.l8
		});
		for (var pV = "" + a2b[0].sE, aC = 1; aC < 9; aC++) pV += "," + a2b[aC].sE;
		for (aC = 0; aC < 9; aC++) pV += "," + a2b[aC].l8;
		bm.buffer.zc(120, pV)
	}
	this.dv = function() {
		for (var a2i = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a2i.length; aC++) {
			var color = 6 === a2i[aC] ? bE.qn : bE.qL;
			this.a2Y.push(bD.canvas.a2j(ac.get(3), a2i[aC], color))
		}
		for (aC = 0; aC < ak.pr.a2k; aC++) a2d.push(ak.pr.a2l - ak.pr.a2k + aC);
		for (aC = 0; aC < ak.pr.a2m; aC++) a2d.push(ak.pr.a2n + aC);
		var a2o = ak.pr.a2p(bN.a2o);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a2o.slice(), aC = 0; aC < a2o.length; aC++) a2d.push(a2o[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a2b[q] = {
						sE: isNaN(qcode) ? 1015 + q : qcode,
						l8: 0
					}
				} else {
					var aC, h = bm.buffer.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) a2b[aC] = {
							sE: 1015 + aC,
							l8: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var gC = parseInt(h[aC]),
								eu = (gC = 0 <= gC && gC < ak.pr.a2l ? gC : 0, parseInt(h[aC + 9]));
							eu = 0 <= eu && eu < 1e3 ? eu : 0, a2b[aC] = {
								sE: gC,
								l8: eu
							}
						}
				}
		}()
	}, this.show = function(mI, mJ, a2u) {
		var aC;
		if (a2e = mI, a2f = mJ, a2a = a2u || 0, this.iU = !0, a2c = [], 0 === a2a)
			for (aC = 0; aC < 9; aC++) a2c.push(a2b[aC].sE);
		else {
			var g4 = 49 * a2a,
				a2u = g4 - 49;
			for (a2u >= a2d.length && (a2a = 1, a2u = 0, g4 = 49), aC = a2u = (g4 = Math.min(g4, a2d.length)) - 49; aC < g4; aC++) a2c.push(a2d[aC])
		}
		a2c.push(1024);
		a2u = a2c.length, ig = Math.floor((a1.a2.iu() ? .075 : .0468) * i.iv), gap = Math.floor(ig / 3), (a2g = 10 * (a2V = ig + gap)) > i.j && (a2g = i.j, gap = (a2V = a2g / 10) - (ig = 3 * a2V / 4)), a2X = bO.gB(a2u, 10) + !!(a2u % 10), (a2h =
			a2X * a2V) > i.k && (a2h = i.k, gap = (a2V = a2h / a2X) - (ig = 3 * a2V / 4)), a2u = .5 * gap;
		o6 = Math.min(Math.max(mI - .5 * a2g + a2u, a2u), i.j - a2g + a2u), o7 = Math.min(Math.max(mJ - .5 * a2h + a2u, a2u), i.k - a2h + a2u)
	}, this.hy = function(mI, mJ, player) {
		if (!this.iU) return !1;
		if (this.a2w(mI, mJ)) {
			mI = bO.it(bO.gB(mI - o6 + .5 * gap, a2V), 0, 9);
			if ((mI += 10 * bO.it(bO.gB(mJ - o7 + .5 * gap, a2V), 0, 9)) >= a2c.length) return aM.uZ(), !0;
			mJ = a2c[mI];
			if (1024 === mJ) return this.show(a2e, a2f, a2a + 1), !0;
			! function(sE) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) a2b[aC].l8 = Math.floor(.99 * a2b[aC].l8);
					for (aC = 0; aC < 9; aC++)
						if (sE === a2b[aC].sE) return a2b[aC].l8 = Math.min(a2b[aC].l8 + 30, 999), a2t();
					a2b.splice(5, 0, {
						sE: sE,
						l8: Math.max(a2b[4].l8, 30)
					}), a2b.pop(), a2t()
				}
			}(mJ), player === aE.fU ? bB.iB.sD(mJ) : bB.h6.sS(mJ, player)
		}
		return aM.uZ(), !0
	}, this.a2w = function(mI, mJ) {
		return !(mI < o6 - .5 * gap || mJ < o7 - .5 * gap || o6 + a2g - .5 * gap <= mI || o7 + a2h - .5 * gap <= mJ)
	}, this.z6 = function() {
		for (var fxSmooth = __fx.utils.clipRounded(z7, o6 - .5 * gap, o7 - .5 * gap, a2g, a2h), ia = (z7.fillStyle = bE.qK, z7.fillRect(o6 - .5 * gap, o7 - .5 * gap, a2g, a2h), fxSmooth && z7.restore(), .5 * bf.a2x), fk = (z7.lineWidth = bf.a2x,
				z7.strokeStyle = z7.fillStyle = bE.qN, fxSmooth ? __fx.utils.strokeRounded(z7, o6 - .5 * gap, o7 - .5 * gap, a2g, a2h, bf.a2x) : z7.strokeRect(o6 - .5 * gap + ia, o7 - .5 * gap + ia, a2g - 2 * ia, a2h - 2 * ia), z7
				.imageSmoothingEnabled = !0, a2c.length), aC = 0; aC < fk; aC++) this.a2y(a2c[aC], z7, o6 + aC % 10 * a2V, o7 + bO.gB(aC, 10) * a2V, ig);
		z7.imageSmoothingEnabled = !1
	}, this.a2y = function(sE, im, fr, ft, ig) {
		var fO;
		sE >= 1024 - ak.pr.a2k ? (fO = ig / this.a2Z, im.setTransform(fO, 0, 0, fO, fr, ft), im.drawImage(this.a2Y[sE - 1024 + ak.pr.a2k], 0, 0), im.setTransform(1, 0, 0, 1, 0, 0)) : (bD.ta.textAlign(im, 1), bD.ta.textBaseline(im, 1), im.font =
			bD.ta.v9(0, .89 * ig), im.fillText(ak.pr.a2z(sE), fr + .5 * ig, ft + (.35 - bD.ta.a30 + .56) * ig))
	}
}

function a2S() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a2k = 13, this.a2m = this.emojis.length, this.a2n = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a2n, this.a2l = 1024, this.a31 = this.emojis.indexOf(
		"💀"), this.a32 = this.a31 + 1, this.a33 = this.emojis.indexOf("🥇"), this.a34 = this.emojis.indexOf("😊"), this.a2z = function(gC) {
		return gC < this.a2n ? String.fromCharCode(55356, 56806 + bO.gB(gC, 26), 55356, 56806 + gC % 26) : this.emojis[Math.min(gC - this.a2n, this.a2m - 1)]
	}, this.a2p = function(pV) {
		for (var fk = pV.length - 2, h = [], aC = 0; aC < fk; aC++) {
			var a35 = pV.charCodeAt(aC) - 56806,
				a36 = pV.charCodeAt(aC + 2) - 56806;
			0 <= a35 && a35 < 26 && 0 <= a36 && a36 < 26 && (h.push(26 * a35 + a36), aC += 3)
		}
		return h
	}, this.a37 = function(gC) {
		return gC < this.a2n
	}, this.a38 = function(gC) {
		return gC >= 1024 - this.a2k
	}, this.a39 = function(gC) {
		return gC >= this.a2n && gC < this.a2n + this.a32
	}
}

function cC() {
	this.fB = new a3A, this.a0W = new a3B, this.a0Y = new a3C, this.dv = function() {
		this.fB.dv()
	}
}

function a3B() {
	this.a0l = function(pV) {
		for (var fk = pV.length, j = bG, aC = 0; aC < fk; aC++) j.a9(16, pV.charCodeAt(aC))
	}
}

function a3A() {
	var a3D = new Uint8Array(64);
	this.dv = function() {
		var aC;
		for (a3D[0] = 45, a3D[37] = 95, aC = 0; aC < 10; aC++) a3D[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a3D[aC + 11] = 65 + aC, a3D[aC + 38] = 97 + aC
	}, this.vm = function(a3E) {
		for (var a0b = bK, a0j = new Uint8Array(a3E), aC = 0; aC < a3E; aC++) a0j[aC] = a0b.sd(6);
		return a0j
	}, this.vl = function(a0j) {
		for (var fk = a0j.length, a3F = a3D, h = [], aC = 0; aC < fk; aC++) h.push(String.fromCharCode(a3F[a0j[aC]]));
		return h.join("")
	}, this.a3G = function(value, a3H) {
		for (var a3F = a3D, h = [], aC = 0; aC < a3H; aC++) h.push(String.fromCharCode(a3F[value >> 6 * (a3H - 1 - aC) & 63]));
		return h.join("")
	}
}

function cK() {
	var a3I, a3J, a3K;
	a3I = [32, 65, 191, 913, 931], a3J = [64, 127, 688, 930, 1155], a3K = new Array(a3I.length + 1);
	for (var aC = 0; aC < a3K.length; aC++) {
		a3K[aC] = 0;
		for (var g3 = aC - 1; 0 <= g3; g3--) a3K[aC] += a3J[g3] - a3I[g3]
	}

	function a3Q(eu) {
		for (var aC = a3I.length - 1; 0 <= aC; aC--)
			if (eu >= a3I[aC] && eu < a3J[aC]) return aC;
		return -1
	}
	this.a0c = function(pV) {
		return 0 !== (pV = pV.trim()).indexOf("Bot ") && 0 !== pV.indexOf("[Bot] ") && function(pV, a3N, a3O) {
			var fk = (pV = pV.trim()).length;
			if (fk < a3N || a3O < fk) return !1;
			for (var eu, a3P = 0, aC = 0; aC < fk; aC++)
				if (eu = pV.charCodeAt(aC), a3P += 65 <= eu && eu <= 90 || 1040 <= eu && eu <= 1071 ? 1 : 0, -1 === a3Q(eu)) return !1;
			if (3 < a3P && a3P > Math.floor(fk / 2)) return !1;
			return !0
		}(pV, 3, 20)
	}, this.a3R = function(pV) {
		for (var fk = (pV = pV.trim()).length, h = [], aC = 0; aC < fk; aC++) {
			var eu, hI = a3Q(eu = pV.charCodeAt(aC));
			h.push(a3K[hI] + eu - a3I[hI])
		}
		return h
	}, this.a0n = function(h) {
		for (var eu, g4, pV = "", fk = h.length, aC = 0; aC < fk; aC++)
			for (g4 = 1; g4 < a3K.length; g4++)
				if (h[aC] < a3K[g4]) {
					eu = a3I[g4 - 1] + h[aC] - a3K[g4 - 1], pV += String.fromCharCode(eu);
					break
				} return pV
	}, this.a3S = function(pV) {
		for (var h = this.a3R(pV), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a3T = function(pV) {
		for (var h = new Array(Math.floor(pV.length / 3)), aC = 0; aC < pV.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(pV.substring(aC, aC + 3));
		return this.a0n(h)
	}, this.a3U = function(pV) {
		for (var gC, h = [pV.length], aC = 0; aC < pV.length; aC++) h[aC] = pV.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < pV.length; aC++) aC === pV.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (gC = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(gC + (gC < 26 ? 65 : 71)), aC++);
		return result
	}, this.a3V = function(pV) {
		for (var eu, result = "", aC = 0; aC < pV.length; aC++) 48 <= (eu = pV.charCodeAt(aC)) && eu < 58 ? result += String.fromCharCode(eu) : 65 <= eu && eu < 75 ? result += "0" + (eu - 65).toString() : 75 <= eu && eu < 91 ? result += (eu - 65)
			.toString() : 97 <= eu && eu < 123 && (result += (eu - 71).toString());
		return result
	}, this.a3W = function(pV) {
		for (var fk = pV.length, h = [], aC = 0; aC < fk; aC++)(eu = pV.charCodeAt(aC)) < 58 ? h.push(pV[aC]) : (eu -= eu < 91 ? 65 : 71, h.push(String(bO.gB(eu, 10))), h.push(String(eu - 10 * bO.gB(eu, 10))));
		var fk = h.length - 2,
			eu = 0,
			a0j = [];
		for (aC = 0; aC < fk; aC += 3) a0j[eu++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return a0j
	}, this.a3X = function() {
		for (var eS, a3Y = "", aC = 0; aC < 6; aC++) eS = 48 + az.random() % 36, eS += 58 <= eS ? 39 : 0, a3Y += String.fromCharCode(eS);
		return a3Y
	}
}

function a3C() {
	this.a3R = function(pV, a0o, a3Z) {
		for (var a3a = [], fk = pV.length, max = 0, aC = 0; aC < fk; aC++) {
			var gC = pV.charCodeAt(aC);
			a3a.push(gC), max = Math.max(max, gC)
		}
		var a0p = max < 128 ? 7 : 16;
		for (a3Z.a9(a0o, fk), a3Z.a9(1, +(16 == a0p)), aC = 0; aC < fk; aC++) a3Z.a9(a0p, a3a[aC])
	}
}

function dL() {
	this.a3b = new a3c, this.result = new a3d, this.a3e = new a3f, this.nG = new a3g, this.a3h = new a3i, this.a3j = new a3k, this.dv = function() {
		this.result.dv()
	}
}

function a3f() {
	this.a3l = function() {
		for (var fk = am.lZ, xC = am.le, a3m = [], aC = 0; aC < fk; aC++) {
			var hI = xC[aC];
			bD.h6.a3n(hI) && a3m.push(hI)
		}
		return a3m
	}, this.a3o = function() {
		if (0 === bj.lQ[aE.a3p]) return this.a3q();
		bk.l4(aE.a3p);
		for (var a3m = [], fk = bR.gF[0], gO = bR.gO, aC = 0; aC < fk; aC++) {
			var hI = gO[aC];
			bD.h6.a3n(hI) && a3m.push(hI)
		}
		return a3m
	}, this.a3q = function() {
		var hI = me[0];
		return bD.h6.a3n(hI) ? [hI] : []
	}, this.a3r = function(a3m) {
		for (var fk = a3m.length, el = 0, hY = ah.hY, aC = 0; aC < fk; aC++) el += hY[a3m[aC]];
		return el
	}
}

function a3c() {
	function a3t() {
		if (2 === aE.a3x) return 1;
		ax.a3y(), aE.a3x = 2, aE.a3z = aE.a40
	}

	function a3v() {
		bU.a3h.a41(), aY.show(1 === aE.a42, !1, 2 === aE.a42), bU.result.a41(), bU.a3j.ep(), bU.nG.ep(), bU.nG.a43(), aO.a44(!0), aO.a45(247), aO.a45(956), aO.a45(957), aW.nR(!0), aX.nR(!0), ax.nR(), bF.a46(), aE.ht && bi.a47.a48(), bi.e2 = !0, be
			.a49(), a1.a2.setState(0)
	}
	this.a3s = function() {
		a3t() || (aE.a3u = 2, a3v())
	}, this.a3w = function() {
		a3t() || (aE.a3u = 1, a3v())
	}
}

function a3g() {
	var a4A = 0;
	this.ep = function() {
		var a4I;
		2 === aE.a3u ? (aO.a4B(0, 59), aI.oF(2700)) : aE.lL < 7 ? (a4I = bj.lQ[aE.a3p], a4I = bj.a4K[a4I], aR.a4L(L(39, [a4I]), 2, 1, 12), aO.a2Q(0, L(40, [a4I]), 40, 0, bE.qN, bE.qK, -1, !1), aI.oF(2700)) : 8 === aE.lL ? (aE.hu ? aO.a4B(aE.a4G,
			3) : aE.a42 ? aO.a4B(aE.a4G, 2) : aO.a4B(1 - aE.fU, 3), aE.a4H.a2F(aE.a4G), aI.o1(aE.a4G, 2700, !1, 0)) : 9 === aE.lL ? (aO.a4M(), aI.oF(2700)) : (aO.a4N(aE.a4G), aI.o1(aE.a4G, 2700, !1, 0))
	}, this.a43 = function() {
		a4A = 0, aE.ht || aE.lN || (a4A = 54)
	}, this.nH = function() {
		var pV;
		0 !== a4A && 0 === --a4A && (pV = b1.z.a4P(), aE.lL < 7 ? pV += "/log/team" : 8 === aE.lL ? pV += "/log/1v1" : 9 === aE.lL ? pV += "/log/zombies" : pV += "/log/br", aO.a2Q(720, pV, 736, 0, bE.qN, bE.ql, -1, !1), aE.a4Q < 0 || (pV = b1.z
			.a4P() + "/log/?r=" + bI.fB.a3G(aE.a4Q, 6), aO.a2Q(1071, pV, 736, 0, bE.qN, bE.ql, -1, !1)))
	}
}

function a3k() {
	function a4b() {
		var w5;
		return 8 === aE.lL ? 0 : (w5 = Math.floor(ah.a4c[aE.fU] / 50), (w5 = Math.min(w5, 200)) / 100)
	}

	function a4S() {
		var w5 = a4b();
		0 === w5 || aE.hu || aO.a2Q(440, L(41, [w5.toFixed(2)]), 40, 0, bE.qf, bE.qK, -1, !1)
	}
	this.ep = function() {
		var a4T;
		0 === bU.result.a4R || 0 === bU.result.a3m.length || 8 === aE.lL ? bD.h6.hx(aE.fU) && a4S() : (function(a4T) {
			7 !== aE.lL && 10 !== aE.lL && 9 !== aE.lL || 0 !== aE.a42 && a4T && (9 === aE.lL ? aO.a2Q(600, L(45, [100 * (1 + aE.a2P)]), 40, 0, bE.qN, bE.qK, -1, !1) : aO.a2Q(600, L(45, [a4T.toFixed(2)]), 40, 0, bE.qN, bE.qK, -1, !1))
		}(a4T = function() {
			aO.a2Q(520, L(42), 40, 0, bE.qN, bE.qK, -1, !1);
			for (var a3m = bU.result.a3m, fk = a3m.length, hY = ah.hY, h = [], aC = 0; aC < fk; aC++) {
				var hI = a3m[aC];
				h.push({
					hI: hI,
					el: hY[hI]
				})
			}
			h.sort((g3, g4) => g4.el - g3.el);
			var a4K = ah.a2R,
				el = bU.result.a4d,
				w5 = bU.result.a4R,
				pV = "",
				a4T = 0;
			for (aC = 0; aC < fk; aC++) {
				var iS = h[aC].el * w5 / (100 * el),
					a4f = a4K[h[aC].hI] + ": " + iS.toFixed(2) + "   ";
				h[aC].hI !== aE.fU || aE.hu || (a4T = iS, 9 === aE.lL && 0 !== aC && (a4T = 0)), 2 < aC && 4 !== fk ? 3 === aC && (pV += "(" + L(43, [fk - 3]) + ")") : pV += a4f
			}
			aO.a2Q(560, bD.pZ.a4g(pV), 40, 0, bE.qf, bE.qK, -1, !1), a4T ? aO.a2Q(580, L(44, [a4T.toFixed(2) + " + " + a4b().toFixed(2)]), 40, 0, bE.qf, bE.qK, -1, !1) : bD.h6.hx(aE.fU) && a4S();
			return a4T
		}()), 2 === aE.a3u || 7 <= aE.lL || function(a4T) {
			var a3m = bU.result.a3m,
				fk = a3m.length,
				a4h = ah.a4h,
				hY = ah.hY,
				a4i = [];
			loop: for (var aC = 0; aC < fk; aC++) {
				var hI = a3m[aC],
					a4j = bD.pZ.pn(a4h[hI]);
				if (null !== a4j) {
					for (var a4k = hY[hI], g4 = a4i.length - 1; 0 <= g4; g4--)
						if (a4j === a4i[g4].name) {
							a4i[g4].el += a4k, a4i[g4].h.push({
								hI: hI,
								el: a4k
							});
							continue loop
						} a4i.push({
						name: a4j,
						el: a4k,
						h: [{
							hI: hI,
							el: a4k
						}]
					})
				}
			}
			if (0 !== a4i.length) {
				a4i.sort((g3, g4) => g4.el - g3.el);
				var h = a4i[0].h,
					a4l = (h.sort((g3, g4) => g4.el - g3.el), "[" + a4i[0].name + "]"),
					a4m = 512 * bU.result.a4R / 26214400,
					ly = (aO.a2Q(0, L(46, [a4l, a4m.toFixed(4)]), 40, 0, bE.qN, bE.qK, -1, !1), h.length),
					a0h = a4i[0].el,
					a4n = 1e4 * a4m;
				for (aC = 0; aC < ly; aC++)
					if (h[aC].hI === aE.fU && !aE.hu) {
						aO.a2Q(600, L(47, [(a4n * h[aC].el / (10 * a0h)).toFixed(2)]), 40, 0, bE.qN, bE.qK, -1, !1), aO.a2Q(640, L(48, [(.2 * a4T).toFixed(2), a4l]), 40, 0, bE.qN, bE.qK, -1, !1);
						break
					}
			}
		}(a4T))
	}, this.a4X = function() {
		var a4Y, a4Z;
		aE.lN || (a4Y = ah, a4Z = aE.fU, 0 === a4Y.a4a[a4Z]) || a4Y.k7[a4Z] < 1 || 2 * a4Y.su[a4Z] > 3 * (a4Y.k6[a4Z] + a4Y.k7[a4Z]) || a4S()
	}
}

function a3d() {
	this.dv = function() {
		this.a4o = 0, this.a3m = [], this.a4d = 0, this.a4R = 0
	}, this.a41 = function() {
		var ut;
		aE.lN || (ut = this, 2 === aE.a3u ? ut.a3m = bU.a3e.a3l() : aE.ic ? ut.a3m = bU.a3e.a3o() : ut.a3m = bU.a3e.a3q(), ut.a4o = bl.a4q.a4r(), ut.a4d = Math.max(1, bU.a3e.a3r(ut.a3m)), bB.h6.sb(), 8 === aE.lL ? bU.result.a4R = 0 : ut.a4R =
			100 * bU.result.a4o * (1 + aE.a2P))
	}
}

function a3i() {
	this.a41 = function() {
		if (2 === aE.a3u) aE.a42 = 2;
		else {
			if (8 === aE.lL) bD.h6.kQ(0) || 0 === ah.nf[0] ? aE.a4G = 1 : bD.h6.kQ(1) || 0 === ah.nf[1] ? aE.a4G = 0 : aE.a4G = +(ah.hY[1] > ah.hY[0]);
			else {
				if (aE.ic) {
					var lb = bk.a4u();
					if (aE.a3p = lb, bj.lQ[lb]) return void(aE.a42 = +(bj.fi[aE.fU] === lb))
				}
				aE.a4G = me[0]
			}
			aE.a42 = +(aE.a4G === aE.fU)
		}
	}
}

function dQ() {
	this.id = 0, this.eC = 0, this.zo = null, this.zp = null, this.zq = null, this.zw = null, this.a2 = new a4v, this.dv = function() {
		var self, eC;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (eC = Android.getVersion()) < 12 || (self.eC = eC, self.id = 1, self.zp = Android),
			function(self) {
				var eC;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.zq = mwIOSdataX, self.zw = window.webkit.messageHandlers.iosCommandA, eC = self
					.zq.version, self.eC = eC ? Number(eC) : 0)
			}(this),
			function(self) {
				var zo;
				try {
					if (!(zo = window.localStorage)) return;
					zo.setItem("tls7", "1"), zo.removeItem("tls7")
				} catch (error) {
					return
				}
				self.zo = zo
			}(this)
	}
}

function a4v() {
	this.a4z = function() {
		bm.rt.a0D(), bm.rt.a0E(), b1.z.close(0, 3255), 0 === a1.id ? a1.zo && a1.zo.clear() : 1 === a1.id ? a1.zp.saveString(199, "") : 2 === a1.id && a1.zw.postMessage("clear")
	}, this.a50 = function() {
		2 === a1.id ? a1.zw.postMessage("showConsentForm") : 1 === a1.id && a1.zp.setState(7)
	}, this.a51 = function() {
		this.setState(14)
	}, this.iu = function() {
		return 1 === bm.buffer.zd(2)
	}, this.a52 = function() {
		bm.buffer.zc(102, "")
	}, this.setState = function(a53) {
		1 === a1.id && 5 <= a1.eC && a1.zp.setState(a53)
	}, this.a3 = function() {
		var a54;
		1 === a1.id && 7 <= a1.eC ? a1.zp.setState(5) : 2 === a1.id ? a1.zw.postMessage("reload 0") : ((a54 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a54.toString())
	}, this.eg = function() {
		0 !== a1.id && (1 === a1.id ? a1.zp.prepareAd("8646194357") : 2 === a1.id && (0 === a1.eC ? a1.zw.postMessage("prepare ad 2904813909") : a1.zw.postMessage("loadAds 2904813909")))
	}, this.em = function(el) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.eC && (a1.zp.presentAd(el), !0) : 2 === a1.id && 0 !== a1.eC && (a1.zw.postMessage("showAd"), !0))
	}, this.e4 = function() {
		2 === a1.id && a1.eC < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a55 + "' target='_blank'>" + bN
			.a55 + "</a>", !0, [new x("⬅️ " + L(49), function() {
				u.v(0)
			}, bE.r4)]))
	}
}

function df() {
	function a57(e) {
		mN(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(49), function() {
				u.a58()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.qk)]))
	}

	function a5K(e) {
		mN(e), u.v(4, 5, new w(L(50), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a5F(e), !0))
	}

	function a5F(e) {
		var pV = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + pV : 4527 === e ? "Player already in lobby" + pV : 4577 === e ? "Your IP is banned." + pV : 4530 === e ? "Lobby Timeout" + pV : 4528 === e ?
			"Lobby Kick: Another login detected." + pV : 4540 === e ? "You have been kicked." + pV : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + pV : 4555 === e ? "This Account is blocked." + pV :
			4580 === e ? "More Gold needed" + pV : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + pV : 4591 === e ? "The algo determined you are a bot." + pV : 3290 === e ? "The map could not be loaded." + pV : "Unknown error" + pV
	}

	function mN(e) {
		a5A(e), u.z.a0()
	}

	function a5A(e) {
		4540 === e && b1.z.a5M(e);
		var a53 = ab.a59();
		bx.close(), 6 === a53 ? b1.z.a5M(e) : bq.fH ? (u.y(), bq.y9(), b1.z.close(b1.z.fI, 3256)) : 8 === a53 && aE.a5N(!0)
	}
	this.q = [], this.a56 = function(oX, e) {
		if (1 === oX && __fx.customLobby.isActive() && 6 !== ab.a59() && __fx.customLobby.setActive(!1), console.log("socket close index " + oX + " error " + e), this.q.push(e), 4321 === e && (data = bm.z.a08(0)) && (console.log("Reset to: " +
				data.pd), bm.rt.q0(105, data.pd), bm.rt.q0(106, data.password)), 8 === u.vj && 0 === oX)
			if (4211 === e) a57(e);
			else {
				if (bq.fH && (4495 === e || 4480 === e) && b1.z.fI !== oX) return void u.a58();
				if (8 !== ab.a59() && a5A(), 4480 === e) return bm.rt.a0F(), void u.v(4, 0, new w(L(52), L(53), !0));
				var data = 0;
				u.a5D() && 10 === u.a5D().a5E && (data = u.a5D().a5E), u.v(4, data, new w(L(50), a5F(e), !0))
			}
		else {
			data = ab.a59();
			if (6 === data) {
				if (4211 === e) return void a57(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a5G(oX)
			} else if (bq.fH) {
				if (oX !== b1.z.fI) return
			} else {
				if (8 === data) return void(oX !== b1.z.a5H || aE.lN || 1 !== aE.a3x || aE.ht || aO.a5I(L(51, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}(4591 === e ? function(e) {
				mN(e), u.v(4, 5, new w("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new x("⬅️ " + L(49), function() {
					u.a58()
				}), new x("🔄 Reload", function() {
					a1.a2.a3()
				}, bE.qk)]))
			} : a5K)(e)
		}
	}, this.a5L = function(e) {
		this.q.push(e), 8 === ab.a59() ? aE.lN || 1 !== aE.a3x || aO.a5I(L(51, [e])) : a5K(e)
	}, this.t = function() {
		this.q.push(3268), mN(3268)
	}
}

function dF() {
	var a5O, a5P, a5Q = -15e3,
		a5R = !1;

	function hy(e) {
		a5l() || (a5R = !0, a5m(e, 1), b1.z.a5n(b1.z.a5H), a5o(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5a(e) {
		a5Q = bi.ek, a5m(e, 1), b1.z.a5n(b1.z.a5H), 0 < e.touches.length && (a5O = Math.floor(i.l * e.touches[0].clientX), a5P = Math.floor(i.l * e.touches[0].clientY), av.a5a(e) || a5o(a5O, a5P))
	}

	function a5o(fr, ft) {
		u.hy(fr, ft), 0 === aE.a3x ? ab.hy(fr, ft) : bF.a5p(fr, ft) || bh.hy(fr, ft) || aY.hy(fr, ft) || aM.a5q(fr, ft) || aQ.hy(fr, ft) || 0 <= aN.hy(fr, ft) || ax.hy(fr, ft) || bM.a5r(fr, ft) || aM.a5s(fr, ft)
	}

	function a5W(e) {
		a5l() || (a5R = !0, a5m(e, 1), a5t(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5b(e) {
		a5Q = bi.ek, a5m(e, 1), 0 < e.touches.length && (a5O = Math.floor(i.l * e.touches[0].clientX), a5P = Math.floor(i.l * e.touches[0].clientY), av.a5b(e) || a5t(a5O, a5P))
	}

	function a5t(fr, ft) {
		bM.u3() || (bM.hp = fr, bM.hq = ft), u.a5W(fr, ft), 0 === aE.a3x ? ab.a5W(fr, ft) : (bW.hr(fr, ft), bh.a5W(fr, ft) || (aN.a5W(fr, ft), aM.iU() ? aM.a5W(fr, ft) : aS.hz ? aS.a5W(fr) && (bi.e2 = !0) : (aW.a5W(fr, ft), aT.oB && aT.a5W(fr, ft) &&
			(bi.e2 = !0))))
	}

	function a5Y(e) {
		a5l() || (a5m(e, 1), a5u(), 0 === aE.a3x ? (ab.click(-1024, -1024), aU.reset()) : (aW.a5v(-1024, -1024), aN.a5W(-1024, -1024), aS.a5w(), aT.oB = !1))
	}

	function a5X(e) {
		a5l() || (a5m(e, 1), a5x(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a5U && (bM.a5U = !1, e.preventDefault()))
	}

	function click(e) {
		a5l() || a5m(e, 1)
	}

	function a5c(e) {
		a5Q = bi.ek, a5m(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a3x ? aT.oB = !1 : av.a5y() || (a5x(a5O, a5P, !1), bM.a5U && (bM.a5U = !1, e.preventDefault()))
	}

	function a5d(e) {
		a5Q = bi.ek, a5m(e, 1), a5x(a5O, a5P, !1), bM.a5U && (bM.a5U = !1, e.preventDefault())
	}

	function a5e(e) {}

	function a5f(e) {}

	function a5g(e) {
		a5l() || a5m(e, 0)
	}

	function a5x(fr, ft, a5z) {
		a5u(), 0 === aE.a3x ? ab.click(fr, ft) : (aW.a5v(fr, ft), bh.a5v(), aS.a5w(), aT.oB = !1, aM.click(fr, ft, a5z) ? bi.e2 = !0 : aN.a5X(fr, ft))
	}

	function a5u() {
		u.a5u()
	}

	function a5Z(e) {
		var fr, ft, deltaY;
		a5l() || (a5m(e, 1), b1.z.a5n(b1.z.a5H), fr = Math.floor(i.l * e.clientX), ft = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a5Z(fr, ft, deltaY), 0 === aE.a3x ? ab.a5Z(fr, ft, deltaY) : aW.a5Z(fr, ft,
			deltaY) || (aS.a60(fr, ft) ? aS.a5Z(deltaY) && (bi.e2 = !0) : aT.a5Z(fr, ft, deltaY)))
	}

	function a5h(e) {
		a5m(e, 0)
	}

	function a5m(e, id) {
		0 === id && u.iU() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a59() && e.preventDefault()
	}

	function a5i(e) {
		if (!(0 < i.vQ) && __fx.keybindHandler(e.key)) return;
		a5l() || 0 < i.vQ || (e = e.code) && e.length && (ba.eu(e, 18) ? at.a62(3) : ba.eu(e, 22) ? at.a62(0) : ba.eu(e, 20) ? at.a62(1) : ba.eu(e, 24) ? at.a62(2) : ba.eu(e, 10) ? aS.a63(31 / 32) : ba.eu(e, 8) ? aS.a63(32 / 31) : ba.eu(e, 6) ? aS
			.a63(7 / 8) : ba.eu(e, 4) ? aS.a63(8 / 7) : ba.eu(e, 14) ? 0 !== aE.a3x && aT.a5Z(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.eu(e, 16) ? 0 !== aE.a3x && aT.a5Z(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.eu(e, 0) ?
			aE.a3x && bW.hs(0) : ba.eu(e, 2) ? aE.a3x && bW.hs(1) : ba.eu(e, 30) ? aE.a3x && bW.hs(2) : ba.eu(e, 26) ? aE.a3x && bW.iO() : ba.eu(e, 28) && aE.a3x && bW.iT())
	}

	function a5j(e) {
		if (!a5l() && !(0 < i.vQ || bi.ek < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a64(1) || "Space" === code && u.a64(0))) return bq.fH ? bq.yK.a64(code) ? void 0 : void("Escape" === code && bM.gD()) : void(8 !== ab.a59() && ab.a64(e) ? bi.e2 = !0 : "Escape" === code ?
				bM.gD() : ba.eu(code, 18) ? at.a65(3) : ba.eu(code, 22) ? at.a65(0) : ba.eu(code, 20) ? at.a65(1) : ba.eu(code, 24) ? at.a65(2) : ba.eu(code, 12) ? bF.a66(!aE.o9) : "Space" === code && aE.a3x && (aN.hv && aN.a67(), aE.ht) &&
				bF.a68(!1))
		}
	}

	function a5k() {
		"hidden" !== document.visibilityState && (bi.e2 = !0)
	}

	function a5l() {
		return a5Q + 15e3 > bi.ek
	}

	function resize() {
		i.a6A()
	}
	this.a5S = 0, this.a5T = "", this.a5U = !1, this.hp = 0, this.hq = 0, this.dv = function() {
		a5V.addEventListener("mousedown", hy, {
			passive: !1
		}), a5V.addEventListener("mousemove", a5W, {
			passive: !1
		}), a5V.addEventListener("mouseup", a5X, {
			passive: !1
		}), a5V.addEventListener("click", click, {
			passive: !1
		}), a5V.addEventListener("mouseleave", a5Y, {
			passive: !1
		}), a5V.addEventListener("wheel", a5Z, {
			passive: !1
		}), a5V.addEventListener("touchstart", a5a, {
			passive: !1
		}), a5V.addEventListener("touchmove", a5b, {
			passive: !1
		}), a5V.addEventListener("touchend", a5c, {
			passive: !1
		}), a5V.addEventListener("touchcancel", a5d, {
			passive: !1
		}), a5V.addEventListener("dragover", a5e), a5V.addEventListener("drop", a5f), a5V.addEventListener("dblclick", a5g), document.addEventListener("contextmenu", a5h), document.addEventListener("keydown", a5i), document.addEventListener(
			"keyup", a5j), document.addEventListener("visibilitychange", a5k), window.addEventListener("resize", resize)
	}, this.a5r = function(fr, ft) {
		return !!bF.hy(fr, ft) || !!(aW.hy(fr, ft) || aT.hy(fr, ft) || aS.hy(fr, ft) || aO.hy(fr, ft))
	}, this.a69 = a5l, this.u3 = function() {
		return !a5R || 0 < a5Q
	}, this.gD = function() {
		if (!u.iU()) return 8 === ab.a59() ? aE.o9 ? void bF.a66(!1) : bh.iU ? void bh.a67() : void aN.a67() : void(7 !== ab.a59() && 6 === ab.a59() && aa.a6B());
		u.a64(2)
	}
}

function c8() {
	this.ta = new a6C, this.th = new a6D, this.h6 = new a6E, this.pZ = new a6F, this.p3 = new a6G, this.p2 = new a6H, this.canvas = new a6I, this.color = new a6J, this.a6K = new a6L, this.dv = function() {
		this.ta.a0C()
	}
}

function a6D() {
	this.a6M = function(h) {
		h.fill(0)
	}, this.a6N = function(h) {
		for (var fk = h.length, aC = 0; aC < fk; aC++) h[aC] = []
	}, this.a6O = function(a35, a6P) {
		for (var a36 = bR.gK, aC = 0; aC < 3; aC++) a36[aC] = a6P * a35[aC];
		return a36
	}, this.a6Q = function(a35, a36, a6R) {
		for (var kI = 0, aC = 0; aC < 3; aC++) kI += Math.abs(a35[aC] - a36[aC]);
		return a6R <= kI
	}, this.a6S = function(a35, a6T) {
		for (var aC = 0; aC < 3; aC++) a35[aC] = bO.it(a35[aC] + a6T, 0, 255);
		return a35
	}, this.a6U = function(h, w1, w2) {
		w2 = w2 || h.length - 1;
		for (var a6V = 0, aC = w1 = w1 || 0; aC <= w2; aC++) a6V += h[aC];
		return a6V
	}, this.a6W = function(h, a6X) {
		for (var aC, a6Y, fk = h.length, a6Z = [], g3 = fk - 1; 0 <= g3; g3--) {
			for (aC = a6Y = 0; aC < fk; aC++) a6X(h[aC]) < a6X(h[a6Y]) && (a6Y = aC);
			fk--, a6Z.push(h[a6Y]), h[a6Y] = h[fk], h.pop()
		}
		return a6Z
	}, this.min = function(h) {
		var aC, gC, fk = h.length;
		if (0 === fk) return 0;
		for (gC = h[0], aC = 1; aC < fk; aC++) gC = Math.min(gC, h[aC]);
		return gC
	}, this.max = function(h) {
		var fk = h.length;
		if (0 === fk) return 0;
		for (var gC = h[0], aC = 1; aC < fk; aC++) gC = Math.max(gC, h[aC]);
		return gC
	}, this.a6a = function(h, gC) {
		for (var fk = h.length, hD = 0, aC = 0; aC < fk; aC++) hD += h[aC] > gC;
		return hD
	}, this.a6b = function(a6c, a6d, min) {
		for (var fk = a6d[0], aC = fk - 1; 0 <= aC; aC--) a6c[aC] < min && (a6c[aC] = a6c[--fk]);
		a6d[0] = fk
	}, this.a6e = function(h, fk, value) {
		for (var aC = 0; aC < fk; aC++) h[aC] -= value
	}, this.a6f = function(h) {
		for (var fk = h.length, aC = 0; aC < fk; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a6g = function(pV, h, a6h) {
		h.fill(0);
		for (var w5 = pV.split(","), fk = Math.min(w5.length, h.length), aC = 0; aC < fk; aC++) h[aC] = Math.min(parseInt(w5[aC]), a6h)
	}, this.a6i = function(pV, h, maxLength) {
		h.fill("");
		for (var w5 = pV.split('"'), fk = Math.min(w5.length, 2 * h.length), ia = 0, aC = 1; aC < fk; aC += 2) h[ia++] = w5[aC].slice(0, maxLength)
	}, this.a6j = function(h, hD) {
		if (0 === hD) h.fill(0);
		else {
			var a6V = this.a6U(h),
				fk = h.length;
			if (0 === a6V) h.fill(bO.gB(hD, fk));
			else
				for (var aC = 0; aC < fk; aC++) h[aC] = bO.gB(hD * h[aC], a6V);
			if (0 === (a6V = this.a6U(h))) h[1] = hD;
			else
				for (var ia = 0; a6V++ < hD;) h[ia = (ia + 1) % fk] && h[ia]++
		}
	}, this.a6k = function(h) {
		if (!h) return 0;
		var fk = h.length;
		if (0 === fk) return 0;
		for (var gC = h[fk - 1], aC = fk - 2; 0 <= aC; aC--)
			if (h[aC] !== gC) return aC + 2;
		return 1
	}, this.a6l = function(h) {
		for (var a6V = 0, aC = 0; aC < h.length; aC++) a6V += h[aC].length;
		return a6V
	}, this.a6m = function(a6n) {
		for (var h = [], aC = 0; aC < a6n.length; aC++) h = h.concat(a6n[aC]);
		return h
	}, this.has = function(h, gC) {
		for (var fk = h.length, aC = 0; aC < fk; aC++)
			if (h[aC] === gC) return !0;
		return !1
	}
}

function a6I() {
	this.a2j = function(a6o, eT, a6p) {
		var ig = a6o.height,
			a6q = bD.ta.a6r(ig, ig),
			im = bD.ta.getContext(a6q);
		return function(j, im, a6p) {
			im.fillStyle = a6p, im.beginPath(), im.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), im.fill()
		}(ig, im, a6p), im.drawImage(a6o, -eT * ig, 0), a6q
	}, this.a6t = function(a6u) {
		var im, ij, ig = a6u.height;
		return a6u.width === ig && (ij = (im = bD.ta.getContext(a6u, !0)).getImageData(0, 0, ig, ig), bD.p2.a6v(ij.data, ig, ig, .9), im.putImageData(ij, 0, 0)), a6u
	}
}

function a6J() {
	this.a6w = function(gC) {
		return [gC >> 12 & 63, gC >> 6 & 63, 63 & gC]
	}, this.a6x = function(gC) {
		for (var h = this.a6w(gC), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a6y = function(gC) {
		gC = this.a6x(gC);
		return bD.color.qF(gC[0], gC[1], gC[2])
	}, this.a6z = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.qF = function(eS, w5, g4) {
		return "rgb(" + eS + "," + w5 + "," + g4 + ")"
	}, this.qH = function(eS, w5, g4, g3) {
		return "rgba(" + eS + "," + w5 + "," + g4 + "," + g3.toFixed(3) + ")"
	}, this.u5 = function(eu) {
		for (var h = eu.split("(")[1].split(","), gJ = bR.gJ, aC = 0; aC < 3; aC++) gJ[aC] = parseInt(h[aC]);
		return 4 === h.length ? gJ[3] = 255 * parseFloat(h[3].slice(0, -1)) : gJ[3] = 255, gJ
	}, this.u6 = function(a70, fn) {
		for (var h = a70.slice(a70.indexOf("(") + 1, a70.indexOf(")")).split(","), gJ = bR.gJ, aC = 0; aC < 3; aC++) gJ[aC] = bO.it(parseInt(h[aC].trim(), 10) + fn, 0, 255);
		return 3 === h.length ? this.qF(gJ[0], gJ[1], gJ[2]) : (a70 = parseFloat(h[3].trim()), this.qH(gJ[0], gJ[1], gJ[2], a70 = 0 === a70 ? .3 : a70))
	}, this.yn = function(a71, a72) {
		for (var kI = 0, aC = 0; aC < 3; aC++) kI += Math.abs(a72[aC] - a71[aC]);
		if (!(240 <= kI))
			for (aC = 0; aC < 3; aC++) a72[aC] = a71[aC] + (a71[aC] < 128 ? 80 : -80)
	}, this.a73 = function(h) {
		for (var pV = "#", aC = 0; aC < 3; aC++) {
			var eS = h[aC].toString(16);
			pV += 1 === eS.length ? "0" + eS : eS
		}
		return pV
	}, this.a74 = function(pV) {
		var eS, w5;
		return pV.length < 7 ? bE.qE : (eS = parseInt(pV.slice(1, 3), 16), w5 = parseInt(pV.slice(3, 5), 16), pV = parseInt(pV.slice(5, 7), 16), this.qF(eS, w5, pV))
	}
}

function a6G() {
	this.a75 = function(pV, font, maxWidth) {
		if (font && (z7.font = font), z7.measureText(pV).width <= maxWidth) return pV;
		for (var aC = pV.length - 1; 1 <= aC; aC--)
			if (pV = pV.substring(0, aC), z7.measureText(pV + "...").width <= maxWidth) return pV + "...";
		return "..."
	}
}

function a6L() {
	var a77 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a78 = function(ek) {
		var a7A, pV = new Date(ek.getTime() - 6e4 * ek.getTimezoneOffset()).toUTCString();
		return pV.length < 12 || (pV = pV.substring(5, pV.length), 0 === (ek = ek.getTimezoneOffset())) ? pV : (a7A = (ek < 0 ? "+" : "-") + bO.gB(Math.abs(ek), 60), 0 == (ek = Math.abs(ek) % 60) ? pV + a7A : pV + a7A + ":" + (ek < 10 ? "0" :
			"") + ek)
	}, this.a7B = function(ek) {
		var pV = ek.toUTCString();
		return pV.length < 12 ? pV : function(ek) {
			return a77[ek.getUTCDay()]
		}(ek) + ", " + pV.substring(5, pV.length - 4)
	}
}

function a6C() {
	var a7D = null,
		a7N = (this.a30 = 0, this.a0C = function() {
			var gC = bm.buffer.data[5].value;
			a7D = "px " + gC, "system-ui" !== gC && (a7D += ", system-ui"), this.a30 = ie(32, 32, ["a", "b", "m"], 200, a7D)
		}, this.a6r = function(j, k) {
			var eu = document.createElement("canvas");
			return eu.width = j, eu.height = k, eu
		}, this.getContext = function(canvas, alpha) {
			return canvas.getContext("2d", {
				alpha: alpha,
				willReadFrequently: !0
			})
		}, this.getImageData = function(p3, j, k) {
			return p3.getImageData(0, 0, j, k)
		}, this.v9 = function(type, size) {
			return size = size.toFixed(2), 0 === type ? size + a7D : 1 === type ? "bold " + size + a7D : 2 === type ? "lighter " + size + a7D : 3 === type ? "italic " + size + a7D : 4 === type ? "oblique " + size + a7D : 5 === type ?
				"small-caps " + size + a7D : "small-caps bold " + size + a7D
		}, this.textAlign = function(im, id) {
			im.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
		}, this.textBaseline = function(im, id) {
			im.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
		}, this.tj = function(e, code, color) {
			e.classList.toggle("fx-line", !color), e.classList.toggle("fx-box", !code || 5 === code);
			color = this.ti(bf.vK) + " solid " + (color || bE.qN);
			5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
		}, this.w7 = function(e, fr, ft, j, k) {
			e = e.style;
			e.left = this.w8(fr), e.top = this.w8(ft), e.width = this.w8(j), e.height = this.w8(k)
		}, this.tb = function(gC) {
			return 1 + gC * a1.a2.iu()
		}, this.ub = function(oI, hJ) {
			return oI * this.tb(void 0 === hJ ? .5 : hJ) * i.iv / i.l
		}, this.w6 = function(oI, hJ) {
			return oI * this.tb(void 0 === hJ ? .5 : hJ) * i.iv
		}, this.vn = function(oI, hJ, a7E) {
			return this.tb(hJ) * Math.min(oI * i.iv, a7E * i.j) / i.l
		}, this.ti = function(gC) {
			return gC.toFixed(1) + "px"
		}, this.w8 = function(gC) {
			return this.yZ(gC).toFixed(1) + "px"
		}, this.yZ = function(gC) {
			return gC / i.l
		}, this.a7G = function(a7H) {
			for (var pV = "<ul>", fk = a7H.length, aC = 0; aC < fk; aC++) pV += "<li>" + a7H[aC][0] + ": <a href='" + a7H[aC][1] + "' target='_blank'>" + a7H[aC][0] + "</a></li>";
			return pV += "</ul>"
		}, this.a7I = function(a7J) {
			return "<a href='" + a7J + "' target='_blank'>" + a7J + "</a>"
		}, this.a7K = function(e) {
			navigator.clipboard && navigator.clipboard.writeText(e.value)
		}, this.yl = function(e) {
			var el = e.textContent;
			bD.pZ.a7L(el, "✔") || (1 === el.length ? e.textContent = "✔" : e.textContent = el + " ✔", setTimeout(function() {
				e.textContent = el
			}, 500))
		}, this.measureText = function(pV) {
			return z7.measureText(pV).width
		}, this.vx = function(a7M) {
			a7M.style.overflowX = "auto", a7M.style.overflowY = "hidden", a7M.style.whiteSpace = "nowrap", a7M.addEventListener("wheel", function(e) {
				Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.wA = this.scrollLeft, e.preventDefault())
			}), a7M.addEventListener("scroll", function() {
				this.wA = this.scrollLeft
			})
		}, -1e4);

	function a7Q(a7P) {
		performance.now() - a7N < 600 || (a7N = performance.now(), a7P())
	}
	this.wm = function(e, a7O, a7P) {
		a7O && (e.onclick = function() {
			performance.now() - a7N < 600 || a7O()
		}), e.addEventListener("contextmenu", function(v5) {
			v5.preventDefault(), a7Q(a7P)
		}), e.addEventListener("touchstart", function(v5) {
			2 === v5.touches.length && (v5.preventDefault(), a7Q(a7P))
		}, {
			passive: !1
		})
	}
}

function a6E() {
	this.hw = function(a53) {
		return 0 === a53 ? 1 === aE.a3x && aE.i9 : 1 === a53 ? 1 === aE.a3x && !aE.i9 : 2 === aE.a3x
	}, this.hx = function(player) {
		return 0 !== ah.nf[player] && 2 !== ah.a7R[player]
	}, this.a7S = function(player) {
		return player === aE.fU && 2 !== ah.a7R[player]
	}, this.lh = function(player, kC) {
		return player !== kC && (0 === bj.fi[player] || bj.fi[player] !== bj.fi[kC])
	}, this.mo = function() {
		return am.lZ < 2 ? 0 : aE.ic ? 1 < bk.a7T() : ah.hY[me[1]]
	}, this.a7U = function() {
		var lZ = am.lZ;
		if (0 !== lZ) {
			if (!aE.ic) return !this.kQ(me[0]);
			for (var fi = bj.fi, lb = bk.lc(), le = am.le, aC = lZ - 1; 0 <= aC; aC--) {
				var hI = le[aC];
				if (fi[hI] === lb && !this.kQ(hI)) return 1
			}
		}
		return 0
	}, this.a7V = function(player) {
		return player === aE.fU
	}, this.a7W = function(kC, oI) {
		return ah.hm[aE.fU] < oI * ah.hm[kC]
	}, this.kQ = function(player) {
		return player >= aE.l3 || 2 === ah.a7R[player]
	}, this.m1 = function(player) {
		return 0 !== ah.nf[player]
	}, this.a3n = function(player) {
		return player < aE.l3
	}, this.ss = function(a7X, a7Y) {
		return a7X !== a7Y
	}, this.h9 = function(player, gC) {
		var min;
		return gC = this.a7Z(player, gC), ah.hm[player] += gC, ah.a7a[player] && (min = Math.min(ah.a7a[player], ah.hm[player]), ah.a7a[player] -= min, ah.hm[player] -= min), gC
	}, this.a7Z = function(player, gC) {
		var t6 = ah.hm[player];
		return gC = Math.min(gC, af.a7b(player) - t6), Math.max(gC, 0)
	}, this.nB = function(player, jL, a7c, a7d) {
		var t6 = ah.hm[player],
			jL = bO.gB(t6 * (jL + 1), 1024),
			a7c = bO.gB(a7c * t6, 1024),
			jL = Math.min(jL, t6 - a7c);
		return jL = b5.a7e(player, jL), bR.gH[0] = jL, bR.gH[1] = a7c, a7d <= jL
	}, this.sM = function(player, rx, rw) {
		var player = ah.hm[player],
			t7 = bO.gB(64 * player, 1024);
		return rx = Math.min(rx, player - t7), rx = this.a7Z(rw, rx), bR.gH[0] = rx, bR.gH[1] = t7, 1 <= rx
	}, this.a7f = function(player, rx, rw) {
		var player = ah.hm[player],
			t7 = bO.gB(64 * player, 1024);
		return rx = Math.min(rx, player - t7), this.a7Z(rw, rx)
	}, this.sO = function(rx, rw) {
		return rx = this.a7Z(rw, rx), bR.gH[0] = rx, bR.gH[1] = 0, 1 <= rx
	}, this.jK = function(player, a7g) {
		return bO.gB(ah.hm[player] * (a7g + 1), 1024)
	}, this.a7h = function(player, a7c) {
		a7c = bO.gB(a7c * ah.hm[player], 1024);
		bR.gH[1] = a7c, ah.hm[player] -= a7c
	}, this.h7 = function(player, a7i) {
		var gV, gX, g4 = ah.hm[player];
		return a7i <= g4 ? ah.hm[player] -= a7i : (ah.hm[player] = 0, gX = ah.a7a[player] + (gV = 5 * ((g4 = a7i - g4) >> 2)), bg.hA(player, gV - g4, 12), gX <= aE.a7j ? ah.a7a[player] = gX : (ah.a7a[player] = aE.a7j, bg.hA(player, gX - aE.a7j,
			18))), a7i
	}, this.mF = function(player, jL) {
		var hm = ah.hm,
			t6 = hm[player],
			jL = bO.gB(t6 * (jL + 1), 1024),
			t7 = Math.max(bO.gB(t6, 10), 1e3);
		return (jL = Math.min(jL, t6 - t7)) < 0 ? (hm[player] = 0, t7 = Math.min(1e3, t6 + aE.a7j - ah.a7a[player]), bR.gH[1] = t7, ah.a7a[player] += t7 - t6, 0) : (bR.gH[1] = t7, jL = b5.a7e(player, jL), hm[player] -= t7 + jL, b5.a7k(player,
			jL), jL)
	}, this.nD = function(player) {
		var iR = bR.gH[0];
		ah.hm[player] -= iR + bR.gH[1], b5.a7k(player, iR)
	}, this.st = function(player, kC) {
		return (kC = Math.min(kC, aE.fh)) < aE.fh && 0 === ah.nf[kC] && (kC = aE.fh), (bR.fg[0] = kC) === aE.fh || bw.fd(player, kC)
	}, this.sw = function(player, rw) {
		return 0 !== ah.nf[rw] && !bw.fd(player, rw)
	}, this.a7l = function(player, a7m) {
		for (var hI, fk = am.lZ, a7n = 0, a7o = me, aC = 0; aC < fk; aC++)
			if (hI = a7o[aC], !this.kQ(hI)) {
				if (player === hI) return !0;
				if (++a7n > a7m) return !1
			} return !1
	}, this.ma = function(hI) {
		var a7p = aE.ic ? bk.la() : ah.hY[me[0]];
		return a7p >= bO.gB(hI * aE.kn, 100)
	}, this.a7q = function(gC, min, max) {
		return Math.floor(bO.it(isNaN(gC) ? 0 : Number(gC), min, max))
	}
}

function a6H() {
	this.a7r = function(canvas, a7s, a7t) {
		var j = canvas.width,
			k = canvas.height,
			eu = bD.ta.a6r(j, k),
			im = bD.ta.getContext(eu, !0),
			canvas = (im.drawImage(canvas, 0, 0), im.getImageData(0, 0, j, k));
		return a7s(canvas.data, j, k, a7t), im.putImageData(canvas, 0, 0), eu
	}, this.a7u = function(a2T, j, k) {
		for (var fr = j - 1; 0 <= fr; fr--)
			for (var ft = k - 1; 0 <= ft; ft--) {
				var aC = 4 * (fr + ft * j);
				a2T[3 + aC] = a2T[aC], a2T[aC] = a2T[1 + aC] = a2T[2 + aC] = 255
			}
	}, this.a7v = function(a2T, j, k) {
		for (var fr = j - 1; 0 <= fr; fr--)
			for (var ft = k - 1; 0 <= ft; ft--) {
				var aC = 4 * (fr + ft * j);
				a2T[1 + aC] > a2T[2 + aC] + 10 && (a2T[3 + aC] = a2T[aC], a2T[1 + aC] = a2T[2 + aC])
			}
	}, this.a7w = function(a2T, j, k) {
		for (var fr = j - 1; 0 <= fr; fr--)
			for (var ft = k - 1; 0 <= ft; ft--) {
				var g3, gC, aC = 4 * (fr + ft * j);
				a2T[1 + aC] > a2T[2 + aC] + 10 && (gC = 0 < (g3 = 255 - a2T[1 + aC] + a2T[2 + aC]) ? Math.min(255, Math.round(255 * a2T[2 + aC] / g3)) : 0, a2T[aC] = a2T[1 + aC] = a2T[2 + aC] = gC, a2T[3 + aC] = g3)
			}
	}, this.a7x = function(a2T, j, k, a7t) {
		for (var gap = Math.floor(Math.min(j, k) * a7t), fr = 0; fr < j; fr++)
			for (var aC, ft = 0; ft < k; ft++)(fr < gap || ft < gap || j - gap <= fr || k - gap <= ft) && (a2T[3 + (aC = 4 * (fr + ft * j))] = 255 - 255 * (a2T[1 + aC] - a2T[aC]) / (255 - a2T[aC]))
	}, this.a7y = function(a2T, j, k, a7t) {
		for (var fr = j - 1; 0 <= fr; fr--)
			for (var ft = k - 1; 0 <= ft; ft--) {
				var aC = 4 * (fr + ft * j);
				a2T[aC] = a7t[0], a2T[1 + aC] = a7t[1], a2T[2 + aC] = a7t[2]
			}
	}, this.a7z = function(a2T, j, k, a7t) {
		for (var gap = Math.floor(j * a7t), fr = 0; fr < j; fr++)
			for (var aC, ft = 0; ft < k; ft++)(fr < gap || ft < gap || j - gap <= fr || k - gap <= ft) && (a2T[aC = 4 * (fr + ft * j)] = a2T[1 + aC] = a2T[2 + aC] = 0)
	}, this.a80 = function(a2T, j, k) {
		for (var ft, aC, fr = j - 1; 0 <= fr; fr--)
			for (ft = k - 1; 0 <= ft; ft--) 200 < a2T[1 + (aC = 4 * (fr + ft * j))] && a2T[1 + aC] - 20 > a2T[aC] && a2T[1 + aC] - 20 > a2T[2 + aC] ? a2T[aC] + a2T[2 + aC] < 40 ? a2T[3 + aC] = 0 : (a2T[3 + aC] = a2T[aC], a2T[aC] = 255, a2T[1 +
				aC] = 255, a2T[2 + aC] = 255) : a2T[aC] < 50 && a2T[1 + aC] < 50 && a2T[2 + aC] < 50 && (a2T[aC] + a2T[1 + aC] + a2T[2 + aC] < 50 ? a2T[3 + aC] = 180 : a2T[3 + aC] = 180 + Math.floor(75 * (a2T[aC] + a2T[1 + aC] + a2T[2 + aC] -
				50) / 100))
	}, this.a81 = function(a2T, j, k) {
		for (var ft, aC, fr = j - 1; 0 <= fr; fr--)
			for (ft = k - 1; 0 <= ft; ft--) a2T[1 + (aC = 4 * (fr + ft * j))] > a2T[aC] + 20 && a2T[1 + aC] > a2T[2 + aC] + 20 && a2T[aC] + a2T[2] < 40 && (a2T[3 + aC] = 255 - a2T[1 + aC], a2T[aC] = a2T[1 + aC] = a2T[2 + aC] = a2T[aC])
	}, this.a6v = function(a2T, j, k, a7t) {
		for (var eS = j >> 1, fr = 0; fr < j; fr++)
			for (var ft = 0; ft < k; ft++) Math.sqrt((fr - eS) * (fr - eS) + (ft - eS) * (ft - eS)) > a7t * eS && (a2T[4 * (fr + ft * j) + 3] = 0)
	}
}

function a6F() {
	var a82 = {
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
		a83 = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.uY = function(ew) {
		return ew.replace(a83, function(match) {
			return a82[match] || match
		})
	}, this.a3G = function(gC) {
		var aC, a84, a85, a86, a87;
		if (gC < 0) return "-" + this.a3G(Math.abs(gC));
		if (gC < 1e3) return gC.toString();
		for (a84 = Math.floor(Math.log(gC + .5) / Math.log(10)) + 1, a85 = Math.floor((a84 - 1) / 3), a87 = (a86 = gC.toString()).substring(a84 - 3, a84), aC = 1; aC < a85; aC++) a87 = a86.substring(a84 - 3 * (aC + 1), a84 - 3 * aC) + " " + a87;
		return a86.substring(0, a84 - 3 * a85) + " " + a87
	}, this.a88 = function(gC) {
		var a89 = ["K", "M", "B"],
			oI = 1e3;
		if (gC < 1e3) return gC.toString();
		for (var el, aC = 0; aC < 3; aC++) {
			if (gC < 10 * oI) return el = Math.floor(gC / (oI / 10)), Math.floor(el / 10) + "." + el % 10 + a89[aC];
			if (gC < 1e3 * oI || 2 === aC) return Math.floor(gC / oI) + a89[aC];
			oI *= 1e3
		}
		return ""
	}, this.a8A = function(hI, a84) {
		return hI.toFixed(a84) + "%"
	}, this.a8B = function(gC, a8C) {
		return gC.toFixed(bO.it(Math.floor((void 0 === a8C ? 3 : a8C) - Math.log10(Math.max(gC, 1))), 0, 8))
	}, this.a8D = function(gC, oI, a84) {
		return (gC * oI).toFixed(a84)
	}, this.pn = function(username) {
		var fo, fZ = username.indexOf("[");
		return !(fZ < 0) && 1 < (fo = username.indexOf("]")) - fZ && fo - fZ <= 8 ? username.substring(fZ + 1, fo).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.pn;
	this.a8E = function(pV) {
		for (var g3 = Math.floor(.5 * pV.length + .5), oO = Math.floor(.5 * (g3 - 1)), aC = 0; aC < oO; aC++)
			for (var g4 = -1; g4 < 2; g4 += 2) {
				var eu = g3 + g4 * aC;
				if (" " === pV[eu]) return [this.a4g(pV.substring(0, eu)), this.a8F(pV.substring(eu))]
			}
		return [pV.substring(0, g3), pV.substring(g3)]
	}, this.a8F = function(pV) {
		for (var fk = pV.length, aC = 0; aC < fk; aC++)
			if (" " !== pV[aC]) return pV.substring(aC);
		return pV
	}, this.a4g = function(pV) {
		for (var aC = pV.length - 1; 0 <= aC; aC--)
			if (" " !== pV[aC]) return pV.substring(0, aC + 1);
		return pV
	}, this.a8G = function(pV, a8H) {
		return pV.split("(")[0] + "(🧈 " + a8H.toFixed(2) + ")"
	}, this.startsWith = function(pV, a8I) {
		return pV.substring(0, a8I.length) === a8I
	}, this.a7L = function(pV, a8I) {
		var fk = pV.length;
		return pV.substring(fk - a8I.length, fk) === a8I
	}, this.a8J = function(h, a8K, a8L) {
		var pV = "",
			fk = h.length - 1;
		a8L = a8L || "";
		for (var aC = 0; aC < fk; aC++) pV += a8L + h[aC] + a8L + ",", (aC + 1) % a8K == 0 && (pV += "\n");
		return pV += a8L + h[fk] + a8L
	}, this.a8M = function(pV, a35, a36) {
		return pV.replace(new RegExp(a35, "g"), a36)
	}
}

function a8N() {
	this.et = function(player, fW) {
		aJ.a1r(player, bP.fs(fW), bP.fu(fW)) && (bi.e2 = !0), aE.lN && this.ep()
	}, this.ep = function() {
		aE.i9 = !1;
		for (var aC = 0; aC < aE.l3; aC++) 0 !== ah.nf[aC] && 0 === ah.hY[aC] && aJ.a1y(aC);
		0 !== ah.nf[aE.fU] ? (bg.nb[7] = ah.hY[aE.fU], bg.nb[8] = ah.hm[aE.fU], aS.a8O(), aX.a8P(), aE.ht || aE.hu || aI.o0(ah.jb[aE.fU] - 5, ah.jd[aE.fU] - 5, ah.jc[aE.fU] + 5, ah.je[aE.fU] + 5), aw.dv()) : aY.show(!1, !1, !1, !0), aO.a8Q(18),
			ag.a8R(), ag.nR(!0), bS.z.a8S(), aM.uZ(), aE.sr = null, be.a8T = !0, be.a8U(), aE.lN && a1.a2.setState(1)
	}
}

function cA() {
	this.fh = 512, this.a8V = 15e8, this.a8W = 1e9, this.a7j = 5e4, this.a8X = 512, this.h4 = 2, this.fU = 0, this.l3 = 0, this.a40 = 0, this.lP = 0, this.a3z = 0, this.a12 = 512, this.a17 = 512, this.a8Y = 150, this.lN = !0, this.ht = 0, this.hu =
		0, this.a3x = 0, this.kn = 0, this.o9 = !1, this.i9 = 0, this.a8Z = 0, this.ic = !1, this.a19 = 0, this.a1A = 0, this.lL = 0, this.a2P = 0, this.sr = null, this.a4H = new a2D, this.a8a = 30, this.a3u = 0, this.a42 = 0, this.a4G = 0, this
		.a3p = 0, this.data = new a8b, this.a8c = new a8d, this.a8e = 0, this.a8f = "", this.a4Q = -1, this.a8g = function() {
			this.a4Q = -1, bX.turnstile.close(), bR.dv(), bU.dv(), bu.clear(), this.a40 = this.l3 = this.data.humanCount, this.lN = 1 === this.a40 && !__fx.customLobby.isActive(), this.o9 = !1, this.ht = this.data.isReplay, this.hu = this.data.a8h,
				this.lL = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a2P = this.data.isContest, this.ic = this.lL < 7 || 9 === this.lL, this.lL = 10 === this.lL &&
				this.lN ? 7 : this.lL, this.lL = 8 === this.lL && 2 !== this.l3 ? 7 : this.lL, b0.dv(), this.a19 = this.data.numberTeams, this.data.teamPlayerCount ? this.a1A = +(0 < this.data.teamPlayerCount[0]) : (this.a1A = 0, this.ic && this
					.lN && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.a19 + 1), aE.a8c.a8i())), this.a8a = this.l3 <= 2 ? 30 : this.l3 <= 50 ? 40 : 50, this.a8Z = this.i9 = __fx.customLobby.isActive() ?
				__fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.sr = this.i9 ? new a8N : null, this.a12 = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this
				.l3) : 1 === m.e6 ? this.a12 = this.l3 : this.a12 = this.data.playerCount,
				this.a17 = this.a12, this.lP = this.a12 - this.l3, this.a3z = 0, this.fU = this.data.selectedPlayer, this.a3u = 0, this.a42 = 0, this.a4G = 0, this.a3p = 0, az.a8j(this.data.spawningSeed), af.dv(), ah.dv(), ao.dv(), aj.a8k(), bB.rn
				.sf = [], bB.iB.rq = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.dv(), this.a3x = 1, bg.dv(), a8l(), ad.dw(), aq.a8m(), be.dv(), ad.dv(), au.dv(),
				bP.dv(), bQ.dv(), ap.dv(), bY.a8n(), aF.dv(), aj.a8(), aJ.dv(), aK.dv(), am.a8o(), bC.dv(), bk.dv(), bS.dv(), bh.dv(), a8p.putImageData(a8q, 0, 0), aW.dv(), aT.dv(), aS.dv(), bF.dv(), ax.dv(), aV.dv(), aX.dv(), aN.dv(), aR.dv(), aO
				.dv(), aQ.dv(), aM.dv(), aY.dv(), aG.dv(), aH.dv(), gn(), ae.dv(), ag.dv(), b5.dv(), b6.dv(), b2.dv(), b8.dv(), b9.dv(), this.a4H.dv(), bi.a8n(), aI.nz(), 0 === ah.nf[aE.fU] && aY.show(!1, !0), ag.nR(!0), aw.dv(), bi.e2 = !0, this
				.ht || this.lN && this.i9 || a1.a2.setState(1), this.a8e = 0
		}, this.a5N = function(ej) {
			bC.sp.a8s.length ? this.a8f = bC.sp.a8s : this.a8f = bC.a8t.a3R(), this.ht || __fx.replayHistory.save(this.a8f), !1 === __fx.customLobby.isActive() && b1.z.a8u(), bu.clear(), this.a3x = 0, bi.a8v(), a1.a2.setState(0), ab.setState(0), __fx
				.customLobby.isActive() || bX.eb.show(ej), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a8e ? u.z.a8w(0) : 1 === this.a8e ? u.v(19) : u.v(5, 5)
		}, this.a8x = function() {
			return this.ht ? aN.hv || !bF.a8y : this.lN && (aN.hv || this.i9)
		}, this.a8z = function() {
			return 1 === this.a3x && !this.i9
		}
}

function a8b() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.a8h = 0, this.a90 = 0, this.elo = null, this.colorsType = 0, this
		.colorsPersonalized = 1, this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData =
		null, this.spawningType = 0, this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this
		.aIncomeData = null, this.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null,
		this.a91 = null
}

function a8d() {
	this.a8i = function() {
		var a92 = aE.data;
		bD.th.a6j(a92.teamPlayerCount, a92.playerCount), a92.numberTeams = bD.th.a6a(a92.teamPlayerCount, 0), a92.teamPlayerCount[0] && a92.teamPlayerCount[7] && (a92.teamPlayerCount[7] = 0, this.a8i())
	}, this.a93 = function() {
		var a92 = aE.data;
		a92.mapType < 2 ? bV.a8(bV.a94(a92), a92.mapSeed) : bV.a95(a92.canvas)
	}, this.a96 = function() {
		var a92 = aE.data;
		a92.colorsData || (a92.colorsData = new Uint32Array(1)), 0 === a92.gameMode && (a92.colorsData[0] = bm.z.a0A()), a92.selectableName && (a92.playerNamesData || (a92.playerNamesData = new Array(1)), a92.playerNamesData[0] = bm.buffer.data[
			122].value), a92.a91 = new Uint32Array(1), a92.a91[0] = bJ.fB.fC(bm.buffer.data[105].value, 5)
	}, this.a97 = function() {
		aE.data = new a8b
	}
}

function dl() {
	var a98 = [];
	this.sP = function(player, rw, a99, a9A) {
		player === aE.fU || rw === aE.fU || !a9A && bD.h6.kQ(player) || bD.h6.kQ(rw) || this.a2Q(ah.a2R[player] + " supported " + ah.a2R[rw] + " with " + bD.pZ.a3G(a99) + " ressource" + (1 === a99 ? "." : "s."))
	}, this.a2Q = function(pV, sE) {
		pV = {
			ek: aX.a9C(),
			pV: pV,
			sE: sE
		};
		a98.push(pV), 30 === u.vj && u.a5D().a2Q(pV)
	}, this.clear = function() {
		a98 = [];
		var w5 = u.a9D(30);
		w5 && w5.clear()
	}, this.a9E = function() {
		return a98
	}
}

function de() {
	this.a2x = 0, this.gap = 0, this.vK = 0, this.tf = 0, this.dv = function() {
		this.resize()
	}, this.resize = function() {
		this.a2x = .0022 * bD.ta.tb(.5) * i.iv, this.vK = this.a2x / i.l, this.gap = Math.max(Math.floor((a1.a2.iu() ? .0114 : .01296) * i.iv), 2), this.tf = this.gap / i.l
	}
}

function dd() {
	this.a9F = function() {
		return a1.a2.iu() ? 2 : 1
	}
}

function cL() {
	var p6, fr, ft, a9G, a9H, a9I, ek, a9J, a9K, a9L, a9M, gap, zoom, sY, a9N;

	function a9d(mI, mJ, fO) {
		ad.ff(fO) || -1 === (mI = bQ.ls.a9m(mI, mJ)) ? aO.a9l(fO) : aO.a9n(mI)
	}

	function a9X(a9J) {
		for (var aC = sY.length - 1; 0 <= aC; aC--)
			if (sY[aC] === a9J) return 1
	}

	function a9V(a9S) {
		var aC, fk;
		if (-1 !== a9S)
			for (fk = p6.length, aC = 0; aC < fk; aC++)
				if (p6[aC].iU && p6[aC].fr + 1 === a9S % 4 && p6[aC].ft + 1 === a9S >> 2) return aC;
		return -1
	}

	function a9T(mI, mJ) {
		var w5 = gap / 2;
		return mI < fr - a9G - 3 * w5 || fr + 3 * a9G + 5 * w5 < mI || mJ < ft - a9G - 3 * w5 || ft + 2 * a9G + 3 * w5 < mJ ? -1 : 4 * (mJ < ft - w5 ? 0 : mJ < ft + a9G + w5 ? 1 : 2) + (mI < fr - w5 ? 0 : mI < fr + a9G + w5 ? 1 : mI < fr + 2 * a9G +
			3 * w5 ? 2 : 3)
	}
	this.a9O = function() {
		var aC, g4, a9R = [bE.qn, bE.r3, bE.qL, bE.rU, bE.rG];
		for (p6 = new Array(10), aC = 0; aC < 10; aC++) p6[aC] = {
			id: aC,
			iU: !1,
			m0: 0,
			canvas: [],
			fr: 0,
			ft: 0
		};
		for (p6[0].colors = [0, 1, 2, 3], p6[0].fr = 0, p6[0].ft = 0, p6[1].colors = [1, 4], p6[1].fr = 1, p6[1].ft = 0, p6[2].colors = [0, 1], p6[2].fr = -1, p6[2].ft = 0, p6[3].colors = [0], p6[3].fr = 0, p6[3].ft = 0, p6[4].colors = [0, 2],
			p6[4].fr = 1, p6[4].ft = 1, p6[5].colors = [3], p6[5].fr = 0, p6[5].ft = -1, p6[6].id = 20, p6[6].colors = [0], p6[6].fr = 1, p6[6].ft = -1, p6[7].id = 21, p6[7].colors = [0], p6[7].fr = 0, p6[7].ft = 1, p6[8].id = 16, p6[8]
			.colors = [0], p6[8].fr = 0, p6[8].ft = 0, p6[9].id = 10, p6[9].colors = [4], p6[9].fr = 2, p6[9].ft = 0, aC = 0; aC < 10; aC++)
			for (g4 = 0; g4 < p6[aC].colors.length; g4++) p6[aC].canvas.push(function(id, a6p) {
				if (id < 20) return bD.canvas.a2j(ac.get(3), id, a6p);
				var a6p = ac.get(3).height,
					a6q = bD.ta.a6r(a6p, a6p),
					im = bD.ta.getContext(a6q);
				20 === id ? im.drawImage(ac.get(18), 0, 0) : 21 === id && ak.a2T.a2y(ak.pr.a2n + ak.pr.a34, im, 0, 0, a6p);
				return a6q
			}(p6[aC].id, a9R[p6[aC].colors[g4]]))
	}, this.a9Q = function() {
		return p6
	}, this.dv = function() {
		sY = [], fr = ft = ek = 0, a9H = a9I = -1e3, this.resize()
	}, this.resize = function() {
		a9G = Math.floor((a1.a2.iu() ? .075 : .0468) * i.iv), zoom = a9G / ac.get(3).height, gap = Math.floor(a9G / 3)
	}, this.a5q = function(mI, mJ) {
		return !!this.iU() && (bi.e2 = !0, !!ak.a2T.hy(mI, mJ, a9K) || (mI = function(mI, mJ) {
			a9I = a9H = -1e3;
			var a9U = a9V(a9T(mI, mJ));
			if (-1 === a9U) return 0;
			if (1 !== p6[a9U].colors[p6[a9U].m0])
				if (5 === a9U) {
					if (! function() {
							var el = performance.now();
							a9N + 4e3 < el && (sY = []);
							a9N = el
						}(), a9X(a9J)) return 1;
					sY.push(a9J), 16 < sY.length && sY.shift()
				} else if (6 === a9U) {
				for (var aC = sY.length - 1; 0 <= aC; aC--) 0 === ah.nf[sY[aC]] && sY.splice(aC, 1);
				0 < sY.length && (b6.a9Y(1, sY, !0) && bB.h6.sX(sY, a9J), sY = [])
			} else if (2 === a9U) ao.a9Z(a9J) && bB.iB.rv(aS.iF(), a9J);
			else if (3 === a9U) aE.i9 && bB.iB.iC(a9L);
			else if (0 === a9U)
				if (0 === p6[0].m0) {
					if (aE.a8Z && aX.a9C() < 350) return 1;
					bY.a9a(4), bB.iB.iI(aS.iF(), a9J)
				} else b2.iJ(a9J, aS.iF());
			else if (1 === a9U) bB.iB.iN(aS.iF(), a9L);
			else if (9 === a9U) bB.iB.s1(aS.iF());
			else {
				if (7 === a9U) return bY.a9a(0), ak.a2T.show(mI, mJ), 2;
				if (4 === a9U) b6.a9Y(0, [a9J], !0) && bB.h6.sU(a9J);
				else {
					if (8 !== a9U) return 0;
					bB.iB.iE(aS.iF(), a9M, a9J)
				}
			}
			return 1
		}(mI, mJ), this.uZ(), 2 === mI && (ak.a2T.iU = !0), 0 < mI))
	}, this.a5s = function(mI, mJ) {
		this.iU() || (a9H = mI, a9I = mJ, ek = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.i1(mouseX),
			coordY = bP.i3(mouseY),
			point = bP.fa(bP.g7(coordX, coordY));
		bP.i4(coordX, coordY) && a9d(mouseX, mouseY, point)
	}, this.click = function(mI, mJ, a5z) {
		var i0 = bP.i1(mI),
			i2 = bP.i3(mJ),
			fW = bP.g7(i0, i2),
			fO = bP.fa(fW),
			a9b = (a1.a2.iu() ? .025 : .0144) * i.iv,
			el = performance.now();
		return !(Math.abs(mI - a9H) > a9b || Math.abs(mJ - a9I) > a9b || ek + 500 < el || (ek = el, bM.u3() && (bM.hp = mI, bM.hq = mJ, b8.ep(1), b9.ep(1)), !bP.i4(i0, i2))) && (!(aN.hv || this.iU() || !bQ.a9c.click(mI, mJ, fW, a5z)) || (a5z ? (
			a9d(mI, mJ, fO), !1) : aN.hv || this.iU() || !bD.h6.hx(aE.fU) || aE.ht || aE.hu ? (this.uZ(), !1) : (aE.i9 ? 0 <= (a9L = bv.iA(fW)) && (p6[3].iU = !0) : 2 === aE.a3x ? ad.hK(fO) && (a9J = ad.fc(fO), bD.h6.kQ(a9J) || (p6[0]
			.iU = !0, p6[0].m0 = 1, p6[7].iU = !0)) : (bQ.iL.iM(aE.fU, fW) && (p6[0].iU = !0, p6[0].m0 = 1, p6[1].iU = !0, p6[1].m0 = 1, a9L = bR.gM[7]), ad.fp(fO) ? (a9M = an.fL.fN(fO)) && (a9b = bP.fa(a9M), p6[8].iU = !0, a9J =
			ad.fb(a9b) ? aE.fh : ad.fc(a9b)) : (ad.a1w(aE.fU, fO) && (a9K = aE.fU, p6[0].iU = !0, p6[0].m0 = 1, p6[7].iU = !0), -1 !== (el = bv.iG(fW)) && (ad.fb(el << 2) ? (a9J = aE.fh, bw.iH(aE.fU) ? (p6[0].iU = !0, p6[0]
			.m0 = 0) : ae.gr(aE.fU) && (p6[0].iU = !0, p6[0].m0 = 3)) : (a9J = ad.fc(el << 2), p6[0].m0 = 1, p6[5].iU = function(a9J) {
			return !bD.h6.kQ(a9J) && !a9X(a9J) && b6.a9Y(1, [a9J], !1)
		}(a9J), p6[7].iU || bD.h6.kQ(a9J) || (a9K = a9J, p6[7].iU = !0), p6[4].iU = !bD.h6.kQ(a9J) && !ag.a9h(a9J) && b6.a9Y(0, [a9J], !1), p6[6].iU = function(a9J) {
			if (0 === sY.length) return !1;
			if (performance.now() > a9N + 4e3) return !(sY = []);
			return !a9X(a9J) && ! function(a9J) {
				var aC;
				if (aE.ic)
					for (aC = sY.length - 1; 0 <= aC; aC--)
						if (!bw.fd(a9J, sY[aC])) return 1;
				return
			}(a9J)
		}(a9J), bw.fd(a9J, aE.fU) ? (bw.iK(aE.fU, a9J) ? (p6[0].m0 = 0, p6[0].iU = !0) : ae.gr(aE.fU) && (p6[0].m0 = 3, p6[0].iU = !0), p6[0].iU = this.a9j()) : (p6[2].iU = !0, ao.a9Z(a9J) ? p6[2].m0 = 0 : p6[2]
			.m0 = 1, p6[0].iU = !0))))), this.a9e(mI, mJ))))
	}, this.a9e = function(mI, mJ) {
		return fr = mI - Math.floor(a9G / 2), ft = mJ - Math.floor(a9G / 2), !!this.iU()
	}, this.a5W = function(mI, mJ) {
		return !!this.iU() && (ak.a2T.iU ? !ak.a2T.a2w(mI, mJ) && (ak.a2T.iU = !1, bi.e2 = !0) : function(ut, mI, mJ) {
			mI = a9T(mI, mJ);
			if (0 <= a9V(mI)) return !1;
			if ((1 === mI || 6 === mI) && 0 <= a9V(2)) return !1;
			if ((6 === mI || 9 === mI) && 0 <= a9V(10)) return !1;
			return ut.uZ(), bi.e2 = !0
		}(this, mI, mJ))
	}, this.uZ = function() {
		for (var aC = p6.length - 1; 0 <= aC; aC--) p6[aC].iU = !1, p6[aC].m0 = 0;
		ak.a2T.iU = !1
	}, this.iU = function() {
		return this.a9j() || ak.a2T.iU
	}, this.a9j = function() {
		for (var fk = p6.length, aC = 0; aC < fk; aC++)
			if (p6[aC].iU) return !0;
		return !1
	}, this.z6 = function() {
		if (this.iU())
			if (ak.a2T.iU) ak.a2T.z6();
			else {
				var aC, im = z7,
					g4 = p6,
					fk = g4.length,
					a9r = (a9G + gap) / zoom;
				for (im.imageSmoothingEnabled = !0, im.setTransform(zoom, 0, 0, zoom, fr, ft), aC = 0; aC < fk; aC++) g4[aC].iU && z7.drawImage(g4[aC].canvas[g4[aC].m0], g4[aC].fr * a9r, g4[aC].ft * a9r);
				im.imageSmoothingEnabled = !1, im.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cM() {
	var k, canvas, a9s, a9t, a9u, a9v = -1;

	function a9w() {
		var a9x, p3 = canvas.getContext("2d", {
			alpha: !0
		});
		p3.clearRect(0, 0, k, k), p3.fillStyle = bE.qJ, p3.fillRect(0, 0, k, k), 9 === a9t && (p3.fillStyle = bE.qO, p3.fillRect(0, 0, k, k)), p3.fillStyle = bE.qN, __fx.utils.smoothFrame(p3, k, k) || (p3.fillRect(0, 0, k, 1), p3.fillRect(0, 0, 1,
			k), p3.fillRect(0, k - 1, k, 1), p3.fillRect(k - 1, 0, 1, k)), a9x = .9 * k / ac.get(0).width, p3.imageSmoothingEnabled = !0, p3.setTransform(a9x, 0, 0, a9x, Math.floor((k - a9x * ac.get(0).width) / 2), Math.floor((k - a9x * ac.get(0)
			.height) / 2)), p3.drawImage(ac.get(0), 0, 0), p3.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aA0(mI, mJ) {
		if (!aN.hv) return mI <= k + bf.gap && mJ >= aS.ft ? 9 : -1;
		if (mI <= 4 * k + bf.gap) {
			if (mJ >= aS.ft) return 0;
			if (mJ >= aS.ft - k - a9u * bf.gap) return 2
		} else if (mI <= 7 * k + bf.gap && mJ >= aS.ft - k - a9u * bf.gap) return 1;
		return -1
	}
	this.hv = !1, this.dv = function() {
		a9t = -1, this.hv = !1, a9u = a1.a2.iu() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, a9s = bD.ta.v9(1, (a1.a2.iu() ? .5 : .45) * k), a9w()
	}, this.a9y = function() {
		return !(1 !== aE.a3x || aE.i9 || (aE.ht ? !bF.a8y : this.hv && aE.lN))
	}, this.a67 = function() {
		this.hv = !this.hv, this.hv ? (bF.a66(!1), aE.ht && bF.a8y && bF.a68(!0), this.a9z(), 9 === a9t && (a9t = 0)) : (a9t = -1, a9w(), !aE.lN || 1 !== aE.a3x || aE.i9 || aE.ht || a1.a2.setState(1)), bi.e2 = !0
	}, this.a9z = function() {
		(aE.lN || aE.ht) && 1 === aE.a3x && (aW.nR(!0), aE.i9 || setTimeout(function() {
			be.a49()
		}, 0), a1.a2.setState(0))
	}, this.hy = function(mI, mJ) {
		return 0 <= (a9v = aA0(mI, mJ)) || !aN.hv || aE.lN || aE.ht || bh.iU || aN.a67(), a9v
	}, this.a5W = function(mI, mJ) {
		mI = aA0(mI, mJ);
		mI !== a9t && (a9t = mI, this.hv || a9w(), bi.e2 = !0)
	}, this.a5X = function(mI, mJ) {
		mI = aA0(mI, mJ);
		return -1 !== mI && a9v === mI && (this.hv ? aE.o9 ? (0 <= mI && bF.a66(!1), !aE.ht) : (0 === mI ? aE.a5N() : 1 === mI ? this.a67() : 2 === mI && u.v(1, 0), !0) : 9 === mI && (this.a67(), !0))
	}, this.z6 = function() {
		var aC, fxSmooth;
		this.hv ? (function() {
			var j = Math.floor(5.5 * k),
				fxSmooth = (z7.setTransform(1, 0, 0, 1, bf.gap, aS.ft), __fx.utils.clipRounded(z7, 0, 0, j, k));
			z7.fillStyle = bE.qJ, z7.fillRect(0, 0, j, k), 0 === a9t ? (z7.fillStyle = bE.qO, z7.fillRect(0, 0, 4 * k, k)) : 1 === a9t && (z7.fillStyle = bE.qO, z7.fillRect(4 * k, 0, Math.floor(1.5 * k), k));
			fxSmooth && (z7.restore(), __fx.utils.strokeRounded(z7, 0, 0, j, k), z7.fillStyle = __fx.utils.lineColor(bE.qN), z7.fillRect(4 * k, 0, 1, k));
			z7.fillStyle = bE.qN, fxSmooth || (z7.fillRect(0, 0, j, 1), z7.fillRect(0, 0, 1, k), z7.fillRect(4 * k, 0, 1, k), z7.fillRect(0, k - 1, j, 1), z7.fillRect(j - 1, 0, 1, k));
			z7.font = a9s, bD.ta.textBaseline(z7, 1), bD.ta.textAlign(z7, 1), z7.fillText(L(54), 2 * k, .54 * k), fxSmooth = .4 * k, aN.aA4(bf.gap + 4 * k + (1.5 * k - fxSmooth) / 2, aS.ft + .3 * k, fxSmooth)
		}(), aC = 1, z7.setTransform(1, 0, 0, 1, bf.gap, aS.ft - aC * a9u * bf.gap - aC * k), fxSmooth = __fx.utils.clipRounded(z7, 0, 0, 4 * k, k), z7.fillStyle = bE.qJ, z7.fillRect(0, 0, 4 * k, k), a9t === aC + 1 && (z7.fillStyle = bE
			.qO, z7.fillRect(0, 0, 4 * k, k)), fxSmooth && (z7.restore(), __fx.utils.strokeRounded(z7, 0, 0, 4 * k, k)), z7.fillStyle = bE.qN, fxSmooth || (z7.fillRect(0, 0, 4 * k, 1), z7.fillRect(0, 0, 1, k), z7.fillRect(4 * k, 0, 1, k),
			z7.fillRect(0, k - 1, 4 * k, 1)), z7.fillText(L(0 === aC ? 54 : 55), 2 * k, .54 * k), z7.setTransform(1, 0, 0, 1, 0, 0)) : z7.drawImage(canvas, bf.gap, aS.ft)
	}, this.tD = function(player) {
		return 0 !== ah.nf[player] && 2 !== aE.a3x && !bD.h6.kQ(player)
	}, this.aA4 = function(fr, ft, fk) {
		z7.setTransform(1, 0, 0, 1, fr, ft), z7.lineWidth = bf.a2x, z7.strokeStyle = bE.qN, z7.beginPath(), z7.moveTo(0, 0), z7.lineTo(fk, fk), z7.moveTo(0, fk), z7.lineTo(fk, 0), z7.stroke()
	}
}

function cN() {
	var aA6, k, aA7, aA8, aA9, aAA, aAB, aAC, aAD;

	function a24() {
		return aS.aAW(aO.aAS()) ? ax.iU ? __fx.settings.keybindButtons ? aS.ft - 2 * aS.k - 3 * aA7 : aS.ft - aS.k - 2 * aA7 : __fx.settings.keybindButtons ? aS.ft - aS.k - 2 * aA7 : aS.ft - aA7 : bF.aAW(aO.aAV()) ? ax.iU ? bF.a24() - aS.k - 2 *
			aA7 : bF.a24() - aA7 : ax.iU ? i.k - aS.k - (bn.a9F() + 1) * aA7 : i.k - bn.a9F() * bf.gap
	}

	function aAI(el, pV, id, hI, aAM, aAN, lg, aAO, aAP, aAQ, aAb) {
		var aC, p3, a6q, q4, aAc = void 0 !== aAP,
			j = Math.floor(aR.measureText(pV, aO.a9s) + 1.5 * aA8 + (aAc ? k : 1.5 * aA8));
		if (bi.e2 = !0, aAb || bu.a2Q(pV, aAP), j + 2 * aA7 + aS.k > i.j && !aAc && 50 !== id && 20 < pV.length) aAI(el, (aAb = bD.pZ.a8E(pV))[0], id, hI, aAM, aAN, lg, aAO, aAP, aAQ, !0), aAI(el, aAb[1], id, hI, aAM, aAN, lg, aAO, aAP, aAQ, !0);
		else if (aAb = j + (50 === id ? aA9 : 0), (a6q = document.createElement("canvas")).width = j, a6q.height = k, (p3 = a6q.getContext("2d", {
				alpha: !0
			})).font = aO.a9s, bD.ta.textBaseline(p3, 1), bD.ta.textAlign(p3, 0), p3.clearRect(0, 0, j, k), p3.fillStyle = aAN, p3.fillRect(0, 0, j, k), __fx.utils.smoothFrame(p3, j, k, 0), p3.fillStyle = aAM, p3.fillText(pV, Math.floor(1.5 * aA8),
				Math.floor(k / 2)), aAc && (p3.imageSmoothingEnabled = !0, ak.a2T.a2y(aAP, p3, j - k, 0, k)), 0 === (q4 = {
				ek: el,
				pV: pV,
				id: id,
				player: hI,
				canvas: a6q,
				aAM: aAM,
				aAN: aAN,
				j: j,
				aAT: aAb,
				lg: lg,
				aAO: aAO,
				aAP: aAP,
				aAQ: aAQ
			}).ek || 0 < aA6.length && 0 < aA6[0].ek) aA6.unshift(q4);
		else {
			for (aC = 1; aC < aA6.length; aC++)
				if (0 < aA6[aC].ek) return void aA6.splice(aC, 0, q4);
			aA6.push(q4)
		}
	}

	function aAJ(eS, w5, g4) {
		return "rgb(" + eS + "," + w5 + "," + g4 + ")"
	}

	function aAd(id, hD) {
		for (var fk = aA6.length, aC = 0; aC < fk; aC++) aA6[aC].id === id && hD-- <= 0 && (aA6.splice(aC, 1), aC--, fk--)
	}

	function aAe(id, player) {
		for (var fy = !1, aC = aA6.length - 1; 0 <= aC; aC--) aA6[aC].id !== id || player !== aE.fh && aA6[aC].player !== player || (aA6.splice(aC, 1), fy = !0);
		return fy
	}

	function aB2(pV) {
		aAI(340, pV, 6, 0, aAJ(215, 245, 255), bE.qK, -1, !1)
	}
	this.aAE = "", this.dv = function() {
		var self;
		aAC = 0, aAB = a1.a2.iu() ? 7 : 12, aAA = {
				xC: [0, 0, 0],
				aAF: [0, 0, 0],
				nx: [220, 180, 180],
				z5: [0, 0, 0],
				eu: [0, 0, 0]
			}, aA6 = [], this.resize(), aE.i9 && this.a4B(0, 18), bV.xT.aB1[bV.fQ].name.length && aB2(L(100, [bV.xT.aB1[bV.fQ].name])), bV.xT.aB1[bV.fQ].aB3 && aB2(L(101, [bV.xT.aB1[bV.fQ].aB3])), aB2(L(102, [bV.fv - 2 + "x" + (bV.fw - 2)])),
			aB2(L(103, [bD.pZ.a3G(aq.aB4)])), aq.aB4 !== aq.aB5 && aB2(L(104, [bD.pZ.a3G(aq.aB5) + " (" + bD.pZ.a8A(100 * aq.aB5 / aq.aB4, 1) + ")"])), 0 < aq.aB6 && aB2(L(80, [bD.pZ.a3G(aq.aB6) + " (" + bD.pZ.a8A(100 * aq.aB6 / aq.aB4, 1) +
				")"])), 0 < aq.aB7 && aB2(L(105, [bD.pZ.a3G(aq.aB7) + " (" + bD.pZ.a8A(100 * aq.aB7 / aq.aB4, 1) + ")"])), 10 === aE.lL && aAI(120, L(106), 6, 0, aAJ(235, 255, 120), bE.qK, -1, !1), 0 !== (self = this).aAE.length && (aAI(200, self
				.aAE, 0, 0, bE.qN, bE.qK, -1, !1), self.aAE = ""), aE.a2P && aAI(340, L(56), 6, 0, aAJ(255, 200, 0), bE.qK, -1, !1), (self = aE.data.a90) && aAI(340, 1 === self ? L(58) : L(59, [self]), 10, 0, bE.qN, bE.qK, -1, !1)
	}, this.resize = function() {
		var aAL, aC;
		if (k = (k = Math.floor((a1.a2.iu() ? .031 : .0249) * i.iv)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.a9s = bD.ta.v9(1, this.fontSize), aA7 = bf.gap, aA8 = Math.floor(k / 5), 0 < aA6.length)
			for (aAL = aA6, aA6 = [], aC = aAL.length - 1; 0 <= aC; aC--) aAI(aAL[aC].ek, aAL[aC].pV, aAL[aC].id, aAL[aC].player, aAL[aC].aAM, aAL[aC].aAN, aAL[aC].lg, aAL[aC].aAO, aAL[aC].aAP, aAL[aC].aAQ, !0);
		this.aAR()
	}, this.aAR = function() {
		aAD = document.createElement("canvas");
		var pV = L(57),
			p3 = (aA9 = aR.measureText(pV, this.a9s) + 5 * aA8, aAD.height = k, aAD.width = aA9, aAD.getContext("2d", {
				alpha: !0
			}));
		p3.font = this.a9s, bD.ta.textBaseline(p3, 1), bD.ta.textAlign(p3, 1), p3.clearRect(0, 0, aA9, k), p3.fillStyle = bE.qk, p3.fillRect(0, 0, aA9, k), p3.fillStyle = bE.qN, p3.fillText(pV, Math.floor(aA9 / 2), Math.floor(k / 2))
	}, this.aAS = function() {
		var fk;
		return ax.iU ? ax.j : 0 === (fk = aA6.length) ? 0 : 1 === fk ? aA6[0].aAT : aAU(aA6[0].aAT, aA6[1].aAT)
	}, this.aAV = function() {
		var fk = aA6.length;
		return ax.iU ? fk ? aAU(ax.j, aA6[0].aAT) : ax.j : 0 === fk ? 0 : 1 === fk ? aA6[0].aAT : 2 === fk ? aAU(aA6[0].aAT, aA6[1].aAT) : aAU(aAU(aA6[0].aAT, aA6[1].aAT), aA6[2].aAT)
	}, this.hy = function(fr, ft) {
		for (var o6, aAX, aAY = a24(), aC = aA6.length - 1; 0 <= aC; aC--)
			if ((aAX = aAY - (aC + 1) * k) <= ft && ft < aAX + k) return 50 === aA6[aC].id ? fr >= i.j - aA9 - aA7 - aA6[aC].j && (fr >= i.j - aA9 - aA7 ? bB.h6.sU(aA6[aC].player) : aI.o1(aA6[aC].player, 800, !1, 0), !0) : fr >= i.j - aA6[aC].j -
				aA7 && (736 === aA6[aC].id ? (aAX = "https://" + aA6[aC].pV, window.open(aAX, "_blank"), aT.oB = !1) : aA6[aC].aAO && (aA6[aC].aAQ && aA6[aC].aAQ.g3 ? (aAX = aA6[aC].aAQ.fW, o6 = bP.fs(aAX) - 10, aAX = bP.fu(aAX) - 10, aI.o0(
					o6, aAX, 19 + o6, 19 + aAX)) : aA6[aC].aAQ && aA6[aC].aAQ.g4 ? aI.o2(aA6[aC].player, aA6[aC].aAQ.o3) : (aI.o1(aA6[aC].player, 800, !1, 0), 0 <= aA6[aC].lg && (o6 = aA6[aC].lg, aA6[aC].lg = aA6[aC].player, aA6[aC]
					.player = o6))), !0);
		return !1
	}, this.a2Q = function(el, pV, id, hI, aAM, aAN, lg, aAO, aAP, aAQ) {
		aAI(el, pV, id, hI, aAM, aAN, lg, aAO, aAP, aAQ)
	}, this.aAa = function(s) {
		aAI(300, s, 252, 0, bE.qN, bE.qK, -1, !1)
	}, this.a8Q = function(id) {
		for (var aC = aA6.length - 1; 0 <= aC; aC--) aA6[aC].id === id && (aA6[aC].ek = 1)
	}, this.a4B = function(player, id) {
		0 === id ? (aR.et(player, 0), aAd(423, 2), aAI(160, L(60, [ah.a2R[player]]), 423, player, "rgb(10,220,10)", bE.qK, -1, !1)) : 1 === id ? (aAe(50, aE.fh), aR.et(player, 1), aAI(360, L(61, [ah.a2R[player]]), 0, player, bE.r5, bE.qK, -1, !
				0), aI.o1(player, 2700, !1, 0)) : 2 === id ? (aR.et(player, 2), aAI(0, L(62), 0, player, "rgb(10,255,255)", bE.qK, -1, !0), aI.o1(player, 2700, !1, 0)) : 3 === id ? (aR.et(player, 2), aAI(0, L(63, [ah.a2R[player]]), 0, player, bE
				.qN, bE.qK, -1, !0), aI.o1(player, 2700, !1, 0)) : 4 === id ? this.aAf(1, player, player) : 5 === id ? bD.h6.kQ(aE.fU) || (function(id, na) {
				var aC, aAq = 0,
					fk = aA6.length;
				for (aC = 0; aC < fk; aC++)
					if (aA6[aC].id === id && na <= ++aAq) return aA6.splice(aC, 1)
			}(1, 5), ag.aAh(player) && aAI(180, L(64, [ah.a2R[player]]), 1, player, aAJ(255, 200, 180), bE.qK, -1, !0), bD.h6.a7W(player, 10) && (aAd(573, 0), aAI(180, L(65, [ah.a2R[player]]), 573, player, bE.r5, bE.qK, -1, !0))) : 18 === id ?
			aAI(255, L(66), 18, 0, bE.qN, bE.qK, -1, !1) : 21 === id ? aAI(220, L(67), id, 0, bE.qN, bE.qK, -1, !1) : 22 === id ? this.aAf(2, player, player) : 59 === id && aAI(0, L(68), id, 0, bE.rT, bE.qK, 0, !1)
	}, this.a5I = function(s) {
		aAI(200, L(69, [s]), 94, 0, bE.qN, bE.r1, -1, !1)
	}, this.a4N = function(aAi) {
		if (aE.fU === aAi && !aE.lN && !aE.ht && !aE.hu)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aAI(0, "Your Win Count is now " + __fx.wins.count, 3, aAi, bE.qN, bE.qK, -1, !0);
		ah.hY[aAi] && (aR.et(aAi, 2), aE.l3 < 100 ? aAI(0, L(63, [ah.a2R[aAi]]), 3, aAi, bE.qN, bE.qK, -1, !0) : aAI(0, L(70, [ah.a2R[aAi]]), 3, aAi, bE.qN, bE.qK, -1, !0))
	}, this.a9l = function(fO) {
		var pV, aAl, aAj = "(" + bP.fs(fO >> 2) + ", " + bP.fu(fO >> 2) + ")",
			aAO = !1,
			player = 0;
		ad.ff(fO) ? ad.fb(fO) ? aAj = L(71, [aAj]) : (player = ad.fc(fO), (aE.ht || aE.hu) && !1 === __fx.hoveringTooltip.active && player !== aE.fU && (aE.fU = player, bg.aAk()), pV = L(72, [bD.p3.a75(ah.a4h[player], bD.ta.v9(0, 10), 150)]) +
			"   ", pV = (pV += L(73, [bD.pZ.a3G(ah.hm[player])]) + "   ") + L(74, [bD.pZ.a3G(ah.hY[player])]) + "   ", aE.ic && (aAl = bj.a4K[bj.lQ[bj.fi[player]]], pV += L(75) + ": " + aAl + "   "), bD.h6.kQ(player) && (pV += L(76) + ": " +
				aF.lE[aF.iR[player]] + "   "), aAj = pV = (pV += L(77, [player]) + "   ") + L(78, [aAj]), aAO = !0) : aAj = ad.fp(fO) ? L(79, [aAj]) + "   #" + ad.fS(fO) : L(80, [aAj]), aAd(55, 0), aAI(220, aAj, 55, player, bE.qN, bE.qK, -1,
			aAO, void 0, void 0, !0)
	}, this.a9n = function(aAm) {
		var ly = bQ.z,
			player = ly.mx[aAm] >> 3,
			pV = (bi.e2 = !0, aAd(55, 0), L(81, [ah.a2R[player]]) + "   ");
		aAI(220, pV += L(73, [bD.pZ.a3G(ly.aAn[aAm])]), 55, player, bE.qN, bE.qK, -1, !0)
	}, this.sD = function(rr, aAo, sE) {
		rr === aE.fU ? aAI(175, " " + L(82, [ah.a2R[aAo]]) + ": ", 1001, aAo, aAJ(200, 255, 210), bE.qK, -1, !0, sE) : this.aAp(rr, sE)
	}, this.aAp = function(rr, sE) {
		aAd(1e3, 0), aAI(175, ah.a2R[rr] + ": ", 1e3, rr, bE.qN, "rgba(5,60,25,0.9)", -1, !0, sE)
	}, this.a4M = function() {
		var s;
		aE.a42 ? (s = L(83), aR.a4L(L(84), 2, 1, 12), aAI(0, s, 40, 0, "rgb(10,220,10)", bE.qK, -1, !1)) : (s = L(85), aR.a4L(L(86), 2, 0, 16), aAI(0, s, 41, 0, bE.qN, bE.qK, -1, !1))
	}, this.a2E = function() {
		var hD = ah.a2R,
			fn = aE.data;
		aAI(300, hD[0] + " [" + aE.a4H.a2K(fn.elo[0]) + "] vs " + hD[1] + " [" + aE.a4H.a2K(fn.elo[1]) + "]", 65, 0, bE.qE, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aAr = function(s) {
		aAI(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aAs = function(aAt) {
		aAI(0, L(aAt ? 87 : 88), 247, 0, bE.rS, bE.qK, -1, !1)
	}, this.a2M = function(a2J, a2L, aAu) {
		var fn = aE.data,
			hD = ah.a2R;
		aAI(0, hD[0] + ": " + aE.a4H.a2K(fn.elo[0]) + " -> " + a2J, 66, 0, bE.qN, aAu[0], -1, !1), aAI(0, hD[1] + ": " + aE.a4H.a2K(fn.elo[1]) + " -> " + a2L, 66, 1, bE.qN, aAu[1], -1, !1)
	}, this.sV = function(player, id) {
		0 === id ? aAe(50, player) ? (aAI(128, L(89, [ah.a2R[player]]), 52, player, aAJ(180, 255, 180), bE.qK, -1, !0), ag.tB(player, 2, 255)) : aAI(384, L(90, [ah.a2R[player]]), 51, player, aAJ(210, 210, 255), bE.qK, -1, !0) : aAe(51, player) ?
			(aAI(128, L(91, [ah.a2R[player]]), 52, player, bE.qN, "rgba(60,120,10,0.9)", -1, !0), ag.tB(player, 2, 255)) : (aAI(384, L(92, [ah.a2R[player]]), 50, player, bE.qN, "rgba(90,90,90,0.9)", -1, !0), ag.tB(player, 2, 96))
	}, this.sZ = function(xC, target) {
		var color = aAJ(210, 255, 210);
		1 < xC.length ? aAI(230, L(93, [xC.length, ah.a2R[target]]), 66, target, color, bE.qK, -1, !0) : aAI(230, L(94, [ah.a2R[xC[0]], ah.a2R[target]]), 66, xC[0], color, bE.qK, target, !0)
	}, this.aAv = function(player, target) {
		aAI(230, L(95, [ah.a2R[player], ah.a2R[target]]), 66, player, bE.qN, "rgba(75,65,5,0.9)", target, !0)
	}, this.aAw = function(id, hD) {
		aAd(id, hD)
	}, this.a45 = function(id, player) {
		aAe(id, void 0 === player ? aE.fh : player)
	}, this.aAx = function(id) {
		for (var aC = aA6.length - 1; 0 <= aC; aC--)
			if (aA6[aC].id === id) return aA6[aC];
		return null
	}, this.sQ = function(a99, aAy, player) {
		2 !== ah.a7R[aE.fU] && aAI(200, 1 === a99 ? L(96, [ah.a2R[player]]) : L(97, [bD.pZ.a3G(a99), ah.a2R[player]]), 30, player, "rgb(190,255,190)", bE.qK, -1, !0)
	}, this.aB0 = function(a99, player) {
		2 !== ah.a7R[aE.fU] && (aAd(31, 0), a99 = " (" + bD.pZ.a3G(a99) + ") 💸", aAI(150, a99 = bD.h6.kQ(player) ? L(98) + a99 : L(99, [ah.a2R[player]]) + a99, 31, player, bE.qE, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a44 = function(c3) {
		for (var eu = bi.l0(), aC = 2; 0 <= aC; aC--) 0 < aAA.z5[aC] && (c3 || aAA.eu[aC] < eu - 220) && this.aB8(aC)
	}, this.aB8 = function(id) {
		var pV, fk = aAA.z5[id],
			player = aAA.xC[id];
		aAA.z5[id] = 0, 1 === fk ? (0 === id ? pV = L(107, [ah.a2R[player], ah.a2R[aAA.aAF[0]]]) : 1 === id ? pV = L(108, [ah.a2R[player]]) : 2 === id ? pV = L(109, [ah.a2R[player]]) : 3 === id && (pV = L(110, [ah.a2R[player]])), aAd(7, 0), aAI(
			aAA.nx[id], pV, 7, aAA.aAF[id], bE.qN, bE.qK, -1, !0)) : (pV = L(0 === id ? 111 : 1 === id ? 112 : 113, [fk]), aAd(7, 0), aAI(aAA.nx[id], pV, 7, player, bE.qN, bE.qK, -1, !1))
	}, this.aAf = function(id, iD, lg) {
		var eu = bi.l0(),
			fk = aAA.z5[id] + 1;
		aAA.z5[id]++, aAA.xC[id] = iD, aAA.aAF[id] = lg, 1 === fk && (aAA.eu[id] = eu), (1 === fk && (aE.a40 < 32 || 2 === aE.a3x) || 1 < fk && (aAA.eu[id] < eu - 140 || 2 === aE.a3x)) && this.aB8(id)
	}, this.ep = function() {
		b3.ep();
		for (var kI = (kI = aA6.length - aAB) <= 1 ? 1 : kI * kI, aC = aA6.length - 1; 0 <= aC; aC--) 0 < aA6[aC].ek && (aA6[aC].ek -= kI, aA6[aC].ek <= 0) && (bi.e2 = !0, aA6.splice(aC, 1));
		! function() {
			var hD, aC;
			if (128 !== aAC && !(++aAC < 128))
				for (hD = 5, aC = am.lZ - 1; 0 <= aC; aC--) 1 === ah.a7R[am.le[aC]] && 0 < hD-- && aAI(240, L(110, [ah.a2R[am.le[aC]]]), 1, am.le[aC], bE.qE, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a44(!1)
	}, this.z6 = function() {
		for (var a15, ft = a24(), aC = aA6.length - 1; 0 <= aC; aC--) a15 = ft - (aC + 1) * k, 50 === aA6[aC].id ? (z7.drawImage(aA6[aC].canvas, i.j - aA6[aC].j - aA9 - aA7, a15), z7.drawImage(aAD, i.j - aA9 - aA7, a15)) : z7.drawImage(aA6[aC]
			.canvas, i.j - aA6[aC].j - aA7, a15)
	}, this.aBA = function(id, iR) {
		var aAj, aBB = bE.qX;
		0 === id ? aAj = L(114) : 1 === id ? (aAj = L(115), aBB = bE.rK) : 2 === id ? aAj = L(116) : 3 === id ? aAj = L(117) : (aAj = bD.pZ.a3G(iR), aBB = 5 === id ? bE.rK : bE.qK), aAd(74, 0), aAI(0, aAj, 74, 0, bE.qN, aBB, -1, !1, void 0,
			void 0, !0)
	}
}

function cO() {
	var aBD, v0, z8 = "",
		a0q = 0,
		a0r = 0,
		aBC = -1,
		eO = ["Team", "BR", "1v1", "Zombie"],
		aBE = [
			[0, 15, 30, 45],
			[10, 40],
			[25],
			[55]
		],
		aBF = 10;

	function aBJ() {
		for (var aBK = aBL(), aBM = -1, aBH = 0, aC = 0; aC < aBE.length; aC++) {
			var fn = aBN(aC, aBK);
			0 <= fn && (aBM < 0 || fn < aBM) && (aBM = fn, aBH = aC)
		}
		if (!(aBM < 0)) return aBM !== aBC && (z8 = eO[aBH] + " " + v0 + ": " + aBO(aBM), aBC = aBM, a0q = aR.measureText(z8, aBD), a0q += Math.floor(.4 * a0r), 1);
		z8 = ""
	}

	function aBL() {
		var el = new Date;
		return 60 * el.getUTCMinutes() + el.getUTCSeconds()
	}

	function aBN(aBH, aBK) {
		for (var aBQ = aBE[aBH], gC = -1, g3 = 0; g3 < aBQ.length; g3++) {
			var fn = (fn = 60 * aBQ[g3] + aBF - aBK) <= 0 ? 3600 + fn : fn;
			(gC < 0 || fn < gC) && (gC = fn)
		}
		return gC
	}

	function aBO(aBR) {
		return aBS(Math.floor(aBR / 60)) + ":" + aBS(aBR % 60)
	}

	function aBS(aBT) {
		return aBT < 10 ? "0" + aBT : String(aBT)
	}
	this.aBG = function(aBH, aBI) {
		return 0 <= aBE[aBH].indexOf(aBI)
	}, this.dv = function() {
		v0 = L(118)
	}, this.resize = function() {
		a0q = Math.floor((a1.a2.iu() ? .53 : .36) * i.iv), a0r = Math.floor(.065 * a0q), aBD = bD.ta.v9(1, Math.floor(.9 * a0r)), aBC += 1e3, aBJ()
	}, this.ep = function() {
		aBJ() && (bi.e2 = !0)
	}, this.aBP = function(w1, w2) {
		for (var aBK = aBL(), pV = "", aC = w1; aC < Math.min(w2, aBE.length); aC++) {
			var fn = aBN(aC, aBK);
			0 <= fn && (pV += (pV ? "   " : "") + eO[aC] + ": " + aBO(fn))
		}
		return pV
	}, this.z6 = function(ft) {
		z8 && (z7.lineWidth = 1 + Math.floor(a0r / 15), z7.translate(i.j - a0r, ft + a0q), z7.rotate(-Math.PI / 2), z7.fillStyle = bE.qN, z7.fillRect(0, 0, a0q, a0r), z7.strokeStyle = bE.qE, z7.strokeRect(0, 0, a0q, a0r + 10), z7.fillStyle = bE
			.qE, z7.font = aBD, bD.ta.textBaseline(z7, 1), bD.ta.textAlign(z7, 1), z7.fillText(z8, Math.floor(a0q / 2), Math.floor(.59 * a0r)), z7.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cP() {
	var a98, aBU, aBV, a0r, aBW, aBX = 0,
		aBY = 0;

	function aBb(aC) {
		var aBd = !0,
			a35 = bE.qN,
			j = (1 === a98[aC].id ? a98[aC].p3.fillStyle = bE.rI : a98[aC].kC === aE.fh ? a98[aC].p3.fillStyle = bE.qY : (ad.aBe(a98[aC].kC), a98[aC].p3.fillStyle = bD.color.qH(bR.gJ[0], bR.gJ[1], bR.gJ[2], .87), 400 < bD.th.a6U(bR.gJ, 0, 2) && (
				aBd = !1, a35 = bE.qE)), a98[aC].canvas.width),
			vo = (a98[aC].p3.clearRect(0, 0, j, a0r), a98[aC].p3.fillRect(0, 0, j, a0r), a98[aC].p3.fillStyle = a35, ! function(p3, j, a0r) {
				p3.fillRect(0, 0, j, 1), p3.fillRect(0, a0r - 1, j, 1), p3.fillRect(0, 0, 1, a0r), p3.fillRect(j - 1, 0, 1, a0r)
			}(a98[aC].p3, j, a0r), aBU + 2 * a0r < j && (a98[aC].p3.fillRect(j - aBU - a0r, 0, 1, a0r), a98[aC].p3.fillText(ah.a2R[a98[aC].kC], Math.floor((j - aBU) / 2), Math.floor(.57 * a0r))), a0r);
		a98[aC].p3.fillText(bD.pZ.a3G(a98[aC].iR), Math.floor(j - aBU / 2 - vo), Math.floor(.57 * a0r)),
			function(aC, j, vo, aBd) {
				a98[aC].p3.fillStyle = aBd ? bE.qP : bE.qL;
				var aBd = a98[aC].iR,
					max = a98[aC].aBk,
					aBd = max <= aBd ? aBU : Math.floor(aBU * aBd / max);
				a98[aC].p3.fillRect(Math.floor(j - aBU - vo), a0r - aBW, aBd, aBW)
			}(aC, j, vo, aBd),
			function(aC, j, aBd, a35) {
				a98[aC].p3.strokeStyle = a98[aC].aBm ? bE.qW : aBd ? bE.qx : bE.qy, a98[aC].p3.fillStyle = a35, a98[aC].p3.fillRect(j - a0r, 0, 1, a0r), a98[aC].p3.lineWidth = Math.max(Math.floor(a0r / 12), 3), a98[aC].p3.lineCap = "round";
				aBd = .35;
				j = a0r + 1, a98[aC].p3.beginPath(), a98[aC].p3.moveTo(Math.floor(j - aBd * a0r + 0), Math.floor(aBd * a0r)), a98[aC].p3.lineTo(Math.floor(j - a0r + aBd * a0r), Math.floor(a0r - aBd * a0r + 0)), a98[aC].p3.stroke(), a98[aC].p3
					.beginPath(), a98[aC].p3.moveTo(Math.floor(j - a0r + aBd * a0r), Math.floor(aBd * a0r)), a98[aC].p3.lineTo(Math.floor(j - aBd * a0r + 0), Math.floor(a0r - aBd * a0r + 0)), a98[aC].p3.stroke()
			}(aC, j, aBd, a35), (0 === a98[aC].id ? function(aC, j, aBd) {
				a98[aC].p3.strokeStyle = aBd ? bE.qf : bE.qp, a98[aC].p3.fillRect(a0r, 0, 1, a0r);
				aBd = j - a0r;
				a98[aC].p3.beginPath(), a98[aC].p3.moveTo(Math.floor(.3 * a0r + aBd), Math.floor(a0r / 2)), a98[aC].p3.lineTo(Math.floor(a0r - .3 * a0r + 0 + aBd), Math.floor(a0r / 2)), a98[aC].p3.stroke(), a98[aC].p3.beginPath(), a98[aC].p3
					.moveTo(Math.floor(a0r / 2 + aBd), Math.floor(.3 * a0r)), a98[aC].p3.lineTo(Math.floor(a0r / 2 + aBd), Math.floor(a0r - .3 * a0r + 0)), a98[aC].p3.stroke()
			} : function(aC, j, aBd) {
				var aC = a98[aC].p3,
					j8 = Math.floor(.12 * a0r),
					o6 = Math.floor(.34 * a0r + j - a0r),
					j = Math.floor(a0r - .34 * a0r + j - a0r);
				aC.strokeStyle = aBd ? bE.qf : bE.qp, aC.fillRect(a0r, 0, 1, a0r), aC.beginPath(), aC.moveTo(o6, Math.floor(a0r / 2) - j8), aC.lineTo(j, Math.floor(a0r / 2) - j8), aC.stroke(), aC.beginPath(), aC.moveTo(o6, Math.floor(a0r / 2) +
					j8), aC.lineTo(j, Math.floor(a0r / 2) + j8), aC.stroke()
			})(aC, j, aBd)
	}

	function aBy(h, aBw) {
		for (var iR, aC = aBw - 1; 0 <= aC; aC--) iR = ae.gx(aE.fU, aC), h[aC].iR !== iR && (h[aC].iR = iR, h[aC].aBk = Math.max(iR, h[aC].aBk), h[aC].aBc = !0)
	}

	function aC2(h, aC0) {
		for (var w1 = aE.fU << 3, aAn = bQ.z.aAn, aC4 = bQ.z.aC4, aC = aC0 - 1; 0 <= aC; aC--) {
			var aC5 = aC4[w1 + aC],
				iR = aAn[aC5],
				aC5 = bQ.ls.aC6(aC5);
			h[aC].iR === iR && h[aC].aBk === aC5 || (h[aC].iR = iR, h[aC].aBk = aC5, h[aC].aBc = !0)
		}
	}

	function aBa(a9B) {
		a9B.canvas = document.createElement("canvas"), bV.aBZ.font = aBV;
		var j = aBU;
		a9B.kC < aE.fh && 0 === a9B.id && (j += Math.floor(bV.aBZ.measureText(ah.a2R[a9B.kC] + "000").width)), j += 2 * a0r, a9B.canvas.width = j, a9B.canvas.height = a0r, a9B.p3 = a9B.canvas.getContext("2d", {
			alpha: !0
		}), a9B.p3.font = aBV, bD.ta.textBaseline(a9B.p3, 1), bD.ta.textAlign(a9B.p3, 1)
	}

	function aBs(aC) {
		return aV.aC7() ? i.j - a98[aC].canvas.width - bf.gap : aV.fr
	}

	function aBt(aC) {
		return Math.floor(2 * bf.gap + (aV.aC7() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * a0r))
	}
	this.dv = function() {
		aBX = aBY = 0, a98 = [], this.resize()
	}, this.resize = function() {
		aBV = aO.a9s, a0r = aO.fontSize + 5, a0r = Math.floor(1.25 * a0r), a1.a2.iu() && (a0r = Math.floor(1.25 * a0r)), aBW = Math.floor(.15 * a0r), bV.aBZ.font = aBV, aBU = Math.floor(bV.aBZ.measureText("02 000 000 0000").width);
		for (var aC = a98.length - 1; 0 <= aC; aC--) aBa(a98[aC]), aBb(aC)
	}, this.nR = function() {
		for (var aC = a98.length - 1; 0 <= aC; aC--) a98[aC].aBc && (a98[aC].aBc = !1, aBb(aC))
	}, this.hy = function(mI, mJ) {
		if (!(2 === aE.a3x || 0 === ah.nf[aE.fU] || aE.ht || aE.hu || bD.h6.kQ(aE.fU)))
			for (var aBn, aBp, aBo, aBq = a1.a2.iu() ? a0r : 0, aBr = a1.a2.iu() ? Math.floor(.15 * a0r) : 0, aC = a98.length - 1; 0 <= aC; aC--)
				if (aBn = aBs(aC), aBo = aBt(aC), aBp = a98[aC].canvas.width, aBo - aBr <= mJ && mJ <= aBo + a0r + aBr) {
					if (aBn - aBq <= mI && mI <= aBn + a0r + aBq) return 0 !== a98[aC].id ? bB.iB.s5(a98[aC].kC) : a98[aC].aBm || (a98[aC].aBc = !0, a98[aC].aBm = !0, bB.iB.sB(a98[aC].kC)), !0;
					if (aBn + aBp - a0r - aBq <= mI && mI <= aBn + aBp + aBq) return aBo = aS.iF(), 0 === a98[aC].id ? (bY.a9a(3), bB.iB.iI(aBo, a98[aC].kC)) : bB.iB.s8(aBo, a98[aC].kC), !0
				} return !1
	}, this.ep = function() {
		var a6c, a6d, h, aBw;
		0 === ah.nf[aE.fU] || bD.h6.kQ(aE.fU) && !aE.ht && !aE.hu || (a6c = a98.slice(0, aBX), a6d = a98.slice(aBX, aBX + aBY), h = a6c, aBw = ae.gr(aE.fU), function(h, aBw) {
			if (aBX !== aBw) return 1;
			for (var aC = aBw - 1; 0 <= aC; aC--)
				if (h[aC].kC !== ae.gw(aE.fU, aC)) return 1;
			return
		}(h, aBw) ? aBy(h = function(h, aBw) {
			var aC, kC, g4, iR, aAL = [];
			loop: for (aC = 0; aC < aBw; aC++) {
				for (kC = ae.gw(aE.fU, aC), g4 = 0; g4 < h.length; g4++)
					if (h[g4].kC === kC) {
						aAL.push(h.splice(g4, 1)[0]);
						continue loop
					} iR = ae.gx(aE.fU, aC), aBa(iR = {
					kC: kC,
					iR: iR,
					aBk: iR,
					id: 0,
					aBc: !0,
					aBm: !1,
					canvas: null,
					p3: null
				}), aAL.push(iR)
			}
			return aAL
		}(h, aBw), aBw) : aBy(h, aBw), a6c = h, a6d = function(h) {
			var aC0 = bQ.z.l7[aE.fU];
			return function(h, aC0) {
				if (aBY !== aC0) return 1;
				for (var w1 = aE.fU << 3, mw = bQ.z.mw, aC4 = bQ.z.aC4, aC = aC0 - 1; 0 <= aC; aC--) {
					var aC5 = aC4[w1 + aC];
					if (h[aC].kC !== mw[aC5]) return 1
				}
				return
			}(h, aC0) ? aC2(h = function(h, aC0) {
				var aC, kC, g4, iR, aAL = [],
					w1 = aE.fU << 3,
					mw = bQ.z.mw,
					aAn = bQ.z.aAn,
					aC4 = bQ.z.aC4;
				loop: for (aC = 0; aC < aC0; aC++) {
					var aC5 = aC4[w1 + aC];
					for (kC = mw[aC5], g4 = 0; g4 < h.length; g4++)
						if (h[g4].kC === kC) {
							aAL.push(h.splice(g4, 1)[0]);
							continue loop
						} iR = aAn[aC5], aBa(iR = {
						kC: kC,
						iR: iR,
						aBk: bQ.ls.aC6(aC5),
						id: 1,
						aBc: !0,
						aBm: !1,
						canvas: null,
						p3: null
					}), aAL.push(iR)
				}
				return aAL
			}(h, aC0), aC0) : aC2(h, aC0), h
		}(a6d), aBX = a6c.length, aBY = a6d.length, a98 = a6c.concat(a6d))
	}, this.z6 = function() {
		if (0 !== ah.nf[aE.fU] && (!bD.h6.kQ(aE.fU) || aE.ht || aE.hu))
			for (var aC = a98.length - 1; 0 <= aC; aC--) z7.drawImage(a98[aC].canvas, aBs(aC), aBt(aC))
	}
}

function cQ() {
	var aA6, l8, aC8, aC9, k, a9s, fontSize, aCA, aCB, aCC, aCD, canvas, p3, ns, aCE;

	function zN(aC) {
		return L(0 === aC ? 119 : 1 === aC ? 120 : 2 === aC ? 121 : 122)
	}

	function aCL() {
		aE.ic ? aCM + 4 * bf.gap + k + bk.aCN() > aS.ft ? z7.drawImage(canvas, 2 * bf.gap + bk.aCN(), aCM + 2 * bf.gap) : z7.drawImage(canvas, bf.gap, aCM + 3 * bf.gap + bk.aCN()) : z7.drawImage(canvas, bf.gap, aCM + 2 * bf.gap)
	}

	function aCF() {
		canvas.width = aA6[0].width + aCC, canvas.height = k + aCC, (p3 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, aA6[0].width + aCC, k + aCC), p3.translate(Math.floor(aCC / 2), Math.floor(aCC / 2)), p3.lineWidth = aCC, p3.fillStyle = 1 === aA6[0].aCK ? bE.qS : bE.qK, aCO(), p3.fill(), p3.strokeStyle = 1 === aA6[0].aCK ? bE.qE :
			bE.qN, aCO(), p3.stroke(), bD.ta.textAlign(p3, 1), bD.ta.textBaseline(p3, 1), p3.fillStyle = 1 === aA6[0].aCK ? bE.qE : bE.qN, p3.font = a9s[0], p3.fillText(zN(aA6[0].aCJ), Math.floor(aA6[0].width / 2), Math.floor(.72 * aCA[0] * k)), p3
			.font = a9s[1], p3.fillText(aA6[0].pV, Math.floor(aA6[0].width / 2), Math.floor((aCA[0] + .48 * aCA[1]) * k))
	}

	function aCO() {
		if (__fx.settings.smoothUI && p3.roundRect) return p3.beginPath(), p3.roundRect(0, 0, aA6[0].width, k, .15 * k);
		p3.beginPath(), p3.moveTo(aCD, 0), p3.lineTo(aA6[0].width - aCD, 0), p3.lineTo(aA6[0].width, aCD), p3.lineTo(aA6[0].width, k - aCD), p3.lineTo(aA6[0].width - aCD, k), p3.lineTo(aCD, k), p3.lineTo(0, k - aCD), p3.lineTo(0, aCD), p3.closePath()
	}
	this.dv = function() {
		l8 = 4, aC8 = aC9 = ns = 0, aA6 = [], a9s = new Array(2), fontSize = new Array(2), (aCA = new Array(2))[0] = .3, aCA[1] = .7, aCB = new Array(4), canvas = document.createElement("canvas"), aCE = bi.ek + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.iu() ? .062 : .047) * i.iv), fontSize[0] = Math.floor(.85 * aCA[0] * k), fontSize[1] = Math.floor(.85 * aCA[1] * k), a9s[0] = bD.ta.v9(1, fontSize[0]), a9s[1] = bD.ta.v9(1, fontSize[1]), aC = aCB.length -
			1; 0 <= aC; aC--) aCB[aC] = this.measureText(zN(aC) + "000", a9s[0]);
		if (aCC = Math.floor(1 + .05 * k), aCD = Math.floor(.2 * k), 0 < aA6.length) {
			for (aC = aA6.length - 1; 0 <= aC; aC--) j = this.measureText(aA6[aC].pV + "00", a9s[1]), aA6[aC].width = j < aCB[aC] ? aCB[aC] : j;
			aCF()
		}
	}, this.ep = function() {
		0 !== l8 && (4 === l8 ? bi.ek > aCE && (l8 = 0, 1 === aE.a3x) && aR.a4L(bV.xT.aB1[bV.fQ].name, 3, 1, 9) : (1 === l8 ? (0 === aC8 && (aCF(), aC8 = 1e-4), 1 <= (aC8 += .002 * (bi.ek - ns)) && (aC9 = 0, l8 = 2, aC8 = 1), bi.e2 = !0) : 2 ===
			l8 ? ((aC9 += (bi.ek - ns) / 1e3) > aA6[0].nx || 1 < aC9 && 1 < aA6.length) && (l8 = 3) : 3 === l8 && ((aC8 -= .002 * (bi.ek - ns)) <= 0 && (aC8 = 0, aA6.shift(), l8 = 0 < aA6.length ? 1 : 0), bi.e2 = !0), ns = bi.ek))
	}, this.measureText = function(pV, a9s) {
		return z7.font = a9s, Math.floor(z7.measureText(pV).width)
	}, this.et = function(aCI, aC) {
		this.a4L(ah.a2R[aCI], aC, 1, 0 === aC ? 3 : 7)
	}, this.a4L = function(pV, aCJ, aCK, nx) {
		var j;
		pV.length && (j = (j = this.measureText(pV + "00", a9s[1])) < aCB[aCJ] ? aCB[aCJ] : j, aA6.push({
			pV: pV,
			width: j,
			aCJ: aCJ,
			aCK: aCK,
			nx: nx
		}), 0 === l8) && (aC8 = 0, l8 = 1, ns = bi.ek)
	}, this.z6 = function() {
		0 !== l8 && 0 !== aC8 && (aC8 < 1 ? (z7.globalAlpha = aC8, aCL(), z7.globalAlpha = 1) : aCL())
	}
}

function cz() {
	var k, canvas, p3, aCP, aCQ, aCR, aCS, aBc, aCT, aCU, aCV, aCW, aAt = !1,
		a6q = (this.iU = !1, this.j = 0, new Array(2)),
		aCX = 0;

	function nS() {
		var j = ax.j,
			ly = (aBc = !1, a27(p3, j, k), Math.floor(j / 2));
		1 === aCP ? (p3.fillStyle = bE.qh, p3.fillRect(ly, 0, ly, k)) : -1 === aCP && (p3.fillStyle = bE.qz, p3.fillRect(0, 0, ly, k)), a28(p3, j, k, 2);
		var ly = (ly = Math.floor(.25 * k)) < 2 ? 2 : ly,
			aB4 = (p3.fillStyle = bE.qT, Math.floor((k - 4) * aCQ[1] / aCR[1]));
		0 < aB4 && p3.fillRect(2, k - 2 - aB4, ly, aB4), 0 < (aB4 = Math.floor((k - 4) * aCQ[0] / aCR[0])) && p3.fillRect(j - 2 - ly, k - 2 - aB4, ly, aB4);
		ly = (ly = Math.floor(k / 8)) < 2 ? 2 : ly, a2A(p3, Math.floor(.4 * k), 0, k, ly, .5, !1), a2A(p3, Math.floor(j - 1.4 * k), 0, k, ly, .5, !0), aB4 = 1.1 * k / a6q[0].width;
		p3.imageSmoothingEnabled = !0, p3.setTransform(aB4, 0, 0, aB4, (j - aB4 * a6q[0].width) / 2, -.05 * k), p3.drawImage(a6q[+aAt], 0, 0), p3.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aCc() {
		aCW = -1, aAt = ai.aCd(), aO.a8Q(257), aO.aAs(aAt), ax.iU = !0, aBc = !0, aCT = 360;
		for (var gC, el = 0, aC = am.lZ - 1; 0 <= aC; aC--) bD.h6.kQ(am.le[aC]) || (el += ah.hY[am.le[aC]]);
		aAt ? aCR[0] = Math.max(bO.gB(3 * el, 4), 1) : aE.ic ? (gC = 9 === aE.lL ? 8 === bj.lQ[bk.lc()] ? 80 : (gC = bO.gB(100 * bk.la(), aE.kn), bO.gB(bO.it(1550 - 11 * gC, 400, 1e3), 10)) : (gC = bO.gB(100 * bk.la(), aE.kn), bO.gB(bO.it(1600 - 12 *
			gC, 400, 1e3), 10)), gC = bO.gB(gC * el, 100), aCR[0] = Math.max(gC, 1)) : 8 === aE.lL ? aCR[0] = Math.max(bO.gB(3 * el, 4), 1) : aCR[0] = Math.max(bO.gB(3 * el, 5), 1), aCR[1] = Math.max(el - aCR[0], 1)
	}

	function aCY() {
		aCV = bi.l0(), aBc = !0, aCT = aCP = 0, aCS = [], ax.iU = !1, aO.a45(247), aCQ[0] = aCQ[1] = 0, aO.a8Q(673)
	}

	function a24() {
		return aS.aAW(aO.aAS()) ? __fx.settings.keybindButtons ? aS.ft - 2 * (k + bf.gap) : aS.ft - k - bf.gap : bF.aAW(aO.aAV()) ? bF.a24() - k - bf.gap : i.k - k - bn.a9F() * bf.gap
	}
	this.dw = function() {
		for (var aC = 0; aC < 2; aC++) a6q[aC] = bD.canvas.a2j(ac.get(3), 8 - aC, bE.rg), a6q[aC] = bD.canvas.a6t(a6q[aC])
	}, this.dv = function() {
		aCV = -1e4, aCU = aCX = 0, aCW = -1, this.iU = !1, aBc = aAt = !1, aCQ = [aCP = aCT = 0, 0], aCR = [1, 1], aCS = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, p3 = canvas.getContext("2d", {
			alpha: !0
		}), nS()
	}, this.nR = function() {
		aBc && nS()
	}, this.hy = function(fr, ft) {
		return !!this.iU && !(fr < i.j - this.j - bf.gap || ft < a24() || (aE.ht || aE.hu || this.iV(aE.fU) && (aN.hv && aN.a67(), bB.iB.iW(fr > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.ep = function() {
		0 < aCU ? 0 === --aCU && aCY() : this.iU ? 180 == --aCT && 3 * aCQ[0] < aCR[0] ? aCY() : aCQ[0] >= aCR[0] ? aAt ? bU.a3b.a3s() : bU.a3b.a3w() : aCQ[1] >= aCR[1] ? aCU = 4 : aCT <= 0 && aCY() : ! function() {
			var aCf = bi.l0();
			if (aCf % 40 == 14) {
				if (aCX) return !(aCf < aCX) && !(aCf < aCV + 535) && (aCX = aCf + 1071, bD.h6.a7U()) ? (aCc(), 1) : 0;
				(1 === am.lZ || (aE.ic ? bk.la() : ah.hY[me[0]]) >= bO.gB(96 * aE.kn, 100)) && (aCX = aCf + 535)
			}
			return
		}() && 0 <= aCW && (aO.a2Q(250, L(123, [ah.a2R[aCW]]), 673, aCW, bE.qN, bE.qK, -1, !0), aCc())
	}, this.a3y = function() {
		this.iU && aCQ[0] < aCR[0] && aCY()
	}, this.tC = function(player, aCg) {
		var aCh = L(aCg ? 124 : 125, [ah.a2R[player]]),
			aCh = (aO.a2Q(450, aCh, 257, player, aCg ? bE.qf : bE.qw, bE.qK, -1, !0), aCS.push(player), aBc = !0, aE.lN ? Math.max(aCR[0], aCR[1]) : ah.hY[player]),
			aCh = Math.max(aCh, 1);
		aCg ? aCQ[0] += aCh : aCQ[1] += aCh, player === aE.fU && (aCP = aCg ? 1 : -1)
	}, this.z6 = function() {
		var ft;
		this.iU && (ft = a24(), z7.drawImage(canvas, i.j - this.j - bf.gap, ft))
	}, this.iX = function(player) {
		if (0 !== aCT) return !1;
		if (!bD.h6.hw(1)) return !1;
		if (!bD.h6.hx(player)) return !1;
		if (10 <= ko[player] && !bD.h6.a7l(player, 9)) return !1;
		if (!(aE.lN || m.e8 && m.eD)) {
			player = bi.l0();
			if (player < aCV + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iV = function(hI) {
		if (!bD.h6.hw(1)) return !1;
		if (!bD.h6.hx(hI)) return !1;
		if (!this.iU) return !1;
		for (var aC = aCS.length - 1; 0 <= aC; aC--)
			if (aCS[aC] === hI) return !1;
		return !0
	}, this.iT = function(player) {
		aCW = player
	}
}

function cR() {
	var j, fr, aCj, canvas, p3, iU, jL, a8H, a9s, aBc, aCk = 11 / 12;

	function aCm() {
		var aBl = Math.floor(jL * (j - 2 * aCj)),
			aCp = 1 + Math.floor(.0625 * aS.k),
			aCq = 1 + Math.floor(.3 * aS.k),
			aCr = Math.floor(.55 * aS.k),
			rounded = (p3.clearRect(0, 0, j, aS.k), p3.fillStyle = bE.qJ, p3.fillRect(0, 0, aCj, aS.k), p3.fillRect(aCj + aBl, 0, j - aCj - aBl, aS.k), p3.fillStyle = jL < 1 / 3 ? "rgba(" + Math.floor(3 * jL * 130) + ",130,0,0.85)" : jL < 2 / 3 ?
				"rgba(130," + (130 - Math.floor(3 * (jL - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (jL - 2 / 3) * 130) + ",0.85)", p3.fillRect(aCj, 0, aBl, aS.k), p3.fillStyle = bE.qN, p3.fillStyle = __fx.utils.lineColor(bE.qN),
				__fx.utils.smoothFrame(p3, j, aS.k));
		rounded || (p3.fillRect(0, 0, j, 1), p3.fillRect(0, aS.k - 1, j, 1), p3.fillRect(0, 0, 1, aS.k)), p3.fillRect(aCj, 0, 1, aS.k), p3.fillRect(aCj + aBl, 0, 1, aS.k), p3.fillRect(j - aCj, 0, 1, aS.k), rounded || p3.fillRect(j - 1, 0, 1, aS.k),
			p3.fillStyle = bE.qN, p3.fillRect(Math.floor(.25 * aS.k) + aCq, Math.floor((aS.k - aCp) / 2), aS.k - 2 * aCq, aCp), p3.fillRect(Math.floor(j - 1.25 * aS.k) + aCq, Math.floor((aS.k - aCp) / 2), aS.k - 2 * aCq - aCq % 2, aCp), p3.fillRect(
				Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - aCp) / 2), aCq, aCp, aS.k - 2 * aCq - aCq % 2), a8H = bD.h6.jK(aE.fU, aS.iF()), p3.fillText(bD.pZ.a3G(a8H) + " (" + bD.pZ.a8A(100 * jL, +(jL < .1)) + ")", Math.floor(.5 * j), aCr)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		jL = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a63(arg1);

	function aCw(a6P) {
		return !(1 < a6P && 1 === jL || (1 < a6P && a6P * jL - jL < 1 / 1024 ? a6P = (jL + 1 / 1024) / jL : a6P < 1 && jL - a6P * jL < 1 / 1024 && (a6P = (jL - 1 / 1024) / jL), jL = bO.it(jL * a6P, 1 / 1024, 1), aCm(), 0))
	}

	function aCx(mI) {
		return jL !== (jL = bO.it((mI - fr - aCj) / (j - 2 * aCj), 1 / 1024, 1)) && (aCm(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aCm(), bi.e2 = !0
	}, this.ft = 0, this.hz = !1, this.dv = function() {
		iU = !aE.i9 && !aE.ht && !aE.hu, aBc = !1, jL = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.buffer.data[182].value + 1) / 1024, a8H = 0, this.hz = !1, this.resize()
	}, this.resize = function() {
		a1.a2.iu() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.iv), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.iu() ? .65 : .389) * i.iv), j += 12 - j % 12, this.k = Math.floor(j / 12)), aCj = Math.floor(3 * this.k / 2), a9s =
			bD.ta.v9(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, z7), canvas.height = this.k, (p3 = canvas.getContext("2d", {
				alpha: !0
			})).font = a9s, bD.ta.textBaseline(p3, 1), bD.ta.textAlign(p3, 1), this.aCl(), aCm()
	}, this.aCl = function() {
		fr = a1.a2.iu() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.ft = i.k - this.k - bn.a9F() * bf.gap
	}, this.nR = function() {
		aBc && (aBc = !1, aCm())
	}, this.iU = function() {
		return !(!iU || aN.hv && fr < Math.floor(bf.gap + 5.5 * this.k))
	}, this.aAW = function(aCs) {
		return !!this.iU() && fr + j > i.j - aCs - bf.gap
	}, this.a8O = function() {
		iU = !aE.ht && !aE.hu
	}, this.aCY = function() {
		iU = !1
	}, this.iF = function() {
		return bO.it(Math.floor(1024 * jL + .5) - 1, 0, 1023)
	}, this.a60 = function(mI, mJ) {
		return this.iU() && fr < mI && mI < fr + j && mJ > this.ft
	}, this.hy = function(mI, mJ) {
		if (!this.iU()) return !1;
		if (!(__fx.settings.keybindButtons && mJ > this.ft - Math.floor(bf.gap / 4) - this.k && mJ < this.ft - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(mI - fr))) {
			if (!aS.a60(mI, mJ)) return !1;
			aT.oB = !1, ! function(ut, mI, mJ) {
				if (function(mI, mJ) {
						return fr < mI && mI < fr + aCj && mJ > aS.ft
					}(mI, mJ)) return aCw(aCk);
				if (function(mI, mJ) {
						return fr + j - aCj < mI && mI < fr + j && mJ > aS.ft
					}(mI, mJ)) return aCw(1 / aCk);
				return ut.hz = !0, aCx(mI)
			}(this, mI, mJ) || (bi.e2 = !0)
		}
		return !0
	}, this.a63 = function(oI) {
		0 !== aE.a3x && this.iU() && aCw(oI) && (bi.e2 = !0)
	}, this.a5Z = function(deltaY) {
		var oI;
		return !(0 === deltaY || !this.iU()) && aCw(oI = 0 < deltaY ? (oI = 400 / (400 + deltaY)) < aCk ? aCk : oI : 1 / aCk < (oI = (400 - deltaY) / 400) ? 1 / aCk : oI)
	}, this.a5W = function(mI) {
		return !!this.hz && aCx(mI)
	}, this.a5w = function() {
		this.hz = !1
	}, this.ep = function() {
		this.iU() && a8H !== bD.h6.jK(aE.fU, this.iF()) && (aBc = !0)
	}, this.z6 = function() {
		this.iU() && (z7.drawImage(canvas, fr, this.ft), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(z7, fr, this.ft)
	}
}

function dB() {
	var canvas, p3, rect, font, aCy = 0,
		aCz = !1,
		aD0 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aD1 = 5;

	function aD8() {
		if (aCz) {
			var aC, fk = aD0.length,
				aCr = Math.floor(.5 * rect.k),
				k = fk * aCr,
				fr = Math.floor(Math.floor(rect.fr) + .3 * rect.j - .5),
				ft = Math.floor(Math.floor(rect.ft) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			for (z7.fillStyle = bE.qJ, z7.fillRect(fr, ft, j, k), z7.fillStyle = bE.qm, z7.fillRect(fr, ft + aD1 * aCr, j, aCr), z7.fillStyle = bE.qN, z7.fillRect(fr, ft, 2, k), z7.fillRect(fr, ft, j, 2), z7.fillRect(fr + j - 2, ft, 2, k), aC =
				1; aC < fk; aC++) z7.fillRect(fr, ft + aC * aCr, j, 2);
			for (z7.fillStyle = bE.qN, bD.ta.textAlign(z7, 1), bD.ta.textBaseline(z7, 1), z7.font = bD.ta.v9(0, .6 * aCr), fr += .5 * j, aC = 0; aC < fk; aC++) z7.fillText(aDG(aC), fr, ft + (aC + .6) * aCr)
		}
		z7.drawImage(canvas, Math.floor(rect.fr), Math.floor(rect.ft))
	}

	function nS(ut) {
		var fr, o6, o7, aCr;
		p3.clearRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), p3.fillStyle = bE.qJ, p3.fillRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), aE.o9 && (p3.fillStyle = bE.qm, p3.fillRect(0, 0, Math.floor(.3 * rect.j), Math.floor(rect.k))), p3
			.fillStyle = bE.qN, p3.fillText("Hide UI", .15 * rect.j, .5 * rect.k), p3.fillRect(Math.floor(.3 * rect.j - .5), 0, 2, Math.floor(rect.k)), fr = .5 * rect.j, p3.fillText("Replay Speed", fr, .31 * rect.k), p3.fillText(aDG(aD1), fr, .69 *
				rect.k), p3.fillRect(Math.floor(.7 * rect.j - .5), 0, 2, Math.floor(rect.k)), ut.a8y ? (fr = Math.floor(.02 * rect.j), ut = Math.floor(.025 * rect.j), o6 = Math.floor(.85 * rect.j - fr - .5 * ut), o7 = Math.floor(.25 * rect.k), aCr =
				Math.floor(rect.k) - 2 * o7, p3.fillRect(o6, o7, fr, aCr), p3.fillRect(o6 + fr + ut, o7, fr, aCr)) : function() {
				var j = Math.floor(.46 * rect.k),
					k = Math.floor(.23 * rect.k),
					fr = Math.floor(.85 * rect.j - .5 * j + j / 12),
					ft = Math.floor(.5 * rect.k - k);
				p3.beginPath(), p3.moveTo(fr, ft), p3.lineTo(fr + j, ft + k), p3.lineTo(fr, ft + (k << 1)), p3.fill()
			}(), p3.fillRect(0, 0, Math.floor(rect.j), 2), p3.fillRect(0, 0, 2, Math.floor(rect.k)), p3.fillRect(0, Math.floor(rect.k) - 2, Math.floor(rect.j), 2), p3.fillRect(Math.floor(rect.j - 2), 0, 2, Math.floor(rect.k))
	}

	function aDG(aC) {
		return 5 === aC ? "Normal" : "" + aD0[aC]
	}
	this.a8y = !1, this.dv = function() {
		aE.ht && (aD1 = 5, this.a8y = !1, aCz = !1, rect = new uB([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aD2 = function() {
		return aD0[aD1]
	}, this.a24 = function() {
		return rect.ft
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a8y,
		fxGetSpeedIndex: () => aD1,
		fxSetSpeedIndex: index => {
			aD1 = index, this.resize()
		},
		fxGetPanelTop: () => rect && rect.ft
	}, this.aAW = function(aCs) {
		return !!aE.ht && rect.fr + rect.j > i.j - aCs - bf.gap
	}, this.resize = function() {
		aE.ht && (rect.resize(), rect.ft -= (bn.a9F() - 1) * bf.gap, font = bD.ta.v9(0, .3 * rect.k), (canvas = document.createElement("canvas")).width = Math.floor(rect.j), canvas.height = Math.floor(rect.k), (p3 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.ta.textAlign(p3, 1), bD.ta.textBaseline(p3, 1), nS(this))
	}, this.a66 = function(aD3) {
		0 === aE.a3x || u.iU() || aD3 !== aE.o9 && (aE.o9 = aD3, bk.resize(), bi.e2 = !0, aE.ht) && (aCy = bi.ek + 2e3, nS(this))
	}, this.hy = function(fr, ft) {
		if (!aE.ht) return !1;
		if (fr < rect.fr || ft < rect.ft || fr > rect.fr + rect.j) return aCz && function(ut, fr, ft) {
			var fk = aD0.length,
				aCr = Math.floor(.5 * rect.k),
				k = fk * aCr,
				o6 = Math.floor(Math.floor(rect.fr) + .3 * rect.j - .5),
				k = Math.floor(Math.floor(rect.ft) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			return aCz = !1, bi.e2 = !0, fr < o6 || o6 + j < fr || ft < k || (aD1 = aD7(0, Math.floor((ft - k) / aCr), fk - 1), nS(ut)), !0
		}(this, fr, ft);
		if ((fr -= rect.fr) < .3 * rect.j) aCz = !1, this.a66(!aE.o9);
		else {
			if (fr < .7 * rect.j) return aCz = !aCz, bi.e2 = !0;
			this.a68(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a68(!0), this.a68 = function(aD5) {
		2 === aE.a3x ? (this.a66(!1), u.v(3)) : (aCz = !1, this.a8y = !this.a8y, this.a8y ? (aN.hv && aN.a67(), a1.a2.setState(1)) : aD5 || aN.a9z(), bi.e2 = !0, nS(this))
	}, this.aD6 = function() {
		this.a8y = !1, aN.a9z(), bi.e2 = !0, nS(this)
	}, this.a5p = function(fr, ft) {
		return !!aE.o9 && (0 <= aN.hy(fr, ft) || (aE.ht ? ((bi.ek > aCy || !this.hy(fr, ft)) && aT.hy(fr, ft), bi.e2 = !0, aCy = bi.ek + 2e3) : aT.hy(fr, ft)), !0)
	}, this.ep = function() {
		aE.ht && aE.o9 && bi.ek > aCy - 1e3 && bi.ek < aCy && (bi.e2 = !0)
	}, this.a46 = function() {
		aE.ht && (this.a8y = !1, bi.e2 = !0, nS(this))
	}, this.z6 = function() {
		if (aE.ht) {
			if (aE.o9) {
				if (bi.ek > aCy) return;
				if (bi.ek > aCy - 1e3) return z7.globalAlpha = aD7(0, (1e3 - (bi.ek - (aCy - 1e3))) / 1e3, 1), aD8(), void(z7.globalAlpha = 1)
			}
			aD8()
		}
	}
}

function cS() {
	var aDH, aDI, j, fr, ft, aDJ, aDK;
	this.dv = function() {
		aDH = new Array(2), aDI = new Array(2), this.oB = !1, aDK = aDJ = jN = jM = 0, iw = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.iu() ? .072 : .0502) * i.iv)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aDH[aC] = document.createElement("canvas"), aDH[aC].width = j, aDH[aC].height = j, aDI[aC] = aDH[aC].getContext("2d", {
			alpha: !0
		});
		this.aCl(),
			function() {
				for (var aDb = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aDI[aC].clearRect(0, 0, j, j), aDI[aC].fillStyle = bE.qG, aDI[aC].beginPath(), aDI[aC].arc(j / 2, j / 2, j / 2 - aDb, 0, 2 * Math.PI), aDI[aC].fill(), aDI[aC]
					.lineWidth = aDb, aDI[aC].fillStyle = bE.qN, aDI[aC].strokeStyle = bE.qN, aDI[aC].strokeStyle = __fx.utils.lineColor(bE.qN), aDI[aC].beginPath(), aDI[aC].arc(j / 2, j / 2, j / 2 - aDb, 0, 2 * Math.PI), aDI[aC].stroke(), a2A(
						aDI[aC], 0, 0, j, aDb, .3, 0 === aC)
			}()
	}, this.a23 = function() {
		return -jM / iw
	}, this.a24 = function() {
		return -jN / iw
	}, this.oL = function(aDO, j2) {
		jM = iw * aDO - j2
	}, this.oM = function(aDP, j3) {
		jN = iw * aDP - j3
	}, this.hy = function(aDN, aAX) {
		return aE.o9 || ! function(aDN, aAX) {
			return Math.pow(aDN - (fr + j / 2), 2) + Math.pow(aAX - (ft + j / 2), 2) < j * j / 4 || Math.pow(aDN - (fr + j / 2), 2) + Math.pow(aAX - (ft + 2 * j), 2) < j * j / 4
		}(aDN, aAX) || bm.buffer.data[8].value ? (aI.oO() && (this.oB = !0, aDJ = aDN, aDK = aAX), !1) : aAX < ft + 1.25 * j ? this.a5Z(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a5Z(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a5W = function(aDN, aAX) {
		var aDQ, aDR, j5, j8;
		return !aI.oO() || (aDQ = jM, aDR = jN, jM += j5 = aDJ - aDN, jN += j8 = aDK - aAX, ag.a5W(j5, j8), this.aDS(), aDJ = aDN, aDK = aAX, aDQ !== jM) || aDR !== jN
	}, this.a5Z = function(mI, mJ, deltaY) {
		var oI;
		if (aI.oO()) {
			if (0 < deltaY) oI = (oI = 500 / (500 + deltaY)) < .5 ? .5 : oI;
			else {
				if (!(deltaY < 0)) return !1;
				oI = 2 < (oI = (500 - deltaY) / 500) ? 2 : oI
			}
			this.aDT(mI, mJ, oI), bi.e2 = !0
		}
		return !0
	}, this.aDT = function(fr, ft, fO) {
		var a6P;
		fO = a6P = (a6P = 1024 < (a6P = fO) * iw ? 1024 / iw : a6P) * iw < .125 ? .125 / iw : a6P, ag.zoom(fO, fr, ft),
			function(a6P, mI, mJ) {
				iw *= a6P, jM = (jM + mI) * a6P - mI, jN = (jN + mJ) * a6P - mJ, aT.aDS()
			}(fO, fr, ft)
	}, this.aDS = function() {
		var aDW = i.j / 16,
			aDX = 0,
			aDY = i.k / 16,
			aDZ = 0;
		jM < -i.j + aDW && (aDX = -i.j + aDW - jM), jM > iw * bV.fv - aDW && (aDX = iw * bV.fv - aDW - jM), jN < -i.k + aDY && (aDZ = -i.k + aDY - jN), jN > iw * bV.fw - aDY && (aDZ = iw * bV.fw - aDY - jN), jM += aDX, jN += aDZ, bd.oN(), ag.aDa(
			aDX, aDZ)
	}, this.aCl = function() {
		fr = i.j - j - bf.gap, ft = Math.floor(i.k / 2 - 1.25 * j)
	}, this.z6 = function() {
		bm.buffer.data[8].value || (z7.drawImage(aDH[0], fr, ft), z7.drawImage(aDH[1], fr, Math.floor(ft + 3 * j / 2)))
	}
}

function cT() {
	var h, aDc, aDd, aDe, gap, aDf, aDg, aDh, aDi, aDj, a9s, aDk, hp, aDl, aBl, aDm, aDn;

	function aDr() {
		aDe = Math.floor(.2 * (a1.a2.iu() ? .07 : .035) * i.iv), aDe = aAU(a1.a2.iu() ? 3 : 1, aDe);
		var aDu = i.j / (h.length + gap);
		aDe = aDe < aDu ? aDu : aDe, aBl = Math.floor((1 - gap) * aDe), aDc = 0, aDv()
	}

	function aDv() {
		aDc = (aDc = aDc < -20 ? -20 : aDc) > (h.length - 15) * aDe ? (h.length - 15) * aDe : aDc, aDg = Math.floor(aDc / aDe), aDh = (aDh = aDg + Math.floor(i.j / aDe)) > h.length - 1 ? h.length - 1 : aDh, aDg = (aDg = aDh < aDg ? aDh : aDg) < 0 ?
			0 : aDg;
		var ly = aDh;
		aDf = aDd / h[ly];
		for (var aC = aDh - 1; aDg <= aC; aC--) h[aC] > h[ly] && (ly = aC, aDf = aDd / Math.pow(h[aC], aDl))
	}

	function aDy(fr) {
		fr = Math.floor((aDc + i.j - fr - gap * aDe) / aDe);
		return (fr = fr < -1 ? -1 : -1 === fr ? 0 : fr > h.length - 1 ? -1 : fr) !== aDi && (aDi = fr, -1 === aDm && 0 === aDi && aU.aDo && (aDm = setInterval(aDz, 100)), 1)
	}

	function aE0(aC) {
		var aE2 = Math.floor(aDf * Math.pow(h[aC], aDl));
		z7.fillRect(aDc + i.j - (aC + 1) * aDe, i.k - aE2, aBl, aE2)
	}

	function aDz() {
		var hI;
		0 !== (aDi = 8 === ab.a59() ? -1 : aDi) ? (aDn = (new Date).getTime(), clearInterval(aDm), aDm = -1) : (hI = h[1] / 864e3, -1 !== aDn && (hI += ((new Date).getTime() - aDn) * h[1] / 864e5, aDn = -1), 0 < hI && (h[0] += Math.floor(hI), bi
			.e2 = !0))
	}
	this.aDo = !1, this.dv = function() {
		aDn = aDm = -1, aDi = -(aDl = 1), this.aDp = !1, hp = 0, aDk = new Date, aDc = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aDd = Math.floor(.15 * i.k), aDj = (aDj = Math.floor((a1.a2.iu() ? .018 : .0137) * i.iv)) < 2 ? 2 : aDj, a9s = bD.ta.v9(1, aDj), aDr()
	}, this.aDs = function(aDt) {
		var aC;
		for (this.aDo = !0, aC = 0; aC < aDt.length; aC++) h.unshift(aDt[aC]);
		aDr(), bi.e2 = !0
	}, this.aDw = function() {
		aDv()
	}, this.a5W = function(fr, ft) {
		ft > i.k - .6 * aDd ? this.aDp ? fr !== hp && (aDc += fr - hp, hp = fr, aDv(), aDy(fr), this.aDp = -1 !== aDi, bi.e2 = !0) : aDy(fr) && (bi.e2 = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aDi && (this.aDp = !1, aDi = -1, bi.e2 = !0)
	}, this.a5Z = function(fr, deltaY) {
		-1 !== aDi && (aDc += Math.floor(deltaY), aDv(), aDy(fr), bi.e2 = !0)
	}, this.hy = function(fr, ft) {
		this.a5W(fr, ft), -1 !== aDi && (hp = fr, this.aDp = !0)
	}, this.a5v = function() {
		-1 !== aDi && (this.aDp = !1)
	}, this.z6 = function() {
		z7.fillStyle = bE.qQ;
		for (var aE3, month, el, vp, aE6, aE7, o7, aE8, aE9, aC = aDh; aDg <= aC; aC--) aE0(aC);
		this.aDo && 0 === aDg && (z7.fillStyle = bE.qz, aE0(0)), -1 !== aDi && (z7.fillStyle = bE.qP, aE0(aDi)), -1 !== aDi && (z7.font = a9s, bD.ta.textBaseline(z7, 2), (el = new Date).setTime(aDk.getTime() - 1e3 * aDi * 60 * 60 * 24), month =
			"month", aE3 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(el), aE3 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(el)), aE3 = aE3 + ", " + el.getUTCDate() + " " + month + " " + el.getFullYear(), month = 1 === h[aDi] ? L(126) : L(127), month = bD.pZ.a3G(h[aDi]) + " " + month, el = Math.floor(z7.measureText(aE3).width), vp = Math
			.floor(z7.measureText(month).width), aE6 = Math.floor(.5 * (el + aDj)), aE7 = (aE7 = aDc + i.j - (aDi + 1) * aDe) < aE6 ? aE6 : aE7 > i.j - aE6 ? i.j - aE6 : aE7, o7 = i.k - Math.floor(aDf * Math.pow(h[aDi], aDl)), aE8 = Math
			.floor(1.1 * aDj), aE9 = o7 > i.k - aE8 ? i.k - aE8 : o7, z7.fillStyle = bE.qK, z7.fillRect(i.j - vp - aDj, aE9 - aE8, vp + aDj, aE8), z7.fillRect(aE7 - aE6, i.k - aE8, el + aDj, aE8), z7.fillStyle = bE.qN, bD.ta.textAlign(z7, 2),
			z7.fillText(month, Math.floor(i.j - .5 * aDj), aE9), bD.ta.textAlign(z7, 1), z7.fillText(aE3, aE7, i.k), z7.strokeStyle = bE.qR, z7.lineWidth = 1, z7.beginPath(), z7.moveTo(0, o7), z7.lineTo(i.j, o7), z7.closePath(), z7.stroke())
	}
}

function cU() {
	var a9s, j, ft, aEA, aEB, aEC, canvas, p3, aBc, t6, aED, aEE, aEF, aEG;
	this.fr = 0, this.k = 0, this.dv = function() {
		aEC = aE.a8X, aEE = "rgba(0,100,0,0.8)", aEF = "rgba(150,0,0,0.8)", aBc = aED = !0, t6 = ah.hm[aE.fU], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.iu() ? .305 : .24) * i.iv), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), a9s = bD.ta.v9(1, Math.floor(.8 * this.k)), aEB = bD.ta.v9(1, Math.floor(.45 * this.k)), aEG = Math.floor(.5 * this.k), bV
			.aBZ.font = a9s, ft = bf.gap, aEA = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, p3 = canvas.getContext("2d", {
				alpha: !0
			}), bD.ta.textBaseline(p3, 1), bD.ta.textAlign(p3, 1), this.aEH()
	}, this.aC7 = function() {
		return a1.a2.iu() && i.j < 1.2 * i.k
	}, this.aCl = function() {
		this.aC7() ? this.fr = i.j - j - bf.gap : this.fr = Math.floor(aW.aEI() + (i.j - aW.aEI() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.nR = function() {
		aBc && (aBc = !1, this.aEH())
	}, this.aEH = function() {
		p3.font = a9s, p3.clearRect(0, 0, j, this.k), p3.fillStyle = aED ? aEE : aEF, p3.fillRect(0, 0, j, this.k), p3.fillStyle = bE.qP;
		var eu = this.aEJ(),
			aEL = (this.aEK(), p3.fillStyle = ah.hm[aE.fU] >= af.kj(aE.fU) ? bE.qw : bE.qN, bD.pZ.a3G(t6)),
			aEL = (p3.fillText(aEL, Math.floor(j / 2), aEG), p3.measureText(aEL).width),
			aEM = (p3.font = aEB, p3.fillStyle = 9 === eu ? bE.ra : bE.qN, af.aEN),
			aEO = "+" + aEM,
			vp = p3.measureText(aEO).width,
			aEP = Math.floor(this.k / 12),
			aEL = .5 * (j + aEL) + aEP;
		(aEL + vp + aEA <= j || 1e3 <= aEM && (aEO = "+" + Math.floor(aEM / 1e3) + "K", aEL + (vp = p3.measureText(aEO).width) + aEA <= j)) && p3.fillText(aEO, Math.floor(aEL + .5 * vp), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && p3.fillText(9 - eu, Math.floor(2 * aEA + aEP), Math.floor(.3 * this.k)), p3.fillStyle = bE.qN, __fx.utils.smoothFrame(p3, j, this.k, 1, 0, 0, this.k / 12) || (p3.fillRect(0, 0, j, 1), p3.fillRect(0, 0, 1, this
				.k), p3.fillRect(0, this.k - 1, j, 1), p3.fillRect(j - 1, 0, 1, this.k))
	}, this.aEJ = function() {
		var eu = bi.l0() % 100,
			a15 = (eu = 9 - bO.gB(eu -= eu % 10, 10), Math.floor(eu * (this.k - aEA) / 9));
		return p3.fillRect(0, a15, aEA, this.k - a15), p3.fillRect(j - aEA, a15, aEA, this.k - a15), eu
	}, this.aEK = function() {
		p3.fillRect(aEA, this.k - aEA, Math.floor((j - 2 * aEA) * ah.hm[aE.fU] / aEC), aEA)
	}, this.ep = function() {
		var hI = aE.fU;
		bD.h6.hx(hI) && (hI = ah.hm[hI] - ah.a7a[hI], t6 !== hI ? (aEC = aAU(hI, aEC), aED = t6 < hI && 10 <= hI, t6 = hI, aBc = !0) : bi.l0() % 10 == 9 && (aBc = !0))
	}, this.z6 = function() {
		0 === ah.nf[aE.fU] || aE.i9 || 2 === ah.a7R[aE.fU] || z7.drawImage(canvas, this.fr, ft)
	}
}

function cV() {
	var aEQ, aER, aES, aET, aEU, aEV, aEW, aEX, aEY, aEZ, aEa, aEb, aEc, aEd, aEe, aEf, aEg, aEh, aEi, aEj, aEk, aEl, position, aEm, aEn, aEo, aEp, aEq, aEr = 1,
		aEs = 1,
		aEt = "";
	var leaderboardHasChanged = true;
	this.playerPos = aE.fU;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => ko[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(ko[aE.fU]);
	}

	function aEv() {
		aEW.clearRect(0, 0, aEQ, aCM),
			aEW.fillStyle = aEq ? bE.rJ : bE.rF,
			aEW.fillRect(0, 0, aEQ, aEb),
			aEW.fillStyle = bE.qJ,
			aEW.fillRect(0, aEb, aEQ, aCM - aEb);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aEU)
				position = (rivalsCount > aEU ? rivalsCount : aEU) - aEU;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			ko[aE.fU]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aEl = -1;
		if (__fx.leaderboardFilter.enabled && aEl >= __fx.leaderboardFilter.filteredLeaderboard.length) aEl = -1;
		if (__fx.leaderboardFilter.showingRivals && aEl + position >= __fx.leaderboardFilter.rivalsData.length) aEl = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= position && ownClanIndex < position + aEU) aEx(ownClanIndex - position, bE.qm);
			})() :
			(playerPos >= position && aEx(playerPos - position, bE.qm),
				0 !== ko[aE.fU] && 0 === position && aEx(0, bE.rR))
		),
		-1 !== aEl && aEx(aEl, bE.qO),
			aEW.fillStyle = bE.qJ,
			//console.log("drawing", aEl),
			aEW.clearRect(0, aCM - __fx.leaderboardFilter.tabBarOffset, aEQ, __fx.leaderboardFilter.tabBarOffset);
		aEW.fillRect(0, aCM - __fx.leaderboardFilter.tabBarOffset, aEQ, __fx.leaderboardFilter.tabBarOffset);
		aEW.fillStyle = __fx.utils.lineColor(bE.qN),
			aEW.fillRect(0, aEb, aEQ, 1),
			aEW.fillRect(0, aCM - __fx.leaderboardFilter.tabBarOffset, aEQ, 1),
			__fx.leaderboardFilter.drawTabs(aEW, aEQ, aCM - __fx.leaderboardFilter.tabBarOffset, bE.qm),
			__fx.utils.smoothFrame(aEW, aEQ, aCM, bf.a2x) || (
				aEW.fillRect(0, 0, aEQ, bf.a2x),
				aEW.fillRect(0, 0, bf.a2x, aCM),
				aEW.fillRect(aEQ - bf.a2x, 0, bf.a2x, aCM),
				aEW.fillRect(0, aCM - bf.a2x, aEQ, bf.a2x)),
			aEW.fillStyle = bE.qN, aEW.font = aER, bD.ta.textBaseline(aEW, 1), bD.ta.textAlign(aEW, 1), aEW.fillText(aEt, Math.floor((aEQ + aEb - 22) / 2), Math.floor(aEZ + aES / 2));
		__fx.playerList.drawButton(aEW, 12, 12, aEb - 22);
		var g3, hJ = playerPos < position + aEU - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) hJ = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aEU; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ah.hY[repId], ah.a2R[repId], ah.a7R[repId]]);
					ah.hY[repId] = rivalsEntry.territory;
					ah.a2R[repId] = "[" + rivalsEntry.clan + "]";
					ah.a7R[repId] = 0;
				}
				for (aEW.font = aET, bD.ta.textAlign(aEW, 0), g3 = aEU - hJ; 0 <= g3; g3--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[g3 + position];
					if (rivalsEntryLeft !== undefined)
						aEy(rivalsEntryLeft.representativeId), aEz(g3, g3 + position, rivalsEntryLeft.representativeId);
				}
				for (bD.ta.textAlign(aEW, 2), g3 = aEU - hJ; 0 <= g3; g3--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[g3 + position];
					if (rivalsEntryRight !== undefined)
						aEy(rivalsEntryRight.representativeId), aF0(g3, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hY[entry[0]] = entry[1];
					ah.a2R[entry[0]] = entry[2];
					ah.a7R[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aEU)
				position = (result.length > aEU ? result.length : aEU) - aEU;
			//if (position >= result.length) position = result.length - 1;
			for (aEW.font = aET, bD.ta.textAlign(aEW, 0), g3 = aEU - hJ; 0 <= g3; g3--) {
				const pos = result[g3 + position];
				if (pos !== undefined)
					aEy(me[pos]), aEz(g3, pos, me[pos]);
			}
			for (bD.ta.textAlign(aEW, 2), g3 = aEU - hJ; 0 <= g3; g3--) {
				const pos = result[g3 + position];
				if (pos !== undefined)
					aEy(me[pos]), aF0(g3, me[pos]);
			}
		} else {
			for (aEW.font = aET, bD.ta.textAlign(aEW, 0), g3 = aEU - hJ; 0 <= g3; g3--)
				aEy(me[g3 + position]), aEz(g3, g3 + position, me[g3 + position]);
			for (bD.ta.textAlign(aEW, 2), g3 = aEU - hJ; 0 <= g3; g3--)
				aEy(me[g3 + position]), aF0(g3, me[g3 + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == hJ && (aEy(aE.fU), bD.ta.textAlign(aEW, 0), aEz(aEU - 1, ko[aE.fU], aE.fU), bD.ta.textAlign(aEW, 2), aF0(aEU - 1, aE.fU)), 0 === position && (hJ = .7 * aEc / ac.get(4).height, aEW.setTransform(
			hJ, 0, 0, hJ, Math.floor(aEd + .58 * aEc + .5 * hJ * ac.get(4).width), Math.floor(aEZ + aES + .4 * aEc)), aEW.imageSmoothingEnabled = !0, aEW.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aEW.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aEy(player) {
		aE.ic && (aEW.fillStyle = bj.aF2[bj.aF3[player]])
	}

	function aEx(aC, aF4) {
		aEW.fillStyle = aF4, aC = aEU - 1 < aC ? aEU - 1 : aC;
		aF4 = Math.floor((aC === aEU - 1 ? 2 : 0 === aC ? 1.15 : 1) * aEc), aF4 = aC === aEU - 2 ? Math.floor(aEb + 9.15 * aEc) - Math.floor(aEb + 8.15 * aEc) : aF4;
		aEW.fillRect(0, Math.floor(aEb + (aC + (0 === aC ? 0 : .15)) * aEc), aEQ, aF4)
	}

	function aEz(a0B, a7n, aC) {
		aEW.fillText(aEh[a7n], aEd, Math.floor(aEZ + aES + (a0B + .5) * aEc)), 1 === ah.a7R[aC] && (aEW.font = "italic " + aET);
		a7n = Math.floor(aEZ + aES + (a0B + .5) * aEc);
		aEW.fillText(ah.a2R[aC], aEe, a7n), 0 !== ah.a7R[aC] && (aEW.font = aET), aC < aE.l3 && 2 !== ah.a7R[aC] || aEW.fillRect(aEe, a7n + .35 * aEr, aEg[aC], Math.max(1, .1 * aEr))
	}

	function aF0(a0B, aC) {
		aEW.fillText(ah.hY[aC], aEf, Math.floor(aEZ + aES + (a0B + .5) * aEc))
	}
	this.dv = function() {
		var aC;
		for (u.z.vc[0] = 0, aEp = aEo = aEm = 0, aEq = aEn = !1, aEl = -1, aEU = a1.a2.iu() ? 6 : 10, aEs = (position = 0) === (aEs = bm.buffer.data[11].value) ? 10 : 1 === aEs ? 5 : 1, aEk = !1, aEi = new Uint16Array(aEU + 1), aEj =
			new Uint32Array(aEU + 1), aEY = aE.fh, me = new Uint16Array(aEY), ko = new Uint16Array(aEY), aC = aEY - 1; 0 <= aC; aC--) me[aC] = aC, ko[aC] = aC;
		this.resize(!0), aEg = new Uint16Array(aE.fh);
		var aEu = Math.floor(aEQ - aEe - aEd - aEX);
		for (aEh = new Array(aE.fh), aEW.font = aET, aC = aE.fh - 1; 0 <= aC; aC--) aEh[aC] = aC + 1 + ".", ah.a2R[aC] = bD.p3.a75(ah.a4h[aC], aET, aEu), aEg[aC] = Math.floor(aEW.measureText(ah.a2R[aC]).width);
		aEv()
	}, this.resize = function(dv) {
		if (aCM = a1.a2.iu() ? (aEQ = Math.floor(.335 * i.iv), Math.floor(aEU * aEQ / 8)) : (aEQ = Math.floor(.27 * i.iv), Math.floor(aEU * aEQ / 10)), aEQ = Math.floor(.97 * aEQ), (aEV = document.createElement("canvas")).width = aEQ, aEV
			.height = aCM, aEW = aEV.getContext("2d", {
				alpha: !0
			}), aEZ = .025 * aEQ, aES = .16 * aEQ, aEa = 0 * aEQ, aEb = Math.floor(.45 * aEZ + aES), aEc = (aCM - aES - 2 * aEZ - aEa) / aEU,
			aEV.height = aCM += aEc, __fx.leaderboardFilter.tabBarOffset = Math.floor(aEc * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aCM - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aEQ,
			aER = bD.ta.v9(1, Math.floor(.55 * aES)), aEr = Math.floor((a1.a2.iu() ? .67 : .72) * aEc), aET = bD.ta.v9(0, aEr), aEW.font = aET, aEd = Math.floor(.04 * aEQ), aEe = Math.floor((a1.a2.iu() ? .195 : .18) * aEQ), aEX = Math.floor(aEW
				.measureText("00920600").width), aEW.font = aER, aEf = aEQ - aEd, !dv) {
			aEW.font = aET;
			for (var aC = aE.fh - 1; 0 <= aC; aC--) aEg[aC] = Math.floor(aEW.measureText(ah.a2R[aC]).width);
			aEv()
		}
		aEt = bD.p3.a75(L(128), aER, .96 * aEQ)
	}, this.aEI = function() {
		return aEQ
	}, this.nR = function(c3, aEw) {
		(aEw || aEk && (c3 || bi.l0() % aEs == 0)) && (aEk = !1, aEv())
	}, this.ep = function() {
		! function() {
			for (var g3 = aEY - 1; 0 <= g3; g3--) 0 === ah.nf[me[g3]] && ! function(g3) {
				var aFC = me[g3];
				aEY--;
				for (var aC = g3; aC < aEY; aC++) me[aC] = me[aC + 1], ko[me[aC]] = aC;
				me[aEY] = aFC, ko[me[aEY]] = aEY
			}(g3)
		}();
		for (var aFA, oO = aEY - 1, g3 = 0; g3 < oO; g3++) ah.hY[me[g3]] < ah.hY[me[g3 + 1]] && (aFA = me[g3], me[g3] = me[g3 + 1], me[g3 + 1] = aFA, ko[me[g3]] = g3, ko[me[g3 + 1]] = g3 + 1);
		! function() {
			for (var el = aEk, hJ = (aEk = !0, ko[aE.fU] >= aEU - 1 ? aEU - 2 : aEU - 1), aC = hJ; 0 <= aC; aC--)
				if (aEi[aC] !== me[aC] || aEj[aC] !== ah.hY[me[aC]]) return;
			(hJ != aEU - 2 || aEi[aEU] === ko[aE.fU] && aEj[aEU] === ah.hY[aE.fU]) && (aEk = el)
		}();
		for (var aC = aEU - 1; 0 <= aC; aC--) aEi[aC] = me[aC], aEj[aC] = ah.hY[me[aC]];
		aEi[aEU] = ko[aE.fU], aEj[aEU] = ah.hY[aE.fU];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hy = function(fr, ft) {
		if (a2w(fr, ft)) {
			if (__fx.utils.isPointInRectangle(fr, ft, bf.gap + 12, bf.gap + 12, aEb - 22, aEb - 22)) __fx.playerList.display(ah.a4h);
			else {
				if (ft - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fr - bf.gap);
				fr = aFE(ft);
				0 <= fr ? (aEm = bi.ek, aEn = !0, aEo = aEp = fr, bM.a69() && (fr = aD7(-1, aEp, aEU), aEl !== (fr = fr === aEU ? -1 : fr)) && (aEl = fr, aEv(), bi.e2 = !0)) : (aEq && (aEq = !1, aEv(), bi.e2 = !0), u.v(10, 0, new aFF({
					aFG: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aEv(), bi.e2 = !0
	};

	function aFE(ft) {
		return (ft -= bf.gap + aEb) < 0 ? Math.floor(ft / aEc) - 1 : ft < (aEU - 1) * aEc ? Math.floor(ft / aEc) : ft < aCM - aEb ? aEU - 1 : (ft -= aCM - aEb, aEU + Math.floor(ft / aEc))
	}

	function a2w(fr, ft) {
		return fr >= bf.gap && fr < bf.gap + aEQ && ft >= bf.gap && ft < bf.gap + aCM
	}
	this.a5W = function(fr, ft) {
		var el, aFD;
		if (__fx.utils.isPointInRectangle(fr, ft, bf.gap + 12, bf.gap + 12, aEb - 22, aEb - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fr, ft, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fr - bf.gap)) return aFD = aFE(ft), fr = a2w(fr, ft), ft = !(!(aFD < 0 && fr) || bM.a69()), aEn ? (el = position, (position = aD7(0, position += aEo - aFD, aE.fh - aEU)) !== el ? (aEq = ft,
			aFD = aD7(-1, aEo = aFD, aEU), aEl = aFD = aFD !== aEU && fr ? aFD : -1, aEv(), bi.e2 = !0) : aEq !== ft && (aEq = ft, aEv(), bi.e2 = !0), !0) : (aFD = (aFD = aD7(-1, aFD, aEU)) === aEU || !fr || bM.a69() ? -1 : aFD, (aEl !==
			aFD || aEq !== ft) && (aEl = aFD, aEq = ft, aEv(), bi.e2 = !0))
	}, this.a5v = function(fr, ft) {
		if (!aEn) return !1;
		aEn = !1;
		var aFD = aFE(ft);
		var isEmptySpace = false;
		return bM.a69() && -1 !== aEl && (aEl = -1, aEv(), bi.e2 = !0), bi.ek - aEm < 350 && aEp === aFD && -1 !== (aFD = (aFD = aD7(-1, aFD, aEU)) !== aEU && a2w(fr, ft) ? aFD : -1) && (fr = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aFD + position] === undefined, __fx.leaderboardFilter.rivalsData[aFD + position]?.representativeId ?? aE.fU) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), me[__fx.leaderboardFilter.filteredLeaderboard[aFD + position] ?? (isEmptySpace = true, ko[aE.fU])]) : me[aFD + position]),
			aFD === aEU - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : ko[aE.fU]) >=
			position + aEU - 1 && (fr = aE.fU), !isEmptySpace && aE.ic && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fr, ah.a4h, aE.lN), 0 === ah.nf[fr] || isEmptySpace || aE.i9 && !aE.lN && !aE.ht && !aE
			.hu && fr !== aE.fU || aI.o1(fr, 800, !1, 0)), !0
	}, this.a5Z = function(fr, ft, deltaY) {
		var aFJ;
		return !(aEn || aE.o9 || (aFJ = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a2w(fr, ft)) || (fr = (fr = aD7(-1, aFE(ft), aEU)) === aEU || bM.a69() ? -1 : fr, 0 < deltaY ? position < aE.fh - aEU && (position += Math.min(aE.fh - aEU -
			position, aFJ), aEl = fr, aEv(), bi.e2 = !0) : 0 < position && (position -= Math.min(position, aFJ), aEl = fr, aEv(), bi.e2 = !0), 0))
	}, this.z6 = function() {
		z7.drawImage(aEV, bf.gap, bf.gap)
	}
}

function cW() {
	var canvas, p3, fr, ft, aE2, aFK, gap, aFL, fontSize, aFM, aFN, aFO, aFP, aFQ, aFR, aFS, aFT, aFU;

	function aFY() {
		p3.clearRect(0, 0, aX.j, aX.k), p3.fillStyle = bE.qK, p3.fillRect(0, 0, aX.j, aX.k), p3.fillStyle = bE.qh, fO = 0 < aFS ? aFS : aFP[4] / 1e4, p3.fillRect(0, aX.k - aE2 - 1, Math.floor(fO * aX.j), aE2), p3.fillStyle = bE.qN, p3.fillStyle =
			__fx.utils.lineColor(bE.qN), __fx.utils.smoothFrame(p3, aX.j, aX.k) || (p3.fillRect(0, 0, aX.j, 1), p3.fillRect(0, 0, 1, aX.k), p3.fillRect(aX.j - 1, 0, 1, aX.k), p3.fillRect(0, aX.k - 1, aX.j, 1)), p3.fillRect(0, aX.k - aE2 - 1, aX.j,
			1), p3.fillStyle = bE.qN;
		for (var fO, aFa, el = 0, aC = 0; aC < aFO.length; aC++) aFQ[aC] ? (bD.ta.textAlign(p3, 0), aFa = Math.floor((aFK - aE2 + 2 * aFL) * (aC - el + 1) / (aFO.length + 1) - .7 * aFL), p3.fillText(aFO[aC], gap, aFa), bD.ta.textAlign(p3, 2), 5 ===
			aC && 0 !== ah.nf[aE.fU] && ah.hm[aE.fU] >= af.kj(aE.fU) ? (p3.fillStyle = bE.rP, p3.fillText(aFW(aC), aX.j - gap, aFa), p3.fillStyle = bE.qN) : p3.fillText(aFW(aC), aX.j - gap, aFa)) : el++
	}

	function aFW(aC) {
		return aC < 3 ? aFP[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.pZ.a8A(aFP[aC] / 100, 2) : aC < 7 ? bD.pZ.a3G(aFP[aC]) : aC === 7 ? aX.aFb(aFP[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hY, aE.fU) : __fx.utils.getDensity(aE.fU)
	}

	function aFV() {
		ah.hY[aE.fU] !== aFP[6] && (aFP[6] = ah.hY[aE.fU], aFM++)
	}
	this.dv = function() {
		aFS = aFT = 0, (aFN = new Array(8))[0] = L(129), aFN[1] = aE.lN ? L(33) : L(130), aFN[2] = L(131), aFN[3] = L(132), aFN[4] = L(133), aFN[5] = L(134, 0, "Interest"), aFN[6] = L(135), aFN[7] = L(136),
			aFN.push("Max Troops", "Density"), // add aFN
			(aFO = new Array(aFN.length)).fill(""), (aFP = new Array(aFN.length))[0] = aE.lN ? 0 : aE.l3, aFP[1] = aE.lN ? am.lZ : aE.lP, aFP[2] = aE.a3z, aFP[3] = 0, aFP[4] = bO.gB(1e4 * ah.hY[0], Math.max(aE.kn, 1)), aFP[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.gB(700 * aE.data.iIncomeValue, 64) : bO.gB(700 * aE.data.iIncomeData[aE.fU], 64), aFP[6] = 0, aFV(), aFP[7] = 0, aFR = aFW(6), (aFQ = new Array(aFN.length)).fill(!0), aFU = 0, aFU =
			aE.lN ? (aFQ[0] = !1, aFQ[2] = !1, aFQ[3] = !1, 3) : (aFQ[3] = !1, 1), aFM = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.iu() ? .1646 : .126) * 1.25 * i.iv), this.k = Math.floor(1.18 * this.j), aE2 = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aFL = .04 * this.j, aFK = this.k, this.k -= Math.floor(aFU * (this.k -
			2 * aE2) / aFN.length), fontSize = Math.floor(.7 * (aFK - aE2) / aFN.length);
		var a9s = bD.ta.v9(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(a9s, j) {
				for (var aC = 0; aC < aFO.length; aC++) aFO[aC] = bD.p3.a75(aFN[aC], a9s, j)
			}((p3 = canvas.getContext("2d", {
				alpha: !0
			})).font = a9s, .575 * this.j), bD.ta.textBaseline(p3, 1), p3.lineWidth = 1, this.a8P(), this.aCl(), aV.aCl(), aFY()
	}, this.aCl = function() {
		fr = i.j - this.j - bf.gap
	}, this.aFZ = function() {
		ft = bf.gap
	}, this.a8P = function() {
		ft = bf.gap + (aV.aC7() && 0 !== ah.nf[aE.fU] && !aE.i9 ? aV.k + bf.gap : 0)
	}, this.nR = function(c3) {
		(c3 || 100 <= aFM) && (aFM = 0, aFY())
	}, this.a9C = function() {
		return aFP[7]
	}, this.aFb = function(value) {
		var ly = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * ly) / 1e3);
		return value < 10 ? ly + ":0" + value : ly + ":" + value
	}, this.ep = function() {
		var aFm, per;
		aFQ[0] && aE.a40 - aE.a3z !== aFP[0] && (aFP[0] = aE.a40 - aE.a3z, aFM++), am.lZ - aFP[0] !== aFP[1] && (aFP[1] = am.lZ - aFP[0], aFM++), this.nI(), (aFm = af.aFn(aE.fU)) !== aFP[5] && (aFP[5] = aFm, aFM++), aFV(), aFP[7] += bi.aFo, aFm =
			aFW(7), aFR !== aFm && (aFR = aFm, aFM += 100), aFm = aE.ic ? bk.la() : ah.hY[me[0]], per = bO.gB(1e4 * aFm, Math.max(aE.kn, 1)), aFP[3] = aFm, aFP[4] !== per && (aFM++, aFP[4] = per), 8 === aE.lL && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.h6.hx(aC)) return bU.a3b.a3w(), 1;
				return
			}() || aFP[3] < aE.kn || ! function() {
				for (var aC = am.lZ - 1; 0 <= aC; aC--)
					if (0 < ah.hC[am.le[aC]].length) return;
				return 1
			}() || bQ.ls.aFl().length || aE.ic && bk.la(1) < aE.kn || bU.a3b.a3w()
	}, this.nI = function() {
		aFQ[2] && aE.a3z !== aFP[2] && (aFP[2] = aE.a3z, aFM += 2 === aE.a3x ? 100 : 1)
	}, this.aFi = function() {
		return aFP[3] === aE.kn
	}, this.aFp = function(aC) {
		var w5, aFq, el;
		return 2 !== aE.a3x && (aC % 2 == 1 && (aW.nR(1, 1), bi.e2 = !0), aC === aE.a8a ? (aFS = 0, aFY(), !1) : (-1 !== aC || 0 !== aFT) && (aFq = aFS, aFS = aE.ht ? aC / aE.a8a : (el = performance.now(), 0 <= aC && (w5 = el - 392 * aC, aFT =
			0 === aC || w5 < aFT ? w5 : aFT), 1 < (aFS = (el - aFT) / (392 * aE.a8a)) ? 1 : aFS), aFY(), aFS !== aFq))
	}, this.z6 = function() {
		z7.drawImage(canvas, fr, ft)
	}
}

function cX() {
	var iU, aFr, j, k, aCr, aFs, aFt, aC8, canvas, ns, aFu;

	function a24() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.dv = function() {
		aFu = iU = !1, aCr = .61, aFs = .07, aFt = .09, ns = aC8 = k = 0
	}, this.resize = function() {
		var p3, o6, eu, aFz, aG0, a9x;
		iU && (j = aFv(j = a1.a2.iu() ? Math.floor(.69 * i.iv) : Math.floor(.5 * i.iv), aAU(i.j - 2 * bf.gap, 10)), j = aFv(j, Math.floor(3.57 * aAU(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, p3 = canvas.getContext("2d", {
				alpha: !0
			}), o6 = Math.floor(1 + k / 40), p3.clearRect(0, 0, j, k), p3.fillStyle = bE.qK, p3.fillRect(o6, o6, j - 2 * o6, k - 2 * o6), p3.lineJoin = "bevel", p3.lineWidth = 2 * o6, p3.strokeStyle = bE.qN, __fx.utils.smoothFrame(p3, j - 2 *
				o6, k - 2 * o6, 2 * o6, o6, o6, k / 10) || p3.strokeRect(o6, o6, j - 2 * o6, k - 2 * o6), p3.imageSmoothingEnabled = !1, eu = ac.get(aFr), aFz = eu.width, a9x = (1 === aFr ? .85 : 21 === aFr ? .666 : .9) * aCr * k / (aG0 = eu
				.height), p3.setTransform(a9x, 0, 0, a9x, Math.floor((j - a9x * aFz) / 2), Math.floor((k - a9x * aG0) / 2)), p3.drawImage(eu, 0, 0), p3.setTransform(1, 0, 0, 1, Math.floor(j - aFt * k - aFs * k - o6), Math.floor(o6 + aFs *
			k)),
			function(p3, fk) {
				p3.lineWidth = Math.floor(1 + k / 80), p3.strokeStyle = bE.qN, p3.beginPath(), p3.moveTo(0, 0), p3.lineTo(fk, fk), p3.moveTo(0, fk), p3.lineTo(fk, 0), p3.stroke()
			}(p3, Math.floor(aFt * k)), p3.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(gC, aFx, aCd, aFy) {
		iU || aE.hu || aFy && aFu || (aFr = aCd ? 21 : gC ? 1 : 2, iU = aFu = !0, this.resize(), aM.uZ(), aS.aCY(), ns = bi.ek, aC8 = aFx ? 1 : 0)
	}, this.ep = function() {
		!iU || 1 <= aC8 || (aC8 = 1 < (aC8 += 5e-4 * (bi.ek - ns)) ? 1 : aC8, ns = bi.ek, bi.e2 = !0)
	}, this.hy = function(fr, ft) {
		return !(!iU || aC8 <= 0 || (fr -= Math.floor((i.j - j) / 2), ft -= a24(), fr < 0) || ft < 0 || j < fr || k < ft || (j - k / 3 < fr && ft < k / 3 && (iU = !1, bi.e2 = !0), 0))
	}, this.z6 = function() {
		!iU || aC8 <= 0 || (z7.globalAlpha = aC8, z7.drawImage(canvas, Math.floor((i.j - j) / 2), a24()), z7.globalAlpha = 1)
	}
}

function dY() {
	var aG2, aG3 = new Uint8Array(5),
		aG4 = new Uint8Array(5);
	this.aG5 = new aG6, this.dv = function() {
		for (var gC = bm.buffer.data[119].value, aC = 0; aC < aG3.length; aC++) aG3[aC] = (gC >> 2 * aC) % 4
	}, this.a8n = function() {
		aG2 = [L(137), "", L(138, [ba.aG7[28]]), L(139, [ba.aG7[26]]), L(140, [ba.aG7[0]])], this.aG5.dv()
	}, this.ep = function() {
		this.aG5.ep()
	}, this.a9a = function(id) {
		1 < id && bM.u3() || ! function(eT) {
			if (3 === aG3[eT] || 1 === aG4[eT]) return;
			if (aG4[eT] = 1, !(Math.random() < .6)) {
				aG3[eT]++;
				for (var gC = 0, aC = 0; aC < aG3.length; aC++) gC += aG3[aC] << 2 * aC;
				bm.rt.q0(119, gC)
			}
			return 1
		}(id) || aO.aAa(aG2[id])
	}
}

function aG6() {
	var aG9;
	this.dv = function() {
		aG9 = !1
	}, this.ep = function() {
		var hI;
		if (function() {
				if (!aG9) {
					if (bi.l0() % 30 != 9) return;
					if (!bD.h6.ma(90)) return;
					aG9 = !0
				}
				return 1
			}() && (! function() {
				var q4 = aO.aAx(956);
				if (q4) {
					if (bD.h6.m1(q4.player)) return 1;
					aO.aAw(956, 0)
				}
				return
			}() && (-1 === (hI = (aE.ic ? function() {
				var id = bk.lc(),
					fk = am.lZ;
				if (bj.lQ[id])
					for (var xC = am.le, fi = bj.fi, aC = 0; aC < fk; aC++) {
						var hI = xC[aC];
						if (fi[hI] !== id) return hI
					} else if (1 < fk) return me[fk - 1];
				return -1
			} : function() {
				for (var aGH = am.lZ, lx = am.le, aGI = ko, aC = 0; aC < aGH; aC++) {
					var hI = lx[aC];
					if (0 !== aGI[hI]) return hI
				}
				return -1
			})()) ? ! function() {
				var q4 = aO.aAx(957);
				if (q4 && q4.aAQ) {
					if (ad.fb(q4.aAQ.fW << 2)) return 1;
					aO.aAw(957, 0)
				}
				return
			}() : (aO.a2Q(0, L(141, [ah.a2R[hI]]), 956, hI, bE.qN, bE.qK, -1, !0), 0)))) {
			var fk = ap.jh.mD;
			if (0 !== fk)
				for (var buffer = ap.jh.buffer, aC = 0; aC < fk; aC++) {
					var fW = buffer[aC];
					if (ad.fb(fW << 2)) return void aO.a2Q(0, L(142, [bP.fs(fW), bP.fu(fW)]), 957, 0, bE.qN, bE.qK, -1, !0, void 0, {
						g3: 1,
						fW: fW
					})
				}
		}
	}
}

function dZ() {
	this.aGJ = new aGK, this.dv = function() {
		this.aGJ.resize()
	}
}

function aGK() {
	this.resize = function() {
		var aC, aGL = document.head.querySelector("style#ss");
		if (aGL)
			for (aC = aGL.sheet.cssRules.length - 1; 0 <= aC; aC--) aGL.sheet.deleteRule(0);
		else(aGL = document.createElement("style")).id = "ss", document.head.appendChild(aGL);
		var aCy = "::-webkit-scrollbar",
			aGM = bD.ta.ti(bf.vK),
			ig = bD.ta.ti(Math.max(bD.ta.ub(.012), 8));
		try {
			aGL.sheet.insertRule(aCy + "{width:" + ig + ";height:" + ig + ";}", aGL.sheet.cssRules.length), aGL.sheet.insertRule(aCy + "-thumb{background-color:white;}", aGL.sheet.cssRules.length), aGL.sheet.insertRule(aCy +
				"-track{background:" + bE.qJ + ";}", aGL.sheet.cssRules.length), aGL.sheet.insertRule(aCy + "-track:horizontal{border-top:" + aGM + " solid white;}", aGL.sheet.cssRules.length), aGL.sheet.insertRule(aCy +
				"-track:vertical{border-left:" + aGM + " solid white;}", aGL.sheet.cssRules.length), aGL.sheet.insertRule(aCy + "-button{display:none;}", aGL.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aGL.sheet.cssRules.length - 1; 0 <= aC; aC--) aGL.sheet.deleteRule(0)
		}
	}
}

function dt() {
	this.data = new aGN, this.aGO = new aGP
}

function aGN() {
	var aGQ = [new Int16Array([6, 255, 255, 255, 255, 0, 1, 12, 18, 2, 88, 18, 2, 58, 52, 2, 58, 82, 2, 42, 72, 2, 42, 52, 3, 4])];
	this.get = function(id) {
		return aGQ[id]
	}
}

function uT(id) {
	this.canvas = document.createElement("canvas");
	var aGR = this.canvas.getContext("2d"),
		aGS = 0;
	this.resize = function(size) {
		var aGT = Math.max(1, Math.round(size * i.l));
		this.canvas.style.width = this.canvas.style.height = bD.ta.ti(size), aGT !== aGS && (aGS = aGT, this.canvas.width = this.canvas.height = aGT, c1.aGO.z6(aGR, c1.data.get(id), aGT))
	}
}

function aGP() {
	this.z6 = function(im, h, size) {
		var id, pV, oI = size / 100,
			fk = h.length,
			aC = 0;
		for (im.clearRect(0, 0, size, size), im.lineJoin = "round", im.lineCap = "round"; aC < fk;)
			if (0 === (id = h[aC++])) im.beginPath();
			else if (1 === id) im.moveTo(oI * h[aC], oI * h[aC + 1]), aC += 2;
		else if (2 === id) im.lineTo(oI * h[aC], oI * h[aC + 1]), aC += 2;
		else if (3 === id) im.closePath();
		else if (4 === id) im.fill();
		else if (5 === id) im.stroke();
		else if (6 === id) pV = "rgba(" + h[aC] + "," + h[aC + 1] + "," + h[aC + 2] + "," + h[aC + 3] / 255 + ")", im.fillStyle = im.strokeStyle = pV, aC += 4;
		else if (7 === id) im.lineWidth = oI * h[aC], aC += 1;
		else if (8 === id) im.arc(oI * h[aC], oI * h[aC + 1], oI * h[aC + 2], h[aC + 3] * Math.PI / 180, h[aC + 4] * Math.PI / 180), aC += 5;
		else {
			if (9 === id) im.rect(oI * h[aC], oI * h[aC + 1], oI * h[aC + 2], oI * h[aC + 3]);
			else {
				if (10 !== id) return;
				im.quadraticCurveTo(oI * h[aC], oI * h[aC + 1], oI * h[aC + 2], oI * h[aC + 3])
			}
			aC += 4
		}
	}
}

function dX() {
	this.aGU = !1, this.oW = !1, this.a8T = !1, this.aGV = [0, 0, 0, 0], this.render = function() {
		var o6, o7, oJ, oK;
		this.a8T = this.a8T || this.oW, (this.oW || this.aGU && this.a8T) && (o6 = bd.aGW[0], o7 = bd.aGW[1], oJ = bd.aGW[2], oK = bd.aGW[3], o6 = o6 < this.aGV[0] ? this.aGV[0] : o6, o7 = o7 < this.aGV[1] ? this.aGV[1] : o7, oJ = oJ > this.aGV[
				2] ? this.aGV[2] : oJ, oK = oK > this.aGV[3] ? this.aGV[3] : oK, this.oW = !1, this.aGU = !1, o6 === this.aGV[0] && o7 === this.aGV[1] && oJ === this.aGV[2] && oK === this.aGV[3] ? this.a8U() : o6 <= oJ && o7 <= oK && a8p
			.putImageData(a8q, 0, 0, o6, o7, oJ - o6 + 1, oK - o7 + 1))
	}, this.a8U = function() {
		this.a8T && this.aGV[2] >= this.aGV[0] && this.aGV[3] >= this.aGV[1] && a8p.putImageData(a8q, 0, 0, this.aGV[0], this.aGV[1], this.aGV[2] - this.aGV[0] + 1, this.aGV[3] - this.aGV[1] + 1), this.a8T = !1
	}, this.a49 = function() {
		this.aGV[2] >= this.aGV[0] && this.aGV[3] >= this.aGV[1] && a8p.putImageData(a8q, 0, 0, this.aGV[0], this.aGV[1], this.aGV[2] - this.aGV[0] + 1, this.aGV[3] - this.aGV[1] + 1), this.a8T = !1
	}, this.dv = function() {
		var fr, ft;
		this.aGU = !1, this.oW = !1, this.a8T = !1, this.aGV[0] = bV.fv, this.aGV[1] = bV.fw, this.aGV[2] = this.aGV[3] = 0;
		loop: for (fr = 1; fr < bV.fv - 1; fr++)
			for (ft = bV.fw - 2; 1 < ft; ft--)
				if (1 === aGX[ad.a1a(fr, ft) + 2]) {
					this.aGV[0] = fr;
					break loop
				} loop: for (ft = 1; ft < bV.fw - 1; ft++)
			for (fr = bV.fv - 2; 1 < fr; fr--)
				if (1 === aGX[ad.a1a(fr, ft) + 2]) {
					this.aGV[1] = ft;
					break loop
				} loop: for (fr = bV.fv - 2; 0 < fr; fr--)
			for (ft = bV.fw - 2; 1 < ft; ft--)
				if (1 === aGX[ad.a1a(fr, ft) + 2]) {
					this.aGV[2] = fr;
					break loop
				} loop: for (ft = bV.fw - 2; 0 < ft; ft--)
			for (fr = bV.fv - 2; 1 < fr; fr--)
				if (1 === aGX[ad.a1a(fr, ft) + 2]) {
					this.aGV[3] = ft;
					break loop
				}
	}
}

function L(value, aGY, zf, aGZ) {
	var pV = "number" == typeof value ? bA.aGa[value] : value;
	if (zf && bA.aGb() && (pV = zf), !aGY) return aGZ ? pV.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : pV;
	for (var fk = aGY.length, aC = 0; aC < fk; aC++)
		for (var g3 = 0; g3 < 3; g3++) pV = pV.replace("{" + (10 * g3 + aC) + "}", aGY[aC]);
	return pV
}

function cB() {
	this.data = new aGc;
	var aGd = (new aGe).L84,
		aGg = (this.aGa = aGd, !(this.aGf = "en"));
	this.dv = function() {
		var pV, h;
		aGg = !1, ("en" === (pV = bm.buffer.data[12].value).split("-")[0].toLowerCase() ? (bA.aGa = aGd, bA.aGf = pV, 1) : bm.buffer.data[12].value === bm.buffer.data[145].value && 0 < bm.buffer.data[146].value && (pV = bm.buffer.data[146].value,
			(h = bm.tr.zr(pV, !1)).length === pV) && !!bD.th.a6f(h) && function(h) {
			for (var fk = h.length, k = 0; k < fk; k++) h[k] = h[k].replace("&#39;", "'");
			var aGm = bm.tr.zr(fk, !0);
			if (fk !== aGm.length) return !1;
			if (!bD.th.a6f(aGm)) return !1;
			for (var ly = aGd.length, aDt = new Array(ly), aGn = ly === fk, hD = Math.min(fk, ly), aC = 0; aC < ly; aC++)
				if (aDt[aC] = aGd[aC], aC < fk && aGm[aC] === aDt[aC]) aDt[aC] = h[aC];
				else {
					aGn = !1;
					for (var g4 = 0; g4 < hD; g4++)
						if (aGm[g4] === aDt[aC]) {
							aDt[aC] = h[g4];
							break
						}
				} return bA.aGa = aDt, bA.aGf = bm.buffer.data[12].value, aGn
		}(h)) || (aGg = !0)
	}, this.dx = function() {
		bj.dw(), aF.dw(), bh.dw(), bg.dw(), aP.dv(), br = new eJ
	}, this.aGb = function() {
		return this.aGa === aGd || !aGd.length
	}, this.aGo = function() {
		var aGp;
		return !!aGg && (aGg = !1, 0 !== aGd.length) && (aGp = bm.buffer.data[12].value, b1.er.aGq(0, aGp.slice(0, 20)), !0)
	}, this.aGr = function(h) {
		h.length !== aGd.length ? 8 === u.vj && u.a5D().aGs(30, 0, 1) : (this.aGa = h, this.aGf = bm.buffer.data[12].value, bm.rt.q0(145, this.aGf), bm.rt.q0(146, h.length), bm.tr.zx(h, !1), bm.tr.zx(aGd, !0), 8 === u.vj ? u.a5D().aGs(30) : 0 ===
			ab.a59() && 5 === u.vj && u.z.aGt())
	}, this.aGu = function() {
		var a00, h = navigator.languages;
		return h && h.length ? (a00 = Math.max(bA.data.aGv(h[0]), 0), 1 === h.length ? [a00, a00] : [a00, Math.max(bA.data.aGv(h[1]), 0)]) : [0, 0]
	}
}

function aGc() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aGw = function() {
		for (var aGx = [], h = this.h, fk = h.length, aC = 0; aC < fk; aC++) aGx.push(h[aC]);
		var aGy = bm.buffer.data[12].zf;
		for (aC = 0; aC < fk; aC++)
			if (aGx[aC] === aGy) {
				aGx.splice(aC, 1), fk--;
				break
			} aGx.sort(), fk++, aGx.unshift(aGy);
		try {
			if ("undefined" == typeof Intl) return aGx;
			for (aC = 0; aC < fk; aC++) {
				var pV = new Intl.DisplayNames([aGx[aC]], {
					type: "language"
				}).of(aGx[aC]);
				pV !== aGx[aC] && (aGx[aC] = aGx[aC] + ": " + pV)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aGx
	}, this.aH0 = function(aH1) {
		for (var pV = bm.buffer.data[12].value, fk = aH1.length, aC = 0; aC < fk; aC++)
			if (pV === aH1[aC].split(":")[0]) return aC;
		return 0
	}, this.aGv = function(aH2) {
		if (aH2 && !(aH2.length < 2)) {
			aH2 = aH2.split("-")[0].toLowerCase();
			for (var h = this.h, fk = h.length, aC = 0; aC < fk; aC++)
				if (aH2 === h[aC]) return aC
		}
		return -1
	}
}

function aGe() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Select image {10}",
		"Select all images matching the reference", "Find All:", "Reference image", "Close", "Reload", "Verify", "Type your message here...", "Send", "Activated", "Top Clan", "Best Clan Member", "Top Admin", "Best 1v1 Player",
		"Best Battle Royale Player", "Richest Player", "Top Patreon", "Best Zombie Player", "Lobby", "Player", "Players", "Propaganda", "Close {button}", "Report Abuse", "You earned {10} gold!", "{0} earned {11} gold!", "Team {0}",
		"Team {0} won the game!", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} points.", "Clan {0} gained {11} points. ✨",
		"You earned {10} clan points.", "You earned an additional {10} gold because you played for {1}.", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game", "More", "This is a contest!",
		"Accept", "1 spectator joined the game.", "{10} spectators joined the game.", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.",
		"{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team",
		"Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humans won.", "The Resistance", "The zombies won.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.",
		"{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.",
		"You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Creator: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.",
		"{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Outside", "Water", "Mountains", "Neutral Land",
		"Contest", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Bots",
		"Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.",
		"Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!",
		"You are leaving Territorial.io.", "The game could not start for you. Your selection was removed.", "🔑 Show Account", "Opens the account page of this player.", "✅ Vouch", "Vouches for this player and counters reports.", "💬 Mention",
		"Adds the name of this player to your chat message.", "🚩 Report", "Reports this player, you confirm it in a second step.", "👁 Stop Observing", "👁 Observe", "Stops observing this player.", "Spectates every game this player joins.",
		"🤝 Stop Joining With", "🤝 Join With", "Stops joining games with this player.", "Joins every game this player joins.", "🛡 Join Clan", "Puts the clan tag of this player in front of your name.", "🚫 Unfollow", "📥 Follow",
		"Removes this player from your followed accounts.", "Tells you when this player enters the lobby or joins a game.", "🚩 Yes, Report", "Sends the report against this player.", "Cancel", "Closes this menu without reporting.", "Loading",
		"{0} defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America",
		"South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Denmark", "Iberia", "Japan", "India", "Black Sea", "Italy", "Iceland", "Anatolia", "Falklands", "Antarctica", "Hong Kong", "Singapore",
		"The map could not be loaded. Please check your internet connection.", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker",
		"Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Sell Account", "Asking Price:", "Account to receive the gold:", "Publish Offer",
		"The gold must go to a different account than the one you sell.", "Warning",
		"If someone buys this account, it gets the buyer's password and you lose access to it, together with everything on it, including its gold. This cannot be undone.", "Buy This Account", "Buy",
		"This account cannot be bought because its price is lower than its gold.", "If you successfully buy this account, it will be assigned the same password as your currently logged-in account.", "Account Name", "Copy", "Search", "Password",
		"Show", "Hide", "Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating",
		"Commander", "Strategist", "Soldier", "Recruit", "Rating: ", "Report Power", "Power: {10}", "Remaining Reports: {10}", "Current Standing: {10}", "Vouch", "Report", "Zombie Rating", "Savior", "Veteran", "Hunter", "Defender", "Refugee",
		"Win Streak: ", "Admin Statistics", "Votes: ", "Elect", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "Email Verified", "🟢 Online", "Browsing the menus.", "Watching a replay.",
		"Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.",
		"Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "You are following this user. ✅",
		"Please choose a respectful username.", "Active punishments:", "Email Verification", "Email", "You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code",
		"Make sure to also check your spam folder.", "Code", "Submit Code", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).",
		"Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}",
		"Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account", "Benefits:",
		"No Ads", "Separate Leaderboard", "Exclusive Username Color", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can transfer a membership to your account.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust",
		"Colors", "Random", "My Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode",
		"Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "📜 Game Log",
		"You are about to send {11} gold to {0}. Gold transfers cannot be undone. Only send gold to accounts you trust.", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players",
		"Battle Royale", "Richest Players", "Patreon Members", "Zombie Players", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election",
		"Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Elo", "Clan", "Rating", "Leader", "Time Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender",
		"Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Chat", "Overview", "Join", "Login",
		"The only official domain is territorial.io", "If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}",
		"Gold to be Sent: {10}", "Gold to be Received: {10}", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Selectable Name",
		"📰 Propaganda", "Links", "Propaganda Text", "Reset", "Language", "Launch Campaign", "Gold Investment", "Launch", "Account Recovery", "Request Email", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch",
		"Insert the replay data here!", "⚙️ Settings", "🔄 Reset", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution",
		"Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted",
		"Multiplayer Connection", "Automatic (recommended)", "Direct", "Via Proxy", "Highlighting", "Intensity", "Shortcut Keys", "Spawning", "Manual Spawn", "🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "⚔️ Join Lobby 2", "🔗 Links",
		"ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Account {0} successfully bought and stored in account list.", "fetching data...", "This replay does not exist.",
		"The replay could not be loaded.", "Replay Error", "Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar",
		"Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote",
		"Intercept Ship At Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income",
		"Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan",
		"White", "Black", "Ship launched!", "Ship intercepted!", "Target unreachable", "Too many orders", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function e0() {
	var fr, ft, k, wc, aH3, aH4, aH5, aH6, aH7, j, a7J, aH8;
	this.iU = !1, this.dv = function(pV, aH9) {
		if (1 === a1.id && 13 <= a1.eC && a1.eC < 18) return aH9 ? void(a7J = pV) : a7J !== pV ? void 0 : void a1.zp.saveString(200, pV);
		aH9 && (a7J = pV, (aH8 = document.createElement("a")).appendChild(document.createTextNode(a7J)), this.iU = !0, aH8.title = a7J, aH8.target = "_blank", aH8.href = a7J, aH8.style.textAlign = "center", aH8.style.color = bE.qN, aH8.style
			.position = "absolute", aH8.style.padding = "0px", aH8.style.margin = "0px", this.resize(), document.body.appendChild(aH8), bi.e2 = !0)
	}, this.uZ = function() {
		return !(!this.iU || (u.removeChild(document.body, aH8), this.iU = !1))
	}, this.hy = function(j2, j3) {
		return !!this.iU && ((j2 < fr || j3 < ft || fr + j < j2 || ft + k < j3 || fr + j - wc < j2 && j3 < ft + wc) && (bi.e2 = !0, this.iU = !1, u.removeChild(document.body, aH8)), !0)
	}, this.resize = function() {
		var a9s, aHA;
		this.iU && (aH6 = Math.floor(.8 * (a1.a2.iu() ? i.j > i.k ? .6 : .55 : .4) * i.iv), wc = Math.floor(.15 * aH6), aH3 = Math.floor(.35 * wc), aH4 = Math.floor(.5 * wc), aH5 = Math.floor(2.5 * aH4), k = wc + aH3 + 3 * aH4, a9s = bD.ta.v9(1,
			aH3 / i.l), aH7 = Math.floor(i.l * aR.measureText(a7J, a9s)), aHA = j = (aH6 < aH7 ? aH7 : aH6) + 2 * aH5, j = Math.min(j, i.j - 2 * (a1.a2.iu() ? 2 : 1) * bf.gap), a9s = bD.ta.v9(1, j / aHA * aH3 / i.l), aH7 = Math.floor(i
			.l * aR.measureText(a7J, a9s)), fr = Math.floor((i.j - j) / 2), ft = Math.floor((i.k - k) / 2), aH8.style.font = a9s, aH8.style.top = Math.floor((ft + 1.4 * aH4 + wc) / i.l) + "px", aH8.style.left = Math.floor((fr + (j -
			aH7) / 2) / i.l) + "px")
	}, this.z6 = function() {
		var fxSmooth;
		this.iU && (fxSmooth = __fx.utils.clipRounded(z7, fr, ft, j, k), z7.fillStyle = bE.qK, z7.fillRect(fr, ft + wc, j, k - wc), z7.fillStyle = bE.rc, z7.fillRect(fr, ft, j, wc), fxSmooth && z7.restore(), z7.fillStyle = bE.qN, z7.lineWidth =
			bf.a2x, z7.strokeStyle = bE.qN, fxSmooth ? (__fx.utils.strokeRounded(z7, fr, ft, j, k, bf.a2x), z7.fillStyle = __fx.utils.lineColor(bE.qN)) : z7.strokeRect(fr, ft, j, k), z7.fillRect(fr, ft + wc, j, bf.a2x), z7.fillStyle = bE.qN,
			z7.font = bD.ta.v9(1, .48 * wc), bD.ta.textAlign(z7, 1), bD.ta.textBaseline(z7, 1), z7.fillText(L(143), Math.floor(fr + (j - .5 * wc) / 2), Math.floor(ft + .55 * wc)), aN.aA4(Math.floor(fr + j - .8 * wc), Math.floor(ft + .25 *
				wc), Math.floor(.5 * wc)), z7.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dz() {
	var gap, aFN, fr = [0, 0, 0, 0, 0],
		ft = [0, 0, 0, 0, 0],
		oI = [1, 1, 1, 1, 1],
		gC = [!0, !0, !0, !1, !1],
		eu = (this.gX = [!0, !0, !0, !1, !1], null);
	this.aHB = function(a6q, aHC) {
		eu = a6q, gC = aHC, aFN = [bN.aHD, bN.a55, bN.aHE, bN.aHE, bN.aHF], this.dv()
	}, this.dv = function() {
		if (ac.w9()) {
			var aC, vo = Math.floor((a1.a2.iu() ? .261 : .195) * i.iv),
				vp = Math.floor(.9 * vo),
				aCr = Math.floor(.17 * vp);
			if (gap = a1.a2.iu() ? 2 * bf.gap : bf.gap, oI[0] = vo / eu[0].width, oI[1] = vp / eu[1].width, oI[2] = aCr / eu[2].height, oI[3] = aCr / eu[3].height, oI[4] = aCr / eu[4].height, oI[2] *= 1.7, oI[3] *= 1.07, fr[0] = gap, fr[1] = gap,
				fr[2] = gap, fr[3] = gap, fr[4] = Math.floor(2 * gap + oI[3] * eu[3].width), ft[0] = gap, ft[1] = ft[0] + gap + oI[0] * eu[0].height, ft[2] = ft[1] + gap + oI[1] * eu[1].height, ft[3] = ft[2] + gap + oI[2] * eu[2].height, ft[4] =
				ft[3], !gC[0])
				for (aC = 0; aC < 5; aC++) ft[aC] -= oI[0] * eu[0].height + gap;
			if (!gC[1])
				for (aC = 2; aC < 5; aC++) ft[aC] -= oI[1] * eu[1].height + gap
		}
	}, this.iU = function() {
		return !(7 === ab.a59() && a1.a2.iu())
	}, this.hy = function(j2, j3) {
		if (eu && this.iU())
			for (var aC = gC.length - 1; 0 <= aC; aC--)
				if (gC[aC] && this.gX[aC] && fr[aC] < j2 && ft[aC] < j3 && j2 < fr[aC] + oI[aC] * eu[aC].width && j3 < ft[aC] + oI[aC] * eu[aC].height) return u.v(9, u.vj, new aHG(L(144), bD.ta.a7I(aFN[aC]))), !0;
		return !1
	}, this.z6 = function() {
		if (eu && this.iU()) {
			var aC;
			for (z7.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) gC[aC] && this.gX[aC] && (z7.setTransform(oI[aC], 0, 0, oI[aC], fr[aC], ft[aC]), z7.drawImage(eu[aC], 0, 0));
			z7.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function di() {
	this.aHH = 0, this.pj = null, this.pl = null, this.tV = null, this.ls = null, this.z = null, this.yK = null, this.xo = null, this.message = null, this.pX = null, this.pr = null, this.aHI = null, this.aHJ = new aHK, this.xN = new aHL, this.fH = 0,
		this.aDk = 0, this.dv = function() {
			this.aDk = bi.ek, this.aHH = bJ.fB.fC(bm.buffer.data[105].value, 5), this.pl = new aHM, this.tV = new aHN, this.ls = new aHO, this.z = new aHP, this.yK = new aHQ, this.xo = new aHR, this.message = new aHS, this.pX = new aHT, this.pr =
				new aHU, this.aHI = new aHV, bt.dv(), this.fH = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.fF()
		}, this.y9 = function() {
			this.xN.aHW(), this.pr && this.pr.y9(), this.pj = null, this.pl = null, this.tV = null, this.ls = null, this.z = null, this.yK = null, this.xo = null, this.message = null, this.pX = null, this.pr = null, this.aHI = null, this.fH = 0, bt
				.y9(), a1.a2.setState(0)
		}
}

function aHM() {
	function aHY() {
		bq.z.aHZ += 29 === u.vj && 1 === bq.z.aHa
	}

	function aI4(self, kJ, hD) {
		for (var h = self.xC.splice(kJ, hD), aC = 0; aC < h.length; aC++) aHu(self, h[aC]);
		aHY()
	}

	function aHu(self, hI) {
		var self = self.xq,
			p8 = self.pop();
		p8 !== hI && ((self[hI.aHg] = p8).aHg = hI.aHg)
	}
	this.xC = [], this.xq = [], this.aHX = [], this.aHb = function(pd, username, xz, a7n, aHc, elo, color, a0L, aHd, code, xt, xw) {
		username = this.aHf(pd, username, xz, a7n, aHc, elo, color, a0L, aHd, code);
		username.xt = xt, username.xw = xw, this.xC.push(username), username.aHg = this.xq.length, this.xq.push(username), bq.aHH === pd && (bq.pj = username), bq.aHI.aHh(pd) && (username.y1 = 1), bq.pr.aHi(pd), aHY()
	}, this.aHf = function(pd, username, xz, a7n, aHc, elo, color, a0L, aHd, code) {
		return {
			pd: pd,
			username: code ? __fx.nameFilter.filter(username) : "Player " + bI.fB.a3G(pd, 2),
			aHj: __fx.nameFilter.filter(username),
			xz: xz,
			a7n: a7n,
			aHc: aHc,
			elo: elo,
			color: color,
			a0L: a0L,
			aHd: aHd
		}
	}, this.aHk = function(eT, xz, a7n, aHc, elo, a0L, color) {
		eT = this.xC[eT];
		eT.xz = xz, eT.a7n = a7n, eT.aHc = aHc, eT.elo = elo, eT.a0L = a0L, eT.color = color, bq.pr.aHi(eT.pd), aHY()
	}, this.aHl = function(eT, code) {
		eT = this.xC[eT];
		1 === code && (eT.username = eT.aHj), bq.pr.aHi(eT.pd), aHY()
	}, this.aHm = function(eT, aHn) {
		var eT = this.xC[eT],
			aHo = eT.username,
			aD3 = eT.username !== eT.aHj,
			aHp = "Redacted " + bI.fB.a3G(eT.pd, 2);
		eT.aHj = aHn ? "[" + bD.pZ.pn(eT.aHj) + "] " + aHp : aHp, aD3 || (eT.username = eT.aHj), aHo.indexOf("Redacted") < 0 && (eT.aHq = aHo), bq.pr.aHi(eT.pd), aHY()
	}, this.aHr = function(eT, username) {
		var eT = this.xC[eT],
			aD3 = eT.username !== eT.aHj;
		eT.aHj = username, aD3 || (eT.username = username), eT.pd === bq.aHH && bq.ls.aHs(username), bq.pr.aHi(eT.pd), aHY()
	}, this.aHt = function(eT) {
		eT = this.xC.splice(eT, 1)[0];
		aHu(this, eT), this.aHX.push(eT), 1e3 < this.aHX.length && this.aHX.shift(), aHY()
	}, this.aHv = function(eT, target, xt, xw) {
		var xC = this.xC,
			eT = xC.splice(eT, 1)[0];
		xC.splice(target, 0, eT), !eT.xt && xt && bq.aHI.join(eT), eT.xt = xt, eT.xw = xw, aHY()
	}, this.aHw = function(xt) {
		for (var xC = this.xC, fk = xC.length, aC = 0; aC < fk; aC++)
			if (xC[aC].xt === xt) return aC;
		return fk
	}, this.aHx = function(kJ) {
		for (var xC = this.xC, fk = xC.length, xt = kJ < fk ? xC[kJ].xt : 0, aC = kJ; aC < fk && xC[aC].xt === xt && !xC[aC].xw;) aC++;
		return aC
	}, this.aHy = function(kJ, aHz, aI0) {
		for (var aI1 = this.aHx(kJ), h = [], aC = 0; aC < aHz; aC++) aI0 && 511 === aI0[aC] || h.push(this.xC[aI1 + aC]);
		return h
	}, this.aI2 = function(kJ, hD, aHz, aI0) {
		for (var aI3 = this.aHy(kJ, aHz, aI0), aC = aI3.length - 1; 0 <= aC; aC--) aI4(this, this.xC.indexOf(aI3[aC], kJ), 1);
		aI4(this, kJ, hD)
	}, this.aI5 = function(xt) {
		for (var xC = this.xC, aI6 = 0; aI6 < xC.length && xC[aI6].xt === xt;) aI6++;
		for (var left = xC.splice(0, aI6), aC = 0; aC < aI6; aC++) left[aC].xt = 0, left[aC].xw = 0, xC.push(left[aC]);
		aHY()
	}, this.pm = function(pd) {
		for (var xC = this.xC, ly = xC.length, g3 = 0; g3 < ly; g3++)
			if (pd === xC[g3].pd) return xC[g3];
		return null
	}
}

function aHN() {
	this.tV = [], this.xQ = 0, this.xR = 0, this.aI7 = 0;
	var aI9 = this.aI8 = 0,
		aIA = 0;
	this.aIB = function() {
		for (var self, fk = bK.sd(4), tV = new Array(fk), aC = 0; aC < fk; aC++) tV[aC] = {
			id: bK.sd(13),
			xX: bK.sd(12),
			hD: bK.sd(16),
			aHz: bK.sd(16),
			na: bK.sd(10),
			fQ: bK.sd(6),
			mapSeed: bK.sd(14),
			xA: bK.sd(4),
			xb: bK.sd(1)
		};
		this.tV = tV, __fx.lobbyReminders.setRooms(this.tV), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aID({
				id: 7,
				s: text
			})
		}), !(self = this).xQ || 0 <= self.xs(self.xQ) || (self.xQ = 0, self.xR = 0, bq.message.aID({
			id: 7,
			s: L(145)
		}))
	}, this.xs = function(id) {
		for (var tV = this.tV, aC = tV.length - 1; 0 <= aC; aC--)
			if (tV[aC].id === id) return aC;
		return -1
	}, this.aIE = function() {
		return 1 === aI9
	}, this.aIF = function(id) {
		return 0 < id && 0 < this.tV.length && this.tV[0].id === id
	}, this.aIG = function() {
		return this.aIF(this.xQ)
	}, this.click = function(eT, xw) {
		eT = this.tV[eT];
		xw = xw ? 1 : 0, eT && (eT.id === this.xQ && xw === this.xR ? this.select(0, 0) : this.select(eT.id, xw))
	}, this.select = function(id, xw) {
		this.xQ = id, this.xR = id ? xw : 0, this.aI7 = this.aI8 = 0, aI9 = 1, aIA++, b1.aIH.aII(4, {
			xt: id,
			xw: this.xR
		}), u.a9D(29).aIJ()
	}, this.aIK = function(id, xw) {
		0 === (aIA = Math.max(aIA - 1, 0)) && (this.xQ = id, this.xR = xw)
	}, this.zV = function(pd, xA) {
		this.aI7 = xA ? pd : 0, this.aI8 = xA, aI9 = 1, b1.aIH.aII(6, {
			xA: xA,
			pd: pd
		})
	}, this.aIL = function(pd, xA) {
		return this.aI8 === xA && this.aI7 === pd
	}, this.xS = function(xP) {
		return xP.hD - xP.aHz
	}, this.xV = function(xA) {
		return xA < 7 ? xA + 2 + " Teams" : 7 === xA ? "Battle Royale" : 8 === xA ? "1v1" : 9 === xA ? "Zombie" : "No Full-Sending"
	}, this.xY = function(xP) {
		return xP.na < (9 === xP.xA ? 333 : 512)
	}, this.xW = function(xX) {
		var aBR = xX % 60;
		return bO.gB(xX, 60) + ":" + (aBR < 10 ? "0" : "") + aBR
	}
}

function aHV() {
	var aIM = [],
		aIN = [],
		aIO = 0;

	function aIP(h, aAz, aIS, aIT) {
		var fk = h.length;
		if (0 === fk) return "";
		var pV = "@" + h[0];
		if (1 === fk) return pV + aAz + aIT;
		for (var aC = 1; aC < fk - 1; aC++) pV += ", @" + h[aC];
		return pV + " and @" + h[fk - 1] + aIS + aIT
	}
	this.dv = function() {
		var pV = aIP(aIN, " is", " are", " in the lobby.");
		pV.length && bq.message.aID({
			id: 7,
			s: pV
		}), aIM = [], aIN = [], aIO = 0
	}, this.aHh = function(aIQ) {
		return bq.aHH !== aIQ && (aIQ = bI.fB.a3G(aIQ, 5), !!bm.zV.y1(aIQ)) && (aIN.push(aIQ), !0)
	}, this.join = function(player) {
		bq.aHH !== player.pd && (player = bI.fB.a3G(player.pd, 5), bm.zV.y1(player)) && aIM.push(player)
	}, this.aIR = function() {
		var aAz, aIS;
		++aIO < 3 || (aIO = 0, aAz = aIP(aIN, "", "", " entered the lobby!"), (aAz = (aIS = aIP(aIM, "", "", " joined a game!")).length ? aAz.length ? aAz + " " + aIS : aIS : aAz).length && bq.message.aID({
			id: 7,
			s: aAz
		}), aIM = [], aIN = [])
	}
}

function aHK() {
	this.e3 = function(kJ, aIU, aHz) {
		var pl, aHJ = bq.z.aHJ,
			aIV = bq.pl.xC.slice(kJ, kJ + aIU),
			kJ = bq.pl.aHy(kJ, aHz, aHJ.aI0),
			aHz = function(aIV) {
				if (__fx.customLobby.isActive()) return bq.pj ? __fx.customLobby.getPlayerId() : -1;
				if (bq.pj && bq.tV.aIE())
					for (var fk = aIV.length, pd = bq.pj.pd, aC = 0; aC < fk; aC++)
						if (aIV[aC].pd === pd) return aC;
				return -1
			}(aIV.concat(kJ));
		if (-1 === aHz) return (pl = bq.pl).aHX = pl.aHX.concat(aIV, kJ), 1e3 < bq.pl.aHX.length && bq.pl.aHX.splice(0, bq.pl.aHX.length - 1e3), bq.z.aHZ += 29 === u.vj && 1 === bq.z.aHa, !1;
		if (aHJ.a8h = aIU <= aHz ? 1 : 0, aHJ.a90 = kJ.length, 8 === aHJ.xA) {
			for (var aIZ = function(aI0) {
					for (var h = [], aC = 0; aC < aI0.length; aC++) 511 !== aI0[aC] && h.push(aI0[aC]);
					return h
				}(aHJ.aI0), ia = aHz - aIU, aIb = aHJ.a8h ? aIZ[ia] : aHz >> 1, aIc = 0, aC = aHJ.a90 = 0; aC < aIZ.length; aC++) aIZ[aC] === aIb && (aIc += aC < ia ? 1 : 0, aHJ.a90++);
			aHJ.aId = (aHJ.aId + aIb) % 1024, 0 <= aHJ.a4Q && (aHJ.a4Q += aIb), aHz = aHJ.a8h ? 2 + aIc : aHz % 2, aIV = aIV.slice(2 * aIb, 2 * aIb + 2)
		}
		return aHJ.aIe = aHJ.a8h ? function(aIV) {
			var tV = bq.tV;
			if (tV.aI8)
				for (var aC = 0; aC < aIV.length; aC++)
					if (aIV[aC].pd === tV.aI7) return aC;
			return 0
		}(aIV) : 0, ay.dv(aHJ, aIV, aHz), !0
	}, this.aIg = function(aHJ, aIV, aIX) {
		var fn = aE.data = new a8b,
			aIj = (fn.spawningSeed = aHJ.spawningSeed, aHJ.xA < 7 ? (fn.gameMode = 1, fn.numberTeams = aHJ.xA + 2) : 9 === aHJ.xA ? (fn.gameMode = fn.isZombieMode = 1, fn.numberTeams = 2) : (fn.gameMode = 0, fn.battleRoyaleMode = 7 === aHJ.xA ?
					0 : 10 === aHJ.xA ? 1 : 2), fn.selectedPlayer = aHJ.a8h ? aHJ.aIe : aIX, fn.a8h = aHJ.a8h, fn.a90 = aHJ.a90, fn.isContest = aHJ.xb, fn.mapType = bV.aIh(aHJ.fQ) ? 0 : 1, bV.aIi(fn, aHJ.fQ), fn.mapSeed = aHJ.mapSeed, fn
				.humanCount = aIV.length);
		fn.selectableSpawn = 1 === fn.gameMode || aIj < 100, fn.colorsData = new Uint32Array(aIj), fn.playerNamesData = new Array(aIj), fn.a91 = new Uint32Array(aIj);
		for (var aC = 0; aC < aIj; aC++) fn.colorsData[aC] = aIV[aC].color, fn.playerNamesData[aC] = aIV[aC].username, fn.a91[aC] = aIV[aC].pd;
		if (2 === fn.battleRoyaleMode)
			for (fn.elo = new Uint16Array(aIj), aC = 0; aC < aIj; aC++) fn.elo[aC] = aIV[aC].elo;
		bx.close(), ab.setState(8), bV.a8(aHJ.fQ, fn.mapSeed), aE.a8g(), aE.a4Q = aHJ.a4Q, aE.a8e = 2
	}
}

function aHO() {
	var eK = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aIk = [bE.qb, bE.qb, bE.qc, bE.r7, bE.r8, bE.qs, bE.rD, bE.qc, bE.re, bE.rS, bE.rb, bE.qE],
		aIl = [
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
		aIm = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aJ1(pt, pd, aJ3) {
		for (var g4 = pt.length - 1; 0 <= g4; g4--) {
			var q4 = pt[g4];
			0 === q4.id && q4.pd === pd && (q4.s = "[Redacted Message]", aJ3) && (q4.aJ4 = 1)
		}
	}
	this.py = function(pb) {
		var aIn, a4k;
		return pb.id < 5 && (aIn = "@" + bI.fB.a3G(pb.pd, 5)), 0 === pb.id ? aIn + ": " + pb.s : 1 === pb.id ? (a4k = "@" + bI.fB.a3G(pb.target, 5), 0 === pb.aIo ? 32768 <= pb.value ? aIn + " voted with " + (pb.value - 32768 + 1) +
				" gold against " + a4k + " to weaken the latter's admin position. 📉" : aIn + " voted with " + (pb.value + 1) + " gold for " + a4k + " to strengthen the latter's admin position. 💪" : 1 === pb.aIo ? aIn + " sent " + Math.floor(pb
					.value / 100) + " 🧈 gold to " + a4k + "." : aIn + " voted with " + (pb.value / 10).toFixed(1) + " points for " + a4k + " to acknowledge the latter as clan leader. ✅") : 2 === pb.id ? 0 === pb.aIo ? aIn +
			" was 🔇 muted for 1 Hour." : 1 === pb.aIo ? "The username of " + aIn + " was ✂️ redacted. Duration: 1 Day" : aIn + " 👢 was kicked." : 3 === pb.id ? aIn + br.eW(pb.aIo, br.eQ[pb.aIo][pb.value]) + "@" + bI.fB.a3G(pb.target, 5) + br
			.eY(pb.aIo, br.eQ[pb.aIo][pb.value]) : 4 === pb.id ? (a4k = "@" + bI.fB.a3G(pb.target, 5), 1 === pb.aIo ? "✅ " + aIn + " vouched for " + a4k + "." + (pb.aIq ? " ⚖️ The punishment of " + a4k + " was refunded." : "") : "🚩 " + aIn +
				" reported " + a4k + "." + (pb.aIq ? " ⚖️ " + a4k + " was punished." : "")) : 5 === pb.id ? aIm[pb.aIo] : 6 === pb.id ? "You are about to mention " + pb.value + " player" + (1 === pb.value ? "" : "s") +
			". This action will cost " + (Math.max(pb.value, 1) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === pb.id ? pb.s : void 0
	}, this.px = function(pb, aIr) {
		return {
			pb: pb,
			s: aIr,
			aIs: 0,
			fontSize: 4 === pb.id ? .8 : 1,
			q5: 0,
			aIt: pb.id ? bE.r6 : bE.qN
		}
	}, this.xx = function(player, xv) {
		return (xv ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.xy = function(xz) {
		return aIk[xz]
	}, this.aIu = function(xz, a7n) {
		return xz < 3 || 7 === xz ? aIl[xz][0] : 4 === xz ? aIl[xz][a7n < 1 ? 0 : a7n < 10 ? 1 : 2] : aIl[xz][a7n < 10 ? 0 : 1]
	}, this.aIv = function(a7n) {
		return 0 === a7n
	}, this.y0 = function(q4) {
		return !!bq.pj && q4.pd === bq.pj.pd
	}, this.aIw = function(pl, aIx, aIy) {
		var a4i = [];
		loop: for (var aC = aIx; aC < aIy; aC++) {
			var a4j = bD.pZ.pn(pl[aC].username);
			if (a4j) {
				for (var g4 = a4i.length - 1; 0 <= g4; g4--)
					if (a4j === a4i[g4].name) {
						a4i[g4].hD++;
						continue loop
					} a4i.push({
					name: a4j,
					hD: 1
				})
			}
		}
		if (a4i.sort(function(g3, g4) {
				return g4.hD - g3.hD
			}), 0 === a4i.length) return "";
		for (var pV = a4i[0].name + ": " + a4i[0].hD, aC = 1; aC < a4i.length; aC++) pV += "   " + a4i[aC].name + ": " + a4i[aC].hD;
		return pV
	}, this.aIz = function(xz, a7n, aHc) {
		return 0 === eK[xz].length ? "Rank: " + (a7n + 1) : eK[xz] + " Rank: " + (a7n + 1) + (3 !== xz && aHc < 100 ? "   " + eK[3] + " Rank: " + (aHc + 1) : "")
	}, this.aJ0 = function(pd) {
		aJ1(bq.z.pt, pd), aJ1(bq.message.aJ2(), pd, 1), bq.pr.aJ0(pd)
	}, this.aHs = function(username) {
		var username = this.aJ5(username);
		username && (username = "[" + username + "] " + function(username) {
			var fZ = username.indexOf("["),
				fo = username.indexOf("]", fZ);
			for (; 0 <= fZ && fZ < fo;) username = username.substring(0, fZ) + username.substring(fo + 1), fZ = username.indexOf("["), fo = username.indexOf("]", fZ);
			return (username = username.replace(new RegExp("[\\[\\]]", "g"), "")).replace(new RegExp("\\s+", "g"), " ").trim()
		}(String(bm.buffer.data[122].value)), bm.rt.q0(122, username.trim().slice(0, 20)))
	}, this.aJ5 = function(username) {
		var fZ = username.indexOf("["),
			fo = username.indexOf("]");
		return !(fZ < 0 || fo - fZ <= 1 || 8 < fo - fZ) && (username = username.substring(fZ + 1, fo).trim()).length ? username : null
	}
}

function aHR() {
	var uz = 0,
		aJ8 = 0,
		aJ9 = 0,
		aJA = null,
		aJB = null;

	function aJE(q4, aJF, aJG) {
		var pV = q4.username;
		return (pV += "   " + bq.ls.aIz(q4.xz, q4.a7n, q4.aHc)) + function(q4) {
			q4 = q4.a0L;
			if (q4 < 1e3) return "   Gold: " + q4;
			if ((q4 %= 1024) < 1e3) return "   Gold: " + q4 + "k";
			return "   Gold: " + (q4 - 999) + "M"
		}(q4) + ("   IP: " + bI.fB.a3G(q4.aHd, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aJG ? aJ8 : aJD(q4, aJF)])
	}

	function aJD(q4, aJF) {
		return aJ8 = aJF || bq.pl.pm(q4.pd) ? 1 : 0
	}
	this.xp = 0, this.aJC = function() {
		!uz || aJ8 === aJD(aJB) && aJ9 === aJB.a0L || (aJ9 = aJB.a0L, aJA.show(-1, -1, aJE(aJB, 0, 1), 1, 1, aJB.color))
	}, this.y2 = function(e, q4, aJF) {
		var rect = e.getBoundingClientRect();
		this.show(rect.left, rect.top, q4, 0, aJF), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.xo && bq.xo.uZ(1)
		}), this.xp = aJF
	}, this.show = function(fr, ft, q4, vF, aJF) {
		aJA = aJA || new vC, aJ9 = (aJB = q4).a0L, aJA.show(fr, ft, aJE(q4, aJF), vF, 0, aJB.color), uz = 1
	}, this.uZ = function(vL) {
		this.xp = 0, aJA && aJA.uZ(vL) && (uz = 0, aJB = null)
	}
}

function aHP() {
	function aJK() {
		var fQ, mapSeed;
		u.a9D(29) && (bq.z.aHZ && 1 === bq.z.aHa && u.a9D(29).aJM(), bq.z.aHZ = 0, u.a9D(29).aJN(), fQ = bV.fQ, mapSeed = bV.mapSeed, u.a9D(29).aJO(), fQ === bV.fQ && mapSeed === bV.mapSeed || bq.xN.aJP(), bq.xo.aJC())
	}
	this.wW = 0, this.aHa = 2, this.aHJ = {
		fQ: 0,
		mapSeed: 0,
		xA: 0,
		xb: 0,
		spawningSeed: 0,
		a4Q: -1,
		a5H: 0,
		aId: 0,
		aHz: 0,
		aI0: null,
		a90: 0,
		a8h: 0,
		aIe: 0
	}, this.pt = [], this.q2 = 300, this.pu = 1048575, this.aHZ = 0, this.aJI = [0, 0], this.aJJ = function() {
		aJK(), bq.aHI.dv(), __fx.lobbyReminders.check()
	}, this.aIR = function() {
		bq.aHI.aIR(), aJK(), __fx.lobbyReminders.check()
	}, this.aJQ = function() {
		0 === this.aHa && u.a9D(29).aJR()
	}
}

function aHL() {
	var aJS = 256,
		aJT = 18,
		aJU = [],
		aJX = 0;

	function aJi(aJg) {
		aJg && (aJX = 0)
	}

	function zj(key, aJZ, fr, ft, xh) {
		var canvas = document.createElement("canvas"),
			p3 = (canvas.width = canvas.height = aJS, canvas.getContext("2d", {
				alpha: !1
			})),
			p3 = (p3.imageSmoothingEnabled = !0, p3.drawImage(aJZ, fr, ft, xh, xh, 0, 0, aJS, aJS), {
				key: key,
				canvas: canvas,
				iU: 0
			});
		return aJU.push(p3), aJU.length > aJT && function(aJn) {
			for (var fk = aJU.length, aC = 0; aC < fk; aC++) {
				var hI = aJU[aC];
				if (!hI.iU && hI !== aJn) return hI.canvas.width = hI.canvas.height = 0, aJU.splice(aC, 1)
			}
		}(p3), p3
	}
	this.xO = function(fQ, mapSeed) {
		return fQ + "_" + (bV.aJY(fQ) ? mapSeed : 0)
	}, this.xg = function(fQ, mapSeed) {
		for (var key = this.xO(fQ, mapSeed), aJZ = null, aC = aJU.length - 1; 0 <= aC; aC--) {
			var hI = aJU[aC];
			if (hI.key === key) {
				if (!hI.iU) return hI.iU = 1, aJU.splice(aC, 1), aJU.push(hI), hI.canvas;
				aJZ = hI
			}
		}
		return aJZ ? ((fQ = zj(key, aJZ.canvas, 0, 0, aJS)).iU = 1, fQ.canvas) : null
	}, this.ps = function(canvas) {
		for (var aC = aJU.length - 1; 0 <= aC; aC--)
			if (aJU[aC].canvas === canvas) {
				aJU[aC].iU = 0;
				break
			} canvas.parentNode && u.removeChild(canvas.parentNode, canvas)
	}, this.aHW = function() {
		for (var aC = aJU.length - 1; 0 <= aC; aC--) this.ps(aJU[aC].canvas)
	}, this.ep = function() {
		if (bq.fH && !(bi.ek < aJX)) {
			for (var self, fQ, mapSeed, el, tV = bq.tV.tV, fk = tV.length, aJa = 0, aC = 0; aC < fk; aC++) {
				var key = this.xO(tV[aC].fQ, tV[aC].mapSeed);
				if (! function(key) {
						for (var aC = aJU.length - 1; 0 <= aC; aC--)
							if (aJU[aC].key === key) return 1;
						return
					}(key)) {
					key = function(fQ, key) {
						var eT = bV.aJe.xs(fQ);
						if (eT < 0) return -1;
						var aJf = bV.aJf,
							aJg = aJf.get(eT, 1);
						if (aJg) return (fQ = bV.aJe.aJj(fQ, aJg)) ? (aJg = Math.min(fQ.width, fQ.height), zj(key, fQ, fQ.width - aJg >> 1, fQ.height - aJg >> 1, aJg), fQ.width = fQ.height = 0, 1) : 0;
						aJf.aJh(eT, 1) || aJf.zn(eT, 1, aJi);
						return 0
					}(tV[aC].fQ, key);
					if (!(0 <= key)) return self = this, fQ = tV[aC].fQ, mapSeed = tV[aC].mapSeed, el = void 0, el = performance.now(),
						function(self, fQ, mapSeed) {
							var aJZ = bV.aJl(fQ, mapSeed),
								xh = Math.min(aJZ.width, aJZ.height);
							zj(self.xO(fQ, mapSeed), aJZ, aJZ.width - xh >> 1, aJZ.height - xh >> 1, xh), aJZ !== bV.a22 && (aJZ.width = aJZ.height = 0)
						}(self, fQ, mapSeed), u.a9D(29).aIJ(), self = performance.now(), void(aJX = self + Math.max(Math.min(self - el, 500), 200));
					aJa += key
				}
			}
			aJa && u.a9D(29).aIJ(), aJX = bi.ek + 200
		}
	}, this.aJP = function() {
		aJX = performance.now() + 200
	}
}

function aHT() {
	var aJo = 0,
		aJp = "",
		aJq = 0,
		aJr = 0,
		aJs = "";

	function aJv(aIr) {
		b1.aIH.aII(3, aIr)
	}

	function aJu(s) {
		s = bq.pX.pY(s);
		return s.length ? s.join(" ") + " " : ""
	}

	function aK6(j) {
		return new RegExp("^@([-\\w]{5}|\\[[-\\w]{1,6}\\])$").test(j)
	}

	function aJy(s) {
		var aKC = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aKC)
	}
	this.a41 = function(s) {
		var h, aJz, aJt;
		if (aJo) return aJo = 0, "yes" === (aJt = s.toLowerCase()) || "y" === aJt ? (aJs = aJu(aJp), void aJv(aJp)) : (aJs = "", void bq.message.aID({
			id: 5,
			aIo: 7
		}));
		aJs = aJu(s), !(s.indexOf("@") < 0) && (aJt = aJy(s)) ? (aJp = s, h = bq.pl.xC.slice(), function(aJx, aJz, s) {
			if (!aJq) return;
			for (var fk = aJz.length, aC = 0; aC < fk; aC++) 2 === aJz[aC].id && (s = s.replace(aJx[aJz[aC].eT], "@" + aJz[aC].gC));
			return aJo = 1, aJv((aJp = s).slice(0, 126) + "|"), 1
		}(aJt, aJz = function(aJx) {
			for (var aJz = [], fk = (aJr = aJq = 0, aJx.length), aC = 0; aC < fk; aC++) {
				var j = aJx[aC],
					ly = j.length;
				bD.pZ.startsWith(j, "@[") ? ly <= 9 && bD.pZ.a7L(j, "]") && aJz.push({
					id: 0,
					gC: j.substring(2, ly - 1).toUpperCase()
				}) : 6 === ly && (aJr++, aJz.push({
					id: 1,
					gC: bJ.fB.fC(j.substring(1), 5)
				}))
			}
			return aJz
		}(aJt), s) || (0 === aJz.length || aJt.length === aJr ? aJv(s) : (function(h, aJz) {
			var ly = aJz.length;
			if (0 === ly) return;
			var fk = h.length;
			loop: for (var aC = fk - 1; 0 <= aC; aC--) {
				for (var g3 = 0; g3 < ly; g3++)
					if (0 === aJz[g3].id) {
						if (aJz[g3].gC === bD.pZ.pn(h[aC].username)) continue loop
					} else if (1 === aJz[g3].id && aJz[g3].gC === h[aC].pd) continue loop;
				h[aC] = h[--fk], h.pop()
			}
		}(h, aJz), aJt = h.length, aJs = "", aJo = 1, bq.message.aID({
			id: 6,
			value: aJt
		})))) : aJv(s)
	}, this.aK4 = function() {
		return aJo
	}, this.aK5 = function() {
		return aJs
	}, this.pY = function(s) {
		var aJx = aJy(s),
			h = [];
		if (aJx)
			for (var aC = 0; aC < aJx.length; aC++) aK6(aJx[aC]) && h.indexOf(aJx[aC]) < 0 && h.push(aJx[aC]);
		return h
	}, this.aK7 = function(event, e) {
		if ("deleteContentBackward" !== event.inputType) return 0;
		var a0B = e.selectionStart;
		if (a0B !== e.selectionEnd) return 0;
		var pV = e.value.substring(0, a0B),
			ly = pV.match(new RegExp("\\B@[-\\w\\[\\]]+ $"));
		if (!ly || !aK6(ly[0].substring(0, ly[0].length - 1))) return 0;
		event.preventDefault();
		event = a0B - ly[0].length;
		return e.value = pV.substring(0, event) + e.value.substring(a0B), e.setSelectionRange(event, event), 1
	}, this.aK8 = function(s) {
		s = aJy(s);
		return s ? function(aJx) {
			for (var fk = aJx.length, aC = 0; aC < fk; aC++) {
				var j = aJx[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return 0
		}(s) || function(aJx) {
			for (var aKB = new RegExp("^[0-9]"), a84 = new RegExp("^[0-9]+$"), aC = 0; aC < aJx.length; aC++) {
				var j = aJx[aC].substring(1);
				if (1 <= j.length && j.length <= 3 && aKB.test(j) && !a84.test(j)) return 1
			}
			return 0
		}(s) : 0
	}, this.aKD = function(s) {
		var aJx = aJy(s);
		if (aJx)
			for (var a6 = new RegExp("^[0-9]+$"), fk = aJx.length, aC = 0; aC < fk; aC++) {
				var j = aJx[aC].substring(1),
					ly = j.length;
				1 <= ly && ly <= 3 && a6.test(j) && (ly = parseInt(j, 10), !isNaN(ly)) && 0 <= ly && ly < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[ly]))
			}
		return s
	}
}

function aHS() {
	var aKF, aKG = [],
		aKH = -1,
		aKI = 0,
		aKJ = 0;

	function aKN() {
		aKI = bi.ek, (3 === this.y6 ? aKM : (aKH = (aKG.length + aKH + 2 * this.y6 - 1) % aKG.length, aKL))()
	}

	function aKL() {
		0 !== aKG.length && (aKJ = 0, aKF && aKF.y9(), (aKF = new y3(aKN)).q0(aKH, aKG.length), aKF.show(aKG[aKH]), bq.message.resize())
	}

	function aKM() {
		aKJ = 1, aKF && aKF.y9(), (aKF = new yA(aKL)).q0(aKG.length), aKF.show(), bq.message.resize()
	}
	this.aID = function(pb) {
		var q4;
		2 === pb.id && 3 === pb.aIo ? bq.ls.aJ0(pb.pd) : (q4 = bq.ls.px(pb, bq.ls.py(pb)), (5 !== pb.id && 6 !== pb.id || (c0.nG.q1(q4), 5 === pb.id)) && (q4 = bi.ek < aKI + 2e4, aKH !== aKG.length - 1 && q4 || (aKH = aKG.length), __fx.pingFilter
			.isMuted(pb, "s") || (aKG.push(pb), bm.buffer.data[14].value || 7 === pb.id || bt.play(), aKF && (aKJ && (bm.buffer.data[13].value || q4) ? aKF.q0(aKG.length) : aKL()))))
	}, this.show = function() {
		aKM()
	}, this.uZ = function() {
		aKH = aKG.length - 1, aKF && aKF.y9(), aKF = null
	}, this.resize = function() {
		aKF && aKF.resize()
	}, this.aJ2 = function() {
		return aKG
	}
}

function aHQ() {
	var aKO = null,
		aKP = null,
		aKQ = 0,
		aKR = null;

	function aKY(title, aKl, tr, backgroundColor) {
		title = new x(title, tr, backgroundColor);
		return by.v4(title.button, aKl), title
	}

	function aKX() {
		return bI.fB.a3G(aKP.pd, 5)
	}

	function aKj() {
		return +(0 === aKP.xz || bq.ls.y0(aKP))
	}

	function aKi() {
		aKj() || (aKP.y1 = bm.zV.zi(aKX()), bq.z.aHZ += 1 === bq.z.aHa, bq.yK.uZ())
	}

	function aKZ() {
		0 !== aKP.xz && (bq.yK.uZ(), u.v(8, 29, new vk(25, {
			action: 0,
			pd: bI.fB.a3G(aKP.pd, 5),
			vi: 0
		}, 29)))
	}

	function aKf() {
		return !bq.pj || bq.ls.y0(aKP) ? 1 : 0
	}

	function aKb() {
		return aKf() ? 1 : +bs.aKn(bI.fB.a3G(aKP.pd, 5))
	}

	function aKa(aKo) {
		aKb() || (bs.aKp(bI.fB.a3G(aKP.pd, 5), aKo), bq.yK.uZ())
	}

	function aKd() {
		var fr, ft;
		aKb() || (fr = aKO.fr, ft = aKO.ft, bq.yK.uZ(), aKO = new yB([aKY(L(168), L(169), function() {
			aKa(0)
		}, 0), aKY(L(170), L(171), function() {
			bq.yK.uZ()
		}, 0)], 2), aKk(fr, ft), aKQ = 2)
	}

	function aKU(xA) {
		return bq.tV.aIL(aKP.pd, xA)
	}

	function aKe(xA) {
		aKf() || (bq.tV.zV(aKP.pd, aKU(xA) ? 0 : xA), bq.yK.uZ())
	}

	function aKh() {
		var ou;
		return !aKf() && (ou = bD.pZ.pn(aKP.username)) ? +(ou === bD.pZ.pn(bq.pj.aHj)) : 1
	}

	function aKg() {
		aKh() || (b1.aIH.aII(2, aKP.pd), bq.yK.uZ())
	}

	function aKc() {
		29 === u.vj && u.a5D().pX(bI.fB.a3G(aKP.pd, 5))
	}

	function aKk(fr, ft, yN) {
		aKO.show(fr, ft, yN), bq.xo.show(aKO.fr, aKO.ft, aKP, 1)
	}
	this.aKS = function(e, q4) {
		aKP = q4;
		var aKT = aKU(aKQ = 1),
			aKV = aKU(2),
			aKW = bm.zV.y1(aKX());
		aKO = new yB([aKY(L(146), L(147), aKZ, 0 === q4.xz ? 1 : 0), aKY(L(148), L(149), function() {
			aKa(1)
		}, aKb()), aKY(L(150), L(151), aKc, 0), aKY(L(152), L(153), aKd, aKb()), aKY(L(aKT ? 154 : 155), L(aKT ? 156 : 157), function() {
			aKe(1)
		}, aKf()), aKY(L(aKV ? 158 : 159), L(aKV ? 160 : 161), function() {
			aKe(2)
		}, aKf()), aKY(L(162), L(163), aKg, aKh()), aKY(L(aKW ? 164 : 165), L(aKW ? 166 : 167), aKi, aKj())], 2), aKk((aKR = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aKR.clientY, 1)
	}, this.a64 = function(code) {
		if (29 !== u.vj) return !1;
		if (!aKP) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.uZ();
			else if (bD.pZ.startsWith(code, "Numpad") || bD.pZ.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aKQ) this.aKS(aKR, aKP);
				else {
					if (!aKO) return !1;
					2 === aKQ ? 1 === code ? aKa(0) : this.uZ() : code <= 1 ? aKZ() : 2 === code ? aKa(1) : 3 === code ? (aKc(), this.uZ()) : 4 === code ? aKd() : code <= 6 ? aKe(5 === code ? 1 : 2) : (7 === code ? aKg : aKi)()
				}
		}
		return !0
	}, this.uZ = function() {
		aKQ = 0, aKO && aKO.uZ(), aKO = null, bq.xo.uZ(), by.uZ()
	}
}

function aHU() {
	var aKq = [],
		aKr = [],
		aKs = {},
		aKt = {};

	function aKy(uX) {
		var h = aKs[uX.aKx.pd];
		h && 0 <= (uX = h.indexOf(uX)) && h.splice(uX, 1)
	}

	function aKv(q4) {
		for (var s = q4.s, aKu = [];;) {
			var eu = function aKz(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var pV = s.substring(position + 1, position + 6);
				if (5 !== pV.length) return aKz(s, position + 1);
				var aLC = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aLC.test(pV)) return aKz(s, position + 1);
				aLC = s.substring(position + 6, position + 7);
				if (1 !== aLC.length) return position;
				pV = new RegExp("^[ :!.]+$");
				if (!pV.test(aLC)) return aKz(s, position + 1);
				return position
			}(s, 0);
			if (-1 === eu) {
				aKu.push(aL0(s, q4));
				break
			}
			0 === eu ? aKu.push(aL1(s.substring(1, 6), q4, eu)) : (aKu.push(aL0(s.substring(0, eu), q4)), aKu.push(aL1(s.substring(eu + 1, eu + 6), q4, eu))), s = s.substring(eu + 6)
		}
		return aKu
	}

	function aL1(pV, q4, eu) {
		var pV = aL2(pV),
			uX = (0 === eu && 0 === q4.pb.id && q4.q5 && (q4.fontSize = bq.ls.aIu(pV.xz, pV.a7n), q4.aIs = bq.ls.aIv(pV.a7n)), document.createElement("span"));
		return uX.style.display = "inline-block", uX.style.cursor = "pointer", uX.style.margin = "0", uX.style.font = "inherit", uX.style.minWidth = uX.style.minHeight = "1em", uX.aKx = {
			q4: q4,
			eu: eu,
			pd: pV.pd
		}, aL3(uX, pV), (aKs[pV.pd] || (aKs[pV.pd] = [])).push(uX), uX
	}

	function aL3(uX, aHe) {
		var q4 = uX.aKx.q4;
		uX.textContent = function(aHe, q4, eu) {
				if (aHe.aL5) return aHe.aL5--, eu = 2 === q4.pb.id || (3 === q4.pb.id || 4 === q4.pb.id) && 0 !== eu, aHe.username + (eu ? " (" + aHe.aHq + ")" : "");
				if (q4.pb.aJ4) return "Redacted " + bI.fB.a3G(aHe.pd, 2);
				return aHe.username
			}(aHe, q4, uX.aKx.eu), uX.style.color = bq.ls.xy(aHe.xz), uX.style.textShadow = 11 !== aHe.xz ? "none" : "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray", uX.style.textDecoration = bq.ls.y0(aHe) ?
			"underline" : "none", aHe.y1 && (uX.style.textDecorationLine = "underline", uX.style.textDecorationStyle = "dotted"), uX.style.fontWeight = bq.ls.aIv(aHe.a7n) ? "bold" : "inherit", uX.onclick = function(e) {
				bq.yK.aKS(e, aHe)
			}, bM.u3() || (uX.onmouseover = function(e) {
				bq.xo.y2(e.target, aHe)
			})
	}

	function aL0(s, q4) {
		var uX = document.createElement("span");
		return uX.textContent = s, uX.style.color = q4.aIt, uX.style.margin = "0", uX.style.font = "inherit", uX
	}

	function aL2(pV) {
		var pd = bJ.fB.fC(pV, 5),
			aHe = bq.pl.pm(pd);
		if (aHe) {
			for (aKq.push(aHe); 75 < aKq.length;) aKq.shift();
			return aHe
		}
		for (var aHX = bq.pl.aHX, aC = aHX.length - 1; 0 <= aC; aC--)
			if (pd === (aHe = aHX[aC]).pd) return aKq.push(aHe), aHe;
		for (aC = aKq.length - 1; 0 <= aC; aC--)
			if (pd === (aHe = aKq[aC]).pd) return aKq.push(aHe), aHe;
		return aL7(pd, null)
	}

	function aL7(pd, name) {
		return aKt[pd] || (aKt[pd] = bq.pl.aHf(pd, name || "Player " + bI.fB.a3G(pd, 2), 1, 999999, 999999, 0, 0, 0, 0, 1))
	}

	function aLB(pd, name) {
		var aHe;
		name && !bq.pl.pm(pd) && ((aHe = function(pd) {
			for (var aHX = bq.pl.aHX, aC = aHX.length - 1; 0 <= aC; aC--)
				if (pd === aHX[aC].pd) return aHX[aC];
			for (aC = aKq.length - 1; 0 <= aC; aC--)
				if (pd === aKq[aC].pd) return aKq[aC];
			return aKt[pd] || null
		}(pd)) ? aHe.username !== name && (aHe.username = aHe.aHj = name, bq.pr.aHi(pd)) : aL7(pd, name))
	}

	function aLG(aHe, aHp, pd) {
		pd === aHe.pd && (aHe.aHq || (aHe.aHq = aHe.username), aHe.username = aHe.aHj = aHp)
	}
	this.y9 = function() {
		aKt = aKs = aKr = null
	}, this.transform = function(q4) {
		for (var tH = document.createElement("div"), aKu = aKv(q4), aC = 0; aC < aKu.length; aC++) tH.appendChild(aKu[aC]);
		0 === q4.pb.id && (tH.vx143 = q4.pb, aKr.push(tH)), tH.style.margin = "0.6em 0.6em", q4.q5 && (tH.style.marginLeft = tH.style.marginRight = "inherit"), tH.style.font = "inherit";
		var aKw = 0 < q4.pb.id;
		return q4.aIs && (tH.style.fontWeight = "bold"), aKw && (tH.style.paddingLeft = "0.7em"), aKw && (tH.style.fontStyle = "italic"), tH.style.fontSize = q4.fontSize.toFixed(2) + "em", tH
	}, this.ps = function(tH) {
		var aC = aKr.indexOf(tH);
		0 <= aC && aKr.splice(aC, 1);
		for (var e = tH.firstChild; e; e = e.nextSibling) e.aKx && aKy(e)
	}, this.aHi = function(pd) {
		var h = aKs && aKs[pd];
		if (h)
			for (var aHe = aL2(bI.fB.a3G(pd, 5)), aC = h.length - 1; 0 <= aC; aC--) h[aC].parentNode ? aL3(h[aC], aHe) : h.splice(aC, 1)
	}, this.aL9 = function(aLA) {
		!aLA || 4 < aLA.id || (aLB(aLA.pd, aLA.pe), aLA.pf && aLB(aLA.target, aLA.pf))
	}, this.aLF = function(aLA) {
		if (aLA && (2 === aLA.id && 1 === aLA.aIo || 3 === aLA.id && 2 === aLA.aIo)) {
			var pd = 3 === aLA.id ? aLA.target : aLA.pd;
			if (!bq.pl.pm(pd)) {
				for (var aHp = (3 === aLA.id ? aLA.pf : aLA.pe) || "Redacted " + bI.fB.a3G(pd, 2), aHX = bq.pl.aHX, aC = aHX.length - 1; 0 <= aC; aC--) aLG(aHX[aC], aHp, pd);
				for (aC = aKq.length - 1; 0 <= aC; aC--) aLG(aKq[aC], aHp, pd);
				aKt[pd] && aLG(aKt[pd], aHp, pd), this.aHi(pd)
			}
		}
	}, this.aJ0 = function(pd) {
		for (var aLH = aKr, aC = aLH.length - 1; 0 <= aC; aC--) {
			var fn = aLH[aC];
			if (fn.vx143.pd === pd) {
				for (; fn.firstChild;) fn.firstChild.aKx && aKy(fn.firstChild), u.removeChild(fn, fn.firstChild);
				fn.vx143.s = "[Redacted Message]";
				for (var aKu = aKv(bq.ls.px(fn.vx143, bq.ls.py(fn.vx143))), g3 = 0; g3 < aKu.length; g3++) fn.appendChild(aKu[g3]);
				aLH.splice(aC, 1)
			}
		}
	}
}

function cY() {
	var aLI, aLJ, aLK;

	function aLP(aC) {
		var button = aZ.p6[aC],
			fr = button.fr,
			ft = button.ft,
			j = button.j,
			k = button.k,
			fxSmooth = (z7.fillStyle = button.aLN, __fx.utils.clipRounded(z7, fr, ft, j, k, .1 * k));
		z7.fillRect(fr, ft, j, k), aC === aLI && (z7.fillStyle = aLK, z7.fillRect(fr, ft, j, k)), fxSmooth && z7.restore(), z7.lineWidth = bf.a2x, z7.strokeStyle = aLJ, fxSmooth ? __fx.utils.strokeRounded(z7, fr, ft, j, k, bf.a2x, .1 * k) : z7
			.strokeRect(fr, ft, j, k),
			function(button) {
				var fr = button.fr,
					ft = button.ft,
					j = button.j,
					k = button.k;
				bD.ta.textAlign(z7, 1), bD.ta.textBaseline(z7, 1), z7.font = button.font, z7.fillStyle = aLJ, z7.fillText(button.aIr, Math.floor(fr + j / 2), Math.floor(ft + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.ft = 0, this.gap = 0, this.dv = function() {
		aLI = -1, aLJ = bE.qN, aLK = "rgba(255,255,255,0.16)", this.p6 = new Array(7), this.k = Math.floor((a1.a2.iu() ? .123 : .093) * i.iv), this.j = Math.floor((a1.a2.iu() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aLL = Math.floor(.26 * this.k),
			aLM = bD.ta.v9(1, aLL);
		this.p6[0] = {
			fr: 0,
			ft: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aIr: "Multiplayer",
			font: aLM,
			aLN: "rgba(22,88,22,0.8)",
			fontSize: aLL
		}, aLL = Math.floor(.18 * this.k), aLM = bD.ta.v9(1, aLL), this.p6[1] = {
			fr: 0,
			ft: 0,
			j: this.j - this.p6[0].j - this.gap,
			k: this.k,
			aIr: "Single Player",
			font: aLM,
			aLN: "rgba(22,88,88,0.8)",
			fontSize: aLL
		}, this.p6[2] = {
			fr: 0,
			ft: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aIr: "",
			font: this.p6[1].font,
			aLN: "rgba(100,0,0,0.8)",
			fontSize: this.p6[1].fontSize
		}, this.p6[3] = {
			fr: 0,
			ft: 0,
			j: this.j,
			k: this.k,
			aIr: "Back",
			font: this.p6[0].font,
			aLN: "rgba(0,0,0,0.8)",
			fontSize: this.p6[0].fontSize
		}, this.p6[4] = {
			fr: 0,
			ft: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aIr: "The game was updated!",
			font: this.p6[1].font,
			aLN: "rgba(100,0,0,0.8)",
			fontSize: this.p6[1].fontSize
		}, this.p6[5] = {
			fr: 0,
			ft: 0,
			j: this.p6[0].j,
			k: Math.floor(.8 * this.k),
			aIr: "Reload",
			font: this.p6[0].font,
			aLN: "rgba(0,100,0,0.8)",
			fontSize: this.p6[0].fontSize
		}, this.p6[6] = {
			fr: 0,
			ft: 0,
			j: this.p6[1].j,
			k: this.p6[5].k,
			aIr: "Back",
			font: this.p6[0].font,
			aLN: "rgba(0,0,0,0.8)",
			fontSize: this.p6[0].fontSize
		}, this.aDw()
	}, this.aDw = function() {
		this.ft = Math.floor(.54 * i.k), this.p6[0].fr = Math.floor(.5 * i.j - .5 * this.j), this.p6[1].fr = this.p6[0].fr + this.p6[0].j + this.gap, this.p6[2].fr = this.p6[3].fr = this.p6[0].fr, this.p6[4].fr = this.p6[5].fr = this.p6[0].fr,
			this.p6[6].fr = this.p6[1].fr, this.p6[0].ft = Math.floor(.54 * i.k), this.p6[1].ft = this.p6[0].ft, this.p6[2].ft = Math.floor((i.k - this.p6[2].k - this.p6[3].k - this.gap) / 2), this.p6[3].ft = this.p6[2].ft + this.p6[2].k + this
			.gap, this.p6[4].ft = Math.floor((i.k - this.p6[4].k - this.p6[5].k - this.gap) / 2), this.p6[5].ft = this.p6[6].ft = this.p6[4].ft + this.p6[4].k + this.gap
	}, this.aLO = function() {
		aLP(0), aLP(1)
	}, this.aLQ = function() {
		aLP(2), aLP(3)
	}, this.aLR = function() {
		aLP(4), aLP(5), aLP(6)
	}, this.a5W = function(fr, ft, nR) {
		var aC = -1;
		return 0 === ab.a59() ? aC = this.a60(fr, ft, 0, 2) : 3 === ab.a59() ? aC = this.a60(fr, ft, 3, 1) : 5 === ab.a59() && (aC = this.a60(fr, ft, 5, 2)), aLI !== aC && (aLI = aC, nR) && (bi.e2 = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a60 = function(fr, ft, aLS, size) {
		for (var aC = aLS; aC < aLS + size; aC++)
			if (fr >= this.p6[aC].fr && ft >= this.p6[aC].ft && fr <= this.p6[aC].fr + this.p6[aC].j && ft <= this.p6[aC].ft + this.p6[aC].k) return aC;
		return -1
	}
}

function cZ() {
	var aLU, aLV, aBW, aLW, aLX, aLY, aLZ, aLa, aLb, aBV, aLc, aLd, aLe, aLf = 1,
		aLh = 0;

	function aLk(aLl) {
		aLl ? aLe = (aLe + 1) % b1.z.aLm : (b1.z.close(aLe, 3280), aLf ? aLf = 0 : (aLe = (aLe + 1) % b1.z.aLm, b1.z.close(aLe, 3280))), aLd = bi.ek, aa.aLj = aLh, b1.z.aLn(aLe, 4, 1) && b1.aIH.aLo(aLe)
	}

	function aLp() {
		if (0 !== aLe) return 1 === aLe && __fx.customLobby.isActive() ? (p.a5L(3249), __fx.customLobby.setActive(!1)) : void aLk();
		p.a5L(3249)
	}

	function aLu(ft, aDe, wW) {
		var o6 = Math.floor((i.j - aLW) / 2) + aLZ,
			oJ = o6 + Math.floor(wW * (aLW - 2 * aLZ));
		z7.lineWidth = aDe, z7.beginPath(), z7.moveTo(o6, ft), z7.lineTo(oJ, ft), z7.lineTo(Math.floor(o6 - aLZ + wW * aLW), ft + aBW), z7.lineTo(o6 - aLZ, ft + aBW), z7.closePath()
	}
	this.fD = 1, this.aLi = 0, this.aLj = 0, this.dv = function() {
		bX.turnstile.f9(), ab.setState(6), aLU = 0, aLV = 1, aLa = "rgba(0,220,120,0.4)", aLb = "rgba(0,0,0,0.8)", this.resize(), bi.e2 = !0, aLf = 1, aLe = this.fD - 1, aLh = 0, aLk(1)
	}, this.resize = function() {
		aLW = Math.floor((a1.a2.iu() ? .5 : .25) * i.iv), aLX = aLW + 12, aBW = Math.floor(.125 * aLW), aLZ = 3 * aBW, aLY = Math.floor(.225 * aLW), aLc = Math.floor(.3 * aBW), aBV = bD.ta.v9(0, aLc)
	}, this.a5G = function(oX) {
		oX === aLe && aLp()
	}, this.hy = function(fr, ft) {
		var o6 = Math.floor((i.j - aLX) / 2),
			o7 = Math.floor(.5 * (i.k - bf.gap - aBW - aLY)) + aBW + bf.gap;
		return o6 < fr && fr < o6 + aLX && o7 < ft && ft < o7 + aLY && (this.a6B(), aZ.a5W(fr, ft, !1), !0)
	}, this.a6B = function() {
		b1.z.a5M(3260), __fx.customLobby.setActive(false), u.z.a0()
	}, this.ep = function() {
		6 === ab.a59() && (bi.ek > aLd + 12e3 && aLp(), 100 < (aLU += .07 * aLV * (aLU < 16 ? 5 + aLU : 84 < aLU ? 105 - aLU : 17)) ? (aLU = 100, aLV = -1) : aLU < 0 && (aLU = 0, aLV = 1), aLa = "rgba(0," + Math.floor(190 - 1.9 * aLU) + "," +
			Math.floor(120 - 1.2 * aLU) + "," + (.4 + .004 * aLU) + ")", aLb = "rgba(0," + Math.floor(1.9 * aLU) + "," + Math.floor(1.2 * aLU) + "," + (.8 - .004 * aLU) + ")", bi.e2 = !0)
	}, this.z6 = function() {
		var fr = Math.floor((i.j - aLX) / 2),
			ft = Math.floor(.5 * (i.k - bf.gap - aBW - aLY));
		! function(title, ft, aDe, wW) {
			z7.fillStyle = aLb, aLu(ft, aDe, 1), z7.fill(), z7.fillStyle = aLa, aLu(ft, aDe, wW), z7.fill(), z7.strokeStyle = bE.qN, __fx.settings.smoothUI && (z7.strokeStyle = "rgba(255, 255, 255, 0.3)", z7.lineJoin = "round"), aLu(ft, aDe, 1),
				z7.stroke(), z7.lineJoin = "miter",
				function(aLw, ft) {
					bD.ta.textAlign(z7, 1), bD.ta.textBaseline(z7, 1), z7.font = aBV, z7.fillStyle = bE.qN, z7.fillText(aLw, Math.floor(.5 * i.j), Math.floor(ft + .58 * aBW))
				}(title, ft)
		}(L(172), ft, 3, aLU / 100),
		function(fr, ft, j, k, aIr) {
			z7.fillStyle = bE.qI, z7.beginPath(), __fx.settings.smoothUI && z7.roundRect ? z7.roundRect(fr, ft, j, k, .1 * k) : z7.rect(fr, ft, j, k), z7.fill(), z7.lineWidth = 3, z7.strokeStyle = __fx.settings.smoothUI ?
				"rgba(255, 255, 255, 0.3)" : bE.qN, z7.stroke();
			var fk = Math.floor(.3 * k);
			bD.ta.textAlign(z7, 1), bD.ta.textBaseline(z7, 1), z7.font = bD.ta.v9(0, fk), z7.fillStyle = bE.qN, z7.fillText(aIr, Math.floor(fr + j / 2), Math.floor(ft + k / 2 + .1 * fk))
		}(fr, ft + aBW + bf.gap, aLX, aLY, L(49))
	}
}

function ca() {
	var a53 = 0;
	this.dv = function() {
		aZ.dv(), a53 = 0
	}, this.setState = function(aLx) {
		a53 = aLx
	}, this.a59 = function() {
		return a53
	}, this.aLy = function() {
		this.setState(8), u.y()
	}, this.a64 = function(e) {
		if (!bV.aLz) return !1;
		if (!(bi.ek < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aM0()) return !0;
				if ("Enter" === e.key) {
					if (0 === a53) return !0;
					if (7 === a53) return !0
				}
			}
			return !1
		}
	}, this.aM1 = function() {
		bc.resize()
	}, this.aM0 = function() {
		return !!bc.uZ()
	}, this.hy = function(fr, ft) {
		!bV.aLz || bc.hy(fr, ft) || 6 === a53 && aa.hy(fr, ft) || bb.hy(fr, ft) || aU.hy(fr, ft)
	}, this.a5W = function(fr, ft) {
		!aU.aDp && aZ.a5W(fr, ft, !0) || aU.a5W(fr, ft)
	}, this.click = function(fr, ft) {
		aU.a5v()
	}, this.a5Z = function(fr, ft, deltaY) {}, this.aM2 = function() {
		aZ.aDw(), bi.e2 = !0
	}, this.z6 = function() {
		8 !== a53 && 10 !== a53 && (z7.imageSmoothingEnabled = !0, this.a21(), 0 !== a53 && (aU.z6(), aP.z6(), this.aM3(), bb.z6()), 0 !== a53 && 6 === a53 && aa.z6(), bc.z6(), u.z6())
	}, this.a21 = function() {
		var aM5, aM4;
		if (__fx.makeMainMenuTransparent) z7.clearRect(0, 0, i.j, i.k);
		else bV.aLz ? (aM4 = i.j / bV.fv, aM5 = i.k / bV.fw, z7.setTransform(aM4 = aM5 < aM4 ? aM4 : aM5, 0, 0, aM4, Math.floor((i.j - aM4 * bV.fv) / 2), Math.floor((i.k - aM4 * bV.fw) / 2)), z7.drawImage(bV.a22, 0, 0), z7.setTransform(1, 0, 0,
			1, 0, 0), z7.fillStyle = bE.qI) : z7.fillStyle = bE.qE, z7.fillRect(0, 0, i.j, i.k)
	}, this.aM3 = function() {
		var ft = Math.floor(.3 * i.k),
			canvas = ac.xJ("territorial.io"),
			il = (il = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : il,
			fr = (z7.globalAlpha = .15, z7.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - il * canvas.width))),
			fr = Math.floor(fr / il),
			ft = Math.floor(ft - .5 * canvas.height * il),
			ft = Math.floor(ft / il);
		z7.setTransform(il, 0, 0, il, fr, ft), z7.drawImage(canvas, fr, ft), z7.setTransform(1, 0, 0, 1, 0, 0), z7.globalAlpha = 1, z7.imageSmoothingEnabled = !0
	}
}

function d0() {
	this.aId = 0;
	var aM7, aM8, aM9, aMA, aMB, aMC = this.aM6 = 0,
		aMD = [],
		aME = 0,
		aMF = 0;

	function aMJ() {
		aMA = aMB = null, aMC = 0, aMD = []
	}

	function aMH(aMK) {
		aMF = aMK ? 0 : 1
	}

	function aML() {
		if (bV.aJe.aMK(aMA.fQ)) return 1;
		(aMF || bi.ek > aME) && (aMJ(), ab.setState(0), b1.z.aMN(b1.z.a5H, 3290), bi.e2 = !0)
	}

	function aJk() {
		var aMO = aMD;
		bq.aHJ.aIg(aMA, aMB, aMC), aMJ();
		for (var aC = 0; aC < aMO.length; aC++) b1.aAo.aMP(aMO[aC][0], aMO[aC][1])
	}
	this.dv = function(aHJ, aIV, aIX) {
		u.y(), bq.y9(), ab.setState(10), aMA = aHJ, aMB = aIV, aMC = aIX, this.aId = aHJ.aId, this.aM6 = aIX, aM7 = 0, aM8 = bi.ek + 4500, aMD = [], aMF = 0, aME = bi.ek + bV.aJf.t8.aMG, bV.aJe.zn(aHJ.fQ, aMH), b1.z.a5H = aHJ.a5H, 1 === aIV
			.length ? (b1.z.close(b1.z.fI, 3281), aM9 = 0) : b1.z.fI === aHJ.a5H ? (console.log("direct pass"), aM9 = 0) : (console.log("delayed pass"), b1.z.close(b1.z.fI, 3247), aM9 = 2, b1.z.aLn(aHJ.a5H, 5, 2) && b1.rr.aMI()), z7
			.imageSmoothingEnabled = !0, ab.a21();
		aIX = ac.xJ("loading"), aIV = (a1.a2.iu() ? .396 : .25) * i.iv / aIX.width;
		z7.setTransform(aIV, 0, 0, aIV, Math.floor((i.j - aIV * aIX.width) / 2), Math.floor((i.k - aIV * aIX.height) / 2)), z7.imageSmoothingEnabled = !1, z7.drawImage(aIX, 0, 0), z7.setTransform(1, 0, 0, 1, 0, 0)
	}, this.nP = function() {
		0 < aM9 && bi.ek > aM8 && (aM9--, aM8 += 4500, 0 === bi.aMQ) && 0 === bi.l0() && b1.z.aLn(b1.z.a5H, 5, 2)
	}, this.aMR = function(oX, aD) {
		return !(10 !== ab.a59() || !aMA || (aML() ? aMD.length ? (aMD.push([oX, aD]), aJk(), 1) : (aJk(), 0) : (aMA && aMD.push([oX, aD]), 1)))
	}, this.aMS = function() {
		10 === ab.a59() && aMA && 2 <= ++aM7 && aML() && aJk()
	}
}

function cb() {
	var aMU, canvas, a4K, aMV;

	function aMb(eT, name, aMc, pV) {
		a4K[eT] = name, canvas[eT] = new Image, canvas[eT].onload = function() {
			! function(eT, aMc) {
				var a7s, a7t = null;
				7 === aMc ? a7s = bD.p2.a7v : 9 === aMc ? a7s = bD.p2.a7w : 8 === aMc ? (a7s = bD.p2.a7z, a7t = .1) : 3 === aMc ? (a7s = bD.p2.a7x, a7t = .06) : 5 === aMc ? a7s = bD.p2.a80 : 6 === aMc ? a7s = bD.p2.a7u : 4 === aMc && (a7s = bD.p2
					.a81);
				canvas[eT] = bD.p2.a7r(canvas[eT], a7s, a7t)
			}(eT, aMc), aMe()
		}, canvas[eT].onerror = function(e) {
			console.error("Error loading image at index", eT, "Error:", e), aMe()
		}, canvas[eT].src = "data:image/png;base64," + pV
	}

	function aMe() {
		aMU--, aMY()
	}

	function aMY() {
		0 === aMU && (aMU = -1, aMa(), bi.e2 = !0, canvas[7] = aMV, canvas[8] = aMV, canvas[9] = aMV, canvas[10] = aMV, 5 === u.vj) && u.a5D().aMg.resize()
	}

	function aMa() {
		aM.a9O(), bb.aHB([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.a2T = new a2U, ak.a2T.dv(), ax.dw()
	}
	this.dv = function() {
		if (void 0 === canvas) {
			aMU = 29, canvas = new Array(aMU), a4K = new Array(aMU), (aMV = document.createElement("canvas")).width = 1;
			for (var aC = aMU - (aMV.height = 1); 0 <= aC; aC--) canvas[aC] = aMV;
			aMa(), aMb(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aMb(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aMb(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMb(3, "orders", 6,
					"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"
					), aMb(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aMb(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aMb(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPNNtkZ1KD3338/9tlnn3jttdeyU4pOv3794uKLL3YAdz128MEHx2233ZadQR1guCeH4R4ACknjxo3j0EMPjZ122ik233zzaNWqVXZSwaqqqoo333wzXnjhhXjooYfioYceyk4CIP5vyOGXv/xlHHjggfGTn/wkGjRokJ1U53z22Wfx1FNPxa233urxC2qA4Z4chnsAAAAAAAAA6i/P+AIAAAAAAAAAQA0aPnx4fPDBB9kZVMOKK65Y70eWevbsGVtttVV2BgvMnz8/RowYkZ0BwFLo1KlT9OzZMzuDGjRu3LjYZpttjPYk+d3vfhcHHXRQfP7559kpLKU+ffpkJwAAUI9VVFTEKaecEk899VRMmTIlrrnmmthtt92M9ixnpaWl0blz5+jbt288+OCD8fHHH8ddd90Vffr0cYg4QII2bdrEJZdcEh9++GFcd9118bOf/cxozw9YddVVY5999okHH3wwxo8fH8OGDYtmzZplZwEAAAAAAAAAUCRKImJ+dgQAAAAAAABATfr3v/8da665ZnZGUfvggw9i7bXXzs4ASHPSSSfFxRdfnJ1BNUyZMiXWXHPNmDNnTnbKUvnTn/4Uu+66a3YGCzz11FPRu3fv7AwAlsLll18exx57bHYGNWTMmDGx/fbbx/Tp07NTil7Pnj3jzjvvjLZt22ansIRmzpwZq622WsyaNSs7hWQvvfRSbLrpptkZRadfv35x3XXXZWeQ7Je//GWcfPLJ2RlF5+OPP44ddtghOwPqpbKysujXr1/svvvu8ZOf/CSaNGmSncRCJk+eHE8//XTcdttt8dBDD2XnQL3g+7HadeKJJ8aTTz6ZnVEjunTpEoMHD45ddtklmjdvnp1Tb02fPj1GjRoVl156aYwdOzY7B+qVmTNnRtOmTbMzio6xTAAAAAAAAID6q0F2AAAAAAAAAAAAFJpLLrkkjjjiiOjcuXN2CovRsmXLGDhwYAwbNiw7ZYl16dIltt9+++wMFpg3b14MHTo0OwOApbT77rtnJ1BDxowZE9tuu23MmDEjO4WIeP7552OnnXaKUaNGxRprrJGdwxJo3rx5HHXUUXHJJZdkpwAUrZYtW/r9YoJmzZplJ0C9s+OOO8Zhhx0W2267bayyyirZOfyAVq1axb777hv77rtvfPjhhzFq1Kj43e9+F+PGjctOgzrL92O1q6KiIjthmW2yySYxZMiQ2HHHHaNRo0bZOfVeRUVFHHTQQbHffvvFI488EiNGjIgxY8ZkZwEAAAAAAAAAUIBKswMAAAAAAAAAAKAQXXTRRdkJVNOhhx4apaX176VUAwcOdOBTHXL//ffHCy+8kJ0BwFI48MADDYoUCKM9ddMbb7wRu+66a3z00UfZKSyh3XbbLTsBAIA6qqKiIoYPHx7jxo2LP//5z7Hvvvsa7alH2rdvH8ccc0yMHTs2/va3v0X//v3r5fMkAHVFp06dYuTIkfG3v/0tdtttN8/h1rCGDRvGbrvtFi+88EL8+c9/jp49e2YnAQAAAAAAAABQYLyKEgAAAAAAAAAAloObbropXnnllewMqqF9+/Zx/PHHZ2cskXbt2sXuu++encECX375ZQwaNCg7A4Cl1KdPn+wEasC4ceNit912M9pTR/3/4z0ff/xxdgpLYLPNNouWLVtmZwAAUIdsscUWceedd8aHH34YQ4cOjc6dO2cnsQwaNGgQW2yxRVxxxRXx4YcfxpVXXhkdOnTIzgKoN8rLy+Oqq66KsWPHxt577x0NGzbMTipoDRo0iB133DGeeuqpuPfeez1mAQAAAAAAAABQYxpkBwAAAAAAAAAAQKEaMWJEPPDAA1FSUpKdwmIcccQRcemll2ZnVNvQoUOjadOm2RkscNNNN8X777+fnQHAUqioqIitt946O4NlNGHChNhtt91i0qRJ2SkswhtvvBH77rtv/OlPf4oWLVpk51ANjRs3jiOPPDLOPffc7BQAAJIdeOCBcfTRR8cWW2wRZWVl2TksB23bto1jjjkmfvnLX8Zjjz0Wv/3tb+O5557LzgKos/r16xeDBw+O1VdfPTul6JSVlcWee+4ZvXv3jhtuuCEGDBgQlZWV2VkUqLXWWivat2+fnbHESktLsxOK0lZbbZWdUGs++eSTePfdd7MzAAAAAAAAAGqM4R4AAAAAAAAAAFhOHnrooXjqqadim222yU5hMTbYYIM46KCD4tZbb81OWazy8vLYZ599sjNYYNKkSTFo0KDsDACW0nHHHWcMr56bMmVK7L333jFhwoTsFKrhxRdfjIMOOihGjhwZK664YnYO1bDddtsZ7gEAKGL9+/ePo48+Orp06ZKdQi1p3Lhx7L777vHzn/88Xnjhhbj88svjnnvuyc4CqDO6d+8el156afTs2TM7peiVl5fHySefHL/4xS9ixIgR8fvf/z47iQJ06qmnxq9+9avsDOqJp59+Ojuh1tx2221x8MEHZ2cAAAAAAAAA1JjS7AAAAAAAAAAAAChkw4cPj8rKyuwMqqF///7ZCdUydOjQqKioyM5ggSuuuCJmzZqVnQHAUtpjjz2yE1gGc+bMiaOOOirGjh2bncISeOyxx+LYY4+NefPmZadQDZtuuqmfPwAAitBJJ50U77zzTlxxxRVGe4pUaWlp9OzZM0aOHBkvvfRSHHDAAdlJAOnOOuusePrpp4321DFrrrlmXH/99fHII49Ehw4dsnMAAAAAAAAAAKiHDPcAAAAAAAAAAMBy9Nxzz8XDDz+cnUE1bLrpprHTTjtlZyxSWVlZHHjggdkZLPDWW2/Feeedl50BwFLaeOONY6ONNsrOYBmceeaZ8eCDD2ZnsBRuueUW30fVE02aNIlDDz00OwMAgFpywgknxFtvvRUXX3xxdOzYMTuHOmLTTTeNW2+9NV5++eXYa6+9snMAal23bt3ipZdeiiFDhkTz5s2zc/gBO+ywQ7zyyitx/PHHZ6cAAAAAAAAAAFDPGO4BAAAAAAAAAIDlbMiQITF37tzsDBajpKQkTjrppOyMRRo4cGC0adMmO4MFzj333OwEAJbB4YcfHiUlJdkZLKWbb745LrzwwuwMlsGZZ54Zt99+e3YG1VDXB04BAFh2BxxwQPzzn/+MSy65JNZZZ53sHOqoTTbZJO6+++549tlno3fv3tk5ALXiuOOOi6eeeio23XTT7BSqYeWVV45LL700Ro0aFS1btszOAQAAAAAAAACgnjDcAwAAAAAAAAAAy9m4cePinnvuyc6gGnr16hWbbbZZdsYPOvzww7MTWOCFF16IW265JTsDgGWwww47ZCewlF588cU44ogjsjOoAYccckiMHTs2O4PF2GSTTaK01NtPAAAKUa9eveK5556LW2+9NX70ox9l51APlJSURM+ePePRRx+N++67L9Zdd93sJIDlonHjxjFy5Mi47LLLoqKiIjuHJbTzzjvHmDFj4uc//3l2CgAAAAAAAAAA9YB3TgEAAAAAAAAAQC0YOHBgfPnll9kZLEZZWVmcdtpp2Rnf67jjjou11147O4OIqKysjKFDh2ZnALAMevXqFeuss052Bkth8uTJceCBB0ZVVVV2CjWgqqoqDjrooPjss8+yU1iEVVZZJX7xi19kZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aMb(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMb(8,
					"googleplay", 3,
					"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"
					), aMb(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aMb(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMb(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMb(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMb(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMb(14, "bestPlayer", 5,
					"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"
					), aMb(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aMb(16, "apple", 3,
					"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"
					), aMb(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aMb(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aMb(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aMb(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aMb(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aMb(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					), aMb(23, "clock", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAZGhkoKic1NzRYWleAgoCjpaIA/wA4/zvJzMl5/3nk5+Sq/6rI/8fm/+b///8vfxrjAAAC1UlEQVRIx4WVMYwSQRSGh+O4hFBIe901VjZUlxgb2gvF0VhcLLhGGwrKI4TDksYoiUpCLCgxxgjqxeSyxZZngVIehYYSYzRcjIfurfB882be7Oyy6CvYYfbbN/9782aeOPqPifDfF8PPw+frgZczkLZ8Hw9UPwLbt2YMUJ1AYH9igBHO++27t+89k8TXFeAVzrbzQtr1Lo7HEaCOc0+EtmQZlfZCgBTwWL5Lne7g70YF4CoEPAQ4oY8zcCgfmy5AzwKqM/CyBFyDFj232YVgB4ciBIiKdqGAGVyKCLAF8MUAGELRANoVulgYoA9zjjDt53kEcKYBlNhiQGR5kHBpDQkcgy9ibJ/WELTCzzgAZTYVMDPCAtvDKRfOCaiBn42+T7kouwS/CTgOYjBWkYnJyLJA4BG8jr5PU2a3YEnAiCWkHJ2uZJecbshsC6kxz3HpaArgE9rFVAmpUTsugZ/Te32ilUwRqIOngRsAbxTo5bTLXwg0zE7il55KkM58BmtCAiaPJRJfMWGnMU6BUV6Y9ABc5raDvVdAHwZWfgBYIS220EDZOeX9Aa3wpuMUDbAJXJPyyLR4dBECigbY4dEgWOKg0xYGUFu72+nkA8BW6dl7tqAwfwRTGQhi4DDvm0zKSi2/y9m4yuRcrLF9LCl7s2LqakrbrQNbtS5WLRYMxBQ12QZQwRxN7DgjB4Nqsm+HYVtGHi0EGutUluQdIkKHP2wuBqGP3mCNhDMFjOJTdUueGwIa1hrJvJWFKw3UrB0q+NYK53wFTfSJoewWTQzLJgO4xtsokNIXJQG4BrswQEndYfqe7BsVDKCChXXT1k3VVtRRT2BxTu3LfMTHoaDSfgeURAOgCphLIkHYHqgYrYYiG47HSTqwupawW5r/VH6/K5sWN5ygZ9WpZ/qO41LbG692vQdWVwze241V+aDWO45vzTXder/31jb32vDDp2HvX91/1f4C6yMGMx9Ja7MAAAAASUVORK5CYII="
					), aMb(24, "userIcon", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAwAODg4sLyw2ODVCREFgYl+Bg4CkpqMA/wDMz8t5/3il/6Tk5+TD/8Th/+P///8NWuTPAAACa0lEQVRIx92Vz2sTQRTHR6GI4GU0SQkEqncvXoSAl9wFm5MXIe1fkCpIEYRcQ0L8ASp42mvwkmtP1taKCIW5loLstVjq4o/YrN3k68y8t7OzWyTise8S3pvPzPu+H2xEd46JswW8ycd7wzzQj4B97zgEDn2gp8+BPQeExj3xgE0TwCw9f2JdbDigD7y6dlfhgIEIH5s3A3rCAiN8kFLWMe32Ph/tdwc41m4FcECUNHREBuiblw9HuG/cthVlgB7GJiDvgC2x7iImDAzw3Eaq+uzTawX8su4VK0JY0at8BS91boXv1pVBCjxF0wZqdLVuNRpgWgA69NJlhUYeSFOomG62qQqpTvIiK/gpOdWW+SnhNwN9KrPKxWix38ifZI264QMVAtp2GIJmtZMHTDVlNXOtHiB5IMtBlgIvZKljJfC49fx3dQd/SNdR4w4d0AtpBtygFo/kSzfTgF1t4IYFSKznRA6AhyT7PUmwDasEblih1kS5k6bt+A4Vo8wTwvSJc5eBeLX0GNxpec/UIczCcXmddGHiBl+YWSCiBZK3kWq1K2pvDDWQLlxJIV4R2hYC0mKmdqCBdOFuIVkW1hZUKlOLEG5dAjwTbHXwZqipBjZjHkCcnovzilcomGkgpCKvY9sBokUro1ungWjMipcz4AK3poWh6NJ26IXMznUOKn0pA8oYe4Do0GJ7wCLe+UCL2l3LgCrWfOASNccDalgR5zLg4ilgyS/ClLF1Crg6DxB/BY7XtXWKAEcNwFYA2P4FePvVWFQEZjZ85L7VoyIwKXzMR1j37ZH7qGZAwSbzgOILgyKwcTb/Fv8b+ANlD8k4eGaP9QAAAABJRU5ErkJggg=="
					), aMb(25, "battleRoyale", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAmMCMAcQBbXVoArAB8fnuHioaQko+cnpunqqYA/gC2uLXAwr/N0M3c39v///9qRmqPAAADUElEQVRIx7WVT0gUURjAvzezYtnlgVlZBA/xNKcR6R/rxrjsaU+Kl4SUvHQ0oVMEUUgdLfEY5jrsaa5L0MUKpEN0EBFPQnsQXcVwToGL7rzen++9mV2KLvVO8775ve99/x9Ef1nwX4HSwKAEAoCL5d/9Fj+gLADopeAMdiLVIoB7c84TAFn+MA7gtBNFBuTG0/izAlb40ashAJIi1QGA3iffOX8jAZjlPPkxry7ExcC9t8bFGpMAK8jP5OsEzeH/EPrWYiX0JRD0c7WO543LgftRi5pUelHpjvX2AFVUIa8FfA9kHMIuBJIZRwEVsoDArqMAUrcHPGXiZTzB13MSqMIK7lu+o0ycxj1fVEDE7hrBuvSUuUZjMtajgesGaPo9QuGI2Z75ZQUEF4wkeUGiivvJ8qCBSreR8H3q0Sux3Tm6HiquFbXGgMxafBeBkGzw1Myuut1sIhDBIys79Qv2O3meM8BIKlyyJvJD30MgcN9Z6WTKzqj8g4rdbWNm85kFtnXuVIqZNf29dehsSJcY6ASj7a1CagzkMn1RxBLY3UgtdNoah2k78xkLvTYghFvi9p8L1kLIdbQeI1OcP4xtvGyfGKAKffWT6dRCr715S6VoFfJLJg0H1BHNU06BUPSvuMREvDUuFDBwUoC5QhQQU5tfhkA43quv0aGeOvAdWylHhX06SN1vOhI6WfWkBgRNTF7GLR+EUzWbLHZNFqiplIaoji0QvdH0DRDI3trGNLRkwk+HF3gGCGWvJahgXaYjeWu6RHtB+22WD20XtVIjo1FiCi2ZN76aTsV6GLGNYYoreUAyoTb9KGJIsOga1MsCOCNq4Iikqc8t8LK5mMLmdaKA3DcZz+QCg7RPr0ZVarVlc2EGgkgz3OFZFZBRIC8ur9oJpVVAqiCWp3KsL1N3GkAFp9K4RZATKllOVcghphXU5GhpUBmRhnZV6FNj0MUdiIw06TkVLjyjgfOoD4R5NRD4NmArnmigGy2qwqUdH6Bw5DtFreIkc4U0aJQMg8fcx7KmlYo9PWnJa+uSKPUQRFOg65t60kI+xqCoZmGqkKSKZE5P2sCd3DHNLqky5u+4RnswkmJ5na8icycoTlqhWb6gHSvEU39+eUul8r953H8BBeY6pZneQOEAAAAASUVORK5CYII="
					), aMb(26, "oneVsOne", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAACNwBHSUYAaQB+gH0AugCIioeSlZKanZkA3ACmqaUA/wC2uLXGycXa3Nn///+iBll7AAABfUlEQVRIx+2UPU7DUAyA3aZFCBWUCDF06wmga9WFG5CoYkA9BNyAK5CBKYfoEGWIsvQGcIOiDkxISAhRVEGN7ffTvrQRGwNKhhf5e1/0bMcJFL9cUAv/TkgB4MTdMEgJfYoaiSMYJEIOfI039y0SIYYJrnqOYBELud98LQlrxEIEHSwJawQcwHVJ2EDA9ewhRyNOa5D5kp5CIsTQfJCICwMvln2NRLhrTlAJp4ifjZDWhUFK6KAWDhC/wT9DnBvkClGLV7hFfNwSXiRJKh3PYUaLQUZY7HN0yQ9PpUEGaeEZJLri45/onCUYpMsEHfUPKT/K9B0sYiEDL1JRSN35OCLJs0hafZ/EKkrp/C9qw03XIvO6VZRRBSt6B72hRa6Q+xeIM2rWuEIouNmUBk/abiGUDs69okqIWyxM25UCl0GNHlYKGU2qHq3dQsHNXsoHUiGE1Ow3r9gSUhkzLo7vbQeJkMk0Gtx1kPo2R0EQDGTeg+A4cVD9l6uFPxZ+APLvRdqXArbWAAAAAElFTkSuQmCC"
					), aMb(27, "zombie", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAANwAwMi8AdwBWWFUAqgB+gH2Ji4iTlZIA1ACfop6rraoA/wC/wr/JzMn///+1mI6XAAACOElEQVRIx9WVv24TQRDGP3w2xAGcSIguhZ8gPskVUgqXVMQUFEguXEYUEEX0+A1iihRILvIGoaTCiSwXJ6VwSZcI0UXCkRU5UaLccjs7++92eYB81Xrv59nZ2W92cerpoP3umz8DZ5y11yH16j9AloL1YhQD5PfXf+f5xWcgGUWAFNWxIN10kITAV1TngpV3sFEGps53Ie6a6JWALo6Eo2uzCAMTbApPM4w8YFgRJTXrHoC1MnDJIcArHJWBnDeigO4TEaifWCBDKwSu1BoEnGAcAvfYMsCwKiLq1A2QNmLA98QA69sxYAENTMNNqnL3GJhAREVZSuBY5Xi7c8Y12lGbam5ogMq0BCpzdkPlC23jGQPDp/SzMGNDJQdQzH5dAw0VoAihSewXg0MNdCVwDp7PaUBTNQ3Is+7TfItD4bE88YSBVAJNml9TKajFLCDjwQdkaWY1NwcDXJoIA28X0DnYJcw2j1dMDp+KvjJJmkKdyLIMaH7ubtOUmg5rof8nduVo2z2siXRcrqcLM6oUrsmUIM/KD785gBB7wBvPMGy5Xx+0EX58LFnOMe3dOGbaCUzrL1ox22e0Jmmwokd/nMYprp997UPtzxskXvNyFksqprLNltv+b7FK0+dsO3GIl/4VlIL/x7HKVxD3xr0s55npiRAoNc3DBJYQs+eCavkwgal0nQXy4MXJ5FVogVv9nthHTfaGBa4QvHpp9acFLjpJAAzhqRYA9mGWetSLvN0HbaP38dc/qn80XpfaOx2MlAAAAABJRU5ErkJggg=="
					), aMb(28, "noFullSending", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEX///8A/wD4+Pjp6ekl6yXExMSZmZkAwAAygzJZWVkgTCAXNBcQHxAIDggCBAIAAACV9pxNAAAC1ElEQVR42u2VzWsaQRTAh13Wu6cBU9q9VPC2p8Cm/8ReGkibkiWSQyGJ7ClQov4Peio0LiH00EIqEkJomkZ6EAmx9VSltenSi2LaklNcVo3T92bW1XwUL6WnzOmN7+eb970kPOGQW+AfAmt/U64JIMI2b9ZzBQB3lyrWTXp6PPuDA2kj5t4EpDOKK55okpXymm+EBsbWa2TVEk4ms3KeDVBDi4z1OPLM6Wp6axjmeyN6xj4IPWN9IOjZwFQcdwhMeer8fhlM9eIqmbbhj/mLkpR77hR8IFXZlXP1MK3GCZzohUV7be1xicx1BUDP4htmqBGOdFQEpEQheWKGvmhEObQQoEVPg+uDejJL+NFbxR15wwQpUQCAVhkoZkqSXYTf5kAO9cGnl8uLgNYBuMNqYFmyM8pHg8i2pxLlmxHz7rNzcMcFIFnT0O7MT02vEdn5bZCVrHxgRAfgkdJFYFE83KiBRunmDR0FEmsdAdAbA8qprHIw66aXjg29ife3GpFfWByQ0Z9ypG/E2m4ql1GqW3DfQ2CDA9KjDALUa5InbvqztGrjfe+1RiQOxJ8yAZzPb8m5tjZTWsB7IW8QKWdhmINDH4DshDCFlwHasNZ9gITaqpQziQC2/SewNwTQCYAs+vDKd3IMGD6R2BoPcwS0l30nE5DlWP1IE4kaAQ0I8+Q7hHnYgTL0O+pV4JcRa9oeJOoT6pxhsQIAU23oWQVS3YMAeLlbYwAvFq8KCDuidRbKIwDL7fHCExvLjYJsbwYANkzF4RaiDBsG21PvWwGALbeZ6sZVadruRdrq/C6R5pzWcC4Y86Bpob1xcFghnNyRbRAG/uiB4gLbHkyhvo6zZoYcxvaCDZOEwREj+W6frxMKg3NqBSuIwpvly7O/DqM3AmB4T69uhzem0hgCMP7b13YM/arpdQFQWCCF6wtmKlggE1fQvYcTltjENThxkd5+cf4P8Acm8L1xck3dqAAAAABJRU5ErkJggg=="
					)
		}
	}, this.get = function(eT) {
		return canvas[eT]
	}, this.xJ = function(name) {
		for (var aC = a4K.length - 1; 0 <= aC; aC--)
			if (a4K[aC] === name) return canvas[aC];
		return aMV
	}, this.w9 = function() {
		return aMU <= 0
	}, this.aMX = function() {
		aMU = 0, aMY()
	}
}

function cc() {
	var aMh = [
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
		aMi = [
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
	this.aMj = null, this.aMk = null, this.aMl = null, this.aMm = null, this.aMn = null, this.aMo = null, this.aMp = null, this.aMq = null, this.aMr = null, this.aMs = null;

	function aMz(kJ, oO) {
		for (var aMj = ad.aMj, aMk = ad.aMk, aMl = ad.aMl, aC = kJ; aC < oO; aC++) aMj[aC] = bO.gB(64 * az.random(), az.value(100)) << 2, aMk[aC] = bO.gB(64 * az.random(), az.value(100)) << 2, aMl[aC] = bO.gB(64 * az.random(), az.value(100)) << 2
	}

	function aMy(kJ, oO) {
		for (var colorsData = aE.data.colorsData, aMj = ad.aMj, aMk = ad.aMk, aMl = ad.aMl, aC = kJ; aC < oO; aC++) {
			var gC = colorsData[aC];
			aMj[aC] = 4 * (gC >> 12), aMk[aC] = 4 * (gC >> 6 & 63), aMl[aC] = 4 * (63 & gC)
		}
	}

	function aNH(fO, aNJ) {
		aGX[fO] = 0, aGX[fO + 1] = 0, aGX[fO + 2] = aNJ, aGX[fO + 3] = 0, aNK(fO)
	}

	function aNK(fO) {
		var fr;
		be.oW || (fr = ad.a23(fO), fO = ad.a24(fO), be.oW = fr >= bd.aGW[0] && fr <= bd.aGW[2] && fO >= bd.aGW[1] && fO <= bd.aGW[3])
	}
	this.fm = new Int32Array(4), this.aMw = new Int32Array(8), this.dw = function() {
		var fm = this.fm,
			fm = (fm[0] = -4 * bV.fv, fm[1] = 4, fm[2] = -fm[0], fm[3] = -fm[1], this.aMw);
		fm[0] = -4 * bV.fv - 4, fm[1] = -4 * bV.fv, fm[2] = -4 * bV.fv + 4, fm[3] = -4, fm[4] = 4, fm[5] = 4 * bV.fv - 4, fm[6] = 4 * bV.fv, fm[7] = 4 * bV.fv + 4
	}, this.dv = function() {
		if (this.aMj ? (this.aMj.fill(0), this.aMk.fill(0), this.aMl.fill(0), this.aMm.fill(0), this.aMn.fill(0), this.aMo.fill(0), this.aMp.fill(0), this.aMq.fill(0), this.aMr.fill(0), this.aMs.fill(0), this.aCo.fill(0)) : (this.aMj =
				new Uint8Array(aE.fh), this.aMk = new Uint8Array(aE.fh), this.aMl = new Uint8Array(aE.fh), this.aMm = new Uint8Array(aE.fh), this.aMn = new Uint8Array(aE.fh), this.aMo = new Uint8Array(aE.fh), this.aMp = new Uint8Array(aE.fh),
				this.aMq = new Uint8Array(aE.fh), this.aMr = new Uint8Array(aE.fh), this.aMs = new Uint8Array(aE.fh), this.aCo = new Uint8Array(aE.fh)), aE.ic)
			for (var aF3 = bj.aF3, aMj = ad.aMj, aMk = ad.aMk, aMl = ad.aMl, aC = aE.fh - 1; 0 <= aC; aC--) {
				var eu = aF3[aC],
					ly = bO.gB((aMi[eu][3] + 1) * az.random(), az.value(100));
				aMj[aC] = aMh[eu][0] + ly * aMi[eu][0], aMk[aC] = aMh[eu][1] + ly * aMi[eu][1], aMl[aC] = aMh[eu][2] + ly * aMi[eu][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aMy(0, aE.l3), aMz(aE.l3, aE.fh)) : aMz(0, aE.fh) : aMy(0, aE.fh);
		! function() {
			var aC, fn, aMj = ad.aMj,
				aMk = ad.aMk,
				aMl = ad.aMl;
			for (aC = aE.fh - 1; 0 <= aC; aC--) fn = bO.gB(aMj[aC] + aMk[aC] + aMl[aC], 3), aMj[aC] += aN5(fn - aMj[aC], 2), aMk[aC] += aN5(fn - aMk[aC], 2), aMl[aC] += aN5(fn - aMl[aC], 2), aMj[aC] -= aMj[aC] % 4, aMk[aC] -= aMk[aC] % 4, aMl[
				aC] -= aMl[aC] % 4
		}(),
		function() {
			for (var fk = aE.fh, aMj = ad.aMj, aMk = ad.aMk, aMl = ad.aMl, aMm = ad.aMm, aC = 0; aC < fk; aC++) aMj[aC] += aC >> 7, aMk[aC] += aC >> 5 & 3, aMl[aC] += aC >> 3 & 3, aMm[aC] = 7 & aC
		}(), this.aN2(),
			function() {
				for (var fk = aE.fh, aMn = ad.aMn, aMo = ad.aMo, aMp = ad.aMp, aMj = ad.aMj, aMk = ad.aMk, aMl = ad.aMl, aC = 0; aC < fk; aC++) {
					var eS = aMj[aC],
						w5 = aMk[aC],
						g4 = aMl[aC];
					60 <= eS + w5 + g4 ? (aMn[aC] = Math.max(eS - 40, 3 & eS), aMo[aC] = Math.max(w5 - 40, 3 & w5), aMp[aC] = Math.max(g4 - 40, 3 & g4)) : (aMn[aC] = eS + 40, aMo[aC] = w5 + 40, aMp[aC] = g4 + 40)
				}
			}(),
			function() {
				for (var fk = aE.fh, aMq = ad.aMq, aMr = ad.aMr, aMs = ad.aMs, aMj = ad.aMj, aMk = ad.aMk, aMl = ad.aMl, aC = 0; aC < fk; aC++) {
					var eS = aMj[aC],
						w5 = aMk[aC],
						g4 = aMl[aC];
					688 <= eS + w5 + g4 ? (aMq[aC] = eS - 88, aMr[aC] = w5 - 88, aMs[aC] = g4 - 88) : (aMq[aC] = Math.min(eS + 88, 252 + (3 & eS)), aMr[aC] = Math.min(w5 + 88, 252 + (3 & w5)), aMs[aC] = Math.min(g4 + 88, 252 + (3 & g4)))
				}
			}()
	}, this.aBe = function(player) {
		var h = bR.gJ;
		return h[0] = this.aMj[player], h[1] = this.aMk[player], h[2] = this.aMl[player], h
	}, this.aN2 = function() {
		for (var aC = aE.fh - 1; 0 <= aC; aC--) this.aCo[aC] = this.aMj[aC] + this.aMk[aC] + this.aMl[aC] < 280 ? 0 : 1
	}, this.a23 = function(fO) {
		return bO.gB(fO, 4) % bV.fv
	}, this.a24 = function(fO) {
		return bO.gB(fO, 4 * bV.fv)
	}, this.a1a = function(fr, ft) {
		return Math.floor(4 * (ft * bV.fv + fr))
	}, this.a1q = function(fO) {
		var fm = this.fm;
		return this.aN6(fO + fm[0]) || this.aN6(fO + fm[1]) || this.aN6(fO + fm[2]) || this.aN6(fO + fm[3])
	}, this.g8 = function(fO) {
		var fm = this.fm;
		return this.fp(fO + fm[0]) || this.fp(fO + fm[1]) || this.fp(fO + fm[2]) || this.fp(fO + fm[3])
	}, this.a1o = function(fO, player) {
		var fm = this.fm;
		return this.aN7(fO + fm[0], player) || this.aN7(fO + fm[1], player) || this.aN7(fO + fm[2], player) || this.aN7(fO + fm[3], player)
	}, this.aN8 = function(aC, aN9, aNA, aNB) {
		this.aMj[aC] = aN9 >> 16, this.aMk[aC] = aN9 >> 8 & 255, this.aMl[aC] = 255 & aN9, this.aMn[aC] = aNA >> 16, this.aMo[aC] = aNA >> 8 & 255, this.aMp[aC] = 255 & aNA, this.aMq[aC] = aNB >> 16, this.aMr[aC] = aNB >> 8 & 255, this.aMs[aC] =
			255 & aNB
	}, this.aNC = function(aC) {
		return [(this.aMj[aC] << 16) + (this.aMk[aC] << 8) + this.aMl[aC], (this.aMn[aC] << 16) + (this.aMo[aC] << 8) + this.aMp[aC], (this.aMq[aC] << 16) + (this.aMr[aC] << 8) + this.aMs[aC]]
	}, this.hK = function(fO) {
		return 208 <= aGX[fO + 3]
	}, this.a1w = function(player, fO) {
		return this.hK(fO) && this.a1z(player, fO)
	}, this.a1z = function(player, fO) {
		return player === this.fc(fO)
	}, this.aND = function(fO) {
		return 208 <= aGX[fO + 3] && aGX[fO + 3] < 224
	}, this.kE = function(fO) {
		return 224 <= aGX[fO + 3] && aGX[fO + 3] < 248
	}, this.aNE = function(fO) {
		return 248 <= aGX[fO + 3]
	}, this.a1p = function(fO) {
		for (var fm = this.fm, aC = 3; 0 <= aC; aC--)
			if (this.iz(fO + fm[aC])) return !0;
		return !1
	}, this.ff = function(fO) {
		return this.hK(fO) || this.fb(fO)
	}, this.iz = function(fO) {
		return 0 === aGX[fO + 3] && 2 === aGX[fO + 2]
	}, this.fb = function(fO) {
		return 0 === aGX[fO + 3] && 1 === aGX[fO + 2]
	}, this.aNF = function(fO) {
		return 0 === aGX[fO + 3] && 3 === aGX[fO + 2]
	}, this.fp = function(fO) {
		return 0 === aGX[fO + 3] && 5 === aGX[fO + 2]
	}, this.aN6 = function(fO) {
		return 0 === aGX[fO + 3] && 3 <= aGX[fO + 2]
	}, this.fS = function(fO) {
		return (aGX[fO] >> 1 << 8) + aGX[fO + 1]
	}, this.aNG = function(fO) {
		return 1 & aGX[fO]
	}, this.aN7 = function(fO, player) {
		return this.fb(fO) || this.hK(fO) && player !== this.fc(fO)
	}, this.fc = function(fO) {
		return ((3 & aGX[fO]) << 7) + ((3 & aGX[fO + 1]) << 5) + ((3 & aGX[fO + 2]) << 3) + (7 & aGX[fO + 3])
	}, this.a1x = function(fO) {
		aNH(fO, 1)
	}, this.aNI = function(fO) {
		aNH(fO, 2)
	}, this.a1b = function(fO, player) {
		aGX[fO] = this.aMj[player], aGX[fO + 1] = this.aMk[player], aGX[fO + 2] = this.aMl[player], aGX[fO + 3] = 208 + this.aMm[player], aNK(fO)
	}, this.hF = function(fO, player) {
		aGX[fO] = this.aMn[player], aGX[fO + 1] = this.aMo[player], aGX[fO + 2] = this.aMp[player], aGX[fO + 3] = 224 + this.aMm[player], aNK(fO)
	}, this.kF = function(fO, player) {
		aGX[fO] = this.aMq[player], aGX[fO + 1] = this.aMr[player], aGX[fO + 2] = this.aMs[player], aGX[fO + 3] = 248 + this.aMm[player], aNK(fO)
	}
}

function d1() {
	var aNL = 0,
		aNM = new Uint16Array(64);

	function fG(a9S) {
		aNL -= 2;
		for (var aC = a9S; aC < aNL; aC += 2) aNM[aC] = aNM[aC + 2], aNM[aC + 1] = aNM[aC + 3]
	}
	this.dv = function() {
		aNL = 0
	}, this.ep = function() {
		var aC, kC, jL;
		if (0 !== aNL)
			if (0 === ah.nf[aE.fU]) aNL = 0;
			else if (0 === ae.gr(aE.fU)) aNL = 0;
		else
			for (aC = aNL - 2; 0 <= aC; aC -= 2)(kC = aNM[aC]) < aE.fh && 0 === ah.nf[kC] ? fG(aC) : (jL = aNM[aC + 1], (kC >= aE.fh && bw.aNO(aE.fU) || kC < aE.fh && bw.aNP(aE.fU, kC)) && (bB.iB.iI(jL, kC), fG(aC)))
	}, this.iJ = function(kC, jL) {
		! function(kC, jL) {
			for (var aC = 0; aC < aNL; aC += 2)
				if (aNM[aC] === kC) return aNM[aC + 1] = Math.min(aNM[aC + 1] + jL, 1023), 1;
			return
		}(kC, jL) && 64 !== aNL && (aNM[aNL] = kC, aNM[aNL + 1] = jL, aNL += 2)
	}
}

function cd() {
	function aNX(player) {
		var el;
		bD.h6.a7V(player) && (el = ah.hm[player] - ah.a7a[player] + ae.aNZ(player), bg.hA(player, Math.abs(el), el < 0 ? 18 : 12)), ah.hm[player] = 0, ah.a7a[player] = 0
	}

	function aNg() {
		aY.show(!1, !1, !1, !0), aX.aFZ(), bU.a3j.a4X()
	}

	function aNT(player, aNf) {
		for (var aC = aNf.length - 1; 0 <= aC; aC--) ae.aNi(aNf[aC], player)
	}

	function aNW(player) {
		var jb = ah.jb,
			jc = ah.jc,
			jd = ah.jd,
			je = ah.je,
			fv = bV.fv;
		if (ah.hY[player]) {
			ah.hY[player] = 0;
			for (var o6 = jb[player], o7 = jd[player], fr = jc[player]; o6 <= fr; fr--)
				for (var ft = je[player]; o7 <= ft; ft--) {
					var hI = 4 * (ft * fv + fr);
					ad.a1w(player, hI) && ad.a1x(hI)
				}
		}
		jc[player] = je[player] = 0, jb[player] = jd[player] = Math.max(fv, bV.fw)
	}
	this.e3 = function(hI) {
		var player, el = ah.hY[hI] + ah.a1W[hI];
		bQ.z.l7[hI] ? el && (aNT(player = hI, ae.aNU(player)), ag.aNV(player), aNW(player), aG.h8(player), ae.clear(player), aNX(player), function(player) {
			ah.a1W[player] = 0, ah.hC[player] = [], ah.hQ[player] = [], ah.hR[player] = [], ah.g9[player] = []
		}(player)) : !el && ah.hC[hI].length || this.aNS(hI)
	}, this.aNS = function(player) {
		! function(player) {
			bD.h6.kQ(player) || (ah.a4c[player] = bl.a4q.aNe(), aE.a3z++);
			var aNf = ae.aNU(player);
			0 === aNf.length ? bD.h6.a7S(player) && aNg() : (aNT(player, aNf), function(player, aNf) {
				var aNk = aNf[function(aNf) {
					var aC, eT = 0;
					for (aC = aNf.length - 1; 1 <= aC; aC--) ah.hY[aNf[aC]] > ah.hY[aNf[eT]] && (eT = aC);
					return eT
				}(aNf)];
				9 === aE.lL && (1 === bj.fi[player] ? az.kv(8) && b0.aNl(aNk) : aF.iR[player] && (aO.aAw(765, 0), aO.a2Q(280, L(173, [ah.a2R[aNk], ah.a2R[player]]), 765, aNk, bE.qE, bE.rf, -1, !0)));
				if (bD.h6.a7S(player)) aNg(), aO.a4B(aNk, 1);
				else {
					for (var aC = aNf.length - 1; 0 <= aC; aC--)
						if (bD.h6.a7V(aNf[aC]) && (bg.nb[4 - bD.h6.kQ(player)]++, bD.h6.a7S(aNf[aC]))) return aO.a4B(player, 0);
					bD.h6.kQ(player) || aO.aAf(0, player, aNk)
				}
			}(player, aNf))
		}(player), ag.aNV(player), aNW(player), aNX(player),
			function(player) {
				ah.nf[player] = 0, ah.hC[player] = null, ah.hQ[player] = null, ah.hR[player] = null, ah.g9[player] = null
			}(player), aG.h8(player), ae.clear(player), bQ.aNc.aNd(player)
	}
}

function d6() {
	var input;

	function aNm(e) {
		(e = e.target.files) && 0 < e.length && b7.aNp(e[0])
	}

	function aNt(e) {
		var eu = new Image;
		eu.onload = aNu, eu.src = e.target.result
	}

	function aNu(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aNw = bm.buffer.data[162].value,
			max = Math.min(bV.aNx, aNw),
			aNw = (max = a1.id || bM.u3() ? Math.min(1400, aNw) : max) / Math.max(j, k);
		if (aNw < 1 && (j = Math.floor(aNw * j + .125), k = Math.floor(aNw * k + .125)), max < j || max < k || j < 10 || k < 10) aNw = "Invalid Image Dimensions!", a1.zp ? a1.zp.showToast(aNw) : alert(aNw);
		else {
			for (var max = document.createElement("canvas"), aNw = (max.width = j, max.height = k, max.getContext("2d", {
						willReadFrequently: !0
					})), aNz = document.createElement("canvas"), aO0 = (aNz.width = e.width, aNz.height = e.height, aNz.getContext("2d")), e = (aO0.drawImage(e, 0, 0), aO0.getImageData(0, 0, aNz.width, aNz.height)), aO0 = aNw.createImageData(j, k),
					src = e.data, aO3 = aO0.data, aDO = aNz.width / j, aDP = aNz.height / k, ft = 0; ft < k; ft++)
				for (var fr = 0; fr < j; fr++) {
					var aO4 = Math.floor(fr * aDO),
						aO4 = 4 * (Math.floor(ft * aDP) * aNz.width + aO4),
						aO7 = 4 * (ft * j + fr);
					aO3[aO7] = src[aO4], aO3[1 + aO7] = src[1 + aO4], aO3[2 + aO7] = src[2 + aO4], aO3[3 + aO7] = 255
				}
			aNw.putImageData(aO0, 0, 0), 20 === u.vj && u.a5D().aNu(max)
		}
	}
	this.dv = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aNm
	}, this.y9 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aNn = function() {
		input.click()
	}, this.aNp = function(aNq) {
		var h = aNq.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aNt, h.readAsDataURL(aNq))
	}
}

function d4() {
	this.aO8 = new Uint32Array(aE.fh), this.dv = function() {
		10 === aE.lL && this.aO8.fill(0)
	}, this.ep = function() {
		10 === aE.lL && this.ls()
	}, this.ls = function() {
		for (var hI, target, aFm, aO8 = this.aO8, xC = am.le, t6 = ah.hm, aC = am.lZ - 1; 0 <= aC; aC--)(hI = xC[aC]) >= aE.l3 || (target = Math.max(bO.gB(t6[hI], 4), 2048), aFm = Math.max(af.aFn(hI), 100), aO8[hI] += bO.gB(aFm * target, 1e4),
			aO8[hI] > target && (aO8[hI] = target))
	}, this.a7e = function(player, iR) {
		return 10 !== aE.lL || bD.h6.kQ(player) ? iR : Math.min(this.aO8[player], iR)
	}, this.a7k = function(player, iR) {
		10 !== aE.lL || bD.h6.kQ(player) || (this.aO8[player] -= iR)
	}
}

function d7() {
	var aO9 = -1,
		aOA = null,
		aOB = -1,
		ye = 4;

	function aOD() {
		aN.a9y() ? be.render() : be.a49()
	}

	function aOL(eu, fn) {
		var eS = eu >> 16,
			w5 = eu >> 8 & 255,
			eu = 255 & eu,
			aOM = 255 - fn,
			aOM = (aOM < eS && aOM < w5 && aOM < eu && (fn = -fn), aO9 >> 7),
			aOO = aO9 >> 5 & 3,
			aOP = aO9 >> 3 & 3;
		return (Math.max(Math.min(eS + fn, 252 + aOM), aOM) << 16) + (Math.max(Math.min(w5 + fn, 252 + aOO), aOO) << 8) + Math.max(Math.min(eu + fn, 252 + aOP), aOP)
	}

	function aOC() {
		return -1 !== aO9 && (ad.aN8(aO9, aOA[0], aOA[1], aOA[2]), aOI(aO9), aO9 = -1)
	}

	function aOI(player) {
		bi.e2 = !0;
		for (var jb = ah.jb[player], jd = ah.jd[player], jc = ah.jc[player], je = ah.je[player], ft = jd; ft <= je; ft++)
			for (var fr = jb; fr <= jc; fr++) {
				var fO = ad.a1a(fr, ft);
				ad.a1w(player, fO) && (ad.aNE(fO) ? ad.kF(fO, player) : ad.kE(fO) ? ad.hF(fO, player) : ad.a1b(fO, player))
			}
	}
	this.dv = function() {
		aOA = null, aOB = aO9 = -1, ye = bO.it(Math.floor(bm.buffer.data[16].value), 0, 16)
	}, this.ep = function(c3) {
		if (bm.buffer.data[15].value && 0 !== ye && (c3 || !bM.u3())) {
			var c3 = bP.i1(bM.hp),
				i2 = bP.i3(bM.hq);
			if (bP.i4(c3, i2)) {
				c3 = bP.g7(c3, i2), i2 = bP.fa(c3);
				if (aOB === i2)
					if (ad.hK(i2)) {
						if (aO9 === ad.fc(i2)) return
					} else if (-1 === aO9) return;
				! function(fO) {
					ad.hK(fO) ? (fO = ad.fc(fO)) !== aO9 && (aOC(), function(player) {
						aO9 = player, aOA = ad.aNC(player);
						var aOG = function() {
							var q4 = aOA,
								aOJ = ye << 2,
								aOK = aOJ << 1;
							return [aOL(q4[0], aOJ), aOL(q4[1], aOK), aOL(q4[2], aOK)]
						}();
						ad.aN8(player, aOG[0], aOG[1], aOG[2]), aOI(player)
					}(fO), aOD()) : aOC() && aOD()
				}(aOB = i2)
			} else aOC() && aOD()
		}
	}
}

function d8() {
	var yS = 0,
		aOQ = 0,
		aOR = 0,
		aOS = 0,
		aOB = -1;

	function aOV(fO) {
		if (aOB === fO) return !1;
		if (-1 === (aOB = fO)) yS = 0, aO.aBA(yS, 0);
		else {
			if (ad.hK(fO)) return aOR = ad.fc(fO), l2 = ah.hm[aOR] - ah.a7a[aOR], (4 !== yS || l2 !== aOQ) && (yS = 4, aOQ = l2, aO.aBA(yS, l2), !0);
			if (ad.fb(fO)) return 3 !== yS && (yS = 3, aO.aBA(yS, 0), !0);
			if (ad.fp(fO)) return 2 !== yS && (yS = 2, aO.aBA(yS, 0), !0);
			var l2 = bQ.ls.a9m(bM.hp, bM.hq);
			if (-1 === l2) return 1 !== yS && (yS = 1, aO.aBA(yS, 0), !0);
			fO = bQ.z.aAn[l2];
			if (aOR = bQ.z.mw[l2], aOS = bQ.z.mx[l2] >> 3, 5 === yS && fO === aOQ) return !1;
			yS = 5, aOQ = fO, aO.aBA(yS, fO)
		}
		return !0
	}
	this.dv = function() {
		aOS = aOR = aOQ = yS = 0, aOB = -1
	}, this.ep = function(c3) {
		var i2;
		!c3 && bM.u3() || (c3 = bP.i1(bM.hp), i2 = bP.i3(bM.hq), bP.i4(c3, i2) ? (c3 = bP.g7(c3, i2), aOV(bP.fa(c3))) : aOV(-1))
	}, this.nM = function() {
		var aOX, l2, a9k, aOW;
		if (0 !== yS && 2 !== yS)
			if (bM.u3()) {
				if (1 !== yS && 3 !== yS) {
					if (4 === yS) return void(l2 = ah.hm[aOR] - ah.a7a[aOR], aOQ === l2 || (aOQ = l2, aO.aBA(yS, l2)));
					(a9k = bQ.ls.o5(aOS, aOR)) < 0 ? (yS = 1, aO.aBA(yS, 0)) : (aOW = bQ.z.aAn[a9k]) !== aOQ && (aOQ = aOW, aO.aBA(yS, aOW))
				}
			} else if (1 === yS) - 1 !== (a9k = bQ.ls.a9m(bM.hp, bM.hq)) && (yS = 5, aOQ = bQ.z.aAn[a9k], aO.aBA(yS, aOQ));
		else if (3 === yS) ad.hK(aOB) && (yS = 4, aOX = ad.fc(aOB), aOQ = ah.hm[aOX] - ah.a7a[aOX], aO.aBA(yS, aOQ));
		else if (4 === yS) {
			if (ad.hK(aOB)) return void(aOX = ad.fc(aOB), l2 = ah.hm[aOX] - ah.a7a[aOX], aOQ === l2 || (aOQ = l2, aO.aBA(yS, l2)));
			yS = 3, aO.aBA(yS, 0)
		} else - 1 === (a9k = bQ.ls.a9m(bM.hp, bM.hq)) ? (yS = 1, aO.aBA(yS, 0)) : (aOW = bQ.z.aAn[a9k]) !== aOQ && (aOQ = aOW, aO.aBA(yS, aOW))
	}
}

function dh() {
	function aOZ(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aOh, h.readAsText(e))
	}

	function aOh(e) {
		var aOk;
		aE.a3x || (e = JSON.parse(e.target.result), aOk = aE.data = new a8b, aOl(e, aOk, "mapType", 0, 2), aOl(e, aOk, "mapProceduralIndex", 0, 255), aOl(e, aOk, "mapRealisticIndex", 0, 255), aOl(e, aOk, "mapSeed", 0, 16383), function(aOj, aOk, hJ,
				max) {
				aOj = aOj[hJ];
				aOk[hJ] = aOr(aOj) ? aOj.slice(0, max) : aOk[hJ]
			}(e, aOk, "mapName", 20), function(aOj, aOk, hJ) {
				var aNv;
				2 === aOk.mapType && (!aOr(aOj = aOj[hJ]) || aOj.length <= 20 ? aOk.mapType = 0 : ((aNv = new Image).onload = function() {
					bC.aOs.aOt(aNv, 1), aNv.onload = null, aNv = null
				}, aNv.src = aOj))
			}(e, aOk, "canvas"), aOl(e, aOk, "passableWater", 0, 1), aOl(e, aOk, "passableMountains", 0, 1), aOl(e, aOk, "playerCount", 1, 512), aOl(e, aOk, "humanCount", 1, 1), aOl(e, aOk, "selectedPlayer", 0, 0), aOl(e, aOk, "gameMode", 0, 1),
			aOl(e, aOk, "playerMode", 0, 0), aOl(e, aOk, "battleRoyaleMode", 0, 0), aOl(e, aOk, "numberTeams", 0, 8), aOl(e, aOk, "isZombieMode", 0, 0), aOl(e, aOk, "isContest", 0, 0), aOl(e, aOk, "isReplay", 0, 0), aOo(e, aOk, "elo", 16, 2,
				16383), aOl(e, aOk, "colorsType", 0, 1), aOl(e, aOk, "colorsPersonalized", 0, 1), aOo(e, aOk, "colorsData", 32, 512, 262143), aOl(e, aOk, "selectableColor", 0, 1), aOo(e, aOk, "teamPlayerCount", 16, 9, 512), aOl(e, aOk,
				"neutralBots", 0, 1), aOl(e, aOk, "botDifficultyType", 0, 3), aOl(e, aOk, "botDifficultyValue", 0, 15), aOo(e, aOk, "botDifficultyTeam", 8, 9, 15), aOo(e, aOk, "botDifficultyData", 8, 512, 15), aOl(e, aOk, "spawningType", 0, 2),
			aOl(e, aOk, "spawningSeed", 0, 16383), aOo(e, aOk, "spawningData", 16, 1024, 4095), aOl(e, aOk, "selectableSpawn", 0, 1), aOl(e, aOk, "playerNamesType", 0, 2),
			function(aOj, aOk, hJ, size, max) {
				var a6c = aOj[hJ];
				if (Array.isArray(a6c)) {
					for (var a6d = new Array(size), fk = Math.min(a6c.length, size), aC = 0; aC < fk; aC++) a6d[aC] = aOr(a6c[aC]) ? a6c[aC].slice(0, max) : "";
					a6d.fill("", fk), aOk[hJ] = a6d
				}
			}(e, aOk, "playerNamesData", 512, 20), aOl(e, aOk, "selectableName", 0, 1), aOl(e, aOk, "aIncomeType", 0, 2), aOl(e, aOk, "aIncomeValue", 0, 255), aOo(e, aOk, "aIncomeData", 8, 512, 255), aOl(e, aOk, "tIncomeType", 0, 2), aOl(e, aOk,
				"tIncomeValue", 0, 255), aOo(e, aOk, "tIncomeData", 8, 512, 255), aOl(e, aOk, "iIncomeType", 0, 2), aOl(e, aOk, "iIncomeValue", 0, 255), aOo(e, aOk, "iIncomeData", 8, 512, 255), aOl(e, aOk, "sResourcesType", 0, 2), aOl(e, aOk,
				"sResourcesValue", 0, 2047), aOo(e, aOk, "sResourcesData", 16, 512, 2047), u.y(), u.z.vc[0] = 0, u.v(19))
	}

	function aOl(aOj, aOk, hJ, min, max) {
		aOj = aOj[hJ];
		aOk[hJ] = "number" == typeof aOj && min <= aOj && aOj <= max ? Math.floor(aOj) : aOk[hJ]
	}

	function aOr(pV) {
		return "string" == typeof pV
	}

	function aOo(aOj, aOk, hJ, aOu, size, max) {
		var a6c = aOj[hJ];
		if (Array.isArray(a6c)) {
			for (var a6d = new(8 === aOu ? Uint8Array : 16 === aOu ? Uint16Array : Uint32Array)(size), fk = Math.min(a6c.length, size), aC = 0; aC < fk; aC++) a6d[aC] = bO.it(a6c[aC], 0, max);
			aOk[hJ] = a6d
		}
	}
	this.aOY = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aOZ, input.click()
	}, this.aOa = function() {
		for (var aOd, aH8, a9B = aE.data, keys = Object.keys(a9B), aOb = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a9B[key] instanceof Uint8Array || a9B[key] instanceof Uint16Array || a9B[key] instanceof Uint32Array ? aOb[key] = Array.from(a9B[key]) : aOb[key] = a9B[key]
		}
		aOb.canvas = 2 === aOb.mapType && aOb.canvas ? aOb.canvas.toDataURL() : null, aOd = aOb, aOd = JSON.stringify(aOd, null, 2), aOd = new Blob([aOd], {
			type: "application/json"
		}), (aH8 = document.createElement("a")).href = URL.createObjectURL(aOd), aH8.download = "tt_scenario.json", aH8.click()
	}
}

function ch() {
	var aOv, aOw, size, kC, iR, aOx;

	function aOy(player) {
		return player < aE.l3 ? aOv * player : aOv * aE.l3 + aOw * (player - aE.l3)
	}
	this.dv = function() {
		aOv = aE.l3 < 16 ? 12 : 8, aOw = 4;
		var fk = aOy(aE.fh);
		size = new Uint8Array(aE.fh), kC = new Uint16Array(fk), iR = new Uint32Array(fk), aOx = new Uint8Array(fk)
	}, this.tA = function(aCI, aOz) {
		var aP0 = this.hn(aCI, aOz),
			aOz = (this.hl(aCI, aOz, 0), bD.h6.h9(aCI, aP0));
		bg.hA(aCI, aP0 - aOz, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aNi = function(player, aOz) {
		var aP3, aOz = function(player, aOz) {
			var aC, ly = aOy(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (kC[ly + aC] === aOz) return aC;
			return size[player]
		}(player, aOz);
		aOz !== size[player] && (aP3 = iR[aOy(player) + aOz], this.hB(player, aOz), this.et(player, aP3, aE.fh))
	}, this.kO = function(player, aOz) {
		for (var ly = aOy(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kC[ly + aC] === aOz) return !0;
		return !1
	}, this.kh = function(player) {
		return player < aE.l3 ? size[player] < aOv : size[player] < aOw
	}, this.gr = function(player) {
		return size[player]
	}, this.gw = function(player, aC) {
		return kC[aOy(player) + aC]
	}, this.gx = function(player, aC) {
		return iR[aOy(player) + aC]
	}, this.hn = function(player, aOz) {
		for (var ly = aOy(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kC[ly + aC] === aOz) return iR[ly + aC];
		return 0
	}, this.aNZ = function(player) {
		for (var ly = aOy(player), gC = 0, aC = size[player] - 1; 0 <= aC; aC--) gC += iR[ly + aC];
		return gC
	}, this.hl = function(player, aOz, aP3) {
		for (var ly = aOy(player), aC = size[player] - 1; 0 <= aC; aC--) kC[ly + aC] === aOz && (iR[ly + aC] = aP3)
	}, this.hW = function(player, aC, aP3) {
		iR[aOy(player) + aC] = Math.max(aP3, 0)
	}, this.hX = function(player, aC) {
		aOx[aOy(player) + aC] = 0
	}, this.gy = function(player, aC) {
		return aOx[aOy(player) + aC]
	}, this.et = function(player, aP3, aOz) {
		ap.jq.kf[player] = ap.jq.kf[aOz] = 8, bD.h6.a7V(aOz) && bg.nb[6 - bD.h6.kQ(player)]++;
		for (var ly = aOy(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kC[ly + aC] === aOz) return iR[ly + aC] += aP3, void(iR[ly + aC] = iR[ly + aC] > aE.a8V ? aE.a8V : iR[ly + aC]);
		kC[ly + size[player]] = aOz, iR[ly + size[player]] = aP3, aOx[ly + size[player]] = 1, size[player]++, aOz === aE.fU ? aO.a4B(player, 5) : player < aE.l3 && player === aE.fU && ag.aAh(aOz)
	}, this.hB = function(player, eT) {
		var g3, ly;
		if (0 !== size[player])
			for (ly = aOy(player), size[player]--, g3 = eT; g3 < size[player]; g3++) kC[ly + g3] = kC[ly + g3 + 1], iR[ly + g3] = iR[ly + g3 + 1], aOx[ly + g3] = aOx[ly + g3 + 1]
	}, this.aNU = function(player) {
		for (var g3, ly, aNf = [], aC = am.lZ - 1; 0 <= aC; aC--)
			for (ly = aOy(am.le[aC]), g3 = size[am.le[aC]] - 1; 0 <= g3; g3--)
				if (kC[ly + g3] === player) {
					aNf.push(am.le[aC]);
					break
				} return aNf
	}
}

function ci() {
	var aP4;

	function aP6(player) {
		var eS, ki;
		return bD.h6.kQ(player) && player < aE.l3 ? 0 : (eS = aP4[bO.gB((aE.fh - 1) * ah.hY[player], aE.kn)], bi.l0() < 1920 && (eS = Math.max(bO.gB(100 * (13440 - 6 * bi.l0()), 1920), eS)), ki = af.kj(player), ah.hm[player] > ki && (eS -= bO.gB(2 *
			eS * (ah.hm[player] - ki), ki)), Math.min(Math.max(eS, 0), 700))
	}

	function aPM(oI) {
		for (var hY = ah.hY, le = am.le, aC = am.lZ - 1; 0 <= aC; aC--) {
			var hI = le[aC];
			bD.h6.h9(hI, bO.gB(oI * hY[hI], 32))
		}
	}

	function aPJ() {
		var a4Z = aE.fU;
		bR.gG[0] = ah.hm[a4Z] - ah.a7a[a4Z]
	}

	function aPL(eT) {
		var a4Z = aE.fU,
			a4Z = ah.hm[a4Z] - ah.a7a[a4Z] - bR.gG[0];
		af.aEN += a4Z, bg.nb[eT] += a4Z
	}
	this.aEN = 0, this.e1 = function() {
		for (var fk = aE.fh, aC = (aP4 = new Uint16Array(fk), 0); aC < fk; aC++) aP4[aC] = 100 + aP5(bO.gB(25600 * aC, fk - 4), 9)
	}, this.dv = function() {
		(this.aEN = 0) === aE.data.iIncomeType ? this.aFn = aP6 : 1 === aE.data.iIncomeType ? this.aFn = function(player) {
			return bO.gB(aE.data.iIncomeValue * aP6(player), 64)
		} : this.aFn = function(player) {
			return bO.gB(aE.data.iIncomeData[player] * aP6(player), 64)
		}
	}, this.ep = function() {
		if (bi.l0() % 10 == 9 && (af.aEN = 0, function() {
				aPJ();
				for (var le = am.le, hm = ah.hm, aC = am.lZ - 1; 0 <= aC; aC--) {
					var hI = le[aC],
						aPK = bO.gB(af.aFn(hI) * hm[hI], 1e4);
					bD.h6.h9(hI, Math.max(aPK, 1))
				}
				aPL(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aPJ(), 1 === aE.data.aIncomeType)
						for (var hY = ah.hY, le = am.le, oI = aE.data.aIncomeValue, aC = am.lZ - 1; 0 <= aC; aC--) {
							var hI = le[aC];
							bD.h6.h9(hI, bO.gB(oI * hY[hI], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hY = ah.hY, le = am.le, oI = aE.data.aIncomeData, aC = am.lZ - 1; 0 <= aC; aC--) {
								var hI = le[aC];
								bD.h6.h9(hI, bO.gB(oI[hI] * hY[hI], 128))
							}
						}();
					aPL(18)
				}
			}(), bi.l0() % 100 == 99)) {
			if (aPJ(), 0 === aE.data.tIncomeType) aPM(32);
			else if (1 === aE.data.tIncomeType) aPM(aE.data.tIncomeValue);
			else
				for (var hY = ah.hY, le = am.le, oI = aE.data.tIncomeData, aC = am.lZ - 1; 0 <= aC; aC--) {
					var hI = le[aC];
					bD.h6.h9(hI, bO.gB(oI[hI] * hY[hI], 32))
				}
			aPL(8)
		}
	}, this.kj = function(player) {
		var aP8 = Math.min(bQ.ls.aP9(player), 1024),
			player = this.aPA(player) * (1024 - aP8);
		return Math.max(bO.gB(player, 1024), 1)
	}, this.a7b = function(player) {
		var aP8 = Math.min(bQ.ls.aP9(player), 1024);
		return bO.gB(this.aPB(player) * (1024 - aP8), 1024)
	}, this.aPB = function(player) {
		player = ah.hY[player] * aE.a8Y;
		return Math.min(player, aE.a8V)
	}, this.aPA = function(player) {
		return Math.min(100 * ah.hY[player], aE.a8W)
	}, this.rv = function(player, rw) {
		bu.sP(player, rw, bR.gH[0], 0), bD.h6.h9(rw, bR.gH[0]), bg.sQ(player, rw), ag.aPC(player, bR.gH[0] + bR.gH[1]), ag.sR(rw, bR.gH[0]), bD.h6.nD(player)
	}, this.aPD = function() {
		for (var fk = am.lZ, xC = am.le, ly = 0, t6 = ah.hm, aC = 0; aC < fk; aC++) ly += t6[xC[aC]];
		return ly
	}, this.aPE = function(aPF) {
		for (var hI, fk = am.lZ, xC = am.le, ly = 0, t6 = ah.hm, fi = bj.fi, aC = 0; aC < fk; aC++) fi[hI = xC[aC]] === aPF && (ly += t6[hI]);
		return ly
	}
}

function ck() {
	var aPQ, aPR, aPS, aPT, aPU, aPV, aPW, aPX, aPY, aPZ, aPa, aPb, aPc, aPd, aPe, aPf, aPg, aPh, aPj, aPk, aH1, aPl, aPm, aPs, aPt, aPi = null,
		aPo = 0,
		aPp = !1,
		aPq = new Float32Array(4),
		aPr = 0,
		aEs = 112,
		aPu = 0;

	function aPy() {
		aPi.width = i.j, aPi.height = i.k, aPj = aPi.getContext("2d", {
			alpha: !0
		}), bD.ta.textAlign(aPj, 1), bD.ta.textBaseline(aPj, 1), aPj.imageSmoothingEnabled = !0, aPi.oncontextrestored = aPy
	}

	function td() {
		aPY = Math.floor(+i.iv), aPZ = Math.floor(.5 * aPY), aPy()
	}

	function aPv() {
		var aC, aQ0;
		for (z7.font = bD.ta.v9(1, 100 * aPa), aQ0 = 80 / Math.floor(z7.measureText(bD.pZ.a3G(aE.a8V)).width), z7.font = bD.ta.v9(1, 100), aC = aE.fh - 1; 0 <= aC; aC--) aPX[aC] = 100 / Math.floor(z7.measureText(ah.a2R[aC]).width), aPW[aC] = Math
			.min(aQ0, aPX[aC])
	}

	function aQ1(aC) {
		return !aPu || (aC = ah.hm[aC]) < 1e6 ? 1 : aC < 1e7 ? aPq[0] : aPq[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aPz(im) {
		aPp = !1, aPo = bi.ek, aPh = !1, aPg = 1, aPe = aPf = 0, im.clearRect(0, 0, i.j, i.k);
		for (var aQ8, aQ9, aC, aQA, fontSize, aQB, o6 = jM / iw, o7 = jN / iw, oJ = (i.j + jM) / iw, oK = (i.k + jN) / iw, aQC = 0 !== ah.nf[aE.fU] && !bD.h6.kQ(aE.fU), g3 = am.lZ - 1; 0 <= g3; g3--) aC = am.le[g3], (fontSize = Math.floor(aPd * iw *
			aQ1(aC) * aPW[aC] * aPU[aC])) < aPc || aPY <= fontSize || aPS[aC] + aPU[aC] > o6 && aPS[aC] < oJ && aPT[aC] + aPV[aC] > o7 && aPT[aC] < oK && (aQ8 = Math.floor(i.j * (aPS[aC] + aPU[aC] / 2 - o6) / (oJ - o6)), aQ9 = Math.floor(i.k * (
			aPT[aC] + aPV[aC] / 2 - o7) / (oK - o7) - .1 * fontSize), aQA = ad.aCo[aC], im.font = bD.ta.v9(1 === ah.a7R[aC] ? 4 : 1, fontSize), im.fillStyle = aQD(fontSize, aQA % 2), aPu ? aQE(im, aC, fontSize, aQ8, aQ9, aQA) : aQF(aC,
			fontSize, aQ8, aQ9, im), aPh = !0, 0 < aH1[aC] ? function(aQ8, aQ9, fontSize, aC, im) {
			0 === ko[aC] ? ak.pr.a37(aPk[aC]) ? (function(aQ8, aQ9, fontSize, player, sE, im) {
				for (var a15 = aQ9, il = (im.globalAlpha = aQN(fontSize), aQ1(player) * (aPu ? aPr : aPX[player])), a14 = aQ8 - .5 * fontSize / il - .9 * fontSize, g4 = 0; g4 < 2; g4++) im.fillText(ak.pr.a2z(sE), a14, a15), a14 =
					aQ8 + .5 * fontSize / il + .9 * fontSize;
				im.globalAlpha = 1
			}(aQ8, aQ9, fontSize, aC, aPk[aC], im), aQH(aQ8, aQ9, fontSize, 0, 0, im)) : ak.pr.a39(aPk[aC]) ? (aQQ(aQ8, aQ9, fontSize, aPk[aC], 0, im), aQH(aQ8, aQ9, fontSize, 0, 1, im)) : (aQQ(aQ8, aQ9, fontSize, aPk[aC], 1, im), aQH(
				aQ8, aQ9, fontSize, 1, 0, im)) : aQQ(aQ8, aQ9, fontSize, aPk[aC], 0, im)
		}(aQ8, aQ9, fontSize, aC, im) : 0 === ko[aC] && aQH(aQ8, aQ9, fontSize, 0, 0, im), aQC && (0 < aH1[aC + aE.fh] || 0 < aH1[aC + 2 * aE.fh] || 0 < aH1[aC + 3 * aE.fh] || 0 < aH1[aC + 4 * aE.fh]) && function(aQ8, aQ9, fontSize, aC, im) {
			var eu, hD = -1;
			for (eu = 4; 1 <= eu; eu--) 0 < aH1[aC + eu * aE.fh] && hD++;
			for (eu = 1; eu < 5; eu++) 0 < aH1[aC + eu * aE.fh] && (! function(aQ8, aQ9, fontSize, eu, aC, aQL, el, im) {
				var a6q;
				if (1 === eu) {
					aC = aPk[aC + aE.fh];
					if (!ak.pr.a38(aC)) return function(aQ8, aQ9, fontSize, sE, aQL, im) {
						im.globalAlpha = aQN(fontSize);
						aQ8 -= .534 * aQL * fontSize, aQL = aQ9 + 1.59 * fontSize;
						im.font = bD.ta.v9(0, .785 * fontSize), im.fillText(ak.pr.a2z(sE), aQ8, aQL), im.globalAlpha = 1
					}(aQ8, aQ9, fontSize, aC, aQL, im);
					a6q = ak.a2T.a2Y[aC - 1024 + ak.pr.a2k]
				} else a6q = 2 === eu ? aM.a9Q()[4].canvas[+(el < 255)] : (3 === eu ? aM.a9Q()[5] : aM.a9Q()[6]).canvas[0];
				aC = ak.a2T.a2Z, el = .8 * fontSize / aC, eu = aQ8 - .5 * el * aC - .534 * aQL * fontSize, aQ8 = aQ9 + 1.4 * el * aC;
				im.setTransform(el, 0, 0, el, eu, aQ8), im.globalAlpha = aQN(fontSize), im.drawImage(a6q, 0, 0), im.globalAlpha = 1, im.setTransform(1, 0, 0, 1, 0, 0)
			}(aQ8, aQ9, fontSize, eu, aC, hD, aH1[aC + eu * aE.fh], im), hD -= 2)
		}(aQ8, aQ9, fontSize, aC, im), (aQB = aPa * fontSize) < aPc || (im.font = bD.ta.v9(1, aQB), aQ9 += Math.floor(.78 * fontSize), aPu ? aQF(aC, aQB, aQ8, aQ9, im) : aQE(im, aC, aQB, aQ8, aQ9, aQA)))
	}

	function aQF(aC, fontSize, fr, ft, im) {
		var ___id = aC;
		var showName = aC < aE.l3 || !__fx.settings.hideBotNames;
		var eliminationEstimate = __fx.settings.showEstimatedEliminationAttack ?
			__fx.utils.getEstimatedEliminationAttack(___id, ah.hm[___id] - ah.a7a[___id]) :
			"";
		if (showName) im.fillText(ah.a2R[aC], fr, ft), aC < aE.l3 && 2 !== ah.a7R[aC] || (aC = fontSize / aPX[aC], im.fillRect(fr - .5 * aC, ft + bD.ta.a30 * fontSize, aC, Math.max(1, .1 * fontSize)));
		aPu && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (im.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			im.fillText(__fx.utils.getDensity(___id), fr, showName ? ft + fontSize : ft),
			eliminationEstimate && im.fillText(eliminationEstimate, fr, showName ? ft + 2 * fontSize : ft + fontSize)
		);
	}

	function aQE(im, aC, fontSize, aQ8, aQ9, aQA) {
		var el, a7a = ah.a7a[aC],
			aQK = bD.pZ.a3G(ah.hm[aC] - a7a);

		function drawDensity() {
			var eliminationEstimate;
			!aPu && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (im.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), im.fillText(__fx.utils.getDensity(aC), aQ8, aQ9 + fontSize), eliminationEstimate = __fx.settings
				.showEstimatedEliminationAttack ? __fx.utils.getEstimatedEliminationAttack(aC, ah.hm[aC] - a7a) : "") && im.fillText(eliminationEstimate, aQ8, aQ9 + 2 * fontSize)
		}
		a7a ? (el = im.fillStyle, im.fillStyle = aQD(fontSize, 2 + aQA % 2), im.fillText(aQK, aQ8, aQ9), im.fillStyle = el) : aQA >> 1 & 1 ? (im.lineWidth = .05 * fontSize, im.strokeStyle = aQD(fontSize, aQA % 2), im.strokeText(aQK, aQ8, aQ9)) : (1 <
			aQA && (im.lineWidth = .12 * fontSize, im.strokeStyle = aQD(fontSize, aQA), im.strokeText(aQK, aQ8, aQ9)), im.fillText(aQK, aQ8, aQ9)), drawDensity()
	}

	function aQH(aQ8, aQ9, fontSize, aQL, aQM, im) {
		var a9x = .95 * fontSize / aPm,
			aQ8 = aQ8 - .5 * a9x * aPl + .8 * aQL * fontSize,
			aQL = aQ9 - 1.76 * a9x * aPm - (.35 - bD.ta.a30 + .7) * aQM * fontSize;
		im.setTransform(a9x, 0, 0, a9x, aQ8, aQL), im.globalAlpha = aQN(fontSize), im.drawImage(ac.get(4), 0, 0), im.globalAlpha = 1, im.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aQQ(aQ8, aQ9, fontSize, sE, aQL, im) {
		var ig, a14, a9x;
		im.globalAlpha = aQN(fontSize), ak.pr.a38(sE) ? (ig = ak.a2T.a2Z, im.setTransform(a9x = 1.1 * fontSize / ig, 0, 0, a9x, a14 = aQ8 - .5 * a9x * ig - .8 * aQL * fontSize, a9x = aQ9 - 1.55 * a9x * ig), im.drawImage(ak.a2T.a2Y[sE - 1024 + ak.pr
			.a2k], 0, 0), im.setTransform(1, 0, 0, 1, 0, 0)) : (a14 = aQ8 - .8 * aQL * fontSize, a9x = aQ9 - (.35 - bD.ta.a30 + 1) * fontSize, im.fillText(ak.pr.a2z(sE), a14, a9x)), im.globalAlpha = 1
	}

	function aQD(fontSize, aQA) {
		return aPZ <= fontSize && fontSize < aPY ? bj.aQS[aQA] + aQN(fontSize).toFixed(3) + ")" : bj.aQT[aQA]
	}

	function aQN(fontSize) {
		return aPZ <= fontSize && fontSize < aPY ? 1 - (fontSize - aPZ) / (aPY - aPZ) : 1
	}

	function aQc(il, j) {
		return 1 + Math.floor(aPb * il * j)
	}

	function aQZ(aC) {
		for (var left = aPS[aC], g3 = aPS[aC] - ah.jb[aC] - 1; 0 <= g3; g3--)
			if (!aQe(aC, --left, aPT[aC], aPV[aC])) {
				left++;
				break
			} var right = aPS[aC];
		for (g3 = ah.jc[aC] - aPS[aC] - aPU[aC]; 0 <= g3; g3--)
			if (!aQe(aC, ++right + aPU[aC] - 1, aPT[aC], aPV[aC])) {
				right--;
				break
			} var fr = Math.floor((left + right) / 2),
			top = aPT[aC];
		for (g3 = aPT[aC] - ah.jd[aC] - 1; 0 <= g3; g3--)
			if (!aQf(aC, fr, --top, aPU[aC])) {
				top++;
				break
			} var bottom = aPT[aC];
		for (g3 = ah.je[aC] - aPT[aC] - aPV[aC]; 0 <= g3; g3--)
			if (!aQf(aC, fr, ++bottom + aPV[aC] - 1, aPU[aC])) {
				bottom--;
				break
			} var ft = Math.floor((top + bottom) / 2);
		aQW(aC, fr, ft, aPU[aC], aPV[aC]) && (aPS[aC] = fr, aPT[aC] = ft)
	}

	function aQW(player, fr, ft, j, k) {
		fn = Math.floor(.2 * j);
		for (var fn, eu = fr + j - 1; fr <= eu; eu--)
			if (!aQe(player, eu, ft, k)) return;
		for (eu = ft + k - 1 - (fn = (fn = Math.floor(.25 * k)) < 1 ? 1 : fn); ft + fn <= eu; eu--)
			if (!aQf(player, fr, eu, j)) return;
		return 1
	}

	function aQe(player, fr, ft, k) {
		return ad.a1w(player, 4 * (ft * bV.fv + fr)) && ad.a1w(player, 4 * ((ft + k - 1) * bV.fv + fr))
	}

	function aQf(player, fr, ft, j) {
		return ad.a1w(player, 4 * (ft * bV.fv + fr)) && ad.a1w(player, 4 * (ft * bV.fv + fr + j - 1))
	}
	this.dv = function() {
		if (aPu = bm.buffer.data[7].value || 8 === aE.lL, aPh = !1, aPd = .88, aPa = .5, aPb = 1.8, aPc = 12 - 3 * bm.buffer.data[9].value, aPR = aPQ = 0, aPS = new Uint16Array(aE.fh), aPT = new Uint16Array(aE.fh), aPU = new Uint16Array(aE.fh),
			aPV = new Uint16Array(aE.fh), aPW = new Float32Array(aE.fh), aPX = new Float32Array(aE.fh), aPk = new Uint16Array(2 * aE.fh), aH1 = new Uint8Array(5 * aE.fh), aPs = new Uint8Array(aE.fh), aPt = new Uint8Array(aE.fh), aPi = aPi ||
			document.createElement("canvas"), td(), aPf = aPe = 0, aPg = 1, aPu) {
			var aC, aQ0;
			for (aPv(), z7.font = bD.ta.v9(1, 100), aQ0 = 100 / Math.floor(z7.measureText("900 000").width), aC = aE.fh - 1; 0 <= aC; aC--) aPW[aC] = Math.min(aQ0, 2 * aPX[aC]);
			aPr = aQ0, aPq[0] = 100 / (aQ0 * Math.floor(z7.measureText("5 000 000").width)), aPq[1] = 100 / (aQ0 * Math.floor(z7.measureText("50 000 000").width)), aPq[2] = 100 / (aQ0 * Math.floor(z7.measureText("500 000 000").width)), aPq[3] =
				100 / (aQ0 * Math.floor(z7.measureText("1 000 000 000").width))
		} else aPv();
		! function() {
			var aC;
			for (aC = aE.fh - 1; 0 <= aC; aC--) ah.hY[aC] < 12 ? (aPS[aC] = ah.jb[aC] + 1, aPT[aC] = ah.jd[aC] + 1, aPU[aC] = 1, aPV[aC] = 1) : (aPS[aC] = ah.jb[aC], aPT[aC] = ah.jd[aC] + 1, aPU[aC] = 4, aPV[aC] = 2);
			if (aE.i9)
				for (aC = 0; aC < aE.l3; aC++) aPU[aC] = 0;
			aPl = ac.get(4).width, aPm = ac.get(4).height
		}()
	}, this.aPC = function(hI, a99) {
		a99 > 18 * ah.hY[hI] ? (aPt[hI] = 6, ad.aCo[hI] = 2 + ad.aCo[hI] % 2) : (aPs[hI] = 4, (ad.aCo[hI] < 2 || 3 < ad.aCo[hI]) && (ad.aCo[hI] = 6 + ad.aCo[hI] % 2))
	}, this.sR = function(hI, a99) {
		a99 > 6 * ah.hY[hI] ? (aPt[hI] = 6, ad.aCo[hI] = 4 + ad.aCo[hI] % 2) : (aPs[hI] = 4, (ad.aCo[hI] < 4 || 5 < ad.aCo[hI]) && (ad.aCo[hI] = 8 + ad.aCo[hI] % 2))
	}, this.resize = function() {
		td(), aPz(aPj)
	}, this.a8R = function() {
		for (var aC = 0; aC < aE.l3; aC++) ah.jc[aC] - ah.jb[aC] != 3 || ah.je[aC] - ah.jd[aC] != 3 ? (aPS[aC] = ah.jb[aC] + (ah.jc[aC] !== ah.jb[aC] ? 1 : 0), aPT[aC] = ah.jd[aC], aPU[aC] = 1, aPV[aC] = 1) : (aPS[aC] = ah.jb[aC], aPT[aC] = ah
			.jd[aC] + 1, aPU[aC] = 4, aPV[aC] = 2)
	}, this.tB = function(player, eT, aQ3) {
		! function(player, eT, aQ3) {
			player += eT * aE.fh;
			0 === eT ? aPk[player] === aQ3 && 0 < aH1[player] ? aH1[player] = 0 : (aPk[player] = aQ3, aH1[player] = ak.pr.a37(aQ3) ? 255 : 64) : 1 === eT ? (aH1[player] = 64, aPk[player] = aQ3) : aH1[player] = aQ3
		}(player, eT, aQ3), 2 === aE.a3x && this.nR(!0)
	}, this.z6 = function() {
		aPh && (1 !== aPg ? (z7.imageSmoothingEnabled = !0, z7.setTransform(aPg, 0, 0, aPg, 0, 0), z7.drawImage(aPi, -aPe / aPg, -aPf / aPg), z7.setTransform(1, 0, 0, 1, 0, 0), z7.imageSmoothingEnabled = !1) : z7.drawImage(aPi, -aPe, -aPf))
	}, this.aDa = function(j5, j8) {
		aPe += j5, aPf += j8
	}, this.a5W = function(j5, j8) {
		ag.aDa(j5, j8)
	}, this.zoom = function(a6P, mI, mJ) {
		aPg *= a6P, aPe = (aPe + mI) * a6P - mI, aPf = (aPf + mJ) * a6P - mJ
	}, this.aNV = function(player) {
		var jb = ah.jb[player],
			jc = ah.jc[player],
			jd = ah.jd[player],
			je = ah.je[player],
			jG = bP.i1(0),
			jH = bP.i3(0),
			jI = bP.i1(i.j),
			jJ = bP.i3(i.k);
		jb < jI && jG < jc && jd < jJ && jH < je && (aPU[player] = 0, aPp = !0)
	}, this.nR = function(c3) {
		return !(!aPp && !c3 && bi.ek < aPo + (1 === aPg && 0 === aPe && 0 === aPf && (aE.a8x() || aE.i9 || 2 === aE.a3x) ? 1e3 : aEs) || (aPz(aPj), 0))
	}, this.aQ6 = function(aC) {
		return aQ1(aC) * aPW[aC]
	}, this.aQ7 = function(player) {
		return aPW[player]
	}, this.ep = function() {
		bi.l0() % 10 == 9 && (aPp = aPp || aE.a8z() && !aE.a8x()), !aE.a8x() && 4 <= ++aPR && function() {
			var aC, g3, g4;
			for (aPR = 0, g4 = 4; 1 <= g4; g4--)
				for (g3 = am.lZ - 1; 0 <= g3; g3--) aC = am.le[g3] + g4 * aE.fh, 0 < aH1[aC] && aH1[aC] < 255 && aH1[aC]--;
			if (2 !== aE.a3x)
				for (g3 = am.lZ - 1; 0 <= g3; g3--) aC = am.le[g3], 0 < aH1[aC] && aH1[aC] < 255 && aH1[aC]--
		}();
		var aC, g3, fk = Math.floor(.1 * am.lZ);
		for (fk = (fk = fk < 8 ? 8 : fk) > am.lZ ? am.lZ : fk, aC = aPQ + fk - 1; aPQ <= aC; aC--) g3 = aC % am.lZ, ! function(aC) {
			var il = aQ1(aC) * aPW[aC];
			0 < aPU[aC] && aQW(aC, aPS[aC], aPT[aC], aPU[aC], aPV[aC]) ? ! function(aC) {
				for (var fr, ft, j, k, fO = !1, g4 = 0; g4 < 8; g4++) {
					if (j = aPU[aC] + 2, k = aPV[aC] + 2, j > ah.jc[aC] - ah.jb[aC] + 1 || k > ah.je[aC] - ah.jd[aC] + 1) return fO;
					if (fr = aPS[aC] - 1, ft = aPT[aC] - 1, !aQW(aC, fr, ft, j, k)) return fO;
					aPS[aC] = fr, aPT[aC] = ft, aPU[aC] = j, aPV[aC] = k, fO = !0
				}
				return fO
			}(aC) && function(aC, il) {
				for (var fr, ft, j, k, fO = !1, aHA = aPU[aC], oI = 1 + Math.floor(.02 * aHA), g4 = 1; g4 < 5; g4++) {
					if ((j = aHA + g4 * oI) > ah.jc[aC] - ah.jb[aC] + 1) return fO;
					if ((k = aQc(il, j)) > ah.je[aC] - ah.jd[aC] + 1) return fO;
					fr = ah.jb[aC] + Math.floor(Math.random() * (ah.jc[aC] - ah.jb[aC] + 2 - j)), ft = ah.jd[aC] + Math.floor(Math.random() * (ah.je[aC] - ah.jd[aC] + 2 - k)), aQW(aC, fr, ft, j, k) && (aPS[aC] = fr, aPT[aC] = ft, aPU[
						aC] = j, aPV[aC] = k, fO = !0)
				}
				return fO
			}(aC, il) && aQZ(aC) : ! function(aC, il) {
				var k, fr = aPS[aC] + 1,
					ft = aPT[aC] + 1,
					j = aPU[aC] - 2;
				for (;;) {
					if (j < 1) {
						aPU[aC] = 0;
						break
					}
					if (k = aQc(il, j), aQW(aC, fr, ft, j, k)) return aPS[aC] = fr, aPT[aC] = ft, aPU[aC] = j, aPV[aC] = k, 1;
					fr++, ft++, j -= 2
				}
				return
			}(aC, il) ? function(aC, il) {
				var fr, ft, j, k, g4, oO, kJ = ah.jc[aC] - ah.jb[aC] + 1,
					aQd = Math.floor(.02 * kJ);
				for (oO = -6 * (aQd = aQd < 1 ? 1 : aQd), g4 = kJ; oO <= g4; g4 -= aQd)
					if (k = aQc(il, j = 0 < g4 ? g4 : 1), fr = ah.jb[aC] + Math.floor(Math.random() * (ah.jc[aC] - ah.jb[aC] + 2 - j)), ft = ah.jd[aC] + Math.floor(Math.random() * (ah.je[aC] - ah.jd[aC] + 2 - k)), aQW(aC, fr, ft, j, k))
						return aPS[aC] = fr, aPT[aC] = ft, aPU[aC] = j, aPV[aC] = k
			}(aC, il) : aQZ(aC)
		}(am.le[g3]);
		aPQ = (aPQ += fk) % am.lZ
	}, this.nL = function() {
		var aC, hI, a35, a36;
		if (bi.l0() % 4 == 1)
			for (aC = am.lZ - 1; 0 <= aC; aC--) hI = am.le[aC], ad.aCo[hI] < 2 || ((a35 = Math.max(aPs[hI] - 1, 0)) === (a36 = Math.max(aPt[hI] - 1, 0)) ? 0 === a35 && (ad.aCo[hI] %= 2) : 0 === a36 && ad.aCo[hI] < 6 && (ad.aCo[hI] += 4), aPs[
				hI] = a35, aPt[hI] = a36)
	}, this.aAh = function(player) {
		var aC = player + 2 * aE.fh,
			el = aH1[aC];
		return 0 < el && (aO.a45(50, player), aH1[aC] = 0, 255 === el)
	}, this.a9h = function(player) {
		return 255 === aH1[player + 2 * aE.fh]
	}
}

function cm() {
	var aQg, aQh, aQi;
	this.dv = function() {
		aQg =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aQh =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aQi = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aAz = ["K ", " Y", "E ", " Z", " z", " s", "S "], aIS = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aQg.length - 1; 0 <= aC; aC--)
			for (var g3 = aAz.length - 1; 0 <= g3; g3--) aQg[aC] = aQg[aC].replace(aAz[g3], aIS[g3]);
		if (__fx.settings.realisticNames) aQg = realisticNames;
	}, this.a8k = function() {
		var fk = aE.l3,
			a2R = ah.a2R,
			a4h = ah.a4h,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fk)
			for (var aC = 0; aC < fk; aC++) a2R[aC] = a4h[aC] = "Player " + az.kK(1e3);
		else
			for (aC = 0; aC < fk; aC++) a2R[aC] = a4h[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.lL) {
			for (var eS = az.random(), aQo = aQi, aQp = aQh, iR = aF.iR, fk = aQo.length, ly = aE.data.teamPlayerCount[7], a2R = ah.a2R, a4h = ah.a4h, aC = ly - 1; aC >= aE.l3; aC--) a2R[aC] = a4h[aC] = aQo[(aC + eS) % fk];
			for (fk = aQp.length - 1, aC = ly; aC < aE.fh; aC++) a2R[aC] = a4h[aC] = aQp[iR[aC] ? fk : aC % fk]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fk = aE.fh, a2R = ah.a2R, a4h = ah.a4h, playerNamesData = aE.data.playerNamesData, aC = aE.l3; aC < fk; aC++) a2R[aC] = a4h[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var a2R = ah.a2R, a4h = ah.a4h, aC = aE.l3; aC < aE.fh; aC++) a2R[aC] = a4h[aC] = "Bot " + az.kK(1e3)
		} : function() {
			for (var aQq = aQg, fk = aQq.length, eS = az.random(), a2R = ah.a2R, a4h = ah.a4h, aC = aE.l3; aC < aE.fh; aC++) a2R[aC] = a4h[aC] = aQq[(aC + eS) % fk]
		})()
	}
}

function d5() {
	this.aQr = [], this.aQs = [], this.dv = function() {
		this.aQr = [], this.aQs = []
	}, this.ep = function() {
		0 <= this.aQr.length && this.aQt(this.aQr), 0 <= this.aQs.length && this.aQt(this.aQs)
	}, this.aQt = function(h) {
		for (var g4 = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].ek--, h[aC].ek <= 0) {
				g4 = aC;
				break
			} for (aC = g4; 0 <= aC; aC--) h.shift()
	}, this.a9Y = function(id, xC, aQu) {
		return this.g5(this.aQr, id, xC, aQu)
	}, this.aQv = function(id, xC, aQu) {
		return this.g5(this.aQs, id, xC, aQu)
	}, this.g5 = function(h, id, xC, aQu) {
		return ! function(h, id, xC) {
			var aC, ia;
			for (aC = xC.length - 1; 0 <= aC; aC--)
				for (ia = h.length - 1; 0 <= ia; ia--)
					if (h[ia].player === xC[aC] && id === h[ia].id) return 1;
			return
		}(h, id, xC) && (aQu && function(h, id, xC) {
			var aC;
			for (aC = xC.length - 1; 0 <= aC; aC--) h.push({
				player: xC[aC],
				id: id,
				ek: 384
			})
		}(h, id, xC), !0)
	}
}

function cl() {
	this.a4h = new Array(aE.fh), this.a2R = new Array(aE.fh), this.a7R = new Uint8Array(aE.fh), this.nf = new Uint8Array(aE.fh), this.jb = new Uint16Array(aE.fh), this.jd = new Uint16Array(aE.fh), this.jc = new Uint16Array(aE.fh), this.je =
		new Uint16Array(aE.fh), this.hY = new Uint32Array(aE.fh), this.a1W = new Uint32Array(aE.fh), this.hm = new Uint32Array(aE.fh), this.hC = null, this.hQ = null, this.hR = null, this.g9 = null, this.su = new Uint16Array(aE.fh), this.k6 =
		new Uint16Array(aE.fh), this.k7 = new Uint16Array(aE.fh), this.a4c = new Uint16Array(aE.fh), this.a4a = new Uint8Array(aE.fh), this.a7a = new Uint16Array(aE.fh), this.dv = function() {
			this.a4h.fill(""), this.a2R.fill(""), this.a7R.fill(0), this.nf.fill(0), this.jb.fill(0), this.jd.fill(0), this.jc.fill(0), this.je.fill(0), this.hY.fill(0), this.a1W.fill(0), this.hm.fill(0), this.hC = new Array(aE.fh), this.hQ =
				new Array(aE.fh), this.hR = new Array(aE.fh), this.g9 = new Array(aE.fh), this.su.fill(0), this.k6.fill(0), this.k7.fill(0), this.a4c.fill(0), this.a4a.fill(0), this.a7a.fill(0)
		}
}

function d3() {
	this.aHb = function(player) {
		aH.ne(player), aE.a3z++, ah.a7R[player] = 2, ah.a4c[player] = bl.a4q.aNe(), player === aE.fU && (aY.show(!1, !1), aX.aFZ(), bU.a3j.a4X()), ag.aAh(player)
	}
}

function ce() {
	this.le = null, this.lZ = 0, this.a8o = function() {
		for (this.lZ = 0, aC = aE.fh - 1; 0 <= aC; aC--) 0 !== ah.nf[aC] && this.lZ++;
		this.le = new Uint16Array(this.lZ);
		for (var fk = 0, aC = 0; aC < aE.fh; aC++) 0 !== ah.nf[aC] && (this.le[fk++] = aC)
	}, this.nK = function() {
		for (var hY = ah.hY, a1W = ah.a1W, a4a = ah.a4a, le = am.le, aC = am.lZ - 1; 0 <= aC; aC--) {
			var hI = le[aC],
				el = hY[hI],
				ly = a1W[hI];
			el <= bO.gB(ly, 4) ? al.e3(hI) : ly <= el ? 250 <= (a1W[hI] = el) && (a4a[hI] = 1) : a1W[hI] = ly - Math.max(1, bO.gB(ly - el, 1e3))
		}
		this.aQz()
	}, this.aQz = function() {
		for (var nf = ah.nf, lx = this.le, aGH = this.lZ, aC = aGH - 1; 0 <= aC; aC--) 0 === nf[lx[aC]] && (lx[aC] = lx[--aGH]);
		this.lZ = aGH
	}
}

function cf() {
	var aR0 = new Uint16Array(aE.fh),
		aR1 = 0;

	function aR5(aAo, aR3) {
		var eu = bi.l0();
		return 3213 <= eu ? 4 + bO.gB(100 * aR3, af.kj(aAo)) : (aAo = 1 + bO.gB(aE.kn, 300), eu < 357 ? 2 + bO.gB(100 * aR3, aAo) : eu < 714 ? 2 + bO.gB(100 * aR3, 4 * aAo) : eu < 1071 ? 2 + bO.gB(100 * aR3, 10 * aAo) : eu < 2142 ? 2 + bO.gB(100 *
			aR3, 30 * aAo) : 2 + bO.gB(100 * aR3, 100 * aAo))
	}

	function aR4(aAo) {
		return aE.lN || 4284 <= bi.l0() || bD.h6.kQ(aAo)
	}
	this.dv = function() {
		aR0.fill(0), aR1 = 15
	}, this.a9Z = function(rw) {
		var player = aE.fU;
		return !!bD.h6.sw(player, rw) && !(!bD.h6.sM(player, bD.h6.jK(player, aS.iF()), rw) || (player = rw, rw = bR.gH[0], !aR4(player) && aR0[player] + aR5(player, rw) > aR1))
	}, this.et = function(aAo, aR3) {
		if (!aR4(aAo)) {
			aR3 = aR5(aAo, aR3);
			if (aR0[aAo] + aR3 > aR1) return !1;
			aR0[aAo] += aR3
		}
		return !0
	}, this.ep = function() {
		bi.l0() % 100 == 99 && (bi.l0() < 1071 ? aR1 += 4 : bi.l0() < 2142 ? aR1 += 6 : bi.l0() < 3213 ? aR1 += 8 : aR1 += 10)
	}
}

function cn() {
	var aR6;
	this.lU = null, this.lT = 0, this.dv = function() {
		aR6 = [], 9 === aE.lL && this.aR7()
	}, this.aR7 = function() {
		this.lU = [0, 0, 0, 0, 0, 0];
		for (var aR8 = [254, 227, 167, 149, 102, this.lT = 0, 0, 0], aR9 = [0, 8, 24, 30, 46, 80, 256, 333], aRA = [0, 0, 3, 9, 17, 25, 150, 179], k = aE.l3, aC = 1; aC < aR8.length; aC++)
			if (k <= aR9[aC]) {
				this.lT = aR8[aC - 1] - bO.gB((k - aR9[aC - 1]) * (aR8[aC - 1] - aR8[aC]), aR9[aC] - aR9[aC - 1]), this.lU[5] = aRA[aC - 1] - bO.gB((k - aR9[aC - 1]) * (aRA[aC - 1] - aRA[aC]), aR9[aC] - aR9[aC - 1]), this.lU[0] = aE.fh - k - this
					.lT - this.lU[5];
				break
			} aE.lP = aE.fh - aE.l3, aE.data.numberTeams = (0 < aE.l3) + (0 < aE.lP), aE.data.playerCount = aE.a12 = aE.l3 + aE.lP, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.l3 + this.lT, aE.lP - this.lT]), aE.a8c.a8i()
	}, this.aNl = function(player) {
		aR6.push({
			player: player,
			hD: 14 + az.kK(20)
		})
	}, this.ep = function() {
		if (9 === aE.lL)
			for (var aC = aR6.length - 1; 0 <= aC; aC--) --aR6[aC].hD <= 0 && (ag.tB(aR6[aC].player, 0, ak.pr.a2n + ak.pr.a31), aR6.splice(aC, 1))
	}
}

function dM() {
	this.aRC = 37, this.aRD = 25, this.aNx = 4096, this.fv = 0, this.fw = 0, this.a22 = null, this.aBZ = null, this.aRE = null, this.aRF = null, this.fQ = 0, this.mapSeed = 0, this.aLz = !1, this.aRG = new aRH, this.xT = new aRI, this.aB7 = new aRJ,
		this.aJe = new aRK, this.aJf = new aRL;
	var aRM = {
		aRN: function() {},
		dv: function() {}
	};

	function aRV() {
		return {
			fv: bV.fv,
			fw: bV.fw,
			a22: bV.a22,
			aBZ: bV.aBZ,
			aRE: bV.aRE,
			aRF: bV.aRF,
			fQ: bV.fQ,
			mapSeed: bV.mapSeed,
			aLz: bV.aLz
		}
	}

	function aRW(gC) {
		bV.fv = gC.fv, bV.fw = gC.fw, bV.a22 = gC.a22, bV.aBZ = gC.aBZ, bV.aRE = gC.aRE, bV.aRF = gC.aRF, bV.fQ = gC.fQ, bV.mapSeed = gC.mapSeed, bV.aLz = gC.aLz
	}

	function aRP(aC) {
		return !(1 === aC || !bV.aIh(aC) || aC === bV.aRa())
	}
	this.dv = function() {
		this.xT.dv()
	}, this.a8 = function(map, aRO) {
		((map %= this.aRC) !== this.fQ || aRP(this.fQ) && aRO !== this.mapSeed) && (this.aLz = !1, this.aRG.aRN(), az.a8j(map), this.fQ = map, this.mapSeed = aRO, aRP(map) && (bV.xT.aB1[map].aRQ = aRO), this.aIh(this.fQ) ? (map = bV.xT.aB1[this
			.fQ], this.fv = map.j, this.fw = map.k, az.a8j(map.aRQ), ar.a8([this.fv, this.fw, map.nk, map.nh]), aRR(), aq.aRS(), ar.aRT()) : this.aJe.a8(this.fQ) || console.log("map not loaded: " + this.fQ))
	}, this.aRU = function(map, aRO) {
		var gT = aRV(),
			map = (this.a8(map, aRO), this.aRG.aRN(), aRV());
		return aRW(gT), map
	}, this.aJl = function(map, aRO) {
		var gT = aRV(),
			aRQ = az.aRX(),
			aRY = this.xT.aB1[map].aRQ,
			aRZ = this.aRG,
			aRO = (this.aRG = aRM, this.a8(map, aRO), this.a22);
		return this.aRG = aRZ, this.xT.aB1[map].aRQ = aRY, az.a8j(aRQ), aRW(gT), aRO
	}, this.a95 = function(canvas) {
		canvas && this.a22 !== canvas && (this.fv = canvas.width, this.fw = canvas.height, this.a22 = canvas, this.aBZ = this.a22.getContext("2d", {
			alpha: !1
		}), this.ij = this.aBZ.getImageData(0, 0, this.fv, this.fw), this.aRF = this.ij.data, this.fQ = this.aRa(), this.mapSeed = 0, bV.xT.aB1[this.fQ].name = aE.data.mapName)
	}, this.fP = function(aC) {
		return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aRa()
	}, this.aRb = function(aC) {
		return 2 === aC || 7 === aC || 9 === aC || 20 === aC
	}, this.aRc = function(aC) {
		return 1 === aC
	}, this.aRa = function() {
		return this.aRC
	}, this.aIh = function(aC) {
		return void 0 === this.xT.aB1[aC].aRd
	}, this.aJY = aRP, this.a94 = function(q4) {
		return 0 === q4.mapType ? q4.mapProceduralIndex < 10 ? q4.mapProceduralIndex : 10 + q4.mapProceduralIndex : 1 === q4.mapType ? 10 <= q4.mapRealisticIndex ? 22 + q4.mapRealisticIndex - 10 : q4.mapRealisticIndex + 10 : void 0
	}, this.aIi = function(q4, aRe) {
		0 === q4.mapType ? q4.mapProceduralIndex = aRe < 10 ? aRe : aRe - 10 : 1 === q4.mapType && (q4.mapRealisticIndex = aRe - (22 <= aRe ? 12 : 10))
	}
}

function aRH() {
	function aRp() {
		bV.aRG.ep()
	}

	function aRu(hI, aRt) {
		0 < aRt && (bV.aRF[hI] += aRt, bV.aRF[hI + 1] += aRt, bV.aRF[hI + 2] += aRt)
	}

	function iz(hI) {
		return bV.aRF[hI + 2] > bV.aRF[hI] && bV.aRF[hI + 2] > bV.aRF[hI + 1]
	}
	this.aDm = -1, this.a53 = 0, this.aRf = 0, this.aRg = 8, this.aRh = 32, this.aRi = 8, this.aRj = 32, this.aRk = [0, 0], this.aCo = [0, 0, 0, 0], this.jV = null, this.aRl = !0, this.aRm = !1, this.aRN = function() {
		-1 !== this.aDm && clearTimeout(this.aDm), this.aDm = -1, this.jV = null, ar.aRT()
	}, this.dv = function() {
		7 === ab.a59() || this.aRm || (this.aRl = !0, this.a53 = 0, this.aRf = 1, this.aRk = [bV.xT.aB1[bV.fQ].aRn[0], bV.xT.aB1[bV.fQ].aRo[0]], this.aCo = [bV.xT.aB1[bV.fQ].aRd[3], bV.xT.aB1[bV.fQ].aRd[4], bV.xT.aB1[bV.fQ].aRd[5], bV.xT.aB1[bV
			.fQ].aRd[6]], this.aRg = bV.xT.aB1[bV.fQ].aRd[7], this.aRh = bV.xT.aB1[bV.fQ].aRd[8], this.aRi = bV.xT.aB1[bV.fQ].aRd[9], this.aRj = bV.xT.aB1[bV.fQ].aRd[10], this.aRl ? this.aDm = setTimeout(aRp, 16) : this.ep())
	}, this.ep = function() {
		if (8 === ab.a59() && aI.ny()) this.aDm = setTimeout(aRp, 16);
		else {
			if (0 === this.a53) {
				var aRQ = az.aRX();
				if (az.a8j(bV.xT.aB1[bV.fQ].aRd[2]), ar.a8([bV.fv, bV.fw, bV.xT.aB1[bV.fQ].aRd[0], bV.xT.aB1[bV.fQ].aRd[1]]), az.a8j(aRQ), this.jV = ar.aRq(), this.a53++, this.aRl) return void(this.aDm = setTimeout(aRp, 16))
			}
			for (var hI, fW, aRQ = this.aRl ? 10 : 1e6, aRQ = bV.fw - this.aRf - 1 < aRQ ? bV.fw - this.aRf - 1 : aRQ, a1j = this.aRf + aRQ, ft = this.aRf; ft < a1j; ft++)
				for (var fr = 1; fr < bV.fv - 1; fr++) iz(hI = 4 * (fW = fr + ft * bV.fv)) ? this.aRr(hI, fW, 1) : (this.aRr(hI, fW, 0), function(fr, ft, hI) {
					return 1 < fr && iz(hI - 4) || fr < bV.fv - 2 && iz(hI + 4) || 1 < ft && iz(hI - 4 * bV.fv) || ft < bV.fw - 2 && iz(hI + 4 * bV.fv)
				}(fr, ft, hI) && this.aRs(fr, ft));
			this.aRf = a1j, this.aRf >= bV.fw - 1 ? (bV.aBZ.putImageData(bV.aRE, 0, 0, 1, 1, bV.fv - 2, bV.fw - 2), bi.e2 = !0, this.aRN()) : this.aRl && (this.aDm = setTimeout(aRp, 16))
		}
	}, this.aRr = function(hI, fW, eT) {
		aRu(hI, Math.floor(this.aRk[eT] + this.aCo[eT] * this.jV[fW] / 1e4) - bV.aRF[hI])
	}, this.aRv = function(hI, eS, aRw, eT, aCo) {
		aRu(hI, Math.floor(this.aRk[eT] + (1 - eS / aRw) * aCo) - bV.aRF[hI])
	}, this.aRs = function(mI, mJ) {
		for (var hI, eS, aRw, aDc = mI - this.aRh, aRx = mJ - this.aRh, a1k = mI + this.aRh, a1j = mJ + this.aRh, aDc = aDc < 1 ? 1 : aDc, a1k = a1k > bV.fv - 2 ? bV.fv - 2 : a1k, a1j = a1j > bV.fw - 2 ? bV.fw - 2 : a1j, ft = aRx < 1 ? 1 :
			aRx; ft <= a1j; ft++)
			for (var fr = aDc; fr <= a1k; fr++) iz(hI = 4 * (fr + ft * bV.fv)) ? (aRw = this.aRg + (this.aRh - this.aRg) * this.jV[fr + bV.fv * ft] / 1e4, Math.abs(mI - fr) > aRw || Math.abs(mJ - ft) > aRw || aRw <= (eS = Math.sqrt((mI - fr) * (
				mI - fr) + (mJ - ft) * (mJ - ft))) || this.aRv(hI, eS, aRw, 1, this.aCo[3])) : (aRw = this.aRi + (this.aRj - this.aRi) * this.jV[fr + bV.fv * ft] / 1e4, Math.abs(mI - fr) > aRw || Math.abs(mJ - ft) > aRw || aRw <= (eS = Math
				.sqrt((mI - fr) * (mI - fr) + (mJ - ft) * (mJ - ft))) || this.aRv(hI, eS, aRw, 0, this.aCo[2]))
	}
}

function aRR() {
	var vS = aRy(bV.fQ);
	vS && aRz(vS[0], vS[1], vS[2], vS[3], vS[4])
}

function aRy(fQ) {
	return 2 === fQ ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === fQ ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === fQ ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === fQ ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === fQ ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aRz(aS0, aS1, aS2, aS3, aS4) {
	for (var fr, ft, aOJ, aOK, a6P, aS7, j4 = aS0.length - 1, aS5 = bV.fv + bV.fw, fk = (aS5 *= aS5, aS2.length), aS6 = Array(fk), aC = fk - 1; 0 <= aC; aC--) aS6[aC] = aS2[aC] * aS2[aC];
	var aS8 = new Array(fk),
		aGy = new Array(fk),
		aS9 = new Array(fk),
		gC = ar.aRq();
	if (void 0 === aS4)
		for (aS4 = new Array(fk), aC = fk - 1; 0 <= aC; aC--) aS4[aC] = 0;
	for (aC = 1; aC < fk; aC++) aS8[aC] = aS6[aC] - aS6[aC - 1], aGy[aC] = aS3[aC] - aS3[aC - 1], aS9[aC] = aS4[aC] - aS4[aC - 1];
	for (fr = bV.fv - 1; 0 <= fr; fr--)
		for (ft = bV.fw - 1; 0 <= ft; ft--) {
			for (aOJ = aS5, aC = j4; 0 <= aC; aC--) aOJ = (aOK = (fr - aS0[aC]) * (fr - aS0[aC]) + (ft - aS1[aC]) * (ft - aS1[aC])) < aOJ ? aOK : aOJ;
			for (a6P = aS3[fk - 1], aS7 = aS4[fk - 1], aC = 1; aC < fk; aC++)
				if (aOJ < aS6[aC]) {
					a6P = aS3[aC - 1] + aN5((aOJ - aS6[aC - 1]) * aGy[aC], aS8[aC]), aS7 = aS4[aC - 1] + aN5((aOJ - aS6[aC - 1]) * aS9[aC], aS8[aC]);
					break
				} aSA(bV.fv * ft + fr, a6P, aS7, gC)
		}
}

function aSA(eT, a6P, aS7, gC) {
	a6P < 500 ? gC[eT] = bO.gB(gC[eT] * a6P * 2, 1e3) : 500 < a6P && (gC[eT] += bO.gB(2 * (1e4 - gC[eT]) * (a6P - 500), 1e3)), gC[eT] += bO.gB(aS7 * (10 * a6P - gC[eT]), 1e3)
}

function cp() {
	var aSB;

	function aSL(a6q, il, fr, ft, globalAlpha) {
		bV.aBZ.save(), bV.aBZ.globalAlpha = globalAlpha, bV.aBZ.imageSmoothingEnabled = !1, bV.aBZ.scale(il, il), bV.aBZ.drawImage(a6q, Math.floor(fr * (bV.fv / il - a6q.width)), Math.floor(ft * (bV.fw / il - a6q.height))), bV.aBZ.restore()
	}
	this.aB4 = 0, this.aB5 = 0, this.aB6 = 0, this.aB7 = 0, this.dv = function() {
		(aSB = new Array(bV.aRC))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eS: [220, 250, 255, 220],
			w5: [190, 220, 0, 0],
			g4: [170, 200, 0, 0]
		}, aSB[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eS: [25, 0, 100, 0, 25],
			w5: [25, 0, 0, 0, 25],
			g4: [25, 0, 0, 0, 25]
		}, aSB[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eS: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			w5: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			g4: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aSB[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eS: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			w5: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			g4: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aSB[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eS: [10, 10, 20, 10, 10, 170, 212],
			w5: [20, 20, 60, 100, 100, 110, 170],
			g4: [70, 70, 160, 30, 30, 60, 120]
		}, aSB[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eS: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			w5: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			g4: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aSB[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eS: [10, 10, 60, 255, 255, 200, 200],
			w5: [10, 10, 60, 255, 255, 200, 200],
			g4: [80, 80, 255, 255, 255, 200, 200]
		}, aSB[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eS: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			w5: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			g4: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aSB[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eS: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			w5: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			g4: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aSB[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eS: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			w5: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			g4: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aSB[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eS: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			w5: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			g4: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aSB[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eS: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			w5: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			g4: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aRS = function() {
		var aSK, aC, g3, gT, ij = function() {
				var ij;
				return bV.a22 = document.createElement("canvas"), bV.a22.width = bV.fv, bV.a22.height = bV.fw, bV.aBZ = bV.a22.getContext("2d", {
					alpha: !1,
					willReadFrequently: !0
				}), ij = bV.aBZ.getImageData(0, 0, bV.fv, bV.fw), bV.aRF = ij.data, ij
			}(),
			j = aSB[bV.fQ].j,
			eS = aSB[bV.fQ].eS,
			w5 = aSB[bV.fQ].w5,
			g4 = aSB[bV.fQ].g4,
			gC = ar.aRq(),
			fk = j.length - 2,
			aSF = new Array(1 + fk),
			aSG = new Array(1 + fk),
			aSH = new Array(1 + fk),
			aSI = new Array(1 + fk);
		for (g3 = fk; 0 <= g3; g3--) aSF[g3] = j[g3 + 1] - j[g3], aSG[g3] = eS[g3 + 1] - eS[g3], aSH[g3] = w5[g3 + 1] - w5[g3], aSI[g3] = g4[g3 + 1] - g4[g3];
		for (aC = bV.fv * bV.fw - 1; 0 <= aC; aC--)
			for (g3 = fk; 0 <= g3; g3--)
				if (gC[aC] >= j[g3]) {
					gT = gC[aC] - j[g3], bV.aRF[4 * aC] = eS[g3] + aN5(aSG[g3] * gT, aSF[g3]), bV.aRF[4 * aC + 1] = w5[g3] + aN5(aSH[g3] * gT, aSF[g3]), bV.aRF[4 * aC + 2] = g4[g3] + aN5(aSI[g3] * gT, aSF[g3]), bV.aRF[4 * aC + 3] = 255;
					break
				} bV.aBZ.putImageData(ij, 0, 0), bV.aRc(bV.fQ) && ac.w9() && bV.aRc(bV.fQ) && (ij = ac.xJ("arena"), aSK = ac.xJ("territorial.io"), aSL(ij, 5, .5, .5, .1), aSL(aSK, 2, .5, .45, .1)), bV.aLz = !0, bi.e2 = !0
	}, this.a8m = function() {
		for (var hI, fr, ft, aSM, iY, gV, aB5 = 0, j = bV.fv, k = bV.fw, gT = j * k * 4, aSN = aGX, aSO = bV.aRF, aC = j - 1; 0 <= aC; aC--) aSN[(hI = aC << 2) + 2] = aSN[gT - hI - 2] = 3;
		for (gT = 4 * j, aC = k - 1; 0 <= aC; aC--) aSN[(hI = aC * gT) + 2] = aSN[hI + gT - 2] = 3;
		for (aSM = j - 1, iY = k - 1, ft = 1; ft < iY; ft++)
			for (gT = ft * j, fr = 1; fr < aSM; fr++) gV = 1 - (aSO[(hI = gT + fr << 2) + 2] > aSO[hI + 1] && aSO[hI + 2] > aSO[hI]), aSN[hI + 2] = 6 - 5 * gV, aB5 += gV;
		this.aB4 = (j - 2) * (k - 2), this.aB7 = 0, bV.fP(bV.fQ) && (bV.aB7.aSP(), bV.aB7.aSQ(4, 5)), this.aB5 = aE.kn = aB5 - this.aB7, this.aB6 = this.aB4 - this.aB5 - this.aB7, this.aB6 && (bV.aB7.aSQ(6, 2), bV.aB7.aSR())
	}
}

function aRI() {
	this.aB1 = null, this.aSS = null, this.aST = null, this.xU = ["White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East",
		"Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Mare Nostrum", "Denmark", "Iberia", "Japan", "India", "Black Sea", "Italy", "Iceland", "Anatolia",
		"Falklands", "Antarctica", "Hong Kong", "Singapore"
	], this.dv = function() {
		this.aSU = [L(174), L(175), L(176), L(177), L(178), L(179), L(180), L(181), L(182), L(183), L(184), L(185), L(186), L(187), L(188), L(189), L(190), L(191), L(192), L(193), L(194), L(195), L(196), L(197), "Mare Nostrum", L(198), L(199), L(
			200), L(201), L(202), L(203), L(204), L(205), L(206), L(207), L(208), L(209)];
		var aSV = [120, 105, 92],
			cos = [12, 12, 60],
			aSW = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aSX = [140, 130, 120],
			aSY = [12, 12, 76],
			aSZ = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aSa = [130, 117, 106],
			aSb = [12, 12, 68],
			aSc = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.aB1 = new Array(bV.aRC + 1), __fx.customLobby.setMapInfo(this.aB1), this.aB1[0] = {
			j: 230,
			k: 230,
			nk: 1e3,
			nh: 2e3,
			aRQ: 173
		}, this.aB1[1] = {
			j: 800,
			k: 800,
			nk: 100,
			nh: 50,
			aRQ: 43
		}, this.aB1[2] = {
			j: 512,
			k: 512,
			nk: 128,
			nh: 32,
			aRQ: 0
		}, this.aB1[3] = {
			j: 960,
			k: 960,
			nk: 60,
			nh: 8,
			aRQ: 0
		}, this.aB1[4] = {
			j: 900,
			k: 900,
			nk: 100,
			nh: 5,
			aRQ: 0
		}, this.aB1[5] = {
			j: 1e3,
			k: 1e3,
			nk: 100,
			nh: 40,
			aRQ: 0
		}, this.aB1[6] = {
			j: 1e3,
			k: 1e3,
			nk: 100,
			nh: 20,
			aRQ: 0
		}, this.aB1[7] = {
			j: 1024,
			k: 1024,
			nk: 128,
			nh: 32,
			aRQ: 0
		}, this.aB1[8] = {
			j: 820,
			k: 820,
			nk: 200,
			nh: 100,
			aRQ: 0
		}, this.aB1[9] = {
			j: 1024,
			k: 1024,
			nk: 128,
			nh: 32,
			aRQ: 0
		}, this.aB1[10] = {
			aRn: aSX,
			aRo: aSY,
			aRd: aSZ
		}, this.aB1[11] = {
			aRn: aSa,
			aRo: aSb,
			aRd: aSc
		}, this.aB1[12] = {
			aRn: aSa,
			aRo: aSb,
			aRd: aSc
		}, this.aB1[13] = {
			aRn: aSV,
			aRo: cos,
			aRd: aSW
		}, this.aB1[14] = {
			aRn: aSV,
			aRo: cos,
			aRd: aSW
		}, this.aB1[15] = {
			aRn: aSX,
			aRo: aSY,
			aRd: aSZ
		}, this.aB1[16] = {
			aRn: aSX,
			aRo: aSY,
			aRd: aSZ
		}, this.aB1[17] = {
			aRn: aSV,
			aRo: cos,
			aRd: aSW
		}, this.aB1[18] = {
			aRn: aSa,
			aRo: aSb,
			aRd: aSc
		}, this.aB1[19] = {
			aRn: aSV,
			aRo: cos,
			aRd: aSW
		}, this.aB1[20] = {
			j: 1024,
			k: 1024,
			nk: 128,
			nh: 32,
			aRQ: 0
		}, this.aB1[21] = {
			j: 940,
			k: 940,
			nk: 80,
			nh: 8,
			aRQ: 0
		}, this.aB1[22] = {
			aRn: aSa,
			aRo: aSb,
			aRd: aSc
		}, this.aB1[23] = {
			aRn: aSX,
			aRo: aSY,
			aRd: aSZ
		}, this.aB1[24] = {
			aRn: [157, 136, 117],
			aRo: [16, 13, 68],
			aRd: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aB3: "[OG] Neutronian"
		}, this.aB1[25] = {
			aRn: aSX,
			aRo: aSY,
			aRd: aSZ
		}, this.aB1[26] = {
			aRn: aSV,
			aRo: cos,
			aRd: aSW
		}, this.aB1[27] = {
			aRn: aSa,
			aRo: aSb,
			aRd: aSc
		}, this.aB1[28] = {
			aRn: aSV,
			aRo: cos,
			aRd: aSW
		}, this.aB1[29] = {
			aRn: aSa,
			aRo: aSb,
			aRd: aSc
		}, this.aB1[30] = {
			aRn: aSa,
			aRo: aSb,
			aRd: aSc
		}, this.aB1[31] = {
			aRn: aSX,
			aRo: aSY,
			aRd: aSZ
		}, this.aB1[32] = {
			aRn: aSV,
			aRo: cos,
			aRd: aSW
		}, this.aB1[33] = {
			aRn: aSX,
			aRo: aSY,
			aRd: aSZ
		}, this.aB1[34] = {
			aRn: [210, 210, 210],
			aRo: [12, 12, 76],
			aRd: [240, 120, 1024, 45, 19, 30, 70, 8, 20, 3, 9]
		}, this.aB1[35] = {
			aRn: aSV,
			aRo: cos,
			aRd: aSW
		}, this.aB1[36] = {
			aRn: aSV,
			aRo: cos,
			aRd: aSW
		};
		for (var aC = 0; aC < bV.aRC; aC++) this.aB1[aC].name = this.aSU[aC];
		this.aB1[bV.aRC] = {
			name: ""
		}, this.aSS = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aSS[aC] = aC;
		for (this.aSS[10] = 20, this.aSS[11] = 21, this.aST = new Uint8Array(bV.aRD), aC = 0; aC < 10; aC++) this.aST[aC] = 10 + aC;
		for (this.aST[10] = 22, this.aST[11] = 23, this.aST[12] = 24, aC = 13; aC < bV.aRD; aC++) this.aST[aC] = 12 + aC
	}
}

function aRL() {
	this.t8 = new aSh, this.aSi = new aSj, this.aSk = new aSl(this.t8.aSm), this.aSn = new aSl(this.t8.aSo);
	var aSp = [],
		aSq = [];
	this.get = function(eT, aSr) {
		return (aSr ? this.aSk : this.aSn).get(this.aSs(eT, aSr))
	}, this.zn = function(eT, aSr, callback) {
		var aNq = this.aSs(eT, aSr),
			buffer = aSr ? this.aSk : this.aSn,
			eT = buffer.get(aNq);
		if (eT) callback(eT);
		else if (function(aNq, aSu) {
				for (var el = performance.now() - aSu, fy = !1, aC = aSq.length - 1; 0 <= aC; aC--) aSq[aC].ek < el ? aSq.splice(aC, 1) : aSq[aC].aNq === aNq && (fy = !0);
				return fy
			}(aNq, this.t8.aSu)) callback(null);
		else {
			for (var aC = 0; aC < aSp.length; aC++)
				if (aSp[aC].aNq === aNq) return void aSp[aC].aSv.push(callback);
			var q4 = {
				aNq: aNq,
				aSv: [callback]
			};
			aSp.push(q4), this.aSi.zn(function(t8) {
				if (m.e8 && t8.aSz) return t8.aSz;
				return "https://" + b1.z.a4P() + t8.mO
			}(this.t8) + aNq, function(aJg) {
				aSp.splice(aSp.indexOf(q4), 1), aJg && function(aJg) {
					var t8 = bz.t8;
					return aJg.length > t8.aT0 && aJg[0] === t8.eC
				}(aJg) ? buffer.et(aNq, aJg) : (aJg = null, aSq.push({
					aNq: aNq,
					ek: performance.now()
				}));
				for (var ia = 0; ia < q4.aSv.length; ia++) q4.aSv[ia](aJg)
			})
		}
	}, this.aJh = function(eT, aSr) {
		for (var aNq = this.aSs(eT, aSr), aC = 0; aC < aSp.length; aC++)
			if (aSp[aC].aNq === aNq) return !0;
		return !1
	}, this.aSs = function(eT, aSr) {
		return eT + "-" + this.t8.aSy[eT] + (aSr ? "p" : "") + ".bin"
	}
}

function aSl(aR1) {
	var a0x = [];

	function aT1(aNq) {
		for (var aC = 0; aC < a0x.length; aC++)
			if (a0x[aC].aNq === aNq) return aC;
		return -1
	}
	this.get = function(aNq) {
		var aNq = aT1(aNq);
		return aNq < 0 ? null : (aNq = a0x.splice(aNq, 1)[0], a0x.push(aNq), aNq.aJg)
	}, this.et = function(aNq, aJg) {
		var aC = aT1(aNq);
		0 <= aC && a0x.splice(aC, 1), a0x.push({
			aNq: aNq,
			aJg: aJg
		}), aR1 < a0x.length && a0x.shift()
	}, this.size = function() {
		return a0x.length
	}
}

function aSh() {
	this.aSm = 16, this.aSo = 8, this.aT2 = 15e3, this.aSu = 5e3, this.aMG = 5e3, this.aSy = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], this.mO = "/maps/", this.aSz = null
}

function aSj() {
	this.zn = function(a54, callback) {
		var aT3 = new XMLHttpRequest;
		aT3.open("GET", a54), aT3.responseType = "arraybuffer", aT3.timeout = bV.aJf.t8.aT2, aT3.onload = function() {
			var aT4 = 200 === aT3.status && aT3.response;
			callback(aT4 ? new Uint8Array(aT3.response) : null)
		}, aT3.onerror = aT3.ontimeout = function() {
			callback(null)
		}, aT3.send()
	}
}

function aRJ() {
	this.aSP = function() {
		for (var hI, fr, gT, aSN = aGX, aSO = bV.aRF, j = bV.fv, aSM = j - 1, iY = bV.fw - 1, hD = 0, ft = 1; ft < iY; ft++)
			for (gT = ft * j, fr = 1; fr < aSM; fr++) aSO[hI = gT + fr << 2] === aSO[1 + hI] && aSO[hI] === aSO[2 + hI] && (hD++, aSN[2 + hI] = 4);
		aq.aB7 = hD
	}, this.aSQ = function(aT5, aT6) {
		for (var aSN = aGX, j = bV.fv, aSM = j - 1, iY = bV.fw - 1, id = 0, ft = 1; ft < iY; ft++)
			for (var gT = ft * j, fr = 1; fr < aSM; fr++) {
				var fO = 2 + (gT + fr << 2);
				aSN[fO] === aT5 && (! function(fO, id, aT5, aT6) {
					var fk = 1,
						aSN = aGX,
						fm = ad.aMw,
						a6c = [fO],
						aT8 = id >> 8 << 1,
						aT9 = 255 & id;
					aSN[fO - 2] = aT8, aSN[fO - 1] = aT9, aSN[fO] = 5;
					for (; fk;) {
						for (var a6d = [], aC = 0; aC < fk; aC++)
							for (var fZ = a6c[aC], fn = 0; fn < 8; fn++) {
								var fo = fZ + fm[fn];
								aSN[fo] === aT5 && (aSN[fo - 2] = aT8, aSN[fo - 1] = aT9, aSN[fo] = aT6, a6d.push(fo))
							}
						fk = (a6c = a6d).length
					}
				}(fO, id, aT5, aT6), id = (id + 1) % 32768)
			}
	}, this.aSR = function() {
		for (var aSN = aGX, j = bV.fv, aSM = j - 3, iY = bV.fw - 3, aTB = 12 * j, ft = 3; ft < iY; ft++)
			for (var gT = ft * j, fr = 3; fr < aSM; fr++) {
				var fO = 2 + (gT + fr << 2);
				2 !== aSN[fO] || 2 === aSN[fO - 12] && 2 === aSN[12 + fO] && 2 === aSN[fO - aTB] && 2 === aSN[fO + aTB] || (aSN[fO - 2] = 1 | aSN[fO - 2])
			}
	}
}

function a8l() {
	(a26 = void 0 === a26 ? document.createElement("canvas") : a26).width = bV.fv, a26.height = bV.fw, a8p = a26.getContext("2d", {
		alpha: !0
	}), a8q = aGX = null, a8q = a8p.getImageData(0, 0, bV.fv, bV.fw), aGX = a8q.data, bD.th.a6M(aGX)
}

function aRK() {
	function aTH(aB1, q4) {
		for (var canvas = document.createElement("canvas"), p3 = (canvas.width = q4.j, canvas.height = q4.k, canvas.getContext("2d", {
				alpha: !1,
				willReadFrequently: !0
			})), ij = p3.getImageData(0, 0, q4.j, q4.k), a2T = ij.data, src = q4.a2T, fk = src.length, q4 = aB1.aRn, aB1 = aB1.aRo, aTJ = q4[0], aTK = q4[1], aTL = q4[2], aTM = aB1[0], aTN = aB1[1], aTO = aB1[2], aC = 0; aC < fk; aC++) {
			var ia = aC << 2;
			src[aC] ? (a2T[ia] = aTJ, a2T[1 + ia] = aTK, a2T[2 + ia] = aTL) : (a2T[ia] = aTM, a2T[1 + ia] = aTN, a2T[2 + ia] = aTO), a2T[3 + ia] = 255
		}
		return p3.putImageData(ij, 0, 0), {
			canvas: canvas,
			p3: p3,
			ij: ij
		}
	}
	this.aTC = new aTD, this.a8 = function(fQ) {
		var aJg = this.aTE(this.xs(fQ));
		return !!aJg && !!(aJg = bz.aOs.a0n(aJg)) && (function(fQ, q4) {
			fQ = bV.xT.aB1[fQ], fQ.j = bV.fv = q4.j, fQ.k = bV.fw = q4.k, bV.aRE = bV.aRF = null, fQ = aTH(fQ, q4);
			bV.a22 = fQ.canvas, bV.aBZ = fQ.p3, bV.aRE = fQ.ij, bV.aRF = fQ.ij.data, bV.aLz = !0, bV.aRG.dv(), bi.e2 = !0
		}(fQ, aJg), !0)
	}, this.aMK = function(fQ) {
		fQ = this.xs(fQ);
		return !!(fQ < 0 || this.aTC.get(fQ)) || null !== bV.aJf.get(fQ, 0)
	}, this.zn = function(fQ, callback) {
		this.aMK(fQ) ? callback(!0) : bV.aJf.zn(this.xs(fQ), 0, function(aJg) {
			callback(null !== aJg)
		})
	}, this.aTF = function(fQ, callback) {
		this.zn(fQ, function(aMK) {
			aMK || new aTG(L(210)), callback(aMK)
		})
	}, this.aTE = function(eT) {
		var pV;
		return eT < 0 ? null : (pV = this.aTC.get(eT)) ? (bJ.fB.a0i(bJ.fB.a0g(pV)), bG.aD) : bV.aJf.get(eT, 0)
	}, this.aJj = function(fQ, aJg) {
		aJg = bz.aOs.a0n(aJg);
		return aJg ? aTH(bV.xT.aB1[fQ], aJg).canvas : null
	}, this.xs = function(fQ) {
		for (var h = bV.xT.aST, aC = 0; aC < h.length; aC++)
			if (h[aC] === fQ) return aC;
		return -1
	}
}

function aTD() {
	this.get = function(eT) {
		return 0 === eT ?
			"-VDY-vw1-6zbu-6AMQJRpRKfEM7eQmbR5owiTu26wOjKrtxkM9uayvQ_efKD14ubaPeRhpILFeB0-WPFC_QqLj-lY3XnW13lDhz4mqWxZfFSjPJgwpDQqFT97XxiAD49R_eqHtvmDOq0MG1rRazWgKf5E08ijtr5FUvypm5MGg4U6aMKFJXh6e-VeXOUKC_EWV9lACkoLW1Rcqz446g5rGPGs-TdVVtGIjRPEHUvI5dsCSsao3GsD0etpb5TLxILgIIBBxSUPeJEAb3EKVglBtS3w74sxuQzB2ta8DqS2QacWzlE_MgBVbQCP1eZTXRFxIPMxfOeIBCg9_05a7MoCJV_Ln2HG62_q1A3SWZGg2XNW1O89tHNN5lkePHgU5RQ62UB67lcKtwoeuey9AGd8Bb7ls1tmBp0X60SvfFvXsK-zGQAqeI6-yn8fD3zN1cqLG0MS7-NN7_jtyFcVGKZo8baF9DFiUE7HGaIzH7Hl60Y2I0bD38R4sZwU14AFjBFWMT03oaEa2aLp_V0eFF2bP-9zg9x7x9PeEPgBfIXT_8ct13i75SDgO6iq23Ohb8KOajcaD9II6er8d1dwWtT-FxUQ1di_ztYQFzEF8s6Su9fVtx59eVh_J43DO75ew8cqnudvrj46xElktuqe0TP-15Zh0WviTWELb_lfEaCJKJEM_sRfT-zbNCINEgtRlsO3YXWbnyXGhF0RWQfCINU4Q9fdyvOCpEODKnAamjPz38L_YQ5jr0A49xc9lItKxApCdc8wOKXtRvjYssJAqCF0RB8opCS6BGeGnGM90uhHeUEYLhVDmogyR9rYW3wad7xoaXCFswWtJOrzMyBKSfdKcDAqb-gG-ylhsklPeGBpIqotv7V2zI5EA8RZPmLPFK0Q8yaVecipsoJTRGykB8qwBsKwd2CgOoMzpyZZUx20PbFeZLDYOSXTnVWX1tDVsounxQWY13RPjbwRPIm62tb7-N4jk_9ryCxXiPF8vZMFu3o62c2szAGy4kBBE74caS63GsSeDARjmQdXEBGIvn78m8X1mus43NsqLgHuFylq414iT7ZvY0MjxqT4KRe4-M6aeiuU6vnjx_nTwFyRopNx7PvIbeQh6RVB8CNFCzRvriYh0Ys2wsuT6SHsIOUNlSfRXE82PgYTBRxeuD5nev9RjBXSFA5kdsbqGChmOCfaHRaTKz_WFERjZWTdTgAo-k2zzQ7t0vT0_ZW1IqZh5FNhMsy4nVxyDOFoXvz3saUQ_hot8_Tav1jMa6PlL-zyQqMDaZAJP3IakxH8ypRfm5GRZYKfjXtlcvFfgIr3Ns-cioOeED3LvlRKV7BsCmBy5uUq_NRQ36WYXxnnnQglIp8LULegHZGQPj-LkBVuYJS-7wtoKjr0fSIw6B9-uC3Tuh_5DlUadc76SpJ1mBznH6e_QbNvwL3XEkQ7QM_ERn8TNx0MeG6CmTSoxaXVy8Ixeu0OJZcbqZiQXWSmvrA85Yu1OaZj0GG6mufcgWNAiZWSyGfeiHyZUIq-9POXOpz60aqVmbl3FyOVjuOsWHROF-6WpnAkZd7qcsM7hdK11Bks5xL_0WGn2ypwO0thItqK5isHHuMBciOTcsep21C7MK2gH6tMB9jVDIbQmqgb9-3zIEDALuTae_n2LyZy25Mn6WjfwWoiwkbF3PaByrvSSY2HvorM5k0TlAIYUSZxnmeRq6GJpL_Z5pBJkcCdLYsqVKfjs7-ibBvsX26F5yLp1JGlADdVAW7gwdPQqu6vwijMkxP7hG6GU3uNk1JD5ToFDDV8JLa2yn-jBVA_depAbV4pKRjEISdZ4rmcFQOxAiF67GsAlG-8PuIIoWOCNTboQlUn0aBFeUyWs5umHUUkzQpZuT7KgrQAptZ2c7F6cpY44zOX8kOv3dt7FtbLQEGTJ1HmpyO0BqWvm2FR1kBsqgA65OujMgmTei6GiF58eUM4d_j6-bAIfKyla7VpKYiJFL0awE59GLTZEjv4EFlDpAqOg371kDH9qx8BctTkxUJGw279Tqi93b-qosZ_gN5ZPZcIgZq28HBeBxMZ2fpULj-lvKthjREMxFXxDN-rQ-9da5pFl7isAnjyeK_VL49Ypk3RGdFZElc9HjGSsuCMJQL4F7c56UIAqyAT4LY6izdAlnKopCBMb5KJLvCLH0zCv_5gvbOHPu1eYuPL0ymAluupB7g1SWpKeHmoAENN-hMH1oLEVog2OdvCpA4h3l-jQ9UAnQFaZ_EJzdVHcY8suj3755cw-PfnLHmJIbQSNTMAJIx1viSHtgEviYQy4rvIXMlQ50Oh2qSmHVd6GY22NPNzU5yGbuamJxofZkiVFv2V_xIxluSWEiQCh4b8I047yvkVI8LI20SRy_3n8WfRHD017bCeUbQ8exyfMx428aKe6l_Vf1pyA8GMvFXSP7Q5_328AenJUnDkHVSKpPscdaRpboMmw_O-rOol_0BGNkmm8XSUzzzzxx_CkgNZbdyYtJjhJtLypGpyBXGjCK_w3uTetqi_t_4tJpbIeIiAmzHoYhUN9oizoWpVNZxhFqa9ajUn2CC_zIwsw_u0nsp-AXYia2LugZtip6zOIgVAx0WDDfU_jsXR1lDD_T2XN2k3D3E9DgRyCiHNXuEO3l3WQ1N2iPWBsnOCHSl1F0vlJXNNd0aRQrCSJ8gf-epow3ToJ3cu-Gz9wto4WAoWN6mD1JxXf_wIJxqHDd3WEFtpnJYQRQPQzfE6oSfR9B35Ilm8HQNZTltdhxAf8KTM-ZzXZsFgbvsekerw2g0so0Qh-qPuUrkXM5KxsnPkCE9DrWDEccawcKGnZZD167XWCwLyjk_nmRNBAbY4RPKdvFcOH43erQgS4hPicHEXvozkoG888IcQ8Zz0MssN1VsGbuoxSOfA-YGd7m3rQmWHQM6CgLS91RmSwInXAskdLqC7CGyhVjEwpT8Y7dKe-PdgXgEr2qfKuvIwvmxpMlIV1dL4Rtz1KTBNzntq_96cuaC0m-PHclXSWEUKSIPjFZWL1-iDeiUuA2QOvxK8iUNOy6YAczYXB3CRk4nM41apGaaCZJqUaZXQwGGd36bYpMC8ux5Rq3-uhY3ljwjrYz2I1-SEK8Kr4CAIMlmiW8ZDUMUNtAvcGfuI-W-lNau7S87mnBJs7z6A52L1rDFeliep4NVcyz04TD9oIHvWkoWT4p8-zLPv0mj1kJEbMjlpFWtCah2hW5W655A3-KRP6v8yyotD3mY4XuRlZHx1S5NDkITF5Q20bJARF_8r2ir2iX4nR63eAU0fWF-_n18GmQqsMXINGvZx338nCSb8D74rGRxsiApd6RPmSaMkck7lEeXWcT8R8QQinNazSLIzYzy-6n_wczlTM8W3CzZ8Tv6S-7zWJMesvH6Xnb2MxEg2TOVExCAv5wLmKj5BbvCNhdlWAbT1Jwf7VlocxkVqZMEhe0zCM8JXWOXnWPx3_Zs7G9YNv1_kBXshIA6F58iznUqhWHz3YAO1VlAJo3CNGkD8JQW4xcL-Oz0I-uhqpAxD9QiE5F7yFo2NWu4QsdGqzzcQsNXNACZFnHhdwnDEq22nutfQoMak3XoUEC6be-5k7KV7Yj5GO7Qqur_4CtKtHh5LkFbwPfPBtYWdd4RaEDtyhQel27qHDUpVKY0TfLUk40k5cEvUGsVjVH-n0cEKKeRtLkA39Iz4aIntGjnZrHgv7mvhCxG1MXMldx8w895w3WlSnkyqN6LrDCMMlFEecfCfnEpKpi5Pl890OQ3Q9XgAsyzS0nspn36Mm7MhY8d1Oj6ykmIvWLat24fHYrm6jALb7_8hSyWw69A4SttcZF6ixpDB_gMGJhwotqRwxbyApzNyI0I1alx8jw_v-u1SKW_AmR7GONBSlGBT2YVF0qNqLpfGj4U-FiBuQGd5S5hhvfa_rm_RWhEdre7OsLxX19_Ua3oOav-RJJILBs1PAN1wzGTbPQmVYQ7Dvqj908To7E5MKt2zOJmaK5FmErrurFIy2Xw5Fyp4SGoK_tjkmrwBrI92OBqkSEJyXaU6Q6YboUOJQxGhWBd75OFSMYL6uZmj3Qc7d8Kw1JZJJ6K_vQ2_TYPmii23N5uWi_dlcJrH720sd9tOP1C7W6ezvONM78ZaFCBkY8LHXf4OCOJ1LTjv1FIpZeaHK9Fs4aFKHng5Zgch9oSi_5IOQVf4grRipYiCNdrBn3e2qRVUwQsW6gDXjBKamVTOhbHbVbs5tDjXi7SoPgWpQG04h7-9jt4gB-Y3ZSFPCpE28Vuf_IzOiI6pLaysHZlSZDLC9JcXdB3l1T4EHikksN1GdkZJHvAPYm8wnJb6mOodZjx1VUAhooiUVOIxEiBPjnwGyCLJATJUPdm4MDn41_k3QvGTOG8WfctH6oLorGWfvZ-Xa6xffNlLm5xA4KxIuKNtOLUZtDuDes_2P7NbjA40LAtnrdGqwSHZIoWuV1oEflBd3a0zVikG5Vd3983NlXmeUTiQ17iMKkdu_YTtCTCf70ilprqAWNrQxzY5ZqcziLfRYEISpn7nzSqcrBZ7eWWPUexpz6KnUCnYmI2-OJUglKalGMmlAIsE9pazTBxT0Yp6v6UQet-SKCwxdeBLozSseP8pC6LS1572hNp62kAc4_5zFhxcmZjA7csXkst_8vxmhJGTV" :
			10 === eT ?
			"-VN402V1-6zzzHh0vRIzzz7xY-ef54b0-jwSUTcQmwBNm6Nji6vH5XPAMeIdi-9rPCkBZPOxMpuHH22j9Smd4DXk-t3Pkr1eHg5XLWLUns6yHl8925R73FM4q-5kSPIx7TeGt8vbrGwhu-fSo2cwbzcOuNOAyAVzPPoaa4mmy_D3NatbDQiIKbtttIYYINb-mNKyqtGa-9o0tXOzFYfHIt5UbmhL6y7rQA37i2NUj4gXWBHdUeR4_pygqLtmfG_b2Ze62McU3N535cKogpFBVcgKllakt1ZqfaF6VsC0vkJpayA1LjEDEO36TXtuk1aaZDZ3SefUzd_xKddKJoZrZlPYINN4yhrz36h4x7Sq4XnalNO9S6oC01gl9TRJZm0zf_kbnCKsKy5xaE6Ri3H77YBuddmeFheLLXeN9qIGTbatHHQuFljsRM59weUd7Re0zy2-egRpCeJEyR5qDHpuAZWnd-Bjqiqyb2bTu929zOnFlbXC3Iqa2gHMcHTzKuGl7P-4BQ_K0ZOvla4A3nTyLFKEeWBbrv74E5Hobr9wX3OW8zYDttC1n1ZEJ2jfd8mEleNf_Sy7NP0u2K04eTzK3rGVyXElTWn6Rf4-KwAB1iNwjvln4Fqe2AMvoBcgaT09rT-ZlI3Unb4Z8YWW6TD-qWcY1F9Tc6dxHmIeCcDWaZPzHmAeie3P9wN88tA92yXFjNqIHmtujiMRxBVXfOLWgsyX8-kUwirovx3xfPMDoAEawgK5XpNKAvQcxD8HZmLlMDjioXc0nkM1umHmK1S86O8zBTmi10kJQp43WQgiNIglcXYMJHD90kMxxJ2jfRisToEMlStmLHtzP1cbJpx9mIY8UiPZydeOrezcnMp_2vQlsbZ5E-Ckm2k4wxoYDTpQfI3JyAEwUCGF5B6V5KloxdoFS7iQW4DUurrzQFwMMD7leEHU6q_N74MsY-JUhKJM6ViZnIp1lNowPolYmqwtvjRy-E-L9v7fEuZ-K0AmNVQeYOAjJYcPqzJyGjC45byfIHDeNnxGUH48vV6mjtw06mwtVnEMlbVF0epgH9E0R62EnK3vdBPB8Nq0hUI9CaWcpHQZcwxMqK5v2g5ba3NJKzqWpHWPcY91fTRYWxIyjtngVRdFT0jdKwSPgWDFg2PiLJ5pxWGq0m8GQfO5dl2SoVZve9GyVAHapQi33vgmL9UbaO1AOPu4QhjDUZuvzRU-z0MJEh6a8ygMCYnrgcsVjdvl-_Sz4j3IK17POFjb5NusSL9yMwbe9DXbEZvcjBdYTNG0Kb6fNy4WVtXHxHSIBVQ1Rb6mrArbEQTu-0MUXo8zJGQ8LEr-zue_CxLKrKLYG5XfLCikXOWbES78_i3V15rWrL3-Z3594KEFNElmA4F6x2iO6ZookgtY6ano5qIZJkM4UvNwv3yi5EwVUsPdm4NNCf8DgsdxRHSQE-xi9EcygBRtUdSzM1j_zjCGlLA-jWWd93U4t4sZNhPFcX3Wn-JkdZLfXt9BjIMJybH6jgoPqEWc4yPwXCnROY8ZV6pwFTI7gzwUgp8GYTO3ByB3sAG09W2NJotrVtJ1FD8Py1aXdZ97FfMMIRcoMbQqK96pzDAtwUr2eXNwGJ81n8KHg-7bICssd8M7ZHXOgxTdBSfjhMZo1b2iR5k5sN_NcteBLkKDGSMxJZuNO8OdPrBTXUDPEO8MACX7JsAlkgN5RkFoxIZkaBKKVi5xn3ktHWxUL_nZVf5_EcTqt13qKEjLzCeWL22dh90APbrddLCN4_sHl33OG4DxeI3fa6Dy_DbRNVL6BYwU1EWBl8yawCrsLEuZ3Bp1OmhfnhZm4CWxXs7qp6Ut7R4nWRDO6_EYrFTPri28_n-il7Fl6rjkTk_kq8ngrZoc7rLwcdWmG1u9blLZbS2iMWjbZdN2eJ49Pw-NPEPI7iMHl7QUN4sznqBI_PQcDNoAB6eEC3Px9ClwN4tQ7c3OCrhdGXghaxZtEwBBkhwh9y4KL4d_Ja20eiCUZEmYGQTabZQPHgaQR8Kq2SXQ34iAH_WRqW-F0bfK8vLaNnVjgrtsmn9eqkQ4yhvn6BpI67MkLbZ6NebJQjB5QS6uoEpYgVH4cXAwX46xAkbHbGzL_kcGfC9COQWNvwyPHYrxgK3hMUOZjJUUoHzPZlj37Ts8fDAhOdz6hqvtBHpNOoXQRVH9oC4X5x3DGNgP8_mT0ajgNP5v21edkD4W-zRj8KAO8LDj1ejhiQ2AtfoIEL-T6SrFsSfGCAt31rkSyQ7pALOg7hNzIgXSOsgWeFuN5rW2IT8hI9y5vIzhTqLBKfC8kMsOyECCYwOMpEmbWHQRECRDmI_B9p-yZGS6PmpuwVS_T8vQSBA-opyXoDbCWEG23Hr-HHaWsc_ARo6EYvbf-tGnBWnBZUb1ZzLanzW34A8cc-JI6uhtknm0UNJWAly9pn4KyJKwpN-ckkiOCrBeCyEiaB_VIb35MpHrSP6NdpcenspoORtJ9H8TIHyZpKb3RJGwaJiHHP8sdBXXxeIdsiALydmgMJxx_pslQteW9y3O8nefPBddCLL8bx3y4XUQGQFXhLUx2_Ue5FM_g4AE8zrxiSa8W2Y2gz9h_bv4w1vyT0iVHzwXs9kxb2giHLJgKTmCTdM5KkVL10NgDiPr9Vns7q7fE7tfLYislp-wePl3ww9vew3vKOZeRQAZlKsX1VGtiaJhEJ9EkjuSRpJtS_FQE7izTTrAJryzvMrJeim0FWZ3iIo0Z6vs7jX_aQ7OfLkkKzv5eeIZOjJx7pbNw2EKTbA7Px9Yo8wUmM1qPpGKXeKHXqnyauqkE3a77zhKYJuc7U2GRDTYisjcHFK9HcoOUenMGGjdBwTm6aq09P1FzGZoziTbIL9XApuSjFWLzS9jCqVJ17Tq3x0lUhzWW6r1DxdAqTgrvgZ5-xFN3qRih9lY6Rg-nc1NAU5MMKcY1lYRQYfuh25EJ8PazQr1Mcnmp863yv3UXlfV8w_l4gZ0oMG0XBz3lwg65RCn6YJzMsAXt2_3D2K93EwXqgsYHTjCpYumB8lHd7Lzr0zlq-Q6WHD_b4qlTU20WXYm3GH45Y70Un2kdXfhUBw3WPiW3mQtLMYXJv_3TZ05D9olM37H9IyceF89kaOPdEinLxoK0MrpuhPlEabBblclnE5y8RknKsP4MtkJ10a2cYg_SDOHoYeERpLeNs5FTnRfKWZUtFjJxH7A5Opwqp93AUIcEsvsdGZZQncbRbXmthS6AKsRyOM3BsjE7uxIUaJofLF7eopfOGTcexKOtNzbDzfA7498VQnxrGTNJ2GyB-tuhqpjVdtE6I_RjnxqAn6qulv4IjqxrKmAandf0DLbmRS0LkBH6ShxsMSeViM7sjiZ9lDCtY92DrYgCnreF0kCzNHI91JlaKU2mJPJyXc8aQHl61j-kcCf6aVbkQSsnsKTtmIOD7XV6tQ123fHRpdSeEPwrLYenw-fD2WxDVLc8vR1jRz_NnBWPWelDD9OLjiXcyhsnoLb8htj88RIT-9s_SL6tkC36v6xF93VKmvNPXb3ERymaD_yU8ObK-rDgwRmq_aelJHmMoccyQqic-awT0dpIt2gltxkmWHI_q752J7n8_v5idnoEZLdNOXXG0uLR5UhR8EZrwGNYGQ7qffjA2rolVADH0-7Exe_mp25rgA4wbv_ABG9xAY49igV-qf7h164eJOQENu2lDzORskVAD-N_mzZadcQEd0cfKlTudulJIDoSX9Mn3TNx-Kqm81mjTwl_UOumjs9kbP_s0i9g1CM1aO5IMJYIEoRAkN6vY9oW__cG6zK9Z6snLvSGDaDMpltVqb_PS0yZUeNyVO7USD2qYk4K60K6w7QjO5FzXfDwcp2hq5uv1STG1BDQtQT-LocVB8h5_j-0f6ikl2koH117YQkIT_qAjrJweXkXkIWbR99lWn_s4c7WCyoI-nknsJQXAxxsnIATkz-2AiJu4F2n4ikqkXXCiRlejE2EQDOPMd4UVMalTHRRe01z-LgaFt831Njp2wkWSWnCXd5-LDnUdecdiJlXLbzLIUXn4byaFonT6zsO8o8jN6dVScQ0917XlT4iHp1lW_YsNLdvTxMr0pMUS4pRE25VS_lFmJg5sk2rRMOsEKDfb0zOg8YKcLtIDdIziqea-1WviS3ODt2VnCOgWYNM2le9QmBlTVW8l-FGAKIlSJCqWbUVAdFiVumMv9Spiu5xXFjsIsHftdZ8gJ0oUZNQ-DU5AWxwGxSF5KY7AhFjB9pYFAFAelME5ElA6ncZ6qcLbN64KjSWgdBX5e83dT_eAcYSyDJ7L1llB6tLaywEoRtoWUEQuqe7inLL-trCZivi4-JcGzXDfSM_T10rTqLRapq1uno1AyNkZUQPzI4gZleSBAtx42R8EUaonQgV99cH17TQPSkGXtkbQrXQTofa3oDddW60MhxZYpO29s808tpcmW2h7Iv6-r4TnTOHGxMHE88573rJ3HtBdi4aPDC-lagQIcRHh89HRJytCXSOa4VL5DYcnrmSafOoN28XutPZfe4Q8-GBnhwWrPWJgl2hKU3leVgA8KzFsr13SAlYF_J24Z3RFa8-qOYnITbVhA-iSHjp53mYaaAq7hsWrtD6YkkfA5ODVVZPto7rIPhR6MLpGDFV156fe_6jCmRxGIP8HbaTb9YPXcxHl0LAfM0yuqgxDWvKji_i75OREyE0JYwQ1YbAIacZiN35qaEdR518x5FhVRYGByxwSzNkqKYAtGcEyGxgo4kvUwlDxfolhr6bylBuqZ6C_jfdijNpgjcsYyaVU-elpP5GZvw9c2WOWOWO_hW7EGDgtsPpRZASBFXnm2P1RKti6cDjJFv1Xp5HcXcs-4xNa06-GhRZ2NFAqbB0OkByvPMjJ6HmKogu60MtMjLQLzIPOW8SYJHKxXwyz4hqVIe-sBw-eNJ3KY6Vu847iBQgKk9ttczQl49dym3GOzCu21ZFDafMnOeDfhLHTKukduWb48m8ayj4UOLuup7mi_MhRTmXtv_o5OeFd4-J8TwaLMbWXuRwUEyX052qcK13qGbJK8vJrf1-wxyWzXz7fQPaSRAnsCbRBO-7T-zR6Pu2O7AW_iG5cAap_JbMSv1nJHAAsR9UdYR8Id8wVaGFc8nLT1YSEVK3txJwKtKCsijAnjXD6Q5Eb9JlyVrI6b8wNWgkcUJbAlpMvWMtFLwcJaE24R9UUX8SDnZq1vLAIbfqLHebm-Y6MgGWJBA9YV2HLsqWoJktZrX8KPTTMRFfIrrDfoqEx3z3rCkKnErZuAvNzZrl6TQMU1K7pmS52dIIlciE1P8LfTtMtnAiQICS4Q9PLSSduTV0xMI4VLjX5-lnodCPG_ziYpu2Qgf6eqsgMzQicJtmzSA-lEcVjGFSWOK31b1f4CYvveyK77AyiXt7G3oZpNca41eSX1vCS40zdIRrpk3JdfoVICwgmQiAFrautECXlMiradHhTYBhDKWn8HxRpVMJl--50-AlK9UpKQzwPotvftsOhjETZqlPpnCMWY_69j9S_2ZF4SR-oPolsMjkZxYoalxv6DDdYNX2w-d8DIfAk6wgYpoq9LaQioakWHBIf-mwyV0fXJuUwD82WQ0Da_b8HZMP13Bz9eQoK25eua5jbKQPvfIubVeGAwhJOv6FEk0il2I43WtNXZQN6uibYTaxxEX6FTMgTIRwO3jOsORCVBUNerFg_OwYCxph9-aqQ8I4LV7CA90l_ni2fxQJQ2UQFqHmUfgkSHuUgHPJ91sMNq8yFsXw2S3l3e5cJj5Z7Es_BOVs2Ur2rRnI0Wg9wGZG_wRyCeHbPt_0ka1gJHsKZAs508rKXKtHkytG436yByue_1n5MoZwdhMR6GmQknTkT04FX4iaXcJjUxxEu-RYU5zMPEHH2yhDjPth5emAbpJpb-Be24VnTqerQGjKElbfzbAero1RHZyswPha2Nxo5xWjQuTDzeBJfThGVb4XywivO2ZdyrMeoIUROisqXISkUO2xgzkPLSQBAOSRa32S7l2MGXvwB0jguMbAshVMndIwm4ca6PJrHeECgyMOq7x4mVfs8jyAGMM33Ko2sLLJ57Vxejdw9vBShSeZlK0GEk7p-_qnt1yRNf8IuTQx_5GWVss-mfn26FnzKTmjJJOpkhQmdIyFzlggFfhuceziNqtPHCUCyL7xRbgZ7iadMfzQsw_qusA4CFoBHdNXa-LIJX3J3Y4YvEzEj-s8VP_OUtk_inUqgdZ0D6s8VYbEdmZMgeGOtOjdL5TDEoDv6IPQrCjARnzK-chb1qXvMf0XG_HqHMV10e9H816YYvy3PGykxxhSMHEaNCidzBTxxrPtoMZdlM-s_cSky7pvu2R59c5cCLIcyjGtdnqwbx2pwmAVxmD_Uv5gKAQaPNEIcUaJZm3N7TBX62yanzDg_1rEKBCCUUpr2Grdg_yV0PxXJWqW2xxJTO67y6iSfjhRfh6P33mZ6NMYV-h_SOa-OUO1Ymokqbltmqd81Tk6GuSVADj8g0xB6h_pl-bUjanrW1HmdkbjdNd2ivsl5RC8tBCuFeHU6idAjstV9AOZ_57p6dFdwx44impXE4b5ZHqgewJnZsF18j4mFX8TlmQYAemoNJN_OLcVdXxS6eK-UOqMBdenHNgNvSGkqw4GMhJhavnN2tVzEVqaXhGpVNWJgeP6Gg2Y_qPbiLuhb1JrTsga9IVmTkYphuWQHgssQT1V10CZTjnomqhI9tlza0FphM_l0U1Z_ei071pAhHqp6WMv_9mlZTfhfLqdd0oV6du8Kon95FhQlU7dh0zMh_z3Mck_s2PcMUwnNM480VpFsqw-G5kJmu0hqjanU1OamHOSEg-8irsOQXSXrtn3s_N7slabDvyop50KUoMwPh2KLv8XkpY-HckmKGll_y1ZHyZZxKuZU4dC8jliO5NJALdSkbWCji8NJ7V92BKIl_i6s-a2ls6E9VdlOOt8yy00amo8Cuws-0eFqFHVUAAZP57jQkaoZhz7EbGnQmHIJ8yBXkiGLQKDIIJcIcV8cRQmqgUN81jfxXuBc93ARl6DroGoQjP4uUNDRcIrDFQQsXCRW2dwTsc89UGO_QYtJyDg4r7F87qj9jgdVnKGpJWVl99nk2XjmscoRVkPHtLZR9UJkBUEHBjF8IzaEkdbpt2u2n72hTLsNjTwc2CMVos7fQi3G479LQcDq6VVoXeBr-8O7FQqU0jM4rAd1gylbn2bY76o1TJz5VI9DZycNrbF28X7imObCwA4mADeINedof_4pse2ZPA5U0h-vgWDrqtzzCeRzqe26b3ITzW52gUkoKC6tPDaAXyOBK1C-bHxumuhLE06_WvbZCI3NWIfk-BL0TysZ6he2W2hx0MpbElDh1u29LR0veGaYeY5s_lZ6TEfhjCHESZdR9NmxV2lUZeBqZ-DYW_Hy6NO3mTqwdGvZcwXPVX5ATsgy1Cst5caN4FWgK7n32PmgUMLbI12T33Qg_ze7kFuKPEH8VUiLbwIM5Y6hSauw-UwwIN9s30zGuP_mX9FzLMTYrjL-Tq2L8uOpld06sgi8n23LD0v7Tl_pgp7DDvDQ4evKBNMY8ORqM_qyBYVqX6t2S9eKO3akKqGOfDK-EX4Kp1BtmAqh2eDcXX0VusoCqqwcDGT87Fb6C3i1Nur8PCZW-A0ZPlNhT9muc8AJK_5RTOqvfFKZ44BiSR0-RSmvv1jNJfXgONIRRdevNz-a7Rr_o2DrvHQTd2zrzw3TUliOGSkGqPa0YvpIv6pBR5wfw1jKc8Hn4FrwXNCU2OikfJxxpFwLk0yBiiRRN_QRguSy4DenPdqIFXOv8pnG-SOaLFkOn-8w54WXfxidcnD-nqTK3V9zI-PL9UeXa_g9_iuQR6TgPQoajfB5KrRQGOkuQU74gQetYcFeQ1TlDRAA9DHDwbDhukEYeCbJdNlmXPUfY6Cc91CK2PW0WF79wmRTJrzwwMC_zothQHa1cflH4t4PT3arNcUYIcth-bMn6-N8Kqi-u1lbZ9Srf1jn8ymInAjTad55mjzdZnRqlAnU3o1YZ85YvLj_V9o2BzZTuyJKWSjOiVNjhlCPmh8Lbq4yaFfoCFg3i7DCNPf0OzQqGVqnNQ6ebUPUHTLiAx3Mz2w3tVxTc4YsuPDnNG6aZSZxXstnFl6IDG-EMZ-3dxXAQd4GDDYFmQi9rAuF9aJEt0Tc2owuuL32Fmbx_8hMghfuluo70Q7H1fuPHe5WBHejrknyNrASGyQzx3_8xUnfvVVhfH5cKIUBGetNfcXE3F_vyJ3ydG5KNYcXKqyRbAKs0hIvX13Yxbzxux8ioyvzjkYr4T2GCmVM4hSVu2_7oYbeOlZ2cG2I8TCtxlhM6LhucmMy6dT66rBQSEVNm26kdWy13hSWnQvnqbO-mk_E-ULPxYwQ_JHo_1UezKpLW2DBzuJiMy2j6gPsy67Rlmd13VLq9rAD1HZezHXUnv5jqPLc9zJNtrctiSmfBKPStBR-gLzHGw5niSOKyCTdgwrvVT2mFkYUxIQYnJv-ZCT0QD_vdfED2Tc9LV5hTv6zkDCpuA_4Afj5M9j0SxCXt3EN36pAbZY9Wdy1nsGpiSJhoUKXETAkAKIPGF57BVZ7vd_xyT3Q7cfJ5iz0yZUjM7x_A1Q5idgUDYn8pSPxJXmO9FwNIoSf3iiNlnC14vzc1XVGHMBBHc49rSPDA0b8wywCdCFLK-9TIu-8dK_bj0IbV_YU61sEpay7LPycuATMoj6ZA6anTUw0K1gvfNgiu0Mp4MVEXRlBdKncG84gEO0XVU4UvSVg35ka6cJPzHsOf7P5XXNUiAk49dtHjxg3nUalRpSxgv8qj0fxIbH7ymuhDOTcLS2bjmrBy24HcLz0ufh6WSU5WvyzLTuzOjEf_XH2MzaBQ8qytkQd6FZmGgrghdIvuDtmeIvWxODyXQpI915T3MeACLTqaaJPQv2Hh2ms1orP9-V-LVAEu38rnzUm6yeqbOKc4QuBDcjFLf6YorQ21LM1bsYrI-LKNF7ACijPqBA2m-7Pl98J3nDNzIDOsgbHbIqAKvY5QPgDQvxrUqxq6YaienSVTDxTPrAGfXf6IPvRnBbHB5UFWdNdagXPMLTAgkjZ5tyJ76p_cuvRveJ7QvGd-74NKESlVI6g4Sqadovay5WHd41U1v8X7nCKAZmJ4PS8GEbAJ4OTgMbO_IIHUVlYoAjKDgBLC2F3Y-FIX3snihq1qY57gthWXP_fjJBEu20_Cv1lBs6jAbhsOs7uFBPPc_BdythXdPPg7usWVEc91lv7wBn9-2_uoB5wNpsadsMImW3SjyRDsr5Dkd7-MRmoTTpAZTA4_b7ZBhxvG3MT9YKeRO3pDQZSGkHjvHKnC7gDaY1se75TwpiwwcMKSDET3scyzDthjicY0PRXkj1LLpzGoZZVrbK2-bi3ICEiZnOiYLyYEyNVewmzaOE-BWqHh7R0t0nRrDeQRbNDcOzTTmE9FRwObQv7diGyRypa5-3-toJ18AytqDdE7IydA9WSZtnbXyv_Kc7nJMrNmHJiMzShcI6xiEgTePd5ieIEjbCd2Y37M6HWiYECVgBRWY7B0-1rGLWLzpIEDfj5y1CpV8je3y4EXwW-xpfSZl4aMCenXZZsVWhNsBZ-ogde8q3MvAMLsk_2lcVN9TTG7V5O-KCoi2QVxu9t2szNqN_H34F5-VRkW6a1L4S5KkOkhQ1F97fivmrTAxR2rkklJDuWgj7gFqb4wGV4z2JCMdMoaIlCWipVNTKA6E9Trq9DW7B2YToAa9a087gQyCBXIHA7KGm4RJLzr6KAoB4TzzYB_AsfHxwYVWAkVmHC_PwIj3MxSbgC25heXoLl3t_tuloyg7YZCxo4sNLEedQ6iTOsuKTOWf1UFTp3HbhPf1uJmNv3k5tiF8U65dFaDR5k6Hb_mfrGZ53TVymfkmskTLOnn0KCiFAB6CI5CR1La64ebef4c8SHwlRrkPZlwAlcDjqcReTESxGaqKgH3Htf1yZRjiGjwMrU27lqjy4EriS-yD8_RFtT5rsgNRnhQm25hBt5zTu1az4OBKhxofKPH6t8Fl-RNl-y8YUzSsB3sUJ3IwRLbsB56G6F_VaQhpubbsZp0TiBL8cWSOcoE1uyaiJRKQq8uZKFQu2zCyj1I5ILHjajG9rMViaEF1W0u1oapueZYGvAdWOc4FGG28upzHKj0iRmEweCXke0Wjjaq5Ac_2AP86WlMtjfwHwhhZXlP6dvHbIk0ey88JMD38Fgc5gmgJ84WrWL8NJRS6yX9PIxgHG5JAG97jVkm7lP10VZlRvAT8lfbak_rEztsOv4hykC8qz7TH15CJ7GwguVTCdHVhv9Jy7ZNZIfe9nBVhxL6wex1Pm8dmdcBJ1MnIlw-Uzkl2QvstVKKit53VYKj0pQjficN6AAYDQtWZ80cZUbMltUAVYjnIutyFMu57QuS9zHZ-qY_3_Ae40hmu06OAZnDTHD8kbcJT63r88EavwWlBwmtyb0oEHPaZ5ZFSPcK48mdvrEDg8L-UR8gH2tJBB3NaXDBu3VfgtuCiwBFY-2RwXGWl1ihAQ09SpemMgqdK7vCZpentZgTtTl19w_07lq6e6Qi8vFRcaQ74aMApY205E6f4TpKVpzowiW8DyuavtzUrH1E-Pygj89J8lRhwsA0jfaUD8e4S8FCM82BoELv4cDfH9NLuIIZMBmKOZ--" :
			null
	}
}

function cq() {
	var gC, j, k, max, aTP, nh, aTR, aTS, aTT, aTU, aTV, aTW, aTX, aTY, aTQ = 1e4;

	function aTf(aTe, nk, fk) {
		var aC;
		for (aTR[0] = aTe, aC = 1; aC < fk; aC++) aTR[aC] = aTR[aC - 1] + nk, nk = aTR[aC] >= aTQ ? (aTR[aC] = aTQ - 1, -nk) : aTR[aC] < 0 ? (aTR[aC] = 0, -nk) : (nk += 16384 <= az.random() ? nh : -nh) < -aTP ? -aTP : aTP < nk ? aTP : nk
	}

	function aTh(fr, ft, aTi, fk) {
		(aTi ? function(fr, ft, fk) {
			var aC;
			for (aC = 0; aC < fk; aC++) gC[ft * j + fr + aC] = aTR[aC]
		} : function(fr, ft, fk) {
			var aC;
			for (aC = 0; aC < fk; aC++) gC[ft * j + fr + aC * j] = aTR[aC]
		})(fr, ft, fk)
	}

	function aTl(value, fk) {
		var aC, aQd, fO, kI = value - aTR[fk - 1];
		if (0 != kI) {
			for (aQd = 1 + bO.gB(Math.abs(kI), fk - 1), aQd = kI < 0 ? -aQd : aQd, aTR[fk - 1] = value, fO = (fO = fk - 1 - bO.gB(Math.abs(kI), Math.abs(aQd))) < 1 ? 1 : fk - 2 < fO ? fk - 2 : fO, aC = fk - 2; fO <= aC; aC--) aTR[aC] += kI - (fk -
				1 - aC) * aQd;
			(kI < 0 ? function(fk) {
				var aC;
				for (aC = fk - 2; 1 <= aC; aC--) aTR[aC] < 0 && (aTR[aC] = -aTR[aC] - 1)
			} : function(fk) {
				var aC;
				for (aC = fk - 2; 1 <= aC; aC--) aTR[aC] >= aTQ && (aTR[aC] = 2 * aTQ - aTR[aC] - 1)
			})(fk)
		}
	}

	function aTo(a6c, a6d, fk) {
		for (var aC = 0; aC < fk; aC++) a6c[aC] = a6d[aC]
	}

	function aTp(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aTq(a9S, gap, iZ) {
		aTS.push(a9S), aTT.push(gap), aTU.push(iZ)
	}
	this.a8 = function(a7t) {
		! function(a7t) {
			var aC;
			for (j = a7t[0], k = a7t[1], aTP = a7t[2], nh = a7t[3], gC = new Int16Array(j * k), max = k < j ? j : k, aTR = new Int16Array(max), aTS = [], aTT = [], aTU = [], aTV = new Array(j), aTW = new Array(k), aC = j - 1; 0 <= aC; aC--) aTV[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aTW[aC] = !1;
			aTX = new Int16Array(j), aTY = new Int16Array(k)
		}(a7t),
		function(fk) {
			var aTe = az.random() % aTQ,
				nk = az.random() % (2 * aTP + 1) - aTP;
			aTf(aTe, nk, fk)
		}(max), aTo(aTY, aTR, k), aTh(0, 0, !0, j);
		var fr, ft, a7t = gC[0],
			fk = max,
			nk = az.random() % (2 * aTP + 1) - aTP;
		for (aTf(a7t, nk, fk), aTo(aTX, aTR, j), aTh(0, 0, !1, k), aTp(aTX), aTp(aTY), aTf(gC[j - 1], aTX[j - 1], k), aTh(j - 1, 0, !1, k), aTf(gC[j * (k - 1)], aTY[k - 1], j), aTl(gC[j * k - 1], j), aTh(0, k - 1, !0, j), aTV[j - 1] = aTV[0] = !
			0, aTW[k - 1] = aTW[0] = !0, aTq(0, j, !0), aTq(0, k, !1), ! function() {
				var aTs, a9S;
				for (;;) {
					if (aTs = function() {
							var aC, aTs = aTS.length - 1;
							for (aC = aTs - 1; 0 <= aC; aC--) aTT[aC] > aTT[aTs] && (aTs = aC);
							return aTs
						}(), aTT[aTs] < 5) return;
					a9S = aTS[aTs] + bO.gB(aTT[aTs], 2), (aTU[aTs] ? function(fr) {
						var fk, aTv, aC, aLS = 0,
							aTw = 0;
						for (; aTw < k - 1;) {
							for (aC = aLS + 1; aC < k; aC++)
								if (aTW[aC]) {
									aTw = aC;
									break
								} fk = aTw - aLS + 1, aTf(gC[fr + j * aLS], 0 === aLS ? aTX[fr] : aTR[aTv - 1] - aTR[aTv - 2], fk), aTl(gC[aTw * j + fr], fk), aTh(fr, aLS, !1, fk), aTv = fk, aLS = aTw
						}
						aTV[fr] = !0
					} : function(ft) {
						var fk, aTv, aC, aLS = 0,
							aTw = 0;
						for (; aTw < j - 1;) {
							for (aC = aLS + 1; aC < j; aC++)
								if (aTV[aC]) {
									aTw = aC;
									break
								} fk = aTw - aLS + 1, aTf(gC[ft * j + aLS], 0 === aLS ? aTY[ft] : aTR[aTv - 1] - aTR[aTv - 2], fk), aTl(gC[ft * j + aTw], fk), aTh(aLS, ft, !0, fk), aTv = fk, aLS = aTw
						}
						aTW[ft] = !0
					})(a9S), aTq(a9S, aTS[aTs] + aTT[aTs] - a9S, aTU[aTs]), aTT[aTs] = a9S - aTS[aTs] + 1
				}
			}(), fr = 0; fr < j; fr++)
			if (!aTV[fr])
				for (ft = 0; ft < k; ft++) aTW[ft] || ! function(fr, ft) {
					var value = gC[ft * j + fr - 1] + gC[(ft - 1) * j + fr],
						aBT = 2;
					aTV[fr + 1] && (aBT++, value += gC[ft * j + fr + 1]);
					aTW[ft + 1] && (aBT++, value += gC[(ft + 1) * j + fr]);
					gC[ft * j + fr] = bO.gB(value, aBT)
				}(fr, ft)
	}, this.aRq = function() {
		return gC
	}, this.aRT = function() {
		gC = null
	}
}

function aN5(g3, g4) {
	return 0 <= g3 ? bO.gB(g3, g4) : -bO.gB(-g3, g4)
}

function kZ(gC) {
	return gC * gC
}

function aAU(g3, g4) {
	return g4 < g3 ? g3 : g4
}

function aFv(g3, g4) {
	return g3 < g4 ? g3 : g4
}

function aD7(g3, gC, g4) {
	return gC < g3 ? g3 : g4 < gC ? g4 : gC
}

function aTy(gC, fk) {
	for (var eu = bO.gB(gC + 1, 2), aC = 0; aC < fk; aC++) eu = bO.gB(eu + bO.gB(gC, eu), 2);
	return eu
}

function aP5(gC, fk) {
	return gC < 1 ? 0 : aTy(gC, fk)
}

function aTz(o6, o7, vo, aCr, oJ, oK, vp, wU) {
	return !(o6 + vo <= oJ || o7 + aCr <= oK || oJ + vp <= o6 || oK + wU <= o7)
}

function aU0(o6, o7, vo, aCr, oJ, oK, vp, wU) {
	return o6 <= oJ && o7 <= oK && oJ + vp <= o6 + vo && oK + wU <= o7 + aCr
}

function aU1(gC) {
	return Math.floor(!!gC * (1 + Math.log2(gC + .5)))
}

function c6() {
	this.gB = function(g3, g4) {
		return Math.floor((g3 + .5) / g4)
	}, this.aU2 = function(g3, g4) {
		return Math.floor(g3 * (g4 + .5))
	}, this.sqrt = function(gC) {
		return ~~Math.sqrt(gC + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.it = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aU3 = function(gT, gV, gX) {
		return Math.max(Math.min(gT, gV), gX)
	}, this.aU4 = function(aU5, aU6, fr, ft) {
		fr -= aU5, aU5 = ft - aU6, ft = 0;
		return 0 == fr ? ft = 0 <= aU5 ? Math.PI : 0 : (ft = Math.atan(aU5 / fr), ft += 0 < fr ? .5 * Math.PI : 1.5 * Math.PI), ft
	}, this.log2 = function(gC) {
		return Math.floor(!!gC * (1 + Math.log2(gC + .5)))
	}, this.log10 = function(gC) {
		return Math.floor(Math.log10(gC + .5))
	}, this.aU8 = function(aGT, aU9, aUA, aUB, aUC) {
		return aUA - aUC < aGT && aGT < aUA + aUC && aUB - aUC < aU9 && aU9 < aUB + aUC
	}, this.a1K = function(aDX, aDZ) {
		return aDX * aDX + aDZ * aDZ
	}
}

function dr() {
	this.t8 = new aUD, this.aUE = new aUF, this.aOs = new aUG
}

function aUD() {
	this.eC = 2, this.aT0 = 6, this.aUH = 1024, this.aUI = 3, this.aUJ = 65535, this.aUK = 2
}

function aUG() {
	var aUL = new aUM;

	function aUY(aUE, fr, ft, fn, aDO, aDP) {
		if (aUE.fr = fr, aUE.ft = ft, aUE.aUZ(fn)) {
			for (aUE.kJ(fr, ft, fn); !aUE.aUa(aDO, aDP);) {
				var el = function(aUE) {
					var el, im = aUE.history,
						aUd = aUE.aUZ(aUE.fn),
						left = aUE.aUZ(aUE.aUc(1)),
						right = aUE.aUZ(aUE.aUc(2));
					if (!aUd || left || right)
						if (aUd && aUL.aUR(aUE.aUe, im)) el = 0;
						else if (left && right) el = aUL.aUR(aUE.aUf, im) ? 1 : 2;
					else {
						if (!left && !right) return -1;
						el = left ? 1 : 2
					} else el = 0;
					return aUE.aUg(el), el
				}(aUE);
				if (el < 0) return;
				aUE.aQd(aUE.aUc(el))
			}
			return 1
		}
	}
	this.a0n = function(aJg) {
		var j, k, hD, aUE, t8 = bz.t8;
		return !(aJg.length < t8.aT0 + 5 || aJg[0] !== t8.eC) && (k = aJg[3] << 8 | aJg[4], hD = aJg[5], !((j = aJg[1] << 8 | aJg[2]) < 1 || k < 1 || hD < 1 || hD > t8.aUK)) && ((aUE = bz.aUE).dv(j, k), aUL.dv(aJg, t8.aT0), aJg = aUL.aUN(1),
			function(aUE) {
				var j = aUE.j,
					gC = -1;
				for (; aUL.aUR(aUE.aUS, 0);) {
					var g3 = aUL.aUT(aUE.aUU, 0);
					if (g3 < 0) return;
					var g3 = (gC += g3 + 1) % (j + 1),
						ft = Math.floor(gC / (j + 1));
					if (ft > aUE.k || !aUE.aUV(g3, ft)) return;
					var fn = aUE.aUW(g3, ft);
					if (aUE.aUX(g3, ft, fn) < 0 || !aUY(aUE, g3, ft, fn, -1, -1)) return
				}
				return 1
			}(aUE)) && function(aUE) {
			var j = aUE.j,
				gC = -1;
			for (; aUL.aUR(aUE.aUS, 1);) {
				var g3 = aUL.aUT(aUE.aUU, 32);
				if (g3 < 0) return;
				var g3 = (gC += g3 + 1) % (j + 1),
					ft = Math.floor(gC / (j + 1));
				if (ft >= aUE.k || 0 == g3 || j <= g3 || 0 === ft) return;
				if (!aUY(aUE, g3, ft, 0, g3, ft)) return
			}
			return 1
		}(aUE) ? {
			j: j,
			k: k,
			hD: hD,
			a2T: function(aUE, p7) {
				for (var j = aUE.j, k = aUE.k, aUh = aUE.aUh, aUi = aUE.aUi, a2T = new Uint8Array(j * k), eu = p7, ft = 0; ft < k; ft++)
					for (var hJ = ft * j, e = (0 < ft && (eu = a2T[hJ - j] ^ aUh[hJ] >> 1), a2T[hJ] = eu, aUi + ft * (j + 1)), fr = 1; fr < j; fr++) eu ^= aUh[e + fr] >> 1, a2T[hJ + fr] = eu;
				return a2T
			}(aUE, aJg)
		} : null
	}
}

function aUF() {
	this.j = 0, this.k = 0, this.aUh = null, this.aUi = 0, this.fr = 0, this.ft = 0, this.fn = 0, this.history = 0, this.aUe = null, this.aUf = null, this.aUS = null, this.aUU = null;
	var aUj = [1, 0, -1, 0],
		aUk = [0, 1, 0, -1];
	this.dv = function(j, k) {
		var t8 = bz.t8,
			aUl = Math.pow(3, t8.aUI);
		this.j = j, this.k = k, this.aUi = j * (k + 1), this.aUh = new Uint8Array(this.aUi + (j + 1) * k), this.aUe = new Uint16Array(aUl).fill(t8.aUH), this.aUf = new Uint16Array(aUl).fill(t8.aUH), this.aUS = new Uint16Array(2).fill(t8.aUH),
			this.aUU = new Uint16Array(64).fill(t8.aUH)
	}, this.aUX = function(fr, ft, fn) {
		var j = this.j,
			k = this.k;
		return 0 === fn ? fr < j && 0 < ft && ft < k ? ft * j + fr : -1 : 2 === fn ? 0 < fr && 0 < ft && ft < k ? ft * j + fr - 1 : -1 : 1 === fn ? ft < k && 0 < fr && fr < j ? this.aUi + ft * (j + 1) + fr : -1 : 0 < ft && 0 < fr && fr < j ? this
			.aUi + (ft - 1) * (j + 1) + fr : -1
	}, this.aUZ = function(fn) {
		fn = this.aUX(this.fr, this.ft, fn);
		return 0 <= fn && 2 !== this.aUh[fn]
	}, this.aUV = function(fr, ft) {
		return 0 === fr || 0 === ft || fr === this.j || ft === this.k
	}, this.aUa = function(aDO, aDP) {
		return this.fr === aDO && this.ft === aDP || this.aUV(this.fr, this.ft)
	}, this.aUm = function(el) {
		el = this.aUX(this.fr, this.ft, this.aUc(el));
		return el < 0 ? 0 : this.aUh[el]
	}, this.aUW = function(fr, ft) {
		return 0 === ft ? 1 : ft === this.k ? 3 : 0 === fr ? 0 : 2
	}, this.kJ = function(fr, ft, fn) {
		this.fr = fr, this.ft = ft, this.history = 0, this.aQd(fn)
	}, this.aQd = function(fn) {
		this.aUh[this.aUX(this.fr, this.ft, fn)] = 2, this.fr += aUj[fn], this.ft += aUk[fn], this.fn = fn
	}, this.aUc = function(el) {
		return 0 === el ? this.fn : this.fn + (1 === el ? 3 : 1) & 3
	}, this.aUg = function(el) {
		this.history = (3 * this.history + el) % this.aUe.length
	}
}

function aUM() {
	var aUn = 0,
		aUo = 0,
		aUp = null,
		yG = 0;

	function aUq() {
		return yG < aUp.length ? aUp[yG++] : 0
	}
	this.dv = function(aJg, a0B) {
		aUp = aJg, yG = a0B + 1, aUn = 4294967295;
		for (var aC = aUo = 0; aC < 4; aC++) aUo = 256 * aUo + aUq()
	}, this.aUR = function(aUr, aC) {
		for (var hI = aUr[aC], aUs = (aUn >>> 11) * hI, aUs = aUo < aUs ? (aUn = aUs, aUr[aC] = hI + (2048 - hI >> 5), 0) : (aUo -= aUs, aUn -= aUs, aUr[aC] = hI - (hI >> 5), 1); aUn < 16777216;) aUn *= 256, aUo = 256 * aUo + aUq();
		return aUs
	}, this.aUN = function(g4) {
		for (var gC = 0, aC = 0; aC < g4; aC++) {
			var p0 = 0;
			for ((aUn = Math.floor(aUn / 2)) <= aUo && (aUo -= aUn, p0 = 1), gC = 2 * gC + p0; aUn < 16777216;) aUn *= 256, aUo = 256 * aUo + aUq()
		}
		return gC
	}, this.aUT = function(aUr, p1) {
		for (var hJ = 0; this.aUR(aUr, p1 + hJ);)
			if (30 < ++hJ) return -1;
		return Math.pow(2, hJ) + this.aUN(hJ) - 1
	}
}

function dO() {
	this.z = new aUt, this.aUu = new aUv, this.vj = 0;
	var aUw = new Array(32);

	function aUz() {
		for (var fk = aUw.length, aC = 0; aC < fk; aC++) aUw[aC] = null
	}
	this.dv = function() {
		for (var aUx, aUy = document.body.firstChild; aUy;) aUx = aUy.nextSibling, !document.body.contains(aUy) || "DIV" !== aUy.tagName && "INPUT" !== aUy.tagName && "BUTTON" !== aUy.tagName || u.removeChild(document.body, aUy), aUy = aUx
	}, this.v = function(eT, a5E, a7t) {
		void 0 === a5E && (a5E = this.vj), bi.e2 = !0, 0 === eT && (0 === ab.a59() ? eT = 5 : a1.a2.setState(13)), this.uZ(), this.vj === eT && (a5E = aUw[eT].a5E, aUw[eT] = null), this.vj = eT;
		var ly = aUw[eT];
		if (!ly || 4 === eT || 7 === eT || 8 === eT || 9 === eT || 10 === eT || 11 === eT || 13 === eT || 15 === eT || 18 === eT || 20 <= eT && eT <= 28 || 32 === eT || 33 === eT) {
			if (0 === eT) return void aUz();
			1 === eT ? ly = new aV0 : 2 === eT ? ly = new aV1 : 3 === eT ? ly = new aV2 : 4 === eT || 9 === eT || 10 === eT || 11 === eT || 13 === eT || 33 === eT ? ly = a7t : 5 === eT ? ly = new aV3 : 6 === eT ? ly = new aV4 : 7 === eT ? ly =
				new aV5(u.z.aV6) : 8 === eT ? ly = a7t : 12 === eT ? ly = new aV7 : 14 === eT ? ly = new aV8 : 15 === eT ? ly = new aV5(u.z.aV9) : 16 === eT ? ly = new aVA : 17 === eT ? ly = new aVB : 18 === eT ? ly = new aVC : 19 === eT ? ly =
				new aVD : 20 === eT ? ly = new aVE : 21 === eT ? ly = new aVF : 22 === eT ? ly = new aVG : 23 === eT ? ly = new aVH : 24 === eT ? ly = new aVI : 25 === eT ? ly = new aVJ : 26 === eT ? ly = new aVK : 27 === eT ? ly = new aVL :
				28 === eT ? ly = new aVM : 29 === eT ? ly = new aVN : 30 === eT ? ly = new aVO : 31 === eT ? ly = new aVP : 32 === eT && (ly = new aVQ), ly.a5E = a5E, aUw[eT] = ly
		}
		ly.show(a7t)
	}, this.a58 = function() {
		this.iU() && this.aVR(this.a5D().a5E)
	}, this.aVR = function(eT) {
		this.iU() && (aUw[eT] ? (this.uZ(), bi.e2 = !0, this.vj = eT, aUw[eT].show()) : this.v(eT))
	}, this.uZ = function() {
		this.iU() && aUw[this.vj].uZ()
	}, this.y = function() {
		this.iU() && (aUw[this.vj].uZ(), aUz(), this.vj = 0, a1.a2.setState(13))
	}, this.z6 = function() {
		var ly;
		this.iU() && (ly = aUw[this.vj]).z6 && ly.z6()
	}, this.resize = function() {
		if (!this.iU()) return !1;
		aUw[this.vj].resize()
	}, this.hy = function(fr, ft) {
		var ly;
		this.iU() && (ly = aUw[this.vj]).hy && ly.hy(fr, ft)
	}, this.a5W = function(fr, ft) {
		var ly;
		this.iU() && (ly = aUw[this.vj]).a5W && ly.a5W(fr, ft)
	}, this.a5u = function() {
		var ly;
		this.iU() && (ly = aUw[this.vj]).a5u && ly.a5u()
	}, this.a5Z = function(mI, mJ, deltaY) {
		var ly;
		this.iU() && (ly = aUw[this.vj]).a5Z && ly.a5Z(mI, mJ, deltaY)
	}, this.a64 = function(code) {
		var ly;
		return !!this.iU() && ((ly = aUw[this.vj]).a64 && ly.a64(code), !0)
	}, this.ep = function() {
		var ly;
		this.iU() && (ly = aUw[this.vj]) && ly.ep && ly.ep()
	}, this.iU = function() {
		return 0 < this.vj
	}, this.a5D = function() {
		return aUw[this.vj]
	}, this.a9D = function(eT) {
		return aUw[eT]
	}, this.aVS = function() {
		return aUw
	}, this.removeChild = function(ov, a7M) {
		try {
			ov.removeChild(a7M)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aV5(data) {
	var aVT, aVU;

	function aVs(aKm, aVt) {
		if (aKm.ts === bE.re) return clearTimeout(aKm.aVu), 1;
		aKm.tv(bE.re), clearTimeout(aKm.aVu), aKm.aVu = setTimeout(aVt, 1e3)
	}

	function aVX(tV, xE) {
		if (!data.aVV) {
			if (data.aWN) {
				if (xE) return
			} else {
				if (!xE) return;
				if (data.a0L < 1e4) return
			}
			var aWU, xP = new tF,
				aWS = xE && 1e5 <= data.a0L,
				aWT = xP.tI(xE ? (aWS ? "⚠️ " : "") + L(317) : L(318)),
				aWW = (aWS && (aWT.style.color = "yellow"), xE ? xP.tJ(L(319, [bD.pZ.a8D(data.a0L, .01, 0)])) : ((aWU = new uN({
					value: data.aWV,
					eT: -1
				})).e.readOnly = !0, aWU.e.type = "password", xP.tS(aWU), xP.tS(new ul([new x(L(248), function(e) {
					return e.textContent === L(248) ? (e.textContent = L(249), aWU.e.type = "text") : (e.textContent = L(248), aWU.e.type = "password"), !0
				}).button, new x(L(245), function(e) {
					return bD.ta.a7K(aWU.e), bD.ta.yl(e), !0
				}).button]))), xP.tN(L(xE ? 318 : 320)).style.marginTop = "0.75em", new uN({
					value: "",
					eT: -1
				}, 0, 0)),
				aWY = (aWW.e.type = "email", aWW.e.autocomplete = "email", aWW.e.name = "email", aWW.e.inputMode = "email", aWW.e.spellcheck = !1, xP.tS(aWW), xP.tS(new ul([new x(L(321), function(e) {
					return b1.aW2.aWX({
						action: 3,
						pV: aWW.e.value.trim().substring(0, 63)
					}), bD.ta.yl(e), !0
				}).button])), xE && xP.tJ(L(322)), xP.tN(L(323)).style.marginTop = "0.75em", new uN({
					value: "",
					eT: -1
				}, 1));
			xP.tS(aWY), xP.tS(new ul([new x(L(324), function() {
				b1.aW2.aW3({
					action: 4,
					pd: "",
					value: Math.floor(+aWY.e.value)
				}), u.v(8, u.a5D().a5E, new vk(18))
			}).button])), tV.push(xP)
		}
	}
	this.show = function() {
		data.aVV && bL.aWq("account", data.pd), aVT.show(), this.resize()
	}, this.uZ = function() {
		aVT.uZ()
	}, this.resize = function() {
		aVT.resize(), aVU.resize()
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	}, aVT = new ys(data.username, [new x("⬅️ " + L(49), function() {
		bL.clear(), u.a58()
	}), new x(data.aVV ? "🔄 " + L(211) : L(212), function() {
		u.v(8, data.aVV ? u.a5D().a5E : void 0, new vk(25, {
			action: 0,
			pd: data.pd,
			vi: data.vi
		}))
	}, 0, 0, 1)]), aVU = new tT(aVT.yx, function() {
		var tV = [];
		aVX(tV, 1), tV.push(function() {
				var xP = new tF;
				xP.tI(L(294)), data.aWN && (xP.tN("✅ " + L(295)).style.marginBottom = "0.75em");
				var a4k = data.aWO;
				a4k < 1 ? (xP.tN(L(296)), 0 === data.aWP ? xP.tJ(L(297)) : 1 === data.aWP ? xP.tJ(L(298)) : 2 === data.aWP ? xP.tJ(L(299)) : 3 === data.aWP ? xP.tJ(L(300)) : 4 === data.aWP ? xP.tJ(L(301)) : 5 === data.aWP ? xP.tJ(L(
					302)) : 6 === data.aWP ? xP.tJ(L(303)) : xP.tJ(L(304))) : (xP.tN(L(305)), a4k = a4k < 2 ? L(306) : a4k < 61 ? 2 === a4k ? L(307) : L(308, [a4k - 1]) : a4k < 84 ? 61 === a4k ? L(309) : L(310, [a4k - 60]) : a4k <
					255 ? 84 === a4k ? L(311) : L(312, [a4k - 83]) : L(313), xP.tJ(a4k));
				{
					var tK, aVz;
					xP.tS(new vB), data.aVV && (tK = xP.tJ(), xP.tS(new ul([new x(bm.zV.y1(data.pd) ? L(164) : L(165), function(e) {
						return bm.zV.zi(data.pd) ? (e.textContent = L(164), aVz(1)) : (e.textContent = L(165), aVz(0)), !0
					}).button])), aVz = function(gC) {
						tK.textContent = gC ? L(314) : ""
					}, bm.zV.y1(data.pd) && aVz(1), xP.tS(new vB))
				}
				var qD, uM = new uN({
					value: data.username,
					eT: -1
				});
				uM.e.readOnly = !0, xP.tS(uM), xP.tS(new ul([new x(L(245), function(e) {
					return bD.ta.a7K(uM.e), bD.ta.yl(e), !0
				}).button])), data.aVV || xP.tJ(L(315));
				(data.aWQ || data.aWR) && (xP.tS(new vB), xP.tJ(L(316)), data.aWQ && ((qD = xP.tJ("• Muted")).style.color = "orange", qD.style.marginTop = "0.5em"), data.aWR) && ((qD = xP.tJ("• Redacted")).style.color = "orange", qD.style
					.marginTop = "0.5em");
				data.aVV && (xP.tS(new vB), xP.tN(b1.z.aVv("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", function(xP) {
					function click(e, aKo) {
						return bs.aKp(data.pd, aKo) && (bD.ta.yl(e), p6[0].tv(1), p6[1].tv(1)), !0
					}
					var color = bs.aKn(data.pd) ? 1 : 0,
						p6 = [];
					p6.push(new x(L(281), function(e) {
						return click(e, 1)
					}, color || bE.qp)), p6.push(new x(L(282), function(e) {
						return click(e, 0)
					}, color || bE.r4)), xP.tS(new ul([p6[0].button])), xP.tS(new ul([p6[1].button]))
				}(xP));
				return xP
			}()),
			function(tV) {
				var xP, uM, k, aW0, aKm, aW1;
				data.aVV && data.aW7 && ((xP = new tF).tI(L(240)), xP.tJ(L(234)), (uM = new uN({
					value: data.aW7,
					eT: -1
				})).e.readOnly = !0, xP.tS(uM), k = !1, aW0 = new x(L(241), function(e) {
					return k && b1.z.eq(0) && (bD.ta.yl(e), aW1(), b1.aW2.aW8({
						action: 9,
						pd: data.pd
					})), !0
				}, 1), aKm = new x(L(232), function(e) {
					if (e.textContent === L(232)) {
						if (100 * data.aW7 < data.a0L) return new aTG(L(242)), !0;
						k = !0, e.textContent = L(170), aW0.tv(0), aW0.button.style.color = bE.rS
					} else aW1();
					return !0
				}), xP.tS(new ul([aKm.button])), aW1 = function() {
					k = !1, aKm.button.textContent = L(232), aW0.tv(1), aW0.button.style.color = bE.qN
				}, xP.tS(new ul([aW0.button])), xP.tJ(L(243)), tV.push(xP))
			}(tV),
			function(tV) {
				var xP, tK, aGn, aWa, aW0, aKm, aW1;
				data.aVV || ((xP = new tF).tI(L(325)), (tK = xP.tJ(data.aWZ.length + " / 160")).style.textAlign = "center", aGn = !0, (aWa = new zF(0, 1, function(e) {
					e = e.target.value.length;
					tK.textContent = e + " / 160", 160 < e ? aGn && (aGn = !1, aKm.tv(1)) : aGn || (aGn = !0, aKm.tv(0))
				})).e.rows = 6, aWa.e.style.fontSize = "1em", aWa.zM(data.aWZ), xP.tS(aWa), 0 !== data.aWb ? (aKm = new x(L(326), function() {
					if (!aGn) return !0;
					u.v(8, u.a5D().a5E, new vk(29, {
						action: 1,
						pV: aWa.zN().substring(0, 160)
					}))
				}, 0, 0, 1), xP.tS(new ul([aKm.button])), xP.tS(new ul([new x(1 === data.aWb ? L(327) : L(328), function() {
					u.v(8, u.a5D().a5E, new vk(29, {
						action: 0,
						pV: ""
					}))
				}, 0, 0, 1).button])), xP.tJ(1 === data.aWb ? L(329, [data.aWc - 1]) : L(330, [data.aWc - 1])), xP.tJ(L(331, [data.aWd]))) : (aW0 = new x(L(241), function() {
					if (!aWa.e.readOnly) return !0;
					u.v(8, u.a5D().a5E, new vk(29, {
						action: 1,
						pV: aWa.zN().substring(0, 160)
					}))
				}, 1), aKm = new x(L(232), function(e) {
					if (e.textContent === L(232)) {
						if (!aGn) return !0;
						e.textContent = L(170), aWa.e.readOnly = !0, aW0.tv(0), aW0.button.style.color = bE.rS
					} else aW1();
					return !0
				}), xP.tS(new ul([aKm.button])), xP.tJ(L(331, [data.aWd])), aW1 = function() {
					aKm.button.textContent = L(232), aWa.e.readOnly = !1, aW0.tv(1), aW0.button.style.color = bE.qN
				}, xP.tS(new ul([aW0.button]))), tV.push(xP))
			}(tV),
			function(tV) {
				var xP;
				data.aVV && 0 !== data.aWb && ((xP = new tF).tI(L(332)), xP.tL(data.aWZ), xP.tS(new ul([new x(L(333, 0, "Report"), function(e) {
					return b1.z.eq(0) && (bD.ta.yl(e), b1.aW2.aW8({
						action: 5,
						pd: data.pd
					})), !0
				}, 0, 0, 1).button])), tV.push(xP))
			}(tV), tV.push(function() {
				var xP = new tF,
					aVw = (xP.tI(L(213)), xP.tN(b1.z.aVv("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(214), L(215), L(216), L(217), L(218), L(219), L(220), L(221), L(222), L(223), L(224), L(225), L(226), L(227)]),
					eS = data.aVx;
				return xP.tN(L(228) + bD.pZ.a8D(data.a0L, .01, 2) + "<br>" + L(229) + (eS + 1) + " / " + data.a0K + "<br>" + L(230) + aVw[function(eS, a0L) {
					if (eS < 10) return 0;
					if (eS < 30) return 1;
					if (eS < 60) return 2;
					if (3e4 <= (a0L = bO.gB(a0L, 100))) return 3;
					if (12e3 <= a0L) return 4;
					if (7e3 <= a0L) return 5;
					if (3e3 <= a0L) return 6;
					if (1e3 <= a0L) return 7;
					if (500 <= a0L) return 8;
					if (200 <= a0L) return 9;
					if (70 <= a0L) return 10;
					if (20 <= a0L) return 11;
					if (3 <= a0L) return 12;
					return 13
				}(eS, data.a0L)]), xP
			}()), data.aVV && tV.push(function() {
				var xP = new tF,
					uM = (xP.tI(L(231)), xP.tN(b1.z.aVv("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new uN({
						value: bm.buffer.data[147].value,
						eT: -1
					}, 1, void 0, function(e) {
						bm.rt.q0(147, aVz(e.target.value))
					})),
					aW0 = (xP.tS(uM), new x(L(21), function(e) {
						var gC;
						return uM.e.readOnly && b1.z.eq(0) && (gC = parseInt(bm.buffer.data[147].value, 10), u.aUu.send(gC, data.pd, function() {
							bD.ta.yl(e), aW1(), b1.aW2.aW3({
								action: 0,
								pd: data.pd,
								value: gC
							})
						})), !0
					}, 1)),
					aKm = new x(L(232), function(e) {
						return e.textContent === L(232) ? (e.textContent = L(170), uM.e.readOnly = !0, aW0.tv(0), aW0.button.style.color = bE.rS, bm.rt.q0(147, uM.e.value), aVz(bm.buffer.data[147].value)) : aW1(), !0
					}),
					tK = (xP.tS(new ul([aKm.button])), xP.tJ()),
					aVz = function(gC) {
						return tK.innerHTML = u.z.aW4(gC, bm.buffer.data[105].value, data.pd), gC
					},
					aW1 = function() {
						aKm.button.textContent = L(232), uM.e.readOnly = !1, aW0.tv(1), aW0.button.style.color = bE.qN
					};
				return aVz(bm.buffer.data[147].value), xP.tS(new ul([aW0.button])), xP
			}());
		tV.push(function() {
			var xP = new tF,
				uM = (xP.tI(L(244)), new uN({
					value: data.pd,
					eT: -1
				})),
				aW5 = (uM.e.readOnly = !0, xP.tS(uM), xP.tS(new ul([new x(L(245), function(e) {
					return bD.ta.a7K(uM.e), bD.ta.yl(e), !0
				}).button])), xP.tS(new vB), new uN({
					value: data.pd,
					eT: -1
				}));
			return xP.tS(aW5), xP.tS(new ul([new x(L(246), function(e) {
				u.v(8, u.a5D().a5E, new vk(25, {
					action: 0,
					pd: aW5.e.value,
					vi: 0
				}))
			}).button])), xP
		}()), data.aVV || (tV.push(function() {
			var xP = new tF,
				aW9 = (xP.tI(L(247)), new uN(bm.buffer.data[106])),
				customPasswordInput = (aW9.e.readOnly = !0, aW9.e.type = "password", xP.tS(aW9), xP.tS(new ul([new x(L(248), function(e) {
					return e.textContent === L(248) ? (e.textContent = L(249), aW9.e.type = "text") : (e.textContent = L(248), aW9.e.type = "password"), !0
				}).button, new x(L(245), function(e) {
					return bD.ta.a7K(aW9.e), bD.ta.yl(e), !0
				}).button])), new uN({
					value: "",
					eT: -1
				}));
			return customPasswordInput.e.placeholder = "Custom new password (optional)", xP.tS(customPasswordInput), xP.tS(new ul([new x(L(250), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.e.value) && u.v(8, u.a5D().a5E, new vk(15))
			}).button])), xP.tI(L(251), "0.8em"), xP.tJ(L(252)), xP.tJ(L(253)), xP.tJ(L(254)), xP
		}()), tV.push(function() {
			var xP = new tF;
			return xP.tI(L(255)), xP.tS(new ul([new x(L(256), function() {
				u.v(6, u.a5D().a5E)
			}).button])), xP.tS(new ul([new x(L(257), function() {
				bm.rt.q0(105, ""), u.v(8, u.a5D().a5E, new vk(18))
			}).button])), xP.tS(new ul([new x(L(258) + bm.buffer.data[105].value, function() {
				u.v(4, 0, new w(L(259), L(260), !0, [new x("⬅️ " + L(49), function() {
					u.v(7, u.a9D(7).a5E)
				})]))
			}, bE.r4).button])), xP
		}()), tV.push(function() {
			function aWB(eT) {
				aWA[0].tv(0 === eT ? bE.qZ : bE.qk), aWA[1].tv(0 === eT ? bE.qZ : bE.r4), aWA[2].tv(eT === tQ.tR.length - 1 || eT < 5 ? bE.qZ : bE.r4)
			}
			var tQ, aWA, xP = new tF;
			xP.tI(L(265)), xP.tJ(L(266)), bm.z.a03();
			return aWA = [new x(L(267), function() {
				var eT = Math.min(bm.buffer.data[117].value, tQ.tR.length - 1);
				eT < 1 || (eT = bm.z.a08(eT)) && (bm.rt.q0(105, eT.pd), bm.rt.q0(106, eT.password), u.v(8, u.a5D().a5E, new vk(18)))
			}, bE.qZ, 1), new x(L(263), function() {
				var eT = Math.min(bm.buffer.data[117].value, tQ.tR.length - 1);
				if (!(eT < 1)) {
					tQ.tR[eT].remove(), tQ.tR.splice(eT, 1);
					for (var aC = eT; aC < tQ.tR.length; aC++) tQ.tR[aC].name = "" + aC;
					bm.z.a06(eT), eT = bm.buffer.data[117].value, tQ.tR[eT].textContent = tQ.tR[eT].textContent.replace("⚪", "🟢"), aWB(eT)
				}
			}, bE.qZ, 1), new x(L(264), function() {
				var eT = Math.min(bm.buffer.data[117].value, tQ.tR.length - 1);
				if (eT !== tQ.tR.length - 1)
					if (aVs(aWA[2], function() {
							var fk = tQ.tR.length;
							aWB(Math.min(bm.buffer.data[117].value, fk - 1))
						})) {
						for (var aC = tQ.tR.length - 1; eT < aC; aC--) tQ.tR[aC].remove(), tQ.tR.splice(aC, 1), bm.z.a06(aC);
						aWB(eT)
					}
			}, bE.qZ, 1)], tQ = new yo(bm.buffer.data[117], aWB), __fx.savedAccounts.decorate(tQ.tR, bm.buffer.data[117].vS), aWB(0), tQ.tR[0].style.marginTop = "0.5em", xP.tP(tQ), xP.tS(new ul([aWA[0].button])), xP.tS(new ul(
				[new x("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(bm.buffer.data[117].value)
				}).button])), xP.tS(new ul([aWA[1].button])), xP.tS(new ul([aWA[2].button])), xP
		}()));
		return tV.push(function() {
				var xP = new tF,
					pV = (xP.tI(L(277)), L(278, [(data.aWD / 1e3).toFixed(3)]) + "<br>" + L(279, [data.aWE]));
				data.aWF && (pV += "<br>" + L(280, [(data.aWG / 1e3).toFixed(3)]));
				return xP.tN(pV), xP
			}()), tV.push(function() {
				var xP = new tF,
					aVw = (xP.tI(L(271)), [L(272), L(273), L(274), L(275)]),
					eS = data.aWC;
				return xP.tN(L(276) + (data.a4T / 100).toFixed(2) + "<br>" + L(229) + (eS + 1) + " / " + data.a0K + "<br>" + L(230) + aVw[eS < 10 ? 0 : eS < 50 ? 1 : eS < 200 ? 2 : 3]), xP
			}()), tV.push(function() {
				var xP = new tF;
				return xP.tI(L(268)), xP.tN(L(269) + bD.pZ.a8D(data.a0H, .1, 1) + "<br>" + L(229) + (data.a0I + 1) + " / " + data.a0K + "<br>" + L(270) + data.a0J), xP
			}()),
			function(tV) {
				var xP = new tF,
					aWe = data.a0O,
					aWf = (xP.tI(L(334)), xP.tN(L(335, [data.a0M.length ? "[" + data.a0M + "]" : "-"])), xP.tN(L(336, [bD.pZ.a8D(aWe, .01, 2)])), xP.tN(L(337, [data.a0Q + 1 + " / " + data.a0K])), data.a0R),
					aWg = (xP.tN(L(338, [bD.pZ.a8D(aWf, .1, 1)])), data.a0T);
				xP.tN(L(339, [aWg])), xP.tN(L(340, [bD.pZ.a8D(aWf / Math.max(aWg, 1), .1, 2)])), aWe = data.a0P, xP.tI(L(341), "0.8em"), xP.tN(L(335, [data.a0N.length ? "[" + data.a0N + "]" : "-"])), xP.tN(L(336, [bD.pZ.a8D(aWe, .01, 2)])),
					aWf = data.a0S, xP.tN(L(338, [bD.pZ.a8D(aWf, .1, 1)])), aWg = data.a0U, xP.tN(L(339, [aWg])), xP.tN(L(340, [bD.pZ.a8D(aWf / Math.max(aWg, 1), .1, 2)])), xP.tN(b1.z.aVv("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					tV.push(xP)
			}(tV),
			function(tV) {
				var xP = new tF;
				xP.tI(L(342)), xP.tN(L(276) + (data.aWh / 10).toFixed(1) + "<br>" + L(230) + (data.aWi.length ? L(343, [data.aWi]) : L(344))), data.aVV && xP.tS(new ul([new x(L(292), function(e) {
					return b1.z.eq(0) && (bD.ta.yl(e), b1.aW2.aW8({
						action: 4,
						pd: data.pd
					})), !0
				}, 0, 0, 1).button]));
				xP.tN(b1.z.aVv("/wiki/clans"), "0.75em").style.marginTop = "0.8em", tV.push(xP)
			}(tV), tV.push(function() {
				var xP = new tF;
				{
					var uM, aKm, aWM, tK, aVz, aW1;
					xP.tI(L(290)), xP.tN(L(291) + data.aWK + "<br>" + L(229) + (data.aWL + 1) + " / " + data.a0K + "<br>" + L(230) + br.eV(data.aWL)), data.aVV && ((uM = new uN({
						value: bm.buffer.data[157].value,
						eT: -1
					}, 1, void 0, function(e) {
						bm.rt.q0(157, aVz(e.target.value))
					})).e.style.marginTop = "0.6em", xP.tS(uM), aKm = new x(L(232), function(e) {
						return e.textContent === L(232) ? (e.textContent = L(170), uM.e.readOnly = !0, aWM[0].tv(0), aWM[0].button.style.color = bE.rS, aVz(bm.buffer.data[157].value)) : aW1(), !0
					}), xP.tS(new ul([aKm.button])), aWM = [new x(L(292), function(e) {
						return uM.e.readOnly && b1.z.eq(0) && (bD.ta.yl(e), aW1(), b1.aW2.aW3({
							action: 1,
							pd: data.pd,
							value: bO.it(parseInt(bm.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], tK = xP.tJ(), aVz = function(gC) {
						return gC = bD.h6.a7q(gC, 2, 3e4), tK.textContent = L(293, [gC - 1, gC, bm.buffer.data[105].value]), gC
					}, xP.tS(new ul([aWM[0].button])), aW1 = function() {
						aKm.button.textContent = L(232), uM.e.readOnly = !1, aWM[0].tv(1), aWM[0].button.style.color = bE.qN
					}, aVz(bm.buffer.data[157].value))
				}
				return xP
			}()),
			function(tV) {
				var xP, a7J;
				data.aVV && !data.aWj || (0 === a1.id || data.aVV || data.aWj) && ((xP = new tF).tI("Patreon"), !data.aVV && data.aWk ? xP.tS(new ul([new x(L(248), function() {
					b1.aW2.aW8({
						action: 7,
						pd: data.pd
					}), data.aWk = 0, u.v(7)
				}).button])) : data.aWj ? (xP.tN(L(345, [(data.aWl / 100).toFixed(2)]) + "<br>" + L(346, [1 + data.aWm + " / " + data.aWn]) + "<br>" + L(347, [data.aWo ? L(348) : L(349)])), data.aVV || xP.tS(new ul([new x(L(350),
					function() {
						b1.aW2.aW8({
							action: 8,
							pd: data.pd
						}), data.aWj = 0, bm.rt.q0(160, 0), u.v(7)
					}).button]))) : (xP.tN(L(351), "0.75em").style.marginBottom = "0.3em", xP.tN("  • " + L(352), "0.75em").style.whiteSpace = "pre", xP.tN("  • " + L(353), "0.75em").style.whiteSpace = "pre", xP.tN("  • " + L(354),
						"0.75em").style.whiteSpace = "pre", xP.tN(L(355), "0.75em").style.marginTop = "1.0em", xP.tN(L(356), "0.75em").style.marginTop = "1.0em", xP.tN("<a href='" + bN.aWp +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a7J = "https://www.patreon.com/oauth2/authorize?state=" + data.pd +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a4P() + "/", xP.tN(L(357), "0.75em").style.marginTop = "1.0em", xP.tN("<a href='" +
						a7J + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aVV || (xP.tS(new vB), xP.tS(new ul([new x(L(249), function() {
						b1.aW2.aW8({
							action: 6,
							pd: data.pd
						}), data.aWk = 1, u.v(7)
					}).button])), xP.tN(L(358), "0.75em").style.marginTop = "0.75em")), tV.push(xP))
			}(tV), tV.push(function() {
				var xP = new tF,
					aVw = (xP.tI(L(283)), [L(284), L(285), L(286), L(287), "Scout", L(288)]),
					eS = data.aWI;
				return xP.tN(L(289) + (data.aWJ / 100).toFixed(2) + "<br>" + L(229) + (eS + 1) + " / " + data.a0K + "<br>" + L(230) + aVw[eS < 3 ? 0 : eS < 20 ? 1 : eS < 100 ? 2 : eS < 500 ? 3 : eS < 2e3 ? 4 : 5]), xP.tN(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", xP
			}()),
			function(tV) {
				var xP, uM, aW5, aW0, aKm, aW1;
				data.aVV || ((xP = new tF).tI(L(233)), xP.tJ(L(234)), uM = new uN({
					value: bm.buffer.data[184].value,
					eT: -1
				}, 1, void 0, function(e) {
					bm.rt.q0(184, e.target.value)
				}), xP.tS(uM), xP.tJ(L(235)), aW5 = new uN({
					value: bm.buffer.data[185].value,
					eT: -1
				}, 0, void 0, function(e) {
					bm.rt.q0(185, e.target.value)
				}), xP.tS(aW5), aW0 = new x(L(236), function(e) {
					var send;
					return uM.e.readOnly && b1.z.eq(0) && (send = function() {
						bD.ta.yl(e), aW1(), b1.aW2.aW3({
							action: 5,
							pd: bm.buffer.data[185].value,
							value: bO.it(parseInt(bm.buffer.data[184].value, 10), 1, 1e9)
						})
					}, u.v(4, u.vj, new w(L(238), L(239), !1, [new x("⬅️ " + L(49), function() {
						u.a58()
					}), new x("✅ OK", function() {
						u.a58(), send()
					})]))), !0
				}, 1), aKm = new x(L(232), function(e) {
					if (e.textContent === L(232)) {
						var g4 = bJ.fB;
						if (g4.fC(aW5.e.value, 5) === g4.fC(data.pd, 5)) return new aTG(L(237)), !0;
						e.textContent = L(170), uM.e.readOnly = !0, aW5.e.readOnly = !0, aW0.tv(0), aW0.button.style.color = bE.rS, bm.rt.q0(184, uM.e.value)
					} else aW1();
					return !0
				}), xP.tS(new ul([aKm.button])), aW1 = function() {
					aKm.button.textContent = L(232), uM.e.readOnly = !1, aW5.e.readOnly = !1, aW0.tv(1), aW0.button.style.color = bE.qN
				}, xP.tS(new ul([aW0.button])), tV.push(xP))
			}(tV),
			function(tV) {
				var xP, tQ, aWA, eT, aWB;
				data.aVV || bm.zV.get().length && ((xP = new tF).tI(L(261)), eT = 0, aWB = function() {
					var aGL = bm.zV.get().length;
					aWA[0].tv(eT === aGL ? bE.qZ : bE.qk), aWA[1].tv(eT === aGL ? bE.qZ : bE.r4), aWA[2].tv(eT === aGL || aGL - 1 <= eT || eT < 5 ? bE.qZ : bE.r4)
				}, aWA = [new x(L(262), function() {
					u.v(8, void 0, new vk(25, {
						action: 0,
						pd: bm.zV.get()[eT],
						vi: 0
					}))
				}, bE.qZ, 1), new x(L(263), function() {
					bm.zV.zk(eT), tQ.tR[eT].remove(), tQ.tR.splice(eT, 1);
					for (var aC = eT; aC < tQ.tR.length; aC++) tQ.tR[aC].name = "" + aC;
					bm.zV.get().length && (eT = Math.max(eT - 1, 0), tQ.tR[eT].textContent = tQ.tR[eT].textContent.replace("⚪", "🟢")), aWB()
				}, bE.qZ, 1), new x(L(264), function() {
					if (aVs(aWA[2], aWB)) {
						for (var ia = tQ.tR.length - 1; eT < ia; ia--) bm.zV.zk(ia), tQ.tR[ia].remove(), tQ.tR.splice(ia, 1);
						aWB()
					}
				}, bE.qZ, 1)], aWB(), tQ = new yo(bm.zV.zh(), function(aC) {
					eT = aC, aWB()
				}), __fx.followedAccounts.decorate(tQ.tR, bm.zV.get()), tQ.tR[0].style.marginTop = "0.5em", xP.tP(tQ), xP.tS(new ul([aWA[0].button])), xP.tS(new ul([new x("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(eT)
				}).button])), xP.tS(new ul([aWA[1].button])), xP.tS(new ul([aWA[2].button])), tV.push(xP))
			}(tV), aVX(tV, 0), tV
	}())
}

function aVG() {
	var aWr, aWs, aWt, tV;

	function aWu() {
		aWw(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aVS()[19] = null, u.a58()
	}

	function aWw() {
		2 === aE.data.aIncomeType ? (bD.th.a6g(aWt.zN(), aE.data.aIncomeData, 255), bD.th.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aWr.show(), this.resize()
	}, this.uZ = function() {
		aWr.uZ()
	}, this.resize = function() {
		aWr.resize(), aWs.resize()
	}, this.a64 = function(eu) {
		2 === eu && aWr.yy[0].tr()
	}, aWr = new ys(L(359), [new x("⬅️ " + L(49), aWu)]), aWs = new tT(aWr.yx, (function(tV) {
		var xP = new tF;
		xP.tI(L(360)), xP.tP(new yo({
			vS: [L(361), L(362), L(363)],
			value: aE.data.aIncomeType
		}, function(eT) {
			aWw(), 2 !== eT || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fh)), aE.data.aIncomeType = eT, u.v(22)
		})), tV.push(xP)
	}(tV = []), function(tV) {
		var xP;
		1 === aE.data.aIncomeType && ((xP = new tF).tI("Value"), xP.tS(new uN({
			eT: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.it(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), tV.push(xP))
	}(tV), function(tV) {
		var xP;
		2 === aE.data.aIncomeType && ((xP = new tF).tI("Data"), (aWt = new zF(0, 1, 0, 1)).zM(bD.pZ.a8J(aE.data.aIncomeData, 4)), xP.tS(aWt), tV.push(xP))
	}(tV), tV))
}

function aVJ() {
	var aWr, aWs, aWt;

	function aWu() {
		aWw(), 3 !== aE.data.botDifficultyType || bD.th.a6U(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aVS()[19] = null, u.a58()
	}

	function aWw() {
		3 === aE.data.botDifficultyType && bD.th.a6g(aWt.zN(), aE.data.botDifficultyData, aF.lE.length - 1)
	}

	function aX1(tV, eT) {
		var xP = new tF,
			value = (xP.tI(eT < 0 ? L(76) : L(75) + " " + bj.a4K[eT % 9]), 0 <= eT && (xP.tN(L(366) + ": " + aE.data.teamPlayerCount[eT]).style.marginBottom = "1em"), eT < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eT]);
		xP.tP(new yo({
			vS: aF.lE,
			value: value
		}, function(ia) {
			eT < 0 ? aE.data.botDifficultyValue = ia : aE.data.botDifficultyTeam[eT] = ia
		})), tV.push(xP)
	}
	this.show = function() {
		aWr.show(), this.resize()
	}, this.uZ = function() {
		aWr.uZ()
	}, this.resize = function() {
		aWr.resize(), aWs.resize()
	}, this.a64 = function(eu) {
		2 === eu && aWr.yy[0].tr()
	}, aWr = new ys(L(76), [new x("⬅️ " + L(49), aWu)]), aWs = new tT(aWr.yx, function() {
		var tV = [];
		if (function(tV) {
				var xP = new tF,
					vS = (xP.tI(L(360)), [L(362), L(364), L(365), L(363)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), vS.splice(2, 1));
				xP.tP(new yo({
					vS: vS,
					value: value
				}, function(eT) {
					aWw(), aE.data.botDifficultyType = eT, 0 === aE.data.gameMode && 2 === eT && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fh)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), tV.push(xP)
			}(tV), 0 === aE.data.botDifficultyType) aX1(tV, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aX1(tV, aC);
		else 3 === aE.data.botDifficultyType && ! function(tV) {
			var xP = new tF;
			xP.tI("Data"), (aWt = new zF(0, 1, 0, 1)).zM(bD.pZ.a8J(aE.data.botDifficultyData, 8)), xP.tS(aWt), tV.push(xP)
		}(tV);
		return tV
	}())
}

function aX2(data) {
	var aVT, aX3, aX4, aX5, aX6, aX7, aX8, colors, aX9, aXA, aXB = 0,
		aXC = 0,
		aXD = !1,
		aXE = !1,
		aXF = [1, 5, 60, 240, 1440, 10080, 43200];

	function aXj(mI, mJ) {
		! function(mI, mJ) {
			return aX3 < mI && mI < aX3 + aX5 && aX4 < mJ && mJ < aX4 + aX6
		}(aXB = mI, aXC = mJ) ? (aXD && (bi.e2 = !0), aXD = !1) : (aXD = !0, bi.e2 = !0)
	}
	this.show = function() {
		aXE = bm.buffer.data[127].value, aVT.show(), this.resize()
	}, this.uZ = function() {
		aVT.uZ()
	}, this.resize = function() {
		aVT.resize();
		var eu = i.l,
			z5 = aVT.z2(),
			aXO = eu * z5.z4,
			eu = eu * z5.uc;
		aX7 = bD.ta.w6(.06), aX8 = bD.ta.w6(.04), aX3 = bD.ta.w6(.06), aX4 = eu + aX7, aX5 = i.j - aX3 - aX8, aX6 = aXO + eu - aX4 - aX8
	}, this.z6 = function() {
		aVT.z6(),
			function() {
				var aC, aXL, hD, fr, g3, h = data.data,
					aXS = 1,
					aXT = .125,
					aXU = aXE ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aXL = h[aC].aXL, hD = aXL.length, aXS = Math.max(hD, aXS), g3 = 0; g3 < hD; g3++) aXT = Math.max(aXL[g3], aXT), aXU = Math.min(aXL[g3], aXU);
				var o7 = aX4 + aX6,
					a1t = aX6 / (aXT - aXU),
					a1s = 1 / (aXS - 1);
				for (z7.lineWidth = bf.a2x, aC = 0; aC < h.length; aC++) {
					for (aXL = h[aC].aXL, hD = aXL.length, fr = aX3, z7.beginPath(), z7.moveTo(fr + aX5, o7 - a1t * (aXL[hD - 1] - aXU)), g3 = hD - 2; 0 <= g3; g3--) z7.lineTo(fr + a1s * g3 * aX5, o7 - a1t * (aXL[g3] - aXU));
					z7.strokeStyle = colors[aC], z7.stroke()
				}(function(aXU, aXT, o7, a1t) {
					z7.font = bD.ta.v9(0, .25 * aX3), bD.ta.textBaseline(z7, 1), bD.ta.textAlign(z7, 2), z7.fillStyle = colors[0];
					for (var fr = .92 * aX3, aC = 0; aC < 3; aC++) {
						var gC = aXU + aC * (aXT - aXU) / 2;
						z7.fillText((gC / 1e3).toFixed(3), fr, o7 - a1t * (gC - aXU))
					}
				})(aXU, aXT, o7, a1t),
				function(aXS) {
					var ft = aX4 + aX6 + .15 * aX8;
					z7.font = bD.ta.v9(0, Math.min(.4 * aX8, .028 * i.j)), bD.ta.textBaseline(z7, 0), bD.ta.textAlign(z7, 2), z7.fillStyle = colors[0], z7.fillText(bD.a6K.a7B(aX9), aX3 + aX5, ft), bD.ta.textAlign(z7, 0), z7.fillText(bD.a6K.a7B(
						new Date(aXA.getTime() - 6e4 * (aXS - 1) * aXF[data.aXK])), aX3, ft)
				}(aXS),
				function(aXS, aXU, aXT) {
					if (aXD && !(aXS < 2)) {
						for (var aCy, eT = (aXB - aX3) / aX5 * (aXS - 1), aXX = Math.floor(eT), aXY = Math.floor(1 + eT), aXZ = eT - aXX, aXa = 1e5, aXb = -1, aXc = -1, aXd = aXT - (aXT - aXU) * (aXC - aX4) / aX6, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aGy, aXL = h[aC].aXL;
							aXL.length <= aXY || (aXL = aXL[aXX] + aXZ * (aXL[aXY] - aXL[aXX]), (aGy = Math.abs(aXd - aXL)) < aXa && (aXa = aGy, aXb = aC, aXc = aXL))
						} - 1 !== aXb && (aXT = aX4 + aX6 - (aXc - aXU) / (aXT - aXU) * aX6, z7.lineWidth = .5 * bf.a2x, z7.strokeStyle = colors[aXb], z7.beginPath(), z7.moveTo(aX3, aXT), z7.lineTo(aXB, aXT), z7.lineTo(aXB, aX4 + aX6), z7
							.stroke(), z7.beginPath(), z7.arc(aXB, aXT, .1 * aX3, 0, 2 * Math.PI), z7.fillStyle = colors[aXb], z7.fill(), aXU = aX4 + aX6 + .15 * aX8, bD.ta.textAlign(z7, 1), aCy = aXS - 2 < eT ? (aCy = aXA.getTime() - 6e4 *
								aXF[data.aXK], new Date(aCy + (eT - (aXS - 2)) * (aX9.getTime() - aCy))) : new Date(aXA.getTime() - 6e4 * (aXS - eT - 1) * aXF[data.aXK]), aXS = bD.a6K.a7B(aCy), eT = bD.ta.measureText(aXS), aCy = bO.it(aXB,
								aX3 + .5 * eT, aX3 + aX5 - .5 * eT), z7.fillStyle = bD.color.qF(70, 50, 20), z7.fillRect(aCy - .52 * eT, aX4 + aX6, 1.04 * eT, .55 * aX8), z7.fillStyle = colors[0], z7.fillText(aXS, aCy, aXU), z7.font = bD.ta
							.v9(0, .25 * aX3), bD.ta.textBaseline(z7, 1), bD.ta.textAlign(z7, 2), aCy = .92 * aX3, aXS = (aXc / 1e3).toFixed(3), eT = bD.ta.measureText(aXS), aXU = aCy - 1.04 * eT, z7.fillStyle = bD.color.qF(70, 50, 20), z7
							.fillRect(aXU, aXT - .1625 * aX3, aX3 - aXU, .275 * aX3), z7.fillStyle = colors[aXb], z7.fillText(aXS, aCy, aXT))
					}
				}(aXS, aXU, aXT)
			}(), z7.lineWidth = bf.a2x, z7.strokeStyle = bE.qN, z7.beginPath(), z7.moveTo(aX3, aX4), z7.lineTo(aX3, aX4 + aX6), z7.lineTo(aX3 + aX5, aX4 + aX6), z7.stroke();
		var aC, fontSize = .5 * aX7,
			h = (z7.font = bD.ta.v9(0, fontSize), bD.ta.textBaseline(z7, 1), bD.ta.textAlign(z7, 0), data.data),
			fk = h.length,
			ft = aX4 - .5 * aX7,
			pV = "";
		for (aC = 0; aC < fk; aC++) pV += h[aC].name + "  ";
		pV = pV.trim();
		var aXg = bD.ta.measureText(pV),
			fr = .5 * (i.j - aXg);
		for (aXg > i.j && (fr = 0, z7.font = bD.ta.v9(0, i.j / aXg * fontSize)), aC = 0; aC < fk; aC++) z7.fillStyle = colors[aC], z7.fillText(h[aC].name, fr, ft), fr += bD.ta.measureText(h[aC].name + "  ")
	}, this.hy = function(mI, mJ) {
		aXj(mI, mJ)
	}, this.a5W = function(mI, mJ) {
		aXj(mI, mJ)
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	};
	var aC, el, a79, ia, fn = data.data,
		fk = fn.length,
		max = 1;
	for (aC = 0; aC < fk; aC++) max = Math.max(max, fn[aC].aXL.length);
	for (aC = 0; aC < fk; aC++)
		for (; fn[aC].aXL.length < max;) fn[aC].aXL.unshift(0);
	el = new Date, a79 = 6e4 * el.getTimezoneOffset(), ia = el.getTime() - a79, aX9 = new Date(ia), 6 === data.aXK ? function(el, a79) {
		var aXN = el.getUTCFullYear(),
			el = el.getUTCMonth() + 1;
		aXA = el < 12 ? new Date(Date.UTC(aXN, el) - a79) : new Date(Date.UTC(aXN + 1, 0) - a79)
	}(el, a79) : (a79 = 6e4 * aXF[data.aXK], aXA = data.aXK <= 4 ? new Date(ia + a79 - el.getTime() % a79) : new Date(ia + a79 - (el.getTime() + 2592e5) % a79)), ia = bD.color, colors = [bE.qN, ia.qF(255, 0, 0), ia.qF(0, 200, 0), ia.qF(80, 80,
		255), ia.qF(255, 255, 0), ia.qF(255, 0, 255), ia.qF(0, 255, 255), ia.qF(255, 140, 0), ia.qF(128, 128, 128), ia.qF(0, 255, 140)], aVT = new ys(L(367) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aXK] + ", " + bD.a6K.a78(aX9), [
		new x("⬅️ " + L(49), function() {
			u.v(1)
		}), new x(L(368), function() {
			u.v(14)
		})
	], !1)
}

function aV8() {
	var aVT, aVU, tV, aXk = -1;
	this.show = function() {
		aVT.show(), this.resize(), aXk = bm.buffer.data[125].value
	}, this.uZ = function() {
		aVT.uZ()
	}, this.resize = function() {
		aVT.resize(), aVU.resize()
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	}, aVT = new ys(L(369), [new x("⬅️ " + L(49), function() {
		aXk !== bm.buffer.data[125].value ? u.z.aXl() : u.aVR(13)
	})]), aVU = new tT(aVT.yx, ((tV = []).push(function() {
		var xP = new tF,
			aKm = (xP.tI(L(370)), xP.tJ(L(371)), new x(L(372), function() {
				bm.rt.q0(130, 0), u.z.aXl()
			}, 0, 0, 1)),
			uM = new uN(bm.buffer.data[126], 0, function() {
				aKm.button.click()
			});
		return xP.tS(uM), uM.e.placeholder = "a,b,c", uM.e.style.marginTop = "0.5em", xP.tS(new ul([aKm.button])), xP
	}()), tV.push(function() {
		var xP = new tF,
			aKm = new x(L(372), function() {
				bm.rt.q0(130, 1), u.z.aXl()
			}, 0, 0, 1),
			aXq = new uN(bm.buffer.data[129], 1, function() {
				aXq.e.focus()
			}),
			aXr = new uN(bm.buffer.data[128], 1, function() {
				aKm.button.click()
			});
		return xP.tI(L(373)), xP.tS(aXr), aXr.e.style.marginBottom = "0.5em", xP.tI(L(374)), xP.tS(aXq), xP.tS(new ul([aKm.button])), xP
	}()), tV.push(function() {
		var xP = new tF;
		return xP.tI(L(375)), bm.buffer.data[125].vS = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], xP.tP(new yo(bm.buffer.data[125])), xP
	}()), tV.push(function() {
		var xP = new tF;
		return xP.tI(L(376)), xP.tS(new uh(bm.buffer.data[127], L(377))), xP
	}()), tV))
}

function aV7() {
	var aVT, aXs, aX5, aXt, aXu, aXv, colors = [0, 0, 0],
		aXw = -1;

	function aXz(aC) {
		var aY0 = aXs.ft + aC * (bf.gap + aXv),
			fxSmooth = (z7.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", __fx.utils.clipRounded(z7, aXt, aY0, aXu, aXv));
		z7.fillRect(aXt, aY0, colors[aC] * aXu, aXv), fxSmooth && z7.restore(), z7.strokeStyle = bE.qN, fxSmooth ? __fx.utils.strokeRounded(z7, aXt, aY0, aXu, aXv, z7.lineWidth) : z7.strokeRect(aXt, aY0, aXu, aXv), z7.fillStyle = bE.qN, z7.font = bD
			.ta.v9(0, .32 * aXv), bD.ta.textBaseline(z7, 1), bD.ta.textAlign(z7, 0), z7.fillText(L(0 === aC ? 380 : 1 === aC ? 381 : 382) + aXx(aC), aXt + bf.gap, aY0 + .53 * aXv)
	}

	function aXx(aC, aY1) {
		return aY1 = aY1 || 256, bO.it(Math.floor(aY1 * colors[aC]), 0, aY1 - 1)
	}

	function a60(mI, mJ) {
		return !(mI < aXt || mJ < aXs.ft || mI > aXs.fr + aXs.j || mJ > aXs.ft + aXs.k)
	}
	this.show = function() {
		var gC = bm.buffer.data[121].value;
		colors[0] = (gC >> 12) / 63, colors[1] = (gC >> 6 & 63) / 63, colors[2] = (63 & gC) / 63, aVT.show(), this.resize()
	}, this.uZ = function() {
		bm.rt.q0(121, (aXx(0, 64) << 12) + (aXx(1, 64) << 6) + aXx(2, 64)), aVT.uZ()
	}, this.resize = function() {
		aVT.resize(), aXs.resize();
		var eu = i.l,
			z5 = aVT.z2(),
			aXy = (aXs.ft = Math.max(aXs.ft, eu * z5.uc + bf.gap), eu * z5.z4 - 2 * bf.gap);
		aXs.k = Math.min(aXs.k, aXy), aXs.j = 2 * aXs.k, aXs.ft = eu * z5.uc + .5 * (eu * z5.z4 - aXs.k), aXs.fr = .5 * (i.j - aXs.j), aX5 = .25 * aXs.j, aXt = aXs.fr + aX5 + bf.gap, aXu = aXs.j - aX5 - bf.gap, aXv = (aXs.k - 2 * bf.gap) / 3
	}, this.z6 = function() {
		aVT.z6(), z7.lineWidth = bf.a2x;
		var eS = aXx(0),
			w5 = aXx(1),
			g4 = aXx(2),
			fxSmooth = (z7.fillStyle = "rgb(" + eS + "," + w5 + "," + g4 + ")", __fx.utils.clipRounded(z7, aXs.fr, aXs.ft, aX5, aXs.k));
		z7.fillRect(aXs.fr, aXs.ft, aX5, aXs.k), fxSmooth && z7.restore(), z7.strokeStyle = bE.qN, fxSmooth ? __fx.utils.strokeRounded(z7, aXs.fr, aXs.ft, aX5, aXs.k, z7.lineWidth) : z7.strokeRect(aXs.fr, aXs.ft, aX5, aXs.k), z7.fillStyle = eS +
			w5 + g4 < 306 && w5 < 150 ? bE.qN : bE.qE, bD.ta.textBaseline(z7, 1), bD.ta.textAlign(z7, 1), z7.font = bD.ta.v9(0, .1 * aXs.k), z7.rotate(-Math.PI / 2), z7.fillText(L(379), -aXs.ft - .5 * aXs.k, aXs.fr + .5 * aX5), z7.setTransform(1,
				0, 0, 1, 0, 0), aXz(0), aXz(1), aXz(2)
	}, this.hy = function(mI, mJ) {
		a60(mI, mJ) && (aXw = bO.it(Math.floor((mJ - aXs.ft) / (aXv + .75 * bf.gap)), 0, 2), colors[aXw] = bO.it((mI - aXt) / aXu, 0, 1), bi.e2 = !0)
	}, this.a5W = function(mI) {
		-1 !== aXw && (colors[aXw] = bO.it((mI - aXt) / aXu, 0, 1), bi.e2 = !0)
	}, this.a5Z = function(mI, mJ, deltaY) {
		a60(mI, mJ) && (mI = bO.it(Math.floor((mJ - aXs.ft) / (aXv + .75 * bf.gap)), 0, 2), colors[mI] = bO.it(colors[mI] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.e2 = !0)
	}, this.a5u = function() {
		0 <= aXw && (aXw = -1, bi.e2 = !0)
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	}, aVT = new ys(L(378), [new x("⬅️ " + L(49), function() {
		u.z.aGt()
	})], !1), aXs = new uB([.5, .25], [.5, .5], 1)
}

function aVF() {
	var aWr, aWs, aWt, p6;

	function aWu() {
		aWw(), u.aVS()[19] = null, u.a58()
	}

	function aY2() {
		aWw(), u.v(21)
	}

	function aWw() {
		1 === aE.data.gameMode ? aE.a8c.a8i() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.th.a6g(aWt.zN(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aWr.show(), this.resize()
	}, this.uZ = function() {
		aWr.uZ()
	}, this.resize = function() {
		aWr.resize(), aWs.resize()
	}, this.a64 = function(eu) {
		2 === eu && aWr.yy[0].tr()
	}, p6 = [new x("⬅️ " + L(49), aWu)], 1 === aE.data.gameMode && p6.push(new x(L(383), aY2, 1, 1)), aWr = new ys(L(384), p6), aWs = new tT(aWr.yx, (p6 = [], 0 === aE.data.gameMode ? (function(tV) {
		var xP = new tF;
		xP.tI(L(360)), xP.tP(new yo({
			vS: [L(385), L(363)],
			value: aE.data.colorsType
		}, function(eT) {
			aWw(), aE.data.colorsType = eT, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fh || (aE.data.colorsData = new Uint32Array(aE.fh)), u.v(21)
		})), tV.push(xP)
	}(p6), 1 === aE.data.colorsType && function(tV) {
		var xP = new tF;
		xP.tI("Data"), (aWt = new zF(0, 1, 0, 1)).zM(bD.pZ.a8J(aE.data.colorsData, 1)), xP.tS(aWt), tV.push(xP)
	}(p6)) : (aE.a8c.a8i(), p6.push(function() {
		var xP = new tF;
		xP.tI(L(366));
		for (var aC = 0; aC < bj.a4K.length; aC++) {
			var ia = (aC + 1) % bj.a4K.length,
				e = xP.tN((0 == ia ? "" : "Team ") + bj.a4K[ia]);
			aC && (e.style.marginTop = "0.5em"), xP.tS(new uN({
				eT: -1,
				value: aE.data.teamPlayerCount[ia]
			}, 1, 0, function(e) {
				aWr.yy[1].tv(0);
				var playerCount = bO.it(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aY5] = playerCount
			})).e.aY5 = ia
		}
		return xP
	}()), function(tV) {
		for (var xP = new tF, vS = (xP.tI(L(386)), []), aC = 0; aC < bj.a4K.length; aC++) {
			var ia = (aC + 1) % bj.a4K.length;
			vS.push(bj.a4K[ia])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		xP.tP(new yo({
			vS: vS,
			value: (aE.data.colorsData[0] % 16 + bj.a4K.length - 1) % bj.a4K.length
		}, function(eT) {
			var eT = (eT + 1) % bj.a4K.length,
				aY6 = bj.aY7[eT],
				aY6 = (aY6[0] >> 2 << 12) + (aY6[1] >> 2 << 6) + (aY6[2] >> 2);
			aE.data.colorsData[0] = aY6 - (15 & aY6) + eT
		})), tV.push(xP)
	}(p6)), p6))
}

function vk(id, a7t, aY8) {
	var aVT, aY9;

	function aYE() {
		aY9.tW.innerHTML += "<br>" + L(389)
	}

	function aYN() {
		var g4 = 1;
		u.v(4, 1, new w(L(390), L(391), !1, [new x("🔄 Reload", function() {
			g4 && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), g4 = 0
		}, bE.qk)]))
	}

	function aYD() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.dv(bG.aD), bm.rt.q0(110, __fx.passwordReset.getCustomPassword() || bI.fB
			.vl(bI.fB.vm(15))), b1.aW2.aYP()
	}
	this.aYA = !0, this.aYB = id, this.show = function() {
		aVT.show(), this.resize(), 15 === id ? (b1.z.aYC(id) ? aYD : aYE)() : 16 === id ? b1.z.aYC(id) ? b1.er.es(2) : aYE() : 17 === id ? b1.z.aYC(id) ? b1.er.es(3) : aYE() : 18 === id ? (b1.z.close(0, 3253), b1.z.aLn(0, id, 0), aYE()) : 21 ===
			id ? b1.z.aYC(id) ? b1.aYF.aYG(a7t.w0, a7t.w1, a7t.w2) : aYE() : 22 === id ? b1.z.aYC(id) ? b1.aYF.aYH(a7t.w0, a7t.aYI, a7t.aYJ) : aYE() : 23 === id ? b1.z.aYC(id) ? b1.aYF.aYK(a7t.aXK, a7t.a4i) : aYE() : 24 === id ? b1.z.aYC(id) ? b1
			.aYF.aYL(a7t.aXK, a7t.w1, a7t.w2) : aYE() : 25 === id ? b1.z.aYC(id) ? b1.aW2.aW8(a7t) : aYE() : 28 === id ? b1.z.aYC(id) ? b1.aYF.aYM(a7t.w0, a7t.aYI, a7t.aYJ) : aYE() : 29 === id ? b1.z.aYC(id) ? b1.aW2.aWX(a7t) : aYE() : 30 ===
			id && (b1.z.aYC(id) ? bA.aGo() || aYN() : aYE())
	}, this.aYO = function() {
		15 === id ? aYD() : 16 === id ? b1.er.es(2) : 17 === id ? b1.er.es(3) : 18 === id ? u.v(8, this.a5E, new vk(16)) : 21 === id ? b1.aYF.aYG(a7t.w0, a7t.w1, a7t.w2) : 22 === id ? b1.aYF.aYH(a7t.w0, a7t.aYI, a7t.aYJ) : 23 === id ? b1.aYF.aYK(
			a7t.aXK, a7t.a4i) : 24 === id ? b1.aYF.aYL(a7t.aXK, a7t.w1, a7t.w2) : 25 === id ? b1.aW2.aW8(a7t) : 28 === id ? b1.aYF.aYM(a7t.w0, a7t.aYI, a7t.aYJ) : 29 === id ? b1.aW2.aWX(a7t) : 30 === id ? bA.aGo() || aYN() : 1e3 === id && (
			this.aYB = id = 25, b1.aW2.aW8(a7t))
	}, this.aGs = function(code, c3, data) {
		!c3 && code !== id || (15 === code || 16 === code ? u.v(7, this.a5E) : 17 === code ? (b1.z.close(0, 3252), bm.z.a06(0), bm.buffer.data[117].vS && 0 < bm.buffer.data[117].vS.length && (c3 = bm.z.a08(0)) ? (bm.rt.q0(105, c3.pd), bm.rt.q0(
			106, c3.password), u.v(8, this.a5E, new vk(16))) : (bm.rt.q0(105, ""), u.z.aGt())) : 21 === code ? u.v(10, this.a5E, new aFF(data)) : 23 === code ? u.v(13, this.a5E, new aX2({
			data: data,
			aXK: a7t.aXK
		})) : 25 === code ? (u.z.aV9.pd = a7t.pd, bm.zV.nS(a7t.pd), u.v(15, this.a5E)) : 30 === code && (data ? u.v(1) : aYN()))
	}, this.uZ = function() {
		aVT.uZ()
	}, this.resize = function() {
		aVT.resize(), aY9.resize()
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	}, aVT = new ys(L(387), [new x("⬅️ " + L(49), function() {
		aY8 ? u.v(29) : u.z.aGt()
	})]), aY9 = new uk(aVT.yx, L(388))
}

function aVD() {
	var aWr, aWs, aYV, tV, aYQ = 0;

	function aYT() {
		var hD;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a8c.a8i()), hD = bD.th.a6a(aE.data.teamPlayerCount, 0), aE.data.numberTeams = hD) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aWu() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aYW(), aE.data.canvas = null, u.v(5, 5)
	}

	function aYW() {
		bC.sp.dv(), bm.rt.q0(156, bC.a8t.a3R())
	}

	function aYR() {
		var aYV;
		aYQ || (aYV = bV.a94(aE.data), 2 === aE.data.mapType || bV.aJe.aMK(aYV) ? (aE.data.isReplay = 0, aYW(), aE.a8c.a96(), ab.aLy(), aE.a8c.a93(), aE.data.canvas = 2 === aE.data.mapType ? bV.a22 : null, aE.a8g(), aE.a8e = 1) : (aYQ = 1, bV.aJe
			.aTF(aYV, function(aMK) {
				aYQ = 0, aMK && 19 === u.vj && aYR()
			})))
	}

	function aYi() {
		aYT();
		for (var h = [aYZ(), aYa(), aYb()], aC = 3; aC < 6; aC++) u.removeChild(aWs.tW, aWs.tX[aC].tH), aWs.tX[aC] = h[aC - 3], aWs.tW.appendChild(aWs.tX[aC].tH);
		aWs.resize()
	}

	function aYZ() {
		var aYj, xP = new tF;
		return xP.tI(L(384)), aYj = 0 === aE.data.gameMode ? [L(385), L(363)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), xP.tN(aYj), xP.tS(new ul([new x(L(395), function() {
			u.v(21)
		}).button])), xP
	}

	function aYa() {
		var xP = new tF,
			h = (xP.tI(L(76)), [L(362) + ": " + aF.lE[aE.data.botDifficultyValue], L(364), L(365), L(363)]);
		return xP.tN(h[aE.data.botDifficultyType]), xP.tS(new ul([new x(L(395), function() {
			u.v(25)
		}).button])), xP
	}

	function aYb() {
		var xP = new tF,
			h = (xP.tI("Spawning"), [L(385), L(397), L(363)]);
		return xP.tN(h[aE.data.spawningType]), xP.tS(new ul([new x(L(395), function() {
			u.v(24)
		}).button])), xP
	}
	this.show = function() {
		aWr.show(), this.resize(), aWr.yx.scrollTop = u.z.vc[0]
	}, this.uZ = function() {
		u.z.vc[0] = aWr.yx.scrollTop, aWr.uZ()
	}, this.resize = function() {
		aWr.resize(), aWs.resize()
	}, this.a64 = function(eu) {
		2 === eu && aWr.yy[0].tr()
	}, aWr = new ys("🔧 " + L(392), [new x("⬅️ " + L(49), aWu), new x(L(393), aYR)]), aYT(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.a22 : 1 === aE.data.mapType ? (aYV = bV.a94(aE.data), bV.aJe.aMK(aYV) ? aE.data.canvas =
		bV.aRU(aYV, 0).a22 : bV.aJe.aTF(aYV, function(aMK) {
			aMK && 19 === u.vj && 1 === aE.data.mapType && bV.a94(aE.data) === aYV && u.v(19)
		})) : (aE.data.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aRU(bV.a94(aE.data), aE.data.mapSeed).a22)), aWs = new tT(aWr.yx, (function(tV) {
		var xP = new tF,
			a6q = (xP.tI(L(394)), aE.data.canvas || document.createElement("canvas"));
		a6q.style.width = "100%", xP.tS({
			e: a6q
		}), xP.tS(new ul([new x(L(395), function() {
			u.v(20)
		}).button])), tV.push(xP)
	}(tV = []), function(tV) {
		var xP = new tF;
		xP.tI(L(366)), xP.tS(new uN({
			eT: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.it(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.th.a6a(aE.data.teamPlayerCount, 0), aE.a8c.a8i(), bD.th.a6a(aE.data.teamPlayerCount, 0) !== e) && aYi()
		})), tV.push(xP)
	}(tV), function(tV) {
		var xP = new tF;
		xP.tI(L(396)), xP.tP(new yo({
			vS: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eT) {
			aE.data.gameMode !== eT && (1 === (aE.data.gameMode = eT) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aYi())
		})), tV.push(xP)
	}(tV), tV.push(aYZ()), tV.push(aYa()), tV.push(aYb()), function(tV) {
		var xP = new tF,
			h = (xP.tI(L(398)), [L(399), L(400), L(363)]);
		xP.tN(h[aE.data.playerNamesType]), xP.tS(new ul([new x(L(395), function() {
			u.v(23)
		}).button])), tV.push(xP)
	}(tV), function(tV) {
		var xP = new tF,
			h = (xP.tI(L(359)), [L(361), L(362) + ": " + aE.data.aIncomeValue, L(363)]);
		xP.tN(h[aE.data.aIncomeType]), xP.tS(new ul([new x(L(395), function() {
			u.v(22)
		}).button])), tV.push(xP)
	}(tV), function(tV) {
		var xP = new tF,
			h = (xP.tI(L(401)), [L(361), L(362) + ": " + aE.data.tIncomeValue, L(363)]);
		xP.tN(h[aE.data.tIncomeType]), xP.tS(new ul([new x(L(395), function() {
			u.v(26)
		}).button])), tV.push(xP)
	}(tV), function(tV) {
		var xP = new tF,
			h = (xP.tI(L(402)), [L(361), L(362) + ": " + aE.data.iIncomeValue, L(363)]);
		xP.tN(h[aE.data.iIncomeType]), xP.tS(new ul([new x(L(395), function() {
			u.v(27)
		}).button])), tV.push(xP)
	}(tV), function(tV) {
		var xP = new tF,
			h = (xP.tI(L(403)), [L(361), L(362) + ": " + aE.data.sResourcesValue, L(363)]);
		xP.tN(h[aE.data.sResourcesType]), xP.tS(new ul([new x(L(395), function() {
			u.v(28)
		}).button])), tV.push(xP)
	}(tV), function(tV) {
		var xP = new tF;
		xP.tI(L(404)), xP.tS(new ul([new x(L(405), function() {
			u.y(), aE.a8c.a97(), u.z.vc[0] = 0, u.v(19)
		}).button])), xP.tS(new ul([new x(L(406), function() {
			bp.aOY()
		}).button])), xP.tS(new ul([new x(L(407), function() {
			return bp.aOa(), !0
		}).button])), tV.push(xP)
	}(tV), tV))
}

function aVO() {
	var aWr, q7 = !0;

	function pw(pv, a9B) {
		var tH = document.createElement("div"),
			aYm = document.createElement("span"),
			aYn = document.createElement("span");
		aYm.textContent = aX.aFb(a9B.ek) + ":", aYm.style.color = bE.qc, aYm.style.paddingRight = "0.4em", aYm.style.display = "table-cell", aYm.style.width = "6ch", aYm.style.textAlign = "end", tH.appendChild(aYm), aYn.textContent = a9B.pV, tH
			.appendChild(aYn), tH.style.display = "table", a9B.sE && function(tH, sE) {
				{
					var aNv;
					sE >= 1024 - ak.pr.a2k ? ((aNv = document.createElement("img")).src = ak.a2T.a2Y[sE - 1024 + ak.pr.a2k].toDataURL(), aNv.style.width = "1.5em", aNv.style.height = "1.5em", aNv.style.verticalAlign = "middle", tH.appendChild(aNv)) :
						((aNv = document.createElement("span")).textContent = ak.pr.a2z(sE), aNv.style.display = "inline-block", aNv.style.fontSize = "1.5em", aNv.style.lineHeight = "1em", aNv.style.verticalAlign = "middle", tH.appendChild(aNv))
				}
			}(tH, a9B.sE), pv.appendChild(tH)
	}

	function aYl() {
		q7 && (aWr.yx.scrollTop = aWr.yx.scrollHeight)
	}
	this.clear = function() {
		aWr.yx.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var aA6 = bu.a9E(), fk = aA6.length, pv = document.createDocumentFragment(), aC = 0; aC < fk; aC++) pw(pv, aA6[aC]);
		aWr.yx.appendChild(pv), aYl(), aWr.show(), this.resize(), q7 = !0, aYl()
	}, this.uZ = function() {
		aWr.uZ()
	}, this.resize = function() {
		aWr.resize(), aWr.yx.style.padding = "0.4em " + bD.ta.ti(bf.tf)
	}, this.a64 = function(eu) {
		2 === eu && aWr.yy[0].tr()
	}, this.a2Q = function(a9B) {
		var pv = document.createDocumentFragment();
		pw(pv, a9B), aWr.yx.appendChild(pv), aYl()
	}, (aWr = new ys(L(408), [new x("⬅️ " + L(49), function() {
		u.aVR(1)
	})])).yx.style.overflowY = "auto", aWr.yx.addEventListener("scroll", function() {
		q7 = aWr.yx.scrollTop >= aWr.yx.scrollHeight - aWr.yx.clientHeight - 2
	})
}

function aUv() {
	var aYp = 0,
		aYq = 50;
	this.send = function(gC, pd, send) {
		gC = bD.h6.a7q(gC, 1, 1e6), aYp + gC < aYq ? (aYp += gC, send()) : u.v(4, u.vj, new w(L(238), L(409, [pd, gC]), !1, [new x("⬅️ " + L(49), function() {
			u.a58()
		}), new x("✅ OK", function() {
			aYp = 0, aYq *= 2, u.a58(), send()
		})]))
	}
}

function aVL() {
	var aWr, aWs, aWt, tV;

	function aWu() {
		aWw(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aVS()[19] = null, u.a58()
	}

	function aWw() {
		2 === aE.data.iIncomeType && bD.th.a6g(aWt.zN(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aWr.show(), this.resize()
	}, this.uZ = function() {
		aWr.uZ()
	}, this.resize = function() {
		aWr.resize(), aWs.resize()
	}, this.a64 = function(eu) {
		2 === eu && aWr.yy[0].tr()
	}, aWr = new ys(L(402), [new x("⬅️ " + L(49), aWu)]), aWs = new tT(aWr.yx, (function(tV) {
		var xP = new tF;
		xP.tI(L(360)), xP.tP(new yo({
			vS: [L(361), L(362), L(363)],
			value: aE.data.iIncomeType
		}, function(eT) {
			aWw(), 2 !== eT || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fh), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eT, u.v(27)
		})), tV.push(xP)
	}(tV = []), function(tV) {
		var xP;
		1 === aE.data.iIncomeType && ((xP = new tF).tI("Value"), xP.tS(new uN({
			eT: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.it(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), tV.push(xP))
	}(tV), function(tV) {
		var xP;
		2 === aE.data.iIncomeType && ((xP = new tF).tI("Data"), (aWt = new zF(0, 1, 0, 1)).zM(bD.pZ.a8J(aE.data.iIncomeData, 4)), xP.tS(aWt), tV.push(xP))
	}(tV), tV))
}

function aV3() {
	var aYr, aYs, aXs, uM, aYt, v2 = 0;
	this.aMg = new vq, aXs = new uB([.45, .27], [.5, .5], 2 / 3), aYs = [new x("⚔️<br>" + L(410), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aYu(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.qq), new x("🗡️<br>" + L(392), function() {
			aYu(1)
		}, bE.rA), new x("🔑<br>" + L(411), function() {
			aYu(2)
		}, bE.rX), new x("☰<br>" + L(412), function() {
			aYu(3)
		}, bE.qa), new x("", function() {
			u.v(12)
		}, bE.qJ, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], uM = new uN(bm.buffer.data[122]);
	for (var aC = 0; aC < aYs.length; aC++) aYs[aC].button.style.position = "absolute";

	function aYu(eT) {
		a1.a2.setState(10), ac.w9() || ac.aMX(), 0 === eT ? u.z.a8w(1) : 1 === eT ? (bC.aOs.a0n(bm.buffer.data[156].value, 1) || aE.a8c.a97(), u.v(19)) : 2 === eT ? 0 !== a1.id || bm.buffer.data[140].value ? u.v(8, u.vj, new vk(16)) : u.z.aYv(u.vj,
			16) : 3 === eT && u.v(1)
	}
	uM.e.style.position = "absolute", uM.e.style.textAlign = "center", uM.e.placeholder = L(413), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aMg.show(), aYs[4].tv(bD.color.a6y(bm.buffer.data[121].value)), this.resize(), document.body.appendChild(uM.e);
		for (var aC = 0; aC < aYs.length; aC++) document.body.appendChild(aYs[aC].button);
		1 !== a1.id || a1.eC < 5 || (aYt && bi.ek > aYt + 144e5 ? a1.zp.setState(14) : aYt = bi.ek)
	}, this.uZ = function() {
		this.aMg.uZ(), u.removeChild(document.body, uM.e);
		for (var aC = 0; aC < aYs.length; aC++) u.removeChild(document.body, aYs[aC].button)
	}, this.resize = function() {
		this.aMg.resize(), this.aMg.resize(), aXs.resize();
		var gap = .5 * bf.gap,
			wc = 10 / 99 * .84 * aXs.j,
			aYy = .16 * aXs.k,
			aDW = .19 * aXs.j,
			fr = aXs.fr + aDW,
			wc = aXs.ft + wc + 3 * gap,
			j = .5 * (aXs.j - gap) - aDW,
			aDW = aXs.j - 2 * aDW - aYy - gap,
			aDW = (bD.ta.w7(uM.e, fr, wc, aDW, aYy), bD.ta.w7(aYs[4].button, fr + aDW + gap, wc, aYy, aYy), v2 = wc, .5 * (aXs.ft + aXs.k - (wc += aYy + gap) - gap));
		bD.ta.w7(aYs[0].button, fr, wc, j, aDW), bD.ta.w7(aYs[1].button, fr + j + gap, wc, j, aDW), bD.ta.w7(aYs[2].button, fr, wc + aDW + gap, j, aDW), bD.ta.w7(aYs[3].button, fr + j + gap, wc + aDW + gap, j, aDW);
		bD.ta.w7(aYs[5].button, fr, wc + aDW * 2 + gap * 2, j * 2 + gap, aDW / 3);
		bD.ta.w7(aYs[6].button, fr, wc + aDW * 2.33 + gap * 3, j * 2 + gap, aDW / 3);
		for (var aC = 0; aC < aYs.length; aC++) aYs[aC].button.style.font = bD.ta.v9(0, bD.ta.yZ(.065 * aXs.k)), bD.ta.tj(aYs[aC].button, 5);
		uM.e.style.font = bD.ta.v9(0, bD.ta.yZ(.08 * aXs.k)), bD.ta.tj(uM.e, 5)
	}, this.z6 = function() {
		ab.aM3(), aU.z6();
		var fk = Math.floor((a1.a2.iu() ? .018 : .0137) * i.iv);
		if (z7.font = bD.ta.v9(0, Math.max(5, fk)), bD.ta.textBaseline(z7, 0), bD.ta.textAlign(z7, 2), z7.fillStyle = bE.qN, z7.fillText(m.eC, i.j, 0), __fx.settings.displayWinCounter && (text = "Win count: " + __fx.wins.count, textLength = z7
				.measureText(text).width, fk = Math.max(5, fk), z7.textAlign = "left", z7.textBaseline = "middle", z7.fillText(text, z7.canvas.width - textLength - fk / 2, 2 * fk)), aP.z6(v2), bb.z6(), ac.w9()) {
			z7.imageSmoothingEnabled = !1;
			var text = ac.xJ("territorial.io"),
				textLength = .84 * aXs.j / text.width;
			z7.setTransform(textLength, 0, 0, textLength, aXs.fr + .08 * aXs.j, aXs.ft), aYr = aYr || bD.p2.a7r(text, bD.p2.a7y, [0, 0, 0]);
			for (var fr = -1; fr <= 1; fr += 2)
				for (var ft = -1; ft <= 1; ft += 2) z7.drawImage(aYr, fr, ft);
			z7.drawImage(text, 0, 0), z7.imageSmoothingEnabled = !0;
			var fk = ac.xJ("logo"),
				aZ1 = .6666 * textLength * text.height / fk.height,
				oJ = .5 * i.j,
				oK = aXs.ft + .5 * textLength * text.height - .5 * aZ1 * fk.height;
			z7.setTransform(aZ1, 0, 0, aZ1, oJ - .6 * textLength * text.width, oK), z7.drawImage(fk, 0, 0), z7.setTransform(aZ1, 0, 0, aZ1, oJ + .6 * textLength * text.width - aZ1 * fk.width, oK), z7.drawImage(fk, 0, 0), z7.setTransform(1, 0, 0,
				1, 0, 0), z7.imageSmoothingEnabled = !0
		}
	}
}

function aVA() {
	var aVT, aZ2, aZ3, yt;

	function aZ4(aC) {
		u.v(8, u.vj, new vk(21, {
			w0: aC,
			w1: 0,
			w2: 10
		}))
	}
	this.show = function() {
		aVT.show(), this.resize()
	}, this.uZ = function() {
		aVT.uZ()
	}, this.resize = function() {
		aVT.resize(), aZ2.resize()
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	}, aZ3 = [new x(L(414), function() {
		aZ4(1)
	}, 0, 0, 1), new x(L(415), function() {
		aZ4(2)
	}, 0, 0, 1), new x(L(416), function() {
		aZ4(3)
	}, 0, 0, 1), new x(L(417), function() {
		aZ4(0)
	}, 0, 0, 1), new x(L(418), function() {
		aZ4(9)
	}, 0, 0, 1), new x(L(419), function() {
		aZ4(10)
	}, 0, 0, 1), new x(L(420), function() {
		aZ4(11)
	}, 0, 0, 1), new x(L(421), function() {
		aZ4(13)
	}, 0, 0, 1)], yt = [new x("⬅️ " + L(49), function() {
		u.a58()
	})], aVT = new ys(L(422), yt), aZ2 = new u9(aZ3, aVT.yx)
}

function aHG(title, tO, aZ5) {
	var aVT, aY9;
	this.show = function() {
		aVT.show(), this.resize()
	}, this.uZ = function() {
		aVT.uZ()
	}, this.resize = function() {
		aVT.resize(), aY9.resize()
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	}, aZ5 = aZ5 || [new x("⬅️ " + L(49), function() {
		u.a58()
	}, bE.r4)], aVT = new ys(title, aZ5), aY9 = new uk(aVT.yx, tO), bD.ta.textAlign(aVT.yx.style, 1)
}

function aFF(data) {
	var aVT, aZ6;

	function aZF(fk) {
		return fk < 60 ? 1 === fk ? fk + " Second" : fk + " Seconds" : fk < 3600 ? 1 === (fk = Math.floor(fk / 60)) ? fk + " Minute" : fk + " Minutes" : fk < 172800 ? 1 === (fk = Math.floor(fk / 3600)) ? fk + " Hour" : fk + " Hours" : (fk = Math
			.floor(fk / 172800)) + " Days"
	}

	function aZ8(kI) {
		var fk = data.data.length;
		if (fk) {
			for (var w1, max = min = parseInt(data.data[0][0]), aC = 1; aC < fk; aC++) var aKE = parseInt(data.data[aC][0]),
				min = Math.min(aKE, min),
				max = Math.max(aKE, max);
			w1 = kI < 0 ? min + kI : max + 1, u.v(8, u.a5D().a5E, new vk(21, {
				w0: data.w0,
				w1: w1,
				w2: w1 + Math.abs(kI)
			}))
		}
	}
	if (this.show = function() {
			aVT.show(), this.resize()
		}, this.uZ = function() {
			aVT.uZ()
		}, this.resize = function() {
			aVT.resize(), aZ6.resize()
		}, this.a64 = function(eu) {
			2 === eu && aVT.yy[0].tr()
		}, data.aFG) {
		aVT = new ys(L(33), [new x("⬅️ " + L(49), function() {
			u.a58()
		})]);
		var fn = {
				vT: [],
				vY: [L(435), L(436), L(437) + " ↗"],
				vf: [12, 50, 38]
			},
			a91 = aE.data.a91;
		if (a91) {
			for (var fk = a91.length, vT = fn.vT, a2R = ah.a2R, aC = 0; aC < fk; aC++) vT.push([{
				gC: aC + 1 + ".",
				el: 0
			}, {
				gC: a2R[aC],
				el: 0
			}, {
				gC: bI.fB.a3G(a91[aC], 5),
				el: 1,
				pd: a91[aC],
				vi: 0
			}]);
			aZ6 = new vR(aVT.yx, fn, {
				vb: 1
			})
		} else aZ6 = new vR(aVT.yx, fn)
	} else {
		var fn = data.data.length ? 0 : 1,
			aZ5 = [new x("⬅️ " + L(49), function() {
				u.a58()
			}), new x(L(423), function() {
				aZ8(-10)
			}, fn, 0, 1), new x(L(424), function() {
				aZ8(10)
			}, fn, 0, 1), new x(L(368), function() {
				u.v(11, 10, new aZ9({
					w0: data.w0
				}))
			})],
			vY = [L(425), L(426), L(427), L(428), L(429), L(430), L(431), L(432), L(433), L(434), L(419), L(420), "Audit Log", L(421)];
		aVT = new ys(vY[data.w0], aZ5), ! function() {
			var aC, fn = {
					vT: []
				},
				vT = fn.vT,
				aZB = data.data,
				fk = aZB.length;
			fk && 0 === aZB[0][0] && 0 <= (eT = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.w0]) && (u.z.w3[eT] = aZB[0][1]);
			var oI = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.w0],
				a84 = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.w0],
				eT = [
					[L(438), L(32) + " ↗", L(439)],
					[L(438), L(440), L(441), L(442) + " ↗"],
					[L(438), L(32) + " ↗", L(441)],
					[L(438), L(32) + " ↗", L(441)],
					[L(435), L(443), L(444) + " ↗", L(445) + " ↗", L(133)],
					[L(435), L(443), L(446) + " ↗", L(447) + " ↗", L(448)],
					[L(435), L(443), L(449) + " ↗", L(450) + " ↗", L(451)],
					[L(435), L(443), L(446) + " ↗", L(447) + " ↗", L(452)],
					[L(435), L(443), L(444) + " ↗", L(445) + " ↗", L(133)],
					[L(438), L(32) + " ↗", L(441)],
					[L(438), L(32) + " ↗", L(453)],
					[L(438), L(32) + " ↗", L(441)],
					[L(435), L(443), L(444) + " ↗", L(445) + " ↗", L(454)],
					[L(438), L(32) + " ↗", L(441)]
				];
			if (fn.vY = eT[data.w0], fn.vf = [
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
				][data.w0], 0 === data.w0 || 2 === data.w0 || 3 === data.w0 || 9 === data.w0 || 10 === data.w0 || 11 === data.w0 || 13 === data.w0)
				for (aC = 0; aC < fk; aC++) vT.push([{
					gC: aZB[aC][0] + 1 + ".",
					el: 0
				}, {
					gC: aZB[aC][1],
					el: 1,
					pd: aZB[aC][4],
					vi: aZB[aC][3]
				}, {
					gC: (oI * aZB[aC][2]).toFixed(a84),
					el: 0
				}]);
			else if (12 === data.w0)
				for (aC = 0; aC < fk; aC++) {
					var aZE = aZB[aC][3];
					vT.push([{
						gC: "" + aZB[aC][0],
						el: 0
					}, {
						gC: aZF(aZB[aC][4]),
						el: 0
					}, {
						gC: aZB[aC][5],
						el: 1,
						pd: aZB[aC][1],
						vi: 0
					}, {
						gC: aZB[aC][6],
						el: 1,
						pd: aZB[aC][2],
						vi: 0
					}, {
						gC: br.eZ(aZE, bI.fB.a3G(aZB[aC][1], 5)),
						el: 0
					}])
				} else if (1 === data.w0)
					for (aC = 0; aC < fk; aC++) vT.push([{
						gC: aZB[aC][0] + 1 + ".",
						el: 0
					}, {
						gC: aZB[aC][1],
						el: 0
					}, {
						gC: (oI * aZB[aC][2]).toFixed(a84),
						el: 0
					}, {
						gC: aZB[aC][3],
						el: 1,
						pd: aZB[aC][5],
						vi: aZB[aC][4]
					}]);
				else if (4 === data.w0 || 5 === data.w0 || 6 === data.w0 || 7 === data.w0 || 8 === data.w0)
				for (aC = 0; aC < fk; aC++) {
					var aZG = aZB[aC][5];
					4 === data.w0 || 8 === data.w0 ? "100%" === (aZG = (aZG % 64 * 100 / (aZG >> 6)).toFixed(0) + "%") && (4 === data.w0 ? aZG += " (" + L(455) + ")" : aZG += " (" + L(456) + ")") : 5 === data.w0 ? 32768 <= aZG && (aZG = -(aZG -
						32768)) : aZG = (oI * aZG).toFixed(a84), vT.push([{
						gC: "" + aZB[aC][0],
						el: 0
					}, {
						gC: aZF(aZB[aC][6]),
						el: 0
					}, {
						gC: aZB[aC][7],
						el: 1,
						pd: aZB[aC][1],
						vi: aZB[aC][2]
					}, {
						gC: aZB[aC][8],
						el: 1,
						pd: aZB[aC][3],
						vi: aZB[aC][4]
					}, {
						gC: "" + aZG,
						el: 0
					}])
				}
			aZ6 = new vR(aVT.yx, fn)
		}()
	}
}

function aZ9(a7t) {
	var aVT, aVU, tV;
	this.show = function() {
		aVT.show(), this.resize()
	}, this.uZ = function() {
		aVT.uZ()
	}, this.resize = function() {
		aVT.resize(), aVU.resize()
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	}, aVT = new ys(L(457), [new x("⬅️ " + L(49), function() {
		u.aVR(10)
	})]), aVU = new tT(aVT.yx, ((tV = []).push(function() {
		var aKm, xP = new tF,
			aXq = new uN(bm.buffer.data[132], 1, function() {
				aKm.button.click()
			}),
			aXr = new uN(bm.buffer.data[131], 1, function() {
				aXq.e.focus()
			});
		xP.tI(L(373)), xP.tS(aXr), aXr.e.style.marginBottom = "0.8em", xP.tI(L(374)), xP.tS(aXq);
		return aKm = new x(L(372), function() {
			w1 = Math.floor(aXr.e.value), w2 = Math.floor(aXq.e.value);
			var w2, w1 = {
				a6Y: Math.min(w1, w2),
				aTs: Math.max(w1, w2)
			};
			u.v(8, u.a9D(10).a5E, new vk(21, {
				w0: a7t.w0,
				w1: w1.a6Y,
				w2: w1.aTs
			}))
		}, 0, 0, 1), xP.tS(new ul([aKm.button])), xP
	}()), tV.push(function() {
		var aKm, xP = new tF,
			aXq = new uN(bm.buffer.data[134], 1, function() {
				aKm.button.click()
			}),
			aXr = new uN(bm.buffer.data[133], 0, function() {
				aXq.e.focus()
			});
		return xP.tI(1 === a7t.w0 ? L(458) : L(459)), xP.tS(aXr), aXr.e.style.marginBottom = "0.8em", xP.tI(L(460)), xP.tS(aXq), aKm = new x(L(372), function() {
			var aYI = aXr.e.value.slice(0, 20),
				aYJ = Math.abs(Math.floor(aXq.e.value));
			u.v(8, u.a9D(10).a5E, new vk(22, {
				w0: a7t.w0,
				aYI: aYI,
				aYJ: aYJ
			}))
		}, 0, 0, 1), xP.tS(new ul([aKm.button])), xP
	}()), tV.push(function() {
		var aKm, xP = new tF,
			aXq = new uN(bm.buffer.data[152], 1, function() {
				aKm.button.click()
			}),
			aXr = new uN(bm.buffer.data[151], 0, function() {
				aXq.e.focus()
			});
		return xP.tI(L(461)), xP.tS(aXr), aXr.e.style.marginBottom = "0.8em", xP.tI(L(460)), xP.tS(aXq), aKm = new x(L(372), function() {
			var aYI = aXr.e.value.slice(0, 5),
				aYJ = Math.abs(Math.floor(aXq.e.value));
			u.v(8, u.a9D(10).a5E, new vk(28, {
				w0: a7t.w0,
				aYI: aYI,
				aYJ: aYJ
			}))
		}, 0, 0, 1), xP.tS(new ul([aKm.button])), xP
	}()), tV))
}

function aVN() {
	var aZK, aZL, aZM, aZN, aZO, aZP, aZQ, wC, wD, aZR = new Array(2);

	function aZT(button, aZV) {
		button = new uV("", button, 1, aZV);
		return button.uX.style.right = "0.2em", button.uX.style.textAlign = "left", button.uX.style.overflow = "hidden", button.uX.style.textOverflow = "ellipsis", button.uX.translate = !1, button
	}

	function aJv() {
		var input, aIr;
		!bq.fH || (aIr = (input = aZK.wM.uM.e).value.trim().slice(0, 255)).length < 1 || (bq.pX.a41(aIr), input.value = bq.pX.aK5(), aZK.wM.uW(), bM.u3()) || input.focus()
	}

	function aZS(wY) {
		var aZX = bq.z.aHa;
		aZX !== wY && (aZU(aZX, 0), aZU(wY, 1), bq.z.aHa = wY, 0 === aZX && b1.aIH.aII(1), 0 === wY ? (b1.aIH.aII(0), c0.nG.nS()) : 1 === wY && aZK.wN.nS(), aZK.wX(wY), aZK.resize())
	}

	function aZU(wY, color) {
		wC.p6[wY].tv(color ? bE.qm : bE.rh), wC.p6[wY].button.classList.toggle("fx-selected", !!color)
	}

	function aMH(aMK) {
		aMK && bq.fH && 29 === u.vj && (u.a9D(29).aJO(), bq.xN.aJP())
	}
	this.pX = function(pd) {
		aZS(0);
		var pV = aZK.wM.uM.e.value,
			pd = "@" + pd + " ";
		pV.length && !bD.pZ.a7L(pV, " ") && (pd = " " + pd), aZK.wM.uM.e.value = pV += pd, aZK.wM.uW(), aZK.wM.uM.e.focus()
	}, this.aJM = function() {
		aZK.wN.nS()
	}, this.aIJ = function() {
		var tV = bq.tV,
			tV = tV.aIG() ? tV.xR ? bE.rN : bE.qm : bE.rh;
		wD.p6[1].tv(tV), aZK.wP.nS()
	}, this.aJO = function() {
		var tV = bq.tV,
			aC = tV.xs(tV.xQ);
		aC < 0 || (tV = tV.tV[aC], bV.aJe.aMK(tV.fQ) ? bV.a8(tV.fQ, tV.mapSeed) : bV.aJe.zn(tV.fQ, aMH))
	}, this.aJN = function() {
		aZK.wV(bq.z.wW);
		var xC = bq.pl.xC,
			aZY = xC.length,
			xP = bq.tV.tV[0],
			aZZ = xP ? Math.min(bq.tV.xS(xP), aZY) : 0;
		aZL.uX.textContent = "" + aZY, aZM.uX.textContent = "" + aZZ, aZN.uX.textContent = aP.aBP(0, 2), aZO.uX.textContent = aP.aBP(2, 4), aZP.uX.textContent = xP ? bq.tV.xV(xP.xA) + "   " + bV.xT.xU[xP.fQ] : "", aZQ[0].uX.textContent = bq.ls
			.aIw(xC, 0, aZY), aZQ[1].uX.textContent = xP && xP.xA < 7 ? bq.ls.aIw(xC, 0, aZZ) : "", aZR[1].uX.textContent = "Multiplayer: " + bq.z.aJI[0] + "   Single: " + bq.z.aJI[1] + "   Lobby: " + aZY, this.aIJ()
	}, this.aJR = function() {
		c0.nG.nS()
	}, this.show = function() {
		bq.z.aHZ++, aZK.show(), this.resize(), bq.message.show()
	}, this.uZ = function() {
		aZK.uZ(), bq.yK.uZ(), bq.xo.uZ(), bq.message.uZ()
	}, this.resize = function() {
		aZK.resize(), bq.message.resize()
	}, this.a64 = function(eu) {
		2 === eu ? bq.tV.xQ ? bq.tV.select(0) : wD.p6[0].tr() : eu < 2 && bq.tV.click(0)
	}, wC = new uo([new x(L(462), function() {
		return aZS(0), 2
	}), new x(L(33), function() {
		return aZS(1), 2
	}), new x(L(463), function() {
		return aZS(2), 2
	})], bE.rh, 0, [18, 36, 46]);
	for (var aC = 0; aC < 3; aC++) wC.p6[aC].button.style.padding = "0";
	wD = new uo([new x(L(35, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			u.y(), bq.y9(), b1.z.a5M(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		}),
		function() {
			u.y(), bq.y9(), b1.z.a5M(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		})), new x(L(464), function() {
		return bq.tV.click(0), 2
	})], bE.rh, 0, [25, 75]), aZK = new wB(wC, wD, aJv, bq.yK.aKS, function(eT, xw) {
		bq.fH && bq.tV.click(eT, xw)
	});
	var join = wD.p6[1].button,
		input = (bD.ta.wm(join, null, function() {
			bq.fH && bq.tV.click(0, 1)
		}), aZK.wM.uM.e);
	input.addEventListener("beforeinput", function(event) {
			bq.fH && bq.pX.aK7(event, input) && aZK.wM.uW()
		}), aZL = new uV("0", wC.p6[1].button), aZM = new uV("0", wD.p6[1].button), aZN = aZT(wC.p6[2].button, 0), aZO = aZT(wC.p6[2].button, 1), (aZP = aZT(wD.p6[1].button, 0)).uX.style.right = "3em", (aZQ = [new uV("", wC.p6[1].button, 1, 1),
			new uV("", wD.p6[1].button, 1, 1)
		])[0].uX.style.bottom = "0em", aZQ[1].uX.style.bottom = "0em", aZQ[0].uX.translate = !1, aZQ[1].uX.translate = !1, aZU(bq.z.aHa, 1), (aZR = [new uV(L(366), aZK.wZ(), 1, 0), new uV("", aZK.wZ(), 1, 1)])[0].uX.style.fontSize = "0.4em", aZR[1]
		.uX.style.fontSize = "0.4em"
}

function aV4() {
	var aVT, aVU, tV;
	this.show = function() {
		aVT.show(), this.resize()
	}, this.uZ = function() {
		aVT.uZ()
	}, this.resize = function() {
		aVT.resize(), aVU.resize()
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	}, aVT = new ys(L(465), [new x("⬅️ " + L(49), function() {
		u.v(7, u.a9D(7).a5E)
	}), new x(L(267), function() {
		bm.rt.q0(105, bJ.fB.a0f(aVU.tX[0].tG[0].e.value, 5)), bm.rt.q0(106, bJ.fB.a0f(aVU.tX[1].tG[0].e.value, 15)), u.v(8, u.a9D(7).a5E, new vk(18))
	})]), aVU = new tT(aVT.yx, ((tV = []).push(function() {
		var xP = new tF;
		return xP.tI(L(244)), xP.tS(new uN({
			value: "",
			eT: -1
		})), xP
	}()), tV.push(function() {
		var xP = new tF,
			aW9 = (xP.tI(L(247)), new uN({
				value: "",
				eT: -1
			}));
		return aW9.e.type = "password", xP.tS(aW9), xP.tS(new ul([new x(L(248), function(e) {
			return e.textContent === L(248) ? (e.textContent = L(249), aW9.e.type = "text") : (e.textContent = L(248), aW9.e.type = "password"), !0
		}).button])), xP
	}()), tV.push(function() {
		var xP = new tF;
		return xP.tI(L(251)), xP.tJ(L(466)), xP.tJ(L(467)), xP.tJ(L(468)), xP
	}()), tV))
}

function aVB() {
	var aVT, aZ2, aZ3, yt;

	function aZ4(aC) {
		u.v(8, u.vj, new vk(21, {
			w0: aC,
			w1: 0,
			w2: 10
		}))
	}
	this.show = function() {
		aVT.show(), this.resize()
	}, this.uZ = function() {
		aVT.uZ()
	}, this.resize = function() {
		aVT.resize(), aZ2.resize()
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	}, aZ3 = [new x(L(430), function() {
		aZ4(5)
	}, 0, 0, 1), new x(L(431), function() {
		aZ4(6)
	}, 0, 0, 1), new x(L(432), function() {
		aZ4(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aZ4(12)
	}, 0, 0, 1)], yt = [new x("⬅️ " + L(49), function() {
		u.a58()
	})], aVT = new ys(L(469), yt), aZ2 = new u9(aZ3, aVT.yx)
}

function aUt() {
	this.buffer = {}, this.w3 = new Array(8), this.aV9 = null, this.aV6 = null, this.vP = 0, this.vc = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a8w = function(aZc) {
		aZc && (aa.fD = aZc), u.y(), aa.dv()
	}, __fx.customLobby.setJoinFunction(() => this.a8w(1)), this.aGt = function() {
		u.v(0 === ab.a59() ? 5 : 0)
	}, this.aXl = function() {
		if (1 === bm.buffer.data[130].value) u.v(8, u.a5D().a5E, new vk(24, {
			aXK: bm.buffer.data[125].value,
			w1: bm.buffer.data[128].value,
			w2: bm.buffer.data[129].value
		}));
		else {
			for (var h = (h = bm.buffer.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a5D().a5E, new vk(23, {
				aXK: bm.buffer.data[125].value,
				a4i: h
			}))
		}
	}, this.aYv = function(a5E, target) {
		u.v(4, a5E, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aVv(
				"/privacy") + "<br>By playing you agree to our Terms of Service: " + b1.z.aVv("/terms"), !1, [new x("⬅️ " + L(49), function() {
				u.v(a5E)
			}), new x("✅ Accept", function() {
				bm.rt.q0(140, 1), 0 === target ? u.v(2, a5E) : u.v(8, a5E, new vk(target))
			})]))
	}, this.aZd = function() {
		for (var aC = 0; aC < 8; aC++) this.w3[aC] = bJ.a0W.a0a(bK.sd(5));
		this.w3[1] = "[" + this.w3[1] + "]", 5 === u.vj && (u.a5D().aMg.q0(this.w3), u.a5D().resize())
	}, this.aW4 = function(gC, rr, aAo) {
		gC = bD.h6.a7q(gC, 1, 1e6);
		rr = L(470, [rr]);
		return (rr += "<br>") + L(471, [__fx.utils.escapeHtml("" + aAo)]) + "<br>" + L(472, [gC + "–" + (gC + 2)]) + "<br>" + L(473, [gC])
	}
}

function aVE() {
	var aWr, aWs, aZe, tV;

	function aWu() {
		b7.y9(), u.aVS()[19] = null, u.a58()
	}

	function aZl() {
		aZo(), aZm()
	}

	function aZo() {
		aZe.tH.lastChild && u.removeChild(aZe.tH, aZe.tH.lastChild)
	}

	function aZm() {
		var aYV = bV.a94(aE.data);
		bV.aJe.aMK(aYV) ? (aE.data.canvas = bV.aRU(aYV, aE.data.mapSeed).a22, aZn()) : (aE.data.canvas = null, bV.aJe.aTF(aYV, function(aMK) {
			aMK && 20 === u.vj && 2 !== aE.data.mapType && bV.a94(aE.data) === aYV && u.v(20)
		}))
	}

	function aZn() {
		var a6q = aE.data.canvas;
		a6q.style.width = "100%", aZe.tH.appendChild(a6q)
	}
	this.aNu = function(a6q) {
		aE.data.canvas && aZo(), aE.data.canvas = a6q, aZn()
	}, this.show = function() {
		aWr.show(), this.resize()
	}, this.uZ = function() {
		aWr.uZ()
	}, this.resize = function() {
		aWr.resize(), aWs.resize()
	}, this.a64 = function(eu) {
		2 === eu && aWr.yy[0].tr()
	}, aWr = new ys(L(394), [new x("⬅️ " + L(49), aWu)]), 2 === aE.data.mapType && b7.dv(), aWs = new tT(aWr.yx, (function(tV) {
		var xP = new tF;
		xP.tI(L(360)), xP.tP(new yo({
			vS: [L(474), L(475), L(476)],
			value: aE.data.mapType
		}, function(eT) {
			2 === (aE.data.mapType = eT) ? (b7.dv(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.y9()), u.v(20)
		})), 2 <= aE.data.mapType && (xP.tS(new vB), xP.tS(new uh({
			value: aE.data.passableWater
		}, L(477), function(value) {
			aE.data.passableWater = value
		})), xP.tS(new uh({
			value: aE.data.passableMountains
		}, L(478), function(value) {
			aE.data.passableMountains = value
		})));
		tV.push(xP)
	}(tV = []), function(tV) {
		if (0 === aE.data.mapType) {
			for (var xP = new tF, vS = (xP.tI(L(394)), []), aC = 0; aC < bV.xT.aSS.length; aC++) vS.push(bV.xT.aB1[bV.xT.aSS[aC]].name);
			xP.tP(new yo({
				vS: vS,
				value: aE.data.mapProceduralIndex
			}, function(eT) {
				aE.data.mapProceduralIndex = eT, aZl()
			})), tV.push(xP)
		}
	}(tV), function(tV) {
		if (1 === aE.data.mapType) {
			for (var xP = new tF, vS = (xP.tI(L(394)), []), aC = 0; aC < bV.xT.aST.length; aC++) vS.push(bV.xT.aB1[bV.xT.aST[aC]].name);
			xP.tP(new yo({
				vS: vS,
				value: aE.data.mapRealisticIndex
			}, function(eT) {
				aE.data.mapRealisticIndex = eT, aZl()
			})), tV.push(xP)
		}
	}(tV), function(tV) {
		var xP;
		2 === aE.data.mapType && ((xP = new tF).tI(L(479)), xP.tS(new uN(bm.buffer.data[162], 1)), xP.tI(L(480), "0.8em"), xP.tS(new ul([new x(L(481), function() {
			return b7.aNn(), !0
		}).button])), tV.push(xP))
	}(tV), function(tV) {
		var xP, uM;
		2 === aE.data.mapType && ((xP = new tF).tI(L(482)), uM = new uN({
			eT: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), xP.tS(uM), tV.push(xP))
	}(tV), function(tV) {
		var xP, uM, aKm;
		0 === aE.data.mapType && ((xP = new tF).tI("Seed"), uM = new uN({
			eT: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aZl())
		}), aKm = new x(L(385), function(e) {
			var aRQ = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aRQ) return uM.e.value = aE.data.mapSeed = aRQ, aZl(), !0
		}), xP.tS(uM), xP.tS(new ul([aKm.button])), tV.push(xP))
	}(tV), function(tV) {
		(aZe = new tF).tI(L(483)), 2 !== aE.data.mapType ? aZm() : aE.data.canvas && aZn();
		tV.push(aZe)
	}(tV), tV))
}

function w(title, tO, aZp, aZ5) {
	var aVT, aY9;
	this.show = function() {
		aVT.show(), this.resize()
	}, this.uZ = function() {
		aVT.uZ()
	}, this.resize = function() {
		aVT.resize(), aY9.resize()
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	}, aZ5 = aZ5 || [new x("⬅️ " + L(49), function() {
		u.a58()
	})], aVT = new ys(title, aZ5), aY9 = new uk(aVT.yx, tO), aZp && bD.ta.textAlign(aVT.yx.style, 1)
}

function aVH() {
	var aWr, aWs, aWt, tV;

	function aWu() {
		aWw(), 2 === aE.data.playerNamesType && 1 === bD.th.a6U(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aVS()[19] = null, u.a58()
	}

	function aWw() {
		2 === aE.data.playerNamesType && bD.th.a6i(aWt.zN(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aWr.show(), this.resize()
	}, this.uZ = function() {
		aWr.uZ()
	}, this.resize = function() {
		aWr.resize(), aWs.resize()
	}, this.a64 = function(eu) {
		2 === eu && aWr.yy[0].tr()
	}, aWr = new ys(L(398), [new x("⬅️ " + L(49), aWu)]), aWs = new tT(aWr.yx, (function(tV) {
		var xP = new tF;
		xP.tI(L(360)), xP.tP(new yo({
			vS: [L(399), L(400), L(363)],
			value: aE.data.playerNamesType
		}, function(eT) {
			aWw(), aE.data.playerNamesType = eT, u.v(23)
		})), xP.tS(new vB), xP.tS(new uh({
			value: aE.data.selectableName
		}, L(484), function(value) {
			aE.data.selectableName = value
		})), tV.push(xP)
	}(tV = []), function(tV) {
		var xP;
		2 === aE.data.playerNamesType && ((xP = new tF).tI("Data"), aWt = new zF(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fh || (aE.data.playerNamesData = new Array(aE.fh), aE.data.playerNamesData
			.fill("")), aWt.zM(bD.pZ.a8J(aE.data.playerNamesData, 1, '"')), xP.tS(aWt), tV.push(xP))
	}(tV), tV))
}

function aVP() {
	var aWr, aWs, tV;

	function aZv() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.buffer.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var g3 = 0; g3 < 3; g3++) g3 < h.length && (colors[aC][g3] = Number(h[g3]))
		}
		return colors
	}
	this.show = function() {
		aWr.show(), this.resize()
	}, this.uZ = function() {
		aWr.uZ()
	}, this.resize = function() {
		aWr.resize(), aWs.resize()
	}, this.a64 = function(eu) {
		2 === eu && aWr.yy[0].tr()
	}, aWr = new ys(L(485), [new x("⬅️ " + L(49), function() {
		u.a58()
	})]), aWs = new tT(aWr.yx, ((tV = []).push(function() {
		var xP = new tF;
		return xP.tI(L(486)), xP.tN(b1.z.aVv("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", xP.tN("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), xP
	}()), tV.push(function() {
		var xP = new tF,
			ew = (xP.tI(L(487)), bm.buffer.data[174].value),
			tK = xP.tJ(ew.length + " / 180"),
			aWa = (tK.style.textAlign = "center", new zF(0, 1, function(e) {
				var e = e.target.value,
					hD = e.length;
				tK.textContent = hD + " / 180", hD <= 180 && bm.rt.q0(174, e)
			}));
		return aWa.e.rows = 6, aWa.e.style.fontSize = "1em", aWa.zM(ew), xP.tS(aWa), xP
	}()), tV.push(function() {
		var xP = new tF;
		xP.tI(L(384));
		for (var aC = 0; aC < 11; aC++) {
			var j4 = xP.tS(new uN(bm.buffer.data[163 + aC]));
			aC && (j4.e.style.marginTop = "0.6em")
		}
		return xP.tS(new ul([new x(L(488), function() {
			for (var data = bm.buffer.data, aC = 163; aC < 174; aC++) data[aC] && bm.buffer.zc(aC, data[aC].zf);
			u.a58(), u.aVS()[31] = null, u.v(31)
		}).button])), xP
	}()), tV.push(function() {
		var xP = new tF;
		return xP.tI("Targeting"), xP.tN(L(489)), xP.tS(new uN(bm.buffer.data[175], 0, 0)), xP
	}()), tV.push(function() {
		var xP = new tF;
		return xP.tI(L(483)), xP.tS(new ul([new x(L(248), function() {
			(new ev).show(bm.buffer.data[174].value, aZv(), -1)
		}).button])), xP
	}()), tV.push(function() {
		var xP = new tF,
			aZw = (xP.tI(L(490)), xP.tN(L(491)), new uN(bm.buffer.data[176], 1, 0)),
			aZx = (xP.tS(aZw), new x(L(492), function(e) {
				return aZy.button.textContent === L(170) && b1.z.eq(0) && (bD.ta.yl(e), aW1(), b1.aW2.aZz(bm.buffer.data[176].value, aZv(), bm.buffer.data[175].value, bm.buffer.data[174].value)), !0
			}, 1)),
			aW1 = function() {
				aZy.button.textContent = L(232), aZx.tv(1), aZx.button.style.color = bE.qN
			},
			aZy = new x(L(232), function(e) {
				return e.textContent === L(232) ? (e.textContent = L(170), aZx.tv(0), aZx.button.style.color = bE.rS) : aW1(), !0
			});
		return xP.tS(new ul([aZy.button, aZx.button])), xP
	}()), tV))
}

function aVQ() {
	var aVT, aVU, tV;
	this.show = function() {
		aVT.show(), this.resize()
	}, this.uZ = function() {
		aVT.uZ()
	}, this.resize = function() {
		aVT.resize(), aVU.resize()
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	}, aVT = new ys("🔒 " + L(493), [new x("⬅️ " + L(49), function() {
		u.a58()
	})]), aVU = new tT(aVT.yx, ((tV = []).push(function() {
		var xP = new tF,
			uM = (xP.tN(b1.z.aVv("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", xP.tI(L(244)), new uN({
				value: "",
				eT: -1
			})),
			aWW = (xP.tS(uM), xP.tI(L(318), "0.8em"), new uN({
				value: "",
				eT: -1
			}, 0, 0)),
			aW0 = (aWW.e.type = "email", aWW.e.autocomplete = "email", aWW.e.name = "email", aWW.e.inputMode = "email", aWW.e.spellcheck = !1, xP.tS(aWW), new x(L(494), function(e) {
				return bD.ta.yl(e), b1.aW2.aWX({
					action: 4,
					pV: uM.e.value.trim() + aWW.e.value.trim().substring(0, 63)
				}), !0
			}));
		return xP.tS(new ul([aW0.button])), xP
	}()), tV))
}

function aV2() {
	var aWr, zK;

	function aa0() {
		u.y();
		var playedGame = aE.a3x && !aE.ht ? bC.a8t.a3R() : "",
			pV = bC.aa4(zK.zN());
		(aE.a3x && 0 < pV.length && pV === bC.sp.a8s || bC.aOs.a0n(pV)) && (__fx.replayHistory.save(playedGame), bC.aa5())
	}
	this.show = function(aa1) {
		this.aa2(aa1), aWr.show(), this.resize()
	}, this.aa2 = function(aa1) {
		0 === aE.a3x ? aa1 ? zK.zM(aa1) : aE.a8f.length && zK.zM(aE.a8f) : (aE.ht || (bC.sp.a8s = bC.a8t.a3R()), zK.zM(bC.aa3(bC.sp.a8s)))
	}, this.zM = function(pV) {
		zK.zM(pV)
	}, this.uZ = function() {
		aWr.uZ()
	}, this.resize = function() {
		aWr.resize(), zK.resize()
	}, this.a64 = function(eu) {
		2 === eu ? aWr.yy[0].tr() : aa0()
	}, aWr = new ys(L(495), [new x("⬅️ " + L(49), function() {
		u.aVR(1)
	}), new x(L(496), function() {
		zK.zO()
	}), new x(L(497), function() {
		zK.zP()
	}), new x(L(498), function() {
		zK.clear()
	}), new x(L(499), function() {
		aa0()
	})]), zK = new zF(L(500)), aWr.yx.appendChild(zK.e)
}

function aV1() {
	var aVT, aVU, tV, xP;

	function aa6() {
		bA.aGf !== bm.buffer.data[12].value ? (bA.dv(), u.v(8, 1, new vk(30))) : u.v(1)
	}
	this.show = function() {
			aVT.show(), this.resize()
		}, this.uZ = function() {
			aVT.uZ()
		}, this.resize = function() {
			aVT.resize(), aVU.resize()
		}, this.a64 = function(eu) {
			2 === eu && aVT.yy[0].tr()
		}, aVT = new ys(L(501), [new x("⬅️ " + L(49), aa6), new x(L(502), function() {
			u.y(), bm.rt.a0D(), u.v(2)
		})]), tV = [], (xP = new tF).tI(L(503)), xP.tJ(L(504)), tV.push(xP),
		function(tV) {
			var xP = new tF,
				h = (xP.tI(L(489)), bA.data.aGw());
			xP.tP(new yo({
				vS: h,
				value: bA.data.aH0(h)
			}, function(eT) {
				return bm.rt.q0(12, h[eT].split(":")[0]), !0
			})), tV.push(xP)
		}(tV),
		function(tV) {
			var xP = new tF,
				aa9 = (xP.tI(L(529)), []);
			xP.tS(new ul([new x(L(488), function(e) {
				ba.aaA();
				for (var aC = 0; aC < aa9.length; aC++) aa9[aC].e.value = ba.aG7[aC];
				return bD.ta.yl(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aaB.length; aC++) {
				xP.tJ(ba.aaB[aC]);
				for (var g3 = 0; g3 < 2; g3++) {
					var eT = 2 * aC + g3,
						uM = new uN({
							value: ba.aG7[eT],
							eT: -1
						});
					uM.e.aaC = eT, aa9.push(uM), uM.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aaD(e.target.aaC, code)
					}), g3 && (uM.e.style.marginLeft = "4%"), uM.e.style.width = "48%", xP.tS(uM)
				}
			}
			tV.push(xP)
		}(tV), (xP = new tF).tI(L(505)), bm.buffer.data[1].vS = [L(506), L(507), L(508), L(509)], xP.tP(new yo(bm.buffer.data[1])), tV.push(xP), (xP = new tF).tI(L(510)), bm.buffer.data[9].vS = [L(507), L(511), L(512)], xP.tP(new yo(bm.buffer.data[
			9])), tV.push(xP), (xP = new tF).tI(L(513)), bm.buffer.data[11].vS = [L(514), L(9), L(515)], xP.tP(new yo(bm.buffer.data[11])), tV.push(xP), (xP = new tF).tI(L(516)), xP.tS(new uh(bm.buffer.data[2])), tV.push(xP), (xP = new tF).tI(L(
		517)), xP.tS(new uh(bm.buffer.data[7])), tV.push(xP), (xP = new tF).tI(L(518)), xP.tS(new uh(bm.buffer.data[8])), tV.push(xP), (xP = new tF).tI(L(519)), xP.tS(new uN(bm.buffer.data[5])), tV.push(xP), (xP = new tF).tI(L(520)), xP.tS(new uh(bm
			.buffer.data[13], L(521))), xP.tS(new uh(bm.buffer.data[14], L(522))), tV.push(xP), (xP = new tF).tI(L(523)), xP.tP(new yo({
			vS: [L(524), L(525), L(526)],
			value: aa.aLi
		}, function(aC) {
			aa.aLi = aC
		})), tV.push(xP), (xP = new tF).tI(L(527)), xP.tS(new uh(bm.buffer.data[15])), xP.tJ(L(528)), xP.tS(new uN(bm.buffer.data[16], 1, 0, function(e) {
			e.target.value = bO.it(Math.floor(e.target.value), 0, 16)
		})), tV.push(xP), aVU = new tT(aVT.yx, tV)
}

function aVI() {
	var aWr, aWs, aWt, tV;

	function aWu() {
		aWw(), 2 !== aE.data.spawningType || bD.th.a6U(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aVS()[19] = null, u.a58()
	}

	function aWw() {
		2 === aE.data.spawningType && bD.th.a6g(aWt.zN(), aE.data.spawningData, bV.aNx - 1)
	}
	this.show = function() {
		aWr.show(), this.resize()
	}, this.uZ = function() {
		aWr.uZ()
	}, this.resize = function() {
		aWr.resize(), aWs.resize()
	}, this.a64 = function(eu) {
		2 === eu && aWr.yy[0].tr()
	}, aWr = new ys(L(530), [new x("⬅️ " + L(49), aWu)]), aWs = new tT(aWr.yx, (function(tV) {
		var xP = new tF,
			vS = (xP.tI(L(360)), [L(385), L(397), L(363)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (vS.splice(1, 1), 0 < value) && (value = 1);
		xP.tP(new yo({
			vS: vS,
			value: value
		}, function(eT) {
			aWw(), aE.data.spawningType = eT, 0 === aE.data.gameMode && 1 === eT && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fh)), u.v(24)
		})), tV.push(xP)
	}(tV = []), function(tV) {
		var xP = new tF;
		xP.tI("My Spawn"), xP.tS(new uh({
			value: aE.data.selectableSpawn
		}, L(531), function(value) {
			aE.data.selectableSpawn = value
		})), tV.push(xP)
	}(tV), function(tV) {
		var xP = new tF,
			aaF = (xP.tI("Seed"), new uN({
				eT: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		xP.tS(aaF), xP.tS(new ul([new x(L(385), function() {
			aaF.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), tV.push(xP)
	}(tV), function(tV) {
		var xP;
		2 === aE.data.spawningType && ((xP = new tF).tI("Data"), (aWt = new zF(0, 1, 0, 1)).zM(bD.pZ.a8J(aE.data.spawningData, 2)), xP.tS(aWt), tV.push(xP))
	}(tV), tV))
}

function aV0() {
	var aVT, aZ2, aZ3, yt;

	function aaG(id) {
		0 !== a1.id || bm.buffer.data[140].value ? 0 === id ? u.v(8, 1, new vk(16)) : u.v(2) : u.z.aYv(u.vj, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aVT.show(), this.resize(), this.ep()
	}, this.uZ = function() {
		aVT.uZ()
	}, this.resize = function() {
		aVT.resize(), aZ2.resize()
	}, this.ep = function() {
		8 === ab.a59() && (bg.aaL() ? aZ3[2].ts === bE.qZ && aZ3[2].tv(0) : aZ3[2].ts !== bE.qZ && aZ3[2].tv(bE.qZ), aE.ht || aE.hu || !aN.tD(aE.fU) ? aZ3[1].ts !== bE.qZ && aZ3[1].tv(bE.qZ) : aZ3[1].ts === bE.qZ && aZ3[1].tv(0), aE.ht || aE
			.hu || !ax.iX(aE.fU) ? aZ3[0].ts !== bE.qZ && aZ3[0].tv(bE.qZ) : aZ3[0].ts === bE.qZ && aZ3[0].tv(0))
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	}, aZ3 = [new x(L(532), function() {
		aaG(0)
	}), new x(L(422), function() {
		u.v(16)
	}), new x(L(469), function() {
		u.v(17)
	}), new x(L(533), function() {
		u.z.aXl()
	}, 0, 0, 1), new x(L(495), function() {
		u.v(3, 1)
	}), new x(L(534), function() {
		u.v(18)
	}), new x(L(485), function() {
		u.v(31)
	}), new x(L(535), function() {
		u.z.a8w(2)
	}), new x(L(501), function() {
		aaG(1)
	}), new x("🔒 " + L(493), function() {
		u.v(32)
	}), new x(L(536), function() {
		var a7H, qD;
		(a7H = []).push(["Wiki", (qD = "https://territorial.io/") + "wiki/gold"]), a7H.push(["Team Games", qD + "log/team"]), a7H.push(["Battle Royale Games", qD + "log/br"]), a7H.push(["1v1 Games", qD + "log/1v1"]), a7H.push([
			"Zombie Games", qD + "log/zombies"
		]), a7H.push(["Transactions", qD + "log/transactions"]), a7H.push(["Changelog", qD + "changelog"]), 2 !== a1.id && a7H.push(["Android App", bN.aHD]), 1 !== a1.id && a7H.push(["iOS App", bN.a55]), 0 === a1.id && a7H.push([
			"Patreon", bN.aWp
		]), a7H.push(["Terms", bN.aaM]), a7H.push(["Privacy", bN.aaN]), u.v(4, 1, new w(L(536), bD.ta.a7G(a7H), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		})]))
	}), new x(L(537), function() {
		u.v(4, 1, new w(L(537), m.eC + "<br>" + b1.z.aVv("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(49),
				function() {
					u.v(1)
				})]))
	}), new x(L(538), function() {
		u.v(4, 1, new w(L(538), L(545) + "<br>" + L(546), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		}), new x(L(547), function() {
			a1.a2.a4z(), u.v(1)
		})]))
	}), new x("👁️ " + L(539), function() {
		a1.a2.a50(), u.v(4, 1, new w(L(548), L(549) + " " + b1.z.aVv("/privacy"), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		})]))
	})], yt = [new x("⬅️ " + L(49), function() {
		u.z.aGt()
	})], 8 === ab.a59() && (aZ3.unshift(new x(L(408), function() {
		u.v(30)
	})), aZ3.unshift(new x(L(542), function() {
		bg.aaL() && (u.y(), bh.a67(), bi.e2 = !0)
	}, 0, 1)), aZ3.unshift(new x(L(543), function() {
		aE.ht || aE.hu || !aN.tD(aE.fU) || (bB.iB.sJ(), u.y(), aN.hv && aN.a67())
	}, 0, 1)), aZ3.unshift(new x(L(544), function() {
		aE.ht || aE.hu || !ax.iX(aE.fU) || (bY.a9a(2), bB.iB.iT(), u.y(), aN.hv && aN.a67())
	}, 0, 1))), 1 === a1.id && 5 <= a1.eC && aZ3.push(new x(L(540), function() {
		a1.a2.a51()
	})), aVT = new ys(L(541), yt), aZ2 = new u9(aZ3, aVT.yx)
}

function aVM() {
	var aWr, aWs, aWt, tV;

	function aWu() {
		aWw(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aVS()[19] = null, u.a58()
	}

	function aWw() {
		2 === aE.data.sResourcesType && bD.th.a6g(aWt.zN(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aWr.show(), this.resize()
	}, this.uZ = function() {
		aWr.uZ()
	}, this.resize = function() {
		aWr.resize(), aWs.resize()
	}, this.a64 = function(eu) {
		2 === eu && aWr.yy[0].tr()
	}, aWr = new ys(L(403), [new x("⬅️ " + L(49), aWu)]), aWs = new tT(aWr.yx, (function(tV) {
		var xP = new tF;
		xP.tI(L(360)), xP.tP(new yo({
			vS: [L(361), L(362), L(363)],
			value: aE.data.sResourcesType
		}, function(eT) {
			aWw(), 2 !== eT || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fh)), aE.data.sResourcesType = eT, u.v(28)
		})), tV.push(xP)
	}(tV = []), function(tV) {
		var xP;
		1 === aE.data.sResourcesType && ((xP = new tF).tI("Value"), xP.tS(new uN({
			eT: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.it(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), tV.push(xP))
	}(tV), function(tV) {
		var xP;
		2 === aE.data.sResourcesType && ((xP = new tF).tI("Data"), (aWt = new zF(0, 1, 0, 1)).zM(bD.pZ.a8J(aE.data.sResourcesData, 2)), xP.tS(aWt), tV.push(xP))
	}(tV), tV))
}

function aVK() {
	var aWr, aWs, aWt, tV;

	function aWu() {
		aWw(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aVS()[19] = null, u.a58()
	}

	function aWw() {
		2 === aE.data.tIncomeType && bD.th.a6g(aWt.zN(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aWr.show(), this.resize()
	}, this.uZ = function() {
		aWr.uZ()
	}, this.resize = function() {
		aWr.resize(), aWs.resize()
	}, this.a64 = function(eu) {
		2 === eu && aWr.yy[0].tr()
	}, aWr = new ys(L(401), [new x("⬅️ " + L(49), aWu)]), aWs = new tT(aWr.yx, (function(tV) {
		var xP = new tF;
		xP.tI(L(360)), xP.tP(new yo({
			vS: [L(361), L(362), L(363)],
			value: aE.data.tIncomeType
		}, function(eT) {
			aWw(), 2 !== eT || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fh), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eT, u.v(26)
		})), tV.push(xP)
	}(tV = []), function(tV) {
		var xP;
		1 === aE.data.tIncomeType && ((xP = new tF).tI("Value"), xP.tS(new uN({
			eT: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.it(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), tV.push(xP))
	}(tV), function(tV) {
		var xP;
		2 === aE.data.tIncomeType && ((xP = new tF).tI("Data"), (aWt = new zF(0, 1, 0, 1)).zM(bD.pZ.a8J(aE.data.tIncomeData, 4)), xP.tS(aWt), tV.push(xP))
	}(tV), tV))
}

function aVC() {
	var aVT, aVU, tV;
	this.show = function() {
		aVT.show(), this.resize()
	}, this.uZ = function() {
		aVT.uZ()
	}, this.resize = function() {
		aVT.resize(), aVU.resize()
	}, this.a64 = function(eu) {
		2 === eu && aVT.yy[0].tr()
	}, aVT = new ys(L(534), [new x("⬅️ " + L(49), function() {
		u.a58()
	})]), aVU = new tT(aVT.yx, ((tV = []).push(function() {
		function aW1() {
			aZy.button.textContent = L(232), aaQ.e.readOnly = !1, aaR.e.readOnly = !1, aW0.tv(1), aW0.button.style.color = bE.qN
		}
		var xP = new tF,
			aaP = (xP.tN(b1.z.aVv("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", xP.tI(L(550)), new uN({
				value: bm.buffer.data[105].value,
				eT: -1
			})),
			aaQ = (aaP.e.readOnly = !0, xP.tS(aaP), xP.tI(L(447), "0.8em"), new uN(bm.buffer.data[148], 0, void 0, function(e) {
				aVz(bm.buffer.data[149].value, e.target.value)
			})),
			aaR = (xP.tS(aaQ), xP.tI(L(451), "0.8em"), new uN(bm.buffer.data[149], 1, void 0, function(e) {
				aVz(e.target.value, bm.buffer.data[148].value)
			})),
			aZy = (xP.tS(aaR), new x(L(232), function(e) {
				return e.textContent === L(232) ? (e.textContent = L(170), aaQ.e.readOnly = !0, aaR.e.readOnly = !0, aW0.tv(0), aW0.button.style.color = bE.rS, bm.rt.q0(149, aaR.e.value), aVz(bm.buffer.data[149].value, bm
					.buffer.data[148].value)) : aW1(), !0
			})),
			aW0 = (xP.tS(new ul([aZy.button])), new x(L(21), function(e) {
				var pV, gC;
				return aaQ.e.readOnly && b1.z.eq(0) && (pV = bm.buffer.data[148].value, gC = parseInt(bm.buffer.data[149].value, 10), u.aUu.send(gC, pV, function() {
					bD.ta.yl(e), aW1(), b1.aW2.aW3({
						action: 0,
						pd: pV,
						value: gC
					})
				})), !0
			}, 1)),
			tK = xP.tJ(),
			aVz = (xP.tJ(L(551)).style.fontWeight = "bold", function(gC, pV) {
				tK.innerHTML = u.z.aW4(gC, bm.buffer.data[105].value, pV)
			});
		return xP.tS(new ul([aW0.button])), aVz(bm.buffer.data[149].value, bm.buffer.data[148].value), xP
	}()), tV))
}

function c5() {
	"function" != typeof Math.log2 && (Math.log2 = function(fr) {
		return Math.log(fr) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fr) {
		return Math.log(fr) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fr) {
		return 0 < fr ? 1 : fr < 0 ? -1 : 0
	})
}

function cr() {
	var aDm, aaT, aaU, aaV, aaS = !1;

	function aaW() {
		aaS = !0, aDm = -1, aaT = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aaT[aC] = !1;
		var a1K = Math.floor(1 + .02 * i.min);
		aaU = new Array(4), (aaV = new Array(4))[1] = aaV[3] = aaU[0] = aaU[2] = 0, aaV[0] = aaU[3] = -a1K, aaU[1] = aaV[2] = a1K
	}

	function aaX() {
		if (-1 !== aDm)
			if (0 !== aE.a3x && aI.oO()) {
				for (var aaY = !1, aC = 3; 0 <= aC; aC--) aaT[aC] && (aaY = !0, jM += aaU[aC], jN += aaV[aC], ag.a5W(aaU[aC], aaV[aC]), aT.aDS());
				aaY ? bi.e2 = !0 : at.oE()
			} else at.oE()
	}
	this.a62 = function(eT) {
		0 !== aE.a3x && aI.oO() && (aaS || aaW(), aaT[eT] = !0, -1 === aDm) && (aDm = setInterval(aaX, 20), aaX())
	}, this.a65 = function(eT) {
		if (0 !== aE.a3x && (aaS || aaW(), aaT[eT] = !1, -1 !== aDm)) {
			for (var aaY = !1, aC = 3; 0 <= aC; aC--) aaY = aaY || aaT[aC];
			aaY || this.oE()
		}
	}, this.oE = function() {
		if (aaS && -1 !== aDm) {
			for (var aC = 3; 0 <= aC; aC--) aaT[aC] = !1;
			clearInterval(aDm), aDm = -1
		}
	}
}

function cs() {
	this.z = new aaZ, this.nN = new aaa, this.rr = new aab, this.aIH = new aac, this.er = new aad, this.aW2 = new aae, this.sc = new aaf, this.aYF = new aag, this.aAo = new aah, this.aai = new aaj, this.aak = new aal, this.aam = new aan, this.aao =
		new aap, this.dv = function() {
			this.z.dv()
		}
}

function aaZ() {
	var aar, aas;
	this.aLm = 4, this.aaq = null, this.a5H = 0, this.fI = 0;

	function ab1() {
		return 0 === aa.aLi ? m.eG ? 1 : 0 : aa.aLi - 1
	}

	function ab4(oX, a5E, ab3) {
		aas[oX].aaS = !0, aax(oX), aar[oX] = new ab7, aar[oX].dv(oX, a5E, ab3)
	}

	function ab5(aC) {
		return aas[aC].aaS && aar[aC].ab5()
	}

	function aax(oX) {
		aas[oX].ek = bi.ek, aas[oX].aau = !1
	}
	this.dv = function() {
		this.aaq = new Array(this.aLm), this.aaq[0] = "territorial.io", this.aaq[1] = "1.territorial.io", this.aaq[2] = "4.territorial.io", this.aaq[3] = "5.territorial.io", aar = new Array(this.aLm), aas = new Array(this.aLm);
		for (var aC = this.aLm - 1; 0 <= aC; aC--) aas[aC] = {
			aaS: !1,
			ek: 0,
			aau: !1
		};
		this.aLn(0, 0, 0)
	}, this.aav = function(aC) {
		return aar[aC]
	}, this.ep = function() {
		for (var aC = this.aLm - 1; 0 <= aC; aC--) this.eq(aC) && bi.ek > aas[aC].ek + 15e3 && (b1.rr.aaw(aC, aas[aC].aau), aax(aC));
		!this.eq(0) && bi.ek > aas[0].ek + 8e3 && (aas[0].ek = bi.ek, this.aLn(0, 0, 0))
	}, this.aYC = function(id) {
		return this.aLn(0, id, 0) && this.aay(0)
	}, this.aaz = function(ab0) {
		return ab0 ? aa.aLj : ab1()
	}, this.a4P = function() {
		return ab1() ? "game.territorial.io" : "territorial.io"
	}, this.aVv = function(ab2) {
		ab2 = this.a4P() + ab2;
		return "<a href='https://" + ab2 + "' target='_blank'>" + ab2 + "</a>"
	}, this.aLn = function(oX, a5E, ab0) {
		ab0 = this.aaz(ab0);
		if (aas[oX].aaS) {
			if (aar[oX].ab5()) return aar[oX].ab6(a5E), aar[oX].eq();
			aar[oX].uZ()
		}
		return ab4(oX, a5E, ab0), !1
	}, this.ab8 = function(oX, a5E) {
		console.log("Connection to Server " + oX), b1.er.ab9(oX)
	}, this.aay = function(aC) {
		return this.eq(aC) && aar[aC].aay()
	}, this.abA = function(aC) {
		aar[aC].abA()
	}, this.eq = function(aC) {
		return aas[aC].aaS && aar[aC].eq()
	}, this.send = function(oX, aD) {
		0 !== oX && aax(oX), aar[oX].send(aD)
	}, __fx.customLobby.setSendFunction(this.send), this.a5n = function(oX) {
		8 === ab.a59() && (aas[oX].aau = !0, b1.nN.abB = !0)
	}, this.close = function(oX, abC) {
		ab5(oX) && aar[oX].close(abC)
	}, this.aMN = function(oX, abC) {
		p.a5L(abC), ab5(oX) && aar[oX].close(abC)
	}, this.a5M = function(abC) {
		for (var aC = this.aLm - 1; 0 <= aC; aC--) this.close(aC, abC)
	}, this.abD = function(oX, abC) {
		for (var aC = this.aLm - 1; 0 <= aC; aC--) aC !== oX && this.close(aC, abC)
	}, this.a8u = function() {
		0 === this.a5H && (aE.lN || aE.ht) || this.close(this.a5H, 3246)
	}, this.abE = function(oX, e) {
		aar[oX].uZ(), p.a56(oX, e.code)
	}
}

function aaa() {
	this.abB = !1, this.ep = function() {
		bi.l0() % 250 != 249 || aE.ht || aE.hu || (b1.er.abF(+(this.abB && ah.nf[aE.fU]), am.lZ + bQ.z.mt), this.abB = !1)
	}
}

function aah() {
	this.aMP = function(oX, aD) {
		bK.dv(aD), 0 === bK.size ? b1.z.aMN(oX, 3205) : __fx.customLobby.isCustomMessage(aD) || ((0 === bK.sd(1) ? function(oX) {
			var abK = bK.sd(6);
			0 === abK ? function(oX) {
					if (0 === oX && 8 !== ab.a59()) {
						u.z.aZd();
						for (var abc = bK.sd(12), abd = bK.sd(6), h = new Array(abc), aC = 0; aC < abc; aC++) h[aC] = bK.sd(abd);
						aU.aDs(h)
					}
				}(oX) : 2 === abK ? b1.aai.abM(oX) : 3 === abK || 4 === abK ? ay.dv() : 5 === abK ? b1.aak.abN() : 9 === abK ? b1.aak.abO(oX) : 10 === abK ? b1.aam.abP() : 11 === abK ? b1.aak.abQ(oX) : 12 === abK ? b1.aam.abR() :
				13 === abK ? b1.aao.abS() : 14 === abK ? b1.aao.abT() : 15 === abK ? b1.aak.abU() : 16 === abK ? b1.aai.abV(oX) : 17 === abK ? b1.aai.abW(oX) : 19 === abK ? b1.aai.abX(oX) : 20 === abK ? b1.aak.abY(oX) : 21 !== abK &&
				22 !== abK && (23 === abK ? b1.aak.abZ(oX) : 24 === abK ? b1.aai.aba(oX) : 25 === abK && b1.aam.abb())
		} : function(oX) {
			if (8 !== ab.a59() && !ay.aMR(oX, bK.aD)) return;
			if (oX !== b1.z.a5H) b1.z.aMN(oX, 3244);
			else if (0 === bK.sd(1)) bi.a47.abe(bK.aD);
			else {
				var aC, oX = bK.sd(2);
				if (0 === oX) {
					var sE, rr = bK.sd(9);
					0 !== ah.nf[rr] && 0 !== ah.nf[aE.fU] && (sE = bK.sd(10), aO.sD(rr, aE.fU, sE), ag.tB(rr, 1, sE))
				} else if (1 === oX) ! function() {
					var rr = bK.sd(9);
					0 !== ah.nf[rr] && 0 !== ah.nf[aE.fU] && b6.aQv(0, [rr], !0) && aO.sV(rr, 1)
				}();
				else if (2 === oX) ! function() {
					var rr = bK.sd(9),
						target = bK.sd(9);
					0 !== ah.nf[rr] && 0 !== ah.nf[target] && 0 !== ah.nf[aE.fU] && b6.aQv(1, [rr], !0) && (ag.tB(rr, 3, 96), ag.tB(target, 4, 96), aO.aAv(rr, target))
				}();
				else if (m.aA && !m.aB) {
					var fk = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fk = Math.min(bB.rn.sf.length, 540), aC = 0; aC < fk; aC++) bG.abk(32, bB.rn.sf[aC]);
					b1.z.send(b1.z.a5H, bG.aD)
				}
			}
		})(oX), bi.abJ())
	}
}

function aan() {
	this.abP = function() {
		bm.z.a02(), bm.rt.q0(105, bI.fB.vl(bI.fB.vm(5))), bm.rt.q0(106, bI.fB.vl(bI.fB.vm(15))), bm.rt.q0(109, 0), bm.rt.q0(108, bm.buffer.data[109].value), bm.rt.q0(111, bm.buffer.data[109].value + 1), bm.rt.q0(107, 0), bm.rt.q0(110, "")
	}, this.abb = function() {
		var id = bK.sd(8),
			pV = bJ.a0Y.a0n(7);
		0 === id && (bm.z.a07(pV, bm.buffer.data[106].value), new aTG(L(552, [pV])))
	}, this.abR = function() {
		var data;
		bK.size < bG.abl(29) ? b1.z.aMN(0, 3254) : ((data = {
			vi: bK.sd(30),
			a0H: bK.sd(16),
			a0I: bK.sd(30),
			a0J: bK.sd(30),
			a0K: bK.sd(30),
			a0L: bK.abm(32),
			username: bJ.a0Y.a0n(5),
			a0M: bJ.a0Y.a0n(3),
			a0N: bJ.a0Y.a0n(3),
			a0O: bK.abm(32),
			a0P: bK.abm(32),
			a0Q: bK.sd(30),
			a0R: bK.abm(32),
			a0S: bK.abm(32),
			a0T: bK.abm(32),
			a0U: bK.abm(32),
			aWK: bK.abm(32),
			aWL: bK.abm(30),
			aWh: bK.abm(32),
			aWi: bJ.a0Y.a0n(3),
			aWb: bK.abm(2),
			aWd: bK.abm(10),
			aWZ: bJ.a0Y.a0n(8),
			aWc: bK.abm(5),
			aVx: bK.sd(30),
			aWC: bK.sd(30),
			a4T: bK.abm(32),
			aWP: bK.sd(3),
			aWO: bK.sd(8),
			aWI: bK.sd(30),
			aWJ: bK.abm(32),
			aWN: bK.sd(1),
			aWV: bJ.a0Y.a0n(6),
			aWQ: bK.sd(1),
			aWR: bK.sd(1),
			aWD: bK.sd(16),
			aWE: bK.sd(5),
			aWF: bK.sd(1),
			abn: bK.sd(1),
			aWG: bK.sd(23),
			aW7: bK.sd(30),
			aWj: bK.sd(1),
			aWk: bK.sd(1)
		}).aWj && (data.aWl = bK.abm(32), data.aWm = bK.sd(30), data.aWn = bK.sd(30), data.aWo = bK.sd(1)), data.abn && (data.aWG = -data.aWG), 8 === u.vj && (25 === u.a5D().aYB ? (data.aVV = !0, u.z.aV9 = data, u.a5D().aGs(25, !1)) : (
			data.aVV = !1, bm.rt.q0(160, +(data.aWj && data.aWo)), data.pd = bm.buffer.data[105].value, u.z.aV6 = data, bm.rt.a0G(data), u.a5D().aGs(16, !0))))
	}
}

function aap() {
	this.abS = function() {
		var aC;
		if (bK.size < bG.abl(23)) b1.z.aMN(0, 3259);
		else {
			var w0 = bK.sd(6),
				fk = bK.sd(10),
				data = [];
			if (9 === w0 || 10 === w0 || 11 === w0 || 13 === w0) {
				for (aC = 0; aC < fk; aC++) data.push([bK.sd(30), bJ.a0Y.a0n(5), bK.abm(32), 0, bK.sd(30)]);
				8 === u.vj && u.a5D().aGs(21, !0, {
					w0: w0,
					data: data
				})
			} else if (12 === w0) {
				for (aC = 0; aC < fk; aC++) data.push([bK.sd(20), bK.sd(30), bK.sd(30), bK.abm(32), bK.sd(30), bJ.a0Y.a0n(5), bJ.a0Y.a0n(5)]);
				8 === u.vj && u.a5D().aGs(21, !0, {
					w0: w0,
					data: data
				})
			} else {
				var ih = bK.sd(16);
				if (bK.abo(39 + 16 * ih + fk * (0 === w0 ? 111 : 1 === w0 ? 101 : 2 === w0 || 3 === w0 ? 127 : 212))) {
					if (0 === w0)
						for (aC = 0; aC < fk; aC++) data.push([bK.sd(30), bJ.a0W.a0a(bK.sd(5)), bK.sd(16), bK.sd(30), bK.sd(30)]);
					else if (1 === w0)
						for (aC = 0; aC < fk; aC++) data.push([bK.sd(16), bJ.a0W.a0a(bK.sd(3)), bK.sd(16), bJ.a0W.a0a(bK.sd(5)), bK.sd(31), bK.sd(30)]);
					else if (2 === w0 || 3 === w0)
						for (aC = 0; aC < fk; aC++) data.push([bK.sd(30), bJ.a0W.a0a(bK.sd(5)), bK.abm(32), bK.sd(30), bK.sd(30)]);
					else
						for (aC = 0; aC < fk; aC++) data.push([bK.sd(20), bK.sd(30), bK.sd(30), bK.sd(30), bK.sd(30), bK.abm(32), bK.sd(30), bJ.a0W.a0a(bK.sd(5)), bJ.a0W.a0a(bK.sd(5))]);
					8 === u.vj && u.a5D().aGs(21, !0, {
						w0: w0,
						data: data
					})
				} else b1.z.aMN(0, 3260)
			}
		}
	}, this.abT = function() {
		if (bK.size < bG.abl(29)) b1.z.aMN(0, 3265);
		else {
			var abp = bK.sd(4),
				abq = bK.sd(7),
				abr = bK.sd(11);
			if (bK.abo(29 + 16 * abq + 16 * abr + 11 * abp)) {
				for (var data = [], aC = 0; aC < abp; aC++) {
					for (var a4j = bJ.a0W.a0a(bK.sd(3)), abt = bK.sd(8), aXL = [], g3 = 0; g3 < abt; g3++) aXL.push(bK.sd(16));
					data.push({
						name: "[" + a4j + "]",
						aXL: aXL
					})
				}
				8 === u.vj && u.a5D().aGs(23, !0, data)
			} else b1.z.aMN(0, 3266)
		}
	}
}

function aaj() {
	function abx() {
		var id = bK.sd(3);
		return 0 === id ? {
			id: id,
			pd: bK.sd(30),
			pe: aby(),
			s: bJ.a0Y.a0n(8)
		} : 1 === id ? {
			id: id,
			pd: bK.sd(30),
			pe: aby(),
			aIo: bK.sd(3),
			value: bK.sd(30),
			target: bK.sd(30),
			pf: aby()
		} : 2 === id ? {
			id: id,
			pd: bK.sd(30),
			pe: aby(),
			aIo: bK.sd(3)
		} : 3 === id ? {
			id: id,
			pd: bK.sd(30),
			pe: aby(),
			aIo: bK.sd(3),
			value: bK.sd(4),
			target: bK.sd(30),
			pf: aby()
		} : 4 === id ? {
			id: id,
			pd: bK.sd(30),
			pe: aby(),
			aIo: bK.sd(3),
			target: bK.sd(30),
			pf: aby(),
			aIq: bK.sd(1)
		} : 5 === id ? {
			id: id,
			aIo: bK.sd(6)
		} : 6 === id ? {
			id: id,
			value: bK.sd(17)
		} : null
	}

	function aby() {
		return bK.sd(1) ? bJ.a0Y.a0n(5) : null
	}
	this.abM = function(oX) {
		if (oX !== b1.z.fI) b1.z.close(oX, 3239);
		else if (6 !== ab.a59()) b1.z.close(oX, 3271);
		else {
			bq.dv(), bq.z.wW = bK.sd(10), bq.tV.aIB();
			for (var playerCount = bK.sd(16), g3 = 0; g3 < playerCount; g3++) bq.pl.aHb(bK.sd(30), bJ.a0Y.a0n(5), bK.sd(4), bK.sd(30), bK.sd(7), bK.sd(16), bK.sd(18), bK.sd(11), bK.sd(12), bK.sd(6), bK.sd(13), bK.sd(1));
			u.v(29), bq.z.aJJ(!0)
		}
	}, this.abV = function(oX) {
		if (oX !== b1.z.fI) b1.z.close(oX, 3239);
		else if (bq.fH) {
			bq.z.aJI[0] = bK.sd(20), bq.z.aJI[1] = bK.sd(20);
			for (var abu = bK.sd(20), g3 = 0; g3 < abu; g3++) {
				var id = bK.sd(3);
				0 === id ? bq.pl.aHb(bK.sd(30), bJ.a0Y.a0n(5), 0, 1234566, 127, 0, bK.sd(18), 0, bK.sd(12), 0, 0, 0) : 1 === id ? bq.pl.aHv(bK.sd(16), bK.sd(16), bK.sd(13), bK.sd(1)) : 2 === id ? bq.pl.aHr(bK.sd(16), bJ.a0Y.a0n(5)) : 3 === id ?
					bq.pl.aHt(bK.sd(16)) : 4 === id ? bq.pl.aHk(bK.sd(16), bK.sd(4), bK.sd(30), bK.sd(7), bK.sd(16), bK.sd(11), bK.sd(18)) : 5 === id ? bq.pl.aHm(bK.sd(16), bK.sd(1)) : 6 === id && bq.pl.aHl(bK.sd(16), bK.sd(6))
			}
			bq.z.wW = bK.sd(10);
			for (var abv = bK.sd(10), aC = 0; aC < abv; aC++) {
				var xt = bK.sd(13),
					aZY = bK.sd(10),
					aHz = bK.sd(10),
					aHJ = bq.z.aHJ;
				if (aHJ.aHz = aHz, aHJ.a5H = bK.sd(10), aHJ.aId = bK.sd(10), aHJ.fQ = bK.sd(6), aHJ.mapSeed = bK.sd(14), aHJ.xA = bK.sd(4), aHJ.xb = bK.sd(1), aHJ.spawningSeed = bK.sd(14), aHJ.a4Q = bK.sd(30) - 1, aHJ.aI0 = null, 8 === aHJ.xA) {
					aHJ.aI0 = new Array(aHz);
					for (g3 = 0; g3 < aHz; g3++) aHJ.aI0[g3] = bK.sd(9)
				}
				xt = bq.pl.aHw(xt);
				if (bq.aHJ.e3(xt, aZY, aHz)) return;
				bq.pl.aI2(xt, aZY, aHz, aHJ.aI0)
			}
			var abw = bK.sd(13);
			abw && bq.pl.aI5(abw), bq.tV.aIB(), bq.z.aIR()
		} else b1.z.close(oX, 3251)
	}, this.aba = function(oX) {
		oX === b1.z.fI && bq.fH && bq.tV.aIK(bK.sd(13), bK.sd(1))
	}, this.abW = function(oX) {
		if (oX !== b1.z.fI) b1.z.close(oX, 3272);
		else if (bq.fH) {
			for (var pt = bq.z.pt, y8 = (bq.z.pu = bK.sd(20), bK.sd(6)), aC = 0; aC < y8; aC++) {
				var aLA = abx();
				bq.pr.aL9(aLA), bq.pr.aLF(aLA), pt.push(aLA)
			}
			pt.length > bq.z.q2 && pt.splice(0, pt.length - bq.z.q2), bq.z.aJQ()
		} else b1.z.close(oX, 3273)
	}, this.abX = function(oX) {
		var aLA;
		oX !== b1.z.fI ? b1.z.close(oX, 3276) : bq.fH ? (aLA = abx(), bq.pr.aL9(aLA), bq.message.aID(aLA)) : b1.z.close(oX, 3277)
	}
}

function aal() {
	this.abN = function() {
		for (var id = bK.sd(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.sd(8), bK.sd(8), bK.sd(8)]);
		var ew = bJ.a0Y.a0n(8);
		bX.ed.et({
			id: id,
			colors: colors,
			ew: ew
		})
	}, this.abY = function(oX) {
		var abz = bK.sd(3),
			fn = bK.sd(5),
			fn = bl.ac0.ac1(fn, bK.sd(30), bK.sd(30), bK.sd(30));
		b1.er.ac2(oX, fn, abz, 0)
	}, this.abO = function(oX) {
		this.abY(oX), bm.rt.q0(183, bI.fB.vl(bI.fB.vm(15))), 0 === oX && 0 === bm.buffer.data[105].value.length ? b1.er.es(0) : b1.aW2.ac3(oX), 4 === b1.z.aav(oX).ac4() ? 6 === ab.a59() && b1.aIH.aLo(oX) : 5 !== b1.z.aav(oX).ac4() || 8 !== ab
			.a59() && 10 !== ab.a59() || b1.rr.aMI()
	}, this.abQ = function(oX) {
		var id = bK.sd(6);
		1 === id ? (bm.rt.q0(160, bK.sd(30)), b1.z.abA(oX), aU.aDo || b1.er.es(1), bA.aGo(), 8 === u.vj && u.a5D().aYO()) : 21 === id ? 8 === u.vj && u.a5D().aGs(17) : 22 === id && (bm.rt.q0(106, bm.buffer.data[110].value), bm.rt.q0(110, ""),
			8 === u.vj) && u.a5D().aGs(15)
	}, this.abU = function() {
		var fk = bK.sd(16),
			ac5 = bK.sd(16);
		if (bK.abo(55 + 10 * fk + 16 * ac5)) {
			for (var h = [], aC = 0; aC < fk; aC++) h.push(bJ.a0W.a0a(bK.sd(10)));
			bA.aGr(h)
		} else b1.z.aMN(0, 3270)
	}, this.abZ = function(oX) {
		for (var abz = bK.sd(3), fn = bK.sd(5), abz = {
				abz: abz,
				u7: bl.ac0.ac1(fn, bK.sd(30), bK.sd(30), bK.sd(30))
			}, fn = bK.abm(32), ac6 = [], aC = 0; aC < 17; aC++) ac6.push(new Uint8Array(bK.sd(16)));
		for (aC = 0; aC < 17; aC++)
			for (var h = ac6[aC], fk = h.length, ia = 0; ia < fk; ia++) h[ia] = bK.abm(8);
		bx.show(ac6, fn, oX, abz)
	}
}

function aab() {
	this.aaw = function(oX, aau) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, aau ? 1 : 0), bG.a9(3, 0 === aE.a3x ? bq.fH ? 6 : 0 : aE.ht ? 1 : aE.lN ? 7 : aE.lL < 7 ? 2 : 8 === aE.lL ? 4 : 9 === aE.lL ? 5 : 3), b1.z.send(oX, bG.aD)
	}, this.aMI = function() {
		bG.a8(59), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.fI), bG.a9(10, ay.aId), bG.a9(10, ay.aM6), bG.a9(10, m.eI), bG.a9(14, m.e7), b1.z.send(b1.z.a5H, bG.aD)
	}, this.rs = function(fW) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fW), b1.z.send(b1.z.a5H, bG.aD)
	}, this.ru = function(jL, kC) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, jL), bG.a9(10, kC), b1.z.send(b1.z.a5H, bG.aD)
	}, this.ry = function(jL, rw) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, jL), bG.a9(9, rw), b1.z.send(b1.z.a5H, bG.aD)
	}, this.s0 = function(jL, rz) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, jL), bG.a9(27, rz), b1.z.send(b1.z.a5H, bG.aD)
	}, this.s4 = function(jL, o3) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, jL), bG.a9(16, o3), b1.z.send(b1.z.a5H, bG.aD)
	}, this.sA = function(o3, rz) {
		bG.a8(48), bG.a9(1, 1), bG.a9(4, 11), bG.a9(16, o3), bG.a9(27, rz), b1.z.send(b1.z.a5H, bG.aD)
	}, this.sC = function(kC) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, kC), b1.z.send(b1.z.a5H, bG.aD)
	}, this.sG = function(eT) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eT), b1.z.send(b1.z.a5H, bG.aD)
	}, this.sI = function(sH) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, sH), b1.z.send(b1.z.a5H, bG.aD)
	}, this.sK = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a5H, bG.aD)
	}, this.sL = function(jL, fW, kC) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, jL), bG.a9(10, kC), bG.a9(22, fW), b1.z.send(b1.z.a5H, bG.aD)
	}, this.sT = function(ac7, ac8) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, ac8), bG.a9(10, ac7), b1.z.send(b1.z.a5H, bG.aD)
	}, this.sW = function(aAo) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, aAo), b1.z.send(b1.z.a5H, bG.aD)
	}, this.sa = function(ac9, target) {
		var aC, fk = ac9.length;
		for (bG.a8(14 + 9 * fk), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fk; aC++) bG.a9(9, ac9[aC]);
		b1.z.send(b1.z.a5H, bG.aD)
	}
}

function aae() {
	this.acA = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.er.acB(), b1.z.send(0, bG.aD)
	}, this.ac3 = function(oX) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.fB.a0m(bm.buffer.data[105].value, 5), bJ.fB.a0m(bm.buffer.data[106].value, 15), b1.z.send(oX, bG.aD)
	}, this.aYP = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.fB.a0m(bm.buffer.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aWX = function(a7t) {
		var fk = a7t.pV.length;
		bG.a8(21 + 16 * fk), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a7t.action), bG.a9(8, fk), bI.a0W.a0l(a7t.pV), b1.z.send(0, bG.aD)
	}, this.aZz = function(a0L, colors, acD, ew) {
		bH.dv(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(a0L, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var g3 = 0; g3 < 3; g3++) bH.a9(8, colors[aC][g3]);
		a0L = bA.data.aGv(acD.trim());
		bH.a9(8, -1 === a0L ? 255 : a0L), bI.a0Y.a3R(ew.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.acE())
	}, this.aW8 = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.fB.a0m(data.pd, 5), b1.z.send(0, bG.aD)
	}, this.aW3 = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.fB.a0m(data.pd, 5), bG.abk(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aaf() {
	this.sb = function() {
		for (var fk = aE.l3, a3m = bU.result.a3m, ly = a3m.length, a4c = (bG.a8(17 + 16 * fk + 33 * ly), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, ly), bG.a9(1, +(2 === aE.a3u)), bG.a9(1, aE.a4G % 2), ah.a4c), aC = 0; aC < fk; aC++) bG.a9(16, a4c[
		aC]);
		for (var hY = ah.hY, aC = 0; aC < ly; aC++) {
			var hI = a3m[aC];
			bG.a9(9, hI), bG.a9(24, hY[hI])
		}
		b1.z.send(b1.z.a5H, bG.aD)
	}
}

function aag() {
	this.aYG = function(w0, w1, w2) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, w0), bG.a9(1, +(w1 < 0)), bG.a9(1, +(w2 < 0)), bG.a9(30, Math.abs(w1)), bG.a9(30, Math.abs(w2)), b1.z.send(0, bG.aD)
	}, this.aYH = function(w0, aYI, aYJ) {
		bG.a8(18 + 16 * aYI.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, w0), b1.er.acF(aYI), bG.a9(30, aYJ), b1.z.send(0, bG.aD)
	}, this.aYM = function(w0, aYI, aYJ) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, w0), bJ.fB.a0m(aYI, 5), bG.a9(30, aYJ), b1.z.send(0, bG.aD)
	}, this.aYK = function(aXK, a4i) {
		for (var fk = a4i.length, ih = 0, aC = 0; aC < fk; aC++) ih += a4i[aC].length;
		for (bG.a8(21 + 3 * fk + 16 * ih), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aXK), bG.a9(4, fk), bG.a9(7, ih), aC = 0; aC < fk; aC++) bG.a9(3, a4i[aC].length), bI.a0W.a0l(a4i[aC]);
		b1.z.send(0, bG.aD)
	}, this.aYL = function(aXK, w1, w2) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aXK), bG.a9(1, +(w1 < 0)), bG.a9(1, +(w2 < 0)), bG.a9(20, Math.abs(w1)), bG.a9(20, Math.abs(w2)), b1.z.send(0, bG.aD)
	}
}

function aac() {
	this.aLo = function(oX) {
		var username = bm.buffer.data[122].value.slice(0, 20),
			username = (bG.a8(22 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.eI), b1.er.acF(username), bD.color.a6w(bm.z.a0A()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.fI = oX, b1.z.send(oX, bG.aD)
	}, this.aII = function(acG, a7t) {
		bH.dv(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, acG), 2 === acG ? bH.a9(30, a7t) : 4 === acG ? (bH.a9(13, a7t.xt), bH.a9(1, a7t.xw)) : 3 === acG ? bI.a0Y.a3R(a7t, 8, bH) : 5 === acG ? (bH.a9(3, a7t.id), bH.a9(3, a7t.value), bH.a9(30, a7t
			.pd)) : 6 === acG && (bH.a9(2, a7t.xA), bH.a9(30, a7t.pd)), b1.z.send(b1.z.fI, bH.acE())
	}
}

function aad() {
	this.ab9 = function(oX) {
		var acN;
		bG.a8(55 + bl.acH.sd()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.e7), bG.a9(4, a1.id), bG.a9(7, a1.eC), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), acN = bA.aGu(), bG.a9(8, acN[0]), bG.a9(8, acN[1]), bl.acH
		.a3R(), b1.z.send(oX, bG.aD)
	}, this.ac2 = function(oX, u7, abz, acJ) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, abz), bG.a9(30, u7), bG.a9(30, acJ), b1.z.send(oX, bG.aD)
	}, this.fJ = function(fE) {
		bH.dv(), bH.a9(1, 0), bH.a9(6, 6), bI.a0Y.a3R(fE, 16, bH), b1.z.send(b1.z.fI, bH.acE())
	}, this.es = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.yT = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aGq = function(id, pV) {
		var fk = Math.min(pV.length, 63);
		bG.a8(19 + 16 * fk), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fk), bI.a0W.a0l(pV), b1.z.send(0, bG.aD)
	}, this.acK = function(aZc, q4) {
		bG.a8(7 + 26 * q4.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < q4.length; aC++) bG.a9(16, q4[aC][0]), bG.a9(10, q4[aC][1]);
		b1.z.send(aZc, bG.aD)
	}, this.abF = function(acL, acM) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, acL), bG.a9(12, acM), b1.z.send(b1.z.a5H, bG.aD)
	}, this.acF = function(username) {
		bG.a9(5, username.length), bI.a0W.a0l(username)
	}, this.pG = function(pH, oo, oX, pow) {
		bG.a8(88), bG.a9(1, 0), bG.a9(6, 8), bG.a9(3, pow.abz), bG.a9(30, pow.u7), bG.abk(32, oo), bG.a9(16, pH), b1.z.send(oX, bG.aD)
	}
}

function ab7() {
	var acO, acP, b, acQ = ["wss://", "/s50/", "/s51/", "/s52/"],
		acR = 0;

	function ab8() {
		b1.z.ab8(acO, acP)
	}

	function acU(e) {
		b1.aAo.aMP(acO, new Uint8Array(e.data))
	}

	function acV() {}

	function abE(e) {
		b1.z.abE(acO, e)
	}
	this.dv = function(eT, a5E, ab3) {
		acO = eT, acP = a5E,
			function(ab3) {
				ab3 = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : m.e8 ? "ws://localhost:" + (7130 + acO) + "/" : ab3 ? acQ[0] + "game.territorial.io/x0" + acO + "/" : acQ[0] + b1.z.aaq[acO] + acQ[1 + m.e6];
				(b = new WebSocket(ab3)).binaryType = "arraybuffer", b.onopen = ab8, b.onmessage = acU, b.onclose = abE, b.onerror = acV
			}(ab3)
	}, this.acT = function() {
		return b.readyState === b.CONNECTING
	}, this.eq = function() {
		return b.readyState === b.OPEN
	}, this.aay = function() {
		return acR
	}, this.abA = function() {
		acR = 1
	}, this.ab5 = function() {
		return this.acT() || this.eq()
	}, this.ab6 = function(a5E) {
		acP = a5E
	}, this.ac4 = function() {
		return acP
	}, this.send = function(aD) {
		this.eq() && b.send(aD)
	}, this.close = function(abC) {
		this.ab5() && (this.uZ(), b.close(abC))
	}, this.uZ = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dV() {
	var gap, acW = !1,
		xB = 0,
		j = 0,
		vo = 0,
		canvas = null,
		p3 = null,
		a6V = null;

	function aca() {
		for (var aC = aE.a19; 0 <= aC; aC--) a6V[aC] = 0;
		for (aC = am.lZ - 1; 0 <= aC; aC--) a6V[bj.fi[am.le[aC]]] += ah.hY[am.le[aC]];
		acW = !0
	}

	function acY() {
		for (var acf, acd = 0, fk = 0, eu = Math.floor(j / 2), eS = Math.floor(vo / 2), ace = 1.5 * Math.PI, aC = aE.a19; 0 <= aC; aC--) fk += a6V[aC], 0 === a6V[aC] && acd++;
		if (acW = !1, p3.clearRect(0, 0, j, j), 0 < fk)
			if (acd === aE.a19) {
				for (aC = aE.a19; 0 <= aC; aC--)
					if (0 < a6V[aC]) {
						! function(aC, eu, eS) {
							p3.fillStyle = bj.acj[bj.lQ[aC]], p3.beginPath(), p3.arc(eu, eu, eS, 0, 2 * Math.PI), p3.fill()
						}(aC, eu, eS);
						break
					}!
				function(eu) {
					var fontSize = eu / 3;
					p3.font = bD.ta.v9(1, fontSize), p3.fillStyle = bE.qN, p3.fillText("100%", eu, eu + .1 * fontSize)
				}(eu)
			} else {
				for (aC = 0; aC <= aE.a19; aC++) 0 < a6V[aC] && (acf = ace + 2 * Math.PI * a6V[aC] / fk, aci(p3, bj.acj[bj.lQ[aC]], eu, eS, ace, acf), function(eu, eS, ace, acf) {
					var gC = (acf - ace) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eS * Math.min(gC, .37);
					fontSize < 8 || (ace = (ace + acf) / 2, acf = (__fx.settings.detailedTeamPercentage ? (100 * gC).toFixed(2) : Math.floor(100 * gC + .5)) + "%", eS *= .525 - Math.max(.6 * (gC - .7), 0), p3.font = bD.ta.v9(1, fontSize), p3
						.fillStyle = bE.qN, p3.fillText(acf, eu + Math.cos(ace) * eS, eu + Math.cos(ace + 1.5 * Math.PI) * eS))
				}(eu, eS, ace, acf), 0 !== aC && acl(p3, eu, eS, ace), ace = acf);
				acl(p3, eu, eS, 1.5 * Math.PI)
			} acm(p3, eu, eS)
	}

	function aci(im, color, eu, eS, ace, acf) {
		im.fillStyle = color, im.beginPath(), im.arc(eu, eu, eS, ace, acf), im.lineTo(eu, eu), im.fill()
	}

	function acl(im, eu, eS, acn) {
		im.beginPath(), im.moveTo(eu, eu), im.lineTo(eu + Math.cos(acn) * eS, eu + Math.cos(acn + 1.5 * Math.PI) * eS), im.stroke()
	}

	function acm(im, eu, eS) {
		im.beginPath(), im.arc(eu, eu, eS, 0, 2 * Math.PI), im.stroke()
	}
	this.dv = function() {
		if (aE.ic) {
			xB = 0, a6V = new Uint32Array(aE.a19 + 1);
			for (var aC = aE.a19; 0 <= aC; aC--) a6V[aC] = 0;
			for (aC = am.lZ - 1; 0 <= aC; aC--) a6V[bj.fi[am.le[aC]]] += 1;
			this.resize()
		} else a6V = p3 = canvas = null
	}, this.aCN = function() {
		return j
	}, this.resize = function() {
		aE.ic && (j = Math.floor(.95 * (a1.a2.iu() && !aE.o9 ? .18 * i.min : .13 * i.iv)), j = (j *= 1 + (.5 + .2 * a1.a2.iu()) * aE.o9) + j % 2, gap = Math.max(1, .015 * j), vo = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (p3 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, p3.strokeStyle = bE.qN, bD.ta.textAlign(p3, 1), bD.ta.textBaseline(p3, 1), acY())
	}, this.la = function(acZ) {
		acZ && aca();
		var el, acZ = this.lc();
		return bj.lQ[acZ] || (acZ = function() {
			for (var lb = -1, aC = aE.a19; 1 <= aC; aC--)(-1 === lb || a6V[aC] > a6V[lb]) && (lb = aC);
			return lb
		}(), el = ah.hY[me[0]], -1 !== acZ && a6V[acZ] > el) ? a6V[acZ] : el
	}, this.a4u = function() {
		return xB = 31, this.ep(), this.lc()
	}, this.lc = function() {
		for (var lb = 0, aC = aE.a19; 0 < aC; aC--) a6V[aC] > a6V[lb] && (lb = aC);
		return lb
	}, this.l4 = function(acc) {
		for (var hD = 0, le = am.le, fi = bj.fi, fk = am.lZ, gO = bR.gO, aC = 0; aC < fk; aC++) {
			var hI = le[aC];
			fi[hI] === acc && (gO[hD++] = hI)
		}
		bR.gF[0] = hD
	}, this.ld = function(acc) {
		for (var hD = 0, le = am.le, fi = bj.fi, fk = am.lZ, gO = bR.gO, aC = 0; aC < fk; aC++) {
			var hI = le[aC];
			fi[hI] !== acc && (gO[hD++] = hI)
		}
		bR.gF[0] = hD
	}, this.a7T = function() {
		for (var hD = 0, aC = aE.a19; 0 <= aC; aC--) hD += 0 < a6V[aC];
		return hD
	}, this.ep = function() {
		aE.ic && 32 <= ++xB && (xB = 0, aca())
	}, this.nS = function() {
		aE.ic && acW && acY()
	}, this.xf = function(im, hD, size) {
		var eu = size >> 1,
			eS = Math.floor(.4 * size),
			ace = 1.5 * Math.PI;
		im.clearRect(0, 0, size, size), im.lineWidth = .042 * size, im.strokeStyle = bE.qN;
		for (var aC = 0; aC < hD; aC++) {
			var acf = ace + 2 * Math.PI / hD;
			aci(im, bj.acj[aC + 1], eu, eS, ace, acf), 0 !== aC && acl(im, eu, eS, ace), ace = acf
		}
		acl(im, eu, eS, 1.5 * Math.PI), acm(im, eu, eS)
	}, this.z6 = function() {
		aE.ic && (aE.o9 ? z7.drawImage(canvas, bf.gap, bf.gap) : z7.drawImage(canvas, bf.gap, aCM + 2 * bf.gap))
	}
}

function dm() {
	function act(fr, fk, ft, a3b, aDd, gA) {
		if (!(ft < 1 || aDd < ft))
			for (var aC = 0; aC <= fk; aC++) {
				var fO = bP.jP(fr, ft);
				if (a3b(fO)) return fO >> 2;
				fr += gA
			}
		return -1
	}

	function acx(ft, fk, fr, a3b, acr, gA) {
		if (!(fr < 1 || acr < fr)) {
			fk = Math.max(fk, 0);
			for (var aC = 0; aC <= fk; aC++) {
				var fO = bP.jP(fr, ft);
				if (a3b(fO)) return fO >> 2;
				ft += gA
			}
		}
		return -1
	}

	function ad1(jC, jD, aco) {
		return -1 !== jD && (-1 === jC || bP.jE(jD, aco) < bP.jE(jC, aco)) ? jD : jC
	}
	this.iA = function(aco) {
		return this.a41(aco, function(fO) {
			return ad.ff(fO)
		})
	}, this.iG = function(aco) {
		return this.a41(aco, function(fO) {
			return ad.aN7(fO, aE.fU)
		})
	}, this.a41 = function(aco, a3b) {
		return function(aco, acp, a3b) {
			for (var i0 = bP.fs(aco), i2 = bP.fu(aco), acr = bV.fv - 2, aDd = bV.fw - 2, acs = -1, fn = 0; fn < acp; fn++) {
				var aDc = Math.max(i0 - fn, 1),
					aRx = Math.max(i2 - fn, 1),
					a1k = Math.min(i0 + fn, acr),
					a1j = Math.min(i2 + fn, aDd),
					jC = act(i0, a1k - i0, i2 - fn, a3b, aDd, 1),
					jD = act(i0 - 1, i0 - aDc - 1, i2 - fn, a3b, aDd, -1),
					a1k = act(i0, a1k - i0, i2 + fn, a3b, aDd, 1),
					aDc = act(i0 - 1, i0 - aDc - 1, i2 + fn, a3b, aDd, -1),
					acw = acx(i2, a1j - i2 - 1, i0 - fn, a3b, acr, 1),
					acy = acx(i2 - 1, i2 - aRx - 2, i0 - fn, a3b, acr, -1),
					a1j = acx(i2, a1j - i2 - 1, i0 + fn, a3b, acr, 1),
					aRx = acx(i2 - 1, i2 - aRx - 2, i0 + fn, a3b, acr, -1);
				if (acs = ad1(acs, jC, aco), acs = ad1(acs, jD, aco), acs = ad1(acs, a1k, aco), acs = ad1(acs, aDc, aco), acs = ad1(acs, acw, aco), acs = ad1(acs, acy, aco), acs = ad1(acs, a1j, aco), 0 <= (acs = ad1(acs, aRx, aco)) && fn *
					fn >= bP.jE(acs, aco)) return acs
			}
			return -1
		}(aco, bP.is(), a3b)
	}
}

function aTG(pV) {
	var k, ad2 = new ad3,
		uy = document.createElement("div");

	function ad6() {
		uy.style.opacity = "0", setTimeout(aMJ, ad2.ad5)
	}

	function aMJ() {
		u.removeChild(document.body, uy), ad2 = uy = null
	}
	k = bD.ta.ub(ad2.ad4, .5), uy.textContent = pV, uy.style.position = "fixed", uy.style.zIndex = ad2.zIndex, uy.style.left = "50%", uy.style.top = .5 * k + "px", uy.style.transform = "translateX(-50%)", uy.style.maxWidth = "90%", uy.style
		.boxSizing = "border-box", uy.style.padding = .3 * k + "px " + .6 * k + "px", uy.style.backgroundColor = bE.qJ, uy.style.color = bE.qN, uy.style.font = bD.ta.v9(0, .6 * k), uy.style.textAlign = "center", uy.style.userSelect = "none", uy.style
		.pointerEvents = "none", uy.style.transition = "opacity " + ad2.ad5 + "ms", bD.ta.tj(uy), document.body.appendChild(uy), setTimeout(ad6, ad2.ad7)
}

function ad3() {
	this.ad7 = 5e3, this.ad5 = 600, this.zIndex = "1000", this.ad4 = .03
}

function dE() {
	function ad8(key, size) {
		var aa1;
		return "undefined" == typeof URLSearchParams || (aa1 = window.location.search, "string" != typeof(aa1 = new URLSearchParams(aa1).get(key))) || aa1.length < 1 ? null : bJ.fB.a0f(aa1, size)
	}
	this.e3 = function() {
		if (0 !== a1.id) return !1;
		var a4Q = ad8("r", 6);
		if (! function() {
				var value = ad8("account", 5);
				if (!value && !(value = ad8("a", 5))) return void bL.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (bL.clear(), u.v(8, u.vj, new vk(1e3, {
					action: 0,
					pd: value,
					vi: 0
				})), !0) : (bL.clear(), !1)
			}()) {
			if (!this.clear()) return !1;
			if (!a4Q) return !1;
			this.aWq("r", a4Q), u.v(3, 0, L(553)), bC.adA(a4Q)
		}
		return !0
	}, this.clear = function() {
		var a54 = new URL(window.location.href);
		a54.search = "";
		try {
			return history.replaceState(null, "", a54.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aWq = function(key, value) {
		if (0 === a1.id) try {
			var a54 = new URL(window.location.href),
				hI = a54.searchParams;
			hI.set(key, value), a54.search = hI.toString(), history.replaceState(null, "", a54.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ct() {
	var adC, h;
	this.dv = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.gB(32768 * aC, 100);
		this.a8j(0)
	}, this.value = function(hI) {
		return h[hI]
	}, this.aRX = function() {
		return bO.gB(adC - 1, 2)
	}, this.a8j = function(aRQ) {
		adC = 2 * aRQ % 32768 + 1
	}, this.random = function() {
		return adC = 167 * adC % 32768
	}, this.kK = function(na) {
		return bO.gB(na * this.random(), 32768)
	}, this.kv = function(hI) {
		return 0 !== hI && this.random() < this.value(hI)
	}, this.jg = function(g3, g4) {
		return g3 + this.kK(g4 - g3)
	}
}

function dA() {
	this.sp = new adD, this.a8t = new adE, this.aOs = new adF, this.dv = function() {
		aE.ht || this.sp.dv()
	}, this.ep = function() {
		aE.ht || (this.sp.ep(), 3 !== u.vj) || bi.l0() % 15 != 5 && 2 !== aE.a3x || u.a5D().aa2()
	};
	var aYQ = 0;

	function adJ(pV) {
		3 === u.vj && u.a5D().zM(pV)
	}
	__fx.replay.restartReplay = () => this.aa5(), this.aa5 = function() {
		var adH, adI, fQ = bV.a94(aE.data);
		2 === aE.data.mapType || bV.aJe.aMK(fQ) ? (adH = 0 !== aE.a3x, adI = aE.a8e, adH || ab.aLy(), aE.a8c.a93(), aE.data.canvas = null, b1.z.close(b1.z.a5H, 3257), b1.z.a5H = 0, aE.data.isReplay = 1, aE.a8g(), adH && (aE.a8e = adI)) : aYQ || (
			aYQ = 1, bV.aJe.aTF(fQ, function(aMK) {
				aYQ = 0, aMK && bC.aa5()
			}))
	}, this.aa4 = function(pV) {
		var aC = pV.indexOf("=");
		return 0 <= aC ? pV.substring(aC + 1) : pV
	}, __fx.replayHistory.load = saved => {
		saved = bC.aa4(saved), bC.aOs.a0n(saved) && bC.aa5()
	}, this.adA = function(id) {
		var aT3 = new XMLHttpRequest;
		aT3.open("GET", "https://" + b1.z.a4P() + "/log/?r=" + id), aT3.onload = function() {
			var pV = 200 === aT3.status ? aT3.responseText : "";
			adJ(pV.length ? pV : L(554))
		}, aT3.onerror = function() {
			adJ(L(555))
		}, aT3.send()
	}, this.aa3 = function(pV) {
		return pV
	}
}

function adD() {
	this.adK = null, this.adL = null, this.adM = null, this.adN = null, this.adO = null, this.adP = null, this.a8s = "";
	var adQ = 0;
	this.dv = function() {
		this.adK = [], this.adL = [], this.adM = [], this.adN = [], this.adO = [0], this.adP = [0], adQ = 0, this.a8s = ""
	}, this.sq = function(id, gT, gV, gX) {
		aE.ht || 2 === aE.a3x || (0 === this.adO[adQ] && (this.adP[adQ] ? (this.adO.push(1), this.adP.push(0), adQ++) : this.adO[adQ] = 1), this.adK.push(id), this.adL.push(gT), this.adM.push(void 0 === gV ? 0 : gV), this.adN.push(void 0 === gX ?
			0 : gX), this.adP[adQ]++)
	}, this.ep = function() {
		0 === this.adO[adQ] ? this.adP[adQ]++ : (this.adO.push(0), this.adP.push(0), adQ++)
	}
}

function adF() {
	var adR = 0;

	function adV(pV, id) {
		console.log(pV), adR || (id ? 1 === id ? aO.aAE = L(238) + ": " + pV : u.v(4, 3, new w(L(557), pV, 1)) : u.v(4, 3, new w("⚠️ " + L(556), pV, 1)))
	}
	this.a0n = function(pV, adS) {
		var j4, q4;
		return adR = adS, bJ.fB.a0i(bJ.fB.a0g(bJ.fB.a0e(pV))), aO.aAE = "", !! function() {
			if (bK.size < 10) adV("File Too Small");
			else {
				var adX = bK.sd(12),
					s = (adX !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, adV(s = (s += "   Found: " + adX) + ("   Compatible at " + b1.z.a4P() + "/" + adX), 1)), bK.sd(12)),
					adY = bK.sd(31);
				if (adY !== bK.size) adV("Size Error: Stated Size " + adY + " Actual Size " + bK.size);
				else if (function(k, adX) {
						for (var hI = bK.aD, fk = bK.size, acM = adX, aC = 3; aC < fk; aC++) acM = acM + hI[aC] & 4095;
						return acM === k || (adV("Hash Error: " + acM + " " + k + " " + fk), !1)
					}(s, adX)) return 1
			}
			return
		}() && (j4 = bK, (q4 = aE.data = new a8b).mapType = j4.sd(2), q4.mapProceduralIndex = j4.sd(8), q4.mapRealisticIndex = j4.sd(8), q4.mapSeed = j4.sd(14), q4.mapName = j4.ada(5), 2 === q4.mapType && j4.adb(), q4.passableWater = j4.sd(
			1), q4.passableMountains = j4.sd(1), q4.playerCount = j4.sd(10), q4.humanCount = j4.sd(10), q4.selectedPlayer = j4.sd(9), q4.gameMode = j4.sd(1), q4.playerMode = j4.sd(2), q4.battleRoyaleMode = j4.sd(2), q4.numberTeams = j4.sd(4),
			q4.isZombieMode = j4.sd(1), q4.isContest = j4.sd(1), q4.isReplay = j4.sd(1), q4.elo = j4.adc(2, 14, 2), q4.colorsType = j4.sd(1), q4.colorsPersonalized = j4.sd(1), q4.colorsData = j4.adc(10, 18, 512), q4.selectableColor = j4.sd(
			1), q4.teamPlayerCount = j4.adc(4, 10, 9), q4.neutralBots = j4.sd(1), q4.botDifficultyType = j4.sd(2), q4.botDifficultyValue = j4.sd(4), q4.botDifficultyTeam = j4.adc(4, 4, 9), q4.botDifficultyData = j4.adc(10, 4, 512), q4
			.spawningType = j4.sd(2), q4.spawningSeed = j4.sd(14), q4.spawningData = j4.adc(11, 12, 1024), q4.selectableSpawn = j4.sd(1), q4.playerNamesType = j4.sd(2), q4.playerNamesData = j4.add(10, 5, 512), q4.selectableName = j4.sd(1), q4
			.aIncomeType = j4.sd(2), q4.aIncomeValue = j4.sd(8), q4.aIncomeData = j4.adc(10, 8, 512), q4.tIncomeType = j4.sd(2), q4.tIncomeValue = j4.sd(8), q4.tIncomeData = j4.adc(10, 8, 512), q4.iIncomeType = j4.sd(2), q4.iIncomeValue = j4
			.sd(8), q4.iIncomeData = j4.adc(10, 8, 512), q4.sResourcesType = j4.sd(2), q4.sResourcesValue = j4.sd(11), q4.sResourcesData = j4.adc(10, 11, 512), q4.a91 = j4.adc(10, 30, 0), !! function() {
				var j4 = bK,
					aQ2 = j4.sd(5),
					ade = j4.sd(30),
					adf = j4.sd(30);
				if (ade + adf > 8 * j4.size) return void adV("Corrupted File");
				return function(fk) {
						var adi = new Uint8Array(fk),
							adj = new Uint16Array(fk),
							adk = new Uint32Array(fk),
							adl = new Uint32Array(fk);
						bC.sp.adK = adi, bC.sp.adL = adj, bC.sp.adM = adk, bC.sp.adN = adl;
						for (var aC = 0; aC < fk; aC++) {
							var id = bK.sd(4);
							adi[aC] = id, adj[aC] = bK.sd(9), 0 === id ? adk[aC] = bK.sd(22) : 1 === id ? (adk[aC] = bK.sd(10), adl[aC] = bK.sd(10)) : 2 === id ? (adk[aC] = bK.sd(10), adl[aC] = bK.sd(9)) : 3 === id ? (adk[aC] = bK.sd(10),
								adl[aC] = bK.sd(27)) : 4 === id ? (adk[aC] = bK.sd(10), adl[aC] = bK.sd(16)) : 5 === id || 6 === id ? adk[aC] = bK.sd(10) : 7 === id ? adk[aC] = bK.sd(1) : 10 === id ? (adk[aC] = bK.sd(20), adl[aC] = bK.sd(
								22)) : 11 === id && (adk[aC] = bK.sd(16), adl[aC] = bK.sd(27))
						}
					}(ade),
					function(fk, aQ2) {
						var adO = new Uint8Array(fk),
							adP = new Array(fk);
						adP.fill(0), bC.sp.adO = adO, bC.sp.adP = adP;
						for (var aC = 0; aC < fk; aC++) adO[aC] = bK.sd(1), adP[aC] = bK.sd(aQ2)
					}(adf, aQ2), 1
			}()) && (bK.eT < 8 * bK.size - 13 || bK.eT > 8 * bK.size ? (adV("Out Of Bounds Error: " + bK.eT + " " + 8 * bK.size), !1) : (bC.sp.a8s = pV, 2 !== aE.data.mapType || (adV("Load base64 image...", 2), adS)))
	}, this.aOt = function(aNv, adW) {
		var a6q = document.createElement("canvas"),
			im = a6q.getContext("2d", {
				willReadFrequently: !0
			});
		if (a6q.width = aNv.width, a6q.height = aNv.height, im.drawImage(aNv, 0, 0), aE.data.canvas = a6q, adR || adW) return aE.a3x ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aa5()
	}
}

function adE() {
	this.a3R = function() {
		var aQ2 = function() {
				for (var adP = bC.sp.adP, fk = adP.length, max = 0, aC = 0; aC < fk; aC++) max = Math.max(max, adP[aC]);
				return aU1(Math.max(max, 1))
			}(),
			j = (q4 = aE.data, (j = bH).dv(), j.a9(12, m.rVersion), j.eT += 43, j.a9(2, q4.mapType), j.a9(8, q4.mapProceduralIndex), j.a9(8, q4.mapRealisticIndex), j.a9(14, q4.mapSeed), j.ads(q4.mapName, 5), 2 === q4.mapType && j.adt(q4.canvas),
				j.a9(1, q4.passableWater), j.a9(1, q4.passableMountains), j.a9(10, q4.playerCount), j.a9(10, q4.humanCount), j.a9(9, q4.selectedPlayer), j.a9(1, q4.gameMode), j.a9(2, q4.playerMode), j.a9(2, q4.battleRoyaleMode), j.a9(4, q4
					.numberTeams), j.a9(1, q4.isZombieMode), j.a9(1, q4.isContest), j.a9(1, q4.isReplay), j.e1(q4.elo, 2, 14), j.a9(1, q4.colorsType), j.a9(1, q4.colorsPersonalized), j.e1(q4.colorsData, 10, 18), j.a9(1, q4.selectableColor), j.e1(
					q4.teamPlayerCount, 4, 10), j.a9(1, q4.neutralBots), j.a9(2, q4.botDifficultyType), j.a9(4, q4.botDifficultyValue), j.e1(q4.botDifficultyTeam, 4, 4), j.e1(q4.botDifficultyData, 10, 4), j.a9(2, q4.spawningType), j.a9(14, q4
					.spawningSeed), j.e1(q4.spawningData, 11, 12), j.a9(1, q4.selectableSpawn), j.a9(2, q4.playerNamesType), j.adu(q4.playerNamesData, 10, 5), j.a9(1, q4.selectableName), j.a9(2, q4.aIncomeType), j.a9(8, q4.aIncomeValue), j.e1(q4
					.aIncomeData, 10, 8), j.a9(2, q4.tIncomeType), j.a9(8, q4.tIncomeValue), j.e1(q4.tIncomeData, 10, 8), j.a9(2, q4.iIncomeType), j.a9(8, q4.iIncomeValue), j.e1(q4.iIncomeData, 10, 8), j.a9(2, q4.sResourcesType), j.a9(11, q4
					.sResourcesValue), j.e1(q4.sResourcesData, 10, 11), j.e1(q4.a91, 10, 30), ! function(aQ2) {
					var j = bH,
						adK = bC.sp.adK,
						gT = bC.sp.adL,
						gV = bC.sp.adM,
						gX = bC.sp.adN,
						fk = adK.length;
					j.a9(5, aQ2), j.a9(30, fk), j.a9(30, bC.sp.adP.length);
					for (var aC = 0; aC < fk; aC++) {
						var eu = adK[aC];
						j.a9(4, eu), j.a9(9, gT[aC]), 0 === eu ? j.a9(22, gV[aC]) : 1 === eu ? (j.a9(10, gV[aC]), j.a9(10, gX[aC])) : 2 === eu ? (j.a9(10, gV[aC]), j.a9(9, gX[aC])) : 3 === eu ? (j.a9(10, gV[aC]), j.a9(27, gX[aC])) : 4 === eu ? (j
							.a9(10, gV[aC]), j.a9(16, gX[aC])) : 5 === eu || 6 === eu ? j.a9(10, gV[aC]) : 7 === eu ? j.a9(1, gV[aC]) : 10 === eu ? (j.a9(20, gV[aC]), j.a9(22, gX[aC])) : 11 === eu && (j.a9(16, gV[aC]), j.a9(27, gX[aC]))
					}
				}(aQ2), ! function(aQ2) {
					for (var j = bH, adO = bC.sp.adO, adP = bC.sp.adP, fk = adO.length, aC = 0; aC < fk; aC++) j.a9(1, adO[aC]), j.a9(aQ2, adP[aC])
				}(aQ2), bH.eT),
			q4 = bO.gB(j - 1, 6) + 1,
			aQ2 = (bG.abl(6 * q4) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eT = 24, j.a9(31, j.h.length), j.eT = 12, j.a9(12, function() {
					for (var h = bH.h, fk = h.length, acM = m.rVersion, aC = 3; aC < fk; aC++) acM = acM + h[aC] & 4095;
					return acM
				}())
			}(), bK.dv(bH.h), bI.fB.vl(bI.fB.vm(q4)));
		return bK.y9(), bH.dv(), aQ2
	}
}

function cy() {
	var eu, c3 = !1,
		adw = !1,
		adx = -1e4,
		ady = -1,
		adz = 0;

	function resize(ae3) {
		eu = 0, ac.w9() && (ae1(ae3) || c3) && (c3 = !1, bf.resize(), bZ.aGJ.resize(), aZ.dv(), bb.dv(), aa.resize(), aU.resize(), aP.resize(), bx.resize(), u.resize(), 1 <= aE.a3x ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(),
			aO.resize(), aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aDS()) : (ab.aM1(), ab.aM2()), bi.e2 = !0)
	}

	function ae0(gC) {
		return gC && 128 < gC ? Math.floor(gC) : 128
	}

	function ae1(ae3) {
		var j, k, ae5, vo, aCr;
		if (!(0 < i.vQ)) return vo = ae0(document.documentElement.clientWidth), aCr = ae0(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = vo, k = aCr, ae5 = 0 !== a1.id || j < k ?
			700 : 1200, ae5 = Math.min(ae5 / ((j + k) / 2), 1), ae5 = 0 === bm.buffer.data[1].value ? 2 * ae5 / 3 : Math.min(ae5 + (bm.buffer.data[1].value - 1) * (1 - ae5) / 2, 1), i.l = (window.devicePixelRatio || 1) * ae5, __fx.hoveringTooltip
			.canvasPixelScale = i.l, ae3 && !adw ? (adw = !0, u.removeChild(document.body, a5V)) : adw && (adw = !1, document.body.appendChild(a5V)), j = Math.floor(.5 + vo * i.l), k = Math.floor(.5 + aCr * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aFv(j, k), i.max = aAU(j, k), i.iv = bO.gB(j + k, 2), i.z3 = j / k, a5V.width = j, a5V.height = k, a5V.style.width = vo + "px", a5V.style.height = aCr + "px", ady = bi.ek + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.iv = 0, this.z3 = 1, this.l = 1, this.vQ = 0, this.dw = function() {
		this.j = ae0(document.documentElement.clientWidth) + 2, this.k = ae0(document.documentElement.clientHeight) + 2
	}, this.dv = function() {
		eu = 1, a5V = document.getElementById("canvasA"), 2 === a1.id && (a5V.style.webkitUserSelect = "none"), (z7 = a5V.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, ae1(0), a5V.addEventListener("contextrestored", function() {
			c3 = !0, resize(0)
		})
	}, this.ep = function() {
		50 <= ++eu && resize(0), -1 === ady || bi.ek < ady || (ady = -1, 2e3 * ++adz >= bi.ek + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.e5 = function(kI) {
		c3 = !0, resize(kI)
	}, this.a6A = function() {
		adx + 1e3 > bi.ek || (adx = bi.ek, resize(0))
	}
}

function dj() {
	var ae7 = [];
	this.aKn = function(pd) {
		for (var el = (new Date).getTime() - 36e5, aC = ae7.length - 1; 0 <= aC; aC--)
			if (ae7[aC].el < el) ae7.splice(aC, 1);
			else if (ae7[aC].pd === pd) return !0;
		return !1
	}, this.aKp = function(pd, aKo) {
		return !(this.aKn(pd) || !b1.z.eq(0) || (b1.aW2.aW3({
			action: 6,
			pd: pd,
			value: aKo
		}), ae7.push({
			pd: pd,
			el: (new Date).getTime()
		}), 0))
	}
}

function dS() {
	this.ac0 = new ae8, this.a4q = new ae9, this.acH = new aeA
}

function aeA() {
	var aeB = aeC(),
		aeD = aeE(),
		aeF = aeG();
	this.sd = function() {
		return 123
	}, this.a3R = function() {
		bJ.fB.a0m(bm.buffer.data[183].value, 15), bG.a9(14, aeB), bG.a9(7, aeD), bG.a9(12, aeF)
	}
}

function aeC() {
	for (var eu = document.createElement("canvas"), eu = (eu.width = 24, eu.height = 24, eu.getContext("2d", {
			alpha: !1
		})), fn = (eu.fillStyle = "rgb(0,0,0)", eu.fillRect(0, 0, 24, 24), eu.font = "22px system-ui", eu.textBaseline = "middle", eu.textAlign = "center", eu.fillStyle = "rgb(255,255,255)", eu.fillText("Q", 12, 12), eu.getImageData(0, 0, 24, 24)
			.data), fk = fn.length, ly = 0, aC = 0; aC < fk; aC += 4) ly += fn[aC];
	return 16383 & ly
}

function aeE() {
	var fn = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fn + .5) / 15))
}

function aeG() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function ae9() {
	this.a4r = function() {
		for (var hI, fk = am.lZ, xC = am.le, a4c = ah.a4c, aCf = this.aNe(), aC = 0; aC < fk; aC++) hI = xC[aC], bD.h6.kQ(hI) || (a4c[hI] = aCf);
		var su = ah.su,
			k6 = ah.k6,
			k7 = ah.k7,
			a4a = ah.a4a,
			fk = aE.l3;
		for (aC = 0; aC < fk; aC++)(0 === a4a[aC] || k7[aC] < 1 || 2 * su[aC] > 3 * (k6[aC] + k7[aC])) && (a4c[aC] = 0);
		var a4o = 0;
		for (aC = 0; aC < fk; aC++) a4o += 0 < a4c[aC];
		return a4o
	}, this.aNe = function() {
		return Math.min(65535, bi.l0())
	}
}

function ae8() {
	function aeK(h, gC, ia) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (gC >> (aC + ia) % 30 & 1)) % 256
	}
	this.ep = function(aeH, aeI) {
		var h = new Uint8Array(256);
		return function(h, aeH, aeI) {
				var aC, aeM = 3 + (4 + aeH) % 32768,
					aeN = 12 + aeI % 32768,
					aeO = 17 + ((aeH & aeI) + (aeH | aeI) + aeH) % 32768;
				for (aC = 0; aC < 256; aC++) aeM = 1 + aeM * aeN % aeO, h[aC] = aeM % 256
			}(h, aeH, aeI), aeK(h, aeH, 2), aeK(h, aeI, 7),
			function(h) {
				var aC, gC, eT = 0;
				for (aC = 0; aC < 3e4; aC++) gC = h[eT], h[eT] = (gC + aC + h[(eT + aC) % 256]) % 256, eT = (gC + aC + eT + (gC & eT)) % 256
			}(h),
			function(h) {
				var aC, aCr = 1,
					wU = 1;
				for (aC = 0; aC < 256; aC += 2) aCr = (1 + aCr) * (h[aC] + 1) % 1073741824, wU = (1 + wU) * (h[aC + 1] + 1) % 1073741824;
				return [aCr, wU]
			}(h)
	}, this.ac1 = function(aeP, aeQ, aeR, result) {
		for (var hD = 1 << aeP, aC = 0; aC < hD; aC++)
			if (this.aeS(aC, aeQ, aeR) === result) return aC;
		return 0
	}, this.aeS = function(aeT, aeQ, aeR) {
		for (var a1I = aeQ + aeT, a1R = aeR + aeT, gC = a1I + a1R & 2147483647, g3 = 1; g3 <= 16; g3++) gC = (gC = (gC ^ gC >> g3) >>> 1 + (3 & a1I)) * (7 + (1023 & (a1I | a1R))) & 1073741823, a1R >>= 1 + (1 & (a1I >>= 1 + (1 & (gC += 65535 &
			a1R))));
		return gC &= 1073741823
	}
}

function cv() {
	var aeU, aeV, iz, aeW;
	this.dv = function() {
		var aC, fr, ft, aY6, aeX, j, k, p3, ij, a2T, gC, hI, g0, g3, aea;
		if (function() {
				if (iz = !0, aeW = "rgb(" + bV.aRF[0] + "," + bV.aRF[1] + "," + bV.aRF[2] + ")", bV.aRb(bV.fQ)) return 1;
				return iz = !1, 0
			}()) aeV = null;
		else {
			for (aeU = bO.gB(96, 4), aeX = 1 === bV.fQ ? (aY6 = 0, 160) : (aY6 = 128, 32), aeW = "rgb(" + aY6 + "," + aY6 + "," + aY6 + ")", aeV = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (aeV[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fv : aeU, k = aC % 2 == 0 ? aeU : bV.fw + 2 * aeU, aeV[aC].width = j, aeV[aC].height = k, a2T = (ij = (p3 = aeV[aC].getContext("2d", {
						alpha: !1,
						willReadFrequently: !0
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (ft = aeU - 1; 0 <= ft; ft--)
						for (gC = aeX + Math.floor((ft + 1) * (aY6 - aeX) / (aeU + 1)), fr = j - 1; 0 <= fr; fr--) a2T[hI = 4 * ((0 === aC ? aeU - ft - 1 : ft) * j + fr)] = gC, a2T[hI + 1] = gC, a2T[hI + 2] = gC, a2T[hI + 3] = 255;
				else {
					for (fr = aeU - 1; 0 <= fr; fr--)
						for (gC = aeX + Math.floor((fr + 1) * (aY6 - aeX) / (aeU + 1)), ft = k - 1 - aeU; aeU <= ft; ft--) a2T[hI = 4 * (ft * j + (3 === aC ? aeU - fr - 1 : fr))] = gC, a2T[hI + 1] = gC, a2T[hI + 2] = gC, a2T[hI + 3] = 255;
					for (g3 = 1; 0 <= g3; g3--)
						for (fr = aeU - 1; 0 <= fr; fr--)
							for (ft = aeU - 1; 0 <= ft; ft--) g0 = (Math.pow(fr * fr + ft * ft, .5) + 1) / (aeU + 1), gC = aeX + Math.floor((1 < g0 ? 1 : g0) * (aY6 - aeX)), a2T[hI = 4 * ((0 === g3 ? aeU - ft - 1 : ft + g3 * (k - aeU)) * j + (
								1 === aC ? fr : aeU - fr - 1))] = gC, a2T[hI + 1] = gC, a2T[hI + 2] = gC, a2T[hI + 3] = 255
				}
				p3.putImageData(ij, 0, 0)
			}
			aea = aeX, bV.aBZ.fillStyle = "rgb(" + aea + "," + aea + "," + aea + ")", bV.aBZ.fillRect(0, 0, bV.fv, 1), bV.aBZ.fillRect(0, bV.fw - 1, bV.fv, 1), bV.aBZ.fillRect(0, 0, 1, bV.fw), bV.aBZ.fillRect(bV.fv - 1, 0, 1, bV.fw)
		}
	}, this.a21 = function() {
		var g3 = iz ? 0 : -aeU;
		aU0(g3, g3, bV.fv - 2 * g3, bV.fw - 2 * g3, bd.aeb, bd.aec, bd.aed, bd.aee) || (z7.fillStyle = aeW, z7.fillRect(0, 0, i.j, i.k))
	}, this.z6 = function() {
		iz || (aTz(0, -aeU, bV.fv, aeU, bd.aeb, bd.aec, bd.aed, bd.aee) && z7.drawImage(aeV[0], bd.aef, bd.aeg - aeU), aTz(bV.fv, -aeU, aeU, bV.fw + 2 * aeU, bd.aeb, bd.aec, bd.aed, bd.aee) && z7.drawImage(aeV[1], bd.aef + bV.fv, bd.aeg - aeU),
			aTz(0, bV.fw, bV.fv, aeU, bd.aeb, bd.aec, bd.aed, bd.aee) && z7.drawImage(aeV[2], bd.aef, bd.aeg + bV.fw), aTz(-aeU, -aeU, aeU, bV.fw + 2 * aeU, bd.aeb, bd.aec, bd.aed, bd.aee) && z7.drawImage(aeV[3], bd.aef - aeU, bd.aeg - aeU))
	}
}

function dH() {
	this.aNc = new aeh, this.a25 = new aei, this.z = new aej, this.jV = new aek, this.aea = new ael, this.my = new aem, this.kr = new aen, this.lq = new aeo, this.aep = new aeq, this.aer = new aes, this.n9 = new aet, this.iL = new aeu, this.mP =
		new aev, this.ls = new aew, this.s2 = new aex, this.n2 = new aey, this.t2 = new aez, this.t8 = new af0, this.t3 = new af1, this.s6 = new af2, this.a9c = new af3, this.af4 = new af5, this.af6 = new af7, this.dv = function() {
			this.t3.dv(), this.a9c.dv(), this.af4.dv(), this.af6.dv(), this.mP.dv(), this.a25.dv(), this.z.dv(), this.jV.dv(), this.aea.dv(), this.aer.dv(), this.n2.dv()
		}, this.z6 = function() {
			this.aer.z6(), this.af4.z6(), this.a25.z6()
		}
}

function aen() {
	this.ep = function(player) {
		return !!bQ.n9.nA(player) && !(bQ.z.l7[player] >= Math.max(3 * ap.performance.mH, aF.lH[aF.iR[player]]) || !bD.h6.nB(player, aF.lF[aF.iR[player]], 32, 0) || aX.aFi() || !(ap.ju.ep(player) || ap.jj.ep(player) || ap.jl.ep(player)) || (
			function(player) {
				bR.gM[1] = 4, bD.h6.nD(player);
				var jL = aF.lF[aF.iR[player]];
				bQ.z.nE(player, jL)
			}(player), 0))
	}
}

function af1() {
	var afE = null;
	this.dv = function() {
		(afE = null === afE ? new Uint8Array(aE.fh) : afE).fill(bQ.t8.afF)
	}, this.ep = function() {
		var t8 = bQ.t8;
		if (bi.l0() % t8.afG == 0)
			for (var gC = function() {
					var afJ = bQ.t8.afK,
						fr = afJ[0],
						ft = afJ[1],
						fk = fr.length,
						hD = function() {
							for (var xC = am.le, fk = am.lZ, hD = 0, aC = 0; aC < fk; aC++) bD.h6.kQ(xC[aC]) || hD++;
							return hD
						}();
					if (hD <= fr[0]) return ft[0];
					for (var aC = 1; aC < fk; aC++) {
						var j8;
						if (hD < fr[aC]) return j8 = (ft[aC] - ft[aC - 1]) * (hD - fr[aC - 1]), ft[aC - 1] + bO.gB(j8, fr[aC] - fr[aC - 1])
					}
					return ft[fk - 1]
				}(), max = t8.afF, nb = afE, fk = nb.length, aC = 0; aC < fk; aC++) nb[aC] = Math.min(nb[aC] + gC, max)
	}, this.has = function(player) {
		return afE[player] >= bQ.t8.afI
	}, this.t5 = function(player) {
		afE[player] -= bQ.t8.afI
	}
}

function aey() {
	var afM = 0,
		afN = null;
	this.dv = function() {
		null === afN && (afN = new Uint16Array(2 * bQ.z.lH)), afM = 0
	}, this.et = function(afO, n2) {
		var afP = afN;
		afP[afM++] = afO, afP[afM++] = n2
	}, this.n3 = function(player, n1) {
		for (var afP = afN, fk = afM, aC = 0; aC < fk; aC += 2)
			if (afP[aC] === n1 && bQ.ls.afQ(afP[aC + 1]) && player === bQ.z.mx[bR.gM[2]] >> 3) return !0;
		return !1
	}, this.afR = function(afS) {
		var my = bQ.z.mu[afS];
		if (!(my < 64)) {
			for (var n1 = bQ.z.mw[afS], afP = afN, fk = afM, aC = fk - 2; 0 <= aC; aC -= 2)
				if (afP[aC] === n1) {
					{
						afX = void 0;
						var afX = afP[aC + 1];
						bQ.ls.afQ(afX) && bQ.n2.aff(bR.gM[2])
					}
					afP[aC] = afP[fk - 2], afP[aC + 1] = afP[fk - 1], fk -= 2
				} afM = fk
		}
	}, this.afU = function(afV, afW) {
		for (var afX = bQ.z.mw[afV], n1 = -1, afP = afN, fk = afM, aC = 1; aC < fk; aC += 2)
			if (afP[aC] === afX) {
				n1 = afP[aC - 1];
				break
			} if (-1 === n1) return !1;
		if (!bQ.ls.afQ(n1)) return !1;
		var afS = bR.gM[2],
			mO = bQ.z.mv[afS];
		if (afW === mO[mO.length - 1]) bQ.z.mv[afV] = bQ.mP.afY(bQ.z.mv[afV], bQ.mP.mX(mO));
		else {
			var afZ = bQ.ls.afa(mO, afW);
			if (-1 === afZ) return !1;
			var afb = bQ.z.n7[afS];
			afZ === afb ? (afS = bP.jT(bQ.z.n8[afS]), bQ.z.mv[afV] = bQ.mP.afd(bQ.z.mv[afV], mO, afZ, afW, bP.jB(mO[afZ], afW) > bP.jB(mO[afZ], afS))) : bQ.z.mv[afV] = bQ.mP.afd(bQ.z.mv[afV], mO, afZ, afW, afb < afZ)
		}
		return !0
	}, this.aff = function(afg) {
		var ly = bQ.z,
			my = ly.mu[afg];
		if (my % 64 == 5) return !1;
		var mO = ly.mv[afg],
			afh = ly.n7[afg],
			afi = new Uint32Array(afh + 2);
		afi[0] = bQ.s6.afj(afg);
		for (var aC = 0; aC <= afh; aC++) afi[aC + 1] = mO[afh - aC];
		return ly.mv[afg] = afi, ly.n7[afg] = 0, ly.afk[afg] = 0, ly.afl[afg] = ly.n8[afg], ly.mu[afg] = my - my % 64 + 5, !0
	}
}

function aet() {
	this.nA = function(player) {
		return !!aE.data.passableWater && bQ.z.mt !== bQ.z.lH && bQ.z.l7[player] !== bQ.z.afm && 0 !== ah.hR[player].length
	}, this.sx = function(aco) {
		var my = bR.gM[1];
		return 7 === my ? ad.iz(bP.fa(aco)) : !(4 <= my || !bQ.ls.afn(bP.fa(aco))) && ad.ff(bP.fa(bP.jX(aco, my)))
	}
}

function af0() {
	this.afo = 10, this.afp = 25e4, this.afq = 20, this.afr = 3e5, this.afs = 5e4, this.aft = 5, this.afu = 10, this.afv = 9, this.afw = 25, this.afx = 10, this.afy = 10, this.afz = 200, this.ag0 = 100, this.t9 = 50, this.ag1 = .002, this.ag2 = .012,
		this.ag3 = .008, this.ag4 = 2.33, this.ag5 = [255, 255, 255], this.ag6 = [0, 0, 0], this.aEF = [255, 210, 210], this.ag7 = [50, 0, 0], this.ag8 = [255, 255, 0], this.ag9 = 12, this.agA = 12, this.agB = 7, this.agC = 1.7, this.agD = 7, this
		.agE = .02, this.agF = 1.6, this.afF = 255, this.afI = 32, this.afG = 9, this.afK = [
			[1, 10, 50, 200],
			[32, 32, 32, 32]
		]
}

function aeh() {
	this.aNd = function(player) {
		for (var aC4 = bQ.z.aC4, w1 = player << 3, aC = w1 + bQ.z.l7[player] - 1; w1 <= aC; aC--) this.agG(aC4[aC])
	}, this.agG = function(agH) {
		var z = bQ.z,
			agI = z.mt - 1,
			agJ = z.mx[agH],
			agK = z.agL[agH],
			agM = z.n8[agH];
		z.mt = agI, z.mx[agH] = z.mx[agI], z.n8[agH] = z.n8[agI], z.afk[agH] = z.afk[agI], z.aAn[agH] = z.aAn[agI], z.agL[agH] = z.agL[agI], z.mw[agH] = z.mw[agI], z.mu[agH] = z.mu[agI], z.agN[agH] = z.agN[agI], z.agO[agH] = z.agO[agI], z.mv[
			agH] = z.mv[agI], z.n7[agH] = z.n7[agI], z.afl[agH] = z.afl[agI], z.agP[agH] = z.agP[agI], z.agQ[agH] = z.agQ[agI], z.aC4[z.mx[agH]] = agH,
			function(acn) {
				var player = acn >> 3,
					z = bQ.z,
					fk = z.l7[player] - 1,
					agT = (player << 3) + fk;
				z.l7[player] = fk, agT !== acn && (z.aC4[acn] = z.aC4[agT], z.mx[z.aC4[acn]] = acn)
			}(agJ), bQ.jV.jV[bP.jU(z.n8[agH])][z.agL[agH]] = agH, agI = bP.jU(agM), agJ = agK, agI = bQ.jV.jV[agI], z = agI.pop(), agJ !== agI.length && (agI[agJ] = z, bQ.z.agL[z] = agJ)
	}
}

function aei() {
	var agV = 12,
		agW = 12,
		agX = 1,
		aBD = "",
		agY = {},
		agZ = null,
		aga = null;

	function agp(a2T, fW, aY6) {
		fW *= 4;
		a2T[fW] = aY6[0], a2T[1 + fW] = aY6[1], a2T[2 + fW] = aY6[2], a2T[3 + fW] = 255
	}
	this.dv = function() {
		var t8 = bQ.t8;
		aBD = "", agY = {}, agZ = [t8.ag5, t8.ag6, t8.aEF, t8.ag8, t8.ag7], aga = new Array(5);
		for (var aC = 0; aC < 5; aC++) aga[aC] = bD.color.qF(agZ[aC][0], agZ[aC][1], agZ[aC][2])
	}, this.z6 = function() {
		var aC, n8 = bQ.z.n8,
			mx = bQ.z.mx,
			aAn = bQ.z.aAn,
			agN = bQ.z.agN,
			t8 = bQ.t8,
			agd = aE.fU,
			age = bQ.a9c.agf(),
			fk = bQ.z.mt,
			agg = i.j,
			agh = i.k,
			agi = bV.fv << 4,
			fZ = iw,
			im = z7;
		for (im.imageSmoothingEnabled = fZ < 9, bD.ta.textAlign(im, 1), bD.ta.textBaseline(im, 1), ! function(im) {
				var font = bD.ta.v9(1, 100);
				font !== aBD && (aBD = font, im.font = font, agX = (.5 * im.measureText("9999").width + 12) / 62, agW = Math.max(Math.round((agV - 2) * agX) + 2, agV), agY = {})
			}(im), aC = 0; aC < fk; aC++) {
			var alpha, aE6, player = mx[aC] >> 3,
				iR = aAn[aC],
				agc = (.9 + .1 * Math.log10(Math.max(iR, 1))) * fZ,
				iR = bD.pZ.a88(iR),
				agc = Math.floor(t8.ag4 * agc),
				fr = (j4 = n8[aC]) % agi / 16 * fZ - jM,
				j4 = Math.floor(j4 / agi) / 16 * fZ - jN;
			fr < -(aE6 = 1.5 * agc) || j4 < -aE6 || agg + aE6 < fr || agh + aE6 < j4 || (aE6 = bQ.aer.agk(player) ? agN[aC] ? 4 : 1 : agN[aC] ? 2 : 0, (alpha = (agc - t8.agB) / (t8.agA - t8.agB)) <= 0) || (alpha = Math.min(alpha, 1), player ===
				agd && function(im, fr, ft, fontSize, eu, alpha) {
					var a6q = agY[eu];
					a6q = a6q || (agY[eu] = function(eu) {
						var eu = agZ[eu],
							j = agW,
							k = agV,
							a6q = bD.ta.a6r(j, k),
							im = bD.ta.getContext(a6q, !0),
							ij = bD.ta.getImageData(im, j, k),
							a2T = ij.data;
						return agp(a2T, j + 1, eu), agp(a2T, j + 2, eu), agp(a2T, 2 * j + 1, eu), agp(a2T, 2 * j - 3, eu), agp(a2T, 2 * j - 2, eu), agp(a2T, 3 * j - 2, eu), agp(a2T, j * (k - 3) + 1, eu), agp(a2T, j * (k - 2) + 1, eu),
							agp(a2T, j * (k - 2) + 2, eu), agp(a2T, j * (k - 2) - 2, eu), agp(a2T, j * (k - 1) - 3, eu), agp(a2T, j * (k - 1) - 2, eu), im.putImageData(ij, 0, 0), a6q
					}(eu));
					var eu = .62 * fontSize,
						fontSize = eu * agX,
						aDO = 2 * fontSize / (agW - 2),
						aDP = 2 * eu / (agV - 2);
					im.globalAlpha = alpha, im.setTransform(aDO, 0, 0, aDP, fr - fontSize - aDO, ft - eu - aDP), im.drawImage(a6q, 0, 0)
				}(im, fr, j4, agc, aC === age ? 3 : aE6, alpha), im.globalAlpha = alpha, im.setTransform(1, 0, 0, 1, 0, 0), im.font = bD.ta.v9(1, agc), im.fillStyle = aga[aE6], im.fillText(iR, fr, j4 + .1 * agc), bD.h6.kQ(player) && (alpha =
					im.measureText(iR).width, aE6 = j4 + .1 * agc + bD.ta.a30 * agc, im.fillRect(fr - .5 * alpha, aE6, alpha, Math.max(1, .1 * agc))))
		}
		im.globalAlpha = 1, im.imageSmoothingEnabled = !1, im.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function af5() {
	var agq = new Int32Array(8);

	function agt(fW) {
		return (bP.fs(fW) + .5) * iw - jM
	}

	function agu(fW) {
		return (bP.fu(fW) + .5) * iw - jN
	}
	this.dv = function() {
		agq.fill(-1)
	}, this.show = function(player, o3) {
		if (player === aE.fU) {
			for (var agr = 0, aC = 0; aC < 8; aC++)
				if (agq[aC] === o3 || -1 === agq[aC]) {
					agr = aC;
					break
				} agq[agr] = o3
		}
	}, this.z6 = function() {
		var t8 = bQ.t8,
			player = aE.fU;
		if (bD.h6.hx(player)) {
			var im = z7,
				iv = i.iv;
			im.setTransform(1, 0, 0, 1, 0, 0), im.strokeStyle = bE.qN, im.lineWidth = Math.max(1, t8.ag1 * iv), im.setLineDash([t8.ag2 * iv, t8.ag3 * iv]);
			for (var n5, aC = 0; aC < 8; aC++) - 1 !== agq[aC] && ((n5 = bQ.ls.o5(player, agq[aC])) < 0 || 65535 === bQ.z.afk[n5] ? agq[aC] = -1 : function(im, n5) {
				var ly = bQ.z,
					mO = ly.mv[n5],
					afh = ly.n7[n5],
					fk = mO.length - 1,
					ly = ly.n8[n5];
				im.beginPath(), im.moveTo(agt(mO[fk]), agu(mO[fk]));
				for (var ia = fk - 1; afh < ia; ia--) im.lineTo(agt(mO[ia]), agu(mO[ia]));
				n5 = bP.j7(ly) * iw / 16 - jM, fk = bP.jA(ly) * iw / 16 - jN;
				im.lineTo(n5, fk), im.stroke()
			}(im, n5));
			im.setLineDash([])
		}
	}
}

function aes() {
	var agv = null,
		agw = 0,
		agx = !1,
		agy = new Array(64),
		agz = null;

	function ah6(player) {
		var eu;
		return agz[player] < 0 && (eu = ad.aBe(player), agz[player] = (Math.round(eu[0] / 85) << 4) + (Math.round(eu[1] / 85) << 2) + Math.round(eu[2] / 85)), agz[player]
	}

	function ah1(ah7) {
		for (var fr, fW, j5, j8, ig = agw, a6q = bD.ta.a6r(ig, ig), im = bD.ta.getContext(a6q, !0), ij = bD.ta.getImageData(im, ig, ig), a2T = ij.data, ly = (ig - 1) / 2, ah8 = (.5 + ly) * (.5 + ly), ft = 0; ft < ig; ft++)
			for (fr = 0; fr < ig; fr++) j5 = fr - ly, j8 = ft - ly, a2T[fW = 4 * (ft * ig + fr)] = ah7[0], a2T[1 + fW] = ah7[1], a2T[2 + fW] = ah7[2], a2T[3 + fW] = Math.max(ah8 - j5 * j5 - j8 * j8, 0) * ah7[3] / ah8;
		return im.putImageData(ij, 0, 0), a6q
	}
	this.dv = function() {
		agx = !aE.ic && 9 !== aE.lL, agy.fill(null), (agz = null === agz ? new Int16Array(aE.fh) : agz).fill(-1);
		var ig = 2 * Math.floor(bQ.t8.ag9 / 2) + 1;
		if (null === agv || ig !== agw) {
			agw = ig, agv = new Array(bj.ah0.length);
			for (var aC = 0; aC < agv.length; aC++) agv[aC] = ah1(bj.ah0[aC])
		}
	}, this.z6 = function() {
		for (var oQ = iw, agg = i.j, agh = i.k, o6 = jM / oQ, o7 = jN / oQ, oJ = (agg + jM) / oQ, oK = (agh + jN) / oQ, hJ = -agw * oQ, ah2 = .5 * hJ, agi = bV.fv << 4, fk = bQ.z.mt, n8 = bQ.z.n8, mx = bQ.z.mx, aF3 = bj.aF3, a6q = agv, im = z7,
				aC = 0; aC < fk; aC++) {
			var j4 = n8[aC],
				fr = agg * (j4 % agi / 16 - o6) / (oJ - o6) + ah2,
				j4 = agh * (Math.floor(j4 / agi) / 16 - o7) / (oK - o7) + ah2;
			agg < fr || agh < j4 || fr < hJ || j4 < hJ || (im.setTransform(oQ, 0, 0, oQ, fr, j4), fr = mx[aC] >> 3, j4 = agx ? function(player) {
				player = ah6(player);
				{
					var ah7;
					null === agy[player] && (ah7 = [85 * (player >> 4), 85 * (player >> 2 & 3), 85 * (3 & player), 180], agy[player] = ah1(ah7))
				}
				return agy[player]
			}(fr) : a6q[aF3[fr]], im.drawImage(j4, 0, 0))
		}
		im.globalAlpha = 1, im.setTransform(oQ, 0, 0, oQ, 0, 0)
	}, this.agk = function(player) {
		var hJ;
		return agx ? 600 < 85 * (((hJ = ah6(player)) >> 4) + (hJ >> 2 & 3) + (3 & hJ)) : 600 < (hJ = bj.aY7[bj.aF3[player]])[0] + hJ[1] + hJ[2]
	}
}

function af7() {
	var ahA = null,
		ahB = null,
		ahC = null,
		ahD = null,
		ahE = null,
		ahF = 0;
	this.dv = function() {
		var hD;
		null === ahA && (hD = bQ.z.lH, ahA = new Int32Array(hD), ahB = new Int32Array(hD), ahC = new Uint16Array(hD), ahD = new Uint16Array(hD), ahE = new Uint16Array(8192))
	}, this.ahG = function() {
		for (var j4, ahH, ly = bQ.z, fk = ly.mt, agi = bV.fv << 4, aC = 0; aC < fk; aC++) ahC[aC] = 0, ahD[aC] = 0, ahA[aC] = 0, ahB[aC] = 0, 65535 !== ly.afk[aC] && (j4 = ly.n8[aC], ahH = bP.jS(ly.mv[aC][ly.n7[aC] + 1]), ahA[aC] = ahH % agi -
			j4 % agi, ahB[aC] = bO.gB(ahH, agi) - bO.gB(j4, agi));
		ahF = 0
	}, this.ahI = function(ahJ, ahK, j5, j8) {
		j5 = ahA[ahJ] * j5 + ahB[ahJ] * j8;
		ahC[ahJ]++, j5 < 0 ? ahD[ahJ]++ : 0 < j5 && ahF < 4096 && (ahE[2 * ahF] = ahJ, ahE[2 * ahF + 1] = ahK, ahF++)
	}, this.ahM = function() {
		var ly = bQ.z,
			aRN = ly.agO;
		aRN.fill(0, 0, ly.mt);
		for (var aC = 0; aC < ahF; aC++) ! function(aC) {
			return (0 !== ahA[aC] || 0 !== ahB[aC]) && 0 < ahC[aC] && ahD[aC] === ahC[aC]
		}(ahE[2 * aC + 1]) && (aRN[ahE[2 * aC]] = 1)
	}
}

function aew() {
	this.ahP = function(player, id) {
		for (var ahQ = ah.hR[player], fk = ahQ.length, aC = 0; aC < fk; aC++)
			if (bP.ix(ahQ[aC], id)) return !0;
		return !1
	}, this.ahR = function(player, fW) {
		for (var jD, ahS, fO, ahQ = ah.hR[player], fk = ahQ.length, j = bV.fv, ahU = bP.fs(fW), ahV = bP.fu(fW), fq = -1, min = bV.fv * bV.fv + bV.fw * bV.fw, id = ad.fS(bP.fa(fW)), aC = 0; aC < fk; aC++)(ahS = (ahS = ahU - (jD = (fO = ahQ[
			aC]) >> 2) % j) * ahS + (ahS = ahV - ~~((.5 + jD) / j)) * ahS) < min && bP.ix(fO, id) && (min = ahS, fq = jD);
		return fq
	}, this.lt = function(jC, jD) {
		for (var id = ad.fS(bP.fa(jD)), iy = bP.iq, fO = bP.fa(jC), ahW = -1, aC = 0; aC < 4; aC++) {
			var fZ = fO + iy[aC];
			ad.iz(fZ) && ad.fS(fZ) === id && (-1 === ahW || bP.jE(bP.fY(fZ), jD) < bP.jE(ahW, jD)) && (ahW = bP.fY(fZ))
		}
		return ahW
	}, this.mS = function(player, fW) {
		for (var iy = bP.iq, fO = bP.fa(fW), aC = 0; aC < 4; aC++) {
			var fZ = fO + iy[aC];
			if (ad.hK(fZ) && ad.a1z(player, fZ)) return !0
		}
		return !1
	}, this.mT = function(player, fW) {
		for (var iy = bP.iq, fO = bP.fa(fW), aC = 0; aC < 4; aC++) {
			var fZ = fO + iy[aC];
			if (ad.fb(fZ)) return !0;
			if (ad.hK(fZ)) {
				fZ = ad.fc(fZ);
				if (player !== fZ && bw.fd(player, fZ)) return !0
			}
		}
		return !1
	}, this.mz = function(fW) {
		for (var iy = bP.iq, fO = bP.fa(fW), aC = 0; aC < 4; aC++) {
			var fZ = fO + iy[aC];
			if (ad.hK(fZ)) {
				fZ = ad.fc(fZ);
				if (bD.h6.kQ(fZ)) return fZ
			}
		}
		return -1
	}, this.afn = function(fO) {
		if (ad.iz(fO))
			for (var iy = bP.iq, aC = 0; aC < 4; aC++)
				if (ad.ff(fO + iy[aC])) return !0;
		return !1
	}, this.o5 = function(player, id) {
		for (var w1 = player << 3, w2 = w1 + bQ.z.l7[player], mw = bQ.z.mw, aC4 = bQ.z.aC4, aC = w1; aC < w2; aC++) {
			var aC5 = aC4[aC];
			if (mw[aC5] === id) return aC5
		}
		return -1
	}, this.oA = function(player) {
		return 0 === bQ.z.l7[player] ? -1 : bQ.z.aC4[player << 3]
	}, this.a9m = function(mI, mJ) {
		var fk = bQ.z.mt;
		if (fk < 1) return -1;
		for (var n8 = bQ.z.n8, aAn = bQ.z.aAn, ahX = 0, aXb = -1, aC = 0; aC < fk; aC++) {
			var g0 = bP.j1(mI, mJ, n8[aC]);
			g0 <= bQ.a9c.ahY(aAn[aC]) && (-1 === aXb || g0 < ahX) && (ahX = g0, aXb = aC)
		}
		return aXb
	}, this.afQ = function(o3) {
		for (var fk = bQ.z.mt, mw = bQ.z.mw, aC = 0; aC < fk; aC++)
			if (mw[aC] === o3) return bR.gM[2] = aC, !0;
		return !1
	}, this.ahZ = function(fO) {
		return ad.fb(fO) ? aE.fh : ad.hK(fO) ? ad.fc(fO) : -1
	}, this.aha = function(ahb, iZ) {
		return 3 < iZ ? -1 : this.ahZ(bP.fa(bP.jX(ahb, iZ)))
	}, this.aC6 = function(n5) {
		var ly = bQ.z,
			aEC = af.aPB(ly.mx[n5] >> 3);
		return bO.gB(ly.agP[n5] * aEC, 1024)
	}, this.aP9 = function(player) {
		for (var ly = bQ.z, w1 = player << 3, w2 = w1 + ly.l7[player], gC = 0, aC = w1; aC < w2; aC++) gC += ly.agP[ly.aC4[aC]];
		return gC
	}, this.aNZ = function(player) {
		for (var w1 = player << 3, w2 = w1 + bQ.z.l7[player], aC4 = bQ.z.aC4, aAn = bQ.z.aAn, iR = 0, aC = w1; aC < w2; aC++) iR += aAn[aC4[aC]];
		return iR
	}, this.ahc = function(player, afg) {
		afg = bQ.z.mv[afg];
		return this.mS(player, afg[afg.length - 1])
	}, this.ahd = function(jC, jD, g0, ahe) {
		var jG = bP.fs(jC),
			jC = bP.fu(jC),
			jI = bP.fs(jD),
			jD = bP.fu(jD),
			jI = (g0 = Math.max(g0, 1), jI - jG),
			jD = jD - jC,
			j5 = bO.gB(Math.abs(jI) * ahe, g0),
			ahe = bO.gB(Math.abs(jD) * ahe, g0);
		return bP.g7(jG + Math.sign(jI) * j5, jC + Math.sign(jD) * ahe)
	}, this.afa = function(mO, fW) {
		for (var fk = mO.length - 1, fr = bP.fs(fW), ft = bP.fu(fW), aC = 0; aC < fk; aC++) {
			var jC = mO[aC],
				jD = mO[aC + 1],
				o6 = bP.fs(jC),
				jC = bP.fu(jC),
				oJ = bP.fs(jD),
				jD = bP.fu(jD);
			if (!(fr !== o6 && fr !== oJ && Math.sign(fr - o6) === Math.sign(fr - oJ) || ft !== jC && ft !== jD && Math.sign(ft - jC) === Math.sign(ft - jD))) {
				if (o6 === oJ || jC === jD) return aC;
				if (Math.abs(fr - o6) === Math.abs(ft - jC) && Math.abs(fr - oJ) === Math.abs(ft - jD)) return aC
			}
		}
		return -1
	}, this.aFl = function() {
		for (var ahh = me[0], mx = bQ.z.mx, mt = bQ.z.mt, h = [], aC = 0; aC < mt; aC++) bD.h6.lh(ahh, mx[aC] >> 3) && h.push(aC);
		return h
	}, this.mQ = function(player, mO) {
		for (var w1 = player << 3, w2 = w1 + bQ.z.l7[player], aC4 = bQ.z.aC4, mv = bQ.z.mv, iD = mO[0], lg = mO[mO.length - 1], aC = w1; aC < w2; aC++) {
			var hI = mv[aC4[aC]];
			if (hI[0] === iD && hI[hI.length - 1] === lg) return !0
		}
		return !1
	}
}

function aex() {
	function ahk(player, afg) {
		afg = bP.jT(bQ.z.n8[afg]), afg = ad.fS(bP.fa(afg));
		return !!bQ.ls.ahP(player, afg)
	}

	function ahi(player) {
		return bQ.n9.nA(player) && !bQ.mP.mV()
	}
	this.a9Z = function(player, fW) {
		return !!ahi(player) && -1 !== (fW = function(player, fW) {
			for (var fk = bQ.z.mt, n8 = bQ.z.n8, mx = bQ.z.mx, ahX = bP.is(), aXb = -1, aC = 0; aC < fk; aC++) {
				var g0 = bP.jB(fW, bP.jT(n8[aC]));
				g0 < ahX && bD.h6.lh(player, mx[aC] >> 3) && (ahX = g0, aXb = aC)
			}
			return aXb
		}(player, fW)) && !!ahk(player, fW) && (bR.gM[3] = bQ.z.mw[fW], !0)
	}, this.s3 = function(player, o3) {
		return !!ahi(player) && !!bQ.ls.afQ(o3) && !!ahk(player, bR.gM[2])
	}, this.afC = function(player, o3, ahl) {
		return !! function(player, o3, ahl) {
			if (ahi(player) && bQ.ls.afQ(o3)) {
				o3 = bR.gM[2];
				if (bD.h6.lh(player, bQ.z.mx[o3] >> 3)) {
					if (function(player, afg) {
							return bQ.ls.ahc(player, afg) && (bR.h[0] = bQ.mP.mX(bQ.z.mv[afg]), bR.gM[1] = 6, !0)
						}(player, o3)) return 1;
					var afD = bP.jT(bQ.z.n8[o3]),
						ahp = bQ.ls.ahR(player, afD);
					if (-1 !== ahp) {
						ahp = bP.jB(ahp, afD);
						if (!(ahl && 120 < ahp)) {
							ahl = function(afg, ahq, afD) {
								var mO = bQ.z.mv[afg],
									afg = bQ.z.n7[afg],
									ahs = bP.jB(afD, mO[afg + 1]);
								if (ahq <= ahs) return bQ.ls.ahd(afD, mO[afg + 1], ahs, ahq);
								for (var g0 = ahq - ahs, fk = mO.length - 1, aC = afg + 1; aC < fk; aC++) {
									var aht = bP.jB(mO[aC], mO[aC + 1]);
									if (g0 <= aht) return bQ.ls.ahd(mO[aC], mO[aC + 1], aht, g0);
									g0 -= aht
								}
								return mO[fk]
							}(o3, ahp, afD);
							if (bQ.lq.sy(player, ahl, 1)) return bR.gM[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, o3, ahl) && (player = bR.gM[2], bQ.z.mu[player] = 64 + bQ.z.mu[player] % 64, bQ.n2.et(o3, bQ.z.nC), !0)
	}
}

function aem() {
	function ahz(player, iR, ahw, afD) {
		var kC;
		if (ad.fb(ahw)) kC = aE.fh;
		else {
			if ((kC = ad.fc(ahw)) === player) return void bg.hA(player, iR - bD.h6.h9(player, iR), 12);
			if (!bw.fd(player, kC)) return void bB.l5.sN(player, kC, iR)
		}
		ae.kO(player, kC) || ae.kh(player) ? (ah.hC[player].push(afD << 2), ae.et(player, iR, kC), aG.kA(player, !0)) : bg.hA(player, iR, 12)
	}
	this.ep = function() {
		for (var mu = bQ.z.mu, n8 = bQ.z.n8, afk = bQ.z.afk, aC = bQ.z.mt - 1; 0 <= aC; aC--) 65535 === afk[aC] && mu[aC] % 64 != 7 && function(aC, afD, iZ) {
			if (6 === iZ) {
				if (bQ.n2.afU(aC, afD)) return bQ.z.n7[aC]++, bQ.z.afk[aC] = 0, 0
			} else {
				var player = bQ.z.mx[aC] >> 3,
					iR = bQ.z.aAn[aC],
					ahw = -1;
				if (iZ < 4)
					if (-1 === (ahw = function(afD, target) {
							for (var iy = bP.iq, fZ = bP.fa(afD), g3 = 0; g3 < 4; g3++)
								if (0 <= target && bQ.ls.ahZ(fZ + iy[g3]) === target) return fZ + iy[g3];
							return -1
						}(afD, bQ.z.agQ[aC])) && bD.h6.kQ(player)) iZ = 4;
					else if (-1 === ahw) return bQ.z.mu[aC] = 7, 0;
				bg.ahy(player), bQ.z.agP[aC] = 0, iZ < 4 ? ahz(player, iR, ahw, afD) : 4 === iZ ? function(player, iR, afD) {
					var aC, fo, iy = bP.iq,
						fZ = bP.fa(afD);
					for (aC = 0; aC < 4; aC++)
						if (fo = fZ + iy[aC], ad.fb(fo)) return ahz(player, iR, fo, afD);
					for (aC = 0; aC < 4; aC++)
						if (fo = fZ + iy[aC], ad.hK(fo) && !ad.a1z(player, fo)) return ahz(player, iR, fo, afD);
					for (aC = 0; aC < 4; aC++)
						if (fo = fZ + iy[aC], ad.hK(fo)) return ahz(player, iR, fo, afD)
				}(player, iR, afD) : 5 === iZ && function(player, iR, afD) {
					var aC, fo, iy = bP.iq,
						fZ = bP.fa(afD);
					for (aC = 0; aC < 4; aC++)
						if (fo = fZ + iy[aC], ad.hK(fo) && ad.a1z(player, fo)) return ahz(player, iR, fo, afD);
					for (aC = 0; aC < 4; aC++)
						if (fo = fZ + iy[aC], ad.hK(fo)) return ahz(player, iR, fo, afD);
					for (aC = 0; aC < 4; aC++)
						if (fo = fZ + iy[aC], ad.fb(fo)) return ahz(player, iR, fo, afD)
				}(player, iR, afD)
			}
			return 1
		}(aC, bP.jT(n8[aC]), mu[aC] % 64) && (bQ.n2.afR(aC), bQ.aNc.agG(aC))
	}, this.ahv = function(player, fW, iZ, o3, iR) {
		if (!(5 <= iZ)) {
			var agd = aE.fU;
			if (bD.h6.hx(agd) && bw.fd(player, agd) && player !== agd && 0 !== ah.hR[agd].length && bD.h6.a7W(player, 5)) {
				for (var ahw, fy = !1, aC = 0; aC < 4; aC++)
					if (ahw = fW + bP.ip[aC] << 2, ad.ff(ahw) && !ad.fb(ahw) && ad.fc(ahw) === agd) {
						fy = !0;
						break
					} fy && (aO.aAw(719, 0), iZ = iR < 25e3 ? L(558) + " (" + bD.pZ.a3G(iR) + ") ⛵" : L(559) + " (" + bD.pZ.a3G(iR) + ") 🚢", aO.a2Q(180, iZ, 719, player, bE.qw, bE.qK, -1, !0, void 0, {
					g4: 1,
					o3: o3
				}))
			}
		}
	}
}

function aej() {
	this.lH = 512, this.afm = 6, this.mt = 0, this.nC = 0, this.mx = new Uint16Array(this.lH), this.n8 = new Uint32Array(this.lH), this.afk = new Uint16Array(this.lH), this.aAn = new Uint32Array(this.lH), this.agL = new Uint16Array(this.lH), this
		.mw = new Uint16Array(this.lH), this.mu = new Uint8Array(this.lH), this.agN = new Uint8Array(this.lH), this.agO = new Uint8Array(this.lH), this.mv = new Array(this.lH), this.n7 = new Uint16Array(this.lH), this.afl = new Uint32Array(this.lH),
		this.agP = new Uint16Array(this.lH), this.agQ = new Int16Array(this.lH), this.l7 = new Uint8Array(aE.fh), this.aC4 = new Uint16Array(aE.fh << 3), this.dv = function() {
			this.mt = 0, this.nC = 0, this.l7.fill(0), this.mv.fill(null)
		}, this.nE = function(player, jL) {
			var iR = bR.gH[0],
				my = bR.gM[1],
				mO = bR.h[0],
				ai2 = this.nC,
				fk = this.mt,
				ai3 = bP.jS(mO[0]),
				ai4 = this.l7[player],
				ai5 = (player << 3) + ai4;
			this.mx[fk] = ai5, this.n8[fk] = ai3, this.afk[fk] = 0, iR < 60 && (bD.h6.h7(player, 60 - iR), iR = 60), this.aAn[fk] = iR, this.agL[fk] = bQ.jV.nE(fk, bP.jU(ai3)), this.mw[fk] = ai2, this.mu[fk] = my, this.agN[fk] = 0, this.agO[fk] = 0,
				this.mv[fk] = mO, this.n7[fk] = 0, this.afl[fk] = ai3, this.agP[fk] = jL + 1, this.agQ[fk] = bQ.ls.aha(mO[mO.length - 1], my), this.nC = (ai2 + 1) % 65536, this.l7[player] = ai4 + 1, this.aC4[ai5] = fk, this.mt++, bQ.my.ahv(player,
					mO[mO.length - 1], my, ai2, iR), bQ.af4.show(player, ai2)
		}, this.ep = function() {
			bQ.my.ep(), bQ.t3.ep();
			var t8 = bQ.t8;
			if (! function(ut) {
					var aiA, t8 = bQ.t8,
						aiC = t8.afo;
					if (bi.l0() % aiC == 0)
						for (var aOW, n8 = ut.n8, aAn = ut.aAn, agO = ut.agO, afk = ut.afk, agL = ut.agL, fk = ut.mt, agi = bV.fv << 4, aC = fk - 1; 0 <= aC; aC--) 65535 === afk[aC] || agO[aC] || (aOW = aAn[aC], aOW = t8.afp + Math.min(t8.afq * aOW,
							t8.afr) + Math.min(aOW >> 3, t8.afs), aiA = n8[aC], n8[aC] = aOW = function(ut, aC, g0, agi) {
							var mO = ut.mv[aC],
								fk = mO.length,
								afh = ut.n7[aC],
								ai3 = 0 === afh ? ut.afl[aC] : bP.jS(mO[afh]),
								ahH = bP.jS(mO[afh + 1]),
								aiE = ai3 % agi,
								aiF = ~~((ai3 + .5) / agi),
								aiG = ahH % agi,
								aiH = ~~((ahH + .5) / agi),
								aiI = aiG - aiE,
								aiJ = aiH - aiF,
								fn = Math.max(~~Math.sqrt(aiI * aiI + aiJ * aiJ + .5), 1),
								ai3 = bO.gB(fn * (65535 - ut.afk[aC]), 65535) + function(mO, from, agi) {
									for (var eS = 0, fk = mO.length - 1, ia = from; ia < fk; ia++) {
										var ai3 = bP.jS(mO[ia]),
											ahH = bP.jS(mO[ia + 1]),
											j5 = ahH % agi - ai3 % agi,
											ahH = bO.gB(ahH, agi) - bO.gB(ai3, agi);
										eS += ~~Math.sqrt(j5 * j5 + ahH * ahH + .5)
									}
									return eS
								}(mO, afh + 1, agi),
								hD = bO.gB(65535 * ai3 + g0 - 1, g0);
							if (hD <= 1) return ut.n7[aC] = fk - 2, ut.afk[aC] = 65535, bP.jS(mO[fk - 1]);
							g0 = bO.gB(65535 * ai3, hD);
							var aiL = ut.afk[aC] + Math.max(bO.gB(g0, fn), 1);
							for (; 65535 <= aiL && afh + 2 < fk;) {
								afh++, aiE = aiG, aiF = aiH, ahH = bP.jS(mO[afh + 1]), aiI = (aiG = ahH % agi) - aiE, aiJ = (aiH = ~~((ahH + .5) / agi)) - aiF;
								var aiM = Math.max(~~Math.sqrt(aiI * aiI + aiJ * aiJ + .5), 1);
								aiL = bO.gB((aiL - 65535) * fn, aiM), fn = aiM
							}
							if (ut.n7[aC] = afh, 65535 <= aiL) return ut.afk[aC] = 65535, ahH;
							return ut.afk[aC] = aiL, aiE + bO.gB(aiL * aiI, 65535) + agi * (aiF + bO.gB(aiL * aiJ, 65535))
						}(ut, aC, aOW * aiC, agi), agL[aC] = bQ.jV.aiD(agL[aC], aiA, aOW))
				}(this), bi.l0() % t8.aft == 0) {
				var aC, ia, ly, g4, eu, aiN, a2u, aiO, iD, aDX, o6, o7, ai3, lg, aiP, aiQ, aiR, aiS, hI = aE.fU,
					el = bQ.ls.aNZ(hI),
					fk = (ut = this).mt,
					n8 = ut.n8,
					mx = ut.mx,
					aAn = ut.aAn,
					agN = ut.agN,
					jV = bQ.jV.jV,
					aiT = jV.length,
					aiU = bQ.jV.aiU,
					agi = bV.fv << 4,
					aiV = aE.ic,
					acc = bj.fi,
					ahX = bQ.t8.afz * bQ.t8.afz,
					ut = bQ.t8.aft,
					a6P = bQ.t8.ag0,
					aiW = 1 << Math.min(ut + 1, 7),
					hJ = (fk - 1) * (bO.gB(bi.l0(), ut) % 2);
				for (bQ.af6.ahG(), aC = 0; aC < fk; aC++)
					for (ia = Math.abs(aC - hJ), ai3 = n8[ia], ly = bP.jU(ai3), iD = mx[ia] >> 3, o6 = ai3 % agi, o7 = ~~((ai3 + .5) / agi), aiR = aAn[ia], g4 = 0; g4 < 9; g4++)
						if (!((aiN = ly + aiU[g4]) < 0 || aiT <= aiN))
							for (aiO = jV[aiN], a2u = aiO.length, eu = 0; eu < a2u; eu++) aiP = aiO[eu], lg = mx[aiP] >> 3, iD == lg || aiV && acc[iD] === acc[lg] && acc[iD] || (lg = n8[aiP], (aDX = o6 - lg % agi) * aDX + (lg = o7 - ~~((lg + .5) /
								agi)) * lg < ahX && (aiS = aAn[aiP], aiQ = aiS <= aiR ? bO.gB(aiS + bO.gB(aiR - aiS, 10), 10) : bO.gB(aiR, 10), aiQ = Math.max(1, bO.gB(aiQ * a6P, 100)), aAn[aiP] = Math.max(aiS - aiQ, 0), agN[aiP] = aiW, bQ
								.af6.ahI(aiP, ia, aDX, lg)));
				bQ.af6.ahM(), bg.hA(hI, el - bQ.ls.aNZ(hI), 15)
			}
			bi.l0() % t8.afu === t8.afv && ! function(ut) {
					for (var g4, fO, aAn = ut.aAn, mx = ut.mx, t6 = ah.hm, t8 = bQ.t8, hJ = t8.afw, fk = ut.mt, aC = 0; aC < fk; aC++) {
						var player = mx[aC] >> 3,
							aEC = af.aPB(player),
							target = bQ.ls.aC6(aC),
							gC = aAn[aC];
						gC < target ? (g4 = Math.min(bO.gB(t6[player], t8.afx), gC), fO = Math.max(bO.gB(g4, hJ), 1), fO = Math.min(fO, target - gC, t6[player]), aAn[aC] = gC + fO, t6[player] -= fO) : target < gC && (g4 = Math.max(bO.gB(aEC, t8.afy),
							gC), fO = Math.max(bO.gB(g4, hJ), 1), fO = Math.min(fO, gC - target), aAn[aC] = gC - fO, bD.h6.h9(player, fO))
					}
				}(this),
				function(ut) {
					for (var aAn = ut.aAn, agN = ut.agN, aC = ut.mt - 1; 0 <= aC; aC--) agN[aC] = agN[aC] >> 1, 0 === aAn[aC] && (bQ.n2.afR(aC), bQ.aNc.agG(aC))
				}(this)
		}
}

function aek() {
	this.aiX = 32, this.shift = 5, this.fr = 0, this.ft = 0, this.jW = 0, this.aiY = 0, this.aiZ = 4, this.jV = null, this.aiU = new Int16Array(9), this.dv = function() {
		for (this.shift = 5; 16 << this.shift < bQ.t8.afz;) this.shift++;
		this.aiX = 1 << this.shift, this.jW = 1 + bO.gB(bV.fv - 1, this.aiX), this.aiY = 1 + bO.gB(bV.fw - 1, this.aiX), this.jV = new Array(this.jW * this.aiY), bD.th.a6N(this.jV);
		var fr, ft, aiU = this.aiU,
			j = this.jW;
		for (fr = -1; fr <= 1; fr++)
			for (ft = -1; ft <= 1; ft++) aiU[3 * (1 + ft) + 1 + fr] = ft * j + fr
	}, this.nE = function(aib, aC) {
		return this.jV[aC].push(aib), this.jV[aC].length - 1
	}, this.aiD = function(aic, ai3, ahH) {
		var aid, aie, ai3 = bP.jU(ai3),
			ahH = bP.jU(ahH);
		return ai3 === ahH ? aic : (aid = this.jV[ai3].pop(), this.jV[ai3].length === aic ? this.nE(aid, ahH) : (aie = this.jV[ai3][aic], this.jV[ai3][aic] = aid, bQ.z.agL[aid] = aic, this.nE(aie, ahH)))
	}
}

function aeo() {
	function ain(aik, aif) {
		var mO;
		return aik === aif ? new Uint32Array([aik, aif]) : null !== (mO = bQ.aep.aio(aik, aif)) ? mO : function(aik, aif) {
			var aC, fn, fW, fq, a0h, a4l, a8H, h, gR = bR.gR,
				buffer = (gR.fill(0), [aif]),
				ir = (gR[aif] = 1, bP.ir),
				fk = buffer.length;
			for (; 0 === gR[aik] && fk;) {
				for (h = [], aC = 0; aC < fk; aC++)
					for (fW = buffer[aC], a8H = gR[fW], fn = 0; fn < 8; fn++) fq = fW + ir[fn], ad.iz(4 * fq) && (a0h = gR[fq], a4l = a8H + 5 + ((1 & fn) << 1), 0 === a0h ? (h.push(fq), gR[fq] = a4l) : gR[fq] = Math.min(a4l, a0h));
				fk = (buffer = h).length
			}
			return 0 !== gR[aik] ? aiq(aif, aik) : null
		}(aik, aif)
	}

	function aiq(jC, aiw) {
		for (var ir = bP.ir, aix = -1, iZ = 0, nb = []; aiw !== jC;)(iZ = function(fW, iZ) {
			var gR = bR.gR,
				ir = bP.ir,
				a8H = gR[fW];
			if (a8H - gR[fW + ir[iZ]] != 5 + ((1 & iZ) << 1))
				for (var g3 = 0; g3 < 8; g3++) {
					var fn = g3 + iZ + 6 & 7;
					if (a8H - gR[fW + ir[fn]] == 5 + ((1 & fn) << 1)) return fn
				}
			return iZ
		}(aiw, iZ)) !== aix && (nb.push(aiw), aix = iZ), aiw += ir[iZ];
		return nb.push(jC), new Uint32Array(nb)
	}
	this.lr = function(player, aif) {
		return -1 !== aif && !!bQ.ls.mT(player, aif) && this.sy(player, aif, 0, !0)
	}, this.sy = function(player, aif, aig, aih) {
		player = function(player, aif, aig, aih) {
			var ahp = bQ.ls.ahR(player, aif);
			if (-1 === ahp) return -1;
			ahp = bQ.ls.lt(ahp, aif);
			if (-1 === ahp) return -1;
			var air = bP.jS(ahp);
			if (bQ.aep.ail(air, bP.jS(aif))) return bR.h[0] = new Uint32Array([ahp, aif]), -2;
			if (!aih) return null === (air = ain(ahp, aif)) ? -1 : (bR.h[0] = air, -2);
			aih = bQ.mP.mU(ahp, aif);
			if (0 <= aih) return aih;
			if (bQ.mP.mV()) return -1;
			if (0 <= (aih = bQ.mP.mU(aif, ahp))) return bQ.mP.mW(bQ.mP.mX(bQ.mP.get(aih)));
			if (ahp === aif) return bQ.mP.mW(new Uint32Array([ahp, aif]));
			if (0 <= (aih = bQ.aep.sy(ahp, aif))) return aih;
			return aig ? function(ait, player) {
				var aiw, gR = bR.gR,
					buffer = (gR.fill(0), [ait]),
					ir = (gR[ait] = 1, bP.ir),
					aiu = -1,
					fk = buffer.length;
				for (; - 1 === aiu && fk;) {
					for (var h = [], aC = 0; aC < fk; aC++)
						for (var fW = buffer[aC], a8H = gR[fW], fn = 0; fn < 8; fn++) {
							var a0h, a4l, fq = fW + ir[fn],
								fO = 4 * fq;
							ad.iz(fO) ? (a0h = gR[fq], a4l = a8H + 5 + ((1 & fn) << 1), 0 === a0h ? (h.push(fq), gR[fq] = a4l) : gR[fq] = Math.min(a4l, a0h)) : -1 === aiu && fn % 2 == 0 && ad.a1w(player, fO) && (aiu = fW)
						}
					fk = (buffer = h).length
				}
				return -1 !== aiu ? (aiw = aiq(ait = ait, aiw = aiu), 0 <= (ait = bQ.mP.mU(aiw[0], ait)) ? ait : bQ.mP.mW(aiw)) : -1
			}(aif, player) : -1
		}(player, aif, aig, aih);
		if (-2 !== player) {
			if (-1 === player) return !1;
			bR.h[0] = bQ.mP.get(player)
		}
		return !0
	}, this.aij = function(ai3, aik, aif) {
		return bQ.aep.ail(ai3, bP.jS(aif)) ? (bR.h[0] = new Uint32Array([aik, aif]), !0) : this.aim(aik, aif)
	}, this.aim = function(aik, aif) {
		aik = ain(aik, aif);
		return null !== aik && (bR.h[0] = aik, !0)
	}
}

function aeq() {
	function aii(aik, aif) {
		var jG = bP.fs(aik),
			jH = bP.fu(aik),
			jI = bP.fs(aif),
			jJ = bP.fu(aif);
		return jG === jI ? aj0(jG, jH, jJ) ? new Uint32Array([aik, aif]) : null : jH === jJ ? aj1(jH, jG, jI) ? new Uint32Array([aik, aif]) : null : aj2(jG, jH, jI, jJ, aik, aif) || aj2(jI, jJ, jG, jH, aik, aif)
	}

	function aj0(i0, jH, jJ) {
		for (var kJ = Math.min(jH, jJ), oO = Math.max(jH, jJ), ft = kJ + 1; ft < oO; ft++)
			if (!ad.iz(bP.jP(i0, ft))) return;
		return 1
	}

	function aj1(i2, jG, jI) {
		for (var kJ = Math.min(jG, jI), oO = Math.max(jG, jI), fr = kJ + 1; fr < oO; fr++)
			if (!ad.iz(bP.jP(fr, i2))) return;
		return 1
	}

	function aj2(jG, jH, jI, jJ, aik, aif) {
		for (var fk = Math.min(Math.abs(jI - jG), Math.abs(jJ - jH)), j5 = Math.sign(jI - jG), j8 = Math.sign(jJ - jH), aC = 0; aC < fk; aC++)
			if (!ad.iz(bP.jP(jG += j5, jH += j8))) return null;
		return jG === jI ? aj0(jG, jH, jJ) ? new Uint32Array([aik, bP.g7(jG, jH), aif]) : null : aj1(jH, jG, jI) ? new Uint32Array([aik, bP.g7(jG, jH), aif]) : null
	}
	this.ail = function(ai3, ahH) {
		for (var agi = bV.fv << 4, o6 = ai3 % agi, o7 = bO.gB(ai3, agi), j5 = ahH % agi - o6, j8 = bO.gB(ahH, agi) - o7, hD = Math.max(Math.abs(j5), Math.abs(j8)), aiz = -1, aC = 0; aC <= hD; aC++) {
			var fr = o6 + bO.gB(j5 * aC, Math.max(hD, 1)),
				ft = o7 + bO.gB(j8 * aC, Math.max(hD, 1)),
				fr = bP.g7(fr >> 4, ft >> 4);
			if (fr !== aiz && !ad.iz(bP.fa(fr))) return !1;
			aiz = fr
		}
		return !0
	}, this.aio = aii, this.sy = function(aik, aif) {
		aik = aii(aik, aif);
		return null === aik ? -1 : bQ.mP.mW(aik)
	}
}

function aev() {
	var aj3 = [];
	this.dv = function() {
		aj3 = []
	}, this.mV = function() {
		return 65536 === aj3.length
	}, this.mU = function(aik, aif) {
		for (var mP = aj3, fk = mP.length, aC = 0; aC < fk; aC++) {
			var hI = mP[aC];
			if (hI[0] === aik && hI[hI.length - 1] === aif) return aC
		}
		return -1
	}, this.mX = function(mO) {
		var aj4 = new Uint32Array(mO.length);
		return aj4.set(mO), aj4.reverse()
	}, this.afY = function(iD, lg) {
		var hD = iD.length - 1,
			aj5 = new Uint32Array(hD + lg.length);
		return aj5.set(iD, 0), aj5.set(lg, hD), aj5
	}, this.afd = function(iD, lg, a0B, fW, aj6) {
		aj6 && (a0B = (lg = this.mX(lg)).length - a0B - 2);
		aj6 = lg.subarray(a0B + 1 + (fW === lg[a0B + 1])), fW = new Uint32Array(iD.length + aj6.length);
		return fW.set(iD, 0), fW.set(aj6, iD.length), fW
	}, this.mW = function(mO) {
		return aj3.push(mO), aj3.length - 1
	}, this.get = function(aC) {
		return aj3[aC]
	}, this.mR = function() {
		return aj3
	}, this.aj8 = function(aik, aif) {
		return null
	}
}

function af2() {
	this.e3 = function(player, o3, rz) {
		player = bQ.ls.o5(player, o3);
		return player < 0 || !this.aj9(player) || (o3 = 7 & rz, !bP.jQ(rz = rz >> 3)) || 3 < o3 && 7 != o3 || (bR.gM[1] = o3, !bQ.n9.sx(rz)) || (o3 = bP.fa(this.afj(player)), !ad.iz(o3)) || ad.fS(o3) !== ad.fS(bP.fa(rz)) ? -1 : player
	}, this.t4 = function(player, n5, rz) {
		var ly = bQ.z,
			fW = rz >> 3,
			rz = 7 & rz,
			ait = this.afj(n5);
		return !!bQ.lq.aij(ly.n8[n5], ait, fW) && (ly.mv[n5] = bR.h[0], ly.n7[n5] = 0, ly.afk[n5] = 0, ly.afl[n5] = ly.n8[n5], ly.mu[n5] = rz, ly.agQ[n5] = bQ.ls.aha(fW, rz), bQ.my.ahv(player, fW, rz, ly.mw[n5], ly.aAn[n5]), bQ.af4.show(player,
			ly.mw[n5]), !0)
	}, this.t1 = function(player, o3, jL) {
		jL = Math.min(jL, 1023) + 1;
		return !!this.s7(player, o3, jL) && (bQ.z.agP[bR.gM[2]] = jL, !0)
	}, this.s7 = function(player, o3, aP8) {
		return !!bD.h6.hx(player) && !((player = bQ.ls.o5(player, o3)) < 0 || bQ.z.agP[player] === aP8 || (bR.gM[2] = player, 0))
	}, this.aj9 = function(n5) {
		n5 = bQ.z.mu[n5] % 64;
		return n5 < 4 || 7 == n5
	}, this.afj = function(n5) {
		var fW = bP.jT(bQ.z.n8[n5]);
		if (!ad.iz(bP.fa(fW)))
			for (var iy = bP.ir, aC = 0; aC < 8; aC++)
				if (ad.iz(bP.fa(fW + iy[aC]))) return fW + iy[aC];
		return fW
	}
}

function aez() {
	this.ep = function(player, o3) {
		return !!bQ.s6.s7(player, o3, 0) && !(bQ.z.agP[bR.gM[2]] = 0)
	}
}

function af3() {
	var ajB = -1;
	this.dv = function() {
		ajB = -1
	}, this.agf = function() {
		var player;
		return -1 === ajB ? -1 : (player = aE.fU, !bD.h6.hx(player) || (player = bQ.ls.o5(player, ajB)) < 0 || !bQ.s6.aj9(player) ? ajB = -1 : player)
	}, this.click = function(mI, mJ, fW, a5z) {
		var age;
		return aE.ht || aE.hu || !bD.h6.hw(1) || !bD.h6.hx(aE.fU) ? !(ajB = -1) : -1 === (age = this.agf()) ? -1 !== (mI = function(mI, mJ) {
			for (var player = aE.fU, ly = bQ.z, w1 = player << 3, w2 = w1 + ly.l7[player], ajD = bP.j6(mI), ajE = bP.j9(mJ), ahX = 0, aXb = -1, aC = w1; aC < w2; aC++) {
				var j5, j8, n5 = ly.aC4[aC];
				bQ.s6.aj9(n5) && (j5 = ajD - bP.j7(ly.n8[n5]), j8 = ajE - bP.jA(ly.n8[n5]), j5 = j5 * j5 + j8 * j8, j8 = bQ.a9c.ahY(ly.aAn[n5]), j5 <= j8 * j8) && (-1 === aXb || j5 < ahX) && (ahX = j5, aXb = n5)
			}
			return aXb
		}(mI, mJ)) && (ajB = bQ.z.mw[mI], !0) : (function(n5, fW) {
			var player = aE.fU,
				ajA = bP.fa(bQ.s6.afj(n5)),
				ajA = ad.fS(ajA);
			bQ.iL.ajF(player, fW, ajA) ? bQ.t3.has(player) ? (fW = (bR.gM[7] << 3) + bR.gM[6], bQ.s6.e3(player, bQ.z.mw[n5], fW) < 0 ? bo.t0.ajG() : bB.iB.s9(bQ.z.mw[n5], fW)) : bo.t0.ajH() : bo.t0.ajG()
		}(age, fW), a5z || (ajB = -1), !0)
	}, this.ahY = function(iR) {
		var t8 = bQ.t8,
			iR = 13 * (.9 + .1 * Math.log10(Math.max(iR, 1))),
			aGT = bD.ta.w6(t8.agE, 1.7),
			aGT = bP.jO(aGT),
			iR = Math.min(t8.agD * iR, Math.max(t8.agC * iR, aGT));
		return bM.u3() && (iR *= t8.agF), iR
	}
}

function ael() {
	var a2Z = 32,
		a2Y = new Array(2);

	function a6r(eu) {
		var fr, ft, fW, j8, j5, ig = a2Z,
			a6q = bD.ta.a6r(ig, ig),
			im = bD.ta.getContext(a6q, !0),
			ij = bD.ta.getImageData(im, ig, ig),
			a2T = ij.data,
			ly = (ig >> 1) - .5,
			lz = Math.sqrt(ly * ly);
		for (a2T.fill(255), ft = 0; ft < ig; ft++)
			for (fr = 0; fr < ig; fr++) j5 = fr - ly, j8 = ft - ly, fW = 4 * (ft * ig + fr), j5 = 714 * (lz - Math.sqrt(j5 * j5 + j8 * j8)) / lz, a2T[2 + fW] = eu, a2T[3 + fW] = 255 < j5 ? 0 : j5;
		return im.putImageData(ij, 0, 0), a6q
	}
	this.ajI = -1, this.dv = function() {
		this.ajI = -1, a2Y[0] || (a2Y[0] = a6r(255), a2Y[1] = a6r(0))
	}, this.ajJ = function(im, fO, fr, ft, eS, aC) {
		bD.h6.hx(aE.fU) && (im.setTransform(fO *= 4 / 3 * .625, 0, 0, fO, fr - (eS *= 4 / 3), ft - eS), im.drawImage(a2Y[+(bQ.z.mw[aC] === this.ajI)], 0, 0))
	}
}

function aeu() {
	var ajK = -1;

	function ajL(player, aco, ahn) {
		if (ad.iz(bP.fa(aco))) return function(player, aco, ahn) {
			var id = ad.fS(bP.fa(aco));
			return !!ajP(player, id, ahn) && (bR.gM[6] = 7, bR.gM[7] = aco, !0)
		}(player, aco, ahn);
		(ajK = bQ.ls.ahZ(bP.fa(aco))) === player && -1 === ahn && (ajK = -1);
		for (var acp = bP.is(), ajN = [];;) {
			var aiu = function(aco, acp, ajN, player) {
				for (var i0 = bP.fs(aco), i2 = bP.fu(aco), acr = bV.fv - 2, aDd = bV.fw - 2, acs = -1, fn = 0; fn < acp; fn++) {
					var aDc = Math.max(i0 - fn, 1),
						aRx = Math.max(i2 - fn, 1),
						a1k = Math.min(i0 + fn, acr),
						a1j = Math.min(i2 + fn, aDd),
						jC = act(i0, a1k - i0, i2 - fn, ajN, aDd, 1, player),
						jD = act(i0 - 1, i0 - aDc - 1, i2 - fn, ajN, aDd, -1, player),
						a1k = act(i0, a1k - i0, i2 + fn, ajN, aDd, 1, player),
						aDc = act(i0 - 1, i0 - aDc - 1, i2 + fn, ajN, aDd, -1, player),
						acw = acx(i2, a1j - i2 - 1, i0 - fn, ajN, acr, 1, player),
						acy = acx(i2 - 1, i2 - aRx - 2, i0 - fn, ajN, acr, -1, player),
						a1j = acx(i2, a1j - i2 - 1, i0 + fn, ajN, acr, 1, player),
						aRx = acx(i2 - 1, i2 - aRx - 2, i0 + fn, ajN, acr, -1, player);
					if (acs = ad1(acs, jC, aco), acs = ad1(acs, jD, aco), acs = ad1(acs, a1k, aco), acs = ad1(acs, aDc, aco), acs = ad1(acs, acw, aco), acs = ad1(acs, acy, aco), acs = ad1(acs, a1j, aco), 0 <= (acs = ad1(acs, aRx, aco)) && fn *
						fn >= bP.jE(acs, aco)) return acs
				}
				return -1
			}(aco, acp, ajN, player);
			if (-1 === aiu) break;
			var id = ad.fS(bP.fa(aiu));
			if (ajP(player, id, ahn)) return !! function(player, aiu, aco) {
				for (var iZ = bP.jZ(aiu, aco), aC = 0; aC < 4; aC++) {
					var fW = bP.jX(aiu, iZ);
					if (ajS(bP.fa(fW), player)) return bR.gM[6] = iZ, 1;
					iZ = (iZ + 1) % 4
				}
				return
			}(player, aiu, aco) && (bR.gM[7] = aiu, !0);
			ajN.push(id)
		}
		return !1
	}

	function ajP(player, id, ahn) {
		return -1 === ahn ? bQ.ls.ahP(player, id) : id === ahn
	}

	function act(fr, fk, ft, ajN, aDd, gA, player) {
		if (!(ft < 1 || aDd < ft))
			for (var aC = 0; aC <= fk; aC++) {
				var fO = bP.jP(fr, ft);
				if (bQ.ls.afn(fO) && !bD.th.has(ajN, ad.fS(fO)) && ajR(fO, player)) return fO >> 2;
				fr += gA
			}
		return -1
	}

	function acx(ft, fk, fr, ajN, acr, gA, player) {
		if (!(fr < 1 || acr < fr)) {
			fk = Math.max(fk, 0);
			for (var aC = 0; aC <= fk; aC++) {
				var fO = bP.jP(fr, ft);
				if (bQ.ls.afn(fO) && !bD.th.has(ajN, ad.fS(fO)) && ajR(fO, player)) return fO >> 2;
				ft += gA
			}
		}
		return -1
	}

	function ad1(jC, jD, aco) {
		return -1 !== jD && (-1 === jC || bP.jE(jD, aco) < bP.jE(jC, aco)) ? jD : jC
	}

	function ajR(fO, player) {
		for (var iy = bP.iq, aC = 0; aC < 4; aC++)
			if (ajS(fO + iy[aC], player)) return 1
	}

	function ajS(fO, player) {
		return -1 === ajK ? ad.aN7(fO, player) : bQ.ls.ahZ(fO) === ajK
	}
	this.iM = function(player, aco) {
		return !!bQ.n9.nA(player) && ajL(player, aco, -1)
	}, this.ajF = ajL
}

function dy() {
	this.aaB = [L(560), L(561), L(562), L(563), L(564), L(565), L(566), L(567), L(568), L(569), L(570), L(571), L(572), L(573), L(574), L(575)];
	var ajT = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aG7 = new Array(ajT.length), this.dv = function() {
		var h = bm.buffer.data[155].value.split(";"),
			ly = h.length;
		if (function() {
				for (var fk = ajT.length, aC = 0; aC < fk; aC++) ba.aG7[aC] = ajT[aC]
			}(), !(ly > ajT.length))
			for (var aC = 0; aC < ly; aC++) h[aC].length && (this.aG7[aC] = h[aC])
	}, this.aaD = function(eT, code) {
		for (var aG7 = this.aG7, ajV = ajT, pV = (aG7[eT] = code, ""), fk = aG7.length, ajW = [], aC = 0; aC < fk; aC++) ajW.push(aG7[aC] === ajV[aC] ? "" : aG7[aC]);
		fk--;
		for (aC = 0; aC < fk; aC++) pV += ajW[aC] + ";";
		bm.rt.q0(155, pV += ajW[fk])
	}, this.aaA = function() {
		bm.rt.q0(155, ""), this.dv()
	}, this.eu = function(code, eT) {
		return code === this.aG7[eT] || code === this.aG7[eT + 1]
	}
}

function dk() {
	var ajX = new Array(1),
		ajY = new Array(1),
		ajZ = 20,
		ei = 0,
		aja = !1;

	function ajc() {
		ajZ++, bt.play()
	}
	this.dv = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				ajY[aC] = 0, ajX[aC] = document.createElement("audio"), ajX[aC].src = src, ajX[aC].setAttribute("preload", "auto"), ajX[aC].setAttribute("controls", "none"), ajX[aC].style.display = "none", ajX[aC].onpause = function() {
					ajY[aC] = 1
				}, ajX[aC].oncanplaythrough = function() {
					ajY[aC] = 0 === ajY[aC] ? 1 : ajY[aC]
				}, document.body.appendChild(ajX[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aja = !0
		}
	}, this.y9 = function() {
		if (aja) {
			aja = !1;
			for (var aC = 0; 0 <= aC; aC--) ajX[aC].onpause = null, ajX[aC].oncanplaythrough = null, u.removeChild(document.body, ajX[aC]), ajX[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bt.play()
	}), this.play = function() {
		if (aja) {
			var el = performance.now();
			if (ei + 66 < el)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === ajY[aC]) return ei = el, ajY[aC] = 2, void ajX[aC].play();
			0 < ajZ && (ajZ--, setTimeout(ajc, 66))
		}
	}
}

function cj() {
	this.aCd = function() {
		var ajf;
		return !(am.lZ < 3 || ah.hY[me[0]] >= aE.kn >> 1) && (aE.ic ? 9 !== aE.lL && (ajf = af.aPD(), !(2 * af.aPE(bk.lc()) >= ajf)) : function() {
			if (8 === aE.lL) return !1;
			var ajf = af.aPD();
			if (2 * ah.hm[me[0]] >= ajf) return !1;
			return !0
		}())
	}
}

function cJ() {
	this.dv = function() {
		if (0 === aE.data.sResourcesType) {
			for (var ai4 = aE.l3, hm = ah.hm, aC = 0; aC < ai4; aC++) hm[aC] = 512;
			var ai5 = aE.a12,
				lG = aF.lG,
				iR = aF.iR;
			for (aC = ai4; aC < ai5; aC++) hm[aC] = lG[iR[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fk = aE.a12, hm = ah.hm, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fk; aC++) hm[aC] = sResourcesValue
		} : function() {
			for (var fk = aE.a12, hm = ah.hm, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fk; aC++) hm[aC] = sResourcesData[aC]
		})();
		bg.nb[8] = ah.hm[aE.fU]
	}
}

function da() {
	var aJS = 501,
		ajn = (this.ajk = new Uint32Array(aJS), this.t6 = new Uint32Array(aJS), this.aFm = new Uint16Array(aJS), this.ajl = 0, this.ajm = 0, 1),
		yR = 0;

	function ajq(self) {
		self.max.fill(0)
	}

	function ajs(self, aC) {
		self.max[0] = Math.max(self.ajk[aC], self.max[0]), self.max[1] = Math.max(self.t6[aC], self.max[1]), self.max[2] = Math.max(self.aFm[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.ajo = 0, this.nb = new Array(21), this.ajp = null, this.dw = function() {
		this.ajp = [L(576), L(577), L(578), L(579), L(580), L(581), L(582), L(583), L(401), L(402), L(584), L(585), L(586), L(587), "", L(588), L(589), L(590), L(359), L(591), L(592)]
	}, this.dv = function() {
		this.ajl = 0, this.ajm = 0, ajn = 1, this.ajo = 0, yR = 0, ajq(this), this.nb.fill(0)
	}, this.aaL = function() {
		return 2 <= this.ajl && !this.ajm
	}, this.aAk = function() {
		0 !== bi.l0() && (this.ajm = 1, bh.iU) && bh.uZ()
	}, this.sv = function(player, jL) {
		bD.h6.a7V(player) && (this.nb[0] += jL + 1, this.nb[1]++, this.nb[12] += bR.gH[1])
	}, this.sQ = function(player, rw) {
		__fx.donationsTracker.logDonation(player, rw, bR.gH[0], aX.a9C());
		player === aE.fU && (aO.sQ(bR.gH[0], bR.gH[1], rw), this.nb[12] += bR.gH[1], this.nb[16] += bR.gH[0]), rw === aE.fU && (aO.aB0(bR.gH[0], player), this.nb[10] += bR.gH[0])
	}, this.sz = function(player) {
		bD.h6.a7V(player) && (this.nb[2]++, this.nb[12] += bR.gH[1])
	}, this.tE = function(player) {
		bD.h6.a7V(player) && (this.nb[19]++, this.nb[12] += bR.gH[1])
	}, this.ahy = function(player) {
		bD.h6.a7V(player) && this.nb[20]++
	}, this.hA = function(player, a8H, eT) {
		bD.h6.a7V(player) && (this.nb[eT] += a8H)
	}, this.ep = function() {
		var self;
		this.ajo || 0 < yR-- || ((self = this).ajk[self.ajl] = ah.hY[aE.fU], self.t6[self.ajl] = ah.hm[aE.fU], self.aFm[self.ajl] = af.aFn(aE.fU), ajs(self, self.ajl), self.ajl++, self.ajl === aJS && function(self) {
			ajq(self), ajs(self, 0), self.ajl = 1 + bO.gB(aJS, 2);
			for (var aC = 1; aC < self.ajl; aC++) self.ajk[aC] = self.ajk[2 * aC], self.t6[aC] = self.t6[2 * aC], self.aFm[aC] = self.aFm[2 * aC], ajs(self, aC);
			ajn *= 2
		}(self), yR = ajn - 1, bh.nS(), 0 === ah.nf[aE.fU] && (self.ajo = bi.l0()))
	}
}

function db() {
	this.j = 0, this.k = 0, this.vo = 0, this.vp = 0, this.aju = 0, this.ajv = 0, this.aCr = 0, this.wU = 0;
	var ajx = this.ajw = 0;
	this.ajy = 0, this.ajz = 0, this.ak0 = 0, this.aCC = 0, this.eT = 0, this.aFN = null, this.iU = !1, this.ak1 = -1, this.ak2 = !1, this.ak3 = [0, 0], this.dw = function() {
		this.aFN = [L(593), L(135, 0, "Balance"), L(134, 0, "Interest"), L(594)]
	}, this.dv = function() {
		this.iU = !1, this.ak1 = -1, this.ak2 = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fn = a1.a2.iu() && i.j < i.k ? 1 : a1.a2.iu() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fn * this.j), this.j -= a1.a2.iu() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.aCC = Math.floor(this.k / 150), this.aCC = Math.max(this.aCC, 1.5), this.vo = Math.floor(1 + .02 * this
			.j), this.vp = Math.floor(1 + .04 * this.j), this.aCr = this.vp, ajx = Math.floor(.75 * this.aCr), this.wU = Math.floor(1 + .075 * this.j), this.ajy = Math.floor(1 + .1125 * this.j), this.ajz = Math.floor(this.j * (a1.a2.iu() ? .03 :
				.029)), this.ajz = Math.max(this.ajz, 4), this.ak0 = Math.floor(.035 * this.j), this.ak0 = Math.max(this.ak0, 4), this.ajw = this.k - 2 * this.aCr - this.wU - this.ajy, this.iU && this.ak4()
	}, this.hy = function(mI, mJ) {
		var a15, a14;
		return !!this.iU && (a14 = mI, a15 = mJ, mI -= bO.gB(i.j - this.j, 2), mJ -= bO.gB(i.k - this.k, 2), mI < 0 || mJ < 0 || mI >= this.j || mJ >= this.k || mI >= this.j - this.ajy && mJ < this.ajy ? -1 !== aN.hy(a14, a15) || bF.hy(a14,
			a15) || this.uZ() : mJ < this.ajy || (mJ < this.k - this.wU ? (this.ak2 = !0, this.ak1 = (mI - 2 * this.vo - this.aju) / this.ajv, 3 !== this.eT && (bi.e2 = !0)) : (a14 = (a14 = Math.floor(mI / (this.j / this.aFN.length))) < 0 ?
				0 : a14 >= this.aFN.length ? this.aFN.length - 1 : a14) !== this.eT && (this.eT = a14, this.ak4(), bi.e2 = !0)), !0)
	}, this.a5W = function(mI, mJ) {
		return this.ak3[0] = mI, this.ak3[1] = mJ, !(!this.iU || !this.ak2 || (mI -= bO.gB(i.j - this.j, 2), mJ = this.ak1, this.ak1 = (mI - 2 * this.vo - this.aju) / this.ajv, (0 <= this.ak1 && this.ak1 <= 1 || 0 <= mJ && mJ <= 1) && (bi.e2 = !
			0), 0))
	}, this.a5v = function() {
		this.ak2 && (this.ak2 = !1)
	}, this.a67 = function() {
		this.iU ? this.uZ() : this.show()
	}, this.show = function() {
		bg.aaL() && (this.iU = !0, this.ak4())
	}, this.uZ = function() {
		this.iU = !1, this.ak1 = -1, bi.e2 = !0
	}, this.ak4 = function() {
		this.eT < 2 ? this.aju = aR.measureText(bD.pZ.a3G(bg.max[this.eT]), bD.ta.v9(0, this.ajz)) : 2 === this.eT && (this.aju = aR.measureText(bD.pZ.a8A(6, 2), bD.ta.v9(0, this.ajz))), this.ajv = this.j - 2 * this.vo - this.aju - this.vp
	}, this.nS = function() {
		this.iU && this.ak4()
	}, this.z6 = function() {
		this.iU && this.aD8()
	}, this.aD8 = function() {
		var fr = bO.gB(i.j - this.j, 2),
			ft = bO.gB(i.k - this.k, 2),
			fxSmooth = (z7.setTransform(1, 0, 0, 1, fr, ft), __fx.utils.clipRounded(z7, 0, 0, this.j, this.k, .15 * this.ajy));
		z7.fillStyle = bE.qK, z7.fillRect(0, this.ajy, this.j, this.k - this.ajy), this.ak5(), this.aZ0(), fxSmooth ? __fx.utils.strokeRounded(z7, 0, 0, this.j, this.k, z7.lineWidth, .15 * this.ajy) : z7.strokeRect(0, 0, this.j, this.k), bD.ta
			.textAlign(z7, 2), z7.font = bD.ta.v9(0, this.ajz), 0 === this.eT ? this.ak6(bg.ajk, fr, ft) : 1 === this.eT ? this.ak6(bg.t6, fr, ft) : 2 === this.eT ? this.ak7(fr, ft) : 3 === this.eT && (this.ak8(fr, ft), this.ak9(fr, ft)), aN.aA4(
				Math.floor(fr + this.j - .725 * this.ajy), Math.floor(ft + .275 * this.ajy), Math.floor(.45 * this.ajy)), fxSmooth && z7.restore(), z7.setTransform(1, 0, 0, 1, 0, 0)
	}, this.ak5 = function() {
		var aC, el;
		for (z7.lineWidth = this.aCC, bD.ta.textBaseline(z7, 1), bD.ta.textAlign(z7, 1), z7.strokeStyle = bE.qN, z7.font = bD.ta.v9(1, this.ak0), el = this.j / this.aFN.length, z7.fillStyle = bE.qj, z7.fillRect(this.eT * el, this.k - this.wU, el,
				this.wU), z7.fillStyle = bE.qN, z7.fillStyle = __fx.utils.lineColor(bE.qN), z7.fillRect(0, this.k - this.wU - .5 * this.aCC, this.j, this.aCC), aC = 1; aC <= 3; aC++) z7.fillRect(aC * el, this.k - this.wU, this.aCC, this.wU);
		for (z7.fillStyle = bE.qN, aC = this.aFN.length - 1; 0 <= aC; aC--) z7.fillText(bD.p3.a75(this.aFN[aC], 0, .9 * el), (aC + .5) * el, this.k - .46 * this.wU)
	}, this.aZ0 = function() {
		z7.fillStyle = bE.rB, z7.fillRect(0, 0, this.j, this.ajy), z7.fillStyle = bE.qN, z7.fillStyle = __fx.utils.lineColor(bE.qN), z7.fillRect(0, this.ajy - .5 * this.aCC, this.j, this.aCC), z7.fillStyle = bE.qN, z7.font = bD.ta.v9(1, .39 *
			this.ajy), z7.fillText(bD.p3.a75(L(595), 0, .8 * this.j), Math.floor(this.j / 2), Math.floor(.55 * this.ajy))
	}, this.ak6 = function(h, fr, ft) {
		var ly = bg.max[this.eT],
			a6P = (z7.setTransform(1, 0, 0, 1, fr + 2 * this.vo + this.aju, ft + this.aCr + this.ajy), z7.lineWidth = 2, this.ajw / Math.sqrt(ly));
		z7.beginPath(), z7.moveTo(this.ajv, this.ajw - a6P * Math.sqrt(h[bg.ajl - 1]));
		for (var aC = bg.ajl - 2; 0 <= aC; aC--) z7.lineTo(aC * this.ajv / (bg.ajl - 1), this.ajw - a6P * Math.sqrt(h[aC]));
		z7.stroke();
		fr = this.aA4(h, a6P, .5);
		fr < .95 && z7.fillText(bD.pZ.a3G(ly), -this.vo, 0), .05 < Math.abs(fr - .5) && z7.fillText(bD.pZ.a3G(Math.floor(ly / 4)), -this.vo, Math.floor(this.ajw / 2)), .05 < fr && z7.fillText("0", -this.vo, this.ajw)
	}, this.ak7 = function(fr, ft) {
		z7.setTransform(1, 0, 0, 1, fr + 2 * this.vo + this.aju, ft + this.aCr + this.ajy), z7.lineWidth = 2;
		var a6P = this.ajw / Math.max(bg.max[this.eT], 1);
		z7.beginPath(), z7.moveTo(this.ajv, this.ajw - a6P * bg.aFm[bg.ajl - 1]);
		for (var aC = bg.ajl - 2; 0 <= aC; aC--) z7.lineTo(aC * this.ajv / (bg.ajl - 1), this.ajw - a6P * bg.aFm[aC]);
		z7.stroke();
		fr = this.aA4(bg.aFm, a6P, 1), ft = bg.max[this.eT] / 100;
		fr < .95 && z7.fillText(bD.pZ.a8A(ft, 2), -this.vo, 0), .05 < Math.abs(fr - .5) && z7.fillText(bD.pZ.a8A(ft / 2, 2), -this.vo, Math.floor(this.ajw / 2)), .05 < fr && z7.fillText(bD.pZ.a8A(0, 2), -this.vo, this.ajw)
	}, this.ak8 = function(fr, ft) {
		z7.setTransform(1, 0, 0, 1, fr + .34 * this.j, ft + 2 * ajx + this.ajy), bD.ta.textAlign(z7, 2);
		for (var aF5 = this.k - 4 * ajx - this.wU - this.ajy, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) z7.fillText(bD.p3.a75(bg.ajp[h[aC]], 0, .31 * this.j), 0, aC * aF5 / 9);
		var gC = bg.nb;
		for (z7.setTransform(1, 0, 0, 1, fr + .39 * this.j, ft + 2 * ajx + this.ajy), bD.ta.textAlign(z7, 0), z7.fillText(bD.pZ.a8A(100 * gC[0] / (1024 * Math.max(gC[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) z7.fillText(gC[h[aC]].toString(), 0,
			aC * aF5 / 9);
		z7.fillText(bD.pZ.a8A(100 * (1 - ah.hY[aE.fU] / gC[7]), 0), 0, aF5)
	}, this.ak9 = function(fr, ft) {
		z7.setTransform(1, 0, 0, 1, fr + .79 * this.j, ft + 2 * ajx + this.ajy), bD.ta.textAlign(z7, 2);
		var aC, aF5 = this.k - 4 * ajx - this.wU - this.ajy;
		for (z7.fillStyle = bE.qe, aC = 2; 0 <= aC; aC--) z7.fillText(bD.p3.a75(bg.ajp[aC + 8], 0, .31 * this.j), 0, aC * aF5 / 9);
		z7.fillText(bD.p3.a75(bg.ajp[18], 0, .31 * this.j), 0, 3 * aF5 / 9), z7.fillStyle = bE.qd, z7.fillText(bD.p3.a75(bg.ajp[11], 0, .31 * this.j), 0, 4 * aF5 / 9), z7.fillStyle = bE.qy, z7.fillText(bD.p3.a75(bg.ajp[13], 0, .31 * this.j), 0,
				5 * aF5 / 9), z7.fillText(bD.p3.a75(bg.ajp[15], 0, .31 * this.j), 0, 6 * aF5 / 9), z7.fillText(bD.p3.a75(bg.ajp[16], 0, .31 * this.j), 0, 7 * aF5 / 9), z7.fillText(bD.p3.a75(bg.ajp[12], 0, .31 * this.j), 0, 8 * aF5 / 9), z7
			.fillStyle = bE.qx, z7.fillText(bD.p3.a75(bg.ajp[17], 0, .31 * this.j), 0, aF5), z7.fillStyle = bE.qe;
		var gC = bg.nb,
			aKE = gC[8] + gC[9] + gC[10] + gC[18],
			aKE = bD.pZ.a3G(aKE),
			aXg = z7.measureText(aKE).width,
			fr = (z7.setTransform(1, 0, 0, 1, fr + .83 * this.j + aXg, ft + 2 * ajx + this.ajy), z7.fillText(bD.pZ.a3G(gC[8]), 0, 0), z7.fillText(bD.pZ.a3G(gC[9]), 0, aF5 / 9), z7.fillText(bD.pZ.a3G(gC[10]), 0, 2 * aF5 / 9), z7.fillText(bD.pZ
				.a3G(gC[18]), 0, 3 * aF5 / 9), z7.fillStyle = bE.qd, z7.fillText(aKE, 0, 4 * aF5 / 9), z7.fillStyle = bE.qy, z7.fillText(bD.pZ.a3G(gC[13]), 0, 5 * aF5 / 9), z7.fillText(bD.pZ.a3G(gC[15]), 0, 6 * aF5 / 9), z7.fillText(bD.pZ
				.a3G(gC[16]), 0, 7 * aF5 / 9), z7.fillText(bD.pZ.a3G(gC[12]), 0, 8 * aF5 / 9), gC[12] + gC[13] + gC[15] + gC[16]);
		z7.fillStyle = bE.qx, z7.fillText(bD.pZ.a3G(fr), 0, aF5), z7.fillStyle = bE.qN
	}, this.aA4 = function(h, a6P, aDl) {
		var aC, e, gT;
		return this.ak1 < 0 || 1 < this.ak1 ? .25 : (aC = this.ak1 * (bg.ajl - 1), gT = h[e = Math.floor(aC)], gT += (aC - e) * (h[e < bg.ajl - 1 ? e + 1 : e] - gT), z7.strokeStyle = bE.qQ, .04 < this.ak1 && this.akB(0, this.ajw - a6P * Math.pow(
				gT, aDl), aC * this.ajv / (bg.ajl - 1), this.ajw - a6P * Math.pow(gT, aDl)), .04 < gT / bg.max[this.eT] && this.akB(aC * this.ajv / (bg.ajl - 1), this.ajw, aC * this.ajv / (bg.ajl - 1), this.ajw - a6P * Math.pow(gT, aDl)), z7
			.fillStyle = bE.r0, z7.beginPath(), z7.arc(aC * this.ajv / (bg.ajl - 1), this.ajw - a6P * Math.pow(gT, aDl), Math.max(2, .014 * this.k), 0, 2 * Math.PI), z7.fill(), h = this.ak1 * bi.aFo, h = 0 === ah.nf[aE.fU] ? Math.floor(h * bg
				.ajo) : Math.floor(h * bi.l0()), z7.fillStyle = bE.qN, z7.fillText(1 === aDl ? bD.pZ.a8A(gT / 100, 2) : bD.pZ.a3G(Math.floor(gT)), -this.vo, this.ajw - a6P * Math.pow(gT, aDl)), bD.ta.textAlign(z7, 1), z7.fillText(aX.aFb(h),
				aC * this.ajv / (bg.ajl - 1), this.ajw + this.ajz - (a1.a2.iu() ? 2 : 0) - this.aCC), bD.ta.textAlign(z7, 2), a6P * Math.pow(gT, aDl) / this.ajw)
	}, this.akB = function(o6, o7, oJ, oK) {
		z7.beginPath(), z7.moveTo(o6, o7), z7.lineTo(oJ, oK), z7.stroke()
	}
}

function c7() {
	this.akC = "https://territorial.io/changelog", this.aaM = "https://territorial.io/terms", this.aaN = "https://territorial.io/privacy", this.akD = "https://territorial.io/tutorial", this.akE = "https://territorial.io/players", this.akF =
		"https://territorial.io/clans", this.akG = "https://territorial.io/clan-results", this.aWp = "https://patreon.com/c/territorial", this.aHD = "https://play.google.com/store/apps/details?id=territorial.io", this.a55 =
		"https://apps.apple.com/app/id1581110913", this.aHE = "https://discord.gg/pthqvpTXmh", this.aHF = "https://www.instagram.com/davidtschacher/", this.a2o =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dJ() {
	this.z = new akH, this.a25 = new akI, this.dv = function() {
		this.z.dv()
	}, this.ep = function() {
		0 !== this.z.xB && this.z.xB--
	}
}

function akI() {
	this.z6 = function() {
		if (0 !== bS.z.xB && (z7.globalAlpha = Math.min(bS.z.xB / 580, 1), z7.drawImage(bS.z.akL, 1 + aT.a23(), 1 + aT.a24()), z7.globalAlpha = 1, aE.i9)) {
			for (var o6 = jM / iw, o7 = jN / iw, oJ = (i.j + jM) / iw, oK = (i.k + jN) / iw, hJ = bS.z.akM * iw, akN = bS.z.akN, aC = aE.l3 - 1; 0 <= aC; aC--) ! function(aC, hJ, o6, o7, oJ, oK, akN) {
				var highlight;
				0 === ah.nf[aC] || 0 === ah.hY[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (hJ *= 2), oJ = i.j * ((ah.jb[aC] + ah.jc[aC] + 1) / 2 - o6) / (oJ - o6) - .5 * hJ, o6 = i.k * ((ah.jd[
					aC] + ah.je[aC] + 1) / 2 - o7) / (oK - o7) - .5 * hJ, oJ > i.j) || o6 > i.k || oJ < -hJ || o6 < -hJ || (highlight ? z7.setTransform(2 * iw, 0, 0, 2 * iw, oJ, o6) : z7.setTransform(iw, 0, 0, iw, oJ, o6), z7.drawImage(
					akN[aE.ic ? bj.fi[aC] : 1], 0, 0))
			}(aC, hJ, o6, o7, oJ, oK, akN);
			z7.setTransform(iw, 0, 0, iw, 0, 0)
		}
	}
}

function akH() {
	this.akM = 28, this.xB = 0, this.akL = null;
	var akP = this.akN = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function akT(ig, ah7) {
		var fr, ft, fW, j5, a6q = bD.ta.a6r(ig, ig),
			im = bD.ta.getContext(a6q, !0),
			ij = bD.ta.getImageData(im, ig, ig),
			a2T = ij.data,
			ly = (ig >> 1) - .5,
			ah8 = .5 + ly;
		for (ah8 *= ah8, ft = 0; ft < ig; ft++)
			for (fr = 0; fr < ig; fr++) j5 = (j5 = fr - ly) * j5 + (j5 = ft - ly) * j5, a2T[fW = 4 * (ft * ig + fr)] = ah7[0], a2T[1 + fW] = ah7[1], a2T[2 + fW] = ah7[2], a2T[3 + fW] = (ah8 - j5) * ah7[3] / ah8;
		return im.putImageData(ij, 0, 0), a6q
	}

	function ajJ(aC, im, a6q, ig) {
		var highlight, fr, ft;
		0 !== ah.nf[aC] && 0 !== ah.hY[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (ig *= 2), fr = ah.jb[aC] + ah.jc[aC] + 1 - ig - 2 >> 1, ft = ah.jd[aC] + ah.je[aC] + 1 - ig - 2 >> 1, highlight ? im
			.drawImage(a6q[aE.ic ? 9 === aE.lL && 5 === aF.iR[aC] ? 3 : bj.fi[aC] : aC < aE.l3 ? 1 : 0], fr, ft, ig, ig) : im.drawImage(a6q[aE.ic ? 9 === aE.lL && 5 === aF.iR[aC] ? 3 : bj.fi[aC] : aC < aE.l3 ? 1 : 0], fr, ft))
	}
	this.dv = function() {
		var ut;
		this.xB = 700,
			function(ut) {
				var ig = ut.akM;
				if (ut.akN = [], akP = [], aE.ic) {
					for (var aC = 0; aC <= aE.a19; aC++) ut.akN.push(akT(ig, bj.ah0[bj.lQ[aC]])), akP.push(akT(ig >> 1, bj.ah0[bj.lQ[aC]]));
					9 === aE.lL && akP.push(akT(ig, bj.ah0[1]))
				} else ut.akN.push(akT(ig, bj.ah0[7])), ut.akN.push(akT(ig, bj.ah0[4])), akP.push(akT(ig >> 1, bj.ah0[7]))
			}(this),
			function(ut, akY) {
				var aC, akL = ut.akL,
					im = bD.ta.getContext(akL, !0),
					fk = aE.fh,
					ig = ut.akM >> 1;
				im.imageSmoothingEnabled = !1, im.setTransform(1, 0, 0, 1, 0, 0), akY && im.clearRect(0, 0, akL.width, akL.height);
				if (9 === aE.lL) {
					ig <<= 1;
					ut = b0.lU[5];
					for (aC = fk - ut; aC < fk; aC++) ajJ(aC, im, akP, ig);
					fk -= ut, ig >>= 1
				}
				for (aC = aE.l3; aC < fk; aC++) ajJ(aC, im, akP, ig)
			}(this, null !== (ut = this).akL && ut.akL.width === bV.fv - 2 && ut.akL.height === bV.fw - 2 || (ut.akL = bD.ta.a6r(bV.fv - 2, bV.fw - 2), !1)), aE.i9 || this.a8S()
	}, this.akU = akT, this.a8S = function() {
		for (var fk = aE.l3, ig = this.akM, akN = this.akN, im = bD.ta.getContext(this.akL, !0), aC = 0; aC < fk; aC++) ajJ(aC, im, akN, ig)
	}
}

function dK() {
	function akb() {
		8 === aE.lL && 1 === aE.a3x && bU.a3b.a3w()
	}

	function aka(player) {
		aE.i9 ? (al.aNS(player), am.aQz(), aE.lN && aE.sr.ep()) : b4.aHb(player)
	}
	this.sJ = function(player) {
		aO.a4B(player, player === aE.fU ? 21 : 22), aka(player), akb()
	}, this.so = function(player) {
		1 === aE.a3x && 0 !== ah.nf[player] && 2 !== ah.a7R[player] && aka(player), aE.a40--, aE.a3z--, aO.a4B(player, 4), bD.h6.hw(2) && aX.nR(!0), akb()
	}
}

function dU() {
	this.acj = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aF2 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.qN, "rgb(170,170,170)"
	], this.akc = [bE.qN, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.qN, bE.qE], this.akd = [bE.qE, bE.qN, bE.qN, bE.qN, bE.qE, bE.qE, bE.qE, bE.qE, bE.qN];
	var aR9 = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aQS = ["rgba(" + aR9[0] + ",", "rgba(" + aR9[1] + ",", "rgba(" + aR9[2] + ",", "rgba(" + aR9[3] + ",", "rgba(" + aR9[4] + ",", "rgba(" + aR9[5] + ",", "rgba(" + aR9[6] + ",", "rgba(" + aR9[7] + ",", "rgba(" + aR9[8] + ",", "rgba(" + aR9[9] +
			","
		], this.aQT = ["rgb(" + aR9[0] + ")", "rgb(" + aR9[1] + ")", "rgb(" + aR9[2] + ")", "rgb(" + aR9[3] + ")", "rgb(" + aR9[4] + ")", "rgb(" + aR9[5] + ")", "rgb(" + aR9[6] + ")", "rgb(" + aR9[7] + ")", "rgb(" + aR9[8] + ")", "rgb(" + aR9[9] +
			")"
		], this.a4K = null, this.ah0 = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aY7 = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lQ = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fi = new Uint8Array(aE.fh), this.aF3 = new Uint8Array(aE.fh), this.a1F = new Uint16Array(aE.fh), this.a1G = new Uint16Array(this.lQ.length + 1), this.a1H = new Uint16Array(this.lQ.length), this
		.dw = function() {
			this.a4K = [L(596), L(597), L(598), L(599), L(600), L(601), L(602), L(603), L(604)]
		}, this.dv = function() {
			if (this.fi.fill(0), this.aF3.fill(0), this.ake(), aE.ic) {
				if (9 === aE.lL) {
					for (var fi = bj.fi, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fi[aC] = 1;
					var fk = aE.fh;
					for (aC = aE.data.teamPlayerCount[7]; aC < fk; aC++) fi[aC] = 2;
					bj.lQ[1] = 7, bj.lQ[2] = 8
				} else aE.lN ? function() {
					var aY7 = bj.aY7,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.l3 - 1; 0 <= aC; aC--) colorsData[aC] = az.kK(262144);
					var akp = 0,
						g0 = 768,
						aY6 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fn = 0, g4 = 0; g4 < 3; g4++) fn += Math.abs(aY7[aC][g4] - aY6[g4]);
							fn < g0 && (akp = aC, g0 = fn)
						} var akq = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) akq[aC] = teamPlayerCount[aC];
					var lQ = bj.lQ,
						akr = new Uint8Array(9),
						hD = (lQ[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) akq[aC] && (akr[aC] = hD, lQ[hD++] = aC);
					var kJ = aE.l3,
						fi = bj.fi;
					akq[akp] ? (akq[akp]--, fi[0] = akr[akp]) : kJ = 0;
					var eu = 0;
					for (aC = kJ; aC < aE.a12; aC++) {
						var ia = lQ[eu];
						if (akq[ia]) akq[ia]--, fi[aC] = akr[ia];
						else if (aC--, 9 <= ++eu) return console.log("error 325")
					}
				}() : this.ep();
				! function() {
					for (var fk = aE.fh, a1F = bj.a1F, a1G = bj.a1G, a1H = bj.a1H, fi = bj.fi, lQ = bj.lQ, a18 = lQ.length, buffer = new Array(a18), aC = 0; aC < a18; aC++) buffer[aC] = [];
					for (aC = 0; aC < fk; aC++) buffer[lQ[fi[aC]]].push(aC);
					for (aC = 1; aC <= a18; aC++) a1G[aC] = a1G[aC - 1] + buffer[aC - 1].length;
					for (aC = 0; aC < a18; aC++)
						for (var hD = buffer[aC].length, ly = a1G[aC], ia = 0; ia < hD; ia++) a1F[ia + ly] = buffer[aC][ia];
					var l3 = aE.l3;
					for (aC = 0; aC < a18; aC++)
						for (hD = buffer[aC].length, ly = a1G[aC], ia = 0; ia < hD; ia++)
							if (a1F[ia + ly] >= l3) {
								a1H[aC] = ia;
								break
							}
				}(), ! function() {
					for (var fk = aE.fh, fi = bj.fi, aF3 = bj.aF3, lQ = bj.lQ, aC = 0; aC < fk; aC++) aF3[aC] = lQ[fi[aC]];
					9 === aE.lL && aF3.fill(1, fk - b0.lU[5])
				}()
			}
		}, this.ake = function() {
			for (var aC = this.lQ.length - 1; 0 <= aC; aC--) this.lQ[aC] = aC
		}, this.ep = function() {
			var a35 = new Uint8Array(aE.l3),
				a36 = new Uint8Array(aE.l3),
				akj = new Uint16Array(8),
				akk = new Uint16Array(this.lQ.length);
			this.akl(a35, a36, akj, 1), this.aMx(akj), this.akm(akk, a35, a36), this.akn(a35, a36, akk), this.ako()
		}, this.akl = function(a35, a36, akq, aks) {
			for (var g4, e, akt, fk = this.lQ.length - aks, h = new Uint16Array(fk), aY7 = this.aY7, colorsData = aE.data.colorsData, aC = aE.l3 - 1; 0 <= aC; aC--) {
				for (g4 = fk; aks <= g4; g4--) h[g4 - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aY7[g4][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aY7[g4][1]) + Math.abs(4 * (63 & colorsData[aC]) - aY7[g4][2]);
				for (akt = 768, g4 = fk - 1; 0 <= g4; g4--) h[e = (g4 + aC) % fk] < akt && (akt = h[e], a35[aC] = e);
				for (akq[a35[aC]] += 4, akt = 768, g4 = fk - 1; 0 <= g4; g4--) h[e = (g4 + aC) % fk] < akt && e !== a35[aC] && (akt = h[e], a36[aC] = e);
				akq[a36[aC]]++
			}
		}, this.aMx = function(akq) {
			for (var g4, m0, fk = this.lQ.length - 1, aC = fk; 0 <= aC; aC--) this.lQ[aC] = aC;
			for (aC = fk - 1; 0 <= aC; aC--) akq[aC]++;
			for (aC = 1; aC <= fk; aC++) {
				for (m0 = 0, g4 = 1; g4 < fk; g4++) akq[g4] > akq[m0] && (m0 = g4);
				akq[m0] = 0, this.lQ[aC] = m0 + 1
			}
		}, this.akm = function(akk, a35, a36) {
			var g4, a4j, eu, fn, e, oI, w5, aku = this.lQ.length - 1,
				u4 = new Uint16Array(aku),
				akv = [],
				akw = 0,
				a4i = [],
				akx = [];
			loop: for (var aC = 0; aC < aE.l3; aC++)
				if (null !== (a4j = bD.pZ.pn(ah.a4h[aC]))) {
					for (g4 = a4i.length - 1; 0 <= g4; g4--)
						if (a4j === a4i[g4]) {
							akx[g4].push(aC), akw = Math.max(akw, akx[g4].length);
							continue loop
						} a4i.push(a4j), akv.push(!1), akx.push([aC]), akw = Math.max(akw, 1)
				}
			for (; 2 < aE.a19 && akw > bO.gB(aE.l3, aE.a19);) aE.a19--, aE.lL--;
			for (g4 = a4i.length - 1; 0 <= g4; g4--) {
				for (fn = -1, eu = a4i.length - 1; 0 <= eu; eu--) !akv[eu] && (-1 === fn || akx[eu].length > akx[fn].length) && (fn = eu);
				for (eu = aku - 1; 0 <= eu; eu--) u4[eu] = 1;
				for (eu = akx[fn].length - 1; 0 <= eu; eu--) u4[a35[akx[fn][eu]]] += 3, u4[a36[akx[fn][eu]]]++;
				for (aC = aku - 1; 0 <= aC; aC--) {
					for (e = fn % aku, eu = aku - 1; 0 <= eu; eu--) u4[eu] > u4[e] && (e = eu);
					for (oI = -1, eu = aE.a19; 0 < eu; eu--)
						if (this.lQ[eu] === e + 1) {
							oI = eu;
							break
						} if (u4[e] = 0, -1 !== oI) {
						for (w5 = 0, eu = aE.a19; 0 < eu; eu--) akk[oI] > akk[eu] && w5++;
						if (w5 !== aE.a19 - 1) {
							for (eu = akx[fn].length - 1; 0 <= eu; eu--) akk[oI]++, this.fi[akx[fn][eu]] = oI;
							break
						}
					}
				}
				akv[fn] = !0
			}
		}, this.akn = function(a35, a36, akk) {
			for (var aC, j4, fk = this.lQ.length - 1, border = bO.gB(aE.l3, aE.a19), aky = (0 < aE.l3 % aE.a19 && border++, new Uint8Array(1 + fk)), g4 = fk; 1 <= g4; g4--) aky[this.lQ[g4]] = g4;
			for (aC = 0; aC < aE.l3; aC++) j4 = aky[a35[aC] + 1], 0 === this.fi[aC] && j4 <= aE.a19 && akk[j4] < border && (akk[j4]++, this.fi[aC] = j4);
			for (aC = 0; aC < aE.l3; aC++) j4 = aky[a36[aC] + 1], 0 === this.fi[aC] && j4 <= aE.a19 && akk[j4] < border && (akk[j4]++, this.fi[aC] = j4);
			for (g4 = aE.a19; 1 <= g4; g4--)
				for (aC = aE.l3 - 1; 0 <= aC && !(akk[g4] >= border); aC--) 0 === this.fi[aC] && (akk[g4]++, this.fi[aC] = g4)
		}, this.ako = function() {
			if (aE.a19 < 8) aE.a19++, aE.lL++, aE.a1A = 1;
			else
				for (var aC = aE.l3; aC < aE.fh; aC++) this.fi[aC] = 1 + aC % aE.a19
		}
}

function dn() {
	this.hZ = function() {
		for (var fr, ft, aC = gg - 1; 0 <= aC; aC--) fr = bO.gB(gi[aC], 4) % bV.fv, ft = bO.gB(gi[aC], 4 * bV.fv), ah.jb[gb] = Math.min(fr, ah.jb[gb]), ah.jd[gb] = Math.min(ft, ah.jd[gb]), ah.jc[gb] = Math.max(fr, ah.jc[gb]), ah.je[gb] = Math
			.max(ft, ah.je[gb])
	}, this.gu = function() {
		var fn, hI, aC, fk = ah.hC[gb].length,
			fm = ad.fm;
		loop: for (aC = fk - 1; 0 <= aC; aC--) {
			for (fn = 3; 0 <= fn; fn--)
				if (hI = ah.hC[gb][aC] + fm[fn], ad.fb(hI) || ad.hK(hI) && ad.fc(hI) !== gb) {
					ad.kF(ah.hC[gb][aC], gb);
					continue loop
				} ah.hC[gb][aC] = ah.hC[gb][fk - 1], ah.hC[gb].pop(), fk--
		}
	}, this.gv = function() {
		var player = gb,
			hQ = ah.hQ,
			hR = ah.hR,
			g9 = ah.g9,
			fk = hQ[player].length,
			fm = ad.fm;
		loop: for (var aC = fk - 1; 0 <= aC; aC--) {
			for (var aTI = !1, akz = !1, fn = 3; 0 <= fn; fn--) {
				var hI = hQ[player][aC] + fm[fn];
				if (ad.aN7(hI, player)) continue loop;
				aTI = aTI || ad.iz(hI), akz = akz || ad.aN6(hI)
			}
			aTI ? hR[player].push(hQ[player][aC]) : akz ? g9[player].push(hQ[player][aC]) : ad.a1b(hQ[player][aC], player), hQ[player][aC] = hQ[player][fk - 1], hQ[player].pop(), fk--
		}
	}, this.hO = function() {
		ah.hY[gf] -= gg
	}, this.hP = function(border) {
		for (var fk = border.length, aC = fk - 1; 0 <= aC; aC--) ad.a1w(gf, border[aC]) || (border[aC] = border[fk - 1], border.pop(), fk--)
	}, this.hS = function(border) {
		for (var fk = border.length, aC = fk - 1; 0 <= aC; aC--) !ad.a1w(gf, border[aC]) && ad.ff(border[aC]) && (border[aC] = border[fk - 1], border.pop(), fk--)
	}, this.hT = function(border) {
		for (var fn, hI, fk = border.length, fm = ad.fm, aC = fk - 1; 0 <= aC; aC--)
			for (fn = 3; 0 <= fn; fn--)
				if (hI = border[aC] + fm[fn], ad.aN7(hI, gf)) {
					ah.hQ[gf].push(border[aC]), border[aC] = border[fk - 1], border.pop(), fk--;
					break
				}
	}, this.hU = function() {
		for (var fn, hI, fm = ad.fm, aC = gg - 1; 0 <= aC; aC--)
			for (fn = 3; 0 <= fn; fn--) hI = gi[aC] + fm[fn], ad.a1z(gf, hI) && ad.aND(hI) && (ah.hQ[gf].push(hI), ad.hF(hI, gf))
	}, this.hV = function() {
		var fr, ft;
		loop: for (; ah.jd[gf] < ah.je[gf];) {
			for (fr = ah.jc[gf]; fr >= ah.jb[gf]; fr--)
				if (ad.a1w(gf, 4 * (ah.jd[gf] * bV.fv + fr))) break loop;
			ah.jd[gf]++
		}
		loop: for (; ah.jd[gf] < ah.je[gf];) {
			for (fr = ah.jc[gf]; fr >= ah.jb[gf]; fr--)
				if (ad.a1w(gf, 4 * (ah.je[gf] * bV.fv + fr))) break loop;
			ah.je[gf]--
		}
		loop: for (; ah.jb[gf] < ah.jc[gf];) {
			for (ft = ah.je[gf]; ft >= ah.jd[gf]; ft--)
				if (ad.a1w(gf, 4 * (ft * bV.fv + ah.jb[gf]))) break loop;
			ah.jb[gf]++
		}
		loop: for (; ah.jb[gf] < ah.jc[gf];) {
			for (ft = ah.je[gf]; ft >= ah.jd[gf]; ft--)
				if (ad.a1w(gf, 4 * (ft * bV.fv + ah.jc[gf]))) break loop;
			ah.jc[gf]--
		}
	}, this.fd = function(player, kC) {
		return 0 === bj.fi[player] || bj.fi[player] !== bj.fi[kC]
	}, this.iH = function(player) {
		for (var aC, hJ, fk = ah.hQ[player].length, fm = ad.fm, fn = 3; 0 <= fn; fn--)
			for (hJ = fm[fn], aC = 0; aC < fk; aC++)
				if (ad.fb(ah.hQ[player][aC] + hJ)) return !0;
		return !1
	}, this.aNO = function(player) {
		for (var aC, hJ, fk = ah.hQ[player].length, fm = ad.fm, fn = 3; 0 <= fn; fn--)
			for (hJ = fm[fn], aC = 0; aC < fk; aC++)
				if (ad.kE(ah.hQ[player][aC]) && ad.fb(ah.hQ[player][aC] + hJ)) return !0;
		return !1
	}, this.iK = function(a7X, a7Y) {
		for (var aC, el, hJ, hI, ai4 = ah.hQ[a7X].length, ai5 = ah.hQ[a7Y].length, fm = (ai5 < ai4 && (el = a7X, a7X = a7Y, a7Y = el, el = ai4, ai4 = ai5, 0), ad.fm), fn = 3; 0 <= fn; fn--)
			for (hJ = fm[fn], aC = 0; aC < ai4; aC++)
				if (hI = ah.hQ[a7X][aC] + hJ, ad.hK(hI) && ad.fc(hI) === a7Y) return !0;
		return !1
	}, this.aNP = function(a7X, a7Y) {
		for (var aC, hJ, hI, ai4 = ah.hQ[a7X].length, fm = ad.fm, fn = 3; 0 <= fn; fn--)
			for (hJ = fm[fn], aC = 0; aC < ai4; aC++)
				if (ad.kE(ah.hQ[a7X][aC]) && (hI = ah.hQ[a7X][aC] + hJ, ad.hK(hI)) && ad.fc(hI) === a7Y) return !0;
		return !1
	}
}

function dg() {
	this.t0 = new al0
}

function al0() {
	this.iN = function(player) {
		bD.h6.a7S(player) && aO.a2Q(80, L(605), 637, 0, bE.rE, bE.qK, -1, !1)
	}, this.s1 = function(player) {
		bD.h6.a7S(player) && aO.a2Q(80, L(606), 637, 0, bE.rE, bE.qK, -1, !1)
	}, this.ajG = function() {
		aO.a2Q(80, L(607), 637, 0, bE.qw, bE.qK, -1, !1)
	}, this.ajH = function() {
		aO.a2Q(80, L(608), 637, 0, bE.qw, bE.qK, -1, !1)
	}
}

function al1() {
	this.al2 = 0, this.ep = function() {
		aP.ep(), aa.ep(), i.ep(), b1.z.ep(), ay.aMS(), bX.ed.ep(), bq.xN.ep(), bi.e2 && (bi.e2 = !1, ab.z6())
	}
}

function al3() {
	this.ek = bi.ek, this.eT = 0, this.al2 = 0, this.aMQ = 0, this.aMO = null, this.al4 = 7, this.al5 = 0, this.dv = function() {
		this.aMQ = 0, this.aMO = [], this.eT = 0, this.al2 = 0
	}, this.abe = function(aD) {
		if (aE.i9) this.aFp(aD);
		else if (this.aMO.push(aD), 2 === aE.a3x) {
			for (var aC = 0; aC < this.aMO.length; aC++) bB.rn.ep(this.aMO[aC]);
			this.aMO = []
		}
	}, this.aFp = function(aD) {
		2 !== aE.a3x && (bB.rn.ep(aD), bC.ep(), aX.aFp(this.aMQ), this.aMQ === aE.a8a ? (aE.sr.ep(), this.aMQ = 0, this.eT = 0, this.al2 = 0, this.ek = bi.ek) : (this.aMQ++, ag.a8R(), ag.nR(!0), be.render()))
	}, this.ep = function() {
		i.ep(), aE.i9 ? (bi.e2 = aX.aFp(-1) || bi.e2, nT()) : (0 !== this.eT || bi.ek >= this.ek && (this.ek += bi.aFo * Math.floor(1 + (bi.ek - this.ek) / bi.aFo), 2 === aE.a3x ? nF() : this.al6(), this.eT++, 27 < bi.ek - this.al5)) && this
		.al7(), nO(), bi.e2 && (bi.e2 = !1, a20()), this.al5 = bi.ek
	}, this.al7 = function() {
		bi.e2 = !0, nQ(), this.eT = 0
	}, this.al6 = function() {
		var zv, aC;
		if (this.al2 !== 7 * this.aMQ) nJ(), be.render();
		else {
			zv = !1;
			loop: for (; this.al8() && (zv = !0, nJ(), 2 !== aE.a3x) && 0 < this.aMO.length;)
				for (aC = this.al4 - 2; 0 <= aC; aC--)
					if (nJ(), 2 === aE.a3x) break loop;
			zv ? be.render() : (nF(), be.a8U())
		}
	}, this.al8 = function() {
		return 0 < this.aMO.length && (this.aMQ++, bB.rn.ep(this.aMO[0]), this.aMO.shift(), !0)
	}
}

function al9() {
	var alA, alB, alC, aMQ, alD, eT = 0,
		ek = bi.ek;

	function alG() {
		! function() {
			if (!aE.i9) return;
			if (aE.lN) return;
			if (2 !== aE.a3x)
				if (alD % 7 != 0) alD++;
				else if (aMQ === aE.a8a) {
				if (!alJ()) return;
				aX.aFp(aMQ), aE.sr.ep()
			} else {
				if (!alJ()) return;
				alD++, aMQ++, ag.a8R(), ag.nR(!0)
			}
			return 1
		}() && alJ() && nJ()
	}

	function alH() {
		eT = 0, (aE.i9 ? (bi.e2 = aX.aFp(aMQ - (alD % 7 == 0 ? 0 : 1) + alD % 7 / 7) || bi.e2, nT) : aN.hv || !bF.a8y ? nT : (bi.e2 = !0, nQ))()
	}

	function alJ() {
		var aC, fk, alK = bC.sp.adK,
			gT = bC.sp.adL,
			gV = bC.sp.adM,
			gX = bC.sp.adN,
			alL = bC.sp.adO,
			alM = bC.sp.adP;
		if (!(alA >= alM.length)) {
			if (alM = alM[alA], alL[alA]) {
				for (fk = alB + alM, aC = alB; aC < fk; aC++) bB.rn.se(alK[aC], gT[aC], gV[aC], gX[aC]);
				alB += alM, alA++
			} else ++alC >= alM && (alA++, alC = 0);
			return __fx.replay.tick++, 1
		}
		aO.a5I("Replay file smaller than expected."), bF.a68(!1), aE.a3x = 2
	}
	this.al2 = 0, this.dv = function() {
		alD = aMQ = alC = alB = alA = 0, __fx.replay.registerHooks({
			advance: () => alG(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.e2 = !0
			},
			isEnded: () => 2 === aE.a3x,
			getTickInterval: () => bi.aFo
		})
	}, this.ep = function() {
		var aiT;
		i.ep(), __fx.replay.frame() ? nF() : bF.aD2() < 1.7 ? 0 === eT ? bi.ek >= ek && (aiT = bi.aFo / bF.aD2(), ek += aiT * Math.floor(1 + (bi.ek - ek) / aiT), 2 === aE.a3x || aN.hv || !bF.a8y ? nF() : (alG(), be.render()), eT++) : alH() :
			function() {
				var aiT;
				if (bi.ek >= ek)
					if (2 === aE.a3x || aN.hv || !bF.a8y) nF(), ek = bi.ek;
					else {
						for (aiT = bi.aFo / bF.aD2(), 16 < (bi.ek - ek) / aiT && (ek = bi.ek - 16 * aiT); bi.ek >= ek && 2 !== aE.a3x;) ek += aiT, alG();
						be.render()
					} alH()
			}(), nO(), bi.e2 && (bi.e2 = !1, a20())
	}, this.a48 = function() {
		bC.sp.adP.length - alA <= 2 || aO.a5I("Replay file larger than expected.")
	}
}

function alN() {
	var eT = 0,
		ek = bi.ek;
	this.al2 = 0, this.ep = function() {
		i.ep(), aE.i9 ? nT() : 0 === eT ? bi.ek >= ek && (ek += bi.aFo * Math.floor(1 + (bi.ek - ek) / bi.aFo), 2 === aE.a3x || aN.hv ? nF() : (nJ(), be.render()), eT++) : ((aN.hv ? nT : (bi.e2 = !0, nQ))(), eT = 0), nO(), bi.e2 && (bi.e2 = !1,
			a20())
	}
}

function dc() {
	this.a47 = null, this.e2 = !1, this.ek = 0, this.aFo = 56;
	var alO = 0;

	function alP() {
		bi.ek = alO = performance.now(), bi.a47.ep(), window.requestAnimationFrame(alP)
	}
	this.dv = function() {
		this.a8v(), window.requestAnimationFrame(alP), this.ek = performance.now()
	}, this.a8n = function() {
		aE.ht ? (this.a47 = new al9, this.a47.dv()) : aE.lN ? this.a47 = new alN : (this.a47 = new al3, this.a47.dv())
	}, this.a8v = function() {
		this.a47 = new al1, this.e2 = !0
	}, this.ep = function() {
		this.a47.al2++
	}, this.l0 = function() {
		return this.a47.al2
	}, this.abJ = function() {
		var el = performance.now();
		el < alO + 1e3 || (this.ek = el, this.a47.ep())
	}
}

function d2() {
	var aLd = 0,
		alQ = !0;
	this.ep = function() {
		var el, aBR;
		bi.ek < aLd || (aLd = bi.ek + 3e3, aE.ht) || aE.lN || bD.h6.hx(aE.fU) || (el = new Date, aBR = el.getUTCSeconds(), alQ ? aBR < 43 && (alQ = !1) : aBR < 43 || (aLd += 52e3, alQ = !0, aBR = (el.getUTCMinutes() + 2) % 60, el = aE.lL < 7 ?
			0 : 8 === aE.lL ? 2 : 9 === aE.lL ? 3 : 1, aP.aBG(el, aBR) && (aBR = el, aBR = [L(609), L(610), L(611), L(612)][aBR], aO.aAr(aBR))))
	}
}

function cw() {
	var o6, o7, oJ, oK, alS = 0,
		alT = 0;

	function alV() {
		return Math.pow(Math.pow(oJ - o6, 2) + Math.pow(oK - o7, 2), .5)
	}

	function alU(e) {
		o6 = i.l * e.touches[0].clientX, o7 = i.l * e.touches[0].clientY, oJ = i.l * e.touches[1].clientX, oK = i.l * e.touches[1].clientY
	}
	this.a5a = function(e) {
		return 1 < e.touches.length ? (alT = bi.ek, alS = 3, alU(e), aM.uZ(), !0) : (alS = 0, !1)
	}, this.a5b = function(e) {
		var aOJ, j2, j3;
		return 0 !== aE.a3x && 1 < e.touches.length && (alS = Math.max(alS - 1, 0), aI.oO() && (aOJ = alV(), alU(e), e = alV(), j2 = Math.floor((o6 + oJ) / 2), j3 = Math.floor((o7 + oK) / 2), aT.aDT(j2, j3, Math.max(.125, e) / Math.max(.125,
			aOJ)), bi.e2 = !0), !0)
	}, this.a5y = function() {
		var fr, ft;
		return !!(alS && (alS = 0, bi.ek < alT + 500)) && (fr = (o6 + oJ) / 2, ft = (o7 + oK) / 2, aM.a5s(fr, ft), aM.click(fr, ft, !0) && (bi.e2 = !0), !0)
	}
}

function dD() {
	this.size = 0, this.eT = 0, this.aD = null, this.dv = function(aD) {
		this.eT = 0, this.aD = aD, this.size = aD.length
	}, this.y9 = function() {
		this.aD = null
	}, this.sd = function(size) {
		for (var gC = 0, aD = this.aD, oO = this.eT + size - 1, aC = this.eT; aC <= oO; aC++) gC |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << oO - aC;
		return this.eT += size, this.eT > 8 * this.size && console.error("Unwrapper Overflow"), gC
	}, this.abm = function(size) {
		var g4 = size >> 1;
		return (1 << g4) * this.sd(size - g4) + this.sd(g4)
	}, this.abo = function(alW) {
		return this.size === bG.abl(alW)
	}, this.adc = function(a0o, alX, alY) {
		var hD = this.sd(a0o);
		if (!hD) return null;
		for (var a0o = Math.max(hD, alY), h = new(alX <= 8 ? Uint8Array : alX <= 16 ? Uint16Array : Uint32Array)(a0o), aC = 0; aC < hD; aC++) h[aC] = this.sd(alX);
		alY = h[hD - 1];
		return alY && h.fill(alY, hD), h
	}, this.add = function(a0o, alZ, alY) {
		var hD = this.sd(a0o);
		if (!hD) return null;
		for (var a0o = Math.max(hD, alY), h = new Array(a0o), aC = 0; aC < hD; aC++) h[aC] = this.ada(alZ);
		return h.fill(h[hD - 1], hD), h
	}, this.ada = function(a0o) {
		return bJ.a0W.a0a(this.sd(a0o))
	}, this.adb = function() {
		var a3E = this.sd(30);
		if (!(6 * a3E > 8 * this.size - this.eT)) {
			var pV = bI.fB.vl(bI.fB.vm(a3E)),
				pV = bD.pZ.a8M(pV, "_", "/");
			pV = bD.pZ.a8M(pV, "-", "+");
			for (var ala = "";
				(pV.length + ala.length) % 4;) ala += "=";
			pV = "data:image/png;base64," + pV + ala;
			var aNv = new Image;
			aNv.onload = function() {
				bC.aOs.aOt(aNv), aNv.onload = null, aNv = null
			}, aNv.src = pV
		}
	}
}

function dW() {
	this.aef = 0, this.aeg = 0, this.aeb = 0, this.aec = 0, this.aed = 0, this.aee = 0, this.aGW = [0, 0, 0, 0], this.oN = function() {
		this.aef = aT.a23(), this.aeg = aT.a24(), this.aeb = -this.aef, this.aec = -this.aeg, this.aed = i.j / iw, this.aee = i.k / iw, this.aGW[0] = Math.floor(this.aeb), this.aGW[1] = Math.floor(this.aec), this.aGW[2] = Math.floor(this.aGW[0] +
			this.aed + 1), this.aGW[3] = Math.floor(this.aGW[1] + this.aee + 1), be.aGU = !0
	}
}

function cx() {
	var aC8, ns;
	this.dv = function() {
		aC8 = 1, ns = 0
	}, this.ep = function() {
		0 < aC8 && (ns = 0 === ns ? bi.ek + 16 : ns, aC8 = (aC8 -= .001 * (bi.ek - ns)) < 0 ? 0 : aC8, ns = bi.ek, bi.e2 = !0)
	}, this.z6 = function() {
		0 < aC8 && (z7.fillStyle = "rgba(0,0,0," + aC8 + ")", z7.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eT = 0, this.aD = null, this.dv = function(aD) {
		this.eT = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(alW) {
		return this.dv(new Uint8Array(this.abl(alW))), this.aD
	}, this.y9 = function() {
		this.aD = null
	}, this.a9 = function(size, aBT) {
		for (var aD = this.aD, oO = this.eT + size - 1, aC = this.eT; aC <= oO; aC++) aD[aC >> 3] |= (aBT >> oO - aC & 1) << 7 - (7 & aC);
		this.eT += size, this.eT > 8 * this.size && console.error("Wrapper Overflow")
	}, this.abk = function(size, aBT) {
		var g4 = size >> 1,
			fn = 1 << g4;
		this.a9(size - g4, bO.gB(aBT, fn)), this.a9(g4, aBT % fn)
	}, this.ald = function(size) {
		for (var aD = this.aD, oO = this.eT + size, aC = this.eT; aC < oO; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.abl = function(alW) {
		return alW + 7 >> 3
	}, this.ale = function(h, kJ, oO, alf) {
		for (var aC = kJ; aC < oO; aC++) this.a9(alf, h[aC])
	}
}

function dC() {
	this.dv = function() {
		this.h = [], this.eT = 0
	}, this.acE = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(alg, value) {
		for (var h = this.h, oO = this.eT + alg - 1, alh = 1 + (oO >> 3); h.length < alh;) h.push(0);
		for (var aC = this.eT; aC <= oO; aC++) h[aC >> 3] |= (value >> oO - aC & 1) << 7 - (7 & aC);
		this.eT += alg
	}, this.e1 = function(h, a0o, alX) {
		var ali = bD.th.a6k(h);
		this.a9(a0o, ali);
		for (var aC = 0; aC < ali; aC++) this.a9(alX, h[aC])
	}, this.adu = function(h, a0o, alZ) {
		var ali = bD.th.a6k(h);
		this.a9(a0o, ali);
		for (var aC = 0; aC < ali; aC++) this.ads(h[aC], alZ)
	}, this.ads = function(pV, a0o) {
		var fk = pV.length;
		this.a9(a0o, fk);
		for (var aC = 0; aC < fk; aC++) this.a9(16, pV.charCodeAt(aC))
	}, this.adt = function(a6q) {
		var alj = (a6q = a6q.toDataURL()).split(",");
		if (alj.length < 2) console.log("error 266");
		else {
			a6q = bD.pZ.a8M(a6q = alj[alj.length - 1], "/", "_"), a6q = bD.pZ.a8M(a6q, "\\+", "-");
			var a6q = bD.pZ.a8M(a6q, "=", ""),
				a0j = bJ.fB.a0g(a6q),
				fk = a0j.length;
			this.a9(30, fk);
			for (var aC = 0; aC < fk; aC++) this.a9(6, a0j[aC])
		}
	}
}
a(), self.aiCommand746 = function(gC) {
	0 === gC ? c2() : 1 !== gC || !a1 || 1 !== a1.id || a1.eC < 14 || bM.gD()
}, setTimeout(c2, 1e4), window.onload = function() {
	c2()
};