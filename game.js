var m, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, i, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC,
	bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, u, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, bi, bj, bk, a1, bl, bm, bn, p, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, by, bz, gW, gX, gY, gZ, ga, gb, gc, gd, ge, gf,
	gg, gh, gi, iv, jL, jM, aCQ, md, kn, a5g, ym, a2J, aGb, a8y, a8z, S = ["div", "100%", "⬅️ ", "absolute", "none", "canvas", "0.75em", "<br>", "inherit", "center", "0.8em", "rgb(", "auto", "rgba(", "hidden", "   ", "flex", "span", "1em", "50%",
		"0.5em", "email", "Data", " / ", "territorial.io", "click", "pre", "password", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "undefined", "pointer", "middle", "break-word", "bold",
		"Player ", "Escape", "0.6em", "0.4em", "underline", "text", "scroll", "nowrap", "inline-block", "function", "fixed", "button", "Value", "Enter", "20%", "1.5em", "' target='_blank'>", "🔄 Reload", "translate(-50%, -50%)", "string", "round",
		"rgba(0,0,0,0.8)", "pre-wrap", "number", "mouseleave", "left", "keydown", "game.territorial.io", "focus", "ellipsis", "blur", "aria-label", "Zombie", "Space", "Redacted ", "Battle Royale", "<a href='", "</a>", "1v1", "100,100,100", "1.2em",
		"1.0em", "0px", "0.3em", "0.2em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "✅ OK", "⚠️ ", "zombie", "wheel", "userIcon", "true", "touchstart", "top", "tls7", "system-ui", "style", "right", "rgba(140,10,10,0.75)",
		"rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "px ", "placeholder", "orange", "oneVsOne", "noFullSending", "mouseover", "mouseout", "long", "logo", "loading", "italic ",
		"https://territorial.io/", "https://", "file", "error", "en-US", "dotted", "data:image/png;base64,", "crown", "contextmenu", "column", "clock", "break-all", "blur(4px)", "block", "battleRoyale", "aria-pressed", "arena", "account", "accept",
		"_blank", "^[0-9]+$", "[Redacted Message]", "Seed", "Report", "Reload", "Patreon", "Mare Nostrum", "Interest", "Gold Seizure", "Bot ", "Back", "Audit Log", "Arial Black, system-ui", "30%", "255,255,255", "1px 1px 0 lightgray",
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

function c0(c1) {
	m && !c1 || (c3(), bO = new c4, bN = new c5, bD = new c6, bE = new c7, aE = new c8, bA = new c9, bI = new cA, bJ = new cB, aF = new cC, aG = new cD, aH = new cE, aI = new cF, aJ = new cG, aK = new cH, aL = new cI, aM = new cJ, aN = new cK, aO =
		new cL, aP = new cM, aQ = new cN, aR = new cO, aS = new cP, aT = new cQ, aU = new cR, aV = new cS, aW = new cT, aX = new cU, aY = new cV, aZ = new cW, aa = new cX, ab = new cY, ac = new cZ, ad = new ca, al = new cb, am = new cc, ao =
		new cd, an = new ce, ae = new cf, af = new cg, ai = new ch, ag = new ci, ah = new cj, aj = new ck, b0 = new cl, ak = new cm, aq = new cn, ar = new co, at = new cp, b1 = new cq, az = new cr, ap = new cs, au = new ct, av = new cu, aw =
		new cv, i = new cw, ax = new cx, ay = new cy, b2 = new cz, b3 = new d0, b4 = new d1, b5 = new d2, b6 = new d3, b7 = new d4, b8 = new d5, b9 = new d6, bB = new d7, bC = new d8, bF = new d9, bG = new a7, bH = new dA, bK = new dB, bL =
		new dC, bM = new dD, bP = new dE, bQ = new dF, bR = new dG, bS = new dH, bT = new dI, bU = new dJ, bV = new dK, bW = new dL, u = new dM, bX = new dN, a1 = new dO, m = new dP, bl = new dQ, bm = new dR, bj = new dS, bk = new dT, bd =
		new dU, be = new dV, bY = new dW, bZ = new dX, bg = new dY, bh = new dZ, bi = new da, bn = new db, bf = new dc, p = new dd, bo = new de, bp = new df, bq = new dg, bs = new dh, bt = new di, bu = new dj, bv = new dk, bw = new dl, bx =
		new dm, by = new dn, bz = new dp, m.dr(), a1.dr(), i.ds(), bm.dr(), bA.dr(), bA.dt(), (ba = new du).dr(), bD.dr(), bY.dr(), b1.dr(), bI.dr(), bJ.dr(), bV.dr(), u.dr(), bb = new dv, i.dr(), bi.dr(), bf.dr(), bZ.dr(), bc = new dw, az.dr(),
		af.dx(), bX.dr(), aq.dr(), ab.dr(), aU.dr(), aj.dr(), bM.dr(), ac.dr(), bi.dy = !0, setTimeout(function() {
			bV.a8(2, 14071)
		}, 0), u.v(5, 5), bL.dz() || a1.a2.e0(), i.e1(), m.n = 1)
}

function dP() {
	this.e2 = 2, this.e3 = 1773, this.e4 = 0;
	this.rVersion = 26, this.e8 = "14 Nov 2026", this.e9 = 0, this.dr = function() {
		this.o = "2.17.11", this.e8 = this.e8 + " [" + this.o + "]", this.hostname = window.location.hostname.toLowerCase(), this.aA = 0 <= this.hostname.indexOf("territorial.io"), this.eB = 0 <= this.hostname.indexOf("github.io"), this.eC = 0 <=
			this.hostname.indexOf("game.territorial.io"), this.aB = function() {
				try {
					return window.self !== window.top
				} catch (e) {
					return !0
				}
			}(), this.eE = (new Date).getTime() % 1048576, console.log("hostname: [" + this.hostname + "] validHostname: " + +this.aA + " validMod: " + +this.eB)
	}, this.n = 0
}

function eF() {
	var eG = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		eH = [100, 60, 30, 15, 6, 1],
		eI = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		eJ = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		eL = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.eM = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter", "Block Account", "Ban IP", "Gold Seizure", "Remove Punishments", "Report", "Vouch"]
	], this.eN = function(id, eO, eP) {
		eO = this.eQ(eO);
		return +(eI[eO][id] > eP)
	}, this.eQ = function(eO) {
		for (var aC = 0; aC < eH.length; aC++)
			if (eH[aC] <= eO) return aC;
		return eH.length
	}, this.eR = function(eO) {
		return eG[this.eQ(eO)]
	}, this.eS = function(id, eT) {
		return eJ[id].replace(new RegExp("x", "g"), eT)
	}, this.eU = function(id, eT) {
		return eL[id].replace(new RegExp("x", "g"), eT)
	}, this.eV = function(id, eW) {
		return this.eM[5][id]
	}
}

function dN() {
	this.eX = new eY, this.eZ = new ea, this.turnstile = new eb, this.dr = function() {
		a1.a2.ec(), this.turnstile.dr()
	}, this.ed = function() {
		return bm.buffer.data[160].value
	}
}

function eY() {
	var ee = 12e3;
	this.show = function(ef) {
		return !ef && !bX.ed() && (0 === a1.id ? bX.eZ.show() : !(bi.eg < ee) && (ef = 1 === a1.id ? 72e4 : 108e4, ee = bi.eg + ef, 2 === m.e2) && a1.a2.ei(Math.floor(ef)))
	}
}

function ea() {
	var ej = null,
		ee = 2e4,
		ek = 0;
	this.el = function() {
		bi.eg < ee || (ee = bi.eg + 1e4, 0 !== a1.id) || ej || bX.ed() || (b1.z.em(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b1.en.eo(5) : ee = bi.eg + 1e3)
	}, this.ep = function(eq) {
		ej = eq
	}, this.show = function() {
		return !(!ej || bi.eg < ek) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (ek = bi.eg + 6e4, (new er).show(ej.es, ej.colors, ej.id), !(ej = null)))
	}
}

function eb() {
	this.et = 0;
	var ew, eu = null,
		ev = 0,
		ex = "",
		ey = 0,
		ez = null,
		f0 = -1,
		f1 = -1,
		f2 = 0;

	function fC() {
		if (null !== ez && null !== eu) {
			ev = 0;
			try {
				window.turnstile.remove(eu), ez.remove()
			} catch (e) {
				console.log("turnstile remove failed " + e)
			}
			eu = ez = null
		}
	}

	function f6(fG) {
		return "" !== ex && ey + 1e3 * (300 - fG) > performance.now()
	}
	this.dr = function() {
		var f4;
		m.e4 || !m.aA && !m.eB ? (console.log("turnstile cannot be loaded"), this.et = -1) : ((f4 = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", f4.async = !0, f4.onload =
			function() {
				bX.turnstile.et = 1, console.log("turnstile onload"), bX.turnstile.f5()
			}, f4.onerror = function() {
				bX.turnstile.et = -1, console.log("turnstile onerror")
			}, document.head.appendChild(f4))
	}, this.f5 = function() {
		var eh;
		return !(1 !== this.et || (window.turnstile ? ev ? (console.log("turnstile error 246"), 1) : f6(30) || (eh = performance.now()) < f2 && f0 === bJ.f7.f8(bm.buffer.data[105].value, 5) && f1 === aa.f9 || (ex = "", ev = 1, ew = eh, (ez =
			document.createElement("div")).style.position = "fixed", ez.style.left = "0", ez.style.top = "0", ez.style.zIndex = "100", document.body.appendChild(ez), console.log("turnstile render"), eu = window.turnstile.render(
			ez, {
				sitekey: "0x4AAAAAAEI8HZoG8nJMzxt1",
				action: "enter_lobby",
				appearance: "interaction-only",
				callback: function(fA) {
					console.log("turnstile success " + Math.floor(performance.now() - ew)), ex = fA, ey = performance.now(), bX.turnstile.fB(), fC()
				},
				"expired-callback": function() {
					fC(), console.log("turnstile expired " + Math.floor(performance.now() - ew))
				},
				"error-callback": function() {
					fC(), console.log("turnstile callback error " + Math.floor(performance.now() - ew)), bX.turnstile.et = -1
				}
			}), 0) : (console.log("turnstile error 245"), 1)))
	}, this.close = function() {
		fC()
	}, this.fB = function() {
		f6(8) && bq.fD && b1.z.em(b1.z.fE) && (f2 = performance.now() + 36e5 - 1e4, f0 = bJ.f7.f8(bm.buffer.data[105].value, 5), f1 = aa.f9, b1.en.fF(ex), ex = "", console.log("sendTokenToLobby success"))
	}
}

function ce() {
	this.fH = new fI
}

function fI() {
	this.fJ = function(fK) {
		var fN;
		return bV.fL(bV.fM) && aE.data.passableMountains && (fN = ad.fO(fK), this.fP(aE.fQ, fN) || this.fR(aE.fQ, fN)) && 0 !== (fN = function(fm) {
			for (var fn = bP.fo(fm), fp = bP.fq(fm), max = Math.max(bV.fr, bV.fs) - 2, ft = max * max, fu = !1, fv = 0, fw = 0; fw < max; fw++) {
				var fx, fS = function(fn, fp, fw) {
					for (var aC = 0; aC <= fw; aC++)
						for (var fz = -1; fz < 2; fz += 2)
							for (var g0 = -1; g0 < 2; g0 += 2)
								for (var eq = 0; eq < 2; eq++) {
									var fK = function(fn, fp) {
										if (bP.g2(fn, fp)) {
											fn = bP.g3(fn, fp), fp = bP.fW(fn);
											if (ad.fb(fp) && ad.g4(fp)) return fn
										}
										return 0
									}(fn + eq * fz * aC + (1 - eq) * g0 * fw, fp + eq * g0 * fw + (1 - eq) * fz * aC);
									if (fK) return fK
								}
					return 0
				}(fn, fp, fw);
				fS && (fx = bP.fy(fn, fp, fS)) < ft && (fv = fS, ft = fx, fu || (fu = !0, max = Math.floor(Math.sqrt(fx)) + 1))
			}
			return fv
		}(bP.fU(fK))) && (fK = bP.fW(fN), ad.fX(fK) || (fK = ad.fY(fK)) !== aE.fQ && bw.fZ(fK, aE.fQ)) ? fN : 0
	}, this.fa = function(player, fS) {
		fS = bP.fW(fS);
		if (ad.fb(fS)) {
			if (ad.fX(fS)) bR.fc[0] = aE.fd;
			else if (ad.fY(fS) !== bR.fc[0]) return !1;
			for (var fe = function(fK) {
					var fi = ad.fi,
						fe = [];
					loop: for (var fj = 3; 0 <= fj; fj--) {
						var fk = fK + fi[fj];
						if (ad.fl(fk)) {
							for (var id = ad.fO(fk), aC = 0; aC < fe.length; aC++)
								if (id === fe[aC]) continue loop;
							bR.fh[fe.length] = fk, fe.push(id)
						}
					}
					return fe
				}(fS), fg = fe.length, aC = 0; aC < fg; aC++)
				if (this.fP(player, fe[aC]) || this.fR(player, fe[aC])) return bR.fh[0] = bR.fh[aC], !0
		}
		return !1
	}, this.fP = function(player, fN) {
		for (var g5 = ah.g5[player], fg = g5.length, g6 = Math.max(bO.g7(fg, 12), 1), fi = ad.fi, aC = 0; aC < fg; aC += g6)
			for (var fV = g5[aC], fj = 3; 0 <= fj; fj--) {
				var fk = fV + fi[fj];
				if (ad.fl(fk) && fN === ad.fO(fk)) return !0
			}
		return !1
	}, this.fR = function(player, fN) {
		for (var g5 = ah.g5[player], fg = g5.length, fi = ad.fi, aC = 0; aC < fg; aC++)
			for (var fV = g5[aC], fj = 3; 0 <= fj; fj--) {
				var fk = fV + fi[fj];
				if (ad.fl(fk) && fN === ad.fO(fk)) return !0
			}
		return !1
	}
}

function dG() {
	this.h = new Array(4), this.gA = new Uint16Array(2), this.gB = new Uint16Array(2), this.gC = new Int32Array(2), this.gD = new Uint32Array(2), this.gE = new Uint32Array(2), this.gF = new Uint8Array(4), this.gG = new Uint8Array(4), this.fh =
		new Uint32Array(4), this.gH = new Uint32Array(5), this.fc = new Uint32Array(8), this.gI = new Uint32Array(8), this.gJ = new Uint16Array(16), this.gK = new Uint16Array(512), this.gL = new Uint16Array(512), this.gM = new Uint16Array(512), this
		.gN = new Uint16Array(0), this.dr = function() {
			var fg = bV.fr * bV.fs;
			this.gN.length !== fg && (this.gN = new Uint16Array(fg))
		}, this.gO = function(h, gP) {
			return h[0] = gP, h
		}, this.gQ = function(h, gP, gR) {
			return h[0] = gP, h[1] = gR, h
		}, this.gS = function(h, gP, gR, gT) {
			return h[0] = gP, h[1] = gR, h[2] = gT, h
		}, this.gU = function(h, gP, gR, gT, gV) {
			return h[0] = gP, h[1] = gR, h[2] = gT, h[3] = gV, h
		}
}

function gj() {
	gc = 0, gd = 2048, ge = new Uint32Array(4 * gd), gf = 0, gg = new Uint32Array(gd), gh = new Uint8Array(bV.fr * bV.fs)
}

function gk(player) {
	gX = player, gi = !1, gl(), gm();
	for (var aC = ae.gn(gX) - 1; 0 <= aC; aC--) gW = aC, go();
	gi && gp()
}

function gp() {
	bw.gq(), bw.gr()
}

function go() {
	gb = ae.gs(gX, gW), gY = ae.gt(gX, gW), gZ = ae.gu(gX, gW), gv(), (0 !== gc && (gx(), gy()) ? gz : gw)()
}

function gy() {
	if (!((ga = bO.g7(gY, gc)) > aE.h0)) {
		if (!gZ) return !1;
		var h1 = gc * (1 + aE.h0);
		gY += bD.h2.h3(gX, h1 - gY), ga = bO.g7(gY, gc)
	}
	return !0
}

function gx() {
	for (var aC = gc - 1; 0 <= aC; aC--) gh[bO.g7(ge[aC], 4)] = 0
}

function gw() {
	1 === ae.gn(gX) && aG.h4(gX);
	var eh = bD.h2.h5(gX, gY);
	bg.h6(gX, gY - eh, 12), ae.h7(gX, gW)
}

function gl() {
	for (var player = gX, h8 = ah.h8, fg = Math.min(h8[player].length, gd), h9 = 0, hA = gg, aC = fg - 1; 0 <= aC; aC--) hA[h9++] = h8[player][aC];
	gf = h9
}

function gm() {
	for (var aC = ah.h8[gX].length - 1; 0 <= aC; aC--) ad.fb(ah.h8[gX][aC]) && ad.hB(ah.h8[gX][aC], gX);
	ah.h8[gX] = []
}

function gv() {
	gc = 0, (gb === aE.fd ? hC : hD)()
}

function hD() {
	for (var hE, hF, aC, fi = ad.fi, fj = 3; 0 <= fj; fj--)
		for (aC = gf - 1; 0 <= aC; aC--) hE = gg[aC] + fi[fj], hF = bO.g7(hE, 4), 0 === gh[hF] && ad.hG(hE) && ad.fY(hE) === gb && (gh[hF] = 1, ge[gc++] = hE)
}

function hC() {
	for (var hE, hF, aC, fi = ad.fi, fj = 3; 0 <= fj; fj--)
		for (aC = gf - 1; 0 <= aC; aC--) hE = gg[aC] + fi[fj], hF = bO.g7(hE, 4), 0 === gh[hF] && ad.fX(hE) && (gh[hF] = 1, ge[gc++] = hE)
}

function gz() {
	hH() ? (hI(), gb !== aE.fd && hJ()) : gw()
}

function hJ() {
	bw.hK(), bw.hL(ah.hM[gb]), bw.hL(ah.hN[gb]), bV.fL(bV.fM) && bw.hL(ah.g5[gb]), bw.hO(ah.h8[gb]), bw.hP(ah.hN[gb]), bw.hP(ah.g5[gb]), bw.hQ(), bw.hR()
}

function hI() {
	gi = !0, ae.hS(gX, gW, gY), ae.hT(gX, gW), ah.hU[gX] += gc, bw.hV(), hW()
}

function hH() {
	return (gb === aE.fd ? hX : hY)()
}

function hY() {
	var hZ = gc * aE.h0,
		ha = hb(),
		hc = hd(),
		ha = hZ + 2 * ha + hc,
		hf = ga * gc;
	return ha < hf ? (gY -= ha, bg.h6(gX, ha, 13), hg(ha - hZ, hc), !0) : gZ && 0 === hc ? (gY -= hf, hf += bD.h2.h3(gX, ha - hf + 1), bg.h6(gX, hf, 13), hg(hf - hZ, 0), !0) : (gY -= hf, bg.h6(gX, hf, 13), hg(hf - hZ, hc), !1)
}

function hg(hf, hc) {
	if (0 < hc) {
		if (hf <= hc) return bg.h6(gb, hf, 13), void ae.hh(gb, gX, hc - hf);
		ae.hh(gb, gX, 0), hf -= hc
	}
	hf = bO.g7(hf, 2), hf = Math.min(ah.hi[gb], hf), bg.h6(gb, hf, 13), ah.hi[gb] -= hf
}

function hd() {
	return ae.hj(gb, gX)
}

function hb() {
	return bO.g7(gc * ah.hi[gb], 1 + bO.g7(10 * ah.hU[gb], 16))
}

function hX() {
	var hk = gc * aE.h0;
	return gY -= hk, bg.h6(gX, hk, 13), !0
}

function hW() {
	for (var aC = gc - 1; 0 <= aC; aC--) ah.h8[gX].push(ge[aC]), ah.hM[gX].push(ge[aC]), ad.hB(ge[aC], gX)
}

function dL() {
	var hl = 0,
		hm = 0;
	this.hn = function(fn, fp) {
		hl = fn, hm = fp
	}, this.ho = function(code) {
		var hw, hy, fS;
		aE.hp || aE.hq || aN.hr || (bD.h2.hs(0) || bD.h2.hs(1)) && bD.h2.ht(aE.fQ) && (aS.hu(hl, hm) ? aS.hv = !1 : aQ.hu(hl, hm) || (hw = bP.hx(hl), hy = bP.hz(hm), fS = bP.g3(hw, hy), bP.i0(hw, hy) && (0 === code ? function(fS) {
			var i4, fK, fV;
			aE.i5 ? -1 !== (i4 = bv.i6(fS)) && bB.i7.i8(fS) : (fK = bP.fW(fS), ad.fl(fK) ? (i4 = an.fH.fJ(fK)) && (fV = bP.fW(i4), fV = ad.fX(fV) ? aE.fd : ad.fY(fV), bB.i7.iA(aS.iB(), i4, fV)) : (i4 = bv.iC(fS)) < 0 || (fK = bP
				.fW(i4), ad.fX(fK) ? bw.iD(aE.fQ) ? bB.i7.iE(aS.iB(), aE.fd) : ae.gn(aE.fQ) && b2.iF(aE.fd, aS.iB()) : (fV = ad.fY(fK), bw.fZ(fV, aE.fQ) && (bw.iG(aE.fQ, fV) ? bB.i7.iE(aS.iB(), fV) : ae.gn(aE.fQ) && b2.iF(
					fV, aS.iB())))))
		}(fS) : 1 === code ? function(fS) {
			bQ.iH.iI(aE.fQ, fS) && bB.i7.iJ(aS.iB(), bR.gI[7])
		}(fS) : 2 === code && function(fS) {
			bQ.iK.iL(aE.fQ, fS) && bB.i7.iM(aS.iB())
		}(fS))))
	}, this.iN = function() {
		if (!(aE.hp || aE.hq || aN.hr) && bD.h2.hs(1)) {
			var hE = aE.fQ;
			if (bD.h2.ht(hE)) {
				var fg = ae.gn(hE);
				if (fg < 1) ! function() {
					var hE = aE.fQ;
					if (bw.iD(hE)) bB.i7.iE(aS.iB(), aE.fd);
					else
						for (var fi = ad.fi, hM = ah.hM, fg = hM[hE].length, iX = Math.floor(Math.random() * fg), aC = 0; aC < fg; aC++)
							for (var iY = 3; 0 <= iY; iY--) {
								var iZ = hM[hE][(aC + iX) % fg] + fi[iY];
								if (ad.hG(iZ)) {
									iZ = ad.fY(iZ);
									if (iZ !== hE && (!aE.ib || bw.fZ(hE, iZ))) return bB.i7.iE(aS.iB(), iZ)
								}
							}
				}();
				else {
					for (var iP = 0, iQ = ae.gt(hE, 0), aC = 1; aC < fg; aC++) {
						var iR = ae.gt(hE, aC);
						iR < iQ && (iQ = iR, iP = aC)
					}
					bB.i7.iE(aS.iB(), ae.gs(hE, iP))
				}
			}
		}
	}, this.iS = function() {
		if (!(aE.hp || aE.hq || aN.hr) && bD.h2.ht(aE.fQ) && bD.h2.hs(1)) return ax.iT ? ax.iU(aE.fQ) ? void bB.i7.iV(1) : void 0 : void(ax.iW(aE.fQ) && bB.i7.iS())
	}
}

function ic(ie, size, ig, ih, font) {
	var aC, ik = .2,
		canvas = document.createElement("canvas"),
		il = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = ie, canvas.height = ie, il.font = size + font, il.textAlign = "center", il.textBaseline = "middle", il.fillStyle = "red", aC = 0; aC < ig.length; aC++) il.fillText(ig[aC], .5 * ie, .5 * ie);
	return -1 < (canvas = function(ii) {
		var aC, eO, fj = ii.data;
		for (aC = fj.length - 4; 0 <= aC; aC -= 4)
			if (eO = fj[aC], ih <= eO) return Math.floor(aC / (4 * ie));
		return -1
	}(il.getImageData(0, 0, ie, ie))) && (ik = (canvas - .5 * ie + .1 * size) / size), Math.max(ik, 0)
}

function dE() {
	this.io = new Int16Array(4), this.ip = new Int16Array(4), this.iq = null, this.dr = function() {
		var aC;
		for (this.io[0] = -bV.fr, this.io[1] = 1, this.io[2] = bV.fr, this.io[3] = -1, this.iq = new Int16Array([-bV.fr, 1 - bV.fr, 1, bV.fr + 1, bV.fr, bV.fr - 1, -1, -bV.fr - 1]), aC = 0; aC < 4; aC++) this.ip[aC] = 4 * this.io[aC]
	}, this.ir = function() {
		return bO.is(Math.floor(.15 * (1 + .25 * a1.a2.it()) * i.iu / iv), 4, 128)
	}, this.iw = function(fK, id) {
		for (var ix = this.ip, aC = 0; aC < 4; aC++) {
			var fV = fK + ix[aC];
			if (ad.iy(fV) && ad.fO(fV) === id) return !0
		}
		return !1
	}, this.iz = function(player, fK) {
		return !ad.fX(fK) && player === ad.fY(fK)
	}, this.fy = function(hw, hy, fS) {
		return (hw -= this.fo(fS)) * hw + (hy -= this.fq(fS)) * hy
	}, this.j0 = function(j1, j2, j3) {
		j1 = this.j5(j1) - this.j6(j3), j2 = this.j8(j2) - this.j9(j3);
		return Math.sqrt(j1 * j1 + j2 * j2)
	}, this.jA = function(jB, jC) {
		var j4 = this.fo(jB) - this.fo(jC),
			jB = this.fq(jB) - this.fq(jC);
		return ~~Math.sqrt(j4 * j4 + jB * jB + .5)
	}, this.jD = function(jB, jC) {
		var j4 = this.fo(jB) - this.fo(jC),
			jB = this.fq(jB) - this.fq(jC);
		return j4 * j4 + jB * jB
	}, this.jE = function(jF, jG, jH, jI) {
		return (jF -= jH) * jF + (jG -= jI) * jG
	}, this.jJ = function(hE, jK) {
		return bO.g7(jK * ah.hi[hE], 1e3)
	}, this.j5 = function(j1) {
		return 16 * (j1 + jL) / iv
	}, this.j8 = function(j2) {
		return 16 * (j2 + jM) / iv
	}, this.jN = function(fj) {
		return 16 * fj / iv
	}, this.hx = function(j1) {
		return Math.floor((j1 + jL) / iv)
	}, this.hz = function(j2) {
		return Math.floor((j2 + jM) / iv)
	}, this.i0 = function(hw, hy) {
		return 1 <= hw && 1 <= hy && hw < bV.fr - 1 && hy < bV.fs - 1
	}, this.fo = function(fS) {
		return fS % bV.fr
	}, this.fq = function(fS) {
		return bO.g7(fS, bV.fr)
	}, this.g3 = function(hw, hy) {
		return hy * bV.fr + hw
	}, this.jO = function(hw, hy) {
		return 4 * this.g3(hw, hy)
	}, this.jP = function(fS) {
		return this.g2(this.fo(fS), this.fq(fS))
	}, this.g2 = function(hw, hy) {
		return 0 < hw && hw < bV.fr - 1 && 0 < hy && hy < bV.fs - 1
	}, this.fW = function(fS) {
		return fS << 2
	}, this.fU = function(fK) {
		return fK >> 2
	}, this.jQ = function(fS) {
		return bV.fr * this.fq(fS) * 256 + (this.fo(fS) << 4)
	}, this.jR = function(fS) {
		return this.jQ(fS) + 8 + (bV.fr << 7)
	}, this.jS = function(j3) {
		return bV.fr * (this.j9(j3) >> 4) + (this.j6(j3) >> 4)
	}, this.jT = function(j3) {
		j3 = this.jS(j3);
		return (this.fo(j3) >> 5) + bQ.jU.jV * (this.fq(j3) >> 5)
	}, this.j6 = function(j3) {
		return j3 % (bV.fr << 4)
	}, this.j9 = function(j3) {
		return bO.g7(j3, bV.fr << 4)
	}, this.jW = function(fS, iY) {
		return fS + this.io[iY]
	}, this.jX = function(fK, iY) {
		return fK + this.ip[iY]
	}, this.jY = function(jB, jC) {
		var j4 = this.fo(jC) - this.fo(jB),
			jC = this.fq(jC) - this.fq(jB);
		return Math.abs(j4) >= Math.abs(jC) ? 1 + 2 * (j4 < 0) : 2 * (0 < jC)
	}, this.jZ = function(player) {
		return this.g3(ah.ja[player] + ah.jb[player] >> 1, ah.jc[player] + ah.jd[player] >> 1)
	}, this.je = function(player) {
		return this.g3(az.jf(ah.ja[player], ah.jb[player]), az.jf(ah.jc[player], ah.jd[player]))
	}
}

function cs() {
	this.jg = new jh, this.ji = new jj, this.jk = new jl, this.performance = new jm, this.jn = new jo, this.jp = new jq, this.jr = new js, this.jt = new ju, this.jv = new jw, this.dr = function() {
		this.jg.dr(), this.jk.dr(), this.performance.dr(), this.jn.dr(), this.jp.dr()
	}, this.el = function() {
		this.performance.el(), this.jg.el(), this.jk.jx()
	}
}

function jo() {
	var jy, k0 = new Uint16Array(8);

	function k8(size, player) {
		for (var aC = ah.h8[player].length - 1; size <= aC; aC--) ad.kE(ah.h8[player][aC], player)
	}
	this.dr = function() {
		jy = 0
	}, this.k1 = function(player, k2) {
		return bR.fc[1] = ah.h8[player].length, bR.fc[0] === aE.fd ? ap.jn.k3(player) : this.k4(player, bR.fc[0]), (0 !== bR.fc[1] || 0 !== ah.h8[player].length) && !(!k2 && bR.fc[1] === ah.h8[player].length || (bR.fc[0] === aE.fd ? ah.k5[
			player]++ : ah.k6[player]++, 0))
	}, this.k7 = function(player) {
		k8(bR.fc[1], player), ae.ep(player, bR.gD[0], bR.fc[0]), aG.k9(player, !1)
	}, this.kA = function(player, kB, fg, iQ) {
		var kC = bO.g7(12 * ah.hi[player], 1024);
		iQ -= iQ >= bO.g7(ah.hi[player], 2) ? kC : 0, k8(fg, player), ae.ep(player, iQ, kB), ah.hi[player] -= iQ + kC, aG.k9(player, !1)
	}, this.k4 = function(player, kB) {
		for (var iY, fi = ad.fi, aC = ah.hM[player].length - 1; 0 <= aC; aC--)
			if (ad.kD(ah.hM[player][aC]))
				for (iY = 3; 0 <= iY; iY--)
					if (ad.hG(ah.hM[player][aC] + fi[iY]) && ad.fY(ah.hM[player][aC] + fi[iY]) === kB) {
						ah.h8[player].push(ah.hM[player][aC]);
						break
					}
	}, this.k3 = function(player) {
		for (var fi = ad.fi, aC = ah.hM[player].length - 1; 0 <= aC; aC--)
			if (ad.kD(ah.hM[player][aC]))
				for (var iY = 3; 0 <= iY; iY--)
					if (ad.fX(ah.hM[player][aC] + fi[iY])) {
						ah.h8[player].push(ah.hM[player][aC]);
						break
					}
	}, this.kF = function(player, kG) {
		var aC, fz, iY, ia, fg = ah.hM[player].length,
			kH = 256 <= fg ? 12 : 32 <= fg ? 6 : 1,
			kI = fg - 1 - az.kJ(kH),
			fi = ad.fi;
		jy = 0;
		loop: for (aC = kI; 0 <= aC; aC -= kH)
			for (iY = 3; 0 <= iY; iY--)
				if ((ia = ad.fX(ah.hM[player][aC] + fi[iY]) ? aE.fd : ad.fY(ah.hM[player][aC] + fi[iY])) === aE.fd || ad.hG(ah.hM[player][aC] + fi[iY]) && ia !== player && (kG || bw.fZ(player, ia))) {
					for (fz = jy - 1; 0 <= fz; fz--)
						if (k0[fz] === ia) continue loop;
					if (k0[jy] = ia, 8 <= ++jy) return !0
				}
		return 0 < jy
	}, this.kK = function(player, kG) {
		var aC, iY, ia, fi = ad.fi;
		for (jy = 0, aC = ah.hM[player].length - 1; 0 <= aC; aC--)
			for (iY = 3; 0 <= iY; iY--)
				if ((ia = ad.fX(ah.hM[player][aC] + fi[iY]) ? aE.fd : ad.fY(ah.hM[player][aC] + fi[iY])) === aE.fd || ad.hG(ah.hM[player][aC] + fi[iY]) && ia !== player && (kG || bw.fZ(player, ia))) return k0[jy++] = ia, !0;
		return !1
	}, this.kL = function() {
		for (var g0, aC = jy - 1; 0 <= aC; aC--)
			if (k0[aC] === aE.fd) {
				for (jy--, g0 = aC; g0 < jy; g0++) k0[g0] = k0[g0 + 1];
				return !0
			} return !1
	}, this.kM = function(player) {
		for (var g0, aC = jy - 1; 0 <= aC; aC--)
			if (ae.kN(player, k0[aC]))
				for (jy--, g0 = aC; g0 < jy; g0++) k0[g0] = k0[g0 + 1];
		return 0 === jy
	}, this.kO = function() {
		for (var aC = jy - 1; 0 <= aC; aC--)
			if (bD.h2.kP(k0[aC])) return !0;
		return !1
	}, this.kQ = function() {
		for (var aC = jy - 1; 0 <= aC; aC--) bD.h2.kP(k0[aC]) || (k0[aC] = k0[--jy]);
		return 0 < jy
	}, this.kR = function(player) {
		for (var g0, kS = k0[0], kT = ah.hi[kS] + ae.hj(kS, player), aC = jy - 1; 1 <= aC; aC--)(g0 = ah.hi[k0[aC]] + ae.hj(k0[aC], player)) < kT && (kS = k0[aC], kT = g0);
		return kS
	}, this.kU = function(player) {
		var k, kV = k0[0];
		if (1 !== jy)
			for (var kW = bO.g7(ah.jb[player] + ah.ja[player], 2), kX = bO.g7(ah.jd[player] + ah.jc[player], 2), fw = kY(kW - bO.g7(ah.jb[kV] + ah.ja[kV], 2)) + kY(kX - bO.g7(ah.jd[kV] + ah.jc[kV], 2)), aC = jy - 1; 1 <= aC; aC--)(k = kY(kW - bO
				.g7(ah.jb[k0[aC]] + ah.ja[k0[aC]], 2)) + kY(kX - bO.g7(ah.jd[k0[aC]] + ah.jc[k0[aC]], 2))) < fw && (fw = k, kV = k0[aC]);
		return kV
	}, this.kZ = function() {
		for (var ka = k0, kb = ka[0], hi = ah.hi, kc = hi[kb], aC = jy - 1; 1 <= aC; aC--) {
			var hE = ka[aC],
				g0 = hi[hE];
			kc < g0 && (kb = hE, kc = g0)
		}
		return kb
	}, this.kd = function() {
		return k0[az.kJ(jy)]
	}
}

function jq() {
	function kt(player, kB, kj) {
		3 <= kj && 2142 < bi.kz() && (kB === aE.fd || ah.hi[kB] < bO.g7(ah.hi[player], 20)) && aF.ko(player, 20)
	}

	function kw(player, iQ, kB, kj) {
		3 <= kj && kj < 6 && bO.g7(ah.hi[player], 8) > ah.hi[kB] && (iQ = Math.max(bO.g7(11 * ah.hi[kB], 5), bO.g7(ah.hi[player], 10)));
		kj = ah.h8[player].length;
		ap.jn.k4(player, kB), ap.jn.kA(player, kB, kj, iQ)
	}

	function ks(player, iQ) {
		var kB = aE.fd,
			fg = ah.h8[player].length;
		ap.jn.k3(player), ah.h8[player].length !== fg && ap.jn.kA(player, kB, fg, iQ)
	}
	this.ke = new Uint8Array(aE.fd), this.dr = function() {
		this.ke.fill(0)
	}, this.kf = function(player, iQ) {
		var kh, kj, kk, kl;
		ae.kg(player) && (kh = af.ki(player), 3 <= (kj = aF.iQ[player]) && kj < 6 && (iQ = Math.max(ah.hi[player] - kh, iQ)), kk = ah.hN[player].length, kl = ah.hM[player].length, 30 * ah.hU[player] > aE.km && kn[player] < 10 && 100 * kl <= kk &&
			aF.ko(player, 10), aE.ib ? function(player, iQ, kj, kh) {
				var kB;
				if (ap.jn.kF(player, !1) || ap.jn.kK(player, !1)) {
					if (!ap.jn.kM(player))
						if (ap.jn.kL()) ks(player, iQ), kt(player, aE.fd, kj);
						else {
							if (az.ku(aF.kv[kj])) kB = ap.jn.kR(player);
							else {
								if (ap.jn.kO() && az.ku(aF.kx[kj]) && ap.jn.kQ(), 6 === kj) return kw(player, iQ, ap.jn.kd(), kj);
								kB = ap.jn.kU(player)
							}
							kw(player, iQ, kB, kj), kt(player, kB, kj)
						}
				} else bQ.kq.el(player) || ap.jr.el(player) || ! function(player, iQ, kj, kh) {
					var ke = ap.jp.ke;
					ke[player] = 0;
					var l0 = bj.fe[player];
					if (0 !== l0) {
						var l1 = ah.hi[player],
							hU = ah.hU;
						if (player < aE.l2 && (iQ = l1), !(l1 < hU[player] || 5 === kj && l1 < kh || 4 === kj && l1 < bO.g7(kh, 2))) {
							bk.l3(l0);
							for (var fg = bR.gB[0], gK = bR.gK, aC = az.kJ(fg), g0 = 0; g0 < fg; g0++) {
								var eq = gK[(g0 + aC) % fg];
								if (ke[eq]) return bB.l4.l5(player, eq, iQ)
							}
							var l6 = bQ.z.l6;
							for (g0 = 0; g0 < fg; g0++)
								if (eq = gK[(g0 + aC) % fg], l6[eq] && eq !== player) return bB.l4.l5(player, eq, iQ)
						}
					}
				}(player, iQ, kj, kh)
			}(player, iQ, kj, kh) : (!kl || kk && (kk < kl && !az.kJ(10) || 100 * kl <= kk && az.kJ(3) || !az.kJ(8))) && bQ.kq.el(player) || function(player, iQ, kj) {
				ap.jn.kF(player, !0) || ap.jn.kK(player, !0) ? ap.jn.kM(player) || (ap.jn.kL() ? ks(player, iQ) : az.ku(aF.kv[kj]) ? kw(player, iQ, ap.jn.kR(player), kj) : 5 === kj ? kw(player, iQ, ap.jn.kZ(), kj) : (ap.jn.kO() && az.ku(aF
					.kx[kj]) && ap.jn.kQ(), kw(player, iQ, 6 === kj ? ap.jn.kd() : ap.jn.kU(player), kj))) : ap.jr.el(player)
			}(player, iQ, kj))
	}
}

function cC() {
	var l7 = new Uint8Array(aE.fd),
		l8 = new Uint16Array(aE.fd),
		l9 = new Uint16Array(aE.fd),
		lA = new Uint8Array(aE.fd),
		lB = (this.iQ = new Uint8Array(aE.fd), new Uint16Array(aE.fd)),
		lC = new Uint16Array(aE.fd);

	function lR(aC) {
		l7[aC] = 1 + bO.g7(lB[aC] * az.random(), 10 * az.value(100))
	}
	this.lD = null, this.kx = [97, 94, 70, 40, 20, 0, 100], this.lE = [500, 450, 400, 300, 80, 50, 100], this.kv = [0, 0, 5, 25, 50, 100, 0], this.lF = [60, 74, 112, 200, 256, 512, 512], this.lG = [1, 2, 3, 4, 6, 8, 1], this.lH = [500, 450, 400, 300,
		80, 50, 100
	], this.lI = [100, 150, 250, 400, 600, 1e3, 100], this.ds = function() {
		this.lD = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dr = function() {
		l7.fill(0), l8.fill(0), l9.fill(0), lA.fill(0), this.iQ.fill(0), lB.fill(0), lC.fill(0);
		var lJ = aE.l2;
		if (9 === aE.lK) this.lL();
		else if (__fx.customLobby.isActive())
			for (aC = aE.lO - 1; 0 <= aC; aC--) this.iQ[aC + lJ] = __fx.customLobby.gameInfo.difficulty;
		else if (aE.lM)
			if (3 === aE.data.botDifficultyType)
				for (aC = aE.lO - 1; 0 <= aC; aC--) {
					var iZ = aC + lJ;
					this.iQ[iZ] = aE.data.botDifficultyData[iZ]
				} else if (2 === aE.data.botDifficultyType)
					for (aC = aE.lO - 1; 0 <= aC; aC--) this.iQ[iZ = aC + lJ] = aE.data.botDifficultyTeam[bj.lP[bj.fe[iZ]]];
				else if (1 === aE.data.botDifficultyType) {
			var lQ = this.lD.length;
			for (aC = aE.lO - 1; 0 <= aC; aC--) this.iQ[aC + lJ] = aC % lQ
		} else
			for (lQ = aE.data.botDifficultyValue, aC = aE.lO - 1; 0 <= aC; aC--) this.iQ[aC + lJ] = lQ;
		else
			for (var lN = 8 === aE.lK ? 1 : 0, aC = aE.lO - 1; 0 <= aC; aC--) this.iQ[aC + lJ] = lN;
		for (aC = 0; aC < lJ; aC++) this.iQ[aC] = 6;
		var fg = aE.fd;
		for (aC = 0; aC < fg; aC++) this.iQ[aC] <= 2 ? (lA[aC] = 5, lB[aC] = lC[aC] = 1040, 0 === this.iQ[aC] ? (l8[aC] = 980, l9[aC] = 980) : 1 === this.iQ[aC] ? (l8[aC] = 980, l9[aC] = 920, lB[aC] = lC[aC] = 1100) : (l8[aC] = 825, l9[aC] =
			750)) : this.iQ[aC] <= 4 ? (lA[aC] = 1 + az.kJ(20), 3 === this.iQ[aC] ? (l8[aC] = l9[aC] = 500, lB[aC] = lC[aC] = 1e3) : (lC[aC] = 250 + az.kJ(1501), lB[aC] = 500 + az.kJ(501), l8[aC] = 300 + az.kJ(201), l9[aC] = 100 + az.kJ(
			201))) : this.iQ[aC] <= 5 ? (lB[aC] = 1e3, lC[aC] = 1e3, lA[aC] = 35 + az.kJ(16), l8[aC] = 300 + az.kJ(201), l9[aC] = 50 + az.kJ(101)) : (lB[aC] = lC[aC] = 800, lA[aC] = 5, l8[aC] = 10, l9[aC] = 250), lR(aC)
	}, this.lL = function() {
		for (var fK = b0.lS, lJ = aE.l2, aC = fK - 1; 0 <= aC; aC--) this.iQ[aC + lJ] = 0;
		for (var g0 = 0; g0 < 6; g0++) {
			for (aC = fK + b0.lT[g0] - 1; fK <= aC; aC--) this.iQ[aC + lJ] = g0;
			fK += b0.lT[g0]
		}
	}, this.ko = function(hE, value) {
		l7[hE] = Math.min(value, l7[hE])
	}, this.el = function(hE) {
		0 == --l7[hE] && ! function(hE) {
			(function(hE) {
				lB[hE] !== lC[hE] && (lB[hE] += lB[hE] < lC[hE] ? 3 : -3);
				l8[hE] !== l9[hE] && (l8[hE] += l8[hE] < l9[hE] ? lA[hE] : -lA[hE], l8[hE] = (Math.abs(l8[hE] - l9[hE]) <= lA[hE] ? l9 : l8)[hE]);
				l7[hE] = bO.g7(lB[hE], 10)
			})(hE), ap.jp.kf(hE, bO.g7(l8[hE] * ah.hi[hE], 1e3))
		}(hE)
	}, this.lW = function(hE, h9) {
		lB[hE] = lC[hE] = h9
	}
}

function jl() {
	var lX = new Uint16Array(aE.fd);

	function lm(player, lk) {
		for (var fg = bR.gB[0], gJ = bR.gJ, ly = -1, lz = aE.fd, aC = 0; aC < fg; aC++) {
			var fw, hE = gJ[aC];
			bw.fZ(player, hE) && (fw = bP.jD(lk, bP.jZ(hE)), -1 === ly || fw < ly) && (ly = fw, lz = hE)
		}
		return lz
	}

	function lo(ll, lk) {
		if (ll === aE.fd) return 0;
		var hN = ah.hN[ll],
			lx = hN.length;
		if (0 === lx) return 0;
		for (var fg = Math.min(lx, 10), lz = 0, ly = bP.jD(hN[lz] >> 2, lk), aC = 0; aC < fg; aC++) {
			var iZ = az.kJ(lx),
				fw = bP.jD(hN[iZ] >> 2, lk);
			fw < ly && (ly = fw, lz = iZ)
		}
		return hN[lz] >> 2
	}

	function lt(player, lk, kB, m1) {
		var m2;
		(m1 === aE.fd || (m2 = bP.jZ(kB), m1 = bP.jZ(m1), bP.jD(lk, m2) < bP.jD(lk, m1))) && (lX[player] = kB)
	}
	this.dr = function() {
		lX.fill(aE.fd)
	}, this.jx = function() {
		if (bi.kz() % 109 == 9 && !(am.lY < 20) && aE.ib && !(bk.lZ() < bO.g7(8 * aE.km, 10))) {
			var la = bk.lb();
			if (bj.lP[la]) {
				bk.lc(la);
				var fg = bR.gB[0];
				if (0 !== fg)
					for (var h = bR.gK, ld = am.ld, lY = am.lY, le = lX, iZ = az.kJ(fg), aC = 0; aC < lY; aC++) {
						var i9 = ld[aC],
							lf = h[iZ];
						bD.h2.lg(i9, lf) && 512 === le[i9] && (le[i9] = lf, iZ = (iZ + 1) % fg)
					}
			}
		}
	}, this.el = function(player) {
		var lk, ln, ll, lh = function(player) {
			var kB = lX[player];
			if (kB !== aE.fd) {
				if (bD.h2.m0(kB) && ah.hN[kB]) return kB;
				lX[player] = aE.fd
			}
			return aE.fd
		}(player);
		return function(player) {
			for (var lw = am.ld, lx = am.lY, fg = Math.min(lx, lx < 17 && 5 === az.kJ(20) ? 1 : 16), hF = az.kJ(lx), gJ = bR.gJ, hN = ah.hN, h9 = 0, aC = 0; aC < fg; aC++) {
				var hE = lw[(aC + hF) % lx];
				hE !== player && hN[hE].length && (gJ[h9++] = hE)
			}
			bR.gB[0] = h9
		}(player), 0 !== bR.gB[0] && (0 < (ln = lo(ll = lm(player, lk = bP.je(player)), lk)) && bQ.lp.lq(player, bQ.lr.ls(ln, lk)) ? (lt(player, lk, ll, lh), !0) : 0 < (ll = function(player, lk) {
			for (var fg = bR.gB[0], gJ = bR.gJ, le = lX, hF = 0, aC = 0; aC < fg; aC++) {
				var hE = gJ[aC],
					hE = le[hE];
				hE !== aE.fd && bD.h2.m0(hE) && player !== hE && bw.fZ(player, hE) && (gJ[hF++] = hE)
			}
			return 0 !== (bR.gB[0] = hF) ? lo(lm(player, lk), lk) : 0
		}(player, lk)) && bQ.lp.lq(player, bQ.lr.ls(ll, lk)) ? (lt(player, lk, ad.fY(ll << 2), lh), !0) : !!(0 < (ln = lo(lh, lk)) && bQ.lp.lq(player, bQ.lr.ls(ln, lk))))
	}
}

function js() {
	function m6(player) {
		for (var g5 = ah.g5[player], fg = g5.length, g6 = Math.max(bO.g7(fg, 12), 1), fi = ad.fi, eO = az.kJ(fg), aC = 0; aC < fg; aC += g6)
			for (var fV = g5[(aC + eO) % fg], fj = 3; 0 <= fj; fj--) {
				var fk = fV + fi[fj];
				if (ad.fl(fk)) return {
					fK: fk,
					id: ad.fO(fk),
					hE: player
				}
			}
		return null
	}

	function mB(player, mD) {
		var iQ = bD.h2.mE(player, aF.lH[aF.iQ[player]]);
		ah.h8[player].push(mD.fK), ae.ep(player, iQ, mD.hE), aG.k9(player, !0)
	}
	this.el = function(player) {
		return !!bV.fL(bV.fM) && !!aE.data.passableMountains && 0 !== ah.g5[player].length && function(player) {
			var m5 = m6(player);
			if (null === m5) return !1;
			! function(player) {
				for (var ld = am.ld, lY = am.lY, fg = Math.min(lY, 12), hF = az.kJ(lY), gJ = bR.gJ, g5 = ah.g5, h9 = 0, aC = 0; aC < fg; aC++) {
					var hE = ld[(aC + hF) % lY];
					hE !== player && g5[hE].length && bw.fZ(player, hE) && (gJ[h9++] = hE)
				}
				bR.gB[0] = h9
			}(player);
			var m8 = function(fN) {
				for (var fg = bR.gB[0], gJ = bR.gJ, aC = 0; aC < fg; aC++) {
					var mD = m6(gJ[aC]);
					if (null !== mD && mD.id === fN) return mD
				}
				return null
			}(m5.id);
			return null !== m8 ? (mB(player, m8), !0) : function(player, fN) {
				var fg = ap.jg.mC;
				if (0 !== fg)
					for (var fK = ap.jg.buffer[az.kJ(fg)] << 2, fi = ad.fi, fj = az.kJ(4);;) {
						if (fK += fi[fj], ad.fl(fK)) {
							if (ad.fO(fK) === fN) return mB(player, {
								fK: fK,
								hE: aE.fd
							}), !0;
							break
						}
						if (!ad.fX(fK)) break
					}
				return !1
			}(player, m5.id)
		}(player)
	}
}

function jj() {
	this.el = function(player) {
		return bQ.lp.lq(player, function(player) {
			var fg = ap.jg.mC;
			if (0 === fg) return -1;
			for (var lx = Math.min(fg, ap.performance.mG ? fg : 10), buffer = ap.jg.buffer, kI = bO.g7(az.random() * fg, az.value(100)), e = kI + lx, mH = az.jf(ah.ja[player], ah.jb[player]), mI = az.jf(ah.jc[player], ah.jd[player]),
					lz = -1, fw = bP.jE(0, 0, bV.fr, bV.fs), aC = kI; aC < e; aC++) {
				var hF = aC % fg,
					mJ = bP.fy(mH, mI, buffer[hF]);
				mJ < fw && (fw = mJ, lz = hF)
			}
			return -1 !== lz ? function(fS, mH, mI) {
				var hw = bP.fo(fS),
					hy = bP.fq(fS),
					j4 = mH - hw,
					j7 = mI - hy;
				Math.abs(j4) >= Math.abs(j7) ? (j7 = 0, j4 = Math.sign(j4)) : (j4 = 0, j7 = Math.sign(j7));
				j4 === j7 && (j4 = 1);
				for (;;) {
					if (hw += j4, hy += j7, !bP.g2(hw, hy)) break;
					if (fS = bP.g3(hw, hy), ad.iy(bP.fW(fS))) return fS
				}
				return -1
			}(buffer[lz], mH, mI) : -1
		}(player))
	}
}

function ju() {
	this.el = function(player) {
		var mL = function(player) {
			for (var mO = bQ.mO.mQ(), fg = mO.length, lx = Math.min(fg, 32), iZ = az.kJ(fg), aC = 0; aC < lx; aC++) {
				var mL = (aC + iZ) % fg,
					mN = mO[mL],
					jB = mN[0],
					jC = mN[mN.length - 1];
				if (bQ.lr.mR(player, jB) && bQ.lr.mS(player, jC)) return mL;
				if (bQ.lr.mR(player, jC) && bQ.lr.mS(player, jB)) return 0 <= (mL = bQ.mO.mT(jC, jB)) ? mL : bQ.mO.mU() ? -1 : bQ.mO.mV(bQ.mO.mW(mN))
			}
			return -1
		}(player);
		return -1 !== mL && (mL = bQ.mO.get(mL), !bQ.lr.mP(player, mL)) && (bR.h[0] = mL, !0)
	}
}

function jm() {
	this.mG = 0, this.dr = function() {
		this.mG = 0
	}, this.el = function() {
		if (!this.mG && bi.kz() % 30 == 7 && bD.h2.mZ(90) && (ap.performance.mG = 1)) {
			if (aE.ib) {
				var la = bk.lb();
				if (bj.lP[la]) {
					bk.l3(la);
					var h = bR.gK,
						fg = bR.gB[0];
					if (0 !== fg)
						for (var mc = Math.min(100 + 10 * (fg - 1), 400), aC = 0; aC < fg; aC++) aF.lW(h[aC], mc)
				}
			}
			aF.lW(md[0], 100)
		}
	}
}

function jh() {
	var me = 0,
		mf = 0,
		mg = 300,
		mh = 300,
		mi = 0;
	this.mC = 0, this.buffer = new Uint32Array(512), this.dr = function() {
		mf = me = 0, this.mC = 0, mi = 0
	}, this.el = function() {
		if (function() {
				var fg = ap.jg.mC;
				if (0 === fg) return 1;
				var buffer = ap.jg.buffer;
				if (bi.kz() % 35 == 6) {
					for (var aC = fg - 1; 0 <= aC; aC--) ad.fX(buffer[aC] << 2) || (fg--, buffer[aC] = buffer[fg]);
					ap.jg.mC = fg
				}
				return fg < buffer.length
			}())
			if (mg <= me) {
				var mm = ap.jg.mC;
				if (mm) {
					if (bi.kz() % 350 != 1) return;
					if (mi !== mm) return void(mi = mm);
					if (!bD.h2.kP(md[0])) return
				} else if (bi.kz() % 12 != 8) return;
				bD.h2.mn() || ap.jg.dr()
			} else {
				var aC, j = bV.fr,
					mo = j - 2,
					mm = mo * (bV.fs - 2),
					mp = mg,
					buffer = ap.jg.buffer,
					lx = ap.jg.mC,
					mq = buffer.length,
					hF = Math.min(mf + mp * ((1 + 19 * ap.performance.mG) * mh), mm);
				for (aC = mf; aC < hF; aC += mp) {
					var fK = 4 * (aC % mo + (bO.g7(aC, mo) + 1) * j + 1);
					if (ad.fX(fK) && (buffer[lx] = fK >> 2, ++lx === mq)) {
						aC += mp;
						break
					}
				}(mf = aC) >= mm && (mf = ++me), ap.jg.mC = lx
			}
	}
}

function jw() {
	this.el = function() {
		if (bi.kz() % 51 == 45)
			for (var fg = bQ.z.ms, mt = bQ.z.mt, mu = bQ.z.mu, mv = bQ.z.mv, mw = bQ.z.mw, lI = aF.lI, iQ = aF.iQ, aC = 0; aC < fg; aC++) {
				var mN, player, n0, mx = mt[aC];
				mx % 64 == 6 || (mN = mu[aC], (player = bQ.lr.my(mN[mN.length - 1])) < 0) || !bD.h2.lg(player, mw[aC] >> 3) || az.kJ(1e3) >= lI[iQ[player]] || ! function(n4, mN) {
					for (var fg = mN.length - 1, n5 = bQ.z.n6[n4], fw = 0, aC = n5 + 1; aC < fg; aC++) fw += bP.jA(mN[aC], mN[aC + 1]);
					return (fw += bP.jA(bP.jS(bQ.z.n7[n4]), mN[n5 + 1])) <= 60
				}(aC, mN) || (n0 = mv[aC], 64 <= mx && bQ.n1.n2(player, n0)) || function(player, mN, n0, n4, mx) {
					bQ.n8.n9(player) && bD.h2.nA(player, aF.lE[aF.iQ[player]], 32, 0) && (bQ.z.mt[n4] = 64 + mx % 64, bQ.n1.ep(n0, bQ.z.nB), bR.h[0] = bQ.mO.mW(mN), bR.gI[1] = 6, bD.h2.nC(player), bQ.z.nD(player))
				}(player, mN, n0, aC, mx)
			}
	}
}

function nE() {
	bU.nF.nG(), aO.el(), ag.el(), aX.nH(), b1.z.el()
}

function nI() {
	b2.el(), aH.el(), ao.el(), af.el(), b5.el(), aG.el(), ap.el(), bQ.z.el(), am.nJ(), aW.el(), b0.el(), bY.el(), ag.el(), ag.nK(), aX.el(), bS.el(), aV.el(), aQ.el(), b9.nL(), aO.el(), b6.el(), aS.el(), ax.el(), bg.el(), bk.el(), b1.z.el(), b1.nM
		.el(), u.el(), bX.eZ.el(), bC.el(), bi.el()
}

function nN() {
	aI.el(), aY.el(), aR.el(), aw.el(), bF.el(), b8.el(), b9.el(), ay.nO()
}

function nP() {
	aW.nQ(!1), aQ.nQ(), aX.nQ(!1), aV.nQ(), aS.nQ(), ax.nQ(), ag.nQ(!1), bk.nR()
}

function nS() {
	ag.nQ(!1) && (bi.dy = !0), b1.z.el()
}

function cD() {
	var nT, nU, nV;

	function nX(nZ) {
		for (var aC = nT - 1; 0 <= aC; aC--) 0 === nV[nU[aC]] && ah.hU[nU[aC]] >= nZ && gk(nU[aC])
	}

	function nW(player) {
		var eh;
		64 === nV[player] ? nV[player] = 6 : (eh = ah.hU[player], nV[player] = eh < 1e3 ? 3 : eh < 1e4 ? 2 : eh < 6e4 ? 1 : 0)
	}
	this.dr = function() {
		nT = 0, nU = new Uint16Array(aE.fd), nV = new Uint8Array(aE.fd)
	}, this.el = function() {
		for (var aC = nT - 1; 0 <= aC; aC--) 64 === nV[nU[aC]] ? nW(nU[aC]) : 0 == nV[nU[aC]]-- && (nW(nU[aC]), gk(nU[aC]));
		16e4 <= ah.hU[md[0]] && (nX(16e4), 3e5 <= ah.hU[md[0]]) && nX(3e5), bD.h2.m0(aE.fQ) && (bg.na[7] = Math.max(ah.hU[aE.fQ], bg.na[7]))
	}, this.h4 = function(player) {
		for (var fz, aC = nT - 1; 0 <= aC; aC--)
			if (player === nU[aC]) {
				for (nT--, fz = aC; fz < nT; fz++) nU[fz] = nU[fz + 1];
				return
			}
	}, this.k9 = function(player, nb) {
		for (var aC = nT - 1; 0 <= aC; aC--)
			if (player === nU[aC]) return;
		nU[nT++] = player, nV[player] = nb ? 2 : 64
	}
}

function cE() {
	var size, kq;
	this.dr = function() {
		size = aE.lO, kq = new Uint16Array(aE.fd);
		for (var l2 = aE.l2, aC = aE.lO - 1; 0 <= aC; aC--) kq[aC] = l2 + aC
	}, this.el = function() {
		ap.jv.el();
		for (var aC = size - 1; 0 <= aC; aC--)
			if (0 === ah.ne[kq[aC]]) {
				fz = void 0;
				var fz = aC;
				size--, kq[fz] = kq[size]
			} else aF.el(kq[aC])
	}, this.nd = function(hE) {
		kq[size++] = hE
	}
}

function cF() {
	var ng, nh, ni, nj, nk, nl, nm, nn, no, np, nq, nr, ns, nt = !1,
		nu = !1;

	function nv(nw) {
		nr = bi.eg, ni = nj = nh = 0, nk = (ns = 33) / nw, ng = 1 / (nw / ns / 4), nl = (i.j / 2 + jL) / iv, nm = (i.k / 2 + jM) / iv, nn = iv
	}

	function o3(aC) {
		var o5; - 1 !== aC && (aC = bP.jS(bQ.z.n7[aC]), o5 = bP.fo(aC) - 15, aC = bP.fq(aC) - 15, aI.nz(o5, aC, 29 + o5, 29 + aC))
	}

	function oG(eT) {
		Math.abs(Math.log(nq / nn)) < .125 && (nq = eT * nn)
	}

	function oF(o5, o6, oI, oJ) {
		no = (o5 + oI + 1) / 2, np = (o6 + oJ + 1) / 2;
		oI = i.j / (oI - o5 + 1), o5 = i.k / (oJ - o6 + 1);
		nq = .9 * (oI < o5 ? oI : o5)
	}
	this.nx = function() {
		return nt
	}, this.ny = function() {
		nv(1), this.nz(0, 0, bV.fr - 1, bV.fs - 1), aE.i5 || aE.hp || aE.hq || this.o0(aE.fQ, 3e3, !0, .3)
	}, this.o1 = function(player, o2) {
		o3(bQ.lr.o4(player, o2))
	}, this.o0 = function(player, nw, o7, zoom) {
		aE.o8 || nt && !o7 && nu || (0 === ah.hU[player] ? o3(bQ.lr.o9(player)) : (aT.oA = !1, nu = o7, nv(nw), function(player) {
			no = (ah.ja[player] + ah.jb[player] + 1) / 2, np = (ah.jc[player] + ah.jd[player] + 1) / 2
		}(player), function(zoom, player) {
			var j4 = ah.jb[player] - ah.ja[player] + 1,
				player = ah.jd[player] - ah.jc[player] + 1,
				fz = i.j / j4,
				g0 = i.k / player,
				fz = (nq = fz < g0 ? fz : g0, 0 !== zoom ? zoom : j4 < 20 && player < 20 ? .5 : .9);
			nq *= fz, oG(7 / 8)
		}(zoom, player), nt = !0, at.oD()))
	}, this.oE = function(nw) {
		aE.hp || aE.o8 || (aT.oA = !1, nu = !1, nv(nw), oF(0, 0, bV.fr - 1, bV.fs - 1), oG(7 / 8), nt = !0, at.oD())
	}, this.nz = function(o5, o6, oI, oJ) {
		nt = !1, oF(o5, o6, oI, oJ), iv = nq, aT.oK(no, i.j / 2), aT.oL(np, i.k / 2), bd.oM(), bi.dy = !0
	}, this.oN = function() {
		return !(nt && nu || (nt = !1))
	}, this.el = function() {
		var oQ, oR, fj, oU;
		nt && (nh < .5 ? nj < nk && (nj += nk * ng, ni = nh) : 1 - ni < nh && (nj = (nj -= nk * ng) < nk * ng ? nk * ng : nj), nr = nr >= bi.eg ? bi.eg - 1 : nr, fj = bi.eg - nr, nh = 1e3 < fj || 1 < (nh += nj * fj / ns) ? 1 : nh, nr = bi.eg,
			fj = iv, oQ = jL, oR = jM, fj = (iv = nn * Math.pow(nq / nn, nh)) / fj, oU = 1 - (nn * Math.pow(nq / nn, 1 - nh) - nn) / (nq - nn), aT.oK(nl + oU * (no - nl), i.j / 2), aT.oL(nm + oU * (np - nm), i.k / 2), ag.zoom(fj, (oQ * fj -
				jL) / (1 - fj), (oR * fj - jM) / (1 - fj)), bd.oM(), 1 <= nh && (nt = !1, be.oV = !0), bi.dy = !0)
	}
}

function dm() {
	this.oW = -1, this.pow = -1;
	var oX = null,
		oY = null,
		oZ = null,
		oa = null,
		oc = [],
		od = 0,
		oe = null,
		og = null,
		oh = null,
		oi = null,
		oj = this,
		ok = 1 === new Uint8Array(new Uint32Array([1]).buffer)[0] ? 4278190080 : 255,
		ol = 4294967295;

	function os(ot, ou, className) {
		ot = document.createElement(ot);
		return className && (ot.className = className), ou && ou.appendChild(ot), ot
	}

	function ov(es, ou, action) {
		ou = os("button", ou);
		return ou.type = "button", ou.textContent = es, ou.addEventListener("click", action), ou
	}

	function ow(ou) {
		ou = os("canvas", ou);
		return ou.width = 128, ou.height = 128, ou
	}

	function op(canvas, data) {
		canvas = canvas.getContext("2d");
		og || (og = canvas.createImageData(128, 128), oh = new Uint32Array(og.data.buffer)),
			function(data, oy) {
				for (var fg = data.length, oz = 0, position = 0, color = 0; position < 16384;) {
					var eP = oz >> 3;
					if (fg <= eP) break;
					for (var eP = data[eP] << 8 | (1 + eP < fg ? data[1 + eP] : 0), oN = Math.min(16384, position + (eP >> 10 - (7 & oz) & 63)), p1 = color ? ok : ol, aC = position; aC < oN; aC++) oy[aC] = p1;
					position = oN, oz += 6, color ^= 1
				}
				for (aC = position; aC < 16384; aC++) oy[aC] = ol
			}(data, oh), canvas.putImageData(og, 0, 0)
	}

	function oq() {
		if (oX) {
			oa.disabled = !od;
			for (var aC = 0; aC < oc.length; aC++) oc[aC].setAttribute("aria-pressed", String(Boolean(od & 1 << aC)))
		}
	}

	function p4(e) {
		var p6, p5;
		"Escape" === e.key ? (e.preventDefault(), oj.close()) : "Tab" === e.key && oX && (p6 = (p5 = oX.querySelectorAll("button:not(:disabled)"))[0], p5 = p5[p5.length - 1], e.shiftKey && document.activeElement === p6 ? (e.preventDefault(), p5
			.focus()) : e.shiftKey || document.activeElement !== p5 || (e.preventDefault(), p6.focus()))
	}

	function pD() {
		oj.close(), b1.en.pF(0, 0, oj.oW, oj.pow)
	}

	function pE() {
		var pG, on;
		od && (pG = od, on = oe, oj.close(), b1.en.pF(pG, on, oj.oW, oj.pow))
	}
	this.show = function(om, on, oW, pow) {
		this.oW = oW, this.pow = pow, oe = on, oX || function() {
			oi = document.activeElement, (oX = os("div", document.body, "captcha-overlay")).setAttribute("role", "dialog"), oX.setAttribute("aria-modal", "true"), oX.setAttribute("aria-label", L(14)), os("style", oX).textContent =
				".captcha-overlay{position:fixed;inset:0;z-index:5;min-width:200px;min-height:200px;background:rgba(0,0,0,.85);color:#fff;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;margin:0;box-sizing:border-box;overflow:hidden;font-family:system-ui,sans-serif;--tile:80px}.captcha-overlay *{box-sizing:border-box}.captcha-overlay canvas{display:block;width:100%;height:100%;image-rendering:pixelated;background:white}.captcha-reference-row{position:relative;display:flex;justify-content:center;width:calc(4 * var(--tile));height:var(--tile);flex:none;margin-top:auto}.captcha-reference-label{position:absolute;left:0;top:0;width:calc(1.5 * var(--tile));height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:calc(var(--tile) * .3);line-height:1;font-weight:700}.captcha-overlay .captcha-reference{width:var(--tile);height:var(--tile);border:4px solid #000;flex:none}.captcha-grid{display:grid;grid-template-columns:repeat(4,var(--tile));gap:0;flex:none}.captcha-overlay button{appearance:none;margin:0;padding:0;border:3px solid #000;border-radius:0;background:#253343;color:white;font:600 17px system-ui,sans-serif;cursor:pointer;touch-action:manipulation;outline:none;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.captcha-overlay button:focus{outline:none}.captcha-overlay .captcha-tile{position:relative;width:var(--tile);height:var(--tile);min-width:0;min-height:0;border-width:4px}.captcha-overlay .captcha-tile[aria-pressed=true]{border-color:#bcf56b}.captcha-actions{display:flex;gap:0;width:100%;height:62px;flex:none;margin-top:auto}.captcha-actions button{flex:1;min-width:0;padding:0 2px}.captcha-actions button:last-child{background:#bcf56b;color:#101319}.captcha-overlay button:disabled{color:#697580;cursor:default}";
			var p9 = os("div", oX, "captcha-reference-row");
			os("span", p9, "captcha-reference-label").textContent = L(15), (oZ = ow(p9)).className = "captcha-reference", oZ.setAttribute("aria-label", L(16)), oY = os("div", oX, "captcha-grid");
			for (var aC = 0; aC < 16; aC++) oc.push(function(eP) {
				var e = ov("", oY, function() {
					od ^= 1 << eP, oq()
				});
				return e.className = "captcha-tile", e.setAttribute("aria-label", L(13, [eP + 1])), e.setAttribute("aria-pressed", "false"), ow(e).setAttribute("aria-hidden", "true"), e
			}(aC));
			var p9 = os("div", oX, "captcha-actions"),
				pC = ov(L(17), p9, function() {
					oj.close()
				});
			ov(L(18), p9, pD), oa = ov(L(19), p9, pE), oX.addEventListener("keydown", p4), oj.resize(), oq(), pC.focus()
		}(), op(oZ, om[0]);
		for (var aC = 0; aC < 16; aC++) op(oc[aC].firstChild, om[aC + 1]);
		od = 0, oq()
	}, this.resize = function() {
		var size;
		oX && (size = Math.min(Math.max(200, window.innerWidth) / 4, (Math.max(200, window.innerHeight) - 62) / 5), oX.style.setProperty("--tile", size + "px"))
	}, this.close = function() {
		if (oX) {
			for (var or = oX.querySelectorAll("canvas"), aC = 0; aC < or.length; aC++) or[aC].width = 0, or[aC].height = 0;
			oX.remove(), oc = [], oh = og = oe = oa = oZ = oY = oX = null, od = 0, oi && document.body.contains(oi) && oi.focus(), oi = null
		}
	}
}

function dn() {
	this.nF = new pH, this.pI = new pJ, this.pK = new pL, this.dr = function(pM, pN) {
		this.pI.dr(pM, pN), this.nF.dr(pN), this.pK.dr()
	}
}

function pL() {
	var pO = 0,
		pP = [],
		pQ = [],
		pR = "";

	function pb(pc, name) {
		var ph = bq.pi;
		return ph && pc === ph.pc || 0 <= pP.indexOf(pc) || (pQ.length && (ph = function(pc, name) {
			pc = bq.pk.pl(pc), pc = pc ? pc.username : name;
			return pc ? bD.pY.pm(pc) : null
		}(pc, name)) ? 0 <= pQ.indexOf(ph) : void 0)
	}
	this.dr = function() {
		pO = 0, pP = [], pQ = [], pR = ""
	}, this.pS = function() {
		return pO
	}, this.pT = function(pU) {
		pO = 1 - pO, pR = "", pP = [], pQ = [], this.pV(pU), by.nF.reset()
	}, this.pV = function(pU) {
		if (pO && bq.fD) {
			var h = bq.pW.pX(pU),
				pU = h.join(" ");
			if (pU !== pR) {
				pR = pU, pP = [], pQ = [];
				for (var aC = 0; aC < h.length; aC++) bD.pY.startsWith(h[aC], "@[") ? pQ.push(h[aC].substring(2, h[aC].length - 1).toUpperCase()) : pP.push(bJ.f7.f8(h[aC].substring(1), 5));
				by.nF.reset()
			}
		}
	}, this.pZ = function(pa) {
		if (!pO || !pP.length && !pQ.length || 4 < pa.id) return 1;
		if (pb(pa.pc, pa.pd)) return 1;
		if (void 0 !== pa.target && pb(pa.target, pa.pe)) return 1;
		if (0 === pa.id)
			for (var h = bq.pW.pX(pa.s), aC = 0; aC < h.length; aC++)
				if (bD.pY.startsWith(h[aC], "@[")) {
					var pf = h[aC].substring(2, h[aC].length - 1).toUpperCase();
					if (0 <= pQ.indexOf(pf) || pf === (pf = void 0, (pf = bq.pi) ? bD.pY.pm(pf.username) : null)) return 1
				} else if (pb(bJ.f7.f8(h[aC].substring(1), 5), null)) return 1;
		return 0
	}
}

function pH() {
	var pn = null,
		po = 1048575;

	function pw() {
		var h9 = pn.childNodes.length - bq.z.pz;
		if (!(h9 <= 0)) {
			for (var aC = 0; aC < h9; aC++) pn.removeChild(pn.firstChild);
			by.pI.q0()
		}
	}

	function pt(ps, q1) {
		q1 && (q1.q2 = 1, ps.appendChild(bq.q3.transform(q1)))
	}
	this.dr = function(pN) {
		pn = pN, po = 1048575
	}, this.reset = function(pp) {
		po = 1048575, pn.textContent = "", pp || this.nR()
	}, this.nR = function() {
		var pq = bq.z.pq,
			pr = bq.z.pr,
			fg = pq.length,
			kI = 1048575 === po ? 0 : fg - (pr - po + 1048575) % 1048575;
		if (po = pr, !(fg <= (kI = Math.max(kI, 0)))) {
			for (var ps = document.createDocumentFragment(), aC = kI; aC < fg; aC++) by.pK.pZ(pq[aC]) && pt(ps, bq.lr.pu(pq[aC], bq.lr.pv(pq[aC])));
			pn.appendChild(ps), pw(), by.pI.px()
		}
	}, this.py = function(s) {
		var ps = document.createDocumentFragment();
		pt(ps, s), pn.appendChild(ps), pw(), by.pI.px()
	}
}

function pJ() {
	var q4 = null,
		pn = null,
		q5 = 1,
		q6 = null,
		q7 = 0;

	function q9() {
		q6 && q6.parentNode === pn || (q6 = pn.firstChild, q7 = 0), q6 && (q4.scrollTop = q6.offsetTop + q7)
	}
	this.dr = function(pM, pN) {
		pn = pN, q5 = 1, q6 = null, q7 = 0, (q4 = pM).addEventListener("scroll", function() {
			if (q4.scrollTop < q4.scrollHeight - q4.clientHeight - 2) {
				q5 = 0;
				for (var qA = pn.childNodes, qB = q4.scrollTop, aC = 0; aC < qA.length; aC++)
					if (qA[aC].offsetTop + qA[aC].offsetHeight > qB) return void(q6 = qA[aC], q7 = qB - qA[aC].offsetTop);
				q6 = null
			} else q5 = 1
		})
	}, this.q0 = function() {
		q5 || q9()
	}, this.px = function(c1) {
		q5 ? q4.scrollTop = q4.scrollHeight : c1 && q9()
	}
}

function c7() {
	var eq = bD.color;
	this.qC = eq.qD(0, 0, 0), this.qE = eq.qF(0, 0, 0, .7), this.qG = eq.qF(0, 0, 0, .5), this.qH = eq.qF(0, 0, 0, .85), this.qI = eq.qF(0, 0, 0, .75), this.qJ = eq.qF(0, 0, 0, .6), this.qK = eq.qF(0, 0, 0, .35), this.qL = eq.qD(255, 255, 255), this
		.qM = eq.qF(255, 255, 255, .3), this.qN = eq.qF(255, 255, 255, .6), this.qO = eq.qF(255, 255, 255, .4), this.qP = eq.qF(255, 255, 255, .25), this.qQ = eq.qF(255, 255, 255, .85), this.qR = eq.qF(255, 255, 255, .75), this.qS = eq.qF(255, 255,
			255, .15), this.qT = eq.qF(255, 255, 255, .11), this.qU = eq.qD(128, 128, 128), this.qV = eq.qF(64, 64, 64, .75), this.qW = eq.qF(88, 88, 88, .83), this.qX = eq.qF(60, 60, 60, .85), this.qY = eq.qF(80, 60, 60, .85), this.qZ = eq.qD(170,
			170, 170), this.qa = eq.qD(200, 235, 245), this.qb = eq.qD(30, 255, 30), this.qc = eq.qD(0, 200, 0), this.qd = eq.qD(128, 255, 128), this.qe = eq.qF(10, 65, 10, .75), this.qf = eq.qF(0, 255, 0, .6), this.qg = eq.qF(0, 255, 0, .5), this
		.qh = eq.qF(0, 200, 0, .5), this.qi = eq.qF(0, 100, 0, .75), this.qj = eq.qF(0, 60, 0, .8), this.qk = eq.qF(0, 255, 0, .3), this.ql = eq.qF(0, 180, 0, .6), this.qm = eq.qF(0, 120, 0, .85), this.qn = eq.qD(0, 120, 0), this.qo = eq.qF(0, 70, 0,
			.85), this.qp = eq.qD(190, 230, 190), this.qq = eq.qD(0, 255, 0), this.qr = eq.qF(10, 120, 10, .9), this.qs = eq.qD(200, 255, 200), this.qt = eq.qD(255, 120, 120), this.qu = eq.qD(255, 160, 160), this.qv = eq.qD(255, 70, 70), this.qw = eq
		.qD(230, 0, 0), this.qx = eq.qF(220, 0, 0, .6), this.qy = eq.qF(255, 100, 100, .8), this.qz = eq.qF(100, 0, 0, .85), this.r0 = eq.qF(60, 0, 0, .85), this.r1 = eq.qF(200, 0, 0, .6), this.r2 = eq.qF(120, 0, 0, .85), this.r3 = eq.qD(255, 70,
		10), this.r4 = eq.qD(230, 190, 190), this.r5 = eq.qD(255, 0, 0), this.r6 = eq.qD(255, 0, 255), this.r7 = eq.qF(60, 0, 60, .85), this.r8 = eq.qF(0, 60, 60, .85), this.r9 = eq.qF(10, 60, 60, .9), this.rA = eq.qF(0, 96, 96, .75), this.rB = eq
		.qD(0, 255, 255), this.rC = eq.qD(160, 160, 255), this.rD = eq.qF(0, 40, 90, .75), this.rE = eq.qF(0, 0, 255, .6), this.rF = eq.qD(200, 200, 255), this.rG = eq.qF(50, 50, 255, .83), this.rH = eq.qF(20, 90, 150, .75), this.rI = eq.qF(10, 10,
			120, .75), this.rJ = eq.qF(10, 60, 160, .9), this.rK = eq.qD(200, 220, 255), this.rL = eq.qF(0, 120, 255, .35), this.rM = eq.qD(70, 150, 255), this.rN = eq.qD(255, 120, 100), this.rO = eq.qF(255, 255, 0, .5), this.rP = eq.qF(255, 255,
			150, .2), this.rQ = eq.qD(255, 255, 0), this.rR = eq.qD(255, 255, 200), this.rS = eq.qF(200, 200, 0, .6), this.rT = eq.qF(140, 120, 0, .75), this.rU = eq.qF(180, 160, 40, .75), this.rV = eq.qF(70, 50, 20, .85), this.rW = eq.qF(30, 30, 0,
			.85), this.rX = eq.qF(60, 60, 0, .85), this.rY = eq.qD(255, 255, 100), this.rZ = eq.qD(255, 255, 140), this.ra = eq.qF(255, 140, 0, .75), this.rb = eq.qF(70, 40, 0, .85), this.rc = eq.qD(255, 150, 0), this.rd = eq.qF(255, 200, 80, .85),
		this.re = eq.qF(0, 0, 0, 0), this.rf = eq.qF(255, 255, 255, 0), this.rg = eq.qF(254, 254, 254, 0)
}

function d7() {
	this.i7 = new rh, this.h2 = new ri, this.rj = new rk, this.rl = new rm, this.l4 = new rn
}

function rh() {
	this.ro = 1, this.i8 = function(fS) {
		aE.hq || (aE.lM ? bB.rj.i8(aE.fQ, fS) : b1.rp.rq(fS))
	}, this.iE = function(jK, kB) {
		aE.hq || (this.ro && (this.ro = 0, bm.rr.px(182, jK)), aE.lM ? bB.rj.iE(aE.fQ, jK, kB) : b1.rp.rs(jK, kB))
	}, this.rt = function(jK, ru) {
		aE.hq || (aE.lM ? bB.rj.rv(aE.fQ, jK, ru) : b1.rp.rw(jK, ru))
	}, this.iJ = function(jK, fS) {
		aE.hq || (fS = (fS << 3) + bR.gI[6], aE.lM ? bB.rj.iJ(aE.fQ, jK, fS) : bQ.n8.n9(aE.fQ) && b1.rp.ry(jK, fS))
	}, this.iM = function(jK) {
		var o2;
		aE.hq || (849 === jK && (jK = 850), o2 = bR.gI[3], aE.lM ? bB.rj.iM(aE.fQ, jK, o2) : bQ.iK.rz(aE.fQ, o2) && b1.rp.s0(jK, o2))
	}, this.s1 = function(o2) {
		aE.hq || (aE.lM ? bB.rj.s1(aE.fQ, o2) : b1.rp.s0(849, o2))
	}, this.s2 = function(kB) {
		aE.hq || (aE.lM ? bB.rj.s2(aE.fQ, kB) : b1.rp.s3(kB))
	}, this.s4 = function(s5) {
		aE.hq || (aE.lM ? bB.rj.s6(aE.fQ, s5) : b1.rp.s7(s5))
	}, this.iV = function(s8) {
		aE.hq || (aE.lM ? bB.rj.iV(aE.fQ, s8) : b1.rp.s9(s8))
	}, this.sA = function() {
		aE.hq || (aE.lM ? bB.rj.sA(aE.fQ) : b1.rp.sB())
	}, this.iS = function() {
		aE.hq || (aE.lM ? bB.rj.iS(aE.fQ) : b1.rp.s3(513))
	}, this.iA = function(jK, fS, kB) {
		aE.hq || (aE.lM ? bB.rj.iA(aE.fQ, jK, fS, kB) : b1.rp.sC(jK, fS, kB))
	}
}

function rn() {
	this.l5 = function(player, ru, iQ) {
		bD.h2.sD(player, iQ, ru) && (af.rt(player, ru), !bD.h2.kP(ru)) && ap.jp.ke[ru] && ap.jp.ke[ru]--
	}, this.sE = function(player, ru, iQ) {
		bD.h2.sF(iQ, ru) ? ao.ep(ru, bR.gD[0]) && (bu.sG(player, ru, bR.gD[0], 1), bD.h2.h5(ru, bR.gD[0]), bg.sH(player, ru), ag.sI(ru, bR.gD[0])) : bg.h6(player, iQ, 12)
	}
}

function ri() {
	this.sJ = function(s5, player) {
		aE.hq || (aO.s4(aE.fQ, player, s5), b1.rp.sK(s5, player))
	}, this.sL = function(player) {
		aE.hq || (aO.sM(player, 0), b1.rp.sN(player))
	}, this.sO = function(sP, player) {
		aE.hq || (aO.sQ(sP, player), b1.rp.sR(sP, player))
	}, this.sS = function() {
		aE.lM || aE.hp || aE.hq || b1.sT.sS()
	}
}

function rm() {
	this.el = function(aD) {
		var id, gP, oN;
		for (bK.dr(aD), bK.eP += 2, oN = 8 * bK.size; bK.eP + 8 <= oN;) id = bK.sU(4), gP = bK.sU(9), 0 === id ? this.sV(id, gP, bK.sU(22)) : 1 === id ? this.sV(id, gP, bK.sU(10), bK.sU(10)) : 2 === id ? this.sV(id, gP, bK.sU(10), bK.sU(9)) :
			3 === id ? this.sV(id, gP, bK.sU(10), bK.sU(27)) : 4 === id ? this.sV(id, gP, bK.sU(10), bK.sU(16)) : 5 === id || 6 === id ? this.sV(id, gP, bK.sU(10)) : 7 === id ? this.sV(id, gP, bK.sU(1)) : 10 === id ? this.sV(id, gP, bK.sU(20), bK
				.sU(22)) : this.sV(id, gP)
	}, this.sW = [], this.sX = function() {
		for (var sZ = 0, sa = 0, sb = 0, sc = 0, sd = 0, se = 0, aC = 0; aC < 512; aC++) sZ += ah.ne[aC], sa += ah.hU[aC], sb += ah.hi[aC], sc += bQ.z.l6[aC];
		sd += bQ.z.ms, se += am.lY, this.sW.push(sb % 1073741824 * 4 + (sZ + sa + sc + sd + se) % 4)
	}, this.sV = function(id, gP, gR, gT) {
		0 === id ? bB.rj.i8(gP, gR) : 1 === id ? bB.rj.iE(gP, gR, gT) : 2 === id ? bB.rj.rv(gP, gR, gT) : 3 === id ? bB.rj.iJ(gP, gR, gT) : 4 === id ? bB.rj.iM(gP, gR, gT) : 5 === id ? bB.rj.s2(gP, gR) : 6 === id ? bB.rj.s6(gP, gR) : 7 === id ?
			bB.rj.iV(gP, gR) : 8 === id ? bB.rj.sA(gP) : 9 === id ? bB.rj.sf(gP) : 10 === id && bB.rj.iA(gP, gR >> 10, gT, gR % 1024)
	}
}

function rk() {
	this.i8 = function(player, fS) {
		bD.h2.hs(0) && bD.h2.ht(player) && bP.jP(fS) && (bC.sg.sh(0, player, fS), aE.si.ep(player, fS))
	}, this.iE = function(player, jK, kB) {
		bD.h2.hs(1) && bD.h2.ht(player) && bD.h2.sj(player, kB) && bD.h2.nA(player, jK, 12, 0) && bD.h2.sk(player, kB) && ((kB = ae.kN(player, bR.fc[0])) || ae.kg(player)) && (ah.sl[player]++, bC.sg.sh(1, player, jK, bR.fc[0]), ap.jn.k1(player,
			kB)) && (bD.h2.nC(player), bg.sm(player, jK), ap.jn.k7(player))
	}, this.rv = function(player, jK, ru) {
		bD.h2.hs(1) && bD.h2.ht(player) && aE.ib && bD.h2.sj(player, ru) && bD.h2.sn(player, ru) && bD.h2.sD(player, bD.h2.jJ(player, jK), ru) && ao.ep(ru, bR.gD[0]) && (bC.sg.sh(2, player, jK, ru), af.rt(player, ru))
	}, this.iJ = function(player, jK, rx) {
		bR.gI[1] = 7 & rx;
		var fS = rx >> 3;
		bD.h2.hs(1) && bD.h2.ht(player) && bP.jP(fS) && bQ.n8.n9(player) && bQ.n8.so(fS) && bD.h2.nA(player, jK, 32, 0) && bQ.lp.sp(player, fS, 1) && (bg.sq(player), bC.sg.sh(3, player, jK, rx), bD.h2.nC(player), bo.sr.iJ(player), bQ.z.nD(
			player))
	}, this.iM = function(player, jK, o2) {
		849 === jK ? this.s1(player, o2) : bD.h2.hs(1) && bD.h2.ht(player) && bD.h2.nA(player, jK, 32, 0) && bQ.iK.ss(player, o2) && (bg.sq(player), bC.sg.sh(4, player, jK, o2), bD.h2.nC(player), bo.sr.iM(player), bQ.z.nD(player))
	}, this.s1 = function(player, o2) {
		bD.h2.hs(1) && bD.h2.ht(player) && bQ.st.el(player, o2) && bC.sg.sh(4, player, 849, o2)
	}, this.s2 = function(player, kB) {
		513 === kB ? this.iS(player) : bD.h2.hs(1) && bD.h2.ht(player) && (kB = Math.min(kB, aE.fd), ae.kN(player, kB)) && (bC.sg.sh(5, player, kB), ae.su(player, kB))
	}, this.s6 = function(player, s5) {
		(bD.h2.hs(1) || bD.h2.hs(2)) && bD.h2.ht(player) && (s5 = bO.is(s5, 0, 1023), bC.sg.sh(6, player, s5), ag.sv(player, 0, s5))
	}, this.iV = function(player, s8) {
		ax.iU(player) && (bC.sg.sh(7, player, s8), ax.sw(player, s8))
	}, this.sA = function(player) {
		(bD.h2.hs(0) || bD.h2.hs(1)) && bD.h2.ht(player) && aN.sx(player) && (bC.sg.sh(8, player), bT.sA(player))
	}, this.sf = function(player) {
		bC.sg.sh(9, player), bT.sf(player)
	}, this.iS = function(player) {
		ax.iW(player) && (bC.sg.sh(5, player, 513), ax.iS(player))
	}, this.iA = function(player, jK, fS, kB) {
		bD.h2.hs(1) && bD.h2.ht(player) && bD.h2.sj(player, kB) && bD.h2.sk(player, kB) && bP.jP(fS) && an.fH.fa(player, fS) && (ae.kN(player, bR.fc[0]) || ae.kg(player)) && (bC.sg.sh(10, player, (jK << 10) + bR.fc[0], fS), kB = bD.h2.mE(player,
			jK), ah.h8[player].push(bR.fh[0]), ae.ep(player, kB, bR.fc[0]), aG.k9(player, !0), bg.sy(player))
	}
}

function sz(pU) {
	var k, t0 = new t1,
		t2 = document.createElement("div");

	function tA() {
		t2.style.opacity = "0", setTimeout(tC, t0.t8)
	}

	function tC() {
		u.removeChild(document.body, t2), t0 = t2 = null
	}
	k = bD.t4.t5(t0.t6, .5), t2.textContent = pU, t2.style.position = "fixed", t2.style.zIndex = t0.zIndex, t2.style.left = "50%", t2.style.top = .5 * k + "px", t2.style.transform = "translateX(-50%)", t2.style.maxWidth = "90%", t2.style.boxSizing =
		"border-box", t2.style.padding = .3 * k + "px " + .6 * k + "px", t2.style.backgroundColor = bE.qH, t2.style.color = bE.qL, t2.style.font = bD.t4.t7(0, .6 * k), t2.style.textAlign = "center", t2.style.userSelect = "none", t2.style
		.pointerEvents = "none", t2.style.transition = "opacity " + t0.t8 + "ms", bD.t4.t9(t2), document.body.appendChild(t2), setTimeout(tA, t0.tB)
}

function t1() {
	this.tB = 5e3, this.t8 = 600, this.zIndex = "1000", this.t6 = .03
}

function tD() {
	var tF;
	this.tE = [], this.tF = document.createElement("div"), this.tG = function(pU, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pU, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.tF.appendChild(
			title), title
	}, this.tH = function(pU, marginBottom) {
		var tI = document.createElement("p");
		return tI.textContent = pU, tI.style.fontSize = "0.75em", tI.style.lineHeight = "1.2em", tI.style.marginBottom = marginBottom || "0", this.tF.appendChild(tI), tI
	}, this.tJ = function(pU) {
		var tK = document.createElement("p");
		return tK.textContent = pU, tK.style.fontSize = "1em", tK.style.marginBottom = "0", tK.style.whiteSpace = "pre-wrap", tK.style.overflowWrap = "break-word", this.tF.appendChild(tK), tK
	}, this.tL = function(tM, fontSize) {
		var tF = document.createElement("div");
		return tF.innerHTML = tM, tF.style.fontSize = fontSize || "1em", tF.style.lineHeight = "1.2em", this.tF.appendChild(tF), tF
	}, this.tN = function(tO) {
		for (var tP = tO.tP, fg = tP.length, aC = 0; aC < fg; aC++) this.tF.appendChild(tP[aC])
	}, this.tQ = function(q1) {
		return this.tE.push(q1), this.tF.appendChild(q1.e), q1
	}, this.resize = function() {
		for (var fg = this.tE.length, aC = 0; aC < fg; aC++) this.tE[aC].resize && this.tE[aC].resize()
	}, (tF = this.tF).style.position = "absolute", tF.style.height = "auto", tF.style.padding = "0.5em"
}

function tR(tS, tT) {
	var tF = document.createElement("div");

	function ta() {
		var aC, qB, k, hF, fj, tX = i.l * tF.offsetWidth,
			tb = new Float64Array(function(tX) {
				var j = .25 * bD.t4.tY(.6) * i.iu;
				return Math.max(Math.floor(tX / j), 1)
			}(tX)),
			tc = bf.tc,
			td = (tX - (tb.length + 1) * bf.gap) / (tb.length * i.l);
		for (tb.fill(tc), aC = 0; aC < tT.length; aC++) qB = (fj = tT[aC].tF).style, k = bD.te.min(tb), hF = tb.indexOf(k), qB.top = bD.t4.tf(k), qB.left = bD.t4.tf(tc + hF * (td + tc)), qB.width = bD.t4.tf(td), bD.t4.t9(fj, 5), tb[hF] += fj
			.offsetHeight + 3 * tc;
		tF.style.height = bD.t4.tf(bD.te.max(tb) - 2 * tc)
	}
	this.tU = tF, this.tV = tT, this.resize = function() {
		var aC;
		for (aC = 0; aC < tT.length; aC++) tT[aC].resize();
		ta(), ta()
	}, tF.style.width = "100%", tF.style.maxWidth = "100%", tS.style.lineHeight = "1.5em", tS.style.overflowX = "hidden", tS.style.overflowY = "auto";
	for (var aC = 0; aC < tT.length; aC++) tF.appendChild(tT[aC].tF);
	tS.appendChild(tF)
}

function x(tg, th, ti, tj, tk) {
	var self, tl = document.createElement("button"),
		tp = (this.button = tl, this.tm = th, this.tn = ti, 0);

	function tt() {
		var tz;
		bM.ty() || (tp = 1, tz = bD.color.u0(ti), !1 !== tj && 0 < tz[0] && tz[0] < 255 && tz[0] === tz[1] && tz[0] === tz[2]) || (128 < tz[0] && 128 < tz[1] && 128 < tz[2] ? tl.style.backgroundColor = bD.color.u1(ti, -50) : tl.style
			.backgroundColor = bD.color.u1(ti, tz[3] && tz[3] < 120 ? 150 : 50))
	}

	function ts() {
		if (tj) {
			var tz = bD.color.u0(ti);
			if (tz[0] === tz[1] && tz[0] === tz[2]) return
		}
		th && ((tz = th(this)) ? 2 === tz && tt() : u3(this))
	}

	function tv() {
		tp = 0, this.style.backgroundColor = ti
	}

	function tu() {
		u3(this)
	}

	function u3(fj) {
		tp = 0, fj.style.backgroundColor = ti, fj.blur()
	}
	this.tr = function(tw) {
		tw = 1.1 - Math.min(.01 * tg.length, .6) + .2 * tw;
		tl.style.fontSize = tw.toFixed(1) + "em"
	}, this.tq = function(eq) {
		eq ? 1 === eq ? eq = bE.qX : 2 === eq && (tj = 1, eq = bE.qX) : (tj = 0, eq = bE.qH), this.tn = ti = eq, tl.style.backgroundColor = eq, tp && tt()
	}, self = this, tl.innerHTML = tg, tl.style.color = tk ? bE.rQ : bE.qL, tl.style.userSelect = "none", tl.style.outline = "none", tl.style.overflowWrap = "break-word", self.tq(ti), tl.style.border = "none", tl.style.font = "inherit", self.tr(
		0), tl.style.padding = "0em 0.3em", tl.onclick = ts, tl.addEventListener("mouseover", tt), tl.addEventListener("mouseout", tu), tl.addEventListener("focus", tt), tl.addEventListener("blur", tv)
}

function u4(p5, tS) {
	var tF;
	this.resize = function() {
		for (var aC = 0; aC < p5.length; aC++) bD.t4.t9(p5[aC].button);
		tF.style.gap = tF.style.padding = bD.t4.tf(bf.tc)
	}, (tF = document.createElement("div")).style.display = "grid", tF.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", tF.style.overflowY = "auto", tF.style.gridAutoRows = "5.3em", tF.style.maxHeight = "100%";
	for (var aC = 0; aC < p5.length; aC++) p5[aC].tr(1), tF.appendChild(p5[aC].button);
	tS.appendChild(tF)
}

function u6(u7, u8, u9) {
	this.fn = 0, this.fp = 0, this.j = 0, this.k = 0, this.resize = function() {
		this.k = Math.min(bD.t4.tY(u9 || .5) * u7[1] * i.iu, i.k - 2 * bf.gap), this.j = Math.min(this.k * (u7[0] / u7[1]), i.j - 2 * bf.gap), this.k = u7[1] * this.j / u7[0], this.fn = bf.gap + u8[0] * (i.j - this.j - 2 * bf.gap), this.fp = bf
			.gap + u8[1] * (i.k - this.k - 2 * bf.gap)
	}, this.uA = function() {
		return this.fn + .5 * this.j
	}
}

function uB(uC, uD) {
	var uL, uM, self, q4 = document.createElement("div"),
		uE = document.createElement("div"),
		uF = document.createElement("div"),
		uG = null,
		uN = (this.uH = new uI({
			value: "",
			eP: -1
		}, 0, uJ, function(e) {
			e.target.value = bD.pY.uT(e.target.value), uG.uS.textContent = 255 - e.target.value.length, by.pK.pV(e.target.value)
		}), new uO(0)),
		uP = 0;

	function uJ() {
		uC()
	}
	this.uR = function() {
			uG.uS.textContent = 255 - this.uH.e.value.length, by.pK.pV(this.uH.e.value)
		}, this.show = function(tS) {
			tS.appendChild(q4), tS.appendChild(uF), this.resize(tS)
		}, this.uU = function(tS) {
			u.removeChild(tS, q4), u.removeChild(tS, uF)
		}, this.resize = function(tS) {
			uP = tS ? tS.offsetHeight : uP;
			var tS = bD.t4.t5(.04, .75),
				uW = Math.max(tS, uP - tS),
				uX = i.j / i.l,
				uY = .7 * uX,
				uZ = bD.t4.tf(uP - tS - uW),
				uW = (uF.style.height = bD.t4.tf(tS), q4.style.height = bD.t4.tf(uW), i.k > i.j || a1.a2.it() ? (uF.style.top = uZ, q4.style.top = bD.t4.tf(uP - uW), bD.t4.t9(q4, 8)) : (q4.style.top = uZ, uF.style.top = bD.t4.tf(uP - tS), bD.t4.t9(
						q4, 2)), uM.button.style.width = bD.t4.tf(tS), uN.resize(.6 * tS), this.uH.e.style.left = bD.t4.tf(tS), this.uH.e.style.width = bD.t4.tf(uY - tS), this.uH.e.style.fontSize = uL.button.style.fontSize = bD.t4.tf(.5 * tS), bD.t4
					.t9(this.uH.e, 6), uL.button.style.left = bD.t4.tf(uY), uL.button.style.width = bD.t4.tf(uX - uY), .385 * tS);
			a1.a2.it() && (uW *= .8 - .12 * (i.j > i.k)), uE.style.marginLeft = uE.style.marginRight = bD.t4.tf(.5 * uW), uE.style.fontSize = bD.t4.tf(uW), by.pI.px(1)
		}, (self = this).uH.e.maxLength = 255, q4.style.position = "absolute", q4.style.left = "0", q4.style.width = "100%", q4.style.overflowX = "hidden", q4.style.overflowY = "auto", q4.style.font = "inherit", q4.style.backgroundColor = bE.qJ, uE
		.style.font = "inherit", uF.style.position = "absolute", uF.style.left = "0", uF.style.width = "100%", self.uH.e.setAttribute("placeholder", L(20)), self.uH.e.style.position = "absolute", self.uH.e.style.top = "0", self.uH.e.style.height =
		"100%", self.uH.e.style.backgroundColor = bE.qG, self.uH.e.style.textAlign = "center", (uL = new x(L(21), uJ)).button.top = "0", uL.button.style.position = "absolute", uL.button.style.height = "100%", uL.tq(bE.rf), uG = new uQ("255", uL
			.button, 1, 1), (uM = new x("", function() {
			return by.pK.pT(self.uH.e.value), uM.tq(by.pK.pS() ? bE.qk : bE.rf), 0
		})).button.style.position = "absolute", uM.button.style.top = "0", uM.button.style.left = "0", uM.button.style.height = "100%", uM.button.style.padding = "0", uM.tq(bE.rf), uN.canvas.style.display = "block", uN.canvas.style.margin = "auto",
		uM.button.appendChild(uN.canvas), q4.appendChild(uE), uF.appendChild(uM.button), uF.appendChild(self.uH.e), uF.appendChild(uL.button), by.dr(q4, uE)
}

function ub(uc, tg, ud) {
	function click() {
		var value = 1 - uc.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + tg, void 0 !== uc.eP ? bm.rr.px(uc.eP, value) : uc.value = value, ud && ud(value)
	}
	var e;
	tg = tg || L(22), this.e = document.createElement("p"), (e = this.e).textContent = (uc.value ? "🟩 " : "⬜ ") + tg, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function ue(tS, tM) {
	var tF = document.createElement("div");
	this.tU = tF, this.resize = function() {
		tF.style.padding = bD.t4.tf(bf.tc), tF.style.lineHeight = bD.t4.tf(bD.t4.t5(.035))
	}, tS.style.overflowX = "hidden", tS.style.overflowY = "auto", tF.innerHTML = tM, tS.appendChild(tF)
}

function uf(ug) {
	var tF = document.createElement("div");
	this.e = tF, this.uh = ug, this.resize = function() {
		for (var fg = ug.length, aC = 1; aC < fg; aC++) bD.t4.t9(ug[aC], 4)
	};
	var aC, fg = ug.length;
	for (tF.style.width = "100%", tF.style.height = "2.7em", tF.style.marginTop = "0.6em", tF.style.border = "inherit", aC = 0; aC < fg; aC++) ug[aC].style.verticalAlign = "top", ug[aC].style.width = (100 / fg).toFixed(2) + "%", ug[aC].style.height =
		"100%", ug[aC].style.fontSize = "0.75em", tF.appendChild(ug[aC])
}

function ui(uj, ti, uk, ul) {
	this.tF = document.createElement("div"), this.p5 = uj;
	var um = 0;
	this.resize = function(tS, uo) {
		var fg = uj.length;
		if (!uk)
			for (var aC = 1; aC < fg; aC++) bD.t4.t9(uj[aC].button, 4);
		if (ul)
			for (aC = 0; aC < fg; aC++) uj[aC].button.style.width = ul[aC] + "%";
		else {
			for (var up = 0, aC = 0; aC < fg; aC++) up += uj[aC].button.offsetWidth;
			if (tS && (um = tS.offsetWidth), uo && up < um)
				for (aC = 0; aC < fg; aC++) uj[aC].button.style.width = (100 * uj[aC].button.offsetWidth / up).toFixed(2) + "%";
			else
				for (aC = 0; aC < fg; aC++) uj[aC].button.style.width = "auto";
			uo || this.resize(tS, 1)
		}
	};
	var un = this;
	un.tF.style.height = un.tF.style.maxHeight = "100%";
	for (var aC = 0; aC < uj.length; aC++) uj[aC].tq(ti), uj[aC].button.style.height = "100%", uj[aC].button.style.padding = "0.0em 0.9em", uj[aC].button.style.whiteSpace = "pre", un.tF.appendChild(uj[aC].button)
}

function uq() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bD.t4.t9(this.e, 8, bE.qU)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function ur() {
	var uv, uw, t2 = document.createElement("div"),
		us = document.createElement("div"),
		ut = 0,
		uu = 0;
	this.show = function(fn, fp, pU, ux, uy, eq) {
			if (ut) {
				if (!ux) return;
				this.uU()
			}
			fn === fp && -1 === fn ? (fn = uv, fp = uw) : (uv = fn, uw = fp);
			var uz = Math.floor(bD.t4.t5(.018)),
				uy = (fn = Math.max(uz + 2, fn), uy || (uu = ux), ut = 1, i.j / i.l),
				ux = (t2.style.whiteSpace = "pre", t2.textContent = pU, bD.t4.t9(t2, 5), t2.style.font = bD.t4.t7(0, bD.t4.t5(.015)), t2.style.padding = "0.3em 0.6em", t2.style.left = fn + "px", t2.style.top = "0px", document.body.appendChild(t2),
					fn + t2.offsetWidth - uy),
				pU = (0 < ux && (fn -= ux, fn = Math.max(uz + 1, fn), t2.style.left = fn + "px", fn < uz + 2) && (t2.style.whiteSpace = "pre-wrap"), t2.offsetHeight);
			t2.style.top = fp - pU + uu * bf.v2 + "px", fn -= uz, us.style.backgroundColor = bD.color.qD(eq >> 12 << 2, (eq >> 6 & 63) << 2, (63 & eq) << 2), us.style.left = fn + "px", us.style.top = t2.style.top, us.style.width = uz + "px", us.style
				.height = pU + "px", bD.t4.t9(us, 4), bD.t4.t9(us, 8), bD.t4.t9(us, 2), document.body.appendChild(us)
		}, this.uU = function(v3) {
			if (ut) {
				if (v3 && uu) return 0;
				ut = 0, u.removeChild(document.body, t2), u.removeChild(document.body, us)
			}
			return 1
		}, t2.style.position = "absolute", t2.style.backgroundColor = bE.qH, t2.style.color = bE.qL, t2.style.pointerEvents = "none", t2.style.zIndex = "5", t2.style.maxWidth = "100%", us.style.position = "absolute", us.style.color = bE.qL, us.style
		.pointerEvents = "none", us.style.zIndex = "5"
}

function uI(v4, type, v5, v6) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + u.z.v7++, e.value = v4.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bE.qL, e.style.backgroundColor = bE.qE, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			i.v8++
		}), e.addEventListener("blur", function() {
			i.v8--, -1 !== v4.eP && bm.rr.px(v4.eP, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== v4.eP && bm.rr.px(v4.eP, e.value), v5 ? v5() : e.blur())
		}), v6 && e.addEventListener("input", function(q1) {
			v6(q1)
		})
}

function v9(tS, data, vA) {
	var fg = data.vB.length,
		vC = document.createElement("div"),
		vD = document.createElement("div"),
		pN = document.createElement("div"),
		vE = new Array(fg),
		tT = new Array(fg),
		vF = new Array(data.vG.length),
		vH = bD.color.qF(70, 70, 0, .35);

	function u1() {
		this.style.backgroundColor = bD.color.u1(vH, 160)
	}

	function vO() {
		this.style.backgroundColor = vH
	}

	function ta() {
		var fz;
		for (tS.style.font = bD.t4.t7(0, bD.t4.vV(.026, .5, .03)), aC = 1; aC < vF.length; aC++) bD.t4.t9(vF[aC], 4);
		if (bD.t4.t9(vC, 2), fg) {
			for (var i9, vW = vC.offsetWidth, vX = pN.offsetWidth, aC = 0; aC < vF.length; aC++) i9 = .01 * data.vN[aC] * vX, vF[aC].style.width = (100 * i9 / vW).toFixed(2) + "%";
			var lx = data.vB[0].length;
			for (aC = 0; aC < fg; aC++)
				for (bD.t4.t9(vE[aC], 2), fz = 1; fz < lx; fz++) bD.t4.t9(tT[aC][fz], 4);
			vD.vI && (vD.scrollTop = vD.vI)
		}
	}
	this.resize = function() {
			ta(), ta()
		}, tS.style.display = "flex", tS.style.flexDirection = "column", vD.style.overflowX = "hidden", vD.style.overflowY = "auto", vD.addEventListener("scroll", function() {
			this.vI = this.scrollTop, vA && vA.vJ && (u.z.vK[vA.vJ] = this.scrollTop)
		}),
		function() {
			var fj, aC, vB = data.vB,
				lx = fg ? vB[0].length : 0;
			for (aC = 0; aC < fg; aC++) {
				vE[aC] = document.createElement("div"), vE[aC].style.backgroundColor = function(aC) {
					return aC % 2 == 1 ? bD.color.qF(130, 130, 130, .35) : bE.qK
				}(aC), vE[aC].style.width = "100%", vE[aC].style.display = "flex", tT[aC] = new Array(lx);
				for (var fz = 0; fz < lx; fz++) tT[aC][fz] = fj = document.createElement("div"), fj.style.display = "flex", fj.style.justifyContent = "center", fj.style.wordBreak = "break-all", fj.style.padding = "0.4em 0em", fj.style.width = data
					.vN[fz] + "%", fj.textContent = vB[aC][fz].g8, 1 === vB[aC][fz].eh && (fj.name = "" + aC, fj.style.color = bE.rQ, fj.style.backgroundColor = vH, fj.addEventListener("mouseover", u1), fj.addEventListener("mouseout", vO), function(
						fj, pc, vQ) {
						2147483647 !== vQ && fj.addEventListener("click", function() {
							bG.a8(30), bG.a9(30, pc), bK.dr(bG.aD), this.style.backgroundColor = vH, u.v(8, u.vR, new vS(25, {
								action: 0,
								pc: bI.f7.vT(bI.f7.vU(5)),
								vQ: vQ
							}))
						})
					}(fj, vB[aC][fz].pc, vB[aC][fz].vQ)), vE[aC].appendChild(fj)
			}
			for (vC.style.display = "flex", vC.style.backgroundColor = bD.color.qF(0, 120, 0, .35), aC = 0; aC < vF.length; aC++) vF[aC] = fj = document.createElement("div"), fj.style.display = "flex", fj.style.justifyContent = "center", fj.style
				.wordBreak = "break-all", fj.style.padding = "0.4em 0em", fj.style.width = data.vN[aC] + "%", fj.innerHTML = data.vG[aC], vC.appendChild(fj)
		}();
	for (var aC = 0; aC < fg; aC++) pN.appendChild(vE[aC]);
	vD.appendChild(pN), tS.appendChild(vC), tS.appendChild(vD), vA && vA.vJ && (vD.vI = u.z.vK[vA.vJ])
}

function vY() {
	var vc, vd, vZ = document.createElement("div"),
		va = document.createElement("div"),
		vb = document.createElement("div"),
		pN = document.createElement("div"),
		p5 = [],
		eK = [L(23), L(24), L(25), L(26), L(27), L(28), L(29), L(30)],
		ve = [1, 2, 3, 0, 9, 10, 11, 13];

	function vg(aC) {
		u.v(8, 0, new vS(21, {
			vi: ve[aC],
			vj: 0,
			vk: 10
		}))
	}
	this.show = function() {
			this.px(u.z.vl), document.body.appendChild(vZ)
		}, this.uU = function() {
			u.removeChild(document.body, vZ)
		}, this.px = function(vl) {
			for (var vm = [3, 0, 1, 2, 4, 5, 6, 7], aC = 0; aC < p5.length; aC++) {
				var j = vl[aC];
				vc[vm[aC]][1].uS.textContent = j || ""
			}
		}, this.resize = function() {
			var aC, vn = bf.gap,
				k = bD.t4.vo(.085),
				j = Math.min(4 * k, i.j - 2 * vn),
				fg = p5.length;
			for (bD.t4.vp(vZ, vn, i.k - vn - k, j, k), bD.t4.t9(vZ), bD.t4.t9(va, 6), aC = 0; aC < fg - 1; aC++) bD.t4.t9(p5[aC].button, 6);
			for (aC = 0; aC < fg; aC++) vc[aC][0].resize(), vc[aC][1].resize();
			for (p5[0].fn = 0, p5[0].button.style.left = bD.t4.tf(p5[0].fn), p5[0].button.style.width = bD.t4.vq(1.7 * k), aC = 1; aC < fg; aC++) p5[aC].fn = p5[aC - 1].fn + p5[aC - 1].button.offsetWidth, p5[aC].button.style.left = bD.t4.tf(p5[aC]
				.fn);
			if (!vd) {
				if (!ac.vr()) return;
				(vd = ac.get(14)).style.width = "24%", vd.style.position = "absolute", va.appendChild(vd)
			}
			vd.style.left = bD.t4.tf(0), vd.style.top = "7%", vb.vs && (vb.scrollLeft = vb.vs)
		}, vZ.style.position = "absolute", va.style.width = "25%", va.style.height = "100%", va.style.backgroundColor = bE.qH, vb.style.position = "absolute", vb.style.width = "75%", vb.style.height = "100%", vb.style.backgroundColor = bE.qH, vb
		.style.top = vb.style.right = bD.t4.tf(0), bD.t4.vf(vb), pN.style.height = pN.style.maxHeight = "100%", p5.push(new x("", function() {
			vg(0)
		}, bE.r7)), p5.push(new x("", function() {
			vg(1)
		}, bE.r8)), p5.push(new x("", function() {
			vg(2)
		}, bE.r0)), p5.push(new x("", function() {
			vg(3)
		}, bE.qj)), p5.push(new x("", function() {
			vg(4)
		}, bE.rb)), p5.push(new x("", function() {
			vg(5)
		}, bE.rX)), p5.push(new x("", function() {
			vg(6)
		}, bE.rb)), p5.push(new x("", function() {
			vg(7)
		}, bE.qC)), vc = new Array(p5.length);
	for (var aC = 0; aC < p5.length; aC++) p5[aC].button.style.position = "absolute", vc[aC] = [new vh(eK[aC], p5[aC].button, .25, .45), new vh("", p5[aC].button, .53, .84, 1)], p5[aC].button.style.height = p5[aC].button.style.maxHeight = "100%", p5[
		aC].button.top = bD.t4.tf(0), pN.appendChild(p5[aC].button);
	vb.appendChild(pN), vZ.appendChild(va), vZ.appendChild(vb)
}

function vt(vu, vv, uC, uD, vw) {
	var vx = document.createElement("div"),
		vy = document.createElement("div"),
		vz = document.createElement("div"),
		pn = document.createElement("div"),
		w0 = document.createElement("div"),
		w1 = document.createElement("div"),
		w2 = document.createElement("span"),
		w3 = document.createElement("div"),
		w9 = (this.w4 = new uB(uC, uD), this.w5 = new w6(uD), this.w7 = new w8(vw), 2);
	this.wD = function(wE) {
		wE = (wE / 10).toFixed(1) + "%";
		w1.style.width = wE, w2.innerHTML = wE
	}, this.wF = function(wG) {
		(0 === w9 ? this.w4 : 1 === w9 ? this.w5 : this.w7).uU(pn), (0 === (w9 = wG) ? this.w4 : 1 === wG ? this.w5 : this.w7).show(pn)
	}, this.wH = function() {
		return vy
	}, this.show = function() {
		document.body.appendChild(vx)
	}, this.uU = function() {
		u.removeChild(document.body, vx)
	}, this.resize = function() {
		var wI = 1 - .4 * a1.a2.it() * (i.j > 1.6 * i.k),
			wJ = bD.t4.t5(.05 * wI),
			wK = 1.3 * wJ,
			wL = i.k > i.j,
			wM = bD.t4.t5(.06 * wI + .03 * wL),
			wL = bD.t4.t5(.02 * wI + .01 * wL),
			wO = bD.t4.t5(.025);
		vx.style.font = bD.t4.t7(0, wO), vz.style.font = bD.t4.t7(0, .9 * wO), w3.style.font = bD.t4.t7(0, .9 * wO), wI < 1 && (wI = bD.t4.t7(0, wI * wO), vz.style.font = wI, w3.style.font = wI, w0.style.font = wI), vy.style.height = bD.t4.tf(
			wK), vy.style.font = bD.t4.t7(0, .72 * wJ), bD.t4.t9(vy, 2), vz.style.top = bD.t4.tf(wK), vz.style.height = bD.t4.tf(wM), bD.t4.t9(vz, 2), pn.style.top = bD.t4.tf(wK + wM), pn.style.height = bD.t4.tf(i.k / i.l - wK - 2 * wM - wL), w0
			.style.top = bD.t4.tf(i.k / i.l - wM - wL), w0.style.height = bD.t4.tf(wL), bD.t4.t9(w0, 8), w2.style.font = bD.t4.t7(0, .8 * wL), w3.style.top = bD.t4.tf(i.k / i.l - wM), w3.style.height = bD.t4.tf(wM), bD.t4.t9(w3, 8), vu.resize(
			vx), vv.resize(vx), 0 === w9 ? this.w4.resize(pn) : (1 === w9 ? this.w5 : this.w7).resize()
	};
	uC = this;
	vx.style.position = "absolute", vx.style.top = "0", vx.style.left = "0", vx.style.width = "100%", vx.style.height = "100%", vx.style.backgroundColor = bE.qK, bM.ty() || (vx.style.backdropFilter = "blur(4px)", vx.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (vx.style.display = "none"), vy.style.position = "absolute", vy.style.top = "0", vy.style.left = "0", vy.style.width = "100%", vy.style.display = "flex", vy.style.alignItems = "center", vy.translate = !1;
	for (var h = [vz, w3], aC = 0; aC < h.length; aC++) h[aC].style.position = "absolute", h[aC].style.left = "0", h[aC].style.width = "100%", bD.t4.vf(h[aC]);
	pn.style.position = "absolute", pn.style.left = "0", pn.style.width = "100%", pn.style.font = "inherit", w0.style.position = "absolute", w0.style.left = "0", w0.style.width = "100%", w1.style.position = "absolute", w1.style.top = "0", w1.style
		.left = "0", w1.style.height = "100%", w1.style.width = "50%", w1.style.backgroundColor = bE.qh, w2.innerHTML = "", w2.style.position = "absolute", w2.style.top = "50%", w2.style.left = "50%", w2.style.transform = "translate(-50%, -50%)", w2
		.translate = !1, vy.appendChild(function() {
			var wC = document.createElement("h1");
			return wC.textContent = L(31), wC.style.margin = "0 auto 0.55em auto", wC.style.fontFamily = "Arial Black, system-ui", wC.style.fontSize = "inherit", wC.style.fontWeight = "inherit", wC
		}()), vz.appendChild(vu.tF), w0.appendChild(w1), w0.appendChild(w2), w3.appendChild(vv.tF), vx.appendChild(vy), vx.appendChild(vz), vx.appendChild(pn), vx.appendChild(w0), vx.appendChild(w3), vx.className = "fx-lobby", pn.className =
		"fx-panel", w0.className = "fx-progress", uC.w7.show(pn)
}

function w8(vw) {
	var vx = document.createElement("div"),
		wQ = [],
		wR = 96,
		wS = ["battleRoyale", "oneVsOne", "zombie", "noFullSending"];

	function wi(e) {
		e.style.position = "absolute", e.style.top = e.style.left = "0", e.style.width = e.style.height = "100%", e.style.pointerEvents = "none"
	}

	function wW(button, ww) {
		var tF = document.createElement("div");
		return tF.style.position = "absolute", tF.style.left = "0", tF.style.width = "100%", tF.style.height = "20%", tF.style.pointerEvents = "none", tF.style.backgroundColor = bE.qE, ww ? tF.style.top = "0" : tF.style.bottom = "0", button
			.appendChild(tF), tF
	}

	function wZ(wx, wy) {
		var tF = document.createElement("div");
		return tF.style.position = "absolute", tF.style.top = "0", tF.style.width = "20%", tF.style.height = "100%", wy ? tF.style.left = "0" : tF.style.right = "0", wx.appendChild(tF), tF
	}

	function wk(wz) {
		var canvas = document.createElement("canvas");
		return canvas.width = canvas.height = 64, wi(canvas), canvas.style.top = canvas.style.left = "10%", canvas.style.width = canvas.style.height = "80%", wz.appendChild(canvas), canvas.getContext("2d", {
			alpha: !0
		})
	}

	function wd(wx, left, right, width) {
		var tF = document.createElement("div");
		return tF.style.position = "absolute", tF.style.top = "50%", tF.style.transform = "translateY(-50%)", tF.style.left = left, tF.style.right = right, tF.style.width = width, tF.style.textAlign = "left", wx.appendChild(tF), {
			tF: tF,
			wr: x2(tF, 1.9),
			wg: x2(tF, 1)
		}
	}

	function x2(ou, fontSize) {
		var tF = document.createElement("div");
		return tF.style.fontSize = fontSize + "em", tF.style.lineHeight = "1.1", tF.style.whiteSpace = "nowrap", tF.style.overflow = "hidden", tF.style.textOverflow = "ellipsis", tF.style.textShadow = "0 0 0.25em black", ou.appendChild(tF), tF
	}

	function x3(e, pU) {
		e.textContent !== pU && (e.textContent = pU)
	}

	function x4(q1) {
		q1.canvas && (bq.x5.xP(q1.canvas), q1.canvas = null), q1.wq = ""
	}
	this.nR = function() {
		var tT = bq.tT.tT,
			fg = tT.length;
		if (fg !== wQ.length) {
			for (var aC = 0; aC < wQ.length; aC++) x4(wQ[aC]);
			for (vx.textContent = "", wQ = new Array(fg), aC = 0; aC < fg; aC++) wQ[aC] = function(eP) {
				var button = document.createElement("button"),
					wV = (button.style.position = "absolute", button.style.backgroundColor = bE.qK, button.style.color = bE.qL, button.style.outline = "none", button.style.userSelect = "none", button.style.cursor = "pointer", button.style
						.padding = "0", button.style.overflow = "hidden", bD.t4.wU(button, function() {
							vw(eP, 0)
						}, function() {
							vw(eP, 1)
						}), bD.t4.t9(button), wW(button, 1)),
					wX = wW(button, 0),
					wY = wZ(wV, 0),
					wa = wZ(wX, 1),
					wb = wZ(wX, 0),
					wc = wd(wV, "3%", "", "74%"),
					we = wd(wX, "20%", "", "30%"),
					wf = wd(wX, "", "20%", "30%"),
					wh = (wf.tF.style.textAlign = "right", we.wg.textContent = "Starts in", document.createElement("canvas"));
				return wh.width = wh.height = wR, wi(wh), wY.appendChild(wh), (button = {
					button: button,
					wV: wV,
					wX: wX,
					wj: wk(wa),
					wl: wk(wb),
					wm: 0,
					isContest: 0,
					wn: null,
					wY: wY,
					wh: wh,
					wo: wh.getContext("2d", {
						alpha: !0
					}),
					wp: -1,
					canvas: null,
					wq: "",
					map: wc.wr,
					ws: wc.wg,
					wt: we.wr,
					wu: wf.wr,
					wv: wf.wg,
					hr: -1
				}).map.translate = !1, button.ws.translate = !1, button.wt.translate = !1, we.wg.translate = !1, button
			}(aC), vx.appendChild(wQ[aC].button);
			this.resize()
		}
		for (aC = 0; aC < fg; aC++) wQ[aC].wq !== bq.x5.x6(tT[aC].fM, tT[aC].mapSeed) && x4(wQ[aC]);
		for (aC = 0; aC < fg; aC++) {
			var x7 = tT[aC],
				q1 = wQ[aC],
				hr = x7.id === bq.tT.x8 ? 1 + bq.tT.x9 : 0,
				h9 = bq.tT.xA(x7);
			x3(q1.map, bV.xB.xC[x7.fM]), x3(q1.ws, bq.tT.xD(x7.ws)), x3(q1.wt, bq.tT.xE(x7.xF)), x3(q1.wu, h9 + (bq.tT.xG(x7) ? "/" + x7.nZ : "")), x3(q1.wv, L(1 === h9 ? 32 : 33)), q1.hr !== hr && (q1.hr = hr, q1.wV.style.backgroundColor = q1.wX
				.style.backgroundColor = [bE.qE, bE.qr, bE.rJ][hr], bD.t4.t9(q1.button, 5, [bE.qL, bE.qs, bE.rK][hr]), q1.button.classList.toggle("fx-line", !hr)), ! function(q1) {
				!q1.wm && ac.vr() && (q1.wm = 1, q1.wj.drawImage(ac.x1("clock"), 0, 0), q1.wl.drawImage(ac.x1("userIcon"), 0, 0))
			}(q1), ! function(q1, ws) {
				q1.wp === ws || 7 <= ws && !ac.vr() || ((q1.wp = ws) < 7 ? bk.xN(q1.wo, ws + 2, wR) : (q1.wo.clearRect(0, 0, wR, wR), q1.wo.drawImage(ac.x1(wS[ws - 7]), 0, 0, wR, wR)))
			}(q1, x7.ws), ! function(q1, isContest) {
				q1.isContest === isContest || isContest && !ac.vr() || ((q1.isContest = isContest) ? (q1.wn || (q1.wn = function(q1) {
					var xM = ac.x1("crown"),
						canvas = document.createElement("canvas");
					return canvas.width = xM.width, canvas.height = xM.height, canvas.getContext("2d", {
							alpha: !0
						}).drawImage(xM, 0, 0), canvas.style.position = "absolute", canvas.style.top = "50%", canvas.style.left = "50%", canvas.style.width = "55%", canvas.style.height = "auto", canvas.style.transform =
						"translate(-50%, -50%)", canvas.style.opacity = "0.5", canvas.style.pointerEvents = "none", q1.button.insertBefore(canvas, q1.wV), canvas
				}(q1)), q1.wn.hidden = !1) : q1.wn.hidden = !0)
			}(q1, x7.xJ), ! function(q1, x7) {
				var canvas;
				q1.canvas || (canvas = bq.x5.xO(x7.fM, x7.mapSeed)) && (q1.canvas = canvas, q1.wq = bq.x5.x6(x7.fM, x7.mapSeed), wi(canvas), q1.button.insertBefore(canvas, q1.button.firstChild))
			}(q1, x7)
		}
	}, this.resize = function() {
		var fg = wQ.length,
			j = vx.offsetWidth,
			k = vx.offsetHeight;
		if (0 !== fg && 0 !== j && 0 !== k) {
			for (var gap = bD.t4.t5(.012), xQ = 0, xR = 1, eq = 1; eq <= fg; eq++) {
				var rows = bO.g7(fg + eq - 1, eq),
					rows = Math.min((j - (eq + 1) * gap) / eq, (k - (rows + 1) * gap) / rows);
				xQ < rows && (xQ = rows, xR = eq)
			}
			for (var xS = bO.g7(fg + xR - 1, xR), o5 = (j - xR * xQ - (xR - 1) * gap) / 2, o6 = (k - xS * xQ - (xS - 1) * gap) / 2, aC = 0; aC < fg; aC++) {
				var qB = wQ[aC].button.style;
				qB.left = bD.t4.tf(o5 + aC % xR * (xQ + gap)), qB.top = bD.t4.tf(o6 + bO.g7(aC, xR) * (xQ + gap)), qB.width = qB.height = bD.t4.tf(xQ), qB.fontSize = bD.t4.tf(.05 * xQ)
			}
		}
	}, this.show = function(tS) {
		tS.appendChild(vx), this.nR(), this.resize()
	}, this.uU = function(tS) {
		u.removeChild(tS, vx)
	}, vx.style.position = "absolute", vx.style.top = "0", vx.style.left = "0", vx.style.width = vx.style.height = "100%", vx.style.overflow = "hidden", vx.style.font = "inherit"
}

function w6(uD) {
	var uS, wz, vx = document.createElement("div"),
		pn = document.createElement("div"),
		xT = null,
		xU = null;
	this.nR = function() {
			pn.textContent = "", bq.xX.xY && bq.xX.uU(1);
			for (var ps = document.createDocumentFragment(), wu = bq.pk.xZ, tT = bq.tT.tT, xa = 0, aC = 0; aC < tT.length; aC++) xa = xa || 8 === tT[aC].ws;
			for (xT.style.width = xT.style.maxWidth = xa ? "11.3em" : "10.3em", aC = 0; aC < wu.length; aC++) {
				var eP = bq.tT.xb(wu[aC].xc);
				! function(ps, q1, eP, xe) {
					var uS = xT.cloneNode(!0),
						wz = uS.firstChild;
					wz.style.backgroundColor = 0 <= eP && q1.xf ? bE.rM : xU[eP < 0 ? 15 : Math.min(eP, 14)], 0 <= eP && (wz.textContent = "" + (eP + 1));
					uS.lastChild.textContent = bq.lr.xg(q1, xe), uS.style.color = bq.lr.xh(q1.xi), 11 === q1.xi && (uS.style.textShadow = "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray");
					__fx.settings.highlightDuplicateIps && (wz = __fx.utils.getDuplicateIpHighlightColor(q1, bq.pk.xZ, "aHh")) && (uS.style.backgroundColor = wz, uS.style.borderRadius = "0.3em");
					__fx.settings.highlightSameClan && (eP = __fx.utils.getSameClanHighlightColor(q1, bq.pi, "username")) && (uS.style.backgroundColor ? uS.style.boxShadow = "inset 0 0 0 2px " + eP : uS.style.backgroundColor = eP, uS.style
						.borderRadius = "0.3em");
					bq.lr.xj(q1) && (uS.style.textDecoration = "underline"), q1.xk && (uS.style.textDecorationLine = "underline", uS.style.textDecorationStyle = "dotted");
					uS.onclick = function(e) {
						uD(e, q1)
					}, bM.ty() || (uS.onmouseover = function(e) {
						bq.xX.xl(uS, q1, 1)
					}), ps.appendChild(uS)
				}(ps, wu[aC], eP, 0 <= eP && 8 === tT[eP].ws)
			}
			pn.appendChild(ps), pn.classList.toggle("fx-wide", !!xa)
		}, this.show = function(tS) {
			tS.appendChild(vx)
		}, this.uU = function(tS) {
			u.removeChild(tS, vx)
		}, this.resize = function() {
			pn.style.fontSize = bD.t4.tf(bD.t4.t5(.02, .3))
		}, vx.style.top = "0", vx.style.left = "0", vx.style.width = vx.style.height = "100%", vx.style.overflowX = "hidden", vx.style.overflowY = "auto", vx.style.font = "inherit", pn.style.font = "inherit", pn.style.margin = "0.4em", vx
		.appendChild(pn), vx.className = "fx-players-scroll", pn.className = "fx-players", (uS = document.createElement("span")).style.cursor = "pointer", uS.style.margin = "0.2em 0.2em 0.2em 0.2em", uS.style.height = uS.style.maxHeight = "1.4em", uS
		.style.whiteSpace = "nowrap", uS.style.overflow = "hidden", uS.style.textOverflow = "ellipsis", uS.style.font = "inherit", uS.style.display = "inline-block", (wz = document.createElement("span")).style.display = "inline-block", wz.style
		.width = wz.style.height = wz.style.lineHeight = "1.3em", wz.style.marginRight = "0.4em", wz.style.fontSize = "0.8em", wz.style.fontWeight = "bold", wz.style.textAlign = "center", wz.style.color = bE.qC, wz.style.textShadow = "none", wz.style
		.textDecoration = "none", wz.style.pointerEvents = "none", wz.translate = !1, uS.appendChild(wz), uS.appendChild(document.createTextNode("")), xT = uS, xU = function() {
			for (var h = ["rgb(0,200,0)", "rgb(150,220,0)", "rgb(250,225,0)", "rgb(255,150,0)", "rgb(240,85,0)"], aC = h.length; aC < 15; aC++) h.push("rgb(210,0,0)");
			return h.push("rgb(128,128,128)"), h
		}()
}

function xm(xn) {
	var vx = document.createElement("div"),
		uF = document.createElement("div"),
		xo = [];

	function tt() {
		bM.ty() || (this.style.backgroundColor = bD.color.u1(bE.qH, 50))
	}

	function tu() {
		this.style.backgroundColor = bE.qH
	}
	this.px = function(xq, xr) {
			xo[2].textContent = xq + 1 + " / " + xr
		}, this.show = function(q1) {
			q1 = bq.lr.pu(q1, bq.lr.pv(q1)), uF.appendChild(bq.q3.transform(q1)), document.body.appendChild(vx)
		}, this.resize = function() {
			var k = bD.t4.t5(.03, .5);
			vx.style.width = 10 * k + "px", vx.style.font = bD.t4.t7(1, .75 * k), bD.t4.t9(vx, 4), uF.style.top = k + "px", uF.style.font = bD.t4.t7(0, .55 * k), bD.t4.t9(uF, 2), vx.style.height = k + uF.offsetHeight + "px";
			for (var aC = 0; aC < 3; aC++) bD.t4.t9(xo[aC], 6), xo[[0, 1, 3][aC]].style.width = 2 * k + "px";
			for (aC = 0; aC < 4; aC++) xo[aC].style.height = k + "px", bD.t4.t9(xo[aC], 2);
			xo[2].style.width = 4 * k + "px", xo[1].style.left = 2 * k + "px", xo[2].style.left = 4 * k + "px", xo[3].style.left = 8 * k + "px"
		}, this.xs = function() {
			for (var aC = 0; aC < 4; aC++) xo[aC].onclick = null, xo[aC].onmouseover = null, xo[aC].onmouseout = null;
			u.removeChild(document.body, vx), vx = uF = xo = null
		}, vx.style.position = "absolute", vx.style.color = bE.qL, vx.style.zIndex = "3", vx.style.right = "0", vx.style.top = "0", uF.style.position = "absolute", uF.style.height = "auto", uF.style.color = bE.qL, uF.style.backgroundColor = bE.qH, uF
		.style.left = "0", uF.style.width = "100%", uF.style.overflowWrap = "break-word", vx.appendChild(uF);
	for (var aC = 0; aC < 4; aC++) xo[aC] = document.createElement("div"), xo[aC].style.position = "absolute", xo[aC].style.backgroundColor = bE.qH, xo[aC].style.color = bE.qL, xo[aC].style.top = "0", xo[aC].style.display = "flex", xo[aC].style
		.justifyContent = "center", xo[aC].style.alignItems = "center", xo[aC].style.userSelect = "none", xo[aC].style.outline = "none", xo[aC].style.font = "inherit", 2 !== (xo[aC].xp = aC) && (xo[aC].onclick = xn, xo[aC].onmouseover = tt, xo[aC]
			.onmouseout = tu), vx.appendChild(xo[aC]);
	xo[0].textContent = "◀", xo[1].textContent = "▶", xo[3].textContent = "✖"
}

function xt(xn) {
	var t2 = document.createElement("div");

	function tt() {
		bM.ty() || (t2.style.backgroundColor = bD.color.u1(bE.qH, 50))
	}

	function tu() {
		t2.style.backgroundColor = bE.qH
	}
	this.px = function(xr) {
			t2.textContent = xr
		}, this.show = function() {
			document.body.appendChild(t2)
		}, this.resize = function() {
			var k = bD.t4.t5(.03, .5);
			t2.style.width = 2 * k + "px", t2.style.height = k + "px", t2.style.font = bD.t4.t7(1, .75 * k), bD.t4.t9(t2, 4), bD.t4.t9(t2, 2)
		}, this.xs = function() {
			t2.onclick = null, t2.onmouseover = null, t2.onmouseout = null, u.removeChild(document.body, t2), t2 = null
		}, t2.style.position = "absolute", tu(), t2.style.color = bE.qL, t2.style.zIndex = "3", t2.style.right = "0", t2.style.top = "0", t2.style.display = "flex", t2.style.justifyContent = "center", t2.style.alignItems = "center", t2.style
		.userSelect = "none", t2.style.outline = "none", t2.onclick = xn, t2.onmouseover = tt, t2.onmouseout = tu
}

function xu(uj) {
	var vx = document.createElement("div"),
		xv = document.createElement("div"),
		ut = (this.fn = 0, this.fp = 0);

	function xx() {
		bq.xy.uU()
	}
	this.p5 = uj, this.show = function(fn, fp, y0) {
		if (ut) return [0, 0];
		ut = 1, this.fn = fn, this.fp = fp,
			function(self, y0) {
				var j = bD.t4.t5(.16, .7),
					k = uj.length * j / 3,
					y2 = i.j / i.l,
					y3 = i.k / i.l,
					oH = Math.min(1, Math.min(y2 / j, y3 / k));
				j *= oH, k *= oH, y0 && (self.fn += bD.t4.t5(.03, .5)), self.fn = bO.is(self.fn, 0, y2 - j), self.fp = bO.is(self.fp, 0, y3 - k), xv.style.left = self.fn + "px", xv.style.top = self.fp + "px", xv.style.width = j + "px", xv.style
					.height = k + "px", xv.style.font = bD.t4.t7(0, .3 * k / uj.length), bD.t4.t9(xv, 5);
				for (var aC = 1; aC < uj.length; aC++) bD.t4.t9(uj[aC].button, 8)
			}(this, y0), document.body.appendChild(vx)
	}, this.uU = function() {
		ut && (ut = 0, vx.removeEventListener("click", xx), u.removeChild(document.body, vx))
	};
	for (var aC = 0; aC < uj.length; aC++) new uQ("" + (1 + aC), uj[aC].button, 0, 1);
	vx.style.position = "fixed", vx.style.top = "0", vx.style.left = "0", vx.style.width = "100%", vx.style.height = "100%", vx.style.zIndex = "5", xv.style.position = "absolute",
		function() {
			for (var xz = (100 / uj.length).toFixed(2) + "%", aC = 0; aC < uj.length; aC++) uj[aC].button.style.width = "100%", uj[aC].button.style.height = uj[aC].button.style.maxHeight = xz, uj[aC].button.style.padding = "0.0em 0.9em", xv
				.appendChild(uj[aC].button)
		}(), vx.appendChild(xv), vx.addEventListener("click", xx)
}

function er() {
	var y4, y5, y6;

	function yD(aC) {
		return bD.color.qD(y5[aC][0], y5[aC][1], y5[aC][2])
	}

	function yJ(fz, g0) {
		return bD.color.yS(y5[fz], y5[g0]), yD(g0)
	}

	function yB() {
		y4 && (y4.remove(), y4 = null)
	}
	this.show = function(es, colors, id) {
		0 <= (y6 = id) && b1.z.em(0) && b1.en.y7(0, id), es = (es = (es = (es = (es = (es = (es = (es = (es = (es = (es = (es = es.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			y5 = colors, (y4 = document.createElement("div")).style.position = "fixed", y4.style.top = "0", y4.style.left = "0", y4.style.width = "100%", y4.style.height = "100%", y4.style.backgroundColor = bD.color.qF(y5[0][0], y5[0][1], y5[0][
				2], .6), y4.style.zIndex = "6", y4.onclick = function(e) {
				e.target === y4 && yB()
			},
			function(es) {
				var ie, yC = document.createElement("div");
				yC.style.position = "absolute", yC.style.display = "flex", yC.style.flexDirection = "column", yC.style.top = "50%", yC.style.left = "50%", yC.style.backgroundColor = yD(2), ie = a1.a2.it() ? bD.t4.yE(i.min) : bD.t4.t5(.4);
				ie = Math.max(ie, 200), yC.style.width = bD.t4.tf(ie), yC.style.height = bD.t4.tf(ie), yC.style.transform = "translate(-50%, -50%)",
					function(yC, ie) {
						var yI = document.createElement("div");
						yI.style.flex = "0 0 10%", yI.style.overflow = "hidden", yI.style.backgroundColor = yD(1), yI.style.color = yJ(1, 7), yI.style.font = bD.t4.t7(1, .05 * ie), yI.style.display = "flex", yI.style.alignItems = "center", yI
							.style.justifyContent = "center", yI.innerHTML = L(34), yC.appendChild(yI)
					}(yC, ie),
					function(yC, es, ie) {
						var yK = document.createElement("div");
						yK.style.flex = "0 0 70%", yK.style.overflowY = "auto", yK.style.overflowX = "hidden", yK.style.whiteSpace = "pre-wrap", yK.style.wordWrap = "break-word", yK.style.padding = bD.t4.tf(.02 * ie), yK.style.backgroundColor =
							yD(2), yK.style.color = yJ(2, 8), yK.style.font = bD.t4.t7(0, .07 * ie), yK.innerHTML = es, yK.innerHTML = "<style>a { color: inherit; }</style>" + yK.innerHTML, yC.appendChild(yK)
					}(yC, es, ie),
					function(yC, ie) {
						var ou = document.createElement("div"),
							yL = (ou.style.display = "flex", ou.style.flexDirection = "row", ou.style.justifyContent = "space-between", ou.style.alignItems = "stretch", ou.style.backgroundColor = yD(3), ou.style.flex = "1", ou.style.padding = bD
								.t4.tf(.01 * ie), ou.style.gap = bD.t4.tf(.01 * ie), document.createElement("div")),
							yM = (yL.style.flex = "0 0 60%", yL.style.height = "100%", new x(L(35, 0, 0, 1), function() {
								yB()
							}, yD(4), !1)),
							yM = (yM.button.style.width = "100%", yM.button.style.height = "100%", yM.button.style.color = yJ(4, 9), yM.button.style.font = bD.t4.t7(1, .05 * ie), yL.appendChild(yM.button), document.createElement("div")),
							yO = (yM.style.flex = "0 0 15%", yM.style.height = "100%", yM.style.backgroundColor = yD(5), document.createElement("div")),
							yP = (yO.style.flex = "1", yO.style.height = "100%", new x(L(36), function(e) {
								return bD.t4.yQ(e), y6 < 0 || b1.z.em(0) && (b1.en.y7(1, y6), y6 = -1), !0
							}, yD(6), !1));
						yP.button.style.width = "100%", yP.button.style.height = "100%", yP.button.style.color = yJ(6, 10), yP.button.style.font = bD.t4.t7(1, .035 * ie), yO.appendChild(yP.button), ou.appendChild(yL), ou.appendChild(yM), ou
							.appendChild(yO), yC.appendChild(ou)
					}(yC, ie), y4.appendChild(yC)
			}(es), document.body.appendChild(y4)
	}
}

function yT(v4, yU) {
	this.tP = [];
	var yV = this.tP;

	function click() {
		for (var aC = 0; aC < yV.length; aC++) yV[aC].textContent = yV[aC].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eP = parseInt(this.name);
		void 0 !== v4.eP && bm.rr.px(v4.eP, eP), yU && yU(eP)
	}
	for (var yW, fg = v4.vA.length, aC = 0; aC < fg; aC++)(yW = document.createElement("p")).textContent = "⚪ " + v4.vA[aC], yW.style.margin = "0", yW.name = "" + aC, yW.style.cursor = "pointer", yW.style.fontSize = "1em", yW.addEventListener(
		"click", click), yV.push(yW);
	yV[v4.value].textContent = yV[v4.value].textContent.replace("⚪", "🟢")
}

function yX(title, yY, yZ) {
	var vZ = document.createElement("div"),
		pM = document.createElement("div"),
		pN = document.createElement("div"),
		ya = document.createElement("div"),
		yb = document.createElement("div");
	this.yc = pN, this.yd = yY, vZ.className = "fx-page", this.show = function() {
			!1 !== yZ ? document.body.appendChild(vZ) : (document.body.appendChild(pM), document.body.appendChild(ya))
		}, this.uU = function() {
			!1 !== yZ ? u.removeChild(document.body, vZ) : (u.removeChild(document.body, pM), u.removeChild(document.body, ya))
		}, this.yh = function() {
			var uW = bD.t4.t5(.1),
				uV = bD.t4.t5(.08 + .04 * (i.yi < 1), .3);
			return {
				uW: uW,
				uV: uV,
				yj: i.k / i.l - uW - uV
			}
		}, this.resize = function(uo) {
			var fg = yY.length,
				yk = this.yh(),
				uW = yk.uW,
				uV = yk.uV;
			for (pM.style.height = bD.t4.tf(uW), bD.t4.t9(pM, 2), ya.style.top = bD.t4.tf(i.k / i.l - uV), ya.style.height = bD.t4.tf(uV), bD.t4.t9(ya, 8), pN.style.top = bD.t4.tf(uW), pN.style.height = pN.style.maxHeight = bD.t4.tf(yk.yj), pM.style
				.font = bD.t4.t7(0, bD.t4.t5(.02, .15)), ya.style.font = bD.t4.t7(0, bD.t4.t5(.02, .7)), pN.style.font = bD.t4.t7(0, bD.t4.t5(.02, .35)), aC = 1; aC < fg; aC++) bD.t4.t9(yY[aC].button, 4);
			for (var up = 0, aC = 0; aC < fg; aC++) up += yY[aC].button.offsetWidth;
			if (uo && up < ya.offsetWidth)
				for (aC = 0; aC < fg; aC++) yY[aC].button.style.width = (100 * yY[aC].button.offsetWidth / up).toFixed(2) + "%";
			else
				for (aC = 0; aC < fg; aC++) yY[aC].button.style.width = "auto";
			ya.vs && (ya.scrollLeft = ya.vs), uo || this.resize(!0)
		}, this.yl = function() {
			var yk = this.yh(),
				eq = i.l;
			ym.fillStyle = bE.qH, ym.fillRect(0, eq * yk.uW, i.j, eq * yk.yj)
		}, vZ.style.position = "absolute", vZ.style.top = "0", vZ.style.left = "0", vZ.style.width = "100%", vZ.style.height = "100%", pM.style.position = "absolute", pM.style.top = "0", pM.style.left = "0", pM.style.width = "100%", pM.style
		.display = "flex", pM.style.backgroundColor = bE.qH, ya.style.position = "absolute", ya.style.left = "0", ya.style.width = "100%", bD.t4.vf(ya), yb.style.height = yb.style.maxHeight = "100%", pN.style.position = "absolute", pN.style.width =
		"100%", pN.style.backgroundColor = bE.qH,
		function() {
			for (var aC = 0; aC < yY.length; aC++) yY[aC].button.style.height = "100%", yY[aC].button.style.padding = "0.0em 0.9em"
		}();
	for (var aC = 0; aC < yY.length; aC++) yb.appendChild(yY[aC].button);
	pM.appendChild(function() {
		var yg = document.createElement("h1");
		return yg.textContent = title, yg.style.margin = "auto", yg.style.fontSize = 18 <= title.length && i.k > i.j ? "1.8em" : "2.3em", yg.style.fontFamily = "Arial Black, system-ui", yg
	}()), ya.appendChild(yb), !1 !== yZ && (vZ.appendChild(pN), vZ.appendChild(pM), vZ.appendChild(ya))
}

function uQ(yn, yo, yp, yq) {
	var self;
	this.uS = document.createElement("span"), (self = this).uS.textContent = yn, self.uS.style.color = bE.qL, self.uS.style.position = "absolute", self.uS.style.font = "inherit", yq ? self.uS.style.bottom = "0.06em" : self.uS.style.top = "0.12em",
		yp ? self.uS.style.left = "0.2em" : self.uS.style.right = "0.2em", self.uS.style.fontSize = "0.6em", self.uS.style.pointerEvents = "none", self.uS.style.whiteSpace = "pre", yo.style.position = "relative", yo.style.overflow = "hidden", yo
		.appendChild(self.uS)
}

function vh(yn, yo, yr, ys, yt) {
	var self;
	this.uS = document.createElement("span"), this.resize = function() {
			this.uS.style.fontSize = ((ys - yr) * yo.offsetHeight).toFixed(1) + "px"
		}, (self = this).uS.textContent = yn, self.uS.style.color = bE.qL, self.uS.style.font = "inherit", self.uS.style.margin = "0.1em 0.6em", self.uS.style.pointerEvents = "none", yt && (self.uS.style.fontWeight = "bold"), self.uS.style
		.whiteSpace = "nowrap", self.uS.style.display = "block", yo.appendChild(self.uS)
}

function yu(yv, yw, yx, yy) {
	var yz = document.createElement("textarea"),
		z0 = (this.e = yz, !0);

	function z5() {
		yz.select(), document.execCommand("copy")
	}
	this.resize = function() {
			yw && bD.t4.t9(yz, 5)
		}, this.z1 = function(es) {
			yz.value = es
		}, this.z2 = function() {
			return yz.value
		}, this.z3 = function() {
			yz.select()
		}, this.clear = function() {
			yz.value = ""
		}, this.z4 = function() {
			z0 && navigator.clipboard ? (yz.select(), navigator.clipboard.writeText(yz.value).catch(function() {
				z0 = !1, z5()
			})) : z5()
		}, yz.setAttribute("id", "textArea" + u.z.v7++), yz.setAttribute("autocomplete", "off"), yv && yz.setAttribute("placeholder", yv), yz.style.top = "0", yz.style.left = "0", yz.style.width = "100%", yz.style.height = "100%", yz.style
		.userSelect = "none", yz.style.outline = "none", yz.style.resize = "none", yz.style.border = "none", yz.style.color = bE.qL, yz.style.backgroundColor = bE.qE, yy ? (yz.style.fontSize = "1em", yz.rows = 6, yz.style.padding = "0.25em") : (yz
			.style.padding = "0.45em", yz.style.fontSize = "1.2em"), yx && yz.addEventListener("input", function(e) {
			yx(e)
		}), yz.addEventListener("focus", function() {
			i.v8++
		}), yz.addEventListener("blur", function() {
			i.v8--
		})
}

function dR() {
	this.tm = new z6, this.buffer = new z7, this.rr = new z8, this.z = new z9, this.zA = new zB, this.dr = function() {
		this.buffer.dr(), (new zC).dr(), this.zA.dr(), this.z.zD(), __fx.settings.applyRecommendedTerritorialSettings && (bm.buffer.data[1].value = 3, bm.buffer.data[9].value = 2, bm.buffer.data[11].value = 2, bm.buffer.data[7].value = 1, bm
			.buffer.data[2].value = bm.buffer.data[2].xP = 0)
	}
}

function z7() {
	function zE(aC, type, zK, e8) {
		bm.buffer.data.push({
			eP: aC,
			type: type || 0,
			value: zK || 0,
			zK: zK || 0,
			e8: e8 || 0
		})
	}

	function zF(aC, type, zK, e8) {
		bm.buffer.data.push({
			eP: aC,
			type: type,
			value: zK || "",
			zK: zK || "",
			e8: e8 || 0
		})
	}

	function zG(oN) {
		for (var aC = bm.buffer.data.length; aC < oN; aC++) bm.buffer.data.push(null)
	}
	this.data = [], this.dr = function() {
		zE(0, 1, 0, 5), zE(1, 1, 1), zE(2, 0), zF(3, 2), zE(4, 1), zF(5, 2, "system-ui", 2), zE(6, 0), zE(7, 0, 0), zE(8, 0), zE(9, 1, 1), zE(10, 1), zE(11, 1, 1), zF(12, 2, navigator.language), zE(13), zE(14), zE(15, 0, 1), zE(16, 0, 3), zG(
			100), zF(100, 2), zF(101, 2), zF(102, 2), zF(103, 2), zF(104, 2), zF(105, 2), zF(106, 2), zE(107), zE(108), zE(109), zF(110, 2), zE(111), zE(112), zE(113), zF(114, 2), zE(115), zF(116, 2), zE(117, 1), zF(118, 2, "", 2), zE(119, 1, 0,
				1), zF(120, 2), zE(121, 1, ~~(262144 * Math.random())), zF(122, 2, "Player " + Math.floor(1e3 * Math.random())), zE(123), zF(124), zE(125, 1), zF(126, 2), zE(127, 0, 1), zE(128), zE(129), zE(130), zE(131), zE(132), zF(133, 2), zE(
				134, 0, 5), zF(135, 2), zF(136, 2), zE(137), zE(138), zE(139), zE(140), zE(141), zE(142), zE(143), zE(144), zF(145, 2), zE(146), zE(147), zF(148, 2), zE(149), zE(150, 0, 1), zF(151, 2), zE(152, 0, 5), zE(153, 1), zE(154, 1), zF(
				155, 2), zF(156, 2), zE(157), zE(158), zE(159), zE(160), zF(161, 2), zE(162, 0, 1024), zF(163, 2, "0,0,0"), zF(164, 2, "100,100,100"), zF(165, 2, "30,30,30"), zF(166, 2, "70,70,70"), zF(167, 2, "100,100,100"), zF(168, 2,
				"85,85,85"), zF(169, 2, "100,100,100");
		for (var aC = 0; aC < 4; aC++) zF(170 + aC, 2, "255,255,255");
		zF(174, 2), zF(175, 2), zE(176, 0, 200), zG(180), zE(180, 0), zE(181, 0), zE(182, 0, 1023), zF(183, 2), zE(184, 0, 100), zF(185, 2)
	}, this.px = function(eP, value) {
		this.data[eP].value = value
	}, this.zH = function(eP, value) {
		this.px(eP, value);
		var value = String(value),
			fg = value.length;
		5e4 < fg ? console.log("storage value too large: index " + eP + " size " + fg) : (bm.tm.save(eP, value), bm.tm.save(eP, String(this.data[eP].e8), !0))
	}, this.zI = function(eP) {
		return Number(this.data[eP].value)
	}, this.zJ = function(eP) {
		return String(this.data[eP].value)
	}
}

function zB() {
	var zL = [];

	function zO(pc) {
		zL.unshift(pc), bm.rr.px(161, zL.join(";"))
	}

	function fC(pc) {
		for (var zQ = zL, fg = zQ.length, aC = 0; aC < fg; aC++)
			if (zQ[aC] === pc) return zQ.splice(aC, 1), bm.rr.px(161, zQ.join(";")), 1
	}
	this.dr = function() {
		var pU = bm.buffer.data[161].value;
		pU.length && (zL = pU.split(";"))
	}, this.get = function() {
		return zL
	}, this.zM = function() {
		return {
			vA: zL,
			value: 0
		}
	}, this.xk = function(pc) {
		return bD.te.has(zL, pc)
	}, this.zN = function(pc) {
		return fC(pc) ? 0 : (zO(pc), 1)
	}, this.nR = function(pc) {
		fC(pc) && zO(pc)
	}, this.zP = function(eP) {
		eP < zL.length && (zL.splice(eP, 1), bm.rr.px(161, zL.join(";")))
	}
}

function z6() {
	this.zR = function(eP, e8) {
		return Number(this.zS(eP, e8))
	}, this.zS = function(eP, e8) {
		var g8 = null;
		return 0 === a1.id ? a1.zT && (g8 = a1.zT.getItem((e8 ? "v" : "d") + eP)) : 1 === a1.id ? g8 = a1.zU.loadString((e8 ? 1e3 : 2e3) + eP) : 2 === a1.id && (g8 = a1.zV[(e8 ? "v" : "d") + eP]), g8 && 0 !== g8.length ? g8 : null
	}, this.zW = function(fg, zX) {
		var h = [],
			zY = zX ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zT)
				for (aC = 0; aC < fg; aC++) h.push(a1.zT.getItem(zY + aC))
		} else if (1 === a1.id)
			for (var zZ = zX ? 5e3 : 3e3, aC = 0; aC < fg; aC++) h.push(a1.zU.loadString(zZ + aC));
		else if (2 === a1.id)
			for (aC = 0; aC < fg; aC++) h.push(a1.zV[zY + aC]);
		return h
	}, this.save = function(eP, value, e8) {
		var za = (e8 ? "v" : "d") + eP;
		if (0 === a1.id) {
			if (a1.zT && bm.buffer.data[140].value) try {
				a1.zT.setItem(za, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a1.id ? a1.zU.saveString((e8 ? 1e3 : 2e3) + eP, value) : 2 === a1.id && (a1.zV[za] = value, a1.zb.postMessage(za + " " + value))
	}, this.zc = function(h, zX) {
		var fg = h.length,
			zY = zX ? "e" : "l";
		if (0 === a1.id) {
			if (a1.zT && bm.buffer.data[140].value) try {
				for (aC = 0; aC < fg; aC++) a1.zT.setItem(zY + aC, h[aC])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a1.id)
			for (var zZ = zX ? 5e3 : 3e3, aC = 0; aC < fg; aC++) a1.zU.saveString(zZ + aC, h[aC]);
		else if (2 === a1.id)
			for (aC = 0; aC < fg; aC++) a1.zV[zY + aC] = h[aC], a1.zb.postMessage(zY + aC + " " + h[aC])
	}
}

function zC() {
	this.dr = function() {
		! function() {
			var data = bm.buffer.data;
			0 === data[2].e8 && (i.k > i.j || 0 !== a1.id) && (data[2].value = data[2].zK = 1);
			0 === data[100].e8 && (data[100].value = data[100].zK = (0 === a1.id ? "Player " : 1 === a1.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aC, data = bm.buffer.data,
			fg = data.length;
		for (aC = 0; aC < fg; aC++) {
			var zf = bm.tm.zR(aC, !0);
			data[aC] && data[aC].e8 === zf && (null === (zf = bm.tm.zS(aC)) ? data[aC].value = data[aC].zK : 2 === data[aC].type ? data[aC].value = zf : (zf = Number(zf), isNaN(zf) ? data[aC].value = data[aC].zK : data[aC].value = zf))
		}
	}
}

function z9() {
	function zk(h) {
		if (0 === h.length) bm.rr.px(116, "");
		else {
			for (var zo = h[0], aC = 1; aC < h.length; aC++) zo += ";" + h[aC];
			bm.rr.px(116, zo)
		}
	}
	this.zh = function() {
		bm.buffer.data[110].value.length && (bm.buffer.data[106].value = bm.buffer.data[110].value, bm.rr.px(110, ""), this.zi())
	}, this.zi = function() {
		var h = bm.buffer.data[116].value.split(";");
		for (h.length % 2 == 1 && h.pop(), h.unshift(bm.buffer.data[106].value), h.unshift(bm.buffer.data[105].value), aC = 2; aC < h.length; aC += 2)
			if (h[aC] === h[0]) {
				h.splice(aC, 2);
				break
			} for (var zj = [], aC = 0; aC < h.length; aC += 2) zj.push(h[aC]);
		zk(h), bm.buffer.data[117].value = 0, bm.buffer.data[117].vA = zj
	}, this.zl = function(eP) {
		bm.buffer.data[117].vA.splice(eP, 1), bm.buffer.data[117].value = Math.min(eP, bm.buffer.data[117].vA.length - 1);
		var h = bm.buffer.data[116].value.split(";");
		h.splice(2 * eP, 2), zk(h)
	}, this.zm = function(pc, password) {
		var h = bm.buffer.data[116].value.split(";");
		h.length % 2 == 1 && h.pop();
		for (var aC = 0; aC < h.length; aC += 2)
			if (h[aC] === pc) return h[aC + 1] = password, void zk(h);
		h.push(pc, password), zk(h)
	}, this.zn = function(eP) {
		var h = bm.buffer.data[116].value.split(";");
		return h.length < 2 * (eP + 1) ? null : {
			pc: h[2 * eP],
			password: h[2 * eP + 1]
		}
	}, this.zp = function() {
		var g8 = bO.is(bm.buffer.data[121].value, -1, 262143);
		return g8 = -1 === g8 ? ~~(262144 * Math.random()) : g8
	}, this.zD = function() {
		for (var h = document.cookie.split(";"), aC = 0; aC < h.length; aC++) {
			var zq, pU = h[aC].trim();
			0 !== pU.length && (zq = 0 <= (zq = pU.indexOf("=")) ? pU.substring(0, zq) : pU, document.cookie = zq + "=;expires=0;path=/", document.cookie = zq + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = zq +
				"=;expires=0;path=/;domain=." + location.hostname)
		}
	}
}

function z8() {
	this.px = function(eP, value) {
		2 !== bm.buffer.data[eP].type && (value = Math.floor(value)), bm.buffer.data[eP].value !== value && (bm.buffer.zH(eP, value), 0 === eP ? (u.y(), bA.dr(), u.v(2)) : 1 === eP ? i.e1(1) : 2 === eP ? i.e1(0) : 5 === eP && (bD.t4.zr(), i.e1(
			0)))
	}, this.zs = function() {
		for (var data = bm.buffer.data, aC = 0; aC < 100; aC++) data[aC] && bm.buffer.zH(aC, data[aC].zK);
		bD.t4.zr(), i.e1(1)
	}, this.zt = function() {
		for (var data = bm.buffer.data, aC = 0; aC < data.length; aC++) data[aC] && bm.buffer.px(aC, data[aC].zK)
	}, this.zu = function() {
		for (var g0 = bm.buffer, aC = 128; aC < 135; aC++) g0.zH(aC, g0.data[aC].zK)
	}, this.zv = function(data) {
		bm.rr.px(109, data.vQ), bm.rr.px(107, data.zw), bm.rr.px(108, data.zx), bm.rr.px(112, data.zy), bm.rr.px(111, data.zz), bm.rr.px(113, data.a00), bm.rr.px(135, data.a01), bm.rr.px(136, data.a02), bm.rr.px(137, data.a03), bm.rr.px(138, data
			.a04), bm.rr.px(139, data.a05), bm.rr.px(141, data.a06), bm.rr.px(142, data.a07), bm.rr.px(143, data.a08), bm.rr.px(144, data.a09)
	}
}

function cB() {
	this.f7 = new a0A, this.a0B = new a0C, this.a0D = new a0E, this.dr = function() {
		this.f7.dr()
	}
}

function a0C() {
	this.a0F = function(size) {
		for (var a0G = bK, h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0G.sU(16)));
		return h.join("")
	}, this.a0H = function(pU) {
		return 20 < (pU = pU.trim()).length ? pU.substring(0, 20) : pU
	}
}

function a0A() {
	var a0I = new Uint8Array(78);
	this.dr = function() {
		var aC;
		for (a0I[50] = 37, aC = 0; aC < 10; aC++) a0I[aC + 3] = aC + 1;
		for (aC = 0; aC < 26; aC++) a0I[aC + 20] = aC + 11, a0I[aC + 52] = aC + 38
	}, this.a0J = function(pU) {
		return pU || (console.log("validateString error: " + pU), pU = ""), pU.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.a0K = function(pU, size) {
		if ((pU = this.a0J(pU)).length > size) return pU.substring(0, size);
		for (; pU.length < size;) pU = "-" + pU;
		return pU
	}, this.a0L = function(pU) {
		for (var a0M = a0I, fg = pU.length, h = new Uint8Array(fg), aC = 0; aC < fg; aC++) h[aC] = a0M[pU.charCodeAt(aC) - 45];
		return h
	}, this.a0N = function(a0O) {
		bG.a8(6 * a0O.length), this.a0P(a0O), bK.dr(bG.aD)
	}, this.a0P = function(a0O) {
		for (var fg = a0O.length, j = bG, aC = 0; aC < fg; aC++) j.a9(6, a0O[aC])
	}, this.a0Q = function(pU) {
		this.a0P(this.a0L(pU))
	}, this.a0R = function(pU, size) {
		this.a0P(this.a0L(this.a0K(pU, size)))
	}, this.f8 = function(pU, size) {
		for (var h = this.a0L(this.a0K(pU, size)), g8 = 0, oH = 1, aC = h.length - 1; 0 <= aC; aC--) g8 += oH * h[aC], oH *= 64;
		return g8
	}
}

function a0S() {
	var j, k, a0T;

	function a0s(i9, fj, a0q, a0Y, a0l) {
		fj = a0r(i9, fj + 1 + 2 * a0Y & 3);
		! function(i9, lf) {
			return 1 < Math.abs(i9 % j - lf % j) || 1 < Math.abs(a0v(i9) - a0v(lf))
		}(i9, fj) && 0 === a0l[fj << 2] && (a0l[fj << 2] = a0q)
	}

	function a0v(hE) {
		return Math.floor((hE + .5) / j) % k
	}

	function a0r(hE, fj) {
		return hE + a0T[fj]
	}
	this.a0U = function(pU) {
		var aC, a0V, fg, a0W, a0G = bK;
		for (bJ.f7.a0N(bJ.f7.a0L(pU)), bV.xB.a0Z[bV.fM].j = bV.fr = j = a0G.sU(12), bV.xB.a0Z[bV.fM].k = bV.fs = k = a0G.sU(12), a0T = [-j, -1, j, 1], bV.a0i = document.createElement("canvas"), bV.a0i.width = bV.fr, bV.a0i.height = bV.fs, bV
			.a0e = bV.a0i.getContext("2d", {
				alpha: !1
			}), bV.a0f = bV.a0j = null, bV.a0f = bV.a0e.getImageData(0, 0, bV.fr, bV.fs), bV.a0j = bV.a0f.data, bD.te.a0k(bV.a0j), fg = a0G.sU(12), a0V = a0G.sU(5), a0W = a0b(j * k - 1), aC = 0; aC < fg; aC++) ! function(lx, hE, a0X, a0Y) {
			var aC, fj, a0G = bK,
				a0l = bV.a0j,
				a0m = hE,
				a0n = hE,
				a0o = 0,
				a0p = 1 + a0X,
				a0q = 2 - a0X;
			for (a0l[hE << 2] = a0p, aC = 0; aC < lx; aC++) fj = a0G.sU(2), hE = a0r(hE, fj), a0l[hE << 2] === a0p ? a0o % 2 == 1 && a0s(a0n, a0o + 2 * a0Y + 3, a0q, a0Y, a0l) : a0l[hE << 2] = a0p, a0s(hE, fj, a0q, a0Y, a0l), a0s(a0n, fj,
				a0q, a0Y, a0l), a0n = hE, a0o = fj;
			a0r(hE, 0) === a0m ? (a0s(hE, 0, a0q, a0Y, a0l), a0s(a0m, 0, a0q, a0Y, a0l)) : a0r(hE, 1) === a0m && (a0s(hE, 0, a0q, a0Y, a0l), a0s(a0m, 2, a0q, a0Y, a0l));
			0 === lx && (a0s(a0m, 0, a0q, a0Y, a0l), a0s(a0m, 2, a0q, a0Y, a0l))
		}(a0G.sU(a0V), a0G.sU(a0W), 1 === a0G.sU(1), 1 === a0G.sU(1));
		var fn, fp, iZ, a0w, a0x, a0y, a0l = bV.a0j,
			a0z = !0,
			a10 = bV.xB.a0Z[bV.fM].a10,
			a11 = bV.xB.a0Z[bV.fM].a11;
		for (fp = 0; fp < k; fp++)
			for (a0w = !0, a0x = a0z, fn = a0y = 0; fn < j; fn++) iZ = 4 * fp * j + 4 * fn, a0y <= fn && 0 < a0l[iZ] && (a0x = 2 === a0l[iZ], a0w) && (a0w = !1, a0x !== a0z) ? (a0z = a0x, a0y = fn + 1, fn = -1) : (a0x ? (a0l[iZ] = a11[0], a0l[1 +
				iZ] = a11[1], a0l[2 + iZ] = a11[2]) : (a0l[iZ] = a10[0], a0l[1 + iZ] = a10[1], a0l[2 + iZ] = a10[2]), a0l[3 + iZ] = 255);
		bV.a0e.putImageData(bV.a0f, 0, 0), bV.a0g = !0, bV.a0h.dr(), bi.dy = !0
	}
}

function a0E() {
	this.a0U = function(a12) {
		for (var a0G = bK, size = a0G.sU(a12), a13 = 7 + 9 * a0G.sU(1), h = [], aC = 0; aC < size; aC++) h.push(String.fromCharCode(a0G.sU(a13)));
		return h.join("")
	}
}

function cG() {
	var uv, uw, a14, a15, a16, a17, a18, a19, a1A, a1B;

	function a1D() {
		var a1G = aE.a1G;
		for (a1A = a1G; a1A < aE.fd; a1A++) a1C();
		for (a1A = aE.i5 ? aE.l2 : 0; a1A < a1G; a1A++) {
			if (!a1H()) {
				for (var g0 = aE.a1L = a1A; g0 < a1G; g0++) a1A = g0, a1C();
				return
			}
			a1K(a17 + uv * a16 + bO.g7(a16, 2), a18 + uw * a16 + bO.g7(a16, 2))
		}
	}

	function a1n(player) {
		for (var ja = ah.ja, jc = ah.jc, jb = ah.jb, jd = ah.jd, fp = jc[player]; fp <= jd[player]; fp++)
			for (var fn = ja[player]; fn <= jb[player]; fn++) {
				var fK = ad.a1o(fn, fp);
				ad.hG(fK) && (ad.kD(fK) ? ad.hB(fK, player) : ad.a1p(fK, player))
			}
	}

	function a1m(h, vj, vk) {
		var eh = h[vj];
		h[vj] = h[vk], h[vk] = eh
	}

	function a1H() {
		return function() {
			var aC;
			for (aC = 0; aC < 8; aC++)
				if (uv = bO.g7(a14 * az.random(), az.value(100)), uw = bO.g7(a15 * az.random(), az.value(100)), a1u()) return 1;
			return
		}() || function() {
			var j4, j7, fz, a1J, g0, a1I;
			for (j4 = bO.g7(a14 * az.random(), az.value(100)), j7 = bO.g7(a15 * az.random(), az.value(100)), fz = 40; 1 <= fz; fz--)
				for (a1J = a15 - fz; 0 <= a1J; a1J -= 40)
					for (uw = (a1J + j7) % a15, g0 = 40; 1 <= g0; g0--)
						for (a1I = a14 - g0; 0 <= a1I; a1I -= 40)
							if (uv = (a1I + j4) % a14, a1u()) return 1;
			return
		}()
	}

	function a1u() {
		for (var hE, a1w, gap = bO.g7(a16 - a19, 2), a1x = a18 + uw * a16 + gap, a1y = a17 + uv * a16 + gap, a1v = a1x + a19 - 1; a1x <= a1v; a1v--)
			for (a1w = a1y + a19 - 1; a1y <= a1w; a1w--)
				if (hE = ad.a1o(a1w, a1v), !ad.fb(hE) || ad.kD(hE)) return;
		return 1
	}

	function a1K(a1I, a1J) {
		a1C(), a1z(a1I - 2, a1J - 2)
	}

	function a1C() {
		ah.ne[a1A] = 0, ah.hU[a1A] = ah.a1k[a1A] = 0, ah.h8[a1A] = [], ah.hM[a1A] = [], ah.hN[a1A] = [], ah.g5[a1A] = [], ah.ja[a1A] = ah.jc[a1A] = ah.jb[a1A] = ah.jd[a1A] = 0
	}

	function a1z(a1I, a1J) {
		var hE, aC, a20, a21;
		for (ah.ne[a1A] = 1, ah.ja[a1A] = a1I + 10, ah.jc[a1A] = a1J + 10, ah.jd[a1A] = ah.jb[a1A] = 0, a20 = a1I; a20 < a1I + 4; a20++)
			for (a21 = a1J; a21 < a1J + 4; a21++)(a1I < a20 && a20 < a1I + 3 || a1J < a21 && a21 < a1J + 3) && (hE = ad.a1o(a20, a21), ad.fb(hE)) && (ah.ja[a1A] = Math.min(a20, ah.ja[a1A]), ah.jb[a1A] = Math.max(a20, ah.jb[a1A]), ah.jc[a1A] = Math
				.min(a21, ah.jc[a1A]), ah.jd[a1A] = Math.max(a21, ah.jd[a1A]), a1B[ah.hU[a1A]] = hE, ah.hU[a1A]++, ad.a1p(hE, a1A));
		for (ah.a1k[a1A] = ah.hU[a1A], aC = ah.hU[a1A] - 1; 0 <= aC; aC--) ad.a22(a1B[aC], a1A) ? (ad.hB(a1B[aC], a1A), ah.hM[a1A].push(a1B[aC])) : ad.a23(a1B[aC]) ? (ad.hB(a1B[aC], a1A), ah.hN[a1A].push(a1B[aC])) : ad.a24(a1B[aC]) && (ad.hB(a1B[aC],
			a1A), ah.g5[a1A].push(a1B[aC]))
	}
	this.dr = function() {
		if (a1B = new Array(12), a19 = 6, a16 = 10, a14 = bO.g7(bV.fr, a16), a15 = bO.g7(bV.fs, a16), a17 = bO.g7(bV.fr - a16 * a14, 2), a18 = bO.g7(bV.fs - a16 * a15, 2), aE.i5)
			for (var aC = 0; aC < aE.l2; aC++) a1A = aC, a1C(), ah.ne[a1A] = 1;
		(0 === aE.data.spawningType ? a1D : 1 === aE.data.spawningType ? (a1D(), function() {
			var a1M = aE.a1N;
			aE.a1O || a1M++;
			if (!(a1M < 3)) {
				for (var data = aE.data, kI = (aE.i5 ? aE.l2 : 0) + data.teamPlayerCount[0], oN = aE.a1L, a1P = new Uint32Array(a1M), a1Q = new Uint32Array(a1M), a1R = new Uint16Array(a1M), a1S = new Uint16Array(a1M), fe = bj.fe, ja = ah
						.ja, jc = ah.jc, jb = ah.jb, jd = ah.jd, gL = bR.gL, gM = bR.gM, aC = kI; aC < oN; aC++) gL[aC] = ja[aC] + jb[aC] >> 1, gM[aC] = jc[aC] + jd[aC] >> 1;
				for (aC = kI; aC < oN; aC++) {
					var id = fe[aC];
					a1P[id] += gL[aC], a1Q[id] += gM[aC]
				}
				var lP = bj.lP;
				for (aC = 1; aC < a1M; aC++) {
					var h9 = Math.max(data.teamPlayerCount[lP[aC]], 1);
					a1R[aC] = bO.g7(a1P[aC], h9), a1S[aC] = bO.g7(a1Q[aC], h9)
				}
				var a1T = bj.a1T,
					a1U = bj.a1U,
					a1V = bj.a1V,
					gK = bR.gK;
				for (aC = 0; aC < 512; aC++) gK[aC] = aC;
				for (var eO = 0; eO < 2 + (4 <= a1M); eO++)
					for (aC = kI; aC < oN; aC++) {
						for (var i9 = aC, a1W = gK[i9], a1X = 1, fw = bO.a1Y(gL[a1W] - a1R[1], gM[a1W] - a1S[1]), fz = 2; fz < a1M; fz++) {
							var a1Z = bO.a1Y(gL[a1W] - a1R[fz], gM[a1W] - a1S[fz]);
							a1Z < fw && (fw = a1Z, a1X = fz)
						}
						var a1a = fe[i9];
						if (a1X !== a1a) {
							if (2 === eO && 4 <= a1M) {
								var a1b = Math.max((a1X + 1) % a1M, 1),
									a1c = bO.a1Y(gL[a1W] - a1R[a1b], gM[a1W] - a1S[a1b]);
								for (fz = 1; fz < a1M; fz++) a1Z = bO.a1Y(gL[a1W] - a1R[fz], gM[a1W] - a1S[fz]), fw < a1Z && a1Z < a1c && (a1c = a1Z, a1b = fz);
								a1b !== a1a && bO.a1Y(a1R[a1a] - a1R[a1b], a1S[a1a] - a1S[a1b]) < bO.a1Y(a1R[a1a] - a1R[a1X], a1S[a1a] - a1S[a1X]) && (a1X = a1b)
							}
							var a1d = lP[a1X],
								a1e = a1U[a1d] + (aE.i5 ? 0 : a1V[a1d]),
								lf = a1T[a1e],
								a1f = gK[lf],
								a1g = a1U[a1d + 1];
							fw = bO.a1Y(gL[a1f] - a1R[a1a], gM[a1f] - a1S[a1a]);
							for (var eq = a1e + 1; eq < a1g; eq++) {
								var a1h = a1T[eq],
									a1i = gK[a1h];
								(a1Z = bO.a1Y(gL[a1i] - a1R[a1a], gM[a1i] - a1S[a1a])) < fw && (fw = a1Z, lf = a1h)
							}
							lf < kI || oN <= lf || (a1f = gK[lf], a1P[a1a] += gL[a1f] - gL[a1W], a1Q[a1a] += gM[a1f] - gM[a1W], a1P[a1X] += gL[a1W] - gL[a1f], a1Q[a1X] += gM[a1W] - gM[a1f], h9 = data.teamPlayerCount[lP[a1a]], a1R[a1a] =
								bO.g7(a1P[a1a], h9), a1S[a1a] = bO.g7(a1Q[a1a], h9), h9 = data.teamPlayerCount[a1d], a1R[a1X] = bO.g7(a1P[a1X], h9), a1S[a1X] = bO.g7(a1Q[a1X], h9), gK[i9] = a1f, gK[lf] = a1W)
						}
					}! function() {
						for (var gK = bR.gK, ja = ah.ja, jc = ah.jc, jb = ah.jb, jd = ah.jd, hU = ah.hU, a1k = ah.a1k, hM = ah.hM, hN = ah.hN, g5 = ah.g5, aC = 0; aC < 512; aC++) {
							var a1l = gK[aC];
							if (a1l !== aC) {
								a1m(ja, aC, a1l), a1m(jc, aC, a1l), a1m(jb, aC, a1l), a1m(jd, aC, a1l), a1m(hU, aC, a1l), a1m(a1k, aC, a1l), a1m(hM, aC, a1l), a1m(hN, aC, a1l), a1m(g5, aC, a1l), a1n(aC), a1n(a1l), gK[aC] = aC;
								for (var k = a1l, hF = gK[k]; hF !== aC;) hF = gK[k = hF];
								gK[k] = a1l
							}
						}
					}()
			}
		}) : function() {
			var a1G = aE.a1G;
			for (a1A = a1G; a1A < aE.fd; a1A++) a1C();
			for (a1A = aE.i5 ? aE.l2 : 0; a1A < a1G; a1A++)
				if (! function() {
						var spawningData = aE.data.spawningData,
							a1I = spawningData[2 * a1A] + 1,
							spawningData = spawningData[2 * a1A + 1] + 1;
						if (3 < a1I && a1I < bV.fr - 5 && 3 < spawningData && spawningData < bV.fs - 5 && ad.fb(ad.a1o(a1I, spawningData)) && function(a1I, a1J) {
								var hE, a1w, a1v;
								for (a1v = a1J; a1J - 6 < a1v; a1v--)
									for (a1w = a1I; a1I - 6 < a1w; a1w--)
										if (hE = ad.a1o(a1w, a1v), ad.kD(hE)) return;
								return 1
							}(a1I + 3, spawningData + 3)) return a1K(a1I + 1, spawningData + 1), 1;
						return
					}()) {
					if (!a1H()) {
						for (var g0 = aE.a1L = a1A; g0 < a1G; g0++) a1A = g0, a1C();
						return
					}
					var a1I = a17 + uv * a16 + bO.g7(a16, 2),
						a1J = a18 + uw * a16 + bO.g7(a16, 2);
					a1K(a1I, a1J)
				}
		})(), bg.na[7] = ah.hU[aE.fQ]
	}, this.a25 = function(kB, a26, a27) {
		var aC, a1I, a1J, hE, uv, uw;
		for (a1A = kB, aC = 0; aC < 20; aC++)
			for (a1I = a26 + aC; a26 - aC <= a1I; a1I--)
				for (a1J = a27 + aC; a27 - aC <= a1J; a1J--)
					if ((a1I === a26 + aC || a1I === a26 - aC || a1J === a27 + aC || a1J === a27 - aC) && 3 < a1I && a1I < bV.fr - 5 && 3 < a1J && a1J < bV.fs - 5 && ad.fb(ad.a1o(a1I, a1J)) && function(a1I, a1J) {
							var hE, a1w, a1v;
							for (a1v = a1J; a1J - 6 < a1v; a1v--)
								for (a1w = a1I; a1I - 6 < a1w; a1w--)
									if (hE = ad.a1o(a1w, a1v), ad.kD(hE) && !ad.a2D(a1A, hE)) return;
							return 1
						}(a1I + 3, a1J + 3)) {
						if (0 < ah.hU[a1A]) {
							for (uw = uv = hE = void 0, uv = ah.jb[a1A]; uv >= ah.ja[a1A]; uv--)
								for (uw = ah.jd[a1A]; uw >= ah.jc[a1A]; uw--) hE = 4 * (uw * bV.fr + uv), ad.a2A(a1A, hE) && (ad.a2B(hE), ah.hU[a1A]--);
							a1C()
						}
						return a1z(a1I - 1, a1J - 1), !0
					} return !1
	}, this.a2C = function(kB) {
		a1A = kB, a1H() ? a1K(a17 + uv * a16 + bO.g7(a16, 2), a18 + uw * a16 + bO.g7(a16, 2)) : a1C()
	}
}

function a2E() {
	au.a2F(), ym.setTransform(iv, 0, 0, iv, 0, 0), ym.imageSmoothingEnabled = iv < 3, ym.drawImage(bV.a0i, aT.a2G(), aT.a2H()), bS.a2I.yl(), ym.drawImage(a2J, aT.a2G(), aT.a2H()), au.yl(), bQ.yl(), ag.yl(), (aE.o8 ? (bk.yl(), bF) : (aO.yl(), aW.yl(),
		aS.yl(), bF.yl(), ax.yl(), aX.yl(), aT.yl(), aR.yl(), bk.yl(), aV.yl(), aQ.yl(), aN.yl(), aM.yl(), aY.yl(), bh.yl(), aw)).yl(), u.yl()
}

function a2K(p2, j, k) {
	p2.clearRect(0, 0, j, k), p2.fillStyle = bE.qI, p2.fillRect(0, 0, j, k)
}

function a2L(p2, j, k, a2M) {
	p2.fillStyle = bE.qL, p2.fillRect(0, 0, j, a2M), p2.fillRect(0, 0, a2M, k), p2.fillRect(j - a2M, 0, a2M, k), p2.fillRect(0, k - a2M, j, a2M)
}

function a2N(p2, fn, fp, ie, a2M, hE, a2O) {
	p2.fillStyle = bE.qL;
	var hE = Math.floor(ie * hE),
		vX = (hE += (hE - a2M) % 2, Math.floor((hE - a2M) / 2)),
		ie = Math.floor((ie - hE) / 2);
	p2.fillRect(fn + ie, fp + ie + vX, hE, a2M), a2O && p2.fillRect(fn + ie + vX, fp + ie, a2M, hE)
}

function a2Q() {
	this.dr = function() {
		8 === aE.lK && aO.a2R()
	}, this.a2S = function(a2T) {
		var elo = aE.data.elo,
			kH = (elo[a2T] - elo[1 - a2T]) / 10,
			kH = 8 / (1 + Math.pow(2, kH / 32)),
			kH = Math.floor(10 * kH + .5),
			a2V = elo[a2T] + kH,
			a2W = this.a2X(a2V),
			elo = this.a2X(elo[1 - a2T] - kH),
			kH = (0 === a2T ? aO.a2Z(a2W, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aO.a2Z(elo, a2W, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), a2V * bO.sqrt(a2V) >> 8),
			elo = ((1 + aE.a2c) * kH / 100).toFixed(2);
		a2T !== aE.fQ || aE.hq ? aO.a2d(640, L(38, [ah.a2e[a2T], elo]), 40, 0, bE.qL, bE.qI, -1, !1) : aO.a2d(640, L(37, [elo]), 40, 0, bE.qL, bE.qI, -1, !1)
	}, this.a2X = function(elo) {
		return 16e3 === (elo = bO.is(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cm() {
	this.q3 = new a2f, this.a0l = new a2g
}

function a2g() {
	this.iT = !1;
	this.a2k = [], this.a2l = 100;
	var o5, o6, gap, ie, a2h, a2j, a2m = 0,
		a2n = new Array(9),
		a2o = [],
		a2p = [],
		a2q = 0,
		a2r = 0,
		a2s = 0,
		a2t = 0;

	function a35() {
		a2n.sort(function(fz, g0) {
			return g0.l7 - fz.l7
		});
		for (var pU = "" + a2n[0].s5, aC = 1; aC < 9; aC++) pU += "," + a2n[aC].s5;
		for (aC = 0; aC < 9; aC++) pU += "," + a2n[aC].l7;
		bm.buffer.zH(120, pU)
	}
	this.dr = function() {
		for (var a2u = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aC = 0; aC < a2u.length; aC++) {
			var color = 6 === a2u[aC] ? bE.ql : bE.qJ;
			this.a2k.push(bD.canvas.a2v(ac.get(3), a2u[aC], color))
		}
		for (aC = 0; aC < ak.q3.a2w; aC++) a2p.push(ak.q3.a2x - ak.q3.a2w + aC);
		for (aC = 0; aC < ak.q3.a2y; aC++) a2p.push(ak.q3.a2z + aC);
		var a30 = ak.q3.a31(bN.a30);
		for (__fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.realFlagCodes = a30.slice(), aC = 0; aC < a30.length; aC++) a2p.push(a30[aC]);
		! function() {
			if (__fx.settings.customQuickEmojisEnabled && __fx.settings.customQuickEmojis && 9 === __fx.settings.customQuickEmojis.length)
				for (var q = 0; q < 9; q++) {
					var qcode = parseInt(__fx.settings.customQuickEmojis[q], 10);
					a2n[q] = {
						s5: isNaN(qcode) ? 1015 + q : qcode,
						l7: 0
					}
				} else {
					var aC, h = bm.buffer.data[120].value.split(",");
					if (18 !== h.length)
						for (aC = 0; aC < 9; aC++) a2n[aC] = {
							s5: 1015 + aC,
							l7: 0
						};
					else
						for (aC = 0; aC < 9; aC++) {
							var g8 = parseInt(h[aC]),
								eq = (g8 = 0 <= g8 && g8 < ak.q3.a2x ? g8 : 0, parseInt(h[aC + 9]));
							eq = 0 <= eq && eq < 1e3 ? eq : 0, a2n[aC] = {
								s5: g8,
								l7: eq
							}
						}
				}
		}()
	}, this.show = function(mH, mI, a36) {
		var aC;
		if (a2q = mH, a2r = mI, a2m = a36 || 0, this.iT = !0, a2o = [], 0 === a2m)
			for (aC = 0; aC < 9; aC++) a2o.push(a2n[aC].s5);
		else {
			var g0 = 49 * a2m,
				a36 = g0 - 49;
			for (a36 >= a2p.length && (a2m = 1, a36 = 0, g0 = 49), aC = a36 = (g0 = Math.min(g0, a2p.length)) - 49; aC < g0; aC++) a2o.push(a2p[aC])
		}
		a2o.push(1024);
		a36 = a2o.length, ie = Math.floor((a1.a2.it() ? .075 : .0468) * i.iu), gap = Math.floor(ie / 3), (a2s = 10 * (a2h = ie + gap)) > i.j && (a2s = i.j, gap = (a2h = a2s / 10) - (ie = 3 * a2h / 4)), a2j = bO.g7(a36, 10) + !!(a36 % 10), (a2t =
			a2j * a2h) > i.k && (a2t = i.k, gap = (a2h = a2t / a2j) - (ie = 3 * a2h / 4)), a36 = .5 * gap;
		o5 = Math.min(Math.max(mH - .5 * a2s + a36, a36), i.j - a2s + a36), o6 = Math.min(Math.max(mI - .5 * a2t + a36, a36), i.k - a2t + a36)
	}, this.hu = function(mH, mI, player) {
		if (!this.iT) return !1;
		if (this.a38(mH, mI)) {
			mH = bO.is(bO.g7(mH - o5 + .5 * gap, a2h), 0, 9);
			if ((mH += 10 * bO.is(bO.g7(mI - o6 + .5 * gap, a2h), 0, 9)) >= a2o.length) return aM.uU(), !0;
			mI = a2o[mH];
			if (1024 === mI) return this.show(a2q, a2r, a2m + 1), !0;
			! function(s5) {
				if (!__fx.settings.customQuickEmojisEnabled) {
					for (var aC = 0; aC < 9; aC++) a2n[aC].l7 = Math.floor(.99 * a2n[aC].l7);
					for (aC = 0; aC < 9; aC++)
						if (s5 === a2n[aC].s5) return a2n[aC].l7 = Math.min(a2n[aC].l7 + 30, 999), a35();
					a2n.splice(5, 0, {
						s5: s5,
						l7: Math.max(a2n[4].l7, 30)
					}), a2n.pop(), a35()
				}
			}(mI), player === aE.fQ ? bB.i7.s4(mI) : bB.h2.sJ(mI, player)
		}
		return aM.uU(), !0
	}, this.a38 = function(mH, mI) {
		return !(mH < o5 - .5 * gap || mI < o6 - .5 * gap || o5 + a2s - .5 * gap <= mH || o6 + a2t - .5 * gap <= mI)
	}, this.yl = function() {
		ym.fillStyle = bE.qI, ym.fillRect(o5 - .5 * gap, o6 - .5 * gap, a2s, a2t);
		for (var iZ = .5 * bf.a39, fg = (ym.lineWidth = bf.a39, ym.strokeStyle = ym.fillStyle = bE.qL, ym.strokeRect(o5 - .5 * gap + iZ, o6 - .5 * gap + iZ, a2s - 2 * iZ, a2t - 2 * iZ), ym.imageSmoothingEnabled = !0, a2o.length), aC = 0; aC <
			fg; aC++) this.a3A(a2o[aC], ym, o5 + aC % 10 * a2h, o6 + bO.g7(aC, 10) * a2h, ie);
		ym.imageSmoothingEnabled = !1
	}, this.a3A = function(s5, il, fn, fp, ie) {
		var fK;
		s5 >= 1024 - ak.q3.a2w ? (fK = ie / this.a2l, il.setTransform(fK, 0, 0, fK, fn, fp), il.drawImage(this.a2k[s5 - 1024 + ak.q3.a2w], 0, 0), il.setTransform(1, 0, 0, 1, 0, 0)) : (bD.t4.textAlign(il, 1), bD.t4.textBaseline(il, 1), il.font =
			bD.t4.t7(0, .89 * ie), il.fillText(ak.q3.a3B(s5), fn + .5 * ie, fp + (.35 - bD.t4.a3C + .56) * ie))
	}
}

function a2f() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.a2w = 13, this.a2y = this.emojis.length, this.a2z = 676, __fx.quickEmojis = __fx.quickEmojis || {}, __fx.quickEmojis.emojiList = this.emojis, __fx.quickEmojis.emojiBaseCode = this.a2z, this.a2x = 1024, this.a3D = this.emojis.indexOf(
		"💀"), this.a3E = this.a3D + 1, this.a3F = this.emojis.indexOf("🥇"), this.a3G = this.emojis.indexOf("😊"), this.a3B = function(g8) {
		return g8 < this.a2z ? String.fromCharCode(55356, 56806 + bO.g7(g8, 26), 55356, 56806 + g8 % 26) : this.emojis[Math.min(g8 - this.a2z, this.a2y - 1)]
	}, this.a31 = function(pU) {
		for (var fg = pU.length - 2, h = [], aC = 0; aC < fg; aC++) {
			var a3H = pU.charCodeAt(aC) - 56806,
				a3I = pU.charCodeAt(aC + 2) - 56806;
			0 <= a3H && a3H < 26 && 0 <= a3I && a3I < 26 && (h.push(26 * a3H + a3I), aC += 3)
		}
		return h
	}, this.a3J = function(g8) {
		return g8 < this.a2z
	}, this.a3K = function(g8) {
		return g8 >= 1024 - this.a2w
	}, this.a3L = function(g8) {
		return g8 >= this.a2z && g8 < this.a2z + this.a3E
	}
}

function cA() {
	this.f7 = new a3M, this.a0B = new a3N, this.a0D = new a3O, this.dr = function() {
		this.f7.dr()
	}
}

function a3N() {
	this.a0Q = function(pU) {
		for (var fg = pU.length, j = bG, aC = 0; aC < fg; aC++) j.a9(16, pU.charCodeAt(aC))
	}
}

function a3M() {
	var a3P = new Uint8Array(64);
	this.dr = function() {
		var aC;
		for (a3P[0] = 45, a3P[37] = 95, aC = 0; aC < 10; aC++) a3P[aC + 1] = 48 + aC;
		for (aC = 0; aC < 26; aC++) a3P[aC + 11] = 65 + aC, a3P[aC + 38] = 97 + aC
	}, this.vU = function(a3Q) {
		for (var a0G = bK, a0O = new Uint8Array(a3Q), aC = 0; aC < a3Q; aC++) a0O[aC] = a0G.sU(6);
		return a0O
	}, this.vT = function(a0O) {
		for (var fg = a0O.length, a3R = a3P, h = [], aC = 0; aC < fg; aC++) h.push(String.fromCharCode(a3R[a0O[aC]]));
		return h.join("")
	}, this.a3S = function(value, a3T) {
		for (var a3R = a3P, h = [], aC = 0; aC < a3T; aC++) h.push(String.fromCharCode(a3R[value >> 6 * (a3T - 1 - aC) & 63]));
		return h.join("")
	}
}

function cI() {
	var a3U, a3V, a3W;
	a3U = [32, 65, 191, 913, 931], a3V = [64, 127, 688, 930, 1155], a3W = new Array(a3U.length + 1);
	for (var aC = 0; aC < a3W.length; aC++) {
		a3W[aC] = 0;
		for (var fz = aC - 1; 0 <= fz; fz--) a3W[aC] += a3V[fz] - a3U[fz]
	}

	function a3c(eq) {
		for (var aC = a3U.length - 1; 0 <= aC; aC--)
			if (eq >= a3U[aC] && eq < a3V[aC]) return aC;
		return -1
	}
	this.a0H = function(pU) {
		return 0 !== (pU = pU.trim()).indexOf("Bot ") && 0 !== pU.indexOf("[Bot] ") && function(pU, a3Z, a3a) {
			var fg = (pU = pU.trim()).length;
			if (fg < a3Z || a3a < fg) return !1;
			for (var eq, a3b = 0, aC = 0; aC < fg; aC++)
				if (eq = pU.charCodeAt(aC), a3b += 65 <= eq && eq <= 90 || 1040 <= eq && eq <= 1071 ? 1 : 0, -1 === a3c(eq)) return !1;
			if (3 < a3b && a3b > Math.floor(fg / 2)) return !1;
			return !0
		}(pU, 3, 20)
	}, this.a3d = function(pU) {
		for (var fg = (pU = pU.trim()).length, h = [], aC = 0; aC < fg; aC++) {
			var eq, hE = a3c(eq = pU.charCodeAt(aC));
			h.push(a3W[hE] + eq - a3U[hE])
		}
		return h
	}, this.a0U = function(h) {
		for (var eq, g0, pU = "", fg = h.length, aC = 0; aC < fg; aC++)
			for (g0 = 1; g0 < a3W.length; g0++)
				if (h[aC] < a3W[g0]) {
					eq = a3U[g0 - 1] + h[aC] - a3W[g0 - 1], pU += String.fromCharCode(eq);
					break
				} return pU
	}, this.a3e = function(pU) {
		for (var h = this.a3d(pU), result = "", aC = 0; aC < h.length; aC++) result = (result += h[aC] < 10 ? "00" : h[aC] < 100 ? "0" : "") + h[aC].toString(10);
		return result
	}, this.a3f = function(pU) {
		for (var h = new Array(Math.floor(pU.length / 3)), aC = 0; aC < pU.length; aC += 3) h[Math.floor(aC / 3)] = parseInt(pU.substring(aC, aC + 3));
		return this.a0U(h)
	}, this.a3g = function(pU) {
		for (var g8, h = [pU.length], aC = 0; aC < pU.length; aC++) h[aC] = pU.charCodeAt(aC) - 48;
		var result = "";
		for (aC = 0; aC < pU.length; aC++) aC === pU.length - 1 || 51 < 10 * h[aC] + h[aC + 1] ? result += h[aC].toString() : (g8 = 10 * h[aC] + h[aC + 1], result += String.fromCharCode(g8 + (g8 < 26 ? 65 : 71)), aC++);
		return result
	}, this.a3h = function(pU) {
		for (var eq, result = "", aC = 0; aC < pU.length; aC++) 48 <= (eq = pU.charCodeAt(aC)) && eq < 58 ? result += String.fromCharCode(eq) : 65 <= eq && eq < 75 ? result += "0" + (eq - 65).toString() : 75 <= eq && eq < 91 ? result += (eq - 65)
			.toString() : 97 <= eq && eq < 123 && (result += (eq - 71).toString());
		return result
	}, this.a3i = function(pU) {
		for (var fg = pU.length, h = [], aC = 0; aC < fg; aC++)(eq = pU.charCodeAt(aC)) < 58 ? h.push(pU[aC]) : (eq -= eq < 91 ? 65 : 71, h.push(String(bO.g7(eq, 10))), h.push(String(eq - 10 * bO.g7(eq, 10))));
		var fg = h.length - 2,
			eq = 0,
			a0O = [];
		for (aC = 0; aC < fg; aC += 3) a0O[eq++] = parseInt(h[aC] + h[aC + 1] + h[aC + 2]);
		return a0O
	}, this.a3j = function() {
		for (var eO, a3k = "", aC = 0; aC < 6; aC++) eO = 48 + az.random() % 36, eO += 58 <= eO ? 39 : 0, a3k += String.fromCharCode(eO);
		return a3k
	}
}

function a3O() {
	this.a3d = function(pU, a12, a3l) {
		for (var a3m = [], fg = pU.length, max = 0, aC = 0; aC < fg; aC++) {
			var g8 = pU.charCodeAt(aC);
			a3m.push(g8), max = Math.max(max, g8)
		}
		var a13 = max < 128 ? 7 : 16;
		for (a3l.a9(a12, fg), a3l.a9(1, +(16 == a13)), aC = 0; aC < fg; aC++) a3l.a9(a13, a3m[aC])
	}
}

function dJ() {
	this.a3n = new a3o, this.result = new a3p, this.a3q = new a3r, this.nF = new a3s, this.a3t = new a3u, this.a3v = new a3w, this.dr = function() {
		this.result.dr()
	}
}

function a3r() {
	this.a3x = function() {
		for (var fg = am.lY, wu = am.ld, a3y = [], aC = 0; aC < fg; aC++) {
			var hE = wu[aC];
			bD.h2.a3z(hE) && a3y.push(hE)
		}
		return a3y
	}, this.a40 = function() {
		if (0 === bj.lP[aE.a41]) return this.a42();
		bk.l3(aE.a41);
		for (var a3y = [], fg = bR.gB[0], gK = bR.gK, aC = 0; aC < fg; aC++) {
			var hE = gK[aC];
			bD.h2.a3z(hE) && a3y.push(hE)
		}
		return a3y
	}, this.a42 = function() {
		var hE = md[0];
		return bD.h2.a3z(hE) ? [hE] : []
	}, this.a43 = function(a3y) {
		for (var fg = a3y.length, eh = 0, hU = ah.hU, aC = 0; aC < fg; aC++) eh += hU[a3y[aC]];
		return eh
	}
}

function a3o() {
	function a45() {
		if (2 === aE.a49) return 1;
		ax.a4A(), aE.a49 = 2, aE.a4B = aE.a4C
	}

	function a47() {
		bU.a3t.a4D(), aY.show(1 === aE.a4E, !1, 2 === aE.a4E), bU.result.a4D(), bU.a3v.el(), bU.nF.el(), bU.nF.a4F(), aO.a4G(!0), aO.a4H(247), aO.a4H(956), aO.a4H(957), aW.nQ(!0), aX.nQ(!0), ax.nQ(), bF.a4I(), aE.hp && bi.a4J.a4K(), bi.dy = !0, be
			.a4L(), a1.a2.setState(0)
	}
	this.a44 = function() {
		a45() || (aE.a46 = 2, a47())
	}, this.a48 = function() {
		a45() || (aE.a46 = 1, a47())
	}
}

function a3s() {
	var a4M = 0;
	this.el = function() {
		var a4U;
		2 === aE.a46 ? (aO.a4N(0, 59), aI.oE(2700)) : aE.lK < 7 ? (a4U = bj.lP[aE.a41], a4U = bj.a4W[a4U], aR.a4X(L(39, [a4U]), 2, 1, 12), aO.a2d(0, L(40, [a4U]), 40, 0, bE.qL, bE.qI, -1, !1), aI.oE(2700)) : 8 === aE.lK ? (aE.hq ? aO.a4N(aE.a4S,
			3) : aE.a4E ? aO.a4N(aE.a4S, 2) : aO.a4N(1 - aE.fQ, 3), aE.a4T.a2S(aE.a4S), aI.o0(aE.a4S, 2700, !1, 0)) : 9 === aE.lK ? (aO.a4Y(), aI.oE(2700)) : (aO.a4Z(aE.a4S), aI.o0(aE.a4S, 2700, !1, 0))
	}, this.a4F = function() {
		a4M = 0, aE.hp || aE.lM || (a4M = 54)
	}, this.nG = function() {
		var pU;
		0 !== a4M && 0 === --a4M && (pU = b1.z.a4b(), aE.lK < 7 ? pU += "/log/team" : 8 === aE.lK ? pU += "/log/1v1" : 9 === aE.lK ? pU += "/log/zombies" : pU += "/log/br", aO.a2d(720, pU, 736, 0, bE.qL, bE.qj, -1, !1), aE.a4c < 0 || (pU = b1.z
			.a4b() + "/log/?r=" + bI.f7.a3S(aE.a4c, 6), aO.a2d(1071, pU, 736, 0, bE.qL, bE.qj, -1, !1)))
	}
}

function a3w() {
	function a4m() {
		var vn;
		return 8 === aE.lK ? 0 : (vn = Math.floor(ah.a4n[aE.fQ] / 50), (vn = Math.min(vn, 200)) / 100)
	}

	function a4e() {
		var vn = a4m();
		0 === vn || aE.hq || aO.a2d(440, L(41, [vn.toFixed(2)]), 40, 0, bE.qd, bE.qI, -1, !1)
	}
	this.el = function() {
		var a4f;
		0 === bU.result.a4d || 0 === bU.result.a3y.length || 8 === aE.lK ? bD.h2.ht(aE.fQ) && a4e() : (function(a4f) {
			7 !== aE.lK && 10 !== aE.lK && 9 !== aE.lK || 0 !== aE.a4E && a4f && (9 === aE.lK ? aO.a2d(600, L(45, [100 * (1 + aE.a2c)]), 40, 0, bE.qL, bE.qI, -1, !1) : aO.a2d(600, L(45, [a4f.toFixed(2)]), 40, 0, bE.qL, bE.qI, -1, !1))
		}(a4f = function() {
			aO.a2d(520, L(42), 40, 0, bE.qL, bE.qI, -1, !1);
			for (var a3y = bU.result.a3y, fg = a3y.length, hU = ah.hU, h = [], aC = 0; aC < fg; aC++) {
				var hE = a3y[aC];
				h.push({
					hE: hE,
					eh: hU[hE]
				})
			}
			h.sort((fz, g0) => g0.eh - fz.eh);
			var a4W = ah.a2e,
				eh = bU.result.a4o,
				vn = bU.result.a4d,
				pU = "",
				a4f = 0;
			for (aC = 0; aC < fg; aC++) {
				var iR = h[aC].eh * vn / (100 * eh),
					a4q = a4W[h[aC].hE] + ": " + iR.toFixed(2) + "   ";
				h[aC].hE !== aE.fQ || aE.hq || (a4f = iR, 9 === aE.lK && 0 !== aC && (a4f = 0)), 2 < aC && 4 !== fg ? 3 === aC && (pU += "(" + L(43, [fg - 3]) + ")") : pU += a4q
			}
			aO.a2d(560, bD.pY.a4r(pU), 40, 0, bE.qd, bE.qI, -1, !1), a4f ? aO.a2d(580, L(44, [a4f.toFixed(2) + " + " + a4m().toFixed(2)]), 40, 0, bE.qd, bE.qI, -1, !1) : bD.h2.ht(aE.fQ) && a4e();
			return a4f
		}()), 2 === aE.a46 || 7 <= aE.lK || function(a4f) {
			var a3y = bU.result.a3y,
				fg = a3y.length,
				a4s = ah.a4s,
				hU = ah.hU,
				a4t = [];
			loop: for (var aC = 0; aC < fg; aC++) {
				var hE = a3y[aC],
					a4u = bD.pY.pm(a4s[hE]);
				if (null !== a4u) {
					for (var a4v = hU[hE], g0 = a4t.length - 1; 0 <= g0; g0--)
						if (a4u === a4t[g0].name) {
							a4t[g0].eh += a4v, a4t[g0].h.push({
								hE: hE,
								eh: a4v
							});
							continue loop
						} a4t.push({
						name: a4u,
						eh: a4v,
						h: [{
							hE: hE,
							eh: a4v
						}]
					})
				}
			}
			if (0 !== a4t.length) {
				a4t.sort((fz, g0) => g0.eh - fz.eh);
				var h = a4t[0].h,
					a4w = (h.sort((fz, g0) => g0.eh - fz.eh), "[" + a4t[0].name + "]"),
					a4x = 512 * bU.result.a4d / 26214400,
					lx = (aO.a2d(0, L(46, [a4w, a4x.toFixed(4)]), 40, 0, bE.qL, bE.qI, -1, !1), h.length),
					a0M = a4t[0].eh,
					a4y = 1e4 * a4x;
				for (aC = 0; aC < lx; aC++)
					if (h[aC].hE === aE.fQ && !aE.hq) {
						aO.a2d(600, L(47, [(a4y * h[aC].eh / (10 * a0M)).toFixed(2)]), 40, 0, bE.qL, bE.qI, -1, !1), aO.a2d(640, L(48, [(.2 * a4f).toFixed(2), a4w]), 40, 0, bE.qL, bE.qI, -1, !1);
						break
					}
			}
		}(a4f))
	}, this.a4j = function() {
		var a4k, a0m;
		aE.lM || (a4k = ah, a0m = aE.fQ, 0 === a4k.a4l[a0m]) || a4k.k6[a0m] < 1 || 2 * a4k.sl[a0m] > 3 * (a4k.k5[a0m] + a4k.k6[a0m]) || a4e()
	}
}

function a3p() {
	this.dr = function() {
		this.a4z = 0, this.a3y = [], this.a4o = 0, this.a4d = 0
	}, this.a4D = function() {
		var un;
		aE.lM || (un = this, 2 === aE.a46 ? un.a3y = bU.a3q.a3x() : aE.ib ? un.a3y = bU.a3q.a40() : un.a3y = bU.a3q.a42(), un.a4z = bl.a51.a52(), un.a4o = Math.max(1, bU.a3q.a43(un.a3y)), bB.h2.sS(), 8 === aE.lK ? bU.result.a4d = 0 : un.a4d =
			100 * bU.result.a4z * (1 + aE.a2c))
	}
}

function a3u() {
	this.a4D = function() {
		if (2 === aE.a46) aE.a4E = 2;
		else {
			if (8 === aE.lK) bD.h2.kP(0) || 0 === ah.ne[0] ? aE.a4S = 1 : bD.h2.kP(1) || 0 === ah.ne[1] ? aE.a4S = 0 : aE.a4S = +(ah.hU[1] > ah.hU[0]);
			else {
				if (aE.ib) {
					var la = bk.a55();
					if (aE.a41 = la, bj.lP[la]) return void(aE.a4E = +(bj.fe[aE.fQ] === la))
				}
				aE.a4S = md[0]
			}
			aE.a4E = +(aE.a4S === aE.fQ)
		}
	}
}

function dO() {
	this.id = 0, this.e8 = 0, this.zT = null, this.zU = null, this.zV = null, this.zb = null, this.a2 = new a56, this.dr = function() {
		var self, e8;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (e8 = Android.getVersion()) < 12 || (self.e8 = e8, self.id = 1, self.zU = Android),
			function(self) {
				var e8;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.zV = mwIOSdataX, self.zb = window.webkit.messageHandlers.iosCommandA, e8 = self
					.zV.version, self.e8 = e8 ? Number(e8) : 0)
			}(this),
			function(self) {
				var zT;
				try {
					if (!(zT = window.localStorage)) return;
					zT.setItem("tls7", "1"), zT.removeItem("tls7")
				} catch (error) {
					return
				}
				self.zT = zT
			}(this)
	}
}

function a56() {
	this.a5A = function() {
		bm.rr.zs(), bm.rr.zt(), b1.z.close(0, 3255), 0 === a1.id ? a1.zT && a1.zT.clear() : 1 === a1.id ? a1.zU.saveString(199, "") : 2 === a1.id && a1.zb.postMessage("clear")
	}, this.a5B = function() {
		2 === a1.id ? a1.zb.postMessage("showConsentForm") : 1 === a1.id && a1.zU.setState(7)
	}, this.a5C = function() {
		this.setState(14)
	}, this.it = function() {
		return 1 === bm.buffer.zI(2)
	}, this.a5D = function() {
		bm.buffer.zH(102, "")
	}, this.setState = function(a5E) {
		1 === a1.id && 5 <= a1.e8 && a1.zU.setState(a5E)
	}, this.a3 = function() {
		var a5F;
		1 === a1.id && 7 <= a1.e8 ? a1.zU.setState(5) : 2 === a1.id ? a1.zb.postMessage("reload 0") : ((a5F = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a5F.toString())
	}, this.ec = function() {
		0 !== a1.id && (1 === a1.id ? a1.zU.prepareAd("8646194357") : 2 === a1.id && (0 === a1.e8 ? a1.zb.postMessage("prepare ad 2904813909") : a1.zb.postMessage("loadAds 2904813909")))
	}, this.ei = function(eh) {
		return 0 !== a1.id && (1 === a1.id ? 12 <= a1.e8 && (a1.zU.presentAd(eh), !0) : 2 === a1.id && 0 !== a1.e8 && (a1.zb.postMessage("showAd"), !0))
	}, this.e0 = function() {
		2 === a1.id && a1.e8 < 23 && u.v(4, 1, new w("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bN.a5G + "' target='_blank'>" + bN
			.a5G + "</a>", !0, [new x("⬅️ " + L(49), function() {
				u.v(0)
			}, bE.r2)]))
	}
}

function dd() {
	function a5I(e) {
		mM(e), u.v(4, 5, new w("🚀 New Game Update", "The game was updated! Please reload the game. An internet connection is required." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new x("⬅️ " + L(49), function() {
				u.a5J()
			}), new x("🔄 Reload", function() {
				a1.a2.a3()
			}, bE.qi)]))
	}

	function a5V(e) {
		mM(e), u.v(4, 5, new w(L(50), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a5Q(e), !0))
	}

	function a5Q(e) {
		var pU = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response / Server Restart" + pU : 4527 === e ? "Player already in lobby" + pU : 4577 === e ? "Your IP is banned." + pU : 4530 === e ? "Lobby Timeout" + pU : 4528 === e ?
			"Lobby Kick: Another login detected." + pU : 4540 === e ? "You have been kicked." + pU : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + pU : 4555 === e ? "This Account is blocked." + pU :
			4580 === e ? "More Gold needed" + pU : 4557 <= e && e <= 4560 || 4589 == e ? "Please try again later!" + pU : 4591 === e ? "The algo determined you are a bot." + pU : "Unknown error" + pU
	}

	function mM(e) {
		a5L(e), u.z.a0()
	}

	function a5L(e) {
		4540 === e && b1.z.a5X(e);
		var a5E = ab.a5K();
		bx.close(), 6 === a5E ? b1.z.a5X(e) : bq.fD ? (u.y(), bq.xs(), b1.z.close(b1.z.fE, 3256)) : 8 === a5E && aE.a5Y(!0)
	}
	this.q = [], this.a5H = function(oW, e) {
		if (1 === oW && __fx.customLobby.isActive() && 6 !== ab.a5K() && __fx.customLobby.setActive(!1), console.log("socket close index " + oW + " error " + e), this.q.push(e), 4321 === e && (data = bm.z.zn(0)) && (console.log("Reset to: " +
				data.pc), bm.rr.px(105, data.pc), bm.rr.px(106, data.password)), 8 === u.vR && 0 === oW)
			if (4211 === e) a5I(e);
			else {
				if (bq.fD && (4495 === e || 4480 === e) && b1.z.fE !== oW) return void u.a5J();
				if (8 !== ab.a5K() && a5L(), 4480 === e) return bm.rr.zu(), void u.v(4, 0, new w(L(52), L(53), !0));
				var data = 0;
				u.a5O() && 10 === u.a5O().a5P && (data = u.a5O().a5P), u.v(4, data, new w(L(50), a5Q(e), !0))
			}
		else {
			data = ab.a5K();
			if (6 === data) {
				if (4211 === e) return void a5I(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560) && 4577 !== e && 4576 !== e) return void aa.a5R(oW)
			} else if (bq.fD) {
				if (oW !== b1.z.fE) return
			} else {
				if (8 === data) return void(oW !== b1.z.a5S || aE.lM || 1 !== aE.a49 || aE.hp || aO.a5T(L(51, [e])));
				if (!(4579 <= e && e <= 4589)) return
			}(4591 === e ? function(e) {
				mM(e), u.v(4, 5, new w("🤖 Bot Detection", "The algo thinks you are a bot. Please reload the game to fix this issue. An internet connection is required.", !0, [new x("⬅️ " + L(49), function() {
					u.a5J()
				}), new x("🔄 Reload", function() {
					a1.a2.a3()
				}, bE.qi)]))
			} : a5V)(e)
		}
	}, this.a5W = function(e) {
		this.q.push(e), 8 === ab.a5K() ? aE.lM || 1 !== aE.a49 || aO.a5T(L(51, [e])) : a5V(e)
	}, this.t = function() {
		this.q.push(3268), mM(3268)
	}
}

function dD() {
	var a5Z, a5a, a5b = -15e3,
		a5c = !1;

	function hu(e) {
		a5w() || (a5c = !0, a5x(e, 1), b1.z.a5y(b1.z.a5S), a5z(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5l(e) {
		a5b = bi.eg, a5x(e, 1), b1.z.a5y(b1.z.a5S), 0 < e.touches.length && (a5Z = Math.floor(i.l * e.touches[0].clientX), a5a = Math.floor(i.l * e.touches[0].clientY), av.a5l(e) || a5z(a5Z, a5a))
	}

	function a5z(fn, fp) {
		u.hu(fn, fp), 0 === aE.a49 ? ab.hu(fn, fp) : bF.a60(fn, fp) || bh.hu(fn, fp) || aY.hu(fn, fp) || aM.a61(fn, fp) || aQ.hu(fn, fp) || 0 <= aN.hu(fn, fp) || ax.hu(fn, fp) || bM.a62(fn, fp) || aM.a63(fn, fp)
	}

	function a5h(e) {
		a5w() || (a5c = !0, a5x(e, 1), a64(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY)))
	}

	function a5m(e) {
		a5b = bi.eg, a5x(e, 1), 0 < e.touches.length && (a5Z = Math.floor(i.l * e.touches[0].clientX), a5a = Math.floor(i.l * e.touches[0].clientY), av.a5m(e) || a64(a5Z, a5a))
	}

	function a64(fn, fp) {
		bM.ty() || (bM.hl = fn, bM.hm = fp), u.a5h(fn, fp), 0 === aE.a49 ? ab.a5h(fn, fp) : (bW.hn(fn, fp), bh.a5h(fn, fp) || (aN.a5h(fn, fp), aM.iT() ? aM.a5h(fn, fp) : aS.hv ? aS.a5h(fn) && (bi.dy = !0) : (aW.a5h(fn, fp), aT.oA && aT.a5h(fn, fp) &&
			(bi.dy = !0))))
	}

	function a5j(e) {
		a5w() || (a5x(e, 1), a65(), 0 === aE.a49 ? (ab.click(-1024, -1024), aU.reset()) : (aW.a66(-1024, -1024), aN.a5h(-1024, -1024), aS.a67(), aT.oA = !1))
	}

	function a5i(e) {
		a5w() || (a5x(e, 1), a68(Math.floor(i.l * e.clientX), Math.floor(i.l * e.clientY), 2 === e.button), bM.a5f && (bM.a5f = !1, e.preventDefault()))
	}

	function click(e) {
		a5w() || a5x(e, 1)
	}

	function a5n(e) {
		a5b = bi.eg, a5x(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aE.a49 ? aT.oA = !1 : av.a69() || (a68(a5Z, a5a, !1), bM.a5f && (bM.a5f = !1, e.preventDefault()))
	}

	function a5o(e) {
		a5b = bi.eg, a5x(e, 1), a68(a5Z, a5a, !1), bM.a5f && (bM.a5f = !1, e.preventDefault())
	}

	function a5p(e) {}

	function a5q(e) {}

	function a5r(e) {
		a5w() || a5x(e, 0)
	}

	function a68(fn, fp, a6A) {
		a65(), 0 === aE.a49 ? ab.click(fn, fp) : (aW.a66(fn, fp), bh.a66(), aS.a67(), aT.oA = !1, aM.click(fn, fp, a6A) ? bi.dy = !0 : aN.a5i(fn, fp))
	}

	function a65() {
		u.a65()
	}

	function a5k(e) {
		var fn, fp, deltaY;
		a5w() || (a5x(e, 1), b1.z.a5y(b1.z.a5S), fn = Math.floor(i.l * e.clientX), fp = Math.floor(i.l * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), u.a5k(fn, fp, deltaY), 0 === aE.a49 ? ab.a5k(fn, fp, deltaY) : aW.a5k(fn, fp,
			deltaY) || (aS.a6B(fn, fp) ? aS.a5k(deltaY) && (bi.dy = !0) : aT.a5k(fn, fp, deltaY)))
	}

	function a5s(e) {
		a5x(e, 0)
	}

	function a5x(e, id) {
		0 === id && u.iT() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== ab.a5K() && e.preventDefault()
	}

	function a5t(e) {
		if (__fx.keybindHandler(e.key)) return;
		a5w() || 0 < i.v8 || (e = e.code) && e.length && (ba.eq(e, 18) ? at.a6D(3) : ba.eq(e, 22) ? at.a6D(0) : ba.eq(e, 20) ? at.a6D(1) : ba.eq(e, 24) ? at.a6D(2) : ba.eq(e, 10) ? aS.a6E(31 / 32) : ba.eq(e, 8) ? aS.a6E(32 / 31) : ba.eq(e, 6) ? aS
			.a6E(7 / 8) : ba.eq(e, 4) ? aS.a6E(8 / 7) : ba.eq(e, 14) ? 0 !== aE.a49 && aT.a5k(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : ba.eq(e, 16) ? 0 !== aE.a49 && aT.a5k(Math.floor(i.j / 2), Math.floor(i.k / 2), 200) : ba.eq(e, 0) ?
			aE.a49 && bW.ho(0) : ba.eq(e, 2) ? aE.a49 && bW.ho(1) : ba.eq(e, 30) ? aE.a49 && bW.ho(2) : ba.eq(e, 26) ? aE.a49 && bW.iN() : ba.eq(e, 28) && aE.a49 && bW.iS())
	}

	function a5u(e) {
		if (!a5w() && !(0 < i.v8 || bi.eg < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && u.a6F(1) || "Space" === code && u.a6F(0))) return bq.fD ? bq.xy.a6F(code) ? void 0 : void("Escape" === code && bM.g9()) : void(8 !== ab.a5K() && ab.a6F(e) ? bi.dy = !0 : "Escape" === code ?
				bM.g9() : ba.eq(code, 18) ? at.a6G(3) : ba.eq(code, 22) ? at.a6G(0) : ba.eq(code, 20) ? at.a6G(1) : ba.eq(code, 24) ? at.a6G(2) : ba.eq(code, 12) ? bF.a6H(!aE.o8) : "Space" === code && aE.a49 && (aN.hr && aN.a6I(), aE.hp) &&
				bF.a6J(!1))
		}
	}

	function a5v() {
		"hidden" !== document.visibilityState && (bi.dy = !0)
	}

	function a5w() {
		return a5b + 15e3 > bi.eg
	}

	function resize() {
		i.a6L()
	}
	this.a5d = 0, this.a5e = "", this.a5f = !1, this.hl = 0, this.hm = 0, this.dr = function() {
		a5g.addEventListener("mousedown", hu, {
			passive: !1
		}), a5g.addEventListener("mousemove", a5h, {
			passive: !1
		}), a5g.addEventListener("mouseup", a5i, {
			passive: !1
		}), a5g.addEventListener("click", click, {
			passive: !1
		}), a5g.addEventListener("mouseleave", a5j, {
			passive: !1
		}), a5g.addEventListener("wheel", a5k, {
			passive: !1
		}), a5g.addEventListener("touchstart", a5l, {
			passive: !1
		}), a5g.addEventListener("touchmove", a5m, {
			passive: !1
		}), a5g.addEventListener("touchend", a5n, {
			passive: !1
		}), a5g.addEventListener("touchcancel", a5o, {
			passive: !1
		}), a5g.addEventListener("dragover", a5p), a5g.addEventListener("drop", a5q), a5g.addEventListener("dblclick", a5r), document.addEventListener("contextmenu", a5s), document.addEventListener("keydown", a5t), document.addEventListener(
			"keyup", a5u), document.addEventListener("visibilitychange", a5v), window.addEventListener("resize", resize)
	}, this.a62 = function(fn, fp) {
		return !!bF.hu(fn, fp) || !!(aW.hu(fn, fp) || aT.hu(fn, fp) || aS.hu(fn, fp) || aO.hu(fn, fp))
	}, this.a6K = a5w, this.ty = function() {
		return !a5c || 0 < a5b
	}, this.g9 = function() {
		if (!u.iT()) return 8 === ab.a5K() ? aE.o8 ? void bF.a6H(!1) : bh.iT ? void bh.a6I() : void aN.a6I() : void(7 !== ab.a5K() && 6 === ab.a5K() && aa.a6M());
		u.a6F(2)
	}
}

function c6() {
	this.t4 = new a6N, this.te = new a6O, this.h2 = new a6P, this.pY = new a6Q, this.p2 = new a6R, this.p1 = new a6S, this.canvas = new a6T, this.color = new a6U, this.a6V = new a6W, this.dr = function() {
		this.t4.zr()
	}
}

function a6O() {
	this.a0k = function(h) {
		h.fill(0)
	}, this.a6X = function(h) {
		for (var fg = h.length, aC = 0; aC < fg; aC++) h[aC] = []
	}, this.a6Y = function(a3H, a6Z) {
		for (var a3I = bR.gG, aC = 0; aC < 3; aC++) a3I[aC] = a6Z * a3H[aC];
		return a3I
	}, this.a6a = function(a3H, a3I, a6b) {
		for (var kH = 0, aC = 0; aC < 3; aC++) kH += Math.abs(a3H[aC] - a3I[aC]);
		return a6b <= kH
	}, this.a6c = function(a3H, a6d) {
		for (var aC = 0; aC < 3; aC++) a3H[aC] = bO.is(a3H[aC] + a6d, 0, 255);
		return a3H
	}, this.a6e = function(h, vj, vk) {
		vk = vk || h.length - 1;
		for (var a6f = 0, aC = vj = vj || 0; aC <= vk; aC++) a6f += h[aC];
		return a6f
	}, this.a6g = function(h, a6h) {
		for (var aC, a6i, fg = h.length, a6j = [], fz = fg - 1; 0 <= fz; fz--) {
			for (aC = a6i = 0; aC < fg; aC++) a6h(h[aC]) < a6h(h[a6i]) && (a6i = aC);
			fg--, a6j.push(h[a6i]), h[a6i] = h[fg], h.pop()
		}
		return a6j
	}, this.min = function(h) {
		var aC, g8, fg = h.length;
		if (0 === fg) return 0;
		for (g8 = h[0], aC = 1; aC < fg; aC++) g8 = Math.min(g8, h[aC]);
		return g8
	}, this.max = function(h) {
		var fg = h.length;
		if (0 === fg) return 0;
		for (var g8 = h[0], aC = 1; aC < fg; aC++) g8 = Math.max(g8, h[aC]);
		return g8
	}, this.a6k = function(h, g8) {
		for (var fg = h.length, h9 = 0, aC = 0; aC < fg; aC++) h9 += h[aC] > g8;
		return h9
	}, this.a6l = function(a6m, a6n, min) {
		for (var fg = a6n[0], aC = fg - 1; 0 <= aC; aC--) a6m[aC] < min && (a6m[aC] = a6m[--fg]);
		a6n[0] = fg
	}, this.a6o = function(h, fg, value) {
		for (var aC = 0; aC < fg; aC++) h[aC] -= value
	}, this.a6p = function(h) {
		for (var fg = h.length, aC = 0; aC < fg; aC++)
			if ("string" != typeof h[aC]) return !1;
		return !0
	}, this.a6q = function(pU, h, a6r) {
		h.fill(0);
		for (var vn = pU.split(","), fg = Math.min(vn.length, h.length), aC = 0; aC < fg; aC++) h[aC] = Math.min(parseInt(vn[aC]), a6r)
	}, this.a6s = function(pU, h, maxLength) {
		h.fill("");
		for (var vn = pU.split('"'), fg = Math.min(vn.length, 2 * h.length), iZ = 0, aC = 1; aC < fg; aC += 2) h[iZ++] = vn[aC].slice(0, maxLength)
	}, this.a6t = function(h, h9) {
		if (0 === h9) h.fill(0);
		else {
			var a6f = this.a6e(h),
				fg = h.length;
			if (0 === a6f) h.fill(bO.g7(h9, fg));
			else
				for (var aC = 0; aC < fg; aC++) h[aC] = bO.g7(h9 * h[aC], a6f);
			if (0 === (a6f = this.a6e(h))) h[1] = h9;
			else
				for (var iZ = 0; a6f++ < h9;) h[iZ = (iZ + 1) % fg] && h[iZ]++
		}
	}, this.a6u = function(h) {
		if (!h) return 0;
		var fg = h.length;
		if (0 === fg) return 0;
		for (var g8 = h[fg - 1], aC = fg - 2; 0 <= aC; aC--)
			if (h[aC] !== g8) return aC + 2;
		return 1
	}, this.a6v = function(h) {
		for (var a6f = 0, aC = 0; aC < h.length; aC++) a6f += h[aC].length;
		return a6f
	}, this.a6w = function(a6x) {
		for (var h = [], aC = 0; aC < a6x.length; aC++) h = h.concat(a6x[aC]);
		return h
	}, this.has = function(h, g8) {
		for (var fg = h.length, aC = 0; aC < fg; aC++)
			if (h[aC] === g8) return !0;
		return !1
	}
}

function a6T() {
	this.a2v = function(a6y, eP, a6z) {
		var ie = a6y.height,
			a70 = bD.t4.a0a(ie, ie),
			il = bD.t4.getContext(a70);
		return function(j, il, a6z) {
			il.fillStyle = a6z, il.beginPath(), il.arc(j / 2, j / 2, .47 * j, 0, 2 * Math.PI), il.fill()
		}(ie, il, a6z), il.drawImage(a6y, -eP * ie, 0), a70
	}, this.a72 = function(a73) {
		var il, ii, ie = a73.height;
		return a73.width === ie && (ii = (il = bD.t4.getContext(a73, !0)).getImageData(0, 0, ie, ie), bD.p1.a74(ii.data, ie, ie, .9), il.putImageData(ii, 0, 0)), a73
	}
}

function a6U() {
	this.a75 = function(g8) {
		return [g8 >> 12 & 63, g8 >> 6 & 63, 63 & g8]
	}, this.a76 = function(g8) {
		for (var h = this.a75(g8), aC = 0; aC < 3; aC++) h[aC] = ~~(4.05 * h[aC]);
		return h
	}, this.a77 = function(g8) {
		g8 = this.a76(g8);
		return bD.color.qD(g8[0], g8[1], g8[2])
	}, this.a78 = function(h) {
		for (var aC = 0; aC < 3; aC++) h[aC] = ~~(h[aC] / 4.04);
		return (h[0] << 12) + (h[1] << 6) + h[2]
	}, this.qD = function(eO, vn, g0) {
		return "rgb(" + eO + "," + vn + "," + g0 + ")"
	}, this.qF = function(eO, vn, g0, fz) {
		return "rgba(" + eO + "," + vn + "," + g0 + "," + fz.toFixed(3) + ")"
	}, this.u0 = function(eq) {
		for (var h = eq.split("(")[1].split(","), gF = bR.gF, aC = 0; aC < 3; aC++) gF[aC] = parseInt(h[aC]);
		return 4 === h.length ? gF[3] = 255 * parseFloat(h[3].slice(0, -1)) : gF[3] = 255, gF
	}, this.u1 = function(a79, fj) {
		for (var h = a79.slice(a79.indexOf("(") + 1, a79.indexOf(")")).split(","), gF = bR.gF, aC = 0; aC < 3; aC++) gF[aC] = bO.is(parseInt(h[aC].trim(), 10) + fj, 0, 255);
		return 3 === h.length ? this.qD(gF[0], gF[1], gF[2]) : (a79 = parseFloat(h[3].trim()), this.qF(gF[0], gF[1], gF[2], a79 = 0 === a79 ? .3 : a79))
	}, this.yS = function(a7A, a7B) {
		for (var kH = 0, aC = 0; aC < 3; aC++) kH += Math.abs(a7B[aC] - a7A[aC]);
		if (!(240 <= kH))
			for (aC = 0; aC < 3; aC++) a7B[aC] = a7A[aC] + (a7A[aC] < 128 ? 80 : -80)
	}, this.a7C = function(h) {
		for (var pU = "#", aC = 0; aC < 3; aC++) {
			var eO = h[aC].toString(16);
			pU += 1 === eO.length ? "0" + eO : eO
		}
		return pU
	}, this.a7D = function(pU) {
		var eO, vn;
		return pU.length < 7 ? bE.qC : (eO = parseInt(pU.slice(1, 3), 16), vn = parseInt(pU.slice(3, 5), 16), pU = parseInt(pU.slice(5, 7), 16), this.qD(eO, vn, pU))
	}
}

function a6R() {
	this.a7E = function(pU, font, maxWidth) {
		if (font && (ym.font = font), ym.measureText(pU).width <= maxWidth) return pU;
		for (var aC = pU.length - 1; 1 <= aC; aC--)
			if (pU = pU.substring(0, aC), ym.measureText(pU + "...").width <= maxWidth) return pU + "...";
		return "..."
	}
}

function a6W() {
	var a7G = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a7H = function(eg) {
		var a7J, pU = new Date(eg.getTime() - 6e4 * eg.getTimezoneOffset()).toUTCString();
		return pU.length < 12 || (pU = pU.substring(5, pU.length), 0 === (eg = eg.getTimezoneOffset())) ? pU : (a7J = (eg < 0 ? "+" : "-") + bO.g7(Math.abs(eg), 60), 0 == (eg = Math.abs(eg) % 60) ? pU + a7J : pU + a7J + ":" + (eg < 10 ? "0" :
			"") + eg)
	}, this.a7K = function(eg) {
		var pU = eg.toUTCString();
		return pU.length < 12 ? pU : function(eg) {
			return a7G[eg.getUTCDay()]
		}(eg) + ", " + pU.substring(5, pU.length - 4)
	}
}

function a6N() {
	var a7M = null,
		a7W = (this.a3C = 0, this.zr = function() {
			var g8 = bm.buffer.data[5].value;
			a7M = "px " + g8, "system-ui" !== g8 && (a7M += ", system-ui"), this.a3C = ic(32, 32, ["a", "b", "m"], 200, a7M)
		}, this.a0a = function(j, k) {
			var eq = document.createElement("canvas");
			return eq.width = j, eq.height = k, eq
		}, this.getContext = function(canvas, alpha) {
			return canvas.getContext("2d", {
				alpha: alpha
			})
		}, this.getImageData = function(p2, j, k) {
			return p2.getImageData(0, 0, j, k)
		}, this.t7 = function(type, size) {
			return size = size.toFixed(2), 0 === type ? size + a7M : 1 === type ? "bold " + size + a7M : 2 === type ? "lighter " + size + a7M : 3 === type ? "italic " + size + a7M : 4 === type ? "oblique " + size + a7M : 5 === type ?
				"small-caps " + size + a7M : "small-caps bold " + size + a7M
		}, this.textAlign = function(il, id) {
			il.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
		}, this.textBaseline = function(il, id) {
			il.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
		}, this.t9 = function(e, code, color) {
			e.classList.toggle("fx-line", !color), e.classList.toggle("fx-box", !code || 5 === code);
			color = this.tf(bf.v2) + " solid " + (color || bE.qL);
			5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
		}, this.vp = function(e, fn, fp, j, k) {
			e = e.style;
			e.left = this.vq(fn), e.top = this.vq(fp), e.width = this.vq(j), e.height = this.vq(k)
		}, this.tY = function(g8) {
			return 1 + g8 * a1.a2.it()
		}, this.t5 = function(oH, hF) {
			return oH * this.tY(void 0 === hF ? .5 : hF) * i.iu / i.l
		}, this.vo = function(oH, hF) {
			return oH * this.tY(void 0 === hF ? .5 : hF) * i.iu
		}, this.vV = function(oH, hF, a7N) {
			return this.tY(hF) * Math.min(oH * i.iu, a7N * i.j) / i.l
		}, this.tf = function(g8) {
			return g8.toFixed(1) + "px"
		}, this.vq = function(g8) {
			return this.yE(g8).toFixed(1) + "px"
		}, this.yE = function(g8) {
			return g8 / i.l
		}, this.a7P = function(a7Q) {
			for (var pU = "<ul>", fg = a7Q.length, aC = 0; aC < fg; aC++) pU += "<li>" + a7Q[aC][0] + ": <a href='" + a7Q[aC][1] + "' target='_blank'>" + a7Q[aC][0] + "</a></li>";
			return pU += "</ul>"
		}, this.a7R = function(a7S) {
			return "<a href='" + a7S + "' target='_blank'>" + a7S + "</a>"
		}, this.a7T = function(e) {
			navigator.clipboard && navigator.clipboard.writeText(e.value)
		}, this.yQ = function(e) {
			var eh = e.textContent;
			bD.pY.a7U(eh, "✔") || (1 === eh.length ? e.textContent = "✔" : e.textContent = eh + " ✔", setTimeout(function() {
				e.textContent = eh
			}, 500))
		}, this.measureText = function(pU) {
			return ym.measureText(pU).width
		}, this.vf = function(a7V) {
			a7V.style.overflowX = "auto", a7V.style.overflowY = "hidden", a7V.style.whiteSpace = "nowrap", a7V.addEventListener("wheel", function(e) {
				Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.vs = this.scrollLeft, e.preventDefault())
			}), a7V.addEventListener("scroll", function() {
				this.vs = this.scrollLeft
			})
		}, -1e4);

	function a7a(a7Y) {
		performance.now() - a7W < 600 || (a7W = performance.now(), a7Y())
	}
	this.wU = function(e, a7X, a7Y) {
		a7X && (e.onclick = function() {
			performance.now() - a7W < 600 || a7X()
		}), e.addEventListener("contextmenu", function(a7Z) {
			a7Z.preventDefault(), a7a(a7Y)
		}), e.addEventListener("touchstart", function(a7Z) {
			2 === a7Z.touches.length && (a7Z.preventDefault(), a7a(a7Y))
		}, {
			passive: !1
		})
	}
}

function a6P() {
	this.hs = function(a5E) {
		return 0 === a5E ? 1 === aE.a49 && aE.i5 : 1 === a5E ? 1 === aE.a49 && !aE.i5 : 2 === aE.a49
	}, this.ht = function(player) {
		return 0 !== ah.ne[player] && 2 !== ah.a7b[player]
	}, this.a7c = function(player) {
		return player === aE.fQ && 2 !== ah.a7b[player]
	}, this.lg = function(player, kB) {
		return player !== kB && (0 === bj.fe[player] || bj.fe[player] !== bj.fe[kB])
	}, this.mn = function() {
		return am.lY < 2 ? 0 : aE.ib ? 1 < bk.a7d() : ah.hU[md[1]]
	}, this.a7e = function() {
		var lY = am.lY;
		if (0 !== lY) {
			if (!aE.ib) return !this.kP(md[0]);
			for (var fe = bj.fe, la = bk.lb(), ld = am.ld, aC = lY - 1; 0 <= aC; aC--) {
				var hE = ld[aC];
				if (fe[hE] === la && !this.kP(hE)) return 1
			}
		}
		return 0
	}, this.a7f = function(player) {
		return player === aE.fQ
	}, this.a7g = function(kB, oH) {
		return ah.hi[aE.fQ] < oH * ah.hi[kB]
	}, this.kP = function(player) {
		return player >= aE.l2 || 2 === ah.a7b[player]
	}, this.m0 = function(player) {
		return 0 !== ah.ne[player]
	}, this.a3z = function(player) {
		return player < aE.l2
	}, this.sj = function(a7h, a7i) {
		return a7h !== a7i
	}, this.h5 = function(player, g8) {
		var min;
		return g8 = this.a7j(player, g8), ah.hi[player] += g8, ah.a7k[player] && (min = Math.min(ah.a7k[player], ah.hi[player]), ah.a7k[player] -= min, ah.hi[player] -= min), g8
	}, this.a7j = function(player, g8) {
		var a7l = ah.hi[player];
		return g8 = Math.min(g8, ah.hU[player] * aE.a7m - a7l), g8 = Math.min(g8, aE.a7n - a7l), Math.max(g8, 0)
	}, this.nA = function(player, jK, a7o, a7p) {
		var a7l = ah.hi[player],
			jK = bO.g7(a7l * (jK + 1), 1024),
			a7o = bO.g7(a7o * a7l, 1024),
			jK = Math.min(jK, a7l - a7o);
		return jK = b5.a7r(player, jK), bR.gD[0] = jK, bR.gD[1] = a7o, a7p <= jK
	}, this.sD = function(player, rv, ru) {
		var player = ah.hi[player],
			a7q = bO.g7(64 * player, 1024);
		return rv = Math.min(rv, player - a7q), rv = this.a7j(ru, rv), bR.gD[0] = rv, bR.gD[1] = a7q, 1 <= rv
	}, this.a7s = function(player, rv, ru) {
		var player = ah.hi[player],
			a7q = bO.g7(64 * player, 1024);
		return rv = Math.min(rv, player - a7q), this.a7j(ru, rv)
	}, this.sF = function(rv, ru) {
		return rv = this.a7j(ru, rv), bR.gD[0] = rv, bR.gD[1] = 0, 1 <= rv
	}, this.jJ = function(player, a7t) {
		return bO.g7(ah.hi[player] * (a7t + 1), 1024)
	}, this.a7u = function(player, a7o) {
		a7o = bO.g7(a7o * ah.hi[player], 1024);
		bR.gD[1] = a7o, ah.hi[player] -= a7o
	}, this.h3 = function(player, a7v) {
		var gR, gT, g0 = ah.hi[player];
		return a7v <= g0 ? ah.hi[player] -= a7v : (ah.hi[player] = 0, gT = ah.a7k[player] + (gR = 5 * ((g0 = a7v - g0) >> 2)), bg.h6(player, gR - g0, 12), gT <= aE.a7w ? ah.a7k[player] = gT : (ah.a7k[player] = aE.a7w, bg.h6(player, gT - aE.a7w,
			18))), a7v
	}, this.mE = function(player, jK) {
		var hi = ah.hi,
			a7l = hi[player],
			jK = bO.g7(a7l * (jK + 1), 1024),
			a7q = Math.max(bO.g7(a7l, 10), 1e3);
		return (jK = Math.min(jK, a7l - a7q)) < 0 ? (hi[player] = 0, a7q = Math.min(1e3, a7l + aE.a7w - ah.a7k[player]), bR.gD[1] = a7q, ah.a7k[player] += a7q - a7l, 0) : (bR.gD[1] = a7q, jK = b5.a7r(player, jK), hi[player] -= a7q + jK, b5.a7x(
			player, jK), jK)
	}, this.nC = function(player) {
		var iQ = bR.gD[0];
		ah.hi[player] -= iQ + bR.gD[1], b5.a7x(player, iQ)
	}, this.sk = function(player, kB) {
		return (kB = Math.min(kB, aE.fd)) < aE.fd && 0 === ah.ne[kB] && (kB = aE.fd), (bR.fc[0] = kB) === aE.fd || bw.fZ(player, kB)
	}, this.sn = function(player, ru) {
		return 0 !== ah.ne[ru] && !bw.fZ(player, ru)
	}, this.a7y = function(player, a7z) {
		for (var hE, fg = am.lY, a80 = 0, a81 = md, aC = 0; aC < fg; aC++)
			if (hE = a81[aC], !this.kP(hE)) {
				if (player === hE) return !0;
				if (++a80 > a7z) return !1
			} return !1
	}, this.mZ = function(hE) {
		var a82 = aE.ib ? bk.lZ() : ah.hU[md[0]];
		return a82 >= bO.g7(hE * aE.km, 100)
	}, this.a83 = function(g8, min, max) {
		return Math.floor(bO.is(isNaN(g8) ? 0 : Number(g8), min, max))
	}
}

function a6S() {
	this.a84 = function(canvas, a85, a86) {
		var j = canvas.width,
			k = canvas.height,
			eq = bD.t4.a0a(j, k),
			il = bD.t4.getContext(eq, !0),
			canvas = (il.drawImage(canvas, 0, 0), il.getImageData(0, 0, j, k));
		return a85(canvas.data, j, k, a86), il.putImageData(canvas, 0, 0), eq
	}, this.a87 = function(a0l, j, k) {
		for (var fn = j - 1; 0 <= fn; fn--)
			for (var fp = k - 1; 0 <= fp; fp--) {
				var aC = 4 * (fn + fp * j);
				a0l[3 + aC] = a0l[aC], a0l[aC] = a0l[1 + aC] = a0l[2 + aC] = 255
			}
	}, this.a88 = function(a0l, j, k) {
		for (var fn = j - 1; 0 <= fn; fn--)
			for (var fp = k - 1; 0 <= fp; fp--) {
				var aC = 4 * (fn + fp * j);
				a0l[1 + aC] > a0l[2 + aC] + 10 && (a0l[3 + aC] = a0l[aC], a0l[1 + aC] = a0l[2 + aC])
			}
	}, this.a89 = function(a0l, j, k) {
		for (var fn = j - 1; 0 <= fn; fn--)
			for (var fp = k - 1; 0 <= fp; fp--) {
				var fz, g8, aC = 4 * (fn + fp * j);
				a0l[1 + aC] > a0l[2 + aC] + 10 && (g8 = 0 < (fz = 255 - a0l[1 + aC] + a0l[2 + aC]) ? Math.min(255, Math.round(255 * a0l[2 + aC] / fz)) : 0, a0l[aC] = a0l[1 + aC] = a0l[2 + aC] = g8, a0l[3 + aC] = fz)
			}
	}, this.a8A = function(a0l, j, k, a86) {
		for (var gap = Math.floor(Math.min(j, k) * a86), fn = 0; fn < j; fn++)
			for (var aC, fp = 0; fp < k; fp++)(fn < gap || fp < gap || j - gap <= fn || k - gap <= fp) && (a0l[3 + (aC = 4 * (fn + fp * j))] = 255 - 255 * (a0l[1 + aC] - a0l[aC]) / (255 - a0l[aC]))
	}, this.a8B = function(a0l, j, k, a86) {
		for (var fn = j - 1; 0 <= fn; fn--)
			for (var fp = k - 1; 0 <= fp; fp--) {
				var aC = 4 * (fn + fp * j);
				a0l[aC] = a86[0], a0l[1 + aC] = a86[1], a0l[2 + aC] = a86[2]
			}
	}, this.a8C = function(a0l, j, k, a86) {
		for (var gap = Math.floor(j * a86), fn = 0; fn < j; fn++)
			for (var aC, fp = 0; fp < k; fp++)(fn < gap || fp < gap || j - gap <= fn || k - gap <= fp) && (a0l[aC = 4 * (fn + fp * j)] = a0l[1 + aC] = a0l[2 + aC] = 0)
	}, this.a8D = function(a0l, j, k) {
		for (var fp, aC, fn = j - 1; 0 <= fn; fn--)
			for (fp = k - 1; 0 <= fp; fp--) 200 < a0l[1 + (aC = 4 * (fn + fp * j))] && a0l[1 + aC] - 20 > a0l[aC] && a0l[1 + aC] - 20 > a0l[2 + aC] ? a0l[aC] + a0l[2 + aC] < 40 ? a0l[3 + aC] = 0 : (a0l[3 + aC] = a0l[aC], a0l[aC] = 255, a0l[1 +
				aC] = 255, a0l[2 + aC] = 255) : a0l[aC] < 50 && a0l[1 + aC] < 50 && a0l[2 + aC] < 50 && (a0l[aC] + a0l[1 + aC] + a0l[2 + aC] < 50 ? a0l[3 + aC] = 180 : a0l[3 + aC] = 180 + Math.floor(75 * (a0l[aC] + a0l[1 + aC] + a0l[2 + aC] -
				50) / 100))
	}, this.a8E = function(a0l, j, k) {
		for (var fp, aC, fn = j - 1; 0 <= fn; fn--)
			for (fp = k - 1; 0 <= fp; fp--) a0l[1 + (aC = 4 * (fn + fp * j))] > a0l[aC] + 20 && a0l[1 + aC] > a0l[2 + aC] + 20 && a0l[aC] + a0l[2] < 40 && (a0l[3 + aC] = 255 - a0l[1 + aC], a0l[aC] = a0l[1 + aC] = a0l[2 + aC] = a0l[aC])
	}, this.a74 = function(a0l, j, k, a86) {
		for (var eO = j >> 1, fn = 0; fn < j; fn++)
			for (var fp = 0; fp < k; fp++) Math.sqrt((fn - eO) * (fn - eO) + (fp - eO) * (fp - eO)) > a86 * eO && (a0l[4 * (fn + fp * j) + 3] = 0)
	}
}

function a6Q() {
	var a8F = {
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
		a8G = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.uT = function(es) {
		return es.replace(a8G, function(match) {
			return a8F[match] || match
		})
	}, this.a3S = function(g8) {
		var aC, a8H, a8I, a8J, a8K;
		if (g8 < 0) return "-" + this.a3S(Math.abs(g8));
		if (g8 < 1e3) return g8.toString();
		for (a8H = Math.floor(Math.log(g8 + .5) / Math.log(10)) + 1, a8I = Math.floor((a8H - 1) / 3), a8K = (a8J = g8.toString()).substring(a8H - 3, a8H), aC = 1; aC < a8I; aC++) a8K = a8J.substring(a8H - 3 * (aC + 1), a8H - 3 * aC) + " " + a8K;
		return a8J.substring(0, a8H - 3 * a8I) + " " + a8K
	}, this.a8L = function(hE, a8H) {
		return hE.toFixed(a8H) + "%"
	}, this.a8M = function(g8, a8N) {
		return g8.toFixed(bO.is(Math.floor((void 0 === a8N ? 3 : a8N) - Math.log10(Math.max(g8, 1))), 0, 8))
	}, this.a8O = function(g8, oH, a8H) {
		return (g8 * oH).toFixed(a8H)
	}, this.pm = function(username) {
		var fk, fV = username.indexOf("[");
		return !(fV < 0) && 1 < (fk = username.indexOf("]")) - fV && fk - fV <= 8 ? username.substring(fV + 1, fk).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.pm;
	this.a8P = function(pU) {
		for (var fz = Math.floor(.5 * pU.length + .5), oN = Math.floor(.5 * (fz - 1)), aC = 0; aC < oN; aC++)
			for (var g0 = -1; g0 < 2; g0 += 2) {
				var eq = fz + g0 * aC;
				if (" " === pU[eq]) return [this.a4r(pU.substring(0, eq)), this.a8Q(pU.substring(eq))]
			}
		return [pU.substring(0, fz), pU.substring(fz)]
	}, this.a8Q = function(pU) {
		for (var fg = pU.length, aC = 0; aC < fg; aC++)
			if (" " !== pU[aC]) return pU.substring(aC);
		return pU
	}, this.a4r = function(pU) {
		for (var aC = pU.length - 1; 0 <= aC; aC--)
			if (" " !== pU[aC]) return pU.substring(0, aC + 1);
		return pU
	}, this.a8R = function(pU, a8S) {
		return pU.split("(")[0] + "(🧈 " + a8S.toFixed(2) + ")"
	}, this.startsWith = function(pU, a8T) {
		return pU.substring(0, a8T.length) === a8T
	}, this.a7U = function(pU, a8T) {
		var fg = pU.length;
		return pU.substring(fg - a8T.length, fg) === a8T
	}, this.a8U = function(h, a8V, a8W) {
		var pU = "",
			fg = h.length - 1;
		a8W = a8W || "";
		for (var aC = 0; aC < fg; aC++) pU += a8W + h[aC] + a8W + ",", (aC + 1) % a8V == 0 && (pU += "\n");
		return pU += a8W + h[fg] + a8W
	}, this.a8X = function(pU, a3H, a3I) {
		return pU.replace(new RegExp(a3H, "g"), a3I)
	}
}

function a8Y() {
	this.ep = function(player, fS) {
		aJ.a25(player, bP.fo(fS), bP.fq(fS)) && (bi.dy = !0), aE.lM && this.el()
	}, this.el = function() {
		aE.i5 = !1;
		for (var aC = 0; aC < aE.l2; aC++) 0 !== ah.ne[aC] && 0 === ah.hU[aC] && aJ.a2C(aC);
		0 !== ah.ne[aE.fQ] ? (bg.na[7] = ah.hU[aE.fQ], bg.na[8] = ah.hi[aE.fQ], aS.a8Z(), aX.a8a(), aE.hp || aE.hq || aI.nz(ah.ja[aE.fQ] - 5, ah.jc[aE.fQ] - 5, ah.jb[aE.fQ] + 5, ah.jd[aE.fQ] + 5), aw.dr()) : aY.show(!1, !1, !1, !0), aO.a8b(18),
			ag.a8c(), ag.nQ(!0), bS.z.a8d(), aM.uU(), aE.si = null, be.a8e = !0, be.a8f(), aE.lM && a1.a2.setState(1)
	}
}

function c8() {
	this.fd = 512, this.a7n = 15e8, this.a8g = 1e9, this.a7w = 5e4, this.a8h = 512, this.h0 = 2, this.fQ = 0, this.l2 = 0, this.a4C = 0, this.lO = 0, this.a4B = 0, this.a1G = 512, this.a1L = 512, this.a7m = 150, this.lM = !0, this.hp = 0, this.hq =
		0, this.a49 = 0, this.km = 0, this.o8 = !1, this.i5 = 0, this.a8i = 0, this.ib = !1, this.a1N = 0, this.a1O = 0, this.lK = 0, this.a2c = 0, this.si = null, this.a4T = new a2Q, this.a8j = 30, this.a46 = 0, this.a4E = 0, this.a4S = 0, this
		.a41 = 0, this.data = new a8k, this.a8l = new a8m, this.a8n = 0, this.a8o = "", this.a4c = -1, this.a8p = function() {
			this.a4c = -1, bX.turnstile.close(), bR.dr(), bU.dr(), bu.clear(), this.a4C = this.l2 = this.data.humanCount, this.lM = 1 === this.a4C && !__fx.customLobby.isActive(), this.o8 = !1, this.hp = this.data.isReplay, this.hq = this.data.a8q,
				this.lK = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a2c = this.data.isContest, this.ib = this.lK < 7 || 9 === this.lK, this.lK = 10 === this.lK &&
				this.lM ? 7 : this.lK, this.lK = 8 === this.lK && 2 !== this.l2 ? 7 : this.lK, b0.dr(), this.a1N = this.data.numberTeams, this.data.teamPlayerCount ? this.a1O = +(0 < this.data.teamPlayerCount[0]) : (this.a1O = 0, this.ib && this
					.lM && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.a1N + 1), aE.a8l.a8r())), this.a8j = this.l2 <= 2 ? 30 : this.l2 <= 50 ? 40 : 50, this.a8i = this.i5 = __fx.customLobby.isActive() ?
				__fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.si = this.i5 ? new a8Y : null, this.a1G = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this
				.l2) : 1 === m.e2 ? this.a1G = this.l2 : this.a1G = this.data.playerCount,
				this.a1L = this.a1G, this.lO = this.a1G - this.l2, this.a4B = 0, this.fQ = this.data.selectedPlayer, this.a46 = 0, this.a4E = 0, this.a4S = 0, this.a41 = 0, az.a8s(this.data.spawningSeed), af.dr(), ah.dr(), ao.dr(), aj.a8t(), bB.rl
				.sW = [], bB.i7.ro = 1, __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bj.dr(), this.a49 = 1, bg.dr(), a8u(), ad.ds(), aq.a8v(), be.dr(), ad.dr(), au.dr(),
				bP.dr(), bQ.dr(), ap.dr(), bY.a8w(), aF.dr(), aj.a8(), aJ.dr(), aK.dr(), am.a8x(), bC.dr(), bk.dr(), bS.dr(), bh.dr(), a8y.putImageData(a8z, 0, 0), aW.dr(), aT.dr(), aS.dr(), bF.dr(), ax.dr(), aV.dr(), aX.dr(), aN.dr(), aR.dr(), aO
				.dr(), aQ.dr(), aM.dr(), aY.dr(), aG.dr(), aH.dr(), gj(), ae.dr(), ag.dr(), b5.dr(), b6.dr(), b2.dr(), b8.dr(), b9.dr(), this.a4T.dr(), bi.a8w(), aI.ny(), 0 === ah.ne[aE.fQ] && aY.show(!1, !0), ag.nQ(!0), aw.dr(), bi.dy = !0, this
				.hp || this.lM && this.i5 || a1.a2.setState(1), this.a8n = 0
		}, this.a5Y = function(ef) {
			bC.sg.a91.length ? this.a8o = bC.sg.a91 : this.a8o = bC.a92.a3d(), __fx.replayHistory.save(this.a8o), !1 === __fx.customLobby.isActive() && b1.z.a93(), bu.clear(), this.a49 = 0, bi.a94(), a1.a2.setState(0), ab.setState(0), __fx
				.customLobby.isActive() || bX.eX.show(ef), __fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a8n ? u.z.a95(0) : 1 === this.a8n ? u.v(19) : u.v(5, 5)
		}, this.a96 = function() {
			return this.hp ? aN.hr || !bF.a97 : this.lM && (aN.hr || this.i5)
		}, this.a98 = function() {
			return 1 === this.a49 && !this.i5
		}
}

function a8k() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.a8q = 0, this.a99 = 0, this.elo = null, this.colorsType = 0, this
		.colorsPersonalized = 1, this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData =
		null, this.spawningType = 0, this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this
		.aIncomeData = null, this.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null,
		this.a9A = null
}

function a8m() {
	this.a8r = function() {
		var a9B = aE.data;
		bD.te.a6t(a9B.teamPlayerCount, a9B.playerCount), a9B.numberTeams = bD.te.a6k(a9B.teamPlayerCount, 0), a9B.teamPlayerCount[0] && a9B.teamPlayerCount[7] && (a9B.teamPlayerCount[7] = 0, this.a8r())
	}, this.a9C = function() {
		var a9B = aE.data;
		a9B.mapType < 2 ? bV.a8(bV.a9D(a9B), a9B.mapSeed) : bV.a9E(a9B.canvas)
	}, this.a9F = function() {
		var a9B = aE.data;
		a9B.colorsData || (a9B.colorsData = new Uint32Array(1)), 0 === a9B.gameMode && (a9B.colorsData[0] = bm.z.zp()), a9B.selectableName && (a9B.playerNamesData || (a9B.playerNamesData = new Array(1)), a9B.playerNamesData[0] = bm.buffer.data[
			122].value), a9B.a9A = new Uint32Array(1), a9B.a9A[0] = bJ.f7.f8(bm.buffer.data[105].value, 5)
	}, this.a9G = function() {
		aE.data = new a8k
	}
}

function dj() {
	var a9H = [];
	this.sG = function(player, ru, a9I, a9J) {
		player === aE.fQ || ru === aE.fQ || !a9J && bD.h2.kP(player) || bD.h2.kP(ru) || this.a2d(ah.a2e[player] + " supported " + ah.a2e[ru] + " with " + bD.pY.a3S(a9I) + " ressource" + (1 === a9I ? "." : "s."))
	}, this.a2d = function(pU, s5) {
		pU = {
			eg: aX.a9L(),
			pU: pU,
			s5: s5
		};
		a9H.push(pU), 30 === u.vR && u.a5O().a2d(pU)
	}, this.clear = function() {
		a9H = [];
		var vn = u.a9M(30);
		vn && vn.clear()
	}, this.a9N = function() {
		return a9H
	}
}

function dc() {
	this.a39 = 0, this.gap = 0, this.v2 = 0, this.tc = 0, this.dr = function() {
		this.resize()
	}, this.resize = function() {
		this.a39 = .0022 * bD.t4.tY(.5) * i.iu, this.v2 = this.a39 / i.l, this.gap = Math.max(Math.floor((a1.a2.it() ? .0114 : .01296) * i.iu), 2), this.tc = this.gap / i.l
	}
}

function db() {
	this.a9O = function() {
		return a1.a2.it() ? 2 : 1
	}
}

function cJ() {
	var p5, fn, fp, a9P, a9Q, a9R, eg, a9S, a9T, a9U, a9V, gap, zoom, sP, a9W;

	function a9k(mH, mI, fK) {
		ad.fb(fK) || -1 === (mH = bQ.lr.a9t(mH, mI)) ? aO.a9s(fK) : aO.a9u(mH)
	}

	function a9g(a9S) {
		for (var aC = sP.length - 1; 0 <= aC; aC--)
			if (sP[aC] === a9S) return 1
	}

	function a9e(a9b) {
		var aC, fg;
		if (-1 !== a9b)
			for (fg = p5.length, aC = 0; aC < fg; aC++)
				if (p5[aC].iT && p5[aC].fn + 1 === a9b % 4 && p5[aC].fp + 1 === a9b >> 2) return aC;
		return -1
	}

	function a9c(mH, mI) {
		var vn = gap / 2;
		return mH < fn - a9P - 3 * vn || fn + 3 * a9P + 5 * vn < mH || mI < fp - a9P - 3 * vn || fp + 2 * a9P + 3 * vn < mI ? -1 : 4 * (mI < fp - vn ? 0 : mI < fp + a9P + vn ? 1 : 2) + (mH < fn - vn ? 0 : mH < fn + a9P + vn ? 1 : mH < fn + 2 * a9P +
			3 * vn ? 2 : 3)
	}
	this.a9X = function() {
		var aC, g0, a9a = [bE.ql, bE.r1, bE.qJ, bE.rS, bE.rE];
		for (p5 = new Array(10), aC = 0; aC < 10; aC++) p5[aC] = {
			id: aC,
			iT: !1,
			lz: 0,
			canvas: [],
			fn: 0,
			fp: 0
		};
		for (p5[0].colors = [0, 1, 2, 3], p5[0].fn = 0, p5[0].fp = 0, p5[1].colors = [1, 4], p5[1].fn = 1, p5[1].fp = 0, p5[2].colors = [0, 1], p5[2].fn = -1, p5[2].fp = 0, p5[3].colors = [0], p5[3].fn = 0, p5[3].fp = 0, p5[4].colors = [0, 2],
			p5[4].fn = 1, p5[4].fp = 1, p5[5].colors = [3], p5[5].fn = 0, p5[5].fp = -1, p5[6].id = 20, p5[6].colors = [0], p5[6].fn = 1, p5[6].fp = -1, p5[7].id = 21, p5[7].colors = [0], p5[7].fn = 0, p5[7].fp = 1, p5[8].id = 16, p5[8]
			.colors = [0], p5[8].fn = 0, p5[8].fp = 0, p5[9].id = 10, p5[9].colors = [4], p5[9].fn = 2, p5[9].fp = 0, aC = 0; aC < 10; aC++)
			for (g0 = 0; g0 < p5[aC].colors.length; g0++) p5[aC].canvas.push(function(id, a6z) {
				if (id < 20) return bD.canvas.a2v(ac.get(3), id, a6z);
				var a6z = ac.get(3).height,
					a70 = bD.t4.a0a(a6z, a6z),
					il = bD.t4.getContext(a70);
				20 === id ? il.drawImage(ac.get(18), 0, 0) : 21 === id && ak.a0l.a3A(ak.q3.a2z + ak.q3.a3G, il, 0, 0, a6z);
				return a70
			}(p5[aC].id, a9a[p5[aC].colors[g0]]))
	}, this.a9Z = function() {
		return p5
	}, this.dr = function() {
		sP = [], fn = fp = eg = 0, a9Q = a9R = -1e3, this.resize()
	}, this.resize = function() {
		a9P = Math.floor((a1.a2.it() ? .075 : .0468) * i.iu), zoom = a9P / ac.get(3).height, gap = Math.floor(a9P / 3)
	}, this.a61 = function(mH, mI) {
		return !!this.iT() && (bi.dy = !0, !!ak.a0l.hu(mH, mI, a9T) || (mH = function(mH, mI) {
			a9R = a9Q = -1e3;
			var a9d = a9e(a9c(mH, mI));
			if (-1 === a9d) return 0;
			if (1 !== p5[a9d].colors[p5[a9d].lz])
				if (5 === a9d) {
					if (! function() {
							var eh = performance.now();
							a9W + 4e3 < eh && (sP = []);
							a9W = eh
						}(), a9g(a9S)) return 1;
					sP.push(a9S), 16 < sP.length && sP.shift()
				} else if (6 === a9d) {
				for (var aC = sP.length - 1; 0 <= aC; aC--) 0 === ah.ne[sP[aC]] && sP.splice(aC, 1);
				0 < sP.length && (b6.a9h(1, sP, !0) && bB.h2.sO(sP, a9S), sP = [])
			} else if (2 === a9d) ao.iL(a9S) && bB.i7.rt(aS.iB(), a9S);
			else if (3 === a9d) aE.i5 && bB.i7.i8(a9U);
			else if (0 === a9d)
				if (0 === p5[0].lz) {
					if (aE.a8i && aX.a9L() < 350) return 1;
					bY.a9i(4), bB.i7.iE(aS.iB(), a9S)
				} else b2.iF(a9S, aS.iB());
			else if (1 === a9d) bB.i7.iJ(aS.iB(), a9U);
			else if (9 === a9d) bB.i7.iM(aS.iB());
			else {
				if (7 === a9d) return bY.a9i(0), ak.a0l.show(mH, mI), 2;
				if (4 === a9d) b6.a9h(0, [a9S], !0) && bB.h2.sL(a9S);
				else {
					if (8 !== a9d) return 0;
					bB.i7.iA(aS.iB(), a9V, a9S)
				}
			}
			return 1
		}(mH, mI), this.uU(), 2 === mH && (ak.a0l.iT = !0), 0 < mH))
	}, this.a63 = function(mH, mI) {
		this.iT() || (a9Q = mH, a9R = mI, eg = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bP.hx(mouseX),
			coordY = bP.hz(mouseY),
			point = bP.fW(bP.g3(coordX, coordY));
		bP.i0(coordX, coordY) && a9k(mouseX, mouseY, point)
	}, this.click = function(mH, mI, a6A) {
		var hw = bP.hx(mH),
			hy = bP.hz(mI),
			fS = bP.g3(hw, hy),
			fK = bP.fW(fS),
			a9j = (a1.a2.it() ? .025 : .0144) * i.iu,
			eh = performance.now();
		return !(Math.abs(mH - a9Q) > a9j || Math.abs(mI - a9R) > a9j || eg + 500 < eh || (eg = eh, bM.ty() && (bM.hl = mH, bM.hm = mI, b8.el(1), b9.el(1)), !bP.i0(hw, hy))) && (a6A ? (a9k(mH, mI, fK), !1) : aN.hr || this.iT() || !bD.h2.ht(aE
			.fQ) || aE.hp || aE.hq ? (this.uU(), !1) : (aE.i5 ? 0 <= (a9U = bv.i6(fS)) && (p5[3].iT = !0) : 2 === aE.a49 ? ad.hG(fK) && (a9S = ad.fY(fK), bD.h2.kP(a9S) || (p5[0].iT = !0, p5[0].lz = 1, p5[7].iT = !0)) : (bQ.iK.iL(aE.fQ, fS) &&
				(p5[0].iT = !0, p5[0].lz = 1, p5[1].iT = !0, p5[1].lz = 0, p5[9].iT = !0, p5[9].lz = 0), bQ.iH.iI(aE.fQ, fS) && (p5[0].iT = !0, p5[0].lz = 1, p5[1].iT = !0, p5[1].lz = 1, a9U = bR.gI[7]), ad.fl(fK) ? (a9V = an.fH.fJ(
				fK)) && (a9j = bP.fW(a9V), p5[8].iT = !0, a9S = ad.fX(a9j) ? aE.fd : ad.fY(a9j)) : (ad.a2A(aE.fQ, fK) && (a9T = aE.fQ, p5[0].iT = !0, p5[0].lz = 1, p5[7].iT = !0), -1 !== (eh = bv.iC(fS)) && (ad.fX(eh << 2) ? (a9S = aE.fd,
					bw.iD(aE.fQ) ? (p5[0].iT = !0, p5[0].lz = 0) : ae.gn(aE.fQ) && (p5[0].iT = !0, p5[0].lz = 3)) : (a9S = ad.fY(eh << 2), p5[0].lz = 1, p5[5].iT = function(a9S) {
					return !bD.h2.kP(a9S) && !a9g(a9S) && b6.a9h(1, [a9S], !1)
				}(a9S), p5[7].iT || bD.h2.kP(a9S) || (a9T = a9S, p5[7].iT = !0), p5[4].iT = !bD.h2.kP(a9S) && !ag.a9o(a9S) && b6.a9h(0, [a9S], !1), p5[6].iT = function(a9S) {
					if (0 === sP.length) return !1;
					if (performance.now() > a9W + 4e3) return !(sP = []);
					return !a9g(a9S) && ! function(a9S) {
						var aC;
						if (aE.ib)
							for (aC = sP.length - 1; 0 <= aC; aC--)
								if (!bw.fZ(a9S, sP[aC])) return 1;
						return
					}(a9S)
				}(a9S), bw.fZ(a9S, aE.fQ) ? (bw.iG(aE.fQ, a9S) ? (p5[0].lz = 0, p5[0].iT = !0) : ae.gn(aE.fQ) && (p5[0].lz = 3, p5[0].iT = !0), p5[0].iT = this.a9q()) : (p5[2].iT = !0, ao.iL(a9S) ? p5[2].lz = 0 : p5[2].lz = 1,
					p5[0].iT = !0))))), this.a9l(mH, mI)))
	}, this.a9l = function(mH, mI) {
		return fn = mH - Math.floor(a9P / 2), fp = mI - Math.floor(a9P / 2), !!this.iT()
	}, this.a5h = function(mH, mI) {
		return !!this.iT() && (ak.a0l.iT ? !ak.a0l.a38(mH, mI) && (ak.a0l.iT = !1, bi.dy = !0) : function(un, mH, mI) {
			mH = a9c(mH, mI);
			if (0 <= a9e(mH)) return !1;
			if ((1 === mH || 6 === mH) && 0 <= a9e(2)) return !1;
			if ((6 === mH || 9 === mH) && 0 <= a9e(10)) return !1;
			return un.uU(), bi.dy = !0
		}(this, mH, mI))
	}, this.uU = function() {
		for (var aC = p5.length - 1; 0 <= aC; aC--) p5[aC].iT = !1, p5[aC].lz = 0;
		ak.a0l.iT = !1
	}, this.iT = function() {
		return this.a9q() || ak.a0l.iT
	}, this.a9q = function() {
		for (var fg = p5.length, aC = 0; aC < fg; aC++)
			if (p5[aC].iT) return !0;
		return !1
	}, this.yl = function() {
		if (this.iT())
			if (ak.a0l.iT) ak.a0l.yl();
			else {
				var aC, il = ym,
					g0 = p5,
					fg = g0.length,
					a9y = (a9P + gap) / zoom;
				for (il.imageSmoothingEnabled = !0, il.setTransform(zoom, 0, 0, zoom, fn, fp), aC = 0; aC < fg; aC++) g0[aC].iT && ym.drawImage(g0[aC].canvas[g0[aC].lz], g0[aC].fn * a9y, g0[aC].fp * a9y);
				il.imageSmoothingEnabled = !1, il.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cK() {
	var k, canvas, a9z, aA0, aA1, aA2 = -1;

	function aA3() {
		var aA4, p2 = canvas.getContext("2d", {
			alpha: !0
		});
		p2.clearRect(0, 0, k, k), p2.fillStyle = bE.qH, p2.fillRect(0, 0, k, k), 9 === aA0 && (p2.fillStyle = bE.qM, p2.fillRect(0, 0, k, k)), p2.fillStyle = bE.qL, __fx.utils.smoothFrame(p2, k, k) || (p2.fillRect(0, 0, k, 1), p2.fillRect(0, 0, 1,
			k), p2.fillRect(0, k - 1, k, 1), p2.fillRect(k - 1, 0, 1, k)), aA4 = .9 * k / ac.get(0).width, p2.imageSmoothingEnabled = !0, p2.setTransform(aA4, 0, 0, aA4, Math.floor((k - aA4 * ac.get(0).width) / 2), Math.floor((k - aA4 * ac.get(0)
			.height) / 2)), p2.drawImage(ac.get(0), 0, 0), p2.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aA7(mH, mI) {
		if (!aN.hr) return mH <= k + bf.gap && mI >= aS.fp ? 9 : -1;
		if (mH <= 4 * k + bf.gap) {
			if (mI >= aS.fp) return 0;
			if (mI >= aS.fp - k - aA1 * bf.gap) return 2
		} else if (mH <= 7 * k + bf.gap && mI >= aS.fp - k - aA1 * bf.gap) return 1;
		return -1
	}
	this.hr = !1, this.dr = function() {
		aA0 = -1, this.hr = !1, aA1 = a1.a2.it() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		k = aS.k, (canvas = document.createElement("canvas")).width = k, canvas.height = k, a9z = bD.t4.t7(1, (a1.a2.it() ? .5 : .45) * k), aA3()
	}, this.aA5 = function() {
		return !(1 !== aE.a49 || aE.i5 || (aE.hp ? !bF.a97 : this.hr && aE.lM))
	}, this.a6I = function() {
		this.hr = !this.hr, this.hr ? (bF.a6H(!1), aE.hp && bF.a97 && bF.a6J(!0), this.aA6(), 9 === aA0 && (aA0 = 0)) : (aA0 = -1, aA3(), !aE.lM || 1 !== aE.a49 || aE.i5 || aE.hp || a1.a2.setState(1)), bi.dy = !0
	}, this.aA6 = function() {
		(aE.lM || aE.hp) && 1 === aE.a49 && (aW.nQ(!0), aE.i5 || setTimeout(function() {
			be.a4L()
		}, 0), a1.a2.setState(0))
	}, this.hu = function(mH, mI) {
		return 0 <= (aA2 = aA7(mH, mI)) || !aN.hr || aE.lM || aE.hp || bh.iT || aN.a6I(), aA2
	}, this.a5h = function(mH, mI) {
		mH = aA7(mH, mI);
		mH !== aA0 && (aA0 = mH, this.hr || aA3(), bi.dy = !0)
	}, this.a5i = function(mH, mI) {
		mH = aA7(mH, mI);
		return -1 !== mH && aA2 === mH && (this.hr ? aE.o8 ? (0 <= mH && bF.a6H(!1), !aE.hp) : (0 === mH ? aE.a5Y() : 1 === mH ? this.a6I() : 2 === mH && u.v(1, 0), !0) : 9 === mH && (this.a6I(), !0))
	}, this.yl = function() {
		var j;
		this.hr ? (j = Math.floor(5.5 * k), ym.setTransform(1, 0, 0, 1, bf.gap, aS.fp), ym.fillStyle = bE.qH, ym.fillRect(0, 0, j, k), 0 === aA0 ? (ym.fillStyle = bE.qM, ym.fillRect(0, 0, 4 * k, k)) : 1 === aA0 && (ym.fillStyle = bE.qM, ym
				.fillRect(4 * k, 0, Math.floor(1.5 * k), k)), ym.fillStyle = bE.qL, ym.fillRect(0, 0, j, 1), ym.fillRect(0, 0, 1, k), ym.fillRect(4 * k, 0, 1, k), ym.fillRect(0, k - 1, j, 1), ym.fillRect(j - 1, 0, 1, k), ym.font = a9z, bD.t4
			.textBaseline(ym, 1), bD.t4.textAlign(ym, 1), ym.fillText(L(54), 2 * k, .54 * k), j = .4 * k, aN.aAB(bf.gap + 4 * k + (1.5 * k - j) / 2, aS.fp + .3 * k, j), j = 1, ym.setTransform(1, 0, 0, 1, bf.gap, aS.fp - j * aA1 * bf.gap - j *
				k), ym.fillStyle = bE.qH, ym.fillRect(0, 0, 4 * k, k), aA0 === j + 1 && (ym.fillStyle = bE.qM, ym.fillRect(0, 0, 4 * k, k)), ym.fillStyle = bE.qL, ym.fillRect(0, 0, 4 * k, 1), ym.fillRect(0, 0, 1, k), ym.fillRect(4 * k, 0, 1,
				k), ym.fillRect(0, k - 1, 4 * k, 1), ym.fillText(L(0 === j ? 54 : 55), 2 * k, .54 * k), ym.setTransform(1, 0, 0, 1, 0, 0)) : ym.drawImage(canvas, bf.gap, aS.fp)
	}, this.sx = function(player) {
		return 0 !== ah.ne[player] && 2 !== aE.a49 && !bD.h2.kP(player)
	}, this.aAB = function(fn, fp, fg) {
		ym.setTransform(1, 0, 0, 1, fn, fp), ym.lineWidth = bf.a39, ym.strokeStyle = bE.qL, ym.beginPath(), ym.moveTo(0, 0), ym.lineTo(fg, fg), ym.moveTo(0, fg), ym.lineTo(fg, 0), ym.stroke()
	}
}

function cL() {
	var aAD, k, aAE, aAF, aAG, aAH, aAI, aAJ, aAK;

	function a2H() {
		return aS.aAd(aO.aAZ()) ? ax.iT ? __fx.settings.keybindButtons ? aS.fp - 2 * aS.k - 3 * aAE : aS.fp - aS.k - 2 * aAE : __fx.settings.keybindButtons ? aS.fp - aS.k - 2 * aAE : aS.fp - aAE : bF.aAd(aO.aAc()) ? ax.iT ? bF.a2H() - aS.k - 2 *
			aAE : bF.a2H() - aAE : ax.iT ? i.k - aS.k - (bn.a9O() + 1) * aAE : i.k - bn.a9O() * bf.gap
	}

	function aAP(eh, pU, id, hE, aAT, aAU, lf, aAV, aAW, aAX, aAi) {
		var aC, p2, a70, q1, aAj = void 0 !== aAW,
			j = Math.floor(aR.measureText(pU, aO.a9z) + 1.5 * aAF + (aAj ? k : 1.5 * aAF));
		if (bi.dy = !0, aAi || bu.a2d(pU, aAW), j + 2 * aAE + aS.k > i.j && !aAj && 50 !== id && 20 < pU.length) aAP(eh, (aAi = bD.pY.a8P(pU))[0], id, hE, aAT, aAU, lf, aAV, aAW, aAX, !0), aAP(eh, aAi[1], id, hE, aAT, aAU, lf, aAV, aAW, aAX, !0);
		else if (aAi = j + (50 === id ? aAG : 0), (a70 = document.createElement("canvas")).width = j, a70.height = k, (p2 = a70.getContext("2d", {
				alpha: !0
			})).font = aO.a9z, bD.t4.textBaseline(p2, 1), bD.t4.textAlign(p2, 0), p2.clearRect(0, 0, j, k), p2.fillStyle = aAU, p2.fillRect(0, 0, j, k), __fx.utils.smoothFrame(p2, j, k, 0), p2.fillStyle = aAT, p2.fillText(pU, Math.floor(1.5 * aAF),
				Math.floor(k / 2)), aAj && (p2.imageSmoothingEnabled = !0, ak.a0l.a3A(aAW, p2, j - k, 0, k)), 0 === (q1 = {
				eg: eh,
				pU: pU,
				id: id,
				player: hE,
				canvas: a70,
				aAT: aAT,
				aAU: aAU,
				j: j,
				aAa: aAi,
				lf: lf,
				aAV: aAV,
				aAW: aAW,
				aAX: aAX
			}).eg || 0 < aAD.length && 0 < aAD[0].eg) aAD.unshift(q1);
		else {
			for (aC = 1; aC < aAD.length; aC++)
				if (0 < aAD[aC].eg) return void aAD.splice(aC, 0, q1);
			aAD.push(q1)
		}
	}

	function aAQ(eO, vn, g0) {
		return "rgb(" + eO + "," + vn + "," + g0 + ")"
	}

	function aAk(id, h9) {
		for (var fg = aAD.length, aC = 0; aC < fg; aC++) aAD[aC].id === id && h9-- <= 0 && (aAD.splice(aC, 1), aC--, fg--)
	}

	function aAl(id, player) {
		for (var fu = !1, aC = aAD.length - 1; 0 <= aC; aC--) aAD[aC].id !== id || player !== aE.fd && aAD[aC].player !== player || (aAD.splice(aC, 1), fu = !0);
		return fu
	}

	function aB8(pU) {
		aAP(340, pU, 6, 0, aAQ(215, 245, 255), bE.qI, -1, !1)
	}
	this.aAL = "", this.dr = function() {
		var self;
		aAJ = 0, aAI = a1.a2.it() ? 7 : 12, aAH = {
				wu: [0, 0, 0],
				aAM: [0, 0, 0],
				nw: [220, 180, 180],
				yk: [0, 0, 0],
				eq: [0, 0, 0]
			}, aAD = [], this.resize(), aE.i5 && this.a4N(0, 18), bV.xB.a0Z[bV.fM].name.length && aB8(L(100, [bV.xB.a0Z[bV.fM].name])), bV.xB.a0Z[bV.fM].aB9 && aB8(L(101, [bV.xB.a0Z[bV.fM].aB9])), aB8(L(102, [bV.fr - 2 + "x" + (bV.fs - 2)])),
			aB8(L(103, [bD.pY.a3S(aq.aBA)])), aq.aBA !== aq.aBB && aB8(L(104, [bD.pY.a3S(aq.aBB) + " (" + bD.pY.a8L(100 * aq.aBB / aq.aBA, 1) + ")"])), 0 < aq.aBC && aB8(L(80, [bD.pY.a3S(aq.aBC) + " (" + bD.pY.a8L(100 * aq.aBC / aq.aBA, 1) +
				")"])), 0 < aq.aBD && aB8(L(105, [bD.pY.a3S(aq.aBD) + " (" + bD.pY.a8L(100 * aq.aBD / aq.aBA, 1) + ")"])), 10 === aE.lK && aAP(120, L(106), 6, 0, aAQ(235, 255, 120), bE.qI, -1, !1), 0 !== (self = this).aAL.length && (aAP(200, self
				.aAL, 0, 0, bE.qL, bE.qI, -1, !1), self.aAL = ""), aE.a2c && aAP(340, L(56), 6, 0, aAQ(255, 200, 0), bE.qI, -1, !1), (self = aE.data.a99) && aAP(340, 1 === self ? L(58) : L(59, [self]), 10, 0, bE.qL, bE.qI, -1, !1)
	}, this.resize = function() {
		var aAS, aC;
		if (k = (k = Math.floor((a1.a2.it() ? .031 : .0249) * i.iu)) < 10 ? 10 : k, this.fontSize = Math.floor(2 * k / 3), this.a9z = bD.t4.t7(1, this.fontSize), aAE = bf.gap, aAF = Math.floor(k / 5), 0 < aAD.length)
			for (aAS = aAD, aAD = [], aC = aAS.length - 1; 0 <= aC; aC--) aAP(aAS[aC].eg, aAS[aC].pU, aAS[aC].id, aAS[aC].player, aAS[aC].aAT, aAS[aC].aAU, aAS[aC].lf, aAS[aC].aAV, aAS[aC].aAW, aAS[aC].aAX, !0);
		this.aAY()
	}, this.aAY = function() {
		aAK = document.createElement("canvas");
		var pU = L(57),
			p2 = (aAG = aR.measureText(pU, this.a9z) + 5 * aAF, aAK.height = k, aAK.width = aAG, aAK.getContext("2d", {
				alpha: !0
			}));
		p2.font = this.a9z, bD.t4.textBaseline(p2, 1), bD.t4.textAlign(p2, 1), p2.clearRect(0, 0, aAG, k), p2.fillStyle = bE.qi, p2.fillRect(0, 0, aAG, k), p2.fillStyle = bE.qL, p2.fillText(pU, Math.floor(aAG / 2), Math.floor(k / 2))
	}, this.aAZ = function() {
		var fg;
		return ax.iT ? ax.j : 0 === (fg = aAD.length) ? 0 : 1 === fg ? aAD[0].aAa : aAb(aAD[0].aAa, aAD[1].aAa)
	}, this.aAc = function() {
		var fg = aAD.length;
		return ax.iT ? fg ? aAb(ax.j, aAD[0].aAa) : ax.j : 0 === fg ? 0 : 1 === fg ? aAD[0].aAa : 2 === fg ? aAb(aAD[0].aAa, aAD[1].aAa) : aAb(aAb(aAD[0].aAa, aAD[1].aAa), aAD[2].aAa)
	}, this.hu = function(fn, fp) {
		for (var o5, aAe, aAf = a2H(), aC = aAD.length - 1; 0 <= aC; aC--)
			if ((aAe = aAf - (aC + 1) * k) <= fp && fp < aAe + k) return 50 === aAD[aC].id ? fn >= i.j - aAG - aAE - aAD[aC].j && (fn >= i.j - aAG - aAE ? bB.h2.sL(aAD[aC].player) : aI.o0(aAD[aC].player, 800, !1, 0), !0) : fn >= i.j - aAD[aC].j -
				aAE && (736 === aAD[aC].id ? (aAe = "https://" + aAD[aC].pU, window.open(aAe, "_blank"), aT.oA = !1) : aAD[aC].aAV && (aAD[aC].aAX && aAD[aC].aAX.fz ? (aAe = aAD[aC].aAX.fS, o5 = bP.fo(aAe) - 10, aAe = bP.fq(aAe) - 10, aI.nz(
					o5, aAe, 19 + o5, 19 + aAe)) : aAD[aC].aAX && aAD[aC].aAX.g0 ? aI.o1(aAD[aC].player, aAD[aC].aAX.o2) : (aI.o0(aAD[aC].player, 800, !1, 0), 0 <= aAD[aC].lf && (o5 = aAD[aC].lf, aAD[aC].lf = aAD[aC].player, aAD[aC]
					.player = o5))), !0);
		return !1
	}, this.a2d = function(eh, pU, id, hE, aAT, aAU, lf, aAV, aAW, aAX) {
		aAP(eh, pU, id, hE, aAT, aAU, lf, aAV, aAW, aAX)
	}, this.aAh = function(s) {
		aAP(300, s, 252, 0, bE.qL, bE.qI, -1, !1)
	}, this.a8b = function(id) {
		for (var aC = aAD.length - 1; 0 <= aC; aC--) aAD[aC].id === id && (aAD[aC].eg = 1)
	}, this.a4N = function(player, id) {
		0 === id ? (aR.ep(player, 0), aAk(423, 2), aAP(160, L(60, [ah.a2e[player]]), 423, player, "rgb(10,220,10)", bE.qI, -1, !1)) : 1 === id ? (aAl(50, aE.fd), aR.ep(player, 1), aAP(360, L(61, [ah.a2e[player]]), 0, player, bE.r3, bE.qI, -1, !
				0), aI.o0(player, 2700, !1, 0)) : 2 === id ? (aR.ep(player, 2), aAP(0, L(62), 0, player, "rgb(10,255,255)", bE.qI, -1, !0), aI.o0(player, 2700, !1, 0)) : 3 === id ? (aR.ep(player, 2), aAP(0, L(63, [ah.a2e[player]]), 0, player, bE
				.qL, bE.qI, -1, !0), aI.o0(player, 2700, !1, 0)) : 4 === id ? this.aAm(1, player, player) : 5 === id ? bD.h2.kP(aE.fQ) || (function(id, nZ) {
				var aC, aAx = 0,
					fg = aAD.length;
				for (aC = 0; aC < fg; aC++)
					if (aAD[aC].id === id && nZ <= ++aAx) return aAD.splice(aC, 1)
			}(1, 5), ag.aAo(player) && aAP(180, L(64, [ah.a2e[player]]), 1, player, aAQ(255, 200, 180), bE.qI, -1, !0), bD.h2.a7g(player, 10) && (aAk(573, 0), aAP(180, L(65, [ah.a2e[player]]), 573, player, bE.r3, bE.qI, -1, !0))) : 18 === id ?
			aAP(255, L(66), 18, 0, bE.qL, bE.qI, -1, !1) : 21 === id ? aAP(220, L(67), id, 0, bE.qL, bE.qI, -1, !1) : 22 === id ? this.aAm(2, player, player) : 59 === id && aAP(0, L(68), id, 0, bE.rR, bE.qI, 0, !1)
	}, this.a5T = function(s) {
		aAP(200, L(69, [s]), 94, 0, bE.qL, bE.qz, -1, !1)
	}, this.a4Z = function(aAp) {
		if (aE.fQ === aAp && !aE.lM && !aE.hp)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			aAP(0, "Your Win Count is now " + __fx.wins.count, 3, aAp, bE.qL, bE.qI, -1, !0);
		ah.hU[aAp] && (aR.ep(aAp, 2), aE.l2 < 100 ? aAP(0, L(63, [ah.a2e[aAp]]), 3, aAp, bE.qL, bE.qI, -1, !0) : aAP(0, L(70, [ah.a2e[aAp]]), 3, aAp, bE.qL, bE.qI, -1, !0))
	}, this.a9s = function(fK) {
		var pU, aAs, aAq = "(" + bP.fo(fK >> 2) + ", " + bP.fq(fK >> 2) + ")",
			aAV = !1,
			player = 0;
		ad.fb(fK) ? ad.fX(fK) ? aAq = L(71, [aAq]) : (player = ad.fY(fK), (aE.hp || aE.hq) && !1 === __fx.hoveringTooltip.active && player !== aE.fQ && (aE.fQ = player, bg.aAr()), pU = L(72, [bD.p2.a7E(ah.a4s[player], bD.t4.t7(0, 10), 150)]) +
			"   ", pU = (pU += L(73, [bD.pY.a3S(ah.hi[player])]) + "   ") + L(74, [bD.pY.a3S(ah.hU[player])]) + "   ", aE.ib && (aAs = bj.a4W[bj.lP[bj.fe[player]]], pU += L(75) + ": " + aAs + "   "), bD.h2.kP(player) && (pU += L(76) + ": " +
				aF.lD[aF.iQ[player]] + "   "), aAq = pU = (pU += L(77, [player]) + "   ") + L(78, [aAq]), aAV = !0) : aAq = ad.fl(fK) ? L(79, [aAq]) + "   #" + ad.fO(fK) : L(80, [aAq]), aAk(55, 0), aAP(220, aAq, 55, player, bE.qL, bE.qI, -1,
			aAV, void 0, void 0, !0)
	}, this.a9u = function(aAt) {
		var lx = bQ.z,
			player = lx.mw[aAt] >> 3,
			pU = (bi.dy = !0, aAk(55, 0), L(81, [ah.a2e[player]]) + "   ");
		aAP(220, pU += L(73, [bD.pY.a3S(lx.aAu[aAt])]), 55, player, bE.qL, bE.qI, -1, !0)
	}, this.s4 = function(rp, aAv, s5) {
		rp === aE.fQ ? aAP(175, " " + L(82, [ah.a2e[aAv]]) + ": ", 1001, aAv, aAQ(200, 255, 210), bE.qI, -1, !0, s5) : this.aAw(rp, s5)
	}, this.aAw = function(rp, s5) {
		aAk(1e3, 0), aAP(175, ah.a2e[rp] + ": ", 1e3, rp, bE.qL, "rgba(5,60,25,0.9)", -1, !0, s5)
	}, this.a4Y = function() {
		var s;
		aE.a4E ? (s = L(83), aR.a4X(L(84), 2, 1, 12), aAP(0, s, 40, 0, "rgb(10,220,10)", bE.qI, -1, !1)) : (s = L(85), aR.a4X(L(86), 2, 0, 16), aAP(0, s, 41, 0, bE.qL, bE.qI, -1, !1))
	}, this.a2R = function() {
		var h9 = ah.a2e,
			fj = aE.data;
		aAP(300, h9[0] + " [" + aE.a4T.a2X(fj.elo[0]) + "] vs " + h9[1] + " [" + aE.a4T.a2X(fj.elo[1]) + "]", 65, 0, bE.qC, "rgba(100,255,255,0.75)", -1, !1)
	}, this.aAy = function(s) {
		aAP(350, s, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.aAz = function(aB0) {
		aAP(0, L(aB0 ? 87 : 88), 247, 0, bE.rQ, bE.qI, -1, !1)
	}, this.a2Z = function(a2W, a2Y, aB1) {
		var fj = aE.data,
			h9 = ah.a2e;
		aAP(0, h9[0] + ": " + aE.a4T.a2X(fj.elo[0]) + " -> " + a2W, 66, 0, bE.qL, aB1[0], -1, !1), aAP(0, h9[1] + ": " + aE.a4T.a2X(fj.elo[1]) + " -> " + a2Y, 66, 1, bE.qL, aB1[1], -1, !1)
	}, this.sM = function(player, id) {
		0 === id ? aAl(50, player) ? (aAP(128, L(89, [ah.a2e[player]]), 52, player, aAQ(180, 255, 180), bE.qI, -1, !0), ag.sv(player, 2, 255)) : aAP(384, L(90, [ah.a2e[player]]), 51, player, aAQ(210, 210, 255), bE.qI, -1, !0) : aAl(51, player) ?
			(aAP(128, L(91, [ah.a2e[player]]), 52, player, bE.qL, "rgba(60,120,10,0.9)", -1, !0), ag.sv(player, 2, 255)) : (aAP(384, L(92, [ah.a2e[player]]), 50, player, bE.qL, "rgba(90,90,90,0.9)", -1, !0), ag.sv(player, 2, 96))
	}, this.sQ = function(wu, target) {
		var color = aAQ(210, 255, 210);
		1 < wu.length ? aAP(230, L(93, [wu.length, ah.a2e[target]]), 66, target, color, bE.qI, -1, !0) : aAP(230, L(94, [ah.a2e[wu[0]], ah.a2e[target]]), 66, wu[0], color, bE.qI, target, !0)
	}, this.aB2 = function(player, target) {
		aAP(230, L(95, [ah.a2e[player], ah.a2e[target]]), 66, player, bE.qL, "rgba(75,65,5,0.9)", target, !0)
	}, this.aB3 = function(id, h9) {
		aAk(id, h9)
	}, this.a4H = function(id, player) {
		aAl(id, void 0 === player ? aE.fd : player)
	}, this.aB4 = function(id) {
		for (var aC = aAD.length - 1; 0 <= aC; aC--)
			if (aAD[aC].id === id) return aAD[aC];
		return null
	}, this.sH = function(a9I, aB5, player) {
		2 !== ah.a7b[aE.fQ] && aAP(200, 1 === a9I ? L(96, [ah.a2e[player]]) : L(97, [bD.pY.a3S(a9I), ah.a2e[player]]), 30, player, "rgb(190,255,190)", bE.qI, -1, !0)
	}, this.aB7 = function(a9I, player) {
		2 !== ah.a7b[aE.fQ] && (aAk(31, 0), a9I = " (" + bD.pY.a3S(a9I) + ") 💸", aAP(150, a9I = bD.h2.kP(player) ? L(98) + a9I : L(99, [ah.a2e[player]]) + a9I, 31, player, bE.qC, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a4G = function(c1) {
		for (var eq = bi.kz(), aC = 2; 0 <= aC; aC--) 0 < aAH.yk[aC] && (c1 || aAH.eq[aC] < eq - 220) && this.aBE(aC)
	}, this.aBE = function(id) {
		var pU, fg = aAH.yk[id],
			player = aAH.wu[id];
		aAH.yk[id] = 0, 1 === fg ? (0 === id ? pU = L(107, [ah.a2e[player], ah.a2e[aAH.aAM[0]]]) : 1 === id ? pU = L(108, [ah.a2e[player]]) : 2 === id ? pU = L(109, [ah.a2e[player]]) : 3 === id && (pU = L(110, [ah.a2e[player]])), aAk(7, 0), aAP(
			aAH.nw[id], pU, 7, aAH.aAM[id], bE.qL, bE.qI, -1, !0)) : (pU = L(0 === id ? 111 : 1 === id ? 112 : 113, [fg]), aAk(7, 0), aAP(aAH.nw[id], pU, 7, player, bE.qL, bE.qI, -1, !1))
	}, this.aAm = function(id, i9, lf) {
		var eq = bi.kz(),
			fg = aAH.yk[id] + 1;
		aAH.yk[id]++, aAH.wu[id] = i9, aAH.aAM[id] = lf, 1 === fg && (aAH.eq[id] = eq), (1 === fg && (aE.a4C < 32 || 2 === aE.a49) || 1 < fg && (aAH.eq[id] < eq - 140 || 2 === aE.a49)) && this.aBE(id)
	}, this.el = function() {
		b3.el();
		for (var kH = (kH = aAD.length - aAI) <= 1 ? 1 : kH * kH, aC = aAD.length - 1; 0 <= aC; aC--) 0 < aAD[aC].eg && (aAD[aC].eg -= kH, aAD[aC].eg <= 0) && (bi.dy = !0, aAD.splice(aC, 1));
		! function() {
			var h9, aC;
			if (128 !== aAJ && !(++aAJ < 128))
				for (h9 = 5, aC = am.lY - 1; 0 <= aC; aC--) 1 === ah.a7b[am.ld[aC]] && 0 < h9-- && aAP(240, L(110, [ah.a2e[am.ld[aC]]]), 1, am.ld[aC], bE.qC, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a4G(!1)
	}, this.yl = function() {
		for (var a1J, fp = a2H(), aC = aAD.length - 1; 0 <= aC; aC--) a1J = fp - (aC + 1) * k, 50 === aAD[aC].id ? (ym.drawImage(aAD[aC].canvas, i.j - aAD[aC].j - aAG - aAE, a1J), ym.drawImage(aAK, i.j - aAG - aAE, a1J)) : ym.drawImage(aAD[aC]
			.canvas, i.j - aAD[aC].j - aAE, a1J)
	}, this.aBG = function(id, iQ) {
		var aAq, aBH = bE.qV;
		0 === id ? aAq = L(114) : 1 === id ? (aAq = L(115), aBH = bE.rI) : 2 === id ? aAq = L(116) : 3 === id ? aAq = L(117) : (aAq = bD.pY.a3S(iQ), aBH = 5 === id ? bE.rI : bE.qI), aAk(74, 0), aAP(0, aAq, 74, 0, bE.qL, aBH, -1, !1, void 0,
			void 0, !0)
	}
}

function cM() {
	var aBJ, aBK, yn = "",
		a14 = 0,
		a15 = 0,
		aBI = -1,
		eK = ["Team", "BR", "1v1", "Zombie"],
		aBL = [
			[0, 15, 30, 45],
			[10, 40],
			[25],
			[55]
		],
		aBM = 10;

	function aBQ() {
		for (var aBR = aBS(), aBT = -1, aBO = 0, aC = 0; aC < aBL.length; aC++) {
			var fj = aBU(aC, aBR);
			0 <= fj && (aBT < 0 || fj < aBT) && (aBT = fj, aBO = aC)
		}
		if (!(aBT < 0)) return aBT !== aBI && (yn = eK[aBO] + " " + aBK + ": " + aBV(aBT), aBI = aBT, a14 = aR.measureText(yn, aBJ), a14 += Math.floor(.4 * a15), 1);
		yn = ""
	}

	function aBS() {
		var eh = new Date;
		return 60 * eh.getUTCMinutes() + eh.getUTCSeconds()
	}

	function aBU(aBO, aBR) {
		for (var aBX = aBL[aBO], g8 = -1, fz = 0; fz < aBX.length; fz++) {
			var fj = (fj = 60 * aBX[fz] + aBM - aBR) <= 0 ? 3600 + fj : fj;
			(g8 < 0 || fj < g8) && (g8 = fj)
		}
		return g8
	}

	function aBV(aBY) {
		return aBZ(Math.floor(aBY / 60)) + ":" + aBZ(aBY % 60)
	}

	function aBZ(aBa) {
		return aBa < 10 ? "0" + aBa : String(aBa)
	}
	this.aBN = function(aBO, aBP) {
		return 0 <= aBL[aBO].indexOf(aBP)
	}, this.dr = function() {
		aBK = L(118)
	}, this.resize = function() {
		a14 = Math.floor((a1.a2.it() ? .53 : .36) * i.iu), a15 = Math.floor(.065 * a14), aBJ = bD.t4.t7(1, Math.floor(.9 * a15)), aBI += 1e3, aBQ()
	}, this.el = function() {
		aBQ() && (bi.dy = !0)
	}, this.aBW = function(vj, vk) {
		for (var aBR = aBS(), pU = "", aC = vj; aC < Math.min(vk, aBL.length); aC++) {
			var fj = aBU(aC, aBR);
			0 <= fj && (pU += (pU ? "   " : "") + eK[aC] + ": " + aBV(fj))
		}
		return pU
	}, this.yl = function(fp) {
		yn && (ym.lineWidth = 1 + Math.floor(a15 / 15), ym.translate(i.j - a15, fp + a14), ym.rotate(-Math.PI / 2), ym.fillStyle = bE.qL, ym.fillRect(0, 0, a14, a15), ym.strokeStyle = bE.qC, ym.strokeRect(0, 0, a14, a15 + 10), ym.fillStyle = bE
			.qC, ym.font = aBJ, bD.t4.textBaseline(ym, 1), bD.t4.textAlign(ym, 1), ym.fillText(yn, Math.floor(a14 / 2), Math.floor(.59 * a15)), ym.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function cN() {
	var a9H, aBb, aBc, a15, aBd, aBe = 0,
		aBf = 0;

	function aBh(aC) {
		var aBj = !0,
			a3H = bE.qL,
			j = (1 === a9H[aC].id ? a9H[aC].p2.fillStyle = bE.rG : a9H[aC].kB === aE.fd ? a9H[aC].p2.fillStyle = bE.qW : (ad.aBk(a9H[aC].kB), a9H[aC].p2.fillStyle = bD.color.qF(bR.gF[0], bR.gF[1], bR.gF[2], .87), 400 < bD.te.a6e(bR.gF, 0, 2) && (
				aBj = !1, a3H = bE.qC)), a9H[aC].canvas.width),
			vW = (a9H[aC].p2.clearRect(0, 0, j, a15), a9H[aC].p2.fillRect(0, 0, j, a15), a9H[aC].p2.fillStyle = a3H, ! function(p2, j, a15) {
				p2.fillRect(0, 0, j, 1), p2.fillRect(0, a15 - 1, j, 1), p2.fillRect(0, 0, 1, a15), p2.fillRect(j - 1, 0, 1, a15)
			}(a9H[aC].p2, j, a15), aBb + 2 * a15 < j && (a9H[aC].p2.fillRect(j - aBb - a15, 0, 1, a15), a9H[aC].p2.fillText(ah.a2e[a9H[aC].kB], Math.floor((j - aBb) / 2), Math.floor(.57 * a15))), 0 !== a9H[aC].id ? 0 : a15);
		a9H[aC].p2.fillText(bD.pY.a3S(a9H[aC].iQ), Math.floor(j - aBb / 2 - vW), Math.floor(.57 * a15)),
			function(aC, j, vW, aBj) {
				a9H[aC].p2.fillStyle = aBj ? bE.qN : bE.qJ;
				aBj = Math.floor(aBb * a9H[aC].iQ / a9H[aC].aBq);
				a9H[aC].p2.fillRect(Math.floor(j - aBb - vW), a15 - aBd, aBj, aBd)
			}(aC, j, vW, aBj), 0 === a9H[aC].id ? (aBn(aC, j, aBj, a3H), function(aC, j, aBj) {
				a9H[aC].p2.strokeStyle = aBj ? bE.qd : bE.qn, a9H[aC].p2.fillRect(a15, 0, 1, a15);
				aBj = j - a15;
				a9H[aC].p2.beginPath(), a9H[aC].p2.moveTo(Math.floor(.3 * a15 + aBj), Math.floor(a15 / 2)), a9H[aC].p2.lineTo(Math.floor(a15 - .3 * a15 + 0 + aBj), Math.floor(a15 / 2)), a9H[aC].p2.stroke(), a9H[aC].p2.beginPath(), a9H[aC].p2
					.moveTo(Math.floor(a15 / 2 + aBj), Math.floor(.3 * a15)), a9H[aC].p2.lineTo(Math.floor(a15 / 2 + aBj), Math.floor(a15 - .3 * a15 + 0)), a9H[aC].p2.stroke()
			}(aC, j, aBj)) : aBn(aC, 2 * a15, aBj, a3H)
	}

	function aBn(aC, j, aBj, a3H) {
		a9H[aC].p2.strokeStyle = a9H[aC].aBr ? bE.qU : aBj ? bE.qv : bE.qw, a9H[aC].p2.fillStyle = a3H, a9H[aC].p2.fillRect(j - a15, 0, 1, a15), a9H[aC].p2.lineWidth = Math.max(Math.floor(a15 / 12), 3), a9H[aC].p2.lineCap = "round";
		aBj = .35;
		j = a15 + 1, a9H[aC].p2.beginPath(), a9H[aC].p2.moveTo(Math.floor(j - aBj * a15 + 0), Math.floor(aBj * a15)), a9H[aC].p2.lineTo(Math.floor(j - a15 + aBj * a15), Math.floor(a15 - aBj * a15 + 0)), a9H[aC].p2.stroke(), a9H[aC].p2.beginPath(),
			a9H[aC].p2.moveTo(Math.floor(j - a15 + aBj * a15), Math.floor(aBj * a15)), a9H[aC].p2.lineTo(Math.floor(j - aBj * a15 + 0), Math.floor(a15 - aBj * a15 + 0)), a9H[aC].p2.stroke()
	}

	function aC3(h, aC1) {
		for (var iQ, aC = aC1 - 1; 0 <= aC; aC--) iQ = ae.gt(aE.fQ, aC), h[aC].iQ !== iQ && (h[aC].iQ = iQ, h[aC].aBq = Math.max(iQ, h[aC].aBq), h[aC].aBi = !0)
	}

	function aC7(h, aC5) {
		for (var vj = aE.fQ << 3, aAu = bQ.z.aAu, mt = bQ.z.mt, aC9 = bQ.z.aC9, aC = aC5 - 1; 0 <= aC; aC--) {
			var aCA = aC9[vj + aC],
				iQ = aAu[aCA];
			h[aC].iQ !== iQ ? (h[aC].iQ = iQ, h[aC].aBq = Math.max(iQ, h[aC].aBq), h[aC].aBi = !0) : h[aC].aBr || mt[aCA] % 64 != 5 || (h[aC].aBr = !0, h[aC].aBi = !0)
		}
	}

	function aBg(a9K) {
		a9K.canvas = document.createElement("canvas"), bV.a0e.font = aBc;
		var j = aBb;
		a9K.kB < aE.fd && 0 === a9K.id && (j += Math.floor(bV.a0e.measureText(ah.a2e[a9K.kB] + "000").width)), j += a15, 0 === a9K.id && (j += a15), a9K.canvas.width = j, a9K.canvas.height = a15, a9K.p2 = a9K.canvas.getContext("2d", {
			alpha: !0
		}), a9K.p2.font = aBc, bD.t4.textBaseline(a9K.p2, 1), bD.t4.textAlign(a9K.p2, 1)
	}

	function aBx(aC) {
		return aV.aCB() ? i.j - a9H[aC].canvas.width - bf.gap : aV.fn
	}

	function aBy(aC) {
		return Math.floor(2 * bf.gap + (aV.aCB() ? aX.k + bf.gap : 0) + aV.k + aC * (1.3 * a15))
	}
	this.dr = function() {
		aBe = aBf = 0, a9H = [], this.resize()
	}, this.resize = function() {
		aBc = aO.a9z, a15 = aO.fontSize + 5, a15 = Math.floor(1.25 * a15), a1.a2.it() && (a15 = Math.floor(1.25 * a15)), aBd = Math.floor(.15 * a15), bV.a0e.font = aBc, aBb = Math.floor(bV.a0e.measureText("02 000 000 0000").width);
		for (var aC = a9H.length - 1; 0 <= aC; aC--) aBg(a9H[aC]), aBh(aC)
	}, this.nQ = function() {
		for (var aC = a9H.length - 1; 0 <= aC; aC--) a9H[aC].aBi && (a9H[aC].aBi = !1, aBh(aC))
	}, this.hu = function(mH, mI) {
		if (!(2 === aE.a49 || 0 === ah.ne[aE.fQ] || aE.hp || aE.hq || bD.h2.kP(aE.fQ)))
			for (var aBs, aBt, aBu, aBv = a1.a2.it() ? a15 : 0, aBw = a1.a2.it() ? Math.floor(.15 * a15) : 0, aC = a9H.length - 1; 0 <= aC; aC--)
				if (aBs = aBx(aC), aBt = aBy(aC), aBu = a9H[aC].canvas.width, aBt - aBw <= mI && mI <= aBt + a15 + aBw) {
					if (aBs - aBv <= mH && mH <= aBs + a15 + aBv) return a9H[aC].aBr || (a9H[aC].aBi = !0, a9H[aC].aBr = !0, 0 === a9H[aC].id ? bB.i7.s2(a9H[aC].kB) : bB.i7.s1(a9H[aC].kB)), !0;
					if (0 === a9H[aC].id && aBs + aBu - a15 - aBv <= mH && mH <= aBs + aBu + aBv) return bY.a9i(3), bB.i7.iE(aS.iB(), a9H[aC].kB), !0
				} return !1
	}, this.el = function() {
		var a6m, a6n, h, aC1;
		0 === ah.ne[aE.fQ] || bD.h2.kP(aE.fQ) && !aE.hp && !aE.hq || (a6m = a9H.slice(0, aBe), a6n = a9H.slice(aBe, aBe + aBf), h = a6m, aC1 = ae.gn(aE.fQ), function(h, aC1) {
			if (aBe !== aC1) return 1;
			for (var aC = aC1 - 1; 0 <= aC; aC--)
				if (h[aC].kB !== ae.gs(aE.fQ, aC)) return 1;
			return
		}(h, aC1) ? aC3(h = function(h, aC1) {
			var aC, kB, g0, iQ, aAS = [];
			loop: for (aC = 0; aC < aC1; aC++) {
				for (kB = ae.gs(aE.fQ, aC), g0 = 0; g0 < h.length; g0++)
					if (h[g0].kB === kB) {
						aAS.push(h.splice(g0, 1)[0]);
						continue loop
					} iQ = ae.gt(aE.fQ, aC), aBg(iQ = {
					kB: kB,
					iQ: iQ,
					aBq: iQ,
					id: 0,
					aBi: !0,
					aBr: !1,
					canvas: null,
					p2: null
				}), aAS.push(iQ)
			}
			return aAS
		}(h, aC1), aC1) : aC3(h, aC1), a6m = h, a6n = function(h) {
			var aC5 = bQ.z.l6[aE.fQ];
			return function(h, aC5) {
				if (aBf !== aC5) return 1;
				for (var vj = aE.fQ << 3, mv = bQ.z.mv, aC9 = bQ.z.aC9, aC = aC5 - 1; 0 <= aC; aC--) {
					var aCA = aC9[vj + aC];
					if (h[aC].kB !== mv[aCA]) return 1
				}
				return
			}(h, aC5) ? aC7(h = function(h, aC5) {
				var aC, kB, g0, aAS = [],
					vj = aE.fQ << 3,
					mv = bQ.z.mv,
					aAu = bQ.z.aAu,
					aC9 = bQ.z.aC9;
				loop: for (aC = 0; aC < aC5; aC++) {
					var aCA = aC9[vj + aC];
					for (kB = mv[aCA], g0 = 0; g0 < h.length; g0++)
						if (h[g0].kB === kB) {
							aAS.push(h.splice(g0, 1)[0]);
							continue loop
						} aCA = aAu[aCA], aBg(aCA = {
						kB: kB,
						iQ: aCA,
						aBq: aCA,
						id: 1,
						aBi: !0,
						aBr: !1,
						canvas: null,
						p2: null
					}), aAS.push(aCA)
				}
				return aAS
			}(h, aC5), aC5) : aC7(h, aC5), h
		}(a6n), aBe = a6m.length, aBf = a6n.length, a9H = a6m.concat(a6n))
	}, this.yl = function() {
		if (0 !== ah.ne[aE.fQ] && (!bD.h2.kP(aE.fQ) || aE.hp || aE.hq))
			for (var aC = a9H.length - 1; 0 <= aC; aC--) ym.drawImage(a9H[aC].canvas, aBx(aC), aBy(aC))
	}
}

function cO() {
	var aAD, l7, aCC, aCD, k, a9z, fontSize, aCE, aCF, aCG, aCH, canvas, p2, nr, aCI;

	function z2(aC) {
		return L(0 === aC ? 119 : 1 === aC ? 120 : 2 === aC ? 121 : 122)
	}

	function aCP() {
		aE.ib ? aCQ + 4 * bf.gap + k + bk.aCR() > aS.fp ? ym.drawImage(canvas, 2 * bf.gap + bk.aCR(), aCQ + 2 * bf.gap) : ym.drawImage(canvas, bf.gap, aCQ + 3 * bf.gap + bk.aCR()) : ym.drawImage(canvas, bf.gap, aCQ + 2 * bf.gap)
	}

	function aCJ() {
		canvas.width = aAD[0].width + aCG, canvas.height = k + aCG, (p2 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, aAD[0].width + aCG, k + aCG), p2.translate(Math.floor(aCG / 2), Math.floor(aCG / 2)), p2.lineWidth = aCG, p2.fillStyle = 1 === aAD[0].aCO ? bE.qQ : bE.qI, aCS(), p2.fill(), p2.strokeStyle = 1 === aAD[0].aCO ? bE.qC :
			bE.qL, aCS(), p2.stroke(), bD.t4.textAlign(p2, 1), bD.t4.textBaseline(p2, 1), p2.fillStyle = 1 === aAD[0].aCO ? bE.qC : bE.qL, p2.font = a9z[0], p2.fillText(z2(aAD[0].aCN), Math.floor(aAD[0].width / 2), Math.floor(.72 * aCE[0] * k)), p2
			.font = a9z[1], p2.fillText(aAD[0].pU, Math.floor(aAD[0].width / 2), Math.floor((aCE[0] + .48 * aCE[1]) * k))
	}

	function aCS() {
		if (__fx.settings.smoothUI && p2.roundRect) return p2.beginPath(), p2.roundRect(0, 0, aAD[0].width, k, .15 * k);
		p2.beginPath(), p2.moveTo(aCH, 0), p2.lineTo(aAD[0].width - aCH, 0), p2.lineTo(aAD[0].width, aCH), p2.lineTo(aAD[0].width, k - aCH), p2.lineTo(aAD[0].width - aCH, k), p2.lineTo(aCH, k), p2.lineTo(0, k - aCH), p2.lineTo(0, aCH), p2.closePath()
	}
	this.dr = function() {
		l7 = 4, aCC = aCD = nr = 0, aAD = [], a9z = new Array(2), fontSize = new Array(2), (aCE = new Array(2))[0] = .3, aCE[1] = .7, aCF = new Array(4), canvas = document.createElement("canvas"), aCI = bi.eg + 2e3, this.resize()
	}, this.resize = function() {
		var aC, j;
		for (k = Math.floor((a1.a2.it() ? .062 : .047) * i.iu), fontSize[0] = Math.floor(.85 * aCE[0] * k), fontSize[1] = Math.floor(.85 * aCE[1] * k), a9z[0] = bD.t4.t7(1, fontSize[0]), a9z[1] = bD.t4.t7(1, fontSize[1]), aC = aCF.length -
			1; 0 <= aC; aC--) aCF[aC] = this.measureText(z2(aC) + "000", a9z[0]);
		if (aCG = Math.floor(1 + .05 * k), aCH = Math.floor(.2 * k), 0 < aAD.length) {
			for (aC = aAD.length - 1; 0 <= aC; aC--) j = this.measureText(aAD[aC].pU + "00", a9z[1]), aAD[aC].width = j < aCF[aC] ? aCF[aC] : j;
			aCJ()
		}
	}, this.el = function() {
		0 !== l7 && (4 === l7 ? bi.eg > aCI && (l7 = 0, 1 === aE.a49) && aR.a4X(bV.xB.a0Z[bV.fM].name, 3, 1, 9) : (1 === l7 ? (0 === aCC && (aCJ(), aCC = 1e-4), 1 <= (aCC += .002 * (bi.eg - nr)) && (aCD = 0, l7 = 2, aCC = 1), bi.dy = !0) : 2 ===
			l7 ? ((aCD += (bi.eg - nr) / 1e3) > aAD[0].nw || 1 < aCD && 1 < aAD.length) && (l7 = 3) : 3 === l7 && ((aCC -= .002 * (bi.eg - nr)) <= 0 && (aCC = 0, aAD.shift(), l7 = 0 < aAD.length ? 1 : 0), bi.dy = !0), nr = bi.eg))
	}, this.measureText = function(pU, a9z) {
		return ym.font = a9z, Math.floor(ym.measureText(pU).width)
	}, this.ep = function(aCM, aC) {
		this.a4X(ah.a2e[aCM], aC, 1, 0 === aC ? 3 : 7)
	}, this.a4X = function(pU, aCN, aCO, nw) {
		var j;
		pU.length && (j = (j = this.measureText(pU + "00", a9z[1])) < aCF[aCN] ? aCF[aCN] : j, aAD.push({
			pU: pU,
			width: j,
			aCN: aCN,
			aCO: aCO,
			nw: nw
		}), 0 === l7) && (aCC = 0, l7 = 1, nr = bi.eg)
	}, this.yl = function() {
		0 !== l7 && 0 !== aCC && (aCC < 1 ? (ym.globalAlpha = aCC, aCP(), ym.globalAlpha = 1) : aCP())
	}
}

function cx() {
	var k, canvas, p2, aCT, aCU, aCV, aCW, aBi, aCX, aCY, aCZ, aCa, aB0 = !1,
		a70 = (this.iT = !1, this.j = 0, new Array(2)),
		aCb = 0;

	function nR() {
		var j = ax.j,
			lx = (aBi = !1, a2K(p2, j, k), Math.floor(j / 2));
		1 === aCT ? (p2.fillStyle = bE.qf, p2.fillRect(lx, 0, lx, k)) : -1 === aCT && (p2.fillStyle = bE.qx, p2.fillRect(0, 0, lx, k)), a2L(p2, j, k, 2);
		var lx = (lx = Math.floor(.25 * k)) < 2 ? 2 : lx,
			aBA = (p2.fillStyle = bE.qR, Math.floor((k - 4) * aCU[1] / aCV[1]));
		0 < aBA && p2.fillRect(2, k - 2 - aBA, lx, aBA), 0 < (aBA = Math.floor((k - 4) * aCU[0] / aCV[0])) && p2.fillRect(j - 2 - lx, k - 2 - aBA, lx, aBA);
		lx = (lx = Math.floor(k / 8)) < 2 ? 2 : lx, a2N(p2, Math.floor(.4 * k), 0, k, lx, .5, !1), a2N(p2, Math.floor(j - 1.4 * k), 0, k, lx, .5, !0), aBA = 1.1 * k / a70[0].width;
		p2.imageSmoothingEnabled = !0, p2.setTransform(aBA, 0, 0, aBA, (j - aBA * a70[0].width) / 2, -.05 * k), p2.drawImage(a70[+aB0], 0, 0), p2.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aCg() {
		aCa = -1, aB0 = ai.aCh(), aO.a8b(257), aO.aAz(aB0), ax.iT = !0, aBi = !0, aCX = 360;
		for (var g8, eh = 0, aC = am.lY - 1; 0 <= aC; aC--) bD.h2.kP(am.ld[aC]) || (eh += ah.hU[am.ld[aC]]);
		aB0 ? aCV[0] = Math.max(bO.g7(3 * eh, 4), 1) : aE.ib ? (g8 = 9 === aE.lK ? 8 === bj.lP[bk.lb()] ? 80 : (g8 = bO.g7(100 * bk.lZ(), aE.km), bO.g7(bO.is(1550 - 11 * g8, 400, 1e3), 10)) : (g8 = bO.g7(100 * bk.lZ(), aE.km), bO.g7(bO.is(1600 - 12 *
			g8, 400, 1e3), 10)), g8 = bO.g7(g8 * eh, 100), aCV[0] = Math.max(g8, 1)) : 8 === aE.lK ? aCV[0] = Math.max(bO.g7(3 * eh, 4), 1) : aCV[0] = Math.max(bO.g7(3 * eh, 5), 1), aCV[1] = Math.max(eh - aCV[0], 1)
	}

	function aCc() {
		aCZ = bi.kz(), aBi = !0, aCX = aCT = 0, aCW = [], ax.iT = !1, aO.a4H(247), aCU[0] = aCU[1] = 0, aO.a8b(673)
	}

	function a2H() {
		return aS.aAd(aO.aAZ()) ? __fx.settings.keybindButtons ? aS.fp - 2 * (k + bf.gap) : aS.fp - k - bf.gap : bF.aAd(aO.aAc()) ? bF.a2H() - k - bf.gap : i.k - k - bn.a9O() * bf.gap
	}
	this.ds = function() {
		for (var aC = 0; aC < 2; aC++) a70[aC] = bD.canvas.a2v(ac.get(3), 8 - aC, bE.re), a70[aC] = bD.canvas.a72(a70[aC])
	}, this.dr = function() {
		aCZ = -1e4, aCY = aCb = 0, aCa = -1, this.iT = !1, aBi = aB0 = !1, aCU = [aCT = aCX = 0, 0], aCV = [1, 1], aCW = [], this.resize()
	}, this.resize = function() {
		k = aS.k, this.j = 4 * k, (canvas = document.createElement("canvas")).width = this.j, canvas.height = k, p2 = canvas.getContext("2d", {
			alpha: !0
		}), nR()
	}, this.nQ = function() {
		aBi && nR()
	}, this.hu = function(fn, fp) {
		return !!this.iT && !(fn < i.j - this.j - bf.gap || fp < a2H() || (aE.hp || aE.hq || this.iU(aE.fQ) && (aN.hr && aN.a6I(), bB.i7.iV(fn > i.j - bf.gap - this.j / 2 ? 1 : 0)), 0))
	}, this.el = function() {
		0 < aCY ? 0 === --aCY && aCc() : this.iT ? 180 == --aCX && 3 * aCU[0] < aCV[0] ? aCc() : aCU[0] >= aCV[0] ? aB0 ? bU.a3n.a44() : bU.a3n.a48() : aCU[1] >= aCV[1] ? aCY = 4 : aCX <= 0 && aCc() : ! function() {
			var aCj = bi.kz();
			if (aCj % 40 == 14) {
				if (aCb) return !(aCj < aCb) && !(aCj < aCZ + 535) && (aCb = aCj + 1071, bD.h2.a7e()) ? (aCg(), 1) : 0;
				(1 === am.lY || (aE.ib ? bk.lZ() : ah.hU[md[0]]) >= bO.g7(96 * aE.km, 100)) && (aCb = aCj + 535)
			}
			return
		}() && 0 <= aCa && (aO.a2d(250, L(123, [ah.a2e[aCa]]), 673, aCa, bE.qL, bE.qI, -1, !0), aCg())
	}, this.a4A = function() {
		this.iT && aCU[0] < aCV[0] && aCc()
	}, this.sw = function(player, aCk) {
		var aCl = L(aCk ? 124 : 125, [ah.a2e[player]]),
			aCl = (aO.a2d(450, aCl, 257, player, aCk ? bE.qd : bE.qu, bE.qI, -1, !0), aCW.push(player), aBi = !0, aE.lM ? Math.max(aCV[0], aCV[1]) : ah.hU[player]),
			aCl = Math.max(aCl, 1);
		aCk ? aCU[0] += aCl : aCU[1] += aCl, player === aE.fQ && (aCT = aCk ? 1 : -1)
	}, this.yl = function() {
		var fp;
		this.iT && (fp = a2H(), ym.drawImage(canvas, i.j - this.j - bf.gap, fp))
	}, this.iW = function(player) {
		if (0 !== aCX) return !1;
		if (!bD.h2.hs(1)) return !1;
		if (!bD.h2.ht(player)) return !1;
		if (10 <= kn[player] && !bD.h2.a7y(player, 9)) return !1;
		if (!(aE.lM || m.e4 && m.e9)) {
			player = bi.kz();
			if (player < aCZ + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.iU = function(hE) {
		if (!bD.h2.hs(1)) return !1;
		if (!bD.h2.ht(hE)) return !1;
		if (!this.iT) return !1;
		for (var aC = aCW.length - 1; 0 <= aC; aC--)
			if (aCW[aC] === hE) return !1;
		return !0
	}, this.iS = function(player) {
		aCa = player
	}
}

function cP() {
	var j, fn, aCn, canvas, p2, iT, jK, a8S, a9z, aBi, aCo = 11 / 12;

	function aCq() {
		var aBp = Math.floor(jK * (j - 2 * aCn)),
			aCt = 1 + Math.floor(.0625 * aS.k),
			aCu = 1 + Math.floor(.3 * aS.k),
			aCv = Math.floor(.55 * aS.k),
			rounded = (p2.clearRect(0, 0, j, aS.k), p2.fillStyle = bE.qH, p2.fillRect(0, 0, aCn, aS.k), p2.fillRect(aCn + aBp, 0, j - aCn - aBp, aS.k), p2.fillStyle = jK < 1 / 3 ? "rgba(" + Math.floor(3 * jK * 130) + ",130,0,0.85)" : jK < 2 / 3 ?
				"rgba(130," + (130 - Math.floor(3 * (jK - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (jK - 2 / 3) * 130) + ",0.85)", p2.fillRect(aCn, 0, aBp, aS.k), p2.fillStyle = bE.qL, p2.fillStyle = __fx.utils.lineColor(bE.qL),
				__fx.utils.smoothFrame(p2, j, aS.k));
		rounded || (p2.fillRect(0, 0, j, 1), p2.fillRect(0, aS.k - 1, j, 1), p2.fillRect(0, 0, 1, aS.k)), p2.fillRect(aCn, 0, 1, aS.k), p2.fillRect(aCn + aBp, 0, 1, aS.k), p2.fillRect(j - aCn, 0, 1, aS.k), rounded || p2.fillRect(j - 1, 0, 1, aS.k),
			p2.fillStyle = bE.qL, p2.fillRect(Math.floor(.25 * aS.k) + aCu, Math.floor((aS.k - aCt) / 2), aS.k - 2 * aCu, aCt), p2.fillRect(Math.floor(j - 1.25 * aS.k) + aCu, Math.floor((aS.k - aCt) / 2), aS.k - 2 * aCu - aCu % 2, aCt), p2.fillRect(
				Math.floor(j - 1.25 * aS.k) + Math.floor((aS.k - aCt) / 2), aCu, aCt, aS.k - 2 * aCu - aCu % 2), a8S = bD.h2.jJ(aE.fQ, aS.iB()), p2.fillText(bD.pY.a3S(a8S) + " (" + bD.pY.a8L(100 * jK, +(jK < .1)) + ")", Math.floor(.5 * j), aCv)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		jK = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aS.a6E(arg1);

	function aD0(a6Z) {
		return !(1 < a6Z && 1 === jK || (1 < a6Z && a6Z * jK - jK < 1 / 1024 ? a6Z = (jK + 1 / 1024) / jK : a6Z < 1 && jK - a6Z * jK < 1 / 1024 && (a6Z = (jK - 1 / 1024) / jK), jK = bO.is(jK * a6Z, 1 / 1024, 1), aCq(), 0))
	}

	function aD1(mH) {
		return jK !== (jK = bO.is((mH - fn - aCn) / (j - 2 * aCn), 1 / 1024, 1)) && (aCq(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		aCq(), bi.dy = !0
	}, this.fp = 0, this.hv = !1, this.dr = function() {
		iT = !aE.i5 && !aE.hp && !aE.hq, aBi = !1, jK = __fx.settings.startingPercentageEnabled ? (__fx.settings.startingPercentage || 50) / 100 : (bm.buffer.data[182].value + 1) / 1024, a8S = 0, this.hv = !1, this.resize()
	}, this.resize = function() {
		a1.a2.it() && i.j < .8 * i.k ? (this.k = Math.floor(.066 * i.iu), j = i.j - 4 * bf.gap - this.k) : (j = Math.floor((a1.a2.it() ? .65 : .389) * i.iu), j += 12 - j % 12, this.k = Math.floor(j / 12)), aCn = Math.floor(3 * this.k / 2), a9z =
			bD.t4.t7(1, Math.floor(.5 * this.k)), (canvas = document.createElement("canvas")).width = j, __fx.mobileKeybinds.setSize(j, this.k, ym), canvas.height = this.k, (p2 = canvas.getContext("2d", {
				alpha: !0
			})).font = a9z, bD.t4.textBaseline(p2, 1), bD.t4.textAlign(p2, 1), this.aCp(), aCq()
	}, this.aCp = function() {
		fn = a1.a2.it() && i.j < .8 * i.k ? this.k + 3 * bf.gap : Math.floor((i.j - j) / 2), this.fp = i.k - this.k - bn.a9O() * bf.gap
	}, this.nQ = function() {
		aBi && (aBi = !1, aCq())
	}, this.iT = function() {
		return !(!iT || aN.hr && fn < Math.floor(bf.gap + 5.5 * this.k))
	}, this.aAd = function(aCw) {
		return !!this.iT() && fn + j > i.j - aCw - bf.gap
	}, this.a8Z = function() {
		iT = !aE.hp && !aE.hq
	}, this.aCc = function() {
		iT = !1
	}, this.iB = function() {
		return bO.is(Math.floor(1024 * jK + .5) - 1, 0, 1023)
	}, this.a6B = function(mH, mI) {
		return this.iT() && fn < mH && mH < fn + j && mI > this.fp
	}, this.hu = function(mH, mI) {
		if (!this.iT()) return !1;
		if (!(__fx.settings.keybindButtons && mI > this.fp - Math.floor(bf.gap / 4) - this.k && mI < this.fp - Math.floor(bf.gap / 4) && __fx.mobileKeybinds.click(mH - fn))) {
			if (!aS.a6B(mH, mI)) return !1;
			aT.oA = !1, ! function(un, mH, mI) {
				if (function(mH, mI) {
						return fn < mH && mH < fn + aCn && mI > aS.fp
					}(mH, mI)) return aD0(aCo);
				if (function(mH, mI) {
						return fn + j - aCn < mH && mH < fn + j && mI > aS.fp
					}(mH, mI)) return aD0(1 / aCo);
				return un.hv = !0, aD1(mH)
			}(this, mH, mI) || (bi.dy = !0)
		}
		return !0
	}, this.a6E = function(oH) {
		0 !== aE.a49 && this.iT() && aD0(oH) && (bi.dy = !0)
	}, this.a5k = function(deltaY) {
		var oH;
		return !(0 === deltaY || !this.iT()) && aD0(oH = 0 < deltaY ? (oH = 400 / (400 + deltaY)) < aCo ? aCo : oH : 1 / aCo < (oH = (400 - deltaY) / 400) ? 1 / aCo : oH)
	}, this.a5h = function(mH) {
		return !!this.hv && aD1(mH)
	}, this.a67 = function() {
		this.hv = !1
	}, this.el = function() {
		this.iT() && a8S !== bD.h2.jJ(aE.fQ, this.iB()) && (aBi = !0)
	}, this.yl = function() {
		this.iT() && (ym.drawImage(canvas, fn, this.fp), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(ym, fn, this.fp)
	}
}

function d9() {
	var canvas, p2, rect, font, aD2 = 0,
		aD3 = !1,
		aD4 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		aD5 = 5;

	function aDC() {
		if (aD3) {
			var aC, fg = aD4.length,
				aCv = Math.floor(.5 * rect.k),
				k = fg * aCv,
				fn = Math.floor(Math.floor(rect.fn) + .3 * rect.j - .5),
				fp = Math.floor(Math.floor(rect.fp) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			for (ym.fillStyle = bE.qH, ym.fillRect(fn, fp, j, k), ym.fillStyle = bE.qk, ym.fillRect(fn, fp + aD5 * aCv, j, aCv), ym.fillStyle = bE.qL, ym.fillRect(fn, fp, 2, k), ym.fillRect(fn, fp, j, 2), ym.fillRect(fn + j - 2, fp, 2, k), aC =
				1; aC < fg; aC++) ym.fillRect(fn, fp + aC * aCv, j, 2);
			for (ym.fillStyle = bE.qL, bD.t4.textAlign(ym, 1), bD.t4.textBaseline(ym, 1), ym.font = bD.t4.t7(0, .6 * aCv), fn += .5 * j, aC = 0; aC < fg; aC++) ym.fillText(aDK(aC), fn, fp + (aC + .6) * aCv)
		}
		ym.drawImage(canvas, Math.floor(rect.fn), Math.floor(rect.fp))
	}

	function nR(un) {
		var fn, o5, o6, aCv;
		p2.clearRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), p2.fillStyle = bE.qH, p2.fillRect(0, 0, Math.floor(rect.j), Math.floor(rect.k)), aE.o8 && (p2.fillStyle = bE.qk, p2.fillRect(0, 0, Math.floor(.3 * rect.j), Math.floor(rect.k))), p2
			.fillStyle = bE.qL, p2.fillText("Hide UI", .15 * rect.j, .5 * rect.k), p2.fillRect(Math.floor(.3 * rect.j - .5), 0, 2, Math.floor(rect.k)), fn = .5 * rect.j, p2.fillText("Replay Speed", fn, .31 * rect.k), p2.fillText(aDK(aD5), fn, .69 *
				rect.k), p2.fillRect(Math.floor(.7 * rect.j - .5), 0, 2, Math.floor(rect.k)), un.a97 ? (fn = Math.floor(.02 * rect.j), un = Math.floor(.025 * rect.j), o5 = Math.floor(.85 * rect.j - fn - .5 * un), o6 = Math.floor(.25 * rect.k), aCv =
				Math.floor(rect.k) - 2 * o6, p2.fillRect(o5, o6, fn, aCv), p2.fillRect(o5 + fn + un, o6, fn, aCv)) : function() {
				var j = Math.floor(.46 * rect.k),
					k = Math.floor(.23 * rect.k),
					fn = Math.floor(.85 * rect.j - .5 * j + j / 12),
					fp = Math.floor(.5 * rect.k - k);
				p2.beginPath(), p2.moveTo(fn, fp), p2.lineTo(fn + j, fp + k), p2.lineTo(fn, fp + (k << 1)), p2.fill()
			}(), p2.fillRect(0, 0, Math.floor(rect.j), 2), p2.fillRect(0, 0, 2, Math.floor(rect.k)), p2.fillRect(0, Math.floor(rect.k) - 2, Math.floor(rect.j), 2), p2.fillRect(Math.floor(rect.j - 2), 0, 2, Math.floor(rect.k))
	}

	function aDK(aC) {
		return 5 === aC ? "Normal" : "" + aD4[aC]
	}
	this.a97 = !1, this.dr = function() {
		aE.hp && (aD5 = 5, this.a97 = !1, aD3 = !1, rect = new u6([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.aD6 = function() {
		return aD4[aD5]
	}, this.a2H = function() {
		return rect.fp
	}, __fx.replay.controls = {
		fxIsPlaying: () => this.a97,
		fxGetSpeedIndex: () => aD5,
		fxSetSpeedIndex: index => {
			aD5 = index, this.resize()
		},
		fxGetPanelTop: () => rect && rect.fp
	}, this.aAd = function(aCw) {
		return !!aE.hp && rect.fn + rect.j > i.j - aCw - bf.gap
	}, this.resize = function() {
		aE.hp && (rect.resize(), rect.fp -= (bn.a9O() - 1) * bf.gap, font = bD.t4.t7(0, .3 * rect.k), (canvas = document.createElement("canvas")).width = Math.floor(rect.j), canvas.height = Math.floor(rect.k), (p2 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bD.t4.textAlign(p2, 1), bD.t4.textBaseline(p2, 1), nR(this))
	}, this.a6H = function(aD7) {
		0 === aE.a49 || u.iT() || aD7 !== aE.o8 && (aE.o8 = aD7, bk.resize(), bi.dy = !0, aE.hp) && (aD2 = bi.eg + 2e3, nR(this))
	}, this.hu = function(fn, fp) {
		if (!aE.hp) return !1;
		if (fn < rect.fn || fp < rect.fp || fn > rect.fn + rect.j) return aD3 && function(un, fn, fp) {
			var fg = aD4.length,
				aCv = Math.floor(.5 * rect.k),
				k = fg * aCv,
				o5 = Math.floor(Math.floor(rect.fn) + .3 * rect.j - .5),
				k = Math.floor(Math.floor(rect.fp) - k),
				j = Math.floor(.4 * rect.j + 2.5);
			return aD3 = !1, bi.dy = !0, fn < o5 || o5 + j < fn || fp < k || (aD5 = aDB(0, Math.floor((fp - k) / aCv), fg - 1), nR(un)), !0
		}(this, fn, fp);
		if ((fn -= rect.fn) < .3 * rect.j) aD3 = !1, this.a6H(!aE.o8);
		else {
			if (fn < .7 * rect.j) return aD3 = !aD3, bi.dy = !0;
			this.a6J(!1)
		}
		return !0
	}, __fx.replay.togglePlayPause = () => this.a6J(!0), this.a6J = function(aD9) {
		2 === aE.a49 ? (this.a6H(!1), u.v(3)) : (aD3 = !1, this.a97 = !this.a97, this.a97 ? (aN.hr && aN.a6I(), a1.a2.setState(1)) : aD9 || aN.aA6(), bi.dy = !0, nR(this))
	}, this.aDA = function() {
		this.a97 = !1, aN.aA6(), bi.dy = !0, nR(this)
	}, this.a60 = function(fn, fp) {
		return !!aE.o8 && (0 <= aN.hu(fn, fp) || (aE.hp ? ((bi.eg > aD2 || !this.hu(fn, fp)) && aT.hu(fn, fp), bi.dy = !0, aD2 = bi.eg + 2e3) : aT.hu(fn, fp)), !0)
	}, this.el = function() {
		aE.hp && aE.o8 && bi.eg > aD2 - 1e3 && bi.eg < aD2 && (bi.dy = !0)
	}, this.a4I = function() {
		aE.hp && (this.a97 = !1, bi.dy = !0, nR(this))
	}, this.yl = function() {
		if (aE.hp) {
			if (aE.o8) {
				if (bi.eg > aD2) return;
				if (bi.eg > aD2 - 1e3) return ym.globalAlpha = aDB(0, (1e3 - (bi.eg - (aD2 - 1e3))) / 1e3, 1), aDC(), void(ym.globalAlpha = 1)
			}
			aDC()
		}
	}
}

function cQ() {
	var aDL, aDM, j, fn, fp, aDN, aDO;
	this.dr = function() {
		aDL = new Array(2), aDM = new Array(2), this.oA = !1, aDO = aDN = jM = jL = 0, iv = 1, this.resize()
	}, this.resize = function() {
		j = (j = Math.floor((a1.a2.it() ? .072 : .0502) * i.iu)) < 8 ? 8 : j;
		for (var aC = 1; 0 <= aC; aC--) aDL[aC] = document.createElement("canvas"), aDL[aC].width = j, aDL[aC].height = j, aDM[aC] = aDL[aC].getContext("2d", {
			alpha: !0
		});
		this.aCp(),
			function() {
				for (var aDf = Math.floor(1 + j / 20), aC = 1; 0 <= aC; aC--) aDM[aC].clearRect(0, 0, j, j), aDM[aC].fillStyle = bE.qE, aDM[aC].beginPath(), aDM[aC].arc(j / 2, j / 2, j / 2 - aDf, 0, 2 * Math.PI), aDM[aC].fill(), aDM[aC]
					.lineWidth = aDf, aDM[aC].fillStyle = bE.qL, aDM[aC].strokeStyle = bE.qL, aDM[aC].strokeStyle = __fx.utils.lineColor(bE.qL), aDM[aC].beginPath(), aDM[aC].arc(j / 2, j / 2, j / 2 - aDf, 0, 2 * Math.PI), aDM[aC].stroke(), a2N(
						aDM[aC], 0, 0, j, aDf, .3, 0 === aC)
			}()
	}, this.a2G = function() {
		return -jL / iv
	}, this.a2H = function() {
		return -jM / iv
	}, this.oK = function(aDS, j1) {
		jL = iv * aDS - j1
	}, this.oL = function(aDT, j2) {
		jM = iv * aDT - j2
	}, this.hu = function(aDR, aAe) {
		return aE.o8 || ! function(aDR, aAe) {
			return Math.pow(aDR - (fn + j / 2), 2) + Math.pow(aAe - (fp + j / 2), 2) < j * j / 4 || Math.pow(aDR - (fn + j / 2), 2) + Math.pow(aAe - (fp + 2 * j), 2) < j * j / 4
		}(aDR, aAe) || bm.buffer.data[8].value ? (aI.oN() && (this.oA = !0, aDN = aDR, aDO = aAe), !1) : aAe < fp + 1.25 * j ? this.a5k(Math.floor(i.j / 2), Math.floor(i.k / 2), -200) : this.a5k(Math.floor(i.j / 2), Math.floor(i.k / 2), 200)
	}, this.a5h = function(aDR, aAe) {
		var aDU, aDV, j4, j7;
		return !aI.oN() || (aDU = jL, aDV = jM, jL += j4 = aDN - aDR, jM += j7 = aDO - aAe, ag.a5h(j4, j7), this.aDW(), aDN = aDR, aDO = aAe, aDU !== jL) || aDV !== jM
	}, this.a5k = function(mH, mI, deltaY) {
		var oH;
		if (aI.oN()) {
			if (0 < deltaY) oH = (oH = 500 / (500 + deltaY)) < .5 ? .5 : oH;
			else {
				if (!(deltaY < 0)) return !1;
				oH = 2 < (oH = (500 - deltaY) / 500) ? 2 : oH
			}
			this.aDX(mH, mI, oH), bi.dy = !0
		}
		return !0
	}, this.aDX = function(fn, fp, fK) {
		var a6Z;
		fK = a6Z = (a6Z = 1024 < (a6Z = fK) * iv ? 1024 / iv : a6Z) * iv < .125 ? .125 / iv : a6Z, ag.zoom(fK, fn, fp),
			function(a6Z, mH, mI) {
				iv *= a6Z, jL = (jL + mH) * a6Z - mH, jM = (jM + mI) * a6Z - mI, aT.aDW()
			}(fK, fn, fp)
	}, this.aDW = function() {
		var aDa = i.j / 16,
			aDb = 0,
			aDc = i.k / 16,
			aDd = 0;
		jL < -i.j + aDa && (aDb = -i.j + aDa - jL), jL > iv * bV.fr - aDa && (aDb = iv * bV.fr - aDa - jL), jM < -i.k + aDc && (aDd = -i.k + aDc - jM), jM > iv * bV.fs - aDc && (aDd = iv * bV.fs - aDc - jM), jL += aDb, jM += aDd, bd.oM(), ag.aDe(
			aDb, aDd)
	}, this.aCp = function() {
		fn = i.j - j - bf.gap, fp = Math.floor(i.k / 2 - 1.25 * j)
	}, this.yl = function() {
		bm.buffer.data[8].value || (ym.drawImage(aDL[0], fn, fp), ym.drawImage(aDL[1], fn, Math.floor(fp + 3 * j / 2)))
	}
}

function cR() {
	var h, aDg, aDh, aDi, gap, aDj, aDk, aDl, aDm, aDn, a9z, aDo, hl, aDp, aBp, aDq, aDr;

	function aDv() {
		aDi = Math.floor(.2 * (a1.a2.it() ? .07 : .035) * i.iu), aDi = aAb(a1.a2.it() ? 3 : 1, aDi);
		var aDy = i.j / (h.length + gap);
		aDi = aDi < aDy ? aDy : aDi, aBp = Math.floor((1 - gap) * aDi), aDg = 0, aDz()
	}

	function aDz() {
		aDg = (aDg = aDg < -20 ? -20 : aDg) > (h.length - 15) * aDi ? (h.length - 15) * aDi : aDg, aDk = Math.floor(aDg / aDi), aDl = (aDl = aDk + Math.floor(i.j / aDi)) > h.length - 1 ? h.length - 1 : aDl, aDk = (aDk = aDl < aDk ? aDl : aDk) < 0 ?
			0 : aDk;
		var lx = aDl;
		aDj = aDh / h[lx];
		for (var aC = aDl - 1; aDk <= aC; aC--) h[aC] > h[lx] && (lx = aC, aDj = aDh / Math.pow(h[aC], aDp))
	}

	function aE2(fn) {
		fn = Math.floor((aDg + i.j - fn - gap * aDi) / aDi);
		return (fn = fn < -1 ? -1 : -1 === fn ? 0 : fn > h.length - 1 ? -1 : fn) !== aDm && (aDm = fn, -1 === aDq && 0 === aDm && aU.aDs && (aDq = setInterval(aE3, 100)), 1)
	}

	function aE4(aC) {
		var aE6 = Math.floor(aDj * Math.pow(h[aC], aDp));
		ym.fillRect(aDg + i.j - (aC + 1) * aDi, i.k - aE6, aBp, aE6)
	}

	function aE3() {
		var hE;
		0 !== (aDm = 8 === ab.a5K() ? -1 : aDm) ? (aDr = (new Date).getTime(), clearInterval(aDq), aDq = -1) : (hE = h[1] / 864e3, -1 !== aDr && (hE += ((new Date).getTime() - aDr) * h[1] / 864e5, aDr = -1), 0 < hE && (h[0] += Math.floor(hE), bi
			.dy = !0))
	}
	this.aDs = !1, this.dr = function() {
		aDr = aDq = -1, aDm = -(aDp = 1), this.aDt = !1, hl = 0, aDo = new Date, aDg = 0, gap = .3, h = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aDh = Math.floor(.15 * i.k), aDn = (aDn = Math.floor((a1.a2.it() ? .018 : .0137) * i.iu)) < 2 ? 2 : aDn, a9z = bD.t4.t7(1, aDn), aDv()
	}, this.aDw = function(aDx) {
		var aC;
		for (this.aDs = !0, aC = 0; aC < aDx.length; aC++) h.unshift(aDx[aC]);
		aDv(), bi.dy = !0
	}, this.aE0 = function() {
		aDz()
	}, this.a5h = function(fn, fp) {
		fp > i.k - .6 * aDh ? this.aDt ? fn !== hl && (aDg += fn - hl, hl = fn, aDz(), aE2(fn), this.aDt = -1 !== aDm, bi.dy = !0) : aE2(fn) && (bi.dy = !0) : this.reset()
	}, this.reset = function() {
		-1 !== aDm && (this.aDt = !1, aDm = -1, bi.dy = !0)
	}, this.a5k = function(fn, deltaY) {
		-1 !== aDm && (aDg += Math.floor(deltaY), aDz(), aE2(fn), bi.dy = !0)
	}, this.hu = function(fn, fp) {
		this.a5h(fn, fp), -1 !== aDm && (hl = fn, this.aDt = !0)
	}, this.a66 = function() {
		-1 !== aDm && (this.aDt = !1)
	}, this.yl = function() {
		ym.fillStyle = bE.qO;
		for (var aE7, month, eh, vX, aEA, aEB, o6, aEC, aED, aC = aDl; aDk <= aC; aC--) aE4(aC);
		this.aDs && 0 === aDk && (ym.fillStyle = bE.qx, aE4(0)), -1 !== aDm && (ym.fillStyle = bE.qN, aE4(aDm)), -1 !== aDm && (ym.font = a9z, bD.t4.textBaseline(ym, 2), (eh = new Date).setTime(aDo.getTime() - 1e3 * aDm * 60 * 60 * 24), month =
			"month", aE7 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(eh), aE7 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(eh)), aE7 = aE7 + ", " + eh.getUTCDate() + " " + month + " " + eh.getFullYear(), month = 1 === h[aDm] ? L(126) : L(127), month = bD.pY.a3S(h[aDm]) + " " + month, eh = Math.floor(ym.measureText(aE7).width), vX = Math
			.floor(ym.measureText(month).width), aEA = Math.floor(.5 * (eh + aDn)), aEB = (aEB = aDg + i.j - (aDm + 1) * aDi) < aEA ? aEA : aEB > i.j - aEA ? i.j - aEA : aEB, o6 = i.k - Math.floor(aDj * Math.pow(h[aDm], aDp)), aEC = Math
			.floor(1.1 * aDn), aED = o6 > i.k - aEC ? i.k - aEC : o6, ym.fillStyle = bE.qI, ym.fillRect(i.j - vX - aDn, aED - aEC, vX + aDn, aEC), ym.fillRect(aEB - aEA, i.k - aEC, eh + aDn, aEC), ym.fillStyle = bE.qL, bD.t4.textAlign(ym, 2),
			ym.fillText(month, Math.floor(i.j - .5 * aDn), aED), bD.t4.textAlign(ym, 1), ym.fillText(aE7, aEB, i.k), ym.strokeStyle = bE.qP, ym.lineWidth = 1, ym.beginPath(), ym.moveTo(0, o6), ym.lineTo(i.j, o6), ym.closePath(), ym.stroke())
	}
}

function cS() {
	var a9z, j, fp, aEE, aEF, aEG, canvas, p2, aBi, a7l, aEH, aEI, aEJ, aEK;
	this.fn = 0, this.k = 0, this.dr = function() {
		aEG = aE.a8h, aEI = "rgba(0,100,0,0.8)", aEJ = "rgba(150,0,0,0.8)", aBi = aEH = !0, a7l = ah.hi[aE.fQ], this.resize()
	}, this.resize = function() {
		j = Math.floor((a1.a2.it() ? .305 : .24) * i.iu), this.k = Math.floor(.5 + .13 * j), j = Math.floor(6 * this.k), a9z = bD.t4.t7(1, Math.floor(.8 * this.k)), aEF = bD.t4.t7(1, Math.floor(.45 * this.k)), aEK = Math.floor(.5 * this.k), bV
			.a0e.font = a9z, fp = bf.gap, aEE = Math.floor(1 + .13 * this.k), (canvas = document.createElement("canvas")).width = j, canvas.height = this.k, p2 = canvas.getContext("2d", {
				alpha: !0
			}), bD.t4.textBaseline(p2, 1), bD.t4.textAlign(p2, 1), this.aEL()
	}, this.aCB = function() {
		return a1.a2.it() && i.j < 1.2 * i.k
	}, this.aCp = function() {
		this.aCB() ? this.fn = i.j - j - bf.gap : this.fn = Math.floor(aW.aEM() + (i.j - aW.aEM() - aX.j - j) / 2 - .5 * bf.gap)
	}, this.nQ = function() {
		aBi && (aBi = !1, this.aEL())
	}, this.aEL = function() {
		p2.font = a9z, p2.clearRect(0, 0, j, this.k), p2.fillStyle = aEH ? aEI : aEJ, p2.fillRect(0, 0, j, this.k), p2.fillStyle = bE.qN;
		var eq = this.aEN(),
			aEP = (this.aEO(), p2.fillStyle = ah.hi[aE.fQ] >= af.ki(aE.fQ) ? bE.qu : bE.qL, bD.pY.a3S(a7l)),
			aEP = (p2.fillText(aEP, Math.floor(j / 2), aEK), p2.measureText(aEP).width),
			aEQ = (p2.font = aEF, p2.fillStyle = 9 === eq ? bE.rY : bE.qL, af.aER),
			aES = "+" + aEQ,
			vX = p2.measureText(aES).width,
			aET = Math.floor(this.k / 12),
			aEP = .5 * (j + aEP) + aET;
		(aEP + vX + aEE <= j || 1e3 <= aEQ && (aES = "+" + Math.floor(aEQ / 1e3) + "K", aEP + (vX = p2.measureText(aES).width) + aEE <= j)) && p2.fillText(aES, Math.floor(aEP + .5 * vX), Math.floor(.3 * this.k)), __fx.settings
			.displayTickNumber && p2.fillText(9 - eq, Math.floor(2 * aEE + aET), Math.floor(.3 * this.k)), p2.fillStyle = bE.qL, __fx.utils.smoothFrame(p2, j, this.k) || (p2.fillRect(0, 0, j, 1), p2.fillRect(0, 0, 1, this.k), p2.fillRect(0, this
				.k - 1, j, 1), p2.fillRect(j - 1, 0, 1, this.k))
	}, this.aEN = function() {
		var eq = bi.kz() % 100,
			a1J = (eq = 9 - bO.g7(eq -= eq % 10, 10), Math.floor(eq * (this.k - aEE) / 9));
		return p2.fillRect(0, a1J, aEE, this.k - a1J), p2.fillRect(j - aEE, a1J, aEE, this.k - a1J), eq
	}, this.aEO = function() {
		p2.fillRect(aEE, this.k - aEE, Math.floor((j - 2 * aEE) * ah.hi[aE.fQ] / aEG), aEE)
	}, this.el = function() {
		var hE = aE.fQ;
		bD.h2.ht(hE) && (hE = ah.hi[hE] - ah.a7k[hE], a7l !== hE ? (aEG = aAb(hE, aEG), aEH = a7l < hE && 10 <= hE, a7l = hE, aBi = !0) : bi.kz() % 10 == 9 && (aBi = !0))
	}, this.yl = function() {
		0 === ah.ne[aE.fQ] || aE.i5 || 2 === ah.a7b[aE.fQ] || ym.drawImage(canvas, this.fn, fp)
	}
}

function cT() {
	var aEU, aEV, aEW, aEX, aEY, aEZ, aEa, aEb, aEc, aEd, aEe, aEf, aEg, aEh, aEi, aEj, aEk, aEl, aEm, aEn, aEo, aEp, position, aEq, aEr, aEs, aEt, aEu, aEv = 1,
		aEw = 1,
		aEx = "";
	var leaderboardHasChanged = true;
	this.playerPos = aE.fQ;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => kn[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(kn[aE.fQ]);
	}

	function aEz() {
		aEa.clearRect(0, 0, aEU, aCQ),
			aEa.fillStyle = aEu ? bE.rH : bE.rD,
			aEa.fillRect(0, 0, aEU, aEf),
			aEa.fillStyle = bE.qH,
			aEa.fillRect(0, aEf, aEU, aCQ - aEf);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		if (__fx.leaderboardFilter.showingRivals && leaderboardHasChanged) {
			__fx.leaderboardFilter.computeRivals();
			leaderboardHasChanged = false;
		}
		if (__fx.leaderboardFilter.showingRivals) {
			let rivalsCount = __fx.leaderboardFilter.rivalsData.length;
			if (position !== 0 && position >= rivalsCount - aEY)
				position = (rivalsCount > aEY ? rivalsCount : aEY) - aEY;
		}
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			kn[aE.fQ]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aEp = -1;
		if (__fx.leaderboardFilter.enabled && aEp >= __fx.leaderboardFilter.filteredLeaderboard.length) aEp = -1;
		if (__fx.leaderboardFilter.showingRivals && aEp + position >= __fx.leaderboardFilter.rivalsData.length) aEp = -1;
		(__fx.leaderboardFilter.showingRivals ?
			(function() {
				var ownClanIndex = __fx.leaderboardFilter.getOwnClanIndex();
				if (ownClanIndex >= position && ownClanIndex < position + aEY) aF1(ownClanIndex - position, bE.qk);
			})() :
			(playerPos >= position && aF1(playerPos - position, bE.qk),
				0 !== kn[aE.fQ] && 0 === position && aF1(0, bE.rP))
		),
		-1 !== aEp && aF1(aEp, bE.qM),
			aEa.fillStyle = bE.qH,
			//console.log("drawing", aEp),
			aEa.clearRect(0, aCQ - __fx.leaderboardFilter.tabBarOffset, aEU, __fx.leaderboardFilter.tabBarOffset);
		aEa.fillRect(0, aCQ - __fx.leaderboardFilter.tabBarOffset, aEU, __fx.leaderboardFilter.tabBarOffset);
		aEa.fillStyle = __fx.utils.lineColor(bE.qL),
			aEa.fillRect(0, aEf, aEU, 1),
			aEa.fillRect(0, aCQ - __fx.leaderboardFilter.tabBarOffset, aEU, 1),
			__fx.leaderboardFilter.drawTabs(aEa, aEU, aCQ - __fx.leaderboardFilter.tabBarOffset, bE.qk),
			__fx.utils.smoothFrame(aEa, aEU, aCQ, bf.a39) || (
				aEa.fillRect(0, 0, aEU, bf.a39),
				aEa.fillRect(0, 0, bf.a39, aCQ),
				aEa.fillRect(aEU - bf.a39, 0, bf.a39, aCQ),
				aEa.fillRect(0, aCQ - bf.a39, aEU, bf.a39)),
			aEa.fillStyle = bE.qL, aEa.font = aEV, bD.t4.textBaseline(aEa, 1), bD.t4.textAlign(aEa, 1), aEa.fillText(aEx, Math.floor((aEU + aEf - 22) / 2), Math.floor(aEd + aEW / 2));
		__fx.playerList.drawButton(aEa, 12, 12, aEf - 22);
		var fz, hF = playerPos < position + aEY - 1 ? 1 : 2;
		if (__fx.leaderboardFilter.showingRivals) hF = 1;

		if (__fx.leaderboardFilter.showingRivals) {
			var rivalsRestore = [];
			try {
				for (var rivalsRow = 0; rivalsRow < aEY; rivalsRow++) {
					var rivalsEntry = __fx.leaderboardFilter.rivalsData[rivalsRow + position];
					if (rivalsEntry === undefined) break;
					var repId = rivalsEntry.representativeId;
					rivalsRestore.push([repId, ah.hU[repId], ah.a2e[repId], ah.a7b[repId]]);
					ah.hU[repId] = rivalsEntry.territory;
					ah.a2e[repId] = "[" + rivalsEntry.clan + "]";
					ah.a7b[repId] = 0;
				}
				for (aEa.font = aEX, bD.t4.textAlign(aEa, 0), fz = aEY - hF; 0 <= fz; fz--) {
					const rivalsEntryLeft = __fx.leaderboardFilter.rivalsData[fz + position];
					if (rivalsEntryLeft !== undefined)
						aF2(rivalsEntryLeft.representativeId), aF3(fz, fz + position, rivalsEntryLeft.representativeId);
				}
				for (bD.t4.textAlign(aEa, 2), fz = aEY - hF; 0 <= fz; fz--) {
					const rivalsEntryRight = __fx.leaderboardFilter.rivalsData[fz + position];
					if (rivalsEntryRight !== undefined)
						aF2(rivalsEntryRight.representativeId), aF4(fz, rivalsEntryRight.representativeId);
				}
			} finally {
				rivalsRestore.forEach(function(entry) {
					ah.hU[entry[0]] = entry[1];
					ah.a2e[entry[0]] = entry[2];
					ah.a7b[entry[0]] = entry[3];
				});
			}
		} else if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aEY)
				position = (result.length > aEY ? result.length : aEY) - aEY;
			//if (position >= result.length) position = result.length - 1;
			for (aEa.font = aEX, bD.t4.textAlign(aEa, 0), fz = aEY - hF; 0 <= fz; fz--) {
				const pos = result[fz + position];
				if (pos !== undefined)
					aF2(md[pos]), aF3(fz, pos, md[pos]);
			}
			for (bD.t4.textAlign(aEa, 2), fz = aEY - hF; 0 <= fz; fz--) {
				const pos = result[fz + position];
				if (pos !== undefined)
					aF2(md[pos]), aF4(fz, md[pos]);
			}
		} else {
			for (aEa.font = aEX, bD.t4.textAlign(aEa, 0), fz = aEY - hF; 0 <= fz; fz--)
				aF2(md[fz + position]), aF3(fz, fz + position, md[fz + position]);
			for (bD.t4.textAlign(aEa, 2), fz = aEY - hF; 0 <= fz; fz--)
				aF2(md[fz + position]), aF4(fz, md[fz + position]);
		}!__fx.leaderboardFilter.showingRivals && 2 == hF && (aF2(aE.fQ), bD.t4.textAlign(aEa, 0), aF3(aEY - 1, kn[aE.fQ], aE.fQ), bD.t4.textAlign(aEa, 2), aF4(aEY - 1, aE.fQ)), 0 === position && (hF = .7 * aEg / ac.get(4).height, aEa.setTransform(
			hF, 0, 0, hF, Math.floor(aEh + .58 * aEg + .5 * hF * ac.get(4).width), Math.floor(aEd + aEW + .4 * aEg)), aEa.imageSmoothingEnabled = !0, aEa.drawImage(ac.get(4), -Math.floor(ac.get(4).width / 2), -Math.floor(ac.get(4).height /
			2)), aEa.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aF2(player) {
		aE.ib && (aEa.fillStyle = bj.aF6[bj.aF7[player]])
	}

	function aF1(aC, aF8) {
		aEa.fillStyle = aF8, aC = aEY - 1 < aC ? aEY - 1 : aC;
		aF8 = Math.floor((aC === aEY - 1 ? 2 : 0 === aC ? 1.15 : 1) * aEg), aF8 = aC === aEY - 2 ? Math.floor(aEf + 9.15 * aEg) - Math.floor(aEf + 8.15 * aEg) : aF8;
		aEa.fillRect(0, Math.floor(aEf + (aC + (0 === aC ? 0 : .15)) * aEg), aEU, aF8)
	}

	function aF3(zq, a80, aC) {
		aEa.fillText(aEl[a80], aEh, Math.floor(aEd + aEW + (zq + .5) * aEg)), 1 === ah.a7b[aC] && (aEa.font = "italic " + aEX);
		a80 = Math.floor(aEd + aEW + (zq + .5) * aEg);
		aEa.fillText(ah.a2e[aC], aEi, a80), 0 !== ah.a7b[aC] && (aEa.font = aEX), aC < aE.l2 && 2 !== ah.a7b[aC] || aEa.fillRect(aEi, a80 + .35 * aEv, aEk[aC], Math.max(1, .1 * aEv))
	}

	function aF4(zq, aC) {
		aEa.fillText(ah.hU[aC], aEj, Math.floor(aEd + aEW + (zq + .5) * aEg))
	}
	this.dr = function() {
		var aC;
		for (u.z.vK[0] = 0, aEt = aEs = aEq = 0, aEu = aEr = !1, aEp = -1, aEY = a1.a2.it() ? 6 : 10, aEw = (position = 0) === (aEw = bm.buffer.data[11].value) ? 10 : 1 === aEw ? 5 : 1, aEo = !1, aEm = new Uint16Array(aEY + 1), aEn =
			new Uint32Array(aEY + 1), aEc = aE.fd, md = new Uint16Array(aEc), kn = new Uint16Array(aEc), aC = aEc - 1; 0 <= aC; aC--) md[aC] = aC, kn[aC] = aC;
		this.resize(!0), aEk = new Uint16Array(aE.fd);
		var aEy = Math.floor(aEU - aEi - aEh - aEb);
		for (aEl = new Array(aE.fd), aEa.font = aEX, aC = aE.fd - 1; 0 <= aC; aC--) aEl[aC] = aC + 1 + ".", ah.a2e[aC] = bD.p2.a7E(ah.a4s[aC], aEX, aEy), aEk[aC] = Math.floor(aEa.measureText(ah.a2e[aC]).width);
		aEz()
	}, this.resize = function(dr) {
		if (aCQ = a1.a2.it() ? (aEU = Math.floor(.335 * i.iu), Math.floor(aEY * aEU / 8)) : (aEU = Math.floor(.27 * i.iu), Math.floor(aEY * aEU / 10)), aEU = Math.floor(.97 * aEU), (aEZ = document.createElement("canvas")).width = aEU, aEZ
			.height = aCQ, aEa = aEZ.getContext("2d", {
				alpha: !0
			}), aEd = .025 * aEU, aEW = .16 * aEU, aEe = 0 * aEU, aEf = Math.floor(.45 * aEd + aEW), aEg = (aCQ - aEW - 2 * aEd - aEe) / aEY,
			aEZ.height = aCQ += aEg, __fx.leaderboardFilter.tabBarOffset = Math.floor(aEg * 1.3), __fx.leaderboardFilter.verticalClickThreshold = aCQ - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aEU,
			aEV = bD.t4.t7(1, Math.floor(.55 * aEW)), aEv = Math.floor((a1.a2.it() ? .67 : .72) * aEg), aEX = bD.t4.t7(0, aEv), aEa.font = aEX, aEh = Math.floor(.04 * aEU), aEi = Math.floor((a1.a2.it() ? .195 : .18) * aEU), aEb = Math.floor(aEa
				.measureText("00920600").width), aEa.font = aEV, aEj = aEU - aEh, !dr) {
			aEa.font = aEX;
			for (var aC = aE.fd - 1; 0 <= aC; aC--) aEk[aC] = Math.floor(aEa.measureText(ah.a2e[aC]).width);
			aEz()
		}
		aEx = bD.p2.a7E(L(128), aEV, .96 * aEU)
	}, this.aEM = function() {
		return aEU
	}, this.nQ = function(c1, aF0) {
		(aF0 || aEo && (c1 || bi.kz() % aEw == 0)) && (aEo = !1, aEz())
	}, this.el = function() {
		! function() {
			for (var fz = aEc - 1; 0 <= fz; fz--) 0 === ah.ne[md[fz]] && ! function(fz) {
				var aFG = md[fz];
				aEc--;
				for (var aC = fz; aC < aEc; aC++) md[aC] = md[aC + 1], kn[md[aC]] = aC;
				md[aEc] = aFG, kn[md[aEc]] = aEc
			}(fz)
		}();
		for (var aFE, oN = aEc - 1, fz = 0; fz < oN; fz++) ah.hU[md[fz]] < ah.hU[md[fz + 1]] && (aFE = md[fz], md[fz] = md[fz + 1], md[fz + 1] = aFE, kn[md[fz]] = fz, kn[md[fz + 1]] = fz + 1);
		! function() {
			for (var eh = aEo, hF = (aEo = !0, kn[aE.fQ] >= aEY - 1 ? aEY - 2 : aEY - 1), aC = hF; 0 <= aC; aC--)
				if (aEm[aC] !== md[aC] || aEn[aC] !== ah.hU[md[aC]]) return;
			(hF != aEY - 2 || aEm[aEY] === kn[aE.fQ] && aEn[aEY] === ah.hU[aE.fQ]) && (aEo = eh)
		}();
		for (var aC = aEY - 1; 0 <= aC; aC--) aEm[aC] = md[aC], aEn[aC] = ah.hU[md[aC]];
		aEm[aEY] = kn[aE.fQ], aEn[aEY] = ah.hU[aE.fQ];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hu = function(fn, fp) {
		if (a38(fn, fp)) {
			if (__fx.utils.isPointInRectangle(fn, fp, bf.gap + 12, bf.gap + 12, aEf - 22, aEf - 22)) __fx.playerList.display(ah.a4s);
			else {
				if (fp - bf.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(fn - bf.gap);
				fn = aFI(fp);
				0 <= fn ? (aEq = bi.eg, aEr = !0, aEs = aEt = fn, bM.a6K() && (fn = aDB(-1, aEt, aEY), aEp !== (fn = fn === aEY ? -1 : fn)) && (aEp = fn, aEz(), bi.dy = !0)) : (aEu && (aEu = !1, aEz(), bi.dy = !0), u.v(10, 0, new aFJ({
					aFK: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aEz(), bi.dy = !0
	};

	function aFI(fp) {
		return (fp -= bf.gap + aEf) < 0 ? Math.floor(fp / aEg) - 1 : fp < (aEY - 1) * aEg ? Math.floor(fp / aEg) : fp < aCQ - aEf ? aEY - 1 : (fp -= aCQ - aEf, aEY + Math.floor(fp / aEg))
	}

	function a38(fn, fp) {
		return fn >= bf.gap && fn < bf.gap + aEU && fp >= bf.gap && fp < bf.gap + aCQ
	}
	this.a5h = function(fn, fp) {
		var eh, aFH;
		if (__fx.utils.isPointInRectangle(fn, fp, bf.gap + 12, bf.gap + 12, aEf - 22, aEf - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(fn, fp, bf.gap, bf.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), fn - bf.gap)) return aFH = aFI(fp), fn = a38(fn, fp), fp = !(!(aFH < 0 && fn) || bM.a6K()), aEr ? (eh = position, (position = aDB(0, position += aEs - aFH, aE.fd - aEY)) !== eh ? (aEu = fp,
			aFH = aDB(-1, aEs = aFH, aEY), aEp = aFH = aFH !== aEY && fn ? aFH : -1, aEz(), bi.dy = !0) : aEu !== fp && (aEu = fp, aEz(), bi.dy = !0), !0) : (aFH = (aFH = aDB(-1, aFH, aEY)) === aEY || !fn || bM.a6K() ? -1 : aFH, (aEp !==
			aFH || aEu !== fp) && (aEp = aFH, aEu = fp, aEz(), bi.dy = !0))
	}, this.a66 = function(fn, fp) {
		if (!aEr) return !1;
		aEr = !1;
		var aFH = aFI(fp);
		var isEmptySpace = false;
		return bM.a6K() && -1 !== aEp && (aEp = -1, aEz(), bi.dy = !0), bi.eg - aEq < 350 && aEt === aFH && -1 !== (aFH = (aFH = aDB(-1, aFH, aEY)) !== aEY && a38(fn, fp) ? aFH : -1) && (fn = (__fx.leaderboardFilter.showingRivals ?
				(isEmptySpace = __fx.leaderboardFilter.rivalsData[aFH + position] === undefined, __fx.leaderboardFilter.rivalsData[aFH + position]?.representativeId ?? aE.fQ) :
				__fx.leaderboardFilter.enabled ? (updateFilteredLb(), md[__fx.leaderboardFilter.filteredLeaderboard[aFH + position] ?? (isEmptySpace = true, kn[aE.fQ])]) : md[aFH + position]),
			aFH === aEY - 1 && !__fx.leaderboardFilter.showingRivals && (__fx.leaderboardFilter.enabled ? this.playerPos : kn[aE.fQ]) >=
			position + aEY - 1 && (fn = aE.fQ), !isEmptySpace && aE.ib && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(fn, ah.a4s, aE.lM), 0 === ah.ne[fn] || isEmptySpace || aE.i5 && !aE.lM && !aE.hp && !aE
			.hq && fn !== aE.fQ || aI.o0(fn, 800, !1, 0)), !0
	}, this.a5k = function(fn, fp, deltaY) {
		var aFN;
		return !(aEr || aE.o8 || (aFN = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !a38(fn, fp)) || (fn = (fn = aDB(-1, aFI(fp), aEY)) === aEY || bM.a6K() ? -1 : fn, 0 < deltaY ? position < aE.fd - aEY && (position += Math.min(aE.fd - aEY -
			position, aFN), aEp = fn, aEz(), bi.dy = !0) : 0 < position && (position -= Math.min(position, aFN), aEp = fn, aEz(), bi.dy = !0), 0))
	}, this.yl = function() {
		ym.drawImage(aEZ, bf.gap, bf.gap)
	}
}

function cU() {
	var canvas, p2, fn, fp, aE6, aFO, gap, aFP, fontSize, aFQ, aFR, aFS, aFT, aFU, aFV, aFW, aFX, aFY;

	function aFc() {
		p2.clearRect(0, 0, aX.j, aX.k), p2.fillStyle = bE.qI, p2.fillRect(0, 0, aX.j, aX.k), p2.fillStyle = bE.qf, fK = 0 < aFW ? aFW : aFT[4] / 1e4, p2.fillRect(0, aX.k - aE6 - 1, Math.floor(fK * aX.j), aE6), p2.fillStyle = bE.qL, p2.fillStyle =
			__fx.utils.lineColor(bE.qL), __fx.utils.smoothFrame(p2, aX.j, aX.k) || (p2.fillRect(0, 0, aX.j, 1), p2.fillRect(0, 0, 1, aX.k), p2.fillRect(aX.j - 1, 0, 1, aX.k), p2.fillRect(0, aX.k - 1, aX.j, 1)), p2.fillRect(0, aX.k - aE6 - 1, aX.j,
			1), p2.fillStyle = bE.qL;
		for (var fK, aFe, eh = 0, aC = 0; aC < aFS.length; aC++) aFU[aC] ? (bD.t4.textAlign(p2, 0), aFe = Math.floor((aFO - aE6 + 2 * aFP) * (aC - eh + 1) / (aFS.length + 1) - .7 * aFP), p2.fillText(aFS[aC], gap, aFe), bD.t4.textAlign(p2, 2), 5 ===
			aC && 0 !== ah.ne[aE.fQ] && ah.hi[aE.fQ] >= af.ki(aE.fQ) ? (p2.fillStyle = bE.rN, p2.fillText(aFa(aC), aX.j - gap, aFe), p2.fillStyle = bE.qL) : p2.fillText(aFa(aC), aX.j - gap, aFe)) : eh++
	}

	function aFa(aC) {
		return aC < 3 ? aFT[aC].toString() : 3 === aC || 4 === aC || 5 === aC ? bD.pY.a8L(aFT[aC] / 100, 2) : aC < 7 ? bD.pY.a3S(aFT[aC]) : aC === 7 ? aX.aFf(aFT[7]) : aC === 8 ? __fx.utils.getMaxTroops(ah.hU, aE.fQ) : __fx.utils.getDensity(aE.fQ)
	}

	function aFZ() {
		ah.hU[aE.fQ] !== aFT[6] && (aFT[6] = ah.hU[aE.fQ], aFQ++)
	}
	this.dr = function() {
		aFW = aFX = 0, (aFR = new Array(8))[0] = L(129), aFR[1] = aE.lM ? L(33) : L(130), aFR[2] = L(131), aFR[3] = L(132), aFR[4] = L(133), aFR[5] = L(134, 0, "Interest"), aFR[6] = L(135), aFR[7] = L(136),
			aFR.push("Max Troops", "Density"), // add aFR
			(aFS = new Array(aFR.length)).fill(""), (aFT = new Array(aFR.length))[0] = aE.lM ? 0 : aE.l2, aFT[1] = aE.lM ? am.lY : aE.lO, aFT[2] = aE.a4B, aFT[3] = 0, aFT[4] = bO.g7(1e4 * ah.hU[0], Math.max(aE.km, 1)), aFT[5] = 0 === aE.data
			.iIncomeType ? 700 : 1 === aE.data.iIncomeType ? bO.g7(700 * aE.data.iIncomeValue, 64) : bO.g7(700 * aE.data.iIncomeData[aE.fQ], 64), aFT[6] = 0, aFZ(), aFT[7] = 0, aFV = aFa(6), (aFU = new Array(aFR.length)).fill(!0), aFY = 0, aFY =
			aE.lM ? (aFU[0] = !1, aFU[2] = !1, aFU[3] = !1, 3) : (aFU[3] = !1, 1), aFQ = 0, this.resize()
	}, this.resize = function() {
		this.j = Math.floor((a1.a2.it() ? .1646 : .126) * 1.25 * i.iu), this.k = Math.floor(1.18 * this.j), aE6 = Math.floor(.04 * this.j), gap = Math.floor(.035 * this.j), aFP = .04 * this.j, aFO = this.k, this.k -= Math.floor(aFY * (this.k -
			2 * aE6) / aFR.length), fontSize = Math.floor(.7 * (aFO - aE6) / aFR.length);
		var a9z = bD.t4.t7(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.j, canvas.height = this.k,
			function(a9z, j) {
				for (var aC = 0; aC < aFS.length; aC++) aFS[aC] = bD.p2.a7E(aFR[aC], a9z, j)
			}((p2 = canvas.getContext("2d", {
				alpha: !0
			})).font = a9z, .575 * this.j), bD.t4.textBaseline(p2, 1), p2.lineWidth = 1, this.a8a(), this.aCp(), aV.aCp(), aFc()
	}, this.aCp = function() {
		fn = i.j - this.j - bf.gap
	}, this.aFd = function() {
		fp = bf.gap
	}, this.a8a = function() {
		fp = bf.gap + (aV.aCB() && 0 !== ah.ne[aE.fQ] && !aE.i5 ? aV.k + bf.gap : 0)
	}, this.nQ = function(c1) {
		(c1 || 100 <= aFQ) && (aFQ = 0, aFc())
	}, this.a9L = function() {
		return aFT[7]
	}, this.aFf = function(value) {
		var lx = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lx) / 1e3);
		return value < 10 ? lx + ":0" + value : lx + ":" + value
	}, this.el = function() {
		var aFq, per;
		aFU[0] && aE.a4C - aE.a4B !== aFT[0] && (aFT[0] = aE.a4C - aE.a4B, aFQ++), am.lY - aFT[0] !== aFT[1] && (aFT[1] = am.lY - aFT[0], aFQ++), this.nH(), (aFq = af.aFr(aE.fQ)) !== aFT[5] && (aFT[5] = aFq, aFQ++), aFZ(), aFT[7] += bi.aFs, aFq =
			aFa(7), aFV !== aFq && (aFV = aFq, aFQ += 100), aFq = aE.ib ? bk.lZ() : ah.hU[md[0]], per = bO.g7(1e4 * aFq, Math.max(aE.km, 1)), aFT[3] = aFq, aFT[4] !== per && (aFQ++, aFT[4] = per), 8 === aE.lK && function() {
				for (var aC = 0; aC < 2; aC++)
					if (!bD.h2.ht(aC)) return bU.a3n.a48(), 1;
				return
			}() || aFT[3] < aE.km || ! function() {
				for (var aC = am.lY - 1; 0 <= aC; aC--)
					if (0 < ah.h8[am.ld[aC]].length) return;
				return 1
			}() || bQ.lr.aFp().length || aE.ib && bk.lZ(1) < aE.km || bU.a3n.a48()
	}, this.nH = function() {
		aFU[2] && aE.a4B !== aFT[2] && (aFT[2] = aE.a4B, aFQ += 2 === aE.a49 ? 100 : 1)
	}, this.aFm = function() {
		return aFT[3] === aE.km
	}, this.aFt = function(aC) {
		var vn, aFu, eh;
		return 2 !== aE.a49 && (aC % 2 == 1 && (aW.nQ(1, 1), bi.dy = !0), aC === aE.a8j ? (aFW = 0, aFc(), !1) : (-1 !== aC || 0 !== aFX) && (aFu = aFW, aFW = aE.hp ? aC / aE.a8j : (eh = performance.now(), 0 <= aC && (vn = eh - 392 * aC, aFX =
			0 === aC || vn < aFX ? vn : aFX), 1 < (aFW = (eh - aFX) / (392 * aE.a8j)) ? 1 : aFW), aFc(), aFW !== aFu))
	}, this.yl = function() {
		ym.drawImage(canvas, fn, fp)
	}
}

function cV() {
	var iT, aFv, j, k, aCv, aFw, aFx, aCC, canvas, nr, aFy;

	function a2H() {
		return Math.floor((i.j - j) / 2) < aS.k + 2 * bf.gap ? i.k - k - 4 * bf.gap - aS.k : i.k - k - 2 * bf.gap
	}
	this.dr = function() {
		aFy = iT = !1, aCv = .61, aFw = .07, aFx = .09, nr = aCC = k = 0
	}, this.resize = function() {
		var p2, o5, eq, aG3, aG4, aA4;
		iT && (j = aFz(j = a1.a2.it() ? Math.floor(.69 * i.iu) : Math.floor(.5 * i.iu), aAb(i.j - 2 * bf.gap, 10)), j = aFz(j, Math.floor(3.57 * aAb(i.k - 2 * bf.gap, 3))), k = Math.floor(.28 * j), (canvas = document.createElement("canvas"))
			.width = j, canvas.height = k, p2 = canvas.getContext("2d", {
				alpha: !0
			}), o5 = Math.floor(1 + k / 40), p2.clearRect(0, 0, j, k), p2.fillStyle = bE.qI, p2.fillRect(o5, o5, j - 2 * o5, k - 2 * o5), p2.lineJoin = "bevel", p2.lineWidth = 2 * o5, p2.strokeStyle = bE.qL, p2.strokeRect(o5, o5, j - 2 * o5,
				k - 2 * o5), p2.imageSmoothingEnabled = !1, eq = ac.get(aFv), aG3 = eq.width, aA4 = (1 === aFv ? .85 : 21 === aFv ? .666 : .9) * aCv * k / (aG4 = eq.height), p2.setTransform(aA4, 0, 0, aA4, Math.floor((j - aA4 * aG3) / 2),
				Math.floor((k - aA4 * aG4) / 2)), p2.drawImage(eq, 0, 0), p2.setTransform(1, 0, 0, 1, Math.floor(j - aFx * k - aFw * k - o5), Math.floor(o5 + aFw * k)),
			function(p2, fg) {
				p2.lineWidth = Math.floor(1 + k / 80), p2.strokeStyle = bE.qL, p2.beginPath(), p2.moveTo(0, 0), p2.lineTo(fg, fg), p2.moveTo(0, fg), p2.lineTo(fg, 0), p2.stroke()
			}(p2, Math.floor(aFx * k)), p2.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(g8, aG1, aCh, aG2) {
		iT || aE.hq || aG2 && aFy || (aFv = aCh ? 21 : g8 ? 1 : 2, iT = aFy = !0, this.resize(), aM.uU(), aS.aCc(), nr = bi.eg, aCC = aG1 ? 1 : 0)
	}, this.el = function() {
		!iT || 1 <= aCC || (aCC = 1 < (aCC += 5e-4 * (bi.eg - nr)) ? 1 : aCC, nr = bi.eg, bi.dy = !0)
	}, this.hu = function(fn, fp) {
		return !(!iT || aCC <= 0 || (fn -= Math.floor((i.j - j) / 2), fp -= a2H(), fn < 0) || fp < 0 || j < fn || k < fp || (j - k / 3 < fn && fp < k / 3 && (iT = !1, bi.dy = !0), 0))
	}, this.yl = function() {
		!iT || aCC <= 0 || (ym.globalAlpha = aCC, ym.drawImage(canvas, Math.floor((i.j - j) / 2), a2H()), ym.globalAlpha = 1)
	}
}

function dW() {
	var aG6, aG7 = new Uint8Array(5),
		aG8 = new Uint8Array(5);
	this.aG9 = new aGA, this.dr = function() {
		for (var g8 = bm.buffer.data[119].value, aC = 0; aC < aG7.length; aC++) aG7[aC] = (g8 >> 2 * aC) % 4
	}, this.a8w = function() {
		aG6 = [L(137), "", L(138, [ba.aGB[28]]), L(139, [ba.aGB[26]]), L(140, [ba.aGB[0]])], this.aG9.dr()
	}, this.el = function() {
		this.aG9.el()
	}, this.a9i = function(id) {
		1 < id && bM.ty() || ! function(eP) {
			if (3 === aG7[eP] || 1 === aG8[eP]) return;
			if (aG8[eP] = 1, !(Math.random() < .6)) {
				aG7[eP]++;
				for (var g8 = 0, aC = 0; aC < aG7.length; aC++) g8 += aG7[aC] << 2 * aC;
				bm.rr.px(119, g8)
			}
			return 1
		}(id) || aO.aAh(aG6[id])
	}
}

function aGA() {
	var aGD;
	this.dr = function() {
		aGD = !1
	}, this.el = function() {
		var hE;
		if (function() {
				if (!aGD) {
					if (bi.kz() % 30 != 9) return;
					if (!bD.h2.mZ(90)) return;
					aGD = !0
				}
				return 1
			}() && (! function() {
				var q1 = aO.aB4(956);
				if (q1) {
					if (bD.h2.m0(q1.player)) return 1;
					aO.aB3(956, 0)
				}
				return
			}() && (-1 === (hE = (aE.ib ? function() {
				var id = bk.lb(),
					fg = am.lY;
				if (bj.lP[id])
					for (var wu = am.ld, fe = bj.fe, aC = 0; aC < fg; aC++) {
						var hE = wu[aC];
						if (fe[hE] !== id) return hE
					} else if (1 < fg) return md[fg - 1];
				return -1
			} : function() {
				for (var aGL = am.lY, lw = am.ld, aGM = kn, aC = 0; aC < aGL; aC++) {
					var hE = lw[aC];
					if (0 !== aGM[hE]) return hE
				}
				return -1
			})()) ? ! function() {
				var q1 = aO.aB4(957);
				if (q1 && q1.aAX) {
					if (ad.fX(q1.aAX.fS << 2)) return 1;
					aO.aB3(957, 0)
				}
				return
			}() : (aO.a2d(0, L(141, [ah.a2e[hE]]), 956, hE, bE.qL, bE.qI, -1, !0), 0)))) {
			var fg = ap.jg.mC;
			if (0 !== fg)
				for (var buffer = ap.jg.buffer, aC = 0; aC < fg; aC++) {
					var fS = buffer[aC];
					if (ad.fX(fS << 2)) return void aO.a2d(0, L(142, [bP.fo(fS), bP.fq(fS)]), 957, 0, bE.qL, bE.qI, -1, !0, void 0, {
						fz: 1,
						fS: fS
					})
				}
		}
	}
}

function dX() {
	this.aGN = new aGO, this.dr = function() {
		this.aGN.resize()
	}
}

function aGO() {
	this.resize = function() {
		var aC, aGP = document.head.querySelector("style#ss");
		if (aGP)
			for (aC = aGP.sheet.cssRules.length - 1; 0 <= aC; aC--) aGP.sheet.deleteRule(0);
		else(aGP = document.createElement("style")).id = "ss", document.head.appendChild(aGP);
		var aD2 = "::-webkit-scrollbar",
			aGQ = bD.t4.tf(bf.v2),
			ie = bD.t4.tf(Math.max(bD.t4.t5(.012), 8));
		try {
			aGP.sheet.insertRule(aD2 + "{width:" + ie + ";height:" + ie + ";}", aGP.sheet.cssRules.length), aGP.sheet.insertRule(aD2 + "-thumb{background-color:white;}", aGP.sheet.cssRules.length), aGP.sheet.insertRule(aD2 +
				"-track{background:" + bE.qH + ";}", aGP.sheet.cssRules.length), aGP.sheet.insertRule(aD2 + "-track:horizontal{border-top:" + aGQ + " solid white;}", aGP.sheet.cssRules.length), aGP.sheet.insertRule(aD2 +
				"-track:vertical{border-left:" + aGQ + " solid white;}", aGP.sheet.cssRules.length), aGP.sheet.insertRule(aD2 + "-button{display:none;}", aGP.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aC = aGP.sheet.cssRules.length - 1; 0 <= aC; aC--) aGP.sheet.deleteRule(0)
		}
	}
}

function dp() {
	this.data = new aGR, this.aGS = new aGT
}

function aGR() {
	var aGU = [new Int16Array([6, 255, 255, 255, 255, 0, 1, 12, 18, 2, 88, 18, 2, 58, 52, 2, 58, 82, 2, 42, 72, 2, 42, 52, 3, 4])];
	this.get = function(id) {
		return aGU[id]
	}
}

function uO(id) {
	this.canvas = document.createElement("canvas");
	var aGV = this.canvas.getContext("2d"),
		aGW = 0;
	this.resize = function(size) {
		var aGX = Math.max(1, Math.round(size * i.l));
		this.canvas.style.width = this.canvas.style.height = bD.t4.tf(size), aGX !== aGW && (aGW = aGX, this.canvas.width = this.canvas.height = aGX, bz.aGS.yl(aGV, bz.data.get(id), aGX))
	}
}

function aGT() {
	this.yl = function(il, h, size) {
		var id, pU, oH = size / 100,
			fg = h.length,
			aC = 0;
		for (il.clearRect(0, 0, size, size), il.lineJoin = "round", il.lineCap = "round"; aC < fg;)
			if (0 === (id = h[aC++])) il.beginPath();
			else if (1 === id) il.moveTo(oH * h[aC], oH * h[aC + 1]), aC += 2;
		else if (2 === id) il.lineTo(oH * h[aC], oH * h[aC + 1]), aC += 2;
		else if (3 === id) il.closePath();
		else if (4 === id) il.fill();
		else if (5 === id) il.stroke();
		else if (6 === id) pU = "rgba(" + h[aC] + "," + h[aC + 1] + "," + h[aC + 2] + "," + h[aC + 3] / 255 + ")", il.fillStyle = il.strokeStyle = pU, aC += 4;
		else if (7 === id) il.lineWidth = oH * h[aC], aC += 1;
		else if (8 === id) il.arc(oH * h[aC], oH * h[aC + 1], oH * h[aC + 2], h[aC + 3] * Math.PI / 180, h[aC + 4] * Math.PI / 180), aC += 5;
		else {
			if (9 === id) il.rect(oH * h[aC], oH * h[aC + 1], oH * h[aC + 2], oH * h[aC + 3]);
			else {
				if (10 !== id) return;
				il.quadraticCurveTo(oH * h[aC], oH * h[aC + 1], oH * h[aC + 2], oH * h[aC + 3])
			}
			aC += 4
		}
	}
}

function dV() {
	this.aGY = !1, this.oV = !1, this.a8e = !1, this.aGZ = [0, 0, 0, 0], this.render = function() {
		var o5, o6, oI, oJ;
		this.a8e = this.a8e || this.oV, (this.oV || this.aGY && this.a8e) && (o5 = bd.aGa[0], o6 = bd.aGa[1], oI = bd.aGa[2], oJ = bd.aGa[3], o5 = o5 < this.aGZ[0] ? this.aGZ[0] : o5, o6 = o6 < this.aGZ[1] ? this.aGZ[1] : o6, oI = oI > this.aGZ[
				2] ? this.aGZ[2] : oI, oJ = oJ > this.aGZ[3] ? this.aGZ[3] : oJ, this.oV = !1, this.aGY = !1, o5 === this.aGZ[0] && o6 === this.aGZ[1] && oI === this.aGZ[2] && oJ === this.aGZ[3] ? this.a8f() : o5 <= oI && o6 <= oJ && a8y
			.putImageData(a8z, 0, 0, o5, o6, oI - o5 + 1, oJ - o6 + 1))
	}, this.a8f = function() {
		this.a8e && this.aGZ[2] >= this.aGZ[0] && this.aGZ[3] >= this.aGZ[1] && a8y.putImageData(a8z, 0, 0, this.aGZ[0], this.aGZ[1], this.aGZ[2] - this.aGZ[0] + 1, this.aGZ[3] - this.aGZ[1] + 1), this.a8e = !1
	}, this.a4L = function() {
		this.aGZ[2] >= this.aGZ[0] && this.aGZ[3] >= this.aGZ[1] && a8y.putImageData(a8z, 0, 0, this.aGZ[0], this.aGZ[1], this.aGZ[2] - this.aGZ[0] + 1, this.aGZ[3] - this.aGZ[1] + 1), this.a8e = !1
	}, this.dr = function() {
		var fn, fp;
		this.aGY = !1, this.oV = !1, this.a8e = !1, this.aGZ[0] = bV.fr, this.aGZ[1] = bV.fs, this.aGZ[2] = this.aGZ[3] = 0;
		loop: for (fn = 1; fn < bV.fr - 1; fn++)
			for (fp = bV.fs - 2; 1 < fp; fp--)
				if (1 === aGb[ad.a1o(fn, fp) + 2]) {
					this.aGZ[0] = fn;
					break loop
				} loop: for (fp = 1; fp < bV.fs - 1; fp++)
			for (fn = bV.fr - 2; 1 < fn; fn--)
				if (1 === aGb[ad.a1o(fn, fp) + 2]) {
					this.aGZ[1] = fp;
					break loop
				} loop: for (fn = bV.fr - 2; 0 < fn; fn--)
			for (fp = bV.fs - 2; 1 < fp; fp--)
				if (1 === aGb[ad.a1o(fn, fp) + 2]) {
					this.aGZ[2] = fn;
					break loop
				} loop: for (fp = bV.fs - 2; 0 < fp; fp--)
			for (fn = bV.fr - 2; 1 < fn; fn--)
				if (1 === aGb[ad.a1o(fn, fp) + 2]) {
					this.aGZ[3] = fp;
					break loop
				}
	}
}

function L(value, aGc, zK, aGd) {
	var pU = "number" == typeof value ? bA.aGe[value] : value;
	if (zK && bA.aGf() && (pU = zK), !aGc) return aGd ? pU.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : pU;
	for (var fg = aGc.length, aC = 0; aC < fg; aC++)
		for (var fz = 0; fz < 3; fz++) pU = pU.replace("{" + (10 * fz + aC) + "}", aGc[aC]);
	return pU
}

function c9() {
	this.data = new aGg;
	var aGh = (new aGi).L84,
		aGk = (this.aGe = aGh, !(this.aGj = "en"));
	this.dr = function() {
		var pU, h;
		aGk = !1, ("en" === (pU = bm.buffer.data[12].value).split("-")[0].toLowerCase() ? (bA.aGe = aGh, bA.aGj = pU, 1) : bm.buffer.data[12].value === bm.buffer.data[145].value && 0 < bm.buffer.data[146].value && (pU = bm.buffer.data[146].value,
			(h = bm.tm.zW(pU, !1)).length === pU) && !!bD.te.a6p(h) && function(h) {
			for (var fg = h.length, k = 0; k < fg; k++) h[k] = h[k].replace("&#39;", "'");
			var aGq = bm.tm.zW(fg, !0);
			if (fg !== aGq.length) return !1;
			if (!bD.te.a6p(aGq)) return !1;
			for (var lx = aGh.length, aDx = new Array(lx), aGr = lx === fg, h9 = Math.min(fg, lx), aC = 0; aC < lx; aC++)
				if (aDx[aC] = aGh[aC], aC < fg && aGq[aC] === aDx[aC]) aDx[aC] = h[aC];
				else {
					aGr = !1;
					for (var g0 = 0; g0 < h9; g0++)
						if (aGq[g0] === aDx[aC]) {
							aDx[aC] = h[g0];
							break
						}
				} return bA.aGe = aDx, bA.aGj = bm.buffer.data[12].value, aGr
		}(h)) || (aGk = !0)
	}, this.dt = function() {
		bj.ds(), aF.ds(), bh.ds(), bg.ds(), aP.dr(), br = new eF
	}, this.aGf = function() {
		return this.aGe === aGh || !aGh.length
	}, this.aGs = function() {
		var aGt;
		return !!aGk && (aGk = !1, 0 !== aGh.length) && (aGt = bm.buffer.data[12].value, b1.en.aGu(0, aGt.slice(0, 20)), !0)
	}, this.aGv = function(h) {
		h.length !== aGh.length ? 8 === u.vR && u.a5O().aGw(30, 0, 1) : (this.aGe = h, this.aGj = bm.buffer.data[12].value, bm.rr.px(145, this.aGj), bm.rr.px(146, h.length), bm.tm.zc(h, !1), bm.tm.zc(aGh, !0), 8 === u.vR ? u.a5O().aGw(30) : 0 ===
			ab.a5K() && 5 === u.vR && u.z.aGx())
	}, this.aGy = function() {
		var zf, h = navigator.languages;
		return h && h.length ? (zf = Math.max(bA.data.aGz(h[0]), 0), 1 === h.length ? [zf, zf] : [zf, Math.max(bA.data.aGz(h[1]), 0)]) : [0, 0]
	}
}

function aGg() {
	this.h = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aH0 = function() {
		for (var aH1 = [], h = this.h, fg = h.length, aC = 0; aC < fg; aC++) aH1.push(h[aC]);
		var aH2 = bm.buffer.data[12].zK;
		for (aC = 0; aC < fg; aC++)
			if (aH1[aC] === aH2) {
				aH1.splice(aC, 1), fg--;
				break
			} aH1.sort(), fg++, aH1.unshift(aH2);
		try {
			if ("undefined" == typeof Intl) return aH1;
			for (aC = 0; aC < fg; aC++) {
				var pU = new Intl.DisplayNames([aH1[aC]], {
					type: "language"
				}).of(aH1[aC]);
				pU !== aH1[aC] && (aH1[aC] = aH1[aC] + ": " + pU)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aH1
	}, this.aH4 = function(aH5) {
		for (var pU = bm.buffer.data[12].value, fg = aH5.length, aC = 0; aC < fg; aC++)
			if (pU === aH5[aC].split(":")[0]) return aC;
		return 0
	}, this.aGz = function(aH6) {
		if (aH6 && !(aH6.length < 2)) {
			aH6 = aH6.split("-")[0].toLowerCase();
			for (var h = this.h, fg = h.length, aC = 0; aC < fg; aC++)
				if (aH6 === h[aC]) return aC
		}
		return -1
	}
}

function aGi() {
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
		"You are leaving Territorial.io.", "The game could not start for you. Your selection was removed.", "🔑 Show Account", "✅ Vouch", "🚩 Report", "💬 Mention", "👁 Stop Observing", "👁 Observe", "🤝 Stop Joining With", "🤝 Join With",
		"🛡 Join Clan", "Loading", "{0} defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia",
		"North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person",
		"Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf", "Daylaborer", "Nomad", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Sell Account", "Asking Price:",
		"Account to receive the gold:", "Publish Offer", "The gold must go to a different account than the one you sell.", "Warning",
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
		"Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "🚫 Unfollow", "📥 Follow",
		"You are following this user. ✅", "Please choose a respectful username.", "Active punishments:", "Email Verification", "Email", "You already have {10} gold. Secure your account to prevent account loss.", "New Email", "Request Code",
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

function dw() {
	var fn, fp, k, wK, aH7, aH8, aH9, aHA, aHB, j, a7S, aHC;
	this.iT = !1, this.dr = function(pU, aHD) {
		if (1 === a1.id && 13 <= a1.e8 && a1.e8 < 18) return aHD ? void(a7S = pU) : a7S !== pU ? void 0 : void a1.zU.saveString(200, pU);
		aHD && (a7S = pU, (aHC = document.createElement("a")).appendChild(document.createTextNode(a7S)), this.iT = !0, aHC.title = a7S, aHC.target = "_blank", aHC.href = a7S, aHC.style.textAlign = "center", aHC.style.color = bE.qL, aHC.style
			.position = "absolute", aHC.style.padding = "0px", aHC.style.margin = "0px", this.resize(), document.body.appendChild(aHC), bi.dy = !0)
	}, this.uU = function() {
		return !(!this.iT || (u.removeChild(document.body, aHC), this.iT = !1))
	}, this.hu = function(j1, j2) {
		return !!this.iT && ((j1 < fn || j2 < fp || fn + j < j1 || fp + k < j2 || fn + j - wK < j1 && j2 < fp + wK) && (bi.dy = !0, this.iT = !1, u.removeChild(document.body, aHC)), !0)
	}, this.resize = function() {
		var a9z, aHE;
		this.iT && (aHA = Math.floor(.8 * (a1.a2.it() ? i.j > i.k ? .6 : .55 : .4) * i.iu), wK = Math.floor(.15 * aHA), aH7 = Math.floor(.35 * wK), aH8 = Math.floor(.5 * wK), aH9 = Math.floor(2.5 * aH8), k = wK + aH7 + 3 * aH8, a9z = bD.t4.t7(1,
			aH7 / i.l), aHB = Math.floor(i.l * aR.measureText(a7S, a9z)), aHE = j = (aHA < aHB ? aHB : aHA) + 2 * aH9, j = Math.min(j, i.j - 2 * (a1.a2.it() ? 2 : 1) * bf.gap), a9z = bD.t4.t7(1, j / aHE * aH7 / i.l), aHB = Math.floor(i
			.l * aR.measureText(a7S, a9z)), fn = Math.floor((i.j - j) / 2), fp = Math.floor((i.k - k) / 2), aHC.style.font = a9z, aHC.style.top = Math.floor((fp + 1.4 * aH8 + wK) / i.l) + "px", aHC.style.left = Math.floor((fn + (j -
			aHB) / 2) / i.l) + "px")
	}, this.yl = function() {
		this.iT && (ym.fillStyle = bE.qI, ym.fillRect(fn, fp + wK, j, k - wK), ym.fillStyle = bE.ra, ym.fillRect(fn, fp, j, wK), ym.fillStyle = bE.qL, ym.lineWidth = bf.a39, ym.strokeStyle = bE.qL, ym.strokeRect(fn, fp, j, k), ym.fillRect(fn,
			fp + wK, j, bf.a39), ym.font = bD.t4.t7(1, .48 * wK), bD.t4.textAlign(ym, 1), bD.t4.textBaseline(ym, 1), ym.fillText(L(143), Math.floor(fn + (j - .5 * wK) / 2), Math.floor(fp + .55 * wK)), aN.aAB(Math.floor(fn + j - .8 * wK),
			Math.floor(fp + .25 * wK), Math.floor(.5 * wK)), ym.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dv() {
	var gap, aFR, fn = [0, 0, 0, 0, 0],
		fp = [0, 0, 0, 0, 0],
		oH = [1, 1, 1, 1, 1],
		g8 = [!0, !0, !0, !1, !1],
		eq = (this.gT = [!0, !0, !0, !1, !1], null);
	this.aHF = function(a70, aHG) {
		eq = a70, g8 = aHG, aFR = [bN.aHH, bN.a5G, bN.aHI, bN.aHI, bN.aHJ], this.dr()
	}, this.dr = function() {
		if (ac.vr()) {
			var aC, vW = Math.floor((a1.a2.it() ? .261 : .195) * i.iu),
				vX = Math.floor(.9 * vW),
				aCv = Math.floor(.17 * vX);
			if (gap = a1.a2.it() ? 2 * bf.gap : bf.gap, oH[0] = vW / eq[0].width, oH[1] = vX / eq[1].width, oH[2] = aCv / eq[2].height, oH[3] = aCv / eq[3].height, oH[4] = aCv / eq[4].height, oH[2] *= 1.7, oH[3] *= 1.07, fn[0] = gap, fn[1] = gap,
				fn[2] = gap, fn[3] = gap, fn[4] = Math.floor(2 * gap + oH[3] * eq[3].width), fp[0] = gap, fp[1] = fp[0] + gap + oH[0] * eq[0].height, fp[2] = fp[1] + gap + oH[1] * eq[1].height, fp[3] = fp[2] + gap + oH[2] * eq[2].height, fp[4] =
				fp[3], !g8[0])
				for (aC = 0; aC < 5; aC++) fp[aC] -= oH[0] * eq[0].height + gap;
			if (!g8[1])
				for (aC = 2; aC < 5; aC++) fp[aC] -= oH[1] * eq[1].height + gap
		}
	}, this.iT = function() {
		return !(7 === ab.a5K() && a1.a2.it())
	}, this.hu = function(j1, j2) {
		if (eq && this.iT())
			for (var aC = g8.length - 1; 0 <= aC; aC--)
				if (g8[aC] && this.gT[aC] && fn[aC] < j1 && fp[aC] < j2 && j1 < fn[aC] + oH[aC] * eq[aC].width && j2 < fp[aC] + oH[aC] * eq[aC].height) return u.v(9, u.vR, new aHK(L(144), bD.t4.a7R(aFR[aC]))), !0;
		return !1
	}, this.yl = function() {
		if (eq && this.iT()) {
			var aC;
			for (ym.imageSmoothingEnabled = !0, aC = 0; aC < 5; aC++) g8[aC] && this.gT[aC] && (ym.setTransform(oH[aC], 0, 0, oH[aC], fn[aC], fp[aC]), ym.drawImage(eq[aC], 0, 0));
			ym.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dg() {
	this.aHL = 0, this.pi = null, this.pk = null, this.tT = null, this.lr = null, this.z = null, this.xy = null, this.xX = null, this.message = null, this.pW = null, this.q3 = null, this.aHM = null, this.aHN = new aHO, this.x5 = new aHP, this.fD = 0,
		this.aDo = 0, this.dr = function() {
			this.aDo = bi.eg, this.aHL = bJ.f7.f8(bm.buffer.data[105].value, 5), this.pk = new aHQ, this.tT = new aHR, this.lr = new aHS, this.z = new aHT, this.xy = new aHU, this.xX = new aHV, this.message = new aHW, this.pW = new aHX, this.q3 =
				new aHY, this.aHM = new aHZ, bt.dr(), this.fD = 1, a1.a2.setState(1), ab.setState(0), bX.turnstile.fB()
		}, this.xs = function() {
			this.x5.aHa(), this.q3 && this.q3.xs(), this.pi = null, this.pk = null, this.tT = null, this.lr = null, this.z = null, this.xy = null, this.xX = null, this.message = null, this.pW = null, this.q3 = null, this.aHM = null, this.fD = 0, bt
				.xs(), a1.a2.setState(0)
		}
}

function aHQ() {
	function aHc() {
		bq.z.aHd += 29 === u.vR && 1 === bq.z.aHe
	}

	function aI8(self, kI, h9) {
		for (var h = self.wu.splice(kI, h9), aC = 0; aC < h.length; aC++) aHy(self, h[aC]);
		aHc()
	}

	function aHy(self, hE) {
		var self = self.xZ,
			p7 = self.pop();
		p7 !== hE && ((self[hE.aHk] = p7).aHk = hE.aHk)
	}
	this.wu = [], this.xZ = [], this.aHb = [], this.aHf = function(pc, username, xi, a80, aHg, elo, color, a00, aHh, code, xc, xf) {
		username = this.aHj(pc, username, xi, a80, aHg, elo, color, a00, aHh, code);
		username.xc = xc, username.xf = xf, this.wu.push(username), username.aHk = this.xZ.length, this.xZ.push(username), bq.aHL === pc && (bq.pi = username), bq.aHM.aHl(pc) && (username.xk = 1), bq.q3.aHm(pc), aHc()
	}, this.aHj = function(pc, username, xi, a80, aHg, elo, color, a00, aHh, code) {
		return {
			pc: pc,
			username: code ? __fx.nameFilter.filter(username) : "Player " + bI.f7.a3S(pc, 2),
			aHn: __fx.nameFilter.filter(username),
			xi: xi,
			a80: a80,
			aHg: aHg,
			elo: elo,
			color: color,
			a00: a00,
			aHh: aHh
		}
	}, this.aHo = function(eP, xi, a80, aHg, elo, a00, color) {
		eP = this.wu[eP];
		eP.xi = xi, eP.a80 = a80, eP.aHg = aHg, eP.elo = elo, eP.a00 = a00, eP.color = color, bq.q3.aHm(eP.pc), aHc()
	}, this.aHp = function(eP, code) {
		eP = this.wu[eP];
		1 === code && (eP.username = eP.aHn), bq.q3.aHm(eP.pc), aHc()
	}, this.aHq = function(eP, aHr) {
		var eP = this.wu[eP],
			aHs = eP.username,
			aD7 = eP.username !== eP.aHn,
			aHt = "Redacted " + bI.f7.a3S(eP.pc, 2);
		eP.aHn = aHr ? "[" + bD.pY.pm(eP.aHn) + "] " + aHt : aHt, aD7 || (eP.username = eP.aHn), aHs.indexOf("Redacted") < 0 && (eP.aHu = aHs), bq.q3.aHm(eP.pc), aHc()
	}, this.aHv = function(eP, username) {
		var eP = this.wu[eP],
			aD7 = eP.username !== eP.aHn;
		eP.aHn = username, aD7 || (eP.username = username), eP.pc === bq.aHL && bq.lr.aHw(username), bq.q3.aHm(eP.pc), aHc()
	}, this.aHx = function(eP) {
		eP = this.wu.splice(eP, 1)[0];
		aHy(this, eP), this.aHb.push(eP), 1e3 < this.aHb.length && this.aHb.shift(), aHc()
	}, this.aHz = function(eP, target, xc, xf) {
		var wu = this.wu,
			eP = wu.splice(eP, 1)[0];
		wu.splice(target, 0, eP), !eP.xc && xc && bq.aHM.join(eP), eP.xc = xc, eP.xf = xf, aHc()
	}, this.aI0 = function(xc) {
		for (var wu = this.wu, fg = wu.length, aC = 0; aC < fg; aC++)
			if (wu[aC].xc === xc) return aC;
		return fg
	}, this.aI1 = function(kI) {
		for (var wu = this.wu, fg = wu.length, xc = kI < fg ? wu[kI].xc : 0, aC = kI; aC < fg && wu[aC].xc === xc && !wu[aC].xf;) aC++;
		return aC
	}, this.aI2 = function(kI, aI3, aI4) {
		for (var aI5 = this.aI1(kI), h = [], aC = 0; aC < aI3; aC++) aI4 && 511 === aI4[aC] || h.push(this.wu[aI5 + aC]);
		return h
	}, this.aI6 = function(kI, h9, aI3, aI4) {
		for (var aI7 = this.aI2(kI, aI3, aI4), aC = aI7.length - 1; 0 <= aC; aC--) aI8(this, this.wu.indexOf(aI7[aC], kI), 1);
		aI8(this, kI, h9)
	}, this.aI9 = function(xc) {
		for (var wu = this.wu, aIA = 0; aIA < wu.length && wu[aIA].xc === xc;) aIA++;
		for (var left = wu.splice(0, aIA), aC = 0; aC < aIA; aC++) left[aC].xc = 0, left[aC].xf = 0, wu.push(left[aC]);
		aHc()
	}, this.pl = function(pc) {
		for (var wu = this.wu, lx = wu.length, fz = 0; fz < lx; fz++)
			if (pc === wu[fz].pc) return wu[fz];
		return null
	}
}

function aHR() {
	this.tT = [], this.x8 = 0, this.x9 = 0, this.aIB = 0;
	var aID = this.aIC = 0,
		aIE = 0;
	this.aIF = function() {
		for (var self, fg = bK.sU(4), tT = new Array(fg), aC = 0; aC < fg; aC++) tT[aC] = {
			id: bK.sU(13),
			xF: bK.sU(12),
			h9: bK.sU(16),
			aI3: bK.sU(16),
			nZ: bK.sU(10),
			fM: bK.sU(6),
			mapSeed: bK.sU(14),
			ws: bK.sU(4),
			xJ: bK.sU(1)
		};
		this.tT = tT, __fx.lobbyReminders.setRooms(this.tT), __fx.lobbyReminders.setPopupHandler(function(text) {
			bq.message.aIH({
				id: 7,
				s: text
			})
		}), !(self = this).x8 || 0 <= self.xb(self.x8) || (self.x8 = 0, self.x9 = 0, bq.message.aIH({
			id: 7,
			s: L(145)
		}))
	}, this.xb = function(id) {
		for (var tT = this.tT, aC = tT.length - 1; 0 <= aC; aC--)
			if (tT[aC].id === id) return aC;
		return -1
	}, this.aII = function() {
		return 1 === aID
	}, this.aIJ = function(id) {
		return 0 < id && 0 < this.tT.length && this.tT[0].id === id
	}, this.aIK = function() {
		return this.aIJ(this.x8)
	}, this.click = function(eP, xf) {
		eP = this.tT[eP];
		xf = xf ? 1 : 0, eP && (eP.id === this.x8 && xf === this.x9 ? this.select(0, 0) : this.select(eP.id, xf))
	}, this.select = function(id, xf) {
		this.x8 = id, this.x9 = id ? xf : 0, this.aIB = this.aIC = 0, aID = 1, aIE++, b1.aIL.aIM(4, {
			xc: id,
			xf: this.x9
		}), u.a9M(29).aIN()
	}, this.aIO = function(id, xf) {
		0 === (aIE = Math.max(aIE - 1, 0)) && (this.x8 = id, this.x9 = xf)
	}, this.zA = function(pc, ws) {
		this.aIB = ws ? pc : 0, this.aIC = ws, aID = 1, b1.aIL.aIM(6, {
			ws: ws,
			pc: pc
		})
	}, this.aIP = function(pc, ws) {
		return this.aIC === ws && this.aIB === pc
	}, this.xA = function(x7) {
		return x7.h9 - x7.aI3
	}, this.xD = function(ws) {
		return ws < 7 ? ws + 2 + " Teams" : 7 === ws ? "Battle Royale" : 8 === ws ? "1v1" : 9 === ws ? "Zombie" : "No Full-Sending"
	}, this.xG = function(x7) {
		return x7.nZ < (9 === x7.ws ? 333 : 512)
	}, this.xE = function(xF) {
		var aBY = xF % 60;
		return bO.g7(xF, 60) + ":" + (aBY < 10 ? "0" : "") + aBY
	}
}

function aHZ() {
	var aIQ = [],
		aIR = [],
		aIS = 0;

	function aIT(h, aB6, aIW, aIX) {
		var fg = h.length;
		if (0 === fg) return "";
		var pU = "@" + h[0];
		if (1 === fg) return pU + aB6 + aIX;
		for (var aC = 1; aC < fg - 1; aC++) pU += ", @" + h[aC];
		return pU + " and @" + h[fg - 1] + aIW + aIX
	}
	this.dr = function() {
		var pU = aIT(aIR, " is", " are", " in the lobby.");
		pU.length && bq.message.aIH({
			id: 7,
			s: pU
		}), aIQ = [], aIR = [], aIS = 0
	}, this.aHl = function(aIU) {
		return bq.aHL !== aIU && (aIU = bI.f7.a3S(aIU, 5), !!bm.zA.xk(aIU)) && (aIR.push(aIU), !0)
	}, this.join = function(player) {
		bq.aHL !== player.pc && (player = bI.f7.a3S(player.pc, 5), bm.zA.xk(player)) && aIQ.push(player)
	}, this.aIV = function() {
		var aB6, aIW;
		++aIS < 3 || (aIS = 0, aB6 = aIT(aIR, "", "", " entered the lobby!"), (aB6 = (aIW = aIT(aIQ, "", "", " joined a game!")).length ? aB6.length ? aB6 + " " + aIW : aIW : aB6).length && bq.message.aIH({
			id: 7,
			s: aB6
		}), aIQ = [], aIR = [])
	}
}

function aHO() {
	this.dz = function(kI, aIY, aI3) {
		var pk, aHN = bq.z.aHN,
			aIZ = bq.pk.wu.slice(kI, kI + aIY),
			kI = bq.pk.aI2(kI, aI3, aHN.aI4),
			aI3 = function(aIZ) {
				if (__fx.customLobby.isActive()) return bq.pi ? __fx.customLobby.getPlayerId() : -1;
				if (bq.pi && bq.tT.aII())
					for (var fg = aIZ.length, pc = bq.pi.pc, aC = 0; aC < fg; aC++)
						if (aIZ[aC].pc === pc) return aC;
				return -1
			}(aIZ.concat(kI));
		if (-1 === aI3) return (pk = bq.pk).aHb = pk.aHb.concat(aIZ, kI), 1e3 < bq.pk.aHb.length && bq.pk.aHb.splice(0, bq.pk.aHb.length - 1e3), bq.z.aHd += 29 === u.vR && 1 === bq.z.aHe, !1;
		if (aHN.a8q = aIY <= aI3 ? 1 : 0, aHN.a99 = kI.length, 8 === aHN.ws) {
			for (var aId = function(aI4) {
					for (var h = [], aC = 0; aC < aI4.length; aC++) 511 !== aI4[aC] && h.push(aI4[aC]);
					return h
				}(aHN.aI4), iZ = aI3 - aIY, aIf = aHN.a8q ? aId[iZ] : aI3 >> 1, aIg = 0, aC = aHN.a99 = 0; aC < aId.length; aC++) aId[aC] === aIf && (aIg += aC < iZ ? 1 : 0, aHN.a99++);
			aHN.aIh = (aHN.aIh + aIf) % 1024, 0 <= aHN.a4c && (aHN.a4c += aIf), aI3 = aHN.a8q ? 2 + aIg : aI3 % 2, aIZ = aIZ.slice(2 * aIf, 2 * aIf + 2)
		}
		return aHN.aIi = aHN.a8q ? function(aIZ) {
			var tT = bq.tT;
			if (tT.aIC)
				for (var aC = 0; aC < aIZ.length; aC++)
					if (aIZ[aC].pc === tT.aIB) return aC;
			return 0
		}(aIZ) : 0, ay.dr(aHN, aIZ, aI3), !0
	}, this.aIk = function(aHN, aIZ, aIb) {
		var fj = aE.data = new a8k,
			aIn = (fj.spawningSeed = aHN.spawningSeed, aHN.ws < 7 ? (fj.gameMode = 1, fj.numberTeams = aHN.ws + 2) : 9 === aHN.ws ? (fj.gameMode = fj.isZombieMode = 1, fj.numberTeams = 2) : (fj.gameMode = 0, fj.battleRoyaleMode = 7 === aHN.ws ?
					0 : 10 === aHN.ws ? 1 : 2), fj.selectedPlayer = aHN.a8q ? aHN.aIi : aIb, fj.a8q = aHN.a8q, fj.a99 = aHN.a99, fj.isContest = aHN.xJ, fj.mapType = bV.aIl(aHN.fM) ? 0 : 1, bV.aIm(fj, aHN.fM), fj.mapSeed = aHN.mapSeed, fj
				.humanCount = aIZ.length);
		fj.selectableSpawn = 1 === fj.gameMode || aIn < 100, fj.colorsData = new Uint32Array(aIn), fj.playerNamesData = new Array(aIn), fj.a9A = new Uint32Array(aIn);
		for (var aC = 0; aC < aIn; aC++) fj.colorsData[aC] = aIZ[aC].color, fj.playerNamesData[aC] = aIZ[aC].username, fj.a9A[aC] = aIZ[aC].pc;
		if (2 === fj.battleRoyaleMode)
			for (fj.elo = new Uint16Array(aIn), aC = 0; aC < aIn; aC++) fj.elo[aC] = aIZ[aC].elo;
		bx.close(), ab.setState(8), bV.a8(aHN.fM, fj.mapSeed), aE.a8p(), aE.a4c = aHN.a4c, aE.a8n = 2
	}
}

function aHS() {
	var eG = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member", "Zombie"],
		aIo = [bE.qZ, bE.qZ, bE.qa, bE.r5, bE.r6, bE.qq, bE.rB, bE.qa, bE.rc, bE.rQ, bE.rZ, bE.qC],
		aIp = [
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
		aIq = ["Your account is too new.", "The server couldn't process your request.", "Spam detected.", "You are muted.", "Player couldn't be found.", "You don't have permission for this operation.", "Not enough gold.", "Action cancelled.",
			"User received this punishment already.", "Lobby restarts in 2 minutes.", "Lobby restarts in 10 seconds."
		];

	function aJ5(pq, pc, aJ7) {
		for (var g0 = pq.length - 1; 0 <= g0; g0--) {
			var q1 = pq[g0];
			0 === q1.id && q1.pc === pc && (q1.s = "[Redacted Message]", aJ7) && (q1.aJ8 = 1)
		}
	}
	this.pv = function(pa) {
		var aIr, a4v;
		return pa.id < 5 && (aIr = "@" + bI.f7.a3S(pa.pc, 5)), 0 === pa.id ? aIr + ": " + pa.s : 1 === pa.id ? (a4v = "@" + bI.f7.a3S(pa.target, 5), 0 === pa.aIs ? 32768 <= pa.value ? aIr + " voted with " + (pa.value - 32768 + 1) +
				" gold against " + a4v + " to weaken the latter's admin position. 📉" : aIr + " voted with " + (pa.value + 1) + " gold for " + a4v + " to strengthen the latter's admin position. 💪" : 1 === pa.aIs ? aIr + " sent " + Math.floor(pa
					.value / 100) + " 🧈 gold to " + a4v + "." : aIr + " voted with " + (pa.value / 10).toFixed(1) + " points for " + a4v + " to acknowledge the latter as clan leader. ✅") : 2 === pa.id ? 0 === pa.aIs ? aIr +
			" was 🔇 muted for 1 Hour." : 1 === pa.aIs ? "The username of " + aIr + " was ✂️ redacted. Duration: 1 Day" : aIr + " 👢 was kicked." : 3 === pa.id ? aIr + br.eS(pa.aIs, br.eM[pa.aIs][pa.value]) + "@" + bI.f7.a3S(pa.target, 5) + br
			.eU(pa.aIs, br.eM[pa.aIs][pa.value]) : 4 === pa.id ? (a4v = "@" + bI.f7.a3S(pa.target, 5), 1 === pa.aIs ? "✅ " + aIr + " vouched for " + a4v + "." + (pa.aIu ? " ⚖️ The punishment of " + a4v + " was refunded." : "") : "🚩 " + aIr +
				" reported " + a4v + "." + (pa.aIu ? " ⚖️ " + a4v + " was punished." : "")) : 5 === pa.id ? aIq[pa.aIs] : 6 === pa.id ? "You are about to mention " + pa.value + " player" + (1 === pa.value ? "" : "s") +
			". This action will cost " + (Math.max(pa.value, 1) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === pa.id ? pa.s : void 0
	}, this.pu = function(pa, aIv) {
		return {
			pa: pa,
			s: aIv,
			aIw: 0,
			fontSize: 4 === pa.id ? .8 : 1,
			q2: 0,
			aIx: pa.id ? bE.r4 : bE.qL
		}
	}, this.xg = function(player, xe) {
		return (xe ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.xh = function(xi) {
		return aIo[xi]
	}, this.aIy = function(xi, a80) {
		return xi < 3 || 7 === xi ? aIp[xi][0] : 4 === xi ? aIp[xi][a80 < 1 ? 0 : a80 < 10 ? 1 : 2] : aIp[xi][a80 < 10 ? 0 : 1]
	}, this.aIz = function(a80) {
		return 0 === a80
	}, this.xj = function(q1) {
		return !!bq.pi && q1.pc === bq.pi.pc
	}, this.aJ0 = function(pk, aJ1, aJ2) {
		var a4t = [];
		loop: for (var aC = aJ1; aC < aJ2; aC++) {
			var a4u = bD.pY.pm(pk[aC].username);
			if (a4u) {
				for (var g0 = a4t.length - 1; 0 <= g0; g0--)
					if (a4u === a4t[g0].name) {
						a4t[g0].h9++;
						continue loop
					} a4t.push({
					name: a4u,
					h9: 1
				})
			}
		}
		if (a4t.sort(function(fz, g0) {
				return g0.h9 - fz.h9
			}), 0 === a4t.length) return "";
		for (var pU = a4t[0].name + ": " + a4t[0].h9, aC = 1; aC < a4t.length; aC++) pU += "   " + a4t[aC].name + ": " + a4t[aC].h9;
		return pU
	}, this.aJ3 = function(xi, a80, aHg) {
		return 0 === eG[xi].length ? "Rank: " + (a80 + 1) : eG[xi] + " Rank: " + (a80 + 1) + (3 !== xi && aHg < 100 ? "   " + eG[3] + " Rank: " + (aHg + 1) : "")
	}, this.aJ4 = function(pc) {
		aJ5(bq.z.pq, pc), aJ5(bq.message.aJ6(), pc, 1), bq.q3.aJ4(pc)
	}, this.aHw = function(username) {
		var username = this.aJ9(username);
		username && (username = "[" + username + "] " + function(username) {
			var fV = username.indexOf("["),
				fk = username.indexOf("]", fV);
			for (; 0 <= fV && fV < fk;) username = username.substring(0, fV) + username.substring(fk + 1), fV = username.indexOf("["), fk = username.indexOf("]", fV);
			return (username = username.replace(new RegExp("[\\[\\]]", "g"), "")).replace(new RegExp("\\s+", "g"), " ").trim()
		}(String(bm.buffer.data[122].value)), bm.rr.px(122, username.trim().slice(0, 20)))
	}, this.aJ9 = function(username) {
		var fV = username.indexOf("["),
			fk = username.indexOf("]");
		return !(fV < 0 || fk - fV <= 1 || 8 < fk - fV) && (username = username.substring(fV + 1, fk).trim()).length ? username : null
	}
}

function aHV() {
	var ut = 0,
		aJC = 0,
		aJD = 0,
		aJE = null,
		aJF = null;

	function aJI(q1, aJJ, aJK) {
		var pU = q1.username;
		return (pU += "   " + bq.lr.aJ3(q1.xi, q1.a80, q1.aHg)) + function(q1) {
			q1 = q1.a00;
			if (q1 < 1e3) return "   Gold: " + q1;
			if ((q1 %= 1024) < 1e3) return "   Gold: " + q1 + "k";
			return "   Gold: " + (q1 - 999) + "M"
		}(q1) + ("   IP: " + bI.f7.a3S(q1.aHh, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aJK ? aJC : aJH(q1, aJJ)])
	}

	function aJH(q1, aJJ) {
		return aJC = aJJ || bq.pk.pl(q1.pc) ? 1 : 0
	}
	this.xY = 0, this.aJG = function() {
		!ut || aJC === aJH(aJF) && aJD === aJF.a00 || (aJD = aJF.a00, aJE.show(-1, -1, aJI(aJF, 0, 1), 1, 1, aJF.color))
	}, this.xl = function(e, q1, aJJ) {
		var rect = e.getBoundingClientRect();
		this.show(rect.left, rect.top, q1, 0, aJJ), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bq.xX && bq.xX.uU(1)
		}), this.xY = aJJ
	}, this.show = function(fn, fp, q1, ux, aJJ) {
		aJE = aJE || new ur, aJD = (aJF = q1).a00, aJE.show(fn, fp, aJI(q1, aJJ), ux, 0, aJF.color), ut = 1
	}, this.uU = function(v3) {
		this.xY = 0, aJE && aJE.uU(v3) && (ut = 0, aJF = null)
	}
}

function aHT() {
	function aJO() {
		var fM, mapSeed;
		u.a9M(29) && (bq.z.aHd && 1 === bq.z.aHe && u.a9M(29).aJQ(), bq.z.aHd = 0, u.a9M(29).aJR(), fM = bV.fM, mapSeed = bV.mapSeed, u.a9M(29).aJS(), fM === bV.fM && mapSeed === bV.mapSeed || bq.x5.aJT(), bq.xX.aJG())
	}
	this.wE = 0, this.aHe = 2, this.aHN = {
		fM: 0,
		mapSeed: 0,
		ws: 0,
		xJ: 0,
		spawningSeed: 0,
		a4c: -1,
		a5S: 0,
		aIh: 0,
		aI3: 0,
		aI4: null,
		a99: 0,
		a8q: 0,
		aIi: 0
	}, this.pq = [], this.pz = 300, this.pr = 1048575, this.aHd = 0, this.aJM = [0, 0], this.aJN = function() {
		aJO(), bq.aHM.dr(), __fx.lobbyReminders.check()
	}, this.aIV = function() {
		bq.aHM.aIV(), aJO(), __fx.lobbyReminders.check()
	}, this.aJU = function() {
		0 === this.aHe && u.a9M(29).aJV()
	}
}

function aHP() {
	var aJW = 256,
		aJX = 18,
		aJY = [],
		aJb = 0;

	function zO(key, aJd, fn, fp, xQ) {
		var canvas = document.createElement("canvas"),
			p2 = (canvas.width = canvas.height = aJW, canvas.getContext("2d", {
				alpha: !1
			})),
			p2 = (p2.imageSmoothingEnabled = !0, p2.drawImage(aJd, fn, fp, xQ, xQ, 0, 0, aJW, aJW), {
				key: key,
				canvas: canvas,
				iT: 0
			});
		return aJY.push(p2), aJY.length > aJX && function(aJj) {
			for (var fg = aJY.length, aC = 0; aC < fg; aC++) {
				var hE = aJY[aC];
				if (!hE.iT && hE !== aJj) return hE.canvas.width = hE.canvas.height = 0, aJY.splice(aC, 1)
			}
		}(p2), p2
	}
	this.x6 = function(fM, mapSeed) {
		return fM + "_" + (bV.aJc(fM) ? mapSeed : 0)
	}, this.xO = function(fM, mapSeed) {
		for (var key = this.x6(fM, mapSeed), aJd = null, aC = aJY.length - 1; 0 <= aC; aC--) {
			var hE = aJY[aC];
			if (hE.key === key) {
				if (!hE.iT) return hE.iT = 1, aJY.splice(aC, 1), aJY.push(hE), hE.canvas;
				aJd = hE
			}
		}
		return aJd ? ((fM = zO(key, aJd.canvas, 0, 0, aJW)).iT = 1, fM.canvas) : null
	}, this.xP = function(canvas) {
		for (var aC = aJY.length - 1; 0 <= aC; aC--)
			if (aJY[aC].canvas === canvas) {
				aJY[aC].iT = 0;
				break
			} canvas.parentNode && u.removeChild(canvas.parentNode, canvas)
	}, this.aHa = function() {
		for (var aC = aJY.length - 1; 0 <= aC; aC--) this.xP(aJY[aC].canvas)
	}, this.el = function() {
		if (bq.fD && !(bi.eg < aJb)) {
			for (var self, fM, mapSeed, eh, tT = bq.tT.tT, fg = tT.length, aC = 0; aC < fg; aC++)
				if (! function(key) {
						for (var aC = aJY.length - 1; 0 <= aC; aC--)
							if (aJY[aC].key === key) return 1;
						return
					}(this.x6(tT[aC].fM, tT[aC].mapSeed))) return self = this, fM = tT[aC].fM, mapSeed = tT[aC].mapSeed, eh = void 0, eh = performance.now(),
					function(self, fM, mapSeed) {
						var aJd = bV.aJh(fM, mapSeed),
							xQ = Math.min(aJd.width, aJd.height);
						zO(self.x6(fM, mapSeed), aJd, aJd.width - xQ >> 1, aJd.height - xQ >> 1, xQ), aJd !== bV.a0i && (aJd.width = aJd.height = 0)
					}(self, fM, mapSeed), u.a9M(29).aIN(), self = performance.now(), void(aJb = self + Math.max(Math.min(self - eh, 500), 200));
			aJb = bi.eg + 200
		}
	}, this.aJT = function() {
		aJb = performance.now() + 200
	}
}

function aHX() {
	var aJk = 0,
		aJl = "",
		aJm = 0,
		aJn = 0,
		aJo = "";

	function aJr(aIv) {
		b1.aIL.aIM(3, aIv)
	}

	function aJq(s) {
		s = bq.pW.pX(s);
		return s.length ? s.join(" ") + " " : ""
	}

	function aK2(j) {
		return new RegExp("^@([-\\w]{5}|\\[[-\\w]{1,6}\\])$").test(j)
	}

	function aJu(s) {
		var aK8 = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return s.match(aK8)
	}
	this.a4D = function(s) {
		var h, aJv, aJp;
		if (aJk) return aJk = 0, "yes" === (aJp = s.toLowerCase()) || "y" === aJp ? (aJo = aJq(aJl), void aJr(aJl)) : (aJo = "", void bq.message.aIH({
			id: 5,
			aIs: 7
		}));
		aJo = aJq(s), !(s.indexOf("@") < 0) && (aJp = aJu(s)) ? (aJl = s, h = bq.pk.wu.slice(), function(aJt, aJv, s) {
			if (!aJm) return;
			for (var fg = aJv.length, aC = 0; aC < fg; aC++) 2 === aJv[aC].id && (s = s.replace(aJt[aJv[aC].eP], "@" + aJv[aC].g8));
			return aJk = 1, aJr((aJl = s).slice(0, 126) + "|"), 1
		}(aJp, aJv = function(aJt) {
			for (var aJv = [], fg = (aJn = aJm = 0, aJt.length), aC = 0; aC < fg; aC++) {
				var j = aJt[aC],
					lx = j.length;
				bD.pY.startsWith(j, "@[") ? lx <= 9 && bD.pY.a7U(j, "]") && aJv.push({
					id: 0,
					g8: j.substring(2, lx - 1).toUpperCase()
				}) : 6 === lx && (aJn++, aJv.push({
					id: 1,
					g8: bJ.f7.f8(j.substring(1), 5)
				}))
			}
			return aJv
		}(aJp), s) || (0 === aJv.length || aJp.length === aJn ? aJr(s) : (function(h, aJv) {
			var lx = aJv.length;
			if (0 === lx) return;
			var fg = h.length;
			loop: for (var aC = fg - 1; 0 <= aC; aC--) {
				for (var fz = 0; fz < lx; fz++)
					if (0 === aJv[fz].id) {
						if (aJv[fz].g8 === bD.pY.pm(h[aC].username)) continue loop
					} else if (1 === aJv[fz].id && aJv[fz].g8 === h[aC].pc) continue loop;
				h[aC] = h[--fg], h.pop()
			}
		}(h, aJv), aJp = h.length, aJo = "", aJk = 1, bq.message.aIH({
			id: 6,
			value: aJp
		})))) : aJr(s)
	}, this.aK0 = function() {
		return aJk
	}, this.aK1 = function() {
		return aJo
	}, this.pX = function(s) {
		var aJt = aJu(s),
			h = [];
		if (aJt)
			for (var aC = 0; aC < aJt.length; aC++) aK2(aJt[aC]) && h.indexOf(aJt[aC]) < 0 && h.push(aJt[aC]);
		return h
	}, this.aK3 = function(event, e) {
		if ("deleteContentBackward" !== event.inputType) return 0;
		var zq = e.selectionStart;
		if (zq !== e.selectionEnd) return 0;
		var pU = e.value.substring(0, zq),
			lx = pU.match(new RegExp("\\B@[-\\w\\[\\]]+ $"));
		if (!lx || !aK2(lx[0].substring(0, lx[0].length - 1))) return 0;
		event.preventDefault();
		event = zq - lx[0].length;
		return e.value = pU.substring(0, event) + e.value.substring(zq), e.setSelectionRange(event, event), 1
	}, this.aK4 = function(s) {
		s = aJu(s);
		return s ? function(aJt) {
			for (var fg = aJt.length, aC = 0; aC < fg; aC++) {
				var j = aJt[aC];
				if ("@all" === j || "@everyone" === j) return 1
			}
			return 0
		}(s) || function(aJt) {
			for (var aK7 = new RegExp("^[0-9]"), a8H = new RegExp("^[0-9]+$"), aC = 0; aC < aJt.length; aC++) {
				var j = aJt[aC].substring(1);
				if (1 <= j.length && j.length <= 3 && aK7.test(j) && !a8H.test(j)) return 1
			}
			return 0
		}(s) : 0
	}, this.aK9 = function(s) {
		var aJt = aJu(s);
		if (aJt)
			for (var a6 = new RegExp("^[0-9]+$"), fg = aJt.length, aC = 0; aC < fg; aC++) {
				var j = aJt[aC].substring(1),
					lx = j.length;
				1 <= lx && lx <= 3 && a6.test(j) && (lx = parseInt(j, 10), !isNaN(lx)) && 0 <= lx && lx < bA.data.h.length && (s = s.replace("@" + j, "@" + bA.data.h[lx]))
			}
		return s
	}
}

function aHW() {
	var aKB, aKC = [],
		aKD = -1,
		aKE = 0,
		aKF = 0;

	function aKJ() {
		aKE = bi.eg, (3 === this.xp ? aKI : (aKD = (aKC.length + aKD + 2 * this.xp - 1) % aKC.length, aKH))()
	}

	function aKH() {
		0 !== aKC.length && (aKF = 0, aKB && aKB.xs(), (aKB = new xm(aKJ)).px(aKD, aKC.length), aKB.show(aKC[aKD]), bq.message.resize())
	}

	function aKI() {
		aKF = 1, aKB && aKB.xs(), (aKB = new xt(aKH)).px(aKC.length), aKB.show(), bq.message.resize()
	}
	this.aIH = function(pa) {
		var q1;
		2 === pa.id && 3 === pa.aIs ? bq.lr.aJ4(pa.pc) : (q1 = bq.lr.pu(pa, bq.lr.pv(pa)), (5 !== pa.id && 6 !== pa.id || (by.nF.py(q1), 5 === pa.id)) && (q1 = bi.eg < aKE + 2e4, aKD !== aKC.length - 1 && q1 || (aKD = aKC.length), __fx.pingFilter
			.isMuted(pa, "s") || (aKC.push(pa), bm.buffer.data[14].value || 7 === pa.id || bt.play(), aKB && (aKF && (bm.buffer.data[13].value || q1) ? aKB.px(aKC.length) : aKH()))))
	}, this.show = function() {
		aKI()
	}, this.uU = function() {
		aKD = aKC.length - 1, aKB && aKB.xs(), aKB = null
	}, this.resize = function() {
		aKB && aKB.resize()
	}, this.aJ6 = function() {
		return aKC
	}
}

function aHU() {
	var aKK = null,
		aKL = null,
		aKM = 0,
		aKN = null;

	function aKP() {
		0 !== aKL.xi && (bq.xy.uU(), u.v(8, 29, new vS(25, {
			action: 0,
			pc: bI.f7.a3S(aKL.pc, 5),
			vQ: 0
		}, 29)))
	}

	function aKV() {
		return !bq.pi || bq.lr.xj(aKL) ? 1 : 0
	}

	function aKR() {
		return aKV() ? 1 : +bs.aKZ(bI.f7.a3S(aKL.pc, 5))
	}

	function aKQ(aKa) {
		aKR() || (bs.aKb(bI.f7.a3S(aKL.pc, 5), aKa), bq.xy.uU())
	}

	function aKT(ws) {
		return bq.tT.aIP(aKL.pc, ws)
	}

	function aKU(ws) {
		aKV() || (bq.tT.zA(aKL.pc, aKT(ws) ? 0 : ws), bq.xy.uU())
	}

	function aKX() {
		var ot;
		return !aKV() && (ot = bD.pY.pm(aKL.username)) ? +(ot === bD.pY.pm(bq.pi.aHn)) : 1
	}

	function aKW() {
		aKX() || (b1.aIL.aIM(2, aKL.pc), bq.xy.uU())
	}

	function aKS() {
		29 === u.vR && u.a5O().pW(bI.f7.a3S(aKL.pc, 5))
	}
	this.aKO = function(e, q1) {
		var y0;
		aKM = 1, aKL = q1, aKK = new xu([new x(L(146), aKP, 0 === q1.xi ? 1 : 0), new x(L(147), function() {
			aKQ(1)
		}, aKR()), new x(L(148), function() {
			aKQ(0)
		}, aKR()), new x(L(149), aKS, 0), new x(aKT(1) ? L(150) : L(151), function() {
			aKU(1)
		}, aKV()), new x(aKT(2) ? L(152) : L(153), function() {
			aKU(2)
		}, aKV()), new x(L(154), aKW, aKX())]), aKN = {
			clientX: e.clientX,
			clientY: e.clientY
		}, q1 = aKN.clientX, e = aKN.clientY, y0 = 1, aKK.show(q1, e, y0), bq.xX.show(aKK.fn, aKK.fp, aKL, 1)
	}, this.a6F = function(code) {
		if (29 !== u.vR) return !1;
		if (!aKL) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.uU();
			else if (bD.pY.startsWith(code, "Numpad") || bD.pY.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aKM) this.aKO(aKN, aKL);
				else {
					if (!aKK) return !1;
					code <= 1 ? aKP() : code <= 3 ? aKQ(+(2 === code)) : 4 === code ? (aKS(), this.uU()) : code <= 6 ? aKU(5 === code ? 1 : 2) : aKW()
				}
		}
		return !0
	}, this.uU = function() {
		aKM = 0, aKK && aKK.uU(), aKK = null, bq.xX.uU()
	}
}

function aHY() {
	var aKc = [],
		vc = [],
		aKd = [],
		aKe = {},
		aKf = {};

	function aKh(q1) {
		for (var s = q1.s, aKg = [];;) {
			var eq = function aKj(s, position) {
				position = s.indexOf("@", position);
				if (position < 0) return -1;
				var pU = s.substring(position + 1, position + 6);
				if (5 !== pU.length) return aKj(s, position + 1);
				var aKx = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aKx.test(pU)) return aKj(s, position + 1);
				aKx = s.substring(position + 6, position + 7);
				if (1 !== aKx.length) return position;
				pU = new RegExp("^[ :!.]+$");
				if (!pU.test(aKx)) return aKj(s, position + 1);
				return position
			}(s, 0);
			if (-1 === eq) {
				aKg.push(aKk(s, q1));
				break
			}
			0 === eq ? aKg.push(aKl(s.substring(1, 6), q1, eq)) : (aKg.push(aKk(s.substring(0, eq), q1)), aKg.push(aKl(s.substring(eq + 1, eq + 6), q1, eq))), s = s.substring(eq + 6)
		}
		return aKg
	}

	function aKl(pU, q1, eq) {
		var pU = aKm(pU),
			uS = (0 === eq && 0 === q1.pa.id && q1.q2 && (q1.fontSize = bq.lr.aIy(pU.xi, pU.a80), q1.aIw = bq.lr.aIz(pU.a80)), document.createElement("span"));
		return uS.style.display = "inline-block", uS.style.cursor = "pointer", uS.style.margin = "0", uS.style.font = "inherit", uS.style.minWidth = uS.style.minHeight = "1em", uS.aKn = {
			q1: q1,
			eq: eq
		}, aKo(uS, pU), vc.push(uS), (aKe[pU.pc] || (aKe[pU.pc] = [])).push(uS), uS
	}

	function aKo(uS, aHi) {
		var q1 = uS.aKn.q1;
		uS.textContent = function(aHi, q1, eq) {
				if (aHi.aKq) return aHi.aKq--, eq = 2 === q1.pa.id || (3 === q1.pa.id || 4 === q1.pa.id) && 0 !== eq, aHi.username + (eq ? " (" + aHi.aHu + ")" : "");
				if (q1.pa.aJ8) return "Redacted " + bI.f7.a3S(aHi.pc, 2);
				return aHi.username
			}(aHi, q1, uS.aKn.eq), uS.style.color = bq.lr.xh(aHi.xi), uS.style.textShadow = 11 !== aHi.xi ? "none" : "-1px -1px 0 lightgray,1px -1px 0 lightgray,-1px 1px 0 lightgray,1px 1px 0 lightgray", uS.style.textDecoration = bq.lr.xj(aHi) ?
			"underline" : "none", aHi.xk && (uS.style.textDecorationLine = "underline", uS.style.textDecorationStyle = "dotted"), uS.style.fontWeight = bq.lr.aIz(aHi.a80) ? "bold" : "inherit", uS.onclick = function(e) {
				bq.xy.aKO(e, aHi)
			}, bM.ty() || (uS.onmouseover = function(e) {
				bq.xX.xl(e.target, aHi)
			})
	}

	function aKk(s, q1) {
		var uS = document.createElement("span");
		return uS.textContent = s, uS.style.color = q1.aIx, uS.style.margin = "0", uS.style.font = "inherit", uS
	}

	function aKm(pU) {
		var pc = bJ.f7.f8(pU, 5),
			aHi = bq.pk.pl(pc);
		if (aHi) {
			for (aKc.push(aHi); 75 < aKc.length;) aKc.shift();
			return aHi
		}
		for (var aHb = bq.pk.aHb, aC = aHb.length - 1; 0 <= aC; aC--)
			if (pc === (aHi = aHb[aC]).pc) return aKc.push(aHi), aHi;
		for (aC = aKc.length - 1; 0 <= aC; aC--)
			if (pc === (aHi = aKc[aC]).pc) return aKc.push(aHi), aHi;
		return aKs(pc, null)
	}

	function aKs(pc, name) {
		return aKf[pc] || (aKf[pc] = bq.pk.aHj(pc, name || "Player " + bI.f7.a3S(pc, 2), 1, 999999, 999999, 0, 0, 0, 0, 1))
	}

	function aKw(pc, name) {
		var aHi;
		name && !bq.pk.pl(pc) && ((aHi = function(pc) {
			for (var aHb = bq.pk.aHb, aC = aHb.length - 1; 0 <= aC; aC--)
				if (pc === aHb[aC].pc) return aHb[aC];
			for (aC = aKc.length - 1; 0 <= aC; aC--)
				if (pc === aKc[aC].pc) return aKc[aC];
			return aKf[pc] || null
		}(pc)) ? aHi.username !== name && (aHi.username = aHi.aHn = name, bq.q3.aHm(pc)) : aKs(pc, name))
	}

	function aL1(aHi, aHt, pc) {
		pc === aHi.pc && (aHi.aHu || (aHi.aHu = aHi.username), aHi.username = aHi.aHn = aHt)
	}
	this.xs = function() {
		for (var aC = 0; aC < vc.length; aC++) vc[aC].onclick = vc[aC].onmouseover = null;
		aKf = aKe = aKd = vc = null
	}, this.transform = function(q1) {
		for (var tF = document.createElement("div"), aKg = aKh(q1), aC = 0; aC < aKg.length; aC++) tF.appendChild(aKg[aC]);
		0 === q1.pa.id && (tF.vx143 = q1.pa, aKd.push(tF)), tF.style.margin = "0.6em 0.6em", q1.q2 && (tF.style.marginLeft = tF.style.marginRight = "inherit"), tF.style.font = "inherit";
		var aKi = 0 < q1.pa.id;
		return q1.aIw && (tF.style.fontWeight = "bold"), aKi && (tF.style.paddingLeft = "0.7em"), aKi && (tF.style.fontStyle = "italic"), tF.style.fontSize = q1.fontSize.toFixed(2) + "em", tF
	}, this.aHm = function(pc) {
		var h = aKe && aKe[pc];
		if (h)
			for (var aHi = aKm(bI.f7.a3S(pc, 5)), aC = h.length - 1; 0 <= aC; aC--) h[aC].parentNode ? aKo(h[aC], aHi) : h.splice(aC, 1)
	}, this.aKu = function(aKv) {
		!aKv || 4 < aKv.id || (aKw(aKv.pc, aKv.pd), aKv.pe && aKw(aKv.target, aKv.pe))
	}, this.aL0 = function(aKv) {
		if (aKv && (2 === aKv.id && 1 === aKv.aIs || 3 === aKv.id && 2 === aKv.aIs)) {
			var pc = 3 === aKv.id ? aKv.target : aKv.pc;
			if (!bq.pk.pl(pc)) {
				for (var aHt = (3 === aKv.id ? aKv.pe : aKv.pd) || "Redacted " + bI.f7.a3S(pc, 2), aHb = bq.pk.aHb, aC = aHb.length - 1; 0 <= aC; aC--) aL1(aHb[aC], aHt, pc);
				for (aC = aKc.length - 1; 0 <= aC; aC--) aL1(aKc[aC], aHt, pc);
				aKf[pc] && aL1(aKf[pc], aHt, pc), this.aHm(pc)
			}
		}
	}, this.aJ4 = function(pc) {
		for (var aL2 = aKd, aC = aL2.length - 1; 0 <= aC; aC--) {
			var fj = aL2[aC];
			if (fj.vx143.pc === pc) {
				for (; fj.firstChild;) u.removeChild(fj, fj.firstChild);
				fj.vx143.s = "[Redacted Message]";
				for (var aKg = aKh(bq.lr.pu(fj.vx143, bq.lr.pv(fj.vx143))), fz = 0; fz < aKg.length; fz++) fj.appendChild(aKg[fz]);
				aL2.splice(aC, 1)
			}
		}
	}
}

function cW() {
	var aL3, aL4, aL5;

	function aLA(aC) {
		var button = aZ.p5[aC],
			fn = button.fn,
			fp = button.fp,
			j = button.j,
			k = button.k;
		ym.fillStyle = button.aL8, ym.fillRect(fn, fp, j, k), aC === aL3 && (ym.fillStyle = aL5, ym.fillRect(fn, fp, j, k)), ym.lineWidth = bf.a39, ym.strokeStyle = aL4, ym.strokeRect(fn, fp, j, k),
			function(button) {
				var fn = button.fn,
					fp = button.fp,
					j = button.j,
					k = button.k;
				bD.t4.textAlign(ym, 1), bD.t4.textBaseline(ym, 1), ym.font = button.font, ym.fillStyle = aL4, ym.fillText(button.aIv, Math.floor(fn + j / 2), Math.floor(fp + k / 2 + .1 * button.fontSize))
			}(button)
	}
	this.j = 0, this.k = 0, this.fp = 0, this.gap = 0, this.dr = function() {
		aL3 = -1, aL4 = bE.qL, aL5 = "rgba(255,255,255,0.16)", this.p5 = new Array(7), this.k = Math.floor((a1.a2.it() ? .123 : .093) * i.iu), this.j = Math.floor((a1.a2.it() ? 3.96 : 4.2) * this.k), this.gap = Math.floor(.025 * this.j);
		var aL6 = Math.floor(.26 * this.k),
			aL7 = bD.t4.t7(1, aL6);
		this.p5[0] = {
			fn: 0,
			fp: 0,
			j: Math.floor(.6 * this.j - this.gap / 2),
			k: this.k,
			aIv: "Multiplayer",
			font: aL7,
			aL8: "rgba(22,88,22,0.8)",
			fontSize: aL6
		}, aL6 = Math.floor(.18 * this.k), aL7 = bD.t4.t7(1, aL6), this.p5[1] = {
			fn: 0,
			fp: 0,
			j: this.j - this.p5[0].j - this.gap,
			k: this.k,
			aIv: "Single Player",
			font: aL7,
			aL8: "rgba(22,88,88,0.8)",
			fontSize: aL6
		}, this.p5[2] = {
			fn: 0,
			fp: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aIv: "",
			font: this.p5[1].font,
			aL8: "rgba(100,0,0,0.8)",
			fontSize: this.p5[1].fontSize
		}, this.p5[3] = {
			fn: 0,
			fp: 0,
			j: this.j,
			k: this.k,
			aIv: "Back",
			font: this.p5[0].font,
			aL8: "rgba(0,0,0,0.8)",
			fontSize: this.p5[0].fontSize
		}, this.p5[4] = {
			fn: 0,
			fp: 0,
			j: this.j,
			k: Math.floor(.3 * this.k),
			aIv: "The game was updated!",
			font: this.p5[1].font,
			aL8: "rgba(100,0,0,0.8)",
			fontSize: this.p5[1].fontSize
		}, this.p5[5] = {
			fn: 0,
			fp: 0,
			j: this.p5[0].j,
			k: Math.floor(.8 * this.k),
			aIv: "Reload",
			font: this.p5[0].font,
			aL8: "rgba(0,100,0,0.8)",
			fontSize: this.p5[0].fontSize
		}, this.p5[6] = {
			fn: 0,
			fp: 0,
			j: this.p5[1].j,
			k: this.p5[5].k,
			aIv: "Back",
			font: this.p5[0].font,
			aL8: "rgba(0,0,0,0.8)",
			fontSize: this.p5[0].fontSize
		}, this.aE0()
	}, this.aE0 = function() {
		this.fp = Math.floor(.54 * i.k), this.p5[0].fn = Math.floor(.5 * i.j - .5 * this.j), this.p5[1].fn = this.p5[0].fn + this.p5[0].j + this.gap, this.p5[2].fn = this.p5[3].fn = this.p5[0].fn, this.p5[4].fn = this.p5[5].fn = this.p5[0].fn,
			this.p5[6].fn = this.p5[1].fn, this.p5[0].fp = Math.floor(.54 * i.k), this.p5[1].fp = this.p5[0].fp, this.p5[2].fp = Math.floor((i.k - this.p5[2].k - this.p5[3].k - this.gap) / 2), this.p5[3].fp = this.p5[2].fp + this.p5[2].k + this
			.gap, this.p5[4].fp = Math.floor((i.k - this.p5[4].k - this.p5[5].k - this.gap) / 2), this.p5[5].fp = this.p5[6].fp = this.p5[4].fp + this.p5[4].k + this.gap
	}, this.aL9 = function() {
		aLA(0), aLA(1)
	}, this.aLB = function() {
		aLA(2), aLA(3)
	}, this.aLC = function() {
		aLA(4), aLA(5), aLA(6)
	}, this.a5h = function(fn, fp, nQ) {
		var aC = -1;
		return 0 === ab.a5K() ? aC = this.a6B(fn, fp, 0, 2) : 3 === ab.a5K() ? aC = this.a6B(fn, fp, 3, 1) : 5 === ab.a5K() && (aC = this.a6B(fn, fp, 5, 2)), aL3 !== aC && (aL3 = aC, nQ) && (bi.dy = !0), -1 !== aC && (aU.reset(), !0)
	}, this.a6B = function(fn, fp, aLD, size) {
		for (var aC = aLD; aC < aLD + size; aC++)
			if (fn >= this.p5[aC].fn && fp >= this.p5[aC].fp && fn <= this.p5[aC].fn + this.p5[aC].j && fp <= this.p5[aC].fp + this.p5[aC].k) return aC;
		return -1
	}
}

function cX() {
	var aLF, aLG, aBd, aLH, aLI, aLJ, aLK, aLL, aLM, aBc, aLN, aLO, aLP, aLQ = 1,
		aLS = 0;

	function aLV(aLW) {
		aLW ? aLP = (aLP + 1) % b1.z.aLX : (b1.z.close(aLP, 3280), aLQ ? aLQ = 0 : (aLP = (aLP + 1) % b1.z.aLX, b1.z.close(aLP, 3280))), aLO = bi.eg, aa.aLU = aLS, b1.z.aLY(aLP, 4, 1) && b1.aIL.aLZ(aLP)
	}

	function aLa() {
		if (0 !== aLP) return 1 === aLP && __fx.customLobby.isActive() ? (p.a5W(3249), __fx.customLobby.setActive(!1)) : void aLV();
		p.a5W(3249)
	}

	function aLf(fp, aDi, wE) {
		var o5 = Math.floor((i.j - aLH) / 2) + aLK,
			oI = o5 + Math.floor(wE * (aLH - 2 * aLK));
		ym.lineWidth = aDi, ym.beginPath(), ym.moveTo(o5, fp), ym.lineTo(oI, fp), ym.lineTo(Math.floor(o5 - aLK + wE * aLH), fp + aBd), ym.lineTo(o5 - aLK, fp + aBd), ym.closePath()
	}
	this.f9 = 1, this.aLT = 0, this.aLU = 0, this.dr = function() {
		bX.turnstile.f5(), ab.setState(6), aLF = 0, aLG = 1, aLL = "rgba(0,220,120,0.4)", aLM = "rgba(0,0,0,0.8)", this.resize(), bi.dy = !0, aLQ = 1, aLP = this.f9 - 1, aLS = 0, aLV(1)
	}, this.resize = function() {
		aLH = Math.floor((a1.a2.it() ? .5 : .25) * i.iu), aLI = aLH + 12, aBd = Math.floor(.125 * aLH), aLK = 3 * aBd, aLJ = Math.floor(.225 * aLH), aLN = Math.floor(.3 * aBd), aBc = bD.t4.t7(0, aLN)
	}, this.a5R = function(oW) {
		oW === aLP && aLa()
	}, this.hu = function(fn, fp) {
		var o5 = Math.floor((i.j - aLI) / 2),
			o6 = Math.floor(.5 * (i.k - bf.gap - aBd - aLJ)) + aBd + bf.gap;
		return o5 < fn && fn < o5 + aLI && o6 < fp && fp < o6 + aLJ && (this.a6M(), aZ.a5h(fn, fp, !1), !0)
	}, this.a6M = function() {
		b1.z.a5X(3260), __fx.customLobby.setActive(false), u.z.a0()
	}, this.el = function() {
		6 === ab.a5K() && (bi.eg > aLO + 12e3 && aLa(), 100 < (aLF += .07 * aLG * (aLF < 16 ? 5 + aLF : 84 < aLF ? 105 - aLF : 17)) ? (aLF = 100, aLG = -1) : aLF < 0 && (aLF = 0, aLG = 1), aLL = "rgba(0," + Math.floor(190 - 1.9 * aLF) + "," +
			Math.floor(120 - 1.2 * aLF) + "," + (.4 + .004 * aLF) + ")", aLM = "rgba(0," + Math.floor(1.9 * aLF) + "," + Math.floor(1.2 * aLF) + "," + (.8 - .004 * aLF) + ")", bi.dy = !0)
	}, this.yl = function() {
		var fn = Math.floor((i.j - aLI) / 2),
			fp = Math.floor(.5 * (i.k - bf.gap - aBd - aLJ));
		! function(title, fp, aDi, wE) {
			ym.fillStyle = aLM, aLf(fp, aDi, 1), ym.fill(), ym.fillStyle = aLL, aLf(fp, aDi, wE), ym.fill(), ym.strokeStyle = bE.qL, __fx.settings.smoothUI && (ym.strokeStyle = "rgba(255, 255, 255, 0.3)", ym.lineJoin = "round"), aLf(fp, aDi, 1),
				ym.stroke(), ym.lineJoin = "miter",
				function(aLh, fp) {
					bD.t4.textAlign(ym, 1), bD.t4.textBaseline(ym, 1), ym.font = aBc, ym.fillStyle = bE.qL, ym.fillText(aLh, Math.floor(.5 * i.j), Math.floor(fp + .58 * aBd))
				}(title, fp)
		}(L(155), fp, 3, aLF / 100),
		function(fn, fp, j, k, aIv) {
			ym.fillStyle = bE.qG, ym.beginPath(), __fx.settings.smoothUI && ym.roundRect ? ym.roundRect(fn, fp, j, k, .1 * k) : ym.rect(fn, fp, j, k), ym.fill(), ym.lineWidth = 3, ym.strokeStyle = __fx.settings.smoothUI ?
				"rgba(255, 255, 255, 0.3)" : bE.qL, ym.stroke();
			var fg = Math.floor(.3 * k);
			bD.t4.textAlign(ym, 1), bD.t4.textBaseline(ym, 1), ym.font = bD.t4.t7(0, fg), ym.fillStyle = bE.qL, ym.fillText(aIv, Math.floor(fn + j / 2), Math.floor(fp + k / 2 + .1 * fg))
		}(fn, fp + aBd + bf.gap, aLI, aLJ, L(49))
	}
}

function cY() {
	var a5E = 0;
	this.dr = function() {
		aZ.dr(), a5E = 0
	}, this.setState = function(aLi) {
		a5E = aLi
	}, this.a5K = function() {
		return a5E
	}, this.aLj = function() {
		this.setState(8), u.y()
	}, this.a6F = function(e) {
		if (!bV.a0g) return !1;
		if (!(bi.eg < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aLk()) return !0;
				if ("Enter" === e.key) {
					if (0 === a5E) return !0;
					if (7 === a5E) return !0
				}
			}
			return !1
		}
	}, this.aLl = function() {
		bc.resize()
	}, this.aLk = function() {
		return !!bc.uU()
	}, this.hu = function(fn, fp) {
		!bV.a0g || bc.hu(fn, fp) || 6 === a5E && aa.hu(fn, fp) || bb.hu(fn, fp) || aU.hu(fn, fp)
	}, this.a5h = function(fn, fp) {
		!aU.aDt && aZ.a5h(fn, fp, !0) || aU.a5h(fn, fp)
	}, this.click = function(fn, fp) {
		aU.a66()
	}, this.a5k = function(fn, fp, deltaY) {}, this.aLm = function() {
		aZ.aE0(), bi.dy = !0
	}, this.yl = function() {
		8 !== a5E && 10 !== a5E && (ym.imageSmoothingEnabled = !0, this.a2F(), 0 !== a5E && (aU.yl(), aP.yl(), this.aLn(), bb.yl()), 0 !== a5E && 6 === a5E && aa.yl(), bc.yl(), u.yl())
	}, this.a2F = function() {
		var aLp, aLo;
		if (__fx.makeMainMenuTransparent) ym.clearRect(0, 0, i.j, i.k);
		else bV.a0g ? (aLo = i.j / bV.fr, aLp = i.k / bV.fs, ym.setTransform(aLo = aLp < aLo ? aLo : aLp, 0, 0, aLo, Math.floor((i.j - aLo * bV.fr) / 2), Math.floor((i.k - aLo * bV.fs) / 2)), ym.drawImage(bV.a0i, 0, 0), ym.setTransform(1, 0, 0,
			1, 0, 0), ym.fillStyle = bE.qG) : ym.fillStyle = bE.qC, ym.fillRect(0, 0, i.j, i.k)
	}, this.aLn = function() {
		var fp = Math.floor(.3 * i.k),
			canvas = ac.x1("territorial.io"),
			ik = (ik = 1.75 * i.k / canvas.width) * canvas.width < .98 * i.j ? .98 * i.j / canvas.width : ik,
			fn = (ym.globalAlpha = .15, ym.imageSmoothingEnabled = !1, Math.floor(.5 * (i.j - ik * canvas.width))),
			fn = Math.floor(fn / ik),
			fp = Math.floor(fp - .5 * canvas.height * ik),
			fp = Math.floor(fp / ik);
		ym.setTransform(ik, 0, 0, ik, fn, fp), ym.drawImage(canvas, fn, fp), ym.setTransform(1, 0, 0, 1, 0, 0), ym.globalAlpha = 1, ym.imageSmoothingEnabled = !0
	}
}

function cy() {
	this.aIh = 0;
	var aLr, aLs, aLt, aLu, aLv, aLw = this.aLq = 0;

	function tC() {
		aLu = aLv = null, aLw = 0
	}
	this.dr = function(aHN, aIZ, aIb) {
		u.y(), bq.xs(), ab.setState(10), aLu = aHN, aLv = aIZ, aLw = aIb, this.aIh = aHN.aIh, this.aLq = aIb, aLr = 0, aLs = bi.eg + 4500, b1.z.a5S = aHN.a5S, 1 === aIZ.length ? (b1.z.close(b1.z.fE, 3281), aLt = 0) : b1.z.fE === aHN.a5S ? (
			console.log("direct pass"), aLt = 0) : (console.log("delayed pass"), b1.z.close(b1.z.fE, 3247), aLt = 2, b1.z.aLY(aHN.a5S, 5, 2) && b1.rp.aLx()), ym.imageSmoothingEnabled = !0, ab.a2F();
		aIb = ac.x1("loading"), aIZ = (a1.a2.it() ? .396 : .25) * i.iu / aIb.width;
		ym.setTransform(aIZ, 0, 0, aIZ, Math.floor((i.j - aIZ * aIb.width) / 2), Math.floor((i.k - aIZ * aIb.height) / 2)), ym.imageSmoothingEnabled = !1, ym.drawImage(aIb, 0, 0), ym.setTransform(1, 0, 0, 1, 0, 0)
	}, this.nO = function() {
		0 < aLt && bi.eg > aLs && (aLt--, aLs += 4500, 0 === bi.aLy) && 0 === bi.kz() && b1.z.aLY(b1.z.a5S, 5, 2)
	}, this.aLz = function() {
		return 10 === ab.a5K() && (bq.aHN.aIk(aLu, aLv, aLw), tC(), !0)
	}, this.aM0 = function() {
		10 === ab.a5K() && 2 <= ++aLr && (bq.aHN.aIk(aLu, aLv, aLw), tC())
	}
}

function cZ() {
	var aM2, canvas, a4W, aM3;

	function aM9(eP, name, aMA, pU) {
		a4W[eP] = name, canvas[eP] = new Image, canvas[eP].onload = function() {
			! function(eP, aMA) {
				var a85, a86 = null;
				7 === aMA ? a85 = bD.p1.a88 : 9 === aMA ? a85 = bD.p1.a89 : 8 === aMA ? (a85 = bD.p1.a8C, a86 = .1) : 3 === aMA ? (a85 = bD.p1.a8A, a86 = .06) : 5 === aMA ? a85 = bD.p1.a8D : 6 === aMA ? a85 = bD.p1.a87 : 4 === aMA && (a85 = bD.p1
					.a8E);
				canvas[eP] = bD.p1.a84(canvas[eP], a85, a86)
			}(eP, aMA), aMC()
		}, canvas[eP].onerror = function(e) {
			console.error("Error loading image at index", eP, "Error:", e), aMC()
		}, canvas[eP].src = "data:image/png;base64," + pU
	}

	function aMC() {
		aM2--, aM6()
	}

	function aM6() {
		0 === aM2 && (aM2 = -1, aM8(), bi.dy = !0, canvas[7] = aM3, canvas[8] = aM3, canvas[9] = aM3, canvas[10] = aM3, 5 === u.vR) && u.a5O().aME.resize()
	}

	function aM8() {
		aM.a9X(), bb.aHF([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a1.id, 1 !== a1.id, !0, !0, !0]), ak.a0l = new a2g, ak.a0l.dr(), ax.ds()
	}
	this.dr = function() {
		if (void 0 === canvas) {
			aM2 = 29, canvas = new Array(aM2), a4W = new Array(aM2), (aM3 = document.createElement("canvas")).width = 1;
			for (var aC = aM2 - (aM3.height = 1); 0 <= aC; aC--) canvas[aC] = aM3;
			aM8(), aM9(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aM9(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aM9(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aM9(3, "orders", 6,
					"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"
					), aM9(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aM9(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aM9(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPNNtkZ1KD3338/9tlnn3jttdeyU4pOv3794uKLL3YAdz128MEHx2233ZadQR1guCeH4R4ACknjxo3j0EMPjZ122ik233zzaNWqVXZSwaqqqoo333wzXnjhhXjooYfioYceyk4CIP5vyOGXv/xlHHjggfGTn/wkGjRokJ1U53z22Wfx1FNPxa233urxC2qA4Z4chnsAAAAAAAAA6i/P+AIAAAAAAAAAQA0aPnx4fPDBB9kZVMOKK65Y70eWevbsGVtttVV2BgvMnz8/RowYkZ0BwFLo1KlT9OzZMzuDGjRu3LjYZpttjPYk+d3vfhcHHXRQfP7559kpLKU+ffpkJwAAUI9VVFTEKaecEk899VRMmTIlrrnmmthtt92M9ixnpaWl0blz5+jbt288+OCD8fHHH8ddd90Vffr0cYg4QII2bdrEJZdcEh9++GFcd9118bOf/cxozw9YddVVY5999okHH3wwxo8fH8OGDYtmzZplZwEAAAAAAAAAUCRKImJ+dgQAAAAAAABATfr3v/8da665ZnZGUfvggw9i7bXXzs4ASHPSSSfFxRdfnJ1BNUyZMiXWXHPNmDNnTnbKUvnTn/4Uu+66a3YGCzz11FPRu3fv7AwAlsLll18exx57bHYGNWTMmDGx/fbbx/Tp07NTil7Pnj3jzjvvjLZt22ansIRmzpwZq622WsyaNSs7hWQvvfRSbLrpptkZRadfv35x3XXXZWeQ7Je//GWcfPLJ2RlF5+OPP44ddtghOwPqpbKysujXr1/svvvu8ZOf/CSaNGmSncRCJk+eHE8//XTcdttt8dBDD2XnQL3g+7HadeKJJ8aTTz6ZnVEjunTpEoMHD45ddtklmjdvnp1Tb02fPj1GjRoVl156aYwdOzY7B+qVmTNnRtOmTbMzio6xTAAAAAAAAID6q0F2AAAAAAAAAAAAFJpLLrkkjjjiiOjcuXN2CovRsmXLGDhwYAwbNiw7ZYl16dIltt9+++wMFpg3b14MHTo0OwOApbT77rtnJ1BDxowZE9tuu23MmDEjO4WIeP7552OnnXaKUaNGxRprrJGdwxJo3rx5HHXUUXHJJZdkpwAUrZYtW/r9YoJmzZplJ0C9s+OOO8Zhhx0W2267bayyyirZOfyAVq1axb777hv77rtvfPjhhzFq1Kj43e9+F+PGjctOgzrL92O1q6KiIjthmW2yySYxZMiQ2HHHHaNRo0bZOfVeRUVFHHTQQbHffvvFI488EiNGjIgxY8ZkZwEAAAAAAAAAUIBKswMAAAAAAAAAAKAQXXTRRdkJVNOhhx4apaX176VUAwcOdOBTHXL//ffHCy+8kJ0BwFI48MADDYoUCKM9ddMbb7wRu+66a3z00UfZKSyh3XbbLTsBAIA6qqKiIoYPHx7jxo2LP//5z7Hvvvsa7alH2rdvH8ccc0yMHTs2/va3v0X//v3r5fMkAHVFp06dYuTIkfG3v/0tdtttN8/h1rCGDRvGbrvtFi+88EL8+c9/jp49e2YnAQAAAAAAAABQYLyKEgAAAAAAAAAAloObbropXnnllewMqqF9+/Zx/PHHZ2cskXbt2sXuu++encECX375ZQwaNCg7A4Cl1KdPn+wEasC4ceNit912M9pTR/3/4z0ff/xxdgpLYLPNNouWLVtmZwAAUIdsscUWceedd8aHH34YQ4cOjc6dO2cnsQwaNGgQW2yxRVxxxRXx4YcfxpVXXhkdOnTIzgKoN8rLy+Oqq66KsWPHxt577x0NGzbMTipoDRo0iB133DGeeuqpuPfeez1mAQAAAAAAAABQYxpkBwAAAAAAAAAAQKEaMWJEPPDAA1FSUpKdwmIcccQRcemll2ZnVNvQoUOjadOm2RkscNNNN8X777+fnQHAUqioqIitt946O4NlNGHChNhtt91i0qRJ2SkswhtvvBH77rtv/OlPf4oWLVpk51ANjRs3jiOPPDLOPffc7BQAAJIdeOCBcfTRR8cWW2wRZWVl2TksB23bto1jjjkmfvnLX8Zjjz0Wv/3tb+O5557LzgKos/r16xeDBw+O1VdfPTul6JSVlcWee+4ZvXv3jhtuuCEGDBgQlZWV2VkUqLXWWivat2+fnbHESktLsxOK0lZbbZWdUGs++eSTePfdd7MzAAAAAAAAAGqM4R4AAAAAAAAAAFhOHnrooXjqqadim222yU5hMTbYYIM46KCD4tZbb81OWazy8vLYZ599sjNYYNKkSTFo0KDsDACW0nHHHWcMr56bMmVK7L333jFhwoTsFKrhxRdfjIMOOihGjhwZK664YnYO1bDddtsZ7gEAKGL9+/ePo48+Orp06ZKdQi1p3Lhx7L777vHzn/88Xnjhhbj88svjnnvuyc4CqDO6d+8el156afTs2TM7peiVl5fHySefHL/4xS9ixIgR8fvf/z47iQJ06qmnxq9+9avsDOqJp59+Ojuh1tx2221x8MEHZ2cAAAAAAAAA1JjS7AAAAAAAAAAAAChkw4cPj8rKyuwMqqF///7ZCdUydOjQqKioyM5ggSuuuCJmzZqVnQHAUtpjjz2yE1gGc+bMiaOOOirGjh2bncISeOyxx+LYY4+NefPmZadQDZtuuqmfPwAAitBJJ50U77zzTlxxxRVGe4pUaWlp9OzZM0aOHBkvvfRSHHDAAdlJAOnOOuusePrpp4321DFrrrlmXH/99fHII49Ehw4dsnMAAAAAAAAAAKiHDPcAAAAAAAAAAMBy9Nxzz8XDDz+cnUE1bLrpprHTTjtlZyxSWVlZHHjggdkZLPDWW2/Feeedl50BwFLaeOONY6ONNsrOYBmceeaZ8eCDD2ZnsBRuueUW30fVE02aNIlDDz00OwMAgFpywgknxFtvvRUXX3xxdOzYMTuHOmLTTTeNW2+9NV5++eXYa6+9snMAal23bt3ipZdeiiFDhkTz5s2zc/gBO+ywQ7zyyitx/PHHZ6cAAAAAAAAAAFDPGO4BAAAAAAAAAIDlbMiQITF37tzsDBajpKQkTjrppOyMRRo4cGC0adMmO4MFzj333OwEAJbB4YcfHiUlJdkZLKWbb745LrzwwuwMlsGZZ54Zt99+e3YG1VDXB04BAFh2BxxwQPzzn/+MSy65JNZZZ53sHOqoTTbZJO6+++549tlno3fv3tk5ALXiuOOOi6eeeio23XTT7BSqYeWVV45LL700Ro0aFS1btszOAQAAAAAAAACgnjDcAwAAAAAAAAAAy9m4cePinnvuyc6gGnr16hWbbbZZdsYPOvzww7MTWOCFF16IW265JTsDgGWwww47ZCewlF588cU44ogjsjOoAYccckiMHTs2O4PF2GSTTaK01NtPAAAKUa9eveK5556LW2+9NX70ox9l51APlJSURM+ePePRRx+N++67L9Zdd93sJIDlonHjxjFy5Mi47LLLoqKiIjuHJbTzzjvHmDFj4uc//3l2CgAAAAAAAAAA9YB3TgEAAAAAAAAAQC0YOHBgfPnll9kZLEZZWVmcdtpp2Rnf67jjjou11147O4OIqKysjKFDh2ZnALAMevXqFeuss052Bkth8uTJceCBB0ZVVVV2CjWgqqoqDjrooPjss8+yU1iEVVZZJX7xi19kZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aM9(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aM9(8,
					"googleplay", 3,
					"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"
					), aM9(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aM9(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aM9(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aM9(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aM9(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aM9(14, "bestPlayer", 5,
					"iVBORw0KGgoAAAANSUhEUgAAAHcAAABkCAMAAACLpV+NAAADAFBMVEUAAAAAAi8EBE8ZBQgUBwgbBwIQA24IBXsTBGIgCAYZDAUkCQonCAsdDAcSEAciDQsrCwgZDxwQESwnDQcYEwMvCxcfEgUxDAtOAzEbFwtPAzlpAAJlABVoAAtcADhfADBhACpjACMhEkUyEgtcAUAuEyRaBUYeHQkuFS1NC0EuGRcaF4MpFHRVDisyGDwgHnAlJg8aIIEoHmY9HFlmFhBgGB1ZGU0sLRI1KTYxLR8rJ4Q2LCxJJUg0Kl5QJVEzNBhYJys3L0pUJk1GK0dKLTAfM48tNGS+EANJLlVXMB86Ohk0NHssN4q8HQBWOiVNPSNDQyFLQC9kNGVRPGJMP1VlN15cO1thOl4+RV89RHhtN21ERldWQF1KSSFPRUI5TiwAYDQCXzq8KQ5KRWlBRYtGSzQ3UTZNRn8wTZkjWjJjR1jBLisZYEdSUSggXzw9T5A8VGZWTGgAbD4AbTMHakNkTFMtXz5aTmN+QX1FUodPUmQ+XDRLU3RdUz9PVGwHcDC5PBdbWCsAdUVGX3EAezkqbF9iYTJEYaRTZzlZYHhXYIe3TBq3SypsYEpeYXJYYn9QY5eRUJAAhTlzW4kAigpoaDJLa4G/TT6LWIR0Y1peamCdUp2FXngAkQ+AZGnCUk1yaWq0WyFYcH5nb1QBkyFibYVucDm0WzI8fHp0cEQAlT9XcqRQc7JicZJrcH8CmDJVd41+b1rFXFh3dzwCniKnYKIwkDGxaS2xajt1c8UApjIApT5xe5tff65/f0FNiZGccYx0ecOQfEFqgKFjhJR0gpNFmEiteT5ygcN+g4GIhFVgiqOPgWSHhkmVf3GAh2yJiENwhsCkgUORhVxikYR5ioZrkXeigIZXm17Id3FdlaVtj76Qjkq9g2Vslrt4l6JqoWhnm7tjnbNDr1uYlk+Fl6yKlceenFGWlM9ls3N6rHynpVeNp8SJrbqPtJexr1umsJCorNTYqKWgzqbVwbG3y9i30LnJyuPlzMrG29Dq5evW7tji6ujk+Or79vf///99szH1AAAb+0lEQVRo3oWaDVwUZf7A9+RFXtwFj01dRF4SGAiU0ZRRQDZBLhs4G0hRkCUQUrRmCRIFQu5WvSEoF/Bcg0M5zmQKlRVvei8nCqwsl7a8ope5q7v/XnvnnnqZqanp//fMzL4h/f8/ceEDs/Pd3/vveeZR+Pj4iv9k8fOWwEklWBT5h7Cw4BBZ4DfO97luoJR/8PX19Qvy9UOMoKAgXwX6wVf88vHz4Eq3CPx5bkJHR1Nc8LQwkGARHCxzpUs874JEvLVIELk+Ch8PQX/xUNNvEqCTm9By7NjRNokbJqofIv/RgwvflU6s8wW9TuT6+Exi3eAQt2mRdYPRz3ENLS0nWzoqQt3c4Du4gYEhgX53iMz1Rfb189L3TiWDJ8i0oqqqk39vaelYHhZ2j4vr9S50l5DASbiI4QNcX8kGfi7vTh5FXrKsKqf6ww8/rKxuiLvnHlnhsOCJbwyZTF0n10NR6afA/5+bUJmT9+Ho6OhgbnWRk4te7sBOyvWT9HW7VeZ7vXFSbm5O8uDo0NDQaENudcU9YZKTwySFXXQI8J/Hgr6+E9PWFU8h7iR1+nXatOBpwcty/NuGDoEMDVXmVi8JBZGjK9DtZzG8Pe6qnMD1dcVx4CRY9GYRKEGnTQudNm1+XlIlYHft2rV/6FRK5aY4ERwa6v540ocN8agigUploCfWT+GRQPAnV7EQ89EloaESEwDTEvKSUvqB2tjYaNw11Lagsgj9OtTJDXN9Vo/qhRJZ6ZlJPp5cz2rhhQ0W7yzdflpukn97v7Gxcf3q9Y2Nuw61pVU+FCqZOli0dpho7juiLNCtsI8rnifJoOA7uJIsW+DfANjVJdnZ2SXbm1tP5aZVLpfAYBdnEQnzyqoQb65nHv08d5oHd2bo/DT/3P7WxtVZqeHhiVnZNc39/Sm5lU4Xy2p7J1WInBeeDvZTuHJZBod4c5Flpzm5M2cmpE1N6e9vLMmKn5VeOis2NQuBk/M2ue0RKpvbg+rkehhajCs32V2PZXCo28IzkSxMSgbnAnaefufOrSsiU9fWtJqbkisr3NzgMNHkro8/CRdoCle3cHJD3NkT7KGGiL03CTkXsFEbd9bW7tTPk8BFyZXZoV4SHOy22SRc5N87SkbIZOEErp05c37yVHBuzZr4yPyttUg2RkemFgJ4YZqUxW5be4oT7FU3JjR775DyVveuZP+U9tbta+Mj79u6tRxk69b8qNjUkhpzX0DKsrvgChdX7hTSdxc30Is7ScudwJ0pyRT/gKbWmsLUyGg9YDdv3gzk+xC42bzOP2XlTAk8VyqbwcGu1hwSPDGg/Zzx7E1GyDAI42APXe+6617/gKLWmhLAbtxavvmpp9inniwv3xYTFZ9Z0my8OyBl/vz5cXfNnDvXFV2h7llkIhbieZJe70ogqI13Jdx778KFKcn+/v4BywCbFRuVv7V820cD77zDsU/qyx+JiYzPAvD2Kf7JSWlpebm5y5bNTxBNFeYqI4F3csWyNZmd4xKWL1uYkpaWlpQ0FUGn3H1383aEvQ+0vHDlv5988sk7CLwKwJklNca+mpSAqVOnJi1Iy8mrzKusLEL8OM9BxG8yO7upwFuWm5snAaf6L9xU1GQ0gxhrwLexUTHbEPbGjcvvvYfA5frFYOrUwpKa1tb2tra2hk2bUtKSkgGeV1VVXd3Q0FCx3AMc+DP+DS5qaanKy1mQNDU5paiprc18ytzfD1+trTU1JZBAUTGPlOv/cuXGTz/9+J4M3rYoJio2PgvIgG7tBzG3t7c1NOTm5eXkVcHceazJiXXrPVHfX7VUVeXlVTa09Q+OnjrV346Irc3ALFmblRobGR2xqlz/u69//AnkshO8cVFEdGRsfOqawhJg1zS3SngYSIZGjh49evLYsYQ7+pJiQjNqqDp2/vzXMDsd2r9/PxBFZCEwU+NjQdk5q/T63711/h/nbyLwqxJYv+2BOTHRUQidmrVmrUhvbm7dtX//0BBMf/9sObZ8Uq6nvm1VeedhZEPzBPRYSc3UeGBGRkXHzFlE6R974a0v//63v/2ANP7rKwjMPbW5HMgRCB0ZGxuP6IUl26E570Lgrztajio95zXR0IoJYdXYktPxtYiFxl6SIaoZGQXMmIjFqx4GZV946x+A/erbH27f/unyn1555T0xrIH8yKoHFsfEABzRw7OyYSxA4NHTVS3tUtHy7IcKH+/0DRnMSfp6FLCPr1+dnRiOkPPuW5X/yMZtUBdFZQH71Vcff/zdzdu3L/8JgZHKQNajyqnftvGR/PwV982LTMxAYOA2VB9Nv7NMKySqnxpTS/D11VOLRkV1sxNnrQCeXqrFAAVdQVkJ++1V4F57XgYj8lNPyuytW2t3bt04KxE0Bm5/Xkuru0y7piyJ64dpSQITvRDcv2AqMvP61Rnh6Tuh24lIYAL0yy9FGyPsD4C9dfn5p592kQHNPvUUYpdBi9xZGp6BuKO5VR3pTq4Sw3EsyMUNDMS0tIEmMT9UqpDCnyJu1qxtgC2DvJGZoCtSFrDvX70Ncu3Sb38rgV9BKYXYSO/NInjjrKzVMPaZ06qandOeEid1lBZzcgMDg3AdTbAGLSaOvf1J/sjOq7MigVtWhswrM/8mUT9+/7vrCPvFsxs2ANhFltV+anNZWe3O/Mis1c27DuXlIHXF4dYPIw0GmiZULq6aoE0Yw9HEDGSP0oapC0cPIW4+cMt/98KX/xCZLur7onNvX3p0A4ik8p+ef+XVV1+VyAPP6ctq9fNiM2paD7UuqGoU2zF4UKM1cCTFaDVObhBG0DyF8yZKVDjYnBZgNBu3QwvYVlumf0GMJcSUqW+/fxWpe/2PG379axn89NPPg4jkT9754DPg5keFFza3nk4BdWVsEEFzrMLEkKKHgavCtST6lcFi0GpQ6y1tm7rstLEROu2KreV6OWFFqIh9G6UQ8u6G+0WwRH5GIr/33jsfAXdbTCSMA4faF1Q3hsodCSNNVoLgGVIMLeBiJG1gWCuG8SyFK2EZFAoKVxwChcUO/7u35IxFUKAC9/otCOZrf9xwvwv826efeeYZkfvJfy98Vl4OY0hWDaib1ubswGrCwJtANwaFllKp8FMRNGXgOEGnoEFhDHHT26ZOOWXcXhgftbi8/DEn930ZC2DEvXQ/Ehf4GQRG3CsXtpVvFNU1tyZVNcprlxkYxVpxBc+bTDStVQcq/NRag0HNWQWW0rKsDp8B3FBjXoDxtBEMjbreC186uW/LgrLIi7vBzT3738/0+sXRsZmgbnJa2z3yuANBZaEJ3MbzBg24OFDhoyIMnJaw2gUtR4L1MTSiIIXNMDnGRi3WI0ODfz24r/0LwNf/fP8d4OfBvcjMVAREVY25IrmyUZ4vZ+A6liUYg93GqWiIX6XCB5IXgoqyOyhBZxJzCTQ25gZUmEWF82VDu7mvvYYUvvXFholc8O97l8HM+kXIzMbTAQva5spcjGR4kqetDiuO8ZBKSjGuGCupoi9yJoHgTGAD0Piedv8pYipFL9I7De3mvgYOvnXtWZn7axcXsDeufKZ/cA7MmDWnfzW1cr08Xc6AHGIou9Zh1ypMPE0EoXgOwiGLtLTJTjloGhRWI4UbcwOWn4ZUioIBAxnam/sv4N6SDb1hwx///CwKrOf/+tcffwJu+eyIqMRCY19AUtvcuSIYqcvhAm+6SJFaK6imDFQEBkoK8zRL2gScRcUDXdrqP6VPNPQivcz9+H0n9rXXrgL30qMy9tplKJnPPnv5MgwhNy5s2zgbmblvmX/l+pkz5zrVpemLOqvBpEPqqgKVwA2cgTxM2SkV6zBQHBQPNKuXFk35pRlSOGb2RpeD3dzXroOhvwDwhi8uId2vXbt07TZMIN9/f07/CHAza2oCklvnStwwnDKxmGDHaJNVa0GeDAxUhKD2hLxutROkzYKbTBQehlYIxoBfrIaIjp7zsORgby6y9KU/3n//o9du3XYKaPv9vz/f/PDsmNjMinsXNpTCXZCd1agwM3ZOQV+kTJyOUIdI3BlQsVgT6bBoBiyMVlQY3rGi4hfztxfGRv0M9zpK4Ucf/cKNvQ3Y/zmyt0zm5jbPFblzwyCHGNwiUKSD16JMDZL0VeJaHW3iSdY2cOLE2aUMFI974A133ft/cd+G3nDr0rOXAH/zypUrP928efOnG+f+/cYbTu7K3E0rkNnmhqKgIvacPZtvsWshUdGAAfU5JESjpWmW5VnCcqa7d2zPUg4+0tyZc+/1n9It2fmxSbivQZG+haiAPXfh3QtXfvzxyveAlbiRqQ/15VZXiCtECCqWXnpmrPuMwJAWljGAoUUutGNcZxUEcs9Y3ZLhsXyUSzNmzkzxXz5WkxUbM3vbYy94xpXT0GLvv33r5pXP392372Ukx48D98gTeuAmPmQ0VjYsAW4YRjGc5sR43dKxD3DWynMUTcHIoUANimFUlGDnl46NL9kyPoZBimOhdycF9JnFPHIXShH77Xffvv2vf0GtlDx75ZvP9yE5fPi4zC17ICIqfmXN6cqGCkldjiodO6CqG9tD2WxWLc7ocNQHxQ5lUJCCgz4xvsX3wHgphRROgR7cjOrGgx5149vvvvvu6vXr169evXpdDqgL7+6TuYcl7u6yh+dEx6ZWmM3VHQkzIYcGBjRjw0vSh8c0FgePqVCF8JPqFWWyaHWURVg6NuybPjyePjBALc8JOG2uyYqPivCok+9fv+6M3VvSy80fz+3b56UvOLj8AWToptObOipC0XBDdI9vUWwZ7zY4TLiCgbqhluZJGK84TmulGQrcgC6AXCpKKjK3OvuCHFbvf4fC6OZNJxYFshuLuJKhyzdGoAKNFF4CJcmQPj7sq0LqGhhGZ4WBI0jm4iRY2uBgNOljB3yWHBhPZ/bk+febawqRurJ7v/32u6ti0ly48OPNH69AAN+8ee7c5/vu5O5GCsemgsJFLU2QQ1jveLovaENoeQHnWTGcEVeNEySUTZJzcKre4SVr0sd7lzal5Z5uLcmMjc4X+/5/zv/nhx/kpHn35W+++fzld18+9825l/e5xcV9Y2+tuOuxUlR4B0eXjtdlxw2PB2kFB+SvQZ6vYHiG+cpg4FjcahuoG16zprh0fHVeUpu5GZl5G1L3/A8/iKPczZ+ufPPuvsnk4EE398ju8vJV0fGpoofNA9PHexPqs4e3LBUcjI6H8QoKB9IXygb0eygcBtJyZryrM6Ezu/dADtofg6haVS5y0aITyuCV7899fnhy7EFXXImGhnlSVji/bjy9M6O+q/eMjQMrM4xJLBwKSF8DiTFWEHLPmdI1PQX1nUuqk9r6ZXXRHCsudqH6vnv8+OGDByejHjzswQVDb82HyKpoP72ppWm8tKAz46WXesfOYiYLB/MVjlZECnGM1ym0rGCzLB3rVsUlJLz0+7xccyuKqlVbyx+Tud//+9z/HD98+MWDXuCD6N/Bgy++ePh1CSpzy/ViKpnNDR29CS+tySqIWzqWb7AJAqtVGaAOK5F/IX1pFUnxDq50vDeuuLizckHbITBzbLS+tgwtecHON1Dtff311w+/iMgH3ViR+iL85Q0PLiyQ8iMTV9aAwh1N4LqMOAhW0mbnSYUKzXBqNG+oCR1rpWleRwt09/iBhM7OvLT+/cjM+bAchGnjrfM3bkCLk8CvS2CRuG8S7JEje3eXlaEFUnhmRfMhc0dHZ09PwYrxsXRB0FEMxqJOCHMOLH41BKSRzgCfhlSOAbhyQdOh1sbCxFl6tAyF9eBfoEB8/+8jLrBT5YNe2CMge/fu3v0EwtbuTEfcXacbOn7fmQXtppSGuBUIhMWhASvQYl8C03Y7i6f3dhVXpfT3G2G5P28rWoeWwUL/M5DPdx85clwky2AvKlJz9xO16PpyaeEN3OXrdg31d3RkZHeN71AQnEPATTJWKa73gzAtAutsNsuO3q5NOQ1D+8VtBj1a75ch0YOU1f5m797j3mAZC9AnEFCSWoTVz0sE7uP7TyGFu3o1BpuDx8WyoUbbCiIXI7QUTBzQGiwneruqFgwO7XoccdNBYXHFX77tyYdBNpc9sfsIUtkJdmLBo5sppzwiyrxZiRnAFRXu6eo9YbGxCEsRmNq5zwDaQsVmeStNfTBWWlQF6gJ3eUb4rHn3zYuJiIiYAzIbZNGDm8t+I6osgUXsG8f3PlH28KLZs+dERMSgjaToqKioyFnhCAvc/aMNR9uy6k5YBnCWNxloSmwLUh/U0QxnsQo2O0Od6a3OGxG5q5dnJIbPQptXSKLhjhFzZi96uOyJvUck8IuStgj74OzZ0rZZZCzaOItPTEzMzEZYxB08enRJ95kBnBcsPMeZwNLyuhsWohoV9CTWaqPzzVUNo4j7+Pr1q7MzsuAOcJ/w8Fi4ZxQiP7C5zA2Wsatmz4mRtglTM5GsXJldsnqdhN0/NNpx8s2xE1qbw27lTDRJomWKs+/DGKtSaGHWm95SPfIhcEUwoFeXICksLMzKSg1HZBEsRpcob4jaRkRHxqPNQbQtinZGRXkcPblEO4UjJ0f2+FIMhSsUCkwH5Vkl+RfSiOGsPEPQVvtHxzo+/HBoaD+QAd3Y3Ii+QLZvX11SmBUeGR0x+8GyWhcYhdRmWA9FxmeUbK8xGtFGdSu8Hjpkhv+ffjo6+vXXX58/9nEpw1tYrYZmeYhoTI4rJTR+8LDVyurIwWMjcOWnkpxG0tdn7Dv90bq7715SV5KRGBsVMftJ8LGYyGLvgTFOfJqzfWX2+sZGuLqpubmvuampqehXTe0NDR0dR08eO/mBjaO0JquVY2jXvoq4gQXrQc5iswtvHjvW0lBdmZubsjAFvuAlIMAfSUDywsK67StTAfxAWdlvjsiluKzsSRG7fSx7ukLxiylT0OVTRUlKWlBVXV2NNr4H8wnGIojuJaQNO4mrRFHFQ0Q7PjoJ4Kq8nJwFSUnym3Ny8vIqK6urG4oqKipWIo2p8jIoXggL1QKGuPjCmr4+hWJ9Y3N7e/sgyJuynDp16p9InrNdvGi3WXkTLW/XufTVURiG4fD/1H/+809ZRkAGIQs6OtoaAPqrhramRgCDj/UA3ntExD4MM1xWjbFm4S/XGftEMR84cKCrq7Tzpa7h3rEzZ/PT05cyJhCGMdAGCg/y2BeFkDYwENQmhtb9oe8PIM+d6O7uPrAlfcmSJdn19cUFmRkZCcs62oyNFZnxkTEPQA1+QuoAi6PR1o1x05RfNiYkZGRkFhQX109PyKyfDiPG2NgZi4BWARDIKjVURchYT64U0qzV7rgI4rDo4DIMW7pny9rM+p6Mzp76jIL6YiAXDfb3NT2UGh8Vs7FcLNtltY/ERIYXNhuNuVOas+dnZBYXFxR09hRn1mcmZB/o1qhUQKR5we5wOLzs7OPcb9cQJG2ikR00JMQdXGizDNStrQdmfUbC9PpOUKSgYHCw3yiCF+slrH4xsnKzsS1gWU1BJlzRU6xIKO6Z39NTv6ZugOMtUJFhsWniBZvVwjE6rayu+3mKGkwNRZ0kcEJnMLE81LSBHXVr6uOmZ9R3ZvRkTi8Ac1eMDJqbUWxF56OGUVubL1m5PTegaXp9fX2morgnobMgIS4DsDs40POiww6zjQKJmtHJweznfi6JugO0JFSkQQSOVKhJnttTV5hdD3bLAENn9HTOn942MtjXhFw8bxvqdjBFhWfXtBo3JS8rUGT19CQUZxSDXzrXTF9bt2NgANNADUaBw3E8x0JllrGynaVHDKgJQ1NCvhBMOoMVLM0NDPSi2EzwXfNSZ0JPZnFG/cib7WBpAK+AHlu7AoaZ1WDltOTf12dmFvfEdXZmK7I6u7rW1p0YEByoWHB2CBm7wKPcdRrZTzxH4bI0xBaY16TDFDoWohDHcZNl4MSJ7t70A8PDXXGZmUAWLQ3gxFkrNm5cMSscPQs1b0oreqgYvFqwpGt4eEv6gd7u7gGLFqcZi01gSdIE33gWQkft+TzU9dwZBnhUsxXoOytYaYzmDDgncPndY2NjdcNb4jp7sqYXDyJLrwNw+KxZgM1e12puy035/ZrpBT31ii3DdWPj3XV7LBZGx4FbGVgNSd0AklRHBE3gSmjggaVNEA2QSxyhwEidGtZMOP7B2bNLl471FnbVw6R0YGSwv6l53cqMRLHJrmtubd2Ut+lAV1xWfdeW3jHVjrNnBxS0zU6pCBLDWLiVjWcoAldpxfWnh52dXBVENAoBiyAwuIIw2S4ynMNAYZzDosWYsye667YUggnNYOnW5nXLV86fD60dJsa2ylxjd++WtVvqek+cJVW0YKc0WquDtNjgNiqTHSLaCu6T+p/3uRHJ1NCWKAqSiNIQBt7muGhCi0Qr5bBqeYoXBvIHdnSfGNDsAUsbd61btxxk3bpdZuOm3JodS890QwDvsAioGDoE0kqabKT9op3TqVU0yzIGA61zlmaP81c+zpDGIHtpysRbLIKdwSlKcOgEgeDthM1GEZDRFoua/OjNkf5Dux5fJw0UoG7lRxghfDAwwCkYO69z0LSD4R0MaSAEuyBYYKIw6LQEgWv8JuPK7CBpyIOiaVBgJpg9DVZIBZ5ysFqtTSDhE2Dc6ZHBJjQJgez61Lwpt4/BKAdjEKwqXLDjNhtN27V2B69VENDSQVDPVQcF+XmdC/L19T5NGIQRJEkZOIMCbCsIWoZgrQJjEiiBdPBqg0PLUbZTI4MNInjXofa2yiaB4KiLWsxmIy2Ug+QFK8yJjN0mGBQEz9I69EAhaMIJOzfX9VxUqcZwrUGnYaBSCoyKgFIjUCbSatc6dBxpIx2U9bmRkTZxEtr/aX9D5UeswUYLUHPspAPca7LyFgOutlp5K4sT0Alcz+a8zgX5+vp6HVBFwzxUEJqBJTLLqQmeN7FWDGftoJXOYTIQDp4iW0cG22EG27+/v62yiCbsNoq22Amestt0hM5qQk6irKyJ40hah6uDvE6aSecHEdd34plNJQbrBx1FsyTEkoE2sQraarHiOG+3agi7nVQPQEyjx+iftjVUlioMDquKsNkNBAUJg+E8Q5sAzKD2ZhCj2OOcio98VlPk+vp6c0OUGhz1JRpnWQNJmXQ4z7I8ToLpKEywmgi2FCw9OjT6ZkdlkwnjBF7BQIqqdDwsCRQmaH2w6MEZSqvVoqes3lyfCVyPs1BoTzpIjR6Soo6ppSGnaYMJA9OzsIA1wWpD2w4z0IcjRzuq88VBRQXthqNIFiosWIogYHyhocdrNOpAr7O5kr5Bvr4/x4WLUWTD5wU+pLQWPVSjKZrRoR0ZLTZ95G8njx49Wl2Bag3NwD9AGdBqgNaRmAbXUiiKvQ+M+MingRFQ4cLKB2b8lDIWFTBMg9aqUExwiHE0E2gpHUyimCYkeN1XX311sqMhDj1Lht9ShIjCcYJApoUKhAHWb8I5M5Hr6+vU1/NQrtLjXKvr6EOQX6BSg0HyayAp1ErxMfHgV1993CEeRUFoXDMDxlGNUjlDHeQ+JCIenXQdvRYxIlXi+ngGtNLjOO0kR66VSvGhOOBCmgfbl8hnHpXKkGB0MmOCTDj8LYayB9cJFrFKj0PLgT8n6BT0xHNEIYE/g/WgBgFW4v4vtt0gxYBWEv8AAAAASUVORK5CYII="
					), aM9(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aM9(16, "apple", 3,
					"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"
					), aM9(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aM9(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aM9(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aM9(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aM9(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aM9(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					), aM9(23, "clock", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAZGhkoKic1NzRYWleAgoCjpaIA/wA4/zvJzMl5/3nk5+Sq/6rI/8fm/+b///8vfxrjAAAC1UlEQVRIx4WVMYwSQRSGh+O4hFBIe901VjZUlxgb2gvF0VhcLLhGGwrKI4TDksYoiUpCLCgxxgjqxeSyxZZngVIehYYSYzRcjIfurfB882be7Oyy6CvYYfbbN/9782aeOPqPifDfF8PPw+frgZczkLZ8Hw9UPwLbt2YMUJ1AYH9igBHO++27t+89k8TXFeAVzrbzQtr1Lo7HEaCOc0+EtmQZlfZCgBTwWL5Lne7g70YF4CoEPAQ4oY8zcCgfmy5AzwKqM/CyBFyDFj232YVgB4ciBIiKdqGAGVyKCLAF8MUAGELRANoVulgYoA9zjjDt53kEcKYBlNhiQGR5kHBpDQkcgy9ibJ/WELTCzzgAZTYVMDPCAtvDKRfOCaiBn42+T7kouwS/CTgOYjBWkYnJyLJA4BG8jr5PU2a3YEnAiCWkHJ2uZJecbshsC6kxz3HpaArgE9rFVAmpUTsugZ/Te32ilUwRqIOngRsAbxTo5bTLXwg0zE7il55KkM58BmtCAiaPJRJfMWGnMU6BUV6Y9ABc5raDvVdAHwZWfgBYIS220EDZOeX9Aa3wpuMUDbAJXJPyyLR4dBECigbY4dEgWOKg0xYGUFu72+nkA8BW6dl7tqAwfwRTGQhi4DDvm0zKSi2/y9m4yuRcrLF9LCl7s2LqakrbrQNbtS5WLRYMxBQ12QZQwRxN7DgjB4Nqsm+HYVtGHi0EGutUluQdIkKHP2wuBqGP3mCNhDMFjOJTdUueGwIa1hrJvJWFKw3UrB0q+NYK53wFTfSJoewWTQzLJgO4xtsokNIXJQG4BrswQEndYfqe7BsVDKCChXXT1k3VVtRRT2BxTu3LfMTHoaDSfgeURAOgCphLIkHYHqgYrYYiG47HSTqwupawW5r/VH6/K5sWN5ygZ9WpZ/qO41LbG692vQdWVwze241V+aDWO45vzTXder/31jb32vDDp2HvX91/1f4C6yMGMx9Ja7MAAAAASUVORK5CYII="
					), aM9(24, "userIcon", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAwAODg4sLyw2ODVCREFgYl+Bg4CkpqMA/wDMz8t5/3il/6Tk5+TD/8Th/+P///8NWuTPAAACa0lEQVRIx92Vz2sTQRTHR6GI4GU0SQkEqncvXoSAl9wFm5MXIe1fkCpIEYRcQ0L8ASp42mvwkmtP1taKCIW5loLstVjq4o/YrN3k68y8t7OzWyTise8S3pvPzPu+H2xEd46JswW8ycd7wzzQj4B97zgEDn2gp8+BPQeExj3xgE0TwCw9f2JdbDigD7y6dlfhgIEIH5s3A3rCAiN8kFLWMe32Ph/tdwc41m4FcECUNHREBuiblw9HuG/cthVlgB7GJiDvgC2x7iImDAzw3Eaq+uzTawX8su4VK0JY0at8BS91boXv1pVBCjxF0wZqdLVuNRpgWgA69NJlhUYeSFOomG62qQqpTvIiK/gpOdWW+SnhNwN9KrPKxWix38ifZI264QMVAtp2GIJmtZMHTDVlNXOtHiB5IMtBlgIvZKljJfC49fx3dQd/SNdR4w4d0AtpBtygFo/kSzfTgF1t4IYFSKznRA6AhyT7PUmwDasEblih1kS5k6bt+A4Vo8wTwvSJc5eBeLX0GNxpec/UIczCcXmddGHiBl+YWSCiBZK3kWq1K2pvDDWQLlxJIV4R2hYC0mKmdqCBdOFuIVkW1hZUKlOLEG5dAjwTbHXwZqipBjZjHkCcnovzilcomGkgpCKvY9sBokUro1ungWjMipcz4AK3poWh6NJ26IXMznUOKn0pA8oYe4Do0GJ7wCLe+UCL2l3LgCrWfOASNccDalgR5zLg4ilgyS/ClLF1Crg6DxB/BY7XtXWKAEcNwFYA2P4FePvVWFQEZjZ85L7VoyIwKXzMR1j37ZH7qGZAwSbzgOILgyKwcTb/Fv8b+ANlD8k4eGaP9QAAAABJRU5ErkJggg=="
					), aM9(25, "battleRoyale", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAmMCMAcQBbXVoArAB8fnuHioaQko+cnpunqqYA/gC2uLXAwr/N0M3c39v///9qRmqPAAADUElEQVRIx7WVT0gUURjAvzezYtnlgVlZBA/xNKcR6R/rxrjsaU+Kl4SUvHQ0oVMEUUgdLfEY5jrsaa5L0MUKpEN0EBFPQnsQXcVwToGL7rzen++9mV2KLvVO8775ve99/x9Ef1nwX4HSwKAEAoCL5d/9Fj+gLADopeAMdiLVIoB7c84TAFn+MA7gtBNFBuTG0/izAlb40ashAJIi1QGA3iffOX8jAZjlPPkxry7ExcC9t8bFGpMAK8jP5OsEzeH/EPrWYiX0JRD0c7WO543LgftRi5pUelHpjvX2AFVUIa8FfA9kHMIuBJIZRwEVsoDArqMAUrcHPGXiZTzB13MSqMIK7lu+o0ycxj1fVEDE7hrBuvSUuUZjMtajgesGaPo9QuGI2Z75ZQUEF4wkeUGiivvJ8qCBSreR8H3q0Sux3Tm6HiquFbXGgMxafBeBkGzw1Myuut1sIhDBIys79Qv2O3meM8BIKlyyJvJD30MgcN9Z6WTKzqj8g4rdbWNm85kFtnXuVIqZNf29dehsSJcY6ASj7a1CagzkMn1RxBLY3UgtdNoah2k78xkLvTYghFvi9p8L1kLIdbQeI1OcP4xtvGyfGKAKffWT6dRCr715S6VoFfJLJg0H1BHNU06BUPSvuMREvDUuFDBwUoC5QhQQU5tfhkA43quv0aGeOvAdWylHhX06SN1vOhI6WfWkBgRNTF7GLR+EUzWbLHZNFqiplIaoji0QvdH0DRDI3trGNLRkwk+HF3gGCGWvJahgXaYjeWu6RHtB+22WD20XtVIjo1FiCi2ZN76aTsV6GLGNYYoreUAyoTb9KGJIsOga1MsCOCNq4Iikqc8t8LK5mMLmdaKA3DcZz+QCg7RPr0ZVarVlc2EGgkgz3OFZFZBRIC8ur9oJpVVAqiCWp3KsL1N3GkAFp9K4RZATKllOVcghphXU5GhpUBmRhnZV6FNj0MUdiIw06TkVLjyjgfOoD4R5NRD4NmArnmigGy2qwqUdH6Bw5DtFreIkc4U0aJQMg8fcx7KmlYo9PWnJa+uSKPUQRFOg65t60kI+xqCoZmGqkKSKZE5P2sCd3DHNLqky5u+4RnswkmJ5na8icycoTlqhWb6gHSvEU39+eUul8r953H8BBeY6pZneQOEAAAAASUVORK5CYII="
					), aM9(26, "oneVsOne", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAACNwBHSUYAaQB+gH0AugCIioeSlZKanZkA3ACmqaUA/wC2uLXGycXa3Nn///+iBll7AAABfUlEQVRIx+2UPU7DUAyA3aZFCBWUCDF06wmga9WFG5CoYkA9BNyAK5CBKYfoEGWIsvQGcIOiDkxISAhRVEGN7ffTvrQRGwNKhhf5e1/0bMcJFL9cUAv/TkgB4MTdMEgJfYoaiSMYJEIOfI039y0SIYYJrnqOYBELud98LQlrxEIEHSwJawQcwHVJ2EDA9ewhRyNOa5D5kp5CIsTQfJCICwMvln2NRLhrTlAJp4ifjZDWhUFK6KAWDhC/wT9DnBvkClGLV7hFfNwSXiRJKh3PYUaLQUZY7HN0yQ9PpUEGaeEZJLri45/onCUYpMsEHfUPKT/K9B0sYiEDL1JRSN35OCLJs0hafZ/EKkrp/C9qw03XIvO6VZRRBSt6B72hRa6Q+xeIM2rWuEIouNmUBk/abiGUDs69okqIWyxM25UCl0GNHlYKGU2qHq3dQsHNXsoHUiGE1Ow3r9gSUhkzLo7vbQeJkMk0Gtx1kPo2R0EQDGTeg+A4cVD9l6uFPxZ+APLvRdqXArbWAAAAAElFTkSuQmCC"
					), aM9(27, "zombie", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAANwAwMi8AdwBWWFUAqgB+gH2Ji4iTlZIA1ACfop6rraoA/wC/wr/JzMn///+1mI6XAAACOElEQVRIx9WVv24TQRDGP3w2xAGcSIguhZ8gPskVUgqXVMQUFEguXEYUEEX0+A1iihRILvIGoaTCiSwXJ6VwSZcI0UXCkRU5UaLccjs7++92eYB81Xrv59nZ2W92cerpoP3umz8DZ5y11yH16j9AloL1YhQD5PfXf+f5xWcgGUWAFNWxIN10kITAV1TngpV3sFEGps53Ie6a6JWALo6Eo2uzCAMTbApPM4w8YFgRJTXrHoC1MnDJIcArHJWBnDeigO4TEaifWCBDKwSu1BoEnGAcAvfYMsCwKiLq1A2QNmLA98QA69sxYAENTMNNqnL3GJhAREVZSuBY5Xi7c8Y12lGbam5ogMq0BCpzdkPlC23jGQPDp/SzMGNDJQdQzH5dAw0VoAihSewXg0MNdCVwDp7PaUBTNQ3Is+7TfItD4bE88YSBVAJNml9TKajFLCDjwQdkaWY1NwcDXJoIA28X0DnYJcw2j1dMDp+KvjJJmkKdyLIMaH7ubtOUmg5rof8nduVo2z2siXRcrqcLM6oUrsmUIM/KD785gBB7wBvPMGy5Xx+0EX58LFnOMe3dOGbaCUzrL1ox22e0Jmmwokd/nMYprp997UPtzxskXvNyFksqprLNltv+b7FK0+dsO3GIl/4VlIL/x7HKVxD3xr0s55npiRAoNc3DBJYQs+eCavkwgal0nQXy4MXJ5FVogVv9nthHTfaGBa4QvHpp9acFLjpJAAzhqRYA9mGWetSLvN0HbaP38dc/qn80XpfaOx2MlAAAAABJRU5ErkJggg=="
					), aM9(28, "noFullSending", 9,
					"iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEX///8A/wD4+Pjp6ekl6yXExMSZmZkAwAAygzJZWVkgTCAXNBcQHxAIDggCBAIAAACV9pxNAAAC1ElEQVR42u2VzWsaQRTAh13Wu6cBU9q9VPC2p8Cm/8ReGkibkiWSQyGJ7ClQov4Peio0LiH00EIqEkJomkZ6EAmx9VSltenSi2LaklNcVo3T92bW1XwUL6WnzOmN7+eb970kPOGQW+AfAmt/U64JIMI2b9ZzBQB3lyrWTXp6PPuDA2kj5t4EpDOKK55okpXymm+EBsbWa2TVEk4ms3KeDVBDi4z1OPLM6Wp6axjmeyN6xj4IPWN9IOjZwFQcdwhMeer8fhlM9eIqmbbhj/mLkpR77hR8IFXZlXP1MK3GCZzohUV7be1xicx1BUDP4htmqBGOdFQEpEQheWKGvmhEObQQoEVPg+uDejJL+NFbxR15wwQpUQCAVhkoZkqSXYTf5kAO9cGnl8uLgNYBuMNqYFmyM8pHg8i2pxLlmxHz7rNzcMcFIFnT0O7MT02vEdn5bZCVrHxgRAfgkdJFYFE83KiBRunmDR0FEmsdAdAbA8qprHIw66aXjg29ife3GpFfWByQ0Z9ypG/E2m4ql1GqW3DfQ2CDA9KjDALUa5InbvqztGrjfe+1RiQOxJ8yAZzPb8m5tjZTWsB7IW8QKWdhmINDH4DshDCFlwHasNZ9gITaqpQziQC2/SewNwTQCYAs+vDKd3IMGD6R2BoPcwS0l30nE5DlWP1IE4kaAQ0I8+Q7hHnYgTL0O+pV4JcRa9oeJOoT6pxhsQIAU23oWQVS3YMAeLlbYwAvFq8KCDuidRbKIwDL7fHCExvLjYJsbwYANkzF4RaiDBsG21PvWwGALbeZ6sZVadruRdrq/C6R5pzWcC4Y86Bpob1xcFghnNyRbRAG/uiB4gLbHkyhvo6zZoYcxvaCDZOEwREj+W6frxMKg3NqBSuIwpvly7O/DqM3AmB4T69uhzem0hgCMP7b13YM/arpdQFQWCCF6wtmKlggE1fQvYcTltjENThxkd5+cf4P8Acm8L1xck3dqAAAAABJRU5ErkJggg=="
					)
		}
	}, this.get = function(eP) {
		return canvas[eP]
	}, this.x1 = function(name) {
		for (var aC = a4W.length - 1; 0 <= aC; aC--)
			if (a4W[aC] === name) return canvas[aC];
		return aM3
	}, this.vr = function() {
		return aM2 <= 0
	}, this.aM5 = function() {
		aM2 = 0, aM6()
	}
}

function ca() {
	var aMF = [
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
		aMG = [
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
	this.aMH = null, this.aMI = null, this.aMJ = null, this.aMK = null, this.aML = null, this.aMM = null, this.aMN = null, this.aMO = null, this.aMP = null, this.aMQ = null;

	function aMX(kI, oN) {
		for (var aMH = ad.aMH, aMI = ad.aMI, aMJ = ad.aMJ, aC = kI; aC < oN; aC++) aMH[aC] = bO.g7(64 * az.random(), az.value(100)) << 2, aMI[aC] = bO.g7(64 * az.random(), az.value(100)) << 2, aMJ[aC] = bO.g7(64 * az.random(), az.value(100)) << 2
	}

	function aMW(kI, oN) {
		for (var colorsData = aE.data.colorsData, aMH = ad.aMH, aMI = ad.aMI, aMJ = ad.aMJ, aC = kI; aC < oN; aC++) {
			var g8 = colorsData[aC];
			aMH[aC] = 4 * (g8 >> 12), aMI[aC] = 4 * (g8 >> 6 & 63), aMJ[aC] = 4 * (63 & g8)
		}
	}

	function aMo(fK, aMq) {
		aGb[fK] = 0, aGb[fK + 1] = 0, aGb[fK + 2] = aMq, aGb[fK + 3] = 0, aMr(fK)
	}

	function aMr(fK) {
		var fn;
		be.oV || (fn = ad.a2G(fK), fK = ad.a2H(fK), be.oV = fn >= bd.aGa[0] && fn <= bd.aGa[2] && fK >= bd.aGa[1] && fK <= bd.aGa[3])
	}
	this.fi = new Int32Array(4), this.aMU = new Int32Array(8), this.ds = function() {
		var fi = this.fi,
			fi = (fi[0] = -4 * bV.fr, fi[1] = 4, fi[2] = -fi[0], fi[3] = -fi[1], this.aMU);
		fi[0] = -4 * bV.fr - 4, fi[1] = -4 * bV.fr, fi[2] = -4 * bV.fr + 4, fi[3] = -4, fi[4] = 4, fi[5] = 4 * bV.fr - 4, fi[6] = 4 * bV.fr, fi[7] = 4 * bV.fr + 4
	}, this.dr = function() {
		if (this.aMH ? (this.aMH.fill(0), this.aMI.fill(0), this.aMJ.fill(0), this.aMK.fill(0), this.aML.fill(0), this.aMM.fill(0), this.aMN.fill(0), this.aMO.fill(0), this.aMP.fill(0), this.aMQ.fill(0), this.aCs.fill(0)) : (this.aMH =
				new Uint8Array(aE.fd), this.aMI = new Uint8Array(aE.fd), this.aMJ = new Uint8Array(aE.fd), this.aMK = new Uint8Array(aE.fd), this.aML = new Uint8Array(aE.fd), this.aMM = new Uint8Array(aE.fd), this.aMN = new Uint8Array(aE.fd),
				this.aMO = new Uint8Array(aE.fd), this.aMP = new Uint8Array(aE.fd), this.aMQ = new Uint8Array(aE.fd), this.aCs = new Uint8Array(aE.fd)), aE.ib)
			for (var aF7 = bj.aF7, aMH = ad.aMH, aMI = ad.aMI, aMJ = ad.aMJ, aC = aE.fd - 1; 0 <= aC; aC--) {
				var eq = aF7[aC],
					lx = bO.g7((aMG[eq][3] + 1) * az.random(), az.value(100));
				aMH[aC] = aMF[eq][0] + lx * aMG[eq][0], aMI[aC] = aMF[eq][1] + lx * aMG[eq][1], aMJ[aC] = aMF[eq][2] + lx * aMG[eq][2]
			} else 0 === aE.data.colorsType ? aE.data.selectableColor ? (aMW(0, aE.l2), aMX(aE.l2, aE.fd)) : aMX(0, aE.fd) : aMW(0, aE.fd);
		! function() {
			var aC, fj, aMH = ad.aMH,
				aMI = ad.aMI,
				aMJ = ad.aMJ;
			for (aC = aE.fd - 1; 0 <= aC; aC--) fj = bO.g7(aMH[aC] + aMI[aC] + aMJ[aC], 3), aMH[aC] += aMd(fj - aMH[aC], 2), aMI[aC] += aMd(fj - aMI[aC], 2), aMJ[aC] += aMd(fj - aMJ[aC], 2), aMH[aC] -= aMH[aC] % 4, aMI[aC] -= aMI[aC] % 4, aMJ[
				aC] -= aMJ[aC] % 4
		}(),
		function() {
			for (var fg = aE.fd, aMH = ad.aMH, aMI = ad.aMI, aMJ = ad.aMJ, aMK = ad.aMK, aC = 0; aC < fg; aC++) aMH[aC] += aC >> 7, aMI[aC] += aC >> 5 & 3, aMJ[aC] += aC >> 3 & 3, aMK[aC] = 7 & aC
		}(), this.aMa(),
			function() {
				for (var fg = aE.fd, aML = ad.aML, aMM = ad.aMM, aMN = ad.aMN, aMH = ad.aMH, aMI = ad.aMI, aMJ = ad.aMJ, aC = 0; aC < fg; aC++) {
					var eO = aMH[aC],
						vn = aMI[aC],
						g0 = aMJ[aC];
					60 <= eO + vn + g0 ? (aML[aC] = Math.max(eO - 40, 3 & eO), aMM[aC] = Math.max(vn - 40, 3 & vn), aMN[aC] = Math.max(g0 - 40, 3 & g0)) : (aML[aC] = eO + 40, aMM[aC] = vn + 40, aMN[aC] = g0 + 40)
				}
			}(),
			function() {
				for (var fg = aE.fd, aMO = ad.aMO, aMP = ad.aMP, aMQ = ad.aMQ, aMH = ad.aMH, aMI = ad.aMI, aMJ = ad.aMJ, aC = 0; aC < fg; aC++) {
					var eO = aMH[aC],
						vn = aMI[aC],
						g0 = aMJ[aC];
					688 <= eO + vn + g0 ? (aMO[aC] = eO - 88, aMP[aC] = vn - 88, aMQ[aC] = g0 - 88) : (aMO[aC] = Math.min(eO + 88, 252 + (3 & eO)), aMP[aC] = Math.min(vn + 88, 252 + (3 & vn)), aMQ[aC] = Math.min(g0 + 88, 252 + (3 & g0)))
				}
			}()
	}, this.aBk = function(player) {
		var h = bR.gF;
		return h[0] = this.aMH[player], h[1] = this.aMI[player], h[2] = this.aMJ[player], h
	}, this.aMa = function() {
		for (var aC = aE.fd - 1; 0 <= aC; aC--) this.aCs[aC] = this.aMH[aC] + this.aMI[aC] + this.aMJ[aC] < 280 ? 0 : 1
	}, this.a2G = function(fK) {
		return bO.g7(fK, 4) % bV.fr
	}, this.a2H = function(fK) {
		return bO.g7(fK, 4 * bV.fr)
	}, this.a1o = function(fn, fp) {
		return Math.floor(4 * (fp * bV.fr + fn))
	}, this.a24 = function(fK) {
		var fi = this.fi;
		return this.aMe(fK + fi[0]) || this.aMe(fK + fi[1]) || this.aMe(fK + fi[2]) || this.aMe(fK + fi[3])
	}, this.g4 = function(fK) {
		var fi = this.fi;
		return this.fl(fK + fi[0]) || this.fl(fK + fi[1]) || this.fl(fK + fi[2]) || this.fl(fK + fi[3])
	}, this.a22 = function(fK, player) {
		var fi = this.fi;
		return this.aMf(fK + fi[0], player) || this.aMf(fK + fi[1], player) || this.aMf(fK + fi[2], player) || this.aMf(fK + fi[3], player)
	}, this.aMg = function(aC, aMh, aMi, aMj) {
		this.aMH[aC] = aMh >> 16, this.aMI[aC] = aMh >> 8 & 255, this.aMJ[aC] = 255 & aMh, this.aML[aC] = aMi >> 16, this.aMM[aC] = aMi >> 8 & 255, this.aMN[aC] = 255 & aMi, this.aMO[aC] = aMj >> 16, this.aMP[aC] = aMj >> 8 & 255, this.aMQ[aC] =
			255 & aMj
	}, this.aMk = function(aC) {
		return [(this.aMH[aC] << 16) + (this.aMI[aC] << 8) + this.aMJ[aC], (this.aML[aC] << 16) + (this.aMM[aC] << 8) + this.aMN[aC], (this.aMO[aC] << 16) + (this.aMP[aC] << 8) + this.aMQ[aC]]
	}, this.hG = function(fK) {
		return 208 <= aGb[fK + 3]
	}, this.a2A = function(player, fK) {
		return this.hG(fK) && this.a2D(player, fK)
	}, this.a2D = function(player, fK) {
		return player === this.fY(fK)
	}, this.aMl = function(fK) {
		return 208 <= aGb[fK + 3] && aGb[fK + 3] < 224
	}, this.kD = function(fK) {
		return 224 <= aGb[fK + 3] && aGb[fK + 3] < 248
	}, this.aMm = function(fK) {
		return 248 <= aGb[fK + 3]
	}, this.a23 = function(fK) {
		for (var fi = this.fi, aC = 3; 0 <= aC; aC--)
			if (this.iy(fK + fi[aC])) return !0;
		return !1
	}, this.fb = function(fK) {
		return this.hG(fK) || this.fX(fK)
	}, this.iy = function(fK) {
		return 0 === aGb[fK + 3] && 2 === aGb[fK + 2]
	}, this.fX = function(fK) {
		return 0 === aGb[fK + 3] && 1 === aGb[fK + 2]
	}, this.a0t = function(fK) {
		return 0 === aGb[fK + 3] && 3 === aGb[fK + 2]
	}, this.fl = function(fK) {
		return 0 === aGb[fK + 3] && 5 === aGb[fK + 2]
	}, this.aMe = function(fK) {
		return 0 === aGb[fK + 3] && 3 <= aGb[fK + 2]
	}, this.fO = function(fK) {
		return (aGb[fK] >> 1 << 8) + aGb[fK + 1]
	}, this.aMn = function(fK) {
		return 1 & aGb[fK]
	}, this.aMf = function(fK, player) {
		return this.fX(fK) || this.hG(fK) && player !== this.fY(fK)
	}, this.fY = function(fK) {
		return ((3 & aGb[fK]) << 7) + ((3 & aGb[fK + 1]) << 5) + ((3 & aGb[fK + 2]) << 3) + (7 & aGb[fK + 3])
	}, this.a2B = function(fK) {
		aMo(fK, 1)
	}, this.aMp = function(fK) {
		aMo(fK, 2)
	}, this.a1p = function(fK, player) {
		aGb[fK] = this.aMH[player], aGb[fK + 1] = this.aMI[player], aGb[fK + 2] = this.aMJ[player], aGb[fK + 3] = 208 + this.aMK[player], aMr(fK)
	}, this.hB = function(fK, player) {
		aGb[fK] = this.aML[player], aGb[fK + 1] = this.aMM[player], aGb[fK + 2] = this.aMN[player], aGb[fK + 3] = 224 + this.aMK[player], aMr(fK)
	}, this.kE = function(fK, player) {
		aGb[fK] = this.aMO[player], aGb[fK + 1] = this.aMP[player], aGb[fK + 2] = this.aMQ[player], aGb[fK + 3] = 248 + this.aMK[player], aMr(fK)
	}
}

function cz() {
	var aMs = 0,
		aMt = new Uint16Array(64);

	function fC(a9b) {
		aMs -= 2;
		for (var aC = a9b; aC < aMs; aC += 2) aMt[aC] = aMt[aC + 2], aMt[aC + 1] = aMt[aC + 3]
	}
	this.dr = function() {
		aMs = 0
	}, this.el = function() {
		var aC, kB, jK;
		if (0 !== aMs)
			if (0 === ah.ne[aE.fQ]) aMs = 0;
			else if (0 === ae.gn(aE.fQ)) aMs = 0;
		else
			for (aC = aMs - 2; 0 <= aC; aC -= 2)(kB = aMt[aC]) < aE.fd && 0 === ah.ne[kB] ? fC(aC) : (jK = aMt[aC + 1], (kB >= aE.fd && bw.aMv(aE.fQ) || kB < aE.fd && bw.aMw(aE.fQ, kB)) && (bB.i7.iE(jK, kB), fC(aC)))
	}, this.iF = function(kB, jK) {
		! function(kB, jK) {
			for (var aC = 0; aC < aMs; aC += 2)
				if (aMt[aC] === kB) return aMt[aC + 1] = Math.min(aMt[aC + 1] + jK, 1023), 1;
			return
		}(kB, jK) && 64 !== aMs && (aMt[aMs] = kB, aMt[aMs + 1] = jK, aMs += 2)
	}
}

function cb() {
	function aN4(player) {
		var eh;
		bD.h2.a7f(player) && (eh = ah.hi[player] - ah.a7k[player] + ae.aN6(player), bg.h6(player, Math.abs(eh), eh < 0 ? 18 : 12)), ah.hi[player] = 0, ah.a7k[player] = 0
	}

	function aND() {
		aY.show(!1, !1, !1, !0), aX.aFd(), bU.a3v.a4j()
	}

	function aN0(player, aNC) {
		for (var aC = aNC.length - 1; 0 <= aC; aC--) ae.aNF(aNC[aC], player)
	}

	function aN3(player) {
		var ja = ah.ja,
			jb = ah.jb,
			jc = ah.jc,
			jd = ah.jd,
			fr = bV.fr;
		if (ah.hU[player]) {
			ah.hU[player] = 0;
			for (var o5 = ja[player], o6 = jc[player], fn = jb[player]; o5 <= fn; fn--)
				for (var fp = jd[player]; o6 <= fp; fp--) {
					var hE = 4 * (fp * fr + fn);
					ad.a2A(player, hE) && ad.a2B(hE)
				}
		}
		jb[player] = jd[player] = 0, ja[player] = jc[player] = Math.max(fr, bV.fs)
	}
	this.dz = function(hE) {
		var player, eh = ah.hU[hE] + ah.a1k[hE];
		bQ.z.l6[hE] ? eh && (aN0(player = hE, ae.aN1(player)), ag.aN2(player), aN3(player), aG.h4(player), ae.clear(player), aN4(player), function(player) {
			ah.a1k[player] = 0, ah.h8[player] = [], ah.hM[player] = [], ah.hN[player] = [], ah.g5[player] = []
		}(player)) : !eh && ah.h8[hE].length || this.aMz(hE)
	}, this.aMz = function(player) {
		! function(player) {
			bD.h2.kP(player) || (ah.a4n[player] = bl.a51.aNB(), aE.a4B++);
			var aNC = ae.aN1(player);
			0 === aNC.length ? bD.h2.a7c(player) && aND() : (aN0(player, aNC), function(player, aNC) {
				var aNH = aNC[function(aNC) {
					var aC, eP = 0;
					for (aC = aNC.length - 1; 1 <= aC; aC--) ah.hU[aNC[aC]] > ah.hU[aNC[eP]] && (eP = aC);
					return eP
				}(aNC)];
				9 === aE.lK && (1 === bj.fe[player] ? az.ku(8) && b0.aNI(aNH) : aF.iQ[player] && (aO.aB3(765, 0), aO.a2d(280, L(156, [ah.a2e[aNH], ah.a2e[player]]), 765, aNH, bE.qC, bE.rd, -1, !0)));
				if (bD.h2.a7c(player)) aND(), aO.a4N(aNH, 1);
				else {
					for (var aC = aNC.length - 1; 0 <= aC; aC--)
						if (bD.h2.a7f(aNC[aC]) && (bg.na[4 - bD.h2.kP(player)]++, bD.h2.a7c(aNC[aC]))) return aO.a4N(player, 0);
					bD.h2.kP(player) || aO.aAm(0, player, aNH)
				}
			}(player, aNC))
		}(player), ag.aN2(player), aN3(player), aN4(player),
			function(player) {
				ah.ne[player] = 0, ah.h8[player] = null, ah.hM[player] = null, ah.hN[player] = null, ah.g5[player] = null
			}(player), aG.h4(player), ae.clear(player), bQ.aN9.aNA(player)
	}
}

function d4() {
	var input;

	function aNJ(e) {
		(e = e.target.files) && 0 < e.length && b7.aNM(e[0])
	}

	function aNQ(e) {
		var eq = new Image;
		eq.onload = aNR, eq.src = e.target.result
	}

	function aNR(e) {
		var e = e.target,
			j = e.width,
			k = e.height,
			aNT = bm.buffer.data[162].value,
			max = Math.min(bV.aNU, aNT),
			aNT = (max = a1.id || bM.ty() ? Math.min(1400, aNT) : max) / Math.max(j, k);
		if (aNT < 1 && (j = Math.floor(aNT * j + .125), k = Math.floor(aNT * k + .125)), max < j || max < k || j < 10 || k < 10) aNT = "Invalid Image Dimensions!", a1.zU ? a1.zU.showToast(aNT) : alert(aNT);
		else {
			for (var max = document.createElement("canvas"), aNT = (max.width = j, max.height = k, max.getContext("2d")), aNW = document.createElement("canvas"), aNX = (aNW.width = e.width, aNW.height = e.height, aNW.getContext("2d")), e = (aNX
					.drawImage(e, 0, 0), aNX.getImageData(0, 0, aNW.width, aNW.height)), aNX = aNT.createImageData(j, k), src = e.data, aNa = aNX.data, aDS = aNW.width / j, aDT = aNW.height / k, fp = 0; fp < k; fp++)
				for (var fn = 0; fn < j; fn++) {
					var aNb = Math.floor(fn * aDS),
						aNb = 4 * (Math.floor(fp * aDT) * aNW.width + aNb),
						aNe = 4 * (fp * j + fn);
					aNa[aNe] = src[aNb], aNa[1 + aNe] = src[1 + aNb], aNa[2 + aNe] = src[2 + aNb], aNa[3 + aNe] = 255
				}
			aNT.putImageData(aNX, 0, 0), 20 === u.vR && u.a5O().aNR(max)
		}
	}
	this.dr = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aNJ
	}, this.xs = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aNK = function() {
		input.click()
	}, this.aNM = function(aNN) {
		var h = aNN.name.split("."),
			h = h[h.length - 1].toLowerCase();
		"gif" !== h && "jpg" !== h && "jpeg" !== h && "png" !== h || ((h = new FileReader).onload = aNQ, h.readAsDataURL(aNN))
	}
}

function d2() {
	this.aNf = new Uint32Array(aE.fd), this.dr = function() {
		10 === aE.lK && this.aNf.fill(0)
	}, this.el = function() {
		10 === aE.lK && this.lr()
	}, this.lr = function() {
		for (var hE, target, aFq, aNf = this.aNf, wu = am.ld, a7l = ah.hi, aC = am.lY - 1; 0 <= aC; aC--)(hE = wu[aC]) >= aE.l2 || (target = Math.max(bO.g7(a7l[hE], 4), 2048), aFq = Math.max(af.aFr(hE), 100), aNf[hE] += bO.g7(aFq * target, 1e4),
			aNf[hE] > target && (aNf[hE] = target))
	}, this.a7r = function(player, iQ) {
		return 10 !== aE.lK || bD.h2.kP(player) ? iQ : Math.min(this.aNf[player], iQ)
	}, this.a7x = function(player, iQ) {
		10 !== aE.lK || bD.h2.kP(player) || (this.aNf[player] -= iQ)
	}
}

function d5() {
	var aNg = -1,
		aNh = null,
		aNi = -1,
		yJ = 4;

	function aNk() {
		aN.aA5() ? be.render() : be.a4L()
	}

	function aNs(eq, fj) {
		var eO = eq >> 16,
			vn = eq >> 8 & 255,
			eq = 255 & eq,
			aNt = 255 - fj,
			aNt = (aNt < eO && aNt < vn && aNt < eq && (fj = -fj), aNg >> 7),
			aNv = aNg >> 5 & 3,
			aNw = aNg >> 3 & 3;
		return (Math.max(Math.min(eO + fj, 252 + aNt), aNt) << 16) + (Math.max(Math.min(vn + fj, 252 + aNv), aNv) << 8) + Math.max(Math.min(eq + fj, 252 + aNw), aNw)
	}

	function aNj() {
		return -1 !== aNg && (ad.aMg(aNg, aNh[0], aNh[1], aNh[2]), aNp(aNg), aNg = -1)
	}

	function aNp(player) {
		bi.dy = !0;
		for (var ja = ah.ja[player], jc = ah.jc[player], jb = ah.jb[player], jd = ah.jd[player], fp = jc; fp <= jd; fp++)
			for (var fn = ja; fn <= jb; fn++) {
				var fK = ad.a1o(fn, fp);
				ad.a2A(player, fK) && (ad.aMm(fK) ? ad.kE(fK, player) : ad.kD(fK) ? ad.hB(fK, player) : ad.a1p(fK, player))
			}
	}
	this.dr = function() {
		aNh = null, aNi = aNg = -1, yJ = bO.is(Math.floor(bm.buffer.data[16].value), 0, 16)
	}, this.el = function(c1) {
		if (bm.buffer.data[15].value && 0 !== yJ && (c1 || !bM.ty())) {
			var c1 = bP.hx(bM.hl),
				hy = bP.hz(bM.hm);
			if (bP.i0(c1, hy)) {
				c1 = bP.g3(c1, hy), hy = bP.fW(c1);
				if (aNi === hy)
					if (ad.hG(hy)) {
						if (aNg === ad.fY(hy)) return
					} else if (-1 === aNg) return;
				! function(fK) {
					ad.hG(fK) ? (fK = ad.fY(fK)) !== aNg && (aNj(), function(player) {
						aNg = player, aNh = ad.aMk(player);
						var aNn = function() {
							var q1 = aNh,
								aNq = yJ << 2,
								aNr = aNq << 1;
							return [aNs(q1[0], aNq), aNs(q1[1], aNr), aNs(q1[2], aNr)]
						}();
						ad.aMg(player, aNn[0], aNn[1], aNn[2]), aNp(player)
					}(fK), aNk()) : aNj() && aNk()
				}(aNi = hy)
			} else aNj() && aNk()
		}
	}
}

function d6() {
	var y6 = 0,
		aNx = 0,
		aNy = 0,
		aNz = 0,
		aNi = -1;

	function aO2(fK) {
		if (aNi === fK) return !1;
		if (-1 === (aNi = fK)) y6 = 0, aO.aBG(y6, 0);
		else {
			if (ad.hG(fK)) return aNy = ad.fY(fK), l1 = ah.hi[aNy] - ah.a7k[aNy], (4 !== y6 || l1 !== aNx) && (y6 = 4, aNx = l1, aO.aBG(y6, l1), !0);
			if (ad.fX(fK)) return 3 !== y6 && (y6 = 3, aO.aBG(y6, 0), !0);
			if (ad.fl(fK)) return 2 !== y6 && (y6 = 2, aO.aBG(y6, 0), !0);
			var l1 = bQ.lr.a9t(bM.hl, bM.hm);
			if (-1 === l1) return 1 !== y6 && (y6 = 1, aO.aBG(y6, 0), !0);
			fK = bQ.z.aAu[l1];
			if (aNy = bQ.z.mv[l1], aNz = bQ.z.mw[l1] >> 3, 5 === y6 && fK === aNx) return !1;
			y6 = 5, aNx = fK, aO.aBG(y6, fK)
		}
		return !0
	}
	this.dr = function() {
		aNz = aNy = aNx = y6 = 0, aNi = -1
	}, this.el = function(c1) {
		var hy;
		!c1 && bM.ty() || (c1 = bP.hx(bM.hl), hy = bP.hz(bM.hm), bP.i0(c1, hy) ? (c1 = bP.g3(c1, hy), aO2(bP.fW(c1))) : aO2(-1))
	}, this.nL = function() {
		var aO4, l1, a9r, aO3;
		if (0 !== y6 && 2 !== y6)
			if (bM.ty()) {
				if (1 !== y6 && 3 !== y6) {
					if (4 === y6) return void(l1 = ah.hi[aNy] - ah.a7k[aNy], aNx === l1 || (aNx = l1, aO.aBG(y6, l1)));
					(a9r = bQ.lr.o4(aNz, aNy)) < 0 ? (y6 = 1, aO.aBG(y6, 0)) : (aO3 = bQ.z.aAu[a9r]) !== aNx && (aNx = aO3, aO.aBG(y6, aO3))
				}
			} else if (1 === y6) - 1 !== (a9r = bQ.lr.a9t(bM.hl, bM.hm)) && (y6 = 5, aNx = bQ.z.aAu[a9r], aO.aBG(y6, aNx));
		else if (3 === y6) ad.hG(aNi) && (y6 = 4, aO4 = ad.fY(aNi), aNx = ah.hi[aO4] - ah.a7k[aO4], aO.aBG(y6, aNx));
		else if (4 === y6) {
			if (ad.hG(aNi)) return void(aO4 = ad.fY(aNi), l1 = ah.hi[aO4] - ah.a7k[aO4], aNx === l1 || (aNx = l1, aO.aBG(y6, l1)));
			y6 = 3, aO.aBG(y6, 0)
		} else - 1 === (a9r = bQ.lr.a9t(bM.hl, bM.hm)) ? (y6 = 1, aO.aBG(y6, 0)) : (aO3 = bQ.z.aAu[a9r]) !== aNx && (aNx = aO3, aO.aBG(y6, aO3))
	}
}

function df() {
	function aO6(e) {
		var h, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (h = e.name.split("."))[h.length - 1].toLowerCase()) && ((h = new FileReader).onload = aOE, h.readAsText(e))
	}

	function aOE(e) {
		var aOH;
		aE.a49 || (e = JSON.parse(e.target.result), aOH = aE.data = new a8k, aOI(e, aOH, "mapType", 0, 2), aOI(e, aOH, "mapProceduralIndex", 0, 255), aOI(e, aOH, "mapRealisticIndex", 0, 255), aOI(e, aOH, "mapSeed", 0, 16383), function(aOG, aOH, hF,
				max) {
				aOG = aOG[hF];
				aOH[hF] = aOO(aOG) ? aOG.slice(0, max) : aOH[hF]
			}(e, aOH, "mapName", 20), function(aOG, aOH, hF) {
				var aNS;
				2 === aOH.mapType && (!aOO(aOG = aOG[hF]) || aOG.length <= 20 ? aOH.mapType = 0 : ((aNS = new Image).onload = function() {
					bC.aOP.aOQ(aNS, 1), aNS.onload = null, aNS = null
				}, aNS.src = aOG))
			}(e, aOH, "canvas"), aOI(e, aOH, "passableWater", 0, 1), aOI(e, aOH, "passableMountains", 0, 1), aOI(e, aOH, "playerCount", 1, 512), aOI(e, aOH, "humanCount", 1, 1), aOI(e, aOH, "selectedPlayer", 0, 0), aOI(e, aOH, "gameMode", 0, 1),
			aOI(e, aOH, "playerMode", 0, 0), aOI(e, aOH, "battleRoyaleMode", 0, 0), aOI(e, aOH, "numberTeams", 0, 8), aOI(e, aOH, "isZombieMode", 0, 0), aOI(e, aOH, "isContest", 0, 0), aOI(e, aOH, "isReplay", 0, 0), aOL(e, aOH, "elo", 16, 2,
				16383), aOI(e, aOH, "colorsType", 0, 1), aOI(e, aOH, "colorsPersonalized", 0, 1), aOL(e, aOH, "colorsData", 32, 512, 262143), aOI(e, aOH, "selectableColor", 0, 1), aOL(e, aOH, "teamPlayerCount", 16, 9, 512), aOI(e, aOH,
				"neutralBots", 0, 1), aOI(e, aOH, "botDifficultyType", 0, 3), aOI(e, aOH, "botDifficultyValue", 0, 15), aOL(e, aOH, "botDifficultyTeam", 8, 9, 15), aOL(e, aOH, "botDifficultyData", 8, 512, 15), aOI(e, aOH, "spawningType", 0, 2),
			aOI(e, aOH, "spawningSeed", 0, 16383), aOL(e, aOH, "spawningData", 16, 1024, 4095), aOI(e, aOH, "selectableSpawn", 0, 1), aOI(e, aOH, "playerNamesType", 0, 2),
			function(aOG, aOH, hF, size, max) {
				var a6m = aOG[hF];
				if (Array.isArray(a6m)) {
					for (var a6n = new Array(size), fg = Math.min(a6m.length, size), aC = 0; aC < fg; aC++) a6n[aC] = aOO(a6m[aC]) ? a6m[aC].slice(0, max) : "";
					a6n.fill("", fg), aOH[hF] = a6n
				}
			}(e, aOH, "playerNamesData", 512, 20), aOI(e, aOH, "selectableName", 0, 1), aOI(e, aOH, "aIncomeType", 0, 2), aOI(e, aOH, "aIncomeValue", 0, 255), aOL(e, aOH, "aIncomeData", 8, 512, 255), aOI(e, aOH, "tIncomeType", 0, 2), aOI(e, aOH,
				"tIncomeValue", 0, 255), aOL(e, aOH, "tIncomeData", 8, 512, 255), aOI(e, aOH, "iIncomeType", 0, 2), aOI(e, aOH, "iIncomeValue", 0, 255), aOL(e, aOH, "iIncomeData", 8, 512, 255), aOI(e, aOH, "sResourcesType", 0, 2), aOI(e, aOH,
				"sResourcesValue", 0, 2047), aOL(e, aOH, "sResourcesData", 16, 512, 2047), u.y(), u.z.vK[0] = 0, u.v(19))
	}

	function aOI(aOG, aOH, hF, min, max) {
		aOG = aOG[hF];
		aOH[hF] = "number" == typeof aOG && min <= aOG && aOG <= max ? Math.floor(aOG) : aOH[hF]
	}

	function aOO(pU) {
		return "string" == typeof pU
	}

	function aOL(aOG, aOH, hF, aOR, size, max) {
		var a6m = aOG[hF];
		if (Array.isArray(a6m)) {
			for (var a6n = new(8 === aOR ? Uint8Array : 16 === aOR ? Uint16Array : Uint32Array)(size), fg = Math.min(a6m.length, size), aC = 0; aC < fg; aC++) a6n[aC] = bO.is(a6m[aC], 0, max);
			aOH[hF] = a6n
		}
	}
	this.aO5 = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aO6, input.click()
	}, this.aO7 = function() {
		for (var aOA, aHC, a9K = aE.data, keys = Object.keys(a9K), aO8 = {}, aC = 0; aC < keys.length; aC++) {
			var key = keys[aC];
			a9K[key] instanceof Uint8Array || a9K[key] instanceof Uint16Array || a9K[key] instanceof Uint32Array ? aO8[key] = Array.from(a9K[key]) : aO8[key] = a9K[key]
		}
		aO8.canvas = 2 === aO8.mapType && aO8.canvas ? aO8.canvas.toDataURL() : null, aOA = aO8, aOA = JSON.stringify(aOA, null, 2), aOA = new Blob([aOA], {
			type: "application/json"
		}), (aHC = document.createElement("a")).href = URL.createObjectURL(aOA), aHC.download = "tt_scenario.json", aHC.click()
	}
}

function cf() {
	var aOS, aOT, size, kB, iQ, aOU;

	function aOV(player) {
		return player < aE.l2 ? aOS * player : aOS * aE.l2 + aOT * (player - aE.l2)
	}
	this.dr = function() {
		aOS = aE.l2 < 16 ? 12 : 8, aOT = 4;
		var fg = aOV(aE.fd);
		size = new Uint8Array(aE.fd), kB = new Uint16Array(fg), iQ = new Uint32Array(fg), aOU = new Uint8Array(fg)
	}, this.su = function(aCM, aOW) {
		var aOX = this.hj(aCM, aOW),
			aOW = (this.hh(aCM, aOW, 0), bD.h2.h5(aCM, aOX));
		bg.h6(aCM, aOX - aOW, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aNF = function(player, aOW) {
		var aOa, aOW = function(player, aOW) {
			var aC, lx = aOV(player);
			for (aC = size[player] - 1; 0 <= aC; aC--)
				if (kB[lx + aC] === aOW) return aC;
			return size[player]
		}(player, aOW);
		aOW !== size[player] && (aOa = iQ[aOV(player) + aOW], this.h7(player, aOW), this.ep(player, aOa, aE.fd))
	}, this.kN = function(player, aOW) {
		for (var lx = aOV(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kB[lx + aC] === aOW) return !0;
		return !1
	}, this.kg = function(player) {
		return player < aE.l2 ? size[player] < aOS : size[player] < aOT
	}, this.gn = function(player) {
		return size[player]
	}, this.gs = function(player, aC) {
		return kB[aOV(player) + aC]
	}, this.gt = function(player, aC) {
		return iQ[aOV(player) + aC]
	}, this.hj = function(player, aOW) {
		for (var lx = aOV(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kB[lx + aC] === aOW) return iQ[lx + aC];
		return 0
	}, this.aN6 = function(player) {
		for (var lx = aOV(player), g8 = 0, aC = size[player] - 1; 0 <= aC; aC--) g8 += iQ[lx + aC];
		return g8
	}, this.hh = function(player, aOW, aOa) {
		for (var lx = aOV(player), aC = size[player] - 1; 0 <= aC; aC--) kB[lx + aC] === aOW && (iQ[lx + aC] = aOa)
	}, this.hS = function(player, aC, aOa) {
		iQ[aOV(player) + aC] = Math.max(aOa, 0)
	}, this.hT = function(player, aC) {
		aOU[aOV(player) + aC] = 0
	}, this.gu = function(player, aC) {
		return aOU[aOV(player) + aC]
	}, this.ep = function(player, aOa, aOW) {
		ap.jp.ke[player] = ap.jp.ke[aOW] = 8, bD.h2.a7f(aOW) && bg.na[6 - bD.h2.kP(player)]++;
		for (var lx = aOV(player), aC = size[player] - 1; 0 <= aC; aC--)
			if (kB[lx + aC] === aOW) return iQ[lx + aC] += aOa, void(iQ[lx + aC] = iQ[lx + aC] > aE.a7n ? aE.a7n : iQ[lx + aC]);
		kB[lx + size[player]] = aOW, iQ[lx + size[player]] = aOa, aOU[lx + size[player]] = 1, size[player]++, aOW === aE.fQ ? aO.a4N(player, 5) : player < aE.l2 && player === aE.fQ && ag.aAo(aOW)
	}, this.h7 = function(player, eP) {
		var fz, lx;
		if (0 !== size[player])
			for (lx = aOV(player), size[player]--, fz = eP; fz < size[player]; fz++) kB[lx + fz] = kB[lx + fz + 1], iQ[lx + fz] = iQ[lx + fz + 1], aOU[lx + fz] = aOU[lx + fz + 1]
	}, this.aN1 = function(player) {
		for (var fz, lx, aNC = [], aC = am.lY - 1; 0 <= aC; aC--)
			for (lx = aOV(am.ld[aC]), fz = size[am.ld[aC]] - 1; 0 <= fz; fz--)
				if (kB[lx + fz] === player) {
					aNC.push(am.ld[aC]);
					break
				} return aNC
	}
}

function cg() {
	var aOb;

	function aOd(player) {
		var eO, kh;
		return bD.h2.kP(player) && player < aE.l2 ? 0 : (eO = aOb[bO.g7((aE.fd - 1) * ah.hU[player], aE.km)], bi.kz() < 1920 && (eO = Math.max(bO.g7(100 * (13440 - 6 * bi.kz()), 1920), eO)), kh = af.ki(player), ah.hi[player] > kh && (eO -= bO.g7(2 *
			eO * (ah.hi[player] - kh), kh)), Math.min(Math.max(eO, 0), 700))
	}

	function aOp(oH) {
		for (var hU = ah.hU, ld = am.ld, aC = am.lY - 1; 0 <= aC; aC--) {
			var hE = ld[aC];
			bD.h2.h5(hE, bO.g7(oH * hU[hE], 32))
		}
	}

	function aOm() {
		var a0m = aE.fQ;
		bR.gC[0] = ah.hi[a0m] - ah.a7k[a0m]
	}

	function aOo(eP) {
		var a0m = aE.fQ,
			a0m = ah.hi[a0m] - ah.a7k[a0m] - bR.gC[0];
		af.aER += a0m, bg.na[eP] += a0m
	}
	this.aER = 0, this.dx = function() {
		for (var fg = aE.fd, aC = (aOb = new Uint16Array(fg), 0); aC < fg; aC++) aOb[aC] = 100 + aOc(bO.g7(25600 * aC, fg - 4), 9)
	}, this.dr = function() {
		(this.aER = 0) === aE.data.iIncomeType ? this.aFr = aOd : 1 === aE.data.iIncomeType ? this.aFr = function(player) {
			return bO.g7(aE.data.iIncomeValue * aOd(player), 64)
		} : this.aFr = function(player) {
			return bO.g7(aE.data.iIncomeData[player] * aOd(player), 64)
		}
	}, this.el = function() {
		if (bi.kz() % 10 == 9 && (af.aER = 0, function() {
				aOm();
				for (var ld = am.ld, hi = ah.hi, aC = am.lY - 1; 0 <= aC; aC--) {
					var hE = ld[aC],
						aOn = bO.g7(af.aFr(hE) * hi[hE], 1e4);
					bD.h2.h5(hE, Math.max(aOn, 1))
				}
				aOo(9)
			}(), function() {
				if (0 !== aE.data.aIncomeType) {
					if (aOm(), 1 === aE.data.aIncomeType)
						for (var hU = ah.hU, ld = am.ld, oH = aE.data.aIncomeValue, aC = am.lY - 1; 0 <= aC; aC--) {
							var hE = ld[aC];
							bD.h2.h5(hE, bO.g7(oH * hU[hE], 128))
						} else 2 === aE.data.aIncomeType && function() {
							for (var hU = ah.hU, ld = am.ld, oH = aE.data.aIncomeData, aC = am.lY - 1; 0 <= aC; aC--) {
								var hE = ld[aC];
								bD.h2.h5(hE, bO.g7(oH[hE] * hU[hE], 128))
							}
						}();
					aOo(18)
				}
			}(), bi.kz() % 100 == 99)) {
			if (aOm(), 0 === aE.data.tIncomeType) aOp(32);
			else if (1 === aE.data.tIncomeType) aOp(aE.data.tIncomeValue);
			else
				for (var hU = ah.hU, ld = am.ld, oH = aE.data.tIncomeData, aC = am.lY - 1; 0 <= aC; aC--) {
					var hE = ld[aC];
					bD.h2.h5(hE, bO.g7(oH[hE] * hU[hE], 32))
				}
			aOo(8)
		}
	}, this.ki = function(player) {
		return Math.min(100 * ah.hU[player], aE.a8g)
	}, this.rt = function(player, ru) {
		bu.sG(player, ru, bR.gD[0], 0), bD.h2.h5(ru, bR.gD[0]), bg.sH(player, ru), ag.aOf(player, bR.gD[0] + bR.gD[1]), ag.sI(ru, bR.gD[0]), bD.h2.nC(player)
	}, this.aOg = function() {
		for (var fg = am.lY, wu = am.ld, lx = 0, a7l = ah.hi, aC = 0; aC < fg; aC++) lx += a7l[wu[aC]];
		return lx
	}, this.aOh = function(aOi) {
		for (var hE, fg = am.lY, wu = am.ld, lx = 0, a7l = ah.hi, fe = bj.fe, aC = 0; aC < fg; aC++) fe[hE = wu[aC]] === aOi && (lx += a7l[hE]);
		return lx
	}
}

function ci() {
	var aOt, aOu, aOv, aOw, aOx, aOy, aOz, aP0, aP1, aP2, aP3, aP4, aP5, aP6, aP7, aP8, aP9, aPA, aPC, aPD, aH5, aPE, aPF, aPL, aPM, aPB = null,
		aPH = 0,
		aPI = !1,
		aPJ = new Float32Array(4),
		aPK = 0,
		aEw = 112,
		aPN = 0;

	function ta() {
		aP1 = Math.floor(+i.iu), aP2 = Math.floor(.5 * aP1), aPB.width = i.j, aPB.height = i.k, aPC = aPB.getContext("2d", {
			alpha: !0
		}), bD.t4.textAlign(aPC, 1), bD.t4.textBaseline(aPC, 1), aPC.imageSmoothingEnabled = !0
	}

	function aPO() {
		var aC, aPT;
		for (ym.font = bD.t4.t7(1, 100 * aP3), aPT = 80 / Math.floor(ym.measureText(bD.pY.a3S(aE.a7n)).width), ym.font = bD.t4.t7(1, 100), aC = aE.fd - 1; 0 <= aC; aC--) aP0[aC] = 100 / Math.floor(ym.measureText(ah.a2e[aC]).width), aOz[aC] = Math
			.min(aPT, aP0[aC])
	}

	function aPU(aC) {
		return !aPN || (aC = ah.hi[aC]) < 1e6 ? 1 : aC < 1e7 ? aPJ[0] : aPJ[Math.min(Math.floor(Math.log10(aC)) - 6, 3)]
	}

	function aPS(il) {
		aPI = !1, aPH = bi.eg, aPA = !1, aP9 = 1, aP7 = aP8 = 0, il.clearRect(0, 0, i.j, i.k);
		for (var aPa, aPb, aC, aPc, fontSize, aPd, o5 = jL / iv, o6 = jM / iv, oI = (i.j + jL) / iv, oJ = (i.k + jM) / iv, aPe = 0 !== ah.ne[aE.fQ] && !bD.h2.kP(aE.fQ), fz = am.lY - 1; 0 <= fz; fz--) aC = am.ld[fz], (fontSize = Math.floor(aP6 * iv *
			aPU(aC) * aOz[aC] * aOx[aC])) < aP5 || aP1 <= fontSize || aOv[aC] + aOx[aC] > o5 && aOv[aC] < oI && aOw[aC] + aOy[aC] > o6 && aOw[aC] < oJ && (aPa = Math.floor(i.j * (aOv[aC] + aOx[aC] / 2 - o5) / (oI - o5)), aPb = Math.floor(i.k * (
			aOw[aC] + aOy[aC] / 2 - o6) / (oJ - o6) - .1 * fontSize), aPc = ad.aCs[aC], il.font = bD.t4.t7(1 === ah.a7b[aC] ? 4 : 1, fontSize), il.fillStyle = aPf(fontSize, aPc % 2), aPN ? aPg(il, aC, fontSize, aPa, aPb, aPc) : aPh(aC,
			fontSize, aPa, aPb, il), aPA = !0, 0 < aH5[aC] ? function(aPa, aPb, fontSize, aC, il) {
			0 === kn[aC] ? ak.q3.a3J(aPD[aC]) ? (function(aPa, aPb, fontSize, player, s5, il) {
				for (var a1J = aPb, ik = (il.globalAlpha = aPp(fontSize), aPU(player) * (aPN ? aPK : aP0[player])), a1I = aPa - .5 * fontSize / ik - .9 * fontSize, g0 = 0; g0 < 2; g0++) il.fillText(ak.q3.a3B(s5), a1I, a1J), a1I =
					aPa + .5 * fontSize / ik + .9 * fontSize;
				il.globalAlpha = 1
			}(aPa, aPb, fontSize, aC, aPD[aC], il), aPj(aPa, aPb, fontSize, 0, 0, il)) : ak.q3.a3L(aPD[aC]) ? (aPs(aPa, aPb, fontSize, aPD[aC], 0, il), aPj(aPa, aPb, fontSize, 0, 1, il)) : (aPs(aPa, aPb, fontSize, aPD[aC], 1, il), aPj(
				aPa, aPb, fontSize, 1, 0, il)) : aPs(aPa, aPb, fontSize, aPD[aC], 0, il)
		}(aPa, aPb, fontSize, aC, il) : 0 === kn[aC] && aPj(aPa, aPb, fontSize, 0, 0, il), aPe && (0 < aH5[aC + aE.fd] || 0 < aH5[aC + 2 * aE.fd] || 0 < aH5[aC + 3 * aE.fd] || 0 < aH5[aC + 4 * aE.fd]) && function(aPa, aPb, fontSize, aC, il) {
			var eq, h9 = -1;
			for (eq = 4; 1 <= eq; eq--) 0 < aH5[aC + eq * aE.fd] && h9++;
			for (eq = 1; eq < 5; eq++) 0 < aH5[aC + eq * aE.fd] && (! function(aPa, aPb, fontSize, eq, aC, aPn, eh, il) {
				var a70;
				if (1 === eq) {
					aC = aPD[aC + aE.fd];
					if (!ak.q3.a3K(aC)) return function(aPa, aPb, fontSize, s5, aPn, il) {
						il.globalAlpha = aPp(fontSize);
						aPa -= .534 * aPn * fontSize, aPn = aPb + 1.59 * fontSize;
						il.font = bD.t4.t7(0, .785 * fontSize), il.fillText(ak.q3.a3B(s5), aPa, aPn), il.globalAlpha = 1
					}(aPa, aPb, fontSize, aC, aPn, il);
					a70 = ak.a0l.a2k[aC - 1024 + ak.q3.a2w]
				} else a70 = 2 === eq ? aM.a9Z()[4].canvas[+(eh < 255)] : (3 === eq ? aM.a9Z()[5] : aM.a9Z()[6]).canvas[0];
				aC = ak.a0l.a2l, eh = .8 * fontSize / aC, eq = aPa - .5 * eh * aC - .534 * aPn * fontSize, aPa = aPb + 1.4 * eh * aC;
				il.setTransform(eh, 0, 0, eh, eq, aPa), il.globalAlpha = aPp(fontSize), il.drawImage(a70, 0, 0), il.globalAlpha = 1, il.setTransform(1, 0, 0, 1, 0, 0)
			}(aPa, aPb, fontSize, eq, aC, h9, aH5[aC + eq * aE.fd], il), h9 -= 2)
		}(aPa, aPb, fontSize, aC, il), (aPd = aP3 * fontSize) < aP5 || (il.font = bD.t4.t7(1, aPd), aPb += Math.floor(.78 * fontSize), aPN ? aPh(aC, aPd, aPa, aPb, il) : aPg(il, aC, aPd, aPa, aPb, aPc)))
	}

	function aPh(aC, fontSize, fn, fp, il) {
		var ___id = aC;
		var showName = aC < aE.l2 || !__fx.settings.hideBotNames;
		var eliminationEstimate = __fx.settings.showEstimatedEliminationAttack ?
			__fx.utils.getEstimatedEliminationAttack(___id, ah.hi[___id] - ah.a7k[___id]) :
			"";
		if (showName) il.fillText(ah.a2e[aC], fn, fp), aC < aE.l2 && 2 !== ah.a7b[aC] || (aC = fontSize / aP0[aC], il.fillRect(fn - .5 * aC, fp + bD.t4.a3C * fontSize, aC, Math.max(1, .1 * fontSize)));
		aPN && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (il.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			il.fillText(__fx.utils.getDensity(___id), fn, showName ? fp + fontSize : fp),
			eliminationEstimate && il.fillText(eliminationEstimate, fn, showName ? fp + 2 * fontSize : fp + fontSize)
		);
	}

	function aPg(il, aC, fontSize, aPa, aPb, aPc) {
		var eh, a7k = ah.a7k[aC],
			aPm = bD.pY.a3S(ah.hi[aC] - a7k);

		function drawDensity() {
			var eliminationEstimate;
			!aPN && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (il.fillStyle = __fx.utils.textStyleBasedOnDensity(aC)), il.fillText(__fx.utils.getDensity(aC), aPa, aPb + fontSize), eliminationEstimate = __fx.settings
				.showEstimatedEliminationAttack ? __fx.utils.getEstimatedEliminationAttack(aC, ah.hi[aC] - a7k) : "") && il.fillText(eliminationEstimate, aPa, aPb + 2 * fontSize)
		}
		a7k ? (eh = il.fillStyle, il.fillStyle = aPf(fontSize, 2 + aPc % 2), il.fillText(aPm, aPa, aPb), il.fillStyle = eh) : aPc >> 1 & 1 ? (il.lineWidth = .05 * fontSize, il.strokeStyle = aPf(fontSize, aPc % 2), il.strokeText(aPm, aPa, aPb)) : (1 <
			aPc && (il.lineWidth = .12 * fontSize, il.strokeStyle = aPf(fontSize, aPc), il.strokeText(aPm, aPa, aPb)), il.fillText(aPm, aPa, aPb)), drawDensity()
	}

	function aPj(aPa, aPb, fontSize, aPn, aPo, il) {
		var aA4 = .95 * fontSize / aPF,
			aPa = aPa - .5 * aA4 * aPE + .8 * aPn * fontSize,
			aPn = aPb - 1.76 * aA4 * aPF - (.35 - bD.t4.a3C + .7) * aPo * fontSize;
		il.setTransform(aA4, 0, 0, aA4, aPa, aPn), il.globalAlpha = aPp(fontSize), il.drawImage(ac.get(4), 0, 0), il.globalAlpha = 1, il.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aPs(aPa, aPb, fontSize, s5, aPn, il) {
		var ie, a1I, aA4;
		il.globalAlpha = aPp(fontSize), ak.q3.a3K(s5) ? (ie = ak.a0l.a2l, il.setTransform(aA4 = 1.1 * fontSize / ie, 0, 0, aA4, a1I = aPa - .5 * aA4 * ie - .8 * aPn * fontSize, aA4 = aPb - 1.55 * aA4 * ie), il.drawImage(ak.a0l.a2k[s5 - 1024 + ak.q3
			.a2w], 0, 0), il.setTransform(1, 0, 0, 1, 0, 0)) : (a1I = aPa - .8 * aPn * fontSize, aA4 = aPb - (.35 - bD.t4.a3C + 1) * fontSize, il.fillText(ak.q3.a3B(s5), a1I, aA4)), il.globalAlpha = 1
	}

	function aPf(fontSize, aPc) {
		return aP2 <= fontSize && fontSize < aP1 ? bj.aPu[aPc] + aPp(fontSize).toFixed(3) + ")" : bj.aPv[aPc]
	}

	function aPp(fontSize) {
		return aP2 <= fontSize && fontSize < aP1 ? 1 - (fontSize - aP2) / (aP1 - aP2) : 1
	}

	function aQ4(ik, j) {
		return 1 + Math.floor(aP4 * ik * j)
	}

	function aQ1(aC) {
		for (var left = aOv[aC], fz = aOv[aC] - ah.ja[aC] - 1; 0 <= fz; fz--)
			if (!aQ6(aC, --left, aOw[aC], aOy[aC])) {
				left++;
				break
			} var right = aOv[aC];
		for (fz = ah.jb[aC] - aOv[aC] - aOx[aC]; 0 <= fz; fz--)
			if (!aQ6(aC, ++right + aOx[aC] - 1, aOw[aC], aOy[aC])) {
				right--;
				break
			} var fn = Math.floor((left + right) / 2),
			top = aOw[aC];
		for (fz = aOw[aC] - ah.jc[aC] - 1; 0 <= fz; fz--)
			if (!aQ7(aC, fn, --top, aOx[aC])) {
				top++;
				break
			} var bottom = aOw[aC];
		for (fz = ah.jd[aC] - aOw[aC] - aOy[aC]; 0 <= fz; fz--)
			if (!aQ7(aC, fn, ++bottom + aOy[aC] - 1, aOx[aC])) {
				bottom--;
				break
			} var fp = Math.floor((top + bottom) / 2);
		aPy(aC, fn, fp, aOx[aC], aOy[aC]) && (aOv[aC] = fn, aOw[aC] = fp)
	}

	function aPy(player, fn, fp, j, k) {
		fj = Math.floor(.2 * j);
		for (var fj, eq = fn + j - 1; fn <= eq; eq--)
			if (!aQ6(player, eq, fp, k)) return;
		for (eq = fp + k - 1 - (fj = (fj = Math.floor(.25 * k)) < 1 ? 1 : fj); fp + fj <= eq; eq--)
			if (!aQ7(player, fn, eq, j)) return;
		return 1
	}

	function aQ6(player, fn, fp, k) {
		return ad.a2A(player, 4 * (fp * bV.fr + fn)) && ad.a2A(player, 4 * ((fp + k - 1) * bV.fr + fn))
	}

	function aQ7(player, fn, fp, j) {
		return ad.a2A(player, 4 * (fp * bV.fr + fn)) && ad.a2A(player, 4 * (fp * bV.fr + fn + j - 1))
	}
	this.dr = function() {
		if (aPN = bm.buffer.data[7].value || 8 === aE.lK, aPA = !1, aP6 = .88, aP3 = .5, aP4 = 1.8, aP5 = 12 - 3 * bm.buffer.data[9].value, aOu = aOt = 0, aOv = new Uint16Array(aE.fd), aOw = new Uint16Array(aE.fd), aOx = new Uint16Array(aE.fd),
			aOy = new Uint16Array(aE.fd), aOz = new Float32Array(aE.fd), aP0 = new Float32Array(aE.fd), aPD = new Uint16Array(2 * aE.fd), aH5 = new Uint8Array(5 * aE.fd), aPL = new Uint8Array(aE.fd), aPM = new Uint8Array(aE.fd), aPB = aPB ||
			document.createElement("canvas"), ta(), aP8 = aP7 = 0, aP9 = 1, aPN) {
			var aC, aPT;
			for (aPO(), ym.font = bD.t4.t7(1, 100), aPT = 100 / Math.floor(ym.measureText("900 000").width), aC = aE.fd - 1; 0 <= aC; aC--) aOz[aC] = Math.min(aPT, 2 * aP0[aC]);
			aPK = aPT, aPJ[0] = 100 / (aPT * Math.floor(ym.measureText("5 000 000").width)), aPJ[1] = 100 / (aPT * Math.floor(ym.measureText("50 000 000").width)), aPJ[2] = 100 / (aPT * Math.floor(ym.measureText("500 000 000").width)), aPJ[3] =
				100 / (aPT * Math.floor(ym.measureText("1 000 000 000").width))
		} else aPO();
		! function() {
			var aC;
			for (aC = aE.fd - 1; 0 <= aC; aC--) ah.hU[aC] < 12 ? (aOv[aC] = ah.ja[aC] + 1, aOw[aC] = ah.jc[aC] + 1, aOx[aC] = 1, aOy[aC] = 1) : (aOv[aC] = ah.ja[aC], aOw[aC] = ah.jc[aC] + 1, aOx[aC] = 4, aOy[aC] = 2);
			if (aE.i5)
				for (aC = 0; aC < aE.l2; aC++) aOx[aC] = 0;
			aPE = ac.get(4).width, aPF = ac.get(4).height
		}()
	}, this.aOf = function(hE, a9I) {
		a9I > 18 * ah.hU[hE] ? (aPM[hE] = 6, ad.aCs[hE] = 2 + ad.aCs[hE] % 2) : (aPL[hE] = 4, (ad.aCs[hE] < 2 || 3 < ad.aCs[hE]) && (ad.aCs[hE] = 6 + ad.aCs[hE] % 2))
	}, this.sI = function(hE, a9I) {
		a9I > 6 * ah.hU[hE] ? (aPM[hE] = 6, ad.aCs[hE] = 4 + ad.aCs[hE] % 2) : (aPL[hE] = 4, (ad.aCs[hE] < 4 || 5 < ad.aCs[hE]) && (ad.aCs[hE] = 8 + ad.aCs[hE] % 2))
	}, this.resize = function() {
		ta(), aPS(aPC)
	}, this.a8c = function() {
		for (var aC = 0; aC < aE.l2; aC++) ah.jb[aC] - ah.ja[aC] != 3 || ah.jd[aC] - ah.jc[aC] != 3 ? (aOv[aC] = ah.ja[aC] + (ah.jb[aC] !== ah.ja[aC] ? 1 : 0), aOw[aC] = ah.jc[aC], aOx[aC] = 1, aOy[aC] = 1) : (aOv[aC] = ah.ja[aC], aOw[aC] = ah
			.jc[aC] + 1, aOx[aC] = 4, aOy[aC] = 2)
	}, this.sv = function(player, eP, aPV) {
		! function(player, eP, aPV) {
			player += eP * aE.fd;
			0 === eP ? aPD[player] === aPV && 0 < aH5[player] ? aH5[player] = 0 : (aPD[player] = aPV, aH5[player] = ak.q3.a3J(aPV) ? 255 : 64) : 1 === eP ? (aH5[player] = 64, aPD[player] = aPV) : aH5[player] = aPV
		}(player, eP, aPV), 2 === aE.a49 && this.nQ(!0)
	}, this.yl = function() {
		aPA && (1 !== aP9 ? (ym.imageSmoothingEnabled = !0, ym.setTransform(aP9, 0, 0, aP9, 0, 0), ym.drawImage(aPB, -aP7 / aP9, -aP8 / aP9), ym.setTransform(1, 0, 0, 1, 0, 0), ym.imageSmoothingEnabled = !1) : ym.drawImage(aPB, -aP7, -aP8))
	}, this.aDe = function(j4, j7) {
		aP7 += j4, aP8 += j7
	}, this.a5h = function(j4, j7) {
		ag.aDe(j4, j7)
	}, this.zoom = function(a6Z, mH, mI) {
		aP9 *= a6Z, aP7 = (aP7 + mH) * a6Z - mH, aP8 = (aP8 + mI) * a6Z - mI
	}, this.aN2 = function(player) {
		var ja = ah.ja[player],
			jb = ah.jb[player],
			jc = ah.jc[player],
			jd = ah.jd[player],
			jF = bP.hx(0),
			jG = bP.hz(0),
			jH = bP.hx(i.j),
			jI = bP.hz(i.k);
		ja < jH && jF < jb && jc < jI && jG < jd && (aOx[player] = 0, aPI = !0)
	}, this.nQ = function(c1) {
		return !(!aPI && !c1 && bi.eg < aPH + (1 === aP9 && 0 === aP7 && 0 === aP8 && (aE.a96() || aE.i5 || 2 === aE.a49) ? 1e3 : aEw) || (aPS(aPC), 0))
	}, this.aPY = function(aC) {
		return aPU(aC) * aOz[aC]
	}, this.aPZ = function(player) {
		return aOz[player]
	}, this.el = function() {
		bi.kz() % 10 == 9 && (aPI = aPI || aE.a98() && !aE.a96()), !aE.a96() && 4 <= ++aOu && function() {
			var aC, fz, g0;
			for (aOu = 0, g0 = 4; 1 <= g0; g0--)
				for (fz = am.lY - 1; 0 <= fz; fz--) aC = am.ld[fz] + g0 * aE.fd, 0 < aH5[aC] && aH5[aC] < 255 && aH5[aC]--;
			if (2 !== aE.a49)
				for (fz = am.lY - 1; 0 <= fz; fz--) aC = am.ld[fz], 0 < aH5[aC] && aH5[aC] < 255 && aH5[aC]--
		}();
		var aC, fz, fg = Math.floor(.1 * am.lY);
		for (fg = (fg = fg < 8 ? 8 : fg) > am.lY ? am.lY : fg, aC = aOt + fg - 1; aOt <= aC; aC--) fz = aC % am.lY, ! function(aC) {
			var ik = aPU(aC) * aOz[aC];
			0 < aOx[aC] && aPy(aC, aOv[aC], aOw[aC], aOx[aC], aOy[aC]) ? ! function(aC) {
				for (var fn, fp, j, k, fK = !1, g0 = 0; g0 < 8; g0++) {
					if (j = aOx[aC] + 2, k = aOy[aC] + 2, j > ah.jb[aC] - ah.ja[aC] + 1 || k > ah.jd[aC] - ah.jc[aC] + 1) return fK;
					if (fn = aOv[aC] - 1, fp = aOw[aC] - 1, !aPy(aC, fn, fp, j, k)) return fK;
					aOv[aC] = fn, aOw[aC] = fp, aOx[aC] = j, aOy[aC] = k, fK = !0
				}
				return fK
			}(aC) && function(aC, ik) {
				for (var fn, fp, j, k, fK = !1, aHE = aOx[aC], oH = 1 + Math.floor(.02 * aHE), g0 = 1; g0 < 5; g0++) {
					if ((j = aHE + g0 * oH) > ah.jb[aC] - ah.ja[aC] + 1) return fK;
					if ((k = aQ4(ik, j)) > ah.jd[aC] - ah.jc[aC] + 1) return fK;
					fn = ah.ja[aC] + Math.floor(Math.random() * (ah.jb[aC] - ah.ja[aC] + 2 - j)), fp = ah.jc[aC] + Math.floor(Math.random() * (ah.jd[aC] - ah.jc[aC] + 2 - k)), aPy(aC, fn, fp, j, k) && (aOv[aC] = fn, aOw[aC] = fp, aOx[
						aC] = j, aOy[aC] = k, fK = !0)
				}
				return fK
			}(aC, ik) && aQ1(aC) : ! function(aC, ik) {
				var k, fn = aOv[aC] + 1,
					fp = aOw[aC] + 1,
					j = aOx[aC] - 2;
				for (;;) {
					if (j < 1) {
						aOx[aC] = 0;
						break
					}
					if (k = aQ4(ik, j), aPy(aC, fn, fp, j, k)) return aOv[aC] = fn, aOw[aC] = fp, aOx[aC] = j, aOy[aC] = k, 1;
					fn++, fp++, j -= 2
				}
				return
			}(aC, ik) ? function(aC, ik) {
				var fn, fp, j, k, g0, oN, kI = ah.jb[aC] - ah.ja[aC] + 1,
					aQ5 = Math.floor(.02 * kI);
				for (oN = -6 * (aQ5 = aQ5 < 1 ? 1 : aQ5), g0 = kI; oN <= g0; g0 -= aQ5)
					if (k = aQ4(ik, j = 0 < g0 ? g0 : 1), fn = ah.ja[aC] + Math.floor(Math.random() * (ah.jb[aC] - ah.ja[aC] + 2 - j)), fp = ah.jc[aC] + Math.floor(Math.random() * (ah.jd[aC] - ah.jc[aC] + 2 - k)), aPy(aC, fn, fp, j, k))
						return aOv[aC] = fn, aOw[aC] = fp, aOx[aC] = j, aOy[aC] = k
			}(aC, ik) : aQ1(aC)
		}(am.ld[fz]);
		aOt = (aOt += fg) % am.lY
	}, this.nK = function() {
		var aC, hE, a3H, a3I;
		if (bi.kz() % 4 == 1)
			for (aC = am.lY - 1; 0 <= aC; aC--) hE = am.ld[aC], ad.aCs[hE] < 2 || ((a3H = Math.max(aPL[hE] - 1, 0)) === (a3I = Math.max(aPM[hE] - 1, 0)) ? 0 === a3H && (ad.aCs[hE] %= 2) : 0 === a3I && ad.aCs[hE] < 6 && (ad.aCs[hE] += 4), aPL[
				hE] = a3H, aPM[hE] = a3I)
	}, this.aAo = function(player) {
		var aC = player + 2 * aE.fd,
			eh = aH5[aC];
		return 0 < eh && (aO.a4H(50, player), aH5[aC] = 0, 255 === eh)
	}, this.a9o = function(player) {
		return 255 === aH5[player + 2 * aE.fd]
	}
}

function ck() {
	var aQ8, aQ9, aQA;
	this.dr = function() {
		aQ8 =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aQ9 =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aQA = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var aB6 = ["K ", " Y", "E ", " Z", " z", " s", "S "], aIW = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aC = aQ8.length - 1; 0 <= aC; aC--)
			for (var fz = aB6.length - 1; 0 <= fz; fz--) aQ8[aC] = aQ8[aC].replace(aB6[fz], aIW[fz]);
		if (__fx.settings.realisticNames) aQ8 = realisticNames;
	}, this.a8t = function() {
		var fg = aE.l2,
			a2e = ah.a2e,
			a4s = ah.a4s,
			playerNamesData = aE.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < fg)
			for (var aC = 0; aC < fg; aC++) a2e[aC] = a4s[aC] = "Player " + az.kJ(1e3);
		else
			for (aC = 0; aC < fg; aC++) a2e[aC] = a4s[aC] = __fx.nameFilter.filter(playerNamesData[aC])
	}, this.a8 = function() {
		if (9 === aE.lK) {
			for (var eO = az.random(), aQG = aQA, aQH = aQ9, iQ = aF.iQ, fg = aQG.length, lx = aE.data.teamPlayerCount[7], a2e = ah.a2e, a4s = ah.a4s, aC = lx - 1; aC >= aE.l2; aC--) a2e[aC] = a4s[aC] = aQG[(aC + eO) % fg];
			for (fg = aQH.length - 1, aC = lx; aC < aE.fd; aC++) a2e[aC] = a4s[aC] = aQH[iQ[aC] ? fg : aC % fg]
		} else(2 === aE.data.playerNamesType ? function() {
			for (var fg = aE.fd, a2e = ah.a2e, a4s = ah.a4s, playerNamesData = aE.data.playerNamesData, aC = aE.l2; aC < fg; aC++) a2e[aC] = a4s[aC] = __fx.nameFilter.filter(playerNamesData[aC])
		} : 1 === aE.data.playerNamesType ? function() {
			for (var a2e = ah.a2e, a4s = ah.a4s, aC = aE.l2; aC < aE.fd; aC++) a2e[aC] = a4s[aC] = "Bot " + az.kJ(1e3)
		} : function() {
			for (var aQI = aQ8, fg = aQI.length, eO = az.random(), a2e = ah.a2e, a4s = ah.a4s, aC = aE.l2; aC < aE.fd; aC++) a2e[aC] = a4s[aC] = aQI[(aC + eO) % fg]
		})()
	}
}

function d3() {
	this.aQJ = [], this.aQK = [], this.dr = function() {
		this.aQJ = [], this.aQK = []
	}, this.el = function() {
		0 <= this.aQJ.length && this.aQL(this.aQJ), 0 <= this.aQK.length && this.aQL(this.aQK)
	}, this.aQL = function(h) {
		for (var g0 = -1, aC = h.length - 1; 0 <= aC; aC--)
			if (h[aC].eg--, h[aC].eg <= 0) {
				g0 = aC;
				break
			} for (aC = g0; 0 <= aC; aC--) h.shift()
	}, this.a9h = function(id, wu, aQM) {
		return this.g1(this.aQJ, id, wu, aQM)
	}, this.aQN = function(id, wu, aQM) {
		return this.g1(this.aQK, id, wu, aQM)
	}, this.g1 = function(h, id, wu, aQM) {
		return ! function(h, id, wu) {
			var aC, iZ;
			for (aC = wu.length - 1; 0 <= aC; aC--)
				for (iZ = h.length - 1; 0 <= iZ; iZ--)
					if (h[iZ].player === wu[aC] && id === h[iZ].id) return 1;
			return
		}(h, id, wu) && (aQM && function(h, id, wu) {
			var aC;
			for (aC = wu.length - 1; 0 <= aC; aC--) h.push({
				player: wu[aC],
				id: id,
				eg: 384
			})
		}(h, id, wu), !0)
	}
}

function cj() {
	this.a4s = new Array(aE.fd), this.a2e = new Array(aE.fd), this.a7b = new Uint8Array(aE.fd), this.ne = new Uint8Array(aE.fd), this.ja = new Uint16Array(aE.fd), this.jc = new Uint16Array(aE.fd), this.jb = new Uint16Array(aE.fd), this.jd =
		new Uint16Array(aE.fd), this.hU = new Uint32Array(aE.fd), this.a1k = new Uint32Array(aE.fd), this.hi = new Uint32Array(aE.fd), this.h8 = null, this.hM = null, this.hN = null, this.g5 = null, this.sl = new Uint16Array(aE.fd), this.k5 =
		new Uint16Array(aE.fd), this.k6 = new Uint16Array(aE.fd), this.a4n = new Uint16Array(aE.fd), this.a4l = new Uint8Array(aE.fd), this.a7k = new Uint16Array(aE.fd), this.dr = function() {
			this.a4s.fill(""), this.a2e.fill(""), this.a7b.fill(0), this.ne.fill(0), this.ja.fill(0), this.jc.fill(0), this.jb.fill(0), this.jd.fill(0), this.hU.fill(0), this.a1k.fill(0), this.hi.fill(0), this.h8 = new Array(aE.fd), this.hM =
				new Array(aE.fd), this.hN = new Array(aE.fd), this.g5 = new Array(aE.fd), this.sl.fill(0), this.k5.fill(0), this.k6.fill(0), this.a4n.fill(0), this.a4l.fill(0), this.a7k.fill(0)
		}
}

function d1() {
	this.aHf = function(player) {
		aH.nd(player), aE.a4B++, ah.a7b[player] = 2, ah.a4n[player] = bl.a51.aNB(), player === aE.fQ && (aY.show(!1, !1), aX.aFd(), bU.a3v.a4j()), ag.aAo(player)
	}
}

function cc() {
	this.ld = null, this.lY = 0, this.a8x = function() {
		for (this.lY = 0, aC = aE.fd - 1; 0 <= aC; aC--) 0 !== ah.ne[aC] && this.lY++;
		this.ld = new Uint16Array(this.lY);
		for (var fg = 0, aC = 0; aC < aE.fd; aC++) 0 !== ah.ne[aC] && (this.ld[fg++] = aC)
	}, this.nJ = function() {
		for (var hU = ah.hU, a1k = ah.a1k, a4l = ah.a4l, ld = am.ld, aC = am.lY - 1; 0 <= aC; aC--) {
			var hE = ld[aC],
				eh = hU[hE],
				lx = a1k[hE];
			eh <= bO.g7(lx, 4) ? al.dz(hE) : lx <= eh ? 250 <= (a1k[hE] = eh) && (a4l[hE] = 1) : a1k[hE] = lx - Math.max(1, bO.g7(lx - eh, 1e3))
		}
		this.aQR()
	}, this.aQR = function() {
		for (var ne = ah.ne, lw = this.ld, aGL = this.lY, aC = aGL - 1; 0 <= aC; aC--) 0 === ne[lw[aC]] && (lw[aC] = lw[--aGL]);
		this.lY = aGL
	}
}

function cd() {
	var aQS = new Uint16Array(aE.fd),
		aQT = 0;

	function aQX(aAv, aQV) {
		var eq = bi.kz();
		return 3213 <= eq ? 4 + bO.g7(100 * aQV, af.ki(aAv)) : (aAv = 1 + bO.g7(aE.km, 300), eq < 357 ? 2 + bO.g7(100 * aQV, aAv) : eq < 714 ? 2 + bO.g7(100 * aQV, 4 * aAv) : eq < 1071 ? 2 + bO.g7(100 * aQV, 10 * aAv) : eq < 2142 ? 2 + bO.g7(100 *
			aQV, 30 * aAv) : 2 + bO.g7(100 * aQV, 100 * aAv))
	}

	function aQW(aAv) {
		return aE.lM || 4284 <= bi.kz() || bD.h2.kP(aAv)
	}
	this.dr = function() {
		aQS.fill(0), aQT = 15
	}, this.iL = function(ru) {
		var player = aE.fQ;
		return !!bD.h2.sn(player, ru) && !(!bD.h2.sD(player, bD.h2.jJ(player, aS.iB()), ru) || (player = ru, ru = bR.gD[0], !aQW(player) && aQS[player] + aQX(player, ru) > aQT))
	}, this.ep = function(aAv, aQV) {
		if (!aQW(aAv)) {
			aQV = aQX(aAv, aQV);
			if (aQS[aAv] + aQV > aQT) return !1;
			aQS[aAv] += aQV
		}
		return !0
	}, this.el = function() {
		bi.kz() % 100 == 99 && (bi.kz() < 1071 ? aQT += 4 : bi.kz() < 2142 ? aQT += 6 : bi.kz() < 3213 ? aQT += 8 : aQT += 10)
	}
}

function cl() {
	var aQY;
	this.lT = null, this.lS = 0, this.dr = function() {
		aQY = [], 9 === aE.lK && this.aQZ()
	}, this.aQZ = function() {
		this.lT = [0, 0, 0, 0, 0, 0];
		for (var aQa = [254, 227, 167, 149, 102, this.lS = 0, 0, 0], aQb = [0, 8, 24, 30, 46, 80, 256, 333], aQc = [0, 0, 3, 9, 17, 25, 150, 179], k = aE.l2, aC = 1; aC < aQa.length; aC++)
			if (k <= aQb[aC]) {
				this.lS = aQa[aC - 1] - bO.g7((k - aQb[aC - 1]) * (aQa[aC - 1] - aQa[aC]), aQb[aC] - aQb[aC - 1]), this.lT[5] = aQc[aC - 1] - bO.g7((k - aQb[aC - 1]) * (aQc[aC - 1] - aQc[aC]), aQb[aC] - aQb[aC - 1]), this.lT[0] = aE.fd - k - this
					.lS - this.lT[5];
				break
			} aE.lO = aE.fd - aE.l2, aE.data.numberTeams = (0 < aE.l2) + (0 < aE.lO), aE.data.playerCount = aE.a1G = aE.l2 + aE.lO, aE.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aE.l2 + this.lS, aE.lO - this.lS]), aE.a8l.a8r()
	}, this.aNI = function(player) {
		aQY.push({
			player: player,
			h9: 14 + az.kJ(20)
		})
	}, this.el = function() {
		if (9 === aE.lK)
			for (var aC = aQY.length - 1; 0 <= aC; aC--) --aQY[aC].h9 <= 0 && (ag.sv(aQY[aC].player, 0, ak.q3.a2z + ak.q3.a3D), aQY.splice(aC, 1))
	}
}

function dK() {
	this.aQe = 25, this.aQf = 13, this.aNU = 4096, this.fr = 0, this.fs = 0, this.a0i = null, this.a0e = null, this.a0f = null, this.a0j = null, this.fM = 0, this.mapSeed = 0, this.a0g = !1, this.a0h = new aQg, this.xB = new aQh, this.aBD = new aQi;
	var aQj = {
		aQk: function() {},
		dr: function() {}
	};

	function aQt() {
		return {
			fr: bV.fr,
			fs: bV.fs,
			a0i: bV.a0i,
			a0e: bV.a0e,
			a0f: bV.a0f,
			a0j: bV.a0j,
			fM: bV.fM,
			mapSeed: bV.mapSeed,
			a0g: bV.a0g
		}
	}

	function aQu(g8) {
		bV.fr = g8.fr, bV.fs = g8.fs, bV.a0i = g8.a0i, bV.a0e = g8.a0e, bV.a0f = g8.a0f, bV.a0j = g8.a0j, bV.fM = g8.fM, bV.mapSeed = g8.mapSeed, bV.a0g = g8.a0g
	}

	function aQm(aC) {
		return !(1 === aC || !bV.aIl(aC) || aC === bV.aQy())
	}
	this.dr = function() {
		this.xB.dr()
	}, this.a8 = function(map, aQl) {
		((map %= this.aQe) !== this.fM || aQm(this.fM) && aQl !== this.mapSeed) && (this.a0g = !1, this.a0h.aQk(), az.a8s(map), this.fM = map, this.mapSeed = aQl, aQm(map) && (bV.xB.a0Z[map].aQn = aQl), this.aIl(this.fM) ? (map = bV.xB.a0Z[this
			.fM], this.fr = map.j, this.fs = map.k, az.a8s(map.aQn), ar.a8([this.fr, this.fs, map.nj, map.ng]), aQp(), aq.aQq(), ar.aQr()) : aQo())
	}, this.aQs = function(map, aQl) {
		var gP = aQt(),
			map = (this.a8(map, aQl), this.a0h.aQk(), aQt());
		return aQu(gP), map
	}, this.aJh = function(map, aQl) {
		var gP = aQt(),
			aQn = az.aQv(),
			aQw = this.xB.a0Z[map].aQn,
			aQx = this.a0h,
			aQl = (this.a0h = aQj, this.a8(map, aQl), this.a0i);
		return this.a0h = aQx, this.xB.a0Z[map].aQn = aQw, az.a8s(aQn), aQu(gP), aQl
	}, this.a9E = function(canvas) {
		canvas && this.a0i !== canvas && (this.fr = canvas.width, this.fs = canvas.height, this.a0i = canvas, this.a0e = this.a0i.getContext("2d", {
			alpha: !1
		}), this.ii = this.a0e.getImageData(0, 0, this.fr, this.fs), this.a0j = this.ii.data, this.fM = this.aQy(), this.mapSeed = 0, bV.xB.a0Z[this.fM].name = aE.data.mapName)
	}, this.fL = function(aC) {
		return 3 === aC || 7 === aC || 9 === aC || 21 === aC || aC === this.aQy()
	}, this.aQz = function(aC) {
		return 2 === aC || 7 === aC || 9 === aC || 20 === aC
	}, this.aR0 = function(aC) {
		return 1 === aC
	}, this.aQy = function() {
		return this.aQe
	}, this.aIl = function(aC) {
		return void 0 === this.xB.a0Z[aC].aR1
	}, this.aJc = aQm, this.a9D = function(q1) {
		return 0 === q1.mapType ? q1.mapProceduralIndex < 10 ? q1.mapProceduralIndex : 10 + q1.mapProceduralIndex : 1 === q1.mapType ? 10 <= q1.mapRealisticIndex ? 22 + q1.mapRealisticIndex - 10 : q1.mapRealisticIndex + 10 : void 0
	}, this.aIm = function(q1, aR2) {
		0 === q1.mapType ? q1.mapProceduralIndex = aR2 < 10 ? aR2 : aR2 - 10 : 1 === q1.mapType && (q1.mapRealisticIndex = aR2 - (22 <= aR2 ? 12 : 10))
	}
}

function aQg() {
	function aRB() {
		bV.a0h.el()
	}

	function aRG(hE, aRF) {
		0 < aRF && (bV.a0j[hE] += aRF, bV.a0j[hE + 1] += aRF, bV.a0j[hE + 2] += aRF)
	}

	function iy(hE) {
		return bV.a0j[hE + 2] > bV.a0j[hE] && bV.a0j[hE + 2] > bV.a0j[hE + 1]
	}
	this.aDq = -1, this.a5E = 0, this.aR3 = 0, this.aR4 = 8, this.aR5 = 32, this.aR6 = 8, this.aR7 = 32, this.aR8 = [0, 0], this.aCs = [0, 0, 0, 0], this.jU = null, this.aR9 = !0, this.aRA = !1, this.aQk = function() {
		-1 !== this.aDq && clearTimeout(this.aDq), this.aDq = -1, this.jU = null, ar.aQr()
	}, this.dr = function() {
		7 === ab.a5K() || this.aRA || (this.aR9 = !0, this.a5E = 0, this.aR3 = 1, this.aR8 = [bV.xB.a0Z[bV.fM].a10[0], bV.xB.a0Z[bV.fM].a11[0]], this.aCs = [bV.xB.a0Z[bV.fM].aR1[3], bV.xB.a0Z[bV.fM].aR1[4], bV.xB.a0Z[bV.fM].aR1[5], bV.xB.a0Z[bV
			.fM].aR1[6]], this.aR4 = bV.xB.a0Z[bV.fM].aR1[7], this.aR5 = bV.xB.a0Z[bV.fM].aR1[8], this.aR6 = bV.xB.a0Z[bV.fM].aR1[9], this.aR7 = bV.xB.a0Z[bV.fM].aR1[10], this.aR9 ? this.aDq = setTimeout(aRB, 16) : this.el())
	}, this.el = function() {
		if (8 === ab.a5K() && aI.nx()) this.aDq = setTimeout(aRB, 16);
		else {
			if (0 === this.a5E) {
				var aQn = az.aQv();
				if (az.a8s(bV.xB.a0Z[bV.fM].aR1[2]), ar.a8([bV.fr, bV.fs, bV.xB.a0Z[bV.fM].aR1[0], bV.xB.a0Z[bV.fM].aR1[1]]), az.a8s(aQn), this.jU = ar.aRC(), this.a5E++, this.aR9) return void(this.aDq = setTimeout(aRB, 16))
			}
			for (var hE, fS, aQn = this.aR9 ? 10 : 1e6, aQn = bV.fs - this.aR3 - 1 < aQn ? bV.fs - this.aR3 - 1 : aQn, a1x = this.aR3 + aQn, fp = this.aR3; fp < a1x; fp++)
				for (var fn = 1; fn < bV.fr - 1; fn++) iy(hE = 4 * (fS = fn + fp * bV.fr)) ? this.aRD(hE, fS, 1) : (this.aRD(hE, fS, 0), function(fn, fp, hE) {
					return 1 < fn && iy(hE - 4) || fn < bV.fr - 2 && iy(hE + 4) || 1 < fp && iy(hE - 4 * bV.fr) || fp < bV.fs - 2 && iy(hE + 4 * bV.fr)
				}(fn, fp, hE) && this.aRE(fn, fp));
			this.aR3 = a1x, this.aR3 >= bV.fs - 1 ? (bV.a0e.putImageData(bV.a0f, 0, 0, 1, 1, bV.fr - 2, bV.fs - 2), bi.dy = !0, this.aQk()) : this.aR9 && (this.aDq = setTimeout(aRB, 16))
		}
	}, this.aRD = function(hE, fS, eP) {
		aRG(hE, Math.floor(this.aR8[eP] + this.aCs[eP] * this.jU[fS] / 1e4) - bV.a0j[hE])
	}, this.aRH = function(hE, eO, aRI, eP, aCs) {
		aRG(hE, Math.floor(this.aR8[eP] + (1 - eO / aRI) * aCs) - bV.a0j[hE])
	}, this.aRE = function(mH, mI) {
		for (var hE, eO, aRI, aDg = mH - this.aR5, aRJ = mI - this.aR5, a1y = mH + this.aR5, a1x = mI + this.aR5, aDg = aDg < 1 ? 1 : aDg, a1y = a1y > bV.fr - 2 ? bV.fr - 2 : a1y, a1x = a1x > bV.fs - 2 ? bV.fs - 2 : a1x, fp = aRJ < 1 ? 1 :
			aRJ; fp <= a1x; fp++)
			for (var fn = aDg; fn <= a1y; fn++) iy(hE = 4 * (fn + fp * bV.fr)) ? (aRI = this.aR4 + (this.aR5 - this.aR4) * this.jU[fn + bV.fr * fp] / 1e4, Math.abs(mH - fn) > aRI || Math.abs(mI - fp) > aRI || aRI <= (eO = Math.sqrt((mH - fn) * (
				mH - fn) + (mI - fp) * (mI - fp))) || this.aRH(hE, eO, aRI, 1, this.aCs[3])) : (aRI = this.aR6 + (this.aR7 - this.aR6) * this.jU[fn + bV.fr * fp] / 1e4, Math.abs(mH - fn) > aRI || Math.abs(mI - fp) > aRI || aRI <= (eO = Math
				.sqrt((mH - fn) * (mH - fn) + (mI - fp) * (mI - fp))) || this.aRH(hE, eO, aRI, 0, this.aCs[2]))
	}
}

function aQp() {
	var vA = aRK(bV.fM);
	vA && aRL(vA[0], vA[1], vA[2], vA[3], vA[4])
}

function aRK(fM) {
	return 2 === fM ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === fM ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === fM ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === fM ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === fM ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aRL(aRM, aRN, aRO, aRP, aRQ) {
	for (var fn, fp, aNq, aNr, a6Z, aRT, j3 = aRM.length - 1, aRR = bV.fr + bV.fs, fg = (aRR *= aRR, aRO.length), aRS = Array(fg), aC = fg - 1; 0 <= aC; aC--) aRS[aC] = aRO[aC] * aRO[aC];
	var aRU = new Array(fg),
		aH2 = new Array(fg),
		aRV = new Array(fg),
		g8 = ar.aRC();
	if (void 0 === aRQ)
		for (aRQ = new Array(fg), aC = fg - 1; 0 <= aC; aC--) aRQ[aC] = 0;
	for (aC = 1; aC < fg; aC++) aRU[aC] = aRS[aC] - aRS[aC - 1], aH2[aC] = aRP[aC] - aRP[aC - 1], aRV[aC] = aRQ[aC] - aRQ[aC - 1];
	for (fn = bV.fr - 1; 0 <= fn; fn--)
		for (fp = bV.fs - 1; 0 <= fp; fp--) {
			for (aNq = aRR, aC = j3; 0 <= aC; aC--) aNq = (aNr = (fn - aRM[aC]) * (fn - aRM[aC]) + (fp - aRN[aC]) * (fp - aRN[aC])) < aNq ? aNr : aNq;
			for (a6Z = aRP[fg - 1], aRT = aRQ[fg - 1], aC = 1; aC < fg; aC++)
				if (aNq < aRS[aC]) {
					a6Z = aRP[aC - 1] + aMd((aNq - aRS[aC - 1]) * aH2[aC], aRU[aC]), aRT = aRQ[aC - 1] + aMd((aNq - aRS[aC - 1]) * aRV[aC], aRU[aC]);
					break
				} aRW(bV.fr * fp + fn, a6Z, aRT, g8)
		}
}

function aRW(eP, a6Z, aRT, g8) {
	a6Z < 500 ? g8[eP] = bO.g7(g8[eP] * a6Z * 2, 1e3) : 500 < a6Z && (g8[eP] += bO.g7(2 * (1e4 - g8[eP]) * (a6Z - 500), 1e3)), g8[eP] += bO.g7(aRT * (10 * a6Z - g8[eP]), 1e3)
}

function cn() {
	var aRX;

	function aRh(a70, ik, fn, fp, globalAlpha) {
		bV.a0e.save(), bV.a0e.globalAlpha = globalAlpha, bV.a0e.imageSmoothingEnabled = !1, bV.a0e.scale(ik, ik), bV.a0e.drawImage(a70, Math.floor(fn * (bV.fr / ik - a70.width)), Math.floor(fp * (bV.fs / ik - a70.height))), bV.a0e.restore()
	}
	this.aBA = 0, this.aBB = 0, this.aBC = 0, this.aBD = 0, this.dr = function() {
		(aRX = new Array(bV.aQe))[0] = {
			j: [0, 5e3, 8e3, 1e4],
			eO: [220, 250, 255, 220],
			vn: [190, 220, 0, 0],
			g0: [170, 200, 0, 0]
		}, aRX[1] = {
			j: [0, 4e3, 5e3, 6e3, 1e4],
			eO: [25, 0, 100, 0, 25],
			vn: [25, 0, 0, 0, 25],
			g0: [25, 0, 0, 0, 25]
		}, aRX[2] = {
			j: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			eO: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			vn: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			g0: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aRX[3] = {
			j: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			eO: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			vn: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			g0: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aRX[4] = {
			j: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			eO: [10, 10, 20, 10, 10, 170, 212],
			vn: [20, 20, 60, 100, 100, 110, 170],
			g0: [70, 70, 160, 30, 30, 60, 120]
		}, aRX[5] = {
			j: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			eO: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			vn: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			g0: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aRX[6] = {
			j: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			eO: [10, 10, 60, 255, 255, 200, 200],
			vn: [10, 10, 60, 255, 255, 200, 200],
			g0: [80, 80, 255, 255, 255, 200, 200]
		}, aRX[7] = {
			j: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			eO: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			vn: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			g0: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aRX[8] = {
			j: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			eO: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			vn: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			g0: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aRX[9] = {
			j: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			eO: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			vn: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			g0: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aRX[20] = {
			j: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			eO: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			vn: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			g0: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aRX[21] = {
			j: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			eO: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			vn: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			g0: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aQq = function() {
		var aRg, aC, fz, gP, ii = function() {
				var ii;
				return bV.a0i = document.createElement("canvas"), bV.a0i.width = bV.fr, bV.a0i.height = bV.fs, bV.a0e = bV.a0i.getContext("2d", {
					alpha: !1
				}), ii = bV.a0e.getImageData(0, 0, bV.fr, bV.fs), bV.a0j = ii.data, ii
			}(),
			j = aRX[bV.fM].j,
			eO = aRX[bV.fM].eO,
			vn = aRX[bV.fM].vn,
			g0 = aRX[bV.fM].g0,
			g8 = ar.aRC(),
			fg = j.length - 2,
			aRb = new Array(1 + fg),
			aRc = new Array(1 + fg),
			aRd = new Array(1 + fg),
			aRe = new Array(1 + fg);
		for (fz = fg; 0 <= fz; fz--) aRb[fz] = j[fz + 1] - j[fz], aRc[fz] = eO[fz + 1] - eO[fz], aRd[fz] = vn[fz + 1] - vn[fz], aRe[fz] = g0[fz + 1] - g0[fz];
		for (aC = bV.fr * bV.fs - 1; 0 <= aC; aC--)
			for (fz = fg; 0 <= fz; fz--)
				if (g8[aC] >= j[fz]) {
					gP = g8[aC] - j[fz], bV.a0j[4 * aC] = eO[fz] + aMd(aRc[fz] * gP, aRb[fz]), bV.a0j[4 * aC + 1] = vn[fz] + aMd(aRd[fz] * gP, aRb[fz]), bV.a0j[4 * aC + 2] = g0[fz] + aMd(aRe[fz] * gP, aRb[fz]), bV.a0j[4 * aC + 3] = 255;
					break
				} bV.a0e.putImageData(ii, 0, 0), bV.aR0(bV.fM) && ac.vr() && bV.aR0(bV.fM) && (ii = ac.x1("arena"), aRg = ac.x1("territorial.io"), aRh(ii, 5, .5, .5, .1), aRh(aRg, 2, .5, .45, .1)), bV.a0g = !0, bi.dy = !0
	}, this.a8v = function() {
		for (var hE, fn, fp, aRi, iX, gR, aBB = 0, j = bV.fr, k = bV.fs, gP = j * k * 4, aRj = aGb, aRk = bV.a0j, aC = j - 1; 0 <= aC; aC--) aRj[(hE = aC << 2) + 2] = aRj[gP - hE - 2] = 3;
		for (gP = 4 * j, aC = k - 1; 0 <= aC; aC--) aRj[(hE = aC * gP) + 2] = aRj[hE + gP - 2] = 3;
		for (aRi = j - 1, iX = k - 1, fp = 1; fp < iX; fp++)
			for (gP = fp * j, fn = 1; fn < aRi; fn++) gR = 1 - (aRk[(hE = gP + fn << 2) + 2] > aRk[hE + 1] && aRk[hE + 2] > aRk[hE]), aRj[hE + 2] = 6 - 5 * gR, aBB += gR;
		this.aBA = (j - 2) * (k - 2), this.aBD = 0, bV.fL(bV.fM) && (bV.aBD.aRl(), bV.aBD.aRm(4, 5)), this.aBB = aE.km = aBB - this.aBD, this.aBC = this.aBA - this.aBB - this.aBD, this.aBC && (bV.aBD.aRm(6, 2), bV.aBD.aRn())
	}
}

function aQo() {
	var pU;
	10 === bV.fM ? pU =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bV.fM ? pU =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bV.fM ? pU =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bV.fM ? pU =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bV.fM ? pU =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bV.fM ? pU =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bV.fM ? pU =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bV.fM ? pU =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bV.fM ? pU =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bV.fM ? pU =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bV.fM ? pU =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bV.fM ? pU =
		"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-" :
		24 === bV.fM && (pU =
			"SgAw3LR2oV-FhaeaePePePaePdePePPyaaeaeddePePPadePaaePaddaaOaOaOKKOOGLK_JJKJGG3JJJGGKGLLQdGHJJG444KFl0JLKaJ3KLKKaKJ_4GKJKJGGJJK44GGK3G4JKGJGJG3FLLLJOJK0LKK4KJKKGJKG_JJKK-304045K0-AV-7fxSpppKKMF-V---V--3-18i-0J-4-USUJlV-N-9-1WDK--F-4Bx-7-V0OvdePaaaPPPPffefeiideeeeeieveeaaaOGJOLOLOeea_beeeTfeieeieKKe_Pu_LKMefnnyzvevydijjivvuvffeuLPviuviiviyyzizyzjzjzjyyzwzueTYF2BnzzzzywzzzzEzEzE22nyzjzzzzjnzznnnnwwkkkF-BnBwnBnBn2EBwnBwBn-knBwnEBEEnnnnnnn2nEBnkwzzzzwznznwzzzznnnEEywnwwn22-zyvnEveKdiuviyvvjzjzzEEBnn2nEvvyivfeuvviyzjjsn22-EzEzyzvyuizwwzvzvyvBk2EzEffyznzzznzvEnEBnEsn2EkEEnnnEsn2yzyw---F85---AeA--k5qSlnzvTe-evnzEw-nfn-kwn2BnnwzznmzjvznknzBnBnzjjzzkuzzyyzzyzizzwzvzyzzyvvvjzwwBnEyzEjiffjnwwknBnEB-kn2-BnBnBnEEnwnBwwvzAiwnzizwznz-GJ3BkkkknBn-222Ewk-BwwkwnwzzEBknzEEEBkF3GGG43G030-F2-30-F--BBknBBknBkwk02nBwzBknBn2EBnBBE2222EEzzEn-G04GzBnBBnnBzEwzznznzwzznzEzzwwn22BnwwwwwwwzEnnwznEBn2nwkB-FB33G-kvjEkk04K--0-JF-B-2-B-3kkn22BnnnnyzEBnnEBwwnBwzDufizzjzzyuezyzzk2ifvzzzzAiOevzizAzujiqiznwAvyuvw3Byzj-nznnjn-B3knBjwnBkBwz-kkwzznzEBvzwwzzEEEnBkBBkBnEw2B-nwnnnEDzvyyzijjEivjjvivvjiviz1yzvvfivfeeeieuPufijivffeuaeeaaezwzjiuOevzvvvffvevvPtKefizBBjzvvjivjiiiuuuizniivvuyjeeyyvuvjfiuvfzvjzjiviiivnnBwzjjvvznEviviiuvuveuiefwnjnEiyyyOaOPewwwzzkznziiuuuuvaOeafjvizAvjivivzwknEjiivffeieuifeuivjfffeueueiffijfeddaKKaLLPeveePadeO_ZG44_aO_LKLaO_4K3LLL4OPO_OOKOLKK4OKKK___JJJG3GKJ-JKK_KaPfO__443-JKe__aLPOeOeiPfeivjvfizwzzziizDyyvfjiyyvzjjivjvvvjEzzzvvviviiuiiizwvjjjwwvvzuzE-3-222Bknk0033GB-K3F3-2Bkk-2-BBBkkkn2BkkBB2Defddeuvuzzwzjwwkkk-22Bkn2nnnnBn---3-F-BBnEBEEnnjzzBkB0GFFkk332-kK43443K33KKWK3F0-BBBk-0-nBkk2-kn-nBnnnnjdajjjjjyyzznzjzjfevfeifijfvjzyvwB--2-kk-03033GGG0FJJJG003JKJJJGJKG3JJJG3GGGG444K4JKG4JK44GGJGJK3K43G-FBwnnBnE--G0G44LKOK_K4OK_KGLKK3G444JJG3FGGG043J3G3JG3G3G003FFFF0-F-F0-FFFF30-FF33G0LNGGG4343JG3JGG43K43G3J3G03G-F0--F-0-I-2AjwEB-k-G43G0-02-222nwzBzEBwwnkzwnBzjyzBzB3AviyvhOPfLKOaPifeuueeiijivfifeviwz-B-nzk-22-k-kBvjvueaLaiuyzDuzjij-GE-G34RDyvfeiePecGFKaPvyyjmii4W3LiiuvffvviyfGPjiteviviiyviviviivzjizjvPeevivzEwzz0EEezAjjjvzzivivivivvjvjjivivp444GKGKKPizvzvvyyyzjvyvzDujyyyvvzvPvjjjjiz1ivwivfzivjjjjiuievjjvvzzvuPuehdPeaPPevivdePeteitdedeePPfiiiuyid03KaffuiviyvyyzjiyyuviuveZK4OLKPPiuyivvfevvvvvzk33KZJF0-JGBwn9fziyvPezefjevizziivivjiyeveqL_aPaeeejBvnBk0k1wniijLajknfeffw9ieeyzEn2nAujjzBwwjxaadd_K3KOaePeOaO_PefvvyyeuzvjjjiviiiuiPOPaeievivieiuPz9jk0mjfj2B-33-BnEzeevnivevfueuqPivziwk-G-n-0n-nEEiiifyiviujkAfjjnw3G33JG0-nB033F333004JB33G33G-F30mvizBvizzdaiytPjjk6BE-EEznn00-KZI-GKafiJGGF3-R-44KW2znBnEzknnnyNKOajOevz2BAnyzefjEfivijzB--030-3-33Rwk343GGKJKK4wzzzzEtezffviqeyzuPjEjkvjnB--30OOGKGG-0FFFFB0436-GLKLKGKG3KKGGG-3J3G4LLLOPOaOaKaPzznnjnyyyyyvjfvfzuvP3GOZKG6-G4GKdWk43KLFKLGGInEEEBn2B0L-G434G2Ek2fzyviiOWKefwzEBwwk3403FG3G3G3KGFG00-34G3FG3JFG-F-22B-40EB3UwBzBBufO_OfivewvvjjyyzviPuivdezwzjjzEkGG4GGGFG4362EjzyyyvfiivvizkB-303K4K3G32wwyjmyzziivvfzE-3JG3G4FKJG4eKG32-JFJ3JBnEvzjzEBnEBn0BBwnyiuzDzEnBBnwknfzzwvvyzwyzzEzwviuuuuizzEzEnzwkwzzDuOLaKaO_aOaO_deuvaPePezBnBmPPOKedfeeeiiddeefzwzBznnEEnnnzz2yd_aOfPLZ3LfePyzfizjiqOeqfjznzdaOPiKO_aifizufmvfjwEzPKLLOKW0KdcFJw-GG33G4KaPeiiufnqfPL3KaiLezvzyyvjzB-zDjiuizBzvvjzmuheevaOaJ34KOJKKOL_aeizBzjfzBkwuzyzteufutevzBn2afvwmPjjBaPiaJGKOaaeiivnBByywzzBzwnnznznwndad4OPfOfLKK__ZKddLKOdPjjwzEAzk-nmzwzEEALOajyqKdfvnBwB2BnB3G2vjnk9zwnfejEziyiwB3BnyvmqOefwzaeufvvyvvvkjzjzyjwznBwEwnEn2Bwvyyiwk20k-F-2-0-0--RBnvzEnzEzzwzyzvzjzjjzvjwvzzjiyvivivfjvjjjvzzjzznE2Bzzn2EnnnzEEjkByz0wBkkEiiw-Bn-0kkn22222knBBknBnnwyvizEvzjyzjvzBBzzn--kkKnnwBkkknBjvviuiiiPLaOddaPPaPeyiuvjivfdedeLfiuaPfaPuvjzjiifiiiaeeueifiiiuvfiiePPOPh_eaPPiPiiuehedKafiqaeePeuaddPiePejaPPPeudeuuKeeeeeeeeueeeeeeeaeePaePePaadePaaaaaaOaOaLO_aOO_OOLK_GPpaO4PLO3k40kLPqLa__nE0LOaha4PxaJLKKG3JG44GKKK44JG3G3KOOaO__OKKGJK4KKKKOOaLOOajEEBnnzyKPaOa4ZLOd4OaJBwww0LOOOOOG4LfeaaPLLJKPOdaPOaLaOaPOaOaOaLLOO__OKJKGG44GKK4KK4LOKOKKKK_FFFKO_aKKGOK4033KLKKK4GKOKJKKOKKWKKK4KKK4KK_OO_O___OLLK_K4F-FFG0G03-44KKGKKLLOKKK_KKKJG44KK4GKLKLKK4KO33JK3Bk-G36B3KKGKGK4GJKK43KKKKJGKOLK_KGKKOaOaO_OO_KKOK__aOO___aOOOaLOaPLaOaPOaaOdeaaaPaeteeeik-318nR--VGPMV-J1cyRlV0c555udY-k-2-pMrD---TOI-7kF6znBpIErxsPVV--OVfRraPOOOePfgk-BknBwo-4kWWfpA6rrX17--08DA-VFaSWpMMSUKCMKMKMKHcYpSrrHe91V-V0u-7770blcV7X-0zV-sLmjuE3--1yxm-0We-vg---zVXV-7VCwN--38Cy-5X5LvaQj-F--FniN--7WAZ-O3JLUSrr6cZe7V--XXqk-BHQVCc--8Cpw--3ebH-4XKJIivG3-43m0Ao--D8Z2aQV-1lDMlow6c--1VSI--0G87V-NcZutk-3JHWT--Xa-4k-3Jyrg-0XfZWY--0Md9V-7gHHR-64_zAr1---gk1F--Larc-9APr6h---M3Vc-PAdfbisp3--0T87V--jXGF03MzzESrP7X--skSXQh3--5Dp9-3Y8GOisF-3lcLHxrrNccV--C1nJ-25Yaju--2IeI--Gg31k--D4dJ-065XIV0svUnviglG-3ZUBSCxzUUrrzUtzts99eXeecp9999-YZ9GC_OLzyzjzzzzzzz4KJKKKGJK3-I7p_UCSlaNcV1O5jDOuUzBJJ-t8042SEUzzOtzzUaXceeeeXe-3ZbgKdsl0FmKgLnKJpKpIHc9YABomeBmnHdCBpIBgrUMHghpMUSxpBpAEMbzKCCBrUrzKAAMMrSxzrrGxEaNN5OWcNN----N0WbWVN----V5--177V0a--7-VX-JZlG8bjyzyzjlJKGK4F--8dzX-5Zqo8_vwp-23bW-gnHXmcmprzbzMsWV1-7_HRz_evn03-49jsvGV0LKrUEjiivvywl3G3JKK-0Hk36pV-8_ZGffyjoG0FUBghYRpIA9gmmeVme7eA9enAABpBeXXfBgfACpKBnIKBnBnAABhBghBgnIC0aUyUxbWWzttzrKrUxzaUzbaNmX7cV0tzzxzzJnHrqUbtzaTUbbzryOtzzxyOWVggecceVTObVTUbbbyTOzaOxqOyTUzsgeeegemn9cXc19cXXXX---4cG6--Hqlvk-HLsy5iBF-EAT2rBfEta-2_k3leB---i9AN--O9Ww-YBjdE9efIUzTUba97--OVmg-4Bo5jJ--VPRAtK39vz-4nGQwmnMqTOVe--aZXrk-Jon3xNV08gQQOik--ZqRaBrN7-LQoYjiwK-1ZrofBnJpSzStbV-7X9V3dkX8uefefgn-C-343-ID7cz9ejUTOV28mSguLfEnz3GJ-KDMtMpItbuXX-FbCT0_OayyvBwkJJ-7nbZKnSxpC5UN1-X9--bGDMV-RuaRwze--6Jvn--nfK0yV-0pgbk--v48N-PSdzTPLnB-0ni44nGV1mStzUfiuOdaPaeuyjiuzEw-00043F0-l3G-XgvurghKBegohABpBgfAHmmeceXX-7N0bs7oogpIKpCCIKrICMyUrKSpKIrSpKKMIBnKCMTUrKKBeCKpKKBopKMKHpSpoepMKq-NUrKprKbzrraOaT5-V-ObzT6zUUMUxra--0a10V-0V--N-5-0X-5NVX11-NOWaOWWV7X-1-V757X1VOse7-7BmX19cX7--T3s3-AE1RQEU-c--TDAg-4E65bR--HTE4DuV--IE7sMCFOzu9V4OtOgOOOaLPzgznnw303--ED_5-_c2G_aO_3K_5LPvevyw-EeyvY3-2-k-2o4M9mrSa7V-130zk-p1C9CUtce--7Gyf--o8DGqV-182RF-x5-RRnLTNV05YE6iOOKiivjkkB-F-x5tiBpLNNV2eYS3LLuO___KPPQfvvzgzivzvzvnwnE03FFGG4G20G4J06HD4fAKJz6zxzSrSrzX-1117Xeecc-PZq7iPQ2B--oarQnVO9IasOLLLLLLLLaLLOLLPvyuikBwzyydeevjzYvfiwwwwBkk2nBkkn-3JHO_JG02n4JBnp_4F-K8uQCNV-1JEMF-C9Ntxc-D_Psav3-5oj3TnCCJqObV7--1M_Ek-pApuzKkNX--8X1Q-FJl3bmpKzxSIKBxrqN--779e0a1--dZuzk-0BvKs-ua_1LiivvBlK43F-SCENx6e-5dgxdajn3F-0CvuN--b1no04IdRzAEUSrMMMSKaUaOX7VccXX7c-6dqdvaOvg--AJw3TpIrSzKzFT17XV7cV0PWlHPikF-Kp4NHmgpSrrSrKBnCSxrlWtV5-7-X5-XceV-9Y4vN-AJVbYSOVc-PdM-DQzCG-5KA12nBghraOa-0PdNJyKaLPOee-nBEBknB-zJhSA9gfAJmnKRUrSaOaOaT--c-SeMWzfu_snyEzvcEk05K_5K4F-0Jj6UV-1_vfF-0Hy77-1daXi-0pCEwnOV--dh4R--JuFL-6empp_ijk3--4Of_V-1hn6k1CMEoBhCROzMUVXc9--eimdyo--KUEsk-Tfu6TMzvGF--LEYu0df6q6aeLKJPK4JK8LKOgznvyvjvvyzyzgzvyyziyvvgwoK32nEywnwl4HKK5JHKJFoK38adJF43-74PMBBppJefKCISU5USUTOxxqTN7X77Y9--V6pppqP-919I9729hQ8qOevjvfjiviyvjjiynk04KKGK2-330K3G4-2KREugmoegnCBr6tbbba555V-1sxeF-KRU8UuV1PtQMPOKzgBo-4MT-nlc-9jc3qc--0UG27-qjjX5aPfcwBB-J--Mry9-8fxgpbijBBKF-KUi1CsV0uzSLPiYFC--_VBQEqPc-ekCO5eyBklOF-4N9EAGV-mkJjLiuPgn303--51edV-v1FytYB-zNK8ABppprSxrOcObxXVcXce7V-1gBbpf3-GNONISxqVXV-ql0BaOfeQYBB0354Ngc2AHnBmnBmoomnBgnA9mnI9mnA9meegegeeXxMMKJnBeXgggnIII9eXpSrMKSxrMrUzrzzbaUrrSlyVVNOtztttbWtbWa5-56bbxqOaUzX7XX97c10VNUa0WaOaT5NOWa5T--qlUJMeiawnkGGF-nNuf2BhBnCpprMtbV-N77X-0gW2lg--LFYks15m3UaOLO_daO_evVkBzwn2kzB8G-BqIIBnCCHnCE6sUwOsNV59V0Q955OaE2-0LK6JqP-9geGtdasyw30-9qNsZnIBhHnEyOa5ObXV-1nIZb-4LPlsnCrwNWe--2Cp5F0Sb82hrKr0V91V-2DHlF-hb8PBhz-V-2DlYF-0bbb7-PnuwaLNwn-2LVKHnETP72Xo1q5LLLOaOaOPPPaaTvueeQji2kn2-wBz3-Bkk-----Sd0YCGc-Dh8r0eiyvwFoJG3-YPIoIJx9AMMs5TNXV-iojDaOfyswJG-34dgJgnSBeC9pK6btyT7VTUSX91-0fKEnOaYBk-0PpKQ-1AM5LQyvkKG--5j7JV0AN2eOQn--0gUC7-yqTD5vueKvwk0G3-0qpcTmxV-Pqh7aPzl46nb6W7MtaOzxpIKCSMpKKrSxSMSrSSrSrSrxxrzUUUzbzzzbzxSzy5Orprrrrxzzbza6TOaOW_JppKrAKSrrzrrzzaUUUpxzbSzzTUyUtttttbtzzaTT50WVOyOtbttxtWbMUSztaTN5UbrSMSxzzbaOa6WWWtaOzaOtyTUbtbztztaOtzztxzbbrxyUzxzbzxzzzttztxrUrztttbtaOWbzzpKzta6Mxzzzby6aTUzzUzxySySzzzUzrryOSxrrUUUQKrUSzztzttWbbtbrzyUyUbbyOVWaTTUUxrKSzrzzSSztyUTTOV-94zxtpxzUMUxzxKSzrttzaUaSxzrzzaUtzxsUaNOWWtzbaOUtyTUb_zaUbUxrSzzxrrrvAJopSMSrrRnCMSrTTUa555UyTTOaN6btxIMMMKABnIIICCCIIBmfBenIIJpIKMKSppppprSztrCMUUUxopSopKCSprRhHnKhJofKJnIIAIIBmnCCA9gmomnABfBgoonKKKMMKrMSrSxprSzrztyTUVVN-6zUzUSxABonA-X9nCKCCKryUby-1UbSrSpCKMSrUTcenMSrzrzTOrrxrUUzxrrrrUUUSxxxxzzUzUzzzyUtzbbbbtzzTSxUUrzUzzzzUUrzzrSxxxSxxrzxxzzrzzxzzxxrSpSSSKKS-0vUHOuvwl4F-0kZgs1XsRiaaudedeaQiueQiw-wl3G0-B-32-F-fRVXnCCrKMSzX5N7cc7V1Qd2JOfiwkGF-ISqFQAILOaNV-fjC8Pl-1rXaGpxV92NjCXdaifeaLJ-3eeaeefiywzzEzjEvgznzjzEyzyvznyyeejEEzznwzEnkzzzEEnzEznnnzzvEE22-032-_dddJKaOLLaOKFFB324K__aKK4LKKHKK2JK_LK4LLO__OOKKG-3_Fn33KPeLKKKK-F3--Cu9YCV-XymfLQjz3JF1KyjcBpKrrryN199X9--Er2_--6w9TV1w48YtPevi----1sCjknrN7-Dkd8M_daQswn2BJ-4WIe2TV-Y6MNa_aRzl--5F6li-3m1odvnK-It0xxpKIpSKpKMKxJhxa-1-7--1-X--71EDbJiTeedivzEvyj2n2oKJJK4040F-qWOwRnqOc--JGhS-0P8m7xc-9oUZUaKdvwk2-8Pa5WorMUUzlXXcX7c0SNaEc322222-kifeeiee-8A3iK5N-X5SxxpMrr-"
			), (new a0S).a0U(pU)
}

function aQh() {
	this.a0Z = null, this.aRo = null, this.aRp = null, this.xC = ["White Arena", "Black Arena", "Island", "Mountains 1", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East",
		"Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Mountains 2", "World 2", "British Isles", "Mare Nostrum"
	], this.dr = function() {
		this.aRq = [L(157), L(158), L(159), L(160), L(161), L(162), L(163), L(164), L(165), L(166), L(167), L(168), L(169), L(170), L(171), L(172), L(173), L(174), L(175), L(176), L(177), L(178), L(179), L(180), "Mare Nostrum"];
		var aRr = [120, 105, 92],
			cos = [12, 12, 60],
			aRs = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aRt = [140, 130, 120],
			aRu = [12, 12, 76],
			aRv = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aRw = [130, 117, 106],
			aRx = [12, 12, 68],
			aRy = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.a0Z = new Array(bV.aQe + 1), __fx.customLobby.setMapInfo(this.a0Z), this.a0Z[0] = {
			j: 230,
			k: 230,
			nj: 1e3,
			ng: 2e3,
			aQn: 173
		}, this.a0Z[1] = {
			j: 800,
			k: 800,
			nj: 100,
			ng: 50,
			aQn: 43
		}, this.a0Z[2] = {
			j: 512,
			k: 512,
			nj: 128,
			ng: 32,
			aQn: 0
		}, this.a0Z[3] = {
			j: 960,
			k: 960,
			nj: 60,
			ng: 8,
			aQn: 0
		}, this.a0Z[4] = {
			j: 900,
			k: 900,
			nj: 100,
			ng: 5,
			aQn: 0
		}, this.a0Z[5] = {
			j: 1e3,
			k: 1e3,
			nj: 100,
			ng: 40,
			aQn: 0
		}, this.a0Z[6] = {
			j: 1e3,
			k: 1e3,
			nj: 100,
			ng: 20,
			aQn: 0
		}, this.a0Z[7] = {
			j: 1024,
			k: 1024,
			nj: 128,
			ng: 32,
			aQn: 0
		}, this.a0Z[8] = {
			j: 820,
			k: 820,
			nj: 200,
			ng: 100,
			aQn: 0
		}, this.a0Z[9] = {
			j: 1024,
			k: 1024,
			nj: 128,
			ng: 32,
			aQn: 0
		}, this.a0Z[10] = {
			a10: aRt,
			a11: aRu,
			aR1: aRv
		}, this.a0Z[11] = {
			a10: aRw,
			a11: aRx,
			aR1: aRy
		}, this.a0Z[12] = {
			a10: aRw,
			a11: aRx,
			aR1: aRy
		}, this.a0Z[13] = {
			a10: aRr,
			a11: cos,
			aR1: aRs
		}, this.a0Z[14] = {
			a10: aRr,
			a11: cos,
			aR1: aRs
		}, this.a0Z[15] = {
			a10: aRt,
			a11: aRu,
			aR1: aRv
		}, this.a0Z[16] = {
			a10: aRt,
			a11: aRu,
			aR1: aRv
		}, this.a0Z[17] = {
			a10: aRr,
			a11: cos,
			aR1: aRs
		}, this.a0Z[18] = {
			a10: aRw,
			a11: aRx,
			aR1: aRy
		}, this.a0Z[19] = {
			a10: aRr,
			a11: cos,
			aR1: aRs
		}, this.a0Z[20] = {
			j: 1024,
			k: 1024,
			nj: 128,
			ng: 32,
			aQn: 0
		}, this.a0Z[21] = {
			j: 940,
			k: 940,
			nj: 80,
			ng: 8,
			aQn: 0
		}, this.a0Z[22] = {
			a10: aRw,
			a11: aRx,
			aR1: aRy
		}, this.a0Z[23] = {
			a10: aRt,
			a11: aRu,
			aR1: aRv
		}, this.a0Z[24] = {
			a10: [157, 136, 117],
			a11: [16, 13, 68],
			aR1: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aB9: "[OG] Neutronian"
		};
		for (var aC = 0; aC < bV.aQe; aC++) this.a0Z[aC].name = this.aRq[aC];
		this.a0Z[bV.aQe] = {
			name: ""
		}, this.aRo = new Uint8Array(12);
		for (aC = 0; aC < 10; aC++) this.aRo[aC] = aC;
		for (this.aRo[10] = 20, this.aRo[11] = 21, this.aRp = new Uint8Array(bV.aQf), aC = 0; aC < 10; aC++) this.aRp[aC] = 10 + aC;
		this.aRp[10] = 22, this.aRp[11] = 23, this.aRp[12] = 24
	}
}

function aQi() {
	this.aRl = function() {
		for (var hE, fn, gP, aRj = aGb, aRk = bV.a0j, j = bV.fr, aRi = j - 1, iX = bV.fs - 1, h9 = 0, fp = 1; fp < iX; fp++)
			for (gP = fp * j, fn = 1; fn < aRi; fn++) aRk[hE = gP + fn << 2] === aRk[1 + hE] && aRk[hE] === aRk[2 + hE] && (h9++, aRj[2 + hE] = 4);
		aq.aBD = h9
	}, this.aRm = function(aS0, aS1) {
		for (var aRj = aGb, j = bV.fr, aRi = j - 1, iX = bV.fs - 1, id = 0, fp = 1; fp < iX; fp++)
			for (var gP = fp * j, fn = 1; fn < aRi; fn++) {
				var fK = 2 + (gP + fn << 2);
				aRj[fK] === aS0 && (! function(fK, id, aS0, aS1) {
					var fg = 1,
						aRj = aGb,
						fi = ad.aMU,
						a6m = [fK],
						aS3 = id >> 8 << 1,
						aS4 = 255 & id;
					aRj[fK - 2] = aS3, aRj[fK - 1] = aS4, aRj[fK] = 5;
					for (; fg;) {
						for (var a6n = [], aC = 0; aC < fg; aC++)
							for (var fV = a6m[aC], fj = 0; fj < 8; fj++) {
								var fk = fV + fi[fj];
								aRj[fk] === aS0 && (aRj[fk - 2] = aS3, aRj[fk - 1] = aS4, aRj[fk] = aS1, a6n.push(fk))
							}
						fg = (a6m = a6n).length
					}
				}(fK, id, aS0, aS1), id = (id + 1) % 32768)
			}
	}, this.aRn = function() {
		for (var aRj = aGb, j = bV.fr, aRi = j - 3, iX = bV.fs - 3, aS6 = 12 * j, fp = 3; fp < iX; fp++)
			for (var gP = fp * j, fn = 3; fn < aRi; fn++) {
				var fK = 2 + (gP + fn << 2);
				2 !== aRj[fK] || 2 === aRj[fK - 12] && 2 === aRj[12 + fK] && 2 === aRj[fK - aS6] && 2 === aRj[fK + aS6] || (aRj[fK - 2] = 1 | aRj[fK - 2])
			}
	}
}

function a8u() {
	(a2J = void 0 === a2J ? document.createElement("canvas") : a2J).width = bV.fr, a2J.height = bV.fs, a8y = a2J.getContext("2d", {
		alpha: !0
	}), a8z = aGb = null, a8z = a8y.getImageData(0, 0, bV.fr, bV.fs), aGb = a8z.data, bD.te.a0k(aGb)
}

function co() {
	var g8, j, k, max, aS7, ng, aS9, aSA, aSB, aSC, aSD, aSE, aSF, aSG, aS8 = 1e4;

	function aSN(aSM, nj, fg) {
		var aC;
		for (aS9[0] = aSM, aC = 1; aC < fg; aC++) aS9[aC] = aS9[aC - 1] + nj, nj = aS9[aC] >= aS8 ? (aS9[aC] = aS8 - 1, -nj) : aS9[aC] < 0 ? (aS9[aC] = 0, -nj) : (nj += 16384 <= az.random() ? ng : -ng) < -aS7 ? -aS7 : aS7 < nj ? aS7 : nj
	}

	function aSP(fn, fp, aSQ, fg) {
		(aSQ ? function(fn, fp, fg) {
			var aC;
			for (aC = 0; aC < fg; aC++) g8[fp * j + fn + aC] = aS9[aC]
		} : function(fn, fp, fg) {
			var aC;
			for (aC = 0; aC < fg; aC++) g8[fp * j + fn + aC * j] = aS9[aC]
		})(fn, fp, fg)
	}

	function aST(value, fg) {
		var aC, aQ5, fK, kH = value - aS9[fg - 1];
		if (0 != kH) {
			for (aQ5 = 1 + bO.g7(Math.abs(kH), fg - 1), aQ5 = kH < 0 ? -aQ5 : aQ5, aS9[fg - 1] = value, fK = (fK = fg - 1 - bO.g7(Math.abs(kH), Math.abs(aQ5))) < 1 ? 1 : fg - 2 < fK ? fg - 2 : fK, aC = fg - 2; fK <= aC; aC--) aS9[aC] += kH - (fg -
				1 - aC) * aQ5;
			(kH < 0 ? function(fg) {
				var aC;
				for (aC = fg - 2; 1 <= aC; aC--) aS9[aC] < 0 && (aS9[aC] = -aS9[aC] - 1)
			} : function(fg) {
				var aC;
				for (aC = fg - 2; 1 <= aC; aC--) aS9[aC] >= aS8 && (aS9[aC] = 2 * aS8 - aS9[aC] - 1)
			})(fg)
		}
	}

	function aSW(a6m, a6n, fg) {
		for (var aC = 0; aC < fg; aC++) a6m[aC] = a6n[aC]
	}

	function aSX(h) {
		for (var aC = 0; aC < h.length - 1; aC++) h[aC] = h[aC + 1] - h[aC];
		h[h.length - 1] = h[h.length - 3]
	}

	function aSY(a9b, gap, iY) {
		aSA.push(a9b), aSB.push(gap), aSC.push(iY)
	}
	this.a8 = function(a86) {
		! function(a86) {
			var aC;
			for (j = a86[0], k = a86[1], aS7 = a86[2], ng = a86[3], g8 = new Int16Array(j * k), max = k < j ? j : k, aS9 = new Int16Array(max), aSA = [], aSB = [], aSC = [], aSD = new Array(j), aSE = new Array(k), aC = j - 1; 0 <= aC; aC--) aSD[
				aC] = !1;
			for (aC = k - 1; 0 <= aC; aC--) aSE[aC] = !1;
			aSF = new Int16Array(j), aSG = new Int16Array(k)
		}(a86),
		function(fg) {
			var aSM = az.random() % aS8,
				nj = az.random() % (2 * aS7 + 1) - aS7;
			aSN(aSM, nj, fg)
		}(max), aSW(aSG, aS9, k), aSP(0, 0, !0, j);
		var fn, fp, a86 = g8[0],
			fg = max,
			nj = az.random() % (2 * aS7 + 1) - aS7;
		for (aSN(a86, nj, fg), aSW(aSF, aS9, j), aSP(0, 0, !1, k), aSX(aSF), aSX(aSG), aSN(g8[j - 1], aSF[j - 1], k), aSP(j - 1, 0, !1, k), aSN(g8[j * (k - 1)], aSG[k - 1], j), aST(g8[j * k - 1], j), aSP(0, k - 1, !0, j), aSD[j - 1] = aSD[0] = !
			0, aSE[k - 1] = aSE[0] = !0, aSY(0, j, !0), aSY(0, k, !1), ! function() {
				var aSa, a9b;
				for (;;) {
					if (aSa = function() {
							var aC, aSa = aSA.length - 1;
							for (aC = aSa - 1; 0 <= aC; aC--) aSB[aC] > aSB[aSa] && (aSa = aC);
							return aSa
						}(), aSB[aSa] < 5) return;
					a9b = aSA[aSa] + bO.g7(aSB[aSa], 2), (aSC[aSa] ? function(fn) {
						var fg, aSd, aC, aLD = 0,
							aSe = 0;
						for (; aSe < k - 1;) {
							for (aC = aLD + 1; aC < k; aC++)
								if (aSE[aC]) {
									aSe = aC;
									break
								} fg = aSe - aLD + 1, aSN(g8[fn + j * aLD], 0 === aLD ? aSF[fn] : aS9[aSd - 1] - aS9[aSd - 2], fg), aST(g8[aSe * j + fn], fg), aSP(fn, aLD, !1, fg), aSd = fg, aLD = aSe
						}
						aSD[fn] = !0
					} : function(fp) {
						var fg, aSd, aC, aLD = 0,
							aSe = 0;
						for (; aSe < j - 1;) {
							for (aC = aLD + 1; aC < j; aC++)
								if (aSD[aC]) {
									aSe = aC;
									break
								} fg = aSe - aLD + 1, aSN(g8[fp * j + aLD], 0 === aLD ? aSG[fp] : aS9[aSd - 1] - aS9[aSd - 2], fg), aST(g8[fp * j + aSe], fg), aSP(aLD, fp, !0, fg), aSd = fg, aLD = aSe
						}
						aSE[fp] = !0
					})(a9b), aSY(a9b, aSA[aSa] + aSB[aSa] - a9b, aSC[aSa]), aSB[aSa] = a9b - aSA[aSa] + 1
				}
			}(), fn = 0; fn < j; fn++)
			if (!aSD[fn])
				for (fp = 0; fp < k; fp++) aSE[fp] || ! function(fn, fp) {
					var value = g8[fp * j + fn - 1] + g8[(fp - 1) * j + fn],
						aBa = 2;
					aSD[fn + 1] && (aBa++, value += g8[fp * j + fn + 1]);
					aSE[fp + 1] && (aBa++, value += g8[(fp + 1) * j + fn]);
					g8[fp * j + fn] = bO.g7(value, aBa)
				}(fn, fp)
	}, this.aRC = function() {
		return g8
	}, this.aQr = function() {
		g8 = null
	}
}

function aMd(fz, g0) {
	return 0 <= fz ? bO.g7(fz, g0) : -bO.g7(-fz, g0)
}

function kY(g8) {
	return g8 * g8
}

function aAb(fz, g0) {
	return g0 < fz ? fz : g0
}

function aFz(fz, g0) {
	return fz < g0 ? fz : g0
}

function aDB(fz, g8, g0) {
	return g8 < fz ? fz : g0 < g8 ? g0 : g8
}

function aSg(g8, fg) {
	for (var eq = bO.g7(g8 + 1, 2), aC = 0; aC < fg; aC++) eq = bO.g7(eq + bO.g7(g8, eq), 2);
	return eq
}

function aOc(g8, fg) {
	return g8 < 1 ? 0 : aSg(g8, fg)
}

function aSh(o5, o6, vW, aCv, oI, oJ, vX, wC) {
	return !(o5 + vW <= oI || o6 + aCv <= oJ || oI + vX <= o5 || oJ + wC <= o6)
}

function aSi(o5, o6, vW, aCv, oI, oJ, vX, wC) {
	return o5 <= oI && o6 <= oJ && oI + vX <= o5 + vW && oJ + wC <= o6 + aCv
}

function a0b(g8) {
	return Math.floor(!!g8 * (1 + Math.log2(g8 + .5)))
}

function c4() {
	this.g7 = function(fz, g0) {
		return Math.floor((fz + .5) / g0)
	}, this.aSj = function(fz, g0) {
		return Math.floor(fz * (g0 + .5))
	}, this.sqrt = function(g8) {
		return ~~Math.sqrt(g8 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.is = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aSk = function(gP, gR, gT) {
		return Math.max(Math.min(gP, gR), gT)
	}, this.aSl = function(aSm, aSn, fn, fp) {
		fn -= aSm, aSm = fp - aSn, fp = 0;
		return 0 == fn ? fp = 0 <= aSm ? Math.PI : 0 : (fp = Math.atan(aSm / fn), fp += 0 < fn ? .5 * Math.PI : 1.5 * Math.PI), fp
	}, this.log2 = function(g8) {
		return Math.floor(!!g8 * (1 + Math.log2(g8 + .5)))
	}, this.log10 = function(g8) {
		return Math.floor(Math.log10(g8 + .5))
	}, this.aSp = function(aGX, aSq, aSr, aSs, aSt) {
		return aSr - aSt < aGX && aGX < aSr + aSt && aSs - aSt < aSq && aSq < aSs + aSt
	}, this.a1Y = function(aDb, aDd) {
		return aDb * aDb + aDd * aDd
	}
}

function dM() {
	this.z = new aSu, this.aSv = new aSw, this.vR = 0;
	var aSx = new Array(32);

	function aT0() {
		for (var fg = aSx.length, aC = 0; aC < fg; aC++) aSx[aC] = null
	}
	this.dr = function() {
		for (var aSy, aSz = document.body.firstChild; aSz;) aSy = aSz.nextSibling, !document.body.contains(aSz) || "DIV" !== aSz.tagName && "INPUT" !== aSz.tagName && "BUTTON" !== aSz.tagName || u.removeChild(document.body, aSz), aSz = aSy
	}, this.v = function(eP, a5P, a86) {
		void 0 === a5P && (a5P = this.vR), bi.dy = !0, 0 === eP && (0 === ab.a5K() ? eP = 5 : a1.a2.setState(13)), this.uU(), this.vR === eP && (a5P = aSx[eP].a5P, aSx[eP] = null), this.vR = eP;
		var lx = aSx[eP];
		if (!lx || 4 === eP || 7 === eP || 8 === eP || 9 === eP || 10 === eP || 11 === eP || 13 === eP || 15 === eP || 18 === eP || 20 <= eP && eP <= 28 || 32 === eP || 33 === eP) {
			if (0 === eP) return void aT0();
			1 === eP ? lx = new aT1 : 2 === eP ? lx = new aT2 : 3 === eP ? lx = new aT3 : 4 === eP || 9 === eP || 10 === eP || 11 === eP || 13 === eP || 33 === eP ? lx = a86 : 5 === eP ? lx = new aT4 : 6 === eP ? lx = new aT5 : 7 === eP ? lx =
				new aT6(u.z.aT7) : 8 === eP ? lx = a86 : 12 === eP ? lx = new aT8 : 14 === eP ? lx = new aT9 : 15 === eP ? lx = new aT6(u.z.aTA) : 16 === eP ? lx = new aTB : 17 === eP ? lx = new aTC : 18 === eP ? lx = new aTD : 19 === eP ? lx =
				new aTE : 20 === eP ? lx = new aTF : 21 === eP ? lx = new aTG : 22 === eP ? lx = new aTH : 23 === eP ? lx = new aTI : 24 === eP ? lx = new aTJ : 25 === eP ? lx = new aTK : 26 === eP ? lx = new aTL : 27 === eP ? lx = new aTM :
				28 === eP ? lx = new aTN : 29 === eP ? lx = new aTO : 30 === eP ? lx = new aTP : 31 === eP ? lx = new aTQ : 32 === eP && (lx = new aTR), lx.a5P = a5P, aSx[eP] = lx
		}
		lx.show(a86)
	}, this.a5J = function() {
		this.iT() && this.aTS(this.a5O().a5P)
	}, this.aTS = function(eP) {
		this.iT() && (aSx[eP] ? (this.uU(), bi.dy = !0, this.vR = eP, aSx[eP].show()) : this.v(eP))
	}, this.uU = function() {
		this.iT() && aSx[this.vR].uU()
	}, this.y = function() {
		this.iT() && (aSx[this.vR].uU(), aT0(), this.vR = 0, a1.a2.setState(13))
	}, this.yl = function() {
		var lx;
		this.iT() && (lx = aSx[this.vR]).yl && lx.yl()
	}, this.resize = function() {
		if (!this.iT()) return !1;
		aSx[this.vR].resize()
	}, this.hu = function(fn, fp) {
		var lx;
		this.iT() && (lx = aSx[this.vR]).hu && lx.hu(fn, fp)
	}, this.a5h = function(fn, fp) {
		var lx;
		this.iT() && (lx = aSx[this.vR]).a5h && lx.a5h(fn, fp)
	}, this.a65 = function() {
		var lx;
		this.iT() && (lx = aSx[this.vR]).a65 && lx.a65()
	}, this.a5k = function(mH, mI, deltaY) {
		var lx;
		this.iT() && (lx = aSx[this.vR]).a5k && lx.a5k(mH, mI, deltaY)
	}, this.a6F = function(code) {
		var lx;
		return !!this.iT() && ((lx = aSx[this.vR]).a6F && lx.a6F(code), !0)
	}, this.el = function() {
		var lx;
		this.iT() && (lx = aSx[this.vR]) && lx.el && lx.el()
	}, this.iT = function() {
		return 0 < this.vR
	}, this.a5O = function() {
		return aSx[this.vR]
	}, this.a9M = function(eP) {
		return aSx[eP]
	}, this.aTT = function() {
		return aSx
	}, this.removeChild = function(ou, a7V) {
		try {
			ou.removeChild(a7V)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aT6(data) {
	var aTU, aTV;

	function aTt(aTu, aTv) {
		if (aTu.tn === bE.rc) return clearTimeout(aTu.aTw), 1;
		aTu.tq(bE.rc), clearTimeout(aTu.aTw), aTu.aTw = setTimeout(aTv, 1e3)
	}

	function aTY(tT, ww) {
		if (!data.aTW) {
			if (data.aUP) {
				if (ww) return
			} else {
				if (!ww) return;
				if (data.a00 < 1e4) return
			}
			var aUW, x7 = new tD,
				aUU = ww && 1e5 <= data.a00,
				aUV = x7.tG(ww ? (aUU ? "⚠️ " : "") + L(290) : L(291)),
				aUY = (aUU && (aUV.style.color = "yellow"), ww ? x7.tH(L(292, [bD.pY.a8O(data.a00, .01, 0)])) : ((aUW = new uI({
					value: data.aUX,
					eP: -1
				})).e.readOnly = !0, aUW.e.type = "password", x7.tQ(aUW), x7.tQ(new uf([new x(L(219), function(e) {
					return e.textContent === L(219) ? (e.textContent = L(220), aUW.e.type = "text") : (e.textContent = L(219), aUW.e.type = "password"), !0
				}).button, new x(L(216), function(e) {
					return bD.t4.a7T(aUW.e), bD.t4.yQ(e), !0
				}).button]))), x7.tL(L(ww ? 291 : 293)).style.marginTop = "0.75em", new uI({
					value: "",
					eP: -1
				}, 0, 0)),
				aUa = (aUY.e.type = "email", aUY.e.autocomplete = "email", aUY.e.name = "email", aUY.e.inputMode = "email", aUY.e.spellcheck = !1, x7.tQ(aUY), x7.tQ(new uf([new x(L(294), function(e) {
					return b1.aU4.aUZ({
						action: 3,
						pU: aUY.e.value.trim().substring(0, 63)
					}), bD.t4.yQ(e), !0
				}).button])), ww && x7.tH(L(295)), x7.tL(L(296)).style.marginTop = "0.75em", new uI({
					value: "",
					eP: -1
				}, 1));
			x7.tQ(aUa), x7.tQ(new uf([new x(L(297), function() {
				b1.aU4.aU5({
					action: 4,
					pc: "",
					value: Math.floor(+aUa.e.value)
				}), u.v(8, u.a5O().a5P, new vS(18))
			}).button])), tT.push(x7)
		}
	}
	this.show = function() {
		data.aTW && bL.aUs("account", data.pc), aTU.show(), this.resize()
	}, this.uU = function() {
		aTU.uU()
	}, this.resize = function() {
		aTU.resize(), aTV.resize()
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	}, aTU = new yX(data.username, [new x("⬅️ " + L(49), function() {
		bL.clear(), u.a5J()
	}), new x(data.aTW ? "🔄 " + L(181) : L(182), function() {
		u.v(8, data.aTW ? u.a5O().a5P : void 0, new vS(25, {
			action: 0,
			pc: data.pc,
			vQ: data.vQ
		}))
	}, 0, 0, 1)]), aTV = new tR(aTU.yc, function() {
		var tT = [];
		aTY(tT, 1), tT.push(function() {
				var x7 = new tD;
				x7.tG(L(265)), data.aUP && (x7.tL("✅ " + L(266)).style.marginBottom = "0.75em");
				var a4v = data.aUQ;
				a4v < 1 ? (x7.tL(L(267)), 0 === data.aUR ? x7.tH(L(268)) : 1 === data.aUR ? x7.tH(L(269)) : 2 === data.aUR ? x7.tH(L(270)) : 3 === data.aUR ? x7.tH(L(271)) : 4 === data.aUR ? x7.tH(L(272)) : 5 === data.aUR ? x7.tH(L(
					273)) : 6 === data.aUR ? x7.tH(L(274)) : x7.tH(L(275))) : (x7.tL(L(276)), a4v = a4v < 2 ? L(277) : a4v < 61 ? 2 === a4v ? L(278) : L(279, [a4v - 1]) : a4v < 84 ? 61 === a4v ? L(280) : L(281, [a4v - 60]) : a4v <
					255 ? 84 === a4v ? L(282) : L(283, [a4v - 83]) : L(284), x7.tH(a4v));
				{
					var tI, aU1;
					x7.tQ(new uq), data.aTW && (tI = x7.tH(), x7.tQ(new uf([new x(bm.zA.xk(data.pc) ? L(285) : L(286), function(e) {
						return bm.zA.zN(data.pc) ? (e.textContent = L(285), aU1(1)) : (e.textContent = L(286), aU1(0)), !0
					}).button])), aU1 = function(g8) {
						tI.textContent = g8 ? L(287) : ""
					}, bm.zA.xk(data.pc) && aU1(1), x7.tQ(new uq))
				}
				var qB, uH = new uI({
					value: data.username,
					eP: -1
				});
				uH.e.readOnly = !0, x7.tQ(uH), x7.tQ(new uf([new x(L(216), function(e) {
					return bD.t4.a7T(uH.e), bD.t4.yQ(e), !0
				}).button])), data.aTW || x7.tH(L(288));
				(data.aUS || data.aUT) && (x7.tQ(new uq), x7.tH(L(289)), data.aUS && ((qB = x7.tH("• Muted")).style.color = "orange", qB.style.marginTop = "0.5em"), data.aUT) && ((qB = x7.tH("• Redacted")).style.color = "orange", qB.style
					.marginTop = "0.5em");
				data.aTW && (x7.tQ(new uq), x7.tL(b1.z.aTx("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", function(x7) {
					function click(e, aKa) {
						return bs.aKb(data.pc, aKa) && (bD.t4.yQ(e), p5[0].tq(1), p5[1].tq(1)), !0
					}
					var color = bs.aKZ(data.pc) ? 1 : 0,
						p5 = [];
					p5.push(new x(L(252), function(e) {
						return click(e, 1)
					}, color || bE.qn)), p5.push(new x(L(253), function(e) {
						return click(e, 0)
					}, color || bE.r2)), x7.tQ(new uf([p5[0].button])), x7.tQ(new uf([p5[1].button]))
				}(x7));
				return x7
			}()),
			function(tT) {
				var x7, uH, k, aU2, aTu, aU3;
				data.aTW && data.aU9 && ((x7 = new tD).tG(L(211)), x7.tH(L(205)), (uH = new uI({
					value: data.aU9,
					eP: -1
				})).e.readOnly = !0, x7.tQ(uH), k = !1, aU2 = new x(L(212), function(e) {
					return k && b1.z.em(0) && (bD.t4.yQ(e), aU3(), b1.aU4.aUA({
						action: 9,
						pc: data.pc
					})), !0
				}, 1), aTu = new x(L(202), function(e) {
					if (e.textContent === L(202)) {
						if (100 * data.aU9 < data.a00) return new sz(L(213)), !0;
						k = !0, e.textContent = L(203), aU2.tq(0), aU2.button.style.color = bE.rQ
					} else aU3();
					return !0
				}), x7.tQ(new uf([aTu.button])), aU3 = function() {
					k = !1, aTu.button.textContent = L(202), aU2.tq(1), aU2.button.style.color = bE.qL
				}, x7.tQ(new uf([aU2.button])), x7.tH(L(214)), tT.push(x7))
			}(tT),
			function(tT) {
				var x7, tI, aGr, aUc, aU2, aTu, aU3;
				data.aTW || ((x7 = new tD).tG(L(298)), (tI = x7.tH(data.aUb.length + " / 160")).style.textAlign = "center", aGr = !0, (aUc = new yu(0, 1, function(e) {
					e = e.target.value.length;
					tI.textContent = e + " / 160", 160 < e ? aGr && (aGr = !1, aTu.tq(1)) : aGr || (aGr = !0, aTu.tq(0))
				})).e.rows = 6, aUc.e.style.fontSize = "1em", aUc.z1(data.aUb), x7.tQ(aUc), 0 !== data.aUd ? (aTu = new x(L(299), function() {
					if (!aGr) return !0;
					u.v(8, u.a5O().a5P, new vS(29, {
						action: 1,
						pU: aUc.z2().substring(0, 160)
					}))
				}, 0, 0, 1), x7.tQ(new uf([aTu.button])), x7.tQ(new uf([new x(1 === data.aUd ? L(300) : L(301), function() {
					u.v(8, u.a5O().a5P, new vS(29, {
						action: 0,
						pU: ""
					}))
				}, 0, 0, 1).button])), x7.tH(1 === data.aUd ? L(302, [data.aUe - 1]) : L(303, [data.aUe - 1])), x7.tH(L(304, [data.aUf]))) : (aU2 = new x(L(212), function() {
					if (!aUc.e.readOnly) return !0;
					u.v(8, u.a5O().a5P, new vS(29, {
						action: 1,
						pU: aUc.z2().substring(0, 160)
					}))
				}, 1), aTu = new x(L(202), function(e) {
					if (e.textContent === L(202)) {
						if (!aGr) return !0;
						e.textContent = L(203), aUc.e.readOnly = !0, aU2.tq(0), aU2.button.style.color = bE.rQ
					} else aU3();
					return !0
				}), x7.tQ(new uf([aTu.button])), x7.tH(L(304, [data.aUf])), aU3 = function() {
					aTu.button.textContent = L(202), aUc.e.readOnly = !1, aU2.tq(1), aU2.button.style.color = bE.qL
				}, x7.tQ(new uf([aU2.button]))), tT.push(x7))
			}(tT),
			function(tT) {
				var x7;
				data.aTW && 0 !== data.aUd && ((x7 = new tD).tG(L(305)), x7.tJ(data.aUb), x7.tQ(new uf([new x(L(306, 0, "Report"), function(e) {
					return b1.z.em(0) && (bD.t4.yQ(e), b1.aU4.aUA({
						action: 5,
						pc: data.pc
					})), !0
				}, 0, 0, 1).button])), tT.push(x7))
			}(tT), tT.push(function() {
				var x7 = new tD,
					aTy = (x7.tG(L(183)), x7.tL(b1.z.aTx("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(184), L(185), L(186), L(187), L(188), L(189), L(190), L(191), L(192), L(193), L(194), L(195), L(196), L(197)]),
					eO = data.aTz;
				return x7.tL(L(198) + bD.pY.a8O(data.a00, .01, 2) + "<br>" + L(199) + (eO + 1) + " / " + data.zz + "<br>" + L(200) + aTy[function(eO, a00) {
					if (eO < 10) return 0;
					if (eO < 30) return 1;
					if (eO < 60) return 2;
					if (3e4 <= (a00 = bO.g7(a00, 100))) return 3;
					if (12e3 <= a00) return 4;
					if (7e3 <= a00) return 5;
					if (3e3 <= a00) return 6;
					if (1e3 <= a00) return 7;
					if (500 <= a00) return 8;
					if (200 <= a00) return 9;
					if (70 <= a00) return 10;
					if (20 <= a00) return 11;
					if (3 <= a00) return 12;
					return 13
				}(eO, data.a00)]), x7
			}()), data.aTW && tT.push(function() {
				var x7 = new tD,
					uH = (x7.tG(L(201)), x7.tL(b1.z.aTx("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new uI({
						value: bm.buffer.data[147].value,
						eP: -1
					}, 1, void 0, function(e) {
						bm.rr.px(147, aU1(e.target.value))
					})),
					aU2 = (x7.tQ(uH), new x(L(21), function(e) {
						var g8;
						return uH.e.readOnly && b1.z.em(0) && (g8 = parseInt(bm.buffer.data[147].value, 10), u.aSv.send(g8, data.pc, function() {
							bD.t4.yQ(e), aU3(), b1.aU4.aU5({
								action: 0,
								pc: data.pc,
								value: g8
							})
						})), !0
					}, 1)),
					aTu = new x(L(202), function(e) {
						return e.textContent === L(202) ? (e.textContent = L(203), uH.e.readOnly = !0, aU2.tq(0), aU2.button.style.color = bE.rQ, bm.rr.px(147, uH.e.value), aU1(bm.buffer.data[147].value)) : aU3(), !0
					}),
					tI = (x7.tQ(new uf([aTu.button])), x7.tH()),
					aU1 = function(g8) {
						return tI.innerHTML = u.z.aU6(g8, bm.buffer.data[105].value, data.pc), g8
					},
					aU3 = function() {
						aTu.button.textContent = L(202), uH.e.readOnly = !1, aU2.tq(1), aU2.button.style.color = bE.qL
					};
				return aU1(bm.buffer.data[147].value), x7.tQ(new uf([aU2.button])), x7
			}());
		tT.push(function() {
			var x7 = new tD,
				uH = (x7.tG(L(215)), new uI({
					value: data.pc,
					eP: -1
				})),
				aU7 = (uH.e.readOnly = !0, x7.tQ(uH), x7.tQ(new uf([new x(L(216), function(e) {
					return bD.t4.a7T(uH.e), bD.t4.yQ(e), !0
				}).button])), x7.tQ(new uq), new uI({
					value: data.pc,
					eP: -1
				}));
			return x7.tQ(aU7), x7.tQ(new uf([new x(L(217), function(e) {
				u.v(8, u.a5O().a5P, new vS(25, {
					action: 0,
					pc: aU7.e.value,
					vQ: 0
				}))
			}).button])), x7
		}()), data.aTW || (tT.push(function() {
			var x7 = new tD,
				aUB = (x7.tG(L(218)), new uI(bm.buffer.data[106])),
				customPasswordInput = (aUB.e.readOnly = !0, aUB.e.type = "password", x7.tQ(aUB), x7.tQ(new uf([new x(L(219), function(e) {
					return e.textContent === L(219) ? (e.textContent = L(220), aUB.e.type = "text") : (e.textContent = L(219), aUB.e.type = "password"), !0
				}).button, new x(L(216), function(e) {
					return bD.t4.a7T(aUB.e), bD.t4.yQ(e), !0
				}).button])), new uI({
					value: "",
					eP: -1
				}));
			return customPasswordInput.e.placeholder = "Custom new password (optional)", x7.tQ(customPasswordInput), x7.tQ(new uf([new x(L(221), function() {
				__fx.passwordReset.setCustomPassword(customPasswordInput.e.value) && u.v(8, u.a5O().a5P, new vS(15))
			}).button])), x7.tG(L(222), "0.8em"), x7.tH(L(223)), x7.tH(L(224)), x7.tH(L(225)), x7
		}()), tT.push(function() {
			var x7 = new tD;
			return x7.tG(L(226)), x7.tQ(new uf([new x(L(227), function() {
				u.v(6, u.a5O().a5P)
			}).button])), x7.tQ(new uf([new x(L(228), function() {
				bm.rr.px(105, ""), u.v(8, u.a5O().a5P, new vS(18))
			}).button])), x7.tQ(new uf([new x(L(229) + bm.buffer.data[105].value, function() {
				u.v(4, 0, new w(L(230), L(231), !0, [new x("⬅️ " + L(49), function() {
					u.v(7, u.a9M(7).a5P)
				})]))
			}, bE.r2).button])), x7
		}()), tT.push(function() {
			function aUD(eP) {
				aUC[0].tq(0 === eP ? bE.qX : bE.qi), aUC[1].tq(0 === eP ? bE.qX : bE.r2), aUC[2].tq(eP === tO.tP.length - 1 || eP < 5 ? bE.qX : bE.r2)
			}
			var tO, aUC, x7 = new tD;
			x7.tG(L(236)), x7.tH(L(237)), bm.z.zi();
			return aUC = [new x(L(238), function() {
				var eP = Math.min(bm.buffer.data[117].value, tO.tP.length - 1);
				eP < 1 || (eP = bm.z.zn(eP)) && (bm.rr.px(105, eP.pc), bm.rr.px(106, eP.password), u.v(8, u.a5O().a5P, new vS(18)))
			}, bE.qX, 1), new x(L(234), function() {
				var eP = Math.min(bm.buffer.data[117].value, tO.tP.length - 1);
				if (!(eP < 1)) {
					tO.tP[eP].remove(), tO.tP.splice(eP, 1);
					for (var aC = eP; aC < tO.tP.length; aC++) tO.tP[aC].name = "" + aC;
					bm.z.zl(eP), eP = bm.buffer.data[117].value, tO.tP[eP].textContent = tO.tP[eP].textContent.replace("⚪", "🟢"), aUD(eP)
				}
			}, bE.qX, 1), new x(L(235), function() {
				var eP = Math.min(bm.buffer.data[117].value, tO.tP.length - 1);
				if (eP !== tO.tP.length - 1)
					if (aTt(aUC[2], function() {
							var fg = tO.tP.length;
							aUD(Math.min(bm.buffer.data[117].value, fg - 1))
						})) {
						for (var aC = tO.tP.length - 1; eP < aC; aC--) tO.tP[aC].remove(), tO.tP.splice(aC, 1), bm.z.zl(aC);
						aUD(eP)
					}
			}, bE.qX, 1)], tO = new yT(bm.buffer.data[117], aUD), __fx.savedAccounts.decorate(tO.tP, bm.buffer.data[117].vA), aUD(0), tO.tP[0].style.marginTop = "0.5em", x7.tN(tO), x7.tQ(new uf([aUC[0].button])), x7.tQ(new uf(
				[new x("✏️ Edit Label", function() {
					__fx.savedAccounts.edit(bm.buffer.data[117].value)
				}).button])), x7.tQ(new uf([aUC[1].button])), x7.tQ(new uf([aUC[2].button])), x7
		}()));
		return tT.push(function() {
				var x7 = new tD,
					pU = (x7.tG(L(248)), L(249, [(data.aUF / 1e3).toFixed(3)]) + "<br>" + L(250, [data.aUG]));
				data.aUH && (pU += "<br>" + L(251, [(data.aUI / 1e3).toFixed(3)]));
				return x7.tL(pU), x7
			}()), tT.push(function() {
				var x7 = new tD,
					aTy = (x7.tG(L(242)), [L(243), L(244), L(245), L(246)]),
					eO = data.aUE;
				return x7.tL(L(247) + (data.a4f / 100).toFixed(2) + "<br>" + L(199) + (eO + 1) + " / " + data.zz + "<br>" + L(200) + aTy[eO < 10 ? 0 : eO < 50 ? 1 : eO < 200 ? 2 : 3]), x7
			}()), tT.push(function() {
				var x7 = new tD;
				return x7.tG(L(239)), x7.tL(L(240) + bD.pY.a8O(data.zw, .1, 1) + "<br>" + L(199) + (data.zx + 1) + " / " + data.zz + "<br>" + L(241) + data.zy), x7
			}()),
			function(tT) {
				var x7 = new tD,
					aUg = data.a03,
					aUh = (x7.tG(L(307)), x7.tL(L(308, [data.a01.length ? "[" + data.a01 + "]" : "-"])), x7.tL(L(309, [bD.pY.a8O(aUg, .01, 2)])), x7.tL(L(310, [data.a05 + 1 + " / " + data.zz])), data.a06),
					aUi = (x7.tL(L(311, [bD.pY.a8O(aUh, .1, 1)])), data.a08);
				x7.tL(L(312, [aUi])), x7.tL(L(313, [bD.pY.a8O(aUh / Math.max(aUi, 1), .1, 2)])), aUg = data.a04, x7.tG(L(314), "0.8em"), x7.tL(L(308, [data.a02.length ? "[" + data.a02 + "]" : "-"])), x7.tL(L(309, [bD.pY.a8O(aUg, .01, 2)])),
					aUh = data.a07, x7.tL(L(311, [bD.pY.a8O(aUh, .1, 1)])), aUi = data.a09, x7.tL(L(312, [aUi])), x7.tL(L(313, [bD.pY.a8O(aUh / Math.max(aUi, 1), .1, 2)])), x7.tL(b1.z.aTx("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					tT.push(x7)
			}(tT),
			function(tT) {
				var x7 = new tD;
				x7.tG(L(315)), x7.tL(L(247) + (data.aUj / 10).toFixed(1) + "<br>" + L(200) + (data.aUk.length ? L(316, [data.aUk]) : L(317))), data.aTW && x7.tQ(new uf([new x(L(263), function(e) {
					return b1.z.em(0) && (bD.t4.yQ(e), b1.aU4.aUA({
						action: 4,
						pc: data.pc
					})), !0
				}, 0, 0, 1).button]));
				x7.tL(b1.z.aTx("/wiki/clans"), "0.75em").style.marginTop = "0.8em", tT.push(x7)
			}(tT), tT.push(function() {
				var x7 = new tD;
				{
					var uH, aTu, aUO, tI, aU1, aU3;
					x7.tG(L(261)), x7.tL(L(262) + data.aUM + "<br>" + L(199) + (data.aUN + 1) + " / " + data.zz + "<br>" + L(200) + br.eR(data.aUN)), data.aTW && ((uH = new uI({
						value: bm.buffer.data[157].value,
						eP: -1
					}, 1, void 0, function(e) {
						bm.rr.px(157, aU1(e.target.value))
					})).e.style.marginTop = "0.6em", x7.tQ(uH), aTu = new x(L(202), function(e) {
						return e.textContent === L(202) ? (e.textContent = L(203), uH.e.readOnly = !0, aUO[0].tq(0), aUO[0].button.style.color = bE.rQ, aU1(bm.buffer.data[157].value)) : aU3(), !0
					}), x7.tQ(new uf([aTu.button])), aUO = [new x(L(263), function(e) {
						return uH.e.readOnly && b1.z.em(0) && (bD.t4.yQ(e), aU3(), b1.aU4.aU5({
							action: 1,
							pc: data.pc,
							value: bO.is(parseInt(bm.buffer.data[157].value, 10), 2, 3e4)
						})), !0
					}, 1)], tI = x7.tH(), aU1 = function(g8) {
						return g8 = bD.h2.a83(g8, 2, 3e4), tI.textContent = L(264, [g8 - 1, g8, bm.buffer.data[105].value]), g8
					}, x7.tQ(new uf([aUO[0].button])), aU3 = function() {
						aTu.button.textContent = L(202), uH.e.readOnly = !1, aUO[0].tq(1), aUO[0].button.style.color = bE.qL
					}, aU1(bm.buffer.data[157].value))
				}
				return x7
			}()),
			function(tT) {
				var x7, a7S;
				data.aTW && !data.aUl || (0 === a1.id || data.aTW || data.aUl) && ((x7 = new tD).tG("Patreon"), !data.aTW && data.aUm ? x7.tQ(new uf([new x(L(219), function() {
					b1.aU4.aUA({
						action: 7,
						pc: data.pc
					}), data.aUm = 0, u.v(7)
				}).button])) : data.aUl ? (x7.tL(L(318, [(data.aUn / 100).toFixed(2)]) + "<br>" + L(319, [1 + data.aUo + " / " + data.aUp]) + "<br>" + L(320, [data.aUq ? L(321) : L(322)])), data.aTW || x7.tQ(new uf([new x(L(323),
					function() {
						b1.aU4.aUA({
							action: 8,
							pc: data.pc
						}), data.aUl = 0, bm.rr.px(160, 0), u.v(7)
					}).button]))) : (x7.tL(L(324), "0.75em").style.marginBottom = "0.3em", x7.tL("  • " + L(325), "0.75em").style.whiteSpace = "pre", x7.tL("  • " + L(326), "0.75em").style.whiteSpace = "pre", x7.tL("  • " + L(327),
						"0.75em").style.whiteSpace = "pre", x7.tL(L(328), "0.75em").style.marginTop = "1.0em", x7.tL(L(329), "0.75em").style.marginTop = "1.0em", x7.tL("<a href='" + bN.aUr +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a7S = "https://www.patreon.com/oauth2/authorize?state=" + data.pc +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b1.z.a4b() + "/", x7.tL(L(330), "0.75em").style.marginTop = "1.0em", x7.tL("<a href='" +
						a7S + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aTW || (x7.tQ(new uq), x7.tQ(new uf([new x(L(220), function() {
						b1.aU4.aUA({
							action: 6,
							pc: data.pc
						}), data.aUm = 1, u.v(7)
					}).button])), x7.tL(L(331), "0.75em").style.marginTop = "0.75em")), tT.push(x7))
			}(tT), tT.push(function() {
				var x7 = new tD,
					aTy = (x7.tG(L(254)), [L(255), L(256), L(257), L(258), "Scout", L(259)]),
					eO = data.aUK;
				return x7.tL(L(260) + (data.aUL / 100).toFixed(2) + "<br>" + L(199) + (eO + 1) + " / " + data.zz + "<br>" + L(200) + aTy[eO < 3 ? 0 : eO < 20 ? 1 : eO < 100 ? 2 : eO < 500 ? 3 : eO < 2e3 ? 4 : 5]), x7.tL(
					"<a href='https://territorial.fandom.com/wiki/Zombie_mode' target='_blank'>Unofficial Tutorial</a>", "0.75em").style.marginTop = "0.8em", x7
			}()),
			function(tT) {
				var x7, uH, aU7, aU2, aTu, aU3;
				data.aTW || ((x7 = new tD).tG(L(204)), x7.tH(L(205)), uH = new uI({
					value: bm.buffer.data[184].value,
					eP: -1
				}, 1, void 0, function(e) {
					bm.rr.px(184, e.target.value)
				}), x7.tQ(uH), x7.tH(L(206)), aU7 = new uI({
					value: bm.buffer.data[185].value,
					eP: -1
				}, 0, void 0, function(e) {
					bm.rr.px(185, e.target.value)
				}), x7.tQ(aU7), aU2 = new x(L(207), function(e) {
					var send;
					return uH.e.readOnly && b1.z.em(0) && (send = function() {
						bD.t4.yQ(e), aU3(), b1.aU4.aU5({
							action: 5,
							pc: bm.buffer.data[185].value,
							value: bO.is(parseInt(bm.buffer.data[184].value, 10), 1, 1e9)
						})
					}, u.v(4, u.vR, new w(L(209), L(210), !1, [new x("⬅️ " + L(49), function() {
						u.a5J()
					}), new x("✅ OK", function() {
						u.a5J(), send()
					})]))), !0
				}, 1), aTu = new x(L(202), function(e) {
					if (e.textContent === L(202)) {
						var g0 = bJ.f7;
						if (g0.f8(aU7.e.value, 5) === g0.f8(data.pc, 5)) return new sz(L(208)), !0;
						e.textContent = L(203), uH.e.readOnly = !0, aU7.e.readOnly = !0, aU2.tq(0), aU2.button.style.color = bE.rQ, bm.rr.px(184, uH.e.value)
					} else aU3();
					return !0
				}), x7.tQ(new uf([aTu.button])), aU3 = function() {
					aTu.button.textContent = L(202), uH.e.readOnly = !1, aU7.e.readOnly = !1, aU2.tq(1), aU2.button.style.color = bE.qL
				}, x7.tQ(new uf([aU2.button])), tT.push(x7))
			}(tT),
			function(tT) {
				var x7, tO, aUC, eP, aUD;
				data.aTW || bm.zA.get().length && ((x7 = new tD).tG(L(232)), eP = 0, aUD = function() {
					var aGP = bm.zA.get().length;
					aUC[0].tq(eP === aGP ? bE.qX : bE.qi), aUC[1].tq(eP === aGP ? bE.qX : bE.r2), aUC[2].tq(eP === aGP || aGP - 1 <= eP || eP < 5 ? bE.qX : bE.r2)
				}, aUC = [new x(L(233), function() {
					u.v(8, void 0, new vS(25, {
						action: 0,
						pc: bm.zA.get()[eP],
						vQ: 0
					}))
				}, bE.qX, 1), new x(L(234), function() {
					bm.zA.zP(eP), tO.tP[eP].remove(), tO.tP.splice(eP, 1);
					for (var aC = eP; aC < tO.tP.length; aC++) tO.tP[aC].name = "" + aC;
					bm.zA.get().length && (eP = Math.max(eP - 1, 0), tO.tP[eP].textContent = tO.tP[eP].textContent.replace("⚪", "🟢")), aUD()
				}, bE.qX, 1), new x(L(235), function() {
					if (aTt(aUC[2], aUD)) {
						for (var iZ = tO.tP.length - 1; eP < iZ; iZ--) bm.zA.zP(iZ), tO.tP[iZ].remove(), tO.tP.splice(iZ, 1);
						aUD()
					}
				}, bE.qX, 1)], aUD(), tO = new yT(bm.zA.zM(), function(aC) {
					eP = aC, aUD()
				}), __fx.followedAccounts.decorate(tO.tP, bm.zA.get()), tO.tP[0].style.marginTop = "0.5em", x7.tN(tO), x7.tQ(new uf([aUC[0].button])), x7.tQ(new uf([new x("✏️ Edit Nickname", function() {
					__fx.followedAccounts.edit(eP)
				}).button])), x7.tQ(new uf([aUC[1].button])), x7.tQ(new uf([aUC[2].button])), tT.push(x7))
			}(tT), aTY(tT, 0), tT
	}())
}

function aTH() {
	var aUt, aUu, aUv, tT;

	function aUw() {
		aUy(), 2 !== aE.data.aIncomeType && (aE.data.aIncomeData = null), u.aTT()[19] = null, u.a5J()
	}

	function aUy() {
		2 === aE.data.aIncomeType ? (bD.te.a6q(aUv.z2(), aE.data.aIncomeData, 255), bD.te.max(aE.data.aIncomeData) || (aE.data.aIncomeType = 0)) : 1 !== aE.data.aIncomeType || aE.data.aIncomeValue || (aE.data.aIncomeType = 0)
	}
	this.show = function() {
		aUt.show(), this.resize()
	}, this.uU = function() {
		aUt.uU()
	}, this.resize = function() {
		aUt.resize(), aUu.resize()
	}, this.a6F = function(eq) {
		2 === eq && aUt.yd[0].tm()
	}, aUt = new yX(L(332), [new x("⬅️ " + L(49), aUw)]), aUu = new tR(aUt.yc, (function(tT) {
		var x7 = new tD;
		x7.tG(L(333)), x7.tN(new yT({
			vA: [L(334), L(335), L(336)],
			value: aE.data.aIncomeType
		}, function(eP) {
			aUy(), 2 !== eP || aE.data.aIncomeData || (aE.data.aIncomeData = new Uint8Array(aE.fd)), aE.data.aIncomeType = eP, u.v(22)
		})), tT.push(x7)
	}(tT = []), function(tT) {
		var x7;
		1 === aE.data.aIncomeType && ((x7 = new tD).tG("Value"), x7.tQ(new uI({
			eP: -1,
			value: aE.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bO.is(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.aIncomeValue = value
		})), tT.push(x7))
	}(tT), function(tT) {
		var x7;
		2 === aE.data.aIncomeType && ((x7 = new tD).tG("Data"), (aUv = new yu(0, 1, 0, 1)).z1(bD.pY.a8U(aE.data.aIncomeData, 4)), x7.tQ(aUv), tT.push(x7))
	}(tT), tT))
}

function aTK() {
	var aUt, aUu, aUv;

	function aUw() {
		aUy(), 3 !== aE.data.botDifficultyType || bD.te.a6e(aE.data.botDifficultyData) || (aE.data.botDifficultyType = 0), 3 !== aE.data.botDifficultyType && (aE.data.botDifficultyData = null), u.aTT()[19] = null, u.a5J()
	}

	function aUy() {
		3 === aE.data.botDifficultyType && bD.te.a6q(aUv.z2(), aE.data.botDifficultyData, aF.lD.length - 1)
	}

	function aV3(tT, eP) {
		var x7 = new tD,
			value = (x7.tG(eP < 0 ? L(76) : L(75) + " " + bj.a4W[eP % 9]), 0 <= eP && (x7.tL(L(339) + ": " + aE.data.teamPlayerCount[eP]).style.marginBottom = "1em"), eP < 0 ? aE.data.botDifficultyValue : aE.data.botDifficultyTeam[eP]);
		x7.tN(new yT({
			vA: aF.lD,
			value: value
		}, function(iZ) {
			eP < 0 ? aE.data.botDifficultyValue = iZ : aE.data.botDifficultyTeam[eP] = iZ
		})), tT.push(x7)
	}
	this.show = function() {
		aUt.show(), this.resize()
	}, this.uU = function() {
		aUt.uU()
	}, this.resize = function() {
		aUt.resize(), aUu.resize()
	}, this.a6F = function(eq) {
		2 === eq && aUt.yd[0].tm()
	}, aUt = new yX(L(76), [new x("⬅️ " + L(49), aUw)]), aUu = new tR(aUt.yc, function() {
		var tT = [];
		if (function(tT) {
				var x7 = new tD,
					vA = (x7.tG(L(333)), [L(335), L(337), L(338), L(336)]),
					value = aE.data.botDifficultyType;
				0 === aE.data.gameMode && (value = Math.min(value, 2), vA.splice(2, 1));
				x7.tN(new yT({
					vA: vA,
					value: value
				}, function(eP) {
					aUy(), aE.data.botDifficultyType = eP, 0 === aE.data.gameMode && 2 === eP && (aE.data.botDifficultyType = 3), 3 !== aE.data.botDifficultyType || aE.data.botDifficultyData || (aE.data.botDifficultyData =
						new Uint8Array(aE.fd)), 2 !== aE.data.botDifficultyType || aE.data.botDifficultyTeam || (aE.data.botDifficultyTeam = new Uint8Array(9)), u.v(25)
				})), tT.push(x7)
			}(tT), 0 === aE.data.botDifficultyType) aV3(tT, -1);
		else if (2 === aE.data.botDifficultyType)
			for (var aC = 0; aC < aE.data.teamPlayerCount.length; aC++) aE.data.teamPlayerCount[aC] && aV3(tT, aC);
		else 3 === aE.data.botDifficultyType && ! function(tT) {
			var x7 = new tD;
			x7.tG("Data"), (aUv = new yu(0, 1, 0, 1)).z1(bD.pY.a8U(aE.data.botDifficultyData, 8)), x7.tQ(aUv), tT.push(x7)
		}(tT);
		return tT
	}())
}

function aV4(data) {
	var aTU, aV5, aV6, aV7, aV8, aV9, aVA, colors, aVB, aVC, aVD = 0,
		aVE = 0,
		aVF = !1,
		aVG = !1,
		aVH = [1, 5, 60, 240, 1440, 10080, 43200];

	function aVl(mH, mI) {
		! function(mH, mI) {
			return aV5 < mH && mH < aV5 + aV7 && aV6 < mI && mI < aV6 + aV8
		}(aVD = mH, aVE = mI) ? (aVF && (bi.dy = !0), aVF = !1) : (aVF = !0, bi.dy = !0)
	}
	this.show = function() {
		aVG = bm.buffer.data[127].value, aTU.show(), this.resize()
	}, this.uU = function() {
		aTU.uU()
	}, this.resize = function() {
		aTU.resize();
		var eq = i.l,
			yk = aTU.yh(),
			aVQ = eq * yk.yj,
			eq = eq * yk.uW;
		aV9 = bD.t4.vo(.06), aVA = bD.t4.vo(.04), aV5 = bD.t4.vo(.06), aV6 = eq + aV9, aV7 = i.j - aV5 - aVA, aV8 = aVQ + eq - aV6 - aVA
	}, this.yl = function() {
		aTU.yl(),
			function() {
				var aC, aVN, h9, fn, fz, h = data.data,
					aVU = 1,
					aVV = .125,
					aVW = aVG ? 65536 : 0;
				for (aC = 0; aC < h.length; aC++)
					for (aVN = h[aC].aVN, h9 = aVN.length, aVU = Math.max(h9, aVU), fz = 0; fz < h9; fz++) aVV = Math.max(aVN[fz], aVV), aVW = Math.min(aVN[fz], aVW);
				var o6 = aV6 + aV8,
					a27 = aV8 / (aVV - aVW),
					a26 = 1 / (aVU - 1);
				for (ym.lineWidth = bf.a39, aC = 0; aC < h.length; aC++) {
					for (aVN = h[aC].aVN, h9 = aVN.length, fn = aV5, ym.beginPath(), ym.moveTo(fn + aV7, o6 - a27 * (aVN[h9 - 1] - aVW)), fz = h9 - 2; 0 <= fz; fz--) ym.lineTo(fn + a26 * fz * aV7, o6 - a27 * (aVN[fz] - aVW));
					ym.strokeStyle = colors[aC], ym.stroke()
				}(function(aVW, aVV, o6, a27) {
					ym.font = bD.t4.t7(0, .25 * aV5), bD.t4.textBaseline(ym, 1), bD.t4.textAlign(ym, 2), ym.fillStyle = colors[0];
					for (var fn = .92 * aV5, aC = 0; aC < 3; aC++) {
						var g8 = aVW + aC * (aVV - aVW) / 2;
						ym.fillText((g8 / 1e3).toFixed(3), fn, o6 - a27 * (g8 - aVW))
					}
				})(aVW, aVV, o6, a27),
				function(aVU) {
					var fp = aV6 + aV8 + .15 * aVA;
					ym.font = bD.t4.t7(0, Math.min(.4 * aVA, .028 * i.j)), bD.t4.textBaseline(ym, 0), bD.t4.textAlign(ym, 2), ym.fillStyle = colors[0], ym.fillText(bD.a6V.a7K(aVB), aV5 + aV7, fp), bD.t4.textAlign(ym, 0), ym.fillText(bD.a6V.a7K(
						new Date(aVC.getTime() - 6e4 * (aVU - 1) * aVH[data.aVM])), aV5, fp)
				}(aVU),
				function(aVU, aVW, aVV) {
					if (aVF && !(aVU < 2)) {
						for (var aD2, eP = (aVD - aV5) / aV7 * (aVU - 1), aVZ = Math.floor(eP), aVa = Math.floor(1 + eP), aVb = eP - aVZ, aVc = 1e5, aVd = -1, aVe = -1, aVf = aVV - (aVV - aVW) * (aVE - aV6) / aV8, h = data.data, aC = 0; aC < h
							.length; aC++) {
							var aH2, aVN = h[aC].aVN;
							aVN.length <= aVa || (aVN = aVN[aVZ] + aVb * (aVN[aVa] - aVN[aVZ]), (aH2 = Math.abs(aVf - aVN)) < aVc && (aVc = aH2, aVd = aC, aVe = aVN))
						} - 1 !== aVd && (aVV = aV6 + aV8 - (aVe - aVW) / (aVV - aVW) * aV8, ym.lineWidth = .5 * bf.a39, ym.strokeStyle = colors[aVd], ym.beginPath(), ym.moveTo(aV5, aVV), ym.lineTo(aVD, aVV), ym.lineTo(aVD, aV6 + aV8), ym
							.stroke(), ym.beginPath(), ym.arc(aVD, aVV, .1 * aV5, 0, 2 * Math.PI), ym.fillStyle = colors[aVd], ym.fill(), aVW = aV6 + aV8 + .15 * aVA, bD.t4.textAlign(ym, 1), aD2 = aVU - 2 < eP ? (aD2 = aVC.getTime() - 6e4 *
								aVH[data.aVM], new Date(aD2 + (eP - (aVU - 2)) * (aVB.getTime() - aD2))) : new Date(aVC.getTime() - 6e4 * (aVU - eP - 1) * aVH[data.aVM]), aVU = bD.a6V.a7K(aD2), eP = bD.t4.measureText(aVU), aD2 = bO.is(aVD,
								aV5 + .5 * eP, aV5 + aV7 - .5 * eP), ym.fillStyle = bD.color.qD(70, 50, 20), ym.fillRect(aD2 - .52 * eP, aV6 + aV8, 1.04 * eP, .55 * aVA), ym.fillStyle = colors[0], ym.fillText(aVU, aD2, aVW), ym.font = bD.t4
							.t7(0, .25 * aV5), bD.t4.textBaseline(ym, 1), bD.t4.textAlign(ym, 2), aD2 = .92 * aV5, aVU = (aVe / 1e3).toFixed(3), eP = bD.t4.measureText(aVU), aVW = aD2 - 1.04 * eP, ym.fillStyle = bD.color.qD(70, 50, 20), ym
							.fillRect(aVW, aVV - .1625 * aV5, aV5 - aVW, .275 * aV5), ym.fillStyle = colors[aVd], ym.fillText(aVU, aD2, aVV))
					}
				}(aVU, aVW, aVV)
			}(), ym.lineWidth = bf.a39, ym.strokeStyle = bE.qL, ym.beginPath(), ym.moveTo(aV5, aV6), ym.lineTo(aV5, aV6 + aV8), ym.lineTo(aV5 + aV7, aV6 + aV8), ym.stroke();
		var aC, fontSize = .5 * aV9,
			h = (ym.font = bD.t4.t7(0, fontSize), bD.t4.textBaseline(ym, 1), bD.t4.textAlign(ym, 0), data.data),
			fg = h.length,
			fp = aV6 - .5 * aV9,
			pU = "";
		for (aC = 0; aC < fg; aC++) pU += h[aC].name + "  ";
		pU = pU.trim();
		var aVi = bD.t4.measureText(pU),
			fn = .5 * (i.j - aVi);
		for (aVi > i.j && (fn = 0, ym.font = bD.t4.t7(0, i.j / aVi * fontSize)), aC = 0; aC < fg; aC++) ym.fillStyle = colors[aC], ym.fillText(h[aC].name, fn, fp), fn += bD.t4.measureText(h[aC].name + "  ")
	}, this.hu = function(mH, mI) {
		aVl(mH, mI)
	}, this.a5h = function(mH, mI) {
		aVl(mH, mI)
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	};
	var aC, eh, a7I, iZ, fj = data.data,
		fg = fj.length,
		max = 1;
	for (aC = 0; aC < fg; aC++) max = Math.max(max, fj[aC].aVN.length);
	for (aC = 0; aC < fg; aC++)
		for (; fj[aC].aVN.length < max;) fj[aC].aVN.unshift(0);
	eh = new Date, a7I = 6e4 * eh.getTimezoneOffset(), iZ = eh.getTime() - a7I, aVB = new Date(iZ), 6 === data.aVM ? function(eh, a7I) {
		var aVP = eh.getUTCFullYear(),
			eh = eh.getUTCMonth() + 1;
		aVC = eh < 12 ? new Date(Date.UTC(aVP, eh) - a7I) : new Date(Date.UTC(aVP + 1, 0) - a7I)
	}(eh, a7I) : (a7I = 6e4 * aVH[data.aVM], aVC = data.aVM <= 4 ? new Date(iZ + a7I - eh.getTime() % a7I) : new Date(iZ + a7I - (eh.getTime() + 2592e5) % a7I)), iZ = bD.color, colors = [bE.qL, iZ.qD(255, 0, 0), iZ.qD(0, 200, 0), iZ.qD(80, 80,
		255), iZ.qD(255, 255, 0), iZ.qD(255, 0, 255), iZ.qD(0, 255, 255), iZ.qD(255, 140, 0), iZ.qD(128, 128, 128), iZ.qD(0, 255, 140)], aTU = new yX(L(340) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aVM] + ", " + bD.a6V.a7H(aVB), [
		new x("⬅️ " + L(49), function() {
			u.v(1)
		}), new x(L(341), function() {
			u.v(14)
		})
	], !1)
}

function aT9() {
	var aTU, aTV, tT, aVm = -1;
	this.show = function() {
		aTU.show(), this.resize(), aVm = bm.buffer.data[125].value
	}, this.uU = function() {
		aTU.uU()
	}, this.resize = function() {
		aTU.resize(), aTV.resize()
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	}, aTU = new yX(L(342), [new x("⬅️ " + L(49), function() {
		aVm !== bm.buffer.data[125].value ? u.z.aVn() : u.aTS(13)
	})]), aTV = new tR(aTU.yc, ((tT = []).push(function() {
		var x7 = new tD,
			aTu = (x7.tG(L(343)), x7.tH(L(344)), new x(L(345), function() {
				bm.rr.px(130, 0), u.z.aVn()
			}, 0, 0, 1)),
			uH = new uI(bm.buffer.data[126], 0, function() {
				aTu.button.click()
			});
		return x7.tQ(uH), uH.e.placeholder = "a,b,c", uH.e.style.marginTop = "0.5em", x7.tQ(new uf([aTu.button])), x7
	}()), tT.push(function() {
		var x7 = new tD,
			aTu = new x(L(345), function() {
				bm.rr.px(130, 1), u.z.aVn()
			}, 0, 0, 1),
			aVs = new uI(bm.buffer.data[129], 1, function() {
				aVs.e.focus()
			}),
			aVt = new uI(bm.buffer.data[128], 1, function() {
				aTu.button.click()
			});
		return x7.tG(L(346)), x7.tQ(aVt), aVt.e.style.marginBottom = "0.5em", x7.tG(L(347)), x7.tQ(aVs), x7.tQ(new uf([aTu.button])), x7
	}()), tT.push(function() {
		var x7 = new tD;
		return x7.tG(L(348)), bm.buffer.data[125].vA = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], x7.tN(new yT(bm.buffer.data[125])), x7
	}()), tT.push(function() {
		var x7 = new tD;
		return x7.tG(L(349)), x7.tQ(new ub(bm.buffer.data[127], L(350))), x7
	}()), tT))
}

function aT8() {
	var aTU, aVu, aV7, aVv, aVw, aVx, colors = [0, 0, 0],
		aVy = -1;

	function aW1(aC) {
		var aW2 = aVu.fp + aC * (bf.gap + aVx);
		ym.fillStyle = "rgb(" + (0 === aC ? 150 : 2 === aC ? 30 : 0) + "," + (1 === aC ? 130 : 2 === aC ? 30 : 0) + "," + (2 === aC ? 220 : 0) + ")", ym.fillRect(aVv, aW2, colors[aC] * aVw, aVx), ym.strokeStyle = bE.qL, ym.strokeRect(aVv, aW2, aVw,
			aVx), ym.fillStyle = bE.qL, ym.font = bD.t4.t7(0, .32 * aVx), bD.t4.textBaseline(ym, 1), bD.t4.textAlign(ym, 0), ym.fillText(L(0 === aC ? 353 : 1 === aC ? 354 : 355) + aVz(aC), aVv + bf.gap, aW2 + .53 * aVx)
	}

	function aVz(aC, aW3) {
		return aW3 = aW3 || 256, bO.is(Math.floor(aW3 * colors[aC]), 0, aW3 - 1)
	}

	function a6B(mH, mI) {
		return !(mH < aVv || mI < aVu.fp || mH > aVu.fn + aVu.j || mI > aVu.fp + aVu.k)
	}
	this.show = function() {
		var g8 = bm.buffer.data[121].value;
		colors[0] = (g8 >> 12) / 63, colors[1] = (g8 >> 6 & 63) / 63, colors[2] = (63 & g8) / 63, aTU.show(), this.resize()
	}, this.uU = function() {
		bm.rr.px(121, (aVz(0, 64) << 12) + (aVz(1, 64) << 6) + aVz(2, 64)), aTU.uU()
	}, this.resize = function() {
		aTU.resize(), aVu.resize();
		var eq = i.l,
			yk = aTU.yh(),
			aW0 = (aVu.fp = Math.max(aVu.fp, eq * yk.uW + bf.gap), eq * yk.yj - 2 * bf.gap);
		aVu.k = Math.min(aVu.k, aW0), aVu.j = 2 * aVu.k, aVu.fp = eq * yk.uW + .5 * (eq * yk.yj - aVu.k), aVu.fn = .5 * (i.j - aVu.j), aV7 = .25 * aVu.j, aVv = aVu.fn + aV7 + bf.gap, aVw = aVu.j - aV7 - bf.gap, aVx = (aVu.k - 2 * bf.gap) / 3
	}, this.yl = function() {
		var eO, vn, g0;
		aTU.yl(), ym.lineWidth = bf.a39, eO = aVz(0), vn = aVz(1), g0 = aVz(2), ym.fillStyle = "rgb(" + eO + "," + vn + "," + g0 + ")", ym.fillRect(aVu.fn, aVu.fp, aV7, aVu.k), ym.strokeStyle = bE.qL, ym.strokeRect(aVu.fn, aVu.fp, aV7, aVu.k), ym
			.fillStyle = eO + vn + g0 < 306 && vn < 150 ? bE.qL : bE.qC, bD.t4.textBaseline(ym, 1), bD.t4.textAlign(ym, 1), ym.font = bD.t4.t7(0, .1 * aVu.k), ym.rotate(-Math.PI / 2), ym.fillText(L(352), -aVu.fp - .5 * aVu.k, aVu.fn + .5 * aV7),
			ym.setTransform(1, 0, 0, 1, 0, 0), aW1(0), aW1(1), aW1(2)
	}, this.hu = function(mH, mI) {
		a6B(mH, mI) && (aVy = bO.is(Math.floor((mI - aVu.fp) / (aVx + .75 * bf.gap)), 0, 2), colors[aVy] = bO.is((mH - aVv) / aVw, 0, 1), bi.dy = !0)
	}, this.a5h = function(mH) {
		-1 !== aVy && (colors[aVy] = bO.is((mH - aVv) / aVw, 0, 1), bi.dy = !0)
	}, this.a5k = function(mH, mI, deltaY) {
		a6B(mH, mI) && (mH = bO.is(Math.floor((mI - aVu.fp) / (aVx + .75 * bf.gap)), 0, 2), colors[mH] = bO.is(colors[mH] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bi.dy = !0)
	}, this.a65 = function() {
		0 <= aVy && (aVy = -1, bi.dy = !0)
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	}, aTU = new yX(L(351), [new x("⬅️ " + L(49), function() {
		u.z.aGx()
	})], !1), aVu = new u6([.5, .25], [.5, .5], 1)
}

function aTG() {
	var aUt, aUu, aUv, p5;

	function aUw() {
		aUy(), u.aTT()[19] = null, u.a5J()
	}

	function aW4() {
		aUy(), u.v(21)
	}

	function aUy() {
		1 === aE.data.gameMode ? aE.a8l.a8r() : 0 === aE.data.gameMode && 1 === aE.data.colorsType && bD.te.a6q(aUv.z2(), aE.data.colorsData, 262143)
	}
	this.show = function() {
		aUt.show(), this.resize()
	}, this.uU = function() {
		aUt.uU()
	}, this.resize = function() {
		aUt.resize(), aUu.resize()
	}, this.a6F = function(eq) {
		2 === eq && aUt.yd[0].tm()
	}, p5 = [new x("⬅️ " + L(49), aUw)], 1 === aE.data.gameMode && p5.push(new x(L(356), aW4, 1, 1)), aUt = new yX(L(357), p5), aUu = new tR(aUt.yc, (p5 = [], 0 === aE.data.gameMode ? (function(tT) {
		var x7 = new tD;
		x7.tG(L(333)), x7.tN(new yT({
			vA: [L(358), L(336)],
			value: aE.data.colorsType
		}, function(eP) {
			aUy(), aE.data.colorsType = eP, 1 !== aE.data.colorsType || aE.data.colorsData && aE.data.colorsData.length === aE.fd || (aE.data.colorsData = new Uint32Array(aE.fd)), u.v(21)
		})), tT.push(x7)
	}(p5), 1 === aE.data.colorsType && function(tT) {
		var x7 = new tD;
		x7.tG("Data"), (aUv = new yu(0, 1, 0, 1)).z1(bD.pY.a8U(aE.data.colorsData, 1)), x7.tQ(aUv), tT.push(x7)
	}(p5)) : (aE.a8l.a8r(), p5.push(function() {
		var x7 = new tD;
		x7.tG(L(339));
		for (var aC = 0; aC < bj.a4W.length; aC++) {
			var iZ = (aC + 1) % bj.a4W.length,
				e = x7.tL((0 == iZ ? "" : "Team ") + bj.a4W[iZ]);
			aC && (e.style.marginTop = "0.5em"), x7.tQ(new uI({
				eP: -1,
				value: aE.data.teamPlayerCount[iZ]
			}, 1, 0, function(e) {
				aUt.yd[1].tq(0);
				var playerCount = bO.is(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aE.data.teamPlayerCount[e.target.aW7] = playerCount
			})).e.aW7 = iZ
		}
		return x7
	}()), function(tT) {
		for (var x7 = new tD, vA = (x7.tG(L(359)), []), aC = 0; aC < bj.a4W.length; aC++) {
			var iZ = (aC + 1) % bj.a4W.length;
			vA.push(bj.a4W[iZ])
		}
		aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1));
		x7.tN(new yT({
			vA: vA,
			value: (aE.data.colorsData[0] % 16 + bj.a4W.length - 1) % bj.a4W.length
		}, function(eP) {
			var eP = (eP + 1) % bj.a4W.length,
				aW8 = bj.aW9[eP],
				aW8 = (aW8[0] >> 2 << 12) + (aW8[1] >> 2 << 6) + (aW8[2] >> 2);
			aE.data.colorsData[0] = aW8 - (15 & aW8) + eP
		})), tT.push(x7)
	}(p5)), p5))
}

function vS(id, a86, aWA) {
	var aTU, aWB;

	function aWG() {
		aWB.tU.innerHTML += "<br>" + L(362)
	}

	function aWP() {
		var g0 = 1;
		u.v(4, 1, new w(L(363), L(364), !1, [new x("🔄 Reload", function() {
			g0 && (setTimeout(function() {
				u.v(1)
			}, 5e3), a1.a2.a3()), g0 = 0
		}, bE.qi)]))
	}

	function aWF() {
		bG.a8(90), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bG.a9(30, Math.floor(bO.pow(30) * Math.random())), bK.dr(bG.aD), bm.rr.px(110, __fx.passwordReset.getCustomPassword() || bI.f7
			.vT(bI.f7.vU(15))), b1.aU4.aWR()
	}
	this.aWC = !0, this.aWD = id, this.show = function() {
		aTU.show(), this.resize(), 15 === id ? (b1.z.aWE(id) ? aWF : aWG)() : 16 === id ? b1.z.aWE(id) ? b1.en.eo(2) : aWG() : 17 === id ? b1.z.aWE(id) ? b1.en.eo(3) : aWG() : 18 === id ? (b1.z.close(0, 3253), b1.z.aLY(0, id, 0), aWG()) : 21 ===
			id ? b1.z.aWE(id) ? b1.aWH.aWI(a86.vi, a86.vj, a86.vk) : aWG() : 22 === id ? b1.z.aWE(id) ? b1.aWH.aWJ(a86.vi, a86.aWK, a86.aWL) : aWG() : 23 === id ? b1.z.aWE(id) ? b1.aWH.aWM(a86.aVM, a86.a4t) : aWG() : 24 === id ? b1.z.aWE(id) ? b1
			.aWH.aWN(a86.aVM, a86.vj, a86.vk) : aWG() : 25 === id ? b1.z.aWE(id) ? b1.aU4.aUA(a86) : aWG() : 28 === id ? b1.z.aWE(id) ? b1.aWH.aWO(a86.vi, a86.aWK, a86.aWL) : aWG() : 29 === id ? b1.z.aWE(id) ? b1.aU4.aUZ(a86) : aWG() : 30 ===
			id && (b1.z.aWE(id) ? bA.aGs() || aWP() : aWG())
	}, this.aWQ = function() {
		15 === id ? aWF() : 16 === id ? b1.en.eo(2) : 17 === id ? b1.en.eo(3) : 18 === id ? u.v(8, this.a5P, new vS(16)) : 21 === id ? b1.aWH.aWI(a86.vi, a86.vj, a86.vk) : 22 === id ? b1.aWH.aWJ(a86.vi, a86.aWK, a86.aWL) : 23 === id ? b1.aWH.aWM(
			a86.aVM, a86.a4t) : 24 === id ? b1.aWH.aWN(a86.aVM, a86.vj, a86.vk) : 25 === id ? b1.aU4.aUA(a86) : 28 === id ? b1.aWH.aWO(a86.vi, a86.aWK, a86.aWL) : 29 === id ? b1.aU4.aUZ(a86) : 30 === id ? bA.aGs() || aWP() : 1e3 === id && (
			this.aWD = id = 25, b1.aU4.aUA(a86))
	}, this.aGw = function(code, c1, data) {
		!c1 && code !== id || (15 === code || 16 === code ? u.v(7, this.a5P) : 17 === code ? (b1.z.close(0, 3252), bm.z.zl(0), bm.buffer.data[117].vA && 0 < bm.buffer.data[117].vA.length && (c1 = bm.z.zn(0)) ? (bm.rr.px(105, c1.pc), bm.rr.px(106,
			c1.password), u.v(8, this.a5P, new vS(16))) : (bm.rr.px(105, ""), u.z.aGx())) : 21 === code ? u.v(10, this.a5P, new aFJ(data)) : 23 === code ? u.v(13, this.a5P, new aV4({
			data: data,
			aVM: a86.aVM
		})) : 25 === code ? (u.z.aTA.pc = a86.pc, bm.zA.nR(a86.pc), u.v(15, this.a5P)) : 30 === code && (data ? u.v(1) : aWP()))
	}, this.uU = function() {
		aTU.uU()
	}, this.resize = function() {
		aTU.resize(), aWB.resize()
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	}, aTU = new yX(L(360), [new x("⬅️ " + L(49), function() {
		aWA ? u.v(29) : u.z.aGx()
	})]), aWB = new ue(aTU.yc, L(361))
}

function aTE() {
	var aUt, aUu, tT;

	function aWU() {
		var h9;
		1 === aE.data.gameMode ? (aE.data.teamPlayerCount || (aE.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aE.a8l.a8r()), h9 = bD.te.a6k(aE.data.teamPlayerCount, 0), aE.data.numberTeams = h9) : (2 === aE.data
			.botDifficultyType && (aE.data.botDifficultyType = 0), 1 === aE.data.spawningType && (aE.data.spawningType = 0))
	}

	function aUw() {
		1 !== aE.data.gameMode && (aE.data.teamPlayerCount = null), aWW(), aE.data.canvas = null, u.v(5, 5)
	}

	function aWW() {
		bC.sg.dr(), bm.rr.px(156, bC.a92.a3d())
	}

	function aWS() {
		aE.data.isReplay = 0, aWW(), aE.a8l.a9F(), ab.aLj(), aE.a8l.a9C(), aE.data.canvas = 2 === aE.data.mapType ? bV.a0i : null, aE.a8p(), aE.a8n = 1
	}

	function aWi() {
		aWU();
		for (var h = [aWZ(), aWa(), aWb()], aC = 3; aC < 6; aC++) u.removeChild(aUu.tU, aUu.tV[aC].tF), aUu.tV[aC] = h[aC - 3], aUu.tU.appendChild(aUu.tV[aC].tF);
		aUu.resize()
	}

	function aWZ() {
		var aWj, x7 = new tD;
		return x7.tG(L(357)), aWj = 0 === aE.data.gameMode ? [L(358), L(336)][aE.data.colorsType] : aE.data.numberTeams + " Team" + (1 === aE.data.numberTeams ? "" : "s"), x7.tL(aWj), x7.tQ(new uf([new x(L(368), function() {
			u.v(21)
		}).button])), x7
	}

	function aWa() {
		var x7 = new tD,
			h = (x7.tG(L(76)), [L(335) + ": " + aF.lD[aE.data.botDifficultyValue], L(337), L(338), L(336)]);
		return x7.tL(h[aE.data.botDifficultyType]), x7.tQ(new uf([new x(L(368), function() {
			u.v(25)
		}).button])), x7
	}

	function aWb() {
		var x7 = new tD,
			h = (x7.tG("Spawning"), [L(358), L(370), L(336)]);
		return x7.tL(h[aE.data.spawningType]), x7.tQ(new uf([new x(L(368), function() {
			u.v(24)
		}).button])), x7
	}
	this.show = function() {
		aUt.show(), this.resize(), aUt.yc.scrollTop = u.z.vK[0]
	}, this.uU = function() {
		u.z.vK[0] = aUt.yc.scrollTop, aUt.uU()
	}, this.resize = function() {
		aUt.resize(), aUu.resize()
	}, this.a6F = function(eq) {
		2 === eq && aUt.yd[0].tm()
	}, aUt = new yX("🔧 " + L(365), [new x("⬅️ " + L(49), aUw), new x(L(366), aWS)]), aWU(), aE.data.canvas || (2 === aE.data.mapType ? aE.data.canvas = bV.a0i : 1 === aE.data.mapType ? aE.data.canvas = bV.aQs(bV.a9D(aE.data), 0).a0i : (aE.data
		.mapType = 0, aE.data.passableWater = aE.data.passableMountains = 1, aE.data.canvas = bV.aQs(bV.a9D(aE.data), aE.data.mapSeed).a0i)), aUu = new tR(aUt.yc, (function(tT) {
		var x7 = new tD,
			a70 = (x7.tG(L(367)), aE.data.canvas);
		a70.style.width = "100%", x7.tQ({
			e: a70
		}), x7.tQ(new uf([new x(L(368), function() {
			u.v(20)
		}).button])), tT.push(x7)
	}(tT = []), function(tT) {
		var x7 = new tD;
		x7.tG(L(339)), x7.tQ(new uI({
			eP: -1,
			value: aE.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bO.is(Math.floor(e.target.value), 1, 512);
			e.target.value = aE.data.playerCount = playerCount, 1 === aE.data.gameMode && (e = bD.te.a6k(aE.data.teamPlayerCount, 0), aE.a8l.a8r(), bD.te.a6k(aE.data.teamPlayerCount, 0) !== e) && aWi()
		})), tT.push(x7)
	}(tT), function(tT) {
		var x7 = new tD;
		x7.tG(L(369)), x7.tN(new yT({
			vA: ["Battle Royale", "Teams"],
			value: aE.data.gameMode
		}, function(eP) {
			aE.data.gameMode !== eP && (1 === (aE.data.gameMode = eP) && (aE.data.colorsData || (aE.data.colorsData = new Uint32Array(1)), aE.data.colorsData[0] = 258049), aWi())
		})), tT.push(x7)
	}(tT), tT.push(aWZ()), tT.push(aWa()), tT.push(aWb()), function(tT) {
		var x7 = new tD,
			h = (x7.tG(L(371)), [L(372), L(373), L(336)]);
		x7.tL(h[aE.data.playerNamesType]), x7.tQ(new uf([new x(L(368), function() {
			u.v(23)
		}).button])), tT.push(x7)
	}(tT), function(tT) {
		var x7 = new tD,
			h = (x7.tG(L(332)), [L(334), L(335) + ": " + aE.data.aIncomeValue, L(336)]);
		x7.tL(h[aE.data.aIncomeType]), x7.tQ(new uf([new x(L(368), function() {
			u.v(22)
		}).button])), tT.push(x7)
	}(tT), function(tT) {
		var x7 = new tD,
			h = (x7.tG(L(374)), [L(334), L(335) + ": " + aE.data.tIncomeValue, L(336)]);
		x7.tL(h[aE.data.tIncomeType]), x7.tQ(new uf([new x(L(368), function() {
			u.v(26)
		}).button])), tT.push(x7)
	}(tT), function(tT) {
		var x7 = new tD,
			h = (x7.tG(L(375)), [L(334), L(335) + ": " + aE.data.iIncomeValue, L(336)]);
		x7.tL(h[aE.data.iIncomeType]), x7.tQ(new uf([new x(L(368), function() {
			u.v(27)
		}).button])), tT.push(x7)
	}(tT), function(tT) {
		var x7 = new tD,
			h = (x7.tG(L(376)), [L(334), L(335) + ": " + aE.data.sResourcesValue, L(336)]);
		x7.tL(h[aE.data.sResourcesType]), x7.tQ(new uf([new x(L(368), function() {
			u.v(28)
		}).button])), tT.push(x7)
	}(tT), function(tT) {
		var x7 = new tD;
		x7.tG(L(377)), x7.tQ(new uf([new x(L(378), function() {
			u.y(), aE.a8l.a9G(), u.z.vK[0] = 0, u.v(19)
		}).button])), x7.tQ(new uf([new x(L(379), function() {
			bp.aO5()
		}).button])), x7.tQ(new uf([new x(L(380), function() {
			return bp.aO7(), !0
		}).button])), tT.push(x7)
	}(tT), tT))
}

function aTP() {
	var aUt, q5 = !0;

	function pt(ps, a9K) {
		var tF = document.createElement("div"),
			aWm = document.createElement("span"),
			aWn = document.createElement("span");
		aWm.textContent = aX.aFf(a9K.eg) + ":", aWm.style.color = bE.qa, aWm.style.paddingRight = "0.4em", aWm.style.display = "table-cell", aWm.style.width = "6ch", aWm.style.textAlign = "end", tF.appendChild(aWm), aWn.textContent = a9K.pU, tF
			.appendChild(aWn), tF.style.display = "table", a9K.s5 && function(tF, s5) {
				{
					var aNS;
					s5 >= 1024 - ak.q3.a2w ? ((aNS = document.createElement("img")).src = ak.a0l.a2k[s5 - 1024 + ak.q3.a2w].toDataURL(), aNS.style.width = "1.5em", aNS.style.height = "1.5em", aNS.style.verticalAlign = "middle", tF.appendChild(aNS)) :
						((aNS = document.createElement("span")).textContent = ak.q3.a3B(s5), aNS.style.display = "inline-block", aNS.style.fontSize = "1.5em", aNS.style.lineHeight = "1em", aNS.style.verticalAlign = "middle", tF.appendChild(aNS))
				}
			}(tF, a9K.s5), ps.appendChild(tF)
	}

	function aWl() {
		q5 && (aUt.yc.scrollTop = aUt.yc.scrollHeight)
	}
	this.clear = function() {
		aUt.yc.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var aAD = bu.a9N(), fg = aAD.length, ps = document.createDocumentFragment(), aC = 0; aC < fg; aC++) pt(ps, aAD[aC]);
		aUt.yc.appendChild(ps), aWl(), aUt.show(), this.resize(), q5 = !0, aWl()
	}, this.uU = function() {
		aUt.uU()
	}, this.resize = function() {
		aUt.resize(), aUt.yc.style.padding = "0.4em " + bD.t4.tf(bf.tc)
	}, this.a6F = function(eq) {
		2 === eq && aUt.yd[0].tm()
	}, this.a2d = function(a9K) {
		var ps = document.createDocumentFragment();
		pt(ps, a9K), aUt.yc.appendChild(ps), aWl()
	}, (aUt = new yX(L(381), [new x("⬅️ " + L(49), function() {
		u.aTS(1)
	})])).yc.style.overflowY = "auto", aUt.yc.addEventListener("scroll", function() {
		q5 = aUt.yc.scrollTop >= aUt.yc.scrollHeight - aUt.yc.clientHeight - 2
	})
}

function aSw() {
	var aWp = 0,
		aWq = 50;
	this.send = function(g8, pc, send) {
		g8 = bD.h2.a83(g8, 1, 1e6), aWp + g8 < aWq ? (aWp += g8, send()) : u.v(4, u.vR, new w(L(209), L(382, [pc, g8]), !1, [new x("⬅️ " + L(49), function() {
			u.a5J()
		}), new x("✅ OK", function() {
			aWp = 0, aWq *= 2, u.a5J(), send()
		})]))
	}
}

function aTM() {
	var aUt, aUu, aUv, tT;

	function aUw() {
		aUy(), 2 !== aE.data.iIncomeType && (aE.data.iIncomeData = null), u.aTT()[19] = null, u.a5J()
	}

	function aUy() {
		2 === aE.data.iIncomeType && bD.te.a6q(aUv.z2(), aE.data.iIncomeData, 255)
	}
	this.show = function() {
		aUt.show(), this.resize()
	}, this.uU = function() {
		aUt.uU()
	}, this.resize = function() {
		aUt.resize(), aUu.resize()
	}, this.a6F = function(eq) {
		2 === eq && aUt.yd[0].tm()
	}, aUt = new yX(L(375), [new x("⬅️ " + L(49), aUw)]), aUu = new tR(aUt.yc, (function(tT) {
		var x7 = new tD;
		x7.tG(L(333)), x7.tN(new yT({
			vA: [L(334), L(335), L(336)],
			value: aE.data.iIncomeType
		}, function(eP) {
			aUy(), 2 !== eP || aE.data.iIncomeData || (aE.data.iIncomeData = new Uint8Array(aE.fd), aE.data.iIncomeData.fill(32)), aE.data.iIncomeType = eP, u.v(27)
		})), tT.push(x7)
	}(tT = []), function(tT) {
		var x7;
		1 === aE.data.iIncomeType && ((x7 = new tD).tG("Value"), x7.tQ(new uI({
			eP: -1,
			value: aE.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bO.is(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.iIncomeValue = value
		})), tT.push(x7))
	}(tT), function(tT) {
		var x7;
		2 === aE.data.iIncomeType && ((x7 = new tD).tG("Data"), (aUv = new yu(0, 1, 0, 1)).z1(bD.pY.a8U(aE.data.iIncomeData, 4)), x7.tQ(aUv), tT.push(x7))
	}(tT), tT))
}

function aT4() {
	var aWr, aWs, aVu, uH, aWt, uw = 0;
	this.aME = new vY, aVu = new u6([.45, .27], [.5, .5], 2 / 3), aWs = [new x("⚔️<br>" + L(383), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aWu(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bE.qo), new x("🗡️<br>" + L(365), function() {
			aWu(1)
		}, bE.r8), new x("🔑<br>" + L(384), function() {
			aWu(2)
		}, bE.rV), new x("☰<br>" + L(385), function() {
			aWu(3)
		}, bE.qY), new x("", function() {
			u.v(12)
		}, bE.qH, !1),
		new x("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new x("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], uH = new uI(bm.buffer.data[122]);
	for (var aC = 0; aC < aWs.length; aC++) aWs[aC].button.style.position = "absolute";

	function aWu(eP) {
		a1.a2.setState(10), ac.vr() || ac.aM5(), 0 === eP ? u.z.a95(1) : 1 === eP ? (bC.aOP.a0U(bm.buffer.data[156].value, 1) || aE.a8l.a9G(), u.v(19)) : 2 === eP ? 0 !== a1.id || bm.buffer.data[140].value ? u.v(8, u.vR, new vS(16)) : u.z.aWv(u.vR,
			16) : 3 === eP && u.v(1)
	}
	uH.e.style.position = "absolute", uH.e.style.textAlign = "center", uH.e.placeholder = L(386), this.show = function() {
		ab.setState(0), a1.a2.setState(12), this.aME.show(), aWs[4].tq(bD.color.a77(bm.buffer.data[121].value)), this.resize(), document.body.appendChild(uH.e);
		for (var aC = 0; aC < aWs.length; aC++) document.body.appendChild(aWs[aC].button);
		1 !== a1.id || a1.e8 < 5 || (aWt && bi.eg > aWt + 144e5 ? a1.zU.setState(14) : aWt = bi.eg)
	}, this.uU = function() {
		this.aME.uU(), u.removeChild(document.body, uH.e);
		for (var aC = 0; aC < aWs.length; aC++) u.removeChild(document.body, aWs[aC].button)
	}, this.resize = function() {
		this.aME.resize(), this.aME.resize(), aVu.resize();
		var gap = .5 * bf.gap,
			wK = 10 / 99 * .84 * aVu.j,
			aWy = .16 * aVu.k,
			aDa = .19 * aVu.j,
			fn = aVu.fn + aDa,
			wK = aVu.fp + wK + 3 * gap,
			j = .5 * (aVu.j - gap) - aDa,
			aDa = aVu.j - 2 * aDa - aWy - gap,
			aDa = (bD.t4.vp(uH.e, fn, wK, aDa, aWy), bD.t4.vp(aWs[4].button, fn + aDa + gap, wK, aWy, aWy), uw = wK, .5 * (aVu.fp + aVu.k - (wK += aWy + gap) - gap));
		bD.t4.vp(aWs[0].button, fn, wK, j, aDa), bD.t4.vp(aWs[1].button, fn + j + gap, wK, j, aDa), bD.t4.vp(aWs[2].button, fn, wK + aDa + gap, j, aDa), bD.t4.vp(aWs[3].button, fn + j + gap, wK + aDa + gap, j, aDa);
		bD.t4.vp(aWs[5].button, fn, wK + aDa * 2 + gap * 2, j * 2 + gap, aDa / 3);
		bD.t4.vp(aWs[6].button, fn, wK + aDa * 2.33 + gap * 3, j * 2 + gap, aDa / 3);
		for (var aC = 0; aC < aWs.length; aC++) aWs[aC].button.style.font = bD.t4.t7(0, bD.t4.yE(.065 * aVu.k)), bD.t4.t9(aWs[aC].button, 5);
		uH.e.style.font = bD.t4.t7(0, bD.t4.yE(.08 * aVu.k)), bD.t4.t9(uH.e, 5)
	}, this.yl = function() {
		if (ab.aLn(), aU.yl(), fg = Math.floor((a1.a2.it() ? .018 : .0137) * i.iu), ym.font = bD.t4.t7(0, Math.max(5, fg)), bD.t4.textBaseline(ym, 0), bD.t4.textAlign(ym, 2), ym.fillStyle = bE.qL, ym.fillText(m.e8, i.j, 0), text = "Win count: " +
			__fx.wins.count, textLength = ym.measureText(text).width, fg = Math.max(5, fg), ym.textAlign = "left", ym.textBaseline = "middle", ym.fillText(text, ym.canvas.width - textLength - fg / 2, 2 * fg), aP.yl(uw), bb.yl(), ac.vr()) {
			ym.imageSmoothingEnabled = !1;
			var text = ac.x1("territorial.io"),
				textLength = .84 * aVu.j / text.width;
			ym.setTransform(textLength, 0, 0, textLength, aVu.fn + .08 * aVu.j, aVu.fp), aWr = aWr || bD.p1.a84(text, bD.p1.a8B, [0, 0, 0]);
			for (var fn = -1; fn <= 1; fn += 2)
				for (var fp = -1; fp <= 1; fp += 2) ym.drawImage(aWr, fn, fp);
			ym.drawImage(text, 0, 0), ym.imageSmoothingEnabled = !0;
			var fg = ac.x1("logo"),
				aX1 = .6666 * textLength * text.height / fg.height,
				oI = .5 * i.j,
				oJ = aVu.fp + .5 * textLength * text.height - .5 * aX1 * fg.height;
			ym.setTransform(aX1, 0, 0, aX1, oI - .6 * textLength * text.width, oJ), ym.drawImage(fg, 0, 0), ym.setTransform(aX1, 0, 0, aX1, oI + .6 * textLength * text.width - aX1 * fg.width, oJ), ym.drawImage(fg, 0, 0), ym.setTransform(1, 0, 0,
				1, 0, 0), ym.imageSmoothingEnabled = !0
		}
	}
}

function aTB() {
	var aTU, aX2, aX3, yY;

	function aX4(aC) {
		u.v(8, u.vR, new vS(21, {
			vi: aC,
			vj: 0,
			vk: 10
		}))
	}
	this.show = function() {
		aTU.show(), this.resize()
	}, this.uU = function() {
		aTU.uU()
	}, this.resize = function() {
		aTU.resize(), aX2.resize()
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	}, aX3 = [new x(L(387), function() {
		aX4(1)
	}, 0, 0, 1), new x(L(388), function() {
		aX4(2)
	}, 0, 0, 1), new x(L(389), function() {
		aX4(3)
	}, 0, 0, 1), new x(L(390), function() {
		aX4(0)
	}, 0, 0, 1), new x(L(391), function() {
		aX4(9)
	}, 0, 0, 1), new x(L(392), function() {
		aX4(10)
	}, 0, 0, 1), new x(L(393), function() {
		aX4(11)
	}, 0, 0, 1), new x(L(394), function() {
		aX4(13)
	}, 0, 0, 1)], yY = [new x("⬅️ " + L(49), function() {
		u.a5J()
	})], aTU = new yX(L(395), yY), aX2 = new u4(aX3, aTU.yc)
}

function aHK(title, tM, aX5) {
	var aTU, aWB;
	this.show = function() {
		aTU.show(), this.resize()
	}, this.uU = function() {
		aTU.uU()
	}, this.resize = function() {
		aTU.resize(), aWB.resize()
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	}, aX5 = aX5 || [new x("⬅️ " + L(49), function() {
		u.a5J()
	}, bE.r2)], aTU = new yX(title, aX5), aWB = new ue(aTU.yc, tM), bD.t4.textAlign(aTU.yc.style, 1)
}

function aFJ(data) {
	var aTU, aX6;

	function aXF(fg) {
		return fg < 60 ? 1 === fg ? fg + " Second" : fg + " Seconds" : fg < 3600 ? 1 === (fg = Math.floor(fg / 60)) ? fg + " Minute" : fg + " Minutes" : fg < 172800 ? 1 === (fg = Math.floor(fg / 3600)) ? fg + " Hour" : fg + " Hours" : (fg = Math
			.floor(fg / 172800)) + " Days"
	}

	function aX8(kH) {
		var fg = data.data.length;
		if (fg) {
			for (var vj, max = min = parseInt(data.data[0][0]), aC = 1; aC < fg; aC++) var aKA = parseInt(data.data[aC][0]),
				min = Math.min(aKA, min),
				max = Math.max(aKA, max);
			vj = kH < 0 ? min + kH : max + 1, u.v(8, u.a5O().a5P, new vS(21, {
				vi: data.vi,
				vj: vj,
				vk: vj + Math.abs(kH)
			}))
		}
	}
	if (this.show = function() {
			aTU.show(), this.resize()
		}, this.uU = function() {
			aTU.uU()
		}, this.resize = function() {
			aTU.resize(), aX6.resize()
		}, this.a6F = function(eq) {
			2 === eq && aTU.yd[0].tm()
		}, data.aFK) {
		aTU = new yX(L(33), [new x("⬅️ " + L(49), function() {
			u.a5J()
		})]);
		var fj = {
				vB: [],
				vG: [L(408), L(409), L(410) + " ↗"],
				vN: [12, 50, 38]
			},
			a9A = aE.data.a9A;
		if (a9A) {
			for (var fg = a9A.length, vB = fj.vB, a2e = ah.a2e, aC = 0; aC < fg; aC++) vB.push([{
				g8: aC + 1 + ".",
				eh: 0
			}, {
				g8: a2e[aC],
				eh: 0
			}, {
				g8: bI.f7.a3S(a9A[aC], 5),
				eh: 1,
				pc: a9A[aC],
				vQ: 0
			}]);
			aX6 = new v9(aTU.yc, fj, {
				vJ: 1
			})
		} else aX6 = new v9(aTU.yc, fj)
	} else {
		var fj = data.data.length ? 0 : 1,
			aX5 = [new x("⬅️ " + L(49), function() {
				u.a5J()
			}), new x(L(396), function() {
				aX8(-10)
			}, fj, 0, 1), new x(L(397), function() {
				aX8(10)
			}, fj, 0, 1), new x(L(341), function() {
				u.v(11, 10, new aX9({
					vi: data.vi
				}))
			})],
			vG = [L(398), L(399), L(400), L(401), L(402), L(403), L(404), L(405), L(406), L(407), L(392), L(393), "Audit Log", L(394)];
		aTU = new yX(vG[data.vi], aX5), ! function() {
			var aC, fj = {
					vB: []
				},
				vB = fj.vB,
				aXB = data.data,
				fg = aXB.length;
			fg && 0 === aXB[0][0] && 0 <= (eP = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1, 7][data.vi]) && (u.z.vl[eP] = aXB[0][1]);
			var oH = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1, .01][data.vi],
				a8H = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 2][data.vi],
				eP = [
					[L(411), L(32) + " ↗", L(412)],
					[L(411), L(413), L(414), L(415) + " ↗"],
					[L(411), L(32) + " ↗", L(414)],
					[L(411), L(32) + " ↗", L(414)],
					[L(408), L(416), L(417) + " ↗", L(418) + " ↗", L(133)],
					[L(408), L(416), L(419) + " ↗", L(420) + " ↗", L(421)],
					[L(408), L(416), L(422) + " ↗", L(423) + " ↗", L(424)],
					[L(408), L(416), L(419) + " ↗", L(420) + " ↗", L(425)],
					[L(408), L(416), L(417) + " ↗", L(418) + " ↗", L(133)],
					[L(411), L(32) + " ↗", L(414)],
					[L(411), L(32) + " ↗", L(426)],
					[L(411), L(32) + " ↗", L(414)],
					[L(408), L(416), L(417) + " ↗", L(418) + " ↗", L(427)],
					[L(411), L(32) + " ↗", L(414)]
				];
			if (fj.vG = eP[data.vi], fj.vN = [
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
				][data.vi], 0 === data.vi || 2 === data.vi || 3 === data.vi || 9 === data.vi || 10 === data.vi || 11 === data.vi || 13 === data.vi)
				for (aC = 0; aC < fg; aC++) vB.push([{
					g8: aXB[aC][0] + 1 + ".",
					eh: 0
				}, {
					g8: aXB[aC][1],
					eh: 1,
					pc: aXB[aC][4],
					vQ: aXB[aC][3]
				}, {
					g8: (oH * aXB[aC][2]).toFixed(a8H),
					eh: 0
				}]);
			else if (12 === data.vi)
				for (aC = 0; aC < fg; aC++) {
					var aXE = aXB[aC][3];
					vB.push([{
						g8: "" + aXB[aC][0],
						eh: 0
					}, {
						g8: aXF(aXB[aC][4]),
						eh: 0
					}, {
						g8: aXB[aC][5],
						eh: 1,
						pc: aXB[aC][1],
						vQ: 0
					}, {
						g8: aXB[aC][6],
						eh: 1,
						pc: aXB[aC][2],
						vQ: 0
					}, {
						g8: br.eV(aXE, bI.f7.a3S(aXB[aC][1], 5)),
						eh: 0
					}])
				} else if (1 === data.vi)
					for (aC = 0; aC < fg; aC++) vB.push([{
						g8: aXB[aC][0] + 1 + ".",
						eh: 0
					}, {
						g8: aXB[aC][1],
						eh: 0
					}, {
						g8: (oH * aXB[aC][2]).toFixed(a8H),
						eh: 0
					}, {
						g8: aXB[aC][3],
						eh: 1,
						pc: aXB[aC][5],
						vQ: aXB[aC][4]
					}]);
				else if (4 === data.vi || 5 === data.vi || 6 === data.vi || 7 === data.vi || 8 === data.vi)
				for (aC = 0; aC < fg; aC++) {
					var aXG = aXB[aC][5];
					4 === data.vi || 8 === data.vi ? "100%" === (aXG = (aXG % 64 * 100 / (aXG >> 6)).toFixed(0) + "%") && (4 === data.vi ? aXG += " (" + L(428) + ")" : aXG += " (" + L(429) + ")") : 5 === data.vi ? 32768 <= aXG && (aXG = -(aXG -
						32768)) : aXG = (oH * aXG).toFixed(a8H), vB.push([{
						g8: "" + aXB[aC][0],
						eh: 0
					}, {
						g8: aXF(aXB[aC][6]),
						eh: 0
					}, {
						g8: aXB[aC][7],
						eh: 1,
						pc: aXB[aC][1],
						vQ: aXB[aC][2]
					}, {
						g8: aXB[aC][8],
						eh: 1,
						pc: aXB[aC][3],
						vQ: aXB[aC][4]
					}, {
						g8: "" + aXG,
						eh: 0
					}])
				}
			aX6 = new v9(aTU.yc, fj)
		}()
	}
}

function aX9(a86) {
	var aTU, aTV, tT;
	this.show = function() {
		aTU.show(), this.resize()
	}, this.uU = function() {
		aTU.uU()
	}, this.resize = function() {
		aTU.resize(), aTV.resize()
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	}, aTU = new yX(L(430), [new x("⬅️ " + L(49), function() {
		u.aTS(10)
	})]), aTV = new tR(aTU.yc, ((tT = []).push(function() {
		var aTu, x7 = new tD,
			aVs = new uI(bm.buffer.data[132], 1, function() {
				aTu.button.click()
			}),
			aVt = new uI(bm.buffer.data[131], 1, function() {
				aVs.e.focus()
			});
		x7.tG(L(346)), x7.tQ(aVt), aVt.e.style.marginBottom = "0.8em", x7.tG(L(347)), x7.tQ(aVs);
		return aTu = new x(L(345), function() {
			vj = Math.floor(aVt.e.value), vk = Math.floor(aVs.e.value);
			var vk, vj = {
				a6i: Math.min(vj, vk),
				aSa: Math.max(vj, vk)
			};
			u.v(8, u.a9M(10).a5P, new vS(21, {
				vi: a86.vi,
				vj: vj.a6i,
				vk: vj.aSa
			}))
		}, 0, 0, 1), x7.tQ(new uf([aTu.button])), x7
	}()), tT.push(function() {
		var aTu, x7 = new tD,
			aVs = new uI(bm.buffer.data[134], 1, function() {
				aTu.button.click()
			}),
			aVt = new uI(bm.buffer.data[133], 0, function() {
				aVs.e.focus()
			});
		return x7.tG(1 === a86.vi ? L(431) : L(432)), x7.tQ(aVt), aVt.e.style.marginBottom = "0.8em", x7.tG(L(433)), x7.tQ(aVs), aTu = new x(L(345), function() {
			var aWK = aVt.e.value.slice(0, 20),
				aWL = Math.abs(Math.floor(aVs.e.value));
			u.v(8, u.a9M(10).a5P, new vS(22, {
				vi: a86.vi,
				aWK: aWK,
				aWL: aWL
			}))
		}, 0, 0, 1), x7.tQ(new uf([aTu.button])), x7
	}()), tT.push(function() {
		var aTu, x7 = new tD,
			aVs = new uI(bm.buffer.data[152], 1, function() {
				aTu.button.click()
			}),
			aVt = new uI(bm.buffer.data[151], 0, function() {
				aVs.e.focus()
			});
		return x7.tG(L(434)), x7.tQ(aVt), aVt.e.style.marginBottom = "0.8em", x7.tG(L(433)), x7.tQ(aVs), aTu = new x(L(345), function() {
			var aWK = aVt.e.value.slice(0, 5),
				aWL = Math.abs(Math.floor(aVs.e.value));
			u.v(8, u.a9M(10).a5P, new vS(28, {
				vi: a86.vi,
				aWK: aWK,
				aWL: aWL
			}))
		}, 0, 0, 1), x7.tQ(new uf([aTu.button])), x7
	}()), tT))
}

function aTO() {
	var aXK, aXL, aXM, aXN, aXO, aXP, aXQ, vu, vv, aXR = new Array(2);

	function aXT(button, aXV) {
		button = new uQ("", button, 1, aXV);
		return button.uS.style.right = "0.2em", button.uS.style.textAlign = "left", button.uS.style.overflow = "hidden", button.uS.style.textOverflow = "ellipsis", button.uS.translate = !1, button
	}

	function aJr() {
		var input, aIv;
		!bq.fD || (aIv = (input = aXK.w4.uH.e).value.trim().slice(0, 255)).length < 1 || (bq.pW.a4D(aIv), input.value = bq.pW.aK1(), aXK.w4.uR(), bM.ty()) || input.focus()
	}

	function aXS(wG) {
		var aXX = bq.z.aHe;
		aXX !== wG && (aXU(aXX, 0), aXU(wG, 1), bq.z.aHe = wG, 0 === aXX && b1.aIL.aIM(1), 0 === wG ? (b1.aIL.aIM(0), by.nF.nR()) : 1 === wG && aXK.w5.nR(), aXK.wF(wG), aXK.resize())
	}

	function aXU(wG, color) {
		vu.p5[wG].tq(color ? bE.qk : bE.rf), vu.p5[wG].button.classList.toggle("fx-selected", !!color)
	}
	this.pW = function(pc) {
		aXS(0);
		var pU = aXK.w4.uH.e.value,
			pc = "@" + pc + " ";
		pU.length && !bD.pY.a7U(pU, " ") && (pc = " " + pc), aXK.w4.uH.e.value = pU += pc, aXK.w4.uR(), aXK.w4.uH.e.focus()
	}, this.aJQ = function() {
		aXK.w5.nR()
	}, this.aIN = function() {
		var tT = bq.tT,
			tT = tT.aIK() ? tT.x9 ? bE.rL : bE.qk : bE.rf;
		vv.p5[1].tq(tT), aXK.w7.nR()
	}, this.aJS = function() {
		var tT = bq.tT,
			aC = tT.xb(tT.x8);
		aC < 0 || (tT = tT.tT[aC], bV.a8(tT.fM, tT.mapSeed))
	}, this.aJR = function() {
		aXK.wD(bq.z.wE);
		var wu = bq.pk.wu,
			aXY = wu.length,
			x7 = bq.tT.tT[0],
			aXZ = x7 ? Math.min(bq.tT.xA(x7), aXY) : 0;
		aXL.uS.textContent = "" + aXY, aXM.uS.textContent = "" + aXZ, aXN.uS.textContent = aP.aBW(0, 2), aXO.uS.textContent = aP.aBW(2, 4), aXP.uS.textContent = x7 ? bq.tT.xD(x7.ws) + "   " + bV.xB.xC[x7.fM] : "", aXQ[0].uS.textContent = bq.lr
			.aJ0(wu, 0, aXY), aXQ[1].uS.textContent = x7 && x7.ws < 7 ? bq.lr.aJ0(wu, 0, aXZ) : "", aXR[1].uS.textContent = "Multiplayer: " + bq.z.aJM[0] + "   Single: " + bq.z.aJM[1] + "   Lobby: " + aXY, this.aIN()
	}, this.aJV = function() {
		by.nF.nR()
	}, this.show = function() {
		bq.z.aHd++, aXK.show(), this.resize(), bq.message.show()
	}, this.uU = function() {
		aXK.uU(), bq.xy.uU(), bq.xX.uU(), bq.message.uU()
	}, this.resize = function() {
		aXK.resize(), bq.message.resize()
	}, this.a6F = function(eq) {
		2 === eq ? bq.tT.x8 ? bq.tT.select(0) : vv.p5[0].tm() : eq < 2 && bq.tT.click(0)
	}, vu = new ui([new x(L(435), function() {
		return aXS(0), 2
	}), new x(L(33), function() {
		return aXS(1), 2
	}), new x(L(436), function() {
		return aXS(2), 2
	})], bE.rf, 0, [18, 36, 46]);
	for (var aC = 0; aC < 3; aC++) vu.p5[aC].button.style.padding = "0";
	vv = new ui([new x(L(35, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			u.y(), bq.xs(), b1.z.a5X(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		}),
		function() {
			u.y(), bq.xs(), b1.z.a5X(3240), __fx.customLobby.setActive(false), u.v(5, 5)
		})), new x(L(437), function() {
		return bq.tT.click(0), 2
	})], bE.rf, 0, [25, 75]), aXK = new vt(vu, vv, aJr, bq.xy.aKO, function(eP, xf) {
		bq.fD && bq.tT.click(eP, xf)
	});
	var join = vv.p5[1].button,
		input = (bD.t4.wU(join, null, function() {
			bq.fD && bq.tT.click(0, 1)
		}), aXK.w4.uH.e);
	input.addEventListener("beforeinput", function(event) {
			bq.fD && bq.pW.aK3(event, input) && aXK.w4.uR()
		}), aXL = new uQ("0", vu.p5[1].button), aXM = new uQ("0", vv.p5[1].button), aXN = aXT(vu.p5[2].button, 0), aXO = aXT(vu.p5[2].button, 1), (aXP = aXT(vv.p5[1].button, 0)).uS.style.right = "3em", (aXQ = [new uQ("", vu.p5[1].button, 1, 1),
			new uQ("", vv.p5[1].button, 1, 1)
		])[0].uS.style.bottom = "0em", aXQ[1].uS.style.bottom = "0em", aXQ[0].uS.translate = !1, aXQ[1].uS.translate = !1, aXU(bq.z.aHe, 1), (aXR = [new uQ(L(339), aXK.wH(), 1, 0), new uQ("", aXK.wH(), 1, 1)])[0].uS.style.fontSize = "0.4em", aXR[1]
		.uS.style.fontSize = "0.4em"
}

function aT5() {
	var aTU, aTV, tT;
	this.show = function() {
		aTU.show(), this.resize()
	}, this.uU = function() {
		aTU.uU()
	}, this.resize = function() {
		aTU.resize(), aTV.resize()
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	}, aTU = new yX(L(438), [new x("⬅️ " + L(49), function() {
		u.v(7, u.a9M(7).a5P)
	}), new x(L(238), function() {
		bm.rr.px(105, bJ.f7.a0K(aTV.tV[0].tE[0].e.value, 5)), bm.rr.px(106, bJ.f7.a0K(aTV.tV[1].tE[0].e.value, 15)), u.v(8, u.a9M(7).a5P, new vS(18))
	})]), aTV = new tR(aTU.yc, ((tT = []).push(function() {
		var x7 = new tD;
		return x7.tG(L(215)), x7.tQ(new uI({
			value: "",
			eP: -1
		})), x7
	}()), tT.push(function() {
		var x7 = new tD,
			aUB = (x7.tG(L(218)), new uI({
				value: "",
				eP: -1
			}));
		return aUB.e.type = "password", x7.tQ(aUB), x7.tQ(new uf([new x(L(219), function(e) {
			return e.textContent === L(219) ? (e.textContent = L(220), aUB.e.type = "text") : (e.textContent = L(219), aUB.e.type = "password"), !0
		}).button])), x7
	}()), tT.push(function() {
		var x7 = new tD;
		return x7.tG(L(222)), x7.tH(L(439)), x7.tH(L(440)), x7.tH(L(441)), x7
	}()), tT))
}

function aTC() {
	var aTU, aX2, aX3, yY;

	function aX4(aC) {
		u.v(8, u.vR, new vS(21, {
			vi: aC,
			vj: 0,
			vk: 10
		}))
	}
	this.show = function() {
		aTU.show(), this.resize()
	}, this.uU = function() {
		aTU.uU()
	}, this.resize = function() {
		aTU.resize(), aX2.resize()
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	}, aX3 = [new x(L(403), function() {
		aX4(5)
	}, 0, 0, 1), new x(L(404), function() {
		aX4(6)
	}, 0, 0, 1), new x(L(405), function() {
		aX4(7)
	}, 0, 0, 1), new x("Audit Log", function() {
		aX4(12)
	}, 0, 0, 1)], yY = [new x("⬅️ " + L(49), function() {
		u.a5J()
	})], aTU = new yX(L(442), yY), aX2 = new u4(aX3, aTU.yc)
}

function aSu() {
	this.buffer = {}, this.vl = new Array(8), this.aTA = null, this.aT7 = null, this.v7 = 0, this.vK = [0, 0], this.a0 = function() {
		u.v(5, 5)
	}, this.a95 = function(aXc) {
		aXc && (aa.f9 = aXc), u.y(), aa.dr()
	}, __fx.customLobby.setJoinFunction(() => this.a95(1)), this.aGx = function() {
		u.v(0 === ab.a5K() ? 5 : 0)
	}, this.aVn = function() {
		if (1 === bm.buffer.data[130].value) u.v(8, u.a5O().a5P, new vS(24, {
			aVM: bm.buffer.data[125].value,
			vj: bm.buffer.data[128].value,
			vk: bm.buffer.data[129].value
		}));
		else {
			for (var h = (h = bm.buffer.data[126].value.split(",")).slice(0, 10), aC = 0; aC < h.length; aC++) h[aC] = h[aC].trim().slice(0, 7).toUpperCase();
			1 === h.length && 0 === h[0].length && (h = []), u.v(8, u.a5O().a5P, new vS(23, {
				aVM: bm.buffer.data[125].value,
				a4t: h
			}))
		}
	}, this.aWv = function(a5P, target) {
		u.v(4, a5P, new w("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b1.z.aTx(
				"/privacy") + "<br>By playing you agree to our Terms of Service: " + b1.z.aTx("/terms"), !1, [new x("⬅️ " + L(49), function() {
				u.v(a5P)
			}), new x("✅ Accept", function() {
				bm.rr.px(140, 1), 0 === target ? u.v(2, a5P) : u.v(8, a5P, new vS(target))
			})]))
	}, this.aXd = function() {
		for (var aC = 0; aC < 8; aC++) this.vl[aC] = bJ.a0B.a0F(bK.sU(5));
		this.vl[1] = "[" + this.vl[1] + "]", 5 === u.vR && (u.a5O().aME.px(this.vl), u.a5O().resize())
	}, this.aU6 = function(g8, rp, aAv) {
		g8 = bD.h2.a83(g8, 1, 1e6);
		rp = L(443, [rp]);
		return (rp += "<br>") + L(444, [__fx.utils.escapeHtml("" + aAv)]) + "<br>" + L(445, [g8 + "–" + (g8 + 2)]) + "<br>" + L(446, [g8])
	}
}

function aTF() {
	var aUt, aUu, aXe, tT;

	function aUw() {
		b7.xs(), u.aTT()[19] = null, u.a5J()
	}

	function aXl() {
		aXo(), aXm()
	}

	function aXo() {
		aXe.tF.lastChild && u.removeChild(aXe.tF, aXe.tF.lastChild)
	}

	function aXm() {
		var aXp = bV.a9D(aE.data);
		aE.data.canvas = bV.aQs(aXp, aE.data.mapSeed).a0i, aXn()
	}

	function aXn() {
		var a70 = aE.data.canvas;
		a70.style.width = "100%", aXe.tF.appendChild(a70)
	}
	this.aNR = function(a70) {
		aE.data.canvas && aXo(), aE.data.canvas = a70, aXn()
	}, this.show = function() {
		aUt.show(), this.resize()
	}, this.uU = function() {
		aUt.uU()
	}, this.resize = function() {
		aUt.resize(), aUu.resize()
	}, this.a6F = function(eq) {
		2 === eq && aUt.yd[0].tm()
	}, aUt = new yX(L(367), [new x("⬅️ " + L(49), aUw)]), 2 === aE.data.mapType && b7.dr(), aUu = new tR(aUt.yc, (function(tT) {
		var x7 = new tD;
		x7.tG(L(333)), x7.tN(new yT({
			vA: [L(447), L(448), L(449)],
			value: aE.data.mapType
		}, function(eP) {
			2 === (aE.data.mapType = eP) ? (b7.dr(), aE.data.canvas = null) : (aE.data.passableWater = aE.data.passableMountains = 1, b7.xs()), u.v(20)
		})), 2 <= aE.data.mapType && (x7.tQ(new uq), x7.tQ(new ub({
			value: aE.data.passableWater
		}, L(450), function(value) {
			aE.data.passableWater = value
		})), x7.tQ(new ub({
			value: aE.data.passableMountains
		}, L(451), function(value) {
			aE.data.passableMountains = value
		})));
		tT.push(x7)
	}(tT = []), function(tT) {
		if (0 === aE.data.mapType) {
			for (var x7 = new tD, vA = (x7.tG(L(367)), []), aC = 0; aC < bV.xB.aRo.length; aC++) vA.push(bV.xB.a0Z[bV.xB.aRo[aC]].name);
			x7.tN(new yT({
				vA: vA,
				value: aE.data.mapProceduralIndex
			}, function(eP) {
				aE.data.mapProceduralIndex = eP, aXl()
			})), tT.push(x7)
		}
	}(tT), function(tT) {
		if (1 === aE.data.mapType) {
			for (var x7 = new tD, vA = (x7.tG(L(367)), []), aC = 0; aC < bV.xB.aRp.length; aC++) vA.push(bV.xB.a0Z[bV.xB.aRp[aC]].name);
			x7.tN(new yT({
				vA: vA,
				value: aE.data.mapRealisticIndex
			}, function(eP) {
				aE.data.mapRealisticIndex = eP, aXl()
			})), tT.push(x7)
		}
	}(tT), function(tT) {
		var x7;
		2 === aE.data.mapType && ((x7 = new tD).tG(L(452)), x7.tQ(new uI(bm.buffer.data[162], 1)), x7.tG(L(453), "0.8em"), x7.tQ(new uf([new x(L(454), function() {
			return b7.aNK(), !0
		}).button])), tT.push(x7))
	}(tT), function(tT) {
		var x7, uH;
		2 === aE.data.mapType && ((x7 = new tD).tG(L(455)), uH = new uI({
			eP: -1,
			value: aE.data.mapName
		}, 0, 0, function(e) {
			aE.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), x7.tQ(uH), tT.push(x7))
	}(tT), function(tT) {
		var x7, uH, aTu;
		0 === aE.data.mapType && ((x7 = new tD).tG("Seed"), uH = new uI({
			eP: -1,
			value: aE.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aE.data.mapSeed !== e && (aE.data.mapSeed = e, aXl())
		}), aTu = new x(L(358), function(e) {
			var aQn = Math.floor(16384 * Math.random());
			if (aE.data.mapSeed !== aQn) return uH.e.value = aE.data.mapSeed = aQn, aXl(), !0
		}), x7.tQ(uH), x7.tQ(new uf([aTu.button])), tT.push(x7))
	}(tT), function(tT) {
		(aXe = new tD).tG(L(456)), 2 !== aE.data.mapType ? aXm() : aE.data.canvas && aXn();
		tT.push(aXe)
	}(tT), tT))
}

function w(title, tM, aXq, aX5) {
	var aTU, aWB;
	this.show = function() {
		aTU.show(), this.resize()
	}, this.uU = function() {
		aTU.uU()
	}, this.resize = function() {
		aTU.resize(), aWB.resize()
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	}, aX5 = aX5 || [new x("⬅️ " + L(49), function() {
		u.a5J()
	})], aTU = new yX(title, aX5), aWB = new ue(aTU.yc, tM), aXq && bD.t4.textAlign(aTU.yc.style, 1)
}

function aTI() {
	var aUt, aUu, aUv, tT;

	function aUw() {
		aUy(), 2 === aE.data.playerNamesType && 1 === bD.te.a6e(aE.data.playerNamesData).length && (aE.data.playerNamesType = 0), 2 !== aE.data.playerNamesType && (aE.data.playerNamesData = null), u.aTT()[19] = null, u.a5J()
	}

	function aUy() {
		2 === aE.data.playerNamesType && bD.te.a6s(aUv.z2(), aE.data.playerNamesData, 20)
	}
	this.show = function() {
		aUt.show(), this.resize()
	}, this.uU = function() {
		aUt.uU()
	}, this.resize = function() {
		aUt.resize(), aUu.resize()
	}, this.a6F = function(eq) {
		2 === eq && aUt.yd[0].tm()
	}, aUt = new yX(L(371), [new x("⬅️ " + L(49), aUw)]), aUu = new tR(aUt.yc, (function(tT) {
		var x7 = new tD;
		x7.tG(L(333)), x7.tN(new yT({
			vA: [L(372), L(373), L(336)],
			value: aE.data.playerNamesType
		}, function(eP) {
			aUy(), aE.data.playerNamesType = eP, u.v(23)
		})), x7.tQ(new uq), x7.tQ(new ub({
			value: aE.data.selectableName
		}, L(457), function(value) {
			aE.data.selectableName = value
		})), tT.push(x7)
	}(tT = []), function(tT) {
		var x7;
		2 === aE.data.playerNamesType && ((x7 = new tD).tG("Data"), aUv = new yu(0, 1, 0, 1), aE.data.playerNamesData && aE.data.playerNamesData.length === aE.fd || (aE.data.playerNamesData = new Array(aE.fd), aE.data.playerNamesData
			.fill("")), aUv.z1(bD.pY.a8U(aE.data.playerNamesData, 1, '"')), x7.tQ(aUv), tT.push(x7))
	}(tT), tT))
}

function aTQ() {
	var aUt, aUu, tT;

	function aXw() {
		for (var colors = new Array(11), aC = 0; aC < 11; aC++) {
			var h = bm.buffer.data[163 + aC].value.split(",");
			colors[aC] = new Uint8Array(3);
			for (var fz = 0; fz < 3; fz++) fz < h.length && (colors[aC][fz] = Number(h[fz]))
		}
		return colors
	}
	this.show = function() {
		aUt.show(), this.resize()
	}, this.uU = function() {
		aUt.uU()
	}, this.resize = function() {
		aUt.resize(), aUu.resize()
	}, this.a6F = function(eq) {
		2 === eq && aUt.yd[0].tm()
	}, aUt = new yX(L(458), [new x("⬅️ " + L(49), function() {
		u.a5J()
	})]), aUu = new tR(aUt.yc, ((tT = []).push(function() {
		var x7 = new tD;
		return x7.tG(L(459)), x7.tL(b1.z.aTx("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", x7.tL("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), x7
	}()), tT.push(function() {
		var x7 = new tD,
			es = (x7.tG(L(460)), bm.buffer.data[174].value),
			tI = x7.tH(es.length + " / 180"),
			aUc = (tI.style.textAlign = "center", new yu(0, 1, function(e) {
				var e = e.target.value,
					h9 = e.length;
				tI.textContent = h9 + " / 180", h9 <= 180 && bm.rr.px(174, e)
			}));
		return aUc.e.rows = 6, aUc.e.style.fontSize = "1em", aUc.z1(es), x7.tQ(aUc), x7
	}()), tT.push(function() {
		var x7 = new tD;
		x7.tG(L(357));
		for (var aC = 0; aC < 11; aC++) {
			var j3 = x7.tQ(new uI(bm.buffer.data[163 + aC]));
			aC && (j3.e.style.marginTop = "0.6em")
		}
		return x7.tQ(new uf([new x(L(461), function() {
			for (var data = bm.buffer.data, aC = 163; aC < 174; aC++) data[aC] && bm.buffer.zH(aC, data[aC].zK);
			u.a5J(), u.aTT()[31] = null, u.v(31)
		}).button])), x7
	}()), tT.push(function() {
		var x7 = new tD;
		return x7.tG("Targeting"), x7.tL(L(462)), x7.tQ(new uI(bm.buffer.data[175], 0, 0)), x7
	}()), tT.push(function() {
		var x7 = new tD;
		return x7.tG(L(456)), x7.tQ(new uf([new x(L(219), function() {
			(new er).show(bm.buffer.data[174].value, aXw(), -1)
		}).button])), x7
	}()), tT.push(function() {
		var x7 = new tD,
			aXx = (x7.tG(L(463)), x7.tL(L(464)), new uI(bm.buffer.data[176], 1, 0)),
			aXy = (x7.tQ(aXx), new x(L(465), function(e) {
				return aXz.button.textContent === L(203) && b1.z.em(0) && (bD.t4.yQ(e), aU3(), b1.aU4.aY0(bm.buffer.data[176].value, aXw(), bm.buffer.data[175].value, bm.buffer.data[174].value)), !0
			}, 1)),
			aU3 = function() {
				aXz.button.textContent = L(202), aXy.tq(1), aXy.button.style.color = bE.qL
			},
			aXz = new x(L(202), function(e) {
				return e.textContent === L(202) ? (e.textContent = L(203), aXy.tq(0), aXy.button.style.color = bE.rQ) : aU3(), !0
			});
		return x7.tQ(new uf([aXz.button, aXy.button])), x7
	}()), tT))
}

function aTR() {
	var aTU, aTV, tT;
	this.show = function() {
		aTU.show(), this.resize()
	}, this.uU = function() {
		aTU.uU()
	}, this.resize = function() {
		aTU.resize(), aTV.resize()
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	}, aTU = new yX("🔒 " + L(466), [new x("⬅️ " + L(49), function() {
		u.a5J()
	})]), aTV = new tR(aTU.yc, ((tT = []).push(function() {
		var x7 = new tD,
			uH = (x7.tL(b1.z.aTx("/wiki/faq"), "0.75em").style.marginBottom = "0.8em", x7.tG(L(215)), new uI({
				value: "",
				eP: -1
			})),
			aUY = (x7.tQ(uH), x7.tG(L(291), "0.8em"), new uI({
				value: "",
				eP: -1
			}, 0, 0)),
			aU2 = (aUY.e.type = "email", aUY.e.autocomplete = "email", aUY.e.name = "email", aUY.e.inputMode = "email", aUY.e.spellcheck = !1, x7.tQ(aUY), new x(L(467), function(e) {
				return bD.t4.yQ(e), b1.aU4.aUZ({
					action: 4,
					pU: uH.e.value.trim() + aUY.e.value.trim().substring(0, 63)
				}), !0
			}));
		return x7.tQ(new uf([aU2.button])), x7
	}()), tT))
}

function aT3() {
	var aUt, yz;

	function aY1() {
		u.y();
		var pU = bC.aY5(yz.z2());
		(aE.a49 && 0 < pU.length && pU === bC.sg.a91 || bC.aOP.a0U(pU)) && bC.aY6()
	}
	this.show = function(aY2) {
		this.aY3(aY2), aUt.show(), this.resize()
	}, this.aY3 = function(aY2) {
		0 === aE.a49 ? aY2 ? yz.z1(aY2) : aE.a8o.length && yz.z1(aE.a8o) : (aE.hp || (bC.sg.a91 = bC.a92.a3d()), yz.z1(bC.aY4(bC.sg.a91)))
	}, this.z1 = function(pU) {
		yz.z1(pU)
	}, this.uU = function() {
		aUt.uU()
	}, this.resize = function() {
		aUt.resize(), yz.resize()
	}, this.a6F = function(eq) {
		2 === eq ? aUt.yd[0].tm() : aY1()
	}, aUt = new yX(L(468), [new x("⬅️ " + L(49), function() {
		u.aTS(1)
	}), new x(L(469), function() {
		yz.z3()
	}), new x(L(470), function() {
		yz.z4()
	}), new x(L(471), function() {
		yz.clear()
	}), new x(L(472), function() {
		aY1()
	})]), yz = new yu(L(473)), aUt.yc.appendChild(yz.e)
}

function aT2() {
	var aTU, aTV, tT, x7;

	function aY7() {
		bA.aGj !== bm.buffer.data[12].value ? (bA.dr(), u.v(8, 1, new vS(30))) : u.v(1)
	}
	this.show = function() {
			aTU.show(), this.resize()
		}, this.uU = function() {
			aTU.uU()
		}, this.resize = function() {
			aTU.resize(), aTV.resize()
		}, this.a6F = function(eq) {
			2 === eq && aTU.yd[0].tm()
		}, aTU = new yX(L(474), [new x("⬅️ " + L(49), aY7), new x(L(475), function() {
			u.y(), bm.rr.zs(), u.v(2)
		})]), tT = [], (x7 = new tD).tG(L(476)), x7.tH(L(477)), tT.push(x7),
		function(tT) {
			var x7 = new tD,
				h = (x7.tG(L(462)), bA.data.aH0());
			x7.tN(new yT({
				vA: h,
				value: bA.data.aH4(h)
			}, function(eP) {
				return bm.rr.px(12, h[eP].split(":")[0]), !0
			})), tT.push(x7)
		}(tT),
		function(tT) {
			var x7 = new tD,
				aYA = (x7.tG(L(502)), []);
			x7.tQ(new uf([new x(L(461), function(e) {
				ba.aYB();
				for (var aC = 0; aC < aYA.length; aC++) aYA[aC].e.value = ba.aGB[aC];
				return bD.t4.yQ(e), !0
			}).button]));
			for (var aC = 0; aC < ba.aYC.length; aC++) {
				x7.tH(ba.aYC[aC]);
				for (var fz = 0; fz < 2; fz++) {
					var eP = 2 * aC + fz,
						uH = new uI({
							value: ba.aGB[eP],
							eP: -1
						});
					uH.e.aYD = eP, aYA.push(uH), uH.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, ba.aYE(e.target.aYD, code)
					}), fz && (uH.e.style.marginLeft = "4%"), uH.e.style.width = "48%", x7.tQ(uH)
				}
			}
			tT.push(x7)
		}(tT), (x7 = new tD).tG(L(478)), bm.buffer.data[1].vA = [L(479), L(480), L(481), L(482)], x7.tN(new yT(bm.buffer.data[1])), tT.push(x7), (x7 = new tD).tG(L(483)), bm.buffer.data[9].vA = [L(480), L(484), L(485)], x7.tN(new yT(bm.buffer.data[
			9])), tT.push(x7), (x7 = new tD).tG(L(486)), bm.buffer.data[11].vA = [L(487), L(9), L(488)], x7.tN(new yT(bm.buffer.data[11])), tT.push(x7), (x7 = new tD).tG(L(489)), x7.tQ(new ub(bm.buffer.data[2])), tT.push(x7), (x7 = new tD).tG(L(
		490)), x7.tQ(new ub(bm.buffer.data[7])), tT.push(x7), (x7 = new tD).tG(L(491)), x7.tQ(new ub(bm.buffer.data[8])), tT.push(x7), (x7 = new tD).tG(L(492)), x7.tQ(new uI(bm.buffer.data[5])), tT.push(x7), (x7 = new tD).tG(L(493)), x7.tQ(new ub(bm
			.buffer.data[13], L(494))), x7.tQ(new ub(bm.buffer.data[14], L(495))), tT.push(x7), (x7 = new tD).tG(L(496)), x7.tN(new yT({
			vA: [L(497), L(498), L(499)],
			value: aa.aLT
		}, function(aC) {
			aa.aLT = aC
		})), tT.push(x7), (x7 = new tD).tG(L(500)), x7.tQ(new ub(bm.buffer.data[15])), x7.tH(L(501)), x7.tQ(new uI(bm.buffer.data[16], 1, 0, function(e) {
			e.target.value = bO.is(Math.floor(e.target.value), 0, 16)
		})), tT.push(x7), aTV = new tR(aTU.yc, tT)
}

function aTJ() {
	var aUt, aUu, aUv, tT;

	function aUw() {
		aUy(), 2 !== aE.data.spawningType || bD.te.a6e(aE.data.spawningData) || (aE.data.spawningType = 0), 2 !== aE.data.spawningType && (aE.data.spawningData = null), u.aTT()[19] = null, u.a5J()
	}

	function aUy() {
		2 === aE.data.spawningType && bD.te.a6q(aUv.z2(), aE.data.spawningData, bV.aNU - 1)
	}
	this.show = function() {
		aUt.show(), this.resize()
	}, this.uU = function() {
		aUt.uU()
	}, this.resize = function() {
		aUt.resize(), aUu.resize()
	}, this.a6F = function(eq) {
		2 === eq && aUt.yd[0].tm()
	}, aUt = new yX(L(503), [new x("⬅️ " + L(49), aUw)]), aUu = new tR(aUt.yc, (function(tT) {
		var x7 = new tD,
			vA = (x7.tG(L(333)), [L(358), L(370), L(336)]),
			value = aE.data.spawningType;
		0 === aE.data.gameMode && (vA.splice(1, 1), 0 < value) && (value = 1);
		x7.tN(new yT({
			vA: vA,
			value: value
		}, function(eP) {
			aUy(), aE.data.spawningType = eP, 0 === aE.data.gameMode && 1 === eP && (aE.data.spawningType = 2), 2 !== aE.data.spawningType || aE.data.spawningData || (aE.data.spawningData = new Uint16Array(2 * aE.fd)), u.v(24)
		})), tT.push(x7)
	}(tT = []), function(tT) {
		var x7 = new tD;
		x7.tG("My Spawn"), x7.tQ(new ub({
			value: aE.data.selectableSpawn
		}, L(504), function(value) {
			aE.data.selectableSpawn = value
		})), tT.push(x7)
	}(tT), function(tT) {
		var x7 = new tD,
			aYG = (x7.tG("Seed"), new uI({
				eP: -1,
				value: aE.data.spawningSeed
			}, 1, 0, function(e) {
				var value = Math.abs(Math.floor(e.target.value)) % 16384;
				e.target.value = aE.data.spawningSeed = value
			}));
		x7.tQ(aYG), x7.tQ(new uf([new x(L(358), function() {
			aYG.e.value = aE.data.spawningSeed = Math.floor(16384 * Math.random())
		}).button])), tT.push(x7)
	}(tT), function(tT) {
		var x7;
		2 === aE.data.spawningType && ((x7 = new tD).tG("Data"), (aUv = new yu(0, 1, 0, 1)).z1(bD.pY.a8U(aE.data.spawningData, 2)), x7.tQ(aUv), tT.push(x7))
	}(tT), tT))
}

function aT1() {
	var aTU, aX2, aX3, yY;

	function aYH(id) {
		0 !== a1.id || bm.buffer.data[140].value ? 0 === id ? u.v(8, 1, new vS(16)) : u.v(2) : u.z.aWv(u.vR, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a1.a2.setState(12), aTU.show(), this.resize(), this.el()
	}, this.uU = function() {
		aTU.uU()
	}, this.resize = function() {
		aTU.resize(), aX2.resize()
	}, this.el = function() {
		8 === ab.a5K() && (bg.aYM() ? aX3[2].tn === bE.qX && aX3[2].tq(0) : aX3[2].tn !== bE.qX && aX3[2].tq(bE.qX), aE.hp || aE.hq || !aN.sx(aE.fQ) ? aX3[1].tn !== bE.qX && aX3[1].tq(bE.qX) : aX3[1].tn === bE.qX && aX3[1].tq(0), aE.hp || aE
			.hq || !ax.iW(aE.fQ) ? aX3[0].tn !== bE.qX && aX3[0].tq(bE.qX) : aX3[0].tn === bE.qX && aX3[0].tq(0))
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	}, aX3 = [new x(L(505), function() {
		aYH(0)
	}), new x(L(395), function() {
		u.v(16)
	}), new x(L(442), function() {
		u.v(17)
	}), new x(L(506), function() {
		u.z.aVn()
	}, 0, 0, 1), new x(L(468), function() {
		u.v(3, 1)
	}), new x(L(507), function() {
		u.v(18)
	}), new x(L(458), function() {
		u.v(31)
	}), new x(L(508), function() {
		u.z.a95(2)
	}), new x(L(474), function() {
		aYH(1)
	}), new x("🔒 " + L(466), function() {
		u.v(32)
	}), new x(L(509), function() {
		var a7Q, qB;
		(a7Q = []).push(["Wiki", (qB = "https://territorial.io/") + "wiki/gold"]), a7Q.push(["Team Games", qB + "log/team"]), a7Q.push(["Battle Royale Games", qB + "log/br"]), a7Q.push(["1v1 Games", qB + "log/1v1"]), a7Q.push([
			"Zombie Games", qB + "log/zombies"
		]), a7Q.push(["Transactions", qB + "log/transactions"]), a7Q.push(["Changelog", qB + "changelog"]), 2 !== a1.id && a7Q.push(["Android App", bN.aHH]), 1 !== a1.id && a7Q.push(["iOS App", bN.a5G]), 0 === a1.id && a7Q.push([
			"Patreon", bN.aUr
		]), a7Q.push(["Terms", bN.aYN]), a7Q.push(["Privacy", bN.aYO]), u.v(4, 1, new w(L(509), bD.t4.a7P(a7Q), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		})]))
	}), new x(L(510), function() {
		u.v(4, 1, new w(L(510), m.e8 + "<br>" + b1.z.aTx("/changelog") + "<br><br><m>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></m>", !0, [new x("⬅️ " + L(49),
				function() {
					u.v(1)
				})]))
	}), new x(L(511), function() {
		u.v(4, 1, new w(L(511), L(518) + "<br>" + L(519), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		}), new x(L(520), function() {
			a1.a2.a5A(), u.v(1)
		})]))
	}), new x("👁️ " + L(512), function() {
		a1.a2.a5B(), u.v(4, 1, new w(L(521), L(522) + " " + b1.z.aTx("/privacy"), !1, [new x("⬅️ " + L(49), function() {
			u.v(1)
		})]))
	})], yY = [new x("⬅️ " + L(49), function() {
		u.z.aGx()
	})], 8 === ab.a5K() && (aX3.unshift(new x(L(381), function() {
		u.v(30)
	})), aX3.unshift(new x(L(515), function() {
		bg.aYM() && (u.y(), bh.a6I(), bi.dy = !0)
	}, 0, 1)), aX3.unshift(new x(L(516), function() {
		aE.hp || aE.hq || !aN.sx(aE.fQ) || (bB.i7.sA(), u.y(), aN.hr && aN.a6I())
	}, 0, 1)), aX3.unshift(new x(L(517), function() {
		aE.hp || aE.hq || !ax.iW(aE.fQ) || (bY.a9i(2), bB.i7.iS(), u.y(), aN.hr && aN.a6I())
	}, 0, 1))), 1 === a1.id && 5 <= a1.e8 && aX3.push(new x(L(513), function() {
		a1.a2.a5C()
	})), aTU = new yX(L(514), yY), aX2 = new u4(aX3, aTU.yc)
}

function aTN() {
	var aUt, aUu, aUv, tT;

	function aUw() {
		aUy(), 2 !== aE.data.sResourcesType && (aE.data.sResourcesData = null), u.aTT()[19] = null, u.a5J()
	}

	function aUy() {
		2 === aE.data.sResourcesType && bD.te.a6q(aUv.z2(), aE.data.sResourcesData, 2047)
	}
	this.show = function() {
		aUt.show(), this.resize()
	}, this.uU = function() {
		aUt.uU()
	}, this.resize = function() {
		aUt.resize(), aUu.resize()
	}, this.a6F = function(eq) {
		2 === eq && aUt.yd[0].tm()
	}, aUt = new yX(L(376), [new x("⬅️ " + L(49), aUw)]), aUu = new tR(aUt.yc, (function(tT) {
		var x7 = new tD;
		x7.tG(L(333)), x7.tN(new yT({
			vA: [L(334), L(335), L(336)],
			value: aE.data.sResourcesType
		}, function(eP) {
			aUy(), 2 !== eP || aE.data.sResourcesData || (aE.data.sResourcesData = new Uint16Array(aE.fd)), aE.data.sResourcesType = eP, u.v(28)
		})), tT.push(x7)
	}(tT = []), function(tT) {
		var x7;
		1 === aE.data.sResourcesType && ((x7 = new tD).tG("Value"), x7.tQ(new uI({
			eP: -1,
			value: aE.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bO.is(Math.floor(e.target.value), 0, 2047);
			e.target.value = aE.data.sResourcesValue = value
		})), tT.push(x7))
	}(tT), function(tT) {
		var x7;
		2 === aE.data.sResourcesType && ((x7 = new tD).tG("Data"), (aUv = new yu(0, 1, 0, 1)).z1(bD.pY.a8U(aE.data.sResourcesData, 2)), x7.tQ(aUv), tT.push(x7))
	}(tT), tT))
}

function aTL() {
	var aUt, aUu, aUv, tT;

	function aUw() {
		aUy(), 2 !== aE.data.tIncomeType && (aE.data.tIncomeData = null), u.aTT()[19] = null, u.a5J()
	}

	function aUy() {
		2 === aE.data.tIncomeType && bD.te.a6q(aUv.z2(), aE.data.tIncomeData, 255)
	}
	this.show = function() {
		aUt.show(), this.resize()
	}, this.uU = function() {
		aUt.uU()
	}, this.resize = function() {
		aUt.resize(), aUu.resize()
	}, this.a6F = function(eq) {
		2 === eq && aUt.yd[0].tm()
	}, aUt = new yX(L(374), [new x("⬅️ " + L(49), aUw)]), aUu = new tR(aUt.yc, (function(tT) {
		var x7 = new tD;
		x7.tG(L(333)), x7.tN(new yT({
			vA: [L(334), L(335), L(336)],
			value: aE.data.tIncomeType
		}, function(eP) {
			aUy(), 2 !== eP || aE.data.tIncomeData || (aE.data.tIncomeData = new Uint8Array(aE.fd), aE.data.tIncomeData.fill(32)), aE.data.tIncomeType = eP, u.v(26)
		})), tT.push(x7)
	}(tT = []), function(tT) {
		var x7;
		1 === aE.data.tIncomeType && ((x7 = new tD).tG("Value"), x7.tQ(new uI({
			eP: -1,
			value: aE.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bO.is(Math.floor(e.target.value), 0, 255);
			e.target.value = aE.data.tIncomeValue = value
		})), tT.push(x7))
	}(tT), function(tT) {
		var x7;
		2 === aE.data.tIncomeType && ((x7 = new tD).tG("Data"), (aUv = new yu(0, 1, 0, 1)).z1(bD.pY.a8U(aE.data.tIncomeData, 4)), x7.tQ(aUv), tT.push(x7))
	}(tT), tT))
}

function aTD() {
	var aTU, aTV, tT;
	this.show = function() {
		aTU.show(), this.resize()
	}, this.uU = function() {
		aTU.uU()
	}, this.resize = function() {
		aTU.resize(), aTV.resize()
	}, this.a6F = function(eq) {
		2 === eq && aTU.yd[0].tm()
	}, aTU = new yX(L(507), [new x("⬅️ " + L(49), function() {
		u.a5J()
	})]), aTV = new tR(aTU.yc, ((tT = []).push(function() {
		function aU3() {
			aXz.button.textContent = L(202), aYR.e.readOnly = !1, aYS.e.readOnly = !1, aU2.tq(1), aU2.button.style.color = bE.qL
		}
		var x7 = new tD,
			aYQ = (x7.tL(b1.z.aTx("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", x7.tG(L(523)), new uI({
				value: bm.buffer.data[105].value,
				eP: -1
			})),
			aYR = (aYQ.e.readOnly = !0, x7.tQ(aYQ), x7.tG(L(420), "0.8em"), new uI(bm.buffer.data[148], 0, void 0, function(e) {
				aU1(bm.buffer.data[149].value, e.target.value)
			})),
			aYS = (x7.tQ(aYR), x7.tG(L(424), "0.8em"), new uI(bm.buffer.data[149], 1, void 0, function(e) {
				aU1(e.target.value, bm.buffer.data[148].value)
			})),
			aXz = (x7.tQ(aYS), new x(L(202), function(e) {
				return e.textContent === L(202) ? (e.textContent = L(203), aYR.e.readOnly = !0, aYS.e.readOnly = !0, aU2.tq(0), aU2.button.style.color = bE.rQ, bm.rr.px(149, aYS.e.value), aU1(bm.buffer.data[149].value, bm
					.buffer.data[148].value)) : aU3(), !0
			})),
			aU2 = (x7.tQ(new uf([aXz.button])), new x(L(21), function(e) {
				var pU, g8;
				return aYR.e.readOnly && b1.z.em(0) && (pU = bm.buffer.data[148].value, g8 = parseInt(bm.buffer.data[149].value, 10), u.aSv.send(g8, pU, function() {
					bD.t4.yQ(e), aU3(), b1.aU4.aU5({
						action: 0,
						pc: pU,
						value: g8
					})
				})), !0
			}, 1)),
			tI = x7.tH(),
			aU1 = (x7.tH(L(524)).style.fontWeight = "bold", function(g8, pU) {
				tI.innerHTML = u.z.aU6(g8, bm.buffer.data[105].value, pU)
			});
		return x7.tQ(new uf([aU2.button])), aU1(bm.buffer.data[149].value, bm.buffer.data[148].value), x7
	}()), tT))
}

function c3() {
	"function" != typeof Math.log2 && (Math.log2 = function(fn) {
		return Math.log(fn) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(fn) {
		return Math.log(fn) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(fn) {
		return 0 < fn ? 1 : fn < 0 ? -1 : 0
	})
}

function cp() {
	var aDq, aYU, aYV, aYW, aYT = !1;

	function aYX() {
		aYT = !0, aDq = -1, aYU = new Array(4);
		for (var aC = 3; 0 <= aC; aC--) aYU[aC] = !1;
		var a1Y = Math.floor(1 + .02 * i.min);
		aYV = new Array(4), (aYW = new Array(4))[1] = aYW[3] = aYV[0] = aYV[2] = 0, aYW[0] = aYV[3] = -a1Y, aYV[1] = aYW[2] = a1Y
	}

	function aYY() {
		if (-1 !== aDq)
			if (0 !== aE.a49 && aI.oN()) {
				for (var aYZ = !1, aC = 3; 0 <= aC; aC--) aYU[aC] && (aYZ = !0, jL += aYV[aC], jM += aYW[aC], ag.a5h(aYV[aC], aYW[aC]), aT.aDW());
				aYZ ? bi.dy = !0 : at.oD()
			} else at.oD()
	}
	this.a6D = function(eP) {
		0 !== aE.a49 && aI.oN() && (aYT || aYX(), aYU[eP] = !0, -1 === aDq) && (aDq = setInterval(aYY, 20), aYY())
	}, this.a6G = function(eP) {
		if (0 !== aE.a49 && (aYT || aYX(), aYU[eP] = !1, -1 !== aDq)) {
			for (var aYZ = !1, aC = 3; 0 <= aC; aC--) aYZ = aYZ || aYU[aC];
			aYZ || this.oD()
		}
	}, this.oD = function() {
		if (aYT && -1 !== aDq) {
			for (var aC = 3; 0 <= aC; aC--) aYU[aC] = !1;
			clearInterval(aDq), aDq = -1
		}
	}
}

function cq() {
	this.z = new aYa, this.nM = new aYb, this.rp = new aYc, this.aIL = new aYd, this.en = new aYe, this.aU4 = new aYf, this.sT = new aYg, this.aWH = new aYh, this.aAv = new aYi, this.aYj = new aYk, this.aYl = new aYm, this.aYn = new aYo, this.aYp =
		new aYq, this.dr = function() {
			this.z.dr()
		}
}

function aYa() {
	var aYs, aYt;
	this.aLX = 4, this.aYr = null, this.a5S = 0, this.fE = 0;

	function aZ2() {
		return 0 === aa.aLT ? m.eC ? 1 : 0 : aa.aLT - 1
	}

	function aZ5(oW, a5P, aZ4) {
		aYt[oW].aYT = !0, aYy(oW), aYs[oW] = new aZ8, aYs[oW].dr(oW, a5P, aZ4)
	}

	function aZ6(aC) {
		return aYt[aC].aYT && aYs[aC].aZ6()
	}

	function aYy(oW) {
		aYt[oW].eg = bi.eg, aYt[oW].aYv = !1
	}
	this.dr = function() {
		this.aYr = new Array(this.aLX), this.aYr[0] = "territorial.io", this.aYr[1] = "1.territorial.io", this.aYr[2] = "4.territorial.io", this.aYr[3] = "5.territorial.io", aYs = new Array(this.aLX), aYt = new Array(this.aLX);
		for (var aC = this.aLX - 1; 0 <= aC; aC--) aYt[aC] = {
			aYT: !1,
			eg: 0,
			aYv: !1
		};
		this.aLY(0, 0, 0)
	}, this.aYw = function(aC) {
		return aYs[aC]
	}, this.el = function() {
		for (var aC = this.aLX - 1; 0 <= aC; aC--) this.em(aC) && bi.eg > aYt[aC].eg + 15e3 && (b1.rp.aYx(aC, aYt[aC].aYv), aYy(aC));
		!this.em(0) && bi.eg > aYt[0].eg + 8e3 && (aYt[0].eg = bi.eg, this.aLY(0, 0, 0))
	}, this.aWE = function(id) {
		return this.aLY(0, id, 0) && this.aYz(0)
	}, this.aZ0 = function(aZ1) {
		return aZ1 ? aa.aLU : aZ2()
	}, this.a4b = function() {
		return aZ2() ? "game.territorial.io" : "territorial.io"
	}, this.aTx = function(aZ3) {
		aZ3 = this.a4b() + aZ3;
		return "<a href='https://" + aZ3 + "' target='_blank'>" + aZ3 + "</a>"
	}, this.aLY = function(oW, a5P, aZ1) {
		aZ1 = this.aZ0(aZ1);
		if (aYt[oW].aYT) {
			if (aYs[oW].aZ6()) return aYs[oW].aZ7(a5P), aYs[oW].em();
			aYs[oW].uU()
		}
		return aZ5(oW, a5P, aZ1), !1
	}, this.aZ9 = function(oW, a5P) {
		console.log("Connection to Server " + oW), b1.en.aZA(oW)
	}, this.aYz = function(aC) {
		return this.em(aC) && aYs[aC].aYz()
	}, this.aZB = function(aC) {
		aYs[aC].aZB()
	}, this.em = function(aC) {
		return aYt[aC].aYT && aYs[aC].em()
	}, this.send = function(oW, aD) {
		0 !== oW && aYy(oW), aYs[oW].send(aD)
	}, __fx.customLobby.setSendFunction(this.send), this.a5y = function(oW) {
		8 === ab.a5K() && (aYt[oW].aYv = !0, b1.nM.aZC = !0)
	}, this.close = function(oW, aZD) {
		aZ6(oW) && aYs[oW].close(aZD)
	}, this.aZE = function(oW, aZD) {
		p.a5W(aZD), aZ6(oW) && aYs[oW].close(aZD)
	}, this.a5X = function(aZD) {
		for (var aC = this.aLX - 1; 0 <= aC; aC--) this.close(aC, aZD)
	}, this.aZF = function(oW, aZD) {
		for (var aC = this.aLX - 1; 0 <= aC; aC--) aC !== oW && this.close(aC, aZD)
	}, this.a93 = function() {
		0 === this.a5S && (aE.lM || aE.hp) || this.close(this.a5S, 3246)
	}, this.aZG = function(oW, e) {
		aYs[oW].uU(), p.a5H(oW, e.code)
	}
}

function aYb() {
	this.aZC = !1, this.el = function() {
		bi.kz() % 250 != 249 || aE.hp || aE.hq || (b1.en.aZH(+(this.aZC && ah.ne[aE.fQ]), am.lY + bQ.z.ms), this.aZC = !1)
	}
}

function aYi() {
	this.aZJ = function(oW, aD) {
		bK.dr(aD), 0 === bK.size ? b1.z.aZE(oW, 3205) : __fx.customLobby.isCustomMessage(aD) || ((0 === bK.sU(1) ? function(oW) {
			var aZN = bK.sU(6);
			0 === aZN ? function(oW) {
					if (0 === oW && 8 !== ab.a5K()) {
						u.z.aXd();
						for (var aZf = bK.sU(12), aZg = bK.sU(6), h = new Array(aZf), aC = 0; aC < aZf; aC++) h[aC] = bK.sU(aZg);
						aU.aDw(h)
					}
				}(oW) : 2 === aZN ? b1.aYj.aZP(oW) : 3 === aZN || 4 === aZN ? ay.dr() : 5 === aZN ? b1.aYl.aZQ() : 9 === aZN ? b1.aYl.aZR(oW) : 10 === aZN ? b1.aYn.aZS() : 11 === aZN ? b1.aYl.aZT(oW) : 12 === aZN ? b1.aYn.aZU() :
				13 === aZN ? b1.aYp.aZV() : 14 === aZN ? b1.aYp.aZW() : 15 === aZN ? b1.aYl.aZX() : 16 === aZN ? b1.aYj.aZY(oW) : 17 === aZN ? b1.aYj.aZZ(oW) : 19 === aZN ? b1.aYj.aZa(oW) : 20 === aZN ? b1.aYl.aZb(oW) : 21 !== aZN &&
				22 !== aZN && (23 === aZN ? b1.aYl.aZc(oW) : 24 === aZN ? b1.aYj.aZd(oW) : 25 === aZN && b1.aYn.aZe())
		} : function(oW) {
			if (8 !== ab.a5K() && !ay.aLz()) return;
			if (oW !== b1.z.a5S) b1.z.aZE(oW, 3244);
			else if (0 === bK.sU(1)) bi.a4J.aZh(bK.aD);
			else {
				var aC, oW = bK.sU(2);
				if (0 === oW) {
					var s5, rp = bK.sU(9);
					0 !== ah.ne[rp] && 0 !== ah.ne[aE.fQ] && (s5 = bK.sU(10), aO.s4(rp, aE.fQ, s5), ag.sv(rp, 1, s5))
				} else if (1 === oW) ! function() {
					var rp = bK.sU(9);
					0 !== ah.ne[rp] && 0 !== ah.ne[aE.fQ] && b6.aQN(0, [rp], !0) && aO.sM(rp, 1)
				}();
				else if (2 === oW) ! function() {
					var rp = bK.sU(9),
						target = bK.sU(9);
					0 !== ah.ne[rp] && 0 !== ah.ne[target] && 0 !== ah.ne[aE.fQ] && b6.aQN(1, [rp], !0) && (ag.sv(rp, 3, 96), ag.sv(target, 4, 96), aO.aB2(rp, target))
				}();
				else if (m.aA && !m.aB) {
					var fg = 540;
					for (bG.a8(17287), bG.a9(1, 0), bG.a9(6, 10), fg = Math.min(bB.rl.sW.length, 540), aC = 0; aC < fg; aC++) bG.aZn(32, bB.rl.sW[aC]);
					b1.z.send(b1.z.a5S, bG.aD)
				}
			}
		})(oW), bi.aZM())
	}
}

function aYo() {
	this.aZS = function() {
		bm.z.zh(), bm.rr.px(105, bI.f7.vT(bI.f7.vU(5))), bm.rr.px(106, bI.f7.vT(bI.f7.vU(15))), bm.rr.px(109, 0), bm.rr.px(108, bm.buffer.data[109].value), bm.rr.px(111, bm.buffer.data[109].value + 1), bm.rr.px(107, 0), bm.rr.px(110, "")
	}, this.aZe = function() {
		var id = bK.sU(8),
			pU = bJ.a0D.a0U(7);
		0 === id && (bm.z.zm(pU, bm.buffer.data[106].value), new sz(L(525, [pU])))
	}, this.aZU = function() {
		var data;
		bK.size < bG.aZo(29) ? b1.z.aZE(0, 3254) : ((data = {
			vQ: bK.sU(30),
			zw: bK.sU(16),
			zx: bK.sU(30),
			zy: bK.sU(30),
			zz: bK.sU(30),
			a00: bK.aZp(32),
			username: bJ.a0D.a0U(5),
			a01: bJ.a0D.a0U(3),
			a02: bJ.a0D.a0U(3),
			a03: bK.aZp(32),
			a04: bK.aZp(32),
			a05: bK.sU(30),
			a06: bK.aZp(32),
			a07: bK.aZp(32),
			a08: bK.aZp(32),
			a09: bK.aZp(32),
			aUM: bK.aZp(32),
			aUN: bK.aZp(30),
			aUj: bK.aZp(32),
			aUk: bJ.a0D.a0U(3),
			aUd: bK.aZp(2),
			aUf: bK.aZp(10),
			aUb: bJ.a0D.a0U(8),
			aUe: bK.aZp(5),
			aTz: bK.sU(30),
			aUE: bK.sU(30),
			a4f: bK.aZp(32),
			aUR: bK.sU(3),
			aUQ: bK.sU(8),
			aUK: bK.sU(30),
			aUL: bK.aZp(32),
			aUP: bK.sU(1),
			aUX: bJ.a0D.a0U(6),
			aUS: bK.sU(1),
			aUT: bK.sU(1),
			aUF: bK.sU(16),
			aUG: bK.sU(5),
			aUH: bK.sU(1),
			aZq: bK.sU(1),
			aUI: bK.sU(23),
			aU9: bK.sU(30),
			aUl: bK.sU(1),
			aUm: bK.sU(1)
		}).aUl && (data.aUn = bK.aZp(32), data.aUo = bK.sU(30), data.aUp = bK.sU(30), data.aUq = bK.sU(1)), data.aZq && (data.aUI = -data.aUI), 8 === u.vR && (25 === u.a5O().aWD ? (data.aTW = !0, u.z.aTA = data, u.a5O().aGw(25, !1)) : (
			data.aTW = !1, bm.rr.px(160, +(data.aUl && data.aUq)), data.pc = bm.buffer.data[105].value, u.z.aT7 = data, bm.rr.zv(data), u.a5O().aGw(16, !0))))
	}
}

function aYq() {
	this.aZV = function() {
		var aC;
		if (bK.size < bG.aZo(23)) b1.z.aZE(0, 3259);
		else {
			var vi = bK.sU(6),
				fg = bK.sU(10),
				data = [];
			if (9 === vi || 10 === vi || 11 === vi || 13 === vi) {
				for (aC = 0; aC < fg; aC++) data.push([bK.sU(30), bJ.a0D.a0U(5), bK.aZp(32), 0, bK.sU(30)]);
				8 === u.vR && u.a5O().aGw(21, !0, {
					vi: vi,
					data: data
				})
			} else if (12 === vi) {
				for (aC = 0; aC < fg; aC++) data.push([bK.sU(20), bK.sU(30), bK.sU(30), bK.aZp(32), bK.sU(30), bJ.a0D.a0U(5), bJ.a0D.a0U(5)]);
				8 === u.vR && u.a5O().aGw(21, !0, {
					vi: vi,
					data: data
				})
			} else {
				var ig = bK.sU(16);
				if (bK.aZr(39 + 16 * ig + fg * (0 === vi ? 111 : 1 === vi ? 101 : 2 === vi || 3 === vi ? 127 : 212))) {
					if (0 === vi)
						for (aC = 0; aC < fg; aC++) data.push([bK.sU(30), bJ.a0B.a0F(bK.sU(5)), bK.sU(16), bK.sU(30), bK.sU(30)]);
					else if (1 === vi)
						for (aC = 0; aC < fg; aC++) data.push([bK.sU(16), bJ.a0B.a0F(bK.sU(3)), bK.sU(16), bJ.a0B.a0F(bK.sU(5)), bK.sU(31), bK.sU(30)]);
					else if (2 === vi || 3 === vi)
						for (aC = 0; aC < fg; aC++) data.push([bK.sU(30), bJ.a0B.a0F(bK.sU(5)), bK.aZp(32), bK.sU(30), bK.sU(30)]);
					else
						for (aC = 0; aC < fg; aC++) data.push([bK.sU(20), bK.sU(30), bK.sU(30), bK.sU(30), bK.sU(30), bK.aZp(32), bK.sU(30), bJ.a0B.a0F(bK.sU(5)), bJ.a0B.a0F(bK.sU(5))]);
					8 === u.vR && u.a5O().aGw(21, !0, {
						vi: vi,
						data: data
					})
				} else b1.z.aZE(0, 3260)
			}
		}
	}, this.aZW = function() {
		if (bK.size < bG.aZo(29)) b1.z.aZE(0, 3265);
		else {
			var aZs = bK.sU(4),
				aZt = bK.sU(7),
				aZu = bK.sU(11);
			if (bK.aZr(29 + 16 * aZt + 16 * aZu + 11 * aZs)) {
				for (var data = [], aC = 0; aC < aZs; aC++) {
					for (var a4u = bJ.a0B.a0F(bK.sU(3)), aZv = bK.sU(8), aVN = [], fz = 0; fz < aZv; fz++) aVN.push(bK.sU(16));
					data.push({
						name: "[" + a4u + "]",
						aVN: aVN
					})
				}
				8 === u.vR && u.a5O().aGw(23, !0, data)
			} else b1.z.aZE(0, 3266)
		}
	}
}

function aYk() {
	function aZz() {
		var id = bK.sU(3);
		return 0 === id ? {
			id: id,
			pc: bK.sU(30),
			pd: aa0(),
			s: bJ.a0D.a0U(8)
		} : 1 === id ? {
			id: id,
			pc: bK.sU(30),
			pd: aa0(),
			aIs: bK.sU(3),
			value: bK.sU(30),
			target: bK.sU(30),
			pe: aa0()
		} : 2 === id ? {
			id: id,
			pc: bK.sU(30),
			pd: aa0(),
			aIs: bK.sU(3)
		} : 3 === id ? {
			id: id,
			pc: bK.sU(30),
			pd: aa0(),
			aIs: bK.sU(3),
			value: bK.sU(4),
			target: bK.sU(30),
			pe: aa0()
		} : 4 === id ? {
			id: id,
			pc: bK.sU(30),
			pd: aa0(),
			aIs: bK.sU(3),
			target: bK.sU(30),
			pe: aa0(),
			aIu: bK.sU(1)
		} : 5 === id ? {
			id: id,
			aIs: bK.sU(6)
		} : 6 === id ? {
			id: id,
			value: bK.sU(17)
		} : null
	}

	function aa0() {
		return bK.sU(1) ? bJ.a0D.a0U(5) : null
	}
	this.aZP = function(oW) {
		if (oW !== b1.z.fE) b1.z.close(oW, 3239);
		else if (6 !== ab.a5K()) b1.z.close(oW, 3271);
		else {
			bq.dr(), bq.z.wE = bK.sU(10), bq.tT.aIF();
			for (var playerCount = bK.sU(16), fz = 0; fz < playerCount; fz++) bq.pk.aHf(bK.sU(30), bJ.a0D.a0U(5), bK.sU(4), bK.sU(30), bK.sU(7), bK.sU(16), bK.sU(18), bK.sU(11), bK.sU(12), bK.sU(6), bK.sU(13), bK.sU(1));
			u.v(29), bq.z.aJN(!0)
		}
	}, this.aZY = function(oW) {
		if (oW !== b1.z.fE) b1.z.close(oW, 3239);
		else if (bq.fD) {
			bq.z.aJM[0] = bK.sU(20), bq.z.aJM[1] = bK.sU(20);
			for (var aZw = bK.sU(20), fz = 0; fz < aZw; fz++) {
				var id = bK.sU(3);
				0 === id ? bq.pk.aHf(bK.sU(30), bJ.a0D.a0U(5), 0, 1234566, 127, 0, bK.sU(18), 0, bK.sU(12), 0, 0, 0) : 1 === id ? bq.pk.aHz(bK.sU(16), bK.sU(16), bK.sU(13), bK.sU(1)) : 2 === id ? bq.pk.aHv(bK.sU(16), bJ.a0D.a0U(5)) : 3 === id ?
					bq.pk.aHx(bK.sU(16)) : 4 === id ? bq.pk.aHo(bK.sU(16), bK.sU(4), bK.sU(30), bK.sU(7), bK.sU(16), bK.sU(11), bK.sU(18)) : 5 === id ? bq.pk.aHq(bK.sU(16), bK.sU(1)) : 6 === id && bq.pk.aHp(bK.sU(16), bK.sU(6))
			}
			bq.z.wE = bK.sU(10);
			for (var aZx = bK.sU(10), aC = 0; aC < aZx; aC++) {
				var xc = bK.sU(13),
					aXY = bK.sU(10),
					aI3 = bK.sU(10),
					aHN = bq.z.aHN;
				if (aHN.aI3 = aI3, aHN.a5S = bK.sU(10), aHN.aIh = bK.sU(10), aHN.fM = bK.sU(6), aHN.mapSeed = bK.sU(14), aHN.ws = bK.sU(4), aHN.xJ = bK.sU(1), aHN.spawningSeed = bK.sU(14), aHN.a4c = bK.sU(30) - 1, aHN.aI4 = null, 8 === aHN.ws) {
					aHN.aI4 = new Array(aI3);
					for (fz = 0; fz < aI3; fz++) aHN.aI4[fz] = bK.sU(9)
				}
				xc = bq.pk.aI0(xc);
				if (bq.aHN.dz(xc, aXY, aI3)) return;
				bq.pk.aI6(xc, aXY, aI3, aHN.aI4)
			}
			var aZy = bK.sU(13);
			aZy && bq.pk.aI9(aZy), bq.tT.aIF(), bq.z.aIV()
		} else b1.z.close(oW, 3251)
	}, this.aZd = function(oW) {
		oW === b1.z.fE && bq.fD && bq.tT.aIO(bK.sU(13), bK.sU(1))
	}, this.aZZ = function(oW) {
		if (oW !== b1.z.fE) b1.z.close(oW, 3272);
		else if (bq.fD) {
			for (var pq = bq.z.pq, xr = (bq.z.pr = bK.sU(20), bK.sU(6)), aC = 0; aC < xr; aC++) {
				var aKv = aZz();
				bq.q3.aKu(aKv), bq.q3.aL0(aKv), pq.push(aKv)
			}
			pq.length > bq.z.pz && pq.splice(0, pq.length - bq.z.pz), bq.z.aJU()
		} else b1.z.close(oW, 3273)
	}, this.aZa = function(oW) {
		var aKv;
		oW !== b1.z.fE ? b1.z.close(oW, 3276) : bq.fD ? (aKv = aZz(), bq.q3.aKu(aKv), bq.message.aIH(aKv)) : b1.z.close(oW, 3277)
	}
}

function aYm() {
	this.aZQ = function() {
		for (var id = bK.sU(20), colors = new Array(11), aC = 0; aC < 11; aC++) colors[aC] = new Uint8Array([bK.sU(8), bK.sU(8), bK.sU(8)]);
		var es = bJ.a0D.a0U(8);
		bX.eZ.ep({
			id: id,
			colors: colors,
			es: es
		})
	}, this.aZb = function(oW) {
		var aa1 = bK.sU(3),
			fj = bK.sU(5),
			fj = bl.aa2.aa3(fj, bK.sU(30), bK.sU(30), bK.sU(30));
		b1.en.aa4(oW, fj, aa1, 0)
	}, this.aZR = function(oW) {
		this.aZb(oW), bm.rr.px(183, bI.f7.vT(bI.f7.vU(15))), 0 === oW && 0 === bm.buffer.data[105].value.length ? b1.en.eo(0) : b1.aU4.aa5(oW), 4 === b1.z.aYw(oW).aa6() ? 6 === ab.a5K() && b1.aIL.aLZ(oW) : 5 !== b1.z.aYw(oW).aa6() || 8 !== ab
			.a5K() && 10 !== ab.a5K() || b1.rp.aLx()
	}, this.aZT = function(oW) {
		var id = bK.sU(6);
		1 === id ? (bm.rr.px(160, bK.sU(30)), b1.z.aZB(oW), aU.aDs || b1.en.eo(1), bA.aGs(), 8 === u.vR && u.a5O().aWQ()) : 21 === id ? 8 === u.vR && u.a5O().aGw(17) : 22 === id && (bm.rr.px(106, bm.buffer.data[110].value), bm.rr.px(110, ""),
			8 === u.vR) && u.a5O().aGw(15)
	}, this.aZX = function() {
		var fg = bK.sU(16),
			aa7 = bK.sU(16);
		if (bK.aZr(55 + 10 * fg + 16 * aa7)) {
			for (var h = [], aC = 0; aC < fg; aC++) h.push(bJ.a0B.a0F(bK.sU(10)));
			bA.aGv(h)
		} else b1.z.aZE(0, 3270)
	}, this.aZc = function(oW) {
		for (var aa1 = bK.sU(3), fj = bK.sU(5), aa1 = {
				aa1: aa1,
				u2: bl.aa2.aa3(fj, bK.sU(30), bK.sU(30), bK.sU(30))
			}, fj = bK.aZp(32), aa8 = [], aC = 0; aC < 17; aC++) aa8.push(new Uint8Array(bK.sU(16)));
		for (aC = 0; aC < 17; aC++)
			for (var h = aa8[aC], fg = h.length, iZ = 0; iZ < fg; iZ++) h[iZ] = bK.aZp(8);
		bx.show(aa8, fj, oW, aa1)
	}
}

function aYc() {
	this.aYx = function(oW, aYv) {
		bG.a8(11), bG.a9(1, 0), bG.a9(6, 4), bG.a9(1, aYv ? 1 : 0), bG.a9(3, 0 === aE.a49 ? bq.fD ? 6 : 0 : aE.hp ? 1 : aE.lM ? 7 : aE.lK < 7 ? 2 : 8 === aE.lK ? 4 : 9 === aE.lK ? 5 : 3), b1.z.send(oW, bG.aD)
	}, this.aLx = function() {
		bG.a8(59), bG.a9(1, 0), bG.a9(6, 5), bG.a9(8, b1.z.fE), bG.a9(10, ay.aIh), bG.a9(10, ay.aLq), bG.a9(10, m.eE), bG.a9(14, m.e3), b1.z.send(b1.z.a5S, bG.aD)
	}, this.rq = function(fS) {
		bG.a8(27), bG.a9(1, 1), bG.a9(4, 0), bG.a9(22, fS), b1.z.send(b1.z.a5S, bG.aD)
	}, this.rs = function(jK, kB) {
		bG.a8(25), bG.a9(1, 1), bG.a9(4, 1), bG.a9(10, jK), bG.a9(10, kB), b1.z.send(b1.z.a5S, bG.aD)
	}, this.rw = function(jK, ru) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 2), bG.a9(10, jK), bG.a9(9, ru), b1.z.send(b1.z.a5S, bG.aD)
	}, this.ry = function(jK, rx) {
		bG.a8(42), bG.a9(1, 1), bG.a9(4, 3), bG.a9(10, jK), bG.a9(27, rx), b1.z.send(b1.z.a5S, bG.aD)
	}, this.s0 = function(jK, o2) {
		bG.a8(31), bG.a9(1, 1), bG.a9(4, 4), bG.a9(10, jK), bG.a9(16, o2), b1.z.send(b1.z.a5S, bG.aD)
	}, this.s3 = function(kB) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 5), bG.a9(10, kB), b1.z.send(b1.z.a5S, bG.aD)
	}, this.s7 = function(eP) {
		bG.a8(15), bG.a9(1, 1), bG.a9(4, 6), bG.a9(10, eP), b1.z.send(b1.z.a5S, bG.aD)
	}, this.s9 = function(s8) {
		bG.a8(6), bG.a9(1, 1), bG.a9(4, 7), bG.a9(1, s8), b1.z.send(b1.z.a5S, bG.aD)
	}, this.sB = function() {
		bG.a8(5), bG.a9(1, 1), bG.a9(4, 8), b1.z.send(b1.z.a5S, bG.aD)
	}, this.sC = function(jK, fS, kB) {
		bG.a8(47), bG.a9(1, 1), bG.a9(4, 10), bG.a9(10, jK), bG.a9(10, kB), bG.a9(22, fS), b1.z.send(b1.z.a5S, bG.aD)
	}, this.sK = function(aa9, aaA) {
		bG.a8(24), bG.a9(1, 1), bG.a9(4, 15), bG.a9(9, aaA), bG.a9(10, aa9), b1.z.send(b1.z.a5S, bG.aD)
	}, this.sN = function(aAv) {
		bG.a8(14), bG.a9(1, 1), bG.a9(4, 14), bG.a9(9, aAv), b1.z.send(b1.z.a5S, bG.aD)
	}, this.sR = function(aaB, target) {
		var aC, fg = aaB.length;
		for (bG.a8(14 + 9 * fg), bG.a9(1, 1), bG.a9(4, 13), bG.a9(9, target), aC = 0; aC < fg; aC++) bG.a9(9, aaB[aC]);
		b1.z.send(b1.z.a5S, bG.aD)
	}
}

function aYf() {
	this.aaC = function() {
		bG.a8(39), bG.a9(1, 0), bG.a9(6, 16), b1.en.aaD(), b1.z.send(0, bG.aD)
	}, this.aa5 = function(oW) {
		bG.a8(127), bG.a9(1, 0), bG.a9(6, 17), bJ.f7.a0R(bm.buffer.data[105].value, 5), bJ.f7.a0R(bm.buffer.data[106].value, 15), b1.z.send(oW, bG.aD)
	}, this.aWR = function() {
		bG.a8(97), bG.a9(1, 0), bG.a9(6, 18), bJ.f7.a0R(bm.buffer.data[110].value, 15), b1.z.send(0, bG.aD)
	}, this.aUZ = function(a86) {
		var fg = a86.pU.length;
		bG.a8(21 + 16 * fg), bG.a9(1, 0), bG.a9(6, 29), bG.a9(6, a86.action), bG.a9(8, fg), bI.a0B.a0Q(a86.pU), b1.z.send(0, bG.aD)
	}, this.aY0 = function(a00, colors, aaF, es) {
		bH.dr(), bH.a9(1, 0), bH.a9(6, 16), bH.a9(20, Math.min(a00, 1e6));
		for (var aC = 0; aC < 11; aC++)
			for (var fz = 0; fz < 3; fz++) bH.a9(8, colors[aC][fz]);
		a00 = bA.data.aGz(aaF.trim());
		bH.a9(8, -1 === a00 ? 255 : a00), bI.a0D.a3d(es.trim().substring(0, 180), 8, bH), b1.z.send(0, bH.aaG())
	}, this.aUA = function(data) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 25), bG.a9(6, data.action), bJ.f7.a0R(data.pc, 5), b1.z.send(0, bG.aD)
	}, this.aU5 = function(data) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 27), bG.a9(6, data.action), bJ.f7.a0R(data.pc, 5), bG.aZn(32, data.value), b1.z.send(0, bG.aD)
	}
}

function aYg() {
	this.sS = function() {
		for (var fg = aE.l2, a3y = bU.result.a3y, lx = a3y.length, a4n = (bG.a8(17 + 16 * fg + 33 * lx), bG.a9(1, 1), bG.a9(4, 12), bG.a9(10, lx), bG.a9(1, +(2 === aE.a46)), bG.a9(1, aE.a4S % 2), ah.a4n), aC = 0; aC < fg; aC++) bG.a9(16, a4n[
		aC]);
		for (var hU = ah.hU, aC = 0; aC < lx; aC++) {
			var hE = a3y[aC];
			bG.a9(9, hE), bG.a9(24, hU[hE])
		}
		b1.z.send(b1.z.a5S, bG.aD)
	}
}

function aYh() {
	this.aWI = function(vi, vj, vk) {
		bG.a8(75), bG.a9(1, 0), bG.a9(6, 21), bG.a9(6, vi), bG.a9(1, +(vj < 0)), bG.a9(1, +(vk < 0)), bG.a9(30, Math.abs(vj)), bG.a9(30, Math.abs(vk)), b1.z.send(0, bG.aD)
	}, this.aWJ = function(vi, aWK, aWL) {
		bG.a8(18 + 16 * aWK.length + 30), bG.a9(1, 0), bG.a9(6, 22), bG.a9(6, vi), b1.en.aaH(aWK), bG.a9(30, aWL), b1.z.send(0, bG.aD)
	}, this.aWO = function(vi, aWK, aWL) {
		bG.a8(73), bG.a9(1, 0), bG.a9(6, 28), bG.a9(6, vi), bJ.f7.a0R(aWK, 5), bG.a9(30, aWL), b1.z.send(0, bG.aD)
	}, this.aWM = function(aVM, a4t) {
		for (var fg = a4t.length, ig = 0, aC = 0; aC < fg; aC++) ig += a4t[aC].length;
		for (bG.a8(21 + 3 * fg + 16 * ig), bG.a9(1, 0), bG.a9(6, 23), bG.a9(3, aVM), bG.a9(4, fg), bG.a9(7, ig), aC = 0; aC < fg; aC++) bG.a9(3, a4t[aC].length), bI.a0B.a0Q(a4t[aC]);
		b1.z.send(0, bG.aD)
	}, this.aWN = function(aVM, vj, vk) {
		bG.a8(52), bG.a9(1, 0), bG.a9(6, 24), bG.a9(3, aVM), bG.a9(1, +(vj < 0)), bG.a9(1, +(vk < 0)), bG.a9(20, Math.abs(vj)), bG.a9(20, Math.abs(vk)), b1.z.send(0, bG.aD)
	}
}

function aYd() {
	this.aLZ = function(oW) {
		var username = bm.buffer.data[122].value.slice(0, 20),
			username = (bG.a8(22 + 16 * username.length + 18), bG.a9(1, 0), bG.a9(6, 1), bG.a9(10, m.eE), b1.en.aaH(username), bD.color.a75(bm.z.zp()));
		bG.a9(6, username[0]), bG.a9(6, username[1]), bG.a9(6, username[2]), b1.z.fE = oW, b1.z.send(oW, bG.aD)
	}, this.aIM = function(aaI, a86) {
		bH.dr(), bH.a9(1, 0), bH.a9(6, 2), bH.a9(3, aaI), 2 === aaI ? bH.a9(30, a86) : 4 === aaI ? (bH.a9(13, a86.xc), bH.a9(1, a86.xf)) : 3 === aaI ? bI.a0D.a3d(a86, 8, bH) : 5 === aaI ? (bH.a9(3, a86.id), bH.a9(3, a86.value), bH.a9(30, a86
			.pc)) : 6 === aaI && (bH.a9(2, a86.ws), bH.a9(30, a86.pc)), b1.z.send(b1.z.fE, bH.aaG())
	}
}

function aYe() {
	this.aZA = function(oW) {
		var aaP;
		bG.a8(55 + bl.aaJ.sU()), bG.a9(1, 0), bG.a9(6, 13), bG.a9(14, m.e3), bG.a9(4, a1.id), bG.a9(7, a1.e8), bG.a9(1, +m.aA), bG.a9(1, +m.aB), bG.a9(5, (new Date).getHours() % 24), aaP = bA.aGy(), bG.a9(8, aaP[0]), bG.a9(8, aaP[1]), bl.aaJ
		.a3d(), b1.z.send(oW, bG.aD)
	}, this.aa4 = function(oW, u2, aa1, aaL) {
		bG.a8(70), bG.a9(1, 0), bG.a9(6, 30), bG.a9(3, aa1), bG.a9(30, u2), bG.a9(30, aaL), b1.z.send(oW, bG.aD)
	}, this.fF = function(fA) {
		bH.dr(), bH.a9(1, 0), bH.a9(6, 6), bI.a0D.a3d(fA, 16, bH), b1.z.send(b1.z.fE, bH.aaG())
	}, this.eo = function(id) {
		bG.a8(13), bG.a9(1, 0), bG.a9(6, 15), bG.a9(6, id), b1.z.send(0, bG.aD)
	}, this.y7 = function(id, value) {
		bG.a8(43), bG.a9(1, 0), bG.a9(6, 3), bG.a9(6, id), bG.a9(30, value), b1.z.send(0, bG.aD)
	}, this.aGu = function(id, pU) {
		var fg = Math.min(pU.length, 63);
		bG.a8(19 + 16 * fg), bG.a9(1, 0), bG.a9(6, 26), bG.a9(6, id), bG.a9(6, fg), bI.a0B.a0Q(pU), b1.z.send(0, bG.aD)
	}, this.aaM = function(aXc, q1) {
		bG.a8(7 + 26 * q1.length), bG.a9(1, 0), bG.a9(6, 9);
		for (var aC = 0; aC < q1.length; aC++) bG.a9(16, q1[aC][0]), bG.a9(10, q1[aC][1]);
		b1.z.send(aXc, bG.aD)
	}, this.aZH = function(aaN, aaO) {
		bG.a8(20), bG.a9(1, 0), bG.a9(6, 19), bG.a9(1, aaN), bG.a9(12, aaO), b1.z.send(b1.z.a5S, bG.aD)
	}, this.aaH = function(username) {
		bG.a9(5, username.length), bI.a0B.a0Q(username)
	}, this.pF = function(pG, on, oW, pow) {
		bG.a8(88), bG.a9(1, 0), bG.a9(6, 8), bG.a9(3, pow.aa1), bG.a9(30, pow.u2), bG.aZn(32, on), bG.a9(16, pG), b1.z.send(oW, bG.aD)
	}
}

function aZ8() {
	var aaQ, aaR, b, aaS = ["wss://", "/s50/", "/s51/", "/s52/"],
		aaT = 0;

	function aZ9() {
		b1.z.aZ9(aaQ, aaR)
	}

	function aaW(e) {
		b1.aAv.aZJ(aaQ, new Uint8Array(e.data))
	}

	function aaX() {}

	function aZG(e) {
		b1.z.aZG(aaQ, e)
	}
	this.dr = function(eP, a5P, aZ4) {
		aaQ = eP, aaR = a5P,
			function(aZ4) {
				aZ4 = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : m.e4 ? "ws://localhost:" + (7130 + aaQ) + "/" : aZ4 ? aaS[0] + "game.territorial.io/x0" + aaQ + "/" : aaS[0] + b1.z.aYr[aaQ] + aaS[1 + m.e2];
				(b = new WebSocket(aZ4)).binaryType = "arraybuffer", b.onopen = aZ9, b.onmessage = aaW, b.onclose = aZG, b.onerror = aaX
			}(aZ4)
	}, this.aaV = function() {
		return b.readyState === b.CONNECTING
	}, this.em = function() {
		return b.readyState === b.OPEN
	}, this.aYz = function() {
		return aaT
	}, this.aZB = function() {
		aaT = 1
	}, this.aZ6 = function() {
		return this.aaV() || this.em()
	}, this.aZ7 = function(a5P) {
		aaR = a5P
	}, this.aa6 = function() {
		return aaR
	}, this.send = function(aD) {
		this.em() && b.send(aD)
	}, this.close = function(aZD) {
		this.aZ6() && (this.uU(), b.close(aZD))
	}, this.uU = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dT() {
	var gap, aaY = !1,
		wt = 0,
		j = 0,
		vW = 0,
		canvas = null,
		p2 = null,
		a6f = null;

	function aac() {
		for (var aC = aE.a1N; 0 <= aC; aC--) a6f[aC] = 0;
		for (aC = am.lY - 1; 0 <= aC; aC--) a6f[bj.fe[am.ld[aC]]] += ah.hU[am.ld[aC]];
		aaY = !0
	}

	function aaa() {
		for (var aah, aaf = 0, fg = 0, eq = Math.floor(j / 2), eO = Math.floor(vW / 2), aag = 1.5 * Math.PI, aC = aE.a1N; 0 <= aC; aC--) fg += a6f[aC], 0 === a6f[aC] && aaf++;
		if (aaY = !1, p2.clearRect(0, 0, j, j), 0 < fg)
			if (aaf === aE.a1N) {
				for (aC = aE.a1N; 0 <= aC; aC--)
					if (0 < a6f[aC]) {
						! function(aC, eq, eO) {
							p2.fillStyle = bj.aal[bj.lP[aC]], p2.beginPath(), p2.arc(eq, eq, eO, 0, 2 * Math.PI), p2.fill()
						}(aC, eq, eO);
						break
					}!
				function(eq) {
					var fontSize = eq / 3;
					p2.font = bD.t4.t7(1, fontSize), p2.fillStyle = bE.qL, p2.fillText("100%", eq, eq + .1 * fontSize)
				}(eq)
			} else {
				for (aC = 0; aC <= aE.a1N; aC++) 0 < a6f[aC] && (aah = aag + 2 * Math.PI * a6f[aC] / fg, aak(p2, bj.aal[bj.lP[aC]], eq, eO, aag, aah), function(eq, eO, aag, aah) {
					var g8 = (aah - aag) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * eO * Math.min(g8, .37);
					fontSize < 8 || (aag = (aag + aah) / 2, aah = (__fx.settings.detailedTeamPercentage ? (100 * g8).toFixed(2) : Math.floor(100 * g8 + .5)) + "%", eO *= .525 - Math.max(.6 * (g8 - .7), 0), p2.font = bD.t4.t7(1, fontSize), p2
						.fillStyle = bE.qL, p2.fillText(aah, eq + Math.cos(aag) * eO, eq + Math.cos(aag + 1.5 * Math.PI) * eO))
				}(eq, eO, aag, aah), 0 !== aC && aan(p2, eq, eO, aag), aag = aah);
				aan(p2, eq, eO, 1.5 * Math.PI)
			} aao(p2, eq, eO)
	}

	function aak(il, color, eq, eO, aag, aah) {
		il.fillStyle = color, il.beginPath(), il.arc(eq, eq, eO, aag, aah), il.lineTo(eq, eq), il.fill()
	}

	function aan(il, eq, eO, aap) {
		il.beginPath(), il.moveTo(eq, eq), il.lineTo(eq + Math.cos(aap) * eO, eq + Math.cos(aap + 1.5 * Math.PI) * eO), il.stroke()
	}

	function aao(il, eq, eO) {
		il.beginPath(), il.arc(eq, eq, eO, 0, 2 * Math.PI), il.stroke()
	}
	this.dr = function() {
		if (aE.ib) {
			wt = 0, a6f = new Uint32Array(aE.a1N + 1);
			for (var aC = aE.a1N; 0 <= aC; aC--) a6f[aC] = 0;
			for (aC = am.lY - 1; 0 <= aC; aC--) a6f[bj.fe[am.ld[aC]]] += 1;
			this.resize()
		} else a6f = p2 = canvas = null
	}, this.aCR = function() {
		return j
	}, this.resize = function() {
		aE.ib && (j = Math.floor(.95 * (a1.a2.it() && !aE.o8 ? .18 * i.min : .13 * i.iu)), j = (j *= 1 + (.5 + .2 * a1.a2.it()) * aE.o8) + j % 2, gap = Math.max(1, .015 * j), vW = Math.floor(j - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = j, canvas.height = j, (p2 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, p2.strokeStyle = bE.qL, bD.t4.textAlign(p2, 1), bD.t4.textBaseline(p2, 1), aaa())
	}, this.lZ = function(aab) {
		aab && aac();
		var eh, aab = this.lb();
		return bj.lP[aab] || (aab = function() {
			for (var la = -1, aC = aE.a1N; 1 <= aC; aC--)(-1 === la || a6f[aC] > a6f[la]) && (la = aC);
			return la
		}(), eh = ah.hU[md[0]], -1 !== aab && a6f[aab] > eh) ? a6f[aab] : eh
	}, this.a55 = function() {
		return wt = 31, this.el(), this.lb()
	}, this.lb = function() {
		for (var la = 0, aC = aE.a1N; 0 < aC; aC--) a6f[aC] > a6f[la] && (la = aC);
		return la
	}, this.l3 = function(aae) {
		for (var h9 = 0, ld = am.ld, fe = bj.fe, fg = am.lY, gK = bR.gK, aC = 0; aC < fg; aC++) {
			var hE = ld[aC];
			fe[hE] === aae && (gK[h9++] = hE)
		}
		bR.gB[0] = h9
	}, this.lc = function(aae) {
		for (var h9 = 0, ld = am.ld, fe = bj.fe, fg = am.lY, gK = bR.gK, aC = 0; aC < fg; aC++) {
			var hE = ld[aC];
			fe[hE] !== aae && (gK[h9++] = hE)
		}
		bR.gB[0] = h9
	}, this.a7d = function() {
		for (var h9 = 0, aC = aE.a1N; 0 <= aC; aC--) h9 += 0 < a6f[aC];
		return h9
	}, this.el = function() {
		aE.ib && 32 <= ++wt && (wt = 0, aac())
	}, this.nR = function() {
		aE.ib && aaY && aaa()
	}, this.xN = function(il, h9, size) {
		var eq = size >> 1,
			eO = Math.floor(.4 * size),
			aag = 1.5 * Math.PI;
		il.clearRect(0, 0, size, size), il.lineWidth = .042 * size, il.strokeStyle = bE.qL;
		for (var aC = 0; aC < h9; aC++) {
			var aah = aag + 2 * Math.PI / h9;
			aak(il, bj.aal[aC + 1], eq, eO, aag, aah), 0 !== aC && aan(il, eq, eO, aag), aag = aah
		}
		aan(il, eq, eO, 1.5 * Math.PI), aao(il, eq, eO)
	}, this.yl = function() {
		aE.ib && (aE.o8 ? ym.drawImage(canvas, bf.gap, bf.gap) : ym.drawImage(canvas, bf.gap, aCQ + 2 * bf.gap))
	}
}

function dk() {
	function aav(fn, fg, fp, a3n, aDh, g6) {
		if (!(fp < 1 || aDh < fp))
			for (var aC = 0; aC <= fg; aC++) {
				var fK = bP.jO(fn, fp);
				if (a3n(fK)) return fK >> 2;
				fn += g6
			}
		return -1
	}

	function aaz(fp, fg, fn, a3n, aat, g6) {
		if (!(fn < 1 || aat < fn)) {
			fg = Math.max(fg, 0);
			for (var aC = 0; aC <= fg; aC++) {
				var fK = bP.jO(fn, fp);
				if (a3n(fK)) return fK >> 2;
				fp += g6
			}
		}
		return -1
	}

	function ab3(jB, jC, aaq) {
		return -1 !== jC && (-1 === jB || bP.jD(jC, aaq) < bP.jD(jB, aaq)) ? jC : jB
	}
	this.i6 = function(aaq) {
		return this.a4D(aaq, function(fK) {
			return ad.fb(fK)
		})
	}, this.iC = function(aaq) {
		return this.a4D(aaq, function(fK) {
			return ad.aMf(fK, aE.fQ)
		})
	}, this.a4D = function(aaq, a3n) {
		return function(aaq, aar, a3n) {
			for (var hw = bP.fo(aaq), hy = bP.fq(aaq), aat = bV.fr - 2, aDh = bV.fs - 2, aau = -1, fj = 0; fj < aar; fj++) {
				var aDg = Math.max(hw - fj, 1),
					aRJ = Math.max(hy - fj, 1),
					a1y = Math.min(hw + fj, aat),
					a1x = Math.min(hy + fj, aDh),
					jB = aav(hw, a1y - hw, hy - fj, a3n, aDh, 1),
					jC = aav(hw - 1, hw - aDg - 1, hy - fj, a3n, aDh, -1),
					a1y = aav(hw, a1y - hw, hy + fj, a3n, aDh, 1),
					aDg = aav(hw - 1, hw - aDg - 1, hy + fj, a3n, aDh, -1),
					aay = aaz(hy, a1x - hy - 1, hw - fj, a3n, aat, 1),
					ab0 = aaz(hy - 1, hy - aRJ - 2, hw - fj, a3n, aat, -1),
					a1x = aaz(hy, a1x - hy - 1, hw + fj, a3n, aat, 1),
					aRJ = aaz(hy - 1, hy - aRJ - 2, hw + fj, a3n, aat, -1);
				if (aau = ab3(aau, jB, aaq), aau = ab3(aau, jC, aaq), aau = ab3(aau, a1y, aaq), aau = ab3(aau, aDg, aaq), aau = ab3(aau, aay, aaq), aau = ab3(aau, ab0, aaq), aau = ab3(aau, a1x, aaq), 0 <= (aau = ab3(aau, aRJ, aaq)) && fj *
					fj >= bP.jD(aau, aaq)) return aau
			}
			return -1
		}(aaq, bP.ir(), a3n)
	}
}

function dC() {
	function ab4(key, size) {
		var aY2;
		return "undefined" == typeof URLSearchParams || (aY2 = window.location.search, "string" != typeof(aY2 = new URLSearchParams(aY2).get(key))) || aY2.length < 1 ? null : bJ.f7.a0K(aY2, size)
	}
	this.dz = function() {
		if (0 !== a1.id) return !1;
		var a4c = ab4("r", 6);
		if (! function() {
				var value = ab4("account", 5);
				if (!value && !(value = ab4("a", 5))) return void bL.clear();
				return (value = __fx.utils.parseAccountId(value)) ? (bL.clear(), u.v(8, u.vR, new vS(1e3, {
					action: 0,
					pc: value,
					vQ: 0
				})), !0) : (bL.clear(), !1)
			}()) {
			if (!this.clear()) return !1;
			if (!a4c) return !1;
			this.aUs("r", a4c), u.v(3, 0, L(526)), bC.ab6(a4c)
		}
		return !0
	}, this.clear = function() {
		var a5F = new URL(window.location.href);
		a5F.search = "";
		try {
			return history.replaceState(null, "", a5F.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aUs = function(key, value) {
		if (0 === a1.id) try {
			var a5F = new URL(window.location.href),
				hE = a5F.searchParams;
			hE.set(key, value), a5F.search = hE.toString(), history.replaceState(null, "", a5F.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cr() {
	var ab8, h;
	this.dr = function() {
		for (var aC = (h = new Uint16Array(101)).length - 1; 0 <= aC; aC--) h[aC] = bO.g7(32768 * aC, 100);
		this.a8s(0)
	}, this.value = function(hE) {
		return h[hE]
	}, this.aQv = function() {
		return bO.g7(ab8 - 1, 2)
	}, this.a8s = function(aQn) {
		ab8 = 2 * aQn % 32768 + 1
	}, this.random = function() {
		return ab8 = 167 * ab8 % 32768
	}, this.kJ = function(nZ) {
		return bO.g7(nZ * this.random(), 32768)
	}, this.ku = function(hE) {
		return 0 !== hE && this.random() < this.value(hE)
	}, this.jf = function(fz, g0) {
		return fz + this.kJ(g0 - fz)
	}
}

function d8() {
	function abG(pU) {
		3 === u.vR && u.a5O().z1(pU)
	}
	this.sg = new ab9, this.a92 = new abA, this.aOP = new abB, this.dr = function() {
		aE.hp || this.sg.dr()
	}, this.el = function() {
		aE.hp || (this.sg.el(), 3 !== u.vR) || bi.kz() % 15 != 5 && 2 !== aE.a49 || u.a5O().aY3()
	}, __fx.replay.restartReplay = () => this.aY6(), this.aY6 = function() {
		var abD = 0 !== aE.a49,
			abE = aE.a8n;
		abD || ab.aLj(), aE.a8l.a9C(), aE.data.canvas = null, b1.z.close(b1.z.a5S, 3257), b1.z.a5S = 0, aE.data.isReplay = 1, aE.a8p(), abD && (aE.a8n = abE)
	}, this.aY5 = function(pU) {
		var aC = pU.indexOf("=");
		return 0 <= aC ? pU.substring(aC + 1) : pU
	}, __fx.replayHistory.load = saved => {
		saved = bC.aY5(saved), bC.aOP.a0U(saved) && bC.aY6()
	}, this.ab6 = function(id) {
		var abF = new XMLHttpRequest;
		abF.open("GET", "https://" + b1.z.a4b() + "/log/?r=" + id), abF.onload = function() {
			var pU = 200 === abF.status ? abF.responseText : "";
			abG(pU.length ? pU : L(527))
		}, abF.onerror = function() {
			abG(L(528))
		}, abF.send()
	}, this.aY4 = function(pU) {
		return pU
	}
}

function ab9() {
	this.abH = null, this.abI = null, this.abJ = null, this.abK = null, this.abL = null, this.abM = null, this.a91 = "";
	var abN = 0;
	this.dr = function() {
		this.abH = [], this.abI = [], this.abJ = [], this.abK = [], this.abL = [0], this.abM = [0], abN = 0, this.a91 = ""
	}, this.sh = function(id, gP, gR, gT) {
		aE.hp || 2 === aE.a49 || (0 === this.abL[abN] && (this.abM[abN] ? (this.abL.push(1), this.abM.push(0), abN++) : this.abL[abN] = 1), this.abH.push(id), this.abI.push(gP), this.abJ.push(void 0 === gR ? 0 : gR), this.abK.push(void 0 === gT ?
			0 : gT), this.abM[abN]++)
	}, this.el = function() {
		0 === this.abL[abN] ? this.abM[abN]++ : (this.abL.push(0), this.abM.push(0), abN++)
	}
}

function abB() {
	var abO = 0;

	function abS(pU, id) {
		console.log(pU), abO || (id ? 1 === id ? aO.aAL = L(209) + ": " + pU : u.v(4, 3, new w(L(530), pU, 1)) : u.v(4, 3, new w("⚠️ " + L(529), pU, 1)))
	}
	this.a0U = function(pU, abP) {
		var j3, q1;
		return abO = abP, bJ.f7.a0N(bJ.f7.a0L(bJ.f7.a0J(pU))), aO.aAL = "", !! function() {
			if (bK.size < 10) abS("File Too Small");
			else {
				var abU = bK.sU(12),
					s = (abU !== m.rVersion && (s = "Incompatible Version   Required: " + m.rVersion, abS(s = (s += "   Found: " + abU) + ("   Compatible at " + b1.z.a4b() + "/" + abU), 1)), bK.sU(12)),
					abV = bK.sU(31);
				if (abV !== bK.size) abS("Size Error: Stated Size " + abV + " Actual Size " + bK.size);
				else if (function(k, abU) {
						for (var hE = bK.aD, fg = bK.size, aaO = abU, aC = 3; aC < fg; aC++) aaO = aaO + hE[aC] & 4095;
						return aaO === k || (abS("Hash Error: " + aaO + " " + k + " " + fg), !1)
					}(s, abU)) return 1
			}
			return
		}() && (j3 = bK, (q1 = aE.data = new a8k).mapType = j3.sU(2), q1.mapProceduralIndex = j3.sU(8), q1.mapRealisticIndex = j3.sU(8), q1.mapSeed = j3.sU(14), q1.mapName = j3.abX(5), 2 === q1.mapType && j3.abY(), q1.passableWater = j3.sU(
			1), q1.passableMountains = j3.sU(1), q1.playerCount = j3.sU(10), q1.humanCount = j3.sU(10), q1.selectedPlayer = j3.sU(9), q1.gameMode = j3.sU(1), q1.playerMode = j3.sU(2), q1.battleRoyaleMode = j3.sU(2), q1.numberTeams = j3.sU(4),
			q1.isZombieMode = j3.sU(1), q1.isContest = j3.sU(1), q1.isReplay = j3.sU(1), q1.elo = j3.abZ(2, 14, 2), q1.colorsType = j3.sU(1), q1.colorsPersonalized = j3.sU(1), q1.colorsData = j3.abZ(10, 18, 512), q1.selectableColor = j3.sU(
			1), q1.teamPlayerCount = j3.abZ(4, 10, 9), q1.neutralBots = j3.sU(1), q1.botDifficultyType = j3.sU(2), q1.botDifficultyValue = j3.sU(4), q1.botDifficultyTeam = j3.abZ(4, 4, 9), q1.botDifficultyData = j3.abZ(10, 4, 512), q1
			.spawningType = j3.sU(2), q1.spawningSeed = j3.sU(14), q1.spawningData = j3.abZ(11, 12, 1024), q1.selectableSpawn = j3.sU(1), q1.playerNamesType = j3.sU(2), q1.playerNamesData = j3.aba(10, 5, 512), q1.selectableName = j3.sU(1), q1
			.aIncomeType = j3.sU(2), q1.aIncomeValue = j3.sU(8), q1.aIncomeData = j3.abZ(10, 8, 512), q1.tIncomeType = j3.sU(2), q1.tIncomeValue = j3.sU(8), q1.tIncomeData = j3.abZ(10, 8, 512), q1.iIncomeType = j3.sU(2), q1.iIncomeValue = j3
			.sU(8), q1.iIncomeData = j3.abZ(10, 8, 512), q1.sResourcesType = j3.sU(2), q1.sResourcesValue = j3.sU(11), q1.sResourcesData = j3.abZ(10, 11, 512), q1.a9A = j3.abZ(10, 30, 0), !! function() {
				var j3 = bK,
					a0V = j3.sU(5),
					abb = j3.sU(30),
					abc = j3.sU(30);
				if (abb + abc > 8 * j3.size) return void abS("Corrupted File");
				return function(fg) {
						var abf = new Uint8Array(fg),
							abg = new Uint16Array(fg),
							abh = new Uint32Array(fg),
							abi = new Uint32Array(fg);
						bC.sg.abH = abf, bC.sg.abI = abg, bC.sg.abJ = abh, bC.sg.abK = abi;
						for (var aC = 0; aC < fg; aC++) {
							var id = bK.sU(4);
							abf[aC] = id, abg[aC] = bK.sU(9), 0 === id ? abh[aC] = bK.sU(22) : 1 === id ? (abh[aC] = bK.sU(10), abi[aC] = bK.sU(10)) : 2 === id ? (abh[aC] = bK.sU(10), abi[aC] = bK.sU(9)) : 3 === id ? (abh[aC] = bK.sU(10),
								abi[aC] = bK.sU(27)) : 4 === id ? (abh[aC] = bK.sU(10), abi[aC] = bK.sU(16)) : 5 === id || 6 === id ? abh[aC] = bK.sU(10) : 7 === id ? abh[aC] = bK.sU(1) : 10 === id && (abh[aC] = bK.sU(20), abi[aC] = bK
								.sU(22))
						}
					}(abb),
					function(fg, a0V) {
						var abL = new Uint8Array(fg),
							abM = new Array(fg);
						abM.fill(0), bC.sg.abL = abL, bC.sg.abM = abM;
						for (var aC = 0; aC < fg; aC++) abL[aC] = bK.sU(1), abM[aC] = bK.sU(a0V)
					}(abc, a0V), 1
			}()) && (bK.eP < 8 * bK.size - 13 || bK.eP > 8 * bK.size ? (abS("Out Of Bounds Error: " + bK.eP + " " + 8 * bK.size), !1) : (bC.sg.a91 = pU, 2 !== aE.data.mapType || (abS("Load base64 image...", 2), abP)))
	}, this.aOQ = function(aNS, abT) {
		var a70 = document.createElement("canvas"),
			il = a70.getContext("2d");
		if (a70.width = aNS.width, a70.height = aNS.height, il.drawImage(aNS, 0, 0), aE.data.canvas = a70, abO || abT) return aE.a49 ? void 0 : (aE.data.mapType = 2, u.y(), void u.v(19));
		bC.aY6()
	}
}

function abA() {
	this.a3d = function() {
		var a0V = function() {
				for (var abM = bC.sg.abM, fg = abM.length, max = 0, aC = 0; aC < fg; aC++) max = Math.max(max, abM[aC]);
				return a0b(Math.max(max, 1))
			}(),
			j = (q1 = aE.data, (j = bH).dr(), j.a9(12, m.rVersion), j.eP += 43, j.a9(2, q1.mapType), j.a9(8, q1.mapProceduralIndex), j.a9(8, q1.mapRealisticIndex), j.a9(14, q1.mapSeed), j.abp(q1.mapName, 5), 2 === q1.mapType && j.abq(q1.canvas),
				j.a9(1, q1.passableWater), j.a9(1, q1.passableMountains), j.a9(10, q1.playerCount), j.a9(10, q1.humanCount), j.a9(9, q1.selectedPlayer), j.a9(1, q1.gameMode), j.a9(2, q1.playerMode), j.a9(2, q1.battleRoyaleMode), j.a9(4, q1
					.numberTeams), j.a9(1, q1.isZombieMode), j.a9(1, q1.isContest), j.a9(1, q1.isReplay), j.dx(q1.elo, 2, 14), j.a9(1, q1.colorsType), j.a9(1, q1.colorsPersonalized), j.dx(q1.colorsData, 10, 18), j.a9(1, q1.selectableColor), j.dx(
					q1.teamPlayerCount, 4, 10), j.a9(1, q1.neutralBots), j.a9(2, q1.botDifficultyType), j.a9(4, q1.botDifficultyValue), j.dx(q1.botDifficultyTeam, 4, 4), j.dx(q1.botDifficultyData, 10, 4), j.a9(2, q1.spawningType), j.a9(14, q1
					.spawningSeed), j.dx(q1.spawningData, 11, 12), j.a9(1, q1.selectableSpawn), j.a9(2, q1.playerNamesType), j.abr(q1.playerNamesData, 10, 5), j.a9(1, q1.selectableName), j.a9(2, q1.aIncomeType), j.a9(8, q1.aIncomeValue), j.dx(q1
					.aIncomeData, 10, 8), j.a9(2, q1.tIncomeType), j.a9(8, q1.tIncomeValue), j.dx(q1.tIncomeData, 10, 8), j.a9(2, q1.iIncomeType), j.a9(8, q1.iIncomeValue), j.dx(q1.iIncomeData, 10, 8), j.a9(2, q1.sResourcesType), j.a9(11, q1
					.sResourcesValue), j.dx(q1.sResourcesData, 10, 11), j.dx(q1.a9A, 10, 30), ! function(a0V) {
					var j = bH,
						abH = bC.sg.abH,
						gP = bC.sg.abI,
						gR = bC.sg.abJ,
						gT = bC.sg.abK,
						fg = abH.length;
					j.a9(5, a0V), j.a9(30, fg), j.a9(30, bC.sg.abM.length);
					for (var aC = 0; aC < fg; aC++) {
						var eq = abH[aC];
						j.a9(4, eq), j.a9(9, gP[aC]), 0 === eq ? j.a9(22, gR[aC]) : 1 === eq ? (j.a9(10, gR[aC]), j.a9(10, gT[aC])) : 2 === eq ? (j.a9(10, gR[aC]), j.a9(9, gT[aC])) : 3 === eq ? (j.a9(10, gR[aC]), j.a9(27, gT[aC])) : 4 === eq ? (j
							.a9(10, gR[aC]), j.a9(16, gT[aC])) : 5 === eq || 6 === eq ? j.a9(10, gR[aC]) : 7 === eq ? j.a9(1, gR[aC]) : 10 === eq && (j.a9(20, gR[aC]), j.a9(22, gT[aC]))
					}
				}(a0V), ! function(a0V) {
					for (var j = bH, abL = bC.sg.abL, abM = bC.sg.abM, fg = abL.length, aC = 0; aC < fg; aC++) j.a9(1, abL[aC]), j.a9(a0V, abM[aC])
				}(a0V), bH.eP),
			q1 = bO.g7(j - 1, 6) + 1,
			a0V = (bG.aZo(6 * q1) !== bH.h.length && bH.h.push(0), ! function() {
				var j = bH;
				j.eP = 24, j.a9(31, j.h.length), j.eP = 12, j.a9(12, function() {
					for (var h = bH.h, fg = h.length, aaO = m.rVersion, aC = 3; aC < fg; aC++) aaO = aaO + h[aC] & 4095;
					return aaO
				}())
			}(), bK.dr(bH.h), bI.f7.vT(bI.f7.vU(q1)));
		return bK.xs(), bH.dr(), a0V
	}
}

function cw() {
	var eq, c1 = !1,
		abu = !1,
		abv = -1e4,
		abw = -1,
		abx = 0;

	function resize(ac1) {
		eq = 0, ac.vr() && (abz(ac1) || c1) && (c1 = !1, bf.resize(), bZ.aGN.resize(), aZ.dr(), bb.dr(), aa.resize(), aU.resize(), aP.resize(), bx.resize(), u.resize(), 1 <= aE.a49 ? (aW.resize(!1), aV.resize(), aX.resize(), aT.resize(), aS.resize(),
			aO.resize(), aN.resize(), bF.resize(), ax.resize(), aQ.resize(), aR.resize(), aM.resize(), bh.resize(), ag.resize(), aY.resize(), bk.resize(), aT.aDW()) : (ab.aLl(), ab.aLm()), bi.dy = !0)
	}

	function aby(g8) {
		return g8 && 128 < g8 ? Math.floor(g8) : 128
	}

	function abz(ac1) {
		var j, k, ac3, vW, aCv;
		if (!(0 < i.v8)) return vW = aby(document.documentElement.clientWidth), aCv = aby(window.visualViewport && 2 !== a1.id ? window.visualViewport.height : document.documentElement.clientHeight), j = vW, k = aCv, ac3 = 0 !== a1.id || j < k ?
			700 : 1200, ac3 = Math.min(ac3 / ((j + k) / 2), 1), ac3 = 0 === bm.buffer.data[1].value ? 2 * ac3 / 3 : Math.min(ac3 + (bm.buffer.data[1].value - 1) * (1 - ac3) / 2, 1), i.l = (window.devicePixelRatio || 1) * ac3, __fx.hoveringTooltip
			.canvasPixelScale = i.l, ac1 && !abu ? (abu = !0, u.removeChild(document.body, a5g)) : abu && (abu = !1, document.body.appendChild(a5g)), j = Math.floor(.5 + vW * i.l), k = Math.floor(.5 + aCv * i.l), j !== i.j || k !== i.k ? (i.j =
				j, i.k = k, i.min = aFz(j, k), i.max = aAb(j, k), i.iu = bO.g7(j + k, 2), i.yi = j / k, a5g.width = j, a5g.height = k, a5g.style.width = vW + "px", a5g.style.height = aCv + "px", abw = bi.eg + 1e3, 1) : void 0
	}
	this.j = 0, this.k = 0, this.min = 0, this.max = 0, this.iu = 0, this.yi = 1, this.l = 1, this.v8 = 0, this.ds = function() {
		this.j = aby(document.documentElement.clientWidth) + 2, this.k = aby(document.documentElement.clientHeight) + 2
	}, this.dr = function() {
		eq = 1, a5g = document.getElementById("canvasA"), 2 === a1.id && (a5g.style.webkitUserSelect = "none"), (ym = a5g.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, abz(0)
	}, this.el = function() {
		50 <= ++eq && resize(0), -1 === abw || bi.eg < abw || (abw = -1, 2e3 * ++abx >= bi.eg + 8e3 ? console.log("error 3748") : a1.a2.setState(15))
	}, this.e1 = function(kH) {
		c1 = !0, resize(kH)
	}, this.a6L = function() {
		abv + 1e3 > bi.eg || (abv = bi.eg, resize(0))
	}
}

function dh() {
	var ac5 = [];
	this.aKZ = function(pc) {
		for (var eh = (new Date).getTime() - 36e5, aC = ac5.length - 1; 0 <= aC; aC--)
			if (ac5[aC].eh < eh) ac5.splice(aC, 1);
			else if (ac5[aC].pc === pc) return !0;
		return !1
	}, this.aKb = function(pc, aKa) {
		return !(this.aKZ(pc) || !b1.z.em(0) || (b1.aU4.aU5({
			action: 6,
			pc: pc,
			value: aKa
		}), ac5.push({
			pc: pc,
			eh: (new Date).getTime()
		}), 0))
	}
}

function dQ() {
	this.aa2 = new ac6, this.a51 = new ac7, this.aaJ = new ac8
}

function ac8() {
	var ac9 = acA(),
		acB = acC(),
		acD = acE();
	this.sU = function() {
		return 123
	}, this.a3d = function() {
		bJ.f7.a0R(bm.buffer.data[183].value, 15), bG.a9(14, ac9), bG.a9(7, acB), bG.a9(12, acD)
	}
}

function acA() {
	for (var eq = document.createElement("canvas"), eq = (eq.width = 24, eq.height = 24, eq.getContext("2d", {
			alpha: !1
		})), fj = (eq.fillStyle = "rgb(0,0,0)", eq.fillRect(0, 0, 24, 24), eq.font = "22px system-ui", eq.textBaseline = "middle", eq.textAlign = "center", eq.fillStyle = "rgb(255,255,255)", eq.fillText("Q", 12, 12), eq.getImageData(0, 0, 24, 24)
			.data), fg = fj.length, lx = 0, aC = 0; aC < fg; aC += 4) lx += fj[aC];
	return 16383 & lx
}

function acC() {
	var fj = (new Date).getTimezoneOffset();
	return 127 & Math.abs(Math.floor((900 + fj + .5) / 15))
}

function acE() {
	return 4095 & window.screen.width ^ 4095 & window.screen.height
}

function ac7() {
	this.a52 = function() {
		for (var hE, fg = am.lY, wu = am.ld, a4n = ah.a4n, aCj = this.aNB(), aC = 0; aC < fg; aC++) hE = wu[aC], bD.h2.kP(hE) || (a4n[hE] = aCj);
		var sl = ah.sl,
			k5 = ah.k5,
			k6 = ah.k6,
			a4l = ah.a4l,
			fg = aE.l2;
		for (aC = 0; aC < fg; aC++)(0 === a4l[aC] || k6[aC] < 1 || 2 * sl[aC] > 3 * (k5[aC] + k6[aC])) && (a4n[aC] = 0);
		var a4z = 0;
		for (aC = 0; aC < fg; aC++) a4z += 0 < a4n[aC];
		return a4z
	}, this.aNB = function() {
		return Math.min(65535, bi.kz())
	}
}

function ac6() {
	function acI(h, g8, iZ) {
		for (var aC = 0; aC < 256; aC++) h[aC] = (h[aC] + (g8 >> (aC + iZ) % 30 & 1)) % 256
	}
	this.el = function(acF, acG) {
		var h = new Uint8Array(256);
		return function(h, acF, acG) {
				var aC, acK = 3 + (4 + acF) % 32768,
					acL = 12 + acG % 32768,
					acM = 17 + ((acF & acG) + (acF | acG) + acF) % 32768;
				for (aC = 0; aC < 256; aC++) acK = 1 + acK * acL % acM, h[aC] = acK % 256
			}(h, acF, acG), acI(h, acF, 2), acI(h, acG, 7),
			function(h) {
				var aC, g8, eP = 0;
				for (aC = 0; aC < 3e4; aC++) g8 = h[eP], h[eP] = (g8 + aC + h[(eP + aC) % 256]) % 256, eP = (g8 + aC + eP + (g8 & eP)) % 256
			}(h),
			function(h) {
				var aC, aCv = 1,
					wC = 1;
				for (aC = 0; aC < 256; aC += 2) aCv = (1 + aCv) * (h[aC] + 1) % 1073741824, wC = (1 + wC) * (h[aC + 1] + 1) % 1073741824;
				return [aCv, wC]
			}(h)
	}, this.aa3 = function(acN, acO, acP, result) {
		for (var h9 = 1 << acN, aC = 0; aC < h9; aC++)
			if (this.acQ(aC, acO, acP) === result) return aC;
		return 0
	}, this.acQ = function(acR, acO, acP) {
		for (var a1W = acO + acR, a1f = acP + acR, g8 = a1W + a1f & 2147483647, fz = 1; fz <= 16; fz++) g8 = (g8 = (g8 ^ g8 >> fz) >>> 1 + (3 & a1W)) * (7 + (1023 & (a1W | a1f))) & 1073741823, a1f >>= 1 + (1 & (a1W >>= 1 + (1 & (g8 += 65535 &
			a1f))));
		return g8 &= 1073741823
	}
}

function ct() {
	var acS, acT, iy, acU;
	this.dr = function() {
		var aC, fn, fp, aW8, acV, j, k, p2, ii, a0l, g8, hE, fw, fz, acY;
		if (function() {
				if (iy = !0, acU = "rgb(" + bV.a0j[0] + "," + bV.a0j[1] + "," + bV.a0j[2] + ")", bV.aQz(bV.fM)) return 1;
				return iy = !1, 0
			}()) acT = null;
		else {
			for (acS = bO.g7(96, 4), acV = 1 === bV.fM ? (aW8 = 0, 160) : (aW8 = 128, 32), acU = "rgb(" + aW8 + "," + aW8 + "," + aW8 + ")", acT = new Array(4), aC = 3; 0 <= aC; aC--) {
				if (acT[aC] = document.createElement("canvas"), j = aC % 2 == 0 ? bV.fr : acS, k = aC % 2 == 0 ? acS : bV.fs + 2 * acS, acT[aC].width = j, acT[aC].height = k, a0l = (ii = (p2 = acT[aC].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, j, k)).data, aC % 2 == 0)
					for (fp = acS - 1; 0 <= fp; fp--)
						for (g8 = acV + Math.floor((fp + 1) * (aW8 - acV) / (acS + 1)), fn = j - 1; 0 <= fn; fn--) a0l[hE = 4 * ((0 === aC ? acS - fp - 1 : fp) * j + fn)] = g8, a0l[hE + 1] = g8, a0l[hE + 2] = g8, a0l[hE + 3] = 255;
				else {
					for (fn = acS - 1; 0 <= fn; fn--)
						for (g8 = acV + Math.floor((fn + 1) * (aW8 - acV) / (acS + 1)), fp = k - 1 - acS; acS <= fp; fp--) a0l[hE = 4 * (fp * j + (3 === aC ? acS - fn - 1 : fn))] = g8, a0l[hE + 1] = g8, a0l[hE + 2] = g8, a0l[hE + 3] = 255;
					for (fz = 1; 0 <= fz; fz--)
						for (fn = acS - 1; 0 <= fn; fn--)
							for (fp = acS - 1; 0 <= fp; fp--) fw = (Math.pow(fn * fn + fp * fp, .5) + 1) / (acS + 1), g8 = acV + Math.floor((1 < fw ? 1 : fw) * (aW8 - acV)), a0l[hE = 4 * ((0 === fz ? acS - fp - 1 : fp + fz * (k - acS)) * j + (
								1 === aC ? fn : acS - fn - 1))] = g8, a0l[hE + 1] = g8, a0l[hE + 2] = g8, a0l[hE + 3] = 255
				}
				p2.putImageData(ii, 0, 0)
			}
			acY = acV, bV.a0e.fillStyle = "rgb(" + acY + "," + acY + "," + acY + ")", bV.a0e.fillRect(0, 0, bV.fr, 1), bV.a0e.fillRect(0, bV.fs - 1, bV.fr, 1), bV.a0e.fillRect(0, 0, 1, bV.fs), bV.a0e.fillRect(bV.fr - 1, 0, 1, bV.fs)
		}
	}, this.a2F = function() {
		var fz = iy ? 0 : -acS;
		aSi(fz, fz, bV.fr - 2 * fz, bV.fs - 2 * fz, bd.acZ, bd.aca, bd.acb, bd.acc) || (ym.fillStyle = acU, ym.fillRect(0, 0, i.j, i.k))
	}, this.yl = function() {
		iy || (aSh(0, -acS, bV.fr, acS, bd.acZ, bd.aca, bd.acb, bd.acc) && ym.drawImage(acT[0], bd.acd, bd.ace - acS), aSh(bV.fr, -acS, acS, bV.fs + 2 * acS, bd.acZ, bd.aca, bd.acb, bd.acc) && ym.drawImage(acT[1], bd.acd + bV.fr, bd.ace - acS),
			aSh(0, bV.fs, bV.fr, acS, bd.acZ, bd.aca, bd.acb, bd.acc) && ym.drawImage(acT[2], bd.acd, bd.ace + bV.fs), aSh(-acS, -acS, acS, bV.fs + 2 * acS, bd.acZ, bd.aca, bd.acb, bd.acc) && ym.drawImage(acT[3], bd.acd - acS, bd.ace - acS))
	}
}

function dF() {
	this.aN9 = new acf, this.a2I = new acg, this.z = new ach, this.jU = new aci, this.acY = new acj, this.mx = new ack, this.kq = new acl, this.lp = new acm, this.acn = new aco, this.acp = new acq, this.n8 = new acr, this.iH = new acs, this.mO =
		new act, this.lr = new acu, this.iK = new acv, this.n1 = new acw, this.st = new acx, this.dr = function() {
			this.mO.dr(), this.a2I.dr(), this.z.dr(), this.jU.dr(), this.acY.dr(), this.acp.dr(), this.n1.dr()
		}, this.yl = function() {
			this.acp.yl(), this.a2I.yl()
		}
}

function acl() {
	this.el = function(player) {
		return !!bQ.n8.n9(player) && !(bQ.z.l6[player] >= Math.max(3 * ap.performance.mG, aF.lG[aF.iQ[player]]) || !bD.h2.nA(player, aF.lE[aF.iQ[player]], 32, 0)) && (aX.aFm() ? function(player) {
			var ad0 = bQ.lr.aFp(),
				fg = ad0.length;
			if (0 === fg) return !1;
			ad0 = ad0[az.kJ(fg)], fg = bQ.z.mv[ad0];
			if (bQ.n1.n2(player, fg)) return !1;
			return !! function(player, n4) {
				var n4 = bP.jS(bQ.z.n7[n4]),
					hw = bP.fo(n4),
					n4 = bP.fq(n4),
					o5 = ah.ja[player],
					o6 = ah.jc[player],
					oI = ah.jb[player],
					player = ah.jd[player],
					oI = Math.max(hw - oI, o5 - hw),
					o5 = Math.max(n4 - player, o6 - n4);
				return oI < 100 && o5 < 100
			}(player, ad0) && !!bQ.iK.ss(player, fg, 1) && (bD.h2.nC(player), bQ.z.nD(player), !0)
		}(player) : !!(ap.jt.el(player) || ap.ji.el(player) || ap.jk.el(player)) && (function(player) {
			bR.gI[1] = 4, bD.h2.nC(player), bQ.z.nD(player)
		}(player), !0))
	}
}

function acw() {
	var ad3 = 0,
		ad4 = null;
	this.dr = function() {
		null === ad4 && (ad4 = new Uint16Array(2 * bQ.z.lG)), ad3 = 0
	}, this.ep = function(ad5, n1) {
		var ad6 = ad4;
		ad6[ad3++] = ad5, ad6[ad3++] = n1
	}, this.n2 = function(player, n0) {
		for (var ad6 = ad4, fg = ad3, aC = 0; aC < fg; aC += 2)
			if (ad6[aC] === n0 && bQ.lr.ad7(ad6[aC + 1]) && player === bQ.z.mw[bR.gI[2]] >> 3) return !0;
		return !1
	}, this.ad8 = function(ad9) {
		var mx = bQ.z.mt[ad9];
		if (!(mx < 64)) {
			for (var n0 = bQ.z.mv[ad9], ad6 = ad4, fg = ad3, aC = fg - 2; 0 <= aC; aC -= 2)
				if (ad6[aC] === n0) {
					{
						adE = void 0;
						var adE = ad6[aC + 1];
						bQ.lr.ad7(adE) && bQ.n1.adM(bR.gI[2])
					}
					ad6[aC] = ad6[fg - 2], ad6[aC + 1] = ad6[fg - 1], fg -= 2
				} ad3 = fg
		}
	}, this.adB = function(adC, adD) {
		for (var adE = bQ.z.mv[adC], n0 = -1, ad6 = ad4, fg = ad3, aC = 1; aC < fg; aC += 2)
			if (ad6[aC] === adE) {
				n0 = ad6[aC - 1];
				break
			} if (-1 === n0) return !1;
		if (!bQ.lr.ad7(n0)) return !1;
		var ad9 = bR.gI[2],
			mN = bQ.z.mu[ad9];
		if (adD === mN[mN.length - 1]) bQ.z.mu[adC] = bQ.mO.adF(bQ.z.mu[adC], bQ.mO.mW(mN));
		else {
			var adG = bQ.lr.adH(mN, adD);
			if (-1 === adG) return !1;
			var adI = bQ.z.n6[ad9];
			adG === adI ? (ad9 = bP.jS(bQ.z.n7[ad9]), bQ.z.mu[adC] = bQ.mO.adK(bQ.z.mu[adC], mN, adG, adD, bP.jA(mN[adG], adD) > bP.jA(mN[adG], ad9))) : bQ.z.mu[adC] = bQ.mO.adK(bQ.z.mu[adC], mN, adG, adD, adI < adG)
		}
		return !0
	}, this.adM = function(adN) {
		var mN, lx = bQ.z,
			mx = lx.mt[adN];
		return mx % 64 != 5 && (mN = lx.mu[adN], lx.adO[adN] = 65535 - lx.adO[adN], lx.n6[adN] = mN.length - lx.n6[adN] - 2, lx.mu[adN] = bQ.mO.mW(mN), lx.mt[adN] = mx - mx % 64 + 5, !0)
	}
}

function acr() {
	this.n9 = function(player) {
		return !!aE.data.passableWater && bQ.z.ms !== bQ.z.lG && bQ.z.l6[player] !== bQ.z.adP && 0 !== ah.hN[player].length
	}, this.so = function(aaq) {
		var mx = bR.gI[1];
		return !(4 <= mx || !bQ.lr.adQ(bP.fW(aaq))) && ad.fb(bP.fW(bP.jW(aaq, mx)))
	}
}

function acf() {
	this.aNA = function(player) {
		for (var aC9 = bQ.z.aC9, vj = player << 3, aC = vj + bQ.z.l6[player] - 1; vj <= aC; aC--) this.adR(aC9[aC])
	}, this.adR = function(adS) {
		var z = bQ.z,
			adT = z.ms - 1,
			adU = z.mw[adS],
			adV = z.adW[adS],
			adX = z.n7[adS];
		z.ms = adT, z.mw[adS] = z.mw[adT], z.n7[adS] = z.n7[adT], z.adO[adS] = z.adO[adT], z.aAu[adS] = z.aAu[adT], z.adW[adS] = z.adW[adT], z.mv[adS] = z.mv[adT], z.mt[adS] = z.mt[adT], z.adY[adS] = z.adY[adT], z.mu[adS] = z.mu[adT], z.n6[adS] =
			z.n6[adT], z.aC9[z.mw[adS]] = adS,
			function(aap) {
				var player = aap >> 3,
					z = bQ.z,
					fg = z.l6[player] - 1,
					adb = (player << 3) + fg;
				z.l6[player] = fg, adb !== aap && (z.aC9[aap] = z.aC9[adb], z.mw[z.aC9[aap]] = aap)
			}(adU), bQ.jU.jU[bP.jT(z.n7[adS])][z.adW[adS]] = adS, adT = bP.jT(adX), adU = adV, adT = bQ.jU.jU[adT], z = adT.pop(), adU !== adT.length && (adT[adU] = z, bQ.z.adW[z] = adU)
	}
}

function acg() {
	var add, ade = 8,
		adf = null;

	function adk(a0l, fS, eP) {
		fS *= 4;
		a0l[fS] = 255, a0l[1 + fS] = 255, a0l[2 + fS] = eP, a0l[3 + fS] = 255
	}

	function adm(il, acU) {
		var fn, fp, j4, fS, adn, ado, ie = ade,
			ii = bD.t4.getImageData(il, ie, ie),
			a0l = ii.data,
			lx = (ie >> 1) - .5,
			adq = bD.te.a6Y(acU, .5);
		for (bD.te.a6a(acU, adq, 300) || bD.te.a6c(acU, 100), fp = 0; fp < ie; fp++)
			for (fn = 0; fn < ie; fn++) ado = (ie - 1.5) * (ie - 1.5) / 4, a0l[fS = 4 * (fp * ie + fn)] = (adn = (j4 = (j4 = fn - lx) * j4 + (j4 = fp - lx) * j4) <= (ie - 4.5) * (ie - 4.5) / 4 ? adq : acU)[0], a0l[1 + fS] = adn[1], a0l[2 + fS] = adn[
				2], a0l[3 + fS] = ado < j4 ? 0 : 255;
		il.putImageData(ii, 0, 0)
	}
	this.dr = function() {
		var eP, ie, a70, il, ii, a0l;
		(add = add || new Array(aE.fd)).fill(null), eP = 255, ie = ade + 4, a70 = bD.t4.a0a(ie, ie), il = bD.t4.getContext(a70, !0), ii = bD.t4.getImageData(il, ie, ie), adk(a0l = ii.data, ie + 1, eP), adk(a0l, ie + 2, eP), adk(a0l, 2 * ie + 1,
				eP), adk(a0l, 2 * ie - 3, eP), adk(a0l, 2 * ie - 2, eP), adk(a0l, 3 * ie - 2, eP), adk(a0l, ie * (ie - 3) + 1, eP), adk(a0l, ie * (ie - 2) + 1, eP), adk(a0l, ie * (ie - 2) + 2, eP), adk(a0l, ie * (ie - 2) - 2, eP), adk(a0l, ie * (
				ie - 1) - 3, eP), adk(a0l, ie * (ie - 1) - 2, eP), il.putImageData(ii, 0, 0), adf = a70,
			function() {
				if (aE.ib)
					for (var a70 = new Array(bj.lP.length), fg = aE.fd, adi = add, aF7 = bj.aF7, aC = 0; aC < fg; aC++) {
						var a9b = aF7[aC];
						a70[a9b] || (a70[a9b] = function(a9b) {
							var a70 = bD.t4.a0a(ade, ade),
								il = bD.t4.getContext(a70, !0),
								h = bR.gF;
							return h.set(bj.aW9[a9b]), adm(il, h), a70
						}(a9b)), adi[aC] = a70[a9b]
					}
			}()
	}, this.yl = function() {
		var aC, player, adr, aGX, iQ, j3, adt, adv, adw, n7 = bQ.z.n7,
			mw = bQ.z.mw,
			aAu = bQ.z.aAu,
			adY = bQ.z.adY,
			adx = add,
			ady = aE.fQ,
			fg = bQ.z.ms,
			adz = i.j,
			ae0 = i.k,
			ae1 = bV.fr << 4,
			fV = iv,
			fK = fV / ade,
			o5 = jL / fV,
			o6 = jM / fV,
			j4 = (adz + jL) / fV - o5,
			j7 = (ae0 + jM) / fV - o6,
			il = ym;
		for (il.imageSmoothingEnabled = fV < 9, bD.t4.textAlign(il, 1), bD.t4.textBaseline(il, 1), aC = 0; aC < fg; aC++) player = mw[aC] >> 3, iQ = aAu[aC], adr = .9 + .1 * Math.log10(iQ), aGX = (j3 = n7[aC]) % ae1 / 16 - adr, j3 = ae0 * (Math
			.floor(j3 / ae1) / 16 - adr - o6) / j7, adt = -2 * (adw = fV * adr) * (1 + (adv = +(player === ady)) / 8), adv = adv * adw / 4, (adw = adz * (aGX - o5) / j4) < adt || j3 < adt || adz + adv < adw || ae0 + adv < j3 || (aGX = 2 *
			adr * fK, adt = adr * fV, null === (adv = adx[player]) && (adx[player] = adv = function(player) {
				var a70 = bD.t4.a0a(ade, ade);
				return adm(bD.t4.getContext(a70, !0), ad.aBk(player)), a70
			}(player)), player === ady && (il.setTransform(aGX, 0, 0, aGX, adw - 2 * aGX, j3 - 2 * aGX), il.drawImage(adf, 0, 0)), il.setTransform(aGX, 0, 0, aGX, adw, j3), il.drawImage(adv, 0, 0), (adr = Math.floor(function(iQ) {
				if (iQ < 1e3) return .42;
				if (iQ < 1e4) return .34;
				if (iQ < 1e6) return .26;
				if (iQ < 1e8) return .19;
				return .15
			}(iQ) * adt)) < 6) || (il.setTransform(1, 0, 0, 1, 0, 0), il.fillStyle = adY[aC] ? bE.qv : bE.qL, il.font = bD.t4.t7(1, adr), il.fillText(bD.pY.a3S(iQ), adw + adt, j3 + adt + .1 * adr));
		il.imageSmoothingEnabled = !1, il.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function acq() {
	var ae4;
	this.dr = function() {
		if (!ae4) {
			ae4 = new Array(bj.ae6.length);
			for (var aC = 0; aC < ae4.length; aC++) ae4[aC] = bS.z.ae7(20, bj.ae6[aC])
		}
	}, this.yl = function() {
		var oP = iv;
		if (!(5 <= oP)) {
			var adz = i.j,
				ae0 = i.k,
				o5 = jL / oP,
				o6 = jM / oP,
				oI = (adz + jL) / oP,
				oJ = (ae0 + jM) / oP,
				hF = -20 * oP,
				ae8 = .5 * hF,
				ae1 = bV.fr << 4,
				fg = bQ.z.ms,
				n7 = bQ.z.n7,
				mw = bQ.z.mw,
				aF7 = bj.aF7,
				a70 = ae4,
				il = ym;
			3 < oP && (il.globalAlpha = .5 * (5 - oP));
			for (var aC = 0; aC < fg; aC++) {
				var j3 = n7[aC],
					fn = adz * (j3 % ae1 / 16 - o5) / (oI - o5) + ae8,
					j3 = ae0 * (Math.floor(j3 / ae1) / 16 - o6) / (oJ - o6) + ae8;
				adz < fn || ae0 < j3 || fn < hF || j3 < hF || (il.setTransform(oP, 0, 0, oP, fn, j3), fn = a70[aF7[mw[aC] >> 3]], il.drawImage(fn, 0, 0))
			}
			il.globalAlpha = 1, il.setTransform(oP, 0, 0, oP, 0, 0)
		}
	}
}

function acu() {
	this.aeB = function(player, id) {
		for (var aeC = ah.hN[player], fg = aeC.length, aC = 0; aC < fg; aC++)
			if (bP.iw(aeC[aC], id)) return !0;
		return !1
	}, this.aeD = function(player, fS) {
		for (var jC, aeE, fK, aeC = ah.hN[player], fg = aeC.length, j = bV.fr, aeG = bP.fo(fS), aeH = bP.fq(fS), fm = -1, min = bV.fr * bV.fr + bV.fs * bV.fs, id = ad.fO(bP.fW(fS)), aC = 0; aC < fg; aC++)(aeE = (aeE = aeG - (jC = (fK = aeC[
			aC]) >> 2) % j) * aeE + (aeE = aeH - ~~((.5 + jC) / j)) * aeE) < min && bP.iw(fK, id) && (min = aeE, fm = jC);
		return fm
	}, this.ls = function(jB, jC) {
		for (var id = ad.fO(bP.fW(jC)), ix = bP.ip, fK = bP.fW(jB), aeI = -1, aC = 0; aC < 4; aC++) {
			var fV = fK + ix[aC];
			ad.iy(fV) && ad.fO(fV) === id && (-1 === aeI || bP.jD(bP.fU(fV), jC) < bP.jD(aeI, jC)) && (aeI = bP.fU(fV))
		}
		return aeI
	}, this.mR = function(player, fS) {
		for (var ix = bP.ip, fK = bP.fW(fS), aC = 0; aC < 4; aC++) {
			var fV = fK + ix[aC];
			if (ad.hG(fV) && ad.a2D(player, fV)) return !0
		}
		return !1
	}, this.mS = function(player, fS) {
		for (var ix = bP.ip, fK = bP.fW(fS), aC = 0; aC < 4; aC++) {
			var fV = fK + ix[aC];
			if (ad.fX(fV)) return !0;
			if (ad.hG(fV)) {
				fV = ad.fY(fV);
				if (player !== fV && bw.fZ(player, fV)) return !0
			}
		}
		return !1
	}, this.my = function(fS) {
		for (var ix = bP.ip, fK = bP.fW(fS), aC = 0; aC < 4; aC++) {
			var fV = fK + ix[aC];
			if (ad.hG(fV)) {
				fV = ad.fY(fV);
				if (bD.h2.kP(fV)) return fV
			}
		}
		return -1
	}, this.adQ = function(fK) {
		if (ad.iy(fK))
			for (var ix = bP.ip, aC = 0; aC < 4; aC++)
				if (ad.fb(fK + ix[aC])) return !0;
		return !1
	}, this.o4 = function(player, id) {
		for (var vj = player << 3, vk = vj + bQ.z.l6[player], mv = bQ.z.mv, aC9 = bQ.z.aC9, aC = vj; aC < vk; aC++) {
			var aCA = aC9[aC];
			if (mv[aCA] === id) return aCA
		}
		return -1
	}, this.o9 = function(player) {
		return 0 === bQ.z.l6[player] ? -1 : bQ.z.aC9[player << 3]
	}, this.a9t = function(mH, mI) {
		var fg = bQ.z.ms;
		if (fg < 1) return -1;
		for (var n7 = bQ.z.n7, aeJ = 80, aVd = -1, aC = 0; aC < fg; aC++) {
			var fw = bP.j0(mH, mI, n7[aC]);
			fw < aeJ && (aeJ = fw, aVd = aC)
		}
		return function(aC, mH, mI) {
			if (aC < 0) return;
			var aeQ = bQ.z.n7[aC],
				aeR = bP.j6(aeQ),
				aeQ = bP.j9(aeQ),
				aC = 20 * (.9 + .1 * Math.log10(bQ.z.aAu[aC]));
			return aC = Math.max(aC, bP.jN(bD.t4.vo(.02, 1.7))), bO.aSp(bP.j5(mH), bP.j8(mI), aeR, aeQ, aC)
		}(aVd, mH, mI) ? aVd : -1
	}, this.ad7 = function(o2) {
		for (var fg = bQ.z.ms, mv = bQ.z.mv, aC = 0; aC < fg; aC++)
			if (mv[aC] === o2) return bR.gI[2] = aC, !0;
		return !1
	}, this.aN6 = function(player) {
		for (var vj = player << 3, vk = vj + bQ.z.l6[player], aC9 = bQ.z.aC9, aAu = bQ.z.aAu, iQ = 0, aC = vj; aC < vk; aC++) iQ += aAu[aC9[aC]];
		return iQ
	}, this.aeL = function(player, adN) {
		adN = bQ.z.mu[adN];
		return this.mR(player, adN[adN.length - 1])
	}, this.aeM = function(jB, jC, fw, aeN) {
		var jF = bP.fo(jB),
			jB = bP.fq(jB),
			jH = bP.fo(jC),
			jC = bP.fq(jC),
			jH = (fw = Math.max(fw, 1), jH - jF),
			jC = jC - jB,
			j4 = bO.g7(Math.abs(jH) * aeN, fw),
			aeN = bO.g7(Math.abs(jC) * aeN, fw);
		return bP.g3(jF + Math.sign(jH) * j4, jB + Math.sign(jC) * aeN)
	}, this.adH = function(mN, fS) {
		for (var fg = mN.length - 1, fn = bP.fo(fS), fp = bP.fq(fS), aC = 0; aC < fg; aC++) {
			var jB = mN[aC],
				jC = mN[aC + 1],
				o5 = bP.fo(jB),
				jB = bP.fq(jB),
				oI = bP.fo(jC),
				jC = bP.fq(jC);
			if (!(fn !== o5 && fn !== oI && Math.sign(fn - o5) === Math.sign(fn - oI) || fp !== jB && fp !== jC && Math.sign(fp - jB) === Math.sign(fp - jC))) {
				if (o5 === oI || jB === jC) return aC;
				if (Math.abs(fn - o5) === Math.abs(fp - jB) && Math.abs(fn - oI) === Math.abs(fp - jC)) return aC
			}
		}
		return -1
	}, this.aFp = function() {
		for (var aeT = md[0], mw = bQ.z.mw, ms = bQ.z.ms, h = [], aC = 0; aC < ms; aC++) bD.h2.lg(aeT, mw[aC] >> 3) && h.push(aC);
		return h
	}, this.mP = function(player, mN) {
		for (var vj = player << 3, vk = vj + bQ.z.l6[player], aC9 = bQ.z.aC9, mu = bQ.z.mu, i9 = mN[0], lf = mN[mN.length - 1], aC = vj; aC < vk; aC++) {
			var hE = mu[aC9[aC]];
			if (hE[0] === i9 && hE[hE.length - 1] === lf) return !0
		}
		return !1
	}
}

function acv() {
	function aeW(player, adN) {
		adN = bP.jS(bQ.z.n7[adN]), adN = ad.fO(bP.fW(adN));
		return !!bQ.lr.aeB(player, adN)
	}

	function aeU(player) {
		return bQ.n8.n9(player) && !bQ.mO.mU()
	}
	this.iL = function(player, fS) {
		return !!aeU(player) && -1 !== (fS = function(player, fS) {
			for (var fg = bQ.z.ms, n7 = bQ.z.n7, mw = bQ.z.mw, aeJ = bP.ir(), aVd = -1, aC = 0; aC < fg; aC++) {
				var fw = bP.jA(fS, bP.jS(n7[aC]));
				fw < aeJ && bD.h2.lg(player, mw[aC] >> 3) && (aeJ = fw, aVd = aC)
			}
			return aVd
		}(player, fS)) && !!aeW(player, fS) && (bR.gI[3] = bQ.z.mv[fS], !0)
	}, this.rz = function(player, o2) {
		return !!aeU(player) && !!bQ.lr.ad7(o2) && !!aeW(player, bR.gI[2])
	}, this.ss = function(player, o2, aeX) {
		return !! function(player, o2, aeX) {
			if (aeU(player) && bQ.lr.ad7(o2)) {
				o2 = bR.gI[2];
				if (bD.h2.lg(player, bQ.z.mw[o2] >> 3)) {
					if (function(player, adN) {
							return bQ.lr.aeL(player, adN) && (bR.h[0] = bQ.mO.mW(bQ.z.mu[adN]), bR.gI[1] = 6, !0)
						}(player, o2)) return 1;
					var ad2 = bP.jS(bQ.z.n7[o2]),
						aeb = bQ.lr.aeD(player, ad2);
					if (-1 !== aeb) {
						aeb = bP.jA(aeb, ad2);
						if (!(aeX && 120 < aeb)) {
							aeX = function(adN, aec, ad2) {
								var mN = bQ.z.mu[adN],
									adN = bQ.z.n6[adN],
									aee = bP.jA(ad2, mN[adN + 1]);
								if (aec <= aee) return bQ.lr.aeM(ad2, mN[adN + 1], aee, aec);
								for (var fw = aec - aee, fg = mN.length - 1, aC = adN + 1; aC < fg; aC++) {
									var aef = bP.jA(mN[aC], mN[aC + 1]);
									if (fw <= aef) return bQ.lr.aeM(mN[aC], mN[aC + 1], aef, fw);
									fw -= aef
								}
								return mN[fg]
							}(o2, aeb, ad2);
							if (bQ.lp.sp(player, aeX, 1)) return bR.gI[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, o2, aeX) && (player = bR.gI[2], bQ.z.mt[player] = 64 + bQ.z.mt[player] % 64, bQ.n1.ep(o2, bQ.z.nB), !0)
	}
}

function ack() {
	function aek(player, iQ, aei, ad2) {
		var kB;
		if (ad.fX(aei)) kB = aE.fd;
		else {
			if ((kB = ad.fY(aei)) === player) return void bg.h6(player, iQ - bD.h2.h5(player, iQ), 12);
			if (!bw.fZ(player, kB)) return void bB.l4.sE(player, kB, iQ)
		}
		ae.kN(player, kB) || ae.kg(player) ? (ah.h8[player].push(ad2 << 2), ae.ep(player, iQ, kB), aG.k9(player, !0)) : bg.h6(player, iQ, 12)
	}
	this.el = function() {
		for (var mt = bQ.z.mt, n7 = bQ.z.n7, adO = bQ.z.adO, aC = bQ.z.ms - 1; 0 <= aC; aC--) 65535 === adO[aC] && function(aC, ad2, iY) {
			if (6 === iY) {
				if (bQ.n1.adB(aC, ad2)) return bQ.z.n6[aC]++, bQ.z.adO[aC] = 0, 0
			} else {
				var player = bQ.z.mw[aC] >> 3,
					aC = bQ.z.aAu[aC];
				bg.aej(player), iY < 4 ? aek(player, aC, ad2 + bP.io[iY] << 2, ad2) : 4 === iY ? function(player, iQ, ad2) {
					var aC, fk, ix = bP.ip,
						fV = bP.fW(ad2);
					for (aC = 0; aC < 4; aC++)
						if (fk = fV + ix[aC], ad.fX(fk)) return aek(player, iQ, fk, ad2);
					for (aC = 0; aC < 4; aC++)
						if (fk = fV + ix[aC], ad.hG(fk) && !ad.a2D(player, fk)) return aek(player, iQ, fk, ad2);
					for (aC = 0; aC < 4; aC++)
						if (fk = fV + ix[aC], ad.hG(fk)) return aek(player, iQ, fk, ad2)
				}(player, aC, ad2) : 5 === iY && function(player, iQ, ad2) {
					var aC, fk, ix = bP.ip,
						fV = bP.fW(ad2);
					for (aC = 0; aC < 4; aC++)
						if (fk = fV + ix[aC], ad.hG(fk) && ad.a2D(player, fk)) return aek(player, iQ, fk, ad2);
					for (aC = 0; aC < 4; aC++)
						if (fk = fV + ix[aC], ad.hG(fk)) return aek(player, iQ, fk, ad2);
					for (aC = 0; aC < 4; aC++)
						if (fk = fV + ix[aC], ad.fX(fk)) return aek(player, iQ, fk, ad2)
				}(player, aC, ad2)
			}
			return 1
		}(aC, bP.jS(n7[aC]), mt[aC] % 64) && (bQ.n1.ad8(aC), bQ.aN9.adR(aC))
	}, this.aeh = function(player, fS, iY, o2, iQ) {
		if (!(5 <= iY)) {
			var ady = aE.fQ;
			if (bD.h2.ht(ady) && bw.fZ(player, ady) && player !== ady && 0 !== ah.hN[ady].length && bD.h2.a7g(player, 5)) {
				for (var aei, fu = !1, aC = 0; aC < 4; aC++)
					if (aei = fS + bP.io[aC] << 2, ad.fb(aei) && !ad.fX(aei) && ad.fY(aei) === ady) {
						fu = !0;
						break
					} fu && (aO.aB3(719, 0), iY = iQ < 25e3 ? L(531) + " (" + bD.pY.a3S(iQ) + ") ⛵" : L(532) + " (" + bD.pY.a3S(iQ) + ") 🚢", aO.a2d(180, iY, 719, player, bE.qu, bE.qI, -1, !0, void 0, {
					g0: 1,
					o2: o2
				}))
			}
		}
	}
}

function ach() {
	this.lG = 512, this.adP = 8, this.ms = 0, this.nB = 0, this.mw = new Uint16Array(this.lG), this.n7 = new Uint32Array(this.lG), this.adO = new Uint16Array(this.lG), this.aAu = new Uint32Array(this.lG), this.adW = new Uint16Array(this.lG), this
		.mv = new Uint16Array(this.lG), this.mt = new Uint8Array(this.lG), this.adY = new Uint8Array(this.lG), this.mu = new Array(this.lG), this.n6 = new Uint16Array(this.lG), this.l6 = new Uint8Array(aE.fd), this.aC9 = new Uint16Array(this.adP * aE
			.fd), this.dr = function() {
			this.ms = 0, this.nB = 0, this.l6.fill(0), this.mu.fill(null)
		}, this.nD = function(player) {
			var iQ = bR.gD[0],
				mx = bR.gI[1],
				mN = bR.h[0],
				aen = this.nB,
				fg = this.ms,
				aeo = bP.jR(mN[0]),
				aep = this.l6[player],
				aeq = (player << 3) + aep;
			this.mw[fg] = aeq, this.n7[fg] = aeo, this.adO[fg] = 0, iQ < 60 && (bD.h2.h3(player, 60 - iQ), iQ = 60), this.aAu[fg] = iQ, this.adW[fg] = bQ.jU.nD(fg, bP.jT(aeo)), this.mv[fg] = aen, this.mt[fg] = mx, this.adY[fg] = 0, this.mu[fg] = mN,
				this.n6[fg] = 0, this.nB = (aen + 1) % 65536, this.l6[player] = aep + 1, this.aC9[aeq] = fg, this.ms++, bQ.mx.aeh(player, mN[mN.length - 1], mx, aen, iQ)
		}, this.el = function() {
			bQ.mx.el();
			for (var hE = aE.fQ, eh = bQ.lr.aN6(hE), un = (! function(un) {
					for (var aev, n7 = un.n7, aAu = un.aAu, adY = un.adY, adO = un.adO, adW = un.adW, mu = un.mu, n6 = un.n6, un = un.ms, ae1 = bV.fr << 4, aC = un - 1; 0 <= aC; aC--) {
						var aew = n7[aC],
							mN = mu[aC],
							aex = n6[aC],
							aeo = bP.jR(mN[aex]),
							aey = bP.jR(mN[aex + 1]),
							aez = aeo % ae1,
							aeo = ~~((aeo + .5) / ae1),
							af1 = aey % ae1,
							af2 = ~~((aey + .5) / ae1),
							af3 = af1 - aez,
							af4 = af2 - aeo,
							fj = Math.max(~~Math.sqrt(af3 * af3 + af4 * af4 + .5), 1),
							aO3 = aAu[aC],
							aO3 = (aO3 = adY[aC] ? 4e4 : 25e4 + Math.min(20 * aO3, 3e5) + Math.min(aO3 >> 3, 5e4), adO[aC] + Math.max(~~((aO3 + .5) / fj), 1));
						65535 <= aO3 ? aex + 2 < mN.length ? (n6[aC] = aex + 1, n7[aC] = aev = function(aC, af5, aez, af0, aex, fj, mN, ae1) {
							af5 = Math.min(af5 - 65535, 65535);
							var mN = bP.jR(mN[aex + 2]),
								aex = mN % ae1 - aez,
								mN = ~~((mN + .5) / ae1) - af0,
								af8 = Math.max(~~Math.sqrt(aex * aex + mN * mN + .5), 1);
							return af5 = Math.min(Math.floor((fj * af5 + .5) / af8), 65534), bQ.z.adO[aC] = af5, aez + bO.g7(af5 * aex, 65535) + ae1 * (af0 + bO.g7(af5 * mN, 65535))
						}(aC, aO3, af1, af2, aex, fj, mN, ae1)) : (n7[aC] = aev = aey, adO[aC] = 65535) : (adO[aC] = aO3, n7[aC] = aev = aez + bO.g7(aO3 * af3, 65535) + ae1 * (aeo + bO.g7(aO3 * af4, 65535))), adW[aC] = bQ.jU.af7(adW[aC],
							aew, aev)
					}
				}(this), ! function(un) {
					if (bi.kz() % 2 == 1) {
						var aC, iZ, lx, g0, eq, af9, a36, afA, i9, o5, o6, aeo, afB, aDb, afD, lf, fg = un.ms,
							n7 = un.n7,
							mw = un.mw,
							aAu = un.aAu,
							adY = un.adY,
							jU = bQ.jU.jU,
							afF = jU.length,
							afG = bQ.jU.afG,
							ae1 = bV.fr << 4,
							afH = aE.ib,
							aae = bj.fe,
							hF = (fg - 1) * (bO.g7(bi.kz(), 2) % 2);
						for (aC = 0; aC < fg; aC++)
							for (iZ = Math.abs(aC - hF), aeo = n7[iZ], lx = bP.jT(aeo), i9 = mw[iZ] >> 3, o5 = aeo % ae1, o6 = ~~((aeo + .5) / ae1), afD = aAu[iZ], g0 = 0; g0 < 9; g0++)
								if (!((af9 = lx + afG[g0]) < 0 || afF <= af9))
									for (afA = jU[af9], a36 = afA.length, eq = 0; eq < a36; eq++) afB = afA[eq], lf = mw[afB] >> 3, i9 == lf || afH && aae[i9] === aae[lf] && aae[i9] || (lf = n7[afB], (aDb = o5 - lf % ae1) * aDb + (aDb = o6 -
										~~((lf + .5) / ae1)) * aDb < 14400 && (lf = aAu[afB], aDb = lf <= afD ? Math.max(1, bO.g7(lf + bO.g7(afD - lf, 10), 10)) : Math.max(1, bO.g7(afD, 10)), aAu[afB] = Math.max(lf - aDb, 0), adY[
										afB] = 4))
					}
				}(this), ! function(un) {
					if (bi.kz() % 5 == 3)
						for (var aAu = un.aAu, fg = un.ms, aC = 0; aC < fg; aC++) {
							var iQ = aAu[aC];
							aAu[aC] = Math.max(iQ - Math.max(1, iQ >> 7), 0)
						}
				}(this), this), aAu = un.aAu, adY = un.adY, aC = un.ms - 1; 0 <= aC; aC--) adY[aC] = adY[aC] >> 1, 0 === aAu[aC] && (bQ.n1.ad8(aC), bQ.aN9.adR(aC));
			bg.h6(hE, eh - bQ.lr.aN6(hE), 15)
		}
}

function aci() {
	this.afI = 32, this.fn = 0, this.fp = 0, this.jV = 0, this.afJ = 0, this.afK = 4, this.jU = null, this.afG = new Int16Array(9), this.dr = function() {
		this.jV = 1 + bO.g7(bV.fr - 1, this.afI), this.afJ = 1 + bO.g7(bV.fs - 1, this.afI), this.jU = new Array(this.jV * this.afJ), bD.te.a6X(this.jU);
		var fn, fp, afG = this.afG,
			j = this.jV;
		for (fn = -1; fn <= 1; fn++)
			for (fp = -1; fp <= 1; fp++) afG[3 * (1 + fp) + 1 + fn] = fp * j + fn
	}, this.nD = function(afM, aC) {
		return this.jU[aC].push(afM), this.jU[aC].length - 1
	}, this.af7 = function(afN, aeo, aey) {
		var afO, afP, aeo = bP.jT(aeo),
			aey = bP.jT(aey);
		return aeo === aey ? afN : (afO = this.jU[aeo].pop(), this.jU[aeo].length === afN ? this.nD(afO, aey) : (afP = this.jU[aeo][afN], this.jU[aeo][afN] = afO, bQ.z.adW[afO] = afN, this.nD(afP, aey)))
	}
}

function acm() {
	this.lq = function(player, afQ) {
		return -1 !== afQ && !!bQ.lr.mS(player, afQ) && this.sp(player, afQ, 0)
	}, this.sp = function(player, afQ, afR) {
		player = function(player, afQ, afR) {
			var aeb = bQ.lr.aeD(player, afQ);
			if (-1 === aeb) return -1;
			aeb = bQ.lr.ls(aeb, afQ);
			if (-1 === aeb) return -1;
			var mL = bQ.mO.mT(aeb, afQ);
			if (0 <= mL) return mL;
			if (bQ.mO.mU()) return -1;
			if (0 <= (mL = bQ.mO.mT(afQ, aeb))) return bQ.mO.mV(bQ.mO.mW(bQ.mO.get(mL)));
			if (aeb === afQ) return bQ.mO.mV(new Uint32Array([aeb, afQ]));
			if (0 <= (mL = bQ.acn.sp(aeb, afQ))) return mL;
			return afR ? function(afV, player) {
				var gN = bR.gN,
					buffer = (gN.fill(0), [afV]),
					iq = (gN[afV] = 1, bP.iq),
					afW = -1,
					fg = buffer.length;
				for (; - 1 === afW && fg;) {
					for (var h = [], aC = 0; aC < fg; aC++)
						for (var fS = buffer[aC], a8S = gN[fS], fj = 0; fj < 8; fj++) {
							var a0M, a4w, fm = fS + iq[fj],
								fK = 4 * fm;
							ad.iy(fK) ? (a0M = gN[fm], a4w = a8S + 5 + ((1 & fj) << 1), 0 === a0M ? (h.push(fm), gN[fm] = a4w) : gN[fm] = Math.min(a4w, a0M)) : -1 === afW && fj % 2 == 0 && ad.a2A(player, fK) && (afW = fS)
						}
					fg = (buffer = h).length
				}
				return -1 !== afW ? function(jB, afY) {
					var iq = bP.iq,
						afZ = -1,
						iY = 0,
						na = [];
					for (; afY !== jB;)(iY = function(fS, iY) {
						var gN = bR.gN,
							iq = bP.iq,
							a8S = gN[fS];
						if (a8S - gN[fS + iq[iY]] != 5 + ((1 & iY) << 1))
							for (var fz = 0; fz < 8; fz++) {
								var fj = fz + iY + 6 & 7;
								if (a8S - gN[fS + iq[fj]] == 5 + ((1 & fj) << 1)) return fj
							}
						return iY
					}(afY, iY)) !== afZ && (na.push(afY), afZ = iY), afY += iq[iY];
					na.push(jB);
					var mL = bQ.mO.mT(na[0], jB);
					if (0 <= mL) return mL;
					return bQ.mO.mV(new Uint32Array(na))
				}(afV, afW) : -1
			}(afQ, player) : -1
		}(player, afQ, afR);
		return -1 !== player && (bR.h[0] = bQ.mO.get(player), !0)
	}
}

function aco() {
	function afb(hw, jG, jI) {
		for (var kI = Math.min(jG, jI), oN = Math.max(jG, jI), fp = kI + 1; fp < oN; fp++)
			if (!ad.iy(bP.jO(hw, fp))) return;
		return 1
	}

	function afc(hy, jF, jH) {
		for (var kI = Math.min(jF, jH), oN = Math.max(jF, jH), fn = kI + 1; fn < oN; fn++)
			if (!ad.iy(bP.jO(fn, hy))) return;
		return 1
	}

	function afd(jF, jG, jH, jI, afT, afQ) {
		for (var fg = Math.min(Math.abs(jH - jF), Math.abs(jI - jG)), j4 = Math.sign(jH - jF), j7 = Math.sign(jI - jG), aC = 0; aC < fg; aC++)
			if (!ad.iy(bP.jO(jF += j4, jG += j7))) return null;
		return jF === jH ? afb(jF, jG, jI) ? new Uint32Array([afT, bP.g3(jF, jG), afQ]) : null : afc(jG, jF, jH) ? new Uint32Array([afT, bP.g3(jF, jG), afQ]) : null
	}
	this.sp = function(afT, afQ) {
		afT = function(afT, afQ) {
			var jF = bP.fo(afT),
				jG = bP.fq(afT),
				jH = bP.fo(afQ),
				jI = bP.fq(afQ);
			if (jF === jH) {
				if (afb(jF, jG, jI)) return new Uint32Array([afT, afQ])
			} else {
				if (jG !== jI) return afd(jF, jG, jH, jI, afT, afQ) || afd(jH, jI, jF, jG, afT, afQ);
				if (afc(jG, jF, jH)) return new Uint32Array([afT, afQ])
			}
			return null
		}(afT, afQ);
		return null === afT ? -1 : bQ.mO.mV(afT)
	}
}

function act() {
	var afe = [];
	this.dr = function() {
		afe = []
	}, this.mU = function() {
		return 65536 === afe.length
	}, this.mT = function(afT, afQ) {
		for (var mO = afe, fg = mO.length, aC = 0; aC < fg; aC++) {
			var hE = mO[aC];
			if (hE[0] === afT && hE[hE.length - 1] === afQ) return aC
		}
		return -1
	}, this.mW = function(mN) {
		var aff = new Uint32Array(mN.length);
		return aff.set(mN), aff.reverse()
	}, this.adF = function(i9, lf) {
		var h9 = i9.length - 1,
			afg = new Uint32Array(h9 + lf.length);
		return afg.set(i9, 0), afg.set(lf, h9), afg
	}, this.adK = function(i9, lf, zq, fS, afh) {
		afh && (zq = (lf = this.mW(lf)).length - zq - 2);
		afh = lf.subarray(zq + 1 + (fS === lf[zq + 1])), fS = new Uint32Array(i9.length + afh.length);
		return fS.set(i9, 0), fS.set(afh, i9.length), fS
	}, this.mV = function(mN) {
		return afe.push(mN), afe.length - 1
	}, this.get = function(aC) {
		return afe[aC]
	}, this.mQ = function() {
		return afe
	}, this.afj = function(afT, afQ) {
		return null
	}
}

function acx() {
	this.el = function(player, o2) {
		player = bQ.lr.o4(player, o2);
		return !(player < 0 || !bQ.n1.adM(player) || (bQ.n1.ad8(player), 0))
	}
}

function acj() {
	var a2l = 32,
		a2k = new Array(2);

	function a0a(eq) {
		var fn, fp, fS, j7, j4, ie = a2l,
			a70 = bD.t4.a0a(ie, ie),
			il = bD.t4.getContext(a70, !0),
			ii = bD.t4.getImageData(il, ie, ie),
			a0l = ii.data,
			lx = (ie >> 1) - .5,
			ly = Math.sqrt(lx * lx);
		for (a0l.fill(255), fp = 0; fp < ie; fp++)
			for (fn = 0; fn < ie; fn++) j4 = fn - lx, j7 = fp - lx, fS = 4 * (fp * ie + fn), j4 = 714 * (ly - Math.sqrt(j4 * j4 + j7 * j7)) / ly, a0l[2 + fS] = eq, a0l[3 + fS] = 255 < j4 ? 0 : j4;
		return il.putImageData(ii, 0, 0), a70
	}
	this.afk = -1, this.dr = function() {
		this.afk = -1, a2k[0] || (a2k[0] = a0a(255), a2k[1] = a0a(0))
	}, this.afl = function(il, fK, fn, fp, eO, aC) {
		bD.h2.ht(aE.fQ) && (il.setTransform(fK *= 4 / 3 * .625, 0, 0, fK, fn - (eO *= 4 / 3), fp - eO), il.drawImage(a2k[+(bQ.z.mv[aC] === this.afk)], 0, 0))
	}
}

function acs() {
	function aav(fn, fg, fp, afm, aDh, g6, player) {
		if (!(fp < 1 || aDh < fp))
			for (var aC = 0; aC <= fg; aC++) {
				var fK = bP.jO(fn, fp);
				if (bQ.lr.adQ(fK) && !bD.te.has(afm, ad.fO(fK)) && ad.a22(fK, player)) return fK >> 2;
				fn += g6
			}
		return -1
	}

	function aaz(fp, fg, fn, afm, aat, g6, player) {
		if (!(fn < 1 || aat < fn)) {
			fg = Math.max(fg, 0);
			for (var aC = 0; aC <= fg; aC++) {
				var fK = bP.jO(fn, fp);
				if (bQ.lr.adQ(fK) && !bD.te.has(afm, ad.fO(fK)) && ad.a22(fK, player)) return fK >> 2;
				fp += g6
			}
		}
		return -1
	}

	function ab3(jB, jC, aaq) {
		return -1 !== jC && (-1 === jB || bP.jD(jC, aaq) < bP.jD(jB, aaq)) ? jC : jB
	}
	this.iI = function(player, aaq) {
		if (bQ.n8.n9(player))
			for (var aar = bP.ir(), afm = [];;) {
				var afW = function(aaq, aar, afm, player) {
					for (var hw = bP.fo(aaq), hy = bP.fq(aaq), aat = bV.fr - 2, aDh = bV.fs - 2, aau = -1, fj = 0; fj < aar; fj++) {
						var aDg = Math.max(hw - fj, 1),
							aRJ = Math.max(hy - fj, 1),
							a1y = Math.min(hw + fj, aat),
							a1x = Math.min(hy + fj, aDh),
							jB = aav(hw, a1y - hw, hy - fj, afm, aDh, 1, player),
							jC = aav(hw - 1, hw - aDg - 1, hy - fj, afm, aDh, -1, player),
							a1y = aav(hw, a1y - hw, hy + fj, afm, aDh, 1, player),
							aDg = aav(hw - 1, hw - aDg - 1, hy + fj, afm, aDh, -1, player),
							aay = aaz(hy, a1x - hy - 1, hw - fj, afm, aat, 1, player),
							ab0 = aaz(hy - 1, hy - aRJ - 2, hw - fj, afm, aat, -1, player),
							a1x = aaz(hy, a1x - hy - 1, hw + fj, afm, aat, 1, player),
							aRJ = aaz(hy - 1, hy - aRJ - 2, hw + fj, afm, aat, -1, player);
						if (aau = ab3(aau, jB, aaq), aau = ab3(aau, jC, aaq), aau = ab3(aau, a1y, aaq), aau = ab3(aau, aDg, aaq), aau = ab3(aau, aay, aaq), aau = ab3(aau, ab0, aaq), aau = ab3(aau, a1x, aaq), 0 <= (aau = ab3(aau, aRJ, aaq)) &&
							fj * fj >= bP.jD(aau, aaq)) return aau
					}
					return -1
				}(aaq, aar, afm, player);
				if (-1 === afW) break;
				var id = ad.fO(bP.fW(afW));
				if (bQ.lr.aeB(player, id)) return !! function(player, afW, aaq) {
					for (var iY = bP.jY(afW, aaq), aC = 0; aC < 4; aC++) {
						var fS = bP.jW(afW, iY);
						if (ad.aMf(bP.fW(fS), player)) return bR.gI[6] = iY, 1;
						iY = (iY + 1) % 4
					}
					return
				}(player, afW, aaq) && (bR.gI[7] = afW, !0);
				afm.push(id)
			}
		return !1
	}
}

function du() {
	this.aYC = [L(533), L(534), L(535), L(536), L(537), L(538), L(539), L(540), L(541), L(542), L(543), L(544), L(545), L(546), L(547), L(548)];
	var afp = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aGB = new Array(afp.length), this.dr = function() {
		var h = bm.buffer.data[155].value.split(";"),
			lx = h.length;
		if (function() {
				for (var fg = afp.length, aC = 0; aC < fg; aC++) ba.aGB[aC] = afp[aC]
			}(), !(lx > afp.length))
			for (var aC = 0; aC < lx; aC++) h[aC].length && (this.aGB[aC] = h[aC])
	}, this.aYE = function(eP, code) {
		for (var aGB = this.aGB, afr = afp, pU = (aGB[eP] = code, ""), fg = aGB.length, afs = [], aC = 0; aC < fg; aC++) afs.push(aGB[aC] === afr[aC] ? "" : aGB[aC]);
		fg--;
		for (aC = 0; aC < fg; aC++) pU += afs[aC] + ";";
		bm.rr.px(155, pU += afs[fg])
	}, this.aYB = function() {
		bm.rr.px(155, ""), this.dr()
	}, this.eq = function(code, eP) {
		return code === this.aGB[eP] || code === this.aGB[eP + 1]
	}
}

function di() {
	var aft = new Array(1),
		afu = new Array(1),
		afv = 20,
		ee = 0,
		afw = !1;

	function afy() {
		afv++, bt.play()
	}
	this.dr = function() {
		if (!window.document.documentMode) {
			for (var aC = 0; 0 <= aC; aC--) ! function(aC, src) {
				afu[aC] = 0, aft[aC] = document.createElement("audio"), aft[aC].src = src, aft[aC].setAttribute("preload", "auto"), aft[aC].setAttribute("controls", "none"), aft[aC].style.display = "none", aft[aC].onpause = function() {
					afu[aC] = 1
				}, aft[aC].oncanplaythrough = function() {
					afu[aC] = 0 === afu[aC] ? 1 : afu[aC]
				}, document.body.appendChild(aft[aC])
			}(aC,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			afw = !0
		}
	}, this.xs = function() {
		if (afw) {
			afw = !1;
			for (var aC = 0; 0 <= aC; aC--) aft[aC].onpause = null, aft[aC].oncanplaythrough = null, u.removeChild(document.body, aft[aC]), aft[aC] = null
		}
	}, __fx.lobbyReminders.setSound(function() {
		bt.play()
	}), this.play = function() {
		if (afw) {
			var eh = performance.now();
			if (ee + 66 < eh)
				for (var aC = 0; 0 <= aC; aC--)
					if (1 === afu[aC]) return ee = eh, afu[aC] = 2, void aft[aC].play();
			0 < afv && (afv--, setTimeout(afy, 66))
		}
	}
}

function ch() {
	this.aCh = function() {
		var ag1;
		return !(am.lY < 3 || ah.hU[md[0]] >= aE.km >> 1) && (aE.ib ? 9 !== aE.lK && (ag1 = af.aOg(), !(2 * af.aOh(bk.lb()) >= ag1)) : function() {
			if (8 === aE.lK) return !1;
			var ag1 = af.aOg();
			if (2 * ah.hi[md[0]] >= ag1) return !1;
			return !0
		}())
	}
}

function cH() {
	this.dr = function() {
		if (0 === aE.data.sResourcesType) {
			for (var aep = aE.l2, hi = ah.hi, aC = 0; aC < aep; aC++) hi[aC] = 512;
			var aeq = aE.a1G,
				lF = aF.lF,
				iQ = aF.iQ;
			for (aC = aep; aC < aeq; aC++) hi[aC] = lF[iQ[aC]]
		} else(1 === aE.data.sResourcesType ? function() {
			for (var fg = aE.a1G, hi = ah.hi, sResourcesValue = aE.data.sResourcesValue, aC = 0; aC < fg; aC++) hi[aC] = sResourcesValue
		} : function() {
			for (var fg = aE.a1G, hi = ah.hi, sResourcesData = aE.data.sResourcesData, aC = 0; aC < fg; aC++) hi[aC] = sResourcesData[aC]
		})();
		bg.na[8] = ah.hi[aE.fQ]
	}
}

function dY() {
	var aJW = 501,
		ag9 = (this.ag6 = new Uint32Array(aJW), this.a7l = new Uint32Array(aJW), this.aFq = new Uint16Array(aJW), this.ag7 = 0, this.ag8 = 0, 1),
		y5 = 0;

	function agC(self) {
		self.max.fill(0)
	}

	function agE(self, aC) {
		self.max[0] = Math.max(self.ag6[aC], self.max[0]), self.max[1] = Math.max(self.a7l[aC], self.max[1]), self.max[2] = Math.max(self.aFq[aC], self.max[2])
	}
	this.max = [0, 0, 0], this.agA = 0, this.na = new Array(21), this.agB = null, this.ds = function() {
		this.agB = [L(549), L(550), L(551), L(552), L(553), L(554), L(555), L(556), L(374), L(375), L(557), L(558), L(559), L(560), "", L(561), L(562), L(563), L(332), L(564), L(565)]
	}, this.dr = function() {
		this.ag7 = 0, this.ag8 = 0, ag9 = 1, this.agA = 0, y5 = 0, agC(this), this.na.fill(0)
	}, this.aYM = function() {
		return 2 <= this.ag7 && !this.ag8
	}, this.aAr = function() {
		0 !== bi.kz() && (this.ag8 = 1, bh.iT) && bh.uU()
	}, this.sm = function(player, jK) {
		bD.h2.a7f(player) && (this.na[0] += jK + 1, this.na[1]++, this.na[12] += bR.gD[1])
	}, this.sH = function(player, ru) {
		__fx.donationsTracker.logDonation(player, ru, bR.gD[0], aX.a9L());
		player === aE.fQ && (aO.sH(bR.gD[0], bR.gD[1], ru), this.na[12] += bR.gD[1], this.na[16] += bR.gD[0]), ru === aE.fQ && (aO.aB7(bR.gD[0], player), this.na[10] += bR.gD[0])
	}, this.sq = function(player) {
		bD.h2.a7f(player) && (this.na[2]++, this.na[12] += bR.gD[1])
	}, this.sy = function(player) {
		bD.h2.a7f(player) && (this.na[19]++, this.na[12] += bR.gD[1])
	}, this.aej = function(player) {
		bD.h2.a7f(player) && this.na[20]++
	}, this.h6 = function(player, a8S, eP) {
		bD.h2.a7f(player) && (this.na[eP] += a8S)
	}, this.el = function() {
		var self;
		this.agA || 0 < y5-- || ((self = this).ag6[self.ag7] = ah.hU[aE.fQ], self.a7l[self.ag7] = ah.hi[aE.fQ], self.aFq[self.ag7] = af.aFr(aE.fQ), agE(self, self.ag7), self.ag7++, self.ag7 === aJW && function(self) {
			agC(self), agE(self, 0), self.ag7 = 1 + bO.g7(aJW, 2);
			for (var aC = 1; aC < self.ag7; aC++) self.ag6[aC] = self.ag6[2 * aC], self.a7l[aC] = self.a7l[2 * aC], self.aFq[aC] = self.aFq[2 * aC], agE(self, aC);
			ag9 *= 2
		}(self), y5 = ag9 - 1, bh.nR(), 0 === ah.ne[aE.fQ] && (self.agA = bi.kz()))
	}
}

function dZ() {
	this.j = 0, this.k = 0, this.vW = 0, this.vX = 0, this.agG = 0, this.agH = 0, this.aCv = 0, this.wC = 0;
	var agJ = this.agI = 0;
	this.agK = 0, this.agL = 0, this.agM = 0, this.aCG = 0, this.eP = 0, this.aFR = null, this.iT = !1, this.agN = -1, this.agO = !1, this.agP = [0, 0], this.ds = function() {
		this.aFR = [L(566), L(135, 0, "Balance"), L(134, 0, "Interest"), L(567)]
	}, this.dr = function() {
		this.iT = !1, this.agN = -1, this.agO = !1, this.resize()
	}, this.resize = function() {
		this.j = i.j < 1.369 * i.k ? i.j : 1.369 * i.k;
		var fj = a1.a2.it() && i.j < i.k ? 1 : a1.a2.it() ? .8 : i.j < i.k ? .65 : .59;
		this.j = Math.floor(fj * this.j), this.j -= a1.a2.it() && i.j < i.k ? 2 * bf.gap + 2 : 0, this.k = Math.floor(this.j / 1.369), this.aCG = Math.floor(this.k / 150), this.aCG = Math.max(this.aCG, 1.5), this.vW = Math.floor(1 + .02 * this
			.j), this.vX = Math.floor(1 + .04 * this.j), this.aCv = this.vX, agJ = Math.floor(.75 * this.aCv), this.wC = Math.floor(1 + .075 * this.j), this.agK = Math.floor(1 + .1125 * this.j), this.agL = Math.floor(this.j * (a1.a2.it() ? .03 :
				.029)), this.agL = Math.max(this.agL, 4), this.agM = Math.floor(.035 * this.j), this.agM = Math.max(this.agM, 4), this.agI = this.k - 2 * this.aCv - this.wC - this.agK, this.iT && this.agQ()
	}, this.hu = function(mH, mI) {
		var a1J, a1I;
		return !!this.iT && (a1I = mH, a1J = mI, mH -= bO.g7(i.j - this.j, 2), mI -= bO.g7(i.k - this.k, 2), mH < 0 || mI < 0 || mH >= this.j || mI >= this.k || mH >= this.j - this.agK && mI < this.agK ? -1 !== aN.hu(a1I, a1J) || bF.hu(a1I,
			a1J) || this.uU() : mI < this.agK || (mI < this.k - this.wC ? (this.agO = !0, this.agN = (mH - 2 * this.vW - this.agG) / this.agH, 3 !== this.eP && (bi.dy = !0)) : (a1I = (a1I = Math.floor(mH / (this.j / this.aFR.length))) < 0 ?
				0 : a1I >= this.aFR.length ? this.aFR.length - 1 : a1I) !== this.eP && (this.eP = a1I, this.agQ(), bi.dy = !0)), !0)
	}, this.a5h = function(mH, mI) {
		return this.agP[0] = mH, this.agP[1] = mI, !(!this.iT || !this.agO || (mH -= bO.g7(i.j - this.j, 2), mI = this.agN, this.agN = (mH - 2 * this.vW - this.agG) / this.agH, (0 <= this.agN && this.agN <= 1 || 0 <= mI && mI <= 1) && (bi.dy = !
			0), 0))
	}, this.a66 = function() {
		this.agO && (this.agO = !1)
	}, this.a6I = function() {
		this.iT ? this.uU() : this.show()
	}, this.show = function() {
		bg.aYM() && (this.iT = !0, this.agQ())
	}, this.uU = function() {
		this.iT = !1, this.agN = -1, bi.dy = !0
	}, this.agQ = function() {
		this.eP < 2 ? this.agG = aR.measureText(bD.pY.a3S(bg.max[this.eP]), bD.t4.t7(0, this.agL)) : 2 === this.eP && (this.agG = aR.measureText(bD.pY.a8L(6, 2), bD.t4.t7(0, this.agL))), this.agH = this.j - 2 * this.vW - this.agG - this.vX
	}, this.nR = function() {
		this.iT && this.agQ()
	}, this.yl = function() {
		this.iT && this.aDC()
	}, this.aDC = function() {
		var fn = bO.g7(i.j - this.j, 2),
			fp = bO.g7(i.k - this.k, 2);
		ym.setTransform(1, 0, 0, 1, fn, fp), ym.fillStyle = bE.qI, ym.fillRect(0, this.agK, this.j, this.k - this.agK), this.agR(), this.aX0(), ym.strokeRect(0, 0, this.j, this.k), bD.t4.textAlign(ym, 2), ym.font = bD.t4.t7(0, this.agL), 0 ===
			this.eP ? this.agS(bg.ag6, fn, fp) : 1 === this.eP ? this.agS(bg.a7l, fn, fp) : 2 === this.eP ? this.agT(fn, fp) : 3 === this.eP && (this.agU(fn, fp), this.agV(fn, fp)), aN.aAB(Math.floor(fn + this.j - .725 * this.agK), Math.floor(
				fp + .275 * this.agK), Math.floor(.45 * this.agK)), ym.setTransform(1, 0, 0, 1, 0, 0)
	}, this.agR = function() {
		var aC, eh;
		for (ym.lineWidth = this.aCG, bD.t4.textBaseline(ym, 1), bD.t4.textAlign(ym, 1), ym.strokeStyle = bE.qL, ym.font = bD.t4.t7(1, this.agM), eh = this.j / this.aFR.length, ym.fillStyle = bE.qh, ym.fillRect(this.eP * eh, this.k - this.wC, eh,
				this.wC), ym.fillStyle = bE.qL, ym.fillRect(0, this.k - this.wC - .5 * this.aCG, this.j, this.aCG), aC = 1; aC <= 3; aC++) ym.fillRect(aC * eh, this.k - this.wC, this.aCG, this.wC);
		for (aC = this.aFR.length - 1; 0 <= aC; aC--) ym.fillText(bD.p2.a7E(this.aFR[aC], 0, .9 * eh), (aC + .5) * eh, this.k - .46 * this.wC)
	}, this.aX0 = function() {
		ym.fillStyle = bE.r9, ym.fillRect(0, 0, this.j, this.agK), ym.fillStyle = bE.qL, ym.fillRect(0, this.agK - .5 * this.aCG, this.j, this.aCG), ym.font = bD.t4.t7(1, .39 * this.agK), ym.fillText(bD.p2.a7E(L(568), 0, .8 * this.j), Math.floor(
			this.j / 2), Math.floor(.55 * this.agK))
	}, this.agS = function(h, fn, fp) {
		var lx = bg.max[this.eP],
			a6Z = (ym.setTransform(1, 0, 0, 1, fn + 2 * this.vW + this.agG, fp + this.aCv + this.agK), ym.lineWidth = 2, this.agI / Math.sqrt(lx));
		ym.beginPath(), ym.moveTo(this.agH, this.agI - a6Z * Math.sqrt(h[bg.ag7 - 1]));
		for (var aC = bg.ag7 - 2; 0 <= aC; aC--) ym.lineTo(aC * this.agH / (bg.ag7 - 1), this.agI - a6Z * Math.sqrt(h[aC]));
		ym.stroke();
		fn = this.aAB(h, a6Z, .5);
		fn < .95 && ym.fillText(bD.pY.a3S(lx), -this.vW, 0), .05 < Math.abs(fn - .5) && ym.fillText(bD.pY.a3S(Math.floor(lx / 4)), -this.vW, Math.floor(this.agI / 2)), .05 < fn && ym.fillText("0", -this.vW, this.agI)
	}, this.agT = function(fn, fp) {
		ym.setTransform(1, 0, 0, 1, fn + 2 * this.vW + this.agG, fp + this.aCv + this.agK), ym.lineWidth = 2;
		var a6Z = this.agI / Math.max(bg.max[this.eP], 1);
		ym.beginPath(), ym.moveTo(this.agH, this.agI - a6Z * bg.aFq[bg.ag7 - 1]);
		for (var aC = bg.ag7 - 2; 0 <= aC; aC--) ym.lineTo(aC * this.agH / (bg.ag7 - 1), this.agI - a6Z * bg.aFq[aC]);
		ym.stroke();
		fn = this.aAB(bg.aFq, a6Z, 1), fp = bg.max[this.eP] / 100;
		fn < .95 && ym.fillText(bD.pY.a8L(fp, 2), -this.vW, 0), .05 < Math.abs(fn - .5) && ym.fillText(bD.pY.a8L(fp / 2, 2), -this.vW, Math.floor(this.agI / 2)), .05 < fn && ym.fillText(bD.pY.a8L(0, 2), -this.vW, this.agI)
	}, this.agU = function(fn, fp) {
		ym.setTransform(1, 0, 0, 1, fn + .34 * this.j, fp + 2 * agJ + this.agK), bD.t4.textAlign(ym, 2);
		for (var aF9 = this.k - 4 * agJ - this.wC - this.agK, h = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aC = 9; 0 <= aC; aC--) ym.fillText(bD.p2.a7E(bg.agB[h[aC]], 0, .31 * this.j), 0, aC * aF9 / 9);
		var g8 = bg.na;
		for (ym.setTransform(1, 0, 0, 1, fn + .39 * this.j, fp + 2 * agJ + this.agK), bD.t4.textAlign(ym, 0), ym.fillText(bD.pY.a8L(100 * g8[0] / (1024 * Math.max(g8[1], 1)), 1), 0, 0), aC = 8; 1 <= aC; aC--) ym.fillText(g8[h[aC]].toString(), 0,
			aC * aF9 / 9);
		ym.fillText(bD.pY.a8L(100 * (1 - ah.hU[aE.fQ] / g8[7]), 0), 0, aF9)
	}, this.agV = function(fn, fp) {
		ym.setTransform(1, 0, 0, 1, fn + .79 * this.j, fp + 2 * agJ + this.agK), bD.t4.textAlign(ym, 2);
		var aC, aF9 = this.k - 4 * agJ - this.wC - this.agK;
		for (ym.fillStyle = bE.qc, aC = 2; 0 <= aC; aC--) ym.fillText(bD.p2.a7E(bg.agB[aC + 8], 0, .31 * this.j), 0, aC * aF9 / 9);
		ym.fillText(bD.p2.a7E(bg.agB[18], 0, .31 * this.j), 0, 3 * aF9 / 9), ym.fillStyle = bE.qb, ym.fillText(bD.p2.a7E(bg.agB[11], 0, .31 * this.j), 0, 4 * aF9 / 9), ym.fillStyle = bE.qw, ym.fillText(bD.p2.a7E(bg.agB[13], 0, .31 * this.j), 0,
				5 * aF9 / 9), ym.fillText(bD.p2.a7E(bg.agB[15], 0, .31 * this.j), 0, 6 * aF9 / 9), ym.fillText(bD.p2.a7E(bg.agB[16], 0, .31 * this.j), 0, 7 * aF9 / 9), ym.fillText(bD.p2.a7E(bg.agB[12], 0, .31 * this.j), 0, 8 * aF9 / 9), ym
			.fillStyle = bE.qv, ym.fillText(bD.p2.a7E(bg.agB[17], 0, .31 * this.j), 0, aF9), ym.fillStyle = bE.qc;
		var g8 = bg.na,
			aKA = g8[8] + g8[9] + g8[10] + g8[18],
			aKA = bD.pY.a3S(aKA),
			aVi = ym.measureText(aKA).width,
			fn = (ym.setTransform(1, 0, 0, 1, fn + .83 * this.j + aVi, fp + 2 * agJ + this.agK), ym.fillText(bD.pY.a3S(g8[8]), 0, 0), ym.fillText(bD.pY.a3S(g8[9]), 0, aF9 / 9), ym.fillText(bD.pY.a3S(g8[10]), 0, 2 * aF9 / 9), ym.fillText(bD.pY
				.a3S(g8[18]), 0, 3 * aF9 / 9), ym.fillStyle = bE.qb, ym.fillText(aKA, 0, 4 * aF9 / 9), ym.fillStyle = bE.qw, ym.fillText(bD.pY.a3S(g8[13]), 0, 5 * aF9 / 9), ym.fillText(bD.pY.a3S(g8[15]), 0, 6 * aF9 / 9), ym.fillText(bD.pY
				.a3S(g8[16]), 0, 7 * aF9 / 9), ym.fillText(bD.pY.a3S(g8[12]), 0, 8 * aF9 / 9), g8[12] + g8[13] + g8[15] + g8[16]);
		ym.fillStyle = bE.qv, ym.fillText(bD.pY.a3S(fn), 0, aF9), ym.fillStyle = bE.qL
	}, this.aAB = function(h, a6Z, aDp) {
		var aC, e, gP;
		return this.agN < 0 || 1 < this.agN ? .25 : (aC = this.agN * (bg.ag7 - 1), gP = h[e = Math.floor(aC)], gP += (aC - e) * (h[e < bg.ag7 - 1 ? e + 1 : e] - gP), ym.strokeStyle = bE.qO, .04 < this.agN && this.agX(0, this.agI - a6Z * Math.pow(
				gP, aDp), aC * this.agH / (bg.ag7 - 1), this.agI - a6Z * Math.pow(gP, aDp)), .04 < gP / bg.max[this.eP] && this.agX(aC * this.agH / (bg.ag7 - 1), this.agI, aC * this.agH / (bg.ag7 - 1), this.agI - a6Z * Math.pow(gP, aDp)), ym
			.fillStyle = bE.qy, ym.beginPath(), ym.arc(aC * this.agH / (bg.ag7 - 1), this.agI - a6Z * Math.pow(gP, aDp), Math.max(2, .014 * this.k), 0, 2 * Math.PI), ym.fill(), h = this.agN * bi.aFs, h = 0 === ah.ne[aE.fQ] ? Math.floor(h * bg
				.agA) : Math.floor(h * bi.kz()), ym.fillStyle = bE.qL, ym.fillText(1 === aDp ? bD.pY.a8L(gP / 100, 2) : bD.pY.a3S(Math.floor(gP)), -this.vW, this.agI - a6Z * Math.pow(gP, aDp)), bD.t4.textAlign(ym, 1), ym.fillText(aX.aFf(h),
				aC * this.agH / (bg.ag7 - 1), this.agI + this.agL - (a1.a2.it() ? 2 : 0) - this.aCG), bD.t4.textAlign(ym, 2), a6Z * Math.pow(gP, aDp) / this.agI)
	}, this.agX = function(o5, o6, oI, oJ) {
		ym.beginPath(), ym.moveTo(o5, o6), ym.lineTo(oI, oJ), ym.stroke()
	}
}

function c5() {
	this.agY = "https://territorial.io/changelog", this.aYN = "https://territorial.io/terms", this.aYO = "https://territorial.io/privacy", this.agZ = "https://territorial.io/tutorial", this.aga = "https://territorial.io/players", this.agb =
		"https://territorial.io/clans", this.agc = "https://territorial.io/clan-results", this.aUr = "https://patreon.com/c/territorial", this.aHH = "https://play.google.com/store/apps/details?id=territorial.io", this.a5G =
		"https://apps.apple.com/app/id1581110913", this.aHI = "https://discord.gg/pthqvpTXmh", this.aHJ = "https://www.instagram.com/davidtschacher/", this.a30 =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function dH() {
	this.z = new agd, this.a2I = new age, this.dr = function() {
		this.z.dr()
	}, this.el = function() {
		0 !== this.z.wt && this.z.wt--
	}
}

function age() {
	this.yl = function() {
		if (0 !== bS.z.wt && (ym.globalAlpha = Math.min(bS.z.wt / 580, 1), ym.drawImage(bS.z.agh, 1 + aT.a2G(), 1 + aT.a2H()), ym.globalAlpha = 1, aE.i5)) {
			for (var o5 = jL / iv, o6 = jM / iv, oI = (i.j + jL) / iv, oJ = (i.k + jM) / iv, hF = bS.z.agi * iv, agj = bS.z.agj, aC = aE.l2 - 1; 0 <= aC; aC--) ! function(aC, hF, o5, o6, oI, oJ, agj) {
				var highlight;
				0 === ah.ne[aC] || 0 === ah.hU[aC] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (hF *= 2), oI = i.j * ((ah.ja[aC] + ah.jb[aC] + 1) / 2 - o5) / (oI - o5) - .5 * hF, o5 = i.k * ((ah.jc[
					aC] + ah.jd[aC] + 1) / 2 - o6) / (oJ - o6) - .5 * hF, oI > i.j) || o5 > i.k || oI < -hF || o5 < -hF || (highlight ? ym.setTransform(2 * iv, 0, 0, 2 * iv, oI, o5) : ym.setTransform(iv, 0, 0, iv, oI, o5), ym.drawImage(
					agj[aE.ib ? bj.fe[aC] : 1], 0, 0))
			}(aC, hF, o5, o6, oI, oJ, agj);
			ym.setTransform(iv, 0, 0, iv, 0, 0)
		}
	}
}

function agd() {
	this.agi = 28, this.wt = 0, this.agh = null;
	var agl = this.agj = null;
	new Uint8Array([2, 0, 2, 1, 1, 1, 1, 2, 0, 2]);

	function agp(ie, agq) {
		var fn, fp, fS, j4, a70 = bD.t4.a0a(ie, ie),
			il = bD.t4.getContext(a70, !0),
			ii = bD.t4.getImageData(il, ie, ie),
			a0l = ii.data,
			lx = (ie >> 1) - .5,
			agr = .5 + lx;
		for (agr *= agr, fp = 0; fp < ie; fp++)
			for (fn = 0; fn < ie; fn++) j4 = (j4 = fn - lx) * j4 + (j4 = fp - lx) * j4, a0l[fS = 4 * (fp * ie + fn)] = agq[0], a0l[1 + fS] = agq[1], a0l[2 + fS] = agq[2], a0l[3 + fS] = (agr - j4) * agq[3] / agr;
		return il.putImageData(ii, 0, 0), a70
	}

	function afl(aC, il, a70, ie) {
		var highlight, fn, fp;
		0 !== ah.ne[aC] && 0 !== ah.hU[aC] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aC]) && (ie *= 2), fn = ah.ja[aC] + ah.jb[aC] + 1 - ie - 2 >> 1, fp = ah.jc[aC] + ah.jd[aC] + 1 - ie - 2 >> 1, highlight ? il
			.drawImage(a70[aE.ib ? 9 === aE.lK && 5 === aF.iQ[aC] ? 3 : bj.fe[aC] : aC < aE.l2 ? 1 : 0], fn, fp, ie, ie) : il.drawImage(a70[aE.ib ? 9 === aE.lK && 5 === aF.iQ[aC] ? 3 : bj.fe[aC] : aC < aE.l2 ? 1 : 0], fn, fp))
	}
	this.dr = function() {
		var un;
		this.wt = 700,
			function(un) {
				var ie = un.agi;
				if (un.agj = [], agl = [], aE.ib) {
					for (var aC = 0; aC <= aE.a1N; aC++) un.agj.push(agp(ie, bj.ae6[bj.lP[aC]])), agl.push(agp(ie >> 1, bj.ae6[bj.lP[aC]]));
					9 === aE.lK && agl.push(agp(ie, bj.ae6[1]))
				} else un.agj.push(agp(ie, bj.ae6[7])), un.agj.push(agp(ie, bj.ae6[4])), agl.push(agp(ie >> 1, bj.ae6[7]))
			}(this),
			function(un, agv) {
				var aC, agh = un.agh,
					il = bD.t4.getContext(agh, !0),
					fg = aE.fd,
					ie = un.agi >> 1;
				il.imageSmoothingEnabled = !1, il.setTransform(1, 0, 0, 1, 0, 0), agv && il.clearRect(0, 0, agh.width, agh.height);
				if (9 === aE.lK) {
					ie <<= 1;
					un = b0.lT[5];
					for (aC = fg - un; aC < fg; aC++) afl(aC, il, agl, ie);
					fg -= un, ie >>= 1
				}
				for (aC = aE.l2; aC < fg; aC++) afl(aC, il, agl, ie)
			}(this, null !== (un = this).agh && un.agh.width === bV.fr - 2 && un.agh.height === bV.fs - 2 || (un.agh = bD.t4.a0a(bV.fr - 2, bV.fs - 2), !1)), aE.i5 || this.a8d()
	}, this.ae7 = agp, this.a8d = function() {
		for (var fg = aE.l2, ie = this.agi, agj = this.agj, il = bD.t4.getContext(this.agh, !0), aC = 0; aC < fg; aC++) afl(aC, il, agj, ie)
	}
}

function dI() {
	function agy() {
		8 === aE.lK && 1 === aE.a49 && bU.a3n.a48()
	}

	function agx(player) {
		aE.i5 ? (al.aMz(player), am.aQR(), aE.lM && aE.si.el()) : b4.aHf(player)
	}
	this.sA = function(player) {
		aO.a4N(player, player === aE.fQ ? 21 : 22), agx(player), agy()
	}, this.sf = function(player) {
		1 === aE.a49 && 0 !== ah.ne[player] && 2 !== ah.a7b[player] && agx(player), aE.a4C--, aE.a4B--, aO.a4N(player, 4), bD.h2.hs(2) && aX.nQ(!0), agy()
	}
}

function dS() {
	this.aal = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aF6 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bE.qL, "rgb(170,170,170)"
	], this.agz = [bE.qL, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bE.qL, bE.qC], this.ah0 = [bE.qC, bE.qL, bE.qL, bE.qL, bE.qC, bE.qC, bE.qC, bE.qC, bE.qL];
	var aQb = ["255,255,255", "0,0,0", "255,170,170", "190,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aPu = ["rgba(" + aQb[0] + ",", "rgba(" + aQb[1] + ",", "rgba(" + aQb[2] + ",", "rgba(" + aQb[3] + ",", "rgba(" + aQb[4] + ",", "rgba(" + aQb[5] + ",", "rgba(" + aQb[6] + ",", "rgba(" + aQb[7] + ",", "rgba(" + aQb[8] + ",", "rgba(" + aQb[9] +
			","
		], this.aPv = ["rgb(" + aQb[0] + ")", "rgb(" + aQb[1] + ")", "rgb(" + aQb[2] + ")", "rgb(" + aQb[3] + ")", "rgb(" + aQb[4] + ")", "rgb(" + aQb[5] + ")", "rgb(" + aQb[6] + ")", "rgb(" + aQb[7] + ")", "rgb(" + aQb[8] + ")", "rgb(" + aQb[9] +
			")"
		], this.a4W = null, this.ae6 = [
			[128, 158, 168, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aW9 = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.lP = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.fe = new Uint8Array(aE.fd), this.aF7 = new Uint8Array(aE.fd), this.a1T = new Uint16Array(aE.fd), this.a1U = new Uint16Array(this.lP.length + 1), this.a1V = new Uint16Array(this.lP.length), this
		.ds = function() {
			this.a4W = [L(569), L(570), L(571), L(572), L(573), L(574), L(575), L(576), L(577)]
		}, this.dr = function() {
			if (this.fe.fill(0), this.aF7.fill(0), this.ah1(), aE.ib) {
				if (9 === aE.lK) {
					for (var fe = bj.fe, aC = aE.data.teamPlayerCount[7] - 1; 0 <= aC; aC--) fe[aC] = 1;
					var fg = aE.fd;
					for (aC = aE.data.teamPlayerCount[7]; aC < fg; aC++) fe[aC] = 2;
					bj.lP[1] = 7, bj.lP[2] = 8
				} else aE.lM ? function() {
					var aW9 = bj.aW9,
						colorsData = aE.data.colorsData;
					if (!aE.data.selectableColor)
						for (var aC = aE.l2 - 1; 0 <= aC; aC--) colorsData[aC] = az.kJ(262144);
					var ahC = 0,
						fw = 768,
						aW8 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aE.data.teamPlayerCount;
					for (aC = 0; aC < 9; aC++)
						if (teamPlayerCount[aC]) {
							for (var fj = 0, g0 = 0; g0 < 3; g0++) fj += Math.abs(aW9[aC][g0] - aW8[g0]);
							fj < fw && (ahC = aC, fw = fj)
						} var ahD = new Uint16Array(9);
					for (aC = 0; aC < 9; aC++) ahD[aC] = teamPlayerCount[aC];
					var lP = bj.lP,
						ahE = new Uint8Array(9),
						h9 = (lP[0] = 0, 1);
					for (aC = 1; aC < 9; aC++) ahD[aC] && (ahE[aC] = h9, lP[h9++] = aC);
					var kI = aE.l2,
						fe = bj.fe;
					ahD[ahC] ? (ahD[ahC]--, fe[0] = ahE[ahC]) : kI = 0;
					var eq = 0;
					for (aC = kI; aC < aE.a1G; aC++) {
						var iZ = lP[eq];
						if (ahD[iZ]) ahD[iZ]--, fe[aC] = ahE[iZ];
						else if (aC--, 9 <= ++eq) return console.log("error 325")
					}
				}() : this.el();
				! function() {
					for (var fg = aE.fd, a1T = bj.a1T, a1U = bj.a1U, a1V = bj.a1V, fe = bj.fe, lP = bj.lP, a1M = lP.length, buffer = new Array(a1M), aC = 0; aC < a1M; aC++) buffer[aC] = [];
					for (aC = 0; aC < fg; aC++) buffer[lP[fe[aC]]].push(aC);
					for (aC = 1; aC <= a1M; aC++) a1U[aC] = a1U[aC - 1] + buffer[aC - 1].length;
					for (aC = 0; aC < a1M; aC++)
						for (var h9 = buffer[aC].length, lx = a1U[aC], iZ = 0; iZ < h9; iZ++) a1T[iZ + lx] = buffer[aC][iZ];
					var l2 = aE.l2;
					for (aC = 0; aC < a1M; aC++)
						for (h9 = buffer[aC].length, lx = a1U[aC], iZ = 0; iZ < h9; iZ++)
							if (a1T[iZ + lx] >= l2) {
								a1V[aC] = iZ;
								break
							}
				}(), ! function() {
					for (var fg = aE.fd, fe = bj.fe, aF7 = bj.aF7, lP = bj.lP, aC = 0; aC < fg; aC++) aF7[aC] = lP[fe[aC]];
					9 === aE.lK && aF7.fill(1, fg - b0.lT[5])
				}()
			}
		}, this.ah1 = function() {
			for (var aC = this.lP.length - 1; 0 <= aC; aC--) this.lP[aC] = aC
		}, this.el = function() {
			var a3H = new Uint8Array(aE.l2),
				a3I = new Uint8Array(aE.l2),
				ah6 = new Uint16Array(8),
				ah7 = new Uint16Array(this.lP.length);
			this.ah8(a3H, a3I, ah6, 1), this.aMV(ah6), this.ah9(ah7, a3H, a3I), this.ahA(a3H, a3I, ah7), this.ahB()
		}, this.ah8 = function(a3H, a3I, ahD, ahF) {
			for (var g0, e, ahG, fg = this.lP.length - ahF, h = new Uint16Array(fg), aW9 = this.aW9, colorsData = aE.data.colorsData, aC = aE.l2 - 1; 0 <= aC; aC--) {
				for (g0 = fg; ahF <= g0; g0--) h[g0 - 1] = Math.abs(4 * (colorsData[aC] >> 12) - aW9[g0][0]) + Math.abs(4 * (colorsData[aC] >> 6 & 63) - aW9[g0][1]) + Math.abs(4 * (63 & colorsData[aC]) - aW9[g0][2]);
				for (ahG = 768, g0 = fg - 1; 0 <= g0; g0--) h[e = (g0 + aC) % fg] < ahG && (ahG = h[e], a3H[aC] = e);
				for (ahD[a3H[aC]] += 4, ahG = 768, g0 = fg - 1; 0 <= g0; g0--) h[e = (g0 + aC) % fg] < ahG && e !== a3H[aC] && (ahG = h[e], a3I[aC] = e);
				ahD[a3I[aC]]++
			}
		}, this.aMV = function(ahD) {
			for (var g0, lz, fg = this.lP.length - 1, aC = fg; 0 <= aC; aC--) this.lP[aC] = aC;
			for (aC = fg - 1; 0 <= aC; aC--) ahD[aC]++;
			for (aC = 1; aC <= fg; aC++) {
				for (lz = 0, g0 = 1; g0 < fg; g0++) ahD[g0] > ahD[lz] && (lz = g0);
				ahD[lz] = 0, this.lP[aC] = lz + 1
			}
		}, this.ah9 = function(ah7, a3H, a3I) {
			var g0, a4u, eq, fj, e, oH, vn, ahH = this.lP.length - 1,
				tz = new Uint16Array(ahH),
				ahI = [],
				ahJ = 0,
				a4t = [],
				ahK = [];
			loop: for (var aC = 0; aC < aE.l2; aC++)
				if (null !== (a4u = bD.pY.pm(ah.a4s[aC]))) {
					for (g0 = a4t.length - 1; 0 <= g0; g0--)
						if (a4u === a4t[g0]) {
							ahK[g0].push(aC), ahJ = Math.max(ahJ, ahK[g0].length);
							continue loop
						} a4t.push(a4u), ahI.push(!1), ahK.push([aC]), ahJ = Math.max(ahJ, 1)
				}
			for (; 2 < aE.a1N && ahJ > bO.g7(aE.l2, aE.a1N);) aE.a1N--, aE.lK--;
			for (g0 = a4t.length - 1; 0 <= g0; g0--) {
				for (fj = -1, eq = a4t.length - 1; 0 <= eq; eq--) !ahI[eq] && (-1 === fj || ahK[eq].length > ahK[fj].length) && (fj = eq);
				for (eq = ahH - 1; 0 <= eq; eq--) tz[eq] = 1;
				for (eq = ahK[fj].length - 1; 0 <= eq; eq--) tz[a3H[ahK[fj][eq]]] += 3, tz[a3I[ahK[fj][eq]]]++;
				for (aC = ahH - 1; 0 <= aC; aC--) {
					for (e = fj % ahH, eq = ahH - 1; 0 <= eq; eq--) tz[eq] > tz[e] && (e = eq);
					for (oH = -1, eq = aE.a1N; 0 < eq; eq--)
						if (this.lP[eq] === e + 1) {
							oH = eq;
							break
						} if (tz[e] = 0, -1 !== oH) {
						for (vn = 0, eq = aE.a1N; 0 < eq; eq--) ah7[oH] > ah7[eq] && vn++;
						if (vn !== aE.a1N - 1) {
							for (eq = ahK[fj].length - 1; 0 <= eq; eq--) ah7[oH]++, this.fe[ahK[fj][eq]] = oH;
							break
						}
					}
				}
				ahI[fj] = !0
			}
		}, this.ahA = function(a3H, a3I, ah7) {
			for (var aC, j3, fg = this.lP.length - 1, border = bO.g7(aE.l2, aE.a1N), ahL = (0 < aE.l2 % aE.a1N && border++, new Uint8Array(1 + fg)), g0 = fg; 1 <= g0; g0--) ahL[this.lP[g0]] = g0;
			for (aC = 0; aC < aE.l2; aC++) j3 = ahL[a3H[aC] + 1], 0 === this.fe[aC] && j3 <= aE.a1N && ah7[j3] < border && (ah7[j3]++, this.fe[aC] = j3);
			for (aC = 0; aC < aE.l2; aC++) j3 = ahL[a3I[aC] + 1], 0 === this.fe[aC] && j3 <= aE.a1N && ah7[j3] < border && (ah7[j3]++, this.fe[aC] = j3);
			for (g0 = aE.a1N; 1 <= g0; g0--)
				for (aC = aE.l2 - 1; 0 <= aC && !(ah7[g0] >= border); aC--) 0 === this.fe[aC] && (ah7[g0]++, this.fe[aC] = g0)
		}, this.ahB = function() {
			if (aE.a1N < 8) aE.a1N++, aE.lK++, aE.a1O = 1;
			else
				for (var aC = aE.l2; aC < aE.fd; aC++) this.fe[aC] = 1 + aC % aE.a1N
		}
}

function dl() {
	this.hV = function() {
		for (var fn, fp, aC = gc - 1; 0 <= aC; aC--) fn = bO.g7(ge[aC], 4) % bV.fr, fp = bO.g7(ge[aC], 4 * bV.fr), ah.ja[gX] = Math.min(fn, ah.ja[gX]), ah.jc[gX] = Math.min(fp, ah.jc[gX]), ah.jb[gX] = Math.max(fn, ah.jb[gX]), ah.jd[gX] = Math
			.max(fp, ah.jd[gX])
	}, this.gq = function() {
		var fj, hE, aC, fg = ah.h8[gX].length,
			fi = ad.fi;
		loop: for (aC = fg - 1; 0 <= aC; aC--) {
			for (fj = 3; 0 <= fj; fj--)
				if (hE = ah.h8[gX][aC] + fi[fj], ad.fX(hE) || ad.hG(hE) && ad.fY(hE) !== gX) {
					ad.kE(ah.h8[gX][aC], gX);
					continue loop
				} ah.h8[gX][aC] = ah.h8[gX][fg - 1], ah.h8[gX].pop(), fg--
		}
	}, this.gr = function() {
		var player = gX,
			hM = ah.hM,
			hN = ah.hN,
			g5 = ah.g5,
			fg = hM[player].length,
			fi = ad.fi;
		loop: for (var aC = fg - 1; 0 <= aC; aC--) {
			for (var ahM = !1, ahN = !1, fj = 3; 0 <= fj; fj--) {
				var hE = hM[player][aC] + fi[fj];
				if (ad.aMf(hE, player)) continue loop;
				ahM = ahM || ad.iy(hE), ahN = ahN || ad.aMe(hE)
			}
			ahM ? hN[player].push(hM[player][aC]) : ahN ? g5[player].push(hM[player][aC]) : ad.a1p(hM[player][aC], player), hM[player][aC] = hM[player][fg - 1], hM[player].pop(), fg--
		}
	}, this.hK = function() {
		ah.hU[gb] -= gc
	}, this.hL = function(border) {
		for (var fg = border.length, aC = fg - 1; 0 <= aC; aC--) ad.a2A(gb, border[aC]) || (border[aC] = border[fg - 1], border.pop(), fg--)
	}, this.hO = function(border) {
		for (var fg = border.length, aC = fg - 1; 0 <= aC; aC--) !ad.a2A(gb, border[aC]) && ad.fb(border[aC]) && (border[aC] = border[fg - 1], border.pop(), fg--)
	}, this.hP = function(border) {
		for (var fj, hE, fg = border.length, fi = ad.fi, aC = fg - 1; 0 <= aC; aC--)
			for (fj = 3; 0 <= fj; fj--)
				if (hE = border[aC] + fi[fj], ad.aMf(hE, gb)) {
					ah.hM[gb].push(border[aC]), border[aC] = border[fg - 1], border.pop(), fg--;
					break
				}
	}, this.hQ = function() {
		for (var fj, hE, fi = ad.fi, aC = gc - 1; 0 <= aC; aC--)
			for (fj = 3; 0 <= fj; fj--) hE = ge[aC] + fi[fj], ad.a2D(gb, hE) && ad.aMl(hE) && (ah.hM[gb].push(hE), ad.hB(hE, gb))
	}, this.hR = function() {
		var fn, fp;
		loop: for (; ah.jc[gb] < ah.jd[gb];) {
			for (fn = ah.jb[gb]; fn >= ah.ja[gb]; fn--)
				if (ad.a2A(gb, 4 * (ah.jc[gb] * bV.fr + fn))) break loop;
			ah.jc[gb]++
		}
		loop: for (; ah.jc[gb] < ah.jd[gb];) {
			for (fn = ah.jb[gb]; fn >= ah.ja[gb]; fn--)
				if (ad.a2A(gb, 4 * (ah.jd[gb] * bV.fr + fn))) break loop;
			ah.jd[gb]--
		}
		loop: for (; ah.ja[gb] < ah.jb[gb];) {
			for (fp = ah.jd[gb]; fp >= ah.jc[gb]; fp--)
				if (ad.a2A(gb, 4 * (fp * bV.fr + ah.ja[gb]))) break loop;
			ah.ja[gb]++
		}
		loop: for (; ah.ja[gb] < ah.jb[gb];) {
			for (fp = ah.jd[gb]; fp >= ah.jc[gb]; fp--)
				if (ad.a2A(gb, 4 * (fp * bV.fr + ah.jb[gb]))) break loop;
			ah.jb[gb]--
		}
	}, this.fZ = function(player, kB) {
		return 0 === bj.fe[player] || bj.fe[player] !== bj.fe[kB]
	}, this.iD = function(player) {
		for (var aC, hF, fg = ah.hM[player].length, fi = ad.fi, fj = 3; 0 <= fj; fj--)
			for (hF = fi[fj], aC = 0; aC < fg; aC++)
				if (ad.fX(ah.hM[player][aC] + hF)) return !0;
		return !1
	}, this.aMv = function(player) {
		for (var aC, hF, fg = ah.hM[player].length, fi = ad.fi, fj = 3; 0 <= fj; fj--)
			for (hF = fi[fj], aC = 0; aC < fg; aC++)
				if (ad.kD(ah.hM[player][aC]) && ad.fX(ah.hM[player][aC] + hF)) return !0;
		return !1
	}, this.iG = function(a7h, a7i) {
		for (var aC, eh, hF, hE, aep = ah.hM[a7h].length, aeq = ah.hM[a7i].length, fi = (aeq < aep && (eh = a7h, a7h = a7i, a7i = eh, eh = aep, aep = aeq, 0), ad.fi), fj = 3; 0 <= fj; fj--)
			for (hF = fi[fj], aC = 0; aC < aep; aC++)
				if (hE = ah.hM[a7h][aC] + hF, ad.hG(hE) && ad.fY(hE) === a7i) return !0;
		return !1
	}, this.aMw = function(a7h, a7i) {
		for (var aC, hF, hE, aep = ah.hM[a7h].length, fi = ad.fi, fj = 3; 0 <= fj; fj--)
			for (hF = fi[fj], aC = 0; aC < aep; aC++)
				if (ad.kD(ah.hM[a7h][aC]) && (hE = ah.hM[a7h][aC] + hF, ad.hG(hE)) && ad.fY(hE) === a7i) return !0;
		return !1
	}
}

function de() {
	this.sr = new ahO
}

function ahO() {
	this.iJ = function(player) {
		bD.h2.a7c(player) && aO.a2d(80, L(578), 637, 0, bE.rC, bE.qI, -1, !1)
	}, this.iM = function(player) {
		bD.h2.a7c(player) && aO.a2d(80, L(579), 637, 0, bE.rC, bE.qI, -1, !1)
	}
}

function ahP() {
	this.ahQ = 0, this.el = function() {
		aP.el(), aa.el(), i.el(), b1.z.el(), ay.aM0(), bX.eZ.el(), bq.x5.el(), bi.dy && (bi.dy = !1, ab.yl())
	}
}

function ahR() {
	this.eg = bi.eg, this.eP = 0, this.ahQ = 0, this.aLy = 0, this.ahS = null, this.ahT = 7, this.ahU = 0, this.dr = function() {
		this.aLy = 0, this.ahS = [], this.eP = 0, this.ahQ = 0
	}, this.aZh = function(aD) {
		if (aE.i5) this.aFt(aD);
		else if (this.ahS.push(aD), 2 === aE.a49) {
			for (var aC = 0; aC < this.ahS.length; aC++) bB.rl.el(this.ahS[aC]);
			this.ahS = []
		}
	}, this.aFt = function(aD) {
		2 !== aE.a49 && (bB.rl.el(aD), bC.el(), aX.aFt(this.aLy), this.aLy === aE.a8j ? (aE.si.el(), this.aLy = 0, this.eP = 0, this.ahQ = 0, this.eg = bi.eg) : (this.aLy++, ag.a8c(), ag.nQ(!0), be.render()))
	}, this.el = function() {
		i.el(), aE.i5 ? (bi.dy = aX.aFt(-1) || bi.dy, nS()) : (0 !== this.eP || bi.eg >= this.eg && (this.eg += bi.aFs * Math.floor(1 + (bi.eg - this.eg) / bi.aFs), 2 === aE.a49 ? nE() : this.ahV(), this.eP++, 27 < bi.eg - this.ahU)) && this
		.ahW(), nN(), bi.dy && (bi.dy = !1, a2E()), this.ahU = bi.eg
	}, this.ahW = function() {
		bi.dy = !0, nP(), this.eP = 0
	}, this.ahV = function() {
		var za, aC;
		if (this.ahQ !== 7 * this.aLy) nI(), be.render();
		else {
			za = !1;
			loop: for (; this.ahX() && (za = !0, nI(), 2 !== aE.a49) && 0 < this.ahS.length;)
				for (aC = this.ahT - 2; 0 <= aC; aC--)
					if (nI(), 2 === aE.a49) break loop;
			za ? be.render() : (nE(), be.a8f())
		}
	}, this.ahX = function() {
		return 0 < this.ahS.length && (this.aLy++, bB.rl.el(this.ahS[0]), this.ahS.shift(), !0)
	}
}

function ahY() {
	var ahZ, aha, ahb, aLy, ahc, eP = 0,
		eg = bi.eg;

	function ahf() {
		! function() {
			if (!aE.i5) return;
			if (aE.lM) return;
			if (2 !== aE.a49)
				if (ahc % 7 != 0) ahc++;
				else if (aLy === aE.a8j) {
				if (!ahi()) return;
				aX.aFt(aLy), aE.si.el()
			} else {
				if (!ahi()) return;
				ahc++, aLy++, ag.a8c(), ag.nQ(!0)
			}
			return 1
		}() && ahi() && nI()
	}

	function ahg() {
		eP = 0, (aE.i5 ? (bi.dy = aX.aFt(aLy - (ahc % 7 == 0 ? 0 : 1) + ahc % 7 / 7) || bi.dy, nS) : aN.hr || !bF.a97 ? nS : (bi.dy = !0, nP))()
	}

	function ahi() {
		var aC, fg, ahj = bC.sg.abH,
			gP = bC.sg.abI,
			gR = bC.sg.abJ,
			gT = bC.sg.abK,
			ahk = bC.sg.abL,
			ahl = bC.sg.abM;
		if (!(ahZ >= ahl.length)) {
			if (ahl = ahl[ahZ], ahk[ahZ]) {
				for (fg = aha + ahl, aC = aha; aC < fg; aC++) bB.rl.sV(ahj[aC], gP[aC], gR[aC], gT[aC]);
				aha += ahl, ahZ++
			} else ++ahb >= ahl && (ahZ++, ahb = 0);
			return __fx.replay.tick++, 1
		}
		aO.a5T("Replay file smaller than expected."), bF.a6J(!1), aE.a49 = 2
	}
	this.ahQ = 0, this.dr = function() {
		ahc = aLy = ahb = aha = ahZ = 0, __fx.replay.registerHooks({
			advance: () => ahf(),
			finishTick: () => be.render(),
			requestRedraw: () => {
				bi.dy = !0
			},
			isEnded: () => 2 === aE.a49,
			getTickInterval: () => bi.aFs
		})
	}, this.el = function() {
		var afF;
		i.el(), __fx.replay.frame() ? nE() : bF.aD6() < 1.7 ? 0 === eP ? bi.eg >= eg && (afF = bi.aFs / bF.aD6(), eg += afF * Math.floor(1 + (bi.eg - eg) / afF), 2 === aE.a49 || aN.hr || !bF.a97 ? nE() : (ahf(), be.render()), eP++) : ahg() :
			function() {
				var afF;
				if (bi.eg >= eg)
					if (2 === aE.a49 || aN.hr || !bF.a97) nE(), eg = bi.eg;
					else {
						for (afF = bi.aFs / bF.aD6(), 16 < (bi.eg - eg) / afF && (eg = bi.eg - 16 * afF); bi.eg >= eg && 2 !== aE.a49;) eg += afF, ahf();
						be.render()
					} ahg()
			}(), nN(), bi.dy && (bi.dy = !1, a2E())
	}, this.a4K = function() {
		bC.sg.abM.length - ahZ <= 2 || aO.a5T("Replay file larger than expected.")
	}
}

function ahm() {
	var eP = 0,
		eg = bi.eg;
	this.ahQ = 0, this.el = function() {
		i.el(), aE.i5 ? nS() : 0 === eP ? bi.eg >= eg && (eg += bi.aFs * Math.floor(1 + (bi.eg - eg) / bi.aFs), 2 === aE.a49 || aN.hr ? nE() : (nI(), be.render()), eP++) : ((aN.hr ? nS : (bi.dy = !0, nP))(), eP = 0), nN(), bi.dy && (bi.dy = !1,
			a2E())
	}
}

function da() {
	this.a4J = null, this.dy = !1, this.eg = 0, this.aFs = 56;
	var ahn = 0;

	function aho() {
		bi.eg = ahn = performance.now(), bi.a4J.el(), window.requestAnimationFrame(aho)
	}
	this.dr = function() {
		this.a94(), window.requestAnimationFrame(aho), this.eg = performance.now()
	}, this.a8w = function() {
		aE.hp ? (this.a4J = new ahY, this.a4J.dr()) : aE.lM ? this.a4J = new ahm : (this.a4J = new ahR, this.a4J.dr())
	}, this.a94 = function() {
		this.a4J = new ahP, this.dy = !0
	}, this.el = function() {
		this.a4J.ahQ++
	}, this.kz = function() {
		return this.a4J.ahQ
	}, this.aZM = function() {
		var eh = performance.now();
		eh < ahn + 1e3 || (this.eg = eh, this.a4J.el())
	}
}

function d0() {
	var aLO = 0,
		ahp = !0;
	this.el = function() {
		var eh, aBY;
		bi.eg < aLO || (aLO = bi.eg + 3e3, aE.hp) || aE.lM || bD.h2.ht(aE.fQ) || (eh = new Date, aBY = eh.getUTCSeconds(), ahp ? aBY < 43 && (ahp = !1) : aBY < 43 || (aLO += 52e3, ahp = !0, aBY = (eh.getUTCMinutes() + 2) % 60, eh = aE.lK < 7 ?
			0 : 8 === aE.lK ? 2 : 9 === aE.lK ? 3 : 1, aP.aBN(eh, aBY) && (aBY = eh, aBY = [L(580), L(581), L(582), L(583)][aBY], aO.aAy(aBY))))
	}
}

function cu() {
	var o5, o6, oI, oJ, ahr = 0,
		ahs = 0;

	function ahu() {
		return Math.pow(Math.pow(oI - o5, 2) + Math.pow(oJ - o6, 2), .5)
	}

	function aht(e) {
		o5 = i.l * e.touches[0].clientX, o6 = i.l * e.touches[0].clientY, oI = i.l * e.touches[1].clientX, oJ = i.l * e.touches[1].clientY
	}
	this.a5l = function(e) {
		return 1 < e.touches.length ? (ahs = bi.eg, ahr = 3, aht(e), aM.uU(), !0) : (ahr = 0, !1)
	}, this.a5m = function(e) {
		var aNq, j1, j2;
		return 0 !== aE.a49 && 1 < e.touches.length && (ahr = Math.max(ahr - 1, 0), aI.oN() && (aNq = ahu(), aht(e), e = ahu(), j1 = Math.floor((o5 + oI) / 2), j2 = Math.floor((o6 + oJ) / 2), aT.aDX(j1, j2, Math.max(.125, e) / Math.max(.125,
			aNq)), bi.dy = !0), !0)
	}, this.a69 = function() {
		var fn, fp;
		return !!(ahr && (ahr = 0, bi.eg < ahs + 500)) && (fn = (o5 + oI) / 2, fp = (o6 + oJ) / 2, aM.a63(fn, fp), aM.click(fn, fp, !0) && (bi.dy = !0), !0)
	}
}

function dB() {
	this.size = 0, this.eP = 0, this.aD = null, this.dr = function(aD) {
		this.eP = 0, this.aD = aD, this.size = aD.length
	}, this.xs = function() {
		this.aD = null
	}, this.sU = function(size) {
		for (var g8 = 0, aD = this.aD, oN = this.eP + size - 1, aC = this.eP; aC <= oN; aC++) g8 |= (aD[aC >> 3] >> 7 - (7 & aC) & 1) << oN - aC;
		return this.eP += size, this.eP > 8 * this.size && console.error("Unwrapper Overflow"), g8
	}, this.aZp = function(size) {
		var g0 = size >> 1;
		return (1 << g0) * this.sU(size - g0) + this.sU(g0)
	}, this.aZr = function(ahv) {
		return this.size === bG.aZo(ahv)
	}, this.abZ = function(a12, ahw, ahx) {
		var h9 = this.sU(a12);
		if (!h9) return null;
		for (var a12 = Math.max(h9, ahx), h = new(ahw <= 8 ? Uint8Array : ahw <= 16 ? Uint16Array : Uint32Array)(a12), aC = 0; aC < h9; aC++) h[aC] = this.sU(ahw);
		ahx = h[h9 - 1];
		return ahx && h.fill(ahx, h9), h
	}, this.aba = function(a12, ahy, ahx) {
		var h9 = this.sU(a12);
		if (!h9) return null;
		for (var a12 = Math.max(h9, ahx), h = new Array(a12), aC = 0; aC < h9; aC++) h[aC] = this.abX(ahy);
		return h.fill(h[h9 - 1], h9), h
	}, this.abX = function(a12) {
		return bJ.a0B.a0F(this.sU(a12))
	}, this.abY = function() {
		var a3Q = this.sU(30);
		if (!(6 * a3Q > 8 * this.size - this.eP)) {
			var pU = bI.f7.vT(bI.f7.vU(a3Q)),
				pU = bD.pY.a8X(pU, "_", "/");
			pU = bD.pY.a8X(pU, "-", "+");
			for (var ahz = "";
				(pU.length + ahz.length) % 4;) ahz += "=";
			pU = "data:image/png;base64," + pU + ahz;
			var aNS = new Image;
			aNS.onload = function() {
				bC.aOP.aOQ(aNS), aNS.onload = null, aNS = null
			}, aNS.src = pU
		}
	}
}

function dU() {
	this.acd = 0, this.ace = 0, this.acZ = 0, this.aca = 0, this.acb = 0, this.acc = 0, this.aGa = [0, 0, 0, 0], this.oM = function() {
		this.acd = aT.a2G(), this.ace = aT.a2H(), this.acZ = -this.acd, this.aca = -this.ace, this.acb = i.j / iv, this.acc = i.k / iv, this.aGa[0] = Math.floor(this.acZ), this.aGa[1] = Math.floor(this.aca), this.aGa[2] = Math.floor(this.aGa[0] +
			this.acb + 1), this.aGa[3] = Math.floor(this.aGa[1] + this.acc + 1), be.aGY = !0
	}
}

function cv() {
	var aCC, nr;
	this.dr = function() {
		aCC = 1, nr = 0
	}, this.el = function() {
		0 < aCC && (nr = 0 === nr ? bi.eg + 16 : nr, aCC = (aCC -= .001 * (bi.eg - nr)) < 0 ? 0 : aCC, nr = bi.eg, bi.dy = !0)
	}, this.yl = function() {
		0 < aCC && (ym.fillStyle = "rgba(0,0,0," + aCC + ")", ym.fillRect(0, 0, i.j, i.k))
	}
}

function a7() {
	this.size = 0, this.eP = 0, this.aD = null, this.dr = function(aD) {
		this.eP = 0, this.aD = aD, this.size = aD.length
	}, this.a8 = function(ahv) {
		return this.dr(new Uint8Array(this.aZo(ahv))), this.aD
	}, this.xs = function() {
		this.aD = null
	}, this.a9 = function(size, aBa) {
		for (var aD = this.aD, oN = this.eP + size - 1, aC = this.eP; aC <= oN; aC++) aD[aC >> 3] |= (aBa >> oN - aC & 1) << 7 - (7 & aC);
		this.eP += size, this.eP > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aZn = function(size, aBa) {
		var g0 = size >> 1,
			fj = 1 << g0;
		this.a9(size - g0, bO.g7(aBa, fj)), this.a9(g0, aBa % fj)
	}, this.ai2 = function(size) {
		for (var aD = this.aD, oN = this.eP + size, aC = this.eP; aC < oN; aC++) aD[aC >> 3] &= 255 ^ 128 >>> (7 & aC)
	}, this.aZo = function(ahv) {
		return ahv + 7 >> 3
	}, this.ai3 = function(h, kI, oN, ai4) {
		for (var aC = kI; aC < oN; aC++) this.a9(ai4, h[aC])
	}
}

function dA() {
	this.dr = function() {
		this.h = [], this.eP = 0
	}, this.aaG = function() {
		return new Uint8Array(this.h)
	}, this.a9 = function(ai5, value) {
		for (var h = this.h, oN = this.eP + ai5 - 1, ai6 = 1 + (oN >> 3); h.length < ai6;) h.push(0);
		for (var aC = this.eP; aC <= oN; aC++) h[aC >> 3] |= (value >> oN - aC & 1) << 7 - (7 & aC);
		this.eP += ai5
	}, this.dx = function(h, a12, ahw) {
		var ai7 = bD.te.a6u(h);
		this.a9(a12, ai7);
		for (var aC = 0; aC < ai7; aC++) this.a9(ahw, h[aC])
	}, this.abr = function(h, a12, ahy) {
		var ai7 = bD.te.a6u(h);
		this.a9(a12, ai7);
		for (var aC = 0; aC < ai7; aC++) this.abp(h[aC], ahy)
	}, this.abp = function(pU, a12) {
		var fg = pU.length;
		this.a9(a12, fg);
		for (var aC = 0; aC < fg; aC++) this.a9(16, pU.charCodeAt(aC))
	}, this.abq = function(a70) {
		var ai8 = (a70 = a70.toDataURL()).split(",");
		if (ai8.length < 2) console.log("error 266");
		else {
			a70 = bD.pY.a8X(a70 = ai8[ai8.length - 1], "/", "_"), a70 = bD.pY.a8X(a70, "\\+", "-");
			var a70 = bD.pY.a8X(a70, "=", ""),
				a0O = bJ.f7.a0L(a70),
				fg = a0O.length;
			this.a9(30, fg);
			for (var aC = 0; aC < fg; aC++) this.a9(6, a0O[aC])
		}
	}
}
a(), self.aiCommand746 = function(g8) {
	0 === g8 ? c0() : 1 !== g8 || !a1 || 1 !== a1.id || a1.e8 < 14 || bM.g9()
}, setTimeout(c0, 1e4), window.onload = function() {
	c0()
};