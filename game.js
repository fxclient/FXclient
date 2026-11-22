var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, by, bz, c0, c1, gb, gc, gd, ge, gf, gg, gh, gi,
	gj, gk, gl, gm, gn, ix, jN, jO, aCc, mf, kp, a5X, z9, a28, aGn, a8r, a8s, S = ["div", "100%", "⬅️ ", "absolute", "none", "canvas", "0.75em", "<br>", "inherit", "center", "0.8em", "rgb(", "auto", "rgba(", "hidden", "   ", "flex", "span", "1em",
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
	this.e6 = 2, this.e7 = 1778, this.e8 = 0;
	this.rVersion = 27, this.eC = "22 Nov 2026", this.eD = 0, this.eE = 2, this.dv = function() {
		this.o = "2.17.16", this.eC = this.eC + " [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.eG = 0 <= this.hostname.indexOf("github.io"), this.eH = 0 <=
			this.hostname.indexOf("game.territorial.io"), this.aB = function() {
				try {
					return window.self !== window.top
				} catch (e) {
					return !0
				}
			}(), this.eJ = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.aA + " validMod: " + +this.eG)
	}, this.n = 0
}

function eK() {
	var eL = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		eM = [100, 60, 30, 15, 6, 1],
		eN = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		eO = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		eQ = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.eR = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments", "Report", "Vouch"]
	], this.eS = function(id, eT, eU) {
		eT = this.eV(eT);
		return +(eN[eT][id] > eU)
	}, this.eV = function(eT) {
		for (var aC = 0; aC < eM.length; aC++)
			if (eM[aC] <= eT) return aC;
		return eM.length
	}, this.eW = function(eT) {
		return eL[this.eV(eT)]
	}, this.eX = function(id, eY) {
		return eO[id].replace(new RegExp("x", "g"), eY)
	}, this.eZ = function(id, eY) {
		return eQ[id].replace(new RegExp("x", "g"), eY)
	}, this.ea = function(id, eb) {
		return this.eR[5][id]
	}
}

function dP() {
	this.ec = new ed, this.ee = new ef, this.turnstile = new eg, this.dv = function() {
		a1.a2.eh(), this.turnstile.dv()
	}, this.ei = function() {
		return bm.buffer.data[160].value
	}
}

function ed() {
	var ej = 12e3;
	this.show = function(ek) {
		return !ek && !bX.ei() && (0 === a1.id ? bX.ee.show() : !(bi.el < ej) && (ek = 1 === a1.id ? 72e4 : 108e4, ej = bi.el + ek, 2 === m.e6) && a1.a2.en(Math.floor(ek)))
	}
}

function ef() {
	var eo = null,
		ej = 2e4,
		ep = 0;
	this.eq = function() {
		bi.el < ej || (ej = bi.el + 1e4, 0 !== a1.id) || eo || bX.ei() || (b1.z.er(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b1.es.et(5) : ej = bi.el + 1e3)
	}, this.eu = function(ev) {
		eo = ev
	}, this.show = function() {
		return !(!eo || bi.el < ep) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (ep = bi.el + 6e4, (new ew).show(eo.ex, eo.colors, eo.id), !(eo = null)))
	}
}

function eg() {
	this.ey = 0;
	var f1, ez = null,
		f0 = 0,
		f2 = "",
		f3 = 0,
		f4 = null,
		f5 = -1,
		f6 = -1,
		f7 = 0;

	function fH() {
		if (null !== f4 && null !== ez) {
			f0 = 0;
			try {
				window.turnstile.remove(ez), f4.remove()
			} catch (e) {
				console.log("turnstile remove failed " + e)
			}
			ez = f4 = null
		}
	}

	function fB(fL) {
		return "" !== f2 && f3 + 1e3 * (300 - fL) > performance.now()
	}
	this.dv = function() {
		var f9;
		m.e8 || !m.aA && !m.eG ? (console.log("turnstile cannot be loaded"), this.ey = -1) : ((f9 = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", f9.async = !0, f9.onload =
			function() {
				bX.turnstile.ey = 1, console.log("turnstile onload"), bX.turnstile.fA()
			}, f9.onerror = function() {
				bX.turnstile.ey = -1, console.log("turnstile onerror")
			}, document.head.appendChild(f9))
	}, this.fA = function() {
		var em;
		return !(1 !== this.ey || (window.turnstile ? f0 ? (console.log("turnstile error 246"), 1) : fB(30) || (em = performance.now()) < f7 && f5 === bJ.fC.fD(bm.buffer.data[105].value, 5) && f6 === aa.fE || (f2 = "", f0 = 1, f1 = em, (f4 =
			document.createElement("div")).style.position = "fixed", f4.style.left = "0", f4.style.top = "0", f4.style.zIndex = "100", document.body.appendChild(f4), console.log("turnstile render"), ez = window.turnstile.render(
			f4, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(fF) {
					console.log("turnstile success " + Math.floor(performance.now() - f1)), f2 = fF, f3 = performance.now(), bX.turnstile.fG(), fH()
				},
				"expired-callback": function() {
					fH(), console.log("turnstile expired " + Math.floor(performance.now() - f1))
				},
				"error-callback": function() {
					fH(), console.log("turnstile callback error " + Math.floor(performance.now() - f1)), bX.turnstile.ey = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		fH()
	}, this.fG = function() {
		fB(8) && bq.fI && b1.z.er(b1.z.fJ) && (f7 = performance.now() + 36e5 - 1e4, f5 = bJ.fC.fD(bm.buffer.data[105].value, 5), f6 = aa.fE, b1.es.fK(f2), f2 = "", console.log("sendTokenToLobby success"))
	}
}

function cg() {
	this.fM = new fN
}

function fN() {
	this.fO = function(fP) {
		var fS;
		return bV.fQ(bV.fR) && aE.data.passableMountains && (fS = ad.fT(fP), this.fU(aE.fV, fS) || this.fW(aE.fV, fS)) && 0 !== (fS = function(fr) {
			for (var fs = bP.ft(fr), fu = bP.fv(fr), max = Math.max(bV.fw, bV.fx) - 2, fy = max * max, fz = !1, g0 = 0, g1 = 0; g1 < max; g1++) {
				var g2, fX = function(fs, fu, g1) {
					for (var aC = 0; aC <= g1; aC++)
						for (var g4 = -1; g4 < 2; g4 += 2)
							for (var g5 = -1; g5 < 2; g5 += 2)
								for (var ev = 0; ev < 2; ev++) {
									var fP = function(fs, fu) {
										if (bP.g7(fs, fu)) {
											fs = bP.g8(fs, fu), fu = bP.fb(fs);
											if (ad.fg(fu) && ad.g9(fu)) return fs
										}
										return 0
									}(fs + ev * g4 * aC + (1 - ev) * g5 * g1, fu + ev * g5 * g1 + (1 - ev) * g4 * aC);
									if (fP) return fP
								}
					return 0
				}(fs, fu, g1);
				fX && (g2 = bP.g3(fs, fu, fX)) < fy && (g0 = fX, fy = g2, fz || (fz = !0, max = Math.floor(Math.sqrt(g2)) + 1))
			}
			return g0
		}(bP.fZ(fP))) && (fP = bP.fb(fS), ad.fc(fP) || (fP = ad.fd(fP)) !== aE.fV && bw.fe(fP, aE.fV)) ? fS : 0
	}, this.ff = function(player, fX) {
		fX = bP.fb(fX);
		if (ad.fg(fX)) {
			if (ad.fc(fX)) bR.fh[0] = aE.fi;
			else if (ad.fd(fX) !== bR.fh[0]) return !1;
			for (var fj = function(fP) {
					var fn = ad.fn,
						fj = [];
					loop: for (var fo = 3; 0 <= fo; fo--) {
						var fp = fP + fn[fo];
						if (ad.fq(fp)) {
							for (var id = ad.fT(fp), aC = 0; aC < fj.length; aC++)
								if (id === fj[aC]) continue loop;
							bR.fm[fj.length] = fp, fj.push(id)
						}
					}
					return fj
				}(fX), fl = fj.length, aC = 0; aC < fl; aC++)
				if (this.fU(player, fj[aC]) || this.fW(player, fj[aC])) return bR.fm[0] = bR.fm[aC], !0
		}
		return !1
	}, this.fU = function(player, fS) {
		for (var gA = ah.gA[player], fl = gA.length, gB = Math.max(bO.gC(fl, 12), 1), fn = ad.fn, aC = 0; aC < fl; aC += gB)
			for (var fa = gA[aC], fo = 3; 0 <= fo; fo--) {
				var fp = fa + fn[fo];
				if (ad.fq(fp) && fS === ad.fT(fp)) return !0
			}
		return !1
	}, this.fW = function(player, fS) {
		for (var gA = ah.gA[player], fl = gA.length, fn = ad.fn, aC = 0; aC < fl; aC++)
			for (var fa = gA[aC], fo = 3; 0 <= fo; fo--) {
				var fp = fa + fn[fo];
				if (ad.fq(fp) && fS === ad.fT(fp)) return !0
			}
		return !1
	}
}

function dI() {
	this.h = new Array(4), this.gF = new Uint16Array(2), this.gG = new Uint16Array(2), this.gH = new Int32Array(2), this.gI = new Uint32Array(2), this.gJ = new Uint32Array(2), this.gK = new Uint8Array(4), this.gL = new Uint8Array(4), this.fm =
		new Uint32Array(4), this.gM = new Uint32Array(5), this.fh = new Uint32Array(8), this.gN = new Uint32Array(8), this.gO = new Uint16Array(16), this.gP = new Uint16Array(512), this.gQ = new Uint16Array(512), this.gR = new Uint16Array(512), this
		.gS = new Uint16Array(0), this.dv = function() {
			var fl = bV.fw * bV.fx;
			this.gS.length !== fl && (this.gS = new Uint16Array(fl))
		}, this.gT = function(h, gU) {
			return h[0] = gU, h
		}, this.gV = function(h, gU, gW) {
			return h[0] = gU, h[1] = gW, h
		}, this.gX = function(h, gU, gW, gY) {
			return h[0] = gU, h[1] = gW, h[2] = gY, h
		}, this.gZ = function(h, gU, gW, gY, ga) {
			return h[0] = gU, h[1] = gW, h[2] = gY, h[3] = ga, h
		}
}

function go() {
	gh = 0, gi = 2048, gj = new Uint32Array(4 * gi), gk = 0, gl = new Uint32Array(gi), gm = new Uint8Array(bV.fw * bV.fx)
}

function gp(player) {
	gc = player, gn = !1, gq(), gr();
	for (var aC = ae.gs(gc) - 1; 0 <= aC; aC--) gb = aC, gt();
	gn && gu()
}

function gu() {
	bw.gv(), bw.gw()
}

function gt() {
	gg = ae.gx(gc, gb), gd = ae.gy(gc, gb), ge = ae.gz(gc, gb), h0(), (0 !== gh && (h2(), h3()) ? h4 : h1)()
}

function h3() {
	if (!((gf = bO.gC(gd, gh)) > aE.h5)) {
		if (!ge) return !1;
		var h6 = gh * (1 + aE.h5);
		gd += bD.h7.h8(gc, h6 - gd), gf = bO.gC(gd, gh)
	}
	return !0
}

function h2() {
	for (var aC = gh - 1; 0 <= aC; aC--) gm[bO.gC(gj[aC], 4)] = 0
}

function h1() {
	1 === ae.gs(gc) && aG.h9(gc);
	var em = bD.h7.hA(gc, gd);
	bg.hB(gc, gd - em, 12), ae.hC(gc, gb)
}

function gq() {
	for (var player = gc, hD = ah.hD, fl = Math.min(hD[player].length, gi), hE = 0, hF = gl, aC = fl - 1; 0 <= aC; aC--) hF[hE++] = hD[player][aC];
	gk = hE
}

function gr() {
	for (var aC = ah.hD[gc].length - 1; 0 <= aC; aC--) ad.fg(ah.hD[gc][aC]) && ad.hG(ah.hD[gc][aC], gc);
	ah.hD[gc] = []
}

function h0() {
	gh = 0, (gg === aE.fi ? hH : hI)()
}

function hI() {
	for (var hJ, hK, aC, fn = ad.fn, fo = 3; 0 <= fo; fo--)
		for (aC = gk - 1; 0 <= aC; aC--) hJ = gl[aC] + fn[fo], hK = bO.gC(hJ, 4), 0 === gm[hK] && ad.hL(hJ) && ad.fd(hJ) === gg && (gm[hK] = 1, gj[gh++] = hJ)
}

function hH() {
	for (var hJ, hK, aC, fn = ad.fn, fo = 3; 0 <= fo; fo--)
		for (aC = gk - 1; 0 <= aC; aC--) hJ = gl[aC] + fn[fo], hK = bO.gC(hJ, 4), 0 === gm[hK] && ad.fc(hJ) && (gm[hK] = 1, gj[gh++] = hJ)
}

function h4() {
	hM() ? (hN(), gg !== aE.fi && hO()) : h1()
}

function hO() {
	bw.hP(), bw.hQ(ah.hR[gg]), bw.hQ(ah.hS[gg]), bV.fQ(bV.fR) && bw.hQ(ah.gA[gg]), bw.hT(ah.hD[gg]), bw.hU(ah.hS[gg]), bw.hU(ah.gA[gg]), bw.hV(), bw.hW()
}

function hN() {
	gn = !0, ae.hX(gc, gb, gd), ae.hY(gc, gb), ah.hZ[gc] += gh, bw.ha(), hb()
}

function hM() {
	return (gg === aE.fi ? hc : hd)()
}

function hd() {
	var he = gh * aE.h5,
		hf = hg(),
		hh = hi(),
		hf = he + 2 * hf + hh,
		hk = gf * gh;
	return hf < hk ? (gd -= hf, bg.hB(gc, hf, 13), hl(hf - he, hh), !0) : ge && 0 === hh ? (gd -= hk, hk += bD.h7.h8(gc, hf - hk + 1), bg.hB(gc, hk, 13), hl(hk - he, 0), !0) : (gd -= hk, bg.hB(gc, hk, 13), hl(hk - he, hh), !1)
}

function hl(hk, hh) {
	if (0 < hh) {
		if (hk <= hh) return bg.hB(gg, hk, 13), void ae.hm(gg, gc, hh - hk);
		ae.hm(gg, gc, 0), hk -= hh
	}
	hk = bO.gC(hk, 2), hk = Math.min(ah.hn[gg], hk), bg.hB(gg, hk, 13), ah.hn[gg] -= hk
}

function hi() {
	return ae.ho(gg, gc)
}

function hg() {
	return bO.gC(gh * ah.hn[gg], 1 + bO.gC(10 * ah.hZ[gg], 16))
}

function hc() {
	var hp = gh * aE.h5;
	return gd -= hp, bg.hB(gc, hp, 13), !0
}

function hb() {
	for (var aC = gh - 1; 0 <= aC; aC--) ah.hD[gc].push(gj[aC]), ah.hR[gc].push(gj[aC]), ad.hG(gj[aC], gc)
}

function dN() {
	var hq = 0,
		hr = 0;
	this.hs = function(fs, fu) {
		hq = fs, hr = fu
	}, this.ht = function(code) {
		var i1, i3, fX;
		aE.hu || aE.hv || aN.hw || (bD.h7.hx(0) || bD.h7.hx(1)) && bD.h7.hy(aE.fV) && (aS.hz(hq, hr) ? aS.i0 = !1 : aQ.hz(hq, hr) || (i1 = bP.i2(hq), i3 = bP.i4(hr), fX = bP.g8(i1, i3), bP.i5(i1, i3) && (0 === code ? function(fX) {
			var i9, fP, fa;
			aE.iA ? -1 !== (i9 = bv.iB(fX)) && bB.iC.iD(fX) : (fP = bP.fb(fX), ad.fq(fP) ? (i9 = an.fM.fO(fP)) && (fa = bP.fb(i9), fa = ad.fc(fa) ? aE.fi : ad.fd(fa), bB.iC.iF(aS.iG(), i9, fa)) : (i9 = bv.iH(fX)) < 0 || (fP = bP
				.fb(i9), ad.fc(fP) ? bw.iI(aE.fV) ? bB.iC.iJ(aS.iG(), aE.fi) : ae.gs(aE.fV) && b2.iK(aE.fi, aS.iG()) : (fa = ad.fd(fP), bw.fe(fa, aE.fV) && (bw.iL(aE.fV, fa) ? bB.iC.iJ(aS.iG(), fa) : ae.gs(aE.fV) && b2.iK(
					fa, aS.iG())))))
		}(fX) : 1 === code && function(fX) {
			bQ.iM.iN(aE.fV, fX) && bB.iC.iO(aS.iG(), bR.gN[7])
		}(fX))))
	}, this.iP = function() {
		if (!(aE.hu || aE.hv || aN.hw) && bD.h7.hx(1)) {
			var hJ = aE.fV;
			if (bD.h7.hy(hJ)) {
				var fl = ae.gs(hJ);
				if (fl < 1) ! function() {
					var hJ = aE.fV;
					if (bw.iI(hJ)) bB.iC.iJ(aS.iG(), aE.fi);
					else
						for (var fn = ad.fn, hR = ah.hR, fl = hR[hJ].length, iZ = Math.floor(Math.random() * fl), aC = 0; aC < fl; aC++)
							for (var ia = 3; 0 <= ia; ia--) {
								var ib = hR[hJ][(aC + iZ) % fl] + fn[ia];
								if (ad.hL(ib)) {
									ib = ad.fd(ib);
									if (ib !== hJ && (!aE.ie || bw.fe(hJ, ib))) return bB.iC.iJ(aS.iG(), ib)
								}
							}
				}();
				else {
					for (var iR = 0, iS = ae.gy(hJ, 0), aC = 1; aC < fl; aC++) {
						var iT = ae.gy(hJ, aC);
						iT < iS && (iS = iT, iR = aC)
					}
					bB.iC.iJ(aS.iG(), ae.gx(hJ, iR))
				}
			}
		}
	}, this.iU = function() {
		if (!(aE.hu || aE.hv || aN.hw) && bD.h7.hy(aE.fV) && bD.h7.hx(1)) return ax.iV ? ax.iW(aE.fV) ? void bB.iC.iX(1) : void 0 : void(ax.iY(aE.fV) && bB.iC.iU())
	}
}

function ig(ih, size, ii, ij, font) {
	var aC, im = .2,
		canvas = document.createElement("canvas"),
		io = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = ih, canvas.height = ih, io.font = size + font, io.textAlign = "center", io.textBaseline = "middle", io.fillStyle = "red", aC = 0; aC < ii.length; aC++) io.fillText(ii[aC], .5 * ih, .5 * ih);
	return -1 < (canvas = function(ik) {
		var aC, eT, fo = ik.data;
		for (aC = fo.length - 4; 0 <= aC; aC -= 4)
			if (eT = fo[aC], ij <= eT) return Math.floor(aC / (4 * ih));
		return -1
	}(io.getImageData(0, 0, ih, ih))) && (im = (canvas - .5 * ih + .1 * size) / size), Math.max(im, 0)
}

function dG() {
	this.iq = new Int16Array(4), this.ir = new Int16Array(4), this.is = null, this.dv = function() {
		var aC;
		for (this.iq[0] = -bV.fw, this.iq[1] = 1, this.iq[2] = bV.fw, this.iq[3] = -1, this.is = new Int16Array([-bV.fw, 1 - bV.fw, 1, bV.fw + 1, bV.fw, bV.fw - 1, -1, -bV.fw - 1]), aC = 0; aC < 4; aC++) this.ir[aC] = 4 * this.iq[aC]
	}, this.it = function() {
		return bO.iu(Math.floor(.15 * (1 + .25 * a1.a2.iv()) * i.iw / ix), 4, 128)
	}, this.iy = function(fP, id) {
		for (var iz = this.ir, aC = 0; aC < 4; aC++) {
			var fa = fP + iz[aC];
			if (ad.j0(fa) && ad.fT(fa) === id) return !0
		}
		return !1
	}, this.j1 = function(player, fP) {
		return !ad.fc(fP) && player === ad.fd(fP)
	}, this.g3 = function(i1, i3, fX) {
		return (i1 -= this.ft(fX)) * i1 + (i3 -= this.fv(fX)) * i3
	}, this.j2 = function(j3, j4, j5) {
		j3 = this.j7(j3) - this.j8(j5), j4 = this.jA(j4) - this.jB(j5);
		return Math.sqrt(j3 * j3 + j4 * j4)
	}, this.jC = function(jD, jE) {
		var j6 = this.ft(jD) - this.ft(jE),
			jD = this.fv(jD) - this.fv(jE);
		return ~~Math.sqrt(j6 * j6 + jD * jD + .5)
	}, this.jF = function(jD, jE) {
		var j6 = this.ft(jD) - this.ft(jE),
			jD = this.fv(jD) - this.fv(jE);
		return j6 * j6 + jD * jD
	}, this.jG = function(jH, jI, jJ, jK) {
		return (jH -= jJ) * jH + (jI -= jK) * jI
	}, this.jL = function(hJ, jM) {
		return bO.gC(jM * ah.hn[hJ], 1e3)
	}, this.j7 = function(j3) {
		return 16 * (j3 + jN) / ix
	}, this.jA = function(j4) {
		return 16 * (j4 + jO) / ix
	}, this.jP = function(fo) {
		return 16 * fo / ix
	}, this.i2 = function(j3) {
		return Math.floor((j3 + jN) / ix)
	}, this.i4 = function(j4) {
		return Math.floor((j4 + jO) / ix)
	}, this.i5 = function(i1, i3) {
		return 1 <= i1 && 1 <= i3 && i1 < bV.fw - 1 && i3 < bV.fx - 1
	}, this.ft = function(fX) {
		return fX % bV.fw
	}, this.fv = function(fX) {
		return bO.gC(fX, bV.fw)
	}, this.g8 = function(i1, i3) {
		return i3 * bV.fw + i1
	}, this.jQ = function(i1, i3) {
		return 4 * this.g8(i1, i3)
	}, this.jR = function(fX) {
		return this.g7(this.ft(fX), this.fv(fX))
	}, this.g7 = function(i1, i3) {
		return 0 < i1 && i1 < bV.fw - 1 && 0 < i3 && i3 < bV.fx - 1
	}, this.fb = function(fX) {
		return fX << 2
	}, this.fZ = function(fP) {
		return fP >> 2
	}, this.jS = function(fX) {
		return bV.fw * this.fv(fX) * 256 + (this.ft(fX) << 4)
	}, this.jT = function(fX) {
		return this.jS(fX) + 8 + (bV.fw << 7)
	}, this.jU = function(j5) {
		return bV.fw * (this.jB(j5) >> 4) + (this.j8(j5) >> 4)
	}, this.jV = function(j5) {
		var j5 = this.jU(j5),
			shift = bQ.jW.shift,
			j = bQ.jW.jX;
		return (this.ft(j5) >> shift) + j * (this.fv(j5) >> shift)
	}, this.j8 = function(j5) {
		return j5 % (bV.fw << 4)
	}, this.jB = function(j5) {
		return bO.gC(j5, bV.fw << 4)
	}, this.jY = function(fX, ia) {
		return fX + this.iq[ia]
	}, this.jZ = function(fP, ia) {
		return fP + this.ir[ia]
	}, this.ja = function(jD, jE) {
		var j6 = this.ft(jE) - this.ft(jD),
			jE = this.fv(jE) - this.fv(jD);
		return Math.abs(j6) >= Math.abs(jE) ? 1 + 2 * (j6 < 0) : 2 * (0 < jE)
	}, this.jb = function(player) {
		return this.g8(ah.jc[player] + ah.jd[player] >> 1, ah.je[player] + ah.jf[player] >> 1)
	}, this.jg = function(player) {
		return this.g8(az.jh(ah.jc[player], ah.jd[player]), az.jh(ah.je[player], ah.jf[player]))
	}
}

function cu() {
	this.ji = new jj, this.jk = new jl, this.jm = new jn, this.performance = new jo, this.jp = new jq, this.jr = new js, this.jt = new ju, this.jv = new jw, this.jx = new jy, this.dv = function() {
		this.ji.dv(), this.jm.dv(), this.performance.dv(), this.jp.dv(), this.jr.dv()
	}, this.eq = function() {
		this.performance.eq(), this.ji.eq(), this.jm.jz()
	}
}

function jq() {
	var k0, k2 = new Uint16Array(8);

	function kA(size, player) {
		for (var aC = ah.hD[player].length - 1; size <= aC; aC--) ad.kG(ah.hD[player][aC], player)
	}
	this.dv = function() {
		k0 = 0
	}, this.k3 = function(player, k4) {
		return bR.fh[1] = ah.hD[player].length, bR.fh[0] === aE.fi ? ap.jp.k5(player) : this.k6(player, bR.fh[0]), (0 !== bR.fh[1] || 0 !== ah.hD[player].length) && !(!k4 && bR.fh[1] === ah.hD[player].length || (bR.fh[0] === aE.fi ? ah.k7[
			player]++ : ah.k8[player]++, 0))
	}, this.k9 = function(player) {
		kA(bR.fh[1], player), ae.eu(player, bR.gI[0], bR.fh[0]), aG.kB(player, !1)
	}, this.kC = function(player, kD, fl, iS) {
		var kE = bO.gC(12 * ah.hn[player], 1024);
		iS -= iS >= bO.gC(ah.hn[player], 2) ? kE : 0, kA(fl, player), ae.eu(player, iS, kD), ah.hn[player] -= iS + kE, aG.kB(player, !1)
	}, this.k6 = function(player, kD) {
		for (var ia, fn = ad.fn, aC = ah.hR[player].length - 1; 0 <= aC; aC--)
			if (ad.kF(ah.hR[player][aC]))
				for (ia = 3; 0 <= ia; ia--)
					if (ad.hL(ah.hR[player][aC] + fn[ia]) && ad.fd(ah.hR[player][aC] + fn[ia]) === kD) {
						ah.hD[player].push(ah.hR[player][aC]);
						break
					}
	}, this.k5 = function(player) {
		for (var fn = ad.fn, aC = ah.hR[player].length - 1; 0 <= aC; aC--)
			if (ad.kF(ah.hR[player][aC]))
				for (var ia = 3; 0 <= ia; ia--)
					if (ad.fc(ah.hR[player][aC] + fn[ia])) {
						ah.hD[player].push(ah.hR[player][aC]);
						break
					}
	}, this.kH = function(player, kI) {
		var aC, g4, ia, ic, fl = ah.hR[player].length,
			kJ = 256 <= fl ? 12 : 32 <= fl ? 6 : 1,
			kK = fl - 1 - az.kL(kJ),
			fn = ad.fn;
		k0 = 0;
		loop: for (aC = kK; 0 <= aC; aC -= kJ)
			for (ia = 3; 0 <= ia; ia--)
				if ((ic = ad.fc(ah.hR[player][aC] + fn[ia]) ? aE.fi : ad.fd(ah.hR[player][aC] + fn[ia])) === aE.fi || ad.hL(ah.hR[player][aC] + fn[ia]) && ic !== player && (kI || bw.fe(player, ic))) {
					for (g4 = k0 - 1; 0 <= g4; g4--)
						if (k2[g4] === ic) continue loop;
					if (k2[k0] = ic, 8 <= ++k0) return !0
				}
		return 0 < k0
	}, this.kM = function(player, kI) {
		var aC, ia, ic, fn = ad.fn;
		for (k0 = 0, aC = ah.hR[player].length - 1; 0 <= aC; aC--)
			for (ia = 3; 0 <= ia; ia--)
				if ((ic = ad.fc(ah.hR[player][aC] + fn[ia]) ? aE.fi : ad.fd(ah.hR[player][aC] + fn[ia])) === aE.fi || ad.hL(ah.hR[player][aC] + fn[ia]) && ic !== player && (kI || bw.fe(player, ic))) return k2[k0++] = ic, !0;
		return !1
	}, this.kN = function() {
		for (var g5, aC = k0 - 1; 0 <= aC; aC--)
			if (k2[aC] === aE.fi) {
				for (k0--, g5 = aC; g5 < k0; g5++) k2[g5] = k2[g5 + 1];
				return !0
			} return !1
	}, this.kO = function(player) {
		for (var g5, aC = k0 - 1; 0 <= aC; aC--)
			if (ae.kP(player, k2[aC]))
				for (k0--, g5 = aC; g5 < k0; g5++) k2[g5] = k2[g5 + 1];
		return 0 === k0
	}, this.kQ = function() {
		for (var aC = k0 - 1; 0 <= aC; aC--)
			if (bD.h7.kR(k2[aC])) return !0;
		return !1
	}, this.kS = function() {
		for (var aC = k0 - 1; 0 <= aC; aC--) bD.h7.kR(k2[aC]) || (k2[aC] = k2[--k0]);
		return 0 < k0
	}, this.kT = function(player) {
		for (var g5, kU = k2[0], kV = ah.hn[kU] + ae.ho(kU, player), aC = k0 - 1; 1 <= aC; aC--)(g5 = ah.hn[k2[aC]] + ae.ho(k2[aC], player)) < kV && (kU = k2[aC], kV = g5);
		return kU
	}, this.kW = function(player) {
		var k, kX = k2[0];
		if (1 !== k0)
			for (var kY = bO.gC(ah.jd[player] + ah.jc[player], 2), kZ = bO.gC(ah.jf[player] + ah.je[player], 2), g1 = ka(kY - bO.gC(ah.jd[kX] + ah.jc[kX], 2)) + ka(kZ - bO.gC(ah.jf[kX] + ah.je[kX], 2)), aC = k0 - 1; 1 <= aC; aC--)(k = ka(kY - bO
				.gC(ah.jd[k2[aC]] + ah.jc[k2[aC]], 2)) + ka(kZ - bO.gC(ah.jf[k2[aC]] + ah.je[k2[aC]], 2))) < g1 && (g1 = k, kX = k2[aC]);
		return kX
	}, this.kb = function() {
		for (var kc = k2, kd = kc[0], hn = ah.hn, ke = hn[kd], aC = k0 - 1; 1 <= aC; aC--) {
			var hJ = kc[aC],
				g5 = hn[hJ];
			ke < g5 && (kd = hJ, ke = g5)
		}
		return kd
	}, this.kf = function() {
		return k2[az.kL(k0)]
	}
}

function js() {
	function kv(player, kD, kl) {
		3 <= kl && 2142 < bi.l1() && (kD === aE.fi || ah.hn[kD] < bO.gC(ah.hn[player], 20)) && aF.kq(player, 20)
	}

	function ky(player, iS, kD, kl) {
		3 <= kl && kl < 6 && bO.gC(ah.hn[player], 8) > ah.hn[kD] && (iS = Math.max(bO.gC(11 * ah.hn[kD], 5), bO.gC(ah.hn[player], 10)));
		kl = ah.hD[player].length;
		ap.jp.k6(player, kD), ap.jp.kC(player, kD, kl, iS)
	}

	function ku(player, iS) {
		var kD = aE.fi,
			fl = ah.hD[player].length;
		ap.jp.k5(player), ah.hD[player].length !== fl && ap.jp.kC(player, kD, fl, iS)
	}
	this.kg = new Uint8Array(aE.fi), this.dv = function() {
		this.kg.fill(0)
	}, this.kh = function(player, iS) {
		var kj, kl, km, kn;
		ae.ki(player) && (kj = af.kk(player), 3 <= (kl = aF.iS[player]) && kl < 6 && (iS = Math.max(ah.hn[player] - kj, iS)), km = ah.hS[player].length, kn = ah.hR[player].length, 30 * ah.hZ[player] > aE.ko && kp[player] < 10 && 100 * kn <= km &&
			aF.kq(player, 10), aE.ie ? function(player, iS, kl, kj) {
				var kD;
				if (ap.jp.kH(player, !1) || ap.jp.kM(player, !1)) {
					if (!ap.jp.kO(player))
						if (ap.jp.kN()) ku(player, iS), kv(player, aE.fi, kl);
						else {
							if (az.kw(aF.kx[kl])) kD = ap.jp.kT(player);
							else {
								if (ap.jp.kQ() && az.kw(aF.kz[kl]) && ap.jp.kS(), 6 === kl) return ky(player, iS, ap.jp.kf(), kl);
								kD = ap.jp.kW(player)
							}
							ky(player, iS, kD, kl), kv(player, kD, kl)
						}
				} else bQ.ks.eq(player) || ap.jt.eq(player) || ! function(player, iS, kl, kj) {
					var kg = ap.jr.kg;
					kg[player] = 0;
					var l2 = bj.fj[player];
					if (0 !== l2) {
						var l3 = ah.hn[player],
							hZ = ah.hZ;
						if (player < aE.l4 && (iS = l3), !(l3 < hZ[player] || 5 === kl && l3 < kj || 4 === kl && l3 < bO.gC(kj, 2))) {
							bk.l5(l2);
							for (var fl = bR.gG[0], gP = bR.gP, aC = az.kL(fl), g5 = 0; g5 < fl; g5++) {
								var ev = gP[(g5 + aC) % fl];
								if (kg[ev]) return bB.l6.l7(player, ev, iS)
							}
							var l8 = bQ.z.l8;
							for (g5 = 0; g5 < fl; g5++)
								if (ev = gP[(g5 + aC) % fl], l8[ev] && ev !== player) return bB.l6.l7(player, ev, iS)
						}
					}
				}(player, iS, kl, kj)
			}(player, iS, kl, kj) : (!kn || km && (km < kn && !az.kL(10) || 100 * kn <= km && az.kL(3) || !az.kL(8))) && bQ.ks.eq(player) || function(player, iS, kl) {
				ap.jp.kH(player, !0) || ap.jp.kM(player, !0) ? ap.jp.kO(player) || (ap.jp.kN() ? ku(player, iS) : az.kw(aF.kx[kl]) ? ky(player, iS, ap.jp.kT(player), kl) : 5 === kl ? ky(player, iS, ap.jp.kb(), kl) : (ap.jp.kQ() && az.kw(aF
					.kz[kl]) && ap.jp.kS(), ky(player, iS, 6 === kl ? ap.jp.kf() : ap.jp.kW(player), kl))) : ap.jt.eq(player)
			}(player, iS, kl))
	}
}

function cE() {
	var l9 = new Uint8Array(aE.fi),
		lA = new Uint16Array(aE.fi),
		lB = new Uint16Array(aE.fi),
		lC = new Uint8Array(aE.fi),
		lD = (this.iS = new Uint8Array(aE.fi), new Uint16Array(aE.fi)),
		lE = new Uint16Array(aE.fi);

	function lT(aC) {
		l9[aC] = 1 + bO.gC(lD[aC] * az.random(), 10 * az.value(100))
	}
	this.lF = null, this.kz = [97, 94, 70, 40, 20, 0, 100], this.lG = [500, 450, 400, 300, 80, 50, 100], this.kx = [0, 0, 5, 25, 50, 100, 0], this.lH = [60, 74, 112, 200, 256, 512, 512], this.lI = [1, 2, 3, 4, 6, 8, 1], this.lJ = [500, 450, 400, 300,
		80, 50, 100
	], this.lK = [100, 150, 250, 400, 600, 1e3, 100], this.dw = function() {
		this.lF = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dv = function() {
		l9.fill(0), lA.fill(0), lB.fill(0), lC.fill(0), this.iS.fill(0), lD.fill(0), lE.fill(0);
		var lL = aE.l4;
		if (9 === aE.lM) this.lN();
		else if (__fx.customLobby.isActive())
			for (aC = aE.lQ - 1; 0 <= aC; aC--) this.iS[aC + lL] = __fx.customLobby.gameInfo.difficulty;
		else if (aE.lO)
			if (3 === aE.data.botDifficultyType)
				for (aC = aE.lQ - 1; 0 <= aC; aC--) {
					var ib = aC + lL;
					this.iS[ib] = aE.data.botDifficultyData[ib]
				} else if (2 === aE.data.botDifficultyType)
					for (aC = aE.lQ - 1; 0 <= aC; aC--) this.iS[ib = aC + lL] = aE.data.botDifficultyTeam[bj.lR[bj.fj[ib]]];
				else if (1 === aE.data.botDifficultyType) {
			var lS = this.lF.length;
			for (aC = aE.lQ - 1; 0 <= aC; aC--) this.iS[aC + lL] = aC % lS
		} else
			for (lS = aE.data.botDifficultyValue, aC = aE.lQ - 1; 0 <= aC; aC--) this.iS[aC + lL] = lS;
		else
			for (var lP = 8 === aE.lM ? 1 : 0, aC = aE.lQ - 1; 0 <= aC; aC--) this.iS[aC + lL] = lP;
		for (aC = 0; aC < lL; aC++) this.iS[aC] = 6;
		var fl = aE.fi;
		for (aC = 0; aC < fl; aC++) this.iS[aC] <= 2 ? (lC[aC] = 5, lD[aC] = lE[aC] = 1040, 0 === this.iS[aC] ? (lA[aC] = 980, lB[aC] = 980) : 1 === this.iS[aC] ? (lA[aC] = 980, lB[aC] = 920, lD[aC] = lE[aC] = 1100) : (lA[aC] = 825, lB[aC] =
			750)) : this.iS[aC] <= 4 ? (lC[aC] = 1 + az.kL(20), 3 === this.iS[aC] ? (lA[aC] = lB[aC] = 500, lD[aC] = lE[aC] = 1e3) : (lE[aC] = 250 + az.kL(1501), lD[aC] = 500 + az.kL(501), lA[aC] = 300 + az.kL(201), lB[aC] = 100 + az.kL(
			201))) : this.iS[aC] <= 5 ? (lD[aC] = 1e3, lE[aC] = 1e3, lC[aC] = 35 + az.kL(16), lA[aC] = 300 + az.kL(201), lB[aC] = 50 + az.kL(101)) : (lD[aC] = lE[aC] = 800, lC[aC] = 5, lA[aC] = 10, lB[aC] = 250), lT(aC)
	}, this.lN = function() {
		for (var fP = b0.lU, lL = aE.l4, aC = fP - 1; 0 <= aC; aC--) this.iS[aC + lL] = 0;
		for (var g5 = 0; g5 < 6; g5++) {
			for (aC = fP + b0.lV[g5] - 1; fP <= aC; aC--) this.iS[aC + lL] = g5;
			fP += b0.lV[g5]
		}
	}, this.kq = function(hJ, value) {
		l9[hJ] = Math.min(value, l9[hJ])
	}, this.eq = function(hJ) {
		0 == --l9[hJ] && ! function(hJ) {
			(function(hJ) {
				lD[hJ] !== lE[hJ] && (lD[hJ] += lD[hJ] < lE[hJ] ? 3 : -3);
				lA[hJ] !== lB[hJ] && (lA[hJ] += lA[hJ] < lB[hJ] ? lC[hJ] : -lC[hJ], lA[hJ] = (Math.abs(lA[hJ] - lB[hJ]) <= lC[hJ] ? lB : lA)[hJ]);
				l9[hJ] = bO.gC(lD[hJ], 10)
			})(hJ), ap.jr.kh(hJ, bO.gC(lA[hJ] * ah.hn[hJ], 1e3))
		}(hJ)
	}, this.lY = function(hJ, hE) {
		lD[hJ] = lE[hJ] = hE
	}
}

function jn() {
	var lZ = new Uint16Array(aE.fi);

	function lo(player, lm) {
		for (var fl = bR.gG[0], gO = bR.gO, m0 = -1, m1 = aE.fi, aC = 0; aC < fl; aC++) {
			var g1, hJ = gO[aC];
			bw.fe(player, hJ) && (g1 = bP.jF(lm, bP.jb(hJ)), -1 === m0 || g1 < m0) && (m0 = g1, m1 = hJ)
		}
		return m1
	}

	function lq(ln, lm) {
		if (ln === aE.fi) return 0;
		var hS = ah.hS[ln],
			lz = hS.length;
		if (0 === lz) return 0;
		for (var fl = Math.min(lz, 10), m1 = 0, m0 = bP.jF(hS[m1] >> 2, lm), aC = 0; aC < fl; aC++) {
			var ib = az.kL(lz),
				g1 = bP.jF(hS[ib] >> 2, lm);
			g1 < m0 && (m0 = g1, m1 = ib)
		}
		return hS[m1] >> 2
	}

	function lv(player, lm, kD, m3) {
		var m4;
		(m3 === aE.fi || (m4 = bP.jb(kD), m3 = bP.jb(m3), bP.jF(lm, m4) < bP.jF(lm, m3))) && (lZ[player] = kD)
	}
	this.dv = function() {
		lZ.fill(aE.fi)
	}, this.jz = function() {
		if (bi.l1() % 109 == 9 && !(am.la < 20) && aE.ie && !(bk.lb() < bO.gC(8 * aE.ko, 10))) {
			var lc = bk.ld();
			if (bj.lR[lc]) {
				bk.le(lc);
				var fl = bR.gG[0];
				if (0 !== fl)
					for (var h = bR.gP, lf = am.lf, la = am.la, lg = lZ, ib = az.kL(fl), aC = 0; aC < la; aC++) {
						var iE = lf[aC],
							lh = h[ib];
						bD.h7.li(iE, lh) && 512 === lg[iE] && (lg[iE] = lh, ib = (ib + 1) % fl)
					}
			}
		}
	}, this.eq = function(player) {
		var lm, lp, ln, lj = function(player) {
			var kD = lZ[player];
			if (kD !== aE.fi) {
				if (bD.h7.m2(kD) && ah.hS[kD]) return kD;
				lZ[player] = aE.fi
			}
			return aE.fi
		}(player);
		return function(player) {
			for (var ly = am.lf, lz = am.la, fl = Math.min(lz, lz < 17 && 5 === az.kL(20) ? 1 : 16), hK = az.kL(lz), gO = bR.gO, hS = ah.hS, hE = 0, aC = 0; aC < fl; aC++) {
				var hJ = ly[(aC + hK) % lz];
				hJ !== player && hS[hJ].length && (gO[hE++] = hJ)
			}
			bR.gG[0] = hE
		}(player), 0 !== bR.gG[0] && (0 < (lp = lq(ln = lo(player, lm = bP.jg(player)), lm)) && bQ.lr.ls(player, bQ.lt.lu(lp, lm)) ? (lv(player, lm, ln, lj), !0) : 0 < (ln = function(player, lm) {
			for (var fl = bR.gG[0], gO = bR.gO, lg = lZ, hK = 0, aC = 0; aC < fl; aC++) {
				var hJ = gO[aC],
					hJ = lg[hJ];
				hJ !== aE.fi && bD.h7.m2(hJ) && player !== hJ && bw.fe(player, hJ) && (gO[hK++] = hJ)
			}
			return 0 !== (bR.gG[0] = hK) ? lq(lo(player, lm), lm) : 0
		}(player, lm)) && bQ.lr.ls(player, bQ.lt.lu(ln, lm)) ? (lv(player, lm, ad.fd(ln << 2), lj), !0) : !!(0 < (lp = lq(lj, lm)) && bQ.lr.ls(player, bQ.lt.lu(lp, lm))))
	}
}

function ju() {
	function m8(player) {
		for (var gA = ah.gA[player], fl = gA.length, gB = Math.max(bO.gC(fl, 12), 1), fn = ad.fn, eT = az.kL(fl), aC = 0; aC < fl; aC += gB)
			for (var fa = gA[(aC + eT) % fl], fo = 3; 0 <= fo; fo--) {
				var fp = fa + fn[fo];
				if (ad.fq(fp)) return {
					fP: fp,
					id: ad.fT(fp),
					hJ: player
				}
			}
		return null
	}

	function mD(player, mF) {
		var iS = bD.h7.mG(player, aF.lJ[aF.iS[player]]);
		ah.hD[player].push(mF.fP), ae.eu(player, iS, mF.hJ), aG.kB(player, !0)
	}
	this.eq = function(player) {
		return !!bV.fQ(bV.fR) && !!aE.data.passableMountains && 0 !== ah.gA[player].length && function(player) {
			var m7 = m8(player);
			if (null === m7) return !1;
			! function(player) {
				for (var lf = am.lf, la = am.la, fl = Math.min(la, 12), hK = az.kL(la), gO = bR.gO, gA = ah.gA, hE = 0, aC = 0; aC < fl; aC++) {
					var hJ = lf[(aC + hK) % la];
					hJ !== player && gA[hJ].length && bw.fe(player, hJ) && (gO[hE++] = hJ)
				}
				bR.gG[0] = hE
			}(player);
			var mA = function(fS) {
				for (var fl = bR.gG[0], gO = bR.gO, aC = 0; aC < fl; aC++) {
					var mF = m8(gO[aC]);
					if (null !== mF && mF.id === fS) return mF
				}
				return null
			}(m7.id);
			return null !== mA ? (mD(player, mA), !0) : function(player, fS) {
				var fl = ap.ji.mE;
				if (0 !== fl)
					for (var fP = ap.ji.buffer[az.kL(fl)] << 2, fn = ad.fn, fo = az.kL(4);;) {
						if (fP += fn[fo], ad.fq(fP)) {
							if (ad.fT(fP) === fS) return mD(player, {
								fP: fP,
								hJ: aE.fi
							}), !0;
							break
						}
						if (!ad.fc(fP)) break
					}
				return !1
			}(player, m7.id)
		}(player)
	}
}

function jl() {
	this.eq = function(player) {
		return bQ.lr.ls(player, function(player) {
			var fl = ap.ji.mE;
			if (0 === fl) return -1;
			for (var lz = Math.min(fl, ap.performance.mI ? fl : 10), buffer = ap.ji.buffer, kK = bO.gC(az.random() * fl, az.value(100)), e = kK + lz, mJ = az.jh(ah.jc[player], ah.jd[player]), mK = az.jh(ah.je[player], ah.jf[player]),
					m1 = -1, g1 = bP.jG(0, 0, bV.fw, bV.fx), aC = kK; aC < e; aC++) {
				var hK = aC % fl,
					mL = bP.g3(mJ, mK, buffer[hK]);
				mL < g1 && (g1 = mL, m1 = hK)
			}
			return -1 !== m1 ? function(fX, mJ, mK) {
				var i1 = bP.ft(fX),
					i3 = bP.fv(fX),
					j6 = mJ - i1,
					j9 = mK - i3;
				Math.abs(j6) >= Math.abs(j9) ? (j9 = 0, j6 = Math.sign(j6)) : (j6 = 0, j9 = Math.sign(j9));
				j6 === j9 && (j6 = 1);
				for (;;) {
					if (i1 += j6, i3 += j9, !bP.g7(i1, i3)) break;
					if (fX = bP.g8(i1, i3), ad.j0(bP.fb(fX))) return fX
				}
				return -1
			}(buffer[m1], mJ, mK) : -1
		}(player))
	}
}

function jw() {
	this.eq = function(player) {
		var mN = function(player) {
			for (var mQ = bQ.mQ.mS(), fl = mQ.length, lz = Math.min(fl, 32), ib = az.kL(fl), aC = 0; aC < lz; aC++) {
				var mN = (aC + ib) % fl,
					mP = mQ[mN],
					jD = mP[0],
					jE = mP[mP.length - 1];
				if (bQ.lt.mT(player, jD) && bQ.lt.mU(player, jE)) return mN;
				if (bQ.lt.mT(player, jE) && bQ.lt.mU(player, jD)) return 0 <= (mN = bQ.mQ.mV(jE, jD)) ? mN : bQ.mQ.mW() ? -1 : bQ.mQ.mX(bQ.mQ.mY(mP))
			}
			return -1
		}(player);
		return -1 !== mN && (mN = bQ.mQ.get(mN), !bQ.lt.mR(player, mN)) && (bR.h[0] = mN, !0)
	}
}

function jo() {
	this.mI = 0, this.dv = function() {
		this.mI = 0
	}, this.eq = function() {
		if (!this.mI && bi.l1() % 30 == 7 && bD.h7.mb(90) && (ap.performance.mI = 1)) {
			if (aE.ie) {
				var lc = bk.ld();
				if (bj.lR[lc]) {
					bk.l5(lc);
					var h = bR.gP,
						fl = bR.gG[0];
					if (0 !== fl)
						for (var me = Math.min(100 + 10 * (fl - 1), 400), aC = 0; aC < fl; aC++) aF.lY(h[aC], me)
				}
			}
			aF.lY(mf[0], 100)
		}
	}
}

function jj() {
	var mg = 0,
		mh = 0,
		mi = 300,
		mj = 300,
		mk = 0;
	this.mE = 0, this.buffer = new Uint32Array(512), this.dv = function() {
		mh = mg = 0, this.mE = 0, mk = 0
	}, this.eq = function() {
		if (function() {
				var fl = ap.ji.mE;
				if (0 === fl) return 1;
				var buffer = ap.ji.buffer;
				if (bi.l1() % 35 == 6) {
					for (var aC = fl - 1; 0 <= aC; aC--) ad.fc(buffer[aC] << 2) || (fl--, buffer[aC] = buffer[fl]);
					ap.ji.mE = fl
				}
				return fl < buffer.length
			}())
			if (mi <= mg) {
				var mo = ap.ji.mE;
				if (mo) {
					if (bi.l1() % 350 != 1) return;
					if (mk !== mo) return void(mk = mo);
					if (!bD.h7.kR(mf[0])) return
				} else if (bi.l1() % 12 != 8) return;
				bD.h7.mp() || ap.ji.dv()
			} else {
				var aC, j = bV.fw,
					mq = j - 2,
					mo = mq * (bV.fx - 2),
					mr = mi,
					buffer = ap.ji.buffer,
					lz = ap.ji.mE,
					ms = buffer.length,
					hK = Math.min(mh + mr * ((1 + 19 * ap.performance.mI) * mj), mo);
				for (aC = mh; aC < hK; aC += mr) {
					var fP = 4 * (aC % mq + (bO.gC(aC, mq) + 1) * j + 1);
					if (ad.fc(fP) && (buffer[lz] = fP >> 2, ++lz === ms)) {
						aC += mr;
						break
					}
				}(mh = aC) >= mo && (mh = ++mg), ap.ji.mE = lz
			}
	}
}

function jy() {
	this.eq = function() {
		if (bi.l1() % 51 == 45)
			for (var fl = bQ.z.mu, mv = bQ.z.mv, mw = bQ.z.mw, mx = bQ.z.mx, my = bQ.z.my, lK = aF.lK, iS = aF.iS, aC = 0; aC < fl; aC++) {
				var mP, player, n2, mz = mv[aC];
				mz % 64 == 6 || (mP = mw[aC], (player = bQ.lt.n0(mP[mP.length - 1])) < 0) || !bD.h7.li(player, my[aC] >> 3) || az.kL(1e3) >= lK[iS[player]] || ! function(n6, mP) {
					for (var fl = mP.length - 1, n7 = bQ.z.n8[n6], g1 = 0, aC = n7 + 1; aC < fl; aC++) g1 += bP.jC(mP[aC], mP[aC + 1]);
					return (g1 += bP.jC(bP.jU(bQ.z.n9[n6]), mP[n7 + 1])) <= 60
				}(aC, mP) || (n2 = mx[aC], 64 <= mz && bQ.n3.n4(player, n2)) || function(player, mP, n2, n6, mz) {
					bQ.nA.nB(player) && bD.h7.nC(player, aF.lG[aF.iS[player]], 32, 0) && (bQ.z.mv[n6] = 64 + mz % 64, bQ.n3.eu(n2, bQ.z.nD), bR.h[0] = bQ.mQ.mY(mP), bR.gN[1] = 6, bD.h7.nE(player), n6 = aF.lG[aF.iS[player]], bQ.z.nF(player,
						n6))
				}(player, mP, n2, aC, mz)
			}
	}
}

function nG() {
	bU.nH.nI(), aO.eq(), ag.eq(), aX.nJ(), b1.z.eq()
}

function nK() {
	b2.eq(), aH.eq(), ao.eq(), af.eq(), b5.eq(), aG.eq(), ap.eq(), bQ.z.eq(), am.nL(), aW.eq(), b0.eq(), bY.eq(), ag.eq(), ag.nM(), aX.eq(), bS.eq(), aV.eq(), aQ.eq(), b9.nN(), aO.eq(), b6.eq(), aS.eq(), ax.eq(), bg.eq(), bk.eq(), b1.z.eq(), b1.nO
		.eq(), u.eq(), bX.ee.eq(), bC.eq(), bi.eq()
}

function nP() {
	aI.eq(), aY.eq(), aR.eq(), aw.eq(), bF.eq(), b8.eq(), b9.eq(), ay.nQ()
}

function nR() {
	aW.nS(!1), aQ.nS(), aX.nS(!1), aV.nS(), aS.nS(), ax.nS(), ag.nS(!1), bk.nT()
}

function nU() {
	ag.nS(!1) && (bi.e2 = !0), b1.z.eq()
}

function cF() {
	var nV, nW, nX;

	function nZ(nb) {
		for (var aC = nV - 1; 0 <= aC; aC--) 0 === nX[nW[aC]] && ah.hZ[nW[aC]] >= nb && gp(nW[aC])
	}

	function nY(player) {
		var em;
		64 === nX[player] ? nX[player] = 6 : (em = ah.hZ[player], nX[player] = em < 1e3 ? 3 : em < 1e4 ? 2 : em < 6e4 ? 1 : 0)
	}
	this.dv = function() {
		nV = 0, nW = new Uint16Array(aE.fi), nX = new Uint8Array(aE.fi)
	}, this.eq = function() {
		for (var aC = nV - 1; 0 <= aC; aC--) 64 === nX[nW[aC]] ? nY(nW[aC]) : 0 == nX[nW[aC]]-- && (nY(nW[aC]), gp(nW[aC]));
		16e4 <= ah.hZ[mf[0]] && (nZ(16e4), 3e5 <= ah.hZ[mf[0]]) && nZ(3e5), bD.h7.m2(aE.fV) && (bg.nc[7] = Math.max(ah.hZ[aE.fV], bg.nc[7]))
	}, this.h9 = function(player) {
		for (var g4, aC = nV - 1; 0 <= aC; aC--)
			if (player === nW[aC]) {
				for (nV--, g4 = aC; g4 < nV; g4++) nW[g4] = nW[g4 + 1];
				return
			}
	}, this.kB = function(player, nd) {
		for (var aC = nV - 1; 0 <= aC; aC--)
			if (player === nW[aC]) return;
		nW[nV++] = player, nX[player] = nd ? 2 : 64
	}
}

function cG() {
	var size, ks;
	this.dv = function() {
		size = aE.lQ, ks = new Uint16Array(aE.fi);
		for (var l4 = aE.l4, aC = aE.lQ - 1; 0 <= aC; aC--) ks[aC] = l4 + aC
	}, this.eq = function() {
		for (var aC = size - 1; 0 <= aC; aC--)
			if (0 === ah.ng[ks[aC]]) {
				g4 = void 0;
				var g4 = aC;
				size--, ks[g4] = ks[size]
			} else aF.eq(ks[aC])
	}, this.nf = function(hJ) {
		ks[size++] = hJ
	}
}

function cH() {
	var ni, nj, nk, nl, nm, nn, no, np, nq, nr, ns, nt, nu, nv = !1,
		nw = !1;

	function nx(ny) {
		nt = bi.el, nk = nl = nj = 0, nm = (nu = 33) / ny, ni = 1 / (ny / nu / 4), nn = (i.j / 2 + jN) / ix, no = (i.k / 2 + jO) / ix, np = ix
	}

	function o5(aC) {
		var o7; - 1 !== aC && (aC = bP.jU(bQ.z.n9[aC]), o7 = bP.ft(aC) - 15, aC = bP.fv(aC) - 15, aI.o1(o7, aC, 29 + o7, 29 + aC))
	}

	function oI(eY) {
		Math.abs(Math.log(ns / np)) < .125 && (ns = eY * np)
	}

	function oH(o7, o8, oK, oL) {
		nq = (o7 + oK + 1) / 2, nr = (o8 + oL + 1) / 2;
		oK = i.j / (oK - o7 + 1), o7 = i.k / (oL - o8 + 1);
		ns = .9 * (oK < o7 ? oK : o7)
	}
	this.nz = function() {
		return nv
	}, this.o0 = function() {
		nx(1), this.o1(0, 0, bV.fw - 1, bV.fx - 1), aE.iA || aE.hu || aE.hv || this.o2(aE.fV, 3e3, !0, .3)
	}, this.o3 = function(player, o4) {
		o5(bQ.lt.o6(player, o4))
	}, this.o2 = function(player, ny, o9, zoom) {
		aE.oA || nv && !o9 && nw || (0 === ah.hZ[player] ? o5(bQ.lt.oB(player)) : (aT.oC = !1, nw = o9, nx(ny), function(player) {
			nq = (ah.jc[player] + ah.jd[player] + 1) / 2, nr = (ah.je[player] + ah.jf[player] + 1) / 2
		}(player), function(zoom, player) {
			var j6 = ah.jd[player] - ah.jc[player] + 1,
				player = ah.jf[player] - ah.je[player] + 1,
				g4 = i.j / j6,
				g5 = i.k / player,
				g4 = (ns = g4 < g5 ? g4 : g5, 0 !== zoom ? zoom : j6 < 20 && player < 20 ? .5 : .9);
			ns *= g4, oI(7 / 8)
		}(zoom, player), nv = !0, at.oF()))
	}, this.oG = function(ny) {
		aE.hu || aE.oA || (aT.oC = !1, nw = !1, nx(ny), oH(0, 0, bV.fw - 1, bV.fx - 1), oI(7 / 8), nv = !0, at.oF())
	}, this.o1 = function(o7, o8, oK, oL) {
		nv = !1, oH(o7, o8, oK, oL), ix = ns, aT.oM(nq, i.j / 2), aT.oN(nr, i.k / 2), bd.oO(), bi.e2 = !0
	}, this.oP = function() {
		return !(nv && nw || (nv = !1))
	}, this.eq = function() {
		var oS, oT, fo, oW;
		nv && (nj < .5 ? nl < nm && (nl += nm * ni, nk = nj) : 1 - nk < nj && (nl = (nl -= nm * ni) < nm * ni ? nm * ni : nl), nt = nt >= bi.el ? bi.el - 1 : nt, fo = bi.el - nt, nj = 1e3 < fo || 1 < (nj += nl * fo / nu) ? 1 : nj, nt = bi.el,
			fo = ix, oS = jN, oT = jO, fo = (ix = np * Math.pow(ns / np, nj)) / fo, oW = 1 - (np * Math.pow(ns / np, 1 - nj) - np) / (ns - np), aT.oM(nn + oW * (nq - nn), i.j / 2), aT.oN(no + oW * (nr - no), i.k / 2), ag.zoom(fo, (oS * fo -
				jN) / (1 - fo), (oT * fo - jO) / (1 - fo)), bd.oO(), 1 <= nj && (nv = !1, be.oX = !0), bi.e2 = !0)
	}
}

function dp() {
	this.oY = -1, this.pow = -1;
	var oZ = null,
		oa = null,
		ob = null,
		oc = null,
		oe = [],
		og = 0,
		oh = null,
		oi = null,
		oj = null,
		ok = null,
		ol = this,
		om = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255,
		on = 4294967295;

	function ou(ov, ow, className) {
		ov = document.createElement(ov);
		return className && (ov.className = className), ow && ow.appendChild(ov), ov
	}

	function ox(ex, ow, action) {
		ow = ou("button", ow);
		return ow.type = "button", ow.textContent = ex, ow.addEventListener("click", action), ow
	}

	function oy(ow) {
		ow = ou("canvas", ow);
		return ow.width = 128, ow.height = 128, ow
	}

	function or(canvas, data) {
		canvas = canvas.getContext("2d");
		oi || (oi = canvas.createImageData(128, 128), oj = new Uint32Array(oi.data.buffer)),
			function(data, p0) {
				for (var fl = data.length, p1 = 0, position = 0, color = 0; position < 16384;) {
					var eU = p1 >> 3;
					if (fl <= eU) break;
					for (var eU = data[eU] << 8 | (1 + eU < fl ? data[1 + eU] : 0), oP = Math.min(16384, position + (eU >> 10 - (7 & p1) & 63)), p3 = color ? om : on, aC = position; aC < oP; aC++) p0[aC] = p3;
					position = oP, p1 += 6, color ^= 1
				}
				for (aC = position; aC < 16384; aC++) p0[aC] = on
			}(data, oj), canvas.putImageData(oi, 0, 0)
	}

	function os() {
		if (oZ) {
			oc.disabled = !og;
			for (var aC = 0; aC < oe.length; aC++) oe[aC].setAttribute("aria-pressed", String(Boolean(og & 1 << aC)))
		}
	}

	function p6(e) {
		var p8, p7;
		"Escape" === e.key ? (e.preventDefault(), ol.close()) : "Tab" === e.key && oZ && (p8 = (p7 = oZ.querySelectorAll("button:not(:disabled)"))[0], p7 = p7[p7.length - 1], e.shiftKey && document.activeElement === p8 ? (e.preventDefault(), p7
			.focus()) : e.shiftKey || document.activeElement !== p7 || (e.preventDefault(), p8.focus()))
	}

	function pF() {
		ol.close(), b1.es.pH(0, 0, ol.oY, ol.pow)
	}

	function pG() {
		var pI, op;
		og && (pI = og, op = oh, ol.close(), b1.es.pH(pI, op, ol.oY, ol.pow))
	}
	this.show = function(oo, op, oY, pow) {
		this.oY = oY, this.pow = pow, oh = op, oZ || function() {
			ok = document.activeElement, (oZ = ou("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), oZ.setAttribute("aria-modal", "true"), oZ.setAttribute("aria-label", L(14)), ou("style", oZ).textContent =
				".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
			var pB = ou("div", oZ, "captcha-reference-row");
			ou("span", pB, "captcha-reference-label").textContent = L(15), (ob = oy(pB)).className = "captcha-reference", ob.setAttribute("aria-label", L(16)), oa = ou("div", oZ, "captcha-grid");
			for (var aC = 0; aC < 16; aC++) oe.push(function(eU) {
				var e = ox("", oa, function() {
					og ^= 1 << eU, os()
				});
				return e.className = "captcha-tile", e.setAttribute("aria-label", L(13, [eU + 1])), e.setAttribute("aria-pressed", "false"), oy(e).setAttribute("aria-hidden", "true"), e
			}(aC));
			var pB = ou("div", oZ, "captcha-actions"),
				pE = ox(L(17), pB, function() {
					ol.close()
				});
			ox(L(18), pB, pF), oc = ox(L(19), pB, pG), oZ.addEventListener("keydown", p6), ol.resize(), os(), pE.focus()
		}(), or(ob, oo[0]);
		for (var aC = 0; aC < 16; aC++) or(oe[aC].firstChild, oo[aC + 1]);
		og = 0, os()
	}, this.resize = function() {
		var size;
		oZ && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), oZ.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (oZ) {
			for (var ot = oZ.querySelectorAll("canvas"), aC = 0; aC < ot.length; aC++) ot[aC].width = 0, ot[aC].height = 0;
			oZ.remove(), oe = [], oj = oi = oh = oc = ob = oa = oZ = null, og = 0, ok && document.body.contains(ok) && ok.focus(), ok = null
		}
	}
}

function ds() {
	this.nH = new pJ, this.pK = new pL, this.pM = new pN, this.dv = function(pO, pP) {
		this.pK.dv(pO, pP), this.nH.dv(pP), this.pM.dv()
	}
}

function pN() {
	var pQ = 0,
		pR = [],
		pS = [],
		pT = "";

	function pd(pe, name) {
		var pj = bq.pk;
		return pj && pe === pj.pe || 0 <= pR.indexOf(pe) || (pS.length && (pj = function(pe, name) {
			pe = bq.pm.pn(pe), pe = pe ? pe.username : name;
			return pe ? bD.pa.po(pe) : null
		}(pe, name)) ? 0 <= pS.indexOf(pj) : void 0)
	}
	this.dv = function() {
		pQ = 0, pR = [], pS = [], pT = ""
	}, this.pU = function() {
		return pQ
	}, this.pV = function(pW) {
		pQ = 1 - pQ, pT = "", pR = [], pS = [], this.pX(pW), c0.nH.reset()
	}, this.pX = function(pW) {
		if (pQ && bq.fI) {
			var h = bq.pY.pZ(pW),
				pW = h.join(" ");
			if (pW !== pT) {
				pT = pW, pR = [], pS = [];
				for (var aC = 0; aC < h.length; aC++) bD.pa.startsWith(h[aC], "@[") ? pS.push(h[aC].substring(2, h[aC].length - 1).toUpperCase()) : pR.push(bJ.fC.fD(h[aC].substring(1), 5));
				c0.nH.reset()
			}
		}
	}, this.pb = function(pc) {
		if (!pQ || !pR.length && !pS.length || 4 < pc.id) return 1;
		if (pd(pc.pe, pc.pf)) return 1;
		if (void 0 !== pc.target && pd(pc.target, pc.pg)) return 1;
		if (0 === pc.id)
			for (var h = bq.pY.pZ(pc.s), aC = 0; aC < h.length; aC++)
				if (bD.pa.startsWith(h[aC], "@[")) {
					var ph = h[aC].substring(2, h[aC].length - 1).toUpperCase();
					if (0 <= pS.indexOf(ph) || ph === (ph = void 0, (ph = bq.pk) ? bD.pa.po(ph.username) : null)) return 1
				} else if (pd(bJ.fC.fD(h[aC].substring(1), 5), null)) return 1;
		return 0
	}
}

function pJ() {
	var pp = null,
		pq = 1048575;

	function q0() {
		var hE = pp.childNodes.length - bq.z.q3;
		if (!(hE <= 0)) {
			for (var aC = 0; aC < hE; aC++) bq.ps.pt(pp.firstChild), pp.removeChild(pp.firstChild);
			c0.pK.q4()
		}
	}

	function px(pw, q5) {
		q5 && (q5.q6 = 1, pw.appendChild(bq.ps.transform(q5)))
	}
	this.dv = function(pP) {
		pp = pP, pq = 1048575
	}, this.reset = function(pr) {
		if (pq = 1048575, bq.ps)
			for (var e = pp.firstChild; e; e = e.nextSibling) bq.ps.pt(e);
		pp.textContent = "", pr || this.nT()
	}, this.nT = function() {
		var pu = bq.z.pu,
			pv = bq.z.pv,
			fl = pu.length,
			kK = 1048575 === pq ? 0 : fl - (pv - pq + 1048575) % 1048575;
		if (pq = pv, !(fl <= (kK = Math.max(kK, 0)))) {
			for (var pw = document.createDocumentFragment(), aC = kK; aC < fl; aC++) c0.pM.pb(pu[aC]) && px(pw, bq.lt.py(pu[aC], bq.lt.pz(pu[aC])));
			pp.appendChild(pw), q0(), c0.pK.q1()
		}
	}, this.q2 = function(s) {
		var pw = document.createDocumentFragment();
		px(pw, s), pp.appendChild(pw), q0(), c0.pK.q1()
	}
}

function pL() {
	var q7 = null,
		pp = null,
		q8 = 1,
		q9 = null,
		qA = 0;

	function qC() {
		q9 && q9.parentNode === pp || (q9 = pp.firstChild, qA = 0), q9 && (q7.scrollTop = q9.offsetTop + qA)
	}
	this.dv = function(pO, pP) {
		pp = pP, q8 = 1, q9 = null, qA = 0, (q7 = pO).addEventListener("scroll", function() {
			if (q7.scrollTop < q7.scrollHeight - q7.clientHeight - 2) {
				q8 = 0;
				for (var qD = pp.childNodes, qE = q7.scrollTop, aC = 0; aC < qD.length; aC++)
					if (qD[aC].offsetTop + qD[aC].offsetHeight > qE) return void(q9 = qD[aC], qA = qE - qD[aC].offsetTop);
				q9 = null
			} else q8 = 1
		})
	}, this.q4 = function() {
		q8 || qC()
	}, this.q1 = function(c3) {
		q8 ? q7.scrollTop = q7.scrollHeight : c3 && qC()
	}
}

function c9() {
	var ev = bD.color;
	this.qF = ev.qG(0, 0, 0), this.qH = ev.qI(0, 0, 0, .7), this.qJ = ev.qI(0, 0, 0, .5), this.qK = ev.qI(0, 0, 0, .85), this.qL = ev.qI(0, 0, 0, .75), this.qM = ev.qI(0, 0, 0, .6), this.qN = ev.qI(0, 0, 0, .35), this.qO = ev.qG(255, 255, 255), this
		.qP = ev.qI(255, 255, 255, .3), this.qQ = ev.qI(255, 255, 255, .6), this.qR = ev.qI(255, 255, 255, .4), this.qS = ev.qI(255, 255, 255, .25), this.qT = ev.qI(255, 255, 255, .85), this.qU = ev.qI(255, 255, 255, .75), this.qV = ev.qI(255, 255,
			255, .15), this.qW = ev.qI(255, 255, 255, .11), this.qX = ev.qG(128, 128, 128), this.qY = ev.qI(64, 64, 64, .75), this.qZ = ev.qI(88, 88, 88, .83), this.qa = ev.qI(60, 60, 60, .85), this.qb = ev.qI(80, 60, 60, .85), this.qc = ev.qG(170,
			170, 170), this.qd = ev.qG(200, 235, 245), this.qe = ev.qG(30, 255, 30), this.qf = ev.qG(0, 200, 0), this.qg = ev.qG(128, 255, 128), this.qh = ev.qI(10, 65, 10, .75), this.qi = ev.qI(0, 255, 0, .6), this.qj = ev.qI(0, 255, 0, .5), this
		.qk = ev.qI(0, 200, 0, .5), this.ql = ev.qI(0, 100, 0, .75), this.qm = ev.qI(0, 60, 0, .8), this.qn = ev.qI(0, 255, 0, .3), this.qo = ev.qI(0, 180, 0, .6), this.qp = ev.qI(0, 120, 0, .85), this.qq = ev.qG(0, 120, 0), this.qr = ev.qI(0, 70, 0,
			.85), this.qs = ev.qG(190, 230, 190), this.qt = ev.qG(0, 255, 0), this.qu = ev.qI(10, 120, 10, .9), this.qv = ev.qG(200, 255, 200), this.qw = ev.qG(255, 120, 120), this.qx = ev.qG(255, 160, 160), this.qy = ev.qG(255, 70, 70), this.qz = ev
		.qG(230, 0, 0), this.r0 = ev.qI(220, 0, 0, .6), this.r1 = ev.qI(255, 100, 100, .8), this.r2 = ev.qI(100, 0, 0, .85), this.r3 = ev.qI(60, 0, 0, .85), this.r4 = ev.qI(200, 0, 0, .6), this.r5 = ev.qI(120, 0, 0, .85), this.r6 = ev.qG(255, 70,
		10), this.r7 = ev.qG(230, 190, 190), this.r8 = ev.qG(255, 0, 0), this.r9 = ev.qG(255, 0, 255), this.rA = ev.qI(60, 0, 60, .85), this.rB = ev.qI(0, 60, 60, .85), this.rC = ev.qI(10, 60, 60, .9), this.rD = ev.qI(0, 96, 96, .75), this.rE = ev
		.qG(0, 255, 255), this.rF = ev.qG(160, 160, 255), this.rG = ev.qI(0, 40, 90, .75), this.rH = ev.qI(0, 0, 255, .6), this.rI = ev.qG(200, 200, 255), this.rJ = ev.qI(50, 50, 255, .83), this.rK = ev.qI(20, 90, 150, .75), this.rL = ev.qI(10, 10,
			120, .75), this.rM = ev.qI(10, 60, 160, .9), this.rN = ev.qG(200, 220, 255), this.rO = ev.qI(0, 120, 255, .35), this.rP = ev.qG(70, 150, 255), this.rQ = ev.qI(90, 90, 255, .9), this.rR = ev.qG(255, 120, 100), this.rS = ev.qI(255, 255, 0,
			.5), this.rT = ev.qI(255, 255, 150, .2), this.rU = ev.qG(255, 255, 0), this.rV = ev.qG(255, 255, 200), this.rW = ev.qI(200, 200, 0, .6), this.rX = ev.qI(140, 120, 0, .75), this.rY = ev.qI(180, 160, 40, .75), this.rZ = ev.qI(70, 50, 20,
			.85), this.ra = ev.qI(30, 30, 0, .85), this.rb = ev.qI(60, 60, 0, .85), this.rc = ev.qG(255, 255, 100), this.rd = ev.qG(255, 255, 140), this.re = ev.qI(255, 140, 0, .75), this.rf = ev.qI(70, 40, 0, .85), this.rg = ev.qG(255, 150, 0), this
		.rh = ev.qI(255, 200, 80, .85), this.ri = ev.qI(0, 0, 0, 0), this.rj = ev.qI(255, 255, 255, 0), this.rk = ev.qI(254, 254, 254, 0)
}

function d9() {
	this.iC = new rl, this.h7 = new rm, this.rn = new ro, this.rp = new rq, this.l6 = new rr
}

function rl() {
	this.rs = 1, this.iD = function(fX) {
		aE.hv || (aE.lO ? bB.rn.iD(aE.fV, fX) : b1.rt.ru(fX))
	}, this.iJ = function(jM, kD) {
		aE.hv || (this.rs && (this.rs = 0, bm.rv.q1(182, jM)), aE.lO ? bB.rn.iJ(aE.fV, jM, kD) : b1.rt.rw(jM, kD))
	}, this.rx = function(jM, ry) {
		aE.hv || (aE.lO ? bB.rn.rz(aE.fV, jM, ry) : b1.rt.s0(jM, ry))
	}, this.iO = function(jM, fX) {
		aE.hv || (fX = (fX << 3) + bR.gN[6], aE.lO ? bB.rn.iO(aE.fV, jM, fX) : bQ.nA.nB(aE.fV) && b1.rt.s2(jM, fX))
	}, this.s3 = function(jM) {
		var o4;
		aE.hv || (849 === jM && (jM = 850), o4 = bR.gN[3], aE.lO ? bB.rn.s3(aE.fV, jM, o4) : bQ.s4.s5(aE.fV, o4) && b1.rt.s6(jM, o4))
	}, this.s7 = function(o4) {
		aE.hv || bQ.s8.s9(aE.fV, o4, 0) && (aE.lO ? bB.rn.s7(aE.fV, o4) : b1.rt.s6(849, o4))
	}, this.sA = function(jM, o4) {
		var player;
		aE.hv || (player = aE.fV, bQ.s8.s9(player, o4, (jM = 849 === jM ? 850 : jM) + 1) && (aE.lO ? bB.rn.s3(aE.fV, jM, o4) : b1.rt.s6(jM, o4)))
	}, this.sB = function(o4, s1) {
		aE.hv || (aE.lO ? bB.rn.sB(aE.fV, o4, s1) : b1.rt.sC(o4, s1))
	}, this.sD = function(kD) {
		aE.hv || (aE.lO ? bB.rn.sD(aE.fV, kD) : b1.rt.sE(kD))
	}, this.sF = function(sG) {
		aE.hv || (aE.lO ? bB.rn.sH(aE.fV, sG) : b1.rt.sI(sG))
	}, this.iX = function(sJ) {
		aE.hv || (aE.lO ? bB.rn.iX(aE.fV, sJ) : b1.rt.sK(sJ))
	}, this.sL = function() {
		aE.hv || (aE.lO ? bB.rn.sL(aE.fV) : b1.rt.sM())
	}, this.iU = function() {
		aE.hv || (aE.lO ? bB.rn.iU(aE.fV) : b1.rt.sE(513))
	}, this.iF = function(jM, fX, kD) {
		aE.hv || (aE.lO ? bB.rn.iF(aE.fV, jM, fX, kD) : b1.rt.sN(jM, fX, kD))
	}
}

function rr() {
	this.l7 = function(player, ry, iS) {
		bD.h7.sO(player, iS, ry) && (af.rx(player, ry), !bD.h7.kR(ry)) && ap.jr.kg[ry] && ap.jr.kg[ry]--
	}, this.sP = function(player, ry, iS) {
		bD.h7.sQ(iS, ry) ? ao.eu(ry, bR.gI[0]) && (bu.sR(player, ry, bR.gI[0], 1), bD.h7.hA(ry, bR.gI[0]), bg.sS(player, ry), ag.sT(ry, bR.gI[0])) : bg.hB(player, iS, 12)
	}
}

function rm() {
	this.sU = function(sG, player) {
		aE.hv || (aO.sF(aE.fV, player, sG), b1.rt.sV(sG, player))
	}, this.sW = function(player) {
		aE.hv || (aO.sX(player, 0), b1.rt.sY(player))
	}, this.sZ = function(sa, player) {
		aE.hv || (aO.sb(sa, player), b1.rt.sc(sa, player))
	}, this.sd = function() {
		aE.lO || aE.hu || aE.hv || b1.se.sd()
	}
}

function rq() {
	this.eq = function(aD) {
		var id, gU, oP;
		for (bK.dv(aD), bK.eU += 2, oP = 8 * bK.size; bK.eU + 8 <= oP;) id = bK.sf(4), gU = bK.sf(9), 0 === id ? this.sg(id, gU, bK.sf(22)) : 1 === id ? this.sg(id, gU, bK.sf(10), bK.sf(10)) : 2 === id ? this.sg(id, gU, bK.sf(10), bK.sf(9)) :
			3 === id ? this.sg(id, gU, bK.sf(10), bK.sf(27)) : 4 === id ? this.sg(id, gU, bK.sf(10), bK.sf(16)) : 5 === id || 6 === id ? this.sg(id, gU, bK.sf(10)) : 7 === id ? this.sg(id, gU, bK.sf(1)) : 10 === id ? this.sg(id, gU, bK.sf(20), bK
				.sf(22)) : 11 === id ? this.sg(id, gU, bK.sf(16), bK.sf(27)) : this.sg(id, gU)
	}, this.sh = [], this.si = function() {
		for (var sk = 0, sl = 0, sm = 0, sn = 0, so = 0, sp = 0, aC = 0; aC < 512; aC++) sk += ah.ng[aC], sl += ah.hZ[aC], sm += ah.hn[aC], sn += bQ.z.l8[aC];
		so += bQ.z.mu, sp += am.la, this.sh.push(sm % 1073741824 * 4 + (sk + sl + sn + so + sp) % 4)
	}, this.sg = function(id, gU, gW, gY) {
		0 === id ? bB.rn.iD(gU, gW) : 1 === id ? bB.rn.iJ(gU, gW, gY) : 2 === id ? bB.rn.rz(gU, gW, gY) : 3 === id ? bB.rn.iO(gU, gW, gY) : 4 === id ? bB.rn.s3(gU, gW, gY) : 5 === id ? bB.rn.sD(gU, gW) : 6 === id ? bB.rn.sH(gU, gW) : 7 === id ?
			bB.rn.iX(gU, gW) : 8 === id ? bB.rn.sL(gU) : 9 === id ? bB.rn.sq(gU) : 10 === id ? bB.rn.iF(gU, gW >> 10, gY, gW % 1024) : 11 === id && bB.rn.sB(gU, gW, gY)
	}
}

function ro() {
	this.iD = function(player, fX) {
		bD.h7.hx(0) && bD.h7.hy(player) && bP.jR(fX) && (bC.sr.ss(0, player, fX), aE.st.eu(player, fX))
	}, this.iJ = function(player, jM, kD) {
		bD.h7.hx(1) && bD.h7.hy(player) && bD.h7.su(player, kD) && bD.h7.nC(player, jM, 12, 0) && bD.h7.sv(player, kD) && ((kD = ae.kP(player, bR.fh[0])) || ae.ki(player)) && (ah.sw[player]++, bC.sr.ss(1, player, jM, bR.fh[0]), ap.jp.k3(player,
			kD)) && (bD.h7.nE(player), bg.sx(player, jM), ap.jp.k9(player))
	}, this.rz = function(player, jM, ry) {
		bD.h7.hx(1) && bD.h7.hy(player) && aE.ie && bD.h7.su(player, ry) && bD.h7.sy(player, ry) && bD.h7.sO(player, bD.h7.jL(player, jM), ry) && ao.eu(ry, bR.gI[0]) && (bC.sr.ss(2, player, jM, ry), af.rx(player, ry))
	}, this.iO = function(player, jM, s1) {
		bR.gN[1] = 7 & s1;
		var fX = s1 >> 3;
		bD.h7.hx(1) && bD.h7.hy(player) && bP.jR(fX) && bQ.nA.nB(player) && bQ.nA.sz(fX) && bD.h7.nC(player, jM, 32, 0) && bQ.lr.t0(player, fX, 1, bR.gN[1] < 4) && (bg.t1(player), bC.sr.ss(3, player, jM, s1), bD.h7.nE(player), bo.t2.iO(player),
			bQ.z.nF(player, jM))
	}, this.s3 = function(player, jM, o4) {
		849 === jM ? this.s7(player, o4) : bD.h7.hx(1) && bD.h7.hy(player) && bQ.s8.t3(player, o4, jM) && bC.sr.ss(4, player, jM, o4)
	}, this.s7 = function(player, o4) {
		bD.h7.hx(1) && bD.h7.hy(player) && bQ.t4.eq(player, o4) && bC.sr.ss(4, player, 849, o4)
	}, this.sB = function(player, o4, s1) {
		var n6;
		bD.h7.hx(1) && bD.h7.hy(player) && bQ.t5.has(player) && !((n6 = bQ.s8.e3(player, o4, s1)) < 0) && bQ.s8.t6(player, n6, s1) && (bQ.t5.t7(player), n6 = ah.hn[player], n6 = bO.gC(bQ.tA.tB * n6, 1e4), ah.hn[player] -= n6, bC.sr.ss(11, player,
			o4, s1))
	}, this.sD = function(player, kD) {
		513 === kD ? this.iU(player) : bD.h7.hx(1) && bD.h7.hy(player) && (kD = Math.min(kD, aE.fi), ae.kP(player, kD)) && (bC.sr.ss(5, player, kD), ae.tC(player, kD))
	}, this.sH = function(player, sG) {
		(bD.h7.hx(1) || bD.h7.hx(2)) && bD.h7.hy(player) && (sG = bO.iu(sG, 0, 1023), bC.sr.ss(6, player, sG), ag.tD(player, 0, sG))
	}, this.iX = function(player, sJ) {
		ax.iW(player) && (bC.sr.ss(7, player, sJ), ax.tE(player, sJ))
	}, this.sL = function(player) {
		(bD.h7.hx(0) || bD.h7.hx(1)) && bD.h7.hy(player) && aN.tF(player) && (bC.sr.ss(8, player), bT.sL(player))
	}, this.sq = function(player) {
		bC.sr.ss(9, player), bT.sq(player)
	}, this.iU = function(player) {
		ax.iY(player) && (bC.sr.ss(5, player, 513), ax.iU(player))
	}, this.iF = function(player, jM, fX, kD) {
		bD.h7.hx(1) && bD.h7.hy(player) && bD.h7.su(player, kD) && bD.h7.sv(player, kD) && bP.jR(fX) && an.fM.ff(player, fX) && (ae.kP(player, bR.fh[0]) || ae.ki(player)) && (bC.sr.ss(10, player, (jM << 10) + bR.fh[0], fX), kD = bD.h7.mG(player,
			jM), ah.hD[player].push(bR.fm[0]), ae.eu(player, kD, bR.fh[0]), aG.kB(player, !0), bg.tG(player))
	}
}

function tH() {
	var tJ;
	this.tI = [], this.tJ = document.createElement("div"), this.tK = function(pW, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pW, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.tJ.appendChild(
			title), title
	}, this.tL = function(pW, marginBottom) {
		var tM = document.createElement("p");
		return tM.textContent = pW, tM.style.fontSize = "0.75em", tM.style.lineHeight = "1.2em", tM.style.marginBottom = marginBottom || "0", this.tJ.appendChild(tM), tM
	}, this.tN = function(pW) {
		var tO = document.createElement("p");
		return tO.textContent = pW, tO.style.fontSize = "1em", tO.style.marginBottom = "0", tO.style.whiteSpace = "pre-wrap", tO.style.overflowWrap = "break-word", this.tJ.appendChild(tO), tO
	}, this.tP = function(tQ, fontSize) {
		var tJ = document.createElement("div");
		return tJ.innerHTML = tQ, tJ.style.fontSize = fontSize || "1em", tJ.style.lineHeight = "1.2em", this.tJ.appendChild(tJ), tJ
	}, this.tR = function(tS) {
		for (var tT = tS.tT, fl = tT.length, aC = 0; aC < fl; aC++) this.tJ.appendChild(tT[aC])
	}, this.tU = function(q5) {
		return this.tI.push(q5), this.tJ.appendChild(q5.e), q5
	}, this.resize = function() {
		for (var fl = this.tI.length, aC = 0; aC < fl; aC++) this.tI[aC].resize && this.tI[aC].resize()
	}, (tJ = this.tJ).style.position = "absolute", tJ.style.height = "auto", tJ.style.padding = "0.5em"
}

function tV(tW, tX) {
	var tJ = document.createElement("div");

	function tf() {
		var aC, qE, k, hK, fo, tb = i.l * tJ.offsetWidth,
			tg = new Float64Array(function(tb) {
				var j = .25 * bD.tc.td(.6) * i.iw;
				return Math.max(Math.floor(tb / j), 1)
			}(tb)),
			th = bf.th,
			ti = (tb - (tg.length + 1) * bf.gap) / (tg.length * i.l);
		for (tg.fill(th), aC = 0; aC < tX.length; aC++) qE = (fo = tX[aC].tJ).style, k = bD.tj.min(tg), hK = tg.indexOf(k), qE.top = bD.tc.tk(k), qE.left = bD.tc.tk(th + hK * (ti + th)), qE.width = bD.tc.tk(ti), bD.tc.tl(fo, 5), tg[hK] += fo
			.offsetHeight + 3 * th;
		tJ.style.height = bD.tc.tk(bD.tj.max(tg) - 2 * th)
	}
	this.tY = tJ, this.tZ = tX, this.resize = function() {
		var aC;
		for (aC = 0; aC < tX.length; aC++) tX[aC].resize();
		tf(), tf()
	}, tJ.style.width = "100%", tJ.style.maxWidth = "100%", tW.style.lineHeight = "1.5em", tW.style.overflowX = "hidden", tW.style.overflowY = "auto";
	for (var aC = 0; aC < tX.length; aC++) tJ.appendChild(tX[aC].tJ);
	tW.appendChild(tJ)
}

function x(tm, tn, tp, tq, tr) {
	var self, ts = document.createElement("button"),
		tv = (this.button = ts, this.tt = tn, this.tu = tp, 0);

	function u0() {
		var u6;
		bM.u5() || (tv = 1, u6 = bD.color.u7(tp), !1 !== tq && 0 < u6[0] && u6[0] < 255 && u6[0] === u6[1] && u6[0] === u6[2]) || (128 < u6[0] && 128 < u6[1] && 128 < u6[2] ? ts.style.backgroundColor = bD.color.u8(tp, -50) : ts.style
			.backgroundColor = bD.color.u8(tp, u6[3] && u6[3] < 120 ? 150 : 50))
	}

	function tz() {
		if (tq) {
			var u6 = bD.color.u7(tp);
			if (u6[0] === u6[1] && u6[0] === u6[2]) return
		}
		tn && ((u6 = tn(this)) ? 2 === u6 && u0() : uA(this))
	}

	function u2() {
		tv = 0, this.style.backgroundColor = tp
	}

	function u1() {
		uA(this)
	}

	function uA(fo) {
		tv = 0, fo.style.backgroundColor = tp, fo.blur()
	}
	this.ty = function(u3) {
		u3 = 1.1 - Math.min(.01 * tm.length, .6) + .2 * u3;
		ts.style.fontSize = u3.toFixed(1) + "em"
	}, this.tx = function(ev) {
		ev ? 1 === ev ? ev = bE.qa : 2 === ev && (tq = 1, ev = bE.qa) : (tq = 0, ev = bE.qK), this.tu = tp = ev, ts.style.backgroundColor = ev, tv && u0()
	}, self = this, ts.innerHTML = tm, ts.style.color = tr ? bE.rU : bE.qO, ts.style.userSelect = "none", ts.style.outline = "none", ts.style.overflowWrap = "break-word", self.tx(tp), ts.style.border = "none", ts.style.font = "inherit", self.ty(
		0), ts.style.padding = "0em 0.3em", ts.onclick = tz, ts.addEventListener("mouseover", u0), ts.addEventListener("mouseout", u1), ts.addEventListener("focus", u0), ts.addEventListener("blur", u2)
}

function uB(p7, tW) {
	var tJ;
	this.resize = function() {
		for (var aC = 0; aC < p7.length; aC++) bD.tc.tl(p7[aC].button);
		tJ.style.gap = tJ.style.padding = bD.tc.tk(bf.th)
	}, (tJ = document.createElement("div")).style.display = "grid", tJ.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", tJ.style.overflowY = "auto", tJ.style.gridAutoRows = "5.3em", tJ.style.maxHeight = "100%";
	for (var aC = 0; aC < p7.length; aC++) p7[aC].ty(1), tJ.appendChild(p7[aC].button);
	tW.appendChild(tJ)
}

function uD(uE, uF, uG) {
	this.fs = 0, this.fu = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.tc.td(uG || .5) * uE[1] * i.iw, i.k - 2 * bf.gap), this.j = Math.min(this.k * (uE[0] / uE[1]), i.j - 2 * bf.gap), this.k = uE[1] * this.j / uE[0], this.fs = bf.gap + uF[0] * (i.j - this.j - 2 * bf.gap), this.fu = bf
			.gap + uF[1] * (i.k - this.k - 2 * bf.gap)
	}, this.uH = function() {
		return this.fs + .5 * this.j
	}
}

function uI(uJ, uK) {
	var uS, uT, self, q7 = document.createElement("div"),
		uL = document.createElement("div"),
		uM = document.createElement("div"),
		uN = null,
		uU = (this.uO = new uP({
			value: "",
			eU: -1
		}, 0, uQ, function(e) {
			e.target.value = bD.pa.ua(e.target.value), uN.uZ.textContent = 255 - e.target.value.length, c0.pM.pX(e.target.value)
		}), new uV(0)),
		uW = 0;

	function uQ() {
		uJ()
	}
	this.uY = function() {
			uN.uZ.textContent = 255 - this.uO.e.value.length, c0.pM.pX(this.uO.e.value)
		}, this.show = function(tW) {
			tW.appendChild(q7), tW.appendChild(uM), this.resize(tW)
		}, this.ub = function(tW) {
			u.removeChild(tW, q7), u.removeChild(tW, uM)
		}, this.resize = function(tW) {
			uW = tW ? tW.offsetHeight : uW;
			var tW = bD.tc.ud(.04, .75),
				ue = Math.max(tW, uW - tW),
				uf = i.j / i.l,
				ug = .7 * uf,
				uh = bD.tc.tk(uW - tW - ue),
				ue = (uM.style.height = bD.tc.tk(tW), q7.style.height = bD.tc.tk(ue), i.k > i.j || a1.a2.iv() ? (uM.style.top = uh, q7.style.top = bD.tc.tk(uW - ue), bD.tc.tl(q7, 8)) : (q7.style.top = uh, uM.style.top = bD.tc.tk(uW - tW), bD.tc.tl(
						q7, 2)), uT.button.style.width = bD.tc.tk(tW), uU.resize(.6 * tW), this.uO.e.style.left = bD.tc.tk(tW), this.uO.e.style.width = bD.tc.tk(ug - tW), this.uO.e.style.fontSize = uS.button.style.fontSize = bD.tc.tk(.5 * tW), bD.tc
					.tl(this.uO.e, 6), uS.button.style.left = bD.tc.tk(ug), uS.button.style.width = bD.tc.tk(uf - ug), .385 * tW);
			a1.a2.iv() && (ue *= .8 - .12 * (i.j > i.k)), uL.style.marginLeft = uL.style.marginRight = bD.tc.tk(.5 * ue), uL.style.fontSize = bD.tc.tk(ue), c0.pK.q1(1)
		}, (self = this).uO.e.maxLength = 255, q7.style.position = "absolute", q7.style.left = "0", q7.style.width = "100%", q7.style.overflowX = "hidden", q7.style.overflowY = "auto", q7.style.font = "inherit", q7.style.backgroundColor = bE.qM, uL
		.style.font = "inherit", uM.style.position = "absolute", uM.style.left = "0", uM.style.width = "100%", self.uO.e.setAttribute("placeholder", L(20)), self.uO.e.style.position = "absolute", self.uO.e.style.top = "0", self.uO.e.style.height =
		"100%", self.uO.e.style.backgroundColor = bE.qJ, self.uO.e.style.textAlign = "center", (uS = new x(L(21), uQ)).button.top = "0", uS.button.style.position = "absolute", uS.button.style.height = "100%", uS.tx(bE.rj), uN = new uX("255", uS
			.button, 1, 1), (uT = new x("", function() {
			return c0.pM.pV(self.uO.e.value), uT.tx(c0.pM.pU() ? bE.qn : bE.rj), 0
		})).button.style.position = "absolute", uT.button.style.top = "0", uT.button.style.left = "0", uT.button.style.height = "100%", uT.button.style.padding = "0", uT.tx(bE.rj), uU.canvas.style.display = "block", uU.canvas.style.margin = "auto",
		uT.button.appendChild(uU.canvas), q7.appendChild(uL), uM.appendChild(uT.button), uM.appendChild(self.uO.e), uM.appendChild(uS.button), c0.dv(q7, uL)
}

function uj(uk, tm, ul) {
	function click() {
		var value = 1 - uk.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + tm, void 0 !== uk.eU ? bm.rv.q1(uk.eU, value) : uk.value = value, ul && ul(value)
	}
	var e;
	tm = tm || L(22), this.e = document.createElement("p"), (e = this.e).textContent = (uk.value ? "🟩 " : "⬜ ") + tm, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function um(tW, tQ) {
	var tJ = document.createElement("div");
	this.tY = tJ, this.resize = function() {
		tJ.style.padding = bD.tc.tk(bf.th), tJ.style.lineHeight = bD.tc.tk(bD.tc.ud(.035))
	}, tW.style.overflowX = "hidden", tW.style.overflowY = "auto", tJ.innerHTML = tQ, tW.appendChild(tJ)
}

function un(uo) {
	var tJ = document.createElement("div");
	this.e = tJ, this.up = uo, this.resize = function() {
		for (var fl = uo.length, aC = 1; aC < fl; aC++) bD.tc.tl(uo[aC], 4)
	};
	var aC, fl = uo.length;
	for (tJ.style.width = "100%", tJ.style.height = "2.7em", tJ.style.marginTop = "0.6em", tJ.style.border = "inherit", aC = 0; aC < fl; aC++) uo[aC].style.verticalAlign = "top", uo[aC].style.width = (100 / fl).toFixed(2) + "%", uo[aC].style.height =
		"100%", uo[aC].style.fontSize = "0.75em", tJ.appendChild(uo[aC])
}

function uq(ur, tp, us, ut) {
	this.tJ = document.createElement("div"), this.p7 = ur;
	var uu = 0;
	this.resize = function(tW, uw) {
		var fl = ur.length;
		if (!us)
			for (var aC = 1; aC < fl; aC++) bD.tc.tl(ur[aC].button, 4);
		if (ut)
			for (aC = 0; aC < fl; aC++) ur[aC].button.style.width = ut[aC] + "%";
		else {
			for (var ux = 0, aC = 0; aC < fl; aC++) ux += ur[aC].button.offsetWidth;
			if (tW && (uu = tW.offsetWidth), uw && ux < uu)
				for (aC = 0; aC < fl; aC++) ur[aC].button.style.width = (100 * ur[aC].button.offsetWidth / ux).toFixed(2) + "%";
			else
				for (aC = 0; aC < fl; aC++) ur[aC].button.style.width = "auto";
			uw || this.resize(tW, 1)
		}
	};
	var uv = this;
	uv.tJ.style.height = uv.tJ.style.maxHeight = "100%";
	for (var aC = 0; aC < ur.length; aC++) ur[aC].tx(tp), ur[aC].button.style.height = "100%", ur[aC].button.style.padding = "0.0em 0.9em", ur[aC].button.style.whiteSpace = "pre", uv.tJ.appendChild(ur[aC].button)
}

function dq() {
	var uy = 2e3,
		uz = 2,
		v0 = document.createElement("div"),
		v1 = 0,
		v2 = "",
		v3 = 0,
		v4 = 0,
		v5 = 0;

	function v8(v7) {
		clearTimeout(v5), v3 = v7.clientX, v4 = v7.clientY, v5 = setTimeout(vA, uy)
	}

	function v9(v7) {
		var j6;
		!v2 || (j6 = v7.clientX - v3) * j6 + (j6 = v7.clientY - v4) * j6 < uz * uz || (fH(), v8(v7))
	}

	function vA() {
		var j, gap, vC, k;
		v2 && !bM.u5() && (v0.textContent = v2, v0.style.font = bD.tc.vB(0, bD.tc.ud(.014)), v0.style.maxWidth = bD.tc.ud(.3) + "px", bD.tc.tl(v0, 5), v1 = 1, document.body.appendChild(v0), j = v0.offsetWidth, k = v0.offsetHeight, gap = bD.tc.ud(
			.012), vC = i.j / i.l, (k = v4 - k - gap) < 0 && (k = v4 + 2 * gap), v0.style.left = bO.iu(v3 - j / 2, 0, Math.max(0, vC - j)) + "px", v0.style.top = k + "px")
	}

	function fH() {
		v1 && (v1 = 0, u.removeChild(document.body, v0))
	}
	this.v6 = function(e, pW) {
		e.addEventListener("mouseover", function(v7) {
			v2 = pW, v8(v7)
		}), e.addEventListener("mousemove", v9), e.addEventListener("mouseout", by.ub), e.addEventListener("click", by.ub)
	}, this.ub = function() {
		clearTimeout(v5), v2 = "", fH()
	}, v0.style.position = "fixed", v0.style.backgroundColor = bE.qK, v0.style.color = bE.qO, v0.style.pointerEvents = "none", v0.style.zIndex = "6", v0.style.padding = "0.2em 0.5em"
}

function vD() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.tc.tl(this.e, 8, bE.qX)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function vE() {
	var v3, v4, v0 = document.createElement("div"),
		vF = document.createElement("div"),
		v1 = 0,
		vG = 0;
	this.show = function(fs, fu, pW, vH, vI, ev) {
			if (v1) {
				if (!vH) return;
				this.ub()
			}
			fs === fu && -1 === fs ? (fs = v3, fu = v4) : (v3 = fs, v4 = fu);
			var vJ = Math.floor(bD.tc.ud(.018)),
				vI = (fs = Math.max(vJ + 2, fs), vI || (vG = vH), v1 = 1, i.j / i.l),
				vH = (v0.style.whiteSpace = "pre", v0.textContent = pW, bD.tc.tl(v0, 5), v0.style.font = bD.tc.vB(0, bD.tc.ud(.015)), v0.style.padding = "0.3em 0.6em", v0.style.left = fs + "px", v0.style.top = "0px", document.body.appendChild(v0),
					fs + v0.offsetWidth - vI),
				pW = (0 < vH && (fs -= vH, fs = Math.max(vJ + 1, fs), v0.style.left = fs + "px", fs < vJ + 2) && (v0.style.whiteSpace = "pre-wrap"), v0.offsetHeight);
			v0.style.top = fu - pW + vG * bf.vM + "px", fs -= vJ, vF.style.backgroundColor = bD.color.qG(ev >> 12 << 2, (ev >> 6 & 63) << 2, (63 & ev) << 2), vF.style.left = fs + "px", vF.style.top = v0.style.top, vF.style.width = vJ + "px", vF.style
				.height = pW + "px", bD.tc.tl(vF, 4), bD.tc.tl(vF, 8), bD.tc.tl(vF, 2), document.body.appendChild(vF)
		}, this.ub = function(vN) {
			if (v1) {
				if (vN && vG) return 0;
				v1 = 0, u.removeChild(document.body, v0), u.removeChild(document.body, vF)
			}
			return 1
		}, v0.style.position = "absolute", v0.style.backgroundColor = bE.qK, v0.style.color = bE.qO, v0.style.pointerEvents = "none", v0.style.zIndex = "5", v0.style.maxWidth = "100%", vF.style.position = "absolute", vF.style.color = bE.qO, vF.style
		.pointerEvents = "none", vF.style.zIndex = "5"
}

function uP(vO, type, vP, vQ) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.vR++, e.value = vO.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.qO, e.style.backgroundColor = bE.qH, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.vS++
		}), e.addEventListener("blur", function() {
			i.vS--, -1 !== vO.eU && bm.rv.q1(vO.eU, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== vO.eU && bm.rv.q1(vO.eU, e.value), vP ? vP() : e.blur())
		}), vQ && e.addEventListener("input", function(q5) {
			vQ(q5)
		})
}

function vT(tW, data, vU) {
	var fl = data.vV.length,
		vW = document.createElement("div"),
		vX = document.createElement("div"),
		pP = document.createElement("div"),
		vY = new Array(fl),
		tX = new Array(fl),
		vZ = new Array(data.va.length),
		vb = bD.color.qI(70, 70, 0, .35);

	function u8() {
		this.style.backgroundColor = bD.color.u8(vb, 160)
	}

	function vi() {
		this.style.backgroundColor = vb
	}

	function tf() {
		var g4;
		for (tW.style.font = bD.tc.vB(0, bD.tc.vp(.026, .5, .03)), aC = 1; aC < vZ.length; aC++) bD.tc.tl(vZ[aC], 4);
		if (bD.tc.tl(vW, 2), fl) {
			for (var iE, vq = vW.offsetWidth, vr = pP.offsetWidth, aC = 0; aC < vZ.length; aC++) iE = .01 * data.vh[aC] * vr, vZ[aC].style.width = (100 * iE / vq).toFixed(2) + "%";
			var lz = data.vV[0].length;
			for (aC = 0; aC < fl; aC++)
				for (bD.tc.tl(vY[aC], 2), g4 = 1; g4 < lz; g4++) bD.tc.tl(tX[aC][g4], 4);
			vX.vc && (vX.scrollTop = vX.vc)
		}
	}
	this.resize = function() {
			tf(), tf()
		}, tW.style.display = "flex", tW.style.flexDirection = "column", vX.style.overflowX = "hidden", vX.style.overflowY = "auto", vX.addEventListener("scroll", function() {
			this.vc = this.scrollTop, vU && vU.vd && (u.z.ve[vU.vd] = this.scrollTop)
		}),
		function() {
			var fo, aC, vV = data.vV,
				lz = fl ? vV[0].length : 0;
			for (aC = 0; aC < fl; aC++) {
				vY[aC] = document.createElement("div"), vY[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.qI(130, 130, 130, .35) : bE.qN
				}(aC), vY[aC].style.width = "100%", vY[aC].style.display = "flex", tX[aC] = new Array(lz);
				for (var g4 = 0; g4 < lz; g4++) tX[aC][g4] = fo = document.createElement("div"), fo.style.display = "flex", fo.style.justifyContent = "center", fo.style.wordBreak = "break-all", fo.style.padding = "0.4em 0em", fo.style.width = data
					.vh[g4] + "%", fo.textContent = vV[aC][g4].gD, 1 === vV[aC][g4].em && (fo.name = "" + aC, fo.style.color = bE.rU, fo.style.backgroundColor = vb, fo.addEventListener("mouseover", u8), fo.addEventListener("mouseout", vi), function(
						fo, pe, vk) {
						2147483647 !== vk && fo.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, pe), bK.dv(bG.aD), this.style.backgroundColor = vb, u.v(8, u.vl, new vm(25, {
								action: 0,
								pe: bI.fC.vn(bI.fC.vo(5)),
								vk: vk
							}))
						})
					}(fo, vV[aC][g4].pe, vV[aC][g4].vk)), vY[aC].appendChild(fo)
			}
			for (vW.style.display = "flex", vW.style.backgroundColor = bD.color.qI(0, 120, 0, .35), aC = 0; aC < vZ.length; aC++) vZ[aC] = fo = document.createElement("div"), fo.style.display = "flex", fo.style.justifyContent = "center", fo.style
				.wordBreak = "break-all", fo.style.padding = "0.4em 0em", fo.style.width = data.vh[aC] + "%", fo.innerHTML = data.va[aC], vW.appendChild(fo)
		}();
	for (var aC = 0; aC < fl; aC++) pP.appendChild(vY[aC]);
	vX.appendChild(pP), tW.appendChild(vW), tW.appendChild(vX), vU && vU.vd && (vX.vc = u.z.ve[vU.vd])
}

function vs() {
	var vw, vx, vt = document.createElement("div"),
		vu = document.createElement("div"),
		vv = document.createElement("div"),
		pP = document.createElement("div"),
		p7 = [],
		eP = [L(23), L(24), L(25), L(26), L(27), L(28), L(29), L(30)],
		vy = [1, 2, 3, 0, 9, 10, 11, 13];

	function w0(aC) {
		u.v(8, 0, new vm(21, {
			w2: vy[aC],
			w3: 0,
			w4: 10
		}))
	}
	this.show = function() {
			this.q1(u.z.w5), document.body.appendChild(vt)
		}, this.ub = function() {
			u.removeChild(document.body, vt)
		}, this.q1 = function(w5) {
			for (var w6 = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < p7.length; aC++) {
				var j = w5[aC];
				vw[w6[aC]][1].uZ.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, w7 = bf.gap,
				k = bD.tc.w8(.085),
				j = Math.min(4 * k, i.j - 2 * w7),
				fl = p7.length;
			for (bD.tc.w9(vt, w7, i.k - w7 - k, j, k), bD.tc.tl(vt), bD.tc.tl(vu, 6), aC = 0; aC < fl - 1; aC++) bD.tc.tl(p7[aC].button, 6);
			for (aC = 0; aC < fl; aC++) vw[aC][0].resize(), vw[aC][1].resize();
			for (p7[0].fs = 0, p7[0].button.style.left = bD.tc.tk(p7[0].fs), p7[0].button.style.width = bD.tc.wA(1.7 * k), aC = 1; aC < fl; aC++) p7[aC].fs = p7[aC - 1].fs + p7[aC - 1].button.offsetWidth, p7[aC].button.style.left = bD.tc.tk(p7[aC]
				.fs);
			if (!vx) {
				if (!ac.wB()) return;
				(vx = ac.get(14)).style.width = "24%", vx.style.position = "absolute", vu.appendChild(vx)
			}
			vx.style.left = bD.tc.tk(0), vx.style.top = "7%", vv.wC && (vv.scrollLeft = vv.wC)
		}, vt.style.position = "absolute", vu.style.width = "25%", vu.style.height = "100%", vu.style.backgroundColor = bE.qK, vv.style.position = "absolute", vv.style.width = "75%", vv.style.height = "100%", vv.style.backgroundColor = bE.qK, vv
		.style.top = vv.style.right = bD.tc.tk(0), bD.tc.vz(vv), pP.style.height = pP.style.maxHeight = "100%", p7.push(new x("", function() {
			w0(0)
		}, bE.rA)), p7.push(new x("", function() {
			w0(1)
		}, bE.rB)), p7.push(new x("", function() {
			w0(2)
		}, bE.r3)), p7.push(new x("", function() {
			w0(3)
		}, bE.qm)), p7.push(new x("", function() {
			w0(4)
		}, bE.rf)), p7.push(new x("", function() {
			w0(5)
		}, bE.rb)), p7.push(new x("", function() {
			w0(6)
		}, bE.rf)), p7.push(new x("", function() {
			w0(7)
		}, bE.qF)), vw = new Array(p7.length);
	for (var aC = 0; aC < p7.length; aC++) p7[aC].button.style.position = "absolute", vw[aC] = [new w1(eP[aC], p7[aC].button, .25, .45), new w1("", p7[aC].button, .53, .84, 1)], p7[aC].button.style.height = p7[aC].button.style.maxHeight = "100%", p7[
		aC].button.top = bD.tc.tk(0), pP.appendChild(p7[aC].button);
	vv.appendChild(pP), vt.appendChild(vu), vt.appendChild(vv)
}

function wD(wE, wF, uJ, uK, wG) {
	var wH = document.createElement("div"),
		wI = document.createElement("div"),
		wJ = document.createElement("div"),
		pp = document.createElement("div"),
		wK = document.createElement("div"),
		wL = document.createElement("div"),
		wM = document.createElement("span"),
		wN = document.createElement("div"),
		wT = (this.wO = new uI(uJ, uK), this.wP = new wQ(uK), this.wR = new wS(wG), 2);
	this.wX = function(wY) {
		wY = (wY / 10).toFixed(1) + "%";
		wL.style.width = wY, wM.innerHTML = wY
	}, this.wZ = function(wa) {
		(0 === wT ? this.wO : 1 === wT ? this.wP : this.wR).ub(pp), (0 === (wT = wa) ? this.wO : 1 === wa ? this.wP : this.wR).show(pp)
	}, this.wb = function() {
		return wI
	}, this.show = function() {
		document.body.appendChild(wH)
	}, this.ub = function() {
		u.removeChild(document.body, wH)
	}, this.resize = function() {
		var wc = 1 - .4 * a1.a2.iv() * (i.j > 1.6 * i.k),
			wd = bD.tc.ud(.05 * wc),
			we = 1.3 * wd,
			wf = i.k > i.j,
			wg = bD.tc.ud(.06 * wc + .03 * wf),
			wf = bD.tc.ud(.02 * wc + .01 * wf),
			wi = bD.tc.ud(.025);
		wH.style.font = bD.tc.vB(0, wi), wJ.style.font = bD.tc.vB(0, .9 * wi), wN.style.font = bD.tc.vB(0, .9 * wi), wc < 1 && (wc = bD.tc.vB(0, wc * wi), wJ.style.font = wc, wN.style.font = wc, wK.style.font = wc), wI.style.height = bD.tc.tk(
			we), wI.style.font = bD.tc.vB(0, .72 * wd), bD.tc.tl(wI, 2), wJ.style.top = bD.tc.tk(we), wJ.style.height = bD.tc.tk(wg), bD.tc.tl(wJ, 2), pp.style.top = bD.tc.tk(we + wg), pp.style.height = bD.tc.tk(i.k / i.l - we - 2 * wg - wf), wK
			.style.top = bD.tc.tk(i.k / i.l - wg - wf), wK.style.height = bD.tc.tk(wf), bD.tc.tl(wK, 8), wM.style.font = bD.tc.vB(0, .8 * wf), wN.style.top = bD.tc.tk(i.k / i.l - wg), wN.style.height = bD.tc.tk(wg), bD.tc.tl(wN, 8), wE.resize(
			wH), wF.resize(wH), 0 === wT ? this.wO.resize(pp) : (1 === wT ? this.wP : this.wR).resize()
	};
	uJ = this;
	wH.style.position = "absolute", wH.style.top = "0", wH.style.left = "0", wH.style.width = "100%", wH.style.height = "100%", wH.style.backgroundColor = bE.qN, bM.u5() || (wH.style.backdropFilter = "blur(4px)", wH.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (wH.style.display = "none"), wI.style.position = "absolute", wI.style.top = "0", wI.style.left = "0", wI.style.width = "100%", wI.style.display = "flex", wI.style.alignItems = "center", wI.translate = !1;
	for (var h = [wJ, wN], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.tc.vz(h[aC]);
	pp.style.position = "absolute", pp.style.left = "0", pp.style.width = "100%", pp.style.font = "inherit", wK.style.position = "absolute", wK.style.left = "0", wK.style.width = "100%", wL.style.position = "absolute", wL.style.top = "0", wL.style
		.left = "0", wL.style.height = "100%", wL.style.width = "50%", wL.style.backgroundColor = bE.qk, wM.innerHTML = "", wM.style.position = "absolute", wM.style.top = "50%", wM.style.left = "50%", wM.style.transform = "translate(-50%, -50%)", wM
		.translate = !1, wI.appendChild(function() {
			var wW = document.createElement("h1");
			return wW.textContent = L(31), wW.style.margin = "0 auto 0.55em auto", wW.style.fontFamily = "Arial Black, system-ui", wW.style.fontSize = "inherit", wW.style.fontWeight = "inherit", wW
		}()), wJ.appendChild(wE.tJ), wK.appendChild(wL), wK.appendChild(wM), wN.appendChild(wF.tJ), wH.appendChild(wI), wH.appendChild(wJ), wH.appendChild(pp), wH.appendChild(wK), wH.appendChild(wN), wH.className = "fx-lobby", pp.className =
		"fx-panel", wK.className = "fx-progress", uJ.wR.show(pp)
}

function wS(wG) {
	var wH = document.createElement("div"),
		wk = [],
		wl = 96,
		wm = ["battleRoyale", "oneVsOne", "zombie", "noFullSending"];

	function x2(e) {
		e.style.position = "absolute", e.style.top = e.style.left = "0", e.style.width = e.style.height = "100%", e.style.pointerEvents = "none"
	}

	function wq(button, xG) {
		var tJ = document.createElement("div");
		return tJ.style.position = "absolute", tJ.style.left = "0", tJ.style.width = "100%", tJ.style.height = "20%", tJ.style.pointerEvents = "none", tJ.style.backgroundColor = bE.qH, xG ? tJ.style.top = "0" : tJ.style.bottom = "0", button
			.appendChild(tJ), tJ
	}

	function wt(xH, xI) {
		var tJ = document.createElement("div");
		return tJ.style.position = "absolute", tJ.style.top = "0", tJ.style.width = "20%", tJ.style.height = "100%", xI ? tJ.style.left = "0" : tJ.style.right = "0", xH.appendChild(tJ), tJ
	}

	function x4(xJ) {
		var canvas = document.createElement("canvas");
		return canvas.width = canvas.height = 64, x2(canvas), canvas.style.top = canvas.style.left = "10%", canvas.style.width = canvas.style.height = "80%", xJ.appendChild(canvas), canvas.getContext("2d", {
			alpha: !0
		})
	}

	function wx(xH, left, right, width) {
		var tJ = document.createElement("div");
		return tJ.style.position = "absolute", tJ.style.top = "50%", tJ.style.transform = "translateY(-50%)", tJ.style.left = left, tJ.style.right = right, tJ.style.width = width, tJ.style.textAlign = "left", xH.appendChild(tJ), {
			tJ: tJ,
			xB: xM(tJ, 1.9),
			x0: xM(tJ, 1)
		}
	}

	function xM(ow, fontSize) {
		var tJ = document.createElement("div");
		return tJ.style.fontSize = fontSize + "em", tJ.style.lineHeight = "1.1", tJ.style.whiteSpace = "nowrap", tJ.style.overflow = "hidden", tJ.style.textOverflow = "ellipsis", tJ.style.textShadow = "0 0 0.25em black", ow.appendChild(tJ), tJ
	}

	function xN(e, pW) {
		e.textContent !== pW && (e.textContent = pW)
	}

	function xO(q5) {
		q5.canvas && (bq.xP.pt(q5.canvas), q5.canvas = null), q5.xA = ""
	}
	this.nT = function() {
		var tX = bq.tX.tX,
			fl = tX.length;
		if (fl !== wk.length) {
			for (var aC = 0; aC < wk.length; aC++) xO(wk[aC]);
			for (wH.textContent = "", wk = new Array(fl), aC = 0; aC < fl; aC++) wk[aC] = function(eU) {
				var button = document.createElement("button"),
					wp = (button.style.position = "absolute", button.style.backgroundColor = bE.qN, button.style.color = bE.qO, button.style.outline = "none", button.style.userSelect = "none", button.style.cursor = "pointer", button.style
						.padding = "0", button.style.overflow = "hidden", bD.tc.wo(button, function() {
							wG(eU, 0)
						}, function() {
							wG(eU, 1)
						}), bD.tc.tl(button), wq(button, 1)),
					wr = wq(button, 0),
					ws = wt(wp, 0),
					wu = wt(wr, 1),
					wv = wt(wr, 0),
					ww = wx(wp, "3%", "", "74%"),
					wy = wx(wr, "20%", "", "30%"),
					wz = wx(wr, "", "20%", "30%"),
					x1 = (wz.tJ.style.textAlign = "right", wy.x0.textContent = "Starts in", document.createElement("canvas"));
				return x1.width = x1.height = wl, x2(x1), ws.appendChild(x1), (button = {
					button: button,
					wp: wp,
					wr: wr,
					x3: x4(wu),
					x5: x4(wv),
					x6: 0,
					isContest: 0,
					x7: null,
					ws: ws,
					x1: x1,
					x8: x1.getContext("2d", {
						alpha: !0
					}),
					x9: -1,
					canvas: null,
					xA: "",
					map: ww.xB,
					xC: ww.x0,
					xD: wy.xB,
					xE: wz.xB,
					xF: wz.x0,
					hw: -1
				}).map.translate = !1, button.xC.translate = !1, button.xD.translate = !1, wy.x0.translate = !1, button
			}(aC), wH.appendChild(wk[aC].button);
			this.resize()
		}
		for (aC = 0; aC < fl; aC++) wk[aC].xA !== bq.xP.xQ(tX[aC].fR, tX[aC].mapSeed) && xO(wk[aC]);
		for (aC = 0; aC < fl; aC++) {
			var xR = tX[aC],
				q5 = wk[aC],
				hw = xR.id === bq.tX.xS ? 1 + bq.tX.xT : 0,
				hE = bq.tX.xU(xR);
			xN(q5.map, bV.xV.xW[xR.fR]), xN(q5.xC, bq.tX.xX(xR.xC)), xN(q5.xD, bq.tX.xY(xR.xZ)), xN(q5.xE, hE + (bq.tX.xa(xR) ? "/" + xR.nb : "")), xN(q5.xF, L(1 === hE ? 32 : 33)), q5.hw !== hw && (q5.hw = hw, q5.wp.style.backgroundColor = q5.wr
				.style.backgroundColor = [bE.qH, bE.qu, bE.rM][hw], bD.tc.tl(q5.button, 5, [bE.qO, bE.qv, bE.rN][hw]), q5.button.classList.toggle("fx-line", !hw)), ! function(q5) {
				!q5.x6 && ac.wB() && (q5.x6 = 1, q5.x3.drawImage(ac.xL("clock"), 0, 0), q5.x5.drawImage(ac.xL("userIcon"), 0, 0))
			}(q5), ! function(q5, xC) {
				q5.x9 === xC || 7 <= xC && !ac.wB() || ((q5.x9 = xC) < 7 ? bk.xh(q5.x8, xC + 2, wl) : (q5.x8.clearRect(0, 0, wl, wl), q5.x8.drawImage(ac.xL(wm[xC - 7]), 0, 0, wl, wl)))
			}(q5, xR.xC), ! function(q5, isContest) {
				q5.isContest === isContest || isContest && !ac.wB() || ((q5.isContest = isContest) ? (q5.x7 || (q5.x7 = function(q5) {
					var xg = ac.xL("crown"),
						canvas = document.createElement("canvas");
					return canvas.width = xg.width, canvas.height = xg.height, canvas.getContext("2d", {
							alpha: !0
						}).drawImage(xg, 0, 0), canvas.style.position = "absolute", canvas.style.top = "50%", canvas.style.left = "50%", canvas.style.width = "55%", canvas.style.height = "auto", canvas.style.transform =
						"translate(-50%, -50%)", canvas.style.opacity = "0.5", canvas.style.pointerEvents = "none", q5.button.insertBefore(canvas, q5.wp), canvas
				}(q5)), q5.x7.hidden = !1) : q5.x7.hidden = !0)
			}(q5, xR.xd), ! function(q5, xR) {
				var canvas;
				q5.canvas || (canvas = bq.xP.xi(xR.fR, xR.mapSeed)) && (q5.canvas = canvas, q5.xA = bq.xP.xQ(xR.fR, xR.mapSeed), x2(canvas), q5.button.insertBefore(canvas, q5.button.firstChild))
			}(q5, xR)
		}
	}, this.resize = function() {
		var fl = wk.length,
			j = wH.offsetWidth,
			k = wH.offsetHeight;
		if (0 !== fl && 0 !== j && 0 !== k) {
			for (var gap = bD.tc.ud(.012), xj = 0, xk = 1, ev = 1; ev <= fl; ev++) {
				var rows = bO.gC(fl + ev - 1, ev),
					rows = Math.min((j - (ev + 1) * gap) / ev, (k - (rows + 1) * gap) / rows);
				xj < rows && (xj = rows, xk = ev)
			}
			for (var xl = bO.gC(fl + xk - 1, xk), o7 = (j - xk * xj - (xk - 1) * gap) / 2, o8 = (k - xl * xj - (xl - 1) * gap) / 2, aC = 0; aC < fl; aC++) {
				var qE = wk[aC].button.style;
				qE.left = bD.tc.tk(o7 + aC % xk * (xj + gap)), qE.top = bD.tc.tk(o8 + bO.gC(aC, xk) * (xj + gap)), qE.width = qE.height = bD.tc.tk(xj), qE.fontSize = bD.tc.tk(.05 * xj)
			}
		}
	}, this.show = function(tW) {
		tW.appendChild(wH), this.nT(), this.resize()
	}, this.ub = function(tW) {
		u.removeChild(tW, wH)
	}, wH.style.position = "absolute", wH.style.top = "0", wH.style.left = "0", wH.style.width = wH.style.height = "100%", wH.style.overflow = "hidden", wH.style.font = "inherit"
}

function wQ(uK) {
	var uZ, xJ, wH = document.createElement("div"),
		pp = document.createElement("div"),
		xm = null,
		xn = null;
	this.nT = function() {
			pp.textContent = "", bq.xq.xr && bq.xq.ub(1);
			for (var pw = document.createDocumentFragment(), xE = bq.pm.xs, tX = bq.tX.tX, xt = 0, aC = 0; aC < tX.length; aC++) xt = xt || 8 === tX[aC].xC;
			for (xm.style.width = xm.style.maxWidth = xt ? "11.3em" : "10.3em", aC = 0; aC < xE.length; aC++) {
				var eU = bq.tX.xu(xE[aC].xv);
				! function(pw, q5, eU, xx) {
					var uZ = xm.cloneNode(!0),
						xJ = uZ.firstChild;
					xJ.style.backgroundColor = 0 <= eU && q5.xy ? bE.rP : xn[eU < 0 ? 15 : Math.min(eU, 14)], 0 <= eU && (xJ.textContent = "" + (eU + 1));
					uZ.lastChild.textContent = bq.lt.xz(q5, xx), uZ.style.color = bq.lt.y0(q5.y1), 11 === q5.y1 && (uZ.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
					__fx.settings.highlightDuplicateIps && (xJ = __fx.utils.getDuplicateIpHighlightColor(q5, bq.pm.xs, "aHt")) && (uZ.style.backgroundColor = xJ, uZ.style.borderRadius = "0.3em");
					__fx.settings.highlightSameClan && (eU = __fx.utils.getSameClanHighlightColor(q5, bq.pk, "username")) && (uZ.style.backgroundColor ? uZ.style.boxShadow = "inset 0 0 0 2px " + eU : uZ.style.backgroundColor = eU, uZ.style
						.borderRadius = "0.3em");
					bq.lt.y2(q5) && (uZ.style.textDecoration = "underline"), q5.y3 && (uZ.style.textDecorationLine = "underline", uZ.style.textDecorationStyle = "dotted");
					uZ.onclick = function(e) {
						uK(e, q5)
					}, bM.u5() || (uZ.onmouseover = function(e) {
						bq.xq.y4(uZ, q5, 1)
					}), pw.appendChild(uZ)
				}(pw, xE[aC], eU, 0 <= eU && 8 === tX[eU].xC)
			}
			pp.appendChild(pw), pp.classList.toggle("fx-wide", !!xt)
		}, this.show = function(tW) {
			tW.appendChild(wH)
		}, this.ub = function(tW) {
			u.removeChild(tW, wH)
		}, this.resize = function() {
			pp.style.fontSize = bD.tc.tk(bD.tc.ud(.02, .3))
		}, wH.style.top = "0", wH.style.left = "0", wH.style.width = wH.style.height = "100%", wH.style.overflowX = "hidden", wH.style.overflowY = "auto", wH.style.font = "inherit", pp.style.font = "inherit", pp.style.margin = "0.4em", wH
		.appendChild(pp), wH.className = "fx-players-scroll", pp.className = "fx-players", (uZ = document.createElement("span")).style.cursor = "pointer", uZ.style.margin = "0.2em 0.2em 0.2em 0.2em", uZ.style.height = uZ.style.maxHeight = "1.4em", uZ
		.style.whiteSpace = "nowrap", uZ.style.overflow = "hidden", uZ.style.textOverflow = "ellipsis", uZ.style.font = "inherit", uZ.style.display = "inline-block", (xJ = document.createElement("span")).style.display = "inline-block", xJ.style
		.width = xJ.style.height = xJ.style.lineHeight = "1.3em", xJ.style.marginRight = "0.4em", xJ.style.fontSize = "0.8em", xJ.style.fontWeight = "bold", xJ.style.textAlign = "center", xJ.style.color = bE.qF, xJ.style.textShadow = "none", xJ.style
		.textDecoration = "none", xJ.style.pointerEvents = "none", xJ.translate = !1, uZ.appendChild(xJ), uZ.appendChild(document.createTextNode("")), xm = uZ, xn = function() {
			for (var h = ["rgb(0,200,0)", "rgb(150,220,0)", "rgb(250,225,0)", "rgb(255,150,0)", "rgb(240,85,0)"], aC = h.length; aC < 15; aC++) h.push("rgb(210,0,0)");
			return h.push("rgb(128,128,128)"), h
		}()
}

function y5(y6) {
	var wH = document.createElement("div"),
		uM = document.createElement("div"),
		y7 = [];

	function u0() {
		bM.u5() || (this.style.backgroundColor = bD.color.u8(bE.qK, 50))
	}

	function u1() {
		this.style.backgroundColor = bE.qK
	}
	this.q1 = function(y9, yA) {
			y7[2].textContent = y9 + 1 + " / " + yA
		}, this.show = function(q5) {
			q5 = bq.lt.py(q5, bq.lt.pz(q5)), uM.appendChild(bq.ps.transform(q5)), document.body.appendChild(wH)
		}, this.resize = function() {
			var k = bD.tc.ud(.03, .5);
			wH.style.width = 10 * k + "px", wH.style.font = bD.tc.vB(1, .75 * k), bD.tc.tl(wH, 4), uM.style.top = k + "px", uM.style.font = bD.tc.vB(0, .55 * k), bD.tc.tl(uM, 2), wH.style.height = k + uM.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.tc.tl(y7[aC], 6), y7[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) y7[aC].style.height = k + "px", bD.tc.tl(y7[aC], 2);
			y7[2].style.width = 4 * k + "px", y7[1].style.left = 2 * k + "px", y7[2].style.left = 4 * k + "px", y7[3].style.left = 8 * k + "px"
		}, this.yB = function() {
			for (var aC = 0; aC < 4; aC++) y7[aC].onclick = null, y7[aC].onmouseover = null, y7[aC].onmouseout = null;
			bq.ps && uM.firstChild && bq.ps.pt(uM.firstChild), u.removeChild(document.body, wH), wH = uM = y7 = null
		}, wH.style.position = "absolute", wH.style.color = bE.qO, wH.style.zIndex = "3", wH.style.right = "0", wH.style.top = "0", uM.style.position = "absolute", uM.style.height = "auto", uM.style.color = bE.qO, uM.style.backgroundColor = bE.qK, uM
		.style.left = "0", uM.style.width = "100%", uM.style.overflowWrap = "break-word", wH.appendChild(uM);
	for (var aC = 0; aC < 4; aC++) y7[aC] = document.createElement("div"), y7[aC].style.position = "absolute", y7[aC].style.backgroundColor = bE.qK, y7[aC].style.color = bE.qO, y7[aC].style.top = "0", y7[aC].style.display = "flex", y7[aC].style
		.justifyContent = "center", y7[aC].style.alignItems = "center", y7[aC].style.userSelect = "none", y7[aC].style.outline = "none", y7[aC].style.font = "inherit", 2 !== (y7[aC].y8 = aC) && (y7[aC].onclick = y6, y7[aC].onmouseover = u0, y7[aC]
			.onmouseout = u1), wH.appendChild(y7[aC]);
	y7[0].textContent = "◀", y7[1].textContent = "▶", y7[3].textContent = "✖"
}

function yC(y6) {
	var v0 = document.createElement("div");

	function u0() {
		bM.u5() || (v0.style.backgroundColor = bD.color.u8(bE.qK, 50))
	}

	function u1() {
		v0.style.backgroundColor = bE.qK
	}
	this.q1 = function(yA) {
			v0.textContent = yA
		}, this.show = function() {
			document.body.appendChild(v0)
		}, this.resize = function() {
			var k = bD.tc.ud(.03, .5);
			v0.style.width = 2 * k + "px", v0.style.height = k + "px", v0.style.font = bD.tc.vB(1, .75 * k), bD.tc.tl(v0, 4), bD.tc.tl(v0, 2)
		}, this.yB = function() {
			v0.onclick = null, v0.onmouseover = null, v0.onmouseout = null, u.removeChild(document.body, v0), v0 = null
		}, v0.style.position = "absolute", u1(), v0.style.color = bE.qO, v0.style.zIndex = "3", v0.style.right = "0", v0.style.top = "0", v0.style.display = "flex", v0.style.justifyContent = "center", v0.style.alignItems = "center", v0.style
		.userSelect = "none", v0.style.outline = "none", v0.onclick = y6, v0.onmouseover = u0, v0.onmouseout = u1
}

function yD(ur, yE) {
	var wH = document.createElement("div"),
		yF = document.createElement("div"),
		yG = (yE = yE || 1, Math.floor((ur.length + yE - 1) / yE)),
		yH = [],
		yI = [],
		v1 = (this.fs = 0, this.fu = 0);

	function yL() {
		bq.yM.ub()
	}
	this.p7 = ur, this.show = function(fs, fu, yP) {
			if (v1) return [0, 0];
			v1 = 1, this.fs = fs, this.fu = fu,
				function(self, yP) {
					var j = bD.tc.ud(.16, .7),
						k = yG * j / 3,
						vC = (j *= yE, i.j / i.l),
						yR = i.k / i.l,
						oJ = Math.min(1, Math.min(vC / j, yR / k));
					j *= oJ, k *= oJ, yP && (self.fs += bD.tc.ud(.03, .5)), self.fs = bO.iu(self.fs, 0, vC - j), self.fu = bO.iu(self.fu, 0, yR - k), yF.style.left = self.fs + "px", yF.style.top = self.fu + "px", yF.style.width = j + "px", yF.style
						.height = k + "px", yF.style.font = bD.tc.vB(0, .3 * k / yG), bD.tc.tl(yF, 5);
					for (var aC = 1; aC < yH.length; aC++) yI[aC][0] && bD.tc.tl(yH[aC], 8), yI[aC][1] && bD.tc.tl(yH[aC], 4)
				}(this, yP), document.body.appendChild(wH)
		}, this.ub = function() {
			v1 && (v1 = 0, wH.removeEventListener("click", yL), u.removeChild(document.body, wH))
		},
		function() {
			var aC, fl = ur.length;
			for (aC = 0; aC < fl; aC++) yH.push(ur[aC].button);
			for (aC = fl; 1 < yE && aC < yG * yE; aC++) {
				var e = document.createElement("div");
				e.style.backgroundColor = bE.qK, yH.push(e)
			}
			for (aC = 0; aC < yH.length; aC++) yI.push([aC % yG, Math.floor(aC / yG)])
		}();
	for (var aC = 0; aC < ur.length; aC++) new uX("" + (1 + aC), ur[aC].button, 0, 1);
	wH.style.position = "fixed", wH.style.top = "0", wH.style.left = "0", wH.style.width = "100%", wH.style.height = "100%", wH.style.zIndex = "5", yF.style.position = "absolute",
		function() {
			if (1 < yE) ! function() {
				yF.style.display = "grid", yF.style.gridTemplateColumns = "repeat(" + yE + ", 1fr)", yF.style.gridTemplateRows = "repeat(" + yG + ", 1fr)";
				for (var aC = 0; aC < yH.length; aC++) {
					var qE = yH[aC].style;
					qE.width = qE.height = qE.maxHeight = "100%", qE.padding = "0.0em 0.9em", qE.gridRow = "" + (yI[aC][0] + 1), qE.gridColumn = "" + (yI[aC][1] + 1), yF.appendChild(yH[aC])
				}
			}();
			else
				for (var yO = (100 / ur.length).toFixed(2) + "%", aC = 0; aC < ur.length; aC++) ur[aC].button.style.width = "100%", ur[aC].button.style.height = ur[aC].button.style.maxHeight = yO, ur[aC].button.style.padding = "0.0em 0.9em", yF
					.appendChild(ur[aC].button)
		}(), wH.appendChild(yF), wH.addEventListener("click", yL)
}

function ew() {
	var yS, yT, yU;

	function ya(aC) {
		return bD.color.qG(yT[aC][0], yT[aC][1], yT[aC][2])
	}

	function yg(g4, g5) {
		return bD.color.yp(yT[g4], yT[g5]), ya(g5)
	}

	function yY() {
		yS && (yS.remove(), yS = null)
	}
	this.show = function(ex, colors, id) {
		0 <= (yU = id) && b1.z.er(0) && b1.es.yV(0, id), ex = (ex = (ex = (ex = (ex = (ex = (ex = (ex = (ex = (ex = (ex = (ex = ex.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			yT = colors, (yS = document.createElement("div")).style.position = "fixed", yS.style.top = "0", yS.style.left = "0", yS.style.width = "100%", yS.style.height = "100%", yS.style.backgroundColor = bD.color.qI(yT[0][0], yT[0][1], yT[0][
				2], .6), yS.style.zIndex = "6", yS.onclick = function(e) {
				e.target === yS && yY()
			},
			function(ex) {
				var ih, yZ = document.createElement("div");
				yZ.style.position = "absolute", yZ.style.display = "flex", yZ.style.flexDirection = "column", yZ.style.top = "50%", yZ.style.left = "50%", yZ.style.backgroundColor = ya(2), ih = a1.a2.iv() ? bD.tc.yb(i.min) : bD.tc.ud(.4);
				ih = Math.max(ih, 200), yZ.style.width = bD.tc.tk(ih), yZ.style.height = bD.tc.tk(ih), yZ.style.transform = "translate(-50%, -50%)",
					function(yZ, ih) {
						var yf = document.createElement("div");
						yf.style.flex = "0 0 10%", yf.style.overflow = "hidden", yf.style.backgroundColor = ya(1), yf.style.color = yg(1, 7), yf.style.font = bD.tc.vB(1, .05 * ih), yf.style.display = "flex", yf.style.alignItems = "center", yf
							.style.justifyContent = "center", yf.innerHTML = L(34), yZ.appendChild(yf)
					}(yZ, ih),
					function(yZ, ex, ih) {
						var yh = document.createElement("div");
						yh.style.flex = "0 0 70%", yh.style.overflowY = "auto", yh.style.overflowX = "hidden", yh.style.whiteSpace = "pre-wrap", yh.style.wordWrap = "break-word", yh.style.padding = bD.tc.tk(.02 * ih), yh.style.backgroundColor =
							ya(2), yh.style.color = yg(2, 8), yh.style.font = bD.tc.vB(0, .07 * ih), yh.innerHTML = ex, yh.innerHTML = "<style>a { color: inherit; }</style>" + yh.innerHTML, yZ.appendChild(yh)
					}(yZ, ex, ih),
					function(yZ, ih) {
						var ow = document.createElement("div"),
							yi = (ow.style.display = "flex", ow.style.flexDirection = "row", ow.style.justifyContent = "space-between", ow.style.alignItems = "stretch", ow.style.backgroundColor = ya(3), ow.style.flex = "1", ow.style.padding = bD
								.tc.tk(.01 * ih), ow.style.gap = bD.tc.tk(.01 * ih), document.createElement("div")),
							yj = (yi.style.flex = "0 0 60%", yi.style.height = "100%", new x(L(35, 0, 0, 1), function() {
								yY()
							}, ya(4), !1)),
							yj = (yj.button.style.width = "100%", yj.button.style.height = "100%", yj.button.style.color = yg(4, 9), yj.button.style.font = bD.tc.vB(1, .05 * ih), yi.appendChild(yj.button), document.createElement("div")),
							yl = (yj.style.flex = "0 0 15%", yj.style.height = "100%", yj.style.backgroundColor = ya(5), document.createElement("div")),
							ym = (yl.style.flex = "1", yl.style.height = "100%", new x(L(36), function(e) {
								return bD.tc.yn(e), yU < 0 || b1.z.er(0) && (b1.es.yV(1, yU), yU = -1), !0
							}, ya(6), !1));
						ym.button.style.width = "100%", ym.button.style.height = "100%", ym.button.style.color = yg(6, 10), ym.button.style.font = bD.tc.vB(1, .035 * ih), yl.appendChild(ym.button), ow.appendChild(yi), ow.appendChild(yj), ow
							.appendChild(yl), yZ.appendChild(ow)
					}(yZ, ih), yS.appendChild(yZ)
			}(ex), document.body.appendChild(yS)
	}
}

function yq(vO, yr) {
	this.tT = [];
	var ys = this.tT;

	function click() {
		for (var aC = 0; aC < ys.length; aC++) ys[aC].textContent = ys[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eU = parseInt(this.name);
		void 0 !== vO.eU && bm.rv.q1(vO.eU, eU), yr && yr(eU)
	}
	for (var yt, fl = vO.vU.length, aC = 0; aC < fl; aC++)(yt = document.createElement("p")).textContent = "⚪ " + vO.vU[aC], yt.style.margin = "0", yt.name = "" + aC, yt.style.cursor = "pointer", yt.style.fontSize = "1em", yt.addEventListener(
		"click", click), ys.push(yt);
	ys[vO.value].textContent = ys[vO.value].textContent.replace("⚪", "🟢")
}

function yu(title, yv, yw) {
	var vt = document.createElement("div"),
		pO = document.createElement("div"),
		pP = document.createElement("div"),
		yx = document.createElement("div"),
		yy = document.createElement("div");
	this.yz = pP, this.z0 = yv, vt.className = "fx-page", this.show = function() {
			!1 !== yw ? document.body.appendChild(vt) : (document.body.appendChild(pO), document.body.appendChild(yx))
		}, this.ub = function() {
			!1 !== yw ? u.removeChild(document.body, vt) : (u.removeChild(document.body, pO), u.removeChild(document.body, yx))
		}, this.z4 = function() {
			var ue = bD.tc.ud(.1),
				uc = bD.tc.ud(.08 + .04 * (i.z5 < 1), .3);
			return {
				ue: ue,
				uc: uc,
				z6: i.k / i.l - ue - uc
			}
		}, this.resize = function(uw) {
			var fl = yv.length,
				z7 = this.z4(),
				ue = z7.ue,
				uc = z7.uc;
			for (pO.style.height = bD.tc.tk(ue), bD.tc.tl(pO, 2), yx.style.top = bD.tc.tk(i.k / i.l - uc), yx.style.height = bD.tc.tk(uc), bD.tc.tl(yx, 8), pP.style.top = bD.tc.tk(ue), pP.style.height = pP.style.maxHeight = bD.tc.tk(z7.z6), pO.style
				.font = bD.tc.vB(0, bD.tc.ud(.02, .15)), yx.style.font = bD.tc.vB(0, bD.tc.ud(.02, .7)), pP.style.font = bD.tc.vB(0, bD.tc.ud(.02, .35)), aC = 1; aC < fl; aC++) bD.tc.tl(yv[aC].button, 4);
			for (var ux = 0, aC = 0; aC < fl; aC++) ux += yv[aC].button.offsetWidth;
			if (uw && ux < yx.offsetWidth)
				for (aC = 0; aC < fl; aC++) yv[aC].button.style.width = (100 * yv[aC].button.offsetWidth / ux).toFixed(2) + "%";
			else
				for (aC = 0; aC < fl; aC++) yv[aC].button.style.width = "auto";
			yx.wC && (yx.scrollLeft = yx.wC), uw || this.resize(!0)
		}, this.z8 = function() {
			var z7 = this.z4(),
				ev = i.l;
			z9.fillStyle = bE.qK, z9.fillRect(0, ev * z7.ue, i.j, ev * z7.z6)
		}, vt.style.position = "absolute", vt.style.top = "0", vt.style.left = "0", vt.style.width = "100%", vt.style.height = "100%", pO.style.position = "absolute", pO.style.top = "0", pO.style.left = "0", pO.style.width = "100%", pO.style
		.display = "flex", pO.style.backgroundColor = bE.qK, yx.style.position = "absolute", yx.style.left = "0", yx.style.width = "100%", bD.tc.vz(yx), yy.style.height = yy.style.maxHeight = "100%", pP.style.position = "absolute", pP.style.width =
		"100%", pP.style.backgroundColor = bE.qK,
		function() {
			for (var aC = 0; aC < yv.length; aC++) yv[aC].button.style.height = "100%", yv[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < yv.length; aC++) yy.appendChild(yv[aC].button);
	pO.appendChild(function() {
		var z3 = document.createElement("h1");
		return z3.textContent = title, z3.style.margin = "auto", z3.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", z3.style.fontFamily = "Arial Black, system-ui", z3
	}()), yx.appendChild(yy), !1 !== yw && (vt.appendChild(pP), vt.appendChild(pO), vt.appendChild(yx))
}

function uX(zA, zB, zC, zD) {
	var self;
	this.uZ = document.createElement("span"), (self = this).uZ.textContent = zA, self.uZ.style.color = bE.qO, self.uZ.style.position = "absolute", self.uZ.style.font = "inherit", zD ? self.uZ.style.bottom = "0.06em" : self.uZ.style.top = "0.12em",
		zC ? self.uZ.style.left = "0.2em" : self.uZ.style.right = "0.2em", self.uZ.style.fontSize = "0.6em", self.uZ.style.pointerEvents = "none", self.uZ.style.whiteSpace = "pre", zB.style.position = "relative", zB.style.overflow = "hidden", zB
		.appendChild(self.uZ)
}

function w1(zA, zB, zE, zF, zG) {
	var self;
	this.uZ = document.createElement("span"), this.resize = function() {
			this.uZ.style.fontSize = ((zF - zE) * zB.offsetHeight).toFixed(1) + "px"
		}, (self = this).uZ.textContent = zA, self.uZ.style.color = bE.qO, self.uZ.style.font = "inherit", self.uZ.style.margin = "0.1em 0.6em", self.uZ.style.pointerEvents = "none", zG && (self.uZ.style.fontWeight = "bold"), self.uZ.style
		.whiteSpace = "nowrap", self.uZ.style.display = "block", zB.appendChild(self.uZ)
}

function zH(zI, zJ, zK, zL) {
	var zM = document.createElement("textarea"),
		zN = (this.e = zM, !0);

	function zS() {
		zM.select(), document.execCommand("copy")
	}
	this.resize = function() {
			zJ && bD.tc.tl(zM, 5)
		}, this.zO = function(ex) {
			zM.value = ex
		}, this.zP = function() {
			return zM.value
		}, this.zQ = function() {
			zM.select()
		}, this.clear = function() {
			zM.value = ""
		}, this.zR = function() {
			zN && navigator.clipboard ? (zM.select(), navigator.clipboard.writeText(zM.value).catch(function() {
				zN = !1, zS()
			})) : zS()
		}, zM.setAttribute("id", "textArea" + u.z.vR++), zM.setAttribute("autocomplete", "off"), zI && zM.setAttribute("placeholder", zI), zM.style.top = "0", zM.style.left = "0", zM.style.width = "100%", zM.style.height = "100%", zM.style
		.userSelect = "none", zM.style.outline = "none", zM.style.resize = "none", zM.style.border = "none", zM.style.color = bE.qO, zM.style.backgroundColor = bE.qH, zL ? (zM.style.fontSize = "1em", zM.rows = 6, zM.style.padding = "0.25em") : (zM
			.style.padding = "0.45em", zM.style.fontSize = "1.2em"), zK && zM.addEventListener("input", function(e) {
			zK(e)
		}), zM.addEventListener("focus", function() {
			i.vS++
		}), zM.addEventListener("blur", function() {
			i.vS--
		})
}

function dT() {
	this.tt = new zT, this.buffer = new zU, this.rv = new zV, this.z = new zW, this.zX = new zY, this.dv = function() {
		this.buffer.dv(), (new zZ).dv(), this.zX.dv(), this.z.za(), __fx.settings.applyRecommendedTerritorialSettings && (bm.buffer.data[1].value = 3, bm.buffer.data[9].value = 2, bm.buffer.data[11].value = 2, bm.buffer.data[7].value = 1)
	}
}

function zU() {
	function zb(aC, type, zh, eC) {
		bm.buffer.data.push({
			eU: aC,
			type: type || 0,
			value: zh || 0,
			zh: zh || 0,
			eC: eC || 0
		})
	}

	function zc(aC, type, zh, eC) {
		bm.buffer.data.push({
			eU: aC,
			type: type,
			value: zh || "",
			zh: zh || "",
			eC: eC || 0
		})
	}

	function zd(oP) {
		for (var aC = bm.buffer.data.length; aC < oP; aC++) bm.buffer.data.push(null)
	}
	this.data = [], this.dv = function() {
		zb(0, 1, 0, 5), zb(1, 1, 1), zb(2, 0), zc(3, 2), zb(4, 1), zc(5, 2, "system-ui", 2), zb(6, 0), zb(7, 0, 0), zb(8, 0), zb(9, 1, 1), zb(10, 1), zb(11, 1, 1), zc(12, 2, navigator.language), zb(13), zb(14), zb(15, 0, 1), zb(16, 0, 3), zd(
			100), zc(100, 2), zc(101, 2), zc(102, 2), zc(103, 2), zc(104, 2), zc(105, 2), zc(106, 2), zb(107), zb(108), zb(109), zc(110, 2), zb(111), zb(112), zb(113), zc(114, 2), zb(115), zc(116, 2), zb(117, 1), zc(118, 2, "", 2), zb(119, 1, 0,
				1), zc(120, 2), zb(121, 1, ~~(262144 * Math.random())), zc(122, 2, "Player " + Math.floor(1e3 * Math.random())), zb(123), zc(124), zb(125, 1), zc(126, 2), zb(127, 0, 1), zb(128), zb(129), zb(130), zb(131), zb(132), zc(133, 2), zb(
				134, 0, 5), zc(135, 2), zc(136, 2), zb(137), zb(138), zb(139), zb(140), zb(141), zb(142), zb(143), zb(144), zc(145, 2), zb(146), zb(147), zc(148, 2), zb(149), zb(150, 0, 1), zc(151, 2), zb(152, 0, 5), zb(153, 1), zb(154, 1), zc(
				155, 2), zc(156, 2), zb(157), zb(158), zb(159), zb(160), zc(161, 2), zb(162, 0, 1024), zc(163, 2, "0,0,0"), zc(164, 2, "100,100,100"), zc(165, 2, "30,30,30"), zc(166, 2, "70,70,70"), zc(167, 2, "100,100,100"), zc(168, 2,
				"85,85,85"), zc(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) zc(170 + aC, 2, "255,255,255");
		zc(174, 2), zc(175, 2), zb(176, 0, 200), zd(180), zb(180, 0), zb(181, 0), zb(182, 0, 1023), zc(183, 2), zb(184, 0, 100), zc(185, 2)
	}, this.q1 = function(eU, value) {
		this.data[eU].value = value
	}, this.ze = function(eU, value) {
		this.q1(eU, value);
		var value = String(value),
			fl = value.length;
		5e4 < fl ? console.log("storage value too large: index " + eU + " size " + fl) : (bm.tt.save(eU, value), bm.tt.save(eU, String(this.data[eU].eC), !0))
	}, this.zf = function(eU) {
		return Number(this.data[eU].value)
	}, this.zg = function(eU) {
		return String(this.data[eU].value)
	}
}

function zY() {
	var zi = [];

	function zl(pe) {
		zi.unshift(pe), bm.rv.q1(161, zi.join(";"))
	}

	function fH(pe) {
		for (var zn = zi, fl = zn.length, aC = 0; aC < fl; aC++)
			if (zn[aC] === pe) return zn.splice(aC, 1), bm.rv.q1(161, zn.join(";")), 1
	}
	this.dv = function() {
		var pW = bm.buffer.data[161].value;
		pW.length && (zi = pW.split(";"))
	}, this.get = function() {
		return zi
	}, this.zj = function() {
		return {
			vU: zi,
			value: 0
		}
	}, this.y3 = function(pe) {
		return bD.tj.has(zi, pe)
	}, this.zk = function(pe) {
		return fH(pe) ? 0 : (zl(pe), 1)
	}, this.nT = function(pe) {
		fH(pe) && zl(pe)
	}, this.zm = function(eU) {
		eU < zi.length && (zi.splice(eU, 1), bm.rv.q1(161, zi.join(";")))
	}
}

function zT() {
	this.zo = function(eU, eC) {
		return Number(this.zp(eU, eC))
	}, this.zp = function(eU, eC) {
		var gD = null;
		return 0 === a1.id ? a1.zq && (gD = a1.zq.getItem((eC ? "v" : "d") + eU)) : 1 === a1.id ? gD = a1.zr.loadString((eC ? 1e3 : 2e3) + eU) : 2 === a1.id && (gD = a1.zs[(eC ? "v" : "d") + eU]), gD && 0 !== gD.length ? gD : null
	}, this.zt = function(fl, zu) {
		var h = [],
			zv = zu ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zq)
				for (aC = 0; aC < fl; aC++) h.push(a1.zq.getItem(zv + aC))
		} else if (1 === a1.id)
			for (var zw = zu ? 5e3 : 3e3, aC = 0; aC < fl; aC++) h.push(a1.zr.loadString(zw + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fl; aC++) h.push(a1.zs[zv + aC]);
		return h
	}, this.save = function(eU, value, eC) {
		var zx = (eC ? "v" : "d") + eU;
		if (0 === a1.id) {
			if (a1.zq && bm.buffer.data[140].value) try {
				a1.zq.setItem(zx, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.zr.saveString((eC ? 1e3 : 2e3) + eU, value) : 2 === a1.id && (a1.zs[zx] = value, a1.zy.postMessage(zx + " " + value))
	}, this.zz = function(h, zu) {
		var fl = h.length,
			zv = zu ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zq && bm.buffer.data[140].value) try {
				for (aC = 0; aC < fl; aC++) a1.zq.setItem(zv + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var zw = zu ? 5e3 : 3e3, aC = 0; aC < fl; aC++) a1.zr.saveString(zw + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fl; aC++) a1.zs[zv + aC] = h[aC], a1.zy.postMessage(zv + aC + " " + h[aC])
	}
}

function zZ() {
	this.dv = function() {
		! function() {
			var data = bm.buffer.data;
			0 === data[2].eC && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].zh = 1);
			0 === data[100].eC && (data[100].value = data[100].zh = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.buffer.data,
			fl = data.length;
		for (aC = 0; aC < fl; aC++) {
			var a02 = bm.tt.zo(aC, !0);
			data[aC] && data[aC].eC === a02 && (null === (a02 = bm.tt.zp(aC)) ? data[aC].value = data[aC].zh : 2 === data[aC].type ? data[aC].value = a02 : (a02 = Number(a02), isNaN(a02) ? data[aC].value = data[aC].zh : data[aC].value = a02))
		}
	}
}

function zW() {
	function a07(h) {
		if (0 === h.length) bm.rv.q1(116, "");
		else {
			for (var a0B = h[0], aC = 1; aC < h.length; aC++) a0B += ";" + h[aC];
			bm.rv.q1(116, a0B)
		}
	}
	this.a04 = function() {
		bm.buffer.data[110].value.length && (bm.buffer.data[106].value = bm.buffer.data[110].value, bm.rv.q1(110, ""), this.a05())
	}, this.a05 = function() {
		var h = bm.buffer.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.buffer.data[106].value), h.unshift(bm.buffer.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var a06 = [], aC = 0; aC < h.length; aC += 2) a06.push(h[aC]);
		a07(h), bm.buffer.data[117].value = 0, bm.buffer.data[117].vU = a06
	}, this.a08 = function(eU) {
		bm.buffer.data[117].vU.splice(eU, 1), bm.buffer.data[117].value = Math.min(eU, bm.buffer.data[117].vU.length - 1);
		var h = bm.buffer.data[116].value.split(";");
		h.splice(2 * eU, 2), a07(h)
	}, this.a09 = function(pe, password) {
		var h = bm.buffer.data[116].value.split(";");
		h.length % 2 == 1 && h.pop();
		for (var aC = 0; aC < h.length; aC += 2)
			if (h[aC] === pe) return h[aC + 1] = password, void a07(h);
		h.push(pe, password), a07(h)
	}, this.a0A = function(eU) {
		var h = bm.buffer.data[116].value.split(";");
		return h.length < 2 * (eU + 1) ? null : {
			pe: h[2 * eU],
			password: h[2 * eU + 1]
		}
	}, this.a0C = function() {
		var gD = bO.iu(bm.buffer.data[121].value, -1, 262143);
		return gD = -1 === gD ? ~~(262144 * Math.random()) : gD
	}, this.za = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var a0D, pW = h[aC].trim();
			0 !== pW.length && (a0D = 0 <= (a0D = pW.indexOf("=")) ? pW.substring(0, a0D) : pW, document.cookie = a0D + "=;expires=0;path=/", document.cookie = a0D + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = a0D +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function zV() {
	this.q1 = function(eU, value) {
		2 !== bm.buffer.data[eU].type && (value = Math.floor(value)), bm.buffer.data[eU].value !== value && (bm.buffer.ze(eU, value), 0 === eU ? (u.y(), bA.dv(), u.v(2)) : 1 === eU ? i.e5(1) : 2 === eU ? i.e5(0) : 5 === eU && (bD.tc.a0E(), i.e5(
			0)))
	}, this.a0F = function() {
		for (var data = bm.buffer.data, aC = 0; aC < 100; aC++) data[aC] && bm.buffer.ze(aC, data[aC].zh);
		bD.tc.a0E(), i.e5(1)
	}, this.a0G = function() {
		for (var data = bm.buffer.data, aC = 0; aC < data.length; aC++) data[aC] && bm.buffer.q1(aC, data[aC].zh)
	}, this.a0H = function() {
		for (var g5 = bm.buffer, aC = 128; aC < 135; aC++) g5.ze(aC, g5.data[aC].zh)
	}, this.a0I = function(data) {
		bm.rv.q1(109, data.vk), bm.rv.q1(107, data.a0J), bm.rv.q1(108, data.a0K), bm.rv.q1(112, data.a0L), bm.rv.q1(111, data.a0M), bm.rv.q1(113, data.a0N), bm.rv.q1(135, data.a0O), bm.rv.q1(136, data.a0P), bm.rv.q1(137, data.a0Q), bm.rv.q1(138,
			data.a0R), bm.rv.q1(139, data.a0S), bm.rv.q1(141, data.a0T), bm.rv.q1(142, data.a0U), bm.rv.q1(143, data.a0V), bm.rv.q1(144, data.a0W)
	}
}

function cD() {
	this.fC = new a0X, this.a0Y = new a0Z, this.a0a = new a0b, this.dv = function() {
		this.fC.dv()
	}
}

function a0Z() {
	this.a0c = function(size) {
		for (var a0d = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0d.sf(16)));
		return h.join("")
	}, this.a0e = function(pW) {
		return 20 < (pW = pW.trim()).length ? pW.substring(0, 20) : pW
	}
}

function a0X() {
	var a0f = new Uint8Array(78);
	this.dv = function() {
		var aC;
		for (a0f[50] = 37, aC = 0; aC < 10; aC++) a0f[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) a0f[aC + 20] = aC + 11, a0f[aC + 52] = aC + 38
	}, this.a0g = function(pW) {
		return pW || (console.log("validateString error: " + pW), pW = ""), pW.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a0h = function(pW, size) {
		if ((pW = this.a0g(pW)).length > size) return pW.substring(0, size);
		for (; pW.length < size;) pW = "-" + pW;
		return pW
	}, this.a0i = function(pW) {
		for (var a0j = a0f, fl = pW.length, h = new Uint8Array(fl), aC = 0; aC < fl; aC++) h[aC] = a0j[pW.charCodeAt(aC) - 45];
		return h
	}, this.a0k = function(a0l) {
		bG.a8(6 * a0l.length), this.a0m(a0l), bK.dv(bG.aD)
	}, this.a0m = function(a0l) {
		for (var fl = a0l.length, j = bG, aC = 0; aC < fl; aC++) j.a9(6, a0l[aC])
	}, this.a0n = function(pW) {
		this.a0m(this.a0i(pW))
	}, this.a0o = function(pW, size) {
		this.a0m(this.a0i(this.a0h(pW, size)))
	}, this.fD = function(pW, size) {
		for (var h = this.a0i(this.a0h(pW, size)), gD = 0, oJ = 1, aC = h.length - 1; 0 <= aC; aC--) gD += oJ * h[aC], oJ *= 64;
		return gD
	}
}

function a0b() {
	this.a0p = function(a0q) {
		for (var a0d = bK, size = a0d.sf(a0q), a0r = 7 + 9 * a0d.sf(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0d.sf(a0r)));
		return h.join("")
	}
}

function cI() {
	var v3, v4, a0s, a0t, a0u, a0v, a0w, a0x, a0y, a0z;

	function a11() {
		var a14 = aE.a14;
		for (a0y = a14; a0y < aE.fi; a0y++) a10();
		for (a0y = aE.iA ? aE.l4 : 0; a0y < a14; a0y++) {
			if (!a15()) {
				for (var g5 = aE.a19 = a0y; g5 < a14; g5++) a0y = g5, a10();
				return
			}
			a18(a0v + v3 * a0u + bO.gC(a0u, 2), a0w + v4 * a0u + bO.gC(a0u, 2))
		}
	}

	function a1b(player) {
		for (var jc = ah.jc, je = ah.je, jd = ah.jd, jf = ah.jf, fu = je[player]; fu <= jf[player]; fu++)
			for (var fs = jc[player]; fs <= jd[player]; fs++) {
				var fP = ad.a1c(fs, fu);
				ad.hL(fP) && (ad.kF(fP) ? ad.hG(fP, player) : ad.a1d(fP, player))
			}
	}

	function a1a(h, w3, w4) {
		var em = h[w3];
		h[w3] = h[w4], h[w4] = em
	}

	function a15() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (v3 = bO.gC(a0s * az.random(), az.value(100)), v4 = bO.gC(a0t * az.random(), az.value(100)), a1i()) return 1;
			return
		}() || function() {
			var j6, j9, g4, a17, g5, a16;
			for (j6 = bO.gC(a0s * az.random(), az.value(100)), j9 = bO.gC(a0t * az.random(), az.value(100)), g4 = 40; 1 <= g4; g4--)
				for (a17 = a0t - g4; 0 <= a17; a17 -= 40)
					for (v4 = (a17 + j9) % a0t, g5 = 40; 1 <= g5; g5--)
						for (a16 = a0s - g5; 0 <= a16; a16 -= 40)
							if (v3 = (a16 + j6) % a0s, a1i()) return 1;
			return
		}()
	}

	function a1i() {
		for (var hJ, a1k, gap = bO.gC(a0u - a0x, 2), a1l = a0w + v4 * a0u + gap, a1m = a0v + v3 * a0u + gap, a1j = a1l + a0x - 1; a1l <= a1j; a1j--)
			for (a1k = a1m + a0x - 1; a1m <= a1k; a1k--)
				if (hJ = ad.a1c(a1k, a1j), !ad.fg(hJ) || ad.kF(hJ)) return;
		return 1
	}

	function a18(a16, a17) {
		a10(), a1n(a16 - 2, a17 - 2)
	}

	function a10() {
		ah.ng[a0y] = 0, ah.hZ[a0y] = ah.a1Y[a0y] = 0, ah.hD[a0y] = [], ah.hR[a0y] = [], ah.hS[a0y] = [], ah.gA[a0y] = [], ah.jc[a0y] = ah.je[a0y] = ah.jd[a0y] = ah.jf[a0y] = 0
	}

	function a1n(a16, a17) {
		var hJ, aC, a1o, a1p;
		for (ah.ng[a0y] = 1, ah.jc[a0y] = a16 + 10, ah.je[a0y] = a17 + 10, ah.jf[a0y] = ah.jd[a0y] = 0, a1o = a16; a1o < a16 + 4; a1o++)
			for (a1p = a17; a1p < a17 + 4; a1p++)(a16 < a1o && a1o < a16 + 3 || a17 < a1p && a1p < a17 + 3) && (hJ = ad.a1c(a1o, a1p), ad.fg(hJ)) && (ah.jc[a0y] = Math.min(a1o, ah.jc[a0y]), ah.jd[a0y] = Math.max(a1o, ah.jd[a0y]), ah.je[a0y] = Math
				.min(a1p, ah.je[a0y]), ah.jf[a0y] = Math.max(a1p, ah.jf[a0y]), a0z[ah.hZ[a0y]] = hJ, ah.hZ[a0y]++, ad.a1d(hJ, a0y));
		for (ah.a1Y[a0y] = ah.hZ[a0y], aC = ah.hZ[a0y] - 1; 0 <= aC; aC--) ad.a1q(a0z[aC], a0y) ? (ad.hG(a0z[aC], a0y), ah.hR[a0y].push(a0z[aC])) : ad.a1r(a0z[aC]) ? (ad.hG(a0z[aC], a0y), ah.hS[a0y].push(a0z[aC])) : ad.a1s(a0z[aC]) && (ad.hG(a0z[aC],
			a0y), ah.gA[a0y].push(a0z[aC]))
	}
	this.dv = function() {
		if (a0z = new Array(12), a0x = 6, a0u = 10, a0s = bO.gC(bV.fw, a0u), a0t = bO.gC(bV.fx, a0u), a0v = bO.gC(bV.fw - a0u * a0s, 2), a0w = bO.gC(bV.fx - a0u * a0t, 2), aE.iA)
			for (var aC = 0; aC < aE.l4; aC++) a0y = aC, a10(), ah.ng[a0y] = 1;
		(0 === aE.data.spawningType ? a11 : 1 === aE.data.spawningType ? (a11(), function() {
			var a1A = aE.a1B;
			aE.a1C || a1A++;
			if (!(a1A < 3)) {
				for (var data = aE.data, kK = (aE.iA ? aE.l4 : 0) + data.teamPlayerCount[0], oP = aE.a19, a1D = new Uint32Array(a1A), a1E = new Uint32Array(a1A), a1F = new Uint16Array(a1A), a1G = new Uint16Array(a1A), fj = bj.fj, jc = ah
						.jc, je = ah.je, jd = ah.jd, jf = ah.jf, gQ = bR.gQ, gR = bR.gR, aC = kK; aC < oP; aC++) gQ[aC] = jc[aC] + jd[aC] >> 1, gR[aC] = je[aC] + jf[aC] >> 1;
				for (aC = kK; aC < oP; aC++) {
					var id = fj[aC];
					a1D[id] += gQ[aC], a1E[id] += gR[aC]
				}
				var lR = bj.lR;
				for (aC = 1; aC < a1A; aC++) {
					var hE = Math.max(data.teamPlayerCount[lR[aC]], 1);
					a1F[aC] = bO.gC(a1D[aC], hE), a1G[aC] = bO.gC(a1E[aC], hE)
				}
				var a1H = bj.a1H,
					a1I = bj.a1I,
					a1J = bj.a1J,
					gP = bR.gP;
				for (aC = 0; aC < 512; aC++) gP[aC] = aC;
				for (var eT = 0; eT < 2 + (4 <= a1A); eT++)
					for (aC = kK; aC < oP; aC++) {
						for (var iE = aC, a1K = gP[iE], a1L = 1, g1 = bO.a1M(gQ[a1K] - a1F[1], gR[a1K] - a1G[1]), g4 = 2; g4 < a1A; g4++) {
							var a1N = bO.a1M(gQ[a1K] - a1F[g4], gR[a1K] - a1G[g4]);
							a1N < g1 && (g1 = a1N, a1L = g4)
						}
						var a1O = fj[iE];
						if (a1L !== a1O) {
							if (2 === eT && 4 <= a1A) {
								var a1P = Math.max((a1L + 1) % a1A, 1),
									a1Q = bO.a1M(gQ[a1K] - a1F[a1P], gR[a1K] - a1G[a1P]);
								for (g4 = 1; g4 < a1A; g4++) a1N = bO.a1M(gQ[a1K] - a1F[g4], gR[a1K] - a1G[g4]), g1 < a1N && a1N < a1Q && (a1Q = a1N, a1P = g4);
								a1P !== a1O && bO.a1M(a1F[a1O] - a1F[a1P], a1G[a1O] - a1G[a1P]) < bO.a1M(a1F[a1O] - a1F[a1L], a1G[a1O] - a1G[a1L]) && (a1L = a1P)
							}
							var a1R = lR[a1L],
								a1S = a1I[a1R] + (aE.iA ? 0 : a1J[a1R]),
								lh = a1H[a1S],
								a1T = gP[lh],
								a1U = a1I[a1R + 1];
							g1 = bO.a1M(gQ[a1T] - a1F[a1O], gR[a1T] - a1G[a1O]);
							for (var ev = a1S + 1; ev < a1U; ev++) {
								var a1V = a1H[ev],
									a1W = gP[a1V];
								(a1N = bO.a1M(gQ[a1W] - a1F[a1O], gR[a1W] - a1G[a1O])) < g1 && (g1 = a1N, lh = a1V)
							}
							lh < kK || oP <= lh || (a1T = gP[lh], a1D[a1O] += gQ[a1T] - gQ[a1K], a1E[a1O] += gR[a1T] - gR[a1K], a1D[a1L] += gQ[a1K] - gQ[a1T], a1E[a1L] += gR[a1K] - gR[a1T], hE = data.teamPlayerCount[lR[a1O]], a1F[a1O] =
								bO.gC(a1D[a1O], hE), a1G[a1O] = bO.gC(a1E[a1O], hE), hE = data.teamPlayerCount[a1R], a1F[a1L] = bO.gC(a1D[a1L], hE), a1G[a1L] = bO.gC(a1E[a1L], hE), gP[iE] = a1T, gP[lh] = a1K)
						}
					}! function() {
						for (var gP = bR.gP, jc = ah.jc, je = ah.je, jd = ah.jd, jf = ah.jf, hZ = ah.hZ, a1Y = ah.a1Y, hR = ah.hR, hS = ah.hS, gA = ah.gA, aC = 0; aC < 512; aC++) {
							var a1Z = gP[aC];
							if (a1Z !== aC) {
								a1a(jc, aC, a1Z), a1a(je, aC, a1Z), a1a(jd, aC, a1Z), a1a(jf, aC, a1Z), a1a(hZ, aC, a1Z), a1a(a1Y, aC, a1Z), a1a(hR, aC, a1Z), a1a(hS, aC, a1Z), a1a(gA, aC, a1Z), a1b(aC), a1b(a1Z), gP[aC] = aC;
								for (var k = a1Z, hK = gP[k]; hK !== aC;) hK = gP[k = hK];
								gP[k] = a1Z
							}
						}
					}()
			}
		}) : function() {
			var a14 = aE.a14;
			for (a0y = a14; a0y < aE.fi; a0y++) a10();
			for (a0y = aE.iA ? aE.l4 : 0; a0y < a14; a0y++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							a16 = spawningData[2 * a0y] + 1,
							spawningData = spawningData[2 * a0y + 1] + 1;
						if (3 < a16 && a16 < bV.fw - 5 && 3 < spawningData && spawningData < bV.fx - 5 && ad.fg(ad.a1c(a16, spawningData)) && function(a16, a17) {
								var hJ, a1k, a1j;
								for (a1j = a17; a17 - 6 < a1j; a1j--)
									for (a1k = a16; a16 - 6 < a1k; a1k--)
										if (hJ = ad.a1c(a1k, a1j), ad.kF(hJ)) return;
								return 1
							}(a16 + 3, spawningData + 3)) return a18(a16 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a15()) {
						for (var g5 = aE.a19 = a0y; g5 < a14; g5++) a0y = g5, a10();
						return
					}
					var a16 = a0v + v3 * a0u + bO.gC(a0u, 2),
						a17 = a0w + v4 * a0u + bO.gC(a0u, 2);
					a18(a16, a17)
				}
		})(), bg.nc[7] = ah.hZ[aE.fV]
	}, this.a1t = function(kD, a1u, a1v) {
		var aC, a16, a17, hJ, v3, v4;
		for (a0y = kD, aC = 0; aC < 20; aC++)
			for (a16 = a1u + aC; a1u - aC <= a16; a16--)
				for (a17 = a1v + aC; a1v - aC <= a17; a17--)
					if ((a16 === a1u + aC || a16 === a1u - aC || a17 === a1v + aC || a17 === a1v - aC) && 3 < a16 && a16 < bV.fw - 5 && 3 < a17 && a17 < bV.fx - 5 && ad.fg(ad.a1c(a16, a17)) && function(a16, a17) {
							var hJ, a1k, a1j;
							for (a1j = a17; a17 - 6 < a1j; a1j--)
								for (a1k = a16; a16 - 6 < a1k; a1k--)
									if (hJ = ad.a1c(a1k, a1j), ad.kF(hJ) && !ad.a21(a0y, hJ)) return;
							return 1
						}(a16 + 3, a17 + 3)) {
						if (0 < ah.hZ[a0y]) {
							for (v4 = v3 = hJ = void 0, v3 = ah.jd[a0y]; v3 >= ah.jc[a0y]; v3--)
								for (v4 = ah.jf[a0y]; v4 >= ah.je[a0y]; v4--) hJ = 4 * (v4 * bV.fw + v3), ad.a1y(a0y, hJ) && (ad.a1z(hJ), ah.hZ[a0y]--);
							a10()
						}
						return a1n(a16 - 1, a17 - 1), !0
					} return !1
	}, this.a20 = function(kD) {
		a0y = kD, a15() ? a18(a0v + v3 * a0u + bO.gC(a0u, 2), a0w + v4 * a0u + bO.gC(a0u, 2)) : a10()
	}
}

function a22() {
	au.a23(), z9.setTransform(ix, 0, 0, ix, 0, 0), z9.imageSmoothingEnabled = ix < 3, z9.drawImage(bV.a24, aT.a25(), aT.a26()), bS.a27.z8(), z9.drawImage(a28, aT.a25(), aT.a26()), au.z8(), bQ.z8(), ag.z8(), (aE.oA ? (bk.z8(), bF) : (aO.z8(), aW.z8(),
		aS.z8(), bF.z8(), ax.z8(), aX.z8(), aT.z8(), aR.z8(), bk.z8(), aV.z8(), aQ.z8(), aN.z8(), aM.z8(), aY.z8(), bh.z8(), aw)).z8(), u.z8()
}

function a29(p4, j, k) {
	p4.clearRect(0, 0, j, k), p4.fillStyle = bE.qL, p4.fillRect(0, 0, j, k)
}

function a2A(p4, j, k, a2B) {
	p4.fillStyle = bE.qO, p4.fillRect(0, 0, j, a2B), p4.fillRect(0, 0, a2B, k), p4.fillRect(j - a2B, 0, a2B, k), p4.fillRect(0, k - a2B, j, a2B)
}

function a2C(p4, fs, fu, ih, a2B, hJ, a2D) {
	p4.fillStyle = bE.qO;
	var hJ = Math.floor(ih * hJ),
		vr = (hJ += (hJ - a2B) % 2, Math.floor((hJ - a2B) / 2)),
		ih = Math.floor((ih - hJ) / 2);
	p4.fillRect(fs + ih, fu + ih + vr, hJ, a2B), a2D && p4.fillRect(fs + ih + vr, fu + ih, a2B, hJ)
}

function a2F() {
	this.dv = function() {
		8 === aE.lM && aO.a2G()
	}, this.a2H = function(a2I) {
		var elo = aE.data.elo,
			kJ = (elo[a2I] - elo[1 - a2I]) / 10,
			kJ = 8 / (1 + Math.pow(2, kJ / 32)),
			kJ = Math.floor(10 * kJ + .5),
			a2K = elo[a2I] + kJ,
			a2L = this.a2M(a2K),
			elo = this.a2M(elo[1 - a2I] - kJ),
			kJ = (0 === a2I ? aO.a2O(a2L, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.a2O(elo, a2L, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a2K * bO.sqrt(a2K) >> 8),
			elo = ((1 + aE.a2R) * kJ / 100).toFixed(2);
		a2I !== aE.fV || aE.hv ? aO.a2S(640, L(38, [ah.a2T[a2I], elo]), 40, 0, bE.qO, bE.qL, -1, !1) : aO.a2S(640, L(37, [elo]), 40, 0, bE.qO, bE.qL, -1, !1)
	}, this.a2M = function(elo) {
		return 16e3 === (elo = bO.iu(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function co() {
	this.ps = new a2U, this.a2V = new a2W
}

function a2W() {
	this.iV = !1;
	this.a2a = [], this.a2b = 100;
	var o7, o8, gap, ih, a2X, a2Z, a2c = 0,
		a2d = new Array(9),
		a2e = [],
		a2f = [],
		a2g = 0,
		a2h = 0,
		a2i = 0,
		a2j = 0;

	function a2v() {
		a2d.sort(function(g4, g5) {
			return g5.l9 - g4.l9
		});
		for (var pW = "" + a2d[0].sG, aC = 1; aC < 9; aC++) pW += "," + a2d[aC].sG;
		for (aC = 0; aC < 9; aC++) pW += "," + a2d[aC].l9;
		bm.buffer.ze(120, pW)
	}
	this.dv = function() {
		for (var a2k = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a2k.length; aC++) {
			var color = 6 === a2k[aC] ? bE.qo : bE.qM;
			this.a2a.push(bD.canvas.a2l(ac.get(3), a2k[aC], color))
		}
		for (aC = 0; aC < ak.ps.a2m; aC++) a2f.push(ak.ps.a2n - ak.ps.a2m + aC);
		for (aC = 0; aC < ak.ps.a2o; aC++) a2f.push(ak.ps.a2p + aC);
		var a2q = ak.ps.a2r(bN.a2q);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a2q.slice(), aC = 0; aC < a2q.length; aC++) a2f.push(a2q[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a2d[q] = {
						sG: isNaN(qcode) ? 1015 + q : qcode,
						l9: 0
					}
				} else {
					var aC, h = bm.buffer.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) a2d[aC] = {
							sG: 1015 + aC,
							l9: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var gD = parseInt(h[aC]),
								ev = (gD = 0 <= gD && gD < ak.ps.a2n ? gD : 0, parseInt(h[aC + 9]));
							ev = 0 <= ev && ev < 1e3 ? ev : 0, a2d[aC] = {
								sG: gD,
								l9: ev
							}
						}
				}
		}()
	}, this.show = function(mJ, mK, a2w) {
		var aC;
		if (a2g = mJ, a2h = mK, a2c = a2w || 0, this.iV = !0, a2e = [], 0 === a2c)
			for (aC = 0; aC < 9; aC++) a2e.push(a2d[aC].sG);
		else {
			var g5 = 49 * a2c,
				a2w = g5 - 49;
			for (a2w >= a2f.length && (a2c = 1, a2w = 0, g5 = 49), aC = a2w = (g5 = Math.min(g5, a2f.length)) - 49; aC < g5; aC++) a2e.push(a2f[aC])
		}
		a2e.push(1024);
		a2w = a2e.length, ih = Math.floor((a1.a2.iv() ? .075 : .0468) * i.iw), gap = Math.floor(ih / 3), (a2i = 10 * (a2X = ih + gap)) > i.j && (a2i = i.j, gap = (a2X = a2i / 10) - (ih = 3 * a2X / 4)), a2Z = bO.gC(a2w, 10) + !!(a2w % 10), (a2j =
			a2Z * a2X) > i.k && (a2j = i.k, gap = (a2X = a2j / a2Z) - (ih = 3 * a2X / 4)), a2w = .5 * gap;
		o7 = Math.min(Math.max(mJ - .5 * a2i + a2w, a2w), i.j - a2i + a2w), o8 = Math.min(Math.max(mK - .5 * a2j + a2w, a2w), i.k - a2j + a2w)
	}, this.hz = function(mJ, mK, player) {
		if (!this.iV) return !1;
		if (this.a2y(mJ, mK)) {
			mJ = bO.iu(bO.gC(mJ - o7 + .5 * gap, a2X), 0, 9);
			if ((mJ += 10 * bO.iu(bO.gC(mK - o8 + .5 * gap, a2X), 0, 9)) >= a2e.length) return aM.ub(), !0;
			mK = a2e[mJ];
			if (1024 === mK) return this.show(a2g, a2h, a2c + 1), !0;
			! function(sG) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) a2d[aC].l9 = Math.floor(.99 * a2d[aC].l9);
					for (aC = 0; aC < 9; aC++)
						if (sG === a2d[aC].sG) return a2d[aC].l9 = Math.min(a2d[aC].l9 + 30, 999), a2v();
					a2d.splice(5, 0, {
						sG: sG,
						l9: Math.max(a2d[4].l9, 30)
					}), a2d.pop(), a2v()
				}
			}(mK), player === aE.fV ? bB.iC.sF(mK) : bB.h7.sU(mK, player)
		}
		return aM.ub(), !0
	}, this.a2y = function(mJ, mK) {
		return !(mJ < o7 - .5 * gap || mK < o8 - .5 * gap || o7 + a2i - .5 * gap <= mJ || o8 + a2j - .5 * gap <= mK)
	}, this.z8 = function() {
		for (var fxSmooth = __fx.utils.clipRounded(z9, o7 - .5 * gap, o8 - .5 * gap, a2i, a2j), ib = (z9.fillStyle = bE.qL, z9.fillRect(o7 - .5 * gap, o8 - .5 * gap, a2i, a2j), fxSmooth && z9.restore(), .5 * bf.a2z), fl = (z9.lineWidth = bf.a2z,
				z9.strokeStyle = z9.fillStyle = bE.qO, fxSmooth ? __fx.utils.strokeRounded(z9, o7 - .5 * gap, o8 - .5 * gap, a2i, a2j, bf.a2z) : z9.strokeRect(o7 - .5 * gap + ib, o8 - .5 * gap + ib, a2i - 2 * ib, a2j - 2 * ib), z9
				.imageSmoothingEnabled = !0, a2e.length), aC = 0; aC < fl; aC++) this.a30(a2e[aC], z9, o7 + aC % 10 * a2X, o8 + bO.gC(aC, 10) * a2X, ih);
		z9.imageSmoothingEnabled = !1
	}, this.a30 = function(sG, io, fs, fu, ih) {
		var fP;
		sG >= 1024 - ak.ps.a2m ? (fP = ih / this.a2b, io.setTransform(fP, 0, 0, fP, fs, fu), io.drawImage(this.a2a[sG - 1024 + ak.ps.a2m], 0, 0), io.setTransform(1, 0, 0, 1, 0, 0)) : (bD.tc.textAlign(io, 1), bD.tc.textBaseline(io, 1), io.font =
			bD.tc.vB(0, .89 * ih), io.fillText(ak.ps.a31(sG), fs + .5 * ih, fu + (.35 - bD.tc.a32 + .56) * ih))
	}
}

function a2U() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a2m = 13, this.a2o = this.emojis.length, this.a2p = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a2p, this.a2n = 1024, this.a33 = this.emojis.indexOf(
		"💀"), this.a34 = this.a33 + 1, this.a35 = this.emojis.indexOf("🥇"), this.a36 = this.emojis.indexOf("😊"), this.a31 = function(gD) {
		return gD < this.a2p ? String.fromCharCode(55356, 56806 + bO.gC(gD, 26), 55356, 56806 + gD % 26) : this.emojis[Math.min(gD - this.a2p, this.a2o - 1)]
	}, this.a2r = function(pW) {
		for (var fl = pW.length - 2, h = [], aC = 0; aC < fl; aC++) {
			var a37 = pW.charCodeAt(aC) - 56806,
				a38 = pW.charCodeAt(aC + 2) - 56806;
			0 <= a37 && a37 < 26 && 0 <= a38 && a38 < 26 && (h.push(26 * a37 + a38), aC += 3)
		}
		return h
	}, this.a39 = function(gD) {
		return gD < this.a2p
	}, this.a3A = function(gD) {
		return gD >= 1024 - this.a2m
	}, this.a3B = function(gD) {
		return gD >= this.a2p && gD < this.a2p + this.a34
	}
}

function cC() {
	this.fC = new a3C, this.a0Y = new a3D, this.a0a = new a3E, this.dv = function() {
		this.fC.dv()
	}
}

function a3D() {
	this.a0n = function(pW) {
		for (var fl = pW.length, j = bG, aC = 0; aC < fl; aC++) j.a9(16, pW.charCodeAt(aC))
	}
}

function a3C() {
	var a3F = new Uint8Array(64);
	this.dv = function() {
		var aC;
		for (a3F[0] = 45, a3F[37] = 95, aC = 0; aC < 10; aC++) a3F[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a3F[aC + 11] = 65 + aC, a3F[aC + 38] = 97 + aC
	}, this.vo = function(a3G) {
		for (var a0d = bK, a0l = new Uint8Array(a3G), aC = 0; aC < a3G; aC++) a0l[aC] = a0d.sf(6);
		return a0l
	}, this.vn = function(a0l) {
		for (var fl = a0l.length, a3H = a3F, h = [], aC = 0; aC < fl; aC++) h.push(String.fromCharCode(a3H[a0l[aC]]));
		return h.join("")
	}, this.a3I = function(value, a3J) {
		for (var a3H = a3F, h = [], aC = 0; aC < a3J; aC++) h.push(String.fromCharCode(a3H[value >> 6 * (a3J - 1 - aC) & 63]));
		return h.join("")
	}
}

function cK() {
	var a3K, a3L, a3M;
	a3K = [32, 65, 191, 913, 931], a3L = [64, 127, 688, 930, 1155], a3M = new Array(a3K.length + 1);
	for (var aC = 0; aC < a3M.length; aC++) {
		a3M[aC] = 0;
		for (var g4 = aC - 1; 0 <= g4; g4--) a3M[aC] += a3L[g4] - a3K[g4]
	}

	function a3S(ev) {
		for (var aC = a3K.length - 1; 0 <= aC; aC--)
			if (ev >= a3K[aC] && ev < a3L[aC]) return aC;
		return -1
	}
	this.a0e = function(pW) {
		return 0 !== (pW = pW.trim()).indexOf("Bot ") && 0 !== pW.indexOf("[Bot] ") && function(pW, a3P, a3Q) {
			var fl = (pW = pW.trim()).length;
			if (fl < a3P || a3Q < fl) return !1;
			for (var ev, a3R = 0, aC = 0; aC < fl; aC++)
				if (ev = pW.charCodeAt(aC), a3R += 65 <= ev && ev <= 90 || 1040 <= ev && ev <= 1071 ? 1 : 0, -1 === a3S(ev)) return !1;
			if (3 < a3R && a3R > Math.floor(fl / 2)) return !1;
			return !0
		}(pW, 3, 20)
	}, this.a3T = function(pW) {
		for (var fl = (pW = pW.trim()).length, h = [], aC = 0; aC < fl; aC++) {
			var ev, hJ = a3S(ev = pW.charCodeAt(aC));
			h.push(a3M[hJ] + ev - a3K[hJ])
		}
		return h
	}, this.a0p = function(h) {
		for (var ev, g5, pW = "", fl = h.length, aC = 0; aC < fl; aC++)
			for (g5 = 1; g5 < a3M.length; g5++)
				if (h[aC] < a3M[g5]) {
					ev = a3K[g5 - 1] + h[aC] - a3M[g5 - 1], pW += String.fromCharCode(ev);
					break
				} return pW
	}, this.a3U = function(pW) {
		for (var h = this.a3T(pW), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a3V = function(pW) {
		for (var h = new Array(Math.floor(pW.length / 3)), aC = 0; aC < pW.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(pW.substring(aC, aC + 3));
		return this.a0p(h)
	}, this.a3W = function(pW) {
		for (var gD, h = [pW.length], aC = 0; aC < pW.length; aC++) h[aC] = pW.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < pW.length; aC++) aC === pW.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (gD = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(gD + (gD < 26 ? 65 : 71)), aC++);
		return result
	}, this.a3X = function(pW) {
		for (var ev, result = "", aC = 0; aC < pW.length; aC++) 48 <= (ev = pW.charCodeAt(aC)) && ev < 58 ? result += String.fromCharCode(ev) : 65 <= ev && ev < 75 ? result += "0" + (ev - 65).toString() : 75 <= ev && ev < 91 ? result += (ev - 65)
			.toString() : 97 <= ev && ev < 123 && (result += (ev - 71).toString());
		return result
	}, this.a3Y = function(pW) {
		for (var fl = pW.length, h = [], aC = 0; aC < fl; aC++)(ev = pW.charCodeAt(aC)) < 58 ? h.push(pW[aC]) : (ev -= ev < 91 ? 65 : 71, h.push(String(bO.gC(ev, 10))), h.push(String(ev - 10 * bO.gC(ev, 10))));
		var fl = h.length - 2,
			ev = 0,
			a0l = [];
		for (aC = 0; aC < fl; aC += 3) a0l[ev++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return a0l
	}, this.a3Z = function() {
		for (var eT, a3a = "", aC = 0; aC < 6; aC++) eT = 48 + az.random() % 36, eT += 58 <= eT ? 39 : 0, a3a += String.fromCharCode(eT);
		return a3a
	}
}

function a3E() {
	this.a3T = function(pW, a0q, a3b) {
		for (var a3c = [], fl = pW.length, max = 0, aC = 0; aC < fl; aC++) {
			var gD = pW.charCodeAt(aC);
			a3c.push(gD), max = Math.max(max, gD)
		}
		var a0r = max < 128 ? 7 : 16;
		for (a3b.a9(a0q, fl), a3b.a9(1, +(16 == a0r)), aC = 0; aC < fl; aC++) a3b.a9(a0r, a3c[aC])
	}
}

function dL() {
	this.a3d = new a3e, this.result = new a3f, this.a3g = new a3h, this.nH = new a3i, this.a3j = new a3k, this.a3l = new a3m, this.dv = function() {
		this.result.dv()
	}
}

function a3h() {
	this.a3n = function() {
		for (var fl = am.la, xE = am.lf, a3o = [], aC = 0; aC < fl; aC++) {
			var hJ = xE[aC];
			bD.h7.a3p(hJ) && a3o.push(hJ)
		}
		return a3o
	}, this.a3q = function() {
		if (0 === bj.lR[aE.a3r]) return this.a3s();
		bk.l5(aE.a3r);
		for (var a3o = [], fl = bR.gG[0], gP = bR.gP, aC = 0; aC < fl; aC++) {
			var hJ = gP[aC];
			bD.h7.a3p(hJ) && a3o.push(hJ)
		}
		return a3o
	}, this.a3s = function() {
		var hJ = mf[0];
		return bD.h7.a3p(hJ) ? [hJ] : []
	}, this.a3t = function(a3o) {
		for (var fl = a3o.length, em = 0, hZ = ah.hZ, aC = 0; aC < fl; aC++) em += hZ[a3o[aC]];
		return em
	}
}

function a3e() {
	function a3v() {
		if (2 === aE.a3z) return 1;
		ax.a40(), aE.a3z = 2, aE.a41 = aE.a42
	}

	function a3x() {
		bU.a3j.a43(), aY.show(1 === aE.a44, !1, 2 === aE.a44), bU.result.a43(), bU.a3l.eq(), bU.nH.eq(), bU.nH.a45(), aO.a46(!0), aO.a47(247), aO.a47(956), aO.a47(957), aW.nS(!0), aX.nS(!0), ax.nS(), bF.a48(), aE.hu && bi.a49.a4A(), bi.e2 = !0, be
			.a4B(), a1.a2.setState(0)
	}
	this.a3u = function() {
		a3v() || (aE.a3w = 2, a3x())
	}, this.a3y = function() {
		a3v() || (aE.a3w = 1, a3x())
	}
}

function a3i() {
	var a4C = 0;
	this.eq = function() {
		var a4K;
		2 === aE.a3w ? (aO.a4D(0, 59), aI.oG(2700)) : aE.lM < 7 ? (a4K = bj.lR[aE.a3r], a4K = bj.a4M[a4K], aR.a4N(L(39, [a4K]), 2, 1, 12), aO.a2S(0, L(40, [a4K]), 40, 0, bE.qO, bE.qL, -1, !1), aI.oG(2700)) : 8 === aE.lM ? (aE.hv ? aO.a4D(aE.a4I,
			3) : aE.a44 ? aO.a4D(aE.a4I, 2) : aO.a4D(1 - aE.fV, 3), aE.a4J.a2H(aE.a4I), aI.o2(aE.a4I, 2700, !1, 0)) : 9 === aE.lM ? (aO.a4O(), aI.oG(2700)) : (aO.a4P(aE.a4I), aI.o2(aE.a4I, 2700, !1, 0))
	}, this.a45 = function() {
		a4C = 0, aE.hu || aE.lO || (a4C = 54)
	}, this.nI = function() {
		var pW;
		0 !== a4C && 0 === --a4C && (pW = b1.z.a4R(), aE.lM < 7 ? pW += "/log/team" : 8 === aE.lM ? pW += "/log/1v1" : 9 === aE.lM ? pW += "/log/zombies" : pW += "/log/br", aO.a2S(720, pW, 736, 0, bE.qO, bE.qm, -1, !1), aE.a4S < 0 || (pW = b1.z
			.a4R() + "/log/?r=" + bI.fC.a3I(aE.a4S, 6), aO.a2S(1071, pW, 736, 0, bE.qO, bE.qm, -1, !1)))
	}
}

function a3m() {
	function a4d() {
		var w7;
		return 8 === aE.lM ? 0 : (w7 = Math.floor(ah.a4e[aE.fV] / 50), (w7 = Math.min(w7, 200)) / 100)
	}

	function a4U() {
		var w7 = a4d();
		0 === w7 || aE.hv || aO.a2S(440, L(41, [w7.toFixed(2)]), 40, 0, bE.qg, bE.qL, -1, !1)
	}
	this.eq = function() {
		var a4V;
		0 === bU.result.a4T || 0 === bU.result.a3o.length || 8 === aE.lM ? bD.h7.hy(aE.fV) && a4U() : (function(a4V) {
			7 !== aE.lM && 10 !== aE.lM && 9 !== aE.lM || 0 !== aE.a44 && a4V && (9 === aE.lM ? aO.a2S(600, L(45, [100 * (1 + aE.a2R)]), 40, 0, bE.qO, bE.qL, -1, !1) : aO.a2S(600, L(45, [a4V.toFixed(2)]), 40, 0, bE.qO, bE.qL, -1, !1))
		}(a4V = function() {
			aO.a2S(520, L(42), 40, 0, bE.qO, bE.qL, -1, !1);
			for (var a3o = bU.result.a3o, fl = a3o.length, hZ = ah.hZ, h = [], aC = 0; aC < fl; aC++) {
				var hJ = a3o[aC];
				h.push({
					hJ: hJ,
					em: hZ[hJ]
				})
			}
			h.sort((g4, g5) => g5.em - g4.em);
			var a4M = ah.a2T,
				em = bU.result.a4f,
				w7 = bU.result.a4T,
				pW = "",
				a4V = 0;
			for (aC = 0; aC < fl; aC++) {
				var iT = h[aC].em * w7 / (100 * em),
					a4h = a4M[h[aC].hJ] + ": " + iT.toFixed(2) + "   ";
				h[aC].hJ !== aE.fV || aE.hv || (a4V = iT, 9 === aE.lM && 0 !== aC && (a4V = 0)), 2 < aC && 4 !== fl ? 3 === aC && (pW += "(" + L(43, [fl - 3]) + ")") : pW += a4h
			}
			aO.a2S(560, bD.pa.a4i(pW), 40, 0, bE.qg, bE.qL, -1, !1), a4V ? aO.a2S(580, L(44, [a4V.toFixed(2) + " + " + a4d().toFixed(2)]), 40, 0, bE.qg, bE.qL, -1, !1) : bD.h7.hy(aE.fV) && a4U();
			return a4V
		}()), 2 === aE.a3w || 7 <= aE.lM || function(a4V) {
			var a3o = bU.result.a3o,
				fl = a3o.length,
				a4j = ah.a4j,
				hZ = ah.hZ,
				a4k = [];
			loop: for (var aC = 0; aC < fl; aC++) {
				var hJ = a3o[aC],
					a4l = bD.pa.po(a4j[hJ]);
				if (null !== a4l) {
					for (var a4m = hZ[hJ], g5 = a4k.length - 1; 0 <= g5; g5--)
						if (a4l === a4k[g5].name) {
							a4k[g5].em += a4m, a4k[g5].h.push({
								hJ: hJ,
								em: a4m
							});
							continue loop
						} a4k.push({
						name: a4l,
						em: a4m,
						h: [{
							hJ: hJ,
							em: a4m
						}]
					})
				}
			}
			if (0 !== a4k.length) {
				a4k.sort((g4, g5) => g5.em - g4.em);
				var h = a4k[0].h,
					a4n = (h.sort((g4, g5) => g5.em - g4.em), "[" + a4k[0].name + "]"),
					a4o = 512 * bU.result.a4T / 26214400,
					lz = (aO.a2S(0, L(46, [a4n, a4o.toFixed(4)]), 40, 0, bE.qO, bE.qL, -1, !1), h.length),
					a0j = a4k[0].em,
					a4p = 1e4 * a4o;
				for (aC = 0; aC < lz; aC++)
					if (h[aC].hJ === aE.fV && !aE.hv) {
						aO.a2S(600, L(47, [(a4p * h[aC].em / (10 * a0j)).toFixed(2)]), 40, 0, bE.qO, bE.qL, -1, !1), aO.a2S(640, L(48, [(.2 * a4V).toFixed(2), a4n]), 40, 0, bE.qO, bE.qL, -1, !1);
						break
					}
			}
		}(a4V))
	}, this.a4Z = function() {
		var a4a, a4b;
		aE.lO || (a4a = ah, a4b = aE.fV, 0 === a4a.a4c[a4b]) || a4a.k8[a4b] < 1 || 2 * a4a.sw[a4b] > 3 * (a4a.k7[a4b] + a4a.k8[a4b]) || a4U()
	}
}

function a3f() {
	this.dv = function() {
		this.a4q = 0, this.a3o = [], this.a4f = 0, this.a4T = 0
	}, this.a43 = function() {
		var uv;
		aE.lO || (uv = this, 2 === aE.a3w ? uv.a3o = bU.a3g.a3n() : aE.ie ? uv.a3o = bU.a3g.a3q() : uv.a3o = bU.a3g.a3s(), uv.a4q = bl.a4s.a4t(), uv.a4f = Math.max(1, bU.a3g.a3t(uv.a3o)), bB.h7.sd(), 8 === aE.lM ? bU.result.a4T = 0 : uv.a4T =
			100 * bU.result.a4q * (1 + aE.a2R))
	}
}

function a3k() {
	this.a43 = function() {
		if (2 === aE.a3w) aE.a44 = 2;
		else {
			if (8 === aE.lM) bD.h7.kR(0) || 0 === ah.ng[0] ? aE.a4I = 1 : bD.h7.kR(1) || 0 === ah.ng[1] ? aE.a4I = 0 : aE.a4I = +(ah.hZ[1] > ah.hZ[0]);
			else {
				if (aE.ie) {
					var lc = bk.a4w();
					if (aE.a3r = lc, bj.lR[lc]) return void(aE.a44 = +(bj.fj[aE.fV] === lc))
				}
				aE.a4I = mf[0]
			}
			aE.a44 = +(aE.a4I === aE.fV)
		}
	}
}

function dQ() {
	this.id = 0, this.eC = 0, this.zq = null, this.zr = null, this.zs = null, this.zy = null, this.a2 = new a4x, this.dv = function() {
		var self, eC;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (eC = Android.getVersion()) < 12 || (self.eC = eC, self.id = 1, self.zr = Android),
			function(self) {
				var eC;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.zs = mwIOSdataX, self.zy = window.webkit.messageHandlers.iosCommandA, eC = self
					.zs.version, self.eC = eC ? Number(eC) : 0)
			}(this),
			function(self) {
				var zq;
				try {
					if (!(zq = window.localStorage)) return;
					zq.setItem("tls7", "1"), zq.removeItem("tls7")
				} catch (error) {
					return
				}
				self.zq = zq
			}(this)
	}
}

function a4x() {
	this.a51 = function() {
		bm.rv.a0F(), bm.rv.a0G(), b1.z.close(0, 3255), 0 === a1.id ? a1.zq && a1.zq.clear() : 1 === a1.id ? a1.zr.saveString(199, "") : 2 === a1.id && a1.zy.postMessage("clear")
	}, this.a52 = function() {
		2 === a1.id ? a1.zy.postMessage("showConsentForm") : 1 === a1.id && a1.zr.setState(7)
	}, this.a53 = function() {
		this.setState(14)
	}, this.iv = function() {
		return 1 === bm.buffer.zf(2)
	}, this.a54 = function() {
		bm.buffer.ze(102, "")
	}, this.setState = function(a55) {
		1 === a1.id && 5 <= a1.eC && a1.zr.setState(a55)
	}, this.a3 = function() {
		var a56;
		1 === a1.id && 7 <= a1.eC ? a1.zr.setState(5) : 2 === a1.id ? a1.zy.postMessage("reload 0") : ((a56 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a56.toString())
	}, this.eh = function() {
		0 !== a1.id && (1 === a1.id ? a1.zr.prepareAd("8646194357") : 2 === a1.id && (0 === a1.eC ? a1.zy.postMessage("prepare ad 2904813909") : a1.zy.postMessage("loadAds 2904813909")))
	}, this.en = function(em) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.eC && (a1.zr.presentAd(em), !0) : 2 === a1.id && 0 !== a1.eC && (a1.zy.postMessage("showAd"), !0))
	}, this.e4 = function() {
		2 === a1.id && a1.eC < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a57 + "' target='_blank'>" + bN
			.a57 + "</a>", !0, [new x("⬅️ " + L(49), function() {
				u.v(0)
			}, bE.r5)]))
	}
}

function df() {
	function a59(e) {
		mO(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(49), function() {
				u.a5A()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.ql)]))
	}

	function a5M(e) {
		mO(e), u.v(4, 5, new w(L(50), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a5H(e), !0))
	}

	function a5H(e) {
		var pW = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + pW : 4527 === e ? "Player already in lobby" + pW : 4577 === e ? "Your IP is banned." + pW : 4530 === e ? "Lobby Timeout" + pW : 4528 === e ?
			"Lobby Kick: Another login detected." + pW : 4540 === e ? "You have been kicked." + pW : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + pW : 4555 === e ? "This Account is blocked." + pW :
			4580 === e ? "More Gold needed" + pW : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + pW : 4591 === e ? "The algo determined you are a bot." + pW : 3290 === e ? "The map could not be loaded." + pW : "Unknown error" + pW
	}

	function mO(e) {
		a5C(e), u.z.a0()
	}

	function a5C(e) {
		4540 === e && b1.z.a5O(e);
		var a55 = ab.a5B();
		bx.close(), 6 === a55 ? b1.z.a5O(e) : bq.fI ? (u.y(), bq.yB(), b1.z.close(b1.z.fJ, 3256)) : 8 === a55 && aE.a5P(!0)
	}
	this.q = [], this.a58 = function(oY, e) {
		if (1 === oY && __fx.customLobby.isActive() && 6 !== ab.a5B() && __fx.customLobby.setActive(!1), console.log("socket close index " + oY + " error " + e), this.q.push(e), 4321 === e && (data = bm.z.a0A(0)) && (console.log("Reset to: " +
				data.pe), bm.rv.q1(105, data.pe), bm.rv.q1(106, data.password)), 8 === u.vl && 0 === oY)
			if (4211 === e) a59(e);
			else {
				if (bq.fI && (4495 === e || 4480 === e) && b1.z.fJ !== oY) return void u.a5A();
				if (8 !== ab.a5B() && a5C(), 4480 === e) return bm.rv.a0H(), void u.v(4, 0, new w(L(52), L(53), !0));
				var data = 0;
				u.a5F() && 10 === u.a5F().a5G && (data = u.a5F().a5G), u.v(4, data, new w(L(50), a5H(e), !0))
			}
		else {
			data = ab.a5B();
			if (6 === data) {
				if (4211 === e) return void a59(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a5I(oY)
			} else if (bq.fI) {
				if (oY !== b1.z.fJ) return
			} else {
				if (8 === data) return void(oY !== b1.z.a5J || aE.lO || 1 !== aE.a3z || aE.hu || aO.a5K(L(51, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}(4591 === e ? function(e) {
				mO(e), u.v(4, 5, new w("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new x("⬅️ " + L(49), function() {
					u.a5A()
				}), new x("🔄 Reload", function() {
					a1.a2.a3()
				}, bE.ql)]))
			} : a5M)(e)
		}
	}, this.a5N = function(e) {
		this.q.push(e), 8 === ab.a5B() ? aE.lO || 1 !== aE.a3z || aO.a5K(L(51, [e])) : a5M(e)
	}, this.t = function() {
		this.q.push(3268), mO(3268)
	}
}

function dF() {
	var a5Q, a5R, a5S = -15e3,
		a5T = !1;

	function hz(e) {
		a5n() || (a5T = !0, a5o(e, 1), b1.z.a5p(b1.z.a5J), a5q(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5c(e) {
		a5S = bi.el, a5o(e, 1), b1.z.a5p(b1.z.a5J), 0 < e.touches.length && (a5Q = Math.floor(i.l * e.touches[0].clientX), a5R = Math.floor(i.l * e.touches[0].clientY), av.a5c(e) || a5q(a5Q, a5R))
	}

	function a5q(fs, fu) {
		u.hz(fs, fu), 0 === aE.a3z ? ab.hz(fs, fu) : bF.a5r(fs, fu) || bh.hz(fs, fu) || aY.hz(fs, fu) || aM.a5s(fs, fu) || aQ.hz(fs, fu) || 0 <= aN.hz(fs, fu) || ax.hz(fs, fu) || bM.a5t(fs, fu) || aM.a5u(fs, fu)
	}

	function a5Y(e) {
		a5n() || (a5T = !0, a5o(e, 1), a5v(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5d(e) {
		a5S = bi.el, a5o(e, 1), 0 < e.touches.length && (a5Q = Math.floor(i.l * e.touches[0].clientX), a5R = Math.floor(i.l * e.touches[0].clientY), av.a5d(e) || a5v(a5Q, a5R))
	}

	function a5v(fs, fu) {
		bM.u5() || (bM.hq = fs, bM.hr = fu), u.a5Y(fs, fu), 0 === aE.a3z ? ab.a5Y(fs, fu) : (bW.hs(fs, fu), bh.a5Y(fs, fu) || (aN.a5Y(fs, fu), aM.iV() ? aM.a5Y(fs, fu) : aS.i0 ? aS.a5Y(fs) && (bi.e2 = !0) : (aW.a5Y(fs, fu), aT.oC && aT.a5Y(fs, fu) &&
			(bi.e2 = !0))))
	}

	function a5a(e) {
		a5n() || (a5o(e, 1), a5w(), 0 === aE.a3z ? (ab.click(-1024, -1024), aU.reset()) : (aW.a5x(-1024, -1024), aN.a5Y(-1024, -1024), aS.a5y(), aT.oC = !1))
	}

	function a5Z(e) {
		a5n() || (a5o(e, 1), a5z(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a5W && (bM.a5W = !1, e.preventDefault()))
	}

	function click(e) {
		a5n() || a5o(e, 1)
	}

	function a5e(e) {
		a5S = bi.el, a5o(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a3z ? aT.oC = !1 : av.a60() || (a5z(a5Q, a5R, !1), bM.a5W && (bM.a5W = !1, e.preventDefault()))
	}

	function a5f(e) {
		a5S = bi.el, a5o(e, 1), a5z(a5Q, a5R, !1), bM.a5W && (bM.a5W = !1, e.preventDefault())
	}

	function a5g(e) {}

	function a5h(e) {}

	function a5i(e) {
		a5n() || a5o(e, 0)
	}

	function a5z(fs, fu, a61) {
		a5w(), 0 === aE.a3z ? ab.click(fs, fu) : (aW.a5x(fs, fu), bh.a5x(), aS.a5y(), aT.oC = !1, aM.click(fs, fu, a61) ? bi.e2 = !0 : aN.a5Z(fs, fu))
	}

	function a5w() {
		u.a5w()
	}

	function a5b(e) {
		var fs, fu, deltaY;
		a5n() || (a5o(e, 1), b1.z.a5p(b1.z.a5J), fs = Math.floor(i.l * e.clientX), fu = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a5b(fs, fu, deltaY), 0 === aE.a3z ? ab.a5b(fs, fu, deltaY) : aW.a5b(fs, fu,
			deltaY) || (aS.a62(fs, fu) ? aS.a5b(deltaY) && (bi.e2 = !0) : aT.a5b(fs, fu, deltaY)))
	}

	function a5j(e) {
		a5o(e, 0)
	}

	function a5o(e, id) {
		0 === id && u.iV() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a5B() && e.preventDefault()
	}

	function a5k(e) {
		if (!(0 < i.vS) && __fx.keybindHandler(e.key)) return;
		a5n() || 0 < i.vS || (e = e.code) && e.length && (ba.ev(e, 18) ? at.a64(3) : ba.ev(e, 22) ? at.a64(0) : ba.ev(e, 20) ? at.a64(1) : ba.ev(e, 24) ? at.a64(2) : ba.ev(e, 10) ? aS.a65(31 / 32) : ba.ev(e, 8) ? aS.a65(32 / 31) : ba.ev(e, 6) ? aS
			.a65(7 / 8) : ba.ev(e, 4) ? aS.a65(8 / 7) : ba.ev(e, 14) ? 0 !== aE.a3z && aT.a5b(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.ev(e, 16) ? 0 !== aE.a3z && aT.a5b(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.ev(e, 0) ?
			aE.a3z && bW.ht(0) : ba.ev(e, 2) ? aE.a3z && bW.ht(1) : ba.ev(e, 30) ? aE.a3z && bW.ht(2) : ba.ev(e, 26) ? aE.a3z && bW.iP() : ba.ev(e, 28) && aE.a3z && bW.iU())
	}

	function a5l(e) {
		if (!a5n() && !(0 < i.vS || bi.el < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a66(1) || "Space" === code && u.a66(0))) return bq.fI ? bq.yM.a66(code) ? void 0 : void("Escape" === code && bM.gE()) : void(8 !== ab.a5B() && ab.a66(e) ? bi.e2 = !0 : "Escape" === code ?
				bM.gE() : ba.ev(code, 18) ? at.a67(3) : ba.ev(code, 22) ? at.a67(0) : ba.ev(code, 20) ? at.a67(1) : ba.ev(code, 24) ? at.a67(2) : ba.ev(code, 12) ? bF.a68(!aE.oA) : "Space" === code && aE.a3z && (aN.hw && aN.a69(), aE.hu) &&
				bF.a6A(!1))
		}
	}

	function a5m() {
		"hidden" !== document.visibilityState && (bi.e2 = !0)
	}

	function a5n() {
		return a5S + 15e3 > bi.el
	}

	function resize() {
		i.a6C()
	}
	this.a5U = 0, this.a5V = "", this.a5W = !1, this.hq = 0, this.hr = 0, this.dv = function() {
		a5X.addEventListener("mousedown", hz, {
			passive: !1
		}), a5X.addEventListener("mousemove", a5Y, {
			passive: !1
		}), a5X.addEventListener("mouseup", a5Z, {
			passive: !1
		}), a5X.addEventListener("click", click, {
			passive: !1
		}), a5X.addEventListener("mouseleave", a5a, {
			passive: !1
		}), a5X.addEventListener("wheel", a5b, {
			passive: !1
		}), a5X.addEventListener("touchstart", a5c, {
			passive: !1
		}), a5X.addEventListener("touchmove", a5d, {
			passive: !1
		}), a5X.addEventListener("touchend", a5e, {
			passive: !1
		}), a5X.addEventListener("touchcancel", a5f, {
			passive: !1
		}), a5X.addEventListener("dragover", a5g), a5X.addEventListener("drop", a5h), a5X.addEventListener("dblclick", a5i), document.addEventListener("contextmenu", a5j), document.addEventListener("keydown", a5k), document.addEventListener(
			"keyup", a5l), document.addEventListener("visibilitychange", a5m), window.addEventListener("resize", resize)
	}, this.a5t = function(fs, fu) {
		return !!bF.hz(fs, fu) || !!(aW.hz(fs, fu) || aT.hz(fs, fu) || aS.hz(fs, fu) || aO.hz(fs, fu))
	}, this.a6B = a5n, this.u5 = function() {
		return !a5T || 0 < a5S
	}, this.gE = function() {
		if (!u.iV()) return 8 === ab.a5B() ? aE.oA ? void bF.a68(!1) : bh.iV ? void bh.a69() : void aN.a69() : void(7 !== ab.a5B() && 6 === ab.a5B() && aa.a6D());
		u.a66(2)
	}
}

function c8() {
	this.tc = new a6E, this.tj = new a6F, this.h7 = new a6G, this.pa = new a6H, this.p4 = new a6I, this.p3 = new a6J, this.canvas = new a6K, this.color = new a6L, this.a6M = new a6N, this.dv = function() {
		this.tc.a0E()
	}
}

function a6F() {
	this.a6O = function(h) {
		h.fill(0)
	}, this.a6P = function(h) {
		for (var fl = h.length, aC = 0; aC < fl; aC++) h[aC] = []
	}, this.a6Q = function(a37, a6R) {
		for (var a38 = bR.gL, aC = 0; aC < 3; aC++) a38[aC] = a6R * a37[aC];
		return a38
	}, this.a6S = function(a37, a38, a6T) {
		for (var kJ = 0, aC = 0; aC < 3; aC++) kJ += Math.abs(a37[aC] - a38[aC]);
		return a6T <= kJ
	}, this.a6U = function(a37, a6V) {
		for (var aC = 0; aC < 3; aC++) a37[aC] = bO.iu(a37[aC] + a6V, 0, 255);
		return a37
	}, this.a6W = function(h, w3, w4) {
		w4 = w4 || h.length - 1;
		for (var a6X = 0, aC = w3 = w3 || 0; aC <= w4; aC++) a6X += h[aC];
		return a6X
	}, this.a6Y = function(h, a6Z) {
		for (var aC, a6a, fl = h.length, a6b = [], g4 = fl - 1; 0 <= g4; g4--) {
			for (aC = a6a = 0; aC < fl; aC++) a6Z(h[aC]) < a6Z(h[a6a]) && (a6a = aC);
			fl--, a6b.push(h[a6a]), h[a6a] = h[fl], h.pop()
		}
		return a6b
	}, this.min = function(h) {
		var aC, gD, fl = h.length;
		if (0 === fl) return 0;
		for (gD = h[0], aC = 1; aC < fl; aC++) gD = Math.min(gD, h[aC]);
		return gD
	}, this.max = function(h) {
		var fl = h.length;
		if (0 === fl) return 0;
		for (var gD = h[0], aC = 1; aC < fl; aC++) gD = Math.max(gD, h[aC]);
		return gD
	}, this.a6c = function(h, gD) {
		for (var fl = h.length, hE = 0, aC = 0; aC < fl; aC++) hE += h[aC] > gD;
		return hE
	}, this.a6d = function(a6e, a6f, min) {
		for (var fl = a6f[0], aC = fl - 1; 0 <= aC; aC--) a6e[aC] < min && (a6e[aC] = a6e[--fl]);
		a6f[0] = fl
	}, this.a6g = function(h, fl, value) {
		for (var aC = 0; aC < fl; aC++) h[aC] -= value
	}, this.a6h = function(h) {
		for (var fl = h.length, aC = 0; aC < fl; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a6i = function(pW, h, a6j) {
		h.fill(0);
		for (var w7 = pW.split(","), fl = Math.min(w7.length, h.length), aC = 0; aC < fl; aC++) h[aC] = Math.min(parseInt(w7[aC]), a6j)
	}, this.a6k = function(pW, h, maxLength) {
		h.fill("");
		for (var w7 = pW.split('"'), fl = Math.min(w7.length, 2 * h.length), ib = 0, aC = 1; aC < fl; aC += 2) h[ib++] = w7[aC].slice(0, maxLength)
	}, this.a6l = function(h, hE) {
		if (0 === hE) h.fill(0);
		else {
			var a6X = this.a6W(h),
				fl = h.length;
			if (0 === a6X) h.fill(bO.gC(hE, fl));
			else
				for (var aC = 0; aC < fl; aC++) h[aC] = bO.gC(hE * h[aC], a6X);
			if (0 === (a6X = this.a6W(h))) h[1] = hE;
			else
				for (var ib = 0; a6X++ < hE;) h[ib = (ib + 1) % fl] && h[ib]++
		}
	}, this.a6m = function(h) {
		if (!h) return 0;
		var fl = h.length;
		if (0 === fl) return 0;
		for (var gD = h[fl - 1], aC = fl - 2; 0 <= aC; aC--)
			if (h[aC] !== gD) return aC + 2;
		return 1
	}, this.a6n = function(h) {
		for (var a6X = 0, aC = 0; aC < h.length; aC++) a6X += h[aC].length;
		return a6X
	}, this.a6o = function(a6p) {
		for (var h = [], aC = 0; aC < a6p.length; aC++) h = h.concat(a6p[aC]);
		return h
	}, this.has = function(h, gD) {
		for (var fl = h.length, aC = 0; aC < fl; aC++)
			if (h[aC] === gD) return !0;
		return !1
	}
}

function a6K() {
	this.a2l = function(a6q, eU, a6r) {
		var ih = a6q.height,
			a6s = bD.tc.a6t(ih, ih),
			io = bD.tc.getContext(a6s);
		return function(j, io, a6r) {
			io.fillStyle = a6r, io.beginPath(), io.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), io.fill()
		}(ih, io, a6r), io.drawImage(a6q, -eU * ih, 0), a6s
	}, this.a6v = function(a6w) {
		var io, ik, ih = a6w.height;
		return a6w.width === ih && (ik = (io = bD.tc.getContext(a6w, !0)).getImageData(0, 0, ih, ih), bD.p3.a6x(ik.data, ih, ih, .9), io.putImageData(ik, 0, 0)), a6w
	}
}

function a6L() {
	this.a6y = function(gD) {
		return [gD >> 12 & 63, gD >> 6 & 63, 63 & gD]
	}, this.a6z = function(gD) {
		for (var h = this.a6y(gD), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a70 = function(gD) {
		gD = this.a6z(gD);
		return bD.color.qG(gD[0], gD[1], gD[2])
	}, this.a71 = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.qG = function(eT, w7, g5) {
		return "rgb(" + eT + "," + w7 + "," + g5 + ")"
	}, this.qI = function(eT, w7, g5, g4) {
		return "rgba(" + eT + "," + w7 + "," + g5 + "," + g4.toFixed(3) + ")"
	}, this.u7 = function(ev) {
		for (var h = ev.split("(")[1].split(","), gK = bR.gK, aC = 0; aC < 3; aC++) gK[aC] = parseInt(h[aC]);
		return 4 === h.length ? gK[3] = 255 * parseFloat(h[3].slice(0, -1)) : gK[3] = 255, gK
	}, this.u8 = function(a72, fo) {
		for (var h = a72.slice(a72.indexOf("(") + 1, a72.indexOf(")")).split(","), gK = bR.gK, aC = 0; aC < 3; aC++) gK[aC] = bO.iu(parseInt(h[aC].trim(), 10) + fo, 0, 255);
		return 3 === h.length ? this.qG(gK[0], gK[1], gK[2]) : (a72 = parseFloat(h[3].trim()), this.qI(gK[0], gK[1], gK[2], a72 = 0 === a72 ? .3 : a72))
	}, this.yp = function(a73, a74) {
		for (var kJ = 0, aC = 0; aC < 3; aC++) kJ += Math.abs(a74[aC] - a73[aC]);
		if (!(240 <= kJ))
			for (aC = 0; aC < 3; aC++) a74[aC] = a73[aC] + (a73[aC] < 128 ? 80 : -80)
	}, this.a75 = function(h) {
		for (var pW = "#", aC = 0; aC < 3; aC++) {
			var eT = h[aC].toString(16);
			pW += 1 === eT.length ? "0" + eT : eT
		}
		return pW
	}, this.a76 = function(pW) {
		var eT, w7;
		return pW.length < 7 ? bE.qF : (eT = parseInt(pW.slice(1, 3), 16), w7 = parseInt(pW.slice(3, 5), 16), pW = parseInt(pW.slice(5, 7), 16), this.qG(eT, w7, pW))
	}
}

function a6I() {
	this.a77 = function(pW, font, maxWidth) {
		if (font && (z9.font = font), z9.measureText(pW).width <= maxWidth) return pW;
		for (var aC = pW.length - 1; 1 <= aC; aC--)
			if (pW = pW.substring(0, aC), z9.measureText(pW + "...").width <= maxWidth) return pW + "...";
		return "..."
	}
}

function a6N() {
	var a79 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a7A = function(el) {
		var a7C, pW = new Date(el.getTime() - 6e4 * el.getTimezoneOffset()).toUTCString();
		return pW.length < 12 || (pW = pW.substring(5, pW.length), 0 === (el = el.getTimezoneOffset())) ? pW : (a7C = (el < 0 ? "+" : "-") + bO.gC(Math.abs(el), 60), 0 == (el = Math.abs(el) % 60) ? pW + a7C : pW + a7C + ":" + (el < 10 ? "0" :
			"") + el)
	}, this.a7D = function(el) {
		var pW = el.toUTCString();
		return pW.length < 12 ? pW : function(el) {
			return a79[el.getUTCDay()]
		}(el) + ", " + pW.substring(5, pW.length - 4)
	}
}

function a6E() {
	var a7F = null,
		a7P = (this.a32 = 0, this.a0E = function() {
			var gD = bm.buffer.data[5].value;
			a7F = "px " + gD, "system-ui" !== gD && (a7F += ", system-ui"), this.a32 = ig(32, 32, ["a", "b", "m"], 200, a7F)
		}, this.a6t = function(j, k) {
			var ev = document.createElement("canvas");
			return ev.width = j, ev.height = k, ev
		}, this.getContext = function(canvas, alpha) {
			return canvas.getContext("2d", {
				alpha: alpha,
				willReadFrequently: !0
			})
		}, this.getImageData = function(p4, j, k) {
			return p4.getImageData(0, 0, j, k)
		}, this.vB = function(type, size) {
			return size = size.toFixed(2), 0 === type ? size + a7F : 1 === type ? "bold " + size + a7F : 2 === type ? "lighter " + size + a7F : 3 === type ? "italic " + size + a7F : 4 === type ? "oblique " + size + a7F : 5 === type ?
				"small-caps " + size + a7F : "small-caps bold " + size + a7F
		}, this.textAlign = function(io, id) {
			io.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
		}, this.textBaseline = function(io, id) {
			io.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
		}, this.tl = function(e, code, color) {
			e.classList.toggle("fx-line", !color), e.classList.toggle("fx-box", !code || 5 === code);
			color = this.tk(bf.vM) + " solid " + (color || bE.qO);
			5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
		}, this.w9 = function(e, fs, fu, j, k) {
			e = e.style;
			e.left = this.wA(fs), e.top = this.wA(fu), e.width = this.wA(j), e.height = this.wA(k)
		}, this.td = function(gD) {
			return 1 + gD * a1.a2.iv()
		}, this.ud = function(oJ, hK) {
			return oJ * this.td(void 0 === hK ? .5 : hK) * i.iw / i.l
		}, this.w8 = function(oJ, hK) {
			return oJ * this.td(void 0 === hK ? .5 : hK) * i.iw
		}, this.vp = function(oJ, hK, a7G) {
			return this.td(hK) * Math.min(oJ * i.iw, a7G * i.j) / i.l
		}, this.tk = function(gD) {
			return gD.toFixed(1) + "px"
		}, this.wA = function(gD) {
			return this.yb(gD).toFixed(1) + "px"
		}, this.yb = function(gD) {
			return gD / i.l
		}, this.a7I = function(a7J) {
			for (var pW = "<ul>", fl = a7J.length, aC = 0; aC < fl; aC++) pW += "<li>" + a7J[aC][0] + ": <a href='" + a7J[aC][1] + "' target='_blank'>" + a7J[aC][0] + "</a></li>";
			return pW += "</ul>"
		}, this.a7K = function(a7L) {
			return "<a href='" + a7L + "' target='_blank'>" + a7L + "</a>"
		}, this.a7M = function(e) {
			navigator.clipboard && navigator.clipboard.writeText(e.value)
		}, this.yn = function(e) {
			var em = e.textContent;
			bD.pa.a7N(em, "✔") || (1 === em.length ? e.textContent = "✔" : e.textContent = em + " ✔", setTimeout(function() {
				e.textContent = em
			}, 500))
		}, this.measureText = function(pW) {
			return z9.measureText(pW).width
		}, this.vz = function(a7O) {
			a7O.style.overflowX = "auto", a7O.style.overflowY = "hidden", a7O.style.whiteSpace = "nowrap", a7O.addEventListener("wheel", function(e) {
				Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.wC = this.scrollLeft, e.preventDefault())
			}), a7O.addEventListener("scroll", function() {
				this.wC = this.scrollLeft
			})
		}, -1e4);

	function a7S(a7R) {
		performance.now() - a7P < 600 || (a7P = performance.now(), a7R())
	}
	this.wo = function(e, a7Q, a7R) {
		a7Q && (e.onclick = function() {
			performance.now() - a7P < 600 || a7Q()
		}), e.addEventListener("contextmenu", function(v7) {
			v7.preventDefault(), a7S(a7R)
		}), e.addEventListener("touchstart", function(v7) {
			2 === v7.touches.length && (v7.preventDefault(), a7S(a7R))
		}, {
			passive: !1
		})
	}
}

function a6G() {
	this.hx = function(a55) {
		return 0 === a55 ? 1 === aE.a3z && aE.iA : 1 === a55 ? 1 === aE.a3z && !aE.iA : 2 === aE.a3z
	}, this.hy = function(player) {
		return 0 !== ah.ng[player] && 2 !== ah.a7T[player]
	}, this.a7U = function(player) {
		return player === aE.fV && 2 !== ah.a7T[player]
	}, this.li = function(player, kD) {
		return player !== kD && (0 === bj.fj[player] || bj.fj[player] !== bj.fj[kD])
	}, this.mp = function() {
		return am.la < 2 ? 0 : aE.ie ? 1 < bk.a7V() : ah.hZ[mf[1]]
	}, this.a7W = function() {
		var la = am.la;
		if (0 !== la) {
			if (!aE.ie) return !this.kR(mf[0]);
			for (var fj = bj.fj, lc = bk.ld(), lf = am.lf, aC = la - 1; 0 <= aC; aC--) {
				var hJ = lf[aC];
				if (fj[hJ] === lc && !this.kR(hJ)) return 1
			}
		}
		return 0
	}, this.a7X = function(player) {
		return player === aE.fV
	}, this.a7Y = function(kD, oJ) {
		return ah.hn[aE.fV] < oJ * ah.hn[kD]
	}, this.kR = function(player) {
		return player >= aE.l4 || 2 === ah.a7T[player]
	}, this.m2 = function(player) {
		return 0 !== ah.ng[player]
	}, this.a3p = function(player) {
		return player < aE.l4
	}, this.su = function(a7Z, a7a) {
		return a7Z !== a7a
	}, this.hA = function(player, gD) {
		var min;
		return gD = this.a7b(player, gD), ah.hn[player] += gD, ah.a7c[player] && (min = Math.min(ah.a7c[player], ah.hn[player]), ah.a7c[player] -= min, ah.hn[player] -= min), gD
	}, this.a7b = function(player, gD) {
		var t8 = ah.hn[player];
		return gD = Math.min(gD, af.a7d(player) - t8), Math.max(gD, 0)
	}, this.nC = function(player, jM, a7e, a7f) {
		var t8 = ah.hn[player],
			jM = bO.gC(t8 * (jM + 1), 1024),
			a7e = bO.gC(a7e * t8, 1024),
			jM = Math.min(jM, t8 - a7e);
		return jM = b5.a7g(player, jM), bR.gI[0] = jM, bR.gI[1] = a7e, a7f <= jM
	}, this.sO = function(player, rz, ry) {
		var player = ah.hn[player],
			t9 = bO.gC(64 * player, 1024);
		return rz = Math.min(rz, player - t9), rz = this.a7b(ry, rz), bR.gI[0] = rz, bR.gI[1] = t9, 1 <= rz
	}, this.a7h = function(player, rz, ry) {
		var player = ah.hn[player],
			t9 = bO.gC(64 * player, 1024);
		return rz = Math.min(rz, player - t9), this.a7b(ry, rz)
	}, this.sQ = function(rz, ry) {
		return rz = this.a7b(ry, rz), bR.gI[0] = rz, bR.gI[1] = 0, 1 <= rz
	}, this.jL = function(player, a7i) {
		return bO.gC(ah.hn[player] * (a7i + 1), 1024)
	}, this.a7j = function(player, a7e) {
		a7e = bO.gC(a7e * ah.hn[player], 1024);
		bR.gI[1] = a7e, ah.hn[player] -= a7e
	}, this.h8 = function(player, a7k) {
		var gW, gY, g5 = ah.hn[player];
		return a7k <= g5 ? ah.hn[player] -= a7k : (ah.hn[player] = 0, gY = ah.a7c[player] + (gW = 5 * ((g5 = a7k - g5) >> 2)), bg.hB(player, gW - g5, 12), gY <= aE.a7l ? ah.a7c[player] = gY : (ah.a7c[player] = aE.a7l, bg.hB(player, gY - aE.a7l,
			18))), a7k
	}, this.mG = function(player, jM) {
		var hn = ah.hn,
			t8 = hn[player],
			jM = bO.gC(t8 * (jM + 1), 1024),
			t9 = Math.max(bO.gC(t8, 10), 1e3);
		return (jM = Math.min(jM, t8 - t9)) < 0 ? (hn[player] = 0, t9 = Math.min(1e3, t8 + aE.a7l - ah.a7c[player]), bR.gI[1] = t9, ah.a7c[player] += t9 - t8, 0) : (bR.gI[1] = t9, jM = b5.a7g(player, jM), hn[player] -= t9 + jM, b5.a7m(player,
			jM), jM)
	}, this.nE = function(player) {
		var iS = bR.gI[0];
		ah.hn[player] -= iS + bR.gI[1], b5.a7m(player, iS)
	}, this.sv = function(player, kD) {
		return (kD = Math.min(kD, aE.fi)) < aE.fi && 0 === ah.ng[kD] && (kD = aE.fi), (bR.fh[0] = kD) === aE.fi || bw.fe(player, kD)
	}, this.sy = function(player, ry) {
		return 0 !== ah.ng[ry] && !bw.fe(player, ry)
	}, this.a7n = function(player, a7o) {
		for (var hJ, fl = am.la, a7p = 0, a7q = mf, aC = 0; aC < fl; aC++)
			if (hJ = a7q[aC], !this.kR(hJ)) {
				if (player === hJ) return !0;
				if (++a7p > a7o) return !1
			} return !1
	}, this.mb = function(hJ) {
		var a7r = aE.ie ? bk.lb() : ah.hZ[mf[0]];
		return a7r >= bO.gC(hJ * aE.ko, 100)
	}, this.a7s = function(gD, min, max) {
		return Math.floor(bO.iu(isNaN(gD) ? 0 : Number(gD), min, max))
	}
}

function a6J() {
	this.a7t = function(canvas, a7u, a7v) {
		var j = canvas.width,
			k = canvas.height,
			ev = bD.tc.a6t(j, k),
			io = bD.tc.getContext(ev, !0),
			canvas = (io.drawImage(canvas, 0, 0), io.getImageData(0, 0, j, k));
		return a7u(canvas.data, j, k, a7v), io.putImageData(canvas, 0, 0), ev
	}, this.a7w = function(a2V, j, k) {
		for (var fs = j - 1; 0 <= fs; fs--)
			for (var fu = k - 1; 0 <= fu; fu--) {
				var aC = 4 * (fs + fu * j);
				a2V[3 + aC] = a2V[aC], a2V[aC] = a2V[1 + aC] = a2V[2 + aC] = 255
			}
	}, this.a7x = function(a2V, j, k) {
		for (var fs = j - 1; 0 <= fs; fs--)
			for (var fu = k - 1; 0 <= fu; fu--) {
				var aC = 4 * (fs + fu * j);
				a2V[1 + aC] > a2V[2 + aC] + 10 && (a2V[3 + aC] = a2V[aC], a2V[1 + aC] = a2V[2 + aC])
			}
	}, this.a7y = function(a2V, j, k) {
		for (var fs = j - 1; 0 <= fs; fs--)
			for (var fu = k - 1; 0 <= fu; fu--) {
				var g4, gD, aC = 4 * (fs + fu * j);
				a2V[1 + aC] > a2V[2 + aC] + 10 && (gD = 0 < (g4 = 255 - a2V[1 + aC] + a2V[2 + aC]) ? Math.min(255, Math.round(255 * a2V[2 + aC] / g4)) : 0, a2V[aC] = a2V[1 + aC] = a2V[2 + aC] = gD, a2V[3 + aC] = g4)
			}
	}, this.a7z = function(a2V, j, k, a7v) {
		for (var gap = Math.floor(Math.min(j, k) * a7v), fs = 0; fs < j; fs++)
			for (var aC, fu = 0; fu < k; fu++)(fs < gap || fu < gap || j - gap <= fs || k - gap <= fu) && (a2V[3 + (aC = 4 * (fs + fu * j))] = 255 - 255 * (a2V[1 + aC] - a2V[aC]) / (255 - a2V[aC]))
	}, this.a80 = function(a2V, j, k, a7v) {
		for (var fs = j - 1; 0 <= fs; fs--)
			for (var fu = k - 1; 0 <= fu; fu--) {
				var aC = 4 * (fs + fu * j);
				a2V[aC] = a7v[0], a2V[1 + aC] = a7v[1], a2V[2 + aC] = a7v[2]
			}
	}, this.a81 = function(a2V, j, k, a7v) {
		for (var gap = Math.floor(j * a7v), fs = 0; fs < j; fs++)
			for (var aC, fu = 0; fu < k; fu++)(fs < gap || fu < gap || j - gap <= fs || k - gap <= fu) && (a2V[aC = 4 * (fs + fu * j)] = a2V[1 + aC] = a2V[2 + aC] = 0)
	}, this.a82 = function(a2V, j, k) {
		for (var fu, aC, fs = j - 1; 0 <= fs; fs--)
			for (fu = k - 1; 0 <= fu; fu--) 200 < a2V[1 + (aC = 4 * (fs + fu * j))] && a2V[1 + aC] - 20 > a2V[aC] && a2V[1 + aC] - 20 > a2V[2 + aC] ? a2V[aC] + a2V[2 + aC] < 40 ? a2V[3 + aC] = 0 : (a2V[3 + aC] = a2V[aC], a2V[aC] = 255, a2V[1 +
				aC] = 255, a2V[2 + aC] = 255) : a2V[aC] < 50 && a2V[1 + aC] < 50 && a2V[2 + aC] < 50 && (a2V[aC] + a2V[1 + aC] + a2V[2 + aC] < 50 ? a2V[3 + aC] = 180 : a2V[3 + aC] = 180 + Math.floor(75 * (a2V[aC] + a2V[1 + aC] + a2V[2 + aC] -
				50) / 100))
	}, this.a83 = function(a2V, j, k) {
		for (var fu, aC, fs = j - 1; 0 <= fs; fs--)
			for (fu = k - 1; 0 <= fu; fu--) a2V[1 + (aC = 4 * (fs + fu * j))] > a2V[aC] + 20 && a2V[1 + aC] > a2V[2 + aC] + 20 && a2V[aC] + a2V[2] < 40 && (a2V[3 + aC] = 255 - a2V[1 + aC], a2V[aC] = a2V[1 + aC] = a2V[2 + aC] = a2V[aC])
	}, this.a6x = function(a2V, j, k, a7v) {
		for (var eT = j >> 1, fs = 0; fs < j; fs++)
			for (var fu = 0; fu < k; fu++) Math.sqrt((fs - eT) * (fs - eT) + (fu - eT) * (fu - eT)) > a7v * eT && (a2V[4 * (fs + fu * j) + 3] = 0)
	}
}

function a6H() {
	var a84 = {
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
		a85 = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.ua = function(ex) {
		return ex.replace(a85, function(match) {
			return a84[match] || match
		})
	}, this.a3I = function(gD) {
		var aC, a86, a87, a88, a89;
		if (gD < 0) return "-" + this.a3I(Math.abs(gD));
		if (gD < 1e3) return gD.toString();
		for (a86 = Math.floor(Math.log(gD + .5) / Math.log(10)) + 1, a87 = Math.floor((a86 - 1) / 3), a89 = (a88 = gD.toString()).substring(a86 - 3, a86), aC = 1; aC < a87; aC++) a89 = a88.substring(a86 - 3 * (aC + 1), a86 - 3 * aC) + " " + a89;
		return a88.substring(0, a86 - 3 * a87) + " " + a89
	}, this.a8A = function(gD) {
		var a8B = ["K", "M", "B"],
			oJ = 1e3;
		if (gD < 1e3) return gD.toString();
		for (var em, aC = 0; aC < 3; aC++) {
			if (gD < 10 * oJ) return em = Math.floor(gD / (oJ / 10)), Math.floor(em / 10) + "." + em % 10 + a8B[aC];
			if (gD < 1e3 * oJ || 2 === aC) return Math.floor(gD / oJ) + a8B[aC];
			oJ *= 1e3
		}
		return ""
	}, this.a8C = function(hJ, a86) {
		return hJ.toFixed(a86) + "%"
	}, this.a8D = function(gD, a8E) {
		return gD.toFixed(bO.iu(Math.floor((void 0 === a8E ? 3 : a8E) - Math.log10(Math.max(gD, 1))), 0, 8))
	}, this.a8F = function(gD, oJ, a86) {
		return (gD * oJ).toFixed(a86)
	}, this.po = function(username) {
		var fp, fa = username.indexOf("[");
		return !(fa < 0) && 1 < (fp = username.indexOf("]")) - fa && fp - fa <= 8 ? username.substring(fa + 1, fp).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.po;
	this.a8G = function(pW) {
		for (var g4 = Math.floor(.5 * pW.length + .5), oP = Math.floor(.5 * (g4 - 1)), aC = 0; aC < oP; aC++)
			for (var g5 = -1; g5 < 2; g5 += 2) {
				var ev = g4 + g5 * aC;
				if (" " === pW[ev]) return [this.a4i(pW.substring(0, ev)), this.a8H(pW.substring(ev))]
			}
		return [pW.substring(0, g4), pW.substring(g4)]
	}, this.a8H = function(pW) {
		for (var fl = pW.length, aC = 0; aC < fl; aC++)
			if (" " !== pW[aC]) return pW.substring(aC);
		return pW
	}, this.a4i = function(pW) {
		for (var aC = pW.length - 1; 0 <= aC; aC--)
			if (" " !== pW[aC]) return pW.substring(0, aC + 1);
		return pW
	}, this.a8I = function(pW, a8J) {
		return pW.split("(")[0] + "(🧈 " + a8J.toFixed(2) + ")"
	}, this.startsWith = function(pW, a8K) {
		return pW.substring(0, a8K.length) === a8K
	}, this.a7N = function(pW, a8K) {
		var fl = pW.length;
		return pW.substring(fl - a8K.length, fl) === a8K
	}, this.a8L = function(h, a8M, a8N) {
		var pW = "",
			fl = h.length - 1;
		a8N = a8N || "";
		for (var aC = 0; aC < fl; aC++) pW += a8N + h[aC] + a8N + ",", (aC + 1) % a8M == 0 && (pW += "\n");
		return pW += a8N + h[fl] + a8N
	}, this.a8O = function(pW, a37, a38) {
		return pW.replace(new RegExp(a37, "g"), a38)
	}
}

function a8P() {
	this.eu = function(player, fX) {
		aJ.a1t(player, bP.ft(fX), bP.fv(fX)) && (bi.e2 = !0), aE.lO && this.eq()
	}, this.eq = function() {
		aE.iA = !1;
		for (var aC = 0; aC < aE.l4; aC++) 0 !== ah.ng[aC] && 0 === ah.hZ[aC] && aJ.a20(aC);
		0 !== ah.ng[aE.fV] ? (bg.nc[7] = ah.hZ[aE.fV], bg.nc[8] = ah.hn[aE.fV], aS.a8Q(), aX.a8R(), aE.hu || aE.hv || aI.o1(ah.jc[aE.fV] - 5, ah.je[aE.fV] - 5, ah.jd[aE.fV] + 5, ah.jf[aE.fV] + 5), aw.dv()) : aY.show(!1, !1, !1, !0), aO.a8S(18),
			ag.a8T(), ag.nS(!0), bS.z.a8U(), aM.ub(), aE.st = null, be.a8V = !0, be.a8W(), aE.lO && a1.a2.setState(1)
	}
}

function cA() {
	this.fi = 512, this.a8X = 15e8, this.a8Y = 1e9, this.a7l = 5e4, this.a8Z = 512, this.h5 = 2, this.fV = 0, this.l4 = 0, this.a42 = 0, this.lQ = 0, this.a41 = 0, this.a14 = 512, this.a19 = 512, this.a8a = 150, this.lO = !0, this.hu = 0, this.hv =
		0, this.a3z = 0, this.ko = 0, this.oA = !1, this.iA = 0, this.a8b = 0, this.ie = !1, this.a1B = 0, this.a1C = 0, this.lM = 0, this.a2R = 0, this.st = null, this.a4J = new a2F, this.a8c = 30, this.a3w = 0, this.a44 = 0, this.a4I = 0, this
		.a3r = 0, this.data = new a8d, this.a8e = new a8f, this.a8g = 0, this.a8h = "", this.a4S = -1, this.a8i = function() {
			this.a4S = -1, bX.turnstile.close(), bR.dv(), bU.dv(), bu.clear(), this.a42 = this.l4 = this.data.humanCount, this.lO = 1 === this.a42 && !__fx.customLobby.isActive(), this.oA = !1, this.hu = this.data.isReplay, this.hv = this.data.a8j,
				this.lM = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a2R = this.data.isContest, this.ie = this.lM < 7 || 9 === this.lM, this.lM = 10 === this.lM &&
				this.lO ? 7 : this.lM, this.lM = 8 === this.lM && 2 !== this.l4 ? 7 : this.lM, b0.dv(), this.a1B = this.data.numberTeams, this.data.teamPlayerCount ? this.a1C = +(0 < this.data.teamPlayerCount[0]) : (this.a1C = 0, this.ie && this
					.lO && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.a1B + 1), aE.a8e.a8k())), this.a8c = this.l4 <= 2 ? 30 : this.l4 <= 50 ? 40 : 50, this.a8b = this.iA = __fx.customLobby.isActive() ?
				__fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.st = this.iA ? new a8P : null, this.a14 = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this
				.l4) : 1 === m.e6 ? this.a14 = this.l4 : this.a14 = this.data.playerCount,
				this.a19 = this.a14, this.lQ = this.a14 - this.l4, this.a41 = 0, this.fV = this.data.selectedPlayer, this.a3w = 0, this.a44 = 0, this.a4I = 0, this.a3r = 0, az.a8l(this.data.spawningSeed), af.dv(), ah.dv(), ao.dv(), aj.a8m(), bB.rp
				.sh = [], bB.iC.rs = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.dv(), this.a3z = 1, bg.dv(), a8n(), ad.dw(), aq.a8o(), be.dv(), ad.dv(), au.dv(),
				bP.dv(), bQ.dv(), ap.dv(), bY.a8p(), aF.dv(), aj.a8(), aJ.dv(), aK.dv(), am.a8q(), bC.dv(), bk.dv(), bS.dv(), bh.dv(), a8r.putImageData(a8s, 0, 0), aW.dv(), aT.dv(), aS.dv(), bF.dv(), ax.dv(), aV.dv(), aX.dv(), aN.dv(), aR.dv(), aO
				.dv(), aQ.dv(), aM.dv(), aY.dv(), aG.dv(), aH.dv(), go(), ae.dv(), ag.dv(), b5.dv(), b6.dv(), b2.dv(), b8.dv(), b9.dv(), this.a4J.dv(), bi.a8p(), aI.o0(), 0 === ah.ng[aE.fV] && aY.show(!1, !0), ag.nS(!0), aw.dv(), bi.e2 = !0, this
				.hu || this.lO && this.iA || a1.a2.setState(1), this.a8g = 0
		}, this.a5P = function(ek) {
			bC.sr.a8u.length ? this.a8h = bC.sr.a8u : this.a8h = bC.a8v.a3T(), this.hu || __fx.replayHistory.save(this.a8h), !1 === __fx.customLobby.isActive() && b1.z.a8w(), bu.clear(), this.a3z = 0, bi.a8x(), a1.a2.setState(0), ab.setState(0), __fx
				.customLobby.isActive() || bX.ec.show(ek), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a8g ? u.z.a8y(0) : 1 === this.a8g ? u.v(19) : u.v(5, 5)
		}, this.a8z = function() {
			return this.hu ? aN.hw || !bF.a90 : this.lO && (aN.hw || this.iA)
		}, this.a91 = function() {
			return 1 === this.a3z && !this.iA
		}
}

function a8d() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.a8j = 0, this.a92 = 0, this.elo = null, this.colorsType = 0, this
		.colorsPersonalized = 1, this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData =
		null, this.spawningType = 0, this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this
		.aIncomeData = null, this.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null,
		this.a93 = null
}

function a8f() {
	this.a8k = function() {
		var a94 = aE.data;
		bD.tj.a6l(a94.teamPlayerCount, a94.playerCount), a94.numberTeams = bD.tj.a6c(a94.teamPlayerCount, 0), a94.teamPlayerCount[0] && a94.teamPlayerCount[7] && (a94.teamPlayerCount[7] = 0, this.a8k())
	}, this.a95 = function() {
		var a94 = aE.data;
		a94.mapType < 2 ? bV.a8(bV.a96(a94), a94.mapSeed) : bV.a97(a94.canvas)
	}, this.a98 = function() {
		var a94 = aE.data;
		a94.colorsData || (a94.colorsData = new Uint32Array(1)), 0 === a94.gameMode && (a94.colorsData[0] = bm.z.a0C()), a94.selectableName && (a94.playerNamesData || (a94.playerNamesData = new Array(1)), a94.playerNamesData[0] = bm.buffer.data[
			122].value), a94.a93 = new Uint32Array(1), a94.a93[0] = bJ.fC.fD(bm.buffer.data[105].value, 5)
	}, this.a99 = function() {
		aE.data = new a8d
	}
}

function dl() {
	var a9A = [];
	this.sR = function(player, ry, a9B, a9C) {
		player === aE.fV || ry === aE.fV || !a9C && bD.h7.kR(player) || bD.h7.kR(ry) || this.a2S(ah.a2T[player] + " supported " + ah.a2T[ry] + " with " + bD.pa.a3I(a9B) + " ressource" + (1 === a9B ? "." : "s."))
	}, this.a2S = function(pW, sG) {
		pW = {
			el: aX.a9E(),
			pW: pW,
			sG: sG
		};
		a9A.push(pW), 30 === u.vl && u.a5F().a2S(pW)
	}, this.clear = function() {
		a9A = [];
		var w7 = u.a9F(30);
		w7 && w7.clear()
	}, this.a9G = function() {
		return a9A
	}
}

function de() {
	this.a2z = 0, this.gap = 0, this.vM = 0, this.th = 0, this.dv = function() {
		this.resize()
	}, this.resize = function() {
		this.a2z = .0022 * bD.tc.td(.5) * i.iw, this.vM = this.a2z / i.l, this.gap = Math.max(Math.floor((a1.a2.iv() ? .0114 : .01296) * i.iw), 2), this.th = this.gap / i.l
	}
}

function dd() {
	this.a9H = function() {
		return a1.a2.iv() ? 2 : 1
	}
}

function cL() {
	var p7, fs, fu, a9I, a9J, a9K, el, a9L, a9M, a9N, a9O, gap, zoom, sa, a9P;

	function a9f(mJ, mK, fP) {
		ad.fg(fP) || -1 === (mJ = bQ.lt.a9o(mJ, mK)) ? aO.a9n(fP) : aO.a9p(mJ)
	}

	function a9Z(a9L) {
		for (var aC = sa.length - 1; 0 <= aC; aC--)
			if (sa[aC] === a9L) return 1
	}

	function a9X(a9U) {
		var aC, fl;
		if (-1 !== a9U)
			for (fl = p7.length, aC = 0; aC < fl; aC++)
				if (p7[aC].iV && p7[aC].fs + 1 === a9U % 4 && p7[aC].fu + 1 === a9U >> 2) return aC;
		return -1
	}

	function a9V(mJ, mK) {
		var w7 = gap / 2;
		return mJ < fs - a9I - 3 * w7 || fs + 3 * a9I + 5 * w7 < mJ || mK < fu - a9I - 3 * w7 || fu + 2 * a9I + 3 * w7 < mK ? -1 : 4 * (mK < fu - w7 ? 0 : mK < fu + a9I + w7 ? 1 : 2) + (mJ < fs - w7 ? 0 : mJ < fs + a9I + w7 ? 1 : mJ < fs + 2 * a9I +
			3 * w7 ? 2 : 3)
	}
	this.a9Q = function() {
		var aC, g5, a9T = [bE.qo, bE.r4, bE.qM, bE.rW, bE.rH];
		for (p7 = new Array(10), aC = 0; aC < 10; aC++) p7[aC] = {
			id: aC,
			iV: !1,
			m1: 0,
			canvas: [],
			fs: 0,
			fu: 0
		};
		for (p7[0].colors = [0, 1, 2, 3], p7[0].fs = 0, p7[0].fu = 0, p7[1].colors = [1, 4], p7[1].fs = 1, p7[1].fu = 0, p7[2].colors = [0, 1], p7[2].fs = -1, p7[2].fu = 0, p7[3].colors = [0], p7[3].fs = 0, p7[3].fu = 0, p7[4].colors = [0, 2],
			p7[4].fs = 1, p7[4].fu = 1, p7[5].colors = [3], p7[5].fs = 0, p7[5].fu = -1, p7[6].id = 20, p7[6].colors = [0], p7[6].fs = 1, p7[6].fu = -1, p7[7].id = 21, p7[7].colors = [0], p7[7].fs = 0, p7[7].fu = 1, p7[8].id = 16, p7[8]
			.colors = [0], p7[8].fs = 0, p7[8].fu = 0, p7[9].id = 10, p7[9].colors = [4], p7[9].fs = 2, p7[9].fu = 0, aC = 0; aC < 10; aC++)
			for (g5 = 0; g5 < p7[aC].colors.length; g5++) p7[aC].canvas.push(function(id, a6r) {
				if (id < 20) return bD.canvas.a2l(ac.get(3), id, a6r);
				var a6r = ac.get(3).height,
					a6s = bD.tc.a6t(a6r, a6r),
					io = bD.tc.getContext(a6s);
				20 === id ? io.drawImage(ac.get(18), 0, 0) : 21 === id && ak.a2V.a30(ak.ps.a2p + ak.ps.a36, io, 0, 0, a6r);
				return a6s
			}(p7[aC].id, a9T[p7[aC].colors[g5]]))
	}, this.a9S = function() {
		return p7
	}, this.dv = function() {
		sa = [], fs = fu = el = 0, a9J = a9K = -1e3, this.resize()
	}, this.resize = function() {
		a9I = Math.floor((a1.a2.iv() ? .075 : .0468) * i.iw), zoom = a9I / ac.get(3).height, gap = Math.floor(a9I / 3)
	}, this.a5s = function(mJ, mK) {
		return !!this.iV() && (bi.e2 = !0, !!ak.a2V.hz(mJ, mK, a9M) || (mJ = function(mJ, mK) {
			a9K = a9J = -1e3;
			var a9W = a9X(a9V(mJ, mK));
			if (-1 === a9W) return 0;
			if (1 !== p7[a9W].colors[p7[a9W].m1])
				if (5 === a9W) {
					if (! function() {
							var em = performance.now();
							a9P + 4e3 < em && (sa = []);
							a9P = em
						}(), a9Z(a9L)) return 1;
					sa.push(a9L), 16 < sa.length && sa.shift()
				} else if (6 === a9W) {
				for (var aC = sa.length - 1; 0 <= aC; aC--) 0 === ah.ng[sa[aC]] && sa.splice(aC, 1);
				0 < sa.length && (b6.a9a(1, sa, !0) && bB.h7.sZ(sa, a9L), sa = [])
			} else if (2 === a9W) ao.a9b(a9L) && bB.iC.rx(aS.iG(), a9L);
			else if (3 === a9W) aE.iA && bB.iC.iD(a9N);
			else if (0 === a9W)
				if (0 === p7[0].m1) {
					if (aE.a8b && aX.a9E() < 350) return 1;
					bY.a9c(4), bB.iC.iJ(aS.iG(), a9L)
				} else b2.iK(a9L, aS.iG());
			else if (1 === a9W) bB.iC.iO(aS.iG(), a9N);
			else if (9 === a9W) bB.iC.s3(aS.iG());
			else {
				if (7 === a9W) return bY.a9c(0), ak.a2V.show(mJ, mK), 2;
				if (4 === a9W) b6.a9a(0, [a9L], !0) && bB.h7.sW(a9L);
				else {
					if (8 !== a9W) return 0;
					bB.iC.iF(aS.iG(), a9O, a9L)
				}
			}
			return 1
		}(mJ, mK), this.ub(), 2 === mJ && (ak.a2V.iV = !0), 0 < mJ))
	}, this.a5u = function(mJ, mK) {
		this.iV() || (a9J = mJ, a9K = mK, el = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.i2(mouseX),
			coordY = bP.i4(mouseY),
			point = bP.fb(bP.g8(coordX, coordY));
		bP.i5(coordX, coordY) && a9f(mouseX, mouseY, point)
	}, this.click = function(mJ, mK, a61) {
		var i1 = bP.i2(mJ),
			i3 = bP.i4(mK),
			fX = bP.g8(i1, i3),
			fP = bP.fb(fX),
			a9d = (a1.a2.iv() ? .025 : .0144) * i.iw,
			em = performance.now();
		return !(Math.abs(mJ - a9J) > a9d || Math.abs(mK - a9K) > a9d || el + 500 < em || (el = em, bM.u5() && (bM.hq = mJ, bM.hr = mK, b8.eq(1), b9.eq(1)), !bP.i5(i1, i3))) && (!(aN.hw || this.iV() || !bQ.a9e.click(mJ, mK, fX, a61)) || (a61 ? (
			a9f(mJ, mK, fP), !1) : aN.hw || this.iV() || !bD.h7.hy(aE.fV) || aE.hu || aE.hv ? (this.ub(), !1) : (aE.iA ? 0 <= (a9N = bv.iB(fX)) && (p7[3].iV = !0) : 2 === aE.a3z ? ad.hL(fP) && (a9L = ad.fd(fP), bD.h7.kR(a9L) || (p7[0]
			.iV = !0, p7[0].m1 = 1, p7[7].iV = !0)) : (bQ.iM.iN(aE.fV, fX) && (p7[0].iV = !0, p7[0].m1 = 1, p7[1].iV = !0, p7[1].m1 = 1, a9N = bR.gN[7]), ad.fq(fP) ? (a9O = an.fM.fO(fP)) && (a9d = bP.fb(a9O), p7[8].iV = !0, a9L =
			ad.fc(a9d) ? aE.fi : ad.fd(a9d)) : (ad.a1y(aE.fV, fP) && (a9M = aE.fV, p7[0].iV = !0, p7[0].m1 = 1, p7[7].iV = !0), -1 !== (em = bv.iH(fX)) && (ad.fc(em << 2) ? (a9L = aE.fi, bw.iI(aE.fV) ? (p7[0].iV = !0, p7[0]
			.m1 = 0) : ae.gs(aE.fV) && (p7[0].iV = !0, p7[0].m1 = 3)) : (a9L = ad.fd(em << 2), p7[0].m1 = 1, p7[5].iV = function(a9L) {
			return !bD.h7.kR(a9L) && !a9Z(a9L) && b6.a9a(1, [a9L], !1)
		}(a9L), p7[7].iV || bD.h7.kR(a9L) || (a9M = a9L, p7[7].iV = !0), p7[4].iV = !bD.h7.kR(a9L) && !ag.a9j(a9L) && b6.a9a(0, [a9L], !1), p7[6].iV = function(a9L) {
			if (0 === sa.length) return !1;
			if (performance.now() > a9P + 4e3) return !(sa = []);
			return !a9Z(a9L) && ! function(a9L) {
				var aC;
				if (aE.ie)
					for (aC = sa.length - 1; 0 <= aC; aC--)
						if (!bw.fe(a9L, sa[aC])) return 1;
				return
			}(a9L)
		}(a9L), bw.fe(a9L, aE.fV) ? (bw.iL(aE.fV, a9L) ? (p7[0].m1 = 0, p7[0].iV = !0) : ae.gs(aE.fV) && (p7[0].m1 = 3, p7[0].iV = !0), p7[0].iV = this.a9l()) : (p7[2].iV = !0, ao.a9b(a9L) ? p7[2].m1 = 0 : p7[2]
			.m1 = 1, p7[0].iV = !0))))), this.a9g(mJ, mK))))
	}, this.a9g = function(mJ, mK) {
		return fs = mJ - Math.floor(a9I / 2), fu = mK - Math.floor(a9I / 2), !!this.iV()
	}, this.a5Y = function(mJ, mK) {
		return !!this.iV() && (ak.a2V.iV ? !ak.a2V.a2y(mJ, mK) && (ak.a2V.iV = !1, bi.e2 = !0) : function(uv, mJ, mK) {
			mJ = a9V(mJ, mK);
			if (0 <= a9X(mJ)) return !1;
			if ((1 === mJ || 6 === mJ) && 0 <= a9X(2)) return !1;
			if ((6 === mJ || 9 === mJ) && 0 <= a9X(10)) return !1;
			return uv.ub(), bi.e2 = !0
		}(this, mJ, mK))
	}, this.ub = function() {
		for (var aC = p7.length - 1; 0 <= aC; aC--) p7[aC].iV = !1, p7[aC].m1 = 0;
		ak.a2V.iV = !1
	}, this.iV = function() {
		return this.a9l() || ak.a2V.iV
	}, this.a9l = function() {
		for (var fl = p7.length, aC = 0; aC < fl; aC++)
			if (p7[aC].iV) return !0;
		return !1
	}, this.z8 = function() {
		if (this.iV())
			if (ak.a2V.iV) ak.a2V.z8();
			else {
				var aC, io = z9,
					g5 = p7,
					fl = g5.length,
					a9t = (a9I + gap) / zoom;
				for (io.imageSmoothingEnabled = !0, io.setTransform(zoom, 0, 0, zoom, fs, fu), aC = 0; aC < fl; aC++) g5[aC].iV && z9.drawImage(g5[aC].canvas[g5[aC].m1], g5[aC].fs * a9t, g5[aC].fu * a9t);
				io.imageSmoothingEnabled = !1, io.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cM() {
	var k, canvas, a9u, a9v, a9w, a9x = -1;

	function a9y() {
		var a9z, p4 = canvas.getContext("2d", {
			alpha: !0
		});
		p4.clearRect(0, 0, k, k), p4.fillStyle = bE.qK, p4.fillRect(0, 0, k, k), 9 === a9v && (p4.fillStyle = bE.qP, p4.fillRect(0, 0, k, k)), p4.fillStyle = bE.qO, __fx.utils.smoothFrame(p4, k, k) || (p4.fillRect(0, 0, k, 1), p4.fillRect(0, 0, 1,
			k), p4.fillRect(0, k - 1, k, 1), p4.fillRect(k - 1, 0, 1, k)), a9z = .9 * k / ac.get(0).width, p4.imageSmoothingEnabled = !0, p4.setTransform(a9z, 0, 0, a9z, Math.floor((k - a9z * ac.get(0).width) / 2), Math.floor((k - a9z * ac.get(0)
			.height) / 2)), p4.drawImage(ac.get(0), 0, 0), p4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aA2(mJ, mK) {
		if (!aN.hw) return mJ <= k + bf.gap && mK >= aS.fu ? 9 : -1;
		if (mJ <= 4 * k + bf.gap) {
			if (mK >= aS.fu) return 0;
			if (mK >= aS.fu - k - a9w * bf.gap) return 2
		} else if (mJ <= 7 * k + bf.gap && mK >= aS.fu - k - a9w * bf.gap) return 1;
		return -1
	}
	this.hw = !1, this.dv = function() {
		a9v = -1, this.hw = !1, a9w = a1.a2.iv() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, a9u = bD.tc.vB(1, (a1.a2.iv() ? .5 : .45) * k), a9y()
	}, this.aA0 = function() {
		return !(1 !== aE.a3z || aE.iA || (aE.hu ? !bF.a90 : this.hw && aE.lO))
	}, this.a69 = function() {
		this.hw = !this.hw, this.hw ? (bF.a68(!1), aE.hu && bF.a90 && bF.a6A(!0), this.aA1(), 9 === a9v && (a9v = 0)) : (a9v = -1, a9y(), !aE.lO || 1 !== aE.a3z || aE.iA || aE.hu || a1.a2.setState(1)), bi.e2 = !0
	}, this.aA1 = function() {
		(aE.lO || aE.hu) && 1 === aE.a3z && (aW.nS(!0), aE.iA || setTimeout(function() {
			be.a4B()
		}, 0), a1.a2.setState(0))
	}, this.hz = function(mJ, mK) {
		return 0 <= (a9x = aA2(mJ, mK)) || !aN.hw || aE.lO || aE.hu || bh.iV || aN.a69(), a9x
	}, this.a5Y = function(mJ, mK) {
		mJ = aA2(mJ, mK);
		mJ !== a9v && (a9v = mJ, this.hw || a9y(), bi.e2 = !0)
	}, this.a5Z = function(mJ, mK) {
		mJ = aA2(mJ, mK);
		return -1 !== mJ && a9x === mJ && (this.hw ? aE.oA ? (0 <= mJ && bF.a68(!1), !aE.hu) : (0 === mJ ? aE.a5P() : 1 === mJ ? this.a69() : 2 === mJ && u.v(1, 0), !0) : 9 === mJ && (this.a69(), !0))
	}, this.z8 = function() {
		var aC, fxSmooth;
		this.hw ? (function() {
			var j = Math.floor(5.5 * k),
				fxSmooth = (z9.setTransform(1, 0, 0, 1, bf.gap, aS.fu), __fx.utils.clipRounded(z9, 0, 0, j, k));
			z9.fillStyle = bE.qK, z9.fillRect(0, 0, j, k), 0 === a9v ? (z9.fillStyle = bE.qP, z9.fillRect(0, 0, 4 * k, k)) : 1 === a9v && (z9.fillStyle = bE.qP, z9.fillRect(4 * k, 0, Math.floor(1.5 * k), k));
			fxSmooth && (z9.restore(), __fx.utils.strokeRounded(z9, 0, 0, j, k), z9.fillStyle = __fx.utils.lineColor(bE.qO), z9.fillRect(4 * k, 0, 1, k));
			z9.fillStyle = bE.qO, fxSmooth || (z9.fillRect(0, 0, j, 1), z9.fillRect(0, 0, 1, k), z9.fillRect(4 * k, 0, 1, k), z9.fillRect(0, k - 1, j, 1), z9.fillRect(j - 1, 0, 1, k));
			z9.font = a9u, bD.tc.textBaseline(z9, 1), bD.tc.textAlign(z9, 1), z9.fillText(L(54), 2 * k, .54 * k), fxSmooth = .4 * k, aN.aA6(bf.gap + 4 * k + (1.5 * k - fxSmooth) / 2, aS.fu + .3 * k, fxSmooth)
		}(), aC = 1, z9.setTransform(1, 0, 0, 1, bf.gap, aS.fu - aC * a9w * bf.gap - aC * k), fxSmooth = __fx.utils.clipRounded(z9, 0, 0, 4 * k, k), z9.fillStyle = bE.qK, z9.fillRect(0, 0, 4 * k, k), a9v === aC + 1 && (z9.fillStyle = bE
			.qP, z9.fillRect(0, 0, 4 * k, k)), fxSmooth && (z9.restore(), __fx.utils.strokeRounded(z9, 0, 0, 4 * k, k)), z9.fillStyle = bE.qO, fxSmooth || (z9.fillRect(0, 0, 4 * k, 1), z9.fillRect(0, 0, 1, k), z9.fillRect(4 * k, 0, 1, k),
			z9.fillRect(0, k - 1, 4 * k, 1)), z9.fillText(L(0 === aC ? 54 : 55), 2 * k, .54 * k), z9.setTransform(1, 0, 0, 1, 0, 0)) : z9.drawImage(canvas, bf.gap, aS.fu)
	}, this.tF = function(player) {
		return 0 !== ah.ng[player] && 2 !== aE.a3z && !bD.h7.kR(player)
	}, this.aA6 = function(fs, fu, fl) {
		z9.setTransform(1, 0, 0, 1, fs, fu), z9.lineWidth = bf.a2z, z9.strokeStyle = bE.qO, z9.beginPath(), z9.moveTo(0, 0), z9.lineTo(fl, fl), z9.moveTo(0, fl), z9.lineTo(fl, 0), z9.stroke()
	}
}

function cN() {
	var aA8, k, aA9, aAA, aAB, aAC, aAD, aAE, aAF;

	function a26() {
		return aS.aAY(aO.aAU()) ? ax.iV ? __fx.settings.keybindButtons ? aS.fu - 2 * aS.k - 3 * aA9 : aS.fu - aS.k - 2 * aA9 : __fx.settings.keybindButtons ? aS.fu - aS.k - 2 * aA9 : aS.fu - aA9 : bF.aAY(aO.aAX()) ? ax.iV ? bF.a26() - aS.k - 2 *
			aA9 : bF.a26() - aA9 : ax.iV ? i.k - aS.k - (bn.a9H() + 1) * aA9 : i.k - bn.a9H() * bf.gap
	}

	function aAK(em, pW, id, hJ, aAO, aAP, lh, aAQ, aAR, aAS, aAd) {
		var aC, p4, a6s, q5, aAe = void 0 !== aAR,
			j = Math.floor(aR.measureText(pW, aO.a9u) + 1.5 * aAA + (aAe ? k : 1.5 * aAA));
		if (bi.e2 = !0, aAd || bu.a2S(pW, aAR), j + 2 * aA9 + aS.k > i.j && !aAe && 50 !== id && 20 < pW.length) aAK(em, (aAd = bD.pa.a8G(pW))[0], id, hJ, aAO, aAP, lh, aAQ, aAR, aAS, !0), aAK(em, aAd[1], id, hJ, aAO, aAP, lh, aAQ, aAR, aAS, !0);
		else if (aAd = j + (50 === id ? aAB : 0), (a6s = document.createElement("canvas")).width = j, a6s.height = k, (p4 = a6s.getContext("2d", {
				alpha: !0
			})).font = aO.a9u, bD.tc.textBaseline(p4, 1), bD.tc.textAlign(p4, 0), p4.clearRect(0, 0, j, k), p4.fillStyle = aAP, p4.fillRect(0, 0, j, k), __fx.utils.smoothFrame(p4, j, k, 0), p4.fillStyle = aAO, p4.fillText(pW, Math.floor(1.5 * aAA),
				Math.floor(k / 2)), aAe && (p4.imageSmoothingEnabled = !0, ak.a2V.a30(aAR, p4, j - k, 0, k)), 0 === (q5 = {
				el: em,
				pW: pW,
				id: id,
				player: hJ,
				canvas: a6s,
				aAO: aAO,
				aAP: aAP,
				j: j,
				aAV: aAd,
				lh: lh,
				aAQ: aAQ,
				aAR: aAR,
				aAS: aAS
			}).el || 0 < aA8.length && 0 < aA8[0].el) aA8.unshift(q5);
		else {
			for (aC = 1; aC < aA8.length; aC++)
				if (0 < aA8[aC].el) return void aA8.splice(aC, 0, q5);
			aA8.push(q5)
		}
	}

	function aAL(eT, w7, g5) {
		return "rgb(" + eT + "," + w7 + "," + g5 + ")"
	}

	function aAf(id, hE) {
		for (var fl = aA8.length, aC = 0; aC < fl; aC++) aA8[aC].id === id && hE-- <= 0 && (aA8.splice(aC, 1), aC--, fl--)
	}

	function aAg(id, player) {
		for (var fz = !1, aC = aA8.length - 1; 0 <= aC; aC--) aA8[aC].id !== id || player !== aE.fi && aA8[aC].player !== player || (aA8.splice(aC, 1), fz = !0);
		return fz
	}

	function aB6(pW) {
		aAK(340, pW, 6, 0, aAL(215, 245, 255), bE.qL, -1, !1)
	}
	this.aAG = "", this.dv = function() {
		var self;
		aAE = 0, aAD = a1.a2.iv() ? 7 : 12, aAC = {
				xE: [0, 0, 0],
				aAH: [0, 0, 0],
				ny: [220, 180, 180],
				z7: [0, 0, 0],
				ev: [0, 0, 0]
			}, aA8 = [], this.resize(), aE.iA && this.a4D(0, 18), bV.xV.aB5[bV.fR].name.length && aB6(L(100, [bV.xV.aB5[bV.fR].name])), bV.xV.aB5[bV.fR].aB7 && aB6(L(101, [bV.xV.aB5[bV.fR].aB7])), aB6(L(102, [bV.fw - 2 + "x" + (bV.fx - 2)])),
			aB6(L(103, [bD.pa.a3I(aq.aB8)])), aq.aB8 !== aq.aB9 && aB6(L(104, [bD.pa.a3I(aq.aB9) + " (" + bD.pa.a8C(100 * aq.aB9 / aq.aB8, 1) + ")"])), 0 < aq.aBA && aB6(L(80, [bD.pa.a3I(aq.aBA) + " (" + bD.pa.a8C(100 * aq.aBA / aq.aB8, 1) +
				")"])), 0 < aq.aBB && aB6(L(105, [bD.pa.a3I(aq.aBB) + " (" + bD.pa.a8C(100 * aq.aBB / aq.aB8, 1) + ")"])), 10 === aE.lM && aAK(120, L(106), 6, 0, aAL(235, 255, 120), bE.qL, -1, !1), 0 !== (self = this).aAG.length && (aAK(200, self
				.aAG, 0, 0, bE.qO, bE.qL, -1, !1), self.aAG = ""), aE.a2R && aAK(340, L(56), 6, 0, aAL(255, 200, 0), bE.qL, -1, !1), (self = aE.data.a92) && aAK(340, 1 === self ? L(58) : L(59, [self]), 10, 0, bE.qO, bE.qL, -1, !1)
	}, this.resize = function() {
		var aAN, aC;
		if (k = (k = Math.floor((a1.a2.iv() ? .031 : .0249) * i.iw)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.a9u = bD.tc.vB(1, this.fontSize), aA9 = bf.gap, aAA = Math.floor(k / 5), 0 < aA8.length)
			for (aAN = aA8, aA8 = [], aC = aAN.length - 1; 0 <= aC; aC--) aAK(aAN[aC].el, aAN[aC].pW, aAN[aC].id, aAN[aC].player, aAN[aC].aAO, aAN[aC].aAP, aAN[aC].lh, aAN[aC].aAQ, aAN[aC].aAR, aAN[aC].aAS, !0);
		this.aAT()
	}, this.aAT = function() {
		aAF = document.createElement("canvas");
		var pW = L(57),
			p4 = (aAB = aR.measureText(pW, this.a9u) + 5 * aAA, aAF.height = k, aAF.width = aAB, aAF.getContext("2d", {
				alpha: !0
			}));
		p4.font = this.a9u, bD.tc.textBaseline(p4, 1), bD.tc.textAlign(p4, 1), p4.clearRect(0, 0, aAB, k), p4.fillStyle = bE.ql, p4.fillRect(0, 0, aAB, k), p4.fillStyle = bE.qO, p4.fillText(pW, Math.floor(aAB / 2), Math.floor(k / 2))
	}, this.aAU = function() {
		var fl;
		return ax.iV ? ax.j : 0 === (fl = aA8.length) ? 0 : 1 === fl ? aA8[0].aAV : aAW(aA8[0].aAV, aA8[1].aAV)
	}, this.aAX = function() {
		var fl = aA8.length;
		return ax.iV ? fl ? aAW(ax.j, aA8[0].aAV) : ax.j : 0 === fl ? 0 : 1 === fl ? aA8[0].aAV : 2 === fl ? aAW(aA8[0].aAV, aA8[1].aAV) : aAW(aAW(aA8[0].aAV, aA8[1].aAV), aA8[2].aAV)
	}, this.hz = function(fs, fu) {
		for (var o7, aAZ, aAa = a26(), aC = aA8.length - 1; 0 <= aC; aC--)
			if ((aAZ = aAa - (aC + 1) * k) <= fu && fu < aAZ + k) return 50 === aA8[aC].id ? fs >= i.j - aAB - aA9 - aA8[aC].j && (fs >= i.j - aAB - aA9 ? bB.h7.sW(aA8[aC].player) : aI.o2(aA8[aC].player, 800, !1, 0), !0) : fs >= i.j - aA8[aC].j -
				aA9 && (736 === aA8[aC].id ? (aAZ = "https://" + aA8[aC].pW, window.open(aAZ, "_blank"), aT.oC = !1) : aA8[aC].aAQ && (aA8[aC].aAS && aA8[aC].aAS.g4 ? (aAZ = aA8[aC].aAS.fX, o7 = bP.ft(aAZ) - 10, aAZ = bP.fv(aAZ) - 10, aI.o1(
					o7, aAZ, 19 + o7, 19 + aAZ)) : aA8[aC].aAS && aA8[aC].aAS.g5 ? aI.o3(aA8[aC].player, aA8[aC].aAS.o4) : (aI.o2(aA8[aC].player, 800, !1, 0), 0 <= aA8[aC].lh && (o7 = aA8[aC].lh, aA8[aC].lh = aA8[aC].player, aA8[aC]
					.player = o7))), !0);
		return !1
	}, this.a2S = function(em, pW, id, hJ, aAO, aAP, lh, aAQ, aAR, aAS) {
		aAK(em, pW, id, hJ, aAO, aAP, lh, aAQ, aAR, aAS)
	}, this.aAc = function(s) {
		aAK(300, s, 252, 0, bE.qO, bE.qL, -1, !1)
	}, this.a8S = function(id) {
		for (var aC = aA8.length - 1; 0 <= aC; aC--) aA8[aC].id === id && (aA8[aC].el = 1)
	}, this.a4D = function(player, id) {
		0 === id ? (aR.eu(player, 0), aAf(423, 2), aAK(160, L(60, [ah.a2T[player]]), 423, player, "rgb(10,220,10)", bE.qL, -1, !1)) : 1 === id ? (aAg(50, aE.fi), aR.eu(player, 1), aAK(360, L(61, [ah.a2T[player]]), 0, player, bE.r6, bE.qL, -1, !
				0), aI.o2(player, 2700, !1, 0)) : 2 === id ? (aR.eu(player, 2), aAK(0, L(62), 0, player, "rgb(10,255,255)", bE.qL, -1, !0), aI.o2(player, 2700, !1, 0)) : 3 === id ? (aR.eu(player, 2), aAK(0, L(63, [ah.a2T[player]]), 0, player, bE
				.qO, bE.qL, -1, !0), aI.o2(player, 2700, !1, 0)) : 4 === id ? this.aAh(1, player, player) : 5 === id ? bD.h7.kR(aE.fV) || (function(id, nb) {
				var aC, aAu = 0,
					fl = aA8.length;
				for (aC = 0; aC < fl; aC++)
					if (aA8[aC].id === id && nb <= ++aAu) return aA8.splice(aC, 1)
			}(1, 5), ag.aAj(player) && aAK(180, L(64, [ah.a2T[player]]), 1, player, aAL(255, 200, 180), bE.qL, -1, !0), bD.h7.a7Y(player, 10) && (aAf(573, 0), aAK(180, L(65, [ah.a2T[player]]), 573, player, bE.r6, bE.qL, -1, !0))) : 18 === id ?
			aAK(255, L(66), 18, 0, bE.qO, bE.qL, -1, !1) : 21 === id ? aAK(220, L(67), id, 0, bE.qO, bE.qL, -1, !1) : 22 === id ? this.aAh(2, player, player) : 59 === id && aAK(0, L(68), id, 0, bE.rV, bE.qL, 0, !1)
	}, this.a5K = function(s) {
		aAK(200, L(69, [s]), 94, 0, bE.qO, bE.r2, -1, !1)
	}, this.a4P = function(aAk) {
		if (aE.fV === aAk && !aE.lO && !aE.hu && !aE.hv)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aAK(0, "Your Win Count is now " + __fx.wins.count, 3, aAk, bE.qO, bE.qL, -1, !0);
		ah.hZ[aAk] && (aR.eu(aAk, 2), aE.l4 < 100 ? aAK(0, L(63, [ah.a2T[aAk]]), 3, aAk, bE.qO, bE.qL, -1, !0) : aAK(0, L(70, [ah.a2T[aAk]]), 3, aAk, bE.qO, bE.qL, -1, !0))
	}, this.a9n = function(fP) {
		var pW, aAn, aAl = "(" + bP.ft(fP >> 2) + ", " + bP.fv(fP >> 2) + ")",
			aAQ = !1,
			player = 0;
		ad.fg(fP) ? ad.fc(fP) ? aAl = L(71, [aAl]) : (player = ad.fd(fP), (aE.hu || aE.hv) && !1 === __fx.hoveringTooltip.active && player !== aE.fV && (aE.fV = player, bg.aAm()), pW = L(72, [bD.p4.a77(ah.a4j[player], bD.tc.vB(0, 10), 150)]) +
			"   ", pW = (pW += L(73, [bD.pa.a3I(ah.hn[player])]) + "   ") + L(74, [bD.pa.a3I(ah.hZ[player])]) + "   ", aE.ie && (aAn = bj.a4M[bj.lR[bj.fj[player]]], pW += L(75) + ": " + aAn + "   "), bD.h7.kR(player) && (pW += L(76) + ": " +
				aF.lF[aF.iS[player]] + "   "), aAl = pW = (pW += L(77, [player]) + "   ") + L(78, [aAl]), aAQ = !0) : aAl = ad.fq(fP) ? L(79, [aAl]) + "   #" + ad.fT(fP) : L(80, [aAl]), aAf(55, 0), aAK(220, aAl, 55, player, bE.qO, bE.qL, -1,
			aAQ, void 0, void 0, !0)
	}, this.a9p = function(aAo) {
		var lz = bQ.z,
			player = lz.my[aAo] >> 3,
			pW = (bi.e2 = !0, aAf(55, 0), L(81, [ah.a2T[player]]) + "   ");
		aAK(220, pW += L(73, [bD.pa.a3I(lz.aAp[aAo])]), 55, player, bE.qO, bE.qL, -1, !0), bQ.aAq.aAr(aAo)
	}, this.sF = function(rt, aAs, sG) {
		rt === aE.fV ? aAK(175, " " + L(82, [ah.a2T[aAs]]) + ": ", 1001, aAs, aAL(200, 255, 210), bE.qL, -1, !0, sG) : this.aAt(rt, sG)
	}, this.aAt = function(rt, sG) {
		aAf(1e3, 0), aAK(175, ah.a2T[rt] + ": ", 1e3, rt, bE.qO, "rgba(5,60,25,0.9)", -1, !0, sG)
	}, this.a4O = function() {
		var s;
		aE.a44 ? (s = L(83), aR.a4N(L(84), 2, 1, 12), aAK(0, s, 40, 0, "rgb(10,220,10)", bE.qL, -1, !1)) : (s = L(85), aR.a4N(L(86), 2, 0, 16), aAK(0, s, 41, 0, bE.qO, bE.qL, -1, !1))
	}, this.a2G = function() {
		var hE = ah.a2T,
			fo = aE.data;
		aAK(300, hE[0] + " [" + aE.a4J.a2M(fo.elo[0]) + "] vs " + hE[1] + " [" + aE.a4J.a2M(fo.elo[1]) + "]", 65, 0, bE.qF, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aAv = function(s) {
		aAK(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aAw = function(aAx) {
		aAK(0, L(aAx ? 87 : 88), 247, 0, bE.rU, bE.qL, -1, !1)
	}, this.a2O = function(a2L, a2N, aAy) {
		var fo = aE.data,
			hE = ah.a2T;
		aAK(0, hE[0] + ": " + aE.a4J.a2M(fo.elo[0]) + " -> " + a2L, 66, 0, bE.qO, aAy[0], -1, !1), aAK(0, hE[1] + ": " + aE.a4J.a2M(fo.elo[1]) + " -> " + a2N, 66, 1, bE.qO, aAy[1], -1, !1)
	}, this.sX = function(player, id) {
		0 === id ? aAg(50, player) ? (aAK(128, L(89, [ah.a2T[player]]), 52, player, aAL(180, 255, 180), bE.qL, -1, !0), ag.tD(player, 2, 255)) : aAK(384, L(90, [ah.a2T[player]]), 51, player, aAL(210, 210, 255), bE.qL, -1, !0) : aAg(51, player) ?
			(aAK(128, L(91, [ah.a2T[player]]), 52, player, bE.qO, "rgba(60,120,10,0.9)", -1, !0), ag.tD(player, 2, 255)) : (aAK(384, L(92, [ah.a2T[player]]), 50, player, bE.qO, "rgba(90,90,90,0.9)", -1, !0), ag.tD(player, 2, 96))
	}, this.sb = function(xE, target) {
		var color = aAL(210, 255, 210);
		1 < xE.length ? aAK(230, L(93, [xE.length, ah.a2T[target]]), 66, target, color, bE.qL, -1, !0) : aAK(230, L(94, [ah.a2T[xE[0]], ah.a2T[target]]), 66, xE[0], color, bE.qL, target, !0)
	}, this.aAz = function(player, target) {
		aAK(230, L(95, [ah.a2T[player], ah.a2T[target]]), 66, player, bE.qO, "rgba(75,65,5,0.9)", target, !0)
	}, this.aB0 = function(id, hE) {
		aAf(id, hE)
	}, this.a47 = function(id, player) {
		aAg(id, void 0 === player ? aE.fi : player)
	}, this.aB1 = function(id) {
		for (var aC = aA8.length - 1; 0 <= aC; aC--)
			if (aA8[aC].id === id) return aA8[aC];
		return null
	}, this.sS = function(a9B, aB2, player) {
		2 !== ah.a7T[aE.fV] && aAK(200, 1 === a9B ? L(96, [ah.a2T[player]]) : L(97, [bD.pa.a3I(a9B), ah.a2T[player]]), 30, player, "rgb(190,255,190)", bE.qL, -1, !0)
	}, this.aB4 = function(a9B, player) {
		2 !== ah.a7T[aE.fV] && (aAf(31, 0), a9B = " (" + bD.pa.a3I(a9B) + ") 💸", aAK(150, a9B = bD.h7.kR(player) ? L(98) + a9B : L(99, [ah.a2T[player]]) + a9B, 31, player, bE.qF, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a46 = function(c3) {
		for (var ev = bi.l1(), aC = 2; 0 <= aC; aC--) 0 < aAC.z7[aC] && (c3 || aAC.ev[aC] < ev - 220) && this.aBC(aC)
	}, this.aBC = function(id) {
		var pW, fl = aAC.z7[id],
			player = aAC.xE[id];
		aAC.z7[id] = 0, 1 === fl ? (0 === id ? pW = L(107, [ah.a2T[player], ah.a2T[aAC.aAH[0]]]) : 1 === id ? pW = L(108, [ah.a2T[player]]) : 2 === id ? pW = L(109, [ah.a2T[player]]) : 3 === id && (pW = L(110, [ah.a2T[player]])), aAf(7, 0), aAK(
			aAC.ny[id], pW, 7, aAC.aAH[id], bE.qO, bE.qL, -1, !0)) : (pW = L(0 === id ? 111 : 1 === id ? 112 : 113, [fl]), aAf(7, 0), aAK(aAC.ny[id], pW, 7, player, bE.qO, bE.qL, -1, !1))
	}, this.aAh = function(id, iE, lh) {
		var ev = bi.l1(),
			fl = aAC.z7[id] + 1;
		aAC.z7[id]++, aAC.xE[id] = iE, aAC.aAH[id] = lh, 1 === fl && (aAC.ev[id] = ev), (1 === fl && (aE.a42 < 32 || 2 === aE.a3z) || 1 < fl && (aAC.ev[id] < ev - 140 || 2 === aE.a3z)) && this.aBC(id)
	}, this.eq = function() {
		b3.eq();
		for (var kJ = (kJ = aA8.length - aAD) <= 1 ? 1 : kJ * kJ, aC = aA8.length - 1; 0 <= aC; aC--) 0 < aA8[aC].el && (aA8[aC].el -= kJ, aA8[aC].el <= 0) && (bi.e2 = !0, aA8.splice(aC, 1));
		! function() {
			var hE, aC;
			if (128 !== aAE && !(++aAE < 128))
				for (hE = 5, aC = am.la - 1; 0 <= aC; aC--) 1 === ah.a7T[am.lf[aC]] && 0 < hE-- && aAK(240, L(110, [ah.a2T[am.lf[aC]]]), 1, am.lf[aC], bE.qF, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a46(!1)
	}, this.z8 = function() {
		for (var a17, fu = a26(), aC = aA8.length - 1; 0 <= aC; aC--) a17 = fu - (aC + 1) * k, 50 === aA8[aC].id ? (z9.drawImage(aA8[aC].canvas, i.j - aA8[aC].j - aAB - aA9, a17), z9.drawImage(aAF, i.j - aAB - aA9, a17)) : z9.drawImage(aA8[aC]
			.canvas, i.j - aA8[aC].j - aA9, a17)
	}, this.aBE = function(id, iS) {
		var aAl, aBF = bE.qY;
		0 === id ? aAl = L(114) : 1 === id ? (aAl = L(115), aBF = bE.rL) : 2 === id ? aAl = L(116) : 3 === id ? aAl = L(117) : (aAl = bD.pa.a3I(iS), aBF = 5 === id ? bE.rL : bE.qL), aAf(74, 0), aAK(0, aAl, 74, 0, bE.qO, aBF, -1, !1, void 0,
			void 0, !0)
	}
}

function cO() {
	var aBH, v2, zA = "",
		a0s = 0,
		a0t = 0,
		aBG = -1,
		eP = ["Team", "BR", "1v1", "Zombie"],
		aBI = [
			[0, 15, 30, 45],
			[10, 40],
			[25],
			[55]
		],
		aBJ = 10;

	function aBN() {
		for (var aBO = aBP(), aBQ = -1, aBL = 0, aC = 0; aC < aBI.length; aC++) {
			var fo = aBR(aC, aBO);
			0 <= fo && (aBQ < 0 || fo < aBQ) && (aBQ = fo, aBL = aC)
		}
		if (!(aBQ < 0)) return aBQ !== aBG && (zA = eP[aBL] + " " + v2 + ": " + aBS(aBQ), aBG = aBQ, a0s = aR.measureText(zA, aBH), a0s += Math.floor(.4 * a0t), 1);
		zA = ""
	}

	function aBP() {
		var em = new Date;
		return 60 * em.getUTCMinutes() + em.getUTCSeconds()
	}

	function aBR(aBL, aBO) {
		for (var aBU = aBI[aBL], gD = -1, g4 = 0; g4 < aBU.length; g4++) {
			var fo = (fo = 60 * aBU[g4] + aBJ - aBO) <= 0 ? 3600 + fo : fo;
			(gD < 0 || fo < gD) && (gD = fo)
		}
		return gD
	}

	function aBS(aBV) {
		return aBW(Math.floor(aBV / 60)) + ":" + aBW(aBV % 60)
	}

	function aBW(aBX) {
		return aBX < 10 ? "0" + aBX : String(aBX)
	}
	this.aBK = function(aBL, aBM) {
		return 0 <= aBI[aBL].indexOf(aBM)
	}, this.dv = function() {
		v2 = L(118)
	}, this.resize = function() {
		a0s = Math.floor((a1.a2.iv() ? .53 : .36) * i.iw), a0t = Math.floor(.065 * a0s), aBH = bD.tc.vB(1, Math.floor(.9 * a0t)), aBG += 1e3, aBN()
	}, this.eq = function() {
		aBN() && (bi.e2 = !0)
	}, this.aBT = function(w3, w4) {
		for (var aBO = aBP(), pW = "", aC = w3; aC < Math.min(w4, aBI.length); aC++) {
			var fo = aBR(aC, aBO);
			0 <= fo && (pW += (pW ? "   " : "") + eP[aC] + ": " + aBS(fo))
		}
		return pW
	}, this.z8 = function(fu) {
		zA && (z9.lineWidth = 1 + Math.floor(a0t / 15), z9.translate(i.j - a0t, fu + a0s), z9.rotate(-Math.PI / 2), z9.fillStyle = bE.qO, z9.fillRect(0, 0, a0s, a0t), z9.strokeStyle = bE.qF, z9.strokeRect(0, 0, a0s, a0t + 10), z9.fillStyle = bE
			.qF, z9.font = aBH, bD.tc.textBaseline(z9, 1), bD.tc.textAlign(z9, 1), z9.fillText(zA, Math.floor(a0s / 2), Math.floor(.59 * a0t)), z9.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cP() {
	var a9A, aBY, aBZ, aBa, a0t, aBb, aBc = 0,
		aBd = 0;

	function aBi(q5) {
		return 1 === q5.id ? aBZ : aBY
	}

	function aBh(aC) {
		var aBq = !0,
			a37 = bE.qO,
			j = (1 === a9A[aC].id ? a9A[aC].p4.fillStyle = a9A[aC].aBp ? bE.rQ : bE.rJ : a9A[aC].kD === aE.fi ? a9A[aC].p4.fillStyle = bE.qZ : (ad.aBr(a9A[aC].kD), a9A[aC].p4.fillStyle = bD.color.qI(bR.gK[0], bR.gK[1], bR.gK[2], .87), 400 < bD.tj
				.a6W(bR.gK, 0, 2) && (aBq = !1, a37 = bE.qF)), a9A[aC].canvas.width),
			aBs = aBi(a9A[aC]),
			vq = (a9A[aC].p4.clearRect(0, 0, j, a0t), a9A[aC].p4.fillRect(0, 0, j, a0t), a9A[aC].p4.fillStyle = a37, ! function(p4, j, a0t) {
				p4.fillRect(0, 0, j, 1), p4.fillRect(0, a0t - 1, j, 1), p4.fillRect(0, 0, 1, a0t), p4.fillRect(j - 1, 0, 1, a0t)
			}(a9A[aC].p4, j, a0t), aBs + 2 * a0t < j && (a9A[aC].p4.fillRect(j - aBs - a0t, 0, 1, a0t), a9A[aC].p4.fillText(ah.a2T[a9A[aC].kD], Math.floor((j - aBs) / 2), Math.floor(.57 * a0t))), a0t),
			q5 = 1 === a9A[aC].id ? (q5 = a9A[aC], bD.pa.a3I(q5.iS) + " (" + bD.pa.a8C(100 * q5.aBk / 1024, +(10 * q5.aBk < 1024)) + ")") : bD.pa.a3I(a9A[aC].iS);
		a9A[aC].p4.fillText(q5, Math.floor(j - aBs / 2 - vq), Math.floor(.57 * a0t)),
			function(aC, j, vq, aBq, aBs) {
				a9A[aC].p4.fillStyle = aBq ? bE.qQ : bE.qM;
				var aBq = a9A[aC].iS,
					max = a9A[aC].aBy,
					aBq = max <= aBq ? aBs : Math.floor(aBs * aBq / max);
				a9A[aC].p4.fillRect(Math.floor(j - aBs - vq), a0t - aBb, aBq, aBb)
			}(aC, j, vq, aBq, aBs),
			function(aC, j, aBq, a37) {
				var aC0 = a9A[aC].aC1 || 1 === a9A[aC].id && 0 === a9A[aC].aBk,
					aC0 = (a9A[aC].p4.strokeStyle = aC0 ? bE.qX : aBq ? bE.qy : bE.qz, a9A[aC].p4.fillStyle = a37, a9A[aC].p4.fillRect(j - a0t, 0, 1, a0t), a9A[aC].p4.lineWidth = Math.max(Math.floor(a0t / 12), 3), a9A[aC].p4.lineCap = "round", .35);
				j = a0t + 1, a9A[aC].p4.beginPath(), a9A[aC].p4.moveTo(Math.floor(j - aC0 * a0t + 0), Math.floor(aC0 * a0t)), a9A[aC].p4.lineTo(Math.floor(j - a0t + aC0 * a0t), Math.floor(a0t - aC0 * a0t + 0)), a9A[aC].p4.stroke(), a9A[aC].p4
					.beginPath(), a9A[aC].p4.moveTo(Math.floor(j - a0t + aC0 * a0t), Math.floor(aC0 * a0t)), a9A[aC].p4.lineTo(Math.floor(j - aC0 * a0t + 0), Math.floor(a0t - aC0 * a0t + 0)), a9A[aC].p4.stroke()
			}(aC, j, aBq, a37), (0 === a9A[aC].id ? function(aC, j, aBq) {
				a9A[aC].p4.strokeStyle = aBq ? bE.qg : bE.qq, a9A[aC].p4.fillRect(a0t, 0, 1, a0t);
				aBq = j - a0t;
				a9A[aC].p4.beginPath(), a9A[aC].p4.moveTo(Math.floor(.3 * a0t + aBq), Math.floor(a0t / 2)), a9A[aC].p4.lineTo(Math.floor(a0t - .3 * a0t + 0 + aBq), Math.floor(a0t / 2)), a9A[aC].p4.stroke(), a9A[aC].p4.beginPath(), a9A[aC].p4
					.moveTo(Math.floor(a0t / 2 + aBq), Math.floor(.3 * a0t)), a9A[aC].p4.lineTo(Math.floor(a0t / 2 + aBq), Math.floor(a0t - .3 * a0t + 0)), a9A[aC].p4.stroke()
			} : function(aC, j, aBq) {
				var aC = a9A[aC].p4,
					j9 = Math.floor(.12 * a0t),
					o7 = Math.floor(.34 * a0t + j - a0t),
					j = Math.floor(a0t - .34 * a0t + j - a0t);
				aC.strokeStyle = aBq ? bE.qg : bE.qq, aC.fillRect(a0t, 0, 1, a0t), aC.beginPath(), aC.moveTo(o7, Math.floor(a0t / 2) - j9), aC.lineTo(j, Math.floor(a0t / 2) - j9), aC.stroke(), aC.beginPath(), aC.moveTo(o7, Math.floor(a0t / 2) +
					j9), aC.lineTo(j, Math.floor(a0t / 2) + j9), aC.stroke()
			})(aC, j, aBq)
	}

	function aCD(h, aCB) {
		for (var iS, aC = aCB - 1; 0 <= aC; aC--) iS = ae.gy(aE.fV, aC), h[aC].iS !== iS && (h[aC].iS = iS, h[aC].aBy = Math.max(iS, h[aC].aBy), h[aC].aBm = !0)
	}

	function aCH(h, aCF) {
		for (var w3 = aE.fV << 3, aAp = bQ.z.aAp, aCJ = bQ.z.aCJ, aC = aCF - 1; 0 <= aC; aC--) {
			var aCK = aCJ[w3 + aC],
				iS = aAp[aCK],
				target = bQ.lt.aCL(aCK),
				aCK = bQ.z.aCM[aCK];
			h[aC].iS === iS && h[aC].aBy === target && h[aC].aBk === aCK || (h[aC].iS = iS, h[aC].aBy = target, h[aC].aBk = aCK, h[aC].aBm = !0)
		}
	}

	function aBg(a9D) {
		a9D.canvas = document.createElement("canvas"), bV.aBe.font = aBa;
		var j = aBi(a9D);
		a9D.kD < aE.fi && 0 === a9D.id && (j += Math.floor(bV.aBe.measureText(ah.a2T[a9D.kD] + "000").width)), j += 2 * a0t, a9D.canvas.width = j, a9D.canvas.height = a0t, a9D.p4 = a9D.canvas.getContext("2d", {
			alpha: !0
		}), a9D.p4.font = aBa, bD.tc.textBaseline(a9D.p4, 1), bD.tc.textAlign(a9D.p4, 1)
	}

	function aC7(aC) {
		return aV.aCN() ? i.j - a9A[aC].canvas.width - bf.gap : aV.fs
	}

	function aC8(aC) {
		return Math.floor(2 * bf.gap + (aV.aCN() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * a0t))
	}
	this.dv = function() {
		aBc = aBd = 0, a9A = [], this.resize()
	}, this.resize = function() {
		var io;
		aBa = aO.a9u, a0t = aO.fontSize + 5, a0t = Math.floor(1.25 * a0t), a1.a2.iv() && (a0t = Math.floor(1.25 * a0t)), aBb = Math.floor(.15 * a0t), bV.aBe.font = aBa, aBY = Math.floor(bV.aBe.measureText("02 000 000 0000").width), io = bV.aBe,
			io = Math.max(io.measureText("0 000 000 000 (100%)").width, io.measureText("0 000 000 000 (0.0%)").width), aBZ = Math.floor(io + .4 * a0t);
		for (var aC = a9A.length - 1; 0 <= aC; aC--) aBg(a9A[aC]), aBh(aC)
	}, this.nS = function() {
		! function() {
			for (var aBn = bQ.a9e.aBo(), id = -1 === aBn ? -1 : bQ.z.mx[aBn], aC = a9A.length - 1; 0 <= aC; aC--) {
				var q5 = a9A[aC];
				1 === q5.id && q5.aBp !== (q5.kD === id) && (q5.aBp = q5.kD === id, q5.aBm = !0)
			}
		}();
		for (var aC = a9A.length - 1; 0 <= aC; aC--) a9A[aC].aBm && (a9A[aC].aBm = !1, aBh(aC))
	}, this.hz = function(mJ, mK) {
		if (!(2 === aE.a3z || 0 === ah.ng[aE.fV] || aE.hu || aE.hv || bD.h7.kR(aE.fV)))
			for (var aC2, aC4, aC3, aC5 = a1.a2.iv() ? a0t : 0, aC6 = a1.a2.iv() ? Math.floor(.15 * a0t) : 0, aC = a9A.length - 1; 0 <= aC; aC--)
				if (aC2 = aC7(aC), aC3 = aC8(aC), aC4 = a9A[aC].canvas.width, aC3 - aC6 <= mK && mK <= aC3 + a0t + aC6) {
					if (aC2 - aC5 <= mJ && mJ <= aC2 + a0t + aC5) return 0 !== a9A[aC].id ? bB.iC.s7(a9A[aC].kD) : a9A[aC].aC1 || (a9A[aC].aBm = !0, a9A[aC].aC1 = !0, bB.iC.sD(a9A[aC].kD)), !0;
					if (aC2 + aC4 - a0t - aC5 <= mJ && mJ <= aC2 + aC4 + aC5) return aC3 = aS.iG(), 0 === a9A[aC].id ? (bY.a9c(3), bB.iC.iJ(aC3, a9A[aC].kD)) : bB.iC.sA(aC3, a9A[aC].kD), !0;
					if (1 === a9A[aC].id && aC2 <= mJ && mJ <= aC2 + aC4) return bQ.a9e.select(a9A[aC].kD), bi.e2 = !0
				} return !1
	}, this.eq = function() {
		var a6e, a6f, h, aCB;
		0 === ah.ng[aE.fV] || bD.h7.kR(aE.fV) && !aE.hu && !aE.hv || (a6e = a9A.slice(0, aBc), a6f = a9A.slice(aBc, aBc + aBd), h = a6e, aCB = ae.gs(aE.fV), function(h, aCB) {
			if (aBc !== aCB) return 1;
			for (var aC = aCB - 1; 0 <= aC; aC--)
				if (h[aC].kD !== ae.gx(aE.fV, aC)) return 1;
			return
		}(h, aCB) ? aCD(h = function(h, aCB) {
			var aC, kD, g5, iS, aAN = [];
			loop: for (aC = 0; aC < aCB; aC++) {
				for (kD = ae.gx(aE.fV, aC), g5 = 0; g5 < h.length; g5++)
					if (h[g5].kD === kD) {
						aAN.push(h.splice(g5, 1)[0]);
						continue loop
					} iS = ae.gy(aE.fV, aC), aBg(iS = {
					kD: kD,
					iS: iS,
					aBy: iS,
					aBk: 0,
					aBp: !1,
					id: 0,
					aBm: !0,
					aC1: !1,
					canvas: null,
					p4: null
				}), aAN.push(iS)
			}
			return aAN
		}(h, aCB), aCB) : aCD(h, aCB), a6e = h, a6f = function(h) {
			var aCF = bQ.z.l8[aE.fV];
			return function(h, aCF) {
				if (aBd !== aCF) return 1;
				for (var w3 = aE.fV << 3, mx = bQ.z.mx, aCJ = bQ.z.aCJ, aC = aCF - 1; 0 <= aC; aC--) {
					var aCK = aCJ[w3 + aC];
					if (h[aC].kD !== mx[aCK]) return 1
				}
				return
			}(h, aCF) ? aCH(h = function(h, aCF) {
				var aC, kD, g5, iS, aAN = [],
					w3 = aE.fV << 3,
					mx = bQ.z.mx,
					aAp = bQ.z.aAp,
					aCJ = bQ.z.aCJ;
				loop: for (aC = 0; aC < aCF; aC++) {
					var aCK = aCJ[w3 + aC];
					for (kD = mx[aCK], g5 = 0; g5 < h.length; g5++)
						if (h[g5].kD === kD) {
							aAN.push(h.splice(g5, 1)[0]);
							continue loop
						} iS = aAp[aCK], aBg(iS = {
						kD: kD,
						iS: iS,
						aBy: bQ.lt.aCL(aCK),
						aBk: bQ.z.aCM[aCK],
						aBp: !1,
						id: 1,
						aBm: !0,
						aC1: !1,
						canvas: null,
						p4: null
					}), aAN.push(iS)
				}
				return aAN
			}(h, aCF), aCF) : aCH(h, aCF), h
		}(a6f), aBc = a6e.length, aBd = a6f.length, a9A = a6e.concat(a6f))
	}, this.z8 = function() {
		if (0 !== ah.ng[aE.fV] && (!bD.h7.kR(aE.fV) || aE.hu || aE.hv))
			for (var aC = a9A.length - 1; 0 <= aC; aC--) z9.drawImage(a9A[aC].canvas, aC7(aC), aC8(aC))
	}
}

function cQ() {
	var aA8, l9, aCO, aCP, k, a9u, fontSize, aCQ, aCR, aCS, aCT, canvas, p4, nt, aCU;

	function zP(aC) {
		return L(0 === aC ? 119 : 1 === aC ? 120 : 2 === aC ? 121 : 122)
	}

	function aCb() {
		aE.ie ? aCc + 4 * bf.gap + k + bk.aCd() > aS.fu ? z9.drawImage(canvas, 2 * bf.gap + bk.aCd(), aCc + 2 * bf.gap) : z9.drawImage(canvas, bf.gap, aCc + 3 * bf.gap + bk.aCd()) : z9.drawImage(canvas, bf.gap, aCc + 2 * bf.gap)
	}

	function aCV() {
		canvas.width = aA8[0].width + aCS, canvas.height = k + aCS, (p4 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, aA8[0].width + aCS, k + aCS), p4.translate(Math.floor(aCS / 2), Math.floor(aCS / 2)), p4.lineWidth = aCS, p4.fillStyle = 1 === aA8[0].aCa ? bE.qT : bE.qL, aCe(), p4.fill(), p4.strokeStyle = 1 === aA8[0].aCa ? bE.qF :
			bE.qO, aCe(), p4.stroke(), bD.tc.textAlign(p4, 1), bD.tc.textBaseline(p4, 1), p4.fillStyle = 1 === aA8[0].aCa ? bE.qF : bE.qO, p4.font = a9u[0], p4.fillText(zP(aA8[0].aCZ), Math.floor(aA8[0].width / 2), Math.floor(.72 * aCQ[0] * k)), p4
			.font = a9u[1], p4.fillText(aA8[0].pW, Math.floor(aA8[0].width / 2), Math.floor((aCQ[0] + .48 * aCQ[1]) * k))
	}

	function aCe() {
		if (__fx.settings.smoothUI && p4.roundRect) return p4.beginPath(), p4.roundRect(0, 0, aA8[0].width, k, .15 * k);
		p4.beginPath(), p4.moveTo(aCT, 0), p4.lineTo(aA8[0].width - aCT, 0), p4.lineTo(aA8[0].width, aCT), p4.lineTo(aA8[0].width, k - aCT), p4.lineTo(aA8[0].width - aCT, k), p4.lineTo(aCT, k), p4.lineTo(0, k - aCT), p4.lineTo(0, aCT), p4.closePath()
	}
	this.dv = function() {
		l9 = 4, aCO = aCP = nt = 0, aA8 = [], a9u = new Array(2), fontSize = new Array(2), (aCQ = new Array(2))[0] = .3, aCQ[1] = .7, aCR = new Array(4), canvas = document.createElement("canvas"), aCU = bi.el + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.iv() ? .062 : .047) * i.iw), fontSize[0] = Math.floor(.85 * aCQ[0] * k), fontSize[1] = Math.floor(.85 * aCQ[1] * k), a9u[0] = bD.tc.vB(1, fontSize[0]), a9u[1] = bD.tc.vB(1, fontSize[1]), aC = aCR.length -
			1; 0 <= aC; aC--) aCR[aC] = this.measureText(zP(aC) + "000", a9u[0]);
		if (aCS = Math.floor(1 + .05 * k), aCT = Math.floor(.2 * k), 0 < aA8.length) {
			for (aC = aA8.length - 1; 0 <= aC; aC--) j = this.measureText(aA8[aC].pW + "00", a9u[1]), aA8[aC].width = j < aCR[aC] ? aCR[aC] : j;
			aCV()
		}
	}, this.eq = function() {
		0 !== l9 && (4 === l9 ? bi.el > aCU && (l9 = 0, 1 === aE.a3z) && aR.a4N(bV.xV.aB5[bV.fR].name, 3, 1, 9) : (1 === l9 ? (0 === aCO && (aCV(), aCO = 1e-4), 1 <= (aCO += .002 * (bi.el - nt)) && (aCP = 0, l9 = 2, aCO = 1), bi.e2 = !0) : 2 ===
			l9 ? ((aCP += (bi.el - nt) / 1e3) > aA8[0].ny || 1 < aCP && 1 < aA8.length) && (l9 = 3) : 3 === l9 && ((aCO -= .002 * (bi.el - nt)) <= 0 && (aCO = 0, aA8.shift(), l9 = 0 < aA8.length ? 1 : 0), bi.e2 = !0), nt = bi.el))
	}, this.measureText = function(pW, a9u) {
		return z9.font = a9u, Math.floor(z9.measureText(pW).width)
	}, this.eu = function(aCY, aC) {
		this.a4N(ah.a2T[aCY], aC, 1, 0 === aC ? 3 : 7)
	}, this.a4N = function(pW, aCZ, aCa, ny) {
		var j;
		pW.length && (j = (j = this.measureText(pW + "00", a9u[1])) < aCR[aCZ] ? aCR[aCZ] : j, aA8.push({
			pW: pW,
			width: j,
			aCZ: aCZ,
			aCa: aCa,
			ny: ny
		}), 0 === l9) && (aCO = 0, l9 = 1, nt = bi.el)
	}, this.z8 = function() {
		0 !== l9 && 0 !== aCO && (aCO < 1 ? (z9.globalAlpha = aCO, aCb(), z9.globalAlpha = 1) : aCb())
	}
}

function cz() {
	var k, canvas, p4, aCf, aCg, aCh, aCi, aBm, aCj, aCk, aCl, aCm, aAx = !1,
		a6s = (this.iV = !1, this.j = 0, new Array(2)),
		aCn = 0;

	function nT() {
		var j = ax.j,
			lz = (aBm = !1, a29(p4, j, k), Math.floor(j / 2));
		1 === aCf ? (p4.fillStyle = bE.qi, p4.fillRect(lz, 0, lz, k)) : -1 === aCf && (p4.fillStyle = bE.r0, p4.fillRect(0, 0, lz, k)), a2A(p4, j, k, 2);
		var lz = (lz = Math.floor(.25 * k)) < 2 ? 2 : lz,
			aB8 = (p4.fillStyle = bE.qU, Math.floor((k - 4) * aCg[1] / aCh[1]));
		0 < aB8 && p4.fillRect(2, k - 2 - aB8, lz, aB8), 0 < (aB8 = Math.floor((k - 4) * aCg[0] / aCh[0])) && p4.fillRect(j - 2 - lz, k - 2 - aB8, lz, aB8);
		lz = (lz = Math.floor(k / 8)) < 2 ? 2 : lz, a2C(p4, Math.floor(.4 * k), 0, k, lz, .5, !1), a2C(p4, Math.floor(j - 1.4 * k), 0, k, lz, .5, !0), aB8 = 1.1 * k / a6s[0].width;
		p4.imageSmoothingEnabled = !0, p4.setTransform(aB8, 0, 0, aB8, (j - aB8 * a6s[0].width) / 2, -.05 * k), p4.drawImage(a6s[+aAx], 0, 0), p4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aCs() {
		aCm = -1, aAx = ai.aCt(), aO.a8S(257), aO.aAw(aAx), ax.iV = !0, aBm = !0, aCj = 360;
		for (var gD, em = 0, aC = am.la - 1; 0 <= aC; aC--) bD.h7.kR(am.lf[aC]) || (em += ah.hZ[am.lf[aC]]);
		aAx ? aCh[0] = Math.max(bO.gC(3 * em, 4), 1) : aE.ie ? (gD = 9 === aE.lM ? 8 === bj.lR[bk.ld()] ? 80 : (gD = bO.gC(100 * bk.lb(), aE.ko), bO.gC(bO.iu(1550 - 11 * gD, 400, 1e3), 10)) : (gD = bO.gC(100 * bk.lb(), aE.ko), bO.gC(bO.iu(1600 - 12 *
			gD, 400, 1e3), 10)), gD = bO.gC(gD * em, 100), aCh[0] = Math.max(gD, 1)) : 8 === aE.lM ? aCh[0] = Math.max(bO.gC(3 * em, 4), 1) : aCh[0] = Math.max(bO.gC(3 * em, 5), 1), aCh[1] = Math.max(em - aCh[0], 1)
	}

	function aCo() {
		aCl = bi.l1(), aBm = !0, aCj = aCf = 0, aCi = [], ax.iV = !1, aO.a47(247), aCg[0] = aCg[1] = 0, aO.a8S(673)
	}

	function a26() {
		return aS.aAY(aO.aAU()) ? __fx.settings.keybindButtons ? aS.fu - 2 * (k + bf.gap) : aS.fu - k - bf.gap : bF.aAY(aO.aAX()) ? bF.a26() - k - bf.gap : i.k - k - bn.a9H() * bf.gap
	}
	this.dw = function() {
		for (var aC = 0; aC < 2; aC++) a6s[aC] = bD.canvas.a2l(ac.get(3), 8 - aC, bE.ri), a6s[aC] = bD.canvas.a6v(a6s[aC])
	}, this.dv = function() {
		aCl = -1e4, aCk = aCn = 0, aCm = -1, this.iV = !1, aBm = aAx = !1, aCg = [aCf = aCj = 0, 0], aCh = [1, 1], aCi = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, p4 = canvas.getContext("2d", {
			alpha: !0
		}), nT()
	}, this.nS = function() {
		aBm && nT()
	}, this.hz = function(fs, fu) {
		return !!this.iV && !(fs < i.j - this.j - bf.gap || fu < a26() || (aE.hu || aE.hv || this.iW(aE.fV) && (aN.hw && aN.a69(), bB.iC.iX(fs > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.eq = function() {
		0 < aCk ? 0 === --aCk && aCo() : this.iV ? 180 == --aCj && 3 * aCg[0] < aCh[0] ? aCo() : aCg[0] >= aCh[0] ? aAx ? bU.a3d.a3u() : bU.a3d.a3y() : aCg[1] >= aCh[1] ? aCk = 4 : aCj <= 0 && aCo() : ! function() {
			var aCv = bi.l1();
			if (aCv % 40 == 14) {
				if (aCn) return !(aCv < aCn) && !(aCv < aCl + 535) && (aCn = aCv + 1071, bD.h7.a7W()) ? (aCs(), 1) : 0;
				(1 === am.la || (aE.ie ? bk.lb() : ah.hZ[mf[0]]) >= bO.gC(96 * aE.ko, 100)) && (aCn = aCv + 535)
			}
			return
		}() && 0 <= aCm && (aO.a2S(250, L(123, [ah.a2T[aCm]]), 673, aCm, bE.qO, bE.qL, -1, !0), aCs())
	}, this.a40 = function() {
		this.iV && aCg[0] < aCh[0] && aCo()
	}, this.tE = function(player, aCw) {
		var aCx = L(aCw ? 124 : 125, [ah.a2T[player]]),
			aCx = (aO.a2S(450, aCx, 257, player, aCw ? bE.qg : bE.qx, bE.qL, -1, !0), aCi.push(player), aBm = !0, aE.lO ? Math.max(aCh[0], aCh[1]) : ah.hZ[player]),
			aCx = Math.max(aCx, 1);
		aCw ? aCg[0] += aCx : aCg[1] += aCx, player === aE.fV && (aCf = aCw ? 1 : -1)
	}, this.z8 = function() {
		var fu;
		this.iV && (fu = a26(), z9.drawImage(canvas, i.j - this.j - bf.gap, fu))
	}, this.iY = function(player) {
		if (0 !== aCj) return !1;
		if (!bD.h7.hx(1)) return !1;
		if (!bD.h7.hy(player)) return !1;
		if (10 <= kp[player] && !bD.h7.a7n(player, 9)) return !1;
		if (!(aE.lO || m.e8 && m.eD)) {
			player = bi.l1();
			if (player < aCl + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iW = function(hJ) {
		if (!bD.h7.hx(1)) return !1;
		if (!bD.h7.hy(hJ)) return !1;
		if (!this.iV) return !1;
		for (var aC = aCi.length - 1; 0 <= aC; aC--)
			if (aCi[aC] === hJ) return !1;
		return !0
	}, this.iU = function(player) {
		aCm = player
	}
}

function cR() {
	var j, fs, aCz, canvas, p4, iV, jM, a8J, a9u, aBm, aD0 = 11 / 12;

	function aD2() {
		var aBz = Math.floor(jM * (j - 2 * aCz)),
			aD5 = 1 + Math.floor(.0625 * aS.k),
			aD6 = 1 + Math.floor(.3 * aS.k),
			aD7 = Math.floor(.55 * aS.k),
			rounded = (p4.clearRect(0, 0, j, aS.k), p4.fillStyle = bE.qK, p4.fillRect(0, 0, aCz, aS.k), p4.fillRect(aCz + aBz, 0, j - aCz - aBz, aS.k), p4.fillStyle = jM < 1 / 3 ? "rgba(" + Math.floor(3 * jM * 130) + ",130,0,0.85)" : jM < 2 / 3 ?
				"rgba(130," + (130 - Math.floor(3 * (jM - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (jM - 2 / 3) * 130) + ",0.85)", p4.fillRect(aCz, 0, aBz, aS.k), p4.fillStyle = bE.qO, p4.fillStyle = __fx.utils.lineColor(bE.qO),
				__fx.utils.smoothFrame(p4, j, aS.k));
		rounded || (p4.fillRect(0, 0, j, 1), p4.fillRect(0, aS.k - 1, j, 1), p4.fillRect(0, 0, 1, aS.k)), p4.fillRect(aCz, 0, 1, aS.k), p4.fillRect(aCz + aBz, 0, 1, aS.k), p4.fillRect(j - aCz, 0, 1, aS.k), rounded || p4.fillRect(j - 1, 0, 1, aS.k),
			p4.fillStyle = bE.qO, p4.fillRect(Math.floor(.25 * aS.k) + aD6, Math.floor((aS.k - aD5) / 2), aS.k - 2 * aD6, aD5), p4.fillRect(Math.floor(j - 1.25 * aS.k) + aD6, Math.floor((aS.k - aD5) / 2), aS.k - 2 * aD6 - aD6 % 2, aD5), p4.fillRect(
				Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - aD5) / 2), aD6, aD5, aS.k - 2 * aD6 - aD6 % 2), a8J = bD.h7.jL(aE.fV, aS.iG()), p4.fillText(bD.pa.a3I(a8J) + " (" + bD.pa.a8C(100 * jM, +(jM < .1)) + ")", Math.floor(.5 * j), aD7)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		jM = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a65(arg1);

	function aDC(a6R) {
		return !(1 < a6R && 1 === jM || (1 < a6R && a6R * jM - jM < 1 / 1024 ? a6R = (jM + 1 / 1024) / jM : a6R < 1 && jM - a6R * jM < 1 / 1024 && (a6R = (jM - 1 / 1024) / jM), jM = bO.iu(jM * a6R, 1 / 1024, 1), aD2(), 0))
	}

	function aDD(mJ) {
		return jM !== (jM = bO.iu((mJ - fs - aCz) / (j - 2 * aCz), 1 / 1024, 1)) && (aD2(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aD2(), bi.e2 = !0
	}, this.fu = 0, this.i0 = !1, this.dv = function() {
		iV = !aE.iA && !aE.hu && !aE.hv, aBm = !1, jM = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.buffer.data[182].value + 1) / 1024, a8J = 0, this.i0 = !1, this.resize()
	}, this.resize = function() {
		a1.a2.iv() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.iw), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.iv() ? .65 : .389) * i.iw), j += 12 - j % 12, this.k = Math.floor(j / 12)), aCz = Math.floor(3 * this.k / 2), a9u =
			bD.tc.vB(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, z9), canvas.height = this.k, (p4 = canvas.getContext("2d", {
				alpha: !0
			})).font = a9u, bD.tc.textBaseline(p4, 1), bD.tc.textAlign(p4, 1), this.aD1(), aD2()
	}, this.aD1 = function() {
		fs = a1.a2.iv() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.fu = i.k - this.k - bn.a9H() * bf.gap
	}, this.nS = function() {
		aBm && (aBm = !1, aD2())
	}, this.iV = function() {
		return !(!iV || aN.hw && fs < Math.floor(bf.gap + 5.5 * this.k))
	}, this.aAY = function(aD8) {
		return !!this.iV() && fs + j > i.j - aD8 - bf.gap
	}, this.a8Q = function() {
		iV = !aE.hu && !aE.hv
	}, this.aCo = function() {
		iV = !1
	}, this.iG = function() {
		return bO.iu(Math.floor(1024 * jM + .5) - 1, 0, 1023)
	}, this.a62 = function(mJ, mK) {
		return this.iV() && fs < mJ && mJ < fs + j && mK > this.fu
	}, this.hz = function(mJ, mK) {
		if (!this.iV()) return !1;
		if (!(__fx.settings.keybindButtons && mK > this.fu - Math.floor(bf.gap / 4) - this.k && mK < this.fu - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(mJ - fs))) {
			if (!aS.a62(mJ, mK)) return !1;
			aT.oC = !1, ! function(uv, mJ, mK) {
				if (function(mJ, mK) {
						return fs < mJ && mJ < fs + aCz && mK > aS.fu
					}(mJ, mK)) return aDC(aD0);
				if (function(mJ, mK) {
						return fs + j - aCz < mJ && mJ < fs + j && mK > aS.fu
					}(mJ, mK)) return aDC(1 / aD0);
				return uv.i0 = !0, aDD(mJ)
			}(this, mJ, mK) || (bi.e2 = !0)
		}
		return !0
	}, this.a65 = function(oJ) {
		0 !== aE.a3z && this.iV() && aDC(oJ) && (bi.e2 = !0)
	}, this.a5b = function(deltaY) {
		var oJ;
		return !(0 === deltaY || !this.iV()) && aDC(oJ = 0 < deltaY ? (oJ = 400 / (400 + deltaY)) < aD0 ? aD0 : oJ : 1 / aD0 < (oJ = (400 - deltaY) / 400) ? 1 / aD0 : oJ)
	}, this.a5Y = function(mJ) {
		return !!this.i0 && aDD(mJ)
	}, this.a5y = function() {
		this.i0 = !1
	}, this.eq = function() {
		this.iV() && a8J !== bD.h7.jL(aE.fV, this.iG()) && (aBm = !0)
	}, this.z8 = function() {
		this.iV() && (z9.drawImage(canvas, fs, this.fu), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(z9, fs, this.fu)
	}
}

function dB() {
	var canvas, p4, rect, font, aDE = 0,
		aDF = !1,
		aDG = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aDH = 5;

	function aDO() {
		if (aDF) {
			var aC, fl = aDG.length,
				aD7 = Math.floor(.5 * rect.k),
				k = fl * aD7,
				fs = Math.floor(Math.floor(rect.fs) + .3 * rect.j - .5),
				fu = Math.floor(Math.floor(rect.fu) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			for (z9.fillStyle = bE.qK, z9.fillRect(fs, fu, j, k), z9.fillStyle = bE.qn, z9.fillRect(fs, fu + aDH * aD7, j, aD7), z9.fillStyle = bE.qO, z9.fillRect(fs, fu, 2, k), z9.fillRect(fs, fu, j, 2), z9.fillRect(fs + j - 2, fu, 2, k), aC =
				1; aC < fl; aC++) z9.fillRect(fs, fu + aC * aD7, j, 2);
			for (z9.fillStyle = bE.qO, bD.tc.textAlign(z9, 1), bD.tc.textBaseline(z9, 1), z9.font = bD.tc.vB(0, .6 * aD7), fs += .5 * j, aC = 0; aC < fl; aC++) z9.fillText(aDW(aC), fs, fu + (aC + .6) * aD7)
		}
		z9.drawImage(canvas, Math.floor(rect.fs), Math.floor(rect.fu))
	}

	function nT(uv) {
		var fs, o7, o8, aD7;
		p4.clearRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), p4.fillStyle = bE.qK, p4.fillRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), aE.oA && (p4.fillStyle = bE.qn, p4.fillRect(0, 0, Math.floor(.3 * rect.j), Math.floor(rect.k))), p4
			.fillStyle = bE.qO, p4.fillText("Hide UI", .15 * rect.j, .5 * rect.k), p4.fillRect(Math.floor(.3 * rect.j - .5), 0, 2, Math.floor(rect.k)), fs = .5 * rect.j, p4.fillText("Replay Speed", fs, .31 * rect.k), p4.fillText(aDW(aDH), fs, .69 *
				rect.k), p4.fillRect(Math.floor(.7 * rect.j - .5), 0, 2, Math.floor(rect.k)), uv.a90 ? (fs = Math.floor(.02 * rect.j), uv = Math.floor(.025 * rect.j), o7 = Math.floor(.85 * rect.j - fs - .5 * uv), o8 = Math.floor(.25 * rect.k), aD7 =
				Math.floor(rect.k) - 2 * o8, p4.fillRect(o7, o8, fs, aD7), p4.fillRect(o7 + fs + uv, o8, fs, aD7)) : function() {
				var j = Math.floor(.46 * rect.k),
					k = Math.floor(.23 * rect.k),
					fs = Math.floor(.85 * rect.j - .5 * j + j / 12),
					fu = Math.floor(.5 * rect.k - k);
				p4.beginPath(), p4.moveTo(fs, fu), p4.lineTo(fs + j, fu + k), p4.lineTo(fs, fu + (k << 1)), p4.fill()
			}(), p4.fillRect(0, 0, Math.floor(rect.j), 2), p4.fillRect(0, 0, 2, Math.floor(rect.k)), p4.fillRect(0, Math.floor(rect.k) - 2, Math.floor(rect.j), 2), p4.fillRect(Math.floor(rect.j - 2), 0, 2, Math.floor(rect.k))
	}

	function aDW(aC) {
		return 5 === aC ? "Normal" : "" + aDG[aC]
	}
	this.a90 = !1, this.dv = function() {
		aE.hu && (aDH = 5, this.a90 = !1, aDF = !1, rect = new uD([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aDI = function() {
		return aDG[aDH]
	}, this.a26 = function() {
		return rect.fu
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a90,
		fxGetSpeedIndex: () => aDH,
		fxSetSpeedIndex: index => {
			aDH = index, this.resize()
		},
		fxGetPanelTop: () => rect && rect.fu
	}, this.aAY = function(aD8) {
		return !!aE.hu && rect.fs + rect.j > i.j - aD8 - bf.gap
	}, this.resize = function() {
		aE.hu && (rect.resize(), rect.fu -= (bn.a9H() - 1) * bf.gap, font = bD.tc.vB(0, .3 * rect.k), (canvas = document.createElement("canvas")).width = Math.floor(rect.j), canvas.height = Math.floor(rect.k), (p4 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.tc.textAlign(p4, 1), bD.tc.textBaseline(p4, 1), nT(this))
	}, this.a68 = function(aDJ) {
		0 === aE.a3z || u.iV() || aDJ !== aE.oA && (aE.oA = aDJ, bk.resize(), bi.e2 = !0, aE.hu) && (aDE = bi.el + 2e3, nT(this))
	}, this.hz = function(fs, fu) {
		if (!aE.hu) return !1;
		if (fs < rect.fs || fu < rect.fu || fs > rect.fs + rect.j) return aDF && function(uv, fs, fu) {
			var fl = aDG.length,
				aD7 = Math.floor(.5 * rect.k),
				k = fl * aD7,
				o7 = Math.floor(Math.floor(rect.fs) + .3 * rect.j - .5),
				k = Math.floor(Math.floor(rect.fu) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			return aDF = !1, bi.e2 = !0, fs < o7 || o7 + j < fs || fu < k || (aDH = aDN(0, Math.floor((fu - k) / aD7), fl - 1), nT(uv)), !0
		}(this, fs, fu);
		if ((fs -= rect.fs) < .3 * rect.j) aDF = !1, this.a68(!aE.oA);
		else {
			if (fs < .7 * rect.j) return aDF = !aDF, bi.e2 = !0;
			this.a6A(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a6A(!0), this.a6A = function(aDL) {
		2 === aE.a3z ? (this.a68(!1), u.v(3)) : (aDF = !1, this.a90 = !this.a90, this.a90 ? (aN.hw && aN.a69(), a1.a2.setState(1)) : aDL || aN.aA1(), bi.e2 = !0, nT(this))
	}, this.aDM = function() {
		this.a90 = !1, aN.aA1(), bi.e2 = !0, nT(this)
	}, this.a5r = function(fs, fu) {
		return !!aE.oA && (0 <= aN.hz(fs, fu) || (aE.hu ? ((bi.el > aDE || !this.hz(fs, fu)) && aT.hz(fs, fu), bi.e2 = !0, aDE = bi.el + 2e3) : aT.hz(fs, fu)), !0)
	}, this.eq = function() {
		aE.hu && aE.oA && bi.el > aDE - 1e3 && bi.el < aDE && (bi.e2 = !0)
	}, this.a48 = function() {
		aE.hu && (this.a90 = !1, bi.e2 = !0, nT(this))
	}, this.z8 = function() {
		if (aE.hu) {
			if (aE.oA) {
				if (bi.el > aDE) return;
				if (bi.el > aDE - 1e3) return z9.globalAlpha = aDN(0, (1e3 - (bi.el - (aDE - 1e3))) / 1e3, 1), aDO(), void(z9.globalAlpha = 1)
			}
			aDO()
		}
	}
}

function cS() {
	var aDX, aDY, j, fs, fu, aDZ, aDa;
	this.dv = function() {
		aDX = new Array(2), aDY = new Array(2), this.oC = !1, aDa = aDZ = jO = jN = 0, ix = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.iv() ? .072 : .0502) * i.iw)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aDX[aC] = document.createElement("canvas"), aDX[aC].width = j, aDX[aC].height = j, aDY[aC] = aDX[aC].getContext("2d", {
			alpha: !0
		});
		this.aD1(),
			function() {
				for (var aDr = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aDY[aC].clearRect(0, 0, j, j), aDY[aC].fillStyle = bE.qH, aDY[aC].beginPath(), aDY[aC].arc(j / 2, j / 2, j / 2 - aDr, 0, 2 * Math.PI), aDY[aC].fill(), aDY[aC]
					.lineWidth = aDr, aDY[aC].fillStyle = bE.qO, aDY[aC].strokeStyle = bE.qO, aDY[aC].strokeStyle = __fx.utils.lineColor(bE.qO), aDY[aC].beginPath(), aDY[aC].arc(j / 2, j / 2, j / 2 - aDr, 0, 2 * Math.PI), aDY[aC].stroke(), a2C(
						aDY[aC], 0, 0, j, aDr, .3, 0 === aC)
			}()
	}, this.a25 = function() {
		return -jN / ix
	}, this.a26 = function() {
		return -jO / ix
	}, this.oM = function(aDe, j3) {
		jN = ix * aDe - j3
	}, this.oN = function(aDf, j4) {
		jO = ix * aDf - j4
	}, this.hz = function(aDd, aAZ) {
		return aE.oA || ! function(aDd, aAZ) {
			return Math.pow(aDd - (fs + j / 2), 2) + Math.pow(aAZ - (fu + j / 2), 2) < j * j / 4 || Math.pow(aDd - (fs + j / 2), 2) + Math.pow(aAZ - (fu + 2 * j), 2) < j * j / 4
		}(aDd, aAZ) || bm.buffer.data[8].value ? (aI.oP() && (this.oC = !0, aDZ = aDd, aDa = aAZ), !1) : aAZ < fu + 1.25 * j ? this.a5b(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a5b(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a5Y = function(aDd, aAZ) {
		var aDg, aDh, j6, j9;
		return !aI.oP() || (aDg = jN, aDh = jO, jN += j6 = aDZ - aDd, jO += j9 = aDa - aAZ, ag.a5Y(j6, j9), this.aDi(), aDZ = aDd, aDa = aAZ, aDg !== jN) || aDh !== jO
	}, this.a5b = function(mJ, mK, deltaY) {
		var oJ;
		if (aI.oP()) {
			if (0 < deltaY) oJ = (oJ = 500 / (500 + deltaY)) < .5 ? .5 : oJ;
			else {
				if (!(deltaY < 0)) return !1;
				oJ = 2 < (oJ = (500 - deltaY) / 500) ? 2 : oJ
			}
			this.aDj(mJ, mK, oJ), bi.e2 = !0
		}
		return !0
	}, this.aDj = function(fs, fu, fP) {
		var a6R;
		fP = a6R = (a6R = 1024 < (a6R = fP) * ix ? 1024 / ix : a6R) * ix < .125 ? .125 / ix : a6R, ag.zoom(fP, fs, fu),
			function(a6R, mJ, mK) {
				ix *= a6R, jN = (jN + mJ) * a6R - mJ, jO = (jO + mK) * a6R - mK, aT.aDi()
			}(fP, fs, fu)
	}, this.aDi = function() {
		var aDm = i.j / 16,
			aDn = 0,
			aDo = i.k / 16,
			aDp = 0;
		jN < -i.j + aDm && (aDn = -i.j + aDm - jN), jN > ix * bV.fw - aDm && (aDn = ix * bV.fw - aDm - jN), jO < -i.k + aDo && (aDp = -i.k + aDo - jO), jO > ix * bV.fx - aDo && (aDp = ix * bV.fx - aDo - jO), jN += aDn, jO += aDp, bd.oO(), ag.aDq(
			aDn, aDp)
	}, this.aD1 = function() {
		fs = i.j - j - bf.gap, fu = Math.floor(i.k / 2 - 1.25 * j)
	}, this.z8 = function() {
		bm.buffer.data[8].value || (z9.drawImage(aDX[0], fs, fu), z9.drawImage(aDX[1], fs, Math.floor(fu + 3 * j / 2)))
	}
}

function cT() {
	var h, aDs, aDt, aDu, gap, aDv, aDw, aDx, aDy, aDz, a9u, aE0, hq, aE1, aBz, aE2, aE3;

	function aE7() {
		aDu = Math.floor(.2 * (a1.a2.iv() ? .07 : .035) * i.iw), aDu = aAW(a1.a2.iv() ? 3 : 1, aDu);
		var aEA = i.j / (h.length + gap);
		aDu = aDu < aEA ? aEA : aDu, aBz = Math.floor((1 - gap) * aDu), aDs = 0, aEB()
	}

	function aEB() {
		aDs = (aDs = aDs < -20 ? -20 : aDs) > (h.length - 15) * aDu ? (h.length - 15) * aDu : aDs, aDw = Math.floor(aDs / aDu), aDx = (aDx = aDw + Math.floor(i.j / aDu)) > h.length - 1 ? h.length - 1 : aDx, aDw = (aDw = aDx < aDw ? aDx : aDw) < 0 ?
			0 : aDw;
		var lz = aDx;
		aDv = aDt / h[lz];
		for (var aC = aDx - 1; aDw <= aC; aC--) h[aC] > h[lz] && (lz = aC, aDv = aDt / Math.pow(h[aC], aE1))
	}

	function aEE(fs) {
		fs = Math.floor((aDs + i.j - fs - gap * aDu) / aDu);
		return (fs = fs < -1 ? -1 : -1 === fs ? 0 : fs > h.length - 1 ? -1 : fs) !== aDy && (aDy = fs, -1 === aE2 && 0 === aDy && aU.aE4 && (aE2 = setInterval(aEF, 100)), 1)
	}

	function aEG(aC) {
		var aEI = Math.floor(aDv * Math.pow(h[aC], aE1));
		z9.fillRect(aDs + i.j - (aC + 1) * aDu, i.k - aEI, aBz, aEI)
	}

	function aEF() {
		var hJ;
		0 !== (aDy = 8 === ab.a5B() ? -1 : aDy) ? (aE3 = (new Date).getTime(), clearInterval(aE2), aE2 = -1) : (hJ = h[1] / 864e3, -1 !== aE3 && (hJ += ((new Date).getTime() - aE3) * h[1] / 864e5, aE3 = -1), 0 < hJ && (h[0] += Math.floor(hJ), bi
			.e2 = !0))
	}
	this.aE4 = !1, this.dv = function() {
		aE3 = aE2 = -1, aDy = -(aE1 = 1), this.aE5 = !1, hq = 0, aE0 = new Date, aDs = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aDt = Math.floor(.15 * i.k), aDz = (aDz = Math.floor((a1.a2.iv() ? .018 : .0137) * i.iw)) < 2 ? 2 : aDz, a9u = bD.tc.vB(1, aDz), aE7()
	}, this.aE8 = function(aE9) {
		var aC;
		for (this.aE4 = !0, aC = 0; aC < aE9.length; aC++) h.unshift(aE9[aC]);
		aE7(), bi.e2 = !0
	}, this.aEC = function() {
		aEB()
	}, this.a5Y = function(fs, fu) {
		fu > i.k - .6 * aDt ? this.aE5 ? fs !== hq && (aDs += fs - hq, hq = fs, aEB(), aEE(fs), this.aE5 = -1 !== aDy, bi.e2 = !0) : aEE(fs) && (bi.e2 = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aDy && (this.aE5 = !1, aDy = -1, bi.e2 = !0)
	}, this.a5b = function(fs, deltaY) {
		-1 !== aDy && (aDs += Math.floor(deltaY), aEB(), aEE(fs), bi.e2 = !0)
	}, this.hz = function(fs, fu) {
		this.a5Y(fs, fu), -1 !== aDy && (hq = fs, this.aE5 = !0)
	}, this.a5x = function() {
		-1 !== aDy && (this.aE5 = !1)
	}, this.z8 = function() {
		z9.fillStyle = bE.qR;
		for (var aEJ, month, em, vr, aEM, aEN, o8, aEO, aEP, aC = aDx; aDw <= aC; aC--) aEG(aC);
		this.aE4 && 0 === aDw && (z9.fillStyle = bE.r0, aEG(0)), -1 !== aDy && (z9.fillStyle = bE.qQ, aEG(aDy)), -1 !== aDy && (z9.font = a9u, bD.tc.textBaseline(z9, 2), (em = new Date).setTime(aE0.getTime() - 1e3 * aDy * 60 * 60 * 24), month =
			"month", aEJ = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(em), aEJ = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(em)), aEJ = aEJ + ", " + em.getUTCDate() + " " + month + " " + em.getFullYear(), month = 1 === h[aDy] ? L(126) : L(127), month = bD.pa.a3I(h[aDy]) + " " + month, em = Math.floor(z9.measureText(aEJ).width), vr = Math
			.floor(z9.measureText(month).width), aEM = Math.floor(.5 * (em + aDz)), aEN = (aEN = aDs + i.j - (aDy + 1) * aDu) < aEM ? aEM : aEN > i.j - aEM ? i.j - aEM : aEN, o8 = i.k - Math.floor(aDv * Math.pow(h[aDy], aE1)), aEO = Math
			.floor(1.1 * aDz), aEP = o8 > i.k - aEO ? i.k - aEO : o8, z9.fillStyle = bE.qL, z9.fillRect(i.j - vr - aDz, aEP - aEO, vr + aDz, aEO), z9.fillRect(aEN - aEM, i.k - aEO, em + aDz, aEO), z9.fillStyle = bE.qO, bD.tc.textAlign(z9, 2),
			z9.fillText(month, Math.floor(i.j - .5 * aDz), aEP), bD.tc.textAlign(z9, 1), z9.fillText(aEJ, aEN, i.k), z9.strokeStyle = bE.qS, z9.lineWidth = 1, z9.beginPath(), z9.moveTo(0, o8), z9.lineTo(i.j, o8), z9.closePath(), z9.stroke())
	}
}

function cU() {
	var a9u, j, fu, aEQ, aER, aES, canvas, p4, aBm, t8, aET, aEU, aEV, aEW;
	this.fs = 0, this.k = 0, this.dv = function() {
		aES = aE.a8Z, aEU = "rgba(0,100,0,0.8)", aEV = "rgba(150,0,0,0.8)", aBm = aET = !0, t8 = ah.hn[aE.fV], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.iv() ? .305 : .24) * i.iw), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), a9u = bD.tc.vB(1, Math.floor(.8 * this.k)), aER = bD.tc.vB(1, Math.floor(.45 * this.k)), aEW = Math.floor(.5 * this.k), bV
			.aBe.font = a9u, fu = bf.gap, aEQ = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, p4 = canvas.getContext("2d", {
				alpha: !0
			}), bD.tc.textBaseline(p4, 1), bD.tc.textAlign(p4, 1), this.aEX()
	}, this.aCN = function() {
		return a1.a2.iv() && i.j < 1.2 * i.k
	}, this.aD1 = function() {
		this.aCN() ? this.fs = i.j - j - bf.gap : this.fs = Math.floor(aW.aEY() + (i.j - aW.aEY() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.nS = function() {
		aBm && (aBm = !1, this.aEX())
	}, this.aEX = function() {
		p4.font = a9u, p4.clearRect(0, 0, j, this.k), p4.fillStyle = aET ? aEU : aEV, p4.fillRect(0, 0, j, this.k), p4.fillStyle = bE.qQ;
		var ev = this.aEZ(),
			aEb = (this.aEa(), p4.fillStyle = ah.hn[aE.fV] >= af.kk(aE.fV) ? bE.qx : bE.qO, bD.pa.a3I(t8)),
			aEb = (p4.fillText(aEb, Math.floor(j / 2), aEW), p4.measureText(aEb).width),
			aEc = (p4.font = aER, p4.fillStyle = 9 === ev ? bE.rc : bE.qO, af.aEd),
			aEe = "+" + aEc,
			vr = p4.measureText(aEe).width,
			aEf = Math.floor(this.k / 12),
			aEb = .5 * (j + aEb) + aEf;
		(aEb + vr + aEQ <= j || 1e3 <= aEc && (aEe = "+" + Math.floor(aEc / 1e3) + "K", aEb + (vr = p4.measureText(aEe).width) + aEQ <= j)) && p4.fillText(aEe, Math.floor(aEb + .5 * vr), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && p4.fillText(9 - ev, Math.floor(2 * aEQ + aEf), Math.floor(.3 * this.k)), p4.fillStyle = bE.qO, __fx.utils.smoothFrame(p4, j, this.k, 1, 0, 0, this.k / 12) || (p4.fillRect(0, 0, j, 1), p4.fillRect(0, 0, 1, this
				.k), p4.fillRect(0, this.k - 1, j, 1), p4.fillRect(j - 1, 0, 1, this.k))
	}, this.aEZ = function() {
		var ev = bi.l1() % 100,
			a17 = (ev = 9 - bO.gC(ev -= ev % 10, 10), Math.floor(ev * (this.k - aEQ) / 9));
		return p4.fillRect(0, a17, aEQ, this.k - a17), p4.fillRect(j - aEQ, a17, aEQ, this.k - a17), ev
	}, this.aEa = function() {
		p4.fillRect(aEQ, this.k - aEQ, Math.floor((j - 2 * aEQ) * ah.hn[aE.fV] / aES), aEQ)
	}, this.eq = function() {
		var hJ = aE.fV;
		bD.h7.hy(hJ) && (hJ = ah.hn[hJ] - ah.a7c[hJ], t8 !== hJ ? (aES = aAW(hJ, aES), aET = t8 < hJ && 10 <= hJ, t8 = hJ, aBm = !0) : bi.l1() % 10 == 9 && (aBm = !0))
	}, this.z8 = function() {
		0 === ah.ng[aE.fV] || aE.iA || 2 === ah.a7T[aE.fV] || z9.drawImage(canvas, this.fs, fu)
	}
}

function cV() {
	var aEg, aEh, aEi, aEj, aEk, aEl, aEm, aEn, aEo, aEp, aEq, aEr, aEs, aEt, aEu, aEv, aEw, aEx, aEy, aEz, aF0, aF1, position, aF2, aF3, aF4, aF5, aF6, aF7 = 1,
		aF8 = 1,
		aF9 = "";
	var leaderboardHasChanged = true;
	this.playerPos = aE.fV;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kp[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kp[aE.fV]);
	}

	function aFB() {
		aEm.clearRect(0, 0, aEg, aCc),
			aEm.fillStyle = aF6 ? bE.rK : bE.rG,
			aEm.fillRect(0, 0, aEg, aEr),
			aEm.fillStyle = bE.qK,
			aEm.fillRect(0, aEr, aEg, aCc - aEr);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aEk)
				position = (rivalsCount > aEk ? rivalsCount : aEk) - aEk;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kp[aE.fV]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aF1 = -1;
		if (__fx.leaderboardFilter.enabled && aF1 >= __fx.leaderboardFilter.filteredLeaderboard.length) aF1 = -1;
		if (__fx.leaderboardFilter.showingRivals && aF1 + position >= __fx.leaderboardFilter.rivalsData.length) aF1 = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= position && ownClanIndex < position + aEk) aFD(ownClanIndex - position, bE.qn);
			})() :
			(playerPos >= position && aFD(playerPos - position, bE.qn),
				0 !== kp[aE.fV] && 0 === position && aFD(0, bE.rT))
		),
		-1 !== aF1 && aFD(aF1, bE.qP),
			aEm.fillStyle = bE.qK,
			//console.log("drawing", aF1),
			aEm.clearRect(0, aCc - __fx.leaderboardFilter.tabBarOffset, aEg, __fx.leaderboardFilter.tabBarOffset);
		aEm.fillRect(0, aCc - __fx.leaderboardFilter.tabBarOffset, aEg, __fx.leaderboardFilter.tabBarOffset);
		aEm.fillStyle = __fx.utils.lineColor(bE.qO),
			aEm.fillRect(0, aEr, aEg, 1),
			aEm.fillRect(0, aCc - __fx.leaderboardFilter.tabBarOffset, aEg, 1),
			__fx.leaderboardFilter.drawTabs(aEm, aEg, aCc - __fx.leaderboardFilter.tabBarOffset, bE.qn),
			__fx.utils.smoothFrame(aEm, aEg, aCc, bf.a2z) || (
				aEm.fillRect(0, 0, aEg, bf.a2z),
				aEm.fillRect(0, 0, bf.a2z, aCc),
				aEm.fillRect(aEg - bf.a2z, 0, bf.a2z, aCc),
				aEm.fillRect(0, aCc - bf.a2z, aEg, bf.a2z)),
			aEm.fillStyle = bE.qO, aEm.font = aEh, bD.tc.textBaseline(aEm, 1), bD.tc.textAlign(aEm, 1), aEm.fillText(aF9, Math.floor((aEg + aEr - 22) / 2), Math.floor(aEp + aEi / 2));
		__fx.playerList.drawButton(aEm, 12, 12, aEr - 22);
		var g4, hK = playerPos < position + aEk - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) hK = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aEk; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ah.hZ[repId], ah.a2T[repId], ah.a7T[repId]]);
					ah.hZ[repId] = rivalsEntry.territory;
					ah.a2T[repId] = "[" + rivalsEntry.clan + "]";
					ah.a7T[repId] = 0;
				}
				for (aEm.font = aEj, bD.tc.textAlign(aEm, 0), g4 = aEk - hK; 0 <= g4; g4--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[g4 + position];
					if (rivalsEntryLeft !== undefined)
						aFE(rivalsEntryLeft.representativeId), aFF(g4, g4 + position, rivalsEntryLeft.representativeId);
				}
				for (bD.tc.textAlign(aEm, 2), g4 = aEk - hK; 0 <= g4; g4--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[g4 + position];
					if (rivalsEntryRight !== undefined)
						aFE(rivalsEntryRight.representativeId), aFG(g4, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hZ[entry[0]] = entry[1];
					ah.a2T[entry[0]] = entry[2];
					ah.a7T[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aEk)
				position = (result.length > aEk ? result.length : aEk) - aEk;
			//if (position >= result.length) position = result.length - 1;
			for (aEm.font = aEj, bD.tc.textAlign(aEm, 0), g4 = aEk - hK; 0 <= g4; g4--) {
				const pos = result[g4 + position];
				if (pos !== undefined)
					aFE(mf[pos]), aFF(g4, pos, mf[pos]);
			}
			for (bD.tc.textAlign(aEm, 2), g4 = aEk - hK; 0 <= g4; g4--) {
				const pos = result[g4 + position];
				if (pos !== undefined)
					aFE(mf[pos]), aFG(g4, mf[pos]);
			}
		} else {
			for (aEm.font = aEj, bD.tc.textAlign(aEm, 0), g4 = aEk - hK; 0 <= g4; g4--)
				aFE(mf[g4 + position]), aFF(g4, g4 + position, mf[g4 + position]);
			for (bD.tc.textAlign(aEm, 2), g4 = aEk - hK; 0 <= g4; g4--)
				aFE(mf[g4 + position]), aFG(g4, mf[g4 + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == hK && (aFE(aE.fV), bD.tc.textAlign(aEm, 0), aFF(aEk - 1, kp[aE.fV], aE.fV), bD.tc.textAlign(aEm, 2), aFG(aEk - 1, aE.fV)), 0 === position && (hK = .7 * aEs / ac.get(4).height, aEm.setTransform(
			hK, 0, 0, hK, Math.floor(aEt + .58 * aEs + .5 * hK * ac.get(4).width), Math.floor(aEp + aEi + .4 * aEs)), aEm.imageSmoothingEnabled = !0, aEm.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aEm.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aFE(player) {
		aE.ie && (aEm.fillStyle = bj.aFI[bj.aFJ[player]])
	}

	function aFD(aC, aFK) {
		aEm.fillStyle = aFK, aC = aEk - 1 < aC ? aEk - 1 : aC;
		aFK = Math.floor((aC === aEk - 1 ? 2 : 0 === aC ? 1.15 : 1) * aEs), aFK = aC === aEk - 2 ? Math.floor(aEr + 9.15 * aEs) - Math.floor(aEr + 8.15 * aEs) : aFK;
		aEm.fillRect(0, Math.floor(aEr + (aC + (0 === aC ? 0 : .15)) * aEs), aEg, aFK)
	}

	function aFF(a0D, a7p, aC) {
		aEm.fillText(aEx[a7p], aEt, Math.floor(aEp + aEi + (a0D + .5) * aEs)), 1 === ah.a7T[aC] && (aEm.font = "italic " + aEj);
		a7p = Math.floor(aEp + aEi + (a0D + .5) * aEs);
		aEm.fillText(ah.a2T[aC], aEu, a7p), 0 !== ah.a7T[aC] && (aEm.font = aEj), aC < aE.l4 && 2 !== ah.a7T[aC] || aEm.fillRect(aEu, a7p + .35 * aF7, aEw[aC], Math.max(1, .1 * aF7))
	}

	function aFG(a0D, aC) {
		aEm.fillText(ah.hZ[aC], aEv, Math.floor(aEp + aEi + (a0D + .5) * aEs))
	}
	this.dv = function() {
		var aC;
		for (u.z.ve[0] = 0, aF5 = aF4 = aF2 = 0, aF6 = aF3 = !1, aF1 = -1, aEk = a1.a2.iv() ? 6 : 10, aF8 = (position = 0) === (aF8 = bm.buffer.data[11].value) ? 10 : 1 === aF8 ? 5 : 1, aF0 = !1, aEy = new Uint16Array(aEk + 1), aEz =
			new Uint32Array(aEk + 1), aEo = aE.fi, mf = new Uint16Array(aEo), kp = new Uint16Array(aEo), aC = aEo - 1; 0 <= aC; aC--) mf[aC] = aC, kp[aC] = aC;
		this.resize(!0), aEw = new Uint16Array(aE.fi);
		var aFA = Math.floor(aEg - aEu - aEt - aEn);
		for (aEx = new Array(aE.fi), aEm.font = aEj, aC = aE.fi - 1; 0 <= aC; aC--) aEx[aC] = aC + 1 + ".", ah.a2T[aC] = bD.p4.a77(ah.a4j[aC], aEj, aFA), aEw[aC] = Math.floor(aEm.measureText(ah.a2T[aC]).width);
		aFB()
	}, this.resize = function(dv) {
		if (aCc = a1.a2.iv() ? (aEg = Math.floor(.335 * i.iw), Math.floor(aEk * aEg / 8)) : (aEg = Math.floor(.27 * i.iw), Math.floor(aEk * aEg / 10)), aEg = Math.floor(.97 * aEg), (aEl = document.createElement("canvas")).width = aEg, aEl
			.height = aCc, aEm = aEl.getContext("2d", {
				alpha: !0
			}), aEp = .025 * aEg, aEi = .16 * aEg, aEq = 0 * aEg, aEr = Math.floor(.45 * aEp + aEi), aEs = (aCc - aEi - 2 * aEp - aEq) / aEk,
			aEl.height = aCc += aEs, __fx.leaderboardFilter.tabBarOffset = Math.floor(aEs * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aCc - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aEg,
			aEh = bD.tc.vB(1, Math.floor(.55 * aEi)), aF7 = Math.floor((a1.a2.iv() ? .67 : .72) * aEs), aEj = bD.tc.vB(0, aF7), aEm.font = aEj, aEt = Math.floor(.04 * aEg), aEu = Math.floor((a1.a2.iv() ? .195 : .18) * aEg), aEn = Math.floor(aEm
				.measureText("00920600").width), aEm.font = aEh, aEv = aEg - aEt, !dv) {
			aEm.font = aEj;
			for (var aC = aE.fi - 1; 0 <= aC; aC--) aEw[aC] = Math.floor(aEm.measureText(ah.a2T[aC]).width);
			aFB()
		}
		aF9 = bD.p4.a77(L(128), aEh, .96 * aEg)
	}, this.aEY = function() {
		return aEg
	}, this.nS = function(c3, aFC) {
		(aFC || aF0 && (c3 || bi.l1() % aF8 == 0)) && (aF0 = !1, aFB())
	}, this.eq = function() {
		! function() {
			for (var g4 = aEo - 1; 0 <= g4; g4--) 0 === ah.ng[mf[g4]] && ! function(g4) {
				var aFS = mf[g4];
				aEo--;
				for (var aC = g4; aC < aEo; aC++) mf[aC] = mf[aC + 1], kp[mf[aC]] = aC;
				mf[aEo] = aFS, kp[mf[aEo]] = aEo
			}(g4)
		}();
		for (var aFQ, oP = aEo - 1, g4 = 0; g4 < oP; g4++) ah.hZ[mf[g4]] < ah.hZ[mf[g4 + 1]] && (aFQ = mf[g4], mf[g4] = mf[g4 + 1], mf[g4 + 1] = aFQ, kp[mf[g4]] = g4, kp[mf[g4 + 1]] = g4 + 1);
		! function() {
			for (var em = aF0, hK = (aF0 = !0, kp[aE.fV] >= aEk - 1 ? aEk - 2 : aEk - 1), aC = hK; 0 <= aC; aC--)
				if (aEy[aC] !== mf[aC] || aEz[aC] !== ah.hZ[mf[aC]]) return;
			(hK != aEk - 2 || aEy[aEk] === kp[aE.fV] && aEz[aEk] === ah.hZ[aE.fV]) && (aF0 = em)
		}();
		for (var aC = aEk - 1; 0 <= aC; aC--) aEy[aC] = mf[aC], aEz[aC] = ah.hZ[mf[aC]];
		aEy[aEk] = kp[aE.fV], aEz[aEk] = ah.hZ[aE.fV];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hz = function(fs, fu) {
		if (a2y(fs, fu)) {
			if (__fx.utils.isPointInRectangle(fs, fu, bf.gap + 12, bf.gap + 12, aEr - 22, aEr - 22)) __fx.playerList.display(ah.a4j);
			else {
				if (fu - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fs - bf.gap);
				fs = aFU(fu);
				0 <= fs ? (aF2 = bi.el, aF3 = !0, aF4 = aF5 = fs, bM.a6B() && (fs = aDN(-1, aF5, aEk), aF1 !== (fs = fs === aEk ? -1 : fs)) && (aF1 = fs, aFB(), bi.e2 = !0)) : (aF6 && (aF6 = !1, aFB(), bi.e2 = !0), u.v(10, 0, new aFV({
					aFW: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aFB(), bi.e2 = !0
	};

	function aFU(fu) {
		return (fu -= bf.gap + aEr) < 0 ? Math.floor(fu / aEs) - 1 : fu < (aEk - 1) * aEs ? Math.floor(fu / aEs) : fu < aCc - aEr ? aEk - 1 : (fu -= aCc - aEr, aEk + Math.floor(fu / aEs))
	}

	function a2y(fs, fu) {
		return fs >= bf.gap && fs < bf.gap + aEg && fu >= bf.gap && fu < bf.gap + aCc
	}
	this.a5Y = function(fs, fu) {
		var em, aFT;
		if (__fx.utils.isPointInRectangle(fs, fu, bf.gap + 12, bf.gap + 12, aEr - 22, aEr - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fs, fu, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fs - bf.gap)) return aFT = aFU(fu), fs = a2y(fs, fu), fu = !(!(aFT < 0 && fs) || bM.a6B()), aF3 ? (em = position, (position = aDN(0, position += aF4 - aFT, aE.fi - aEk)) !== em ? (aF6 = fu,
			aFT = aDN(-1, aF4 = aFT, aEk), aF1 = aFT = aFT !== aEk && fs ? aFT : -1, aFB(), bi.e2 = !0) : aF6 !== fu && (aF6 = fu, aFB(), bi.e2 = !0), !0) : (aFT = (aFT = aDN(-1, aFT, aEk)) === aEk || !fs || bM.a6B() ? -1 : aFT, (aF1 !==
			aFT || aF6 !== fu) && (aF1 = aFT, aF6 = fu, aFB(), bi.e2 = !0))
	}, this.a5x = function(fs, fu) {
		if (!aF3) return !1;
		aF3 = !1;
		var aFT = aFU(fu);
		var isEmptySpace = false;
		return bM.a6B() && -1 !== aF1 && (aF1 = -1, aFB(), bi.e2 = !0), bi.el - aF2 < 350 && aF5 === aFT && -1 !== (aFT = (aFT = aDN(-1, aFT, aEk)) !== aEk && a2y(fs, fu) ? aFT : -1) && (fs = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aFT + position] === undefined, __fx.leaderboardFilter.rivalsData[aFT + position]?.representativeId ?? aE.fV) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), mf[__fx.leaderboardFilter.filteredLeaderboard[aFT + position] ?? (isEmptySpace = true, kp[aE.fV])]) : mf[aFT + position]),
			aFT === aEk - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kp[aE.fV]) >=
			position + aEk - 1 && (fs = aE.fV), !isEmptySpace && aE.ie && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fs, ah.a4j, aE.lO), 0 === ah.ng[fs] || isEmptySpace || aE.iA && !aE.lO && !aE.hu && !aE
			.hv && fs !== aE.fV || aI.o2(fs, 800, !1, 0)), !0
	}, this.a5b = function(fs, fu, deltaY) {
		var aFZ;
		return !(aF3 || aE.oA || (aFZ = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a2y(fs, fu)) || (fs = (fs = aDN(-1, aFU(fu), aEk)) === aEk || bM.a6B() ? -1 : fs, 0 < deltaY ? position < aE.fi - aEk && (position += Math.min(aE.fi - aEk -
			position, aFZ), aF1 = fs, aFB(), bi.e2 = !0) : 0 < position && (position -= Math.min(position, aFZ), aF1 = fs, aFB(), bi.e2 = !0), 0))
	}, this.z8 = function() {
		z9.drawImage(aEl, bf.gap, bf.gap)
	}
}

function cW() {
	var canvas, p4, fs, fu, aEI, aFa, gap, aFb, fontSize, aFc, aFd, aFe, aFf, aFg, aFh, aFi, aFj, aFk;

	function aFo() {
		p4.clearRect(0, 0, aX.j, aX.k), p4.fillStyle = bE.qL, p4.fillRect(0, 0, aX.j, aX.k), p4.fillStyle = bE.qi, fP = 0 < aFi ? aFi : aFf[4] / 1e4, p4.fillRect(0, aX.k - aEI - 1, Math.floor(fP * aX.j), aEI), p4.fillStyle = bE.qO, p4.fillStyle =
			__fx.utils.lineColor(bE.qO), __fx.utils.smoothFrame(p4, aX.j, aX.k) || (p4.fillRect(0, 0, aX.j, 1), p4.fillRect(0, 0, 1, aX.k), p4.fillRect(aX.j - 1, 0, 1, aX.k), p4.fillRect(0, aX.k - 1, aX.j, 1)), p4.fillRect(0, aX.k - aEI - 1, aX.j,
			1), p4.fillStyle = bE.qO;
		for (var fP, aFq, em = 0, aC = 0; aC < aFe.length; aC++) aFg[aC] ? (bD.tc.textAlign(p4, 0), aFq = Math.floor((aFa - aEI + 2 * aFb) * (aC - em + 1) / (aFe.length + 1) - .7 * aFb), p4.fillText(aFe[aC], gap, aFq), bD.tc.textAlign(p4, 2), 5 ===
			aC && 0 !== ah.ng[aE.fV] && ah.hn[aE.fV] >= af.kk(aE.fV) ? (p4.fillStyle = bE.rR, p4.fillText(aFm(aC), aX.j - gap, aFq), p4.fillStyle = bE.qO) : p4.fillText(aFm(aC), aX.j - gap, aFq)) : em++
	}

	function aFm(aC) {
		return aC < 3 ? aFf[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.pa.a8C(aFf[aC] / 100, 2) : aC < 7 ? bD.pa.a3I(aFf[aC]) : aC === 7 ? aX.aFr(aFf[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hZ, aE.fV) : __fx.utils.getDensity(aE.fV)
	}

	function aFl() {
		ah.hZ[aE.fV] !== aFf[6] && (aFf[6] = ah.hZ[aE.fV], aFc++)
	}
	this.dv = function() {
		aFi = aFj = 0, (aFd = new Array(8))[0] = L(129), aFd[1] = aE.lO ? L(33) : L(130), aFd[2] = L(131), aFd[3] = L(132), aFd[4] = L(133), aFd[5] = L(134, 0, "Interest"), aFd[6] = L(135), aFd[7] = L(136),
			aFd.push("Max Troops", "Density"), // add aFd
			(aFe = new Array(aFd.length)).fill(""), (aFf = new Array(aFd.length))[0] = aE.lO ? 0 : aE.l4, aFf[1] = aE.lO ? am.la : aE.lQ, aFf[2] = aE.a41, aFf[3] = 0, aFf[4] = bO.gC(1e4 * ah.hZ[0], Math.max(aE.ko, 1)), aFf[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.gC(700 * aE.data.iIncomeValue, 64) : bO.gC(700 * aE.data.iIncomeData[aE.fV], 64), aFf[6] = 0, aFl(), aFf[7] = 0, aFh = aFm(6), (aFg = new Array(aFd.length)).fill(!0), aFk = 0, aFk =
			aE.lO ? (aFg[0] = !1, aFg[2] = !1, aFg[3] = !1, 3) : (aFg[3] = !1, 1), aFc = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.iv() ? .1646 : .126) * 1.25 * i.iw), this.k = Math.floor(1.18 * this.j), aEI = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aFb = .04 * this.j, aFa = this.k, this.k -= Math.floor(aFk * (this.k -
			2 * aEI) / aFd.length), fontSize = Math.floor(.7 * (aFa - aEI) / aFd.length);
		var a9u = bD.tc.vB(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(a9u, j) {
				for (var aC = 0; aC < aFe.length; aC++) aFe[aC] = bD.p4.a77(aFd[aC], a9u, j)
			}((p4 = canvas.getContext("2d", {
				alpha: !0
			})).font = a9u, .575 * this.j), bD.tc.textBaseline(p4, 1), p4.lineWidth = 1, this.a8R(), this.aD1(), aV.aD1(), aFo()
	}, this.aD1 = function() {
		fs = i.j - this.j - bf.gap
	}, this.aFp = function() {
		fu = bf.gap
	}, this.a8R = function() {
		fu = bf.gap + (aV.aCN() && 0 !== ah.ng[aE.fV] && !aE.iA ? aV.k + bf.gap : 0)
	}, this.nS = function(c3) {
		(c3 || 100 <= aFc) && (aFc = 0, aFo())
	}, this.a9E = function() {
		return aFf[7]
	}, this.aFr = function(value) {
		var lz = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lz) / 1e3);
		return value < 10 ? lz + ":0" + value : lz + ":" + value
	}, this.eq = function() {
		var aG2, per;
		aFg[0] && aE.a42 - aE.a41 !== aFf[0] && (aFf[0] = aE.a42 - aE.a41, aFc++), am.la - aFf[0] !== aFf[1] && (aFf[1] = am.la - aFf[0], aFc++), this.nJ(), (aG2 = af.aG3(aE.fV)) !== aFf[5] && (aFf[5] = aG2, aFc++), aFl(), aFf[7] += bi.aG4, aG2 =
			aFm(7), aFh !== aG2 && (aFh = aG2, aFc += 100), aG2 = aE.ie ? bk.lb() : ah.hZ[mf[0]], per = bO.gC(1e4 * aG2, Math.max(aE.ko, 1)), aFf[3] = aG2, aFf[4] !== per && (aFc++, aFf[4] = per), 8 === aE.lM && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.h7.hy(aC)) return bU.a3d.a3y(), 1;
				return
			}() || aFf[3] < aE.ko || ! function() {
				for (var aC = am.la - 1; 0 <= aC; aC--)
					if (0 < ah.hD[am.lf[aC]].length) return;
				return 1
			}() || bQ.lt.aG1().length || aE.ie && bk.lb(1) < aE.ko || bU.a3d.a3y()
	}, this.nJ = function() {
		aFg[2] && aE.a41 !== aFf[2] && (aFf[2] = aE.a41, aFc += 2 === aE.a3z ? 100 : 1)
	}, this.aFy = function() {
		return aFf[3] === aE.ko
	}, this.aG5 = function(aC) {
		var w7, aG6, em;
		return 2 !== aE.a3z && (aC % 2 == 1 && (aW.nS(1, 1), bi.e2 = !0), aC === aE.a8c ? (aFi = 0, aFo(), !1) : (-1 !== aC || 0 !== aFj) && (aG6 = aFi, aFi = aE.hu ? aC / aE.a8c : (em = performance.now(), 0 <= aC && (w7 = em - 392 * aC, aFj =
			0 === aC || w7 < aFj ? w7 : aFj), 1 < (aFi = (em - aFj) / (392 * aE.a8c)) ? 1 : aFi), aFo(), aFi !== aG6))
	}, this.z8 = function() {
		z9.drawImage(canvas, fs, fu)
	}
}

function cX() {
	var iV, aG7, j, k, aD7, aG8, aG9, aCO, canvas, nt, aGA;

	function a26() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.dv = function() {
		aGA = iV = !1, aD7 = .61, aG8 = .07, aG9 = .09, nt = aCO = k = 0
	}, this.resize = function() {
		var p4, o7, ev, aGF, aGG, a9z;
		iV && (j = aGB(j = a1.a2.iv() ? Math.floor(.69 * i.iw) : Math.floor(.5 * i.iw), aAW(i.j - 2 * bf.gap, 10)), j = aGB(j, Math.floor(3.57 * aAW(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, p4 = canvas.getContext("2d", {
				alpha: !0
			}), o7 = Math.floor(1 + k / 40), p4.clearRect(0, 0, j, k), p4.fillStyle = bE.qL, p4.fillRect(o7, o7, j - 2 * o7, k - 2 * o7), p4.lineJoin = "bevel", p4.lineWidth = 2 * o7, p4.strokeStyle = bE.qO, __fx.utils.smoothFrame(p4, j - 2 *
				o7, k - 2 * o7, 2 * o7, o7, o7, k / 10) || p4.strokeRect(o7, o7, j - 2 * o7, k - 2 * o7), p4.imageSmoothingEnabled = !1, ev = ac.get(aG7), aGF = ev.width, a9z = (1 === aG7 ? .85 : 21 === aG7 ? .666 : .9) * aD7 * k / (aGG = ev
				.height), p4.setTransform(a9z, 0, 0, a9z, Math.floor((j - a9z * aGF) / 2), Math.floor((k - a9z * aGG) / 2)), p4.drawImage(ev, 0, 0), p4.setTransform(1, 0, 0, 1, Math.floor(j - aG9 * k - aG8 * k - o7), Math.floor(o7 + aG8 *
			k)),
			function(p4, fl) {
				p4.lineWidth = Math.floor(1 + k / 80), p4.strokeStyle = bE.qO, p4.beginPath(), p4.moveTo(0, 0), p4.lineTo(fl, fl), p4.moveTo(0, fl), p4.lineTo(fl, 0), p4.stroke()
			}(p4, Math.floor(aG9 * k)), p4.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(gD, aGD, aCt, aGE) {
		iV || aE.hv || aGE && aGA || (aG7 = aCt ? 21 : gD ? 1 : 2, iV = aGA = !0, this.resize(), aM.ub(), aS.aCo(), nt = bi.el, aCO = aGD ? 1 : 0)
	}, this.eq = function() {
		!iV || 1 <= aCO || (aCO = 1 < (aCO += 5e-4 * (bi.el - nt)) ? 1 : aCO, nt = bi.el, bi.e2 = !0)
	}, this.hz = function(fs, fu) {
		return !(!iV || aCO <= 0 || (fs -= Math.floor((i.j - j) / 2), fu -= a26(), fs < 0) || fu < 0 || j < fs || k < fu || (j - k / 3 < fs && fu < k / 3 && (iV = !1, bi.e2 = !0), 0))
	}, this.z8 = function() {
		!iV || aCO <= 0 || (z9.globalAlpha = aCO, z9.drawImage(canvas, Math.floor((i.j - j) / 2), a26()), z9.globalAlpha = 1)
	}
}

function dY() {
	var aGI, aGJ = new Uint8Array(5),
		aGK = new Uint8Array(5);
	this.aGL = new aGM, this.dv = function() {
		for (var gD = bm.buffer.data[119].value, aC = 0; aC < aGJ.length; aC++) aGJ[aC] = (gD >> 2 * aC) % 4
	}, this.a8p = function() {
		aGI = [L(137), "", L(138, [ba.aGN[28]]), L(139, [ba.aGN[26]]), L(140, [ba.aGN[0]])], this.aGL.dv()
	}, this.eq = function() {
		this.aGL.eq()
	}, this.a9c = function(id) {
		1 < id && bM.u5() || ! function(eU) {
			if (3 === aGJ[eU] || 1 === aGK[eU]) return;
			if (aGK[eU] = 1, !(Math.random() < .6)) {
				aGJ[eU]++;
				for (var gD = 0, aC = 0; aC < aGJ.length; aC++) gD += aGJ[aC] << 2 * aC;
				bm.rv.q1(119, gD)
			}
			return 1
		}(id) || aO.aAc(aGI[id])
	}
}

function aGM() {
	var aGP;
	this.dv = function() {
		aGP = !1
	}, this.eq = function() {
		var hJ;
		if (function() {
				if (!aGP) {
					if (bi.l1() % 30 != 9) return;
					if (!bD.h7.mb(90)) return;
					aGP = !0
				}
				return 1
			}() && (! function() {
				var q5 = aO.aB1(956);
				if (q5) {
					if (bD.h7.m2(q5.player)) return 1;
					aO.aB0(956, 0)
				}
				return
			}() && (-1 === (hJ = (aE.ie ? function() {
				var id = bk.ld(),
					fl = am.la;
				if (bj.lR[id])
					for (var xE = am.lf, fj = bj.fj, aC = 0; aC < fl; aC++) {
						var hJ = xE[aC];
						if (fj[hJ] !== id) return hJ
					} else if (1 < fl) return mf[fl - 1];
				return -1
			} : function() {
				for (var aGX = am.la, ly = am.lf, aGY = kp, aC = 0; aC < aGX; aC++) {
					var hJ = ly[aC];
					if (0 !== aGY[hJ]) return hJ
				}
				return -1
			})()) ? ! function() {
				var q5 = aO.aB1(957);
				if (q5 && q5.aAS) {
					if (ad.fc(q5.aAS.fX << 2)) return 1;
					aO.aB0(957, 0)
				}
				return
			}() : (aO.a2S(0, L(141, [ah.a2T[hJ]]), 956, hJ, bE.qO, bE.qL, -1, !0), 0)))) {
			var fl = ap.ji.mE;
			if (0 !== fl)
				for (var buffer = ap.ji.buffer, aC = 0; aC < fl; aC++) {
					var fX = buffer[aC];
					if (ad.fc(fX << 2)) return void aO.a2S(0, L(142, [bP.ft(fX), bP.fv(fX)]), 957, 0, bE.qO, bE.qL, -1, !0, void 0, {
						g4: 1,
						fX: fX
					})
				}
		}
	}
}

function dZ() {
	this.aGZ = new aGa, this.dv = function() {
		this.aGZ.resize()
	}
}

function aGa() {
	this.resize = function() {
		var aC, aGb = document.head.querySelector("style#ss");
		if (aGb)
			for (aC = aGb.sheet.cssRules.length - 1; 0 <= aC; aC--) aGb.sheet.deleteRule(0);
		else(aGb = document.createElement("style")).id = "ss", document.head.appendChild(aGb);
		var aDE = "::-webkit-scrollbar",
			aGc = bD.tc.tk(bf.vM),
			ih = bD.tc.tk(Math.max(bD.tc.ud(.012), 8));
		try {
			aGb.sheet.insertRule(aDE + "{width:" + ih + ";height:" + ih + ";}", aGb.sheet.cssRules.length), aGb.sheet.insertRule(aDE + "-thumb{background-color:white;}", aGb.sheet.cssRules.length), aGb.sheet.insertRule(aDE +
				"-track{background:" + bE.qK + ";}", aGb.sheet.cssRules.length), aGb.sheet.insertRule(aDE + "-track:horizontal{border-top:" + aGc + " solid white;}", aGb.sheet.cssRules.length), aGb.sheet.insertRule(aDE +
				"-track:vertical{border-left:" + aGc + " solid white;}", aGb.sheet.cssRules.length), aGb.sheet.insertRule(aDE + "-button{display:none;}", aGb.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aGb.sheet.cssRules.length - 1; 0 <= aC; aC--) aGb.sheet.deleteRule(0)
		}
	}
}

function dt() {
	this.data = new aGd, this.aGe = new aGf
}

function aGd() {
	var aGg = [new Int16Array([6, 255, 255, 255, 255, 0, 1, 12, 18, 2, 88, 18, 2, 58, 52, 2, 58, 82, 2, 42, 72, 2, 42, 52, 3, 4])];
	this.get = function(id) {
		return aGg[id]
	}
}

function uV(id) {
	this.canvas = document.createElement("canvas");
	var aGh = this.canvas.getContext("2d"),
		aGi = 0;
	this.resize = function(size) {
		var aGj = Math.max(1, Math.round(size * i.l));
		this.canvas.style.width = this.canvas.style.height = bD.tc.tk(size), aGj !== aGi && (aGi = aGj, this.canvas.width = this.canvas.height = aGj, c1.aGe.z8(aGh, c1.data.get(id), aGj))
	}
}

function aGf() {
	this.z8 = function(io, h, size) {
		var id, pW, oJ = size / 100,
			fl = h.length,
			aC = 0;
		for (io.clearRect(0, 0, size, size), io.lineJoin = "round", io.lineCap = "round"; aC < fl;)
			if (0 === (id = h[aC++])) io.beginPath();
			else if (1 === id) io.moveTo(oJ * h[aC], oJ * h[aC + 1]), aC += 2;
		else if (2 === id) io.lineTo(oJ * h[aC], oJ * h[aC + 1]), aC += 2;
		else if (3 === id) io.closePath();
		else if (4 === id) io.fill();
		else if (5 === id) io.stroke();
		else if (6 === id) pW = "rgba(" + h[aC] + "," + h[aC + 1] + "," + h[aC + 2] + "," + h[aC + 3] / 255 + ")", io.fillStyle = io.strokeStyle = pW, aC += 4;
		else if (7 === id) io.lineWidth = oJ * h[aC], aC += 1;
		else if (8 === id) io.arc(oJ * h[aC], oJ * h[aC + 1], oJ * h[aC + 2], h[aC + 3] * Math.PI / 180, h[aC + 4] * Math.PI / 180), aC += 5;
		else {
			if (9 === id) io.rect(oJ * h[aC], oJ * h[aC + 1], oJ * h[aC + 2], oJ * h[aC + 3]);
			else {
				if (10 !== id) return;
				io.quadraticCurveTo(oJ * h[aC], oJ * h[aC + 1], oJ * h[aC + 2], oJ * h[aC + 3])
			}
			aC += 4
		}
	}
}

function dX() {
	this.aGk = !1, this.oX = !1, this.a8V = !1, this.aGl = [0, 0, 0, 0], this.render = function() {
		var o7, o8, oK, oL;
		this.a8V = this.a8V || this.oX, (this.oX || this.aGk && this.a8V) && (o7 = bd.aGm[0], o8 = bd.aGm[1], oK = bd.aGm[2], oL = bd.aGm[3], o7 = o7 < this.aGl[0] ? this.aGl[0] : o7, o8 = o8 < this.aGl[1] ? this.aGl[1] : o8, oK = oK > this.aGl[
				2] ? this.aGl[2] : oK, oL = oL > this.aGl[3] ? this.aGl[3] : oL, this.oX = !1, this.aGk = !1, o7 === this.aGl[0] && o8 === this.aGl[1] && oK === this.aGl[2] && oL === this.aGl[3] ? this.a8W() : o7 <= oK && o8 <= oL && a8r
			.putImageData(a8s, 0, 0, o7, o8, oK - o7 + 1, oL - o8 + 1))
	}, this.a8W = function() {
		this.a8V && this.aGl[2] >= this.aGl[0] && this.aGl[3] >= this.aGl[1] && a8r.putImageData(a8s, 0, 0, this.aGl[0], this.aGl[1], this.aGl[2] - this.aGl[0] + 1, this.aGl[3] - this.aGl[1] + 1), this.a8V = !1
	}, this.a4B = function() {
		this.aGl[2] >= this.aGl[0] && this.aGl[3] >= this.aGl[1] && a8r.putImageData(a8s, 0, 0, this.aGl[0], this.aGl[1], this.aGl[2] - this.aGl[0] + 1, this.aGl[3] - this.aGl[1] + 1), this.a8V = !1
	}, this.dv = function() {
		var fs, fu;
		this.aGk = !1, this.oX = !1, this.a8V = !1, this.aGl[0] = bV.fw, this.aGl[1] = bV.fx, this.aGl[2] = this.aGl[3] = 0;
		loop: for (fs = 1; fs < bV.fw - 1; fs++)
			for (fu = bV.fx - 2; 1 < fu; fu--)
				if (1 === aGn[ad.a1c(fs, fu) + 2]) {
					this.aGl[0] = fs;
					break loop
				} loop: for (fu = 1; fu < bV.fx - 1; fu++)
			for (fs = bV.fw - 2; 1 < fs; fs--)
				if (1 === aGn[ad.a1c(fs, fu) + 2]) {
					this.aGl[1] = fu;
					break loop
				} loop: for (fs = bV.fw - 2; 0 < fs; fs--)
			for (fu = bV.fx - 2; 1 < fu; fu--)
				if (1 === aGn[ad.a1c(fs, fu) + 2]) {
					this.aGl[2] = fs;
					break loop
				} loop: for (fu = bV.fx - 2; 0 < fu; fu--)
			for (fs = bV.fw - 2; 1 < fs; fs--)
				if (1 === aGn[ad.a1c(fs, fu) + 2]) {
					this.aGl[3] = fu;
					break loop
				}
	}
}

function L(value, aGo, zh, aGp) {
	var pW = "number" == typeof value ? bA.aGq[value] : value;
	if (zh && bA.aGr() && (pW = zh), !aGo) return aGp ? pW.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : pW;
	for (var fl = aGo.length, aC = 0; aC < fl; aC++)
		for (var g4 = 0; g4 < 3; g4++) pW = pW.replace("{" + (10 * g4 + aC) + "}", aGo[aC]);
	return pW
}

function cB() {
	this.data = new aGs;
	var aGt = (new aGu).L84,
		aGw = (this.aGq = aGt, !(this.aGv = "en"));
	this.dv = function() {
		var pW, h;
		aGw = !1, ("en" === (pW = bm.buffer.data[12].value).split("-")[0].toLowerCase() ? (bA.aGq = aGt, bA.aGv = pW, 1) : bm.buffer.data[12].value === bm.buffer.data[145].value && 0 < bm.buffer.data[146].value && (pW = bm.buffer.data[146].value,
			(h = bm.tt.zt(pW, !1)).length === pW) && !!bD.tj.a6h(h) && function(h) {
			for (var fl = h.length, k = 0; k < fl; k++) h[k] = h[k].replace("&#39;", "'");
			var aH2 = bm.tt.zt(fl, !0);
			if (fl !== aH2.length) return !1;
			if (!bD.tj.a6h(aH2)) return !1;
			for (var lz = aGt.length, aE9 = new Array(lz), aH3 = lz === fl, hE = Math.min(fl, lz), aC = 0; aC < lz; aC++)
				if (aE9[aC] = aGt[aC], aC < fl && aH2[aC] === aE9[aC]) aE9[aC] = h[aC];
				else {
					aH3 = !1;
					for (var g5 = 0; g5 < hE; g5++)
						if (aH2[g5] === aE9[aC]) {
							aE9[aC] = h[g5];
							break
						}
				} return bA.aGq = aE9, bA.aGv = bm.buffer.data[12].value, aH3
		}(h)) || (aGw = !0)
	}, this.dx = function() {
		bj.dw(), aF.dw(), bh.dw(), bg.dw(), aP.dv(), br = new eK
	}, this.aGr = function() {
		return this.aGq === aGt || !aGt.length
	}, this.aH4 = function() {
		var aH5;
		return !!aGw && (aGw = !1, 0 !== aGt.length) && (aH5 = bm.buffer.data[12].value, b1.es.aH6(0, aH5.slice(0, 20)), !0)
	}, this.aH7 = function(h) {
		h.length !== aGt.length ? 8 === u.vl && u.a5F().aH8(30, 0, 1) : (this.aGq = h, this.aGv = bm.buffer.data[12].value, bm.rv.q1(145, this.aGv), bm.rv.q1(146, h.length), bm.tt.zz(h, !1), bm.tt.zz(aGt, !0), 8 === u.vl ? u.a5F().aH8(30) : 0 ===
			ab.a5B() && 5 === u.vl && u.z.aH9())
	}, this.aHA = function() {
		var a02, h = navigator.languages;
		return h && h.length ? (a02 = Math.max(bA.data.aHB(h[0]), 0), 1 === h.length ? [a02, a02] : [a02, Math.max(bA.data.aHB(h[1]), 0)]) : [0, 0]
	}
}

function aGs() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aHC = function() {
		for (var aHD = [], h = this.h, fl = h.length, aC = 0; aC < fl; aC++) aHD.push(h[aC]);
		var aHE = bm.buffer.data[12].zh;
		for (aC = 0; aC < fl; aC++)
			if (aHD[aC] === aHE) {
				aHD.splice(aC, 1), fl--;
				break
			} aHD.sort(), fl++, aHD.unshift(aHE);
		try {
			if ("undefined" == typeof Intl) return aHD;
			for (aC = 0; aC < fl; aC++) {
				var pW = new Intl.DisplayNames([aHD[aC]], {
					type: "language"
				}).of(aHD[aC]);
				pW !== aHD[aC] && (aHD[aC] = aHD[aC] + ": " + pW)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aHD
	}, this.aHG = function(aHH) {
		for (var pW = bm.buffer.data[12].value, fl = aHH.length, aC = 0; aC < fl; aC++)
			if (pW === aHH[aC].split(":")[0]) return aC;
		return 0
	}, this.aHB = function(aHI) {
		if (aHI && !(aHI.length < 2)) {
			aHI = aHI.split("-")[0].toLowerCase();
			for (var h = this.h, fl = h.length, aC = 0; aC < fl; aC++)
				if (aHI === h[aC]) return aC
		}
		return -1
	}
}

function aGu() {
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
	var fs, fu, k, we, aHJ, aHK, aHL, aHM, aHN, j, a7L, aHO;
	this.iV = !1, this.dv = function(pW, aHP) {
		if (1 === a1.id && 13 <= a1.eC && a1.eC < 18) return aHP ? void(a7L = pW) : a7L !== pW ? void 0 : void a1.zr.saveString(200, pW);
		aHP && (a7L = pW, (aHO = document.createElement("a")).appendChild(document.createTextNode(a7L)), this.iV = !0, aHO.title = a7L, aHO.target = "_blank", aHO.href = a7L, aHO.style.textAlign = "center", aHO.style.color = bE.qO, aHO.style
			.position = "absolute", aHO.style.padding = "0px", aHO.style.margin = "0px", this.resize(), document.body.appendChild(aHO), bi.e2 = !0)
	}, this.ub = function() {
		return !(!this.iV || (u.removeChild(document.body, aHO), this.iV = !1))
	}, this.hz = function(j3, j4) {
		return !!this.iV && ((j3 < fs || j4 < fu || fs + j < j3 || fu + k < j4 || fs + j - we < j3 && j4 < fu + we) && (bi.e2 = !0, this.iV = !1, u.removeChild(document.body, aHO)), !0)
	}, this.resize = function() {
		var a9u, aHQ;
		this.iV && (aHM = Math.floor(.8 * (a1.a2.iv() ? i.j > i.k ? .6 : .55 : .4) * i.iw), we = Math.floor(.15 * aHM), aHJ = Math.floor(.35 * we), aHK = Math.floor(.5 * we), aHL = Math.floor(2.5 * aHK), k = we + aHJ + 3 * aHK, a9u = bD.tc.vB(1,
			aHJ / i.l), aHN = Math.floor(i.l * aR.measureText(a7L, a9u)), aHQ = j = (aHM < aHN ? aHN : aHM) + 2 * aHL, j = Math.min(j, i.j - 2 * (a1.a2.iv() ? 2 : 1) * bf.gap), a9u = bD.tc.vB(1, j / aHQ * aHJ / i.l), aHN = Math.floor(i
			.l * aR.measureText(a7L, a9u)), fs = Math.floor((i.j - j) / 2), fu = Math.floor((i.k - k) / 2), aHO.style.font = a9u, aHO.style.top = Math.floor((fu + 1.4 * aHK + we) / i.l) + "px", aHO.style.left = Math.floor((fs + (j -
			aHN) / 2) / i.l) + "px")
	}, this.z8 = function() {
		var fxSmooth;
		this.iV && (fxSmooth = __fx.utils.clipRounded(z9, fs, fu, j, k), z9.fillStyle = bE.qL, z9.fillRect(fs, fu + we, j, k - we), z9.fillStyle = bE.re, z9.fillRect(fs, fu, j, we), fxSmooth && z9.restore(), z9.fillStyle = bE.qO, z9.lineWidth =
			bf.a2z, z9.strokeStyle = bE.qO, fxSmooth ? (__fx.utils.strokeRounded(z9, fs, fu, j, k, bf.a2z), z9.fillStyle = __fx.utils.lineColor(bE.qO)) : z9.strokeRect(fs, fu, j, k), z9.fillRect(fs, fu + we, j, bf.a2z), z9.fillStyle = bE.qO,
			z9.font = bD.tc.vB(1, .48 * we), bD.tc.textAlign(z9, 1), bD.tc.textBaseline(z9, 1), z9.fillText(L(143), Math.floor(fs + (j - .5 * we) / 2), Math.floor(fu + .55 * we)), aN.aA6(Math.floor(fs + j - .8 * we), Math.floor(fu + .25 *
				we), Math.floor(.5 * we)), z9.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dz() {
	var gap, aFd, fs = [0, 0, 0, 0, 0],
		fu = [0, 0, 0, 0, 0],
		oJ = [1, 1, 1, 1, 1],
		gD = [!0, !0, !0, !1, !1],
		ev = (this.gY = [!0, !0, !0, !1, !1], null);
	this.aHR = function(a6s, aHS) {
		ev = a6s, gD = aHS, aFd = [bN.aHT, bN.a57, bN.aHU, bN.aHU, bN.aHV], this.dv()
	}, this.dv = function() {
		if (ac.wB()) {
			var aC, vq = Math.floor((a1.a2.iv() ? .261 : .195) * i.iw),
				vr = Math.floor(.9 * vq),
				aD7 = Math.floor(.17 * vr);
			if (gap = a1.a2.iv() ? 2 * bf.gap : bf.gap, oJ[0] = vq / ev[0].width, oJ[1] = vr / ev[1].width, oJ[2] = aD7 / ev[2].height, oJ[3] = aD7 / ev[3].height, oJ[4] = aD7 / ev[4].height, oJ[2] *= 1.7, oJ[3] *= 1.07, fs[0] = gap, fs[1] = gap,
				fs[2] = gap, fs[3] = gap, fs[4] = Math.floor(2 * gap + oJ[3] * ev[3].width), fu[0] = gap, fu[1] = fu[0] + gap + oJ[0] * ev[0].height, fu[2] = fu[1] + gap + oJ[1] * ev[1].height, fu[3] = fu[2] + gap + oJ[2] * ev[2].height, fu[4] =
				fu[3], !gD[0])
				for (aC = 0; aC < 5; aC++) fu[aC] -= oJ[0] * ev[0].height + gap;
			if (!gD[1])
				for (aC = 2; aC < 5; aC++) fu[aC] -= oJ[1] * ev[1].height + gap
		}
	}, this.iV = function() {
		return !(7 === ab.a5B() && a1.a2.iv())
	}, this.hz = function(j3, j4) {
		if (ev && this.iV())
			for (var aC = gD.length - 1; 0 <= aC; aC--)
				if (gD[aC] && this.gY[aC] && fs[aC] < j3 && fu[aC] < j4 && j3 < fs[aC] + oJ[aC] * ev[aC].width && j4 < fu[aC] + oJ[aC] * ev[aC].height) return u.v(9, u.vl, new aHW(L(144), bD.tc.a7K(aFd[aC]))), !0;
		return !1
	}, this.z8 = function() {
		if (ev && this.iV()) {
			var aC;
			for (z9.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) gD[aC] && this.gY[aC] && (z9.setTransform(oJ[aC], 0, 0, oJ[aC], fs[aC], fu[aC]), z9.drawImage(ev[aC], 0, 0));
			z9.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function di() {
	this.aHX = 0, this.pk = null, this.pm = null, this.tX = null, this.lt = null, this.z = null, this.yM = null, this.xq = null, this.message = null, this.pY = null, this.ps = null, this.aHY = null, this.aHZ = new aHa, this.xP = new aHb, this.fI = 0,
		this.aE0 = 0, this.dv = function() {
			this.aE0 = bi.el, this.aHX = bJ.fC.fD(bm.buffer.data[105].value, 5), this.pm = new aHc, this.tX = new aHd, this.lt = new aHe, this.z = new aHf, this.yM = new aHg, this.xq = new aHh, this.message = new aHi, this.pY = new aHj, this.ps =
				new aHk, this.aHY = new aHl, bt.dv(), this.fI = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.fG()
		}, this.yB = function() {
			this.xP.aHm(), this.ps && this.ps.yB(), this.pk = null, this.pm = null, this.tX = null, this.lt = null, this.z = null, this.yM = null, this.xq = null, this.message = null, this.pY = null, this.ps = null, this.aHY = null, this.fI = 0, bt
				.yB(), a1.a2.setState(0)
		}
}

function aHc() {
	function aHo() {
		bq.z.aHp += 29 === u.vl && 1 === bq.z.aHq
	}

	function aIK(self, kK, hE) {
		for (var h = self.xE.splice(kK, hE), aC = 0; aC < h.length; aC++) aIA(self, h[aC]);
		aHo()
	}

	function aIA(self, hJ) {
		var self = self.xs,
			p9 = self.pop();
		p9 !== hJ && ((self[hJ.aHw] = p9).aHw = hJ.aHw)
	}
	this.xE = [], this.xs = [], this.aHn = [], this.aHr = function(pe, username, y1, a7p, aHs, elo, color, a0N, aHt, code, xv, xy) {
		username = this.aHv(pe, username, y1, a7p, aHs, elo, color, a0N, aHt, code);
		username.xv = xv, username.xy = xy, this.xE.push(username), username.aHw = this.xs.length, this.xs.push(username), bq.aHX === pe && (bq.pk = username), bq.aHY.aHx(pe) && (username.y3 = 1), bq.ps.aHy(pe), aHo()
	}, this.aHv = function(pe, username, y1, a7p, aHs, elo, color, a0N, aHt, code) {
		return {
			pe: pe,
			username: code ? __fx.nameFilter.filter(username) : "Player " + bI.fC.a3I(pe, 2),
			aHz: __fx.nameFilter.filter(username),
			y1: y1,
			a7p: a7p,
			aHs: aHs,
			elo: elo,
			color: color,
			a0N: a0N,
			aHt: aHt
		}
	}, this.aI0 = function(eU, y1, a7p, aHs, elo, a0N, color) {
		eU = this.xE[eU];
		eU.y1 = y1, eU.a7p = a7p, eU.aHs = aHs, eU.elo = elo, eU.a0N = a0N, eU.color = color, bq.ps.aHy(eU.pe), aHo()
	}, this.aI1 = function(eU, code) {
		eU = this.xE[eU];
		1 === code && (eU.username = eU.aHz), bq.ps.aHy(eU.pe), aHo()
	}, this.aI2 = function(eU, aI3) {
		var eU = this.xE[eU],
			aI4 = eU.username,
			aDJ = eU.username !== eU.aHz,
			aI5 = "Redacted " + bI.fC.a3I(eU.pe, 2);
		eU.aHz = aI3 ? "[" + bD.pa.po(eU.aHz) + "] " + aI5 : aI5, aDJ || (eU.username = eU.aHz), aI4.indexOf("Redacted") < 0 && (eU.aI6 = aI4), bq.ps.aHy(eU.pe), aHo()
	}, this.aI7 = function(eU, username) {
		var eU = this.xE[eU],
			aDJ = eU.username !== eU.aHz;
		eU.aHz = username, aDJ || (eU.username = username), eU.pe === bq.aHX && bq.lt.aI8(username), bq.ps.aHy(eU.pe), aHo()
	}, this.aI9 = function(eU) {
		eU = this.xE.splice(eU, 1)[0];
		aIA(this, eU), this.aHn.push(eU), 1e3 < this.aHn.length && this.aHn.shift(), aHo()
	}, this.aIB = function(eU, target, xv, xy) {
		var xE = this.xE,
			eU = xE.splice(eU, 1)[0];
		xE.splice(target, 0, eU), !eU.xv && xv && bq.aHY.join(eU), eU.xv = xv, eU.xy = xy, aHo()
	}, this.aIC = function(xv) {
		for (var xE = this.xE, fl = xE.length, aC = 0; aC < fl; aC++)
			if (xE[aC].xv === xv) return aC;
		return fl
	}, this.aID = function(kK) {
		for (var xE = this.xE, fl = xE.length, xv = kK < fl ? xE[kK].xv : 0, aC = kK; aC < fl && xE[aC].xv === xv && !xE[aC].xy;) aC++;
		return aC
	}, this.aIE = function(kK, aIF, aIG) {
		for (var aIH = this.aID(kK), h = [], aC = 0; aC < aIF; aC++) aIG && 511 === aIG[aC] || h.push(this.xE[aIH + aC]);
		return h
	}, this.aII = function(kK, hE, aIF, aIG) {
		for (var aIJ = this.aIE(kK, aIF, aIG), aC = aIJ.length - 1; 0 <= aC; aC--) aIK(this, this.xE.indexOf(aIJ[aC], kK), 1);
		aIK(this, kK, hE)
	}, this.aIL = function(xv) {
		for (var xE = this.xE, aIM = 0; aIM < xE.length && xE[aIM].xv === xv;) aIM++;
		for (var left = xE.splice(0, aIM), aC = 0; aC < aIM; aC++) left[aC].xv = 0, left[aC].xy = 0, xE.push(left[aC]);
		aHo()
	}, this.pn = function(pe) {
		for (var xE = this.xE, lz = xE.length, g4 = 0; g4 < lz; g4++)
			if (pe === xE[g4].pe) return xE[g4];
		return null
	}
}

function aHd() {
	this.tX = [], this.xS = 0, this.xT = 0, this.aIN = 0;
	var aIP = this.aIO = 0,
		aIQ = 0;
	this.aIR = function() {
		for (var self, fl = bK.sf(4), tX = new Array(fl), aC = 0; aC < fl; aC++) tX[aC] = {
			id: bK.sf(13),
			xZ: bK.sf(12),
			hE: bK.sf(16),
			aIF: bK.sf(16),
			nb: bK.sf(10),
			fR: bK.sf(6),
			mapSeed: bK.sf(14),
			xC: bK.sf(4),
			xd: bK.sf(1)
		};
		this.tX = tX, __fx.lobbyReminders.setRooms(this.tX), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aIT({
				id: 7,
				s: text
			})
		}), !(self = this).xS || 0 <= self.xu(self.xS) || (self.xS = 0, self.xT = 0, bq.message.aIT({
			id: 7,
			s: L(145)
		}))
	}, this.xu = function(id) {
		for (var tX = this.tX, aC = tX.length - 1; 0 <= aC; aC--)
			if (tX[aC].id === id) return aC;
		return -1
	}, this.aIU = function() {
		return 1 === aIP
	}, this.aIV = function(id) {
		return 0 < id && 0 < this.tX.length && this.tX[0].id === id
	}, this.aIW = function() {
		return this.aIV(this.xS)
	}, this.click = function(eU, xy) {
		eU = this.tX[eU];
		xy = xy ? 1 : 0, eU && (eU.id === this.xS && xy === this.xT ? this.select(0, 0) : this.select(eU.id, xy))
	}, this.select = function(id, xy) {
		this.xS = id, this.xT = id ? xy : 0, this.aIN = this.aIO = 0, aIP = 1, aIQ++, b1.aIX.aIY(4, {
			xv: id,
			xy: this.xT
		}), u.a9F(29).aIZ()
	}, this.aIa = function(id, xy) {
		0 === (aIQ = Math.max(aIQ - 1, 0)) && (this.xS = id, this.xT = xy)
	}, this.zX = function(pe, xC) {
		this.aIN = xC ? pe : 0, this.aIO = xC, aIP = 1, b1.aIX.aIY(6, {
			xC: xC,
			pe: pe
		})
	}, this.aIb = function(pe, xC) {
		return this.aIO === xC && this.aIN === pe
	}, this.xU = function(xR) {
		return xR.hE - xR.aIF
	}, this.xX = function(xC) {
		return xC < 7 ? xC + 2 + " Teams" : 7 === xC ? "Battle Royale" : 8 === xC ? "1v1" : 9 === xC ? "Zombie" : "No Full-Sending"
	}, this.xa = function(xR) {
		return xR.nb < (9 === xR.xC ? 333 : 512)
	}, this.xY = function(xZ) {
		var aBV = xZ % 60;
		return bO.gC(xZ, 60) + ":" + (aBV < 10 ? "0" : "") + aBV
	}
}

function aHl() {
	var aIc = [],
		aId = [],
		aIe = 0;

	function aIf(h, aB3, aIi, aIj) {
		var fl = h.length;
		if (0 === fl) return "";
		var pW = "@" + h[0];
		if (1 === fl) return pW + aB3 + aIj;
		for (var aC = 1; aC < fl - 1; aC++) pW += ", @" + h[aC];
		return pW + " and @" + h[fl - 1] + aIi + aIj
	}
	this.dv = function() {
		var pW = aIf(aId, " is", " are", " in the lobby.");
		pW.length && bq.message.aIT({
			id: 7,
			s: pW
		}), aIc = [], aId = [], aIe = 0
	}, this.aHx = function(aIg) {
		return bq.aHX !== aIg && (aIg = bI.fC.a3I(aIg, 5), !!bm.zX.y3(aIg)) && (aId.push(aIg), !0)
	}, this.join = function(player) {
		bq.aHX !== player.pe && (player = bI.fC.a3I(player.pe, 5), bm.zX.y3(player)) && aIc.push(player)
	}, this.aIh = function() {
		var aB3, aIi;
		++aIe < 3 || (aIe = 0, aB3 = aIf(aId, "", "", " entered the lobby!"), (aB3 = (aIi = aIf(aIc, "", "", " joined a game!")).length ? aB3.length ? aB3 + " " + aIi : aIi : aB3).length && bq.message.aIT({
			id: 7,
			s: aB3
		}), aIc = [], aId = [])
	}
}

function aHa() {
	this.e3 = function(kK, aIk, aIF) {
		var pm, aHZ = bq.z.aHZ,
			aIl = bq.pm.xE.slice(kK, kK + aIk),
			kK = bq.pm.aIE(kK, aIF, aHZ.aIG),
			aIF = function(aIl) {
				if (__fx.customLobby.isActive()) return bq.pk ? __fx.customLobby.getPlayerId() : -1;
				if (bq.pk && bq.tX.aIU())
					for (var fl = aIl.length, pe = bq.pk.pe, aC = 0; aC < fl; aC++)
						if (aIl[aC].pe === pe) return aC;
				return -1
			}(aIl.concat(kK));
		if (-1 === aIF) return (pm = bq.pm).aHn = pm.aHn.concat(aIl, kK), 1e3 < bq.pm.aHn.length && bq.pm.aHn.splice(0, bq.pm.aHn.length - 1e3), bq.z.aHp += 29 === u.vl && 1 === bq.z.aHq, !1;
		if (aHZ.a8j = aIk <= aIF ? 1 : 0, aHZ.a92 = kK.length, 8 === aHZ.xC) {
			for (var aIp = function(aIG) {
					for (var h = [], aC = 0; aC < aIG.length; aC++) 511 !== aIG[aC] && h.push(aIG[aC]);
					return h
				}(aHZ.aIG), ib = aIF - aIk, aIr = aHZ.a8j ? aIp[ib] : aIF >> 1, aIs = 0, aC = aHZ.a92 = 0; aC < aIp.length; aC++) aIp[aC] === aIr && (aIs += aC < ib ? 1 : 0, aHZ.a92++);
			aHZ.aIt = (aHZ.aIt + aIr) % 1024, 0 <= aHZ.a4S && (aHZ.a4S += aIr), aIF = aHZ.a8j ? 2 + aIs : aIF % 2, aIl = aIl.slice(2 * aIr, 2 * aIr + 2)
		}
		return aHZ.aIu = aHZ.a8j ? function(aIl) {
			var tX = bq.tX;
			if (tX.aIO)
				for (var aC = 0; aC < aIl.length; aC++)
					if (aIl[aC].pe === tX.aIN) return aC;
			return 0
		}(aIl) : 0, ay.dv(aHZ, aIl, aIF), !0
	}, this.aIw = function(aHZ, aIl, aIn) {
		var fo = aE.data = new a8d,
			aIz = (fo.spawningSeed = aHZ.spawningSeed, aHZ.xC < 7 ? (fo.gameMode = 1, fo.numberTeams = aHZ.xC + 2) : 9 === aHZ.xC ? (fo.gameMode = fo.isZombieMode = 1, fo.numberTeams = 2) : (fo.gameMode = 0, fo.battleRoyaleMode = 7 === aHZ.xC ?
					0 : 10 === aHZ.xC ? 1 : 2), fo.selectedPlayer = aHZ.a8j ? aHZ.aIu : aIn, fo.a8j = aHZ.a8j, fo.a92 = aHZ.a92, fo.isContest = aHZ.xd, fo.mapType = bV.aIx(aHZ.fR) ? 0 : 1, bV.aIy(fo, aHZ.fR), fo.mapSeed = aHZ.mapSeed, fo
				.humanCount = aIl.length);
		fo.selectableSpawn = 1 === fo.gameMode || aIz < 100, fo.colorsData = new Uint32Array(aIz), fo.playerNamesData = new Array(aIz), fo.a93 = new Uint32Array(aIz);
		for (var aC = 0; aC < aIz; aC++) fo.colorsData[aC] = aIl[aC].color, fo.playerNamesData[aC] = aIl[aC].username, fo.a93[aC] = aIl[aC].pe;
		if (2 === fo.battleRoyaleMode)
			for (fo.elo = new Uint16Array(aIz), aC = 0; aC < aIz; aC++) fo.elo[aC] = aIl[aC].elo;
		bx.close(), ab.setState(8), bV.a8(aHZ.fR, fo.mapSeed), aE.a8i(), aE.a4S = aHZ.a4S, aE.a8g = 2
	}
}

function aHe() {
	var eL = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aJ0 = [bE.qc, bE.qc, bE.qd, bE.r8, bE.r9, bE.qt, bE.rE, bE.qd, bE.rg, bE.rU, bE.rd, bE.qF],
		aJ1 = [
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
		aJ2 = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aJH(pu, pe, aJJ) {
		for (var g5 = pu.length - 1; 0 <= g5; g5--) {
			var q5 = pu[g5];
			0 === q5.id && q5.pe === pe && (q5.s = "[Redacted Message]", aJJ) && (q5.aJK = 1)
		}
	}
	this.pz = function(pc) {
		var aJ3, a4m;
		return pc.id < 5 && (aJ3 = "@" + bI.fC.a3I(pc.pe, 5)), 0 === pc.id ? aJ3 + ": " + pc.s : 1 === pc.id ? (a4m = "@" + bI.fC.a3I(pc.target, 5), 0 === pc.aJ4 ? 32768 <= pc.value ? aJ3 + " voted with " + (pc.value - 32768 + 1) +
				" gold against " + a4m + " to weaken the latter's admin position. 📉" : aJ3 + " voted with " + (pc.value + 1) + " gold for " + a4m + " to strengthen the latter's admin position. 💪" : 1 === pc.aJ4 ? aJ3 + " sent " + Math.floor(pc
					.value / 100) + " 🧈 gold to " + a4m + "." : aJ3 + " voted with " + (pc.value / 10).toFixed(1) + " points for " + a4m + " to acknowledge the latter as clan leader. ✅") : 2 === pc.id ? 0 === pc.aJ4 ? aJ3 +
			" was 🔇 muted for 1 Hour." : 1 === pc.aJ4 ? "The username of " + aJ3 + " was ✂️ redacted. Duration: 1 Day" : aJ3 + " 👢 was kicked." : 3 === pc.id ? aJ3 + br.eX(pc.aJ4, br.eR[pc.aJ4][pc.value]) + "@" + bI.fC.a3I(pc.target, 5) + br
			.eZ(pc.aJ4, br.eR[pc.aJ4][pc.value]) : 4 === pc.id ? (a4m = "@" + bI.fC.a3I(pc.target, 5), 1 === pc.aJ4 ? "✅ " + aJ3 + " vouched for " + a4m + "." + (pc.aJ6 ? " ⚖️ The punishment of " + a4m + " was refunded." : "") : "🚩 " + aJ3 +
				" reported " + a4m + "." + (pc.aJ6 ? " ⚖️ " + a4m + " was punished." : "")) : 5 === pc.id ? aJ2[pc.aJ4] : 6 === pc.id ? "You are about to mention " + pc.value + " player" + (1 === pc.value ? "" : "s") +
			". This action will cost " + (Math.max(pc.value, 1) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === pc.id ? pc.s : void 0
	}, this.py = function(pc, aJ7) {
		return {
			pc: pc,
			s: aJ7,
			aJ8: 0,
			fontSize: 4 === pc.id ? .8 : 1,
			q6: 0,
			aJ9: pc.id ? bE.r7 : bE.qO
		}
	}, this.xz = function(player, xx) {
		return (xx ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.y0 = function(y1) {
		return aJ0[y1]
	}, this.aJA = function(y1, a7p) {
		return y1 < 3 || 7 === y1 ? aJ1[y1][0] : 4 === y1 ? aJ1[y1][a7p < 1 ? 0 : a7p < 10 ? 1 : 2] : aJ1[y1][a7p < 10 ? 0 : 1]
	}, this.aJB = function(a7p) {
		return 0 === a7p
	}, this.y2 = function(q5) {
		return !!bq.pk && q5.pe === bq.pk.pe
	}, this.aJC = function(pm, aJD, aJE) {
		var a4k = [];
		loop: for (var aC = aJD; aC < aJE; aC++) {
			var a4l = bD.pa.po(pm[aC].username);
			if (a4l) {
				for (var g5 = a4k.length - 1; 0 <= g5; g5--)
					if (a4l === a4k[g5].name) {
						a4k[g5].hE++;
						continue loop
					} a4k.push({
					name: a4l,
					hE: 1
				})
			}
		}
		if (a4k.sort(function(g4, g5) {
				return g5.hE - g4.hE
			}), 0 === a4k.length) return "";
		for (var pW = a4k[0].name + ": " + a4k[0].hE, aC = 1; aC < a4k.length; aC++) pW += "   " + a4k[aC].name + ": " + a4k[aC].hE;
		return pW
	}, this.aJF = function(y1, a7p, aHs) {
		return 0 === eL[y1].length ? "Rank: " + (a7p + 1) : eL[y1] + " Rank: " + (a7p + 1) + (3 !== y1 && aHs < 100 ? "   " + eL[3] + " Rank: " + (aHs + 1) : "")
	}, this.aJG = function(pe) {
		aJH(bq.z.pu, pe), aJH(bq.message.aJI(), pe, 1), bq.ps.aJG(pe)
	}, this.aI8 = function(username) {
		var username = this.aJL(username);
		username && (username = "[" + username + "] " + function(username) {
			var fa = username.indexOf("["),
				fp = username.indexOf("]", fa);
			for (; 0 <= fa && fa < fp;) username = username.substring(0, fa) + username.substring(fp + 1), fa = username.indexOf("["), fp = username.indexOf("]", fa);
			return (username = username.replace(new RegExp("[\\[\\]]", "g"), "")).replace(new RegExp("\\s+", "g"), " ").trim()
		}(String(bm.buffer.data[122].value)), bm.rv.q1(122, username.trim().slice(0, 20)))
	}, this.aJL = function(username) {
		var fa = username.indexOf("["),
			fp = username.indexOf("]");
		return !(fa < 0 || fp - fa <= 1 || 8 < fp - fa) && (username = username.substring(fa + 1, fp).trim()).length ? username : null
	}
}

function aHh() {
	var v1 = 0,
		aJO = 0,
		aJP = 0,
		aJQ = null,
		aJR = null;

	function aJU(q5, aJV, aJW) {
		var pW = q5.username;
		return (pW += "   " + bq.lt.aJF(q5.y1, q5.a7p, q5.aHs)) + function(q5) {
			q5 = q5.a0N;
			if (q5 < 1e3) return "   Gold: " + q5;
			if ((q5 %= 1024) < 1e3) return "   Gold: " + q5 + "k";
			return "   Gold: " + (q5 - 999) + "M"
		}(q5) + ("   IP: " + bI.fC.a3I(q5.aHt, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aJW ? aJO : aJT(q5, aJV)])
	}

	function aJT(q5, aJV) {
		return aJO = aJV || bq.pm.pn(q5.pe) ? 1 : 0
	}
	this.xr = 0, this.aJS = function() {
		!v1 || aJO === aJT(aJR) && aJP === aJR.a0N || (aJP = aJR.a0N, aJQ.show(-1, -1, aJU(aJR, 0, 1), 1, 1, aJR.color))
	}, this.y4 = function(e, q5, aJV) {
		var rect = e.getBoundingClientRect();
		this.show(rect.left, rect.top, q5, 0, aJV), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.xq && bq.xq.ub(1)
		}), this.xr = aJV
	}, this.show = function(fs, fu, q5, vH, aJV) {
		aJQ = aJQ || new vE, aJP = (aJR = q5).a0N, aJQ.show(fs, fu, aJU(q5, aJV), vH, 0, aJR.color), v1 = 1
	}, this.ub = function(vN) {
		this.xr = 0, aJQ && aJQ.ub(vN) && (v1 = 0, aJR = null)
	}
}

function aHf() {
	function aJa() {
		var fR, mapSeed;
		u.a9F(29) && (bq.z.aHp && 1 === bq.z.aHq && u.a9F(29).aJc(), bq.z.aHp = 0, u.a9F(29).aJd(), fR = bV.fR, mapSeed = bV.mapSeed, u.a9F(29).aJe(), fR === bV.fR && mapSeed === bV.mapSeed || bq.xP.aJf(), bq.xq.aJS())
	}
	this.wY = 0, this.aHq = 2, this.aHZ = {
		fR: 0,
		mapSeed: 0,
		xC: 0,
		xd: 0,
		spawningSeed: 0,
		a4S: -1,
		a5J: 0,
		aIt: 0,
		aIF: 0,
		aIG: null,
		a92: 0,
		a8j: 0,
		aIu: 0
	}, this.pu = [], this.q3 = 300, this.pv = 1048575, this.aHp = 0, this.aJY = [0, 0], this.aJZ = function() {
		aJa(), bq.aHY.dv(), __fx.lobbyReminders.check()
	}, this.aIh = function() {
		bq.aHY.aIh(), aJa(), __fx.lobbyReminders.check()
	}, this.aJg = function() {
		0 === this.aHq && u.a9F(29).aJh()
	}
}

function aHb() {
	var aJi = 256,
		aJj = 18,
		aJk = [],
		aJn = 0;

	function aJy(aJw) {
		aJw && (aJn = 0)
	}

	function zl(key, aJp, fs, fu, xj) {
		var canvas = document.createElement("canvas"),
			p4 = (canvas.width = canvas.height = aJi, canvas.getContext("2d", {
				alpha: !1
			})),
			p4 = (p4.imageSmoothingEnabled = !0, p4.drawImage(aJp, fs, fu, xj, xj, 0, 0, aJi, aJi), {
				key: key,
				canvas: canvas,
				iV: 0
			});
		return aJk.push(p4), aJk.length > aJj && function(aK3) {
			for (var fl = aJk.length, aC = 0; aC < fl; aC++) {
				var hJ = aJk[aC];
				if (!hJ.iV && hJ !== aK3) return hJ.canvas.width = hJ.canvas.height = 0, aJk.splice(aC, 1)
			}
		}(p4), p4
	}
	this.xQ = function(fR, mapSeed) {
		return fR + "_" + (bV.aJo(fR) ? mapSeed : 0)
	}, this.xi = function(fR, mapSeed) {
		for (var key = this.xQ(fR, mapSeed), aJp = null, aC = aJk.length - 1; 0 <= aC; aC--) {
			var hJ = aJk[aC];
			if (hJ.key === key) {
				if (!hJ.iV) return hJ.iV = 1, aJk.splice(aC, 1), aJk.push(hJ), hJ.canvas;
				aJp = hJ
			}
		}
		return aJp ? ((fR = zl(key, aJp.canvas, 0, 0, aJi)).iV = 1, fR.canvas) : null
	}, this.pt = function(canvas) {
		for (var aC = aJk.length - 1; 0 <= aC; aC--)
			if (aJk[aC].canvas === canvas) {
				aJk[aC].iV = 0;
				break
			} canvas.parentNode && u.removeChild(canvas.parentNode, canvas)
	}, this.aHm = function() {
		for (var aC = aJk.length - 1; 0 <= aC; aC--) this.pt(aJk[aC].canvas)
	}, this.eq = function() {
		if (bq.fI && !(bi.el < aJn)) {
			for (var self, fR, mapSeed, em, tX = bq.tX.tX, fl = tX.length, aJq = 0, aC = 0; aC < fl; aC++) {
				var key = this.xQ(tX[aC].fR, tX[aC].mapSeed);
				if (! function(key) {
						for (var aC = aJk.length - 1; 0 <= aC; aC--)
							if (aJk[aC].key === key) return 1;
						return
					}(key)) {
					key = function(fR, key) {
						var eU = bV.aJu.xu(fR);
						if (eU < 0) return -1;
						var aJv = bV.aJv,
							aJw = aJv.get(eU, 1);
						if (aJw) return (fR = bV.aJu.aJz(fR, aJw)) ? (aJw = Math.min(fR.width, fR.height), zl(key, fR, fR.width - aJw >> 1, fR.height - aJw >> 1, aJw), fR.width = fR.height = 0, 1) : 0;
						aJv.aJx(eU, 1) || aJv.zp(eU, 1, aJy);
						return 0
					}(tX[aC].fR, key);
					if (!(0 <= key)) return self = this, fR = tX[aC].fR, mapSeed = tX[aC].mapSeed, em = void 0, em = performance.now(),
						function(self, fR, mapSeed) {
							var aJp = bV.aK1(fR, mapSeed),
								xj = Math.min(aJp.width, aJp.height);
							zl(self.xQ(fR, mapSeed), aJp, aJp.width - xj >> 1, aJp.height - xj >> 1, xj), aJp !== bV.a24 && (aJp.width = aJp.height = 0)
						}(self, fR, mapSeed), u.a9F(29).aIZ(), self = performance.now(), void(aJn = self + Math.max(Math.min(self - em, 500), 200));
					aJq += key
				}
			}
			aJq && u.a9F(29).aIZ(), aJn = bi.el + 200
		}
	}, this.aJf = function() {
		aJn = performance.now() + 200
	}
}

function aHj() {
	var aK4 = 0,
		aK5 = "",
		aK6 = 0,
		aK7 = 0,
		aK8 = "";

	function aKB(aJ7) {
		b1.aIX.aIY(3, aJ7)
	}

	function aKA(s) {
		s = bq.pY.pZ(s);
		return s.length ? s.join(" ") + " " : ""
	}

	function aKM(j) {
		return new RegExp("^@([-\\w]{5}|\\[[-\\w]{1,6}\\])$").test(j)
	}

	function aKE(s) {
		var aKS = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aKS)
	}
	this.a43 = function(s) {
		var h, aKF, aK9;
		if (aK4) return aK4 = 0, "yes" === (aK9 = s.toLowerCase()) || "y" === aK9 ? (aK8 = aKA(aK5), void aKB(aK5)) : (aK8 = "", void bq.message.aIT({
			id: 5,
			aJ4: 7
		}));
		aK8 = aKA(s), !(s.indexOf("@") < 0) && (aK9 = aKE(s)) ? (aK5 = s, h = bq.pm.xE.slice(), function(aKD, aKF, s) {
			if (!aK6) return;
			for (var fl = aKF.length, aC = 0; aC < fl; aC++) 2 === aKF[aC].id && (s = s.replace(aKD[aKF[aC].eU], "@" + aKF[aC].gD));
			return aK4 = 1, aKB((aK5 = s).slice(0, 126) + "|"), 1
		}(aK9, aKF = function(aKD) {
			for (var aKF = [], fl = (aK7 = aK6 = 0, aKD.length), aC = 0; aC < fl; aC++) {
				var j = aKD[aC],
					lz = j.length;
				bD.pa.startsWith(j, "@[") ? lz <= 9 && bD.pa.a7N(j, "]") && aKF.push({
					id: 0,
					gD: j.substring(2, lz - 1).toUpperCase()
				}) : 6 === lz && (aK7++, aKF.push({
					id: 1,
					gD: bJ.fC.fD(j.substring(1), 5)
				}))
			}
			return aKF
		}(aK9), s) || (0 === aKF.length || aK9.length === aK7 ? aKB(s) : (function(h, aKF) {
			var lz = aKF.length;
			if (0 === lz) return;
			var fl = h.length;
			loop: for (var aC = fl - 1; 0 <= aC; aC--) {
				for (var g4 = 0; g4 < lz; g4++)
					if (0 === aKF[g4].id) {
						if (aKF[g4].gD === bD.pa.po(h[aC].username)) continue loop
					} else if (1 === aKF[g4].id && aKF[g4].gD === h[aC].pe) continue loop;
				h[aC] = h[--fl], h.pop()
			}
		}(h, aKF), aK9 = h.length, aK8 = "", aK4 = 1, bq.message.aIT({
			id: 6,
			value: aK9
		})))) : aKB(s)
	}, this.aKK = function() {
		return aK4
	}, this.aKL = function() {
		return aK8
	}, this.pZ = function(s) {
		var aKD = aKE(s),
			h = [];
		if (aKD)
			for (var aC = 0; aC < aKD.length; aC++) aKM(aKD[aC]) && h.indexOf(aKD[aC]) < 0 && h.push(aKD[aC]);
		return h
	}, this.aKN = function(event, e) {
		if ("deleteContentBackward" !== event.inputType) return 0;
		var a0D = e.selectionStart;
		if (a0D !== e.selectionEnd) return 0;
		var pW = e.value.substring(0, a0D),
			lz = pW.match(new RegExp("\\B@[-\\w\\[\\]]+ $"));
		if (!lz || !aKM(lz[0].substring(0, lz[0].length - 1))) return 0;
		event.preventDefault();
		event = a0D - lz[0].length;
		return e.value = pW.substring(0, event) + e.value.substring(a0D), e.setSelectionRange(event, event), 1
	}, this.aKO = function(s) {
		s = aKE(s);
		return s ? function(aKD) {
			for (var fl = aKD.length, aC = 0; aC < fl; aC++) {
				var j = aKD[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return 0
		}(s) || function(aKD) {
			for (var aKR = new RegExp("^[0-9]"), a86 = new RegExp("^[0-9]+$"), aC = 0; aC < aKD.length; aC++) {
				var j = aKD[aC].substring(1);
				if (1 <= j.length && j.length <= 3 && aKR.test(j) && !a86.test(j)) return 1
			}
			return 0
		}(s) : 0
	}, this.aKT = function(s) {
		var aKD = aKE(s);
		if (aKD)
			for (var a6 = new RegExp("^[0-9]+$"), fl = aKD.length, aC = 0; aC < fl; aC++) {
				var j = aKD[aC].substring(1),
					lz = j.length;
				1 <= lz && lz <= 3 && a6.test(j) && (lz = parseInt(j, 10), !isNaN(lz)) && 0 <= lz && lz < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[lz]))
			}
		return s
	}
}

function aHi() {
	var aKV, aKW = [],
		aKX = -1,
		aKY = 0,
		aKZ = 0;

	function aKd() {
		aKY = bi.el, (3 === this.y8 ? aKc : (aKX = (aKW.length + aKX + 2 * this.y8 - 1) % aKW.length, aKb))()
	}

	function aKb() {
		0 !== aKW.length && (aKZ = 0, aKV && aKV.yB(), (aKV = new y5(aKd)).q1(aKX, aKW.length), aKV.show(aKW[aKX]), bq.message.resize())
	}

	function aKc() {
		aKZ = 1, aKV && aKV.yB(), (aKV = new yC(aKb)).q1(aKW.length), aKV.show(), bq.message.resize()
	}
	this.aIT = function(pc) {
		var q5;
		2 === pc.id && 3 === pc.aJ4 ? bq.lt.aJG(pc.pe) : (q5 = bq.lt.py(pc, bq.lt.pz(pc)), (5 !== pc.id && 6 !== pc.id || (c0.nH.q2(q5), 5 === pc.id)) && (q5 = bi.el < aKY + 2e4, aKX !== aKW.length - 1 && q5 || (aKX = aKW.length), __fx.pingFilter
			.isMuted(pc, "s") || (aKW.push(pc), bm.buffer.data[14].value || 7 === pc.id || bt.play(), aKV && (aKZ && (bm.buffer.data[13].value || q5) ? aKV.q1(aKW.length) : aKb()))))
	}, this.show = function() {
		aKc()
	}, this.ub = function() {
		aKX = aKW.length - 1, aKV && aKV.yB(), aKV = null
	}, this.resize = function() {
		aKV && aKV.resize()
	}, this.aJI = function() {
		return aKW
	}
}

function aHg() {
	var aKe = null,
		aKf = null,
		aKg = 0,
		aKh = null;

	function aKo(title, aL1, tt, backgroundColor) {
		title = new x(title, tt, backgroundColor);
		return by.v6(title.button, aL1), title
	}

	function aKn() {
		return bI.fC.a3I(aKf.pe, 5)
	}

	function aKz() {
		return +(0 === aKf.y1 || bq.lt.y2(aKf))
	}

	function aKy() {
		aKz() || (aKf.y3 = bm.zX.zk(aKn()), bq.z.aHp += 1 === bq.z.aHq, bq.yM.ub())
	}

	function aKp() {
		0 !== aKf.y1 && (bq.yM.ub(), u.v(8, 29, new vm(25, {
			action: 0,
			pe: bI.fC.a3I(aKf.pe, 5),
			vk: 0
		}, 29)))
	}

	function aKv() {
		return !bq.pk || bq.lt.y2(aKf) ? 1 : 0
	}

	function aKr() {
		return aKv() ? 1 : +bs.aL3(bI.fC.a3I(aKf.pe, 5))
	}

	function aKq(aL4) {
		aKr() || (bs.aL5(bI.fC.a3I(aKf.pe, 5), aL4), bq.yM.ub())
	}

	function aKt() {
		var fs, fu;
		aKr() || (fs = aKe.fs, fu = aKe.fu, bq.yM.ub(), aKe = new yD([aKo(L(168), L(169), function() {
			aKq(0)
		}, 0), aKo(L(170), L(171), function() {
			bq.yM.ub()
		}, 0)], 2), aL0(fs, fu), aKg = 2)
	}

	function aKk(xC) {
		return bq.tX.aIb(aKf.pe, xC)
	}

	function aKu(xC) {
		aKv() || (bq.tX.zX(aKf.pe, aKk(xC) ? 0 : xC), bq.yM.ub())
	}

	function aKx() {
		var ov;
		return !aKv() && (ov = bD.pa.po(aKf.username)) ? +(ov === bD.pa.po(bq.pk.aHz)) : 1
	}

	function aKw() {
		aKx() || (b1.aIX.aIY(2, aKf.pe), bq.yM.ub())
	}

	function aKs() {
		29 === u.vl && u.a5F().pY(bI.fC.a3I(aKf.pe, 5))
	}

	function aL0(fs, fu, yP) {
		aKe.show(fs, fu, yP), bq.xq.show(aKe.fs, aKe.fu, aKf, 1)
	}
	this.aKi = function(e, q5) {
		aKf = q5;
		var aKj = aKk(aKg = 1),
			aKl = aKk(2),
			aKm = bm.zX.y3(aKn());
		aKe = new yD([aKo(L(146), L(147), aKp, 0 === q5.y1 ? 1 : 0), aKo(L(148), L(149), function() {
			aKq(1)
		}, aKr()), aKo(L(150), L(151), aKs, 0), aKo(L(152), L(153), aKt, aKr()), aKo(L(aKj ? 154 : 155), L(aKj ? 156 : 157), function() {
			aKu(1)
		}, aKv()), aKo(L(aKl ? 158 : 159), L(aKl ? 160 : 161), function() {
			aKu(2)
		}, aKv()), aKo(L(162), L(163), aKw, aKx()), aKo(L(aKm ? 164 : 165), L(aKm ? 166 : 167), aKy, aKz())], 2), aL0((aKh = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aKh.clientY, 1)
	}, this.a66 = function(code) {
		if (29 !== u.vl) return !1;
		if (!aKf) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.ub();
			else if (bD.pa.startsWith(code, "Numpad") || bD.pa.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aKg) this.aKi(aKh, aKf);
				else {
					if (!aKe) return !1;
					2 === aKg ? 1 === code ? aKq(0) : this.ub() : code <= 1 ? aKp() : 2 === code ? aKq(1) : 3 === code ? (aKs(), this.ub()) : 4 === code ? aKt() : code <= 6 ? aKu(5 === code ? 1 : 2) : (7 === code ? aKw : aKy)()
				}
		}
		return !0
	}, this.ub = function() {
		aKg = 0, aKe && aKe.ub(), aKe = null, bq.xq.ub(), by.ub()
	}
}

function aHk() {
	var aL6 = [],
		aL7 = [],
		aL8 = {},
		aL9 = {};

	function aLE(uZ) {
		var h = aL8[uZ.aLD.pe];
		h && 0 <= (uZ = h.indexOf(uZ)) && h.splice(uZ, 1)
	}

	function aLB(q5) {
		for (var s = q5.s, aLA = [];;) {
			var ev = function aLF(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var pW = s.substring(position + 1, position + 6);
				if (5 !== pW.length) return aLF(s, position + 1);
				var aLS = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aLS.test(pW)) return aLF(s, position + 1);
				aLS = s.substring(position + 6, position + 7);
				if (1 !== aLS.length) return position;
				pW = new RegExp("^[ :!.]+$");
				if (!pW.test(aLS)) return aLF(s, position + 1);
				return position
			}(s, 0);
			if (-1 === ev) {
				aLA.push(aLG(s, q5));
				break
			}
			0 === ev ? aLA.push(aLH(s.substring(1, 6), q5, ev)) : (aLA.push(aLG(s.substring(0, ev), q5)), aLA.push(aLH(s.substring(ev + 1, ev + 6), q5, ev))), s = s.substring(ev + 6)
		}
		return aLA
	}

	function aLH(pW, q5, ev) {
		var pW = aLI(pW),
			uZ = (0 === ev && 0 === q5.pc.id && q5.q6 && (q5.fontSize = bq.lt.aJA(pW.y1, pW.a7p), q5.aJ8 = bq.lt.aJB(pW.a7p)), document.createElement("span"));
		return uZ.style.display = "inline-block", uZ.style.cursor = "pointer", uZ.style.margin = "0", uZ.style.font = "inherit", uZ.style.minWidth = uZ.style.minHeight = "1em", uZ.aLD = {
			q5: q5,
			ev: ev,
			pe: pW.pe
		}, aLJ(uZ, pW), (aL8[pW.pe] || (aL8[pW.pe] = [])).push(uZ), uZ
	}

	function aLJ(uZ, aHu) {
		var q5 = uZ.aLD.q5;
		uZ.textContent = function(aHu, q5, ev) {
				if (aHu.aLL) return aHu.aLL--, ev = 2 === q5.pc.id || (3 === q5.pc.id || 4 === q5.pc.id) && 0 !== ev, aHu.username + (ev ? " (" + aHu.aI6 + ")" : "");
				if (q5.pc.aJK) return "Redacted " + bI.fC.a3I(aHu.pe, 2);
				return aHu.username
			}(aHu, q5, uZ.aLD.ev), uZ.style.color = bq.lt.y0(aHu.y1), uZ.style.textShadow = 11 !== aHu.y1 ? "none" : "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray", uZ.style.textDecoration = bq.lt.y2(aHu) ?
			"underline" : "none", aHu.y3 && (uZ.style.textDecorationLine = "underline", uZ.style.textDecorationStyle = "dotted"), uZ.style.fontWeight = bq.lt.aJB(aHu.a7p) ? "bold" : "inherit", uZ.onclick = function(e) {
				bq.yM.aKi(e, aHu)
			}, bM.u5() || (uZ.onmouseover = function(e) {
				bq.xq.y4(e.target, aHu)
			})
	}

	function aLG(s, q5) {
		var uZ = document.createElement("span");
		return uZ.textContent = s, uZ.style.color = q5.aJ9, uZ.style.margin = "0", uZ.style.font = "inherit", uZ
	}

	function aLI(pW) {
		var pe = bJ.fC.fD(pW, 5),
			aHu = bq.pm.pn(pe);
		if (aHu) {
			for (aL6.push(aHu); 75 < aL6.length;) aL6.shift();
			return aHu
		}
		for (var aHn = bq.pm.aHn, aC = aHn.length - 1; 0 <= aC; aC--)
			if (pe === (aHu = aHn[aC]).pe) return aL6.push(aHu), aHu;
		for (aC = aL6.length - 1; 0 <= aC; aC--)
			if (pe === (aHu = aL6[aC]).pe) return aL6.push(aHu), aHu;
		return aLN(pe, null)
	}

	function aLN(pe, name) {
		return aL9[pe] || (aL9[pe] = bq.pm.aHv(pe, name || "Player " + bI.fC.a3I(pe, 2), 1, 999999, 999999, 0, 0, 0, 0, 1))
	}

	function aLR(pe, name) {
		var aHu;
		name && !bq.pm.pn(pe) && ((aHu = function(pe) {
			for (var aHn = bq.pm.aHn, aC = aHn.length - 1; 0 <= aC; aC--)
				if (pe === aHn[aC].pe) return aHn[aC];
			for (aC = aL6.length - 1; 0 <= aC; aC--)
				if (pe === aL6[aC].pe) return aL6[aC];
			return aL9[pe] || null
		}(pe)) ? aHu.username !== name && (aHu.username = aHu.aHz = name, bq.ps.aHy(pe)) : aLN(pe, name))
	}

	function aLW(aHu, aI5, pe) {
		pe === aHu.pe && (aHu.aI6 || (aHu.aI6 = aHu.username), aHu.username = aHu.aHz = aI5)
	}
	this.yB = function() {
		aL9 = aL8 = aL7 = null
	}, this.transform = function(q5) {
		for (var tJ = document.createElement("div"), aLA = aLB(q5), aC = 0; aC < aLA.length; aC++) tJ.appendChild(aLA[aC]);
		0 === q5.pc.id && (tJ.vx143 = q5.pc, aL7.push(tJ)), tJ.style.margin = "0.6em 0.6em", q5.q6 && (tJ.style.marginLeft = tJ.style.marginRight = "inherit"), tJ.style.font = "inherit";
		var aLC = 0 < q5.pc.id;
		return q5.aJ8 && (tJ.style.fontWeight = "bold"), aLC && (tJ.style.paddingLeft = "0.7em"), aLC && (tJ.style.fontStyle = "italic"), tJ.style.fontSize = q5.fontSize.toFixed(2) + "em", tJ
	}, this.pt = function(tJ) {
		var aC = aL7.indexOf(tJ);
		0 <= aC && aL7.splice(aC, 1);
		for (var e = tJ.firstChild; e; e = e.nextSibling) e.aLD && aLE(e)
	}, this.aHy = function(pe) {
		var h = aL8 && aL8[pe];
		if (h)
			for (var aHu = aLI(bI.fC.a3I(pe, 5)), aC = h.length - 1; 0 <= aC; aC--) h[aC].parentNode ? aLJ(h[aC], aHu) : h.splice(aC, 1)
	}, this.aLP = function(aLQ) {
		!aLQ || 4 < aLQ.id || (aLR(aLQ.pe, aLQ.pf), aLQ.pg && aLR(aLQ.target, aLQ.pg))
	}, this.aLV = function(aLQ) {
		if (aLQ && (2 === aLQ.id && 1 === aLQ.aJ4 || 3 === aLQ.id && 2 === aLQ.aJ4)) {
			var pe = 3 === aLQ.id ? aLQ.target : aLQ.pe;
			if (!bq.pm.pn(pe)) {
				for (var aI5 = (3 === aLQ.id ? aLQ.pg : aLQ.pf) || "Redacted " + bI.fC.a3I(pe, 2), aHn = bq.pm.aHn, aC = aHn.length - 1; 0 <= aC; aC--) aLW(aHn[aC], aI5, pe);
				for (aC = aL6.length - 1; 0 <= aC; aC--) aLW(aL6[aC], aI5, pe);
				aL9[pe] && aLW(aL9[pe], aI5, pe), this.aHy(pe)
			}
		}
	}, this.aJG = function(pe) {
		for (var aLX = aL7, aC = aLX.length - 1; 0 <= aC; aC--) {
			var fo = aLX[aC];
			if (fo.vx143.pe === pe) {
				for (; fo.firstChild;) fo.firstChild.aLD && aLE(fo.firstChild), u.removeChild(fo, fo.firstChild);
				fo.vx143.s = "[Redacted Message]";
				for (var aLA = aLB(bq.lt.py(fo.vx143, bq.lt.pz(fo.vx143))), g4 = 0; g4 < aLA.length; g4++) fo.appendChild(aLA[g4]);
				aLX.splice(aC, 1)
			}
		}
	}
}

function cY() {
	var aBp, aLY, aLZ;

	function aLe(aC) {
		var button = aZ.p7[aC],
			fs = button.fs,
			fu = button.fu,
			j = button.j,
			k = button.k,
			fxSmooth = (z9.fillStyle = button.aLc, __fx.utils.clipRounded(z9, fs, fu, j, k, .1 * k));
		z9.fillRect(fs, fu, j, k), aC === aBp && (z9.fillStyle = aLZ, z9.fillRect(fs, fu, j, k)), fxSmooth && z9.restore(), z9.lineWidth = bf.a2z, z9.strokeStyle = aLY, fxSmooth ? __fx.utils.strokeRounded(z9, fs, fu, j, k, bf.a2z, .1 * k) : z9
			.strokeRect(fs, fu, j, k),
			function(button) {
				var fs = button.fs,
					fu = button.fu,
					j = button.j,
					k = button.k;
				bD.tc.textAlign(z9, 1), bD.tc.textBaseline(z9, 1), z9.font = button.font, z9.fillStyle = aLY, z9.fillText(button.aJ7, Math.floor(fs + j / 2), Math.floor(fu + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.fu = 0, this.gap = 0, this.dv = function() {
		aBp = -1, aLY = bE.qO, aLZ = "rgba(255,255,255,0.16)", this.p7 = new Array(7), this.k = Math.floor((a1.a2.iv() ? .123 : .093) * i.iw), this.j = Math.floor((a1.a2.iv() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aLa = Math.floor(.26 * this.k),
			aLb = bD.tc.vB(1, aLa);
		this.p7[0] = {
			fs: 0,
			fu: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aJ7: "Multiplayer",
			font: aLb,
			aLc: "rgba(22,88,22,0.8)",
			fontSize: aLa
		}, aLa = Math.floor(.18 * this.k), aLb = bD.tc.vB(1, aLa), this.p7[1] = {
			fs: 0,
			fu: 0,
			j: this.j - this.p7[0].j - this.gap,
			k: this.k,
			aJ7: "Single Player",
			font: aLb,
			aLc: "rgba(22,88,88,0.8)",
			fontSize: aLa
		}, this.p7[2] = {
			fs: 0,
			fu: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aJ7: "",
			font: this.p7[1].font,
			aLc: "rgba(100,0,0,0.8)",
			fontSize: this.p7[1].fontSize
		}, this.p7[3] = {
			fs: 0,
			fu: 0,
			j: this.j,
			k: this.k,
			aJ7: "Back",
			font: this.p7[0].font,
			aLc: "rgba(0,0,0,0.8)",
			fontSize: this.p7[0].fontSize
		}, this.p7[4] = {
			fs: 0,
			fu: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aJ7: "The game was updated!",
			font: this.p7[1].font,
			aLc: "rgba(100,0,0,0.8)",
			fontSize: this.p7[1].fontSize
		}, this.p7[5] = {
			fs: 0,
			fu: 0,
			j: this.p7[0].j,
			k: Math.floor(.8 * this.k),
			aJ7: "Reload",
			font: this.p7[0].font,
			aLc: "rgba(0,100,0,0.8)",
			fontSize: this.p7[0].fontSize
		}, this.p7[6] = {
			fs: 0,
			fu: 0,
			j: this.p7[1].j,
			k: this.p7[5].k,
			aJ7: "Back",
			font: this.p7[0].font,
			aLc: "rgba(0,0,0,0.8)",
			fontSize: this.p7[0].fontSize
		}, this.aEC()
	}, this.aEC = function() {
		this.fu = Math.floor(.54 * i.k), this.p7[0].fs = Math.floor(.5 * i.j - .5 * this.j), this.p7[1].fs = this.p7[0].fs + this.p7[0].j + this.gap, this.p7[2].fs = this.p7[3].fs = this.p7[0].fs, this.p7[4].fs = this.p7[5].fs = this.p7[0].fs,
			this.p7[6].fs = this.p7[1].fs, this.p7[0].fu = Math.floor(.54 * i.k), this.p7[1].fu = this.p7[0].fu, this.p7[2].fu = Math.floor((i.k - this.p7[2].k - this.p7[3].k - this.gap) / 2), this.p7[3].fu = this.p7[2].fu + this.p7[2].k + this
			.gap, this.p7[4].fu = Math.floor((i.k - this.p7[4].k - this.p7[5].k - this.gap) / 2), this.p7[5].fu = this.p7[6].fu = this.p7[4].fu + this.p7[4].k + this.gap
	}, this.aLd = function() {
		aLe(0), aLe(1)
	}, this.aLf = function() {
		aLe(2), aLe(3)
	}, this.aLg = function() {
		aLe(4), aLe(5), aLe(6)
	}, this.a5Y = function(fs, fu, nS) {
		var aC = -1;
		return 0 === ab.a5B() ? aC = this.a62(fs, fu, 0, 2) : 3 === ab.a5B() ? aC = this.a62(fs, fu, 3, 1) : 5 === ab.a5B() && (aC = this.a62(fs, fu, 5, 2)), aBp !== aC && (aBp = aC, nS) && (bi.e2 = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a62 = function(fs, fu, aLh, size) {
		for (var aC = aLh; aC < aLh + size; aC++)
			if (fs >= this.p7[aC].fs && fu >= this.p7[aC].fu && fs <= this.p7[aC].fs + this.p7[aC].j && fu <= this.p7[aC].fu + this.p7[aC].k) return aC;
		return -1
	}
}

function cZ() {
	var aLj, aLk, aBb, aLl, aLm, aLn, aLo, aLp, aLq, aBa, aLr, aLs, aLt, aLu = 1,
		aLw = 0;

	function aLz(aM0) {
		aM0 ? aLt = (aLt + 1) % b1.z.aM1 : (b1.z.close(aLt, 3280), aLu ? aLu = 0 : (aLt = (aLt + 1) % b1.z.aM1, b1.z.close(aLt, 3280))), aLs = bi.el, aa.aLy = aLw, b1.z.aM2(aLt, 4, 1) && b1.aIX.aM3(aLt)
	}

	function aM4() {
		if (0 !== aLt) return 1 === aLt && __fx.customLobby.isActive() ? (p.a5N(3249), __fx.customLobby.setActive(!1)) : void aLz();
		p.a5N(3249)
	}

	function aM9(fu, aDu, wY) {
		var o7 = Math.floor((i.j - aLl) / 2) + aLo,
			oK = o7 + Math.floor(wY * (aLl - 2 * aLo));
		z9.lineWidth = aDu, z9.beginPath(), z9.moveTo(o7, fu), z9.lineTo(oK, fu), z9.lineTo(Math.floor(o7 - aLo + wY * aLl), fu + aBb), z9.lineTo(o7 - aLo, fu + aBb), z9.closePath()
	}
	this.fE = 1, this.aLx = 0, this.aLy = 0, this.dv = function() {
		bX.turnstile.fA(), ab.setState(6), aLj = 0, aLk = 1, aLp = "rgba(0,220,120,0.4)", aLq = "rgba(0,0,0,0.8)", this.resize(), bi.e2 = !0, aLu = 1, aLt = this.fE - 1, aLw = 0, aLz(1)
	}, this.resize = function() {
		aLl = Math.floor((a1.a2.iv() ? .5 : .25) * i.iw), aLm = aLl + 12, aBb = Math.floor(.125 * aLl), aLo = 3 * aBb, aLn = Math.floor(.225 * aLl), aLr = Math.floor(.3 * aBb), aBa = bD.tc.vB(0, aLr)
	}, this.a5I = function(oY) {
		oY === aLt && aM4()
	}, this.hz = function(fs, fu) {
		var o7 = Math.floor((i.j - aLm) / 2),
			o8 = Math.floor(.5 * (i.k - bf.gap - aBb - aLn)) + aBb + bf.gap;
		return o7 < fs && fs < o7 + aLm && o8 < fu && fu < o8 + aLn && (this.a6D(), aZ.a5Y(fs, fu, !1), !0)
	}, this.a6D = function() {
		b1.z.a5O(3260), __fx.customLobby.setActive(false), u.z.a0()
	}, this.eq = function() {
		6 === ab.a5B() && (bi.el > aLs + 12e3 && aM4(), 100 < (aLj += .07 * aLk * (aLj < 16 ? 5 + aLj : 84 < aLj ? 105 - aLj : 17)) ? (aLj = 100, aLk = -1) : aLj < 0 && (aLj = 0, aLk = 1), aLp = "rgba(0," + Math.floor(190 - 1.9 * aLj) + "," +
			Math.floor(120 - 1.2 * aLj) + "," + (.4 + .004 * aLj) + ")", aLq = "rgba(0," + Math.floor(1.9 * aLj) + "," + Math.floor(1.2 * aLj) + "," + (.8 - .004 * aLj) + ")", bi.e2 = !0)
	}, this.z8 = function() {
		var fs = Math.floor((i.j - aLm) / 2),
			fu = Math.floor(.5 * (i.k - bf.gap - aBb - aLn));
		! function(title, fu, aDu, wY) {
			z9.fillStyle = aLq, aM9(fu, aDu, 1), z9.fill(), z9.fillStyle = aLp, aM9(fu, aDu, wY), z9.fill(), z9.strokeStyle = bE.qO, __fx.settings.smoothUI && (z9.strokeStyle = "rgba(255, 255, 255, 0.3)", z9.lineJoin = "round"), aM9(fu, aDu, 1),
				z9.stroke(), z9.lineJoin = "miter",
				function(aMB, fu) {
					bD.tc.textAlign(z9, 1), bD.tc.textBaseline(z9, 1), z9.font = aBa, z9.fillStyle = bE.qO, z9.fillText(aMB, Math.floor(.5 * i.j), Math.floor(fu + .58 * aBb))
				}(title, fu)
		}(L(172), fu, 3, aLj / 100),
		function(fs, fu, j, k, aJ7) {
			z9.fillStyle = bE.qJ, z9.beginPath(), __fx.settings.smoothUI && z9.roundRect ? z9.roundRect(fs, fu, j, k, .1 * k) : z9.rect(fs, fu, j, k), z9.fill(), z9.lineWidth = 3, z9.strokeStyle = __fx.settings.smoothUI ?
				"rgba(255, 255, 255, 0.3)" : bE.qO, z9.stroke();
			var fl = Math.floor(.3 * k);
			bD.tc.textAlign(z9, 1), bD.tc.textBaseline(z9, 1), z9.font = bD.tc.vB(0, fl), z9.fillStyle = bE.qO, z9.fillText(aJ7, Math.floor(fs + j / 2), Math.floor(fu + k / 2 + .1 * fl))
		}(fs, fu + aBb + bf.gap, aLm, aLn, L(49))
	}
}

function ca() {
	var a55 = 0;
	this.dv = function() {
		aZ.dv(), a55 = 0
	}, this.setState = function(aMC) {
		a55 = aMC
	}, this.a5B = function() {
		return a55
	}, this.aMD = function() {
		this.setState(8), u.y()
	}, this.a66 = function(e) {
		if (!bV.aME) return !1;
		if (!(bi.el < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aMF()) return !0;
				if ("Enter" === e.key) {
					if (0 === a55) return !0;
					if (7 === a55) return !0
				}
			}
			return !1
		}
	}, this.aMG = function() {
		bc.resize()
	}, this.aMF = function() {
		return !!bc.ub()
	}, this.hz = function(fs, fu) {
		!bV.aME || bc.hz(fs, fu) || 6 === a55 && aa.hz(fs, fu) || bb.hz(fs, fu) || aU.hz(fs, fu)
	}, this.a5Y = function(fs, fu) {
		!aU.aE5 && aZ.a5Y(fs, fu, !0) || aU.a5Y(fs, fu)
	}, this.click = function(fs, fu) {
		aU.a5x()
	}, this.a5b = function(fs, fu, deltaY) {}, this.aMH = function() {
		aZ.aEC(), bi.e2 = !0
	}, this.z8 = function() {
		8 !== a55 && 10 !== a55 && (z9.imageSmoothingEnabled = !0, this.a23(), 0 !== a55 && (aU.z8(), aP.z8(), this.aMI(), bb.z8()), 0 !== a55 && 6 === a55 && aa.z8(), bc.z8(), u.z8())
	}, this.a23 = function() {
		var aMK, aMJ;
		if (__fx.makeMainMenuTransparent) z9.clearRect(0, 0, i.j, i.k);
		else bV.aME ? (aMJ = i.j / bV.fw, aMK = i.k / bV.fx, z9.setTransform(aMJ = aMK < aMJ ? aMJ : aMK, 0, 0, aMJ, Math.floor((i.j - aMJ * bV.fw) / 2), Math.floor((i.k - aMJ * bV.fx) / 2)), z9.drawImage(bV.a24, 0, 0), z9.setTransform(1, 0, 0,
			1, 0, 0), z9.fillStyle = bE.qJ) : z9.fillStyle = bE.qF, z9.fillRect(0, 0, i.j, i.k)
	}, this.aMI = function() {
		var fu = Math.floor(.3 * i.k),
			canvas = ac.xL("territorial.io"),
			im = (im = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : im,
			fs = (z9.globalAlpha = .15, z9.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - im * canvas.width))),
			fs = Math.floor(fs / im),
			fu = Math.floor(fu - .5 * canvas.height * im),
			fu = Math.floor(fu / im);
		z9.setTransform(im, 0, 0, im, fs, fu), z9.drawImage(canvas, fs, fu), z9.setTransform(1, 0, 0, 1, 0, 0), z9.globalAlpha = 1, z9.imageSmoothingEnabled = !0
	}
}

function d0() {
	this.aIt = 0;
	var aMM, aMN, aMO, aMP, aMQ, aMR = this.aML = 0,
		aMS = [],
		aMT = 0,
		aMU = 0;

	function aMY() {
		aMP = aMQ = null, aMR = 0, aMS = []
	}

	function aMW(aMZ) {
		aMU = aMZ ? 0 : 1
	}

	function aMa() {
		if (bV.aJu.aMZ(aMP.fR)) return 1;
		(aMU || bi.el > aMT) && (aMY(), ab.setState(0), b1.z.aMc(b1.z.a5J, 3290), bi.e2 = !0)
	}

	function aK0() {
		var aMd = aMS;
		bq.aHZ.aIw(aMP, aMQ, aMR), aMY();
		for (var aC = 0; aC < aMd.length; aC++) b1.aAs.aMe(aMd[aC][0], aMd[aC][1])
	}
	this.dv = function(aHZ, aIl, aIn) {
		u.y(), bq.yB(), ab.setState(10), aMP = aHZ, aMQ = aIl, aMR = aIn, this.aIt = aHZ.aIt, this.aML = aIn, aMM = 0, aMN = bi.el + 4500, aMS = [], aMU = 0, aMT = bi.el + bV.aJv.tA.aMV, bV.aJu.zp(aHZ.fR, aMW), b1.z.a5J = aHZ.a5J, 1 === aIl
			.length ? (b1.z.close(b1.z.fJ, 3281), aMO = 0) : b1.z.fJ === aHZ.a5J ? (console.log("direct pass"), aMO = 0) : (console.log("delayed pass"), b1.z.close(b1.z.fJ, 3247), aMO = 2, b1.z.aM2(aHZ.a5J, 5, 2) && b1.rt.aMX()), z9
			.imageSmoothingEnabled = !0, ab.a23();
		aIn = ac.xL("loading"), aIl = (a1.a2.iv() ? .396 : .25) * i.iw / aIn.width;
		z9.setTransform(aIl, 0, 0, aIl, Math.floor((i.j - aIl * aIn.width) / 2), Math.floor((i.k - aIl * aIn.height) / 2)), z9.imageSmoothingEnabled = !1, z9.drawImage(aIn, 0, 0), z9.setTransform(1, 0, 0, 1, 0, 0)
	}, this.nQ = function() {
		0 < aMO && bi.el > aMN && (aMO--, aMN += 4500, 0 === bi.aMf) && 0 === bi.l1() && b1.z.aM2(b1.z.a5J, 5, 2)
	}, this.aMg = function(oY, aD) {
		return !(10 !== ab.a5B() || !aMP || (aMa() ? aMS.length ? (aMS.push([oY, aD]), aK0(), 1) : (aK0(), 0) : (aMP && aMS.push([oY, aD]), 1)))
	}, this.aMh = function() {
		10 === ab.a5B() && aMP && 2 <= ++aMM && aMa() && aK0()
	}
}

function cb() {
	var aMj, canvas, a4M, aMk;

	function aMq(eU, name, aMr, pW) {
		a4M[eU] = name, canvas[eU] = new Image, canvas[eU].onload = function() {
			! function(eU, aMr) {
				var a7u, a7v = null;
				7 === aMr ? a7u = bD.p3.a7x : 9 === aMr ? a7u = bD.p3.a7y : 8 === aMr ? (a7u = bD.p3.a81, a7v = .1) : 3 === aMr ? (a7u = bD.p3.a7z, a7v = .06) : 5 === aMr ? a7u = bD.p3.a82 : 6 === aMr ? a7u = bD.p3.a7w : 4 === aMr && (a7u = bD.p3
					.a83);
				canvas[eU] = bD.p3.a7t(canvas[eU], a7u, a7v)
			}(eU, aMr), aMt()
		}, canvas[eU].onerror = function(e) {
			console.error("Error loading image at index", eU, "Error:", e), aMt()
		}, canvas[eU].src = "data:image/png;base64," + pW
	}

	function aMt() {
		aMj--, aMn()
	}

	function aMn() {
		0 === aMj && (aMj = -1, aMp(), bi.e2 = !0, canvas[7] = aMk, canvas[8] = aMk, canvas[9] = aMk, canvas[10] = aMk, 5 === u.vl) && u.a5F().aMv.resize()
	}

	function aMp() {
		aM.a9Q(), bb.aHR([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.a2V = new a2W, ak.a2V.dv(), ax.dw()
	}
	this.dv = function() {
		if (void 0 === canvas) {
			aMj = 29, canvas = new Array(aMj), a4M = new Array(aMj), (aMk = document.createElement("canvas")).width = 1;
			for (var aC = aMj - (aMk.height = 1); 0 <= aC; aC--) canvas[aC] = aMk;
			aMp(), aMq(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aMq(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aMq(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMq(3, "orders", 6,
					"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"
					), aMq(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aMq(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aMq(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aMq(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMq(8,
					"googleplay", 3,
					"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"
					), aMq(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aMq(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMq(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMq(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMq(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aMq(14, "bestPlayer", 5,
					"iVBORw0KGgoAAAANSUhEUgAAAHcAAABkCAMAAACLpV+NAAADAFBMVEUAAAAAAi8EBE8ZBQgUBwgbBwIQA24IBXsTBGIgCAYZDAUkCQonCAsdDAcSEAciDQsrCwgZDxwQESwnDQcYEwMvCxcfEgUxDAtOAzEbFwtPAzlpAAJlABVoAAtcADhfADBhACpjACMhEkUyEgtcAUAuEyRaBUYeHQkuFS1NC0EuGRcaF4MpFHRVDisyGDwgHnAlJg8aIIEoHmY9HFlmFhBgGB1ZGU0sLRI1KTYxLR8rJ4Q2LCxJJUg0Kl5QJVEzNBhYJys3L0pUJk1GK0dKLTAfM48tNGS+EANJLlVXMB86Ohk0NHssN4q8HQBWOiVNPSNDQyFLQC9kNGVRPGJMP1VlN15cO1thOl4+RV89RHhtN21ERldWQF1KSSFPRUI5TiwAYDQCXzq8KQ5KRWlBRYtGSzQ3UTZNRn8wTZkjWjJjR1jBLisZYEdSUSggXzw9T5A8VGZWTGgAbD4AbTMHakNkTFMtXz5aTmN+QX1FUodPUmQ+XDRLU3RdUz9PVGwHcDC5PBdbWCsAdUVGX3EAezkqbF9iYTJEYaRTZzlZYHhXYIe3TBq3SypsYEpeYXJYYn9QY5eRUJAAhTlzW4kAigpoaDJLa4G/TT6LWIR0Y1peamCdUp2FXngAkQ+AZGnCUk1yaWq0WyFYcH5nb1QBkyFibYVucDm0WzI8fHp0cEQAlT9XcqRQc7JicZJrcH8CmDJVd41+b1rFXFh3dzwCniKnYKIwkDGxaS2xajt1c8UApjIApT5xe5tff65/f0FNiZGccYx0ecOQfEFqgKFjhJR0gpNFmEiteT5ygcN+g4GIhFVgiqOPgWSHhkmVf3GAh2yJiENwhsCkgUORhVxikYR5ioZrkXeigIZXm17Id3FdlaVtj76Qjkq9g2Vslrt4l6JqoWhnm7tjnbNDr1uYlk+Fl6yKlceenFGWlM9ls3N6rHynpVeNp8SJrbqPtJexr1umsJCorNTYqKWgzqbVwbG3y9i30LnJyuPlzMrG29Dq5evW7tji6ujk+Or79vf///99szH1AAAb+0lEQVRo3oWaDVwUZf7A9+RFXtwFj01dRF4SGAiU0ZRRQDZBLhs4G0hRkCUQUrRmCRIFQu5WvSEoF/Bcg0M5zmQKlRVvei8nCqwsl7a8ope5q7v/XnvnnnqZqanp//fMzL4h/f8/ceEDs/Pd3/vveeZR+Pj4iv9k8fOWwEklWBT5h7Cw4BBZ4DfO97luoJR/8PX19Qvy9UOMoKAgXwX6wVf88vHz4Eq3CPx5bkJHR1Nc8LQwkGARHCxzpUs874JEvLVIELk+Ch8PQX/xUNNvEqCTm9By7NjRNokbJqofIv/RgwvflU6s8wW9TuT6+Exi3eAQt2mRdYPRz3ENLS0nWzoqQt3c4Du4gYEhgX53iMz1Rfb189L3TiWDJ8i0oqqqk39vaelYHhZ2j4vr9S50l5DASbiI4QNcX8kGfi7vTh5FXrKsKqf6ww8/rKxuiLvnHlnhsOCJbwyZTF0n10NR6afA/5+bUJmT9+Ho6OhgbnWRk4te7sBOyvWT9HW7VeZ7vXFSbm5O8uDo0NDQaENudcU9YZKTwySFXXQI8J/Hgr6+E9PWFU8h7iR1+nXatOBpwcty/NuGDoEMDVXmVi8JBZGjK9DtZzG8Pe6qnMD1dcVx4CRY9GYRKEGnTQudNm1+XlIlYHft2rV/6FRK5aY4ERwa6v540ocN8agigUploCfWT+GRQPAnV7EQ89EloaESEwDTEvKSUvqB2tjYaNw11Lagsgj9OtTJDXN9Vo/qhRJZ6ZlJPp5cz2rhhQ0W7yzdflpukn97v7Gxcf3q9Y2Nuw61pVU+FCqZOli0dpho7juiLNCtsI8rnifJoOA7uJIsW+DfANjVJdnZ2SXbm1tP5aZVLpfAYBdnEQnzyqoQb65nHv08d5oHd2bo/DT/3P7WxtVZqeHhiVnZNc39/Sm5lU4Xy2p7J1WInBeeDvZTuHJZBod4c5Flpzm5M2cmpE1N6e9vLMmKn5VeOis2NQuBk/M2ue0RKpvbg+rkehhajCs32V2PZXCo28IzkSxMSgbnAnaefufOrSsiU9fWtJqbkisr3NzgMNHkro8/CRdoCle3cHJD3NkT7KGGiL03CTkXsFEbd9bW7tTPk8BFyZXZoV4SHOy22SRc5N87SkbIZOEErp05c37yVHBuzZr4yPyttUg2RkemFgJ4YZqUxW5be4oT7FU3JjR775DyVveuZP+U9tbta+Mj79u6tRxk69b8qNjUkhpzX0DKsrvgChdX7hTSdxc30Is7ScudwJ0pyRT/gKbWmsLUyGg9YDdv3gzk+xC42bzOP2XlTAk8VyqbwcGu1hwSPDGg/Zzx7E1GyDAI42APXe+6617/gKLWmhLAbtxavvmpp9inniwv3xYTFZ9Z0my8OyBl/vz5cXfNnDvXFV2h7llkIhbieZJe70ogqI13Jdx778KFKcn+/v4BywCbFRuVv7V820cD77zDsU/qyx+JiYzPAvD2Kf7JSWlpebm5y5bNTxBNFeYqI4F3csWyNZmd4xKWL1uYkpaWlpQ0FUGn3H1383aEvQ+0vHDlv5988sk7CLwKwJklNca+mpSAqVOnJi1Iy8mrzKusLEL8OM9BxG8yO7upwFuWm5snAaf6L9xU1GQ0gxhrwLexUTHbEPbGjcvvvYfA5frFYOrUwpKa1tb2tra2hk2bUtKSkgGeV1VVXd3Q0FCx3AMc+DP+DS5qaanKy1mQNDU5paiprc18ytzfD1+trTU1JZBAUTGPlOv/cuXGTz/9+J4M3rYoJio2PgvIgG7tBzG3t7c1NOTm5eXkVcHceazJiXXrPVHfX7VUVeXlVTa09Q+OnjrV346Irc3ALFmblRobGR2xqlz/u69//AnkshO8cVFEdGRsfOqawhJg1zS3SngYSIZGjh49evLYsYQ7+pJiQjNqqDp2/vzXMDsd2r9/PxBFZCEwU+NjQdk5q/T63711/h/nbyLwqxJYv+2BOTHRUQidmrVmrUhvbm7dtX//0BBMf/9sObZ8Uq6nvm1VeedhZEPzBPRYSc3UeGBGRkXHzFlE6R974a0v//63v/2ANP7rKwjMPbW5HMgRCB0ZGxuP6IUl26E570Lgrztajio95zXR0IoJYdXYktPxtYiFxl6SIaoZGQXMmIjFqx4GZV946x+A/erbH27f/unyn1555T0xrIH8yKoHFsfEABzRw7OyYSxA4NHTVS3tUtHy7IcKH+/0DRnMSfp6FLCPr1+dnRiOkPPuW5X/yMZtUBdFZQH71Vcff/zdzdu3L/8JgZHKQNajyqnftvGR/PwV982LTMxAYOA2VB9Nv7NMKySqnxpTS/D11VOLRkV1sxNnrQCeXqrFAAVdQVkJ++1V4F57XgYj8lNPyuytW2t3bt04KxE0Bm5/Xkuru0y7piyJ64dpSQITvRDcv2AqMvP61Rnh6Tuh24lIYAL0yy9FGyPsD4C9dfn5p592kQHNPvUUYpdBi9xZGp6BuKO5VR3pTq4Sw3EsyMUNDMS0tIEmMT9UqpDCnyJu1qxtgC2DvJGZoCtSFrDvX70Ncu3Sb38rgV9BKYXYSO/NInjjrKzVMPaZ06qandOeEid1lBZzcgMDg3AdTbAGLSaOvf1J/sjOq7MigVtWhswrM/8mUT9+/7vrCPvFsxs2ANhFltV+anNZWe3O/Mis1c27DuXlIHXF4dYPIw0GmiZULq6aoE0Yw9HEDGSP0oapC0cPIW4+cMt/98KX/xCZLur7onNvX3p0A4ik8p+ef+XVV1+VyAPP6ctq9fNiM2paD7UuqGoU2zF4UKM1cCTFaDVObhBG0DyF8yZKVDjYnBZgNBu3QwvYVlumf0GMJcSUqW+/fxWpe/2PG379axn89NPPg4jkT9754DPg5keFFza3nk4BdWVsEEFzrMLEkKKHgavCtST6lcFi0GpQ6y1tm7rstLEROu2KreV6OWFFqIh9G6UQ8u6G+0WwRH5GIr/33jsfAXdbTCSMA4faF1Q3hsodCSNNVoLgGVIMLeBiJG1gWCuG8SyFK2EZFAoKVxwChcUO/7u35IxFUKAC9/otCOZrf9xwvwv826efeeYZkfvJfy98Vl4OY0hWDaib1ubswGrCwJtANwaFllKp8FMRNGXgOEGnoEFhDHHT26ZOOWXcXhgftbi8/DEn930ZC2DEvXQ/Ehf4GQRG3CsXtpVvFNU1tyZVNcprlxkYxVpxBc+bTDStVQcq/NRag0HNWQWW0rKsDp8B3FBjXoDxtBEMjbreC186uW/LgrLIi7vBzT3738/0+sXRsZmgbnJa2z3yuANBZaEJ3MbzBg24OFDhoyIMnJaw2gUtR4L1MTSiIIXNMDnGRi3WI0ODfz24r/0LwNf/fP8d4OfBvcjMVAREVY25IrmyUZ4vZ+A6liUYg93GqWiIX6XCB5IXgoqyOyhBZxJzCTQ25gZUmEWF82VDu7mvvYYUvvXFholc8O97l8HM+kXIzMbTAQva5spcjGR4kqetDiuO8ZBKSjGuGCupoi9yJoHgTGAD0Piedv8pYipFL9I7De3mvgYOvnXtWZn7axcXsDeufKZ/cA7MmDWnfzW1cr08Xc6AHGIou9Zh1ypMPE0EoXgOwiGLtLTJTjloGhRWI4UbcwOWn4ZUioIBAxnam/sv4N6SDb1hwx///CwKrOf/+tcffwJu+eyIqMRCY19AUtvcuSIYqcvhAm+6SJFaK6imDFQEBkoK8zRL2gScRcUDXdrqP6VPNPQivcz9+H0n9rXXrgL30qMy9tplKJnPPnv5MgwhNy5s2zgbmblvmX/l+pkz5zrVpemLOqvBpEPqqgKVwA2cgTxM2SkV6zBQHBQPNKuXFk35pRlSOGb2RpeD3dzXroOhvwDwhi8uId2vXbt07TZMIN9/f07/CHAza2oCklvnStwwnDKxmGDHaJNVa0GeDAxUhKD2hLxutROkzYKbTBQehlYIxoBfrIaIjp7zsORgby6y9KU/3n//o9du3XYKaPv9vz/f/PDsmNjMinsXNpTCXZCd1agwM3ZOQV+kTJyOUIdI3BlQsVgT6bBoBiyMVlQY3rGi4hfztxfGRv0M9zpK4Ucf/cKNvQ3Y/zmyt0zm5jbPFblzwyCHGNwiUKSD16JMDZL0VeJaHW3iSdY2cOLE2aUMFI974A133ft/cd+G3nDr0rOXAH/zypUrP928efOnG+f+/cYbTu7K3E0rkNnmhqKgIvacPZtvsWshUdGAAfU5JESjpWmW5VnCcqa7d2zPUg4+0tyZc+/1n9It2fmxSbivQZG+haiAPXfh3QtXfvzxyveAlbiRqQ/15VZXiCtECCqWXnpmrPuMwJAWljGAoUUutGNcZxUEcs9Y3ZLhsXyUSzNmzkzxXz5WkxUbM3vbYy94xpXT0GLvv33r5pXP392372Ukx48D98gTeuAmPmQ0VjYsAW4YRjGc5sR43dKxD3DWynMUTcHIoUANimFUlGDnl46NL9kyPoZBimOhdycF9JnFPHIXShH77Xffvv2vf0GtlDx75ZvP9yE5fPi4zC17ICIqfmXN6cqGCkldjiodO6CqG9tD2WxWLc7ocNQHxQ5lUJCCgz4xvsX3wHgphRROgR7cjOrGgx5149vvvvvu6vXr169evXpdDqgL7+6TuYcl7u6yh+dEx6ZWmM3VHQkzIYcGBjRjw0vSh8c0FgePqVCF8JPqFWWyaHWURVg6NuybPjyePjBALc8JOG2uyYqPivCok+9fv+6M3VvSy80fz+3b56UvOLj8AWToptObOipC0XBDdI9vUWwZ7zY4TLiCgbqhluZJGK84TmulGQrcgC6AXCpKKjK3OvuCHFbvf4fC6OZNJxYFshuLuJKhyzdGoAKNFF4CJcmQPj7sq0LqGhhGZ4WBI0jm4iRY2uBgNOljB3yWHBhPZ/bk+febawqRurJ7v/32u6ti0ly48OPNH69AAN+8ee7c5/vu5O5GCsemgsJFLU2QQ1jveLovaENoeQHnWTGcEVeNEySUTZJzcKre4SVr0sd7lzal5Z5uLcmMjc4X+/5/zv/nhx/kpHn35W+++fzld18+9825l/e5xcV9Y2+tuOuxUlR4B0eXjtdlxw2PB2kFB+SvQZ6vYHiG+cpg4FjcahuoG16zprh0fHVeUpu5GZl5G1L3/A8/iKPczZ+ufPPuvsnk4EE398ju8vJV0fGpoofNA9PHexPqs4e3LBUcjI6H8QoKB9IXygb0eygcBtJyZryrM6Ezu/dADtofg6haVS5y0aITyuCV7899fnhy7EFXXImGhnlSVji/bjy9M6O+q/eMjQMrM4xJLBwKSF8DiTFWEHLPmdI1PQX1nUuqk9r6ZXXRHCsudqH6vnv8+OGDByejHjzswQVDb82HyKpoP72ppWm8tKAz46WXesfOYiYLB/MVjlZECnGM1ym0rGCzLB3rVsUlJLz0+7xccyuKqlVbyx+Tud//+9z/HD98+MWDXuCD6N/Bgy++ePh1CSpzy/ViKpnNDR29CS+tySqIWzqWb7AJAqtVGaAOK5F/IX1pFUnxDq50vDeuuLizckHbITBzbLS+tgwtecHON1Dtff311w+/iMgH3ViR+iL85Q0PLiyQ8iMTV9aAwh1N4LqMOAhW0mbnSYUKzXBqNG+oCR1rpWleRwt09/iBhM7OvLT+/cjM+bAchGnjrfM3bkCLk8CvS2CRuG8S7JEje3eXlaEFUnhmRfMhc0dHZ09PwYrxsXRB0FEMxqJOCHMOLH41BKSRzgCfhlSOAbhyQdOh1sbCxFl6tAyF9eBfoEB8/+8jLrBT5YNe2CMge/fu3v0EwtbuTEfcXacbOn7fmQXtppSGuBUIhMWhASvQYl8C03Y7i6f3dhVXpfT3G2G5P28rWoeWwUL/M5DPdx85clwky2AvKlJz9xO16PpyaeEN3OXrdg31d3RkZHeN71AQnEPATTJWKa73gzAtAutsNsuO3q5NOQ1D+8VtBj1a75ch0YOU1f5m797j3mAZC9AnEFCSWoTVz0sE7uP7TyGFu3o1BpuDx8WyoUbbCiIXI7QUTBzQGiwneruqFgwO7XoccdNBYXHFX77tyYdBNpc9sfsIUtkJdmLBo5sppzwiyrxZiRnAFRXu6eo9YbGxCEsRmNq5zwDaQsVmeStNfTBWWlQF6gJ3eUb4rHn3zYuJiIiYAzIbZNGDm8t+I6osgUXsG8f3PlH28KLZs+dERMSgjaToqKioyFnhCAvc/aMNR9uy6k5YBnCWNxloSmwLUh/U0QxnsQo2O0Od6a3OGxG5q5dnJIbPQptXSKLhjhFzZi96uOyJvUck8IuStgj74OzZ0rZZZCzaOItPTEzMzEZYxB08enRJ95kBnBcsPMeZwNLyuhsWohoV9CTWaqPzzVUNo4j7+Pr1q7MzsuAOcJ/w8Fi4ZxQiP7C5zA2Wsatmz4mRtglTM5GsXJldsnqdhN0/NNpx8s2xE1qbw27lTDRJomWKs+/DGKtSaGHWm95SPfIhcEUwoFeXICksLMzKSg1HZBEsRpcob4jaRkRHxqPNQbQtinZGRXkcPblEO4UjJ0f2+FIMhSsUCkwH5Vkl+RfSiOGsPEPQVvtHxzo+/HBoaD+QAd3Y3Ii+QLZvX11SmBUeGR0x+8GyWhcYhdRmWA9FxmeUbK8xGtFGdSu8Hjpkhv+ffjo6+vXXX58/9nEpw1tYrYZmeYhoTI4rJTR+8LDVyurIwWMjcOWnkpxG0tdn7Dv90bq7715SV5KRGBsVMftJ8LGYyGLvgTFOfJqzfWX2+sZGuLqpubmvuampqehXTe0NDR0dR08eO/mBjaO0JquVY2jXvoq4gQXrQc5iswtvHjvW0lBdmZubsjAFvuAlIMAfSUDywsK67StTAfxAWdlvjsiluKzsSRG7fSx7ukLxiylT0OVTRUlKWlBVXV2NNr4H8wnGIojuJaQNO4mrRFHFQ0Q7PjoJ4Kq8nJwFSUnym3Ny8vIqK6urG4oqKipWIo2p8jIoXggL1QKGuPjCmr4+hWJ9Y3N7e/sgyJuynDp16p9InrNdvGi3WXkTLW/XufTVURiG4fD/1H/+809ZRkAGIQs6OtoaAPqrhramRgCDj/UA3ntExD4MM1xWjbFm4S/XGftEMR84cKCrq7Tzpa7h3rEzZ/PT05cyJhCGMdAGCg/y2BeFkDYwENQmhtb9oe8PIM+d6O7uPrAlfcmSJdn19cUFmRkZCcs62oyNFZnxkTEPQA1+QuoAi6PR1o1x05RfNiYkZGRkFhQX109PyKyfDiPG2NgZi4BWARDIKjVURchYT64U0qzV7rgI4rDo4DIMW7pny9rM+p6Mzp76jIL6YiAXDfb3NT2UGh8Vs7FcLNtltY/ERIYXNhuNuVOas+dnZBYXFxR09hRn1mcmZB/o1qhUQKR5we5wOLzs7OPcb9cQJG2ikR00JMQdXGizDNStrQdmfUbC9PpOUKSgYHCw3yiCF+slrH4xsnKzsS1gWU1BJlzRU6xIKO6Z39NTv6ZugOMtUJFhsWniBZvVwjE6rayu+3mKGkwNRZ0kcEJnMLE81LSBHXVr6uOmZ9R3ZvRkTi8Ac1eMDJqbUWxF56OGUVubL1m5PTegaXp9fX2morgnobMgIS4DsDs40POiww6zjQKJmtHJweznfi6JugO0JFSkQQSOVKhJnttTV5hdD3bLAENn9HTOn942MtjXhFw8bxvqdjBFhWfXtBo3JS8rUGT19CQUZxSDXzrXTF9bt2NgANNADUaBw3E8x0JllrGynaVHDKgJQ1NCvhBMOoMVLM0NDPSi2EzwXfNSZ0JPZnFG/cib7WBpAK+AHlu7AoaZ1WDltOTf12dmFvfEdXZmK7I6u7rW1p0YEByoWHB2CBm7wKPcdRrZTzxH4bI0xBaY16TDFDoWohDHcZNl4MSJ7t70A8PDXXGZmUAWLQ3gxFkrNm5cMSscPQs1b0oreqgYvFqwpGt4eEv6gd7u7gGLFqcZi01gSdIE33gWQkft+TzU9dwZBnhUsxXoOytYaYzmDDgncPndY2NjdcNb4jp7sqYXDyJLrwNw+KxZgM1e12puy035/ZrpBT31ii3DdWPj3XV7LBZGx4FbGVgNSd0AklRHBE3gSmjggaVNEA2QSxyhwEidGtZMOP7B2bNLl471FnbVw6R0YGSwv6l53cqMRLHJrmtubd2Ut+lAV1xWfdeW3jHVjrNnBxS0zU6pCBLDWLiVjWcoAldpxfWnh52dXBVENAoBiyAwuIIw2S4ynMNAYZzDosWYsye667YUggnNYOnW5nXLV86fD60dJsa2ylxjd++WtVvqek+cJVW0YKc0WquDtNjgNiqTHSLaCu6T+p/3uRHJ1NCWKAqSiNIQBt7muGhCi0Qr5bBqeYoXBvIHdnSfGNDsAUsbd61btxxk3bpdZuOm3JodS890QwDvsAioGDoE0kqabKT9op3TqVU0yzIGA61zlmaP81c+zpDGIHtpysRbLIKdwSlKcOgEgeDthM1GEZDRFoua/OjNkf5Dux5fJw0UoG7lRxghfDAwwCkYO69z0LSD4R0MaSAEuyBYYKIw6LQEgWv8JuPK7CBpyIOiaVBgJpg9DVZIBZ5ysFqtTSDhE2Dc6ZHBJjQJgez61Lwpt4/BKAdjEKwqXLDjNhtN27V2B69VENDSQVDPVQcF+XmdC/L19T5NGIQRJEkZOIMCbCsIWoZgrQJjEiiBdPBqg0PLUbZTI4MNInjXofa2yiaB4KiLWsxmIy2Ug+QFK8yJjN0mGBQEz9I69EAhaMIJOzfX9VxUqcZwrUGnYaBSCoyKgFIjUCbSatc6dBxpIx2U9bmRkTZxEtr/aX9D5UeswUYLUHPspAPca7LyFgOutlp5K4sT0Alcz+a8zgX5+vp6HVBFwzxUEJqBJTLLqQmeN7FWDGftoJXOYTIQDp4iW0cG22EG27+/v62yiCbsNoq22Amestt0hM5qQk6irKyJ40hah6uDvE6aSecHEdd34plNJQbrBx1FsyTEkoE2sQraarHiOG+3agi7nVQPQEyjx+iftjVUlioMDquKsNkNBAUJg+E8Q5sAzKD2ZhCj2OOcio98VlPk+vp6c0OUGhz1JRpnWQNJmXQ4z7I8ToLpKEywmgi2FCw9OjT6ZkdlkwnjBF7BQIqqdDwsCRQmaH2w6MEZSqvVoqes3lyfCVyPs1BoTzpIjR6Soo6ppSGnaYMJA9OzsIA1wWpD2w4z0IcjRzuq88VBRQXthqNIFiosWIogYHyhocdrNOpAr7O5kr5Bvr4/x4WLUWTD5wU+pLQWPVSjKZrRoR0ZLTZ95G8njx49Wl2Bag3NwD9AGdBqgNaRmAbXUiiKvQ+M+MingRFQ4cLKB2b8lDIWFTBMg9aqUExwiHE0E2gpHUyimCYkeN1XX311sqMhDj1Lht9ShIjCcYJApoUKhAHWb8I5M5Hr6+vU1/NQrtLjXKvr6EOQX6BSg0HyayAp1ErxMfHgV1993CEeRUFoXDMDxlGNUjlDHeQ+JCIenXQdvRYxIlXi+ngGtNLjOO0kR66VSvGhOOBCmgfbl8hnHpXKkGB0MmOCTDj8LYayB9cJFrFKj0PLgT8n6BT0xHNEIYE/g/WgBgFW4v4vtt0gxYBWEv8AAAAASUVORK5CYII="
					), aMq(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aMq(16, "apple", 3,
					"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"
					), aMq(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aMq(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aMq(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aMq(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aMq(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aMq(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					), aMq(23, "clock", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAZGhkoKic1NzRYWleAgoCjpaIA/wA4/zvJzMl5/3nk5+Sq/6rI/8fm/+b///8vfxrjAAAC1UlEQVRIx4WVMYwSQRSGh+O4hFBIe901VjZUlxgb2gvF0VhcLLhGGwrKI4TDksYoiUpCLCgxxgjqxeSyxZZngVIehYYSYzRcjIfurfB882be7Oyy6CvYYfbbN/9782aeOPqPifDfF8PPw+frgZczkLZ8Hw9UPwLbt2YMUJ1AYH9igBHO++27t+89k8TXFeAVzrbzQtr1Lo7HEaCOc0+EtmQZlfZCgBTwWL5Lne7g70YF4CoEPAQ4oY8zcCgfmy5AzwKqM/CyBFyDFj232YVgB4ciBIiKdqGAGVyKCLAF8MUAGELRANoVulgYoA9zjjDt53kEcKYBlNhiQGR5kHBpDQkcgy9ibJ/WELTCzzgAZTYVMDPCAtvDKRfOCaiBn42+T7kouwS/CTgOYjBWkYnJyLJA4BG8jr5PU2a3YEnAiCWkHJ2uZJecbshsC6kxz3HpaArgE9rFVAmpUTsugZ/Te32ilUwRqIOngRsAbxTo5bTLXwg0zE7il55KkM58BmtCAiaPJRJfMWGnMU6BUV6Y9ABc5raDvVdAHwZWfgBYIS220EDZOeX9Aa3wpuMUDbAJXJPyyLR4dBECigbY4dEgWOKg0xYGUFu72+nkA8BW6dl7tqAwfwRTGQhi4DDvm0zKSi2/y9m4yuRcrLF9LCl7s2LqakrbrQNbtS5WLRYMxBQ12QZQwRxN7DgjB4Nqsm+HYVtGHi0EGutUluQdIkKHP2wuBqGP3mCNhDMFjOJTdUueGwIa1hrJvJWFKw3UrB0q+NYK53wFTfSJoewWTQzLJgO4xtsokNIXJQG4BrswQEndYfqe7BsVDKCChXXT1k3VVtRRT2BxTu3LfMTHoaDSfgeURAOgCphLIkHYHqgYrYYiG47HSTqwupawW5r/VH6/K5sWN5ygZ9WpZ/qO41LbG692vQdWVwze241V+aDWO45vzTXder/31jb32vDDp2HvX91/1f4C6yMGMx9Ja7MAAAAASUVORK5CYII="
					), aMq(24, "userIcon", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAwAODg4sLyw2ODVCREFgYl+Bg4CkpqMA/wDMz8t5/3il/6Tk5+TD/8Th/+P///8NWuTPAAACa0lEQVRIx92Vz2sTQRTHR6GI4GU0SQkEqncvXoSAl9wFm5MXIe1fkCpIEYRcQ0L8ASp42mvwkmtP1taKCIW5loLstVjq4o/YrN3k68y8t7OzWyTise8S3pvPzPu+H2xEd46JswW8ycd7wzzQj4B97zgEDn2gp8+BPQeExj3xgE0TwCw9f2JdbDigD7y6dlfhgIEIH5s3A3rCAiN8kFLWMe32Ph/tdwc41m4FcECUNHREBuiblw9HuG/cthVlgB7GJiDvgC2x7iImDAzw3Eaq+uzTawX8su4VK0JY0at8BS91boXv1pVBCjxF0wZqdLVuNRpgWgA69NJlhUYeSFOomG62qQqpTvIiK/gpOdWW+SnhNwN9KrPKxWix38ifZI264QMVAtp2GIJmtZMHTDVlNXOtHiB5IMtBlgIvZKljJfC49fx3dQd/SNdR4w4d0AtpBtygFo/kSzfTgF1t4IYFSKznRA6AhyT7PUmwDasEblih1kS5k6bt+A4Vo8wTwvSJc5eBeLX0GNxpec/UIczCcXmddGHiBl+YWSCiBZK3kWq1K2pvDDWQLlxJIV4R2hYC0mKmdqCBdOFuIVkW1hZUKlOLEG5dAjwTbHXwZqipBjZjHkCcnovzilcomGkgpCKvY9sBokUro1ungWjMipcz4AK3poWh6NJ26IXMznUOKn0pA8oYe4Do0GJ7wCLe+UCL2l3LgCrWfOASNccDalgR5zLg4ilgyS/ClLF1Crg6DxB/BY7XtXWKAEcNwFYA2P4FePvVWFQEZjZ85L7VoyIwKXzMR1j37ZH7qGZAwSbzgOILgyKwcTb/Fv8b+ANlD8k4eGaP9QAAAABJRU5ErkJggg=="
					), aMq(25, "battleRoyale", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAmMCMAcQBbXVoArAB8fnuHioaQko+cnpunqqYA/gC2uLXAwr/N0M3c39v///9qRmqPAAADUElEQVRIx7WVT0gUURjAvzezYtnlgVlZBA/xNKcR6R/rxrjsaU+Kl4SUvHQ0oVMEUUgdLfEY5jrsaa5L0MUKpEN0EBFPQnsQXcVwToGL7rzen++9mV2KLvVO8775ve99/x9Ef1nwX4HSwKAEAoCL5d/9Fj+gLADopeAMdiLVIoB7c84TAFn+MA7gtBNFBuTG0/izAlb40ashAJIi1QGA3iffOX8jAZjlPPkxry7ExcC9t8bFGpMAK8jP5OsEzeH/EPrWYiX0JRD0c7WO543LgftRi5pUelHpjvX2AFVUIa8FfA9kHMIuBJIZRwEVsoDArqMAUrcHPGXiZTzB13MSqMIK7lu+o0ycxj1fVEDE7hrBuvSUuUZjMtajgesGaPo9QuGI2Z75ZQUEF4wkeUGiivvJ8qCBSreR8H3q0Sux3Tm6HiquFbXGgMxafBeBkGzw1Myuut1sIhDBIys79Qv2O3meM8BIKlyyJvJD30MgcN9Z6WTKzqj8g4rdbWNm85kFtnXuVIqZNf29dehsSJcY6ASj7a1CagzkMn1RxBLY3UgtdNoah2k78xkLvTYghFvi9p8L1kLIdbQeI1OcP4xtvGyfGKAKffWT6dRCr715S6VoFfJLJg0H1BHNU06BUPSvuMREvDUuFDBwUoC5QhQQU5tfhkA43quv0aGeOvAdWylHhX06SN1vOhI6WfWkBgRNTF7GLR+EUzWbLHZNFqiplIaoji0QvdH0DRDI3trGNLRkwk+HF3gGCGWvJahgXaYjeWu6RHtB+22WD20XtVIjo1FiCi2ZN76aTsV6GLGNYYoreUAyoTb9KGJIsOga1MsCOCNq4Iikqc8t8LK5mMLmdaKA3DcZz+QCg7RPr0ZVarVlc2EGgkgz3OFZFZBRIC8ur9oJpVVAqiCWp3KsL1N3GkAFp9K4RZATKllOVcghphXU5GhpUBmRhnZV6FNj0MUdiIw06TkVLjyjgfOoD4R5NRD4NmArnmigGy2qwqUdH6Bw5DtFreIkc4U0aJQMg8fcx7KmlYo9PWnJa+uSKPUQRFOg65t60kI+xqCoZmGqkKSKZE5P2sCd3DHNLqky5u+4RnswkmJ5na8icycoTlqhWb6gHSvEU39+eUul8r953H8BBeY6pZneQOEAAAAASUVORK5CYII="
					), aMq(26, "oneVsOne", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAACNwBHSUYAaQB+gH0AugCIioeSlZKanZkA3ACmqaUA/wC2uLXGycXa3Nn///+iBll7AAABfUlEQVRIx+2UPU7DUAyA3aZFCBWUCDF06wmga9WFG5CoYkA9BNyAK5CBKYfoEGWIsvQGcIOiDkxISAhRVEGN7ffTvrQRGwNKhhf5e1/0bMcJFL9cUAv/TkgB4MTdMEgJfYoaiSMYJEIOfI039y0SIYYJrnqOYBELud98LQlrxEIEHSwJawQcwHVJ2EDA9ewhRyNOa5D5kp5CIsTQfJCICwMvln2NRLhrTlAJp4ifjZDWhUFK6KAWDhC/wT9DnBvkClGLV7hFfNwSXiRJKh3PYUaLQUZY7HN0yQ9PpUEGaeEZJLri45/onCUYpMsEHfUPKT/K9B0sYiEDL1JRSN35OCLJs0hafZ/EKkrp/C9qw03XIvO6VZRRBSt6B72hRa6Q+xeIM2rWuEIouNmUBk/abiGUDs69okqIWyxM25UCl0GNHlYKGU2qHq3dQsHNXsoHUiGE1Ow3r9gSUhkzLo7vbQeJkMk0Gtx1kPo2R0EQDGTeg+A4cVD9l6uFPxZ+APLvRdqXArbWAAAAAElFTkSuQmCC"
					), aMq(27, "zombie", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAANwAwMi8AdwBWWFUAqgB+gH2Ji4iTlZIA1ACfop6rraoA/wC/wr/JzMn///+1mI6XAAACOElEQVRIx9WVv24TQRDGP3w2xAGcSIguhZ8gPskVUgqXVMQUFEguXEYUEEX0+A1iihRILvIGoaTCiSwXJ6VwSZcI0UXCkRU5UaLccjs7++92eYB81Xrv59nZ2W92cerpoP3umz8DZ5y11yH16j9AloL1YhQD5PfXf+f5xWcgGUWAFNWxIN10kITAV1TngpV3sFEGps53Ie6a6JWALo6Eo2uzCAMTbApPM4w8YFgRJTXrHoC1MnDJIcArHJWBnDeigO4TEaifWCBDKwSu1BoEnGAcAvfYMsCwKiLq1A2QNmLA98QA69sxYAENTMNNqnL3GJhAREVZSuBY5Xi7c8Y12lGbam5ogMq0BCpzdkPlC23jGQPDp/SzMGNDJQdQzH5dAw0VoAihSewXg0MNdCVwDp7PaUBTNQ3Is+7TfItD4bE88YSBVAJNml9TKajFLCDjwQdkaWY1NwcDXJoIA28X0DnYJcw2j1dMDp+KvjJJmkKdyLIMaH7ubtOUmg5rof8nduVo2z2siXRcrqcLM6oUrsmUIM/KD785gBB7wBvPMGy5Xx+0EX58LFnOMe3dOGbaCUzrL1ox22e0Jmmwokd/nMYprp997UPtzxskXvNyFksqprLNltv+b7FK0+dsO3GIl/4VlIL/x7HKVxD3xr0s55npiRAoNc3DBJYQs+eCavkwgal0nQXy4MXJ5FVogVv9nthHTfaGBa4QvHpp9acFLjpJAAzhqRYA9mGWetSLvN0HbaP38dc/qn80XpfaOx2MlAAAAABJRU5ErkJggg=="
					), aMq(28, "noFullSending", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEX///8A/wD4+Pjp6ekl6yXExMSZmZkAwAAygzJZWVkgTCAXNBcQHxAIDggCBAIAAACV9pxNAAAC1ElEQVR42u2VzWsaQRTAh13Wu6cBU9q9VPC2p8Cm/8ReGkibkiWSQyGJ7ClQov4Peio0LiH00EIqEkJomkZ6EAmx9VSltenSi2LaklNcVo3T92bW1XwUL6WnzOmN7+eb970kPOGQW+AfAmt/U64JIMI2b9ZzBQB3lyrWTXp6PPuDA2kj5t4EpDOKK55okpXymm+EBsbWa2TVEk4ms3KeDVBDi4z1OPLM6Wp6axjmeyN6xj4IPWN9IOjZwFQcdwhMeer8fhlM9eIqmbbhj/mLkpR77hR8IFXZlXP1MK3GCZzohUV7be1xicx1BUDP4htmqBGOdFQEpEQheWKGvmhEObQQoEVPg+uDejJL+NFbxR15wwQpUQCAVhkoZkqSXYTf5kAO9cGnl8uLgNYBuMNqYFmyM8pHg8i2pxLlmxHz7rNzcMcFIFnT0O7MT02vEdn5bZCVrHxgRAfgkdJFYFE83KiBRunmDR0FEmsdAdAbA8qprHIw66aXjg29ife3GpFfWByQ0Z9ypG/E2m4ql1GqW3DfQ2CDA9KjDALUa5InbvqztGrjfe+1RiQOxJ8yAZzPb8m5tjZTWsB7IW8QKWdhmINDH4DshDCFlwHasNZ9gITaqpQziQC2/SewNwTQCYAs+vDKd3IMGD6R2BoPcwS0l30nE5DlWP1IE4kaAQ0I8+Q7hHnYgTL0O+pV4JcRa9oeJOoT6pxhsQIAU23oWQVS3YMAeLlbYwAvFq8KCDuidRbKIwDL7fHCExvLjYJsbwYANkzF4RaiDBsG21PvWwGALbeZ6sZVadruRdrq/C6R5pzWcC4Y86Bpob1xcFghnNyRbRAG/uiB4gLbHkyhvo6zZoYcxvaCDZOEwREj+W6frxMKg3NqBSuIwpvly7O/DqM3AmB4T69uhzem0hgCMP7b13YM/arpdQFQWCCF6wtmKlggE1fQvYcTltjENThxkd5+cf4P8Acm8L1xck3dqAAAAABJRU5ErkJggg=="
					)
		}
	}, this.get = function(eU) {
		return canvas[eU]
	}, this.xL = function(name) {
		for (var aC = a4M.length - 1; 0 <= aC; aC--)
			if (a4M[aC] === name) return canvas[aC];
		return aMk
	}, this.wB = function() {
		return aMj <= 0
	}, this.aMm = function() {
		aMj = 0, aMn()
	}
}

function cc() {
	var aMw = [
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
		aMx = [
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
	this.aMy = null, this.aMz = null, this.aN0 = null, this.aN1 = null, this.aN2 = null, this.aN3 = null, this.aN4 = null, this.aN5 = null, this.aN6 = null, this.aN7 = null;

	function aNE(kK, oP) {
		for (var aMy = ad.aMy, aMz = ad.aMz, aN0 = ad.aN0, aC = kK; aC < oP; aC++) aMy[aC] = bO.gC(64 * az.random(), az.value(100)) << 2, aMz[aC] = bO.gC(64 * az.random(), az.value(100)) << 2, aN0[aC] = bO.gC(64 * az.random(), az.value(100)) << 2
	}

	function aND(kK, oP) {
		for (var colorsData = aE.data.colorsData, aMy = ad.aMy, aMz = ad.aMz, aN0 = ad.aN0, aC = kK; aC < oP; aC++) {
			var gD = colorsData[aC];
			aMy[aC] = 4 * (gD >> 12), aMz[aC] = 4 * (gD >> 6 & 63), aN0[aC] = 4 * (63 & gD)
		}
	}

	function aNW(fP, aNY) {
		aGn[fP] = 0, aGn[fP + 1] = 0, aGn[fP + 2] = aNY, aGn[fP + 3] = 0, aNZ(fP)
	}

	function aNZ(fP) {
		var fs;
		be.oX || (fs = ad.a25(fP), fP = ad.a26(fP), be.oX = fs >= bd.aGm[0] && fs <= bd.aGm[2] && fP >= bd.aGm[1] && fP <= bd.aGm[3])
	}
	this.fn = new Int32Array(4), this.aNB = new Int32Array(8), this.dw = function() {
		var fn = this.fn,
			fn = (fn[0] = -4 * bV.fw, fn[1] = 4, fn[2] = -fn[0], fn[3] = -fn[1], this.aNB);
		fn[0] = -4 * bV.fw - 4, fn[1] = -4 * bV.fw, fn[2] = -4 * bV.fw + 4, fn[3] = -4, fn[4] = 4, fn[5] = 4 * bV.fw - 4, fn[6] = 4 * bV.fw, fn[7] = 4 * bV.fw + 4
	}, this.dv = function() {
		if (this.aMy ? (this.aMy.fill(0), this.aMz.fill(0), this.aN0.fill(0), this.aN1.fill(0), this.aN2.fill(0), this.aN3.fill(0), this.aN4.fill(0), this.aN5.fill(0), this.aN6.fill(0), this.aN7.fill(0), this.aD4.fill(0)) : (this.aMy =
				new Uint8Array(aE.fi), this.aMz = new Uint8Array(aE.fi), this.aN0 = new Uint8Array(aE.fi), this.aN1 = new Uint8Array(aE.fi), this.aN2 = new Uint8Array(aE.fi), this.aN3 = new Uint8Array(aE.fi), this.aN4 = new Uint8Array(aE.fi),
				this.aN5 = new Uint8Array(aE.fi), this.aN6 = new Uint8Array(aE.fi), this.aN7 = new Uint8Array(aE.fi), this.aD4 = new Uint8Array(aE.fi)), aE.ie)
			for (var aFJ = bj.aFJ, aMy = ad.aMy, aMz = ad.aMz, aN0 = ad.aN0, aC = aE.fi - 1; 0 <= aC; aC--) {
				var ev = aFJ[aC],
					lz = bO.gC((aMx[ev][3] + 1) * az.random(), az.value(100));
				aMy[aC] = aMw[ev][0] + lz * aMx[ev][0], aMz[aC] = aMw[ev][1] + lz * aMx[ev][1], aN0[aC] = aMw[ev][2] + lz * aMx[ev][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aND(0, aE.l4), aNE(aE.l4, aE.fi)) : aNE(0, aE.fi) : aND(0, aE.fi);
		! function() {
			var aC, fo, aMy = ad.aMy,
				aMz = ad.aMz,
				aN0 = ad.aN0;
			for (aC = aE.fi - 1; 0 <= aC; aC--) fo = bO.gC(aMy[aC] + aMz[aC] + aN0[aC], 3), aMy[aC] += aNK(fo - aMy[aC], 2), aMz[aC] += aNK(fo - aMz[aC], 2), aN0[aC] += aNK(fo - aN0[aC], 2), aMy[aC] -= aMy[aC] % 4, aMz[aC] -= aMz[aC] % 4, aN0[
				aC] -= aN0[aC] % 4
		}(),
		function() {
			for (var fl = aE.fi, aMy = ad.aMy, aMz = ad.aMz, aN0 = ad.aN0, aN1 = ad.aN1, aC = 0; aC < fl; aC++) aMy[aC] += aC >> 7, aMz[aC] += aC >> 5 & 3, aN0[aC] += aC >> 3 & 3, aN1[aC] = 7 & aC
		}(), this.aNH(),
			function() {
				for (var fl = aE.fi, aN2 = ad.aN2, aN3 = ad.aN3, aN4 = ad.aN4, aMy = ad.aMy, aMz = ad.aMz, aN0 = ad.aN0, aC = 0; aC < fl; aC++) {
					var eT = aMy[aC],
						w7 = aMz[aC],
						g5 = aN0[aC];
					60 <= eT + w7 + g5 ? (aN2[aC] = Math.max(eT - 40, 3 & eT), aN3[aC] = Math.max(w7 - 40, 3 & w7), aN4[aC] = Math.max(g5 - 40, 3 & g5)) : (aN2[aC] = eT + 40, aN3[aC] = w7 + 40, aN4[aC] = g5 + 40)
				}
			}(),
			function() {
				for (var fl = aE.fi, aN5 = ad.aN5, aN6 = ad.aN6, aN7 = ad.aN7, aMy = ad.aMy, aMz = ad.aMz, aN0 = ad.aN0, aC = 0; aC < fl; aC++) {
					var eT = aMy[aC],
						w7 = aMz[aC],
						g5 = aN0[aC];
					688 <= eT + w7 + g5 ? (aN5[aC] = eT - 88, aN6[aC] = w7 - 88, aN7[aC] = g5 - 88) : (aN5[aC] = Math.min(eT + 88, 252 + (3 & eT)), aN6[aC] = Math.min(w7 + 88, 252 + (3 & w7)), aN7[aC] = Math.min(g5 + 88, 252 + (3 & g5)))
				}
			}()
	}, this.aBr = function(player) {
		var h = bR.gK;
		return h[0] = this.aMy[player], h[1] = this.aMz[player], h[2] = this.aN0[player], h
	}, this.aNH = function() {
		for (var aC = aE.fi - 1; 0 <= aC; aC--) this.aD4[aC] = this.aMy[aC] + this.aMz[aC] + this.aN0[aC] < 280 ? 0 : 1
	}, this.a25 = function(fP) {
		return bO.gC(fP, 4) % bV.fw
	}, this.a26 = function(fP) {
		return bO.gC(fP, 4 * bV.fw)
	}, this.a1c = function(fs, fu) {
		return Math.floor(4 * (fu * bV.fw + fs))
	}, this.a1s = function(fP) {
		var fn = this.fn;
		return this.aNL(fP + fn[0]) || this.aNL(fP + fn[1]) || this.aNL(fP + fn[2]) || this.aNL(fP + fn[3])
	}, this.g9 = function(fP) {
		var fn = this.fn;
		return this.fq(fP + fn[0]) || this.fq(fP + fn[1]) || this.fq(fP + fn[2]) || this.fq(fP + fn[3])
	}, this.a1q = function(fP, player) {
		var fn = this.fn;
		return this.aNM(fP + fn[0], player) || this.aNM(fP + fn[1], player) || this.aNM(fP + fn[2], player) || this.aNM(fP + fn[3], player)
	}, this.aNN = function(aC, aNO, aNP, aNQ) {
		this.aMy[aC] = aNO >> 16, this.aMz[aC] = aNO >> 8 & 255, this.aN0[aC] = 255 & aNO, this.aN2[aC] = aNP >> 16, this.aN3[aC] = aNP >> 8 & 255, this.aN4[aC] = 255 & aNP, this.aN5[aC] = aNQ >> 16, this.aN6[aC] = aNQ >> 8 & 255, this.aN7[aC] =
			255 & aNQ
	}, this.aNR = function(aC) {
		return [(this.aMy[aC] << 16) + (this.aMz[aC] << 8) + this.aN0[aC], (this.aN2[aC] << 16) + (this.aN3[aC] << 8) + this.aN4[aC], (this.aN5[aC] << 16) + (this.aN6[aC] << 8) + this.aN7[aC]]
	}, this.hL = function(fP) {
		return 208 <= aGn[fP + 3]
	}, this.a1y = function(player, fP) {
		return this.hL(fP) && this.a21(player, fP)
	}, this.a21 = function(player, fP) {
		return player === this.fd(fP)
	}, this.aNS = function(fP) {
		return 208 <= aGn[fP + 3] && aGn[fP + 3] < 224
	}, this.kF = function(fP) {
		return 224 <= aGn[fP + 3] && aGn[fP + 3] < 248
	}, this.aNT = function(fP) {
		return 248 <= aGn[fP + 3]
	}, this.a1r = function(fP) {
		for (var fn = this.fn, aC = 3; 0 <= aC; aC--)
			if (this.j0(fP + fn[aC])) return !0;
		return !1
	}, this.fg = function(fP) {
		return this.hL(fP) || this.fc(fP)
	}, this.j0 = function(fP) {
		return 0 === aGn[fP + 3] && 2 === aGn[fP + 2]
	}, this.fc = function(fP) {
		return 0 === aGn[fP + 3] && 1 === aGn[fP + 2]
	}, this.aNU = function(fP) {
		return 0 === aGn[fP + 3] && 3 === aGn[fP + 2]
	}, this.fq = function(fP) {
		return 0 === aGn[fP + 3] && 5 === aGn[fP + 2]
	}, this.aNL = function(fP) {
		return 0 === aGn[fP + 3] && 3 <= aGn[fP + 2]
	}, this.fT = function(fP) {
		return (aGn[fP] >> 1 << 8) + aGn[fP + 1]
	}, this.aNV = function(fP) {
		return 1 & aGn[fP]
	}, this.aNM = function(fP, player) {
		return this.fc(fP) || this.hL(fP) && player !== this.fd(fP)
	}, this.fd = function(fP) {
		return ((3 & aGn[fP]) << 7) + ((3 & aGn[fP + 1]) << 5) + ((3 & aGn[fP + 2]) << 3) + (7 & aGn[fP + 3])
	}, this.a1z = function(fP) {
		aNW(fP, 1)
	}, this.aNX = function(fP) {
		aNW(fP, 2)
	}, this.a1d = function(fP, player) {
		aGn[fP] = this.aMy[player], aGn[fP + 1] = this.aMz[player], aGn[fP + 2] = this.aN0[player], aGn[fP + 3] = 208 + this.aN1[player], aNZ(fP)
	}, this.hG = function(fP, player) {
		aGn[fP] = this.aN2[player], aGn[fP + 1] = this.aN3[player], aGn[fP + 2] = this.aN4[player], aGn[fP + 3] = 224 + this.aN1[player], aNZ(fP)
	}, this.kG = function(fP, player) {
		aGn[fP] = this.aN5[player], aGn[fP + 1] = this.aN6[player], aGn[fP + 2] = this.aN7[player], aGn[fP + 3] = 248 + this.aN1[player], aNZ(fP)
	}
}

function d1() {
	var aNa = 0,
		aNb = new Uint16Array(64);

	function fH(a9U) {
		aNa -= 2;
		for (var aC = a9U; aC < aNa; aC += 2) aNb[aC] = aNb[aC + 2], aNb[aC + 1] = aNb[aC + 3]
	}
	this.dv = function() {
		aNa = 0
	}, this.eq = function() {
		var aC, kD, jM;
		if (0 !== aNa)
			if (0 === ah.ng[aE.fV]) aNa = 0;
			else if (0 === ae.gs(aE.fV)) aNa = 0;
		else
			for (aC = aNa - 2; 0 <= aC; aC -= 2)(kD = aNb[aC]) < aE.fi && 0 === ah.ng[kD] ? fH(aC) : (jM = aNb[aC + 1], (kD >= aE.fi && bw.aNd(aE.fV) || kD < aE.fi && bw.aNe(aE.fV, kD)) && (bB.iC.iJ(jM, kD), fH(aC)))
	}, this.iK = function(kD, jM) {
		! function(kD, jM) {
			for (var aC = 0; aC < aNa; aC += 2)
				if (aNb[aC] === kD) return aNb[aC + 1] = Math.min(aNb[aC + 1] + jM, 1023), 1;
			return
		}(kD, jM) && 64 !== aNa && (aNb[aNa] = kD, aNb[aNa + 1] = jM, aNa += 2)
	}
}

function cd() {
	function aNm(player) {
		var em;
		bD.h7.a7X(player) && (em = ah.hn[player] - ah.a7c[player] + ae.aNo(player), bg.hB(player, Math.abs(em), em < 0 ? 18 : 12)), ah.hn[player] = 0, ah.a7c[player] = 0
	}

	function aNv() {
		aY.show(!1, !1, !1, !0), aX.aFp(), bU.a3l.a4Z()
	}

	function aNi(player, aNu) {
		for (var aC = aNu.length - 1; 0 <= aC; aC--) ae.aNx(aNu[aC], player)
	}

	function aNl(player) {
		var jc = ah.jc,
			jd = ah.jd,
			je = ah.je,
			jf = ah.jf,
			fw = bV.fw;
		if (ah.hZ[player]) {
			ah.hZ[player] = 0;
			for (var o7 = jc[player], o8 = je[player], fs = jd[player]; o7 <= fs; fs--)
				for (var fu = jf[player]; o8 <= fu; fu--) {
					var hJ = 4 * (fu * fw + fs);
					ad.a1y(player, hJ) && ad.a1z(hJ)
				}
		}
		jd[player] = jf[player] = 0, jc[player] = je[player] = Math.max(fw, bV.fx)
	}
	this.e3 = function(hJ) {
		var player, em = ah.hZ[hJ] + ah.a1Y[hJ];
		bQ.z.l8[hJ] ? em && (aNi(player = hJ, ae.aNj(player)), ag.aNk(player), aNl(player), aG.h9(player), ae.clear(player), aNm(player), function(player) {
			ah.a1Y[player] = 0, ah.hD[player] = [], ah.hR[player] = [], ah.hS[player] = [], ah.gA[player] = []
		}(player)) : !em && ah.hD[hJ].length || this.aNh(hJ)
	}, this.aNh = function(player) {
		! function(player) {
			bD.h7.kR(player) || (ah.a4e[player] = bl.a4s.aNt(), aE.a41++);
			var aNu = ae.aNj(player);
			0 === aNu.length ? bD.h7.a7U(player) && aNv() : (aNi(player, aNu), function(player, aNu) {
				var aNz = aNu[function(aNu) {
					var aC, eU = 0;
					for (aC = aNu.length - 1; 1 <= aC; aC--) ah.hZ[aNu[aC]] > ah.hZ[aNu[eU]] && (eU = aC);
					return eU
				}(aNu)];
				9 === aE.lM && (1 === bj.fj[player] ? az.kw(8) && b0.aO0(aNz) : aF.iS[player] && (aO.aB0(765, 0), aO.a2S(280, L(173, [ah.a2T[aNz], ah.a2T[player]]), 765, aNz, bE.qF, bE.rh, -1, !0)));
				if (bD.h7.a7U(player)) aNv(), aO.a4D(aNz, 1);
				else {
					for (var aC = aNu.length - 1; 0 <= aC; aC--)
						if (bD.h7.a7X(aNu[aC]) && (bg.nc[4 - bD.h7.kR(player)]++, bD.h7.a7U(aNu[aC]))) return aO.a4D(player, 0);
					bD.h7.kR(player) || aO.aAh(0, player, aNz)
				}
			}(player, aNu))
		}(player), ag.aNk(player), aNl(player), aNm(player),
			function(player) {
				ah.ng[player] = 0, ah.hD[player] = null, ah.hR[player] = null, ah.hS[player] = null, ah.gA[player] = null
			}(player), aG.h9(player), ae.clear(player), bQ.aNr.aNs(player)
	}
}

function d6() {
	var input;

	function aO1(e) {
		(e = e.target.files) && 0 < e.length && b7.aO4(e[0])
	}

	function aO8(e) {
		var ev = new Image;
		ev.onload = aO9, ev.src = e.target.result
	}

	function aO9(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aOB = bm.buffer.data[162].value,
			max = Math.min(bV.aOC, aOB),
			aOB = (max = a1.id || bM.u5() ? Math.min(1400, aOB) : max) / Math.max(j, k);
		if (aOB < 1 && (j = Math.floor(aOB * j + .125), k = Math.floor(aOB * k + .125)), max < j || max < k || j < 10 || k < 10) aOB = "Invalid Image Dimensions!", a1.zr ? a1.zr.showToast(aOB) : alert(aOB);
		else {
			for (var max = document.createElement("canvas"), aOB = (max.width = j, max.height = k, max.getContext("2d", {
						willReadFrequently: !0
					})), aOE = document.createElement("canvas"), aOF = (aOE.width = e.width, aOE.height = e.height, aOE.getContext("2d")), e = (aOF.drawImage(e, 0, 0), aOF.getImageData(0, 0, aOE.width, aOE.height)), aOF = aOB.createImageData(j, k),
					src = e.data, aOI = aOF.data, aDe = aOE.width / j, aDf = aOE.height / k, fu = 0; fu < k; fu++)
				for (var fs = 0; fs < j; fs++) {
					var aOJ = Math.floor(fs * aDe),
						aOJ = 4 * (Math.floor(fu * aDf) * aOE.width + aOJ),
						aOM = 4 * (fu * j + fs);
					aOI[aOM] = src[aOJ], aOI[1 + aOM] = src[1 + aOJ], aOI[2 + aOM] = src[2 + aOJ], aOI[3 + aOM] = 255
				}
			aOB.putImageData(aOF, 0, 0), 20 === u.vl && u.a5F().aO9(max)
		}
	}
	this.dv = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aO1
	}, this.yB = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aO2 = function() {
		input.click()
	}, this.aO4 = function(aO5) {
		var h = aO5.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aO8, h.readAsDataURL(aO5))
	}
}

function d4() {
	this.aON = new Uint32Array(aE.fi), this.dv = function() {
		10 === aE.lM && this.aON.fill(0)
	}, this.eq = function() {
		10 === aE.lM && this.lt()
	}, this.lt = function() {
		for (var hJ, target, aG2, aON = this.aON, xE = am.lf, t8 = ah.hn, aC = am.la - 1; 0 <= aC; aC--)(hJ = xE[aC]) >= aE.l4 || (target = Math.max(bO.gC(t8[hJ], 4), 2048), aG2 = Math.max(af.aG3(hJ), 100), aON[hJ] += bO.gC(aG2 * target, 1e4),
			aON[hJ] > target && (aON[hJ] = target))
	}, this.a7g = function(player, iS) {
		return 10 !== aE.lM || bD.h7.kR(player) ? iS : Math.min(this.aON[player], iS)
	}, this.a7m = function(player, iS) {
		10 !== aE.lM || bD.h7.kR(player) || (this.aON[player] -= iS)
	}
}

function d7() {
	var aOO = -1,
		aOP = null,
		aOQ = -1,
		yg = 4;

	function aOS() {
		aN.aA0() ? be.render() : be.a4B()
	}

	function aOa(ev, fo) {
		var eT = ev >> 16,
			w7 = ev >> 8 & 255,
			ev = 255 & ev,
			aOb = 255 - fo,
			aOb = (aOb < eT && aOb < w7 && aOb < ev && (fo = -fo), aOO >> 7),
			aOd = aOO >> 5 & 3,
			aOe = aOO >> 3 & 3;
		return (Math.max(Math.min(eT + fo, 252 + aOb), aOb) << 16) + (Math.max(Math.min(w7 + fo, 252 + aOd), aOd) << 8) + Math.max(Math.min(ev + fo, 252 + aOe), aOe)
	}

	function aOR() {
		return -1 !== aOO && (ad.aNN(aOO, aOP[0], aOP[1], aOP[2]), aOX(aOO), aOO = -1)
	}

	function aOX(player) {
		bi.e2 = !0;
		for (var jc = ah.jc[player], je = ah.je[player], jd = ah.jd[player], jf = ah.jf[player], fu = je; fu <= jf; fu++)
			for (var fs = jc; fs <= jd; fs++) {
				var fP = ad.a1c(fs, fu);
				ad.a1y(player, fP) && (ad.aNT(fP) ? ad.kG(fP, player) : ad.kF(fP) ? ad.hG(fP, player) : ad.a1d(fP, player))
			}
	}
	this.dv = function() {
		aOP = null, aOQ = aOO = -1, yg = bO.iu(Math.floor(bm.buffer.data[16].value), 0, 16)
	}, this.eq = function(c3) {
		if (bm.buffer.data[15].value && 0 !== yg && (c3 || !bM.u5())) {
			var c3 = bP.i2(bM.hq),
				i3 = bP.i4(bM.hr);
			if (bP.i5(c3, i3)) {
				c3 = bP.g8(c3, i3), i3 = bP.fb(c3);
				if (aOQ === i3)
					if (ad.hL(i3)) {
						if (aOO === ad.fd(i3)) return
					} else if (-1 === aOO) return;
				! function(fP) {
					ad.hL(fP) ? (fP = ad.fd(fP)) !== aOO && (aOR(), function(player) {
						aOO = player, aOP = ad.aNR(player);
						var aOV = function() {
							var q5 = aOP,
								aOY = yg << 2,
								aOZ = aOY << 1;
							return [aOa(q5[0], aOY), aOa(q5[1], aOZ), aOa(q5[2], aOZ)]
						}();
						ad.aNN(player, aOV[0], aOV[1], aOV[2]), aOX(player)
					}(fP), aOS()) : aOR() && aOS()
				}(aOQ = i3)
			} else aOR() && aOS()
		}
	}
}

function d8() {
	var yU = 0,
		aOf = 0,
		aOg = 0,
		aOh = 0,
		aOQ = -1;

	function aOk(fP) {
		if (aOQ === fP) return !1;
		if (-1 === (aOQ = fP)) yU = 0, aO.aBE(yU, 0);
		else {
			if (ad.hL(fP)) return aOg = ad.fd(fP), l3 = ah.hn[aOg] - ah.a7c[aOg], (4 !== yU || l3 !== aOf) && (yU = 4, aOf = l3, aO.aBE(yU, l3), !0);
			if (ad.fc(fP)) return 3 !== yU && (yU = 3, aO.aBE(yU, 0), !0);
			if (ad.fq(fP)) return 2 !== yU && (yU = 2, aO.aBE(yU, 0), !0);
			var l3 = bQ.lt.a9o(bM.hq, bM.hr);
			if (-1 === l3) return 1 !== yU && (yU = 1, aO.aBE(yU, 0), !0);
			fP = bQ.z.aAp[l3];
			if (aOg = bQ.z.mx[l3], aOh = bQ.z.my[l3] >> 3, 5 === yU && fP === aOf) return !1;
			yU = 5, aOf = fP, aO.aBE(yU, fP)
		}
		return !0
	}
	this.dv = function() {
		aOh = aOg = aOf = yU = 0, aOQ = -1
	}, this.eq = function(c3) {
		var i3;
		!c3 && bM.u5() || (c3 = bP.i2(bM.hq), i3 = bP.i4(bM.hr), bP.i5(c3, i3) ? (c3 = bP.g8(c3, i3), aOk(bP.fb(c3))) : aOk(-1))
	}, this.nN = function() {
		var aOm, l3, a9m, aOl;
		if (0 !== yU && 2 !== yU)
			if (bM.u5()) {
				if (1 !== yU && 3 !== yU) {
					if (4 === yU) return void(l3 = ah.hn[aOg] - ah.a7c[aOg], aOf === l3 || (aOf = l3, aO.aBE(yU, l3)));
					(a9m = bQ.lt.o6(aOh, aOg)) < 0 ? (yU = 1, aO.aBE(yU, 0)) : (aOl = bQ.z.aAp[a9m]) !== aOf && (aOf = aOl, aO.aBE(yU, aOl))
				}
			} else if (1 === yU) - 1 !== (a9m = bQ.lt.a9o(bM.hq, bM.hr)) && (yU = 5, aOf = bQ.z.aAp[a9m], aO.aBE(yU, aOf));
		else if (3 === yU) ad.hL(aOQ) && (yU = 4, aOm = ad.fd(aOQ), aOf = ah.hn[aOm] - ah.a7c[aOm], aO.aBE(yU, aOf));
		else if (4 === yU) {
			if (ad.hL(aOQ)) return void(aOm = ad.fd(aOQ), l3 = ah.hn[aOm] - ah.a7c[aOm], aOf === l3 || (aOf = l3, aO.aBE(yU, l3)));
			yU = 3, aO.aBE(yU, 0)
		} else - 1 === (a9m = bQ.lt.a9o(bM.hq, bM.hr)) ? (yU = 1, aO.aBE(yU, 0)) : (aOl = bQ.z.aAp[a9m]) !== aOf && (aOf = aOl, aO.aBE(yU, aOl))
	}
}

function dh() {
	function aOo(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aOw, h.readAsText(e))
	}

	function aOw(e) {
		var aOz;
		aE.a3z || (e = JSON.parse(e.target.result), aOz = aE.data = new a8d, aP0(e, aOz, "mapType", 0, 2), aP0(e, aOz, "mapProceduralIndex", 0, 255), aP0(e, aOz, "mapRealisticIndex", 0, 255), aP0(e, aOz, "mapSeed", 0, 16383), function(aOy, aOz, hK,
				max) {
				aOy = aOy[hK];
				aOz[hK] = aP6(aOy) ? aOy.slice(0, max) : aOz[hK]
			}(e, aOz, "mapName", 20), function(aOy, aOz, hK) {
				var aOA;
				2 === aOz.mapType && (!aP6(aOy = aOy[hK]) || aOy.length <= 20 ? aOz.mapType = 0 : ((aOA = new Image).onload = function() {
					bC.aP7.aP8(aOA, 1), aOA.onload = null, aOA = null
				}, aOA.src = aOy))
			}(e, aOz, "canvas"), aP0(e, aOz, "passableWater", 0, 1), aP0(e, aOz, "passableMountains", 0, 1), aP0(e, aOz, "playerCount", 1, 512), aP0(e, aOz, "humanCount", 1, 1), aP0(e, aOz, "selectedPlayer", 0, 0), aP0(e, aOz, "gameMode", 0, 1),
			aP0(e, aOz, "playerMode", 0, 0), aP0(e, aOz, "battleRoyaleMode", 0, 0), aP0(e, aOz, "numberTeams", 0, 8), aP0(e, aOz, "isZombieMode", 0, 0), aP0(e, aOz, "isContest", 0, 0), aP0(e, aOz, "isReplay", 0, 0), aP3(e, aOz, "elo", 16, 2,
				16383), aP0(e, aOz, "colorsType", 0, 1), aP0(e, aOz, "colorsPersonalized", 0, 1), aP3(e, aOz, "colorsData", 32, 512, 262143), aP0(e, aOz, "selectableColor", 0, 1), aP3(e, aOz, "teamPlayerCount", 16, 9, 512), aP0(e, aOz,
				"neutralBots", 0, 1), aP0(e, aOz, "botDifficultyType", 0, 3), aP0(e, aOz, "botDifficultyValue", 0, 15), aP3(e, aOz, "botDifficultyTeam", 8, 9, 15), aP3(e, aOz, "botDifficultyData", 8, 512, 15), aP0(e, aOz, "spawningType", 0, 2),
			aP0(e, aOz, "spawningSeed", 0, 16383), aP3(e, aOz, "spawningData", 16, 1024, 4095), aP0(e, aOz, "selectableSpawn", 0, 1), aP0(e, aOz, "playerNamesType", 0, 2),
			function(aOy, aOz, hK, size, max) {
				var a6e = aOy[hK];
				if (Array.isArray(a6e)) {
					for (var a6f = new Array(size), fl = Math.min(a6e.length, size), aC = 0; aC < fl; aC++) a6f[aC] = aP6(a6e[aC]) ? a6e[aC].slice(0, max) : "";
					a6f.fill("", fl), aOz[hK] = a6f
				}
			}(e, aOz, "playerNamesData", 512, 20), aP0(e, aOz, "selectableName", 0, 1), aP0(e, aOz, "aIncomeType", 0, 2), aP0(e, aOz, "aIncomeValue", 0, 255), aP3(e, aOz, "aIncomeData", 8, 512, 255), aP0(e, aOz, "tIncomeType", 0, 2), aP0(e, aOz,
				"tIncomeValue", 0, 255), aP3(e, aOz, "tIncomeData", 8, 512, 255), aP0(e, aOz, "iIncomeType", 0, 2), aP0(e, aOz, "iIncomeValue", 0, 255), aP3(e, aOz, "iIncomeData", 8, 512, 255), aP0(e, aOz, "sResourcesType", 0, 2), aP0(e, aOz,
				"sResourcesValue", 0, 2047), aP3(e, aOz, "sResourcesData", 16, 512, 2047), u.y(), u.z.ve[0] = 0, u.v(19))
	}

	function aP0(aOy, aOz, hK, min, max) {
		aOy = aOy[hK];
		aOz[hK] = "number" == typeof aOy && min <= aOy && aOy <= max ? Math.floor(aOy) : aOz[hK]
	}

	function aP6(pW) {
		return "string" == typeof pW
	}

	function aP3(aOy, aOz, hK, aP9, size, max) {
		var a6e = aOy[hK];
		if (Array.isArray(a6e)) {
			for (var a6f = new(8 === aP9 ? Uint8Array : 16 === aP9 ? Uint16Array : Uint32Array)(size), fl = Math.min(a6e.length, size), aC = 0; aC < fl; aC++) a6f[aC] = bO.iu(a6e[aC], 0, max);
			aOz[hK] = a6f
		}
	}
	this.aOn = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aOo, input.click()
	}, this.aOp = function() {
		for (var aOs, aHO, a9D = aE.data, keys = Object.keys(a9D), aOq = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a9D[key] instanceof Uint8Array || a9D[key] instanceof Uint16Array || a9D[key] instanceof Uint32Array ? aOq[key] = Array.from(a9D[key]) : aOq[key] = a9D[key]
		}
		aOq.canvas = 2 === aOq.mapType && aOq.canvas ? aOq.canvas.toDataURL() : null, aOs = aOq, aOs = JSON.stringify(aOs, null, 2), aOs = new Blob([aOs], {
			type: "application/json"
		}), (aHO = document.createElement("a")).href = URL.createObjectURL(aOs), aHO.download = "tt_scenario.json", aHO.click()
	}
}

function ch() {
	var aPA, aPB, size, kD, iS, aPC;

	function aPD(player) {
		return player < aE.l4 ? aPA * player : aPA * aE.l4 + aPB * (player - aE.l4)
	}
	this.dv = function() {
		aPA = aE.l4 < 16 ? 12 : 8, aPB = 4;
		var fl = aPD(aE.fi);
		size = new Uint8Array(aE.fi), kD = new Uint16Array(fl), iS = new Uint32Array(fl), aPC = new Uint8Array(fl)
	}, this.tC = function(aCY, aPE) {
		var aPF = this.ho(aCY, aPE),
			aPE = (this.hm(aCY, aPE, 0), bD.h7.hA(aCY, aPF));
		bg.hB(aCY, aPF - aPE, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aNx = function(player, aPE) {
		var aPI, aPE = function(player, aPE) {
			var aC, lz = aPD(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (kD[lz + aC] === aPE) return aC;
			return size[player]
		}(player, aPE);
		aPE !== size[player] && (aPI = iS[aPD(player) + aPE], this.hC(player, aPE), this.eu(player, aPI, aE.fi))
	}, this.kP = function(player, aPE) {
		for (var lz = aPD(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kD[lz + aC] === aPE) return !0;
		return !1
	}, this.ki = function(player) {
		return player < aE.l4 ? size[player] < aPA : size[player] < aPB
	}, this.gs = function(player) {
		return size[player]
	}, this.gx = function(player, aC) {
		return kD[aPD(player) + aC]
	}, this.gy = function(player, aC) {
		return iS[aPD(player) + aC]
	}, this.ho = function(player, aPE) {
		for (var lz = aPD(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kD[lz + aC] === aPE) return iS[lz + aC];
		return 0
	}, this.aNo = function(player) {
		for (var lz = aPD(player), gD = 0, aC = size[player] - 1; 0 <= aC; aC--) gD += iS[lz + aC];
		return gD
	}, this.hm = function(player, aPE, aPI) {
		for (var lz = aPD(player), aC = size[player] - 1; 0 <= aC; aC--) kD[lz + aC] === aPE && (iS[lz + aC] = aPI)
	}, this.hX = function(player, aC, aPI) {
		iS[aPD(player) + aC] = Math.max(aPI, 0)
	}, this.hY = function(player, aC) {
		aPC[aPD(player) + aC] = 0
	}, this.gz = function(player, aC) {
		return aPC[aPD(player) + aC]
	}, this.eu = function(player, aPI, aPE) {
		ap.jr.kg[player] = ap.jr.kg[aPE] = 8, bD.h7.a7X(aPE) && bg.nc[6 - bD.h7.kR(player)]++;
		for (var lz = aPD(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kD[lz + aC] === aPE) return iS[lz + aC] += aPI, void(iS[lz + aC] = iS[lz + aC] > aE.a8X ? aE.a8X : iS[lz + aC]);
		kD[lz + size[player]] = aPE, iS[lz + size[player]] = aPI, aPC[lz + size[player]] = 1, size[player]++, aPE === aE.fV ? aO.a4D(player, 5) : player < aE.l4 && player === aE.fV && ag.aAj(aPE)
	}, this.hC = function(player, eU) {
		var g4, lz;
		if (0 !== size[player])
			for (lz = aPD(player), size[player]--, g4 = eU; g4 < size[player]; g4++) kD[lz + g4] = kD[lz + g4 + 1], iS[lz + g4] = iS[lz + g4 + 1], aPC[lz + g4] = aPC[lz + g4 + 1]
	}, this.aNj = function(player) {
		for (var g4, lz, aNu = [], aC = am.la - 1; 0 <= aC; aC--)
			for (lz = aPD(am.lf[aC]), g4 = size[am.lf[aC]] - 1; 0 <= g4; g4--)
				if (kD[lz + g4] === player) {
					aNu.push(am.lf[aC]);
					break
				} return aNu
	}
}

function ci() {
	var aPJ;

	function aPL(player) {
		var eT, kj;
		return bD.h7.kR(player) && player < aE.l4 ? 0 : (eT = aPJ[bO.gC((aE.fi - 1) * ah.hZ[player], aE.ko)], bi.l1() < 1920 && (eT = Math.max(bO.gC(100 * (13440 - 6 * bi.l1()), 1920), eT)), kj = af.kk(player), ah.hn[player] > kj && (eT -= bO.gC(2 *
			eT * (ah.hn[player] - kj), kj)), Math.min(Math.max(eT, 0), 700))
	}

	function aPa(oJ) {
		for (var hZ = ah.hZ, lf = am.lf, aC = am.la - 1; 0 <= aC; aC--) {
			var hJ = lf[aC];
			bD.h7.hA(hJ, bO.gC(oJ * hZ[hJ], 32))
		}
	}

	function aPX() {
		var a4b = aE.fV;
		bR.gH[0] = ah.hn[a4b] - ah.a7c[a4b]
	}

	function aPZ(eU) {
		var a4b = aE.fV,
			a4b = ah.hn[a4b] - ah.a7c[a4b] - bR.gH[0];
		af.aEd += a4b, bg.nc[eU] += a4b
	}
	this.aEd = 0, this.e1 = function() {
		for (var fl = aE.fi, aC = (aPJ = new Uint16Array(fl), 0); aC < fl; aC++) aPJ[aC] = 100 + aPK(bO.gC(25600 * aC, fl - 4), 9)
	}, this.dv = function() {
		(this.aEd = 0) === aE.data.iIncomeType ? this.aG3 = aPL : 1 === aE.data.iIncomeType ? this.aG3 = function(player) {
			return bO.gC(aE.data.iIncomeValue * aPL(player), 64)
		} : this.aG3 = function(player) {
			return bO.gC(aE.data.iIncomeData[player] * aPL(player), 64)
		}
	}, this.eq = function() {
		if (bi.l1() % 10 == 9 && (af.aEd = 0, function() {
				aPX();
				for (var lf = am.lf, hn = ah.hn, aC = am.la - 1; 0 <= aC; aC--) {
					var hJ = lf[aC],
						aPY = bO.gC(af.aG3(hJ) * hn[hJ], 1e4);
					bD.h7.hA(hJ, Math.max(aPY, 1))
				}
				aPZ(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aPX(), 1 === aE.data.aIncomeType)
						for (var hZ = ah.hZ, lf = am.lf, oJ = aE.data.aIncomeValue, aC = am.la - 1; 0 <= aC; aC--) {
							var hJ = lf[aC];
							bD.h7.hA(hJ, bO.gC(oJ * hZ[hJ], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hZ = ah.hZ, lf = am.lf, oJ = aE.data.aIncomeData, aC = am.la - 1; 0 <= aC; aC--) {
								var hJ = lf[aC];
								bD.h7.hA(hJ, bO.gC(oJ[hJ] * hZ[hJ], 128))
							}
						}();
					aPZ(18)
				}
			}(), bi.l1() % 100 == 99)) {
			if (aPX(), 0 === aE.data.tIncomeType) aPa(32);
			else if (1 === aE.data.tIncomeType) aPa(aE.data.tIncomeValue);
			else
				for (var hZ = ah.hZ, lf = am.lf, oJ = aE.data.tIncomeData, aC = am.la - 1; 0 <= aC; aC--) {
					var hJ = lf[aC];
					bD.h7.hA(hJ, bO.gC(oJ[hJ] * hZ[hJ], 32))
				}
			aPZ(8)
		}
	}, this.kk = function(player) {
		var aBk = Math.min(bQ.lt.aPN(player), 1024),
			player = this.aPO(player) * (1024 - aBk);
		return Math.max(bO.gC(player, 1024), 1)
	}, this.a7d = function(player) {
		var aBk = Math.min(bQ.lt.aPN(player), 1024);
		return bO.gC(this.aPP(player) * (1024 - aBk), 1024)
	}, this.aPP = function(player) {
		player = ah.hZ[player] * aE.a8a;
		return Math.min(player, aE.a8X)
	}, this.aPO = function(player) {
		return Math.min(100 * ah.hZ[player], aE.a8Y)
	}, this.rx = function(player, ry) {
		bu.sR(player, ry, bR.gI[0], 0), bD.h7.hA(ry, bR.gI[0]), bg.sS(player, ry), ag.aPQ(player, bR.gI[0] + bR.gI[1]), ag.sT(ry, bR.gI[0]), bD.h7.nE(player)
	}, this.aPR = function() {
		for (var fl = am.la, xE = am.lf, lz = 0, t8 = ah.hn, aC = 0; aC < fl; aC++) lz += t8[xE[aC]];
		return lz
	}, this.aPS = function(aPT) {
		for (var hJ, fl = am.la, xE = am.lf, lz = 0, t8 = ah.hn, fj = bj.fj, aC = 0; aC < fl; aC++) fj[hJ = xE[aC]] === aPT && (lz += t8[hJ]);
		return lz
	}
}

function ck() {
	var aPe, aPf, aPg, aPh, aPi, aPj, aPk, aPl, aPm, aPn, aPo, aPp, aPq, aPr, aPs, aPt, aPu, aPv, aPx, aPy, aHH, aPz, aQ0, aQ6, aQ7, aPw = null,
		aQ2 = 0,
		aQ3 = !1,
		aQ4 = new Float32Array(4),
		aQ5 = 0,
		aF8 = 112,
		aQ8 = 0;

	function aQC() {
		aPw.width = i.j, aPw.height = i.k, aPx = aPw.getContext("2d", {
			alpha: !0
		}), bD.tc.textAlign(aPx, 1), bD.tc.textBaseline(aPx, 1), aPx.imageSmoothingEnabled = !0, aPw.oncontextrestored = aQC
	}

	function tf() {
		aPm = Math.floor(+i.iw), aPn = Math.floor(.5 * aPm), aQC()
	}

	function aQ9() {
		var aC, aQE;
		for (z9.font = bD.tc.vB(1, 100 * aPo), aQE = 80 / Math.floor(z9.measureText(bD.pa.a3I(aE.a8X)).width), z9.font = bD.tc.vB(1, 100), aC = aE.fi - 1; 0 <= aC; aC--) aPl[aC] = 100 / Math.floor(z9.measureText(ah.a2T[aC]).width), aPk[aC] = Math
			.min(aQE, aPl[aC])
	}

	function aQF(aC) {
		return !aQ8 || (aC = ah.hn[aC]) < 1e6 ? 1 : aC < 1e7 ? aQ4[0] : aQ4[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aQD(io) {
		aQ3 = !1, aQ2 = bi.el, aPv = !1, aPu = 1, aPs = aPt = 0, io.clearRect(0, 0, i.j, i.k);
		for (var aQM, aQN, aC, aQO, fontSize, aQP, o7 = jN / ix, o8 = jO / ix, oK = (i.j + jN) / ix, oL = (i.k + jO) / ix, aQQ = 0 !== ah.ng[aE.fV] && !bD.h7.kR(aE.fV), g4 = am.la - 1; 0 <= g4; g4--) aC = am.lf[g4], (fontSize = Math.floor(aPr * ix *
			aQF(aC) * aPk[aC] * aPi[aC])) < aPq || aPm <= fontSize || aPg[aC] + aPi[aC] > o7 && aPg[aC] < oK && aPh[aC] + aPj[aC] > o8 && aPh[aC] < oL && (aQM = Math.floor(i.j * (aPg[aC] + aPi[aC] / 2 - o7) / (oK - o7)), aQN = Math.floor(i.k * (
			aPh[aC] + aPj[aC] / 2 - o8) / (oL - o8) - .1 * fontSize), aQO = ad.aD4[aC], io.font = bD.tc.vB(1 === ah.a7T[aC] ? 4 : 1, fontSize), io.fillStyle = aQR(fontSize, aQO % 2), aQ8 ? aQS(io, aC, fontSize, aQM, aQN, aQO) : aQT(aC,
			fontSize, aQM, aQN, io), aPv = !0, 0 < aHH[aC] ? function(aQM, aQN, fontSize, aC, io) {
			0 === kp[aC] ? ak.ps.a39(aPy[aC]) ? (function(aQM, aQN, fontSize, player, sG, io) {
				for (var a17 = aQN, im = (io.globalAlpha = aQb(fontSize), aQF(player) * (aQ8 ? aQ5 : aPl[player])), a16 = aQM - .5 * fontSize / im - .9 * fontSize, g5 = 0; g5 < 2; g5++) io.fillText(ak.ps.a31(sG), a16, a17), a16 =
					aQM + .5 * fontSize / im + .9 * fontSize;
				io.globalAlpha = 1
			}(aQM, aQN, fontSize, aC, aPy[aC], io), aQV(aQM, aQN, fontSize, 0, 0, io)) : ak.ps.a3B(aPy[aC]) ? (aQe(aQM, aQN, fontSize, aPy[aC], 0, io), aQV(aQM, aQN, fontSize, 0, 1, io)) : (aQe(aQM, aQN, fontSize, aPy[aC], 1, io), aQV(
				aQM, aQN, fontSize, 1, 0, io)) : aQe(aQM, aQN, fontSize, aPy[aC], 0, io)
		}(aQM, aQN, fontSize, aC, io) : 0 === kp[aC] && aQV(aQM, aQN, fontSize, 0, 0, io), aQQ && (0 < aHH[aC + aE.fi] || 0 < aHH[aC + 2 * aE.fi] || 0 < aHH[aC + 3 * aE.fi] || 0 < aHH[aC + 4 * aE.fi]) && function(aQM, aQN, fontSize, aC, io) {
			var ev, hE = -1;
			for (ev = 4; 1 <= ev; ev--) 0 < aHH[aC + ev * aE.fi] && hE++;
			for (ev = 1; ev < 5; ev++) 0 < aHH[aC + ev * aE.fi] && (! function(aQM, aQN, fontSize, ev, aC, aQZ, em, io) {
				var a6s;
				if (1 === ev) {
					aC = aPy[aC + aE.fi];
					if (!ak.ps.a3A(aC)) return function(aQM, aQN, fontSize, sG, aQZ, io) {
						io.globalAlpha = aQb(fontSize);
						aQM -= .534 * aQZ * fontSize, aQZ = aQN + 1.59 * fontSize;
						io.font = bD.tc.vB(0, .785 * fontSize), io.fillText(ak.ps.a31(sG), aQM, aQZ), io.globalAlpha = 1
					}(aQM, aQN, fontSize, aC, aQZ, io);
					a6s = ak.a2V.a2a[aC - 1024 + ak.ps.a2m]
				} else a6s = 2 === ev ? aM.a9S()[4].canvas[+(em < 255)] : (3 === ev ? aM.a9S()[5] : aM.a9S()[6]).canvas[0];
				aC = ak.a2V.a2b, em = .8 * fontSize / aC, ev = aQM - .5 * em * aC - .534 * aQZ * fontSize, aQM = aQN + 1.4 * em * aC;
				io.setTransform(em, 0, 0, em, ev, aQM), io.globalAlpha = aQb(fontSize), io.drawImage(a6s, 0, 0), io.globalAlpha = 1, io.setTransform(1, 0, 0, 1, 0, 0)
			}(aQM, aQN, fontSize, ev, aC, hE, aHH[aC + ev * aE.fi], io), hE -= 2)
		}(aQM, aQN, fontSize, aC, io), (aQP = aPo * fontSize) < aPq || (io.font = bD.tc.vB(1, aQP), aQN += Math.floor(.78 * fontSize), aQ8 ? aQT(aC, aQP, aQM, aQN, io) : aQS(io, aC, aQP, aQM, aQN, aQO)))
	}

	function aQT(aC, fontSize, fs, fu, io) {
		var ___id = aC;
		var showName = aC < aE.l4 || !__fx.settings.hideBotNames;
		var eliminationEstimate = __fx.settings.showEstimatedEliminationAttack ?
			__fx.utils.getEstimatedEliminationAttack(___id, ah.hn[___id] - ah.a7c[___id]) :
			"";
		if (showName) io.fillText(ah.a2T[aC], fs, fu), aC < aE.l4 && 2 !== ah.a7T[aC] || (aC = fontSize / aPl[aC], io.fillRect(fs - .5 * aC, fu + bD.tc.a32 * fontSize, aC, Math.max(1, .1 * fontSize)));
		aQ8 && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (io.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			io.fillText(__fx.utils.getDensity(___id), fs, showName ? fu + fontSize : fu),
			eliminationEstimate && io.fillText(eliminationEstimate, fs, showName ? fu + 2 * fontSize : fu + fontSize)
		);
	}

	function aQS(io, aC, fontSize, aQM, aQN, aQO) {
		var em, a7c = ah.a7c[aC],
			aQY = bD.pa.a3I(ah.hn[aC] - a7c);

		function drawDensity() {
			var eliminationEstimate;
			!aQ8 && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (io.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), io.fillText(__fx.utils.getDensity(aC), aQM, aQN + fontSize), eliminationEstimate = __fx.settings
				.showEstimatedEliminationAttack ? __fx.utils.getEstimatedEliminationAttack(aC, ah.hn[aC] - a7c) : "") && io.fillText(eliminationEstimate, aQM, aQN + 2 * fontSize)
		}
		a7c ? (em = io.fillStyle, io.fillStyle = aQR(fontSize, 2 + aQO % 2), io.fillText(aQY, aQM, aQN), io.fillStyle = em) : aQO >> 1 & 1 ? (io.lineWidth = .05 * fontSize, io.strokeStyle = aQR(fontSize, aQO % 2), io.strokeText(aQY, aQM, aQN)) : (1 <
			aQO && (io.lineWidth = .12 * fontSize, io.strokeStyle = aQR(fontSize, aQO), io.strokeText(aQY, aQM, aQN)), io.fillText(aQY, aQM, aQN)), drawDensity()
	}

	function aQV(aQM, aQN, fontSize, aQZ, aQa, io) {
		var a9z = .95 * fontSize / aQ0,
			aQM = aQM - .5 * a9z * aPz + .8 * aQZ * fontSize,
			aQZ = aQN - 1.76 * a9z * aQ0 - (.35 - bD.tc.a32 + .7) * aQa * fontSize;
		io.setTransform(a9z, 0, 0, a9z, aQM, aQZ), io.globalAlpha = aQb(fontSize), io.drawImage(ac.get(4), 0, 0), io.globalAlpha = 1, io.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aQe(aQM, aQN, fontSize, sG, aQZ, io) {
		var ih, a16, a9z;
		io.globalAlpha = aQb(fontSize), ak.ps.a3A(sG) ? (ih = ak.a2V.a2b, io.setTransform(a9z = 1.1 * fontSize / ih, 0, 0, a9z, a16 = aQM - .5 * a9z * ih - .8 * aQZ * fontSize, a9z = aQN - 1.55 * a9z * ih), io.drawImage(ak.a2V.a2a[sG - 1024 + ak.ps
			.a2m], 0, 0), io.setTransform(1, 0, 0, 1, 0, 0)) : (a16 = aQM - .8 * aQZ * fontSize, a9z = aQN - (.35 - bD.tc.a32 + 1) * fontSize, io.fillText(ak.ps.a31(sG), a16, a9z)), io.globalAlpha = 1
	}

	function aQR(fontSize, aQO) {
		return aPn <= fontSize && fontSize < aPm ? bj.aQg[aQO] + aQb(fontSize).toFixed(3) + ")" : bj.aQh[aQO]
	}

	function aQb(fontSize) {
		return aPn <= fontSize && fontSize < aPm ? 1 - (fontSize - aPn) / (aPm - aPn) : 1
	}

	function aQq(im, j) {
		return 1 + Math.floor(aPp * im * j)
	}

	function aQn(aC) {
		for (var left = aPg[aC], g4 = aPg[aC] - ah.jc[aC] - 1; 0 <= g4; g4--)
			if (!aQs(aC, --left, aPh[aC], aPj[aC])) {
				left++;
				break
			} var right = aPg[aC];
		for (g4 = ah.jd[aC] - aPg[aC] - aPi[aC]; 0 <= g4; g4--)
			if (!aQs(aC, ++right + aPi[aC] - 1, aPh[aC], aPj[aC])) {
				right--;
				break
			} var fs = Math.floor((left + right) / 2),
			top = aPh[aC];
		for (g4 = aPh[aC] - ah.je[aC] - 1; 0 <= g4; g4--)
			if (!aQt(aC, fs, --top, aPi[aC])) {
				top++;
				break
			} var bottom = aPh[aC];
		for (g4 = ah.jf[aC] - aPh[aC] - aPj[aC]; 0 <= g4; g4--)
			if (!aQt(aC, fs, ++bottom + aPj[aC] - 1, aPi[aC])) {
				bottom--;
				break
			} var fu = Math.floor((top + bottom) / 2);
		aQk(aC, fs, fu, aPi[aC], aPj[aC]) && (aPg[aC] = fs, aPh[aC] = fu)
	}

	function aQk(player, fs, fu, j, k) {
		fo = Math.floor(.2 * j);
		for (var fo, ev = fs + j - 1; fs <= ev; ev--)
			if (!aQs(player, ev, fu, k)) return;
		for (ev = fu + k - 1 - (fo = (fo = Math.floor(.25 * k)) < 1 ? 1 : fo); fu + fo <= ev; ev--)
			if (!aQt(player, fs, ev, j)) return;
		return 1
	}

	function aQs(player, fs, fu, k) {
		return ad.a1y(player, 4 * (fu * bV.fw + fs)) && ad.a1y(player, 4 * ((fu + k - 1) * bV.fw + fs))
	}

	function aQt(player, fs, fu, j) {
		return ad.a1y(player, 4 * (fu * bV.fw + fs)) && ad.a1y(player, 4 * (fu * bV.fw + fs + j - 1))
	}
	this.dv = function() {
		if (aQ8 = bm.buffer.data[7].value || 8 === aE.lM, aPv = !1, aPr = .88, aPo = .5, aPp = 1.8, aPq = 12 - 3 * bm.buffer.data[9].value, aPf = aPe = 0, aPg = new Uint16Array(aE.fi), aPh = new Uint16Array(aE.fi), aPi = new Uint16Array(aE.fi),
			aPj = new Uint16Array(aE.fi), aPk = new Float32Array(aE.fi), aPl = new Float32Array(aE.fi), aPy = new Uint16Array(2 * aE.fi), aHH = new Uint8Array(5 * aE.fi), aQ6 = new Uint8Array(aE.fi), aQ7 = new Uint8Array(aE.fi), aPw = aPw ||
			document.createElement("canvas"), tf(), aPt = aPs = 0, aPu = 1, aQ8) {
			var aC, aQE;
			for (aQ9(), z9.font = bD.tc.vB(1, 100), aQE = 100 / Math.floor(z9.measureText("900 000").width), aC = aE.fi - 1; 0 <= aC; aC--) aPk[aC] = Math.min(aQE, 2 * aPl[aC]);
			aQ5 = aQE, aQ4[0] = 100 / (aQE * Math.floor(z9.measureText("5 000 000").width)), aQ4[1] = 100 / (aQE * Math.floor(z9.measureText("50 000 000").width)), aQ4[2] = 100 / (aQE * Math.floor(z9.measureText("500 000 000").width)), aQ4[3] =
				100 / (aQE * Math.floor(z9.measureText("1 000 000 000").width))
		} else aQ9();
		! function() {
			var aC;
			for (aC = aE.fi - 1; 0 <= aC; aC--) ah.hZ[aC] < 12 ? (aPg[aC] = ah.jc[aC] + 1, aPh[aC] = ah.je[aC] + 1, aPi[aC] = 1, aPj[aC] = 1) : (aPg[aC] = ah.jc[aC], aPh[aC] = ah.je[aC] + 1, aPi[aC] = 4, aPj[aC] = 2);
			if (aE.iA)
				for (aC = 0; aC < aE.l4; aC++) aPi[aC] = 0;
			aPz = ac.get(4).width, aQ0 = ac.get(4).height
		}()
	}, this.aPQ = function(hJ, a9B) {
		a9B > 18 * ah.hZ[hJ] ? (aQ7[hJ] = 6, ad.aD4[hJ] = 2 + ad.aD4[hJ] % 2) : (aQ6[hJ] = 4, (ad.aD4[hJ] < 2 || 3 < ad.aD4[hJ]) && (ad.aD4[hJ] = 6 + ad.aD4[hJ] % 2))
	}, this.sT = function(hJ, a9B) {
		a9B > 6 * ah.hZ[hJ] ? (aQ7[hJ] = 6, ad.aD4[hJ] = 4 + ad.aD4[hJ] % 2) : (aQ6[hJ] = 4, (ad.aD4[hJ] < 4 || 5 < ad.aD4[hJ]) && (ad.aD4[hJ] = 8 + ad.aD4[hJ] % 2))
	}, this.resize = function() {
		tf(), aQD(aPx)
	}, this.a8T = function() {
		for (var aC = 0; aC < aE.l4; aC++) ah.jd[aC] - ah.jc[aC] != 3 || ah.jf[aC] - ah.je[aC] != 3 ? (aPg[aC] = ah.jc[aC] + (ah.jd[aC] !== ah.jc[aC] ? 1 : 0), aPh[aC] = ah.je[aC], aPi[aC] = 1, aPj[aC] = 1) : (aPg[aC] = ah.jc[aC], aPh[aC] = ah
			.je[aC] + 1, aPi[aC] = 4, aPj[aC] = 2)
	}, this.tD = function(player, eU, aQH) {
		! function(player, eU, aQH) {
			player += eU * aE.fi;
			0 === eU ? aPy[player] === aQH && 0 < aHH[player] ? aHH[player] = 0 : (aPy[player] = aQH, aHH[player] = ak.ps.a39(aQH) ? 255 : 64) : 1 === eU ? (aHH[player] = 64, aPy[player] = aQH) : aHH[player] = aQH
		}(player, eU, aQH), 2 === aE.a3z && this.nS(!0)
	}, this.z8 = function() {
		aPv && (1 !== aPu ? (z9.imageSmoothingEnabled = !0, z9.setTransform(aPu, 0, 0, aPu, 0, 0), z9.drawImage(aPw, -aPs / aPu, -aPt / aPu), z9.setTransform(1, 0, 0, 1, 0, 0), z9.imageSmoothingEnabled = !1) : z9.drawImage(aPw, -aPs, -aPt))
	}, this.aDq = function(j6, j9) {
		aPs += j6, aPt += j9
	}, this.a5Y = function(j6, j9) {
		ag.aDq(j6, j9)
	}, this.zoom = function(a6R, mJ, mK) {
		aPu *= a6R, aPs = (aPs + mJ) * a6R - mJ, aPt = (aPt + mK) * a6R - mK
	}, this.aNk = function(player) {
		var jc = ah.jc[player],
			jd = ah.jd[player],
			je = ah.je[player],
			jf = ah.jf[player],
			jH = bP.i2(0),
			jI = bP.i4(0),
			jJ = bP.i2(i.j),
			jK = bP.i4(i.k);
		jc < jJ && jH < jd && je < jK && jI < jf && (aPi[player] = 0, aQ3 = !0)
	}, this.nS = function(c3) {
		return !(!aQ3 && !c3 && bi.el < aQ2 + (1 === aPu && 0 === aPs && 0 === aPt && (aE.a8z() || aE.iA || 2 === aE.a3z) ? 1e3 : aF8) || (aQD(aPx), 0))
	}, this.aQK = function(aC) {
		return aQF(aC) * aPk[aC]
	}, this.aQL = function(player) {
		return aPk[player]
	}, this.eq = function() {
		bi.l1() % 10 == 9 && (aQ3 = aQ3 || aE.a91() && !aE.a8z()), !aE.a8z() && 4 <= ++aPf && function() {
			var aC, g4, g5;
			for (aPf = 0, g5 = 4; 1 <= g5; g5--)
				for (g4 = am.la - 1; 0 <= g4; g4--) aC = am.lf[g4] + g5 * aE.fi, 0 < aHH[aC] && aHH[aC] < 255 && aHH[aC]--;
			if (2 !== aE.a3z)
				for (g4 = am.la - 1; 0 <= g4; g4--) aC = am.lf[g4], 0 < aHH[aC] && aHH[aC] < 255 && aHH[aC]--
		}();
		var aC, g4, fl = Math.floor(.1 * am.la);
		for (fl = (fl = fl < 8 ? 8 : fl) > am.la ? am.la : fl, aC = aPe + fl - 1; aPe <= aC; aC--) g4 = aC % am.la, ! function(aC) {
			var im = aQF(aC) * aPk[aC];
			0 < aPi[aC] && aQk(aC, aPg[aC], aPh[aC], aPi[aC], aPj[aC]) ? ! function(aC) {
				for (var fs, fu, j, k, fP = !1, g5 = 0; g5 < 8; g5++) {
					if (j = aPi[aC] + 2, k = aPj[aC] + 2, j > ah.jd[aC] - ah.jc[aC] + 1 || k > ah.jf[aC] - ah.je[aC] + 1) return fP;
					if (fs = aPg[aC] - 1, fu = aPh[aC] - 1, !aQk(aC, fs, fu, j, k)) return fP;
					aPg[aC] = fs, aPh[aC] = fu, aPi[aC] = j, aPj[aC] = k, fP = !0
				}
				return fP
			}(aC) && function(aC, im) {
				for (var fs, fu, j, k, fP = !1, aHQ = aPi[aC], oJ = 1 + Math.floor(.02 * aHQ), g5 = 1; g5 < 5; g5++) {
					if ((j = aHQ + g5 * oJ) > ah.jd[aC] - ah.jc[aC] + 1) return fP;
					if ((k = aQq(im, j)) > ah.jf[aC] - ah.je[aC] + 1) return fP;
					fs = ah.jc[aC] + Math.floor(Math.random() * (ah.jd[aC] - ah.jc[aC] + 2 - j)), fu = ah.je[aC] + Math.floor(Math.random() * (ah.jf[aC] - ah.je[aC] + 2 - k)), aQk(aC, fs, fu, j, k) && (aPg[aC] = fs, aPh[aC] = fu, aPi[
						aC] = j, aPj[aC] = k, fP = !0)
				}
				return fP
			}(aC, im) && aQn(aC) : ! function(aC, im) {
				var k, fs = aPg[aC] + 1,
					fu = aPh[aC] + 1,
					j = aPi[aC] - 2;
				for (;;) {
					if (j < 1) {
						aPi[aC] = 0;
						break
					}
					if (k = aQq(im, j), aQk(aC, fs, fu, j, k)) return aPg[aC] = fs, aPh[aC] = fu, aPi[aC] = j, aPj[aC] = k, 1;
					fs++, fu++, j -= 2
				}
				return
			}(aC, im) ? function(aC, im) {
				var fs, fu, j, k, g5, oP, kK = ah.jd[aC] - ah.jc[aC] + 1,
					aQr = Math.floor(.02 * kK);
				for (oP = -6 * (aQr = aQr < 1 ? 1 : aQr), g5 = kK; oP <= g5; g5 -= aQr)
					if (k = aQq(im, j = 0 < g5 ? g5 : 1), fs = ah.jc[aC] + Math.floor(Math.random() * (ah.jd[aC] - ah.jc[aC] + 2 - j)), fu = ah.je[aC] + Math.floor(Math.random() * (ah.jf[aC] - ah.je[aC] + 2 - k)), aQk(aC, fs, fu, j, k))
						return aPg[aC] = fs, aPh[aC] = fu, aPi[aC] = j, aPj[aC] = k
			}(aC, im) : aQn(aC)
		}(am.lf[g4]);
		aPe = (aPe += fl) % am.la
	}, this.nM = function() {
		var aC, hJ, a37, a38;
		if (bi.l1() % 4 == 1)
			for (aC = am.la - 1; 0 <= aC; aC--) hJ = am.lf[aC], ad.aD4[hJ] < 2 || ((a37 = Math.max(aQ6[hJ] - 1, 0)) === (a38 = Math.max(aQ7[hJ] - 1, 0)) ? 0 === a37 && (ad.aD4[hJ] %= 2) : 0 === a38 && ad.aD4[hJ] < 6 && (ad.aD4[hJ] += 4), aQ6[
				hJ] = a37, aQ7[hJ] = a38)
	}, this.aAj = function(player) {
		var aC = player + 2 * aE.fi,
			em = aHH[aC];
		return 0 < em && (aO.a47(50, player), aHH[aC] = 0, 255 === em)
	}, this.a9j = function(player) {
		return 255 === aHH[player + 2 * aE.fi]
	}
}

function cm() {
	var aQu, aQv, aQw;
	this.dv = function() {
		aQu =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aQv =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aQw = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aB3 = ["K ", " Y", "E ", " Z", " z", " s", "S "], aIi = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aQu.length - 1; 0 <= aC; aC--)
			for (var g4 = aB3.length - 1; 0 <= g4; g4--) aQu[aC] = aQu[aC].replace(aB3[g4], aIi[g4]);
		if (__fx.settings.realisticNames) aQu = realisticNames;
	}, this.a8m = function() {
		var fl = aE.l4,
			a2T = ah.a2T,
			a4j = ah.a4j,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fl)
			for (var aC = 0; aC < fl; aC++) a2T[aC] = a4j[aC] = "Player " + az.kL(1e3);
		else
			for (aC = 0; aC < fl; aC++) a2T[aC] = a4j[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.lM) {
			for (var eT = az.random(), aR2 = aQw, aR3 = aQv, iS = aF.iS, fl = aR2.length, lz = aE.data.teamPlayerCount[7], a2T = ah.a2T, a4j = ah.a4j, aC = lz - 1; aC >= aE.l4; aC--) a2T[aC] = a4j[aC] = aR2[(aC + eT) % fl];
			for (fl = aR3.length - 1, aC = lz; aC < aE.fi; aC++) a2T[aC] = a4j[aC] = aR3[iS[aC] ? fl : aC % fl]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fl = aE.fi, a2T = ah.a2T, a4j = ah.a4j, playerNamesData = aE.data.playerNamesData, aC = aE.l4; aC < fl; aC++) a2T[aC] = a4j[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var a2T = ah.a2T, a4j = ah.a4j, aC = aE.l4; aC < aE.fi; aC++) a2T[aC] = a4j[aC] = "Bot " + az.kL(1e3)
		} : function() {
			for (var aR4 = aQu, fl = aR4.length, eT = az.random(), a2T = ah.a2T, a4j = ah.a4j, aC = aE.l4; aC < aE.fi; aC++) a2T[aC] = a4j[aC] = aR4[(aC + eT) % fl]
		})()
	}
}

function d5() {
	this.aR5 = [], this.aR6 = [], this.dv = function() {
		this.aR5 = [], this.aR6 = []
	}, this.eq = function() {
		0 <= this.aR5.length && this.aR7(this.aR5), 0 <= this.aR6.length && this.aR7(this.aR6)
	}, this.aR7 = function(h) {
		for (var g5 = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].el--, h[aC].el <= 0) {
				g5 = aC;
				break
			} for (aC = g5; 0 <= aC; aC--) h.shift()
	}, this.a9a = function(id, xE, aR8) {
		return this.g6(this.aR5, id, xE, aR8)
	}, this.aR9 = function(id, xE, aR8) {
		return this.g6(this.aR6, id, xE, aR8)
	}, this.g6 = function(h, id, xE, aR8) {
		return ! function(h, id, xE) {
			var aC, ib;
			for (aC = xE.length - 1; 0 <= aC; aC--)
				for (ib = h.length - 1; 0 <= ib; ib--)
					if (h[ib].player === xE[aC] && id === h[ib].id) return 1;
			return
		}(h, id, xE) && (aR8 && function(h, id, xE) {
			var aC;
			for (aC = xE.length - 1; 0 <= aC; aC--) h.push({
				player: xE[aC],
				id: id,
				el: 384
			})
		}(h, id, xE), !0)
	}
}

function cl() {
	this.a4j = new Array(aE.fi), this.a2T = new Array(aE.fi), this.a7T = new Uint8Array(aE.fi), this.ng = new Uint8Array(aE.fi), this.jc = new Uint16Array(aE.fi), this.je = new Uint16Array(aE.fi), this.jd = new Uint16Array(aE.fi), this.jf =
		new Uint16Array(aE.fi), this.hZ = new Uint32Array(aE.fi), this.a1Y = new Uint32Array(aE.fi), this.hn = new Uint32Array(aE.fi), this.hD = null, this.hR = null, this.hS = null, this.gA = null, this.sw = new Uint16Array(aE.fi), this.k7 =
		new Uint16Array(aE.fi), this.k8 = new Uint16Array(aE.fi), this.a4e = new Uint16Array(aE.fi), this.a4c = new Uint8Array(aE.fi), this.a7c = new Uint16Array(aE.fi), this.dv = function() {
			this.a4j.fill(""), this.a2T.fill(""), this.a7T.fill(0), this.ng.fill(0), this.jc.fill(0), this.je.fill(0), this.jd.fill(0), this.jf.fill(0), this.hZ.fill(0), this.a1Y.fill(0), this.hn.fill(0), this.hD = new Array(aE.fi), this.hR =
				new Array(aE.fi), this.hS = new Array(aE.fi), this.gA = new Array(aE.fi), this.sw.fill(0), this.k7.fill(0), this.k8.fill(0), this.a4e.fill(0), this.a4c.fill(0), this.a7c.fill(0)
		}
}

function d3() {
	this.aHr = function(player) {
		aH.nf(player), aE.a41++, ah.a7T[player] = 2, ah.a4e[player] = bl.a4s.aNt(), player === aE.fV && (aY.show(!1, !1), aX.aFp(), bU.a3l.a4Z()), ag.aAj(player)
	}
}

function ce() {
	this.lf = null, this.la = 0, this.a8q = function() {
		for (this.la = 0, aC = aE.fi - 1; 0 <= aC; aC--) 0 !== ah.ng[aC] && this.la++;
		this.lf = new Uint16Array(this.la);
		for (var fl = 0, aC = 0; aC < aE.fi; aC++) 0 !== ah.ng[aC] && (this.lf[fl++] = aC)
	}, this.nL = function() {
		for (var hZ = ah.hZ, a1Y = ah.a1Y, a4c = ah.a4c, lf = am.lf, aC = am.la - 1; 0 <= aC; aC--) {
			var hJ = lf[aC],
				em = hZ[hJ],
				lz = a1Y[hJ];
			em <= bO.gC(lz, 4) ? al.e3(hJ) : lz <= em ? 250 <= (a1Y[hJ] = em) && (a4c[hJ] = 1) : a1Y[hJ] = lz - Math.max(1, bO.gC(lz - em, 1e3))
		}
		this.aRD()
	}, this.aRD = function() {
		for (var ng = ah.ng, ly = this.lf, aGX = this.la, aC = aGX - 1; 0 <= aC; aC--) 0 === ng[ly[aC]] && (ly[aC] = ly[--aGX]);
		this.la = aGX
	}
}

function cf() {
	var aRE = new Uint16Array(aE.fi),
		aRF = 0;

	function aRJ(aAs, aRH) {
		var ev = bi.l1();
		return 3213 <= ev ? 4 + bO.gC(100 * aRH, af.kk(aAs)) : (aAs = 1 + bO.gC(aE.ko, 300), ev < 357 ? 2 + bO.gC(100 * aRH, aAs) : ev < 714 ? 2 + bO.gC(100 * aRH, 4 * aAs) : ev < 1071 ? 2 + bO.gC(100 * aRH, 10 * aAs) : ev < 2142 ? 2 + bO.gC(100 *
			aRH, 30 * aAs) : 2 + bO.gC(100 * aRH, 100 * aAs))
	}

	function aRI(aAs) {
		return aE.lO || 4284 <= bi.l1() || bD.h7.kR(aAs)
	}
	this.dv = function() {
		aRE.fill(0), aRF = 15
	}, this.a9b = function(ry) {
		var player = aE.fV;
		return !!bD.h7.sy(player, ry) && !(!bD.h7.sO(player, bD.h7.jL(player, aS.iG()), ry) || (player = ry, ry = bR.gI[0], !aRI(player) && aRE[player] + aRJ(player, ry) > aRF))
	}, this.eu = function(aAs, aRH) {
		if (!aRI(aAs)) {
			aRH = aRJ(aAs, aRH);
			if (aRE[aAs] + aRH > aRF) return !1;
			aRE[aAs] += aRH
		}
		return !0
	}, this.eq = function() {
		bi.l1() % 100 == 99 && (bi.l1() < 1071 ? aRF += 4 : bi.l1() < 2142 ? aRF += 6 : bi.l1() < 3213 ? aRF += 8 : aRF += 10)
	}
}

function cn() {
	var aRK;
	this.lV = null, this.lU = 0, this.dv = function() {
		aRK = [], 9 === aE.lM && this.aRL()
	}, this.aRL = function() {
		this.lV = [0, 0, 0, 0, 0, 0];
		for (var aRM = [254, 227, 167, 149, 102, this.lU = 0, 0, 0], aRN = [0, 8, 24, 30, 46, 80, 256, 333], aRO = [0, 0, 3, 9, 17, 25, 150, 179], k = aE.l4, aC = 1; aC < aRM.length; aC++)
			if (k <= aRN[aC]) {
				this.lU = aRM[aC - 1] - bO.gC((k - aRN[aC - 1]) * (aRM[aC - 1] - aRM[aC]), aRN[aC] - aRN[aC - 1]), this.lV[5] = aRO[aC - 1] - bO.gC((k - aRN[aC - 1]) * (aRO[aC - 1] - aRO[aC]), aRN[aC] - aRN[aC - 1]), this.lV[0] = aE.fi - k - this
					.lU - this.lV[5];
				break
			} aE.lQ = aE.fi - aE.l4, aE.data.numberTeams = (0 < aE.l4) + (0 < aE.lQ), aE.data.playerCount = aE.a14 = aE.l4 + aE.lQ, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.l4 + this.lU, aE.lQ - this.lU]), aE.a8e.a8k()
	}, this.aO0 = function(player) {
		aRK.push({
			player: player,
			hE: 14 + az.kL(20)
		})
	}, this.eq = function() {
		if (9 === aE.lM)
			for (var aC = aRK.length - 1; 0 <= aC; aC--) --aRK[aC].hE <= 0 && (ag.tD(aRK[aC].player, 0, ak.ps.a2p + ak.ps.a33), aRK.splice(aC, 1))
	}
}

function dM() {
	this.aRQ = 37, this.aRR = 25, this.aOC = 4096, this.fw = 0, this.fx = 0, this.a24 = null, this.aBe = null, this.aRS = null, this.aRT = null, this.fR = 0, this.mapSeed = 0, this.aME = !1, this.aRU = new aRV, this.xV = new aRW, this.aBB = new aRX,
		this.aJu = new aRY, this.aJv = new aRZ;
	var aRa = {
		aRb: function() {},
		dv: function() {}
	};

	function aRj() {
		return {
			fw: bV.fw,
			fx: bV.fx,
			a24: bV.a24,
			aBe: bV.aBe,
			aRS: bV.aRS,
			aRT: bV.aRT,
			fR: bV.fR,
			mapSeed: bV.mapSeed,
			aME: bV.aME
		}
	}

	function aRk(gD) {
		bV.fw = gD.fw, bV.fx = gD.fx, bV.a24 = gD.a24, bV.aBe = gD.aBe, bV.aRS = gD.aRS, bV.aRT = gD.aRT, bV.fR = gD.fR, bV.mapSeed = gD.mapSeed, bV.aME = gD.aME
	}

	function aRd(aC) {
		return !(1 === aC || !bV.aIx(aC) || aC === bV.aRo())
	}
	this.dv = function() {
		this.xV.dv()
	}, this.a8 = function(map, aRc) {
		((map %= this.aRQ) !== this.fR || aRd(this.fR) && aRc !== this.mapSeed) && (this.aME = !1, this.aRU.aRb(), az.a8l(map), this.fR = map, this.mapSeed = aRc, aRd(map) && (bV.xV.aB5[map].aRe = aRc), this.aIx(this.fR) ? (map = bV.xV.aB5[this
			.fR], this.fw = map.j, this.fx = map.k, az.a8l(map.aRe), ar.a8([this.fw, this.fx, map.nl, map.ni]), aRf(), aq.aRg(), ar.aRh()) : this.aJu.a8(this.fR) || console.log("map not loaded: " + this.fR))
	}, this.aRi = function(map, aRc) {
		var gU = aRj(),
			map = (this.a8(map, aRc), this.aRU.aRb(), aRj());
		return aRk(gU), map
	}, this.aK1 = function(map, aRc) {
		var gU = aRj(),
			aRe = az.aRl(),
			aRm = this.xV.aB5[map].aRe,
			aRn = this.aRU,
			aRc = (this.aRU = aRa, this.a8(map, aRc), this.a24);
		return this.aRU = aRn, this.xV.aB5[map].aRe = aRm, az.a8l(aRe), aRk(gU), aRc
	}, this.a97 = function(canvas) {
		canvas && this.a24 !== canvas && (this.fw = canvas.width, this.fx = canvas.height, this.a24 = canvas, this.aBe = this.a24.getContext("2d", {
			alpha: !1
		}), this.ik = this.aBe.getImageData(0, 0, this.fw, this.fx), this.aRT = this.ik.data, this.fR = this.aRo(), this.mapSeed = 0, bV.xV.aB5[this.fR].name = aE.data.mapName)
	}, this.fQ = function(aC) {
		return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aRo()
	}, this.aRp = function(aC) {
		return 2 === aC || 7 === aC || 9 === aC || 20 === aC
	}, this.aRq = function(aC) {
		return 1 === aC
	}, this.aRo = function() {
		return this.aRQ
	}, this.aIx = function(aC) {
		return void 0 === this.xV.aB5[aC].aRr
	}, this.aJo = aRd, this.a96 = function(q5) {
		return 0 === q5.mapType ? q5.mapProceduralIndex < 10 ? q5.mapProceduralIndex : 10 + q5.mapProceduralIndex : 1 === q5.mapType ? 10 <= q5.mapRealisticIndex ? 22 + q5.mapRealisticIndex - 10 : q5.mapRealisticIndex + 10 : void 0
	}, this.aIy = function(q5, aRs) {
		0 === q5.mapType ? q5.mapProceduralIndex = aRs < 10 ? aRs : aRs - 10 : 1 === q5.mapType && (q5.mapRealisticIndex = aRs - (22 <= aRs ? 12 : 10))
	}
}

function aRV() {
	function aS3() {
		bV.aRU.eq()
	}

	function aS8(hJ, aS7) {
		0 < aS7 && (bV.aRT[hJ] += aS7, bV.aRT[hJ + 1] += aS7, bV.aRT[hJ + 2] += aS7)
	}

	function j0(hJ) {
		return bV.aRT[hJ + 2] > bV.aRT[hJ] && bV.aRT[hJ + 2] > bV.aRT[hJ + 1]
	}
	this.aE2 = -1, this.a55 = 0, this.aRt = 0, this.aRu = 8, this.aRv = 32, this.aRw = 8, this.aRx = 32, this.aRy = [0, 0], this.aD4 = [0, 0, 0, 0], this.jW = null, this.aRz = !0, this.aS0 = !1, this.aRb = function() {
		-1 !== this.aE2 && clearTimeout(this.aE2), this.aE2 = -1, this.jW = null, ar.aRh()
	}, this.dv = function() {
		7 === ab.a5B() || this.aS0 || (this.aRz = !0, this.a55 = 0, this.aRt = 1, this.aRy = [bV.xV.aB5[bV.fR].aS1[0], bV.xV.aB5[bV.fR].aS2[0]], this.aD4 = [bV.xV.aB5[bV.fR].aRr[3], bV.xV.aB5[bV.fR].aRr[4], bV.xV.aB5[bV.fR].aRr[5], bV.xV.aB5[bV
			.fR].aRr[6]], this.aRu = bV.xV.aB5[bV.fR].aRr[7], this.aRv = bV.xV.aB5[bV.fR].aRr[8], this.aRw = bV.xV.aB5[bV.fR].aRr[9], this.aRx = bV.xV.aB5[bV.fR].aRr[10], this.aRz ? this.aE2 = setTimeout(aS3, 16) : this.eq())
	}, this.eq = function() {
		if (8 === ab.a5B() && aI.nz()) this.aE2 = setTimeout(aS3, 16);
		else {
			if (0 === this.a55) {
				var aRe = az.aRl();
				if (az.a8l(bV.xV.aB5[bV.fR].aRr[2]), ar.a8([bV.fw, bV.fx, bV.xV.aB5[bV.fR].aRr[0], bV.xV.aB5[bV.fR].aRr[1]]), az.a8l(aRe), this.jW = ar.aS4(), this.a55++, this.aRz) return void(this.aE2 = setTimeout(aS3, 16))
			}
			for (var hJ, fX, aRe = this.aRz ? 10 : 1e6, aRe = bV.fx - this.aRt - 1 < aRe ? bV.fx - this.aRt - 1 : aRe, a1l = this.aRt + aRe, fu = this.aRt; fu < a1l; fu++)
				for (var fs = 1; fs < bV.fw - 1; fs++) j0(hJ = 4 * (fX = fs + fu * bV.fw)) ? this.aS5(hJ, fX, 1) : (this.aS5(hJ, fX, 0), function(fs, fu, hJ) {
					return 1 < fs && j0(hJ - 4) || fs < bV.fw - 2 && j0(hJ + 4) || 1 < fu && j0(hJ - 4 * bV.fw) || fu < bV.fx - 2 && j0(hJ + 4 * bV.fw)
				}(fs, fu, hJ) && this.aS6(fs, fu));
			this.aRt = a1l, this.aRt >= bV.fx - 1 ? (bV.aBe.putImageData(bV.aRS, 0, 0, 1, 1, bV.fw - 2, bV.fx - 2), bi.e2 = !0, this.aRb()) : this.aRz && (this.aE2 = setTimeout(aS3, 16))
		}
	}, this.aS5 = function(hJ, fX, eU) {
		aS8(hJ, Math.floor(this.aRy[eU] + this.aD4[eU] * this.jW[fX] / 1e4) - bV.aRT[hJ])
	}, this.aS9 = function(hJ, eT, aSA, eU, aD4) {
		aS8(hJ, Math.floor(this.aRy[eU] + (1 - eT / aSA) * aD4) - bV.aRT[hJ])
	}, this.aS6 = function(mJ, mK) {
		for (var hJ, eT, aSA, aDs = mJ - this.aRv, aSB = mK - this.aRv, a1m = mJ + this.aRv, a1l = mK + this.aRv, aDs = aDs < 1 ? 1 : aDs, a1m = a1m > bV.fw - 2 ? bV.fw - 2 : a1m, a1l = a1l > bV.fx - 2 ? bV.fx - 2 : a1l, fu = aSB < 1 ? 1 :
			aSB; fu <= a1l; fu++)
			for (var fs = aDs; fs <= a1m; fs++) j0(hJ = 4 * (fs + fu * bV.fw)) ? (aSA = this.aRu + (this.aRv - this.aRu) * this.jW[fs + bV.fw * fu] / 1e4, Math.abs(mJ - fs) > aSA || Math.abs(mK - fu) > aSA || aSA <= (eT = Math.sqrt((mJ - fs) * (
				mJ - fs) + (mK - fu) * (mK - fu))) || this.aS9(hJ, eT, aSA, 1, this.aD4[3])) : (aSA = this.aRw + (this.aRx - this.aRw) * this.jW[fs + bV.fw * fu] / 1e4, Math.abs(mJ - fs) > aSA || Math.abs(mK - fu) > aSA || aSA <= (eT = Math
				.sqrt((mJ - fs) * (mJ - fs) + (mK - fu) * (mK - fu))) || this.aS9(hJ, eT, aSA, 0, this.aD4[2]))
	}
}

function aRf() {
	var vU = aSC(bV.fR);
	vU && aSD(vU[0], vU[1], vU[2], vU[3], vU[4])
}

function aSC(fR) {
	return 2 === fR ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === fR ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === fR ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === fR ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === fR ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aSD(aSE, aSF, aSG, aSH, aSI) {
	for (var fs, fu, aOY, aOZ, a6R, aSL, j5 = aSE.length - 1, aSJ = bV.fw + bV.fx, fl = (aSJ *= aSJ, aSG.length), aSK = Array(fl), aC = fl - 1; 0 <= aC; aC--) aSK[aC] = aSG[aC] * aSG[aC];
	var aSM = new Array(fl),
		aHE = new Array(fl),
		aSN = new Array(fl),
		gD = ar.aS4();
	if (void 0 === aSI)
		for (aSI = new Array(fl), aC = fl - 1; 0 <= aC; aC--) aSI[aC] = 0;
	for (aC = 1; aC < fl; aC++) aSM[aC] = aSK[aC] - aSK[aC - 1], aHE[aC] = aSH[aC] - aSH[aC - 1], aSN[aC] = aSI[aC] - aSI[aC - 1];
	for (fs = bV.fw - 1; 0 <= fs; fs--)
		for (fu = bV.fx - 1; 0 <= fu; fu--) {
			for (aOY = aSJ, aC = j5; 0 <= aC; aC--) aOY = (aOZ = (fs - aSE[aC]) * (fs - aSE[aC]) + (fu - aSF[aC]) * (fu - aSF[aC])) < aOY ? aOZ : aOY;
			for (a6R = aSH[fl - 1], aSL = aSI[fl - 1], aC = 1; aC < fl; aC++)
				if (aOY < aSK[aC]) {
					a6R = aSH[aC - 1] + aNK((aOY - aSK[aC - 1]) * aHE[aC], aSM[aC]), aSL = aSI[aC - 1] + aNK((aOY - aSK[aC - 1]) * aSN[aC], aSM[aC]);
					break
				} aSO(bV.fw * fu + fs, a6R, aSL, gD)
		}
}

function aSO(eU, a6R, aSL, gD) {
	a6R < 500 ? gD[eU] = bO.gC(gD[eU] * a6R * 2, 1e3) : 500 < a6R && (gD[eU] += bO.gC(2 * (1e4 - gD[eU]) * (a6R - 500), 1e3)), gD[eU] += bO.gC(aSL * (10 * a6R - gD[eU]), 1e3)
}

function cp() {
	var aSP;

	function aSZ(a6s, im, fs, fu, globalAlpha) {
		bV.aBe.save(), bV.aBe.globalAlpha = globalAlpha, bV.aBe.imageSmoothingEnabled = !1, bV.aBe.scale(im, im), bV.aBe.drawImage(a6s, Math.floor(fs * (bV.fw / im - a6s.width)), Math.floor(fu * (bV.fx / im - a6s.height))), bV.aBe.restore()
	}
	this.aB8 = 0, this.aB9 = 0, this.aBA = 0, this.aBB = 0, this.dv = function() {
		(aSP = new Array(bV.aRQ))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eT: [220, 250, 255, 220],
			w7: [190, 220, 0, 0],
			g5: [170, 200, 0, 0]
		}, aSP[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eT: [25, 0, 100, 0, 25],
			w7: [25, 0, 0, 0, 25],
			g5: [25, 0, 0, 0, 25]
		}, aSP[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eT: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			w7: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			g5: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aSP[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eT: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			w7: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			g5: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aSP[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eT: [10, 10, 20, 10, 10, 170, 212],
			w7: [20, 20, 60, 100, 100, 110, 170],
			g5: [70, 70, 160, 30, 30, 60, 120]
		}, aSP[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eT: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			w7: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			g5: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aSP[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eT: [10, 10, 60, 255, 255, 200, 200],
			w7: [10, 10, 60, 255, 255, 200, 200],
			g5: [80, 80, 255, 255, 255, 200, 200]
		}, aSP[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eT: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			w7: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			g5: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aSP[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eT: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			w7: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			g5: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aSP[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eT: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			w7: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			g5: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aSP[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eT: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			w7: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			g5: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aSP[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eT: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			w7: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			g5: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aRg = function() {
		var aSY, aC, g4, gU, ik = function() {
				var ik;
				return bV.a24 = document.createElement("canvas"), bV.a24.width = bV.fw, bV.a24.height = bV.fx, bV.aBe = bV.a24.getContext("2d", {
					alpha: !1,
					willReadFrequently: !0
				}), ik = bV.aBe.getImageData(0, 0, bV.fw, bV.fx), bV.aRT = ik.data, ik
			}(),
			j = aSP[bV.fR].j,
			eT = aSP[bV.fR].eT,
			w7 = aSP[bV.fR].w7,
			g5 = aSP[bV.fR].g5,
			gD = ar.aS4(),
			fl = j.length - 2,
			aST = new Array(1 + fl),
			aSU = new Array(1 + fl),
			aSV = new Array(1 + fl),
			aSW = new Array(1 + fl);
		for (g4 = fl; 0 <= g4; g4--) aST[g4] = j[g4 + 1] - j[g4], aSU[g4] = eT[g4 + 1] - eT[g4], aSV[g4] = w7[g4 + 1] - w7[g4], aSW[g4] = g5[g4 + 1] - g5[g4];
		for (aC = bV.fw * bV.fx - 1; 0 <= aC; aC--)
			for (g4 = fl; 0 <= g4; g4--)
				if (gD[aC] >= j[g4]) {
					gU = gD[aC] - j[g4], bV.aRT[4 * aC] = eT[g4] + aNK(aSU[g4] * gU, aST[g4]), bV.aRT[4 * aC + 1] = w7[g4] + aNK(aSV[g4] * gU, aST[g4]), bV.aRT[4 * aC + 2] = g5[g4] + aNK(aSW[g4] * gU, aST[g4]), bV.aRT[4 * aC + 3] = 255;
					break
				} bV.aBe.putImageData(ik, 0, 0), bV.aRq(bV.fR) && ac.wB() && bV.aRq(bV.fR) && (ik = ac.xL("arena"), aSY = ac.xL("territorial.io"), aSZ(ik, 5, .5, .5, .1), aSZ(aSY, 2, .5, .45, .1)), bV.aME = !0, bi.e2 = !0
	}, this.a8o = function() {
		for (var hJ, fs, fu, aSa, iZ, gW, aB9 = 0, j = bV.fw, k = bV.fx, gU = j * k * 4, aSb = aGn, aSc = bV.aRT, aC = j - 1; 0 <= aC; aC--) aSb[(hJ = aC << 2) + 2] = aSb[gU - hJ - 2] = 3;
		for (gU = 4 * j, aC = k - 1; 0 <= aC; aC--) aSb[(hJ = aC * gU) + 2] = aSb[hJ + gU - 2] = 3;
		for (aSa = j - 1, iZ = k - 1, fu = 1; fu < iZ; fu++)
			for (gU = fu * j, fs = 1; fs < aSa; fs++) gW = 1 - (aSc[(hJ = gU + fs << 2) + 2] > aSc[hJ + 1] && aSc[hJ + 2] > aSc[hJ]), aSb[hJ + 2] = 6 - 5 * gW, aB9 += gW;
		this.aB8 = (j - 2) * (k - 2), this.aBB = 0, bV.fQ(bV.fR) && (bV.aBB.aSd(), bV.aBB.aSe(4, 5)), this.aB9 = aE.ko = aB9 - this.aBB, this.aBA = this.aB8 - this.aB9 - this.aBB, this.aBA && (bV.aBB.aSe(6, 2), bV.aBB.aSf())
	}
}

function aRW() {
	this.aB5 = null, this.aSg = null, this.aSh = null, this.xW = ["White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East",
		"Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Mare Nostrum", "Denmark", "Iberia", "Japan", "India", "Black Sea", "Italy", "Iceland", "Anatolia",
		"Falklands", "Antarctica", "Hong Kong", "Singapore"
	], this.dv = function() {
		this.aSi = [L(174), L(175), L(176), L(177), L(178), L(179), L(180), L(181), L(182), L(183), L(184), L(185), L(186), L(187), L(188), L(189), L(190), L(191), L(192), L(193), L(194), L(195), L(196), L(197), "Mare Nostrum", L(198), L(199), L(
			200), L(201), L(202), L(203), L(204), L(205), L(206), L(207), L(208), L(209)];
		var aSj = [120, 105, 92],
			cos = [12, 12, 60],
			aSk = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aSl = [140, 130, 120],
			aSm = [12, 12, 76],
			aSn = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aSo = [130, 117, 106],
			aSp = [12, 12, 68],
			aSq = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.aB5 = new Array(bV.aRQ + 1), __fx.customLobby.setMapInfo(this.aB5), this.aB5[0] = {
			j: 230,
			k: 230,
			nl: 1e3,
			ni: 2e3,
			aRe: 173
		}, this.aB5[1] = {
			j: 800,
			k: 800,
			nl: 100,
			ni: 50,
			aRe: 43
		}, this.aB5[2] = {
			j: 512,
			k: 512,
			nl: 128,
			ni: 32,
			aRe: 0
		}, this.aB5[3] = {
			j: 960,
			k: 960,
			nl: 60,
			ni: 8,
			aRe: 0
		}, this.aB5[4] = {
			j: 900,
			k: 900,
			nl: 100,
			ni: 5,
			aRe: 0
		}, this.aB5[5] = {
			j: 1e3,
			k: 1e3,
			nl: 100,
			ni: 40,
			aRe: 0
		}, this.aB5[6] = {
			j: 1e3,
			k: 1e3,
			nl: 100,
			ni: 20,
			aRe: 0
		}, this.aB5[7] = {
			j: 1024,
			k: 1024,
			nl: 128,
			ni: 32,
			aRe: 0
		}, this.aB5[8] = {
			j: 820,
			k: 820,
			nl: 200,
			ni: 100,
			aRe: 0
		}, this.aB5[9] = {
			j: 1024,
			k: 1024,
			nl: 128,
			ni: 32,
			aRe: 0
		}, this.aB5[10] = {
			aS1: aSl,
			aS2: aSm,
			aRr: aSn
		}, this.aB5[11] = {
			aS1: aSo,
			aS2: aSp,
			aRr: aSq
		}, this.aB5[12] = {
			aS1: aSo,
			aS2: aSp,
			aRr: aSq
		}, this.aB5[13] = {
			aS1: aSj,
			aS2: cos,
			aRr: aSk
		}, this.aB5[14] = {
			aS1: aSj,
			aS2: cos,
			aRr: aSk
		}, this.aB5[15] = {
			aS1: aSl,
			aS2: aSm,
			aRr: aSn
		}, this.aB5[16] = {
			aS1: aSl,
			aS2: aSm,
			aRr: aSn
		}, this.aB5[17] = {
			aS1: aSj,
			aS2: cos,
			aRr: aSk
		}, this.aB5[18] = {
			aS1: aSo,
			aS2: aSp,
			aRr: aSq
		}, this.aB5[19] = {
			aS1: aSj,
			aS2: cos,
			aRr: aSk
		}, this.aB5[20] = {
			j: 1024,
			k: 1024,
			nl: 128,
			ni: 32,
			aRe: 0
		}, this.aB5[21] = {
			j: 940,
			k: 940,
			nl: 80,
			ni: 8,
			aRe: 0
		}, this.aB5[22] = {
			aS1: aSo,
			aS2: aSp,
			aRr: aSq
		}, this.aB5[23] = {
			aS1: aSl,
			aS2: aSm,
			aRr: aSn
		}, this.aB5[24] = {
			aS1: [157, 136, 117],
			aS2: [16, 13, 68],
			aRr: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aB7: "[OG] Neutronian"
		}, this.aB5[25] = {
			aS1: aSl,
			aS2: aSm,
			aRr: aSn
		}, this.aB5[26] = {
			aS1: aSj,
			aS2: cos,
			aRr: aSk
		}, this.aB5[27] = {
			aS1: aSo,
			aS2: aSp,
			aRr: aSq
		}, this.aB5[28] = {
			aS1: aSj,
			aS2: cos,
			aRr: aSk
		}, this.aB5[29] = {
			aS1: aSo,
			aS2: aSp,
			aRr: aSq
		}, this.aB5[30] = {
			aS1: aSo,
			aS2: aSp,
			aRr: aSq
		}, this.aB5[31] = {
			aS1: aSl,
			aS2: aSm,
			aRr: aSn
		}, this.aB5[32] = {
			aS1: aSj,
			aS2: cos,
			aRr: aSk
		}, this.aB5[33] = {
			aS1: aSl,
			aS2: aSm,
			aRr: aSn
		}, this.aB5[34] = {
			aS1: [210, 210, 210],
			aS2: [12, 12, 76],
			aRr: [240, 120, 1024, 45, 19, 30, 70, 8, 20, 3, 9]
		}, this.aB5[35] = {
			aS1: aSj,
			aS2: cos,
			aRr: aSk
		}, this.aB5[36] = {
			aS1: aSj,
			aS2: cos,
			aRr: aSk
		};
		for (var aC = 0; aC < bV.aRQ; aC++) this.aB5[aC].name = this.aSi[aC];
		this.aB5[bV.aRQ] = {
			name: ""
		}, this.aSg = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aSg[aC] = aC;
		for (this.aSg[10] = 20, this.aSg[11] = 21, this.aSh = new Uint8Array(bV.aRR), aC = 0; aC < 10; aC++) this.aSh[aC] = 10 + aC;
		for (this.aSh[10] = 22, this.aSh[11] = 23, this.aSh[12] = 24, aC = 13; aC < bV.aRR; aC++) this.aSh[aC] = 12 + aC
	}
}

function aRZ() {
	this.tA = new aSv, this.aSw = new aSx, this.aSy = new aSz(this.tA.aT0), this.aT1 = new aSz(this.tA.aT2);
	var aT3 = [],
		aT4 = [];
	this.get = function(eU, aT5) {
		return (aT5 ? this.aSy : this.aT1).get(this.aT6(eU, aT5))
	}, this.zp = function(eU, aT5, callback) {
		var aO5 = this.aT6(eU, aT5),
			buffer = aT5 ? this.aSy : this.aT1,
			eU = buffer.get(aO5);
		if (eU) callback(eU);
		else if (function(aO5, aT8) {
				for (var em = performance.now() - aT8, fz = !1, aC = aT4.length - 1; 0 <= aC; aC--) aT4[aC].el < em ? aT4.splice(aC, 1) : aT4[aC].aO5 === aO5 && (fz = !0);
				return fz
			}(aO5, this.tA.aT8)) callback(null);
		else {
			for (var aC = 0; aC < aT3.length; aC++)
				if (aT3[aC].aO5 === aO5) return void aT3[aC].aT9.push(callback);
			var q5 = {
				aO5: aO5,
				aT9: [callback]
			};
			aT3.push(q5), this.aSw.zp(function(tA) {
				if (m.e8 && tA.aTC) return tA.aTC;
				return "https://" + b1.z.a4R() + tA.mP
			}(this.tA) + aO5, function(aJw) {
				aT3.splice(aT3.indexOf(q5), 1), aJw && function(aJw) {
					var tA = bz.tA;
					return aJw.length > tA.aTD && aJw[0] === tA.eC
				}(aJw) ? buffer.eu(aO5, aJw) : (aJw = null, aT4.push({
					aO5: aO5,
					el: performance.now()
				}));
				for (var ib = 0; ib < q5.aT9.length; ib++) q5.aT9[ib](aJw)
			})
		}
	}, this.aJx = function(eU, aT5) {
		for (var aO5 = this.aT6(eU, aT5), aC = 0; aC < aT3.length; aC++)
			if (aT3[aC].aO5 === aO5) return !0;
		return !1
	}, this.aT6 = function(eU, aT5) {
		return eU + "-" + m.eE + (aT5 ? "p" : "") + ".bin"
	}
}

function aSz(aRF) {
	var a0z = [];

	function aTE(aO5) {
		for (var aC = 0; aC < a0z.length; aC++)
			if (a0z[aC].aO5 === aO5) return aC;
		return -1
	}
	this.get = function(aO5) {
		var aO5 = aTE(aO5);
		return aO5 < 0 ? null : (aO5 = a0z.splice(aO5, 1)[0], a0z.push(aO5), aO5.aJw)
	}, this.eu = function(aO5, aJw) {
		var aC = aTE(aO5);
		0 <= aC && a0z.splice(aC, 1), a0z.push({
			aO5: aO5,
			aJw: aJw
		}), aRF < a0z.length && a0z.shift()
	}, this.size = function() {
		return a0z.length
	}
}

function aSv() {
	this.aT0 = 16, this.aT2 = 8, this.aTF = 15e3, this.aT8 = 5e3, this.aMV = 5e3, this.mP = "/maps/", this.aTC = null
}

function aSx() {
	this.zp = function(a56, callback) {
		var aTG = new XMLHttpRequest;
		aTG.open("GET", a56), aTG.responseType = "arraybuffer", aTG.timeout = bV.aJv.tA.aTF, aTG.onload = function() {
			var aTH = 200 === aTG.status && aTG.response;
			callback(aTH ? new Uint8Array(aTG.response) : null)
		}, aTG.onerror = aTG.ontimeout = function() {
			callback(null)
		}, aTG.send()
	}
}

function aRX() {
	this.aSd = function() {
		for (var hJ, fs, gU, aSb = aGn, aSc = bV.aRT, j = bV.fw, aSa = j - 1, iZ = bV.fx - 1, hE = 0, fu = 1; fu < iZ; fu++)
			for (gU = fu * j, fs = 1; fs < aSa; fs++) aSc[hJ = gU + fs << 2] === aSc[1 + hJ] && aSc[hJ] === aSc[2 + hJ] && (hE++, aSb[2 + hJ] = 4);
		aq.aBB = hE
	}, this.aSe = function(aTI, aTJ) {
		for (var aSb = aGn, j = bV.fw, aSa = j - 1, iZ = bV.fx - 1, id = 0, fu = 1; fu < iZ; fu++)
			for (var gU = fu * j, fs = 1; fs < aSa; fs++) {
				var fP = 2 + (gU + fs << 2);
				aSb[fP] === aTI && (! function(fP, id, aTI, aTJ) {
					var fl = 1,
						aSb = aGn,
						fn = ad.aNB,
						a6e = [fP],
						aTL = id >> 8 << 1,
						aTM = 255 & id;
					aSb[fP - 2] = aTL, aSb[fP - 1] = aTM, aSb[fP] = 5;
					for (; fl;) {
						for (var a6f = [], aC = 0; aC < fl; aC++)
							for (var fa = a6e[aC], fo = 0; fo < 8; fo++) {
								var fp = fa + fn[fo];
								aSb[fp] === aTI && (aSb[fp - 2] = aTL, aSb[fp - 1] = aTM, aSb[fp] = aTJ, a6f.push(fp))
							}
						fl = (a6e = a6f).length
					}
				}(fP, id, aTI, aTJ), id = (id + 1) % 32768)
			}
	}, this.aSf = function() {
		for (var aSb = aGn, j = bV.fw, aSa = j - 3, iZ = bV.fx - 3, aTO = 12 * j, fu = 3; fu < iZ; fu++)
			for (var gU = fu * j, fs = 3; fs < aSa; fs++) {
				var fP = 2 + (gU + fs << 2);
				2 !== aSb[fP] || 2 === aSb[fP - 12] && 2 === aSb[12 + fP] && 2 === aSb[fP - aTO] && 2 === aSb[fP + aTO] || (aSb[fP - 2] = 1 | aSb[fP - 2])
			}
	}
}

function a8n() {
	(a28 = void 0 === a28 ? document.createElement("canvas") : a28).width = bV.fw, a28.height = bV.fx, a8r = a28.getContext("2d", {
		alpha: !0
	}), a8s = aGn = null, a8s = a8r.getImageData(0, 0, bV.fw, bV.fx), aGn = a8s.data, bD.tj.a6O(aGn)
}

function aRY() {
	function aTU(aB5, q5) {
		for (var canvas = document.createElement("canvas"), p4 = (canvas.width = q5.j, canvas.height = q5.k, canvas.getContext("2d", {
				alpha: !1,
				willReadFrequently: !0
			})), ik = p4.getImageData(0, 0, q5.j, q5.k), a2V = ik.data, src = q5.a2V, fl = src.length, q5 = aB5.aS1, aB5 = aB5.aS2, aTW = q5[0], aTX = q5[1], aTY = q5[2], aTZ = aB5[0], aTa = aB5[1], aTb = aB5[2], aC = 0; aC < fl; aC++) {
			var ib = aC << 2;
			src[aC] ? (a2V[ib] = aTW, a2V[1 + ib] = aTX, a2V[2 + ib] = aTY) : (a2V[ib] = aTZ, a2V[1 + ib] = aTa, a2V[2 + ib] = aTb), a2V[3 + ib] = 255
		}
		return p4.putImageData(ik, 0, 0), {
			canvas: canvas,
			p4: p4,
			ik: ik
		}
	}
	this.aTP = new aTQ, this.a8 = function(fR) {
		var aJw = this.aTR(this.xu(fR));
		return !!aJw && !!(aJw = bz.aP7.a0p(aJw)) && (function(fR, q5) {
			fR = bV.xV.aB5[fR], fR.j = bV.fw = q5.j, fR.k = bV.fx = q5.k, bV.aRS = bV.aRT = null, fR = aTU(fR, q5);
			bV.a24 = fR.canvas, bV.aBe = fR.p4, bV.aRS = fR.ik, bV.aRT = fR.ik.data, bV.aME = !0, bV.aRU.dv(), bi.e2 = !0
		}(fR, aJw), !0)
	}, this.aMZ = function(fR) {
		fR = this.xu(fR);
		return !!(fR < 0 || this.aTP.get(fR)) || null !== bV.aJv.get(fR, 0)
	}, this.zp = function(fR, callback) {
		this.aMZ(fR) ? callback(!0) : bV.aJv.zp(this.xu(fR), 0, function(aJw) {
			callback(null !== aJw)
		})
	}, this.aTS = function(fR, callback) {
		this.zp(fR, function(aMZ) {
			aMZ || new aTT(L(210)), callback(aMZ)
		})
	}, this.aTR = function(eU) {
		var pW;
		return eU < 0 ? null : (pW = this.aTP.get(eU)) ? (bJ.fC.a0k(bJ.fC.a0i(pW)), bG.aD) : bV.aJv.get(eU, 0)
	}, this.aJz = function(fR, aJw) {
		aJw = bz.aP7.a0p(aJw);
		return aJw ? aTU(bV.xV.aB5[fR], aJw).canvas : null
	}, this.xu = function(fR) {
		for (var h = bV.xV.aSh, aC = 0; aC < h.length; aC++)
			if (h[aC] === fR) return aC;
		return -1
	}
}

function aTQ() {
	this.get = function(eU) {
		return 0 === eU ?
			"-VDY-vw1-6zbu-6AMQJRpRKfEM7eQmbR5owiTu26wOjKrtxkM9uayvQ_efKD14ubaPeRhpILFeB0-WPFC_QqLj-lY3XnW13lDhz4mqWxZfFSjPJgwpDQqFT97XxiAD49R_eqHtvmDOq0MG1rRazWgKf5E08ijtr5FUvypm5MGg4U6aMKFJXh6e-VeXOUKC_EWV9lACkoLW1Rcqz446g5rGPGs-TdVVtGIjRPEHUvI5dsCSsao3GsD0etpb5TLxILgIIBBxSUPeJEAb3EKVglBtS3w74sxuQzB2ta8DqS2QacWzlE_MgBVbQCP1eZTXRFxIPMxfOeIBCg9_05a7MoCJV_Ln2HG62_q1A3SWZGg2XNW1O89tHNN5lkePHgU5RQ62UB67lcKtwoeuey9AGd8Bb7ls1tmBp0X60SvfFvXsK-zGQAqeI6-yn8fD3zN1cqLG0MS7-NN7_jtyFcVGKZo8baF9DFiUE7HGaIzH7Hl60Y2I0bD38R4sZwU14AFjBFWMT03oaEa2aLp_V0eFF2bP-9zg9x7x9PeEPgBfIXT_8ct13i75SDgO6iq23Ohb8KOajcaD9II6er8d1dwWtT-FxUQ1di_ztYQFzEF8s6Su9fVtx59eVh_J43DO75ew8cqnudvrj46xElktuqe0TP-15Zh0WviTWELb_lfEaCJKJEM_sRfT-zbNCINEgtRlsO3YXWbnyXGhF0RWQfCINU4Q9fdyvOCpEODKnAamjPz38L_YQ5jr0A49xc9lItKxApCdc8wOKXtRvjYssJAqCF0RB8opCS6BGeGnGM90uhHeUEYLhVDmogyR9rYW3wad7xoaXCFswWtJOrzMyBKSfdKcDAqb-gG-ylhsklPeGBpIqotv7V2zI5EA8RZPmLPFK0Q8yaVecipsoJTRGykB8qwBsKwd2CgOoMzpyZZUx20PbFeZLDYOSXTnVWX1tDVsounxQWY13RPjbwRPIm62tb7-N4jk_9ryCxXiPF8vZMFu3o62c2szAGy4kBBE74caS63GsSeDARjmQdXEBGIvn78m8X1mus43NsqLgHuFylq414iT7ZvY0MjxqT4KRe4-M6aeiuU6vnjx_nTwFyRopNx7PvIbeQh6RVB8CNFCzRvriYh0Ys2wsuT6SHsIOUNlSfRXE82PgYTBRxeuD5nev9RjBXSFA5kdsbqGChmOCfaHRaTKz_WFERjZWTdTgAo-k2zzQ7t0vT0_ZW1IqZh5FNhMsy4nVxyDOFoXvz3saUQ_hot8_Tav1jMa6PlL-zyQqMDaZAJP3IakxH8ypRfm5GRZYKfjXtlcvFfgIr3Ns-cioOeED3LvlRKV7BsCmBy5uUq_NRQ36WYXxnnnQglIp8LULegHZGQPj-LkBVuYJS-7wtoKjr0fSIw6B9-uC3Tuh_5DlUadc76SpJ1mBznH6e_QbNvwL3XEkQ7QM_ERn8TNx0MeG6CmTSoxaXVy8Ixeu0OJZcbqZiQXWSmvrA85Yu1OaZj0GG6mufcgWNAiZWSyGfeiHyZUIq-9POXOpz60aqVmbl3FyOVjuOsWHROF-6WpnAkZd7qcsM7hdK11Bks5xL_0WGn2ypwO0thItqK5isHHuMBciOTcsep21C7MK2gH6tMB9jVDIbQmqgb9-3zIEDALuTae_n2LyZy25Mn6WjfwWoiwkbF3PaByrvSSY2HvorM5k0TlAIYUSZxnmeRq6GJpL_Z5pBJkcCdLYsqVKfjs7-ibBvsX26F5yLp1JGlADdVAW7gwdPQqu6vwijMkxP7hG6GU3uNk1JD5ToFDDV8JLa2yn-jBVA_depAbV4pKRjEISdZ4rmcFQOxAiF67GsAlG-8PuIIoWOCNTboQlUn0aBFeUyWs5umHUUkzQpZuT7KgrQAptZ2c7F6cpY44zOX8kOv3dt7FtbLQEGTJ1HmpyO0BqWvm2FR1kBsqgA65OujMgmTei6GiF58eUM4d_j6-bAIfKyla7VpKYiJFL0awE59GLTZEjv4EFlDpAqOg371kDH9qx8BctTkxUJGw279Tqi93b-qosZ_gN5ZPZcIgZq28HBeBxMZ2fpULj-lvKthjREMxFXxDN-rQ-9da5pFl7isAnjyeK_VL49Ypk3RGdFZElc9HjGSsuCMJQL4F7c56UIAqyAT4LY6izdAlnKopCBMb5KJLvCLH0zCv_5gvbOHPu1eYuPL0ymAluupB7g1SWpKeHmoAENN-hMH1oLEVog2OdvCpA4h3l-jQ9UAnQFaZ_EJzdVHcY8suj3755cw-PfnLHmJIbQSNTMAJIx1viSHtgEviYQy4rvIXMlQ50Oh2qSmHVd6GY22NPNzU5yGbuamJxofZkiVFv2V_xIxluSWEiQCh4b8I047yvkVI8LI20SRy_3n8WfRHD017bCeUbQ8exyfMx428aKe6l_Vf1pyA8GMvFXSP7Q5_328AenJUnDkHVSKpPscdaRpboMmw_O-rOol_0BGNkmm8XSUzzzzxx_CkgNZbdyYtJjhJtLypGpyBXGjCK_w3uTetqi_t_4tJpbIeIiAmzHoYhUN9oizoWpVNZxhFqa9ajUn2CC_zIwsw_u0nsp-AXYia2LugZtip6zOIgVAx0WDDfU_jsXR1lDD_T2XN2k3D3E9DgRyCiHNXuEO3l3WQ1N2iPWBsnOCHSl1F0vlJXNNd0aRQrCSJ8gf-epow3ToJ3cu-Gz9wto4WAoWN6mD1JxXf_wIJxqHDd3WEFtpnJYQRQPQzfE6oSfR9B35Ilm8HQNZTltdhxAf8KTM-ZzXZsFgbvsekerw2g0so0Qh-qPuUrkXM5KxsnPkCE9DrWDEccawcKGnZZD167XWCwLyjk_nmRNBAbY4RPKdvFcOH43erQgS4hPicHEXvozkoG888IcQ8Zz0MssN1VsGbuoxSOfA-YGd7m3rQmWHQM6CgLS91RmSwInXAskdLqC7CGyhVjEwpT8Y7dKe-PdgXgEr2qfKuvIwvmxpMlIV1dL4Rtz1KTBNzntq_96cuaC0m-PHclXSWEUKSIPjFZWL1-iDeiUuA2QOvxK8iUNOy6YAczYXB3CRk4nM41apGaaCZJqUaZXQwGGd36bYpMC8ux5Rq3-uhY3ljwjrYz2I1-SEK8Kr4CAIMlmiW8ZDUMUNtAvcGfuI-W-lNau7S87mnBJs7z6A52L1rDFeliep4NVcyz04TD9oIHvWkoWT4p8-zLPv0mj1kJEbMjlpFWtCah2hW5W655A3-KRP6v8yyotD3mY4XuRlZHx1S5NDkITF5Q20bJARF_8r2ir2iX4nR63eAU0fWF-_n18GmQqsMXINGvZx338nCSb8D74rGRxsiApd6RPmSaMkck7lEeXWcT8R8QQinNazSLIzYzy-6n_wczlTM8W3CzZ8Tv6S-7zWJMesvH6Xnb2MxEg2TOVExCAv5wLmKj5BbvCNhdlWAbT1Jwf7VlocxkVqZMEhe0zCM8JXWOXnWPx3_Zs7G9YNv1_kBXshIA6F58iznUqhWHz3YAO1VlAJo3CNGkD8JQW4xcL-Oz0I-uhqpAxD9QiE5F7yFo2NWu4QsdGqzzcQsNXNACZFnHhdwnDEq22nutfQoMak3XoUEC6be-5k7KV7Yj5GO7Qqur_4CtKtHh5LkFbwPfPBtYWdd4RaEDtyhQel27qHDUpVKY0TfLUk40k5cEvUGsVjVH-n0cEKKeRtLkA39Iz4aIntGjnZrHgv7mvhCxG1MXMldx8w895w3WlSnkyqN6LrDCMMlFEecfCfnEpKpi5Pl890OQ3Q9XgAsyzS0nspn36Mm7MhY8d1Oj6ykmIvWLat24fHYrm6jALb7_8hSyWw69A4SttcZF6ixpDB_gMGJhwotqRwxbyApzNyI0I1alx8jw_v-u1SKW_AmR7GONBSlGBT2YVF0qNqLpfGj4U-FiBuQGd5S5hhvfa_rm_RWhEdre7OsLxX19_Ua3oOav-RJJILBs1PAN1wzGTbPQmVYQ7Dvqj908To7E5MKt2zOJmaK5FmErrurFIy2Xw5Fyp4SGoK_tjkmrwBrI92OBqkSEJyXaU6Q6YboUOJQxGhWBd75OFSMYL6uZmj3Qc7d8Kw1JZJJ6K_vQ2_TYPmii23N5uWi_dlcJrH720sd9tOP1C7W6ezvONM78ZaFCBkY8LHXf4OCOJ1LTjv1FIpZeaHK9Fs4aFKHng5Zgch9oSi_5IOQVf4grRipYiCNdrBn3e2qRVUwQsW6gDXjBKamVTOhbHbVbs5tDjXi7SoPgWpQG04h7-9jt4gB-Y3ZSFPCpE28Vuf_IzOiI6pLaysHZlSZDLC9JcXdB3l1T4EHikksN1GdkZJHvAPYm8wnJb6mOodZjx1VUAhooiUVOIxEiBPjnwGyCLJATJUPdm4MDn41_k3QvGTOG8WfctH6oLorGWfvZ-Xa6xffNlLm5xA4KxIuKNtOLUZtDuDes_2P7NbjA40LAtnrdGqwSHZIoWuV1oEflBd3a0zVikG5Vd3983NlXmeUTiQ17iMKkdu_YTtCTCf70ilprqAWNrQxzY5ZqcziLfRYEISpn7nzSqcrBZ7eWWPUexpz6KnUCnYmI2-OJUglKalGMmlAIsE9pazTBxT0Yp6v6UQet-SKCwxdeBLozSseP8pC6LS1572hNp62kAc4_5zFhxcmZjA7csXkst_8vxmhJGTV" :
			10 === eU ?
			"-VN402V1-6zzzHh0vRIzzz7xY-ef54b0-jwSUTcQmwBNm6Nji6vH5XPAMeIdi-9rPCkBZPOxMpuHH22j9Smd4DXk-t3Pkr1eHg5XLWLUns6yHl8925R73FM4q-5kSPIx7TeGt8vbrGwhu-fSo2cwbzcOuNOAyAVzPPoaa4mmy_D3NatbDQiIKbtttIYYINb-mNKyqtGa-9o0tXOzFYfHIt5UbmhL6y7rQA37i2NUj4gXWBHdUeR4_pygqLtmfG_b2Ze62McU3N535cKogpFBVcgKllakt1ZqfaF6VsC0vkJpayA1LjEDEO36TXtuk1aaZDZ3SefUzd_xKddKJoZrZlPYINN4yhrz36h4x7Sq4XnalNO9S6oC01gl9TRJZm0zf_kbnCKsKy5xaE6Ri3H77YBuddmeFheLLXeN9qIGTbatHHQuFljsRM59weUd7Re0zy2-egRpCeJEyR5qDHpuAZWnd-Bjqiqyb2bTu929zOnFlbXC3Iqa2gHMcHTzKuGl7P-4BQ_K0ZOvla4A3nTyLFKEeWBbrv74E5Hobr9wX3OW8zYDttC1n1ZEJ2jfd8mEleNf_Sy7NP0u2K04eTzK3rGVyXElTWn6Rf4-KwAB1iNwjvln4Fqe2AMvoBcgaT09rT-ZlI3Unb4Z8YWW6TD-qWcY1F9Tc6dxHmIeCcDWaZPzHmAeie3P9wN88tA92yXFjNqIHmtujiMRxBVXfOLWgsyX8-kUwirovx3xfPMDoAEawgK5XpNKAvQcxD8HZmLlMDjioXc0nkM1umHmK1S86O8zBTmi10kJQp43WQgiNIglcXYMJHD90kMxxJ2jfRisToEMlStmLHtzP1cbJpx9mIY8UiPZydeOrezcnMp_2vQlsbZ5E-Ckm2k4wxoYDTpQfI3JyAEwUCGF5B6V5KloxdoFS7iQW4DUurrzQFwMMD7leEHU6q_N74MsY-JUhKJM6ViZnIp1lNowPolYmqwtvjRy-E-L9v7fEuZ-K0AmNVQeYOAjJYcPqzJyGjC45byfIHDeNnxGUH48vV6mjtw06mwtVnEMlbVF0epgH9E0R62EnK3vdBPB8Nq0hUI9CaWcpHQZcwxMqK5v2g5ba3NJKzqWpHWPcY91fTRYWxIyjtngVRdFT0jdKwSPgWDFg2PiLJ5pxWGq0m8GQfO5dl2SoVZve9GyVAHapQi33vgmL9UbaO1AOPu4QhjDUZuvzRU-z0MJEh6a8ygMCYnrgcsVjdvl-_Sz4j3IK17POFjb5NusSL9yMwbe9DXbEZvcjBdYTNG0Kb6fNy4WVtXHxHSIBVQ1Rb6mrArbEQTu-0MUXo8zJGQ8LEr-zue_CxLKrKLYG5XfLCikXOWbES78_i3V15rWrL3-Z3594KEFNElmA4F6x2iO6ZookgtY6ano5qIZJkM4UvNwv3yi5EwVUsPdm4NNCf8DgsdxRHSQE-xi9EcygBRtUdSzM1j_zjCGlLA-jWWd93U4t4sZNhPFcX3Wn-JkdZLfXt9BjIMJybH6jgoPqEWc4yPwXCnROY8ZV6pwFTI7gzwUgp8GYTO3ByB3sAG09W2NJotrVtJ1FD8Py1aXdZ97FfMMIRcoMbQqK96pzDAtwUr2eXNwGJ81n8KHg-7bICssd8M7ZHXOgxTdBSfjhMZo1b2iR5k5sN_NcteBLkKDGSMxJZuNO8OdPrBTXUDPEO8MACX7JsAlkgN5RkFoxIZkaBKKVi5xn3ktHWxUL_nZVf5_EcTqt13qKEjLzCeWL22dh90APbrddLCN4_sHl33OG4DxeI3fa6Dy_DbRNVL6BYwU1EWBl8yawCrsLEuZ3Bp1OmhfnhZm4CWxXs7qp6Ut7R4nWRDO6_EYrFTPri28_n-il7Fl6rjkTk_kq8ngrZoc7rLwcdWmG1u9blLZbS2iMWjbZdN2eJ49Pw-NPEPI7iMHl7QUN4sznqBI_PQcDNoAB6eEC3Px9ClwN4tQ7c3OCrhdGXghaxZtEwBBkhwh9y4KL4d_Ja20eiCUZEmYGQTabZQPHgaQR8Kq2SXQ34iAH_WRqW-F0bfK8vLaNnVjgrtsmn9eqkQ4yhvn6BpI67MkLbZ6NebJQjB5QS6uoEpYgVH4cXAwX46xAkbHbGzL_kcGfC9COQWNvwyPHYrxgK3hMUOZjJUUoHzPZlj37Ts8fDAhOdz6hqvtBHpNOoXQRVH9oC4X5x3DGNgP8_mT0ajgNP5v21edkD4W-zRj8KAO8LDj1ejhiQ2AtfoIEL-T6SrFsSfGCAt31rkSyQ7pALOg7hNzIgXSOsgWeFuN5rW2IT8hI9y5vIzhTqLBKfC8kMsOyECCYwOMpEmbWHQRECRDmI_B9p-yZGS6PmpuwVS_T8vQSBA-opyXoDbCWEG23Hr-HHaWsc_ARo6EYvbf-tGnBWnBZUb1ZzLanzW34A8cc-JI6uhtknm0UNJWAly9pn4KyJKwpN-ckkiOCrBeCyEiaB_VIb35MpHrSP6NdpcenspoORtJ9H8TIHyZpKb3RJGwaJiHHP8sdBXXxeIdsiALydmgMJxx_pslQteW9y3O8nefPBddCLL8bx3y4XUQGQFXhLUx2_Ue5FM_g4AE8zrxiSa8W2Y2gz9h_bv4w1vyT0iVHzwXs9kxb2giHLJgKTmCTdM5KkVL10NgDiPr9Vns7q7fE7tfLYislp-wePl3ww9vew3vKOZeRQAZlKsX1VGtiaJhEJ9EkjuSRpJtS_FQE7izTTrAJryzvMrJeim0FWZ3iIo0Z6vs7jX_aQ7OfLkkKzv5eeIZOjJx7pbNw2EKTbA7Px9Yo8wUmM1qPpGKXeKHXqnyauqkE3a77zhKYJuc7U2GRDTYisjcHFK9HcoOUenMGGjdBwTm6aq09P1FzGZoziTbIL9XApuSjFWLzS9jCqVJ17Tq3x0lUhzWW6r1DxdAqTgrvgZ5-xFN3qRih9lY6Rg-nc1NAU5MMKcY1lYRQYfuh25EJ8PazQr1Mcnmp863yv3UXlfV8w_l4gZ0oMG0XBz3lwg65RCn6YJzMsAXt2_3D2K93EwXqgsYHTjCpYumB8lHd7Lzr0zlq-Q6WHD_b4qlTU20WXYm3GH45Y70Un2kdXfhUBw3WPiW3mQtLMYXJv_3TZ05D9olM37H9IyceF89kaOPdEinLxoK0MrpuhPlEabBblclnE5y8RknKsP4MtkJ10a2cYg_SDOHoYeERpLeNs5FTnRfKWZUtFjJxH7A5Opwqp93AUIcEsvsdGZZQncbRbXmthS6AKsRyOM3BsjE7uxIUaJofLF7eopfOGTcexKOtNzbDzfA7498VQnxrGTNJ2GyB-tuhqpjVdtE6I_RjnxqAn6qulv4IjqxrKmAandf0DLbmRS0LkBH6ShxsMSeViM7sjiZ9lDCtY92DrYgCnreF0kCzNHI91JlaKU2mJPJyXc8aQHl61j-kcCf6aVbkQSsnsKTtmIOD7XV6tQ123fHRpdSeEPwrLYenw-fD2WxDVLc8vR1jRz_NnBWPWelDD9OLjiXcyhsnoLb8htj88RIT-9s_SL6tkC36v6xF93VKmvNPXb3ERymaD_yU8ObK-rDgwRmq_aelJHmMoccyQqic-awT0dpIt2gltxkmWHI_q752J7n8_v5idnoEZLdNOXXG0uLR5UhR8EZrwGNYGQ7qffjA2rolVADH0-7Exe_mp25rgA4wbv_ABG9xAY49igV-qf7h164eJOQENu2lDzORskVAD-N_mzZadcQEd0cfKlTudulJIDoSX9Mn3TNx-Kqm81mjTwl_UOumjs9kbP_s0i9g1CM1aO5IMJYIEoRAkN6vY9oW__cG6zK9Z6snLvSGDaDMpltVqb_PS0yZUeNyVO7USD2qYk4K60K6w7QjO5FzXfDwcp2hq5uv1STG1BDQtQT-LocVB8h5_j-0f6ikl2koH117YQkIT_qAjrJweXkXkIWbR99lWn_s4c7WCyoI-nknsJQXAxxsnIATkz-2AiJu4F2n4ikqkXXCiRlejE2EQDOPMd4UVMalTHRRe01z-LgaFt831Njp2wkWSWnCXd5-LDnUdecdiJlXLbzLIUXn4byaFonT6zsO8o8jN6dVScQ0917XlT4iHp1lW_YsNLdvTxMr0pMUS4pRE25VS_lFmJg5sk2rRMOsEKDfb0zOg8YKcLtIDdIziqea-1WviS3ODt2VnCOgWYNM2le9QmBlTVW8l-FGAKIlSJCqWbUVAdFiVumMv9Spiu5xXFjsIsHftdZ8gJ0oUZNQ-DU5AWxwGxSF5KY7AhFjB9pYFAFAelME5ElA6ncZ6qcLbN64KjSWgdBX5e83dT_eAcYSyDJ7L1llB6tLaywEoRtoWUEQuqe7inLL-trCZivi4-JcGzXDfSM_T10rTqLRapq1uno1AyNkZUQPzI4gZleSBAtx42R8EUaonQgV99cH17TQPSkGXtkbQrXQTofa3oDddW60MhxZYpO29s808tpcmW2h7Iv6-r4TnTOHGxMHE88573rJ3HtBdi4aPDC-lagQIcRHh89HRJytCXSOa4VL5DYcnrmSafOoN28XutPZfe4Q8-GBnhwWrPWJgl2hKU3leVgA8KzFsr13SAlYF_J24Z3RFa8-qOYnITbVhA-iSHjp53mYaaAq7hsWrtD6YkkfA5ODVVZPto7rIPhR6MLpGDFV156fe_6jCmRxGIP8HbaTb9YPXcxHl0LAfM0yuqgxDWvKji_i75OREyE0JYwQ1YbAIacZiN35qaEdR518x5FhVRYGByxwSzNkqKYAtGcEyGxgo4kvUwlDxfolhr6bylBuqZ6C_jfdijNpgjcsYyaVU-elpP5GZvw9c2WOWOWO_hW7EGDgtsPpRZASBFXnm2P1RKti6cDjJFv1Xp5HcXcs-4xNa06-GhRZ2NFAqbB0OkByvPMjJ6HmKogu60MtMjLQLzIPOW8SYJHKxXwyz4hqVIe-sBw-eNJ3KY6Vu847iBQgKk9ttczQl49dym3GOzCu21ZFDafMnOeDfhLHTKukduWb48m8ayj4UOLuup7mi_MhRTmXtv_o5OeFd4-J8TwaLMbWXuRwUEyX052qcK13qGbJK8vJrf1-wxyWzXz7fQPaSRAnsCbRBO-7T-zR6Pu2O7AW_iG5cAap_JbMSv1nJHAAsR9UdYR8Id8wVaGFc8nLT1YSEVK3txJwKtKCsijAnjXD6Q5Eb9JlyVrI6b8wNWgkcUJbAlpMvWMtFLwcJaE24R9UUX8SDnZq1vLAIbfqLHebm-Y6MgGWJBA9YV2HLsqWoJktZrX8KPTTMRFfIrrDfoqEx3z3rCkKnErZuAvNzZrl6TQMU1K7pmS52dIIlciE1P8LfTtMtnAiQICS4Q9PLSSduTV0xMI4VLjX5-lnodCPG_ziYpu2Qgf6eqsgMzQicJtmzSA-lEcVjGFSWOK31b1f4CYvveyK77AyiXt7G3oZpNca41eSX1vCS40zdIRrpk3JdfoVICwgmQiAFrautECXlMiradHhTYBhDKWn8HxRpVMJl--50-AlK9UpKQzwPotvftsOhjETZqlPpnCMWY_69j9S_2ZF4SR-oPolsMjkZxYoalxv6DDdYNX2w-d8DIfAk6wgYpoq9LaQioakWHBIf-mwyV0fXJuUwD82WQ0Da_b8HZMP13Bz9eQoK25eua5jbKQPvfIubVeGAwhJOv6FEk0il2I43WtNXZQN6uibYTaxxEX6FTMgTIRwO3jOsORCVBUNerFg_OwYCxph9-aqQ8I4LV7CA90l_ni2fxQJQ2UQFqHmUfgkSHuUgHPJ91sMNq8yFsXw2S3l3e5cJj5Z7Es_BOVs2Ur2rRnI0Wg9wGZG_wRyCeHbPt_0ka1gJHsKZAs508rKXKtHkytG436yByue_1n5MoZwdhMR6GmQknTkT04FX4iaXcJjUxxEu-RYU5zMPEHH2yhDjPth5emAbpJpb-Be24VnTqerQGjKElbfzbAero1RHZyswPha2Nxo5xWjQuTDzeBJfThGVb4XywivO2ZdyrMeoIUROisqXISkUO2xgzkPLSQBAOSRa32S7l2MGXvwB0jguMbAshVMndIwm4ca6PJrHeECgyMOq7x4mVfs8jyAGMM33Ko2sLLJ57Vxejdw9vBShSeZlK0GEk7p-_qnt1yRNf8IuTQx_5GWVss-mfn26FnzKTmjJJOpkhQmdIyFzlggFfhuceziNqtPHCUCyL7xRbgZ7iadMfzQsw_qusA4CFoBHdNXa-LIJX3J3Y4YvEzEj-s8VP_OUtk_inUqgdZ0D6s8VYbEdmZMgeGOtOjdL5TDEoDv6IPQrCjARnzK-chb1qXvMf0XG_HqHMV10e9H816YYvy3PGykxxhSMHEaNCidzBTxxrPtoMZdlM-s_cSky7pvu2R59c5cCLIcyjGtdnqwbx2pwmAVxmD_Uv5gKAQaPNEIcUaJZm3N7TBX62yanzDg_1rEKBCCUUpr2Grdg_yV0PxXJWqW2xxJTO67y6iSfjhRfh6P33mZ6NMYV-h_SOa-OUO1Ymokqbltmqd81Tk6GuSVADj8g0xB6h_pl-bUjanrW1HmdkbjdNd2ivsl5RC8tBCuFeHU6idAjstV9AOZ_57p6dFdwx44impXE4b5ZHqgewJnZsF18j4mFX8TlmQYAemoNJN_OLcVdXxS6eK-UOqMBdenHNgNvSGkqw4GMhJhavnN2tVzEVqaXhGpVNWJgeP6Gg2Y_qPbiLuhb1JrTsga9IVmTkYphuWQHgssQT1V10CZTjnomqhI9tlza0FphM_l0U1Z_ei071pAhHqp6WMv_9mlZTfhfLqdd0oV6du8Kon95FhQlU7dh0zMh_z3Mck_s2PcMUwnNM480VpFsqw-G5kJmu0hqjanU1OamHOSEg-8irsOQXSXrtn3s_N7slabDvyop50KUoMwPh2KLv8XkpY-HckmKGll_y1ZHyZZxKuZU4dC8jliO5NJALdSkbWCji8NJ7V92BKIl_i6s-a2ls6E9VdlOOt8yy00amo8Cuws-0eFqFHVUAAZP57jQkaoZhz7EbGnQmHIJ8yBXkiGLQKDIIJcIcV8cRQmqgUN81jfxXuBc93ARl6DroGoQjP4uUNDRcIrDFQQsXCRW2dwTsc89UGO_QYtJyDg4r7F87qj9jgdVnKGpJWVl99nk2XjmscoRVkPHtLZR9UJkBUEHBjF8IzaEkdbpt2u2n72hTLsNjTwc2CMVos7fQi3G479LQcDq6VVoXeBr-8O7FQqU0jM4rAd1gylbn2bY76o1TJz5VI9DZycNrbF28X7imObCwA4mADeINedof_4pse2ZPA5U0h-vgWDrqtzzCeRzqe26b3ITzW52gUkoKC6tPDaAXyOBK1C-bHxumuhLE06_WvbZCI3NWIfk-BL0TysZ6he2W2hx0MpbElDh1u29LR0veGaYeY5s_lZ6TEfhjCHESZdR9NmxV2lUZeBqZ-DYW_Hy6NO3mTqwdGvZcwXPVX5ATsgy1Cst5caN4FWgK7n32PmgUMLbI12T33Qg_ze7kFuKPEH8VUiLbwIM5Y6hSauw-UwwIN9s30zGuP_mX9FzLMTYrjL-Tq2L8uOpld06sgi8n23LD0v7Tl_pgp7DDvDQ4evKBNMY8ORqM_qyBYVqX6t2S9eKO3akKqGOfDK-EX4Kp1BtmAqh2eDcXX0VusoCqqwcDGT87Fb6C3i1Nur8PCZW-A0ZPlNhT9muc8AJK_5RTOqvfFKZ44BiSR0-RSmvv1jNJfXgONIRRdevNz-a7Rr_o2DrvHQTd2zrzw3TUliOGSkGqPa0YvpIv6pBR5wfw1jKc8Hn4FrwXNCU2OikfJxxpFwLk0yBiiRRN_QRguSy4DenPdqIFXOv8pnG-SOaLFkOn-8w54WXfxidcnD-nqTK3V9zI-PL9UeXa_g9_iuQR6TgPQoajfB5KrRQGOkuQU74gQetYcFeQ1TlDRAA9DHDwbDhukEYeCbJdNlmXPUfY6Cc91CK2PW0WF79wmRTJrzwwMC_zothQHa1cflH4t4PT3arNcUYIcth-bMn6-N8Kqi-u1lbZ9Srf1jn8ymInAjTad55mjzdZnRqlAnU3o1YZ85YvLj_V9o2BzZTuyJKWSjOiVNjhlCPmh8Lbq4yaFfoCFg3i7DCNPf0OzQqGVqnNQ6ebUPUHTLiAx3Mz2w3tVxTc4YsuPDnNG6aZSZxXstnFl6IDG-EMZ-3dxXAQd4GDDYFmQi9rAuF9aJEt0Tc2owuuL32Fmbx_8hMghfuluo70Q7H1fuPHe5WBHejrknyNrASGyQzx3_8xUnfvVVhfH5cKIUBGetNfcXE3F_vyJ3ydG5KNYcXKqyRbAKs0hIvX13Yxbzxux8ioyvzjkYr4T2GCmVM4hSVu2_7oYbeOlZ2cG2I8TCtxlhM6LhucmMy6dT66rBQSEVNm26kdWy13hSWnQvnqbO-mk_E-ULPxYwQ_JHo_1UezKpLW2DBzuJiMy2j6gPsy67Rlmd13VLq9rAD1HZezHXUnv5jqPLc9zJNtrctiSmfBKPStBR-gLzHGw5niSOKyCTdgwrvVT2mFkYUxIQYnJv-ZCT0QD_vdfED2Tc9LV5hTv6zkDCpuA_4Afj5M9j0SxCXt3EN36pAbZY9Wdy1nsGpiSJhoUKXETAkAKIPGF57BVZ7vd_xyT3Q7cfJ5iz0yZUjM7x_A1Q5idgUDYn8pSPxJXmO9FwNIoSf3iiNlnC14vzc1XVGHMBBHc49rSPDA0b8wywCdCFLK-9TIu-8dK_bj0IbV_YU61sEpay7LPycuATMoj6ZA6anTUw0K1gvfNgiu0Mp4MVEXRlBdKncG84gEO0XVU4UvSVg35ka6cJPzHsOf7P5XXNUiAk49dtHjxg3nUalRpSxgv8qj0fxIbH7ymuhDOTcLS2bjmrBy24HcLz0ufh6WSU5WvyzLTuzOjEf_XH2MzaBQ8qytkQd6FZmGgrghdIvuDtmeIvWxODyXQpI915T3MeACLTqaaJPQv2Hh2ms1orP9-V-LVAEu38rnzUm6yeqbOKc4QuBDcjFLf6YorQ21LM1bsYrI-LKNF7ACijPqBA2m-7Pl98J3nDNzIDOsgbHbIqAKvY5QPgDQvxrUqxq6YaienSVTDxTPrAGfXf6IPvRnBbHB5UFWdNdagXPMLTAgkjZ5tyJ76p_cuvRveJ7QvGd-74NKESlVI6g4Sqadovay5WHd41U1v8X7nCKAZmJ4PS8GEbAJ4OTgMbO_IIHUVlYoAjKDgBLC2F3Y-FIX3snihq1qY57gthWXP_fjJBEu20_Cv1lBs6jAbhsOs7uFBPPc_BdythXdPPg7usWVEc91lv7wBn9-2_uoB5wNpsadsMImW3SjyRDsr5Dkd7-MRmoTTpAZTA4_b7ZBhxvG3MT9YKeRO3pDQZSGkHjvHKnC7gDaY1se75TwpiwwcMKSDET3scyzDthjicY0PRXkj1LLpzGoZZVrbK2-bi3ICEiZnOiYLyYEyNVewmzaOE-BWqHh7R0t0nRrDeQRbNDcOzTTmE9FRwObQv7diGyRypa5-3-toJ18AytqDdE7IydA9WSZtnbXyv_Kc7nJMrNmHJiMzShcI6xiEgTePd5ieIEjbCd2Y37M6HWiYECVgBRWY7B0-1rGLWLzpIEDfj5y1CpV8je3y4EXwW-xpfSZl4aMCenXZZsVWhNsBZ-ogde8q3MvAMLsk_2lcVN9TTG7V5O-KCoi2QVxu9t2szNqN_H34F5-VRkW6a1L4S5KkOkhQ1F97fivmrTAxR2rkklJDuWgj7gFqb4wGV4z2JCMdMoaIlCWipVNTKA6E9Trq9DW7B2YToAa9a087gQyCBXIHA7KGm4RJLzr6KAoB4TzzYB_AsfHxwYVWAkVmHC_PwIj3MxSbgC25heXoLl3t_tuloyg7YZCxo4sNLEedQ6iTOsuKTOWf1UFTp3HbhPf1uJmNv3k5tiF8U65dFaDR5k6Hb_mfrGZ53TVymfkmskTLOnn0KCiFAB6CI5CR1La64ebef4c8SHwlRrkPZlwAlcDjqcReTESxGaqKgH3Htf1yZRjiGjwMrU27lqjy4EriS-yD8_RFtT5rsgNRnhQm25hBt5zTu1az4OBKhxofKPH6t8Fl-RNl-y8YUzSsB3sUJ3IwRLbsB56G6F_VaQhpubbsZp0TiBL8cWSOcoE1uyaiJRKQq8uZKFQu2zCyj1I5ILHjajG9rMViaEF1W0u1oapueZYGvAdWOc4FGG28upzHKj0iRmEweCXke0Wjjaq5Ac_2AP86WlMtjfwHwhhZXlP6dvHbIk0ey88JMD38Fgc5gmgJ84WrWL8NJRS6yX9PIxgHG5JAG97jVkm7lP10VZlRvAT8lfbak_rEztsOv4hykC8qz7TH15CJ7GwguVTCdHVhv9Jy7ZNZIfe9nBVhxL6wex1Pm8dmdcBJ1MnIlw-Uzkl2QvstVKKit53VYKj0pQjficN6AAYDQtWZ80cZUbMltUAVYjnIutyFMu57QuS9zHZ-qY_3_Ae40hmu06OAZnDTHD8kbcJT63r88EavwWlBwmtyb0oEHPaZ5ZFSPcK48mdvrEDg8L-UR8gH2tJBB3NaXDBu3VfgtuCiwBFY-2RwXGWl1ihAQ09SpemMgqdK7vCZpentZgTtTl19w_07lq6e6Qi8vFRcaQ74aMApY205E6f4TpKVpzowiW8DyuavtzUrH1E-Pygj89J8lRhwsA0jfaUD8e4S8FCM82BoELv4cDfH9NLuIIZMBmKOZ--" :
			null
	}
}

function cq() {
	var gD, j, k, max, aTc, ni, aTe, aTf, aTg, aTh, aTi, aTj, aTk, aTl, aTd = 1e4;

	function aTs(aTr, nl, fl) {
		var aC;
		for (aTe[0] = aTr, aC = 1; aC < fl; aC++) aTe[aC] = aTe[aC - 1] + nl, nl = aTe[aC] >= aTd ? (aTe[aC] = aTd - 1, -nl) : aTe[aC] < 0 ? (aTe[aC] = 0, -nl) : (nl += 16384 <= az.random() ? ni : -ni) < -aTc ? -aTc : aTc < nl ? aTc : nl
	}

	function aTu(fs, fu, aTv, fl) {
		(aTv ? function(fs, fu, fl) {
			var aC;
			for (aC = 0; aC < fl; aC++) gD[fu * j + fs + aC] = aTe[aC]
		} : function(fs, fu, fl) {
			var aC;
			for (aC = 0; aC < fl; aC++) gD[fu * j + fs + aC * j] = aTe[aC]
		})(fs, fu, fl)
	}

	function aTy(value, fl) {
		var aC, aQr, fP, kJ = value - aTe[fl - 1];
		if (0 != kJ) {
			for (aQr = 1 + bO.gC(Math.abs(kJ), fl - 1), aQr = kJ < 0 ? -aQr : aQr, aTe[fl - 1] = value, fP = (fP = fl - 1 - bO.gC(Math.abs(kJ), Math.abs(aQr))) < 1 ? 1 : fl - 2 < fP ? fl - 2 : fP, aC = fl - 2; fP <= aC; aC--) aTe[aC] += kJ - (fl -
				1 - aC) * aQr;
			(kJ < 0 ? function(fl) {
				var aC;
				for (aC = fl - 2; 1 <= aC; aC--) aTe[aC] < 0 && (aTe[aC] = -aTe[aC] - 1)
			} : function(fl) {
				var aC;
				for (aC = fl - 2; 1 <= aC; aC--) aTe[aC] >= aTd && (aTe[aC] = 2 * aTd - aTe[aC] - 1)
			})(fl)
		}
	}

	function aU1(a6e, a6f, fl) {
		for (var aC = 0; aC < fl; aC++) a6e[aC] = a6f[aC]
	}

	function aU2(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aU3(a9U, gap, ia) {
		aTf.push(a9U), aTg.push(gap), aTh.push(ia)
	}
	this.a8 = function(a7v) {
		! function(a7v) {
			var aC;
			for (j = a7v[0], k = a7v[1], aTc = a7v[2], ni = a7v[3], gD = new Int16Array(j * k), max = k < j ? j : k, aTe = new Int16Array(max), aTf = [], aTg = [], aTh = [], aTi = new Array(j), aTj = new Array(k), aC = j - 1; 0 <= aC; aC--) aTi[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aTj[aC] = !1;
			aTk = new Int16Array(j), aTl = new Int16Array(k)
		}(a7v),
		function(fl) {
			var aTr = az.random() % aTd,
				nl = az.random() % (2 * aTc + 1) - aTc;
			aTs(aTr, nl, fl)
		}(max), aU1(aTl, aTe, k), aTu(0, 0, !0, j);
		var fs, fu, a7v = gD[0],
			fl = max,
			nl = az.random() % (2 * aTc + 1) - aTc;
		for (aTs(a7v, nl, fl), aU1(aTk, aTe, j), aTu(0, 0, !1, k), aU2(aTk), aU2(aTl), aTs(gD[j - 1], aTk[j - 1], k), aTu(j - 1, 0, !1, k), aTs(gD[j * (k - 1)], aTl[k - 1], j), aTy(gD[j * k - 1], j), aTu(0, k - 1, !0, j), aTi[j - 1] = aTi[0] = !
			0, aTj[k - 1] = aTj[0] = !0, aU3(0, j, !0), aU3(0, k, !1), ! function() {
				var aU5, a9U;
				for (;;) {
					if (aU5 = function() {
							var aC, aU5 = aTf.length - 1;
							for (aC = aU5 - 1; 0 <= aC; aC--) aTg[aC] > aTg[aU5] && (aU5 = aC);
							return aU5
						}(), aTg[aU5] < 5) return;
					a9U = aTf[aU5] + bO.gC(aTg[aU5], 2), (aTh[aU5] ? function(fs) {
						var fl, aU8, aC, aLh = 0,
							aU9 = 0;
						for (; aU9 < k - 1;) {
							for (aC = aLh + 1; aC < k; aC++)
								if (aTj[aC]) {
									aU9 = aC;
									break
								} fl = aU9 - aLh + 1, aTs(gD[fs + j * aLh], 0 === aLh ? aTk[fs] : aTe[aU8 - 1] - aTe[aU8 - 2], fl), aTy(gD[aU9 * j + fs], fl), aTu(fs, aLh, !1, fl), aU8 = fl, aLh = aU9
						}
						aTi[fs] = !0
					} : function(fu) {
						var fl, aU8, aC, aLh = 0,
							aU9 = 0;
						for (; aU9 < j - 1;) {
							for (aC = aLh + 1; aC < j; aC++)
								if (aTi[aC]) {
									aU9 = aC;
									break
								} fl = aU9 - aLh + 1, aTs(gD[fu * j + aLh], 0 === aLh ? aTl[fu] : aTe[aU8 - 1] - aTe[aU8 - 2], fl), aTy(gD[fu * j + aU9], fl), aTu(aLh, fu, !0, fl), aU8 = fl, aLh = aU9
						}
						aTj[fu] = !0
					})(a9U), aU3(a9U, aTf[aU5] + aTg[aU5] - a9U, aTh[aU5]), aTg[aU5] = a9U - aTf[aU5] + 1
				}
			}(), fs = 0; fs < j; fs++)
			if (!aTi[fs])
				for (fu = 0; fu < k; fu++) aTj[fu] || ! function(fs, fu) {
					var value = gD[fu * j + fs - 1] + gD[(fu - 1) * j + fs],
						aBX = 2;
					aTi[fs + 1] && (aBX++, value += gD[fu * j + fs + 1]);
					aTj[fu + 1] && (aBX++, value += gD[(fu + 1) * j + fs]);
					gD[fu * j + fs] = bO.gC(value, aBX)
				}(fs, fu)
	}, this.aS4 = function() {
		return gD
	}, this.aRh = function() {
		gD = null
	}
}

function aNK(g4, g5) {
	return 0 <= g4 ? bO.gC(g4, g5) : -bO.gC(-g4, g5)
}

function ka(gD) {
	return gD * gD
}

function aAW(g4, g5) {
	return g5 < g4 ? g4 : g5
}

function aGB(g4, g5) {
	return g4 < g5 ? g4 : g5
}

function aDN(g4, gD, g5) {
	return gD < g4 ? g4 : g5 < gD ? g5 : gD
}

function aUB(gD, fl) {
	for (var ev = bO.gC(gD + 1, 2), aC = 0; aC < fl; aC++) ev = bO.gC(ev + bO.gC(gD, ev), 2);
	return ev
}

function aPK(gD, fl) {
	return gD < 1 ? 0 : aUB(gD, fl)
}

function aUC(o7, o8, vq, aD7, oK, oL, vr, wW) {
	return !(o7 + vq <= oK || o8 + aD7 <= oL || oK + vr <= o7 || oL + wW <= o8)
}

function aUD(o7, o8, vq, aD7, oK, oL, vr, wW) {
	return o7 <= oK && o8 <= oL && oK + vr <= o7 + vq && oL + wW <= o8 + aD7
}

function aUE(gD) {
	return Math.floor(!!gD * (1 + Math.log2(gD + .5)))
}

function c6() {
	this.gC = function(g4, g5) {
		return Math.floor((g4 + .5) / g5)
	}, this.aUF = function(g4, g5) {
		return Math.floor(g4 * (g5 + .5))
	}, this.sqrt = function(gD) {
		return ~~Math.sqrt(gD + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.iu = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aUG = function(gU, gW, gY) {
		return Math.max(Math.min(gU, gW), gY)
	}, this.aUH = function(aUI, aUJ, fs, fu) {
		fs -= aUI, aUI = fu - aUJ, fu = 0;
		return 0 == fs ? fu = 0 <= aUI ? Math.PI : 0 : (fu = Math.atan(aUI / fs), fu += 0 < fs ? .5 * Math.PI : 1.5 * Math.PI), fu
	}, this.log2 = function(gD) {
		return Math.floor(!!gD * (1 + Math.log2(gD + .5)))
	}, this.log10 = function(gD) {
		return Math.floor(Math.log10(gD + .5))
	}, this.aUL = function(aGj, aUM, aUN, aUO, aUP) {
		return aUN - aUP < aGj && aGj < aUN + aUP && aUO - aUP < aUM && aUM < aUO + aUP
	}, this.a1M = function(aDn, aDp) {
		return aDn * aDn + aDp * aDp
	}
}

function dr() {
	this.tA = new aUQ, this.aUR = new aUS, this.aP7 = new aUT
}

function aUQ() {
	this.eC = 2, this.aTD = 6, this.aUU = 1024, this.aUV = 3, this.aUW = 65535, this.aUX = 2
}

function aUT() {
	var aUY = new aUZ;

	function aUl(aUR, fs, fu, fo, aDe, aDf) {
		if (aUR.fs = fs, aUR.fu = fu, aUR.aUm(fo)) {
			for (aUR.kK(fs, fu, fo); !aUR.aUn(aDe, aDf);) {
				var em = function(aUR) {
					var em, io = aUR.history,
						aUq = aUR.aUm(aUR.fo),
						left = aUR.aUm(aUR.aUp(1)),
						right = aUR.aUm(aUR.aUp(2));
					if (!aUq || left || right)
						if (aUq && aUY.aUe(aUR.aUr, io)) em = 0;
						else if (left && right) em = aUY.aUe(aUR.aUs, io) ? 1 : 2;
					else {
						if (!left && !right) return -1;
						em = left ? 1 : 2
					} else em = 0;
					return aUR.aUt(em), em
				}(aUR);
				if (em < 0) return;
				aUR.aQr(aUR.aUp(em))
			}
			return 1
		}
	}
	this.a0p = function(aJw) {
		var j, k, hE, aUR, tA = bz.tA;
		return !(aJw.length < tA.aTD + 5 || aJw[0] !== tA.eC) && (k = aJw[3] << 8 | aJw[4], hE = aJw[5], !((j = aJw[1] << 8 | aJw[2]) < 1 || k < 1 || hE < 1 || hE > tA.aUX)) && ((aUR = bz.aUR).dv(j, k), aUY.dv(aJw, tA.aTD), aJw = aUY.aUa(1),
			function(aUR) {
				var j = aUR.j,
					gD = -1;
				for (; aUY.aUe(aUR.aUf, 0);) {
					var g4 = aUY.aUg(aUR.aUh, 0);
					if (g4 < 0) return;
					var g4 = (gD += g4 + 1) % (j + 1),
						fu = Math.floor(gD / (j + 1));
					if (fu > aUR.k || !aUR.aUi(g4, fu)) return;
					var fo = aUR.aUj(g4, fu);
					if (aUR.aUk(g4, fu, fo) < 0 || !aUl(aUR, g4, fu, fo, -1, -1)) return
				}
				return 1
			}(aUR)) && function(aUR) {
			var j = aUR.j,
				gD = -1;
			for (; aUY.aUe(aUR.aUf, 1);) {
				var g4 = aUY.aUg(aUR.aUh, 32);
				if (g4 < 0) return;
				var g4 = (gD += g4 + 1) % (j + 1),
					fu = Math.floor(gD / (j + 1));
				if (fu >= aUR.k || 0 == g4 || j <= g4 || 0 === fu) return;
				if (!aUl(aUR, g4, fu, 0, g4, fu)) return
			}
			return 1
		}(aUR) ? {
			j: j,
			k: k,
			hE: hE,
			a2V: function(aUR, p8) {
				for (var j = aUR.j, k = aUR.k, aUu = aUR.aUu, aUv = aUR.aUv, a2V = new Uint8Array(j * k), ev = p8, fu = 0; fu < k; fu++)
					for (var hK = fu * j, e = (0 < fu && (ev = a2V[hK - j] ^ aUu[hK] >> 1), a2V[hK] = ev, aUv + fu * (j + 1)), fs = 1; fs < j; fs++) ev ^= aUu[e + fs] >> 1, a2V[hK + fs] = ev;
				return a2V
			}(aUR, aJw)
		} : null
	}
}

function aUS() {
	this.j = 0, this.k = 0, this.aUu = null, this.aUv = 0, this.fs = 0, this.fu = 0, this.fo = 0, this.history = 0, this.aUr = null, this.aUs = null, this.aUf = null, this.aUh = null;
	var aUw = [1, 0, -1, 0],
		aUx = [0, 1, 0, -1];
	this.dv = function(j, k) {
		var tA = bz.tA,
			aUy = Math.pow(3, tA.aUV);
		this.j = j, this.k = k, this.aUv = j * (k + 1), this.aUu = new Uint8Array(this.aUv + (j + 1) * k), this.aUr = new Uint16Array(aUy).fill(tA.aUU), this.aUs = new Uint16Array(aUy).fill(tA.aUU), this.aUf = new Uint16Array(2).fill(tA.aUU),
			this.aUh = new Uint16Array(64).fill(tA.aUU)
	}, this.aUk = function(fs, fu, fo) {
		var j = this.j,
			k = this.k;
		return 0 === fo ? fs < j && 0 < fu && fu < k ? fu * j + fs : -1 : 2 === fo ? 0 < fs && 0 < fu && fu < k ? fu * j + fs - 1 : -1 : 1 === fo ? fu < k && 0 < fs && fs < j ? this.aUv + fu * (j + 1) + fs : -1 : 0 < fu && 0 < fs && fs < j ? this
			.aUv + (fu - 1) * (j + 1) + fs : -1
	}, this.aUm = function(fo) {
		fo = this.aUk(this.fs, this.fu, fo);
		return 0 <= fo && 2 !== this.aUu[fo]
	}, this.aUi = function(fs, fu) {
		return 0 === fs || 0 === fu || fs === this.j || fu === this.k
	}, this.aUn = function(aDe, aDf) {
		return this.fs === aDe && this.fu === aDf || this.aUi(this.fs, this.fu)
	}, this.aUz = function(em) {
		em = this.aUk(this.fs, this.fu, this.aUp(em));
		return em < 0 ? 0 : this.aUu[em]
	}, this.aUj = function(fs, fu) {
		return 0 === fu ? 1 : fu === this.k ? 3 : 0 === fs ? 0 : 2
	}, this.kK = function(fs, fu, fo) {
		this.fs = fs, this.fu = fu, this.history = 0, this.aQr(fo)
	}, this.aQr = function(fo) {
		this.aUu[this.aUk(this.fs, this.fu, fo)] = 2, this.fs += aUw[fo], this.fu += aUx[fo], this.fo = fo
	}, this.aUp = function(em) {
		return 0 === em ? this.fo : this.fo + (1 === em ? 3 : 1) & 3
	}, this.aUt = function(em) {
		this.history = (3 * this.history + em) % this.aUr.length
	}
}

function aUZ() {
	var aV0 = 0,
		aV1 = 0,
		aV2 = null,
		yI = 0;

	function aV3() {
		return yI < aV2.length ? aV2[yI++] : 0
	}
	this.dv = function(aJw, a0D) {
		aV2 = aJw, yI = a0D + 1, aV0 = 4294967295;
		for (var aC = aV1 = 0; aC < 4; aC++) aV1 = 256 * aV1 + aV3()
	}, this.aUe = function(aV4, aC) {
		for (var hJ = aV4[aC], aV5 = (aV0 >>> 11) * hJ, aV5 = aV1 < aV5 ? (aV0 = aV5, aV4[aC] = hJ + (2048 - hJ >> 5), 0) : (aV1 -= aV5, aV0 -= aV5, aV4[aC] = hJ - (hJ >> 5), 1); aV0 < 16777216;) aV0 *= 256, aV1 = 256 * aV1 + aV3();
		return aV5
	}, this.aUa = function(g5) {
		for (var gD = 0, aC = 0; aC < g5; aC++) {
			var p1 = 0;
			for ((aV0 = Math.floor(aV0 / 2)) <= aV1 && (aV1 -= aV0, p1 = 1), gD = 2 * gD + p1; aV0 < 16777216;) aV0 *= 256, aV1 = 256 * aV1 + aV3()
		}
		return gD
	}, this.aUg = function(aV4, p2) {
		for (var hK = 0; this.aUe(aV4, p2 + hK);)
			if (30 < ++hK) return -1;
		return Math.pow(2, hK) + this.aUa(hK) - 1
	}
}

function dO() {
	this.z = new aV6, this.aV7 = new aV8, this.vl = 0;
	var aV9 = new Array(32);

	function aVC() {
		for (var fl = aV9.length, aC = 0; aC < fl; aC++) aV9[aC] = null
	}
	this.dv = function() {
		for (var aVA, aVB = document.body.firstChild; aVB;) aVA = aVB.nextSibling, !document.body.contains(aVB) || "DIV" !== aVB.tagName && "INPUT" !== aVB.tagName && "BUTTON" !== aVB.tagName || u.removeChild(document.body, aVB), aVB = aVA
	}, this.v = function(eU, a5G, a7v) {
		void 0 === a5G && (a5G = this.vl), bi.e2 = !0, 0 === eU && (0 === ab.a5B() ? eU = 5 : a1.a2.setState(13)), this.ub(), this.vl === eU && (a5G = aV9[eU].a5G, aV9[eU] = null), this.vl = eU;
		var lz = aV9[eU];
		if (!lz || 4 === eU || 7 === eU || 8 === eU || 9 === eU || 10 === eU || 11 === eU || 13 === eU || 15 === eU || 18 === eU || 20 <= eU && eU <= 28 || 32 === eU || 33 === eU) {
			if (0 === eU) return void aVC();
			1 === eU ? lz = new aVD : 2 === eU ? lz = new aVE : 3 === eU ? lz = new aVF : 4 === eU || 9 === eU || 10 === eU || 11 === eU || 13 === eU || 33 === eU ? lz = a7v : 5 === eU ? lz = new aVG : 6 === eU ? lz = new aVH : 7 === eU ? lz =
				new aVI(u.z.aVJ) : 8 === eU ? lz = a7v : 12 === eU ? lz = new aVK : 14 === eU ? lz = new aVL : 15 === eU ? lz = new aVI(u.z.aVM) : 16 === eU ? lz = new aVN : 17 === eU ? lz = new aVO : 18 === eU ? lz = new aVP : 19 === eU ? lz =
				new aVQ : 20 === eU ? lz = new aVR : 21 === eU ? lz = new aVS : 22 === eU ? lz = new aVT : 23 === eU ? lz = new aVU : 24 === eU ? lz = new aVV : 25 === eU ? lz = new aVW : 26 === eU ? lz = new aVX : 27 === eU ? lz = new aVY :
				28 === eU ? lz = new aVZ : 29 === eU ? lz = new aVa : 30 === eU ? lz = new aVb : 31 === eU ? lz = new aVc : 32 === eU && (lz = new aVd), lz.a5G = a5G, aV9[eU] = lz
		}
		lz.show(a7v)
	}, this.a5A = function() {
		this.iV() && this.aVe(this.a5F().a5G)
	}, this.aVe = function(eU) {
		this.iV() && (aV9[eU] ? (this.ub(), bi.e2 = !0, this.vl = eU, aV9[eU].show()) : this.v(eU))
	}, this.ub = function() {
		this.iV() && aV9[this.vl].ub()
	}, this.y = function() {
		this.iV() && (aV9[this.vl].ub(), aVC(), this.vl = 0, a1.a2.setState(13))
	}, this.z8 = function() {
		var lz;
		this.iV() && (lz = aV9[this.vl]).z8 && lz.z8()
	}, this.resize = function() {
		if (!this.iV()) return !1;
		aV9[this.vl].resize()
	}, this.hz = function(fs, fu) {
		var lz;
		this.iV() && (lz = aV9[this.vl]).hz && lz.hz(fs, fu)
	}, this.a5Y = function(fs, fu) {
		var lz;
		this.iV() && (lz = aV9[this.vl]).a5Y && lz.a5Y(fs, fu)
	}, this.a5w = function() {
		var lz;
		this.iV() && (lz = aV9[this.vl]).a5w && lz.a5w()
	}, this.a5b = function(mJ, mK, deltaY) {
		var lz;
		this.iV() && (lz = aV9[this.vl]).a5b && lz.a5b(mJ, mK, deltaY)
	}, this.a66 = function(code) {
		var lz;
		return !!this.iV() && ((lz = aV9[this.vl]).a66 && lz.a66(code), !0)
	}, this.eq = function() {
		var lz;
		this.iV() && (lz = aV9[this.vl]) && lz.eq && lz.eq()
	}, this.iV = function() {
		return 0 < this.vl
	}, this.a5F = function() {
		return aV9[this.vl]
	}, this.a9F = function(eU) {
		return aV9[eU]
	}, this.aVf = function() {
		return aV9
	}, this.removeChild = function(ow, a7O) {
		try {
			ow.removeChild(a7O)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aVI(data) {
	var aVg, aVh;

	function aW5(aL2, aW6) {
		if (aL2.tu === bE.rg) return clearTimeout(aL2.aW7), 1;
		aL2.tx(bE.rg), clearTimeout(aL2.aW7), aL2.aW7 = setTimeout(aW6, 1e3)
	}

	function aVk(tX, xG) {
		if (!data.aVi) {
			if (data.aWa) {
				if (xG) return
			} else {
				if (!xG) return;
				if (data.a0N < 1e4) return
			}
			var aWh, xR = new tH,
				aWf = xG && 1e5 <= data.a0N,
				aWg = xR.tK(xG ? (aWf ? "⚠️ " : "") + L(317) : L(318)),
				aWj = (aWf && (aWg.style.color = "yellow"), xG ? xR.tL(L(319, [bD.pa.a8F(data.a0N, .01, 0)])) : ((aWh = new uP({
					value: data.aWi,
					eU: -1
				})).e.readOnly = !0, aWh.e.type = "password", xR.tU(aWh), xR.tU(new un([new x(L(248), function(e) {
					return e.textContent === L(248) ? (e.textContent = L(249), aWh.e.type = "text") : (e.textContent = L(248), aWh.e.type = "password"), !0
				}).button, new x(L(245), function(e) {
					return bD.tc.a7M(aWh.e), bD.tc.yn(e), !0
				}).button]))), xR.tP(L(xG ? 318 : 320)).style.marginTop = "0.75em", new uP({
					value: "",
					eU: -1
				}, 0, 0)),
				aWl = (aWj.e.type = "email", aWj.e.autocomplete = "email", aWj.e.name = "email", aWj.e.inputMode = "email", aWj.e.spellcheck = !1, xR.tU(aWj), xR.tU(new un([new x(L(321), function(e) {
					return b1.aWF.aWk({
						action: 3,
						pW: aWj.e.value.trim().substring(0, 63)
					}), bD.tc.yn(e), !0
				}).button])), xG && xR.tL(L(322)), xR.tP(L(323)).style.marginTop = "0.75em", new uP({
					value: "",
					eU: -1
				}, 1));
			xR.tU(aWl), xR.tU(new un([new x(L(324), function() {
				b1.aWF.aWG({
					action: 4,
					pe: "",
					value: Math.floor(+aWl.e.value)
				}), u.v(8, u.a5F().a5G, new vm(18))
			}).button])), tX.push(xR)
		}
	}
	this.show = function() {
		data.aVi && bL.aX3("account", data.pe), aVg.show(), this.resize()
	}, this.ub = function() {
		aVg.ub()
	}, this.resize = function() {
		aVg.resize(), aVh.resize()
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	}, aVg = new yu(data.username, [new x("⬅️ " + L(49), function() {
		bL.clear(), u.a5A()
	}), new x(data.aVi ? "🔄 " + L(211) : L(212), function() {
		u.v(8, data.aVi ? u.a5F().a5G : void 0, new vm(25, {
			action: 0,
			pe: data.pe,
			vk: data.vk
		}))
	}, 0, 0, 1)]), aVh = new tV(aVg.yz, function() {
		var tX = [];
		aVk(tX, 1), tX.push(function() {
				var xR = new tH;
				xR.tK(L(294)), data.aWa && (xR.tP("✅ " + L(295)).style.marginBottom = "0.75em");
				var a4m = data.aWb;
				a4m < 1 ? (xR.tP(L(296)), 0 === data.aWc ? xR.tL(L(297)) : 1 === data.aWc ? xR.tL(L(298)) : 2 === data.aWc ? xR.tL(L(299)) : 3 === data.aWc ? xR.tL(L(300)) : 4 === data.aWc ? xR.tL(L(301)) : 5 === data.aWc ? xR.tL(L(
					302)) : 6 === data.aWc ? xR.tL(L(303)) : xR.tL(L(304))) : (xR.tP(L(305)), a4m = a4m < 2 ? L(306) : a4m < 61 ? 2 === a4m ? L(307) : L(308, [a4m - 1]) : a4m < 84 ? 61 === a4m ? L(309) : L(310, [a4m - 60]) : a4m <
					255 ? 84 === a4m ? L(311) : L(312, [a4m - 83]) : L(313), xR.tL(a4m));
				{
					var tM, aWC;
					xR.tU(new vD), data.aVi && (tM = xR.tL(), xR.tU(new un([new x(bm.zX.y3(data.pe) ? L(164) : L(165), function(e) {
						return bm.zX.zk(data.pe) ? (e.textContent = L(164), aWC(1)) : (e.textContent = L(165), aWC(0)), !0
					}).button])), aWC = function(gD) {
						tM.textContent = gD ? L(314) : ""
					}, bm.zX.y3(data.pe) && aWC(1), xR.tU(new vD))
				}
				var qE, uO = new uP({
					value: data.username,
					eU: -1
				});
				uO.e.readOnly = !0, xR.tU(uO), xR.tU(new un([new x(L(245), function(e) {
					return bD.tc.a7M(uO.e), bD.tc.yn(e), !0
				}).button])), data.aVi || xR.tL(L(315));
				(data.aWd || data.aWe) && (xR.tU(new vD), xR.tL(L(316)), data.aWd && ((qE = xR.tL("• Muted")).style.color = "orange", qE.style.marginTop = "0.5em"), data.aWe) && ((qE = xR.tL("• Redacted")).style.color = "orange", qE.style
					.marginTop = "0.5em");
				data.aVi && (xR.tU(new vD), xR.tP(b1.z.aW8("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", function(xR) {
					function click(e, aL4) {
						return bs.aL5(data.pe, aL4) && (bD.tc.yn(e), p7[0].tx(1), p7[1].tx(1)), !0
					}
					var color = bs.aL3(data.pe) ? 1 : 0,
						p7 = [];
					p7.push(new x(L(281), function(e) {
						return click(e, 1)
					}, color || bE.qq)), p7.push(new x(L(282), function(e) {
						return click(e, 0)
					}, color || bE.r5)), xR.tU(new un([p7[0].button])), xR.tU(new un([p7[1].button]))
				}(xR));
				return xR
			}()),
			function(tX) {
				var xR, uO, k, aWD, aL2, aWE;
				data.aVi && data.aWK && ((xR = new tH).tK(L(240)), xR.tL(L(234)), (uO = new uP({
					value: data.aWK,
					eU: -1
				})).e.readOnly = !0, xR.tU(uO), k = !1, aWD = new x(L(241), function(e) {
					return k && b1.z.er(0) && (bD.tc.yn(e), aWE(), b1.aWF.aWL({
						action: 9,
						pe: data.pe
					})), !0
				}, 1), aL2 = new x(L(232), function(e) {
					if (e.textContent === L(232)) {
						if (100 * data.aWK < data.a0N) return new aTT(L(242)), !0;
						k = !0, e.textContent = L(170), aWD.tx(0), aWD.button.style.color = bE.rU
					} else aWE();
					return !0
				}), xR.tU(new un([aL2.button])), aWE = function() {
					k = !1, aL2.button.textContent = L(232), aWD.tx(1), aWD.button.style.color = bE.qO
				}, xR.tU(new un([aWD.button])), xR.tL(L(243)), tX.push(xR))
			}(tX),
			function(tX) {
				var xR, tM, aH3, aWn, aWD, aL2, aWE;
				data.aVi || ((xR = new tH).tK(L(325)), (tM = xR.tL(data.aWm.length + " / 160")).style.textAlign = "center", aH3 = !0, (aWn = new zH(0, 1, function(e) {
					e = e.target.value.length;
					tM.textContent = e + " / 160", 160 < e ? aH3 && (aH3 = !1, aL2.tx(1)) : aH3 || (aH3 = !0, aL2.tx(0))
				})).e.rows = 6, aWn.e.style.fontSize = "1em", aWn.zO(data.aWm), xR.tU(aWn), 0 !== data.aWo ? (aL2 = new x(L(326), function() {
					if (!aH3) return !0;
					u.v(8, u.a5F().a5G, new vm(29, {
						action: 1,
						pW: aWn.zP().substring(0, 160)
					}))
				}, 0, 0, 1), xR.tU(new un([aL2.button])), xR.tU(new un([new x(1 === data.aWo ? L(327) : L(328), function() {
					u.v(8, u.a5F().a5G, new vm(29, {
						action: 0,
						pW: ""
					}))
				}, 0, 0, 1).button])), xR.tL(1 === data.aWo ? L(329, [data.aWp - 1]) : L(330, [data.aWp - 1])), xR.tL(L(331, [data.aWq]))) : (aWD = new x(L(241), function() {
					if (!aWn.e.readOnly) return !0;
					u.v(8, u.a5F().a5G, new vm(29, {
						action: 1,
						pW: aWn.zP().substring(0, 160)
					}))
				}, 1), aL2 = new x(L(232), function(e) {
					if (e.textContent === L(232)) {
						if (!aH3) return !0;
						e.textContent = L(170), aWn.e.readOnly = !0, aWD.tx(0), aWD.button.style.color = bE.rU
					} else aWE();
					return !0
				}), xR.tU(new un([aL2.button])), xR.tL(L(331, [data.aWq])), aWE = function() {
					aL2.button.textContent = L(232), aWn.e.readOnly = !1, aWD.tx(1), aWD.button.style.color = bE.qO
				}, xR.tU(new un([aWD.button]))), tX.push(xR))
			}(tX),
			function(tX) {
				var xR;
				data.aVi && 0 !== data.aWo && ((xR = new tH).tK(L(332)), xR.tN(data.aWm), xR.tU(new un([new x(L(333, 0, "Report"), function(e) {
					return b1.z.er(0) && (bD.tc.yn(e), b1.aWF.aWL({
						action: 5,
						pe: data.pe
					})), !0
				}, 0, 0, 1).button])), tX.push(xR))
			}(tX), tX.push(function() {
				var xR = new tH,
					aW9 = (xR.tK(L(213)), xR.tP(b1.z.aW8("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(214), L(215), L(216), L(217), L(218), L(219), L(220), L(221), L(222), L(223), L(224), L(225), L(226), L(227)]),
					eT = data.aWA;
				return xR.tP(L(228) + bD.pa.a8F(data.a0N, .01, 2) + "<br>" + L(229) + (eT + 1) + " / " + data.a0M + "<br>" + L(230) + aW9[function(eT, a0N) {
					if (eT < 10) return 0;
					if (eT < 30) return 1;
					if (eT < 60) return 2;
					if (3e4 <= (a0N = bO.gC(a0N, 100))) return 3;
					if (12e3 <= a0N) return 4;
					if (7e3 <= a0N) return 5;
					if (3e3 <= a0N) return 6;
					if (1e3 <= a0N) return 7;
					if (500 <= a0N) return 8;
					if (200 <= a0N) return 9;
					if (70 <= a0N) return 10;
					if (20 <= a0N) return 11;
					if (3 <= a0N) return 12;
					return 13
				}(eT, data.a0N)]), xR
			}()), data.aVi && tX.push(function() {
				var xR = new tH,
					uO = (xR.tK(L(231)), xR.tP(b1.z.aW8("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new uP({
						value: bm.buffer.data[147].value,
						eU: -1
					}, 1, void 0, function(e) {
						bm.rv.q1(147, aWC(e.target.value))
					})),
					aWD = (xR.tU(uO), new x(L(21), function(e) {
						var gD;
						return uO.e.readOnly && b1.z.er(0) && (gD = parseInt(bm.buffer.data[147].value, 10), u.aV7.send(gD, data.pe, function() {
							bD.tc.yn(e), aWE(), b1.aWF.aWG({
								action: 0,
								pe: data.pe,
								value: gD
							})
						})), !0
					}, 1)),
					aL2 = new x(L(232), function(e) {
						return e.textContent === L(232) ? (e.textContent = L(170), uO.e.readOnly = !0, aWD.tx(0), aWD.button.style.color = bE.rU, bm.rv.q1(147, uO.e.value), aWC(bm.buffer.data[147].value)) : aWE(), !0
					}),
					tM = (xR.tU(new un([aL2.button])), xR.tL()),
					aWC = function(gD) {
						return tM.innerHTML = u.z.aWH(gD, bm.buffer.data[105].value, data.pe), gD
					},
					aWE = function() {
						aL2.button.textContent = L(232), uO.e.readOnly = !1, aWD.tx(1), aWD.button.style.color = bE.qO
					};
				return aWC(bm.buffer.data[147].value), xR.tU(new un([aWD.button])), xR
			}());
		tX.push(function() {
			var xR = new tH,
				uO = (xR.tK(L(244)), new uP({
					value: data.pe,
					eU: -1
				})),
				aWI = (uO.e.readOnly = !0, xR.tU(uO), xR.tU(new un([new x(L(245), function(e) {
					return bD.tc.a7M(uO.e), bD.tc.yn(e), !0
				}).button])), xR.tU(new vD), new uP({
					value: data.pe,
					eU: -1
				}));
			return xR.tU(aWI), xR.tU(new un([new x(L(246), function(e) {
				u.v(8, u.a5F().a5G, new vm(25, {
					action: 0,
					pe: aWI.e.value,
					vk: 0
				}))
			}).button])), xR
		}()), data.aVi || (tX.push(function() {
			var xR = new tH,
				aWM = (xR.tK(L(247)), new uP(bm.buffer.data[106])),
				customPasswordInput = (aWM.e.readOnly = !0, aWM.e.type = "password", xR.tU(aWM), xR.tU(new un([new x(L(248), function(e) {
					return e.textContent === L(248) ? (e.textContent = L(249), aWM.e.type = "text") : (e.textContent = L(248), aWM.e.type = "password"), !0
				}).button, new x(L(245), function(e) {
					return bD.tc.a7M(aWM.e), bD.tc.yn(e), !0
				}).button])), new uP({
					value: "",
					eU: -1
				}));
			return customPasswordInput.e.placeholder = "Custom new password (optional)", xR.tU(customPasswordInput), xR.tU(new un([new x(L(250), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.e.value) && u.v(8, u.a5F().a5G, new vm(15))
			}).button])), xR.tK(L(251), "0.8em"), xR.tL(L(252)), xR.tL(L(253)), xR.tL(L(254)), xR
		}()), tX.push(function() {
			var xR = new tH;
			return xR.tK(L(255)), xR.tU(new un([new x(L(256), function() {
				u.v(6, u.a5F().a5G)
			}).button])), xR.tU(new un([new x(L(257), function() {
				bm.rv.q1(105, ""), u.v(8, u.a5F().a5G, new vm(18))
			}).button])), xR.tU(new un([new x(L(258) + bm.buffer.data[105].value, function() {
				u.v(4, 0, new w(L(259), L(260), !0, [new x("⬅️ " + L(49), function() {
					u.v(7, u.a9F(7).a5G)
				})]))
			}, bE.r5).button])), xR
		}()), tX.push(function() {
			function aWO(eU) {
				aWN[0].tx(0 === eU ? bE.qa : bE.ql), aWN[1].tx(0 === eU ? bE.qa : bE.r5), aWN[2].tx(eU === tS.tT.length - 1 || eU < 5 ? bE.qa : bE.r5)
			}
			var tS, aWN, xR = new tH;
			xR.tK(L(265)), xR.tL(L(266)), bm.z.a05();
			return aWN = [new x(L(267), function() {
				var eU = Math.min(bm.buffer.data[117].value, tS.tT.length - 1);
				eU < 1 || (eU = bm.z.a0A(eU)) && (bm.rv.q1(105, eU.pe), bm.rv.q1(106, eU.password), u.v(8, u.a5F().a5G, new vm(18)))
			}, bE.qa, 1), new x(L(263), function() {
				var eU = Math.min(bm.buffer.data[117].value, tS.tT.length - 1);
				if (!(eU < 1)) {
					tS.tT[eU].remove(), tS.tT.splice(eU, 1);
					for (var aC = eU; aC < tS.tT.length; aC++) tS.tT[aC].name = "" + aC;
					bm.z.a08(eU), eU = bm.buffer.data[117].value, tS.tT[eU].textContent = tS.tT[eU].textContent.replace("⚪", "🟢"), aWO(eU)
				}
			}, bE.qa, 1), new x(L(264), function() {
				var eU = Math.min(bm.buffer.data[117].value, tS.tT.length - 1);
				if (eU !== tS.tT.length - 1)
					if (aW5(aWN[2], function() {
							var fl = tS.tT.length;
							aWO(Math.min(bm.buffer.data[117].value, fl - 1))
						})) {
						for (var aC = tS.tT.length - 1; eU < aC; aC--) tS.tT[aC].remove(), tS.tT.splice(aC, 1), bm.z.a08(aC);
						aWO(eU)
					}
			}, bE.qa, 1)], tS = new yq(bm.buffer.data[117], aWO), __fx.savedAccounts.decorate(tS.tT, bm.buffer.data[117].vU), aWO(0), tS.tT[0].style.marginTop = "0.5em", xR.tR(tS), xR.tU(new un([aWN[0].button])), xR.tU(new un(
				[new x("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(bm.buffer.data[117].value)
				}).button])), xR.tU(new un([aWN[1].button])), xR.tU(new un([aWN[2].button])), xR
		}()));
		return tX.push(function() {
				var xR = new tH,
					pW = (xR.tK(L(277)), L(278, [(data.aWQ / 1e3).toFixed(3)]) + "<br>" + L(279, [data.aWR]));
				data.aWS && (pW += "<br>" + L(280, [(data.aWT / 1e3).toFixed(3)]));
				return xR.tP(pW), xR
			}()), tX.push(function() {
				var xR = new tH,
					aW9 = (xR.tK(L(271)), [L(272), L(273), L(274), L(275)]),
					eT = data.aWP;
				return xR.tP(L(276) + (data.a4V / 100).toFixed(2) + "<br>" + L(229) + (eT + 1) + " / " + data.a0M + "<br>" + L(230) + aW9[eT < 10 ? 0 : eT < 50 ? 1 : eT < 200 ? 2 : 3]), xR
			}()), tX.push(function() {
				var xR = new tH;
				return xR.tK(L(268)), xR.tP(L(269) + bD.pa.a8F(data.a0J, .1, 1) + "<br>" + L(229) + (data.a0K + 1) + " / " + data.a0M + "<br>" + L(270) + data.a0L), xR
			}()),
			function(tX) {
				var xR = new tH,
					aWr = data.a0Q,
					aWs = (xR.tK(L(334)), xR.tP(L(335, [data.a0O.length ? "[" + data.a0O + "]" : "-"])), xR.tP(L(336, [bD.pa.a8F(aWr, .01, 2)])), xR.tP(L(337, [data.a0S + 1 + " / " + data.a0M])), data.a0T),
					aWt = (xR.tP(L(338, [bD.pa.a8F(aWs, .1, 1)])), data.a0V);
				xR.tP(L(339, [aWt])), xR.tP(L(340, [bD.pa.a8F(aWs / Math.max(aWt, 1), .1, 2)])), aWr = data.a0R, xR.tK(L(341), "0.8em"), xR.tP(L(335, [data.a0P.length ? "[" + data.a0P + "]" : "-"])), xR.tP(L(336, [bD.pa.a8F(aWr, .01, 2)])),
					aWs = data.a0U, xR.tP(L(338, [bD.pa.a8F(aWs, .1, 1)])), aWt = data.a0W, xR.tP(L(339, [aWt])), xR.tP(L(340, [bD.pa.a8F(aWs / Math.max(aWt, 1), .1, 2)])), xR.tP(b1.z.aW8("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					tX.push(xR)
			}(tX),
			function(tX) {
				var xR = new tH;
				xR.tK(L(342)), xR.tP(L(276) + (data.aWu / 10).toFixed(1) + "<br>" + L(230) + (data.aWv.length ? L(343, [data.aWv]) : L(344))), data.aVi && xR.tU(new un([new x(L(292), function(e) {
					return b1.z.er(0) && (bD.tc.yn(e), b1.aWF.aWL({
						action: 4,
						pe: data.pe
					})), !0
				}, 0, 0, 1).button]));
				xR.tP(b1.z.aW8("/wiki/clans"), "0.75em").style.marginTop = "0.8em", tX.push(xR)
			}(tX), tX.push(function() {
				var xR = new tH;
				{
					var uO, aL2, aWZ, tM, aWC, aWE;
					xR.tK(L(290)), xR.tP(L(291) + data.aWX + "<br>" + L(229) + (data.aWY + 1) + " / " + data.a0M + "<br>" + L(230) + br.eW(data.aWY)), data.aVi && ((uO = new uP({
						value: bm.buffer.data[157].value,
						eU: -1
					}, 1, void 0, function(e) {
						bm.rv.q1(157, aWC(e.target.value))
					})).e.style.marginTop = "0.6em", xR.tU(uO), aL2 = new x(L(232), function(e) {
						return e.textContent === L(232) ? (e.textContent = L(170), uO.e.readOnly = !0, aWZ[0].tx(0), aWZ[0].button.style.color = bE.rU, aWC(bm.buffer.data[157].value)) : aWE(), !0
					}), xR.tU(new un([aL2.button])), aWZ = [new x(L(292), function(e) {
						return uO.e.readOnly && b1.z.er(0) && (bD.tc.yn(e), aWE(), b1.aWF.aWG({
							action: 1,
							pe: data.pe,
							value: bO.iu(parseInt(bm.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], tM = xR.tL(), aWC = function(gD) {
						return gD = bD.h7.a7s(gD, 2, 3e4), tM.textContent = L(293, [gD - 1, gD, bm.buffer.data[105].value]), gD
					}, xR.tU(new un([aWZ[0].button])), aWE = function() {
						aL2.button.textContent = L(232), uO.e.readOnly = !1, aWZ[0].tx(1), aWZ[0].button.style.color = bE.qO
					}, aWC(bm.buffer.data[157].value))
				}
				return xR
			}()),
			function(tX) {
				var xR, a7L;
				data.aVi && !data.aWw || (0 === a1.id || data.aVi || data.aWw) && ((xR = new tH).tK("Patreon"), !data.aVi && data.aWx ? xR.tU(new un([new x(L(248), function() {
					b1.aWF.aWL({
						action: 7,
						pe: data.pe
					}), data.aWx = 0, u.v(7)
				}).button])) : data.aWw ? (xR.tP(L(345, [(data.aWy / 100).toFixed(2)]) + "<br>" + L(346, [1 + data.aWz + " / " + data.aX0]) + "<br>" + L(347, [data.aX1 ? L(348) : L(349)])), data.aVi || xR.tU(new un([new x(L(350),
					function() {
						b1.aWF.aWL({
							action: 8,
							pe: data.pe
						}), data.aWw = 0, bm.rv.q1(160, 0), u.v(7)
					}).button]))) : (xR.tP(L(351), "0.75em").style.marginBottom = "0.3em", xR.tP("  • " + L(352), "0.75em").style.whiteSpace = "pre", xR.tP("  • " + L(353), "0.75em").style.whiteSpace = "pre", xR.tP("  • " + L(354),
						"0.75em").style.whiteSpace = "pre", xR.tP(L(355), "0.75em").style.marginTop = "1.0em", xR.tP(L(356), "0.75em").style.marginTop = "1.0em", xR.tP("<a href='" + bN.aX2 +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a7L = "https://www.patreon.com/oauth2/authorize?state=" + data.pe +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a4R() + "/", xR.tP(L(357), "0.75em").style.marginTop = "1.0em", xR.tP("<a href='" +
						a7L + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aVi || (xR.tU(new vD), xR.tU(new un([new x(L(249), function() {
						b1.aWF.aWL({
							action: 6,
							pe: data.pe
						}), data.aWx = 1, u.v(7)
					}).button])), xR.tP(L(358), "0.75em").style.marginTop = "0.75em")), tX.push(xR))
			}(tX), tX.push(function() {
				var xR = new tH,
					aW9 = (xR.tK(L(283)), [L(284), L(285), L(286), L(287), "Scout", L(288)]),
					eT = data.aWV;
				return xR.tP(L(289) + (data.aWW / 100).toFixed(2) + "<br>" + L(229) + (eT + 1) + " / " + data.a0M + "<br>" + L(230) + aW9[eT < 3 ? 0 : eT < 20 ? 1 : eT < 100 ? 2 : eT < 500 ? 3 : eT < 2e3 ? 4 : 5]), xR.tP(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", xR
			}()),
			function(tX) {
				var xR, uO, aWI, aWD, aL2, aWE;
				data.aVi || ((xR = new tH).tK(L(233)), xR.tL(L(234)), uO = new uP({
					value: bm.buffer.data[184].value,
					eU: -1
				}, 1, void 0, function(e) {
					bm.rv.q1(184, e.target.value)
				}), xR.tU(uO), xR.tL(L(235)), aWI = new uP({
					value: bm.buffer.data[185].value,
					eU: -1
				}, 0, void 0, function(e) {
					bm.rv.q1(185, e.target.value)
				}), xR.tU(aWI), aWD = new x(L(236), function(e) {
					var send;
					return uO.e.readOnly && b1.z.er(0) && (send = function() {
						bD.tc.yn(e), aWE(), b1.aWF.aWG({
							action: 5,
							pe: bm.buffer.data[185].value,
							value: bO.iu(parseInt(bm.buffer.data[184].value, 10), 1, 1e9)
						})
					}, u.v(4, u.vl, new w(L(238), L(239), !1, [new x("⬅️ " + L(49), function() {
						u.a5A()
					}), new x("✅ OK", function() {
						u.a5A(), send()
					})]))), !0
				}, 1), aL2 = new x(L(232), function(e) {
					if (e.textContent === L(232)) {
						var g5 = bJ.fC;
						if (g5.fD(aWI.e.value, 5) === g5.fD(data.pe, 5)) return new aTT(L(237)), !0;
						e.textContent = L(170), uO.e.readOnly = !0, aWI.e.readOnly = !0, aWD.tx(0), aWD.button.style.color = bE.rU, bm.rv.q1(184, uO.e.value)
					} else aWE();
					return !0
				}), xR.tU(new un([aL2.button])), aWE = function() {
					aL2.button.textContent = L(232), uO.e.readOnly = !1, aWI.e.readOnly = !1, aWD.tx(1), aWD.button.style.color = bE.qO
				}, xR.tU(new un([aWD.button])), tX.push(xR))
			}(tX),
			function(tX) {
				var xR, tS, aWN, eU, aWO;
				data.aVi || bm.zX.get().length && ((xR = new tH).tK(L(261)), eU = 0, aWO = function() {
					var aGb = bm.zX.get().length;
					aWN[0].tx(eU === aGb ? bE.qa : bE.ql), aWN[1].tx(eU === aGb ? bE.qa : bE.r5), aWN[2].tx(eU === aGb || aGb - 1 <= eU || eU < 5 ? bE.qa : bE.r5)
				}, aWN = [new x(L(262), function() {
					u.v(8, void 0, new vm(25, {
						action: 0,
						pe: bm.zX.get()[eU],
						vk: 0
					}))
				}, bE.qa, 1), new x(L(263), function() {
					bm.zX.zm(eU), tS.tT[eU].remove(), tS.tT.splice(eU, 1);
					for (var aC = eU; aC < tS.tT.length; aC++) tS.tT[aC].name = "" + aC;
					bm.zX.get().length && (eU = Math.max(eU - 1, 0), tS.tT[eU].textContent = tS.tT[eU].textContent.replace("⚪", "🟢")), aWO()
				}, bE.qa, 1), new x(L(264), function() {
					if (aW5(aWN[2], aWO)) {
						for (var ib = tS.tT.length - 1; eU < ib; ib--) bm.zX.zm(ib), tS.tT[ib].remove(), tS.tT.splice(ib, 1);
						aWO()
					}
				}, bE.qa, 1)], aWO(), tS = new yq(bm.zX.zj(), function(aC) {
					eU = aC, aWO()
				}), __fx.followedAccounts.decorate(tS.tT, bm.zX.get()), tS.tT[0].style.marginTop = "0.5em", xR.tR(tS), xR.tU(new un([aWN[0].button])), xR.tU(new un([new x("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(eU)
				}).button])), xR.tU(new un([aWN[1].button])), xR.tU(new un([aWN[2].button])), tX.push(xR))
			}(tX), aVk(tX, 0), tX
	}())
}

function aVT() {
	var aX4, aX5, aX6, tX;

	function aX7() {
		aX9(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aVf()[19] = null, u.a5A()
	}

	function aX9() {
		2 === aE.data.aIncomeType ? (bD.tj.a6i(aX6.zP(), aE.data.aIncomeData, 255), bD.tj.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aX4.show(), this.resize()
	}, this.ub = function() {
		aX4.ub()
	}, this.resize = function() {
		aX4.resize(), aX5.resize()
	}, this.a66 = function(ev) {
		2 === ev && aX4.z0[0].tt()
	}, aX4 = new yu(L(359), [new x("⬅️ " + L(49), aX7)]), aX5 = new tV(aX4.yz, (function(tX) {
		var xR = new tH;
		xR.tK(L(360)), xR.tR(new yq({
			vU: [L(361), L(362), L(363)],
			value: aE.data.aIncomeType
		}, function(eU) {
			aX9(), 2 !== eU || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fi)), aE.data.aIncomeType = eU, u.v(22)
		})), tX.push(xR)
	}(tX = []), function(tX) {
		var xR;
		1 === aE.data.aIncomeType && ((xR = new tH).tK("Value"), xR.tU(new uP({
			eU: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.iu(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), tX.push(xR))
	}(tX), function(tX) {
		var xR;
		2 === aE.data.aIncomeType && ((xR = new tH).tK("Data"), (aX6 = new zH(0, 1, 0, 1)).zO(bD.pa.a8L(aE.data.aIncomeData, 4)), xR.tU(aX6), tX.push(xR))
	}(tX), tX))
}

function aVW() {
	var aX4, aX5, aX6;

	function aX7() {
		aX9(), 3 !== aE.data.botDifficultyType || bD.tj.a6W(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aVf()[19] = null, u.a5A()
	}

	function aX9() {
		3 === aE.data.botDifficultyType && bD.tj.a6i(aX6.zP(), aE.data.botDifficultyData, aF.lF.length - 1)
	}

	function aXE(tX, eU) {
		var xR = new tH,
			value = (xR.tK(eU < 0 ? L(76) : L(75) + " " + bj.a4M[eU % 9]), 0 <= eU && (xR.tP(L(366) + ": " + aE.data.teamPlayerCount[eU]).style.marginBottom = "1em"), eU < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eU]);
		xR.tR(new yq({
			vU: aF.lF,
			value: value
		}, function(ib) {
			eU < 0 ? aE.data.botDifficultyValue = ib : aE.data.botDifficultyTeam[eU] = ib
		})), tX.push(xR)
	}
	this.show = function() {
		aX4.show(), this.resize()
	}, this.ub = function() {
		aX4.ub()
	}, this.resize = function() {
		aX4.resize(), aX5.resize()
	}, this.a66 = function(ev) {
		2 === ev && aX4.z0[0].tt()
	}, aX4 = new yu(L(76), [new x("⬅️ " + L(49), aX7)]), aX5 = new tV(aX4.yz, function() {
		var tX = [];
		if (function(tX) {
				var xR = new tH,
					vU = (xR.tK(L(360)), [L(362), L(364), L(365), L(363)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), vU.splice(2, 1));
				xR.tR(new yq({
					vU: vU,
					value: value
				}, function(eU) {
					aX9(), aE.data.botDifficultyType = eU, 0 === aE.data.gameMode && 2 === eU && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fi)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), tX.push(xR)
			}(tX), 0 === aE.data.botDifficultyType) aXE(tX, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aXE(tX, aC);
		else 3 === aE.data.botDifficultyType && ! function(tX) {
			var xR = new tH;
			xR.tK("Data"), (aX6 = new zH(0, 1, 0, 1)).zO(bD.pa.a8L(aE.data.botDifficultyData, 8)), xR.tU(aX6), tX.push(xR)
		}(tX);
		return tX
	}())
}

function aXF(data) {
	var aVg, aXG, aXH, aXI, aXJ, aXK, aXL, colors, aXM, aXN, aXO = 0,
		aXP = 0,
		aXQ = !1,
		aXR = !1,
		aXS = [1, 5, 60, 240, 1440, 10080, 43200];

	function aXw(mJ, mK) {
		! function(mJ, mK) {
			return aXG < mJ && mJ < aXG + aXI && aXH < mK && mK < aXH + aXJ
		}(aXO = mJ, aXP = mK) ? (aXQ && (bi.e2 = !0), aXQ = !1) : (aXQ = !0, bi.e2 = !0)
	}
	this.show = function() {
		aXR = bm.buffer.data[127].value, aVg.show(), this.resize()
	}, this.ub = function() {
		aVg.ub()
	}, this.resize = function() {
		aVg.resize();
		var ev = i.l,
			z7 = aVg.z4(),
			aXb = ev * z7.z6,
			ev = ev * z7.ue;
		aXK = bD.tc.w8(.06), aXL = bD.tc.w8(.04), aXG = bD.tc.w8(.06), aXH = ev + aXK, aXI = i.j - aXG - aXL, aXJ = aXb + ev - aXH - aXL
	}, this.z8 = function() {
		aVg.z8(),
			function() {
				var aC, aXY, hE, fs, g4, h = data.data,
					aXf = 1,
					aXg = .125,
					aXh = aXR ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aXY = h[aC].aXY, hE = aXY.length, aXf = Math.max(hE, aXf), g4 = 0; g4 < hE; g4++) aXg = Math.max(aXY[g4], aXg), aXh = Math.min(aXY[g4], aXh);
				var o8 = aXH + aXJ,
					a1v = aXJ / (aXg - aXh),
					a1u = 1 / (aXf - 1);
				for (z9.lineWidth = bf.a2z, aC = 0; aC < h.length; aC++) {
					for (aXY = h[aC].aXY, hE = aXY.length, fs = aXG, z9.beginPath(), z9.moveTo(fs + aXI, o8 - a1v * (aXY[hE - 1] - aXh)), g4 = hE - 2; 0 <= g4; g4--) z9.lineTo(fs + a1u * g4 * aXI, o8 - a1v * (aXY[g4] - aXh));
					z9.strokeStyle = colors[aC], z9.stroke()
				}(function(aXh, aXg, o8, a1v) {
					z9.font = bD.tc.vB(0, .25 * aXG), bD.tc.textBaseline(z9, 1), bD.tc.textAlign(z9, 2), z9.fillStyle = colors[0];
					for (var fs = .92 * aXG, aC = 0; aC < 3; aC++) {
						var gD = aXh + aC * (aXg - aXh) / 2;
						z9.fillText((gD / 1e3).toFixed(3), fs, o8 - a1v * (gD - aXh))
					}
				})(aXh, aXg, o8, a1v),
				function(aXf) {
					var fu = aXH + aXJ + .15 * aXL;
					z9.font = bD.tc.vB(0, Math.min(.4 * aXL, .028 * i.j)), bD.tc.textBaseline(z9, 0), bD.tc.textAlign(z9, 2), z9.fillStyle = colors[0], z9.fillText(bD.a6M.a7D(aXM), aXG + aXI, fu), bD.tc.textAlign(z9, 0), z9.fillText(bD.a6M.a7D(
						new Date(aXN.getTime() - 6e4 * (aXf - 1) * aXS[data.aXX])), aXG, fu)
				}(aXf),
				function(aXf, aXh, aXg) {
					if (aXQ && !(aXf < 2)) {
						for (var aDE, eU = (aXO - aXG) / aXI * (aXf - 1), aXk = Math.floor(eU), aXl = Math.floor(1 + eU), aXm = eU - aXk, aXn = 1e5, aXo = -1, aXp = -1, aXq = aXg - (aXg - aXh) * (aXP - aXH) / aXJ, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aHE, aXY = h[aC].aXY;
							aXY.length <= aXl || (aXY = aXY[aXk] + aXm * (aXY[aXl] - aXY[aXk]), (aHE = Math.abs(aXq - aXY)) < aXn && (aXn = aHE, aXo = aC, aXp = aXY))
						} - 1 !== aXo && (aXg = aXH + aXJ - (aXp - aXh) / (aXg - aXh) * aXJ, z9.lineWidth = .5 * bf.a2z, z9.strokeStyle = colors[aXo], z9.beginPath(), z9.moveTo(aXG, aXg), z9.lineTo(aXO, aXg), z9.lineTo(aXO, aXH + aXJ), z9
							.stroke(), z9.beginPath(), z9.arc(aXO, aXg, .1 * aXG, 0, 2 * Math.PI), z9.fillStyle = colors[aXo], z9.fill(), aXh = aXH + aXJ + .15 * aXL, bD.tc.textAlign(z9, 1), aDE = aXf - 2 < eU ? (aDE = aXN.getTime() - 6e4 *
								aXS[data.aXX], new Date(aDE + (eU - (aXf - 2)) * (aXM.getTime() - aDE))) : new Date(aXN.getTime() - 6e4 * (aXf - eU - 1) * aXS[data.aXX]), aXf = bD.a6M.a7D(aDE), eU = bD.tc.measureText(aXf), aDE = bO.iu(aXO,
								aXG + .5 * eU, aXG + aXI - .5 * eU), z9.fillStyle = bD.color.qG(70, 50, 20), z9.fillRect(aDE - .52 * eU, aXH + aXJ, 1.04 * eU, .55 * aXL), z9.fillStyle = colors[0], z9.fillText(aXf, aDE, aXh), z9.font = bD.tc
							.vB(0, .25 * aXG), bD.tc.textBaseline(z9, 1), bD.tc.textAlign(z9, 2), aDE = .92 * aXG, aXf = (aXp / 1e3).toFixed(3), eU = bD.tc.measureText(aXf), aXh = aDE - 1.04 * eU, z9.fillStyle = bD.color.qG(70, 50, 20), z9
							.fillRect(aXh, aXg - .1625 * aXG, aXG - aXh, .275 * aXG), z9.fillStyle = colors[aXo], z9.fillText(aXf, aDE, aXg))
					}
				}(aXf, aXh, aXg)
			}(), z9.lineWidth = bf.a2z, z9.strokeStyle = bE.qO, z9.beginPath(), z9.moveTo(aXG, aXH), z9.lineTo(aXG, aXH + aXJ), z9.lineTo(aXG + aXI, aXH + aXJ), z9.stroke();
		var aC, fontSize = .5 * aXK,
			h = (z9.font = bD.tc.vB(0, fontSize), bD.tc.textBaseline(z9, 1), bD.tc.textAlign(z9, 0), data.data),
			fl = h.length,
			fu = aXH - .5 * aXK,
			pW = "";
		for (aC = 0; aC < fl; aC++) pW += h[aC].name + "  ";
		pW = pW.trim();
		var aXt = bD.tc.measureText(pW),
			fs = .5 * (i.j - aXt);
		for (aXt > i.j && (fs = 0, z9.font = bD.tc.vB(0, i.j / aXt * fontSize)), aC = 0; aC < fl; aC++) z9.fillStyle = colors[aC], z9.fillText(h[aC].name, fs, fu), fs += bD.tc.measureText(h[aC].name + "  ")
	}, this.hz = function(mJ, mK) {
		aXw(mJ, mK)
	}, this.a5Y = function(mJ, mK) {
		aXw(mJ, mK)
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	};
	var aC, em, a7B, ib, fo = data.data,
		fl = fo.length,
		max = 1;
	for (aC = 0; aC < fl; aC++) max = Math.max(max, fo[aC].aXY.length);
	for (aC = 0; aC < fl; aC++)
		for (; fo[aC].aXY.length < max;) fo[aC].aXY.unshift(0);
	em = new Date, a7B = 6e4 * em.getTimezoneOffset(), ib = em.getTime() - a7B, aXM = new Date(ib), 6 === data.aXX ? function(em, a7B) {
		var aXa = em.getUTCFullYear(),
			em = em.getUTCMonth() + 1;
		aXN = em < 12 ? new Date(Date.UTC(aXa, em) - a7B) : new Date(Date.UTC(aXa + 1, 0) - a7B)
	}(em, a7B) : (a7B = 6e4 * aXS[data.aXX], aXN = data.aXX <= 4 ? new Date(ib + a7B - em.getTime() % a7B) : new Date(ib + a7B - (em.getTime() + 2592e5) % a7B)), ib = bD.color, colors = [bE.qO, ib.qG(255, 0, 0), ib.qG(0, 200, 0), ib.qG(80, 80,
		255), ib.qG(255, 255, 0), ib.qG(255, 0, 255), ib.qG(0, 255, 255), ib.qG(255, 140, 0), ib.qG(128, 128, 128), ib.qG(0, 255, 140)], aVg = new yu(L(367) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aXX] + ", " + bD.a6M.a7A(aXM), [
		new x("⬅️ " + L(49), function() {
			u.v(1)
		}), new x(L(368), function() {
			u.v(14)
		})
	], !1)
}

function aVL() {
	var aVg, aVh, tX, aXx = -1;
	this.show = function() {
		aVg.show(), this.resize(), aXx = bm.buffer.data[125].value
	}, this.ub = function() {
		aVg.ub()
	}, this.resize = function() {
		aVg.resize(), aVh.resize()
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	}, aVg = new yu(L(369), [new x("⬅️ " + L(49), function() {
		aXx !== bm.buffer.data[125].value ? u.z.aXy() : u.aVe(13)
	})]), aVh = new tV(aVg.yz, ((tX = []).push(function() {
		var xR = new tH,
			aL2 = (xR.tK(L(370)), xR.tL(L(371)), new x(L(372), function() {
				bm.rv.q1(130, 0), u.z.aXy()
			}, 0, 0, 1)),
			uO = new uP(bm.buffer.data[126], 0, function() {
				aL2.button.click()
			});
		return xR.tU(uO), uO.e.placeholder = "a,b,c", uO.e.style.marginTop = "0.5em", xR.tU(new un([aL2.button])), xR
	}()), tX.push(function() {
		var xR = new tH,
			aL2 = new x(L(372), function() {
				bm.rv.q1(130, 1), u.z.aXy()
			}, 0, 0, 1),
			aY3 = new uP(bm.buffer.data[129], 1, function() {
				aY3.e.focus()
			}),
			aY4 = new uP(bm.buffer.data[128], 1, function() {
				aL2.button.click()
			});
		return xR.tK(L(373)), xR.tU(aY4), aY4.e.style.marginBottom = "0.5em", xR.tK(L(374)), xR.tU(aY3), xR.tU(new un([aL2.button])), xR
	}()), tX.push(function() {
		var xR = new tH;
		return xR.tK(L(375)), bm.buffer.data[125].vU = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], xR.tR(new yq(bm.buffer.data[125])), xR
	}()), tX.push(function() {
		var xR = new tH;
		return xR.tK(L(376)), xR.tU(new uj(bm.buffer.data[127], L(377))), xR
	}()), tX))
}

function aVK() {
	var aVg, aY5, aXI, aY6, aY7, aY8, colors = [0, 0, 0],
		aY9 = -1;

	function aYC(aC) {
		var aYD = aY5.fu + aC * (bf.gap + aY8),
			fxSmooth = (z9.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", __fx.utils.clipRounded(z9, aY6, aYD, aY7, aY8));
		z9.fillRect(aY6, aYD, colors[aC] * aY7, aY8), fxSmooth && z9.restore(), z9.strokeStyle = bE.qO, fxSmooth ? __fx.utils.strokeRounded(z9, aY6, aYD, aY7, aY8, z9.lineWidth) : z9.strokeRect(aY6, aYD, aY7, aY8), z9.fillStyle = bE.qO, z9.font = bD
			.tc.vB(0, .32 * aY8), bD.tc.textBaseline(z9, 1), bD.tc.textAlign(z9, 0), z9.fillText(L(0 === aC ? 380 : 1 === aC ? 381 : 382) + aYA(aC), aY6 + bf.gap, aYD + .53 * aY8)
	}

	function aYA(aC, aYE) {
		return aYE = aYE || 256, bO.iu(Math.floor(aYE * colors[aC]), 0, aYE - 1)
	}

	function a62(mJ, mK) {
		return !(mJ < aY6 || mK < aY5.fu || mJ > aY5.fs + aY5.j || mK > aY5.fu + aY5.k)
	}
	this.show = function() {
		var gD = bm.buffer.data[121].value;
		colors[0] = (gD >> 12) / 63, colors[1] = (gD >> 6 & 63) / 63, colors[2] = (63 & gD) / 63, aVg.show(), this.resize()
	}, this.ub = function() {
		bm.rv.q1(121, (aYA(0, 64) << 12) + (aYA(1, 64) << 6) + aYA(2, 64)), aVg.ub()
	}, this.resize = function() {
		aVg.resize(), aY5.resize();
		var ev = i.l,
			z7 = aVg.z4(),
			aYB = (aY5.fu = Math.max(aY5.fu, ev * z7.ue + bf.gap), ev * z7.z6 - 2 * bf.gap);
		aY5.k = Math.min(aY5.k, aYB), aY5.j = 2 * aY5.k, aY5.fu = ev * z7.ue + .5 * (ev * z7.z6 - aY5.k), aY5.fs = .5 * (i.j - aY5.j), aXI = .25 * aY5.j, aY6 = aY5.fs + aXI + bf.gap, aY7 = aY5.j - aXI - bf.gap, aY8 = (aY5.k - 2 * bf.gap) / 3
	}, this.z8 = function() {
		aVg.z8(), z9.lineWidth = bf.a2z;
		var eT = aYA(0),
			w7 = aYA(1),
			g5 = aYA(2),
			fxSmooth = (z9.fillStyle = "rgb(" + eT + "," + w7 + "," + g5 + ")", __fx.utils.clipRounded(z9, aY5.fs, aY5.fu, aXI, aY5.k));
		z9.fillRect(aY5.fs, aY5.fu, aXI, aY5.k), fxSmooth && z9.restore(), z9.strokeStyle = bE.qO, fxSmooth ? __fx.utils.strokeRounded(z9, aY5.fs, aY5.fu, aXI, aY5.k, z9.lineWidth) : z9.strokeRect(aY5.fs, aY5.fu, aXI, aY5.k), z9.fillStyle = eT +
			w7 + g5 < 306 && w7 < 150 ? bE.qO : bE.qF, bD.tc.textBaseline(z9, 1), bD.tc.textAlign(z9, 1), z9.font = bD.tc.vB(0, .1 * aY5.k), z9.rotate(-Math.PI / 2), z9.fillText(L(379), -aY5.fu - .5 * aY5.k, aY5.fs + .5 * aXI), z9.setTransform(1,
				0, 0, 1, 0, 0), aYC(0), aYC(1), aYC(2)
	}, this.hz = function(mJ, mK) {
		a62(mJ, mK) && (aY9 = bO.iu(Math.floor((mK - aY5.fu) / (aY8 + .75 * bf.gap)), 0, 2), colors[aY9] = bO.iu((mJ - aY6) / aY7, 0, 1), bi.e2 = !0)
	}, this.a5Y = function(mJ) {
		-1 !== aY9 && (colors[aY9] = bO.iu((mJ - aY6) / aY7, 0, 1), bi.e2 = !0)
	}, this.a5b = function(mJ, mK, deltaY) {
		a62(mJ, mK) && (mJ = bO.iu(Math.floor((mK - aY5.fu) / (aY8 + .75 * bf.gap)), 0, 2), colors[mJ] = bO.iu(colors[mJ] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.e2 = !0)
	}, this.a5w = function() {
		0 <= aY9 && (aY9 = -1, bi.e2 = !0)
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	}, aVg = new yu(L(378), [new x("⬅️ " + L(49), function() {
		u.z.aH9()
	})], !1), aY5 = new uD([.5, .25], [.5, .5], 1)
}

function aVS() {
	var aX4, aX5, aX6, p7;

	function aX7() {
		aX9(), u.aVf()[19] = null, u.a5A()
	}

	function aYF() {
		aX9(), u.v(21)
	}

	function aX9() {
		1 === aE.data.gameMode ? aE.a8e.a8k() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.tj.a6i(aX6.zP(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aX4.show(), this.resize()
	}, this.ub = function() {
		aX4.ub()
	}, this.resize = function() {
		aX4.resize(), aX5.resize()
	}, this.a66 = function(ev) {
		2 === ev && aX4.z0[0].tt()
	}, p7 = [new x("⬅️ " + L(49), aX7)], 1 === aE.data.gameMode && p7.push(new x(L(383), aYF, 1, 1)), aX4 = new yu(L(384), p7), aX5 = new tV(aX4.yz, (p7 = [], 0 === aE.data.gameMode ? (function(tX) {
		var xR = new tH;
		xR.tK(L(360)), xR.tR(new yq({
			vU: [L(385), L(363)],
			value: aE.data.colorsType
		}, function(eU) {
			aX9(), aE.data.colorsType = eU, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fi || (aE.data.colorsData = new Uint32Array(aE.fi)), u.v(21)
		})), tX.push(xR)
	}(p7), 1 === aE.data.colorsType && function(tX) {
		var xR = new tH;
		xR.tK("Data"), (aX6 = new zH(0, 1, 0, 1)).zO(bD.pa.a8L(aE.data.colorsData, 1)), xR.tU(aX6), tX.push(xR)
	}(p7)) : (aE.a8e.a8k(), p7.push(function() {
		var xR = new tH;
		xR.tK(L(366));
		for (var aC = 0; aC < bj.a4M.length; aC++) {
			var ib = (aC + 1) % bj.a4M.length,
				e = xR.tP((0 == ib ? "" : "Team ") + bj.a4M[ib]);
			aC && (e.style.marginTop = "0.5em"), xR.tU(new uP({
				eU: -1,
				value: aE.data.teamPlayerCount[ib]
			}, 1, 0, function(e) {
				aX4.z0[1].tx(0);
				var playerCount = bO.iu(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aYI] = playerCount
			})).e.aYI = ib
		}
		return xR
	}()), function(tX) {
		for (var xR = new tH, vU = (xR.tK(L(386)), []), aC = 0; aC < bj.a4M.length; aC++) {
			var ib = (aC + 1) % bj.a4M.length;
			vU.push(bj.a4M[ib])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		xR.tR(new yq({
			vU: vU,
			value: (aE.data.colorsData[0] % 16 + bj.a4M.length - 1) % bj.a4M.length
		}, function(eU) {
			var eU = (eU + 1) % bj.a4M.length,
				aYJ = bj.aYK[eU],
				aYJ = (aYJ[0] >> 2 << 12) + (aYJ[1] >> 2 << 6) + (aYJ[2] >> 2);
			aE.data.colorsData[0] = aYJ - (15 & aYJ) + eU
		})), tX.push(xR)
	}(p7)), p7))
}

function vm(id, a7v, aYL) {
	var aVg, aYM;

	function aYR() {
		aYM.tY.innerHTML += "<br>" + L(389)
	}

	function aYa() {
		var g5 = 1;
		u.v(4, 1, new w(L(390), L(391), !1, [new x("🔄 Reload", function() {
			g5 && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), g5 = 0
		}, bE.ql)]))
	}

	function aYQ() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.dv(bG.aD), bm.rv.q1(110, __fx.passwordReset.getCustomPassword() || bI.fC
			.vn(bI.fC.vo(15))), b1.aWF.aYc()
	}
	this.aYN = !0, this.aYO = id, this.show = function() {
		aVg.show(), this.resize(), 15 === id ? (b1.z.aYP(id) ? aYQ : aYR)() : 16 === id ? b1.z.aYP(id) ? b1.es.et(2) : aYR() : 17 === id ? b1.z.aYP(id) ? b1.es.et(3) : aYR() : 18 === id ? (b1.z.close(0, 3253), b1.z.aM2(0, id, 0), aYR()) : 21 ===
			id ? b1.z.aYP(id) ? b1.aYS.aYT(a7v.w2, a7v.w3, a7v.w4) : aYR() : 22 === id ? b1.z.aYP(id) ? b1.aYS.aYU(a7v.w2, a7v.aYV, a7v.aYW) : aYR() : 23 === id ? b1.z.aYP(id) ? b1.aYS.aYX(a7v.aXX, a7v.a4k) : aYR() : 24 === id ? b1.z.aYP(id) ? b1
			.aYS.aYY(a7v.aXX, a7v.w3, a7v.w4) : aYR() : 25 === id ? b1.z.aYP(id) ? b1.aWF.aWL(a7v) : aYR() : 28 === id ? b1.z.aYP(id) ? b1.aYS.aYZ(a7v.w2, a7v.aYV, a7v.aYW) : aYR() : 29 === id ? b1.z.aYP(id) ? b1.aWF.aWk(a7v) : aYR() : 30 ===
			id && (b1.z.aYP(id) ? bA.aH4() || aYa() : aYR())
	}, this.aYb = function() {
		15 === id ? aYQ() : 16 === id ? b1.es.et(2) : 17 === id ? b1.es.et(3) : 18 === id ? u.v(8, this.a5G, new vm(16)) : 21 === id ? b1.aYS.aYT(a7v.w2, a7v.w3, a7v.w4) : 22 === id ? b1.aYS.aYU(a7v.w2, a7v.aYV, a7v.aYW) : 23 === id ? b1.aYS.aYX(
			a7v.aXX, a7v.a4k) : 24 === id ? b1.aYS.aYY(a7v.aXX, a7v.w3, a7v.w4) : 25 === id ? b1.aWF.aWL(a7v) : 28 === id ? b1.aYS.aYZ(a7v.w2, a7v.aYV, a7v.aYW) : 29 === id ? b1.aWF.aWk(a7v) : 30 === id ? bA.aH4() || aYa() : 1e3 === id && (
			this.aYO = id = 25, b1.aWF.aWL(a7v))
	}, this.aH8 = function(code, c3, data) {
		!c3 && code !== id || (15 === code || 16 === code ? u.v(7, this.a5G) : 17 === code ? (b1.z.close(0, 3252), bm.z.a08(0), bm.buffer.data[117].vU && 0 < bm.buffer.data[117].vU.length && (c3 = bm.z.a0A(0)) ? (bm.rv.q1(105, c3.pe), bm.rv.q1(
			106, c3.password), u.v(8, this.a5G, new vm(16))) : (bm.rv.q1(105, ""), u.z.aH9())) : 21 === code ? u.v(10, this.a5G, new aFV(data)) : 23 === code ? u.v(13, this.a5G, new aXF({
			data: data,
			aXX: a7v.aXX
		})) : 25 === code ? (u.z.aVM.pe = a7v.pe, bm.zX.nT(a7v.pe), u.v(15, this.a5G)) : 30 === code && (data ? u.v(1) : aYa()))
	}, this.ub = function() {
		aVg.ub()
	}, this.resize = function() {
		aVg.resize(), aYM.resize()
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	}, aVg = new yu(L(387), [new x("⬅️ " + L(49), function() {
		aYL ? u.v(29) : u.z.aH9()
	})]), aYM = new um(aVg.yz, L(388))
}

function aVQ() {
	var aX4, aX5, aYi, tX, aYd = 0;

	function aYg() {
		var hE;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a8e.a8k()), hE = bD.tj.a6c(aE.data.teamPlayerCount, 0), aE.data.numberTeams = hE) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aX7() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aYj(), aE.data.canvas = null, u.v(5, 5)
	}

	function aYj() {
		bC.sr.dv(), bm.rv.q1(156, bC.a8v.a3T())
	}

	function aYe() {
		var aYi;
		aYd || (aYi = bV.a96(aE.data), 2 === aE.data.mapType || bV.aJu.aMZ(aYi) ? (aE.data.isReplay = 0, aYj(), aE.a8e.a98(), ab.aMD(), aE.a8e.a95(), aE.data.canvas = 2 === aE.data.mapType ? bV.a24 : null, aE.a8i(), aE.a8g = 1) : (aYd = 1, bV.aJu
			.aTS(aYi, function(aMZ) {
				aYd = 0, aMZ && 19 === u.vl && aYe()
			})))
	}

	function aYv() {
		aYg();
		for (var h = [aYm(), aYn(), aYo()], aC = 3; aC < 6; aC++) u.removeChild(aX5.tY, aX5.tZ[aC].tJ), aX5.tZ[aC] = h[aC - 3], aX5.tY.appendChild(aX5.tZ[aC].tJ);
		aX5.resize()
	}

	function aYm() {
		var aYw, xR = new tH;
		return xR.tK(L(384)), aYw = 0 === aE.data.gameMode ? [L(385), L(363)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), xR.tP(aYw), xR.tU(new un([new x(L(395), function() {
			u.v(21)
		}).button])), xR
	}

	function aYn() {
		var xR = new tH,
			h = (xR.tK(L(76)), [L(362) + ": " + aF.lF[aE.data.botDifficultyValue], L(364), L(365), L(363)]);
		return xR.tP(h[aE.data.botDifficultyType]), xR.tU(new un([new x(L(395), function() {
			u.v(25)
		}).button])), xR
	}

	function aYo() {
		var xR = new tH,
			h = (xR.tK("Spawning"), [L(385), L(397), L(363)]);
		return xR.tP(h[aE.data.spawningType]), xR.tU(new un([new x(L(395), function() {
			u.v(24)
		}).button])), xR
	}
	this.show = function() {
		aX4.show(), this.resize(), aX4.yz.scrollTop = u.z.ve[0]
	}, this.ub = function() {
		u.z.ve[0] = aX4.yz.scrollTop, aX4.ub()
	}, this.resize = function() {
		aX4.resize(), aX5.resize()
	}, this.a66 = function(ev) {
		2 === ev && aX4.z0[0].tt()
	}, aX4 = new yu("🔧 " + L(392), [new x("⬅️ " + L(49), aX7), new x(L(393), aYe)]), aYg(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.a24 : 1 === aE.data.mapType ? (aYi = bV.a96(aE.data), bV.aJu.aMZ(aYi) ? aE.data.canvas =
		bV.aRi(aYi, 0).a24 : bV.aJu.aTS(aYi, function(aMZ) {
			aMZ && 19 === u.vl && 1 === aE.data.mapType && bV.a96(aE.data) === aYi && u.v(19)
		})) : (aE.data.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aRi(bV.a96(aE.data), aE.data.mapSeed).a24)), aX5 = new tV(aX4.yz, (function(tX) {
		var xR = new tH,
			a6s = (xR.tK(L(394)), aE.data.canvas || document.createElement("canvas"));
		a6s.style.width = "100%", xR.tU({
			e: a6s
		}), xR.tU(new un([new x(L(395), function() {
			u.v(20)
		}).button])), tX.push(xR)
	}(tX = []), function(tX) {
		var xR = new tH;
		xR.tK(L(366)), xR.tU(new uP({
			eU: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.iu(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.tj.a6c(aE.data.teamPlayerCount, 0), aE.a8e.a8k(), bD.tj.a6c(aE.data.teamPlayerCount, 0) !== e) && aYv()
		})), tX.push(xR)
	}(tX), function(tX) {
		var xR = new tH;
		xR.tK(L(396)), xR.tR(new yq({
			vU: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eU) {
			aE.data.gameMode !== eU && (1 === (aE.data.gameMode = eU) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aYv())
		})), tX.push(xR)
	}(tX), tX.push(aYm()), tX.push(aYn()), tX.push(aYo()), function(tX) {
		var xR = new tH,
			h = (xR.tK(L(398)), [L(399), L(400), L(363)]);
		xR.tP(h[aE.data.playerNamesType]), xR.tU(new un([new x(L(395), function() {
			u.v(23)
		}).button])), tX.push(xR)
	}(tX), function(tX) {
		var xR = new tH,
			h = (xR.tK(L(359)), [L(361), L(362) + ": " + aE.data.aIncomeValue, L(363)]);
		xR.tP(h[aE.data.aIncomeType]), xR.tU(new un([new x(L(395), function() {
			u.v(22)
		}).button])), tX.push(xR)
	}(tX), function(tX) {
		var xR = new tH,
			h = (xR.tK(L(401)), [L(361), L(362) + ": " + aE.data.tIncomeValue, L(363)]);
		xR.tP(h[aE.data.tIncomeType]), xR.tU(new un([new x(L(395), function() {
			u.v(26)
		}).button])), tX.push(xR)
	}(tX), function(tX) {
		var xR = new tH,
			h = (xR.tK(L(402)), [L(361), L(362) + ": " + aE.data.iIncomeValue, L(363)]);
		xR.tP(h[aE.data.iIncomeType]), xR.tU(new un([new x(L(395), function() {
			u.v(27)
		}).button])), tX.push(xR)
	}(tX), function(tX) {
		var xR = new tH,
			h = (xR.tK(L(403)), [L(361), L(362) + ": " + aE.data.sResourcesValue, L(363)]);
		xR.tP(h[aE.data.sResourcesType]), xR.tU(new un([new x(L(395), function() {
			u.v(28)
		}).button])), tX.push(xR)
	}(tX), function(tX) {
		var xR = new tH;
		xR.tK(L(404)), xR.tU(new un([new x(L(405), function() {
			u.y(), aE.a8e.a99(), u.z.ve[0] = 0, u.v(19)
		}).button])), xR.tU(new un([new x(L(406), function() {
			bp.aOn()
		}).button])), xR.tU(new un([new x(L(407), function() {
			return bp.aOp(), !0
		}).button])), tX.push(xR)
	}(tX), tX))
}

function aVb() {
	var aX4, q8 = !0;

	function px(pw, a9D) {
		var tJ = document.createElement("div"),
			aYz = document.createElement("span"),
			aZ0 = document.createElement("span");
		aYz.textContent = aX.aFr(a9D.el) + ":", aYz.style.color = bE.qd, aYz.style.paddingRight = "0.4em", aYz.style.display = "table-cell", aYz.style.width = "6ch", aYz.style.textAlign = "end", tJ.appendChild(aYz), aZ0.textContent = a9D.pW, tJ
			.appendChild(aZ0), tJ.style.display = "table", a9D.sG && function(tJ, sG) {
				{
					var aOA;
					sG >= 1024 - ak.ps.a2m ? ((aOA = document.createElement("img")).src = ak.a2V.a2a[sG - 1024 + ak.ps.a2m].toDataURL(), aOA.style.width = "1.5em", aOA.style.height = "1.5em", aOA.style.verticalAlign = "middle", tJ.appendChild(aOA)) :
						((aOA = document.createElement("span")).textContent = ak.ps.a31(sG), aOA.style.display = "inline-block", aOA.style.fontSize = "1.5em", aOA.style.lineHeight = "1em", aOA.style.verticalAlign = "middle", tJ.appendChild(aOA))
				}
			}(tJ, a9D.sG), pw.appendChild(tJ)
	}

	function aYy() {
		q8 && (aX4.yz.scrollTop = aX4.yz.scrollHeight)
	}
	this.clear = function() {
		aX4.yz.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var aA8 = bu.a9G(), fl = aA8.length, pw = document.createDocumentFragment(), aC = 0; aC < fl; aC++) px(pw, aA8[aC]);
		aX4.yz.appendChild(pw), aYy(), aX4.show(), this.resize(), q8 = !0, aYy()
	}, this.ub = function() {
		aX4.ub()
	}, this.resize = function() {
		aX4.resize(), aX4.yz.style.padding = "0.4em " + bD.tc.tk(bf.th)
	}, this.a66 = function(ev) {
		2 === ev && aX4.z0[0].tt()
	}, this.a2S = function(a9D) {
		var pw = document.createDocumentFragment();
		px(pw, a9D), aX4.yz.appendChild(pw), aYy()
	}, (aX4 = new yu(L(408), [new x("⬅️ " + L(49), function() {
		u.aVe(1)
	})])).yz.style.overflowY = "auto", aX4.yz.addEventListener("scroll", function() {
		q8 = aX4.yz.scrollTop >= aX4.yz.scrollHeight - aX4.yz.clientHeight - 2
	})
}

function aV8() {
	var aZ2 = 0,
		aZ3 = 50;
	this.send = function(gD, pe, send) {
		gD = bD.h7.a7s(gD, 1, 1e6), aZ2 + gD < aZ3 ? (aZ2 += gD, send()) : u.v(4, u.vl, new w(L(238), L(409, [pe, gD]), !1, [new x("⬅️ " + L(49), function() {
			u.a5A()
		}), new x("✅ OK", function() {
			aZ2 = 0, aZ3 *= 2, u.a5A(), send()
		})]))
	}
}

function aVY() {
	var aX4, aX5, aX6, tX;

	function aX7() {
		aX9(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aVf()[19] = null, u.a5A()
	}

	function aX9() {
		2 === aE.data.iIncomeType && bD.tj.a6i(aX6.zP(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aX4.show(), this.resize()
	}, this.ub = function() {
		aX4.ub()
	}, this.resize = function() {
		aX4.resize(), aX5.resize()
	}, this.a66 = function(ev) {
		2 === ev && aX4.z0[0].tt()
	}, aX4 = new yu(L(402), [new x("⬅️ " + L(49), aX7)]), aX5 = new tV(aX4.yz, (function(tX) {
		var xR = new tH;
		xR.tK(L(360)), xR.tR(new yq({
			vU: [L(361), L(362), L(363)],
			value: aE.data.iIncomeType
		}, function(eU) {
			aX9(), 2 !== eU || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fi), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eU, u.v(27)
		})), tX.push(xR)
	}(tX = []), function(tX) {
		var xR;
		1 === aE.data.iIncomeType && ((xR = new tH).tK("Value"), xR.tU(new uP({
			eU: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.iu(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), tX.push(xR))
	}(tX), function(tX) {
		var xR;
		2 === aE.data.iIncomeType && ((xR = new tH).tK("Data"), (aX6 = new zH(0, 1, 0, 1)).zO(bD.pa.a8L(aE.data.iIncomeData, 4)), xR.tU(aX6), tX.push(xR))
	}(tX), tX))
}

function aVG() {
	var aZ4, aZ5, aY5, uO, aZ6, v4 = 0;
	this.aMv = new vs, aY5 = new uD([.45, .27], [.5, .5], 2 / 3), aZ5 = [new x("⚔️<br>" + L(410), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aZ7(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.qr), new x("🗡️<br>" + L(392), function() {
			aZ7(1)
		}, bE.rB), new x("🔑<br>" + L(411), function() {
			aZ7(2)
		}, bE.rZ), new x("☰<br>" + L(412), function() {
			aZ7(3)
		}, bE.qb), new x("", function() {
			u.v(12)
		}, bE.qK, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], uO = new uP(bm.buffer.data[122]);
	for (var aC = 0; aC < aZ5.length; aC++) aZ5[aC].button.style.position = "absolute";

	function aZ7(eU) {
		a1.a2.setState(10), ac.wB() || ac.aMm(), 0 === eU ? u.z.a8y(1) : 1 === eU ? (bC.aP7.a0p(bm.buffer.data[156].value, 1) || aE.a8e.a99(), u.v(19)) : 2 === eU ? 0 !== a1.id || bm.buffer.data[140].value ? u.v(8, u.vl, new vm(16)) : u.z.aZ8(u.vl,
			16) : 3 === eU && u.v(1)
	}
	uO.e.style.position = "absolute", uO.e.style.textAlign = "center", uO.e.placeholder = L(413), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aMv.show(), aZ5[4].tx(bD.color.a70(bm.buffer.data[121].value)), this.resize(), document.body.appendChild(uO.e);
		for (var aC = 0; aC < aZ5.length; aC++) document.body.appendChild(aZ5[aC].button);
		1 !== a1.id || a1.eC < 5 || (aZ6 && bi.el > aZ6 + 144e5 ? a1.zr.setState(14) : aZ6 = bi.el)
	}, this.ub = function() {
		this.aMv.ub(), u.removeChild(document.body, uO.e);
		for (var aC = 0; aC < aZ5.length; aC++) u.removeChild(document.body, aZ5[aC].button)
	}, this.resize = function() {
		this.aMv.resize(), this.aMv.resize(), aY5.resize();
		var gap = .5 * bf.gap,
			we = 10 / 99 * .84 * aY5.j,
			aZB = .16 * aY5.k,
			aDm = .19 * aY5.j,
			fs = aY5.fs + aDm,
			we = aY5.fu + we + 3 * gap,
			j = .5 * (aY5.j - gap) - aDm,
			aDm = aY5.j - 2 * aDm - aZB - gap,
			aDm = (bD.tc.w9(uO.e, fs, we, aDm, aZB), bD.tc.w9(aZ5[4].button, fs + aDm + gap, we, aZB, aZB), v4 = we, .5 * (aY5.fu + aY5.k - (we += aZB + gap) - gap));
		bD.tc.w9(aZ5[0].button, fs, we, j, aDm), bD.tc.w9(aZ5[1].button, fs + j + gap, we, j, aDm), bD.tc.w9(aZ5[2].button, fs, we + aDm + gap, j, aDm), bD.tc.w9(aZ5[3].button, fs + j + gap, we + aDm + gap, j, aDm);
		bD.tc.w9(aZ5[5].button, fs, we + aDm * 2 + gap * 2, j * 2 + gap, aDm / 3);
		bD.tc.w9(aZ5[6].button, fs, we + aDm * 2.33 + gap * 3, j * 2 + gap, aDm / 3);
		for (var aC = 0; aC < aZ5.length; aC++) aZ5[aC].button.style.font = bD.tc.vB(0, bD.tc.yb(.065 * aY5.k)), bD.tc.tl(aZ5[aC].button, 5);
		uO.e.style.font = bD.tc.vB(0, bD.tc.yb(.08 * aY5.k)), bD.tc.tl(uO.e, 5)
	}, this.z8 = function() {
		ab.aMI(), aU.z8();
		var fl = Math.floor((a1.a2.iv() ? .018 : .0137) * i.iw);
		if (z9.font = bD.tc.vB(0, Math.max(5, fl)), bD.tc.textBaseline(z9, 0), bD.tc.textAlign(z9, 2), z9.fillStyle = bE.qO, z9.fillText(m.eC, i.j, 0), __fx.settings.displayWinCounter && (text = "Win count: " + __fx.wins.count, textLength = z9
				.measureText(text).width, fl = Math.max(5, fl), z9.textAlign = "left", z9.textBaseline = "middle", z9.fillText(text, z9.canvas.width - textLength - fl / 2, 2 * fl)), aP.z8(v4), bb.z8(), ac.wB()) {
			z9.imageSmoothingEnabled = !1;
			var text = ac.xL("territorial.io"),
				textLength = .84 * aY5.j / text.width;
			z9.setTransform(textLength, 0, 0, textLength, aY5.fs + .08 * aY5.j, aY5.fu), aZ4 = aZ4 || bD.p3.a7t(text, bD.p3.a80, [0, 0, 0]);
			for (var fs = -1; fs <= 1; fs += 2)
				for (var fu = -1; fu <= 1; fu += 2) z9.drawImage(aZ4, fs, fu);
			z9.drawImage(text, 0, 0), z9.imageSmoothingEnabled = !0;
			var fl = ac.xL("logo"),
				aZE = .6666 * textLength * text.height / fl.height,
				oK = .5 * i.j,
				oL = aY5.fu + .5 * textLength * text.height - .5 * aZE * fl.height;
			z9.setTransform(aZE, 0, 0, aZE, oK - .6 * textLength * text.width, oL), z9.drawImage(fl, 0, 0), z9.setTransform(aZE, 0, 0, aZE, oK + .6 * textLength * text.width - aZE * fl.width, oL), z9.drawImage(fl, 0, 0), z9.setTransform(1, 0, 0,
				1, 0, 0), z9.imageSmoothingEnabled = !0
		}
	}
}

function aVN() {
	var aVg, aZF, aZG, yv;

	function aZH(aC) {
		u.v(8, u.vl, new vm(21, {
			w2: aC,
			w3: 0,
			w4: 10
		}))
	}
	this.show = function() {
		aVg.show(), this.resize()
	}, this.ub = function() {
		aVg.ub()
	}, this.resize = function() {
		aVg.resize(), aZF.resize()
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	}, aZG = [new x(L(414), function() {
		aZH(1)
	}, 0, 0, 1), new x(L(415), function() {
		aZH(2)
	}, 0, 0, 1), new x(L(416), function() {
		aZH(3)
	}, 0, 0, 1), new x(L(417), function() {
		aZH(0)
	}, 0, 0, 1), new x(L(418), function() {
		aZH(9)
	}, 0, 0, 1), new x(L(419), function() {
		aZH(10)
	}, 0, 0, 1), new x(L(420), function() {
		aZH(11)
	}, 0, 0, 1), new x(L(421), function() {
		aZH(13)
	}, 0, 0, 1)], yv = [new x("⬅️ " + L(49), function() {
		u.a5A()
	})], aVg = new yu(L(422), yv), aZF = new uB(aZG, aVg.yz)
}

function aHW(title, tQ, aZI) {
	var aVg, aYM;
	this.show = function() {
		aVg.show(), this.resize()
	}, this.ub = function() {
		aVg.ub()
	}, this.resize = function() {
		aVg.resize(), aYM.resize()
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	}, aZI = aZI || [new x("⬅️ " + L(49), function() {
		u.a5A()
	}, bE.r5)], aVg = new yu(title, aZI), aYM = new um(aVg.yz, tQ), bD.tc.textAlign(aVg.yz.style, 1)
}

function aFV(data) {
	var aVg, aZJ;

	function aZS(fl) {
		return fl < 60 ? 1 === fl ? fl + " Second" : fl + " Seconds" : fl < 3600 ? 1 === (fl = Math.floor(fl / 60)) ? fl + " Minute" : fl + " Minutes" : fl < 172800 ? 1 === (fl = Math.floor(fl / 3600)) ? fl + " Hour" : fl + " Hours" : (fl = Math
			.floor(fl / 172800)) + " Days"
	}

	function aZL(kJ) {
		var fl = data.data.length;
		if (fl) {
			for (var w3, max = min = parseInt(data.data[0][0]), aC = 1; aC < fl; aC++) var aKU = parseInt(data.data[aC][0]),
				min = Math.min(aKU, min),
				max = Math.max(aKU, max);
			w3 = kJ < 0 ? min + kJ : max + 1, u.v(8, u.a5F().a5G, new vm(21, {
				w2: data.w2,
				w3: w3,
				w4: w3 + Math.abs(kJ)
			}))
		}
	}
	if (this.show = function() {
			aVg.show(), this.resize()
		}, this.ub = function() {
			aVg.ub()
		}, this.resize = function() {
			aVg.resize(), aZJ.resize()
		}, this.a66 = function(ev) {
			2 === ev && aVg.z0[0].tt()
		}, data.aFW) {
		aVg = new yu(L(33), [new x("⬅️ " + L(49), function() {
			u.a5A()
		})]);
		var fo = {
				vV: [],
				va: [L(435), L(436), L(437) + " ↗"],
				vh: [12, 50, 38]
			},
			a93 = aE.data.a93;
		if (a93) {
			for (var fl = a93.length, vV = fo.vV, a2T = ah.a2T, aC = 0; aC < fl; aC++) vV.push([{
				gD: aC + 1 + ".",
				em: 0
			}, {
				gD: a2T[aC],
				em: 0
			}, {
				gD: bI.fC.a3I(a93[aC], 5),
				em: 1,
				pe: a93[aC],
				vk: 0
			}]);
			aZJ = new vT(aVg.yz, fo, {
				vd: 1
			})
		} else aZJ = new vT(aVg.yz, fo)
	} else {
		var fo = data.data.length ? 0 : 1,
			aZI = [new x("⬅️ " + L(49), function() {
				u.a5A()
			}), new x(L(423), function() {
				aZL(-10)
			}, fo, 0, 1), new x(L(424), function() {
				aZL(10)
			}, fo, 0, 1), new x(L(368), function() {
				u.v(11, 10, new aZM({
					w2: data.w2
				}))
			})],
			va = [L(425), L(426), L(427), L(428), L(429), L(430), L(431), L(432), L(433), L(434), L(419), L(420), "Audit Log", L(421)];
		aVg = new yu(va[data.w2], aZI), ! function() {
			var aC, fo = {
					vV: []
				},
				vV = fo.vV,
				aZO = data.data,
				fl = aZO.length;
			fl && 0 === aZO[0][0] && 0 <= (eU = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.w2]) && (u.z.w5[eU] = aZO[0][1]);
			var oJ = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.w2],
				a86 = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.w2],
				eU = [
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
			if (fo.va = eU[data.w2], fo.vh = [
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
				][data.w2], 0 === data.w2 || 2 === data.w2 || 3 === data.w2 || 9 === data.w2 || 10 === data.w2 || 11 === data.w2 || 13 === data.w2)
				for (aC = 0; aC < fl; aC++) vV.push([{
					gD: aZO[aC][0] + 1 + ".",
					em: 0
				}, {
					gD: aZO[aC][1],
					em: 1,
					pe: aZO[aC][4],
					vk: aZO[aC][3]
				}, {
					gD: (oJ * aZO[aC][2]).toFixed(a86),
					em: 0
				}]);
			else if (12 === data.w2)
				for (aC = 0; aC < fl; aC++) {
					var aZR = aZO[aC][3];
					vV.push([{
						gD: "" + aZO[aC][0],
						em: 0
					}, {
						gD: aZS(aZO[aC][4]),
						em: 0
					}, {
						gD: aZO[aC][5],
						em: 1,
						pe: aZO[aC][1],
						vk: 0
					}, {
						gD: aZO[aC][6],
						em: 1,
						pe: aZO[aC][2],
						vk: 0
					}, {
						gD: br.ea(aZR, bI.fC.a3I(aZO[aC][1], 5)),
						em: 0
					}])
				} else if (1 === data.w2)
					for (aC = 0; aC < fl; aC++) vV.push([{
						gD: aZO[aC][0] + 1 + ".",
						em: 0
					}, {
						gD: aZO[aC][1],
						em: 0
					}, {
						gD: (oJ * aZO[aC][2]).toFixed(a86),
						em: 0
					}, {
						gD: aZO[aC][3],
						em: 1,
						pe: aZO[aC][5],
						vk: aZO[aC][4]
					}]);
				else if (4 === data.w2 || 5 === data.w2 || 6 === data.w2 || 7 === data.w2 || 8 === data.w2)
				for (aC = 0; aC < fl; aC++) {
					var aZT = aZO[aC][5];
					4 === data.w2 || 8 === data.w2 ? "100%" === (aZT = (aZT % 64 * 100 / (aZT >> 6)).toFixed(0) + "%") && (4 === data.w2 ? aZT += " (" + L(455) + ")" : aZT += " (" + L(456) + ")") : 5 === data.w2 ? 32768 <= aZT && (aZT = -(aZT -
						32768)) : aZT = (oJ * aZT).toFixed(a86), vV.push([{
						gD: "" + aZO[aC][0],
						em: 0
					}, {
						gD: aZS(aZO[aC][6]),
						em: 0
					}, {
						gD: aZO[aC][7],
						em: 1,
						pe: aZO[aC][1],
						vk: aZO[aC][2]
					}, {
						gD: aZO[aC][8],
						em: 1,
						pe: aZO[aC][3],
						vk: aZO[aC][4]
					}, {
						gD: "" + aZT,
						em: 0
					}])
				}
			aZJ = new vT(aVg.yz, fo)
		}()
	}
}

function aZM(a7v) {
	var aVg, aVh, tX;
	this.show = function() {
		aVg.show(), this.resize()
	}, this.ub = function() {
		aVg.ub()
	}, this.resize = function() {
		aVg.resize(), aVh.resize()
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	}, aVg = new yu(L(457), [new x("⬅️ " + L(49), function() {
		u.aVe(10)
	})]), aVh = new tV(aVg.yz, ((tX = []).push(function() {
		var aL2, xR = new tH,
			aY3 = new uP(bm.buffer.data[132], 1, function() {
				aL2.button.click()
			}),
			aY4 = new uP(bm.buffer.data[131], 1, function() {
				aY3.e.focus()
			});
		xR.tK(L(373)), xR.tU(aY4), aY4.e.style.marginBottom = "0.8em", xR.tK(L(374)), xR.tU(aY3);
		return aL2 = new x(L(372), function() {
			w3 = Math.floor(aY4.e.value), w4 = Math.floor(aY3.e.value);
			var w4, w3 = {
				a6a: Math.min(w3, w4),
				aU5: Math.max(w3, w4)
			};
			u.v(8, u.a9F(10).a5G, new vm(21, {
				w2: a7v.w2,
				w3: w3.a6a,
				w4: w3.aU5
			}))
		}, 0, 0, 1), xR.tU(new un([aL2.button])), xR
	}()), tX.push(function() {
		var aL2, xR = new tH,
			aY3 = new uP(bm.buffer.data[134], 1, function() {
				aL2.button.click()
			}),
			aY4 = new uP(bm.buffer.data[133], 0, function() {
				aY3.e.focus()
			});
		return xR.tK(1 === a7v.w2 ? L(458) : L(459)), xR.tU(aY4), aY4.e.style.marginBottom = "0.8em", xR.tK(L(460)), xR.tU(aY3), aL2 = new x(L(372), function() {
			var aYV = aY4.e.value.slice(0, 20),
				aYW = Math.abs(Math.floor(aY3.e.value));
			u.v(8, u.a9F(10).a5G, new vm(22, {
				w2: a7v.w2,
				aYV: aYV,
				aYW: aYW
			}))
		}, 0, 0, 1), xR.tU(new un([aL2.button])), xR
	}()), tX.push(function() {
		var aL2, xR = new tH,
			aY3 = new uP(bm.buffer.data[152], 1, function() {
				aL2.button.click()
			}),
			aY4 = new uP(bm.buffer.data[151], 0, function() {
				aY3.e.focus()
			});
		return xR.tK(L(461)), xR.tU(aY4), aY4.e.style.marginBottom = "0.8em", xR.tK(L(460)), xR.tU(aY3), aL2 = new x(L(372), function() {
			var aYV = aY4.e.value.slice(0, 5),
				aYW = Math.abs(Math.floor(aY3.e.value));
			u.v(8, u.a9F(10).a5G, new vm(28, {
				w2: a7v.w2,
				aYV: aYV,
				aYW: aYW
			}))
		}, 0, 0, 1), xR.tU(new un([aL2.button])), xR
	}()), tX))
}

function aVa() {
	var aZX, aZY, aZZ, aZa, aZb, aZc, aZd, wE, wF, aZe = new Array(2);

	function aZg(button, aZi) {
		button = new uX("", button, 1, aZi);
		return button.uZ.style.right = "0.2em", button.uZ.style.textAlign = "left", button.uZ.style.overflow = "hidden", button.uZ.style.textOverflow = "ellipsis", button.uZ.translate = !1, button
	}

	function aKB() {
		var input, aJ7;
		!bq.fI || (aJ7 = (input = aZX.wO.uO.e).value.trim().slice(0, 255)).length < 1 || (bq.pY.a43(aJ7), input.value = bq.pY.aKL(), aZX.wO.uY(), bM.u5()) || input.focus()
	}

	function aZf(wa) {
		var aZk = bq.z.aHq;
		aZk !== wa && (aZh(aZk, 0), aZh(wa, 1), bq.z.aHq = wa, 0 === aZk && b1.aIX.aIY(1), 0 === wa ? (b1.aIX.aIY(0), c0.nH.nT()) : 1 === wa && aZX.wP.nT(), aZX.wZ(wa), aZX.resize())
	}

	function aZh(wa, color) {
		wE.p7[wa].tx(color ? bE.qn : bE.rj), wE.p7[wa].button.classList.toggle("fx-selected", !!color)
	}

	function aMW(aMZ) {
		aMZ && bq.fI && 29 === u.vl && (u.a9F(29).aJe(), bq.xP.aJf())
	}
	this.pY = function(pe) {
		aZf(0);
		var pW = aZX.wO.uO.e.value,
			pe = "@" + pe + " ";
		pW.length && !bD.pa.a7N(pW, " ") && (pe = " " + pe), aZX.wO.uO.e.value = pW += pe, aZX.wO.uY(), aZX.wO.uO.e.focus()
	}, this.aJc = function() {
		aZX.wP.nT()
	}, this.aIZ = function() {
		var tX = bq.tX,
			tX = tX.aIW() ? tX.xT ? bE.rO : bE.qn : bE.rj;
		wF.p7[1].tx(tX), aZX.wR.nT()
	}, this.aJe = function() {
		var tX = bq.tX,
			aC = tX.xu(tX.xS);
		aC < 0 || (tX = tX.tX[aC], bV.aJu.aMZ(tX.fR) ? bV.a8(tX.fR, tX.mapSeed) : bV.aJu.zp(tX.fR, aMW))
	}, this.aJd = function() {
		aZX.wX(bq.z.wY);
		var xE = bq.pm.xE,
			aZl = xE.length,
			xR = bq.tX.tX[0],
			aZm = xR ? Math.min(bq.tX.xU(xR), aZl) : 0;
		aZY.uZ.textContent = "" + aZl, aZZ.uZ.textContent = "" + aZm, aZa.uZ.textContent = aP.aBT(0, 2), aZb.uZ.textContent = aP.aBT(2, 4), aZc.uZ.textContent = xR ? bq.tX.xX(xR.xC) + "   " + bV.xV.xW[xR.fR] : "", aZd[0].uZ.textContent = bq.lt
			.aJC(xE, 0, aZl), aZd[1].uZ.textContent = xR && xR.xC < 7 ? bq.lt.aJC(xE, 0, aZm) : "", aZe[1].uZ.textContent = "Multiplayer: " + bq.z.aJY[0] + "   Single: " + bq.z.aJY[1] + "   Lobby: " + aZl, this.aIZ()
	}, this.aJh = function() {
		c0.nH.nT()
	}, this.show = function() {
		bq.z.aHp++, aZX.show(), this.resize(), bq.message.show()
	}, this.ub = function() {
		aZX.ub(), bq.yM.ub(), bq.xq.ub(), bq.message.ub()
	}, this.resize = function() {
		aZX.resize(), bq.message.resize()
	}, this.a66 = function(ev) {
		2 === ev ? bq.tX.xS ? bq.tX.select(0) : wF.p7[0].tt() : ev < 2 && bq.tX.click(0)
	}, wE = new uq([new x(L(462), function() {
		return aZf(0), 2
	}), new x(L(33), function() {
		return aZf(1), 2
	}), new x(L(463), function() {
		return aZf(2), 2
	})], bE.rj, 0, [18, 36, 46]);
	for (var aC = 0; aC < 3; aC++) wE.p7[aC].button.style.padding = "0";
	wF = new uq([new x(L(35, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			u.y(), bq.yB(), b1.z.a5O(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		}),
		function() {
			u.y(), bq.yB(), b1.z.a5O(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		})), new x(L(464), function() {
		return bq.tX.click(0), 2
	})], bE.rj, 0, [25, 75]), aZX = new wD(wE, wF, aKB, bq.yM.aKi, function(eU, xy) {
		bq.fI && bq.tX.click(eU, xy)
	});
	var join = wF.p7[1].button,
		input = (bD.tc.wo(join, null, function() {
			bq.fI && bq.tX.click(0, 1)
		}), aZX.wO.uO.e);
	input.addEventListener("beforeinput", function(event) {
			bq.fI && bq.pY.aKN(event, input) && aZX.wO.uY()
		}), aZY = new uX("0", wE.p7[1].button), aZZ = new uX("0", wF.p7[1].button), aZa = aZg(wE.p7[2].button, 0), aZb = aZg(wE.p7[2].button, 1), (aZc = aZg(wF.p7[1].button, 0)).uZ.style.right = "3em", (aZd = [new uX("", wE.p7[1].button, 1, 1),
			new uX("", wF.p7[1].button, 1, 1)
		])[0].uZ.style.bottom = "0em", aZd[1].uZ.style.bottom = "0em", aZd[0].uZ.translate = !1, aZd[1].uZ.translate = !1, aZh(bq.z.aHq, 1), (aZe = [new uX(L(366), aZX.wb(), 1, 0), new uX("", aZX.wb(), 1, 1)])[0].uZ.style.fontSize = "0.4em", aZe[1]
		.uZ.style.fontSize = "0.4em"
}

function aVH() {
	var aVg, aVh, tX;
	this.show = function() {
		aVg.show(), this.resize()
	}, this.ub = function() {
		aVg.ub()
	}, this.resize = function() {
		aVg.resize(), aVh.resize()
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	}, aVg = new yu(L(465), [new x("⬅️ " + L(49), function() {
		u.v(7, u.a9F(7).a5G)
	}), new x(L(267), function() {
		bm.rv.q1(105, bJ.fC.a0h(aVh.tZ[0].tI[0].e.value, 5)), bm.rv.q1(106, bJ.fC.a0h(aVh.tZ[1].tI[0].e.value, 15)), u.v(8, u.a9F(7).a5G, new vm(18))
	})]), aVh = new tV(aVg.yz, ((tX = []).push(function() {
		var xR = new tH;
		return xR.tK(L(244)), xR.tU(new uP({
			value: "",
			eU: -1
		})), xR
	}()), tX.push(function() {
		var xR = new tH,
			aWM = (xR.tK(L(247)), new uP({
				value: "",
				eU: -1
			}));
		return aWM.e.type = "password", xR.tU(aWM), xR.tU(new un([new x(L(248), function(e) {
			return e.textContent === L(248) ? (e.textContent = L(249), aWM.e.type = "text") : (e.textContent = L(248), aWM.e.type = "password"), !0
		}).button])), xR
	}()), tX.push(function() {
		var xR = new tH;
		return xR.tK(L(251)), xR.tL(L(466)), xR.tL(L(467)), xR.tL(L(468)), xR
	}()), tX))
}

function aVO() {
	var aVg, aZF, aZG, yv;

	function aZH(aC) {
		u.v(8, u.vl, new vm(21, {
			w2: aC,
			w3: 0,
			w4: 10
		}))
	}
	this.show = function() {
		aVg.show(), this.resize()
	}, this.ub = function() {
		aVg.ub()
	}, this.resize = function() {
		aVg.resize(), aZF.resize()
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	}, aZG = [new x(L(430), function() {
		aZH(5)
	}, 0, 0, 1), new x(L(431), function() {
		aZH(6)
	}, 0, 0, 1), new x(L(432), function() {
		aZH(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aZH(12)
	}, 0, 0, 1)], yv = [new x("⬅️ " + L(49), function() {
		u.a5A()
	})], aVg = new yu(L(469), yv), aZF = new uB(aZG, aVg.yz)
}

function aV6() {
	this.buffer = {}, this.w5 = new Array(8), this.aVM = null, this.aVJ = null, this.vR = 0, this.ve = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a8y = function(aZp) {
		aZp && (aa.fE = aZp), u.y(), aa.dv()
	}, __fx.customLobby.setJoinFunction(() => this.a8y(1)), this.aH9 = function() {
		u.v(0 === ab.a5B() ? 5 : 0)
	}, this.aXy = function() {
		if (1 === bm.buffer.data[130].value) u.v(8, u.a5F().a5G, new vm(24, {
			aXX: bm.buffer.data[125].value,
			w3: bm.buffer.data[128].value,
			w4: bm.buffer.data[129].value
		}));
		else {
			for (var h = (h = bm.buffer.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a5F().a5G, new vm(23, {
				aXX: bm.buffer.data[125].value,
				a4k: h
			}))
		}
	}, this.aZ8 = function(a5G, target) {
		u.v(4, a5G, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aW8(
				"/privacy") + "<br>By playing you agree to our Terms of Service: " + b1.z.aW8("/terms"), !1, [new x("⬅️ " + L(49), function() {
				u.v(a5G)
			}), new x("✅ Accept", function() {
				bm.rv.q1(140, 1), 0 === target ? u.v(2, a5G) : u.v(8, a5G, new vm(target))
			})]))
	}, this.aZq = function() {
		for (var aC = 0; aC < 8; aC++) this.w5[aC] = bJ.a0Y.a0c(bK.sf(5));
		this.w5[1] = "[" + this.w5[1] + "]", 5 === u.vl && (u.a5F().aMv.q1(this.w5), u.a5F().resize())
	}, this.aWH = function(gD, rt, aAs) {
		gD = bD.h7.a7s(gD, 1, 1e6);
		rt = L(470, [rt]);
		return (rt += "<br>") + L(471, [__fx.utils.escapeHtml("" + aAs)]) + "<br>" + L(472, [gD + "–" + (gD + 2)]) + "<br>" + L(473, [gD])
	}
}

function aVR() {
	var aX4, aX5, aZr, tX;

	function aX7() {
		b7.yB(), u.aVf()[19] = null, u.a5A()
	}

	function aZy() {
		aa1(), aZz()
	}

	function aa1() {
		aZr.tJ.lastChild && u.removeChild(aZr.tJ, aZr.tJ.lastChild)
	}

	function aZz() {
		var aYi = bV.a96(aE.data);
		bV.aJu.aMZ(aYi) ? (aE.data.canvas = bV.aRi(aYi, aE.data.mapSeed).a24, aa0()) : (aE.data.canvas = null, bV.aJu.aTS(aYi, function(aMZ) {
			aMZ && 20 === u.vl && 2 !== aE.data.mapType && bV.a96(aE.data) === aYi && u.v(20)
		}))
	}

	function aa0() {
		var a6s = aE.data.canvas;
		a6s.style.width = "100%", aZr.tJ.appendChild(a6s)
	}
	this.aO9 = function(a6s) {
		aE.data.canvas && aa1(), aE.data.canvas = a6s, aa0()
	}, this.show = function() {
		aX4.show(), this.resize()
	}, this.ub = function() {
		aX4.ub()
	}, this.resize = function() {
		aX4.resize(), aX5.resize()
	}, this.a66 = function(ev) {
		2 === ev && aX4.z0[0].tt()
	}, aX4 = new yu(L(394), [new x("⬅️ " + L(49), aX7)]), 2 === aE.data.mapType && b7.dv(), aX5 = new tV(aX4.yz, (function(tX) {
		var xR = new tH;
		xR.tK(L(360)), xR.tR(new yq({
			vU: [L(474), L(475), L(476)],
			value: aE.data.mapType
		}, function(eU) {
			2 === (aE.data.mapType = eU) ? (b7.dv(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.yB()), u.v(20)
		})), 2 <= aE.data.mapType && (xR.tU(new vD), xR.tU(new uj({
			value: aE.data.passableWater
		}, L(477), function(value) {
			aE.data.passableWater = value
		})), xR.tU(new uj({
			value: aE.data.passableMountains
		}, L(478), function(value) {
			aE.data.passableMountains = value
		})));
		tX.push(xR)
	}(tX = []), function(tX) {
		if (0 === aE.data.mapType) {
			for (var xR = new tH, vU = (xR.tK(L(394)), []), aC = 0; aC < bV.xV.aSg.length; aC++) vU.push(bV.xV.aB5[bV.xV.aSg[aC]].name);
			xR.tR(new yq({
				vU: vU,
				value: aE.data.mapProceduralIndex
			}, function(eU) {
				aE.data.mapProceduralIndex = eU, aZy()
			})), tX.push(xR)
		}
	}(tX), function(tX) {
		if (1 === aE.data.mapType) {
			for (var xR = new tH, vU = (xR.tK(L(394)), []), aC = 0; aC < bV.xV.aSh.length; aC++) vU.push(bV.xV.aB5[bV.xV.aSh[aC]].name);
			xR.tR(new yq({
				vU: vU,
				value: aE.data.mapRealisticIndex
			}, function(eU) {
				aE.data.mapRealisticIndex = eU, aZy()
			})), tX.push(xR)
		}
	}(tX), function(tX) {
		var xR;
		2 === aE.data.mapType && ((xR = new tH).tK(L(479)), xR.tU(new uP(bm.buffer.data[162], 1)), xR.tK(L(480), "0.8em"), xR.tU(new un([new x(L(481), function() {
			return b7.aO2(), !0
		}).button])), tX.push(xR))
	}(tX), function(tX) {
		var xR, uO;
		2 === aE.data.mapType && ((xR = new tH).tK(L(482)), uO = new uP({
			eU: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), xR.tU(uO), tX.push(xR))
	}(tX), function(tX) {
		var xR, uO, aL2;
		0 === aE.data.mapType && ((xR = new tH).tK("Seed"), uO = new uP({
			eU: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aZy())
		}), aL2 = new x(L(385), function(e) {
			var aRe = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aRe) return uO.e.value = aE.data.mapSeed = aRe, aZy(), !0
		}), xR.tU(uO), xR.tU(new un([aL2.button])), tX.push(xR))
	}(tX), function(tX) {
		(aZr = new tH).tK(L(483)), 2 !== aE.data.mapType ? aZz() : aE.data.canvas && aa0();
		tX.push(aZr)
	}(tX), tX))
}

function w(title, tQ, aa2, aZI) {
	var aVg, aYM;
	this.show = function() {
		aVg.show(), this.resize()
	}, this.ub = function() {
		aVg.ub()
	}, this.resize = function() {
		aVg.resize(), aYM.resize()
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	}, aZI = aZI || [new x("⬅️ " + L(49), function() {
		u.a5A()
	})], aVg = new yu(title, aZI), aYM = new um(aVg.yz, tQ), aa2 && bD.tc.textAlign(aVg.yz.style, 1)
}

function aVU() {
	var aX4, aX5, aX6, tX;

	function aX7() {
		aX9(), 2 === aE.data.playerNamesType && 1 === bD.tj.a6W(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aVf()[19] = null, u.a5A()
	}

	function aX9() {
		2 === aE.data.playerNamesType && bD.tj.a6k(aX6.zP(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aX4.show(), this.resize()
	}, this.ub = function() {
		aX4.ub()
	}, this.resize = function() {
		aX4.resize(), aX5.resize()
	}, this.a66 = function(ev) {
		2 === ev && aX4.z0[0].tt()
	}, aX4 = new yu(L(398), [new x("⬅️ " + L(49), aX7)]), aX5 = new tV(aX4.yz, (function(tX) {
		var xR = new tH;
		xR.tK(L(360)), xR.tR(new yq({
			vU: [L(399), L(400), L(363)],
			value: aE.data.playerNamesType
		}, function(eU) {
			aX9(), aE.data.playerNamesType = eU, u.v(23)
		})), xR.tU(new vD), xR.tU(new uj({
			value: aE.data.selectableName
		}, L(484), function(value) {
			aE.data.selectableName = value
		})), tX.push(xR)
	}(tX = []), function(tX) {
		var xR;
		2 === aE.data.playerNamesType && ((xR = new tH).tK("Data"), aX6 = new zH(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fi || (aE.data.playerNamesData = new Array(aE.fi), aE.data.playerNamesData
			.fill("")), aX6.zO(bD.pa.a8L(aE.data.playerNamesData, 1, '"')), xR.tU(aX6), tX.push(xR))
	}(tX), tX))
}

function aVc() {
	var aX4, aX5, tX;

	function aa8() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.buffer.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var g4 = 0; g4 < 3; g4++) g4 < h.length && (colors[aC][g4] = Number(h[g4]))
		}
		return colors
	}
	this.show = function() {
		aX4.show(), this.resize()
	}, this.ub = function() {
		aX4.ub()
	}, this.resize = function() {
		aX4.resize(), aX5.resize()
	}, this.a66 = function(ev) {
		2 === ev && aX4.z0[0].tt()
	}, aX4 = new yu(L(485), [new x("⬅️ " + L(49), function() {
		u.a5A()
	})]), aX5 = new tV(aX4.yz, ((tX = []).push(function() {
		var xR = new tH;
		return xR.tK(L(486)), xR.tP(b1.z.aW8("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", xR.tP("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), xR
	}()), tX.push(function() {
		var xR = new tH,
			ex = (xR.tK(L(487)), bm.buffer.data[174].value),
			tM = xR.tL(ex.length + " / 180"),
			aWn = (tM.style.textAlign = "center", new zH(0, 1, function(e) {
				var e = e.target.value,
					hE = e.length;
				tM.textContent = hE + " / 180", hE <= 180 && bm.rv.q1(174, e)
			}));
		return aWn.e.rows = 6, aWn.e.style.fontSize = "1em", aWn.zO(ex), xR.tU(aWn), xR
	}()), tX.push(function() {
		var xR = new tH;
		xR.tK(L(384));
		for (var aC = 0; aC < 11; aC++) {
			var j5 = xR.tU(new uP(bm.buffer.data[163 + aC]));
			aC && (j5.e.style.marginTop = "0.6em")
		}
		return xR.tU(new un([new x(L(488), function() {
			for (var data = bm.buffer.data, aC = 163; aC < 174; aC++) data[aC] && bm.buffer.ze(aC, data[aC].zh);
			u.a5A(), u.aVf()[31] = null, u.v(31)
		}).button])), xR
	}()), tX.push(function() {
		var xR = new tH;
		return xR.tK("Targeting"), xR.tP(L(489)), xR.tU(new uP(bm.buffer.data[175], 0, 0)), xR
	}()), tX.push(function() {
		var xR = new tH;
		return xR.tK(L(483)), xR.tU(new un([new x(L(248), function() {
			(new ew).show(bm.buffer.data[174].value, aa8(), -1)
		}).button])), xR
	}()), tX.push(function() {
		var xR = new tH,
			aa9 = (xR.tK(L(490)), xR.tP(L(491)), new uP(bm.buffer.data[176], 1, 0)),
			aaA = (xR.tU(aa9), new x(L(492), function(e) {
				return aaB.button.textContent === L(170) && b1.z.er(0) && (bD.tc.yn(e), aWE(), b1.aWF.aaC(bm.buffer.data[176].value, aa8(), bm.buffer.data[175].value, bm.buffer.data[174].value)), !0
			}, 1)),
			aWE = function() {
				aaB.button.textContent = L(232), aaA.tx(1), aaA.button.style.color = bE.qO
			},
			aaB = new x(L(232), function(e) {
				return e.textContent === L(232) ? (e.textContent = L(170), aaA.tx(0), aaA.button.style.color = bE.rU) : aWE(), !0
			});
		return xR.tU(new un([aaB.button, aaA.button])), xR
	}()), tX))
}

function aVd() {
	var aVg, aVh, tX;
	this.show = function() {
		aVg.show(), this.resize()
	}, this.ub = function() {
		aVg.ub()
	}, this.resize = function() {
		aVg.resize(), aVh.resize()
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	}, aVg = new yu("🔒 " + L(493), [new x("⬅️ " + L(49), function() {
		u.a5A()
	})]), aVh = new tV(aVg.yz, ((tX = []).push(function() {
		var xR = new tH,
			uO = (xR.tP(b1.z.aW8("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", xR.tK(L(244)), new uP({
				value: "",
				eU: -1
			})),
			aWj = (xR.tU(uO), xR.tK(L(318), "0.8em"), new uP({
				value: "",
				eU: -1
			}, 0, 0)),
			aWD = (aWj.e.type = "email", aWj.e.autocomplete = "email", aWj.e.name = "email", aWj.e.inputMode = "email", aWj.e.spellcheck = !1, xR.tU(aWj), new x(L(494), function(e) {
				return bD.tc.yn(e), b1.aWF.aWk({
					action: 4,
					pW: uO.e.value.trim() + aWj.e.value.trim().substring(0, 63)
				}), !0
			}));
		return xR.tU(new un([aWD.button])), xR
	}()), tX))
}

function aVF() {
	var aX4, zM;

	function aaD() {
		u.y();
		var playedGame = aE.a3z && !aE.hu ? bC.a8v.a3T() : "",
			pW = bC.aaH(zM.zP());
		(aE.a3z && 0 < pW.length && pW === bC.sr.a8u || bC.aP7.a0p(pW)) && (__fx.replayHistory.save(playedGame), bC.aaI())
	}
	this.show = function(aaE) {
		this.aaF(aaE), aX4.show(), this.resize()
	}, this.aaF = function(aaE) {
		0 === aE.a3z ? aaE ? zM.zO(aaE) : aE.a8h.length && zM.zO(aE.a8h) : (aE.hu || (bC.sr.a8u = bC.a8v.a3T()), zM.zO(bC.aaG(bC.sr.a8u)))
	}, this.zO = function(pW) {
		zM.zO(pW)
	}, this.ub = function() {
		aX4.ub()
	}, this.resize = function() {
		aX4.resize(), zM.resize()
	}, this.a66 = function(ev) {
		2 === ev ? aX4.z0[0].tt() : aaD()
	}, aX4 = new yu(L(495), [new x("⬅️ " + L(49), function() {
		u.aVe(1)
	}), new x(L(496), function() {
		zM.zQ()
	}), new x(L(497), function() {
		zM.zR()
	}), new x(L(498), function() {
		zM.clear()
	}), new x(L(499), function() {
		aaD()
	})]), zM = new zH(L(500)), aX4.yz.appendChild(zM.e)
}

function aVE() {
	var aVg, aVh, tX, xR;

	function aaJ() {
		bA.aGv !== bm.buffer.data[12].value ? (bA.dv(), u.v(8, 1, new vm(30))) : u.v(1)
	}
	this.show = function() {
			aVg.show(), this.resize()
		}, this.ub = function() {
			aVg.ub()
		}, this.resize = function() {
			aVg.resize(), aVh.resize()
		}, this.a66 = function(ev) {
			2 === ev && aVg.z0[0].tt()
		}, aVg = new yu(L(501), [new x("⬅️ " + L(49), aaJ), new x(L(502), function() {
			u.y(), bm.rv.a0F(), u.v(2)
		})]), tX = [], (xR = new tH).tK(L(503)), xR.tL(L(504)), tX.push(xR),
		function(tX) {
			var xR = new tH,
				h = (xR.tK(L(489)), bA.data.aHC());
			xR.tR(new yq({
				vU: h,
				value: bA.data.aHG(h)
			}, function(eU) {
				return bm.rv.q1(12, h[eU].split(":")[0]), !0
			})), tX.push(xR)
		}(tX),
		function(tX) {
			var xR = new tH,
				aaM = (xR.tK(L(529)), []);
			xR.tU(new un([new x(L(488), function(e) {
				ba.aaN();
				for (var aC = 0; aC < aaM.length; aC++) aaM[aC].e.value = ba.aGN[aC];
				return bD.tc.yn(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aaO.length; aC++) {
				xR.tL(ba.aaO[aC]);
				for (var g4 = 0; g4 < 2; g4++) {
					var eU = 2 * aC + g4,
						uO = new uP({
							value: ba.aGN[eU],
							eU: -1
						});
					uO.e.aaP = eU, aaM.push(uO), uO.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aaQ(e.target.aaP, code)
					}), g4 && (uO.e.style.marginLeft = "4%"), uO.e.style.width = "48%", xR.tU(uO)
				}
			}
			tX.push(xR)
		}(tX), (xR = new tH).tK(L(505)), bm.buffer.data[1].vU = [L(506), L(507), L(508), L(509)], xR.tR(new yq(bm.buffer.data[1])), tX.push(xR), (xR = new tH).tK(L(510)), bm.buffer.data[9].vU = [L(507), L(511), L(512)], xR.tR(new yq(bm.buffer.data[
			9])), tX.push(xR), (xR = new tH).tK(L(513)), bm.buffer.data[11].vU = [L(514), L(9), L(515)], xR.tR(new yq(bm.buffer.data[11])), tX.push(xR), (xR = new tH).tK(L(516)), xR.tU(new uj(bm.buffer.data[2])), tX.push(xR), (xR = new tH).tK(L(
		517)), xR.tU(new uj(bm.buffer.data[7])), tX.push(xR), (xR = new tH).tK(L(518)), xR.tU(new uj(bm.buffer.data[8])), tX.push(xR), (xR = new tH).tK(L(519)), xR.tU(new uP(bm.buffer.data[5])), tX.push(xR), (xR = new tH).tK(L(520)), xR.tU(new uj(bm
			.buffer.data[13], L(521))), xR.tU(new uj(bm.buffer.data[14], L(522))), tX.push(xR), (xR = new tH).tK(L(523)), xR.tR(new yq({
			vU: [L(524), L(525), L(526)],
			value: aa.aLx
		}, function(aC) {
			aa.aLx = aC
		})), tX.push(xR), (xR = new tH).tK(L(527)), xR.tU(new uj(bm.buffer.data[15])), xR.tL(L(528)), xR.tU(new uP(bm.buffer.data[16], 1, 0, function(e) {
			e.target.value = bO.iu(Math.floor(e.target.value), 0, 16)
		})), tX.push(xR), aVh = new tV(aVg.yz, tX)
}

function aVV() {
	var aX4, aX5, aX6, tX;

	function aX7() {
		aX9(), 2 !== aE.data.spawningType || bD.tj.a6W(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aVf()[19] = null, u.a5A()
	}

	function aX9() {
		2 === aE.data.spawningType && bD.tj.a6i(aX6.zP(), aE.data.spawningData, bV.aOC - 1)
	}
	this.show = function() {
		aX4.show(), this.resize()
	}, this.ub = function() {
		aX4.ub()
	}, this.resize = function() {
		aX4.resize(), aX5.resize()
	}, this.a66 = function(ev) {
		2 === ev && aX4.z0[0].tt()
	}, aX4 = new yu(L(530), [new x("⬅️ " + L(49), aX7)]), aX5 = new tV(aX4.yz, (function(tX) {
		var xR = new tH,
			vU = (xR.tK(L(360)), [L(385), L(397), L(363)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (vU.splice(1, 1), 0 < value) && (value = 1);
		xR.tR(new yq({
			vU: vU,
			value: value
		}, function(eU) {
			aX9(), aE.data.spawningType = eU, 0 === aE.data.gameMode && 1 === eU && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fi)), u.v(24)
		})), tX.push(xR)
	}(tX = []), function(tX) {
		var xR = new tH;
		xR.tK("My Spawn"), xR.tU(new uj({
			value: aE.data.selectableSpawn
		}, L(531), function(value) {
			aE.data.selectableSpawn = value
		})), tX.push(xR)
	}(tX), function(tX) {
		var xR = new tH,
			aaS = (xR.tK("Seed"), new uP({
				eU: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		xR.tU(aaS), xR.tU(new un([new x(L(385), function() {
			aaS.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), tX.push(xR)
	}(tX), function(tX) {
		var xR;
		2 === aE.data.spawningType && ((xR = new tH).tK("Data"), (aX6 = new zH(0, 1, 0, 1)).zO(bD.pa.a8L(aE.data.spawningData, 2)), xR.tU(aX6), tX.push(xR))
	}(tX), tX))
}

function aVD() {
	var aVg, aZF, aZG, yv;

	function aaT(id) {
		0 !== a1.id || bm.buffer.data[140].value ? 0 === id ? u.v(8, 1, new vm(16)) : u.v(2) : u.z.aZ8(u.vl, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aVg.show(), this.resize(), this.eq()
	}, this.ub = function() {
		aVg.ub()
	}, this.resize = function() {
		aVg.resize(), aZF.resize()
	}, this.eq = function() {
		8 === ab.a5B() && (bg.aaY() ? aZG[2].tu === bE.qa && aZG[2].tx(0) : aZG[2].tu !== bE.qa && aZG[2].tx(bE.qa), aE.hu || aE.hv || !aN.tF(aE.fV) ? aZG[1].tu !== bE.qa && aZG[1].tx(bE.qa) : aZG[1].tu === bE.qa && aZG[1].tx(0), aE.hu || aE
			.hv || !ax.iY(aE.fV) ? aZG[0].tu !== bE.qa && aZG[0].tx(bE.qa) : aZG[0].tu === bE.qa && aZG[0].tx(0))
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	}, aZG = [new x(L(532), function() {
		aaT(0)
	}), new x(L(422), function() {
		u.v(16)
	}), new x(L(469), function() {
		u.v(17)
	}), new x(L(533), function() {
		u.z.aXy()
	}, 0, 0, 1), new x(L(495), function() {
		u.v(3, 1)
	}), new x(L(534), function() {
		u.v(18)
	}), new x(L(485), function() {
		u.v(31)
	}), new x(L(535), function() {
		u.z.a8y(2)
	}), new x(L(501), function() {
		aaT(1)
	}), new x("🔒 " + L(493), function() {
		u.v(32)
	}), new x(L(536), function() {
		var a7J, qE;
		(a7J = []).push(["Wiki", (qE = "https://territorial.io/") + "wiki/gold"]), a7J.push(["Team Games", qE + "log/team"]), a7J.push(["Battle Royale Games", qE + "log/br"]), a7J.push(["1v1 Games", qE + "log/1v1"]), a7J.push([
			"Zombie Games", qE + "log/zombies"
		]), a7J.push(["Transactions", qE + "log/transactions"]), a7J.push(["Changelog", qE + "changelog"]), 2 !== a1.id && a7J.push(["Android App", bN.aHT]), 1 !== a1.id && a7J.push(["iOS App", bN.a57]), 0 === a1.id && a7J.push([
			"Patreon", bN.aX2
		]), a7J.push(["Terms", bN.aaZ]), a7J.push(["Privacy", bN.aaa]), u.v(4, 1, new w(L(536), bD.tc.a7I(a7J), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		})]))
	}), new x(L(537), function() {
		u.v(4, 1, new w(L(537), m.eC + "<br>" + b1.z.aW8("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(49),
				function() {
					u.v(1)
				})]))
	}), new x(L(538), function() {
		u.v(4, 1, new w(L(538), L(545) + "<br>" + L(546), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		}), new x(L(547), function() {
			a1.a2.a51(), u.v(1)
		})]))
	}), new x("👁️ " + L(539), function() {
		a1.a2.a52(), u.v(4, 1, new w(L(548), L(549) + " " + b1.z.aW8("/privacy"), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		})]))
	})], yv = [new x("⬅️ " + L(49), function() {
		u.z.aH9()
	})], 8 === ab.a5B() && (aZG.unshift(new x(L(408), function() {
		u.v(30)
	})), aZG.unshift(new x(L(542), function() {
		bg.aaY() && (u.y(), bh.a69(), bi.e2 = !0)
	}, 0, 1)), aZG.unshift(new x(L(543), function() {
		aE.hu || aE.hv || !aN.tF(aE.fV) || (bB.iC.sL(), u.y(), aN.hw && aN.a69())
	}, 0, 1)), aZG.unshift(new x(L(544), function() {
		aE.hu || aE.hv || !ax.iY(aE.fV) || (bY.a9c(2), bB.iC.iU(), u.y(), aN.hw && aN.a69())
	}, 0, 1))), 1 === a1.id && 5 <= a1.eC && aZG.push(new x(L(540), function() {
		a1.a2.a53()
	})), aVg = new yu(L(541), yv), aZF = new uB(aZG, aVg.yz)
}

function aVZ() {
	var aX4, aX5, aX6, tX;

	function aX7() {
		aX9(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aVf()[19] = null, u.a5A()
	}

	function aX9() {
		2 === aE.data.sResourcesType && bD.tj.a6i(aX6.zP(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aX4.show(), this.resize()
	}, this.ub = function() {
		aX4.ub()
	}, this.resize = function() {
		aX4.resize(), aX5.resize()
	}, this.a66 = function(ev) {
		2 === ev && aX4.z0[0].tt()
	}, aX4 = new yu(L(403), [new x("⬅️ " + L(49), aX7)]), aX5 = new tV(aX4.yz, (function(tX) {
		var xR = new tH;
		xR.tK(L(360)), xR.tR(new yq({
			vU: [L(361), L(362), L(363)],
			value: aE.data.sResourcesType
		}, function(eU) {
			aX9(), 2 !== eU || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fi)), aE.data.sResourcesType = eU, u.v(28)
		})), tX.push(xR)
	}(tX = []), function(tX) {
		var xR;
		1 === aE.data.sResourcesType && ((xR = new tH).tK("Value"), xR.tU(new uP({
			eU: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.iu(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), tX.push(xR))
	}(tX), function(tX) {
		var xR;
		2 === aE.data.sResourcesType && ((xR = new tH).tK("Data"), (aX6 = new zH(0, 1, 0, 1)).zO(bD.pa.a8L(aE.data.sResourcesData, 2)), xR.tU(aX6), tX.push(xR))
	}(tX), tX))
}

function aVX() {
	var aX4, aX5, aX6, tX;

	function aX7() {
		aX9(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aVf()[19] = null, u.a5A()
	}

	function aX9() {
		2 === aE.data.tIncomeType && bD.tj.a6i(aX6.zP(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aX4.show(), this.resize()
	}, this.ub = function() {
		aX4.ub()
	}, this.resize = function() {
		aX4.resize(), aX5.resize()
	}, this.a66 = function(ev) {
		2 === ev && aX4.z0[0].tt()
	}, aX4 = new yu(L(401), [new x("⬅️ " + L(49), aX7)]), aX5 = new tV(aX4.yz, (function(tX) {
		var xR = new tH;
		xR.tK(L(360)), xR.tR(new yq({
			vU: [L(361), L(362), L(363)],
			value: aE.data.tIncomeType
		}, function(eU) {
			aX9(), 2 !== eU || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fi), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eU, u.v(26)
		})), tX.push(xR)
	}(tX = []), function(tX) {
		var xR;
		1 === aE.data.tIncomeType && ((xR = new tH).tK("Value"), xR.tU(new uP({
			eU: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.iu(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), tX.push(xR))
	}(tX), function(tX) {
		var xR;
		2 === aE.data.tIncomeType && ((xR = new tH).tK("Data"), (aX6 = new zH(0, 1, 0, 1)).zO(bD.pa.a8L(aE.data.tIncomeData, 4)), xR.tU(aX6), tX.push(xR))
	}(tX), tX))
}

function aVP() {
	var aVg, aVh, tX;
	this.show = function() {
		aVg.show(), this.resize()
	}, this.ub = function() {
		aVg.ub()
	}, this.resize = function() {
		aVg.resize(), aVh.resize()
	}, this.a66 = function(ev) {
		2 === ev && aVg.z0[0].tt()
	}, aVg = new yu(L(534), [new x("⬅️ " + L(49), function() {
		u.a5A()
	})]), aVh = new tV(aVg.yz, ((tX = []).push(function() {
		function aWE() {
			aaB.button.textContent = L(232), aad.e.readOnly = !1, aae.e.readOnly = !1, aWD.tx(1), aWD.button.style.color = bE.qO
		}
		var xR = new tH,
			aac = (xR.tP(b1.z.aW8("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", xR.tK(L(550)), new uP({
				value: bm.buffer.data[105].value,
				eU: -1
			})),
			aad = (aac.e.readOnly = !0, xR.tU(aac), xR.tK(L(447), "0.8em"), new uP(bm.buffer.data[148], 0, void 0, function(e) {
				aWC(bm.buffer.data[149].value, e.target.value)
			})),
			aae = (xR.tU(aad), xR.tK(L(451), "0.8em"), new uP(bm.buffer.data[149], 1, void 0, function(e) {
				aWC(e.target.value, bm.buffer.data[148].value)
			})),
			aaB = (xR.tU(aae), new x(L(232), function(e) {
				return e.textContent === L(232) ? (e.textContent = L(170), aad.e.readOnly = !0, aae.e.readOnly = !0, aWD.tx(0), aWD.button.style.color = bE.rU, bm.rv.q1(149, aae.e.value), aWC(bm.buffer.data[149].value, bm
					.buffer.data[148].value)) : aWE(), !0
			})),
			aWD = (xR.tU(new un([aaB.button])), new x(L(21), function(e) {
				var pW, gD;
				return aad.e.readOnly && b1.z.er(0) && (pW = bm.buffer.data[148].value, gD = parseInt(bm.buffer.data[149].value, 10), u.aV7.send(gD, pW, function() {
					bD.tc.yn(e), aWE(), b1.aWF.aWG({
						action: 0,
						pe: pW,
						value: gD
					})
				})), !0
			}, 1)),
			tM = xR.tL(),
			aWC = (xR.tL(L(551)).style.fontWeight = "bold", function(gD, pW) {
				tM.innerHTML = u.z.aWH(gD, bm.buffer.data[105].value, pW)
			});
		return xR.tU(new un([aWD.button])), aWC(bm.buffer.data[149].value, bm.buffer.data[148].value), xR
	}()), tX))
}

function c5() {
	"function" != typeof Math.log2 && (Math.log2 = function(fs) {
		return Math.log(fs) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fs) {
		return Math.log(fs) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fs) {
		return 0 < fs ? 1 : fs < 0 ? -1 : 0
	})
}

function cr() {
	var aE2, aag, aah, aai, aaf = !1;

	function aaj() {
		aaf = !0, aE2 = -1, aag = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aag[aC] = !1;
		var a1M = Math.floor(1 + .02 * i.min);
		aah = new Array(4), (aai = new Array(4))[1] = aai[3] = aah[0] = aah[2] = 0, aai[0] = aah[3] = -a1M, aah[1] = aai[2] = a1M
	}

	function aak() {
		if (-1 !== aE2)
			if (0 !== aE.a3z && aI.oP()) {
				for (var aal = !1, aC = 3; 0 <= aC; aC--) aag[aC] && (aal = !0, jN += aah[aC], jO += aai[aC], ag.a5Y(aah[aC], aai[aC]), aT.aDi());
				aal ? bi.e2 = !0 : at.oF()
			} else at.oF()
	}
	this.a64 = function(eU) {
		0 !== aE.a3z && aI.oP() && (aaf || aaj(), aag[eU] = !0, -1 === aE2) && (aE2 = setInterval(aak, 20), aak())
	}, this.a67 = function(eU) {
		if (0 !== aE.a3z && (aaf || aaj(), aag[eU] = !1, -1 !== aE2)) {
			for (var aal = !1, aC = 3; 0 <= aC; aC--) aal = aal || aag[aC];
			aal || this.oF()
		}
	}, this.oF = function() {
		if (aaf && -1 !== aE2) {
			for (var aC = 3; 0 <= aC; aC--) aag[aC] = !1;
			clearInterval(aE2), aE2 = -1
		}
	}
}

function cs() {
	this.z = new aam, this.nO = new aan, this.rt = new aao, this.aIX = new aap, this.es = new aaq, this.aWF = new aar, this.se = new aas, this.aYS = new aat, this.aAs = new aau, this.aav = new aaw, this.aax = new aay, this.aaz = new ab0, this.ab1 =
		new ab2, this.dv = function() {
			this.z.dv()
		}
}

function aam() {
	var ab4, ab5;
	this.aM1 = 4, this.ab3 = null, this.a5J = 0, this.fJ = 0;

	function abE() {
		return 0 === aa.aLx ? m.eH ? 1 : 0 : aa.aLx - 1
	}

	function abH(oY, a5G, abG) {
		ab5[oY].aaf = !0, abA(oY), ab4[oY] = new abK, ab4[oY].dv(oY, a5G, abG)
	}

	function abI(aC) {
		return ab5[aC].aaf && ab4[aC].abI()
	}

	function abA(oY) {
		ab5[oY].el = bi.el, ab5[oY].ab7 = !1
	}
	this.dv = function() {
		this.ab3 = new Array(this.aM1), this.ab3[0] = "territorial.io", this.ab3[1] = "1.territorial.io", this.ab3[2] = "4.territorial.io", this.ab3[3] = "5.territorial.io", ab4 = new Array(this.aM1), ab5 = new Array(this.aM1);
		for (var aC = this.aM1 - 1; 0 <= aC; aC--) ab5[aC] = {
			aaf: !1,
			el: 0,
			ab7: !1
		};
		this.aM2(0, 0, 0)
	}, this.ab8 = function(aC) {
		return ab4[aC]
	}, this.eq = function() {
		for (var aC = this.aM1 - 1; 0 <= aC; aC--) this.er(aC) && bi.el > ab5[aC].el + 15e3 && (b1.rt.ab9(aC, ab5[aC].ab7), abA(aC));
		!this.er(0) && bi.el > ab5[0].el + 8e3 && (ab5[0].el = bi.el, this.aM2(0, 0, 0))
	}, this.aYP = function(id) {
		return this.aM2(0, id, 0) && this.abB(0)
	}, this.abC = function(abD) {
		return abD ? aa.aLy : abE()
	}, this.a4R = function() {
		return abE() ? "game.territorial.io" : "territorial.io"
	}, this.aW8 = function(abF) {
		abF = this.a4R() + abF;
		return "<a href='https://" + abF + "' target='_blank'>" + abF + "</a>"
	}, this.aM2 = function(oY, a5G, abD) {
		abD = this.abC(abD);
		if (ab5[oY].aaf) {
			if (ab4[oY].abI()) return ab4[oY].abJ(a5G), ab4[oY].er();
			ab4[oY].ub()
		}
		return abH(oY, a5G, abD), !1
	}, this.abL = function(oY, a5G) {
		console.log("Connection to Server " + oY), b1.es.abM(oY)
	}, this.abB = function(aC) {
		return this.er(aC) && ab4[aC].abB()
	}, this.abN = function(aC) {
		ab4[aC].abN()
	}, this.er = function(aC) {
		return ab5[aC].aaf && ab4[aC].er()
	}, this.send = function(oY, aD) {
		0 !== oY && abA(oY), ab4[oY].send(aD)
	}, __fx.customLobby.setSendFunction(this.send), this.a5p = function(oY) {
		8 === ab.a5B() && (ab5[oY].ab7 = !0, b1.nO.abO = !0)
	}, this.close = function(oY, abP) {
		abI(oY) && ab4[oY].close(abP)
	}, this.aMc = function(oY, abP) {
		p.a5N(abP), abI(oY) && ab4[oY].close(abP)
	}, this.a5O = function(abP) {
		for (var aC = this.aM1 - 1; 0 <= aC; aC--) this.close(aC, abP)
	}, this.abQ = function(oY, abP) {
		for (var aC = this.aM1 - 1; 0 <= aC; aC--) aC !== oY && this.close(aC, abP)
	}, this.a8w = function() {
		0 === this.a5J && (aE.lO || aE.hu) || this.close(this.a5J, 3246)
	}, this.abR = function(oY, e) {
		ab4[oY].ub(), p.a58(oY, e.code)
	}
}

function aan() {
	this.abO = !1, this.eq = function() {
		bi.l1() % 250 != 249 || aE.hu || aE.hv || (b1.es.abS(+(this.abO && ah.ng[aE.fV]), am.la + bQ.z.mu), this.abO = !1)
	}
}

function aau() {
	this.aMe = function(oY, aD) {
		bK.dv(aD), 0 === bK.size ? b1.z.aMc(oY, 3205) : __fx.customLobby.isCustomMessage(aD) || ((0 === bK.sf(1) ? function(oY) {
			var abX = bK.sf(6);
			0 === abX ? function(oY) {
					if (0 === oY && 8 !== ab.a5B()) {
						u.z.aZq();
						for (var abp = bK.sf(12), abq = bK.sf(6), h = new Array(abp), aC = 0; aC < abp; aC++) h[aC] = bK.sf(abq);
						aU.aE8(h)
					}
				}(oY) : 2 === abX ? b1.aav.abZ(oY) : 3 === abX || 4 === abX ? ay.dv() : 5 === abX ? b1.aax.aba() : 9 === abX ? b1.aax.abb(oY) : 10 === abX ? b1.aaz.abc() : 11 === abX ? b1.aax.abd(oY) : 12 === abX ? b1.aaz.abe() :
				13 === abX ? b1.ab1.abf() : 14 === abX ? b1.ab1.abg() : 15 === abX ? b1.aax.abh() : 16 === abX ? b1.aav.abi(oY) : 17 === abX ? b1.aav.abj(oY) : 19 === abX ? b1.aav.abk(oY) : 20 === abX ? b1.aax.abl(oY) : 21 !== abX &&
				22 !== abX && (23 === abX ? b1.aax.abm(oY) : 24 === abX ? b1.aav.abn(oY) : 25 === abX && b1.aaz.abo())
		} : function(oY) {
			if (8 !== ab.a5B() && !ay.aMg(oY, bK.aD)) return;
			if (oY !== b1.z.a5J) b1.z.aMc(oY, 3244);
			else if (0 === bK.sf(1)) bi.a49.abr(bK.aD);
			else {
				var aC, oY = bK.sf(2);
				if (0 === oY) {
					var sG, rt = bK.sf(9);
					0 !== ah.ng[rt] && 0 !== ah.ng[aE.fV] && (sG = bK.sf(10), aO.sF(rt, aE.fV, sG), ag.tD(rt, 1, sG))
				} else if (1 === oY) ! function() {
					var rt = bK.sf(9);
					0 !== ah.ng[rt] && 0 !== ah.ng[aE.fV] && b6.aR9(0, [rt], !0) && aO.sX(rt, 1)
				}();
				else if (2 === oY) ! function() {
					var rt = bK.sf(9),
						target = bK.sf(9);
					0 !== ah.ng[rt] && 0 !== ah.ng[target] && 0 !== ah.ng[aE.fV] && b6.aR9(1, [rt], !0) && (ag.tD(rt, 3, 96), ag.tD(target, 4, 96), aO.aAz(rt, target))
				}();
				else if (m.aA && !m.aB) {
					var fl = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fl = Math.min(bB.rp.sh.length, 540), aC = 0; aC < fl; aC++) bG.aby(32, bB.rp.sh[aC]);
					b1.z.send(b1.z.a5J, bG.aD)
				}
			}
		})(oY), bi.abW())
	}
}

function ab0() {
	this.abc = function() {
		bm.z.a04(), bm.rv.q1(105, bI.fC.vn(bI.fC.vo(5))), bm.rv.q1(106, bI.fC.vn(bI.fC.vo(15))), bm.rv.q1(109, 0), bm.rv.q1(108, bm.buffer.data[109].value), bm.rv.q1(111, bm.buffer.data[109].value + 1), bm.rv.q1(107, 0), bm.rv.q1(110, "")
	}, this.abo = function() {
		var id = bK.sf(8),
			pW = bJ.a0a.a0p(7);
		0 === id && (bm.z.a09(pW, bm.buffer.data[106].value), new aTT(L(552, [pW])))
	}, this.abe = function() {
		var data;
		bK.size < bG.abz(29) ? b1.z.aMc(0, 3254) : ((data = {
			vk: bK.sf(30),
			a0J: bK.sf(16),
			a0K: bK.sf(30),
			a0L: bK.sf(30),
			a0M: bK.sf(30),
			a0N: bK.ac0(32),
			username: bJ.a0a.a0p(5),
			a0O: bJ.a0a.a0p(3),
			a0P: bJ.a0a.a0p(3),
			a0Q: bK.ac0(32),
			a0R: bK.ac0(32),
			a0S: bK.sf(30),
			a0T: bK.ac0(32),
			a0U: bK.ac0(32),
			a0V: bK.ac0(32),
			a0W: bK.ac0(32),
			aWX: bK.ac0(32),
			aWY: bK.ac0(30),
			aWu: bK.ac0(32),
			aWv: bJ.a0a.a0p(3),
			aWo: bK.ac0(2),
			aWq: bK.ac0(10),
			aWm: bJ.a0a.a0p(8),
			aWp: bK.ac0(5),
			aWA: bK.sf(30),
			aWP: bK.sf(30),
			a4V: bK.ac0(32),
			aWc: bK.sf(3),
			aWb: bK.sf(8),
			aWV: bK.sf(30),
			aWW: bK.ac0(32),
			aWa: bK.sf(1),
			aWi: bJ.a0a.a0p(6),
			aWd: bK.sf(1),
			aWe: bK.sf(1),
			aWQ: bK.sf(16),
			aWR: bK.sf(5),
			aWS: bK.sf(1),
			ac1: bK.sf(1),
			aWT: bK.sf(23),
			aWK: bK.sf(30),
			aWw: bK.sf(1),
			aWx: bK.sf(1)
		}).aWw && (data.aWy = bK.ac0(32), data.aWz = bK.sf(30), data.aX0 = bK.sf(30), data.aX1 = bK.sf(1)), data.ac1 && (data.aWT = -data.aWT), 8 === u.vl && (25 === u.a5F().aYO ? (data.aVi = !0, u.z.aVM = data, u.a5F().aH8(25, !1)) : (
			data.aVi = !1, bm.rv.q1(160, +(data.aWw && data.aX1)), data.pe = bm.buffer.data[105].value, u.z.aVJ = data, bm.rv.a0I(data), u.a5F().aH8(16, !0))))
	}
}

function ab2() {
	this.abf = function() {
		var aC;
		if (bK.size < bG.abz(23)) b1.z.aMc(0, 3259);
		else {
			var w2 = bK.sf(6),
				fl = bK.sf(10),
				data = [];
			if (9 === w2 || 10 === w2 || 11 === w2 || 13 === w2) {
				for (aC = 0; aC < fl; aC++) data.push([bK.sf(30), bJ.a0a.a0p(5), bK.ac0(32), 0, bK.sf(30)]);
				8 === u.vl && u.a5F().aH8(21, !0, {
					w2: w2,
					data: data
				})
			} else if (12 === w2) {
				for (aC = 0; aC < fl; aC++) data.push([bK.sf(20), bK.sf(30), bK.sf(30), bK.ac0(32), bK.sf(30), bJ.a0a.a0p(5), bJ.a0a.a0p(5)]);
				8 === u.vl && u.a5F().aH8(21, !0, {
					w2: w2,
					data: data
				})
			} else {
				var ii = bK.sf(16);
				if (bK.ac2(39 + 16 * ii + fl * (0 === w2 ? 111 : 1 === w2 ? 101 : 2 === w2 || 3 === w2 ? 127 : 212))) {
					if (0 === w2)
						for (aC = 0; aC < fl; aC++) data.push([bK.sf(30), bJ.a0Y.a0c(bK.sf(5)), bK.sf(16), bK.sf(30), bK.sf(30)]);
					else if (1 === w2)
						for (aC = 0; aC < fl; aC++) data.push([bK.sf(16), bJ.a0Y.a0c(bK.sf(3)), bK.sf(16), bJ.a0Y.a0c(bK.sf(5)), bK.sf(31), bK.sf(30)]);
					else if (2 === w2 || 3 === w2)
						for (aC = 0; aC < fl; aC++) data.push([bK.sf(30), bJ.a0Y.a0c(bK.sf(5)), bK.ac0(32), bK.sf(30), bK.sf(30)]);
					else
						for (aC = 0; aC < fl; aC++) data.push([bK.sf(20), bK.sf(30), bK.sf(30), bK.sf(30), bK.sf(30), bK.ac0(32), bK.sf(30), bJ.a0Y.a0c(bK.sf(5)), bJ.a0Y.a0c(bK.sf(5))]);
					8 === u.vl && u.a5F().aH8(21, !0, {
						w2: w2,
						data: data
					})
				} else b1.z.aMc(0, 3260)
			}
		}
	}, this.abg = function() {
		if (bK.size < bG.abz(29)) b1.z.aMc(0, 3265);
		else {
			var ac3 = bK.sf(4),
				ac4 = bK.sf(7),
				ac5 = bK.sf(11);
			if (bK.ac2(29 + 16 * ac4 + 16 * ac5 + 11 * ac3)) {
				for (var data = [], aC = 0; aC < ac3; aC++) {
					for (var a4l = bJ.a0Y.a0c(bK.sf(3)), ac6 = bK.sf(8), aXY = [], g4 = 0; g4 < ac6; g4++) aXY.push(bK.sf(16));
					data.push({
						name: "[" + a4l + "]",
						aXY: aXY
					})
				}
				8 === u.vl && u.a5F().aH8(23, !0, data)
			} else b1.z.aMc(0, 3266)
		}
	}
}

function aaw() {
	function acA() {
		var id = bK.sf(3);
		return 0 === id ? {
			id: id,
			pe: bK.sf(30),
			pf: acB(),
			s: bJ.a0a.a0p(8)
		} : 1 === id ? {
			id: id,
			pe: bK.sf(30),
			pf: acB(),
			aJ4: bK.sf(3),
			value: bK.sf(30),
			target: bK.sf(30),
			pg: acB()
		} : 2 === id ? {
			id: id,
			pe: bK.sf(30),
			pf: acB(),
			aJ4: bK.sf(3)
		} : 3 === id ? {
			id: id,
			pe: bK.sf(30),
			pf: acB(),
			aJ4: bK.sf(3),
			value: bK.sf(4),
			target: bK.sf(30),
			pg: acB()
		} : 4 === id ? {
			id: id,
			pe: bK.sf(30),
			pf: acB(),
			aJ4: bK.sf(3),
			target: bK.sf(30),
			pg: acB(),
			aJ6: bK.sf(1)
		} : 5 === id ? {
			id: id,
			aJ4: bK.sf(6)
		} : 6 === id ? {
			id: id,
			value: bK.sf(17)
		} : null
	}

	function acB() {
		return bK.sf(1) ? bJ.a0a.a0p(5) : null
	}
	this.abZ = function(oY) {
		if (oY !== b1.z.fJ) b1.z.close(oY, 3239);
		else if (6 !== ab.a5B()) b1.z.close(oY, 3271);
		else {
			bq.dv(), bq.z.wY = bK.sf(10), bq.tX.aIR();
			for (var playerCount = bK.sf(16), g4 = 0; g4 < playerCount; g4++) bq.pm.aHr(bK.sf(30), bJ.a0a.a0p(5), bK.sf(4), bK.sf(30), bK.sf(7), bK.sf(16), bK.sf(18), bK.sf(11), bK.sf(12), bK.sf(6), bK.sf(13), bK.sf(1));
			u.v(29), bq.z.aJZ(!0)
		}
	}, this.abi = function(oY) {
		if (oY !== b1.z.fJ) b1.z.close(oY, 3239);
		else if (bq.fI) {
			bq.z.aJY[0] = bK.sf(20), bq.z.aJY[1] = bK.sf(20);
			for (var ac7 = bK.sf(20), g4 = 0; g4 < ac7; g4++) {
				var id = bK.sf(3);
				0 === id ? bq.pm.aHr(bK.sf(30), bJ.a0a.a0p(5), 0, 1234566, 127, 0, bK.sf(18), 0, bK.sf(12), 0, 0, 0) : 1 === id ? bq.pm.aIB(bK.sf(16), bK.sf(16), bK.sf(13), bK.sf(1)) : 2 === id ? bq.pm.aI7(bK.sf(16), bJ.a0a.a0p(5)) : 3 === id ?
					bq.pm.aI9(bK.sf(16)) : 4 === id ? bq.pm.aI0(bK.sf(16), bK.sf(4), bK.sf(30), bK.sf(7), bK.sf(16), bK.sf(11), bK.sf(18)) : 5 === id ? bq.pm.aI2(bK.sf(16), bK.sf(1)) : 6 === id && bq.pm.aI1(bK.sf(16), bK.sf(6))
			}
			bq.z.wY = bK.sf(10);
			for (var ac8 = bK.sf(10), aC = 0; aC < ac8; aC++) {
				var xv = bK.sf(13),
					aZl = bK.sf(10),
					aIF = bK.sf(10),
					aHZ = bq.z.aHZ;
				if (aHZ.aIF = aIF, aHZ.a5J = bK.sf(10), aHZ.aIt = bK.sf(10), aHZ.fR = bK.sf(6), aHZ.mapSeed = bK.sf(14), aHZ.xC = bK.sf(4), aHZ.xd = bK.sf(1), aHZ.spawningSeed = bK.sf(14), aHZ.a4S = bK.sf(30) - 1, aHZ.aIG = null, 8 === aHZ.xC) {
					aHZ.aIG = new Array(aIF);
					for (g4 = 0; g4 < aIF; g4++) aHZ.aIG[g4] = bK.sf(9)
				}
				xv = bq.pm.aIC(xv);
				if (bq.aHZ.e3(xv, aZl, aIF)) return;
				bq.pm.aII(xv, aZl, aIF, aHZ.aIG)
			}
			var ac9 = bK.sf(13);
			ac9 && bq.pm.aIL(ac9), bq.tX.aIR(), bq.z.aIh()
		} else b1.z.close(oY, 3251)
	}, this.abn = function(oY) {
		oY === b1.z.fJ && bq.fI && bq.tX.aIa(bK.sf(13), bK.sf(1))
	}, this.abj = function(oY) {
		if (oY !== b1.z.fJ) b1.z.close(oY, 3272);
		else if (bq.fI) {
			for (var pu = bq.z.pu, yA = (bq.z.pv = bK.sf(20), bK.sf(6)), aC = 0; aC < yA; aC++) {
				var aLQ = acA();
				bq.ps.aLP(aLQ), bq.ps.aLV(aLQ), pu.push(aLQ)
			}
			pu.length > bq.z.q3 && pu.splice(0, pu.length - bq.z.q3), bq.z.aJg()
		} else b1.z.close(oY, 3273)
	}, this.abk = function(oY) {
		var aLQ;
		oY !== b1.z.fJ ? b1.z.close(oY, 3276) : bq.fI ? (aLQ = acA(), bq.ps.aLP(aLQ), bq.message.aIT(aLQ)) : b1.z.close(oY, 3277)
	}
}

function aay() {
	this.aba = function() {
		for (var id = bK.sf(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.sf(8), bK.sf(8), bK.sf(8)]);
		var ex = bJ.a0a.a0p(8);
		bX.ee.eu({
			id: id,
			colors: colors,
			ex: ex
		})
	}, this.abl = function(oY) {
		var acC = bK.sf(3),
			fo = bK.sf(5),
			fo = bl.acD.acE(fo, bK.sf(30), bK.sf(30), bK.sf(30));
		b1.es.acF(oY, fo, acC, 0)
	}, this.abb = function(oY) {
		this.abl(oY), bm.rv.q1(183, bI.fC.vn(bI.fC.vo(15))), 0 === oY && 0 === bm.buffer.data[105].value.length ? b1.es.et(0) : b1.aWF.acG(oY), 4 === b1.z.ab8(oY).acH() ? 6 === ab.a5B() && b1.aIX.aM3(oY) : 5 !== b1.z.ab8(oY).acH() || 8 !== ab
			.a5B() && 10 !== ab.a5B() || b1.rt.aMX()
	}, this.abd = function(oY) {
		var id = bK.sf(6);
		1 === id ? (bm.rv.q1(160, bK.sf(30)), b1.z.abN(oY), aU.aE4 || b1.es.et(1), bA.aH4(), 8 === u.vl && u.a5F().aYb()) : 21 === id ? 8 === u.vl && u.a5F().aH8(17) : 22 === id && (bm.rv.q1(106, bm.buffer.data[110].value), bm.rv.q1(110, ""),
			8 === u.vl) && u.a5F().aH8(15)
	}, this.abh = function() {
		var fl = bK.sf(16),
			acI = bK.sf(16);
		if (bK.ac2(55 + 10 * fl + 16 * acI)) {
			for (var h = [], aC = 0; aC < fl; aC++) h.push(bJ.a0Y.a0c(bK.sf(10)));
			bA.aH7(h)
		} else b1.z.aMc(0, 3270)
	}, this.abm = function(oY) {
		for (var acC = bK.sf(3), fo = bK.sf(5), acC = {
				acC: acC,
				u9: bl.acD.acE(fo, bK.sf(30), bK.sf(30), bK.sf(30))
			}, fo = bK.ac0(32), acJ = [], aC = 0; aC < 17; aC++) acJ.push(new Uint8Array(bK.sf(16)));
		for (aC = 0; aC < 17; aC++)
			for (var h = acJ[aC], fl = h.length, ib = 0; ib < fl; ib++) h[ib] = bK.ac0(8);
		bx.show(acJ, fo, oY, acC)
	}
}

function aao() {
	this.ab9 = function(oY, ab7) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, ab7 ? 1 : 0), bG.a9(3, 0 === aE.a3z ? bq.fI ? 6 : 0 : aE.hu ? 1 : aE.lO ? 7 : aE.lM < 7 ? 2 : 8 === aE.lM ? 4 : 9 === aE.lM ? 5 : 3), b1.z.send(oY, bG.aD)
	}, this.aMX = function() {
		bG.a8(59), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.fJ), bG.a9(10, ay.aIt), bG.a9(10, ay.aML), bG.a9(10, m.eJ), bG.a9(14, m.e7), b1.z.send(b1.z.a5J, bG.aD)
	}, this.ru = function(fX) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fX), b1.z.send(b1.z.a5J, bG.aD)
	}, this.rw = function(jM, kD) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, jM), bG.a9(10, kD), b1.z.send(b1.z.a5J, bG.aD)
	}, this.s0 = function(jM, ry) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, jM), bG.a9(9, ry), b1.z.send(b1.z.a5J, bG.aD)
	}, this.s2 = function(jM, s1) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, jM), bG.a9(27, s1), b1.z.send(b1.z.a5J, bG.aD)
	}, this.s6 = function(jM, o4) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, jM), bG.a9(16, o4), b1.z.send(b1.z.a5J, bG.aD)
	}, this.sC = function(o4, s1) {
		bG.a8(48), bG.a9(1, 1), bG.a9(4, 11), bG.a9(16, o4), bG.a9(27, s1), b1.z.send(b1.z.a5J, bG.aD)
	}, this.sE = function(kD) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, kD), b1.z.send(b1.z.a5J, bG.aD)
	}, this.sI = function(eU) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eU), b1.z.send(b1.z.a5J, bG.aD)
	}, this.sK = function(sJ) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, sJ), b1.z.send(b1.z.a5J, bG.aD)
	}, this.sM = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a5J, bG.aD)
	}, this.sN = function(jM, fX, kD) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, jM), bG.a9(10, kD), bG.a9(22, fX), b1.z.send(b1.z.a5J, bG.aD)
	}, this.sV = function(acK, acL) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, acL), bG.a9(10, acK), b1.z.send(b1.z.a5J, bG.aD)
	}, this.sY = function(aAs) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, aAs), b1.z.send(b1.z.a5J, bG.aD)
	}, this.sc = function(acM, target) {
		var aC, fl = acM.length;
		for (bG.a8(14 + 9 * fl), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fl; aC++) bG.a9(9, acM[aC]);
		b1.z.send(b1.z.a5J, bG.aD)
	}
}

function aar() {
	this.acN = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.es.acO(), b1.z.send(0, bG.aD)
	}, this.acG = function(oY) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.fC.a0o(bm.buffer.data[105].value, 5), bJ.fC.a0o(bm.buffer.data[106].value, 15), b1.z.send(oY, bG.aD)
	}, this.aYc = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.fC.a0o(bm.buffer.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aWk = function(a7v) {
		var fl = a7v.pW.length;
		bG.a8(21 + 16 * fl), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a7v.action), bG.a9(8, fl), bI.a0Y.a0n(a7v.pW), b1.z.send(0, bG.aD)
	}, this.aaC = function(a0N, colors, acQ, ex) {
		bH.dv(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(a0N, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var g4 = 0; g4 < 3; g4++) bH.a9(8, colors[aC][g4]);
		a0N = bA.data.aHB(acQ.trim());
		bH.a9(8, -1 === a0N ? 255 : a0N), bI.a0a.a3T(ex.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.acR())
	}, this.aWL = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.fC.a0o(data.pe, 5), b1.z.send(0, bG.aD)
	}, this.aWG = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.fC.a0o(data.pe, 5), bG.aby(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aas() {
	this.sd = function() {
		for (var fl = aE.l4, a3o = bU.result.a3o, lz = a3o.length, a4e = (bG.a8(17 + 16 * fl + 33 * lz), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, lz), bG.a9(1, +(2 === aE.a3w)), bG.a9(1, aE.a4I % 2), ah.a4e), aC = 0; aC < fl; aC++) bG.a9(16, a4e[
		aC]);
		for (var hZ = ah.hZ, aC = 0; aC < lz; aC++) {
			var hJ = a3o[aC];
			bG.a9(9, hJ), bG.a9(24, hZ[hJ])
		}
		b1.z.send(b1.z.a5J, bG.aD)
	}
}

function aat() {
	this.aYT = function(w2, w3, w4) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, w2), bG.a9(1, +(w3 < 0)), bG.a9(1, +(w4 < 0)), bG.a9(30, Math.abs(w3)), bG.a9(30, Math.abs(w4)), b1.z.send(0, bG.aD)
	}, this.aYU = function(w2, aYV, aYW) {
		bG.a8(18 + 16 * aYV.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, w2), b1.es.acS(aYV), bG.a9(30, aYW), b1.z.send(0, bG.aD)
	}, this.aYZ = function(w2, aYV, aYW) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, w2), bJ.fC.a0o(aYV, 5), bG.a9(30, aYW), b1.z.send(0, bG.aD)
	}, this.aYX = function(aXX, a4k) {
		for (var fl = a4k.length, ii = 0, aC = 0; aC < fl; aC++) ii += a4k[aC].length;
		for (bG.a8(21 + 3 * fl + 16 * ii), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aXX), bG.a9(4, fl), bG.a9(7, ii), aC = 0; aC < fl; aC++) bG.a9(3, a4k[aC].length), bI.a0Y.a0n(a4k[aC]);
		b1.z.send(0, bG.aD)
	}, this.aYY = function(aXX, w3, w4) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aXX), bG.a9(1, +(w3 < 0)), bG.a9(1, +(w4 < 0)), bG.a9(20, Math.abs(w3)), bG.a9(20, Math.abs(w4)), b1.z.send(0, bG.aD)
	}
}

function aap() {
	this.aM3 = function(oY) {
		var username = bm.buffer.data[122].value.slice(0, 20),
			username = (bG.a8(22 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.eJ), b1.es.acS(username), bD.color.a6y(bm.z.a0C()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.fJ = oY, b1.z.send(oY, bG.aD)
	}, this.aIY = function(acT, a7v) {
		bH.dv(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, acT), 2 === acT ? bH.a9(30, a7v) : 4 === acT ? (bH.a9(13, a7v.xv), bH.a9(1, a7v.xy)) : 3 === acT ? bI.a0a.a3T(a7v, 8, bH) : 5 === acT ? (bH.a9(3, a7v.id), bH.a9(3, a7v.value), bH.a9(30, a7v
			.pe)) : 6 === acT && (bH.a9(2, a7v.xC), bH.a9(30, a7v.pe)), b1.z.send(b1.z.fJ, bH.acR())
	}
}

function aaq() {
	this.abM = function(oY) {
		var aca;
		bG.a8(55 + bl.acU.sf()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.e7), bG.a9(4, a1.id), bG.a9(7, a1.eC), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), aca = bA.aHA(), bG.a9(8, aca[0]), bG.a9(8, aca[1]), bl.acU
		.a3T(), b1.z.send(oY, bG.aD)
	}, this.acF = function(oY, u9, acC, acW) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, acC), bG.a9(30, u9), bG.a9(30, acW), b1.z.send(oY, bG.aD)
	}, this.fK = function(fF) {
		bH.dv(), bH.a9(1, 0), bH.a9(6, 6), bI.a0a.a3T(fF, 16, bH), b1.z.send(b1.z.fJ, bH.acR())
	}, this.et = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.yV = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aH6 = function(id, pW) {
		var fl = Math.min(pW.length, 63);
		bG.a8(19 + 16 * fl), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fl), bI.a0Y.a0n(pW), b1.z.send(0, bG.aD)
	}, this.acX = function(aZp, q5) {
		bG.a8(7 + 26 * q5.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < q5.length; aC++) bG.a9(16, q5[aC][0]), bG.a9(10, q5[aC][1]);
		b1.z.send(aZp, bG.aD)
	}, this.abS = function(acY, acZ) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, acY), bG.a9(12, acZ), b1.z.send(b1.z.a5J, bG.aD)
	}, this.acS = function(username) {
		bG.a9(5, username.length), bI.a0Y.a0n(username)
	}, this.pH = function(pI, op, oY, pow) {
		bG.a8(88), bG.a9(1, 0), bG.a9(6, 8), bG.a9(3, pow.acC), bG.a9(30, pow.u9), bG.aby(32, op), bG.a9(16, pI), b1.z.send(oY, bG.aD)
	}
}

function abK() {
	var acb, acc, b, acd = ["wss://", "/s50/", "/s51/", "/s52/"],
		ace = 0;

	function abL() {
		b1.z.abL(acb, acc)
	}

	function ach(e) {
		b1.aAs.aMe(acb, new Uint8Array(e.data))
	}

	function aci() {}

	function abR(e) {
		b1.z.abR(acb, e)
	}
	this.dv = function(eU, a5G, abG) {
		acb = eU, acc = a5G,
			function(abG) {
				abG = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : m.e8 ? "ws://localhost:" + (7130 + acb) + "/" : abG ? acd[0] + "game.territorial.io/x0" + acb + "/" : acd[0] + b1.z.ab3[acb] + acd[1 + m.e6];
				(b = new WebSocket(abG)).binaryType = "arraybuffer", b.onopen = abL, b.onmessage = ach, b.onclose = abR, b.onerror = aci
			}(abG)
	}, this.acg = function() {
		return b.readyState === b.CONNECTING
	}, this.er = function() {
		return b.readyState === b.OPEN
	}, this.abB = function() {
		return ace
	}, this.abN = function() {
		ace = 1
	}, this.abI = function() {
		return this.acg() || this.er()
	}, this.abJ = function(a5G) {
		acc = a5G
	}, this.acH = function() {
		return acc
	}, this.send = function(aD) {
		this.er() && b.send(aD)
	}, this.close = function(abP) {
		this.abI() && (this.ub(), b.close(abP))
	}, this.ub = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dV() {
	var gap, acj = !1,
		xD = 0,
		j = 0,
		vq = 0,
		canvas = null,
		p4 = null,
		a6X = null;

	function acn() {
		for (var aC = aE.a1B; 0 <= aC; aC--) a6X[aC] = 0;
		for (aC = am.la - 1; 0 <= aC; aC--) a6X[bj.fj[am.lf[aC]]] += ah.hZ[am.lf[aC]];
		acj = !0
	}

	function acl() {
		for (var acs, acq = 0, fl = 0, ev = Math.floor(j / 2), eT = Math.floor(vq / 2), acr = 1.5 * Math.PI, aC = aE.a1B; 0 <= aC; aC--) fl += a6X[aC], 0 === a6X[aC] && acq++;
		if (acj = !1, p4.clearRect(0, 0, j, j), 0 < fl)
			if (acq === aE.a1B) {
				for (aC = aE.a1B; 0 <= aC; aC--)
					if (0 < a6X[aC]) {
						! function(aC, ev, eT) {
							p4.fillStyle = bj.acw[bj.lR[aC]], p4.beginPath(), p4.arc(ev, ev, eT, 0, 2 * Math.PI), p4.fill()
						}(aC, ev, eT);
						break
					}!
				function(ev) {
					var fontSize = ev / 3;
					p4.font = bD.tc.vB(1, fontSize), p4.fillStyle = bE.qO, p4.fillText("100%", ev, ev + .1 * fontSize)
				}(ev)
			} else {
				for (aC = 0; aC <= aE.a1B; aC++) 0 < a6X[aC] && (acs = acr + 2 * Math.PI * a6X[aC] / fl, acv(p4, bj.acw[bj.lR[aC]], ev, eT, acr, acs), function(ev, eT, acr, acs) {
					var gD = (acs - acr) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eT * Math.min(gD, .37);
					fontSize < 8 || (acr = (acr + acs) / 2, acs = (__fx.settings.detailedTeamPercentage ? (100 * gD).toFixed(2) : Math.floor(100 * gD + .5)) + "%", eT *= .525 - Math.max(.6 * (gD - .7), 0), p4.font = bD.tc.vB(1, fontSize), p4
						.fillStyle = bE.qO, p4.fillText(acs, ev + Math.cos(acr) * eT, ev + Math.cos(acr + 1.5 * Math.PI) * eT))
				}(ev, eT, acr, acs), 0 !== aC && acy(p4, ev, eT, acr), acr = acs);
				acy(p4, ev, eT, 1.5 * Math.PI)
			} acz(p4, ev, eT)
	}

	function acv(io, color, ev, eT, acr, acs) {
		io.fillStyle = color, io.beginPath(), io.arc(ev, ev, eT, acr, acs), io.lineTo(ev, ev), io.fill()
	}

	function acy(io, ev, eT, ad0) {
		io.beginPath(), io.moveTo(ev, ev), io.lineTo(ev + Math.cos(ad0) * eT, ev + Math.cos(ad0 + 1.5 * Math.PI) * eT), io.stroke()
	}

	function acz(io, ev, eT) {
		io.beginPath(), io.arc(ev, ev, eT, 0, 2 * Math.PI), io.stroke()
	}
	this.dv = function() {
		if (aE.ie) {
			xD = 0, a6X = new Uint32Array(aE.a1B + 1);
			for (var aC = aE.a1B; 0 <= aC; aC--) a6X[aC] = 0;
			for (aC = am.la - 1; 0 <= aC; aC--) a6X[bj.fj[am.lf[aC]]] += 1;
			this.resize()
		} else a6X = p4 = canvas = null
	}, this.aCd = function() {
		return j
	}, this.resize = function() {
		aE.ie && (j = Math.floor(.95 * (a1.a2.iv() && !aE.oA ? .18 * i.min : .13 * i.iw)), j = (j *= 1 + (.5 + .2 * a1.a2.iv()) * aE.oA) + j % 2, gap = Math.max(1, .015 * j), vq = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (p4 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, p4.strokeStyle = bE.qO, bD.tc.textAlign(p4, 1), bD.tc.textBaseline(p4, 1), acl())
	}, this.lb = function(acm) {
		acm && acn();
		var em, acm = this.ld();
		return bj.lR[acm] || (acm = function() {
			for (var lc = -1, aC = aE.a1B; 1 <= aC; aC--)(-1 === lc || a6X[aC] > a6X[lc]) && (lc = aC);
			return lc
		}(), em = ah.hZ[mf[0]], -1 !== acm && a6X[acm] > em) ? a6X[acm] : em
	}, this.a4w = function() {
		return xD = 31, this.eq(), this.ld()
	}, this.ld = function() {
		for (var lc = 0, aC = aE.a1B; 0 < aC; aC--) a6X[aC] > a6X[lc] && (lc = aC);
		return lc
	}, this.l5 = function(acp) {
		for (var hE = 0, lf = am.lf, fj = bj.fj, fl = am.la, gP = bR.gP, aC = 0; aC < fl; aC++) {
			var hJ = lf[aC];
			fj[hJ] === acp && (gP[hE++] = hJ)
		}
		bR.gG[0] = hE
	}, this.le = function(acp) {
		for (var hE = 0, lf = am.lf, fj = bj.fj, fl = am.la, gP = bR.gP, aC = 0; aC < fl; aC++) {
			var hJ = lf[aC];
			fj[hJ] !== acp && (gP[hE++] = hJ)
		}
		bR.gG[0] = hE
	}, this.a7V = function() {
		for (var hE = 0, aC = aE.a1B; 0 <= aC; aC--) hE += 0 < a6X[aC];
		return hE
	}, this.eq = function() {
		aE.ie && 32 <= ++xD && (xD = 0, acn())
	}, this.nT = function() {
		aE.ie && acj && acl()
	}, this.xh = function(io, hE, size) {
		var ev = size >> 1,
			eT = Math.floor(.4 * size),
			acr = 1.5 * Math.PI;
		io.clearRect(0, 0, size, size), io.lineWidth = .042 * size, io.strokeStyle = bE.qO;
		for (var aC = 0; aC < hE; aC++) {
			var acs = acr + 2 * Math.PI / hE;
			acv(io, bj.acw[aC + 1], ev, eT, acr, acs), 0 !== aC && acy(io, ev, eT, acr), acr = acs
		}
		acy(io, ev, eT, 1.5 * Math.PI), acz(io, ev, eT)
	}, this.z8 = function() {
		aE.ie && (aE.oA ? z9.drawImage(canvas, bf.gap, bf.gap) : z9.drawImage(canvas, bf.gap, aCc + 2 * bf.gap))
	}
}

function dm() {
	function ad6(fs, fl, fu, a3d, aDt, gB) {
		if (!(fu < 1 || aDt < fu))
			for (var aC = 0; aC <= fl; aC++) {
				var fP = bP.jQ(fs, fu);
				if (a3d(fP)) return fP >> 2;
				fs += gB
			}
		return -1
	}

	function adA(fu, fl, fs, a3d, ad4, gB) {
		if (!(fs < 1 || ad4 < fs)) {
			fl = Math.max(fl, 0);
			for (var aC = 0; aC <= fl; aC++) {
				var fP = bP.jQ(fs, fu);
				if (a3d(fP)) return fP >> 2;
				fu += gB
			}
		}
		return -1
	}

	function adE(jD, jE, ad1) {
		return -1 !== jE && (-1 === jD || bP.jF(jE, ad1) < bP.jF(jD, ad1)) ? jE : jD
	}
	this.iB = function(ad1) {
		return this.a43(ad1, function(fP) {
			return ad.fg(fP)
		})
	}, this.iH = function(ad1) {
		return this.a43(ad1, function(fP) {
			return ad.aNM(fP, aE.fV)
		})
	}, this.a43 = function(ad1, a3d) {
		return function(ad1, ad2, a3d) {
			for (var i1 = bP.ft(ad1), i3 = bP.fv(ad1), ad4 = bV.fw - 2, aDt = bV.fx - 2, ad5 = -1, fo = 0; fo < ad2; fo++) {
				var aDs = Math.max(i1 - fo, 1),
					aSB = Math.max(i3 - fo, 1),
					a1m = Math.min(i1 + fo, ad4),
					a1l = Math.min(i3 + fo, aDt),
					jD = ad6(i1, a1m - i1, i3 - fo, a3d, aDt, 1),
					jE = ad6(i1 - 1, i1 - aDs - 1, i3 - fo, a3d, aDt, -1),
					a1m = ad6(i1, a1m - i1, i3 + fo, a3d, aDt, 1),
					aDs = ad6(i1 - 1, i1 - aDs - 1, i3 + fo, a3d, aDt, -1),
					ad9 = adA(i3, a1l - i3 - 1, i1 - fo, a3d, ad4, 1),
					adB = adA(i3 - 1, i3 - aSB - 2, i1 - fo, a3d, ad4, -1),
					a1l = adA(i3, a1l - i3 - 1, i1 + fo, a3d, ad4, 1),
					aSB = adA(i3 - 1, i3 - aSB - 2, i1 + fo, a3d, ad4, -1);
				if (ad5 = adE(ad5, jD, ad1), ad5 = adE(ad5, jE, ad1), ad5 = adE(ad5, a1m, ad1), ad5 = adE(ad5, aDs, ad1), ad5 = adE(ad5, ad9, ad1), ad5 = adE(ad5, adB, ad1), ad5 = adE(ad5, a1l, ad1), 0 <= (ad5 = adE(ad5, aSB, ad1)) && fo *
					fo >= bP.jF(ad5, ad1)) return ad5
			}
			return -1
		}(ad1, bP.it(), a3d)
	}
}

function aTT(pW) {
	var k, adF = new adG,
		v0 = document.createElement("div");

	function adJ() {
		v0.style.opacity = "0", setTimeout(aMY, adF.adI)
	}

	function aMY() {
		u.removeChild(document.body, v0), adF = v0 = null
	}
	k = bD.tc.ud(adF.adH, .5), v0.textContent = pW, v0.style.position = "fixed", v0.style.zIndex = adF.zIndex, v0.style.left = "50%", v0.style.top = .5 * k + "px", v0.style.transform = "translateX(-50%)", v0.style.maxWidth = "90%", v0.style
		.boxSizing = "border-box", v0.style.padding = .3 * k + "px " + .6 * k + "px", v0.style.backgroundColor = bE.qK, v0.style.color = bE.qO, v0.style.font = bD.tc.vB(0, .6 * k), v0.style.textAlign = "center", v0.style.userSelect = "none", v0.style
		.pointerEvents = "none", v0.style.transition = "opacity " + adF.adI + "ms", bD.tc.tl(v0), document.body.appendChild(v0), setTimeout(adJ, adF.adK)
}

function adG() {
	this.adK = 5e3, this.adI = 600, this.zIndex = "1000", this.adH = .03
}

function dE() {
	function adL(key, size) {
		var aaE;
		return "undefined" == typeof URLSearchParams || (aaE = window.location.search, "string" != typeof(aaE = new URLSearchParams(aaE).get(key))) || aaE.length < 1 ? null : bJ.fC.a0h(aaE, size)
	}
	this.e3 = function() {
		if (0 !== a1.id) return !1;
		var a4S = adL("r", 6);
		if (! function() {
				var value = adL("account", 5);
				if (!value && !(value = adL("a", 5))) return void bL.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (bL.clear(), u.v(8, u.vl, new vm(1e3, {
					action: 0,
					pe: value,
					vk: 0
				})), !0) : (bL.clear(), !1)
			}()) {
			if (!this.clear()) return !1;
			if (!a4S) return !1;
			this.aX3("r", a4S), u.v(3, 0, L(553)), bC.adN(a4S)
		}
		return !0
	}, this.clear = function() {
		var a56 = new URL(window.location.href);
		a56.search = "";
		try {
			return history.replaceState(null, "", a56.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aX3 = function(key, value) {
		if (0 === a1.id) try {
			var a56 = new URL(window.location.href),
				hJ = a56.searchParams;
			hJ.set(key, value), a56.search = hJ.toString(), history.replaceState(null, "", a56.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ct() {
	var adP, h;
	this.dv = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.gC(32768 * aC, 100);
		this.a8l(0)
	}, this.value = function(hJ) {
		return h[hJ]
	}, this.aRl = function() {
		return bO.gC(adP - 1, 2)
	}, this.a8l = function(aRe) {
		adP = 2 * aRe % 32768 + 1
	}, this.random = function() {
		return adP = 167 * adP % 32768
	}, this.kL = function(nb) {
		return bO.gC(nb * this.random(), 32768)
	}, this.kw = function(hJ) {
		return 0 !== hJ && this.random() < this.value(hJ)
	}, this.jh = function(g4, g5) {
		return g4 + this.kL(g5 - g4)
	}
}

function dA() {
	this.sr = new adQ, this.a8v = new adR, this.aP7 = new adS, this.dv = function() {
		aE.hu || this.sr.dv()
	}, this.eq = function() {
		aE.hu || (this.sr.eq(), 3 !== u.vl) || bi.l1() % 15 != 5 && 2 !== aE.a3z || u.a5F().aaF()
	};
	var aYd = 0;

	function adW(pW) {
		3 === u.vl && u.a5F().zO(pW)
	}
	__fx.replay.restartReplay = () => this.aaI(), this.aaI = function() {
		var adU, adV, fR = bV.a96(aE.data);
		2 === aE.data.mapType || bV.aJu.aMZ(fR) ? (adU = 0 !== aE.a3z, adV = aE.a8g, adU || ab.aMD(), aE.a8e.a95(), aE.data.canvas = null, b1.z.close(b1.z.a5J, 3257), b1.z.a5J = 0, aE.data.isReplay = 1, aE.a8i(), adU && (aE.a8g = adV)) : aYd || (
			aYd = 1, bV.aJu.aTS(fR, function(aMZ) {
				aYd = 0, aMZ && bC.aaI()
			}))
	}, this.aaH = function(pW) {
		var aC = pW.indexOf("=");
		return 0 <= aC ? pW.substring(aC + 1) : pW
	}, __fx.replayHistory.load = saved => {
		saved = bC.aaH(saved), bC.aP7.a0p(saved) && bC.aaI()
	}, this.adN = function(id) {
		var aTG = new XMLHttpRequest;
		aTG.open("GET", "https://" + b1.z.a4R() + "/log/?r=" + id), aTG.onload = function() {
			var pW = 200 === aTG.status ? aTG.responseText : "";
			adW(pW.length ? pW : L(554))
		}, aTG.onerror = function() {
			adW(L(555))
		}, aTG.send()
	}, this.aaG = function(pW) {
		return pW
	}
}

function adQ() {
	this.adX = null, this.adY = null, this.adZ = null, this.ada = null, this.adb = null, this.adc = null, this.a8u = "";
	var add = 0;
	this.dv = function() {
		this.adX = [], this.adY = [], this.adZ = [], this.ada = [], this.adb = [0], this.adc = [0], add = 0, this.a8u = ""
	}, this.ss = function(id, gU, gW, gY) {
		aE.hu || 2 === aE.a3z || (0 === this.adb[add] && (this.adc[add] ? (this.adb.push(1), this.adc.push(0), add++) : this.adb[add] = 1), this.adX.push(id), this.adY.push(gU), this.adZ.push(void 0 === gW ? 0 : gW), this.ada.push(void 0 === gY ?
			0 : gY), this.adc[add]++)
	}, this.eq = function() {
		0 === this.adb[add] ? this.adc[add]++ : (this.adb.push(0), this.adc.push(0), add++)
	}
}

function adS() {
	var ade = 0;

	function adi(pW, id) {
		console.log(pW), ade || (id ? 1 === id ? aO.aAG = L(238) + ": " + pW : u.v(4, 3, new w(L(557), pW, 1)) : u.v(4, 3, new w("⚠️ " + L(556), pW, 1)))
	}
	this.a0p = function(pW, adf) {
		var j5, q5;
		return ade = adf, bJ.fC.a0k(bJ.fC.a0i(bJ.fC.a0g(pW))), aO.aAG = "", !! function() {
			if (bK.size < 10) adi("File Too Small");
			else {
				var adk = bK.sf(12),
					s = (adk !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, adi(s = (s += "   Found: " + adk) + ("   Compatible at " + b1.z.a4R() + "/" + adk), 1)), bK.sf(12)),
					adl = bK.sf(31);
				if (adl !== bK.size) adi("Size Error: Stated Size " + adl + " Actual Size " + bK.size);
				else if (function(k, adk) {
						for (var hJ = bK.aD, fl = bK.size, acZ = adk, aC = 3; aC < fl; aC++) acZ = acZ + hJ[aC] & 4095;
						return acZ === k || (adi("Hash Error: " + acZ + " " + k + " " + fl), !1)
					}(s, adk)) return 1
			}
			return
		}() && (j5 = bK, (q5 = aE.data = new a8d).mapType = j5.sf(2), q5.mapProceduralIndex = j5.sf(8), q5.mapRealisticIndex = j5.sf(8), q5.mapSeed = j5.sf(14), q5.mapName = j5.adn(5), 2 === q5.mapType && j5.ado(), q5.passableWater = j5.sf(
			1), q5.passableMountains = j5.sf(1), q5.playerCount = j5.sf(10), q5.humanCount = j5.sf(10), q5.selectedPlayer = j5.sf(9), q5.gameMode = j5.sf(1), q5.playerMode = j5.sf(2), q5.battleRoyaleMode = j5.sf(2), q5.numberTeams = j5.sf(4),
			q5.isZombieMode = j5.sf(1), q5.isContest = j5.sf(1), q5.isReplay = j5.sf(1), q5.elo = j5.adp(2, 14, 2), q5.colorsType = j5.sf(1), q5.colorsPersonalized = j5.sf(1), q5.colorsData = j5.adp(10, 18, 512), q5.selectableColor = j5.sf(
			1), q5.teamPlayerCount = j5.adp(4, 10, 9), q5.neutralBots = j5.sf(1), q5.botDifficultyType = j5.sf(2), q5.botDifficultyValue = j5.sf(4), q5.botDifficultyTeam = j5.adp(4, 4, 9), q5.botDifficultyData = j5.adp(10, 4, 512), q5
			.spawningType = j5.sf(2), q5.spawningSeed = j5.sf(14), q5.spawningData = j5.adp(11, 12, 1024), q5.selectableSpawn = j5.sf(1), q5.playerNamesType = j5.sf(2), q5.playerNamesData = j5.adq(10, 5, 512), q5.selectableName = j5.sf(1), q5
			.aIncomeType = j5.sf(2), q5.aIncomeValue = j5.sf(8), q5.aIncomeData = j5.adp(10, 8, 512), q5.tIncomeType = j5.sf(2), q5.tIncomeValue = j5.sf(8), q5.tIncomeData = j5.adp(10, 8, 512), q5.iIncomeType = j5.sf(2), q5.iIncomeValue = j5
			.sf(8), q5.iIncomeData = j5.adp(10, 8, 512), q5.sResourcesType = j5.sf(2), q5.sResourcesValue = j5.sf(11), q5.sResourcesData = j5.adp(10, 11, 512), q5.a93 = j5.adp(10, 30, 0), !! function() {
				var j5 = bK,
					aQG = j5.sf(5),
					adr = j5.sf(30),
					ads = j5.sf(30);
				if (adr + ads > 8 * j5.size) return void adi("Corrupted File");
				return function(fl) {
						var adv = new Uint8Array(fl),
							adw = new Uint16Array(fl),
							adx = new Uint32Array(fl),
							ady = new Uint32Array(fl);
						bC.sr.adX = adv, bC.sr.adY = adw, bC.sr.adZ = adx, bC.sr.ada = ady;
						for (var aC = 0; aC < fl; aC++) {
							var id = bK.sf(4);
							adv[aC] = id, adw[aC] = bK.sf(9), 0 === id ? adx[aC] = bK.sf(22) : 1 === id ? (adx[aC] = bK.sf(10), ady[aC] = bK.sf(10)) : 2 === id ? (adx[aC] = bK.sf(10), ady[aC] = bK.sf(9)) : 3 === id ? (adx[aC] = bK.sf(10),
								ady[aC] = bK.sf(27)) : 4 === id ? (adx[aC] = bK.sf(10), ady[aC] = bK.sf(16)) : 5 === id || 6 === id ? adx[aC] = bK.sf(10) : 7 === id ? adx[aC] = bK.sf(1) : 10 === id ? (adx[aC] = bK.sf(20), ady[aC] = bK.sf(
								22)) : 11 === id && (adx[aC] = bK.sf(16), ady[aC] = bK.sf(27))
						}
					}(adr),
					function(fl, aQG) {
						var adb = new Uint8Array(fl),
							adc = new Array(fl);
						adc.fill(0), bC.sr.adb = adb, bC.sr.adc = adc;
						for (var aC = 0; aC < fl; aC++) adb[aC] = bK.sf(1), adc[aC] = bK.sf(aQG)
					}(ads, aQG), 1
			}()) && (bK.eU < 8 * bK.size - 13 || bK.eU > 8 * bK.size ? (adi("Out Of Bounds Error: " + bK.eU + " " + 8 * bK.size), !1) : (bC.sr.a8u = pW, 2 !== aE.data.mapType || (adi("Load base64 image...", 2), adf)))
	}, this.aP8 = function(aOA, adj) {
		var a6s = document.createElement("canvas"),
			io = a6s.getContext("2d", {
				willReadFrequently: !0
			});
		if (a6s.width = aOA.width, a6s.height = aOA.height, io.drawImage(aOA, 0, 0), aE.data.canvas = a6s, ade || adj) return aE.a3z ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aaI()
	}
}

function adR() {
	this.a3T = function() {
		var aQG = function() {
				for (var adc = bC.sr.adc, fl = adc.length, max = 0, aC = 0; aC < fl; aC++) max = Math.max(max, adc[aC]);
				return aUE(Math.max(max, 1))
			}(),
			j = (q5 = aE.data, (j = bH).dv(), j.a9(12, m.rVersion), j.eU += 43, j.a9(2, q5.mapType), j.a9(8, q5.mapProceduralIndex), j.a9(8, q5.mapRealisticIndex), j.a9(14, q5.mapSeed), j.ae5(q5.mapName, 5), 2 === q5.mapType && j.ae6(q5.canvas),
				j.a9(1, q5.passableWater), j.a9(1, q5.passableMountains), j.a9(10, q5.playerCount), j.a9(10, q5.humanCount), j.a9(9, q5.selectedPlayer), j.a9(1, q5.gameMode), j.a9(2, q5.playerMode), j.a9(2, q5.battleRoyaleMode), j.a9(4, q5
					.numberTeams), j.a9(1, q5.isZombieMode), j.a9(1, q5.isContest), j.a9(1, q5.isReplay), j.e1(q5.elo, 2, 14), j.a9(1, q5.colorsType), j.a9(1, q5.colorsPersonalized), j.e1(q5.colorsData, 10, 18), j.a9(1, q5.selectableColor), j.e1(
					q5.teamPlayerCount, 4, 10), j.a9(1, q5.neutralBots), j.a9(2, q5.botDifficultyType), j.a9(4, q5.botDifficultyValue), j.e1(q5.botDifficultyTeam, 4, 4), j.e1(q5.botDifficultyData, 10, 4), j.a9(2, q5.spawningType), j.a9(14, q5
					.spawningSeed), j.e1(q5.spawningData, 11, 12), j.a9(1, q5.selectableSpawn), j.a9(2, q5.playerNamesType), j.ae7(q5.playerNamesData, 10, 5), j.a9(1, q5.selectableName), j.a9(2, q5.aIncomeType), j.a9(8, q5.aIncomeValue), j.e1(q5
					.aIncomeData, 10, 8), j.a9(2, q5.tIncomeType), j.a9(8, q5.tIncomeValue), j.e1(q5.tIncomeData, 10, 8), j.a9(2, q5.iIncomeType), j.a9(8, q5.iIncomeValue), j.e1(q5.iIncomeData, 10, 8), j.a9(2, q5.sResourcesType), j.a9(11, q5
					.sResourcesValue), j.e1(q5.sResourcesData, 10, 11), j.e1(q5.a93, 10, 30), ! function(aQG) {
					var j = bH,
						adX = bC.sr.adX,
						gU = bC.sr.adY,
						gW = bC.sr.adZ,
						gY = bC.sr.ada,
						fl = adX.length;
					j.a9(5, aQG), j.a9(30, fl), j.a9(30, bC.sr.adc.length);
					for (var aC = 0; aC < fl; aC++) {
						var ev = adX[aC];
						j.a9(4, ev), j.a9(9, gU[aC]), 0 === ev ? j.a9(22, gW[aC]) : 1 === ev ? (j.a9(10, gW[aC]), j.a9(10, gY[aC])) : 2 === ev ? (j.a9(10, gW[aC]), j.a9(9, gY[aC])) : 3 === ev ? (j.a9(10, gW[aC]), j.a9(27, gY[aC])) : 4 === ev ? (j
							.a9(10, gW[aC]), j.a9(16, gY[aC])) : 5 === ev || 6 === ev ? j.a9(10, gW[aC]) : 7 === ev ? j.a9(1, gW[aC]) : 10 === ev ? (j.a9(20, gW[aC]), j.a9(22, gY[aC])) : 11 === ev && (j.a9(16, gW[aC]), j.a9(27, gY[aC]))
					}
				}(aQG), ! function(aQG) {
					for (var j = bH, adb = bC.sr.adb, adc = bC.sr.adc, fl = adb.length, aC = 0; aC < fl; aC++) j.a9(1, adb[aC]), j.a9(aQG, adc[aC])
				}(aQG), bH.eU),
			q5 = bO.gC(j - 1, 6) + 1,
			aQG = (bG.abz(6 * q5) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eU = 24, j.a9(31, j.h.length), j.eU = 12, j.a9(12, function() {
					for (var h = bH.h, fl = h.length, acZ = m.rVersion, aC = 3; aC < fl; aC++) acZ = acZ + h[aC] & 4095;
					return acZ
				}())
			}(), bK.dv(bH.h), bI.fC.vn(bI.fC.vo(q5)));
		return bK.yB(), bH.dv(), aQG
	}
}

function cy() {
	var ev, c3 = !1,
		ae9 = !1,
		aeA = -1e4,
		aeB = -1,
		aeC = 0;

	function resize(aeG) {
		ev = 0, ac.wB() && (aeE(aeG) || c3) && (c3 = !1, bf.resize(), bZ.aGZ.resize(), aZ.dv(), bb.dv(), aa.resize(), aU.resize(), aP.resize(), bx.resize(), u.resize(), 1 <= aE.a3z ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(),
			aO.resize(), aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aDi()) : (ab.aMG(), ab.aMH()), bi.e2 = !0)
	}

	function aeD(gD) {
		return gD && 128 < gD ? Math.floor(gD) : 128
	}

	function aeE(aeG) {
		var j, k, aeI, vq, aD7;
		if (!(0 < i.vS)) return vq = aeD(document.documentElement.clientWidth), aD7 = aeD(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = vq, k = aD7, aeI = 0 !== a1.id || j < k ?
			700 : 1200, aeI = Math.min(aeI / ((j + k) / 2), 1), aeI = 0 === bm.buffer.data[1].value ? 2 * aeI / 3 : Math.min(aeI + (bm.buffer.data[1].value - 1) * (1 - aeI) / 2, 1), i.l = (window.devicePixelRatio || 1) * aeI, __fx.hoveringTooltip
			.canvasPixelScale = i.l, aeG && !ae9 ? (ae9 = !0, u.removeChild(document.body, a5X)) : ae9 && (ae9 = !1, document.body.appendChild(a5X)), j = Math.floor(.5 + vq * i.l), k = Math.floor(.5 + aD7 * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aGB(j, k), i.max = aAW(j, k), i.iw = bO.gC(j + k, 2), i.z5 = j / k, a5X.width = j, a5X.height = k, a5X.style.width = vq + "px", a5X.style.height = aD7 + "px", aeB = bi.el + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.iw = 0, this.z5 = 1, this.l = 1, this.vS = 0, this.dw = function() {
		this.j = aeD(document.documentElement.clientWidth) + 2, this.k = aeD(document.documentElement.clientHeight) + 2
	}, this.dv = function() {
		ev = 1, a5X = document.getElementById("canvasA"), 2 === a1.id && (a5X.style.webkitUserSelect = "none"), (z9 = a5X.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aeE(0), a5X.addEventListener("contextrestored", function() {
			c3 = !0, resize(0)
		})
	}, this.eq = function() {
		50 <= ++ev && resize(0), -1 === aeB || bi.el < aeB || (aeB = -1, 2e3 * ++aeC >= bi.el + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.e5 = function(kJ) {
		c3 = !0, resize(kJ)
	}, this.a6C = function() {
		aeA + 1e3 > bi.el || (aeA = bi.el, resize(0))
	}
}

function dj() {
	var aeK = [];
	this.aL3 = function(pe) {
		for (var em = (new Date).getTime() - 36e5, aC = aeK.length - 1; 0 <= aC; aC--)
			if (aeK[aC].em < em) aeK.splice(aC, 1);
			else if (aeK[aC].pe === pe) return !0;
		return !1
	}, this.aL5 = function(pe, aL4) {
		return !(this.aL3(pe) || !b1.z.er(0) || (b1.aWF.aWG({
			action: 6,
			pe: pe,
			value: aL4
		}), aeK.push({
			pe: pe,
			em: (new Date).getTime()
		}), 0))
	}
}

function dS() {
	this.acD = new aeL, this.a4s = new aeM, this.acU = new aeN
}

function aeN() {
	var aeO = aeP(),
		aeQ = aeR(),
		aeS = aeT();
	this.sf = function() {
		return 123
	}, this.a3T = function() {
		bJ.fC.a0o(bm.buffer.data[183].value, 15), bG.a9(14, aeO), bG.a9(7, aeQ), bG.a9(12, aeS)
	}
}

function aeP() {
	for (var ev = document.createElement("canvas"), ev = (ev.width = 24, ev.height = 24, ev.getContext("2d", {
			alpha: !1
		})), fo = (ev.fillStyle = "rgb(0,0,0)", ev.fillRect(0, 0, 24, 24), ev.font = "22px system-ui", ev.textBaseline = "middle", ev.textAlign = "center", ev.fillStyle = "rgb(255,255,255)", ev.fillText("Q", 12, 12), ev.getImageData(0, 0, 24, 24)
			.data), fl = fo.length, lz = 0, aC = 0; aC < fl; aC += 4) lz += fo[aC];
	return 16383 & lz
}

function aeR() {
	var fo = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fo + .5) / 15))
}

function aeT() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function aeM() {
	this.a4t = function() {
		for (var hJ, fl = am.la, xE = am.lf, a4e = ah.a4e, aCv = this.aNt(), aC = 0; aC < fl; aC++) hJ = xE[aC], bD.h7.kR(hJ) || (a4e[hJ] = aCv);
		var sw = ah.sw,
			k7 = ah.k7,
			k8 = ah.k8,
			a4c = ah.a4c,
			fl = aE.l4;
		for (aC = 0; aC < fl; aC++)(0 === a4c[aC] || k8[aC] < 1 || 2 * sw[aC] > 3 * (k7[aC] + k8[aC])) && (a4e[aC] = 0);
		var a4q = 0;
		for (aC = 0; aC < fl; aC++) a4q += 0 < a4e[aC];
		return a4q
	}, this.aNt = function() {
		return Math.min(65535, bi.l1())
	}
}

function aeL() {
	function aeX(h, gD, ib) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (gD >> (aC + ib) % 30 & 1)) % 256
	}
	this.eq = function(aeU, aeV) {
		var h = new Uint8Array(256);
		return function(h, aeU, aeV) {
				var aC, aeZ = 3 + (4 + aeU) % 32768,
					aea = 12 + aeV % 32768,
					aeb = 17 + ((aeU & aeV) + (aeU | aeV) + aeU) % 32768;
				for (aC = 0; aC < 256; aC++) aeZ = 1 + aeZ * aea % aeb, h[aC] = aeZ % 256
			}(h, aeU, aeV), aeX(h, aeU, 2), aeX(h, aeV, 7),
			function(h) {
				var aC, gD, eU = 0;
				for (aC = 0; aC < 3e4; aC++) gD = h[eU], h[eU] = (gD + aC + h[(eU + aC) % 256]) % 256, eU = (gD + aC + eU + (gD & eU)) % 256
			}(h),
			function(h) {
				var aC, aD7 = 1,
					wW = 1;
				for (aC = 0; aC < 256; aC += 2) aD7 = (1 + aD7) * (h[aC] + 1) % 1073741824, wW = (1 + wW) * (h[aC + 1] + 1) % 1073741824;
				return [aD7, wW]
			}(h)
	}, this.acE = function(aec, aed, aee, result) {
		for (var hE = 1 << aec, aC = 0; aC < hE; aC++)
			if (this.aef(aC, aed, aee) === result) return aC;
		return 0
	}, this.aef = function(aeg, aed, aee) {
		for (var a1K = aed + aeg, a1T = aee + aeg, gD = a1K + a1T & 2147483647, g4 = 1; g4 <= 16; g4++) gD = (gD = (gD ^ gD >> g4) >>> 1 + (3 & a1K)) * (7 + (1023 & (a1K | a1T))) & 1073741823, a1T >>= 1 + (1 & (a1K >>= 1 + (1 & (gD += 65535 &
			a1T))));
		return gD &= 1073741823
	}
}

function cv() {
	var aeh, aei, j0, aej;
	this.dv = function() {
		var aC, fs, fu, aYJ, aek, j, k, p4, ik, a2V, gD, hJ, g1, g4, aen;
		if (function() {
				if (j0 = !0, aej = "rgb(" + bV.aRT[0] + "," + bV.aRT[1] + "," + bV.aRT[2] + ")", bV.aRp(bV.fR)) return 1;
				return j0 = !1, 0
			}()) aei = null;
		else {
			for (aeh = bO.gC(96, 4), aek = 1 === bV.fR ? (aYJ = 0, 160) : (aYJ = 128, 32), aej = "rgb(" + aYJ + "," + aYJ + "," + aYJ + ")", aei = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (aei[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fw : aeh, k = aC % 2 == 0 ? aeh : bV.fx + 2 * aeh, aei[aC].width = j, aei[aC].height = k, a2V = (ik = (p4 = aei[aC].getContext("2d", {
						alpha: !1,
						willReadFrequently: !0
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (fu = aeh - 1; 0 <= fu; fu--)
						for (gD = aek + Math.floor((fu + 1) * (aYJ - aek) / (aeh + 1)), fs = j - 1; 0 <= fs; fs--) a2V[hJ = 4 * ((0 === aC ? aeh - fu - 1 : fu) * j + fs)] = gD, a2V[hJ + 1] = gD, a2V[hJ + 2] = gD, a2V[hJ + 3] = 255;
				else {
					for (fs = aeh - 1; 0 <= fs; fs--)
						for (gD = aek + Math.floor((fs + 1) * (aYJ - aek) / (aeh + 1)), fu = k - 1 - aeh; aeh <= fu; fu--) a2V[hJ = 4 * (fu * j + (3 === aC ? aeh - fs - 1 : fs))] = gD, a2V[hJ + 1] = gD, a2V[hJ + 2] = gD, a2V[hJ + 3] = 255;
					for (g4 = 1; 0 <= g4; g4--)
						for (fs = aeh - 1; 0 <= fs; fs--)
							for (fu = aeh - 1; 0 <= fu; fu--) g1 = (Math.pow(fs * fs + fu * fu, .5) + 1) / (aeh + 1), gD = aek + Math.floor((1 < g1 ? 1 : g1) * (aYJ - aek)), a2V[hJ = 4 * ((0 === g4 ? aeh - fu - 1 : fu + g4 * (k - aeh)) * j + (
								1 === aC ? fs : aeh - fs - 1))] = gD, a2V[hJ + 1] = gD, a2V[hJ + 2] = gD, a2V[hJ + 3] = 255
				}
				p4.putImageData(ik, 0, 0)
			}
			aen = aek, bV.aBe.fillStyle = "rgb(" + aen + "," + aen + "," + aen + ")", bV.aBe.fillRect(0, 0, bV.fw, 1), bV.aBe.fillRect(0, bV.fx - 1, bV.fw, 1), bV.aBe.fillRect(0, 0, 1, bV.fx), bV.aBe.fillRect(bV.fw - 1, 0, 1, bV.fx)
		}
	}, this.a23 = function() {
		var g4 = j0 ? 0 : -aeh;
		aUD(g4, g4, bV.fw - 2 * g4, bV.fx - 2 * g4, bd.aeo, bd.aep, bd.aeq, bd.aer) || (z9.fillStyle = aej, z9.fillRect(0, 0, i.j, i.k))
	}, this.z8 = function() {
		j0 || (aUC(0, -aeh, bV.fw, aeh, bd.aeo, bd.aep, bd.aeq, bd.aer) && z9.drawImage(aei[0], bd.aes, bd.aet - aeh), aUC(bV.fw, -aeh, aeh, bV.fx + 2 * aeh, bd.aeo, bd.aep, bd.aeq, bd.aer) && z9.drawImage(aei[1], bd.aes + bV.fw, bd.aet - aeh),
			aUC(0, bV.fx, bV.fw, aeh, bd.aeo, bd.aep, bd.aeq, bd.aer) && z9.drawImage(aei[2], bd.aes, bd.aet + bV.fx), aUC(-aeh, -aeh, aeh, bV.fx + 2 * aeh, bd.aeo, bd.aep, bd.aeq, bd.aer) && z9.drawImage(aei[3], bd.aes - aeh, bd.aet - aeh))
	}
}

function dH() {
	this.aNr = new aeu, this.a27 = new aev, this.z = new aew, this.jW = new aex, this.aen = new aey, this.mz = new aez, this.ks = new af0, this.lr = new af1, this.af2 = new af3, this.af4 = new af5, this.nA = new af6, this.iM = new af7, this.mQ =
		new af8, this.lt = new af9, this.s4 = new afA, this.n3 = new afB, this.t4 = new afC, this.tA = new afD, this.t5 = new afE, this.s8 = new afF, this.a9e = new afG, this.aAq = new afH, this.afI = new afJ, this.dv = function() {
			this.t5.dv(), this.a9e.dv(), this.aAq.dv(), this.afI.dv(), this.mQ.dv(), this.a27.dv(), this.z.dv(), this.jW.dv(), this.aen.dv(), this.af4.dv(), this.n3.dv()
		}, this.z8 = function() {
			this.af4.z8(), this.aAq.z8(), this.a27.z8()
		}
}

function af0() {
	this.eq = function(player) {
		return !!bQ.nA.nB(player) && !(bQ.z.l8[player] >= Math.max(3 * ap.performance.mI, aF.lI[aF.iS[player]]) || !bD.h7.nC(player, aF.lG[aF.iS[player]], 32, 0) || aX.aFy() || !(ap.jv.eq(player) || ap.jk.eq(player) || ap.jm.eq(player)) || (
			function(player) {
				bR.gN[1] = 4, bD.h7.nE(player);
				var jM = aF.lG[aF.iS[player]];
				bQ.z.nF(player, jM)
			}(player), 0))
	}
}

function afE() {
	var afQ = null;
	this.dv = function() {
		(afQ = null === afQ ? new Uint8Array(aE.fi) : afQ).fill(bQ.tA.afR)
	}, this.eq = function() {
		var tA = bQ.tA;
		if (bi.l1() % tA.afS == 0)
			for (var gD = function() {
					var afV = bQ.tA.afW,
						fs = afV[0],
						fu = afV[1],
						fl = fs.length,
						hE = function() {
							for (var xE = am.lf, fl = am.la, hE = 0, aC = 0; aC < fl; aC++) bD.h7.kR(xE[aC]) || hE++;
							return hE
						}();
					if (hE <= fs[0]) return fu[0];
					for (var aC = 1; aC < fl; aC++) {
						var j9;
						if (hE < fs[aC]) return j9 = (fu[aC] - fu[aC - 1]) * (hE - fs[aC - 1]), fu[aC - 1] + bO.gC(j9, fs[aC] - fs[aC - 1])
					}
					return fu[fl - 1]
				}(), max = tA.afR, nc = afQ, fl = nc.length, aC = 0; aC < fl; aC++) nc[aC] = Math.min(nc[aC] + gD, max)
	}, this.has = function(player) {
		return afQ[player] >= bQ.tA.afU
	}, this.t7 = function(player) {
		afQ[player] -= bQ.tA.afU
	}
}

function afB() {
	var afY = 0,
		afZ = null;
	this.dv = function() {
		null === afZ && (afZ = new Uint16Array(2 * bQ.z.lI)), afY = 0
	}, this.eu = function(afa, n3) {
		var afb = afZ;
		afb[afY++] = afa, afb[afY++] = n3
	}, this.n4 = function(player, n2) {
		for (var afb = afZ, fl = afY, aC = 0; aC < fl; aC += 2)
			if (afb[aC] === n2 && bQ.lt.afc(afb[aC + 1]) && player === bQ.z.my[bR.gN[2]] >> 3) return !0;
		return !1
	}, this.afd = function(afe) {
		var mz = bQ.z.mv[afe];
		if (!(mz < 64)) {
			for (var n2 = bQ.z.mx[afe], afb = afZ, fl = afY, aC = fl - 2; 0 <= aC; aC -= 2)
				if (afb[aC] === n2) {
					{
						afj = void 0;
						var afj = afb[aC + 1];
						bQ.lt.afc(afj) && bQ.n3.afr(bR.gN[2])
					}
					afb[aC] = afb[fl - 2], afb[aC + 1] = afb[fl - 1], fl -= 2
				} afY = fl
		}
	}, this.afg = function(afh, afi) {
		for (var afj = bQ.z.mx[afh], n2 = -1, afb = afZ, fl = afY, aC = 1; aC < fl; aC += 2)
			if (afb[aC] === afj) {
				n2 = afb[aC - 1];
				break
			} if (-1 === n2) return !1;
		if (!bQ.lt.afc(n2)) return !1;
		var afe = bR.gN[2],
			mP = bQ.z.mw[afe];
		if (afi === mP[mP.length - 1]) bQ.z.mw[afh] = bQ.mQ.afk(bQ.z.mw[afh], bQ.mQ.mY(mP));
		else {
			var afl = bQ.lt.afm(mP, afi);
			if (-1 === afl) return !1;
			var afn = bQ.z.n8[afe];
			afl === afn ? (afe = bP.jU(bQ.z.n9[afe]), bQ.z.mw[afh] = bQ.mQ.afp(bQ.z.mw[afh], mP, afl, afi, bP.jC(mP[afl], afi) > bP.jC(mP[afl], afe))) : bQ.z.mw[afh] = bQ.mQ.afp(bQ.z.mw[afh], mP, afl, afi, afn < afl)
		}
		return !0
	}, this.afr = function(afs) {
		var lz = bQ.z,
			mz = lz.mv[afs];
		if (mz % 64 == 5) return !1;
		var mP = lz.mw[afs],
			aft = lz.n8[afs],
			afu = new Uint32Array(aft + 2);
		afu[0] = bQ.s8.afv(afs);
		for (var aC = 0; aC <= aft; aC++) afu[aC + 1] = mP[aft - aC];
		return lz.mw[afs] = afu, lz.n8[afs] = 0, lz.afw[afs] = 0, lz.afx[afs] = lz.n9[afs], lz.mv[afs] = mz - mz % 64 + 5, !0
	}
}

function af6() {
	this.nB = function(player) {
		return !!aE.data.passableWater && bQ.z.mu !== bQ.z.lI && bQ.z.l8[player] !== bQ.z.afy && 0 !== ah.hS[player].length
	}, this.sz = function(ad1) {
		var mz = bR.gN[1];
		return 7 === mz ? ad.j0(bP.fb(ad1)) : !(4 <= mz || !bQ.lt.afz(bP.fb(ad1))) && ad.fg(bP.fb(bP.jY(ad1, mz)))
	}
}

function afD() {
	this.ag0 = 10, this.ag1 = 25e4, this.ag2 = 20, this.ag3 = 3e5, this.ag4 = 5e4, this.ag5 = 5, this.ag6 = 10, this.ag7 = 9, this.ag8 = 25, this.ag9 = 10, this.agA = 10, this.agB = 200, this.agC = 100, this.tB = 50, this.agD = !0, this.agE = .002,
		this.agF = .012, this.agG = .008, this.agH = 2.33, this.agI = [255, 255, 255], this.agJ = [0, 0, 0], this.aEV = [255, 210, 210], this.agK = [50, 0, 0], this.agL = [255, 255, 0], this.agM = 12, this.agN = 12, this.agO = 7, this.agP = 1.7, this
		.agQ = 7, this.agR = .02, this.agS = 1.6, this.afR = 255, this.afU = 32, this.afS = 9, this.afW = [
			[1, 10, 50, 200],
			[32, 32, 32, 32]
		]
}

function aeu() {
	this.aNs = function(player) {
		for (var aCJ = bQ.z.aCJ, w3 = player << 3, aC = w3 + bQ.z.l8[player] - 1; w3 <= aC; aC--) this.agT(aCJ[aC])
	}, this.agT = function(agU) {
		var z = bQ.z,
			agV = z.mu - 1,
			agW = z.my[agU],
			agX = z.agY[agU],
			agZ = z.n9[agU];
		z.mu = agV, z.my[agU] = z.my[agV], z.n9[agU] = z.n9[agV], z.afw[agU] = z.afw[agV], z.aAp[agU] = z.aAp[agV], z.agY[agU] = z.agY[agV], z.mx[agU] = z.mx[agV], z.mv[agU] = z.mv[agV], z.aga[agU] = z.aga[agV], z.agb[agU] = z.agb[agV], z.mw[
			agU] = z.mw[agV], z.n8[agU] = z.n8[agV], z.afx[agU] = z.afx[agV], z.aCM[agU] = z.aCM[agV], z.agc[agU] = z.agc[agV], z.aCJ[z.my[agU]] = agU,
			function(ad0) {
				var player = ad0 >> 3,
					z = bQ.z,
					fl = z.l8[player] - 1,
					agf = (player << 3) + fl;
				z.l8[player] = fl, agf !== ad0 && (z.aCJ[ad0] = z.aCJ[agf], z.my[z.aCJ[ad0]] = ad0)
			}(agW), bQ.jW.jW[bP.jV(z.n9[agU])][z.agY[agU]] = agU, agV = bP.jV(agZ), agW = agX, agV = bQ.jW.jW[agV], z = agV.pop(), agW !== agV.length && (agV[agW] = z, bQ.z.agY[z] = agW)
	}
}

function aev() {
	var agh = 12,
		agi = 12,
		agj = 1,
		aBH = "",
		agl = {},
		agm = null,
		agn = null;

	function ah1(a2V, fX, aYJ) {
		fX *= 4;
		a2V[fX] = aYJ[0], a2V[1 + fX] = aYJ[1], a2V[2 + fX] = aYJ[2], a2V[3 + fX] = 255
	}
	this.dv = function() {
		var tA = bQ.tA;
		aBH = "", agl = {}, agm = [tA.agI, tA.agJ, tA.aEV, tA.agL, tA.agK], agn = new Array(5);
		for (var aC = 0; aC < 5; aC++) agn[aC] = bD.color.qG(agm[aC][0], agm[aC][1], agm[aC][2])
	}, this.z8 = function() {
		var aC, n9 = bQ.z.n9,
			my = bQ.z.my,
			aAp = bQ.z.aAp,
			aga = bQ.z.aga,
			tA = bQ.tA,
			agq = aE.fV,
			aBn = bQ.a9e.aBo(),
			fl = bQ.z.mu,
			agr = i.j,
			ags = i.k,
			agt = bV.fw << 4,
			fa = ix,
			io = z9;
		for (io.imageSmoothingEnabled = fa < 9, bD.tc.textAlign(io, 1), bD.tc.textBaseline(io, 1), ! function(io) {
				var font = bD.tc.vB(1, 100);
				font !== aBH && (aBH = font, io.font = font, agj = (.5 * io.measureText("9999").width + 12) / 62, agi = Math.max(Math.round((agh - 2) * agj) + 2, agh), agl = {})
			}(io), aC = 0; aC < fl; aC++) {
			var alpha, aEM, player = my[aC] >> 3,
				iS = aAp[aC],
				agp = (.9 + .1 * Math.log10(Math.max(iS, 1))) * fa,
				iS = bD.pa.a8A(iS),
				agp = Math.floor(tA.agH * agp),
				fs = (j5 = n9[aC]) % agt / 16 * fa - jN,
				j5 = Math.floor(j5 / agt) / 16 * fa - jO;
			fs < -(aEM = 1.5 * agp) || j5 < -aEM || agr + aEM < fs || ags + aEM < j5 || (aEM = bQ.af4.agv(player) ? aga[aC] ? 4 : 1 : aga[aC] ? 2 : 0, (alpha = (agp - tA.agO) / (tA.agN - tA.agO)) <= 0) || (alpha = Math.min(alpha, 1), player ===
				agq && function(io, fs, fu, fontSize, ev, alpha) {
					var a6s = agl[ev];
					a6s = a6s || (agl[ev] = function(ev) {
						var ev = agm[ev],
							j = agi,
							k = agh,
							a6s = bD.tc.a6t(j, k),
							io = bD.tc.getContext(a6s, !0),
							ik = bD.tc.getImageData(io, j, k),
							a2V = ik.data;
						return ah1(a2V, j + 1, ev), ah1(a2V, j + 2, ev), ah1(a2V, 2 * j + 1, ev), ah1(a2V, 2 * j - 3, ev), ah1(a2V, 2 * j - 2, ev), ah1(a2V, 3 * j - 2, ev), ah1(a2V, j * (k - 3) + 1, ev), ah1(a2V, j * (k - 2) + 1, ev),
							ah1(a2V, j * (k - 2) + 2, ev), ah1(a2V, j * (k - 2) - 2, ev), ah1(a2V, j * (k - 1) - 3, ev), ah1(a2V, j * (k - 1) - 2, ev), io.putImageData(ik, 0, 0), a6s
					}(ev));
					var ev = .62 * fontSize,
						fontSize = ev * agj,
						aDe = 2 * fontSize / (agi - 2),
						aDf = 2 * ev / (agh - 2);
					io.globalAlpha = alpha, io.setTransform(aDe, 0, 0, aDf, fs - fontSize - aDe, fu - ev - aDf), io.drawImage(a6s, 0, 0)
				}(io, fs, j5, agp, aC === aBn ? 3 : aEM, alpha), io.globalAlpha = alpha, io.setTransform(1, 0, 0, 1, 0, 0), io.font = bD.tc.vB(1, agp), io.fillStyle = agn[aEM], io.fillText(iS, fs, j5 + .1 * agp), bD.h7.kR(player) && (alpha =
					io.measureText(iS).width, aEM = j5 + .1 * agp + bD.tc.a32 * agp, io.fillRect(fs - .5 * alpha, aEM, alpha, Math.max(1, .1 * agp))))
		}
		io.globalAlpha = 1, io.imageSmoothingEnabled = !1, io.setTransform(1, 0, 0, 1, 0, 0)
	}, this.agy = function(n6, mJ, mK) {
		var lz = bQ.z,
			tA = bQ.tA,
			ago = .9 + .1 * Math.log10(Math.max(lz.aAp[n6], 1)),
			ago = Math.floor(tA.agH * ago * ix);
		return !(ago <= tA.agO) && (tA = bV.fw << 4, n6 = (lz = lz.n9[n6]) % tA / 16 * ix - jN, lz = Math.floor(lz / tA) / 16 * ix - jO, tA = .62 * ago, Math.abs(mJ - n6) <= tA * agj) && Math.abs(mK - lz) <= tA
	}
}

function afH() {
	var ah2 = new Int32Array(8),
		ah3 = 0,
		ah4 = -1,
		ah5 = !1;

	function ahB(io, n6) {
		var lz = bQ.z;
		65535 !== lz.afw[n6] && null !== lz.mw[n6] && ah9(io, n6)
	}

	function ah9(io, n6) {
		var lz = bQ.z,
			mP = lz.mw[n6],
			aft = lz.n8[n6],
			fl = mP.length - 1,
			lz = lz.n9[n6];
		io.beginPath(), io.moveTo(ahC(mP[fl]), ahD(mP[fl]));
		for (var ib = fl - 1; aft < ib; ib--) io.lineTo(ahC(mP[ib]), ahD(mP[ib]));
		n6 = bP.j8(lz) * ix / 16 - jN, fl = bP.jB(lz) * ix / 16 - jO;
		io.lineTo(ahE(n6), ahE(fl)), io.stroke()
	}

	function ahC(fX) {
		return ahE((bP.ft(fX) + .5) * ix - jN)
	}

	function ahD(fX) {
		return ahE((bP.fv(fX) + .5) * ix - jO)
	}

	function ahE(gD) {
		return ah5 ? Math.floor(gD) + .5 : gD
	}
	this.dv = function() {
		ah2.fill(-1), ah4 = -1
	}, this.aAr = function(n6) {
		ah3 = bQ.z.my[n6] >> 3, ah4 = bQ.z.mx[n6]
	}, this.show = function(player, o4) {
		if (player === aE.fV) {
			for (var ah6 = 0, aC = 0; aC < 8; aC++)
				if (ah2[aC] === o4 || -1 === ah2[aC]) {
					ah6 = aC;
					break
				} ah2[ah6] = o4
		}
	}, this.z8 = function() {
		var tA = bQ.tA,
			player = aE.fV,
			io = z9,
			iw = i.iw;
		io.setTransform(1, 0, 0, 1, 0, 0), io.strokeStyle = bE.qO, ah5 = tA.agD, io.lineWidth = ah5 ? 1 : Math.max(1, tA.agE * iw), io.setLineDash([tA.agF * iw, tA.agG * iw]), bD.h7.hy(player) && function(io, player) {
				for (var aC = 0; aC < 8; aC++) {
					var n6; - 1 !== ah2[aC] && ((n6 = bQ.lt.o6(player, ah2[aC])) < 0 || 65535 === bQ.z.afw[n6] ? ah2[aC] = -1 : ah9(io, n6))
				}
			}(io, player),
			function(io, player) {
				var n6, ahA = -1;
				bM.u5() || 0 <= (ahA = bQ.lt.a9o(bM.hq, bM.hr)) && bQ.z.my[ahA] >> 3 !== player && ahB(io, ahA); - 1 !== ah4 && ((n6 = bQ.lt.o6(ah3, ah4)) < 0 ? ah4 = -1 : n6 !== ahA && ah3 !== player && ahB(io, n6))
			}(io, player), io.setLineDash([])
	}
}

function af5() {
	var ahF = null,
		ahG = 0,
		ahH = !1,
		ahI = new Array(64),
		ahJ = null;

	function ahQ(player) {
		var ev;
		return ahJ[player] < 0 && (ev = ad.aBr(player), ahJ[player] = (Math.round(ev[0] / 85) << 4) + (Math.round(ev[1] / 85) << 2) + Math.round(ev[2] / 85)), ahJ[player]
	}

	function ahL(ahR) {
		for (var fs, fX, j6, j9, ih = ahG, a6s = bD.tc.a6t(ih, ih), io = bD.tc.getContext(a6s, !0), ik = bD.tc.getImageData(io, ih, ih), a2V = ik.data, lz = (ih - 1) / 2, ahS = (.5 + lz) * (.5 + lz), fu = 0; fu < ih; fu++)
			for (fs = 0; fs < ih; fs++) j6 = fs - lz, j9 = fu - lz, a2V[fX = 4 * (fu * ih + fs)] = ahR[0], a2V[1 + fX] = ahR[1], a2V[2 + fX] = ahR[2], a2V[3 + fX] = Math.max(ahS - j6 * j6 - j9 * j9, 0) * ahR[3] / ahS;
		return io.putImageData(ik, 0, 0), a6s
	}
	this.dv = function() {
		ahH = !aE.ie && 9 !== aE.lM, ahI.fill(null), (ahJ = null === ahJ ? new Int16Array(aE.fi) : ahJ).fill(-1);
		var ih = 2 * Math.floor(bQ.tA.agM / 2) + 1;
		if (null === ahF || ih !== ahG) {
			ahG = ih, ahF = new Array(bj.ahK.length);
			for (var aC = 0; aC < ahF.length; aC++) ahF[aC] = ahL(bj.ahK[aC])
		}
	}, this.z8 = function() {
		for (var oR = ix, agr = i.j, ags = i.k, o7 = jN / oR, o8 = jO / oR, oK = (agr + jN) / oR, oL = (ags + jO) / oR, hK = -ahG * oR, ahM = .5 * hK, agt = bV.fw << 4, fl = bQ.z.mu, n9 = bQ.z.n9, my = bQ.z.my, aFJ = bj.aFJ, a6s = ahF, io = z9,
				aC = 0; aC < fl; aC++) {
			var j5 = n9[aC],
				fs = agr * (j5 % agt / 16 - o7) / (oK - o7) + ahM,
				j5 = ags * (Math.floor(j5 / agt) / 16 - o8) / (oL - o8) + ahM;
			agr < fs || ags < j5 || fs < hK || j5 < hK || (io.setTransform(oR, 0, 0, oR, fs, j5), fs = my[aC] >> 3, j5 = ahH ? function(player) {
				player = ahQ(player);
				{
					var ahR;
					null === ahI[player] && (ahR = [85 * (player >> 4), 85 * (player >> 2 & 3), 85 * (3 & player), 180], ahI[player] = ahL(ahR))
				}
				return ahI[player]
			}(fs) : a6s[aFJ[fs]], io.drawImage(j5, 0, 0))
		}
		io.globalAlpha = 1, io.setTransform(oR, 0, 0, oR, 0, 0)
	}, this.agv = function(player) {
		var hK;
		return ahH ? 600 < 85 * (((hK = ahQ(player)) >> 4) + (hK >> 2 & 3) + (3 & hK)) : 600 < (hK = bj.aYK[bj.aFJ[player]])[0] + hK[1] + hK[2]
	}
}

function afJ() {
	var ahU = null,
		ahV = null,
		ahW = null,
		ahX = null,
		ahY = null,
		ahZ = 0;
	this.dv = function() {
		var hE;
		null === ahU && (hE = bQ.z.lI, ahU = new Int32Array(hE), ahV = new Int32Array(hE), ahW = new Uint16Array(hE), ahX = new Uint16Array(hE), ahY = new Uint16Array(8192))
	}, this.aha = function() {
		for (var j5, ahb, lz = bQ.z, fl = lz.mu, agt = bV.fw << 4, aC = 0; aC < fl; aC++) ahW[aC] = 0, ahX[aC] = 0, ahU[aC] = 0, ahV[aC] = 0, 65535 !== lz.afw[aC] && (j5 = lz.n9[aC], ahb = bP.jT(lz.mw[aC][lz.n8[aC] + 1]), ahU[aC] = ahb % agt -
			j5 % agt, ahV[aC] = bO.gC(ahb, agt) - bO.gC(j5, agt));
		ahZ = 0
	}, this.ahc = function(ahd, ahe, j6, j9) {
		j6 = ahU[ahd] * j6 + ahV[ahd] * j9;
		ahW[ahd]++, j6 < 0 ? ahX[ahd]++ : 0 < j6 && ahZ < 4096 && (ahY[2 * ahZ] = ahd, ahY[2 * ahZ + 1] = ahe, ahZ++)
	}, this.ahg = function() {
		var lz = bQ.z,
			aRb = lz.agb;
		aRb.fill(0, 0, lz.mu);
		for (var aC = 0; aC < ahZ; aC++) ! function(aC) {
			return (0 !== ahU[aC] || 0 !== ahV[aC]) && 0 < ahW[aC] && ahX[aC] === ahW[aC]
		}(ahY[2 * aC + 1]) && (aRb[ahY[2 * aC]] = 1)
	}
}

function af9() {
	this.ahj = function(player, id) {
		for (var ahk = ah.hS[player], fl = ahk.length, aC = 0; aC < fl; aC++)
			if (bP.iy(ahk[aC], id)) return !0;
		return !1
	}, this.ahl = function(player, fX) {
		for (var jE, ahm, fP, ahk = ah.hS[player], fl = ahk.length, j = bV.fw, aho = bP.ft(fX), ahp = bP.fv(fX), fr = -1, min = bV.fw * bV.fw + bV.fx * bV.fx, id = ad.fT(bP.fb(fX)), aC = 0; aC < fl; aC++)(ahm = (ahm = aho - (jE = (fP = ahk[
			aC]) >> 2) % j) * ahm + (ahm = ahp - ~~((.5 + jE) / j)) * ahm) < min && bP.iy(fP, id) && (min = ahm, fr = jE);
		return fr
	}, this.lu = function(jD, jE) {
		for (var id = ad.fT(bP.fb(jE)), iz = bP.ir, fP = bP.fb(jD), ahq = -1, aC = 0; aC < 4; aC++) {
			var fa = fP + iz[aC];
			ad.j0(fa) && ad.fT(fa) === id && (-1 === ahq || bP.jF(bP.fZ(fa), jE) < bP.jF(ahq, jE)) && (ahq = bP.fZ(fa))
		}
		return ahq
	}, this.mT = function(player, fX) {
		for (var iz = bP.ir, fP = bP.fb(fX), aC = 0; aC < 4; aC++) {
			var fa = fP + iz[aC];
			if (ad.hL(fa) && ad.a21(player, fa)) return !0
		}
		return !1
	}, this.mU = function(player, fX) {
		for (var iz = bP.ir, fP = bP.fb(fX), aC = 0; aC < 4; aC++) {
			var fa = fP + iz[aC];
			if (ad.fc(fa)) return !0;
			if (ad.hL(fa)) {
				fa = ad.fd(fa);
				if (player !== fa && bw.fe(player, fa)) return !0
			}
		}
		return !1
	}, this.n0 = function(fX) {
		for (var iz = bP.ir, fP = bP.fb(fX), aC = 0; aC < 4; aC++) {
			var fa = fP + iz[aC];
			if (ad.hL(fa)) {
				fa = ad.fd(fa);
				if (bD.h7.kR(fa)) return fa
			}
		}
		return -1
	}, this.afz = function(fP) {
		if (ad.j0(fP))
			for (var iz = bP.ir, aC = 0; aC < 4; aC++)
				if (ad.fg(fP + iz[aC])) return !0;
		return !1
	}, this.o6 = function(player, id) {
		for (var w3 = player << 3, w4 = w3 + bQ.z.l8[player], mx = bQ.z.mx, aCJ = bQ.z.aCJ, aC = w3; aC < w4; aC++) {
			var aCK = aCJ[aC];
			if (mx[aCK] === id) return aCK
		}
		return -1
	}, this.oB = function(player) {
		return 0 === bQ.z.l8[player] ? -1 : bQ.z.aCJ[player << 3]
	}, this.a9o = function(mJ, mK) {
		var fl = bQ.z.mu;
		if (fl < 1) return -1;
		for (var n9 = bQ.z.n9, aAp = bQ.z.aAp, ahr = 0, aXo = -1, aC = 0; aC < fl; aC++) {
			var g1 = bP.j2(mJ, mK, n9[aC]);
			g1 <= bQ.a9e.ahs(aAp[aC]) && (-1 === aXo || g1 < ahr) && (ahr = g1, aXo = aC)
		}
		return aXo
	}, this.afc = function(o4) {
		for (var fl = bQ.z.mu, mx = bQ.z.mx, aC = 0; aC < fl; aC++)
			if (mx[aC] === o4) return bR.gN[2] = aC, !0;
		return !1
	}, this.aht = function(fP) {
		return ad.fc(fP) ? aE.fi : ad.hL(fP) ? ad.fd(fP) : -1
	}, this.ahu = function(ahv, ia) {
		return 3 < ia ? -1 : this.aht(bP.fb(bP.jY(ahv, ia)))
	}, this.aCL = function(n6) {
		var lz = bQ.z,
			aES = af.aPP(lz.my[n6] >> 3);
		return bO.gC(lz.aCM[n6] * aES, 1024)
	}, this.aPN = function(player) {
		for (var lz = bQ.z, w3 = player << 3, w4 = w3 + lz.l8[player], gD = 0, aC = w3; aC < w4; aC++) gD += lz.aCM[lz.aCJ[aC]];
		return gD
	}, this.aNo = function(player) {
		for (var w3 = player << 3, w4 = w3 + bQ.z.l8[player], aCJ = bQ.z.aCJ, aAp = bQ.z.aAp, iS = 0, aC = w3; aC < w4; aC++) iS += aAp[aCJ[aC]];
		return iS
	}, this.ahw = function(player, afs) {
		afs = bQ.z.mw[afs];
		return this.mT(player, afs[afs.length - 1])
	}, this.ahx = function(jD, jE, g1, ahy) {
		var jH = bP.ft(jD),
			jD = bP.fv(jD),
			jJ = bP.ft(jE),
			jE = bP.fv(jE),
			jJ = (g1 = Math.max(g1, 1), jJ - jH),
			jE = jE - jD,
			j6 = bO.gC(Math.abs(jJ) * ahy, g1),
			ahy = bO.gC(Math.abs(jE) * ahy, g1);
		return bP.g8(jH + Math.sign(jJ) * j6, jD + Math.sign(jE) * ahy)
	}, this.afm = function(mP, fX) {
		for (var fl = mP.length - 1, fs = bP.ft(fX), fu = bP.fv(fX), aC = 0; aC < fl; aC++) {
			var jD = mP[aC],
				jE = mP[aC + 1],
				o7 = bP.ft(jD),
				jD = bP.fv(jD),
				oK = bP.ft(jE),
				jE = bP.fv(jE);
			if (!(fs !== o7 && fs !== oK && Math.sign(fs - o7) === Math.sign(fs - oK) || fu !== jD && fu !== jE && Math.sign(fu - jD) === Math.sign(fu - jE))) {
				if (o7 === oK || jD === jE) return aC;
				if (Math.abs(fs - o7) === Math.abs(fu - jD) && Math.abs(fs - oK) === Math.abs(fu - jE)) return aC
			}
		}
		return -1
	}, this.aG1 = function() {
		for (var ai1 = mf[0], my = bQ.z.my, mu = bQ.z.mu, h = [], aC = 0; aC < mu; aC++) bD.h7.li(ai1, my[aC] >> 3) && h.push(aC);
		return h
	}, this.mR = function(player, mP) {
		for (var w3 = player << 3, w4 = w3 + bQ.z.l8[player], aCJ = bQ.z.aCJ, mw = bQ.z.mw, iE = mP[0], lh = mP[mP.length - 1], aC = w3; aC < w4; aC++) {
			var hJ = mw[aCJ[aC]];
			if (hJ[0] === iE && hJ[hJ.length - 1] === lh) return !0
		}
		return !1
	}
}

function afA() {
	function ai4(player, afs) {
		afs = bP.jU(bQ.z.n9[afs]), afs = ad.fT(bP.fb(afs));
		return !!bQ.lt.ahj(player, afs)
	}

	function ai2(player) {
		return bQ.nA.nB(player) && !bQ.mQ.mW()
	}
	this.a9b = function(player, fX) {
		return !!ai2(player) && -1 !== (fX = function(player, fX) {
			for (var fl = bQ.z.mu, n9 = bQ.z.n9, my = bQ.z.my, ahr = bP.it(), aXo = -1, aC = 0; aC < fl; aC++) {
				var g1 = bP.jC(fX, bP.jU(n9[aC]));
				g1 < ahr && bD.h7.li(player, my[aC] >> 3) && (ahr = g1, aXo = aC)
			}
			return aXo
		}(player, fX)) && !!ai4(player, fX) && (bR.gN[3] = bQ.z.mx[fX], !0)
	}, this.s5 = function(player, o4) {
		return !!ai2(player) && !!bQ.lt.afc(o4) && !!ai4(player, bR.gN[2])
	}, this.afO = function(player, o4, ai5) {
		return !! function(player, o4, ai5) {
			if (ai2(player) && bQ.lt.afc(o4)) {
				o4 = bR.gN[2];
				if (bD.h7.li(player, bQ.z.my[o4] >> 3)) {
					if (function(player, afs) {
							return bQ.lt.ahw(player, afs) && (bR.h[0] = bQ.mQ.mY(bQ.z.mw[afs]), bR.gN[1] = 6, !0)
						}(player, o4)) return 1;
					var afP = bP.jU(bQ.z.n9[o4]),
						ai9 = bQ.lt.ahl(player, afP);
					if (-1 !== ai9) {
						ai9 = bP.jC(ai9, afP);
						if (!(ai5 && 120 < ai9)) {
							ai5 = function(afs, aiA, afP) {
								var mP = bQ.z.mw[afs],
									afs = bQ.z.n8[afs],
									aiC = bP.jC(afP, mP[afs + 1]);
								if (aiA <= aiC) return bQ.lt.ahx(afP, mP[afs + 1], aiC, aiA);
								for (var g1 = aiA - aiC, fl = mP.length - 1, aC = afs + 1; aC < fl; aC++) {
									var aiD = bP.jC(mP[aC], mP[aC + 1]);
									if (g1 <= aiD) return bQ.lt.ahx(mP[aC], mP[aC + 1], aiD, g1);
									g1 -= aiD
								}
								return mP[fl]
							}(o4, ai9, afP);
							if (bQ.lr.t0(player, ai5, 1)) return bR.gN[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, o4, ai5) && (player = bR.gN[2], bQ.z.mv[player] = 64 + bQ.z.mv[player] % 64, bQ.n3.eu(o4, bQ.z.nD), !0)
	}
}

function aez() {
	function aiK(player, iS, aiG, afP) {
		var kD;
		if (ad.fc(aiG)) kD = aE.fi;
		else {
			if ((kD = ad.fd(aiG)) === player) return void bg.hB(player, iS - bD.h7.hA(player, iS), 12);
			if (!bw.fe(player, kD)) return void bB.l6.sP(player, kD, iS)
		}
		ae.kP(player, kD) || ae.ki(player) ? (ah.hD[player].push(afP << 2), ae.eu(player, iS, kD), aG.kB(player, !0)) : bg.hB(player, iS, 12)
	}
	this.eq = function() {
		for (var mv = bQ.z.mv, n9 = bQ.z.n9, afw = bQ.z.afw, aC = bQ.z.mu - 1; 0 <= aC; aC--) 65535 === afw[aC] && mv[aC] % 64 != 7 && function(aC, afP, ia) {
			if (6 === ia) {
				if (bQ.n3.afg(aC, afP)) return bQ.z.n8[aC]++, bQ.z.afw[aC] = 0, 0
			} else {
				var player = bQ.z.my[aC] >> 3,
					iS = bQ.z.aAp[aC],
					aiG = -1;
				if (ia < 4)
					if (-1 === (aiG = -1 !== (aiG = function(afP, target) {
							for (var iz = bP.ir, fa = bP.fb(afP), g4 = 0; g4 < 4; g4++)
								if (0 <= target && bQ.lt.aht(fa + iz[g4]) === target) return fa + iz[g4];
							return -1
						}(afP, bQ.z.agc[aC])) || bD.h7.kR(player) ? aiG : function(afP, player) {
							var g4, fp, iz = bP.ir,
								fa = bP.fb(afP);
							for (g4 = 0; g4 < 4; g4++)
								if (fp = fa + iz[g4], ad.fc(fp)) return fp;
							for (g4 = 0; g4 < 4; g4++)
								if (fp = fa + iz[g4], ad.a1y(player, fp)) return fp;
							return -1
						}(afP, player)) && bD.h7.kR(player)) ia = 4;
					else if (-1 === aiG) return bQ.z.mv[aC] = 7, 0;
				bg.aiJ(player), bQ.z.aCM[aC] = 0, ia < 4 ? aiK(player, iS, aiG, afP) : 4 === ia ? function(player, iS, afP) {
					var aC, fp, iz = bP.ir,
						fa = bP.fb(afP);
					for (aC = 0; aC < 4; aC++)
						if (fp = fa + iz[aC], ad.fc(fp)) return aiK(player, iS, fp, afP);
					for (aC = 0; aC < 4; aC++)
						if (fp = fa + iz[aC], ad.hL(fp) && !ad.a21(player, fp)) return aiK(player, iS, fp, afP);
					for (aC = 0; aC < 4; aC++)
						if (fp = fa + iz[aC], ad.hL(fp)) return aiK(player, iS, fp, afP)
				}(player, iS, afP) : 5 === ia && function(player, iS, afP) {
					var aC, fp, iz = bP.ir,
						fa = bP.fb(afP);
					for (aC = 0; aC < 4; aC++)
						if (fp = fa + iz[aC], ad.hL(fp) && ad.a21(player, fp)) return aiK(player, iS, fp, afP);
					for (aC = 0; aC < 4; aC++)
						if (fp = fa + iz[aC], ad.hL(fp)) return aiK(player, iS, fp, afP);
					for (aC = 0; aC < 4; aC++)
						if (fp = fa + iz[aC], ad.fc(fp)) return aiK(player, iS, fp, afP)
				}(player, iS, afP)
			}
			return 1
		}(aC, bP.jU(n9[aC]), mv[aC] % 64) && (bQ.n3.afd(aC), bQ.aNr.agT(aC))
	}, this.aiF = function(player, fX, ia, o4, iS) {
		if (!(5 <= ia)) {
			var agq = aE.fV;
			if (bD.h7.hy(agq) && bw.fe(player, agq) && player !== agq && 0 !== ah.hS[agq].length && bD.h7.a7Y(player, 5)) {
				for (var aiG, fz = !1, aC = 0; aC < 4; aC++)
					if (aiG = fX + bP.iq[aC] << 2, ad.fg(aiG) && !ad.fc(aiG) && ad.fd(aiG) === agq) {
						fz = !0;
						break
					} fz && (aO.aB0(719, 0), ia = iS < 25e3 ? L(558) + " (" + bD.pa.a3I(iS) + ") ⛵" : L(559) + " (" + bD.pa.a3I(iS) + ") 🚢", aO.a2S(180, ia, 719, player, bE.qx, bE.qL, -1, !0, void 0, {
					g5: 1,
					o4: o4
				}))
			}
		}
	}
}

function aew() {
	this.lI = 512, this.afy = 6, this.mu = 0, this.nD = 0, this.my = new Uint16Array(this.lI), this.n9 = new Uint32Array(this.lI), this.afw = new Uint16Array(this.lI), this.aAp = new Uint32Array(this.lI), this.agY = new Uint16Array(this.lI), this
		.mx = new Uint16Array(this.lI), this.mv = new Uint8Array(this.lI), this.aga = new Uint8Array(this.lI), this.agb = new Uint8Array(this.lI), this.mw = new Array(this.lI), this.n8 = new Uint16Array(this.lI), this.afx = new Uint32Array(this.lI),
		this.aCM = new Uint16Array(this.lI), this.agc = new Int16Array(this.lI);
	var aiN = new Float64Array(this.lI);
	this.l8 = new Uint8Array(aE.fi), this.aCJ = new Uint16Array(aE.fi << 3), this.dv = function() {
		this.mu = 0, this.nD = 0, this.l8.fill(0), this.mw.fill(null)
	}, this.nF = function(player, jM) {
		var iS = bR.gI[0],
			mz = bR.gN[1],
			mP = bR.h[0],
			aiO = this.nD,
			fl = this.mu,
			aiP = bP.jT(mP[0]),
			aiQ = this.l8[player],
			aiR = (player << 3) + aiQ;
		this.my[fl] = aiR, this.n9[fl] = aiP, this.afw[fl] = 0, iS < 60 && (bD.h7.h8(player, 60 - iS), iS = 60), this.aAp[fl] = iS, this.agY[fl] = bQ.jW.nF(fl, bP.jV(aiP)), this.mx[fl] = aiO, this.mv[fl] = mz, this.aga[fl] = 0, this.agb[fl] = 0,
			this.mw[fl] = mP, this.n8[fl] = 0, this.afx[fl] = aiP, this.aCM[fl] = jM + 1, this.agc[fl] = bQ.lt.ahu(mP[mP.length - 1], mz), this.nD = (aiO + 1) % 65536, this.l8[player] = aiQ + 1, this.aCJ[aiR] = fl, this.mu++, bQ.mz.aiF(player,
				mP[mP.length - 1], mz, aiO, iS), bQ.aAq.show(player, aiO)
	}, this.eq = function() {
		bQ.mz.eq(), bQ.t5.eq();
		var tA = bQ.tA;
		if (! function(uv) {
				var aiW, tA = bQ.tA,
					aiY = tA.ag0;
				if (bi.l1() % aiY == 0)
					for (var aOl, n9 = uv.n9, aAp = uv.aAp, agb = uv.agb, afw = uv.afw, agY = uv.agY, fl = uv.mu, agt = bV.fw << 4, aC = fl - 1; 0 <= aC; aC--) 65535 === afw[aC] || agb[aC] || (aOl = aAp[aC], aOl = tA.ag1 + Math.min(tA.ag2 * aOl,
						tA.ag3) + Math.min(aOl >> 3, tA.ag4), aiW = n9[aC], n9[aC] = aOl = function(uv, aC, g1, agt) {
						var mP = uv.mw[aC],
							fl = mP.length,
							aft = uv.n8[aC],
							aiP = 0 === aft ? uv.afx[aC] : bP.jT(mP[aft]),
							ahb = bP.jT(mP[aft + 1]),
							aia = aiP % agt,
							aib = ~~((aiP + .5) / agt),
							aic = ahb % agt,
							aid = ~~((ahb + .5) / agt),
							aie = aic - aia,
							aif = aid - aib,
							fo = Math.max(~~Math.sqrt(aie * aie + aif * aif + .5), 1),
							aiP = bO.gC(fo * (65535 - uv.afw[aC]), 65535) + function(mP, from, agt) {
								for (var eT = 0, fl = mP.length - 1, ib = from; ib < fl; ib++) {
									var aiP = bP.jT(mP[ib]),
										ahb = bP.jT(mP[ib + 1]),
										j6 = ahb % agt - aiP % agt,
										ahb = bO.gC(ahb, agt) - bO.gC(aiP, agt);
									eT += ~~Math.sqrt(j6 * j6 + ahb * ahb + .5)
								}
								return eT
							}(mP, aft + 1, agt),
							hE = bO.gC(65535 * aiP + g1 - 1, g1);
						if (hE <= 1) return uv.n8[aC] = fl - 2, uv.afw[aC] = 65535, bP.jT(mP[fl - 1]);
						g1 = bO.gC(65535 * aiP, hE);
						var aih = uv.afw[aC] + Math.max(bO.gC(g1, fo), 1);
						for (; 65535 <= aih && aft + 2 < fl;) {
							aft++, aia = aic, aib = aid, ahb = bP.jT(mP[aft + 1]), aie = (aic = ahb % agt) - aia, aif = (aid = ~~((ahb + .5) / agt)) - aib;
							var aii = Math.max(~~Math.sqrt(aie * aie + aif * aif + .5), 1);
							aih = bO.gC((aih - 65535) * fo, aii), fo = aii
						}
						if (uv.n8[aC] = aft, 65535 <= aih) return uv.afw[aC] = 65535, ahb;
						return uv.afw[aC] = aih, aia + bO.gC(aih * aie, 65535) + agt * (aib + bO.gC(aih * aif, 65535))
					}(uv, aC, aOl * aiY, agt), agY[aC] = bQ.jW.aiZ(agY[aC], aiW, aOl))
			}(this), bi.l1() % tA.ag5 == 0) {
			var aC, lz, g5, ev, aij, a2w, aik, iE, aDn, o7, o8, aiP, lh, ail, aim, hJ = aE.fV,
				em = bQ.lt.aNo(hJ),
				fl = (uv = this).mu,
				n9 = uv.n9,
				my = uv.my,
				aAp = uv.aAp,
				aga = uv.aga,
				jW = bQ.jW.jW,
				ain = jW.length,
				aio = bQ.jW.aio,
				agt = bV.fw << 4,
				aip = aE.ie,
				acp = bj.fj,
				ahr = bQ.tA.agB * bQ.tA.agB,
				uv = bQ.tA.ag5,
				aiq = 1 << Math.min(uv + 1, 7),
				hk = aiN;
			for (hk.fill(0, 0, fl), aC = 0; aC < fl; aC++)
				for (aiP = n9[aC], lz = bP.jV(aiP), iE = my[aC] >> 3, o7 = aiP % agt, o8 = ~~((aiP + .5) / agt), aim = aAp[aC], g5 = 0; g5 < 9; g5++)
					if (!((aij = lz + aio[g5]) < 0 || ain <= aij))
						for (aik = jW[aij], a2w = aik.length, ev = 0; ev < a2w; ev++) ail = aik[ev], lh = my[ail] >> 3, iE == lh || aip && acp[iE] === acp[lh] && acp[iE] || (lh = n9[ail], (aDn = o7 - lh % agt) * aDn + (aDn = o8 - ~~((lh + .5) /
							agt)) * aDn < ahr && (hk[ail] += aim));
			for (aC = 0; aC < fl; aC++) 0 !== hk[aC] && (aAp[aC] = Math.max(aAp[aC] - hk[aC], 0), aga[aC] = aiq);
			bg.hB(hJ, em - bQ.lt.aNo(hJ), 15)
		}
		bi.l1() % tA.ag6 === tA.ag7 && ! function(uv) {
				for (var g5, fP, aAp = uv.aAp, my = uv.my, t8 = ah.hn, tA = bQ.tA, hK = tA.ag8, fl = uv.mu, aC = 0; aC < fl; aC++) {
					var player = my[aC] >> 3,
						aES = af.aPP(player),
						target = bQ.lt.aCL(aC),
						gD = aAp[aC];
					gD < target ? (g5 = Math.min(bO.gC(t8[player], tA.ag9), gD), fP = Math.max(bO.gC(g5, hK), 1), fP = Math.min(fP, target - gD, t8[player]), aAp[aC] = gD + fP, t8[player] -= fP) : target < gD && (g5 = Math.max(bO.gC(aES, tA.agA),
						gD), fP = Math.max(bO.gC(g5, hK), 1), fP = Math.min(fP, gD - target), aAp[aC] = gD - fP, bD.h7.hA(player, fP))
				}
			}(this),
			function(uv) {
				for (var aAp = uv.aAp, aga = uv.aga, aC = uv.mu - 1; 0 <= aC; aC--) aga[aC] = aga[aC] >> 1, 0 === aAp[aC] && (bQ.n3.afd(aC), bQ.aNr.agT(aC))
			}(this)
	}
}

function aex() {
	this.air = 32, this.shift = 5, this.fs = 0, this.fu = 0, this.jX = 0, this.ais = 0, this.ait = 4, this.jW = null, this.aio = new Int16Array(9), this.dv = function() {
		for (this.shift = 5; 16 << this.shift < bQ.tA.agB;) this.shift++;
		this.air = 1 << this.shift, this.jX = 1 + bO.gC(bV.fw - 1, this.air), this.ais = 1 + bO.gC(bV.fx - 1, this.air), this.jW = new Array(this.jX * this.ais), bD.tj.a6P(this.jW);
		var fs, fu, aio = this.aio,
			j = this.jX;
		for (fs = -1; fs <= 1; fs++)
			for (fu = -1; fu <= 1; fu++) aio[3 * (1 + fu) + 1 + fs] = fu * j + fs
	}, this.nF = function(aiv, aC) {
		return this.jW[aC].push(aiv), this.jW[aC].length - 1
	}, this.aiZ = function(aiw, aiP, ahb) {
		var aix, aiy, aiP = bP.jV(aiP),
			ahb = bP.jV(ahb);
		return aiP === ahb ? aiw : (aix = this.jW[aiP].pop(), this.jW[aiP].length === aiw ? this.nF(aix, ahb) : (aiy = this.jW[aiP][aiw], this.jW[aiP][aiw] = aix, bQ.z.agY[aix] = aiw, this.nF(aiy, ahb)))
	}
}

function af1() {
	function aj7(aj4, aiz) {
		var mP;
		return aj4 === aiz ? new Uint32Array([aj4, aiz]) : null !== (mP = bQ.af2.aj8(aj4, aiz)) ? mP : function(aj4, aiz) {
			var aC, fo, fX, fr, a0j, a4n, a8J, h, gS = bR.gS,
				buffer = (gS.fill(0), [aiz]),
				is = (gS[aiz] = 1, bP.is),
				fl = buffer.length;
			for (; 0 === gS[aj4] && fl;) {
				for (h = [], aC = 0; aC < fl; aC++)
					for (fX = buffer[aC], a8J = gS[fX], fo = 0; fo < 8; fo++) fr = fX + is[fo], ad.j0(4 * fr) && (a0j = gS[fr], a4n = a8J + 5 + ((1 & fo) << 1), 0 === a0j ? (h.push(fr), gS[fr] = a4n) : gS[fr] = Math.min(a4n, a0j));
				fl = (buffer = h).length
			}
			return 0 !== gS[aj4] ? ajA(aiz, aj4) : null
		}(aj4, aiz)
	}

	function ajA(jD, ajG) {
		for (var is = bP.is, ajH = -1, ia = 0, nc = []; ajG !== jD;)(ia = function(fX, ia) {
			var gS = bR.gS,
				is = bP.is,
				a8J = gS[fX];
			if (a8J - gS[fX + is[ia]] != 5 + ((1 & ia) << 1))
				for (var g4 = 0; g4 < 8; g4++) {
					var fo = g4 + ia + 6 & 7;
					if (a8J - gS[fX + is[fo]] == 5 + ((1 & fo) << 1)) return fo
				}
			return ia
		}(ajG, ia)) !== ajH && (nc.push(ajG), ajH = ia), ajG += is[ia];
		return nc.push(jD), new Uint32Array(nc)
	}
	this.ls = function(player, aiz) {
		return -1 !== aiz && !!bQ.lt.mU(player, aiz) && this.t0(player, aiz, 0, !0)
	}, this.t0 = function(player, aiz, aj0, aj1) {
		player = function(player, aiz, aj0, aj1) {
			var ai9 = bQ.lt.ahl(player, aiz);
			if (-1 === ai9) return -1;
			ai9 = bQ.lt.lu(ai9, aiz);
			if (-1 === ai9) return -1;
			var ajB = bP.jT(ai9);
			if (bQ.af2.aj5(ajB, bP.jT(aiz))) return bR.h[0] = new Uint32Array([ai9, aiz]), -2;
			if (!aj1) return null === (ajB = aj7(ai9, aiz)) ? -1 : (bR.h[0] = ajB, -2);
			aj1 = bQ.mQ.mV(ai9, aiz);
			if (0 <= aj1) return aj1;
			if (bQ.mQ.mW()) return -1;
			if (0 <= (aj1 = bQ.mQ.mV(aiz, ai9))) return bQ.mQ.mX(bQ.mQ.mY(bQ.mQ.get(aj1)));
			if (ai9 === aiz) return bQ.mQ.mX(new Uint32Array([ai9, aiz]));
			if (0 <= (aj1 = bQ.af2.t0(ai9, aiz))) return aj1;
			return aj0 ? function(ajD, player) {
				var ajG, gS = bR.gS,
					buffer = (gS.fill(0), [ajD]),
					is = (gS[ajD] = 1, bP.is),
					ajE = -1,
					fl = buffer.length;
				for (; - 1 === ajE && fl;) {
					for (var h = [], aC = 0; aC < fl; aC++)
						for (var fX = buffer[aC], a8J = gS[fX], fo = 0; fo < 8; fo++) {
							var a0j, a4n, fr = fX + is[fo],
								fP = 4 * fr;
							ad.j0(fP) ? (a0j = gS[fr], a4n = a8J + 5 + ((1 & fo) << 1), 0 === a0j ? (h.push(fr), gS[fr] = a4n) : gS[fr] = Math.min(a4n, a0j)) : -1 === ajE && fo % 2 == 0 && ad.a1y(player, fP) && (ajE = fX)
						}
					fl = (buffer = h).length
				}
				return -1 !== ajE ? (ajG = ajA(ajD = ajD, ajG = ajE), 0 <= (ajD = bQ.mQ.mV(ajG[0], ajD)) ? ajD : bQ.mQ.mX(ajG)) : -1
			}(aiz, player) : -1
		}(player, aiz, aj0, aj1);
		if (-2 !== player) {
			if (-1 === player) return !1;
			bR.h[0] = bQ.mQ.get(player)
		}
		return !0
	}, this.aj3 = function(aiP, aj4, aiz) {
		return bQ.af2.aj5(aiP, bP.jT(aiz)) ? (bR.h[0] = new Uint32Array([aj4, aiz]), !0) : this.aj6(aj4, aiz)
	}, this.aj6 = function(aj4, aiz) {
		aj4 = aj7(aj4, aiz);
		return null !== aj4 && (bR.h[0] = aj4, !0)
	}
}

function af3() {
	function aj2(aj4, aiz) {
		var jH = bP.ft(aj4),
			jI = bP.fv(aj4),
			jJ = bP.ft(aiz),
			jK = bP.fv(aiz);
		return jH === jJ ? ajK(jH, jI, jK) ? new Uint32Array([aj4, aiz]) : null : jI === jK ? ajL(jI, jH, jJ) ? new Uint32Array([aj4, aiz]) : null : ajM(jH, jI, jJ, jK, aj4, aiz) || ajM(jJ, jK, jH, jI, aj4, aiz)
	}

	function ajK(i1, jI, jK) {
		for (var kK = Math.min(jI, jK), oP = Math.max(jI, jK), fu = kK + 1; fu < oP; fu++)
			if (!ad.j0(bP.jQ(i1, fu))) return;
		return 1
	}

	function ajL(i3, jH, jJ) {
		for (var kK = Math.min(jH, jJ), oP = Math.max(jH, jJ), fs = kK + 1; fs < oP; fs++)
			if (!ad.j0(bP.jQ(fs, i3))) return;
		return 1
	}

	function ajM(jH, jI, jJ, jK, aj4, aiz) {
		for (var fl = Math.min(Math.abs(jJ - jH), Math.abs(jK - jI)), j6 = Math.sign(jJ - jH), j9 = Math.sign(jK - jI), aC = 0; aC < fl; aC++)
			if (!ad.j0(bP.jQ(jH += j6, jI += j9))) return null;
		return jH === jJ ? ajK(jH, jI, jK) ? new Uint32Array([aj4, bP.g8(jH, jI), aiz]) : null : ajL(jI, jH, jJ) ? new Uint32Array([aj4, bP.g8(jH, jI), aiz]) : null
	}
	this.aj5 = function(aiP, ahb) {
		for (var agt = bV.fw << 4, o7 = aiP % agt, o8 = bO.gC(aiP, agt), j6 = ahb % agt - o7, j9 = bO.gC(ahb, agt) - o8, hE = Math.max(Math.abs(j6), Math.abs(j9)), ajJ = -1, aC = 0; aC <= hE; aC++) {
			var fs = o7 + bO.gC(j6 * aC, Math.max(hE, 1)),
				fu = o8 + bO.gC(j9 * aC, Math.max(hE, 1)),
				fs = bP.g8(fs >> 4, fu >> 4);
			if (fs !== ajJ && !ad.j0(bP.fb(fs))) return !1;
			ajJ = fs
		}
		return !0
	}, this.aj8 = aj2, this.t0 = function(aj4, aiz) {
		aj4 = aj2(aj4, aiz);
		return null === aj4 ? -1 : bQ.mQ.mX(aj4)
	}
}

function af8() {
	var ajN = [];
	this.dv = function() {
		ajN = []
	}, this.mW = function() {
		return 65536 === ajN.length
	}, this.mV = function(aj4, aiz) {
		for (var mQ = ajN, fl = mQ.length, aC = 0; aC < fl; aC++) {
			var hJ = mQ[aC];
			if (hJ[0] === aj4 && hJ[hJ.length - 1] === aiz) return aC
		}
		return -1
	}, this.mY = function(mP) {
		var ajO = new Uint32Array(mP.length);
		return ajO.set(mP), ajO.reverse()
	}, this.afk = function(iE, lh) {
		var hE = iE.length - 1,
			ajP = new Uint32Array(hE + lh.length);
		return ajP.set(iE, 0), ajP.set(lh, hE), ajP
	}, this.afp = function(iE, lh, a0D, fX, ajQ) {
		ajQ && (a0D = (lh = this.mY(lh)).length - a0D - 2);
		ajQ = lh.subarray(a0D + 1 + (fX === lh[a0D + 1])), fX = new Uint32Array(iE.length + ajQ.length);
		return fX.set(iE, 0), fX.set(ajQ, iE.length), fX
	}, this.mX = function(mP) {
		return ajN.push(mP), ajN.length - 1
	}, this.get = function(aC) {
		return ajN[aC]
	}, this.mS = function() {
		return ajN
	}, this.ajS = function(aj4, aiz) {
		return null
	}
}

function afF() {
	this.e3 = function(player, o4, s1) {
		player = bQ.lt.o6(player, o4);
		return player < 0 || !this.ajT(player) || (o4 = 7 & s1, !bP.jR(s1 = s1 >> 3)) || 3 < o4 && 7 != o4 || (bR.gN[1] = o4, !bQ.nA.sz(s1)) || (o4 = bP.fb(this.afv(player)), !ad.j0(o4)) || ad.fT(o4) !== ad.fT(bP.fb(s1)) ? -1 : player
	}, this.t6 = function(player, n6, s1) {
		var lz = bQ.z,
			fX = s1 >> 3,
			s1 = 7 & s1,
			ajD = this.afv(n6);
		return !!bQ.lr.aj3(lz.n9[n6], ajD, fX) && (lz.mw[n6] = bR.h[0], lz.n8[n6] = 0, lz.afw[n6] = 0, lz.afx[n6] = lz.n9[n6], lz.mv[n6] = s1, lz.agc[n6] = bQ.lt.ahu(fX, s1), bQ.mz.aiF(player, fX, s1, lz.mx[n6], lz.aAp[n6]), bQ.aAq.show(player,
			lz.mx[n6]), !0)
	}, this.t3 = function(player, o4, jM) {
		jM = Math.min(jM, 1023) + 1;
		return !!this.s9(player, o4, jM) && (bQ.z.aCM[bR.gN[2]] = jM, !0)
	}, this.s9 = function(player, o4, aBk) {
		return !!bD.h7.hy(player) && !((player = bQ.lt.o6(player, o4)) < 0 || bQ.z.aCM[player] === aBk || (bR.gN[2] = player, 0))
	}, this.ajT = function(n6) {
		n6 = bQ.z.mv[n6] % 64;
		return n6 < 4 || 7 == n6
	}, this.afv = function(n6) {
		var fX = bP.jU(bQ.z.n9[n6]);
		if (!ad.j0(bP.fb(fX)))
			for (var iz = bP.is, aC = 0; aC < 8; aC++)
				if (ad.j0(bP.fb(fX + iz[aC]))) return fX + iz[aC];
		return fX
	}
}

function afC() {
	this.eq = function(player, o4) {
		return !!bQ.s8.s9(player, o4, 0) && (o4 = bR.gN[2], bQ.z.aCM[o4] = 0, function(player, n6) {
			var aC, g4;
			if (bQ.s8.ajT(n6)) {
				var afP = bQ.s8.afv(n6),
					ajU = bP.fb(afP);
				if (ad.j0(ajU)) {
					var ai7 = ad.fT(ajU),
						ahk = ah.hS[player],
						iz = bP.iq,
						ajW = -1,
						ajX = 0,
						ajY = 0;
					for (aC = 0; aC < ahk.length; aC++) {
						var ajZ = ahk[aC] >> 2;
						for (g4 = 0; g4 < 4; g4++) {
							var aja = ajZ + iz[g4],
								aMJ = bP.fb(aja);
							ad.j0(aMJ) && ad.fT(aMJ) === ai7 && (aMJ = bP.jF(aja, afP), -1 === ajW || aMJ < ajY) && (ajW = aja, ajX = (g4 + 2) % 4, ajY = aMJ)
						}
					} - 1 !== ajW && bP.jR(ajW) && bQ.s8.t6(player, n6, (ajW << 3) + ajX)
				}
			}
		}(player, o4), !0)
	}
}

function afG() {
	var ajb = -1;

	function ajc() {
		return !aE.hu && !aE.hv && bD.h7.hx(1) && bD.h7.hy(aE.fV)
	}
	this.dv = function() {
		ajb = -1
	}, this.aBo = function() {
		var player;
		return -1 === ajb ? -1 : (player = aE.fV, !bD.h7.hy(player) || (player = bQ.lt.o6(player, ajb)) < 0 || !bQ.s8.ajT(player) ? ajb = -1 : player)
	}, this.select = function(o4) {
		var n6;
		ajc() && (-1 !== this.aBo() && ajb === o4 ? ajb = -1 : 0 <= (n6 = bQ.lt.o6(aE.fV, o4)) && bQ.s8.ajT(n6) && (ajb = o4))
	}, this.click = function(mJ, mK, fX, a61) {
		var aBn;
		return ajc() ? -1 === (aBn = this.aBo()) ? -1 !== (mJ = function(mJ, mK) {
			for (var player = aE.fV, lz = bQ.z, w3 = player << 3, w4 = w3 + lz.l8[player], ajd = bP.j7(mJ), aje = bP.jA(mK), ahr = 0, aXo = -1, aC = w3; aC < w4; aC++) {
				var j6, j9, n6 = lz.aCJ[aC];
				bQ.s8.ajT(n6) && (j6 = ajd - bP.j8(lz.n9[n6]), j9 = aje - bP.jB(lz.n9[n6]), j6 = j6 * j6 + j9 * j9, (j9 = bQ.a9e.ahs(lz.aAp[n6])) * j9 < j6 && !bQ.a27.agy(n6, mJ, mK) || (-1 === aXo || j6 < ahr) && (ahr = j6, aXo = n6))
			}
			return aXo
		}(mJ, mK)) && (ajb = bQ.z.mx[mJ], !0) : (function(n6, fX) {
			var player = aE.fV,
				ajU = bP.fb(bQ.s8.afv(n6)),
				ajU = ad.fT(ajU);
			bQ.iM.ajf(player, fX, ajU) ? bQ.t5.has(player) ? (fX = (bR.gN[7] << 3) + bR.gN[6], bQ.s8.e3(player, bQ.z.mx[n6], fX) < 0 ? bo.t2.ajg() : bB.iC.sB(bQ.z.mx[n6], fX)) : bo.t2.ajh() : bo.t2.ajg()
		}(aBn, fX), a61 || (ajb = -1), !0) : !(ajb = -1)
	}, this.ahs = function(iS) {
		var tA = bQ.tA,
			iS = 13 * (.9 + .1 * Math.log10(Math.max(iS, 1))),
			aGj = bD.tc.w8(tA.agR, 1.7),
			aGj = bP.jP(aGj),
			iS = Math.min(tA.agQ * iS, Math.max(tA.agP * iS, aGj));
		return bM.u5() && (iS *= tA.agS), iS
	}
}

function aey() {
	var a2b = 32,
		a2a = new Array(2);

	function a6t(ev) {
		var fs, fu, fX, j9, j6, ih = a2b,
			a6s = bD.tc.a6t(ih, ih),
			io = bD.tc.getContext(a6s, !0),
			ik = bD.tc.getImageData(io, ih, ih),
			a2V = ik.data,
			lz = (ih >> 1) - .5,
			m0 = Math.sqrt(lz * lz);
		for (a2V.fill(255), fu = 0; fu < ih; fu++)
			for (fs = 0; fs < ih; fs++) j6 = fs - lz, j9 = fu - lz, fX = 4 * (fu * ih + fs), j6 = 714 * (m0 - Math.sqrt(j6 * j6 + j9 * j9)) / m0, a2V[2 + fX] = ev, a2V[3 + fX] = 255 < j6 ? 0 : j6;
		return io.putImageData(ik, 0, 0), a6s
	}
	this.aji = -1, this.dv = function() {
		this.aji = -1, a2a[0] || (a2a[0] = a6t(255), a2a[1] = a6t(0))
	}, this.ajj = function(io, fP, fs, fu, eT, aC) {
		bD.h7.hy(aE.fV) && (io.setTransform(fP *= 4 / 3 * .625, 0, 0, fP, fs - (eT *= 4 / 3), fu - eT), io.drawImage(a2a[+(bQ.z.mx[aC] === this.aji)], 0, 0))
	}
}

function af7() {
	var ajk = -1;

	function ajl(player, ad1, ai7) {
		if (ad.j0(bP.fb(ad1))) return function(player, ad1, ai7) {
			var id = ad.fT(bP.fb(ad1));
			return !!ajp(player, id, ai7) && (bR.gN[6] = 7, bR.gN[7] = ad1, !0)
		}(player, ad1, ai7);
		(ajk = bQ.lt.aht(bP.fb(ad1))) === player && -1 === ai7 && (ajk = -1);
		for (var ad2 = bP.it(), ajn = [];;) {
			var ajE = function(ad1, ad2, ajn, player) {
				for (var i1 = bP.ft(ad1), i3 = bP.fv(ad1), ad4 = bV.fw - 2, aDt = bV.fx - 2, ad5 = -1, fo = 0; fo < ad2; fo++) {
					var aDs = Math.max(i1 - fo, 1),
						aSB = Math.max(i3 - fo, 1),
						a1m = Math.min(i1 + fo, ad4),
						a1l = Math.min(i3 + fo, aDt),
						jD = ad6(i1, a1m - i1, i3 - fo, ajn, aDt, 1, player),
						jE = ad6(i1 - 1, i1 - aDs - 1, i3 - fo, ajn, aDt, -1, player),
						a1m = ad6(i1, a1m - i1, i3 + fo, ajn, aDt, 1, player),
						aDs = ad6(i1 - 1, i1 - aDs - 1, i3 + fo, ajn, aDt, -1, player),
						ad9 = adA(i3, a1l - i3 - 1, i1 - fo, ajn, ad4, 1, player),
						adB = adA(i3 - 1, i3 - aSB - 2, i1 - fo, ajn, ad4, -1, player),
						a1l = adA(i3, a1l - i3 - 1, i1 + fo, ajn, ad4, 1, player),
						aSB = adA(i3 - 1, i3 - aSB - 2, i1 + fo, ajn, ad4, -1, player);
					if (ad5 = adE(ad5, jD, ad1), ad5 = adE(ad5, jE, ad1), ad5 = adE(ad5, a1m, ad1), ad5 = adE(ad5, aDs, ad1), ad5 = adE(ad5, ad9, ad1), ad5 = adE(ad5, adB, ad1), ad5 = adE(ad5, a1l, ad1), 0 <= (ad5 = adE(ad5, aSB, ad1)) && fo *
						fo >= bP.jF(ad5, ad1)) return ad5
				}
				return -1
			}(ad1, ad2, ajn, player);
			if (-1 === ajE) break;
			var id = ad.fT(bP.fb(ajE));
			if (ajp(player, id, ai7)) return !! function(player, ajE, ad1) {
				for (var ia = bP.ja(ajE, ad1), aC = 0; aC < 4; aC++) {
					var fX = bP.jY(ajE, ia);
					if (ajs(bP.fb(fX), player)) return bR.gN[6] = ia, 1;
					ia = (ia + 1) % 4
				}
				return
			}(player, ajE, ad1) && (bR.gN[7] = ajE, !0);
			ajn.push(id)
		}
		return !1
	}

	function ajp(player, id, ai7) {
		return -1 === ai7 ? bQ.lt.ahj(player, id) : id === ai7
	}

	function ad6(fs, fl, fu, ajn, aDt, gB, player) {
		if (!(fu < 1 || aDt < fu))
			for (var aC = 0; aC <= fl; aC++) {
				var fP = bP.jQ(fs, fu);
				if (bQ.lt.afz(fP) && !bD.tj.has(ajn, ad.fT(fP)) && ajr(fP, player)) return fP >> 2;
				fs += gB
			}
		return -1
	}

	function adA(fu, fl, fs, ajn, ad4, gB, player) {
		if (!(fs < 1 || ad4 < fs)) {
			fl = Math.max(fl, 0);
			for (var aC = 0; aC <= fl; aC++) {
				var fP = bP.jQ(fs, fu);
				if (bQ.lt.afz(fP) && !bD.tj.has(ajn, ad.fT(fP)) && ajr(fP, player)) return fP >> 2;
				fu += gB
			}
		}
		return -1
	}

	function adE(jD, jE, ad1) {
		return -1 !== jE && (-1 === jD || bP.jF(jE, ad1) < bP.jF(jD, ad1)) ? jE : jD
	}

	function ajr(fP, player) {
		for (var iz = bP.ir, aC = 0; aC < 4; aC++)
			if (ajs(fP + iz[aC], player)) return 1
	}

	function ajs(fP, player) {
		return -1 === ajk ? ad.aNM(fP, player) : bQ.lt.aht(fP) === ajk
	}
	this.iN = function(player, ad1) {
		return !!bQ.nA.nB(player) && ajl(player, ad1, -1)
	}, this.ajf = ajl
}

function dy() {
	this.aaO = [L(560), L(561), L(562), L(563), L(564), L(565), L(566), L(567), L(568), L(569), L(570), L(571), L(572), L(573), L(574), L(575)];
	var ajt = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aGN = new Array(ajt.length), this.dv = function() {
		var h = bm.buffer.data[155].value.split(";"),
			lz = h.length;
		if (function() {
				for (var fl = ajt.length, aC = 0; aC < fl; aC++) ba.aGN[aC] = ajt[aC]
			}(), !(lz > ajt.length))
			for (var aC = 0; aC < lz; aC++) h[aC].length && (this.aGN[aC] = h[aC])
	}, this.aaQ = function(eU, code) {
		for (var aGN = this.aGN, ajv = ajt, pW = (aGN[eU] = code, ""), fl = aGN.length, ajw = [], aC = 0; aC < fl; aC++) ajw.push(aGN[aC] === ajv[aC] ? "" : aGN[aC]);
		fl--;
		for (aC = 0; aC < fl; aC++) pW += ajw[aC] + ";";
		bm.rv.q1(155, pW += ajw[fl])
	}, this.aaN = function() {
		bm.rv.q1(155, ""), this.dv()
	}, this.ev = function(code, eU) {
		return code === this.aGN[eU] || code === this.aGN[eU + 1]
	}
}

function dk() {
	var ajx = new Array(1),
		ajy = new Array(1),
		ajz = 20,
		ej = 0,
		ak0 = !1;

	function ak2() {
		ajz++, bt.play()
	}
	this.dv = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				ajy[aC] = 0, ajx[aC] = document.createElement("audio"), ajx[aC].src = src, ajx[aC].setAttribute("preload", "auto"), ajx[aC].setAttribute("controls", "none"), ajx[aC].style.display = "none", ajx[aC].onpause = function() {
					ajy[aC] = 1
				}, ajx[aC].oncanplaythrough = function() {
					ajy[aC] = 0 === ajy[aC] ? 1 : ajy[aC]
				}, document.body.appendChild(ajx[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			ak0 = !0
		}
	}, this.yB = function() {
		if (ak0) {
			ak0 = !1;
			for (var aC = 0; 0 <= aC; aC--) ajx[aC].onpause = null, ajx[aC].oncanplaythrough = null, u.removeChild(document.body, ajx[aC]), ajx[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bt.play()
	}), this.play = function() {
		if (ak0) {
			var em = performance.now();
			if (ej + 66 < em)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === ajy[aC]) return ej = em, ajy[aC] = 2, void ajx[aC].play();
			0 < ajz && (ajz--, setTimeout(ak2, 66))
		}
	}
}

function cj() {
	this.aCt = function() {
		var ak5;
		return !(am.la < 3 || ah.hZ[mf[0]] >= aE.ko >> 1) && (aE.ie ? 9 !== aE.lM && (ak5 = af.aPR(), !(2 * af.aPS(bk.ld()) >= ak5)) : function() {
			if (8 === aE.lM) return !1;
			var ak5 = af.aPR();
			if (2 * ah.hn[mf[0]] >= ak5) return !1;
			return !0
		}())
	}
}

function cJ() {
	this.dv = function() {
		if (0 === aE.data.sResourcesType) {
			for (var aiQ = aE.l4, hn = ah.hn, aC = 0; aC < aiQ; aC++) hn[aC] = 512;
			var aiR = aE.a14,
				lH = aF.lH,
				iS = aF.iS;
			for (aC = aiQ; aC < aiR; aC++) hn[aC] = lH[iS[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fl = aE.a14, hn = ah.hn, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fl; aC++) hn[aC] = sResourcesValue
		} : function() {
			for (var fl = aE.a14, hn = ah.hn, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fl; aC++) hn[aC] = sResourcesData[aC]
		})();
		bg.nc[8] = ah.hn[aE.fV]
	}
}

function da() {
	var aJi = 501,
		akD = (this.akA = new Uint32Array(aJi), this.t8 = new Uint32Array(aJi), this.aG2 = new Uint16Array(aJi), this.akB = 0, this.akC = 0, 1),
		yT = 0;

	function akG(self) {
		self.max.fill(0)
	}

	function akI(self, aC) {
		self.max[0] = Math.max(self.akA[aC], self.max[0]), self.max[1] = Math.max(self.t8[aC], self.max[1]), self.max[2] = Math.max(self.aG2[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.akE = 0, this.nc = new Array(21), this.akF = null, this.dw = function() {
		this.akF = [L(576), L(577), L(578), L(579), L(580), L(581), L(582), L(583), L(401), L(402), L(584), L(585), L(586), L(587), "", L(588), L(589), L(590), L(359), L(591), L(592)]
	}, this.dv = function() {
		this.akB = 0, this.akC = 0, akD = 1, this.akE = 0, yT = 0, akG(this), this.nc.fill(0)
	}, this.aaY = function() {
		return 2 <= this.akB && !this.akC
	}, this.aAm = function() {
		0 !== bi.l1() && (this.akC = 1, bh.iV) && bh.ub()
	}, this.sx = function(player, jM) {
		bD.h7.a7X(player) && (this.nc[0] += jM + 1, this.nc[1]++, this.nc[12] += bR.gI[1])
	}, this.sS = function(player, ry) {
		__fx.donationsTracker.logDonation(player, ry, bR.gI[0], aX.a9E());
		player === aE.fV && (aO.sS(bR.gI[0], bR.gI[1], ry), this.nc[12] += bR.gI[1], this.nc[16] += bR.gI[0]), ry === aE.fV && (aO.aB4(bR.gI[0], player), this.nc[10] += bR.gI[0])
	}, this.t1 = function(player) {
		bD.h7.a7X(player) && (this.nc[2]++, this.nc[12] += bR.gI[1])
	}, this.tG = function(player) {
		bD.h7.a7X(player) && (this.nc[19]++, this.nc[12] += bR.gI[1])
	}, this.aiJ = function(player) {
		bD.h7.a7X(player) && this.nc[20]++
	}, this.hB = function(player, a8J, eU) {
		bD.h7.a7X(player) && (this.nc[eU] += a8J)
	}, this.eq = function() {
		var self;
		this.akE || 0 < yT-- || ((self = this).akA[self.akB] = ah.hZ[aE.fV], self.t8[self.akB] = ah.hn[aE.fV], self.aG2[self.akB] = af.aG3(aE.fV), akI(self, self.akB), self.akB++, self.akB === aJi && function(self) {
			akG(self), akI(self, 0), self.akB = 1 + bO.gC(aJi, 2);
			for (var aC = 1; aC < self.akB; aC++) self.akA[aC] = self.akA[2 * aC], self.t8[aC] = self.t8[2 * aC], self.aG2[aC] = self.aG2[2 * aC], akI(self, aC);
			akD *= 2
		}(self), yT = akD - 1, bh.nT(), 0 === ah.ng[aE.fV] && (self.akE = bi.l1()))
	}
}

function db() {
	this.j = 0, this.k = 0, this.vq = 0, this.vr = 0, this.akK = 0, this.akL = 0, this.aD7 = 0, this.wW = 0;
	var akN = this.akM = 0;
	this.akO = 0, this.akP = 0, this.akQ = 0, this.aCS = 0, this.eU = 0, this.aFd = null, this.iV = !1, this.akR = -1, this.akS = !1, this.akT = [0, 0], this.dw = function() {
		this.aFd = [L(593), L(135, 0, "Balance"), L(134, 0, "Interest"), L(594)]
	}, this.dv = function() {
		this.iV = !1, this.akR = -1, this.akS = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fo = a1.a2.iv() && i.j < i.k ? 1 : a1.a2.iv() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fo * this.j), this.j -= a1.a2.iv() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.aCS = Math.floor(this.k / 150), this.aCS = Math.max(this.aCS, 1.5), this.vq = Math.floor(1 + .02 * this
			.j), this.vr = Math.floor(1 + .04 * this.j), this.aD7 = this.vr, akN = Math.floor(.75 * this.aD7), this.wW = Math.floor(1 + .075 * this.j), this.akO = Math.floor(1 + .1125 * this.j), this.akP = Math.floor(this.j * (a1.a2.iv() ? .03 :
				.029)), this.akP = Math.max(this.akP, 4), this.akQ = Math.floor(.035 * this.j), this.akQ = Math.max(this.akQ, 4), this.akM = this.k - 2 * this.aD7 - this.wW - this.akO, this.iV && this.akU()
	}, this.hz = function(mJ, mK) {
		var a17, a16;
		return !!this.iV && (a16 = mJ, a17 = mK, mJ -= bO.gC(i.j - this.j, 2), mK -= bO.gC(i.k - this.k, 2), mJ < 0 || mK < 0 || mJ >= this.j || mK >= this.k || mJ >= this.j - this.akO && mK < this.akO ? -1 !== aN.hz(a16, a17) || bF.hz(a16,
			a17) || this.ub() : mK < this.akO || (mK < this.k - this.wW ? (this.akS = !0, this.akR = (mJ - 2 * this.vq - this.akK) / this.akL, 3 !== this.eU && (bi.e2 = !0)) : (a16 = (a16 = Math.floor(mJ / (this.j / this.aFd.length))) < 0 ?
				0 : a16 >= this.aFd.length ? this.aFd.length - 1 : a16) !== this.eU && (this.eU = a16, this.akU(), bi.e2 = !0)), !0)
	}, this.a5Y = function(mJ, mK) {
		return this.akT[0] = mJ, this.akT[1] = mK, !(!this.iV || !this.akS || (mJ -= bO.gC(i.j - this.j, 2), mK = this.akR, this.akR = (mJ - 2 * this.vq - this.akK) / this.akL, (0 <= this.akR && this.akR <= 1 || 0 <= mK && mK <= 1) && (bi.e2 = !
			0), 0))
	}, this.a5x = function() {
		this.akS && (this.akS = !1)
	}, this.a69 = function() {
		this.iV ? this.ub() : this.show()
	}, this.show = function() {
		bg.aaY() && (this.iV = !0, this.akU())
	}, this.ub = function() {
		this.iV = !1, this.akR = -1, bi.e2 = !0
	}, this.akU = function() {
		this.eU < 2 ? this.akK = aR.measureText(bD.pa.a3I(bg.max[this.eU]), bD.tc.vB(0, this.akP)) : 2 === this.eU && (this.akK = aR.measureText(bD.pa.a8C(6, 2), bD.tc.vB(0, this.akP))), this.akL = this.j - 2 * this.vq - this.akK - this.vr
	}, this.nT = function() {
		this.iV && this.akU()
	}, this.z8 = function() {
		this.iV && this.aDO()
	}, this.aDO = function() {
		var fs = bO.gC(i.j - this.j, 2),
			fu = bO.gC(i.k - this.k, 2),
			fxSmooth = (z9.setTransform(1, 0, 0, 1, fs, fu), __fx.utils.clipRounded(z9, 0, 0, this.j, this.k, .15 * this.akO));
		z9.fillStyle = bE.qL, z9.fillRect(0, this.akO, this.j, this.k - this.akO), this.akV(), this.aZD(), fxSmooth ? __fx.utils.strokeRounded(z9, 0, 0, this.j, this.k, z9.lineWidth, .15 * this.akO) : z9.strokeRect(0, 0, this.j, this.k), bD.tc
			.textAlign(z9, 2), z9.font = bD.tc.vB(0, this.akP), 0 === this.eU ? this.akW(bg.akA, fs, fu) : 1 === this.eU ? this.akW(bg.t8, fs, fu) : 2 === this.eU ? this.akX(fs, fu) : 3 === this.eU && (this.akY(fs, fu), this.akZ(fs, fu)), aN.aA6(
				Math.floor(fs + this.j - .725 * this.akO), Math.floor(fu + .275 * this.akO), Math.floor(.45 * this.akO)), fxSmooth && z9.restore(), z9.setTransform(1, 0, 0, 1, 0, 0)
	}, this.akV = function() {
		var aC, em;
		for (z9.lineWidth = this.aCS, bD.tc.textBaseline(z9, 1), bD.tc.textAlign(z9, 1), z9.strokeStyle = bE.qO, z9.font = bD.tc.vB(1, this.akQ), em = this.j / this.aFd.length, z9.fillStyle = bE.qk, z9.fillRect(this.eU * em, this.k - this.wW, em,
				this.wW), z9.fillStyle = bE.qO, z9.fillStyle = __fx.utils.lineColor(bE.qO), z9.fillRect(0, this.k - this.wW - .5 * this.aCS, this.j, this.aCS), aC = 1; aC <= 3; aC++) z9.fillRect(aC * em, this.k - this.wW, this.aCS, this.wW);
		for (z9.fillStyle = bE.qO, aC = this.aFd.length - 1; 0 <= aC; aC--) z9.fillText(bD.p4.a77(this.aFd[aC], 0, .9 * em), (aC + .5) * em, this.k - .46 * this.wW)
	}, this.aZD = function() {
		z9.fillStyle = bE.rC, z9.fillRect(0, 0, this.j, this.akO), z9.fillStyle = bE.qO, z9.fillStyle = __fx.utils.lineColor(bE.qO), z9.fillRect(0, this.akO - .5 * this.aCS, this.j, this.aCS), z9.fillStyle = bE.qO, z9.font = bD.tc.vB(1, .39 *
			this.akO), z9.fillText(bD.p4.a77(L(595), 0, .8 * this.j), Math.floor(this.j / 2), Math.floor(.55 * this.akO))
	}, this.akW = function(h, fs, fu) {
		var lz = bg.max[this.eU],
			a6R = (z9.setTransform(1, 0, 0, 1, fs + 2 * this.vq + this.akK, fu + this.aD7 + this.akO), z9.lineWidth = 2, this.akM / Math.sqrt(lz));
		z9.beginPath(), z9.moveTo(this.akL, this.akM - a6R * Math.sqrt(h[bg.akB - 1]));
		for (var aC = bg.akB - 2; 0 <= aC; aC--) z9.lineTo(aC * this.akL / (bg.akB - 1), this.akM - a6R * Math.sqrt(h[aC]));
		z9.stroke();
		fs = this.aA6(h, a6R, .5);
		fs < .95 && z9.fillText(bD.pa.a3I(lz), -this.vq, 0), .05 < Math.abs(fs - .5) && z9.fillText(bD.pa.a3I(Math.floor(lz / 4)), -this.vq, Math.floor(this.akM / 2)), .05 < fs && z9.fillText("0", -this.vq, this.akM)
	}, this.akX = function(fs, fu) {
		z9.setTransform(1, 0, 0, 1, fs + 2 * this.vq + this.akK, fu + this.aD7 + this.akO), z9.lineWidth = 2;
		var a6R = this.akM / Math.max(bg.max[this.eU], 1);
		z9.beginPath(), z9.moveTo(this.akL, this.akM - a6R * bg.aG2[bg.akB - 1]);
		for (var aC = bg.akB - 2; 0 <= aC; aC--) z9.lineTo(aC * this.akL / (bg.akB - 1), this.akM - a6R * bg.aG2[aC]);
		z9.stroke();
		fs = this.aA6(bg.aG2, a6R, 1), fu = bg.max[this.eU] / 100;
		fs < .95 && z9.fillText(bD.pa.a8C(fu, 2), -this.vq, 0), .05 < Math.abs(fs - .5) && z9.fillText(bD.pa.a8C(fu / 2, 2), -this.vq, Math.floor(this.akM / 2)), .05 < fs && z9.fillText(bD.pa.a8C(0, 2), -this.vq, this.akM)
	}, this.akY = function(fs, fu) {
		z9.setTransform(1, 0, 0, 1, fs + .34 * this.j, fu + 2 * akN + this.akO), bD.tc.textAlign(z9, 2);
		for (var aFL = this.k - 4 * akN - this.wW - this.akO, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) z9.fillText(bD.p4.a77(bg.akF[h[aC]], 0, .31 * this.j), 0, aC * aFL / 9);
		var gD = bg.nc;
		for (z9.setTransform(1, 0, 0, 1, fs + .39 * this.j, fu + 2 * akN + this.akO), bD.tc.textAlign(z9, 0), z9.fillText(bD.pa.a8C(100 * gD[0] / (1024 * Math.max(gD[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) z9.fillText(gD[h[aC]].toString(), 0,
			aC * aFL / 9);
		z9.fillText(bD.pa.a8C(100 * (1 - ah.hZ[aE.fV] / gD[7]), 0), 0, aFL)
	}, this.akZ = function(fs, fu) {
		z9.setTransform(1, 0, 0, 1, fs + .79 * this.j, fu + 2 * akN + this.akO), bD.tc.textAlign(z9, 2);
		var aC, aFL = this.k - 4 * akN - this.wW - this.akO;
		for (z9.fillStyle = bE.qf, aC = 2; 0 <= aC; aC--) z9.fillText(bD.p4.a77(bg.akF[aC + 8], 0, .31 * this.j), 0, aC * aFL / 9);
		z9.fillText(bD.p4.a77(bg.akF[18], 0, .31 * this.j), 0, 3 * aFL / 9), z9.fillStyle = bE.qe, z9.fillText(bD.p4.a77(bg.akF[11], 0, .31 * this.j), 0, 4 * aFL / 9), z9.fillStyle = bE.qz, z9.fillText(bD.p4.a77(bg.akF[13], 0, .31 * this.j), 0,
				5 * aFL / 9), z9.fillText(bD.p4.a77(bg.akF[15], 0, .31 * this.j), 0, 6 * aFL / 9), z9.fillText(bD.p4.a77(bg.akF[16], 0, .31 * this.j), 0, 7 * aFL / 9), z9.fillText(bD.p4.a77(bg.akF[12], 0, .31 * this.j), 0, 8 * aFL / 9), z9
			.fillStyle = bE.qy, z9.fillText(bD.p4.a77(bg.akF[17], 0, .31 * this.j), 0, aFL), z9.fillStyle = bE.qf;
		var gD = bg.nc,
			aKU = gD[8] + gD[9] + gD[10] + gD[18],
			aKU = bD.pa.a3I(aKU),
			aXt = z9.measureText(aKU).width,
			fs = (z9.setTransform(1, 0, 0, 1, fs + .83 * this.j + aXt, fu + 2 * akN + this.akO), z9.fillText(bD.pa.a3I(gD[8]), 0, 0), z9.fillText(bD.pa.a3I(gD[9]), 0, aFL / 9), z9.fillText(bD.pa.a3I(gD[10]), 0, 2 * aFL / 9), z9.fillText(bD.pa
				.a3I(gD[18]), 0, 3 * aFL / 9), z9.fillStyle = bE.qe, z9.fillText(aKU, 0, 4 * aFL / 9), z9.fillStyle = bE.qz, z9.fillText(bD.pa.a3I(gD[13]), 0, 5 * aFL / 9), z9.fillText(bD.pa.a3I(gD[15]), 0, 6 * aFL / 9), z9.fillText(bD.pa
				.a3I(gD[16]), 0, 7 * aFL / 9), z9.fillText(bD.pa.a3I(gD[12]), 0, 8 * aFL / 9), gD[12] + gD[13] + gD[15] + gD[16]);
		z9.fillStyle = bE.qy, z9.fillText(bD.pa.a3I(fs), 0, aFL), z9.fillStyle = bE.qO
	}, this.aA6 = function(h, a6R, aE1) {
		var aC, e, gU;
		return this.akR < 0 || 1 < this.akR ? .25 : (aC = this.akR * (bg.akB - 1), gU = h[e = Math.floor(aC)], gU += (aC - e) * (h[e < bg.akB - 1 ? e + 1 : e] - gU), z9.strokeStyle = bE.qR, .04 < this.akR && this.akb(0, this.akM - a6R * Math.pow(
				gU, aE1), aC * this.akL / (bg.akB - 1), this.akM - a6R * Math.pow(gU, aE1)), .04 < gU / bg.max[this.eU] && this.akb(aC * this.akL / (bg.akB - 1), this.akM, aC * this.akL / (bg.akB - 1), this.akM - a6R * Math.pow(gU, aE1)), z9
			.fillStyle = bE.r1, z9.beginPath(), z9.arc(aC * this.akL / (bg.akB - 1), this.akM - a6R * Math.pow(gU, aE1), Math.max(2, .014 * this.k), 0, 2 * Math.PI), z9.fill(), h = this.akR * bi.aG4, h = 0 === ah.ng[aE.fV] ? Math.floor(h * bg
				.akE) : Math.floor(h * bi.l1()), z9.fillStyle = bE.qO, z9.fillText(1 === aE1 ? bD.pa.a8C(gU / 100, 2) : bD.pa.a3I(Math.floor(gU)), -this.vq, this.akM - a6R * Math.pow(gU, aE1)), bD.tc.textAlign(z9, 1), z9.fillText(aX.aFr(h),
				aC * this.akL / (bg.akB - 1), this.akM + this.akP - (a1.a2.iv() ? 2 : 0) - this.aCS), bD.tc.textAlign(z9, 2), a6R * Math.pow(gU, aE1) / this.akM)
	}, this.akb = function(o7, o8, oK, oL) {
		z9.beginPath(), z9.moveTo(o7, o8), z9.lineTo(oK, oL), z9.stroke()
	}
}

function c7() {
	this.akc = "https://territorial.io/changelog", this.aaZ = "https://territorial.io/terms", this.aaa = "https://territorial.io/privacy", this.akd = "https://territorial.io/tutorial", this.ake = "https://territorial.io/players", this.akf =
		"https://territorial.io/clans", this.akg = "https://territorial.io/clan-results", this.aX2 = "https://patreon.com/c/territorial", this.aHT = "https://play.google.com/store/apps/details?id=territorial.io", this.a57 =
		"https://apps.apple.com/app/id1581110913", this.aHU = "https://discord.gg/pthqvpTXmh", this.aHV = "https://www.instagram.com/davidtschacher/", this.a2q =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dJ() {
	this.z = new akh, this.a27 = new aki, this.dv = function() {
		this.z.dv()
	}, this.eq = function() {
		0 !== this.z.xD && this.z.xD--
	}
}

function aki() {
	this.z8 = function() {
		if (0 !== bS.z.xD && (z9.globalAlpha = Math.min(bS.z.xD / 580, 1), z9.drawImage(bS.z.akl, 1 + aT.a25(), 1 + aT.a26()), z9.globalAlpha = 1, aE.iA)) {
			for (var o7 = jN / ix, o8 = jO / ix, oK = (i.j + jN) / ix, oL = (i.k + jO) / ix, hK = bS.z.akm * ix, akn = bS.z.akn, aC = aE.l4 - 1; 0 <= aC; aC--) ! function(aC, hK, o7, o8, oK, oL, akn) {
				var highlight;
				0 === ah.ng[aC] || 0 === ah.hZ[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (hK *= 2), oK = i.j * ((ah.jc[aC] + ah.jd[aC] + 1) / 2 - o7) / (oK - o7) - .5 * hK, o7 = i.k * ((ah.je[
					aC] + ah.jf[aC] + 1) / 2 - o8) / (oL - o8) - .5 * hK, oK > i.j) || o7 > i.k || oK < -hK || o7 < -hK || (highlight ? z9.setTransform(2 * ix, 0, 0, 2 * ix, oK, o7) : z9.setTransform(ix, 0, 0, ix, oK, o7), z9.drawImage(
					akn[aE.ie ? bj.fj[aC] : 1], 0, 0))
			}(aC, hK, o7, o8, oK, oL, akn);
			z9.setTransform(ix, 0, 0, ix, 0, 0)
		}
	}
}

function akh() {
	this.akm = 28, this.xD = 0, this.akl = null;
	var akp = this.akn = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function akt(ih, ahR) {
		var fs, fu, fX, j6, a6s = bD.tc.a6t(ih, ih),
			io = bD.tc.getContext(a6s, !0),
			ik = bD.tc.getImageData(io, ih, ih),
			a2V = ik.data,
			lz = (ih >> 1) - .5,
			ahS = .5 + lz;
		for (ahS *= ahS, fu = 0; fu < ih; fu++)
			for (fs = 0; fs < ih; fs++) j6 = (j6 = fs - lz) * j6 + (j6 = fu - lz) * j6, a2V[fX = 4 * (fu * ih + fs)] = ahR[0], a2V[1 + fX] = ahR[1], a2V[2 + fX] = ahR[2], a2V[3 + fX] = (ahS - j6) * ahR[3] / ahS;
		return io.putImageData(ik, 0, 0), a6s
	}

	function ajj(aC, io, a6s, ih) {
		var highlight, fs, fu;
		0 !== ah.ng[aC] && 0 !== ah.hZ[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (ih *= 2), fs = ah.jc[aC] + ah.jd[aC] + 1 - ih - 2 >> 1, fu = ah.je[aC] + ah.jf[aC] + 1 - ih - 2 >> 1, highlight ? io
			.drawImage(a6s[aE.ie ? 9 === aE.lM && 5 === aF.iS[aC] ? 3 : bj.fj[aC] : aC < aE.l4 ? 1 : 0], fs, fu, ih, ih) : io.drawImage(a6s[aE.ie ? 9 === aE.lM && 5 === aF.iS[aC] ? 3 : bj.fj[aC] : aC < aE.l4 ? 1 : 0], fs, fu))
	}
	this.dv = function() {
		var uv;
		this.xD = 700,
			function(uv) {
				var ih = uv.akm;
				if (uv.akn = [], akp = [], aE.ie) {
					for (var aC = 0; aC <= aE.a1B; aC++) uv.akn.push(akt(ih, bj.ahK[bj.lR[aC]])), akp.push(akt(ih >> 1, bj.ahK[bj.lR[aC]]));
					9 === aE.lM && akp.push(akt(ih, bj.ahK[1]))
				} else uv.akn.push(akt(ih, bj.ahK[7])), uv.akn.push(akt(ih, bj.ahK[4])), akp.push(akt(ih >> 1, bj.ahK[7]))
			}(this),
			function(uv, aky) {
				var aC, akl = uv.akl,
					io = bD.tc.getContext(akl, !0),
					fl = aE.fi,
					ih = uv.akm >> 1;
				io.imageSmoothingEnabled = !1, io.setTransform(1, 0, 0, 1, 0, 0), aky && io.clearRect(0, 0, akl.width, akl.height);
				if (9 === aE.lM) {
					ih <<= 1;
					uv = b0.lV[5];
					for (aC = fl - uv; aC < fl; aC++) ajj(aC, io, akp, ih);
					fl -= uv, ih >>= 1
				}
				for (aC = aE.l4; aC < fl; aC++) ajj(aC, io, akp, ih)
			}(this, null !== (uv = this).akl && uv.akl.width === bV.fw - 2 && uv.akl.height === bV.fx - 2 || (uv.akl = bD.tc.a6t(bV.fw - 2, bV.fx - 2), !1)), aE.iA || this.a8U()
	}, this.aku = akt, this.a8U = function() {
		for (var fl = aE.l4, ih = this.akm, akn = this.akn, io = bD.tc.getContext(this.akl, !0), aC = 0; aC < fl; aC++) ajj(aC, io, akn, ih)
	}
}

function dK() {
	function al1() {
		8 === aE.lM && 1 === aE.a3z && bU.a3d.a3y()
	}

	function al0(player) {
		aE.iA ? (al.aNh(player), am.aRD(), aE.lO && aE.st.eq()) : b4.aHr(player)
	}
	this.sL = function(player) {
		aO.a4D(player, player === aE.fV ? 21 : 22), al0(player), al1()
	}, this.sq = function(player) {
		1 === aE.a3z && 0 !== ah.ng[player] && 2 !== ah.a7T[player] && al0(player), aE.a42--, aE.a41--, aO.a4D(player, 4), bD.h7.hx(2) && aX.nS(!0), al1()
	}
}

function dU() {
	this.acw = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aFI = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.qO, "rgb(170,170,170)"
	], this.al2 = [bE.qO, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.qO, bE.qF], this.al3 = [bE.qF, bE.qO, bE.qO, bE.qO, bE.qF, bE.qF, bE.qF, bE.qF, bE.qO];
	var aRN = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aQg = ["rgba(" + aRN[0] + ",", "rgba(" + aRN[1] + ",", "rgba(" + aRN[2] + ",", "rgba(" + aRN[3] + ",", "rgba(" + aRN[4] + ",", "rgba(" + aRN[5] + ",", "rgba(" + aRN[6] + ",", "rgba(" + aRN[7] + ",", "rgba(" + aRN[8] + ",", "rgba(" + aRN[9] +
			","
		], this.aQh = ["rgb(" + aRN[0] + ")", "rgb(" + aRN[1] + ")", "rgb(" + aRN[2] + ")", "rgb(" + aRN[3] + ")", "rgb(" + aRN[4] + ")", "rgb(" + aRN[5] + ")", "rgb(" + aRN[6] + ")", "rgb(" + aRN[7] + ")", "rgb(" + aRN[8] + ")", "rgb(" + aRN[9] +
			")"
		], this.a4M = null, this.ahK = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aYK = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lR = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fj = new Uint8Array(aE.fi), this.aFJ = new Uint8Array(aE.fi), this.a1H = new Uint16Array(aE.fi), this.a1I = new Uint16Array(this.lR.length + 1), this.a1J = new Uint16Array(this.lR.length), this
		.dw = function() {
			this.a4M = [L(596), L(597), L(598), L(599), L(600), L(601), L(602), L(603), L(604)]
		}, this.dv = function() {
			if (this.fj.fill(0), this.aFJ.fill(0), this.al4(), aE.ie) {
				if (9 === aE.lM) {
					for (var fj = bj.fj, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fj[aC] = 1;
					var fl = aE.fi;
					for (aC = aE.data.teamPlayerCount[7]; aC < fl; aC++) fj[aC] = 2;
					bj.lR[1] = 7, bj.lR[2] = 8
				} else aE.lO ? function() {
					var aYK = bj.aYK,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.l4 - 1; 0 <= aC; aC--) colorsData[aC] = az.kL(262144);
					var alF = 0,
						g1 = 768,
						aYJ = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fo = 0, g5 = 0; g5 < 3; g5++) fo += Math.abs(aYK[aC][g5] - aYJ[g5]);
							fo < g1 && (alF = aC, g1 = fo)
						} var alG = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) alG[aC] = teamPlayerCount[aC];
					var lR = bj.lR,
						alH = new Uint8Array(9),
						hE = (lR[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) alG[aC] && (alH[aC] = hE, lR[hE++] = aC);
					var kK = aE.l4,
						fj = bj.fj;
					alG[alF] ? (alG[alF]--, fj[0] = alH[alF]) : kK = 0;
					var ev = 0;
					for (aC = kK; aC < aE.a14; aC++) {
						var ib = lR[ev];
						if (alG[ib]) alG[ib]--, fj[aC] = alH[ib];
						else if (aC--, 9 <= ++ev) return console.log("error 325")
					}
				}() : this.eq();
				! function() {
					for (var fl = aE.fi, a1H = bj.a1H, a1I = bj.a1I, a1J = bj.a1J, fj = bj.fj, lR = bj.lR, a1A = lR.length, buffer = new Array(a1A), aC = 0; aC < a1A; aC++) buffer[aC] = [];
					for (aC = 0; aC < fl; aC++) buffer[lR[fj[aC]]].push(aC);
					for (aC = 1; aC <= a1A; aC++) a1I[aC] = a1I[aC - 1] + buffer[aC - 1].length;
					for (aC = 0; aC < a1A; aC++)
						for (var hE = buffer[aC].length, lz = a1I[aC], ib = 0; ib < hE; ib++) a1H[ib + lz] = buffer[aC][ib];
					var l4 = aE.l4;
					for (aC = 0; aC < a1A; aC++)
						for (hE = buffer[aC].length, lz = a1I[aC], ib = 0; ib < hE; ib++)
							if (a1H[ib + lz] >= l4) {
								a1J[aC] = ib;
								break
							}
				}(), ! function() {
					for (var fl = aE.fi, fj = bj.fj, aFJ = bj.aFJ, lR = bj.lR, aC = 0; aC < fl; aC++) aFJ[aC] = lR[fj[aC]];
					9 === aE.lM && aFJ.fill(1, fl - b0.lV[5])
				}()
			}
		}, this.al4 = function() {
			for (var aC = this.lR.length - 1; 0 <= aC; aC--) this.lR[aC] = aC
		}, this.eq = function() {
			var a37 = new Uint8Array(aE.l4),
				a38 = new Uint8Array(aE.l4),
				al9 = new Uint16Array(8),
				alA = new Uint16Array(this.lR.length);
			this.alB(a37, a38, al9, 1), this.aNC(al9), this.alC(alA, a37, a38), this.alD(a37, a38, alA), this.alE()
		}, this.alB = function(a37, a38, alG, alI) {
			for (var g5, e, alJ, fl = this.lR.length - alI, h = new Uint16Array(fl), aYK = this.aYK, colorsData = aE.data.colorsData, aC = aE.l4 - 1; 0 <= aC; aC--) {
				for (g5 = fl; alI <= g5; g5--) h[g5 - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aYK[g5][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aYK[g5][1]) + Math.abs(4 * (63 & colorsData[aC]) - aYK[g5][2]);
				for (alJ = 768, g5 = fl - 1; 0 <= g5; g5--) h[e = (g5 + aC) % fl] < alJ && (alJ = h[e], a37[aC] = e);
				for (alG[a37[aC]] += 4, alJ = 768, g5 = fl - 1; 0 <= g5; g5--) h[e = (g5 + aC) % fl] < alJ && e !== a37[aC] && (alJ = h[e], a38[aC] = e);
				alG[a38[aC]]++
			}
		}, this.aNC = function(alG) {
			for (var g5, m1, fl = this.lR.length - 1, aC = fl; 0 <= aC; aC--) this.lR[aC] = aC;
			for (aC = fl - 1; 0 <= aC; aC--) alG[aC]++;
			for (aC = 1; aC <= fl; aC++) {
				for (m1 = 0, g5 = 1; g5 < fl; g5++) alG[g5] > alG[m1] && (m1 = g5);
				alG[m1] = 0, this.lR[aC] = m1 + 1
			}
		}, this.alC = function(alA, a37, a38) {
			var g5, a4l, ev, fo, e, oJ, w7, alK = this.lR.length - 1,
				u6 = new Uint16Array(alK),
				alL = [],
				alM = 0,
				a4k = [],
				alN = [];
			loop: for (var aC = 0; aC < aE.l4; aC++)
				if (null !== (a4l = bD.pa.po(ah.a4j[aC]))) {
					for (g5 = a4k.length - 1; 0 <= g5; g5--)
						if (a4l === a4k[g5]) {
							alN[g5].push(aC), alM = Math.max(alM, alN[g5].length);
							continue loop
						} a4k.push(a4l), alL.push(!1), alN.push([aC]), alM = Math.max(alM, 1)
				}
			for (; 2 < aE.a1B && alM > bO.gC(aE.l4, aE.a1B);) aE.a1B--, aE.lM--;
			for (g5 = a4k.length - 1; 0 <= g5; g5--) {
				for (fo = -1, ev = a4k.length - 1; 0 <= ev; ev--) !alL[ev] && (-1 === fo || alN[ev].length > alN[fo].length) && (fo = ev);
				for (ev = alK - 1; 0 <= ev; ev--) u6[ev] = 1;
				for (ev = alN[fo].length - 1; 0 <= ev; ev--) u6[a37[alN[fo][ev]]] += 3, u6[a38[alN[fo][ev]]]++;
				for (aC = alK - 1; 0 <= aC; aC--) {
					for (e = fo % alK, ev = alK - 1; 0 <= ev; ev--) u6[ev] > u6[e] && (e = ev);
					for (oJ = -1, ev = aE.a1B; 0 < ev; ev--)
						if (this.lR[ev] === e + 1) {
							oJ = ev;
							break
						} if (u6[e] = 0, -1 !== oJ) {
						for (w7 = 0, ev = aE.a1B; 0 < ev; ev--) alA[oJ] > alA[ev] && w7++;
						if (w7 !== aE.a1B - 1) {
							for (ev = alN[fo].length - 1; 0 <= ev; ev--) alA[oJ]++, this.fj[alN[fo][ev]] = oJ;
							break
						}
					}
				}
				alL[fo] = !0
			}
		}, this.alD = function(a37, a38, alA) {
			for (var aC, j5, fl = this.lR.length - 1, border = bO.gC(aE.l4, aE.a1B), alO = (0 < aE.l4 % aE.a1B && border++, new Uint8Array(1 + fl)), g5 = fl; 1 <= g5; g5--) alO[this.lR[g5]] = g5;
			for (aC = 0; aC < aE.l4; aC++) j5 = alO[a37[aC] + 1], 0 === this.fj[aC] && j5 <= aE.a1B && alA[j5] < border && (alA[j5]++, this.fj[aC] = j5);
			for (aC = 0; aC < aE.l4; aC++) j5 = alO[a38[aC] + 1], 0 === this.fj[aC] && j5 <= aE.a1B && alA[j5] < border && (alA[j5]++, this.fj[aC] = j5);
			for (g5 = aE.a1B; 1 <= g5; g5--)
				for (aC = aE.l4 - 1; 0 <= aC && !(alA[g5] >= border); aC--) 0 === this.fj[aC] && (alA[g5]++, this.fj[aC] = g5)
		}, this.alE = function() {
			if (aE.a1B < 8) aE.a1B++, aE.lM++, aE.a1C = 1;
			else
				for (var aC = aE.l4; aC < aE.fi; aC++) this.fj[aC] = 1 + aC % aE.a1B
		}
}

function dn() {
	this.ha = function() {
		for (var fs, fu, aC = gh - 1; 0 <= aC; aC--) fs = bO.gC(gj[aC], 4) % bV.fw, fu = bO.gC(gj[aC], 4 * bV.fw), ah.jc[gc] = Math.min(fs, ah.jc[gc]), ah.je[gc] = Math.min(fu, ah.je[gc]), ah.jd[gc] = Math.max(fs, ah.jd[gc]), ah.jf[gc] = Math
			.max(fu, ah.jf[gc])
	}, this.gv = function() {
		var fo, hJ, aC, fl = ah.hD[gc].length,
			fn = ad.fn;
		loop: for (aC = fl - 1; 0 <= aC; aC--) {
			for (fo = 3; 0 <= fo; fo--)
				if (hJ = ah.hD[gc][aC] + fn[fo], ad.fc(hJ) || ad.hL(hJ) && ad.fd(hJ) !== gc) {
					ad.kG(ah.hD[gc][aC], gc);
					continue loop
				} ah.hD[gc][aC] = ah.hD[gc][fl - 1], ah.hD[gc].pop(), fl--
		}
	}, this.gw = function() {
		var player = gc,
			hR = ah.hR,
			hS = ah.hS,
			gA = ah.gA,
			fl = hR[player].length,
			fn = ad.fn;
		loop: for (var aC = fl - 1; 0 <= aC; aC--) {
			for (var aTV = !1, alP = !1, fo = 3; 0 <= fo; fo--) {
				var hJ = hR[player][aC] + fn[fo];
				if (ad.aNM(hJ, player)) continue loop;
				aTV = aTV || ad.j0(hJ), alP = alP || ad.aNL(hJ)
			}
			aTV ? hS[player].push(hR[player][aC]) : alP ? gA[player].push(hR[player][aC]) : ad.a1d(hR[player][aC], player), hR[player][aC] = hR[player][fl - 1], hR[player].pop(), fl--
		}
	}, this.hP = function() {
		ah.hZ[gg] -= gh
	}, this.hQ = function(border) {
		for (var fl = border.length, aC = fl - 1; 0 <= aC; aC--) ad.a1y(gg, border[aC]) || (border[aC] = border[fl - 1], border.pop(), fl--)
	}, this.hT = function(border) {
		for (var fl = border.length, aC = fl - 1; 0 <= aC; aC--) !ad.a1y(gg, border[aC]) && ad.fg(border[aC]) && (border[aC] = border[fl - 1], border.pop(), fl--)
	}, this.hU = function(border) {
		for (var fo, hJ, fl = border.length, fn = ad.fn, aC = fl - 1; 0 <= aC; aC--)
			for (fo = 3; 0 <= fo; fo--)
				if (hJ = border[aC] + fn[fo], ad.aNM(hJ, gg)) {
					ah.hR[gg].push(border[aC]), border[aC] = border[fl - 1], border.pop(), fl--;
					break
				}
	}, this.hV = function() {
		for (var fo, hJ, fn = ad.fn, aC = gh - 1; 0 <= aC; aC--)
			for (fo = 3; 0 <= fo; fo--) hJ = gj[aC] + fn[fo], ad.a21(gg, hJ) && ad.aNS(hJ) && (ah.hR[gg].push(hJ), ad.hG(hJ, gg))
	}, this.hW = function() {
		var fs, fu;
		loop: for (; ah.je[gg] < ah.jf[gg];) {
			for (fs = ah.jd[gg]; fs >= ah.jc[gg]; fs--)
				if (ad.a1y(gg, 4 * (ah.je[gg] * bV.fw + fs))) break loop;
			ah.je[gg]++
		}
		loop: for (; ah.je[gg] < ah.jf[gg];) {
			for (fs = ah.jd[gg]; fs >= ah.jc[gg]; fs--)
				if (ad.a1y(gg, 4 * (ah.jf[gg] * bV.fw + fs))) break loop;
			ah.jf[gg]--
		}
		loop: for (; ah.jc[gg] < ah.jd[gg];) {
			for (fu = ah.jf[gg]; fu >= ah.je[gg]; fu--)
				if (ad.a1y(gg, 4 * (fu * bV.fw + ah.jc[gg]))) break loop;
			ah.jc[gg]++
		}
		loop: for (; ah.jc[gg] < ah.jd[gg];) {
			for (fu = ah.jf[gg]; fu >= ah.je[gg]; fu--)
				if (ad.a1y(gg, 4 * (fu * bV.fw + ah.jd[gg]))) break loop;
			ah.jd[gg]--
		}
	}, this.fe = function(player, kD) {
		return 0 === bj.fj[player] || bj.fj[player] !== bj.fj[kD]
	}, this.iI = function(player) {
		for (var aC, hK, fl = ah.hR[player].length, fn = ad.fn, fo = 3; 0 <= fo; fo--)
			for (hK = fn[fo], aC = 0; aC < fl; aC++)
				if (ad.fc(ah.hR[player][aC] + hK)) return !0;
		return !1
	}, this.aNd = function(player) {
		for (var aC, hK, fl = ah.hR[player].length, fn = ad.fn, fo = 3; 0 <= fo; fo--)
			for (hK = fn[fo], aC = 0; aC < fl; aC++)
				if (ad.kF(ah.hR[player][aC]) && ad.fc(ah.hR[player][aC] + hK)) return !0;
		return !1
	}, this.iL = function(a7Z, a7a) {
		for (var aC, em, hK, hJ, aiQ = ah.hR[a7Z].length, aiR = ah.hR[a7a].length, fn = (aiR < aiQ && (em = a7Z, a7Z = a7a, a7a = em, em = aiQ, aiQ = aiR, 0), ad.fn), fo = 3; 0 <= fo; fo--)
			for (hK = fn[fo], aC = 0; aC < aiQ; aC++)
				if (hJ = ah.hR[a7Z][aC] + hK, ad.hL(hJ) && ad.fd(hJ) === a7a) return !0;
		return !1
	}, this.aNe = function(a7Z, a7a) {
		for (var aC, hK, hJ, aiQ = ah.hR[a7Z].length, fn = ad.fn, fo = 3; 0 <= fo; fo--)
			for (hK = fn[fo], aC = 0; aC < aiQ; aC++)
				if (ad.kF(ah.hR[a7Z][aC]) && (hJ = ah.hR[a7Z][aC] + hK, ad.hL(hJ)) && ad.fd(hJ) === a7a) return !0;
		return !1
	}
}

function dg() {
	this.t2 = new alQ
}

function alQ() {
	this.iO = function(player) {
		bD.h7.a7U(player) && aO.a2S(80, L(605), 637, 0, bE.rF, bE.qL, -1, !1)
	}, this.s3 = function(player) {
		bD.h7.a7U(player) && aO.a2S(80, L(606), 637, 0, bE.rF, bE.qL, -1, !1)
	}, this.ajg = function() {
		aO.a2S(80, L(607), 637, 0, bE.qx, bE.qL, -1, !1)
	}, this.ajh = function() {
		aO.a2S(80, L(608), 637, 0, bE.qx, bE.qL, -1, !1)
	}
}

function alR() {
	this.alS = 0, this.eq = function() {
		aP.eq(), aa.eq(), i.eq(), b1.z.eq(), ay.aMh(), bX.ee.eq(), bq.xP.eq(), bi.e2 && (bi.e2 = !1, ab.z8())
	}
}

function alT() {
	this.el = bi.el, this.eU = 0, this.alS = 0, this.aMf = 0, this.aMd = null, this.alU = 7, this.alV = 0, this.dv = function() {
		this.aMf = 0, this.aMd = [], this.eU = 0, this.alS = 0
	}, this.abr = function(aD) {
		if (aE.iA) this.aG5(aD);
		else if (this.aMd.push(aD), 2 === aE.a3z) {
			for (var aC = 0; aC < this.aMd.length; aC++) bB.rp.eq(this.aMd[aC]);
			this.aMd = []
		}
	}, this.aG5 = function(aD) {
		2 !== aE.a3z && (bB.rp.eq(aD), bC.eq(), aX.aG5(this.aMf), this.aMf === aE.a8c ? (aE.st.eq(), this.aMf = 0, this.eU = 0, this.alS = 0, this.el = bi.el) : (this.aMf++, ag.a8T(), ag.nS(!0), be.render()))
	}, this.eq = function() {
		i.eq(), aE.iA ? (bi.e2 = aX.aG5(-1) || bi.e2, nU()) : (0 !== this.eU || bi.el >= this.el && (this.el += bi.aG4 * Math.floor(1 + (bi.el - this.el) / bi.aG4), 2 === aE.a3z ? nG() : this.alW(), this.eU++, 27 < bi.el - this.alV)) && this
		.alX(), nP(), bi.e2 && (bi.e2 = !1, a22()), this.alV = bi.el
	}, this.alX = function() {
		bi.e2 = !0, nR(), this.eU = 0
	}, this.alW = function() {
		var zx, aC;
		if (this.alS !== 7 * this.aMf) nK(), be.render();
		else {
			zx = !1;
			loop: for (; this.alY() && (zx = !0, nK(), 2 !== aE.a3z) && 0 < this.aMd.length;)
				for (aC = this.alU - 2; 0 <= aC; aC--)
					if (nK(), 2 === aE.a3z) break loop;
			zx ? be.render() : (nG(), be.a8W())
		}
	}, this.alY = function() {
		return 0 < this.aMd.length && (this.aMf++, bB.rp.eq(this.aMd[0]), this.aMd.shift(), !0)
	}
}

function alZ() {
	var ala, alb, alc, aMf, ald, eU = 0,
		el = bi.el;

	function alg() {
		! function() {
			if (!aE.iA) return;
			if (aE.lO) return;
			if (2 !== aE.a3z)
				if (ald % 7 != 0) ald++;
				else if (aMf === aE.a8c) {
				if (!alj()) return;
				aX.aG5(aMf), aE.st.eq()
			} else {
				if (!alj()) return;
				ald++, aMf++, ag.a8T(), ag.nS(!0)
			}
			return 1
		}() && alj() && nK()
	}

	function alh() {
		eU = 0, (aE.iA ? (bi.e2 = aX.aG5(aMf - (ald % 7 == 0 ? 0 : 1) + ald % 7 / 7) || bi.e2, nU) : aN.hw || !bF.a90 ? nU : (bi.e2 = !0, nR))()
	}

	function alj() {
		var aC, fl, alk = bC.sr.adX,
			gU = bC.sr.adY,
			gW = bC.sr.adZ,
			gY = bC.sr.ada,
			alm = bC.sr.adb,
			aln = bC.sr.adc;
		if (!(ala >= aln.length)) {
			if (aln = aln[ala], alm[ala]) {
				for (fl = alb + aln, aC = alb; aC < fl; aC++) bB.rp.sg(alk[aC], gU[aC], gW[aC], gY[aC]);
				alb += aln, ala++
			} else ++alc >= aln && (ala++, alc = 0);
			return __fx.replay.tick++, 1
		}
		aO.a5K("Replay file smaller than expected."), bF.a6A(!1), aE.a3z = 2
	}
	this.alS = 0, this.dv = function() {
		ald = aMf = alc = alb = ala = 0, __fx.replay.registerHooks({
			advance: () => alg(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.e2 = !0
			},
			isEnded: () => 2 === aE.a3z,
			getTickInterval: () => bi.aG4
		})
	}, this.eq = function() {
		var ain;
		i.eq(), __fx.replay.frame() ? nG() : bF.aDI() < 1.7 ? 0 === eU ? bi.el >= el && (ain = bi.aG4 / bF.aDI(), el += ain * Math.floor(1 + (bi.el - el) / ain), 2 === aE.a3z || aN.hw || !bF.a90 ? nG() : (alg(), be.render()), eU++) : alh() :
			function() {
				var ain;
				if (bi.el >= el)
					if (2 === aE.a3z || aN.hw || !bF.a90) nG(), el = bi.el;
					else {
						for (ain = bi.aG4 / bF.aDI(), 16 < (bi.el - el) / ain && (el = bi.el - 16 * ain); bi.el >= el && 2 !== aE.a3z;) el += ain, alg();
						be.render()
					} alh()
			}(), nP(), bi.e2 && (bi.e2 = !1, a22())
	}, this.a4A = function() {
		bC.sr.adc.length - ala <= 2 || aO.a5K("Replay file larger than expected.")
	}
}

function alo() {
	var eU = 0,
		el = bi.el;
	this.alS = 0, this.eq = function() {
		i.eq(), aE.iA ? nU() : 0 === eU ? bi.el >= el && (el += bi.aG4 * Math.floor(1 + (bi.el - el) / bi.aG4), 2 === aE.a3z || aN.hw ? nG() : (nK(), be.render()), eU++) : ((aN.hw ? nU : (bi.e2 = !0, nR))(), eU = 0), nP(), bi.e2 && (bi.e2 = !1,
			a22())
	}
}

function dc() {
	this.a49 = null, this.e2 = !1, this.el = 0, this.aG4 = 56;
	var alp = 0;

	function alq() {
		bi.el = alp = performance.now(), bi.a49.eq(), window.requestAnimationFrame(alq)
	}
	this.dv = function() {
		this.a8x(), window.requestAnimationFrame(alq), this.el = performance.now()
	}, this.a8p = function() {
		aE.hu ? (this.a49 = new alZ, this.a49.dv()) : aE.lO ? this.a49 = new alo : (this.a49 = new alT, this.a49.dv())
	}, this.a8x = function() {
		this.a49 = new alR, this.e2 = !0
	}, this.eq = function() {
		this.a49.alS++
	}, this.l1 = function() {
		return this.a49.alS
	}, this.abW = function() {
		var em = performance.now();
		em < alp + 1e3 || (this.el = em, this.a49.eq())
	}
}

function d2() {
	var aLs = 0,
		alr = !0;
	this.eq = function() {
		var em, aBV;
		bi.el < aLs || (aLs = bi.el + 3e3, aE.hu) || aE.lO || bD.h7.hy(aE.fV) || (em = new Date, aBV = em.getUTCSeconds(), alr ? aBV < 43 && (alr = !1) : aBV < 43 || (aLs += 52e3, alr = !0, aBV = (em.getUTCMinutes() + 2) % 60, em = aE.lM < 7 ?
			0 : 8 === aE.lM ? 2 : 9 === aE.lM ? 3 : 1, aP.aBK(em, aBV) && (aBV = em, aBV = [L(609), L(610), L(611), L(612)][aBV], aO.aAv(aBV))))
	}
}

function cw() {
	var o7, o8, oK, oL, alt = 0,
		alu = 0;

	function alw() {
		return Math.pow(Math.pow(oK - o7, 2) + Math.pow(oL - o8, 2), .5)
	}

	function alv(e) {
		o7 = i.l * e.touches[0].clientX, o8 = i.l * e.touches[0].clientY, oK = i.l * e.touches[1].clientX, oL = i.l * e.touches[1].clientY
	}
	this.a5c = function(e) {
		return 1 < e.touches.length ? (alu = bi.el, alt = 3, alv(e), aM.ub(), !0) : (alt = 0, !1)
	}, this.a5d = function(e) {
		var aOY, j3, j4;
		return 0 !== aE.a3z && 1 < e.touches.length && (alt = Math.max(alt - 1, 0), aI.oP() && (aOY = alw(), alv(e), e = alw(), j3 = Math.floor((o7 + oK) / 2), j4 = Math.floor((o8 + oL) / 2), aT.aDj(j3, j4, Math.max(.125, e) / Math.max(.125,
			aOY)), bi.e2 = !0), !0)
	}, this.a60 = function() {
		var fs, fu;
		return !!(alt && (alt = 0, bi.el < alu + 500)) && (fs = (o7 + oK) / 2, fu = (o8 + oL) / 2, aM.a5u(fs, fu), aM.click(fs, fu, !0) && (bi.e2 = !0), !0)
	}
}

function dD() {
	this.size = 0, this.eU = 0, this.aD = null, this.dv = function(aD) {
		this.eU = 0, this.aD = aD, this.size = aD.length
	}, this.yB = function() {
		this.aD = null
	}, this.sf = function(size) {
		for (var gD = 0, aD = this.aD, oP = this.eU + size - 1, aC = this.eU; aC <= oP; aC++) gD |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << oP - aC;
		return this.eU += size, this.eU > 8 * this.size && console.error("Unwrapper Overflow"), gD
	}, this.ac0 = function(size) {
		var g5 = size >> 1;
		return (1 << g5) * this.sf(size - g5) + this.sf(g5)
	}, this.ac2 = function(alx) {
		return this.size === bG.abz(alx)
	}, this.adp = function(a0q, aly, alz) {
		var hE = this.sf(a0q);
		if (!hE) return null;
		for (var a0q = Math.max(hE, alz), h = new(aly <= 8 ? Uint8Array : aly <= 16 ? Uint16Array : Uint32Array)(a0q), aC = 0; aC < hE; aC++) h[aC] = this.sf(aly);
		alz = h[hE - 1];
		return alz && h.fill(alz, hE), h
	}, this.adq = function(a0q, am0, alz) {
		var hE = this.sf(a0q);
		if (!hE) return null;
		for (var a0q = Math.max(hE, alz), h = new Array(a0q), aC = 0; aC < hE; aC++) h[aC] = this.adn(am0);
		return h.fill(h[hE - 1], hE), h
	}, this.adn = function(a0q) {
		return bJ.a0Y.a0c(this.sf(a0q))
	}, this.ado = function() {
		var a3G = this.sf(30);
		if (!(6 * a3G > 8 * this.size - this.eU)) {
			var pW = bI.fC.vn(bI.fC.vo(a3G)),
				pW = bD.pa.a8O(pW, "_", "/");
			pW = bD.pa.a8O(pW, "-", "+");
			for (var am1 = "";
				(pW.length + am1.length) % 4;) am1 += "=";
			pW = "data:image/png;base64," + pW + am1;
			var aOA = new Image;
			aOA.onload = function() {
				bC.aP7.aP8(aOA), aOA.onload = null, aOA = null
			}, aOA.src = pW
		}
	}
}

function dW() {
	this.aes = 0, this.aet = 0, this.aeo = 0, this.aep = 0, this.aeq = 0, this.aer = 0, this.aGm = [0, 0, 0, 0], this.oO = function() {
		this.aes = aT.a25(), this.aet = aT.a26(), this.aeo = -this.aes, this.aep = -this.aet, this.aeq = i.j / ix, this.aer = i.k / ix, this.aGm[0] = Math.floor(this.aeo), this.aGm[1] = Math.floor(this.aep), this.aGm[2] = Math.floor(this.aGm[0] +
			this.aeq + 1), this.aGm[3] = Math.floor(this.aGm[1] + this.aer + 1), be.aGk = !0
	}
}

function cx() {
	var aCO, nt;
	this.dv = function() {
		aCO = 1, nt = 0
	}, this.eq = function() {
		0 < aCO && (nt = 0 === nt ? bi.el + 16 : nt, aCO = (aCO -= .001 * (bi.el - nt)) < 0 ? 0 : aCO, nt = bi.el, bi.e2 = !0)
	}, this.z8 = function() {
		0 < aCO && (z9.fillStyle = "rgba(0,0,0," + aCO + ")", z9.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eU = 0, this.aD = null, this.dv = function(aD) {
		this.eU = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(alx) {
		return this.dv(new Uint8Array(this.abz(alx))), this.aD
	}, this.yB = function() {
		this.aD = null
	}, this.a9 = function(size, aBX) {
		for (var aD = this.aD, oP = this.eU + size - 1, aC = this.eU; aC <= oP; aC++) aD[aC >> 3] |= (aBX >> oP - aC & 1) << 7 - (7 & aC);
		this.eU += size, this.eU > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aby = function(size, aBX) {
		var g5 = size >> 1,
			fo = 1 << g5;
		this.a9(size - g5, bO.gC(aBX, fo)), this.a9(g5, aBX % fo)
	}, this.am4 = function(size) {
		for (var aD = this.aD, oP = this.eU + size, aC = this.eU; aC < oP; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.abz = function(alx) {
		return alx + 7 >> 3
	}, this.am5 = function(h, kK, oP, am6) {
		for (var aC = kK; aC < oP; aC++) this.a9(am6, h[aC])
	}
}

function dC() {
	this.dv = function() {
		this.h = [], this.eU = 0
	}, this.acR = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(am7, value) {
		for (var h = this.h, oP = this.eU + am7 - 1, am8 = 1 + (oP >> 3); h.length < am8;) h.push(0);
		for (var aC = this.eU; aC <= oP; aC++) h[aC >> 3] |= (value >> oP - aC & 1) << 7 - (7 & aC);
		this.eU += am7
	}, this.e1 = function(h, a0q, aly) {
		var am9 = bD.tj.a6m(h);
		this.a9(a0q, am9);
		for (var aC = 0; aC < am9; aC++) this.a9(aly, h[aC])
	}, this.ae7 = function(h, a0q, am0) {
		var am9 = bD.tj.a6m(h);
		this.a9(a0q, am9);
		for (var aC = 0; aC < am9; aC++) this.ae5(h[aC], am0)
	}, this.ae5 = function(pW, a0q) {
		var fl = pW.length;
		this.a9(a0q, fl);
		for (var aC = 0; aC < fl; aC++) this.a9(16, pW.charCodeAt(aC))
	}, this.ae6 = function(a6s) {
		var amA = (a6s = a6s.toDataURL()).split(",");
		if (amA.length < 2) console.log("error 266");
		else {
			a6s = bD.pa.a8O(a6s = amA[amA.length - 1], "/", "_"), a6s = bD.pa.a8O(a6s, "\\+", "-");
			var a6s = bD.pa.a8O(a6s, "=", ""),
				a0l = bJ.fC.a0i(a6s),
				fl = a0l.length;
			this.a9(30, fl);
			for (var aC = 0; aC < fl; aC++) this.a9(6, a0l[aC])
		}
	}
}
a(), self.aiCommand746 = function(gD) {
	0 === gD ? c2() : 1 !== gD || !a1 || 1 !== a1.id || a1.eC < 14 || bM.gE()
}, setTimeout(c2, 1e4), window.onload = function() {
	c2()
};