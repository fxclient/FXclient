var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, by, bz, c0, c1, ga, gb, gc, gd, ge, gf, gg, gh,
	gi, gj, gk, gl, gm, iz, jP, jQ, aC6, mh, kr, a5K, yw, a1v, aGH, a8d, a8e, S = ["div", "100%", "⬅️ ", "absolute", "none", "canvas", "0.75em", "<br>", "inherit", "center", "0.8em", "rgb(", "auto", "rgba(", "hidden", "   ", "flex", "span", "1em",
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
	this.e6 = 2, this.e7 = 1774, this.e8 = 0;
	this.rVersion = 26, this.eC = "14 Nov 2026", this.eD = 0, this.dv = function() {
		this.o = "2.17.13", this.eC = this.eC + " [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.eF = 0 <= this.hostname.indexOf("github.io"), this.eG = 0 <=
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
		}(fW) : 1 === code ? function(fW) {
			bQ.iL.iM(aE.fU, fW) && bB.iB.iN(aS.iF(), bR.gM[7])
		}(fW) : 2 === code && function(fW) {
			bQ.iO.iP(aE.fU, fW) && bB.iB.iQ(aS.iF())
		}(fW))))
	}, this.iR = function() {
		if (!(aE.ht || aE.hu || aN.hv) && bD.h6.hw(1)) {
			var hI = aE.fU;
			if (bD.h6.hx(hI)) {
				var fk = ae.gr(hI);
				if (fk < 1) ! function() {
					var hI = aE.fU;
					if (bw.iH(hI)) bB.iB.iI(aS.iF(), aE.fh);
					else
						for (var fm = ad.fm, hQ = ah.hQ, fk = hQ[hI].length, ib = Math.floor(Math.random() * fk), aC = 0; aC < fk; aC++)
							for (var ic = 3; 0 <= ic; ic--) {
								var ie = hQ[hI][(aC + ib) % fk] + fm[ic];
								if (ad.hK(ie)) {
									ie = ad.fc(ie);
									if (ie !== hI && (!aE.ih || bw.fd(hI, ie))) return bB.iB.iI(aS.iF(), ie)
								}
							}
				}();
				else {
					for (var iT = 0, iU = ae.gx(hI, 0), aC = 1; aC < fk; aC++) {
						var iV = ae.gx(hI, aC);
						iV < iU && (iU = iV, iT = aC)
					}
					bB.iB.iI(aS.iF(), ae.gw(hI, iT))
				}
			}
		}
	}, this.iW = function() {
		if (!(aE.ht || aE.hu || aN.hv) && bD.h6.hx(aE.fU) && bD.h6.hw(1)) return ax.iX ? ax.iY(aE.fU) ? void bB.iB.iZ(1) : void 0 : void(ax.ia(aE.fU) && bB.iB.iW())
	}
}

function ii(ij, size, ik, il, font) {
	var aC, ip = .2,
		canvas = document.createElement("canvas"),
		iq = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = ij, canvas.height = ij, iq.font = size + font, iq.textAlign = "center", iq.textBaseline = "middle", iq.fillStyle = "red", aC = 0; aC < ik.length; aC++) iq.fillText(ik[aC], .5 * ij, .5 * ij);
	return -1 < (canvas = function(im) {
		var aC, eS, fn = im.data;
		for (aC = fn.length - 4; 0 <= aC; aC -= 4)
			if (eS = fn[aC], il <= eS) return Math.floor(aC / (4 * ij));
		return -1
	}(iq.getImageData(0, 0, ij, ij))) && (ip = (canvas - .5 * ij + .1 * size) / size), Math.max(ip, 0)
}

function dG() {
	this.is = new Int16Array(4), this.it = new Int16Array(4), this.iu = null, this.dv = function() {
		var aC;
		for (this.is[0] = -bV.fv, this.is[1] = 1, this.is[2] = bV.fv, this.is[3] = -1, this.iu = new Int16Array([-bV.fv, 1 - bV.fv, 1, bV.fv + 1, bV.fv, bV.fv - 1, -1, -bV.fv - 1]), aC = 0; aC < 4; aC++) this.it[aC] = 4 * this.is[aC]
	}, this.iv = function() {
		return bO.iw(Math.floor(.15 * (1 + .25 * a1.a2.ix()) * i.iy / iz), 4, 128)
	}, this.j0 = function(fO, id) {
		for (var j1 = this.it, aC = 0; aC < 4; aC++) {
			var fZ = fO + j1[aC];
			if (ad.j2(fZ) && ad.fS(fZ) === id) return !0
		}
		return !1
	}, this.j3 = function(player, fO) {
		return !ad.fb(fO) && player === ad.fc(fO)
	}, this.g2 = function(i0, i2, fW) {
		return (i0 -= this.fs(fW)) * i0 + (i2 -= this.fu(fW)) * i2
	}, this.j4 = function(j5, j6, j7) {
		j5 = this.j9(j5) - this.jA(j7), j6 = this.jC(j6) - this.jD(j7);
		return Math.sqrt(j5 * j5 + j6 * j6)
	}, this.jE = function(jF, jG) {
		var j8 = this.fs(jF) - this.fs(jG),
			jF = this.fu(jF) - this.fu(jG);
		return ~~Math.sqrt(j8 * j8 + jF * jF + .5)
	}, this.jH = function(jF, jG) {
		var j8 = this.fs(jF) - this.fs(jG),
			jF = this.fu(jF) - this.fu(jG);
		return j8 * j8 + jF * jF
	}, this.jI = function(jJ, jK, jL, jM) {
		return (jJ -= jL) * jJ + (jK -= jM) * jK
	}, this.jN = function(hI, jO) {
		return bO.gB(jO * ah.hm[hI], 1e3)
	}, this.j9 = function(j5) {
		return 16 * (j5 + jP) / iz
	}, this.jC = function(j6) {
		return 16 * (j6 + jQ) / iz
	}, this.jR = function(fn) {
		return 16 * fn / iz
	}, this.i1 = function(j5) {
		return Math.floor((j5 + jP) / iz)
	}, this.i3 = function(j6) {
		return Math.floor((j6 + jQ) / iz)
	}, this.i4 = function(i0, i2) {
		return 1 <= i0 && 1 <= i2 && i0 < bV.fv - 1 && i2 < bV.fw - 1
	}, this.fs = function(fW) {
		return fW % bV.fv
	}, this.fu = function(fW) {
		return bO.gB(fW, bV.fv)
	}, this.g7 = function(i0, i2) {
		return i2 * bV.fv + i0
	}, this.jS = function(i0, i2) {
		return 4 * this.g7(i0, i2)
	}, this.jT = function(fW) {
		return this.g6(this.fs(fW), this.fu(fW))
	}, this.g6 = function(i0, i2) {
		return 0 < i0 && i0 < bV.fv - 1 && 0 < i2 && i2 < bV.fw - 1
	}, this.fa = function(fW) {
		return fW << 2
	}, this.fY = function(fO) {
		return fO >> 2
	}, this.jU = function(fW) {
		return bV.fv * this.fu(fW) * 256 + (this.fs(fW) << 4)
	}, this.jV = function(fW) {
		return this.jU(fW) + 8 + (bV.fv << 7)
	}, this.jW = function(j7) {
		return bV.fv * (this.jD(j7) >> 4) + (this.jA(j7) >> 4)
	}, this.jX = function(j7) {
		j7 = this.jW(j7);
		return (this.fs(j7) >> 5) + bQ.jY.jZ * (this.fu(j7) >> 5)
	}, this.jA = function(j7) {
		return j7 % (bV.fv << 4)
	}, this.jD = function(j7) {
		return bO.gB(j7, bV.fv << 4)
	}, this.ja = function(fW, ic) {
		return fW + this.is[ic]
	}, this.jb = function(fO, ic) {
		return fO + this.it[ic]
	}, this.jc = function(jF, jG) {
		var j8 = this.fs(jG) - this.fs(jF),
			jG = this.fu(jG) - this.fu(jF);
		return Math.abs(j8) >= Math.abs(jG) ? 1 + 2 * (j8 < 0) : 2 * (0 < jG)
	}, this.jd = function(player) {
		return this.g7(ah.je[player] + ah.jf[player] >> 1, ah.jg[player] + ah.jh[player] >> 1)
	}, this.ji = function(player) {
		return this.g7(az.jj(ah.je[player], ah.jf[player]), az.jj(ah.jg[player], ah.jh[player]))
	}
}

function cu() {
	this.jk = new jl, this.jm = new jn, this.jo = new jp, this.performance = new jq, this.jr = new js, this.jt = new ju, this.jv = new jw, this.jx = new jy, this.jz = new k0, this.dv = function() {
		this.jk.dv(), this.jo.dv(), this.performance.dv(), this.jr.dv(), this.jt.dv()
	}, this.ep = function() {
		this.performance.ep(), this.jk.ep(), this.jo.k1()
	}
}

function js() {
	var k2, k4 = new Uint16Array(8);

	function kC(size, player) {
		for (var aC = ah.hC[player].length - 1; size <= aC; aC--) ad.kI(ah.hC[player][aC], player)
	}
	this.dv = function() {
		k2 = 0
	}, this.k5 = function(player, k6) {
		return bR.fg[1] = ah.hC[player].length, bR.fg[0] === aE.fh ? ap.jr.k7(player) : this.k8(player, bR.fg[0]), (0 !== bR.fg[1] || 0 !== ah.hC[player].length) && !(!k6 && bR.fg[1] === ah.hC[player].length || (bR.fg[0] === aE.fh ? ah.k9[
			player]++ : ah.kA[player]++, 0))
	}, this.kB = function(player) {
		kC(bR.fg[1], player), ae.et(player, bR.gH[0], bR.fg[0]), aG.kD(player, !1)
	}, this.kE = function(player, kF, fk, iU) {
		var kG = bO.gB(12 * ah.hm[player], 1024);
		iU -= iU >= bO.gB(ah.hm[player], 2) ? kG : 0, kC(fk, player), ae.et(player, iU, kF), ah.hm[player] -= iU + kG, aG.kD(player, !1)
	}, this.k8 = function(player, kF) {
		for (var ic, fm = ad.fm, aC = ah.hQ[player].length - 1; 0 <= aC; aC--)
			if (ad.kH(ah.hQ[player][aC]))
				for (ic = 3; 0 <= ic; ic--)
					if (ad.hK(ah.hQ[player][aC] + fm[ic]) && ad.fc(ah.hQ[player][aC] + fm[ic]) === kF) {
						ah.hC[player].push(ah.hQ[player][aC]);
						break
					}
	}, this.k7 = function(player) {
		for (var fm = ad.fm, aC = ah.hQ[player].length - 1; 0 <= aC; aC--)
			if (ad.kH(ah.hQ[player][aC]))
				for (var ic = 3; 0 <= ic; ic--)
					if (ad.fb(ah.hQ[player][aC] + fm[ic])) {
						ah.hC[player].push(ah.hQ[player][aC]);
						break
					}
	}, this.kJ = function(player, kK) {
		var aC, g3, ic, ig, fk = ah.hQ[player].length,
			kL = 256 <= fk ? 12 : 32 <= fk ? 6 : 1,
			kM = fk - 1 - az.kN(kL),
			fm = ad.fm;
		k2 = 0;
		loop: for (aC = kM; 0 <= aC; aC -= kL)
			for (ic = 3; 0 <= ic; ic--)
				if ((ig = ad.fb(ah.hQ[player][aC] + fm[ic]) ? aE.fh : ad.fc(ah.hQ[player][aC] + fm[ic])) === aE.fh || ad.hK(ah.hQ[player][aC] + fm[ic]) && ig !== player && (kK || bw.fd(player, ig))) {
					for (g3 = k2 - 1; 0 <= g3; g3--)
						if (k4[g3] === ig) continue loop;
					if (k4[k2] = ig, 8 <= ++k2) return !0
				}
		return 0 < k2
	}, this.kO = function(player, kK) {
		var aC, ic, ig, fm = ad.fm;
		for (k2 = 0, aC = ah.hQ[player].length - 1; 0 <= aC; aC--)
			for (ic = 3; 0 <= ic; ic--)
				if ((ig = ad.fb(ah.hQ[player][aC] + fm[ic]) ? aE.fh : ad.fc(ah.hQ[player][aC] + fm[ic])) === aE.fh || ad.hK(ah.hQ[player][aC] + fm[ic]) && ig !== player && (kK || bw.fd(player, ig))) return k4[k2++] = ig, !0;
		return !1
	}, this.kP = function() {
		for (var g4, aC = k2 - 1; 0 <= aC; aC--)
			if (k4[aC] === aE.fh) {
				for (k2--, g4 = aC; g4 < k2; g4++) k4[g4] = k4[g4 + 1];
				return !0
			} return !1
	}, this.kQ = function(player) {
		for (var g4, aC = k2 - 1; 0 <= aC; aC--)
			if (ae.kR(player, k4[aC]))
				for (k2--, g4 = aC; g4 < k2; g4++) k4[g4] = k4[g4 + 1];
		return 0 === k2
	}, this.kS = function() {
		for (var aC = k2 - 1; 0 <= aC; aC--)
			if (bD.h6.kT(k4[aC])) return !0;
		return !1
	}, this.kU = function() {
		for (var aC = k2 - 1; 0 <= aC; aC--) bD.h6.kT(k4[aC]) || (k4[aC] = k4[--k2]);
		return 0 < k2
	}, this.kV = function(player) {
		for (var g4, kW = k4[0], kX = ah.hm[kW] + ae.hn(kW, player), aC = k2 - 1; 1 <= aC; aC--)(g4 = ah.hm[k4[aC]] + ae.hn(k4[aC], player)) < kX && (kW = k4[aC], kX = g4);
		return kW
	}, this.kY = function(player) {
		var k, kZ = k4[0];
		if (1 !== k2)
			for (var ka = bO.gB(ah.jf[player] + ah.je[player], 2), kb = bO.gB(ah.jh[player] + ah.jg[player], 2), g0 = kc(ka - bO.gB(ah.jf[kZ] + ah.je[kZ], 2)) + kc(kb - bO.gB(ah.jh[kZ] + ah.jg[kZ], 2)), aC = k2 - 1; 1 <= aC; aC--)(k = kc(ka - bO
				.gB(ah.jf[k4[aC]] + ah.je[k4[aC]], 2)) + kc(kb - bO.gB(ah.jh[k4[aC]] + ah.jg[k4[aC]], 2))) < g0 && (g0 = k, kZ = k4[aC]);
		return kZ
	}, this.kd = function() {
		for (var ke = k4, kf = ke[0], hm = ah.hm, kg = hm[kf], aC = k2 - 1; 1 <= aC; aC--) {
			var hI = ke[aC],
				g4 = hm[hI];
			kg < g4 && (kf = hI, kg = g4)
		}
		return kf
	}, this.kh = function() {
		return k4[az.kN(k2)]
	}
}

function ju() {
	function kx(player, kF, kn) {
		3 <= kn && 2142 < bi.l3() && (kF === aE.fh || ah.hm[kF] < bO.gB(ah.hm[player], 20)) && aF.ks(player, 20)
	}

	function l0(player, iU, kF, kn) {
		3 <= kn && kn < 6 && bO.gB(ah.hm[player], 8) > ah.hm[kF] && (iU = Math.max(bO.gB(11 * ah.hm[kF], 5), bO.gB(ah.hm[player], 10)));
		kn = ah.hC[player].length;
		ap.jr.k8(player, kF), ap.jr.kE(player, kF, kn, iU)
	}

	function kw(player, iU) {
		var kF = aE.fh,
			fk = ah.hC[player].length;
		ap.jr.k7(player), ah.hC[player].length !== fk && ap.jr.kE(player, kF, fk, iU)
	}
	this.ki = new Uint8Array(aE.fh), this.dv = function() {
		this.ki.fill(0)
	}, this.kj = function(player, iU) {
		var kl, kn, ko, kp;
		ae.kk(player) && (kl = af.km(player), 3 <= (kn = aF.iU[player]) && kn < 6 && (iU = Math.max(ah.hm[player] - kl, iU)), ko = ah.hR[player].length, kp = ah.hQ[player].length, 30 * ah.hY[player] > aE.kq && kr[player] < 10 && 100 * kp <= ko &&
			aF.ks(player, 10), aE.ih ? function(player, iU, kn, kl) {
				var kF;
				if (ap.jr.kJ(player, !1) || ap.jr.kO(player, !1)) {
					if (!ap.jr.kQ(player))
						if (ap.jr.kP()) kw(player, iU), kx(player, aE.fh, kn);
						else {
							if (az.ky(aF.kz[kn])) kF = ap.jr.kV(player);
							else {
								if (ap.jr.kS() && az.ky(aF.l1[kn]) && ap.jr.kU(), 6 === kn) return l0(player, iU, ap.jr.kh(), kn);
								kF = ap.jr.kY(player)
							}
							l0(player, iU, kF, kn), kx(player, kF, kn)
						}
				} else bQ.ku.ep(player) || ap.jv.ep(player) || ! function(player, iU, kn, kl) {
					var ki = ap.jt.ki;
					ki[player] = 0;
					var l4 = bj.fi[player];
					if (0 !== l4) {
						var l5 = ah.hm[player],
							hY = ah.hY;
						if (player < aE.l6 && (iU = l5), !(l5 < hY[player] || 5 === kn && l5 < kl || 4 === kn && l5 < bO.gB(kl, 2))) {
							bk.l7(l4);
							for (var fk = bR.gF[0], gO = bR.gO, aC = az.kN(fk), g4 = 0; g4 < fk; g4++) {
								var eu = gO[(g4 + aC) % fk];
								if (ki[eu]) return bB.l8.l9(player, eu, iU)
							}
							var lA = bQ.z.lA;
							for (g4 = 0; g4 < fk; g4++)
								if (eu = gO[(g4 + aC) % fk], lA[eu] && eu !== player) return bB.l8.l9(player, eu, iU)
						}
					}
				}(player, iU, kn, kl)
			}(player, iU, kn, kl) : (!kp || ko && (ko < kp && !az.kN(10) || 100 * kp <= ko && az.kN(3) || !az.kN(8))) && bQ.ku.ep(player) || function(player, iU, kn) {
				ap.jr.kJ(player, !0) || ap.jr.kO(player, !0) ? ap.jr.kQ(player) || (ap.jr.kP() ? kw(player, iU) : az.ky(aF.kz[kn]) ? l0(player, iU, ap.jr.kV(player), kn) : 5 === kn ? l0(player, iU, ap.jr.kd(), kn) : (ap.jr.kS() && az.ky(aF
					.l1[kn]) && ap.jr.kU(), l0(player, iU, 6 === kn ? ap.jr.kh() : ap.jr.kY(player), kn))) : ap.jv.ep(player)
			}(player, iU, kn))
	}
}

function cE() {
	var lB = new Uint8Array(aE.fh),
		lC = new Uint16Array(aE.fh),
		lD = new Uint16Array(aE.fh),
		lE = new Uint8Array(aE.fh),
		lF = (this.iU = new Uint8Array(aE.fh), new Uint16Array(aE.fh)),
		lG = new Uint16Array(aE.fh);

	function lV(aC) {
		lB[aC] = 1 + bO.gB(lF[aC] * az.random(), 10 * az.value(100))
	}
	this.lH = null, this.l1 = [97, 94, 70, 40, 20, 0, 100], this.lI = [500, 450, 400, 300, 80, 50, 100], this.kz = [0, 0, 5, 25, 50, 100, 0], this.lJ = [60, 74, 112, 200, 256, 512, 512], this.lK = [1, 2, 3, 4, 6, 8, 1], this.lL = [500, 450, 400, 300,
		80, 50, 100
	], this.lM = [100, 150, 250, 400, 600, 1e3, 100], this.dw = function() {
		this.lH = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dv = function() {
		lB.fill(0), lC.fill(0), lD.fill(0), lE.fill(0), this.iU.fill(0), lF.fill(0), lG.fill(0);
		var lN = aE.l6;
		if (9 === aE.lO) this.lP();
		else if (__fx.customLobby.isActive())
			for (aC = aE.lS - 1; 0 <= aC; aC--) this.iU[aC + lN] = __fx.customLobby.gameInfo.difficulty;
		else if (aE.lQ)
			if (3 === aE.data.botDifficultyType)
				for (aC = aE.lS - 1; 0 <= aC; aC--) {
					var ie = aC + lN;
					this.iU[ie] = aE.data.botDifficultyData[ie]
				} else if (2 === aE.data.botDifficultyType)
					for (aC = aE.lS - 1; 0 <= aC; aC--) this.iU[ie = aC + lN] = aE.data.botDifficultyTeam[bj.lT[bj.fi[ie]]];
				else if (1 === aE.data.botDifficultyType) {
			var lU = this.lH.length;
			for (aC = aE.lS - 1; 0 <= aC; aC--) this.iU[aC + lN] = aC % lU
		} else
			for (lU = aE.data.botDifficultyValue, aC = aE.lS - 1; 0 <= aC; aC--) this.iU[aC + lN] = lU;
		else
			for (var lR = 8 === aE.lO ? 1 : 0, aC = aE.lS - 1; 0 <= aC; aC--) this.iU[aC + lN] = lR;
		for (aC = 0; aC < lN; aC++) this.iU[aC] = 6;
		var fk = aE.fh;
		for (aC = 0; aC < fk; aC++) this.iU[aC] <= 2 ? (lE[aC] = 5, lF[aC] = lG[aC] = 1040, 0 === this.iU[aC] ? (lC[aC] = 980, lD[aC] = 980) : 1 === this.iU[aC] ? (lC[aC] = 980, lD[aC] = 920, lF[aC] = lG[aC] = 1100) : (lC[aC] = 825, lD[aC] =
			750)) : this.iU[aC] <= 4 ? (lE[aC] = 1 + az.kN(20), 3 === this.iU[aC] ? (lC[aC] = lD[aC] = 500, lF[aC] = lG[aC] = 1e3) : (lG[aC] = 250 + az.kN(1501), lF[aC] = 500 + az.kN(501), lC[aC] = 300 + az.kN(201), lD[aC] = 100 + az.kN(
			201))) : this.iU[aC] <= 5 ? (lF[aC] = 1e3, lG[aC] = 1e3, lE[aC] = 35 + az.kN(16), lC[aC] = 300 + az.kN(201), lD[aC] = 50 + az.kN(101)) : (lF[aC] = lG[aC] = 800, lE[aC] = 5, lC[aC] = 10, lD[aC] = 250), lV(aC)
	}, this.lP = function() {
		for (var fO = b0.lW, lN = aE.l6, aC = fO - 1; 0 <= aC; aC--) this.iU[aC + lN] = 0;
		for (var g4 = 0; g4 < 6; g4++) {
			for (aC = fO + b0.lX[g4] - 1; fO <= aC; aC--) this.iU[aC + lN] = g4;
			fO += b0.lX[g4]
		}
	}, this.ks = function(hI, value) {
		lB[hI] = Math.min(value, lB[hI])
	}, this.ep = function(hI) {
		0 == --lB[hI] && ! function(hI) {
			(function(hI) {
				lF[hI] !== lG[hI] && (lF[hI] += lF[hI] < lG[hI] ? 3 : -3);
				lC[hI] !== lD[hI] && (lC[hI] += lC[hI] < lD[hI] ? lE[hI] : -lE[hI], lC[hI] = (Math.abs(lC[hI] - lD[hI]) <= lE[hI] ? lD : lC)[hI]);
				lB[hI] = bO.gB(lF[hI], 10)
			})(hI), ap.jt.kj(hI, bO.gB(lC[hI] * ah.hm[hI], 1e3))
		}(hI)
	}, this.la = function(hI, hD) {
		lF[hI] = lG[hI] = hD
	}
}

function jp() {
	var lb = new Uint16Array(aE.fh);

	function lq(player, lo) {
		for (var fk = bR.gF[0], gN = bR.gN, m2 = -1, m3 = aE.fh, aC = 0; aC < fk; aC++) {
			var g0, hI = gN[aC];
			bw.fd(player, hI) && (g0 = bP.jH(lo, bP.jd(hI)), -1 === m2 || g0 < m2) && (m2 = g0, m3 = hI)
		}
		return m3
	}

	function ls(lp, lo) {
		if (lp === aE.fh) return 0;
		var hR = ah.hR[lp],
			m1 = hR.length;
		if (0 === m1) return 0;
		for (var fk = Math.min(m1, 10), m3 = 0, m2 = bP.jH(hR[m3] >> 2, lo), aC = 0; aC < fk; aC++) {
			var ie = az.kN(m1),
				g0 = bP.jH(hR[ie] >> 2, lo);
			g0 < m2 && (m2 = g0, m3 = ie)
		}
		return hR[m3] >> 2
	}

	function lx(player, lo, kF, m5) {
		var m6;
		(m5 === aE.fh || (m6 = bP.jd(kF), m5 = bP.jd(m5), bP.jH(lo, m6) < bP.jH(lo, m5))) && (lb[player] = kF)
	}
	this.dv = function() {
		lb.fill(aE.fh)
	}, this.k1 = function() {
		if (bi.l3() % 109 == 9 && !(am.lc < 20) && aE.ih && !(bk.ld() < bO.gB(8 * aE.kq, 10))) {
			var le = bk.lf();
			if (bj.lT[le]) {
				bk.lg(le);
				var fk = bR.gF[0];
				if (0 !== fk)
					for (var h = bR.gO, lh = am.lh, lc = am.lc, li = lb, ie = az.kN(fk), aC = 0; aC < lc; aC++) {
						var iD = lh[aC],
							lj = h[ie];
						bD.h6.lk(iD, lj) && 512 === li[iD] && (li[iD] = lj, ie = (ie + 1) % fk)
					}
			}
		}
	}, this.ep = function(player) {
		var lo, lr, lp, ll = function(player) {
			var kF = lb[player];
			if (kF !== aE.fh) {
				if (bD.h6.m4(kF) && ah.hR[kF]) return kF;
				lb[player] = aE.fh
			}
			return aE.fh
		}(player);
		return function(player) {
			for (var m0 = am.lh, m1 = am.lc, fk = Math.min(m1, m1 < 17 && 5 === az.kN(20) ? 1 : 16), hJ = az.kN(m1), gN = bR.gN, hR = ah.hR, hD = 0, aC = 0; aC < fk; aC++) {
				var hI = m0[(aC + hJ) % m1];
				hI !== player && hR[hI].length && (gN[hD++] = hI)
			}
			bR.gF[0] = hD
		}(player), 0 !== bR.gF[0] && (0 < (lr = ls(lp = lq(player, lo = bP.ji(player)), lo)) && bQ.lt.lu(player, bQ.lv.lw(lr, lo)) ? (lx(player, lo, lp, ll), !0) : 0 < (lp = function(player, lo) {
			for (var fk = bR.gF[0], gN = bR.gN, li = lb, hJ = 0, aC = 0; aC < fk; aC++) {
				var hI = gN[aC],
					hI = li[hI];
				hI !== aE.fh && bD.h6.m4(hI) && player !== hI && bw.fd(player, hI) && (gN[hJ++] = hI)
			}
			return 0 !== (bR.gF[0] = hJ) ? ls(lq(player, lo), lo) : 0
		}(player, lo)) && bQ.lt.lu(player, bQ.lv.lw(lp, lo)) ? (lx(player, lo, ad.fc(lp << 2), ll), !0) : !!(0 < (lr = ls(ll, lo)) && bQ.lt.lu(player, bQ.lv.lw(lr, lo))))
	}
}

function jw() {
	function mA(player) {
		for (var g9 = ah.g9[player], fk = g9.length, gA = Math.max(bO.gB(fk, 12), 1), fm = ad.fm, eS = az.kN(fk), aC = 0; aC < fk; aC += gA)
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

	function mF(player, mH) {
		var iU = bD.h6.mI(player, aF.lL[aF.iU[player]]);
		ah.hC[player].push(mH.fO), ae.et(player, iU, mH.hI), aG.kD(player, !0)
	}
	this.ep = function(player) {
		return !!bV.fP(bV.fQ) && !!aE.data.passableMountains && 0 !== ah.g9[player].length && function(player) {
			var m9 = mA(player);
			if (null === m9) return !1;
			! function(player) {
				for (var lh = am.lh, lc = am.lc, fk = Math.min(lc, 12), hJ = az.kN(lc), gN = bR.gN, g9 = ah.g9, hD = 0, aC = 0; aC < fk; aC++) {
					var hI = lh[(aC + hJ) % lc];
					hI !== player && g9[hI].length && bw.fd(player, hI) && (gN[hD++] = hI)
				}
				bR.gF[0] = hD
			}(player);
			var mC = function(fR) {
				for (var fk = bR.gF[0], gN = bR.gN, aC = 0; aC < fk; aC++) {
					var mH = mA(gN[aC]);
					if (null !== mH && mH.id === fR) return mH
				}
				return null
			}(m9.id);
			return null !== mC ? (mF(player, mC), !0) : function(player, fR) {
				var fk = ap.jk.mG;
				if (0 !== fk)
					for (var fO = ap.jk.buffer[az.kN(fk)] << 2, fm = ad.fm, fn = az.kN(4);;) {
						if (fO += fm[fn], ad.fp(fO)) {
							if (ad.fS(fO) === fR) return mF(player, {
								fO: fO,
								hI: aE.fh
							}), !0;
							break
						}
						if (!ad.fb(fO)) break
					}
				return !1
			}(player, m9.id)
		}(player)
	}
}

function jn() {
	this.ep = function(player) {
		return bQ.lt.lu(player, function(player) {
			var fk = ap.jk.mG;
			if (0 === fk) return -1;
			for (var m1 = Math.min(fk, ap.performance.mK ? fk : 10), buffer = ap.jk.buffer, kM = bO.gB(az.random() * fk, az.value(100)), e = kM + m1, mL = az.jj(ah.je[player], ah.jf[player]), mM = az.jj(ah.jg[player], ah.jh[player]),
					m3 = -1, g0 = bP.jI(0, 0, bV.fv, bV.fw), aC = kM; aC < e; aC++) {
				var hJ = aC % fk,
					mN = bP.g2(mL, mM, buffer[hJ]);
				mN < g0 && (g0 = mN, m3 = hJ)
			}
			return -1 !== m3 ? function(fW, mL, mM) {
				var i0 = bP.fs(fW),
					i2 = bP.fu(fW),
					j8 = mL - i0,
					jB = mM - i2;
				Math.abs(j8) >= Math.abs(jB) ? (jB = 0, j8 = Math.sign(j8)) : (j8 = 0, jB = Math.sign(jB));
				j8 === jB && (j8 = 1);
				for (;;) {
					if (i0 += j8, i2 += jB, !bP.g6(i0, i2)) break;
					if (fW = bP.g7(i0, i2), ad.j2(bP.fa(fW))) return fW
				}
				return -1
			}(buffer[m3], mL, mM) : -1
		}(player))
	}
}

function jy() {
	this.ep = function(player) {
		var mP = function(player) {
			for (var mS = bQ.mS.mU(), fk = mS.length, m1 = Math.min(fk, 32), ie = az.kN(fk), aC = 0; aC < m1; aC++) {
				var mP = (aC + ie) % fk,
					mR = mS[mP],
					jF = mR[0],
					jG = mR[mR.length - 1];
				if (bQ.lv.mV(player, jF) && bQ.lv.mW(player, jG)) return mP;
				if (bQ.lv.mV(player, jG) && bQ.lv.mW(player, jF)) return 0 <= (mP = bQ.mS.mX(jG, jF)) ? mP : bQ.mS.mY() ? -1 : bQ.mS.mZ(bQ.mS.ma(mR))
			}
			return -1
		}(player);
		return -1 !== mP && (mP = bQ.mS.get(mP), !bQ.lv.mT(player, mP)) && (bR.h[0] = mP, !0)
	}
}

function jq() {
	this.mK = 0, this.dv = function() {
		this.mK = 0
	}, this.ep = function() {
		if (!this.mK && bi.l3() % 30 == 7 && bD.h6.md(90) && (ap.performance.mK = 1)) {
			if (aE.ih) {
				var le = bk.lf();
				if (bj.lT[le]) {
					bk.l7(le);
					var h = bR.gO,
						fk = bR.gF[0];
					if (0 !== fk)
						for (var mg = Math.min(100 + 10 * (fk - 1), 400), aC = 0; aC < fk; aC++) aF.la(h[aC], mg)
				}
			}
			aF.la(mh[0], 100)
		}
	}
}

function jl() {
	var mi = 0,
		mj = 0,
		mk = 300,
		ml = 300,
		mm = 0;
	this.mG = 0, this.buffer = new Uint32Array(512), this.dv = function() {
		mj = mi = 0, this.mG = 0, mm = 0
	}, this.ep = function() {
		if (function() {
				var fk = ap.jk.mG;
				if (0 === fk) return 1;
				var buffer = ap.jk.buffer;
				if (bi.l3() % 35 == 6) {
					for (var aC = fk - 1; 0 <= aC; aC--) ad.fb(buffer[aC] << 2) || (fk--, buffer[aC] = buffer[fk]);
					ap.jk.mG = fk
				}
				return fk < buffer.length
			}())
			if (mk <= mi) {
				var mq = ap.jk.mG;
				if (mq) {
					if (bi.l3() % 350 != 1) return;
					if (mm !== mq) return void(mm = mq);
					if (!bD.h6.kT(mh[0])) return
				} else if (bi.l3() % 12 != 8) return;
				bD.h6.mr() || ap.jk.dv()
			} else {
				var aC, j = bV.fv,
					ms = j - 2,
					mq = ms * (bV.fw - 2),
					mt = mk,
					buffer = ap.jk.buffer,
					m1 = ap.jk.mG,
					mu = buffer.length,
					hJ = Math.min(mj + mt * ((1 + 19 * ap.performance.mK) * ml), mq);
				for (aC = mj; aC < hJ; aC += mt) {
					var fO = 4 * (aC % ms + (bO.gB(aC, ms) + 1) * j + 1);
					if (ad.fb(fO) && (buffer[m1] = fO >> 2, ++m1 === mu)) {
						aC += mt;
						break
					}
				}(mj = aC) >= mq && (mj = ++mi), ap.jk.mG = m1
			}
	}
}

function k0() {
	this.ep = function() {
		if (bi.l3() % 51 == 45)
			for (var fk = bQ.z.mw, mx = bQ.z.mx, my = bQ.z.my, mz = bQ.z.mz, n0 = bQ.z.n0, lM = aF.lM, iU = aF.iU, aC = 0; aC < fk; aC++) {
				var mR, player, n4, n1 = mx[aC];
				n1 % 64 == 6 || (mR = my[aC], (player = bQ.lv.n2(mR[mR.length - 1])) < 0) || !bD.h6.lk(player, n0[aC] >> 3) || az.kN(1e3) >= lM[iU[player]] || ! function(n8, mR) {
					for (var fk = mR.length - 1, n9 = bQ.z.nA[n8], g0 = 0, aC = n9 + 1; aC < fk; aC++) g0 += bP.jE(mR[aC], mR[aC + 1]);
					return (g0 += bP.jE(bP.jW(bQ.z.nB[n8]), mR[n9 + 1])) <= 60
				}(aC, mR) || (n4 = mz[aC], 64 <= n1 && bQ.n5.n6(player, n4)) || function(player, mR, n4, n8, n1) {
					bQ.nC.nD(player) && bD.h6.nE(player, aF.lI[aF.iU[player]], 32, 0) && (bQ.z.mx[n8] = 64 + n1 % 64, bQ.n5.et(n4, bQ.z.nF), bR.h[0] = bQ.mS.ma(mR), bR.gM[1] = 6, bD.h6.nG(player), bQ.z.nH(player))
				}(player, mR, n4, aC, n1)
			}
	}
}

function nI() {
	bU.nJ.nK(), aO.ep(), ag.ep(), aX.nL(), b1.z.ep()
}

function nM() {
	b2.ep(), aH.ep(), ao.ep(), af.ep(), b5.ep(), aG.ep(), ap.ep(), bQ.z.ep(), am.nN(), aW.ep(), b0.ep(), bY.ep(), ag.ep(), ag.nO(), aX.ep(), bS.ep(), aV.ep(), aQ.ep(), b9.nP(), aO.ep(), b6.ep(), aS.ep(), ax.ep(), bg.ep(), bk.ep(), b1.z.ep(), b1.nQ
		.ep(), u.ep(), bX.ed.ep(), bC.ep(), bi.ep()
}

function nR() {
	aI.ep(), aY.ep(), aR.ep(), aw.ep(), bF.ep(), b8.ep(), b9.ep(), ay.nS()
}

function nT() {
	aW.nU(!1), aQ.nU(), aX.nU(!1), aV.nU(), aS.nU(), ax.nU(), ag.nU(!1), bk.nV()
}

function nW() {
	ag.nU(!1) && (bi.e2 = !0), b1.z.ep()
}

function cF() {
	var nX, nY, nZ;

	function nb(nd) {
		for (var aC = nX - 1; 0 <= aC; aC--) 0 === nZ[nY[aC]] && ah.hY[nY[aC]] >= nd && go(nY[aC])
	}

	function na(player) {
		var el;
		64 === nZ[player] ? nZ[player] = 6 : (el = ah.hY[player], nZ[player] = el < 1e3 ? 3 : el < 1e4 ? 2 : el < 6e4 ? 1 : 0)
	}
	this.dv = function() {
		nX = 0, nY = new Uint16Array(aE.fh), nZ = new Uint8Array(aE.fh)
	}, this.ep = function() {
		for (var aC = nX - 1; 0 <= aC; aC--) 64 === nZ[nY[aC]] ? na(nY[aC]) : 0 == nZ[nY[aC]]-- && (na(nY[aC]), go(nY[aC]));
		16e4 <= ah.hY[mh[0]] && (nb(16e4), 3e5 <= ah.hY[mh[0]]) && nb(3e5), bD.h6.m4(aE.fU) && (bg.ne[7] = Math.max(ah.hY[aE.fU], bg.ne[7]))
	}, this.h8 = function(player) {
		for (var g3, aC = nX - 1; 0 <= aC; aC--)
			if (player === nY[aC]) {
				for (nX--, g3 = aC; g3 < nX; g3++) nY[g3] = nY[g3 + 1];
				return
			}
	}, this.kD = function(player, nf) {
		for (var aC = nX - 1; 0 <= aC; aC--)
			if (player === nY[aC]) return;
		nY[nX++] = player, nZ[player] = nf ? 2 : 64
	}
}

function cG() {
	var size, ku;
	this.dv = function() {
		size = aE.lS, ku = new Uint16Array(aE.fh);
		for (var l6 = aE.l6, aC = aE.lS - 1; 0 <= aC; aC--) ku[aC] = l6 + aC
	}, this.ep = function() {
		ap.jz.ep();
		for (var aC = size - 1; 0 <= aC; aC--)
			if (0 === ah.ni[ku[aC]]) {
				g3 = void 0;
				var g3 = aC;
				size--, ku[g3] = ku[size]
			} else aF.ep(ku[aC])
	}, this.nh = function(hI) {
		ku[size++] = hI
	}
}

function cH() {
	var nk, nl, nm, nn, no, np, nq, nr, ns, nt, nu, nv, nw, nx = !1,
		ny = !1;

	function nz(o0) {
		nv = bi.ek, nm = nn = nl = 0, no = (nw = 33) / o0, nk = 1 / (o0 / nw / 4), np = (i.j / 2 + jP) / iz, nq = (i.k / 2 + jQ) / iz, nr = iz
	}

	function o7(aC) {
		var o9; - 1 !== aC && (aC = bP.jW(bQ.z.nB[aC]), o9 = bP.fs(aC) - 15, aC = bP.fu(aC) - 15, aI.o3(o9, aC, 29 + o9, 29 + aC))
	}

	function oK(eX) {
		Math.abs(Math.log(nu / nr)) < .125 && (nu = eX * nr)
	}

	function oJ(o9, oA, oM, oN) {
		ns = (o9 + oM + 1) / 2, nt = (oA + oN + 1) / 2;
		oM = i.j / (oM - o9 + 1), o9 = i.k / (oN - oA + 1);
		nu = .9 * (oM < o9 ? oM : o9)
	}
	this.o1 = function() {
		return nx
	}, this.o2 = function() {
		nz(1), this.o3(0, 0, bV.fv - 1, bV.fw - 1), aE.i9 || aE.ht || aE.hu || this.o4(aE.fU, 3e3, !0, .3)
	}, this.o5 = function(player, o6) {
		o7(bQ.lv.o8(player, o6))
	}, this.o4 = function(player, o0, oB, zoom) {
		aE.oC || nx && !oB && ny || (0 === ah.hY[player] ? o7(bQ.lv.oD(player)) : (aT.oE = !1, ny = oB, nz(o0), function(player) {
			ns = (ah.je[player] + ah.jf[player] + 1) / 2, nt = (ah.jg[player] + ah.jh[player] + 1) / 2
		}(player), function(zoom, player) {
			var j8 = ah.jf[player] - ah.je[player] + 1,
				player = ah.jh[player] - ah.jg[player] + 1,
				g3 = i.j / j8,
				g4 = i.k / player,
				g3 = (nu = g3 < g4 ? g3 : g4, 0 !== zoom ? zoom : j8 < 20 && player < 20 ? .5 : .9);
			nu *= g3, oK(7 / 8)
		}(zoom, player), nx = !0, at.oH()))
	}, this.oI = function(o0) {
		aE.ht || aE.oC || (aT.oE = !1, ny = !1, nz(o0), oJ(0, 0, bV.fv - 1, bV.fw - 1), oK(7 / 8), nx = !0, at.oH())
	}, this.o3 = function(o9, oA, oM, oN) {
		nx = !1, oJ(o9, oA, oM, oN), iz = nu, aT.oO(ns, i.j / 2), aT.oP(nt, i.k / 2), bd.oQ(), bi.e2 = !0
	}, this.oR = function() {
		return !(nx && ny || (nx = !1))
	}, this.ep = function() {
		var oU, oV, fn, oY;
		nx && (nl < .5 ? nn < no && (nn += no * nk, nm = nl) : 1 - nm < nl && (nn = (nn -= no * nk) < no * nk ? no * nk : nn), nv = nv >= bi.ek ? bi.ek - 1 : nv, fn = bi.ek - nv, nl = 1e3 < fn || 1 < (nl += nn * fn / nw) ? 1 : nl, nv = bi.ek,
			fn = iz, oU = jP, oV = jQ, fn = (iz = nr * Math.pow(nu / nr, nl)) / fn, oY = 1 - (nr * Math.pow(nu / nr, 1 - nl) - nr) / (nu - nr), aT.oO(np + oY * (ns - np), i.j / 2), aT.oP(nq + oY * (nt - nq), i.k / 2), ag.zoom(fn, (oU * fn -
				jP) / (1 - fn), (oV * fn - jQ) / (1 - fn)), bd.oQ(), 1 <= nl && (nx = !1, be.oZ = !0), bi.e2 = !0)
	}
}

function dp() {
	this.oa = -1, this.pow = -1;
	var ob = null,
		oc = null,
		od = null,
		oe = null,
		oh = [],
		oi = 0,
		oj = null,
		ok = null,
		ol = null,
		om = null,
		on = this,
		oo = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255,
		op = 4294967295;

	function ow(ox, oy, className) {
		ox = document.createElement(ox);
		return className && (ox.className = className), oy && oy.appendChild(ox), ox
	}

	function oz(ew, oy, action) {
		oy = ow("button", oy);
		return oy.type = "button", oy.textContent = ew, oy.addEventListener("click", action), oy
	}

	function p0(oy) {
		oy = ow("canvas", oy);
		return oy.width = 128, oy.height = 128, oy
	}

	function ot(canvas, data) {
		canvas = canvas.getContext("2d");
		ok || (ok = canvas.createImageData(128, 128), ol = new Uint32Array(ok.data.buffer)),
			function(data, p2) {
				for (var fk = data.length, p3 = 0, position = 0, color = 0; position < 16384;) {
					var eT = p3 >> 3;
					if (fk <= eT) break;
					for (var eT = data[eT] << 8 | (1 + eT < fk ? data[1 + eT] : 0), oR = Math.min(16384, position + (eT >> 10 - (7 & p3) & 63)), p5 = color ? oo : op, aC = position; aC < oR; aC++) p2[aC] = p5;
					position = oR, p3 += 6, color ^= 1
				}
				for (aC = position; aC < 16384; aC++) p2[aC] = op
			}(data, ol), canvas.putImageData(ok, 0, 0)
	}

	function ou() {
		if (ob) {
			oe.disabled = !oi;
			for (var aC = 0; aC < oh.length; aC++) oh[aC].setAttribute("aria-pressed", String(Boolean(oi & 1 << aC)))
		}
	}

	function p8(e) {
		var pA, p9;
		"Escape" === e.key ? (e.preventDefault(), on.close()) : "Tab" === e.key && ob && (pA = (p9 = ob.querySelectorAll("button:not(:disabled)"))[0], p9 = p9[p9.length - 1], e.shiftKey && document.activeElement === pA ? (e.preventDefault(), p9
			.focus()) : e.shiftKey || document.activeElement !== p9 || (e.preventDefault(), pA.focus()))
	}

	function pH() {
		on.close(), b1.er.pJ(0, 0, on.oa, on.pow)
	}

	function pI() {
		var pK, or;
		oi && (pK = oi, or = oj, on.close(), b1.er.pJ(pK, or, on.oa, on.pow))
	}
	this.show = function(oq, or, oa, pow) {
		this.oa = oa, this.pow = pow, oj = or, ob || function() {
			om = document.activeElement, (ob = ow("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), ob.setAttribute("aria-modal", "true"), ob.setAttribute("aria-label", L(14)), ow("style", ob).textContent =
				".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
			var pD = ow("div", ob, "captcha-reference-row");
			ow("span", pD, "captcha-reference-label").textContent = L(15), (od = p0(pD)).className = "captcha-reference", od.setAttribute("aria-label", L(16)), oc = ow("div", ob, "captcha-grid");
			for (var aC = 0; aC < 16; aC++) oh.push(function(eT) {
				var e = oz("", oc, function() {
					oi ^= 1 << eT, ou()
				});
				return e.className = "captcha-tile", e.setAttribute("aria-label", L(13, [eT + 1])), e.setAttribute("aria-pressed", "false"), p0(e).setAttribute("aria-hidden", "true"), e
			}(aC));
			var pD = ow("div", ob, "captcha-actions"),
				pG = oz(L(17), pD, function() {
					on.close()
				});
			oz(L(18), pD, pH), oe = oz(L(19), pD, pI), ob.addEventListener("keydown", p8), on.resize(), ou(), pG.focus()
		}(), ot(od, oq[0]);
		for (var aC = 0; aC < 16; aC++) ot(oh[aC].firstChild, oq[aC + 1]);
		oi = 0, ou()
	}, this.resize = function() {
		var size;
		ob && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), ob.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (ob) {
			for (var ov = ob.querySelectorAll("canvas"), aC = 0; aC < ov.length; aC++) ov[aC].width = 0, ov[aC].height = 0;
			ob.remove(), oh = [], ol = ok = oj = oe = od = oc = ob = null, oi = 0, om && document.body.contains(om) && om.focus(), om = null
		}
	}
}

function ds() {
	this.nJ = new pL, this.pM = new pN, this.pO = new pP, this.dv = function(pQ, pR) {
		this.pM.dv(pQ, pR), this.nJ.dv(pR), this.pO.dv()
	}
}

function pP() {
	var pS = 0,
		pT = [],
		pU = [],
		pV = "";

	function pf(pg, name) {
		var pl = bq.pm;
		return pl && pg === pl.pg || 0 <= pT.indexOf(pg) || (pU.length && (pl = function(pg, name) {
			pg = bq.po.pp(pg), pg = pg ? pg.username : name;
			return pg ? bD.pc.pq(pg) : null
		}(pg, name)) ? 0 <= pU.indexOf(pl) : void 0)
	}
	this.dv = function() {
		pS = 0, pT = [], pU = [], pV = ""
	}, this.pW = function() {
		return pS
	}, this.pX = function(pY) {
		pS = 1 - pS, pV = "", pT = [], pU = [], this.pZ(pY), c0.nJ.reset()
	}, this.pZ = function(pY) {
		if (pS && bq.fH) {
			var h = bq.pa.pb(pY),
				pY = h.join(" ");
			if (pY !== pV) {
				pV = pY, pT = [], pU = [];
				for (var aC = 0; aC < h.length; aC++) bD.pc.startsWith(h[aC], "@[") ? pU.push(h[aC].substring(2, h[aC].length - 1).toUpperCase()) : pT.push(bJ.fB.fC(h[aC].substring(1), 5));
				c0.nJ.reset()
			}
		}
	}, this.pd = function(pe) {
		if (!pS || !pT.length && !pU.length || 4 < pe.id) return 1;
		if (pf(pe.pg, pe.ph)) return 1;
		if (void 0 !== pe.target && pf(pe.target, pe.pi)) return 1;
		if (0 === pe.id)
			for (var h = bq.pa.pb(pe.s), aC = 0; aC < h.length; aC++)
				if (bD.pc.startsWith(h[aC], "@[")) {
					var pj = h[aC].substring(2, h[aC].length - 1).toUpperCase();
					if (0 <= pU.indexOf(pj) || pj === (pj = void 0, (pj = bq.pm) ? bD.pc.pq(pj.username) : null)) return 1
				} else if (pf(bJ.fB.fC(h[aC].substring(1), 5), null)) return 1;
		return 0
	}
}

function pL() {
	var pr = null,
		ps = 1048575;

	function q0() {
		var hD = pr.childNodes.length - bq.z.q3;
		if (!(hD <= 0)) {
			for (var aC = 0; aC < hD; aC++) pr.removeChild(pr.firstChild);
			c0.pM.q4()
		}
	}

	function px(pw, q5) {
		q5 && (q5.q6 = 1, pw.appendChild(bq.q7.transform(q5)))
	}
	this.dv = function(pR) {
		pr = pR, ps = 1048575
	}, this.reset = function(pt) {
		ps = 1048575, pr.textContent = "", pt || this.nV()
	}, this.nV = function() {
		var pu = bq.z.pu,
			pv = bq.z.pv,
			fk = pu.length,
			kM = 1048575 === ps ? 0 : fk - (pv - ps + 1048575) % 1048575;
		if (ps = pv, !(fk <= (kM = Math.max(kM, 0)))) {
			for (var pw = document.createDocumentFragment(), aC = kM; aC < fk; aC++) c0.pO.pd(pu[aC]) && px(pw, bq.lv.py(pu[aC], bq.lv.pz(pu[aC])));
			pr.appendChild(pw), q0(), c0.pM.q1()
		}
	}, this.q2 = function(s) {
		var pw = document.createDocumentFragment();
		px(pw, s), pr.appendChild(pw), q0(), c0.pM.q1()
	}
}

function pN() {
	var q8 = null,
		pr = null,
		q9 = 1,
		qA = null,
		qB = 0;

	function qD() {
		qA && qA.parentNode === pr || (qA = pr.firstChild, qB = 0), qA && (q8.scrollTop = qA.offsetTop + qB)
	}
	this.dv = function(pQ, pR) {
		pr = pR, q9 = 1, qA = null, qB = 0, (q8 = pQ).addEventListener("scroll", function() {
			if (q8.scrollTop < q8.scrollHeight - q8.clientHeight - 2) {
				q9 = 0;
				for (var qE = pr.childNodes, qF = q8.scrollTop, aC = 0; aC < qE.length; aC++)
					if (qE[aC].offsetTop + qE[aC].offsetHeight > qF) return void(qA = qE[aC], qB = qF - qE[aC].offsetTop);
				qA = null
			} else q9 = 1
		})
	}, this.q4 = function() {
		q9 || qD()
	}, this.q1 = function(c3) {
		q9 ? q8.scrollTop = q8.scrollHeight : c3 && qD()
	}
}

function c9() {
	var eu = bD.color;
	this.qG = eu.qH(0, 0, 0), this.qI = eu.qJ(0, 0, 0, .7), this.qK = eu.qJ(0, 0, 0, .5), this.qL = eu.qJ(0, 0, 0, .85), this.qM = eu.qJ(0, 0, 0, .75), this.qN = eu.qJ(0, 0, 0, .6), this.qO = eu.qJ(0, 0, 0, .35), this.qP = eu.qH(255, 255, 255), this
		.qQ = eu.qJ(255, 255, 255, .3), this.qR = eu.qJ(255, 255, 255, .6), this.qS = eu.qJ(255, 255, 255, .4), this.qT = eu.qJ(255, 255, 255, .25), this.qU = eu.qJ(255, 255, 255, .85), this.qV = eu.qJ(255, 255, 255, .75), this.qW = eu.qJ(255, 255,
			255, .15), this.qX = eu.qJ(255, 255, 255, .11), this.qY = eu.qH(128, 128, 128), this.qZ = eu.qJ(64, 64, 64, .75), this.qa = eu.qJ(88, 88, 88, .83), this.qb = eu.qJ(60, 60, 60, .85), this.qc = eu.qJ(80, 60, 60, .85), this.qd = eu.qH(170,
			170, 170), this.qe = eu.qH(200, 235, 245), this.qf = eu.qH(30, 255, 30), this.qg = eu.qH(0, 200, 0), this.qh = eu.qH(128, 255, 128), this.qi = eu.qJ(10, 65, 10, .75), this.qj = eu.qJ(0, 255, 0, .6), this.qk = eu.qJ(0, 255, 0, .5), this
		.ql = eu.qJ(0, 200, 0, .5), this.qm = eu.qJ(0, 100, 0, .75), this.qn = eu.qJ(0, 60, 0, .8), this.qo = eu.qJ(0, 255, 0, .3), this.qp = eu.qJ(0, 180, 0, .6), this.qq = eu.qJ(0, 120, 0, .85), this.qr = eu.qH(0, 120, 0), this.qs = eu.qJ(0, 70, 0,
			.85), this.qt = eu.qH(190, 230, 190), this.qu = eu.qH(0, 255, 0), this.qv = eu.qJ(10, 120, 10, .9), this.qw = eu.qH(200, 255, 200), this.qx = eu.qH(255, 120, 120), this.qy = eu.qH(255, 160, 160), this.qz = eu.qH(255, 70, 70), this.r0 = eu
		.qH(230, 0, 0), this.r1 = eu.qJ(220, 0, 0, .6), this.r2 = eu.qJ(255, 100, 100, .8), this.r3 = eu.qJ(100, 0, 0, .85), this.r4 = eu.qJ(60, 0, 0, .85), this.r5 = eu.qJ(200, 0, 0, .6), this.r6 = eu.qJ(120, 0, 0, .85), this.r7 = eu.qH(255, 70,
		10), this.r8 = eu.qH(230, 190, 190), this.r9 = eu.qH(255, 0, 0), this.rA = eu.qH(255, 0, 255), this.rB = eu.qJ(60, 0, 60, .85), this.rC = eu.qJ(0, 60, 60, .85), this.rD = eu.qJ(10, 60, 60, .9), this.rE = eu.qJ(0, 96, 96, .75), this.rF = eu
		.qH(0, 255, 255), this.rG = eu.qH(160, 160, 255), this.rH = eu.qJ(0, 40, 90, .75), this.rI = eu.qJ(0, 0, 255, .6), this.rJ = eu.qH(200, 200, 255), this.rK = eu.qJ(50, 50, 255, .83), this.rL = eu.qJ(20, 90, 150, .75), this.rM = eu.qJ(10, 10,
			120, .75), this.rN = eu.qJ(10, 60, 160, .9), this.rO = eu.qH(200, 220, 255), this.rP = eu.qJ(0, 120, 255, .35), this.rQ = eu.qH(70, 150, 255), this.rR = eu.qH(255, 120, 100), this.rS = eu.qJ(255, 255, 0, .5), this.rT = eu.qJ(255, 255,
			150, .2), this.rU = eu.qH(255, 255, 0), this.rV = eu.qH(255, 255, 200), this.rW = eu.qJ(200, 200, 0, .6), this.rX = eu.qJ(140, 120, 0, .75), this.rY = eu.qJ(180, 160, 40, .75), this.rZ = eu.qJ(70, 50, 20, .85), this.ra = eu.qJ(30, 30, 0,
			.85), this.rb = eu.qJ(60, 60, 0, .85), this.rc = eu.qH(255, 255, 100), this.rd = eu.qH(255, 255, 140), this.re = eu.qJ(255, 140, 0, .75), this.rf = eu.qJ(70, 40, 0, .85), this.rg = eu.qH(255, 150, 0), this.rh = eu.qJ(255, 200, 80, .85),
		this.ri = eu.qJ(0, 0, 0, 0), this.rj = eu.qJ(255, 255, 255, 0), this.rk = eu.qJ(254, 254, 254, 0)
}

function d9() {
	this.iB = new rl, this.h6 = new rm, this.rn = new ro, this.rp = new rq, this.l8 = new rr
}

function rl() {
	this.rs = 1, this.iC = function(fW) {
		aE.hu || (aE.lQ ? bB.rn.iC(aE.fU, fW) : b1.rt.ru(fW))
	}, this.iI = function(jO, kF) {
		aE.hu || (this.rs && (this.rs = 0, bm.rv.q1(182, jO)), aE.lQ ? bB.rn.iI(aE.fU, jO, kF) : b1.rt.rw(jO, kF))
	}, this.rx = function(jO, ry) {
		aE.hu || (aE.lQ ? bB.rn.rz(aE.fU, jO, ry) : b1.rt.s0(jO, ry))
	}, this.iN = function(jO, fW) {
		aE.hu || (fW = (fW << 3) + bR.gM[6], aE.lQ ? bB.rn.iN(aE.fU, jO, fW) : bQ.nC.nD(aE.fU) && b1.rt.s2(jO, fW))
	}, this.iQ = function(jO) {
		var o6;
		aE.hu || (849 === jO && (jO = 850), o6 = bR.gM[3], aE.lQ ? bB.rn.iQ(aE.fU, jO, o6) : bQ.iO.s3(aE.fU, o6) && b1.rt.s4(jO, o6))
	}, this.s5 = function(o6) {
		aE.hu || (aE.lQ ? bB.rn.s5(aE.fU, o6) : b1.rt.s4(849, o6))
	}, this.s6 = function(kF) {
		aE.hu || (aE.lQ ? bB.rn.s6(aE.fU, kF) : b1.rt.s7(kF))
	}, this.s8 = function(s9) {
		aE.hu || (aE.lQ ? bB.rn.sA(aE.fU, s9) : b1.rt.sB(s9))
	}, this.iZ = function(sC) {
		aE.hu || (aE.lQ ? bB.rn.iZ(aE.fU, sC) : b1.rt.sD(sC))
	}, this.sE = function() {
		aE.hu || (aE.lQ ? bB.rn.sE(aE.fU) : b1.rt.sF())
	}, this.iW = function() {
		aE.hu || (aE.lQ ? bB.rn.iW(aE.fU) : b1.rt.s7(513))
	}, this.iE = function(jO, fW, kF) {
		aE.hu || (aE.lQ ? bB.rn.iE(aE.fU, jO, fW, kF) : b1.rt.sG(jO, fW, kF))
	}
}

function rr() {
	this.l9 = function(player, ry, iU) {
		bD.h6.sH(player, iU, ry) && (af.rx(player, ry), !bD.h6.kT(ry)) && ap.jt.ki[ry] && ap.jt.ki[ry]--
	}, this.sI = function(player, ry, iU) {
		bD.h6.sJ(iU, ry) ? ao.et(ry, bR.gH[0]) && (bu.sK(player, ry, bR.gH[0], 1), bD.h6.h9(ry, bR.gH[0]), bg.sL(player, ry), ag.sM(ry, bR.gH[0])) : bg.hA(player, iU, 12)
	}
}

function rm() {
	this.sN = function(s9, player) {
		aE.hu || (aO.s8(aE.fU, player, s9), b1.rt.sO(s9, player))
	}, this.sP = function(player) {
		aE.hu || (aO.sQ(player, 0), b1.rt.sR(player))
	}, this.sS = function(sT, player) {
		aE.hu || (aO.sU(sT, player), b1.rt.sV(sT, player))
	}, this.sW = function() {
		aE.lQ || aE.ht || aE.hu || b1.sX.sW()
	}
}

function rq() {
	this.ep = function(aD) {
		var id, gT, oR;
		for (bK.dv(aD), bK.eT += 2, oR = 8 * bK.size; bK.eT + 8 <= oR;) id = bK.sY(4), gT = bK.sY(9), 0 === id ? this.sZ(id, gT, bK.sY(22)) : 1 === id ? this.sZ(id, gT, bK.sY(10), bK.sY(10)) : 2 === id ? this.sZ(id, gT, bK.sY(10), bK.sY(9)) :
			3 === id ? this.sZ(id, gT, bK.sY(10), bK.sY(27)) : 4 === id ? this.sZ(id, gT, bK.sY(10), bK.sY(16)) : 5 === id || 6 === id ? this.sZ(id, gT, bK.sY(10)) : 7 === id ? this.sZ(id, gT, bK.sY(1)) : 10 === id ? this.sZ(id, gT, bK.sY(20), bK
				.sY(22)) : this.sZ(id, gT)
	}, this.sa = [], this.sb = function() {
		for (var sd = 0, se = 0, sf = 0, sg = 0, sh = 0, si = 0, aC = 0; aC < 512; aC++) sd += ah.ni[aC], se += ah.hY[aC], sf += ah.hm[aC], sg += bQ.z.lA[aC];
		sh += bQ.z.mw, si += am.lc, this.sa.push(sf % 1073741824 * 4 + (sd + se + sg + sh + si) % 4)
	}, this.sZ = function(id, gT, gV, gX) {
		0 === id ? bB.rn.iC(gT, gV) : 1 === id ? bB.rn.iI(gT, gV, gX) : 2 === id ? bB.rn.rz(gT, gV, gX) : 3 === id ? bB.rn.iN(gT, gV, gX) : 4 === id ? bB.rn.iQ(gT, gV, gX) : 5 === id ? bB.rn.s6(gT, gV) : 6 === id ? bB.rn.sA(gT, gV) : 7 === id ?
			bB.rn.iZ(gT, gV) : 8 === id ? bB.rn.sE(gT) : 9 === id ? bB.rn.sj(gT) : 10 === id && bB.rn.iE(gT, gV >> 10, gX, gV % 1024)
	}
}

function ro() {
	this.iC = function(player, fW) {
		bD.h6.hw(0) && bD.h6.hx(player) && bP.jT(fW) && (bC.sk.sl(0, player, fW), aE.sm.et(player, fW))
	}, this.iI = function(player, jO, kF) {
		bD.h6.hw(1) && bD.h6.hx(player) && bD.h6.sn(player, kF) && bD.h6.nE(player, jO, 12, 0) && bD.h6.so(player, kF) && ((kF = ae.kR(player, bR.fg[0])) || ae.kk(player)) && (ah.sp[player]++, bC.sk.sl(1, player, jO, bR.fg[0]), ap.jr.k5(player,
			kF)) && (bD.h6.nG(player), bg.sq(player, jO), ap.jr.kB(player))
	}, this.rz = function(player, jO, ry) {
		bD.h6.hw(1) && bD.h6.hx(player) && aE.ih && bD.h6.sn(player, ry) && bD.h6.sr(player, ry) && bD.h6.sH(player, bD.h6.jN(player, jO), ry) && ao.et(ry, bR.gH[0]) && (bC.sk.sl(2, player, jO, ry), af.rx(player, ry))
	}, this.iN = function(player, jO, s1) {
		bR.gM[1] = 7 & s1;
		var fW = s1 >> 3;
		bD.h6.hw(1) && bD.h6.hx(player) && bP.jT(fW) && bQ.nC.nD(player) && bQ.nC.ss(fW) && bD.h6.nE(player, jO, 32, 0) && bQ.lt.st(player, fW, 1) && (bg.su(player), bC.sk.sl(3, player, jO, s1), bD.h6.nG(player), bo.sv.iN(player), bQ.z.nH(
			player))
	}, this.iQ = function(player, jO, o6) {
		849 === jO ? this.s5(player, o6) : bD.h6.hw(1) && bD.h6.hx(player) && bD.h6.nE(player, jO, 32, 0) && bQ.iO.sw(player, o6) && (bg.su(player), bC.sk.sl(4, player, jO, o6), bD.h6.nG(player), bo.sv.iQ(player), bQ.z.nH(player))
	}, this.s5 = function(player, o6) {
		bD.h6.hw(1) && bD.h6.hx(player) && bQ.sx.ep(player, o6) && bC.sk.sl(4, player, 849, o6)
	}, this.s6 = function(player, kF) {
		513 === kF ? this.iW(player) : bD.h6.hw(1) && bD.h6.hx(player) && (kF = Math.min(kF, aE.fh), ae.kR(player, kF)) && (bC.sk.sl(5, player, kF), ae.sy(player, kF))
	}, this.sA = function(player, s9) {
		(bD.h6.hw(1) || bD.h6.hw(2)) && bD.h6.hx(player) && (s9 = bO.iw(s9, 0, 1023), bC.sk.sl(6, player, s9), ag.sz(player, 0, s9))
	}, this.iZ = function(player, sC) {
		ax.iY(player) && (bC.sk.sl(7, player, sC), ax.t0(player, sC))
	}, this.sE = function(player) {
		(bD.h6.hw(0) || bD.h6.hw(1)) && bD.h6.hx(player) && aN.t1(player) && (bC.sk.sl(8, player), bT.sE(player))
	}, this.sj = function(player) {
		bC.sk.sl(9, player), bT.sj(player)
	}, this.iW = function(player) {
		ax.ia(player) && (bC.sk.sl(5, player, 513), ax.iW(player))
	}, this.iE = function(player, jO, fW, kF) {
		bD.h6.hw(1) && bD.h6.hx(player) && bD.h6.sn(player, kF) && bD.h6.so(player, kF) && bP.jT(fW) && an.fL.fe(player, fW) && (ae.kR(player, bR.fg[0]) || ae.kk(player)) && (bC.sk.sl(10, player, (jO << 10) + bR.fg[0], fW), kF = bD.h6.mI(player,
			jO), ah.hC[player].push(bR.fl[0]), ae.et(player, kF, bR.fg[0]), aG.kD(player, !0), bg.t2(player))
	}
}

function t3() {
	var t5;
	this.t4 = [], this.t5 = document.createElement("div"), this.t6 = function(pY, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pY, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.t5.appendChild(
			title), title
	}, this.t7 = function(pY, marginBottom) {
		var t8 = document.createElement("p");
		return t8.textContent = pY, t8.style.fontSize = "0.75em", t8.style.lineHeight = "1.2em", t8.style.marginBottom = marginBottom || "0", this.t5.appendChild(t8), t8
	}, this.t9 = function(pY) {
		var tA = document.createElement("p");
		return tA.textContent = pY, tA.style.fontSize = "1em", tA.style.marginBottom = "0", tA.style.whiteSpace = "pre-wrap", tA.style.overflowWrap = "break-word", this.t5.appendChild(tA), tA
	}, this.tB = function(tC, fontSize) {
		var t5 = document.createElement("div");
		return t5.innerHTML = tC, t5.style.fontSize = fontSize || "1em", t5.style.lineHeight = "1.2em", this.t5.appendChild(t5), t5
	}, this.tD = function(tE) {
		for (var tF = tE.tF, fk = tF.length, aC = 0; aC < fk; aC++) this.t5.appendChild(tF[aC])
	}, this.tG = function(q5) {
		return this.t4.push(q5), this.t5.appendChild(q5.e), q5
	}, this.resize = function() {
		for (var fk = this.t4.length, aC = 0; aC < fk; aC++) this.t4[aC].resize && this.t4[aC].resize()
	}, (t5 = this.t5).style.position = "absolute", t5.style.height = "auto", t5.style.padding = "0.5em"
}

function tH(tI, tJ) {
	var t5 = document.createElement("div");

	function tR() {
		var aC, qF, k, hJ, fn, tN = i.l * t5.offsetWidth,
			tS = new Float64Array(function(tN) {
				var j = .25 * bD.tO.tP(.6) * i.iy;
				return Math.max(Math.floor(tN / j), 1)
			}(tN)),
			tT = bf.tT,
			tU = (tN - (tS.length + 1) * bf.gap) / (tS.length * i.l);
		for (tS.fill(tT), aC = 0; aC < tJ.length; aC++) qF = (fn = tJ[aC].t5).style, k = bD.tV.min(tS), hJ = tS.indexOf(k), qF.top = bD.tO.tW(k), qF.left = bD.tO.tW(tT + hJ * (tU + tT)), qF.width = bD.tO.tW(tU), bD.tO.tX(fn, 5), tS[hJ] += fn
			.offsetHeight + 3 * tT;
		t5.style.height = bD.tO.tW(bD.tV.max(tS) - 2 * tT)
	}
	this.tK = t5, this.tL = tJ, this.resize = function() {
		var aC;
		for (aC = 0; aC < tJ.length; aC++) tJ[aC].resize();
		tR(), tR()
	}, t5.style.width = "100%", t5.style.maxWidth = "100%", tI.style.lineHeight = "1.5em", tI.style.overflowX = "hidden", tI.style.overflowY = "auto";
	for (var aC = 0; aC < tJ.length; aC++) t5.appendChild(tJ[aC].t5);
	tI.appendChild(t5)
}

function x(tY, tZ, ta, tb, tc) {
	var self, td = document.createElement("button"),
		tg = (this.button = td, this.te = tZ, this.tf = ta, 0);

	function tl() {
		var ts;
		bM.tr() || (tg = 1, ts = bD.color.tt(ta), !1 !== tb && 0 < ts[0] && ts[0] < 255 && ts[0] === ts[1] && ts[0] === ts[2]) || (128 < ts[0] && 128 < ts[1] && 128 < ts[2] ? td.style.backgroundColor = bD.color.tu(ta, -50) : td.style
			.backgroundColor = bD.color.tu(ta, ts[3] && ts[3] < 120 ? 150 : 50))
	}

	function tk() {
		if (tb) {
			var ts = bD.color.tt(ta);
			if (ts[0] === ts[1] && ts[0] === ts[2]) return
		}
		tZ && ((ts = tZ(this)) ? 2 === ts && tl() : tw(this))
	}

	function tn() {
		tg = 0, this.style.backgroundColor = ta
	}

	function tm() {
		tw(this)
	}

	function tw(fn) {
		tg = 0, fn.style.backgroundColor = ta, fn.blur()
	}
	this.tj = function(tp) {
		tp = 1.1 - Math.min(.01 * tY.length, .6) + .2 * tp;
		td.style.fontSize = tp.toFixed(1) + "em"
	}, this.ti = function(eu) {
		eu ? 1 === eu ? eu = bE.qb : 2 === eu && (tb = 1, eu = bE.qb) : (tb = 0, eu = bE.qL), this.tf = ta = eu, td.style.backgroundColor = eu, tg && tl()
	}, self = this, td.innerHTML = tY, td.style.color = tc ? bE.rU : bE.qP, td.style.userSelect = "none", td.style.outline = "none", td.style.overflowWrap = "break-word", self.ti(ta), td.style.border = "none", td.style.font = "inherit", self.tj(
		0), td.style.padding = "0em 0.3em", td.onclick = tk, td.addEventListener("mouseover", tl), td.addEventListener("mouseout", tm), td.addEventListener("focus", tl), td.addEventListener("blur", tn)
}

function tx(p9, tI) {
	var t5;
	this.resize = function() {
		for (var aC = 0; aC < p9.length; aC++) bD.tO.tX(p9[aC].button);
		t5.style.gap = t5.style.padding = bD.tO.tW(bf.tT)
	}, (t5 = document.createElement("div")).style.display = "grid", t5.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", t5.style.overflowY = "auto", t5.style.gridAutoRows = "5.3em", t5.style.maxHeight = "100%";
	for (var aC = 0; aC < p9.length; aC++) p9[aC].tj(1), t5.appendChild(p9[aC].button);
	tI.appendChild(t5)
}

function tz(u0, u1, u2) {
	this.fr = 0, this.ft = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.tO.tP(u2 || .5) * u0[1] * i.iy, i.k - 2 * bf.gap), this.j = Math.min(this.k * (u0[0] / u0[1]), i.j - 2 * bf.gap), this.k = u0[1] * this.j / u0[0], this.fr = bf.gap + u1[0] * (i.j - this.j - 2 * bf.gap), this.ft = bf
			.gap + u1[1] * (i.k - this.k - 2 * bf.gap)
	}, this.u3 = function() {
		return this.fr + .5 * this.j
	}
}

function u4(u5, u6) {
	var uE, uF, self, q8 = document.createElement("div"),
		u7 = document.createElement("div"),
		u8 = document.createElement("div"),
		u9 = null,
		uG = (this.uA = new uB({
			value: "",
			eT: -1
		}, 0, uC, function(e) {
			e.target.value = bD.pc.uM(e.target.value), u9.uL.textContent = 255 - e.target.value.length, c0.pO.pZ(e.target.value)
		}), new uH(0)),
		uI = 0;

	function uC() {
		u5()
	}
	this.uK = function() {
			u9.uL.textContent = 255 - this.uA.e.value.length, c0.pO.pZ(this.uA.e.value)
		}, this.show = function(tI) {
			tI.appendChild(q8), tI.appendChild(u8), this.resize(tI)
		}, this.uN = function(tI) {
			u.removeChild(tI, q8), u.removeChild(tI, u8)
		}, this.resize = function(tI) {
			uI = tI ? tI.offsetHeight : uI;
			var tI = bD.tO.uP(.04, .75),
				uQ = Math.max(tI, uI - tI),
				uR = i.j / i.l,
				uS = .7 * uR,
				uT = bD.tO.tW(uI - tI - uQ),
				uQ = (u8.style.height = bD.tO.tW(tI), q8.style.height = bD.tO.tW(uQ), i.k > i.j || a1.a2.ix() ? (u8.style.top = uT, q8.style.top = bD.tO.tW(uI - uQ), bD.tO.tX(q8, 8)) : (q8.style.top = uT, u8.style.top = bD.tO.tW(uI - tI), bD.tO.tX(
						q8, 2)), uF.button.style.width = bD.tO.tW(tI), uG.resize(.6 * tI), this.uA.e.style.left = bD.tO.tW(tI), this.uA.e.style.width = bD.tO.tW(uS - tI), this.uA.e.style.fontSize = uE.button.style.fontSize = bD.tO.tW(.5 * tI), bD.tO
					.tX(this.uA.e, 6), uE.button.style.left = bD.tO.tW(uS), uE.button.style.width = bD.tO.tW(uR - uS), .385 * tI);
			a1.a2.ix() && (uQ *= .8 - .12 * (i.j > i.k)), u7.style.marginLeft = u7.style.marginRight = bD.tO.tW(.5 * uQ), u7.style.fontSize = bD.tO.tW(uQ), c0.pM.q1(1)
		}, (self = this).uA.e.maxLength = 255, q8.style.position = "absolute", q8.style.left = "0", q8.style.width = "100%", q8.style.overflowX = "hidden", q8.style.overflowY = "auto", q8.style.font = "inherit", q8.style.backgroundColor = bE.qN, u7
		.style.font = "inherit", u8.style.position = "absolute", u8.style.left = "0", u8.style.width = "100%", self.uA.e.setAttribute("placeholder", L(20)), self.uA.e.style.position = "absolute", self.uA.e.style.top = "0", self.uA.e.style.height =
		"100%", self.uA.e.style.backgroundColor = bE.qK, self.uA.e.style.textAlign = "center", (uE = new x(L(21), uC)).button.top = "0", uE.button.style.position = "absolute", uE.button.style.height = "100%", uE.ti(bE.rj), u9 = new uJ("255", uE
			.button, 1, 1), (uF = new x("", function() {
			return c0.pO.pX(self.uA.e.value), uF.ti(c0.pO.pW() ? bE.qo : bE.rj), 0
		})).button.style.position = "absolute", uF.button.style.top = "0", uF.button.style.left = "0", uF.button.style.height = "100%", uF.button.style.padding = "0", uF.ti(bE.rj), uG.canvas.style.display = "block", uG.canvas.style.margin = "auto",
		uF.button.appendChild(uG.canvas), q8.appendChild(u7), u8.appendChild(uF.button), u8.appendChild(self.uA.e), u8.appendChild(uE.button), c0.dv(q8, u7)
}

function uV(uW, tY, uX) {
	function click() {
		var value = 1 - uW.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + tY, void 0 !== uW.eT ? bm.rv.q1(uW.eT, value) : uW.value = value, uX && uX(value)
	}
	var e;
	tY = tY || L(22), this.e = document.createElement("p"), (e = this.e).textContent = (uW.value ? "🟩 " : "⬜ ") + tY, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function uY(tI, tC) {
	var t5 = document.createElement("div");
	this.tK = t5, this.resize = function() {
		t5.style.padding = bD.tO.tW(bf.tT), t5.style.lineHeight = bD.tO.tW(bD.tO.uP(.035))
	}, tI.style.overflowX = "hidden", tI.style.overflowY = "auto", t5.innerHTML = tC, tI.appendChild(t5)
}

function uZ(ua) {
	var t5 = document.createElement("div");
	this.e = t5, this.ub = ua, this.resize = function() {
		for (var fk = ua.length, aC = 1; aC < fk; aC++) bD.tO.tX(ua[aC], 4)
	};
	var aC, fk = ua.length;
	for (t5.style.width = "100%", t5.style.height = "2.7em", t5.style.marginTop = "0.6em", t5.style.border = "inherit", aC = 0; aC < fk; aC++) ua[aC].style.verticalAlign = "top", ua[aC].style.width = (100 / fk).toFixed(2) + "%", ua[aC].style.height =
		"100%", ua[aC].style.fontSize = "0.75em", t5.appendChild(ua[aC])
}

function uc(ud, ta, ue, uf) {
	this.t5 = document.createElement("div"), this.p9 = ud;
	var ug = 0;
	this.resize = function(tI, ui) {
		var fk = ud.length;
		if (!ue)
			for (var aC = 1; aC < fk; aC++) bD.tO.tX(ud[aC].button, 4);
		if (uf)
			for (aC = 0; aC < fk; aC++) ud[aC].button.style.width = uf[aC] + "%";
		else {
			for (var uj = 0, aC = 0; aC < fk; aC++) uj += ud[aC].button.offsetWidth;
			if (tI && (ug = tI.offsetWidth), ui && uj < ug)
				for (aC = 0; aC < fk; aC++) ud[aC].button.style.width = (100 * ud[aC].button.offsetWidth / uj).toFixed(2) + "%";
			else
				for (aC = 0; aC < fk; aC++) ud[aC].button.style.width = "auto";
			ui || this.resize(tI, 1)
		}
	};
	var uh = this;
	uh.t5.style.height = uh.t5.style.maxHeight = "100%";
	for (var aC = 0; aC < ud.length; aC++) ud[aC].ti(ta), ud[aC].button.style.height = "100%", ud[aC].button.style.padding = "0.0em 0.9em", ud[aC].button.style.whiteSpace = "pre", uh.t5.appendChild(ud[aC].button)
}

function dq() {
	var uk = 2e3,
		ul = 2,
		um = document.createElement("div"),
		un = 0,
		uo = "",
		up = 0,
		uq = 0,
		ur = 0;

	function uu(ut) {
		clearTimeout(ur), up = ut.clientX, uq = ut.clientY, ur = setTimeout(uw, uk)
	}

	function uv(ut) {
		var j8;
		!uo || (j8 = ut.clientX - up) * j8 + (j8 = ut.clientY - uq) * j8 < ul * ul || (fG(), uu(ut))
	}

	function uw() {
		var j, gap, uy, k;
		uo && !bM.tr() && (um.textContent = uo, um.style.font = bD.tO.ux(0, bD.tO.uP(.014)), um.style.maxWidth = bD.tO.uP(.3) + "px", bD.tO.tX(um, 5), un = 1, document.body.appendChild(um), j = um.offsetWidth, k = um.offsetHeight, gap = bD.tO.uP(
			.012), uy = i.j / i.l, (k = uq - k - gap) < 0 && (k = uq + 2 * gap), um.style.left = bO.iw(up - j / 2, 0, Math.max(0, uy - j)) + "px", um.style.top = k + "px")
	}

	function fG() {
		un && (un = 0, u.removeChild(document.body, um))
	}
	this.us = function(e, pY) {
		e.addEventListener("mouseover", function(ut) {
			uo = pY, uu(ut)
		}), e.addEventListener("mousemove", uv), e.addEventListener("mouseout", by.uN), e.addEventListener("click", by.uN)
	}, this.uN = function() {
		clearTimeout(ur), uo = "", fG()
	}, um.style.position = "fixed", um.style.backgroundColor = bE.qL, um.style.color = bE.qP, um.style.pointerEvents = "none", um.style.zIndex = "6", um.style.padding = "0.2em 0.5em"
}

function uz() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.tO.tX(this.e, 8, bE.qY)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function v0() {
	var up, uq, um = document.createElement("div"),
		v1 = document.createElement("div"),
		un = 0,
		v2 = 0;
	this.show = function(fr, ft, pY, v3, v4, eu) {
			if (un) {
				if (!v3) return;
				this.uN()
			}
			fr === ft && -1 === fr ? (fr = up, ft = uq) : (up = fr, uq = ft);
			var v5 = Math.floor(bD.tO.uP(.018)),
				v4 = (fr = Math.max(v5 + 2, fr), v4 || (v2 = v3), un = 1, i.j / i.l),
				v3 = (um.style.whiteSpace = "pre", um.textContent = pY, bD.tO.tX(um, 5), um.style.font = bD.tO.ux(0, bD.tO.uP(.015)), um.style.padding = "0.3em 0.6em", um.style.left = fr + "px", um.style.top = "0px", document.body.appendChild(um),
					fr + um.offsetWidth - v4),
				pY = (0 < v3 && (fr -= v3, fr = Math.max(v5 + 1, fr), um.style.left = fr + "px", fr < v5 + 2) && (um.style.whiteSpace = "pre-wrap"), um.offsetHeight);
			um.style.top = ft - pY + v2 * bf.v8 + "px", fr -= v5, v1.style.backgroundColor = bD.color.qH(eu >> 12 << 2, (eu >> 6 & 63) << 2, (63 & eu) << 2), v1.style.left = fr + "px", v1.style.top = um.style.top, v1.style.width = v5 + "px", v1.style
				.height = pY + "px", bD.tO.tX(v1, 4), bD.tO.tX(v1, 8), bD.tO.tX(v1, 2), document.body.appendChild(v1)
		}, this.uN = function(v9) {
			if (un) {
				if (v9 && v2) return 0;
				un = 0, u.removeChild(document.body, um), u.removeChild(document.body, v1)
			}
			return 1
		}, um.style.position = "absolute", um.style.backgroundColor = bE.qL, um.style.color = bE.qP, um.style.pointerEvents = "none", um.style.zIndex = "5", um.style.maxWidth = "100%", v1.style.position = "absolute", v1.style.color = bE.qP, v1.style
		.pointerEvents = "none", v1.style.zIndex = "5"
}

function uB(vA, type, vB, vC) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.vD++, e.value = vA.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.qP, e.style.backgroundColor = bE.qI, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.vE++
		}), e.addEventListener("blur", function() {
			i.vE--, -1 !== vA.eT && bm.rv.q1(vA.eT, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== vA.eT && bm.rv.q1(vA.eT, e.value), vB ? vB() : e.blur())
		}), vC && e.addEventListener("input", function(q5) {
			vC(q5)
		})
}

function vF(tI, data, vG) {
	var fk = data.vH.length,
		vI = document.createElement("div"),
		vJ = document.createElement("div"),
		pR = document.createElement("div"),
		vK = new Array(fk),
		tJ = new Array(fk),
		vL = new Array(data.vM.length),
		vN = bD.color.qJ(70, 70, 0, .35);

	function tu() {
		this.style.backgroundColor = bD.color.tu(vN, 160)
	}

	function vU() {
		this.style.backgroundColor = vN
	}

	function tR() {
		var g3;
		for (tI.style.font = bD.tO.ux(0, bD.tO.vb(.026, .5, .03)), aC = 1; aC < vL.length; aC++) bD.tO.tX(vL[aC], 4);
		if (bD.tO.tX(vI, 2), fk) {
			for (var iD, vc = vI.offsetWidth, vd = pR.offsetWidth, aC = 0; aC < vL.length; aC++) iD = .01 * data.vT[aC] * vd, vL[aC].style.width = (100 * iD / vc).toFixed(2) + "%";
			var m1 = data.vH[0].length;
			for (aC = 0; aC < fk; aC++)
				for (bD.tO.tX(vK[aC], 2), g3 = 1; g3 < m1; g3++) bD.tO.tX(tJ[aC][g3], 4);
			vJ.vO && (vJ.scrollTop = vJ.vO)
		}
	}
	this.resize = function() {
			tR(), tR()
		}, tI.style.display = "flex", tI.style.flexDirection = "column", vJ.style.overflowX = "hidden", vJ.style.overflowY = "auto", vJ.addEventListener("scroll", function() {
			this.vO = this.scrollTop, vG && vG.vP && (u.z.vQ[vG.vP] = this.scrollTop)
		}),
		function() {
			var fn, aC, vH = data.vH,
				m1 = fk ? vH[0].length : 0;
			for (aC = 0; aC < fk; aC++) {
				vK[aC] = document.createElement("div"), vK[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.qJ(130, 130, 130, .35) : bE.qO
				}(aC), vK[aC].style.width = "100%", vK[aC].style.display = "flex", tJ[aC] = new Array(m1);
				for (var g3 = 0; g3 < m1; g3++) tJ[aC][g3] = fn = document.createElement("div"), fn.style.display = "flex", fn.style.justifyContent = "center", fn.style.wordBreak = "break-all", fn.style.padding = "0.4em 0em", fn.style.width = data
					.vT[g3] + "%", fn.textContent = vH[aC][g3].gC, 1 === vH[aC][g3].el && (fn.name = "" + aC, fn.style.color = bE.rU, fn.style.backgroundColor = vN, fn.addEventListener("mouseover", tu), fn.addEventListener("mouseout", vU), function(
						fn, pg, vW) {
						2147483647 !== vW && fn.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, pg), bK.dv(bG.aD), this.style.backgroundColor = vN, u.v(8, u.vX, new vY(25, {
								action: 0,
								pg: bI.fB.vZ(bI.fB.va(5)),
								vW: vW
							}))
						})
					}(fn, vH[aC][g3].pg, vH[aC][g3].vW)), vK[aC].appendChild(fn)
			}
			for (vI.style.display = "flex", vI.style.backgroundColor = bD.color.qJ(0, 120, 0, .35), aC = 0; aC < vL.length; aC++) vL[aC] = fn = document.createElement("div"), fn.style.display = "flex", fn.style.justifyContent = "center", fn.style
				.wordBreak = "break-all", fn.style.padding = "0.4em 0em", fn.style.width = data.vT[aC] + "%", fn.innerHTML = data.vM[aC], vI.appendChild(fn)
		}();
	for (var aC = 0; aC < fk; aC++) pR.appendChild(vK[aC]);
	vJ.appendChild(pR), tI.appendChild(vI), tI.appendChild(vJ), vG && vG.vP && (vJ.vO = u.z.vQ[vG.vP])
}

function ve() {
	var vi, vj, vf = document.createElement("div"),
		vg = document.createElement("div"),
		vh = document.createElement("div"),
		pR = document.createElement("div"),
		p9 = [],
		eO = [L(23), L(24), L(25), L(26), L(27), L(28), L(29), L(30)],
		vk = [1, 2, 3, 0, 9, 10, 11, 13];

	function vm(aC) {
		u.v(8, 0, new vY(21, {
			vo: vk[aC],
			vp: 0,
			vq: 10
		}))
	}
	this.show = function() {
			this.q1(u.z.vr), document.body.appendChild(vf)
		}, this.uN = function() {
			u.removeChild(document.body, vf)
		}, this.q1 = function(vr) {
			for (var vs = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < p9.length; aC++) {
				var j = vr[aC];
				vi[vs[aC]][1].uL.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, vt = bf.gap,
				k = bD.tO.vu(.085),
				j = Math.min(4 * k, i.j - 2 * vt),
				fk = p9.length;
			for (bD.tO.vv(vf, vt, i.k - vt - k, j, k), bD.tO.tX(vf), bD.tO.tX(vg, 6), aC = 0; aC < fk - 1; aC++) bD.tO.tX(p9[aC].button, 6);
			for (aC = 0; aC < fk; aC++) vi[aC][0].resize(), vi[aC][1].resize();
			for (p9[0].fr = 0, p9[0].button.style.left = bD.tO.tW(p9[0].fr), p9[0].button.style.width = bD.tO.vw(1.7 * k), aC = 1; aC < fk; aC++) p9[aC].fr = p9[aC - 1].fr + p9[aC - 1].button.offsetWidth, p9[aC].button.style.left = bD.tO.tW(p9[aC]
				.fr);
			if (!vj) {
				if (!ac.vx()) return;
				(vj = ac.get(14)).style.width = "24%", vj.style.position = "absolute", vg.appendChild(vj)
			}
			vj.style.left = bD.tO.tW(0), vj.style.top = "7%", vh.vy && (vh.scrollLeft = vh.vy)
		}, vf.style.position = "absolute", vg.style.width = "25%", vg.style.height = "100%", vg.style.backgroundColor = bE.qL, vh.style.position = "absolute", vh.style.width = "75%", vh.style.height = "100%", vh.style.backgroundColor = bE.qL, vh
		.style.top = vh.style.right = bD.tO.tW(0), bD.tO.vl(vh), pR.style.height = pR.style.maxHeight = "100%", p9.push(new x("", function() {
			vm(0)
		}, bE.rB)), p9.push(new x("", function() {
			vm(1)
		}, bE.rC)), p9.push(new x("", function() {
			vm(2)
		}, bE.r4)), p9.push(new x("", function() {
			vm(3)
		}, bE.qn)), p9.push(new x("", function() {
			vm(4)
		}, bE.rf)), p9.push(new x("", function() {
			vm(5)
		}, bE.rb)), p9.push(new x("", function() {
			vm(6)
		}, bE.rf)), p9.push(new x("", function() {
			vm(7)
		}, bE.qG)), vi = new Array(p9.length);
	for (var aC = 0; aC < p9.length; aC++) p9[aC].button.style.position = "absolute", vi[aC] = [new vn(eO[aC], p9[aC].button, .25, .45), new vn("", p9[aC].button, .53, .84, 1)], p9[aC].button.style.height = p9[aC].button.style.maxHeight = "100%", p9[
		aC].button.top = bD.tO.tW(0), pR.appendChild(p9[aC].button);
	vh.appendChild(pR), vf.appendChild(vg), vf.appendChild(vh)
}

function vz(w0, w1, u5, u6, w2) {
	var w3 = document.createElement("div"),
		w4 = document.createElement("div"),
		w5 = document.createElement("div"),
		pr = document.createElement("div"),
		w6 = document.createElement("div"),
		w7 = document.createElement("div"),
		w8 = document.createElement("span"),
		w9 = document.createElement("div"),
		wF = (this.wA = new u4(u5, u6), this.wB = new wC(u6), this.wD = new wE(w2), 2);
	this.wJ = function(wK) {
		wK = (wK / 10).toFixed(1) + "%";
		w7.style.width = wK, w8.innerHTML = wK
	}, this.wL = function(wM) {
		(0 === wF ? this.wA : 1 === wF ? this.wB : this.wD).uN(pr), (0 === (wF = wM) ? this.wA : 1 === wM ? this.wB : this.wD).show(pr)
	}, this.wN = function() {
		return w4
	}, this.show = function() {
		document.body.appendChild(w3)
	}, this.uN = function() {
		u.removeChild(document.body, w3)
	}, this.resize = function() {
		var wO = 1 - .4 * a1.a2.ix() * (i.j > 1.6 * i.k),
			wP = bD.tO.uP(.05 * wO),
			wQ = 1.3 * wP,
			wR = i.k > i.j,
			wS = bD.tO.uP(.06 * wO + .03 * wR),
			wR = bD.tO.uP(.02 * wO + .01 * wR),
			wU = bD.tO.uP(.025);
		w3.style.font = bD.tO.ux(0, wU), w5.style.font = bD.tO.ux(0, .9 * wU), w9.style.font = bD.tO.ux(0, .9 * wU), wO < 1 && (wO = bD.tO.ux(0, wO * wU), w5.style.font = wO, w9.style.font = wO, w6.style.font = wO), w4.style.height = bD.tO.tW(
			wQ), w4.style.font = bD.tO.ux(0, .72 * wP), bD.tO.tX(w4, 2), w5.style.top = bD.tO.tW(wQ), w5.style.height = bD.tO.tW(wS), bD.tO.tX(w5, 2), pr.style.top = bD.tO.tW(wQ + wS), pr.style.height = bD.tO.tW(i.k / i.l - wQ - 2 * wS - wR), w6
			.style.top = bD.tO.tW(i.k / i.l - wS - wR), w6.style.height = bD.tO.tW(wR), bD.tO.tX(w6, 8), w8.style.font = bD.tO.ux(0, .8 * wR), w9.style.top = bD.tO.tW(i.k / i.l - wS), w9.style.height = bD.tO.tW(wS), bD.tO.tX(w9, 8), w0.resize(
			w3), w1.resize(w3), 0 === wF ? this.wA.resize(pr) : (1 === wF ? this.wB : this.wD).resize()
	};
	u5 = this;
	w3.style.position = "absolute", w3.style.top = "0", w3.style.left = "0", w3.style.width = "100%", w3.style.height = "100%", w3.style.backgroundColor = bE.qO, bM.tr() || (w3.style.backdropFilter = "blur(4px)", w3.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (w3.style.display = "none"), w4.style.position = "absolute", w4.style.top = "0", w4.style.left = "0", w4.style.width = "100%", w4.style.display = "flex", w4.style.alignItems = "center", w4.translate = !1;
	for (var h = [w5, w9], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.tO.vl(h[aC]);
	pr.style.position = "absolute", pr.style.left = "0", pr.style.width = "100%", pr.style.font = "inherit", w6.style.position = "absolute", w6.style.left = "0", w6.style.width = "100%", w7.style.position = "absolute", w7.style.top = "0", w7.style
		.left = "0", w7.style.height = "100%", w7.style.width = "50%", w7.style.backgroundColor = bE.ql, w8.innerHTML = "", w8.style.position = "absolute", w8.style.top = "50%", w8.style.left = "50%", w8.style.transform = "translate(-50%, -50%)", w8
		.translate = !1, w4.appendChild(function() {
			var wI = document.createElement("h1");
			return wI.textContent = L(31), wI.style.margin = "0 auto 0.55em auto", wI.style.fontFamily = "Arial Black, system-ui", wI.style.fontSize = "inherit", wI.style.fontWeight = "inherit", wI
		}()), w5.appendChild(w0.t5), w6.appendChild(w7), w6.appendChild(w8), w9.appendChild(w1.t5), w3.appendChild(w4), w3.appendChild(w5), w3.appendChild(pr), w3.appendChild(w6), w3.appendChild(w9), w3.className = "fx-lobby", pr.className =
		"fx-panel", w6.className = "fx-progress", u5.wD.show(pr)
}

function wE(w2) {
	var w3 = document.createElement("div"),
		wW = [],
		wX = 96,
		wY = ["battleRoyale", "oneVsOne", "zombie", "noFullSending"];

	function wo(e) {
		e.style.position = "absolute", e.style.top = e.style.left = "0", e.style.width = e.style.height = "100%", e.style.pointerEvents = "none"
	}

	function wc(button, x2) {
		var t5 = document.createElement("div");
		return t5.style.position = "absolute", t5.style.left = "0", t5.style.width = "100%", t5.style.height = "20%", t5.style.pointerEvents = "none", t5.style.backgroundColor = bE.qI, x2 ? t5.style.top = "0" : t5.style.bottom = "0", button
			.appendChild(t5), t5
	}

	function wf(x3, x4) {
		var t5 = document.createElement("div");
		return t5.style.position = "absolute", t5.style.top = "0", t5.style.width = "20%", t5.style.height = "100%", x4 ? t5.style.left = "0" : t5.style.right = "0", x3.appendChild(t5), t5
	}

	function wq(x5) {
		var canvas = document.createElement("canvas");
		return canvas.width = canvas.height = 64, wo(canvas), canvas.style.top = canvas.style.left = "10%", canvas.style.width = canvas.style.height = "80%", x5.appendChild(canvas), canvas.getContext("2d", {
			alpha: !0
		})
	}

	function wj(x3, left, right, width) {
		var t5 = document.createElement("div");
		return t5.style.position = "absolute", t5.style.top = "50%", t5.style.transform = "translateY(-50%)", t5.style.left = left, t5.style.right = right, t5.style.width = width, t5.style.textAlign = "left", x3.appendChild(t5), {
			t5: t5,
			wx: x8(t5, 1.9),
			wm: x8(t5, 1)
		}
	}

	function x8(oy, fontSize) {
		var t5 = document.createElement("div");
		return t5.style.fontSize = fontSize + "em", t5.style.lineHeight = "1.1", t5.style.whiteSpace = "nowrap", t5.style.overflow = "hidden", t5.style.textOverflow = "ellipsis", t5.style.textShadow = "0 0 0.25em black", oy.appendChild(t5), t5
	}

	function x9(e, pY) {
		e.textContent !== pY && (e.textContent = pY)
	}

	function xA(q5) {
		q5.canvas && (bq.xB.xV(q5.canvas), q5.canvas = null), q5.ww = ""
	}
	this.nV = function() {
		var tJ = bq.tJ.tJ,
			fk = tJ.length;
		if (fk !== wW.length) {
			for (var aC = 0; aC < wW.length; aC++) xA(wW[aC]);
			for (w3.textContent = "", wW = new Array(fk), aC = 0; aC < fk; aC++) wW[aC] = function(eT) {
				var button = document.createElement("button"),
					wb = (button.style.position = "absolute", button.style.backgroundColor = bE.qO, button.style.color = bE.qP, button.style.outline = "none", button.style.userSelect = "none", button.style.cursor = "pointer", button.style
						.padding = "0", button.style.overflow = "hidden", bD.tO.wa(button, function() {
							w2(eT, 0)
						}, function() {
							w2(eT, 1)
						}), bD.tO.tX(button), wc(button, 1)),
					wd = wc(button, 0),
					we = wf(wb, 0),
					wg = wf(wd, 1),
					wh = wf(wd, 0),
					wi = wj(wb, "3%", "", "74%"),
					wk = wj(wd, "20%", "", "30%"),
					wl = wj(wd, "", "20%", "30%"),
					wn = (wl.t5.style.textAlign = "right", wk.wm.textContent = "Starts in", document.createElement("canvas"));
				return wn.width = wn.height = wX, wo(wn), we.appendChild(wn), (button = {
					button: button,
					wb: wb,
					wd: wd,
					wp: wq(wg),
					wr: wq(wh),
					ws: 0,
					isContest: 0,
					wt: null,
					we: we,
					wn: wn,
					wu: wn.getContext("2d", {
						alpha: !0
					}),
					wv: -1,
					canvas: null,
					ww: "",
					map: wi.wx,
					wy: wi.wm,
					wz: wk.wx,
					x0: wl.wx,
					x1: wl.wm,
					hv: -1
				}).map.translate = !1, button.wy.translate = !1, button.wz.translate = !1, wk.wm.translate = !1, button
			}(aC), w3.appendChild(wW[aC].button);
			this.resize()
		}
		for (aC = 0; aC < fk; aC++) wW[aC].ww !== bq.xB.xC(tJ[aC].fQ, tJ[aC].mapSeed) && xA(wW[aC]);
		for (aC = 0; aC < fk; aC++) {
			var xD = tJ[aC],
				q5 = wW[aC],
				hv = xD.id === bq.tJ.xE ? 1 + bq.tJ.xF : 0,
				hD = bq.tJ.xG(xD);
			x9(q5.map, bV.xH.xI[xD.fQ]), x9(q5.wy, bq.tJ.xJ(xD.wy)), x9(q5.wz, bq.tJ.xK(xD.xL)), x9(q5.x0, hD + (bq.tJ.xM(xD) ? "/" + xD.nd : "")), x9(q5.x1, L(1 === hD ? 32 : 33)), q5.hv !== hv && (q5.hv = hv, q5.wb.style.backgroundColor = q5.wd
				.style.backgroundColor = [bE.qI, bE.qv, bE.rN][hv], bD.tO.tX(q5.button, 5, [bE.qP, bE.qw, bE.rO][hv]), q5.button.classList.toggle("fx-line", !hv)), ! function(q5) {
				!q5.ws && ac.vx() && (q5.ws = 1, q5.wp.drawImage(ac.x7("clock"), 0, 0), q5.wr.drawImage(ac.x7("userIcon"), 0, 0))
			}(q5), ! function(q5, wy) {
				q5.wv === wy || 7 <= wy && !ac.vx() || ((q5.wv = wy) < 7 ? bk.xT(q5.wu, wy + 2, wX) : (q5.wu.clearRect(0, 0, wX, wX), q5.wu.drawImage(ac.x7(wY[wy - 7]), 0, 0, wX, wX)))
			}(q5, xD.wy), ! function(q5, isContest) {
				q5.isContest === isContest || isContest && !ac.vx() || ((q5.isContest = isContest) ? (q5.wt || (q5.wt = function(q5) {
					var xS = ac.x7("crown"),
						canvas = document.createElement("canvas");
					return canvas.width = xS.width, canvas.height = xS.height, canvas.getContext("2d", {
							alpha: !0
						}).drawImage(xS, 0, 0), canvas.style.position = "absolute", canvas.style.top = "50%", canvas.style.left = "50%", canvas.style.width = "55%", canvas.style.height = "auto", canvas.style.transform =
						"translate(-50%, -50%)", canvas.style.opacity = "0.5", canvas.style.pointerEvents = "none", q5.button.insertBefore(canvas, q5.wb), canvas
				}(q5)), q5.wt.hidden = !1) : q5.wt.hidden = !0)
			}(q5, xD.xP), ! function(q5, xD) {
				var canvas;
				q5.canvas || (canvas = bq.xB.xU(xD.fQ, xD.mapSeed)) && (q5.canvas = canvas, q5.ww = bq.xB.xC(xD.fQ, xD.mapSeed), wo(canvas), q5.button.insertBefore(canvas, q5.button.firstChild))
			}(q5, xD)
		}
	}, this.resize = function() {
		var fk = wW.length,
			j = w3.offsetWidth,
			k = w3.offsetHeight;
		if (0 !== fk && 0 !== j && 0 !== k) {
			for (var gap = bD.tO.uP(.012), xW = 0, xX = 1, eu = 1; eu <= fk; eu++) {
				var rows = bO.gB(fk + eu - 1, eu),
					rows = Math.min((j - (eu + 1) * gap) / eu, (k - (rows + 1) * gap) / rows);
				xW < rows && (xW = rows, xX = eu)
			}
			for (var xY = bO.gB(fk + xX - 1, xX), o9 = (j - xX * xW - (xX - 1) * gap) / 2, oA = (k - xY * xW - (xY - 1) * gap) / 2, aC = 0; aC < fk; aC++) {
				var qF = wW[aC].button.style;
				qF.left = bD.tO.tW(o9 + aC % xX * (xW + gap)), qF.top = bD.tO.tW(oA + bO.gB(aC, xX) * (xW + gap)), qF.width = qF.height = bD.tO.tW(xW), qF.fontSize = bD.tO.tW(.05 * xW)
			}
		}
	}, this.show = function(tI) {
		tI.appendChild(w3), this.nV(), this.resize()
	}, this.uN = function(tI) {
		u.removeChild(tI, w3)
	}, w3.style.position = "absolute", w3.style.top = "0", w3.style.left = "0", w3.style.width = w3.style.height = "100%", w3.style.overflow = "hidden", w3.style.font = "inherit"
}

function wC(u6) {
	var uL, x5, w3 = document.createElement("div"),
		pr = document.createElement("div"),
		xZ = null,
		xa = null;
	this.nV = function() {
			pr.textContent = "", bq.xd.xe && bq.xd.uN(1);
			for (var pw = document.createDocumentFragment(), x0 = bq.po.xf, tJ = bq.tJ.tJ, xg = 0, aC = 0; aC < tJ.length; aC++) xg = xg || 8 === tJ[aC].wy;
			for (xZ.style.width = xZ.style.maxWidth = xg ? "11.3em" : "10.3em", aC = 0; aC < x0.length; aC++) {
				var eT = bq.tJ.xh(x0[aC].xi);
				! function(pw, q5, eT, xk) {
					var uL = xZ.cloneNode(!0),
						x5 = uL.firstChild;
					x5.style.backgroundColor = 0 <= eT && q5.xl ? bE.rQ : xa[eT < 0 ? 15 : Math.min(eT, 14)], 0 <= eT && (x5.textContent = "" + (eT + 1));
					uL.lastChild.textContent = bq.lv.xm(q5, xk), uL.style.color = bq.lv.xn(q5.xo), 11 === q5.xo && (uL.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
					__fx.settings.highlightDuplicateIps && (x5 = __fx.utils.getDuplicateIpHighlightColor(q5, bq.po.xf, "aHN")) && (uL.style.backgroundColor = x5, uL.style.borderRadius = "0.3em");
					__fx.settings.highlightSameClan && (eT = __fx.utils.getSameClanHighlightColor(q5, bq.pm, "username")) && (uL.style.backgroundColor ? uL.style.boxShadow = "inset 0 0 0 2px " + eT : uL.style.backgroundColor = eT, uL.style
						.borderRadius = "0.3em");
					bq.lv.xp(q5) && (uL.style.textDecoration = "underline"), q5.xq && (uL.style.textDecorationLine = "underline", uL.style.textDecorationStyle = "dotted");
					uL.onclick = function(e) {
						u6(e, q5)
					}, bM.tr() || (uL.onmouseover = function(e) {
						bq.xd.xr(uL, q5, 1)
					}), pw.appendChild(uL)
				}(pw, x0[aC], eT, 0 <= eT && 8 === tJ[eT].wy)
			}
			pr.appendChild(pw), pr.classList.toggle("fx-wide", !!xg)
		}, this.show = function(tI) {
			tI.appendChild(w3)
		}, this.uN = function(tI) {
			u.removeChild(tI, w3)
		}, this.resize = function() {
			pr.style.fontSize = bD.tO.tW(bD.tO.uP(.02, .3))
		}, w3.style.top = "0", w3.style.left = "0", w3.style.width = w3.style.height = "100%", w3.style.overflowX = "hidden", w3.style.overflowY = "auto", w3.style.font = "inherit", pr.style.font = "inherit", pr.style.margin = "0.4em", w3
		.appendChild(pr), w3.className = "fx-players-scroll", pr.className = "fx-players", (uL = document.createElement("span")).style.cursor = "pointer", uL.style.margin = "0.2em 0.2em 0.2em 0.2em", uL.style.height = uL.style.maxHeight = "1.4em", uL
		.style.whiteSpace = "nowrap", uL.style.overflow = "hidden", uL.style.textOverflow = "ellipsis", uL.style.font = "inherit", uL.style.display = "inline-block", (x5 = document.createElement("span")).style.display = "inline-block", x5.style
		.width = x5.style.height = x5.style.lineHeight = "1.3em", x5.style.marginRight = "0.4em", x5.style.fontSize = "0.8em", x5.style.fontWeight = "bold", x5.style.textAlign = "center", x5.style.color = bE.qG, x5.style.textShadow = "none", x5.style
		.textDecoration = "none", x5.style.pointerEvents = "none", x5.translate = !1, uL.appendChild(x5), uL.appendChild(document.createTextNode("")), xZ = uL, xa = function() {
			for (var h = ["rgb(0,200,0)", "rgb(150,220,0)", "rgb(250,225,0)", "rgb(255,150,0)", "rgb(240,85,0)"], aC = h.length; aC < 15; aC++) h.push("rgb(210,0,0)");
			return h.push("rgb(128,128,128)"), h
		}()
}

function xs(xt) {
	var w3 = document.createElement("div"),
		u8 = document.createElement("div"),
		xu = [];

	function tl() {
		bM.tr() || (this.style.backgroundColor = bD.color.tu(bE.qL, 50))
	}

	function tm() {
		this.style.backgroundColor = bE.qL
	}
	this.q1 = function(xw, xx) {
			xu[2].textContent = xw + 1 + " / " + xx
		}, this.show = function(q5) {
			q5 = bq.lv.py(q5, bq.lv.pz(q5)), u8.appendChild(bq.q7.transform(q5)), document.body.appendChild(w3)
		}, this.resize = function() {
			var k = bD.tO.uP(.03, .5);
			w3.style.width = 10 * k + "px", w3.style.font = bD.tO.ux(1, .75 * k), bD.tO.tX(w3, 4), u8.style.top = k + "px", u8.style.font = bD.tO.ux(0, .55 * k), bD.tO.tX(u8, 2), w3.style.height = k + u8.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.tO.tX(xu[aC], 6), xu[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) xu[aC].style.height = k + "px", bD.tO.tX(xu[aC], 2);
			xu[2].style.width = 4 * k + "px", xu[1].style.left = 2 * k + "px", xu[2].style.left = 4 * k + "px", xu[3].style.left = 8 * k + "px"
		}, this.xy = function() {
			for (var aC = 0; aC < 4; aC++) xu[aC].onclick = null, xu[aC].onmouseover = null, xu[aC].onmouseout = null;
			u.removeChild(document.body, w3), w3 = u8 = xu = null
		}, w3.style.position = "absolute", w3.style.color = bE.qP, w3.style.zIndex = "3", w3.style.right = "0", w3.style.top = "0", u8.style.position = "absolute", u8.style.height = "auto", u8.style.color = bE.qP, u8.style.backgroundColor = bE.qL, u8
		.style.left = "0", u8.style.width = "100%", u8.style.overflowWrap = "break-word", w3.appendChild(u8);
	for (var aC = 0; aC < 4; aC++) xu[aC] = document.createElement("div"), xu[aC].style.position = "absolute", xu[aC].style.backgroundColor = bE.qL, xu[aC].style.color = bE.qP, xu[aC].style.top = "0", xu[aC].style.display = "flex", xu[aC].style
		.justifyContent = "center", xu[aC].style.alignItems = "center", xu[aC].style.userSelect = "none", xu[aC].style.outline = "none", xu[aC].style.font = "inherit", 2 !== (xu[aC].xv = aC) && (xu[aC].onclick = xt, xu[aC].onmouseover = tl, xu[aC]
			.onmouseout = tm), w3.appendChild(xu[aC]);
	xu[0].textContent = "◀", xu[1].textContent = "▶", xu[3].textContent = "✖"
}

function xz(xt) {
	var um = document.createElement("div");

	function tl() {
		bM.tr() || (um.style.backgroundColor = bD.color.tu(bE.qL, 50))
	}

	function tm() {
		um.style.backgroundColor = bE.qL
	}
	this.q1 = function(xx) {
			um.textContent = xx
		}, this.show = function() {
			document.body.appendChild(um)
		}, this.resize = function() {
			var k = bD.tO.uP(.03, .5);
			um.style.width = 2 * k + "px", um.style.height = k + "px", um.style.font = bD.tO.ux(1, .75 * k), bD.tO.tX(um, 4), bD.tO.tX(um, 2)
		}, this.xy = function() {
			um.onclick = null, um.onmouseover = null, um.onmouseout = null, u.removeChild(document.body, um), um = null
		}, um.style.position = "absolute", tm(), um.style.color = bE.qP, um.style.zIndex = "3", um.style.right = "0", um.style.top = "0", um.style.display = "flex", um.style.justifyContent = "center", um.style.alignItems = "center", um.style
		.userSelect = "none", um.style.outline = "none", um.onclick = xt, um.onmouseover = tl, um.onmouseout = tm
}

function y0(ud, y1) {
	var w3 = document.createElement("div"),
		y2 = document.createElement("div"),
		y3 = (y1 = y1 || 1, Math.floor((ud.length + y1 - 1) / y1)),
		y4 = [],
		y5 = [],
		un = (this.fr = 0, this.ft = 0);

	function y8() {
		bq.y9.uN()
	}
	this.p9 = ud, this.show = function(fr, ft, yC) {
			if (un) return [0, 0];
			un = 1, this.fr = fr, this.ft = ft,
				function(self, yC) {
					var j = bD.tO.uP(.16, .7),
						k = y3 * j / 3,
						uy = (j *= y1, i.j / i.l),
						yE = i.k / i.l,
						oL = Math.min(1, Math.min(uy / j, yE / k));
					j *= oL, k *= oL, yC && (self.fr += bD.tO.uP(.03, .5)), self.fr = bO.iw(self.fr, 0, uy - j), self.ft = bO.iw(self.ft, 0, yE - k), y2.style.left = self.fr + "px", y2.style.top = self.ft + "px", y2.style.width = j + "px", y2.style
						.height = k + "px", y2.style.font = bD.tO.ux(0, .3 * k / y3), bD.tO.tX(y2, 5);
					for (var aC = 1; aC < y4.length; aC++) y5[aC][0] && bD.tO.tX(y4[aC], 8), y5[aC][1] && bD.tO.tX(y4[aC], 4)
				}(this, yC), document.body.appendChild(w3)
		}, this.uN = function() {
			un && (un = 0, w3.removeEventListener("click", y8), u.removeChild(document.body, w3))
		},
		function() {
			var aC, fk = ud.length;
			for (aC = 0; aC < fk; aC++) y4.push(ud[aC].button);
			for (aC = fk; 1 < y1 && aC < y3 * y1; aC++) {
				var e = document.createElement("div");
				e.style.backgroundColor = bE.qL, y4.push(e)
			}
			for (aC = 0; aC < y4.length; aC++) y5.push([aC % y3, Math.floor(aC / y3)])
		}();
	for (var aC = 0; aC < ud.length; aC++) new uJ("" + (1 + aC), ud[aC].button, 0, 1);
	w3.style.position = "fixed", w3.style.top = "0", w3.style.left = "0", w3.style.width = "100%", w3.style.height = "100%", w3.style.zIndex = "5", y2.style.position = "absolute",
		function() {
			if (1 < y1) ! function() {
				y2.style.display = "grid", y2.style.gridTemplateColumns = "repeat(" + y1 + ", 1fr)", y2.style.gridTemplateRows = "repeat(" + y3 + ", 1fr)";
				for (var aC = 0; aC < y4.length; aC++) {
					var qF = y4[aC].style;
					qF.width = qF.height = qF.maxHeight = "100%", qF.padding = "0.0em 0.9em", qF.gridRow = "" + (y5[aC][0] + 1), qF.gridColumn = "" + (y5[aC][1] + 1), y2.appendChild(y4[aC])
				}
			}();
			else
				for (var yB = (100 / ud.length).toFixed(2) + "%", aC = 0; aC < ud.length; aC++) ud[aC].button.style.width = "100%", ud[aC].button.style.height = ud[aC].button.style.maxHeight = yB, ud[aC].button.style.padding = "0.0em 0.9em", y2
					.appendChild(ud[aC].button)
		}(), w3.appendChild(y2), w3.addEventListener("click", y8)
}

function ev() {
	var yF, yG, yH;

	function yN(aC) {
		return bD.color.qH(yG[aC][0], yG[aC][1], yG[aC][2])
	}

	function yT(g3, g4) {
		return bD.color.yc(yG[g3], yG[g4]), yN(g4)
	}

	function yL() {
		yF && (yF.remove(), yF = null)
	}
	this.show = function(ew, colors, id) {
		0 <= (yH = id) && b1.z.eq(0) && b1.er.yI(0, id), ew = (ew = (ew = (ew = (ew = (ew = (ew = (ew = (ew = (ew = (ew = (ew = ew.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			yG = colors, (yF = document.createElement("div")).style.position = "fixed", yF.style.top = "0", yF.style.left = "0", yF.style.width = "100%", yF.style.height = "100%", yF.style.backgroundColor = bD.color.qJ(yG[0][0], yG[0][1], yG[0][
				2], .6), yF.style.zIndex = "6", yF.onclick = function(e) {
				e.target === yF && yL()
			},
			function(ew) {
				var ij, yM = document.createElement("div");
				yM.style.position = "absolute", yM.style.display = "flex", yM.style.flexDirection = "column", yM.style.top = "50%", yM.style.left = "50%", yM.style.backgroundColor = yN(2), ij = a1.a2.ix() ? bD.tO.yO(i.min) : bD.tO.uP(.4);
				ij = Math.max(ij, 200), yM.style.width = bD.tO.tW(ij), yM.style.height = bD.tO.tW(ij), yM.style.transform = "translate(-50%, -50%)",
					function(yM, ij) {
						var yS = document.createElement("div");
						yS.style.flex = "0 0 10%", yS.style.overflow = "hidden", yS.style.backgroundColor = yN(1), yS.style.color = yT(1, 7), yS.style.font = bD.tO.ux(1, .05 * ij), yS.style.display = "flex", yS.style.alignItems = "center", yS
							.style.justifyContent = "center", yS.innerHTML = L(34), yM.appendChild(yS)
					}(yM, ij),
					function(yM, ew, ij) {
						var yU = document.createElement("div");
						yU.style.flex = "0 0 70%", yU.style.overflowY = "auto", yU.style.overflowX = "hidden", yU.style.whiteSpace = "pre-wrap", yU.style.wordWrap = "break-word", yU.style.padding = bD.tO.tW(.02 * ij), yU.style.backgroundColor =
							yN(2), yU.style.color = yT(2, 8), yU.style.font = bD.tO.ux(0, .07 * ij), yU.innerHTML = ew, yU.innerHTML = "<style>a { color: inherit; }</style>" + yU.innerHTML, yM.appendChild(yU)
					}(yM, ew, ij),
					function(yM, ij) {
						var oy = document.createElement("div"),
							yV = (oy.style.display = "flex", oy.style.flexDirection = "row", oy.style.justifyContent = "space-between", oy.style.alignItems = "stretch", oy.style.backgroundColor = yN(3), oy.style.flex = "1", oy.style.padding = bD
								.tO.tW(.01 * ij), oy.style.gap = bD.tO.tW(.01 * ij), document.createElement("div")),
							yW = (yV.style.flex = "0 0 60%", yV.style.height = "100%", new x(L(35, 0, 0, 1), function() {
								yL()
							}, yN(4), !1)),
							yW = (yW.button.style.width = "100%", yW.button.style.height = "100%", yW.button.style.color = yT(4, 9), yW.button.style.font = bD.tO.ux(1, .05 * ij), yV.appendChild(yW.button), document.createElement("div")),
							yY = (yW.style.flex = "0 0 15%", yW.style.height = "100%", yW.style.backgroundColor = yN(5), document.createElement("div")),
							yZ = (yY.style.flex = "1", yY.style.height = "100%", new x(L(36), function(e) {
								return bD.tO.ya(e), yH < 0 || b1.z.eq(0) && (b1.er.yI(1, yH), yH = -1), !0
							}, yN(6), !1));
						yZ.button.style.width = "100%", yZ.button.style.height = "100%", yZ.button.style.color = yT(6, 10), yZ.button.style.font = bD.tO.ux(1, .035 * ij), yY.appendChild(yZ.button), oy.appendChild(yV), oy.appendChild(yW), oy
							.appendChild(yY), yM.appendChild(oy)
					}(yM, ij), yF.appendChild(yM)
			}(ew), document.body.appendChild(yF)
	}
}

function yd(vA, ye) {
	this.tF = [];
	var yf = this.tF;

	function click() {
		for (var aC = 0; aC < yf.length; aC++) yf[aC].textContent = yf[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eT = parseInt(this.name);
		void 0 !== vA.eT && bm.rv.q1(vA.eT, eT), ye && ye(eT)
	}
	for (var yg, fk = vA.vG.length, aC = 0; aC < fk; aC++)(yg = document.createElement("p")).textContent = "⚪ " + vA.vG[aC], yg.style.margin = "0", yg.name = "" + aC, yg.style.cursor = "pointer", yg.style.fontSize = "1em", yg.addEventListener(
		"click", click), yf.push(yg);
	yf[vA.value].textContent = yf[vA.value].textContent.replace("⚪", "🟢")
}

function yh(title, yi, yj) {
	var vf = document.createElement("div"),
		pQ = document.createElement("div"),
		pR = document.createElement("div"),
		yk = document.createElement("div"),
		yl = document.createElement("div");
	this.ym = pR, this.yn = yi, vf.className = "fx-page", this.show = function() {
			!1 !== yj ? document.body.appendChild(vf) : (document.body.appendChild(pQ), document.body.appendChild(yk))
		}, this.uN = function() {
			!1 !== yj ? u.removeChild(document.body, vf) : (u.removeChild(document.body, pQ), u.removeChild(document.body, yk))
		}, this.yr = function() {
			var uQ = bD.tO.uP(.1),
				uO = bD.tO.uP(.08 + .04 * (i.ys < 1), .3);
			return {
				uQ: uQ,
				uO: uO,
				yt: i.k / i.l - uQ - uO
			}
		}, this.resize = function(ui) {
			var fk = yi.length,
				yu = this.yr(),
				uQ = yu.uQ,
				uO = yu.uO;
			for (pQ.style.height = bD.tO.tW(uQ), bD.tO.tX(pQ, 2), yk.style.top = bD.tO.tW(i.k / i.l - uO), yk.style.height = bD.tO.tW(uO), bD.tO.tX(yk, 8), pR.style.top = bD.tO.tW(uQ), pR.style.height = pR.style.maxHeight = bD.tO.tW(yu.yt), pQ.style
				.font = bD.tO.ux(0, bD.tO.uP(.02, .15)), yk.style.font = bD.tO.ux(0, bD.tO.uP(.02, .7)), pR.style.font = bD.tO.ux(0, bD.tO.uP(.02, .35)), aC = 1; aC < fk; aC++) bD.tO.tX(yi[aC].button, 4);
			for (var uj = 0, aC = 0; aC < fk; aC++) uj += yi[aC].button.offsetWidth;
			if (ui && uj < yk.offsetWidth)
				for (aC = 0; aC < fk; aC++) yi[aC].button.style.width = (100 * yi[aC].button.offsetWidth / uj).toFixed(2) + "%";
			else
				for (aC = 0; aC < fk; aC++) yi[aC].button.style.width = "auto";
			yk.vy && (yk.scrollLeft = yk.vy), ui || this.resize(!0)
		}, this.yv = function() {
			var yu = this.yr(),
				eu = i.l;
			yw.fillStyle = bE.qL, yw.fillRect(0, eu * yu.uQ, i.j, eu * yu.yt)
		}, vf.style.position = "absolute", vf.style.top = "0", vf.style.left = "0", vf.style.width = "100%", vf.style.height = "100%", pQ.style.position = "absolute", pQ.style.top = "0", pQ.style.left = "0", pQ.style.width = "100%", pQ.style
		.display = "flex", pQ.style.backgroundColor = bE.qL, yk.style.position = "absolute", yk.style.left = "0", yk.style.width = "100%", bD.tO.vl(yk), yl.style.height = yl.style.maxHeight = "100%", pR.style.position = "absolute", pR.style.width =
		"100%", pR.style.backgroundColor = bE.qL,
		function() {
			for (var aC = 0; aC < yi.length; aC++) yi[aC].button.style.height = "100%", yi[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < yi.length; aC++) yl.appendChild(yi[aC].button);
	pQ.appendChild(function() {
		var yq = document.createElement("h1");
		return yq.textContent = title, yq.style.margin = "auto", yq.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", yq.style.fontFamily = "Arial Black, system-ui", yq
	}()), yk.appendChild(yl), !1 !== yj && (vf.appendChild(pR), vf.appendChild(pQ), vf.appendChild(yk))
}

function uJ(yx, yy, yz, z0) {
	var self;
	this.uL = document.createElement("span"), (self = this).uL.textContent = yx, self.uL.style.color = bE.qP, self.uL.style.position = "absolute", self.uL.style.font = "inherit", z0 ? self.uL.style.bottom = "0.06em" : self.uL.style.top = "0.12em",
		yz ? self.uL.style.left = "0.2em" : self.uL.style.right = "0.2em", self.uL.style.fontSize = "0.6em", self.uL.style.pointerEvents = "none", self.uL.style.whiteSpace = "pre", yy.style.position = "relative", yy.style.overflow = "hidden", yy
		.appendChild(self.uL)
}

function vn(yx, yy, z1, z2, z3) {
	var self;
	this.uL = document.createElement("span"), this.resize = function() {
			this.uL.style.fontSize = ((z2 - z1) * yy.offsetHeight).toFixed(1) + "px"
		}, (self = this).uL.textContent = yx, self.uL.style.color = bE.qP, self.uL.style.font = "inherit", self.uL.style.margin = "0.1em 0.6em", self.uL.style.pointerEvents = "none", z3 && (self.uL.style.fontWeight = "bold"), self.uL.style
		.whiteSpace = "nowrap", self.uL.style.display = "block", yy.appendChild(self.uL)
}

function z4(z5, z6, z7, z8) {
	var z9 = document.createElement("textarea"),
		zA = (this.e = z9, !0);

	function zF() {
		z9.select(), document.execCommand("copy")
	}
	this.resize = function() {
			z6 && bD.tO.tX(z9, 5)
		}, this.zB = function(ew) {
			z9.value = ew
		}, this.zC = function() {
			return z9.value
		}, this.zD = function() {
			z9.select()
		}, this.clear = function() {
			z9.value = ""
		}, this.zE = function() {
			zA && navigator.clipboard ? (z9.select(), navigator.clipboard.writeText(z9.value).catch(function() {
				zA = !1, zF()
			})) : zF()
		}, z9.setAttribute("id", "textArea" + u.z.vD++), z9.setAttribute("autocomplete", "off"), z5 && z9.setAttribute("placeholder", z5), z9.style.top = "0", z9.style.left = "0", z9.style.width = "100%", z9.style.height = "100%", z9.style
		.userSelect = "none", z9.style.outline = "none", z9.style.resize = "none", z9.style.border = "none", z9.style.color = bE.qP, z9.style.backgroundColor = bE.qI, z8 ? (z9.style.fontSize = "1em", z9.rows = 6, z9.style.padding = "0.25em") : (z9
			.style.padding = "0.45em", z9.style.fontSize = "1.2em"), z7 && z9.addEventListener("input", function(e) {
			z7(e)
		}), z9.addEventListener("focus", function() {
			i.vE++
		}), z9.addEventListener("blur", function() {
			i.vE--
		})
}

function dT() {
	this.te = new zG, this.buffer = new zH, this.rv = new zI, this.z = new zJ, this.zK = new zL, this.dv = function() {
		this.buffer.dv(), (new zM).dv(), this.zK.dv(), this.z.zN(), __fx.settings.applyRecommendedTerritorialSettings && (bm.buffer.data[1].value = 3, bm.buffer.data[9].value = 2, bm.buffer.data[11].value = 2, bm.buffer.data[7].value = 1)
	}
}

function zH() {
	function zO(aC, type, zU, eC) {
		bm.buffer.data.push({
			eT: aC,
			type: type || 0,
			value: zU || 0,
			zU: zU || 0,
			eC: eC || 0
		})
	}

	function zP(aC, type, zU, eC) {
		bm.buffer.data.push({
			eT: aC,
			type: type,
			value: zU || "",
			zU: zU || "",
			eC: eC || 0
		})
	}

	function zQ(oR) {
		for (var aC = bm.buffer.data.length; aC < oR; aC++) bm.buffer.data.push(null)
	}
	this.data = [], this.dv = function() {
		zO(0, 1, 0, 5), zO(1, 1, 1), zO(2, 0), zP(3, 2), zO(4, 1), zP(5, 2, "system-ui", 2), zO(6, 0), zO(7, 0, 0), zO(8, 0), zO(9, 1, 1), zO(10, 1), zO(11, 1, 1), zP(12, 2, navigator.language), zO(13), zO(14), zO(15, 0, 1), zO(16, 0, 3), zQ(
			100), zP(100, 2), zP(101, 2), zP(102, 2), zP(103, 2), zP(104, 2), zP(105, 2), zP(106, 2), zO(107), zO(108), zO(109), zP(110, 2), zO(111), zO(112), zO(113), zP(114, 2), zO(115), zP(116, 2), zO(117, 1), zP(118, 2, "", 2), zO(119, 1, 0,
				1), zP(120, 2), zO(121, 1, ~~(262144 * Math.random())), zP(122, 2, "Player " + Math.floor(1e3 * Math.random())), zO(123), zP(124), zO(125, 1), zP(126, 2), zO(127, 0, 1), zO(128), zO(129), zO(130), zO(131), zO(132), zP(133, 2), zO(
				134, 0, 5), zP(135, 2), zP(136, 2), zO(137), zO(138), zO(139), zO(140), zO(141), zO(142), zO(143), zO(144), zP(145, 2), zO(146), zO(147), zP(148, 2), zO(149), zO(150, 0, 1), zP(151, 2), zO(152, 0, 5), zO(153, 1), zO(154, 1), zP(
				155, 2), zP(156, 2), zO(157), zO(158), zO(159), zO(160), zP(161, 2), zO(162, 0, 1024), zP(163, 2, "0,0,0"), zP(164, 2, "100,100,100"), zP(165, 2, "30,30,30"), zP(166, 2, "70,70,70"), zP(167, 2, "100,100,100"), zP(168, 2,
				"85,85,85"), zP(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) zP(170 + aC, 2, "255,255,255");
		zP(174, 2), zP(175, 2), zO(176, 0, 200), zQ(180), zO(180, 0), zO(181, 0), zO(182, 0, 1023), zP(183, 2), zO(184, 0, 100), zP(185, 2)
	}, this.q1 = function(eT, value) {
		this.data[eT].value = value
	}, this.zR = function(eT, value) {
		this.q1(eT, value);
		var value = String(value),
			fk = value.length;
		5e4 < fk ? console.log("storage value too large: index " + eT + " size " + fk) : (bm.te.save(eT, value), bm.te.save(eT, String(this.data[eT].eC), !0))
	}, this.zS = function(eT) {
		return Number(this.data[eT].value)
	}, this.zT = function(eT) {
		return String(this.data[eT].value)
	}
}

function zL() {
	var zV = [];

	function zY(pg) {
		zV.unshift(pg), bm.rv.q1(161, zV.join(";"))
	}

	function fG(pg) {
		for (var za = zV, fk = za.length, aC = 0; aC < fk; aC++)
			if (za[aC] === pg) return za.splice(aC, 1), bm.rv.q1(161, za.join(";")), 1
	}
	this.dv = function() {
		var pY = bm.buffer.data[161].value;
		pY.length && (zV = pY.split(";"))
	}, this.get = function() {
		return zV
	}, this.zW = function() {
		return {
			vG: zV,
			value: 0
		}
	}, this.xq = function(pg) {
		return bD.tV.has(zV, pg)
	}, this.zX = function(pg) {
		return fG(pg) ? 0 : (zY(pg), 1)
	}, this.nV = function(pg) {
		fG(pg) && zY(pg)
	}, this.zZ = function(eT) {
		eT < zV.length && (zV.splice(eT, 1), bm.rv.q1(161, zV.join(";")))
	}
}

function zG() {
	this.zb = function(eT, eC) {
		return Number(this.zc(eT, eC))
	}, this.zc = function(eT, eC) {
		var gC = null;
		return 0 === a1.id ? a1.zd && (gC = a1.zd.getItem((eC ? "v" : "d") + eT)) : 1 === a1.id ? gC = a1.ze.loadString((eC ? 1e3 : 2e3) + eT) : 2 === a1.id && (gC = a1.zf[(eC ? "v" : "d") + eT]), gC && 0 !== gC.length ? gC : null
	}, this.zg = function(fk, zh) {
		var h = [],
			zi = zh ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zd)
				for (aC = 0; aC < fk; aC++) h.push(a1.zd.getItem(zi + aC))
		} else if (1 === a1.id)
			for (var zj = zh ? 5e3 : 3e3, aC = 0; aC < fk; aC++) h.push(a1.ze.loadString(zj + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fk; aC++) h.push(a1.zf[zi + aC]);
		return h
	}, this.save = function(eT, value, eC) {
		var zk = (eC ? "v" : "d") + eT;
		if (0 === a1.id) {
			if (a1.zd && bm.buffer.data[140].value) try {
				a1.zd.setItem(zk, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.ze.saveString((eC ? 1e3 : 2e3) + eT, value) : 2 === a1.id && (a1.zf[zk] = value, a1.zl.postMessage(zk + " " + value))
	}, this.zm = function(h, zh) {
		var fk = h.length,
			zi = zh ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zd && bm.buffer.data[140].value) try {
				for (aC = 0; aC < fk; aC++) a1.zd.setItem(zi + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var zj = zh ? 5e3 : 3e3, aC = 0; aC < fk; aC++) a1.ze.saveString(zj + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fk; aC++) a1.zf[zi + aC] = h[aC], a1.zl.postMessage(zi + aC + " " + h[aC])
	}
}

function zM() {
	this.dv = function() {
		! function() {
			var data = bm.buffer.data;
			0 === data[2].eC && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].zU = 1);
			0 === data[100].eC && (data[100].value = data[100].zU = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.buffer.data,
			fk = data.length;
		for (aC = 0; aC < fk; aC++) {
			var zp = bm.te.zb(aC, !0);
			data[aC] && data[aC].eC === zp && (null === (zp = bm.te.zc(aC)) ? data[aC].value = data[aC].zU : 2 === data[aC].type ? data[aC].value = zp : (zp = Number(zp), isNaN(zp) ? data[aC].value = data[aC].zU : data[aC].value = zp))
		}
	}
}

function zJ() {
	function zu(h) {
		if (0 === h.length) bm.rv.q1(116, "");
		else {
			for (var zy = h[0], aC = 1; aC < h.length; aC++) zy += ";" + h[aC];
			bm.rv.q1(116, zy)
		}
	}
	this.zr = function() {
		bm.buffer.data[110].value.length && (bm.buffer.data[106].value = bm.buffer.data[110].value, bm.rv.q1(110, ""), this.zs())
	}, this.zs = function() {
		var h = bm.buffer.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.buffer.data[106].value), h.unshift(bm.buffer.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var zt = [], aC = 0; aC < h.length; aC += 2) zt.push(h[aC]);
		zu(h), bm.buffer.data[117].value = 0, bm.buffer.data[117].vG = zt
	}, this.zv = function(eT) {
		bm.buffer.data[117].vG.splice(eT, 1), bm.buffer.data[117].value = Math.min(eT, bm.buffer.data[117].vG.length - 1);
		var h = bm.buffer.data[116].value.split(";");
		h.splice(2 * eT, 2), zu(h)
	}, this.zw = function(pg, password) {
		var h = bm.buffer.data[116].value.split(";");
		h.length % 2 == 1 && h.pop();
		for (var aC = 0; aC < h.length; aC += 2)
			if (h[aC] === pg) return h[aC + 1] = password, void zu(h);
		h.push(pg, password), zu(h)
	}, this.zx = function(eT) {
		var h = bm.buffer.data[116].value.split(";");
		return h.length < 2 * (eT + 1) ? null : {
			pg: h[2 * eT],
			password: h[2 * eT + 1]
		}
	}, this.zz = function() {
		var gC = bO.iw(bm.buffer.data[121].value, -1, 262143);
		return gC = -1 === gC ? ~~(262144 * Math.random()) : gC
	}, this.zN = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var a00, pY = h[aC].trim();
			0 !== pY.length && (a00 = 0 <= (a00 = pY.indexOf("=")) ? pY.substring(0, a00) : pY, document.cookie = a00 + "=;expires=0;path=/", document.cookie = a00 + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = a00 +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function zI() {
	this.q1 = function(eT, value) {
		2 !== bm.buffer.data[eT].type && (value = Math.floor(value)), bm.buffer.data[eT].value !== value && (bm.buffer.zR(eT, value), 0 === eT ? (u.y(), bA.dv(), u.v(2)) : 1 === eT ? i.e5(1) : 2 === eT ? i.e5(0) : 5 === eT && (bD.tO.a01(), i.e5(
			0)))
	}, this.a02 = function() {
		for (var data = bm.buffer.data, aC = 0; aC < 100; aC++) data[aC] && bm.buffer.zR(aC, data[aC].zU);
		bD.tO.a01(), i.e5(1)
	}, this.a03 = function() {
		for (var data = bm.buffer.data, aC = 0; aC < data.length; aC++) data[aC] && bm.buffer.q1(aC, data[aC].zU)
	}, this.a04 = function() {
		for (var g4 = bm.buffer, aC = 128; aC < 135; aC++) g4.zR(aC, g4.data[aC].zU)
	}, this.a05 = function(data) {
		bm.rv.q1(109, data.vW), bm.rv.q1(107, data.a06), bm.rv.q1(108, data.a07), bm.rv.q1(112, data.a08), bm.rv.q1(111, data.a09), bm.rv.q1(113, data.a0A), bm.rv.q1(135, data.a0B), bm.rv.q1(136, data.a0C), bm.rv.q1(137, data.a0D), bm.rv.q1(138,
			data.a0E), bm.rv.q1(139, data.a0F), bm.rv.q1(141, data.a0G), bm.rv.q1(142, data.a0H), bm.rv.q1(143, data.a0I), bm.rv.q1(144, data.a0J)
	}
}

function cD() {
	this.fB = new a0K, this.a0L = new a0M, this.a0N = new a0O, this.dv = function() {
		this.fB.dv()
	}
}

function a0M() {
	this.a0P = function(size) {
		for (var a0Q = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0Q.sY(16)));
		return h.join("")
	}, this.a0R = function(pY) {
		return 20 < (pY = pY.trim()).length ? pY.substring(0, 20) : pY
	}
}

function a0K() {
	var a0S = new Uint8Array(78);
	this.dv = function() {
		var aC;
		for (a0S[50] = 37, aC = 0; aC < 10; aC++) a0S[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) a0S[aC + 20] = aC + 11, a0S[aC + 52] = aC + 38
	}, this.a0T = function(pY) {
		return pY || (console.log("validateString error: " + pY), pY = ""), pY.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a0U = function(pY, size) {
		if ((pY = this.a0T(pY)).length > size) return pY.substring(0, size);
		for (; pY.length < size;) pY = "-" + pY;
		return pY
	}, this.a0V = function(pY) {
		for (var a0W = a0S, fk = pY.length, h = new Uint8Array(fk), aC = 0; aC < fk; aC++) h[aC] = a0W[pY.charCodeAt(aC) - 45];
		return h
	}, this.a0X = function(a0Y) {
		bG.a8(6 * a0Y.length), this.a0Z(a0Y), bK.dv(bG.aD)
	}, this.a0Z = function(a0Y) {
		for (var fk = a0Y.length, j = bG, aC = 0; aC < fk; aC++) j.a9(6, a0Y[aC])
	}, this.a0a = function(pY) {
		this.a0Z(this.a0V(pY))
	}, this.a0b = function(pY, size) {
		this.a0Z(this.a0V(this.a0U(pY, size)))
	}, this.fC = function(pY, size) {
		for (var h = this.a0V(this.a0U(pY, size)), gC = 0, oL = 1, aC = h.length - 1; 0 <= aC; aC--) gC += oL * h[aC], oL *= 64;
		return gC
	}
}

function a0O() {
	this.a0c = function(a0d) {
		for (var a0Q = bK, size = a0Q.sY(a0d), a0e = 7 + 9 * a0Q.sY(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0Q.sY(a0e)));
		return h.join("")
	}
}

function cI() {
	var up, uq, a0f, a0g, a0h, a0i, a0j, a0k, a0l, a0m;

	function a0o() {
		var a0r = aE.a0r;
		for (a0l = a0r; a0l < aE.fh; a0l++) a0n();
		for (a0l = aE.i9 ? aE.l6 : 0; a0l < a0r; a0l++) {
			if (!a0s()) {
				for (var g4 = aE.a0w = a0l; g4 < a0r; g4++) a0l = g4, a0n();
				return
			}
			a0v(a0i + up * a0h + bO.gB(a0h, 2), a0j + uq * a0h + bO.gB(a0h, 2))
		}
	}

	function a1O(player) {
		for (var je = ah.je, jg = ah.jg, jf = ah.jf, jh = ah.jh, ft = jg[player]; ft <= jh[player]; ft++)
			for (var fr = je[player]; fr <= jf[player]; fr++) {
				var fO = ad.a1P(fr, ft);
				ad.hK(fO) && (ad.kH(fO) ? ad.hF(fO, player) : ad.a1Q(fO, player))
			}
	}

	function a1N(h, vp, vq) {
		var el = h[vp];
		h[vp] = h[vq], h[vq] = el
	}

	function a0s() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (up = bO.gB(a0f * az.random(), az.value(100)), uq = bO.gB(a0g * az.random(), az.value(100)), a1V()) return 1;
			return
		}() || function() {
			var j8, jB, g3, a0u, g4, a0t;
			for (j8 = bO.gB(a0f * az.random(), az.value(100)), jB = bO.gB(a0g * az.random(), az.value(100)), g3 = 40; 1 <= g3; g3--)
				for (a0u = a0g - g3; 0 <= a0u; a0u -= 40)
					for (uq = (a0u + jB) % a0g, g4 = 40; 1 <= g4; g4--)
						for (a0t = a0f - g4; 0 <= a0t; a0t -= 40)
							if (up = (a0t + j8) % a0f, a1V()) return 1;
			return
		}()
	}

	function a1V() {
		for (var hI, a1X, gap = bO.gB(a0h - a0k, 2), a1Y = a0j + uq * a0h + gap, a1Z = a0i + up * a0h + gap, a1W = a1Y + a0k - 1; a1Y <= a1W; a1W--)
			for (a1X = a1Z + a0k - 1; a1Z <= a1X; a1X--)
				if (hI = ad.a1P(a1X, a1W), !ad.ff(hI) || ad.kH(hI)) return;
		return 1
	}

	function a0v(a0t, a0u) {
		a0n(), a1a(a0t - 2, a0u - 2)
	}

	function a0n() {
		ah.ni[a0l] = 0, ah.hY[a0l] = ah.a1L[a0l] = 0, ah.hC[a0l] = [], ah.hQ[a0l] = [], ah.hR[a0l] = [], ah.g9[a0l] = [], ah.je[a0l] = ah.jg[a0l] = ah.jf[a0l] = ah.jh[a0l] = 0
	}

	function a1a(a0t, a0u) {
		var hI, aC, a1b, a1c;
		for (ah.ni[a0l] = 1, ah.je[a0l] = a0t + 10, ah.jg[a0l] = a0u + 10, ah.jh[a0l] = ah.jf[a0l] = 0, a1b = a0t; a1b < a0t + 4; a1b++)
			for (a1c = a0u; a1c < a0u + 4; a1c++)(a0t < a1b && a1b < a0t + 3 || a0u < a1c && a1c < a0u + 3) && (hI = ad.a1P(a1b, a1c), ad.ff(hI)) && (ah.je[a0l] = Math.min(a1b, ah.je[a0l]), ah.jf[a0l] = Math.max(a1b, ah.jf[a0l]), ah.jg[a0l] = Math
				.min(a1c, ah.jg[a0l]), ah.jh[a0l] = Math.max(a1c, ah.jh[a0l]), a0m[ah.hY[a0l]] = hI, ah.hY[a0l]++, ad.a1Q(hI, a0l));
		for (ah.a1L[a0l] = ah.hY[a0l], aC = ah.hY[a0l] - 1; 0 <= aC; aC--) ad.a1d(a0m[aC], a0l) ? (ad.hF(a0m[aC], a0l), ah.hQ[a0l].push(a0m[aC])) : ad.a1e(a0m[aC]) ? (ad.hF(a0m[aC], a0l), ah.hR[a0l].push(a0m[aC])) : ad.a1f(a0m[aC]) && (ad.hF(a0m[aC],
			a0l), ah.g9[a0l].push(a0m[aC]))
	}
	this.dv = function() {
		if (a0m = new Array(12), a0k = 6, a0h = 10, a0f = bO.gB(bV.fv, a0h), a0g = bO.gB(bV.fw, a0h), a0i = bO.gB(bV.fv - a0h * a0f, 2), a0j = bO.gB(bV.fw - a0h * a0g, 2), aE.i9)
			for (var aC = 0; aC < aE.l6; aC++) a0l = aC, a0n(), ah.ni[a0l] = 1;
		(0 === aE.data.spawningType ? a0o : 1 === aE.data.spawningType ? (a0o(), function() {
			var a0x = aE.a0y;
			aE.a0z || a0x++;
			if (!(a0x < 3)) {
				for (var data = aE.data, kM = (aE.i9 ? aE.l6 : 0) + data.teamPlayerCount[0], oR = aE.a0w, a10 = new Uint32Array(a0x), a11 = new Uint32Array(a0x), a12 = new Uint16Array(a0x), a13 = new Uint16Array(a0x), fi = bj.fi, je = ah
						.je, jg = ah.jg, jf = ah.jf, jh = ah.jh, gP = bR.gP, gQ = bR.gQ, aC = kM; aC < oR; aC++) gP[aC] = je[aC] + jf[aC] >> 1, gQ[aC] = jg[aC] + jh[aC] >> 1;
				for (aC = kM; aC < oR; aC++) {
					var id = fi[aC];
					a10[id] += gP[aC], a11[id] += gQ[aC]
				}
				var lT = bj.lT;
				for (aC = 1; aC < a0x; aC++) {
					var hD = Math.max(data.teamPlayerCount[lT[aC]], 1);
					a12[aC] = bO.gB(a10[aC], hD), a13[aC] = bO.gB(a11[aC], hD)
				}
				var a14 = bj.a14,
					a15 = bj.a15,
					a16 = bj.a16,
					gO = bR.gO;
				for (aC = 0; aC < 512; aC++) gO[aC] = aC;
				for (var eS = 0; eS < 2 + (4 <= a0x); eS++)
					for (aC = kM; aC < oR; aC++) {
						for (var iD = aC, a17 = gO[iD], a18 = 1, g0 = bO.a19(gP[a17] - a12[1], gQ[a17] - a13[1]), g3 = 2; g3 < a0x; g3++) {
							var a1A = bO.a19(gP[a17] - a12[g3], gQ[a17] - a13[g3]);
							a1A < g0 && (g0 = a1A, a18 = g3)
						}
						var a1B = fi[iD];
						if (a18 !== a1B) {
							if (2 === eS && 4 <= a0x) {
								var a1C = Math.max((a18 + 1) % a0x, 1),
									a1D = bO.a19(gP[a17] - a12[a1C], gQ[a17] - a13[a1C]);
								for (g3 = 1; g3 < a0x; g3++) a1A = bO.a19(gP[a17] - a12[g3], gQ[a17] - a13[g3]), g0 < a1A && a1A < a1D && (a1D = a1A, a1C = g3);
								a1C !== a1B && bO.a19(a12[a1B] - a12[a1C], a13[a1B] - a13[a1C]) < bO.a19(a12[a1B] - a12[a18], a13[a1B] - a13[a18]) && (a18 = a1C)
							}
							var a1E = lT[a18],
								a1F = a15[a1E] + (aE.i9 ? 0 : a16[a1E]),
								lj = a14[a1F],
								a1G = gO[lj],
								a1H = a15[a1E + 1];
							g0 = bO.a19(gP[a1G] - a12[a1B], gQ[a1G] - a13[a1B]);
							for (var eu = a1F + 1; eu < a1H; eu++) {
								var a1I = a14[eu],
									a1J = gO[a1I];
								(a1A = bO.a19(gP[a1J] - a12[a1B], gQ[a1J] - a13[a1B])) < g0 && (g0 = a1A, lj = a1I)
							}
							lj < kM || oR <= lj || (a1G = gO[lj], a10[a1B] += gP[a1G] - gP[a17], a11[a1B] += gQ[a1G] - gQ[a17], a10[a18] += gP[a17] - gP[a1G], a11[a18] += gQ[a17] - gQ[a1G], hD = data.teamPlayerCount[lT[a1B]], a12[a1B] =
								bO.gB(a10[a1B], hD), a13[a1B] = bO.gB(a11[a1B], hD), hD = data.teamPlayerCount[a1E], a12[a18] = bO.gB(a10[a18], hD), a13[a18] = bO.gB(a11[a18], hD), gO[iD] = a1G, gO[lj] = a17)
						}
					}! function() {
						for (var gO = bR.gO, je = ah.je, jg = ah.jg, jf = ah.jf, jh = ah.jh, hY = ah.hY, a1L = ah.a1L, hQ = ah.hQ, hR = ah.hR, g9 = ah.g9, aC = 0; aC < 512; aC++) {
							var a1M = gO[aC];
							if (a1M !== aC) {
								a1N(je, aC, a1M), a1N(jg, aC, a1M), a1N(jf, aC, a1M), a1N(jh, aC, a1M), a1N(hY, aC, a1M), a1N(a1L, aC, a1M), a1N(hQ, aC, a1M), a1N(hR, aC, a1M), a1N(g9, aC, a1M), a1O(aC), a1O(a1M), gO[aC] = aC;
								for (var k = a1M, hJ = gO[k]; hJ !== aC;) hJ = gO[k = hJ];
								gO[k] = a1M
							}
						}
					}()
			}
		}) : function() {
			var a0r = aE.a0r;
			for (a0l = a0r; a0l < aE.fh; a0l++) a0n();
			for (a0l = aE.i9 ? aE.l6 : 0; a0l < a0r; a0l++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							a0t = spawningData[2 * a0l] + 1,
							spawningData = spawningData[2 * a0l + 1] + 1;
						if (3 < a0t && a0t < bV.fv - 5 && 3 < spawningData && spawningData < bV.fw - 5 && ad.ff(ad.a1P(a0t, spawningData)) && function(a0t, a0u) {
								var hI, a1X, a1W;
								for (a1W = a0u; a0u - 6 < a1W; a1W--)
									for (a1X = a0t; a0t - 6 < a1X; a1X--)
										if (hI = ad.a1P(a1X, a1W), ad.kH(hI)) return;
								return 1
							}(a0t + 3, spawningData + 3)) return a0v(a0t + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a0s()) {
						for (var g4 = aE.a0w = a0l; g4 < a0r; g4++) a0l = g4, a0n();
						return
					}
					var a0t = a0i + up * a0h + bO.gB(a0h, 2),
						a0u = a0j + uq * a0h + bO.gB(a0h, 2);
					a0v(a0t, a0u)
				}
		})(), bg.ne[7] = ah.hY[aE.fU]
	}, this.a1g = function(kF, a1h, a1i) {
		var aC, a0t, a0u, hI, up, uq;
		for (a0l = kF, aC = 0; aC < 20; aC++)
			for (a0t = a1h + aC; a1h - aC <= a0t; a0t--)
				for (a0u = a1i + aC; a1i - aC <= a0u; a0u--)
					if ((a0t === a1h + aC || a0t === a1h - aC || a0u === a1i + aC || a0u === a1i - aC) && 3 < a0t && a0t < bV.fv - 5 && 3 < a0u && a0u < bV.fw - 5 && ad.ff(ad.a1P(a0t, a0u)) && function(a0t, a0u) {
							var hI, a1X, a1W;
							for (a1W = a0u; a0u - 6 < a1W; a1W--)
								for (a1X = a0t; a0t - 6 < a1X; a1X--)
									if (hI = ad.a1P(a1X, a1W), ad.kH(hI) && !ad.a1o(a0l, hI)) return;
							return 1
						}(a0t + 3, a0u + 3)) {
						if (0 < ah.hY[a0l]) {
							for (uq = up = hI = void 0, up = ah.jf[a0l]; up >= ah.je[a0l]; up--)
								for (uq = ah.jh[a0l]; uq >= ah.jg[a0l]; uq--) hI = 4 * (uq * bV.fv + up), ad.a1l(a0l, hI) && (ad.a1m(hI), ah.hY[a0l]--);
							a0n()
						}
						return a1a(a0t - 1, a0u - 1), !0
					} return !1
	}, this.a1n = function(kF) {
		a0l = kF, a0s() ? a0v(a0i + up * a0h + bO.gB(a0h, 2), a0j + uq * a0h + bO.gB(a0h, 2)) : a0n()
	}
}

function a1p() {
	au.a1q(), yw.setTransform(iz, 0, 0, iz, 0, 0), yw.imageSmoothingEnabled = iz < 3, yw.drawImage(bV.a1r, aT.a1s(), aT.a1t()), bS.a1u.yv(), yw.drawImage(a1v, aT.a1s(), aT.a1t()), au.yv(), bQ.yv(), ag.yv(), (aE.oC ? (bk.yv(), bF) : (aO.yv(), aW.yv(),
		aS.yv(), bF.yv(), ax.yv(), aX.yv(), aT.yv(), aR.yv(), bk.yv(), aV.yv(), aQ.yv(), aN.yv(), aM.yv(), aY.yv(), bh.yv(), aw)).yv(), u.yv()
}

function a1w(p6, j, k) {
	p6.clearRect(0, 0, j, k), p6.fillStyle = bE.qM, p6.fillRect(0, 0, j, k)
}

function a1x(p6, j, k, a1y) {
	p6.fillStyle = bE.qP, p6.fillRect(0, 0, j, a1y), p6.fillRect(0, 0, a1y, k), p6.fillRect(j - a1y, 0, a1y, k), p6.fillRect(0, k - a1y, j, a1y)
}

function a1z(p6, fr, ft, ij, a1y, hI, a20) {
	p6.fillStyle = bE.qP;
	var hI = Math.floor(ij * hI),
		vd = (hI += (hI - a1y) % 2, Math.floor((hI - a1y) / 2)),
		ij = Math.floor((ij - hI) / 2);
	p6.fillRect(fr + ij, ft + ij + vd, hI, a1y), a20 && p6.fillRect(fr + ij + vd, ft + ij, a1y, hI)
}

function a22() {
	this.dv = function() {
		8 === aE.lO && aO.a23()
	}, this.a24 = function(a25) {
		var elo = aE.data.elo,
			kL = (elo[a25] - elo[1 - a25]) / 10,
			kL = 8 / (1 + Math.pow(2, kL / 32)),
			kL = Math.floor(10 * kL + .5),
			a27 = elo[a25] + kL,
			a28 = this.a29(a27),
			elo = this.a29(elo[1 - a25] - kL),
			kL = (0 === a25 ? aO.a2B(a28, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.a2B(elo, a28, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a27 * bO.sqrt(a27) >> 8),
			elo = ((1 + aE.a2E) * kL / 100).toFixed(2);
		a25 !== aE.fU || aE.hu ? aO.a2F(640, L(38, [ah.a2G[a25], elo]), 40, 0, bE.qP, bE.qM, -1, !1) : aO.a2F(640, L(37, [elo]), 40, 0, bE.qP, bE.qM, -1, !1)
	}, this.a29 = function(elo) {
		return 16e3 === (elo = bO.iw(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function co() {
	this.q7 = new a2H, this.a2I = new a2J
}

function a2J() {
	this.iX = !1;
	this.a2N = [], this.a2O = 100;
	var o9, oA, gap, ij, a2K, a2M, a2P = 0,
		a2Q = new Array(9),
		a2R = [],
		a2S = [],
		a2T = 0,
		a2U = 0,
		a2V = 0,
		a2W = 0;

	function a2i() {
		a2Q.sort(function(g3, g4) {
			return g4.lB - g3.lB
		});
		for (var pY = "" + a2Q[0].s9, aC = 1; aC < 9; aC++) pY += "," + a2Q[aC].s9;
		for (aC = 0; aC < 9; aC++) pY += "," + a2Q[aC].lB;
		bm.buffer.zR(120, pY)
	}
	this.dv = function() {
		for (var a2X = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a2X.length; aC++) {
			var color = 6 === a2X[aC] ? bE.qp : bE.qN;
			this.a2N.push(bD.canvas.a2Y(ac.get(3), a2X[aC], color))
		}
		for (aC = 0; aC < ak.q7.a2Z; aC++) a2S.push(ak.q7.a2a - ak.q7.a2Z + aC);
		for (aC = 0; aC < ak.q7.a2b; aC++) a2S.push(ak.q7.a2c + aC);
		var a2d = ak.q7.a2e(bN.a2d);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a2d.slice(), aC = 0; aC < a2d.length; aC++) a2S.push(a2d[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a2Q[q] = {
						s9: isNaN(qcode) ? 1015 + q : qcode,
						lB: 0
					}
				} else {
					var aC, h = bm.buffer.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) a2Q[aC] = {
							s9: 1015 + aC,
							lB: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var gC = parseInt(h[aC]),
								eu = (gC = 0 <= gC && gC < ak.q7.a2a ? gC : 0, parseInt(h[aC + 9]));
							eu = 0 <= eu && eu < 1e3 ? eu : 0, a2Q[aC] = {
								s9: gC,
								lB: eu
							}
						}
				}
		}()
	}, this.show = function(mL, mM, a2j) {
		var aC;
		if (a2T = mL, a2U = mM, a2P = a2j || 0, this.iX = !0, a2R = [], 0 === a2P)
			for (aC = 0; aC < 9; aC++) a2R.push(a2Q[aC].s9);
		else {
			var g4 = 49 * a2P,
				a2j = g4 - 49;
			for (a2j >= a2S.length && (a2P = 1, a2j = 0, g4 = 49), aC = a2j = (g4 = Math.min(g4, a2S.length)) - 49; aC < g4; aC++) a2R.push(a2S[aC])
		}
		a2R.push(1024);
		a2j = a2R.length, ij = Math.floor((a1.a2.ix() ? .075 : .0468) * i.iy), gap = Math.floor(ij / 3), (a2V = 10 * (a2K = ij + gap)) > i.j && (a2V = i.j, gap = (a2K = a2V / 10) - (ij = 3 * a2K / 4)), a2M = bO.gB(a2j, 10) + !!(a2j % 10), (a2W =
			a2M * a2K) > i.k && (a2W = i.k, gap = (a2K = a2W / a2M) - (ij = 3 * a2K / 4)), a2j = .5 * gap;
		o9 = Math.min(Math.max(mL - .5 * a2V + a2j, a2j), i.j - a2V + a2j), oA = Math.min(Math.max(mM - .5 * a2W + a2j, a2j), i.k - a2W + a2j)
	}, this.hy = function(mL, mM, player) {
		if (!this.iX) return !1;
		if (this.a2l(mL, mM)) {
			mL = bO.iw(bO.gB(mL - o9 + .5 * gap, a2K), 0, 9);
			if ((mL += 10 * bO.iw(bO.gB(mM - oA + .5 * gap, a2K), 0, 9)) >= a2R.length) return aM.uN(), !0;
			mM = a2R[mL];
			if (1024 === mM) return this.show(a2T, a2U, a2P + 1), !0;
			! function(s9) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) a2Q[aC].lB = Math.floor(.99 * a2Q[aC].lB);
					for (aC = 0; aC < 9; aC++)
						if (s9 === a2Q[aC].s9) return a2Q[aC].lB = Math.min(a2Q[aC].lB + 30, 999), a2i();
					a2Q.splice(5, 0, {
						s9: s9,
						lB: Math.max(a2Q[4].lB, 30)
					}), a2Q.pop(), a2i()
				}
			}(mM), player === aE.fU ? bB.iB.s8(mM) : bB.h6.sN(mM, player)
		}
		return aM.uN(), !0
	}, this.a2l = function(mL, mM) {
		return !(mL < o9 - .5 * gap || mM < oA - .5 * gap || o9 + a2V - .5 * gap <= mL || oA + a2W - .5 * gap <= mM)
	}, this.yv = function() {
		yw.fillStyle = bE.qM, yw.fillRect(o9 - .5 * gap, oA - .5 * gap, a2V, a2W);
		for (var ie = .5 * bf.a2m, fk = (yw.lineWidth = bf.a2m, yw.strokeStyle = yw.fillStyle = bE.qP, yw.strokeRect(o9 - .5 * gap + ie, oA - .5 * gap + ie, a2V - 2 * ie, a2W - 2 * ie), yw.imageSmoothingEnabled = !0, a2R.length), aC = 0; aC <
			fk; aC++) this.a2n(a2R[aC], yw, o9 + aC % 10 * a2K, oA + bO.gB(aC, 10) * a2K, ij);
		yw.imageSmoothingEnabled = !1
	}, this.a2n = function(s9, iq, fr, ft, ij) {
		var fO;
		s9 >= 1024 - ak.q7.a2Z ? (fO = ij / this.a2O, iq.setTransform(fO, 0, 0, fO, fr, ft), iq.drawImage(this.a2N[s9 - 1024 + ak.q7.a2Z], 0, 0), iq.setTransform(1, 0, 0, 1, 0, 0)) : (bD.tO.textAlign(iq, 1), bD.tO.textBaseline(iq, 1), iq.font =
			bD.tO.ux(0, .89 * ij), iq.fillText(ak.q7.a2o(s9), fr + .5 * ij, ft + (.35 - bD.tO.a2p + .56) * ij))
	}
}

function a2H() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a2Z = 13, this.a2b = this.emojis.length, this.a2c = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a2c, this.a2a = 1024, this.a2q = this.emojis.indexOf(
		"💀"), this.a2r = this.a2q + 1, this.a2s = this.emojis.indexOf("🥇"), this.a2t = this.emojis.indexOf("😊"), this.a2o = function(gC) {
		return gC < this.a2c ? String.fromCharCode(55356, 56806 + bO.gB(gC, 26), 55356, 56806 + gC % 26) : this.emojis[Math.min(gC - this.a2c, this.a2b - 1)]
	}, this.a2e = function(pY) {
		for (var fk = pY.length - 2, h = [], aC = 0; aC < fk; aC++) {
			var a2u = pY.charCodeAt(aC) - 56806,
				a2v = pY.charCodeAt(aC + 2) - 56806;
			0 <= a2u && a2u < 26 && 0 <= a2v && a2v < 26 && (h.push(26 * a2u + a2v), aC += 3)
		}
		return h
	}, this.a2w = function(gC) {
		return gC < this.a2c
	}, this.a2x = function(gC) {
		return gC >= 1024 - this.a2Z
	}, this.a2y = function(gC) {
		return gC >= this.a2c && gC < this.a2c + this.a2r
	}
}

function cC() {
	this.fB = new a2z, this.a0L = new a30, this.a0N = new a31, this.dv = function() {
		this.fB.dv()
	}
}

function a30() {
	this.a0a = function(pY) {
		for (var fk = pY.length, j = bG, aC = 0; aC < fk; aC++) j.a9(16, pY.charCodeAt(aC))
	}
}

function a2z() {
	var a32 = new Uint8Array(64);
	this.dv = function() {
		var aC;
		for (a32[0] = 45, a32[37] = 95, aC = 0; aC < 10; aC++) a32[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a32[aC + 11] = 65 + aC, a32[aC + 38] = 97 + aC
	}, this.va = function(a33) {
		for (var a0Q = bK, a0Y = new Uint8Array(a33), aC = 0; aC < a33; aC++) a0Y[aC] = a0Q.sY(6);
		return a0Y
	}, this.vZ = function(a0Y) {
		for (var fk = a0Y.length, a34 = a32, h = [], aC = 0; aC < fk; aC++) h.push(String.fromCharCode(a34[a0Y[aC]]));
		return h.join("")
	}, this.a35 = function(value, a36) {
		for (var a34 = a32, h = [], aC = 0; aC < a36; aC++) h.push(String.fromCharCode(a34[value >> 6 * (a36 - 1 - aC) & 63]));
		return h.join("")
	}
}

function cK() {
	var a37, a38, a39;
	a37 = [32, 65, 191, 913, 931], a38 = [64, 127, 688, 930, 1155], a39 = new Array(a37.length + 1);
	for (var aC = 0; aC < a39.length; aC++) {
		a39[aC] = 0;
		for (var g3 = aC - 1; 0 <= g3; g3--) a39[aC] += a38[g3] - a37[g3]
	}

	function a3F(eu) {
		for (var aC = a37.length - 1; 0 <= aC; aC--)
			if (eu >= a37[aC] && eu < a38[aC]) return aC;
		return -1
	}
	this.a0R = function(pY) {
		return 0 !== (pY = pY.trim()).indexOf("Bot ") && 0 !== pY.indexOf("[Bot] ") && function(pY, a3C, a3D) {
			var fk = (pY = pY.trim()).length;
			if (fk < a3C || a3D < fk) return !1;
			for (var eu, a3E = 0, aC = 0; aC < fk; aC++)
				if (eu = pY.charCodeAt(aC), a3E += 65 <= eu && eu <= 90 || 1040 <= eu && eu <= 1071 ? 1 : 0, -1 === a3F(eu)) return !1;
			if (3 < a3E && a3E > Math.floor(fk / 2)) return !1;
			return !0
		}(pY, 3, 20)
	}, this.a3G = function(pY) {
		for (var fk = (pY = pY.trim()).length, h = [], aC = 0; aC < fk; aC++) {
			var eu, hI = a3F(eu = pY.charCodeAt(aC));
			h.push(a39[hI] + eu - a37[hI])
		}
		return h
	}, this.a0c = function(h) {
		for (var eu, g4, pY = "", fk = h.length, aC = 0; aC < fk; aC++)
			for (g4 = 1; g4 < a39.length; g4++)
				if (h[aC] < a39[g4]) {
					eu = a37[g4 - 1] + h[aC] - a39[g4 - 1], pY += String.fromCharCode(eu);
					break
				} return pY
	}, this.a3H = function(pY) {
		for (var h = this.a3G(pY), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a3I = function(pY) {
		for (var h = new Array(Math.floor(pY.length / 3)), aC = 0; aC < pY.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(pY.substring(aC, aC + 3));
		return this.a0c(h)
	}, this.a3J = function(pY) {
		for (var gC, h = [pY.length], aC = 0; aC < pY.length; aC++) h[aC] = pY.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < pY.length; aC++) aC === pY.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (gC = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(gC + (gC < 26 ? 65 : 71)), aC++);
		return result
	}, this.a3K = function(pY) {
		for (var eu, result = "", aC = 0; aC < pY.length; aC++) 48 <= (eu = pY.charCodeAt(aC)) && eu < 58 ? result += String.fromCharCode(eu) : 65 <= eu && eu < 75 ? result += "0" + (eu - 65).toString() : 75 <= eu && eu < 91 ? result += (eu - 65)
			.toString() : 97 <= eu && eu < 123 && (result += (eu - 71).toString());
		return result
	}, this.a3L = function(pY) {
		for (var fk = pY.length, h = [], aC = 0; aC < fk; aC++)(eu = pY.charCodeAt(aC)) < 58 ? h.push(pY[aC]) : (eu -= eu < 91 ? 65 : 71, h.push(String(bO.gB(eu, 10))), h.push(String(eu - 10 * bO.gB(eu, 10))));
		var fk = h.length - 2,
			eu = 0,
			a0Y = [];
		for (aC = 0; aC < fk; aC += 3) a0Y[eu++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return a0Y
	}, this.a3M = function() {
		for (var eS, a3N = "", aC = 0; aC < 6; aC++) eS = 48 + az.random() % 36, eS += 58 <= eS ? 39 : 0, a3N += String.fromCharCode(eS);
		return a3N
	}
}

function a31() {
	this.a3G = function(pY, a0d, a3O) {
		for (var a3P = [], fk = pY.length, max = 0, aC = 0; aC < fk; aC++) {
			var gC = pY.charCodeAt(aC);
			a3P.push(gC), max = Math.max(max, gC)
		}
		var a0e = max < 128 ? 7 : 16;
		for (a3O.a9(a0d, fk), a3O.a9(1, +(16 == a0e)), aC = 0; aC < fk; aC++) a3O.a9(a0e, a3P[aC])
	}
}

function dL() {
	this.a3Q = new a3R, this.result = new a3S, this.a3T = new a3U, this.nJ = new a3V, this.a3W = new a3X, this.a3Y = new a3Z, this.dv = function() {
		this.result.dv()
	}
}

function a3U() {
	this.a3a = function() {
		for (var fk = am.lc, x0 = am.lh, a3b = [], aC = 0; aC < fk; aC++) {
			var hI = x0[aC];
			bD.h6.a3c(hI) && a3b.push(hI)
		}
		return a3b
	}, this.a3d = function() {
		if (0 === bj.lT[aE.a3e]) return this.a3f();
		bk.l7(aE.a3e);
		for (var a3b = [], fk = bR.gF[0], gO = bR.gO, aC = 0; aC < fk; aC++) {
			var hI = gO[aC];
			bD.h6.a3c(hI) && a3b.push(hI)
		}
		return a3b
	}, this.a3f = function() {
		var hI = mh[0];
		return bD.h6.a3c(hI) ? [hI] : []
	}, this.a3g = function(a3b) {
		for (var fk = a3b.length, el = 0, hY = ah.hY, aC = 0; aC < fk; aC++) el += hY[a3b[aC]];
		return el
	}
}

function a3R() {
	function a3i() {
		if (2 === aE.a3m) return 1;
		ax.a3n(), aE.a3m = 2, aE.a3o = aE.a3p
	}

	function a3k() {
		bU.a3W.a3q(), aY.show(1 === aE.a3r, !1, 2 === aE.a3r), bU.result.a3q(), bU.a3Y.ep(), bU.nJ.ep(), bU.nJ.a3s(), aO.a3t(!0), aO.a3u(247), aO.a3u(956), aO.a3u(957), aW.nU(!0), aX.nU(!0), ax.nU(), bF.a3v(), aE.ht && bi.a3w.a3x(), bi.e2 = !0, be
			.a3y(), a1.a2.setState(0)
	}
	this.a3h = function() {
		a3i() || (aE.a3j = 2, a3k())
	}, this.a3l = function() {
		a3i() || (aE.a3j = 1, a3k())
	}
}

function a3V() {
	var a3z = 0;
	this.ep = function() {
		var a47;
		2 === aE.a3j ? (aO.a40(0, 59), aI.oI(2700)) : aE.lO < 7 ? (a47 = bj.lT[aE.a3e], a47 = bj.a49[a47], aR.a4A(L(39, [a47]), 2, 1, 12), aO.a2F(0, L(40, [a47]), 40, 0, bE.qP, bE.qM, -1, !1), aI.oI(2700)) : 8 === aE.lO ? (aE.hu ? aO.a40(aE.a45,
			3) : aE.a3r ? aO.a40(aE.a45, 2) : aO.a40(1 - aE.fU, 3), aE.a46.a24(aE.a45), aI.o4(aE.a45, 2700, !1, 0)) : 9 === aE.lO ? (aO.a4B(), aI.oI(2700)) : (aO.a4C(aE.a45), aI.o4(aE.a45, 2700, !1, 0))
	}, this.a3s = function() {
		a3z = 0, aE.ht || aE.lQ || (a3z = 54)
	}, this.nK = function() {
		var pY;
		0 !== a3z && 0 === --a3z && (pY = b1.z.a4E(), aE.lO < 7 ? pY += "/log/team" : 8 === aE.lO ? pY += "/log/1v1" : 9 === aE.lO ? pY += "/log/zombies" : pY += "/log/br", aO.a2F(720, pY, 736, 0, bE.qP, bE.qn, -1, !1), aE.a4F < 0 || (pY = b1.z
			.a4E() + "/log/?r=" + bI.fB.a35(aE.a4F, 6), aO.a2F(1071, pY, 736, 0, bE.qP, bE.qn, -1, !1)))
	}
}

function a3Z() {
	function a4Q() {
		var vt;
		return 8 === aE.lO ? 0 : (vt = Math.floor(ah.a4R[aE.fU] / 50), (vt = Math.min(vt, 200)) / 100)
	}

	function a4H() {
		var vt = a4Q();
		0 === vt || aE.hu || aO.a2F(440, L(41, [vt.toFixed(2)]), 40, 0, bE.qh, bE.qM, -1, !1)
	}
	this.ep = function() {
		var a4I;
		0 === bU.result.a4G || 0 === bU.result.a3b.length || 8 === aE.lO ? bD.h6.hx(aE.fU) && a4H() : (function(a4I) {
			7 !== aE.lO && 10 !== aE.lO && 9 !== aE.lO || 0 !== aE.a3r && a4I && (9 === aE.lO ? aO.a2F(600, L(45, [100 * (1 + aE.a2E)]), 40, 0, bE.qP, bE.qM, -1, !1) : aO.a2F(600, L(45, [a4I.toFixed(2)]), 40, 0, bE.qP, bE.qM, -1, !1))
		}(a4I = function() {
			aO.a2F(520, L(42), 40, 0, bE.qP, bE.qM, -1, !1);
			for (var a3b = bU.result.a3b, fk = a3b.length, hY = ah.hY, h = [], aC = 0; aC < fk; aC++) {
				var hI = a3b[aC];
				h.push({
					hI: hI,
					el: hY[hI]
				})
			}
			h.sort((g3, g4) => g4.el - g3.el);
			var a49 = ah.a2G,
				el = bU.result.a4S,
				vt = bU.result.a4G,
				pY = "",
				a4I = 0;
			for (aC = 0; aC < fk; aC++) {
				var iV = h[aC].el * vt / (100 * el),
					a4U = a49[h[aC].hI] + ": " + iV.toFixed(2) + "   ";
				h[aC].hI !== aE.fU || aE.hu || (a4I = iV, 9 === aE.lO && 0 !== aC && (a4I = 0)), 2 < aC && 4 !== fk ? 3 === aC && (pY += "(" + L(43, [fk - 3]) + ")") : pY += a4U
			}
			aO.a2F(560, bD.pc.a4V(pY), 40, 0, bE.qh, bE.qM, -1, !1), a4I ? aO.a2F(580, L(44, [a4I.toFixed(2) + " + " + a4Q().toFixed(2)]), 40, 0, bE.qh, bE.qM, -1, !1) : bD.h6.hx(aE.fU) && a4H();
			return a4I
		}()), 2 === aE.a3j || 7 <= aE.lO || function(a4I) {
			var a3b = bU.result.a3b,
				fk = a3b.length,
				a4W = ah.a4W,
				hY = ah.hY,
				a4X = [];
			loop: for (var aC = 0; aC < fk; aC++) {
				var hI = a3b[aC],
					a4Y = bD.pc.pq(a4W[hI]);
				if (null !== a4Y) {
					for (var a4Z = hY[hI], g4 = a4X.length - 1; 0 <= g4; g4--)
						if (a4Y === a4X[g4].name) {
							a4X[g4].el += a4Z, a4X[g4].h.push({
								hI: hI,
								el: a4Z
							});
							continue loop
						} a4X.push({
						name: a4Y,
						el: a4Z,
						h: [{
							hI: hI,
							el: a4Z
						}]
					})
				}
			}
			if (0 !== a4X.length) {
				a4X.sort((g3, g4) => g4.el - g3.el);
				var h = a4X[0].h,
					a4a = (h.sort((g3, g4) => g4.el - g3.el), "[" + a4X[0].name + "]"),
					a4b = 512 * bU.result.a4G / 26214400,
					m1 = (aO.a2F(0, L(46, [a4a, a4b.toFixed(4)]), 40, 0, bE.qP, bE.qM, -1, !1), h.length),
					a0W = a4X[0].el,
					a4c = 1e4 * a4b;
				for (aC = 0; aC < m1; aC++)
					if (h[aC].hI === aE.fU && !aE.hu) {
						aO.a2F(600, L(47, [(a4c * h[aC].el / (10 * a0W)).toFixed(2)]), 40, 0, bE.qP, bE.qM, -1, !1), aO.a2F(640, L(48, [(.2 * a4I).toFixed(2), a4a]), 40, 0, bE.qP, bE.qM, -1, !1);
						break
					}
			}
		}(a4I))
	}, this.a4M = function() {
		var a4N, a4O;
		aE.lQ || (a4N = ah, a4O = aE.fU, 0 === a4N.a4P[a4O]) || a4N.kA[a4O] < 1 || 2 * a4N.sp[a4O] > 3 * (a4N.k9[a4O] + a4N.kA[a4O]) || a4H()
	}
}

function a3S() {
	this.dv = function() {
		this.a4d = 0, this.a3b = [], this.a4S = 0, this.a4G = 0
	}, this.a3q = function() {
		var uh;
		aE.lQ || (uh = this, 2 === aE.a3j ? uh.a3b = bU.a3T.a3a() : aE.ih ? uh.a3b = bU.a3T.a3d() : uh.a3b = bU.a3T.a3f(), uh.a4d = bl.a4f.a4g(), uh.a4S = Math.max(1, bU.a3T.a3g(uh.a3b)), bB.h6.sW(), 8 === aE.lO ? bU.result.a4G = 0 : uh.a4G =
			100 * bU.result.a4d * (1 + aE.a2E))
	}
}

function a3X() {
	this.a3q = function() {
		if (2 === aE.a3j) aE.a3r = 2;
		else {
			if (8 === aE.lO) bD.h6.kT(0) || 0 === ah.ni[0] ? aE.a45 = 1 : bD.h6.kT(1) || 0 === ah.ni[1] ? aE.a45 = 0 : aE.a45 = +(ah.hY[1] > ah.hY[0]);
			else {
				if (aE.ih) {
					var le = bk.a4j();
					if (aE.a3e = le, bj.lT[le]) return void(aE.a3r = +(bj.fi[aE.fU] === le))
				}
				aE.a45 = mh[0]
			}
			aE.a3r = +(aE.a45 === aE.fU)
		}
	}
}

function dQ() {
	this.id = 0, this.eC = 0, this.zd = null, this.ze = null, this.zf = null, this.zl = null, this.a2 = new a4k, this.dv = function() {
		var self, eC;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (eC = Android.getVersion()) < 12 || (self.eC = eC, self.id = 1, self.ze = Android),
			function(self) {
				var eC;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.zf = mwIOSdataX, self.zl = window.webkit.messageHandlers.iosCommandA, eC = self
					.zf.version, self.eC = eC ? Number(eC) : 0)
			}(this),
			function(self) {
				var zd;
				try {
					if (!(zd = window.localStorage)) return;
					zd.setItem("tls7", "1"), zd.removeItem("tls7")
				} catch (error) {
					return
				}
				self.zd = zd
			}(this)
	}
}

function a4k() {
	this.a4o = function() {
		bm.rv.a02(), bm.rv.a03(), b1.z.close(0, 3255), 0 === a1.id ? a1.zd && a1.zd.clear() : 1 === a1.id ? a1.ze.saveString(199, "") : 2 === a1.id && a1.zl.postMessage("clear")
	}, this.a4p = function() {
		2 === a1.id ? a1.zl.postMessage("showConsentForm") : 1 === a1.id && a1.ze.setState(7)
	}, this.a4q = function() {
		this.setState(14)
	}, this.ix = function() {
		return 1 === bm.buffer.zS(2)
	}, this.a4r = function() {
		bm.buffer.zR(102, "")
	}, this.setState = function(a4s) {
		1 === a1.id && 5 <= a1.eC && a1.ze.setState(a4s)
	}, this.a3 = function() {
		var a4t;
		1 === a1.id && 7 <= a1.eC ? a1.ze.setState(5) : 2 === a1.id ? a1.zl.postMessage("reload 0") : ((a4t = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a4t.toString())
	}, this.eg = function() {
		0 !== a1.id && (1 === a1.id ? a1.ze.prepareAd("8646194357") : 2 === a1.id && (0 === a1.eC ? a1.zl.postMessage("prepare ad 2904813909") : a1.zl.postMessage("loadAds 2904813909")))
	}, this.em = function(el) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.eC && (a1.ze.presentAd(el), !0) : 2 === a1.id && 0 !== a1.eC && (a1.zl.postMessage("showAd"), !0))
	}, this.e4 = function() {
		2 === a1.id && a1.eC < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a4u + "' target='_blank'>" + bN
			.a4u + "</a>", !0, [new x("⬅️ " + L(49), function() {
				u.v(0)
			}, bE.r6)]))
	}
}

function df() {
	function a4w(e) {
		mQ(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(49), function() {
				u.a4x()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.qm)]))
	}

	function a59(e) {
		mQ(e), u.v(4, 5, new w(L(50), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a54(e), !0))
	}

	function a54(e) {
		var pY = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + pY : 4527 === e ? "Player already in lobby" + pY : 4577 === e ? "Your IP is banned." + pY : 4530 === e ? "Lobby Timeout" + pY : 4528 === e ?
			"Lobby Kick: Another login detected." + pY : 4540 === e ? "You have been kicked." + pY : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + pY : 4555 === e ? "This Account is blocked." + pY :
			4580 === e ? "More Gold needed" + pY : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + pY : 4591 === e ? "The algo determined you are a bot." + pY : 3290 === e ? "The map could not be loaded." + pY : "Unknown error" + pY
	}

	function mQ(e) {
		a4z(e), u.z.a0()
	}

	function a4z(e) {
		4540 === e && b1.z.a5B(e);
		var a4s = ab.a4y();
		bx.close(), 6 === a4s ? b1.z.a5B(e) : bq.fH ? (u.y(), bq.xy(), b1.z.close(b1.z.fI, 3256)) : 8 === a4s && aE.a5C(!0)
	}
	this.q = [], this.a4v = function(oa, e) {
		if (1 === oa && __fx.customLobby.isActive() && 6 !== ab.a4y() && __fx.customLobby.setActive(!1), console.log("socket close index " + oa + " error " + e), this.q.push(e), 4321 === e && (data = bm.z.zx(0)) && (console.log("Reset to: " +
				data.pg), bm.rv.q1(105, data.pg), bm.rv.q1(106, data.password)), 8 === u.vX && 0 === oa)
			if (4211 === e) a4w(e);
			else {
				if (bq.fH && (4495 === e || 4480 === e) && b1.z.fI !== oa) return void u.a4x();
				if (8 !== ab.a4y() && a4z(), 4480 === e) return bm.rv.a04(), void u.v(4, 0, new w(L(52), L(53), !0));
				var data = 0;
				u.a52() && 10 === u.a52().a53 && (data = u.a52().a53), u.v(4, data, new w(L(50), a54(e), !0))
			}
		else {
			data = ab.a4y();
			if (6 === data) {
				if (4211 === e) return void a4w(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a55(oa)
			} else if (bq.fH) {
				if (oa !== b1.z.fI) return
			} else {
				if (8 === data) return void(oa !== b1.z.a56 || aE.lQ || 1 !== aE.a3m || aE.ht || aO.a57(L(51, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}(4591 === e ? function(e) {
				mQ(e), u.v(4, 5, new w("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new x("⬅️ " + L(49), function() {
					u.a4x()
				}), new x("🔄 Reload", function() {
					a1.a2.a3()
				}, bE.qm)]))
			} : a59)(e)
		}
	}, this.a5A = function(e) {
		this.q.push(e), 8 === ab.a4y() ? aE.lQ || 1 !== aE.a3m || aO.a57(L(51, [e])) : a59(e)
	}, this.t = function() {
		this.q.push(3268), mQ(3268)
	}
}

function dF() {
	var a5D, a5E, a5F = -15e3,
		a5G = !1;

	function hy(e) {
		a5a() || (a5G = !0, a5b(e, 1), b1.z.a5c(b1.z.a56), a5d(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5P(e) {
		a5F = bi.ek, a5b(e, 1), b1.z.a5c(b1.z.a56), 0 < e.touches.length && (a5D = Math.floor(i.l * e.touches[0].clientX), a5E = Math.floor(i.l * e.touches[0].clientY), av.a5P(e) || a5d(a5D, a5E))
	}

	function a5d(fr, ft) {
		u.hy(fr, ft), 0 === aE.a3m ? ab.hy(fr, ft) : bF.a5e(fr, ft) || bh.hy(fr, ft) || aY.hy(fr, ft) || aM.a5f(fr, ft) || aQ.hy(fr, ft) || 0 <= aN.hy(fr, ft) || ax.hy(fr, ft) || bM.a5g(fr, ft) || aM.a5h(fr, ft)
	}

	function a5L(e) {
		a5a() || (a5G = !0, a5b(e, 1), a5i(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5Q(e) {
		a5F = bi.ek, a5b(e, 1), 0 < e.touches.length && (a5D = Math.floor(i.l * e.touches[0].clientX), a5E = Math.floor(i.l * e.touches[0].clientY), av.a5Q(e) || a5i(a5D, a5E))
	}

	function a5i(fr, ft) {
		bM.tr() || (bM.hp = fr, bM.hq = ft), u.a5L(fr, ft), 0 === aE.a3m ? ab.a5L(fr, ft) : (bW.hr(fr, ft), bh.a5L(fr, ft) || (aN.a5L(fr, ft), aM.iX() ? aM.a5L(fr, ft) : aS.hz ? aS.a5L(fr) && (bi.e2 = !0) : (aW.a5L(fr, ft), aT.oE && aT.a5L(fr, ft) &&
			(bi.e2 = !0))))
	}

	function a5N(e) {
		a5a() || (a5b(e, 1), a5j(), 0 === aE.a3m ? (ab.click(-1024, -1024), aU.reset()) : (aW.a5k(-1024, -1024), aN.a5L(-1024, -1024), aS.a5l(), aT.oE = !1))
	}

	function a5M(e) {
		a5a() || (a5b(e, 1), a5m(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a5J && (bM.a5J = !1, e.preventDefault()))
	}

	function click(e) {
		a5a() || a5b(e, 1)
	}

	function a5R(e) {
		a5F = bi.ek, a5b(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a3m ? aT.oE = !1 : av.a5n() || (a5m(a5D, a5E, !1), bM.a5J && (bM.a5J = !1, e.preventDefault()))
	}

	function a5S(e) {
		a5F = bi.ek, a5b(e, 1), a5m(a5D, a5E, !1), bM.a5J && (bM.a5J = !1, e.preventDefault())
	}

	function a5T(e) {}

	function a5U(e) {}

	function a5V(e) {
		a5a() || a5b(e, 0)
	}

	function a5m(fr, ft, a5o) {
		a5j(), 0 === aE.a3m ? ab.click(fr, ft) : (aW.a5k(fr, ft), bh.a5k(), aS.a5l(), aT.oE = !1, aM.click(fr, ft, a5o) ? bi.e2 = !0 : aN.a5M(fr, ft))
	}

	function a5j() {
		u.a5j()
	}

	function a5O(e) {
		var fr, ft, deltaY;
		a5a() || (a5b(e, 1), b1.z.a5c(b1.z.a56), fr = Math.floor(i.l * e.clientX), ft = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a5O(fr, ft, deltaY), 0 === aE.a3m ? ab.a5O(fr, ft, deltaY) : aW.a5O(fr, ft,
			deltaY) || (aS.a5p(fr, ft) ? aS.a5O(deltaY) && (bi.e2 = !0) : aT.a5O(fr, ft, deltaY)))
	}

	function a5W(e) {
		a5b(e, 0)
	}

	function a5b(e, id) {
		0 === id && u.iX() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a4y() && e.preventDefault()
	}

	function a5X(e) {
		if (!(0 < i.vE) && __fx.keybindHandler(e.key)) return;
		a5a() || 0 < i.vE || (e = e.code) && e.length && (ba.eu(e, 18) ? at.a5r(3) : ba.eu(e, 22) ? at.a5r(0) : ba.eu(e, 20) ? at.a5r(1) : ba.eu(e, 24) ? at.a5r(2) : ba.eu(e, 10) ? aS.a5s(31 / 32) : ba.eu(e, 8) ? aS.a5s(32 / 31) : ba.eu(e, 6) ? aS
			.a5s(7 / 8) : ba.eu(e, 4) ? aS.a5s(8 / 7) : ba.eu(e, 14) ? 0 !== aE.a3m && aT.a5O(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.eu(e, 16) ? 0 !== aE.a3m && aT.a5O(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.eu(e, 0) ?
			aE.a3m && bW.hs(0) : ba.eu(e, 2) ? aE.a3m && bW.hs(1) : ba.eu(e, 30) ? aE.a3m && bW.hs(2) : ba.eu(e, 26) ? aE.a3m && bW.iR() : ba.eu(e, 28) && aE.a3m && bW.iW())
	}

	function a5Y(e) {
		if (!a5a() && !(0 < i.vE || bi.ek < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a5t(1) || "Space" === code && u.a5t(0))) return bq.fH ? bq.y9.a5t(code) ? void 0 : void("Escape" === code && bM.gD()) : void(8 !== ab.a4y() && ab.a5t(e) ? bi.e2 = !0 : "Escape" === code ?
				bM.gD() : ba.eu(code, 18) ? at.a5u(3) : ba.eu(code, 22) ? at.a5u(0) : ba.eu(code, 20) ? at.a5u(1) : ba.eu(code, 24) ? at.a5u(2) : ba.eu(code, 12) ? bF.a5v(!aE.oC) : "Space" === code && aE.a3m && (aN.hv && aN.a5w(), aE.ht) &&
				bF.a5x(!1))
		}
	}

	function a5Z() {
		"hidden" !== document.visibilityState && (bi.e2 = !0)
	}

	function a5a() {
		return a5F + 15e3 > bi.ek
	}

	function resize() {
		i.a5z()
	}
	this.a5H = 0, this.a5I = "", this.a5J = !1, this.hp = 0, this.hq = 0, this.dv = function() {
		a5K.addEventListener("mousedown", hy, {
			passive: !1
		}), a5K.addEventListener("mousemove", a5L, {
			passive: !1
		}), a5K.addEventListener("mouseup", a5M, {
			passive: !1
		}), a5K.addEventListener("click", click, {
			passive: !1
		}), a5K.addEventListener("mouseleave", a5N, {
			passive: !1
		}), a5K.addEventListener("wheel", a5O, {
			passive: !1
		}), a5K.addEventListener("touchstart", a5P, {
			passive: !1
		}), a5K.addEventListener("touchmove", a5Q, {
			passive: !1
		}), a5K.addEventListener("touchend", a5R, {
			passive: !1
		}), a5K.addEventListener("touchcancel", a5S, {
			passive: !1
		}), a5K.addEventListener("dragover", a5T), a5K.addEventListener("drop", a5U), a5K.addEventListener("dblclick", a5V), document.addEventListener("contextmenu", a5W), document.addEventListener("keydown", a5X), document.addEventListener(
			"keyup", a5Y), document.addEventListener("visibilitychange", a5Z), window.addEventListener("resize", resize)
	}, this.a5g = function(fr, ft) {
		return !!bF.hy(fr, ft) || !!(aW.hy(fr, ft) || aT.hy(fr, ft) || aS.hy(fr, ft) || aO.hy(fr, ft))
	}, this.a5y = a5a, this.tr = function() {
		return !a5G || 0 < a5F
	}, this.gD = function() {
		if (!u.iX()) return 8 === ab.a4y() ? aE.oC ? void bF.a5v(!1) : bh.iX ? void bh.a5w() : void aN.a5w() : void(7 !== ab.a4y() && 6 === ab.a4y() && aa.a60());
		u.a5t(2)
	}
}

function c8() {
	this.tO = new a61, this.tV = new a62, this.h6 = new a63, this.pc = new a64, this.p6 = new a65, this.p5 = new a66, this.canvas = new a67, this.color = new a68, this.a69 = new a6A, this.dv = function() {
		this.tO.a01()
	}
}

function a62() {
	this.a6B = function(h) {
		h.fill(0)
	}, this.a6C = function(h) {
		for (var fk = h.length, aC = 0; aC < fk; aC++) h[aC] = []
	}, this.a6D = function(a2u, a6E) {
		for (var a2v = bR.gK, aC = 0; aC < 3; aC++) a2v[aC] = a6E * a2u[aC];
		return a2v
	}, this.a6F = function(a2u, a2v, a6G) {
		for (var kL = 0, aC = 0; aC < 3; aC++) kL += Math.abs(a2u[aC] - a2v[aC]);
		return a6G <= kL
	}, this.a6H = function(a2u, a6I) {
		for (var aC = 0; aC < 3; aC++) a2u[aC] = bO.iw(a2u[aC] + a6I, 0, 255);
		return a2u
	}, this.a6J = function(h, vp, vq) {
		vq = vq || h.length - 1;
		for (var a6K = 0, aC = vp = vp || 0; aC <= vq; aC++) a6K += h[aC];
		return a6K
	}, this.a6L = function(h, a6M) {
		for (var aC, a6N, fk = h.length, a6O = [], g3 = fk - 1; 0 <= g3; g3--) {
			for (aC = a6N = 0; aC < fk; aC++) a6M(h[aC]) < a6M(h[a6N]) && (a6N = aC);
			fk--, a6O.push(h[a6N]), h[a6N] = h[fk], h.pop()
		}
		return a6O
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
	}, this.a6P = function(h, gC) {
		for (var fk = h.length, hD = 0, aC = 0; aC < fk; aC++) hD += h[aC] > gC;
		return hD
	}, this.a6Q = function(a6R, a6S, min) {
		for (var fk = a6S[0], aC = fk - 1; 0 <= aC; aC--) a6R[aC] < min && (a6R[aC] = a6R[--fk]);
		a6S[0] = fk
	}, this.a6T = function(h, fk, value) {
		for (var aC = 0; aC < fk; aC++) h[aC] -= value
	}, this.a6U = function(h) {
		for (var fk = h.length, aC = 0; aC < fk; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a6V = function(pY, h, a6W) {
		h.fill(0);
		for (var vt = pY.split(","), fk = Math.min(vt.length, h.length), aC = 0; aC < fk; aC++) h[aC] = Math.min(parseInt(vt[aC]), a6W)
	}, this.a6X = function(pY, h, maxLength) {
		h.fill("");
		for (var vt = pY.split('"'), fk = Math.min(vt.length, 2 * h.length), ie = 0, aC = 1; aC < fk; aC += 2) h[ie++] = vt[aC].slice(0, maxLength)
	}, this.a6Y = function(h, hD) {
		if (0 === hD) h.fill(0);
		else {
			var a6K = this.a6J(h),
				fk = h.length;
			if (0 === a6K) h.fill(bO.gB(hD, fk));
			else
				for (var aC = 0; aC < fk; aC++) h[aC] = bO.gB(hD * h[aC], a6K);
			if (0 === (a6K = this.a6J(h))) h[1] = hD;
			else
				for (var ie = 0; a6K++ < hD;) h[ie = (ie + 1) % fk] && h[ie]++
		}
	}, this.a6Z = function(h) {
		if (!h) return 0;
		var fk = h.length;
		if (0 === fk) return 0;
		for (var gC = h[fk - 1], aC = fk - 2; 0 <= aC; aC--)
			if (h[aC] !== gC) return aC + 2;
		return 1
	}, this.a6a = function(h) {
		for (var a6K = 0, aC = 0; aC < h.length; aC++) a6K += h[aC].length;
		return a6K
	}, this.a6b = function(a6c) {
		for (var h = [], aC = 0; aC < a6c.length; aC++) h = h.concat(a6c[aC]);
		return h
	}, this.has = function(h, gC) {
		for (var fk = h.length, aC = 0; aC < fk; aC++)
			if (h[aC] === gC) return !0;
		return !1
	}
}

function a67() {
	this.a2Y = function(a6d, eT, a6e) {
		var ij = a6d.height,
			a6f = bD.tO.a6g(ij, ij),
			iq = bD.tO.getContext(a6f);
		return function(j, iq, a6e) {
			iq.fillStyle = a6e, iq.beginPath(), iq.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), iq.fill()
		}(ij, iq, a6e), iq.drawImage(a6d, -eT * ij, 0), a6f
	}, this.a6i = function(a6j) {
		var iq, im, ij = a6j.height;
		return a6j.width === ij && (im = (iq = bD.tO.getContext(a6j, !0)).getImageData(0, 0, ij, ij), bD.p5.a6k(im.data, ij, ij, .9), iq.putImageData(im, 0, 0)), a6j
	}
}

function a68() {
	this.a6l = function(gC) {
		return [gC >> 12 & 63, gC >> 6 & 63, 63 & gC]
	}, this.a6m = function(gC) {
		for (var h = this.a6l(gC), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a6n = function(gC) {
		gC = this.a6m(gC);
		return bD.color.qH(gC[0], gC[1], gC[2])
	}, this.a6o = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.qH = function(eS, vt, g4) {
		return "rgb(" + eS + "," + vt + "," + g4 + ")"
	}, this.qJ = function(eS, vt, g4, g3) {
		return "rgba(" + eS + "," + vt + "," + g4 + "," + g3.toFixed(3) + ")"
	}, this.tt = function(eu) {
		for (var h = eu.split("(")[1].split(","), gJ = bR.gJ, aC = 0; aC < 3; aC++) gJ[aC] = parseInt(h[aC]);
		return 4 === h.length ? gJ[3] = 255 * parseFloat(h[3].slice(0, -1)) : gJ[3] = 255, gJ
	}, this.tu = function(a6p, fn) {
		for (var h = a6p.slice(a6p.indexOf("(") + 1, a6p.indexOf(")")).split(","), gJ = bR.gJ, aC = 0; aC < 3; aC++) gJ[aC] = bO.iw(parseInt(h[aC].trim(), 10) + fn, 0, 255);
		return 3 === h.length ? this.qH(gJ[0], gJ[1], gJ[2]) : (a6p = parseFloat(h[3].trim()), this.qJ(gJ[0], gJ[1], gJ[2], a6p = 0 === a6p ? .3 : a6p))
	}, this.yc = function(a6q, a6r) {
		for (var kL = 0, aC = 0; aC < 3; aC++) kL += Math.abs(a6r[aC] - a6q[aC]);
		if (!(240 <= kL))
			for (aC = 0; aC < 3; aC++) a6r[aC] = a6q[aC] + (a6q[aC] < 128 ? 80 : -80)
	}, this.a6s = function(h) {
		for (var pY = "#", aC = 0; aC < 3; aC++) {
			var eS = h[aC].toString(16);
			pY += 1 === eS.length ? "0" + eS : eS
		}
		return pY
	}, this.a6t = function(pY) {
		var eS, vt;
		return pY.length < 7 ? bE.qG : (eS = parseInt(pY.slice(1, 3), 16), vt = parseInt(pY.slice(3, 5), 16), pY = parseInt(pY.slice(5, 7), 16), this.qH(eS, vt, pY))
	}
}

function a65() {
	this.a6u = function(pY, font, maxWidth) {
		if (font && (yw.font = font), yw.measureText(pY).width <= maxWidth) return pY;
		for (var aC = pY.length - 1; 1 <= aC; aC--)
			if (pY = pY.substring(0, aC), yw.measureText(pY + "...").width <= maxWidth) return pY + "...";
		return "..."
	}
}

function a6A() {
	var a6w = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a6x = function(ek) {
		var a6z, pY = new Date(ek.getTime() - 6e4 * ek.getTimezoneOffset()).toUTCString();
		return pY.length < 12 || (pY = pY.substring(5, pY.length), 0 === (ek = ek.getTimezoneOffset())) ? pY : (a6z = (ek < 0 ? "+" : "-") + bO.gB(Math.abs(ek), 60), 0 == (ek = Math.abs(ek) % 60) ? pY + a6z : pY + a6z + ":" + (ek < 10 ? "0" :
			"") + ek)
	}, this.a70 = function(ek) {
		var pY = ek.toUTCString();
		return pY.length < 12 ? pY : function(ek) {
			return a6w[ek.getUTCDay()]
		}(ek) + ", " + pY.substring(5, pY.length - 4)
	}
}

function a61() {
	var a72 = null,
		a7C = (this.a2p = 0, this.a01 = function() {
			var gC = bm.buffer.data[5].value;
			a72 = "px " + gC, "system-ui" !== gC && (a72 += ", system-ui"), this.a2p = ii(32, 32, ["a", "b", "m"], 200, a72)
		}, this.a6g = function(j, k) {
			var eu = document.createElement("canvas");
			return eu.width = j, eu.height = k, eu
		}, this.getContext = function(canvas, alpha) {
			return canvas.getContext("2d", {
				alpha: alpha,
				willReadFrequently: !0
			})
		}, this.getImageData = function(p6, j, k) {
			return p6.getImageData(0, 0, j, k)
		}, this.ux = function(type, size) {
			return size = size.toFixed(2), 0 === type ? size + a72 : 1 === type ? "bold " + size + a72 : 2 === type ? "lighter " + size + a72 : 3 === type ? "italic " + size + a72 : 4 === type ? "oblique " + size + a72 : 5 === type ?
				"small-caps " + size + a72 : "small-caps bold " + size + a72
		}, this.textAlign = function(iq, id) {
			iq.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
		}, this.textBaseline = function(iq, id) {
			iq.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
		}, this.tX = function(e, code, color) {
			e.classList.toggle("fx-line", !color), e.classList.toggle("fx-box", !code || 5 === code);
			color = this.tW(bf.v8) + " solid " + (color || bE.qP);
			5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
		}, this.vv = function(e, fr, ft, j, k) {
			e = e.style;
			e.left = this.vw(fr), e.top = this.vw(ft), e.width = this.vw(j), e.height = this.vw(k)
		}, this.tP = function(gC) {
			return 1 + gC * a1.a2.ix()
		}, this.uP = function(oL, hJ) {
			return oL * this.tP(void 0 === hJ ? .5 : hJ) * i.iy / i.l
		}, this.vu = function(oL, hJ) {
			return oL * this.tP(void 0 === hJ ? .5 : hJ) * i.iy
		}, this.vb = function(oL, hJ, a73) {
			return this.tP(hJ) * Math.min(oL * i.iy, a73 * i.j) / i.l
		}, this.tW = function(gC) {
			return gC.toFixed(1) + "px"
		}, this.vw = function(gC) {
			return this.yO(gC).toFixed(1) + "px"
		}, this.yO = function(gC) {
			return gC / i.l
		}, this.a75 = function(a76) {
			for (var pY = "<ul>", fk = a76.length, aC = 0; aC < fk; aC++) pY += "<li>" + a76[aC][0] + ": <a href='" + a76[aC][1] + "' target='_blank'>" + a76[aC][0] + "</a></li>";
			return pY += "</ul>"
		}, this.a77 = function(a78) {
			return "<a href='" + a78 + "' target='_blank'>" + a78 + "</a>"
		}, this.a79 = function(e) {
			navigator.clipboard && navigator.clipboard.writeText(e.value)
		}, this.ya = function(e) {
			var el = e.textContent;
			bD.pc.a7A(el, "✔") || (1 === el.length ? e.textContent = "✔" : e.textContent = el + " ✔", setTimeout(function() {
				e.textContent = el
			}, 500))
		}, this.measureText = function(pY) {
			return yw.measureText(pY).width
		}, this.vl = function(a7B) {
			a7B.style.overflowX = "auto", a7B.style.overflowY = "hidden", a7B.style.whiteSpace = "nowrap", a7B.addEventListener("wheel", function(e) {
				Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.vy = this.scrollLeft, e.preventDefault())
			}), a7B.addEventListener("scroll", function() {
				this.vy = this.scrollLeft
			})
		}, -1e4);

	function a7F(a7E) {
		performance.now() - a7C < 600 || (a7C = performance.now(), a7E())
	}
	this.wa = function(e, a7D, a7E) {
		a7D && (e.onclick = function() {
			performance.now() - a7C < 600 || a7D()
		}), e.addEventListener("contextmenu", function(ut) {
			ut.preventDefault(), a7F(a7E)
		}), e.addEventListener("touchstart", function(ut) {
			2 === ut.touches.length && (ut.preventDefault(), a7F(a7E))
		}, {
			passive: !1
		})
	}
}

function a63() {
	this.hw = function(a4s) {
		return 0 === a4s ? 1 === aE.a3m && aE.i9 : 1 === a4s ? 1 === aE.a3m && !aE.i9 : 2 === aE.a3m
	}, this.hx = function(player) {
		return 0 !== ah.ni[player] && 2 !== ah.a7G[player]
	}, this.a7H = function(player) {
		return player === aE.fU && 2 !== ah.a7G[player]
	}, this.lk = function(player, kF) {
		return player !== kF && (0 === bj.fi[player] || bj.fi[player] !== bj.fi[kF])
	}, this.mr = function() {
		return am.lc < 2 ? 0 : aE.ih ? 1 < bk.a7I() : ah.hY[mh[1]]
	}, this.a7J = function() {
		var lc = am.lc;
		if (0 !== lc) {
			if (!aE.ih) return !this.kT(mh[0]);
			for (var fi = bj.fi, le = bk.lf(), lh = am.lh, aC = lc - 1; 0 <= aC; aC--) {
				var hI = lh[aC];
				if (fi[hI] === le && !this.kT(hI)) return 1
			}
		}
		return 0
	}, this.a7K = function(player) {
		return player === aE.fU
	}, this.a7L = function(kF, oL) {
		return ah.hm[aE.fU] < oL * ah.hm[kF]
	}, this.kT = function(player) {
		return player >= aE.l6 || 2 === ah.a7G[player]
	}, this.m4 = function(player) {
		return 0 !== ah.ni[player]
	}, this.a3c = function(player) {
		return player < aE.l6
	}, this.sn = function(a7M, a7N) {
		return a7M !== a7N
	}, this.h9 = function(player, gC) {
		var min;
		return gC = this.a7O(player, gC), ah.hm[player] += gC, ah.a7P[player] && (min = Math.min(ah.a7P[player], ah.hm[player]), ah.a7P[player] -= min, ah.hm[player] -= min), gC
	}, this.a7O = function(player, gC) {
		var a7Q = ah.hm[player];
		return gC = Math.min(gC, ah.hY[player] * aE.a7R - a7Q), gC = Math.min(gC, aE.a7S - a7Q), Math.max(gC, 0)
	}, this.nE = function(player, jO, a7T, a7U) {
		var a7Q = ah.hm[player],
			jO = bO.gB(a7Q * (jO + 1), 1024),
			a7T = bO.gB(a7T * a7Q, 1024),
			jO = Math.min(jO, a7Q - a7T);
		return jO = b5.a7W(player, jO), bR.gH[0] = jO, bR.gH[1] = a7T, a7U <= jO
	}, this.sH = function(player, rz, ry) {
		var player = ah.hm[player],
			a7V = bO.gB(64 * player, 1024);
		return rz = Math.min(rz, player - a7V), rz = this.a7O(ry, rz), bR.gH[0] = rz, bR.gH[1] = a7V, 1 <= rz
	}, this.a7X = function(player, rz, ry) {
		var player = ah.hm[player],
			a7V = bO.gB(64 * player, 1024);
		return rz = Math.min(rz, player - a7V), this.a7O(ry, rz)
	}, this.sJ = function(rz, ry) {
		return rz = this.a7O(ry, rz), bR.gH[0] = rz, bR.gH[1] = 0, 1 <= rz
	}, this.jN = function(player, a7Y) {
		return bO.gB(ah.hm[player] * (a7Y + 1), 1024)
	}, this.a7Z = function(player, a7T) {
		a7T = bO.gB(a7T * ah.hm[player], 1024);
		bR.gH[1] = a7T, ah.hm[player] -= a7T
	}, this.h7 = function(player, a7a) {
		var gV, gX, g4 = ah.hm[player];
		return a7a <= g4 ? ah.hm[player] -= a7a : (ah.hm[player] = 0, gX = ah.a7P[player] + (gV = 5 * ((g4 = a7a - g4) >> 2)), bg.hA(player, gV - g4, 12), gX <= aE.a7b ? ah.a7P[player] = gX : (ah.a7P[player] = aE.a7b, bg.hA(player, gX - aE.a7b,
			18))), a7a
	}, this.mI = function(player, jO) {
		var hm = ah.hm,
			a7Q = hm[player],
			jO = bO.gB(a7Q * (jO + 1), 1024),
			a7V = Math.max(bO.gB(a7Q, 10), 1e3);
		return (jO = Math.min(jO, a7Q - a7V)) < 0 ? (hm[player] = 0, a7V = Math.min(1e3, a7Q + aE.a7b - ah.a7P[player]), bR.gH[1] = a7V, ah.a7P[player] += a7V - a7Q, 0) : (bR.gH[1] = a7V, jO = b5.a7W(player, jO), hm[player] -= a7V + jO, b5.a7c(
			player, jO), jO)
	}, this.nG = function(player) {
		var iU = bR.gH[0];
		ah.hm[player] -= iU + bR.gH[1], b5.a7c(player, iU)
	}, this.so = function(player, kF) {
		return (kF = Math.min(kF, aE.fh)) < aE.fh && 0 === ah.ni[kF] && (kF = aE.fh), (bR.fg[0] = kF) === aE.fh || bw.fd(player, kF)
	}, this.sr = function(player, ry) {
		return 0 !== ah.ni[ry] && !bw.fd(player, ry)
	}, this.a7d = function(player, a7e) {
		for (var hI, fk = am.lc, a7f = 0, a7g = mh, aC = 0; aC < fk; aC++)
			if (hI = a7g[aC], !this.kT(hI)) {
				if (player === hI) return !0;
				if (++a7f > a7e) return !1
			} return !1
	}, this.md = function(hI) {
		var a7h = aE.ih ? bk.ld() : ah.hY[mh[0]];
		return a7h >= bO.gB(hI * aE.kq, 100)
	}, this.a7i = function(gC, min, max) {
		return Math.floor(bO.iw(isNaN(gC) ? 0 : Number(gC), min, max))
	}
}

function a66() {
	this.a7j = function(canvas, a7k, a7l) {
		var j = canvas.width,
			k = canvas.height,
			eu = bD.tO.a6g(j, k),
			iq = bD.tO.getContext(eu, !0),
			canvas = (iq.drawImage(canvas, 0, 0), iq.getImageData(0, 0, j, k));
		return a7k(canvas.data, j, k, a7l), iq.putImageData(canvas, 0, 0), eu
	}, this.a7m = function(a2I, j, k) {
		for (var fr = j - 1; 0 <= fr; fr--)
			for (var ft = k - 1; 0 <= ft; ft--) {
				var aC = 4 * (fr + ft * j);
				a2I[3 + aC] = a2I[aC], a2I[aC] = a2I[1 + aC] = a2I[2 + aC] = 255
			}
	}, this.a7n = function(a2I, j, k) {
		for (var fr = j - 1; 0 <= fr; fr--)
			for (var ft = k - 1; 0 <= ft; ft--) {
				var aC = 4 * (fr + ft * j);
				a2I[1 + aC] > a2I[2 + aC] + 10 && (a2I[3 + aC] = a2I[aC], a2I[1 + aC] = a2I[2 + aC])
			}
	}, this.a7o = function(a2I, j, k) {
		for (var fr = j - 1; 0 <= fr; fr--)
			for (var ft = k - 1; 0 <= ft; ft--) {
				var g3, gC, aC = 4 * (fr + ft * j);
				a2I[1 + aC] > a2I[2 + aC] + 10 && (gC = 0 < (g3 = 255 - a2I[1 + aC] + a2I[2 + aC]) ? Math.min(255, Math.round(255 * a2I[2 + aC] / g3)) : 0, a2I[aC] = a2I[1 + aC] = a2I[2 + aC] = gC, a2I[3 + aC] = g3)
			}
	}, this.a7p = function(a2I, j, k, a7l) {
		for (var gap = Math.floor(Math.min(j, k) * a7l), fr = 0; fr < j; fr++)
			for (var aC, ft = 0; ft < k; ft++)(fr < gap || ft < gap || j - gap <= fr || k - gap <= ft) && (a2I[3 + (aC = 4 * (fr + ft * j))] = 255 - 255 * (a2I[1 + aC] - a2I[aC]) / (255 - a2I[aC]))
	}, this.a7q = function(a2I, j, k, a7l) {
		for (var fr = j - 1; 0 <= fr; fr--)
			for (var ft = k - 1; 0 <= ft; ft--) {
				var aC = 4 * (fr + ft * j);
				a2I[aC] = a7l[0], a2I[1 + aC] = a7l[1], a2I[2 + aC] = a7l[2]
			}
	}, this.a7r = function(a2I, j, k, a7l) {
		for (var gap = Math.floor(j * a7l), fr = 0; fr < j; fr++)
			for (var aC, ft = 0; ft < k; ft++)(fr < gap || ft < gap || j - gap <= fr || k - gap <= ft) && (a2I[aC = 4 * (fr + ft * j)] = a2I[1 + aC] = a2I[2 + aC] = 0)
	}, this.a7s = function(a2I, j, k) {
		for (var ft, aC, fr = j - 1; 0 <= fr; fr--)
			for (ft = k - 1; 0 <= ft; ft--) 200 < a2I[1 + (aC = 4 * (fr + ft * j))] && a2I[1 + aC] - 20 > a2I[aC] && a2I[1 + aC] - 20 > a2I[2 + aC] ? a2I[aC] + a2I[2 + aC] < 40 ? a2I[3 + aC] = 0 : (a2I[3 + aC] = a2I[aC], a2I[aC] = 255, a2I[1 +
				aC] = 255, a2I[2 + aC] = 255) : a2I[aC] < 50 && a2I[1 + aC] < 50 && a2I[2 + aC] < 50 && (a2I[aC] + a2I[1 + aC] + a2I[2 + aC] < 50 ? a2I[3 + aC] = 180 : a2I[3 + aC] = 180 + Math.floor(75 * (a2I[aC] + a2I[1 + aC] + a2I[2 + aC] -
				50) / 100))
	}, this.a7t = function(a2I, j, k) {
		for (var ft, aC, fr = j - 1; 0 <= fr; fr--)
			for (ft = k - 1; 0 <= ft; ft--) a2I[1 + (aC = 4 * (fr + ft * j))] > a2I[aC] + 20 && a2I[1 + aC] > a2I[2 + aC] + 20 && a2I[aC] + a2I[2] < 40 && (a2I[3 + aC] = 255 - a2I[1 + aC], a2I[aC] = a2I[1 + aC] = a2I[2 + aC] = a2I[aC])
	}, this.a6k = function(a2I, j, k, a7l) {
		for (var eS = j >> 1, fr = 0; fr < j; fr++)
			for (var ft = 0; ft < k; ft++) Math.sqrt((fr - eS) * (fr - eS) + (ft - eS) * (ft - eS)) > a7l * eS && (a2I[4 * (fr + ft * j) + 3] = 0)
	}
}

function a64() {
	var a7u = {
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
		a7v = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.uM = function(ew) {
		return ew.replace(a7v, function(match) {
			return a7u[match] || match
		})
	}, this.a35 = function(gC) {
		var aC, a7w, a7x, a7y, a7z;
		if (gC < 0) return "-" + this.a35(Math.abs(gC));
		if (gC < 1e3) return gC.toString();
		for (a7w = Math.floor(Math.log(gC + .5) / Math.log(10)) + 1, a7x = Math.floor((a7w - 1) / 3), a7z = (a7y = gC.toString()).substring(a7w - 3, a7w), aC = 1; aC < a7x; aC++) a7z = a7y.substring(a7w - 3 * (aC + 1), a7w - 3 * aC) + " " + a7z;
		return a7y.substring(0, a7w - 3 * a7x) + " " + a7z
	}, this.a80 = function(hI, a7w) {
		return hI.toFixed(a7w) + "%"
	}, this.a81 = function(gC, a82) {
		return gC.toFixed(bO.iw(Math.floor((void 0 === a82 ? 3 : a82) - Math.log10(Math.max(gC, 1))), 0, 8))
	}, this.a83 = function(gC, oL, a7w) {
		return (gC * oL).toFixed(a7w)
	}, this.pq = function(username) {
		var fo, fZ = username.indexOf("[");
		return !(fZ < 0) && 1 < (fo = username.indexOf("]")) - fZ && fo - fZ <= 8 ? username.substring(fZ + 1, fo).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.pq;
	this.a84 = function(pY) {
		for (var g3 = Math.floor(.5 * pY.length + .5), oR = Math.floor(.5 * (g3 - 1)), aC = 0; aC < oR; aC++)
			for (var g4 = -1; g4 < 2; g4 += 2) {
				var eu = g3 + g4 * aC;
				if (" " === pY[eu]) return [this.a4V(pY.substring(0, eu)), this.a85(pY.substring(eu))]
			}
		return [pY.substring(0, g3), pY.substring(g3)]
	}, this.a85 = function(pY) {
		for (var fk = pY.length, aC = 0; aC < fk; aC++)
			if (" " !== pY[aC]) return pY.substring(aC);
		return pY
	}, this.a4V = function(pY) {
		for (var aC = pY.length - 1; 0 <= aC; aC--)
			if (" " !== pY[aC]) return pY.substring(0, aC + 1);
		return pY
	}, this.a86 = function(pY, a87) {
		return pY.split("(")[0] + "(🧈 " + a87.toFixed(2) + ")"
	}, this.startsWith = function(pY, a88) {
		return pY.substring(0, a88.length) === a88
	}, this.a7A = function(pY, a88) {
		var fk = pY.length;
		return pY.substring(fk - a88.length, fk) === a88
	}, this.a89 = function(h, a8A, a8B) {
		var pY = "",
			fk = h.length - 1;
		a8B = a8B || "";
		for (var aC = 0; aC < fk; aC++) pY += a8B + h[aC] + a8B + ",", (aC + 1) % a8A == 0 && (pY += "\n");
		return pY += a8B + h[fk] + a8B
	}, this.a8C = function(pY, a2u, a2v) {
		return pY.replace(new RegExp(a2u, "g"), a2v)
	}
}

function a8D() {
	this.et = function(player, fW) {
		aJ.a1g(player, bP.fs(fW), bP.fu(fW)) && (bi.e2 = !0), aE.lQ && this.ep()
	}, this.ep = function() {
		aE.i9 = !1;
		for (var aC = 0; aC < aE.l6; aC++) 0 !== ah.ni[aC] && 0 === ah.hY[aC] && aJ.a1n(aC);
		0 !== ah.ni[aE.fU] ? (bg.ne[7] = ah.hY[aE.fU], bg.ne[8] = ah.hm[aE.fU], aS.a8E(), aX.a8F(), aE.ht || aE.hu || aI.o3(ah.je[aE.fU] - 5, ah.jg[aE.fU] - 5, ah.jf[aE.fU] + 5, ah.jh[aE.fU] + 5), aw.dv()) : aY.show(!1, !1, !1, !0), aO.a8G(18),
			ag.a8H(), ag.nU(!0), bS.z.a8I(), aM.uN(), aE.sm = null, be.a8J = !0, be.a8K(), aE.lQ && a1.a2.setState(1)
	}
}

function cA() {
	this.fh = 512, this.a7S = 15e8, this.a8L = 1e9, this.a7b = 5e4, this.a8M = 512, this.h4 = 2, this.fU = 0, this.l6 = 0, this.a3p = 0, this.lS = 0, this.a3o = 0, this.a0r = 512, this.a0w = 512, this.a7R = 150, this.lQ = !0, this.ht = 0, this.hu =
		0, this.a3m = 0, this.kq = 0, this.oC = !1, this.i9 = 0, this.a8N = 0, this.ih = !1, this.a0y = 0, this.a0z = 0, this.lO = 0, this.a2E = 0, this.sm = null, this.a46 = new a22, this.a8O = 30, this.a3j = 0, this.a3r = 0, this.a45 = 0, this
		.a3e = 0, this.data = new a8P, this.a8Q = new a8R, this.a8S = 0, this.a8T = "", this.a4F = -1, this.a8U = function() {
			this.a4F = -1, bX.turnstile.close(), bR.dv(), bU.dv(), bu.clear(), this.a3p = this.l6 = this.data.humanCount, this.lQ = 1 === this.a3p && !__fx.customLobby.isActive(), this.oC = !1, this.ht = this.data.isReplay, this.hu = this.data.a8V,
				this.lO = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a2E = this.data.isContest, this.ih = this.lO < 7 || 9 === this.lO, this.lO = 10 === this.lO &&
				this.lQ ? 7 : this.lO, this.lO = 8 === this.lO && 2 !== this.l6 ? 7 : this.lO, b0.dv(), this.a0y = this.data.numberTeams, this.data.teamPlayerCount ? this.a0z = +(0 < this.data.teamPlayerCount[0]) : (this.a0z = 0, this.ih && this
					.lQ && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.a0y + 1), aE.a8Q.a8W())), this.a8O = this.l6 <= 2 ? 30 : this.l6 <= 50 ? 40 : 50, this.a8N = this.i9 = __fx.customLobby.isActive() ?
				__fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.sm = this.i9 ? new a8D : null, this.a0r = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this
				.l6) : 1 === m.e6 ? this.a0r = this.l6 : this.a0r = this.data.playerCount,
				this.a0w = this.a0r, this.lS = this.a0r - this.l6, this.a3o = 0, this.fU = this.data.selectedPlayer, this.a3j = 0, this.a3r = 0, this.a45 = 0, this.a3e = 0, az.a8X(this.data.spawningSeed), af.dv(), ah.dv(), ao.dv(), aj.a8Y(), bB.rp
				.sa = [], bB.iB.rs = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.dv(), this.a3m = 1, bg.dv(), a8Z(), ad.dw(), aq.a8a(), be.dv(), ad.dv(), au.dv(),
				bP.dv(), bQ.dv(), ap.dv(), bY.a8b(), aF.dv(), aj.a8(), aJ.dv(), aK.dv(), am.a8c(), bC.dv(), bk.dv(), bS.dv(), bh.dv(), a8d.putImageData(a8e, 0, 0), aW.dv(), aT.dv(), aS.dv(), bF.dv(), ax.dv(), aV.dv(), aX.dv(), aN.dv(), aR.dv(), aO
				.dv(), aQ.dv(), aM.dv(), aY.dv(), aG.dv(), aH.dv(), gn(), ae.dv(), ag.dv(), b5.dv(), b6.dv(), b2.dv(), b8.dv(), b9.dv(), this.a46.dv(), bi.a8b(), aI.o2(), 0 === ah.ni[aE.fU] && aY.show(!1, !0), ag.nU(!0), aw.dv(), bi.e2 = !0, this
				.ht || this.lQ && this.i9 || a1.a2.setState(1), this.a8S = 0
		}, this.a5C = function(ej) {
			bC.sk.a8g.length ? this.a8T = bC.sk.a8g : this.a8T = bC.a8h.a3G(), this.ht || __fx.replayHistory.save(this.a8T), !1 === __fx.customLobby.isActive() && b1.z.a8i(), bu.clear(), this.a3m = 0, bi.a8j(), a1.a2.setState(0), ab.setState(0), __fx
				.customLobby.isActive() || bX.eb.show(ej), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a8S ? u.z.a8k(0) : 1 === this.a8S ? u.v(19) : u.v(5, 5)
		}, this.a8l = function() {
			return this.ht ? aN.hv || !bF.a8m : this.lQ && (aN.hv || this.i9)
		}, this.a8n = function() {
			return 1 === this.a3m && !this.i9
		}
}

function a8P() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.a8V = 0, this.a8o = 0, this.elo = null, this.colorsType = 0, this
		.colorsPersonalized = 1, this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData =
		null, this.spawningType = 0, this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this
		.aIncomeData = null, this.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null,
		this.a8p = null
}

function a8R() {
	this.a8W = function() {
		var a8q = aE.data;
		bD.tV.a6Y(a8q.teamPlayerCount, a8q.playerCount), a8q.numberTeams = bD.tV.a6P(a8q.teamPlayerCount, 0), a8q.teamPlayerCount[0] && a8q.teamPlayerCount[7] && (a8q.teamPlayerCount[7] = 0, this.a8W())
	}, this.a8r = function() {
		var a8q = aE.data;
		a8q.mapType < 2 ? bV.a8(bV.a8s(a8q), a8q.mapSeed) : bV.a8t(a8q.canvas)
	}, this.a8u = function() {
		var a8q = aE.data;
		a8q.colorsData || (a8q.colorsData = new Uint32Array(1)), 0 === a8q.gameMode && (a8q.colorsData[0] = bm.z.zz()), a8q.selectableName && (a8q.playerNamesData || (a8q.playerNamesData = new Array(1)), a8q.playerNamesData[0] = bm.buffer.data[
			122].value), a8q.a8p = new Uint32Array(1), a8q.a8p[0] = bJ.fB.fC(bm.buffer.data[105].value, 5)
	}, this.a8v = function() {
		aE.data = new a8P
	}
}

function dl() {
	var a8w = [];
	this.sK = function(player, ry, a8x, a8y) {
		player === aE.fU || ry === aE.fU || !a8y && bD.h6.kT(player) || bD.h6.kT(ry) || this.a2F(ah.a2G[player] + " supported " + ah.a2G[ry] + " with " + bD.pc.a35(a8x) + " ressource" + (1 === a8x ? "." : "s."))
	}, this.a2F = function(pY, s9) {
		pY = {
			ek: aX.a90(),
			pY: pY,
			s9: s9
		};
		a8w.push(pY), 30 === u.vX && u.a52().a2F(pY)
	}, this.clear = function() {
		a8w = [];
		var vt = u.a91(30);
		vt && vt.clear()
	}, this.a92 = function() {
		return a8w
	}
}

function de() {
	this.a2m = 0, this.gap = 0, this.v8 = 0, this.tT = 0, this.dv = function() {
		this.resize()
	}, this.resize = function() {
		this.a2m = .0022 * bD.tO.tP(.5) * i.iy, this.v8 = this.a2m / i.l, this.gap = Math.max(Math.floor((a1.a2.ix() ? .0114 : .01296) * i.iy), 2), this.tT = this.gap / i.l
	}
}

function dd() {
	this.a93 = function() {
		return a1.a2.ix() ? 2 : 1
	}
}

function cL() {
	var p9, fr, ft, a94, a95, a96, ek, a97, a98, a99, a9A, gap, zoom, sT, a9B;

	function a9P(mL, mM, fO) {
		ad.ff(fO) || -1 === (mL = bQ.lv.a9Y(mL, mM)) ? aO.a9X(fO) : aO.a9Z(mL)
	}

	function a9L(a97) {
		for (var aC = sT.length - 1; 0 <= aC; aC--)
			if (sT[aC] === a97) return 1
	}

	function a9J(a9G) {
		var aC, fk;
		if (-1 !== a9G)
			for (fk = p9.length, aC = 0; aC < fk; aC++)
				if (p9[aC].iX && p9[aC].fr + 1 === a9G % 4 && p9[aC].ft + 1 === a9G >> 2) return aC;
		return -1
	}

	function a9H(mL, mM) {
		var vt = gap / 2;
		return mL < fr - a94 - 3 * vt || fr + 3 * a94 + 5 * vt < mL || mM < ft - a94 - 3 * vt || ft + 2 * a94 + 3 * vt < mM ? -1 : 4 * (mM < ft - vt ? 0 : mM < ft + a94 + vt ? 1 : 2) + (mL < fr - vt ? 0 : mL < fr + a94 + vt ? 1 : mL < fr + 2 * a94 +
			3 * vt ? 2 : 3)
	}
	this.a9C = function() {
		var aC, g4, a9F = [bE.qp, bE.r5, bE.qN, bE.rW, bE.rI];
		for (p9 = new Array(10), aC = 0; aC < 10; aC++) p9[aC] = {
			id: aC,
			iX: !1,
			m3: 0,
			canvas: [],
			fr: 0,
			ft: 0
		};
		for (p9[0].colors = [0, 1, 2, 3], p9[0].fr = 0, p9[0].ft = 0, p9[1].colors = [1, 4], p9[1].fr = 1, p9[1].ft = 0, p9[2].colors = [0, 1], p9[2].fr = -1, p9[2].ft = 0, p9[3].colors = [0], p9[3].fr = 0, p9[3].ft = 0, p9[4].colors = [0, 2],
			p9[4].fr = 1, p9[4].ft = 1, p9[5].colors = [3], p9[5].fr = 0, p9[5].ft = -1, p9[6].id = 20, p9[6].colors = [0], p9[6].fr = 1, p9[6].ft = -1, p9[7].id = 21, p9[7].colors = [0], p9[7].fr = 0, p9[7].ft = 1, p9[8].id = 16, p9[8]
			.colors = [0], p9[8].fr = 0, p9[8].ft = 0, p9[9].id = 10, p9[9].colors = [4], p9[9].fr = 2, p9[9].ft = 0, aC = 0; aC < 10; aC++)
			for (g4 = 0; g4 < p9[aC].colors.length; g4++) p9[aC].canvas.push(function(id, a6e) {
				if (id < 20) return bD.canvas.a2Y(ac.get(3), id, a6e);
				var a6e = ac.get(3).height,
					a6f = bD.tO.a6g(a6e, a6e),
					iq = bD.tO.getContext(a6f);
				20 === id ? iq.drawImage(ac.get(18), 0, 0) : 21 === id && ak.a2I.a2n(ak.q7.a2c + ak.q7.a2t, iq, 0, 0, a6e);
				return a6f
			}(p9[aC].id, a9F[p9[aC].colors[g4]]))
	}, this.a9E = function() {
		return p9
	}, this.dv = function() {
		sT = [], fr = ft = ek = 0, a95 = a96 = -1e3, this.resize()
	}, this.resize = function() {
		a94 = Math.floor((a1.a2.ix() ? .075 : .0468) * i.iy), zoom = a94 / ac.get(3).height, gap = Math.floor(a94 / 3)
	}, this.a5f = function(mL, mM) {
		return !!this.iX() && (bi.e2 = !0, !!ak.a2I.hy(mL, mM, a98) || (mL = function(mL, mM) {
			a96 = a95 = -1e3;
			var a9I = a9J(a9H(mL, mM));
			if (-1 === a9I) return 0;
			if (1 !== p9[a9I].colors[p9[a9I].m3])
				if (5 === a9I) {
					if (! function() {
							var el = performance.now();
							a9B + 4e3 < el && (sT = []);
							a9B = el
						}(), a9L(a97)) return 1;
					sT.push(a97), 16 < sT.length && sT.shift()
				} else if (6 === a9I) {
				for (var aC = sT.length - 1; 0 <= aC; aC--) 0 === ah.ni[sT[aC]] && sT.splice(aC, 1);
				0 < sT.length && (b6.a9M(1, sT, !0) && bB.h6.sS(sT, a97), sT = [])
			} else if (2 === a9I) ao.iP(a97) && bB.iB.rx(aS.iF(), a97);
			else if (3 === a9I) aE.i9 && bB.iB.iC(a99);
			else if (0 === a9I)
				if (0 === p9[0].m3) {
					if (aE.a8N && aX.a90() < 350) return 1;
					bY.a9N(4), bB.iB.iI(aS.iF(), a97)
				} else b2.iJ(a97, aS.iF());
			else if (1 === a9I) bB.iB.iN(aS.iF(), a99);
			else if (9 === a9I) bB.iB.iQ(aS.iF());
			else {
				if (7 === a9I) return bY.a9N(0), ak.a2I.show(mL, mM), 2;
				if (4 === a9I) b6.a9M(0, [a97], !0) && bB.h6.sP(a97);
				else {
					if (8 !== a9I) return 0;
					bB.iB.iE(aS.iF(), a9A, a97)
				}
			}
			return 1
		}(mL, mM), this.uN(), 2 === mL && (ak.a2I.iX = !0), 0 < mL))
	}, this.a5h = function(mL, mM) {
		this.iX() || (a95 = mL, a96 = mM, ek = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.i1(mouseX),
			coordY = bP.i3(mouseY),
			point = bP.fa(bP.g7(coordX, coordY));
		bP.i4(coordX, coordY) && a9P(mouseX, mouseY, point)
	}, this.click = function(mL, mM, a5o) {
		var i0 = bP.i1(mL),
			i2 = bP.i3(mM),
			fW = bP.g7(i0, i2),
			fO = bP.fa(fW),
			a9O = (a1.a2.ix() ? .025 : .0144) * i.iy,
			el = performance.now();
		return !(Math.abs(mL - a95) > a9O || Math.abs(mM - a96) > a9O || ek + 500 < el || (ek = el, bM.tr() && (bM.hp = mL, bM.hq = mM, b8.ep(1), b9.ep(1)), !bP.i4(i0, i2))) && (a5o ? (a9P(mL, mM, fO), !1) : aN.hv || this.iX() || !bD.h6.hx(aE
			.fU) || aE.ht || aE.hu ? (this.uN(), !1) : (aE.i9 ? 0 <= (a99 = bv.iA(fW)) && (p9[3].iX = !0) : 2 === aE.a3m ? ad.hK(fO) && (a97 = ad.fc(fO), bD.h6.kT(a97) || (p9[0].iX = !0, p9[0].m3 = 1, p9[7].iX = !0)) : (bQ.iO.iP(aE.fU, fW) &&
				(p9[0].iX = !0, p9[0].m3 = 1, p9[1].iX = !0, p9[1].m3 = 0, p9[9].iX = !0, p9[9].m3 = 0), bQ.iL.iM(aE.fU, fW) && (p9[0].iX = !0, p9[0].m3 = 1, p9[1].iX = !0, p9[1].m3 = 1, a99 = bR.gM[7]), ad.fp(fO) ? (a9A = an.fL.fN(
				fO)) && (a9O = bP.fa(a9A), p9[8].iX = !0, a97 = ad.fb(a9O) ? aE.fh : ad.fc(a9O)) : (ad.a1l(aE.fU, fO) && (a98 = aE.fU, p9[0].iX = !0, p9[0].m3 = 1, p9[7].iX = !0), -1 !== (el = bv.iG(fW)) && (ad.fb(el << 2) ? (a97 = aE.fh,
					bw.iH(aE.fU) ? (p9[0].iX = !0, p9[0].m3 = 0) : ae.gr(aE.fU) && (p9[0].iX = !0, p9[0].m3 = 3)) : (a97 = ad.fc(el << 2), p9[0].m3 = 1, p9[5].iX = function(a97) {
					return !bD.h6.kT(a97) && !a9L(a97) && b6.a9M(1, [a97], !1)
				}(a97), p9[7].iX || bD.h6.kT(a97) || (a98 = a97, p9[7].iX = !0), p9[4].iX = !bD.h6.kT(a97) && !ag.a9T(a97) && b6.a9M(0, [a97], !1), p9[6].iX = function(a97) {
					if (0 === sT.length) return !1;
					if (performance.now() > a9B + 4e3) return !(sT = []);
					return !a9L(a97) && ! function(a97) {
						var aC;
						if (aE.ih)
							for (aC = sT.length - 1; 0 <= aC; aC--)
								if (!bw.fd(a97, sT[aC])) return 1;
						return
					}(a97)
				}(a97), bw.fd(a97, aE.fU) ? (bw.iK(aE.fU, a97) ? (p9[0].m3 = 0, p9[0].iX = !0) : ae.gr(aE.fU) && (p9[0].m3 = 3, p9[0].iX = !0), p9[0].iX = this.a9V()) : (p9[2].iX = !0, ao.iP(a97) ? p9[2].m3 = 0 : p9[2].m3 = 1,
					p9[0].iX = !0))))), this.a9Q(mL, mM)))
	}, this.a9Q = function(mL, mM) {
		return fr = mL - Math.floor(a94 / 2), ft = mM - Math.floor(a94 / 2), !!this.iX()
	}, this.a5L = function(mL, mM) {
		return !!this.iX() && (ak.a2I.iX ? !ak.a2I.a2l(mL, mM) && (ak.a2I.iX = !1, bi.e2 = !0) : function(uh, mL, mM) {
			mL = a9H(mL, mM);
			if (0 <= a9J(mL)) return !1;
			if ((1 === mL || 6 === mL) && 0 <= a9J(2)) return !1;
			if ((6 === mL || 9 === mL) && 0 <= a9J(10)) return !1;
			return uh.uN(), bi.e2 = !0
		}(this, mL, mM))
	}, this.uN = function() {
		for (var aC = p9.length - 1; 0 <= aC; aC--) p9[aC].iX = !1, p9[aC].m3 = 0;
		ak.a2I.iX = !1
	}, this.iX = function() {
		return this.a9V() || ak.a2I.iX
	}, this.a9V = function() {
		for (var fk = p9.length, aC = 0; aC < fk; aC++)
			if (p9[aC].iX) return !0;
		return !1
	}, this.yv = function() {
		if (this.iX())
			if (ak.a2I.iX) ak.a2I.yv();
			else {
				var aC, iq = yw,
					g4 = p9,
					fk = g4.length,
					a9d = (a94 + gap) / zoom;
				for (iq.imageSmoothingEnabled = !0, iq.setTransform(zoom, 0, 0, zoom, fr, ft), aC = 0; aC < fk; aC++) g4[aC].iX && yw.drawImage(g4[aC].canvas[g4[aC].m3], g4[aC].fr * a9d, g4[aC].ft * a9d);
				iq.imageSmoothingEnabled = !1, iq.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cM() {
	var k, canvas, a9e, a9f, a9g, a9h = -1;

	function a9i() {
		var a9j, p6 = canvas.getContext("2d", {
			alpha: !0
		});
		p6.clearRect(0, 0, k, k), p6.fillStyle = bE.qL, p6.fillRect(0, 0, k, k), 9 === a9f && (p6.fillStyle = bE.qQ, p6.fillRect(0, 0, k, k)), p6.fillStyle = bE.qP, __fx.utils.smoothFrame(p6, k, k) || (p6.fillRect(0, 0, k, 1), p6.fillRect(0, 0, 1,
			k), p6.fillRect(0, k - 1, k, 1), p6.fillRect(k - 1, 0, 1, k)), a9j = .9 * k / ac.get(0).width, p6.imageSmoothingEnabled = !0, p6.setTransform(a9j, 0, 0, a9j, Math.floor((k - a9j * ac.get(0).width) / 2), Math.floor((k - a9j * ac.get(0)
			.height) / 2)), p6.drawImage(ac.get(0), 0, 0), p6.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a9m(mL, mM) {
		if (!aN.hv) return mL <= k + bf.gap && mM >= aS.ft ? 9 : -1;
		if (mL <= 4 * k + bf.gap) {
			if (mM >= aS.ft) return 0;
			if (mM >= aS.ft - k - a9g * bf.gap) return 2
		} else if (mL <= 7 * k + bf.gap && mM >= aS.ft - k - a9g * bf.gap) return 1;
		return -1
	}
	this.hv = !1, this.dv = function() {
		a9f = -1, this.hv = !1, a9g = a1.a2.ix() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, a9e = bD.tO.ux(1, (a1.a2.ix() ? .5 : .45) * k), a9i()
	}, this.a9k = function() {
		return !(1 !== aE.a3m || aE.i9 || (aE.ht ? !bF.a8m : this.hv && aE.lQ))
	}, this.a5w = function() {
		this.hv = !this.hv, this.hv ? (bF.a5v(!1), aE.ht && bF.a8m && bF.a5x(!0), this.a9l(), 9 === a9f && (a9f = 0)) : (a9f = -1, a9i(), !aE.lQ || 1 !== aE.a3m || aE.i9 || aE.ht || a1.a2.setState(1)), bi.e2 = !0
	}, this.a9l = function() {
		(aE.lQ || aE.ht) && 1 === aE.a3m && (aW.nU(!0), aE.i9 || setTimeout(function() {
			be.a3y()
		}, 0), a1.a2.setState(0))
	}, this.hy = function(mL, mM) {
		return 0 <= (a9h = a9m(mL, mM)) || !aN.hv || aE.lQ || aE.ht || bh.iX || aN.a5w(), a9h
	}, this.a5L = function(mL, mM) {
		mL = a9m(mL, mM);
		mL !== a9f && (a9f = mL, this.hv || a9i(), bi.e2 = !0)
	}, this.a5M = function(mL, mM) {
		mL = a9m(mL, mM);
		return -1 !== mL && a9h === mL && (this.hv ? aE.oC ? (0 <= mL && bF.a5v(!1), !aE.ht) : (0 === mL ? aE.a5C() : 1 === mL ? this.a5w() : 2 === mL && u.v(1, 0), !0) : 9 === mL && (this.a5w(), !0))
	}, this.yv = function() {
		var j;
		this.hv ? (j = Math.floor(5.5 * k), yw.setTransform(1, 0, 0, 1, bf.gap, aS.ft), yw.fillStyle = bE.qL, yw.fillRect(0, 0, j, k), 0 === a9f ? (yw.fillStyle = bE.qQ, yw.fillRect(0, 0, 4 * k, k)) : 1 === a9f && (yw.fillStyle = bE.qQ, yw
				.fillRect(4 * k, 0, Math.floor(1.5 * k), k)), yw.fillStyle = bE.qP, yw.fillRect(0, 0, j, 1), yw.fillRect(0, 0, 1, k), yw.fillRect(4 * k, 0, 1, k), yw.fillRect(0, k - 1, j, 1), yw.fillRect(j - 1, 0, 1, k), yw.font = a9e, bD.tO
			.textBaseline(yw, 1), bD.tO.textAlign(yw, 1), yw.fillText(L(54), 2 * k, .54 * k), j = .4 * k, aN.a9q(bf.gap + 4 * k + (1.5 * k - j) / 2, aS.ft + .3 * k, j), j = 1, yw.setTransform(1, 0, 0, 1, bf.gap, aS.ft - j * a9g * bf.gap - j *
				k), yw.fillStyle = bE.qL, yw.fillRect(0, 0, 4 * k, k), a9f === j + 1 && (yw.fillStyle = bE.qQ, yw.fillRect(0, 0, 4 * k, k)), yw.fillStyle = bE.qP, yw.fillRect(0, 0, 4 * k, 1), yw.fillRect(0, 0, 1, k), yw.fillRect(4 * k, 0, 1,
				k), yw.fillRect(0, k - 1, 4 * k, 1), yw.fillText(L(0 === j ? 54 : 55), 2 * k, .54 * k), yw.setTransform(1, 0, 0, 1, 0, 0)) : yw.drawImage(canvas, bf.gap, aS.ft)
	}, this.t1 = function(player) {
		return 0 !== ah.ni[player] && 2 !== aE.a3m && !bD.h6.kT(player)
	}, this.a9q = function(fr, ft, fk) {
		yw.setTransform(1, 0, 0, 1, fr, ft), yw.lineWidth = bf.a2m, yw.strokeStyle = bE.qP, yw.beginPath(), yw.moveTo(0, 0), yw.lineTo(fk, fk), yw.moveTo(0, fk), yw.lineTo(fk, 0), yw.stroke()
	}
}

function cN() {
	var a9s, k, a9t, a9u, a9v, a9w, a9x, a9y, a9z;

	function a1t() {
		return aS.aAI(aO.aAE()) ? ax.iX ? __fx.settings.keybindButtons ? aS.ft - 2 * aS.k - 3 * a9t : aS.ft - aS.k - 2 * a9t : __fx.settings.keybindButtons ? aS.ft - aS.k - 2 * a9t : aS.ft - a9t : bF.aAI(aO.aAH()) ? ax.iX ? bF.a1t() - aS.k - 2 *
			a9t : bF.a1t() - a9t : ax.iX ? i.k - aS.k - (bn.a93() + 1) * a9t : i.k - bn.a93() * bf.gap
	}

	function aA4(el, pY, id, hI, aA8, aA9, lj, aAA, aAB, aAC, aAN) {
		var aC, p6, a6f, q5, aAO = void 0 !== aAB,
			j = Math.floor(aR.measureText(pY, aO.a9e) + 1.5 * a9u + (aAO ? k : 1.5 * a9u));
		if (bi.e2 = !0, aAN || bu.a2F(pY, aAB), j + 2 * a9t + aS.k > i.j && !aAO && 50 !== id && 20 < pY.length) aA4(el, (aAN = bD.pc.a84(pY))[0], id, hI, aA8, aA9, lj, aAA, aAB, aAC, !0), aA4(el, aAN[1], id, hI, aA8, aA9, lj, aAA, aAB, aAC, !0);
		else if (aAN = j + (50 === id ? a9v : 0), (a6f = document.createElement("canvas")).width = j, a6f.height = k, (p6 = a6f.getContext("2d", {
				alpha: !0
			})).font = aO.a9e, bD.tO.textBaseline(p6, 1), bD.tO.textAlign(p6, 0), p6.clearRect(0, 0, j, k), p6.fillStyle = aA9, p6.fillRect(0, 0, j, k), __fx.utils.smoothFrame(p6, j, k, 0), p6.fillStyle = aA8, p6.fillText(pY, Math.floor(1.5 * a9u),
				Math.floor(k / 2)), aAO && (p6.imageSmoothingEnabled = !0, ak.a2I.a2n(aAB, p6, j - k, 0, k)), 0 === (q5 = {
				ek: el,
				pY: pY,
				id: id,
				player: hI,
				canvas: a6f,
				aA8: aA8,
				aA9: aA9,
				j: j,
				aAF: aAN,
				lj: lj,
				aAA: aAA,
				aAB: aAB,
				aAC: aAC
			}).ek || 0 < a9s.length && 0 < a9s[0].ek) a9s.unshift(q5);
		else {
			for (aC = 1; aC < a9s.length; aC++)
				if (0 < a9s[aC].ek) return void a9s.splice(aC, 0, q5);
			a9s.push(q5)
		}
	}

	function aA5(eS, vt, g4) {
		return "rgb(" + eS + "," + vt + "," + g4 + ")"
	}

	function aAP(id, hD) {
		for (var fk = a9s.length, aC = 0; aC < fk; aC++) a9s[aC].id === id && hD-- <= 0 && (a9s.splice(aC, 1), aC--, fk--)
	}

	function aAQ(id, player) {
		for (var fy = !1, aC = a9s.length - 1; 0 <= aC; aC--) a9s[aC].id !== id || player !== aE.fh && a9s[aC].player !== player || (a9s.splice(aC, 1), fy = !0);
		return fy
	}

	function aAo(pY) {
		aA4(340, pY, 6, 0, aA5(215, 245, 255), bE.qM, -1, !1)
	}
	this.aA0 = "", this.dv = function() {
		var self;
		a9y = 0, a9x = a1.a2.ix() ? 7 : 12, a9w = {
				x0: [0, 0, 0],
				aA1: [0, 0, 0],
				o0: [220, 180, 180],
				yu: [0, 0, 0],
				eu: [0, 0, 0]
			}, a9s = [], this.resize(), aE.i9 && this.a40(0, 18), bV.xH.aAn[bV.fQ].name.length && aAo(L(100, [bV.xH.aAn[bV.fQ].name])), bV.xH.aAn[bV.fQ].aAp && aAo(L(101, [bV.xH.aAn[bV.fQ].aAp])), aAo(L(102, [bV.fv - 2 + "x" + (bV.fw - 2)])),
			aAo(L(103, [bD.pc.a35(aq.aAq)])), aq.aAq !== aq.aAr && aAo(L(104, [bD.pc.a35(aq.aAr) + " (" + bD.pc.a80(100 * aq.aAr / aq.aAq, 1) + ")"])), 0 < aq.aAs && aAo(L(80, [bD.pc.a35(aq.aAs) + " (" + bD.pc.a80(100 * aq.aAs / aq.aAq, 1) +
				")"])), 0 < aq.aAt && aAo(L(105, [bD.pc.a35(aq.aAt) + " (" + bD.pc.a80(100 * aq.aAt / aq.aAq, 1) + ")"])), 10 === aE.lO && aA4(120, L(106), 6, 0, aA5(235, 255, 120), bE.qM, -1, !1), 0 !== (self = this).aA0.length && (aA4(200, self
				.aA0, 0, 0, bE.qP, bE.qM, -1, !1), self.aA0 = ""), aE.a2E && aA4(340, L(56), 6, 0, aA5(255, 200, 0), bE.qM, -1, !1), (self = aE.data.a8o) && aA4(340, 1 === self ? L(58) : L(59, [self]), 10, 0, bE.qP, bE.qM, -1, !1)
	}, this.resize = function() {
		var aA7, aC;
		if (k = (k = Math.floor((a1.a2.ix() ? .031 : .0249) * i.iy)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.a9e = bD.tO.ux(1, this.fontSize), a9t = bf.gap, a9u = Math.floor(k / 5), 0 < a9s.length)
			for (aA7 = a9s, a9s = [], aC = aA7.length - 1; 0 <= aC; aC--) aA4(aA7[aC].ek, aA7[aC].pY, aA7[aC].id, aA7[aC].player, aA7[aC].aA8, aA7[aC].aA9, aA7[aC].lj, aA7[aC].aAA, aA7[aC].aAB, aA7[aC].aAC, !0);
		this.aAD()
	}, this.aAD = function() {
		a9z = document.createElement("canvas");
		var pY = L(57),
			p6 = (a9v = aR.measureText(pY, this.a9e) + 5 * a9u, a9z.height = k, a9z.width = a9v, a9z.getContext("2d", {
				alpha: !0
			}));
		p6.font = this.a9e, bD.tO.textBaseline(p6, 1), bD.tO.textAlign(p6, 1), p6.clearRect(0, 0, a9v, k), p6.fillStyle = bE.qm, p6.fillRect(0, 0, a9v, k), p6.fillStyle = bE.qP, p6.fillText(pY, Math.floor(a9v / 2), Math.floor(k / 2))
	}, this.aAE = function() {
		var fk;
		return ax.iX ? ax.j : 0 === (fk = a9s.length) ? 0 : 1 === fk ? a9s[0].aAF : aAG(a9s[0].aAF, a9s[1].aAF)
	}, this.aAH = function() {
		var fk = a9s.length;
		return ax.iX ? fk ? aAG(ax.j, a9s[0].aAF) : ax.j : 0 === fk ? 0 : 1 === fk ? a9s[0].aAF : 2 === fk ? aAG(a9s[0].aAF, a9s[1].aAF) : aAG(aAG(a9s[0].aAF, a9s[1].aAF), a9s[2].aAF)
	}, this.hy = function(fr, ft) {
		for (var o9, aAJ, aAK = a1t(), aC = a9s.length - 1; 0 <= aC; aC--)
			if ((aAJ = aAK - (aC + 1) * k) <= ft && ft < aAJ + k) return 50 === a9s[aC].id ? fr >= i.j - a9v - a9t - a9s[aC].j && (fr >= i.j - a9v - a9t ? bB.h6.sP(a9s[aC].player) : aI.o4(a9s[aC].player, 800, !1, 0), !0) : fr >= i.j - a9s[aC].j -
				a9t && (736 === a9s[aC].id ? (aAJ = "https://" + a9s[aC].pY, window.open(aAJ, "_blank"), aT.oE = !1) : a9s[aC].aAA && (a9s[aC].aAC && a9s[aC].aAC.g3 ? (aAJ = a9s[aC].aAC.fW, o9 = bP.fs(aAJ) - 10, aAJ = bP.fu(aAJ) - 10, aI.o3(
					o9, aAJ, 19 + o9, 19 + aAJ)) : a9s[aC].aAC && a9s[aC].aAC.g4 ? aI.o5(a9s[aC].player, a9s[aC].aAC.o6) : (aI.o4(a9s[aC].player, 800, !1, 0), 0 <= a9s[aC].lj && (o9 = a9s[aC].lj, a9s[aC].lj = a9s[aC].player, a9s[aC]
					.player = o9))), !0);
		return !1
	}, this.a2F = function(el, pY, id, hI, aA8, aA9, lj, aAA, aAB, aAC) {
		aA4(el, pY, id, hI, aA8, aA9, lj, aAA, aAB, aAC)
	}, this.aAM = function(s) {
		aA4(300, s, 252, 0, bE.qP, bE.qM, -1, !1)
	}, this.a8G = function(id) {
		for (var aC = a9s.length - 1; 0 <= aC; aC--) a9s[aC].id === id && (a9s[aC].ek = 1)
	}, this.a40 = function(player, id) {
		0 === id ? (aR.et(player, 0), aAP(423, 2), aA4(160, L(60, [ah.a2G[player]]), 423, player, "rgb(10,220,10)", bE.qM, -1, !1)) : 1 === id ? (aAQ(50, aE.fh), aR.et(player, 1), aA4(360, L(61, [ah.a2G[player]]), 0, player, bE.r7, bE.qM, -1, !
				0), aI.o4(player, 2700, !1, 0)) : 2 === id ? (aR.et(player, 2), aA4(0, L(62), 0, player, "rgb(10,255,255)", bE.qM, -1, !0), aI.o4(player, 2700, !1, 0)) : 3 === id ? (aR.et(player, 2), aA4(0, L(63, [ah.a2G[player]]), 0, player, bE
				.qP, bE.qM, -1, !0), aI.o4(player, 2700, !1, 0)) : 4 === id ? this.aAR(1, player, player) : 5 === id ? bD.h6.kT(aE.fU) || (function(id, nd) {
				var aC, aAc = 0,
					fk = a9s.length;
				for (aC = 0; aC < fk; aC++)
					if (a9s[aC].id === id && nd <= ++aAc) return a9s.splice(aC, 1)
			}(1, 5), ag.aAT(player) && aA4(180, L(64, [ah.a2G[player]]), 1, player, aA5(255, 200, 180), bE.qM, -1, !0), bD.h6.a7L(player, 10) && (aAP(573, 0), aA4(180, L(65, [ah.a2G[player]]), 573, player, bE.r7, bE.qM, -1, !0))) : 18 === id ?
			aA4(255, L(66), 18, 0, bE.qP, bE.qM, -1, !1) : 21 === id ? aA4(220, L(67), id, 0, bE.qP, bE.qM, -1, !1) : 22 === id ? this.aAR(2, player, player) : 59 === id && aA4(0, L(68), id, 0, bE.rV, bE.qM, 0, !1)
	}, this.a57 = function(s) {
		aA4(200, L(69, [s]), 94, 0, bE.qP, bE.r3, -1, !1)
	}, this.a4C = function(aAU) {
		if (aE.fU === aAU && !aE.lQ && !aE.ht && !aE.hu)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aA4(0, "Your Win Count is now " + __fx.wins.count, 3, aAU, bE.qP, bE.qM, -1, !0);
		ah.hY[aAU] && (aR.et(aAU, 2), aE.l6 < 100 ? aA4(0, L(63, [ah.a2G[aAU]]), 3, aAU, bE.qP, bE.qM, -1, !0) : aA4(0, L(70, [ah.a2G[aAU]]), 3, aAU, bE.qP, bE.qM, -1, !0))
	}, this.a9X = function(fO) {
		var pY, aAX, aAV = "(" + bP.fs(fO >> 2) + ", " + bP.fu(fO >> 2) + ")",
			aAA = !1,
			player = 0;
		ad.ff(fO) ? ad.fb(fO) ? aAV = L(71, [aAV]) : (player = ad.fc(fO), (aE.ht || aE.hu) && !1 === __fx.hoveringTooltip.active && player !== aE.fU && (aE.fU = player, bg.aAW()), pY = L(72, [bD.p6.a6u(ah.a4W[player], bD.tO.ux(0, 10), 150)]) +
			"   ", pY = (pY += L(73, [bD.pc.a35(ah.hm[player])]) + "   ") + L(74, [bD.pc.a35(ah.hY[player])]) + "   ", aE.ih && (aAX = bj.a49[bj.lT[bj.fi[player]]], pY += L(75) + ": " + aAX + "   "), bD.h6.kT(player) && (pY += L(76) + ": " +
				aF.lH[aF.iU[player]] + "   "), aAV = pY = (pY += L(77, [player]) + "   ") + L(78, [aAV]), aAA = !0) : aAV = ad.fp(fO) ? L(79, [aAV]) + "   #" + ad.fS(fO) : L(80, [aAV]), aAP(55, 0), aA4(220, aAV, 55, player, bE.qP, bE.qM, -1,
			aAA, void 0, void 0, !0)
	}, this.a9Z = function(aAY) {
		var m1 = bQ.z,
			player = m1.n0[aAY] >> 3,
			pY = (bi.e2 = !0, aAP(55, 0), L(81, [ah.a2G[player]]) + "   ");
		aA4(220, pY += L(73, [bD.pc.a35(m1.aAZ[aAY])]), 55, player, bE.qP, bE.qM, -1, !0)
	}, this.s8 = function(rt, aAa, s9) {
		rt === aE.fU ? aA4(175, " " + L(82, [ah.a2G[aAa]]) + ": ", 1001, aAa, aA5(200, 255, 210), bE.qM, -1, !0, s9) : this.aAb(rt, s9)
	}, this.aAb = function(rt, s9) {
		aAP(1e3, 0), aA4(175, ah.a2G[rt] + ": ", 1e3, rt, bE.qP, "rgba(5,60,25,0.9)", -1, !0, s9)
	}, this.a4B = function() {
		var s;
		aE.a3r ? (s = L(83), aR.a4A(L(84), 2, 1, 12), aA4(0, s, 40, 0, "rgb(10,220,10)", bE.qM, -1, !1)) : (s = L(85), aR.a4A(L(86), 2, 0, 16), aA4(0, s, 41, 0, bE.qP, bE.qM, -1, !1))
	}, this.a23 = function() {
		var hD = ah.a2G,
			fn = aE.data;
		aA4(300, hD[0] + " [" + aE.a46.a29(fn.elo[0]) + "] vs " + hD[1] + " [" + aE.a46.a29(fn.elo[1]) + "]", 65, 0, bE.qG, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aAd = function(s) {
		aA4(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aAe = function(aAf) {
		aA4(0, L(aAf ? 87 : 88), 247, 0, bE.rU, bE.qM, -1, !1)
	}, this.a2B = function(a28, a2A, aAg) {
		var fn = aE.data,
			hD = ah.a2G;
		aA4(0, hD[0] + ": " + aE.a46.a29(fn.elo[0]) + " -> " + a28, 66, 0, bE.qP, aAg[0], -1, !1), aA4(0, hD[1] + ": " + aE.a46.a29(fn.elo[1]) + " -> " + a2A, 66, 1, bE.qP, aAg[1], -1, !1)
	}, this.sQ = function(player, id) {
		0 === id ? aAQ(50, player) ? (aA4(128, L(89, [ah.a2G[player]]), 52, player, aA5(180, 255, 180), bE.qM, -1, !0), ag.sz(player, 2, 255)) : aA4(384, L(90, [ah.a2G[player]]), 51, player, aA5(210, 210, 255), bE.qM, -1, !0) : aAQ(51, player) ?
			(aA4(128, L(91, [ah.a2G[player]]), 52, player, bE.qP, "rgba(60,120,10,0.9)", -1, !0), ag.sz(player, 2, 255)) : (aA4(384, L(92, [ah.a2G[player]]), 50, player, bE.qP, "rgba(90,90,90,0.9)", -1, !0), ag.sz(player, 2, 96))
	}, this.sU = function(x0, target) {
		var color = aA5(210, 255, 210);
		1 < x0.length ? aA4(230, L(93, [x0.length, ah.a2G[target]]), 66, target, color, bE.qM, -1, !0) : aA4(230, L(94, [ah.a2G[x0[0]], ah.a2G[target]]), 66, x0[0], color, bE.qM, target, !0)
	}, this.aAh = function(player, target) {
		aA4(230, L(95, [ah.a2G[player], ah.a2G[target]]), 66, player, bE.qP, "rgba(75,65,5,0.9)", target, !0)
	}, this.aAi = function(id, hD) {
		aAP(id, hD)
	}, this.a3u = function(id, player) {
		aAQ(id, void 0 === player ? aE.fh : player)
	}, this.aAj = function(id) {
		for (var aC = a9s.length - 1; 0 <= aC; aC--)
			if (a9s[aC].id === id) return a9s[aC];
		return null
	}, this.sL = function(a8x, aAk, player) {
		2 !== ah.a7G[aE.fU] && aA4(200, 1 === a8x ? L(96, [ah.a2G[player]]) : L(97, [bD.pc.a35(a8x), ah.a2G[player]]), 30, player, "rgb(190,255,190)", bE.qM, -1, !0)
	}, this.aAm = function(a8x, player) {
		2 !== ah.a7G[aE.fU] && (aAP(31, 0), a8x = " (" + bD.pc.a35(a8x) + ") 💸", aA4(150, a8x = bD.h6.kT(player) ? L(98) + a8x : L(99, [ah.a2G[player]]) + a8x, 31, player, bE.qG, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a3t = function(c3) {
		for (var eu = bi.l3(), aC = 2; 0 <= aC; aC--) 0 < a9w.yu[aC] && (c3 || a9w.eu[aC] < eu - 220) && this.aAu(aC)
	}, this.aAu = function(id) {
		var pY, fk = a9w.yu[id],
			player = a9w.x0[id];
		a9w.yu[id] = 0, 1 === fk ? (0 === id ? pY = L(107, [ah.a2G[player], ah.a2G[a9w.aA1[0]]]) : 1 === id ? pY = L(108, [ah.a2G[player]]) : 2 === id ? pY = L(109, [ah.a2G[player]]) : 3 === id && (pY = L(110, [ah.a2G[player]])), aAP(7, 0), aA4(
			a9w.o0[id], pY, 7, a9w.aA1[id], bE.qP, bE.qM, -1, !0)) : (pY = L(0 === id ? 111 : 1 === id ? 112 : 113, [fk]), aAP(7, 0), aA4(a9w.o0[id], pY, 7, player, bE.qP, bE.qM, -1, !1))
	}, this.aAR = function(id, iD, lj) {
		var eu = bi.l3(),
			fk = a9w.yu[id] + 1;
		a9w.yu[id]++, a9w.x0[id] = iD, a9w.aA1[id] = lj, 1 === fk && (a9w.eu[id] = eu), (1 === fk && (aE.a3p < 32 || 2 === aE.a3m) || 1 < fk && (a9w.eu[id] < eu - 140 || 2 === aE.a3m)) && this.aAu(id)
	}, this.ep = function() {
		b3.ep();
		for (var kL = (kL = a9s.length - a9x) <= 1 ? 1 : kL * kL, aC = a9s.length - 1; 0 <= aC; aC--) 0 < a9s[aC].ek && (a9s[aC].ek -= kL, a9s[aC].ek <= 0) && (bi.e2 = !0, a9s.splice(aC, 1));
		! function() {
			var hD, aC;
			if (128 !== a9y && !(++a9y < 128))
				for (hD = 5, aC = am.lc - 1; 0 <= aC; aC--) 1 === ah.a7G[am.lh[aC]] && 0 < hD-- && aA4(240, L(110, [ah.a2G[am.lh[aC]]]), 1, am.lh[aC], bE.qG, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a3t(!1)
	}, this.yv = function() {
		for (var a0u, ft = a1t(), aC = a9s.length - 1; 0 <= aC; aC--) a0u = ft - (aC + 1) * k, 50 === a9s[aC].id ? (yw.drawImage(a9s[aC].canvas, i.j - a9s[aC].j - a9v - a9t, a0u), yw.drawImage(a9z, i.j - a9v - a9t, a0u)) : yw.drawImage(a9s[aC]
			.canvas, i.j - a9s[aC].j - a9t, a0u)
	}, this.aAw = function(id, iU) {
		var aAV, aAx = bE.qZ;
		0 === id ? aAV = L(114) : 1 === id ? (aAV = L(115), aAx = bE.rM) : 2 === id ? aAV = L(116) : 3 === id ? aAV = L(117) : (aAV = bD.pc.a35(iU), aAx = 5 === id ? bE.rM : bE.qM), aAP(74, 0), aA4(0, aAV, 74, 0, bE.qP, aAx, -1, !1, void 0,
			void 0, !0)
	}
}

function cO() {
	var aAz, uo, yx = "",
		a0f = 0,
		a0g = 0,
		aAy = -1,
		eO = ["Team", "BR", "1v1", "Zombie"],
		aB0 = [
			[0, 15, 30, 45],
			[10, 40],
			[25],
			[55]
		],
		aB1 = 10;

	function aB5() {
		for (var aB6 = aB7(), aB8 = -1, aB3 = 0, aC = 0; aC < aB0.length; aC++) {
			var fn = aB9(aC, aB6);
			0 <= fn && (aB8 < 0 || fn < aB8) && (aB8 = fn, aB3 = aC)
		}
		if (!(aB8 < 0)) return aB8 !== aAy && (yx = eO[aB3] + " " + uo + ": " + aBA(aB8), aAy = aB8, a0f = aR.measureText(yx, aAz), a0f += Math.floor(.4 * a0g), 1);
		yx = ""
	}

	function aB7() {
		var el = new Date;
		return 60 * el.getUTCMinutes() + el.getUTCSeconds()
	}

	function aB9(aB3, aB6) {
		for (var aBC = aB0[aB3], gC = -1, g3 = 0; g3 < aBC.length; g3++) {
			var fn = (fn = 60 * aBC[g3] + aB1 - aB6) <= 0 ? 3600 + fn : fn;
			(gC < 0 || fn < gC) && (gC = fn)
		}
		return gC
	}

	function aBA(aBD) {
		return aBE(Math.floor(aBD / 60)) + ":" + aBE(aBD % 60)
	}

	function aBE(aBF) {
		return aBF < 10 ? "0" + aBF : String(aBF)
	}
	this.aB2 = function(aB3, aB4) {
		return 0 <= aB0[aB3].indexOf(aB4)
	}, this.dv = function() {
		uo = L(118)
	}, this.resize = function() {
		a0f = Math.floor((a1.a2.ix() ? .53 : .36) * i.iy), a0g = Math.floor(.065 * a0f), aAz = bD.tO.ux(1, Math.floor(.9 * a0g)), aAy += 1e3, aB5()
	}, this.ep = function() {
		aB5() && (bi.e2 = !0)
	}, this.aBB = function(vp, vq) {
		for (var aB6 = aB7(), pY = "", aC = vp; aC < Math.min(vq, aB0.length); aC++) {
			var fn = aB9(aC, aB6);
			0 <= fn && (pY += (pY ? "   " : "") + eO[aC] + ": " + aBA(fn))
		}
		return pY
	}, this.yv = function(ft) {
		yx && (yw.lineWidth = 1 + Math.floor(a0g / 15), yw.translate(i.j - a0g, ft + a0f), yw.rotate(-Math.PI / 2), yw.fillStyle = bE.qP, yw.fillRect(0, 0, a0f, a0g), yw.strokeStyle = bE.qG, yw.strokeRect(0, 0, a0f, a0g + 10), yw.fillStyle = bE
			.qG, yw.font = aAz, bD.tO.textBaseline(yw, 1), bD.tO.textAlign(yw, 1), yw.fillText(yx, Math.floor(a0f / 2), Math.floor(.59 * a0g)), yw.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cP() {
	var a8w, aBG, aBH, a0g, aBI, aBJ = 0,
		aBK = 0;

	function aBN(aC) {
		var aBP = !0,
			a2u = bE.qP,
			j = (1 === a8w[aC].id ? a8w[aC].p6.fillStyle = bE.rK : a8w[aC].kF === aE.fh ? a8w[aC].p6.fillStyle = bE.qa : (ad.aBQ(a8w[aC].kF), a8w[aC].p6.fillStyle = bD.color.qJ(bR.gJ[0], bR.gJ[1], bR.gJ[2], .87), 400 < bD.tV.a6J(bR.gJ, 0, 2) && (
				aBP = !1, a2u = bE.qG)), a8w[aC].canvas.width),
			vc = (a8w[aC].p6.clearRect(0, 0, j, a0g), a8w[aC].p6.fillRect(0, 0, j, a0g), a8w[aC].p6.fillStyle = a2u, ! function(p6, j, a0g) {
				p6.fillRect(0, 0, j, 1), p6.fillRect(0, a0g - 1, j, 1), p6.fillRect(0, 0, 1, a0g), p6.fillRect(j - 1, 0, 1, a0g)
			}(a8w[aC].p6, j, a0g), aBG + 2 * a0g < j && (a8w[aC].p6.fillRect(j - aBG - a0g, 0, 1, a0g), a8w[aC].p6.fillText(ah.a2G[a8w[aC].kF], Math.floor((j - aBG) / 2), Math.floor(.57 * a0g))), 0 !== a8w[aC].id ? 0 : a0g);
		a8w[aC].p6.fillText(bD.pc.a35(a8w[aC].iU), Math.floor(j - aBG / 2 - vc), Math.floor(.57 * a0g)),
			function(aC, j, vc, aBP) {
				a8w[aC].p6.fillStyle = aBP ? bE.qR : bE.qN;
				aBP = Math.floor(aBG * a8w[aC].iU / a8w[aC].aBW);
				a8w[aC].p6.fillRect(Math.floor(j - aBG - vc), a0g - aBI, aBP, aBI)
			}(aC, j, vc, aBP), 0 === a8w[aC].id ? (aBT(aC, j, aBP, a2u), function(aC, j, aBP) {
				a8w[aC].p6.strokeStyle = aBP ? bE.qh : bE.qr, a8w[aC].p6.fillRect(a0g, 0, 1, a0g);
				aBP = j - a0g;
				a8w[aC].p6.beginPath(), a8w[aC].p6.moveTo(Math.floor(.3 * a0g + aBP), Math.floor(a0g / 2)), a8w[aC].p6.lineTo(Math.floor(a0g - .3 * a0g + 0 + aBP), Math.floor(a0g / 2)), a8w[aC].p6.stroke(), a8w[aC].p6.beginPath(), a8w[aC].p6
					.moveTo(Math.floor(a0g / 2 + aBP), Math.floor(.3 * a0g)), a8w[aC].p6.lineTo(Math.floor(a0g / 2 + aBP), Math.floor(a0g - .3 * a0g + 0)), a8w[aC].p6.stroke()
			}(aC, j, aBP)) : aBT(aC, 2 * a0g, aBP, a2u)
	}

	function aBT(aC, j, aBP, a2u) {
		a8w[aC].p6.strokeStyle = a8w[aC].aBX ? bE.qY : aBP ? bE.qz : bE.r0, a8w[aC].p6.fillStyle = a2u, a8w[aC].p6.fillRect(j - a0g, 0, 1, a0g), a8w[aC].p6.lineWidth = Math.max(Math.floor(a0g / 12), 3), a8w[aC].p6.lineCap = "round";
		aBP = .35;
		j = a0g + 1, a8w[aC].p6.beginPath(), a8w[aC].p6.moveTo(Math.floor(j - aBP * a0g + 0), Math.floor(aBP * a0g)), a8w[aC].p6.lineTo(Math.floor(j - a0g + aBP * a0g), Math.floor(a0g - aBP * a0g + 0)), a8w[aC].p6.stroke(), a8w[aC].p6.beginPath(),
			a8w[aC].p6.moveTo(Math.floor(j - a0g + aBP * a0g), Math.floor(aBP * a0g)), a8w[aC].p6.lineTo(Math.floor(j - aBP * a0g + 0), Math.floor(a0g - aBP * a0g + 0)), a8w[aC].p6.stroke()
	}

	function aBj(h, aBh) {
		for (var iU, aC = aBh - 1; 0 <= aC; aC--) iU = ae.gx(aE.fU, aC), h[aC].iU !== iU && (h[aC].iU = iU, h[aC].aBW = Math.max(iU, h[aC].aBW), h[aC].aBO = !0)
	}

	function aBn(h, aBl) {
		for (var vp = aE.fU << 3, aAZ = bQ.z.aAZ, mx = bQ.z.mx, aBp = bQ.z.aBp, aC = aBl - 1; 0 <= aC; aC--) {
			var aBq = aBp[vp + aC],
				iU = aAZ[aBq];
			h[aC].iU !== iU ? (h[aC].iU = iU, h[aC].aBW = Math.max(iU, h[aC].aBW), h[aC].aBO = !0) : h[aC].aBX || mx[aBq] % 64 != 5 || (h[aC].aBX = !0, h[aC].aBO = !0)
		}
	}

	function aBM(a8z) {
		a8z.canvas = document.createElement("canvas"), bV.aBL.font = aBH;
		var j = aBG;
		a8z.kF < aE.fh && 0 === a8z.id && (j += Math.floor(bV.aBL.measureText(ah.a2G[a8z.kF] + "000").width)), j += a0g, 0 === a8z.id && (j += a0g), a8z.canvas.width = j, a8z.canvas.height = a0g, a8z.p6 = a8z.canvas.getContext("2d", {
			alpha: !0
		}), a8z.p6.font = aBH, bD.tO.textBaseline(a8z.p6, 1), bD.tO.textAlign(a8z.p6, 1)
	}

	function aBd(aC) {
		return aV.aBr() ? i.j - a8w[aC].canvas.width - bf.gap : aV.fr
	}

	function aBe(aC) {
		return Math.floor(2 * bf.gap + (aV.aBr() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * a0g))
	}
	this.dv = function() {
		aBJ = aBK = 0, a8w = [], this.resize()
	}, this.resize = function() {
		aBH = aO.a9e, a0g = aO.fontSize + 5, a0g = Math.floor(1.25 * a0g), a1.a2.ix() && (a0g = Math.floor(1.25 * a0g)), aBI = Math.floor(.15 * a0g), bV.aBL.font = aBH, aBG = Math.floor(bV.aBL.measureText("02 000 000 0000").width);
		for (var aC = a8w.length - 1; 0 <= aC; aC--) aBM(a8w[aC]), aBN(aC)
	}, this.nU = function() {
		for (var aC = a8w.length - 1; 0 <= aC; aC--) a8w[aC].aBO && (a8w[aC].aBO = !1, aBN(aC))
	}, this.hy = function(mL, mM) {
		if (!(2 === aE.a3m || 0 === ah.ni[aE.fU] || aE.ht || aE.hu || bD.h6.kT(aE.fU)))
			for (var aBY, aBZ, aBa, aBb = a1.a2.ix() ? a0g : 0, aBc = a1.a2.ix() ? Math.floor(.15 * a0g) : 0, aC = a8w.length - 1; 0 <= aC; aC--)
				if (aBY = aBd(aC), aBZ = aBe(aC), aBa = a8w[aC].canvas.width, aBZ - aBc <= mM && mM <= aBZ + a0g + aBc) {
					if (aBY - aBb <= mL && mL <= aBY + a0g + aBb) return a8w[aC].aBX || (a8w[aC].aBO = !0, a8w[aC].aBX = !0, 0 === a8w[aC].id ? bB.iB.s6(a8w[aC].kF) : bB.iB.s5(a8w[aC].kF)), !0;
					if (0 === a8w[aC].id && aBY + aBa - a0g - aBb <= mL && mL <= aBY + aBa + aBb) return bY.a9N(3), bB.iB.iI(aS.iF(), a8w[aC].kF), !0
				} return !1
	}, this.ep = function() {
		var a6R, a6S, h, aBh;
		0 === ah.ni[aE.fU] || bD.h6.kT(aE.fU) && !aE.ht && !aE.hu || (a6R = a8w.slice(0, aBJ), a6S = a8w.slice(aBJ, aBJ + aBK), h = a6R, aBh = ae.gr(aE.fU), function(h, aBh) {
			if (aBJ !== aBh) return 1;
			for (var aC = aBh - 1; 0 <= aC; aC--)
				if (h[aC].kF !== ae.gw(aE.fU, aC)) return 1;
			return
		}(h, aBh) ? aBj(h = function(h, aBh) {
			var aC, kF, g4, iU, aA7 = [];
			loop: for (aC = 0; aC < aBh; aC++) {
				for (kF = ae.gw(aE.fU, aC), g4 = 0; g4 < h.length; g4++)
					if (h[g4].kF === kF) {
						aA7.push(h.splice(g4, 1)[0]);
						continue loop
					} iU = ae.gx(aE.fU, aC), aBM(iU = {
					kF: kF,
					iU: iU,
					aBW: iU,
					id: 0,
					aBO: !0,
					aBX: !1,
					canvas: null,
					p6: null
				}), aA7.push(iU)
			}
			return aA7
		}(h, aBh), aBh) : aBj(h, aBh), a6R = h, a6S = function(h) {
			var aBl = bQ.z.lA[aE.fU];
			return function(h, aBl) {
				if (aBK !== aBl) return 1;
				for (var vp = aE.fU << 3, mz = bQ.z.mz, aBp = bQ.z.aBp, aC = aBl - 1; 0 <= aC; aC--) {
					var aBq = aBp[vp + aC];
					if (h[aC].kF !== mz[aBq]) return 1
				}
				return
			}(h, aBl) ? aBn(h = function(h, aBl) {
				var aC, kF, g4, aA7 = [],
					vp = aE.fU << 3,
					mz = bQ.z.mz,
					aAZ = bQ.z.aAZ,
					aBp = bQ.z.aBp;
				loop: for (aC = 0; aC < aBl; aC++) {
					var aBq = aBp[vp + aC];
					for (kF = mz[aBq], g4 = 0; g4 < h.length; g4++)
						if (h[g4].kF === kF) {
							aA7.push(h.splice(g4, 1)[0]);
							continue loop
						} aBq = aAZ[aBq], aBM(aBq = {
						kF: kF,
						iU: aBq,
						aBW: aBq,
						id: 1,
						aBO: !0,
						aBX: !1,
						canvas: null,
						p6: null
					}), aA7.push(aBq)
				}
				return aA7
			}(h, aBl), aBl) : aBn(h, aBl), h
		}(a6S), aBJ = a6R.length, aBK = a6S.length, a8w = a6R.concat(a6S))
	}, this.yv = function() {
		if (0 !== ah.ni[aE.fU] && (!bD.h6.kT(aE.fU) || aE.ht || aE.hu))
			for (var aC = a8w.length - 1; 0 <= aC; aC--) yw.drawImage(a8w[aC].canvas, aBd(aC), aBe(aC))
	}
}

function cQ() {
	var a9s, lB, aBs, aBt, k, a9e, fontSize, aBu, aBv, aBw, aBx, canvas, p6, nv, aBy;

	function zC(aC) {
		return L(0 === aC ? 119 : 1 === aC ? 120 : 2 === aC ? 121 : 122)
	}

	function aC5() {
		aE.ih ? aC6 + 4 * bf.gap + k + bk.aC7() > aS.ft ? yw.drawImage(canvas, 2 * bf.gap + bk.aC7(), aC6 + 2 * bf.gap) : yw.drawImage(canvas, bf.gap, aC6 + 3 * bf.gap + bk.aC7()) : yw.drawImage(canvas, bf.gap, aC6 + 2 * bf.gap)
	}

	function aBz() {
		canvas.width = a9s[0].width + aBw, canvas.height = k + aBw, (p6 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a9s[0].width + aBw, k + aBw), p6.translate(Math.floor(aBw / 2), Math.floor(aBw / 2)), p6.lineWidth = aBw, p6.fillStyle = 1 === a9s[0].aC4 ? bE.qU : bE.qM, aC8(), p6.fill(), p6.strokeStyle = 1 === a9s[0].aC4 ? bE.qG :
			bE.qP, aC8(), p6.stroke(), bD.tO.textAlign(p6, 1), bD.tO.textBaseline(p6, 1), p6.fillStyle = 1 === a9s[0].aC4 ? bE.qG : bE.qP, p6.font = a9e[0], p6.fillText(zC(a9s[0].aC3), Math.floor(a9s[0].width / 2), Math.floor(.72 * aBu[0] * k)), p6
			.font = a9e[1], p6.fillText(a9s[0].pY, Math.floor(a9s[0].width / 2), Math.floor((aBu[0] + .48 * aBu[1]) * k))
	}

	function aC8() {
		if (__fx.settings.smoothUI && p6.roundRect) return p6.beginPath(), p6.roundRect(0, 0, a9s[0].width, k, .15 * k);
		p6.beginPath(), p6.moveTo(aBx, 0), p6.lineTo(a9s[0].width - aBx, 0), p6.lineTo(a9s[0].width, aBx), p6.lineTo(a9s[0].width, k - aBx), p6.lineTo(a9s[0].width - aBx, k), p6.lineTo(aBx, k), p6.lineTo(0, k - aBx), p6.lineTo(0, aBx), p6.closePath()
	}
	this.dv = function() {
		lB = 4, aBs = aBt = nv = 0, a9s = [], a9e = new Array(2), fontSize = new Array(2), (aBu = new Array(2))[0] = .3, aBu[1] = .7, aBv = new Array(4), canvas = document.createElement("canvas"), aBy = bi.ek + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.ix() ? .062 : .047) * i.iy), fontSize[0] = Math.floor(.85 * aBu[0] * k), fontSize[1] = Math.floor(.85 * aBu[1] * k), a9e[0] = bD.tO.ux(1, fontSize[0]), a9e[1] = bD.tO.ux(1, fontSize[1]), aC = aBv.length -
			1; 0 <= aC; aC--) aBv[aC] = this.measureText(zC(aC) + "000", a9e[0]);
		if (aBw = Math.floor(1 + .05 * k), aBx = Math.floor(.2 * k), 0 < a9s.length) {
			for (aC = a9s.length - 1; 0 <= aC; aC--) j = this.measureText(a9s[aC].pY + "00", a9e[1]), a9s[aC].width = j < aBv[aC] ? aBv[aC] : j;
			aBz()
		}
	}, this.ep = function() {
		0 !== lB && (4 === lB ? bi.ek > aBy && (lB = 0, 1 === aE.a3m) && aR.a4A(bV.xH.aAn[bV.fQ].name, 3, 1, 9) : (1 === lB ? (0 === aBs && (aBz(), aBs = 1e-4), 1 <= (aBs += .002 * (bi.ek - nv)) && (aBt = 0, lB = 2, aBs = 1), bi.e2 = !0) : 2 ===
			lB ? ((aBt += (bi.ek - nv) / 1e3) > a9s[0].o0 || 1 < aBt && 1 < a9s.length) && (lB = 3) : 3 === lB && ((aBs -= .002 * (bi.ek - nv)) <= 0 && (aBs = 0, a9s.shift(), lB = 0 < a9s.length ? 1 : 0), bi.e2 = !0), nv = bi.ek))
	}, this.measureText = function(pY, a9e) {
		return yw.font = a9e, Math.floor(yw.measureText(pY).width)
	}, this.et = function(aC2, aC) {
		this.a4A(ah.a2G[aC2], aC, 1, 0 === aC ? 3 : 7)
	}, this.a4A = function(pY, aC3, aC4, o0) {
		var j;
		pY.length && (j = (j = this.measureText(pY + "00", a9e[1])) < aBv[aC3] ? aBv[aC3] : j, a9s.push({
			pY: pY,
			width: j,
			aC3: aC3,
			aC4: aC4,
			o0: o0
		}), 0 === lB) && (aBs = 0, lB = 1, nv = bi.ek)
	}, this.yv = function() {
		0 !== lB && 0 !== aBs && (aBs < 1 ? (yw.globalAlpha = aBs, aC5(), yw.globalAlpha = 1) : aC5())
	}
}

function cz() {
	var k, canvas, p6, aC9, aCA, aCB, aCC, aBO, aCD, aCE, aCF, aCG, aAf = !1,
		a6f = (this.iX = !1, this.j = 0, new Array(2)),
		aCH = 0;

	function nV() {
		var j = ax.j,
			m1 = (aBO = !1, a1w(p6, j, k), Math.floor(j / 2));
		1 === aC9 ? (p6.fillStyle = bE.qj, p6.fillRect(m1, 0, m1, k)) : -1 === aC9 && (p6.fillStyle = bE.r1, p6.fillRect(0, 0, m1, k)), a1x(p6, j, k, 2);
		var m1 = (m1 = Math.floor(.25 * k)) < 2 ? 2 : m1,
			aAq = (p6.fillStyle = bE.qV, Math.floor((k - 4) * aCA[1] / aCB[1]));
		0 < aAq && p6.fillRect(2, k - 2 - aAq, m1, aAq), 0 < (aAq = Math.floor((k - 4) * aCA[0] / aCB[0])) && p6.fillRect(j - 2 - m1, k - 2 - aAq, m1, aAq);
		m1 = (m1 = Math.floor(k / 8)) < 2 ? 2 : m1, a1z(p6, Math.floor(.4 * k), 0, k, m1, .5, !1), a1z(p6, Math.floor(j - 1.4 * k), 0, k, m1, .5, !0), aAq = 1.1 * k / a6f[0].width;
		p6.imageSmoothingEnabled = !0, p6.setTransform(aAq, 0, 0, aAq, (j - aAq * a6f[0].width) / 2, -.05 * k), p6.drawImage(a6f[+aAf], 0, 0), p6.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aCM() {
		aCG = -1, aAf = ai.aCN(), aO.a8G(257), aO.aAe(aAf), ax.iX = !0, aBO = !0, aCD = 360;
		for (var gC, el = 0, aC = am.lc - 1; 0 <= aC; aC--) bD.h6.kT(am.lh[aC]) || (el += ah.hY[am.lh[aC]]);
		aAf ? aCB[0] = Math.max(bO.gB(3 * el, 4), 1) : aE.ih ? (gC = 9 === aE.lO ? 8 === bj.lT[bk.lf()] ? 80 : (gC = bO.gB(100 * bk.ld(), aE.kq), bO.gB(bO.iw(1550 - 11 * gC, 400, 1e3), 10)) : (gC = bO.gB(100 * bk.ld(), aE.kq), bO.gB(bO.iw(1600 - 12 *
			gC, 400, 1e3), 10)), gC = bO.gB(gC * el, 100), aCB[0] = Math.max(gC, 1)) : 8 === aE.lO ? aCB[0] = Math.max(bO.gB(3 * el, 4), 1) : aCB[0] = Math.max(bO.gB(3 * el, 5), 1), aCB[1] = Math.max(el - aCB[0], 1)
	}

	function aCI() {
		aCF = bi.l3(), aBO = !0, aCD = aC9 = 0, aCC = [], ax.iX = !1, aO.a3u(247), aCA[0] = aCA[1] = 0, aO.a8G(673)
	}

	function a1t() {
		return aS.aAI(aO.aAE()) ? __fx.settings.keybindButtons ? aS.ft - 2 * (k + bf.gap) : aS.ft - k - bf.gap : bF.aAI(aO.aAH()) ? bF.a1t() - k - bf.gap : i.k - k - bn.a93() * bf.gap
	}
	this.dw = function() {
		for (var aC = 0; aC < 2; aC++) a6f[aC] = bD.canvas.a2Y(ac.get(3), 8 - aC, bE.ri), a6f[aC] = bD.canvas.a6i(a6f[aC])
	}, this.dv = function() {
		aCF = -1e4, aCE = aCH = 0, aCG = -1, this.iX = !1, aBO = aAf = !1, aCA = [aC9 = aCD = 0, 0], aCB = [1, 1], aCC = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, p6 = canvas.getContext("2d", {
			alpha: !0
		}), nV()
	}, this.nU = function() {
		aBO && nV()
	}, this.hy = function(fr, ft) {
		return !!this.iX && !(fr < i.j - this.j - bf.gap || ft < a1t() || (aE.ht || aE.hu || this.iY(aE.fU) && (aN.hv && aN.a5w(), bB.iB.iZ(fr > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.ep = function() {
		0 < aCE ? 0 === --aCE && aCI() : this.iX ? 180 == --aCD && 3 * aCA[0] < aCB[0] ? aCI() : aCA[0] >= aCB[0] ? aAf ? bU.a3Q.a3h() : bU.a3Q.a3l() : aCA[1] >= aCB[1] ? aCE = 4 : aCD <= 0 && aCI() : ! function() {
			var aCP = bi.l3();
			if (aCP % 40 == 14) {
				if (aCH) return !(aCP < aCH) && !(aCP < aCF + 535) && (aCH = aCP + 1071, bD.h6.a7J()) ? (aCM(), 1) : 0;
				(1 === am.lc || (aE.ih ? bk.ld() : ah.hY[mh[0]]) >= bO.gB(96 * aE.kq, 100)) && (aCH = aCP + 535)
			}
			return
		}() && 0 <= aCG && (aO.a2F(250, L(123, [ah.a2G[aCG]]), 673, aCG, bE.qP, bE.qM, -1, !0), aCM())
	}, this.a3n = function() {
		this.iX && aCA[0] < aCB[0] && aCI()
	}, this.t0 = function(player, aCQ) {
		var aCR = L(aCQ ? 124 : 125, [ah.a2G[player]]),
			aCR = (aO.a2F(450, aCR, 257, player, aCQ ? bE.qh : bE.qy, bE.qM, -1, !0), aCC.push(player), aBO = !0, aE.lQ ? Math.max(aCB[0], aCB[1]) : ah.hY[player]),
			aCR = Math.max(aCR, 1);
		aCQ ? aCA[0] += aCR : aCA[1] += aCR, player === aE.fU && (aC9 = aCQ ? 1 : -1)
	}, this.yv = function() {
		var ft;
		this.iX && (ft = a1t(), yw.drawImage(canvas, i.j - this.j - bf.gap, ft))
	}, this.ia = function(player) {
		if (0 !== aCD) return !1;
		if (!bD.h6.hw(1)) return !1;
		if (!bD.h6.hx(player)) return !1;
		if (10 <= kr[player] && !bD.h6.a7d(player, 9)) return !1;
		if (!(aE.lQ || m.e8 && m.eD)) {
			player = bi.l3();
			if (player < aCF + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iY = function(hI) {
		if (!bD.h6.hw(1)) return !1;
		if (!bD.h6.hx(hI)) return !1;
		if (!this.iX) return !1;
		for (var aC = aCC.length - 1; 0 <= aC; aC--)
			if (aCC[aC] === hI) return !1;
		return !0
	}, this.iW = function(player) {
		aCG = player
	}
}

function cR() {
	var j, fr, aCT, canvas, p6, iX, jO, a87, a9e, aBO, aCU = 11 / 12;

	function aCW() {
		var aBV = Math.floor(jO * (j - 2 * aCT)),
			aCZ = 1 + Math.floor(.0625 * aS.k),
			aCa = 1 + Math.floor(.3 * aS.k),
			aCb = Math.floor(.55 * aS.k),
			rounded = (p6.clearRect(0, 0, j, aS.k), p6.fillStyle = bE.qL, p6.fillRect(0, 0, aCT, aS.k), p6.fillRect(aCT + aBV, 0, j - aCT - aBV, aS.k), p6.fillStyle = jO < 1 / 3 ? "rgba(" + Math.floor(3 * jO * 130) + ",130,0,0.85)" : jO < 2 / 3 ?
				"rgba(130," + (130 - Math.floor(3 * (jO - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (jO - 2 / 3) * 130) + ",0.85)", p6.fillRect(aCT, 0, aBV, aS.k), p6.fillStyle = bE.qP, p6.fillStyle = __fx.utils.lineColor(bE.qP),
				__fx.utils.smoothFrame(p6, j, aS.k));
		rounded || (p6.fillRect(0, 0, j, 1), p6.fillRect(0, aS.k - 1, j, 1), p6.fillRect(0, 0, 1, aS.k)), p6.fillRect(aCT, 0, 1, aS.k), p6.fillRect(aCT + aBV, 0, 1, aS.k), p6.fillRect(j - aCT, 0, 1, aS.k), rounded || p6.fillRect(j - 1, 0, 1, aS.k),
			p6.fillStyle = bE.qP, p6.fillRect(Math.floor(.25 * aS.k) + aCa, Math.floor((aS.k - aCZ) / 2), aS.k - 2 * aCa, aCZ), p6.fillRect(Math.floor(j - 1.25 * aS.k) + aCa, Math.floor((aS.k - aCZ) / 2), aS.k - 2 * aCa - aCa % 2, aCZ), p6.fillRect(
				Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - aCZ) / 2), aCa, aCZ, aS.k - 2 * aCa - aCa % 2), a87 = bD.h6.jN(aE.fU, aS.iF()), p6.fillText(bD.pc.a35(a87) + " (" + bD.pc.a80(100 * jO, +(jO < .1)) + ")", Math.floor(.5 * j), aCb)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		jO = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a5s(arg1);

	function aCg(a6E) {
		return !(1 < a6E && 1 === jO || (1 < a6E && a6E * jO - jO < 1 / 1024 ? a6E = (jO + 1 / 1024) / jO : a6E < 1 && jO - a6E * jO < 1 / 1024 && (a6E = (jO - 1 / 1024) / jO), jO = bO.iw(jO * a6E, 1 / 1024, 1), aCW(), 0))
	}

	function aCh(mL) {
		return jO !== (jO = bO.iw((mL - fr - aCT) / (j - 2 * aCT), 1 / 1024, 1)) && (aCW(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aCW(), bi.e2 = !0
	}, this.ft = 0, this.hz = !1, this.dv = function() {
		iX = !aE.i9 && !aE.ht && !aE.hu, aBO = !1, jO = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.buffer.data[182].value + 1) / 1024, a87 = 0, this.hz = !1, this.resize()
	}, this.resize = function() {
		a1.a2.ix() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.iy), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.ix() ? .65 : .389) * i.iy), j += 12 - j % 12, this.k = Math.floor(j / 12)), aCT = Math.floor(3 * this.k / 2), a9e =
			bD.tO.ux(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, yw), canvas.height = this.k, (p6 = canvas.getContext("2d", {
				alpha: !0
			})).font = a9e, bD.tO.textBaseline(p6, 1), bD.tO.textAlign(p6, 1), this.aCV(), aCW()
	}, this.aCV = function() {
		fr = a1.a2.ix() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.ft = i.k - this.k - bn.a93() * bf.gap
	}, this.nU = function() {
		aBO && (aBO = !1, aCW())
	}, this.iX = function() {
		return !(!iX || aN.hv && fr < Math.floor(bf.gap + 5.5 * this.k))
	}, this.aAI = function(aCc) {
		return !!this.iX() && fr + j > i.j - aCc - bf.gap
	}, this.a8E = function() {
		iX = !aE.ht && !aE.hu
	}, this.aCI = function() {
		iX = !1
	}, this.iF = function() {
		return bO.iw(Math.floor(1024 * jO + .5) - 1, 0, 1023)
	}, this.a5p = function(mL, mM) {
		return this.iX() && fr < mL && mL < fr + j && mM > this.ft
	}, this.hy = function(mL, mM) {
		if (!this.iX()) return !1;
		if (!(__fx.settings.keybindButtons && mM > this.ft - Math.floor(bf.gap / 4) - this.k && mM < this.ft - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(mL - fr))) {
			if (!aS.a5p(mL, mM)) return !1;
			aT.oE = !1, ! function(uh, mL, mM) {
				if (function(mL, mM) {
						return fr < mL && mL < fr + aCT && mM > aS.ft
					}(mL, mM)) return aCg(aCU);
				if (function(mL, mM) {
						return fr + j - aCT < mL && mL < fr + j && mM > aS.ft
					}(mL, mM)) return aCg(1 / aCU);
				return uh.hz = !0, aCh(mL)
			}(this, mL, mM) || (bi.e2 = !0)
		}
		return !0
	}, this.a5s = function(oL) {
		0 !== aE.a3m && this.iX() && aCg(oL) && (bi.e2 = !0)
	}, this.a5O = function(deltaY) {
		var oL;
		return !(0 === deltaY || !this.iX()) && aCg(oL = 0 < deltaY ? (oL = 400 / (400 + deltaY)) < aCU ? aCU : oL : 1 / aCU < (oL = (400 - deltaY) / 400) ? 1 / aCU : oL)
	}, this.a5L = function(mL) {
		return !!this.hz && aCh(mL)
	}, this.a5l = function() {
		this.hz = !1
	}, this.ep = function() {
		this.iX() && a87 !== bD.h6.jN(aE.fU, this.iF()) && (aBO = !0)
	}, this.yv = function() {
		this.iX() && (yw.drawImage(canvas, fr, this.ft), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(yw, fr, this.ft)
	}
}

function dB() {
	var canvas, p6, rect, font, aCi = 0,
		aCj = !1,
		aCk = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aCl = 5;

	function aCs() {
		if (aCj) {
			var aC, fk = aCk.length,
				aCb = Math.floor(.5 * rect.k),
				k = fk * aCb,
				fr = Math.floor(Math.floor(rect.fr) + .3 * rect.j - .5),
				ft = Math.floor(Math.floor(rect.ft) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			for (yw.fillStyle = bE.qL, yw.fillRect(fr, ft, j, k), yw.fillStyle = bE.qo, yw.fillRect(fr, ft + aCl * aCb, j, aCb), yw.fillStyle = bE.qP, yw.fillRect(fr, ft, 2, k), yw.fillRect(fr, ft, j, 2), yw.fillRect(fr + j - 2, ft, 2, k), aC =
				1; aC < fk; aC++) yw.fillRect(fr, ft + aC * aCb, j, 2);
			for (yw.fillStyle = bE.qP, bD.tO.textAlign(yw, 1), bD.tO.textBaseline(yw, 1), yw.font = bD.tO.ux(0, .6 * aCb), fr += .5 * j, aC = 0; aC < fk; aC++) yw.fillText(aD0(aC), fr, ft + (aC + .6) * aCb)
		}
		yw.drawImage(canvas, Math.floor(rect.fr), Math.floor(rect.ft))
	}

	function nV(uh) {
		var fr, o9, oA, aCb;
		p6.clearRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), p6.fillStyle = bE.qL, p6.fillRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), aE.oC && (p6.fillStyle = bE.qo, p6.fillRect(0, 0, Math.floor(.3 * rect.j), Math.floor(rect.k))), p6
			.fillStyle = bE.qP, p6.fillText("Hide UI", .15 * rect.j, .5 * rect.k), p6.fillRect(Math.floor(.3 * rect.j - .5), 0, 2, Math.floor(rect.k)), fr = .5 * rect.j, p6.fillText("Replay Speed", fr, .31 * rect.k), p6.fillText(aD0(aCl), fr, .69 *
				rect.k), p6.fillRect(Math.floor(.7 * rect.j - .5), 0, 2, Math.floor(rect.k)), uh.a8m ? (fr = Math.floor(.02 * rect.j), uh = Math.floor(.025 * rect.j), o9 = Math.floor(.85 * rect.j - fr - .5 * uh), oA = Math.floor(.25 * rect.k), aCb =
				Math.floor(rect.k) - 2 * oA, p6.fillRect(o9, oA, fr, aCb), p6.fillRect(o9 + fr + uh, oA, fr, aCb)) : function() {
				var j = Math.floor(.46 * rect.k),
					k = Math.floor(.23 * rect.k),
					fr = Math.floor(.85 * rect.j - .5 * j + j / 12),
					ft = Math.floor(.5 * rect.k - k);
				p6.beginPath(), p6.moveTo(fr, ft), p6.lineTo(fr + j, ft + k), p6.lineTo(fr, ft + (k << 1)), p6.fill()
			}(), p6.fillRect(0, 0, Math.floor(rect.j), 2), p6.fillRect(0, 0, 2, Math.floor(rect.k)), p6.fillRect(0, Math.floor(rect.k) - 2, Math.floor(rect.j), 2), p6.fillRect(Math.floor(rect.j - 2), 0, 2, Math.floor(rect.k))
	}

	function aD0(aC) {
		return 5 === aC ? "Normal" : "" + aCk[aC]
	}
	this.a8m = !1, this.dv = function() {
		aE.ht && (aCl = 5, this.a8m = !1, aCj = !1, rect = new tz([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aCm = function() {
		return aCk[aCl]
	}, this.a1t = function() {
		return rect.ft
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a8m,
		fxGetSpeedIndex: () => aCl,
		fxSetSpeedIndex: index => {
			aCl = index, this.resize()
		},
		fxGetPanelTop: () => rect && rect.ft
	}, this.aAI = function(aCc) {
		return !!aE.ht && rect.fr + rect.j > i.j - aCc - bf.gap
	}, this.resize = function() {
		aE.ht && (rect.resize(), rect.ft -= (bn.a93() - 1) * bf.gap, font = bD.tO.ux(0, .3 * rect.k), (canvas = document.createElement("canvas")).width = Math.floor(rect.j), canvas.height = Math.floor(rect.k), (p6 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.tO.textAlign(p6, 1), bD.tO.textBaseline(p6, 1), nV(this))
	}, this.a5v = function(aCn) {
		0 === aE.a3m || u.iX() || aCn !== aE.oC && (aE.oC = aCn, bk.resize(), bi.e2 = !0, aE.ht) && (aCi = bi.ek + 2e3, nV(this))
	}, this.hy = function(fr, ft) {
		if (!aE.ht) return !1;
		if (fr < rect.fr || ft < rect.ft || fr > rect.fr + rect.j) return aCj && function(uh, fr, ft) {
			var fk = aCk.length,
				aCb = Math.floor(.5 * rect.k),
				k = fk * aCb,
				o9 = Math.floor(Math.floor(rect.fr) + .3 * rect.j - .5),
				k = Math.floor(Math.floor(rect.ft) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			return aCj = !1, bi.e2 = !0, fr < o9 || o9 + j < fr || ft < k || (aCl = aCr(0, Math.floor((ft - k) / aCb), fk - 1), nV(uh)), !0
		}(this, fr, ft);
		if ((fr -= rect.fr) < .3 * rect.j) aCj = !1, this.a5v(!aE.oC);
		else {
			if (fr < .7 * rect.j) return aCj = !aCj, bi.e2 = !0;
			this.a5x(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a5x(!0), this.a5x = function(aCp) {
		2 === aE.a3m ? (this.a5v(!1), u.v(3)) : (aCj = !1, this.a8m = !this.a8m, this.a8m ? (aN.hv && aN.a5w(), a1.a2.setState(1)) : aCp || aN.a9l(), bi.e2 = !0, nV(this))
	}, this.aCq = function() {
		this.a8m = !1, aN.a9l(), bi.e2 = !0, nV(this)
	}, this.a5e = function(fr, ft) {
		return !!aE.oC && (0 <= aN.hy(fr, ft) || (aE.ht ? ((bi.ek > aCi || !this.hy(fr, ft)) && aT.hy(fr, ft), bi.e2 = !0, aCi = bi.ek + 2e3) : aT.hy(fr, ft)), !0)
	}, this.ep = function() {
		aE.ht && aE.oC && bi.ek > aCi - 1e3 && bi.ek < aCi && (bi.e2 = !0)
	}, this.a3v = function() {
		aE.ht && (this.a8m = !1, bi.e2 = !0, nV(this))
	}, this.yv = function() {
		if (aE.ht) {
			if (aE.oC) {
				if (bi.ek > aCi) return;
				if (bi.ek > aCi - 1e3) return yw.globalAlpha = aCr(0, (1e3 - (bi.ek - (aCi - 1e3))) / 1e3, 1), aCs(), void(yw.globalAlpha = 1)
			}
			aCs()
		}
	}
}

function cS() {
	var aD1, aD2, j, fr, ft, aD3, aD4;
	this.dv = function() {
		aD1 = new Array(2), aD2 = new Array(2), this.oE = !1, aD4 = aD3 = jQ = jP = 0, iz = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.ix() ? .072 : .0502) * i.iy)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aD1[aC] = document.createElement("canvas"), aD1[aC].width = j, aD1[aC].height = j, aD2[aC] = aD1[aC].getContext("2d", {
			alpha: !0
		});
		this.aCV(),
			function() {
				for (var aDL = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aD2[aC].clearRect(0, 0, j, j), aD2[aC].fillStyle = bE.qI, aD2[aC].beginPath(), aD2[aC].arc(j / 2, j / 2, j / 2 - aDL, 0, 2 * Math.PI), aD2[aC].fill(), aD2[aC]
					.lineWidth = aDL, aD2[aC].fillStyle = bE.qP, aD2[aC].strokeStyle = bE.qP, aD2[aC].strokeStyle = __fx.utils.lineColor(bE.qP), aD2[aC].beginPath(), aD2[aC].arc(j / 2, j / 2, j / 2 - aDL, 0, 2 * Math.PI), aD2[aC].stroke(), a1z(
						aD2[aC], 0, 0, j, aDL, .3, 0 === aC)
			}()
	}, this.a1s = function() {
		return -jP / iz
	}, this.a1t = function() {
		return -jQ / iz
	}, this.oO = function(aD8, j5) {
		jP = iz * aD8 - j5
	}, this.oP = function(aD9, j6) {
		jQ = iz * aD9 - j6
	}, this.hy = function(aD7, aAJ) {
		return aE.oC || ! function(aD7, aAJ) {
			return Math.pow(aD7 - (fr + j / 2), 2) + Math.pow(aAJ - (ft + j / 2), 2) < j * j / 4 || Math.pow(aD7 - (fr + j / 2), 2) + Math.pow(aAJ - (ft + 2 * j), 2) < j * j / 4
		}(aD7, aAJ) || bm.buffer.data[8].value ? (aI.oR() && (this.oE = !0, aD3 = aD7, aD4 = aAJ), !1) : aAJ < ft + 1.25 * j ? this.a5O(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a5O(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a5L = function(aD7, aAJ) {
		var aDA, aDB, j8, jB;
		return !aI.oR() || (aDA = jP, aDB = jQ, jP += j8 = aD3 - aD7, jQ += jB = aD4 - aAJ, ag.a5L(j8, jB), this.aDC(), aD3 = aD7, aD4 = aAJ, aDA !== jP) || aDB !== jQ
	}, this.a5O = function(mL, mM, deltaY) {
		var oL;
		if (aI.oR()) {
			if (0 < deltaY) oL = (oL = 500 / (500 + deltaY)) < .5 ? .5 : oL;
			else {
				if (!(deltaY < 0)) return !1;
				oL = 2 < (oL = (500 - deltaY) / 500) ? 2 : oL
			}
			this.aDD(mL, mM, oL), bi.e2 = !0
		}
		return !0
	}, this.aDD = function(fr, ft, fO) {
		var a6E;
		fO = a6E = (a6E = 1024 < (a6E = fO) * iz ? 1024 / iz : a6E) * iz < .125 ? .125 / iz : a6E, ag.zoom(fO, fr, ft),
			function(a6E, mL, mM) {
				iz *= a6E, jP = (jP + mL) * a6E - mL, jQ = (jQ + mM) * a6E - mM, aT.aDC()
			}(fO, fr, ft)
	}, this.aDC = function() {
		var aDG = i.j / 16,
			aDH = 0,
			aDI = i.k / 16,
			aDJ = 0;
		jP < -i.j + aDG && (aDH = -i.j + aDG - jP), jP > iz * bV.fv - aDG && (aDH = iz * bV.fv - aDG - jP), jQ < -i.k + aDI && (aDJ = -i.k + aDI - jQ), jQ > iz * bV.fw - aDI && (aDJ = iz * bV.fw - aDI - jQ), jP += aDH, jQ += aDJ, bd.oQ(), ag.aDK(
			aDH, aDJ)
	}, this.aCV = function() {
		fr = i.j - j - bf.gap, ft = Math.floor(i.k / 2 - 1.25 * j)
	}, this.yv = function() {
		bm.buffer.data[8].value || (yw.drawImage(aD1[0], fr, ft), yw.drawImage(aD1[1], fr, Math.floor(ft + 3 * j / 2)))
	}
}

function cT() {
	var h, aDM, aDN, aDO, gap, aDP, aDQ, aDR, aDS, aDT, a9e, aDU, hp, aDV, aBV, aDW, aDX;

	function aDb() {
		aDO = Math.floor(.2 * (a1.a2.ix() ? .07 : .035) * i.iy), aDO = aAG(a1.a2.ix() ? 3 : 1, aDO);
		var aDe = i.j / (h.length + gap);
		aDO = aDO < aDe ? aDe : aDO, aBV = Math.floor((1 - gap) * aDO), aDM = 0, aDf()
	}

	function aDf() {
		aDM = (aDM = aDM < -20 ? -20 : aDM) > (h.length - 15) * aDO ? (h.length - 15) * aDO : aDM, aDQ = Math.floor(aDM / aDO), aDR = (aDR = aDQ + Math.floor(i.j / aDO)) > h.length - 1 ? h.length - 1 : aDR, aDQ = (aDQ = aDR < aDQ ? aDR : aDQ) < 0 ?
			0 : aDQ;
		var m1 = aDR;
		aDP = aDN / h[m1];
		for (var aC = aDR - 1; aDQ <= aC; aC--) h[aC] > h[m1] && (m1 = aC, aDP = aDN / Math.pow(h[aC], aDV))
	}

	function aDi(fr) {
		fr = Math.floor((aDM + i.j - fr - gap * aDO) / aDO);
		return (fr = fr < -1 ? -1 : -1 === fr ? 0 : fr > h.length - 1 ? -1 : fr) !== aDS && (aDS = fr, -1 === aDW && 0 === aDS && aU.aDY && (aDW = setInterval(aDj, 100)), 1)
	}

	function aDk(aC) {
		var aDm = Math.floor(aDP * Math.pow(h[aC], aDV));
		yw.fillRect(aDM + i.j - (aC + 1) * aDO, i.k - aDm, aBV, aDm)
	}

	function aDj() {
		var hI;
		0 !== (aDS = 8 === ab.a4y() ? -1 : aDS) ? (aDX = (new Date).getTime(), clearInterval(aDW), aDW = -1) : (hI = h[1] / 864e3, -1 !== aDX && (hI += ((new Date).getTime() - aDX) * h[1] / 864e5, aDX = -1), 0 < hI && (h[0] += Math.floor(hI), bi
			.e2 = !0))
	}
	this.aDY = !1, this.dv = function() {
		aDX = aDW = -1, aDS = -(aDV = 1), this.aDZ = !1, hp = 0, aDU = new Date, aDM = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aDN = Math.floor(.15 * i.k), aDT = (aDT = Math.floor((a1.a2.ix() ? .018 : .0137) * i.iy)) < 2 ? 2 : aDT, a9e = bD.tO.ux(1, aDT), aDb()
	}, this.aDc = function(aDd) {
		var aC;
		for (this.aDY = !0, aC = 0; aC < aDd.length; aC++) h.unshift(aDd[aC]);
		aDb(), bi.e2 = !0
	}, this.aDg = function() {
		aDf()
	}, this.a5L = function(fr, ft) {
		ft > i.k - .6 * aDN ? this.aDZ ? fr !== hp && (aDM += fr - hp, hp = fr, aDf(), aDi(fr), this.aDZ = -1 !== aDS, bi.e2 = !0) : aDi(fr) && (bi.e2 = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aDS && (this.aDZ = !1, aDS = -1, bi.e2 = !0)
	}, this.a5O = function(fr, deltaY) {
		-1 !== aDS && (aDM += Math.floor(deltaY), aDf(), aDi(fr), bi.e2 = !0)
	}, this.hy = function(fr, ft) {
		this.a5L(fr, ft), -1 !== aDS && (hp = fr, this.aDZ = !0)
	}, this.a5k = function() {
		-1 !== aDS && (this.aDZ = !1)
	}, this.yv = function() {
		yw.fillStyle = bE.qS;
		for (var aDn, month, el, vd, aDq, aDr, oA, aDs, aDt, aC = aDR; aDQ <= aC; aC--) aDk(aC);
		this.aDY && 0 === aDQ && (yw.fillStyle = bE.r1, aDk(0)), -1 !== aDS && (yw.fillStyle = bE.qR, aDk(aDS)), -1 !== aDS && (yw.font = a9e, bD.tO.textBaseline(yw, 2), (el = new Date).setTime(aDU.getTime() - 1e3 * aDS * 60 * 60 * 24), month =
			"month", aDn = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(el), aDn = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(el)), aDn = aDn + ", " + el.getUTCDate() + " " + month + " " + el.getFullYear(), month = 1 === h[aDS] ? L(126) : L(127), month = bD.pc.a35(h[aDS]) + " " + month, el = Math.floor(yw.measureText(aDn).width), vd = Math
			.floor(yw.measureText(month).width), aDq = Math.floor(.5 * (el + aDT)), aDr = (aDr = aDM + i.j - (aDS + 1) * aDO) < aDq ? aDq : aDr > i.j - aDq ? i.j - aDq : aDr, oA = i.k - Math.floor(aDP * Math.pow(h[aDS], aDV)), aDs = Math
			.floor(1.1 * aDT), aDt = oA > i.k - aDs ? i.k - aDs : oA, yw.fillStyle = bE.qM, yw.fillRect(i.j - vd - aDT, aDt - aDs, vd + aDT, aDs), yw.fillRect(aDr - aDq, i.k - aDs, el + aDT, aDs), yw.fillStyle = bE.qP, bD.tO.textAlign(yw, 2),
			yw.fillText(month, Math.floor(i.j - .5 * aDT), aDt), bD.tO.textAlign(yw, 1), yw.fillText(aDn, aDr, i.k), yw.strokeStyle = bE.qT, yw.lineWidth = 1, yw.beginPath(), yw.moveTo(0, oA), yw.lineTo(i.j, oA), yw.closePath(), yw.stroke())
	}
}

function cU() {
	var a9e, j, ft, aDu, aDv, aDw, canvas, p6, aBO, a7Q, aDx, aDy, aDz, aE0;
	this.fr = 0, this.k = 0, this.dv = function() {
		aDw = aE.a8M, aDy = "rgba(0,100,0,0.8)", aDz = "rgba(150,0,0,0.8)", aBO = aDx = !0, a7Q = ah.hm[aE.fU], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.ix() ? .305 : .24) * i.iy), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), a9e = bD.tO.ux(1, Math.floor(.8 * this.k)), aDv = bD.tO.ux(1, Math.floor(.45 * this.k)), aE0 = Math.floor(.5 * this.k), bV
			.aBL.font = a9e, ft = bf.gap, aDu = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, p6 = canvas.getContext("2d", {
				alpha: !0
			}), bD.tO.textBaseline(p6, 1), bD.tO.textAlign(p6, 1), this.aE1()
	}, this.aBr = function() {
		return a1.a2.ix() && i.j < 1.2 * i.k
	}, this.aCV = function() {
		this.aBr() ? this.fr = i.j - j - bf.gap : this.fr = Math.floor(aW.aE2() + (i.j - aW.aE2() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.nU = function() {
		aBO && (aBO = !1, this.aE1())
	}, this.aE1 = function() {
		p6.font = a9e, p6.clearRect(0, 0, j, this.k), p6.fillStyle = aDx ? aDy : aDz, p6.fillRect(0, 0, j, this.k), p6.fillStyle = bE.qR;
		var eu = this.aE3(),
			aE5 = (this.aE4(), p6.fillStyle = ah.hm[aE.fU] >= af.km(aE.fU) ? bE.qy : bE.qP, bD.pc.a35(a7Q)),
			aE5 = (p6.fillText(aE5, Math.floor(j / 2), aE0), p6.measureText(aE5).width),
			aE6 = (p6.font = aDv, p6.fillStyle = 9 === eu ? bE.rc : bE.qP, af.aE7),
			aE8 = "+" + aE6,
			vd = p6.measureText(aE8).width,
			aE9 = Math.floor(this.k / 12),
			aE5 = .5 * (j + aE5) + aE9;
		(aE5 + vd + aDu <= j || 1e3 <= aE6 && (aE8 = "+" + Math.floor(aE6 / 1e3) + "K", aE5 + (vd = p6.measureText(aE8).width) + aDu <= j)) && p6.fillText(aE8, Math.floor(aE5 + .5 * vd), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && p6.fillText(9 - eu, Math.floor(2 * aDu + aE9), Math.floor(.3 * this.k)), p6.fillStyle = bE.qP, __fx.utils.smoothFrame(p6, j, this.k, 1, 0, 0, this.k / 12) || (p6.fillRect(0, 0, j, 1), p6.fillRect(0, 0, 1, this
				.k), p6.fillRect(0, this.k - 1, j, 1), p6.fillRect(j - 1, 0, 1, this.k))
	}, this.aE3 = function() {
		var eu = bi.l3() % 100,
			a0u = (eu = 9 - bO.gB(eu -= eu % 10, 10), Math.floor(eu * (this.k - aDu) / 9));
		return p6.fillRect(0, a0u, aDu, this.k - a0u), p6.fillRect(j - aDu, a0u, aDu, this.k - a0u), eu
	}, this.aE4 = function() {
		p6.fillRect(aDu, this.k - aDu, Math.floor((j - 2 * aDu) * ah.hm[aE.fU] / aDw), aDu)
	}, this.ep = function() {
		var hI = aE.fU;
		bD.h6.hx(hI) && (hI = ah.hm[hI] - ah.a7P[hI], a7Q !== hI ? (aDw = aAG(hI, aDw), aDx = a7Q < hI && 10 <= hI, a7Q = hI, aBO = !0) : bi.l3() % 10 == 9 && (aBO = !0))
	}, this.yv = function() {
		0 === ah.ni[aE.fU] || aE.i9 || 2 === ah.a7G[aE.fU] || yw.drawImage(canvas, this.fr, ft)
	}
}

function cV() {
	var aEA, aEB, aEC, aED, aEE, aEF, aEG, aEH, aEI, aEJ, aEK, aEL, aEM, aEN, aEO, aEP, aEQ, aER, aES, aET, aEU, aEV, position, aEW, aEX, aEY, aEZ, aEa, aEb = 1,
		aEc = 1,
		aEd = "";
	var leaderboardHasChanged = true;
	this.playerPos = aE.fU;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kr[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kr[aE.fU]);
	}

	function aEf() {
		aEG.clearRect(0, 0, aEA, aC6),
			aEG.fillStyle = aEa ? bE.rL : bE.rH,
			aEG.fillRect(0, 0, aEA, aEL),
			aEG.fillStyle = bE.qL,
			aEG.fillRect(0, aEL, aEA, aC6 - aEL);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aEE)
				position = (rivalsCount > aEE ? rivalsCount : aEE) - aEE;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kr[aE.fU]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aEV = -1;
		if (__fx.leaderboardFilter.enabled && aEV >= __fx.leaderboardFilter.filteredLeaderboard.length) aEV = -1;
		if (__fx.leaderboardFilter.showingRivals && aEV + position >= __fx.leaderboardFilter.rivalsData.length) aEV = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= position && ownClanIndex < position + aEE) aEh(ownClanIndex - position, bE.qo);
			})() :
			(playerPos >= position && aEh(playerPos - position, bE.qo),
				0 !== kr[aE.fU] && 0 === position && aEh(0, bE.rT))
		),
		-1 !== aEV && aEh(aEV, bE.qQ),
			aEG.fillStyle = bE.qL,
			//console.log("drawing", aEV),
			aEG.clearRect(0, aC6 - __fx.leaderboardFilter.tabBarOffset, aEA, __fx.leaderboardFilter.tabBarOffset);
		aEG.fillRect(0, aC6 - __fx.leaderboardFilter.tabBarOffset, aEA, __fx.leaderboardFilter.tabBarOffset);
		aEG.fillStyle = __fx.utils.lineColor(bE.qP),
			aEG.fillRect(0, aEL, aEA, 1),
			aEG.fillRect(0, aC6 - __fx.leaderboardFilter.tabBarOffset, aEA, 1),
			__fx.leaderboardFilter.drawTabs(aEG, aEA, aC6 - __fx.leaderboardFilter.tabBarOffset, bE.qo),
			__fx.utils.smoothFrame(aEG, aEA, aC6, bf.a2m) || (
				aEG.fillRect(0, 0, aEA, bf.a2m),
				aEG.fillRect(0, 0, bf.a2m, aC6),
				aEG.fillRect(aEA - bf.a2m, 0, bf.a2m, aC6),
				aEG.fillRect(0, aC6 - bf.a2m, aEA, bf.a2m)),
			aEG.fillStyle = bE.qP, aEG.font = aEB, bD.tO.textBaseline(aEG, 1), bD.tO.textAlign(aEG, 1), aEG.fillText(aEd, Math.floor((aEA + aEL - 22) / 2), Math.floor(aEJ + aEC / 2));
		__fx.playerList.drawButton(aEG, 12, 12, aEL - 22);
		var g3, hJ = playerPos < position + aEE - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) hJ = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aEE; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ah.hY[repId], ah.a2G[repId], ah.a7G[repId]]);
					ah.hY[repId] = rivalsEntry.territory;
					ah.a2G[repId] = "[" + rivalsEntry.clan + "]";
					ah.a7G[repId] = 0;
				}
				for (aEG.font = aED, bD.tO.textAlign(aEG, 0), g3 = aEE - hJ; 0 <= g3; g3--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[g3 + position];
					if (rivalsEntryLeft !== undefined)
						aEi(rivalsEntryLeft.representativeId), aEj(g3, g3 + position, rivalsEntryLeft.representativeId);
				}
				for (bD.tO.textAlign(aEG, 2), g3 = aEE - hJ; 0 <= g3; g3--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[g3 + position];
					if (rivalsEntryRight !== undefined)
						aEi(rivalsEntryRight.representativeId), aEk(g3, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hY[entry[0]] = entry[1];
					ah.a2G[entry[0]] = entry[2];
					ah.a7G[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aEE)
				position = (result.length > aEE ? result.length : aEE) - aEE;
			//if (position >= result.length) position = result.length - 1;
			for (aEG.font = aED, bD.tO.textAlign(aEG, 0), g3 = aEE - hJ; 0 <= g3; g3--) {
				const pos = result[g3 + position];
				if (pos !== undefined)
					aEi(mh[pos]), aEj(g3, pos, mh[pos]);
			}
			for (bD.tO.textAlign(aEG, 2), g3 = aEE - hJ; 0 <= g3; g3--) {
				const pos = result[g3 + position];
				if (pos !== undefined)
					aEi(mh[pos]), aEk(g3, mh[pos]);
			}
		} else {
			for (aEG.font = aED, bD.tO.textAlign(aEG, 0), g3 = aEE - hJ; 0 <= g3; g3--)
				aEi(mh[g3 + position]), aEj(g3, g3 + position, mh[g3 + position]);
			for (bD.tO.textAlign(aEG, 2), g3 = aEE - hJ; 0 <= g3; g3--)
				aEi(mh[g3 + position]), aEk(g3, mh[g3 + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == hJ && (aEi(aE.fU), bD.tO.textAlign(aEG, 0), aEj(aEE - 1, kr[aE.fU], aE.fU), bD.tO.textAlign(aEG, 2), aEk(aEE - 1, aE.fU)), 0 === position && (hJ = .7 * aEM / ac.get(4).height, aEG.setTransform(
			hJ, 0, 0, hJ, Math.floor(aEN + .58 * aEM + .5 * hJ * ac.get(4).width), Math.floor(aEJ + aEC + .4 * aEM)), aEG.imageSmoothingEnabled = !0, aEG.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aEG.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aEi(player) {
		aE.ih && (aEG.fillStyle = bj.aEm[bj.aEn[player]])
	}

	function aEh(aC, aEo) {
		aEG.fillStyle = aEo, aC = aEE - 1 < aC ? aEE - 1 : aC;
		aEo = Math.floor((aC === aEE - 1 ? 2 : 0 === aC ? 1.15 : 1) * aEM), aEo = aC === aEE - 2 ? Math.floor(aEL + 9.15 * aEM) - Math.floor(aEL + 8.15 * aEM) : aEo;
		aEG.fillRect(0, Math.floor(aEL + (aC + (0 === aC ? 0 : .15)) * aEM), aEA, aEo)
	}

	function aEj(a00, a7f, aC) {
		aEG.fillText(aER[a7f], aEN, Math.floor(aEJ + aEC + (a00 + .5) * aEM)), 1 === ah.a7G[aC] && (aEG.font = "italic " + aED);
		a7f = Math.floor(aEJ + aEC + (a00 + .5) * aEM);
		aEG.fillText(ah.a2G[aC], aEO, a7f), 0 !== ah.a7G[aC] && (aEG.font = aED), aC < aE.l6 && 2 !== ah.a7G[aC] || aEG.fillRect(aEO, a7f + .35 * aEb, aEQ[aC], Math.max(1, .1 * aEb))
	}

	function aEk(a00, aC) {
		aEG.fillText(ah.hY[aC], aEP, Math.floor(aEJ + aEC + (a00 + .5) * aEM))
	}
	this.dv = function() {
		var aC;
		for (u.z.vQ[0] = 0, aEZ = aEY = aEW = 0, aEa = aEX = !1, aEV = -1, aEE = a1.a2.ix() ? 6 : 10, aEc = (position = 0) === (aEc = bm.buffer.data[11].value) ? 10 : 1 === aEc ? 5 : 1, aEU = !1, aES = new Uint16Array(aEE + 1), aET =
			new Uint32Array(aEE + 1), aEI = aE.fh, mh = new Uint16Array(aEI), kr = new Uint16Array(aEI), aC = aEI - 1; 0 <= aC; aC--) mh[aC] = aC, kr[aC] = aC;
		this.resize(!0), aEQ = new Uint16Array(aE.fh);
		var aEe = Math.floor(aEA - aEO - aEN - aEH);
		for (aER = new Array(aE.fh), aEG.font = aED, aC = aE.fh - 1; 0 <= aC; aC--) aER[aC] = aC + 1 + ".", ah.a2G[aC] = bD.p6.a6u(ah.a4W[aC], aED, aEe), aEQ[aC] = Math.floor(aEG.measureText(ah.a2G[aC]).width);
		aEf()
	}, this.resize = function(dv) {
		if (aC6 = a1.a2.ix() ? (aEA = Math.floor(.335 * i.iy), Math.floor(aEE * aEA / 8)) : (aEA = Math.floor(.27 * i.iy), Math.floor(aEE * aEA / 10)), aEA = Math.floor(.97 * aEA), (aEF = document.createElement("canvas")).width = aEA, aEF
			.height = aC6, aEG = aEF.getContext("2d", {
				alpha: !0
			}), aEJ = .025 * aEA, aEC = .16 * aEA, aEK = 0 * aEA, aEL = Math.floor(.45 * aEJ + aEC), aEM = (aC6 - aEC - 2 * aEJ - aEK) / aEE,
			aEF.height = aC6 += aEM, __fx.leaderboardFilter.tabBarOffset = Math.floor(aEM * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aC6 - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aEA,
			aEB = bD.tO.ux(1, Math.floor(.55 * aEC)), aEb = Math.floor((a1.a2.ix() ? .67 : .72) * aEM), aED = bD.tO.ux(0, aEb), aEG.font = aED, aEN = Math.floor(.04 * aEA), aEO = Math.floor((a1.a2.ix() ? .195 : .18) * aEA), aEH = Math.floor(aEG
				.measureText("00920600").width), aEG.font = aEB, aEP = aEA - aEN, !dv) {
			aEG.font = aED;
			for (var aC = aE.fh - 1; 0 <= aC; aC--) aEQ[aC] = Math.floor(aEG.measureText(ah.a2G[aC]).width);
			aEf()
		}
		aEd = bD.p6.a6u(L(128), aEB, .96 * aEA)
	}, this.aE2 = function() {
		return aEA
	}, this.nU = function(c3, aEg) {
		(aEg || aEU && (c3 || bi.l3() % aEc == 0)) && (aEU = !1, aEf())
	}, this.ep = function() {
		! function() {
			for (var g3 = aEI - 1; 0 <= g3; g3--) 0 === ah.ni[mh[g3]] && ! function(g3) {
				var aEw = mh[g3];
				aEI--;
				for (var aC = g3; aC < aEI; aC++) mh[aC] = mh[aC + 1], kr[mh[aC]] = aC;
				mh[aEI] = aEw, kr[mh[aEI]] = aEI
			}(g3)
		}();
		for (var aEu, oR = aEI - 1, g3 = 0; g3 < oR; g3++) ah.hY[mh[g3]] < ah.hY[mh[g3 + 1]] && (aEu = mh[g3], mh[g3] = mh[g3 + 1], mh[g3 + 1] = aEu, kr[mh[g3]] = g3, kr[mh[g3 + 1]] = g3 + 1);
		! function() {
			for (var el = aEU, hJ = (aEU = !0, kr[aE.fU] >= aEE - 1 ? aEE - 2 : aEE - 1), aC = hJ; 0 <= aC; aC--)
				if (aES[aC] !== mh[aC] || aET[aC] !== ah.hY[mh[aC]]) return;
			(hJ != aEE - 2 || aES[aEE] === kr[aE.fU] && aET[aEE] === ah.hY[aE.fU]) && (aEU = el)
		}();
		for (var aC = aEE - 1; 0 <= aC; aC--) aES[aC] = mh[aC], aET[aC] = ah.hY[mh[aC]];
		aES[aEE] = kr[aE.fU], aET[aEE] = ah.hY[aE.fU];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hy = function(fr, ft) {
		if (a2l(fr, ft)) {
			if (__fx.utils.isPointInRectangle(fr, ft, bf.gap + 12, bf.gap + 12, aEL - 22, aEL - 22)) __fx.playerList.display(ah.a4W);
			else {
				if (ft - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fr - bf.gap);
				fr = aEy(ft);
				0 <= fr ? (aEW = bi.ek, aEX = !0, aEY = aEZ = fr, bM.a5y() && (fr = aCr(-1, aEZ, aEE), aEV !== (fr = fr === aEE ? -1 : fr)) && (aEV = fr, aEf(), bi.e2 = !0)) : (aEa && (aEa = !1, aEf(), bi.e2 = !0), u.v(10, 0, new aEz({
					aF0: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aEf(), bi.e2 = !0
	};

	function aEy(ft) {
		return (ft -= bf.gap + aEL) < 0 ? Math.floor(ft / aEM) - 1 : ft < (aEE - 1) * aEM ? Math.floor(ft / aEM) : ft < aC6 - aEL ? aEE - 1 : (ft -= aC6 - aEL, aEE + Math.floor(ft / aEM))
	}

	function a2l(fr, ft) {
		return fr >= bf.gap && fr < bf.gap + aEA && ft >= bf.gap && ft < bf.gap + aC6
	}
	this.a5L = function(fr, ft) {
		var el, aEx;
		if (__fx.utils.isPointInRectangle(fr, ft, bf.gap + 12, bf.gap + 12, aEL - 22, aEL - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fr, ft, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fr - bf.gap)) return aEx = aEy(ft), fr = a2l(fr, ft), ft = !(!(aEx < 0 && fr) || bM.a5y()), aEX ? (el = position, (position = aCr(0, position += aEY - aEx, aE.fh - aEE)) !== el ? (aEa = ft,
			aEx = aCr(-1, aEY = aEx, aEE), aEV = aEx = aEx !== aEE && fr ? aEx : -1, aEf(), bi.e2 = !0) : aEa !== ft && (aEa = ft, aEf(), bi.e2 = !0), !0) : (aEx = (aEx = aCr(-1, aEx, aEE)) === aEE || !fr || bM.a5y() ? -1 : aEx, (aEV !==
			aEx || aEa !== ft) && (aEV = aEx, aEa = ft, aEf(), bi.e2 = !0))
	}, this.a5k = function(fr, ft) {
		if (!aEX) return !1;
		aEX = !1;
		var aEx = aEy(ft);
		var isEmptySpace = false;
		return bM.a5y() && -1 !== aEV && (aEV = -1, aEf(), bi.e2 = !0), bi.ek - aEW < 350 && aEZ === aEx && -1 !== (aEx = (aEx = aCr(-1, aEx, aEE)) !== aEE && a2l(fr, ft) ? aEx : -1) && (fr = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aEx + position] === undefined, __fx.leaderboardFilter.rivalsData[aEx + position]?.representativeId ?? aE.fU) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), mh[__fx.leaderboardFilter.filteredLeaderboard[aEx + position] ?? (isEmptySpace = true, kr[aE.fU])]) : mh[aEx + position]),
			aEx === aEE - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kr[aE.fU]) >=
			position + aEE - 1 && (fr = aE.fU), !isEmptySpace && aE.ih && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fr, ah.a4W, aE.lQ), 0 === ah.ni[fr] || isEmptySpace || aE.i9 && !aE.lQ && !aE.ht && !aE
			.hu && fr !== aE.fU || aI.o4(fr, 800, !1, 0)), !0
	}, this.a5O = function(fr, ft, deltaY) {
		var aF3;
		return !(aEX || aE.oC || (aF3 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a2l(fr, ft)) || (fr = (fr = aCr(-1, aEy(ft), aEE)) === aEE || bM.a5y() ? -1 : fr, 0 < deltaY ? position < aE.fh - aEE && (position += Math.min(aE.fh - aEE -
			position, aF3), aEV = fr, aEf(), bi.e2 = !0) : 0 < position && (position -= Math.min(position, aF3), aEV = fr, aEf(), bi.e2 = !0), 0))
	}, this.yv = function() {
		yw.drawImage(aEF, bf.gap, bf.gap)
	}
}

function cW() {
	var canvas, p6, fr, ft, aDm, aF4, gap, aF5, fontSize, aF6, aF7, aF8, aF9, aFA, aFB, aFC, aFD, aFE;

	function aFI() {
		p6.clearRect(0, 0, aX.j, aX.k), p6.fillStyle = bE.qM, p6.fillRect(0, 0, aX.j, aX.k), p6.fillStyle = bE.qj, fO = 0 < aFC ? aFC : aF9[4] / 1e4, p6.fillRect(0, aX.k - aDm - 1, Math.floor(fO * aX.j), aDm), p6.fillStyle = bE.qP, p6.fillStyle =
			__fx.utils.lineColor(bE.qP), __fx.utils.smoothFrame(p6, aX.j, aX.k) || (p6.fillRect(0, 0, aX.j, 1), p6.fillRect(0, 0, 1, aX.k), p6.fillRect(aX.j - 1, 0, 1, aX.k), p6.fillRect(0, aX.k - 1, aX.j, 1)), p6.fillRect(0, aX.k - aDm - 1, aX.j,
			1), p6.fillStyle = bE.qP;
		for (var fO, aFK, el = 0, aC = 0; aC < aF8.length; aC++) aFA[aC] ? (bD.tO.textAlign(p6, 0), aFK = Math.floor((aF4 - aDm + 2 * aF5) * (aC - el + 1) / (aF8.length + 1) - .7 * aF5), p6.fillText(aF8[aC], gap, aFK), bD.tO.textAlign(p6, 2), 5 ===
			aC && 0 !== ah.ni[aE.fU] && ah.hm[aE.fU] >= af.km(aE.fU) ? (p6.fillStyle = bE.rR, p6.fillText(aFG(aC), aX.j - gap, aFK), p6.fillStyle = bE.qP) : p6.fillText(aFG(aC), aX.j - gap, aFK)) : el++
	}

	function aFG(aC) {
		return aC < 3 ? aF9[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.pc.a80(aF9[aC] / 100, 2) : aC < 7 ? bD.pc.a35(aF9[aC]) : aC === 7 ? aX.aFL(aF9[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hY, aE.fU) : __fx.utils.getDensity(aE.fU)
	}

	function aFF() {
		ah.hY[aE.fU] !== aF9[6] && (aF9[6] = ah.hY[aE.fU], aF6++)
	}
	this.dv = function() {
		aFC = aFD = 0, (aF7 = new Array(8))[0] = L(129), aF7[1] = aE.lQ ? L(33) : L(130), aF7[2] = L(131), aF7[3] = L(132), aF7[4] = L(133), aF7[5] = L(134, 0, "Interest"), aF7[6] = L(135), aF7[7] = L(136),
			aF7.push("Max Troops", "Density"), // add aF7
			(aF8 = new Array(aF7.length)).fill(""), (aF9 = new Array(aF7.length))[0] = aE.lQ ? 0 : aE.l6, aF9[1] = aE.lQ ? am.lc : aE.lS, aF9[2] = aE.a3o, aF9[3] = 0, aF9[4] = bO.gB(1e4 * ah.hY[0], Math.max(aE.kq, 1)), aF9[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.gB(700 * aE.data.iIncomeValue, 64) : bO.gB(700 * aE.data.iIncomeData[aE.fU], 64), aF9[6] = 0, aFF(), aF9[7] = 0, aFB = aFG(6), (aFA = new Array(aF7.length)).fill(!0), aFE = 0, aFE =
			aE.lQ ? (aFA[0] = !1, aFA[2] = !1, aFA[3] = !1, 3) : (aFA[3] = !1, 1), aF6 = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.ix() ? .1646 : .126) * 1.25 * i.iy), this.k = Math.floor(1.18 * this.j), aDm = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aF5 = .04 * this.j, aF4 = this.k, this.k -= Math.floor(aFE * (this.k -
			2 * aDm) / aF7.length), fontSize = Math.floor(.7 * (aF4 - aDm) / aF7.length);
		var a9e = bD.tO.ux(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(a9e, j) {
				for (var aC = 0; aC < aF8.length; aC++) aF8[aC] = bD.p6.a6u(aF7[aC], a9e, j)
			}((p6 = canvas.getContext("2d", {
				alpha: !0
			})).font = a9e, .575 * this.j), bD.tO.textBaseline(p6, 1), p6.lineWidth = 1, this.a8F(), this.aCV(), aV.aCV(), aFI()
	}, this.aCV = function() {
		fr = i.j - this.j - bf.gap
	}, this.aFJ = function() {
		ft = bf.gap
	}, this.a8F = function() {
		ft = bf.gap + (aV.aBr() && 0 !== ah.ni[aE.fU] && !aE.i9 ? aV.k + bf.gap : 0)
	}, this.nU = function(c3) {
		(c3 || 100 <= aF6) && (aF6 = 0, aFI())
	}, this.a90 = function() {
		return aF9[7]
	}, this.aFL = function(value) {
		var m1 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * m1) / 1e3);
		return value < 10 ? m1 + ":0" + value : m1 + ":" + value
	}, this.ep = function() {
		var aFW, per;
		aFA[0] && aE.a3p - aE.a3o !== aF9[0] && (aF9[0] = aE.a3p - aE.a3o, aF6++), am.lc - aF9[0] !== aF9[1] && (aF9[1] = am.lc - aF9[0], aF6++), this.nL(), (aFW = af.aFX(aE.fU)) !== aF9[5] && (aF9[5] = aFW, aF6++), aFF(), aF9[7] += bi.aFY, aFW =
			aFG(7), aFB !== aFW && (aFB = aFW, aF6 += 100), aFW = aE.ih ? bk.ld() : ah.hY[mh[0]], per = bO.gB(1e4 * aFW, Math.max(aE.kq, 1)), aF9[3] = aFW, aF9[4] !== per && (aF6++, aF9[4] = per), 8 === aE.lO && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.h6.hx(aC)) return bU.a3Q.a3l(), 1;
				return
			}() || aF9[3] < aE.kq || ! function() {
				for (var aC = am.lc - 1; 0 <= aC; aC--)
					if (0 < ah.hC[am.lh[aC]].length) return;
				return 1
			}() || bQ.lv.aFV().length || aE.ih && bk.ld(1) < aE.kq || bU.a3Q.a3l()
	}, this.nL = function() {
		aFA[2] && aE.a3o !== aF9[2] && (aF9[2] = aE.a3o, aF6 += 2 === aE.a3m ? 100 : 1)
	}, this.aFS = function() {
		return aF9[3] === aE.kq
	}, this.aFZ = function(aC) {
		var vt, aFa, el;
		return 2 !== aE.a3m && (aC % 2 == 1 && (aW.nU(1, 1), bi.e2 = !0), aC === aE.a8O ? (aFC = 0, aFI(), !1) : (-1 !== aC || 0 !== aFD) && (aFa = aFC, aFC = aE.ht ? aC / aE.a8O : (el = performance.now(), 0 <= aC && (vt = el - 392 * aC, aFD =
			0 === aC || vt < aFD ? vt : aFD), 1 < (aFC = (el - aFD) / (392 * aE.a8O)) ? 1 : aFC), aFI(), aFC !== aFa))
	}, this.yv = function() {
		yw.drawImage(canvas, fr, ft)
	}
}

function cX() {
	var iX, aFb, j, k, aCb, aFc, aFd, aBs, canvas, nv, aFe;

	function a1t() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.dv = function() {
		aFe = iX = !1, aCb = .61, aFc = .07, aFd = .09, nv = aBs = k = 0
	}, this.resize = function() {
		var p6, o9, eu, aFj, aFk, a9j;
		iX && (j = aFf(j = a1.a2.ix() ? Math.floor(.69 * i.iy) : Math.floor(.5 * i.iy), aAG(i.j - 2 * bf.gap, 10)), j = aFf(j, Math.floor(3.57 * aAG(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, p6 = canvas.getContext("2d", {
				alpha: !0
			}), o9 = Math.floor(1 + k / 40), p6.clearRect(0, 0, j, k), p6.fillStyle = bE.qM, p6.fillRect(o9, o9, j - 2 * o9, k - 2 * o9), p6.lineJoin = "bevel", p6.lineWidth = 2 * o9, p6.strokeStyle = bE.qP, p6.strokeRect(o9, o9, j - 2 * o9,
				k - 2 * o9), p6.imageSmoothingEnabled = !1, eu = ac.get(aFb), aFj = eu.width, a9j = (1 === aFb ? .85 : 21 === aFb ? .666 : .9) * aCb * k / (aFk = eu.height), p6.setTransform(a9j, 0, 0, a9j, Math.floor((j - a9j * aFj) / 2),
				Math.floor((k - a9j * aFk) / 2)), p6.drawImage(eu, 0, 0), p6.setTransform(1, 0, 0, 1, Math.floor(j - aFd * k - aFc * k - o9), Math.floor(o9 + aFc * k)),
			function(p6, fk) {
				p6.lineWidth = Math.floor(1 + k / 80), p6.strokeStyle = bE.qP, p6.beginPath(), p6.moveTo(0, 0), p6.lineTo(fk, fk), p6.moveTo(0, fk), p6.lineTo(fk, 0), p6.stroke()
			}(p6, Math.floor(aFd * k)), p6.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(gC, aFh, aCN, aFi) {
		iX || aE.hu || aFi && aFe || (aFb = aCN ? 21 : gC ? 1 : 2, iX = aFe = !0, this.resize(), aM.uN(), aS.aCI(), nv = bi.ek, aBs = aFh ? 1 : 0)
	}, this.ep = function() {
		!iX || 1 <= aBs || (aBs = 1 < (aBs += 5e-4 * (bi.ek - nv)) ? 1 : aBs, nv = bi.ek, bi.e2 = !0)
	}, this.hy = function(fr, ft) {
		return !(!iX || aBs <= 0 || (fr -= Math.floor((i.j - j) / 2), ft -= a1t(), fr < 0) || ft < 0 || j < fr || k < ft || (j - k / 3 < fr && ft < k / 3 && (iX = !1, bi.e2 = !0), 0))
	}, this.yv = function() {
		!iX || aBs <= 0 || (yw.globalAlpha = aBs, yw.drawImage(canvas, Math.floor((i.j - j) / 2), a1t()), yw.globalAlpha = 1)
	}
}

function dY() {
	var aFm, aFn = new Uint8Array(5),
		aFo = new Uint8Array(5);
	this.aFp = new aFq, this.dv = function() {
		for (var gC = bm.buffer.data[119].value, aC = 0; aC < aFn.length; aC++) aFn[aC] = (gC >> 2 * aC) % 4
	}, this.a8b = function() {
		aFm = [L(137), "", L(138, [ba.aFr[28]]), L(139, [ba.aFr[26]]), L(140, [ba.aFr[0]])], this.aFp.dv()
	}, this.ep = function() {
		this.aFp.ep()
	}, this.a9N = function(id) {
		1 < id && bM.tr() || ! function(eT) {
			if (3 === aFn[eT] || 1 === aFo[eT]) return;
			if (aFo[eT] = 1, !(Math.random() < .6)) {
				aFn[eT]++;
				for (var gC = 0, aC = 0; aC < aFn.length; aC++) gC += aFn[aC] << 2 * aC;
				bm.rv.q1(119, gC)
			}
			return 1
		}(id) || aO.aAM(aFm[id])
	}
}

function aFq() {
	var aFt;
	this.dv = function() {
		aFt = !1
	}, this.ep = function() {
		var hI;
		if (function() {
				if (!aFt) {
					if (bi.l3() % 30 != 9) return;
					if (!bD.h6.md(90)) return;
					aFt = !0
				}
				return 1
			}() && (! function() {
				var q5 = aO.aAj(956);
				if (q5) {
					if (bD.h6.m4(q5.player)) return 1;
					aO.aAi(956, 0)
				}
				return
			}() && (-1 === (hI = (aE.ih ? function() {
				var id = bk.lf(),
					fk = am.lc;
				if (bj.lT[id])
					for (var x0 = am.lh, fi = bj.fi, aC = 0; aC < fk; aC++) {
						var hI = x0[aC];
						if (fi[hI] !== id) return hI
					} else if (1 < fk) return mh[fk - 1];
				return -1
			} : function() {
				for (var aG1 = am.lc, m0 = am.lh, aG2 = kr, aC = 0; aC < aG1; aC++) {
					var hI = m0[aC];
					if (0 !== aG2[hI]) return hI
				}
				return -1
			})()) ? ! function() {
				var q5 = aO.aAj(957);
				if (q5 && q5.aAC) {
					if (ad.fb(q5.aAC.fW << 2)) return 1;
					aO.aAi(957, 0)
				}
				return
			}() : (aO.a2F(0, L(141, [ah.a2G[hI]]), 956, hI, bE.qP, bE.qM, -1, !0), 0)))) {
			var fk = ap.jk.mG;
			if (0 !== fk)
				for (var buffer = ap.jk.buffer, aC = 0; aC < fk; aC++) {
					var fW = buffer[aC];
					if (ad.fb(fW << 2)) return void aO.a2F(0, L(142, [bP.fs(fW), bP.fu(fW)]), 957, 0, bE.qP, bE.qM, -1, !0, void 0, {
						g3: 1,
						fW: fW
					})
				}
		}
	}
}

function dZ() {
	this.aG3 = new aG4, this.dv = function() {
		this.aG3.resize()
	}
}

function aG4() {
	this.resize = function() {
		var aC, aG5 = document.head.querySelector("style#ss");
		if (aG5)
			for (aC = aG5.sheet.cssRules.length - 1; 0 <= aC; aC--) aG5.sheet.deleteRule(0);
		else(aG5 = document.createElement("style")).id = "ss", document.head.appendChild(aG5);
		var aCi = "::-webkit-scrollbar",
			aG6 = bD.tO.tW(bf.v8),
			ij = bD.tO.tW(Math.max(bD.tO.uP(.012), 8));
		try {
			aG5.sheet.insertRule(aCi + "{width:" + ij + ";height:" + ij + ";}", aG5.sheet.cssRules.length), aG5.sheet.insertRule(aCi + "-thumb{background-color:white;}", aG5.sheet.cssRules.length), aG5.sheet.insertRule(aCi +
				"-track{background:" + bE.qL + ";}", aG5.sheet.cssRules.length), aG5.sheet.insertRule(aCi + "-track:horizontal{border-top:" + aG6 + " solid white;}", aG5.sheet.cssRules.length), aG5.sheet.insertRule(aCi +
				"-track:vertical{border-left:" + aG6 + " solid white;}", aG5.sheet.cssRules.length), aG5.sheet.insertRule(aCi + "-button{display:none;}", aG5.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aG5.sheet.cssRules.length - 1; 0 <= aC; aC--) aG5.sheet.deleteRule(0)
		}
	}
}

function dt() {
	this.data = new aG7, this.aG8 = new aG9
}

function aG7() {
	var aGA = [new Int16Array([6, 255, 255, 255, 255, 0, 1, 12, 18, 2, 88, 18, 2, 58, 52, 2, 58, 82, 2, 42, 72, 2, 42, 52, 3, 4])];
	this.get = function(id) {
		return aGA[id]
	}
}

function uH(id) {
	this.canvas = document.createElement("canvas");
	var aGB = this.canvas.getContext("2d"),
		aGC = 0;
	this.resize = function(size) {
		var aGD = Math.max(1, Math.round(size * i.l));
		this.canvas.style.width = this.canvas.style.height = bD.tO.tW(size), aGD !== aGC && (aGC = aGD, this.canvas.width = this.canvas.height = aGD, c1.aG8.yv(aGB, c1.data.get(id), aGD))
	}
}

function aG9() {
	this.yv = function(iq, h, size) {
		var id, pY, oL = size / 100,
			fk = h.length,
			aC = 0;
		for (iq.clearRect(0, 0, size, size), iq.lineJoin = "round", iq.lineCap = "round"; aC < fk;)
			if (0 === (id = h[aC++])) iq.beginPath();
			else if (1 === id) iq.moveTo(oL * h[aC], oL * h[aC + 1]), aC += 2;
		else if (2 === id) iq.lineTo(oL * h[aC], oL * h[aC + 1]), aC += 2;
		else if (3 === id) iq.closePath();
		else if (4 === id) iq.fill();
		else if (5 === id) iq.stroke();
		else if (6 === id) pY = "rgba(" + h[aC] + "," + h[aC + 1] + "," + h[aC + 2] + "," + h[aC + 3] / 255 + ")", iq.fillStyle = iq.strokeStyle = pY, aC += 4;
		else if (7 === id) iq.lineWidth = oL * h[aC], aC += 1;
		else if (8 === id) iq.arc(oL * h[aC], oL * h[aC + 1], oL * h[aC + 2], h[aC + 3] * Math.PI / 180, h[aC + 4] * Math.PI / 180), aC += 5;
		else {
			if (9 === id) iq.rect(oL * h[aC], oL * h[aC + 1], oL * h[aC + 2], oL * h[aC + 3]);
			else {
				if (10 !== id) return;
				iq.quadraticCurveTo(oL * h[aC], oL * h[aC + 1], oL * h[aC + 2], oL * h[aC + 3])
			}
			aC += 4
		}
	}
}

function dX() {
	this.aGE = !1, this.oZ = !1, this.a8J = !1, this.aGF = [0, 0, 0, 0], this.render = function() {
		var o9, oA, oM, oN;
		this.a8J = this.a8J || this.oZ, (this.oZ || this.aGE && this.a8J) && (o9 = bd.aGG[0], oA = bd.aGG[1], oM = bd.aGG[2], oN = bd.aGG[3], o9 = o9 < this.aGF[0] ? this.aGF[0] : o9, oA = oA < this.aGF[1] ? this.aGF[1] : oA, oM = oM > this.aGF[
				2] ? this.aGF[2] : oM, oN = oN > this.aGF[3] ? this.aGF[3] : oN, this.oZ = !1, this.aGE = !1, o9 === this.aGF[0] && oA === this.aGF[1] && oM === this.aGF[2] && oN === this.aGF[3] ? this.a8K() : o9 <= oM && oA <= oN && a8d
			.putImageData(a8e, 0, 0, o9, oA, oM - o9 + 1, oN - oA + 1))
	}, this.a8K = function() {
		this.a8J && this.aGF[2] >= this.aGF[0] && this.aGF[3] >= this.aGF[1] && a8d.putImageData(a8e, 0, 0, this.aGF[0], this.aGF[1], this.aGF[2] - this.aGF[0] + 1, this.aGF[3] - this.aGF[1] + 1), this.a8J = !1
	}, this.a3y = function() {
		this.aGF[2] >= this.aGF[0] && this.aGF[3] >= this.aGF[1] && a8d.putImageData(a8e, 0, 0, this.aGF[0], this.aGF[1], this.aGF[2] - this.aGF[0] + 1, this.aGF[3] - this.aGF[1] + 1), this.a8J = !1
	}, this.dv = function() {
		var fr, ft;
		this.aGE = !1, this.oZ = !1, this.a8J = !1, this.aGF[0] = bV.fv, this.aGF[1] = bV.fw, this.aGF[2] = this.aGF[3] = 0;
		loop: for (fr = 1; fr < bV.fv - 1; fr++)
			for (ft = bV.fw - 2; 1 < ft; ft--)
				if (1 === aGH[ad.a1P(fr, ft) + 2]) {
					this.aGF[0] = fr;
					break loop
				} loop: for (ft = 1; ft < bV.fw - 1; ft++)
			for (fr = bV.fv - 2; 1 < fr; fr--)
				if (1 === aGH[ad.a1P(fr, ft) + 2]) {
					this.aGF[1] = ft;
					break loop
				} loop: for (fr = bV.fv - 2; 0 < fr; fr--)
			for (ft = bV.fw - 2; 1 < ft; ft--)
				if (1 === aGH[ad.a1P(fr, ft) + 2]) {
					this.aGF[2] = fr;
					break loop
				} loop: for (ft = bV.fw - 2; 0 < ft; ft--)
			for (fr = bV.fv - 2; 1 < fr; fr--)
				if (1 === aGH[ad.a1P(fr, ft) + 2]) {
					this.aGF[3] = ft;
					break loop
				}
	}
}

function L(value, aGI, zU, aGJ) {
	var pY = "number" == typeof value ? bA.aGK[value] : value;
	if (zU && bA.aGL() && (pY = zU), !aGI) return aGJ ? pY.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : pY;
	for (var fk = aGI.length, aC = 0; aC < fk; aC++)
		for (var g3 = 0; g3 < 3; g3++) pY = pY.replace("{" + (10 * g3 + aC) + "}", aGI[aC]);
	return pY
}

function cB() {
	this.data = new aGM;
	var aGN = (new aGO).L84,
		aGQ = (this.aGK = aGN, !(this.aGP = "en"));
	this.dv = function() {
		var pY, h;
		aGQ = !1, ("en" === (pY = bm.buffer.data[12].value).split("-")[0].toLowerCase() ? (bA.aGK = aGN, bA.aGP = pY, 1) : bm.buffer.data[12].value === bm.buffer.data[145].value && 0 < bm.buffer.data[146].value && (pY = bm.buffer.data[146].value,
			(h = bm.te.zg(pY, !1)).length === pY) && !!bD.tV.a6U(h) && function(h) {
			for (var fk = h.length, k = 0; k < fk; k++) h[k] = h[k].replace("&#39;", "'");
			var aGW = bm.te.zg(fk, !0);
			if (fk !== aGW.length) return !1;
			if (!bD.tV.a6U(aGW)) return !1;
			for (var m1 = aGN.length, aDd = new Array(m1), aGX = m1 === fk, hD = Math.min(fk, m1), aC = 0; aC < m1; aC++)
				if (aDd[aC] = aGN[aC], aC < fk && aGW[aC] === aDd[aC]) aDd[aC] = h[aC];
				else {
					aGX = !1;
					for (var g4 = 0; g4 < hD; g4++)
						if (aGW[g4] === aDd[aC]) {
							aDd[aC] = h[g4];
							break
						}
				} return bA.aGK = aDd, bA.aGP = bm.buffer.data[12].value, aGX
		}(h)) || (aGQ = !0)
	}, this.dx = function() {
		bj.dw(), aF.dw(), bh.dw(), bg.dw(), aP.dv(), br = new eJ
	}, this.aGL = function() {
		return this.aGK === aGN || !aGN.length
	}, this.aGY = function() {
		var aGZ;
		return !!aGQ && (aGQ = !1, 0 !== aGN.length) && (aGZ = bm.buffer.data[12].value, b1.er.aGa(0, aGZ.slice(0, 20)), !0)
	}, this.aGb = function(h) {
		h.length !== aGN.length ? 8 === u.vX && u.a52().aGc(30, 0, 1) : (this.aGK = h, this.aGP = bm.buffer.data[12].value, bm.rv.q1(145, this.aGP), bm.rv.q1(146, h.length), bm.te.zm(h, !1), bm.te.zm(aGN, !0), 8 === u.vX ? u.a52().aGc(30) : 0 ===
			ab.a4y() && 5 === u.vX && u.z.aGd())
	}, this.aGe = function() {
		var zp, h = navigator.languages;
		return h && h.length ? (zp = Math.max(bA.data.aGf(h[0]), 0), 1 === h.length ? [zp, zp] : [zp, Math.max(bA.data.aGf(h[1]), 0)]) : [0, 0]
	}
}

function aGM() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aGg = function() {
		for (var aGh = [], h = this.h, fk = h.length, aC = 0; aC < fk; aC++) aGh.push(h[aC]);
		var aGi = bm.buffer.data[12].zU;
		for (aC = 0; aC < fk; aC++)
			if (aGh[aC] === aGi) {
				aGh.splice(aC, 1), fk--;
				break
			} aGh.sort(), fk++, aGh.unshift(aGi);
		try {
			if ("undefined" == typeof Intl) return aGh;
			for (aC = 0; aC < fk; aC++) {
				var pY = new Intl.DisplayNames([aGh[aC]], {
					type: "language"
				}).of(aGh[aC]);
				pY !== aGh[aC] && (aGh[aC] = aGh[aC] + ": " + pY)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aGh
	}, this.aGk = function(aGl) {
		for (var pY = bm.buffer.data[12].value, fk = aGl.length, aC = 0; aC < fk; aC++)
			if (pY === aGl[aC].split(":")[0]) return aC;
		return 0
	}, this.aGf = function(aGm) {
		if (aGm && !(aGm.length < 2)) {
			aGm = aGm.split("-")[0].toLowerCase();
			for (var h = this.h, fk = h.length, aC = 0; aC < fk; aC++)
				if (aGm === h[aC]) return aC
		}
		return -1
	}
}

function aGO() {
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
		"White", "Black", "Ship launched!", "Ship intercepted!", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function e0() {
	var fr, ft, k, wQ, aGn, aGo, aGp, aGq, aGr, j, a78, aGs;
	this.iX = !1, this.dv = function(pY, aGt) {
		if (1 === a1.id && 13 <= a1.eC && a1.eC < 18) return aGt ? void(a78 = pY) : a78 !== pY ? void 0 : void a1.ze.saveString(200, pY);
		aGt && (a78 = pY, (aGs = document.createElement("a")).appendChild(document.createTextNode(a78)), this.iX = !0, aGs.title = a78, aGs.target = "_blank", aGs.href = a78, aGs.style.textAlign = "center", aGs.style.color = bE.qP, aGs.style
			.position = "absolute", aGs.style.padding = "0px", aGs.style.margin = "0px", this.resize(), document.body.appendChild(aGs), bi.e2 = !0)
	}, this.uN = function() {
		return !(!this.iX || (u.removeChild(document.body, aGs), this.iX = !1))
	}, this.hy = function(j5, j6) {
		return !!this.iX && ((j5 < fr || j6 < ft || fr + j < j5 || ft + k < j6 || fr + j - wQ < j5 && j6 < ft + wQ) && (bi.e2 = !0, this.iX = !1, u.removeChild(document.body, aGs)), !0)
	}, this.resize = function() {
		var a9e, aGu;
		this.iX && (aGq = Math.floor(.8 * (a1.a2.ix() ? i.j > i.k ? .6 : .55 : .4) * i.iy), wQ = Math.floor(.15 * aGq), aGn = Math.floor(.35 * wQ), aGo = Math.floor(.5 * wQ), aGp = Math.floor(2.5 * aGo), k = wQ + aGn + 3 * aGo, a9e = bD.tO.ux(1,
			aGn / i.l), aGr = Math.floor(i.l * aR.measureText(a78, a9e)), aGu = j = (aGq < aGr ? aGr : aGq) + 2 * aGp, j = Math.min(j, i.j - 2 * (a1.a2.ix() ? 2 : 1) * bf.gap), a9e = bD.tO.ux(1, j / aGu * aGn / i.l), aGr = Math.floor(i
			.l * aR.measureText(a78, a9e)), fr = Math.floor((i.j - j) / 2), ft = Math.floor((i.k - k) / 2), aGs.style.font = a9e, aGs.style.top = Math.floor((ft + 1.4 * aGo + wQ) / i.l) + "px", aGs.style.left = Math.floor((fr + (j -
			aGr) / 2) / i.l) + "px")
	}, this.yv = function() {
		this.iX && (yw.fillStyle = bE.qM, yw.fillRect(fr, ft + wQ, j, k - wQ), yw.fillStyle = bE.re, yw.fillRect(fr, ft, j, wQ), yw.fillStyle = bE.qP, yw.lineWidth = bf.a2m, yw.strokeStyle = bE.qP, yw.strokeRect(fr, ft, j, k), yw.fillRect(fr,
			ft + wQ, j, bf.a2m), yw.font = bD.tO.ux(1, .48 * wQ), bD.tO.textAlign(yw, 1), bD.tO.textBaseline(yw, 1), yw.fillText(L(143), Math.floor(fr + (j - .5 * wQ) / 2), Math.floor(ft + .55 * wQ)), aN.a9q(Math.floor(fr + j - .8 * wQ),
			Math.floor(ft + .25 * wQ), Math.floor(.5 * wQ)), yw.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dz() {
	var gap, aF7, fr = [0, 0, 0, 0, 0],
		ft = [0, 0, 0, 0, 0],
		oL = [1, 1, 1, 1, 1],
		gC = [!0, !0, !0, !1, !1],
		eu = (this.gX = [!0, !0, !0, !1, !1], null);
	this.aGv = function(a6f, aGw) {
		eu = a6f, gC = aGw, aF7 = [bN.aGx, bN.a4u, bN.aGy, bN.aGy, bN.aGz], this.dv()
	}, this.dv = function() {
		if (ac.vx()) {
			var aC, vc = Math.floor((a1.a2.ix() ? .261 : .195) * i.iy),
				vd = Math.floor(.9 * vc),
				aCb = Math.floor(.17 * vd);
			if (gap = a1.a2.ix() ? 2 * bf.gap : bf.gap, oL[0] = vc / eu[0].width, oL[1] = vd / eu[1].width, oL[2] = aCb / eu[2].height, oL[3] = aCb / eu[3].height, oL[4] = aCb / eu[4].height, oL[2] *= 1.7, oL[3] *= 1.07, fr[0] = gap, fr[1] = gap,
				fr[2] = gap, fr[3] = gap, fr[4] = Math.floor(2 * gap + oL[3] * eu[3].width), ft[0] = gap, ft[1] = ft[0] + gap + oL[0] * eu[0].height, ft[2] = ft[1] + gap + oL[1] * eu[1].height, ft[3] = ft[2] + gap + oL[2] * eu[2].height, ft[4] =
				ft[3], !gC[0])
				for (aC = 0; aC < 5; aC++) ft[aC] -= oL[0] * eu[0].height + gap;
			if (!gC[1])
				for (aC = 2; aC < 5; aC++) ft[aC] -= oL[1] * eu[1].height + gap
		}
	}, this.iX = function() {
		return !(7 === ab.a4y() && a1.a2.ix())
	}, this.hy = function(j5, j6) {
		if (eu && this.iX())
			for (var aC = gC.length - 1; 0 <= aC; aC--)
				if (gC[aC] && this.gX[aC] && fr[aC] < j5 && ft[aC] < j6 && j5 < fr[aC] + oL[aC] * eu[aC].width && j6 < ft[aC] + oL[aC] * eu[aC].height) return u.v(9, u.vX, new aH0(L(144), bD.tO.a77(aF7[aC]))), !0;
		return !1
	}, this.yv = function() {
		if (eu && this.iX()) {
			var aC;
			for (yw.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) gC[aC] && this.gX[aC] && (yw.setTransform(oL[aC], 0, 0, oL[aC], fr[aC], ft[aC]), yw.drawImage(eu[aC], 0, 0));
			yw.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function di() {
	this.aH1 = 0, this.pm = null, this.po = null, this.tJ = null, this.lv = null, this.z = null, this.y9 = null, this.xd = null, this.message = null, this.pa = null, this.q7 = null, this.aH2 = null, this.aH3 = new aH4, this.xB = new aH5, this.fH = 0,
		this.aDU = 0, this.dv = function() {
			this.aDU = bi.ek, this.aH1 = bJ.fB.fC(bm.buffer.data[105].value, 5), this.po = new aH6, this.tJ = new aH7, this.lv = new aH8, this.z = new aH9, this.y9 = new aHA, this.xd = new aHB, this.message = new aHC, this.pa = new aHD, this.q7 =
				new aHE, this.aH2 = new aHF, bt.dv(), this.fH = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.fF()
		}, this.xy = function() {
			this.xB.aHG(), this.q7 && this.q7.xy(), this.pm = null, this.po = null, this.tJ = null, this.lv = null, this.z = null, this.y9 = null, this.xd = null, this.message = null, this.pa = null, this.q7 = null, this.aH2 = null, this.fH = 0, bt
				.xy(), a1.a2.setState(0)
		}
}

function aH6() {
	function aHI() {
		bq.z.aHJ += 29 === u.vX && 1 === bq.z.aHK
	}

	function aHo(self, kM, hD) {
		for (var h = self.x0.splice(kM, hD), aC = 0; aC < h.length; aC++) aHe(self, h[aC]);
		aHI()
	}

	function aHe(self, hI) {
		var self = self.xf,
			pB = self.pop();
		pB !== hI && ((self[hI.aHQ] = pB).aHQ = hI.aHQ)
	}
	this.x0 = [], this.xf = [], this.aHH = [], this.aHL = function(pg, username, xo, a7f, aHM, elo, color, a0A, aHN, code, xi, xl) {
		username = this.aHP(pg, username, xo, a7f, aHM, elo, color, a0A, aHN, code);
		username.xi = xi, username.xl = xl, this.x0.push(username), username.aHQ = this.xf.length, this.xf.push(username), bq.aH1 === pg && (bq.pm = username), bq.aH2.aHR(pg) && (username.xq = 1), bq.q7.aHS(pg), aHI()
	}, this.aHP = function(pg, username, xo, a7f, aHM, elo, color, a0A, aHN, code) {
		return {
			pg: pg,
			username: code ? __fx.nameFilter.filter(username) : "Player " + bI.fB.a35(pg, 2),
			aHT: __fx.nameFilter.filter(username),
			xo: xo,
			a7f: a7f,
			aHM: aHM,
			elo: elo,
			color: color,
			a0A: a0A,
			aHN: aHN
		}
	}, this.aHU = function(eT, xo, a7f, aHM, elo, a0A, color) {
		eT = this.x0[eT];
		eT.xo = xo, eT.a7f = a7f, eT.aHM = aHM, eT.elo = elo, eT.a0A = a0A, eT.color = color, bq.q7.aHS(eT.pg), aHI()
	}, this.aHV = function(eT, code) {
		eT = this.x0[eT];
		1 === code && (eT.username = eT.aHT), bq.q7.aHS(eT.pg), aHI()
	}, this.aHW = function(eT, aHX) {
		var eT = this.x0[eT],
			aHY = eT.username,
			aCn = eT.username !== eT.aHT,
			aHZ = "Redacted " + bI.fB.a35(eT.pg, 2);
		eT.aHT = aHX ? "[" + bD.pc.pq(eT.aHT) + "] " + aHZ : aHZ, aCn || (eT.username = eT.aHT), aHY.indexOf("Redacted") < 0 && (eT.aHa = aHY), bq.q7.aHS(eT.pg), aHI()
	}, this.aHb = function(eT, username) {
		var eT = this.x0[eT],
			aCn = eT.username !== eT.aHT;
		eT.aHT = username, aCn || (eT.username = username), eT.pg === bq.aH1 && bq.lv.aHc(username), bq.q7.aHS(eT.pg), aHI()
	}, this.aHd = function(eT) {
		eT = this.x0.splice(eT, 1)[0];
		aHe(this, eT), this.aHH.push(eT), 1e3 < this.aHH.length && this.aHH.shift(), aHI()
	}, this.aHf = function(eT, target, xi, xl) {
		var x0 = this.x0,
			eT = x0.splice(eT, 1)[0];
		x0.splice(target, 0, eT), !eT.xi && xi && bq.aH2.join(eT), eT.xi = xi, eT.xl = xl, aHI()
	}, this.aHg = function(xi) {
		for (var x0 = this.x0, fk = x0.length, aC = 0; aC < fk; aC++)
			if (x0[aC].xi === xi) return aC;
		return fk
	}, this.aHh = function(kM) {
		for (var x0 = this.x0, fk = x0.length, xi = kM < fk ? x0[kM].xi : 0, aC = kM; aC < fk && x0[aC].xi === xi && !x0[aC].xl;) aC++;
		return aC
	}, this.aHi = function(kM, aHj, aHk) {
		for (var aHl = this.aHh(kM), h = [], aC = 0; aC < aHj; aC++) aHk && 511 === aHk[aC] || h.push(this.x0[aHl + aC]);
		return h
	}, this.aHm = function(kM, hD, aHj, aHk) {
		for (var aHn = this.aHi(kM, aHj, aHk), aC = aHn.length - 1; 0 <= aC; aC--) aHo(this, this.x0.indexOf(aHn[aC], kM), 1);
		aHo(this, kM, hD)
	}, this.aHp = function(xi) {
		for (var x0 = this.x0, aHq = 0; aHq < x0.length && x0[aHq].xi === xi;) aHq++;
		for (var left = x0.splice(0, aHq), aC = 0; aC < aHq; aC++) left[aC].xi = 0, left[aC].xl = 0, x0.push(left[aC]);
		aHI()
	}, this.pp = function(pg) {
		for (var x0 = this.x0, m1 = x0.length, g3 = 0; g3 < m1; g3++)
			if (pg === x0[g3].pg) return x0[g3];
		return null
	}
}

function aH7() {
	this.tJ = [], this.xE = 0, this.xF = 0, this.aHr = 0;
	var aHt = this.aHs = 0,
		aHu = 0;
	this.aHv = function() {
		for (var self, fk = bK.sY(4), tJ = new Array(fk), aC = 0; aC < fk; aC++) tJ[aC] = {
			id: bK.sY(13),
			xL: bK.sY(12),
			hD: bK.sY(16),
			aHj: bK.sY(16),
			nd: bK.sY(10),
			fQ: bK.sY(6),
			mapSeed: bK.sY(14),
			wy: bK.sY(4),
			xP: bK.sY(1)
		};
		this.tJ = tJ, __fx.lobbyReminders.setRooms(this.tJ), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aHx({
				id: 7,
				s: text
			})
		}), !(self = this).xE || 0 <= self.xh(self.xE) || (self.xE = 0, self.xF = 0, bq.message.aHx({
			id: 7,
			s: L(145)
		}))
	}, this.xh = function(id) {
		for (var tJ = this.tJ, aC = tJ.length - 1; 0 <= aC; aC--)
			if (tJ[aC].id === id) return aC;
		return -1
	}, this.aHy = function() {
		return 1 === aHt
	}, this.aHz = function(id) {
		return 0 < id && 0 < this.tJ.length && this.tJ[0].id === id
	}, this.aI0 = function() {
		return this.aHz(this.xE)
	}, this.click = function(eT, xl) {
		eT = this.tJ[eT];
		xl = xl ? 1 : 0, eT && (eT.id === this.xE && xl === this.xF ? this.select(0, 0) : this.select(eT.id, xl))
	}, this.select = function(id, xl) {
		this.xE = id, this.xF = id ? xl : 0, this.aHr = this.aHs = 0, aHt = 1, aHu++, b1.aI1.aI2(4, {
			xi: id,
			xl: this.xF
		}), u.a91(29).aI3()
	}, this.aI4 = function(id, xl) {
		0 === (aHu = Math.max(aHu - 1, 0)) && (this.xE = id, this.xF = xl)
	}, this.zK = function(pg, wy) {
		this.aHr = wy ? pg : 0, this.aHs = wy, aHt = 1, b1.aI1.aI2(6, {
			wy: wy,
			pg: pg
		})
	}, this.aI5 = function(pg, wy) {
		return this.aHs === wy && this.aHr === pg
	}, this.xG = function(xD) {
		return xD.hD - xD.aHj
	}, this.xJ = function(wy) {
		return wy < 7 ? wy + 2 + " Teams" : 7 === wy ? "Battle Royale" : 8 === wy ? "1v1" : 9 === wy ? "Zombie" : "No Full-Sending"
	}, this.xM = function(xD) {
		return xD.nd < (9 === xD.wy ? 333 : 512)
	}, this.xK = function(xL) {
		var aBD = xL % 60;
		return bO.gB(xL, 60) + ":" + (aBD < 10 ? "0" : "") + aBD
	}
}

function aHF() {
	var aI6 = [],
		aI7 = [],
		aI8 = 0;

	function aI9(h, aAl, aIC, aID) {
		var fk = h.length;
		if (0 === fk) return "";
		var pY = "@" + h[0];
		if (1 === fk) return pY + aAl + aID;
		for (var aC = 1; aC < fk - 1; aC++) pY += ", @" + h[aC];
		return pY + " and @" + h[fk - 1] + aIC + aID
	}
	this.dv = function() {
		var pY = aI9(aI7, " is", " are", " in the lobby.");
		pY.length && bq.message.aHx({
			id: 7,
			s: pY
		}), aI6 = [], aI7 = [], aI8 = 0
	}, this.aHR = function(aIA) {
		return bq.aH1 !== aIA && (aIA = bI.fB.a35(aIA, 5), !!bm.zK.xq(aIA)) && (aI7.push(aIA), !0)
	}, this.join = function(player) {
		bq.aH1 !== player.pg && (player = bI.fB.a35(player.pg, 5), bm.zK.xq(player)) && aI6.push(player)
	}, this.aIB = function() {
		var aAl, aIC;
		++aI8 < 3 || (aI8 = 0, aAl = aI9(aI7, "", "", " entered the lobby!"), (aAl = (aIC = aI9(aI6, "", "", " joined a game!")).length ? aAl.length ? aAl + " " + aIC : aIC : aAl).length && bq.message.aHx({
			id: 7,
			s: aAl
		}), aI6 = [], aI7 = [])
	}
}

function aH4() {
	this.e3 = function(kM, aIE, aHj) {
		var po, aH3 = bq.z.aH3,
			aIF = bq.po.x0.slice(kM, kM + aIE),
			kM = bq.po.aHi(kM, aHj, aH3.aHk),
			aHj = function(aIF) {
				if (__fx.customLobby.isActive()) return bq.pm ? __fx.customLobby.getPlayerId() : -1;
				if (bq.pm && bq.tJ.aHy())
					for (var fk = aIF.length, pg = bq.pm.pg, aC = 0; aC < fk; aC++)
						if (aIF[aC].pg === pg) return aC;
				return -1
			}(aIF.concat(kM));
		if (-1 === aHj) return (po = bq.po).aHH = po.aHH.concat(aIF, kM), 1e3 < bq.po.aHH.length && bq.po.aHH.splice(0, bq.po.aHH.length - 1e3), bq.z.aHJ += 29 === u.vX && 1 === bq.z.aHK, !1;
		if (aH3.a8V = aIE <= aHj ? 1 : 0, aH3.a8o = kM.length, 8 === aH3.wy) {
			for (var aIJ = function(aHk) {
					for (var h = [], aC = 0; aC < aHk.length; aC++) 511 !== aHk[aC] && h.push(aHk[aC]);
					return h
				}(aH3.aHk), ie = aHj - aIE, aIL = aH3.a8V ? aIJ[ie] : aHj >> 1, aIM = 0, aC = aH3.a8o = 0; aC < aIJ.length; aC++) aIJ[aC] === aIL && (aIM += aC < ie ? 1 : 0, aH3.a8o++);
			aH3.aIN = (aH3.aIN + aIL) % 1024, 0 <= aH3.a4F && (aH3.a4F += aIL), aHj = aH3.a8V ? 2 + aIM : aHj % 2, aIF = aIF.slice(2 * aIL, 2 * aIL + 2)
		}
		return aH3.aIO = aH3.a8V ? function(aIF) {
			var tJ = bq.tJ;
			if (tJ.aHs)
				for (var aC = 0; aC < aIF.length; aC++)
					if (aIF[aC].pg === tJ.aHr) return aC;
			return 0
		}(aIF) : 0, ay.dv(aH3, aIF, aHj), !0
	}, this.aIQ = function(aH3, aIF, aIH) {
		var fn = aE.data = new a8P,
			aIT = (fn.spawningSeed = aH3.spawningSeed, aH3.wy < 7 ? (fn.gameMode = 1, fn.numberTeams = aH3.wy + 2) : 9 === aH3.wy ? (fn.gameMode = fn.isZombieMode = 1, fn.numberTeams = 2) : (fn.gameMode = 0, fn.battleRoyaleMode = 7 === aH3.wy ?
					0 : 10 === aH3.wy ? 1 : 2), fn.selectedPlayer = aH3.a8V ? aH3.aIO : aIH, fn.a8V = aH3.a8V, fn.a8o = aH3.a8o, fn.isContest = aH3.xP, fn.mapType = bV.aIR(aH3.fQ) ? 0 : 1, bV.aIS(fn, aH3.fQ), fn.mapSeed = aH3.mapSeed, fn
				.humanCount = aIF.length);
		fn.selectableSpawn = 1 === fn.gameMode || aIT < 100, fn.colorsData = new Uint32Array(aIT), fn.playerNamesData = new Array(aIT), fn.a8p = new Uint32Array(aIT);
		for (var aC = 0; aC < aIT; aC++) fn.colorsData[aC] = aIF[aC].color, fn.playerNamesData[aC] = aIF[aC].username, fn.a8p[aC] = aIF[aC].pg;
		if (2 === fn.battleRoyaleMode)
			for (fn.elo = new Uint16Array(aIT), aC = 0; aC < aIT; aC++) fn.elo[aC] = aIF[aC].elo;
		bx.close(), ab.setState(8), bV.a8(aH3.fQ, fn.mapSeed), aE.a8U(), aE.a4F = aH3.a4F, aE.a8S = 2
	}
}

function aH8() {
	var eK = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aIU = [bE.qd, bE.qd, bE.qe, bE.r9, bE.rA, bE.qu, bE.rF, bE.qe, bE.rg, bE.rU, bE.rd, bE.qG],
		aIV = [
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
		aIW = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aIl(pu, pg, aIn) {
		for (var g4 = pu.length - 1; 0 <= g4; g4--) {
			var q5 = pu[g4];
			0 === q5.id && q5.pg === pg && (q5.s = "[Redacted Message]", aIn) && (q5.aIo = 1)
		}
	}
	this.pz = function(pe) {
		var aIX, a4Z;
		return pe.id < 5 && (aIX = "@" + bI.fB.a35(pe.pg, 5)), 0 === pe.id ? aIX + ": " + pe.s : 1 === pe.id ? (a4Z = "@" + bI.fB.a35(pe.target, 5), 0 === pe.aIY ? 32768 <= pe.value ? aIX + " voted with " + (pe.value - 32768 + 1) +
				" gold against " + a4Z + " to weaken the latter's admin position. 📉" : aIX + " voted with " + (pe.value + 1) + " gold for " + a4Z + " to strengthen the latter's admin position. 💪" : 1 === pe.aIY ? aIX + " sent " + Math.floor(pe
					.value / 100) + " 🧈 gold to " + a4Z + "." : aIX + " voted with " + (pe.value / 10).toFixed(1) + " points for " + a4Z + " to acknowledge the latter as clan leader. ✅") : 2 === pe.id ? 0 === pe.aIY ? aIX +
			" was 🔇 muted for 1 Hour." : 1 === pe.aIY ? "The username of " + aIX + " was ✂️ redacted. Duration: 1 Day" : aIX + " 👢 was kicked." : 3 === pe.id ? aIX + br.eW(pe.aIY, br.eQ[pe.aIY][pe.value]) + "@" + bI.fB.a35(pe.target, 5) + br
			.eY(pe.aIY, br.eQ[pe.aIY][pe.value]) : 4 === pe.id ? (a4Z = "@" + bI.fB.a35(pe.target, 5), 1 === pe.aIY ? "✅ " + aIX + " vouched for " + a4Z + "." + (pe.aIa ? " ⚖️ The punishment of " + a4Z + " was refunded." : "") : "🚩 " + aIX +
				" reported " + a4Z + "." + (pe.aIa ? " ⚖️ " + a4Z + " was punished." : "")) : 5 === pe.id ? aIW[pe.aIY] : 6 === pe.id ? "You are about to mention " + pe.value + " player" + (1 === pe.value ? "" : "s") +
			". This action will cost " + (Math.max(pe.value, 1) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === pe.id ? pe.s : void 0
	}, this.py = function(pe, aIb) {
		return {
			pe: pe,
			s: aIb,
			aIc: 0,
			fontSize: 4 === pe.id ? .8 : 1,
			q6: 0,
			aId: pe.id ? bE.r8 : bE.qP
		}
	}, this.xm = function(player, xk) {
		return (xk ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.xn = function(xo) {
		return aIU[xo]
	}, this.aIe = function(xo, a7f) {
		return xo < 3 || 7 === xo ? aIV[xo][0] : 4 === xo ? aIV[xo][a7f < 1 ? 0 : a7f < 10 ? 1 : 2] : aIV[xo][a7f < 10 ? 0 : 1]
	}, this.aIf = function(a7f) {
		return 0 === a7f
	}, this.xp = function(q5) {
		return !!bq.pm && q5.pg === bq.pm.pg
	}, this.aIg = function(po, aIh, aIi) {
		var a4X = [];
		loop: for (var aC = aIh; aC < aIi; aC++) {
			var a4Y = bD.pc.pq(po[aC].username);
			if (a4Y) {
				for (var g4 = a4X.length - 1; 0 <= g4; g4--)
					if (a4Y === a4X[g4].name) {
						a4X[g4].hD++;
						continue loop
					} a4X.push({
					name: a4Y,
					hD: 1
				})
			}
		}
		if (a4X.sort(function(g3, g4) {
				return g4.hD - g3.hD
			}), 0 === a4X.length) return "";
		for (var pY = a4X[0].name + ": " + a4X[0].hD, aC = 1; aC < a4X.length; aC++) pY += "   " + a4X[aC].name + ": " + a4X[aC].hD;
		return pY
	}, this.aIj = function(xo, a7f, aHM) {
		return 0 === eK[xo].length ? "Rank: " + (a7f + 1) : eK[xo] + " Rank: " + (a7f + 1) + (3 !== xo && aHM < 100 ? "   " + eK[3] + " Rank: " + (aHM + 1) : "")
	}, this.aIk = function(pg) {
		aIl(bq.z.pu, pg), aIl(bq.message.aIm(), pg, 1), bq.q7.aIk(pg)
	}, this.aHc = function(username) {
		var username = this.aIp(username);
		username && (username = "[" + username + "] " + function(username) {
			var fZ = username.indexOf("["),
				fo = username.indexOf("]", fZ);
			for (; 0 <= fZ && fZ < fo;) username = username.substring(0, fZ) + username.substring(fo + 1), fZ = username.indexOf("["), fo = username.indexOf("]", fZ);
			return (username = username.replace(new RegExp("[\\[\\]]", "g"), "")).replace(new RegExp("\\s+", "g"), " ").trim()
		}(String(bm.buffer.data[122].value)), bm.rv.q1(122, username.trim().slice(0, 20)))
	}, this.aIp = function(username) {
		var fZ = username.indexOf("["),
			fo = username.indexOf("]");
		return !(fZ < 0 || fo - fZ <= 1 || 8 < fo - fZ) && (username = username.substring(fZ + 1, fo).trim()).length ? username : null
	}
}

function aHB() {
	var un = 0,
		aIs = 0,
		aIt = 0,
		aIu = null,
		aIv = null;

	function aIy(q5, aIz, aJ0) {
		var pY = q5.username;
		return (pY += "   " + bq.lv.aIj(q5.xo, q5.a7f, q5.aHM)) + function(q5) {
			q5 = q5.a0A;
			if (q5 < 1e3) return "   Gold: " + q5;
			if ((q5 %= 1024) < 1e3) return "   Gold: " + q5 + "k";
			return "   Gold: " + (q5 - 999) + "M"
		}(q5) + ("   IP: " + bI.fB.a35(q5.aHN, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aJ0 ? aIs : aIx(q5, aIz)])
	}

	function aIx(q5, aIz) {
		return aIs = aIz || bq.po.pp(q5.pg) ? 1 : 0
	}
	this.xe = 0, this.aIw = function() {
		!un || aIs === aIx(aIv) && aIt === aIv.a0A || (aIt = aIv.a0A, aIu.show(-1, -1, aIy(aIv, 0, 1), 1, 1, aIv.color))
	}, this.xr = function(e, q5, aIz) {
		var rect = e.getBoundingClientRect();
		this.show(rect.left, rect.top, q5, 0, aIz), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.xd && bq.xd.uN(1)
		}), this.xe = aIz
	}, this.show = function(fr, ft, q5, v3, aIz) {
		aIu = aIu || new v0, aIt = (aIv = q5).a0A, aIu.show(fr, ft, aIy(q5, aIz), v3, 0, aIv.color), un = 1
	}, this.uN = function(v9) {
		this.xe = 0, aIu && aIu.uN(v9) && (un = 0, aIv = null)
	}
}

function aH9() {
	function aJ4() {
		var fQ, mapSeed;
		u.a91(29) && (bq.z.aHJ && 1 === bq.z.aHK && u.a91(29).aJ6(), bq.z.aHJ = 0, u.a91(29).aJ7(), fQ = bV.fQ, mapSeed = bV.mapSeed, u.a91(29).aJ8(), fQ === bV.fQ && mapSeed === bV.mapSeed || bq.xB.aJ9(), bq.xd.aIw())
	}
	this.wK = 0, this.aHK = 2, this.aH3 = {
		fQ: 0,
		mapSeed: 0,
		wy: 0,
		xP: 0,
		spawningSeed: 0,
		a4F: -1,
		a56: 0,
		aIN: 0,
		aHj: 0,
		aHk: null,
		a8o: 0,
		a8V: 0,
		aIO: 0
	}, this.pu = [], this.q3 = 300, this.pv = 1048575, this.aHJ = 0, this.aJ2 = [0, 0], this.aJ3 = function() {
		aJ4(), bq.aH2.dv(), __fx.lobbyReminders.check()
	}, this.aIB = function() {
		bq.aH2.aIB(), aJ4(), __fx.lobbyReminders.check()
	}, this.aJA = function() {
		0 === this.aHK && u.a91(29).aJB()
	}
}

function aH5() {
	var aJC = 256,
		aJD = 18,
		aJE = [],
		aJH = 0;

	function aJS(aJQ) {
		aJQ && (aJH = 0)
	}

	function zY(key, aJJ, fr, ft, xW) {
		var canvas = document.createElement("canvas"),
			p6 = (canvas.width = canvas.height = aJC, canvas.getContext("2d", {
				alpha: !1
			})),
			p6 = (p6.imageSmoothingEnabled = !0, p6.drawImage(aJJ, fr, ft, xW, xW, 0, 0, aJC, aJC), {
				key: key,
				canvas: canvas,
				iX: 0
			});
		return aJE.push(p6), aJE.length > aJD && function(aJX) {
			for (var fk = aJE.length, aC = 0; aC < fk; aC++) {
				var hI = aJE[aC];
				if (!hI.iX && hI !== aJX) return hI.canvas.width = hI.canvas.height = 0, aJE.splice(aC, 1)
			}
		}(p6), p6
	}
	this.xC = function(fQ, mapSeed) {
		return fQ + "_" + (bV.aJI(fQ) ? mapSeed : 0)
	}, this.xU = function(fQ, mapSeed) {
		for (var key = this.xC(fQ, mapSeed), aJJ = null, aC = aJE.length - 1; 0 <= aC; aC--) {
			var hI = aJE[aC];
			if (hI.key === key) {
				if (!hI.iX) return hI.iX = 1, aJE.splice(aC, 1), aJE.push(hI), hI.canvas;
				aJJ = hI
			}
		}
		return aJJ ? ((fQ = zY(key, aJJ.canvas, 0, 0, aJC)).iX = 1, fQ.canvas) : null
	}, this.xV = function(canvas) {
		for (var aC = aJE.length - 1; 0 <= aC; aC--)
			if (aJE[aC].canvas === canvas) {
				aJE[aC].iX = 0;
				break
			} canvas.parentNode && u.removeChild(canvas.parentNode, canvas)
	}, this.aHG = function() {
		for (var aC = aJE.length - 1; 0 <= aC; aC--) this.xV(aJE[aC].canvas)
	}, this.ep = function() {
		if (bq.fH && !(bi.ek < aJH)) {
			for (var self, fQ, mapSeed, el, tJ = bq.tJ.tJ, fk = tJ.length, aJK = 0, aC = 0; aC < fk; aC++) {
				var key = this.xC(tJ[aC].fQ, tJ[aC].mapSeed);
				if (! function(key) {
						for (var aC = aJE.length - 1; 0 <= aC; aC--)
							if (aJE[aC].key === key) return 1;
						return
					}(key)) {
					key = function(fQ, key) {
						var eT = bV.aJO.xh(fQ);
						if (eT < 0) return -1;
						var aJP = bV.aJP,
							aJQ = aJP.get(eT, 1);
						if (aJQ) return (fQ = bV.aJO.aJT(fQ, aJQ)) ? (aJQ = Math.min(fQ.width, fQ.height), zY(key, fQ, fQ.width - aJQ >> 1, fQ.height - aJQ >> 1, aJQ), fQ.width = fQ.height = 0, 1) : 0;
						aJP.aJR(eT, 1) || aJP.zc(eT, 1, aJS);
						return 0
					}(tJ[aC].fQ, key);
					if (!(0 <= key)) return self = this, fQ = tJ[aC].fQ, mapSeed = tJ[aC].mapSeed, el = void 0, el = performance.now(),
						function(self, fQ, mapSeed) {
							var aJJ = bV.aJV(fQ, mapSeed),
								xW = Math.min(aJJ.width, aJJ.height);
							zY(self.xC(fQ, mapSeed), aJJ, aJJ.width - xW >> 1, aJJ.height - xW >> 1, xW), aJJ !== bV.a1r && (aJJ.width = aJJ.height = 0)
						}(self, fQ, mapSeed), u.a91(29).aI3(), self = performance.now(), void(aJH = self + Math.max(Math.min(self - el, 500), 200));
					aJK += key
				}
			}
			aJK && u.a91(29).aI3(), aJH = bi.ek + 200
		}
	}, this.aJ9 = function() {
		aJH = performance.now() + 200
	}
}

function aHD() {
	var aJY = 0,
		aJZ = "",
		aJa = 0,
		aJb = 0,
		aJc = "";

	function aJf(aIb) {
		b1.aI1.aI2(3, aIb)
	}

	function aJe(s) {
		s = bq.pa.pb(s);
		return s.length ? s.join(" ") + " " : ""
	}

	function aJq(j) {
		return new RegExp("^@([-\\w]{5}|\\[[-\\w]{1,6}\\])$").test(j)
	}

	function aJi(s) {
		var aJw = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aJw)
	}
	this.a3q = function(s) {
		var h, aJj, aJd;
		if (aJY) return aJY = 0, "yes" === (aJd = s.toLowerCase()) || "y" === aJd ? (aJc = aJe(aJZ), void aJf(aJZ)) : (aJc = "", void bq.message.aHx({
			id: 5,
			aIY: 7
		}));
		aJc = aJe(s), !(s.indexOf("@") < 0) && (aJd = aJi(s)) ? (aJZ = s, h = bq.po.x0.slice(), function(aJh, aJj, s) {
			if (!aJa) return;
			for (var fk = aJj.length, aC = 0; aC < fk; aC++) 2 === aJj[aC].id && (s = s.replace(aJh[aJj[aC].eT], "@" + aJj[aC].gC));
			return aJY = 1, aJf((aJZ = s).slice(0, 126) + "|"), 1
		}(aJd, aJj = function(aJh) {
			for (var aJj = [], fk = (aJb = aJa = 0, aJh.length), aC = 0; aC < fk; aC++) {
				var j = aJh[aC],
					m1 = j.length;
				bD.pc.startsWith(j, "@[") ? m1 <= 9 && bD.pc.a7A(j, "]") && aJj.push({
					id: 0,
					gC: j.substring(2, m1 - 1).toUpperCase()
				}) : 6 === m1 && (aJb++, aJj.push({
					id: 1,
					gC: bJ.fB.fC(j.substring(1), 5)
				}))
			}
			return aJj
		}(aJd), s) || (0 === aJj.length || aJd.length === aJb ? aJf(s) : (function(h, aJj) {
			var m1 = aJj.length;
			if (0 === m1) return;
			var fk = h.length;
			loop: for (var aC = fk - 1; 0 <= aC; aC--) {
				for (var g3 = 0; g3 < m1; g3++)
					if (0 === aJj[g3].id) {
						if (aJj[g3].gC === bD.pc.pq(h[aC].username)) continue loop
					} else if (1 === aJj[g3].id && aJj[g3].gC === h[aC].pg) continue loop;
				h[aC] = h[--fk], h.pop()
			}
		}(h, aJj), aJd = h.length, aJc = "", aJY = 1, bq.message.aHx({
			id: 6,
			value: aJd
		})))) : aJf(s)
	}, this.aJo = function() {
		return aJY
	}, this.aJp = function() {
		return aJc
	}, this.pb = function(s) {
		var aJh = aJi(s),
			h = [];
		if (aJh)
			for (var aC = 0; aC < aJh.length; aC++) aJq(aJh[aC]) && h.indexOf(aJh[aC]) < 0 && h.push(aJh[aC]);
		return h
	}, this.aJr = function(event, e) {
		if ("deleteContentBackward" !== event.inputType) return 0;
		var a00 = e.selectionStart;
		if (a00 !== e.selectionEnd) return 0;
		var pY = e.value.substring(0, a00),
			m1 = pY.match(new RegExp("\\B@[-\\w\\[\\]]+ $"));
		if (!m1 || !aJq(m1[0].substring(0, m1[0].length - 1))) return 0;
		event.preventDefault();
		event = a00 - m1[0].length;
		return e.value = pY.substring(0, event) + e.value.substring(a00), e.setSelectionRange(event, event), 1
	}, this.aJs = function(s) {
		s = aJi(s);
		return s ? function(aJh) {
			for (var fk = aJh.length, aC = 0; aC < fk; aC++) {
				var j = aJh[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return 0
		}(s) || function(aJh) {
			for (var aJv = new RegExp("^[0-9]"), a7w = new RegExp("^[0-9]+$"), aC = 0; aC < aJh.length; aC++) {
				var j = aJh[aC].substring(1);
				if (1 <= j.length && j.length <= 3 && aJv.test(j) && !a7w.test(j)) return 1
			}
			return 0
		}(s) : 0
	}, this.aJx = function(s) {
		var aJh = aJi(s);
		if (aJh)
			for (var a6 = new RegExp("^[0-9]+$"), fk = aJh.length, aC = 0; aC < fk; aC++) {
				var j = aJh[aC].substring(1),
					m1 = j.length;
				1 <= m1 && m1 <= 3 && a6.test(j) && (m1 = parseInt(j, 10), !isNaN(m1)) && 0 <= m1 && m1 < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[m1]))
			}
		return s
	}
}

function aHC() {
	var aJz, aK0 = [],
		aK1 = -1,
		aK2 = 0,
		aK3 = 0;

	function aK7() {
		aK2 = bi.ek, (3 === this.xv ? aK6 : (aK1 = (aK0.length + aK1 + 2 * this.xv - 1) % aK0.length, aK5))()
	}

	function aK5() {
		0 !== aK0.length && (aK3 = 0, aJz && aJz.xy(), (aJz = new xs(aK7)).q1(aK1, aK0.length), aJz.show(aK0[aK1]), bq.message.resize())
	}

	function aK6() {
		aK3 = 1, aJz && aJz.xy(), (aJz = new xz(aK5)).q1(aK0.length), aJz.show(), bq.message.resize()
	}
	this.aHx = function(pe) {
		var q5;
		2 === pe.id && 3 === pe.aIY ? bq.lv.aIk(pe.pg) : (q5 = bq.lv.py(pe, bq.lv.pz(pe)), (5 !== pe.id && 6 !== pe.id || (c0.nJ.q2(q5), 5 === pe.id)) && (q5 = bi.ek < aK2 + 2e4, aK1 !== aK0.length - 1 && q5 || (aK1 = aK0.length), __fx.pingFilter
			.isMuted(pe, "s") || (aK0.push(pe), bm.buffer.data[14].value || 7 === pe.id || bt.play(), aJz && (aK3 && (bm.buffer.data[13].value || q5) ? aJz.q1(aK0.length) : aK5()))))
	}, this.show = function() {
		aK6()
	}, this.uN = function() {
		aK1 = aK0.length - 1, aJz && aJz.xy(), aJz = null
	}, this.resize = function() {
		aJz && aJz.resize()
	}, this.aIm = function() {
		return aK0
	}
}

function aHA() {
	var aK8 = null,
		aK9 = null,
		aKA = 0,
		aKB = null;

	function aKI(title, aKV, te, backgroundColor) {
		title = new x(title, te, backgroundColor);
		return by.us(title.button, aKV), title
	}

	function aKH() {
		return bI.fB.a35(aK9.pg, 5)
	}

	function aKT() {
		return +(0 === aK9.xo || bq.lv.xp(aK9))
	}

	function aKS() {
		aKT() || (aK9.xq = bm.zK.zX(aKH()), bq.z.aHJ += 1 === bq.z.aHK, bq.y9.uN())
	}

	function aKJ() {
		0 !== aK9.xo && (bq.y9.uN(), u.v(8, 29, new vY(25, {
			action: 0,
			pg: bI.fB.a35(aK9.pg, 5),
			vW: 0
		}, 29)))
	}

	function aKP() {
		return !bq.pm || bq.lv.xp(aK9) ? 1 : 0
	}

	function aKL() {
		return aKP() ? 1 : +bs.aKX(bI.fB.a35(aK9.pg, 5))
	}

	function aKK(aKY) {
		aKL() || (bs.aKZ(bI.fB.a35(aK9.pg, 5), aKY), bq.y9.uN())
	}

	function aKN() {
		var fr, ft;
		aKL() || (fr = aK8.fr, ft = aK8.ft, bq.y9.uN(), aK8 = new y0([aKI(L(168), L(169), function() {
			aKK(0)
		}, 0), aKI(L(170), L(171), function() {
			bq.y9.uN()
		}, 0)], 2), aKU(fr, ft), aKA = 2)
	}

	function aKE(wy) {
		return bq.tJ.aI5(aK9.pg, wy)
	}

	function aKO(wy) {
		aKP() || (bq.tJ.zK(aK9.pg, aKE(wy) ? 0 : wy), bq.y9.uN())
	}

	function aKR() {
		var ox;
		return !aKP() && (ox = bD.pc.pq(aK9.username)) ? +(ox === bD.pc.pq(bq.pm.aHT)) : 1
	}

	function aKQ() {
		aKR() || (b1.aI1.aI2(2, aK9.pg), bq.y9.uN())
	}

	function aKM() {
		29 === u.vX && u.a52().pa(bI.fB.a35(aK9.pg, 5))
	}

	function aKU(fr, ft, yC) {
		aK8.show(fr, ft, yC), bq.xd.show(aK8.fr, aK8.ft, aK9, 1)
	}
	this.aKC = function(e, q5) {
		aK9 = q5;
		var aKD = aKE(aKA = 1),
			aKF = aKE(2),
			aKG = bm.zK.xq(aKH());
		aK8 = new y0([aKI(L(146), L(147), aKJ, 0 === q5.xo ? 1 : 0), aKI(L(148), L(149), function() {
			aKK(1)
		}, aKL()), aKI(L(150), L(151), aKM, 0), aKI(L(152), L(153), aKN, aKL()), aKI(L(aKD ? 154 : 155), L(aKD ? 156 : 157), function() {
			aKO(1)
		}, aKP()), aKI(L(aKF ? 158 : 159), L(aKF ? 160 : 161), function() {
			aKO(2)
		}, aKP()), aKI(L(162), L(163), aKQ, aKR()), aKI(L(aKG ? 164 : 165), L(aKG ? 166 : 167), aKS, aKT())], 2), aKU((aKB = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aKB.clientY, 1)
	}, this.a5t = function(code) {
		if (29 !== u.vX) return !1;
		if (!aK9) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.uN();
			else if (bD.pc.startsWith(code, "Numpad") || bD.pc.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aKA) this.aKC(aKB, aK9);
				else {
					if (!aK8) return !1;
					2 === aKA ? 1 === code ? aKK(0) : this.uN() : code <= 1 ? aKJ() : 2 === code ? aKK(1) : 3 === code ? (aKM(), this.uN()) : 4 === code ? aKN() : code <= 6 ? aKO(5 === code ? 1 : 2) : (7 === code ? aKQ : aKS)()
				}
		}
		return !0
	}, this.uN = function() {
		aKA = 0, aK8 && aK8.uN(), aK8 = null, bq.xd.uN(), by.uN()
	}
}

function aHE() {
	var aKa = [],
		vi = [],
		aKb = [],
		aKc = {},
		aKd = {};

	function aKf(q5) {
		for (var s = q5.s, aKe = [];;) {
			var eu = function aKh(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var pY = s.substring(position + 1, position + 6);
				if (5 !== pY.length) return aKh(s, position + 1);
				var aKv = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aKv.test(pY)) return aKh(s, position + 1);
				aKv = s.substring(position + 6, position + 7);
				if (1 !== aKv.length) return position;
				pY = new RegExp("^[ :!.]+$");
				if (!pY.test(aKv)) return aKh(s, position + 1);
				return position
			}(s, 0);
			if (-1 === eu) {
				aKe.push(aKi(s, q5));
				break
			}
			0 === eu ? aKe.push(aKj(s.substring(1, 6), q5, eu)) : (aKe.push(aKi(s.substring(0, eu), q5)), aKe.push(aKj(s.substring(eu + 1, eu + 6), q5, eu))), s = s.substring(eu + 6)
		}
		return aKe
	}

	function aKj(pY, q5, eu) {
		var pY = aKk(pY),
			uL = (0 === eu && 0 === q5.pe.id && q5.q6 && (q5.fontSize = bq.lv.aIe(pY.xo, pY.a7f), q5.aIc = bq.lv.aIf(pY.a7f)), document.createElement("span"));
		return uL.style.display = "inline-block", uL.style.cursor = "pointer", uL.style.margin = "0", uL.style.font = "inherit", uL.style.minWidth = uL.style.minHeight = "1em", uL.aKl = {
			q5: q5,
			eu: eu
		}, aKm(uL, pY), vi.push(uL), (aKc[pY.pg] || (aKc[pY.pg] = [])).push(uL), uL
	}

	function aKm(uL, aHO) {
		var q5 = uL.aKl.q5;
		uL.textContent = function(aHO, q5, eu) {
				if (aHO.aKo) return aHO.aKo--, eu = 2 === q5.pe.id || (3 === q5.pe.id || 4 === q5.pe.id) && 0 !== eu, aHO.username + (eu ? " (" + aHO.aHa + ")" : "");
				if (q5.pe.aIo) return "Redacted " + bI.fB.a35(aHO.pg, 2);
				return aHO.username
			}(aHO, q5, uL.aKl.eu), uL.style.color = bq.lv.xn(aHO.xo), uL.style.textShadow = 11 !== aHO.xo ? "none" : "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray", uL.style.textDecoration = bq.lv.xp(aHO) ?
			"underline" : "none", aHO.xq && (uL.style.textDecorationLine = "underline", uL.style.textDecorationStyle = "dotted"), uL.style.fontWeight = bq.lv.aIf(aHO.a7f) ? "bold" : "inherit", uL.onclick = function(e) {
				bq.y9.aKC(e, aHO)
			}, bM.tr() || (uL.onmouseover = function(e) {
				bq.xd.xr(e.target, aHO)
			})
	}

	function aKi(s, q5) {
		var uL = document.createElement("span");
		return uL.textContent = s, uL.style.color = q5.aId, uL.style.margin = "0", uL.style.font = "inherit", uL
	}

	function aKk(pY) {
		var pg = bJ.fB.fC(pY, 5),
			aHO = bq.po.pp(pg);
		if (aHO) {
			for (aKa.push(aHO); 75 < aKa.length;) aKa.shift();
			return aHO
		}
		for (var aHH = bq.po.aHH, aC = aHH.length - 1; 0 <= aC; aC--)
			if (pg === (aHO = aHH[aC]).pg) return aKa.push(aHO), aHO;
		for (aC = aKa.length - 1; 0 <= aC; aC--)
			if (pg === (aHO = aKa[aC]).pg) return aKa.push(aHO), aHO;
		return aKq(pg, null)
	}

	function aKq(pg, name) {
		return aKd[pg] || (aKd[pg] = bq.po.aHP(pg, name || "Player " + bI.fB.a35(pg, 2), 1, 999999, 999999, 0, 0, 0, 0, 1))
	}

	function aKu(pg, name) {
		var aHO;
		name && !bq.po.pp(pg) && ((aHO = function(pg) {
			for (var aHH = bq.po.aHH, aC = aHH.length - 1; 0 <= aC; aC--)
				if (pg === aHH[aC].pg) return aHH[aC];
			for (aC = aKa.length - 1; 0 <= aC; aC--)
				if (pg === aKa[aC].pg) return aKa[aC];
			return aKd[pg] || null
		}(pg)) ? aHO.username !== name && (aHO.username = aHO.aHT = name, bq.q7.aHS(pg)) : aKq(pg, name))
	}

	function aKz(aHO, aHZ, pg) {
		pg === aHO.pg && (aHO.aHa || (aHO.aHa = aHO.username), aHO.username = aHO.aHT = aHZ)
	}
	this.xy = function() {
		for (var aC = 0; aC < vi.length; aC++) vi[aC].onclick = vi[aC].onmouseover = null;
		aKd = aKc = aKb = vi = null
	}, this.transform = function(q5) {
		for (var t5 = document.createElement("div"), aKe = aKf(q5), aC = 0; aC < aKe.length; aC++) t5.appendChild(aKe[aC]);
		0 === q5.pe.id && (t5.vx143 = q5.pe, aKb.push(t5)), t5.style.margin = "0.6em 0.6em", q5.q6 && (t5.style.marginLeft = t5.style.marginRight = "inherit"), t5.style.font = "inherit";
		var aKg = 0 < q5.pe.id;
		return q5.aIc && (t5.style.fontWeight = "bold"), aKg && (t5.style.paddingLeft = "0.7em"), aKg && (t5.style.fontStyle = "italic"), t5.style.fontSize = q5.fontSize.toFixed(2) + "em", t5
	}, this.aHS = function(pg) {
		var h = aKc && aKc[pg];
		if (h)
			for (var aHO = aKk(bI.fB.a35(pg, 5)), aC = h.length - 1; 0 <= aC; aC--) h[aC].parentNode ? aKm(h[aC], aHO) : h.splice(aC, 1)
	}, this.aKs = function(aKt) {
		!aKt || 4 < aKt.id || (aKu(aKt.pg, aKt.ph), aKt.pi && aKu(aKt.target, aKt.pi))
	}, this.aKy = function(aKt) {
		if (aKt && (2 === aKt.id && 1 === aKt.aIY || 3 === aKt.id && 2 === aKt.aIY)) {
			var pg = 3 === aKt.id ? aKt.target : aKt.pg;
			if (!bq.po.pp(pg)) {
				for (var aHZ = (3 === aKt.id ? aKt.pi : aKt.ph) || "Redacted " + bI.fB.a35(pg, 2), aHH = bq.po.aHH, aC = aHH.length - 1; 0 <= aC; aC--) aKz(aHH[aC], aHZ, pg);
				for (aC = aKa.length - 1; 0 <= aC; aC--) aKz(aKa[aC], aHZ, pg);
				aKd[pg] && aKz(aKd[pg], aHZ, pg), this.aHS(pg)
			}
		}
	}, this.aIk = function(pg) {
		for (var aL0 = aKb, aC = aL0.length - 1; 0 <= aC; aC--) {
			var fn = aL0[aC];
			if (fn.vx143.pg === pg) {
				for (; fn.firstChild;) u.removeChild(fn, fn.firstChild);
				fn.vx143.s = "[Redacted Message]";
				for (var aKe = aKf(bq.lv.py(fn.vx143, bq.lv.pz(fn.vx143))), g3 = 0; g3 < aKe.length; g3++) fn.appendChild(aKe[g3]);
				aL0.splice(aC, 1)
			}
		}
	}
}

function cY() {
	var aL1, aL2, aL3;

	function aL8(aC) {
		var button = aZ.p9[aC],
			fr = button.fr,
			ft = button.ft,
			j = button.j,
			k = button.k;
		yw.fillStyle = button.aL6, yw.fillRect(fr, ft, j, k), aC === aL1 && (yw.fillStyle = aL3, yw.fillRect(fr, ft, j, k)), yw.lineWidth = bf.a2m, yw.strokeStyle = aL2, yw.strokeRect(fr, ft, j, k),
			function(button) {
				var fr = button.fr,
					ft = button.ft,
					j = button.j,
					k = button.k;
				bD.tO.textAlign(yw, 1), bD.tO.textBaseline(yw, 1), yw.font = button.font, yw.fillStyle = aL2, yw.fillText(button.aIb, Math.floor(fr + j / 2), Math.floor(ft + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.ft = 0, this.gap = 0, this.dv = function() {
		aL1 = -1, aL2 = bE.qP, aL3 = "rgba(255,255,255,0.16)", this.p9 = new Array(7), this.k = Math.floor((a1.a2.ix() ? .123 : .093) * i.iy), this.j = Math.floor((a1.a2.ix() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aL4 = Math.floor(.26 * this.k),
			aL5 = bD.tO.ux(1, aL4);
		this.p9[0] = {
			fr: 0,
			ft: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aIb: "Multiplayer",
			font: aL5,
			aL6: "rgba(22,88,22,0.8)",
			fontSize: aL4
		}, aL4 = Math.floor(.18 * this.k), aL5 = bD.tO.ux(1, aL4), this.p9[1] = {
			fr: 0,
			ft: 0,
			j: this.j - this.p9[0].j - this.gap,
			k: this.k,
			aIb: "Single Player",
			font: aL5,
			aL6: "rgba(22,88,88,0.8)",
			fontSize: aL4
		}, this.p9[2] = {
			fr: 0,
			ft: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aIb: "",
			font: this.p9[1].font,
			aL6: "rgba(100,0,0,0.8)",
			fontSize: this.p9[1].fontSize
		}, this.p9[3] = {
			fr: 0,
			ft: 0,
			j: this.j,
			k: this.k,
			aIb: "Back",
			font: this.p9[0].font,
			aL6: "rgba(0,0,0,0.8)",
			fontSize: this.p9[0].fontSize
		}, this.p9[4] = {
			fr: 0,
			ft: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aIb: "The game was updated!",
			font: this.p9[1].font,
			aL6: "rgba(100,0,0,0.8)",
			fontSize: this.p9[1].fontSize
		}, this.p9[5] = {
			fr: 0,
			ft: 0,
			j: this.p9[0].j,
			k: Math.floor(.8 * this.k),
			aIb: "Reload",
			font: this.p9[0].font,
			aL6: "rgba(0,100,0,0.8)",
			fontSize: this.p9[0].fontSize
		}, this.p9[6] = {
			fr: 0,
			ft: 0,
			j: this.p9[1].j,
			k: this.p9[5].k,
			aIb: "Back",
			font: this.p9[0].font,
			aL6: "rgba(0,0,0,0.8)",
			fontSize: this.p9[0].fontSize
		}, this.aDg()
	}, this.aDg = function() {
		this.ft = Math.floor(.54 * i.k), this.p9[0].fr = Math.floor(.5 * i.j - .5 * this.j), this.p9[1].fr = this.p9[0].fr + this.p9[0].j + this.gap, this.p9[2].fr = this.p9[3].fr = this.p9[0].fr, this.p9[4].fr = this.p9[5].fr = this.p9[0].fr,
			this.p9[6].fr = this.p9[1].fr, this.p9[0].ft = Math.floor(.54 * i.k), this.p9[1].ft = this.p9[0].ft, this.p9[2].ft = Math.floor((i.k - this.p9[2].k - this.p9[3].k - this.gap) / 2), this.p9[3].ft = this.p9[2].ft + this.p9[2].k + this
			.gap, this.p9[4].ft = Math.floor((i.k - this.p9[4].k - this.p9[5].k - this.gap) / 2), this.p9[5].ft = this.p9[6].ft = this.p9[4].ft + this.p9[4].k + this.gap
	}, this.aL7 = function() {
		aL8(0), aL8(1)
	}, this.aL9 = function() {
		aL8(2), aL8(3)
	}, this.aLA = function() {
		aL8(4), aL8(5), aL8(6)
	}, this.a5L = function(fr, ft, nU) {
		var aC = -1;
		return 0 === ab.a4y() ? aC = this.a5p(fr, ft, 0, 2) : 3 === ab.a4y() ? aC = this.a5p(fr, ft, 3, 1) : 5 === ab.a4y() && (aC = this.a5p(fr, ft, 5, 2)), aL1 !== aC && (aL1 = aC, nU) && (bi.e2 = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a5p = function(fr, ft, aLB, size) {
		for (var aC = aLB; aC < aLB + size; aC++)
			if (fr >= this.p9[aC].fr && ft >= this.p9[aC].ft && fr <= this.p9[aC].fr + this.p9[aC].j && ft <= this.p9[aC].ft + this.p9[aC].k) return aC;
		return -1
	}
}

function cZ() {
	var aLD, aLE, aBI, aLF, aLG, aLH, aLI, aLJ, aLK, aBH, aLL, aLM, aLN, aLO = 1,
		aLQ = 0;

	function aLT(aLU) {
		aLU ? aLN = (aLN + 1) % b1.z.aLV : (b1.z.close(aLN, 3280), aLO ? aLO = 0 : (aLN = (aLN + 1) % b1.z.aLV, b1.z.close(aLN, 3280))), aLM = bi.ek, aa.aLS = aLQ, b1.z.aLW(aLN, 4, 1) && b1.aI1.aLX(aLN)
	}

	function aLY() {
		if (0 !== aLN) return 1 === aLN && __fx.customLobby.isActive() ? (p.a5A(3249), __fx.customLobby.setActive(!1)) : void aLT();
		p.a5A(3249)
	}

	function aLd(ft, aDO, wK) {
		var o9 = Math.floor((i.j - aLF) / 2) + aLI,
			oM = o9 + Math.floor(wK * (aLF - 2 * aLI));
		yw.lineWidth = aDO, yw.beginPath(), yw.moveTo(o9, ft), yw.lineTo(oM, ft), yw.lineTo(Math.floor(o9 - aLI + wK * aLF), ft + aBI), yw.lineTo(o9 - aLI, ft + aBI), yw.closePath()
	}
	this.fD = 1, this.aLR = 0, this.aLS = 0, this.dv = function() {
		bX.turnstile.f9(), ab.setState(6), aLD = 0, aLE = 1, aLJ = "rgba(0,220,120,0.4)", aLK = "rgba(0,0,0,0.8)", this.resize(), bi.e2 = !0, aLO = 1, aLN = this.fD - 1, aLQ = 0, aLT(1)
	}, this.resize = function() {
		aLF = Math.floor((a1.a2.ix() ? .5 : .25) * i.iy), aLG = aLF + 12, aBI = Math.floor(.125 * aLF), aLI = 3 * aBI, aLH = Math.floor(.225 * aLF), aLL = Math.floor(.3 * aBI), aBH = bD.tO.ux(0, aLL)
	}, this.a55 = function(oa) {
		oa === aLN && aLY()
	}, this.hy = function(fr, ft) {
		var o9 = Math.floor((i.j - aLG) / 2),
			oA = Math.floor(.5 * (i.k - bf.gap - aBI - aLH)) + aBI + bf.gap;
		return o9 < fr && fr < o9 + aLG && oA < ft && ft < oA + aLH && (this.a60(), aZ.a5L(fr, ft, !1), !0)
	}, this.a60 = function() {
		b1.z.a5B(3260), __fx.customLobby.setActive(false), u.z.a0()
	}, this.ep = function() {
		6 === ab.a4y() && (bi.ek > aLM + 12e3 && aLY(), 100 < (aLD += .07 * aLE * (aLD < 16 ? 5 + aLD : 84 < aLD ? 105 - aLD : 17)) ? (aLD = 100, aLE = -1) : aLD < 0 && (aLD = 0, aLE = 1), aLJ = "rgba(0," + Math.floor(190 - 1.9 * aLD) + "," +
			Math.floor(120 - 1.2 * aLD) + "," + (.4 + .004 * aLD) + ")", aLK = "rgba(0," + Math.floor(1.9 * aLD) + "," + Math.floor(1.2 * aLD) + "," + (.8 - .004 * aLD) + ")", bi.e2 = !0)
	}, this.yv = function() {
		var fr = Math.floor((i.j - aLG) / 2),
			ft = Math.floor(.5 * (i.k - bf.gap - aBI - aLH));
		! function(title, ft, aDO, wK) {
			yw.fillStyle = aLK, aLd(ft, aDO, 1), yw.fill(), yw.fillStyle = aLJ, aLd(ft, aDO, wK), yw.fill(), yw.strokeStyle = bE.qP, __fx.settings.smoothUI && (yw.strokeStyle = "rgba(255, 255, 255, 0.3)", yw.lineJoin = "round"), aLd(ft, aDO, 1),
				yw.stroke(), yw.lineJoin = "miter",
				function(aLf, ft) {
					bD.tO.textAlign(yw, 1), bD.tO.textBaseline(yw, 1), yw.font = aBH, yw.fillStyle = bE.qP, yw.fillText(aLf, Math.floor(.5 * i.j), Math.floor(ft + .58 * aBI))
				}(title, ft)
		}(L(172), ft, 3, aLD / 100),
		function(fr, ft, j, k, aIb) {
			yw.fillStyle = bE.qK, yw.beginPath(), __fx.settings.smoothUI && yw.roundRect ? yw.roundRect(fr, ft, j, k, .1 * k) : yw.rect(fr, ft, j, k), yw.fill(), yw.lineWidth = 3, yw.strokeStyle = __fx.settings.smoothUI ?
				"rgba(255, 255, 255, 0.3)" : bE.qP, yw.stroke();
			var fk = Math.floor(.3 * k);
			bD.tO.textAlign(yw, 1), bD.tO.textBaseline(yw, 1), yw.font = bD.tO.ux(0, fk), yw.fillStyle = bE.qP, yw.fillText(aIb, Math.floor(fr + j / 2), Math.floor(ft + k / 2 + .1 * fk))
		}(fr, ft + aBI + bf.gap, aLG, aLH, L(49))
	}
}

function ca() {
	var a4s = 0;
	this.dv = function() {
		aZ.dv(), a4s = 0
	}, this.setState = function(aLg) {
		a4s = aLg
	}, this.a4y = function() {
		return a4s
	}, this.aLh = function() {
		this.setState(8), u.y()
	}, this.a5t = function(e) {
		if (!bV.aLi) return !1;
		if (!(bi.ek < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aLj()) return !0;
				if ("Enter" === e.key) {
					if (0 === a4s) return !0;
					if (7 === a4s) return !0
				}
			}
			return !1
		}
	}, this.aLk = function() {
		bc.resize()
	}, this.aLj = function() {
		return !!bc.uN()
	}, this.hy = function(fr, ft) {
		!bV.aLi || bc.hy(fr, ft) || 6 === a4s && aa.hy(fr, ft) || bb.hy(fr, ft) || aU.hy(fr, ft)
	}, this.a5L = function(fr, ft) {
		!aU.aDZ && aZ.a5L(fr, ft, !0) || aU.a5L(fr, ft)
	}, this.click = function(fr, ft) {
		aU.a5k()
	}, this.a5O = function(fr, ft, deltaY) {}, this.aLl = function() {
		aZ.aDg(), bi.e2 = !0
	}, this.yv = function() {
		8 !== a4s && 10 !== a4s && (yw.imageSmoothingEnabled = !0, this.a1q(), 0 !== a4s && (aU.yv(), aP.yv(), this.aLm(), bb.yv()), 0 !== a4s && 6 === a4s && aa.yv(), bc.yv(), u.yv())
	}, this.a1q = function() {
		var aLo, aLn;
		if (__fx.makeMainMenuTransparent) yw.clearRect(0, 0, i.j, i.k);
		else bV.aLi ? (aLn = i.j / bV.fv, aLo = i.k / bV.fw, yw.setTransform(aLn = aLo < aLn ? aLn : aLo, 0, 0, aLn, Math.floor((i.j - aLn * bV.fv) / 2), Math.floor((i.k - aLn * bV.fw) / 2)), yw.drawImage(bV.a1r, 0, 0), yw.setTransform(1, 0, 0,
			1, 0, 0), yw.fillStyle = bE.qK) : yw.fillStyle = bE.qG, yw.fillRect(0, 0, i.j, i.k)
	}, this.aLm = function() {
		var ft = Math.floor(.3 * i.k),
			canvas = ac.x7("territorial.io"),
			ip = (ip = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : ip,
			fr = (yw.globalAlpha = .15, yw.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - ip * canvas.width))),
			fr = Math.floor(fr / ip),
			ft = Math.floor(ft - .5 * canvas.height * ip),
			ft = Math.floor(ft / ip);
		yw.setTransform(ip, 0, 0, ip, fr, ft), yw.drawImage(canvas, fr, ft), yw.setTransform(1, 0, 0, 1, 0, 0), yw.globalAlpha = 1, yw.imageSmoothingEnabled = !0
	}
}

function d0() {
	this.aIN = 0;
	var aLq, aLr, aLs, aLt, aLu, aLv = this.aLp = 0,
		aLw = [],
		aLx = 0,
		aLy = 0;

	function aM3() {
		aLt = aLu = null, aLv = 0, aLw = []
	}

	function aM1(aM4) {
		aLy = aM4 ? 0 : 1
	}

	function aM5() {
		if (bV.aJO.aM4(aLt.fQ)) return 1;
		(aLy || bi.ek > aLx) && (aM3(), ab.setState(0), b1.z.aM7(b1.z.a56, 3290), bi.e2 = !0)
	}

	function aJU() {
		var aM8 = aLw;
		bq.aH3.aIQ(aLt, aLu, aLv), aM3();
		for (var aC = 0; aC < aM8.length; aC++) b1.aAa.aM9(aM8[aC][0], aM8[aC][1])
	}
	this.dv = function(aH3, aIF, aIH) {
		u.y(), bq.xy(), ab.setState(10), aLt = aH3, aLu = aIF, aLv = aIH, this.aIN = aH3.aIN, this.aLp = aIH, aLq = 0, aLr = bi.ek + 4500, aLw = [], aLy = 0, aLx = bi.ek + bV.aJP.aLz.aM0, bV.aJO.zc(aH3.fQ, aM1), b1.z.a56 = aH3.a56, 1 === aIF
			.length ? (b1.z.close(b1.z.fI, 3281), aLs = 0) : b1.z.fI === aH3.a56 ? (console.log("direct pass"), aLs = 0) : (console.log("delayed pass"), b1.z.close(b1.z.fI, 3247), aLs = 2, b1.z.aLW(aH3.a56, 5, 2) && b1.rt.aM2()), yw
			.imageSmoothingEnabled = !0, ab.a1q();
		aIH = ac.x7("loading"), aIF = (a1.a2.ix() ? .396 : .25) * i.iy / aIH.width;
		yw.setTransform(aIF, 0, 0, aIF, Math.floor((i.j - aIF * aIH.width) / 2), Math.floor((i.k - aIF * aIH.height) / 2)), yw.imageSmoothingEnabled = !1, yw.drawImage(aIH, 0, 0), yw.setTransform(1, 0, 0, 1, 0, 0)
	}, this.nS = function() {
		0 < aLs && bi.ek > aLr && (aLs--, aLr += 4500, 0 === bi.aMA) && 0 === bi.l3() && b1.z.aLW(b1.z.a56, 5, 2)
	}, this.aMB = function(oa, aD) {
		return !(10 !== ab.a4y() || !aLt || (aM5() ? aLw.length ? (aLw.push([oa, aD]), aJU(), 1) : (aJU(), 0) : (aLt && aLw.push([oa, aD]), 1)))
	}, this.aMC = function() {
		10 === ab.a4y() && aLt && 2 <= ++aLq && aM5() && aJU()
	}
}

function cb() {
	var aME, canvas, a49, aMF;

	function aML(eT, name, aMM, pY) {
		a49[eT] = name, canvas[eT] = new Image, canvas[eT].onload = function() {
			! function(eT, aMM) {
				var a7k, a7l = null;
				7 === aMM ? a7k = bD.p5.a7n : 9 === aMM ? a7k = bD.p5.a7o : 8 === aMM ? (a7k = bD.p5.a7r, a7l = .1) : 3 === aMM ? (a7k = bD.p5.a7p, a7l = .06) : 5 === aMM ? a7k = bD.p5.a7s : 6 === aMM ? a7k = bD.p5.a7m : 4 === aMM && (a7k = bD.p5
					.a7t);
				canvas[eT] = bD.p5.a7j(canvas[eT], a7k, a7l)
			}(eT, aMM), aMO()
		}, canvas[eT].onerror = function(e) {
			console.error("Error loading image at index", eT, "Error:", e), aMO()
		}, canvas[eT].src = "data:image/png;base64," + pY
	}

	function aMO() {
		aME--, aMI()
	}

	function aMI() {
		0 === aME && (aME = -1, aMK(), bi.e2 = !0, canvas[7] = aMF, canvas[8] = aMF, canvas[9] = aMF, canvas[10] = aMF, 5 === u.vX) && u.a52().aMQ.resize()
	}

	function aMK() {
		aM.a9C(), bb.aGv([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.a2I = new a2J, ak.a2I.dv(), ax.dw()
	}
	this.dv = function() {
		if (void 0 === canvas) {
			aME = 29, canvas = new Array(aME), a49 = new Array(aME), (aMF = document.createElement("canvas")).width = 1;
			for (var aC = aME - (aMF.height = 1); 0 <= aC; aC--) canvas[aC] = aMF;
			aMK(), aML(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aML(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aML(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aML(3, "orders", 6,
					"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"
					), aML(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aML(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aML(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aML(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aML(8,
					"googleplay", 3,
					"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"
					), aML(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aML(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aML(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aML(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aML(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aML(14, "bestPlayer", 5,
					"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"
					), aML(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aML(16, "apple", 3,
					"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"
					), aML(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aML(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aML(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aML(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aML(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aML(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					), aML(23, "clock", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAZGhkoKic1NzRYWleAgoCjpaIA/wA4/zvJzMl5/3nk5+Sq/6rI/8fm/+b///8vfxrjAAAC1UlEQVRIx4WVMYwSQRSGh+O4hFBIe901VjZUlxgb2gvF0VhcLLhGGwrKI4TDksYoiUpCLCgxxgjqxeSyxZZngVIehYYSYzRcjIfurfB882be7Oyy6CvYYfbbN/9782aeOPqPifDfF8PPw+frgZczkLZ8Hw9UPwLbt2YMUJ1AYH9igBHO++27t+89k8TXFeAVzrbzQtr1Lo7HEaCOc0+EtmQZlfZCgBTwWL5Lne7g70YF4CoEPAQ4oY8zcCgfmy5AzwKqM/CyBFyDFj232YVgB4ciBIiKdqGAGVyKCLAF8MUAGELRANoVulgYoA9zjjDt53kEcKYBlNhiQGR5kHBpDQkcgy9ibJ/WELTCzzgAZTYVMDPCAtvDKRfOCaiBn42+T7kouwS/CTgOYjBWkYnJyLJA4BG8jr5PU2a3YEnAiCWkHJ2uZJecbshsC6kxz3HpaArgE9rFVAmpUTsugZ/Te32ilUwRqIOngRsAbxTo5bTLXwg0zE7il55KkM58BmtCAiaPJRJfMWGnMU6BUV6Y9ABc5raDvVdAHwZWfgBYIS220EDZOeX9Aa3wpuMUDbAJXJPyyLR4dBECigbY4dEgWOKg0xYGUFu72+nkA8BW6dl7tqAwfwRTGQhi4DDvm0zKSi2/y9m4yuRcrLF9LCl7s2LqakrbrQNbtS5WLRYMxBQ12QZQwRxN7DgjB4Nqsm+HYVtGHi0EGutUluQdIkKHP2wuBqGP3mCNhDMFjOJTdUueGwIa1hrJvJWFKw3UrB0q+NYK53wFTfSJoewWTQzLJgO4xtsokNIXJQG4BrswQEndYfqe7BsVDKCChXXT1k3VVtRRT2BxTu3LfMTHoaDSfgeURAOgCphLIkHYHqgYrYYiG47HSTqwupawW5r/VH6/K5sWN5ygZ9WpZ/qO41LbG692vQdWVwze241V+aDWO45vzTXder/31jb32vDDp2HvX91/1f4C6yMGMx9Ja7MAAAAASUVORK5CYII="
					), aML(24, "userIcon", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAwAODg4sLyw2ODVCREFgYl+Bg4CkpqMA/wDMz8t5/3il/6Tk5+TD/8Th/+P///8NWuTPAAACa0lEQVRIx92Vz2sTQRTHR6GI4GU0SQkEqncvXoSAl9wFm5MXIe1fkCpIEYRcQ0L8ASp42mvwkmtP1taKCIW5loLstVjq4o/YrN3k68y8t7OzWyTise8S3pvPzPu+H2xEd46JswW8ycd7wzzQj4B97zgEDn2gp8+BPQeExj3xgE0TwCw9f2JdbDigD7y6dlfhgIEIH5s3A3rCAiN8kFLWMe32Ph/tdwc41m4FcECUNHREBuiblw9HuG/cthVlgB7GJiDvgC2x7iImDAzw3Eaq+uzTawX8su4VK0JY0at8BS91boXv1pVBCjxF0wZqdLVuNRpgWgA69NJlhUYeSFOomG62qQqpTvIiK/gpOdWW+SnhNwN9KrPKxWix38ifZI264QMVAtp2GIJmtZMHTDVlNXOtHiB5IMtBlgIvZKljJfC49fx3dQd/SNdR4w4d0AtpBtygFo/kSzfTgF1t4IYFSKznRA6AhyT7PUmwDasEblih1kS5k6bt+A4Vo8wTwvSJc5eBeLX0GNxpec/UIczCcXmddGHiBl+YWSCiBZK3kWq1K2pvDDWQLlxJIV4R2hYC0mKmdqCBdOFuIVkW1hZUKlOLEG5dAjwTbHXwZqipBjZjHkCcnovzilcomGkgpCKvY9sBokUro1ungWjMipcz4AK3poWh6NJ26IXMznUOKn0pA8oYe4Do0GJ7wCLe+UCL2l3LgCrWfOASNccDalgR5zLg4ilgyS/ClLF1Crg6DxB/BY7XtXWKAEcNwFYA2P4FePvVWFQEZjZ85L7VoyIwKXzMR1j37ZH7qGZAwSbzgOILgyKwcTb/Fv8b+ANlD8k4eGaP9QAAAABJRU5ErkJggg=="
					), aML(25, "battleRoyale", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAmMCMAcQBbXVoArAB8fnuHioaQko+cnpunqqYA/gC2uLXAwr/N0M3c39v///9qRmqPAAADUElEQVRIx7WVT0gUURjAvzezYtnlgVlZBA/xNKcR6R/rxrjsaU+Kl4SUvHQ0oVMEUUgdLfEY5jrsaa5L0MUKpEN0EBFPQnsQXcVwToGL7rzen++9mV2KLvVO8775ve99/x9Ef1nwX4HSwKAEAoCL5d/9Fj+gLADopeAMdiLVIoB7c84TAFn+MA7gtBNFBuTG0/izAlb40ashAJIi1QGA3iffOX8jAZjlPPkxry7ExcC9t8bFGpMAK8jP5OsEzeH/EPrWYiX0JRD0c7WO543LgftRi5pUelHpjvX2AFVUIa8FfA9kHMIuBJIZRwEVsoDArqMAUrcHPGXiZTzB13MSqMIK7lu+o0ycxj1fVEDE7hrBuvSUuUZjMtajgesGaPo9QuGI2Z75ZQUEF4wkeUGiivvJ8qCBSreR8H3q0Sux3Tm6HiquFbXGgMxafBeBkGzw1Myuut1sIhDBIys79Qv2O3meM8BIKlyyJvJD30MgcN9Z6WTKzqj8g4rdbWNm85kFtnXuVIqZNf29dehsSJcY6ASj7a1CagzkMn1RxBLY3UgtdNoah2k78xkLvTYghFvi9p8L1kLIdbQeI1OcP4xtvGyfGKAKffWT6dRCr715S6VoFfJLJg0H1BHNU06BUPSvuMREvDUuFDBwUoC5QhQQU5tfhkA43quv0aGeOvAdWylHhX06SN1vOhI6WfWkBgRNTF7GLR+EUzWbLHZNFqiplIaoji0QvdH0DRDI3trGNLRkwk+HF3gGCGWvJahgXaYjeWu6RHtB+22WD20XtVIjo1FiCi2ZN76aTsV6GLGNYYoreUAyoTb9KGJIsOga1MsCOCNq4Iikqc8t8LK5mMLmdaKA3DcZz+QCg7RPr0ZVarVlc2EGgkgz3OFZFZBRIC8ur9oJpVVAqiCWp3KsL1N3GkAFp9K4RZATKllOVcghphXU5GhpUBmRhnZV6FNj0MUdiIw06TkVLjyjgfOoD4R5NRD4NmArnmigGy2qwqUdH6Bw5DtFreIkc4U0aJQMg8fcx7KmlYo9PWnJa+uSKPUQRFOg65t60kI+xqCoZmGqkKSKZE5P2sCd3DHNLqky5u+4RnswkmJ5na8icycoTlqhWb6gHSvEU39+eUul8r953H8BBeY6pZneQOEAAAAASUVORK5CYII="
					), aML(26, "oneVsOne", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAACNwBHSUYAaQB+gH0AugCIioeSlZKanZkA3ACmqaUA/wC2uLXGycXa3Nn///+iBll7AAABfUlEQVRIx+2UPU7DUAyA3aZFCBWUCDF06wmga9WFG5CoYkA9BNyAK5CBKYfoEGWIsvQGcIOiDkxISAhRVEGN7ffTvrQRGwNKhhf5e1/0bMcJFL9cUAv/TkgB4MTdMEgJfYoaiSMYJEIOfI039y0SIYYJrnqOYBELud98LQlrxEIEHSwJawQcwHVJ2EDA9ewhRyNOa5D5kp5CIsTQfJCICwMvln2NRLhrTlAJp4ifjZDWhUFK6KAWDhC/wT9DnBvkClGLV7hFfNwSXiRJKh3PYUaLQUZY7HN0yQ9PpUEGaeEZJLri45/onCUYpMsEHfUPKT/K9B0sYiEDL1JRSN35OCLJs0hafZ/EKkrp/C9qw03XIvO6VZRRBSt6B72hRa6Q+xeIM2rWuEIouNmUBk/abiGUDs69okqIWyxM25UCl0GNHlYKGU2qHq3dQsHNXsoHUiGE1Ow3r9gSUhkzLo7vbQeJkMk0Gtx1kPo2R0EQDGTeg+A4cVD9l6uFPxZ+APLvRdqXArbWAAAAAElFTkSuQmCC"
					), aML(27, "zombie", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAANwAwMi8AdwBWWFUAqgB+gH2Ji4iTlZIA1ACfop6rraoA/wC/wr/JzMn///+1mI6XAAACOElEQVRIx9WVv24TQRDGP3w2xAGcSIguhZ8gPskVUgqXVMQUFEguXEYUEEX0+A1iihRILvIGoaTCiSwXJ6VwSZcI0UXCkRU5UaLccjs7++92eYB81Xrv59nZ2W92cerpoP3umz8DZ5y11yH16j9AloL1YhQD5PfXf+f5xWcgGUWAFNWxIN10kITAV1TngpV3sFEGps53Ie6a6JWALo6Eo2uzCAMTbApPM4w8YFgRJTXrHoC1MnDJIcArHJWBnDeigO4TEaifWCBDKwSu1BoEnGAcAvfYMsCwKiLq1A2QNmLA98QA69sxYAENTMNNqnL3GJhAREVZSuBY5Xi7c8Y12lGbam5ogMq0BCpzdkPlC23jGQPDp/SzMGNDJQdQzH5dAw0VoAihSewXg0MNdCVwDp7PaUBTNQ3Is+7TfItD4bE88YSBVAJNml9TKajFLCDjwQdkaWY1NwcDXJoIA28X0DnYJcw2j1dMDp+KvjJJmkKdyLIMaH7ubtOUmg5rof8nduVo2z2siXRcrqcLM6oUrsmUIM/KD785gBB7wBvPMGy5Xx+0EX58LFnOMe3dOGbaCUzrL1ox22e0Jmmwokd/nMYprp997UPtzxskXvNyFksqprLNltv+b7FK0+dsO3GIl/4VlIL/x7HKVxD3xr0s55npiRAoNc3DBJYQs+eCavkwgal0nQXy4MXJ5FVogVv9nthHTfaGBa4QvHpp9acFLjpJAAzhqRYA9mGWetSLvN0HbaP38dc/qn80XpfaOx2MlAAAAABJRU5ErkJggg=="
					), aML(28, "noFullSending", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEX///8A/wD4+Pjp6ekl6yXExMSZmZkAwAAygzJZWVkgTCAXNBcQHxAIDggCBAIAAACV9pxNAAAC1ElEQVR42u2VzWsaQRTAh13Wu6cBU9q9VPC2p8Cm/8ReGkibkiWSQyGJ7ClQov4Peio0LiH00EIqEkJomkZ6EAmx9VSltenSi2LaklNcVo3T92bW1XwUL6WnzOmN7+eb970kPOGQW+AfAmt/U64JIMI2b9ZzBQB3lyrWTXp6PPuDA2kj5t4EpDOKK55okpXymm+EBsbWa2TVEk4ms3KeDVBDi4z1OPLM6Wp6axjmeyN6xj4IPWN9IOjZwFQcdwhMeer8fhlM9eIqmbbhj/mLkpR77hR8IFXZlXP1MK3GCZzohUV7be1xicx1BUDP4htmqBGOdFQEpEQheWKGvmhEObQQoEVPg+uDejJL+NFbxR15wwQpUQCAVhkoZkqSXYTf5kAO9cGnl8uLgNYBuMNqYFmyM8pHg8i2pxLlmxHz7rNzcMcFIFnT0O7MT02vEdn5bZCVrHxgRAfgkdJFYFE83KiBRunmDR0FEmsdAdAbA8qprHIw66aXjg29ife3GpFfWByQ0Z9ypG/E2m4ql1GqW3DfQ2CDA9KjDALUa5InbvqztGrjfe+1RiQOxJ8yAZzPb8m5tjZTWsB7IW8QKWdhmINDH4DshDCFlwHasNZ9gITaqpQziQC2/SewNwTQCYAs+vDKd3IMGD6R2BoPcwS0l30nE5DlWP1IE4kaAQ0I8+Q7hHnYgTL0O+pV4JcRa9oeJOoT6pxhsQIAU23oWQVS3YMAeLlbYwAvFq8KCDuidRbKIwDL7fHCExvLjYJsbwYANkzF4RaiDBsG21PvWwGALbeZ6sZVadruRdrq/C6R5pzWcC4Y86Bpob1xcFghnNyRbRAG/uiB4gLbHkyhvo6zZoYcxvaCDZOEwREj+W6frxMKg3NqBSuIwpvly7O/DqM3AmB4T69uhzem0hgCMP7b13YM/arpdQFQWCCF6wtmKlggE1fQvYcTltjENThxkd5+cf4P8Acm8L1xck3dqAAAAABJRU5ErkJggg=="
					)
		}
	}, this.get = function(eT) {
		return canvas[eT]
	}, this.x7 = function(name) {
		for (var aC = a49.length - 1; 0 <= aC; aC--)
			if (a49[aC] === name) return canvas[aC];
		return aMF
	}, this.vx = function() {
		return aME <= 0
	}, this.aMH = function() {
		aME = 0, aMI()
	}
}

function cc() {
	var aMR = [
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
		aMS = [
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
	this.aMT = null, this.aMU = null, this.aMV = null, this.aMW = null, this.aMX = null, this.aMY = null, this.aMZ = null, this.aMa = null, this.aMb = null, this.aMc = null;

	function aMj(kM, oR) {
		for (var aMT = ad.aMT, aMU = ad.aMU, aMV = ad.aMV, aC = kM; aC < oR; aC++) aMT[aC] = bO.gB(64 * az.random(), az.value(100)) << 2, aMU[aC] = bO.gB(64 * az.random(), az.value(100)) << 2, aMV[aC] = bO.gB(64 * az.random(), az.value(100)) << 2
	}

	function aMi(kM, oR) {
		for (var colorsData = aE.data.colorsData, aMT = ad.aMT, aMU = ad.aMU, aMV = ad.aMV, aC = kM; aC < oR; aC++) {
			var gC = colorsData[aC];
			aMT[aC] = 4 * (gC >> 12), aMU[aC] = 4 * (gC >> 6 & 63), aMV[aC] = 4 * (63 & gC)
		}
	}

	function aN1(fO, aN3) {
		aGH[fO] = 0, aGH[fO + 1] = 0, aGH[fO + 2] = aN3, aGH[fO + 3] = 0, aN4(fO)
	}

	function aN4(fO) {
		var fr;
		be.oZ || (fr = ad.a1s(fO), fO = ad.a1t(fO), be.oZ = fr >= bd.aGG[0] && fr <= bd.aGG[2] && fO >= bd.aGG[1] && fO <= bd.aGG[3])
	}
	this.fm = new Int32Array(4), this.aMg = new Int32Array(8), this.dw = function() {
		var fm = this.fm,
			fm = (fm[0] = -4 * bV.fv, fm[1] = 4, fm[2] = -fm[0], fm[3] = -fm[1], this.aMg);
		fm[0] = -4 * bV.fv - 4, fm[1] = -4 * bV.fv, fm[2] = -4 * bV.fv + 4, fm[3] = -4, fm[4] = 4, fm[5] = 4 * bV.fv - 4, fm[6] = 4 * bV.fv, fm[7] = 4 * bV.fv + 4
	}, this.dv = function() {
		if (this.aMT ? (this.aMT.fill(0), this.aMU.fill(0), this.aMV.fill(0), this.aMW.fill(0), this.aMX.fill(0), this.aMY.fill(0), this.aMZ.fill(0), this.aMa.fill(0), this.aMb.fill(0), this.aMc.fill(0), this.aCY.fill(0)) : (this.aMT =
				new Uint8Array(aE.fh), this.aMU = new Uint8Array(aE.fh), this.aMV = new Uint8Array(aE.fh), this.aMW = new Uint8Array(aE.fh), this.aMX = new Uint8Array(aE.fh), this.aMY = new Uint8Array(aE.fh), this.aMZ = new Uint8Array(aE.fh),
				this.aMa = new Uint8Array(aE.fh), this.aMb = new Uint8Array(aE.fh), this.aMc = new Uint8Array(aE.fh), this.aCY = new Uint8Array(aE.fh)), aE.ih)
			for (var aEn = bj.aEn, aMT = ad.aMT, aMU = ad.aMU, aMV = ad.aMV, aC = aE.fh - 1; 0 <= aC; aC--) {
				var eu = aEn[aC],
					m1 = bO.gB((aMS[eu][3] + 1) * az.random(), az.value(100));
				aMT[aC] = aMR[eu][0] + m1 * aMS[eu][0], aMU[aC] = aMR[eu][1] + m1 * aMS[eu][1], aMV[aC] = aMR[eu][2] + m1 * aMS[eu][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aMi(0, aE.l6), aMj(aE.l6, aE.fh)) : aMj(0, aE.fh) : aMi(0, aE.fh);
		! function() {
			var aC, fn, aMT = ad.aMT,
				aMU = ad.aMU,
				aMV = ad.aMV;
			for (aC = aE.fh - 1; 0 <= aC; aC--) fn = bO.gB(aMT[aC] + aMU[aC] + aMV[aC], 3), aMT[aC] += aMp(fn - aMT[aC], 2), aMU[aC] += aMp(fn - aMU[aC], 2), aMV[aC] += aMp(fn - aMV[aC], 2), aMT[aC] -= aMT[aC] % 4, aMU[aC] -= aMU[aC] % 4, aMV[
				aC] -= aMV[aC] % 4
		}(),
		function() {
			for (var fk = aE.fh, aMT = ad.aMT, aMU = ad.aMU, aMV = ad.aMV, aMW = ad.aMW, aC = 0; aC < fk; aC++) aMT[aC] += aC >> 7, aMU[aC] += aC >> 5 & 3, aMV[aC] += aC >> 3 & 3, aMW[aC] = 7 & aC
		}(), this.aMm(),
			function() {
				for (var fk = aE.fh, aMX = ad.aMX, aMY = ad.aMY, aMZ = ad.aMZ, aMT = ad.aMT, aMU = ad.aMU, aMV = ad.aMV, aC = 0; aC < fk; aC++) {
					var eS = aMT[aC],
						vt = aMU[aC],
						g4 = aMV[aC];
					60 <= eS + vt + g4 ? (aMX[aC] = Math.max(eS - 40, 3 & eS), aMY[aC] = Math.max(vt - 40, 3 & vt), aMZ[aC] = Math.max(g4 - 40, 3 & g4)) : (aMX[aC] = eS + 40, aMY[aC] = vt + 40, aMZ[aC] = g4 + 40)
				}
			}(),
			function() {
				for (var fk = aE.fh, aMa = ad.aMa, aMb = ad.aMb, aMc = ad.aMc, aMT = ad.aMT, aMU = ad.aMU, aMV = ad.aMV, aC = 0; aC < fk; aC++) {
					var eS = aMT[aC],
						vt = aMU[aC],
						g4 = aMV[aC];
					688 <= eS + vt + g4 ? (aMa[aC] = eS - 88, aMb[aC] = vt - 88, aMc[aC] = g4 - 88) : (aMa[aC] = Math.min(eS + 88, 252 + (3 & eS)), aMb[aC] = Math.min(vt + 88, 252 + (3 & vt)), aMc[aC] = Math.min(g4 + 88, 252 + (3 & g4)))
				}
			}()
	}, this.aBQ = function(player) {
		var h = bR.gJ;
		return h[0] = this.aMT[player], h[1] = this.aMU[player], h[2] = this.aMV[player], h
	}, this.aMm = function() {
		for (var aC = aE.fh - 1; 0 <= aC; aC--) this.aCY[aC] = this.aMT[aC] + this.aMU[aC] + this.aMV[aC] < 280 ? 0 : 1
	}, this.a1s = function(fO) {
		return bO.gB(fO, 4) % bV.fv
	}, this.a1t = function(fO) {
		return bO.gB(fO, 4 * bV.fv)
	}, this.a1P = function(fr, ft) {
		return Math.floor(4 * (ft * bV.fv + fr))
	}, this.a1f = function(fO) {
		var fm = this.fm;
		return this.aMq(fO + fm[0]) || this.aMq(fO + fm[1]) || this.aMq(fO + fm[2]) || this.aMq(fO + fm[3])
	}, this.g8 = function(fO) {
		var fm = this.fm;
		return this.fp(fO + fm[0]) || this.fp(fO + fm[1]) || this.fp(fO + fm[2]) || this.fp(fO + fm[3])
	}, this.a1d = function(fO, player) {
		var fm = this.fm;
		return this.aMr(fO + fm[0], player) || this.aMr(fO + fm[1], player) || this.aMr(fO + fm[2], player) || this.aMr(fO + fm[3], player)
	}, this.aMs = function(aC, aMt, aMu, aMv) {
		this.aMT[aC] = aMt >> 16, this.aMU[aC] = aMt >> 8 & 255, this.aMV[aC] = 255 & aMt, this.aMX[aC] = aMu >> 16, this.aMY[aC] = aMu >> 8 & 255, this.aMZ[aC] = 255 & aMu, this.aMa[aC] = aMv >> 16, this.aMb[aC] = aMv >> 8 & 255, this.aMc[aC] =
			255 & aMv
	}, this.aMw = function(aC) {
		return [(this.aMT[aC] << 16) + (this.aMU[aC] << 8) + this.aMV[aC], (this.aMX[aC] << 16) + (this.aMY[aC] << 8) + this.aMZ[aC], (this.aMa[aC] << 16) + (this.aMb[aC] << 8) + this.aMc[aC]]
	}, this.hK = function(fO) {
		return 208 <= aGH[fO + 3]
	}, this.a1l = function(player, fO) {
		return this.hK(fO) && this.a1o(player, fO)
	}, this.a1o = function(player, fO) {
		return player === this.fc(fO)
	}, this.aMx = function(fO) {
		return 208 <= aGH[fO + 3] && aGH[fO + 3] < 224
	}, this.kH = function(fO) {
		return 224 <= aGH[fO + 3] && aGH[fO + 3] < 248
	}, this.aMy = function(fO) {
		return 248 <= aGH[fO + 3]
	}, this.a1e = function(fO) {
		for (var fm = this.fm, aC = 3; 0 <= aC; aC--)
			if (this.j2(fO + fm[aC])) return !0;
		return !1
	}, this.ff = function(fO) {
		return this.hK(fO) || this.fb(fO)
	}, this.j2 = function(fO) {
		return 0 === aGH[fO + 3] && 2 === aGH[fO + 2]
	}, this.fb = function(fO) {
		return 0 === aGH[fO + 3] && 1 === aGH[fO + 2]
	}, this.aMz = function(fO) {
		return 0 === aGH[fO + 3] && 3 === aGH[fO + 2]
	}, this.fp = function(fO) {
		return 0 === aGH[fO + 3] && 5 === aGH[fO + 2]
	}, this.aMq = function(fO) {
		return 0 === aGH[fO + 3] && 3 <= aGH[fO + 2]
	}, this.fS = function(fO) {
		return (aGH[fO] >> 1 << 8) + aGH[fO + 1]
	}, this.aN0 = function(fO) {
		return 1 & aGH[fO]
	}, this.aMr = function(fO, player) {
		return this.fb(fO) || this.hK(fO) && player !== this.fc(fO)
	}, this.fc = function(fO) {
		return ((3 & aGH[fO]) << 7) + ((3 & aGH[fO + 1]) << 5) + ((3 & aGH[fO + 2]) << 3) + (7 & aGH[fO + 3])
	}, this.a1m = function(fO) {
		aN1(fO, 1)
	}, this.aN2 = function(fO) {
		aN1(fO, 2)
	}, this.a1Q = function(fO, player) {
		aGH[fO] = this.aMT[player], aGH[fO + 1] = this.aMU[player], aGH[fO + 2] = this.aMV[player], aGH[fO + 3] = 208 + this.aMW[player], aN4(fO)
	}, this.hF = function(fO, player) {
		aGH[fO] = this.aMX[player], aGH[fO + 1] = this.aMY[player], aGH[fO + 2] = this.aMZ[player], aGH[fO + 3] = 224 + this.aMW[player], aN4(fO)
	}, this.kI = function(fO, player) {
		aGH[fO] = this.aMa[player], aGH[fO + 1] = this.aMb[player], aGH[fO + 2] = this.aMc[player], aGH[fO + 3] = 248 + this.aMW[player], aN4(fO)
	}
}

function d1() {
	var aN5 = 0,
		aN6 = new Uint16Array(64);

	function fG(a9G) {
		aN5 -= 2;
		for (var aC = a9G; aC < aN5; aC += 2) aN6[aC] = aN6[aC + 2], aN6[aC + 1] = aN6[aC + 3]
	}
	this.dv = function() {
		aN5 = 0
	}, this.ep = function() {
		var aC, kF, jO;
		if (0 !== aN5)
			if (0 === ah.ni[aE.fU]) aN5 = 0;
			else if (0 === ae.gr(aE.fU)) aN5 = 0;
		else
			for (aC = aN5 - 2; 0 <= aC; aC -= 2)(kF = aN6[aC]) < aE.fh && 0 === ah.ni[kF] ? fG(aC) : (jO = aN6[aC + 1], (kF >= aE.fh && bw.aN8(aE.fU) || kF < aE.fh && bw.aN9(aE.fU, kF)) && (bB.iB.iI(jO, kF), fG(aC)))
	}, this.iJ = function(kF, jO) {
		! function(kF, jO) {
			for (var aC = 0; aC < aN5; aC += 2)
				if (aN6[aC] === kF) return aN6[aC + 1] = Math.min(aN6[aC + 1] + jO, 1023), 1;
			return
		}(kF, jO) && 64 !== aN5 && (aN6[aN5] = kF, aN6[aN5 + 1] = jO, aN5 += 2)
	}
}

function cd() {
	function aNH(player) {
		var el;
		bD.h6.a7K(player) && (el = ah.hm[player] - ah.a7P[player] + ae.aNJ(player), bg.hA(player, Math.abs(el), el < 0 ? 18 : 12)), ah.hm[player] = 0, ah.a7P[player] = 0
	}

	function aNQ() {
		aY.show(!1, !1, !1, !0), aX.aFJ(), bU.a3Y.a4M()
	}

	function aND(player, aNP) {
		for (var aC = aNP.length - 1; 0 <= aC; aC--) ae.aNS(aNP[aC], player)
	}

	function aNG(player) {
		var je = ah.je,
			jf = ah.jf,
			jg = ah.jg,
			jh = ah.jh,
			fv = bV.fv;
		if (ah.hY[player]) {
			ah.hY[player] = 0;
			for (var o9 = je[player], oA = jg[player], fr = jf[player]; o9 <= fr; fr--)
				for (var ft = jh[player]; oA <= ft; ft--) {
					var hI = 4 * (ft * fv + fr);
					ad.a1l(player, hI) && ad.a1m(hI)
				}
		}
		jf[player] = jh[player] = 0, je[player] = jg[player] = Math.max(fv, bV.fw)
	}
	this.e3 = function(hI) {
		var player, el = ah.hY[hI] + ah.a1L[hI];
		bQ.z.lA[hI] ? el && (aND(player = hI, ae.aNE(player)), ag.aNF(player), aNG(player), aG.h8(player), ae.clear(player), aNH(player), function(player) {
			ah.a1L[player] = 0, ah.hC[player] = [], ah.hQ[player] = [], ah.hR[player] = [], ah.g9[player] = []
		}(player)) : !el && ah.hC[hI].length || this.aNC(hI)
	}, this.aNC = function(player) {
		! function(player) {
			bD.h6.kT(player) || (ah.a4R[player] = bl.a4f.aNO(), aE.a3o++);
			var aNP = ae.aNE(player);
			0 === aNP.length ? bD.h6.a7H(player) && aNQ() : (aND(player, aNP), function(player, aNP) {
				var aNU = aNP[function(aNP) {
					var aC, eT = 0;
					for (aC = aNP.length - 1; 1 <= aC; aC--) ah.hY[aNP[aC]] > ah.hY[aNP[eT]] && (eT = aC);
					return eT
				}(aNP)];
				9 === aE.lO && (1 === bj.fi[player] ? az.ky(8) && b0.aNV(aNU) : aF.iU[player] && (aO.aAi(765, 0), aO.a2F(280, L(173, [ah.a2G[aNU], ah.a2G[player]]), 765, aNU, bE.qG, bE.rh, -1, !0)));
				if (bD.h6.a7H(player)) aNQ(), aO.a40(aNU, 1);
				else {
					for (var aC = aNP.length - 1; 0 <= aC; aC--)
						if (bD.h6.a7K(aNP[aC]) && (bg.ne[4 - bD.h6.kT(player)]++, bD.h6.a7H(aNP[aC]))) return aO.a40(player, 0);
					bD.h6.kT(player) || aO.aAR(0, player, aNU)
				}
			}(player, aNP))
		}(player), ag.aNF(player), aNG(player), aNH(player),
			function(player) {
				ah.ni[player] = 0, ah.hC[player] = null, ah.hQ[player] = null, ah.hR[player] = null, ah.g9[player] = null
			}(player), aG.h8(player), ae.clear(player), bQ.aNM.aNN(player)
	}
}

function d6() {
	var input;

	function aNW(e) {
		(e = e.target.files) && 0 < e.length && b7.aNZ(e[0])
	}

	function aNd(e) {
		var eu = new Image;
		eu.onload = aNe, eu.src = e.target.result
	}

	function aNe(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aNg = bm.buffer.data[162].value,
			max = Math.min(bV.aNh, aNg),
			aNg = (max = a1.id || bM.tr() ? Math.min(1400, aNg) : max) / Math.max(j, k);
		if (aNg < 1 && (j = Math.floor(aNg * j + .125), k = Math.floor(aNg * k + .125)), max < j || max < k || j < 10 || k < 10) aNg = "Invalid Image Dimensions!", a1.ze ? a1.ze.showToast(aNg) : alert(aNg);
		else {
			for (var max = document.createElement("canvas"), aNg = (max.width = j, max.height = k, max.getContext("2d", {
						willReadFrequently: !0
					})), aNj = document.createElement("canvas"), aNk = (aNj.width = e.width, aNj.height = e.height, aNj.getContext("2d")), e = (aNk.drawImage(e, 0, 0), aNk.getImageData(0, 0, aNj.width, aNj.height)), aNk = aNg.createImageData(j, k),
					src = e.data, aNn = aNk.data, aD8 = aNj.width / j, aD9 = aNj.height / k, ft = 0; ft < k; ft++)
				for (var fr = 0; fr < j; fr++) {
					var aNo = Math.floor(fr * aD8),
						aNo = 4 * (Math.floor(ft * aD9) * aNj.width + aNo),
						aNr = 4 * (ft * j + fr);
					aNn[aNr] = src[aNo], aNn[1 + aNr] = src[1 + aNo], aNn[2 + aNr] = src[2 + aNo], aNn[3 + aNr] = 255
				}
			aNg.putImageData(aNk, 0, 0), 20 === u.vX && u.a52().aNe(max)
		}
	}
	this.dv = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aNW
	}, this.xy = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aNX = function() {
		input.click()
	}, this.aNZ = function(aNa) {
		var h = aNa.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aNd, h.readAsDataURL(aNa))
	}
}

function d4() {
	this.aNs = new Uint32Array(aE.fh), this.dv = function() {
		10 === aE.lO && this.aNs.fill(0)
	}, this.ep = function() {
		10 === aE.lO && this.lv()
	}, this.lv = function() {
		for (var hI, target, aFW, aNs = this.aNs, x0 = am.lh, a7Q = ah.hm, aC = am.lc - 1; 0 <= aC; aC--)(hI = x0[aC]) >= aE.l6 || (target = Math.max(bO.gB(a7Q[hI], 4), 2048), aFW = Math.max(af.aFX(hI), 100), aNs[hI] += bO.gB(aFW * target, 1e4),
			aNs[hI] > target && (aNs[hI] = target))
	}, this.a7W = function(player, iU) {
		return 10 !== aE.lO || bD.h6.kT(player) ? iU : Math.min(this.aNs[player], iU)
	}, this.a7c = function(player, iU) {
		10 !== aE.lO || bD.h6.kT(player) || (this.aNs[player] -= iU)
	}
}

function d7() {
	var aNt = -1,
		aNu = null,
		aNv = -1,
		yT = 4;

	function aNx() {
		aN.a9k() ? be.render() : be.a3y()
	}

	function aO5(eu, fn) {
		var eS = eu >> 16,
			vt = eu >> 8 & 255,
			eu = 255 & eu,
			aO6 = 255 - fn,
			aO6 = (aO6 < eS && aO6 < vt && aO6 < eu && (fn = -fn), aNt >> 7),
			aO8 = aNt >> 5 & 3,
			aO9 = aNt >> 3 & 3;
		return (Math.max(Math.min(eS + fn, 252 + aO6), aO6) << 16) + (Math.max(Math.min(vt + fn, 252 + aO8), aO8) << 8) + Math.max(Math.min(eu + fn, 252 + aO9), aO9)
	}

	function aNw() {
		return -1 !== aNt && (ad.aMs(aNt, aNu[0], aNu[1], aNu[2]), aO2(aNt), aNt = -1)
	}

	function aO2(player) {
		bi.e2 = !0;
		for (var je = ah.je[player], jg = ah.jg[player], jf = ah.jf[player], jh = ah.jh[player], ft = jg; ft <= jh; ft++)
			for (var fr = je; fr <= jf; fr++) {
				var fO = ad.a1P(fr, ft);
				ad.a1l(player, fO) && (ad.aMy(fO) ? ad.kI(fO, player) : ad.kH(fO) ? ad.hF(fO, player) : ad.a1Q(fO, player))
			}
	}
	this.dv = function() {
		aNu = null, aNv = aNt = -1, yT = bO.iw(Math.floor(bm.buffer.data[16].value), 0, 16)
	}, this.ep = function(c3) {
		if (bm.buffer.data[15].value && 0 !== yT && (c3 || !bM.tr())) {
			var c3 = bP.i1(bM.hp),
				i2 = bP.i3(bM.hq);
			if (bP.i4(c3, i2)) {
				c3 = bP.g7(c3, i2), i2 = bP.fa(c3);
				if (aNv === i2)
					if (ad.hK(i2)) {
						if (aNt === ad.fc(i2)) return
					} else if (-1 === aNt) return;
				! function(fO) {
					ad.hK(fO) ? (fO = ad.fc(fO)) !== aNt && (aNw(), function(player) {
						aNt = player, aNu = ad.aMw(player);
						var aO0 = function() {
							var q5 = aNu,
								aO3 = yT << 2,
								aO4 = aO3 << 1;
							return [aO5(q5[0], aO3), aO5(q5[1], aO4), aO5(q5[2], aO4)]
						}();
						ad.aMs(player, aO0[0], aO0[1], aO0[2]), aO2(player)
					}(fO), aNx()) : aNw() && aNx()
				}(aNv = i2)
			} else aNw() && aNx()
		}
	}
}

function d8() {
	var yH = 0,
		aOA = 0,
		aOB = 0,
		aOC = 0,
		aNv = -1;

	function aOF(fO) {
		if (aNv === fO) return !1;
		if (-1 === (aNv = fO)) yH = 0, aO.aAw(yH, 0);
		else {
			if (ad.hK(fO)) return aOB = ad.fc(fO), l5 = ah.hm[aOB] - ah.a7P[aOB], (4 !== yH || l5 !== aOA) && (yH = 4, aOA = l5, aO.aAw(yH, l5), !0);
			if (ad.fb(fO)) return 3 !== yH && (yH = 3, aO.aAw(yH, 0), !0);
			if (ad.fp(fO)) return 2 !== yH && (yH = 2, aO.aAw(yH, 0), !0);
			var l5 = bQ.lv.a9Y(bM.hp, bM.hq);
			if (-1 === l5) return 1 !== yH && (yH = 1, aO.aAw(yH, 0), !0);
			fO = bQ.z.aAZ[l5];
			if (aOB = bQ.z.mz[l5], aOC = bQ.z.n0[l5] >> 3, 5 === yH && fO === aOA) return !1;
			yH = 5, aOA = fO, aO.aAw(yH, fO)
		}
		return !0
	}
	this.dv = function() {
		aOC = aOB = aOA = yH = 0, aNv = -1
	}, this.ep = function(c3) {
		var i2;
		!c3 && bM.tr() || (c3 = bP.i1(bM.hp), i2 = bP.i3(bM.hq), bP.i4(c3, i2) ? (c3 = bP.g7(c3, i2), aOF(bP.fa(c3))) : aOF(-1))
	}, this.nP = function() {
		var aOH, l5, a9W, aOG;
		if (0 !== yH && 2 !== yH)
			if (bM.tr()) {
				if (1 !== yH && 3 !== yH) {
					if (4 === yH) return void(l5 = ah.hm[aOB] - ah.a7P[aOB], aOA === l5 || (aOA = l5, aO.aAw(yH, l5)));
					(a9W = bQ.lv.o8(aOC, aOB)) < 0 ? (yH = 1, aO.aAw(yH, 0)) : (aOG = bQ.z.aAZ[a9W]) !== aOA && (aOA = aOG, aO.aAw(yH, aOG))
				}
			} else if (1 === yH) - 1 !== (a9W = bQ.lv.a9Y(bM.hp, bM.hq)) && (yH = 5, aOA = bQ.z.aAZ[a9W], aO.aAw(yH, aOA));
		else if (3 === yH) ad.hK(aNv) && (yH = 4, aOH = ad.fc(aNv), aOA = ah.hm[aOH] - ah.a7P[aOH], aO.aAw(yH, aOA));
		else if (4 === yH) {
			if (ad.hK(aNv)) return void(aOH = ad.fc(aNv), l5 = ah.hm[aOH] - ah.a7P[aOH], aOA === l5 || (aOA = l5, aO.aAw(yH, l5)));
			yH = 3, aO.aAw(yH, 0)
		} else - 1 === (a9W = bQ.lv.a9Y(bM.hp, bM.hq)) ? (yH = 1, aO.aAw(yH, 0)) : (aOG = bQ.z.aAZ[a9W]) !== aOA && (aOA = aOG, aO.aAw(yH, aOG))
	}
}

function dh() {
	function aOJ(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aOR, h.readAsText(e))
	}

	function aOR(e) {
		var aOU;
		aE.a3m || (e = JSON.parse(e.target.result), aOU = aE.data = new a8P, aOV(e, aOU, "mapType", 0, 2), aOV(e, aOU, "mapProceduralIndex", 0, 255), aOV(e, aOU, "mapRealisticIndex", 0, 255), aOV(e, aOU, "mapSeed", 0, 16383), function(aOT, aOU, hJ,
				max) {
				aOT = aOT[hJ];
				aOU[hJ] = aOb(aOT) ? aOT.slice(0, max) : aOU[hJ]
			}(e, aOU, "mapName", 20), function(aOT, aOU, hJ) {
				var aNf;
				2 === aOU.mapType && (!aOb(aOT = aOT[hJ]) || aOT.length <= 20 ? aOU.mapType = 0 : ((aNf = new Image).onload = function() {
					bC.aOc.aOd(aNf, 1), aNf.onload = null, aNf = null
				}, aNf.src = aOT))
			}(e, aOU, "canvas"), aOV(e, aOU, "passableWater", 0, 1), aOV(e, aOU, "passableMountains", 0, 1), aOV(e, aOU, "playerCount", 1, 512), aOV(e, aOU, "humanCount", 1, 1), aOV(e, aOU, "selectedPlayer", 0, 0), aOV(e, aOU, "gameMode", 0, 1),
			aOV(e, aOU, "playerMode", 0, 0), aOV(e, aOU, "battleRoyaleMode", 0, 0), aOV(e, aOU, "numberTeams", 0, 8), aOV(e, aOU, "isZombieMode", 0, 0), aOV(e, aOU, "isContest", 0, 0), aOV(e, aOU, "isReplay", 0, 0), aOY(e, aOU, "elo", 16, 2,
				16383), aOV(e, aOU, "colorsType", 0, 1), aOV(e, aOU, "colorsPersonalized", 0, 1), aOY(e, aOU, "colorsData", 32, 512, 262143), aOV(e, aOU, "selectableColor", 0, 1), aOY(e, aOU, "teamPlayerCount", 16, 9, 512), aOV(e, aOU,
				"neutralBots", 0, 1), aOV(e, aOU, "botDifficultyType", 0, 3), aOV(e, aOU, "botDifficultyValue", 0, 15), aOY(e, aOU, "botDifficultyTeam", 8, 9, 15), aOY(e, aOU, "botDifficultyData", 8, 512, 15), aOV(e, aOU, "spawningType", 0, 2),
			aOV(e, aOU, "spawningSeed", 0, 16383), aOY(e, aOU, "spawningData", 16, 1024, 4095), aOV(e, aOU, "selectableSpawn", 0, 1), aOV(e, aOU, "playerNamesType", 0, 2),
			function(aOT, aOU, hJ, size, max) {
				var a6R = aOT[hJ];
				if (Array.isArray(a6R)) {
					for (var a6S = new Array(size), fk = Math.min(a6R.length, size), aC = 0; aC < fk; aC++) a6S[aC] = aOb(a6R[aC]) ? a6R[aC].slice(0, max) : "";
					a6S.fill("", fk), aOU[hJ] = a6S
				}
			}(e, aOU, "playerNamesData", 512, 20), aOV(e, aOU, "selectableName", 0, 1), aOV(e, aOU, "aIncomeType", 0, 2), aOV(e, aOU, "aIncomeValue", 0, 255), aOY(e, aOU, "aIncomeData", 8, 512, 255), aOV(e, aOU, "tIncomeType", 0, 2), aOV(e, aOU,
				"tIncomeValue", 0, 255), aOY(e, aOU, "tIncomeData", 8, 512, 255), aOV(e, aOU, "iIncomeType", 0, 2), aOV(e, aOU, "iIncomeValue", 0, 255), aOY(e, aOU, "iIncomeData", 8, 512, 255), aOV(e, aOU, "sResourcesType", 0, 2), aOV(e, aOU,
				"sResourcesValue", 0, 2047), aOY(e, aOU, "sResourcesData", 16, 512, 2047), u.y(), u.z.vQ[0] = 0, u.v(19))
	}

	function aOV(aOT, aOU, hJ, min, max) {
		aOT = aOT[hJ];
		aOU[hJ] = "number" == typeof aOT && min <= aOT && aOT <= max ? Math.floor(aOT) : aOU[hJ]
	}

	function aOb(pY) {
		return "string" == typeof pY
	}

	function aOY(aOT, aOU, hJ, aOe, size, max) {
		var a6R = aOT[hJ];
		if (Array.isArray(a6R)) {
			for (var a6S = new(8 === aOe ? Uint8Array : 16 === aOe ? Uint16Array : Uint32Array)(size), fk = Math.min(a6R.length, size), aC = 0; aC < fk; aC++) a6S[aC] = bO.iw(a6R[aC], 0, max);
			aOU[hJ] = a6S
		}
	}
	this.aOI = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aOJ, input.click()
	}, this.aOK = function() {
		for (var aON, aGs, a8z = aE.data, keys = Object.keys(a8z), aOL = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a8z[key] instanceof Uint8Array || a8z[key] instanceof Uint16Array || a8z[key] instanceof Uint32Array ? aOL[key] = Array.from(a8z[key]) : aOL[key] = a8z[key]
		}
		aOL.canvas = 2 === aOL.mapType && aOL.canvas ? aOL.canvas.toDataURL() : null, aON = aOL, aON = JSON.stringify(aON, null, 2), aON = new Blob([aON], {
			type: "application/json"
		}), (aGs = document.createElement("a")).href = URL.createObjectURL(aON), aGs.download = "tt_scenario.json", aGs.click()
	}
}

function ch() {
	var aOf, aOg, size, kF, iU, aOh;

	function aOi(player) {
		return player < aE.l6 ? aOf * player : aOf * aE.l6 + aOg * (player - aE.l6)
	}
	this.dv = function() {
		aOf = aE.l6 < 16 ? 12 : 8, aOg = 4;
		var fk = aOi(aE.fh);
		size = new Uint8Array(aE.fh), kF = new Uint16Array(fk), iU = new Uint32Array(fk), aOh = new Uint8Array(fk)
	}, this.sy = function(aC2, aOj) {
		var aOk = this.hn(aC2, aOj),
			aOj = (this.hl(aC2, aOj, 0), bD.h6.h9(aC2, aOk));
		bg.hA(aC2, aOk - aOj, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aNS = function(player, aOj) {
		var aOn, aOj = function(player, aOj) {
			var aC, m1 = aOi(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (kF[m1 + aC] === aOj) return aC;
			return size[player]
		}(player, aOj);
		aOj !== size[player] && (aOn = iU[aOi(player) + aOj], this.hB(player, aOj), this.et(player, aOn, aE.fh))
	}, this.kR = function(player, aOj) {
		for (var m1 = aOi(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kF[m1 + aC] === aOj) return !0;
		return !1
	}, this.kk = function(player) {
		return player < aE.l6 ? size[player] < aOf : size[player] < aOg
	}, this.gr = function(player) {
		return size[player]
	}, this.gw = function(player, aC) {
		return kF[aOi(player) + aC]
	}, this.gx = function(player, aC) {
		return iU[aOi(player) + aC]
	}, this.hn = function(player, aOj) {
		for (var m1 = aOi(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kF[m1 + aC] === aOj) return iU[m1 + aC];
		return 0
	}, this.aNJ = function(player) {
		for (var m1 = aOi(player), gC = 0, aC = size[player] - 1; 0 <= aC; aC--) gC += iU[m1 + aC];
		return gC
	}, this.hl = function(player, aOj, aOn) {
		for (var m1 = aOi(player), aC = size[player] - 1; 0 <= aC; aC--) kF[m1 + aC] === aOj && (iU[m1 + aC] = aOn)
	}, this.hW = function(player, aC, aOn) {
		iU[aOi(player) + aC] = Math.max(aOn, 0)
	}, this.hX = function(player, aC) {
		aOh[aOi(player) + aC] = 0
	}, this.gy = function(player, aC) {
		return aOh[aOi(player) + aC]
	}, this.et = function(player, aOn, aOj) {
		ap.jt.ki[player] = ap.jt.ki[aOj] = 8, bD.h6.a7K(aOj) && bg.ne[6 - bD.h6.kT(player)]++;
		for (var m1 = aOi(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kF[m1 + aC] === aOj) return iU[m1 + aC] += aOn, void(iU[m1 + aC] = iU[m1 + aC] > aE.a7S ? aE.a7S : iU[m1 + aC]);
		kF[m1 + size[player]] = aOj, iU[m1 + size[player]] = aOn, aOh[m1 + size[player]] = 1, size[player]++, aOj === aE.fU ? aO.a40(player, 5) : player < aE.l6 && player === aE.fU && ag.aAT(aOj)
	}, this.hB = function(player, eT) {
		var g3, m1;
		if (0 !== size[player])
			for (m1 = aOi(player), size[player]--, g3 = eT; g3 < size[player]; g3++) kF[m1 + g3] = kF[m1 + g3 + 1], iU[m1 + g3] = iU[m1 + g3 + 1], aOh[m1 + g3] = aOh[m1 + g3 + 1]
	}, this.aNE = function(player) {
		for (var g3, m1, aNP = [], aC = am.lc - 1; 0 <= aC; aC--)
			for (m1 = aOi(am.lh[aC]), g3 = size[am.lh[aC]] - 1; 0 <= g3; g3--)
				if (kF[m1 + g3] === player) {
					aNP.push(am.lh[aC]);
					break
				} return aNP
	}
}

function ci() {
	var aOo;

	function aOq(player) {
		var eS, kl;
		return bD.h6.kT(player) && player < aE.l6 ? 0 : (eS = aOo[bO.gB((aE.fh - 1) * ah.hY[player], aE.kq)], bi.l3() < 1920 && (eS = Math.max(bO.gB(100 * (13440 - 6 * bi.l3()), 1920), eS)), kl = af.km(player), ah.hm[player] > kl && (eS -= bO.gB(2 *
			eS * (ah.hm[player] - kl), kl)), Math.min(Math.max(eS, 0), 700))
	}

	function aP2(oL) {
		for (var hY = ah.hY, lh = am.lh, aC = am.lc - 1; 0 <= aC; aC--) {
			var hI = lh[aC];
			bD.h6.h9(hI, bO.gB(oL * hY[hI], 32))
		}
	}

	function aOz() {
		var a4O = aE.fU;
		bR.gG[0] = ah.hm[a4O] - ah.a7P[a4O]
	}

	function aP1(eT) {
		var a4O = aE.fU,
			a4O = ah.hm[a4O] - ah.a7P[a4O] - bR.gG[0];
		af.aE7 += a4O, bg.ne[eT] += a4O
	}
	this.aE7 = 0, this.e1 = function() {
		for (var fk = aE.fh, aC = (aOo = new Uint16Array(fk), 0); aC < fk; aC++) aOo[aC] = 100 + aOp(bO.gB(25600 * aC, fk - 4), 9)
	}, this.dv = function() {
		(this.aE7 = 0) === aE.data.iIncomeType ? this.aFX = aOq : 1 === aE.data.iIncomeType ? this.aFX = function(player) {
			return bO.gB(aE.data.iIncomeValue * aOq(player), 64)
		} : this.aFX = function(player) {
			return bO.gB(aE.data.iIncomeData[player] * aOq(player), 64)
		}
	}, this.ep = function() {
		if (bi.l3() % 10 == 9 && (af.aE7 = 0, function() {
				aOz();
				for (var lh = am.lh, hm = ah.hm, aC = am.lc - 1; 0 <= aC; aC--) {
					var hI = lh[aC],
						aP0 = bO.gB(af.aFX(hI) * hm[hI], 1e4);
					bD.h6.h9(hI, Math.max(aP0, 1))
				}
				aP1(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aOz(), 1 === aE.data.aIncomeType)
						for (var hY = ah.hY, lh = am.lh, oL = aE.data.aIncomeValue, aC = am.lc - 1; 0 <= aC; aC--) {
							var hI = lh[aC];
							bD.h6.h9(hI, bO.gB(oL * hY[hI], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hY = ah.hY, lh = am.lh, oL = aE.data.aIncomeData, aC = am.lc - 1; 0 <= aC; aC--) {
								var hI = lh[aC];
								bD.h6.h9(hI, bO.gB(oL[hI] * hY[hI], 128))
							}
						}();
					aP1(18)
				}
			}(), bi.l3() % 100 == 99)) {
			if (aOz(), 0 === aE.data.tIncomeType) aP2(32);
			else if (1 === aE.data.tIncomeType) aP2(aE.data.tIncomeValue);
			else
				for (var hY = ah.hY, lh = am.lh, oL = aE.data.tIncomeData, aC = am.lc - 1; 0 <= aC; aC--) {
					var hI = lh[aC];
					bD.h6.h9(hI, bO.gB(oL[hI] * hY[hI], 32))
				}
			aP1(8)
		}
	}, this.km = function(player) {
		return Math.min(100 * ah.hY[player], aE.a8L)
	}, this.rx = function(player, ry) {
		bu.sK(player, ry, bR.gH[0], 0), bD.h6.h9(ry, bR.gH[0]), bg.sL(player, ry), ag.aOs(player, bR.gH[0] + bR.gH[1]), ag.sM(ry, bR.gH[0]), bD.h6.nG(player)
	}, this.aOt = function() {
		for (var fk = am.lc, x0 = am.lh, m1 = 0, a7Q = ah.hm, aC = 0; aC < fk; aC++) m1 += a7Q[x0[aC]];
		return m1
	}, this.aOu = function(aOv) {
		for (var hI, fk = am.lc, x0 = am.lh, m1 = 0, a7Q = ah.hm, fi = bj.fi, aC = 0; aC < fk; aC++) fi[hI = x0[aC]] === aOv && (m1 += a7Q[hI]);
		return m1
	}
}

function ck() {
	var aP6, aP7, aP8, aP9, aPA, aPB, aPC, aPD, aPE, aPF, aPG, aPH, aPI, aPJ, aPK, aPL, aPM, aPN, aPP, aPQ, aGl, aPR, aPS, aPY, aPZ, aPO = null,
		aPU = 0,
		aPV = !1,
		aPW = new Float32Array(4),
		aPX = 0,
		aEc = 112,
		aPa = 0;

	function aPe() {
		aPO.width = i.j, aPO.height = i.k, aPP = aPO.getContext("2d", {
			alpha: !0
		}), bD.tO.textAlign(aPP, 1), bD.tO.textBaseline(aPP, 1), aPP.imageSmoothingEnabled = !0, aPO.oncontextrestored = aPe
	}

	function tR() {
		aPE = Math.floor(+i.iy), aPF = Math.floor(.5 * aPE), aPe()
	}

	function aPb() {
		var aC, aPg;
		for (yw.font = bD.tO.ux(1, 100 * aPG), aPg = 80 / Math.floor(yw.measureText(bD.pc.a35(aE.a7S)).width), yw.font = bD.tO.ux(1, 100), aC = aE.fh - 1; 0 <= aC; aC--) aPD[aC] = 100 / Math.floor(yw.measureText(ah.a2G[aC]).width), aPC[aC] = Math
			.min(aPg, aPD[aC])
	}

	function aPh(aC) {
		return !aPa || (aC = ah.hm[aC]) < 1e6 ? 1 : aC < 1e7 ? aPW[0] : aPW[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aPf(iq) {
		aPV = !1, aPU = bi.ek, aPN = !1, aPM = 1, aPK = aPL = 0, iq.clearRect(0, 0, i.j, i.k);
		for (var aPo, aPp, aC, aPq, fontSize, aPr, o9 = jP / iz, oA = jQ / iz, oM = (i.j + jP) / iz, oN = (i.k + jQ) / iz, aPs = 0 !== ah.ni[aE.fU] && !bD.h6.kT(aE.fU), g3 = am.lc - 1; 0 <= g3; g3--) aC = am.lh[g3], (fontSize = Math.floor(aPJ * iz *
			aPh(aC) * aPC[aC] * aPA[aC])) < aPI || aPE <= fontSize || aP8[aC] + aPA[aC] > o9 && aP8[aC] < oM && aP9[aC] + aPB[aC] > oA && aP9[aC] < oN && (aPo = Math.floor(i.j * (aP8[aC] + aPA[aC] / 2 - o9) / (oM - o9)), aPp = Math.floor(i.k * (
			aP9[aC] + aPB[aC] / 2 - oA) / (oN - oA) - .1 * fontSize), aPq = ad.aCY[aC], iq.font = bD.tO.ux(1 === ah.a7G[aC] ? 4 : 1, fontSize), iq.fillStyle = aPt(fontSize, aPq % 2), aPa ? aPu(iq, aC, fontSize, aPo, aPp, aPq) : aPv(aC,
			fontSize, aPo, aPp, iq), aPN = !0, 0 < aGl[aC] ? function(aPo, aPp, fontSize, aC, iq) {
			0 === kr[aC] ? ak.q7.a2w(aPQ[aC]) ? (function(aPo, aPp, fontSize, player, s9, iq) {
				for (var a0u = aPp, ip = (iq.globalAlpha = aQ3(fontSize), aPh(player) * (aPa ? aPX : aPD[player])), a0t = aPo - .5 * fontSize / ip - .9 * fontSize, g4 = 0; g4 < 2; g4++) iq.fillText(ak.q7.a2o(s9), a0t, a0u), a0t =
					aPo + .5 * fontSize / ip + .9 * fontSize;
				iq.globalAlpha = 1
			}(aPo, aPp, fontSize, aC, aPQ[aC], iq), aPx(aPo, aPp, fontSize, 0, 0, iq)) : ak.q7.a2y(aPQ[aC]) ? (aQ6(aPo, aPp, fontSize, aPQ[aC], 0, iq), aPx(aPo, aPp, fontSize, 0, 1, iq)) : (aQ6(aPo, aPp, fontSize, aPQ[aC], 1, iq), aPx(
				aPo, aPp, fontSize, 1, 0, iq)) : aQ6(aPo, aPp, fontSize, aPQ[aC], 0, iq)
		}(aPo, aPp, fontSize, aC, iq) : 0 === kr[aC] && aPx(aPo, aPp, fontSize, 0, 0, iq), aPs && (0 < aGl[aC + aE.fh] || 0 < aGl[aC + 2 * aE.fh] || 0 < aGl[aC + 3 * aE.fh] || 0 < aGl[aC + 4 * aE.fh]) && function(aPo, aPp, fontSize, aC, iq) {
			var eu, hD = -1;
			for (eu = 4; 1 <= eu; eu--) 0 < aGl[aC + eu * aE.fh] && hD++;
			for (eu = 1; eu < 5; eu++) 0 < aGl[aC + eu * aE.fh] && (! function(aPo, aPp, fontSize, eu, aC, aQ1, el, iq) {
				var a6f;
				if (1 === eu) {
					aC = aPQ[aC + aE.fh];
					if (!ak.q7.a2x(aC)) return function(aPo, aPp, fontSize, s9, aQ1, iq) {
						iq.globalAlpha = aQ3(fontSize);
						aPo -= .534 * aQ1 * fontSize, aQ1 = aPp + 1.59 * fontSize;
						iq.font = bD.tO.ux(0, .785 * fontSize), iq.fillText(ak.q7.a2o(s9), aPo, aQ1), iq.globalAlpha = 1
					}(aPo, aPp, fontSize, aC, aQ1, iq);
					a6f = ak.a2I.a2N[aC - 1024 + ak.q7.a2Z]
				} else a6f = 2 === eu ? aM.a9E()[4].canvas[+(el < 255)] : (3 === eu ? aM.a9E()[5] : aM.a9E()[6]).canvas[0];
				aC = ak.a2I.a2O, el = .8 * fontSize / aC, eu = aPo - .5 * el * aC - .534 * aQ1 * fontSize, aPo = aPp + 1.4 * el * aC;
				iq.setTransform(el, 0, 0, el, eu, aPo), iq.globalAlpha = aQ3(fontSize), iq.drawImage(a6f, 0, 0), iq.globalAlpha = 1, iq.setTransform(1, 0, 0, 1, 0, 0)
			}(aPo, aPp, fontSize, eu, aC, hD, aGl[aC + eu * aE.fh], iq), hD -= 2)
		}(aPo, aPp, fontSize, aC, iq), (aPr = aPG * fontSize) < aPI || (iq.font = bD.tO.ux(1, aPr), aPp += Math.floor(.78 * fontSize), aPa ? aPv(aC, aPr, aPo, aPp, iq) : aPu(iq, aC, aPr, aPo, aPp, aPq)))
	}

	function aPv(aC, fontSize, fr, ft, iq) {
		var ___id = aC;
		var showName = aC < aE.l6 || !__fx.settings.hideBotNames;
		var eliminationEstimate = __fx.settings.showEstimatedEliminationAttack ?
			__fx.utils.getEstimatedEliminationAttack(___id, ah.hm[___id] - ah.a7P[___id]) :
			"";
		if (showName) iq.fillText(ah.a2G[aC], fr, ft), aC < aE.l6 && 2 !== ah.a7G[aC] || (aC = fontSize / aPD[aC], iq.fillRect(fr - .5 * aC, ft + bD.tO.a2p * fontSize, aC, Math.max(1, .1 * fontSize)));
		aPa && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (iq.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			iq.fillText(__fx.utils.getDensity(___id), fr, showName ? ft + fontSize : ft),
			eliminationEstimate && iq.fillText(eliminationEstimate, fr, showName ? ft + 2 * fontSize : ft + fontSize)
		);
	}

	function aPu(iq, aC, fontSize, aPo, aPp, aPq) {
		var el, a7P = ah.a7P[aC],
			aQ0 = bD.pc.a35(ah.hm[aC] - a7P);

		function drawDensity() {
			var eliminationEstimate;
			!aPa && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (iq.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), iq.fillText(__fx.utils.getDensity(aC), aPo, aPp + fontSize), eliminationEstimate = __fx.settings
				.showEstimatedEliminationAttack ? __fx.utils.getEstimatedEliminationAttack(aC, ah.hm[aC] - a7P) : "") && iq.fillText(eliminationEstimate, aPo, aPp + 2 * fontSize)
		}
		a7P ? (el = iq.fillStyle, iq.fillStyle = aPt(fontSize, 2 + aPq % 2), iq.fillText(aQ0, aPo, aPp), iq.fillStyle = el) : aPq >> 1 & 1 ? (iq.lineWidth = .05 * fontSize, iq.strokeStyle = aPt(fontSize, aPq % 2), iq.strokeText(aQ0, aPo, aPp)) : (1 <
			aPq && (iq.lineWidth = .12 * fontSize, iq.strokeStyle = aPt(fontSize, aPq), iq.strokeText(aQ0, aPo, aPp)), iq.fillText(aQ0, aPo, aPp)), drawDensity()
	}

	function aPx(aPo, aPp, fontSize, aQ1, aQ2, iq) {
		var a9j = .95 * fontSize / aPS,
			aPo = aPo - .5 * a9j * aPR + .8 * aQ1 * fontSize,
			aQ1 = aPp - 1.76 * a9j * aPS - (.35 - bD.tO.a2p + .7) * aQ2 * fontSize;
		iq.setTransform(a9j, 0, 0, a9j, aPo, aQ1), iq.globalAlpha = aQ3(fontSize), iq.drawImage(ac.get(4), 0, 0), iq.globalAlpha = 1, iq.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aQ6(aPo, aPp, fontSize, s9, aQ1, iq) {
		var ij, a0t, a9j;
		iq.globalAlpha = aQ3(fontSize), ak.q7.a2x(s9) ? (ij = ak.a2I.a2O, iq.setTransform(a9j = 1.1 * fontSize / ij, 0, 0, a9j, a0t = aPo - .5 * a9j * ij - .8 * aQ1 * fontSize, a9j = aPp - 1.55 * a9j * ij), iq.drawImage(ak.a2I.a2N[s9 - 1024 + ak.q7
			.a2Z], 0, 0), iq.setTransform(1, 0, 0, 1, 0, 0)) : (a0t = aPo - .8 * aQ1 * fontSize, a9j = aPp - (.35 - bD.tO.a2p + 1) * fontSize, iq.fillText(ak.q7.a2o(s9), a0t, a9j)), iq.globalAlpha = 1
	}

	function aPt(fontSize, aPq) {
		return aPF <= fontSize && fontSize < aPE ? bj.aQ8[aPq] + aQ3(fontSize).toFixed(3) + ")" : bj.aQ9[aPq]
	}

	function aQ3(fontSize) {
		return aPF <= fontSize && fontSize < aPE ? 1 - (fontSize - aPF) / (aPE - aPF) : 1
	}

	function aQI(ip, j) {
		return 1 + Math.floor(aPH * ip * j)
	}

	function aQF(aC) {
		for (var left = aP8[aC], g3 = aP8[aC] - ah.je[aC] - 1; 0 <= g3; g3--)
			if (!aQK(aC, --left, aP9[aC], aPB[aC])) {
				left++;
				break
			} var right = aP8[aC];
		for (g3 = ah.jf[aC] - aP8[aC] - aPA[aC]; 0 <= g3; g3--)
			if (!aQK(aC, ++right + aPA[aC] - 1, aP9[aC], aPB[aC])) {
				right--;
				break
			} var fr = Math.floor((left + right) / 2),
			top = aP9[aC];
		for (g3 = aP9[aC] - ah.jg[aC] - 1; 0 <= g3; g3--)
			if (!aQL(aC, fr, --top, aPA[aC])) {
				top++;
				break
			} var bottom = aP9[aC];
		for (g3 = ah.jh[aC] - aP9[aC] - aPB[aC]; 0 <= g3; g3--)
			if (!aQL(aC, fr, ++bottom + aPB[aC] - 1, aPA[aC])) {
				bottom--;
				break
			} var ft = Math.floor((top + bottom) / 2);
		aQC(aC, fr, ft, aPA[aC], aPB[aC]) && (aP8[aC] = fr, aP9[aC] = ft)
	}

	function aQC(player, fr, ft, j, k) {
		fn = Math.floor(.2 * j);
		for (var fn, eu = fr + j - 1; fr <= eu; eu--)
			if (!aQK(player, eu, ft, k)) return;
		for (eu = ft + k - 1 - (fn = (fn = Math.floor(.25 * k)) < 1 ? 1 : fn); ft + fn <= eu; eu--)
			if (!aQL(player, fr, eu, j)) return;
		return 1
	}

	function aQK(player, fr, ft, k) {
		return ad.a1l(player, 4 * (ft * bV.fv + fr)) && ad.a1l(player, 4 * ((ft + k - 1) * bV.fv + fr))
	}

	function aQL(player, fr, ft, j) {
		return ad.a1l(player, 4 * (ft * bV.fv + fr)) && ad.a1l(player, 4 * (ft * bV.fv + fr + j - 1))
	}
	this.dv = function() {
		if (aPa = bm.buffer.data[7].value || 8 === aE.lO, aPN = !1, aPJ = .88, aPG = .5, aPH = 1.8, aPI = 12 - 3 * bm.buffer.data[9].value, aP7 = aP6 = 0, aP8 = new Uint16Array(aE.fh), aP9 = new Uint16Array(aE.fh), aPA = new Uint16Array(aE.fh),
			aPB = new Uint16Array(aE.fh), aPC = new Float32Array(aE.fh), aPD = new Float32Array(aE.fh), aPQ = new Uint16Array(2 * aE.fh), aGl = new Uint8Array(5 * aE.fh), aPY = new Uint8Array(aE.fh), aPZ = new Uint8Array(aE.fh), aPO = aPO ||
			document.createElement("canvas"), tR(), aPL = aPK = 0, aPM = 1, aPa) {
			var aC, aPg;
			for (aPb(), yw.font = bD.tO.ux(1, 100), aPg = 100 / Math.floor(yw.measureText("900 000").width), aC = aE.fh - 1; 0 <= aC; aC--) aPC[aC] = Math.min(aPg, 2 * aPD[aC]);
			aPX = aPg, aPW[0] = 100 / (aPg * Math.floor(yw.measureText("5 000 000").width)), aPW[1] = 100 / (aPg * Math.floor(yw.measureText("50 000 000").width)), aPW[2] = 100 / (aPg * Math.floor(yw.measureText("500 000 000").width)), aPW[3] =
				100 / (aPg * Math.floor(yw.measureText("1 000 000 000").width))
		} else aPb();
		! function() {
			var aC;
			for (aC = aE.fh - 1; 0 <= aC; aC--) ah.hY[aC] < 12 ? (aP8[aC] = ah.je[aC] + 1, aP9[aC] = ah.jg[aC] + 1, aPA[aC] = 1, aPB[aC] = 1) : (aP8[aC] = ah.je[aC], aP9[aC] = ah.jg[aC] + 1, aPA[aC] = 4, aPB[aC] = 2);
			if (aE.i9)
				for (aC = 0; aC < aE.l6; aC++) aPA[aC] = 0;
			aPR = ac.get(4).width, aPS = ac.get(4).height
		}()
	}, this.aOs = function(hI, a8x) {
		a8x > 18 * ah.hY[hI] ? (aPZ[hI] = 6, ad.aCY[hI] = 2 + ad.aCY[hI] % 2) : (aPY[hI] = 4, (ad.aCY[hI] < 2 || 3 < ad.aCY[hI]) && (ad.aCY[hI] = 6 + ad.aCY[hI] % 2))
	}, this.sM = function(hI, a8x) {
		a8x > 6 * ah.hY[hI] ? (aPZ[hI] = 6, ad.aCY[hI] = 4 + ad.aCY[hI] % 2) : (aPY[hI] = 4, (ad.aCY[hI] < 4 || 5 < ad.aCY[hI]) && (ad.aCY[hI] = 8 + ad.aCY[hI] % 2))
	}, this.resize = function() {
		tR(), aPf(aPP)
	}, this.a8H = function() {
		for (var aC = 0; aC < aE.l6; aC++) ah.jf[aC] - ah.je[aC] != 3 || ah.jh[aC] - ah.jg[aC] != 3 ? (aP8[aC] = ah.je[aC] + (ah.jf[aC] !== ah.je[aC] ? 1 : 0), aP9[aC] = ah.jg[aC], aPA[aC] = 1, aPB[aC] = 1) : (aP8[aC] = ah.je[aC], aP9[aC] = ah
			.jg[aC] + 1, aPA[aC] = 4, aPB[aC] = 2)
	}, this.sz = function(player, eT, aPj) {
		! function(player, eT, aPj) {
			player += eT * aE.fh;
			0 === eT ? aPQ[player] === aPj && 0 < aGl[player] ? aGl[player] = 0 : (aPQ[player] = aPj, aGl[player] = ak.q7.a2w(aPj) ? 255 : 64) : 1 === eT ? (aGl[player] = 64, aPQ[player] = aPj) : aGl[player] = aPj
		}(player, eT, aPj), 2 === aE.a3m && this.nU(!0)
	}, this.yv = function() {
		aPN && (1 !== aPM ? (yw.imageSmoothingEnabled = !0, yw.setTransform(aPM, 0, 0, aPM, 0, 0), yw.drawImage(aPO, -aPK / aPM, -aPL / aPM), yw.setTransform(1, 0, 0, 1, 0, 0), yw.imageSmoothingEnabled = !1) : yw.drawImage(aPO, -aPK, -aPL))
	}, this.aDK = function(j8, jB) {
		aPK += j8, aPL += jB
	}, this.a5L = function(j8, jB) {
		ag.aDK(j8, jB)
	}, this.zoom = function(a6E, mL, mM) {
		aPM *= a6E, aPK = (aPK + mL) * a6E - mL, aPL = (aPL + mM) * a6E - mM
	}, this.aNF = function(player) {
		var je = ah.je[player],
			jf = ah.jf[player],
			jg = ah.jg[player],
			jh = ah.jh[player],
			jJ = bP.i1(0),
			jK = bP.i3(0),
			jL = bP.i1(i.j),
			jM = bP.i3(i.k);
		je < jL && jJ < jf && jg < jM && jK < jh && (aPA[player] = 0, aPV = !0)
	}, this.nU = function(c3) {
		return !(!aPV && !c3 && bi.ek < aPU + (1 === aPM && 0 === aPK && 0 === aPL && (aE.a8l() || aE.i9 || 2 === aE.a3m) ? 1e3 : aEc) || (aPf(aPP), 0))
	}, this.aPm = function(aC) {
		return aPh(aC) * aPC[aC]
	}, this.aPn = function(player) {
		return aPC[player]
	}, this.ep = function() {
		bi.l3() % 10 == 9 && (aPV = aPV || aE.a8n() && !aE.a8l()), !aE.a8l() && 4 <= ++aP7 && function() {
			var aC, g3, g4;
			for (aP7 = 0, g4 = 4; 1 <= g4; g4--)
				for (g3 = am.lc - 1; 0 <= g3; g3--) aC = am.lh[g3] + g4 * aE.fh, 0 < aGl[aC] && aGl[aC] < 255 && aGl[aC]--;
			if (2 !== aE.a3m)
				for (g3 = am.lc - 1; 0 <= g3; g3--) aC = am.lh[g3], 0 < aGl[aC] && aGl[aC] < 255 && aGl[aC]--
		}();
		var aC, g3, fk = Math.floor(.1 * am.lc);
		for (fk = (fk = fk < 8 ? 8 : fk) > am.lc ? am.lc : fk, aC = aP6 + fk - 1; aP6 <= aC; aC--) g3 = aC % am.lc, ! function(aC) {
			var ip = aPh(aC) * aPC[aC];
			0 < aPA[aC] && aQC(aC, aP8[aC], aP9[aC], aPA[aC], aPB[aC]) ? ! function(aC) {
				for (var fr, ft, j, k, fO = !1, g4 = 0; g4 < 8; g4++) {
					if (j = aPA[aC] + 2, k = aPB[aC] + 2, j > ah.jf[aC] - ah.je[aC] + 1 || k > ah.jh[aC] - ah.jg[aC] + 1) return fO;
					if (fr = aP8[aC] - 1, ft = aP9[aC] - 1, !aQC(aC, fr, ft, j, k)) return fO;
					aP8[aC] = fr, aP9[aC] = ft, aPA[aC] = j, aPB[aC] = k, fO = !0
				}
				return fO
			}(aC) && function(aC, ip) {
				for (var fr, ft, j, k, fO = !1, aGu = aPA[aC], oL = 1 + Math.floor(.02 * aGu), g4 = 1; g4 < 5; g4++) {
					if ((j = aGu + g4 * oL) > ah.jf[aC] - ah.je[aC] + 1) return fO;
					if ((k = aQI(ip, j)) > ah.jh[aC] - ah.jg[aC] + 1) return fO;
					fr = ah.je[aC] + Math.floor(Math.random() * (ah.jf[aC] - ah.je[aC] + 2 - j)), ft = ah.jg[aC] + Math.floor(Math.random() * (ah.jh[aC] - ah.jg[aC] + 2 - k)), aQC(aC, fr, ft, j, k) && (aP8[aC] = fr, aP9[aC] = ft, aPA[
						aC] = j, aPB[aC] = k, fO = !0)
				}
				return fO
			}(aC, ip) && aQF(aC) : ! function(aC, ip) {
				var k, fr = aP8[aC] + 1,
					ft = aP9[aC] + 1,
					j = aPA[aC] - 2;
				for (;;) {
					if (j < 1) {
						aPA[aC] = 0;
						break
					}
					if (k = aQI(ip, j), aQC(aC, fr, ft, j, k)) return aP8[aC] = fr, aP9[aC] = ft, aPA[aC] = j, aPB[aC] = k, 1;
					fr++, ft++, j -= 2
				}
				return
			}(aC, ip) ? function(aC, ip) {
				var fr, ft, j, k, g4, oR, kM = ah.jf[aC] - ah.je[aC] + 1,
					aQJ = Math.floor(.02 * kM);
				for (oR = -6 * (aQJ = aQJ < 1 ? 1 : aQJ), g4 = kM; oR <= g4; g4 -= aQJ)
					if (k = aQI(ip, j = 0 < g4 ? g4 : 1), fr = ah.je[aC] + Math.floor(Math.random() * (ah.jf[aC] - ah.je[aC] + 2 - j)), ft = ah.jg[aC] + Math.floor(Math.random() * (ah.jh[aC] - ah.jg[aC] + 2 - k)), aQC(aC, fr, ft, j, k))
						return aP8[aC] = fr, aP9[aC] = ft, aPA[aC] = j, aPB[aC] = k
			}(aC, ip) : aQF(aC)
		}(am.lh[g3]);
		aP6 = (aP6 += fk) % am.lc
	}, this.nO = function() {
		var aC, hI, a2u, a2v;
		if (bi.l3() % 4 == 1)
			for (aC = am.lc - 1; 0 <= aC; aC--) hI = am.lh[aC], ad.aCY[hI] < 2 || ((a2u = Math.max(aPY[hI] - 1, 0)) === (a2v = Math.max(aPZ[hI] - 1, 0)) ? 0 === a2u && (ad.aCY[hI] %= 2) : 0 === a2v && ad.aCY[hI] < 6 && (ad.aCY[hI] += 4), aPY[
				hI] = a2u, aPZ[hI] = a2v)
	}, this.aAT = function(player) {
		var aC = player + 2 * aE.fh,
			el = aGl[aC];
		return 0 < el && (aO.a3u(50, player), aGl[aC] = 0, 255 === el)
	}, this.a9T = function(player) {
		return 255 === aGl[player + 2 * aE.fh]
	}
}

function cm() {
	var aQM, aQN, aQO;
	this.dv = function() {
		aQM =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aQN =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aQO = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aAl = ["K ", " Y", "E ", " Z", " z", " s", "S "], aIC = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aQM.length - 1; 0 <= aC; aC--)
			for (var g3 = aAl.length - 1; 0 <= g3; g3--) aQM[aC] = aQM[aC].replace(aAl[g3], aIC[g3]);
		if (__fx.settings.realisticNames) aQM = realisticNames;
	}, this.a8Y = function() {
		var fk = aE.l6,
			a2G = ah.a2G,
			a4W = ah.a4W,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fk)
			for (var aC = 0; aC < fk; aC++) a2G[aC] = a4W[aC] = "Player " + az.kN(1e3);
		else
			for (aC = 0; aC < fk; aC++) a2G[aC] = a4W[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.lO) {
			for (var eS = az.random(), aQU = aQO, aQV = aQN, iU = aF.iU, fk = aQU.length, m1 = aE.data.teamPlayerCount[7], a2G = ah.a2G, a4W = ah.a4W, aC = m1 - 1; aC >= aE.l6; aC--) a2G[aC] = a4W[aC] = aQU[(aC + eS) % fk];
			for (fk = aQV.length - 1, aC = m1; aC < aE.fh; aC++) a2G[aC] = a4W[aC] = aQV[iU[aC] ? fk : aC % fk]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fk = aE.fh, a2G = ah.a2G, a4W = ah.a4W, playerNamesData = aE.data.playerNamesData, aC = aE.l6; aC < fk; aC++) a2G[aC] = a4W[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var a2G = ah.a2G, a4W = ah.a4W, aC = aE.l6; aC < aE.fh; aC++) a2G[aC] = a4W[aC] = "Bot " + az.kN(1e3)
		} : function() {
			for (var aQW = aQM, fk = aQW.length, eS = az.random(), a2G = ah.a2G, a4W = ah.a4W, aC = aE.l6; aC < aE.fh; aC++) a2G[aC] = a4W[aC] = aQW[(aC + eS) % fk]
		})()
	}
}

function d5() {
	this.aQX = [], this.aQY = [], this.dv = function() {
		this.aQX = [], this.aQY = []
	}, this.ep = function() {
		0 <= this.aQX.length && this.aQZ(this.aQX), 0 <= this.aQY.length && this.aQZ(this.aQY)
	}, this.aQZ = function(h) {
		for (var g4 = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].ek--, h[aC].ek <= 0) {
				g4 = aC;
				break
			} for (aC = g4; 0 <= aC; aC--) h.shift()
	}, this.a9M = function(id, x0, aQa) {
		return this.g5(this.aQX, id, x0, aQa)
	}, this.aQb = function(id, x0, aQa) {
		return this.g5(this.aQY, id, x0, aQa)
	}, this.g5 = function(h, id, x0, aQa) {
		return ! function(h, id, x0) {
			var aC, ie;
			for (aC = x0.length - 1; 0 <= aC; aC--)
				for (ie = h.length - 1; 0 <= ie; ie--)
					if (h[ie].player === x0[aC] && id === h[ie].id) return 1;
			return
		}(h, id, x0) && (aQa && function(h, id, x0) {
			var aC;
			for (aC = x0.length - 1; 0 <= aC; aC--) h.push({
				player: x0[aC],
				id: id,
				ek: 384
			})
		}(h, id, x0), !0)
	}
}

function cl() {
	this.a4W = new Array(aE.fh), this.a2G = new Array(aE.fh), this.a7G = new Uint8Array(aE.fh), this.ni = new Uint8Array(aE.fh), this.je = new Uint16Array(aE.fh), this.jg = new Uint16Array(aE.fh), this.jf = new Uint16Array(aE.fh), this.jh =
		new Uint16Array(aE.fh), this.hY = new Uint32Array(aE.fh), this.a1L = new Uint32Array(aE.fh), this.hm = new Uint32Array(aE.fh), this.hC = null, this.hQ = null, this.hR = null, this.g9 = null, this.sp = new Uint16Array(aE.fh), this.k9 =
		new Uint16Array(aE.fh), this.kA = new Uint16Array(aE.fh), this.a4R = new Uint16Array(aE.fh), this.a4P = new Uint8Array(aE.fh), this.a7P = new Uint16Array(aE.fh), this.dv = function() {
			this.a4W.fill(""), this.a2G.fill(""), this.a7G.fill(0), this.ni.fill(0), this.je.fill(0), this.jg.fill(0), this.jf.fill(0), this.jh.fill(0), this.hY.fill(0), this.a1L.fill(0), this.hm.fill(0), this.hC = new Array(aE.fh), this.hQ =
				new Array(aE.fh), this.hR = new Array(aE.fh), this.g9 = new Array(aE.fh), this.sp.fill(0), this.k9.fill(0), this.kA.fill(0), this.a4R.fill(0), this.a4P.fill(0), this.a7P.fill(0)
		}
}

function d3() {
	this.aHL = function(player) {
		aH.nh(player), aE.a3o++, ah.a7G[player] = 2, ah.a4R[player] = bl.a4f.aNO(), player === aE.fU && (aY.show(!1, !1), aX.aFJ(), bU.a3Y.a4M()), ag.aAT(player)
	}
}

function ce() {
	this.lh = null, this.lc = 0, this.a8c = function() {
		for (this.lc = 0, aC = aE.fh - 1; 0 <= aC; aC--) 0 !== ah.ni[aC] && this.lc++;
		this.lh = new Uint16Array(this.lc);
		for (var fk = 0, aC = 0; aC < aE.fh; aC++) 0 !== ah.ni[aC] && (this.lh[fk++] = aC)
	}, this.nN = function() {
		for (var hY = ah.hY, a1L = ah.a1L, a4P = ah.a4P, lh = am.lh, aC = am.lc - 1; 0 <= aC; aC--) {
			var hI = lh[aC],
				el = hY[hI],
				m1 = a1L[hI];
			el <= bO.gB(m1, 4) ? al.e3(hI) : m1 <= el ? 250 <= (a1L[hI] = el) && (a4P[hI] = 1) : a1L[hI] = m1 - Math.max(1, bO.gB(m1 - el, 1e3))
		}
		this.aQf()
	}, this.aQf = function() {
		for (var ni = ah.ni, m0 = this.lh, aG1 = this.lc, aC = aG1 - 1; 0 <= aC; aC--) 0 === ni[m0[aC]] && (m0[aC] = m0[--aG1]);
		this.lc = aG1
	}
}

function cf() {
	var aQg = new Uint16Array(aE.fh),
		aQh = 0;

	function aQl(aAa, aQj) {
		var eu = bi.l3();
		return 3213 <= eu ? 4 + bO.gB(100 * aQj, af.km(aAa)) : (aAa = 1 + bO.gB(aE.kq, 300), eu < 357 ? 2 + bO.gB(100 * aQj, aAa) : eu < 714 ? 2 + bO.gB(100 * aQj, 4 * aAa) : eu < 1071 ? 2 + bO.gB(100 * aQj, 10 * aAa) : eu < 2142 ? 2 + bO.gB(100 *
			aQj, 30 * aAa) : 2 + bO.gB(100 * aQj, 100 * aAa))
	}

	function aQk(aAa) {
		return aE.lQ || 4284 <= bi.l3() || bD.h6.kT(aAa)
	}
	this.dv = function() {
		aQg.fill(0), aQh = 15
	}, this.iP = function(ry) {
		var player = aE.fU;
		return !!bD.h6.sr(player, ry) && !(!bD.h6.sH(player, bD.h6.jN(player, aS.iF()), ry) || (player = ry, ry = bR.gH[0], !aQk(player) && aQg[player] + aQl(player, ry) > aQh))
	}, this.et = function(aAa, aQj) {
		if (!aQk(aAa)) {
			aQj = aQl(aAa, aQj);
			if (aQg[aAa] + aQj > aQh) return !1;
			aQg[aAa] += aQj
		}
		return !0
	}, this.ep = function() {
		bi.l3() % 100 == 99 && (bi.l3() < 1071 ? aQh += 4 : bi.l3() < 2142 ? aQh += 6 : bi.l3() < 3213 ? aQh += 8 : aQh += 10)
	}
}

function cn() {
	var aQm;
	this.lX = null, this.lW = 0, this.dv = function() {
		aQm = [], 9 === aE.lO && this.aQn()
	}, this.aQn = function() {
		this.lX = [0, 0, 0, 0, 0, 0];
		for (var aQo = [254, 227, 167, 149, 102, this.lW = 0, 0, 0], aQp = [0, 8, 24, 30, 46, 80, 256, 333], aQq = [0, 0, 3, 9, 17, 25, 150, 179], k = aE.l6, aC = 1; aC < aQo.length; aC++)
			if (k <= aQp[aC]) {
				this.lW = aQo[aC - 1] - bO.gB((k - aQp[aC - 1]) * (aQo[aC - 1] - aQo[aC]), aQp[aC] - aQp[aC - 1]), this.lX[5] = aQq[aC - 1] - bO.gB((k - aQp[aC - 1]) * (aQq[aC - 1] - aQq[aC]), aQp[aC] - aQp[aC - 1]), this.lX[0] = aE.fh - k - this
					.lW - this.lX[5];
				break
			} aE.lS = aE.fh - aE.l6, aE.data.numberTeams = (0 < aE.l6) + (0 < aE.lS), aE.data.playerCount = aE.a0r = aE.l6 + aE.lS, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.l6 + this.lW, aE.lS - this.lW]), aE.a8Q.a8W()
	}, this.aNV = function(player) {
		aQm.push({
			player: player,
			hD: 14 + az.kN(20)
		})
	}, this.ep = function() {
		if (9 === aE.lO)
			for (var aC = aQm.length - 1; 0 <= aC; aC--) --aQm[aC].hD <= 0 && (ag.sz(aQm[aC].player, 0, ak.q7.a2c + ak.q7.a2q), aQm.splice(aC, 1))
	}
}

function dM() {
	this.aQs = 37, this.aQt = 25, this.aNh = 4096, this.fv = 0, this.fw = 0, this.a1r = null, this.aBL = null, this.aQu = null, this.aQv = null, this.fQ = 0, this.mapSeed = 0, this.aLi = !1, this.aQw = new aQx, this.xH = new aQy, this.aAt = new aQz,
		this.aJO = new aR0, this.aJP = new aR1;
	var aR2 = {
		aR3: function() {},
		dv: function() {}
	};

	function aRB() {
		return {
			fv: bV.fv,
			fw: bV.fw,
			a1r: bV.a1r,
			aBL: bV.aBL,
			aQu: bV.aQu,
			aQv: bV.aQv,
			fQ: bV.fQ,
			mapSeed: bV.mapSeed,
			aLi: bV.aLi
		}
	}

	function aRC(gC) {
		bV.fv = gC.fv, bV.fw = gC.fw, bV.a1r = gC.a1r, bV.aBL = gC.aBL, bV.aQu = gC.aQu, bV.aQv = gC.aQv, bV.fQ = gC.fQ, bV.mapSeed = gC.mapSeed, bV.aLi = gC.aLi
	}

	function aR5(aC) {
		return !(1 === aC || !bV.aIR(aC) || aC === bV.aRG())
	}
	this.dv = function() {
		this.xH.dv()
	}, this.a8 = function(map, aR4) {
		((map %= this.aQs) !== this.fQ || aR5(this.fQ) && aR4 !== this.mapSeed) && (this.aLi = !1, this.aQw.aR3(), az.a8X(map), this.fQ = map, this.mapSeed = aR4, aR5(map) && (bV.xH.aAn[map].aR6 = aR4), this.aIR(this.fQ) ? (map = bV.xH.aAn[this
			.fQ], this.fv = map.j, this.fw = map.k, az.a8X(map.aR6), ar.a8([this.fv, this.fw, map.nn, map.nk]), aR7(), aq.aR8(), ar.aR9()) : this.aJO.a8(this.fQ) || console.log("map not loaded: " + this.fQ))
	}, this.aRA = function(map, aR4) {
		var gT = aRB(),
			map = (this.a8(map, aR4), this.aQw.aR3(), aRB());
		return aRC(gT), map
	}, this.aJV = function(map, aR4) {
		var gT = aRB(),
			aR6 = az.aRD(),
			aRE = this.xH.aAn[map].aR6,
			aRF = this.aQw,
			aR4 = (this.aQw = aR2, this.a8(map, aR4), this.a1r);
		return this.aQw = aRF, this.xH.aAn[map].aR6 = aRE, az.a8X(aR6), aRC(gT), aR4
	}, this.a8t = function(canvas) {
		canvas && this.a1r !== canvas && (this.fv = canvas.width, this.fw = canvas.height, this.a1r = canvas, this.aBL = this.a1r.getContext("2d", {
			alpha: !1
		}), this.im = this.aBL.getImageData(0, 0, this.fv, this.fw), this.aQv = this.im.data, this.fQ = this.aRG(), this.mapSeed = 0, bV.xH.aAn[this.fQ].name = aE.data.mapName)
	}, this.fP = function(aC) {
		return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aRG()
	}, this.aRH = function(aC) {
		return 2 === aC || 7 === aC || 9 === aC || 20 === aC
	}, this.aRI = function(aC) {
		return 1 === aC
	}, this.aRG = function() {
		return this.aQs
	}, this.aIR = function(aC) {
		return void 0 === this.xH.aAn[aC].aRJ
	}, this.aJI = aR5, this.a8s = function(q5) {
		return 0 === q5.mapType ? q5.mapProceduralIndex < 10 ? q5.mapProceduralIndex : 10 + q5.mapProceduralIndex : 1 === q5.mapType ? 10 <= q5.mapRealisticIndex ? 22 + q5.mapRealisticIndex - 10 : q5.mapRealisticIndex + 10 : void 0
	}, this.aIS = function(q5, aRK) {
		0 === q5.mapType ? q5.mapProceduralIndex = aRK < 10 ? aRK : aRK - 10 : 1 === q5.mapType && (q5.mapRealisticIndex = aRK - (22 <= aRK ? 12 : 10))
	}
}

function aQx() {
	function aRV() {
		bV.aQw.ep()
	}

	function aRa(hI, aRZ) {
		0 < aRZ && (bV.aQv[hI] += aRZ, bV.aQv[hI + 1] += aRZ, bV.aQv[hI + 2] += aRZ)
	}

	function j2(hI) {
		return bV.aQv[hI + 2] > bV.aQv[hI] && bV.aQv[hI + 2] > bV.aQv[hI + 1]
	}
	this.aDW = -1, this.a4s = 0, this.aRL = 0, this.aRM = 8, this.aRN = 32, this.aRO = 8, this.aRP = 32, this.aRQ = [0, 0], this.aCY = [0, 0, 0, 0], this.jY = null, this.aRR = !0, this.aRS = !1, this.aR3 = function() {
		-1 !== this.aDW && clearTimeout(this.aDW), this.aDW = -1, this.jY = null, ar.aR9()
	}, this.dv = function() {
		7 === ab.a4y() || this.aRS || (this.aRR = !0, this.a4s = 0, this.aRL = 1, this.aRQ = [bV.xH.aAn[bV.fQ].aRT[0], bV.xH.aAn[bV.fQ].aRU[0]], this.aCY = [bV.xH.aAn[bV.fQ].aRJ[3], bV.xH.aAn[bV.fQ].aRJ[4], bV.xH.aAn[bV.fQ].aRJ[5], bV.xH.aAn[bV
			.fQ].aRJ[6]], this.aRM = bV.xH.aAn[bV.fQ].aRJ[7], this.aRN = bV.xH.aAn[bV.fQ].aRJ[8], this.aRO = bV.xH.aAn[bV.fQ].aRJ[9], this.aRP = bV.xH.aAn[bV.fQ].aRJ[10], this.aRR ? this.aDW = setTimeout(aRV, 16) : this.ep())
	}, this.ep = function() {
		if (8 === ab.a4y() && aI.o1()) this.aDW = setTimeout(aRV, 16);
		else {
			if (0 === this.a4s) {
				var aR6 = az.aRD();
				if (az.a8X(bV.xH.aAn[bV.fQ].aRJ[2]), ar.a8([bV.fv, bV.fw, bV.xH.aAn[bV.fQ].aRJ[0], bV.xH.aAn[bV.fQ].aRJ[1]]), az.a8X(aR6), this.jY = ar.aRW(), this.a4s++, this.aRR) return void(this.aDW = setTimeout(aRV, 16))
			}
			for (var hI, fW, aR6 = this.aRR ? 10 : 1e6, aR6 = bV.fw - this.aRL - 1 < aR6 ? bV.fw - this.aRL - 1 : aR6, a1Y = this.aRL + aR6, ft = this.aRL; ft < a1Y; ft++)
				for (var fr = 1; fr < bV.fv - 1; fr++) j2(hI = 4 * (fW = fr + ft * bV.fv)) ? this.aRX(hI, fW, 1) : (this.aRX(hI, fW, 0), function(fr, ft, hI) {
					return 1 < fr && j2(hI - 4) || fr < bV.fv - 2 && j2(hI + 4) || 1 < ft && j2(hI - 4 * bV.fv) || ft < bV.fw - 2 && j2(hI + 4 * bV.fv)
				}(fr, ft, hI) && this.aRY(fr, ft));
			this.aRL = a1Y, this.aRL >= bV.fw - 1 ? (bV.aBL.putImageData(bV.aQu, 0, 0, 1, 1, bV.fv - 2, bV.fw - 2), bi.e2 = !0, this.aR3()) : this.aRR && (this.aDW = setTimeout(aRV, 16))
		}
	}, this.aRX = function(hI, fW, eT) {
		aRa(hI, Math.floor(this.aRQ[eT] + this.aCY[eT] * this.jY[fW] / 1e4) - bV.aQv[hI])
	}, this.aRb = function(hI, eS, aRc, eT, aCY) {
		aRa(hI, Math.floor(this.aRQ[eT] + (1 - eS / aRc) * aCY) - bV.aQv[hI])
	}, this.aRY = function(mL, mM) {
		for (var hI, eS, aRc, aDM = mL - this.aRN, aRd = mM - this.aRN, a1Z = mL + this.aRN, a1Y = mM + this.aRN, aDM = aDM < 1 ? 1 : aDM, a1Z = a1Z > bV.fv - 2 ? bV.fv - 2 : a1Z, a1Y = a1Y > bV.fw - 2 ? bV.fw - 2 : a1Y, ft = aRd < 1 ? 1 :
			aRd; ft <= a1Y; ft++)
			for (var fr = aDM; fr <= a1Z; fr++) j2(hI = 4 * (fr + ft * bV.fv)) ? (aRc = this.aRM + (this.aRN - this.aRM) * this.jY[fr + bV.fv * ft] / 1e4, Math.abs(mL - fr) > aRc || Math.abs(mM - ft) > aRc || aRc <= (eS = Math.sqrt((mL - fr) * (
				mL - fr) + (mM - ft) * (mM - ft))) || this.aRb(hI, eS, aRc, 1, this.aCY[3])) : (aRc = this.aRO + (this.aRP - this.aRO) * this.jY[fr + bV.fv * ft] / 1e4, Math.abs(mL - fr) > aRc || Math.abs(mM - ft) > aRc || aRc <= (eS = Math
				.sqrt((mL - fr) * (mL - fr) + (mM - ft) * (mM - ft))) || this.aRb(hI, eS, aRc, 0, this.aCY[2]))
	}
}

function aR7() {
	var vG = aRe(bV.fQ);
	vG && aRf(vG[0], vG[1], vG[2], vG[3], vG[4])
}

function aRe(fQ) {
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

function aRf(aRg, aRh, aRi, aRj, aRk) {
	for (var fr, ft, aO3, aO4, a6E, aRn, j7 = aRg.length - 1, aRl = bV.fv + bV.fw, fk = (aRl *= aRl, aRi.length), aRm = Array(fk), aC = fk - 1; 0 <= aC; aC--) aRm[aC] = aRi[aC] * aRi[aC];
	var aRo = new Array(fk),
		aGi = new Array(fk),
		aRp = new Array(fk),
		gC = ar.aRW();
	if (void 0 === aRk)
		for (aRk = new Array(fk), aC = fk - 1; 0 <= aC; aC--) aRk[aC] = 0;
	for (aC = 1; aC < fk; aC++) aRo[aC] = aRm[aC] - aRm[aC - 1], aGi[aC] = aRj[aC] - aRj[aC - 1], aRp[aC] = aRk[aC] - aRk[aC - 1];
	for (fr = bV.fv - 1; 0 <= fr; fr--)
		for (ft = bV.fw - 1; 0 <= ft; ft--) {
			for (aO3 = aRl, aC = j7; 0 <= aC; aC--) aO3 = (aO4 = (fr - aRg[aC]) * (fr - aRg[aC]) + (ft - aRh[aC]) * (ft - aRh[aC])) < aO3 ? aO4 : aO3;
			for (a6E = aRj[fk - 1], aRn = aRk[fk - 1], aC = 1; aC < fk; aC++)
				if (aO3 < aRm[aC]) {
					a6E = aRj[aC - 1] + aMp((aO3 - aRm[aC - 1]) * aGi[aC], aRo[aC]), aRn = aRk[aC - 1] + aMp((aO3 - aRm[aC - 1]) * aRp[aC], aRo[aC]);
					break
				} aRq(bV.fv * ft + fr, a6E, aRn, gC)
		}
}

function aRq(eT, a6E, aRn, gC) {
	a6E < 500 ? gC[eT] = bO.gB(gC[eT] * a6E * 2, 1e3) : 500 < a6E && (gC[eT] += bO.gB(2 * (1e4 - gC[eT]) * (a6E - 500), 1e3)), gC[eT] += bO.gB(aRn * (10 * a6E - gC[eT]), 1e3)
}

function cp() {
	var aRr;

	function aS1(a6f, ip, fr, ft, globalAlpha) {
		bV.aBL.save(), bV.aBL.globalAlpha = globalAlpha, bV.aBL.imageSmoothingEnabled = !1, bV.aBL.scale(ip, ip), bV.aBL.drawImage(a6f, Math.floor(fr * (bV.fv / ip - a6f.width)), Math.floor(ft * (bV.fw / ip - a6f.height))), bV.aBL.restore()
	}
	this.aAq = 0, this.aAr = 0, this.aAs = 0, this.aAt = 0, this.dv = function() {
		(aRr = new Array(bV.aQs))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eS: [220, 250, 255, 220],
			vt: [190, 220, 0, 0],
			g4: [170, 200, 0, 0]
		}, aRr[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eS: [25, 0, 100, 0, 25],
			vt: [25, 0, 0, 0, 25],
			g4: [25, 0, 0, 0, 25]
		}, aRr[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eS: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			vt: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			g4: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aRr[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eS: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			vt: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			g4: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aRr[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eS: [10, 10, 20, 10, 10, 170, 212],
			vt: [20, 20, 60, 100, 100, 110, 170],
			g4: [70, 70, 160, 30, 30, 60, 120]
		}, aRr[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eS: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			vt: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			g4: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aRr[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eS: [10, 10, 60, 255, 255, 200, 200],
			vt: [10, 10, 60, 255, 255, 200, 200],
			g4: [80, 80, 255, 255, 255, 200, 200]
		}, aRr[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eS: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			vt: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			g4: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aRr[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eS: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			vt: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			g4: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aRr[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eS: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			vt: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			g4: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aRr[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eS: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			vt: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			g4: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aRr[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eS: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			vt: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			g4: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aR8 = function() {
		var aS0, aC, g3, gT, im = function() {
				var im;
				return bV.a1r = document.createElement("canvas"), bV.a1r.width = bV.fv, bV.a1r.height = bV.fw, bV.aBL = bV.a1r.getContext("2d", {
					alpha: !1,
					willReadFrequently: !0
				}), im = bV.aBL.getImageData(0, 0, bV.fv, bV.fw), bV.aQv = im.data, im
			}(),
			j = aRr[bV.fQ].j,
			eS = aRr[bV.fQ].eS,
			vt = aRr[bV.fQ].vt,
			g4 = aRr[bV.fQ].g4,
			gC = ar.aRW(),
			fk = j.length - 2,
			aRv = new Array(1 + fk),
			aRw = new Array(1 + fk),
			aRx = new Array(1 + fk),
			aRy = new Array(1 + fk);
		for (g3 = fk; 0 <= g3; g3--) aRv[g3] = j[g3 + 1] - j[g3], aRw[g3] = eS[g3 + 1] - eS[g3], aRx[g3] = vt[g3 + 1] - vt[g3], aRy[g3] = g4[g3 + 1] - g4[g3];
		for (aC = bV.fv * bV.fw - 1; 0 <= aC; aC--)
			for (g3 = fk; 0 <= g3; g3--)
				if (gC[aC] >= j[g3]) {
					gT = gC[aC] - j[g3], bV.aQv[4 * aC] = eS[g3] + aMp(aRw[g3] * gT, aRv[g3]), bV.aQv[4 * aC + 1] = vt[g3] + aMp(aRx[g3] * gT, aRv[g3]), bV.aQv[4 * aC + 2] = g4[g3] + aMp(aRy[g3] * gT, aRv[g3]), bV.aQv[4 * aC + 3] = 255;
					break
				} bV.aBL.putImageData(im, 0, 0), bV.aRI(bV.fQ) && ac.vx() && bV.aRI(bV.fQ) && (im = ac.x7("arena"), aS0 = ac.x7("territorial.io"), aS1(im, 5, .5, .5, .1), aS1(aS0, 2, .5, .45, .1)), bV.aLi = !0, bi.e2 = !0
	}, this.a8a = function() {
		for (var hI, fr, ft, aS2, ib, gV, aAr = 0, j = bV.fv, k = bV.fw, gT = j * k * 4, aS3 = aGH, aS4 = bV.aQv, aC = j - 1; 0 <= aC; aC--) aS3[(hI = aC << 2) + 2] = aS3[gT - hI - 2] = 3;
		for (gT = 4 * j, aC = k - 1; 0 <= aC; aC--) aS3[(hI = aC * gT) + 2] = aS3[hI + gT - 2] = 3;
		for (aS2 = j - 1, ib = k - 1, ft = 1; ft < ib; ft++)
			for (gT = ft * j, fr = 1; fr < aS2; fr++) gV = 1 - (aS4[(hI = gT + fr << 2) + 2] > aS4[hI + 1] && aS4[hI + 2] > aS4[hI]), aS3[hI + 2] = 6 - 5 * gV, aAr += gV;
		this.aAq = (j - 2) * (k - 2), this.aAt = 0, bV.fP(bV.fQ) && (bV.aAt.aS5(), bV.aAt.aS6(4, 5)), this.aAr = aE.kq = aAr - this.aAt, this.aAs = this.aAq - this.aAr - this.aAt, this.aAs && (bV.aAt.aS6(6, 2), bV.aAt.aS7())
	}
}

function aQy() {
	this.aAn = null, this.aS8 = null, this.aS9 = null, this.xI = ["White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East",
		"Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Mare Nostrum", "Denmark", "Iberia", "Japan", "India", "Black Sea", "Italy", "Iceland", "Anatolia",
		"Falklands", "Antarctica", "Hong Kong", "Singapore"
	], this.dv = function() {
		this.aSA = [L(174), L(175), L(176), L(177), L(178), L(179), L(180), L(181), L(182), L(183), L(184), L(185), L(186), L(187), L(188), L(189), L(190), L(191), L(192), L(193), L(194), L(195), L(196), L(197), "Mare Nostrum", L(198), L(199), L(
			200), L(201), L(202), L(203), L(204), L(205), L(206), L(207), L(208), L(209)];
		var aSB = [120, 105, 92],
			cos = [12, 12, 60],
			aSC = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aSD = [140, 130, 120],
			aSE = [12, 12, 76],
			aSF = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aSG = [130, 117, 106],
			aSH = [12, 12, 68],
			aSI = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.aAn = new Array(bV.aQs + 1), __fx.customLobby.setMapInfo(this.aAn), this.aAn[0] = {
			j: 230,
			k: 230,
			nn: 1e3,
			nk: 2e3,
			aR6: 173
		}, this.aAn[1] = {
			j: 800,
			k: 800,
			nn: 100,
			nk: 50,
			aR6: 43
		}, this.aAn[2] = {
			j: 512,
			k: 512,
			nn: 128,
			nk: 32,
			aR6: 0
		}, this.aAn[3] = {
			j: 960,
			k: 960,
			nn: 60,
			nk: 8,
			aR6: 0
		}, this.aAn[4] = {
			j: 900,
			k: 900,
			nn: 100,
			nk: 5,
			aR6: 0
		}, this.aAn[5] = {
			j: 1e3,
			k: 1e3,
			nn: 100,
			nk: 40,
			aR6: 0
		}, this.aAn[6] = {
			j: 1e3,
			k: 1e3,
			nn: 100,
			nk: 20,
			aR6: 0
		}, this.aAn[7] = {
			j: 1024,
			k: 1024,
			nn: 128,
			nk: 32,
			aR6: 0
		}, this.aAn[8] = {
			j: 820,
			k: 820,
			nn: 200,
			nk: 100,
			aR6: 0
		}, this.aAn[9] = {
			j: 1024,
			k: 1024,
			nn: 128,
			nk: 32,
			aR6: 0
		}, this.aAn[10] = {
			aRT: aSD,
			aRU: aSE,
			aRJ: aSF
		}, this.aAn[11] = {
			aRT: aSG,
			aRU: aSH,
			aRJ: aSI
		}, this.aAn[12] = {
			aRT: aSG,
			aRU: aSH,
			aRJ: aSI
		}, this.aAn[13] = {
			aRT: aSB,
			aRU: cos,
			aRJ: aSC
		}, this.aAn[14] = {
			aRT: aSB,
			aRU: cos,
			aRJ: aSC
		}, this.aAn[15] = {
			aRT: aSD,
			aRU: aSE,
			aRJ: aSF
		}, this.aAn[16] = {
			aRT: aSD,
			aRU: aSE,
			aRJ: aSF
		}, this.aAn[17] = {
			aRT: aSB,
			aRU: cos,
			aRJ: aSC
		}, this.aAn[18] = {
			aRT: aSG,
			aRU: aSH,
			aRJ: aSI
		}, this.aAn[19] = {
			aRT: aSB,
			aRU: cos,
			aRJ: aSC
		}, this.aAn[20] = {
			j: 1024,
			k: 1024,
			nn: 128,
			nk: 32,
			aR6: 0
		}, this.aAn[21] = {
			j: 940,
			k: 940,
			nn: 80,
			nk: 8,
			aR6: 0
		}, this.aAn[22] = {
			aRT: aSG,
			aRU: aSH,
			aRJ: aSI
		}, this.aAn[23] = {
			aRT: aSD,
			aRU: aSE,
			aRJ: aSF
		}, this.aAn[24] = {
			aRT: [157, 136, 117],
			aRU: [16, 13, 68],
			aRJ: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aAp: "[OG] Neutronian"
		}, this.aAn[25] = {
			aRT: aSD,
			aRU: aSE,
			aRJ: aSF
		}, this.aAn[26] = {
			aRT: aSB,
			aRU: cos,
			aRJ: aSC
		}, this.aAn[27] = {
			aRT: aSG,
			aRU: aSH,
			aRJ: aSI
		}, this.aAn[28] = {
			aRT: aSB,
			aRU: cos,
			aRJ: aSC
		}, this.aAn[29] = {
			aRT: aSG,
			aRU: aSH,
			aRJ: aSI
		}, this.aAn[30] = {
			aRT: aSG,
			aRU: aSH,
			aRJ: aSI
		}, this.aAn[31] = {
			aRT: aSD,
			aRU: aSE,
			aRJ: aSF
		}, this.aAn[32] = {
			aRT: aSB,
			aRU: cos,
			aRJ: aSC
		}, this.aAn[33] = {
			aRT: aSD,
			aRU: aSE,
			aRJ: aSF
		}, this.aAn[34] = {
			aRT: [210, 210, 210],
			aRU: [12, 12, 76],
			aRJ: [240, 120, 1024, 45, 19, 30, 70, 8, 20, 3, 9]
		}, this.aAn[35] = {
			aRT: aSB,
			aRU: cos,
			aRJ: aSC
		}, this.aAn[36] = {
			aRT: aSB,
			aRU: cos,
			aRJ: aSC
		};
		for (var aC = 0; aC < bV.aQs; aC++) this.aAn[aC].name = this.aSA[aC];
		this.aAn[bV.aQs] = {
			name: ""
		}, this.aS8 = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aS8[aC] = aC;
		for (this.aS8[10] = 20, this.aS8[11] = 21, this.aS9 = new Uint8Array(bV.aQt), aC = 0; aC < 10; aC++) this.aS9[aC] = 10 + aC;
		for (this.aS9[10] = 22, this.aS9[11] = 23, this.aS9[12] = 24, aC = 13; aC < bV.aQt; aC++) this.aS9[aC] = 12 + aC
	}
}

function aR1() {
	this.aLz = new aSN, this.aSO = new aSP, this.aSQ = new aSR(this.aLz.aSS), this.aST = new aSR(this.aLz.aSU);
	var aSV = [],
		aSW = [];
	this.get = function(eT, aSX) {
		return (aSX ? this.aSQ : this.aST).get(this.aSY(eT, aSX))
	}, this.zc = function(eT, aSX, callback) {
		var aNa = this.aSY(eT, aSX),
			buffer = aSX ? this.aSQ : this.aST,
			eT = buffer.get(aNa);
		if (eT) callback(eT);
		else if (function(aNa, aSa) {
				for (var el = performance.now() - aSa, fy = !1, aC = aSW.length - 1; 0 <= aC; aC--) aSW[aC].ek < el ? aSW.splice(aC, 1) : aSW[aC].aNa === aNa && (fy = !0);
				return fy
			}(aNa, this.aLz.aSa)) callback(null);
		else {
			for (var aC = 0; aC < aSV.length; aC++)
				if (aSV[aC].aNa === aNa) return void aSV[aC].aSb.push(callback);
			var q5 = {
				aNa: aNa,
				aSb: [callback]
			};
			aSV.push(q5), this.aSO.zc(function(aLz) {
				if (m.e8 && aLz.aSf) return aLz.aSf;
				return "https://" + b1.z.a4E() + aLz.mR
			}(this.aLz) + aNa, function(aJQ) {
				aSV.splice(aSV.indexOf(q5), 1), aJQ && function(aJQ) {
					var aLz = bz.aLz;
					return aJQ.length > aLz.aSg && aJQ[0] === aLz.eC
				}(aJQ) ? buffer.et(aNa, aJQ) : (aJQ = null, aSW.push({
					aNa: aNa,
					ek: performance.now()
				}));
				for (var ie = 0; ie < q5.aSb.length; ie++) q5.aSb[ie](aJQ)
			})
		}
	}, this.aJR = function(eT, aSX) {
		for (var aNa = this.aSY(eT, aSX), aC = 0; aC < aSV.length; aC++)
			if (aSV[aC].aNa === aNa) return !0;
		return !1
	}, this.aSY = function(eT, aSX) {
		return eT + "-" + this.aLz.aSe[eT] + (aSX ? "p" : "") + ".bin"
	}
}

function aSR(aQh) {
	var a0m = [];

	function aSh(aNa) {
		for (var aC = 0; aC < a0m.length; aC++)
			if (a0m[aC].aNa === aNa) return aC;
		return -1
	}
	this.get = function(aNa) {
		var aNa = aSh(aNa);
		return aNa < 0 ? null : (aNa = a0m.splice(aNa, 1)[0], a0m.push(aNa), aNa.aJQ)
	}, this.et = function(aNa, aJQ) {
		var aC = aSh(aNa);
		0 <= aC && a0m.splice(aC, 1), a0m.push({
			aNa: aNa,
			aJQ: aJQ
		}), aQh < a0m.length && a0m.shift()
	}, this.size = function() {
		return a0m.length
	}
}

function aSN() {
	this.aSS = 16, this.aSU = 8, this.aSi = 15e3, this.aSa = 5e3, this.aM0 = 5e3, this.aSe = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], this.mR = "/maps/", this.aSf = null
}

function aSP() {
	this.zc = function(a4t, callback) {
		var aSj = new XMLHttpRequest;
		aSj.open("GET", a4t), aSj.responseType = "arraybuffer", aSj.timeout = bV.aJP.aLz.aSi, aSj.onload = function() {
			var aSk = 200 === aSj.status && aSj.response;
			callback(aSk ? new Uint8Array(aSj.response) : null)
		}, aSj.onerror = aSj.ontimeout = function() {
			callback(null)
		}, aSj.send()
	}
}

function aQz() {
	this.aS5 = function() {
		for (var hI, fr, gT, aS3 = aGH, aS4 = bV.aQv, j = bV.fv, aS2 = j - 1, ib = bV.fw - 1, hD = 0, ft = 1; ft < ib; ft++)
			for (gT = ft * j, fr = 1; fr < aS2; fr++) aS4[hI = gT + fr << 2] === aS4[1 + hI] && aS4[hI] === aS4[2 + hI] && (hD++, aS3[2 + hI] = 4);
		aq.aAt = hD
	}, this.aS6 = function(aSl, aSm) {
		for (var aS3 = aGH, j = bV.fv, aS2 = j - 1, ib = bV.fw - 1, id = 0, ft = 1; ft < ib; ft++)
			for (var gT = ft * j, fr = 1; fr < aS2; fr++) {
				var fO = 2 + (gT + fr << 2);
				aS3[fO] === aSl && (! function(fO, id, aSl, aSm) {
					var fk = 1,
						aS3 = aGH,
						fm = ad.aMg,
						a6R = [fO],
						aSo = id >> 8 << 1,
						aSp = 255 & id;
					aS3[fO - 2] = aSo, aS3[fO - 1] = aSp, aS3[fO] = 5;
					for (; fk;) {
						for (var a6S = [], aC = 0; aC < fk; aC++)
							for (var fZ = a6R[aC], fn = 0; fn < 8; fn++) {
								var fo = fZ + fm[fn];
								aS3[fo] === aSl && (aS3[fo - 2] = aSo, aS3[fo - 1] = aSp, aS3[fo] = aSm, a6S.push(fo))
							}
						fk = (a6R = a6S).length
					}
				}(fO, id, aSl, aSm), id = (id + 1) % 32768)
			}
	}, this.aS7 = function() {
		for (var aS3 = aGH, j = bV.fv, aS2 = j - 3, ib = bV.fw - 3, aSr = 12 * j, ft = 3; ft < ib; ft++)
			for (var gT = ft * j, fr = 3; fr < aS2; fr++) {
				var fO = 2 + (gT + fr << 2);
				2 !== aS3[fO] || 2 === aS3[fO - 12] && 2 === aS3[12 + fO] && 2 === aS3[fO - aSr] && 2 === aS3[fO + aSr] || (aS3[fO - 2] = 1 | aS3[fO - 2])
			}
	}
}

function a8Z() {
	(a1v = void 0 === a1v ? document.createElement("canvas") : a1v).width = bV.fv, a1v.height = bV.fw, a8d = a1v.getContext("2d", {
		alpha: !0
	}), a8e = aGH = null, a8e = a8d.getImageData(0, 0, bV.fv, bV.fw), aGH = a8e.data, bD.tV.a6B(aGH)
}

function aR0() {
	function aSx(aAn, q5) {
		for (var canvas = document.createElement("canvas"), p6 = (canvas.width = q5.j, canvas.height = q5.k, canvas.getContext("2d", {
				alpha: !1,
				willReadFrequently: !0
			})), im = p6.getImageData(0, 0, q5.j, q5.k), a2I = im.data, src = q5.a2I, fk = src.length, q5 = aAn.aRT, aAn = aAn.aRU, aSz = q5[0], aT0 = q5[1], aT1 = q5[2], aT2 = aAn[0], aT3 = aAn[1], aT4 = aAn[2], aC = 0; aC < fk; aC++) {
			var ie = aC << 2;
			src[aC] ? (a2I[ie] = aSz, a2I[1 + ie] = aT0, a2I[2 + ie] = aT1) : (a2I[ie] = aT2, a2I[1 + ie] = aT3, a2I[2 + ie] = aT4), a2I[3 + ie] = 255
		}
		return p6.putImageData(im, 0, 0), {
			canvas: canvas,
			p6: p6,
			im: im
		}
	}
	this.aSs = new aSt, this.a8 = function(fQ) {
		var aJQ = this.aSu(this.xh(fQ));
		return !!aJQ && !!(aJQ = bz.aOc.a0c(aJQ)) && (function(fQ, q5) {
			fQ = bV.xH.aAn[fQ], fQ.j = bV.fv = q5.j, fQ.k = bV.fw = q5.k, bV.aQu = bV.aQv = null, fQ = aSx(fQ, q5);
			bV.a1r = fQ.canvas, bV.aBL = fQ.p6, bV.aQu = fQ.im, bV.aQv = fQ.im.data, bV.aLi = !0, bV.aQw.dv(), bi.e2 = !0
		}(fQ, aJQ), !0)
	}, this.aM4 = function(fQ) {
		fQ = this.xh(fQ);
		return !!(fQ < 0 || this.aSs.get(fQ)) || null !== bV.aJP.get(fQ, 0)
	}, this.zc = function(fQ, callback) {
		this.aM4(fQ) ? callback(!0) : bV.aJP.zc(this.xh(fQ), 0, function(aJQ) {
			callback(null !== aJQ)
		})
	}, this.aSv = function(fQ, callback) {
		this.zc(fQ, function(aM4) {
			aM4 || new aSw(L(210)), callback(aM4)
		})
	}, this.aSu = function(eT) {
		var pY;
		return eT < 0 ? null : (pY = this.aSs.get(eT)) ? (bJ.fB.a0X(bJ.fB.a0V(pY)), bG.aD) : bV.aJP.get(eT, 0)
	}, this.aJT = function(fQ, aJQ) {
		aJQ = bz.aOc.a0c(aJQ);
		return aJQ ? aSx(bV.xH.aAn[fQ], aJQ).canvas : null
	}, this.xh = function(fQ) {
		for (var h = bV.xH.aS9, aC = 0; aC < h.length; aC++)
			if (h[aC] === fQ) return aC;
		return -1
	}
}

function aSt() {
	this.get = function(eT) {
		return 0 === eT ?
			"-VDY-vw1-6zbu-6AMQJRpRKfEM7eQmbR5owiTu26wOjKrtxkM9uayvQ_efKD14ubaPeRhpILFeB0-WPFC_QqLj-lY3XnW13lDhz4mqWxZfFSjPJgwpDQqFT97XxiAD49R_eqHtvmDOq0MG1rRazWgKf5E08ijtr5FUvypm5MGg4U6aMKFJXh6e-VeXOUKC_EWV9lACkoLW1Rcqz446g5rGPGs-TdVVtGIjRPEHUvI5dsCSsao3GsD0etpb5TLxILgIIBBxSUPeJEAb3EKVglBtS3w74sxuQzB2ta8DqS2QacWzlE_MgBVbQCP1eZTXRFxIPMxfOeIBCg9_05a7MoCJV_Ln2HG62_q1A3SWZGg2XNW1O89tHNN5lkePHgU5RQ62UB67lcKtwoeuey9AGd8Bb7ls1tmBp0X60SvfFvXsK-zGQAqeI6-yn8fD3zN1cqLG0MS7-NN7_jtyFcVGKZo8baF9DFiUE7HGaIzH7Hl60Y2I0bD38R4sZwU14AFjBFWMT03oaEa2aLp_V0eFF2bP-9zg9x7x9PeEPgBfIXT_8ct13i75SDgO6iq23Ohb8KOajcaD9II6er8d1dwWtT-FxUQ1di_ztYQFzEF8s6Su9fVtx59eVh_J43DO75ew8cqnudvrj46xElktuqe0TP-15Zh0WviTWELb_lfEaCJKJEM_sRfT-zbNCINEgtRlsO3YXWbnyXGhF0RWQfCINU4Q9fdyvOCpEODKnAamjPz38L_YQ5jr0A49xc9lItKxApCdc8wOKXtRvjYssJAqCF0RB8opCS6BGeGnGM90uhHeUEYLhVDmogyR9rYW3wad7xoaXCFswWtJOrzMyBKSfdKcDAqb-gG-ylhsklPeGBpIqotv7V2zI5EA8RZPmLPFK0Q8yaVecipsoJTRGykB8qwBsKwd2CgOoMzpyZZUx20PbFeZLDYOSXTnVWX1tDVsounxQWY13RPjbwRPIm62tb7-N4jk_9ryCxXiPF8vZMFu3o62c2szAGy4kBBE74caS63GsSeDARjmQdXEBGIvn78m8X1mus43NsqLgHuFylq414iT7ZvY0MjxqT4KRe4-M6aeiuU6vnjx_nTwFyRopNx7PvIbeQh6RVB8CNFCzRvriYh0Ys2wsuT6SHsIOUNlSfRXE82PgYTBRxeuD5nev9RjBXSFA5kdsbqGChmOCfaHRaTKz_WFERjZWTdTgAo-k2zzQ7t0vT0_ZW1IqZh5FNhMsy4nVxyDOFoXvz3saUQ_hot8_Tav1jMa6PlL-zyQqMDaZAJP3IakxH8ypRfm5GRZYKfjXtlcvFfgIr3Ns-cioOeED3LvlRKV7BsCmBy5uUq_NRQ36WYXxnnnQglIp8LULegHZGQPj-LkBVuYJS-7wtoKjr0fSIw6B9-uC3Tuh_5DlUadc76SpJ1mBznH6e_QbNvwL3XEkQ7QM_ERn8TNx0MeG6CmTSoxaXVy8Ixeu0OJZcbqZiQXWSmvrA85Yu1OaZj0GG6mufcgWNAiZWSyGfeiHyZUIq-9POXOpz60aqVmbl3FyOVjuOsWHROF-6WpnAkZd7qcsM7hdK11Bks5xL_0WGn2ypwO0thItqK5isHHuMBciOTcsep21C7MK2gH6tMB9jVDIbQmqgb9-3zIEDALuTae_n2LyZy25Mn6WjfwWoiwkbF3PaByrvSSY2HvorM5k0TlAIYUSZxnmeRq6GJpL_Z5pBJkcCdLYsqVKfjs7-ibBvsX26F5yLp1JGlADdVAW7gwdPQqu6vwijMkxP7hG6GU3uNk1JD5ToFDDV8JLa2yn-jBVA_depAbV4pKRjEISdZ4rmcFQOxAiF67GsAlG-8PuIIoWOCNTboQlUn0aBFeUyWs5umHUUkzQpZuT7KgrQAptZ2c7F6cpY44zOX8kOv3dt7FtbLQEGTJ1HmpyO0BqWvm2FR1kBsqgA65OujMgmTei6GiF58eUM4d_j6-bAIfKyla7VpKYiJFL0awE59GLTZEjv4EFlDpAqOg371kDH9qx8BctTkxUJGw279Tqi93b-qosZ_gN5ZPZcIgZq28HBeBxMZ2fpULj-lvKthjREMxFXxDN-rQ-9da5pFl7isAnjyeK_VL49Ypk3RGdFZElc9HjGSsuCMJQL4F7c56UIAqyAT4LY6izdAlnKopCBMb5KJLvCLH0zCv_5gvbOHPu1eYuPL0ymAluupB7g1SWpKeHmoAENN-hMH1oLEVog2OdvCpA4h3l-jQ9UAnQFaZ_EJzdVHcY8suj3755cw-PfnLHmJIbQSNTMAJIx1viSHtgEviYQy4rvIXMlQ50Oh2qSmHVd6GY22NPNzU5yGbuamJxofZkiVFv2V_xIxluSWEiQCh4b8I047yvkVI8LI20SRy_3n8WfRHD017bCeUbQ8exyfMx428aKe6l_Vf1pyA8GMvFXSP7Q5_328AenJUnDkHVSKpPscdaRpboMmw_O-rOol_0BGNkmm8XSUzzzzxx_CkgNZbdyYtJjhJtLypGpyBXGjCK_w3uTetqi_t_4tJpbIeIiAmzHoYhUN9oizoWpVNZxhFqa9ajUn2CC_zIwsw_u0nsp-AXYia2LugZtip6zOIgVAx0WDDfU_jsXR1lDD_T2XN2k3D3E9DgRyCiHNXuEO3l3WQ1N2iPWBsnOCHSl1F0vlJXNNd0aRQrCSJ8gf-epow3ToJ3cu-Gz9wto4WAoWN6mD1JxXf_wIJxqHDd3WEFtpnJYQRQPQzfE6oSfR9B35Ilm8HQNZTltdhxAf8KTM-ZzXZsFgbvsekerw2g0so0Qh-qPuUrkXM5KxsnPkCE9DrWDEccawcKGnZZD167XWCwLyjk_nmRNBAbY4RPKdvFcOH43erQgS4hPicHEXvozkoG888IcQ8Zz0MssN1VsGbuoxSOfA-YGd7m3rQmWHQM6CgLS91RmSwInXAskdLqC7CGyhVjEwpT8Y7dKe-PdgXgEr2qfKuvIwvmxpMlIV1dL4Rtz1KTBNzntq_96cuaC0m-PHclXSWEUKSIPjFZWL1-iDeiUuA2QOvxK8iUNOy6YAczYXB3CRk4nM41apGaaCZJqUaZXQwGGd36bYpMC8ux5Rq3-uhY3ljwjrYz2I1-SEK8Kr4CAIMlmiW8ZDUMUNtAvcGfuI-W-lNau7S87mnBJs7z6A52L1rDFeliep4NVcyz04TD9oIHvWkoWT4p8-zLPv0mj1kJEbMjlpFWtCah2hW5W655A3-KRP6v8yyotD3mY4XuRlZHx1S5NDkITF5Q20bJARF_8r2ir2iX4nR63eAU0fWF-_n18GmQqsMXINGvZx338nCSb8D74rGRxsiApd6RPmSaMkck7lEeXWcT8R8QQinNazSLIzYzy-6n_wczlTM8W3CzZ8Tv6S-7zWJMesvH6Xnb2MxEg2TOVExCAv5wLmKj5BbvCNhdlWAbT1Jwf7VlocxkVqZMEhe0zCM8JXWOXnWPx3_Zs7G9YNv1_kBXshIA6F58iznUqhWHz3YAO1VlAJo3CNGkD8JQW4xcL-Oz0I-uhqpAxD9QiE5F7yFo2NWu4QsdGqzzcQsNXNACZFnHhdwnDEq22nutfQoMak3XoUEC6be-5k7KV7Yj5GO7Qqur_4CtKtHh5LkFbwPfPBtYWdd4RaEDtyhQel27qHDUpVKY0TfLUk40k5cEvUGsVjVH-n0cEKKeRtLkA39Iz4aIntGjnZrHgv7mvhCxG1MXMldx8w895w3WlSnkyqN6LrDCMMlFEecfCfnEpKpi5Pl890OQ3Q9XgAsyzS0nspn36Mm7MhY8d1Oj6ykmIvWLat24fHYrm6jALb7_8hSyWw69A4SttcZF6ixpDB_gMGJhwotqRwxbyApzNyI0I1alx8jw_v-u1SKW_AmR7GONBSlGBT2YVF0qNqLpfGj4U-FiBuQGd5S5hhvfa_rm_RWhEdre7OsLxX19_Ua3oOav-RJJILBs1PAN1wzGTbPQmVYQ7Dvqj908To7E5MKt2zOJmaK5FmErrurFIy2Xw5Fyp4SGoK_tjkmrwBrI92OBqkSEJyXaU6Q6YboUOJQxGhWBd75OFSMYL6uZmj3Qc7d8Kw1JZJJ6K_vQ2_TYPmii23N5uWi_dlcJrH720sd9tOP1C7W6ezvONM78ZaFCBkY8LHXf4OCOJ1LTjv1FIpZeaHK9Fs4aFKHng5Zgch9oSi_5IOQVf4grRipYiCNdrBn3e2qRVUwQsW6gDXjBKamVTOhbHbVbs5tDjXi7SoPgWpQG04h7-9jt4gB-Y3ZSFPCpE28Vuf_IzOiI6pLaysHZlSZDLC9JcXdB3l1T4EHikksN1GdkZJHvAPYm8wnJb6mOodZjx1VUAhooiUVOIxEiBPjnwGyCLJATJUPdm4MDn41_k3QvGTOG8WfctH6oLorGWfvZ-Xa6xffNlLm5xA4KxIuKNtOLUZtDuDes_2P7NbjA40LAtnrdGqwSHZIoWuV1oEflBd3a0zVikG5Vd3983NlXmeUTiQ17iMKkdu_YTtCTCf70ilprqAWNrQxzY5ZqcziLfRYEISpn7nzSqcrBZ7eWWPUexpz6KnUCnYmI2-OJUglKalGMmlAIsE9pazTBxT0Yp6v6UQet-SKCwxdeBLozSseP8pC6LS1572hNp62kAc4_5zFhxcmZjA7csXkst_8vxmhJGTV" :
			10 === eT ?
			"-VN402V1-6zzzHh0vRIzzz7xY-ef54b0-jwSUTcQmwBNm6Nji6vH5XPAMeIdi-9rPCkBZPOxMpuHH22j9Smd4DXk-t3Pkr1eHg5XLWLUns6yHl8925R73FM4q-5kSPIx7TeGt8vbrGwhu-fSo2cwbzcOuNOAyAVzPPoaa4mmy_D3NatbDQiIKbtttIYYINb-mNKyqtGa-9o0tXOzFYfHIt5UbmhL6y7rQA37i2NUj4gXWBHdUeR4_pygqLtmfG_b2Ze62McU3N535cKogpFBVcgKllakt1ZqfaF6VsC0vkJpayA1LjEDEO36TXtuk1aaZDZ3SefUzd_xKddKJoZrZlPYINN4yhrz36h4x7Sq4XnalNO9S6oC01gl9TRJZm0zf_kbnCKsKy5xaE6Ri3H77YBuddmeFheLLXeN9qIGTbatHHQuFljsRM59weUd7Re0zy2-egRpCeJEyR5qDHpuAZWnd-Bjqiqyb2bTu929zOnFlbXC3Iqa2gHMcHTzKuGl7P-4BQ_K0ZOvla4A3nTyLFKEeWBbrv74E5Hobr9wX3OW8zYDttC1n1ZEJ2jfd8mEleNf_Sy7NP0u2K04eTzK3rGVyXElTWn6Rf4-KwAB1iNwjvln4Fqe2AMvoBcgaT09rT-ZlI3Unb4Z8YWW6TD-qWcY1F9Tc6dxHmIeCcDWaZPzHmAeie3P9wN88tA92yXFjNqIHmtujiMRxBVXfOLWgsyX8-kUwirovx3xfPMDoAEawgK5XpNKAvQcxD8HZmLlMDjioXc0nkM1umHmK1S86O8zBTmi10kJQp43WQgiNIglcXYMJHD90kMxxJ2jfRisToEMlStmLHtzP1cbJpx9mIY8UiPZydeOrezcnMp_2vQlsbZ5E-Ckm2k4wxoYDTpQfI3JyAEwUCGF5B6V5KloxdoFS7iQW4DUurrzQFwMMD7leEHU6q_N74MsY-JUhKJM6ViZnIp1lNowPolYmqwtvjRy-E-L9v7fEuZ-K0AmNVQeYOAjJYcPqzJyGjC45byfIHDeNnxGUH48vV6mjtw06mwtVnEMlbVF0epgH9E0R62EnK3vdBPB8Nq0hUI9CaWcpHQZcwxMqK5v2g5ba3NJKzqWpHWPcY91fTRYWxIyjtngVRdFT0jdKwSPgWDFg2PiLJ5pxWGq0m8GQfO5dl2SoVZve9GyVAHapQi33vgmL9UbaO1AOPu4QhjDUZuvzRU-z0MJEh6a8ygMCYnrgcsVjdvl-_Sz4j3IK17POFjb5NusSL9yMwbe9DXbEZvcjBdYTNG0Kb6fNy4WVtXHxHSIBVQ1Rb6mrArbEQTu-0MUXo8zJGQ8LEr-zue_CxLKrKLYG5XfLCikXOWbES78_i3V15rWrL3-Z3594KEFNElmA4F6x2iO6ZookgtY6ano5qIZJkM4UvNwv3yi5EwVUsPdm4NNCf8DgsdxRHSQE-xi9EcygBRtUdSzM1j_zjCGlLA-jWWd93U4t4sZNhPFcX3Wn-JkdZLfXt9BjIMJybH6jgoPqEWc4yPwXCnROY8ZV6pwFTI7gzwUgp8GYTO3ByB3sAG09W2NJotrVtJ1FD8Py1aXdZ97FfMMIRcoMbQqK96pzDAtwUr2eXNwGJ81n8KHg-7bICssd8M7ZHXOgxTdBSfjhMZo1b2iR5k5sN_NcteBLkKDGSMxJZuNO8OdPrBTXUDPEO8MACX7JsAlkgN5RkFoxIZkaBKKVi5xn3ktHWxUL_nZVf5_EcTqt13qKEjLzCeWL22dh90APbrddLCN4_sHl33OG4DxeI3fa6Dy_DbRNVL6BYwU1EWBl8yawCrsLEuZ3Bp1OmhfnhZm4CWxXs7qp6Ut7R4nWRDO6_EYrFTPri28_n-il7Fl6rjkTk_kq8ngrZoc7rLwcdWmG1u9blLZbS2iMWjbZdN2eJ49Pw-NPEPI7iMHl7QUN4sznqBI_PQcDNoAB6eEC3Px9ClwN4tQ7c3OCrhdGXghaxZtEwBBkhwh9y4KL4d_Ja20eiCUZEmYGQTabZQPHgaQR8Kq2SXQ34iAH_WRqW-F0bfK8vLaNnVjgrtsmn9eqkQ4yhvn6BpI67MkLbZ6NebJQjB5QS6uoEpYgVH4cXAwX46xAkbHbGzL_kcGfC9COQWNvwyPHYrxgK3hMUOZjJUUoHzPZlj37Ts8fDAhOdz6hqvtBHpNOoXQRVH9oC4X5x3DGNgP8_mT0ajgNP5v21edkD4W-zRj8KAO8LDj1ejhiQ2AtfoIEL-T6SrFsSfGCAt31rkSyQ7pALOg7hNzIgXSOsgWeFuN5rW2IT8hI9y5vIzhTqLBKfC8kMsOyECCYwOMpEmbWHQRECRDmI_B9p-yZGS6PmpuwVS_T8vQSBA-opyXoDbCWEG23Hr-HHaWsc_ARo6EYvbf-tGnBWnBZUb1ZzLanzW34A8cc-JI6uhtknm0UNJWAly9pn4KyJKwpN-ckkiOCrBeCyEiaB_VIb35MpHrSP6NdpcenspoORtJ9H8TIHyZpKb3RJGwaJiHHP8sdBXXxeIdsiALydmgMJxx_pslQteW9y3O8nefPBddCLL8bx3y4XUQGQFXhLUx2_Ue5FM_g4AE8zrxiSa8W2Y2gz9h_bv4w1vyT0iVHzwXs9kxb2giHLJgKTmCTdM5KkVL10NgDiPr9Vns7q7fE7tfLYislp-wePl3ww9vew3vKOZeRQAZlKsX1VGtiaJhEJ9EkjuSRpJtS_FQE7izTTrAJryzvMrJeim0FWZ3iIo0Z6vs7jX_aQ7OfLkkKzv5eeIZOjJx7pbNw2EKTbA7Px9Yo8wUmM1qPpGKXeKHXqnyauqkE3a77zhKYJuc7U2GRDTYisjcHFK9HcoOUenMGGjdBwTm6aq09P1FzGZoziTbIL9XApuSjFWLzS9jCqVJ17Tq3x0lUhzWW6r1DxdAqTgrvgZ5-xFN3qRih9lY6Rg-nc1NAU5MMKcY1lYRQYfuh25EJ8PazQr1Mcnmp863yv3UXlfV8w_l4gZ0oMG0XBz3lwg65RCn6YJzMsAXt2_3D2K93EwXqgsYHTjCpYumB8lHd7Lzr0zlq-Q6WHD_b4qlTU20WXYm3GH45Y70Un2kdXfhUBw3WPiW3mQtLMYXJv_3TZ05D9olM37H9IyceF89kaOPdEinLxoK0MrpuhPlEabBblclnE5y8RknKsP4MtkJ10a2cYg_SDOHoYeERpLeNs5FTnRfKWZUtFjJxH7A5Opwqp93AUIcEsvsdGZZQncbRbXmthS6AKsRyOM3BsjE7uxIUaJofLF7eopfOGTcexKOtNzbDzfA7498VQnxrGTNJ2GyB-tuhqpjVdtE6I_RjnxqAn6qulv4IjqxrKmAandf0DLbmRS0LkBH6ShxsMSeViM7sjiZ9lDCtY92DrYgCnreF0kCzNHI91JlaKU2mJPJyXc8aQHl61j-kcCf6aVbkQSsnsKTtmIOD7XV6tQ123fHRpdSeEPwrLYenw-fD2WxDVLc8vR1jRz_NnBWPWelDD9OLjiXcyhsnoLb8htj88RIT-9s_SL6tkC36v6xF93VKmvNPXb3ERymaD_yU8ObK-rDgwRmq_aelJHmMoccyQqic-awT0dpIt2gltxkmWHI_q752J7n8_v5idnoEZLdNOXXG0uLR5UhR8EZrwGNYGQ7qffjA2rolVADH0-7Exe_mp25rgA4wbv_ABG9xAY49igV-qf7h164eJOQENu2lDzORskVAD-N_mzZadcQEd0cfKlTudulJIDoSX9Mn3TNx-Kqm81mjTwl_UOumjs9kbP_s0i9g1CM1aO5IMJYIEoRAkN6vY9oW__cG6zK9Z6snLvSGDaDMpltVqb_PS0yZUeNyVO7USD2qYk4K60K6w7QjO5FzXfDwcp2hq5uv1STG1BDQtQT-LocVB8h5_j-0f6ikl2koH117YQkIT_qAjrJweXkXkIWbR99lWn_s4c7WCyoI-nknsJQXAxxsnIATkz-2AiJu4F2n4ikqkXXCiRlejE2EQDOPMd4UVMalTHRRe01z-LgaFt831Njp2wkWSWnCXd5-LDnUdecdiJlXLbzLIUXn4byaFonT6zsO8o8jN6dVScQ0917XlT4iHp1lW_YsNLdvTxMr0pMUS4pRE25VS_lFmJg5sk2rRMOsEKDfb0zOg8YKcLtIDdIziqea-1WviS3ODt2VnCOgWYNM2le9QmBlTVW8l-FGAKIlSJCqWbUVAdFiVumMv9Spiu5xXFjsIsHftdZ8gJ0oUZNQ-DU5AWxwGxSF5KY7AhFjB9pYFAFAelME5ElA6ncZ6qcLbN64KjSWgdBX5e83dT_eAcYSyDJ7L1llB6tLaywEoRtoWUEQuqe7inLL-trCZivi4-JcGzXDfSM_T10rTqLRapq1uno1AyNkZUQPzI4gZleSBAtx42R8EUaonQgV99cH17TQPSkGXtkbQrXQTofa3oDddW60MhxZYpO29s808tpcmW2h7Iv6-r4TnTOHGxMHE88573rJ3HtBdi4aPDC-lagQIcRHh89HRJytCXSOa4VL5DYcnrmSafOoN28XutPZfe4Q8-GBnhwWrPWJgl2hKU3leVgA8KzFsr13SAlYF_J24Z3RFa8-qOYnITbVhA-iSHjp53mYaaAq7hsWrtD6YkkfA5ODVVZPto7rIPhR6MLpGDFV156fe_6jCmRxGIP8HbaTb9YPXcxHl0LAfM0yuqgxDWvKji_i75OREyE0JYwQ1YbAIacZiN35qaEdR518x5FhVRYGByxwSzNkqKYAtGcEyGxgo4kvUwlDxfolhr6bylBuqZ6C_jfdijNpgjcsYyaVU-elpP5GZvw9c2WOWOWO_hW7EGDgtsPpRZASBFXnm2P1RKti6cDjJFv1Xp5HcXcs-4xNa06-GhRZ2NFAqbB0OkByvPMjJ6HmKogu60MtMjLQLzIPOW8SYJHKxXwyz4hqVIe-sBw-eNJ3KY6Vu847iBQgKk9ttczQl49dym3GOzCu21ZFDafMnOeDfhLHTKukduWb48m8ayj4UOLuup7mi_MhRTmXtv_o5OeFd4-J8TwaLMbWXuRwUEyX052qcK13qGbJK8vJrf1-wxyWzXz7fQPaSRAnsCbRBO-7T-zR6Pu2O7AW_iG5cAap_JbMSv1nJHAAsR9UdYR8Id8wVaGFc8nLT1YSEVK3txJwKtKCsijAnjXD6Q5Eb9JlyVrI6b8wNWgkcUJbAlpMvWMtFLwcJaE24R9UUX8SDnZq1vLAIbfqLHebm-Y6MgGWJBA9YV2HLsqWoJktZrX8KPTTMRFfIrrDfoqEx3z3rCkKnErZuAvNzZrl6TQMU1K7pmS52dIIlciE1P8LfTtMtnAiQICS4Q9PLSSduTV0xMI4VLjX5-lnodCPG_ziYpu2Qgf6eqsgMzQicJtmzSA-lEcVjGFSWOK31b1f4CYvveyK77AyiXt7G3oZpNca41eSX1vCS40zdIRrpk3JdfoVICwgmQiAFrautECXlMiradHhTYBhDKWn8HxRpVMJl--50-AlK9UpKQzwPotvftsOhjETZqlPpnCMWY_69j9S_2ZF4SR-oPolsMjkZxYoalxv6DDdYNX2w-d8DIfAk6wgYpoq9LaQioakWHBIf-mwyV0fXJuUwD82WQ0Da_b8HZMP13Bz9eQoK25eua5jbKQPvfIubVeGAwhJOv6FEk0il2I43WtNXZQN6uibYTaxxEX6FTMgTIRwO3jOsORCVBUNerFg_OwYCxph9-aqQ8I4LV7CA90l_ni2fxQJQ2UQFqHmUfgkSHuUgHPJ91sMNq8yFsXw2S3l3e5cJj5Z7Es_BOVs2Ur2rRnI0Wg9wGZG_wRyCeHbPt_0ka1gJHsKZAs508rKXKtHkytG436yByue_1n5MoZwdhMR6GmQknTkT04FX4iaXcJjUxxEu-RYU5zMPEHH2yhDjPth5emAbpJpb-Be24VnTqerQGjKElbfzbAero1RHZyswPha2Nxo5xWjQuTDzeBJfThGVb4XywivO2ZdyrMeoIUROisqXISkUO2xgzkPLSQBAOSRa32S7l2MGXvwB0jguMbAshVMndIwm4ca6PJrHeECgyMOq7x4mVfs8jyAGMM33Ko2sLLJ57Vxejdw9vBShSeZlK0GEk7p-_qnt1yRNf8IuTQx_5GWVss-mfn26FnzKTmjJJOpkhQmdIyFzlggFfhuceziNqtPHCUCyL7xRbgZ7iadMfzQsw_qusA4CFoBHdNXa-LIJX3J3Y4YvEzEj-s8VP_OUtk_inUqgdZ0D6s8VYbEdmZMgeGOtOjdL5TDEoDv6IPQrCjARnzK-chb1qXvMf0XG_HqHMV10e9H816YYvy3PGykxxhSMHEaNCidzBTxxrPtoMZdlM-s_cSky7pvu2R59c5cCLIcyjGtdnqwbx2pwmAVxmD_Uv5gKAQaPNEIcUaJZm3N7TBX62yanzDg_1rEKBCCUUpr2Grdg_yV0PxXJWqW2xxJTO67y6iSfjhRfh6P33mZ6NMYV-h_SOa-OUO1Ymokqbltmqd81Tk6GuSVADj8g0xB6h_pl-bUjanrW1HmdkbjdNd2ivsl5RC8tBCuFeHU6idAjstV9AOZ_57p6dFdwx44impXE4b5ZHqgewJnZsF18j4mFX8TlmQYAemoNJN_OLcVdXxS6eK-UOqMBdenHNgNvSGkqw4GMhJhavnN2tVzEVqaXhGpVNWJgeP6Gg2Y_qPbiLuhb1JrTsga9IVmTkYphuWQHgssQT1V10CZTjnomqhI9tlza0FphM_l0U1Z_ei071pAhHqp6WMv_9mlZTfhfLqdd0oV6du8Kon95FhQlU7dh0zMh_z3Mck_s2PcMUwnNM480VpFsqw-G5kJmu0hqjanU1OamHOSEg-8irsOQXSXrtn3s_N7slabDvyop50KUoMwPh2KLv8XkpY-HckmKGll_y1ZHyZZxKuZU4dC8jliO5NJALdSkbWCji8NJ7V92BKIl_i6s-a2ls6E9VdlOOt8yy00amo8Cuws-0eFqFHVUAAZP57jQkaoZhz7EbGnQmHIJ8yBXkiGLQKDIIJcIcV8cRQmqgUN81jfxXuBc93ARl6DroGoQjP4uUNDRcIrDFQQsXCRW2dwTsc89UGO_QYtJyDg4r7F87qj9jgdVnKGpJWVl99nk2XjmscoRVkPHtLZR9UJkBUEHBjF8IzaEkdbpt2u2n72hTLsNjTwc2CMVos7fQi3G479LQcDq6VVoXeBr-8O7FQqU0jM4rAd1gylbn2bY76o1TJz5VI9DZycNrbF28X7imObCwA4mADeINedof_4pse2ZPA5U0h-vgWDrqtzzCeRzqe26b3ITzW52gUkoKC6tPDaAXyOBK1C-bHxumuhLE06_WvbZCI3NWIfk-BL0TysZ6he2W2hx0MpbElDh1u29LR0veGaYeY5s_lZ6TEfhjCHESZdR9NmxV2lUZeBqZ-DYW_Hy6NO3mTqwdGvZcwXPVX5ATsgy1Cst5caN4FWgK7n32PmgUMLbI12T33Qg_ze7kFuKPEH8VUiLbwIM5Y6hSauw-UwwIN9s30zGuP_mX9FzLMTYrjL-Tq2L8uOpld06sgi8n23LD0v7Tl_pgp7DDvDQ4evKBNMY8ORqM_qyBYVqX6t2S9eKO3akKqGOfDK-EX4Kp1BtmAqh2eDcXX0VusoCqqwcDGT87Fb6C3i1Nur8PCZW-A0ZPlNhT9muc8AJK_5RTOqvfFKZ44BiSR0-RSmvv1jNJfXgONIRRdevNz-a7Rr_o2DrvHQTd2zrzw3TUliOGSkGqPa0YvpIv6pBR5wfw1jKc8Hn4FrwXNCU2OikfJxxpFwLk0yBiiRRN_QRguSy4DenPdqIFXOv8pnG-SOaLFkOn-8w54WXfxidcnD-nqTK3V9zI-PL9UeXa_g9_iuQR6TgPQoajfB5KrRQGOkuQU74gQetYcFeQ1TlDRAA9DHDwbDhukEYeCbJdNlmXPUfY6Cc91CK2PW0WF79wmRTJrzwwMC_zothQHa1cflH4t4PT3arNcUYIcth-bMn6-N8Kqi-u1lbZ9Srf1jn8ymInAjTad55mjzdZnRqlAnU3o1YZ85YvLj_V9o2BzZTuyJKWSjOiVNjhlCPmh8Lbq4yaFfoCFg3i7DCNPf0OzQqGVqnNQ6ebUPUHTLiAx3Mz2w3tVxTc4YsuPDnNG6aZSZxXstnFl6IDG-EMZ-3dxXAQd4GDDYFmQi9rAuF9aJEt0Tc2owuuL32Fmbx_8hMghfuluo70Q7H1fuPHe5WBHejrknyNrASGyQzx3_8xUnfvVVhfH5cKIUBGetNfcXE3F_vyJ3ydG5KNYcXKqyRbAKs0hIvX13Yxbzxux8ioyvzjkYr4T2GCmVM4hSVu2_7oYbeOlZ2cG2I8TCtxlhM6LhucmMy6dT66rBQSEVNm26kdWy13hSWnQvnqbO-mk_E-ULPxYwQ_JHo_1UezKpLW2DBzuJiMy2j6gPsy67Rlmd13VLq9rAD1HZezHXUnv5jqPLc9zJNtrctiSmfBKPStBR-gLzHGw5niSOKyCTdgwrvVT2mFkYUxIQYnJv-ZCT0QD_vdfED2Tc9LV5hTv6zkDCpuA_4Afj5M9j0SxCXt3EN36pAbZY9Wdy1nsGpiSJhoUKXETAkAKIPGF57BVZ7vd_xyT3Q7cfJ5iz0yZUjM7x_A1Q5idgUDYn8pSPxJXmO9FwNIoSf3iiNlnC14vzc1XVGHMBBHc49rSPDA0b8wywCdCFLK-9TIu-8dK_bj0IbV_YU61sEpay7LPycuATMoj6ZA6anTUw0K1gvfNgiu0Mp4MVEXRlBdKncG84gEO0XVU4UvSVg35ka6cJPzHsOf7P5XXNUiAk49dtHjxg3nUalRpSxgv8qj0fxIbH7ymuhDOTcLS2bjmrBy24HcLz0ufh6WSU5WvyzLTuzOjEf_XH2MzaBQ8qytkQd6FZmGgrghdIvuDtmeIvWxODyXQpI915T3MeACLTqaaJPQv2Hh2ms1orP9-V-LVAEu38rnzUm6yeqbOKc4QuBDcjFLf6YorQ21LM1bsYrI-LKNF7ACijPqBA2m-7Pl98J3nDNzIDOsgbHbIqAKvY5QPgDQvxrUqxq6YaienSVTDxTPrAGfXf6IPvRnBbHB5UFWdNdagXPMLTAgkjZ5tyJ76p_cuvRveJ7QvGd-74NKESlVI6g4Sqadovay5WHd41U1v8X7nCKAZmJ4PS8GEbAJ4OTgMbO_IIHUVlYoAjKDgBLC2F3Y-FIX3snihq1qY57gthWXP_fjJBEu20_Cv1lBs6jAbhsOs7uFBPPc_BdythXdPPg7usWVEc91lv7wBn9-2_uoB5wNpsadsMImW3SjyRDsr5Dkd7-MRmoTTpAZTA4_b7ZBhxvG3MT9YKeRO3pDQZSGkHjvHKnC7gDaY1se75TwpiwwcMKSDET3scyzDthjicY0PRXkj1LLpzGoZZVrbK2-bi3ICEiZnOiYLyYEyNVewmzaOE-BWqHh7R0t0nRrDeQRbNDcOzTTmE9FRwObQv7diGyRypa5-3-toJ18AytqDdE7IydA9WSZtnbXyv_Kc7nJMrNmHJiMzShcI6xiEgTePd5ieIEjbCd2Y37M6HWiYECVgBRWY7B0-1rGLWLzpIEDfj5y1CpV8je3y4EXwW-xpfSZl4aMCenXZZsVWhNsBZ-ogde8q3MvAMLsk_2lcVN9TTG7V5O-KCoi2QVxu9t2szNqN_H34F5-VRkW6a1L4S5KkOkhQ1F97fivmrTAxR2rkklJDuWgj7gFqb4wGV4z2JCMdMoaIlCWipVNTKA6E9Trq9DW7B2YToAa9a087gQyCBXIHA7KGm4RJLzr6KAoB4TzzYB_AsfHxwYVWAkVmHC_PwIj3MxSbgC25heXoLl3t_tuloyg7YZCxo4sNLEedQ6iTOsuKTOWf1UFTp3HbhPf1uJmNv3k5tiF8U65dFaDR5k6Hb_mfrGZ53TVymfkmskTLOnn0KCiFAB6CI5CR1La64ebef4c8SHwlRrkPZlwAlcDjqcReTESxGaqKgH3Htf1yZRjiGjwMrU27lqjy4EriS-yD8_RFtT5rsgNRnhQm25hBt5zTu1az4OBKhxofKPH6t8Fl-RNl-y8YUzSsB3sUJ3IwRLbsB56G6F_VaQhpubbsZp0TiBL8cWSOcoE1uyaiJRKQq8uZKFQu2zCyj1I5ILHjajG9rMViaEF1W0u1oapueZYGvAdWOc4FGG28upzHKj0iRmEweCXke0Wjjaq5Ac_2AP86WlMtjfwHwhhZXlP6dvHbIk0ey88JMD38Fgc5gmgJ84WrWL8NJRS6yX9PIxgHG5JAG97jVkm7lP10VZlRvAT8lfbak_rEztsOv4hykC8qz7TH15CJ7GwguVTCdHVhv9Jy7ZNZIfe9nBVhxL6wex1Pm8dmdcBJ1MnIlw-Uzkl2QvstVKKit53VYKj0pQjficN6AAYDQtWZ80cZUbMltUAVYjnIutyFMu57QuS9zHZ-qY_3_Ae40hmu06OAZnDTHD8kbcJT63r88EavwWlBwmtyb0oEHPaZ5ZFSPcK48mdvrEDg8L-UR8gH2tJBB3NaXDBu3VfgtuCiwBFY-2RwXGWl1ihAQ09SpemMgqdK7vCZpentZgTtTl19w_07lq6e6Qi8vFRcaQ74aMApY205E6f4TpKVpzowiW8DyuavtzUrH1E-Pygj89J8lRhwsA0jfaUD8e4S8FCM82BoELv4cDfH9NLuIIZMBmKOZ--" :
			null
	}
}

function cq() {
	var gC, j, k, max, aT5, nk, aT7, aT8, aT9, aTA, aTB, aTC, aTD, aTE, aT6 = 1e4;

	function aTL(aTK, nn, fk) {
		var aC;
		for (aT7[0] = aTK, aC = 1; aC < fk; aC++) aT7[aC] = aT7[aC - 1] + nn, nn = aT7[aC] >= aT6 ? (aT7[aC] = aT6 - 1, -nn) : aT7[aC] < 0 ? (aT7[aC] = 0, -nn) : (nn += 16384 <= az.random() ? nk : -nk) < -aT5 ? -aT5 : aT5 < nn ? aT5 : nn
	}

	function aTN(fr, ft, aTO, fk) {
		(aTO ? function(fr, ft, fk) {
			var aC;
			for (aC = 0; aC < fk; aC++) gC[ft * j + fr + aC] = aT7[aC]
		} : function(fr, ft, fk) {
			var aC;
			for (aC = 0; aC < fk; aC++) gC[ft * j + fr + aC * j] = aT7[aC]
		})(fr, ft, fk)
	}

	function aTR(value, fk) {
		var aC, aQJ, fO, kL = value - aT7[fk - 1];
		if (0 != kL) {
			for (aQJ = 1 + bO.gB(Math.abs(kL), fk - 1), aQJ = kL < 0 ? -aQJ : aQJ, aT7[fk - 1] = value, fO = (fO = fk - 1 - bO.gB(Math.abs(kL), Math.abs(aQJ))) < 1 ? 1 : fk - 2 < fO ? fk - 2 : fO, aC = fk - 2; fO <= aC; aC--) aT7[aC] += kL - (fk -
				1 - aC) * aQJ;
			(kL < 0 ? function(fk) {
				var aC;
				for (aC = fk - 2; 1 <= aC; aC--) aT7[aC] < 0 && (aT7[aC] = -aT7[aC] - 1)
			} : function(fk) {
				var aC;
				for (aC = fk - 2; 1 <= aC; aC--) aT7[aC] >= aT6 && (aT7[aC] = 2 * aT6 - aT7[aC] - 1)
			})(fk)
		}
	}

	function aTU(a6R, a6S, fk) {
		for (var aC = 0; aC < fk; aC++) a6R[aC] = a6S[aC]
	}

	function aTV(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aTW(a9G, gap, ic) {
		aT8.push(a9G), aT9.push(gap), aTA.push(ic)
	}
	this.a8 = function(a7l) {
		! function(a7l) {
			var aC;
			for (j = a7l[0], k = a7l[1], aT5 = a7l[2], nk = a7l[3], gC = new Int16Array(j * k), max = k < j ? j : k, aT7 = new Int16Array(max), aT8 = [], aT9 = [], aTA = [], aTB = new Array(j), aTC = new Array(k), aC = j - 1; 0 <= aC; aC--) aTB[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aTC[aC] = !1;
			aTD = new Int16Array(j), aTE = new Int16Array(k)
		}(a7l),
		function(fk) {
			var aTK = az.random() % aT6,
				nn = az.random() % (2 * aT5 + 1) - aT5;
			aTL(aTK, nn, fk)
		}(max), aTU(aTE, aT7, k), aTN(0, 0, !0, j);
		var fr, ft, a7l = gC[0],
			fk = max,
			nn = az.random() % (2 * aT5 + 1) - aT5;
		for (aTL(a7l, nn, fk), aTU(aTD, aT7, j), aTN(0, 0, !1, k), aTV(aTD), aTV(aTE), aTL(gC[j - 1], aTD[j - 1], k), aTN(j - 1, 0, !1, k), aTL(gC[j * (k - 1)], aTE[k - 1], j), aTR(gC[j * k - 1], j), aTN(0, k - 1, !0, j), aTB[j - 1] = aTB[0] = !
			0, aTC[k - 1] = aTC[0] = !0, aTW(0, j, !0), aTW(0, k, !1), ! function() {
				var aTY, a9G;
				for (;;) {
					if (aTY = function() {
							var aC, aTY = aT8.length - 1;
							for (aC = aTY - 1; 0 <= aC; aC--) aT9[aC] > aT9[aTY] && (aTY = aC);
							return aTY
						}(), aT9[aTY] < 5) return;
					a9G = aT8[aTY] + bO.gB(aT9[aTY], 2), (aTA[aTY] ? function(fr) {
						var fk, aTb, aC, aLB = 0,
							aTc = 0;
						for (; aTc < k - 1;) {
							for (aC = aLB + 1; aC < k; aC++)
								if (aTC[aC]) {
									aTc = aC;
									break
								} fk = aTc - aLB + 1, aTL(gC[fr + j * aLB], 0 === aLB ? aTD[fr] : aT7[aTb - 1] - aT7[aTb - 2], fk), aTR(gC[aTc * j + fr], fk), aTN(fr, aLB, !1, fk), aTb = fk, aLB = aTc
						}
						aTB[fr] = !0
					} : function(ft) {
						var fk, aTb, aC, aLB = 0,
							aTc = 0;
						for (; aTc < j - 1;) {
							for (aC = aLB + 1; aC < j; aC++)
								if (aTB[aC]) {
									aTc = aC;
									break
								} fk = aTc - aLB + 1, aTL(gC[ft * j + aLB], 0 === aLB ? aTE[ft] : aT7[aTb - 1] - aT7[aTb - 2], fk), aTR(gC[ft * j + aTc], fk), aTN(aLB, ft, !0, fk), aTb = fk, aLB = aTc
						}
						aTC[ft] = !0
					})(a9G), aTW(a9G, aT8[aTY] + aT9[aTY] - a9G, aTA[aTY]), aT9[aTY] = a9G - aT8[aTY] + 1
				}
			}(), fr = 0; fr < j; fr++)
			if (!aTB[fr])
				for (ft = 0; ft < k; ft++) aTC[ft] || ! function(fr, ft) {
					var value = gC[ft * j + fr - 1] + gC[(ft - 1) * j + fr],
						aBF = 2;
					aTB[fr + 1] && (aBF++, value += gC[ft * j + fr + 1]);
					aTC[ft + 1] && (aBF++, value += gC[(ft + 1) * j + fr]);
					gC[ft * j + fr] = bO.gB(value, aBF)
				}(fr, ft)
	}, this.aRW = function() {
		return gC
	}, this.aR9 = function() {
		gC = null
	}
}

function aMp(g3, g4) {
	return 0 <= g3 ? bO.gB(g3, g4) : -bO.gB(-g3, g4)
}

function kc(gC) {
	return gC * gC
}

function aAG(g3, g4) {
	return g4 < g3 ? g3 : g4
}

function aFf(g3, g4) {
	return g3 < g4 ? g3 : g4
}

function aCr(g3, gC, g4) {
	return gC < g3 ? g3 : g4 < gC ? g4 : gC
}

function aTe(gC, fk) {
	for (var eu = bO.gB(gC + 1, 2), aC = 0; aC < fk; aC++) eu = bO.gB(eu + bO.gB(gC, eu), 2);
	return eu
}

function aOp(gC, fk) {
	return gC < 1 ? 0 : aTe(gC, fk)
}

function aTf(o9, oA, vc, aCb, oM, oN, vd, wI) {
	return !(o9 + vc <= oM || oA + aCb <= oN || oM + vd <= o9 || oN + wI <= oA)
}

function aTg(o9, oA, vc, aCb, oM, oN, vd, wI) {
	return o9 <= oM && oA <= oN && oM + vd <= o9 + vc && oN + wI <= oA + aCb
}

function aTh(gC) {
	return Math.floor(!!gC * (1 + Math.log2(gC + .5)))
}

function c6() {
	this.gB = function(g3, g4) {
		return Math.floor((g3 + .5) / g4)
	}, this.aTi = function(g3, g4) {
		return Math.floor(g3 * (g4 + .5))
	}, this.sqrt = function(gC) {
		return ~~Math.sqrt(gC + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.iw = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aTj = function(gT, gV, gX) {
		return Math.max(Math.min(gT, gV), gX)
	}, this.aTk = function(aTl, aTm, fr, ft) {
		fr -= aTl, aTl = ft - aTm, ft = 0;
		return 0 == fr ? ft = 0 <= aTl ? Math.PI : 0 : (ft = Math.atan(aTl / fr), ft += 0 < fr ? .5 * Math.PI : 1.5 * Math.PI), ft
	}, this.log2 = function(gC) {
		return Math.floor(!!gC * (1 + Math.log2(gC + .5)))
	}, this.log10 = function(gC) {
		return Math.floor(Math.log10(gC + .5))
	}, this.aTo = function(aGD, aTp, aTq, aTr, aTs) {
		return aTq - aTs < aGD && aGD < aTq + aTs && aTr - aTs < aTp && aTp < aTr + aTs
	}, this.a19 = function(aDH, aDJ) {
		return aDH * aDH + aDJ * aDJ
	}
}

function dr() {
	this.aLz = new aTt, this.aTu = new aTv, this.aOc = new aTw
}

function aTt() {
	this.eC = 2, this.aSg = 6, this.aTx = 1024, this.aTy = 3, this.aTz = 65535, this.aU0 = 2
}

function aTw() {
	var aU1 = new aU2;

	function aUE(aTu, fr, ft, fn, aD8, aD9) {
		if (aTu.fr = fr, aTu.ft = ft, aTu.aUF(fn)) {
			for (aTu.kM(fr, ft, fn); !aTu.aUG(aD8, aD9);) {
				var el = function(aTu) {
					var el, iq = aTu.history,
						aUJ = aTu.aUF(aTu.fn),
						left = aTu.aUF(aTu.aUI(1)),
						right = aTu.aUF(aTu.aUI(2));
					if (!aUJ || left || right)
						if (aUJ && aU1.aU7(aTu.aUK, iq)) el = 0;
						else if (left && right) el = aU1.aU7(aTu.aUL, iq) ? 1 : 2;
					else {
						if (!left && !right) return -1;
						el = left ? 1 : 2
					} else el = 0;
					return aTu.aUM(el), el
				}(aTu);
				if (el < 0) return;
				aTu.aQJ(aTu.aUI(el))
			}
			return 1
		}
	}
	this.a0c = function(aJQ) {
		var j, k, hD, aTu, aLz = bz.aLz;
		return !(aJQ.length < aLz.aSg + 5 || aJQ[0] !== aLz.eC) && (k = aJQ[3] << 8 | aJQ[4], hD = aJQ[5], !((j = aJQ[1] << 8 | aJQ[2]) < 1 || k < 1 || hD < 1 || hD > aLz.aU0)) && ((aTu = bz.aTu).dv(j, k), aU1.dv(aJQ, aLz.aSg), aJQ = aU1.aU3(1),
			function(aTu) {
				var j = aTu.j,
					gC = -1;
				for (; aU1.aU7(aTu.aU8, 0);) {
					var g3 = aU1.aU9(aTu.aUA, 0);
					if (g3 < 0) return;
					var g3 = (gC += g3 + 1) % (j + 1),
						ft = Math.floor(gC / (j + 1));
					if (ft > aTu.k || !aTu.aUB(g3, ft)) return;
					var fn = aTu.aUC(g3, ft);
					if (aTu.aUD(g3, ft, fn) < 0 || !aUE(aTu, g3, ft, fn, -1, -1)) return
				}
				return 1
			}(aTu)) && function(aTu) {
			var j = aTu.j,
				gC = -1;
			for (; aU1.aU7(aTu.aU8, 1);) {
				var g3 = aU1.aU9(aTu.aUA, 32);
				if (g3 < 0) return;
				var g3 = (gC += g3 + 1) % (j + 1),
					ft = Math.floor(gC / (j + 1));
				if (ft >= aTu.k || 0 == g3 || j <= g3 || 0 === ft) return;
				if (!aUE(aTu, g3, ft, 0, g3, ft)) return
			}
			return 1
		}(aTu) ? {
			j: j,
			k: k,
			hD: hD,
			a2I: function(aTu, pA) {
				for (var j = aTu.j, k = aTu.k, aUN = aTu.aUN, aUO = aTu.aUO, a2I = new Uint8Array(j * k), eu = pA, ft = 0; ft < k; ft++)
					for (var hJ = ft * j, e = (0 < ft && (eu = a2I[hJ - j] ^ aUN[hJ] >> 1), a2I[hJ] = eu, aUO + ft * (j + 1)), fr = 1; fr < j; fr++) eu ^= aUN[e + fr] >> 1, a2I[hJ + fr] = eu;
				return a2I
			}(aTu, aJQ)
		} : null
	}
}

function aTv() {
	this.j = 0, this.k = 0, this.aUN = null, this.aUO = 0, this.fr = 0, this.ft = 0, this.fn = 0, this.history = 0, this.aUK = null, this.aUL = null, this.aU8 = null, this.aUA = null;
	var aUP = [1, 0, -1, 0],
		aUQ = [0, 1, 0, -1];
	this.dv = function(j, k) {
		var aLz = bz.aLz,
			aUR = Math.pow(3, aLz.aTy);
		this.j = j, this.k = k, this.aUO = j * (k + 1), this.aUN = new Uint8Array(this.aUO + (j + 1) * k), this.aUK = new Uint16Array(aUR).fill(aLz.aTx), this.aUL = new Uint16Array(aUR).fill(aLz.aTx), this.aU8 = new Uint16Array(2).fill(aLz.aTx),
			this.aUA = new Uint16Array(64).fill(aLz.aTx)
	}, this.aUD = function(fr, ft, fn) {
		var j = this.j,
			k = this.k;
		return 0 === fn ? fr < j && 0 < ft && ft < k ? ft * j + fr : -1 : 2 === fn ? 0 < fr && 0 < ft && ft < k ? ft * j + fr - 1 : -1 : 1 === fn ? ft < k && 0 < fr && fr < j ? this.aUO + ft * (j + 1) + fr : -1 : 0 < ft && 0 < fr && fr < j ? this
			.aUO + (ft - 1) * (j + 1) + fr : -1
	}, this.aUF = function(fn) {
		fn = this.aUD(this.fr, this.ft, fn);
		return 0 <= fn && 2 !== this.aUN[fn]
	}, this.aUB = function(fr, ft) {
		return 0 === fr || 0 === ft || fr === this.j || ft === this.k
	}, this.aUG = function(aD8, aD9) {
		return this.fr === aD8 && this.ft === aD9 || this.aUB(this.fr, this.ft)
	}, this.aUS = function(el) {
		el = this.aUD(this.fr, this.ft, this.aUI(el));
		return el < 0 ? 0 : this.aUN[el]
	}, this.aUC = function(fr, ft) {
		return 0 === ft ? 1 : ft === this.k ? 3 : 0 === fr ? 0 : 2
	}, this.kM = function(fr, ft, fn) {
		this.fr = fr, this.ft = ft, this.history = 0, this.aQJ(fn)
	}, this.aQJ = function(fn) {
		this.aUN[this.aUD(this.fr, this.ft, fn)] = 2, this.fr += aUP[fn], this.ft += aUQ[fn], this.fn = fn
	}, this.aUI = function(el) {
		return 0 === el ? this.fn : this.fn + (1 === el ? 3 : 1) & 3
	}, this.aUM = function(el) {
		this.history = (3 * this.history + el) % this.aUK.length
	}
}

function aU2() {
	var aUT = 0,
		aUU = 0,
		aUV = null,
		y5 = 0;

	function aUW() {
		return y5 < aUV.length ? aUV[y5++] : 0
	}
	this.dv = function(aJQ, a00) {
		aUV = aJQ, y5 = a00 + 1, aUT = 4294967295;
		for (var aC = aUU = 0; aC < 4; aC++) aUU = 256 * aUU + aUW()
	}, this.aU7 = function(aUX, aC) {
		for (var hI = aUX[aC], aUY = (aUT >>> 11) * hI, aUY = aUU < aUY ? (aUT = aUY, aUX[aC] = hI + (2048 - hI >> 5), 0) : (aUU -= aUY, aUT -= aUY, aUX[aC] = hI - (hI >> 5), 1); aUT < 16777216;) aUT *= 256, aUU = 256 * aUU + aUW();
		return aUY
	}, this.aU3 = function(g4) {
		for (var gC = 0, aC = 0; aC < g4; aC++) {
			var p3 = 0;
			for ((aUT = Math.floor(aUT / 2)) <= aUU && (aUU -= aUT, p3 = 1), gC = 2 * gC + p3; aUT < 16777216;) aUT *= 256, aUU = 256 * aUU + aUW()
		}
		return gC
	}, this.aU9 = function(aUX, p4) {
		for (var hJ = 0; this.aU7(aUX, p4 + hJ);)
			if (30 < ++hJ) return -1;
		return Math.pow(2, hJ) + this.aU3(hJ) - 1
	}
}

function dO() {
	this.z = new aUZ, this.aUa = new aUb, this.vX = 0;
	var aUc = new Array(32);

	function aUf() {
		for (var fk = aUc.length, aC = 0; aC < fk; aC++) aUc[aC] = null
	}
	this.dv = function() {
		for (var aUd, aUe = document.body.firstChild; aUe;) aUd = aUe.nextSibling, !document.body.contains(aUe) || "DIV" !== aUe.tagName && "INPUT" !== aUe.tagName && "BUTTON" !== aUe.tagName || u.removeChild(document.body, aUe), aUe = aUd
	}, this.v = function(eT, a53, a7l) {
		void 0 === a53 && (a53 = this.vX), bi.e2 = !0, 0 === eT && (0 === ab.a4y() ? eT = 5 : a1.a2.setState(13)), this.uN(), this.vX === eT && (a53 = aUc[eT].a53, aUc[eT] = null), this.vX = eT;
		var m1 = aUc[eT];
		if (!m1 || 4 === eT || 7 === eT || 8 === eT || 9 === eT || 10 === eT || 11 === eT || 13 === eT || 15 === eT || 18 === eT || 20 <= eT && eT <= 28 || 32 === eT || 33 === eT) {
			if (0 === eT) return void aUf();
			1 === eT ? m1 = new aUg : 2 === eT ? m1 = new aUh : 3 === eT ? m1 = new aUi : 4 === eT || 9 === eT || 10 === eT || 11 === eT || 13 === eT || 33 === eT ? m1 = a7l : 5 === eT ? m1 = new aUj : 6 === eT ? m1 = new aUk : 7 === eT ? m1 =
				new aUl(u.z.aUm) : 8 === eT ? m1 = a7l : 12 === eT ? m1 = new aUn : 14 === eT ? m1 = new aUo : 15 === eT ? m1 = new aUl(u.z.aUp) : 16 === eT ? m1 = new aUq : 17 === eT ? m1 = new aUr : 18 === eT ? m1 = new aUs : 19 === eT ? m1 =
				new aUt : 20 === eT ? m1 = new aUu : 21 === eT ? m1 = new aUv : 22 === eT ? m1 = new aUw : 23 === eT ? m1 = new aUx : 24 === eT ? m1 = new aUy : 25 === eT ? m1 = new aUz : 26 === eT ? m1 = new aV0 : 27 === eT ? m1 = new aV1 :
				28 === eT ? m1 = new aV2 : 29 === eT ? m1 = new aV3 : 30 === eT ? m1 = new aV4 : 31 === eT ? m1 = new aV5 : 32 === eT && (m1 = new aV6), m1.a53 = a53, aUc[eT] = m1
		}
		m1.show(a7l)
	}, this.a4x = function() {
		this.iX() && this.aV7(this.a52().a53)
	}, this.aV7 = function(eT) {
		this.iX() && (aUc[eT] ? (this.uN(), bi.e2 = !0, this.vX = eT, aUc[eT].show()) : this.v(eT))
	}, this.uN = function() {
		this.iX() && aUc[this.vX].uN()
	}, this.y = function() {
		this.iX() && (aUc[this.vX].uN(), aUf(), this.vX = 0, a1.a2.setState(13))
	}, this.yv = function() {
		var m1;
		this.iX() && (m1 = aUc[this.vX]).yv && m1.yv()
	}, this.resize = function() {
		if (!this.iX()) return !1;
		aUc[this.vX].resize()
	}, this.hy = function(fr, ft) {
		var m1;
		this.iX() && (m1 = aUc[this.vX]).hy && m1.hy(fr, ft)
	}, this.a5L = function(fr, ft) {
		var m1;
		this.iX() && (m1 = aUc[this.vX]).a5L && m1.a5L(fr, ft)
	}, this.a5j = function() {
		var m1;
		this.iX() && (m1 = aUc[this.vX]).a5j && m1.a5j()
	}, this.a5O = function(mL, mM, deltaY) {
		var m1;
		this.iX() && (m1 = aUc[this.vX]).a5O && m1.a5O(mL, mM, deltaY)
	}, this.a5t = function(code) {
		var m1;
		return !!this.iX() && ((m1 = aUc[this.vX]).a5t && m1.a5t(code), !0)
	}, this.ep = function() {
		var m1;
		this.iX() && (m1 = aUc[this.vX]) && m1.ep && m1.ep()
	}, this.iX = function() {
		return 0 < this.vX
	}, this.a52 = function() {
		return aUc[this.vX]
	}, this.a91 = function(eT) {
		return aUc[eT]
	}, this.aV8 = function() {
		return aUc
	}, this.removeChild = function(oy, a7B) {
		try {
			oy.removeChild(a7B)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aUl(data) {
	var aV9, aVA;

	function aVY(aKW, aVZ) {
		if (aKW.tf === bE.rg) return clearTimeout(aKW.aVa), 1;
		aKW.ti(bE.rg), clearTimeout(aKW.aVa), aKW.aVa = setTimeout(aVZ, 1e3)
	}

	function aVD(tJ, x2) {
		if (!data.aVB) {
			if (data.aW3) {
				if (x2) return
			} else {
				if (!x2) return;
				if (data.a0A < 1e4) return
			}
			var aWA, xD = new t3,
				aW8 = x2 && 1e5 <= data.a0A,
				aW9 = xD.t6(x2 ? (aW8 ? "⚠️ " : "") + L(317) : L(318)),
				aWC = (aW8 && (aW9.style.color = "yellow"), x2 ? xD.t7(L(319, [bD.pc.a83(data.a0A, .01, 0)])) : ((aWA = new uB({
					value: data.aWB,
					eT: -1
				})).e.readOnly = !0, aWA.e.type = "password", xD.tG(aWA), xD.tG(new uZ([new x(L(248), function(e) {
					return e.textContent === L(248) ? (e.textContent = L(249), aWA.e.type = "text") : (e.textContent = L(248), aWA.e.type = "password"), !0
				}).button, new x(L(245), function(e) {
					return bD.tO.a79(aWA.e), bD.tO.ya(e), !0
				}).button]))), xD.tB(L(x2 ? 318 : 320)).style.marginTop = "0.75em", new uB({
					value: "",
					eT: -1
				}, 0, 0)),
				aWE = (aWC.e.type = "email", aWC.e.autocomplete = "email", aWC.e.name = "email", aWC.e.inputMode = "email", aWC.e.spellcheck = !1, xD.tG(aWC), xD.tG(new uZ([new x(L(321), function(e) {
					return b1.aVi.aWD({
						action: 3,
						pY: aWC.e.value.trim().substring(0, 63)
					}), bD.tO.ya(e), !0
				}).button])), x2 && xD.t7(L(322)), xD.tB(L(323)).style.marginTop = "0.75em", new uB({
					value: "",
					eT: -1
				}, 1));
			xD.tG(aWE), xD.tG(new uZ([new x(L(324), function() {
				b1.aVi.aVj({
					action: 4,
					pg: "",
					value: Math.floor(+aWE.e.value)
				}), u.v(8, u.a52().a53, new vY(18))
			}).button])), tJ.push(xD)
		}
	}
	this.show = function() {
		data.aVB && bL.aWW("account", data.pg), aV9.show(), this.resize()
	}, this.uN = function() {
		aV9.uN()
	}, this.resize = function() {
		aV9.resize(), aVA.resize()
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	}, aV9 = new yh(data.username, [new x("⬅️ " + L(49), function() {
		bL.clear(), u.a4x()
	}), new x(data.aVB ? "🔄 " + L(211) : L(212), function() {
		u.v(8, data.aVB ? u.a52().a53 : void 0, new vY(25, {
			action: 0,
			pg: data.pg,
			vW: data.vW
		}))
	}, 0, 0, 1)]), aVA = new tH(aV9.ym, function() {
		var tJ = [];
		aVD(tJ, 1), tJ.push(function() {
				var xD = new t3;
				xD.t6(L(294)), data.aW3 && (xD.tB("✅ " + L(295)).style.marginBottom = "0.75em");
				var a4Z = data.aW4;
				a4Z < 1 ? (xD.tB(L(296)), 0 === data.aW5 ? xD.t7(L(297)) : 1 === data.aW5 ? xD.t7(L(298)) : 2 === data.aW5 ? xD.t7(L(299)) : 3 === data.aW5 ? xD.t7(L(300)) : 4 === data.aW5 ? xD.t7(L(301)) : 5 === data.aW5 ? xD.t7(L(
					302)) : 6 === data.aW5 ? xD.t7(L(303)) : xD.t7(L(304))) : (xD.tB(L(305)), a4Z = a4Z < 2 ? L(306) : a4Z < 61 ? 2 === a4Z ? L(307) : L(308, [a4Z - 1]) : a4Z < 84 ? 61 === a4Z ? L(309) : L(310, [a4Z - 60]) : a4Z <
					255 ? 84 === a4Z ? L(311) : L(312, [a4Z - 83]) : L(313), xD.t7(a4Z));
				{
					var t8, aVf;
					xD.tG(new uz), data.aVB && (t8 = xD.t7(), xD.tG(new uZ([new x(bm.zK.xq(data.pg) ? L(164) : L(165), function(e) {
						return bm.zK.zX(data.pg) ? (e.textContent = L(164), aVf(1)) : (e.textContent = L(165), aVf(0)), !0
					}).button])), aVf = function(gC) {
						t8.textContent = gC ? L(314) : ""
					}, bm.zK.xq(data.pg) && aVf(1), xD.tG(new uz))
				}
				var qF, uA = new uB({
					value: data.username,
					eT: -1
				});
				uA.e.readOnly = !0, xD.tG(uA), xD.tG(new uZ([new x(L(245), function(e) {
					return bD.tO.a79(uA.e), bD.tO.ya(e), !0
				}).button])), data.aVB || xD.t7(L(315));
				(data.aW6 || data.aW7) && (xD.tG(new uz), xD.t7(L(316)), data.aW6 && ((qF = xD.t7("• Muted")).style.color = "orange", qF.style.marginTop = "0.5em"), data.aW7) && ((qF = xD.t7("• Redacted")).style.color = "orange", qF.style
					.marginTop = "0.5em");
				data.aVB && (xD.tG(new uz), xD.tB(b1.z.aVb("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", function(xD) {
					function click(e, aKY) {
						return bs.aKZ(data.pg, aKY) && (bD.tO.ya(e), p9[0].ti(1), p9[1].ti(1)), !0
					}
					var color = bs.aKX(data.pg) ? 1 : 0,
						p9 = [];
					p9.push(new x(L(281), function(e) {
						return click(e, 1)
					}, color || bE.qr)), p9.push(new x(L(282), function(e) {
						return click(e, 0)
					}, color || bE.r6)), xD.tG(new uZ([p9[0].button])), xD.tG(new uZ([p9[1].button]))
				}(xD));
				return xD
			}()),
			function(tJ) {
				var xD, uA, k, aVg, aKW, aVh;
				data.aVB && data.aVn && ((xD = new t3).t6(L(240)), xD.t7(L(234)), (uA = new uB({
					value: data.aVn,
					eT: -1
				})).e.readOnly = !0, xD.tG(uA), k = !1, aVg = new x(L(241), function(e) {
					return k && b1.z.eq(0) && (bD.tO.ya(e), aVh(), b1.aVi.aVo({
						action: 9,
						pg: data.pg
					})), !0
				}, 1), aKW = new x(L(232), function(e) {
					if (e.textContent === L(232)) {
						if (100 * data.aVn < data.a0A) return new aSw(L(242)), !0;
						k = !0, e.textContent = L(170), aVg.ti(0), aVg.button.style.color = bE.rU
					} else aVh();
					return !0
				}), xD.tG(new uZ([aKW.button])), aVh = function() {
					k = !1, aKW.button.textContent = L(232), aVg.ti(1), aVg.button.style.color = bE.qP
				}, xD.tG(new uZ([aVg.button])), xD.t7(L(243)), tJ.push(xD))
			}(tJ),
			function(tJ) {
				var xD, t8, aGX, aWG, aVg, aKW, aVh;
				data.aVB || ((xD = new t3).t6(L(325)), (t8 = xD.t7(data.aWF.length + " / 160")).style.textAlign = "center", aGX = !0, (aWG = new z4(0, 1, function(e) {
					e = e.target.value.length;
					t8.textContent = e + " / 160", 160 < e ? aGX && (aGX = !1, aKW.ti(1)) : aGX || (aGX = !0, aKW.ti(0))
				})).e.rows = 6, aWG.e.style.fontSize = "1em", aWG.zB(data.aWF), xD.tG(aWG), 0 !== data.aWH ? (aKW = new x(L(326), function() {
					if (!aGX) return !0;
					u.v(8, u.a52().a53, new vY(29, {
						action: 1,
						pY: aWG.zC().substring(0, 160)
					}))
				}, 0, 0, 1), xD.tG(new uZ([aKW.button])), xD.tG(new uZ([new x(1 === data.aWH ? L(327) : L(328), function() {
					u.v(8, u.a52().a53, new vY(29, {
						action: 0,
						pY: ""
					}))
				}, 0, 0, 1).button])), xD.t7(1 === data.aWH ? L(329, [data.aWI - 1]) : L(330, [data.aWI - 1])), xD.t7(L(331, [data.aWJ]))) : (aVg = new x(L(241), function() {
					if (!aWG.e.readOnly) return !0;
					u.v(8, u.a52().a53, new vY(29, {
						action: 1,
						pY: aWG.zC().substring(0, 160)
					}))
				}, 1), aKW = new x(L(232), function(e) {
					if (e.textContent === L(232)) {
						if (!aGX) return !0;
						e.textContent = L(170), aWG.e.readOnly = !0, aVg.ti(0), aVg.button.style.color = bE.rU
					} else aVh();
					return !0
				}), xD.tG(new uZ([aKW.button])), xD.t7(L(331, [data.aWJ])), aVh = function() {
					aKW.button.textContent = L(232), aWG.e.readOnly = !1, aVg.ti(1), aVg.button.style.color = bE.qP
				}, xD.tG(new uZ([aVg.button]))), tJ.push(xD))
			}(tJ),
			function(tJ) {
				var xD;
				data.aVB && 0 !== data.aWH && ((xD = new t3).t6(L(332)), xD.t9(data.aWF), xD.tG(new uZ([new x(L(333, 0, "Report"), function(e) {
					return b1.z.eq(0) && (bD.tO.ya(e), b1.aVi.aVo({
						action: 5,
						pg: data.pg
					})), !0
				}, 0, 0, 1).button])), tJ.push(xD))
			}(tJ), tJ.push(function() {
				var xD = new t3,
					aVc = (xD.t6(L(213)), xD.tB(b1.z.aVb("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(214), L(215), L(216), L(217), L(218), L(219), L(220), L(221), L(222), L(223), L(224), L(225), L(226), L(227)]),
					eS = data.aVd;
				return xD.tB(L(228) + bD.pc.a83(data.a0A, .01, 2) + "<br>" + L(229) + (eS + 1) + " / " + data.a09 + "<br>" + L(230) + aVc[function(eS, a0A) {
					if (eS < 10) return 0;
					if (eS < 30) return 1;
					if (eS < 60) return 2;
					if (3e4 <= (a0A = bO.gB(a0A, 100))) return 3;
					if (12e3 <= a0A) return 4;
					if (7e3 <= a0A) return 5;
					if (3e3 <= a0A) return 6;
					if (1e3 <= a0A) return 7;
					if (500 <= a0A) return 8;
					if (200 <= a0A) return 9;
					if (70 <= a0A) return 10;
					if (20 <= a0A) return 11;
					if (3 <= a0A) return 12;
					return 13
				}(eS, data.a0A)]), xD
			}()), data.aVB && tJ.push(function() {
				var xD = new t3,
					uA = (xD.t6(L(231)), xD.tB(b1.z.aVb("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new uB({
						value: bm.buffer.data[147].value,
						eT: -1
					}, 1, void 0, function(e) {
						bm.rv.q1(147, aVf(e.target.value))
					})),
					aVg = (xD.tG(uA), new x(L(21), function(e) {
						var gC;
						return uA.e.readOnly && b1.z.eq(0) && (gC = parseInt(bm.buffer.data[147].value, 10), u.aUa.send(gC, data.pg, function() {
							bD.tO.ya(e), aVh(), b1.aVi.aVj({
								action: 0,
								pg: data.pg,
								value: gC
							})
						})), !0
					}, 1)),
					aKW = new x(L(232), function(e) {
						return e.textContent === L(232) ? (e.textContent = L(170), uA.e.readOnly = !0, aVg.ti(0), aVg.button.style.color = bE.rU, bm.rv.q1(147, uA.e.value), aVf(bm.buffer.data[147].value)) : aVh(), !0
					}),
					t8 = (xD.tG(new uZ([aKW.button])), xD.t7()),
					aVf = function(gC) {
						return t8.innerHTML = u.z.aVk(gC, bm.buffer.data[105].value, data.pg), gC
					},
					aVh = function() {
						aKW.button.textContent = L(232), uA.e.readOnly = !1, aVg.ti(1), aVg.button.style.color = bE.qP
					};
				return aVf(bm.buffer.data[147].value), xD.tG(new uZ([aVg.button])), xD
			}());
		tJ.push(function() {
			var xD = new t3,
				uA = (xD.t6(L(244)), new uB({
					value: data.pg,
					eT: -1
				})),
				aVl = (uA.e.readOnly = !0, xD.tG(uA), xD.tG(new uZ([new x(L(245), function(e) {
					return bD.tO.a79(uA.e), bD.tO.ya(e), !0
				}).button])), xD.tG(new uz), new uB({
					value: data.pg,
					eT: -1
				}));
			return xD.tG(aVl), xD.tG(new uZ([new x(L(246), function(e) {
				u.v(8, u.a52().a53, new vY(25, {
					action: 0,
					pg: aVl.e.value,
					vW: 0
				}))
			}).button])), xD
		}()), data.aVB || (tJ.push(function() {
			var xD = new t3,
				aVp = (xD.t6(L(247)), new uB(bm.buffer.data[106])),
				customPasswordInput = (aVp.e.readOnly = !0, aVp.e.type = "password", xD.tG(aVp), xD.tG(new uZ([new x(L(248), function(e) {
					return e.textContent === L(248) ? (e.textContent = L(249), aVp.e.type = "text") : (e.textContent = L(248), aVp.e.type = "password"), !0
				}).button, new x(L(245), function(e) {
					return bD.tO.a79(aVp.e), bD.tO.ya(e), !0
				}).button])), new uB({
					value: "",
					eT: -1
				}));
			return customPasswordInput.e.placeholder = "Custom new password (optional)", xD.tG(customPasswordInput), xD.tG(new uZ([new x(L(250), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.e.value) && u.v(8, u.a52().a53, new vY(15))
			}).button])), xD.t6(L(251), "0.8em"), xD.t7(L(252)), xD.t7(L(253)), xD.t7(L(254)), xD
		}()), tJ.push(function() {
			var xD = new t3;
			return xD.t6(L(255)), xD.tG(new uZ([new x(L(256), function() {
				u.v(6, u.a52().a53)
			}).button])), xD.tG(new uZ([new x(L(257), function() {
				bm.rv.q1(105, ""), u.v(8, u.a52().a53, new vY(18))
			}).button])), xD.tG(new uZ([new x(L(258) + bm.buffer.data[105].value, function() {
				u.v(4, 0, new w(L(259), L(260), !0, [new x("⬅️ " + L(49), function() {
					u.v(7, u.a91(7).a53)
				})]))
			}, bE.r6).button])), xD
		}()), tJ.push(function() {
			function aVr(eT) {
				aVq[0].ti(0 === eT ? bE.qb : bE.qm), aVq[1].ti(0 === eT ? bE.qb : bE.r6), aVq[2].ti(eT === tE.tF.length - 1 || eT < 5 ? bE.qb : bE.r6)
			}
			var tE, aVq, xD = new t3;
			xD.t6(L(265)), xD.t7(L(266)), bm.z.zs();
			return aVq = [new x(L(267), function() {
				var eT = Math.min(bm.buffer.data[117].value, tE.tF.length - 1);
				eT < 1 || (eT = bm.z.zx(eT)) && (bm.rv.q1(105, eT.pg), bm.rv.q1(106, eT.password), u.v(8, u.a52().a53, new vY(18)))
			}, bE.qb, 1), new x(L(263), function() {
				var eT = Math.min(bm.buffer.data[117].value, tE.tF.length - 1);
				if (!(eT < 1)) {
					tE.tF[eT].remove(), tE.tF.splice(eT, 1);
					for (var aC = eT; aC < tE.tF.length; aC++) tE.tF[aC].name = "" + aC;
					bm.z.zv(eT), eT = bm.buffer.data[117].value, tE.tF[eT].textContent = tE.tF[eT].textContent.replace("⚪", "🟢"), aVr(eT)
				}
			}, bE.qb, 1), new x(L(264), function() {
				var eT = Math.min(bm.buffer.data[117].value, tE.tF.length - 1);
				if (eT !== tE.tF.length - 1)
					if (aVY(aVq[2], function() {
							var fk = tE.tF.length;
							aVr(Math.min(bm.buffer.data[117].value, fk - 1))
						})) {
						for (var aC = tE.tF.length - 1; eT < aC; aC--) tE.tF[aC].remove(), tE.tF.splice(aC, 1), bm.z.zv(aC);
						aVr(eT)
					}
			}, bE.qb, 1)], tE = new yd(bm.buffer.data[117], aVr), __fx.savedAccounts.decorate(tE.tF, bm.buffer.data[117].vG), aVr(0), tE.tF[0].style.marginTop = "0.5em", xD.tD(tE), xD.tG(new uZ([aVq[0].button])), xD.tG(new uZ(
				[new x("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(bm.buffer.data[117].value)
				}).button])), xD.tG(new uZ([aVq[1].button])), xD.tG(new uZ([aVq[2].button])), xD
		}()));
		return tJ.push(function() {
				var xD = new t3,
					pY = (xD.t6(L(277)), L(278, [(data.aVt / 1e3).toFixed(3)]) + "<br>" + L(279, [data.aVu]));
				data.aVv && (pY += "<br>" + L(280, [(data.aVw / 1e3).toFixed(3)]));
				return xD.tB(pY), xD
			}()), tJ.push(function() {
				var xD = new t3,
					aVc = (xD.t6(L(271)), [L(272), L(273), L(274), L(275)]),
					eS = data.aVs;
				return xD.tB(L(276) + (data.a4I / 100).toFixed(2) + "<br>" + L(229) + (eS + 1) + " / " + data.a09 + "<br>" + L(230) + aVc[eS < 10 ? 0 : eS < 50 ? 1 : eS < 200 ? 2 : 3]), xD
			}()), tJ.push(function() {
				var xD = new t3;
				return xD.t6(L(268)), xD.tB(L(269) + bD.pc.a83(data.a06, .1, 1) + "<br>" + L(229) + (data.a07 + 1) + " / " + data.a09 + "<br>" + L(270) + data.a08), xD
			}()),
			function(tJ) {
				var xD = new t3,
					aWK = data.a0D,
					aWL = (xD.t6(L(334)), xD.tB(L(335, [data.a0B.length ? "[" + data.a0B + "]" : "-"])), xD.tB(L(336, [bD.pc.a83(aWK, .01, 2)])), xD.tB(L(337, [data.a0F + 1 + " / " + data.a09])), data.a0G),
					aWM = (xD.tB(L(338, [bD.pc.a83(aWL, .1, 1)])), data.a0I);
				xD.tB(L(339, [aWM])), xD.tB(L(340, [bD.pc.a83(aWL / Math.max(aWM, 1), .1, 2)])), aWK = data.a0E, xD.t6(L(341), "0.8em"), xD.tB(L(335, [data.a0C.length ? "[" + data.a0C + "]" : "-"])), xD.tB(L(336, [bD.pc.a83(aWK, .01, 2)])),
					aWL = data.a0H, xD.tB(L(338, [bD.pc.a83(aWL, .1, 1)])), aWM = data.a0J, xD.tB(L(339, [aWM])), xD.tB(L(340, [bD.pc.a83(aWL / Math.max(aWM, 1), .1, 2)])), xD.tB(b1.z.aVb("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					tJ.push(xD)
			}(tJ),
			function(tJ) {
				var xD = new t3;
				xD.t6(L(342)), xD.tB(L(276) + (data.aWN / 10).toFixed(1) + "<br>" + L(230) + (data.aWO.length ? L(343, [data.aWO]) : L(344))), data.aVB && xD.tG(new uZ([new x(L(292), function(e) {
					return b1.z.eq(0) && (bD.tO.ya(e), b1.aVi.aVo({
						action: 4,
						pg: data.pg
					})), !0
				}, 0, 0, 1).button]));
				xD.tB(b1.z.aVb("/wiki/clans"), "0.75em").style.marginTop = "0.8em", tJ.push(xD)
			}(tJ), tJ.push(function() {
				var xD = new t3;
				{
					var uA, aKW, aW2, t8, aVf, aVh;
					xD.t6(L(290)), xD.tB(L(291) + data.aW0 + "<br>" + L(229) + (data.aW1 + 1) + " / " + data.a09 + "<br>" + L(230) + br.eV(data.aW1)), data.aVB && ((uA = new uB({
						value: bm.buffer.data[157].value,
						eT: -1
					}, 1, void 0, function(e) {
						bm.rv.q1(157, aVf(e.target.value))
					})).e.style.marginTop = "0.6em", xD.tG(uA), aKW = new x(L(232), function(e) {
						return e.textContent === L(232) ? (e.textContent = L(170), uA.e.readOnly = !0, aW2[0].ti(0), aW2[0].button.style.color = bE.rU, aVf(bm.buffer.data[157].value)) : aVh(), !0
					}), xD.tG(new uZ([aKW.button])), aW2 = [new x(L(292), function(e) {
						return uA.e.readOnly && b1.z.eq(0) && (bD.tO.ya(e), aVh(), b1.aVi.aVj({
							action: 1,
							pg: data.pg,
							value: bO.iw(parseInt(bm.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], t8 = xD.t7(), aVf = function(gC) {
						return gC = bD.h6.a7i(gC, 2, 3e4), t8.textContent = L(293, [gC - 1, gC, bm.buffer.data[105].value]), gC
					}, xD.tG(new uZ([aW2[0].button])), aVh = function() {
						aKW.button.textContent = L(232), uA.e.readOnly = !1, aW2[0].ti(1), aW2[0].button.style.color = bE.qP
					}, aVf(bm.buffer.data[157].value))
				}
				return xD
			}()),
			function(tJ) {
				var xD, a78;
				data.aVB && !data.aWP || (0 === a1.id || data.aVB || data.aWP) && ((xD = new t3).t6("Patreon"), !data.aVB && data.aWQ ? xD.tG(new uZ([new x(L(248), function() {
					b1.aVi.aVo({
						action: 7,
						pg: data.pg
					}), data.aWQ = 0, u.v(7)
				}).button])) : data.aWP ? (xD.tB(L(345, [(data.aWR / 100).toFixed(2)]) + "<br>" + L(346, [1 + data.aWS + " / " + data.aWT]) + "<br>" + L(347, [data.aWU ? L(348) : L(349)])), data.aVB || xD.tG(new uZ([new x(L(350),
					function() {
						b1.aVi.aVo({
							action: 8,
							pg: data.pg
						}), data.aWP = 0, bm.rv.q1(160, 0), u.v(7)
					}).button]))) : (xD.tB(L(351), "0.75em").style.marginBottom = "0.3em", xD.tB("  • " + L(352), "0.75em").style.whiteSpace = "pre", xD.tB("  • " + L(353), "0.75em").style.whiteSpace = "pre", xD.tB("  • " + L(354),
						"0.75em").style.whiteSpace = "pre", xD.tB(L(355), "0.75em").style.marginTop = "1.0em", xD.tB(L(356), "0.75em").style.marginTop = "1.0em", xD.tB("<a href='" + bN.aWV +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a78 = "https://www.patreon.com/oauth2/authorize?state=" + data.pg +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a4E() + "/", xD.tB(L(357), "0.75em").style.marginTop = "1.0em", xD.tB("<a href='" +
						a78 + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aVB || (xD.tG(new uz), xD.tG(new uZ([new x(L(249), function() {
						b1.aVi.aVo({
							action: 6,
							pg: data.pg
						}), data.aWQ = 1, u.v(7)
					}).button])), xD.tB(L(358), "0.75em").style.marginTop = "0.75em")), tJ.push(xD))
			}(tJ), tJ.push(function() {
				var xD = new t3,
					aVc = (xD.t6(L(283)), [L(284), L(285), L(286), L(287), "Scout", L(288)]),
					eS = data.aVy;
				return xD.tB(L(289) + (data.aVz / 100).toFixed(2) + "<br>" + L(229) + (eS + 1) + " / " + data.a09 + "<br>" + L(230) + aVc[eS < 3 ? 0 : eS < 20 ? 1 : eS < 100 ? 2 : eS < 500 ? 3 : eS < 2e3 ? 4 : 5]), xD.tB(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", xD
			}()),
			function(tJ) {
				var xD, uA, aVl, aVg, aKW, aVh;
				data.aVB || ((xD = new t3).t6(L(233)), xD.t7(L(234)), uA = new uB({
					value: bm.buffer.data[184].value,
					eT: -1
				}, 1, void 0, function(e) {
					bm.rv.q1(184, e.target.value)
				}), xD.tG(uA), xD.t7(L(235)), aVl = new uB({
					value: bm.buffer.data[185].value,
					eT: -1
				}, 0, void 0, function(e) {
					bm.rv.q1(185, e.target.value)
				}), xD.tG(aVl), aVg = new x(L(236), function(e) {
					var send;
					return uA.e.readOnly && b1.z.eq(0) && (send = function() {
						bD.tO.ya(e), aVh(), b1.aVi.aVj({
							action: 5,
							pg: bm.buffer.data[185].value,
							value: bO.iw(parseInt(bm.buffer.data[184].value, 10), 1, 1e9)
						})
					}, u.v(4, u.vX, new w(L(238), L(239), !1, [new x("⬅️ " + L(49), function() {
						u.a4x()
					}), new x("✅ OK", function() {
						u.a4x(), send()
					})]))), !0
				}, 1), aKW = new x(L(232), function(e) {
					if (e.textContent === L(232)) {
						var g4 = bJ.fB;
						if (g4.fC(aVl.e.value, 5) === g4.fC(data.pg, 5)) return new aSw(L(237)), !0;
						e.textContent = L(170), uA.e.readOnly = !0, aVl.e.readOnly = !0, aVg.ti(0), aVg.button.style.color = bE.rU, bm.rv.q1(184, uA.e.value)
					} else aVh();
					return !0
				}), xD.tG(new uZ([aKW.button])), aVh = function() {
					aKW.button.textContent = L(232), uA.e.readOnly = !1, aVl.e.readOnly = !1, aVg.ti(1), aVg.button.style.color = bE.qP
				}, xD.tG(new uZ([aVg.button])), tJ.push(xD))
			}(tJ),
			function(tJ) {
				var xD, tE, aVq, eT, aVr;
				data.aVB || bm.zK.get().length && ((xD = new t3).t6(L(261)), eT = 0, aVr = function() {
					var aG5 = bm.zK.get().length;
					aVq[0].ti(eT === aG5 ? bE.qb : bE.qm), aVq[1].ti(eT === aG5 ? bE.qb : bE.r6), aVq[2].ti(eT === aG5 || aG5 - 1 <= eT || eT < 5 ? bE.qb : bE.r6)
				}, aVq = [new x(L(262), function() {
					u.v(8, void 0, new vY(25, {
						action: 0,
						pg: bm.zK.get()[eT],
						vW: 0
					}))
				}, bE.qb, 1), new x(L(263), function() {
					bm.zK.zZ(eT), tE.tF[eT].remove(), tE.tF.splice(eT, 1);
					for (var aC = eT; aC < tE.tF.length; aC++) tE.tF[aC].name = "" + aC;
					bm.zK.get().length && (eT = Math.max(eT - 1, 0), tE.tF[eT].textContent = tE.tF[eT].textContent.replace("⚪", "🟢")), aVr()
				}, bE.qb, 1), new x(L(264), function() {
					if (aVY(aVq[2], aVr)) {
						for (var ie = tE.tF.length - 1; eT < ie; ie--) bm.zK.zZ(ie), tE.tF[ie].remove(), tE.tF.splice(ie, 1);
						aVr()
					}
				}, bE.qb, 1)], aVr(), tE = new yd(bm.zK.zW(), function(aC) {
					eT = aC, aVr()
				}), __fx.followedAccounts.decorate(tE.tF, bm.zK.get()), tE.tF[0].style.marginTop = "0.5em", xD.tD(tE), xD.tG(new uZ([aVq[0].button])), xD.tG(new uZ([new x("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(eT)
				}).button])), xD.tG(new uZ([aVq[1].button])), xD.tG(new uZ([aVq[2].button])), tJ.push(xD))
			}(tJ), aVD(tJ, 0), tJ
	}())
}

function aUw() {
	var aWX, aWY, aWZ, tJ;

	function aWa() {
		aWc(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aV8()[19] = null, u.a4x()
	}

	function aWc() {
		2 === aE.data.aIncomeType ? (bD.tV.a6V(aWZ.zC(), aE.data.aIncomeData, 255), bD.tV.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aWX.show(), this.resize()
	}, this.uN = function() {
		aWX.uN()
	}, this.resize = function() {
		aWX.resize(), aWY.resize()
	}, this.a5t = function(eu) {
		2 === eu && aWX.yn[0].te()
	}, aWX = new yh(L(359), [new x("⬅️ " + L(49), aWa)]), aWY = new tH(aWX.ym, (function(tJ) {
		var xD = new t3;
		xD.t6(L(360)), xD.tD(new yd({
			vG: [L(361), L(362), L(363)],
			value: aE.data.aIncomeType
		}, function(eT) {
			aWc(), 2 !== eT || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fh)), aE.data.aIncomeType = eT, u.v(22)
		})), tJ.push(xD)
	}(tJ = []), function(tJ) {
		var xD;
		1 === aE.data.aIncomeType && ((xD = new t3).t6("Value"), xD.tG(new uB({
			eT: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.iw(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), tJ.push(xD))
	}(tJ), function(tJ) {
		var xD;
		2 === aE.data.aIncomeType && ((xD = new t3).t6("Data"), (aWZ = new z4(0, 1, 0, 1)).zB(bD.pc.a89(aE.data.aIncomeData, 4)), xD.tG(aWZ), tJ.push(xD))
	}(tJ), tJ))
}

function aUz() {
	var aWX, aWY, aWZ;

	function aWa() {
		aWc(), 3 !== aE.data.botDifficultyType || bD.tV.a6J(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aV8()[19] = null, u.a4x()
	}

	function aWc() {
		3 === aE.data.botDifficultyType && bD.tV.a6V(aWZ.zC(), aE.data.botDifficultyData, aF.lH.length - 1)
	}

	function aWh(tJ, eT) {
		var xD = new t3,
			value = (xD.t6(eT < 0 ? L(76) : L(75) + " " + bj.a49[eT % 9]), 0 <= eT && (xD.tB(L(366) + ": " + aE.data.teamPlayerCount[eT]).style.marginBottom = "1em"), eT < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eT]);
		xD.tD(new yd({
			vG: aF.lH,
			value: value
		}, function(ie) {
			eT < 0 ? aE.data.botDifficultyValue = ie : aE.data.botDifficultyTeam[eT] = ie
		})), tJ.push(xD)
	}
	this.show = function() {
		aWX.show(), this.resize()
	}, this.uN = function() {
		aWX.uN()
	}, this.resize = function() {
		aWX.resize(), aWY.resize()
	}, this.a5t = function(eu) {
		2 === eu && aWX.yn[0].te()
	}, aWX = new yh(L(76), [new x("⬅️ " + L(49), aWa)]), aWY = new tH(aWX.ym, function() {
		var tJ = [];
		if (function(tJ) {
				var xD = new t3,
					vG = (xD.t6(L(360)), [L(362), L(364), L(365), L(363)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), vG.splice(2, 1));
				xD.tD(new yd({
					vG: vG,
					value: value
				}, function(eT) {
					aWc(), aE.data.botDifficultyType = eT, 0 === aE.data.gameMode && 2 === eT && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fh)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), tJ.push(xD)
			}(tJ), 0 === aE.data.botDifficultyType) aWh(tJ, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aWh(tJ, aC);
		else 3 === aE.data.botDifficultyType && ! function(tJ) {
			var xD = new t3;
			xD.t6("Data"), (aWZ = new z4(0, 1, 0, 1)).zB(bD.pc.a89(aE.data.botDifficultyData, 8)), xD.tG(aWZ), tJ.push(xD)
		}(tJ);
		return tJ
	}())
}

function aWi(data) {
	var aV9, aWj, aWk, aWl, aWm, aWn, aWo, colors, aWp, aWq, aWr = 0,
		aWs = 0,
		aWt = !1,
		aWu = !1,
		aWv = [1, 5, 60, 240, 1440, 10080, 43200];

	function aXP(mL, mM) {
		! function(mL, mM) {
			return aWj < mL && mL < aWj + aWl && aWk < mM && mM < aWk + aWm
		}(aWr = mL, aWs = mM) ? (aWt && (bi.e2 = !0), aWt = !1) : (aWt = !0, bi.e2 = !0)
	}
	this.show = function() {
		aWu = bm.buffer.data[127].value, aV9.show(), this.resize()
	}, this.uN = function() {
		aV9.uN()
	}, this.resize = function() {
		aV9.resize();
		var eu = i.l,
			yu = aV9.yr(),
			aX4 = eu * yu.yt,
			eu = eu * yu.uQ;
		aWn = bD.tO.vu(.06), aWo = bD.tO.vu(.04), aWj = bD.tO.vu(.06), aWk = eu + aWn, aWl = i.j - aWj - aWo, aWm = aX4 + eu - aWk - aWo
	}, this.yv = function() {
		aV9.yv(),
			function() {
				var aC, aX1, hD, fr, g3, h = data.data,
					aX8 = 1,
					aX9 = .125,
					aXA = aWu ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aX1 = h[aC].aX1, hD = aX1.length, aX8 = Math.max(hD, aX8), g3 = 0; g3 < hD; g3++) aX9 = Math.max(aX1[g3], aX9), aXA = Math.min(aX1[g3], aXA);
				var oA = aWk + aWm,
					a1i = aWm / (aX9 - aXA),
					a1h = 1 / (aX8 - 1);
				for (yw.lineWidth = bf.a2m, aC = 0; aC < h.length; aC++) {
					for (aX1 = h[aC].aX1, hD = aX1.length, fr = aWj, yw.beginPath(), yw.moveTo(fr + aWl, oA - a1i * (aX1[hD - 1] - aXA)), g3 = hD - 2; 0 <= g3; g3--) yw.lineTo(fr + a1h * g3 * aWl, oA - a1i * (aX1[g3] - aXA));
					yw.strokeStyle = colors[aC], yw.stroke()
				}(function(aXA, aX9, oA, a1i) {
					yw.font = bD.tO.ux(0, .25 * aWj), bD.tO.textBaseline(yw, 1), bD.tO.textAlign(yw, 2), yw.fillStyle = colors[0];
					for (var fr = .92 * aWj, aC = 0; aC < 3; aC++) {
						var gC = aXA + aC * (aX9 - aXA) / 2;
						yw.fillText((gC / 1e3).toFixed(3), fr, oA - a1i * (gC - aXA))
					}
				})(aXA, aX9, oA, a1i),
				function(aX8) {
					var ft = aWk + aWm + .15 * aWo;
					yw.font = bD.tO.ux(0, Math.min(.4 * aWo, .028 * i.j)), bD.tO.textBaseline(yw, 0), bD.tO.textAlign(yw, 2), yw.fillStyle = colors[0], yw.fillText(bD.a69.a70(aWp), aWj + aWl, ft), bD.tO.textAlign(yw, 0), yw.fillText(bD.a69.a70(
						new Date(aWq.getTime() - 6e4 * (aX8 - 1) * aWv[data.aX0])), aWj, ft)
				}(aX8),
				function(aX8, aXA, aX9) {
					if (aWt && !(aX8 < 2)) {
						for (var aCi, eT = (aWr - aWj) / aWl * (aX8 - 1), aXD = Math.floor(eT), aXE = Math.floor(1 + eT), aXF = eT - aXD, aXG = 1e5, aXH = -1, aXI = -1, aXJ = aX9 - (aX9 - aXA) * (aWs - aWk) / aWm, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aGi, aX1 = h[aC].aX1;
							aX1.length <= aXE || (aX1 = aX1[aXD] + aXF * (aX1[aXE] - aX1[aXD]), (aGi = Math.abs(aXJ - aX1)) < aXG && (aXG = aGi, aXH = aC, aXI = aX1))
						} - 1 !== aXH && (aX9 = aWk + aWm - (aXI - aXA) / (aX9 - aXA) * aWm, yw.lineWidth = .5 * bf.a2m, yw.strokeStyle = colors[aXH], yw.beginPath(), yw.moveTo(aWj, aX9), yw.lineTo(aWr, aX9), yw.lineTo(aWr, aWk + aWm), yw
							.stroke(), yw.beginPath(), yw.arc(aWr, aX9, .1 * aWj, 0, 2 * Math.PI), yw.fillStyle = colors[aXH], yw.fill(), aXA = aWk + aWm + .15 * aWo, bD.tO.textAlign(yw, 1), aCi = aX8 - 2 < eT ? (aCi = aWq.getTime() - 6e4 *
								aWv[data.aX0], new Date(aCi + (eT - (aX8 - 2)) * (aWp.getTime() - aCi))) : new Date(aWq.getTime() - 6e4 * (aX8 - eT - 1) * aWv[data.aX0]), aX8 = bD.a69.a70(aCi), eT = bD.tO.measureText(aX8), aCi = bO.iw(aWr,
								aWj + .5 * eT, aWj + aWl - .5 * eT), yw.fillStyle = bD.color.qH(70, 50, 20), yw.fillRect(aCi - .52 * eT, aWk + aWm, 1.04 * eT, .55 * aWo), yw.fillStyle = colors[0], yw.fillText(aX8, aCi, aXA), yw.font = bD.tO
							.ux(0, .25 * aWj), bD.tO.textBaseline(yw, 1), bD.tO.textAlign(yw, 2), aCi = .92 * aWj, aX8 = (aXI / 1e3).toFixed(3), eT = bD.tO.measureText(aX8), aXA = aCi - 1.04 * eT, yw.fillStyle = bD.color.qH(70, 50, 20), yw
							.fillRect(aXA, aX9 - .1625 * aWj, aWj - aXA, .275 * aWj), yw.fillStyle = colors[aXH], yw.fillText(aX8, aCi, aX9))
					}
				}(aX8, aXA, aX9)
			}(), yw.lineWidth = bf.a2m, yw.strokeStyle = bE.qP, yw.beginPath(), yw.moveTo(aWj, aWk), yw.lineTo(aWj, aWk + aWm), yw.lineTo(aWj + aWl, aWk + aWm), yw.stroke();
		var aC, fontSize = .5 * aWn,
			h = (yw.font = bD.tO.ux(0, fontSize), bD.tO.textBaseline(yw, 1), bD.tO.textAlign(yw, 0), data.data),
			fk = h.length,
			ft = aWk - .5 * aWn,
			pY = "";
		for (aC = 0; aC < fk; aC++) pY += h[aC].name + "  ";
		pY = pY.trim();
		var aXM = bD.tO.measureText(pY),
			fr = .5 * (i.j - aXM);
		for (aXM > i.j && (fr = 0, yw.font = bD.tO.ux(0, i.j / aXM * fontSize)), aC = 0; aC < fk; aC++) yw.fillStyle = colors[aC], yw.fillText(h[aC].name, fr, ft), fr += bD.tO.measureText(h[aC].name + "  ")
	}, this.hy = function(mL, mM) {
		aXP(mL, mM)
	}, this.a5L = function(mL, mM) {
		aXP(mL, mM)
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	};
	var aC, el, a6y, ie, fn = data.data,
		fk = fn.length,
		max = 1;
	for (aC = 0; aC < fk; aC++) max = Math.max(max, fn[aC].aX1.length);
	for (aC = 0; aC < fk; aC++)
		for (; fn[aC].aX1.length < max;) fn[aC].aX1.unshift(0);
	el = new Date, a6y = 6e4 * el.getTimezoneOffset(), ie = el.getTime() - a6y, aWp = new Date(ie), 6 === data.aX0 ? function(el, a6y) {
		var aX3 = el.getUTCFullYear(),
			el = el.getUTCMonth() + 1;
		aWq = el < 12 ? new Date(Date.UTC(aX3, el) - a6y) : new Date(Date.UTC(aX3 + 1, 0) - a6y)
	}(el, a6y) : (a6y = 6e4 * aWv[data.aX0], aWq = data.aX0 <= 4 ? new Date(ie + a6y - el.getTime() % a6y) : new Date(ie + a6y - (el.getTime() + 2592e5) % a6y)), ie = bD.color, colors = [bE.qP, ie.qH(255, 0, 0), ie.qH(0, 200, 0), ie.qH(80, 80,
		255), ie.qH(255, 255, 0), ie.qH(255, 0, 255), ie.qH(0, 255, 255), ie.qH(255, 140, 0), ie.qH(128, 128, 128), ie.qH(0, 255, 140)], aV9 = new yh(L(367) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aX0] + ", " + bD.a69.a6x(aWp), [
		new x("⬅️ " + L(49), function() {
			u.v(1)
		}), new x(L(368), function() {
			u.v(14)
		})
	], !1)
}

function aUo() {
	var aV9, aVA, tJ, aXQ = -1;
	this.show = function() {
		aV9.show(), this.resize(), aXQ = bm.buffer.data[125].value
	}, this.uN = function() {
		aV9.uN()
	}, this.resize = function() {
		aV9.resize(), aVA.resize()
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	}, aV9 = new yh(L(369), [new x("⬅️ " + L(49), function() {
		aXQ !== bm.buffer.data[125].value ? u.z.aXR() : u.aV7(13)
	})]), aVA = new tH(aV9.ym, ((tJ = []).push(function() {
		var xD = new t3,
			aKW = (xD.t6(L(370)), xD.t7(L(371)), new x(L(372), function() {
				bm.rv.q1(130, 0), u.z.aXR()
			}, 0, 0, 1)),
			uA = new uB(bm.buffer.data[126], 0, function() {
				aKW.button.click()
			});
		return xD.tG(uA), uA.e.placeholder = "a,b,c", uA.e.style.marginTop = "0.5em", xD.tG(new uZ([aKW.button])), xD
	}()), tJ.push(function() {
		var xD = new t3,
			aKW = new x(L(372), function() {
				bm.rv.q1(130, 1), u.z.aXR()
			}, 0, 0, 1),
			aXW = new uB(bm.buffer.data[129], 1, function() {
				aXW.e.focus()
			}),
			aXX = new uB(bm.buffer.data[128], 1, function() {
				aKW.button.click()
			});
		return xD.t6(L(373)), xD.tG(aXX), aXX.e.style.marginBottom = "0.5em", xD.t6(L(374)), xD.tG(aXW), xD.tG(new uZ([aKW.button])), xD
	}()), tJ.push(function() {
		var xD = new t3;
		return xD.t6(L(375)), bm.buffer.data[125].vG = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], xD.tD(new yd(bm.buffer.data[125])), xD
	}()), tJ.push(function() {
		var xD = new t3;
		return xD.t6(L(376)), xD.tG(new uV(bm.buffer.data[127], L(377))), xD
	}()), tJ))
}

function aUn() {
	var aV9, aXY, aWl, aXZ, aXa, aXb, colors = [0, 0, 0],
		aXc = -1;

	function aXf(aC) {
		var aXg = aXY.ft + aC * (bf.gap + aXb);
		yw.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", yw.fillRect(aXZ, aXg, colors[aC] * aXa, aXb), yw.strokeStyle = bE.qP, yw.strokeRect(aXZ, aXg, aXa,
			aXb), yw.fillStyle = bE.qP, yw.font = bD.tO.ux(0, .32 * aXb), bD.tO.textBaseline(yw, 1), bD.tO.textAlign(yw, 0), yw.fillText(L(0 === aC ? 380 : 1 === aC ? 381 : 382) + aXd(aC), aXZ + bf.gap, aXg + .53 * aXb)
	}

	function aXd(aC, aXh) {
		return aXh = aXh || 256, bO.iw(Math.floor(aXh * colors[aC]), 0, aXh - 1)
	}

	function a5p(mL, mM) {
		return !(mL < aXZ || mM < aXY.ft || mL > aXY.fr + aXY.j || mM > aXY.ft + aXY.k)
	}
	this.show = function() {
		var gC = bm.buffer.data[121].value;
		colors[0] = (gC >> 12) / 63, colors[1] = (gC >> 6 & 63) / 63, colors[2] = (63 & gC) / 63, aV9.show(), this.resize()
	}, this.uN = function() {
		bm.rv.q1(121, (aXd(0, 64) << 12) + (aXd(1, 64) << 6) + aXd(2, 64)), aV9.uN()
	}, this.resize = function() {
		aV9.resize(), aXY.resize();
		var eu = i.l,
			yu = aV9.yr(),
			aXe = (aXY.ft = Math.max(aXY.ft, eu * yu.uQ + bf.gap), eu * yu.yt - 2 * bf.gap);
		aXY.k = Math.min(aXY.k, aXe), aXY.j = 2 * aXY.k, aXY.ft = eu * yu.uQ + .5 * (eu * yu.yt - aXY.k), aXY.fr = .5 * (i.j - aXY.j), aWl = .25 * aXY.j, aXZ = aXY.fr + aWl + bf.gap, aXa = aXY.j - aWl - bf.gap, aXb = (aXY.k - 2 * bf.gap) / 3
	}, this.yv = function() {
		var eS, vt, g4;
		aV9.yv(), yw.lineWidth = bf.a2m, eS = aXd(0), vt = aXd(1), g4 = aXd(2), yw.fillStyle = "rgb(" + eS + "," + vt + "," + g4 + ")", yw.fillRect(aXY.fr, aXY.ft, aWl, aXY.k), yw.strokeStyle = bE.qP, yw.strokeRect(aXY.fr, aXY.ft, aWl, aXY.k), yw
			.fillStyle = eS + vt + g4 < 306 && vt < 150 ? bE.qP : bE.qG, bD.tO.textBaseline(yw, 1), bD.tO.textAlign(yw, 1), yw.font = bD.tO.ux(0, .1 * aXY.k), yw.rotate(-Math.PI / 2), yw.fillText(L(379), -aXY.ft - .5 * aXY.k, aXY.fr + .5 * aWl),
			yw.setTransform(1, 0, 0, 1, 0, 0), aXf(0), aXf(1), aXf(2)
	}, this.hy = function(mL, mM) {
		a5p(mL, mM) && (aXc = bO.iw(Math.floor((mM - aXY.ft) / (aXb + .75 * bf.gap)), 0, 2), colors[aXc] = bO.iw((mL - aXZ) / aXa, 0, 1), bi.e2 = !0)
	}, this.a5L = function(mL) {
		-1 !== aXc && (colors[aXc] = bO.iw((mL - aXZ) / aXa, 0, 1), bi.e2 = !0)
	}, this.a5O = function(mL, mM, deltaY) {
		a5p(mL, mM) && (mL = bO.iw(Math.floor((mM - aXY.ft) / (aXb + .75 * bf.gap)), 0, 2), colors[mL] = bO.iw(colors[mL] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.e2 = !0)
	}, this.a5j = function() {
		0 <= aXc && (aXc = -1, bi.e2 = !0)
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	}, aV9 = new yh(L(378), [new x("⬅️ " + L(49), function() {
		u.z.aGd()
	})], !1), aXY = new tz([.5, .25], [.5, .5], 1)
}

function aUv() {
	var aWX, aWY, aWZ, p9;

	function aWa() {
		aWc(), u.aV8()[19] = null, u.a4x()
	}

	function aXi() {
		aWc(), u.v(21)
	}

	function aWc() {
		1 === aE.data.gameMode ? aE.a8Q.a8W() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.tV.a6V(aWZ.zC(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aWX.show(), this.resize()
	}, this.uN = function() {
		aWX.uN()
	}, this.resize = function() {
		aWX.resize(), aWY.resize()
	}, this.a5t = function(eu) {
		2 === eu && aWX.yn[0].te()
	}, p9 = [new x("⬅️ " + L(49), aWa)], 1 === aE.data.gameMode && p9.push(new x(L(383), aXi, 1, 1)), aWX = new yh(L(384), p9), aWY = new tH(aWX.ym, (p9 = [], 0 === aE.data.gameMode ? (function(tJ) {
		var xD = new t3;
		xD.t6(L(360)), xD.tD(new yd({
			vG: [L(385), L(363)],
			value: aE.data.colorsType
		}, function(eT) {
			aWc(), aE.data.colorsType = eT, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fh || (aE.data.colorsData = new Uint32Array(aE.fh)), u.v(21)
		})), tJ.push(xD)
	}(p9), 1 === aE.data.colorsType && function(tJ) {
		var xD = new t3;
		xD.t6("Data"), (aWZ = new z4(0, 1, 0, 1)).zB(bD.pc.a89(aE.data.colorsData, 1)), xD.tG(aWZ), tJ.push(xD)
	}(p9)) : (aE.a8Q.a8W(), p9.push(function() {
		var xD = new t3;
		xD.t6(L(366));
		for (var aC = 0; aC < bj.a49.length; aC++) {
			var ie = (aC + 1) % bj.a49.length,
				e = xD.tB((0 == ie ? "" : "Team ") + bj.a49[ie]);
			aC && (e.style.marginTop = "0.5em"), xD.tG(new uB({
				eT: -1,
				value: aE.data.teamPlayerCount[ie]
			}, 1, 0, function(e) {
				aWX.yn[1].ti(0);
				var playerCount = bO.iw(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aXl] = playerCount
			})).e.aXl = ie
		}
		return xD
	}()), function(tJ) {
		for (var xD = new t3, vG = (xD.t6(L(386)), []), aC = 0; aC < bj.a49.length; aC++) {
			var ie = (aC + 1) % bj.a49.length;
			vG.push(bj.a49[ie])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		xD.tD(new yd({
			vG: vG,
			value: (aE.data.colorsData[0] % 16 + bj.a49.length - 1) % bj.a49.length
		}, function(eT) {
			var eT = (eT + 1) % bj.a49.length,
				aXm = bj.aXn[eT],
				aXm = (aXm[0] >> 2 << 12) + (aXm[1] >> 2 << 6) + (aXm[2] >> 2);
			aE.data.colorsData[0] = aXm - (15 & aXm) + eT
		})), tJ.push(xD)
	}(p9)), p9))
}

function vY(id, a7l, aXo) {
	var aV9, aXp;

	function aXu() {
		aXp.tK.innerHTML += "<br>" + L(389)
	}

	function aY3() {
		var g4 = 1;
		u.v(4, 1, new w(L(390), L(391), !1, [new x("🔄 Reload", function() {
			g4 && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), g4 = 0
		}, bE.qm)]))
	}

	function aXt() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.dv(bG.aD), bm.rv.q1(110, __fx.passwordReset.getCustomPassword() || bI.fB
			.vZ(bI.fB.va(15))), b1.aVi.aY5()
	}
	this.aXq = !0, this.aXr = id, this.show = function() {
		aV9.show(), this.resize(), 15 === id ? (b1.z.aXs(id) ? aXt : aXu)() : 16 === id ? b1.z.aXs(id) ? b1.er.es(2) : aXu() : 17 === id ? b1.z.aXs(id) ? b1.er.es(3) : aXu() : 18 === id ? (b1.z.close(0, 3253), b1.z.aLW(0, id, 0), aXu()) : 21 ===
			id ? b1.z.aXs(id) ? b1.aXv.aXw(a7l.vo, a7l.vp, a7l.vq) : aXu() : 22 === id ? b1.z.aXs(id) ? b1.aXv.aXx(a7l.vo, a7l.aXy, a7l.aXz) : aXu() : 23 === id ? b1.z.aXs(id) ? b1.aXv.aY0(a7l.aX0, a7l.a4X) : aXu() : 24 === id ? b1.z.aXs(id) ? b1
			.aXv.aY1(a7l.aX0, a7l.vp, a7l.vq) : aXu() : 25 === id ? b1.z.aXs(id) ? b1.aVi.aVo(a7l) : aXu() : 28 === id ? b1.z.aXs(id) ? b1.aXv.aY2(a7l.vo, a7l.aXy, a7l.aXz) : aXu() : 29 === id ? b1.z.aXs(id) ? b1.aVi.aWD(a7l) : aXu() : 30 ===
			id && (b1.z.aXs(id) ? bA.aGY() || aY3() : aXu())
	}, this.aY4 = function() {
		15 === id ? aXt() : 16 === id ? b1.er.es(2) : 17 === id ? b1.er.es(3) : 18 === id ? u.v(8, this.a53, new vY(16)) : 21 === id ? b1.aXv.aXw(a7l.vo, a7l.vp, a7l.vq) : 22 === id ? b1.aXv.aXx(a7l.vo, a7l.aXy, a7l.aXz) : 23 === id ? b1.aXv.aY0(
			a7l.aX0, a7l.a4X) : 24 === id ? b1.aXv.aY1(a7l.aX0, a7l.vp, a7l.vq) : 25 === id ? b1.aVi.aVo(a7l) : 28 === id ? b1.aXv.aY2(a7l.vo, a7l.aXy, a7l.aXz) : 29 === id ? b1.aVi.aWD(a7l) : 30 === id ? bA.aGY() || aY3() : 1e3 === id && (
			this.aXr = id = 25, b1.aVi.aVo(a7l))
	}, this.aGc = function(code, c3, data) {
		!c3 && code !== id || (15 === code || 16 === code ? u.v(7, this.a53) : 17 === code ? (b1.z.close(0, 3252), bm.z.zv(0), bm.buffer.data[117].vG && 0 < bm.buffer.data[117].vG.length && (c3 = bm.z.zx(0)) ? (bm.rv.q1(105, c3.pg), bm.rv.q1(106,
			c3.password), u.v(8, this.a53, new vY(16))) : (bm.rv.q1(105, ""), u.z.aGd())) : 21 === code ? u.v(10, this.a53, new aEz(data)) : 23 === code ? u.v(13, this.a53, new aWi({
			data: data,
			aX0: a7l.aX0
		})) : 25 === code ? (u.z.aUp.pg = a7l.pg, bm.zK.nV(a7l.pg), u.v(15, this.a53)) : 30 === code && (data ? u.v(1) : aY3()))
	}, this.uN = function() {
		aV9.uN()
	}, this.resize = function() {
		aV9.resize(), aXp.resize()
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	}, aV9 = new yh(L(387), [new x("⬅️ " + L(49), function() {
		aXo ? u.v(29) : u.z.aGd()
	})]), aXp = new uY(aV9.ym, L(388))
}

function aUt() {
	var aWX, aWY, aYB, tJ, aY6 = 0;

	function aY9() {
		var hD;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a8Q.a8W()), hD = bD.tV.a6P(aE.data.teamPlayerCount, 0), aE.data.numberTeams = hD) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aWa() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aYC(), aE.data.canvas = null, u.v(5, 5)
	}

	function aYC() {
		bC.sk.dv(), bm.rv.q1(156, bC.a8h.a3G())
	}

	function aY7() {
		var aYB;
		aY6 || (aYB = bV.a8s(aE.data), 2 === aE.data.mapType || bV.aJO.aM4(aYB) ? (aE.data.isReplay = 0, aYC(), aE.a8Q.a8u(), ab.aLh(), aE.a8Q.a8r(), aE.data.canvas = 2 === aE.data.mapType ? bV.a1r : null, aE.a8U(), aE.a8S = 1) : (aY6 = 1, bV.aJO
			.aSv(aYB, function(aM4) {
				aY6 = 0, aM4 && 19 === u.vX && aY7()
			})))
	}

	function aYO() {
		aY9();
		for (var h = [aYF(), aYG(), aYH()], aC = 3; aC < 6; aC++) u.removeChild(aWY.tK, aWY.tL[aC].t5), aWY.tL[aC] = h[aC - 3], aWY.tK.appendChild(aWY.tL[aC].t5);
		aWY.resize()
	}

	function aYF() {
		var aYP, xD = new t3;
		return xD.t6(L(384)), aYP = 0 === aE.data.gameMode ? [L(385), L(363)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), xD.tB(aYP), xD.tG(new uZ([new x(L(395), function() {
			u.v(21)
		}).button])), xD
	}

	function aYG() {
		var xD = new t3,
			h = (xD.t6(L(76)), [L(362) + ": " + aF.lH[aE.data.botDifficultyValue], L(364), L(365), L(363)]);
		return xD.tB(h[aE.data.botDifficultyType]), xD.tG(new uZ([new x(L(395), function() {
			u.v(25)
		}).button])), xD
	}

	function aYH() {
		var xD = new t3,
			h = (xD.t6("Spawning"), [L(385), L(397), L(363)]);
		return xD.tB(h[aE.data.spawningType]), xD.tG(new uZ([new x(L(395), function() {
			u.v(24)
		}).button])), xD
	}
	this.show = function() {
		aWX.show(), this.resize(), aWX.ym.scrollTop = u.z.vQ[0]
	}, this.uN = function() {
		u.z.vQ[0] = aWX.ym.scrollTop, aWX.uN()
	}, this.resize = function() {
		aWX.resize(), aWY.resize()
	}, this.a5t = function(eu) {
		2 === eu && aWX.yn[0].te()
	}, aWX = new yh("🔧 " + L(392), [new x("⬅️ " + L(49), aWa), new x(L(393), aY7)]), aY9(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.a1r : 1 === aE.data.mapType ? (aYB = bV.a8s(aE.data), bV.aJO.aM4(aYB) ? aE.data.canvas =
		bV.aRA(aYB, 0).a1r : bV.aJO.aSv(aYB, function(aM4) {
			aM4 && 19 === u.vX && 1 === aE.data.mapType && bV.a8s(aE.data) === aYB && u.v(19)
		})) : (aE.data.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aRA(bV.a8s(aE.data), aE.data.mapSeed).a1r)), aWY = new tH(aWX.ym, (function(tJ) {
		var xD = new t3,
			a6f = (xD.t6(L(394)), aE.data.canvas || document.createElement("canvas"));
		a6f.style.width = "100%", xD.tG({
			e: a6f
		}), xD.tG(new uZ([new x(L(395), function() {
			u.v(20)
		}).button])), tJ.push(xD)
	}(tJ = []), function(tJ) {
		var xD = new t3;
		xD.t6(L(366)), xD.tG(new uB({
			eT: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.iw(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.tV.a6P(aE.data.teamPlayerCount, 0), aE.a8Q.a8W(), bD.tV.a6P(aE.data.teamPlayerCount, 0) !== e) && aYO()
		})), tJ.push(xD)
	}(tJ), function(tJ) {
		var xD = new t3;
		xD.t6(L(396)), xD.tD(new yd({
			vG: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eT) {
			aE.data.gameMode !== eT && (1 === (aE.data.gameMode = eT) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aYO())
		})), tJ.push(xD)
	}(tJ), tJ.push(aYF()), tJ.push(aYG()), tJ.push(aYH()), function(tJ) {
		var xD = new t3,
			h = (xD.t6(L(398)), [L(399), L(400), L(363)]);
		xD.tB(h[aE.data.playerNamesType]), xD.tG(new uZ([new x(L(395), function() {
			u.v(23)
		}).button])), tJ.push(xD)
	}(tJ), function(tJ) {
		var xD = new t3,
			h = (xD.t6(L(359)), [L(361), L(362) + ": " + aE.data.aIncomeValue, L(363)]);
		xD.tB(h[aE.data.aIncomeType]), xD.tG(new uZ([new x(L(395), function() {
			u.v(22)
		}).button])), tJ.push(xD)
	}(tJ), function(tJ) {
		var xD = new t3,
			h = (xD.t6(L(401)), [L(361), L(362) + ": " + aE.data.tIncomeValue, L(363)]);
		xD.tB(h[aE.data.tIncomeType]), xD.tG(new uZ([new x(L(395), function() {
			u.v(26)
		}).button])), tJ.push(xD)
	}(tJ), function(tJ) {
		var xD = new t3,
			h = (xD.t6(L(402)), [L(361), L(362) + ": " + aE.data.iIncomeValue, L(363)]);
		xD.tB(h[aE.data.iIncomeType]), xD.tG(new uZ([new x(L(395), function() {
			u.v(27)
		}).button])), tJ.push(xD)
	}(tJ), function(tJ) {
		var xD = new t3,
			h = (xD.t6(L(403)), [L(361), L(362) + ": " + aE.data.sResourcesValue, L(363)]);
		xD.tB(h[aE.data.sResourcesType]), xD.tG(new uZ([new x(L(395), function() {
			u.v(28)
		}).button])), tJ.push(xD)
	}(tJ), function(tJ) {
		var xD = new t3;
		xD.t6(L(404)), xD.tG(new uZ([new x(L(405), function() {
			u.y(), aE.a8Q.a8v(), u.z.vQ[0] = 0, u.v(19)
		}).button])), xD.tG(new uZ([new x(L(406), function() {
			bp.aOI()
		}).button])), xD.tG(new uZ([new x(L(407), function() {
			return bp.aOK(), !0
		}).button])), tJ.push(xD)
	}(tJ), tJ))
}

function aV4() {
	var aWX, q9 = !0;

	function px(pw, a8z) {
		var t5 = document.createElement("div"),
			aYS = document.createElement("span"),
			aYT = document.createElement("span");
		aYS.textContent = aX.aFL(a8z.ek) + ":", aYS.style.color = bE.qe, aYS.style.paddingRight = "0.4em", aYS.style.display = "table-cell", aYS.style.width = "6ch", aYS.style.textAlign = "end", t5.appendChild(aYS), aYT.textContent = a8z.pY, t5
			.appendChild(aYT), t5.style.display = "table", a8z.s9 && function(t5, s9) {
				{
					var aNf;
					s9 >= 1024 - ak.q7.a2Z ? ((aNf = document.createElement("img")).src = ak.a2I.a2N[s9 - 1024 + ak.q7.a2Z].toDataURL(), aNf.style.width = "1.5em", aNf.style.height = "1.5em", aNf.style.verticalAlign = "middle", t5.appendChild(aNf)) :
						((aNf = document.createElement("span")).textContent = ak.q7.a2o(s9), aNf.style.display = "inline-block", aNf.style.fontSize = "1.5em", aNf.style.lineHeight = "1em", aNf.style.verticalAlign = "middle", t5.appendChild(aNf))
				}
			}(t5, a8z.s9), pw.appendChild(t5)
	}

	function aYR() {
		q9 && (aWX.ym.scrollTop = aWX.ym.scrollHeight)
	}
	this.clear = function() {
		aWX.ym.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a9s = bu.a92(), fk = a9s.length, pw = document.createDocumentFragment(), aC = 0; aC < fk; aC++) px(pw, a9s[aC]);
		aWX.ym.appendChild(pw), aYR(), aWX.show(), this.resize(), q9 = !0, aYR()
	}, this.uN = function() {
		aWX.uN()
	}, this.resize = function() {
		aWX.resize(), aWX.ym.style.padding = "0.4em " + bD.tO.tW(bf.tT)
	}, this.a5t = function(eu) {
		2 === eu && aWX.yn[0].te()
	}, this.a2F = function(a8z) {
		var pw = document.createDocumentFragment();
		px(pw, a8z), aWX.ym.appendChild(pw), aYR()
	}, (aWX = new yh(L(408), [new x("⬅️ " + L(49), function() {
		u.aV7(1)
	})])).ym.style.overflowY = "auto", aWX.ym.addEventListener("scroll", function() {
		q9 = aWX.ym.scrollTop >= aWX.ym.scrollHeight - aWX.ym.clientHeight - 2
	})
}

function aUb() {
	var aYV = 0,
		aYW = 50;
	this.send = function(gC, pg, send) {
		gC = bD.h6.a7i(gC, 1, 1e6), aYV + gC < aYW ? (aYV += gC, send()) : u.v(4, u.vX, new w(L(238), L(409, [pg, gC]), !1, [new x("⬅️ " + L(49), function() {
			u.a4x()
		}), new x("✅ OK", function() {
			aYV = 0, aYW *= 2, u.a4x(), send()
		})]))
	}
}

function aV1() {
	var aWX, aWY, aWZ, tJ;

	function aWa() {
		aWc(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aV8()[19] = null, u.a4x()
	}

	function aWc() {
		2 === aE.data.iIncomeType && bD.tV.a6V(aWZ.zC(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aWX.show(), this.resize()
	}, this.uN = function() {
		aWX.uN()
	}, this.resize = function() {
		aWX.resize(), aWY.resize()
	}, this.a5t = function(eu) {
		2 === eu && aWX.yn[0].te()
	}, aWX = new yh(L(402), [new x("⬅️ " + L(49), aWa)]), aWY = new tH(aWX.ym, (function(tJ) {
		var xD = new t3;
		xD.t6(L(360)), xD.tD(new yd({
			vG: [L(361), L(362), L(363)],
			value: aE.data.iIncomeType
		}, function(eT) {
			aWc(), 2 !== eT || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fh), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eT, u.v(27)
		})), tJ.push(xD)
	}(tJ = []), function(tJ) {
		var xD;
		1 === aE.data.iIncomeType && ((xD = new t3).t6("Value"), xD.tG(new uB({
			eT: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.iw(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), tJ.push(xD))
	}(tJ), function(tJ) {
		var xD;
		2 === aE.data.iIncomeType && ((xD = new t3).t6("Data"), (aWZ = new z4(0, 1, 0, 1)).zB(bD.pc.a89(aE.data.iIncomeData, 4)), xD.tG(aWZ), tJ.push(xD))
	}(tJ), tJ))
}

function aUj() {
	var aYX, aYY, aXY, uA, aYZ, uq = 0;
	this.aMQ = new ve, aXY = new tz([.45, .27], [.5, .5], 2 / 3), aYY = [new x("⚔️<br>" + L(410), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aYa(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.qs), new x("🗡️<br>" + L(392), function() {
			aYa(1)
		}, bE.rC), new x("🔑<br>" + L(411), function() {
			aYa(2)
		}, bE.rZ), new x("☰<br>" + L(412), function() {
			aYa(3)
		}, bE.qc), new x("", function() {
			u.v(12)
		}, bE.qL, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], uA = new uB(bm.buffer.data[122]);
	for (var aC = 0; aC < aYY.length; aC++) aYY[aC].button.style.position = "absolute";

	function aYa(eT) {
		a1.a2.setState(10), ac.vx() || ac.aMH(), 0 === eT ? u.z.a8k(1) : 1 === eT ? (bC.aOc.a0c(bm.buffer.data[156].value, 1) || aE.a8Q.a8v(), u.v(19)) : 2 === eT ? 0 !== a1.id || bm.buffer.data[140].value ? u.v(8, u.vX, new vY(16)) : u.z.aYb(u.vX,
			16) : 3 === eT && u.v(1)
	}
	uA.e.style.position = "absolute", uA.e.style.textAlign = "center", uA.e.placeholder = L(413), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aMQ.show(), aYY[4].ti(bD.color.a6n(bm.buffer.data[121].value)), this.resize(), document.body.appendChild(uA.e);
		for (var aC = 0; aC < aYY.length; aC++) document.body.appendChild(aYY[aC].button);
		1 !== a1.id || a1.eC < 5 || (aYZ && bi.ek > aYZ + 144e5 ? a1.ze.setState(14) : aYZ = bi.ek)
	}, this.uN = function() {
		this.aMQ.uN(), u.removeChild(document.body, uA.e);
		for (var aC = 0; aC < aYY.length; aC++) u.removeChild(document.body, aYY[aC].button)
	}, this.resize = function() {
		this.aMQ.resize(), this.aMQ.resize(), aXY.resize();
		var gap = .5 * bf.gap,
			wQ = 10 / 99 * .84 * aXY.j,
			aYe = .16 * aXY.k,
			aDG = .19 * aXY.j,
			fr = aXY.fr + aDG,
			wQ = aXY.ft + wQ + 3 * gap,
			j = .5 * (aXY.j - gap) - aDG,
			aDG = aXY.j - 2 * aDG - aYe - gap,
			aDG = (bD.tO.vv(uA.e, fr, wQ, aDG, aYe), bD.tO.vv(aYY[4].button, fr + aDG + gap, wQ, aYe, aYe), uq = wQ, .5 * (aXY.ft + aXY.k - (wQ += aYe + gap) - gap));
		bD.tO.vv(aYY[0].button, fr, wQ, j, aDG), bD.tO.vv(aYY[1].button, fr + j + gap, wQ, j, aDG), bD.tO.vv(aYY[2].button, fr, wQ + aDG + gap, j, aDG), bD.tO.vv(aYY[3].button, fr + j + gap, wQ + aDG + gap, j, aDG);
		bD.tO.vv(aYY[5].button, fr, wQ + aDG * 2 + gap * 2, j * 2 + gap, aDG / 3);
		bD.tO.vv(aYY[6].button, fr, wQ + aDG * 2.33 + gap * 3, j * 2 + gap, aDG / 3);
		for (var aC = 0; aC < aYY.length; aC++) aYY[aC].button.style.font = bD.tO.ux(0, bD.tO.yO(.065 * aXY.k)), bD.tO.tX(aYY[aC].button, 5);
		uA.e.style.font = bD.tO.ux(0, bD.tO.yO(.08 * aXY.k)), bD.tO.tX(uA.e, 5)
	}, this.yv = function() {
		ab.aLm(), aU.yv();
		var fk = Math.floor((a1.a2.ix() ? .018 : .0137) * i.iy);
		if (yw.font = bD.tO.ux(0, Math.max(5, fk)), bD.tO.textBaseline(yw, 0), bD.tO.textAlign(yw, 2), yw.fillStyle = bE.qP, yw.fillText(m.eC, i.j, 0), __fx.settings.displayWinCounter && (text = "Win count: " + __fx.wins.count, textLength = yw
				.measureText(text).width, fk = Math.max(5, fk), yw.textAlign = "left", yw.textBaseline = "middle", yw.fillText(text, yw.canvas.width - textLength - fk / 2, 2 * fk)), aP.yv(uq), bb.yv(), ac.vx()) {
			yw.imageSmoothingEnabled = !1;
			var text = ac.x7("territorial.io"),
				textLength = .84 * aXY.j / text.width;
			yw.setTransform(textLength, 0, 0, textLength, aXY.fr + .08 * aXY.j, aXY.ft), aYX = aYX || bD.p5.a7j(text, bD.p5.a7q, [0, 0, 0]);
			for (var fr = -1; fr <= 1; fr += 2)
				for (var ft = -1; ft <= 1; ft += 2) yw.drawImage(aYX, fr, ft);
			yw.drawImage(text, 0, 0), yw.imageSmoothingEnabled = !0;
			var fk = ac.x7("logo"),
				aYh = .6666 * textLength * text.height / fk.height,
				oM = .5 * i.j,
				oN = aXY.ft + .5 * textLength * text.height - .5 * aYh * fk.height;
			yw.setTransform(aYh, 0, 0, aYh, oM - .6 * textLength * text.width, oN), yw.drawImage(fk, 0, 0), yw.setTransform(aYh, 0, 0, aYh, oM + .6 * textLength * text.width - aYh * fk.width, oN), yw.drawImage(fk, 0, 0), yw.setTransform(1, 0, 0,
				1, 0, 0), yw.imageSmoothingEnabled = !0
		}
	}
}

function aUq() {
	var aV9, aYi, aYj, yi;

	function aYk(aC) {
		u.v(8, u.vX, new vY(21, {
			vo: aC,
			vp: 0,
			vq: 10
		}))
	}
	this.show = function() {
		aV9.show(), this.resize()
	}, this.uN = function() {
		aV9.uN()
	}, this.resize = function() {
		aV9.resize(), aYi.resize()
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	}, aYj = [new x(L(414), function() {
		aYk(1)
	}, 0, 0, 1), new x(L(415), function() {
		aYk(2)
	}, 0, 0, 1), new x(L(416), function() {
		aYk(3)
	}, 0, 0, 1), new x(L(417), function() {
		aYk(0)
	}, 0, 0, 1), new x(L(418), function() {
		aYk(9)
	}, 0, 0, 1), new x(L(419), function() {
		aYk(10)
	}, 0, 0, 1), new x(L(420), function() {
		aYk(11)
	}, 0, 0, 1), new x(L(421), function() {
		aYk(13)
	}, 0, 0, 1)], yi = [new x("⬅️ " + L(49), function() {
		u.a4x()
	})], aV9 = new yh(L(422), yi), aYi = new tx(aYj, aV9.ym)
}

function aH0(title, tC, aYl) {
	var aV9, aXp;
	this.show = function() {
		aV9.show(), this.resize()
	}, this.uN = function() {
		aV9.uN()
	}, this.resize = function() {
		aV9.resize(), aXp.resize()
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	}, aYl = aYl || [new x("⬅️ " + L(49), function() {
		u.a4x()
	}, bE.r6)], aV9 = new yh(title, aYl), aXp = new uY(aV9.ym, tC), bD.tO.textAlign(aV9.ym.style, 1)
}

function aEz(data) {
	var aV9, aYm;

	function aYv(fk) {
		return fk < 60 ? 1 === fk ? fk + " Second" : fk + " Seconds" : fk < 3600 ? 1 === (fk = Math.floor(fk / 60)) ? fk + " Minute" : fk + " Minutes" : fk < 172800 ? 1 === (fk = Math.floor(fk / 3600)) ? fk + " Hour" : fk + " Hours" : (fk = Math
			.floor(fk / 172800)) + " Days"
	}

	function aYo(kL) {
		var fk = data.data.length;
		if (fk) {
			for (var vp, max = min = parseInt(data.data[0][0]), aC = 1; aC < fk; aC++) var aJy = parseInt(data.data[aC][0]),
				min = Math.min(aJy, min),
				max = Math.max(aJy, max);
			vp = kL < 0 ? min + kL : max + 1, u.v(8, u.a52().a53, new vY(21, {
				vo: data.vo,
				vp: vp,
				vq: vp + Math.abs(kL)
			}))
		}
	}
	if (this.show = function() {
			aV9.show(), this.resize()
		}, this.uN = function() {
			aV9.uN()
		}, this.resize = function() {
			aV9.resize(), aYm.resize()
		}, this.a5t = function(eu) {
			2 === eu && aV9.yn[0].te()
		}, data.aF0) {
		aV9 = new yh(L(33), [new x("⬅️ " + L(49), function() {
			u.a4x()
		})]);
		var fn = {
				vH: [],
				vM: [L(435), L(436), L(437) + " ↗"],
				vT: [12, 50, 38]
			},
			a8p = aE.data.a8p;
		if (a8p) {
			for (var fk = a8p.length, vH = fn.vH, a2G = ah.a2G, aC = 0; aC < fk; aC++) vH.push([{
				gC: aC + 1 + ".",
				el: 0
			}, {
				gC: a2G[aC],
				el: 0
			}, {
				gC: bI.fB.a35(a8p[aC], 5),
				el: 1,
				pg: a8p[aC],
				vW: 0
			}]);
			aYm = new vF(aV9.ym, fn, {
				vP: 1
			})
		} else aYm = new vF(aV9.ym, fn)
	} else {
		var fn = data.data.length ? 0 : 1,
			aYl = [new x("⬅️ " + L(49), function() {
				u.a4x()
			}), new x(L(423), function() {
				aYo(-10)
			}, fn, 0, 1), new x(L(424), function() {
				aYo(10)
			}, fn, 0, 1), new x(L(368), function() {
				u.v(11, 10, new aYp({
					vo: data.vo
				}))
			})],
			vM = [L(425), L(426), L(427), L(428), L(429), L(430), L(431), L(432), L(433), L(434), L(419), L(420), "Audit Log", L(421)];
		aV9 = new yh(vM[data.vo], aYl), ! function() {
			var aC, fn = {
					vH: []
				},
				vH = fn.vH,
				aYr = data.data,
				fk = aYr.length;
			fk && 0 === aYr[0][0] && 0 <= (eT = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.vo]) && (u.z.vr[eT] = aYr[0][1]);
			var oL = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.vo],
				a7w = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.vo],
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
			if (fn.vM = eT[data.vo], fn.vT = [
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
				][data.vo], 0 === data.vo || 2 === data.vo || 3 === data.vo || 9 === data.vo || 10 === data.vo || 11 === data.vo || 13 === data.vo)
				for (aC = 0; aC < fk; aC++) vH.push([{
					gC: aYr[aC][0] + 1 + ".",
					el: 0
				}, {
					gC: aYr[aC][1],
					el: 1,
					pg: aYr[aC][4],
					vW: aYr[aC][3]
				}, {
					gC: (oL * aYr[aC][2]).toFixed(a7w),
					el: 0
				}]);
			else if (12 === data.vo)
				for (aC = 0; aC < fk; aC++) {
					var aYu = aYr[aC][3];
					vH.push([{
						gC: "" + aYr[aC][0],
						el: 0
					}, {
						gC: aYv(aYr[aC][4]),
						el: 0
					}, {
						gC: aYr[aC][5],
						el: 1,
						pg: aYr[aC][1],
						vW: 0
					}, {
						gC: aYr[aC][6],
						el: 1,
						pg: aYr[aC][2],
						vW: 0
					}, {
						gC: br.eZ(aYu, bI.fB.a35(aYr[aC][1], 5)),
						el: 0
					}])
				} else if (1 === data.vo)
					for (aC = 0; aC < fk; aC++) vH.push([{
						gC: aYr[aC][0] + 1 + ".",
						el: 0
					}, {
						gC: aYr[aC][1],
						el: 0
					}, {
						gC: (oL * aYr[aC][2]).toFixed(a7w),
						el: 0
					}, {
						gC: aYr[aC][3],
						el: 1,
						pg: aYr[aC][5],
						vW: aYr[aC][4]
					}]);
				else if (4 === data.vo || 5 === data.vo || 6 === data.vo || 7 === data.vo || 8 === data.vo)
				for (aC = 0; aC < fk; aC++) {
					var aYw = aYr[aC][5];
					4 === data.vo || 8 === data.vo ? "100%" === (aYw = (aYw % 64 * 100 / (aYw >> 6)).toFixed(0) + "%") && (4 === data.vo ? aYw += " (" + L(455) + ")" : aYw += " (" + L(456) + ")") : 5 === data.vo ? 32768 <= aYw && (aYw = -(aYw -
						32768)) : aYw = (oL * aYw).toFixed(a7w), vH.push([{
						gC: "" + aYr[aC][0],
						el: 0
					}, {
						gC: aYv(aYr[aC][6]),
						el: 0
					}, {
						gC: aYr[aC][7],
						el: 1,
						pg: aYr[aC][1],
						vW: aYr[aC][2]
					}, {
						gC: aYr[aC][8],
						el: 1,
						pg: aYr[aC][3],
						vW: aYr[aC][4]
					}, {
						gC: "" + aYw,
						el: 0
					}])
				}
			aYm = new vF(aV9.ym, fn)
		}()
	}
}

function aYp(a7l) {
	var aV9, aVA, tJ;
	this.show = function() {
		aV9.show(), this.resize()
	}, this.uN = function() {
		aV9.uN()
	}, this.resize = function() {
		aV9.resize(), aVA.resize()
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	}, aV9 = new yh(L(457), [new x("⬅️ " + L(49), function() {
		u.aV7(10)
	})]), aVA = new tH(aV9.ym, ((tJ = []).push(function() {
		var aKW, xD = new t3,
			aXW = new uB(bm.buffer.data[132], 1, function() {
				aKW.button.click()
			}),
			aXX = new uB(bm.buffer.data[131], 1, function() {
				aXW.e.focus()
			});
		xD.t6(L(373)), xD.tG(aXX), aXX.e.style.marginBottom = "0.8em", xD.t6(L(374)), xD.tG(aXW);
		return aKW = new x(L(372), function() {
			vp = Math.floor(aXX.e.value), vq = Math.floor(aXW.e.value);
			var vq, vp = {
				a6N: Math.min(vp, vq),
				aTY: Math.max(vp, vq)
			};
			u.v(8, u.a91(10).a53, new vY(21, {
				vo: a7l.vo,
				vp: vp.a6N,
				vq: vp.aTY
			}))
		}, 0, 0, 1), xD.tG(new uZ([aKW.button])), xD
	}()), tJ.push(function() {
		var aKW, xD = new t3,
			aXW = new uB(bm.buffer.data[134], 1, function() {
				aKW.button.click()
			}),
			aXX = new uB(bm.buffer.data[133], 0, function() {
				aXW.e.focus()
			});
		return xD.t6(1 === a7l.vo ? L(458) : L(459)), xD.tG(aXX), aXX.e.style.marginBottom = "0.8em", xD.t6(L(460)), xD.tG(aXW), aKW = new x(L(372), function() {
			var aXy = aXX.e.value.slice(0, 20),
				aXz = Math.abs(Math.floor(aXW.e.value));
			u.v(8, u.a91(10).a53, new vY(22, {
				vo: a7l.vo,
				aXy: aXy,
				aXz: aXz
			}))
		}, 0, 0, 1), xD.tG(new uZ([aKW.button])), xD
	}()), tJ.push(function() {
		var aKW, xD = new t3,
			aXW = new uB(bm.buffer.data[152], 1, function() {
				aKW.button.click()
			}),
			aXX = new uB(bm.buffer.data[151], 0, function() {
				aXW.e.focus()
			});
		return xD.t6(L(461)), xD.tG(aXX), aXX.e.style.marginBottom = "0.8em", xD.t6(L(460)), xD.tG(aXW), aKW = new x(L(372), function() {
			var aXy = aXX.e.value.slice(0, 5),
				aXz = Math.abs(Math.floor(aXW.e.value));
			u.v(8, u.a91(10).a53, new vY(28, {
				vo: a7l.vo,
				aXy: aXy,
				aXz: aXz
			}))
		}, 0, 0, 1), xD.tG(new uZ([aKW.button])), xD
	}()), tJ))
}

function aV3() {
	var aZ0, aZ1, aZ2, aZ3, aZ4, aZ5, aZ6, w0, w1, aZ7 = new Array(2);

	function aZ9(button, aZB) {
		button = new uJ("", button, 1, aZB);
		return button.uL.style.right = "0.2em", button.uL.style.textAlign = "left", button.uL.style.overflow = "hidden", button.uL.style.textOverflow = "ellipsis", button.uL.translate = !1, button
	}

	function aJf() {
		var input, aIb;
		!bq.fH || (aIb = (input = aZ0.wA.uA.e).value.trim().slice(0, 255)).length < 1 || (bq.pa.a3q(aIb), input.value = bq.pa.aJp(), aZ0.wA.uK(), bM.tr()) || input.focus()
	}

	function aZ8(wM) {
		var aZD = bq.z.aHK;
		aZD !== wM && (aZA(aZD, 0), aZA(wM, 1), bq.z.aHK = wM, 0 === aZD && b1.aI1.aI2(1), 0 === wM ? (b1.aI1.aI2(0), c0.nJ.nV()) : 1 === wM && aZ0.wB.nV(), aZ0.wL(wM), aZ0.resize())
	}

	function aZA(wM, color) {
		w0.p9[wM].ti(color ? bE.qo : bE.rj), w0.p9[wM].button.classList.toggle("fx-selected", !!color)
	}

	function aM1(aM4) {
		aM4 && bq.fH && 29 === u.vX && (u.a91(29).aJ8(), bq.xB.aJ9())
	}
	this.pa = function(pg) {
		aZ8(0);
		var pY = aZ0.wA.uA.e.value,
			pg = "@" + pg + " ";
		pY.length && !bD.pc.a7A(pY, " ") && (pg = " " + pg), aZ0.wA.uA.e.value = pY += pg, aZ0.wA.uK(), aZ0.wA.uA.e.focus()
	}, this.aJ6 = function() {
		aZ0.wB.nV()
	}, this.aI3 = function() {
		var tJ = bq.tJ,
			tJ = tJ.aI0() ? tJ.xF ? bE.rP : bE.qo : bE.rj;
		w1.p9[1].ti(tJ), aZ0.wD.nV()
	}, this.aJ8 = function() {
		var tJ = bq.tJ,
			aC = tJ.xh(tJ.xE);
		aC < 0 || (tJ = tJ.tJ[aC], bV.aJO.aM4(tJ.fQ) ? bV.a8(tJ.fQ, tJ.mapSeed) : bV.aJO.zc(tJ.fQ, aM1))
	}, this.aJ7 = function() {
		aZ0.wJ(bq.z.wK);
		var x0 = bq.po.x0,
			aZE = x0.length,
			xD = bq.tJ.tJ[0],
			aZF = xD ? Math.min(bq.tJ.xG(xD), aZE) : 0;
		aZ1.uL.textContent = "" + aZE, aZ2.uL.textContent = "" + aZF, aZ3.uL.textContent = aP.aBB(0, 2), aZ4.uL.textContent = aP.aBB(2, 4), aZ5.uL.textContent = xD ? bq.tJ.xJ(xD.wy) + "   " + bV.xH.xI[xD.fQ] : "", aZ6[0].uL.textContent = bq.lv
			.aIg(x0, 0, aZE), aZ6[1].uL.textContent = xD && xD.wy < 7 ? bq.lv.aIg(x0, 0, aZF) : "", aZ7[1].uL.textContent = "Multiplayer: " + bq.z.aJ2[0] + "   Single: " + bq.z.aJ2[1] + "   Lobby: " + aZE, this.aI3()
	}, this.aJB = function() {
		c0.nJ.nV()
	}, this.show = function() {
		bq.z.aHJ++, aZ0.show(), this.resize(), bq.message.show()
	}, this.uN = function() {
		aZ0.uN(), bq.y9.uN(), bq.xd.uN(), bq.message.uN()
	}, this.resize = function() {
		aZ0.resize(), bq.message.resize()
	}, this.a5t = function(eu) {
		2 === eu ? bq.tJ.xE ? bq.tJ.select(0) : w1.p9[0].te() : eu < 2 && bq.tJ.click(0)
	}, w0 = new uc([new x(L(462), function() {
		return aZ8(0), 2
	}), new x(L(33), function() {
		return aZ8(1), 2
	}), new x(L(463), function() {
		return aZ8(2), 2
	})], bE.rj, 0, [18, 36, 46]);
	for (var aC = 0; aC < 3; aC++) w0.p9[aC].button.style.padding = "0";
	w1 = new uc([new x(L(35, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			u.y(), bq.xy(), b1.z.a5B(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		}),
		function() {
			u.y(), bq.xy(), b1.z.a5B(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		})), new x(L(464), function() {
		return bq.tJ.click(0), 2
	})], bE.rj, 0, [25, 75]), aZ0 = new vz(w0, w1, aJf, bq.y9.aKC, function(eT, xl) {
		bq.fH && bq.tJ.click(eT, xl)
	});
	var join = w1.p9[1].button,
		input = (bD.tO.wa(join, null, function() {
			bq.fH && bq.tJ.click(0, 1)
		}), aZ0.wA.uA.e);
	input.addEventListener("beforeinput", function(event) {
			bq.fH && bq.pa.aJr(event, input) && aZ0.wA.uK()
		}), aZ1 = new uJ("0", w0.p9[1].button), aZ2 = new uJ("0", w1.p9[1].button), aZ3 = aZ9(w0.p9[2].button, 0), aZ4 = aZ9(w0.p9[2].button, 1), (aZ5 = aZ9(w1.p9[1].button, 0)).uL.style.right = "3em", (aZ6 = [new uJ("", w0.p9[1].button, 1, 1),
			new uJ("", w1.p9[1].button, 1, 1)
		])[0].uL.style.bottom = "0em", aZ6[1].uL.style.bottom = "0em", aZ6[0].uL.translate = !1, aZ6[1].uL.translate = !1, aZA(bq.z.aHK, 1), (aZ7 = [new uJ(L(366), aZ0.wN(), 1, 0), new uJ("", aZ0.wN(), 1, 1)])[0].uL.style.fontSize = "0.4em", aZ7[1]
		.uL.style.fontSize = "0.4em"
}

function aUk() {
	var aV9, aVA, tJ;
	this.show = function() {
		aV9.show(), this.resize()
	}, this.uN = function() {
		aV9.uN()
	}, this.resize = function() {
		aV9.resize(), aVA.resize()
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	}, aV9 = new yh(L(465), [new x("⬅️ " + L(49), function() {
		u.v(7, u.a91(7).a53)
	}), new x(L(267), function() {
		bm.rv.q1(105, bJ.fB.a0U(aVA.tL[0].t4[0].e.value, 5)), bm.rv.q1(106, bJ.fB.a0U(aVA.tL[1].t4[0].e.value, 15)), u.v(8, u.a91(7).a53, new vY(18))
	})]), aVA = new tH(aV9.ym, ((tJ = []).push(function() {
		var xD = new t3;
		return xD.t6(L(244)), xD.tG(new uB({
			value: "",
			eT: -1
		})), xD
	}()), tJ.push(function() {
		var xD = new t3,
			aVp = (xD.t6(L(247)), new uB({
				value: "",
				eT: -1
			}));
		return aVp.e.type = "password", xD.tG(aVp), xD.tG(new uZ([new x(L(248), function(e) {
			return e.textContent === L(248) ? (e.textContent = L(249), aVp.e.type = "text") : (e.textContent = L(248), aVp.e.type = "password"), !0
		}).button])), xD
	}()), tJ.push(function() {
		var xD = new t3;
		return xD.t6(L(251)), xD.t7(L(466)), xD.t7(L(467)), xD.t7(L(468)), xD
	}()), tJ))
}

function aUr() {
	var aV9, aYi, aYj, yi;

	function aYk(aC) {
		u.v(8, u.vX, new vY(21, {
			vo: aC,
			vp: 0,
			vq: 10
		}))
	}
	this.show = function() {
		aV9.show(), this.resize()
	}, this.uN = function() {
		aV9.uN()
	}, this.resize = function() {
		aV9.resize(), aYi.resize()
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	}, aYj = [new x(L(430), function() {
		aYk(5)
	}, 0, 0, 1), new x(L(431), function() {
		aYk(6)
	}, 0, 0, 1), new x(L(432), function() {
		aYk(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aYk(12)
	}, 0, 0, 1)], yi = [new x("⬅️ " + L(49), function() {
		u.a4x()
	})], aV9 = new yh(L(469), yi), aYi = new tx(aYj, aV9.ym)
}

function aUZ() {
	this.buffer = {}, this.vr = new Array(8), this.aUp = null, this.aUm = null, this.vD = 0, this.vQ = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a8k = function(aZI) {
		aZI && (aa.fD = aZI), u.y(), aa.dv()
	}, __fx.customLobby.setJoinFunction(() => this.a8k(1)), this.aGd = function() {
		u.v(0 === ab.a4y() ? 5 : 0)
	}, this.aXR = function() {
		if (1 === bm.buffer.data[130].value) u.v(8, u.a52().a53, new vY(24, {
			aX0: bm.buffer.data[125].value,
			vp: bm.buffer.data[128].value,
			vq: bm.buffer.data[129].value
		}));
		else {
			for (var h = (h = bm.buffer.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a52().a53, new vY(23, {
				aX0: bm.buffer.data[125].value,
				a4X: h
			}))
		}
	}, this.aYb = function(a53, target) {
		u.v(4, a53, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aVb(
				"/privacy") + "<br>By playing you agree to our Terms of Service: " + b1.z.aVb("/terms"), !1, [new x("⬅️ " + L(49), function() {
				u.v(a53)
			}), new x("✅ Accept", function() {
				bm.rv.q1(140, 1), 0 === target ? u.v(2, a53) : u.v(8, a53, new vY(target))
			})]))
	}, this.aZJ = function() {
		for (var aC = 0; aC < 8; aC++) this.vr[aC] = bJ.a0L.a0P(bK.sY(5));
		this.vr[1] = "[" + this.vr[1] + "]", 5 === u.vX && (u.a52().aMQ.q1(this.vr), u.a52().resize())
	}, this.aVk = function(gC, rt, aAa) {
		gC = bD.h6.a7i(gC, 1, 1e6);
		rt = L(470, [rt]);
		return (rt += "<br>") + L(471, [__fx.utils.escapeHtml("" + aAa)]) + "<br>" + L(472, [gC + "–" + (gC + 2)]) + "<br>" + L(473, [gC])
	}
}

function aUu() {
	var aWX, aWY, aZK, tJ;

	function aWa() {
		b7.xy(), u.aV8()[19] = null, u.a4x()
	}

	function aZR() {
		aZU(), aZS()
	}

	function aZU() {
		aZK.t5.lastChild && u.removeChild(aZK.t5, aZK.t5.lastChild)
	}

	function aZS() {
		var aYB = bV.a8s(aE.data);
		bV.aJO.aM4(aYB) ? (aE.data.canvas = bV.aRA(aYB, aE.data.mapSeed).a1r, aZT()) : (aE.data.canvas = null, bV.aJO.aSv(aYB, function(aM4) {
			aM4 && 20 === u.vX && 2 !== aE.data.mapType && bV.a8s(aE.data) === aYB && u.v(20)
		}))
	}

	function aZT() {
		var a6f = aE.data.canvas;
		a6f.style.width = "100%", aZK.t5.appendChild(a6f)
	}
	this.aNe = function(a6f) {
		aE.data.canvas && aZU(), aE.data.canvas = a6f, aZT()
	}, this.show = function() {
		aWX.show(), this.resize()
	}, this.uN = function() {
		aWX.uN()
	}, this.resize = function() {
		aWX.resize(), aWY.resize()
	}, this.a5t = function(eu) {
		2 === eu && aWX.yn[0].te()
	}, aWX = new yh(L(394), [new x("⬅️ " + L(49), aWa)]), 2 === aE.data.mapType && b7.dv(), aWY = new tH(aWX.ym, (function(tJ) {
		var xD = new t3;
		xD.t6(L(360)), xD.tD(new yd({
			vG: [L(474), L(475), L(476)],
			value: aE.data.mapType
		}, function(eT) {
			2 === (aE.data.mapType = eT) ? (b7.dv(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.xy()), u.v(20)
		})), 2 <= aE.data.mapType && (xD.tG(new uz), xD.tG(new uV({
			value: aE.data.passableWater
		}, L(477), function(value) {
			aE.data.passableWater = value
		})), xD.tG(new uV({
			value: aE.data.passableMountains
		}, L(478), function(value) {
			aE.data.passableMountains = value
		})));
		tJ.push(xD)
	}(tJ = []), function(tJ) {
		if (0 === aE.data.mapType) {
			for (var xD = new t3, vG = (xD.t6(L(394)), []), aC = 0; aC < bV.xH.aS8.length; aC++) vG.push(bV.xH.aAn[bV.xH.aS8[aC]].name);
			xD.tD(new yd({
				vG: vG,
				value: aE.data.mapProceduralIndex
			}, function(eT) {
				aE.data.mapProceduralIndex = eT, aZR()
			})), tJ.push(xD)
		}
	}(tJ), function(tJ) {
		if (1 === aE.data.mapType) {
			for (var xD = new t3, vG = (xD.t6(L(394)), []), aC = 0; aC < bV.xH.aS9.length; aC++) vG.push(bV.xH.aAn[bV.xH.aS9[aC]].name);
			xD.tD(new yd({
				vG: vG,
				value: aE.data.mapRealisticIndex
			}, function(eT) {
				aE.data.mapRealisticIndex = eT, aZR()
			})), tJ.push(xD)
		}
	}(tJ), function(tJ) {
		var xD;
		2 === aE.data.mapType && ((xD = new t3).t6(L(479)), xD.tG(new uB(bm.buffer.data[162], 1)), xD.t6(L(480), "0.8em"), xD.tG(new uZ([new x(L(481), function() {
			return b7.aNX(), !0
		}).button])), tJ.push(xD))
	}(tJ), function(tJ) {
		var xD, uA;
		2 === aE.data.mapType && ((xD = new t3).t6(L(482)), uA = new uB({
			eT: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), xD.tG(uA), tJ.push(xD))
	}(tJ), function(tJ) {
		var xD, uA, aKW;
		0 === aE.data.mapType && ((xD = new t3).t6("Seed"), uA = new uB({
			eT: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aZR())
		}), aKW = new x(L(385), function(e) {
			var aR6 = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aR6) return uA.e.value = aE.data.mapSeed = aR6, aZR(), !0
		}), xD.tG(uA), xD.tG(new uZ([aKW.button])), tJ.push(xD))
	}(tJ), function(tJ) {
		(aZK = new t3).t6(L(483)), 2 !== aE.data.mapType ? aZS() : aE.data.canvas && aZT();
		tJ.push(aZK)
	}(tJ), tJ))
}

function w(title, tC, aZV, aYl) {
	var aV9, aXp;
	this.show = function() {
		aV9.show(), this.resize()
	}, this.uN = function() {
		aV9.uN()
	}, this.resize = function() {
		aV9.resize(), aXp.resize()
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	}, aYl = aYl || [new x("⬅️ " + L(49), function() {
		u.a4x()
	})], aV9 = new yh(title, aYl), aXp = new uY(aV9.ym, tC), aZV && bD.tO.textAlign(aV9.ym.style, 1)
}

function aUx() {
	var aWX, aWY, aWZ, tJ;

	function aWa() {
		aWc(), 2 === aE.data.playerNamesType && 1 === bD.tV.a6J(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aV8()[19] = null, u.a4x()
	}

	function aWc() {
		2 === aE.data.playerNamesType && bD.tV.a6X(aWZ.zC(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aWX.show(), this.resize()
	}, this.uN = function() {
		aWX.uN()
	}, this.resize = function() {
		aWX.resize(), aWY.resize()
	}, this.a5t = function(eu) {
		2 === eu && aWX.yn[0].te()
	}, aWX = new yh(L(398), [new x("⬅️ " + L(49), aWa)]), aWY = new tH(aWX.ym, (function(tJ) {
		var xD = new t3;
		xD.t6(L(360)), xD.tD(new yd({
			vG: [L(399), L(400), L(363)],
			value: aE.data.playerNamesType
		}, function(eT) {
			aWc(), aE.data.playerNamesType = eT, u.v(23)
		})), xD.tG(new uz), xD.tG(new uV({
			value: aE.data.selectableName
		}, L(484), function(value) {
			aE.data.selectableName = value
		})), tJ.push(xD)
	}(tJ = []), function(tJ) {
		var xD;
		2 === aE.data.playerNamesType && ((xD = new t3).t6("Data"), aWZ = new z4(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fh || (aE.data.playerNamesData = new Array(aE.fh), aE.data.playerNamesData
			.fill("")), aWZ.zB(bD.pc.a89(aE.data.playerNamesData, 1, '"')), xD.tG(aWZ), tJ.push(xD))
	}(tJ), tJ))
}

function aV5() {
	var aWX, aWY, tJ;

	function aZb() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.buffer.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var g3 = 0; g3 < 3; g3++) g3 < h.length && (colors[aC][g3] = Number(h[g3]))
		}
		return colors
	}
	this.show = function() {
		aWX.show(), this.resize()
	}, this.uN = function() {
		aWX.uN()
	}, this.resize = function() {
		aWX.resize(), aWY.resize()
	}, this.a5t = function(eu) {
		2 === eu && aWX.yn[0].te()
	}, aWX = new yh(L(485), [new x("⬅️ " + L(49), function() {
		u.a4x()
	})]), aWY = new tH(aWX.ym, ((tJ = []).push(function() {
		var xD = new t3;
		return xD.t6(L(486)), xD.tB(b1.z.aVb("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", xD.tB("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), xD
	}()), tJ.push(function() {
		var xD = new t3,
			ew = (xD.t6(L(487)), bm.buffer.data[174].value),
			t8 = xD.t7(ew.length + " / 180"),
			aWG = (t8.style.textAlign = "center", new z4(0, 1, function(e) {
				var e = e.target.value,
					hD = e.length;
				t8.textContent = hD + " / 180", hD <= 180 && bm.rv.q1(174, e)
			}));
		return aWG.e.rows = 6, aWG.e.style.fontSize = "1em", aWG.zB(ew), xD.tG(aWG), xD
	}()), tJ.push(function() {
		var xD = new t3;
		xD.t6(L(384));
		for (var aC = 0; aC < 11; aC++) {
			var j7 = xD.tG(new uB(bm.buffer.data[163 + aC]));
			aC && (j7.e.style.marginTop = "0.6em")
		}
		return xD.tG(new uZ([new x(L(488), function() {
			for (var data = bm.buffer.data, aC = 163; aC < 174; aC++) data[aC] && bm.buffer.zR(aC, data[aC].zU);
			u.a4x(), u.aV8()[31] = null, u.v(31)
		}).button])), xD
	}()), tJ.push(function() {
		var xD = new t3;
		return xD.t6("Targeting"), xD.tB(L(489)), xD.tG(new uB(bm.buffer.data[175], 0, 0)), xD
	}()), tJ.push(function() {
		var xD = new t3;
		return xD.t6(L(483)), xD.tG(new uZ([new x(L(248), function() {
			(new ev).show(bm.buffer.data[174].value, aZb(), -1)
		}).button])), xD
	}()), tJ.push(function() {
		var xD = new t3,
			aZc = (xD.t6(L(490)), xD.tB(L(491)), new uB(bm.buffer.data[176], 1, 0)),
			aZd = (xD.tG(aZc), new x(L(492), function(e) {
				return aZe.button.textContent === L(170) && b1.z.eq(0) && (bD.tO.ya(e), aVh(), b1.aVi.aZf(bm.buffer.data[176].value, aZb(), bm.buffer.data[175].value, bm.buffer.data[174].value)), !0
			}, 1)),
			aVh = function() {
				aZe.button.textContent = L(232), aZd.ti(1), aZd.button.style.color = bE.qP
			},
			aZe = new x(L(232), function(e) {
				return e.textContent === L(232) ? (e.textContent = L(170), aZd.ti(0), aZd.button.style.color = bE.rU) : aVh(), !0
			});
		return xD.tG(new uZ([aZe.button, aZd.button])), xD
	}()), tJ))
}

function aV6() {
	var aV9, aVA, tJ;
	this.show = function() {
		aV9.show(), this.resize()
	}, this.uN = function() {
		aV9.uN()
	}, this.resize = function() {
		aV9.resize(), aVA.resize()
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	}, aV9 = new yh("🔒 " + L(493), [new x("⬅️ " + L(49), function() {
		u.a4x()
	})]), aVA = new tH(aV9.ym, ((tJ = []).push(function() {
		var xD = new t3,
			uA = (xD.tB(b1.z.aVb("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", xD.t6(L(244)), new uB({
				value: "",
				eT: -1
			})),
			aWC = (xD.tG(uA), xD.t6(L(318), "0.8em"), new uB({
				value: "",
				eT: -1
			}, 0, 0)),
			aVg = (aWC.e.type = "email", aWC.e.autocomplete = "email", aWC.e.name = "email", aWC.e.inputMode = "email", aWC.e.spellcheck = !1, xD.tG(aWC), new x(L(494), function(e) {
				return bD.tO.ya(e), b1.aVi.aWD({
					action: 4,
					pY: uA.e.value.trim() + aWC.e.value.trim().substring(0, 63)
				}), !0
			}));
		return xD.tG(new uZ([aVg.button])), xD
	}()), tJ))
}

function aUi() {
	var aWX, z9;

	function aZg() {
		u.y();
		var playedGame = aE.a3m && !aE.ht ? bC.a8h.a3G() : "",
			pY = bC.aZk(z9.zC());
		(aE.a3m && 0 < pY.length && pY === bC.sk.a8g || bC.aOc.a0c(pY)) && (__fx.replayHistory.save(playedGame), bC.aZl())
	}
	this.show = function(aZh) {
		this.aZi(aZh), aWX.show(), this.resize()
	}, this.aZi = function(aZh) {
		0 === aE.a3m ? aZh ? z9.zB(aZh) : aE.a8T.length && z9.zB(aE.a8T) : (aE.ht || (bC.sk.a8g = bC.a8h.a3G()), z9.zB(bC.aZj(bC.sk.a8g)))
	}, this.zB = function(pY) {
		z9.zB(pY)
	}, this.uN = function() {
		aWX.uN()
	}, this.resize = function() {
		aWX.resize(), z9.resize()
	}, this.a5t = function(eu) {
		2 === eu ? aWX.yn[0].te() : aZg()
	}, aWX = new yh(L(495), [new x("⬅️ " + L(49), function() {
		u.aV7(1)
	}), new x(L(496), function() {
		z9.zD()
	}), new x(L(497), function() {
		z9.zE()
	}), new x(L(498), function() {
		z9.clear()
	}), new x(L(499), function() {
		aZg()
	})]), z9 = new z4(L(500)), aWX.ym.appendChild(z9.e)
}

function aUh() {
	var aV9, aVA, tJ, xD;

	function aZm() {
		bA.aGP !== bm.buffer.data[12].value ? (bA.dv(), u.v(8, 1, new vY(30))) : u.v(1)
	}
	this.show = function() {
			aV9.show(), this.resize()
		}, this.uN = function() {
			aV9.uN()
		}, this.resize = function() {
			aV9.resize(), aVA.resize()
		}, this.a5t = function(eu) {
			2 === eu && aV9.yn[0].te()
		}, aV9 = new yh(L(501), [new x("⬅️ " + L(49), aZm), new x(L(502), function() {
			u.y(), bm.rv.a02(), u.v(2)
		})]), tJ = [], (xD = new t3).t6(L(503)), xD.t7(L(504)), tJ.push(xD),
		function(tJ) {
			var xD = new t3,
				h = (xD.t6(L(489)), bA.data.aGg());
			xD.tD(new yd({
				vG: h,
				value: bA.data.aGk(h)
			}, function(eT) {
				return bm.rv.q1(12, h[eT].split(":")[0]), !0
			})), tJ.push(xD)
		}(tJ),
		function(tJ) {
			var xD = new t3,
				aZp = (xD.t6(L(529)), []);
			xD.tG(new uZ([new x(L(488), function(e) {
				ba.aZq();
				for (var aC = 0; aC < aZp.length; aC++) aZp[aC].e.value = ba.aFr[aC];
				return bD.tO.ya(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aZr.length; aC++) {
				xD.t7(ba.aZr[aC]);
				for (var g3 = 0; g3 < 2; g3++) {
					var eT = 2 * aC + g3,
						uA = new uB({
							value: ba.aFr[eT],
							eT: -1
						});
					uA.e.aZs = eT, aZp.push(uA), uA.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aZt(e.target.aZs, code)
					}), g3 && (uA.e.style.marginLeft = "4%"), uA.e.style.width = "48%", xD.tG(uA)
				}
			}
			tJ.push(xD)
		}(tJ), (xD = new t3).t6(L(505)), bm.buffer.data[1].vG = [L(506), L(507), L(508), L(509)], xD.tD(new yd(bm.buffer.data[1])), tJ.push(xD), (xD = new t3).t6(L(510)), bm.buffer.data[9].vG = [L(507), L(511), L(512)], xD.tD(new yd(bm.buffer.data[
			9])), tJ.push(xD), (xD = new t3).t6(L(513)), bm.buffer.data[11].vG = [L(514), L(9), L(515)], xD.tD(new yd(bm.buffer.data[11])), tJ.push(xD), (xD = new t3).t6(L(516)), xD.tG(new uV(bm.buffer.data[2])), tJ.push(xD), (xD = new t3).t6(L(
		517)), xD.tG(new uV(bm.buffer.data[7])), tJ.push(xD), (xD = new t3).t6(L(518)), xD.tG(new uV(bm.buffer.data[8])), tJ.push(xD), (xD = new t3).t6(L(519)), xD.tG(new uB(bm.buffer.data[5])), tJ.push(xD), (xD = new t3).t6(L(520)), xD.tG(new uV(bm
			.buffer.data[13], L(521))), xD.tG(new uV(bm.buffer.data[14], L(522))), tJ.push(xD), (xD = new t3).t6(L(523)), xD.tD(new yd({
			vG: [L(524), L(525), L(526)],
			value: aa.aLR
		}, function(aC) {
			aa.aLR = aC
		})), tJ.push(xD), (xD = new t3).t6(L(527)), xD.tG(new uV(bm.buffer.data[15])), xD.t7(L(528)), xD.tG(new uB(bm.buffer.data[16], 1, 0, function(e) {
			e.target.value = bO.iw(Math.floor(e.target.value), 0, 16)
		})), tJ.push(xD), aVA = new tH(aV9.ym, tJ)
}

function aUy() {
	var aWX, aWY, aWZ, tJ;

	function aWa() {
		aWc(), 2 !== aE.data.spawningType || bD.tV.a6J(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aV8()[19] = null, u.a4x()
	}

	function aWc() {
		2 === aE.data.spawningType && bD.tV.a6V(aWZ.zC(), aE.data.spawningData, bV.aNh - 1)
	}
	this.show = function() {
		aWX.show(), this.resize()
	}, this.uN = function() {
		aWX.uN()
	}, this.resize = function() {
		aWX.resize(), aWY.resize()
	}, this.a5t = function(eu) {
		2 === eu && aWX.yn[0].te()
	}, aWX = new yh(L(530), [new x("⬅️ " + L(49), aWa)]), aWY = new tH(aWX.ym, (function(tJ) {
		var xD = new t3,
			vG = (xD.t6(L(360)), [L(385), L(397), L(363)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (vG.splice(1, 1), 0 < value) && (value = 1);
		xD.tD(new yd({
			vG: vG,
			value: value
		}, function(eT) {
			aWc(), aE.data.spawningType = eT, 0 === aE.data.gameMode && 1 === eT && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fh)), u.v(24)
		})), tJ.push(xD)
	}(tJ = []), function(tJ) {
		var xD = new t3;
		xD.t6("My Spawn"), xD.tG(new uV({
			value: aE.data.selectableSpawn
		}, L(531), function(value) {
			aE.data.selectableSpawn = value
		})), tJ.push(xD)
	}(tJ), function(tJ) {
		var xD = new t3,
			aZv = (xD.t6("Seed"), new uB({
				eT: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		xD.tG(aZv), xD.tG(new uZ([new x(L(385), function() {
			aZv.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), tJ.push(xD)
	}(tJ), function(tJ) {
		var xD;
		2 === aE.data.spawningType && ((xD = new t3).t6("Data"), (aWZ = new z4(0, 1, 0, 1)).zB(bD.pc.a89(aE.data.spawningData, 2)), xD.tG(aWZ), tJ.push(xD))
	}(tJ), tJ))
}

function aUg() {
	var aV9, aYi, aYj, yi;

	function aZw(id) {
		0 !== a1.id || bm.buffer.data[140].value ? 0 === id ? u.v(8, 1, new vY(16)) : u.v(2) : u.z.aYb(u.vX, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aV9.show(), this.resize(), this.ep()
	}, this.uN = function() {
		aV9.uN()
	}, this.resize = function() {
		aV9.resize(), aYi.resize()
	}, this.ep = function() {
		8 === ab.a4y() && (bg.aa1() ? aYj[2].tf === bE.qb && aYj[2].ti(0) : aYj[2].tf !== bE.qb && aYj[2].ti(bE.qb), aE.ht || aE.hu || !aN.t1(aE.fU) ? aYj[1].tf !== bE.qb && aYj[1].ti(bE.qb) : aYj[1].tf === bE.qb && aYj[1].ti(0), aE.ht || aE
			.hu || !ax.ia(aE.fU) ? aYj[0].tf !== bE.qb && aYj[0].ti(bE.qb) : aYj[0].tf === bE.qb && aYj[0].ti(0))
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	}, aYj = [new x(L(532), function() {
		aZw(0)
	}), new x(L(422), function() {
		u.v(16)
	}), new x(L(469), function() {
		u.v(17)
	}), new x(L(533), function() {
		u.z.aXR()
	}, 0, 0, 1), new x(L(495), function() {
		u.v(3, 1)
	}), new x(L(534), function() {
		u.v(18)
	}), new x(L(485), function() {
		u.v(31)
	}), new x(L(535), function() {
		u.z.a8k(2)
	}), new x(L(501), function() {
		aZw(1)
	}), new x("🔒 " + L(493), function() {
		u.v(32)
	}), new x(L(536), function() {
		var a76, qF;
		(a76 = []).push(["Wiki", (qF = "https://territorial.io/") + "wiki/gold"]), a76.push(["Team Games", qF + "log/team"]), a76.push(["Battle Royale Games", qF + "log/br"]), a76.push(["1v1 Games", qF + "log/1v1"]), a76.push([
			"Zombie Games", qF + "log/zombies"
		]), a76.push(["Transactions", qF + "log/transactions"]), a76.push(["Changelog", qF + "changelog"]), 2 !== a1.id && a76.push(["Android App", bN.aGx]), 1 !== a1.id && a76.push(["iOS App", bN.a4u]), 0 === a1.id && a76.push([
			"Patreon", bN.aWV
		]), a76.push(["Terms", bN.aa2]), a76.push(["Privacy", bN.aa3]), u.v(4, 1, new w(L(536), bD.tO.a75(a76), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		})]))
	}), new x(L(537), function() {
		u.v(4, 1, new w(L(537), m.eC + "<br>" + b1.z.aVb("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(49),
				function() {
					u.v(1)
				})]))
	}), new x(L(538), function() {
		u.v(4, 1, new w(L(538), L(545) + "<br>" + L(546), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		}), new x(L(547), function() {
			a1.a2.a4o(), u.v(1)
		})]))
	}), new x("👁️ " + L(539), function() {
		a1.a2.a4p(), u.v(4, 1, new w(L(548), L(549) + " " + b1.z.aVb("/privacy"), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		})]))
	})], yi = [new x("⬅️ " + L(49), function() {
		u.z.aGd()
	})], 8 === ab.a4y() && (aYj.unshift(new x(L(408), function() {
		u.v(30)
	})), aYj.unshift(new x(L(542), function() {
		bg.aa1() && (u.y(), bh.a5w(), bi.e2 = !0)
	}, 0, 1)), aYj.unshift(new x(L(543), function() {
		aE.ht || aE.hu || !aN.t1(aE.fU) || (bB.iB.sE(), u.y(), aN.hv && aN.a5w())
	}, 0, 1)), aYj.unshift(new x(L(544), function() {
		aE.ht || aE.hu || !ax.ia(aE.fU) || (bY.a9N(2), bB.iB.iW(), u.y(), aN.hv && aN.a5w())
	}, 0, 1))), 1 === a1.id && 5 <= a1.eC && aYj.push(new x(L(540), function() {
		a1.a2.a4q()
	})), aV9 = new yh(L(541), yi), aYi = new tx(aYj, aV9.ym)
}

function aV2() {
	var aWX, aWY, aWZ, tJ;

	function aWa() {
		aWc(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aV8()[19] = null, u.a4x()
	}

	function aWc() {
		2 === aE.data.sResourcesType && bD.tV.a6V(aWZ.zC(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aWX.show(), this.resize()
	}, this.uN = function() {
		aWX.uN()
	}, this.resize = function() {
		aWX.resize(), aWY.resize()
	}, this.a5t = function(eu) {
		2 === eu && aWX.yn[0].te()
	}, aWX = new yh(L(403), [new x("⬅️ " + L(49), aWa)]), aWY = new tH(aWX.ym, (function(tJ) {
		var xD = new t3;
		xD.t6(L(360)), xD.tD(new yd({
			vG: [L(361), L(362), L(363)],
			value: aE.data.sResourcesType
		}, function(eT) {
			aWc(), 2 !== eT || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fh)), aE.data.sResourcesType = eT, u.v(28)
		})), tJ.push(xD)
	}(tJ = []), function(tJ) {
		var xD;
		1 === aE.data.sResourcesType && ((xD = new t3).t6("Value"), xD.tG(new uB({
			eT: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.iw(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), tJ.push(xD))
	}(tJ), function(tJ) {
		var xD;
		2 === aE.data.sResourcesType && ((xD = new t3).t6("Data"), (aWZ = new z4(0, 1, 0, 1)).zB(bD.pc.a89(aE.data.sResourcesData, 2)), xD.tG(aWZ), tJ.push(xD))
	}(tJ), tJ))
}

function aV0() {
	var aWX, aWY, aWZ, tJ;

	function aWa() {
		aWc(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aV8()[19] = null, u.a4x()
	}

	function aWc() {
		2 === aE.data.tIncomeType && bD.tV.a6V(aWZ.zC(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aWX.show(), this.resize()
	}, this.uN = function() {
		aWX.uN()
	}, this.resize = function() {
		aWX.resize(), aWY.resize()
	}, this.a5t = function(eu) {
		2 === eu && aWX.yn[0].te()
	}, aWX = new yh(L(401), [new x("⬅️ " + L(49), aWa)]), aWY = new tH(aWX.ym, (function(tJ) {
		var xD = new t3;
		xD.t6(L(360)), xD.tD(new yd({
			vG: [L(361), L(362), L(363)],
			value: aE.data.tIncomeType
		}, function(eT) {
			aWc(), 2 !== eT || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fh), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eT, u.v(26)
		})), tJ.push(xD)
	}(tJ = []), function(tJ) {
		var xD;
		1 === aE.data.tIncomeType && ((xD = new t3).t6("Value"), xD.tG(new uB({
			eT: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.iw(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), tJ.push(xD))
	}(tJ), function(tJ) {
		var xD;
		2 === aE.data.tIncomeType && ((xD = new t3).t6("Data"), (aWZ = new z4(0, 1, 0, 1)).zB(bD.pc.a89(aE.data.tIncomeData, 4)), xD.tG(aWZ), tJ.push(xD))
	}(tJ), tJ))
}

function aUs() {
	var aV9, aVA, tJ;
	this.show = function() {
		aV9.show(), this.resize()
	}, this.uN = function() {
		aV9.uN()
	}, this.resize = function() {
		aV9.resize(), aVA.resize()
	}, this.a5t = function(eu) {
		2 === eu && aV9.yn[0].te()
	}, aV9 = new yh(L(534), [new x("⬅️ " + L(49), function() {
		u.a4x()
	})]), aVA = new tH(aV9.ym, ((tJ = []).push(function() {
		function aVh() {
			aZe.button.textContent = L(232), aa6.e.readOnly = !1, aa7.e.readOnly = !1, aVg.ti(1), aVg.button.style.color = bE.qP
		}
		var xD = new t3,
			aa5 = (xD.tB(b1.z.aVb("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", xD.t6(L(550)), new uB({
				value: bm.buffer.data[105].value,
				eT: -1
			})),
			aa6 = (aa5.e.readOnly = !0, xD.tG(aa5), xD.t6(L(447), "0.8em"), new uB(bm.buffer.data[148], 0, void 0, function(e) {
				aVf(bm.buffer.data[149].value, e.target.value)
			})),
			aa7 = (xD.tG(aa6), xD.t6(L(451), "0.8em"), new uB(bm.buffer.data[149], 1, void 0, function(e) {
				aVf(e.target.value, bm.buffer.data[148].value)
			})),
			aZe = (xD.tG(aa7), new x(L(232), function(e) {
				return e.textContent === L(232) ? (e.textContent = L(170), aa6.e.readOnly = !0, aa7.e.readOnly = !0, aVg.ti(0), aVg.button.style.color = bE.rU, bm.rv.q1(149, aa7.e.value), aVf(bm.buffer.data[149].value, bm
					.buffer.data[148].value)) : aVh(), !0
			})),
			aVg = (xD.tG(new uZ([aZe.button])), new x(L(21), function(e) {
				var pY, gC;
				return aa6.e.readOnly && b1.z.eq(0) && (pY = bm.buffer.data[148].value, gC = parseInt(bm.buffer.data[149].value, 10), u.aUa.send(gC, pY, function() {
					bD.tO.ya(e), aVh(), b1.aVi.aVj({
						action: 0,
						pg: pY,
						value: gC
					})
				})), !0
			}, 1)),
			t8 = xD.t7(),
			aVf = (xD.t7(L(551)).style.fontWeight = "bold", function(gC, pY) {
				t8.innerHTML = u.z.aVk(gC, bm.buffer.data[105].value, pY)
			});
		return xD.tG(new uZ([aVg.button])), aVf(bm.buffer.data[149].value, bm.buffer.data[148].value), xD
	}()), tJ))
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
	var aDW, aa9, aaA, aaB, aa8 = !1;

	function aaC() {
		aa8 = !0, aDW = -1, aa9 = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aa9[aC] = !1;
		var a19 = Math.floor(1 + .02 * i.min);
		aaA = new Array(4), (aaB = new Array(4))[1] = aaB[3] = aaA[0] = aaA[2] = 0, aaB[0] = aaA[3] = -a19, aaA[1] = aaB[2] = a19
	}

	function aaD() {
		if (-1 !== aDW)
			if (0 !== aE.a3m && aI.oR()) {
				for (var aaE = !1, aC = 3; 0 <= aC; aC--) aa9[aC] && (aaE = !0, jP += aaA[aC], jQ += aaB[aC], ag.a5L(aaA[aC], aaB[aC]), aT.aDC());
				aaE ? bi.e2 = !0 : at.oH()
			} else at.oH()
	}
	this.a5r = function(eT) {
		0 !== aE.a3m && aI.oR() && (aa8 || aaC(), aa9[eT] = !0, -1 === aDW) && (aDW = setInterval(aaD, 20), aaD())
	}, this.a5u = function(eT) {
		if (0 !== aE.a3m && (aa8 || aaC(), aa9[eT] = !1, -1 !== aDW)) {
			for (var aaE = !1, aC = 3; 0 <= aC; aC--) aaE = aaE || aa9[aC];
			aaE || this.oH()
		}
	}, this.oH = function() {
		if (aa8 && -1 !== aDW) {
			for (var aC = 3; 0 <= aC; aC--) aa9[aC] = !1;
			clearInterval(aDW), aDW = -1
		}
	}
}

function cs() {
	this.z = new aaF, this.nQ = new aaG, this.rt = new aaH, this.aI1 = new aaI, this.er = new aaJ, this.aVi = new aaK, this.sX = new aaL, this.aXv = new aaM, this.aAa = new aaN, this.aaO = new aaP, this.aaQ = new aaR, this.aaS = new aaT, this.aaU =
		new aaV, this.dv = function() {
			this.z.dv()
		}
}

function aaF() {
	var aaX, aaY;
	this.aLV = 4, this.aaW = null, this.a56 = 0, this.fI = 0;

	function aah() {
		return 0 === aa.aLR ? m.eG ? 1 : 0 : aa.aLR - 1
	}

	function aak(oa, a53, aaj) {
		aaY[oa].aa8 = !0, aad(oa), aaX[oa] = new aan, aaX[oa].dv(oa, a53, aaj)
	}

	function aal(aC) {
		return aaY[aC].aa8 && aaX[aC].aal()
	}

	function aad(oa) {
		aaY[oa].ek = bi.ek, aaY[oa].aaa = !1
	}
	this.dv = function() {
		this.aaW = new Array(this.aLV), this.aaW[0] = "territorial.io", this.aaW[1] = "1.territorial.io", this.aaW[2] = "4.territorial.io", this.aaW[3] = "5.territorial.io", aaX = new Array(this.aLV), aaY = new Array(this.aLV);
		for (var aC = this.aLV - 1; 0 <= aC; aC--) aaY[aC] = {
			aa8: !1,
			ek: 0,
			aaa: !1
		};
		this.aLW(0, 0, 0)
	}, this.aab = function(aC) {
		return aaX[aC]
	}, this.ep = function() {
		for (var aC = this.aLV - 1; 0 <= aC; aC--) this.eq(aC) && bi.ek > aaY[aC].ek + 15e3 && (b1.rt.aac(aC, aaY[aC].aaa), aad(aC));
		!this.eq(0) && bi.ek > aaY[0].ek + 8e3 && (aaY[0].ek = bi.ek, this.aLW(0, 0, 0))
	}, this.aXs = function(id) {
		return this.aLW(0, id, 0) && this.aae(0)
	}, this.aaf = function(aag) {
		return aag ? aa.aLS : aah()
	}, this.a4E = function() {
		return aah() ? "game.territorial.io" : "territorial.io"
	}, this.aVb = function(aai) {
		aai = this.a4E() + aai;
		return "<a href='https://" + aai + "' target='_blank'>" + aai + "</a>"
	}, this.aLW = function(oa, a53, aag) {
		aag = this.aaf(aag);
		if (aaY[oa].aa8) {
			if (aaX[oa].aal()) return aaX[oa].aam(a53), aaX[oa].eq();
			aaX[oa].uN()
		}
		return aak(oa, a53, aag), !1
	}, this.aao = function(oa, a53) {
		console.log("Connection to Server " + oa), b1.er.aap(oa)
	}, this.aae = function(aC) {
		return this.eq(aC) && aaX[aC].aae()
	}, this.aaq = function(aC) {
		aaX[aC].aaq()
	}, this.eq = function(aC) {
		return aaY[aC].aa8 && aaX[aC].eq()
	}, this.send = function(oa, aD) {
		0 !== oa && aad(oa), aaX[oa].send(aD)
	}, __fx.customLobby.setSendFunction(this.send), this.a5c = function(oa) {
		8 === ab.a4y() && (aaY[oa].aaa = !0, b1.nQ.aar = !0)
	}, this.close = function(oa, aas) {
		aal(oa) && aaX[oa].close(aas)
	}, this.aM7 = function(oa, aas) {
		p.a5A(aas), aal(oa) && aaX[oa].close(aas)
	}, this.a5B = function(aas) {
		for (var aC = this.aLV - 1; 0 <= aC; aC--) this.close(aC, aas)
	}, this.aat = function(oa, aas) {
		for (var aC = this.aLV - 1; 0 <= aC; aC--) aC !== oa && this.close(aC, aas)
	}, this.a8i = function() {
		0 === this.a56 && (aE.lQ || aE.ht) || this.close(this.a56, 3246)
	}, this.aau = function(oa, e) {
		aaX[oa].uN(), p.a4v(oa, e.code)
	}
}

function aaG() {
	this.aar = !1, this.ep = function() {
		bi.l3() % 250 != 249 || aE.ht || aE.hu || (b1.er.aav(+(this.aar && ah.ni[aE.fU]), am.lc + bQ.z.mw), this.aar = !1)
	}
}

function aaN() {
	this.aM9 = function(oa, aD) {
		bK.dv(aD), 0 === bK.size ? b1.z.aM7(oa, 3205) : __fx.customLobby.isCustomMessage(aD) || ((0 === bK.sY(1) ? function(oa) {
			var ab0 = bK.sY(6);
			0 === ab0 ? function(oa) {
					if (0 === oa && 8 !== ab.a4y()) {
						u.z.aZJ();
						for (var abI = bK.sY(12), abJ = bK.sY(6), h = new Array(abI), aC = 0; aC < abI; aC++) h[aC] = bK.sY(abJ);
						aU.aDc(h)
					}
				}(oa) : 2 === ab0 ? b1.aaO.ab2(oa) : 3 === ab0 || 4 === ab0 ? ay.dv() : 5 === ab0 ? b1.aaQ.ab3() : 9 === ab0 ? b1.aaQ.ab4(oa) : 10 === ab0 ? b1.aaS.ab5() : 11 === ab0 ? b1.aaQ.ab6(oa) : 12 === ab0 ? b1.aaS.ab7() :
				13 === ab0 ? b1.aaU.ab8() : 14 === ab0 ? b1.aaU.ab9() : 15 === ab0 ? b1.aaQ.abA() : 16 === ab0 ? b1.aaO.abB(oa) : 17 === ab0 ? b1.aaO.abC(oa) : 19 === ab0 ? b1.aaO.abD(oa) : 20 === ab0 ? b1.aaQ.abE(oa) : 21 !== ab0 &&
				22 !== ab0 && (23 === ab0 ? b1.aaQ.abF(oa) : 24 === ab0 ? b1.aaO.abG(oa) : 25 === ab0 && b1.aaS.abH())
		} : function(oa) {
			if (8 !== ab.a4y() && !ay.aMB(oa, bK.aD)) return;
			if (oa !== b1.z.a56) b1.z.aM7(oa, 3244);
			else if (0 === bK.sY(1)) bi.a3w.abK(bK.aD);
			else {
				var aC, oa = bK.sY(2);
				if (0 === oa) {
					var s9, rt = bK.sY(9);
					0 !== ah.ni[rt] && 0 !== ah.ni[aE.fU] && (s9 = bK.sY(10), aO.s8(rt, aE.fU, s9), ag.sz(rt, 1, s9))
				} else if (1 === oa) ! function() {
					var rt = bK.sY(9);
					0 !== ah.ni[rt] && 0 !== ah.ni[aE.fU] && b6.aQb(0, [rt], !0) && aO.sQ(rt, 1)
				}();
				else if (2 === oa) ! function() {
					var rt = bK.sY(9),
						target = bK.sY(9);
					0 !== ah.ni[rt] && 0 !== ah.ni[target] && 0 !== ah.ni[aE.fU] && b6.aQb(1, [rt], !0) && (ag.sz(rt, 3, 96), ag.sz(target, 4, 96), aO.aAh(rt, target))
				}();
				else if (m.aA && !m.aB) {
					var fk = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fk = Math.min(bB.rp.sa.length, 540), aC = 0; aC < fk; aC++) bG.abQ(32, bB.rp.sa[aC]);
					b1.z.send(b1.z.a56, bG.aD)
				}
			}
		})(oa), bi.aaz())
	}
}

function aaT() {
	this.ab5 = function() {
		bm.z.zr(), bm.rv.q1(105, bI.fB.vZ(bI.fB.va(5))), bm.rv.q1(106, bI.fB.vZ(bI.fB.va(15))), bm.rv.q1(109, 0), bm.rv.q1(108, bm.buffer.data[109].value), bm.rv.q1(111, bm.buffer.data[109].value + 1), bm.rv.q1(107, 0), bm.rv.q1(110, "")
	}, this.abH = function() {
		var id = bK.sY(8),
			pY = bJ.a0N.a0c(7);
		0 === id && (bm.z.zw(pY, bm.buffer.data[106].value), new aSw(L(552, [pY])))
	}, this.ab7 = function() {
		var data;
		bK.size < bG.abR(29) ? b1.z.aM7(0, 3254) : ((data = {
			vW: bK.sY(30),
			a06: bK.sY(16),
			a07: bK.sY(30),
			a08: bK.sY(30),
			a09: bK.sY(30),
			a0A: bK.abS(32),
			username: bJ.a0N.a0c(5),
			a0B: bJ.a0N.a0c(3),
			a0C: bJ.a0N.a0c(3),
			a0D: bK.abS(32),
			a0E: bK.abS(32),
			a0F: bK.sY(30),
			a0G: bK.abS(32),
			a0H: bK.abS(32),
			a0I: bK.abS(32),
			a0J: bK.abS(32),
			aW0: bK.abS(32),
			aW1: bK.abS(30),
			aWN: bK.abS(32),
			aWO: bJ.a0N.a0c(3),
			aWH: bK.abS(2),
			aWJ: bK.abS(10),
			aWF: bJ.a0N.a0c(8),
			aWI: bK.abS(5),
			aVd: bK.sY(30),
			aVs: bK.sY(30),
			a4I: bK.abS(32),
			aW5: bK.sY(3),
			aW4: bK.sY(8),
			aVy: bK.sY(30),
			aVz: bK.abS(32),
			aW3: bK.sY(1),
			aWB: bJ.a0N.a0c(6),
			aW6: bK.sY(1),
			aW7: bK.sY(1),
			aVt: bK.sY(16),
			aVu: bK.sY(5),
			aVv: bK.sY(1),
			abT: bK.sY(1),
			aVw: bK.sY(23),
			aVn: bK.sY(30),
			aWP: bK.sY(1),
			aWQ: bK.sY(1)
		}).aWP && (data.aWR = bK.abS(32), data.aWS = bK.sY(30), data.aWT = bK.sY(30), data.aWU = bK.sY(1)), data.abT && (data.aVw = -data.aVw), 8 === u.vX && (25 === u.a52().aXr ? (data.aVB = !0, u.z.aUp = data, u.a52().aGc(25, !1)) : (
			data.aVB = !1, bm.rv.q1(160, +(data.aWP && data.aWU)), data.pg = bm.buffer.data[105].value, u.z.aUm = data, bm.rv.a05(data), u.a52().aGc(16, !0))))
	}
}

function aaV() {
	this.ab8 = function() {
		var aC;
		if (bK.size < bG.abR(23)) b1.z.aM7(0, 3259);
		else {
			var vo = bK.sY(6),
				fk = bK.sY(10),
				data = [];
			if (9 === vo || 10 === vo || 11 === vo || 13 === vo) {
				for (aC = 0; aC < fk; aC++) data.push([bK.sY(30), bJ.a0N.a0c(5), bK.abS(32), 0, bK.sY(30)]);
				8 === u.vX && u.a52().aGc(21, !0, {
					vo: vo,
					data: data
				})
			} else if (12 === vo) {
				for (aC = 0; aC < fk; aC++) data.push([bK.sY(20), bK.sY(30), bK.sY(30), bK.abS(32), bK.sY(30), bJ.a0N.a0c(5), bJ.a0N.a0c(5)]);
				8 === u.vX && u.a52().aGc(21, !0, {
					vo: vo,
					data: data
				})
			} else {
				var ik = bK.sY(16);
				if (bK.abU(39 + 16 * ik + fk * (0 === vo ? 111 : 1 === vo ? 101 : 2 === vo || 3 === vo ? 127 : 212))) {
					if (0 === vo)
						for (aC = 0; aC < fk; aC++) data.push([bK.sY(30), bJ.a0L.a0P(bK.sY(5)), bK.sY(16), bK.sY(30), bK.sY(30)]);
					else if (1 === vo)
						for (aC = 0; aC < fk; aC++) data.push([bK.sY(16), bJ.a0L.a0P(bK.sY(3)), bK.sY(16), bJ.a0L.a0P(bK.sY(5)), bK.sY(31), bK.sY(30)]);
					else if (2 === vo || 3 === vo)
						for (aC = 0; aC < fk; aC++) data.push([bK.sY(30), bJ.a0L.a0P(bK.sY(5)), bK.abS(32), bK.sY(30), bK.sY(30)]);
					else
						for (aC = 0; aC < fk; aC++) data.push([bK.sY(20), bK.sY(30), bK.sY(30), bK.sY(30), bK.sY(30), bK.abS(32), bK.sY(30), bJ.a0L.a0P(bK.sY(5)), bJ.a0L.a0P(bK.sY(5))]);
					8 === u.vX && u.a52().aGc(21, !0, {
						vo: vo,
						data: data
					})
				} else b1.z.aM7(0, 3260)
			}
		}
	}, this.ab9 = function() {
		if (bK.size < bG.abR(29)) b1.z.aM7(0, 3265);
		else {
			var abV = bK.sY(4),
				abW = bK.sY(7),
				abX = bK.sY(11);
			if (bK.abU(29 + 16 * abW + 16 * abX + 11 * abV)) {
				for (var data = [], aC = 0; aC < abV; aC++) {
					for (var a4Y = bJ.a0L.a0P(bK.sY(3)), abY = bK.sY(8), aX1 = [], g3 = 0; g3 < abY; g3++) aX1.push(bK.sY(16));
					data.push({
						name: "[" + a4Y + "]",
						aX1: aX1
					})
				}
				8 === u.vX && u.a52().aGc(23, !0, data)
			} else b1.z.aM7(0, 3266)
		}
	}
}

function aaP() {
	function abc() {
		var id = bK.sY(3);
		return 0 === id ? {
			id: id,
			pg: bK.sY(30),
			ph: abd(),
			s: bJ.a0N.a0c(8)
		} : 1 === id ? {
			id: id,
			pg: bK.sY(30),
			ph: abd(),
			aIY: bK.sY(3),
			value: bK.sY(30),
			target: bK.sY(30),
			pi: abd()
		} : 2 === id ? {
			id: id,
			pg: bK.sY(30),
			ph: abd(),
			aIY: bK.sY(3)
		} : 3 === id ? {
			id: id,
			pg: bK.sY(30),
			ph: abd(),
			aIY: bK.sY(3),
			value: bK.sY(4),
			target: bK.sY(30),
			pi: abd()
		} : 4 === id ? {
			id: id,
			pg: bK.sY(30),
			ph: abd(),
			aIY: bK.sY(3),
			target: bK.sY(30),
			pi: abd(),
			aIa: bK.sY(1)
		} : 5 === id ? {
			id: id,
			aIY: bK.sY(6)
		} : 6 === id ? {
			id: id,
			value: bK.sY(17)
		} : null
	}

	function abd() {
		return bK.sY(1) ? bJ.a0N.a0c(5) : null
	}
	this.ab2 = function(oa) {
		if (oa !== b1.z.fI) b1.z.close(oa, 3239);
		else if (6 !== ab.a4y()) b1.z.close(oa, 3271);
		else {
			bq.dv(), bq.z.wK = bK.sY(10), bq.tJ.aHv();
			for (var playerCount = bK.sY(16), g3 = 0; g3 < playerCount; g3++) bq.po.aHL(bK.sY(30), bJ.a0N.a0c(5), bK.sY(4), bK.sY(30), bK.sY(7), bK.sY(16), bK.sY(18), bK.sY(11), bK.sY(12), bK.sY(6), bK.sY(13), bK.sY(1));
			u.v(29), bq.z.aJ3(!0)
		}
	}, this.abB = function(oa) {
		if (oa !== b1.z.fI) b1.z.close(oa, 3239);
		else if (bq.fH) {
			bq.z.aJ2[0] = bK.sY(20), bq.z.aJ2[1] = bK.sY(20);
			for (var abZ = bK.sY(20), g3 = 0; g3 < abZ; g3++) {
				var id = bK.sY(3);
				0 === id ? bq.po.aHL(bK.sY(30), bJ.a0N.a0c(5), 0, 1234566, 127, 0, bK.sY(18), 0, bK.sY(12), 0, 0, 0) : 1 === id ? bq.po.aHf(bK.sY(16), bK.sY(16), bK.sY(13), bK.sY(1)) : 2 === id ? bq.po.aHb(bK.sY(16), bJ.a0N.a0c(5)) : 3 === id ?
					bq.po.aHd(bK.sY(16)) : 4 === id ? bq.po.aHU(bK.sY(16), bK.sY(4), bK.sY(30), bK.sY(7), bK.sY(16), bK.sY(11), bK.sY(18)) : 5 === id ? bq.po.aHW(bK.sY(16), bK.sY(1)) : 6 === id && bq.po.aHV(bK.sY(16), bK.sY(6))
			}
			bq.z.wK = bK.sY(10);
			for (var aba = bK.sY(10), aC = 0; aC < aba; aC++) {
				var xi = bK.sY(13),
					aZE = bK.sY(10),
					aHj = bK.sY(10),
					aH3 = bq.z.aH3;
				if (aH3.aHj = aHj, aH3.a56 = bK.sY(10), aH3.aIN = bK.sY(10), aH3.fQ = bK.sY(6), aH3.mapSeed = bK.sY(14), aH3.wy = bK.sY(4), aH3.xP = bK.sY(1), aH3.spawningSeed = bK.sY(14), aH3.a4F = bK.sY(30) - 1, aH3.aHk = null, 8 === aH3.wy) {
					aH3.aHk = new Array(aHj);
					for (g3 = 0; g3 < aHj; g3++) aH3.aHk[g3] = bK.sY(9)
				}
				xi = bq.po.aHg(xi);
				if (bq.aH3.e3(xi, aZE, aHj)) return;
				bq.po.aHm(xi, aZE, aHj, aH3.aHk)
			}
			var abb = bK.sY(13);
			abb && bq.po.aHp(abb), bq.tJ.aHv(), bq.z.aIB()
		} else b1.z.close(oa, 3251)
	}, this.abG = function(oa) {
		oa === b1.z.fI && bq.fH && bq.tJ.aI4(bK.sY(13), bK.sY(1))
	}, this.abC = function(oa) {
		if (oa !== b1.z.fI) b1.z.close(oa, 3272);
		else if (bq.fH) {
			for (var pu = bq.z.pu, xx = (bq.z.pv = bK.sY(20), bK.sY(6)), aC = 0; aC < xx; aC++) {
				var aKt = abc();
				bq.q7.aKs(aKt), bq.q7.aKy(aKt), pu.push(aKt)
			}
			pu.length > bq.z.q3 && pu.splice(0, pu.length - bq.z.q3), bq.z.aJA()
		} else b1.z.close(oa, 3273)
	}, this.abD = function(oa) {
		var aKt;
		oa !== b1.z.fI ? b1.z.close(oa, 3276) : bq.fH ? (aKt = abc(), bq.q7.aKs(aKt), bq.message.aHx(aKt)) : b1.z.close(oa, 3277)
	}
}

function aaR() {
	this.ab3 = function() {
		for (var id = bK.sY(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.sY(8), bK.sY(8), bK.sY(8)]);
		var ew = bJ.a0N.a0c(8);
		bX.ed.et({
			id: id,
			colors: colors,
			ew: ew
		})
	}, this.abE = function(oa) {
		var abe = bK.sY(3),
			fn = bK.sY(5),
			fn = bl.abf.abg(fn, bK.sY(30), bK.sY(30), bK.sY(30));
		b1.er.abh(oa, fn, abe, 0)
	}, this.ab4 = function(oa) {
		this.abE(oa), bm.rv.q1(183, bI.fB.vZ(bI.fB.va(15))), 0 === oa && 0 === bm.buffer.data[105].value.length ? b1.er.es(0) : b1.aVi.abi(oa), 4 === b1.z.aab(oa).abj() ? 6 === ab.a4y() && b1.aI1.aLX(oa) : 5 !== b1.z.aab(oa).abj() || 8 !== ab
			.a4y() && 10 !== ab.a4y() || b1.rt.aM2()
	}, this.ab6 = function(oa) {
		var id = bK.sY(6);
		1 === id ? (bm.rv.q1(160, bK.sY(30)), b1.z.aaq(oa), aU.aDY || b1.er.es(1), bA.aGY(), 8 === u.vX && u.a52().aY4()) : 21 === id ? 8 === u.vX && u.a52().aGc(17) : 22 === id && (bm.rv.q1(106, bm.buffer.data[110].value), bm.rv.q1(110, ""),
			8 === u.vX) && u.a52().aGc(15)
	}, this.abA = function() {
		var fk = bK.sY(16),
			abk = bK.sY(16);
		if (bK.abU(55 + 10 * fk + 16 * abk)) {
			for (var h = [], aC = 0; aC < fk; aC++) h.push(bJ.a0L.a0P(bK.sY(10)));
			bA.aGb(h)
		} else b1.z.aM7(0, 3270)
	}, this.abF = function(oa) {
		for (var abe = bK.sY(3), fn = bK.sY(5), abe = {
				abe: abe,
				tv: bl.abf.abg(fn, bK.sY(30), bK.sY(30), bK.sY(30))
			}, fn = bK.abS(32), abl = [], aC = 0; aC < 17; aC++) abl.push(new Uint8Array(bK.sY(16)));
		for (aC = 0; aC < 17; aC++)
			for (var h = abl[aC], fk = h.length, ie = 0; ie < fk; ie++) h[ie] = bK.abS(8);
		bx.show(abl, fn, oa, abe)
	}
}

function aaH() {
	this.aac = function(oa, aaa) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, aaa ? 1 : 0), bG.a9(3, 0 === aE.a3m ? bq.fH ? 6 : 0 : aE.ht ? 1 : aE.lQ ? 7 : aE.lO < 7 ? 2 : 8 === aE.lO ? 4 : 9 === aE.lO ? 5 : 3), b1.z.send(oa, bG.aD)
	}, this.aM2 = function() {
		bG.a8(59), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.fI), bG.a9(10, ay.aIN), bG.a9(10, ay.aLp), bG.a9(10, m.eI), bG.a9(14, m.e7), b1.z.send(b1.z.a56, bG.aD)
	}, this.ru = function(fW) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fW), b1.z.send(b1.z.a56, bG.aD)
	}, this.rw = function(jO, kF) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, jO), bG.a9(10, kF), b1.z.send(b1.z.a56, bG.aD)
	}, this.s0 = function(jO, ry) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, jO), bG.a9(9, ry), b1.z.send(b1.z.a56, bG.aD)
	}, this.s2 = function(jO, s1) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, jO), bG.a9(27, s1), b1.z.send(b1.z.a56, bG.aD)
	}, this.s4 = function(jO, o6) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, jO), bG.a9(16, o6), b1.z.send(b1.z.a56, bG.aD)
	}, this.s7 = function(kF) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, kF), b1.z.send(b1.z.a56, bG.aD)
	}, this.sB = function(eT) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eT), b1.z.send(b1.z.a56, bG.aD)
	}, this.sD = function(sC) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, sC), b1.z.send(b1.z.a56, bG.aD)
	}, this.sF = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a56, bG.aD)
	}, this.sG = function(jO, fW, kF) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, jO), bG.a9(10, kF), bG.a9(22, fW), b1.z.send(b1.z.a56, bG.aD)
	}, this.sO = function(abm, abn) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, abn), bG.a9(10, abm), b1.z.send(b1.z.a56, bG.aD)
	}, this.sR = function(aAa) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, aAa), b1.z.send(b1.z.a56, bG.aD)
	}, this.sV = function(abo, target) {
		var aC, fk = abo.length;
		for (bG.a8(14 + 9 * fk), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fk; aC++) bG.a9(9, abo[aC]);
		b1.z.send(b1.z.a56, bG.aD)
	}
}

function aaK() {
	this.abp = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.er.abq(), b1.z.send(0, bG.aD)
	}, this.abi = function(oa) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.fB.a0b(bm.buffer.data[105].value, 5), bJ.fB.a0b(bm.buffer.data[106].value, 15), b1.z.send(oa, bG.aD)
	}, this.aY5 = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.fB.a0b(bm.buffer.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aWD = function(a7l) {
		var fk = a7l.pY.length;
		bG.a8(21 + 16 * fk), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a7l.action), bG.a9(8, fk), bI.a0L.a0a(a7l.pY), b1.z.send(0, bG.aD)
	}, this.aZf = function(a0A, colors, abt, ew) {
		bH.dv(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(a0A, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var g3 = 0; g3 < 3; g3++) bH.a9(8, colors[aC][g3]);
		a0A = bA.data.aGf(abt.trim());
		bH.a9(8, -1 === a0A ? 255 : a0A), bI.a0N.a3G(ew.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.abu())
	}, this.aVo = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.fB.a0b(data.pg, 5), b1.z.send(0, bG.aD)
	}, this.aVj = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.fB.a0b(data.pg, 5), bG.abQ(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aaL() {
	this.sW = function() {
		for (var fk = aE.l6, a3b = bU.result.a3b, m1 = a3b.length, a4R = (bG.a8(17 + 16 * fk + 33 * m1), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, m1), bG.a9(1, +(2 === aE.a3j)), bG.a9(1, aE.a45 % 2), ah.a4R), aC = 0; aC < fk; aC++) bG.a9(16, a4R[
		aC]);
		for (var hY = ah.hY, aC = 0; aC < m1; aC++) {
			var hI = a3b[aC];
			bG.a9(9, hI), bG.a9(24, hY[hI])
		}
		b1.z.send(b1.z.a56, bG.aD)
	}
}

function aaM() {
	this.aXw = function(vo, vp, vq) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, vo), bG.a9(1, +(vp < 0)), bG.a9(1, +(vq < 0)), bG.a9(30, Math.abs(vp)), bG.a9(30, Math.abs(vq)), b1.z.send(0, bG.aD)
	}, this.aXx = function(vo, aXy, aXz) {
		bG.a8(18 + 16 * aXy.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, vo), b1.er.abv(aXy), bG.a9(30, aXz), b1.z.send(0, bG.aD)
	}, this.aY2 = function(vo, aXy, aXz) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, vo), bJ.fB.a0b(aXy, 5), bG.a9(30, aXz), b1.z.send(0, bG.aD)
	}, this.aY0 = function(aX0, a4X) {
		for (var fk = a4X.length, ik = 0, aC = 0; aC < fk; aC++) ik += a4X[aC].length;
		for (bG.a8(21 + 3 * fk + 16 * ik), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aX0), bG.a9(4, fk), bG.a9(7, ik), aC = 0; aC < fk; aC++) bG.a9(3, a4X[aC].length), bI.a0L.a0a(a4X[aC]);
		b1.z.send(0, bG.aD)
	}, this.aY1 = function(aX0, vp, vq) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aX0), bG.a9(1, +(vp < 0)), bG.a9(1, +(vq < 0)), bG.a9(20, Math.abs(vp)), bG.a9(20, Math.abs(vq)), b1.z.send(0, bG.aD)
	}
}

function aaI() {
	this.aLX = function(oa) {
		var username = bm.buffer.data[122].value.slice(0, 20),
			username = (bG.a8(22 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.eI), b1.er.abv(username), bD.color.a6l(bm.z.zz()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.fI = oa, b1.z.send(oa, bG.aD)
	}, this.aI2 = function(abw, a7l) {
		bH.dv(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, abw), 2 === abw ? bH.a9(30, a7l) : 4 === abw ? (bH.a9(13, a7l.xi), bH.a9(1, a7l.xl)) : 3 === abw ? bI.a0N.a3G(a7l, 8, bH) : 5 === abw ? (bH.a9(3, a7l.id), bH.a9(3, a7l.value), bH.a9(30, a7l
			.pg)) : 6 === abw && (bH.a9(2, a7l.wy), bH.a9(30, a7l.pg)), b1.z.send(b1.z.fI, bH.abu())
	}
}

function aaJ() {
	this.aap = function(oa) {
		var ac3;
		bG.a8(55 + bl.abx.sY()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.e7), bG.a9(4, a1.id), bG.a9(7, a1.eC), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), ac3 = bA.aGe(), bG.a9(8, ac3[0]), bG.a9(8, ac3[1]), bl.abx
		.a3G(), b1.z.send(oa, bG.aD)
	}, this.abh = function(oa, tv, abe, abz) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, abe), bG.a9(30, tv), bG.a9(30, abz), b1.z.send(oa, bG.aD)
	}, this.fJ = function(fE) {
		bH.dv(), bH.a9(1, 0), bH.a9(6, 6), bI.a0N.a3G(fE, 16, bH), b1.z.send(b1.z.fI, bH.abu())
	}, this.es = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.yI = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aGa = function(id, pY) {
		var fk = Math.min(pY.length, 63);
		bG.a8(19 + 16 * fk), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fk), bI.a0L.a0a(pY), b1.z.send(0, bG.aD)
	}, this.ac0 = function(aZI, q5) {
		bG.a8(7 + 26 * q5.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < q5.length; aC++) bG.a9(16, q5[aC][0]), bG.a9(10, q5[aC][1]);
		b1.z.send(aZI, bG.aD)
	}, this.aav = function(ac1, ac2) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, ac1), bG.a9(12, ac2), b1.z.send(b1.z.a56, bG.aD)
	}, this.abv = function(username) {
		bG.a9(5, username.length), bI.a0L.a0a(username)
	}, this.pJ = function(pK, or, oa, pow) {
		bG.a8(88), bG.a9(1, 0), bG.a9(6, 8), bG.a9(3, pow.abe), bG.a9(30, pow.tv), bG.abQ(32, or), bG.a9(16, pK), b1.z.send(oa, bG.aD)
	}
}

function aan() {
	var ac4, ac5, b, ac6 = ["wss://", "/s50/", "/s51/", "/s52/"],
		ac7 = 0;

	function aao() {
		b1.z.aao(ac4, ac5)
	}

	function acA(e) {
		b1.aAa.aM9(ac4, new Uint8Array(e.data))
	}

	function acB() {}

	function aau(e) {
		b1.z.aau(ac4, e)
	}
	this.dv = function(eT, a53, aaj) {
		ac4 = eT, ac5 = a53,
			function(aaj) {
				aaj = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : m.e8 ? "ws://localhost:" + (7130 + ac4) + "/" : aaj ? ac6[0] + "game.territorial.io/x0" + ac4 + "/" : ac6[0] + b1.z.aaW[ac4] + ac6[1 + m.e6];
				(b = new WebSocket(aaj)).binaryType = "arraybuffer", b.onopen = aao, b.onmessage = acA, b.onclose = aau, b.onerror = acB
			}(aaj)
	}, this.ac9 = function() {
		return b.readyState === b.CONNECTING
	}, this.eq = function() {
		return b.readyState === b.OPEN
	}, this.aae = function() {
		return ac7
	}, this.aaq = function() {
		ac7 = 1
	}, this.aal = function() {
		return this.ac9() || this.eq()
	}, this.aam = function(a53) {
		ac5 = a53
	}, this.abj = function() {
		return ac5
	}, this.send = function(aD) {
		this.eq() && b.send(aD)
	}, this.close = function(aas) {
		this.aal() && (this.uN(), b.close(aas))
	}, this.uN = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dV() {
	var gap, acC = !1,
		wz = 0,
		j = 0,
		vc = 0,
		canvas = null,
		p6 = null,
		a6K = null;

	function acG() {
		for (var aC = aE.a0y; 0 <= aC; aC--) a6K[aC] = 0;
		for (aC = am.lc - 1; 0 <= aC; aC--) a6K[bj.fi[am.lh[aC]]] += ah.hY[am.lh[aC]];
		acC = !0
	}

	function acE() {
		for (var acL, acJ = 0, fk = 0, eu = Math.floor(j / 2), eS = Math.floor(vc / 2), acK = 1.5 * Math.PI, aC = aE.a0y; 0 <= aC; aC--) fk += a6K[aC], 0 === a6K[aC] && acJ++;
		if (acC = !1, p6.clearRect(0, 0, j, j), 0 < fk)
			if (acJ === aE.a0y) {
				for (aC = aE.a0y; 0 <= aC; aC--)
					if (0 < a6K[aC]) {
						! function(aC, eu, eS) {
							p6.fillStyle = bj.acP[bj.lT[aC]], p6.beginPath(), p6.arc(eu, eu, eS, 0, 2 * Math.PI), p6.fill()
						}(aC, eu, eS);
						break
					}!
				function(eu) {
					var fontSize = eu / 3;
					p6.font = bD.tO.ux(1, fontSize), p6.fillStyle = bE.qP, p6.fillText("100%", eu, eu + .1 * fontSize)
				}(eu)
			} else {
				for (aC = 0; aC <= aE.a0y; aC++) 0 < a6K[aC] && (acL = acK + 2 * Math.PI * a6K[aC] / fk, acO(p6, bj.acP[bj.lT[aC]], eu, eS, acK, acL), function(eu, eS, acK, acL) {
					var gC = (acL - acK) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eS * Math.min(gC, .37);
					fontSize < 8 || (acK = (acK + acL) / 2, acL = (__fx.settings.detailedTeamPercentage ? (100 * gC).toFixed(2) : Math.floor(100 * gC + .5)) + "%", eS *= .525 - Math.max(.6 * (gC - .7), 0), p6.font = bD.tO.ux(1, fontSize), p6
						.fillStyle = bE.qP, p6.fillText(acL, eu + Math.cos(acK) * eS, eu + Math.cos(acK + 1.5 * Math.PI) * eS))
				}(eu, eS, acK, acL), 0 !== aC && acR(p6, eu, eS, acK), acK = acL);
				acR(p6, eu, eS, 1.5 * Math.PI)
			} acS(p6, eu, eS)
	}

	function acO(iq, color, eu, eS, acK, acL) {
		iq.fillStyle = color, iq.beginPath(), iq.arc(eu, eu, eS, acK, acL), iq.lineTo(eu, eu), iq.fill()
	}

	function acR(iq, eu, eS, acT) {
		iq.beginPath(), iq.moveTo(eu, eu), iq.lineTo(eu + Math.cos(acT) * eS, eu + Math.cos(acT + 1.5 * Math.PI) * eS), iq.stroke()
	}

	function acS(iq, eu, eS) {
		iq.beginPath(), iq.arc(eu, eu, eS, 0, 2 * Math.PI), iq.stroke()
	}
	this.dv = function() {
		if (aE.ih) {
			wz = 0, a6K = new Uint32Array(aE.a0y + 1);
			for (var aC = aE.a0y; 0 <= aC; aC--) a6K[aC] = 0;
			for (aC = am.lc - 1; 0 <= aC; aC--) a6K[bj.fi[am.lh[aC]]] += 1;
			this.resize()
		} else a6K = p6 = canvas = null
	}, this.aC7 = function() {
		return j
	}, this.resize = function() {
		aE.ih && (j = Math.floor(.95 * (a1.a2.ix() && !aE.oC ? .18 * i.min : .13 * i.iy)), j = (j *= 1 + (.5 + .2 * a1.a2.ix()) * aE.oC) + j % 2, gap = Math.max(1, .015 * j), vc = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (p6 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, p6.strokeStyle = bE.qP, bD.tO.textAlign(p6, 1), bD.tO.textBaseline(p6, 1), acE())
	}, this.ld = function(acF) {
		acF && acG();
		var el, acF = this.lf();
		return bj.lT[acF] || (acF = function() {
			for (var le = -1, aC = aE.a0y; 1 <= aC; aC--)(-1 === le || a6K[aC] > a6K[le]) && (le = aC);
			return le
		}(), el = ah.hY[mh[0]], -1 !== acF && a6K[acF] > el) ? a6K[acF] : el
	}, this.a4j = function() {
		return wz = 31, this.ep(), this.lf()
	}, this.lf = function() {
		for (var le = 0, aC = aE.a0y; 0 < aC; aC--) a6K[aC] > a6K[le] && (le = aC);
		return le
	}, this.l7 = function(acI) {
		for (var hD = 0, lh = am.lh, fi = bj.fi, fk = am.lc, gO = bR.gO, aC = 0; aC < fk; aC++) {
			var hI = lh[aC];
			fi[hI] === acI && (gO[hD++] = hI)
		}
		bR.gF[0] = hD
	}, this.lg = function(acI) {
		for (var hD = 0, lh = am.lh, fi = bj.fi, fk = am.lc, gO = bR.gO, aC = 0; aC < fk; aC++) {
			var hI = lh[aC];
			fi[hI] !== acI && (gO[hD++] = hI)
		}
		bR.gF[0] = hD
	}, this.a7I = function() {
		for (var hD = 0, aC = aE.a0y; 0 <= aC; aC--) hD += 0 < a6K[aC];
		return hD
	}, this.ep = function() {
		aE.ih && 32 <= ++wz && (wz = 0, acG())
	}, this.nV = function() {
		aE.ih && acC && acE()
	}, this.xT = function(iq, hD, size) {
		var eu = size >> 1,
			eS = Math.floor(.4 * size),
			acK = 1.5 * Math.PI;
		iq.clearRect(0, 0, size, size), iq.lineWidth = .042 * size, iq.strokeStyle = bE.qP;
		for (var aC = 0; aC < hD; aC++) {
			var acL = acK + 2 * Math.PI / hD;
			acO(iq, bj.acP[aC + 1], eu, eS, acK, acL), 0 !== aC && acR(iq, eu, eS, acK), acK = acL
		}
		acR(iq, eu, eS, 1.5 * Math.PI), acS(iq, eu, eS)
	}, this.yv = function() {
		aE.ih && (aE.oC ? yw.drawImage(canvas, bf.gap, bf.gap) : yw.drawImage(canvas, bf.gap, aC6 + 2 * bf.gap))
	}
}

function dm() {
	function acZ(fr, fk, ft, a3Q, aDN, gA) {
		if (!(ft < 1 || aDN < ft))
			for (var aC = 0; aC <= fk; aC++) {
				var fO = bP.jS(fr, ft);
				if (a3Q(fO)) return fO >> 2;
				fr += gA
			}
		return -1
	}

	function acd(ft, fk, fr, a3Q, acX, gA) {
		if (!(fr < 1 || acX < fr)) {
			fk = Math.max(fk, 0);
			for (var aC = 0; aC <= fk; aC++) {
				var fO = bP.jS(fr, ft);
				if (a3Q(fO)) return fO >> 2;
				ft += gA
			}
		}
		return -1
	}

	function ach(jF, jG, acU) {
		return -1 !== jG && (-1 === jF || bP.jH(jG, acU) < bP.jH(jF, acU)) ? jG : jF
	}
	this.iA = function(acU) {
		return this.a3q(acU, function(fO) {
			return ad.ff(fO)
		})
	}, this.iG = function(acU) {
		return this.a3q(acU, function(fO) {
			return ad.aMr(fO, aE.fU)
		})
	}, this.a3q = function(acU, a3Q) {
		return function(acU, acV, a3Q) {
			for (var i0 = bP.fs(acU), i2 = bP.fu(acU), acX = bV.fv - 2, aDN = bV.fw - 2, acY = -1, fn = 0; fn < acV; fn++) {
				var aDM = Math.max(i0 - fn, 1),
					aRd = Math.max(i2 - fn, 1),
					a1Z = Math.min(i0 + fn, acX),
					a1Y = Math.min(i2 + fn, aDN),
					jF = acZ(i0, a1Z - i0, i2 - fn, a3Q, aDN, 1),
					jG = acZ(i0 - 1, i0 - aDM - 1, i2 - fn, a3Q, aDN, -1),
					a1Z = acZ(i0, a1Z - i0, i2 + fn, a3Q, aDN, 1),
					aDM = acZ(i0 - 1, i0 - aDM - 1, i2 + fn, a3Q, aDN, -1),
					acc = acd(i2, a1Y - i2 - 1, i0 - fn, a3Q, acX, 1),
					ace = acd(i2 - 1, i2 - aRd - 2, i0 - fn, a3Q, acX, -1),
					a1Y = acd(i2, a1Y - i2 - 1, i0 + fn, a3Q, acX, 1),
					aRd = acd(i2 - 1, i2 - aRd - 2, i0 + fn, a3Q, acX, -1);
				if (acY = ach(acY, jF, acU), acY = ach(acY, jG, acU), acY = ach(acY, a1Z, acU), acY = ach(acY, aDM, acU), acY = ach(acY, acc, acU), acY = ach(acY, ace, acU), acY = ach(acY, a1Y, acU), 0 <= (acY = ach(acY, aRd, acU)) && fn *
					fn >= bP.jH(acY, acU)) return acY
			}
			return -1
		}(acU, bP.iv(), a3Q)
	}
}

function aSw(pY) {
	var k, aci = new acj,
		um = document.createElement("div");

	function acm() {
		um.style.opacity = "0", setTimeout(aM3, aci.acl)
	}

	function aM3() {
		u.removeChild(document.body, um), aci = um = null
	}
	k = bD.tO.uP(aci.ack, .5), um.textContent = pY, um.style.position = "fixed", um.style.zIndex = aci.zIndex, um.style.left = "50%", um.style.top = .5 * k + "px", um.style.transform = "translateX(-50%)", um.style.maxWidth = "90%", um.style
		.boxSizing = "border-box", um.style.padding = .3 * k + "px " + .6 * k + "px", um.style.backgroundColor = bE.qL, um.style.color = bE.qP, um.style.font = bD.tO.ux(0, .6 * k), um.style.textAlign = "center", um.style.userSelect = "none", um.style
		.pointerEvents = "none", um.style.transition = "opacity " + aci.acl + "ms", bD.tO.tX(um), document.body.appendChild(um), setTimeout(acm, aci.acn)
}

function acj() {
	this.acn = 5e3, this.acl = 600, this.zIndex = "1000", this.ack = .03
}

function dE() {
	function aco(key, size) {
		var aZh;
		return "undefined" == typeof URLSearchParams || (aZh = window.location.search, "string" != typeof(aZh = new URLSearchParams(aZh).get(key))) || aZh.length < 1 ? null : bJ.fB.a0U(aZh, size)
	}
	this.e3 = function() {
		if (0 !== a1.id) return !1;
		var a4F = aco("r", 6);
		if (! function() {
				var value = aco("account", 5);
				if (!value && !(value = aco("a", 5))) return void bL.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (bL.clear(), u.v(8, u.vX, new vY(1e3, {
					action: 0,
					pg: value,
					vW: 0
				})), !0) : (bL.clear(), !1)
			}()) {
			if (!this.clear()) return !1;
			if (!a4F) return !1;
			this.aWW("r", a4F), u.v(3, 0, L(553)), bC.acq(a4F)
		}
		return !0
	}, this.clear = function() {
		var a4t = new URL(window.location.href);
		a4t.search = "";
		try {
			return history.replaceState(null, "", a4t.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aWW = function(key, value) {
		if (0 === a1.id) try {
			var a4t = new URL(window.location.href),
				hI = a4t.searchParams;
			hI.set(key, value), a4t.search = hI.toString(), history.replaceState(null, "", a4t.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ct() {
	var acs, h;
	this.dv = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.gB(32768 * aC, 100);
		this.a8X(0)
	}, this.value = function(hI) {
		return h[hI]
	}, this.aRD = function() {
		return bO.gB(acs - 1, 2)
	}, this.a8X = function(aR6) {
		acs = 2 * aR6 % 32768 + 1
	}, this.random = function() {
		return acs = 167 * acs % 32768
	}, this.kN = function(nd) {
		return bO.gB(nd * this.random(), 32768)
	}, this.ky = function(hI) {
		return 0 !== hI && this.random() < this.value(hI)
	}, this.jj = function(g3, g4) {
		return g3 + this.kN(g4 - g3)
	}
}

function dA() {
	this.sk = new act, this.a8h = new acu, this.aOc = new acv, this.dv = function() {
		aE.ht || this.sk.dv()
	}, this.ep = function() {
		aE.ht || (this.sk.ep(), 3 !== u.vX) || bi.l3() % 15 != 5 && 2 !== aE.a3m || u.a52().aZi()
	};
	var aY6 = 0;

	function acz(pY) {
		3 === u.vX && u.a52().zB(pY)
	}
	__fx.replay.restartReplay = () => this.aZl(), this.aZl = function() {
		var acx, acy, fQ = bV.a8s(aE.data);
		2 === aE.data.mapType || bV.aJO.aM4(fQ) ? (acx = 0 !== aE.a3m, acy = aE.a8S, acx || ab.aLh(), aE.a8Q.a8r(), aE.data.canvas = null, b1.z.close(b1.z.a56, 3257), b1.z.a56 = 0, aE.data.isReplay = 1, aE.a8U(), acx && (aE.a8S = acy)) : aY6 || (
			aY6 = 1, bV.aJO.aSv(fQ, function(aM4) {
				aY6 = 0, aM4 && bC.aZl()
			}))
	}, this.aZk = function(pY) {
		var aC = pY.indexOf("=");
		return 0 <= aC ? pY.substring(aC + 1) : pY
	}, __fx.replayHistory.load = saved => {
		saved = bC.aZk(saved), bC.aOc.a0c(saved) && bC.aZl()
	}, this.acq = function(id) {
		var aSj = new XMLHttpRequest;
		aSj.open("GET", "https://" + b1.z.a4E() + "/log/?r=" + id), aSj.onload = function() {
			var pY = 200 === aSj.status ? aSj.responseText : "";
			acz(pY.length ? pY : L(554))
		}, aSj.onerror = function() {
			acz(L(555))
		}, aSj.send()
	}, this.aZj = function(pY) {
		return pY
	}
}

function act() {
	this.ad0 = null, this.ad1 = null, this.ad2 = null, this.ad3 = null, this.ad4 = null, this.ad5 = null, this.a8g = "";
	var ad6 = 0;
	this.dv = function() {
		this.ad0 = [], this.ad1 = [], this.ad2 = [], this.ad3 = [], this.ad4 = [0], this.ad5 = [0], ad6 = 0, this.a8g = ""
	}, this.sl = function(id, gT, gV, gX) {
		aE.ht || 2 === aE.a3m || (0 === this.ad4[ad6] && (this.ad5[ad6] ? (this.ad4.push(1), this.ad5.push(0), ad6++) : this.ad4[ad6] = 1), this.ad0.push(id), this.ad1.push(gT), this.ad2.push(void 0 === gV ? 0 : gV), this.ad3.push(void 0 === gX ?
			0 : gX), this.ad5[ad6]++)
	}, this.ep = function() {
		0 === this.ad4[ad6] ? this.ad5[ad6]++ : (this.ad4.push(0), this.ad5.push(0), ad6++)
	}
}

function acv() {
	var ad7 = 0;

	function adB(pY, id) {
		console.log(pY), ad7 || (id ? 1 === id ? aO.aA0 = L(238) + ": " + pY : u.v(4, 3, new w(L(557), pY, 1)) : u.v(4, 3, new w("⚠️ " + L(556), pY, 1)))
	}
	this.a0c = function(pY, ad8) {
		var j7, q5;
		return ad7 = ad8, bJ.fB.a0X(bJ.fB.a0V(bJ.fB.a0T(pY))), aO.aA0 = "", !! function() {
			if (bK.size < 10) adB("File Too Small");
			else {
				var adD = bK.sY(12),
					s = (adD !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, adB(s = (s += "   Found: " + adD) + ("   Compatible at " + b1.z.a4E() + "/" + adD), 1)), bK.sY(12)),
					adE = bK.sY(31);
				if (adE !== bK.size) adB("Size Error: Stated Size " + adE + " Actual Size " + bK.size);
				else if (function(k, adD) {
						for (var hI = bK.aD, fk = bK.size, ac2 = adD, aC = 3; aC < fk; aC++) ac2 = ac2 + hI[aC] & 4095;
						return ac2 === k || (adB("Hash Error: " + ac2 + " " + k + " " + fk), !1)
					}(s, adD)) return 1
			}
			return
		}() && (j7 = bK, (q5 = aE.data = new a8P).mapType = j7.sY(2), q5.mapProceduralIndex = j7.sY(8), q5.mapRealisticIndex = j7.sY(8), q5.mapSeed = j7.sY(14), q5.mapName = j7.adG(5), 2 === q5.mapType && j7.adH(), q5.passableWater = j7.sY(
			1), q5.passableMountains = j7.sY(1), q5.playerCount = j7.sY(10), q5.humanCount = j7.sY(10), q5.selectedPlayer = j7.sY(9), q5.gameMode = j7.sY(1), q5.playerMode = j7.sY(2), q5.battleRoyaleMode = j7.sY(2), q5.numberTeams = j7.sY(4),
			q5.isZombieMode = j7.sY(1), q5.isContest = j7.sY(1), q5.isReplay = j7.sY(1), q5.elo = j7.adI(2, 14, 2), q5.colorsType = j7.sY(1), q5.colorsPersonalized = j7.sY(1), q5.colorsData = j7.adI(10, 18, 512), q5.selectableColor = j7.sY(
			1), q5.teamPlayerCount = j7.adI(4, 10, 9), q5.neutralBots = j7.sY(1), q5.botDifficultyType = j7.sY(2), q5.botDifficultyValue = j7.sY(4), q5.botDifficultyTeam = j7.adI(4, 4, 9), q5.botDifficultyData = j7.adI(10, 4, 512), q5
			.spawningType = j7.sY(2), q5.spawningSeed = j7.sY(14), q5.spawningData = j7.adI(11, 12, 1024), q5.selectableSpawn = j7.sY(1), q5.playerNamesType = j7.sY(2), q5.playerNamesData = j7.adJ(10, 5, 512), q5.selectableName = j7.sY(1), q5
			.aIncomeType = j7.sY(2), q5.aIncomeValue = j7.sY(8), q5.aIncomeData = j7.adI(10, 8, 512), q5.tIncomeType = j7.sY(2), q5.tIncomeValue = j7.sY(8), q5.tIncomeData = j7.adI(10, 8, 512), q5.iIncomeType = j7.sY(2), q5.iIncomeValue = j7
			.sY(8), q5.iIncomeData = j7.adI(10, 8, 512), q5.sResourcesType = j7.sY(2), q5.sResourcesValue = j7.sY(11), q5.sResourcesData = j7.adI(10, 11, 512), q5.a8p = j7.adI(10, 30, 0), !! function() {
				var j7 = bK,
					aPi = j7.sY(5),
					adK = j7.sY(30),
					adL = j7.sY(30);
				if (adK + adL > 8 * j7.size) return void adB("Corrupted File");
				return function(fk) {
						var adO = new Uint8Array(fk),
							adP = new Uint16Array(fk),
							adQ = new Uint32Array(fk),
							adR = new Uint32Array(fk);
						bC.sk.ad0 = adO, bC.sk.ad1 = adP, bC.sk.ad2 = adQ, bC.sk.ad3 = adR;
						for (var aC = 0; aC < fk; aC++) {
							var id = bK.sY(4);
							adO[aC] = id, adP[aC] = bK.sY(9), 0 === id ? adQ[aC] = bK.sY(22) : 1 === id ? (adQ[aC] = bK.sY(10), adR[aC] = bK.sY(10)) : 2 === id ? (adQ[aC] = bK.sY(10), adR[aC] = bK.sY(9)) : 3 === id ? (adQ[aC] = bK.sY(10),
								adR[aC] = bK.sY(27)) : 4 === id ? (adQ[aC] = bK.sY(10), adR[aC] = bK.sY(16)) : 5 === id || 6 === id ? adQ[aC] = bK.sY(10) : 7 === id ? adQ[aC] = bK.sY(1) : 10 === id && (adQ[aC] = bK.sY(20), adR[aC] = bK
								.sY(22))
						}
					}(adK),
					function(fk, aPi) {
						var ad4 = new Uint8Array(fk),
							ad5 = new Array(fk);
						ad5.fill(0), bC.sk.ad4 = ad4, bC.sk.ad5 = ad5;
						for (var aC = 0; aC < fk; aC++) ad4[aC] = bK.sY(1), ad5[aC] = bK.sY(aPi)
					}(adL, aPi), 1
			}()) && (bK.eT < 8 * bK.size - 13 || bK.eT > 8 * bK.size ? (adB("Out Of Bounds Error: " + bK.eT + " " + 8 * bK.size), !1) : (bC.sk.a8g = pY, 2 !== aE.data.mapType || (adB("Load base64 image...", 2), ad8)))
	}, this.aOd = function(aNf, adC) {
		var a6f = document.createElement("canvas"),
			iq = a6f.getContext("2d", {
				willReadFrequently: !0
			});
		if (a6f.width = aNf.width, a6f.height = aNf.height, iq.drawImage(aNf, 0, 0), aE.data.canvas = a6f, ad7 || adC) return aE.a3m ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aZl()
	}
}

function acu() {
	this.a3G = function() {
		var aPi = function() {
				for (var ad5 = bC.sk.ad5, fk = ad5.length, max = 0, aC = 0; aC < fk; aC++) max = Math.max(max, ad5[aC]);
				return aTh(Math.max(max, 1))
			}(),
			j = (q5 = aE.data, (j = bH).dv(), j.a9(12, m.rVersion), j.eT += 43, j.a9(2, q5.mapType), j.a9(8, q5.mapProceduralIndex), j.a9(8, q5.mapRealisticIndex), j.a9(14, q5.mapSeed), j.adY(q5.mapName, 5), 2 === q5.mapType && j.adZ(q5.canvas),
				j.a9(1, q5.passableWater), j.a9(1, q5.passableMountains), j.a9(10, q5.playerCount), j.a9(10, q5.humanCount), j.a9(9, q5.selectedPlayer), j.a9(1, q5.gameMode), j.a9(2, q5.playerMode), j.a9(2, q5.battleRoyaleMode), j.a9(4, q5
					.numberTeams), j.a9(1, q5.isZombieMode), j.a9(1, q5.isContest), j.a9(1, q5.isReplay), j.e1(q5.elo, 2, 14), j.a9(1, q5.colorsType), j.a9(1, q5.colorsPersonalized), j.e1(q5.colorsData, 10, 18), j.a9(1, q5.selectableColor), j.e1(
					q5.teamPlayerCount, 4, 10), j.a9(1, q5.neutralBots), j.a9(2, q5.botDifficultyType), j.a9(4, q5.botDifficultyValue), j.e1(q5.botDifficultyTeam, 4, 4), j.e1(q5.botDifficultyData, 10, 4), j.a9(2, q5.spawningType), j.a9(14, q5
					.spawningSeed), j.e1(q5.spawningData, 11, 12), j.a9(1, q5.selectableSpawn), j.a9(2, q5.playerNamesType), j.ada(q5.playerNamesData, 10, 5), j.a9(1, q5.selectableName), j.a9(2, q5.aIncomeType), j.a9(8, q5.aIncomeValue), j.e1(q5
					.aIncomeData, 10, 8), j.a9(2, q5.tIncomeType), j.a9(8, q5.tIncomeValue), j.e1(q5.tIncomeData, 10, 8), j.a9(2, q5.iIncomeType), j.a9(8, q5.iIncomeValue), j.e1(q5.iIncomeData, 10, 8), j.a9(2, q5.sResourcesType), j.a9(11, q5
					.sResourcesValue), j.e1(q5.sResourcesData, 10, 11), j.e1(q5.a8p, 10, 30), ! function(aPi) {
					var j = bH,
						ad0 = bC.sk.ad0,
						gT = bC.sk.ad1,
						gV = bC.sk.ad2,
						gX = bC.sk.ad3,
						fk = ad0.length;
					j.a9(5, aPi), j.a9(30, fk), j.a9(30, bC.sk.ad5.length);
					for (var aC = 0; aC < fk; aC++) {
						var eu = ad0[aC];
						j.a9(4, eu), j.a9(9, gT[aC]), 0 === eu ? j.a9(22, gV[aC]) : 1 === eu ? (j.a9(10, gV[aC]), j.a9(10, gX[aC])) : 2 === eu ? (j.a9(10, gV[aC]), j.a9(9, gX[aC])) : 3 === eu ? (j.a9(10, gV[aC]), j.a9(27, gX[aC])) : 4 === eu ? (j
							.a9(10, gV[aC]), j.a9(16, gX[aC])) : 5 === eu || 6 === eu ? j.a9(10, gV[aC]) : 7 === eu ? j.a9(1, gV[aC]) : 10 === eu && (j.a9(20, gV[aC]), j.a9(22, gX[aC]))
					}
				}(aPi), ! function(aPi) {
					for (var j = bH, ad4 = bC.sk.ad4, ad5 = bC.sk.ad5, fk = ad4.length, aC = 0; aC < fk; aC++) j.a9(1, ad4[aC]), j.a9(aPi, ad5[aC])
				}(aPi), bH.eT),
			q5 = bO.gB(j - 1, 6) + 1,
			aPi = (bG.abR(6 * q5) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eT = 24, j.a9(31, j.h.length), j.eT = 12, j.a9(12, function() {
					for (var h = bH.h, fk = h.length, ac2 = m.rVersion, aC = 3; aC < fk; aC++) ac2 = ac2 + h[aC] & 4095;
					return ac2
				}())
			}(), bK.dv(bH.h), bI.fB.vZ(bI.fB.va(q5)));
		return bK.xy(), bH.dv(), aPi
	}
}

function cy() {
	var eu, c3 = !1,
		adc = !1,
		add = -1e4,
		ade = -1,
		adf = 0;

	function resize(adj) {
		eu = 0, ac.vx() && (adh(adj) || c3) && (c3 = !1, bf.resize(), bZ.aG3.resize(), aZ.dv(), bb.dv(), aa.resize(), aU.resize(), aP.resize(), bx.resize(), u.resize(), 1 <= aE.a3m ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(),
			aO.resize(), aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aDC()) : (ab.aLk(), ab.aLl()), bi.e2 = !0)
	}

	function adg(gC) {
		return gC && 128 < gC ? Math.floor(gC) : 128
	}

	function adh(adj) {
		var j, k, adl, vc, aCb;
		if (!(0 < i.vE)) return vc = adg(document.documentElement.clientWidth), aCb = adg(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = vc, k = aCb, adl = 0 !== a1.id || j < k ?
			700 : 1200, adl = Math.min(adl / ((j + k) / 2), 1), adl = 0 === bm.buffer.data[1].value ? 2 * adl / 3 : Math.min(adl + (bm.buffer.data[1].value - 1) * (1 - adl) / 2, 1), i.l = (window.devicePixelRatio || 1) * adl, __fx.hoveringTooltip
			.canvasPixelScale = i.l, adj && !adc ? (adc = !0, u.removeChild(document.body, a5K)) : adc && (adc = !1, document.body.appendChild(a5K)), j = Math.floor(.5 + vc * i.l), k = Math.floor(.5 + aCb * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aFf(j, k), i.max = aAG(j, k), i.iy = bO.gB(j + k, 2), i.ys = j / k, a5K.width = j, a5K.height = k, a5K.style.width = vc + "px", a5K.style.height = aCb + "px", ade = bi.ek + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.iy = 0, this.ys = 1, this.l = 1, this.vE = 0, this.dw = function() {
		this.j = adg(document.documentElement.clientWidth) + 2, this.k = adg(document.documentElement.clientHeight) + 2
	}, this.dv = function() {
		eu = 1, a5K = document.getElementById("canvasA"), 2 === a1.id && (a5K.style.webkitUserSelect = "none"), (yw = a5K.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, adh(0), a5K.addEventListener("contextrestored", function() {
			c3 = !0, resize(0)
		})
	}, this.ep = function() {
		50 <= ++eu && resize(0), -1 === ade || bi.ek < ade || (ade = -1, 2e3 * ++adf >= bi.ek + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.e5 = function(kL) {
		c3 = !0, resize(kL)
	}, this.a5z = function() {
		add + 1e3 > bi.ek || (add = bi.ek, resize(0))
	}
}

function dj() {
	var adn = [];
	this.aKX = function(pg) {
		for (var el = (new Date).getTime() - 36e5, aC = adn.length - 1; 0 <= aC; aC--)
			if (adn[aC].el < el) adn.splice(aC, 1);
			else if (adn[aC].pg === pg) return !0;
		return !1
	}, this.aKZ = function(pg, aKY) {
		return !(this.aKX(pg) || !b1.z.eq(0) || (b1.aVi.aVj({
			action: 6,
			pg: pg,
			value: aKY
		}), adn.push({
			pg: pg,
			el: (new Date).getTime()
		}), 0))
	}
}

function dS() {
	this.abf = new ado, this.a4f = new adp, this.abx = new adq
}

function adq() {
	var adr = ads(),
		adt = adu(),
		adv = adw();
	this.sY = function() {
		return 123
	}, this.a3G = function() {
		bJ.fB.a0b(bm.buffer.data[183].value, 15), bG.a9(14, adr), bG.a9(7, adt), bG.a9(12, adv)
	}
}

function ads() {
	for (var eu = document.createElement("canvas"), eu = (eu.width = 24, eu.height = 24, eu.getContext("2d", {
			alpha: !1
		})), fn = (eu.fillStyle = "rgb(0,0,0)", eu.fillRect(0, 0, 24, 24), eu.font = "22px system-ui", eu.textBaseline = "middle", eu.textAlign = "center", eu.fillStyle = "rgb(255,255,255)", eu.fillText("Q", 12, 12), eu.getImageData(0, 0, 24, 24)
			.data), fk = fn.length, m1 = 0, aC = 0; aC < fk; aC += 4) m1 += fn[aC];
	return 16383 & m1
}

function adu() {
	var fn = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fn + .5) / 15))
}

function adw() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function adp() {
	this.a4g = function() {
		for (var hI, fk = am.lc, x0 = am.lh, a4R = ah.a4R, aCP = this.aNO(), aC = 0; aC < fk; aC++) hI = x0[aC], bD.h6.kT(hI) || (a4R[hI] = aCP);
		var sp = ah.sp,
			k9 = ah.k9,
			kA = ah.kA,
			a4P = ah.a4P,
			fk = aE.l6;
		for (aC = 0; aC < fk; aC++)(0 === a4P[aC] || kA[aC] < 1 || 2 * sp[aC] > 3 * (k9[aC] + kA[aC])) && (a4R[aC] = 0);
		var a4d = 0;
		for (aC = 0; aC < fk; aC++) a4d += 0 < a4R[aC];
		return a4d
	}, this.aNO = function() {
		return Math.min(65535, bi.l3())
	}
}

function ado() {
	function ae0(h, gC, ie) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (gC >> (aC + ie) % 30 & 1)) % 256
	}
	this.ep = function(adx, ady) {
		var h = new Uint8Array(256);
		return function(h, adx, ady) {
				var aC, ae2 = 3 + (4 + adx) % 32768,
					ae3 = 12 + ady % 32768,
					ae4 = 17 + ((adx & ady) + (adx | ady) + adx) % 32768;
				for (aC = 0; aC < 256; aC++) ae2 = 1 + ae2 * ae3 % ae4, h[aC] = ae2 % 256
			}(h, adx, ady), ae0(h, adx, 2), ae0(h, ady, 7),
			function(h) {
				var aC, gC, eT = 0;
				for (aC = 0; aC < 3e4; aC++) gC = h[eT], h[eT] = (gC + aC + h[(eT + aC) % 256]) % 256, eT = (gC + aC + eT + (gC & eT)) % 256
			}(h),
			function(h) {
				var aC, aCb = 1,
					wI = 1;
				for (aC = 0; aC < 256; aC += 2) aCb = (1 + aCb) * (h[aC] + 1) % 1073741824, wI = (1 + wI) * (h[aC + 1] + 1) % 1073741824;
				return [aCb, wI]
			}(h)
	}, this.abg = function(ae5, ae6, ae7, result) {
		for (var hD = 1 << ae5, aC = 0; aC < hD; aC++)
			if (this.ae8(aC, ae6, ae7) === result) return aC;
		return 0
	}, this.ae8 = function(ae9, ae6, ae7) {
		for (var a17 = ae6 + ae9, a1G = ae7 + ae9, gC = a17 + a1G & 2147483647, g3 = 1; g3 <= 16; g3++) gC = (gC = (gC ^ gC >> g3) >>> 1 + (3 & a17)) * (7 + (1023 & (a17 | a1G))) & 1073741823, a1G >>= 1 + (1 & (a17 >>= 1 + (1 & (gC += 65535 &
			a1G))));
		return gC &= 1073741823
	}
}

function cv() {
	var aeA, aeB, j2, aeC;
	this.dv = function() {
		var aC, fr, ft, aXm, aeD, j, k, p6, im, a2I, gC, hI, g0, g3, aeG;
		if (function() {
				if (j2 = !0, aeC = "rgb(" + bV.aQv[0] + "," + bV.aQv[1] + "," + bV.aQv[2] + ")", bV.aRH(bV.fQ)) return 1;
				return j2 = !1, 0
			}()) aeB = null;
		else {
			for (aeA = bO.gB(96, 4), aeD = 1 === bV.fQ ? (aXm = 0, 160) : (aXm = 128, 32), aeC = "rgb(" + aXm + "," + aXm + "," + aXm + ")", aeB = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (aeB[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fv : aeA, k = aC % 2 == 0 ? aeA : bV.fw + 2 * aeA, aeB[aC].width = j, aeB[aC].height = k, a2I = (im = (p6 = aeB[aC].getContext("2d", {
						alpha: !1,
						willReadFrequently: !0
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (ft = aeA - 1; 0 <= ft; ft--)
						for (gC = aeD + Math.floor((ft + 1) * (aXm - aeD) / (aeA + 1)), fr = j - 1; 0 <= fr; fr--) a2I[hI = 4 * ((0 === aC ? aeA - ft - 1 : ft) * j + fr)] = gC, a2I[hI + 1] = gC, a2I[hI + 2] = gC, a2I[hI + 3] = 255;
				else {
					for (fr = aeA - 1; 0 <= fr; fr--)
						for (gC = aeD + Math.floor((fr + 1) * (aXm - aeD) / (aeA + 1)), ft = k - 1 - aeA; aeA <= ft; ft--) a2I[hI = 4 * (ft * j + (3 === aC ? aeA - fr - 1 : fr))] = gC, a2I[hI + 1] = gC, a2I[hI + 2] = gC, a2I[hI + 3] = 255;
					for (g3 = 1; 0 <= g3; g3--)
						for (fr = aeA - 1; 0 <= fr; fr--)
							for (ft = aeA - 1; 0 <= ft; ft--) g0 = (Math.pow(fr * fr + ft * ft, .5) + 1) / (aeA + 1), gC = aeD + Math.floor((1 < g0 ? 1 : g0) * (aXm - aeD)), a2I[hI = 4 * ((0 === g3 ? aeA - ft - 1 : ft + g3 * (k - aeA)) * j + (
								1 === aC ? fr : aeA - fr - 1))] = gC, a2I[hI + 1] = gC, a2I[hI + 2] = gC, a2I[hI + 3] = 255
				}
				p6.putImageData(im, 0, 0)
			}
			aeG = aeD, bV.aBL.fillStyle = "rgb(" + aeG + "," + aeG + "," + aeG + ")", bV.aBL.fillRect(0, 0, bV.fv, 1), bV.aBL.fillRect(0, bV.fw - 1, bV.fv, 1), bV.aBL.fillRect(0, 0, 1, bV.fw), bV.aBL.fillRect(bV.fv - 1, 0, 1, bV.fw)
		}
	}, this.a1q = function() {
		var g3 = j2 ? 0 : -aeA;
		aTg(g3, g3, bV.fv - 2 * g3, bV.fw - 2 * g3, bd.aeH, bd.aeI, bd.aeJ, bd.aeK) || (yw.fillStyle = aeC, yw.fillRect(0, 0, i.j, i.k))
	}, this.yv = function() {
		j2 || (aTf(0, -aeA, bV.fv, aeA, bd.aeH, bd.aeI, bd.aeJ, bd.aeK) && yw.drawImage(aeB[0], bd.aeL, bd.aeM - aeA), aTf(bV.fv, -aeA, aeA, bV.fw + 2 * aeA, bd.aeH, bd.aeI, bd.aeJ, bd.aeK) && yw.drawImage(aeB[1], bd.aeL + bV.fv, bd.aeM - aeA),
			aTf(0, bV.fw, bV.fv, aeA, bd.aeH, bd.aeI, bd.aeJ, bd.aeK) && yw.drawImage(aeB[2], bd.aeL, bd.aeM + bV.fw), aTf(-aeA, -aeA, aeA, bV.fw + 2 * aeA, bd.aeH, bd.aeI, bd.aeJ, bd.aeK) && yw.drawImage(aeB[3], bd.aeL - aeA, bd.aeM - aeA))
	}
}

function dH() {
	this.aNM = new aeN, this.a1u = new aeO, this.z = new aeP, this.jY = new aeQ, this.aeG = new aeR, this.n1 = new aeS, this.ku = new aeT, this.lt = new aeU, this.aeV = new aeW, this.aeX = new aeY, this.nC = new aeZ, this.iL = new aea, this.mS =
		new aeb, this.lv = new aec, this.iO = new aed, this.n5 = new aee, this.sx = new aef, this.dv = function() {
			this.mS.dv(), this.a1u.dv(), this.z.dv(), this.jY.dv(), this.aeG.dv(), this.aeX.dv(), this.n5.dv()
		}, this.yv = function() {
			this.aeX.yv(), this.a1u.yv()
		}
}

function aeT() {
	this.ep = function(player) {
		return !!bQ.nC.nD(player) && !(bQ.z.lA[player] >= Math.max(3 * ap.performance.mK, aF.lK[aF.iU[player]]) || !bD.h6.nE(player, aF.lI[aF.iU[player]], 32, 0)) && (aX.aFS() ? function(player) {
			var aei = bQ.lv.aFV(),
				fk = aei.length;
			if (0 === fk) return !1;
			aei = aei[az.kN(fk)], fk = bQ.z.mz[aei];
			if (bQ.n5.n6(player, fk)) return !1;
			return !! function(player, n8) {
				var n8 = bP.jW(bQ.z.nB[n8]),
					i0 = bP.fs(n8),
					n8 = bP.fu(n8),
					o9 = ah.je[player],
					oA = ah.jg[player],
					oM = ah.jf[player],
					player = ah.jh[player],
					oM = Math.max(i0 - oM, o9 - i0),
					o9 = Math.max(n8 - player, oA - n8);
				return oM < 100 && o9 < 100
			}(player, aei) && !!bQ.iO.sw(player, fk, 1) && (bD.h6.nG(player), bQ.z.nH(player), !0)
		}(player) : !!(ap.jx.ep(player) || ap.jm.ep(player) || ap.jo.ep(player)) && (function(player) {
			bR.gM[1] = 4, bD.h6.nG(player), bQ.z.nH(player)
		}(player), !0))
	}
}

function aee() {
	var ael = 0,
		aem = null;
	this.dv = function() {
		null === aem && (aem = new Uint16Array(2 * bQ.z.lK)), ael = 0
	}, this.et = function(aen, n5) {
		var aeo = aem;
		aeo[ael++] = aen, aeo[ael++] = n5
	}, this.n6 = function(player, n4) {
		for (var aeo = aem, fk = ael, aC = 0; aC < fk; aC += 2)
			if (aeo[aC] === n4 && bQ.lv.aep(aeo[aC + 1]) && player === bQ.z.n0[bR.gM[2]] >> 3) return !0;
		return !1
	}, this.aeq = function(aer) {
		var n1 = bQ.z.mx[aer];
		if (!(n1 < 64)) {
			for (var n4 = bQ.z.mz[aer], aeo = aem, fk = ael, aC = fk - 2; 0 <= aC; aC -= 2)
				if (aeo[aC] === n4) {
					{
						aew = void 0;
						var aew = aeo[aC + 1];
						bQ.lv.aep(aew) && bQ.n5.af4(bR.gM[2])
					}
					aeo[aC] = aeo[fk - 2], aeo[aC + 1] = aeo[fk - 1], fk -= 2
				} ael = fk
		}
	}, this.aet = function(aeu, aev) {
		for (var aew = bQ.z.mz[aeu], n4 = -1, aeo = aem, fk = ael, aC = 1; aC < fk; aC += 2)
			if (aeo[aC] === aew) {
				n4 = aeo[aC - 1];
				break
			} if (-1 === n4) return !1;
		if (!bQ.lv.aep(n4)) return !1;
		var aer = bR.gM[2],
			mR = bQ.z.my[aer];
		if (aev === mR[mR.length - 1]) bQ.z.my[aeu] = bQ.mS.aex(bQ.z.my[aeu], bQ.mS.ma(mR));
		else {
			var aey = bQ.lv.aez(mR, aev);
			if (-1 === aey) return !1;
			var af0 = bQ.z.nA[aer];
			aey === af0 ? (aer = bP.jW(bQ.z.nB[aer]), bQ.z.my[aeu] = bQ.mS.af2(bQ.z.my[aeu], mR, aey, aev, bP.jE(mR[aey], aev) > bP.jE(mR[aey], aer))) : bQ.z.my[aeu] = bQ.mS.af2(bQ.z.my[aeu], mR, aey, aev, af0 < aey)
		}
		return !0
	}, this.af4 = function(af5) {
		var mR, m1 = bQ.z,
			n1 = m1.mx[af5];
		return n1 % 64 != 5 && (mR = m1.my[af5], m1.af6[af5] = 65535 - m1.af6[af5], m1.nA[af5] = mR.length - m1.nA[af5] - 2, m1.my[af5] = bQ.mS.ma(mR), m1.mx[af5] = n1 - n1 % 64 + 5, !0)
	}
}

function aeZ() {
	this.nD = function(player) {
		return !!aE.data.passableWater && bQ.z.mw !== bQ.z.lK && bQ.z.lA[player] !== bQ.z.af7 && 0 !== ah.hR[player].length
	}, this.ss = function(acU) {
		var n1 = bR.gM[1];
		return !(4 <= n1 || !bQ.lv.af8(bP.fa(acU))) && ad.ff(bP.fa(bP.ja(acU, n1)))
	}
}

function aeN() {
	this.aNN = function(player) {
		for (var aBp = bQ.z.aBp, vp = player << 3, aC = vp + bQ.z.lA[player] - 1; vp <= aC; aC--) this.af9(aBp[aC])
	}, this.af9 = function(afA) {
		var z = bQ.z,
			afB = z.mw - 1,
			afC = z.n0[afA],
			afD = z.afE[afA],
			afF = z.nB[afA];
		z.mw = afB, z.n0[afA] = z.n0[afB], z.nB[afA] = z.nB[afB], z.af6[afA] = z.af6[afB], z.aAZ[afA] = z.aAZ[afB], z.afE[afA] = z.afE[afB], z.mz[afA] = z.mz[afB], z.mx[afA] = z.mx[afB], z.afG[afA] = z.afG[afB], z.my[afA] = z.my[afB], z.nA[afA] =
			z.nA[afB], z.aBp[z.n0[afA]] = afA,
			function(acT) {
				var player = acT >> 3,
					z = bQ.z,
					fk = z.lA[player] - 1,
					afJ = (player << 3) + fk;
				z.lA[player] = fk, afJ !== acT && (z.aBp[acT] = z.aBp[afJ], z.n0[z.aBp[acT]] = acT)
			}(afC), bQ.jY.jY[bP.jX(z.nB[afA])][z.afE[afA]] = afA, afB = bP.jX(afF), afC = afD, afB = bQ.jY.jY[afB], z = afB.pop(), afC !== afB.length && (afB[afC] = z, bQ.z.afE[z] = afC)
	}
}

function aeO() {
	var afL, afM = 8,
		afN = null;

	function afS(a2I, fW, eT) {
		fW *= 4;
		a2I[fW] = 255, a2I[1 + fW] = 255, a2I[2 + fW] = eT, a2I[3 + fW] = 255
	}

	function afU(iq, aeC) {
		var fr, ft, j8, fW, afV, afW, ij = afM,
			im = bD.tO.getImageData(iq, ij, ij),
			a2I = im.data,
			m1 = (ij >> 1) - .5,
			afY = bD.tV.a6D(aeC, .5);
		for (bD.tV.a6F(aeC, afY, 300) || bD.tV.a6H(aeC, 100), ft = 0; ft < ij; ft++)
			for (fr = 0; fr < ij; fr++) afW = (ij - 1.5) * (ij - 1.5) / 4, a2I[fW = 4 * (ft * ij + fr)] = (afV = (j8 = (j8 = fr - m1) * j8 + (j8 = ft - m1) * j8) <= (ij - 4.5) * (ij - 4.5) / 4 ? afY : aeC)[0], a2I[1 + fW] = afV[1], a2I[2 + fW] = afV[
				2], a2I[3 + fW] = afW < j8 ? 0 : 255;
		iq.putImageData(im, 0, 0)
	}
	this.dv = function() {
		var eT, ij, a6f, iq, im, a2I;
		(afL = afL || new Array(aE.fh)).fill(null), eT = 255, ij = afM + 4, a6f = bD.tO.a6g(ij, ij), iq = bD.tO.getContext(a6f, !0), im = bD.tO.getImageData(iq, ij, ij), afS(a2I = im.data, ij + 1, eT), afS(a2I, ij + 2, eT), afS(a2I, 2 * ij + 1,
				eT), afS(a2I, 2 * ij - 3, eT), afS(a2I, 2 * ij - 2, eT), afS(a2I, 3 * ij - 2, eT), afS(a2I, ij * (ij - 3) + 1, eT), afS(a2I, ij * (ij - 2) + 1, eT), afS(a2I, ij * (ij - 2) + 2, eT), afS(a2I, ij * (ij - 2) - 2, eT), afS(a2I, ij * (
				ij - 1) - 3, eT), afS(a2I, ij * (ij - 1) - 2, eT), iq.putImageData(im, 0, 0), afN = a6f,
			function() {
				if (aE.ih)
					for (var a6f = new Array(bj.lT.length), fk = aE.fh, afQ = afL, aEn = bj.aEn, aC = 0; aC < fk; aC++) {
						var a9G = aEn[aC];
						a6f[a9G] || (a6f[a9G] = function(a9G) {
							var a6f = bD.tO.a6g(afM, afM),
								iq = bD.tO.getContext(a6f, !0),
								h = bR.gJ;
							return h.set(bj.aXn[a9G]), afU(iq, h), a6f
						}(a9G)), afQ[aC] = a6f[a9G]
					}
			}()
	}, this.yv = function() {
		var aC, player, afZ, aGD, iU, j7, afb, afd, afe, nB = bQ.z.nB,
			n0 = bQ.z.n0,
			aAZ = bQ.z.aAZ,
			afG = bQ.z.afG,
			aff = afL,
			afg = aE.fU,
			fk = bQ.z.mw,
			afh = i.j,
			afi = i.k,
			afj = bV.fv << 4,
			fZ = iz,
			fO = fZ / afM,
			o9 = jP / fZ,
			oA = jQ / fZ,
			j8 = (afh + jP) / fZ - o9,
			jB = (afi + jQ) / fZ - oA,
			iq = yw;
		for (iq.imageSmoothingEnabled = fZ < 9, bD.tO.textAlign(iq, 1), bD.tO.textBaseline(iq, 1), aC = 0; aC < fk; aC++) player = n0[aC] >> 3, iU = aAZ[aC], afZ = .9 + .1 * Math.log10(iU), aGD = (j7 = nB[aC]) % afj / 16 - afZ, j7 = afi * (Math
			.floor(j7 / afj) / 16 - afZ - oA) / jB, afb = -2 * (afe = fZ * afZ) * (1 + (afd = +(player === afg)) / 8), afd = afd * afe / 4, (afe = afh * (aGD - o9) / j8) < afb || j7 < afb || afh + afd < afe || afi + afd < j7 || (aGD = 2 *
			afZ * fO, afb = afZ * fZ, null === (afd = aff[player]) && (aff[player] = afd = function(player) {
				var a6f = bD.tO.a6g(afM, afM);
				return afU(bD.tO.getContext(a6f, !0), ad.aBQ(player)), a6f
			}(player)), player === afg && (iq.setTransform(aGD, 0, 0, aGD, afe - 2 * aGD, j7 - 2 * aGD), iq.drawImage(afN, 0, 0)), iq.setTransform(aGD, 0, 0, aGD, afe, j7), iq.drawImage(afd, 0, 0), (afZ = Math.floor(function(iU) {
				if (iU < 1e3) return .42;
				if (iU < 1e4) return .34;
				if (iU < 1e6) return .26;
				if (iU < 1e8) return .19;
				return .15
			}(iU) * afb)) < 6) || (iq.setTransform(1, 0, 0, 1, 0, 0), iq.fillStyle = afG[aC] ? bE.qz : bE.qP, iq.font = bD.tO.ux(1, afZ), iq.fillText(bD.pc.a35(iU), afe + afb, j7 + afb + .1 * afZ));
		iq.imageSmoothingEnabled = !1, iq.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aeY() {
	var afm;
	this.dv = function() {
		if (!afm) {
			afm = new Array(bj.afo.length);
			for (var aC = 0; aC < afm.length; aC++) afm[aC] = bS.z.afp(20, bj.afo[aC])
		}
	}, this.yv = function() {
		var oT = iz;
		if (!(5 <= oT)) {
			var afh = i.j,
				afi = i.k,
				o9 = jP / oT,
				oA = jQ / oT,
				oM = (afh + jP) / oT,
				oN = (afi + jQ) / oT,
				hJ = -20 * oT,
				afq = .5 * hJ,
				afj = bV.fv << 4,
				fk = bQ.z.mw,
				nB = bQ.z.nB,
				n0 = bQ.z.n0,
				aEn = bj.aEn,
				a6f = afm,
				iq = yw;
			3 < oT && (iq.globalAlpha = .5 * (5 - oT));
			for (var aC = 0; aC < fk; aC++) {
				var j7 = nB[aC],
					fr = afh * (j7 % afj / 16 - o9) / (oM - o9) + afq,
					j7 = afi * (Math.floor(j7 / afj) / 16 - oA) / (oN - oA) + afq;
				afh < fr || afi < j7 || fr < hJ || j7 < hJ || (iq.setTransform(oT, 0, 0, oT, fr, j7), fr = a6f[aEn[n0[aC] >> 3]], iq.drawImage(fr, 0, 0))
			}
			iq.globalAlpha = 1, iq.setTransform(oT, 0, 0, oT, 0, 0)
		}
	}
}

function aec() {
	this.aft = function(player, id) {
		for (var afu = ah.hR[player], fk = afu.length, aC = 0; aC < fk; aC++)
			if (bP.j0(afu[aC], id)) return !0;
		return !1
	}, this.afv = function(player, fW) {
		for (var jG, afw, fO, afu = ah.hR[player], fk = afu.length, j = bV.fv, afy = bP.fs(fW), afz = bP.fu(fW), fq = -1, min = bV.fv * bV.fv + bV.fw * bV.fw, id = ad.fS(bP.fa(fW)), aC = 0; aC < fk; aC++)(afw = (afw = afy - (jG = (fO = afu[
			aC]) >> 2) % j) * afw + (afw = afz - ~~((.5 + jG) / j)) * afw) < min && bP.j0(fO, id) && (min = afw, fq = jG);
		return fq
	}, this.lw = function(jF, jG) {
		for (var id = ad.fS(bP.fa(jG)), j1 = bP.it, fO = bP.fa(jF), ag0 = -1, aC = 0; aC < 4; aC++) {
			var fZ = fO + j1[aC];
			ad.j2(fZ) && ad.fS(fZ) === id && (-1 === ag0 || bP.jH(bP.fY(fZ), jG) < bP.jH(ag0, jG)) && (ag0 = bP.fY(fZ))
		}
		return ag0
	}, this.mV = function(player, fW) {
		for (var j1 = bP.it, fO = bP.fa(fW), aC = 0; aC < 4; aC++) {
			var fZ = fO + j1[aC];
			if (ad.hK(fZ) && ad.a1o(player, fZ)) return !0
		}
		return !1
	}, this.mW = function(player, fW) {
		for (var j1 = bP.it, fO = bP.fa(fW), aC = 0; aC < 4; aC++) {
			var fZ = fO + j1[aC];
			if (ad.fb(fZ)) return !0;
			if (ad.hK(fZ)) {
				fZ = ad.fc(fZ);
				if (player !== fZ && bw.fd(player, fZ)) return !0
			}
		}
		return !1
	}, this.n2 = function(fW) {
		for (var j1 = bP.it, fO = bP.fa(fW), aC = 0; aC < 4; aC++) {
			var fZ = fO + j1[aC];
			if (ad.hK(fZ)) {
				fZ = ad.fc(fZ);
				if (bD.h6.kT(fZ)) return fZ
			}
		}
		return -1
	}, this.af8 = function(fO) {
		if (ad.j2(fO))
			for (var j1 = bP.it, aC = 0; aC < 4; aC++)
				if (ad.ff(fO + j1[aC])) return !0;
		return !1
	}, this.o8 = function(player, id) {
		for (var vp = player << 3, vq = vp + bQ.z.lA[player], mz = bQ.z.mz, aBp = bQ.z.aBp, aC = vp; aC < vq; aC++) {
			var aBq = aBp[aC];
			if (mz[aBq] === id) return aBq
		}
		return -1
	}, this.oD = function(player) {
		return 0 === bQ.z.lA[player] ? -1 : bQ.z.aBp[player << 3]
	}, this.a9Y = function(mL, mM) {
		var fk = bQ.z.mw;
		if (fk < 1) return -1;
		for (var nB = bQ.z.nB, ag1 = 80, aXH = -1, aC = 0; aC < fk; aC++) {
			var g0 = bP.j4(mL, mM, nB[aC]);
			g0 < ag1 && (ag1 = g0, aXH = aC)
		}
		return function(aC, mL, mM) {
			if (aC < 0) return;
			var ag8 = bQ.z.nB[aC],
				ag9 = bP.jA(ag8),
				ag8 = bP.jD(ag8),
				aC = 20 * (.9 + .1 * Math.log10(bQ.z.aAZ[aC]));
			return aC = Math.max(aC, bP.jR(bD.tO.vu(.02, 1.7))), bO.aTo(bP.j9(mL), bP.jC(mM), ag9, ag8, aC)
		}(aXH, mL, mM) ? aXH : -1
	}, this.aep = function(o6) {
		for (var fk = bQ.z.mw, mz = bQ.z.mz, aC = 0; aC < fk; aC++)
			if (mz[aC] === o6) return bR.gM[2] = aC, !0;
		return !1
	}, this.aNJ = function(player) {
		for (var vp = player << 3, vq = vp + bQ.z.lA[player], aBp = bQ.z.aBp, aAZ = bQ.z.aAZ, iU = 0, aC = vp; aC < vq; aC++) iU += aAZ[aBp[aC]];
		return iU
	}, this.ag3 = function(player, af5) {
		af5 = bQ.z.my[af5];
		return this.mV(player, af5[af5.length - 1])
	}, this.ag4 = function(jF, jG, g0, ag5) {
		var jJ = bP.fs(jF),
			jF = bP.fu(jF),
			jL = bP.fs(jG),
			jG = bP.fu(jG),
			jL = (g0 = Math.max(g0, 1), jL - jJ),
			jG = jG - jF,
			j8 = bO.gB(Math.abs(jL) * ag5, g0),
			ag5 = bO.gB(Math.abs(jG) * ag5, g0);
		return bP.g7(jJ + Math.sign(jL) * j8, jF + Math.sign(jG) * ag5)
	}, this.aez = function(mR, fW) {
		for (var fk = mR.length - 1, fr = bP.fs(fW), ft = bP.fu(fW), aC = 0; aC < fk; aC++) {
			var jF = mR[aC],
				jG = mR[aC + 1],
				o9 = bP.fs(jF),
				jF = bP.fu(jF),
				oM = bP.fs(jG),
				jG = bP.fu(jG);
			if (!(fr !== o9 && fr !== oM && Math.sign(fr - o9) === Math.sign(fr - oM) || ft !== jF && ft !== jG && Math.sign(ft - jF) === Math.sign(ft - jG))) {
				if (o9 === oM || jF === jG) return aC;
				if (Math.abs(fr - o9) === Math.abs(ft - jF) && Math.abs(fr - oM) === Math.abs(ft - jG)) return aC
			}
		}
		return -1
	}, this.aFV = function() {
		for (var agB = mh[0], n0 = bQ.z.n0, mw = bQ.z.mw, h = [], aC = 0; aC < mw; aC++) bD.h6.lk(agB, n0[aC] >> 3) && h.push(aC);
		return h
	}, this.mT = function(player, mR) {
		for (var vp = player << 3, vq = vp + bQ.z.lA[player], aBp = bQ.z.aBp, my = bQ.z.my, iD = mR[0], lj = mR[mR.length - 1], aC = vp; aC < vq; aC++) {
			var hI = my[aBp[aC]];
			if (hI[0] === iD && hI[hI.length - 1] === lj) return !0
		}
		return !1
	}
}

function aed() {
	function agE(player, af5) {
		af5 = bP.jW(bQ.z.nB[af5]), af5 = ad.fS(bP.fa(af5));
		return !!bQ.lv.aft(player, af5)
	}

	function agC(player) {
		return bQ.nC.nD(player) && !bQ.mS.mY()
	}
	this.iP = function(player, fW) {
		return !!agC(player) && -1 !== (fW = function(player, fW) {
			for (var fk = bQ.z.mw, nB = bQ.z.nB, n0 = bQ.z.n0, ag1 = bP.iv(), aXH = -1, aC = 0; aC < fk; aC++) {
				var g0 = bP.jE(fW, bP.jW(nB[aC]));
				g0 < ag1 && bD.h6.lk(player, n0[aC] >> 3) && (ag1 = g0, aXH = aC)
			}
			return aXH
		}(player, fW)) && !!agE(player, fW) && (bR.gM[3] = bQ.z.mz[fW], !0)
	}, this.s3 = function(player, o6) {
		return !!agC(player) && !!bQ.lv.aep(o6) && !!agE(player, bR.gM[2])
	}, this.sw = function(player, o6, agF) {
		return !! function(player, o6, agF) {
			if (agC(player) && bQ.lv.aep(o6)) {
				o6 = bR.gM[2];
				if (bD.h6.lk(player, bQ.z.n0[o6] >> 3)) {
					if (function(player, af5) {
							return bQ.lv.ag3(player, af5) && (bR.h[0] = bQ.mS.ma(bQ.z.my[af5]), bR.gM[1] = 6, !0)
						}(player, o6)) return 1;
					var aek = bP.jW(bQ.z.nB[o6]),
						agJ = bQ.lv.afv(player, aek);
					if (-1 !== agJ) {
						agJ = bP.jE(agJ, aek);
						if (!(agF && 120 < agJ)) {
							agF = function(af5, agK, aek) {
								var mR = bQ.z.my[af5],
									af5 = bQ.z.nA[af5],
									agM = bP.jE(aek, mR[af5 + 1]);
								if (agK <= agM) return bQ.lv.ag4(aek, mR[af5 + 1], agM, agK);
								for (var g0 = agK - agM, fk = mR.length - 1, aC = af5 + 1; aC < fk; aC++) {
									var agN = bP.jE(mR[aC], mR[aC + 1]);
									if (g0 <= agN) return bQ.lv.ag4(mR[aC], mR[aC + 1], agN, g0);
									g0 -= agN
								}
								return mR[fk]
							}(o6, agJ, aek);
							if (bQ.lt.st(player, agF, 1)) return bR.gM[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, o6, agF) && (player = bR.gM[2], bQ.z.mx[player] = 64 + bQ.z.mx[player] % 64, bQ.n5.et(o6, bQ.z.nF), !0)
	}
}

function aeS() {
	function agS(player, iU, agQ, aek) {
		var kF;
		if (ad.fb(agQ)) kF = aE.fh;
		else {
			if ((kF = ad.fc(agQ)) === player) return void bg.hA(player, iU - bD.h6.h9(player, iU), 12);
			if (!bw.fd(player, kF)) return void bB.l8.sI(player, kF, iU)
		}
		ae.kR(player, kF) || ae.kk(player) ? (ah.hC[player].push(aek << 2), ae.et(player, iU, kF), aG.kD(player, !0)) : bg.hA(player, iU, 12)
	}
	this.ep = function() {
		for (var mx = bQ.z.mx, nB = bQ.z.nB, af6 = bQ.z.af6, aC = bQ.z.mw - 1; 0 <= aC; aC--) 65535 === af6[aC] && function(aC, aek, ic) {
			if (6 === ic) {
				if (bQ.n5.aet(aC, aek)) return bQ.z.nA[aC]++, bQ.z.af6[aC] = 0, 0
			} else {
				var player = bQ.z.n0[aC] >> 3,
					aC = bQ.z.aAZ[aC];
				bg.agR(player), ic < 4 ? agS(player, aC, aek + bP.is[ic] << 2, aek) : 4 === ic ? function(player, iU, aek) {
					var aC, fo, j1 = bP.it,
						fZ = bP.fa(aek);
					for (aC = 0; aC < 4; aC++)
						if (fo = fZ + j1[aC], ad.fb(fo)) return agS(player, iU, fo, aek);
					for (aC = 0; aC < 4; aC++)
						if (fo = fZ + j1[aC], ad.hK(fo) && !ad.a1o(player, fo)) return agS(player, iU, fo, aek);
					for (aC = 0; aC < 4; aC++)
						if (fo = fZ + j1[aC], ad.hK(fo)) return agS(player, iU, fo, aek)
				}(player, aC, aek) : 5 === ic && function(player, iU, aek) {
					var aC, fo, j1 = bP.it,
						fZ = bP.fa(aek);
					for (aC = 0; aC < 4; aC++)
						if (fo = fZ + j1[aC], ad.hK(fo) && ad.a1o(player, fo)) return agS(player, iU, fo, aek);
					for (aC = 0; aC < 4; aC++)
						if (fo = fZ + j1[aC], ad.hK(fo)) return agS(player, iU, fo, aek);
					for (aC = 0; aC < 4; aC++)
						if (fo = fZ + j1[aC], ad.fb(fo)) return agS(player, iU, fo, aek)
				}(player, aC, aek)
			}
			return 1
		}(aC, bP.jW(nB[aC]), mx[aC] % 64) && (bQ.n5.aeq(aC), bQ.aNM.af9(aC))
	}, this.agP = function(player, fW, ic, o6, iU) {
		if (!(5 <= ic)) {
			var afg = aE.fU;
			if (bD.h6.hx(afg) && bw.fd(player, afg) && player !== afg && 0 !== ah.hR[afg].length && bD.h6.a7L(player, 5)) {
				for (var agQ, fy = !1, aC = 0; aC < 4; aC++)
					if (agQ = fW + bP.is[aC] << 2, ad.ff(agQ) && !ad.fb(agQ) && ad.fc(agQ) === afg) {
						fy = !0;
						break
					} fy && (aO.aAi(719, 0), ic = iU < 25e3 ? L(558) + " (" + bD.pc.a35(iU) + ") ⛵" : L(559) + " (" + bD.pc.a35(iU) + ") 🚢", aO.a2F(180, ic, 719, player, bE.qy, bE.qM, -1, !0, void 0, {
					g4: 1,
					o6: o6
				}))
			}
		}
	}
}

function aeP() {
	this.lK = 512, this.af7 = 8, this.mw = 0, this.nF = 0, this.n0 = new Uint16Array(this.lK), this.nB = new Uint32Array(this.lK), this.af6 = new Uint16Array(this.lK), this.aAZ = new Uint32Array(this.lK), this.afE = new Uint16Array(this.lK), this
		.mz = new Uint16Array(this.lK), this.mx = new Uint8Array(this.lK), this.afG = new Uint8Array(this.lK), this.my = new Array(this.lK), this.nA = new Uint16Array(this.lK), this.lA = new Uint8Array(aE.fh), this.aBp = new Uint16Array(this.af7 * aE
			.fh), this.dv = function() {
			this.mw = 0, this.nF = 0, this.lA.fill(0), this.my.fill(null)
		}, this.nH = function(player) {
			var iU = bR.gH[0],
				n1 = bR.gM[1],
				mR = bR.h[0],
				agV = this.nF,
				fk = this.mw,
				agW = bP.jV(mR[0]),
				agX = this.lA[player],
				agY = (player << 3) + agX;
			this.n0[fk] = agY, this.nB[fk] = agW, this.af6[fk] = 0, iU < 60 && (bD.h6.h7(player, 60 - iU), iU = 60), this.aAZ[fk] = iU, this.afE[fk] = bQ.jY.nH(fk, bP.jX(agW)), this.mz[fk] = agV, this.mx[fk] = n1, this.afG[fk] = 0, this.my[fk] = mR,
				this.nA[fk] = 0, this.nF = (agV + 1) % 65536, this.lA[player] = agX + 1, this.aBp[agY] = fk, this.mw++, bQ.n1.agP(player, mR[mR.length - 1], n1, agV, iU)
		}, this.ep = function() {
			bQ.n1.ep();
			for (var hI = aE.fU, el = bQ.lv.aNJ(hI), uh = (! function(uh) {
					for (var agd, nB = uh.nB, aAZ = uh.aAZ, afG = uh.afG, af6 = uh.af6, afE = uh.afE, my = uh.my, nA = uh.nA, uh = uh.mw, afj = bV.fv << 4, aC = uh - 1; 0 <= aC; aC--) {
						var age = nB[aC],
							mR = my[aC],
							agf = nA[aC],
							agW = bP.jV(mR[agf]),
							agg = bP.jV(mR[agf + 1]),
							agh = agW % afj,
							agW = ~~((agW + .5) / afj),
							agj = agg % afj,
							agk = ~~((agg + .5) / afj),
							agl = agj - agh,
							agm = agk - agW,
							fn = Math.max(~~Math.sqrt(agl * agl + agm * agm + .5), 1),
							aOG = aAZ[aC],
							aOG = (aOG = afG[aC] ? 4e4 : 25e4 + Math.min(20 * aOG, 3e5) + Math.min(aOG >> 3, 5e4), af6[aC] + Math.max(~~((aOG + .5) / fn), 1));
						65535 <= aOG ? agf + 2 < mR.length ? (nA[aC] = agf + 1, nB[aC] = agd = function(aC, agn, agh, agi, agf, fn, mR, afj) {
							agn = Math.min(agn - 65535, 65535);
							var mR = bP.jV(mR[agf + 2]),
								agf = mR % afj - agh,
								mR = ~~((mR + .5) / afj) - agi,
								agq = Math.max(~~Math.sqrt(agf * agf + mR * mR + .5), 1);
							return agn = Math.min(Math.floor((fn * agn + .5) / agq), 65534), bQ.z.af6[aC] = agn, agh + bO.gB(agn * agf, 65535) + afj * (agi + bO.gB(agn * mR, 65535))
						}(aC, aOG, agj, agk, agf, fn, mR, afj)) : (nB[aC] = agd = agg, af6[aC] = 65535) : (af6[aC] = aOG, nB[aC] = agd = agh + bO.gB(aOG * agl, 65535) + afj * (agW + bO.gB(aOG * agm, 65535))), afE[aC] = bQ.jY.agp(afE[aC],
							age, agd)
					}
				}(this), ! function(uh) {
					if (bi.l3() % 2 == 1) {
						var aC, ie, m1, g4, eu, agr, a2j, ags, iD, o9, oA, agW, agt, aDH, agv, lj, fk = uh.mw,
							nB = uh.nB,
							n0 = uh.n0,
							aAZ = uh.aAZ,
							afG = uh.afG,
							jY = bQ.jY.jY,
							agx = jY.length,
							agy = bQ.jY.agy,
							afj = bV.fv << 4,
							agz = aE.ih,
							acI = bj.fi,
							hJ = (fk - 1) * (bO.gB(bi.l3(), 2) % 2);
						for (aC = 0; aC < fk; aC++)
							for (ie = Math.abs(aC - hJ), agW = nB[ie], m1 = bP.jX(agW), iD = n0[ie] >> 3, o9 = agW % afj, oA = ~~((agW + .5) / afj), agv = aAZ[ie], g4 = 0; g4 < 9; g4++)
								if (!((agr = m1 + agy[g4]) < 0 || agx <= agr))
									for (ags = jY[agr], a2j = ags.length, eu = 0; eu < a2j; eu++) agt = ags[eu], lj = n0[agt] >> 3, iD == lj || agz && acI[iD] === acI[lj] && acI[iD] || (lj = nB[agt], (aDH = o9 - lj % afj) * aDH + (aDH = oA -
										~~((lj + .5) / afj)) * aDH < 14400 && (lj = aAZ[agt], aDH = lj <= agv ? Math.max(1, bO.gB(lj + bO.gB(agv - lj, 10), 10)) : Math.max(1, bO.gB(agv, 10)), aAZ[agt] = Math.max(lj - aDH, 0), afG[
										agt] = 4))
					}
				}(this), ! function(uh) {
					if (bi.l3() % 5 == 3)
						for (var aAZ = uh.aAZ, fk = uh.mw, aC = 0; aC < fk; aC++) {
							var iU = aAZ[aC];
							aAZ[aC] = Math.max(iU - Math.max(1, iU >> 7), 0)
						}
				}(this), this), aAZ = uh.aAZ, afG = uh.afG, aC = uh.mw - 1; 0 <= aC; aC--) afG[aC] = afG[aC] >> 1, 0 === aAZ[aC] && (bQ.n5.aeq(aC), bQ.aNM.af9(aC));
			bg.hA(hI, el - bQ.lv.aNJ(hI), 15)
		}
}

function aeQ() {
	this.ah0 = 32, this.fr = 0, this.ft = 0, this.jZ = 0, this.ah1 = 0, this.ah2 = 4, this.jY = null, this.agy = new Int16Array(9), this.dv = function() {
		this.jZ = 1 + bO.gB(bV.fv - 1, this.ah0), this.ah1 = 1 + bO.gB(bV.fw - 1, this.ah0), this.jY = new Array(this.jZ * this.ah1), bD.tV.a6C(this.jY);
		var fr, ft, agy = this.agy,
			j = this.jZ;
		for (fr = -1; fr <= 1; fr++)
			for (ft = -1; ft <= 1; ft++) agy[3 * (1 + ft) + 1 + fr] = ft * j + fr
	}, this.nH = function(ah4, aC) {
		return this.jY[aC].push(ah4), this.jY[aC].length - 1
	}, this.agp = function(ah5, agW, agg) {
		var ah6, ah7, agW = bP.jX(agW),
			agg = bP.jX(agg);
		return agW === agg ? ah5 : (ah6 = this.jY[agW].pop(), this.jY[agW].length === ah5 ? this.nH(ah6, agg) : (ah7 = this.jY[agW][ah5], this.jY[agW][ah5] = ah6, bQ.z.afE[ah6] = ah5, this.nH(ah7, agg)))
	}
}

function aeU() {
	this.lu = function(player, ah8) {
		return -1 !== ah8 && !!bQ.lv.mW(player, ah8) && this.st(player, ah8, 0)
	}, this.st = function(player, ah8, ah9) {
		player = function(player, ah8, ah9) {
			var agJ = bQ.lv.afv(player, ah8);
			if (-1 === agJ) return -1;
			agJ = bQ.lv.lw(agJ, ah8);
			if (-1 === agJ) return -1;
			var mP = bQ.mS.mX(agJ, ah8);
			if (0 <= mP) return mP;
			if (bQ.mS.mY()) return -1;
			if (0 <= (mP = bQ.mS.mX(ah8, agJ))) return bQ.mS.mZ(bQ.mS.ma(bQ.mS.get(mP)));
			if (agJ === ah8) return bQ.mS.mZ(new Uint32Array([agJ, ah8]));
			if (0 <= (mP = bQ.aeV.st(agJ, ah8))) return mP;
			return ah9 ? function(ahD, player) {
				var gR = bR.gR,
					buffer = (gR.fill(0), [ahD]),
					iu = (gR[ahD] = 1, bP.iu),
					ahE = -1,
					fk = buffer.length;
				for (; - 1 === ahE && fk;) {
					for (var h = [], aC = 0; aC < fk; aC++)
						for (var fW = buffer[aC], a87 = gR[fW], fn = 0; fn < 8; fn++) {
							var a0W, a4a, fq = fW + iu[fn],
								fO = 4 * fq;
							ad.j2(fO) ? (a0W = gR[fq], a4a = a87 + 5 + ((1 & fn) << 1), 0 === a0W ? (h.push(fq), gR[fq] = a4a) : gR[fq] = Math.min(a4a, a0W)) : -1 === ahE && fn % 2 == 0 && ad.a1l(player, fO) && (ahE = fW)
						}
					fk = (buffer = h).length
				}
				return -1 !== ahE ? function(jF, ahG) {
					var iu = bP.iu,
						ahH = -1,
						ic = 0,
						ne = [];
					for (; ahG !== jF;)(ic = function(fW, ic) {
						var gR = bR.gR,
							iu = bP.iu,
							a87 = gR[fW];
						if (a87 - gR[fW + iu[ic]] != 5 + ((1 & ic) << 1))
							for (var g3 = 0; g3 < 8; g3++) {
								var fn = g3 + ic + 6 & 7;
								if (a87 - gR[fW + iu[fn]] == 5 + ((1 & fn) << 1)) return fn
							}
						return ic
					}(ahG, ic)) !== ahH && (ne.push(ahG), ahH = ic), ahG += iu[ic];
					ne.push(jF);
					var mP = bQ.mS.mX(ne[0], jF);
					if (0 <= mP) return mP;
					return bQ.mS.mZ(new Uint32Array(ne))
				}(ahD, ahE) : -1
			}(ah8, player) : -1
		}(player, ah8, ah9);
		return -1 !== player && (bR.h[0] = bQ.mS.get(player), !0)
	}
}

function aeW() {
	function ahJ(i0, jK, jM) {
		for (var kM = Math.min(jK, jM), oR = Math.max(jK, jM), ft = kM + 1; ft < oR; ft++)
			if (!ad.j2(bP.jS(i0, ft))) return;
		return 1
	}

	function ahK(i2, jJ, jL) {
		for (var kM = Math.min(jJ, jL), oR = Math.max(jJ, jL), fr = kM + 1; fr < oR; fr++)
			if (!ad.j2(bP.jS(fr, i2))) return;
		return 1
	}

	function ahL(jJ, jK, jL, jM, ahB, ah8) {
		for (var fk = Math.min(Math.abs(jL - jJ), Math.abs(jM - jK)), j8 = Math.sign(jL - jJ), jB = Math.sign(jM - jK), aC = 0; aC < fk; aC++)
			if (!ad.j2(bP.jS(jJ += j8, jK += jB))) return null;
		return jJ === jL ? ahJ(jJ, jK, jM) ? new Uint32Array([ahB, bP.g7(jJ, jK), ah8]) : null : ahK(jK, jJ, jL) ? new Uint32Array([ahB, bP.g7(jJ, jK), ah8]) : null
	}
	this.st = function(ahB, ah8) {
		ahB = function(ahB, ah8) {
			var jJ = bP.fs(ahB),
				jK = bP.fu(ahB),
				jL = bP.fs(ah8),
				jM = bP.fu(ah8);
			if (jJ === jL) {
				if (ahJ(jJ, jK, jM)) return new Uint32Array([ahB, ah8])
			} else {
				if (jK !== jM) return ahL(jJ, jK, jL, jM, ahB, ah8) || ahL(jL, jM, jJ, jK, ahB, ah8);
				if (ahK(jK, jJ, jL)) return new Uint32Array([ahB, ah8])
			}
			return null
		}(ahB, ah8);
		return null === ahB ? -1 : bQ.mS.mZ(ahB)
	}
}

function aeb() {
	var ahM = [];
	this.dv = function() {
		ahM = []
	}, this.mY = function() {
		return 65536 === ahM.length
	}, this.mX = function(ahB, ah8) {
		for (var mS = ahM, fk = mS.length, aC = 0; aC < fk; aC++) {
			var hI = mS[aC];
			if (hI[0] === ahB && hI[hI.length - 1] === ah8) return aC
		}
		return -1
	}, this.ma = function(mR) {
		var ahN = new Uint32Array(mR.length);
		return ahN.set(mR), ahN.reverse()
	}, this.aex = function(iD, lj) {
		var hD = iD.length - 1,
			ahO = new Uint32Array(hD + lj.length);
		return ahO.set(iD, 0), ahO.set(lj, hD), ahO
	}, this.af2 = function(iD, lj, a00, fW, ahP) {
		ahP && (a00 = (lj = this.ma(lj)).length - a00 - 2);
		ahP = lj.subarray(a00 + 1 + (fW === lj[a00 + 1])), fW = new Uint32Array(iD.length + ahP.length);
		return fW.set(iD, 0), fW.set(ahP, iD.length), fW
	}, this.mZ = function(mR) {
		return ahM.push(mR), ahM.length - 1
	}, this.get = function(aC) {
		return ahM[aC]
	}, this.mU = function() {
		return ahM
	}, this.ahR = function(ahB, ah8) {
		return null
	}
}

function aef() {
	this.ep = function(player, o6) {
		player = bQ.lv.o8(player, o6);
		return !(player < 0 || !bQ.n5.af4(player) || (bQ.n5.aeq(player), 0))
	}
}

function aeR() {
	var a2O = 32,
		a2N = new Array(2);

	function a6g(eu) {
		var fr, ft, fW, jB, j8, ij = a2O,
			a6f = bD.tO.a6g(ij, ij),
			iq = bD.tO.getContext(a6f, !0),
			im = bD.tO.getImageData(iq, ij, ij),
			a2I = im.data,
			m1 = (ij >> 1) - .5,
			m2 = Math.sqrt(m1 * m1);
		for (a2I.fill(255), ft = 0; ft < ij; ft++)
			for (fr = 0; fr < ij; fr++) j8 = fr - m1, jB = ft - m1, fW = 4 * (ft * ij + fr), j8 = 714 * (m2 - Math.sqrt(j8 * j8 + jB * jB)) / m2, a2I[2 + fW] = eu, a2I[3 + fW] = 255 < j8 ? 0 : j8;
		return iq.putImageData(im, 0, 0), a6f
	}
	this.ahS = -1, this.dv = function() {
		this.ahS = -1, a2N[0] || (a2N[0] = a6g(255), a2N[1] = a6g(0))
	}, this.ahT = function(iq, fO, fr, ft, eS, aC) {
		bD.h6.hx(aE.fU) && (iq.setTransform(fO *= 4 / 3 * .625, 0, 0, fO, fr - (eS *= 4 / 3), ft - eS), iq.drawImage(a2N[+(bQ.z.mz[aC] === this.ahS)], 0, 0))
	}
}

function aea() {
	function acZ(fr, fk, ft, ahU, aDN, gA, player) {
		if (!(ft < 1 || aDN < ft))
			for (var aC = 0; aC <= fk; aC++) {
				var fO = bP.jS(fr, ft);
				if (bQ.lv.af8(fO) && !bD.tV.has(ahU, ad.fS(fO)) && ad.a1d(fO, player)) return fO >> 2;
				fr += gA
			}
		return -1
	}

	function acd(ft, fk, fr, ahU, acX, gA, player) {
		if (!(fr < 1 || acX < fr)) {
			fk = Math.max(fk, 0);
			for (var aC = 0; aC <= fk; aC++) {
				var fO = bP.jS(fr, ft);
				if (bQ.lv.af8(fO) && !bD.tV.has(ahU, ad.fS(fO)) && ad.a1d(fO, player)) return fO >> 2;
				ft += gA
			}
		}
		return -1
	}

	function ach(jF, jG, acU) {
		return -1 !== jG && (-1 === jF || bP.jH(jG, acU) < bP.jH(jF, acU)) ? jG : jF
	}
	this.iM = function(player, acU) {
		if (bQ.nC.nD(player))
			for (var acV = bP.iv(), ahU = [];;) {
				var ahE = function(acU, acV, ahU, player) {
					for (var i0 = bP.fs(acU), i2 = bP.fu(acU), acX = bV.fv - 2, aDN = bV.fw - 2, acY = -1, fn = 0; fn < acV; fn++) {
						var aDM = Math.max(i0 - fn, 1),
							aRd = Math.max(i2 - fn, 1),
							a1Z = Math.min(i0 + fn, acX),
							a1Y = Math.min(i2 + fn, aDN),
							jF = acZ(i0, a1Z - i0, i2 - fn, ahU, aDN, 1, player),
							jG = acZ(i0 - 1, i0 - aDM - 1, i2 - fn, ahU, aDN, -1, player),
							a1Z = acZ(i0, a1Z - i0, i2 + fn, ahU, aDN, 1, player),
							aDM = acZ(i0 - 1, i0 - aDM - 1, i2 + fn, ahU, aDN, -1, player),
							acc = acd(i2, a1Y - i2 - 1, i0 - fn, ahU, acX, 1, player),
							ace = acd(i2 - 1, i2 - aRd - 2, i0 - fn, ahU, acX, -1, player),
							a1Y = acd(i2, a1Y - i2 - 1, i0 + fn, ahU, acX, 1, player),
							aRd = acd(i2 - 1, i2 - aRd - 2, i0 + fn, ahU, acX, -1, player);
						if (acY = ach(acY, jF, acU), acY = ach(acY, jG, acU), acY = ach(acY, a1Z, acU), acY = ach(acY, aDM, acU), acY = ach(acY, acc, acU), acY = ach(acY, ace, acU), acY = ach(acY, a1Y, acU), 0 <= (acY = ach(acY, aRd, acU)) &&
							fn * fn >= bP.jH(acY, acU)) return acY
					}
					return -1
				}(acU, acV, ahU, player);
				if (-1 === ahE) break;
				var id = ad.fS(bP.fa(ahE));
				if (bQ.lv.aft(player, id)) return !! function(player, ahE, acU) {
					for (var ic = bP.jc(ahE, acU), aC = 0; aC < 4; aC++) {
						var fW = bP.ja(ahE, ic);
						if (ad.aMr(bP.fa(fW), player)) return bR.gM[6] = ic, 1;
						ic = (ic + 1) % 4
					}
					return
				}(player, ahE, acU) && (bR.gM[7] = ahE, !0);
				ahU.push(id)
			}
		return !1
	}
}

function dy() {
	this.aZr = [L(560), L(561), L(562), L(563), L(564), L(565), L(566), L(567), L(568), L(569), L(570), L(571), L(572), L(573), L(574), L(575)];
	var ahX = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aFr = new Array(ahX.length), this.dv = function() {
		var h = bm.buffer.data[155].value.split(";"),
			m1 = h.length;
		if (function() {
				for (var fk = ahX.length, aC = 0; aC < fk; aC++) ba.aFr[aC] = ahX[aC]
			}(), !(m1 > ahX.length))
			for (var aC = 0; aC < m1; aC++) h[aC].length && (this.aFr[aC] = h[aC])
	}, this.aZt = function(eT, code) {
		for (var aFr = this.aFr, ahZ = ahX, pY = (aFr[eT] = code, ""), fk = aFr.length, aha = [], aC = 0; aC < fk; aC++) aha.push(aFr[aC] === ahZ[aC] ? "" : aFr[aC]);
		fk--;
		for (aC = 0; aC < fk; aC++) pY += aha[aC] + ";";
		bm.rv.q1(155, pY += aha[fk])
	}, this.aZq = function() {
		bm.rv.q1(155, ""), this.dv()
	}, this.eu = function(code, eT) {
		return code === this.aFr[eT] || code === this.aFr[eT + 1]
	}
}

function dk() {
	var ahb = new Array(1),
		ahc = new Array(1),
		ahd = 20,
		ei = 0,
		ahe = !1;

	function ahg() {
		ahd++, bt.play()
	}
	this.dv = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				ahc[aC] = 0, ahb[aC] = document.createElement("audio"), ahb[aC].src = src, ahb[aC].setAttribute("preload", "auto"), ahb[aC].setAttribute("controls", "none"), ahb[aC].style.display = "none", ahb[aC].onpause = function() {
					ahc[aC] = 1
				}, ahb[aC].oncanplaythrough = function() {
					ahc[aC] = 0 === ahc[aC] ? 1 : ahc[aC]
				}, document.body.appendChild(ahb[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			ahe = !0
		}
	}, this.xy = function() {
		if (ahe) {
			ahe = !1;
			for (var aC = 0; 0 <= aC; aC--) ahb[aC].onpause = null, ahb[aC].oncanplaythrough = null, u.removeChild(document.body, ahb[aC]), ahb[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bt.play()
	}), this.play = function() {
		if (ahe) {
			var el = performance.now();
			if (ei + 66 < el)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === ahc[aC]) return ei = el, ahc[aC] = 2, void ahb[aC].play();
			0 < ahd && (ahd--, setTimeout(ahg, 66))
		}
	}
}

function cj() {
	this.aCN = function() {
		var ahj;
		return !(am.lc < 3 || ah.hY[mh[0]] >= aE.kq >> 1) && (aE.ih ? 9 !== aE.lO && (ahj = af.aOt(), !(2 * af.aOu(bk.lf()) >= ahj)) : function() {
			if (8 === aE.lO) return !1;
			var ahj = af.aOt();
			if (2 * ah.hm[mh[0]] >= ahj) return !1;
			return !0
		}())
	}
}

function cJ() {
	this.dv = function() {
		if (0 === aE.data.sResourcesType) {
			for (var agX = aE.l6, hm = ah.hm, aC = 0; aC < agX; aC++) hm[aC] = 512;
			var agY = aE.a0r,
				lJ = aF.lJ,
				iU = aF.iU;
			for (aC = agX; aC < agY; aC++) hm[aC] = lJ[iU[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fk = aE.a0r, hm = ah.hm, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fk; aC++) hm[aC] = sResourcesValue
		} : function() {
			for (var fk = aE.a0r, hm = ah.hm, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fk; aC++) hm[aC] = sResourcesData[aC]
		})();
		bg.ne[8] = ah.hm[aE.fU]
	}
}

function da() {
	var aJC = 501,
		ahr = (this.aho = new Uint32Array(aJC), this.a7Q = new Uint32Array(aJC), this.aFW = new Uint16Array(aJC), this.ahp = 0, this.ahq = 0, 1),
		yG = 0;

	function ahu(self) {
		self.max.fill(0)
	}

	function ahw(self, aC) {
		self.max[0] = Math.max(self.aho[aC], self.max[0]), self.max[1] = Math.max(self.a7Q[aC], self.max[1]), self.max[2] = Math.max(self.aFW[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.ahs = 0, this.ne = new Array(21), this.aht = null, this.dw = function() {
		this.aht = [L(576), L(577), L(578), L(579), L(580), L(581), L(582), L(583), L(401), L(402), L(584), L(585), L(586), L(587), "", L(588), L(589), L(590), L(359), L(591), L(592)]
	}, this.dv = function() {
		this.ahp = 0, this.ahq = 0, ahr = 1, this.ahs = 0, yG = 0, ahu(this), this.ne.fill(0)
	}, this.aa1 = function() {
		return 2 <= this.ahp && !this.ahq
	}, this.aAW = function() {
		0 !== bi.l3() && (this.ahq = 1, bh.iX) && bh.uN()
	}, this.sq = function(player, jO) {
		bD.h6.a7K(player) && (this.ne[0] += jO + 1, this.ne[1]++, this.ne[12] += bR.gH[1])
	}, this.sL = function(player, ry) {
		__fx.donationsTracker.logDonation(player, ry, bR.gH[0], aX.a90());
		player === aE.fU && (aO.sL(bR.gH[0], bR.gH[1], ry), this.ne[12] += bR.gH[1], this.ne[16] += bR.gH[0]), ry === aE.fU && (aO.aAm(bR.gH[0], player), this.ne[10] += bR.gH[0])
	}, this.su = function(player) {
		bD.h6.a7K(player) && (this.ne[2]++, this.ne[12] += bR.gH[1])
	}, this.t2 = function(player) {
		bD.h6.a7K(player) && (this.ne[19]++, this.ne[12] += bR.gH[1])
	}, this.agR = function(player) {
		bD.h6.a7K(player) && this.ne[20]++
	}, this.hA = function(player, a87, eT) {
		bD.h6.a7K(player) && (this.ne[eT] += a87)
	}, this.ep = function() {
		var self;
		this.ahs || 0 < yG-- || ((self = this).aho[self.ahp] = ah.hY[aE.fU], self.a7Q[self.ahp] = ah.hm[aE.fU], self.aFW[self.ahp] = af.aFX(aE.fU), ahw(self, self.ahp), self.ahp++, self.ahp === aJC && function(self) {
			ahu(self), ahw(self, 0), self.ahp = 1 + bO.gB(aJC, 2);
			for (var aC = 1; aC < self.ahp; aC++) self.aho[aC] = self.aho[2 * aC], self.a7Q[aC] = self.a7Q[2 * aC], self.aFW[aC] = self.aFW[2 * aC], ahw(self, aC);
			ahr *= 2
		}(self), yG = ahr - 1, bh.nV(), 0 === ah.ni[aE.fU] && (self.ahs = bi.l3()))
	}
}

function db() {
	this.j = 0, this.k = 0, this.vc = 0, this.vd = 0, this.ahy = 0, this.ahz = 0, this.aCb = 0, this.wI = 0;
	var ai1 = this.ai0 = 0;
	this.ai2 = 0, this.ai3 = 0, this.ai4 = 0, this.aBw = 0, this.eT = 0, this.aF7 = null, this.iX = !1, this.ai5 = -1, this.ai6 = !1, this.ai7 = [0, 0], this.dw = function() {
		this.aF7 = [L(593), L(135, 0, "Balance"), L(134, 0, "Interest"), L(594)]
	}, this.dv = function() {
		this.iX = !1, this.ai5 = -1, this.ai6 = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fn = a1.a2.ix() && i.j < i.k ? 1 : a1.a2.ix() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fn * this.j), this.j -= a1.a2.ix() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.aBw = Math.floor(this.k / 150), this.aBw = Math.max(this.aBw, 1.5), this.vc = Math.floor(1 + .02 * this
			.j), this.vd = Math.floor(1 + .04 * this.j), this.aCb = this.vd, ai1 = Math.floor(.75 * this.aCb), this.wI = Math.floor(1 + .075 * this.j), this.ai2 = Math.floor(1 + .1125 * this.j), this.ai3 = Math.floor(this.j * (a1.a2.ix() ? .03 :
				.029)), this.ai3 = Math.max(this.ai3, 4), this.ai4 = Math.floor(.035 * this.j), this.ai4 = Math.max(this.ai4, 4), this.ai0 = this.k - 2 * this.aCb - this.wI - this.ai2, this.iX && this.ai8()
	}, this.hy = function(mL, mM) {
		var a0u, a0t;
		return !!this.iX && (a0t = mL, a0u = mM, mL -= bO.gB(i.j - this.j, 2), mM -= bO.gB(i.k - this.k, 2), mL < 0 || mM < 0 || mL >= this.j || mM >= this.k || mL >= this.j - this.ai2 && mM < this.ai2 ? -1 !== aN.hy(a0t, a0u) || bF.hy(a0t,
			a0u) || this.uN() : mM < this.ai2 || (mM < this.k - this.wI ? (this.ai6 = !0, this.ai5 = (mL - 2 * this.vc - this.ahy) / this.ahz, 3 !== this.eT && (bi.e2 = !0)) : (a0t = (a0t = Math.floor(mL / (this.j / this.aF7.length))) < 0 ?
				0 : a0t >= this.aF7.length ? this.aF7.length - 1 : a0t) !== this.eT && (this.eT = a0t, this.ai8(), bi.e2 = !0)), !0)
	}, this.a5L = function(mL, mM) {
		return this.ai7[0] = mL, this.ai7[1] = mM, !(!this.iX || !this.ai6 || (mL -= bO.gB(i.j - this.j, 2), mM = this.ai5, this.ai5 = (mL - 2 * this.vc - this.ahy) / this.ahz, (0 <= this.ai5 && this.ai5 <= 1 || 0 <= mM && mM <= 1) && (bi.e2 = !
			0), 0))
	}, this.a5k = function() {
		this.ai6 && (this.ai6 = !1)
	}, this.a5w = function() {
		this.iX ? this.uN() : this.show()
	}, this.show = function() {
		bg.aa1() && (this.iX = !0, this.ai8())
	}, this.uN = function() {
		this.iX = !1, this.ai5 = -1, bi.e2 = !0
	}, this.ai8 = function() {
		this.eT < 2 ? this.ahy = aR.measureText(bD.pc.a35(bg.max[this.eT]), bD.tO.ux(0, this.ai3)) : 2 === this.eT && (this.ahy = aR.measureText(bD.pc.a80(6, 2), bD.tO.ux(0, this.ai3))), this.ahz = this.j - 2 * this.vc - this.ahy - this.vd
	}, this.nV = function() {
		this.iX && this.ai8()
	}, this.yv = function() {
		this.iX && this.aCs()
	}, this.aCs = function() {
		var fr = bO.gB(i.j - this.j, 2),
			ft = bO.gB(i.k - this.k, 2);
		yw.setTransform(1, 0, 0, 1, fr, ft), yw.fillStyle = bE.qM, yw.fillRect(0, this.ai2, this.j, this.k - this.ai2), this.ai9(), this.aYg(), yw.strokeRect(0, 0, this.j, this.k), bD.tO.textAlign(yw, 2), yw.font = bD.tO.ux(0, this.ai3), 0 ===
			this.eT ? this.aiA(bg.aho, fr, ft) : 1 === this.eT ? this.aiA(bg.a7Q, fr, ft) : 2 === this.eT ? this.aiB(fr, ft) : 3 === this.eT && (this.aiC(fr, ft), this.aiD(fr, ft)), aN.a9q(Math.floor(fr + this.j - .725 * this.ai2), Math.floor(
				ft + .275 * this.ai2), Math.floor(.45 * this.ai2)), yw.setTransform(1, 0, 0, 1, 0, 0)
	}, this.ai9 = function() {
		var aC, el;
		for (yw.lineWidth = this.aBw, bD.tO.textBaseline(yw, 1), bD.tO.textAlign(yw, 1), yw.strokeStyle = bE.qP, yw.font = bD.tO.ux(1, this.ai4), el = this.j / this.aF7.length, yw.fillStyle = bE.ql, yw.fillRect(this.eT * el, this.k - this.wI, el,
				this.wI), yw.fillStyle = bE.qP, yw.fillRect(0, this.k - this.wI - .5 * this.aBw, this.j, this.aBw), aC = 1; aC <= 3; aC++) yw.fillRect(aC * el, this.k - this.wI, this.aBw, this.wI);
		for (aC = this.aF7.length - 1; 0 <= aC; aC--) yw.fillText(bD.p6.a6u(this.aF7[aC], 0, .9 * el), (aC + .5) * el, this.k - .46 * this.wI)
	}, this.aYg = function() {
		yw.fillStyle = bE.rD, yw.fillRect(0, 0, this.j, this.ai2), yw.fillStyle = bE.qP, yw.fillRect(0, this.ai2 - .5 * this.aBw, this.j, this.aBw), yw.font = bD.tO.ux(1, .39 * this.ai2), yw.fillText(bD.p6.a6u(L(595), 0, .8 * this.j), Math.floor(
			this.j / 2), Math.floor(.55 * this.ai2))
	}, this.aiA = function(h, fr, ft) {
		var m1 = bg.max[this.eT],
			a6E = (yw.setTransform(1, 0, 0, 1, fr + 2 * this.vc + this.ahy, ft + this.aCb + this.ai2), yw.lineWidth = 2, this.ai0 / Math.sqrt(m1));
		yw.beginPath(), yw.moveTo(this.ahz, this.ai0 - a6E * Math.sqrt(h[bg.ahp - 1]));
		for (var aC = bg.ahp - 2; 0 <= aC; aC--) yw.lineTo(aC * this.ahz / (bg.ahp - 1), this.ai0 - a6E * Math.sqrt(h[aC]));
		yw.stroke();
		fr = this.a9q(h, a6E, .5);
		fr < .95 && yw.fillText(bD.pc.a35(m1), -this.vc, 0), .05 < Math.abs(fr - .5) && yw.fillText(bD.pc.a35(Math.floor(m1 / 4)), -this.vc, Math.floor(this.ai0 / 2)), .05 < fr && yw.fillText("0", -this.vc, this.ai0)
	}, this.aiB = function(fr, ft) {
		yw.setTransform(1, 0, 0, 1, fr + 2 * this.vc + this.ahy, ft + this.aCb + this.ai2), yw.lineWidth = 2;
		var a6E = this.ai0 / Math.max(bg.max[this.eT], 1);
		yw.beginPath(), yw.moveTo(this.ahz, this.ai0 - a6E * bg.aFW[bg.ahp - 1]);
		for (var aC = bg.ahp - 2; 0 <= aC; aC--) yw.lineTo(aC * this.ahz / (bg.ahp - 1), this.ai0 - a6E * bg.aFW[aC]);
		yw.stroke();
		fr = this.a9q(bg.aFW, a6E, 1), ft = bg.max[this.eT] / 100;
		fr < .95 && yw.fillText(bD.pc.a80(ft, 2), -this.vc, 0), .05 < Math.abs(fr - .5) && yw.fillText(bD.pc.a80(ft / 2, 2), -this.vc, Math.floor(this.ai0 / 2)), .05 < fr && yw.fillText(bD.pc.a80(0, 2), -this.vc, this.ai0)
	}, this.aiC = function(fr, ft) {
		yw.setTransform(1, 0, 0, 1, fr + .34 * this.j, ft + 2 * ai1 + this.ai2), bD.tO.textAlign(yw, 2);
		for (var aEp = this.k - 4 * ai1 - this.wI - this.ai2, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) yw.fillText(bD.p6.a6u(bg.aht[h[aC]], 0, .31 * this.j), 0, aC * aEp / 9);
		var gC = bg.ne;
		for (yw.setTransform(1, 0, 0, 1, fr + .39 * this.j, ft + 2 * ai1 + this.ai2), bD.tO.textAlign(yw, 0), yw.fillText(bD.pc.a80(100 * gC[0] / (1024 * Math.max(gC[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) yw.fillText(gC[h[aC]].toString(), 0,
			aC * aEp / 9);
		yw.fillText(bD.pc.a80(100 * (1 - ah.hY[aE.fU] / gC[7]), 0), 0, aEp)
	}, this.aiD = function(fr, ft) {
		yw.setTransform(1, 0, 0, 1, fr + .79 * this.j, ft + 2 * ai1 + this.ai2), bD.tO.textAlign(yw, 2);
		var aC, aEp = this.k - 4 * ai1 - this.wI - this.ai2;
		for (yw.fillStyle = bE.qg, aC = 2; 0 <= aC; aC--) yw.fillText(bD.p6.a6u(bg.aht[aC + 8], 0, .31 * this.j), 0, aC * aEp / 9);
		yw.fillText(bD.p6.a6u(bg.aht[18], 0, .31 * this.j), 0, 3 * aEp / 9), yw.fillStyle = bE.qf, yw.fillText(bD.p6.a6u(bg.aht[11], 0, .31 * this.j), 0, 4 * aEp / 9), yw.fillStyle = bE.r0, yw.fillText(bD.p6.a6u(bg.aht[13], 0, .31 * this.j), 0,
				5 * aEp / 9), yw.fillText(bD.p6.a6u(bg.aht[15], 0, .31 * this.j), 0, 6 * aEp / 9), yw.fillText(bD.p6.a6u(bg.aht[16], 0, .31 * this.j), 0, 7 * aEp / 9), yw.fillText(bD.p6.a6u(bg.aht[12], 0, .31 * this.j), 0, 8 * aEp / 9), yw
			.fillStyle = bE.qz, yw.fillText(bD.p6.a6u(bg.aht[17], 0, .31 * this.j), 0, aEp), yw.fillStyle = bE.qg;
		var gC = bg.ne,
			aJy = gC[8] + gC[9] + gC[10] + gC[18],
			aJy = bD.pc.a35(aJy),
			aXM = yw.measureText(aJy).width,
			fr = (yw.setTransform(1, 0, 0, 1, fr + .83 * this.j + aXM, ft + 2 * ai1 + this.ai2), yw.fillText(bD.pc.a35(gC[8]), 0, 0), yw.fillText(bD.pc.a35(gC[9]), 0, aEp / 9), yw.fillText(bD.pc.a35(gC[10]), 0, 2 * aEp / 9), yw.fillText(bD.pc
				.a35(gC[18]), 0, 3 * aEp / 9), yw.fillStyle = bE.qf, yw.fillText(aJy, 0, 4 * aEp / 9), yw.fillStyle = bE.r0, yw.fillText(bD.pc.a35(gC[13]), 0, 5 * aEp / 9), yw.fillText(bD.pc.a35(gC[15]), 0, 6 * aEp / 9), yw.fillText(bD.pc
				.a35(gC[16]), 0, 7 * aEp / 9), yw.fillText(bD.pc.a35(gC[12]), 0, 8 * aEp / 9), gC[12] + gC[13] + gC[15] + gC[16]);
		yw.fillStyle = bE.qz, yw.fillText(bD.pc.a35(fr), 0, aEp), yw.fillStyle = bE.qP
	}, this.a9q = function(h, a6E, aDV) {
		var aC, e, gT;
		return this.ai5 < 0 || 1 < this.ai5 ? .25 : (aC = this.ai5 * (bg.ahp - 1), gT = h[e = Math.floor(aC)], gT += (aC - e) * (h[e < bg.ahp - 1 ? e + 1 : e] - gT), yw.strokeStyle = bE.qS, .04 < this.ai5 && this.aiF(0, this.ai0 - a6E * Math.pow(
				gT, aDV), aC * this.ahz / (bg.ahp - 1), this.ai0 - a6E * Math.pow(gT, aDV)), .04 < gT / bg.max[this.eT] && this.aiF(aC * this.ahz / (bg.ahp - 1), this.ai0, aC * this.ahz / (bg.ahp - 1), this.ai0 - a6E * Math.pow(gT, aDV)), yw
			.fillStyle = bE.r2, yw.beginPath(), yw.arc(aC * this.ahz / (bg.ahp - 1), this.ai0 - a6E * Math.pow(gT, aDV), Math.max(2, .014 * this.k), 0, 2 * Math.PI), yw.fill(), h = this.ai5 * bi.aFY, h = 0 === ah.ni[aE.fU] ? Math.floor(h * bg
				.ahs) : Math.floor(h * bi.l3()), yw.fillStyle = bE.qP, yw.fillText(1 === aDV ? bD.pc.a80(gT / 100, 2) : bD.pc.a35(Math.floor(gT)), -this.vc, this.ai0 - a6E * Math.pow(gT, aDV)), bD.tO.textAlign(yw, 1), yw.fillText(aX.aFL(h),
				aC * this.ahz / (bg.ahp - 1), this.ai0 + this.ai3 - (a1.a2.ix() ? 2 : 0) - this.aBw), bD.tO.textAlign(yw, 2), a6E * Math.pow(gT, aDV) / this.ai0)
	}, this.aiF = function(o9, oA, oM, oN) {
		yw.beginPath(), yw.moveTo(o9, oA), yw.lineTo(oM, oN), yw.stroke()
	}
}

function c7() {
	this.aiG = "https://territorial.io/changelog", this.aa2 = "https://territorial.io/terms", this.aa3 = "https://territorial.io/privacy", this.aiH = "https://territorial.io/tutorial", this.aiI = "https://territorial.io/players", this.aiJ =
		"https://territorial.io/clans", this.aiK = "https://territorial.io/clan-results", this.aWV = "https://patreon.com/c/territorial", this.aGx = "https://play.google.com/store/apps/details?id=territorial.io", this.a4u =
		"https://apps.apple.com/app/id1581110913", this.aGy = "https://discord.gg/pthqvpTXmh", this.aGz = "https://www.instagram.com/davidtschacher/", this.a2d =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dJ() {
	this.z = new aiL, this.a1u = new aiM, this.dv = function() {
		this.z.dv()
	}, this.ep = function() {
		0 !== this.z.wz && this.z.wz--
	}
}

function aiM() {
	this.yv = function() {
		if (0 !== bS.z.wz && (yw.globalAlpha = Math.min(bS.z.wz / 580, 1), yw.drawImage(bS.z.aiP, 1 + aT.a1s(), 1 + aT.a1t()), yw.globalAlpha = 1, aE.i9)) {
			for (var o9 = jP / iz, oA = jQ / iz, oM = (i.j + jP) / iz, oN = (i.k + jQ) / iz, hJ = bS.z.aiQ * iz, aiR = bS.z.aiR, aC = aE.l6 - 1; 0 <= aC; aC--) ! function(aC, hJ, o9, oA, oM, oN, aiR) {
				var highlight;
				0 === ah.ni[aC] || 0 === ah.hY[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (hJ *= 2), oM = i.j * ((ah.je[aC] + ah.jf[aC] + 1) / 2 - o9) / (oM - o9) - .5 * hJ, o9 = i.k * ((ah.jg[
					aC] + ah.jh[aC] + 1) / 2 - oA) / (oN - oA) - .5 * hJ, oM > i.j) || o9 > i.k || oM < -hJ || o9 < -hJ || (highlight ? yw.setTransform(2 * iz, 0, 0, 2 * iz, oM, o9) : yw.setTransform(iz, 0, 0, iz, oM, o9), yw.drawImage(
					aiR[aE.ih ? bj.fi[aC] : 1], 0, 0))
			}(aC, hJ, o9, oA, oM, oN, aiR);
			yw.setTransform(iz, 0, 0, iz, 0, 0)
		}
	}
}

function aiL() {
	this.aiQ = 28, this.wz = 0, this.aiP = null;
	var aiT = this.aiR = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function aiX(ij, aiY) {
		var fr, ft, fW, j8, a6f = bD.tO.a6g(ij, ij),
			iq = bD.tO.getContext(a6f, !0),
			im = bD.tO.getImageData(iq, ij, ij),
			a2I = im.data,
			m1 = (ij >> 1) - .5,
			aiZ = .5 + m1;
		for (aiZ *= aiZ, ft = 0; ft < ij; ft++)
			for (fr = 0; fr < ij; fr++) j8 = (j8 = fr - m1) * j8 + (j8 = ft - m1) * j8, a2I[fW = 4 * (ft * ij + fr)] = aiY[0], a2I[1 + fW] = aiY[1], a2I[2 + fW] = aiY[2], a2I[3 + fW] = (aiZ - j8) * aiY[3] / aiZ;
		return iq.putImageData(im, 0, 0), a6f
	}

	function ahT(aC, iq, a6f, ij) {
		var highlight, fr, ft;
		0 !== ah.ni[aC] && 0 !== ah.hY[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (ij *= 2), fr = ah.je[aC] + ah.jf[aC] + 1 - ij - 2 >> 1, ft = ah.jg[aC] + ah.jh[aC] + 1 - ij - 2 >> 1, highlight ? iq
			.drawImage(a6f[aE.ih ? 9 === aE.lO && 5 === aF.iU[aC] ? 3 : bj.fi[aC] : aC < aE.l6 ? 1 : 0], fr, ft, ij, ij) : iq.drawImage(a6f[aE.ih ? 9 === aE.lO && 5 === aF.iU[aC] ? 3 : bj.fi[aC] : aC < aE.l6 ? 1 : 0], fr, ft))
	}
	this.dv = function() {
		var uh;
		this.wz = 700,
			function(uh) {
				var ij = uh.aiQ;
				if (uh.aiR = [], aiT = [], aE.ih) {
					for (var aC = 0; aC <= aE.a0y; aC++) uh.aiR.push(aiX(ij, bj.afo[bj.lT[aC]])), aiT.push(aiX(ij >> 1, bj.afo[bj.lT[aC]]));
					9 === aE.lO && aiT.push(aiX(ij, bj.afo[1]))
				} else uh.aiR.push(aiX(ij, bj.afo[7])), uh.aiR.push(aiX(ij, bj.afo[4])), aiT.push(aiX(ij >> 1, bj.afo[7]))
			}(this),
			function(uh, aid) {
				var aC, aiP = uh.aiP,
					iq = bD.tO.getContext(aiP, !0),
					fk = aE.fh,
					ij = uh.aiQ >> 1;
				iq.imageSmoothingEnabled = !1, iq.setTransform(1, 0, 0, 1, 0, 0), aid && iq.clearRect(0, 0, aiP.width, aiP.height);
				if (9 === aE.lO) {
					ij <<= 1;
					uh = b0.lX[5];
					for (aC = fk - uh; aC < fk; aC++) ahT(aC, iq, aiT, ij);
					fk -= uh, ij >>= 1
				}
				for (aC = aE.l6; aC < fk; aC++) ahT(aC, iq, aiT, ij)
			}(this, null !== (uh = this).aiP && uh.aiP.width === bV.fv - 2 && uh.aiP.height === bV.fw - 2 || (uh.aiP = bD.tO.a6g(bV.fv - 2, bV.fw - 2), !1)), aE.i9 || this.a8I()
	}, this.afp = aiX, this.a8I = function() {
		for (var fk = aE.l6, ij = this.aiQ, aiR = this.aiR, iq = bD.tO.getContext(this.aiP, !0), aC = 0; aC < fk; aC++) ahT(aC, iq, aiR, ij)
	}
}

function dK() {
	function aig() {
		8 === aE.lO && 1 === aE.a3m && bU.a3Q.a3l()
	}

	function aif(player) {
		aE.i9 ? (al.aNC(player), am.aQf(), aE.lQ && aE.sm.ep()) : b4.aHL(player)
	}
	this.sE = function(player) {
		aO.a40(player, player === aE.fU ? 21 : 22), aif(player), aig()
	}, this.sj = function(player) {
		1 === aE.a3m && 0 !== ah.ni[player] && 2 !== ah.a7G[player] && aif(player), aE.a3p--, aE.a3o--, aO.a40(player, 4), bD.h6.hw(2) && aX.nU(!0), aig()
	}
}

function dU() {
	this.acP = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aEm = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.qP, "rgb(170,170,170)"
	], this.aih = [bE.qP, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.qP, bE.qG], this.aii = [bE.qG, bE.qP, bE.qP, bE.qP, bE.qG, bE.qG, bE.qG, bE.qG, bE.qP];
	var aQp = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aQ8 = ["rgba(" + aQp[0] + ",", "rgba(" + aQp[1] + ",", "rgba(" + aQp[2] + ",", "rgba(" + aQp[3] + ",", "rgba(" + aQp[4] + ",", "rgba(" + aQp[5] + ",", "rgba(" + aQp[6] + ",", "rgba(" + aQp[7] + ",", "rgba(" + aQp[8] + ",", "rgba(" + aQp[9] +
			","
		], this.aQ9 = ["rgb(" + aQp[0] + ")", "rgb(" + aQp[1] + ")", "rgb(" + aQp[2] + ")", "rgb(" + aQp[3] + ")", "rgb(" + aQp[4] + ")", "rgb(" + aQp[5] + ")", "rgb(" + aQp[6] + ")", "rgb(" + aQp[7] + ")", "rgb(" + aQp[8] + ")", "rgb(" + aQp[9] +
			")"
		], this.a49 = null, this.afo = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aXn = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lT = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fi = new Uint8Array(aE.fh), this.aEn = new Uint8Array(aE.fh), this.a14 = new Uint16Array(aE.fh), this.a15 = new Uint16Array(this.lT.length + 1), this.a16 = new Uint16Array(this.lT.length), this
		.dw = function() {
			this.a49 = [L(596), L(597), L(598), L(599), L(600), L(601), L(602), L(603), L(604)]
		}, this.dv = function() {
			if (this.fi.fill(0), this.aEn.fill(0), this.aij(), aE.ih) {
				if (9 === aE.lO) {
					for (var fi = bj.fi, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fi[aC] = 1;
					var fk = aE.fh;
					for (aC = aE.data.teamPlayerCount[7]; aC < fk; aC++) fi[aC] = 2;
					bj.lT[1] = 7, bj.lT[2] = 8
				} else aE.lQ ? function() {
					var aXn = bj.aXn,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.l6 - 1; 0 <= aC; aC--) colorsData[aC] = az.kN(262144);
					var aiu = 0,
						g0 = 768,
						aXm = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fn = 0, g4 = 0; g4 < 3; g4++) fn += Math.abs(aXn[aC][g4] - aXm[g4]);
							fn < g0 && (aiu = aC, g0 = fn)
						} var aiv = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) aiv[aC] = teamPlayerCount[aC];
					var lT = bj.lT,
						aiw = new Uint8Array(9),
						hD = (lT[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) aiv[aC] && (aiw[aC] = hD, lT[hD++] = aC);
					var kM = aE.l6,
						fi = bj.fi;
					aiv[aiu] ? (aiv[aiu]--, fi[0] = aiw[aiu]) : kM = 0;
					var eu = 0;
					for (aC = kM; aC < aE.a0r; aC++) {
						var ie = lT[eu];
						if (aiv[ie]) aiv[ie]--, fi[aC] = aiw[ie];
						else if (aC--, 9 <= ++eu) return console.log("error 325")
					}
				}() : this.ep();
				! function() {
					for (var fk = aE.fh, a14 = bj.a14, a15 = bj.a15, a16 = bj.a16, fi = bj.fi, lT = bj.lT, a0x = lT.length, buffer = new Array(a0x), aC = 0; aC < a0x; aC++) buffer[aC] = [];
					for (aC = 0; aC < fk; aC++) buffer[lT[fi[aC]]].push(aC);
					for (aC = 1; aC <= a0x; aC++) a15[aC] = a15[aC - 1] + buffer[aC - 1].length;
					for (aC = 0; aC < a0x; aC++)
						for (var hD = buffer[aC].length, m1 = a15[aC], ie = 0; ie < hD; ie++) a14[ie + m1] = buffer[aC][ie];
					var l6 = aE.l6;
					for (aC = 0; aC < a0x; aC++)
						for (hD = buffer[aC].length, m1 = a15[aC], ie = 0; ie < hD; ie++)
							if (a14[ie + m1] >= l6) {
								a16[aC] = ie;
								break
							}
				}(), ! function() {
					for (var fk = aE.fh, fi = bj.fi, aEn = bj.aEn, lT = bj.lT, aC = 0; aC < fk; aC++) aEn[aC] = lT[fi[aC]];
					9 === aE.lO && aEn.fill(1, fk - b0.lX[5])
				}()
			}
		}, this.aij = function() {
			for (var aC = this.lT.length - 1; 0 <= aC; aC--) this.lT[aC] = aC
		}, this.ep = function() {
			var a2u = new Uint8Array(aE.l6),
				a2v = new Uint8Array(aE.l6),
				aio = new Uint16Array(8),
				aip = new Uint16Array(this.lT.length);
			this.aiq(a2u, a2v, aio, 1), this.aMh(aio), this.air(aip, a2u, a2v), this.ais(a2u, a2v, aip), this.ait()
		}, this.aiq = function(a2u, a2v, aiv, aix) {
			for (var g4, e, aiy, fk = this.lT.length - aix, h = new Uint16Array(fk), aXn = this.aXn, colorsData = aE.data.colorsData, aC = aE.l6 - 1; 0 <= aC; aC--) {
				for (g4 = fk; aix <= g4; g4--) h[g4 - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aXn[g4][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aXn[g4][1]) + Math.abs(4 * (63 & colorsData[aC]) - aXn[g4][2]);
				for (aiy = 768, g4 = fk - 1; 0 <= g4; g4--) h[e = (g4 + aC) % fk] < aiy && (aiy = h[e], a2u[aC] = e);
				for (aiv[a2u[aC]] += 4, aiy = 768, g4 = fk - 1; 0 <= g4; g4--) h[e = (g4 + aC) % fk] < aiy && e !== a2u[aC] && (aiy = h[e], a2v[aC] = e);
				aiv[a2v[aC]]++
			}
		}, this.aMh = function(aiv) {
			for (var g4, m3, fk = this.lT.length - 1, aC = fk; 0 <= aC; aC--) this.lT[aC] = aC;
			for (aC = fk - 1; 0 <= aC; aC--) aiv[aC]++;
			for (aC = 1; aC <= fk; aC++) {
				for (m3 = 0, g4 = 1; g4 < fk; g4++) aiv[g4] > aiv[m3] && (m3 = g4);
				aiv[m3] = 0, this.lT[aC] = m3 + 1
			}
		}, this.air = function(aip, a2u, a2v) {
			var g4, a4Y, eu, fn, e, oL, vt, aiz = this.lT.length - 1,
				ts = new Uint16Array(aiz),
				aj0 = [],
				aj1 = 0,
				a4X = [],
				aj2 = [];
			loop: for (var aC = 0; aC < aE.l6; aC++)
				if (null !== (a4Y = bD.pc.pq(ah.a4W[aC]))) {
					for (g4 = a4X.length - 1; 0 <= g4; g4--)
						if (a4Y === a4X[g4]) {
							aj2[g4].push(aC), aj1 = Math.max(aj1, aj2[g4].length);
							continue loop
						} a4X.push(a4Y), aj0.push(!1), aj2.push([aC]), aj1 = Math.max(aj1, 1)
				}
			for (; 2 < aE.a0y && aj1 > bO.gB(aE.l6, aE.a0y);) aE.a0y--, aE.lO--;
			for (g4 = a4X.length - 1; 0 <= g4; g4--) {
				for (fn = -1, eu = a4X.length - 1; 0 <= eu; eu--) !aj0[eu] && (-1 === fn || aj2[eu].length > aj2[fn].length) && (fn = eu);
				for (eu = aiz - 1; 0 <= eu; eu--) ts[eu] = 1;
				for (eu = aj2[fn].length - 1; 0 <= eu; eu--) ts[a2u[aj2[fn][eu]]] += 3, ts[a2v[aj2[fn][eu]]]++;
				for (aC = aiz - 1; 0 <= aC; aC--) {
					for (e = fn % aiz, eu = aiz - 1; 0 <= eu; eu--) ts[eu] > ts[e] && (e = eu);
					for (oL = -1, eu = aE.a0y; 0 < eu; eu--)
						if (this.lT[eu] === e + 1) {
							oL = eu;
							break
						} if (ts[e] = 0, -1 !== oL) {
						for (vt = 0, eu = aE.a0y; 0 < eu; eu--) aip[oL] > aip[eu] && vt++;
						if (vt !== aE.a0y - 1) {
							for (eu = aj2[fn].length - 1; 0 <= eu; eu--) aip[oL]++, this.fi[aj2[fn][eu]] = oL;
							break
						}
					}
				}
				aj0[fn] = !0
			}
		}, this.ais = function(a2u, a2v, aip) {
			for (var aC, j7, fk = this.lT.length - 1, border = bO.gB(aE.l6, aE.a0y), aj3 = (0 < aE.l6 % aE.a0y && border++, new Uint8Array(1 + fk)), g4 = fk; 1 <= g4; g4--) aj3[this.lT[g4]] = g4;
			for (aC = 0; aC < aE.l6; aC++) j7 = aj3[a2u[aC] + 1], 0 === this.fi[aC] && j7 <= aE.a0y && aip[j7] < border && (aip[j7]++, this.fi[aC] = j7);
			for (aC = 0; aC < aE.l6; aC++) j7 = aj3[a2v[aC] + 1], 0 === this.fi[aC] && j7 <= aE.a0y && aip[j7] < border && (aip[j7]++, this.fi[aC] = j7);
			for (g4 = aE.a0y; 1 <= g4; g4--)
				for (aC = aE.l6 - 1; 0 <= aC && !(aip[g4] >= border); aC--) 0 === this.fi[aC] && (aip[g4]++, this.fi[aC] = g4)
		}, this.ait = function() {
			if (aE.a0y < 8) aE.a0y++, aE.lO++, aE.a0z = 1;
			else
				for (var aC = aE.l6; aC < aE.fh; aC++) this.fi[aC] = 1 + aC % aE.a0y
		}
}

function dn() {
	this.hZ = function() {
		for (var fr, ft, aC = gg - 1; 0 <= aC; aC--) fr = bO.gB(gi[aC], 4) % bV.fv, ft = bO.gB(gi[aC], 4 * bV.fv), ah.je[gb] = Math.min(fr, ah.je[gb]), ah.jg[gb] = Math.min(ft, ah.jg[gb]), ah.jf[gb] = Math.max(fr, ah.jf[gb]), ah.jh[gb] = Math
			.max(ft, ah.jh[gb])
	}, this.gu = function() {
		var fn, hI, aC, fk = ah.hC[gb].length,
			fm = ad.fm;
		loop: for (aC = fk - 1; 0 <= aC; aC--) {
			for (fn = 3; 0 <= fn; fn--)
				if (hI = ah.hC[gb][aC] + fm[fn], ad.fb(hI) || ad.hK(hI) && ad.fc(hI) !== gb) {
					ad.kI(ah.hC[gb][aC], gb);
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
			for (var aSy = !1, aj4 = !1, fn = 3; 0 <= fn; fn--) {
				var hI = hQ[player][aC] + fm[fn];
				if (ad.aMr(hI, player)) continue loop;
				aSy = aSy || ad.j2(hI), aj4 = aj4 || ad.aMq(hI)
			}
			aSy ? hR[player].push(hQ[player][aC]) : aj4 ? g9[player].push(hQ[player][aC]) : ad.a1Q(hQ[player][aC], player), hQ[player][aC] = hQ[player][fk - 1], hQ[player].pop(), fk--
		}
	}, this.hO = function() {
		ah.hY[gf] -= gg
	}, this.hP = function(border) {
		for (var fk = border.length, aC = fk - 1; 0 <= aC; aC--) ad.a1l(gf, border[aC]) || (border[aC] = border[fk - 1], border.pop(), fk--)
	}, this.hS = function(border) {
		for (var fk = border.length, aC = fk - 1; 0 <= aC; aC--) !ad.a1l(gf, border[aC]) && ad.ff(border[aC]) && (border[aC] = border[fk - 1], border.pop(), fk--)
	}, this.hT = function(border) {
		for (var fn, hI, fk = border.length, fm = ad.fm, aC = fk - 1; 0 <= aC; aC--)
			for (fn = 3; 0 <= fn; fn--)
				if (hI = border[aC] + fm[fn], ad.aMr(hI, gf)) {
					ah.hQ[gf].push(border[aC]), border[aC] = border[fk - 1], border.pop(), fk--;
					break
				}
	}, this.hU = function() {
		for (var fn, hI, fm = ad.fm, aC = gg - 1; 0 <= aC; aC--)
			for (fn = 3; 0 <= fn; fn--) hI = gi[aC] + fm[fn], ad.a1o(gf, hI) && ad.aMx(hI) && (ah.hQ[gf].push(hI), ad.hF(hI, gf))
	}, this.hV = function() {
		var fr, ft;
		loop: for (; ah.jg[gf] < ah.jh[gf];) {
			for (fr = ah.jf[gf]; fr >= ah.je[gf]; fr--)
				if (ad.a1l(gf, 4 * (ah.jg[gf] * bV.fv + fr))) break loop;
			ah.jg[gf]++
		}
		loop: for (; ah.jg[gf] < ah.jh[gf];) {
			for (fr = ah.jf[gf]; fr >= ah.je[gf]; fr--)
				if (ad.a1l(gf, 4 * (ah.jh[gf] * bV.fv + fr))) break loop;
			ah.jh[gf]--
		}
		loop: for (; ah.je[gf] < ah.jf[gf];) {
			for (ft = ah.jh[gf]; ft >= ah.jg[gf]; ft--)
				if (ad.a1l(gf, 4 * (ft * bV.fv + ah.je[gf]))) break loop;
			ah.je[gf]++
		}
		loop: for (; ah.je[gf] < ah.jf[gf];) {
			for (ft = ah.jh[gf]; ft >= ah.jg[gf]; ft--)
				if (ad.a1l(gf, 4 * (ft * bV.fv + ah.jf[gf]))) break loop;
			ah.jf[gf]--
		}
	}, this.fd = function(player, kF) {
		return 0 === bj.fi[player] || bj.fi[player] !== bj.fi[kF]
	}, this.iH = function(player) {
		for (var aC, hJ, fk = ah.hQ[player].length, fm = ad.fm, fn = 3; 0 <= fn; fn--)
			for (hJ = fm[fn], aC = 0; aC < fk; aC++)
				if (ad.fb(ah.hQ[player][aC] + hJ)) return !0;
		return !1
	}, this.aN8 = function(player) {
		for (var aC, hJ, fk = ah.hQ[player].length, fm = ad.fm, fn = 3; 0 <= fn; fn--)
			for (hJ = fm[fn], aC = 0; aC < fk; aC++)
				if (ad.kH(ah.hQ[player][aC]) && ad.fb(ah.hQ[player][aC] + hJ)) return !0;
		return !1
	}, this.iK = function(a7M, a7N) {
		for (var aC, el, hJ, hI, agX = ah.hQ[a7M].length, agY = ah.hQ[a7N].length, fm = (agY < agX && (el = a7M, a7M = a7N, a7N = el, el = agX, agX = agY, 0), ad.fm), fn = 3; 0 <= fn; fn--)
			for (hJ = fm[fn], aC = 0; aC < agX; aC++)
				if (hI = ah.hQ[a7M][aC] + hJ, ad.hK(hI) && ad.fc(hI) === a7N) return !0;
		return !1
	}, this.aN9 = function(a7M, a7N) {
		for (var aC, hJ, hI, agX = ah.hQ[a7M].length, fm = ad.fm, fn = 3; 0 <= fn; fn--)
			for (hJ = fm[fn], aC = 0; aC < agX; aC++)
				if (ad.kH(ah.hQ[a7M][aC]) && (hI = ah.hQ[a7M][aC] + hJ, ad.hK(hI)) && ad.fc(hI) === a7N) return !0;
		return !1
	}
}

function dg() {
	this.sv = new aj5
}

function aj5() {
	this.iN = function(player) {
		bD.h6.a7H(player) && aO.a2F(80, L(605), 637, 0, bE.rG, bE.qM, -1, !1)
	}, this.iQ = function(player) {
		bD.h6.a7H(player) && aO.a2F(80, L(606), 637, 0, bE.rG, bE.qM, -1, !1)
	}
}

function aj6() {
	this.aj7 = 0, this.ep = function() {
		aP.ep(), aa.ep(), i.ep(), b1.z.ep(), ay.aMC(), bX.ed.ep(), bq.xB.ep(), bi.e2 && (bi.e2 = !1, ab.yv())
	}
}

function aj8() {
	this.ek = bi.ek, this.eT = 0, this.aj7 = 0, this.aMA = 0, this.aM8 = null, this.aj9 = 7, this.ajA = 0, this.dv = function() {
		this.aMA = 0, this.aM8 = [], this.eT = 0, this.aj7 = 0
	}, this.abK = function(aD) {
		if (aE.i9) this.aFZ(aD);
		else if (this.aM8.push(aD), 2 === aE.a3m) {
			for (var aC = 0; aC < this.aM8.length; aC++) bB.rp.ep(this.aM8[aC]);
			this.aM8 = []
		}
	}, this.aFZ = function(aD) {
		2 !== aE.a3m && (bB.rp.ep(aD), bC.ep(), aX.aFZ(this.aMA), this.aMA === aE.a8O ? (aE.sm.ep(), this.aMA = 0, this.eT = 0, this.aj7 = 0, this.ek = bi.ek) : (this.aMA++, ag.a8H(), ag.nU(!0), be.render()))
	}, this.ep = function() {
		i.ep(), aE.i9 ? (bi.e2 = aX.aFZ(-1) || bi.e2, nW()) : (0 !== this.eT || bi.ek >= this.ek && (this.ek += bi.aFY * Math.floor(1 + (bi.ek - this.ek) / bi.aFY), 2 === aE.a3m ? nI() : this.ajB(), this.eT++, 27 < bi.ek - this.ajA)) && this
		.ajC(), nR(), bi.e2 && (bi.e2 = !1, a1p()), this.ajA = bi.ek
	}, this.ajC = function() {
		bi.e2 = !0, nT(), this.eT = 0
	}, this.ajB = function() {
		var zk, aC;
		if (this.aj7 !== 7 * this.aMA) nM(), be.render();
		else {
			zk = !1;
			loop: for (; this.ajD() && (zk = !0, nM(), 2 !== aE.a3m) && 0 < this.aM8.length;)
				for (aC = this.aj9 - 2; 0 <= aC; aC--)
					if (nM(), 2 === aE.a3m) break loop;
			zk ? be.render() : (nI(), be.a8K())
		}
	}, this.ajD = function() {
		return 0 < this.aM8.length && (this.aMA++, bB.rp.ep(this.aM8[0]), this.aM8.shift(), !0)
	}
}

function ajE() {
	var ajF, ajG, ajH, aMA, ajI, eT = 0,
		ek = bi.ek;

	function ajL() {
		! function() {
			if (!aE.i9) return;
			if (aE.lQ) return;
			if (2 !== aE.a3m)
				if (ajI % 7 != 0) ajI++;
				else if (aMA === aE.a8O) {
				if (!ajO()) return;
				aX.aFZ(aMA), aE.sm.ep()
			} else {
				if (!ajO()) return;
				ajI++, aMA++, ag.a8H(), ag.nU(!0)
			}
			return 1
		}() && ajO() && nM()
	}

	function ajM() {
		eT = 0, (aE.i9 ? (bi.e2 = aX.aFZ(aMA - (ajI % 7 == 0 ? 0 : 1) + ajI % 7 / 7) || bi.e2, nW) : aN.hv || !bF.a8m ? nW : (bi.e2 = !0, nT))()
	}

	function ajO() {
		var aC, fk, ajP = bC.sk.ad0,
			gT = bC.sk.ad1,
			gV = bC.sk.ad2,
			gX = bC.sk.ad3,
			ajQ = bC.sk.ad4,
			ajR = bC.sk.ad5;
		if (!(ajF >= ajR.length)) {
			if (ajR = ajR[ajF], ajQ[ajF]) {
				for (fk = ajG + ajR, aC = ajG; aC < fk; aC++) bB.rp.sZ(ajP[aC], gT[aC], gV[aC], gX[aC]);
				ajG += ajR, ajF++
			} else ++ajH >= ajR && (ajF++, ajH = 0);
			return __fx.replay.tick++, 1
		}
		aO.a57("Replay file smaller than expected."), bF.a5x(!1), aE.a3m = 2
	}
	this.aj7 = 0, this.dv = function() {
		ajI = aMA = ajH = ajG = ajF = 0, __fx.replay.registerHooks({
			advance: () => ajL(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.e2 = !0
			},
			isEnded: () => 2 === aE.a3m,
			getTickInterval: () => bi.aFY
		})
	}, this.ep = function() {
		var agx;
		i.ep(), __fx.replay.frame() ? nI() : bF.aCm() < 1.7 ? 0 === eT ? bi.ek >= ek && (agx = bi.aFY / bF.aCm(), ek += agx * Math.floor(1 + (bi.ek - ek) / agx), 2 === aE.a3m || aN.hv || !bF.a8m ? nI() : (ajL(), be.render()), eT++) : ajM() :
			function() {
				var agx;
				if (bi.ek >= ek)
					if (2 === aE.a3m || aN.hv || !bF.a8m) nI(), ek = bi.ek;
					else {
						for (agx = bi.aFY / bF.aCm(), 16 < (bi.ek - ek) / agx && (ek = bi.ek - 16 * agx); bi.ek >= ek && 2 !== aE.a3m;) ek += agx, ajL();
						be.render()
					} ajM()
			}(), nR(), bi.e2 && (bi.e2 = !1, a1p())
	}, this.a3x = function() {
		bC.sk.ad5.length - ajF <= 2 || aO.a57("Replay file larger than expected.")
	}
}

function ajS() {
	var eT = 0,
		ek = bi.ek;
	this.aj7 = 0, this.ep = function() {
		i.ep(), aE.i9 ? nW() : 0 === eT ? bi.ek >= ek && (ek += bi.aFY * Math.floor(1 + (bi.ek - ek) / bi.aFY), 2 === aE.a3m || aN.hv ? nI() : (nM(), be.render()), eT++) : ((aN.hv ? nW : (bi.e2 = !0, nT))(), eT = 0), nR(), bi.e2 && (bi.e2 = !1,
			a1p())
	}
}

function dc() {
	this.a3w = null, this.e2 = !1, this.ek = 0, this.aFY = 56;
	var ajT = 0;

	function ajU() {
		bi.ek = ajT = performance.now(), bi.a3w.ep(), window.requestAnimationFrame(ajU)
	}
	this.dv = function() {
		this.a8j(), window.requestAnimationFrame(ajU), this.ek = performance.now()
	}, this.a8b = function() {
		aE.ht ? (this.a3w = new ajE, this.a3w.dv()) : aE.lQ ? this.a3w = new ajS : (this.a3w = new aj8, this.a3w.dv())
	}, this.a8j = function() {
		this.a3w = new aj6, this.e2 = !0
	}, this.ep = function() {
		this.a3w.aj7++
	}, this.l3 = function() {
		return this.a3w.aj7
	}, this.aaz = function() {
		var el = performance.now();
		el < ajT + 1e3 || (this.ek = el, this.a3w.ep())
	}
}

function d2() {
	var aLM = 0,
		ajV = !0;
	this.ep = function() {
		var el, aBD;
		bi.ek < aLM || (aLM = bi.ek + 3e3, aE.ht) || aE.lQ || bD.h6.hx(aE.fU) || (el = new Date, aBD = el.getUTCSeconds(), ajV ? aBD < 43 && (ajV = !1) : aBD < 43 || (aLM += 52e3, ajV = !0, aBD = (el.getUTCMinutes() + 2) % 60, el = aE.lO < 7 ?
			0 : 8 === aE.lO ? 2 : 9 === aE.lO ? 3 : 1, aP.aB2(el, aBD) && (aBD = el, aBD = [L(607), L(608), L(609), L(610)][aBD], aO.aAd(aBD))))
	}
}

function cw() {
	var o9, oA, oM, oN, ajX = 0,
		ajY = 0;

	function aja() {
		return Math.pow(Math.pow(oM - o9, 2) + Math.pow(oN - oA, 2), .5)
	}

	function ajZ(e) {
		o9 = i.l * e.touches[0].clientX, oA = i.l * e.touches[0].clientY, oM = i.l * e.touches[1].clientX, oN = i.l * e.touches[1].clientY
	}
	this.a5P = function(e) {
		return 1 < e.touches.length ? (ajY = bi.ek, ajX = 3, ajZ(e), aM.uN(), !0) : (ajX = 0, !1)
	}, this.a5Q = function(e) {
		var aO3, j5, j6;
		return 0 !== aE.a3m && 1 < e.touches.length && (ajX = Math.max(ajX - 1, 0), aI.oR() && (aO3 = aja(), ajZ(e), e = aja(), j5 = Math.floor((o9 + oM) / 2), j6 = Math.floor((oA + oN) / 2), aT.aDD(j5, j6, Math.max(.125, e) / Math.max(.125,
			aO3)), bi.e2 = !0), !0)
	}, this.a5n = function() {
		var fr, ft;
		return !!(ajX && (ajX = 0, bi.ek < ajY + 500)) && (fr = (o9 + oM) / 2, ft = (oA + oN) / 2, aM.a5h(fr, ft), aM.click(fr, ft, !0) && (bi.e2 = !0), !0)
	}
}

function dD() {
	this.size = 0, this.eT = 0, this.aD = null, this.dv = function(aD) {
		this.eT = 0, this.aD = aD, this.size = aD.length
	}, this.xy = function() {
		this.aD = null
	}, this.sY = function(size) {
		for (var gC = 0, aD = this.aD, oR = this.eT + size - 1, aC = this.eT; aC <= oR; aC++) gC |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << oR - aC;
		return this.eT += size, this.eT > 8 * this.size && console.error("Unwrapper Overflow"), gC
	}, this.abS = function(size) {
		var g4 = size >> 1;
		return (1 << g4) * this.sY(size - g4) + this.sY(g4)
	}, this.abU = function(ajb) {
		return this.size === bG.abR(ajb)
	}, this.adI = function(a0d, ajc, ajd) {
		var hD = this.sY(a0d);
		if (!hD) return null;
		for (var a0d = Math.max(hD, ajd), h = new(ajc <= 8 ? Uint8Array : ajc <= 16 ? Uint16Array : Uint32Array)(a0d), aC = 0; aC < hD; aC++) h[aC] = this.sY(ajc);
		ajd = h[hD - 1];
		return ajd && h.fill(ajd, hD), h
	}, this.adJ = function(a0d, aje, ajd) {
		var hD = this.sY(a0d);
		if (!hD) return null;
		for (var a0d = Math.max(hD, ajd), h = new Array(a0d), aC = 0; aC < hD; aC++) h[aC] = this.adG(aje);
		return h.fill(h[hD - 1], hD), h
	}, this.adG = function(a0d) {
		return bJ.a0L.a0P(this.sY(a0d))
	}, this.adH = function() {
		var a33 = this.sY(30);
		if (!(6 * a33 > 8 * this.size - this.eT)) {
			var pY = bI.fB.vZ(bI.fB.va(a33)),
				pY = bD.pc.a8C(pY, "_", "/");
			pY = bD.pc.a8C(pY, "-", "+");
			for (var ajf = "";
				(pY.length + ajf.length) % 4;) ajf += "=";
			pY = "data:image/png;base64," + pY + ajf;
			var aNf = new Image;
			aNf.onload = function() {
				bC.aOc.aOd(aNf), aNf.onload = null, aNf = null
			}, aNf.src = pY
		}
	}
}

function dW() {
	this.aeL = 0, this.aeM = 0, this.aeH = 0, this.aeI = 0, this.aeJ = 0, this.aeK = 0, this.aGG = [0, 0, 0, 0], this.oQ = function() {
		this.aeL = aT.a1s(), this.aeM = aT.a1t(), this.aeH = -this.aeL, this.aeI = -this.aeM, this.aeJ = i.j / iz, this.aeK = i.k / iz, this.aGG[0] = Math.floor(this.aeH), this.aGG[1] = Math.floor(this.aeI), this.aGG[2] = Math.floor(this.aGG[0] +
			this.aeJ + 1), this.aGG[3] = Math.floor(this.aGG[1] + this.aeK + 1), be.aGE = !0
	}
}

function cx() {
	var aBs, nv;
	this.dv = function() {
		aBs = 1, nv = 0
	}, this.ep = function() {
		0 < aBs && (nv = 0 === nv ? bi.ek + 16 : nv, aBs = (aBs -= .001 * (bi.ek - nv)) < 0 ? 0 : aBs, nv = bi.ek, bi.e2 = !0)
	}, this.yv = function() {
		0 < aBs && (yw.fillStyle = "rgba(0,0,0," + aBs + ")", yw.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eT = 0, this.aD = null, this.dv = function(aD) {
		this.eT = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(ajb) {
		return this.dv(new Uint8Array(this.abR(ajb))), this.aD
	}, this.xy = function() {
		this.aD = null
	}, this.a9 = function(size, aBF) {
		for (var aD = this.aD, oR = this.eT + size - 1, aC = this.eT; aC <= oR; aC++) aD[aC >> 3] |= (aBF >> oR - aC & 1) << 7 - (7 & aC);
		this.eT += size, this.eT > 8 * this.size && console.error("Wrapper Overflow")
	}, this.abQ = function(size, aBF) {
		var g4 = size >> 1,
			fn = 1 << g4;
		this.a9(size - g4, bO.gB(aBF, fn)), this.a9(g4, aBF % fn)
	}, this.aji = function(size) {
		for (var aD = this.aD, oR = this.eT + size, aC = this.eT; aC < oR; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.abR = function(ajb) {
		return ajb + 7 >> 3
	}, this.ajj = function(h, kM, oR, ajk) {
		for (var aC = kM; aC < oR; aC++) this.a9(ajk, h[aC])
	}
}

function dC() {
	this.dv = function() {
		this.h = [], this.eT = 0
	}, this.abu = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(ajl, value) {
		for (var h = this.h, oR = this.eT + ajl - 1, ajm = 1 + (oR >> 3); h.length < ajm;) h.push(0);
		for (var aC = this.eT; aC <= oR; aC++) h[aC >> 3] |= (value >> oR - aC & 1) << 7 - (7 & aC);
		this.eT += ajl
	}, this.e1 = function(h, a0d, ajc) {
		var ajn = bD.tV.a6Z(h);
		this.a9(a0d, ajn);
		for (var aC = 0; aC < ajn; aC++) this.a9(ajc, h[aC])
	}, this.ada = function(h, a0d, aje) {
		var ajn = bD.tV.a6Z(h);
		this.a9(a0d, ajn);
		for (var aC = 0; aC < ajn; aC++) this.adY(h[aC], aje)
	}, this.adY = function(pY, a0d) {
		var fk = pY.length;
		this.a9(a0d, fk);
		for (var aC = 0; aC < fk; aC++) this.a9(16, pY.charCodeAt(aC))
	}, this.adZ = function(a6f) {
		var ajo = (a6f = a6f.toDataURL()).split(",");
		if (ajo.length < 2) console.log("error 266");
		else {
			a6f = bD.pc.a8C(a6f = ajo[ajo.length - 1], "/", "_"), a6f = bD.pc.a8C(a6f, "\\+", "-");
			var a6f = bD.pc.a8C(a6f, "=", ""),
				a0Y = bJ.fB.a0V(a6f),
				fk = a0Y.length;
			this.a9(30, fk);
			for (var aC = 0; aC < fk; aC++) this.a9(6, a0Y[aC])
		}
	}
}
a(), self.aiCommand746 = function(gC) {
	0 === gC ? c2() : 1 !== gC || !a1 || 1 !== a1.id || a1.eC < 14 || bM.gD()
}, setTimeout(c2, 1e4), window.onload = function() {
	c2()
};